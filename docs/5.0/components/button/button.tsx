import { Component, ComponentInterface, Element, Host, Prop, h } from '@stencil/core';

import { Color } from '../../interface';
import { setClassList, hostContext } from '../../utils/style';

/**
 * @slot - Content is placed between the named slots if provided without a slot.
 * @slot icon-only - Should be used on an icon in a button that has no text.
 * @slot start - Content is placed to the left of the button text in LTR, and to the right in RTL.
 * @slot end - Content is placed to the right of the button text in LTR, and to the left in RTL.
 *
 * @part native - The native HTML button or anchor element that wraps all child elements.
 */
@Component({
  tag: 'bkkr-button',
  styleUrl: 'button.host.scss',
  shadow: true
})

export class Button implements ComponentInterface {
  private inToolbar = false;

  @Element() el!: HTMLBkkrButtonElement;

  /**
   * The color to use from your application's color palette.
   * Default options are: `"primary"`, `"secondary"`, `"tertiary"`, `"success"`, `"warning"`, `"danger"`, `"light"`, `"medium"`, and `"dark"`.
   * For more information on colors, see [theming](/docs/theming/basics).
   */
  @Prop() color?: Color;

  /**
   * If `true`, the user cannot interact with the button.
   */
  @Prop({ reflect: true }) disabled = false;

  /**
   * Set to `"block"` for a full-width button or to `"full"` for a full-width button
   * without left and right borders.
   */
  @Prop({ reflect: true }) expand?: 'block';

  /**
   * Set to `"clear"` for a transparent button, to `"outline"` for a transparent
   * button with a border, or to `"solid"`. The default style is `"solid"` except inside of
   * a toolbar, where the default is `"clear"`.
   */
  @Prop({ reflect: true, mutable: true }) fill?: 'clear' | 'outline' | 'solid' | 'default';

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
   * The button shape.
   */
  @Prop({ reflect: true }) shape?: 'round';

  /**
   * The button size.
   */
  @Prop({ reflect: true }) size?: 'small' | 'default' | 'large';
  
  /**
   * Specifies where to display the linked URL.
   * Only applies when an `href` is provided.
   * Special keywords: `"_blank"`, `"_self"`, `"_parent"`, `"_top"`.
   */
  @Prop() target: string | undefined;

  /**
   * The type of the button.
   */
  @Prop() type: 'submit' | 'reset' | 'button' = 'button';


  componentWillLoad() {
    this.inToolbar = !!this.el.closest('bkkr-toolbar');
  }
  
  render() {
    const { type, disabled, rel, target, size, href, color, expand, shape } = this;
    const TagType = href === undefined ? 'button' : 'a' as any;
    const attrs = (TagType === 'button')
      ? { type }
      : {
        download: this.download,
        href,
        rel,
        target
      };

      let fill = this.fill;
      if (fill === undefined) {
        fill = this.inToolbar ? 'clear' : 'solid';
      }

    return (
      <Host 
        aria-disabled={disabled ? 'true' : null}
        class={setClassList(color, {
          [`button-${expand}`]: expand !== undefined,
          [`button-${size}`]: size !== undefined,
          [`button-${shape}`]: shape !== undefined,
          [`button-${fill}`]: true,
          'button-toolbar': hostContext('bkkr-toolbar', this.el),
          'button-toolbar-color': hostContext('bkkr-toolbar[color]', this.el),
          'button-disabled': disabled
        })}
      >
        <TagType
          {...attrs}
          part="native"
          disabled={disabled}
          class="button-native"
        >
          <slot name="icon-only"></slot>
          <slot name="start"></slot>
          <slot></slot>
          <slot name="end"></slot>
        </TagType>
      </Host>
    );
  }
}
