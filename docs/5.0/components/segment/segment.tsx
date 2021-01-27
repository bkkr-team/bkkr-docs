import { Component, ComponentInterface, Host, h, EventEmitter, Prop, State, Watch, writeTask, Element, Event } from '@stencil/core';
import { Color, StyleEventDetail } from '../../interface';
import { createGesture, Gesture, GestureDetail } from '../../utils/gesture';
import { hostContext, setClassList } from '../../utils/style';
import { SegmentChangeEventDetail } from './segment.interface';

@Component({
  tag: 'bkkr-segment',
  styleUrl: 'segment.scss',
  shadow: true
})

export class Segment implements ComponentInterface {
  private gesture?: Gesture;
  private didInit = false;
  private checked?: HTMLBkkrSegmentButtonElement;

  // Value to be emitted when gesture ends
  private valueAfterGesture?: any;

  @Element() el!: HTMLBkkrSegmentElement;

  @State() activated = false;

  /**
   * The color to use from your application's color palette.
   * Default options are: `"primary"`, `"secondary"`, `"tertiary"`, `"success"`, `"warning"`, `"danger"`, `"light"`, `"medium"`, and `"dark"`.
   * For more information on colors, see [theming](/docs/theming/basics).
   */
  @Prop() color?: Color;
  @Watch('color')
  protected colorChanged(value?: Color, oldValue?: Color) {

    /**
     * If color is set after not having
     * previously been set (or vice versa),
     * we need to emit style so the segment-buttons
     * can apply their color classes properly.
     */
    if (
      (oldValue === undefined && value !== undefined) ||
      (oldValue !== undefined && value === undefined)
    ) {
      this.emitStyle();
    }
  }

  /**
   * If `true`, the user cannot interact with the segment.
   */
  @Prop() disabled = false;

  /**
   * If `true`, the segment buttons will overflow and the user can swipe to see them.
   * In addition, this will disable the gesture to drag the indicator between the buttons
   * in order to swipe to see hidden buttons.
   */
  @Prop() scrollable = false;

  /**
   * If `true`, users will be able to swipe between segment buttons to activate them.
   */
  @Prop() swipeGesture = true;

  @Watch('swipeGesture')
  swipeGestureChanged() {
    this.gestureChanged();
  }

  /**
   * the value of the segment.
   */
  @Prop({ mutable: true }) value?: string | null;

  @Watch('value')
  protected valueChanged(value: string | undefined, oldValue: string | undefined | null) {
    this.bkkrSelect.emit({ value });
    if (oldValue !== '' || this.didInit) {
      if (!this.activated) {
        this.bkkrChange.emit({ value });
      } else {
        this.valueAfterGesture = value;
      }
    }
  }

  /**
   * Emitted when the value property has changed and any
   * dragging pointer has been released from `bkkr-segment`.
   */
  @Event() bkkrChange!: EventEmitter<SegmentChangeEventDetail>;

  /**
   * Emitted when user has dragged over a new button
   * @internal
   */
  @Event() bkkrSelect!: EventEmitter<SegmentChangeEventDetail>;

  /**
   * Emitted when the styles change.
   * @internal
   */
  @Event() bkkrStyle!: EventEmitter<StyleEventDetail>;

  @Watch('disabled')
  disabledChanged() {
    this.gestureChanged();

    const buttons = this.getButtons();
    for (const button of buttons) {
      button.disabled = this.disabled;
    }
  }

  private gestureChanged() {
    if (this.gesture) {
      this.gesture.enable(!this.scrollable && !this.disabled && this.swipeGesture);
    }
  }

  connectedCallback() {
    this.emitStyle();
  }

  componentWillLoad() {
    this.emitStyle();
  }

  async componentDidLoad() {
    this.setCheckedClasses();

    this.gesture = createGesture({
      el: this.el,
      gestureName: 'segment',
      gesturePriority: 100,
      threshold: 0,
      passive: false,
      onStart: ev => this.onStart(ev),
      onMove: ev => this.onMove(ev),
      onEnd: ev => this.onEnd(ev),
    });
    this.gestureChanged();

    if (this.disabled) {
      this.disabledChanged();
    }
    this.didInit = true;
  }

  onStart(detail: GestureDetail) {
    this.activate(detail);
  }

  onMove(detail: GestureDetail) {
    this.setNextIndex(detail);
  }

  onEnd(detail: GestureDetail) {
    this.setActivated(false);

    detail.event.stopImmediatePropagation();

    const value = this.valueAfterGesture;
    if (value !== undefined) {
      this.bkkrChange.emit({ value });
      this.valueAfterGesture = undefined;
    }
  }

  private getButtons() {
    return Array.from(this.el.querySelectorAll('bkkr-segment-button'));
  }

  /*
   * Activate both the segment and the buttons
   * due to a bug with ::slotted in Safari
   */
  private setActivated(activated: boolean) {
    const buttons = this.getButtons();

    buttons.forEach(button => {
      if (activated) {
        button.classList.add('segment-button-activated');
      } else {
        button.classList.remove('segment-button-activated');
      }
    });
    this.activated = activated;
  }

  private activate(detail: GestureDetail) {
    const clicked = detail.event.target as HTMLBkkrSegmentButtonElement;
    const buttons = this.getButtons();
    const checked = buttons.find(button => button.value === this.value);

    // Make sure we are only checking for activation on a segment button
    // since disabled buttons will get the click on the segment
    if (clicked.tagName !== 'BKKR-SEGMENT-BUTTON') {
      return;
    }

    // If there are no checked buttons, set the current button to checked
    if (!checked) {
      this.value = clicked.value;
      this.setCheckedClasses();
    }

    // If the gesture began on the clicked button with the indicator
    // then we should activate the indicator
    if (this.value === clicked.value) {
      this.setActivated(true);
    }
  }

