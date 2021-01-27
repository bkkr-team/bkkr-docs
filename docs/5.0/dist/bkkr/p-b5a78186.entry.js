import{r as t,f as i,h as e,H as r,g as a}from"./p-ff07675f.js";import{s as o,h as n}from"./p-09b2e663.js";import{b as s}from"./p-812c3cb0.js";const l=class{constructor(i){t(this,i),this.labelColorStyles={},this.itemStyles=new Map,this.multipleInputs=!1,this.button=!1,this.detailIcon="chevron-right",this.disabled=!1,this.type="button"}labelColorChanged(t){const{color:i}=this;void 0===i&&(this.labelColorStyles=t.detail)}itemStyle(t){t.stopPropagation();const e=t.target.tagName,r=t.detail,a={},o=this.itemStyles.get(e)||{};let n=!1;Object.keys(r).forEach((t=>{if(r[t]){const i="item-"+t;o[i]||(n=!0),a[i]=!0}})),n||Object.keys(a).length===Object.keys(o).length||(n=!0),n&&(this.itemStyles.set(e,a),i(this))}componentDidUpdate(){const t=this.getFirstInput();t&&!this.clickListener&&(this.clickListener=i=>this.delegateFocus(i,t),this.el.addEventListener("click",this.clickListener))}disconnectedCallback(){this.getFirstInput()&&this.clickListener&&(this.el.removeEventListener("click",this.clickListener),this.clickListener=void 0)}componentDidLoad(){this.setMultipleInputs()}setMultipleInputs(){const t=this.el.querySelectorAll("bkkr-checkbox, bkkr-datetime, bkkr-select, bkkr-radio"),i=this.el.querySelectorAll("bkkr-input, bkkr-range, bkkr-segment, bkkr-textarea, bkkr-toggle"),e=this.el.querySelectorAll("bkkr-anchor, bkkr-button, a, button");this.multipleInputs=t.length+i.length>1||t.length+e.length>1||t.length>0&&this.isClickable()}hasCover(){return 1===this.el.querySelectorAll("bkkr-checkbox, bkkr-datetime, bkkr-select, bkkr-radio").length&&!this.multipleInputs}isClickable(){return void 0!==this.href||this.button}canActivate(){return this.isClickable()||this.hasCover()}getFirstInput(){return this.el.querySelectorAll("bkkr-input, bkkr-textarea")[0]}delegateFocus(t,i){const e="BKKR-ITEM"===t.target.tagName;let r=!1;document.activeElement&&(r=i.querySelector("input, textarea")===document.activeElement),e&&r&&(i.fireFocusEvents=!1,i.setBlur(),i.setFocus(),s((()=>{i.fireFocusEvents=!0})))}render(){const{detail:t,detailIcon:i,download:a,labelColorStyles:s,lines:l,disabled:d,href:h,rel:g,target:c}=this,b={},m=this.isClickable(),k=this.canActivate(),p=m?void 0===h?"button":"a":"div",v="button"===p?{type:this.type}:{download:a,href:h,rel:g,target:c},f=void 0!==t&&t;return this.itemStyles.forEach((t=>{Object.assign(b,t)})),e(r,{"aria-disabled":d?"true":null,class:Object.assign(Object.assign(Object.assign({},b),s),o(this.color,{item:!0,["item-lines-"+l]:void 0!==l,"item-disabled":d,"in-list":n("bkkr-list",this.el),"item-multiple-inputs":this.multipleInputs,"bkkr-activatable":k,"bkkr-focusable":!0}))},e(p,Object.assign({},v,{class:"item-native",part:"native",disabled:d}),e("slot",{name:"start"}),e("div",{class:"item-inner"},e("div",{class:"item-content"},e("slot",null)),e("slot",{name:"end"}),f&&e("bkkr-icon",{icon:i,lazy:!1,class:"item-detail-icon",part:"detail-icon"}),e("div",{class:"item-inner-highlight"}))),e("div",{class:"item-highlight"}))}static get delegatesFocus(){return!0}get el(){return a(this)}};l.style='.item,:host{--border-radius:0;--border-width:0;--border-style:solid;--padding-top:0;--padding-bottom:0;--padding-end:0;--padding-start:0;--inner-border-width:0;--inner-padding-top:0;--inner-padding-bottom:0;--inner-padding-start:0;--inner-padding-end:0;--inner-box-shadow:none;--show-full-highlight:0;--show-inset-highlight:0;--detail-icon-color:initial;--detail-icon-font-size:20px;--detail-icon-opacity:.25;--color-activated:var(--color);--color-focused:var(--color);--color-hover:var(--color);--min-height:44px;--transition:background-color 200ms linear, opacity 200ms linear;--padding-start:var(--bkkr-spacer, 16px);--inner-padding-end:var(--bkkr-spacer, 16px)/2;--inner-border-width:0 0 0.55px 0;--background:transparent;--background-activated:#000;--background-focused:#000;--background-hover:currentColor;--background-activated-opacity:.12;--background-focused-opacity:.15;--background-hover-opacity:.04;--border-color:rgba(var(--bkkr-text-color-rgb, 0, 0, 0), 0.4);--color:var(--bkkr-text-color, #000);--highlight-height:1px;--highlight-color-focused:var(--color-base, var(--color-primary, #3880ff));--highlight-color-valid:var(--color-base, var(--color-success, #2dd36f));--highlight-color-invalid:var(--color-base, var(--color-danger, #eb445a));-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:block;position:relative;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;outline:none;color:var(--color);font-family:var(--default-font-sans-serif);font-size:17px;text-align:initial;text-decoration:none;-webkit-box-sizing:border-box;box-sizing:border-box}:host(.item-color) .item-native{background:var(--color-base);color:var(--color-contrast)}:host(.item-color) .item-native,:host(.item-color) .item-inner{border-color:var(--color-shade)}:host(.bkkr-activated){--transition:none}:host(.bkkr-activated) .item-native{color:var(--color-activated)}:host(.bkkr-activated) .item-native::after{background:var(--background-activated);opacity:var(--background-activated-opacity)}:host(.item-color.bkkr-activated) .item-native{color:var(--color-contrast)}:host(.item-color.bkkr-activated) .item-native::after{background:#000;opacity:0.12}:host(.bkkr-focused) .item-native{color:var(--color-focused)}:host(.bkkr-focused) .item-native::after{background:var(--background-focused);opacity:var(--background-focused-opacity)}:host(.item-color.bkkr-focused) .item-native{color:var(--color-contrast)}:host(.item-color.bkkr-focused) .item-native::after{background:var(--color-contrast);}@media (any-hover: hover){:host(.bkkr-activatable:hover) .item-native{color:var(--color-hover)}:host(.bkkr-activatable:hover) .item-native::after{background:var(--background-hover);opacity:var(--background-hover-opacity)}:host(.item-color.bkkr-activatable:hover) .item-native{color:var(--color-contrast)}:host(.item-color.bkkr-activatable:hover) .item-native::after{background:var(--color-contrast)}}:host(.item-interactive-disabled:not(.item-multiple-inputs)){pointer-events:none;cursor:default}:host(.item-disabled){pointer-events:none;cursor:default;opacity:0.3}.item-native{border-radius:var(--border-radius);margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:calc(var(--padding-start) + var(--safe-area-left, 0));padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);color:inherit;font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-align:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;white-space:inherit;display:-ms-flexbox;display:flex;position:relative;-ms-flex-align:inherit;align-items:inherit;-ms-flex-pack:inherit;justify-content:inherit;width:100%;min-height:var(--min-height);-webkit-transition:var(--transition);transition:var(--transition);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);outline:none;background:var(--background);overflow:inherit;z-index:1;-webkit-box-sizing:border-box;box-sizing:border-box}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.item-native{padding-left:unset;padding-right:unset;-webkit-padding-start:calc(var(--padding-start) + var(--safe-area-left, 0));padding-inline-start:calc(var(--padding-start) + var(--safe-area-left, 0));-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.item-native::-moz-focus-inner{border:0}.item-native::after{top:0;right:0;bottom:0;left:0;position:absolute;content:"";opacity:0;-webkit-transition:var(--transition);transition:var(--transition);z-index:-1}button,a{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-user-drag:none}:host(.item-interactive){--show-full-highlight:0;--show-inset-highlight:1}:host(.item-lines-full){--border-width:0 0 0.55px 0;--show-full-highlight:1;--show-inset-highlight:0}:host(.item-lines-inset){--inner-border-width:0 0 0.55px 0;--show-full-highlight:0;--show-inset-highlight:1}:host(.item-lines-inset),:host(.item-lines-none){--border-width:0;--show-full-highlight:0}:host(.item-lines-full),:host(.item-lines-none){--inner-border-width:0;--show-inset-highlight:0}.item-inner{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:var(--inner-padding-start);padding-right:calc(var(--safe-area-right, 0) + var(--inner-padding-end));padding-top:var(--inner-padding-top);padding-bottom:var(--inner-padding-bottom);display:-ms-flexbox;display:flex;position:relative;-ms-flex:1;flex:1;-ms-flex-direction:inherit;flex-direction:inherit;-ms-flex-align:inherit;align-items:inherit;-ms-flex-item-align:stretch;align-self:stretch;min-height:inherit;border-width:var(--inner-border-width);border-style:var(--border-style);border-color:var(--border-color);-webkit-box-shadow:var(--inner-box-shadow);box-shadow:var(--inner-box-shadow);overflow:inherit;-webkit-box-sizing:border-box;box-sizing:border-box}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.item-inner{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--inner-padding-start);padding-inline-start:var(--inner-padding-start);-webkit-padding-end:calc(var(--safe-area-right, 0) + var(--inner-padding-end));padding-inline-end:calc(var(--safe-area-right, 0) + var(--inner-padding-end))}}.item-detail-icon{color:var(--detail-icon-color);font-size:var(--detail-icon-font-size);opacity:var(--detail-icon-opacity)}::slotted(bkkr-icon){font-size:1.6em}::slotted(bkkr-button){--margin-top:0;--margin-bottom:0;--margin-start:0;--margin-end:0;z-index:1}::slotted(bkkr-label){-ms-flex:1;flex:1}::slotted([slot=start]){margin-left:0;margin-right:var(--bkkr-spacer, 16px);margin-top:2px;margin-bottom:2px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){::slotted([slot=start]){margin-left:unset;margin-right:unset;-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:var(--bkkr-spacer, 16px);margin-inline-end:var(--bkkr-spacer, 16px)}}::slotted([slot=end]){margin-left:var(--bkkr-spacer, 16px)/2;margin-right:var(--bkkr-spacer, 16px)/2}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){::slotted([slot=end]){margin-left:unset;margin-right:unset;-webkit-margin-start:var(--bkkr-spacer, 16px)/2;margin-inline-start:var(--bkkr-spacer, 16px)/2;-webkit-margin-end:var(--bkkr-spacer, 16px)/2;margin-inline-end:var(--bkkr-spacer, 16px)/2}}::slotted(bkkr-icon[slot=start]),::slotted(bkkr-icon[slot=end]){margin-top:7px;margin-bottom:7px}::slotted(bkkr-toggle[slot=start]),::slotted(bkkr-toggle[slot=end]){margin-left:0;margin-right:0;margin-top:0;margin-bottom:0}:host(.item-input){-ms-flex-align:center;align-items:center}.item-content{display:-ms-flexbox;display:flex;-ms-flex:1;flex:1;-ms-flex-direction:inherit;flex-direction:inherit;-ms-flex-align:inherit;align-items:inherit;-ms-flex-item-align:stretch;align-self:stretch;text-overflow:ellipsis;overflow:inherit;-webkit-box-sizing:border-box;box-sizing:border-box}.item-highlight,.item-inner-highlight{right:0;bottom:0;left:0;position:absolute;background:var(--highlight-background);z-index:1}.item-highlight{height:var(--full-highlight-height)}.item-inner-highlight{height:var(--inset-highlight-height)}:host(.item-interactive.item-has-focus),:host(.item-interactive.bkkr-touched.bkkr-invalid){--full-highlight-height:calc(var(--highlight-height) * var(--show-full-highlight));--inset-highlight-height:calc(var(--highlight-height) * var(--show-inset-highlight))}:host(.item-interactive.item-has-focus){--highlight-background:var(--highlight-color-focused)}:host(.item-interactive.bkkr-valid){--highlight-background:var(--highlight-color-valid)}:host(.item-interactive.bkkr-invalid){--highlight-background:var(--highlight-color-invalid)}:host(:not(.item-label)) ::slotted(bkkr-select){--padding-start:0;max-width:none}:host(.item-label-floating) ::slotted(bkkr-select){--padding-top:8px;--padding-bottom:8px;--padding-start:0;-ms-flex-item-align:stretch;align-self:stretch;width:100%;max-width:100%}:host(:not(.item-label)) ::slotted(bkkr-datetime){--padding-start:0}:host(.item-label-floating) ::slotted(bkkr-datetime){--padding-start:0;width:100%}:host(.item-multiple-inputs) ::slotted(bkkr-checkbox),:host(.item-multiple-inputs) ::slotted(bkkr-datetime),:host(.item-multiple-inputs) ::slotted(bkkr-radio),:host(.item-multiple-inputs) ::slotted(bkkr-select){position:relative}:host(.item-textarea){-ms-flex-align:stretch;align-items:stretch}:host(.item-label-floating){-ms-flex-align:start;align-items:start}:host(.item-label-floating) ::slotted(bkkr-input),:host(.item-label-floating) ::slotted(bkkr-textarea),:host(.item-label-floating) ::slotted(bkkr-select){--placeholder-opacity:0;--placeholder-transition:color .1s ease-in-out}:host(.item-label-floating) .item-content{-ms-flex:1;flex:1;-ms-flex-direction:column;flex-direction:column}:host(.item-label-floating) ::slotted([slot=end]){margin-top:7px;margin-bottom:7px}:host(.item-label-floating.item-has-focus) ::slotted(bkkr-input),:host(.item-label-floating.item-has-focus) ::slotted(bkkr-textarea),:host(.item-label-floating.item-has-focus) ::slotted(bkkr-select){--placeholder-opacity:0.5;--placeholder-transition-delay:.05s}::slotted(.button-small){--padding-top:0;--padding-bottom:0;--padding-start:.5em;--padding-end:.5em;height:24px;font-size:13px}::slotted(bkkr-shape){width:36px;height:36px}::slotted(bkkr-thumbnail){width:56px;height:56px}::slotted(bkkr-bkkr-shape[slot=end]),::slotted(bkkr-thumbnail[slot=end]){margin-left:var(--bkkr-spacer, 16px)/2;margin-right:var(--bkkr-spacer, 16px)/2;margin-top:var(--bkkr-spacer, 16px)/2;margin-bottom:var(--bkkr-spacer, 16px)/2}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){::slotted(bkkr-bkkr-shape[slot=end]),::slotted(bkkr-thumbnail[slot=end]){margin-left:unset;margin-right:unset;-webkit-margin-start:var(--bkkr-spacer, 16px)/2;margin-inline-start:var(--bkkr-spacer, 16px)/2;-webkit-margin-end:var(--bkkr-spacer, 16px)/2;margin-inline-end:var(--bkkr-spacer, 16px)/2}}:host(.item-radio) ::slotted(bkkr-label),:host(.item-toggle) ::slotted(bkkr-label){margin-left:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host(.item-radio) ::slotted(bkkr-label),:host(.item-toggle) ::slotted(bkkr-label){margin-left:unset;-webkit-margin-start:0;margin-inline-start:0}}::slotted(bkkr-label){margin-left:0;margin-right:8px;margin-top:10px;margin-bottom:10px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){::slotted(bkkr-label){margin-left:unset;margin-right:unset;-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:8px;margin-inline-end:8px}}:host(.item-label-fixed) ::slotted(bkkr-select),:host(.item-label-fixed) ::slotted(bkkr-datetime){--padding-start:0}';export{l as bkkr_item}