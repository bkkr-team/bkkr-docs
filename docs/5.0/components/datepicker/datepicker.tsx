import { Component, ComponentInterface, Host, h } from '@stencil/core';
@Component({
  tag: 'bkkr-datepicker',
  styleUrl: 'datepicker.host.scss',
  shadow: true
})

export class Datepicker implements ComponentInterface {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
