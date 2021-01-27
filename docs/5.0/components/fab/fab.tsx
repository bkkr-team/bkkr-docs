import { Component, ComponentInterface, Host, h, Prop, Element } from '@stencil/core';

@Component({
  tag: 'bkkr-fab',
  styleUrl: 'fab.scss',
  shadow: true
})

export class Fab implements ComponentInterface {
  @Element() el!: HTMLElement;

  /**
   * Where to align the fab horizontally in the viewport.
   */
  @Prop() horizontal?: 'start' | 'end' | 'center';

  /**
   * Where to align the fab vertically in the viewport.
   */
  @Prop() vertical?: 'top' | 'bottom' | 'center';

  /**
   * If `true`, the fab will display on the edge of the header if
   * `vertical` is `"top"`, and on the edge of the footer if
   * it is `"bottom"`. Should be used with a `fixed` slot.
   */
  @Prop() edge = false;

  render() {
    const { horizontal, vertical, edge } = this;
    return (
      <Host
        class={{
          [`fab-horizontal-${horizontal}`]: horizontal !== undefined,
          [`fab-vertical-${vertical}`]: vertical !== undefined,
          'fab-edge': edge
        }}
      >
        <slot></slot>
      </Host>
    );
  }
}
