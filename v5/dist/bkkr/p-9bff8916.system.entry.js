/*!
 * (C) BKKR Framework https://bkkr-team.github.io/bkkr-docs/ - MIT License
 */
System.register(["./p-739d5869.system.js","./p-0fe48761.system.js","./p-7c09dde3.system.js"],(function(o){"use strict";var t,r,e,a,n,i,s,c,l,b;return{setters:[function(o){t=o.r;r=o.c;e=o.h;a=o.H;n=o.g},function(o){i=o.o;s=o.n;c=o.i},function(o){l=o.s;b=o.h}],execute:function(){var d=':host{--overflow:initial;--background:transparent;--background-active:var(--color, currentColor);--background-focus:var(--color, currentColor);--background-hover:var(--color, currentColor);--background-opacity:1;--background-active-opacity:0.12;--background-focus-opacity:0.04;--background-hover-opacity:0.04;--box-shadow-active:none;--border-width:0;--border-color:transparent;--border-style:solid;--border-radius:16px;--color-active:var(--color, currentColor);--color-focus:var(--color, currentColor);--color-hover:var(--color, currentColor);--box-shadow:none;--padding-top:0;--padding-start:0.9em;--padding-end:0.9em;--padding-bottom:0;--height:2.8em;--transition:0.2s transform cubic-bezier(0.25, 1.11, 0.78, 1.59), 0.2s box-shadow cubic-bezier(0.25, 1.11, 0.78, 1.59);--transform:translateZ(0);display:inline-block;width:auto;height:var(--height);outline:0;color:var(--color, currentColor);font-family:var(--bkkr-font-family);font-size:1rem;font-weight:600;line-height:1;text-align:center;text-decoration:none;text-overflow:ellipsis;white-space:nowrap;-ms-touch-action:manipulation;touch-action:manipulation;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;vertical-align:top;vertical-align:-webkit-baseline-middle;-webkit-font-kerning:none;font-kerning:none}.button-native{-webkit-transition:var(--transition);transition:var(--transition);padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);border-radius:var(--border-radius);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);color:inherit;font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-align:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;white-space:inherit;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-align:center;align-items:center;width:100%;height:100%;-webkit-transform:var(--transform);transform:var(--transform);transition:var(--transition);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);outline:none;background:var(--background);color:var(--color, currentColor);contain:layout style;cursor:var(--cursor, pointer);opacity:var(--opacity);overflow:var(--overflow);z-index:0;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-appearance:none;-moz-appearance:none;appearance:none;will-change:transform, box-shadow}@media (prefers-reduced-motion: reduce){.button-native{-webkit-transition:none;transition:none}}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.button-native{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.button-native::-moz-focus-inner{border:0}.button-inner{display:-ms-flexbox;display:flex;position:relative;-ms-flex:1;flex:1;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;z-index:1}:host(.button-outline){--border-width:3px;--border-color:var(--bkkr-text-color, #000)}:host(.button-solid){--background:var(--bkkr-text-color, #000);--background-active:var(--bkkr-background-color, #fff);--background-focus:var(--bkkr-background-color, #fff);--background-hover:var(--bkkr-background-color, #fff);--color:var(--bkkr-background-color, #fff);--box-shadow-color:var(--bkkr-text-color-rgb, 0, 0, 0);--box-shadow:0 3px 5px 0 rgba(var(--box-shadow-color, 0, 0, 0), 0.1), 0 6px 10px 0 rgba(var(--box-shadow-color, 0, 0, 0), 0.12), 0 1.2px 20px 0 rgba(var(--box-shadow-color, 0, 0, 0), 0.08);--box-shadow-active:0 1.5px 2.5px 0 rgba(var(--box-shadow-color, 0, 0, 0), 0.1), 0 6px 5px 0 rgba(var(--box-shadow-color, 0, 0, 0), 0.12), 0 0.6px 10px 0 rgba(var(--box-shadow-color, 0, 0, 0), 0.08)}:host(.button-block){display:block}:host(.button-block) .button-native{width:100%;contain:content}:host(.button-round){--border-radius:64px;--padding-top:0;--padding-start:26px;--padding-end:26px;--padding-bottom:0}:host(.button-large){--border-radius:16px;--padding-top:0;--padding-start:1em;--padding-end:1em;--padding-bottom:0;height:2.8em;font-size:1.25rem}:host(.button-small){--border-radius:12px;--padding-top:0;--padding-start:calc(var(--bkkr-spacer, 16px) - 4px);--padding-end:calc(var(--bkkr-spacer, 16px) - 4px);--padding-bottom:0;height:2.1em;font-size:0.8rem}.button-native::after{top:0;right:0;bottom:0;left:0;position:absolute;content:"";opacity:0;border-radius:var(--border-radius);-webkit-transition:0.2s opacity cubic-bezier(0.32, 0.72, 0, 1);transition:0.2s opacity cubic-bezier(0.32, 0.72, 0, 1)}@media (any-hover: hover){:host(:hover) .button-native{color:var(--color-hover)}:host(:hover) .button-native::after{background:var(--background-hover);opacity:var(--background-hover-opacity)}}:host(:focus) .button-native,:host(.state-focused) .button-native{color:var(--color-focus)}:host(:focus) .button-native::after,:host(.state-focused) .button-native::after{background:var(--background-focus);opacity:var(--background-focus-opacity)}:host(:active),:host(.state-activated){--box-shadow:var(--box-shadow-active);--transform:scale3d(0.97, 0.97, 1);--transition:0.2s transform ease-out, 0.2s box-shadow ease-out}:host(:active) .button-native,:host(.state-activated) .button-native{color:var(--color-active)}:host(:active) .button-native::after,:host(.state-activated) .button-native::after{background:var(--background-active);opacity:var(--background-active-opacity)}:host(:disabled),:host(.state-disabled){cursor:default;opacity:0.5;pointer-events:none}:host(.button-solid.bkkr-color){--background:var(--color-base);--background-active:var(--color-contrast);--background-focus:var(--color-contrast);--background-hover:var(--color-contrast);--box-shadow-color:var(--color-base-rgb);--color:var(--color-contrast)}:host(.button-outline.bkkr-color){--border-color:var(--color-base);--background-active:var(--color-base);--background-focus:var(--color-base);--background-hover:var(--color-base);--color:var(--color-base)}:host(.button-clear.bkkr-color){--background-active:var(--color-base);--background-focus:var(--color-base);--background-hover:var(--color-base);--color:var(--color-base)}:host(.button-toolbar){--padding-start:calc(var(--bkkr-spacer, 16px) - 4px);--padding-end:calc(var(--bkkr-spacer, 16px) - 4px);--height:2.1em;--border-radius:12px}.button-toolbar-color:not([color]){--background-active:rgba(var(--color-contrast-rgb), var(--background-active-opacity));--background-focus:rgba(var(--color-contrast-rgb), var(--background-focus-opacity));--background-hover:rgba(var(--color-contrast-rgb), var(--background-hover-opacity))}:host(.button-toolbar:not([color])) .button-native{color:var(--color-contrast, var(--color))}:host(.button-outline.button-toolbar:not([color])) .button-native{border-color:var(--bkkr-toolbar-color, var(--color, var(--border-color)))}:host(.button-solid.button-toolbar:not([color])) .button-native{background:var(--bkkr-toolbar-color, var(--background));color:var(--bkkr-toolbar-background, var(--color))}::slotted(bkkr-icon){font-size:1.25em;pointer-events:none}::slotted(bkkr-icon[slot=icon-only]){font-size:1.5em}@media (prefers-reduced-motion: reduce){.button-native{-webkit-transform:none;transform:none;-webkit-transition:none;transition:none}}';var u=o("bkkr_button",function(){function o(o){var e=this;t(this,o);this.bkkrFocus=r(this,"bkkrFocus",7);this.bkkrBlur=r(this,"bkkrBlur",7);this.inItem=false;this.inToolbar=false;this.inheritedAttributes={};this.disabled=false;this.routerDirection="forward";this.type="button";this.handleClick=function(o){if(e.type==="button"){i(e.href,o,e.routerDirection)}else if(s(e.el)){var t=e.el.closest("form");if(t){o.preventDefault();var r=document.createElement("button");r.type=e.type;r.style.display="none";t.appendChild(r);r.click();r.remove()}}};this.onFocus=function(){e.bkkrFocus.emit()};this.onBlur=function(){e.bkkrBlur.emit()}}o.prototype.componentWillLoad=function(){this.inToolbar=!!this.el.closest("bkkr-toolbar");this.inItem=!!this.el.closest("bkkr-item");this.inheritedAttributes=c(this.el,["aria-label"])};Object.defineProperty(o.prototype,"hasIconOnly",{get:function(){return!!this.el.querySelector('[slot="icon-only"]')},enumerable:false,configurable:true});o.prototype.render=function(){var o;var t=this,r=t.type,n=t.disabled,i=t.rel,s=t.target,c=t.size,d=t.href,u=t.hasIconOnly,v=t.inToolbar,h=t.inheritedAttributes,p=t.color,g=t.expand,f=t.shape;var k=c===undefined&&this.inItem?"small":c;var m=d===undefined?"button":"a";var x=m==="button"?{type:r}:{download:this.download,href:d,rel:i,target:s};var w=this.fill;if(w===undefined){w=this.inToolbar?"clear":"solid"}return e(a,{onClick:this.handleClick,"aria-disabled":n?"true":null,class:l(p,(o={},o["button-"+g]=g!==undefined,o["button-"+c]=k!==undefined,o["button-"+f]=f!==undefined,o["button-"+w]=true,o["button-toolbar"]=v,o["button-toolbar-color"]=b("bkkr-toolbar[color]",this.el),o["button-has-icon-only"]=u,o["state-disabled"]=n,o["state-activatable"]=true,o["state-focusable"]=true,o))},e(m,Object.assign({},x,{part:"native",disabled:n,class:"button-native",onFocus:this.onFocus,onBlur:this.onBlur},h),e("slot",{name:"start"}),e("span",{class:"button-inner"},e("slot",{name:"icon-only"}),e("slot",null)),e("slot",{name:"end"})))};Object.defineProperty(o.prototype,"el",{get:function(){return n(this)},enumerable:false,configurable:true});return o}());u.style=d}}}));