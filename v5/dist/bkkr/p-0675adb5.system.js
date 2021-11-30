/*!
 * (C) BKKR Framework https://bkkr-team.github.io/bkkr-docs/ - MIT License
 */
System.register(["./p-739d5869.system.js","./p-831ba2e3.system.js","./p-dc2d7920.system.js","./p-a2ff73d2.system.js","./p-b938bf14.system.js"],(function(e,s){"use strict";var t,o,r,i,a,n;return{setters:[function(e){t=e.d;o=e.N;r=e.w;i=e.p;a=e.b},function(e){n=e.g},function(){},function(){},function(){}],execute:function(){var e=function(e){return"__sc_import_"+e.replace(/\s|-/g,"_")};var l=function(){var e=Array.from(t.querySelectorAll("script")).find((function(e){return new RegExp("/"+o+"(\\.esm)?\\.js($|\\?|#)").test(e.src)||e.getAttribute("data-stencil-namespace")===o}));var a=s.meta.url;var n=e["data-opts"]||{};if(a!==""){n.resourcesUrl=new URL(".",a).href}else{n.resourcesUrl=new URL(".",new URL(e.getAttribute("data-resources-url")||e.src,r.location.href)).href;{c(n.resourcesUrl,e)}if(!r.customElements){return s.import("./p-22fb6b8a.system.js").then((function(){return n}))}}return i(n)};var c=function(s,i){var a=e(o);try{r[a]=new Function("w","return import(w);//"+Math.random())}catch(e){var n=new Map;r[a]=function(e){var o=new URL(e,s).href;var l=n.get(o);if(!l){var c=t.createElement("script");c.type="module";c.crossOrigin=i.crossOrigin;c.src=URL.createObjectURL(new Blob(["import * as m from '"+o+"'; window."+a+".m = m;"],{type:"application/javascript"}));l=new Promise((function(e){c.onload=function(){e(r[a].m);c.remove()}}));n.set(o,l);t.head.appendChild(c)}return l}}};l().then((function(e){n();return a(JSON.parse('[["p-56f80c44.system",[[4,"bkkr-paginator",{"animated":[4],"threshold":[1],"items":[2],"href":[1],"length":[2],"page":[1538],"infinite":[4],"toolbar":[4],"position":[1],"arrowIcon":[1,"arrow-icon"],"statusText":[1,"status-text"],"loadingType":[1,"loading-type"],"changeLength":[4,"change-length"],"spinner":[1],"loadingText":[1,"loading-text"],"disabled":[4],"routerDirection":[1,"router-direction"],"isLoading":[32],"reset":[32],"complete":[64]},[[9,"resize","onResize"]]]]],["p-0b9cd702.system",[[4,"bkkr-infinite-scroll",{"animated":[4],"threshold":[1],"items":[2],"length":[2],"page":[1538],"infinite":[4],"position":[1],"spinner":[1025],"loadingText":[1,"loading-text"],"buttonText":[1,"button-text"],"disabled":[4],"isLoading":[32],"reset":[32],"complete":[64]}]]],["p-c1e44d78.system",[[1,"bkkr-drawer",{"hasController":[4,"has-controller"],"overlayIndex":[2,"overlay-index"],"delegate":[16],"keyboardClose":[4,"keyboard-close"],"enterAnimation":[16],"leaveAnimation":[16],"component":[1],"componentProps":[16],"cssClass":[1,"css-class"],"duration":[2],"backdropDismiss":[4,"backdrop-dismiss"],"showBackdrop":[4,"show-backdrop"],"animated":[4],"handle":[4],"closeButton":[4,"close-button"],"closeIcon":[1,"close-icon"],"swipeToClose":[4,"swipe-to-close"],"presentingElement":[16],"htmlAttributes":[16],"isOpen":[4,"is-open"],"trigger":[1],"presented":[32],"present":[64],"dismiss":[64],"onDidDismiss":[64],"onWillDismiss":[64]}]]],["p-6b2a090f.system",[[17,"bkkr-item",{"color":[1],"button":[4],"detail":[4],"detailIcon":[1,"detail-icon"],"disabled":[4],"download":[1],"fill":[1],"shape":[1],"href":[1],"rel":[1],"lines":[1],"counter":[4],"routerDirection":[1,"router-direction"],"target":[1],"type":[1],"multipleInputs":[32],"focusable":[32],"counterString":[32]},[[0,"bkkrChange","handleIonChange"],[0,"bkkrColor","labelColorChanged"],[0,"bkkrStyle","itemStyle"]]]]],["p-30a43a0c.system",[[1,"bkkr-modal",{"hasController":[4,"has-controller"],"overlayIndex":[2,"overlay-index"],"delegate":[16],"keyboardClose":[4,"keyboard-close"],"enterAnimation":[16],"leaveAnimation":[16],"component":[1],"componentProps":[16],"cssClass":[1,"css-class"],"backdropDismiss":[4,"backdrop-dismiss"],"showBackdrop":[4,"show-backdrop"],"animated":[4],"handle":[4],"closeButton":[4,"close-button"],"closeIcon":[1,"close-icon"],"swipeToClose":[4,"swipe-to-close"],"presentingElement":[16],"htmlAttributes":[16],"isOpen":[4,"is-open"],"trigger":[1],"presented":[32],"present":[64],"dismiss":[64],"onDidDismiss":[64],"onWillDismiss":[64]}]]],["p-6c96bacc.system",[[17,"bkkr-accordion",{"value":[1],"disabled":[4],"readonly":[4],"toggleIcon":[1,"toggle-icon"],"toggleIconSlot":[1,"toggle-icon-slot"],"state":[32],"isNext":[32],"isPrevious":[32]}]]],["p-81e9ed95.system",[[2,"bkkr-alert",{"overlayIndex":[2,"overlay-index"],"keyboardClose":[4,"keyboard-close"],"enterAnimation":[16],"leaveAnimation":[16],"cssClass":[1,"css-class"],"header":[1],"subHeader":[1,"sub-header"],"message":[1],"buttons":[16],"inputs":[16],"backdropDismiss":[4,"backdrop-dismiss"],"animated":[4],"htmlAttributes":[16],"position":[1],"present":[64],"dismiss":[64],"onDidDismiss":[64],"onWillDismiss":[64]},[[4,"keydown","onKeydown"]]]]],["p-1e8ac719.system",[[1,"bkkr-breadcrumb",{"collapsed":[4],"last":[4],"showCollapsedIndicator":[4,"show-collapsed-indicator"],"color":[1],"active":[4],"disabled":[4],"download":[1],"href":[1],"rel":[1],"separator":[4],"target":[1],"routerDirection":[1,"router-direction"],"routerAnimation":[16]}]]],["p-3e6afa21.system",[[2,"bkkr-datetime",{"fireFocusEvents":[4,"fire-focus-events"],"color":[1],"autofocus":[4],"disabled":[4],"enterkeyhint":[1],"inputmode":[1],"min":[1025],"max":[1025],"name":[1],"placeholder":[1],"readonly":[4],"required":[4],"picker":[4],"interfaceOptions":[8,"interface-options"],"value":[1025],"displayFormat":[1,"display-format"],"monthNames":[1,"month-names"],"monthShortNames":[1,"month-short-names"],"dayNames":[1,"day-names"],"dayShortNames":[1,"day-short-names"],"hasFocus":[32],"isExpanded":[32],"setFocus":[64],"setBlur":[64],"getDatetimeElement":[64],"open":[64]}]]],["p-963d3a43.system",[[2,"bkkr-input",{"fireFocusEvents":[4,"fire-focus-events"],"color":[1],"accept":[1],"autocapitalize":[1],"autocomplete":[1],"autocorrect":[1],"autofocus":[4],"clearInput":[4,"clear-input"],"clearOnEdit":[4,"clear-on-edit"],"debounce":[2],"disabled":[4],"enterkeyhint":[1],"inputmode":[1],"max":[1],"maxlength":[2],"min":[1],"minlength":[2],"multiple":[4],"name":[1],"pattern":[1],"placeholder":[1],"readonly":[4],"required":[4],"spellcheck":[4],"step":[1],"size":[2],"type":[1],"value":[1032],"hasFocus":[32],"setFocus":[64],"setBlur":[64],"getInputElement":[64]}]]],["p-e4191c2e.system",[[1,"bkkr-loading",{"overlayIndex":[2,"overlay-index"],"color":[1],"spinner":[1],"enterAnimation":[16],"leaveAnimation":[16],"cssClass":[1,"css-class"],"keyboardClose":[4,"keyboard-close"],"position":[1],"animated":[4],"htmlAttributes":[16],"present":[64],"dismiss":[64],"onDidDismiss":[64],"onWillDismiss":[64]}]]],["p-e9fa2ffe.system",[[1,"bkkr-menu",{"contentId":[513,"content-id"],"menuId":[513,"menu-id"],"type":[1025],"disabled":[4],"side":[513],"swipeGesture":[4,"swipe-gesture"],"maxEdgeStart":[2,"max-edge-start"],"fullscreen":[4],"isPaneVisible":[32],"isEndSide":[32],"isOpen":[64],"isActive":[64],"open":[64],"close":[64],"toggle":[64],"setOpen":[64]},[[16,"bkkrSplitPaneVisible","onSplitPaneChanged"],[2,"click","onBackdropClick"],[0,"keydown","onKeydown"]]]]],["p-94f3bc49.system",[[1,"bkkr-popover",{"hasController":[4,"has-controller"],"delegate":[16],"overlayIndex":[2,"overlay-index"],"enterAnimation":[16],"leaveAnimation":[16],"component":[1],"componentProps":[16],"keyboardClose":[4,"keyboard-close"],"cssClass":[1,"css-class"],"backdropDismiss":[4,"backdrop-dismiss"],"event":[8],"showBackdrop":[4,"show-backdrop"],"animated":[4],"htmlAttributes":[16],"triggerAction":[1,"trigger-action"],"trigger":[1],"size":[1],"dismissOnSelect":[4,"dismiss-on-select"],"reference":[1],"side":[1],"alignment":[1],"arrow":[4],"isOpen":[4,"is-open"],"presented":[32],"presentFromTrigger":[64],"present":[64],"dismiss":[64],"getParentPopover":[64],"onDidDismiss":[64],"onWillDismiss":[64]}]]],["p-310ce55a.system",[[1,"bkkr-reorder",null,[[2,"click","onClick"]]]]],["p-54a27647.system",[[2,"bkkr-searchbar",{"color":[1],"animated":[4],"autocomplete":[1],"autocorrect":[1],"cancelButtonText":[1,"cancel-button-text"],"debounce":[2],"disabled":[4],"inputmode":[1],"enterkeyhint":[1],"placeholder":[1],"searchIcon":[1,"search-icon"],"showCancelButton":[1,"show-cancel-button"],"spellcheck":[4],"type":[1],"value":[1025],"focused":[32],"noAnimate":[32],"setFocus":[64],"getInputElement":[64]}]]],["p-de66502f.system",[[1,"bkkr-toast",{"overlayIndex":[2,"overlay-index"],"color":[1],"enterAnimation":[16],"leaveAnimation":[16],"cssClass":[1,"css-class"],"duration":[2],"header":[1],"keyboardClose":[4,"keyboard-close"],"message":[1],"position":[1],"buttons":[16],"swipeToClose":[4,"swipe-to-close"],"animated":[4],"htmlAttributes":[16],"present":[64],"dismiss":[64],"onDidDismiss":[64],"onWillDismiss":[64]}]]],["p-808b5035.system",[[1,"bkkr-accordion-group",{"animated":[4],"multiple":[4],"value":[1025],"disabled":[4],"readonly":[4],"expand":[1],"requestAccordionToggle":[64],"getAccordions":[64]},[[0,"keydown","onKeydown"]]]]],["p-b093e884.system",[[1,"bkkr-badge",{"color":[1]}]]],["p-00050317.system",[[1,"bkkr-breadcrumbs",{"color":[1],"maxItems":[2,"max-items"],"itemsBeforeCollapse":[2,"items-before-collapse"],"itemsAfterCollapse":[2,"items-after-collapse"],"collapsed":[32],"activeChanged":[32]},[[0,"collapsedClick","onCollapsedClick"]]]]],["p-dad92633.system",[[1,"bkkr-card",{"color":[1],"button":[4],"type":[1],"disabled":[4],"download":[1],"fill":[513],"href":[1],"rel":[1],"routerDirection":[1,"router-direction"],"target":[1]}]]],["p-8a4a7b16.system",[[1,"bkkr-card-content"]]],["p-67799a83.system",[[1,"bkkr-card-header"]]],["p-abf273c8.system",[[1,"bkkr-checkbox",{"color":[1],"name":[1],"checked":[1028],"indeterminate":[1028],"disabled":[4],"value":[1]}]]],["p-34ccce6c.system",[[1,"bkkr-col",{"size":[1],"sizeXs":[1,"size-xs"],"sizeSm":[1,"size-sm"],"sizeMd":[1,"size-md"],"sizeLg":[1,"size-lg"],"sizeXl":[1,"size-xl"],"sizeXxl":[1,"size-xxl"],"order":[1],"orderXs":[1,"order-xs"],"orderSm":[1,"order-sm"],"orderMd":[1,"order-md"],"orderLg":[1,"order-lg"],"orderXl":[1,"order-xl"],"orderXxl":[1,"order-xxl"]},[[9,"resize","onResize"]]]]],["p-1948281e.system",[[1,"bkkr-container",{"color":[1],"fluid":[4]},[[9,"resize","onResize"]]]]],["p-d0e3c788.system",[[1,"bkkr-content",{"color":[1],"fullscreen":[4],"scrollX":[4,"scroll-x"],"scrollY":[4,"scroll-y"],"scrollEvents":[4,"scroll-events"],"getScrollElement":[64],"scrollToTop":[64],"scrollToBottom":[64],"scrollByPoint":[64],"scrollToPoint":[64]},[[8,"appload","onAppLoad"],[2,"click","onClick"]]]]],["p-f8d0f6ff.system",[[0,"bkkr-datetime-popover",{"disabled":[4],"name":[1],"pickerOptions":[16],"max":[1],"min":[1],"value":[1025],"locale":[16],"getPicker":[64]}]]],["p-51d86620.system",[[1,"bkkr-fab",{"horizontal":[1],"vertical":[1],"edge":[4]}]]],["p-5414bcc2.system",[[1,"bkkr-fab-button",{"color":[1],"disabled":[4],"download":[1],"href":[1],"rel":[1],"routerDirection":[1,"router-direction"],"target":[1],"type":[1],"size":[1]}]]],["p-5c5c5cd1.system",[[1,"bkkr-footer",{"collapse":[1],"color":[1],"position":[1]}]]],["p-b541d07f.system",[[1,"bkkr-grid",{"size":[1],"sizeXs":[1,"size-xs"],"sizeSm":[1,"size-sm"],"sizeMd":[1,"size-md"],"sizeLg":[1,"size-lg"],"sizeXl":[1,"size-xl"],"sizeXxl":[1,"size-xxl"]},[[9,"resize","onResize"]]]]],["p-f6854d3b.system",[[1,"bkkr-header",{"collapse":[1],"color":[1]}]]],["p-9f480246.system",[[1,"bkkr-img",{"animated":[4],"locked":[4],"drag":[4],"alt":[1],"src":[1],"loaded":[32],"loadSrc":[32],"loadError":[32]}]]],["p-9339777d.system",[[2,"bkkr-label",{"color":[1],"position":[1],"noAnimate":[32]}]]],["p-71ac3a65.system",[[1,"bkkr-list"]]],["p-51efd6f4.system",[[1,"bkkr-list-header"]]],["p-aee55197.system",[[1,"bkkr-menu-toggle",{"menu":[1],"autoHide":[4,"auto-hide"],"visible":[32]},[[16,"bkkrMenuChange","visibilityChanged"],[16,"bkkrSplitPaneVisible","visibilityChanged"]]]]],["p-a449edb2.system",[[1,"bkkr-nav",{"disabled":[4],"download":[1],"href":[1],"rel":[1],"layout":[1],"selected":[1028],"nav":[1],"target":[1]},[[8,"bkkrNavBarChanged","onNavBarChanged"]]]]],["p-ad03b798.system",[[1,"bkkr-navs",{"color":[1],"selectedNav":[1,"selected-nav"],"keyboardVisible":[32]}]]],["p-0ce83db3.system",[[1,"bkkr-radio",{"color":[1],"name":[1],"disabled":[4],"value":[8],"checked":[32],"buttonTabindex":[32],"setFocus":[64],"setButtonTabindex":[64]}]]],["p-f202c6f2.system",[[0,"bkkr-radio-group",{"allowEmptySelection":[4,"allow-empty-selection"],"name":[1],"value":[1032]},[[4,"keydown","onKeydown"]]]]],["p-cbcd2672.system",[[1,"bkkr-range",{"color":[1],"debounce":[2],"name":[1],"dualKnobs":[4,"dual-knobs"],"min":[2],"max":[2],"pin":[4],"snaps":[4],"step":[2],"ticks":[4],"disabled":[4],"value":[1026],"ratioA":[32],"ratioB":[32],"pressedKnob":[32]}]]],["p-c83f4379.system",[[0,"bkkr-reorder-group",{"disabled":[4],"state":[32],"complete":[64]}]]],["p-971c60c7.system",[[4,"bkkr-root",{"setFocus":[64]}]]],["p-8090931a.system",[[0,"bkkr-route",{"url":[1],"component":[1],"componentProps":[16],"beforeLeave":[16],"beforeEnter":[16]}]]],["p-fdee14d2.system",[[0,"bkkr-route-redirect",{"from":[1],"to":[1]}]]],["p-4dd7bf63.system",[[0,"bkkr-router",{"root":[1],"useHash":[4,"use-hash"],"canTransition":[64],"push":[64],"back":[64],"printDebug":[64],"navChanged":[64]},[[8,"popstate","onPopState"],[4,"bkkrBackButton","onBackButton"]]]]],["p-6525e29a.system",[[1,"bkkr-router-link",{"color":[1],"href":[1],"rel":[1],"routerDirection":[1,"router-direction"],"routerAnimation":[16],"target":[1]}]]],["p-d8b02f84.system",[[1,"bkkr-router-outlet",{"delegate":[16],"animated":[4],"nested":[4],"animation":[16],"commit":[64],"setRouteId":[64],"getRouteId":[64]}]]],["p-49ee167b.system",[[1,"bkkr-row"]]],["p-b04f1067.system",[[1,"bkkr-segment",{"color":[1],"disabled":[4],"scrollable":[4],"swipeGesture":[4,"swipe-gesture"],"value":[1032],"selectOnFocus":[4,"select-on-focus"],"activated":[32]},[[0,"keydown","onKeyDown"]]]]],["p-8c745ddf.system",[[1,"bkkr-segment-button",{"disabled":[4],"type":[1],"value":[8],"checked":[32]}]]],["p-eed05fd9.system",[[1,"bkkr-shape",{"color":[1],"shape":[1],"size":[1],"sizeXs":[1,"size-xs"],"sizeSm":[1,"size-sm"],"sizeMd":[1,"size-md"],"sizeLg":[1,"size-lg"],"sizeXl":[1,"size-xl"],"sizeXxl":[1,"size-xxl"]},[[9,"resize","onResize"]]]]],["p-ba56ccd3.system",[[1,"bkkr-skeleton",{"animated":[4]}]]],["p-26611095.system",[[0,"bkkr-slide"]]],["p-1133fa3f.system",[[4,"bkkr-slides",{"options":[16],"pager":[4],"scrollbar":[4],"update":[64],"updateAutoHeight":[64],"slideTo":[64],"slideNext":[64],"slidePrev":[64],"getActiveIndex":[64],"getPreviousIndex":[64],"length":[64],"isEnd":[64],"isBeginning":[64],"startAutoplay":[64],"stopAutoplay":[64],"lockSwipeToNext":[64],"lockSwipeToPrev":[64],"lockSwipes":[64],"getSwiper":[64]}]]],["p-71e0394c.system",[[1,"bkkr-split-pane",{"contentId":[513,"content-id"],"disabled":[4],"when":[8],"visible":[32]}]]],["p-ae07675d.system",[[1,"bkkr-tab",{"active":[1028],"delegate":[16],"tab":[1],"component":[1],"setActive":[64]}]]],["p-f21889fa.system",[[1,"bkkr-tabs",{"useRouter":[1028,"use-router"],"selectedTab":[32],"select":[64],"getTab":[64],"getSelected":[64],"setRouteId":[64],"getRouteId":[64]}]]],["p-e3d30a47.system",[[2,"bkkr-textarea",{"fireFocusEvents":[4,"fire-focus-events"],"color":[1],"autocapitalize":[1],"autofocus":[4],"clearOnEdit":[4,"clear-on-edit"],"debounce":[2],"disabled":[4],"inputmode":[1],"enterkeyhint":[1],"maxlength":[2],"minlength":[2],"name":[1],"placeholder":[1],"readonly":[4],"required":[4],"spellcheck":[4],"cols":[2],"rows":[2],"wrap":[1],"autoGrow":[4,"auto-grow"],"value":[1],"hasFocus":[32],"setFocus":[64],"setBlur":[64],"getInputElement":[64]}]]],["p-c70350af.system",[[1,"bkkr-thumbnail",{"disabled":[4]}]]],["p-5a538979.system",[[1,"bkkr-toggle",{"color":[1],"name":[1],"checked":[1028],"disabled":[4],"value":[1],"activated":[32]}]]],["p-bf87479e.system",[[1,"bkkr-toolbar",{"color":[1]}]]],["p-bf70ce11.system",[[1,"bkkr-note",{"animated":[4],"color":[1]}]]],["p-08073db2.system",[[1,"bkkr-progress-bar",{"type":[1],"reversed":[4],"value":[2],"buffer":[2],"color":[1]}]]],["p-0a8b0216.system",[[1,"bkkr-icon",{"color":[1],"ariaLabel":[1025,"aria-label"],"ariaHidden":[513,"aria-hidden"],"name":[513],"src":[1],"icon":[8],"size":[513],"type":[1],"lazy":[4],"sanitize":[4],"svgContent":[32],"isVisible":[32]}]]],["p-f9490597.system",[[0,"bkkr-select-choices",{"header":[1],"subHeader":[1,"sub-header"],"multiple":[4],"name":[1],"value":[1032],"search":[4],"deselect":[4],"interfaceOptions":[16],"options":[16],"highlightItem":[64],"unhighlightItem":[64],"highlightAll":[64],"unhighlightAll":[64],"removeActiveItemsByValue":[64],"removeActiveItems":[64],"removeHighlightedItems":[64],"showDropdown":[64],"hideDropdown":[64],"getValue":[64],"setValue":[64],"setChoiceByValue":[64],"setChoices":[64],"clearChoices":[64],"clearStore":[64],"clearInput":[64],"enable":[64],"disable":[64],"ajax":[64],"update":[64],"getChoices":[64]},[[0,"bkkrChange","onSelect"]]]]],["p-21d2a0d8.system",[[1,"bkkr-select",{"cancelText":[1,"cancel-text"],"okText":[1,"ok-text"],"placeholder":[1],"multiple":[4],"value":[1032],"name":[1],"disabled":[516],"compareWith":[1,"compare-with"],"toggleIcon":[4,"toggle-icon"],"selectedText":[1,"selected-text"],"interface":[1],"search":[4],"deselect":[4],"interfaceOptions":[8,"interface-options"],"hasFocus":[32],"isExpanded":[32],"open":[64]}],[1,"bkkr-select-option",{"disabled":[4],"value":[8]}]]],["p-c77b51f9.system",[[1,"bkkr-button",{"color":[1],"disabled":[516],"expand":[513],"fill":[513],"download":[1],"href":[1],"rel":[1],"routerDirection":[1,"router-direction"],"shape":[513],"size":[513],"target":[1],"type":[1]}],[1,"bkkr-spinner",{"color":[1],"duration":[2],"type":[1],"paused":[4]}]]],["p-9ac620b0.system",[[1,"bkkr-backdrop",{"visible":[4],"tappable":[4],"stopPropagation":[4,"stop-propagation"]},[[2,"click","onMouseDown"]]]]]]'),e)}))}}}));