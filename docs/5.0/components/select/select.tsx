import { Component, ComponentInterface, Element, Host, Prop, h, EventEmitter, Method, Watch, Event, State } from '@stencil/core';
import { SelectChangeEventDetail, SelectCompareFn, SelectInterface } from './select.interface';

import { hostContext } from '../../utils/style';
import { alertController, drawerController, popoverController } from '../../utils/overlays';
import { AlertInput, AlertOptions } from '../alert/alert.interface';
import { PopoverOptions } from '../popover/popover.interface';
import { CssClassMap, StyleEventDetail } from '../../interface';
import { OverlaySelect } from '../../utils/overlays.interface';
import { findItemLabel, getAriaLabel, renderHiddenInput } from '../../utils/helpers';
import { watchForOptions } from '../../utils/watch-options';
import { SelectChoicesOption } from '../select-choices/select-choices.interface';
import { DrawerOptions } from '../drawer/drawer.interface';

/**
 * @part placeholder - The text displayed in the select when there is no value.
 * @part text - The displayed value of the select.
 * @part icon - The select icon container.
 */
@Component({
  tag: 'bkkr-select',
  styleUrl: 'select.scss',
  shadow: true
})

export class Select implements ComponentInterface {
  private mutationO?: MutationObserver;  
  private didInit = false;

  private inputId = `bkkr-sel-${selectIds++}`;
  private focusEl?: HTMLButtonElement;
  private overlay?: OverlaySelect;
  

  @Element() el!: HTMLBkkrSelectElement;

  @State() hasFocus = false;

  @State() isExpanded = false;

  /**
   * The text to display on the cancel button.
   */
  @Prop() cancelText = 'Cancel';

  /**
   * The text to display on the ok button.
   */
  @Prop() okText = 'OK';

  /**
   * The text to display when the select is empty.
   */
  @Prop() placeholder?: string | null;

  /**
   * If `true`, the select can accept multiple values.
   */
  @Prop() multiple = false;

  /**
   * the value of the select.
   */
  @Prop({ mutable: true }) value?: any | null;

  /**
   * The name of the control, which is submitted with the form data.
   */
  @Prop() name: string = this.inputId;

  /**
   * If `true`, the user cannot interact with the input.
   */
  @Prop({ reflect: true }) disabled = false;

  /**
   * A property name or function used to compare object values
   */
  @Prop() compareWith?: string | SelectCompareFn | null;

  /**
   * The text to display instead of the selected option's value.
   */
  @Prop() selectedText?: string | null;

  /**
   * The interface the select should use: `drawer`, `popover` or `alert`.
   */
  @Prop() interface: SelectInterface = 'drawer';

  /**
   * If true, a searchbar appears. This is not supported on 'alert' interface.
   */
  @Prop() search: boolean = true;

  /**
   * Any additional options that the `alert`, `action-sheet` or `popover` interface
   * can take. See the [bkkr-alert docs](../alert) and the
   * [bkkr-popover docs](../popover) for the
   * create options for each interface.
   *
   * Note: `interfaceOptions` will not override `inputs` or `buttons` with the `alert` interface.
   */
  @Prop() interfaceOptions: any = {};

  /**
   * Emitted when the value has changed.
   */
  @Event() bkkrChange!: EventEmitter<SelectChangeEventDetail>;

  /**
   * Emitted when the selection is cancelled.
   */
  @Event() bkkrCancel!: EventEmitter<void>;

  /**
   * Emitted when the select has focus.
   */
  @Event() bkkrFocus!: EventEmitter<void>;

  /**
   * Emitted when the select loses focus.
   */
  @Event() bkkrBlur!: EventEmitter<void>;

  /**
   * Emitted when the styles change.
   * @internal
   */
  @Event() bkkrStyle!: EventEmitter<StyleEventDetail>;

  @Watch('disabled')
  @Watch('placeholder')
  disabledChanged() {
    this.emitStyle();
  }

  @Watch('value')
  valueChanged() {
    this.emitStyle();
    if (this.didInit) {
      this.bkkrChange.emit({
        value: this.value,
      });
    }
  }

  componentDidLoad() {
    this.didInit = true;
  }

