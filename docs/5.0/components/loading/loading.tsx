import { Component, ComponentInterface, Host, h, Prop, Element, Event, EventEmitter, Method } from '@stencil/core';

import { Color } from '../../interface';
import { AnimationBuilder } from '../../utils/animation/animation-interface';
import { prepareOverlay, present, dismiss, eventMethod } from '../../utils/overlays';
import { OverlayEventDetail } from '../../utils/overlays.interface';
import { getClassMap, setClassList } from '../../utils/style';
import { SpinnerTypes } from '../spinner/spinner.config';
import { enterAnimation } from './animations/enter';
import { leaveAnimation } from './animations/leave';


/**
 * @part button - Any button element that is displayed inside of the toast.
 * @part container - The element that wraps all child elements.
 * @part spinner - The spinner of the loading.
 */
@Component({
  tag: 'bkkr-loading',
  styleUrl: 'loading.scss',
  shadow: true
})

export class Loading implements ComponentInterface {
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
  @Prop() color?: Color = 'primary';

  /**
   * The type of spinner being used in loader.
   */
  @Prop() spinner?: SpinnerTypes = 'crescent';

  /**
   * Animation to use when the loading is presented.
   */
  @Prop() enterAnimation?: AnimationBuilder;

  /**
   * Animation to use when the loading is dismissed.
   */
  @Prop() leaveAnimation?: AnimationBuilder;

  /**
   * Additional classes to apply for custom CSS. If multiple classes are
   * provided they should be separated by spaces.
   */
  @Prop() cssClass?: string | string[];

  /**
   * If `true`, the keyboard will be automatically dismissed when the overlay is presented.
   */
  @Prop() keyboardClose = false;

  /**
   * The position of the loading on the screen.
   */
  @Prop() position: 'top' | 'bottom' | 'middle' = 'top';

  /**
   * If `true`, the loading will animate.
   */
  @Prop() animated = true;

  /**
   * Emitted after the loading has presented.
   */
  @Event({ eventName: 'loadingDidPresent' }) didPresent!: EventEmitter<void>;

  /**
   * Emitted before the loading has presented.
   */
  @Event({ eventName: 'loadingWillPresent' }) willPresent!: EventEmitter<void>;

  /**
   * Emitted before the loading has dismissed.
   */
  @Event({ eventName: 'loadingWillDismiss' }) willDismiss!: EventEmitter<OverlayEventDetail>;

  /**
   * Emitted after the loading has dismissed.
   */
  @Event({ eventName: 'loadingDidDismiss' }) didDismiss!: EventEmitter<OverlayEventDetail>;

  connectedCallback() {
    prepareOverlay(this.el);
  }

  /**
   * Present the loading overlay after it has been created.
   */
  @Method()
  async present(): Promise<void> {
    await present(this, enterAnimation, this.position);
  }

  /**
   * Dismiss the loading overlay after it has been presented.
   *
   * @param data Any data to emit in the dismiss events.
   * @param role The role of the element that is dismissing the loading.
   * This can be useful in a button handler for determining which button was
   * clicked to dismiss the loading.
   * Some examples include: ``"cancel"`, `"destructive"`, "selected"`, and `"backdrop"`.
   */
  @Method()
  dismiss(data?: any, role?: string): Promise<boolean> {
    return dismiss(this, data, role, leaveAnimation, this.position);
  }

  /**
   * Returns a promise that resolves when the loading did dismiss.
   */
  @Method()
  onDidDismiss<T = any>(): Promise<OverlayEventDetail<T>> {
    return eventMethod(this.el, 'loadingDidDismiss');
  }

  /**
   * Returns a promise that resolves when the loading will dismiss.
   */
  @Method()
  onWillDismiss<T = any>(): Promise<OverlayEventDetail<T>> {
    return eventMethod(this.el, 'loadingWillDismiss');
  }
  
  render() {
    const { color, cssClass, spinner, position } = this;

    return (
      <Host
        style={{
          zIndex: `${60000 + this.overlayIndex}`,
        }}
        class={setClassList(color, {
          ...getClassMap(cssClass)
        })}
        tabindex="-1"
      >
        <div class={{
          'loading-wrapper': true,
          [`loading-${position}`]: true
        }}>
          <div class="loading-container" part="container">
            <div class="loading-content">
              <bkkr-spinner slot="end" type={spinner} color={color} />
            </div>
          </div>
        </div>
      </Host>
    );
  }
}
