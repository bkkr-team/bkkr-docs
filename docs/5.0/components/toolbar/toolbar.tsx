import { Component, ComponentInterface, Host, Prop, h } from '@stencil/core';

import { Color } from '../../interface';
import { setClassList } from '../../utils/style';

@Component({
  tag: 'bkkr-toolbar',
  styleUrl: 'toolbar.host.scss',
  shadow: true
})

/**
 * @slot - Content is placed between the named slots if provided without a slot.
 * @slot start - Content is placed to the left of the toolbar text in LTR, and to the right in RTL.
 * @slot end - Content is placed to the right of the toolbar text in LTR, and to the left in RTL.
 */
export class Toolbar implements ComponentInterface {

  /**
   * The color to use from your application's color palette.
   * Default options are: `"primary"`, `"secondary"`, `"tertiary"`, `"success"`, `"warning"`, `"danger"`, `"light"`, `"medium"`, and `"dark"`.
   * For more information on colors, see [theming](/docs/theming/basics).
   */
  @Prop() color?: Color;

  render() {
    const { color } = this;

    return (
      <Host
        class={setClassList(color, null)}
      >
        <slot name="start"></slot>
        <div class="toolbar-content">
          <slot></slot>
        </div>
        <slot name="end"></slot>
      </Host>
    );
  }
}
