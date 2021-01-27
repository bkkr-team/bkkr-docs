import { Component, ComponentInterface, Host, h, EventEmitter, forceUpdate, Listen, Method, Prop, Watch, Element, Event } from '@stencil/core';
import { CssClassMap } from '../../interface';
import { AnimationBuilder } from '../../utils/animation/animation-interface';
import { Gesture } from '../../utils/gesture';
import { createButtonActiveGesture } from '../../utils/gesture/button-active';
import { prepareOverlay, present, dismiss, eventMethod, isCancel, BACKDROP } from '../../utils/overlays';
import { OverlayInterface, OverlayEventDetail } from '../../utils/overlays.interface';
import { SafeString, sanitizeDOMString } from '../../utils/sanitization';
import { getClassMap } from '../../utils/style';
import { AlertInput, AlertButton, AlertTextareaAttributes, AlertInputAttributes } from './alert.interface';
import { enterAnimation } from './animations/enter';
import { leaveAnimation } from './animations/leave';

@Component({
  tag: 'bkkr-alert',
  styleUrl: 'alert.scss',
  scoped: true
})

export class Alert implements ComponentInterface, OverlayInterface {

  private activeId?: string;
  private inputType?: string;
  private processedInputs: AlertInput[] = [];
  private processedButtons: AlertButton[] = [];
  private wrapperEl?: HTMLElement;
  private gesture?: Gesture;

  presented = false;
  lastFocus?: HTMLElement;

  @Element() el!: HTMLBkkrAlertElement;

  /** @internal */
  @Prop() overlayIndex!: number;

  /**
   * If `true`, the keyboard will be automatically dismissed when the overlay is presented.
   */
  @Prop() keyboardClose = true;

  /**
   * Animation to use when the alert is presented.
   */
  @Prop() enterAnimation?: AnimationBuilder;

  /**
   * Animation to use when the alert is dismissed.
   */
  @Prop() leaveAnimation?: AnimationBuilder;

  /**
   * Additional classes to apply for custom CSS. If multiple classes are
   * provided they should be separated by spaces.
   */
  @Prop() cssClass?: string | string[];

  /**
   * The main title in the heading of the alert.
   */
  @Prop() header?: string;

  /**
   * The subtitle in the heading of the alert. Displayed under the title.
   */
  @Prop() subHeader?: string;

  /**
   * The main message to be displayed in the alert.
   * `message` can accept either plaintext or HTML as a string.
   * To display characters normally reserved for HTML, they
   * must be escaped. For example `<Bkkr>` would become
   * `&lt;Bkkr&gt;`
   */
  @Prop() message?: string | SafeString;

  /**
   * Array of buttons to be added to the alert.
   */
  @Prop() buttons: (AlertButton | string)[] = [];

   /**
   * Array of input to show in the alert.
   */
  @Prop({ mutable: true }) inputs: AlertInput[] = [];

  /**
   * If `true`, the alert will be dismissed when the backdrop is clicked.
   */
  @Prop() backdropDismiss = true;

  /**
   * If `true`, the alert will animate.
   */
  @Prop() animated = true;

  /**
   * Emitted after the alert has presented.
   */
  @Event({ eventName: 'alertDidPresent' }) didPresent!: EventEmitter<void>;

  /**
   * Emitted before the alert has presented.
   */
  @Event({ eventName: 'alertWillPresent' }) willPresent!: EventEmitter<void>;

  /**
   * Emitted before the alert has dismissed.
   */
  @Event({ eventName: 'alertWillDismiss' }) willDismiss!: EventEmitter<OverlayEventDetail>;

  /**
   * Emitted after the alert has dismissed.
   */
  @Event({ eventName: 'alertDidDismiss' }) didDismiss!: EventEmitter<OverlayEventDetail>;

