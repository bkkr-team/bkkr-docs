/*!
 * (C) BKKR Framework https://bkkr-team.github.io/bkkr-docs/ - MIT License
 */
import{d as e,N as o,w as t,p as s,b as r}from"./p-3b0af71a.js";import{g as i}from"./p-339074e2.js";import"./p-59ca9e85.js";import"./p-5ab02a77.js";import"./p-e7c3cb65.js";(()=>{const r=Array.from(e.querySelectorAll("script")).find((e=>new RegExp(`/${o}(\\.esm)?\\.js($|\\?|#)`).test(e.src)||e.getAttribute("data-stencil-namespace")===o)),i=r["data-opts"]||{};return i.resourcesUrl=new URL(".",new URL(r.getAttribute("data-resources-url")||r.src,t.location.href)).href,((s,r)=>{const i=`__sc_import_${o.replace(/\s|-/g,"_")}`;try{t[i]=new Function("w",`return import(w);//${Math.random()}`)}catch(o){const a=new Map;t[i]=o=>{const n=new URL(o,s).href;let l=a.get(n);if(!l){const o=e.createElement("script");o.type="module",o.crossOrigin=r.crossOrigin,o.src=URL.createObjectURL(new Blob([`import * as m from '${n}'; window.${i}.m = m;`],{type:"application/javascript"})),l=new Promise((e=>{o.onload=()=>{e(t[i].m),o.remove()}})),a.set(n,l),e.head.appendChild(o)}return l}}})(i.resourcesUrl,r),t.customElements?s(i):__sc_import_bkkr("./p-afa27773.js").then((()=>i))})().then((e=>(i(),r(JSON.parse('[["p-88628e03",[[4,"bkkr-paginator",{"animated":[4],"threshold":[1],"items":[2],"href":[1],"length":[2],"page":[1538],"infinite":[4],"toolbar":[4],"position":[1],"arrowIcon":[1,"arrow-icon"],"statusText":[1,"status-text"],"loadingType":[1,"loading-type"],"changeLength":[4,"change-length"],"spinner":[1],"loadingText":[1,"loading-text"],"disabled":[4],"routerDirection":[1,"router-direction"],"isLoading":[32],"reset":[32],"complete":[64]},[[9,"resize","onResize"]]]]],["p-8e7cbbb0",[[4,"bkkr-infinite-scroll",{"animated":[4],"threshold":[1],"items":[2],"length":[2],"page":[1538],"infinite":[4],"position":[1],"spinner":[1025],"loadingText":[1,"loading-text"],"buttonText":[1,"button-text"],"disabled":[4],"isLoading":[32],"reset":[32],"complete":[64]}]]],["p-17232988",[[1,"bkkr-drawer",{"hasController":[4,"has-controller"],"overlayIndex":[2,"overlay-index"],"delegate":[16],"keyboardClose":[4,"keyboard-close"],"enterAnimation":[16],"leaveAnimation":[16],"component":[1],"componentProps":[16],"cssClass":[1,"css-class"],"duration":[2],"backdropDismiss":[4,"backdrop-dismiss"],"showBackdrop":[4,"show-backdrop"],"animated":[4],"handle":[4],"closeButton":[4,"close-button"],"closeIcon":[1,"close-icon"],"swipeToClose":[4,"swipe-to-close"],"presentingElement":[16],"htmlAttributes":[16],"isOpen":[4,"is-open"],"trigger":[1],"presented":[32],"present":[64],"dismiss":[64],"onDidDismiss":[64],"onWillDismiss":[64]}]]],["p-d007ed7e",[[17,"bkkr-item",{"color":[1],"button":[4],"detail":[4],"detailIcon":[1,"detail-icon"],"disabled":[4],"download":[1],"fill":[1],"shape":[1],"href":[1],"rel":[1],"lines":[1],"counter":[4],"routerDirection":[1,"router-direction"],"target":[1],"type":[1],"multipleInputs":[32],"focusable":[32],"counterString":[32]},[[0,"bkkrChange","handleIonChange"],[0,"bkkrColor","labelColorChanged"],[0,"bkkrStyle","itemStyle"]]]]],["p-13dde25d",[[1,"bkkr-modal",{"hasController":[4,"has-controller"],"overlayIndex":[2,"overlay-index"],"delegate":[16],"keyboardClose":[4,"keyboard-close"],"enterAnimation":[16],"leaveAnimation":[16],"component":[1],"componentProps":[16],"cssClass":[1,"css-class"],"backdropDismiss":[4,"backdrop-dismiss"],"showBackdrop":[4,"show-backdrop"],"animated":[4],"handle":[4],"closeButton":[4,"close-button"],"closeIcon":[1,"close-icon"],"swipeToClose":[4,"swipe-to-close"],"presentingElement":[16],"htmlAttributes":[16],"isOpen":[4,"is-open"],"trigger":[1],"presented":[32],"present":[64],"dismiss":[64],"onDidDismiss":[64],"onWillDismiss":[64]}]]],["p-77f2482c",[[17,"bkkr-accordion",{"value":[1],"disabled":[4],"readonly":[4],"toggleIcon":[1,"toggle-icon"],"toggleIconSlot":[1,"toggle-icon-slot"],"state":[32],"isNext":[32],"isPrevious":[32]}]]],["p-4cebdb35",[[2,"bkkr-alert",{"overlayIndex":[2,"overlay-index"],"keyboardClose":[4,"keyboard-close"],"enterAnimation":[16],"leaveAnimation":[16],"cssClass":[1,"css-class"],"header":[1],"subHeader":[1,"sub-header"],"message":[1],"buttons":[16],"inputs":[16],"backdropDismiss":[4,"backdrop-dismiss"],"animated":[4],"htmlAttributes":[16],"position":[1],"present":[64],"dismiss":[64],"onDidDismiss":[64],"onWillDismiss":[64]},[[4,"keydown","onKeydown"]]]]],["p-b4545cd6",[[1,"bkkr-breadcrumb",{"collapsed":[4],"last":[4],"showCollapsedIndicator":[4,"show-collapsed-indicator"],"color":[1],"active":[4],"disabled":[4],"download":[1],"href":[1],"rel":[1],"separator":[4],"target":[1],"routerDirection":[1,"router-direction"],"routerAnimation":[16]}]]],["p-4a0eb82f",[[2,"bkkr-datetime",{"fireFocusEvents":[4,"fire-focus-events"],"color":[1],"autofocus":[4],"disabled":[4],"enterkeyhint":[1],"inputmode":[1],"min":[1025],"max":[1025],"name":[1],"placeholder":[1],"readonly":[4],"required":[4],"picker":[4],"interfaceOptions":[8,"interface-options"],"value":[1025],"displayFormat":[1,"display-format"],"monthNames":[1,"month-names"],"monthShortNames":[1,"month-short-names"],"dayNames":[1,"day-names"],"dayShortNames":[1,"day-short-names"],"hasFocus":[32],"isExpanded":[32],"setFocus":[64],"setBlur":[64],"getDatetimeElement":[64],"open":[64]}]]],["p-7e51cae5",[[2,"bkkr-input",{"fireFocusEvents":[4,"fire-focus-events"],"color":[1],"accept":[1],"autocapitalize":[1],"autocomplete":[1],"autocorrect":[1],"autofocus":[4],"clearInput":[4,"clear-input"],"clearOnEdit":[4,"clear-on-edit"],"debounce":[2],"disabled":[4],"enterkeyhint":[1],"inputmode":[1],"max":[8],"maxlength":[2],"min":[8],"minlength":[2],"multiple":[4],"name":[1],"pattern":[1],"placeholder":[1],"readonly":[4],"required":[4],"spellcheck":[4],"step":[1],"size":[2],"type":[1],"value":[1032],"hasFocus":[32],"setFocus":[64],"setBlur":[64],"getInputElement":[64]}]]],["p-3760ec22",[[1,"bkkr-loading",{"overlayIndex":[2,"overlay-index"],"color":[1],"spinner":[1],"enterAnimation":[16],"leaveAnimation":[16],"cssClass":[1,"css-class"],"keyboardClose":[4,"keyboard-close"],"position":[1],"animated":[4],"htmlAttributes":[16],"present":[64],"dismiss":[64],"onDidDismiss":[64],"onWillDismiss":[64]}]]],["p-9fdd7c9b",[[1,"bkkr-menu",{"contentId":[513,"content-id"],"menuId":[513,"menu-id"],"type":[1025],"disabled":[4],"side":[513],"swipeGesture":[4,"swipe-gesture"],"maxEdgeStart":[2,"max-edge-start"],"fullscreen":[4],"isPaneVisible":[32],"isEndSide":[32],"isOpen":[64],"isActive":[64],"open":[64],"close":[64],"toggle":[64],"setOpen":[64]},[[16,"bkkrSplitPaneVisible","onSplitPaneChanged"],[2,"click","onBackdropClick"],[0,"keydown","onKeydown"]]]]],["p-32b027ae",[[1,"bkkr-popover",{"hasController":[4,"has-controller"],"delegate":[16],"overlayIndex":[2,"overlay-index"],"enterAnimation":[16],"leaveAnimation":[16],"component":[1],"componentProps":[16],"keyboardClose":[4,"keyboard-close"],"cssClass":[1,"css-class"],"backdropDismiss":[4,"backdrop-dismiss"],"event":[8],"showBackdrop":[4,"show-backdrop"],"animated":[4],"htmlAttributes":[16],"triggerAction":[1,"trigger-action"],"trigger":[1],"size":[1],"dismissOnSelect":[4,"dismiss-on-select"],"reference":[1],"side":[1],"alignment":[1],"arrow":[4],"isOpen":[4,"is-open"],"presented":[32],"presentFromTrigger":[64],"present":[64],"dismiss":[64],"getParentPopover":[64],"onDidDismiss":[64],"onWillDismiss":[64]}]]],["p-e328501f",[[1,"bkkr-reorder",null,[[2,"click","onClick"]]]]],["p-e206356a",[[2,"bkkr-searchbar",{"color":[1],"animated":[4],"autocomplete":[1],"autocorrect":[1],"cancelButtonText":[1,"cancel-button-text"],"debounce":[2],"disabled":[4],"inputmode":[1],"enterkeyhint":[1],"placeholder":[1],"searchIcon":[1,"search-icon"],"showCancelButton":[1,"show-cancel-button"],"spellcheck":[4],"type":[1],"value":[1025],"focused":[32],"noAnimate":[32],"setFocus":[64],"getInputElement":[64]}]]],["p-e1d8fd04",[[1,"bkkr-toast",{"overlayIndex":[2,"overlay-index"],"color":[1],"enterAnimation":[16],"leaveAnimation":[16],"cssClass":[1,"css-class"],"duration":[2],"header":[1],"keyboardClose":[4,"keyboard-close"],"message":[1],"position":[1],"buttons":[16],"swipeToClose":[4,"swipe-to-close"],"animated":[4],"htmlAttributes":[16],"present":[64],"dismiss":[64],"onDidDismiss":[64],"onWillDismiss":[64]}]]],["p-38a2d642",[[1,"bkkr-accordion-group",{"animated":[4],"multiple":[4],"value":[1025],"disabled":[4],"readonly":[4],"expand":[1],"requestAccordionToggle":[64],"getAccordions":[64]},[[0,"keydown","onKeydown"]]]]],["p-3f1ee25b",[[1,"bkkr-badge",{"color":[1]}]]],["p-e4e42e77",[[1,"bkkr-breadcrumbs",{"color":[1],"maxItems":[2,"max-items"],"itemsBeforeCollapse":[2,"items-before-collapse"],"itemsAfterCollapse":[2,"items-after-collapse"],"collapsed":[32],"activeChanged":[32]},[[0,"collapsedClick","onCollapsedClick"]]]]],["p-632ea5d2",[[1,"bkkr-card",{"color":[1],"button":[4],"type":[1],"disabled":[4],"download":[1],"fill":[513],"href":[1],"rel":[1],"routerDirection":[1,"router-direction"],"target":[1]}]]],["p-d4f3a545",[[1,"bkkr-card-content"]]],["p-bc384514",[[1,"bkkr-card-header"]]],["p-077ce10a",[[1,"bkkr-checkbox",{"color":[1],"name":[1],"checked":[1028],"indeterminate":[1028],"disabled":[4],"value":[1]}]]],["p-f55c0c5b",[[1,"bkkr-col",{"size":[1],"sizeXs":[1,"size-xs"],"sizeSm":[1,"size-sm"],"sizeMd":[1,"size-md"],"sizeLg":[1,"size-lg"],"sizeXl":[1,"size-xl"],"sizeXxl":[1,"size-xxl"],"order":[1],"orderXs":[1,"order-xs"],"orderSm":[1,"order-sm"],"orderMd":[1,"order-md"],"orderLg":[1,"order-lg"],"orderXl":[1,"order-xl"],"orderXxl":[1,"order-xxl"]},[[9,"resize","onResize"]]]]],["p-e5f2c698",[[1,"bkkr-container",{"color":[1],"fluid":[4]},[[9,"resize","onResize"]]]]],["p-a8971056",[[1,"bkkr-content",{"color":[1],"fullscreen":[4],"scrollX":[4,"scroll-x"],"scrollY":[4,"scroll-y"],"scrollEvents":[4,"scroll-events"],"getScrollElement":[64],"scrollToTop":[64],"scrollToBottom":[64],"scrollByPoint":[64],"scrollToPoint":[64]},[[8,"appload","onAppLoad"]]]]],["p-3f9a1d20",[[0,"bkkr-datetime-popover",{"disabled":[4],"name":[1],"pickerOptions":[16],"max":[1],"min":[1],"value":[1025],"locale":[16],"getPicker":[64]}]]],["p-536cd403",[[1,"bkkr-fab",{"horizontal":[1],"vertical":[1],"edge":[4]}]]],["p-fe21ca38",[[1,"bkkr-fab-button",{"color":[1],"disabled":[4],"download":[1],"href":[1],"rel":[1],"routerDirection":[1,"router-direction"],"target":[1],"type":[1],"size":[1]}]]],["p-27823b23",[[1,"bkkr-footer",{"collapse":[1],"color":[1],"position":[1]}]]],["p-62d30393",[[1,"bkkr-grid",{"size":[1],"sizeXs":[1,"size-xs"],"sizeSm":[1,"size-sm"],"sizeMd":[1,"size-md"],"sizeLg":[1,"size-lg"],"sizeXl":[1,"size-xl"],"sizeXxl":[1,"size-xxl"]},[[9,"resize","onResize"]]]]],["p-3ad765d6",[[1,"bkkr-header",{"collapse":[1],"color":[1]}]]],["p-f5d97353",[[1,"bkkr-img",{"animated":[4],"locked":[4],"drag":[4],"alt":[1],"src":[1],"loaded":[32],"loadSrc":[32],"loadError":[32]}]]],["p-051c466d",[[2,"bkkr-label",{"color":[1],"position":[1],"noAnimate":[32]}]]],["p-33282c62",[[1,"bkkr-list"]]],["p-65feb3d1",[[1,"bkkr-list-header"]]],["p-c926da22",[[1,"bkkr-menu-toggle",{"menu":[1],"autoHide":[4,"auto-hide"],"visible":[32]},[[16,"bkkrMenuChange","visibilityChanged"],[16,"bkkrSplitPaneVisible","visibilityChanged"]]]]],["p-eca605c7",[[1,"bkkr-nav",{"disabled":[4],"download":[1],"href":[1],"rel":[1],"layout":[1],"selected":[1028],"nav":[1],"target":[1]},[[8,"bkkrNavBarChanged","onNavBarChanged"]]]]],["p-9f34e5ee",[[1,"bkkr-navs",{"color":[1],"selectedNav":[1,"selected-nav"],"keyboardVisible":[32]}]]],["p-e96f97b0",[[1,"bkkr-radio",{"color":[1],"name":[1],"disabled":[4],"value":[8],"checked":[32],"buttonTabindex":[32],"setFocus":[64],"setButtonTabindex":[64]}]]],["p-9212dc1d",[[0,"bkkr-radio-group",{"allowEmptySelection":[4,"allow-empty-selection"],"name":[1],"value":[1032]},[[4,"keydown","onKeydown"]]]]],["p-06471074",[[1,"bkkr-range",{"color":[1],"debounce":[2],"name":[1],"dualKnobs":[4,"dual-knobs"],"min":[2],"max":[2],"pin":[4],"snaps":[4],"step":[2],"ticks":[4],"disabled":[4],"value":[1026],"ratioA":[32],"ratioB":[32],"pressedKnob":[32]}]]],["p-892e65d6",[[0,"bkkr-reorder-group",{"disabled":[4],"state":[32],"complete":[64]}]]],["p-0bac51ad",[[4,"bkkr-root",{"setFocus":[64]}]]],["p-d55649c9",[[0,"bkkr-route",{"url":[1],"component":[1],"componentProps":[16],"beforeLeave":[16],"beforeEnter":[16]}]]],["p-14550e57",[[0,"bkkr-route-redirect",{"from":[1],"to":[1]}]]],["p-54c5d9a6",[[0,"bkkr-router",{"root":[1],"useHash":[4,"use-hash"],"canTransition":[64],"push":[64],"back":[64],"printDebug":[64],"navChanged":[64]},[[8,"popstate","onPopState"],[4,"bkkrBackButton","onBackButton"]]]]],["p-68c872c0",[[1,"bkkr-router-link",{"color":[1],"href":[1],"rel":[1],"routerDirection":[1,"router-direction"],"routerAnimation":[16],"target":[1]}]]],["p-66931ae1",[[1,"bkkr-router-outlet",{"delegate":[16],"animated":[4],"nested":[4],"animation":[16],"swipeHandler":[16],"commit":[64],"setRouteId":[64],"getRouteId":[64]}]]],["p-0f5a024f",[[1,"bkkr-row"]]],["p-27e0b130",[[1,"bkkr-segment",{"color":[1],"disabled":[4],"scrollable":[4],"swipeGesture":[4,"swipe-gesture"],"value":[1032],"selectOnFocus":[4,"select-on-focus"],"activated":[32]},[[0,"keydown","onKeyDown"]]]]],["p-383a53a3",[[1,"bkkr-segment-button",{"disabled":[4],"type":[1],"value":[8],"checked":[32]}]]],["p-e1520cd2",[[1,"bkkr-shape",{"color":[1],"shape":[1],"size":[1],"sizeXs":[1,"size-xs"],"sizeSm":[1,"size-sm"],"sizeMd":[1,"size-md"],"sizeLg":[1,"size-lg"],"sizeXl":[1,"size-xl"],"sizeXxl":[1,"size-xxl"]},[[9,"resize","onResize"]]]]],["p-0cde9a64",[[1,"bkkr-skeleton",{"animated":[4]}]]],["p-ab5c32ba",[[0,"bkkr-slide"]]],["p-e2c7d5d5",[[4,"bkkr-slides",{"options":[16],"pager":[4],"scrollbar":[4],"update":[64],"updateAutoHeight":[64],"slideTo":[64],"slideNext":[64],"slidePrev":[64],"getActiveIndex":[64],"getPreviousIndex":[64],"length":[64],"isEnd":[64],"isBeginning":[64],"startAutoplay":[64],"stopAutoplay":[64],"lockSwipeToNext":[64],"lockSwipeToPrev":[64],"lockSwipes":[64],"getSwiper":[64]}]]],["p-e9b87298",[[1,"bkkr-split-pane",{"contentId":[513,"content-id"],"disabled":[4],"when":[8],"visible":[32]}]]],["p-1949b294",[[1,"bkkr-tab",{"active":[1028],"delegate":[16],"tab":[1],"component":[1],"setActive":[64]}]]],["p-9e30a68f",[[1,"bkkr-tabs",{"useRouter":[1028,"use-router"],"selectedTab":[32],"select":[64],"getTab":[64],"getSelected":[64],"setRouteId":[64],"getRouteId":[64]}]]],["p-a2963274",[[2,"bkkr-textarea",{"fireFocusEvents":[4,"fire-focus-events"],"color":[1],"autocapitalize":[1],"autofocus":[4],"clearOnEdit":[4,"clear-on-edit"],"debounce":[2],"disabled":[4],"inputmode":[1],"enterkeyhint":[1],"maxlength":[2],"minlength":[2],"name":[1],"placeholder":[1],"readonly":[4],"required":[4],"spellcheck":[4],"cols":[2],"rows":[2],"wrap":[1],"autoGrow":[4,"auto-grow"],"value":[1],"hasFocus":[32],"setFocus":[64],"setBlur":[64],"getInputElement":[64]}]]],["p-7dc0aa12",[[1,"bkkr-thumbnail",{"disabled":[4]}]]],["p-21d39b86",[[1,"bkkr-toggle",{"color":[1],"name":[1],"checked":[1028],"disabled":[4],"value":[1],"activated":[32]}]]],["p-5cac9a75",[[1,"bkkr-toolbar",{"color":[1]}]]],["p-549a4512",[[1,"bkkr-note",{"animated":[4],"color":[1]}]]],["p-9a0544bb",[[1,"bkkr-progress-bar",{"type":[1],"reversed":[4],"value":[2],"buffer":[2],"color":[1]}]]],["p-e413ff23",[[0,"bkkr-select-choices",{"header":[1],"subHeader":[1,"sub-header"],"multiple":[4],"name":[1],"value":[1032],"search":[4],"deselect":[4],"interfaceOptions":[16],"options":[16],"highlightItem":[64],"unhighlightItem":[64],"highlightAll":[64],"unhighlightAll":[64],"removeActiveItemsByValue":[64],"removeActiveItems":[64],"removeHighlightedItems":[64],"showDropdown":[64],"hideDropdown":[64],"getValue":[64],"setValue":[64],"setChoiceByValue":[64],"setChoices":[64],"clearChoices":[64],"clearStore":[64],"clearInput":[64],"enable":[64],"disable":[64],"ajax":[64],"update":[64],"getChoices":[64]},[[0,"bkkrChange","onSelect"]]]]],["p-88ca5ab5",[[1,"bkkr-spinner",{"color":[1],"duration":[2],"type":[1],"paused":[4]}]]],["p-4eb52938",[[1,"bkkr-select",{"cancelText":[1,"cancel-text"],"okText":[1,"ok-text"],"placeholder":[1],"multiple":[4],"value":[1032],"name":[1],"disabled":[516],"compareWith":[1,"compare-with"],"toggleIcon":[4,"toggle-icon"],"spinner":[1],"selectedText":[1,"selected-text"],"interface":[1],"search":[4],"deselect":[4],"interfaceOptions":[8,"interface-options"],"hasFocus":[32],"isExpanded":[32],"isLoading":[32],"showSpinner":[32],"open":[64]}],[1,"bkkr-select-option",{"disabled":[4],"value":[8]}]]],["p-50a82167",[[1,"bkkr-button",{"color":[1],"disabled":[516],"expand":[513],"fill":[513],"download":[1],"href":[1],"rel":[1],"routerDirection":[1,"router-direction"],"shape":[513],"size":[513],"target":[1],"type":[1]}]]],["p-b1095d7b",[[1,"bkkr-backdrop",{"visible":[4],"tappable":[4],"stopPropagation":[4,"stop-propagation"]},[[2,"click","onMouseDown"]]]]],["p-fb13f5fd",[[1,"bkkr-icon",{"color":[1],"name":[513],"src":[1],"icon":[8],"size":[513],"type":[1],"lazy":[4],"sanitize":[4],"svgContent":[32],"isVisible":[32],"ariaLabel":[32]}]]]]'),e))));