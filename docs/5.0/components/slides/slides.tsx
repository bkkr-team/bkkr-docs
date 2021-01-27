import { Component, ComponentInterface, Element, Host, Prop, h, EventEmitter, Method, Watch, Event } from '@stencil/core';

import Swiper, { SwiperOptions } from 'swiper'

@Component({
  tag: 'bkkr-slides',
  styleUrl: 'slides.scss'
})

export class Slides implements ComponentInterface {

    private scrollbarEl?: HTMLElement;
    private paginationEl?: HTMLElement;
    private swiperReady = false;
    private mutationO?: MutationObserver;
    private readySwiper!: (swiper: Swiper) => void;
    private swiper: Promise<Swiper> = new Promise(resolve => { this.readySwiper = resolve; });
    private syncSwiper?: Swiper;
    private didInit = false;
  
    @Element() el!: HTMLBkkrSlidesElement;
  
    /**
     * Options to pass to the swiper instance.
     * See http://idangero.us/swiper/api/ for valid options
     */
    @Prop() options: SwiperOptions = {};
  
    @Watch('options')
    async optionsChanged() {
      if (this.swiperReady) {
        const swiper = await this.getSwiper();
        Object.assign(swiper.params, this.options);
        await this.update();
      }
    }
  
    /**
     * If `true`, show the pagination.
     */
    @Prop() pager = false;
  
    /**
     * If `true`, show the scrollbar.
     */
    @Prop() scrollbar = false;
  
    /**
     * Emitted after Swiper initialization
     */
    @Event() bkkrSlidesDidLoad!: EventEmitter<void>;
  
    /**
     * Emitted when the user taps/clicks on the slide's container.
     */
    @Event() bkkrSlideTap!: EventEmitter<void>;
  
    /**
     * Emitted when the user double taps on the slide's container.
     */
    @Event() bkkrSlideDoubleTap!: EventEmitter<void>;
  
    /**
     * Emitted before the active slide has changed.
     */
    @Event() bkkrSlideWillChange!: EventEmitter<void>;
  
    /**
     * Emitted after the active slide has changed.
     */
    @Event() bkkrSlideDidChange!: EventEmitter<void>;
  
    /**
     * Emitted when the next slide has started.
     */
    @Event() bkkrSlideNextStart!: EventEmitter<void>;
  
    /**
     * Emitted when the previous slide has started.
     */
    @Event() bkkrSlidePrevStart!: EventEmitter<void>;
  
    /**
     * Emitted when the next slide has ended.
     */
    @Event() bkkrSlideNextEnd!: EventEmitter<void>;
  
    /**
     * Emitted when the previous slide has ended.
     */
    @Event() bkkrSlidePrevEnd!: EventEmitter<void>;
  
    /**
     * Emitted when the slide transition has started.
     */
    @Event() bkkrSlideTransitionStart!: EventEmitter<void>;
  
    /**
     * Emitted when the slide transition has ended.
     */
    @Event() bkkrSlideTransitionEnd!: EventEmitter<void>;
  
    /**
     * Emitted when the slider is actively being moved.
     */
    @Event() bkkrSlideDrag!: EventEmitter<void>;
  
    /**
     * Emitted when the slider is at its initial position.
     */
    @Event() bkkrSlideReachStart!: EventEmitter<void>;
  
    /**
     * Emitted when the slider is at the last slide.
     */
    @Event() bkkrSlideReachEnd!: EventEmitter<void>;
  
    /**
     * Emitted when the user first touches the slider.
     */
    @Event() bkkrSlideTouchStart!: EventEmitter<void>;
  
    /**
     * Emitted when the user releases the touch.
     */
    @Event() bkkrSlideTouchEnd!: EventEmitter<void>;
  
    connectedCallback() {
      // tslint:disable-next-line: strict-type-predicates
      if (typeof MutationObserver !== 'undefined') {
        const mut = this.mutationO = new MutationObserver(() => {
          if (this.swiperReady) {
            this.update();
          }
        });
        mut.observe(this.el, {
          childList: true,
          subtree: true
        });
  
        this.el.componentOnReady().then(() => {
          if (!this.didInit) {
            this.didInit = true;
            this.initSwiper();
          }
        });
      }
    }
  
    disconnectedCallback() {
      if (this.mutationO) {
        this.mutationO.disconnect();
        this.mutationO = undefined;
      }
  
      /**
       * We need to synchronously destroy
       * swiper otherwise it is possible
       * that it will be left in a
       * destroyed state if connectedCallback
       * is called multiple times
       */
      const swiper = this.syncSwiper;
      if (swiper !== undefined) {
        swiper.destroy(true, true);
        this.swiper = new Promise(resolve => { this.readySwiper = resolve; });
        this.swiperReady = false;
        this.syncSwiper = undefined;
      }
  
      this.didInit = false;
    }
  
