import { Component, ComponentInterface, Host, h, EventEmitter, Method, Prop, Element, Event } from '@stencil/core';
import { Color, CssClassMap } from '../../interface';
import { AnimationBuilder } from '../../utils/animation/animation-interface';
import { prepareOverlay, present, dismiss, eventMethod, isCancel } from '../../utils/overlays';
import { OverlayEventDetail, OverlayInterface } from '../../utils/overlays.interface';
import { SafeString, sanitizeDOMString } from '../../utils/sanitization';
import { getClassMap, setClassList } from '../../utils/style';
import { ToastButton } from './toast.interface';
import { enterAnimation } from './animations/enter';
import { leaveAnimation } from './animations/leave';

/**
 * @part button - Any button element that is displayed inside of the toast.
 * @part container - The element that wraps all child elements.
 * @part header - The header text of the toast.
 * @part message - The body text of the toast.
 */
@Component({
  tag: 'bkkr-toast',
  styleUrl: 'toast.scss',
  shadow: true
})

export class Toast implements ComponentInterface, OverlayInterface {
  private durationTimeout: any;

  presented = false;

  @Element() el!: HTMLBkkrToastElement;

  /**
   * @internal
   */
  @Prop() overlayIndex!: number;

  /**
   * The color to use from your application's color palette.
   * Default options are: `"primary"`, `"secondary"`, `"tertiary"`, `"success"`, `"warning"`, `"danger"`, `"light"`, `"medium"`, and `"dark"`.
   * For more information on colors, see [theming](/docs/theming/basics).
   */
  @Prop() color?: Color;

  /**
   * Animation to use when the toast is presented.
   */
  @Prop() enterAnimation?: AnimationBuilder;

  /**
   * Animation to use when the toast is dismissed.
   */
  @Prop() leaveAnimation?: AnimationBuilder;

  /**
   * Additional classes to apply for custom CSS. If multiple classes are
   * provided they should be separated by spaces.
   */
  @Prop() cssClass?: string | string[];

  /**
   * How many milliseconds to wait before hiding the toast. By default, it will show
   * until `dismiss()` is called.
   */
  @Prop() duration = 0;

  /**
   * Header to be shown in the toast.
   */
  @Prop() header?: string;

  /**
   * If `true`, the keyboard will be automatically dismissed when the overlay is presented.
   */
  @Prop() keyboardClose = false;

  /**
   * Message to be shown in the toast.
   */
  @Prop() message?: string | SafeString;

  /**
   * The position of the toast on the screen.
   */
  @Prop() position: 'top' | 'bottom' | 'middle' = 'top';

  /**
   * An array of buttons for the toast.
   */
  @Prop() buttons?: (ToastButton | string)[];

  /**
   * If `true`, the toast will animate.
   */
  @Prop() animated = true;

  /**
   * Emitted after the toast has presented.
   */
  @Event({ eventName: 'toastDidPresent' }) didPresent!: EventEmitter<void>;

  /**
   * Emitted before the toast has presented.
   */
  @Event({ eventName: 'toastWillPresent' }) willPresent!: EventEmitter<void>;

  /**
   * Emitted before the toast has dismissed.
   */
  @Event({ eventName: 'toastWillDismiss' }) willDismiss!: EventEmitter<OverlayEventDetail>;

  /**
   * Emitted after the toast has dismissed.
   */
  @Event({ eventName: 'toastDidDismiss' }) didDismiss!: EventEmitter<OverlayEventDetail>;

  connectedCallback() {
    prepareOverlay(this.el);
  }

  /**
   * Present the toast overlay after it has been created.
   */
  @Method()
  async present(): Promise<void> {
    await present(this, enterAnimation, this.position);

    if (this.duration > 0) {
      this.durationTimeout = setTimeout(() => this.dismiss(undefined, 'timeout'), this.duration);
    }
  }

  /**
   * Dismiss the toast overlay after it has been presented.
   *
   * @param data Any data to emit in the dismiss events.
   * @param role The role of the element that is dismissing the toast.
   * This can be useful in a button handler for determining which button was
   * clicked to dismiss the toast.
   * Some examples include: ``"cancel"`, `"destructive"`, "selected"`, and `"backdrop"`.
   */
  @Method()
  dismiss(data?: any, role?: string): Promise<boolean> {
    if (this.durationTimeout) {
      clearTimeout(this.durationTimeout);
    }
    return dismiss(this, data, role, leaveAnimation, this.position);
  }

