import { Component, ComponentInterface, Host, h, Prop } from '@stencil/core';
import { HTMLStencilElement } from '@stencil/core/internal';
import { setClassList } from '../../utils/style';

@Component({
  tag: 'bkkr-breadcrumb',
  styleUrl: 'breadcrumb.host.scss',
  shadow: true
})

export class Breadcrumb implements ComponentInterface {
  /**
   * The current path
   */
  @Prop({ mutable: true }) path: string;

  render() {
    const { path } = this;

    return (
      <Host>
        <nav class="breadcrumb-inner" aria-label="breadcrumb">
          { this.path ? this.createBreadcrumbPath(path) : null }
        </nav>
      </Host>
    );
  }

  /**
   * Returns the list of paths.
   *
   * @param path - Path or list of paths.
   * @returns List of paths.
   */
  private getPath(path: string | Array<string>): Array<string> {
    console.log(typeof path !== 'undefined');
    return typeof path !== 'undefined'
      ? [].concat(typeof path === 'string' ? path.split(',') : path)
      : [];
  }

  private createBreadcrumbPath(path: string | Array<string>): Array<HTMLStencilElement> {
    return this.getPath(path).map((name, i, path) => {
      
      return (
        <a
          class={setClassList(null, {
            'breadcrumb-item': true,
            'breadcrumb-item-disabled': path.length - 1 === i
          })}
        >
          <span>{ name }</span>
          { path.length - 1 > i ? <bkkr-icon name="chevron-right" /> : ''}
        </a>
      );
    });
  }
}
