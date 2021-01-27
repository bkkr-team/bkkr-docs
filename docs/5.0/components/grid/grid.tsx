import { Component, ComponentInterface, Host, Prop, h } from '@stencil/core';

import { matchBreakpoint } from '../../utils/breakpoint';

const BREAKPOINTS = ['', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl'];

@Component({
  tag: 'bkkr-grid',
  styleUrl: 'grid.host.scss',
  shadow: true
})

export class Grid implements ComponentInterface {
  /**
   * The number of the column.
   */
  @Prop() size?: string;

  /**
   * The number of the column for xs screens.
   */
  @Prop() sizeXs?: string;

  /**
   * The number of the column for sm screens.
   */
  @Prop() sizeSm?: string;

  /**
   * The number of the column for md screens.
   */
  @Prop() sizeMd?: string;

  /**
   * The number of the column for lg screens.
   */
  @Prop() sizeLg?: string;

  /**
   * The number of the column for xl screens.
   */
  @Prop() sizeXl?: string;

  /**
   * The number of the column for xxl screens.
   */
  @Prop() sizeXxl?: string;

  // Loop through all of the breakpoints to see if the media query
  // matches and grab the column value from the relevant prop if so
  private getColumns(property: string) {
    let matched;

    for (const breakpoint of BREAKPOINTS) {
      const matches = matchBreakpoint(breakpoint);

      // Grab the value of the property, if it exists and our
      // media query matches we return the value
      const columns = (this as any)[property + breakpoint.charAt(0).toUpperCase() + breakpoint.slice(1)];

      if (matches && columns !== undefined) {
        matched = columns;
      }
    }

    // Return the last matched columns since the breakpoints
    // increase in size and we want to return the largest match
    return matched;
  }

  private calculateSize() {
    const columns = this.getColumns('size');

    // If size wasn't set for any breakpoint
    // or if the user set the size without a value
    // it means we need to stick with the default and return
    // e.g. <bkkr-grid size-md>
    if (!columns || columns === '') {
      return;
    }

    return {
      '--columns': `${columns}`
    };
  }

  render() {
    return (
      <Host
        style={{
          ...this.calculateSize(),
        }}
      >
        <slot></slot>
      </Host>
    );
  }
}
