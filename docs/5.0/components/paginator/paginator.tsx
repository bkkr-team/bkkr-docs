import { Component, ComponentInterface, Host, h, Prop, EventEmitter, Method, readTask, State, Watch, writeTask, Event, Element } from '@stencil/core';
import { SafeString, sanitizeDOMString } from '../../utils/sanitization';
import { SpinnerTypes } from '../spinner/spinner.config';


@Component({
  tag: 'bkkr-paginator',
  styleUrl: 'paginator.scss'
})

export class Paginator implements ComponentInterface {
    private thrPx = 0;
    private thrPc = 0;
    private scrollEl?: HTMLElement;
    private didFire = false;
    private isBusy = false;
  
    @Element() el!: HTMLBkkrPaginatorElement;
    @State() isLoading = false;
  
    /**
     * The threshold distance from the bottom
     * of the content to call the `infinite` output event when scrolled.
     * The threshold value can be either a percent, or
     * in pixels. For example, use the value of `10%` for the `infinite`
     * output event to get called when the user has scrolled 10%
     * from the bottom of the page. Use the value `100px` when the
     * scroll is within 100 pixels from the bottom of the page.
     */
    @Prop() threshold = '15%';
  
    @Watch('threshold')
    protected thresholdChanged() {
      const val = this.threshold;
      if (val.lastIndexOf('%') > -1) {
        this.thrPx = 0;
        this.thrPc = (parseFloat(val) / 100);
  
      } else {
        this.thrPx = parseFloat(val);
        this.thrPc = 0;
      }
    }

    /**
     * Number of items.
     */
    @Prop() lenght: number;

    /**
     * Number of items on a page
     */
    @Prop() pageSize: number = 10;

    /**
     * Number of items on a page
     */
    @Prop({ mutable: true, reflect: true }) pageIndex: number = 1;

    /**
     * Handle infinite loading feature.
     */
    @Prop() infinite: boolean = true;

    /**
     * Show or hide the toolbar of pagination element.
     */
    @Prop() toolbar: boolean = true;
  
    /**
     * The position of the paginator element.
     * The value can be either `top` or `bottom`.
     */
    @Prop() position: 'top' | 'bottom' = 'bottom';
  
    /**
     * An animated SVG spinner that shows while loading.
     */
    @Prop({ mutable: true }) loadingSpinner?: SpinnerTypes | null = 'lines';

    /**
     * Optional text to display while loading.
     * `loadingText` can accept either plaintext or HTML as a string.
     * To display characters normally reserved for HTML, they
     * must be escaped. For example `<Bkkr>` would become
     * `&lt;Bkkr&gt;`
     *
     */
    @Prop() loadingText?: string | SafeString;

    /**
     * If `true`, the paginator will be hidden and scroll event listeners
     * will be removed.
     *
     * Set this to true to disable the paginator from actively
     * trying to receive new data while scrolling. This is useful
     * when it is known that there is no more data that can be added, and
     * the paginator is no longer needed.
     */
    @Prop() disabled = false;
  
    @Watch('disabled')
    protected disabledChanged() {
      const disabled = this.disabled;
      const infinite = this.infinite;

      if (disabled) {
        this.isLoading = false;
        this.isBusy = false;
      }
      this.enableScrollEvents(!disabled && infinite);
    }

    /**
     * Emitted when the scroll reaches
     * the threshold distance, or stepper have changed. From within your infinite handler,
     * you must call the paginator's `complete()` method when
     * your async operation has completed.
     */
    @Event() bkkrPaginator!: EventEmitter<void>;
  
    async connectedCallback() {
      const contentEl = this.el.closest('bkkr-content');
      if (!contentEl) {
        console.error('<bkkr-paginator> must be used inside an <bkkr-content>');
        return;
      }
      this.scrollEl = await contentEl.getScrollElement();
      this.thresholdChanged();
      this.disabledChanged();
      if (this.position === 'top') {
        writeTask(() => {
          if (this.scrollEl) {
            this.scrollEl.scrollTop = this.scrollEl.scrollHeight - this.scrollEl.clientHeight;
          }
        });
      }
    }
  
    disconnectedCallback() {
      this.enableScrollEvents(false);
      this.scrollEl = undefined;
    }
  
    private onScroll = () => {
      const scrollEl = this.scrollEl;
      if (!scrollEl || !this.canStart()) {
        return 1;
      }
  
      const infiniteHeight = this.el.offsetHeight;
      if (infiniteHeight === 0) {
        // if there is no height of this element then do nothing
        return 2;
      }

      const scrollTop = scrollEl.scrollTop;
      const scrollHeight = scrollEl.scrollHeight;
      const height = scrollEl.offsetHeight;
      const threshold = this.thrPc !== 0 ? (height * this.thrPc) : this.thrPx;

      const distanceFromInfinite = (this.position === 'bottom')
        ? scrollHeight - infiniteHeight - scrollTop - threshold - height
        : scrollTop - infiniteHeight - threshold;
  
      if (distanceFromInfinite < 0) {
        if (!this.didFire) {
          this.isLoading = true;
          this.didFire = true;
          this.pageIndex += 1;
          this.bkkrPaginator.emit();
          return 3;
        }
      } else {
        this.didFire = false;
      }
  
      return 4;
    }

