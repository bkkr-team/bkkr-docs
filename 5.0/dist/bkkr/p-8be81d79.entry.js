import{r as t,c as o,h as r,H as a,g as i}from"./p-0bf5078b.js";import{o as n}from"./p-c2089e63.js";import{h as e,s}from"./p-c50c697b.js";const b=class{constructor(r){t(this,r),this.bkkrFocus=o(this,"bkkrFocus",7),this.bkkrBlur=o(this,"bkkrBlur",7),this.disabled=!1,this.routerDirection="forward",this.type="button",this.onFocus=()=>{this.bkkrFocus.emit()},this.onBlur=()=>{this.bkkrBlur.emit()}}render(){const{el:t,disabled:o,color:i,href:b,size:d,routerDirection:c}=this,l=e("bkkr-fab-list",t),h=void 0===b?"button":"a",p="button"===h?{type:this.type}:{download:this.download,href:b,rel:this.rel,target:this.target};return r(a,{"aria-disabled":o?"true":null,class:s(i,{"fab-button-in-list":l,"state-disabled":o,"state-activatable":!0,"state-focusable":!0,[`fab-button-${d}`]:void 0!==d})},r(h,Object.assign({},p,{class:"button-native",part:"native",disabled:o,onFocus:this.onFocus,onBlur:this.onBlur,onClick:t=>n(b,t,c)}),r("span",{class:"button-inner"},r("slot",null))))}get el(){return i(this)}};b.style=':host{--border-radius:50%;--border-width:0;--border-style:none;--border-color:initial;--padding-top:0;--padding-end:0;--padding-bottom:0;--padding-start:0;--background:var(--bkkr-text-color, #000);--background-active:var(--bkkr-background-color, #fff);--background-focus:var(--bkkr-background-color, #fff);--background-hover:var(--bkkr-background-color, #fff);--background-active-opacity:0.12;--background-focus-opacity:0.04;--background-hover-opacity:0.04;--color:var(--bkkr-background-color, #fff);--color-active:var(--color);--color-focus:var(--color);--color-hover:var(--color);--box-shadow-color:var(--bkkr-text-color-rgb, 0, 0, 0);--box-shadow:0 15px 25px 0 rgba(var(--box-shadow-color, 0, 0, 0), 0.1), 0 6px 20px 0 rgba(var(--box-shadow-color, 0, 0, 0), 0.12), 0 13.2px 40px 0 rgba(var(--box-shadow-color, 0, 0, 0), 0.08);--transition:0.2s transform cubic-bezier(0.25, 1.11, 0.78, 1.59), 0.2s box-shadow cubic-bezier(0.25, 1.11, 0.78, 1.59);--transform:translateZ(0);margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;display:block;width:56px;height:56px;outline:none;font-size:14px;text-align:center;text-overflow:ellipsis;text-transform:none;white-space:nowrap;-webkit-font-kerning:none;font-kerning:none}.button-native{border-radius:var(--border-radius);padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);color:inherit;font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-align:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;white-space:inherit;display:block;position:relative;width:100%;height:100%;-webkit-transform:var(--transform);transform:var(--transform);-webkit-transition:var(--transition);transition:var(--transition);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);outline:none;background:var(--background);background-clip:padding-box;color:var(--color);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);contain:strict;cursor:pointer;overflow:hidden;z-index:0;-webkit-appearance:none;-moz-appearance:none;appearance:none;will-change:transform, box-shadow;-webkit-box-sizing:border-box;box-sizing:border-box}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.button-native{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.button-native::-moz-focus-inner{border:0}.button-inner{top:0;right:0;left:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;height:100%;z-index:1}.button-native::after{top:0;right:0;bottom:0;left:0;position:absolute;content:"";opacity:0;-webkit-transition:0.2s opacity cubic-bezier(0.32, 0.72, 0, 1);transition:0.2s opacity cubic-bezier(0.32, 0.72, 0, 1)}@media (any-hover: hover){:host(:hover) .button-native{color:var(--color-hover)}:host(:hover) .button-native::after{background:var(--background-hover);opacity:var(--background-hover-opacity)}}:host(:focus) .button-native,:host(.state-focused) .button-native{color:var(--color-focus)}:host(:focus) .button-native::after,:host(.state-focused) .button-native::after{background:var(--background-focus);opacity:var(--background-focus-opacity)}:host(:active),:host(.state-activated){--box-shadow:0 3px 5px 0 rgba(var(--box-shadow-color, 0, 0, 0), 0.1), 0 6px 10px 0 rgba(var(--box-shadow-color, 0, 0, 0), 0.12), 0 1.2px 20px 0 rgba(var(--box-shadow-color, 0, 0, 0), 0.08);--transform:scale3d(0.97, 0.97, 1);--transition:0.2s transform ease-out, 0.2s box-shadow ease-out}:host(:active) .button-native,:host(.state-activated) .button-native{color:var(--color-active)}:host(:active) .button-native::after,:host(.state-activated) .button-native::after{background:var(--background-active);opacity:var(--background-active-opacity)}:host(:disabled),:host(.state-disabled){cursor:default;opacity:0.5;pointer-events:none}:host(.bkkr-color){--box-shadow-color:var(--color-base-rgb)}:host(.bkkr-color) .button-native{background:var(--color-base);color:var(--color-contrast)}::slotted(bkkr-icon){font-size:28px;line-height:1}:host(.fab-button-small){margin-left:8px;margin-right:8px;margin-top:8px;margin-bottom:8px;width:40px;height:40px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host(.fab-button-small){margin-left:unset;margin-right:unset;-webkit-margin-start:8px;margin-inline-start:8px;-webkit-margin-end:8px;margin-inline-end:8px}}';export{b as bkkr_fab_button}