  @Listen('keydown', { target: 'document' })
  onKeydown(ev: any) {
    const inputTypes = new Set(this.processedInputs.map(i => i.type));

    // The only inputs we want to navigate between using arrow keys are the radios
    // ignore the keydown event if it is not on a radio button
    if (
      !inputTypes.has('radio')
      || (ev.target && !this.el.contains(ev.target))
      || ev.target.classList.contains('alert-button')) {
      return;
    }

    // Get all radios inside of the radio group and then
    // filter out disabled radios since we need to skip those
    const query = this.el.querySelectorAll('.alert-radio') as NodeListOf<HTMLButtonElement>;
    const radios = Array.from(query).filter(radio => !radio.disabled);

    // The focused radio is the one that shares the same id as
    // the event target
    const index = radios.findIndex(radio => radio.id === ev.target.id);

    // We need to know what the next radio element should
    // be in order to change the focus
    let nextEl: HTMLButtonElement | undefined;

    // If hitting arrow down or arrow right, move to the next radio
    // If we're on the last radio, move to the first radio
    if (['ArrowDown', 'ArrowRight'].includes(ev.code)) {
      nextEl = (index === radios.length - 1)
        ? radios[0]
        : radios[index + 1];
    }

    // If hitting arrow up or arrow left, move to the previous radio
    // If we're on the first radio, move to the last radio
    if (['ArrowUp', 'ArrowLeft'].includes(ev.code)) {
      nextEl = (index === 0)
        ? radios[radios.length - 1]
        : radios[index - 1];
    }

    if (nextEl && radios.includes(nextEl)) {
      const nextProcessed = this.processedInputs.find(input => input.id === nextEl?.id);

      if (nextProcessed) {
        this.rbClick(nextProcessed);
        nextEl.focus();
      }
    }
  }

  @Watch('buttons')
  buttonsChanged() {
    const buttons = this.buttons;
    this.processedButtons = buttons.map(btn => {
      return (typeof btn === 'string')
        ? { text: btn, role: btn.toLowerCase() === 'cancel' ? 'cancel' : undefined }
        : btn;
    });
  }

  @Watch('inputs')
  inputsChanged() {
    const inputs = this.inputs;

    // Get the first input that is not disabled and the checked one
    // If an enabled checked input exists, set it to be the focusable input
    // otherwise we default to focus the first input
    // This will only be used when the input is type radio
    const first = inputs.find(input => !input.disabled);
    const checked = inputs.find(input => input.checked && !input.disabled);
    const focusable = checked || first;

    // An alert can be created with several different inputs. Radios,
    // checkboxes and inputs are all accepted, but they cannot be mixed.
    const inputTypes = new Set(inputs.map(i => i.type));
    if (inputTypes.has('checkbox') && inputTypes.has('radio')) {
      console.warn(`Alert cannot mix input types: ${(Array.from(inputTypes.values()).join('/'))}. Please see alert docs for more info.`);
    }

    this.inputType = inputTypes.values().next().value;
    this.processedInputs = inputs.map((i, index) => ({
      type: i.type || 'text',
      name: i.name || `${index}`,
      placeholder: i.placeholder || '',
      value: i.value,
      label: i.label,
      checked: !!i.checked,
      disabled: !!i.disabled,
      id: i.id || `alert-input-${this.overlayIndex}-${index}`,
      handler: i.handler,
      min: i.min,
      max: i.max,
      cssClass: i.cssClass || '',
      attributes: i.attributes || {},
      tabindex: (i.type === 'radio' && i !== focusable) ? -1 : 0
    }) as AlertInput);
  }

  connectedCallback() {
    prepareOverlay(this.el);
  }

  componentWillLoad() {
    this.inputsChanged();
    this.buttonsChanged();
  }

  disconnectedCallback() {
    if (this.gesture) {
      this.gesture.destroy();
      this.gesture = undefined;
    }
  }

  componentDidLoad() {
    /**
     * Do not create gesture if:
     * 1. A gesture already exists
     * 2. App is running in MD mode
     * 3. A wrapper ref does not exist
     */
    if (this.gesture || !this.wrapperEl) { return; }

    this.gesture = createButtonActiveGesture(
      this.wrapperEl,
      (refEl: HTMLElement) => refEl.classList.contains('alert-button')
    );
    this.gesture.enable(true);
  }

  /**
   * Present the alert overlay after it has been created.
   */
  @Method()
  present(): Promise<void> {
    return present(this, enterAnimation);
  }

  /**
   * Dismiss the alert overlay after it has been presented.
   *
   * @param data Any data to emit in the dismiss events.
   * @param role The role of the element that is dismissing the alert.
   * This can be useful in a button handler for determining which button was
   * clicked to dismiss the alert.
   * Some examples include: ``"cancel"`, `"destructive"`, "selected"`, and `"backdrop"`.
   */
  @Method()
  dismiss(data?: any, role?: string): Promise<boolean> {
    return dismiss(this, data, role, leaveAnimation);
  }

  /**
   * Returns a promise that resolves when the alert did dismiss.
   */
  @Method()
  onDidDismiss<T = any>(): Promise<OverlayEventDetail<T>> {
    return eventMethod(this.el, 'alertDidDismiss');
  }

