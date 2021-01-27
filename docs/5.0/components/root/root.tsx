import { Component, ComponentInterface, Host, h } from '@stencil/core';

@Component({
  tag: 'bkkr-root',
  styleUrl: 'root.scss'
})

export class Root implements ComponentInterface {
  render() {
    return (
      <Host
        class="root"
      >
        <slot></slot>
      </Host>
    );
  }
}
