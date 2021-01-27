import { Component, ComponentInterface, Host, h, Prop, Element, EventEmitter, Event } from '@stencil/core';
import { Color } from '../../interface';
import { hostContext, setClassList } from '../../utils/style';

@Component({
  tag: 'bkkr-fab-button',
  styleUrl: 'fab-button.scss',
  shadow: true
})

export class Fab implements ComponentInterface {
  @Element() el!: HTMLElement;

  /**
   * The color to use from your application's color palette.
   * Default options are: `"primary"`, `"secondary"`, `"tertiary"`, `"success"`, `"warning"`, `"danger"`, `"light"`, `"medium"`, and `"dark"`.
   * For more information on colors, see [theming](/docs/theming/basics).
   */
  @Prop() color?: Color;

  /**
   * If `true`, the fab button will be show a close icon.
   */
  @Prop() activated = false;

  /**
   * If `true`, the user cannot interact with the fab button.
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

  /**
   * If `true`, the fab button will show when in a fab-list.
   */
  @Prop() show = false;

  /**
   * The type of the button.
   */
  @Prop() type: 'submit' | 'reset' | 'button' = 'button';

  /**
   * The size of the button. Set this to `small` in order to have a mini fab button.
   */
  @Prop() size?: 'small';

  /**
   * Emitted when the button has focus.
   */
  @Event() bkkrFocus!: EventEmitter<void>;

  /**
   * Emitted when the button loses focus.
   */
  @Event() bkkrBlur!: EventEmitter<void>;

  private onFocus = () => {
    this.bkkrFocus.emit();
  }

  private onBlur = () => {
    this.bkkrBlur.emit();
  }

  render() {
    const { el, disabled, color, href, activated, show, size } = this;
    const inList = hostContext('bkkr-fab-list', el);
    const TagType = href === undefined ? 'button' : 'a' as any;
    const attrs = (TagType === 'button')
      ? { type: this.type }
      : {
        download: this.download,
        href,
        rel: this.rel,
        target: this.target
      };

    return (
      <Host
        aria-disabled={disabled ? 'true' : null}
        class={setClassList(color, {
          'fab-button-in-list': inList,
          'fab-button-close-active': activated,
          'fab-button-show': show,
          'fab-button-disabled': disabled,
          'bkkr-activatable': true,
          'bkkr-focusable': true,
          [`fab-button-${size}`]: size !== undefined,
        })}
      >

        <TagType
          {...attrs}
          class="button-native"
          part="native"
          disabled={disabled}
          onFocus={this.onFocus}
          onBlur={this.onBlur}
        >
          <span class="button-inner">
            <slot></slot>
          </span>
        </TagType>
      </Host>
    );
  }
}
