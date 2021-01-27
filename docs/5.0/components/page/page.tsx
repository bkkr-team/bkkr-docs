import { Component, ComponentInterface, Host, h } from '@stencil/core';

@Component({
  tag: 'bkkr-page',
  styleUrl: 'page.scss'
})

export class Page implements ComponentInterface {
  render() {
    return (
      <Host
        class="bkkr-page"
      >
        <slot></slot>
      </Host>
    );
  }
}