  /**
   * Returns a promise that resolves when the alert will dismiss.
   */
  @Method()
  onWillDismiss<T = any>(): Promise<OverlayEventDetail<T>> {
    return eventMethod(this.el, 'alertWillDismiss');
  }

  private rbClick(selectedInput: AlertInput) {
    for (const input of this.processedInputs) {
      input.checked = input === selectedInput;
      input.tabindex = input === selectedInput ? 0 : -1;
    }
    this.activeId = selectedInput.id;
    selectedInput.handler ? selectedInput.handler(selectedInput) : null;
    forceUpdate(this);
  }

  private cbClick(selectedInput: AlertInput) {
    selectedInput.checked = !selectedInput.checked;
    selectedInput.handler ? selectedInput.handler(selectedInput) : null;
    forceUpdate(this);
  }

  private buttonClick(button: AlertButton) {
    const role = button.role;
    const values = this.getValues();
    if (isCancel(role)) {
      return this.dismiss({ values }, role);
    }
    const returnData = this.callButtonHandler(button, values);
    if (returnData !== false) {
      return this.dismiss({ values, ...returnData }, button.role);
    }
    return Promise.resolve(false);
  }

  private callButtonHandler(button: AlertButton | undefined, data?: any) {
    if (button && button.handler) {
      // a handler has been provided, execute it
      // pass the handler the values from the inputs
      const returnData = button.handler(data);
      if (returnData === false) {
        // if the return value of the handler is false then do not dismiss
        return false;
      }
      if (typeof returnData === 'object') {
        return returnData;
      }
    }
    return {};
  }

  private getValues(): any {
    if (this.processedInputs.length === 0) {
      // this is an alert without any options/inputs at all
      return undefined;
    }

    if (this.inputType === 'radio') {
      // this is an alert with radio buttons (single value select)
      // return the one value which is checked, otherwise undefined
      const checkedInput = this.processedInputs.find(i => !!i.checked);
      return checkedInput ? checkedInput.value : undefined;
    }

    if (this.inputType === 'checkbox') {
      // this is an alert with checkboxes (multiple value select)
      // return an array of all the checked values
      return this.processedInputs.filter(i => i.checked).map(i => i.value);
    }

    // this is an alert with text inputs
    // return an object of all the values with the input name as the key
    const values: {[k: string]: string} = {};
    this.processedInputs.forEach(i => {
      values[i.name!] = i.value || '';
    });
    return values;
  }

  private renderAlertInputs() {
    switch (this.inputType) {
      case 'checkbox': return this.renderCheckbox();
      case 'radio': return this.renderRadio();
      default: return this.renderInput();
    }
  }

  private renderCheckbox() {
    const inputs = this.processedInputs;

    if (inputs.length === 0) {
      return null;
    }

    return (
      <div class="alert-checkbox-group">
        { inputs.map(i => (
          <button
            type="button"
            onClick={() => this.cbClick(i)}
            aria-checked={`${i.checked}`}
            id={i.id}
            disabled={i.disabled}
            tabIndex={i.tabindex}
            role="checkbox"
            class={{
              ...getClassMap(i.cssClass),
              'alert-tappable': true,
              'alert-checkbox': true,
              'alert-checkbox-button': true,
              'bkkr-focusable': true,
              'alert-checkbox-button-disabled': i.disabled || false
            }}
          >
            <div class="alert-button-inner">
              <div class="alert-checkbox-icon">
                <div class="alert-checkbox-inner"></div>
              </div>
              <div class="alert-checkbox-label">
                {i.label}
              </div>
            </div>
          </button>
        ))}
      </div>
    );
  }

  private renderRadio() {
    const inputs = this.processedInputs;

    if (inputs.length === 0) {
      return null;
    }

    return (
      <div class="alert-radio-group" role="radiogroup" aria-activedescendant={this.activeId}>
        { inputs.map(i => (
          <button
            type="button"
            onClick={() => this.rbClick(i)}
            aria-checked={`${i.checked}`}
            disabled={i.disabled}
            id={i.id}
            tabIndex={i.tabindex}
            class={{
              ...getClassMap(i.cssClass),
              'alert-radio-button': true,
              'alert-tappable': true,
              'alert-radio': true,
              'bkkr-focusable': true,
              'alert-radio-button-disabled': i.disabled || false
            }}
            role="radio"
          >
            <div class="alert-button-inner">
              <div class="alert-radio-icon"><div class="alert-radio-inner"></div></div>
              <div class="alert-radio-label">
                {i.label}
              </div>
            </div>
          </button>
        ))}
      </div>
    );
  }