  /**
   * Returns a promise that resolves when the toast did dismiss.
   */
  @Method()
  onDidDismiss<T = any>(): Promise<OverlayEventDetail<T>> {
    return eventMethod(this.el, 'toastDidDismiss');
  }

  /**
   * Returns a promise that resolves when the toast will dismiss.
   */
  @Method()
  onWillDismiss<T = any>(): Promise<OverlayEventDetail<T>> {
    return eventMethod(this.el, 'toastWillDismiss');
  }

  private getButtons(): ToastButton[] {
    const buttons = this.buttons
      ? this.buttons.map(b => {
        return (typeof b === 'string')
          ? { text: b }
          : b;
      })
      : [];

    return buttons;
  }

  private async buttonClick(button: ToastButton) {
    const role = button.role;
    if (isCancel(role)) {
      return this.dismiss(undefined, role);
    }
    const shouldDismiss = await this.callButtonHandler(button);
    if (shouldDismiss) {
      return this.dismiss(undefined, role);
    }
    return Promise.resolve();
  }

  private async callButtonHandler(button: ToastButton | undefined) {
    if (button && button.handler) {
      // a handler has been provided, execute it
      // pass the handler the values from the inputs
      try {
        const rtn = await button.handler();
        if (rtn === false) {
          // if the return value of the handler is false then do not dismiss
          return false;
        }
      } catch (e) {
        console.error(e);
      }
    }
    return true;
  }

  private dispatchCancelHandler = (ev: CustomEvent) => {
    const role = ev.detail.role;
    if (isCancel(role)) {
      const cancelButton = this.getButtons().find(b => b.role === 'cancel');
      this.callButtonHandler(cancelButton);
    }
  }

  renderButtons(buttons: ToastButton[], side: 'start' | 'end') {
    if (buttons.length === 0) {
      return;
    }

    const buttonGroupsClasses = {
      'toast-button-group': true,
      [`toast-button-group-${side}`]: true
    };
    return (
      <div class={buttonGroupsClasses}>
        {buttons.map(b =>
          <button type="button" class={buttonClass(b)} tabIndex={0} onClick={() => this.buttonClick(b)} part="button">
            <div class="toast-button-inner">
              {b.icon &&
                <BKKR-icon
                  icon={b.icon}
                  slot={b.text === undefined ? 'icon-only' : undefined}
                  class="toast-icon"
                />}
              {b.text}
            </div>
          </button>
        )}
      </div>
    );
  }

  render() {
    const allButtons = this.getButtons();
    const startButtons = allButtons.filter(b => b.side === 'start');
    const endButtons = allButtons.filter(b => b.side !== 'start');
    const wrapperClass = {
      'toast-wrapper': true,
      [`toast-${this.position}`]: true
    };

    return (
      <Host
        style={{
          zIndex: `${60000 + this.overlayIndex}`,
        }}
        class={setClassList(this.color, {
          ...getClassMap(this.cssClass)
        })}
        tabindex="-1"
        onBkkrToastWillDismiss={this.dispatchCancelHandler}
      >
        <div class={wrapperClass}>
          <div class="toast-container" part="container">
            {this.renderButtons(startButtons, 'start')}

            <div class="toast-content">
              {this.header !== undefined &&
                <div class="toast-header" part="header">{this.header}</div>
              }
              {this.message !== undefined &&
                <div class="toast-message" part="message" innerHTML={sanitizeDOMString(this.message)}></div>
              }
            </div>

            {this.renderButtons(endButtons, 'end')}
          </div>
        </div>
      </Host>
    );
  }
}

const buttonClass = (button: ToastButton): CssClassMap => {
  return {
    'toast-button': true,
    'toast-button-icon-only': button.icon !== undefined && button.text === undefined,
    [`toast-button-${button.role}`]: button.role !== undefined,
    'bkkr-focusable': true,
    'bkkr-activatable': true,
    ...getClassMap(button.cssClass)
  };
};
