import { Component, ComponentInterface, Host, h, Prop, Element } from '@stencil/core';
import { Build, Method, Watch } from '@stencil/core/internal';
import { ComponentRef, FrameworkDelegate } from '../../interface';
import { attachComponent } from '../../utils/framework-delegate';

@Component({
  tag: 'bkkr-tab',
  styleUrl: 'tab.scss',
  shadow: true
})

export class Tab implements ComponentInterface {
  
  private loaded = false;

  @Element() el!: HTMLBkkrTabElement;

  /** @internal */
  @Prop({ mutable: true }) active = false;

  /** @internal */
  @Prop() delegate?: FrameworkDelegate;

  /**
   * A tab id must be provided for each `bkkr-tab`. It's used internally to reference
   * the selected tab or by the router to switch between them.
   */
  @Prop() tab!: string;

  /**
   * The component to display inside of the tab.
   */
  @Prop() component?: ComponentRef;

  async componentWillLoad() {
    if (Build.isDev) {
      if (this.component !== undefined && this.el.childElementCount > 0) {
        console.error('You can not use a lazy-loaded component in a tab and inlined content at the same time.' +
      `- Remove the component attribute in: <bkkr-tab component="${this.component}">` +
      ` or` +
      `- Remove the embedded content inside the bkkr-tab: <bkkr-tab></bkkr-tab>`);
      }
    }
    if (this.active) {
      await this.setActive();
    }
  }

  /** Set the active component for the tab */
  @Method()
  async setActive(): Promise<void> {
    await this.prepareLazyLoaded();
    this.active = true;
  }

  @Watch('active')
  changeActive(isActive: boolean) {
    if (isActive) {
      this.prepareLazyLoaded();
    }
  }

  private prepareLazyLoaded(): Promise<HTMLElement | undefined> {
    if (!this.loaded && this.component != null) {
      this.loaded = true;
      try {
        return attachComponent(this.delegate, this.el, this.component, ['bkkr-page']);
      } catch (e) {
        console.error(e);
      }
    }
    return Promise.resolve(undefined);
  }

  render() {
    const { tab, active, component } = this;

    return (
      <Host
        role="tabpanel"
        aria-hidden={!active ? 'true' : null}
        aria-labelledby={`nav-button-${tab}`}
        class={{
          'bkkr-page': component === undefined,
          'tab-hidden': !active
        }}
      >
        <slot></slot>
      </Host>
    );
  }
}
