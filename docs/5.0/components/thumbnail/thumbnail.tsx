import { Component, ComponentInterface, Host, h } from '@stencil/core';

@Component({
  tag: 'bkkr-thumbnail',
  styleUrl: 'thumbnail.host.scss',
  shadow: true
})

export class Thumbnail implements ComponentInterface {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
