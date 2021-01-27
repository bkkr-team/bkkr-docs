import { Component, ComponentInterface, Host, h, EventEmitter, Prop, Watch, Event, Element } from '@stencil/core';
import { Color, StyleEventDetail } from '../../interface';
import { getAriaLabel, renderHiddenInput } from '../../utils/helpers';
import { setClassList, hostContext } from '../../utils/style';
import { CheckboxChangeEventDetail } from './checkbox.interface';

/**
 * @part container - The container for the checkbox mark.
 * @part mark - The checkmark used to indicate the checked state.
 */
@Component({
  tag: 'bkkr-checkbox',
  styleUrl: 'checkbox.scss',
  shadow: true
})

export class Checkbox implements ComponentInterface {

  private inputId = `bkkr-cb-${checkboxIds++}`;
  private focusEl?: HTMLElement;

  @Element() el!: HTMLBkkrCheckboxElement;

  /**
   * The color to use from your application's color palette.
   * Default options are: `"primary"`, `"secondary"`, `"tertiary"`, `"success"`, `"warning"`, `"danger"`, `"light"`, `"medium"`, and `"dark"`.
   * For more information on colors, see [theming](/docs/theming/basics).
   */
  @Prop() color?: Color;

  /**
   * The name of the control, which is submitted with the form data.
   */
  @Prop() name: string = this.inputId;

  /**
   * If `true`, the checkbox is selected.
   */
  @Prop({ mutable: true }) checked = false;

  /**
   * If `true`, the checkbox will visually appear as indeterminate.
   */
  @Prop({ mutable: true }) indeterminate = false;

  /**
   * If `true`, the user cannot interact with the checkbox.
   */
  @Prop() disabled = false;

  /**
   * The value of the checkbox does not mean if it's checked or not, use the `checked`
   * property for that.
   *
   * The value of a checkbox is analogous to the value of an `<input type="checkbox">`,
   * it's only used when the checkbox participates in a native `<form>`.
   */
  @Prop() value = 'on';

  /**
   * Emitted when the checked property has changed.
   */
  @Event() bkkrChange!: EventEmitter<CheckboxChangeEventDetail>;

  /**
   * Emitted when the checkbox has focus.
   */
  @Event() bkkrFocus!: EventEmitter<void>;

  /**
   * Emitted when the checkbox loses focus.
   */
  @Event() bkkrBlur!: EventEmitter<void>;

  /**
   * Emitted when the styles change.
   * @internal
   */
  @Event() bkkrStyle!: EventEmitter<StyleEventDetail>;

  componentWillLoad() {
    this.emitStyle();
  }

  @Watch('checked')
  checkedChanged(isChecked: boolean) {
    this.bkkrChange.emit({
      checked: isChecked,
      value: this.value
    });
    this.emitStyle();
  }

  @Watch('disabled')
  disabledChanged() {
    this.emitStyle();
  }

  private emitStyle() {
    this.bkkrStyle.emit({
      'checkbox-checked': this.checked,
      'interactive-disabled': this.disabled,
    });
  }

  private setFocus() {
    if (this.focusEl) {
      this.focusEl.focus();
    }
  }

  private onClick = (ev: any) => {
    ev.preventDefault();

    this.setFocus();
    this.checked = !this.checked;
    this.indeterminate = false;
  }

  private onFocus = () => {
    this.bkkrFocus.emit();
  }

  private onBlur = () => {
    this.bkkrBlur.emit();
  }

  render() {
    const { color, checked, disabled, el, indeterminate, inputId, name, value } = this;
    const { label, labelId, labelText } = getAriaLabel(el, inputId);

    renderHiddenInput(true, el, name, (checked ? value : ''), disabled);

    let path = indeterminate
      ? <path d="M5 10.75L16 10.75" part="mark" />
      : <path d="M5,10.75 L8.5,14.25 L19.4,2.3 C18.8333333,1.43333333 18.0333333,1 17,1 L4,1 C2.35,1 1,2.35 1,4 L1,17 C1,18.65 2.35,20 4,20 L17,20 C18.65,20 20,18.65 20,17 L20,7.99769186" part="mark" />;

    return (
      <Host
        onClick={this.onClick}
        aria-labelledby={label ? labelId : null}
        aria-checked={`${checked}`}
        aria-hidden={disabled ? 'true' : null}
        role="checkbox"
        class={setClassList(color, {
          'in-item': hostContext('bkkr-item', el),
          'checkbox-checked': checked,
          'checkbox-disabled': disabled,
          'checkbox-indeterminate': indeterminate,
          'interactive': true
        })}
      >
        <svg class="checkbox-button" viewBox="0 0 21 21" part="container">
          {path}
        </svg>
        <label htmlFor={inputId}>
          {labelText}
        </label>
        <input
          type="checkbox"
          aria-checked={`${checked}`}
          disabled={disabled}
          id={inputId}
          onFocus={() => this.onFocus()}
          onBlur={() => this.onBlur()}
          ref={focusEl => this.focusEl = focusEl}
        />
      </Host>
    );
  }
}

let checkboxIds = 0;
