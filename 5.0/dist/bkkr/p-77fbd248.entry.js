import{r as t,e as o,h as e,H as r,g as a}from"./p-8dfd188c.js";import{o as i,n,i as s,f as c,d as l,e as d}from"./p-63696788.js";import{p as h,d as b,a as p}from"./p-65134490.js";import{s as u,h as v}from"./p-c50c697b.js";const g=class{constructor(e){t(this,e),this.bkkrFocus=o(this,"bkkrFocus",7),this.bkkrBlur=o(this,"bkkrBlur",7),this.inItem=!1,this.inToolbar=!1,this.inheritedAttributes={},this.disabled=!1,this.routerDirection="forward",this.type="button",this.handleClick=t=>{if("button"===this.type)i(this.href,t,this.routerDirection);else if(n(this.el)){const o=this.el.closest("form");if(o){t.preventDefault();const e=document.createElement("button");e.type=this.type,e.style.display="none",o.appendChild(e),e.click(),e.remove()}}},this.onFocus=()=>{this.bkkrFocus.emit()},this.onBlur=()=>{this.bkkrBlur.emit()}}componentWillLoad(){this.inToolbar=!!this.el.closest("bkkr-toolbar"),this.inItem=!!this.el.closest("bkkr-item")||!!this.el.closest("ion-item-divider"),this.inheritedAttributes=s(this.el,["aria-label"])}get hasIconOnly(){return!!this.el.querySelector('[slot="icon-only"]')}render(){const{type:t,disabled:o,rel:a,target:i,size:n,href:s,hasIconOnly:c,inToolbar:l,inheritedAttributes:d,color:h,expand:b,shape:p}=this,g=void 0===s?"button":"a",k="button"===g?{type:t}:{download:this.download,href:s,rel:a,target:i};let f=this.fill;return void 0===f&&(f=this.inToolbar?"clear":"solid"),e(r,{onClick:this.handleClick,"aria-disabled":o?"true":null,class:u(h,{[`button-${b}`]:void 0!==b,[`button-${n}`]:void 0!==(void 0===n&&this.inItem?"small":n),[`button-${p}`]:void 0!==p,[`button-${f}`]:!0,"button-color":void 0!==h,"button-toolbar":l,"button-toolbar-color":v("bkkr-toolbar[color]",this.el),"button-has-icon-only":c,"state-disabled":o,"state-activatable":!0,"state-focusable":!0})},e(g,Object.assign({},k,{part:"native",disabled:o,class:"button-native",onFocus:this.onFocus,onBlur:this.onBlur},d),e("slot",{name:"start"}),e("span",{class:"button-inner"},e("slot",{name:"icon-only"}),e("slot",null)),e("slot",{name:"end"})))}get el(){return a(this)}};g.style=':host{--overflow:initial;--ripple-color:currentColor;--background:transparent;--background-opacity:1;--border-width:0;--border-color:transparent;--border-style:solid;--border-radius:1em;--color-active:var(--color);--color-focus:var(--color);--color-hover:var(--color);--box-shadow:none;--padding-top:0;--padding-start:0.9em;--padding-end:0.9em;--padding-bottom:0;--height:2.8em;--transition:0.2s transform cubic-bezier(0.25, 1.11, 0.78, 1.59), 0.2s box-shadow cubic-bezier(0.25, 1.11, 0.78, 1.59);--transform:translateZ(0);display:inline-block;width:auto;height:var(--height);outline:0;color:var(--color);font-family:var(--default-font-sans-serif);font-weight:600;line-height:1;text-align:center;text-decoration:none;text-overflow:ellipsis;white-space:nowrap;cursor:pointer;overflow:var(--overflow);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;vertical-align:top;vertical-align:-webkit-baseline-middle;pointer-events:auto;-webkit-font-kerning:none;font-kerning:none}.button-native{-webkit-transition:var(--transition);transition:var(--transition);padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);border-radius:var(--border-radius);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);color:inherit;font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-align:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;white-space:inherit;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-align:center;align-items:center;width:100%;height:100%;-webkit-transform:var(--transform);transform:var(--transform);transition:var(--transition);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);outline:none;background:var(--background);color:currentColor;cursor:pointer;opacity:var(--opacity);overflow:hidden;z-index:0;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-appearance:none;-moz-appearance:none;appearance:none}@media (prefers-reduced-motion: reduce){.button-native{-webkit-transition:none;transition:none}}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.button-native{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.button-native::-moz-focus-inner{border:0}.button-inner{display:-ms-flexbox;display:flex;position:relative;-ms-flex:1;flex:1;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;z-index:1}:host(.button-clear){--background-active:var(--bkkr-text-color, #000);--background-focus:var(--bkkr-text-color, #000);--background-hover:var(--bkkr-text-color, #000);--background-active-opacity:.1;--background-focus-opacity:.04;--background-hover-opacity:.04;--color:var(--bkkr-text-color, #000)}:host(.button-outline){--border-width:3px;--background-active:var(--bkkr-text-color, #000);--background-focus:var(--bkkr-text-color, #000);--background-hover:var(--bkkr-text-color, #000);--background-active-opacity:.1;--background-focus-opacity:.04;--background-hover-opacity:.04;--border-color:var(--bkkr-text-color, #000);--color:var(--bkkr-text-color, #000)}:host(.button-solid){--background:var(--bkkr-text-color, #000);--background-active:var(--bkkr-background-color, #fff);--background-focus:var(--bkkr-background-color, #fff);--background-hover:var(--bkkr-background-color, #fff);--background-active-opacity:.1;--background-focus-opacity:.04;--background-hover-opacity:.04;--color:var(--bkkr-background-color, #fff);--box-shadow-color:var(--bkkr-text-color-rgb, 0, 0, 0);--box-shadow:0 3px 5px 0 rgba(var(--box-shadow-color, 0, 0, 0), 0.1), 0 6px 10px 0 rgba(var(--box-shadow-color, 0, 0, 0), 0.12), 0 1.2px 20px 0 rgba(var(--box-shadow-color, 0, 0, 0), 0.08);--box-shadow-active:0 1.5px 2.5px 0 rgba(var(--box-shadow-color, 0, 0, 0), 0.1), 0 6px 5px 0 rgba(var(--box-shadow-color, 0, 0, 0), 0.12), 0 0.6px 10px 0 rgba(var(--box-shadow-color, 0, 0, 0), 0.08)}:host(.button-block){display:block}:host(.button-block) .button-native{width:100%;contain:content}:host(.button-large){--border-radius:1em;--padding-top:0;--padding-start:1em;--padding-end:1em;--padding-bottom:0;height:2.8em;font-size:20px}:host(.button-small){--border-radius:0.75em;--padding-top:0;--padding-start:calc(var(--bkkr-spacer, 16px) - 4px);--padding-end:calc(var(--bkkr-spacer, 16px) - 4px);--padding-bottom:0;height:2.1em;font-size:13px}.button-native::after{top:0;right:0;bottom:0;left:0;position:absolute;content:"";opacity:0;-webkit-transition:0.2s opacity cubic-bezier(0.32, 0.72, 0, 1);transition:0.2s opacity cubic-bezier(0.32, 0.72, 0, 1)}@media (any-hover: hover){:host(:hover) .button-native{color:var(--color-hover)}:host(:hover) .button-native::after{background:var(--background-hover);opacity:var(--background-hover-opacity)}}:host(:focus) .button-native,:host(.state-focused) .button-native{color:var(--color-focus)}:host(:focus) .button-native::after,:host(.state-focused) .button-native::after{background:var(--background-focus);opacity:var(--background-focus-opacity)}:host(:active),:host(.state-activated){--box-shadow:var(--box-shadow-active);--transform:scale3d(0.97, 0.97, 1);--transition:0.2s transform ease-out, 0.2s box-shadow ease-out}:host(:active) .button-native,:host(.state-activated) .button-native{color:var(--color-active)}:host(:active) .button-native::after,:host(.state-activated) .button-native::after{background:var(--background-active);opacity:var(--background-active-opacity)}:host(:disabled),:host(.state-disabled){cursor:default;opacity:0.5;pointer-events:none}:host(.button-solid.button-color){--background:var(--color-base);--background-active:var(--color-contrast);--background-focus:var(--color-contrast);--background-hover:var(--color-contrast);--color:var(--color-contrast);--box-shadow-color:var(--color-base-rgb)}:host(.button-outline.button-color){--background-active:var(--color-base);--background-focus:var(--color-base);--background-hover:var(--color-base);--border-color:var(--color-base);--color:var(--color-base)}:host(.button-clear.button-color){--background-active:var(--color-base);--background-focus:var(--color-base);--background-hover:var(--color-base);--color:var(--color-base)}:host(.button-toolbar){--padding-start:calc(var(--bkkr-spacer, 16px) - 4px);--padding-end:calc(var(--bkkr-spacer, 16px) - 4px);--height:2.1em;--border-radius:0.75em}.button-toolbar-color:not([color]){--background-active:rgba(var(--color-contrast-rgb), var(--background-active-opacity));--background-focus:rgba(var(--color-contrast-rgb), var(--background-focus-opacity));--background-hover:rgba(var(--color-contrast-rgb), var(--background-hover-opacity))}:host(.button-toolbar:not([color])) .button-native{color:var(--color-contrast, var(--color))}:host(.button-outline.button-toolbar:not([color])) .button-native{border-color:var(--bkkr-toolbar-color, var(--color, var(--border-color)))}:host(.button-solid.button-toolbar:not([color])) .button-native{background:var(--bkkr-toolbar-color, var(--background));color:var(--bkkr-toolbar-background, var(--color))}@media (prefers-reduced-motion: reduce){.button-native{-webkit-transform:none;transform:none;-webkit-transition:none;transition:none}}';const k=(t,o)=>{if(1===t.nodeType)return(t.tagName===o.toUpperCase()?[t]:Array.from(t.querySelectorAll(o))).find((o=>o.value===t.value))},f=class{constructor(e){t(this,e),this.bkkrSearch=o(this,"bkkrSearch",7),this.bkkrChange=o(this,"bkkrChange",7),this.bkkrOpen=o(this,"bkkrOpen",7),this.bkkrCancel=o(this,"bkkrCancel",7),this.bkkrFocus=o(this,"bkkrFocus",7),this.bkkrBlur=o(this,"bkkrBlur",7),this.bkkrStyle=o(this,"bkkrStyle",7),this.didInit=!1,this.inputId="bkkr-sel-"+O++,this.hasFocus=!1,this.isExpanded=!1,this.cancelText="Cancel",this.okText="OK",this.multiple=!1,this.name=this.inputId,this.disabled=!1,this.interface="drawer",this.search=!0,this.interfaceOptions={},this.onClick=t=>{this.setFocus(),this.open(t)},this.onFocus=()=>{this.bkkrFocus.emit()},this.onBlur=()=>{this.bkkrBlur.emit()}}disabledChanged(){this.emitStyle()}valueChanged(){this.emitStyle(),this.didInit&&this.bkkrChange.emit({value:this.value})}componentDidLoad(){this.didInit=!0}connectedCallback(){this.updateOverlayOptions(),this.emitStyle(),this.mutationO=((t,o,e)=>{if("undefined"==typeof MutationObserver)return;const r=new MutationObserver((t=>{e(((t,o)=>{let e;t.forEach((t=>{for(let r=0;r<t.addedNodes.length;r++)e=k(t.addedNodes[r],o)||e}))})(t,"bkkr-select-option"))}));return r.observe(t,{childList:!0,subtree:!0}),r})(this.el,0,(async()=>{this.updateOverlayOptions()}))}disconnectedCallback(){this.mutationO&&(this.mutationO.disconnect(),this.mutationO=void 0)}async open(t){if(this.disabled||this.isExpanded)return;this.bkkrOpen.emit();const o=this.overlay=await this.createOverlay(t);return this.overlay.addEventListener("bkkrSelectDidSearch",(t=>this.emitSearch(t))),this.overlay.addEventListener("bkkrSelectDidReset",(()=>this.reset())),this.isExpanded=!0,this.hasFocus=!0,this.emitStyle(),o.onDidDismiss().then((()=>{this.overlay.removeEventListener("bkkrSelectDidSearch",(t=>this.emitSearch(t))),this.overlay.removeEventListener("bkkrSelectDidReset",(()=>this.reset())),this.overlay=void 0,this.isExpanded=!1,this.hasFocus=!1,this.emitStyle(),this.setFocus(),this.bkkrCancel.emit()})),await o.present(),o}emitSearch(t){this.didInit&&this.bkkrSearch.emit({value:t.detail.detail.value})}updateOverlayOptions(){const t=this.overlay;if(!t)return;const o=this.childOpts,e=this.value;switch(this.interface){case"popover":const r=t.querySelector("bkkr-select-choices");r&&(r.options=this.createChoicesOptions(o,e));break;case"drawer":const a=t.querySelector("bkkr-select-choices");a&&(a.options=this.createChoicesOptions(o,e));break;case"alert":t.inputs=this.createAlertInputs(o,this.multiple?"checkbox":"radio",e)}}createOverlay(t){let o=this.interface;return"popover"!==o||t||(console.warn('Select interface cannot be a "popover" without passing an event. Using the "alert" interface instead.'),o="alert"),"drawer"!==o||t||(console.warn('Select interface cannot be a "drawer" without passing an event. Using the "alert" interface instead.'),o="alert"),"popover"===o?this.openPopover(t):"alert"===o?this.openAlert():this.openDrawer(t)}async openPopover(t){const o=this.interfaceOptions,e=this.value,r=Object.assign(Object.assign({},o),{component:"bkkr-select-choices",cssClass:["select-popover",o.cssClass],event:t,componentProps:{header:o.header,subHeader:o.subHeader,search:this.search,value:e,options:this.createChoicesOptions(this.childOpts,e)}});return h.create(r)}async openDrawer(t){const o=this.interfaceOptions,e=this.value,r=Object.assign(Object.assign({},o),{component:"bkkr-select-choices",cssClass:["select-drawer",o.cssClass],event:t,componentProps:{header:o.header,subHeader:o.subHeader,search:this.search,multiple:this.multiple,interfaceOptions:this.interfaceOptions,value:e,options:this.createChoicesOptions(this.childOpts,e)}});return b.create(r)}createChoicesOptions(t,o){return t.map((t=>{const e=m(t),r=Array.from(t.classList).filter((t=>"hydrated"!==t)).join(" ");return{label:t.textContent||"",cssClass:`${j} ${r}`,value:e,selected:x(e,o,this.compareWith),disabled:t.disabled,handler:t=>{this.value=t,this.multiple||this.close()}}}))}async openAlert(){const t=this.getLabel(),o=t?t.textContent:null,e=this.interfaceOptions,r=this.multiple?"checkbox":"radio",a=Object.assign(Object.assign({},e),{header:e.header?e.header:o,inputs:this.createAlertInputs(this.childOpts,r,this.value),buttons:[{text:this.cancelText,role:"cancel",handler:()=>{this.bkkrCancel.emit()}},{text:this.okText,handler:t=>{this.value=t}}],cssClass:["select-alert",e.cssClass,this.multiple?"multiple-select-alert":"single-select-alert"]});return p.create(a)}createAlertInputs(t,o,e){return t.map((t=>{const r=m(t),a=Array.from(t.classList).filter((t=>"hydrated"!==t)).join(" ");return{type:o,cssClass:`${j} ${a}`,label:t.textContent||"",value:r,checked:x(r,e,this.compareWith),disabled:t.disabled}}))}close(){return this.overlay?(this.hasFocus=!1,this.emitStyle(),this.overlay.dismiss()):Promise.resolve(!1)}reset(){this.value=this.multiple?[]:null,this.multiple||this.close()}getLabel(){return c(this.el)}hasValue(){return""!==this.getText()}get childOpts(){return Array.from(this.el.querySelectorAll("bkkr-select-option"))}getText(){const t=this.selectedText;return null!=t&&""!==t?t:z(this.childOpts,this.value,this.compareWith)}setFocus(){this.focusEl&&this.focusEl.focus()}emitStyle(){this.bkkrStyle.emit({interactive:!0,input:!0,select:!0,"has-placeholder":null!=this.placeholder,"has-value":this.hasValue(),"has-focus":this.hasFocus,"interactive-disabled":this.disabled,"select-disabled":this.disabled})}render(){const{disabled:t,el:o,inputId:a,isExpanded:i,name:n,placeholder:s,value:c}=this,{labelText:h,labelId:b}=l(o,a);d(!0,o,n,w(c),t);let p=!1,u=this.getText();""===u&&null!=s&&(u=s,p=!0);const g={"select-text":!0,"select-placeholder":p},k=p?"placeholder":"text",f=void 0!==h?""!==u?`${u}, ${h}`:h:u;return e(r,{onClick:this.onClick,role:"button","aria-haspopup":"listbox","aria-disabled":t?"true":null,"aria-label":f,class:{"in-item":v("bkkr-item",o),"select-disabled":t,"has-value":this.hasValue(),"has-focus":this.hasFocus}},e("div",{"aria-hidden":"true",class:g,part:k},u),e("div",{class:"select-icon",role:"presentation",part:"icon"},e("div",{class:"select-icon-inner"})),e("label",{id:b},f),e("button",{type:"button",disabled:t,id:a,"aria-labelledby":b,"aria-haspopup":"listbox","aria-expanded":`${i}`,onFocus:this.onFocus,onBlur:this.onBlur,ref:t=>this.focusEl=t}))}get el(){return a(this)}static get watchers(){return{disabled:["disabledChanged"],placeholder:["disabledChanged"],value:["valueChanged"]}}},x=(t,o,e)=>void 0!==t&&(Array.isArray(t)?t.some((t=>y(t,o,e))):y(t,o,e)),m=t=>{const o=t.value;return void 0===o?t.textContent||"":o},w=t=>{if(null!=t)return Array.isArray(t)?t.join(","):t.toString()},y=(t,o,e)=>"function"==typeof e?e(t,o):"string"==typeof e?t[e]===o[e]:Array.isArray(o)?o.includes(t):t===o,z=(t,o,e)=>void 0===o?"":Array.isArray(o)?o.map((o=>C(t,o,e))).filter((t=>null!==t)).join(", "):C(t,o,e)||"",C=(t,o,e)=>{const r=t.find((t=>y(m(t),o,e)));return r?r.textContent:null};let O=0;const j="select-interface-option";f.style=":host{--placeholder-color:initial;--padding-top:10px;--padding-end:calc(var(--bkkr-spacer, 16px) / 2);--padding-bottom:10px;--padding-start:var(--bkkr-spacer, 16px);padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);display:-ms-flexbox;display:flex;position:relative;-ms-flex-align:center;align-items:center;width:auto;font-family:var(--default-font-sans-serif);overflow:hidden;z-index:2}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}:host(.in-item){position:static;max-width:45%}:host(.select-disabled){opacity:0.4;pointer-events:none}:host(.state-focused) button{border:2px solid #5e9ed6}.select-placeholder{-webkit-transition:var(--placeholder-transition, none);transition:var(--placeholder-transition, none);-webkit-transition-delay:var(--placeholder-transition-delay, none);transition-delay:var(--placeholder-transition-delay, none);color:var(--placeholder-color);opacity:var(--placeholder-opacity, 0.5)}label{top:0;left:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;position:absolute;width:100%;height:100%;border:0;outline:none;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;opacity:0}label::-moz-focus-inner{border:0}button{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;margin:0;padding:0;border:0;outline:0;opacity:0;overflow:hidden;clip:rect(0 0 0 0);-webkit-appearance:none;-moz-appearance:none;appearance:none}.select-icon{margin-left:var(--bkkr-spacer);position:relative;width:12px;height:18px;opacity:0.33}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.select-icon{margin-left:unset;-webkit-margin-start:var(--bkkr-spacer);margin-inline-start:var(--bkkr-spacer)}}.select-text{-ms-flex:1;flex:1;min-width:16px;font-size:inherit;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.select-icon-inner{top:50%;left:0;margin-top:-2px;position:absolute;width:0;height:0;border-top:5px solid;border-right:5px solid transparent;border-left:5px solid transparent;color:currentColor;pointer-events:none}";const S=class{constructor(o){t(this,o),this.inputId="bkkr-select-opt-"+A++,this.disabled=!1}render(){return e(r,{role:"option",id:this.inputId})}get el(){return a(this)}};let A=0;S.style=":host{display:none}";export{g as bkkr_button,f as bkkr_select,S as bkkr_select_option}