import { Component, ComponentInterface, Host, h, Prop, Listen, Watch, EventEmitter, Event, Method, Element } from '@stencil/core';
import Choices from 'choices.js';
import { AjaxFn, ChoicesOptions, SelectChoicesOption } from './select-choices.interface';

/**
 * @internal
 */
@Component({
  tag: 'bkkr-select-choices',
  styleUrl: 'select-choices.scss'
})

export class SelectChoices implements ComponentInterface {
  private didInit = false;
  private mutationO?: MutationObserver;

  private choicesReady = false;
  private choicesId = `bkkr-sel-${choicesIds++}`;
  private choices: Promise<Choices> = new Promise(resolve => { this.readyChoices = resolve; });
  private readyChoices!: (choices: Choices) => void;
  private syncChoices?: Choices;

  @Element() el!: HTMLBkkrSelectChoicesElement;

  /** 
   * Header text for the choices
   */
  @Prop() header?: string;

  /** 
   * Subheader text for the choices
   */
  @Prop() subHeader?: string;
  
  /**
   * If `true`, the select can accept multiple values.
   */
  @Prop() multiple?: boolean = false;

  /**
   * The name of the control, which is submitted with the form data.
   */
  @Prop() name: string = this.choicesId;

  /**
   * The value of the input.
   */
  @Prop({ mutable: true }) value: string;

  /**
   * If true, a searchbar appears. This is not supported on 'alert' interface.
   */
  @Prop() search: boolean = true;

  /**
   * Options to pass to the choices instance.
   * See https://github.com/jshjohnson/Choices for valid options
   */
  @Prop() interfaceOptions?: ChoicesOptions = {};

  @Watch('interfaceOptions')
  async interfaceOptionsChanged() {
    if (this.choicesReady) {
      const choices = await this.getChoices();
      Object.assign(choices.params, this.interfaceOptions);
      await this.update();
    }
  }

  /**
   * Array of options for the choices 
   */
  @Prop() options: SelectChoicesOption[] = [];

  /**
   * Emitted after Choices initialization
   */
  @Event() bkkrSelectDidLoad!: EventEmitter<void>;

  @Listen('bkkrChange')
  onSelect(ev: any) {
    console.log(ev);
    const option = this.options.find(o => o.value === ev.target.value);
    if (option) {
      option.handler();
    }
  }

