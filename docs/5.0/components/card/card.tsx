import { Component, ComponentInterface, Host, Prop, h } from '@stencil/core';

import { Color } from '../../interface';
import { setClassList } from '../../utils/style';

@Component({
  tag: 'bkkr-card',
  styleUrl: 'card.host.scss',
  shadow: true
})

export class Card implements ComponentInterface {
  /**
   * The color to use from your application's color palette.
   * Default options are: `"primary"`, `"secondary"`, `"tertiary"`, `"success"`, `"warning"`, `"danger"`, `"light"`, `"medium"`, and `"dark"`.
   * For more information on colors, see [theming](/docs/theming/basics).
   */
  @Prop() color?: Color;

  /**
   * If `true`, a button tag will be rendered and the card will be tappable.
   */
  @Prop() button = false;

  /**
   * The type of the button. Only used when an `onclick` or `button` property is present.
   */
  @Prop() type: 'submit' | 'reset' | 'button' = 'button';

  /**
   * If `true`, the user cannot interact with the card.
   */
  @Prop() disabled = false;

  /**
   * This attribute instructs browsers to download a URL instead of navigating to
   * it, so the user will be prompted to save it as a local file. If the attribute
   * has a value, it is used as the pre-filled file name in the Save prompt
   * (the user can still change the file name if they want).
   */
  @Prop() download: string | undefined;

  /**
   * Contains a URL or a URL fragment that the hyperlink points to.
   * If this property is set, an anchor tag will be rendered.
   */
  @Prop() href: string | undefined;

  /**
   * Specifies the relationship of the target object to the link object.
   * The value is a space-separated list of [link types](https://developer.mozilla.org/en-US/docs/Web/HTML/Link_types).
   */
  @Prop() rel: string | undefined;

  /**
   * Specifies where to display the linked URL.
   * Only applies when an `href` is provided.
   * Special keywords: `"_blank"`, `"_self"`, `"_parent"`, `"_top"`.
   */
  @Prop() target: string | undefined;

  private isClickable(): boolean {
    return (this.href !== undefined || this.button);
  }

  private renderCard() {
    const clickable = this.isClickable();

    if (!clickable) {
      return [
        <slot></slot>
      ];
    }
    const { href } = this;
    const TagType = clickable ? (href === undefined ? 'button' : 'a') : 'div' as any;
    const attrs = (TagType === 'button')
      ? { type: this.type }
      : {
        download: this.download,
        href: this.href,
        rel: this.rel,
        target: this.target
      };

    return (
      <TagType
        {...attrs}
        class="card-native"
        part="native"
        disabled={this.disabled}
      >
        <slot></slot>
      </TagType>
    );
  }


  render() {
    return (
      <Host
        class={setClassList(this.color, {
          'card-disabled': this.disabled,
          'bkkr-activatable': this.isClickable()
        })}
      >
        {this.renderCard()}
      </Host>
    );
  }
}
