import { Component, ComponentInterface, Host, h, EventEmitter, Prop, State, Watch, Element, Event } from '@stencil/core';
import { Color } from '../../interface';
import { setClassList } from '../../utils/style';
import { NavBarChangedEventDetail } from './navs.interface';

@Component({
  tag: 'bkkr-navs',
  styleUrl: 'navs.host.scss',
  shadow: true
})

export class Navs implements ComponentInterface {
  private keyboardWillShowHandler?: () => void;
  private keyboardWillHideHandler?: () => void;

  @Element() el!: HTMLElement;

  @State() keyboardVisible = false;

  /**
   * The color to use from your application's color palette.
   * Default options are: `"primary"`, `"secondary"`, `"tertiary"`, `"success"`, `"warning"`, `"danger"`, `"light"`, `"medium"`, and `"dark"`.
   * For more information on colors, see [theming](/docs/theming/basics).
   */
  @Prop() color?: Color;

  /**
   * The selected nav component
   */
  @Prop() selectedNav?: string;
  @Watch('selectedNav')
  selectedNavChanged() {
    if (this.selectedNav !== undefined) {
      this.bkkrNavBarChanged.emit({
        nav: this.selectedNav
      });
    }
  }

  /** @internal */
  @Event() bkkrNavBarChanged!: EventEmitter<NavBarChangedEventDetail>;

  componentWillLoad() {
    this.selectedNavChanged();
  }

  connectedCallback() {
    if (typeof (window as any) !== 'undefined') {
      this.keyboardWillShowHandler = () => {
        if (this.el.getAttribute('slot') !== 'top') {
          this.keyboardVisible = true;
        }
      }

      this.keyboardWillHideHandler = () => {
        setTimeout(() => this.keyboardVisible = false, 50);
      }

      window.addEventListener('keyboardWillShow', this.keyboardWillShowHandler!);
      window.addEventListener('keyboardWillHide', this.keyboardWillHideHandler!);
    }
  }

  disconnectedCallback() {
    if (typeof (window as any) !== 'undefined') {
      window.removeEventListener('keyboardWillShow', this.keyboardWillShowHandler!);
      window.removeEventListener('keyboardWillHide', this.keyboardWillHideHandler!);

      this.keyboardWillShowHandler = this.keyboardWillHideHandler = undefined;
    }
  }

  render() {
    const { color,  keyboardVisible } = this;

    return (
      <Host
        role="navlist"
        aria-hidden={keyboardVisible ? 'true' : null}
        class={setClassList(color, {
          'nav-bar-hidden': keyboardVisible,
        })}
      >
        <slot></slot>
      </Host>
    );
  }
}
