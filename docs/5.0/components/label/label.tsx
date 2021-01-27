import { Component, ComponentInterface, Host, h, EventEmitter, Prop, State, Watch, Element, Event } from '@stencil/core';
import { Color, StyleEventDetail } from '../../interface';
import { setClassList } from '../../utils/style';
@Component({
  tag: 'bkkr-label',
  styleUrl: 'label.scss',
  scoped: true
})

export class Label implements ComponentInterface {
  private inRange = false;

  @Element() el!: HTMLElement;

  /**
   * The color to use from your application's color palette.
   * Default options are: `"primary"`, `"secondary"`, `"tertiary"`, `"success"`, `"warning"`, `"danger"`, `"light"`, `"medium"`, and `"dark"`.
   * For more information on colors, see [theming](/docs/theming/basics).
   */
  @Prop() color?: Color;

  /**
   * The position determines where and how the label behaves inside an item.
   */
  @Prop() position?: 'fixed' | 'floating';

  /**
   * Emitted when the color changes.
   * @internal
   */
  @Event() bkkrColor!: EventEmitter<StyleEventDetail>;

  /**
   * Emitted when the styles change.
   * @internal
   */
  @Event() bkkrStyle!: EventEmitter<StyleEventDetail>;

  @State() noAnimate = false;

  componentWillLoad() {
    this.inRange = !!this.el.closest('bkkr-range');
    this.noAnimate = (this.position === 'floating');
    this.emitStyle();
    this.emitColor();
  }

  componentDidLoad() {
    if (this.noAnimate) {
      setTimeout(() => {
        this.noAnimate = false;
      }, 1000);
    }
  }

  @Watch('color')
  colorChanged() {
    this.emitColor();
  }

  @Watch('position')
  positionChanged() {
    this.emitStyle();
  }

  private emitColor() {
    const { color } = this;

    this.bkkrColor.emit({
      'item-label-color': color !== undefined,
      [`bkkr-color-${color}`]: color !== undefined
    });
  }

  private emitStyle() {
    const { inRange, position } = this;

    // If the label is inside of a range we don't want
    // to override the classes added by the label that
    // is a direct child of the item
    if (!inRange) {
      this.bkkrStyle.emit({
        'label': true,
        [`label-${position}`]: position !== undefined
      });
    }
  }

  render() {
    const position = this.position;
    return (
      <Host
        class={setClassList(this.color, {
          [`label-${position}`]: position !== undefined,
          [`label-no-animate`]: (this.noAnimate)
        })}
      >
      </Host>
    );
  }
}
