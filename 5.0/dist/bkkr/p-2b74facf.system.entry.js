System.register(["./p-e726f40f.system.js","./p-7e283b4e.system.js","./p-5e4b8ffe.system.js"],(function(t){"use strict";var e,i,r,a,o,n,s,l,d;return{setters:[function(t){e=t.r;i=t.f;r=t.h;a=t.H;o=t.g},function(t){n=t.r;s=t.o},function(t){l=t.s;d=t.h}],execute:function(){var c=':host{--padding-top:0;--padding-bottom:0;--padding-end:0;--padding-start:0;--inner-border-width:0;--inner-padding-top:0;--inner-padding-bottom:0;--inner-padding-start:0;--inner-padding-end:0;--inner-box-shadow:none;--show-full-highlight:0;--show-inset-highlight:0;--detail-icon-color:initial;--detail-icon-font-size:20px;--detail-icon-opacity:0.25;--color:var(--bkkr-text-color, #000);--color-activated:var(--color);--color-focused:var(--color);--color-hover:var(--color);--min-height:44px;--transition:0.2s border cubic-bezier(0.32, 0.72, 0, 1), 0.2s background cubic-bezier(0.32, 0.72, 0, 1);--inner-padding-end:var(--bkkr-spacer, 16px)/2;--inner-border-width:0 0 0.55px 0;--background:transparent;--background-activated:currentColor;--background-focused:currentColor;--background-hover:currentColor;--background-activated-opacity:0.12;--background-focused-opacity:0.04;--background-hover-opacity:0.04;--border-radius:0;--border-width:0;--border-style:solid;--border-color:var(--bkkr-border, rgba(var(--bkkr-text-color-rgb, 0, 0, 0), 0.1));--border-color-hover:var(--bkkr-border, rgba(var(--bkkr-text-color-rgb, 0, 0, 0), 0.3));--border-color-focus:var(--bkkr-border, rgba(var(--bkkr-text-color-rgb, 0, 0, 0), 0.3));--highlight-width:0;--highlight-height:2px;--highlight-color-focused:var(--color-base, var(--color-primary, #3880ff));--highlight-color-valid:var(--color-base, var(--color-success, #2dd36f));--highlight-color-invalid:var(--color-base, var(--color-danger, #eb445a));-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:block;position:relative;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;outline:none;color:var(--color);font-family:var(--bkkr-font-family);font-size:17px;text-align:initial;text-decoration:none;-webkit-box-sizing:border-box;box-sizing:border-box}:host(.state-activatable){cursor:pointer}:host(.item-color) .item-native{background:var(--color-base);color:var(--color-contrast)}:host(.item-color) .item-native,:host(.item-color) .item-inner{border-color:var(--color-shade)}:host(.state-focused) .item-native{color:var(--color-focused)}:host(.state-focused) .item-native::after{background:var(--background-focused);opacity:var(--background-focused-opacity)}:host(.item-color.state-focused) .item-native{color:var(--color-contrast)}:host(.item-color.state-focused) .item-native::after{background:var(--color-contrast);opacity:var(--background-focused-opacity)}@media (any-hover: hover){:host(.state-activatable:hover) .item-native{color:var(--color-hover)}:host(.state-activatable:hover) .item-native::after{background:var(--background-hover);opacity:var(--background-hover-opacity)}:host(.item-color.state-activatable:hover) .item-native{color:var(--color-contrast)}:host(.item-color.state-activatable:hover) .item-native::after{background:var(--color-contrast);opacity:var(--background-hover-opacity)}}:host(.state-activatable.state-activated) .item-native{color:var(--color-activated)}:host(.state-activatable.state-activated) .item-native::after{background:var(--background-activated);opacity:var(--background-activated-opacity)}:host(.state-activatable.item-color.state-activated) .item-native{color:var(--color-contrast)}:host(.state-activatable.item-color.state-activated) .item-native::after{background:#000;opacity:var(--background-activated-opacity)}:host(.item-interactive-disabled:not(.item-multiple-inputs)){pointer-events:none;cursor:default}:host(.state-disabled){pointer-events:none;cursor:default;opacity:0.3}.item-native{border-radius:var(--border-radius);margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:calc(var(--padding-start) + var(--safe-area-left, 0));padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);color:inherit;font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-align:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;white-space:inherit;display:-ms-flexbox;display:flex;position:relative;-ms-flex-align:inherit;align-items:inherit;-ms-flex-pack:inherit;justify-content:inherit;width:100%;max-width:100%;min-height:var(--min-height);-webkit-transition:var(--transition);transition:var(--transition);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);outline:none;background:var(--background);overflow:inherit;z-index:1;-webkit-box-sizing:border-box;box-sizing:border-box}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.item-native{padding-left:unset;padding-right:unset;-webkit-padding-start:calc(var(--padding-start) + var(--safe-area-left, 0));padding-inline-start:calc(var(--padding-start) + var(--safe-area-left, 0));-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.item-native::-moz-focus-inner{border:0}.item-native::after{top:0;right:0;bottom:0;left:0;position:absolute;content:"";opacity:0;-webkit-transition:0.2s opacity cubic-bezier(0.32, 0.72, 0, 1);transition:0.2s opacity cubic-bezier(0.32, 0.72, 0, 1);z-index:-1}button,a{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-user-drag:none}:host(.item-interactive){--show-full-highlight:0;--show-inset-highlight:1}:host(.item-lines-full){--border-width:0 0 0.55px 0;--show-full-highlight:1;--show-inset-highlight:0}:host(.item-lines-inset){--inner-border-width:0 0 0.55px 0;--show-full-highlight:0;--show-inset-highlight:1}:host(.item-lines-inset),:host(.item-lines-none){--border-width:0;--show-full-highlight:0}:host(.item-lines-full),:host(.item-lines-none){--inner-border-width:0;--show-inset-highlight:0}.item-inner{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:var(--inner-padding-start);padding-right:calc(var(--safe-area-right, 0) + var(--inner-padding-end));padding-top:var(--inner-padding-top);padding-bottom:var(--inner-padding-bottom);display:-ms-flexbox;display:flex;position:relative;-ms-flex:1;flex:1;-ms-flex-direction:inherit;flex-direction:inherit;-ms-flex-align:inherit;align-items:inherit;-ms-flex-item-align:stretch;align-self:stretch;max-width:inherit;min-height:inherit;-webkit-transition:var(--transition);transition:var(--transition);border-width:var(--inner-border-width);border-style:var(--border-style);border-color:var(--border-color);-webkit-box-shadow:var(--inner-box-shadow);box-shadow:var(--inner-box-shadow);overflow:inherit;-webkit-box-sizing:border-box;box-sizing:border-box}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.item-inner{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--inner-padding-start);padding-inline-start:var(--inner-padding-start);-webkit-padding-end:calc(var(--safe-area-right, 0) + var(--inner-padding-end));padding-inline-end:calc(var(--safe-area-right, 0) + var(--inner-padding-end))}}.item-detail-icon{color:var(--detail-icon-color);font-size:var(--detail-icon-font-size);opacity:var(--detail-icon-opacity)}::slotted(bkkr-button){--margin-top:0;--margin-bottom:0;--margin-start:0;--margin-end:0;--height:2.3em;z-index:1}::slotted(bkkr-label){-ms-flex:1;flex:1}::slotted([slot=start]){margin-left:0;margin-right:var(--bkkr-spacer, 16px);margin-top:2px;margin-bottom:2px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){::slotted([slot=start]){margin-left:unset;margin-right:unset;-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:var(--bkkr-spacer, 16px);margin-inline-end:var(--bkkr-spacer, 16px)}}::slotted([slot=end]){margin-left:var(--bkkr-spacer, 16px)/2;margin-right:var(--bkkr-spacer, 16px)/2}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){::slotted([slot=end]){margin-left:unset;margin-right:unset;-webkit-margin-start:var(--bkkr-spacer, 16px)/2;margin-inline-start:var(--bkkr-spacer, 16px)/2;-webkit-margin-end:var(--bkkr-spacer, 16px)/2;margin-inline-end:var(--bkkr-spacer, 16px)/2}}::slotted([slot=note]){--padding-top:3px;--padding-bottom:5px;padding-left:calc(var(--padding-start) + var(--safe-area-left, 0));padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);pointer-events:initial}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){::slotted([slot=note]){padding-left:unset;padding-right:unset;-webkit-padding-start:calc(var(--padding-start) + var(--safe-area-left, 0));padding-inline-start:calc(var(--padding-start) + var(--safe-area-left, 0));-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}::slotted([slot=note]:empty){display:none}::slotted(bkkr-icon){font-size:1.2em}::slotted(bkkr-icon[slot=start]),::slotted(bkkr-icon[slot=end]){margin-top:7px;margin-bottom:7px}::slotted(bkkr-toggle[slot=start]),::slotted(bkkr-toggle[slot=end]){margin-left:0;margin-right:0;margin-top:0;margin-bottom:0}:host(.item-input){-ms-flex-align:center;align-items:center}.item-content{display:-ms-flexbox;display:flex;-ms-flex:1;flex:1;-ms-flex-direction:inherit;flex-direction:inherit;-ms-flex-align:inherit;align-items:inherit;-ms-flex-item-align:stretch;align-self:stretch;max-width:inherit;text-overflow:ellipsis;overflow:inherit;-webkit-box-sizing:border-box;box-sizing:border-box}.item-highlight,.item-inner-highlight{right:0;bottom:-1px;left:0;position:absolute;width:var(--highlight-width);-webkit-transition:width 0.5s cubic-bezier(0.32, 0.72, 0, 1);transition:width 0.5s cubic-bezier(0.32, 0.72, 0, 1);background:var(--highlight-background);z-index:1}.item-highlight{height:calc(var(--highlight-height) * var(--show-full-highlight))}.item-inner-highlight{height:calc(var(--highlight-height) * var(--show-inset-highlight))}@media (any-hover: hover){:host(.item-input:hover){--border-color:var(--border-color-hover)}}:host(.item-interactive.item-has-focus),:host(.item-interactive.state-touched.state-invalid){--border-color:var(--border-color-focus);--highlight-width:100%}:host(.item-interactive.item-has-focus){--highlight-background:var(--highlight-color-focused)}:host(.item-interactive.state-invalid){--highlight-background:var(--highlight-color-invalid)}:host(:not(.item-label)) ::slotted(bkkr-select){--padding-start:0;width:100%;max-width:none}:host(.item-label-floating) ::slotted(bkkr-select){--padding-top:8px;--padding-bottom:8px;--padding-start:0;-ms-flex-item-align:stretch;align-self:stretch;width:100%;max-width:100%}:host(:not(.item-label)) ::slotted(bkkr-datetime){--padding-start:0}:host(.item-label-floating) ::slotted(bkkr-datetime){--padding-start:0;width:100%}:host(.item-multiple-inputs) ::slotted(bkkr-checkbox),:host(.item-multiple-inputs) ::slotted(bkkr-radio),:host(.item-multiple-inputs) ::slotted(bkkr-select){position:relative}:host(.item-textarea){-ms-flex-align:stretch;align-items:stretch}:host(.item-label-floating){-ms-flex-align:start;align-items:start}:host(.item-label-floating) ::slotted(bkkr-input),:host(.item-label-floating) ::slotted(bkkr-textarea),:host(.item-label-floating) ::slotted(bkkr-select){--placeholder-opacity:0}:host(.item-label-floating) .item-content{-ms-flex:1;flex:1;-ms-flex-direction:column;flex-direction:column}:host(.item-label-floating) ::slotted([slot=end]){margin-top:7px;margin-bottom:7px}:host(.item-label-floating.item-has-focus) ::slotted(bkkr-input),:host(.item-label-floating.item-has-focus) ::slotted(bkkr-textarea),:host(.item-label-floating.item-has-focus) ::slotted(bkkr-select){--placeholder-opacity:0.5;--placeholder-transition-delay:0.05s}:host(.item-radio) ::slotted(bkkr-label),:host(.item-toggle) ::slotted(bkkr-label){margin-left:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host(.item-radio) ::slotted(bkkr-label),:host(.item-toggle) ::slotted(bkkr-label){margin-left:unset;-webkit-margin-start:0;margin-inline-start:0}}::slotted(bkkr-label){margin-left:0;margin-right:8px;margin-top:10px;margin-bottom:10px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){::slotted(bkkr-label){margin-left:unset;margin-right:unset;-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:8px;margin-inline-end:8px}}:host(.item-label-fixed) ::slotted(bkkr-select),:host(.item-label-fixed) ::slotted(bkkr-datetime){--padding-start:0}::slotted(.button-small){--padding-top:0;--padding-bottom:0;--padding-start:0.5em;--padding-end:0.5em;height:24px;font-size:13px}::slotted(bkkr-shape){--size:36px}::slotted(bkkr-thumbnail){width:56px;height:56px}::slotted(bkkr-bkkr-shape[slot=end]),::slotted(bkkr-thumbnail[slot=end]){margin-left:var(--bkkr-spacer, 16px)/2;margin-right:var(--bkkr-spacer, 16px)/2;margin-top:var(--bkkr-spacer, 16px)/2;margin-bottom:var(--bkkr-spacer, 16px)/2}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){::slotted(bkkr-bkkr-shape[slot=end]),::slotted(bkkr-thumbnail[slot=end]){margin-left:unset;margin-right:unset;-webkit-margin-start:var(--bkkr-spacer, 16px)/2;margin-inline-start:var(--bkkr-spacer, 16px)/2;-webkit-margin-end:var(--bkkr-spacer, 16px)/2;margin-inline-end:var(--bkkr-spacer, 16px)/2}}:host(.in-list){--padding-start:var(--bkkr-spacer, 16px)}';var g=t("bkkr_item",function(){function t(t){e(this,t);this.labelColorStyles={};this.itemStyles=new Map;this.multipleInputs=false;this.button=false;this.detailIcon="chevron-right";this.disabled=false;this.routerDirection="forward";this.type="button"}t.prototype.labelColorChanged=function(t){var e=this.color;if(e===undefined){this.labelColorStyles=t.detail}};t.prototype.itemStyle=function(t){t.stopPropagation();var e=t.target.tagName;var r=t.detail;var a={};var o=this.itemStyles.get(e)||{};var n=false;Object.keys(r).forEach((function(t){if(r[t]){var e="item-"+t;if(!o[e]){n=true}a[e]=true}}));if(!n&&Object.keys(a).length!==Object.keys(o).length){n=true}if(n){this.itemStyles.set(e,a);i(this)}};t.prototype.componentDidUpdate=function(){var t=this;var e=this.getFirstInput();if(e&&!this.clickListener){this.clickListener=function(i){return t.delegateFocus(i,e)};this.el.addEventListener("click",this.clickListener)}};t.prototype.disconnectedCallback=function(){var t=this.getFirstInput();if(t&&this.clickListener){this.el.removeEventListener("click",this.clickListener);this.clickListener=undefined}};t.prototype.componentDidLoad=function(){this.setMultipleInputs()};t.prototype.setMultipleInputs=function(){var t=this.el.querySelectorAll("bkkr-checkbox, bkkr-select, bkkr-radio");var e=this.el.querySelectorAll("bkkr-input, bkkr-range, bkkr-segment, bkkr-textarea, bkkr-toggle, bkkr-datetime");var i=this.el.querySelectorAll("bkkr-anchor, bkkr-button, a, button");this.multipleInputs=t.length+e.length>1||t.length+i.length>1||t.length>0&&this.isClickable()};t.prototype.hasCover=function(){var t=this.el.querySelectorAll("bkkr-checkbox, bkkr-radio");return t.length===1&&!this.multipleInputs};t.prototype.isClickable=function(){return this.href!==undefined||this.button};t.prototype.canActivate=function(){return this.isClickable()||this.hasCover()};t.prototype.getFirstInput=function(){var t=this.el.querySelectorAll("bkkr-input, bkkr-textarea");return t[0]};t.prototype.delegateFocus=function(t,e){var i=t.target.tagName==="BKKR-ITEM";var r=false;if(document.activeElement){r=e.querySelector("input, textarea")===document.activeElement}if(i&&r){e.fireFocusEvents=false;e.setBlur();e.setFocus();n((function(){e.fireFocusEvents=true}))}};t.prototype.render=function(){var t;var e=this,i=e.detail,o=e.detailIcon,n=e.download,c=e.labelColorStyles,g=e.lines,h=e.disabled,b=e.href,p=e.rel,m=e.target,k=e.routerDirection;var v={};var u=this.isClickable();var f=this.canActivate();var x=u?b===undefined?"button":"a":"div";var w=x==="button"?{type:this.type}:{download:n,href:b,rel:p,target:m};var y=u?{onClick:function(t){s(b,t,k)}}:{};var z=i!==undefined?i:false;this.itemStyles.forEach((function(t){Object.assign(v,t)}));return r(a,{"aria-disabled":h?"true":null,class:Object.assign(Object.assign(Object.assign({},v),c),l(this.color,(t={item:true},t["item-lines-"+g]=g!==undefined,t["in-list"]=d("bkkr-list",this.el),t["item-multiple-inputs"]=this.multipleInputs,t["state-activatable"]=f,t["state-focusable"]=true,t["state-disabled"]=h,t)))},r(x,Object.assign({},w,{class:"item-native",part:"native",disabled:h},y),r("slot",{name:"start"}),r("div",{class:"item-inner"},r("div",{class:"item-content"},r("slot",null)),r("slot",{name:"end"}),z&&r("bkkr-icon",{icon:o,lazy:false,class:"item-detail-icon",part:"detail-icon","aria-hidden":"true"}),r("div",{class:"item-inner-highlight"}))),r("div",{class:"item-highlight"}),r("slot",{name:"note"}))};Object.defineProperty(t,"delegatesFocus",{get:function(){return true},enumerable:false,configurable:true});Object.defineProperty(t.prototype,"el",{get:function(){return o(this)},enumerable:false,configurable:true});return t}());g.style=c}}}));