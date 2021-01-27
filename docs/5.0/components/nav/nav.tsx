import { Component, ComponentInterface, Host, h, EventEmitter, Listen, Prop, Event, Element } from '@stencil/core';
import { NavBarChangedEventDetail, NavButtonClickEventDetail, NavButtonLayout } from '../navs/navs.interface';

@Component({
  tag: 'bkkr-nav',
  styleUrl: 'nav.host.scss',
  shadow: true
})

export class Nav implements ComponentInterface {
  @Element() el!: HTMLElement;

  /**
   * If `true`, the user cannot interact with the tab button.
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
   * Set the layout of the text and icon in the nav bar.
   * It defaults to `'icon-top'`.
   */
  @Prop({ mutable: true }) layout?: NavButtonLayout = 'icon-top';

  /**
   * The selected nav component
   */
  @Prop({ mutable: true }) selected = false;

  /**
   * A tab id for each `bkkr-tabs`. It's used internally to reference
   * the selected nav.
   */
  @Prop() tab?: string;

  /**
   * Specifies where to display the linked URL.
   * Only applies when an `href` is provided.
   * Special keywords: `"_blank"`, `"_self"`, `"_parent"`, `"_top"`.
   */
  @Prop() target: string | undefined;

  /**
   * Emitted when the nav bar is clicked
   * @internal
   */
  @Event() bkkrNavButtonClick!: EventEmitter<NavButtonClickEventDetail>;

  @Listen('bkkrNavBarChanged', { target: 'window' })
  onNavBarChanged(ev: CustomEvent<NavBarChangedEventDetail>) {
    const dispatchedFrom = ev.target as HTMLElement;
    const parent = this.el.parentElement as EventTarget;
    if ((ev.composedPath && ev.composedPath().includes(parent)) || (dispatchedFrom && dispatchedFrom.contains(this.el))) {
      this.selected = this.tab === ev.detail.nav;
    }
  }

  private selectNav(ev: Event | KeyboardEvent) {
    if (this.tab !== undefined) {
      if (!this.disabled) {
        this.bkkrNavButtonClick.emit({
          tab: this.tab,
          href: this.href,
          selected: this.selected
        });
      }
      ev.preventDefault();
    }
  }

  private get hasLabel() {
    return !!this.el.querySelector('bkkr-label');
  }

  private get hasIcon() {
    return !!this.el.querySelector('bkkr-icon');
  }

  private get tabIndex() {
    if (this.disabled) { return -1; }

    const hasTabIndex = this.el.hasAttribute('tabindex');

    if (hasTabIndex) {
      return this.el.getAttribute('tabindex');
    }

    return 0;
  }

  private onKeyUp = (ev: KeyboardEvent) => {
    if (ev.key === 'Enter' || ev.key === ' ') {
      this.selectNav(ev);
    }
  }

  private onClick = (ev: Event) => {
    this.selectNav(ev);
  }

  render() {
    const { disabled, hasIcon, hasLabel, tabIndex, href, rel, target, layout, selected, tab } = this;
    const attrs = {
      download: this.download,
      href,
      rel,
      target
    };

    return (
      <Host
        onClick={this.onClick}
        onKeyup={this.onKeyUp}
        role="tab"
        tabindex={tabIndex}
        aria-selected={selected ? 'true' : null}
        id={tab !== undefined ? `nav-button-${tab}` : null}
        class={{
          'nav-selected': selected,
          'nav-disabled': disabled,
          'nav-has-label': hasLabel,
          'nav-has-icon': hasIcon,
          'nav-has-label-only': hasLabel && !hasIcon,
          'nav-has-icon-only': hasIcon && !hasLabel,
          [`nav-layout-${layout}`]: true,
          'bkkr-activatable': true,
          'bkkr-selectable': true,
          'bkkr-focusable': true
        }}
      >
        <a {...attrs} tabIndex={-1} class="button-native" part="native">
          <span class="button-inner">
            <slot></slot>
          </span>
        </a>
      </Host>
    );
  }
}
