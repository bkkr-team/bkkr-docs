import { Component, ComponentInterface, Host, h, EventEmitter, Method, Prop, State, Watch, Event, Element } from '@stencil/core';
import { Color, StyleEventDetail } from '../../interface';
import { addEventListener, getAriaLabel, removeEventListener } from '../../utils/helpers';
import { hostContext, setClassList } from '../../utils/style';

/**
 * @part container - The container for the radio mark.
 * @part mark - The checkmark or dot used to indicate the checked state.
 */@Component({
  tag: 'bkkr-radio',
  styleUrl: 'radio.scss',
  shadow: true
})

export class Radio implements ComponentInterface {
  private inputId = `bkkr-rb-${radioButtonIds++}`;
  private radioGroup: HTMLBkkrRadioGroupElement | null = null;

  @Element() el!: HTMLBkkrRadioElement;

  /**
   * If `true`, the radio is selected.
   */
  @State() checked = false;

  /**
   * The tabindex of the radio button.
   * @internal
   */
  @State() buttonTabindex = -1;

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
   * If `true`, the user cannot interact with the radio.
   */
  @Prop() disabled = false;

  /**
   * the value of the radio.
   */
  @Prop() value?: any | null;

  /**
   * Emitted when the styles change.
   * @internal
   */
  @Event() bkkrStyle!: EventEmitter<StyleEventDetail>;

  /**
   * Emitted when the radio button has focus.
   */
  @Event() bkkrFocus!: EventEmitter<void>;

  /**
   * Emitted when the radio button loses focus.
   */
  @Event() bkkrBlur!: EventEmitter<void>;

  /** @internal */
  @Method()
  async setFocus(ev: any) {
    ev.stopPropagation();
    ev.preventDefault();

    this.el.focus();
  }

  /** @internal */
  @Method()
  async setButtonTabindex(value: number) {
    this.buttonTabindex = value;
  }

  connectedCallback() {
    if (this.value === undefined) {
      this.value = this.inputId;
    }
    const radioGroup = this.radioGroup = this.el.closest('bkkr-radio-group');
    if (radioGroup) {
      this.updateState();
      addEventListener(radioGroup, 'bkkrChange', this.updateState);
    }
  }

  disconnectedCallback() {
    const radioGroup = this.radioGroup;
    if (radioGroup) {
      removeEventListener(radioGroup, 'bkkrChange', this.updateState);
      this.radioGroup = null;
    }
  }

  componentWillLoad() {
    this.emitStyle();
  }

  @Watch('color')
  @Watch('checked')
  @Watch('disabled')
  emitStyle() {
    this.bkkrStyle.emit({
      'radio-checked': this.checked,
      'interactive-disabled': this.disabled,
    });
  }

  private updateState = () => {
    if (this.radioGroup) {
      this.checked = this.radioGroup.value === this.value;
    }
  }


  private onFocus = () => {
    this.bkkrFocus.emit();
  }

  private onBlur = () => {
    this.bkkrBlur.emit();
  }

  render() {
    const { inputId, disabled, checked, color, el, buttonTabindex } = this;
    const { label, labelId, labelText } = getAriaLabel(el, inputId);

    return (
      <Host
        aria-checked={`${checked}`}
        aria-hidden={disabled ? 'true' : null}
        aria-labelledby={label ? labelId : null}
        role="radio"
        tabindex={buttonTabindex}
        onFocus={this.onFocus}
        onBlur={this.onBlur}
        class={setClassList(color, {
          'in-item': hostContext('bkkr-item', el),
          'interactive': true,
          'radio-checked': checked,
          'radio-disabled': disabled,
        })}
      >
        <div class="radio-button" part="container">
          <div class="radio-mark" part="mark" />
        </div>
        <label htmlFor={inputId}>
          {labelText}
        </label>
        <input
          type="radio"
          checked={checked}
          disabled={disabled}
          tabindex="-1"
          id={inputId}
        />
      </Host>
    );
  }
}

let radioButtonIds = 0;
