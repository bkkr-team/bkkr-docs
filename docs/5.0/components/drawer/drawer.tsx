import { Component, ComponentInterface, Element, Event, EventEmitter, Host, Method, Prop, Watch, h, writeTask } from '@stencil/core';

import { getClassMap } from '../../utils/style';
import { ComponentProps, ComponentRef, FrameworkDelegate } from '../../interface';
import { Animation, AnimationBuilder } from '../../utils/animation/animation-interface';
import { Gesture } from '../../utils/gesture';
import { BACKDROP, activeAnimations, dismiss, eventMethod, prepareOverlay, present } from '../../utils/overlays';
import { OverlayEventDetail, OverlayInterface } from '../../utils/overlays.interface';
import { attachComponent, detachComponent } from '../../utils/framework-delegate';
import { deepReady } from '../../utils/transition';

import { enterAnimation } from './animations/enter';
import { leaveAnimation } from './animations/leave';
import { createSwipeToCloseGesture } from './gestures/swipe-to-close';

@Component({
  tag: 'bkkr-drawer',
  styleUrl: 'drawer.scss',
  scoped: true
})

export class Drawer implements ComponentInterface, OverlayInterface {
  private gesture?: Gesture;

  // Reference to the user's provided drawer content
  private usersElement?: HTMLElement;

  // Whether or not drawer is being dismissed via gesture
  private gestureAnimationDismissing = false;
  presented = false;
  lastFocus?: HTMLElement;
  animation?: Animation;

  @Element() el!: HTMLBkkrDrawerElement;

  /** @internal */
  @Prop() overlayIndex!: number;

  /** @internal */
  @Prop() delegate?: FrameworkDelegate;

  /**
   * If `true`, the keyboard will be automatically dismissed when the overlay is presented.
   */
  @Prop() keyboardClose = true;

  /**
   * Animation to use when the drawer is presented.
   */
  @Prop() enterAnimation?: AnimationBuilder;

  /**
   * Animation to use when the drawer is dismissed.
   */
  @Prop() leaveAnimation?: AnimationBuilder;

  /**
   * The component to display inside of the drawer.
   */
  @Prop() component!: ComponentRef;

  /**
   * The component to display as card
   */
  @Prop() card?: boolean = false;

  /**
   * The data to pass to the drawer component.
   */
  @Prop() componentProps?: ComponentProps;

  /**
   * Additional classes to apply for custom CSS. If multiple classes are
   * provided they should be separated by spaces.
   */
  @Prop() cssClass?: string | string[];

  /**
   * If `true`, the drawer will be dismissed when the backdrop is clicked.
   */
  @Prop() backdropDismiss = true;

  /**
   * The height of component
   */
  @Prop() height = '100%';

  /**
   * If `true`, a backdrop will be displayed behind the drawer.
   */
  @Prop() showBackdrop = true;

  /**
   * If `true`, the drawer will animate.
   */
  @Prop() animated = true;

  /**
   * If `true`, the drawer will have a drag indicator.
   */
  @Prop() indicator = true;

  /**
   * If `true`, the drawer can be swiped to dismiss.
   */
  @Prop() swipeToClose = true;

  @Watch('swipeToClose')
  swipeToCloseChanged(enable: boolean) {
    if (this.gesture) {
      this.gesture.enable(enable);
    } else if (enable) {
      this.initSwipeToClose();
    }
  }

  /**
   * The element that presented the drawer. This is used for card presentation effects
   * and for stacking multiple drawers on top of each other
   */
  @Prop() presentingElement?: HTMLElement = document.querySelector('bkkr-root') || document.body;

  /**
   * Emitted after the drawer has presented.
   */
  @Event({ eventName: 'bkkrDrawerDidPresent' }) didPresent!: EventEmitter<void>;

  /**
   * Emitted before the drawer has presented.
   */
  @Event({ eventName: 'bkkrDrawerWillPresent' }) willPresent!: EventEmitter<void>;

  /**
   * Emitted before the drawer has dismissed.
   */
  @Event({ eventName: 'bkkrDrawerWillDismiss' }) willDismiss!: EventEmitter<OverlayEventDetail>;

  /**
   * Emitted after the drawer has dismissed.
   */
  @Event({ eventName: 'bkkrDrawerDidDismiss' }) didDismiss!: EventEmitter<OverlayEventDetail>;

  connectedCallback() {
    prepareOverlay(this.el);
  }

