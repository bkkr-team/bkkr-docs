import { Component, ComponentInterface, Host, h, Prop, Element, State, Build, Watch } from '@stencil/core';

import { Color } from '../../interface';
import { setClassList } from '../../utils/style';
import { iconContent, getSvgContent } from './icon.request';
import { getUrl, getName } from './icon.utils';

@Component({
  tag: 'bkkr-icon',
  styleUrl: 'icon.host.scss',
  assetsDirs: ['fontawesome'],
  shadow: true
})

export class Icon implements ComponentInterface {
  private io?: IntersectionObserver;

  @Element() el!: HTMLElement;

  @State() private svgContent?: string;
  @State() private isVisible = false;

  /**
   * The color to use for the background of the item.
   */
  @Prop() color?: Color;

  /**
   * Specifies the label to use for accessibility. Defaults to the icon name.
   */
  @Prop({ mutable: true }) ariaLabel?: string;

  /**
   * Set the icon to hidden, respectively `true`, to remove it from the accessibility tree.
   */
  @Prop({ reflect: true }) ariaHidden?: string;

  /**
   * The name of icons.
   * See all icons on [Fontawesome](https://fontawesome.com/).
   */
  @Prop({ reflect: true }) name?: string;

  /**
   * Specifies the exact `src` of an SVG file to use.
   */
  @Prop() src?: string;

  /**
   * A combination of both `name` and `src`. If a `src` url is detected
   * it will set the `src` property. Otherwise it assumes it's a built-in named
   * SVG and set the `name` property.
   */
  @Prop() icon?: any;

  /**
   * The icon size.
   */
  @Prop({ reflect: true }) size?: 'small' | 'default' | 'large';
  
  /**
   * The icon size.
   */
  @Prop() type: 'regular' | 'solid' | 'brands' = 'solid';

  /**
   * If enabled, bkkr-icon will be loaded lazily when it's visible in the viewport.
   * Default, `false`.
   */
  @Prop() lazy = false;

  /**
   * When set to `false`, SVG content that is HTTP fetched will not be checked
   * if the response SVG content has any `<script>` elements, or any attributes
   * that start with `on`, such as `onclick`.
   * @default true
   */
  @Prop() sanitize = true;

  connectedCallback() {
    // purposely do not return the promise here because loading
    // the svg file should not hold up loading the app
    // only load the svg if it's visible
    this.waitUntilVisible(this.el, '50px', () => {
      this.isVisible = true;
      this.loadIcon();
    });
  }

  disconnectedCallback() {
    if (this.io) {
      this.io.disconnect();
      this.io = undefined;
    }
  }

  private waitUntilVisible(el: HTMLElement, rootMargin: string, cb: () => void) {
    if (Build.isBrowser && this.lazy && typeof window !== 'undefined' && (window as any).IntersectionObserver) {
      const io = (this.io = new (window as any).IntersectionObserver(
        (data: IntersectionObserverEntry[]) => {
          if (data[0].isIntersecting) {
            io.disconnect();
            this.io = undefined;
            cb();
          }
        },
        { rootMargin },
      ));

      io.observe(el);
    } else {
      // browser doesn't support IntersectionObserver
      // so just fallback to always show it
      cb();
    }
  }

  @Watch('name')
  @Watch('src')
  @Watch('icon')
  loadIcon() {
    if (Build.isBrowser && this.isVisible) {
      const url = getUrl(this);
      if (url) {
        if (iconContent.has(url)) {
          // sync if it's already loaded
          this.svgContent = iconContent.get(url);
        } else {
          // async if it hasn't been loaded
          getSvgContent(url, this.sanitize).then(() => (this.svgContent = iconContent.get(url)));
        }
      }
    }

    if (!this.ariaLabel && this.ariaHidden !== 'true') {
      const label = getName(this.name, this.icon);
      // user did not provide a label
      // come up with the label based on the icon name
      if (label) {
        this.ariaLabel = label.replace(/\-/g, ' ');
      }
    }
  }

  render() {
    const { color, size } = this;

    return (
      <Host
        role="img"
        class={setClassList(color, {
          [`icon-${size}`]: !!size,
          ['icon-color']: !!color
        })}
      >
        {Build.isBrowser && this.svgContent ? (
          <div class="icon-inner" innerHTML={this.svgContent}></div>
        ) : (
          <div class="icon-inner"></div>
        )}
      </Host>
    );
  }
}
