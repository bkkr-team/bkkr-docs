import { Component, ComponentInterface, Host, h, Listen, Prop, State } from '@stencil/core';

import { menuController } from '../../utils/menu-controller';
import { updateVisibility } from './menu-toogle.util';

@Component({
  tag: 'bkkr-menu-toggle',
  styleUrl: 'menu-toggle.host.scss',
  shadow: true
})

export class MenuToggle implements ComponentInterface {
  @State() visible = false;

  /**
   * Optional property that maps to a Menu's `menuId` prop.
   * Can also be `start` or `end` for the menu side.
   * This is used to find the correct menu to toggle.
   *
   * If this property is not used, `bkkr-menu-toggle` will toggle the
   * first menu that is active.
   */
  @Prop() menu?: string;

  /**
   * Automatically hides the content when the corresponding menu is not active.
   *
   * By default, it's `true`. Change it to `false` in order to
   * keep bkkr-menu-toggle` always visible regardless the state of the menu.
   */
  @Prop() autoHide = true;

  connectedCallback() {
    this.visibilityChanged();
  }

  @Listen('bkkrMenuChange', { target: 'body' })
  @Listen('bkkrSplitPaneVisible', { target: 'body' })
  async visibilityChanged() {
    this.visible = await updateVisibility(this.menu);
  }

  private onClick = () => {
    return menuController.toggle(this.menu);
  }

  render() {
    const hidden = this.autoHide && !this.visible;

    return (
      <Host
        onClick={this.onClick}
        aria-hidden={hidden ? 'true' : null}
        class={{
          'menu-toggle-hidden': hidden,
        }}
      >
        <slot></slot>
      </Host>
    );
  }
}