  connectedCallback() {
    this.updateOverlayOptions();
    this.emitStyle();

    this.mutationO = watchForOptions<HTMLBkkrSelectOptionElement>(this.el, 'ion-select-option', async () => {
      this.updateOverlayOptions();
    });
  }

  disconnectedCallback() {
    if (this.mutationO) {
      this.mutationO.disconnect();
      this.mutationO = undefined;
    }
  }

/**
   * Open the select overlay. The overlay is either an alert, action sheet, or popover,
   * depending on the `interface` property on the `bkkr-select`.
   *
   * @param event The user interface event that called the open.
   */
  @Method()
  async open(event?: UIEvent): Promise<any> {
    if (this.disabled || this.isExpanded) {
      return undefined;
    }
    const overlay = this.overlay = await this.createOverlay(event);
    this.isExpanded = true;
    this.hasFocus = true;
    this.emitStyle();

    overlay.onDidDismiss().then(() => {
      this.overlay = undefined;
      this.isExpanded = false;
      this.hasFocus = false;
      this.emitStyle();
      this.setFocus();
    });
    await overlay.present();
    return overlay;
  }

  private updateOverlayOptions(): void {
    const overlay = (this.overlay as any);
    if (!overlay) {
      return;
    }
    const childOpts = this.childOpts;
    const value = this.value;
    switch (this.interface) {
      case 'popover':
        const popover = overlay.querySelector('bkkr-select-popover');
        if (popover) {
          popover.options = this.createChoicesOptions(childOpts, value);
        }
        break;
      case 'drawer':
          const drawer = overlay.querySelector('bkkr-select-drawer');
          if (drawer) {
            drawer.options = this.createChoicesOptions(childOpts, value);
          }
          break;
      case 'alert':
        const inputType = (this.multiple ? 'checkbox' : 'radio');
        overlay.inputs = this.createAlertInputs(childOpts, inputType, value);
        break;
    }
  }

  private createOverlay(ev?: UIEvent): Promise<OverlaySelect> {
    let selectInterface = this.interface;

    if (selectInterface === 'popover' && !ev) {
      console.warn('Select interface cannot be a "popover" without passing an event. Using the "alert" interface instead.');
      selectInterface = 'alert';
    }

    if (selectInterface === 'drawer' && !ev) {
      console.warn('Select interface cannot be a "drawer" without passing an event. Using the "alert" interface instead.');
      selectInterface = 'alert';
    }

    if (selectInterface !== 'alert' && this.multiple) {
      console.warn('Multiple option is only supported in "drawer".');
      selectInterface = 'alert';
    }

    if (selectInterface === 'popover') {
      return this.openPopover(ev!);
    }
    if (selectInterface === 'alert') {
      return this.openAlert();
    }
    
    return this.openDrawer(ev!);
  }

  private async openPopover(ev: UIEvent) {
    const interfaceOptions = this.interfaceOptions;
    const value = this.value;

    const popoverOpts: PopoverOptions = {
      ...interfaceOptions,

      component: 'bkkr-select-choices',
      cssClass: ['select-popover', interfaceOptions.cssClass],
      event: ev,
      componentProps: {
        header: interfaceOptions.header,
        subHeader: interfaceOptions.subHeader,
        search: this.search,
        value,
        options: this.createChoicesOptions(this.childOpts, value)
      }
    };
    return popoverController.create(popoverOpts);
  }

  private async openDrawer(ev: UIEvent) {
    const interfaceOptions = this.interfaceOptions;
    const value = this.value;
    const drawerOpts: DrawerOptions = {
      ...interfaceOptions,

      component: 'bkkr-select-choices',
      cssClass: ['select-drawer', interfaceOptions.cssClass],
      event: ev,
      componentProps: {
        header: interfaceOptions.header,
        subHeader: interfaceOptions.subHeader,
        search: this.search,
        multiple: this.multiple,
        interfaceOptions: this.interfaceOptions,
        value,
        options: this.createChoicesOptions(this.childOpts, value)
      }
    };

    return drawerController.create(drawerOpts);
  }

