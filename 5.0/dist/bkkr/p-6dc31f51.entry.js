import{r as t,e as o,h as r,H as a,g as i}from"./p-ef4d1f35.js";import{h as n,s as e}from"./p-09b2e663.js";const s=class{constructor(r){t(this,r),this.bkkrFocus=o(this,"bkkrFocus",7),this.bkkrBlur=o(this,"bkkrBlur",7),this.activated=!1,this.disabled=!1,this.show=!1,this.type="button",this.onFocus=()=>{this.bkkrFocus.emit()},this.onBlur=()=>{this.bkkrBlur.emit()}}render(){const{el:t,disabled:o,color:i,href:s,activated:c,show:b,size:d}=this,l=n("bkkr-fab-list",t),p=void 0===s?"button":"a",h="button"===p?{type:this.type}:{download:this.download,href:s,rel:this.rel,target:this.target};return r(a,{"aria-disabled":o?"true":null,class:e(i,{"fab-button-in-list":l,"fab-button-close-active":c,"fab-button-show":b,"fab-button-disabled":o,"bkkr-activatable":!0,"bkkr-focusable":!0,["fab-button-"+d]:void 0!==d})},r(p,Object.assign({},h,{class:"button-native",part:"native",disabled:o,onFocus:this.onFocus,onBlur:this.onBlur}),r("span",{class:"button-inner"},r("slot",null))))}get el(){return i(this)}};s.style=':host{--color-activated:var(--color);--color-focused:var(--color);--color-hover:var(--color);--background-hover:var(--color-contrast, var(--color-primary-contrast, #fff));--background-hover-opacity:.08;--transition:background-color, opacity 100ms linear;--border-radius:50%;--border-width:0;--border-style:none;--border-color:initial;--padding-top:0;--padding-end:0;--padding-bottom:0;--padding-start:0;--background:var(--color-base, var(--color-primary, #3880ff));--background-activated:var(--color-shade, var(--color-primary-shade, #3171e0));--background-focused:var(--color-shade, var(--color-primary-shade, #3171e0));--background-hover:var(--color-tint, var(--color-primary-tint, #4c8dff));--background-activated-opacity:1;--background-focused-opacity:1;--background-hover-opacity:1;--color:var(--color-contrast, var(--color-primary-contrast, #fff));--box-shadow:0 4px 12px rgba(var(--color-base-rgb, var(--color-primary-rgb, 56, 128, 255)), 0.64);--transition:0.2s transform cubic-bezier(0.25, 1.11, 0.78, 1.59);margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;display:block;width:56px;height:56px;font-size:14px;text-align:center;text-overflow:ellipsis;text-transform:none;white-space:nowrap;-webkit-font-kerning:none;font-kerning:none}:host(.bkkr-activated){--box-shadow:0 4px 12px rgba(var(--color-base-rgb, var(--color-primary-rgb, 56, 128, 255)), 0.64);--transform:scale(1.1);--transition:0.2s transform ease-out}.button-native{border-radius:var(--border-radius);padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);color:inherit;font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-align:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;white-space:inherit;display:block;position:relative;width:100%;height:100%;-webkit-transform:var(--transform);transform:var(--transform);-webkit-transition:var(--transition);transition:var(--transition);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);outline:none;background:var(--background);background-clip:padding-box;color:var(--color);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);contain:strict;cursor:pointer;overflow:hidden;z-index:0;-webkit-appearance:none;-moz-appearance:none;appearance:none;-webkit-box-sizing:border-box;box-sizing:border-box}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.button-native{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}::slotted(bkkr-icon){font-size:28px;line-height:1}.button-native::after{top:0;right:0;bottom:0;left:0;position:absolute;content:"";opacity:0}.button-inner{top:0;right:0;left:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;height:100%;-webkit-transition:all ease-in-out 300ms;transition:all ease-in-out 300ms;-webkit-transition-property:opacity, -webkit-transform;transition-property:opacity, -webkit-transform;transition-property:transform, opacity;transition-property:transform, opacity, -webkit-transform;z-index:1}:host(.fab-button-disabled){cursor:default;opacity:0.5;pointer-events:none}@media (any-hover: hover){:host(:hover) .button-native{color:var(--color-hover)}:host(:hover) .button-native::after{background:var(--background-hover);opacity:var(--background-hover-opacity)}}:host(.bkkr-focused) .button-native{color:var(--color-focused)}:host(.bkkr-focused) .button-native::after{background:var(--background-focused);opacity:var(--background-focused-opacity)}:host(.bkkr-activated) .button-native{color:var(--color-activated)}:host(.bkkr-activated) .button-native::after{background:var(--background-activated);opacity:var(--background-activated-opacity)}::slotted(bkkr-icon){line-height:1}:host(.fab-button-small){margin-left:8px;margin-right:8px;margin-top:8px;margin-bottom:8px;width:40px;height:40px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host(.fab-button-small){margin-left:unset;margin-right:unset;-webkit-margin-start:8px;margin-inline-start:8px;-webkit-margin-end:8px;margin-inline-end:8px}}:host(.fab-button-close-active) .close-icon{-webkit-transform:scale(1) rotateZ(0deg);transform:scale(1) rotateZ(0deg);opacity:1}:host(.fab-button-close-active) .button-inner{-webkit-transform:scale(0.4) rotateZ(45deg);transform:scale(0.4) rotateZ(45deg);opacity:0}:host(.bkkr-color) .button-native{background:var(--color-base);color:var(--color-contrast)}:host(.bkkr-color.bkkr-focused) .button-native::after{background:var(--color-shade)}:host(.bkkr-color.bkkr-focused) .button-native,:host(.bkkr-color.bkkr-activated) .button-native{color:var(--color-contrast)}:host(.bkkr-color.bkkr-focused) .button-native::after,:host(.bkkr-color.bkkr-activated) .button-native::after{background:var(--color-shade)}@media (any-hover: hover){:host(.bkkr-color:hover) .button-native{color:var(--color-contrast)}:host(.bkkr-color:hover) .button-native::after{background:var(--color-tint)}}';export{s as bkkr_fab_button}