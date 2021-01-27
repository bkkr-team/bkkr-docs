import { Component, ComponentInterface, Host, h } from '@stencil/core';

@Component({
  tag: 'bkkr-list-header',
  styleUrl: 'list-header.host.scss',
  shadow: true
})

export class ListHeader implements ComponentInterface {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