    /**
     * Update the underlying slider implementation. Call this if you've added or removed
     * child slides.
     */
    @Method()
    async update() {
      const [swiper] = await Promise.all([
        this.getSwiper(),
        waitForSlides(this.el)
      ]);
      swiper.update();
    }
  
    /**
     * Force swiper to update its height (when autoHeight is enabled) for the duration
     * equal to 'speed' parameter.
     *
     * @param speed The transition duration (in ms).
     */
    @Method()
    async updateAutoHeight(speed?: number) {
      const swiper = await this.getSwiper();
      swiper.updateAutoHeight(speed);
    }
  
    /**
     * Transition to the specified slide.
     *
     * @param index The index of the slide to transition to.
     * @param speed The transition duration (in ms).
     * @param runCallbacks If true, the transition will produce [Transition/SlideChange][Start/End] transition events.
     */
    @Method()
    async slideTo(index: number, speed?: number, runCallbacks?: boolean) {
      const swiper = await this.getSwiper();
      swiper.slideTo(index, speed, runCallbacks);
    }
  
    /**
     * Transition to the next slide.
     *
     * @param speed The transition duration (in ms).
     * @param runCallbacks If true, the transition will produce [Transition/SlideChange][Start/End] transition events.
     */
    @Method()
    async slideNext(speed?: number, runCallbacks?: boolean) {
      const swiper = await this.getSwiper();
      swiper.slideNext(speed!, runCallbacks!);
    }
  
    /**
     * Transition to the previous slide.
     *
     * @param speed The transition duration (in ms).
     * @param runCallbacks If true, the transition will produce the [Transition/SlideChange][Start/End] transition events.
     */
    @Method()
    async slidePrev(speed?: number, runCallbacks?: boolean) {
      const swiper = await this.getSwiper();
      swiper.slidePrev(speed, runCallbacks);
    }
  
    /**
     * Get the index of the active slide.
     */
    @Method()
    async getActiveIndex(): Promise<number> {
      const swiper = await this.getSwiper();
      return swiper.activeIndex;
    }
  
    /**
     * Get the index of the previous slide.
     */
    @Method()
    async getPreviousIndex(): Promise<number> {
      const swiper = await this.getSwiper();
      return swiper.previousIndex;
    }
  
    /**
     * Get the total number of slides.
     */
    @Method()
    async length(): Promise<number> {
      const swiper = await this.getSwiper();
      return swiper.slides.length;
    }
  
    /**
     * Get whether or not the current slide is the last slide.
     */
    @Method()
    async isEnd(): Promise<boolean> {
      const swiper = await this.getSwiper();
      return swiper.isEnd;
    }
  
    /**
     * Get whether or not the current slide is the first slide.
     */
    @Method()
    async isBeginning(): Promise<boolean> {
      const swiper = await this.getSwiper();
      return swiper.isBeginning;
    }
  
    /**
     * Start auto play.
     */
    @Method()
    async startAutoplay() {
      const swiper = await this.getSwiper();
      if (swiper.autoplay) {
        swiper.autoplay.start();
      }
    }
  
    /**
     * Stop auto play.
     */
    @Method()
    async stopAutoplay() {
      const swiper = await this.getSwiper();
      if (swiper.autoplay) {
        swiper.autoplay.stop();
      }
    }
  
    /**
     * Lock or unlock the ability to slide to the next slide.
     *
     * @param lock If `true`, disable swiping to the next slide.
     */
    @Method()
    async lockSwipeToNext(lock: boolean) {
      const swiper = await this.getSwiper();
      swiper.allowSlideNext = !lock;
    }
  
    /**
     * Lock or unlock the ability to slide to the previous slide.
     *
     * @param lock If `true`, disable swiping to the previous slide.
     */
    @Method()
    async lockSwipeToPrev(lock: boolean) {
      const swiper = await this.getSwiper();
      swiper.allowSlidePrev = !lock;
    }
  
    /**
     * Lock or unlock the ability to slide to the next or previous slide.
     *
     * @param lock If `true`, disable swiping to the next and previous slide.
     */
    @Method()
    async lockSwipes(lock: boolean) {
      const swiper = await this.getSwiper();
      swiper.allowSlideNext = !lock;
      swiper.allowSlidePrev = !lock;
      swiper.allowTouchMove = !lock;
    }
  
    /**
     * Get the Swiper instance.
     * Use this to access the full Swiper API.
     * See https://idangero.us/swiper/api/ for all API options.
     */
    @Method()
    async getSwiper(): Promise<any> {
      return this.swiper;
    }
  
    private async initSwiper() {
      const finalOptions = this.normalizeOptions();
  
      // init swiper core
      // @ts-ignore
      
      await waitForSlides(this.el);
      
      const swiper = new Swiper(this.el, finalOptions);
      this.swiperReady = true;
      this.syncSwiper = swiper;
      this.readySwiper(swiper);
    }
  