  private createChoicesOptions(data: HTMLBkkrSelectOptionElement[], selectValue: any): SelectChoicesOption[] {
    const choicesOptions = data.map(option => {
      const value = getOptionValue(option);
      
      // Remove hydrated before copying over classes
      const copyClasses = Array.from(option.classList).filter(cls => cls !== 'hydrated').join(' ');
      const optClass = `${OPTION_CLASS} ${copyClasses}`;
      
      return {
        label: option.textContent || '',
        cssClass: optClass,
        value,
        selected: isOptionSelected(value, selectValue, this.compareWith),
        disabled: option.disabled,
        handler: () => {
          this.value = value;

          if (!this.multiple) {
            this.close();
          }
        }
      };
    });

    return choicesOptions;
  }

  private async openAlert() {
    const label = this.getLabel();
    const labelText = (label) ? label.textContent : null;

    const interfaceOptions = this.interfaceOptions;
    const inputType = (this.multiple ? 'checkbox' : 'radio');

    const alertOpts: AlertOptions = {
      ...interfaceOptions,

      header: interfaceOptions.header ? interfaceOptions.header : labelText,
      inputs: this.createAlertInputs(this.childOpts, inputType, this.value),
      buttons: [
        {
          text: this.cancelText,
          role: 'cancel',
          handler: () => {
            this.bkkrCancel.emit();
          }
        },
        {
          text: this.okText,
          handler: (selectedValues: any) => {
            this.value = selectedValues;
          }
        }
      ],
      cssClass: ['select-alert', interfaceOptions.cssClass,
                 (this.multiple ? 'multiple-select-alert' : 'single-select-alert')]
    };
    return alertController.create(alertOpts);
  }

  private createAlertInputs(data: HTMLBkkrSelectOptionElement[], inputType: 'checkbox' | 'radio', selectValue: any): AlertInput[] {
    const alertInputs = data.map(option => {
      const value = getOptionValue(option);

      // Remove hydrated before copying over classes
      const copyClasses = Array.from(option.classList).filter(cls => cls !== 'hydrated').join(' ');
      const optClass = `${OPTION_CLASS} ${copyClasses}`;

      return {
        type: inputType,
        cssClass: optClass,
        label: option.textContent || '',
        value,
        checked: isOptionSelected(value, selectValue, this.compareWith),
        disabled: option.disabled
      };
    });

    return alertInputs;
  }


  /**
   * Close the select interface.
   */
  private close(): Promise<boolean> {
    if (!this.overlay) {
      return Promise.resolve(false);
    }
    this.hasFocus = false;
    this.emitStyle();
    return this.overlay.dismiss();
  }

  private getLabel() {
    return findItemLabel(this.el);
  }

  private hasValue(): boolean {
    return this.getText() !== '';
  }

  private get childOpts() {
    return Array.from(this.el.querySelectorAll('bkkr-select-option'));
  }

  private getText(): string {
    const selectedText = this.selectedText;
    if (selectedText != null && selectedText !== '') {
      return selectedText;
    }
    return generateText(this.childOpts, this.value, this.compareWith);
  }

  private setFocus() {
    if (this.focusEl) {
      this.focusEl.focus();
    }
  }

  private emitStyle() {
    this.bkkrStyle.emit({
      'interactive': true,
      'select': true,
      'has-placeholder': this.placeholder != null,
      'has-value': this.hasValue(),
      'has-focus': this.hasFocus,
      'interactive-disabled': this.disabled,
      'select-disabled': this.disabled
    });
  }

  private onClick = (ev: UIEvent) => {
    this.setFocus();
    this.open(ev);
  }

  private onFocus = () => {
    this.bkkrFocus.emit();
  }

  private onBlur = () => {
    this.bkkrBlur.emit();
  }


