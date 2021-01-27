import { Component, ComponentInterface, Host, h, Prop, State, Element, forceUpdate } from '@stencil/core';
import { hostContext } from '../../utils/style';
import { addEventListener, removeEventListener } from '../../utils/helpers';

let ids = 0;

/**
 * @part native - The native HTML button element that wraps all child elements.
 * @part indicator - The indicator displayed on the checked segment button.
 * @part indicator-background - The background element for the indicator displayed on the checked segment button.
 */
@Component({
  tag: 'bkkr-segment-button',
  styleUrl: 'segment-button.scss',
  shadow: true
})

export class SegmentButton implements ComponentInterface {
  private segmentEl: HTMLBkkrSegmentElement | null = null;

  @Element() el!: HTMLBkkrSegmentButtonElement;

  @State() checked = false;

  /**
   * If `true`, the user cannot interact with the segment button.
   */
  @Prop() disabled = false;

  /**
   * The type of the button.
   */
  @Prop() type: 'submit' | 'reset' | 'button' = 'button';

  /**
   * The value of the segment button.
   */
  @Prop() value: string = 'bkkr-sb-' + (ids++);

  connectedCallback() {
    const segmentEl = this.segmentEl = this.el.closest('bkkr-segment');
    if (segmentEl) {
      this.updateState();
      addEventListener(segmentEl, 'bkkrSelect', this.updateState);
      addEventListener(segmentEl, 'bkkrStyle', this.updateStyle);
    }
  }

  disconnectedCallback() {
    const segmentEl = this.segmentEl;
    if (segmentEl) {
      removeEventListener(segmentEl, 'bkkrSelect', this.updateState);
      removeEventListener(segmentEl, 'bkkrStyle', this.updateStyle);
      this.segmentEl = null;
    }
  }

  private updateStyle = () => {
    forceUpdate(this);
  }

  private updateState = () => {
    if (this.segmentEl) {
      this.checked = this.segmentEl.value === this.value;
    }
  }

  render() {
    const { checked, type, disabled, segmentEl } = this;
    const hasSegmentColor = () => segmentEl !== null && segmentEl.color !== undefined;
    return (
      <Host
        aria-disabled={disabled ? 'true' : null}
        class={{
          'in-toolbar': hostContext('bkkr-toolbar', this.el),
          'in-toolbar-color': hostContext('bkkr-toolbar[color]', this.el),
          'in-segment': hostContext('bkkr-segment', this.el),
          'in-segment-color': hasSegmentColor(),
          'segment-button-disabled': disabled,
          'segment-button-checked': checked,
          'bkkr-activatable': true,
          'bkkr-activatable-instant': true,
          'bkkr-focusable': true,
        }}
      >
        <button
          type={type}
          aria-pressed={checked ? 'true' : 'false'}
          class="button-native"
          part="native"
          disabled={disabled}
        >
          <span class="button-inner">
            <slot></slot>
          </span>
        </button>
        <div
          part="indicator"
          class={{
            'segment-button-indicator': true,
            'segment-button-indicator-animated': true
          }}
        >
          <div part="indicator-background" class="segment-button-indicator-background"></div>
        </div>

      </Host>
    );
  }
}
