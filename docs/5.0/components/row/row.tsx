import { Component, ComponentInterface, Host, h } from '@stencil/core';

@Component({
  tag: 'bkkr-row',
  styleUrl: 'row.host.scss',
  shadow: true
})

export class Row implements ComponentInterface {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
