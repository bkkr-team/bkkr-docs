System.register(["./p-92f7c087.system.js","./p-c68e00c3.system.js","./p-4c5bd054.system.js"],(function(t){"use strict";var r,o,a,e,n,i,s,c;return{setters:[function(t){r=t.r;o=t.e;a=t.h;e=t.H;n=t.g},function(t){i=t.o},function(t){s=t.h;c=t.s}],execute:function(){var b=':host{--border-radius:50%;--border-width:0;--border-style:none;--border-color:initial;--padding-top:0;--padding-end:0;--padding-bottom:0;--padding-start:0;--background:var(--color-base, var(--color-primary, #3880ff));--background-active:var(--color-contrast, var(--color-primary-contrast, #fff));--background-focus:var(--color-contrast, var(--color-primary-contrast, #fff));--background-hover:var(--color-contrast, var(--color-primary-contrast, #fff));--background-active-opacity:.1;--background-focus-opacity:.1;--background-hover-opacity:.1;--color:var(--color-contrast, var(--color-primary-contrast, #fff));--color-active:var(--color);--color-focus:var(--color);--color-hover:var(--color);--box-shadow-color:var(--color-base-rgb, var(--color-primary-rgb, 56, 128, 255));--box-shadow:0 15px 25px 0 rgba(var(--box-shadow-color, var(--bkkr-text-color-rgb, 0, 0, 0)), 0.1), 0 6px 20px 0 rgba(var(--box-shadow-color, var(--bkkr-text-color-rgb, 0, 0, 0)), 0.12), 0 13.2px 40px 0 rgba(var(--box-shadow-color, var(--bkkr-text-color-rgb, 0, 0, 0)), 0.08);--transition:0.2s transform cubic-bezier(0.25, 1.11, 0.78, 1.59), 0.2s box-shadow cubic-bezier(0.25, 1.11, 0.78, 1.59);--transform:translateZ(0);margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;display:block;width:56px;height:56px;font-size:14px;text-align:center;text-overflow:ellipsis;text-transform:none;white-space:nowrap;-webkit-font-kerning:none;font-kerning:none}.button-native{border-radius:var(--border-radius);padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);color:inherit;font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-align:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;white-space:inherit;display:block;position:relative;width:100%;height:100%;-webkit-transform:var(--transform);transform:var(--transform);-webkit-transition:var(--transition);transition:var(--transition);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);outline:none;background:var(--background);background-clip:padding-box;color:var(--color);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);contain:strict;cursor:pointer;overflow:hidden;z-index:0;-webkit-appearance:none;-moz-appearance:none;appearance:none;-webkit-box-sizing:border-box;box-sizing:border-box}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.button-native{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.button-native::-moz-focus-inner{border:0}.button-inner{top:0;right:0;left:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;height:100%;z-index:1}.button-native::after{top:0;right:0;bottom:0;left:0;position:absolute;content:"";opacity:0}@media (any-hover: hover){:host(:hover) .button-native{color:var(--color-hover)}:host(:hover) .button-native::after{background:var(--background-hover);opacity:var(--background-hover-opacity)}}:host(:focus) .button-native,:host(.state-focused) .button-native{color:var(--color-focus)}:host(:focus) .button-native::after,:host(.state-focused) .button-native::after{background:var(--background-focus);opacity:var(--background-focus-opacity)}:host(:active),:host(.state-activated){--box-shadow:0 3px 5px 0 rgba(var(--box-shadow-color, var(--bkkr-text-color-rgb, 0, 0, 0)), 0.1), 0 6px 10px 0 rgba(var(--box-shadow-color, var(--bkkr-text-color-rgb, 0, 0, 0)), 0.12), 0 1.2px 20px 0 rgba(var(--box-shadow-color, var(--bkkr-text-color-rgb, 0, 0, 0)), 0.08);--transform:scale3d(0.97, 0.97, 1);--transition:0.2s transform ease-out, 0.2s box-shadow ease-out}:host(:active) .button-native,:host(.state-activated) .button-native{color:var(--color-active)}:host(:active) .button-native::after,:host(.state-activated) .button-native::after{background:var(--background-active);opacity:var(--background-active-opacity)}:host(:disabled),:host(.state-disabled){cursor:default;opacity:0.5;pointer-events:none}::slotted(bkkr-icon){font-size:28px;line-height:1}:host(.fab-button-small){margin-left:8px;margin-right:8px;margin-top:8px;margin-bottom:8px;width:40px;height:40px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host(.fab-button-small){margin-left:unset;margin-right:unset;-webkit-margin-start:8px;margin-inline-start:8px;-webkit-margin-end:8px;margin-inline-end:8px}}';var d=t("bkkr_fab_button",function(){function t(t){var a=this;r(this,t);this.bkkrFocus=o(this,"bkkrFocus",7);this.bkkrBlur=o(this,"bkkrBlur",7);this.disabled=false;this.routerDirection="forward";this.type="button";this.onFocus=function(){a.bkkrFocus.emit()};this.onBlur=function(){a.bkkrBlur.emit()}}t.prototype.render=function(){var t;var r=this,o=r.el,n=r.disabled,b=r.color,d=r.href,l=r.size,u=r.routerDirection;var p=s("bkkr-fab-list",o);var v=d===undefined?"button":"a";var g=v==="button"?{type:this.type}:{download:this.download,href:d,rel:this.rel,target:this.target};return a(e,{"aria-disabled":n?"true":null,class:c(b,(t={"fab-button-in-list":p,"state-disabled":n,"state-activatable":true,"state-focusable":true},t["fab-button-"+l]=l!==undefined,t))},a(v,Object.assign({},g,{class:"button-native",part:"native",disabled:n,onFocus:this.onFocus,onBlur:this.onBlur,onClick:function(t){return i(d,t,u)}}),a("span",{class:"button-inner"},a("slot",null))))};Object.defineProperty(t.prototype,"el",{get:function(){return n(this)},enumerable:false,configurable:true});return t}());d.style=b}}}));