    private normalizeOptions(): SwiperOptions {
      // Base options, can be changed
      const swiperOptions: SwiperOptions = {
        effect: undefined,
        direction: 'horizontal',
        initialSlide: 0,
        loop: false,
        parallax: false,
        slidesPerView: 1,
        spaceBetween: 0,
        speed: 300,
        slidesPerColumn: 1,
        slidesPerColumnFill: 'column',
        slidesPerGroup: 1,
        centeredSlides: false,
        slidesOffsetBefore: 0,
        slidesOffsetAfter: 0,
        touchEventsTarget: 'container',
        autoplay: false,
        freeMode: false,
        freeModeMomentum: false,
        freeModeMomentumRatio: 1,
        freeModeMomentumBounce: true,
        freeModeMomentumBounceRatio: 1,
        freeModeMomentumVelocityRatio: 1,
        freeModeSticky: false,
        freeModeMinimumVelocity: 0.02,
        autoHeight: false,
        setWrapperSize: false,
        zoom: {
          maxRatio: 3,
          minRatio: 1,
          toggle: false,
        },
        touchRatio: 1,
        touchAngle: 45,
        simulateTouch: true,
        touchStartPreventDefault: false,
        shortSwipes: true,
        longSwipes: true,
        longSwipesRatio: 0.5,
        longSwipesMs: 300,
        followFinger: true,
        threshold: 0,
        touchMoveStopPropagation: true,
        touchReleaseOnEdges: false,
        iOSEdgeSwipeDetection: false,
        iOSEdgeSwipeThreshold: 20,
        resistance: true,
        resistanceRatio: 0.85,
        watchSlidesProgress: false,
        watchSlidesVisibility: false,
        preventClicks: true,
        preventClicksPropagation: true,
        slideToClickedSlide: false,
        loopAdditionalSlides: 0,
        noSwiping: false,
        runCallbacksOnInit: true,
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true
        },
        flipEffect: {
          slideShadows: true,
          limitRotation: true
        },
        cubeEffect: {
          slideShadows: true,
          shadow: true,
          shadowOffset: 20,
          shadowScale: 0.94
        },
        fadeEffect: {
          crossFade: false
        },
        a11y: {
          prevSlideMessage: 'Previous slide',
          nextSlideMessage: 'Next slide',
          firstSlideMessage: 'This is the first slide',
          lastSlideMessage: 'This is the last slide'
        }
      };
  
      if (this.pager) {
        swiperOptions.pagination = {
          el: this.paginationEl!,
          type: 'bullets',
          clickable: false,
          hideOnClick: false,
        };
      }
  
      if (this.scrollbar) {
        swiperOptions.scrollbar = {
          el: this.scrollbarEl!,
          hide: true,
        };
      }
  
      // Keep the event options separate, we dont want users
      // overwriting these
      const eventOptions: SwiperOptions = {
        on: {
          init: () => {
            setTimeout(() => {
              this.bkkrSlidesDidLoad.emit();
            }, 20);
          },
          slideChangeTransitionStart: this.bkkrSlideWillChange.emit,
          slideChangeTransitionEnd: this.bkkrSlideDidChange.emit,
          slideNextTransitionStart: this.bkkrSlideNextStart.emit,
          slidePrevTransitionStart: this.bkkrSlidePrevStart.emit,
          slideNextTransitionEnd: this.bkkrSlideNextEnd.emit,
          slidePrevTransitionEnd: this.bkkrSlidePrevEnd.emit,
          transitionStart: this.bkkrSlideTransitionStart.emit,
          transitionEnd: this.bkkrSlideTransitionEnd.emit,
          sliderMove: this.bkkrSlideDrag.emit,
          reachBeginning: this.bkkrSlideReachStart.emit,
          reachEnd: this.bkkrSlideReachEnd.emit,
          touchStart: this.bkkrSlideTouchStart.emit,
          touchEnd: this.bkkrSlideTouchEnd.emit,
          tap: this.bkkrSlideTap.emit,
          doubleTap: this.bkkrSlideDoubleTap.emit
        }
      };
  
      const customEvents = (!!this.options && !!this.options.on) ? this.options.on : {};
  
      // merge "on" event listeners, while giving our event listeners priority
      const mergedEventOptions = { on: { ...customEvents, ...eventOptions.on } };
  
      // Merge the base, user options, and events together then pas to swiper
      return { ...swiperOptions, ...this.options, ...mergedEventOptions };
    }
  
    render() {
      return (
        <Host
          class={{
            'swiper-container': true
          }}
        >
          <div class="swiper-wrapper">
            <slot></slot>
          </div>
          {this.pager && <div class="swiper-pagination" ref={el => this.paginationEl = el}></div>}
          {this.scrollbar && <div class="swiper-scrollbar" ref={el => this.scrollbarEl = el}></div>}
        </Host>
      );
    }
  }
  
  const waitForSlides = (el: HTMLElement) => {
    return Promise.all(
      Array.from(el.querySelectorAll('bkkr-slides')).map(s => s.componentOnReady())
    );
  };