    private changeIndex(index: number) {
        if (!this.isLoading) {
            this.isLoading = true;
            this.pageIndex = index;
            this.bkkrPaginator.emit();
        }
    }
  
    /**
     * Call `complete()` within the `ionInfinite` output event handler when
     * your async operation has completed. For example, the `loading`
     * state is while the app is performing an asynchronous operation,
     * such as receiving more data from an AJAX request to add more items
     * to a data list. Once the data has been received and UI updated, you
     * then call this method to signify that the loading has completed.
     * This method will change the paginator's state from `loading`
     * to `enabled`.
     */
    @Method()
    async complete() {
      const scrollEl = this.scrollEl;
      if (!this.isLoading || !scrollEl) {
        return;
      }
      this.isLoading = false;
  
      if (this.position === 'top') {
        /**
         * New content is being added at the top, but the scrollTop position stays the same,
         * which causes a scroll jump visually. This algorithm makes sure to prevent this.
         * (Frame 1)
         *    - complete() is called, but the UI hasn't had time to update yet.
         *    - Save the current content dimensions.
         *    - Wait for the next frame using _dom.read, so the UI will be updated.
         * (Frame 2)
         *    - Read the new content dimensions.
         *    - Calculate the height difference and the new scroll position.
         *    - Delay the scroll position change until other possible dom reads are done using _dom.write to be performant.
         * (Still frame 2, if I'm correct)
         *    - Change the scroll position (= visually maintain the scroll position).
         *    - Change the state to re-enable the InfiniteScroll.
         *    - This should be after changing the scroll position, or it could
         *    cause the InfiniteScroll to be triggered again immediately.
         * (Frame 3)
         *    Done.
         */
        this.isBusy = true;
        // ******** DOM READ ****************
        // Save the current content dimensions before the UI updates
        const prev = scrollEl.scrollHeight - scrollEl.scrollTop;
  
        // ******** DOM READ ****************
        requestAnimationFrame(() => {
          readTask(() => {
            // UI has updated, save the new content dimensions
            const scrollHeight = scrollEl.scrollHeight;
            // New content was added on top, so the scroll position should be changed immediately to prevent it from jumping around
            const newScrollTop = scrollHeight - prev;
  
            // ******** DOM WRITE ****************
            requestAnimationFrame(() => {
              writeTask(() => {
                scrollEl.scrollTop = newScrollTop;
                this.isBusy = false;
              });
            });
          });
        });
      }
    }
  
    private canStart(): boolean {
      return (
        !this.disabled &&
        !this.isBusy &&
        !!this.scrollEl &&
        !this.isLoading &&
        !!this.infinite
      );
    }
  
    private enableScrollEvents(shouldListen: boolean) {
      if (this.scrollEl) {
        if (shouldListen) {
          this.scrollEl.addEventListener('scroll', this.onScroll);
        } else {
          this.scrollEl.removeEventListener('scroll', this.onScroll);
        }
      }
    }
  
    render() {
      const { disabled, infinite, lenght, pageSize, pageIndex, isLoading, loadingSpinner, loadingText, toolbar } = this;
      const min = infinite ? 1 : (pageIndex * pageSize) - (pageSize - 1)
      return (
        <Host
          class={{
            'paginator-loading': isLoading,
            'paginator-enabled': !disabled
          }}
        >
            <div class="paginator-loading-content">
                {loadingSpinner && (
                    <div class="paginator-loading-spinner">
                        <bkkr-spinner type={loadingSpinner} />
                    </div>
                )}
                {loadingText && (
                    <div class="paginator-loading-text" innerHTML={sanitizeDOMString(loadingText)} />
                )}
            </div>
            {toolbar && (
                <bkkr-toolbar class="paginator-toolbar">
                    <div slot="start">
                        <small>
                            {min} - {(pageIndex * pageSize)} of {lenght}
                        </small>
                    </div>
                    <div slot="end">
                        <bkkr-button disabled={pageIndex <= 1} onClick={() => this.changeIndex(pageIndex - 1)}>
                            <bkkr-icon name="chevron-left"></bkkr-icon>
                        </bkkr-button>
                        <bkkr-button disabled={pageIndex * pageSize >= lenght} onClick={() => this.changeIndex(pageIndex + 1)}>
                            <bkkr-icon name="chevron-right"></bkkr-icon>
                        </bkkr-button>
                    </div>
                </bkkr-toolbar>
            )}
        </Host>
      );
    }
}