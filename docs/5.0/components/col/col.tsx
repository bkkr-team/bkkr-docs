import { Component, ComponentInterface, Host, Prop, h } from '@stencil/core';

import { matchBreakpoint } from '../../utils/breakpoint';

const BREAKPOINTS = ['', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl'];

@Component({
  tag: 'bkkr-col',
  styleUrl: 'col.host.scss',
  shadow: true
})

export class Col implements ComponentInterface {

  /**
   * The size of the column, in terms of how many columns it should take up out of the total
   * available. If `"auto"` is passed, the column will be the size of its content.
   */
  @Prop() size?: string;

  /**
   * The size of the column for xs screens, in terms of how many columns it should take up out
   * of the total available. If `"auto"` is passed, the column will be the size of its content.
   */
  @Prop() sizeXs?: string;

  /**
   * The size of the column for sm screens, in terms of how many columns it should take up out
   * of the total available. If `"auto"` is passed, the column will be the size of its content.
   */
  @Prop() sizeSm?: string;

  /**
   * The size of the column for md screens, in terms of how many columns it should take up out
   * of the total available. If `"auto"` is passed, the column will be the size of its content.
   */
  @Prop() sizeMd?: string;

  /**
   * The size of the column for lg screens, in terms of how many columns it should take up out
   * of the total available. If `"auto"` is passed, the column will be the size of its content.
   */
  @Prop() sizeLg?: string;

  /**
   * The size of the column for xl screens, in terms of how many columns it should take up out
   * of the total available. If `"auto"` is passed, the column will be the size of its content.
   */
  @Prop() sizeXl?: string;

  /**
   * The size of the column for xxl screens, in terms of how many columns it should take up out
   * of the total available. If `"auto"` is passed, the column will be the size of its content.
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
    // e.g. <bkkr-col size-md>
    if (!columns || columns === '') {
      return;
    }

    // If the size is set to auto then don't calculate a size
    const colSize = (columns === 'auto')
      ? 'auto'
      // We should use the grid columns var
      : `calc(calc(${columns} / var(--columns, 12)) * 100%)`

    return {
      '--grow': `0`,
      '--basis': `${colSize}`
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
