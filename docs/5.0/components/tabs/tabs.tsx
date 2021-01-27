import { Component, ComponentInterface, Host, h, EventEmitter, Method, State, Element, Event } from '@stencil/core';

@Component({
  tag: 'bkkr-tabs',
  styleUrl: 'tabs.scss',
  shadow: true
})

export class Tabs implements ComponentInterface {

  private transitioning = false;
  private leavingTab?: HTMLBkkrTabElement;

  @Element() el!: HTMLBkkrTabsElement;

  @State() selectedTab?: HTMLBkkrTabElement;

  /**
   * Emitted when the navigation will load a component.
   * @internal
   */
  @Event() bkkrNavWillLoad!: EventEmitter<void>;

  /**
   * Emitted when the navigation is about to transition to a new component.
   */
  @Event({ bubbles: false }) bkkrTabsWillChange!: EventEmitter<{tab: string}>;

  /**
   * Emitted when the navigation has finished transitioning to a new component.
   */
  @Event({ bubbles: false }) bkkrTabsDidChange!: EventEmitter<{tab: string}>;

  async componentWillLoad() {
    const tabs = this.tabs;
    if (tabs.length > 0) {
      await this.select(tabs[0]);
    }

    this.bkkrNavWillLoad.emit();
  }

  componentWillRender() {
    const navs = this.el.querySelector('bkkr-navs');
    if (navs) {
      const tab = this.selectedTab ? this.selectedTab.tab : undefined;
      navs.selectedNav = tab;
    }
  }

  /**
   * Select a tab by the value of its `tab` property or an element reference.
   *
   * @param tab The tab instance to select. If passed a string, it should be the value of the tab's `tab` property.
   */
  @Method()
  async select(tab: string | HTMLBkkrTabElement): Promise<boolean> {
    const selectedTab = getTab(this.tabs, tab);
    if (!this.shouldSwitch(selectedTab)) {
      return false;
    }
    await this.setActive(selectedTab);
    this.tabSwitch();

    return true;
  }

  /**
   * Get a specific tab by the value of its `tab` property or an element reference.
   *
   * @param tab The tab instance to select. If passed a string, it should be the value of the tab's `tab` property.
   */
  @Method()
  async getTab(tab: string | HTMLBkkrTabElement): Promise<HTMLBkkrTabElement | undefined> {
    return getTab(this.tabs, tab);
  }

  /**
   * Get the currently selected tab.
   */
  @Method()
  getSelected(): Promise<string | undefined> {
    return Promise.resolve(this.selectedTab ? this.selectedTab.tab : undefined);
  }

  /** @internal */
  @Method()
  async setRouteId(id: string): Promise<any> {
    const selectedTab = getTab(this.tabs, id);
    if (!this.shouldSwitch(selectedTab)) {
      return { changed: false, element: this.selectedTab };
    }

    await this.setActive(selectedTab);
    return {
      changed: true,
      element: this.selectedTab,
      markVisible: () => this.tabSwitch(),
    };
  }

  private setActive(selectedTab: HTMLBkkrTabElement): Promise<void> {
    if (this.transitioning) {
      return Promise.reject('transitioning already happening');
    }

    this.transitioning = true;
    this.leavingTab = this.selectedTab;
    this.selectedTab = selectedTab;
    this.bkkrTabsWillChange.emit({ tab: selectedTab.tab });
    selectedTab.active = true;
    return Promise.resolve();
  }

  private tabSwitch() {
    const selectedTab = this.selectedTab;
    const leavingTab = this.leavingTab;

    this.leavingTab = undefined;
    this.transitioning = false;
    if (!selectedTab) {
      return;
    }

    if (leavingTab !== selectedTab) {
      if (leavingTab) {
        leavingTab.active = false;
      }
      this.bkkrTabsDidChange.emit({ tab: selectedTab.tab });
    }
  }

  private shouldSwitch(selectedTab: HTMLBkkrTabElement | undefined): selectedTab is HTMLBkkrTabElement {
    const leavingTab = this.selectedTab;
    return selectedTab !== undefined && selectedTab !== leavingTab && !this.transitioning;
  }

  private get tabs() {
    return Array.from(this.el.querySelectorAll('bkkr-tab'));
  }

  private onNavClicked = (ev: CustomEvent<any>) => {
    const { tab } = ev.detail;
    this.select(tab);
  }

  render() {
    return (
      <Host
        onBkkrNavButtonClick={this.onNavClicked}
      >
        <slot name="top"></slot>
        <div class="tabs-inner">
          <slot></slot>
        </div>
        <slot name="bottom"></slot>
      </Host>
    );
  }
}

const getTab = (tabs: HTMLBkkrTabElement[], tab: string | HTMLBkkrTabElement): HTMLBkkrTabElement | undefined => {
  const tabEl = (typeof tab === 'string')
    ? tabs.find(t => t.tab === tab)
    : tab;

  if (!tabEl) {
    console.error(`tab with id: "${tabEl}" does not exist`);
  }
  return tabEl;
};
