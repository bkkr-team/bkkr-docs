import { Component, ComponentInterface, Host, h, EventEmitter, Method, Prop, Event, Element } from '@stencil/core';
import { FrameworkDelegate, ComponentProps, ComponentRef } from '../../interface';
import { AnimationBuilder } from '../../utils/animation/animation-interface';
import { attachComponent, detachComponent } from '../../utils/framework-delegate';
import { prepareOverlay, present, dismiss, eventMethod, BACKDROP } from '../../utils/overlays';
import { OverlayEventDetail } from '../../utils/overlays.interface';
import { getClassMap } from '../../utils/style';
import { deepReady } from '../../utils/transition';
import { enterAnimation } from './animation/enter';
import { leaveAnimation } from './animation/leave';
@Component({
  tag: 'bkkr-popover',
  styleUrl: 'popover.scss',
  scoped: true
})

export class Popover implements ComponentInterface {
  private usersElement?: HTMLElement;

  presented = false;
  lastFocus?: HTMLElement;

  @Element() el!: HTMLBkkrPopoverElement;

  /** @internal */
  @Prop() delegate?: FrameworkDelegate;

  /** @internal */
  @Prop() overlayIndex!: number;

  /**
   * Animation to use when the popover is presented.
   */
  @Prop() enterAnimation?: AnimationBuilder;

  /**
   * Animation to use when the popover is dismissed.
   */
  @Prop() leaveAnimation?: AnimationBuilder;

  /**
   * The component to display inside of the popover.
   */
  @Prop() component!: ComponentRef;

  /**
   * The data to pass to the popover component.
   */
  @Prop() componentProps?: ComponentProps;

  /**
   * If `true`, the keyboard will be automatically dismissed when the overlay is presented.
   */
  @Prop() keyboardClose = true;

  /**
   * Additional classes to apply for custom CSS. If multiple classes are
   * provided they should be separated by spaces.
   */
  @Prop() cssClass?: string | string[];

  /**
   * If `true`, the popover will be dismissed when the backdrop is clicked.
   */
  @Prop() backdropDismiss = true;

  /**
   * The event to pass to the popover animation.
   */
  @Prop() event: any;

  /**
   * If `true`, a backdrop will be displayed behind the popover.
   */
  @Prop() showBackdrop = true;

  /**
   * If `true`, the popover will animate.
   */
  @Prop() animated = true;

  /**
   * Emitted after the popover has presented.
   */
  @Event({ eventName: 'bkkrPopoverDidPresent' }) didPresent!: EventEmitter<void>;

  /**
   * Emitted before the popover has presented.
   */
  @Event({ eventName: 'bkkrPopoverWillPresent' }) willPresent!: EventEmitter<void>;

  /**
   * Emitted before the popover has dismissed.
   */
  @Event({ eventName: 'bkkrPopoverWillDismiss' }) willDismiss!: EventEmitter<OverlayEventDetail>;

  /**
   * Emitted after the popover has dismissed.
   */
  @Event({ eventName: 'bkkrPopoverDidDismiss' }) didDismiss!: EventEmitter<OverlayEventDetail>;

  connectedCallback() {
    prepareOverlay(this.el);
  }

  /**
   * Present the popover overlay after it has been created.
   */
  @Method()
  async present(): Promise<void> {
    if (this.presented) {
      return;
    }
    const container = this.el.querySelector('.popover-content');
    if (!container) {
      throw new Error('container is undefined');
    }
    const data = {
      ...this.componentProps,
      popover: this.el
    };
    this.usersElement = await attachComponent(this.delegate, container, this.component, ['popover-viewport', (this.el as any)['s-sc']], data);
    await deepReady(this.usersElement);
    return present(this, enterAnimation, this.event);
  }

  /**
   * Dismiss the popover overlay after it has been presented.
   *
   * @param data Any data to emit in the dismiss events.
   * @param role The role of the element that is dismissing the popover. For example, 'cancel' or 'backdrop'.
   */
  @Method()
  async dismiss(data?: any, role?: string): Promise<boolean> {
    const shouldDismiss = await dismiss(this, data, role, leaveAnimation, this.event);
    if (shouldDismiss) {
      await detachComponent(this.delegate, this.usersElement);
    }
    return shouldDismiss;
  }

  /**
   * Returns a promise that resolves when the popover did dismiss.
   */
  @Method()
  onDidDismiss<T = any>(): Promise<OverlayEventDetail<T>> {
    return eventMethod(this.el, 'bkkrPopoverDidDismiss');
  }

  /**
   * Returns a promise that resolves when the popover will dismiss.
   */
  @Method()
  onWillDismiss<T = any>(): Promise<OverlayEventDetail<T>> {
    return eventMethod(this.el, 'bkkrPopoverWillDismiss');
  }

  private onDismiss = (ev: UIEvent) => {
    ev.stopPropagation();
    ev.preventDefault();

    this.dismiss();
  }

  private onBackdropTap = () => {
    this.dismiss(undefined, BACKDROP);
  }

  private onLifecycle = (modalEvent: CustomEvent) => {
    const el = this.usersElement;
    const name = LIFECYCLE_MAP[modalEvent.type];
    if (el && name) {
      const event = new CustomEvent(name, {
        bubbles: false,
        cancelable: false,
        detail: modalEvent.detail
      });
      el.dispatchEvent(event);
    }
  }

  render() {
    const { onLifecycle } = this;
    return (
      <Host
        aria-modal="true"
        no-router
        tabindex="-1"
        style={{
          zIndex: `${20000 + this.overlayIndex}`,
        }}
        class={{
          ...getClassMap(this.cssClass)
        }}
        onBkkrPopoverDidPresent={onLifecycle}
        onBkkrPopoverWillPresent={onLifecycle}
        onBkkrPopoverWillDismiss={onLifecycle}
        onBkkrPopoverDidDismiss={onLifecycle}
        onBkkrDismiss={this.onDismiss}
        onBkkrBackdropTap={this.onBackdropTap}
      >
        <bkkr-backdrop tappable={this.backdropDismiss} visible={this.showBackdrop}/>

        <div tabindex="0"></div>

        <div class="popover-wrapper bkkr-overlay-wrapper">
          <div class="popover-arrow"></div>
          <div class="popover-content"></div>
        </div>

        <div tabindex="0"></div>
      </Host>
    );
  }
}

const LIFECYCLE_MAP: any = {
  'bkkrPopoverDidPresent': 'bkkrViewDidEnter',
  'bkkrPopoverWillPresent': 'bkkrViewWillEnter',
  'bkkrPopoverWillDismiss': 'bkkrViewWillLeave',
  'bkkrPopoverDidDismiss': 'bkkrViewDidLeave',
};