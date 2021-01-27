import { Component, ComponentInterface, Element, Host, Prop, h } from '@stencil/core';
@Component({
  tag: 'bkkr-skeleton',
  styleUrl: 'skeleton.host.scss',
  shadow: true
})

export class Skeleton implements ComponentInterface {
  @Element() el!: HTMLBkkrSkeletonElement;

  /**
   * If `true`, the skeleton text will animate.
   */
  @Prop() animated = false;

  render() {
    const animated = this.animated;

    return (
      <Host
      class={{
        'skeleton-animated': animated
      }}
      >
        <span>&nbsp;</span>
      </Host>
    );
  }
}
