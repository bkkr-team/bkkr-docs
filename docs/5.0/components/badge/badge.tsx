import { Component, ComponentInterface, Host, h, Prop } from '@stencil/core';

import { Color } from '../../interface';
import { setClassList } from '../../utils/style';

@Component({
  tag: 'bkkr-badge',
  styleUrl: 'badge.host.scss',
  shadow: true
})

export class Badge implements ComponentInterface {
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
        class={setClassList(color)}
      >
        <slot></slot>
      </Host>
    );
  }
}
