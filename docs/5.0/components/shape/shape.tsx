import { Component, ComponentInterface, Host, h, Prop } from '@stencil/core';

import { Color } from '../../interface';
import { setClassList } from '../../utils/style';
import { ShapeTypes } from './shape.interface';

@Component({
  tag: 'bkkr-shape',
  styleUrl: 'shape.host.scss',
  shadow: true
})

export class Shape implements ComponentInterface {

  /**
   * The color to use from your application's color palette.
   * Default options are: `"primary"`, `"secondary"`, `"tertiary"`, `"success"`, `"warning"`, `"danger"`, `"light"`, `"medium"`, and `"dark"`.
   * For more information on colors, see [theming](/docs/theming/basics).
   */
  @Prop() color?: Color;

  /**
   * If `true`, the skeleton text will animate.
   */
  @Prop() shape: ShapeTypes = 'square';

  /**
   * The size of the column, in terms of how many columns it should take up out of the total
   * available. If `"auto"` is passed, the column will be the size of its content.
   */
  @Prop() size?: 'small' | 'default' | 'large' = 'default';

  /**
   * The size of the column for xs screens, in terms of how many columns it should take up out
   * of the total available. If `"auto"` is passed, the column will be the size of its content.
   */
  @Prop() sizeXs?: 'small' | 'default' | 'large';

  /**
   * The size of the column for sm screens, in terms of how many columns it should take up out
   * of the total available. If `"auto"` is passed, the column will be the size of its content.
   */
  @Prop() sizeSm?: 'small' | 'default' | 'large';

  /**
   * The size of the column for md screens, in terms of how many columns it should take up out
   * of the total available. If `"auto"` is passed, the column will be the size of its content.
   */
  @Prop() sizeMd?: 'small' | 'default' | 'large';

  /**
   * The size of the column for lg screens, in terms of how many columns it should take up out
   * of the total available. If `"auto"` is passed, the column will be the size of its content.
   */
  @Prop() sizeLg?: 'small' | 'default' | 'large';

  /**
   * The size of the column for xl screens, in terms of how many columns it should take up out
   * of the total available. If `"auto"` is passed, the column will be the size of its content.
   */
  @Prop() sizeXl?: 'small' | 'default' | 'large';

  /**
   * The size of the column for xxl screens, in terms of how many columns it should take up out
   * of the total available. If `"auto"` is passed, the column will be the size of its content.
   */
  @Prop() sizeXxl?: 'small' | 'default' | 'large';


  render() {
    const { color, shape, size, sizeXs, sizeSm, sizeMd, sizeLg, sizeXl, sizeXxl } = this;

    return (
      <Host
        class={setClassList(color, {
          [`shape-${shape}`]: shape !== undefined,
          [`shape-${size}`]: size !== undefined,
          [`shape-xs-${sizeXs}`]: sizeXs !== undefined,
          [`shape-sm-${sizeSm}`]: sizeSm !== undefined,
          [`shape-md-${sizeMd}`]: sizeMd !== undefined,
          [`shape-lg-${sizeLg}`]: sizeLg !== undefined,
          [`shape-xl${sizeXl}`]: sizeXl !== undefined,
          [`shape-xxl-${sizeXxl}`]: sizeXxl !== undefined,
        })}
      >
        <slot></slot>
      </Host>
    );
  }
}
