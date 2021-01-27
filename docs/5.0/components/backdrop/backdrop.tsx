import { Component, ComponentInterface, Host, h, Prop, Event, EventEmitter, Listen } from '@stencil/core';
import { GESTURE_CONTROLLER } from '../../utils/gesture';


@Component({
  tag: 'bkkr-backdrop',
  styleUrl: 'backdrop.host.scss',
  shadow: true
})

export class Backdrop implements ComponentInterface {
  private blocker = GESTURE_CONTROLLER.createBlocker({
    disableScroll: true
  });

  /**
   * If `true`, the backdrop will be visible.
   */
  @Prop() visible = true;

  /**
   * If `true`, the backdrop will can be clicked and will emit the `bkkrBackdropTap` event.
   */
  @Prop() tappable = true;

  /**
   * If `true`, the backdrop will stop propagation on tap.
   */
  @Prop() stopPropagation = true;

  /**
   * Emitted when the backdrop is tapped.
   */
  @Event() bkkrBackdropTap!: EventEmitter<void>;

  connectedCallback() {
    if (this.stopPropagation) {
      this.blocker.block();
    }
  }

  disconnectedCallback() {
    this.blocker.unblock();
  }

  @Listen('click', { passive: false, capture: true })
  protected onMouseDown(ev: TouchEvent) {
    this.emitTap(ev);
  }

  private emitTap(ev: Event) {
    if (this.stopPropagation) {
      ev.preventDefault();
      ev.stopPropagation();
    }
    if (this.tappable) {
      this.bkkrBackdropTap.emit();
    }
  }

  render() {
    return (
      <Host
        tabindex="-1"
        class={{
          'backdrop-hide': !this.visible,
          'backdrop-no-tappable': !this.tappable,
        }}
      >
      </Host>
    );
  }
}