  /**
   * Present the drawer overlay after it has been created.
   */
  @Method()
  async present(): Promise<void> {
    if (this.presented) {
      return;
    }

    const container = this.el.querySelector(`.drawer-wrapper`);
    if (!container) {
      throw new Error('container is undefined');
    }
    const componentProps = {
      ...this.componentProps,
      drawer: this.el
    };
    
    this.usersElement = await attachComponent(this.delegate, container, this.component, ['bkkr-page', 'drawer-viewport'], componentProps);
    await deepReady(this.usersElement);

    writeTask(() => this.el.classList.add('show-drawer'));

    await present(this, enterAnimation, this.presentingElement);

    if (this.swipeToClose) {
      this.initSwipeToClose();
    }
  }

  private initSwipeToClose() {
    // All of the elements needed for the swipe gesture
    // should be in the DOM and referenced by now, except
    // for the presenting el
    const animationBuilder = this.leaveAnimation || leaveAnimation;
    const ani = this.animation = animationBuilder(this.el, this.presentingElement);
    this.gesture = createSwipeToCloseGesture(
      this.el,
      ani,
      () => {
        /**
         * While the gesture animation is finishing
         * it is possible for a user to tap the backdrop.
         * This would result in the dismiss animation
         * being played again. Typically this is avoided
         * by setting `presented = false` on the overlay
         * component; however, we cannot do that here as
         * that would prevent the element from being
         * removed from the DOM.
         */
        this.gestureAnimationDismissing = true;
        this.animation!.onFinish(async () => {
          await this.dismiss(undefined, 'gesture');
          this.gestureAnimationDismissing = false;
        });
      },
    );
    this.gesture.enable(true);
  }

  /**
   * Dismiss the drawer overlay after it has been presented.
   *
   * @param data Any data to emit in the dismiss events.
   * @param role The role of the element that is dismissing the drawer. For example, 'cancel' or 'backdrop'.
   */
  @Method()
  async dismiss(data?: any, role?: string): Promise<boolean> {
    if (this.gestureAnimationDismissing && role !== 'gesture') {
      return false;
    }

    const enteringAnimation = activeAnimations.get(this) || [];
    const dismissed = await dismiss(this, data, role, leaveAnimation, this.presentingElement);

    if (dismissed) {
      await detachComponent(this.delegate, this.usersElement);
      if (this.animation) {
        this.animation.destroy();
      }

      enteringAnimation.forEach(ani => ani.destroy());
    }

    this.animation = undefined;

    return dismissed;
  }

  /**
   * Returns a promise that resolves when the drawer did dismiss.
   */
  @Method()
  onDidDismiss<T = any>(): Promise<OverlayEventDetail<T>> {
    return eventMethod(this.el, 'bkkrDrawerDidDismiss');
  }

  /**
   * Returns a promise that resolves when the drawer will dismiss.
   */
  @Method()
  onWillDismiss<T = any>(): Promise<OverlayEventDetail<T>> {
    return eventMethod(this.el, 'bkkrDrawerWillDismiss');
  }

  private onBackdropTap = () => {
    this.dismiss(undefined, BACKDROP);
  }

  private onDismiss = (ev: UIEvent) => {
    ev.stopPropagation();
    ev.preventDefault();

    this.dismiss();
  }

  private onLifecycle = (drawerEvent: CustomEvent) => {
    const el = this.usersElement;
    const name = LIFECYCLE_MAP[drawerEvent.type];
    if (el && name) {
      const ev = new CustomEvent(name, {
        bubbles: false,
        cancelable: false,
        detail: drawerEvent.detail
      });
      el.dispatchEvent(ev);
    }
  }

  render() {
    return (
      <Host
        aria-drawer="true"
        tabindex="-1"
        class={{
          ...getClassMap(this.cssClass),
          'drawer-card': this.card
        }}
        style={{
          zIndex: `${20000 + this.overlayIndex}`,
        }}
        onBkkrBackdropTap={this.onBackdropTap}
        onBkkrDismiss={this.onDismiss}
        onBkkrDrawerDidPresent={this.onLifecycle}
        onBkkrDrawerWillPresent={this.onLifecycle}
        onBkkrDrawerWillDismiss={this.onLifecycle}
        onBkkrDrawerDidDismiss={this.onLifecycle}
      >
        <bkkr-backdrop visible={this.showBackdrop} tappable={this.backdropDismiss}/>
        <div class="drawer-shadow"></div>
        <div tabindex="0"></div>

        <div
          role="dialog"
          class="drawer-wrapper"
        >
        </div>

        <div tabindex="0"></div>
      </Host>
    );
  }
}

const LIFECYCLE_MAP: any = {
  'bkkrDrawerDidPresent': 'bkkrViewDidEnter',
  'bkkrDrawerWillPresent': 'bkkrViewWillEnter',
  'bkkrDrawerWillDismiss': 'bkkrViewWillLeave',
  'bkkrDrawerDidDismiss': 'bkkrViewDidLeave',
};