  private renderInput() {
    const inputs = this.processedInputs;
    if (inputs.length === 0) {
      return null;
    }
    return (
      <div class="alert-input-group">
        { inputs.map(i => {
          if (i.type === 'textarea') {
            return (
              <div class="alert-input-wrapper">
                <textarea
                  placeholder={i.placeholder}
                  value={i.value}
                  id={i.id}
                  tabIndex={i.tabindex}
                  {...i.attributes as AlertTextareaAttributes}
                  disabled={i.attributes?.disabled ?? i.disabled}
                  class={inputClass(i)}
                  onInput={e => {
                    i.value = (e.target as any).value;
                    if (i.attributes?.onInput) { i.attributes.onInput(e); }
                  }}
                />
              </div>
            );
          } else {
            return (
              <div class="alert-input-wrapper">
                <input
                  placeholder={i.placeholder}
                  type={i.type}
                  min={i.min}
                  max={i.max}
                  value={i.value}
                  id={i.id}
                  tabIndex={i.tabindex}
                  {...i.attributes as AlertInputAttributes}
                  disabled={i.attributes?.disabled ?? i.disabled}
                  class={inputClass(i)}
                  onInput={e => {
                    i.value = (e.target as any).value;
                    if (i.attributes?.onInput) { i.attributes.onInput(e); }
                  }}
                />
              </div>
            );
          }
        })}
      </div>
    );
  }

  private onBackdropTap = () => {
    this.dismiss(undefined, BACKDROP);
  }

  private dispatchCancelHandler = (ev: CustomEvent) => {
    const role = ev.detail.role;
    if (isCancel(role)) {
      const cancelButton = this.processedButtons.find(b => b.role === 'cancel');
      this.callButtonHandler(cancelButton);
    }
  }

  private renderAlertButtons() {
    const buttons = this.processedButtons;
    const alertButtonGroupClass = {
      'alert-button-group': true,
      'alert-button-group-vertical': buttons.length > 2
    };
    return (
      <div class={alertButtonGroupClass}>
        {buttons.map(button =>
          <button type="button" class={buttonClass(button)} tabIndex={0} onClick={() => this.buttonClick(button)}>
            <span class="alert-button-inner">
              {button.text}
            </span>
          </button>
        )}
      </div>
    );
  }

  render() {
    const { overlayIndex, header, subHeader } = this;
    const hdrId = `alert-${overlayIndex}-hdr`;
    const subHdrId = `alert-${overlayIndex}-sub-hdr`;
    const msgId = `alert-${overlayIndex}-msg`;

    return (
      <Host
        role="dialog"
        aria-modal="true"
        tabindex="-1"
        style={{
          zIndex: `${20000 + overlayIndex}`,
        }}
        class={{
          ...getClassMap(this.cssClass)
        }}
        onBkkrAlertWillDismiss={this.dispatchCancelHandler}
        onBkkrBackdropTap={this.onBackdropTap}
      >

        <bkkr-backdrop tappable={this.backdropDismiss}/>

        <div tabindex="0"></div>

        <div class="alert-wrapper bkkr-overlay-wrapper" ref={el => this.wrapperEl = el}>

          <div class="alert-head">
            {header && <h2 id={hdrId} class="alert-title">{header}</h2>}
            {subHeader && <h2 id={subHdrId} class="alert-sub-title">{subHeader}</h2>}
          </div>

          <div id={msgId} class="alert-message" innerHTML={sanitizeDOMString(this.message)}></div>

          {this.renderAlertInputs()}
          {this.renderAlertButtons()}

        </div>

        <div tabindex="0"></div>
      </Host>
    );
  }
}

const inputClass = (input: AlertInput): CssClassMap => {
  return {
    'alert-input': true,
    'alert-input-disabled': (input.attributes?.disabled ?? input.disabled) || false,
    ...getClassMap(input.cssClass),
    ...getClassMap(input.attributes ? input.attributes.class?.toString() : ''),
  };
};

const buttonClass = (button: AlertButton): CssClassMap => {
  return {
    'alert-button': true,
    'bkkr-focusable': true,
    'bkkr-activatable': true,
    [`alert-button-role-${button.role}`]: button.role !== undefined,
    ...getClassMap(button.cssClass)
  };
};