  connectedCallback() {    
    // tslint:disable-next-line: strict-type-predicates
    if (typeof MutationObserver !== 'undefined') {
      const mut = this.mutationO = new MutationObserver(() => {
        if (this.choicesReady) {
          this.update();
        }
        console.log('mutation');
      });
      mut.observe(this.el, {
        childList: true,
        subtree: true
      });

      this.el.componentOnReady().then(() => {
        if (!this.didInit) {
          this.didInit = true;
          this.initChoices();
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
     * choices otherwise it is possible
     * that it will be left in a
     * destroyed state if connectedCallback
     * is called multiple times
     */
    const choices = this.syncChoices;
    if (choices !== undefined) {
      choices.destroy();
      this.choices = new Promise(resolve => { this.readyChoices = resolve; });
      this.choicesReady = false;
      this.syncChoices = undefined;
    }
  }

  /**
   * Highlight a chosen item (selected item can be removed).
   */
  @Method()
  public async highlightItem(item: HTMLElement, runEvent?: boolean) {
    const [choices] = await Promise.all([
      this.getChoices(),
    ]);
    choices.highlightItem(item, runEvent);

    return this;
  }

  /**
   * Un-highlight a chosen item.
   */
  @Method()
  public async unhighlightItem(item: HTMLElement) {
    const [choices] = await Promise.all([
      this.getChoices(),
    ]);
    choices.unhighlightItem(item);

    return this;
  }

  /**
   * Highlight each chosen item (selected items can be removed).
   */
  @Method()
  public async highlightAll() {
    const [choices] = await Promise.all([
      this.getChoices(),
    ]);
    choices.highlightAll();

    return this;
  }

  /**
   * Un-highlight each chosen item.
   */
  @Method()
  public async unhighlightAll() {
    const [choices] = await Promise.all([
      this.getChoices(),
    ]);
    choices.unhighlightAll();

    return this;
  }

  /**
   * Remove each item by a given value.
   */
  @Method()
  public async removeActiveItemsByValue(value: string) {
    const [choices] = await Promise.all([
      this.getChoices(),
    ]);
    choices.removeActiveItemsByValue(value);

    return this;
  }

  /**
   * Remove each selectable item.
   */
  @Method()
  public async removeActiveItems(excludedId?: number) {
    const [choices] = await Promise.all([
      this.getChoices(),
    ]);
    choices.removeActiveItems(excludedId);

    return this;
  }

  /**
   * Remove each item the user has selected.
   */
  @Method()
  public async removeHighlightedItems(runEvent?: boolean) {
    const [choices] = await Promise.all([
      this.getChoices(),
    ]);
    choices.removeHighlightedItems(runEvent);

    return this;
  }

  /**
   * Show option list dropdown (only affects select inputs).
   */
  @Method()
  public async showDropdown(focusInput?: boolean) {
    const [choices] = await Promise.all([
      this.getChoices(),
    ]);
    choices.showDropdown(focusInput);

    return this;
  }

  /**
   * Hide option list dropdown (only affects select inputs).
   */
  @Method()
  public async hideDropdown(blurInput?: boolean) {
    const [choices] = await Promise.all([
      this.getChoices(),
    ]);
    choices.hideDropdown(blurInput);

    return this;
  }

  /**
   * Get value(s) of input (i.e. inputted items (text) or
   * selected choices (select)). Optionally pass an argument
   * of true to only return values rather than value objects.
   */
  @Method()
  public async getValue(valueOnly?: boolean): Promise<string | Array<string>> {
    const [choices] = await Promise.all([
      this.getChoices(),
    ]);

    return choices.getValue(valueOnly);
  }

  /**
   * Set value of input based on an array of objects or
   * strings. This behaves exactly the same as passing items
   * via the items option but can be called after initialising
   * Choices.
   */
  @Method()
  public async setValue(args: Array<any>) {
    const [choices] = await Promise.all([
      this.getChoices(),
    ]);
    choices.setValue(args);

    return this;
  }

  /**
   * Set value of input based on existing Choice. value can be
   * either a single string or an array of strings
   */
  @Method()
  public async setChoiceByValue(value: string | Array<string>) {
    const [choices] = await Promise.all([
      this.getChoices(),
    ]);
    choices.setChoiceByValue(value);

    return this;
  }

  /**
   * Set choices of select input via an array of objects 
   * (or function that returns array of object or promise of it),
   * a value field name and a label field name.
   */
  @Method()
  public async setChoices(options: Array<any>, value: string, label: string, replaceChoices?: boolean) {
    const [choices] = await Promise.all([
      this.getChoices(),
    ]);
    choices.setChoices(options, value, label, replaceChoices);

    return this;
  }

  /**
   * Clear all choices from select
   */
  @Method()
  public async clearChoices() {
    const [choices] = await Promise.all([
      this.getChoices(),
    ]);
    choices.clearChoices();

    return this;
  }

  /**
   * Removes all items, choices and groups. Use with caution.
   */
  @Method()
  public async clearStore() {
    const [choices] = await Promise.all([
      this.getChoices(),
    ]);
    choices.clearStore();

    return this;
  }

  /**
   * Clear input of any user inputted text.
   */
  @Method()
  public async clearInput() {
    const [choices] = await Promise.all([
      this.getChoices(),
    ]);
    choices.clearInput();

    return this;
  }

  /**
   * Enables input to accept new values/select further choices.
   */
  @Method()
  public async enable() {
    const [choices] = await Promise.all([
      this.getChoices(),
    ]);
    choices.enable();

    return this;
  }

  /**
   * Disables input from accepting new value/selecting further choices.
   */
  @Method()
  public async disable() {
    const [choices] = await Promise.all([
      this.getChoices(),
    ]);
    choices.disable();

    return this;
  }

  /**
   * Set ajax function.
   */
  @Method()
  public async ajax(fn: AjaxFn) {
    const [choices] = await Promise.all([
      this.getChoices(),
    ]);
    choices.ajax(fn);

    return this;
  }


  /**
  * Update the underlying Choices implementation.
  */
  @Method()
  async update() {
    /* const [choices] = await Promise.all([
      this.getChoices(),
    ]); */

    return;
  }

  /**
   * Get the Choices instance.
   * Use this to access the full Choices API.
   * See https://github.com/jshjohnson/Choices for all API options.
   */
  @Method()
  async getChoices(): Promise<any> {
    return this.choices;
  }

  private async initChoices() {
    const that = this;
    const finalOptions = this.normalizeOptions();

    // init choices core
    // @ts-ignore
    const choices = new Choices(this.el.querySelector('select'), finalOptions);
    
    this.el.addEventListener(
      'change',
      function(ev: any) {
        const option = that.options.find(o => o.value === ev.target.value);
        if (option) {
          option.handler();
        }
      },
      false,
    );
    
    this.choicesReady = true;
    this.syncChoices = choices;
    this.readyChoices(choices);
  }

  private normalizeOptions(): ChoicesOptions {
    // Base options, can be changed
    const choicesOptions: ChoicesOptions = {
      silent: false,
      items: [],
      choices: this.options,
      renderChoiceLimit: -1,
      maxItemCount: -1,
      addItems: true,
      addItemFilter: null,
      removeItems: true,
      removeItemButton: false,
      editItems: false,
      duplicateItemsAllowed: true,
      delimiter: ',',
      paste: true,
      searchEnabled: this.search,
      searchChoices: true,
      searchFloor: 1,
      searchResultLimit: 4,
      searchFields: ['label', 'value'],
      position: 'auto',
      resetScrollPosition: true,
      shouldSort: true,
      shouldSortItems: false,
      sorter: function (a, b) {
        return b.label.length - a.label.length;
      },
      placeholder: true,
      placeholderValue: null,
      searchPlaceholderValue: 'Type something...',
      prependValue: null,
      appendValue: null,
      renderSelectedChoices: 'auto',
      loadingText: 'Loading...',
      noResultsText: 'No results found',
      noChoicesText: 'No choices to choose from',
      itemSelectText: 'Press to select',
      addItemText: (value) => {
        return `Press Enter to add <b>"${value}"</b>`;
      },
      maxItemText: (maxItemCount) => {
        return `Only ${maxItemCount} values can be added`;
      },
      valueComparer: (value1, value2) => {
        return value1 === value2;
      }
    };

    // Keep the event options separate, we dont want users
    // overwriting these
    const eventOptions: ChoicesOptions = {
      callbackOnInit: () => {
        setTimeout(() => {
          this.bkkrSelectDidLoad.emit();
        }, 20);
      }
    };


    const classNameOptions: ChoicesOptions = {
      classNames: {
        containerOuter: 'choices',
        containerInner: 'choices-inner',
        input: 'choices-input',
        inputCloned: 'choices-input-cloned',
        list: 'choices-list',
        listItems: 'choices-list-multiple',
        listSingle: 'choices-list-single',
        listDropdown: 'choices-list-dropdown',
        item: 'choices-item',
        itemSelectable: 'choices-item-selectable',
        itemDisabled: 'choices-item-disabled',
        itemChoice: 'choices-item-choice',
        placeholder: 'choices-placeholder',
        group: 'choices-group',
        groupHeading: 'choices-heading',
        button: 'choices-button',
        activeState: 'is-active',
        focusState: 'is-focused',
        openState: 'is-open',
        disabledState: 'is-disabled',
        highlightedState: 'is-highlighted',
        selectedState: 'is-selected',
        flippedState: 'is-flipped',
        loadingState: 'is-loading',
        noResults: 'has-no-results',
        noChoices: 'has-no-choices'
      }
    }

    // Merge the base, user options, class names, and events together then pas to choices
    return { 
      ...choicesOptions,
      ...this.interfaceOptions,
      ...classNameOptions,
      ...eventOptions
    };
  }

  private close(): boolean {
    console.log('TODO: close()');

    return false;
  }

  render() {
    const { multiple, name, search } = this;

    return (
      <Host class={{
        'choices-container': true,
        'choices-search-enabled': search && !multiple
      }}>
        <select
          part="native"
          multiple={multiple}
          name={name}
          class="native-select"
        >
        </select>

        {search && !multiple &&
          <div class="choices-searchbar-icons search-icon">
            <bkkr-icon name="search"></bkkr-icon>
          </div>
        }

        {search && !multiple &&
          <div class="choices-searchbar-icons close-icon">
            <bkkr-icon name="times" onClick={() => this.close()}></bkkr-icon>
          </div>
        }
      </Host>
    );
  }
}


let choicesIds = 0;