  render() {
    const { disabled, el, inputId, isExpanded, name, placeholder, value } = this;
    const { labelText, labelId } = getAriaLabel(el, inputId);

    renderHiddenInput(true, el, name, parseValue(value), disabled);

    const displayValue = this.getText();

    let addPlaceholderClass = false;
    let selectText = displayValue;
    if (selectText === '' && placeholder != null) {
      selectText = placeholder;
      addPlaceholderClass = true;
    }

    const selectTextClasses: CssClassMap = {
      'select-text': true,
      'select-placeholder': addPlaceholderClass
    };

    const textPart = addPlaceholderClass ? 'placeholder' : 'text';

    // If there is a label then we need to concatenate it with the
    // current value (or placeholder) and a comma so it separates
    // nicely when the screen reader announces it, otherwise just
    // announce the value / placeholder
    const displayLabel = labelText !== undefined
      ? (selectText !== '' ? `${selectText}, ${labelText}` : labelText)
      : selectText;

    return (
      <Host
        onClick={this.onClick}
        role="button"
        aria-haspopup="listbox"
        aria-disabled={disabled ? 'true' : null}
        aria-label={displayLabel}
        class={{
          'in-item': hostContext('bkkr-item', el),
          'select-disabled': disabled,
          'has-value': this.hasValue(),
          'has-focus': this.hasFocus
        }}
      >
        <div aria-hidden="true" class={selectTextClasses} part={textPart}>
          {selectText}
        </div>
        <div class="select-icon" role="presentation" part="icon">
          <div class="select-icon-inner"></div>
        </div>
        <label id={labelId}>
          {displayLabel}
        </label>
        <button
          type="button"
          disabled={disabled}
          id={inputId}
          aria-labelledby={labelId}
          aria-haspopup="listbox"
          aria-expanded={`${isExpanded}`}
          onFocus={this.onFocus}
          onBlur={this.onBlur}
          ref={(focusEl => this.focusEl = focusEl)}
        ></button>
      </Host>
    );
  }

  /**
   * Returns the list of values.
   *
   * @param value - Value or list of values.
   * @returns List of values.
   */
  /* private getValues(value: string | Array<string>): Array<string> {
    console.log(typeof value !== 'undefined');
    return typeof value !== 'undefined'
      ? [].concat(typeof value === 'string' ? value.split(',') : value)
      : [];
  } */

  /* private createSelectOptions(values: string | Array<string>): Array<HTMLStencilElement> {
    return this.getValues(values).map((value) => <option value={value}>{value}</option>);
  } */
}

const isOptionSelected = (currentValue: any[] | any, compareValue: any, compareWith?: string | SelectCompareFn | null) => {
  if (currentValue === undefined) {
    return false;
  }
  if (Array.isArray(currentValue)) {
    return currentValue.some(val => compareOptions(val, compareValue, compareWith));
  } else {
    return compareOptions(currentValue, compareValue, compareWith);
  }
};

const getOptionValue = (el: HTMLBkkrSelectOptionElement) => {
  const value = el.value;
  return (value === undefined)
    ? el.textContent || ''
    : value;
};

const parseValue = (value: any) => {
  if (value == null) {
    return undefined;
  }
  if (Array.isArray(value)) {
    return value.join(',');
  }
  return value.toString();
};

const compareOptions = (currentValue: any, compareValue: any, compareWith?: string | SelectCompareFn | null): boolean => {
  if (typeof compareWith === 'function') {
    return compareWith(currentValue, compareValue);
  } else if (typeof compareWith === 'string') {
    return currentValue[compareWith] === compareValue[compareWith];
  } else {
    return Array.isArray(compareValue) ? compareValue.includes(currentValue) : currentValue === compareValue;
  }
};

const generateText = (opts: HTMLBkkrSelectOptionElement[], value: any | any[], compareWith?: string | SelectCompareFn | null) => {
  if (value === undefined) {
    return '';
  }
  if (Array.isArray(value)) {
    return value
      .map(v => textForValue(opts, v, compareWith))
      .filter(opt => opt !== null)
      .join(', ');
  } else {
    return textForValue(opts, value, compareWith) || '';
  }
};

const textForValue = (opts: HTMLBkkrSelectOptionElement[], value: any, compareWith?: string | SelectCompareFn | null): string | null => {
  const selectOpt = opts.find(opt => {
    return compareOptions(getOptionValue(opt), value, compareWith);
  });
  return selectOpt
    ? selectOpt.textContent
    : null;
};


let selectIds = 0;

const OPTION_CLASS = 'select-interface-option';
