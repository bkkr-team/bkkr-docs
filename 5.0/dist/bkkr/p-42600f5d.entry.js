import{r as o,e as t,h as r,H as a,g as n}from"./p-8dbe4215.js";import{o as e,m as i,i as s}from"./p-3faaa6d8.js";import{s as c,h as b}from"./p-09b2e663.js";const d=class{constructor(r){o(this,r),this.bkkrFocus=t(this,"bkkrFocus",7),this.bkkrBlur=t(this,"bkkrBlur",7),this.inItem=!1,this.inToolbar=!1,this.inheritedAttributes={},this.disabled=!1,this.routerDirection="forward",this.type="button",this.handleClick=o=>{if("button"===this.type)e(this.href,o,this.routerDirection);else if(i(this.el)){const t=this.el.closest("form");if(t){o.preventDefault();const r=document.createElement("button");r.type=this.type,r.style.display="none",t.appendChild(r),r.click(),r.remove()}}},this.onFocus=()=>{this.bkkrFocus.emit()},this.onBlur=()=>{this.bkkrBlur.emit()}}componentWillLoad(){this.inToolbar=!!this.el.closest("bkkr-toolbar"),this.inItem=!!this.el.closest("bkkr-item")||!!this.el.closest("ion-item-divider"),this.inheritedAttributes=s(this.el,["aria-label"])}get hasIconOnly(){return!!this.el.querySelector('[slot="icon-only"]')}render(){const{type:o,disabled:t,rel:n,target:e,size:i,href:s,hasIconOnly:d,inToolbar:l,inheritedAttributes:v,color:u,expand:h,shape:p}=this,g=void 0===s?"button":"a",f="button"===g?{type:o}:{download:this.download,href:s,rel:n,target:e};let k=this.fill;return void 0===k&&(k=this.inToolbar?"clear":"solid"),r(a,{onClick:this.handleClick,"aria-disabled":t?"true":null,class:c(u,{["button-"+h]:void 0!==h,["button-"+i]:void 0!==(void 0===i&&this.inItem?"small":i),["button-"+p]:void 0!==p,["button-"+k]:!0,"button-toolbar":l,"button-toolbar-color":b("bkkr-toolbar[color]",this.el),"button-has-icon-only":d,"state-disabled":t,"state-activatable":!0,"state-focusable":!0})},r(g,Object.assign({},f,{part:"native",disabled:t,class:"button-native",onFocus:this.onFocus,onBlur:this.onBlur},v),r("span",{class:"button-inner"},r("slot",{name:"icon-only"}),r("slot",{name:"start"}),r("slot",null),r("slot",{name:"end"}))))}get el(){return n(this)}};d.style=':host{--overflow:initial;--ripple-color:currentColor;--background:transparent;--background-opacity:1;--border-width:0;--border-color:transparent;--border-style:solid;--border-radius:1em;--color-active:var(--color);--color-focus:var(--color);--color-hover:var(--color);--box-shadow:none;--padding-top:0;--padding-start:0.9em;--padding-end:0.9em;--padding-bottom:0;--height:2.8em;--transition:0.2s transform cubic-bezier(0.25, 1.11, 0.78, 1.59), 0.2s box-shadow cubic-bezier(0.25, 1.11, 0.78, 1.59);--transform:translateZ(0);display:inline-block;width:auto;height:var(--height);color:var(--color);font-family:var(--default-font-sans-serif);font-weight:500;line-height:1;text-align:center;text-decoration:none;text-overflow:ellipsis;white-space:nowrap;cursor:pointer;overflow:var(--overflow);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;vertical-align:top;vertical-align:-webkit-baseline-middle;pointer-events:auto;-webkit-font-kerning:none;font-kerning:none}.button-native{-webkit-transition:var(--transition);transition:var(--transition);padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);border-radius:var(--border-radius);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);color:inherit;font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-align:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;white-space:inherit;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:block;position:relative;width:100%;height:100%;-webkit-transform:var(--transform);transform:var(--transform);transition:var(--transition);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);outline:none;background:var(--background);cursor:pointer;opacity:var(--opacity);overflow:hidden;z-index:0;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-appearance:none;-moz-appearance:none;appearance:none}@media (prefers-reduced-motion: reduce){.button-native{-webkit-transition:none;transition:none}}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.button-native{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.button-native::-moz-focus-inner{border:0}.button-inner{display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;z-index:1}:host(.button-clear){--background-active:var(--color-base, var(--color-primary, #3880ff));--background-focus:var(--color-base, var(--color-primary, #3880ff));--background-hover:var(--color-base, var(--color-primary, #3880ff));--background-active-opacity:.1;--background-focus-opacity:.1;--background-hover-opacity:.1;--color:var(--color-base, var(--color-primary, #3880ff))}:host(.button-outline){--border-width:3px;--background-active:var(--color-base, var(--color-primary, #3880ff));--background-focus:var(--color-base, var(--color-primary, #3880ff));--background-hover:var(--color-base, var(--color-primary, #3880ff));--background-active-opacity:.1;--background-focus-opacity:.1;--background-hover-opacity:.1;--border-color:rgba(var(--color-base-rgb, var(--color-primary-rgb, 56, 128, 255)), var(--background-opacity));--color:var(--color-base, var(--color-primary, #3880ff))}:host(.button-solid){--background:rgba(var(--color-base-rgb, var(--color-primary-rgb, 56, 128, 255)), var(--background-opacity));--background-active:var(--color-contrast, var(--color-primary-contrast, #fff));--background-focus:var(--color-contrast, var(--color-primary-contrast, #fff));--background-hover:var(--color-contrast, var(--color-primary-contrast, #fff));--background-active-opacity:.1;--background-focus-opacity:.1;--background-hover-opacity:.1;--color:var(--color-contrast, var(--color-primary-contrast, #fff));--box-shadow-color:var(--color-base-rgb, var(--color-primary-rgb, 56, 128, 255));--box-shadow:0 3px 5px 0 rgba(var(--box-shadow-color, var(--bkkr-text-color-rgb, 0, 0, 0)), 0.1), 0 6px 10px 0 rgba(var(--box-shadow-color, var(--bkkr-text-color-rgb, 0, 0, 0)), 0.12), 0 1.2px 20px 0 rgba(var(--box-shadow-color, var(--bkkr-text-color-rgb, 0, 0, 0)), 0.08);--box-shadow-active:0 1.5px 2.5px 0 rgba(var(--box-shadow-color, var(--bkkr-text-color-rgb, 0, 0, 0)), 0.1), 0 6px 5px 0 rgba(var(--box-shadow-color, var(--bkkr-text-color-rgb, 0, 0, 0)), 0.12), 0 0.6px 10px 0 rgba(var(--box-shadow-color, var(--bkkr-text-color-rgb, 0, 0, 0)), 0.08)}:host(.button-block){display:block}:host(.button-block) .button-native{width:100%;contain:content}:host(.button-large){--border-radius:1em;--padding-top:0;--padding-start:1em;--padding-end:1em;--padding-bottom:0;height:2.8em;font-size:20px}:host(.button-small){--border-radius:0.75em;--padding-top:0;--padding-start:calc(var(--bkkr-spacer, 16px) - 4px);--padding-end:calc(var(--bkkr-spacer, 16px) - 4px);--padding-bottom:0;height:2.1em;font-size:13px}.button-native::after{top:0;right:0;bottom:0;left:0;position:absolute;content:"";opacity:0}@media (any-hover: hover){:host(:hover) .button-native{color:var(--color-hover)}:host(:hover) .button-native::after{background:var(--background-hover);opacity:var(--background-hover-opacity)}}:host(:focus) .button-native,:host(.state-focused) .button-native{color:var(--color-focus)}:host(:focus) .button-native::after,:host(.state-focused) .button-native::after{background:var(--background-focus);opacity:var(--background-focus-opacity)}:host(:active),:host(.state-activated){--box-shadow:var(--box-shadow-active);--transform:scale3d(0.97, 0.97, 1);--transition:0.2s transform ease-out, 0.2s box-shadow ease-out}:host(:active) .button-native,:host(.state-activated) .button-native{color:var(--color-active)}:host(:active) .button-native::after,:host(.state-activated) .button-native::after{background:var(--background-active);opacity:var(--background-active-opacity)}:host(:disabled),:host(.state-disabled){cursor:default;opacity:0.5;pointer-events:none}:host(.button-toolbar){--padding-start:calc(var(--bkkr-spacer, 16px) - 4px);--padding-end:calc(var(--bkkr-spacer, 16px) - 4px);--height:2.1em;--border-radius:0.75em}.button-toolbar-color:not([color]){--background-active:rgba(var(--color-contrast-rgb), var(--background-active-opacity));--background-focus:rgba(var(--color-contrast-rgb), var(--background-focus-opacity));--background-hover:rgba(var(--color-contrast-rgb), var(--background-hover-opacity))}:host(.button-toolbar:not([color])) .button-native{color:var(--color-contrast, var(--color))}:host(.button-outline.button-toolbar:not([color])) .button-native{border-color:var(--bkkr-toolbar-color, var(--color, var(--border-color)))}:host(.button-solid.button-toolbar:not([color])) .button-native{background:var(--bkkr-toolbar-color, var(--background));color:var(--bkkr-toolbar-background, var(--color))}@media (prefers-reduced-motion: reduce){.button-native{-webkit-transform:none;transform:none;-webkit-transition:none;transition:none}}';export{d as bkkr_button}