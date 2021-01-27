import { Component, ComponentInterface, Host, h } from '@stencil/core';

@Component({
  tag: 'bkkr-card-header',
  styleUrl: 'card-header.host.scss',
  shadow: true
})

export class CardHeader implements ComponentInterface {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
