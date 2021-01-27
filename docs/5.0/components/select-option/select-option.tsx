import { Component, ComponentInterface, Host, h, Prop, Element } from '@stencil/core';


@Component({
  tag: 'bkkr-select-option',
  styleUrl: 'select-option.scss',
  shadow: true
})

export class SelectOption implements ComponentInterface {

  private inputId = `bkkr-select-opt-${selectOptionIds++}`;

  @Element() el!: HTMLElement;

  /**
   * If `true`, the user cannot interact with the select option. This property does not apply when `interface="action-sheet"` as `ion-action-sheet` does not allow for disabled buttons.
   */
  @Prop() disabled = false;

  /**
   * The text value of the option.
   */
  @Prop() value?: any | null;

  render() {
    return (
      <Host
        role="option"
        id={this.inputId}
      >
      </Host>
    );
  }
}

let selectOptionIds = 0;