  private getIndicator(button: HTMLBkkrSegmentButtonElement): HTMLDivElement | null {
    const root = button.shadowRoot || button;
    return root.querySelector('.segment-button-indicator');
  }

  private checkButton(previous: HTMLBkkrSegmentButtonElement, current: HTMLBkkrSegmentButtonElement) {
    const previousIndicator = this.getIndicator(previous);
    const currentIndicator = this.getIndicator(current);

    if (previousIndicator === null || currentIndicator === null) {
      return;
    }

    const previousClientRect = previousIndicator.getBoundingClientRect();
    const currentClientRect = currentIndicator.getBoundingClientRect();

    const widthDelta = previousClientRect.width / currentClientRect.width;
    const xPosition = previousClientRect.left - currentClientRect.left;

    // Scale the indicator width to match the previous indicator width
    // and translate it on top of the previous indicator
    const transform = `translate3d(${xPosition}px, 0, 0) scaleX(${widthDelta})`;

    writeTask(() => {
      // Remove the transition before positioning on top of the previous indicator
      currentIndicator.classList.remove('segment-button-indicator-animated');
      currentIndicator.style.setProperty('transform', transform);

      // Force a repaint to ensure the transform happens
      currentIndicator.getBoundingClientRect();

      // Add the transition to move the indicator into place
      currentIndicator.classList.add('segment-button-indicator-animated');

      // Remove the transform to slide the indicator back to the button clicked
      currentIndicator.style.setProperty('transform', '');
    });

    this.value = current.value;
    this.setCheckedClasses();
  }

  private setCheckedClasses() {
    const buttons = this.getButtons();
    const index = buttons.findIndex(button => button.value === this.value);
    const next = index + 1;

    // Keep track of the currently checked button
    this.checked = buttons.find(button => button.value === this.value);

    for (const button of buttons) {
      button.classList.remove('segment-button-after-checked');
    }
    if (next < buttons.length) {
      buttons[next].classList.add('segment-button-after-checked');
    }
  }

  private setNextIndex(detail: GestureDetail, isEnd = false) {
    const isRTL = document.dir === 'rtl';
    const activated = this.activated;
    const buttons = this.getButtons();
    const index = buttons.findIndex(button => button.value === this.value);
    const previous = buttons[index];
    let current;
    let nextIndex;

    if (index === -1) {
      return;
    }

    // Get the element that the touch event started on in case
    // it was the checked button, then we will move the indicator
    const rect = previous.getBoundingClientRect() as DOMRect;
    const left = rect.left;
    const width = rect.width;

    // Get the element that the gesture is on top of based on the currentX of the
    // gesture event and the Y coordinate of the starting element, since the gesture
    // can move up and down off of the segment
    const currentX = detail.currentX;

    const previousY = rect.top + (rect.height / 2);
    const nextEl = document.elementFromPoint(currentX, previousY) as HTMLBkkrSegmentButtonElement;

    const decreaseIndex = isRTL ? currentX > (left + width) : currentX < left;
    const increaseIndex = isRTL ? currentX < left : currentX > (left + width);

    // If the indicator is currently activated then we have started the gesture
    // on top of the checked button so we need to slide the indicator
    // by checking the button next to it as we move
    if (activated && !isEnd) {
      // Decrease index, move left in LTR & right in RTL
      if (decreaseIndex) {
        const newIndex = index - 1;

        if (newIndex >= 0) {
          nextIndex = newIndex;
        }
      // Increase index, moves right in LTR & left in RTL
      } else if (increaseIndex) {
        if (activated && !isEnd) {

          const newIndex = index + 1;

          if (newIndex < buttons.length) {
            nextIndex = newIndex;
          }
        }
      }

      if (nextIndex !== undefined && !buttons[nextIndex].disabled) {
        current = buttons[nextIndex];
      }
    }

    // If the indicator is not activated then we will just set the indicator
    // to the element where the gesture ended
    if (!activated && isEnd) {
      current = nextEl;
    }

    /* tslint:disable-next-line */
    if (current != null) {

      /**
       * If current element is bkkr-segment then that means
       * user tried to select a disabled bkkr-segment-button,
       * and we should not update the ripple.
       */
      if (current.tagName === 'BKKR-SEGMENT') {
        return false;
      }

      if (previous !== current) {
        this.checkButton(previous, current);
      }
    }

    return true;
  }

  private emitStyle() {
    this.bkkrStyle.emit({
      'segment': true
    });
  }

  private onClick = (ev: Event) => {
    const current = ev.target as HTMLBkkrSegmentButtonElement;
    const previous = this.checked;

    // If the current element is a segment then that means
    // the user tried to swipe to a segment button and
    // click a segment button at the same time so we should
    // not update the checked segment button
    if (current.tagName === 'BKKR-SEGMENT') {
      return;
    }

    this.value = current.value;

    if (this.scrollable || !this.swipeGesture) {
      if (previous) {
        this.checkButton(previous, current);
      } else {
        this.setCheckedClasses();
      }
    }

    this.checked = current;
  }

  render() {
    return (
      <Host
        onClick={this.onClick}
        class={setClassList(this.color, {
          'in-toolbar': hostContext('bkkr-toolbar', this.el),
          'in-toolbar-color': hostContext('bkkr-toolbar[color]', this.el),
          'segment-activated': this.activated,
          'segment-disabled': this.disabled,
          'segment-scrollable': this.scrollable
        })}
      >
        <slot></slot>
      </Host>
    );
  }
}
