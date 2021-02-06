System.register(["./p-92f7c087.system.js","./p-d2d3f0b5.system.js","./p-4c5bd054.system.js","./p-5e4466ec.system.js"],(function(t){"use strict";var o,e,r,a,n,i,s,l,f,c,b,u;return{setters:[function(t){o=t.r;e=t.e;r=t.h;a=t.H;n=t.g;i=t.f},function(t){s=t.o;l=t.m;f=t.i},function(t){c=t.s;b=t.h},function(t){u=t.m}],execute:function(){var g=':host{--overflow:initial;--ripple-color:currentColor;--background:transparent;--background-opacity:1;--border-width:0;--border-color:transparent;--border-style:solid;--border-radius:1em;--color-active:var(--color);--color-focus:var(--color);--color-hover:var(--color);--box-shadow:none;--padding-top:0;--padding-start:.9em;--padding-end:.9em;--padding-bottom:0;--height:2.8em;--transition:0.2s transform cubic-bezier(0.25, 1.11, 0.78, 1.59), 0.2s box-shadow cubic-bezier(0.25, 1.11, 0.78, 1.59);--transform:translateZ(0);display:inline-block;width:auto;height:var(--height);color:var(--color);font-family:var(--default-font-sans-serif);font-weight:500;line-height:1;text-align:center;text-decoration:none;text-overflow:ellipsis;white-space:nowrap;cursor:pointer;overflow:var(--overflow);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;vertical-align:top;vertical-align:-webkit-baseline-middle;pointer-events:auto;-webkit-font-kerning:none;font-kerning:none}.button-native{-webkit-transition:var(--transition);transition:var(--transition);padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);border-radius:var(--border-radius);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);color:inherit;font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-align:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;white-space:inherit;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:block;position:relative;width:100%;height:100%;-webkit-transform:var(--transform);transform:var(--transform);transition:var(--transition);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);outline:none;background:var(--background);cursor:pointer;opacity:var(--opacity);overflow:hidden;z-index:0;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-appearance:none;-moz-appearance:none;appearance:none}@media (prefers-reduced-motion: reduce){.button-native{-webkit-transition:none;transition:none}}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.button-native{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.button-native::-moz-focus-inner{border:0}.button-inner{display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;z-index:1}:host(.button-clear){--background-active:var(--color-base, var(--color-primary, #3880ff));--background-focus:var(--color-base, var(--color-primary, #3880ff));--background-hover:var(--color-base, var(--color-primary, #3880ff));--background-active-opacity:.1;--background-focus-opacity:.1;--background-hover-opacity:.1;--color:var(--color-base, var(--color-primary, #3880ff))}:host(.button-outline){--border-width:3px;--background-active:var(--color-base, var(--color-primary, #3880ff));--background-focus:var(--color-base, var(--color-primary, #3880ff));--background-hover:var(--color-base, var(--color-primary, #3880ff));--background-active-opacity:.1;--background-focus-opacity:.1;--background-hover-opacity:.1;--border-color:rgba(var(--color-base-rgb, var(--color-primary-rgb, 56, 128, 255)), var(--background-opacity));--color:var(--color-base, var(--color-primary, #3880ff))}:host(.button-solid){--background:rgba(var(--color-base-rgb, var(--color-primary-rgb, 56, 128, 255)), var(--background-opacity));--background-active:var(--color-contrast, var(--color-primary-contrast, #fff));--background-focus:var(--color-contrast, var(--color-primary-contrast, #fff));--background-hover:var(--color-contrast, var(--color-primary-contrast, #fff));--background-active-opacity:.1;--background-focus-opacity:.1;--background-hover-opacity:.1;--color:var(--color-contrast, var(--color-primary-contrast, #fff));--box-shadow-color:var(--color-base-rgb, var(--color-primary-rgb, 56, 128, 255));--box-shadow:0 3px 5px 0 rgba(var(--box-shadow-color, var(--bkkr-text-color-rgb, 0, 0, 0)), 0.1), 0 6px 10px 0 rgba(var(--box-shadow-color, var(--bkkr-text-color-rgb, 0, 0, 0)), 0.12), 0 1.2px 20px 0 rgba(var(--box-shadow-color, var(--bkkr-text-color-rgb, 0, 0, 0)), 0.08);--box-shadow-active:0 1.5px 2.5px 0 rgba(var(--box-shadow-color, var(--bkkr-text-color-rgb, 0, 0, 0)), 0.1), 0 6px 5px 0 rgba(var(--box-shadow-color, var(--bkkr-text-color-rgb, 0, 0, 0)), 0.12), 0 0.6px 10px 0 rgba(var(--box-shadow-color, var(--bkkr-text-color-rgb, 0, 0, 0)), 0.08)}:host(.button-block){display:block}:host(.button-block) .button-native{width:100%;contain:content}:host(.button-large){--border-radius:1em;--padding-top:0;--padding-start:1em;--padding-end:1em;--padding-bottom:0;height:2.8em;font-size:20px}:host(.button-small){--border-radius:0.75em;--padding-top:0;--padding-start:calc(var(--bkkr-spacer, 16px) - 4px);--padding-end:calc(var(--bkkr-spacer, 16px) - 4px);--padding-bottom:0;height:2.1em;font-size:13px}.button-native::after{top:0;right:0;bottom:0;left:0;position:absolute;content:"";opacity:0}@media (any-hover: hover){:host(:hover) .button-native{color:var(--color-hover)}:host(:hover) .button-native::after{background:var(--background-hover);opacity:var(--background-hover-opacity)}}:host(:focus) .button-native,:host(.state-focused) .button-native{color:var(--color-focus)}:host(:focus) .button-native::after,:host(.state-focused) .button-native::after{background:var(--background-focus);opacity:var(--background-focus-opacity)}:host(:active),:host(.state-activated){--box-shadow:var(--box-shadow-active);--transform:scale3d(0.97, 0.97, 1);--transition:0.2s transform ease-out, 0.2s box-shadow ease-out}:host(:active) .button-native,:host(.state-activated) .button-native{color:var(--color-active)}:host(:active) .button-native::after,:host(.state-activated) .button-native::after{background:var(--background-active);opacity:var(--background-active-opacity)}:host(:disabled),:host(.state-disabled){cursor:default;opacity:0.5;pointer-events:none}:host(.button-toolbar){--padding-start:calc(var(--bkkr-spacer, 16px) - 4px);--padding-end:calc(var(--bkkr-spacer, 16px) - 4px);--height:2.1em;--border-radius:0.75em}.button-toolbar-color:not([color]){--background-active:rgba(var(--color-contrast-rgb), var(--background-active-opacity));--background-focus:rgba(var(--color-contrast-rgb), var(--background-focus-opacity));--background-hover:rgba(var(--color-contrast-rgb), var(--background-hover-opacity))}:host(.button-toolbar:not([color])) .button-native{color:var(--color-contrast, var(--color))}:host(.button-outline.button-toolbar:not([color])) .button-native{border-color:var(--bkkr-toolbar-color, var(--color, var(--border-color)))}:host(.button-solid.button-toolbar:not([color])) .button-native{background:var(--bkkr-toolbar-color, var(--background));color:var(--bkkr-toolbar-background, var(--color))}@media (prefers-reduced-motion: reduce){.button-native{-webkit-transform:none;transform:none;-webkit-transition:none;transition:none}}';var m=t("bkkr_button",function(){function t(t){var r=this;o(this,t);this.bkkrFocus=e(this,"bkkrFocus",7);this.bkkrBlur=e(this,"bkkrBlur",7);this.inItem=false;this.inToolbar=false;this.inheritedAttributes={};this.disabled=false;this.routerDirection="forward";this.type="button";this.handleClick=function(t){if(r.type==="button"){s(r.href,t,r.routerDirection)}else if(l(r.el)){var o=r.el.closest("form");if(o){t.preventDefault();var e=document.createElement("button");e.type=r.type;e.style.display="none";o.appendChild(e);e.click();e.remove()}}};this.onFocus=function(){r.bkkrFocus.emit()};this.onBlur=function(){r.bkkrBlur.emit()}}t.prototype.componentWillLoad=function(){this.inToolbar=!!this.el.closest("bkkr-toolbar");this.inItem=!!this.el.closest("bkkr-item")||!!this.el.closest("ion-item-divider");this.inheritedAttributes=f(this.el,["aria-label"])};Object.defineProperty(t.prototype,"hasIconOnly",{get:function(){return!!this.el.querySelector('[slot="icon-only"]')},enumerable:false,configurable:true});t.prototype.render=function(){var t;var o=this,e=o.type,n=o.disabled,i=o.rel,s=o.target,l=o.size,f=o.href,u=o.hasIconOnly,g=o.inToolbar,m=o.inheritedAttributes,d=o.color,p=o.expand,h=o.shape;var v=l===undefined&&this.inItem?"small":l;var k=f===undefined?"button":"a";var x=k==="button"?{type:e}:{download:this.download,href:f,rel:i,target:s};var w=this.fill;if(w===undefined){w=this.inToolbar?"clear":"solid"}return r(a,{onClick:this.handleClick,"aria-disabled":n?"true":null,class:c(d,(t={},t["button-"+p]=p!==undefined,t["button-"+l]=v!==undefined,t["button-"+h]=h!==undefined,t["button-"+w]=true,t["button-toolbar"]=g,t["button-toolbar-color"]=b("bkkr-toolbar[color]",this.el),t["button-has-icon-only"]=u,t["state-disabled"]=n,t["state-activatable"]=true,t["state-focusable"]=true,t))},r(k,Object.assign({},x,{part:"native",disabled:n,class:"button-native",onFocus:this.onFocus,onBlur:this.onBlur},m),r("span",{class:"button-inner"},r("slot",{name:"icon-only"}),r("slot",{name:"start"}),r("slot",null),r("slot",{name:"end"}))))};Object.defineProperty(t.prototype,"el",{get:function(){return n(this)},enumerable:false,configurable:true});return t}());m.style=g;var d=".col,:host{padding-left:calc(var(--gutter-x) / 2);padding-right:calc(var(--gutter-x) / 2);margin-left:var(--offset, 0);margin-top:var(--gutter-y);-ms-flex:var(--grow, 1) 0 var(--basis, 0%);flex:var(--grow, 1) 0 var(--basis, 0%);width:var(--basis, auto);min-width:0;max-width:100%}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.col,:host{padding-left:unset;padding-right:unset;-webkit-padding-start:calc(var(--gutter-x) / 2);padding-inline-start:calc(var(--gutter-x) / 2);-webkit-padding-end:calc(var(--gutter-x) / 2);padding-inline-end:calc(var(--gutter-x) / 2)}}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.col,:host{margin-left:unset;-webkit-margin-start:var(--offset, 0);margin-inline-start:var(--offset, 0)}}.col-1{--grow:0;--basis:8.3333333333%}.col-2{--grow:0;--basis:16.6666666667%}.col-3{--grow:0;--basis:25%}.col-4{--grow:0;--basis:33.3333333333%}.col-5{--grow:0;--basis:41.6666666667%}.col-6{--grow:0;--basis:50%}.col-7{--grow:0;--basis:58.3333333333%}.col-8{--grow:0;--basis:66.6666666667%}.col-9{--grow:0;--basis:75%}.col-10{--grow:0;--basis:83.3333333333%}.col-11{--grow:0;--basis:91.6666666667%}.col-12{--grow:0;--basis:100%}.offset-1{--offset:if($num == 0, 0, percentage($num))}.offset-2{--offset:if($num == 0, 0, percentage($num))}.offset-3{--offset:if($num == 0, 0, percentage($num))}.offset-4{--offset:if($num == 0, 0, percentage($num))}.offset-5{--offset:if($num == 0, 0, percentage($num))}.offset-6{--offset:if($num == 0, 0, percentage($num))}.offset-7{--offset:if($num == 0, 0, percentage($num))}.offset-8{--offset:if($num == 0, 0, percentage($num))}.offset-9{--offset:if($num == 0, 0, percentage($num))}.offset-10{--offset:if($num == 0, 0, percentage($num))}.offset-11{--offset:if($num == 0, 0, percentage($num))}.col-auto{--grow:0;--basis:auto}@media (min-width: 576px){.col-sm-1{--grow:0;--basis:8.3333333333%}.col-sm-2{--grow:0;--basis:16.6666666667%}.col-sm-3{--grow:0;--basis:25%}.col-sm-4{--grow:0;--basis:33.3333333333%}.col-sm-5{--grow:0;--basis:41.6666666667%}.col-sm-6{--grow:0;--basis:50%}.col-sm-7{--grow:0;--basis:58.3333333333%}.col-sm-8{--grow:0;--basis:66.6666666667%}.col-sm-9{--grow:0;--basis:75%}.col-sm-10{--grow:0;--basis:83.3333333333%}.col-sm-11{--grow:0;--basis:91.6666666667%}.col-sm-12{--grow:0;--basis:100%}.offset-sm-0{--offset:if($num == 0, 0, percentage($num))}.offset-sm-1{--offset:if($num == 0, 0, percentage($num))}.offset-sm-2{--offset:if($num == 0, 0, percentage($num))}.offset-sm-3{--offset:if($num == 0, 0, percentage($num))}.offset-sm-4{--offset:if($num == 0, 0, percentage($num))}.offset-sm-5{--offset:if($num == 0, 0, percentage($num))}.offset-sm-6{--offset:if($num == 0, 0, percentage($num))}.offset-sm-7{--offset:if($num == 0, 0, percentage($num))}.offset-sm-8{--offset:if($num == 0, 0, percentage($num))}.offset-sm-9{--offset:if($num == 0, 0, percentage($num))}.offset-sm-10{--offset:if($num == 0, 0, percentage($num))}.offset-sm-11{--offset:if($num == 0, 0, percentage($num))}.col-sm-auto{--grow:0;--basis:auto}}@media (min-width: 768px){.col-md-1{--grow:0;--basis:8.3333333333%}.col-md-2{--grow:0;--basis:16.6666666667%}.col-md-3{--grow:0;--basis:25%}.col-md-4{--grow:0;--basis:33.3333333333%}.col-md-5{--grow:0;--basis:41.6666666667%}.col-md-6{--grow:0;--basis:50%}.col-md-7{--grow:0;--basis:58.3333333333%}.col-md-8{--grow:0;--basis:66.6666666667%}.col-md-9{--grow:0;--basis:75%}.col-md-10{--grow:0;--basis:83.3333333333%}.col-md-11{--grow:0;--basis:91.6666666667%}.col-md-12{--grow:0;--basis:100%}.offset-md-0{--offset:if($num == 0, 0, percentage($num))}.offset-md-1{--offset:if($num == 0, 0, percentage($num))}.offset-md-2{--offset:if($num == 0, 0, percentage($num))}.offset-md-3{--offset:if($num == 0, 0, percentage($num))}.offset-md-4{--offset:if($num == 0, 0, percentage($num))}.offset-md-5{--offset:if($num == 0, 0, percentage($num))}.offset-md-6{--offset:if($num == 0, 0, percentage($num))}.offset-md-7{--offset:if($num == 0, 0, percentage($num))}.offset-md-8{--offset:if($num == 0, 0, percentage($num))}.offset-md-9{--offset:if($num == 0, 0, percentage($num))}.offset-md-10{--offset:if($num == 0, 0, percentage($num))}.offset-md-11{--offset:if($num == 0, 0, percentage($num))}.col-md-auto{--grow:0;--basis:auto}}@media (min-width: 992px){.col-lg-1{--grow:0;--basis:8.3333333333%}.col-lg-2{--grow:0;--basis:16.6666666667%}.col-lg-3{--grow:0;--basis:25%}.col-lg-4{--grow:0;--basis:33.3333333333%}.col-lg-5{--grow:0;--basis:41.6666666667%}.col-lg-6{--grow:0;--basis:50%}.col-lg-7{--grow:0;--basis:58.3333333333%}.col-lg-8{--grow:0;--basis:66.6666666667%}.col-lg-9{--grow:0;--basis:75%}.col-lg-10{--grow:0;--basis:83.3333333333%}.col-lg-11{--grow:0;--basis:91.6666666667%}.col-lg-12{--grow:0;--basis:100%}.offset-lg-0{--offset:if($num == 0, 0, percentage($num))}.offset-lg-1{--offset:if($num == 0, 0, percentage($num))}.offset-lg-2{--offset:if($num == 0, 0, percentage($num))}.offset-lg-3{--offset:if($num == 0, 0, percentage($num))}.offset-lg-4{--offset:if($num == 0, 0, percentage($num))}.offset-lg-5{--offset:if($num == 0, 0, percentage($num))}.offset-lg-6{--offset:if($num == 0, 0, percentage($num))}.offset-lg-7{--offset:if($num == 0, 0, percentage($num))}.offset-lg-8{--offset:if($num == 0, 0, percentage($num))}.offset-lg-9{--offset:if($num == 0, 0, percentage($num))}.offset-lg-10{--offset:if($num == 0, 0, percentage($num))}.offset-lg-11{--offset:if($num == 0, 0, percentage($num))}.col-lg-auto{--grow:0;--basis:auto}}@media (min-width: 1200px){.col-xl-1{--grow:0;--basis:8.3333333333%}.col-xl-2{--grow:0;--basis:16.6666666667%}.col-xl-3{--grow:0;--basis:25%}.col-xl-4{--grow:0;--basis:33.3333333333%}.col-xl-5{--grow:0;--basis:41.6666666667%}.col-xl-6{--grow:0;--basis:50%}.col-xl-7{--grow:0;--basis:58.3333333333%}.col-xl-8{--grow:0;--basis:66.6666666667%}.col-xl-9{--grow:0;--basis:75%}.col-xl-10{--grow:0;--basis:83.3333333333%}.col-xl-11{--grow:0;--basis:91.6666666667%}.col-xl-12{--grow:0;--basis:100%}.offset-xl-0{--offset:if($num == 0, 0, percentage($num))}.offset-xl-1{--offset:if($num == 0, 0, percentage($num))}.offset-xl-2{--offset:if($num == 0, 0, percentage($num))}.offset-xl-3{--offset:if($num == 0, 0, percentage($num))}.offset-xl-4{--offset:if($num == 0, 0, percentage($num))}.offset-xl-5{--offset:if($num == 0, 0, percentage($num))}.offset-xl-6{--offset:if($num == 0, 0, percentage($num))}.offset-xl-7{--offset:if($num == 0, 0, percentage($num))}.offset-xl-8{--offset:if($num == 0, 0, percentage($num))}.offset-xl-9{--offset:if($num == 0, 0, percentage($num))}.offset-xl-10{--offset:if($num == 0, 0, percentage($num))}.offset-xl-11{--offset:if($num == 0, 0, percentage($num))}.col-xl-auto{--grow:0;--basis:auto}}@media (min-width: 1400px){.col-xxl-1{--grow:0;--basis:8.3333333333%}.col-xxl-2{--grow:0;--basis:16.6666666667%}.col-xxl-3{--grow:0;--basis:25%}.col-xxl-4{--grow:0;--basis:33.3333333333%}.col-xxl-5{--grow:0;--basis:41.6666666667%}.col-xxl-6{--grow:0;--basis:50%}.col-xxl-7{--grow:0;--basis:58.3333333333%}.col-xxl-8{--grow:0;--basis:66.6666666667%}.col-xxl-9{--grow:0;--basis:75%}.col-xxl-10{--grow:0;--basis:83.3333333333%}.col-xxl-11{--grow:0;--basis:91.6666666667%}.col-xxl-12{--grow:0;--basis:100%}.offset-xxl-0{--offset:if($num == 0, 0, percentage($num))}.offset-xxl-1{--offset:if($num == 0, 0, percentage($num))}.offset-xxl-2{--offset:if($num == 0, 0, percentage($num))}.offset-xxl-3{--offset:if($num == 0, 0, percentage($num))}.offset-xxl-4{--offset:if($num == 0, 0, percentage($num))}.offset-xxl-5{--offset:if($num == 0, 0, percentage($num))}.offset-xxl-6{--offset:if($num == 0, 0, percentage($num))}.offset-xxl-7{--offset:if($num == 0, 0, percentage($num))}.offset-xxl-8{--offset:if($num == 0, 0, percentage($num))}.offset-xxl-9{--offset:if($num == 0, 0, percentage($num))}.offset-xxl-10{--offset:if($num == 0, 0, percentage($num))}.offset-xxl-11{--offset:if($num == 0, 0, percentage($num))}.col-xxl-auto{--grow:0;--basis:auto}}";var p=["","xs","sm","md","lg","xl","xxl"];var h=t("bkkr_col",function(){function t(t){o(this,t)}t.prototype.onResize=function(){i(this)};t.prototype.getColumns=function(t){var o;for(var e=0,r=p;e<r.length;e++){var a=r[e];var n=u(a);var i=this[t+a.charAt(0).toUpperCase()+a.slice(1)];if(n&&i!==undefined){o=i}}return o};t.prototype.calculateSize=function(){var t=this.getColumns("size");if(!t||t===""){return}var o=t==="auto"?"auto":"calc(calc("+t+" / var(--columns, 12)) * 100%)";return{"--grow":"0","--basis":""+o}};t.prototype.render=function(){return r(a,{style:Object.assign({},this.calculateSize())},r("slot",null))};return t}());h.style=d;var v=".item.sc-bkkr-label-h,.item .sc-bkkr-label-h{--color:initial;display:block;color:var(--color);font-family:var(--default-font-sans-serif);font-size:inherit;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box}.label-color.sc-bkkr-label-h{color:current-color(base)}.label-text-wrap.sc-bkkr-label-h,[text-wrap].sc-bkkr-label-h{font-size:14px;line-height:1.5;white-space:normal}.item-interactive-disabled.sc-bkkr-label-h:not(.item-multiple-inputs),.item-interactive-disabled:not(.item-multiple-inputs) .sc-bkkr-label-h{pointer-events:none;cursor:default;opacity:0.3}.item-input.sc-bkkr-label-h,.item-input .sc-bkkr-label-h{-ms-flex:initial;flex:initial;max-width:200px;pointer-events:none}.item-textarea.sc-bkkr-label-h,.item-textarea .sc-bkkr-label-h{-ms-flex-item-align:baseline;align-self:baseline}.label-fixed.sc-bkkr-label-h{-ms-flex:0 0 100px;flex:0 0 100px;width:100px;min-width:100px;max-width:200px}.label-floating.sc-bkkr-label-h{margin-bottom:0;-ms-flex-item-align:stretch;align-self:stretch;width:auto;max-width:100%;-webkit-transform:translate3d(0, 30px, 0);transform:translate3d(0, 30px, 0);-webkit-transform-origin:left top;transform-origin:left top;-webkit-transition:-webkit-transform 0.15s ease-in-out;transition:-webkit-transform 0.15s ease-in-out;transition:transform 0.15s ease-in-out;transition:transform 0.15s ease-in-out, -webkit-transform 0.15s ease-in-out}.label-no-animate.label-floating.sc-bkkr-label-h{-webkit-transition:none;transition:none}.item-has-focus.label-floating.sc-bkkr-label-h,.item-has-focus .label-floating.sc-bkkr-label-h{color:var(--color-base, var(--color-primary, #3880ff))}.item-has-focus.label-floating.sc-bkkr-label-h,.item-has-focus .label-floating.sc-bkkr-label-h,.item-has-value.label-floating.sc-bkkr-label-h,.item-has-value .label-floating.sc-bkkr-label-h{-webkit-transform:translate3d(0, 0, 0) scale(0.82);transform:translate3d(0, 0, 0) scale(0.82)}.sc-bkkr-label-s h1,.sc-bkkr-label-s h2,.sc-bkkr-label-s h3,.sc-bkkr-label-s h4,.sc-bkkr-label-s h5,.sc-bkkr-label-s h6{text-overflow:inherit;overflow:inherit}";var k=t("bkkr_label",function(){function t(t){o(this,t);this.bkkrColor=e(this,"bkkrColor",7);this.bkkrStyle=e(this,"bkkrStyle",7);this.inRange=false;this.noAnimate=false}t.prototype.componentWillLoad=function(){this.inRange=!!this.el.closest("bkkr-range");this.noAnimate=this.position==="floating";this.emitStyle();this.emitColor()};t.prototype.componentDidLoad=function(){var t=this;if(this.noAnimate){setTimeout((function(){t.noAnimate=false}),1e3)}};t.prototype.colorChanged=function(){this.emitColor()};t.prototype.positionChanged=function(){this.emitStyle()};t.prototype.emitColor=function(){var t;var o=this.color;this.bkkrColor.emit((t={"item-label-color":o!==undefined},t["bkkr-color-"+o]=o!==undefined,t))};t.prototype.emitStyle=function(){var t;var o=this,e=o.inRange,r=o.position;if(!e){this.bkkrStyle.emit((t={label:true},t["label-"+r]=r!==undefined,t))}};t.prototype.render=function(){var t;var o=this.position;return r(a,{class:c(this.color,(t={},t["label-"+o]=o!==undefined,t["label-no-animate"]=this.noAnimate,t))})};Object.defineProperty(t.prototype,"el",{get:function(){return n(this)},enumerable:false,configurable:true});Object.defineProperty(t,"watchers",{get:function(){return{color:["colorChanged"],position:["positionChanged"]}},enumerable:false,configurable:true});return t}());k.style=v;var x=".row,:host{--gutter-x:8px;--gutter-y:8px;margin-left:calc(var(--gutter-x) / -2);margin-right:calc(var(--gutter-x) / -2);margin-top:calc(var(--gutter-y) * -1);margin-bottom:var(--gutter-y);display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.row,:host{margin-left:unset;margin-right:unset;-webkit-margin-start:calc(var(--gutter-x) / -2);margin-inline-start:calc(var(--gutter-x) / -2);-webkit-margin-end:calc(var(--gutter-x) / -2);margin-inline-end:calc(var(--gutter-x) / -2)}}";var w=t("bkkr_row",function(){function t(t){o(this,t)}t.prototype.render=function(){return r(a,null,r("slot",null))};return t}());w.style=x}}}));