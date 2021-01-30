import{c as t,r,e,f as a,h as i,H as o,g as n}from"./p-8dbe4215.js";import"./p-5527b9e6.js";import{c as l}from"./p-d4f97589.js";import"./p-fcb88322.js";import{c as s}from"./p-0e6599a5.js";import{s as d}from"./p-70b25770.js";import{B as c,i as b,b as p,c as k,e as h,f as g}from"./p-f7fedd36.js";import{g as u}from"./p-09b2e663.js";const x=(t,r)=>{const e=l().addElement(t.querySelector("bkkr-backdrop")).fromTo("opacity",0,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),a=l().addElement(t.querySelectorAll(".alert-wrapper, .alert-shadow")).beforeStyles({opacity:1}).fromTo("transform","translateY(100vh)","translateY(0vh)"),i=l().addElement(t).easing("cubic-bezier(0.32,0.72,0,1)").duration(500).addAnimation(a);if(r){const t=l().beforeStyles({transform:"translateY(0)","transform-origin":"top center",overflow:"hidden"});t.addElement(r),i.addAnimation(t)}return i.addAnimation(e),i},m=(t,r,e=500)=>{const a=l().addElement(t.querySelector("bkkr-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0),i=l().addElement(t.querySelectorAll(".alert-wrapper, .alert-shadow")).beforeStyles({opacity:1}).fromTo("transform","translateY(0vh)","translateY(100vh)"),o=l().addElement(t).easing("cubic-bezier(0.32,0.72,0,1)").duration(e).addAnimation(i);if(r){const t=l().beforeClearStyles(["transform"]).afterClearStyles(["transform"]).onFinish((t=>{1===t&&r.style.setProperty("overflow","")}));o.addAnimation(t)}return o.addAnimation(a),o},f=class{constructor(t){r(this,t),this.didPresent=e(this,"alertDidPresent",7),this.willPresent=e(this,"alertWillPresent",7),this.willDismiss=e(this,"alertWillDismiss",7),this.didDismiss=e(this,"alertDidDismiss",7),this.processedInputs=[],this.processedButtons=[],this.presented=!1,this.keyboardClose=!0,this.buttons=[],this.inputs=[],this.backdropDismiss=!0,this.animated=!0,this.onBackdropTap=()=>{this.dismiss(void 0,c)},this.dispatchCancelHandler=t=>{if(b(t.detail.role)){const t=this.processedButtons.find((t=>"cancel"===t.role));this.callButtonHandler(t)}}}onKeydown(t){if(!new Set(this.processedInputs.map((t=>t.type))).has("radio")||t.target&&!this.el.contains(t.target)||t.target.classList.contains("alert-button"))return;const r=this.el.querySelectorAll(".alert-radio"),e=Array.from(r).filter((t=>!t.disabled)),a=e.findIndex((r=>r.id===t.target.id));let i;if(["ArrowDown","ArrowRight"].includes(t.code)&&(i=a===e.length-1?e[0]:e[a+1]),["ArrowUp","ArrowLeft"].includes(t.code)&&(i=0===a?e[e.length-1]:e[a-1]),i&&e.includes(i)){const t=this.processedInputs.find((t=>t.id===(null==i?void 0:i.id)));t&&(this.rbClick(t),i.focus())}}buttonsChanged(){this.processedButtons=this.buttons.map((t=>"string"==typeof t?{text:t,role:"cancel"===t.toLowerCase()?"cancel":void 0}:t))}inputsChanged(){const t=this.inputs,r=t.find((t=>!t.disabled)),e=t.find((t=>t.checked&&!t.disabled))||r,a=new Set(t.map((t=>t.type)));a.has("checkbox")&&a.has("radio")&&console.warn(`Alert cannot mix input types: ${Array.from(a.values()).join("/")}. Please see alert docs for more info.`),this.inputType=a.values().next().value,this.processedInputs=t.map(((t,r)=>({type:t.type||"text",name:t.name||""+r,placeholder:t.placeholder||"",value:t.value,label:t.label,checked:!!t.checked,disabled:!!t.disabled,id:t.id||`alert-input-${this.overlayIndex}-${r}`,handler:t.handler,min:t.min,max:t.max,cssClass:t.cssClass||"",attributes:t.attributes||{},tabindex:"radio"===t.type&&t!==e?-1:0})))}connectedCallback(){p(this.el)}componentWillLoad(){this.inputsChanged(),this.buttonsChanged()}disconnectedCallback(){this.gesture&&(this.gesture.destroy(),this.gesture=void 0)}componentDidLoad(){!this.gesture&&this.wrapperEl&&(this.gesture=(()=>{let r,e;const a=(t,e)=>{if("undefined"==typeof document)return;const a=document.elementFromPoint(t,e);a&&a.classList.contains("alert-button")?a!==r&&(o(),i(a)):o()},i=a=>{r=a,e||(e=r);const i=r;t((()=>i.classList.add("ion-activated")))},o=(a=!1)=>{if(!r)return;const i=r;t((()=>i.classList.remove("ion-activated"))),a&&e!==r&&r.click(),r=void 0};return s({el:this.wrapperEl,gestureName:"buttonActiveDrag",threshold:0,onStart:t=>a(t.currentX,t.currentY),onMove:t=>a(t.currentX,t.currentY),onEnd:()=>{o(!0),e=void 0}})})(),this.gesture.enable(!0))}present(){return k(this,x)}dismiss(t,r){return h(this,t,r,m)}onDidDismiss(){return g(this.el,"alertDidDismiss")}onWillDismiss(){return g(this.el,"alertWillDismiss")}rbClick(t){for(const r of this.processedInputs)r.checked=r===t,r.tabindex=r===t?0:-1;this.activeId=t.id,t.handler&&t.handler(t),a(this)}cbClick(t){t.checked=!t.checked,t.handler&&t.handler(t),a(this)}buttonClick(t){const r=t.role,e=this.getValues();if(b(r))return this.dismiss({values:e},r);const a=this.callButtonHandler(t,e);return!1!==a?this.dismiss(Object.assign({values:e},a),t.role):Promise.resolve(!1)}callButtonHandler(t,r){if(t&&t.handler){const e=t.handler(r);if(!1===e)return!1;if("object"==typeof e)return e}return{}}getValues(){if(0===this.processedInputs.length)return;if("radio"===this.inputType){const t=this.processedInputs.find((t=>!!t.checked));return t?t.value:void 0}if("checkbox"===this.inputType)return this.processedInputs.filter((t=>t.checked)).map((t=>t.value));const t={};return this.processedInputs.forEach((r=>{t[r.name]=r.value||""})),t}renderAlertInputs(){switch(this.inputType){case"checkbox":return this.renderCheckbox();case"radio":return this.renderRadio();default:return this.renderInput()}}renderCheckbox(){const t=this.processedInputs;return 0===t.length?null:i("div",{class:"alert-checkbox-group"},t.map((t=>i("button",{type:"button",onClick:()=>this.cbClick(t),"aria-checked":""+t.checked,id:t.id,disabled:t.disabled,tabIndex:t.tabindex,role:"checkbox",class:Object.assign(Object.assign({},u(t.cssClass)),{"alert-tappable":!0,"alert-checkbox":!0,"alert-checkbox-button":!0,"bkkr-focusable":!0,"alert-checkbox-button-disabled":t.disabled||!1})},i("div",{class:"alert-button-inner"},i("div",{class:"alert-checkbox-icon"},i("div",{class:"alert-checkbox-inner"})),i("div",{class:"alert-checkbox-label"},t.label))))))}renderRadio(){const t=this.processedInputs;return 0===t.length?null:i("div",{class:"alert-radio-group",role:"radiogroup","aria-activedescendant":this.activeId},t.map((t=>i("button",{type:"button",onClick:()=>this.rbClick(t),"aria-checked":""+t.checked,disabled:t.disabled,id:t.id,tabIndex:t.tabindex,class:Object.assign(Object.assign({},u(t.cssClass)),{"alert-radio-button":!0,"alert-tappable":!0,"alert-radio":!0,"bkkr-focusable":!0,"alert-radio-button-disabled":t.disabled||!1}),role:"radio"},i("div",{class:"alert-button-inner"},i("div",{class:"alert-radio-icon"},i("div",{class:"alert-radio-inner"})),i("div",{class:"alert-radio-label"},t.label))))))}renderInput(){const t=this.processedInputs;return 0===t.length?null:i("div",{class:"alert-input-group"},t.map((t=>{var r,e,a,o;return i("div",{class:"alert-input-wrapper"},"textarea"===t.type?i("textarea",Object.assign({placeholder:t.placeholder,value:t.value,id:t.id,tabIndex:t.tabindex},t.attributes,{disabled:null!==(e=null===(r=t.attributes)||void 0===r?void 0:r.disabled)&&void 0!==e?e:t.disabled,class:v(t),onInput:r=>{var e;t.value=r.target.value,(null===(e=t.attributes)||void 0===e?void 0:e.onInput)&&t.attributes.onInput(r)}})):i("input",Object.assign({placeholder:t.placeholder,type:t.type,min:t.min,max:t.max,value:t.value,id:t.id,tabIndex:t.tabindex},t.attributes,{disabled:null!==(o=null===(a=t.attributes)||void 0===a?void 0:a.disabled)&&void 0!==o?o:t.disabled,class:v(t),onInput:r=>{var e;t.value=r.target.value,(null===(e=t.attributes)||void 0===e?void 0:e.onInput)&&t.attributes.onInput(r)}})))})))}renderAlertButtons(){const t=this.processedButtons;return i("div",{class:{"alert-button-group":!0,"alert-button-group-vertical":t.length>2}},t.map((t=>i("button",{type:"button",class:w(t),tabIndex:0,onClick:()=>this.buttonClick(t)},i("span",{class:"alert-button-inner"},t.text)))))}render(){const{overlayIndex:t,header:r,subHeader:e}=this,a=`alert-${t}-hdr`,n=`alert-${t}-sub-hdr`,l=`alert-${t}-msg`;return i(o,{role:"dialog","aria-modal":"true",tabindex:"-1",style:{zIndex:""+(2e4+t)},class:Object.assign({},u(this.cssClass)),onBkkrAlertWillDismiss:this.dispatchCancelHandler,onBkkrBackdropTap:this.onBackdropTap},i("bkkr-backdrop",{tappable:this.backdropDismiss}),i("div",{tabindex:"0"}),i("div",{class:"alert-wrapper bkkr-overlay-wrapper",ref:t=>this.wrapperEl=t},i("div",{class:"alert-head"},r&&i("h2",{id:a,class:"alert-title"},r),e&&i("h2",{id:n,class:"alert-sub-title"},e)),i("div",{id:l,class:"alert-message",innerHTML:d(this.message)}),this.renderAlertInputs(),this.renderAlertButtons()),i("div",{tabindex:"0"}))}get el(){return n(this)}static get watchers(){return{buttons:["buttonsChanged"],inputs:["inputsChanged"]}}},v=t=>{var r,e,a;return Object.assign(Object.assign({"alert-input":!0,"alert-input-disabled":(null!==(e=null===(r=t.attributes)||void 0===r?void 0:r.disabled)&&void 0!==e?e:t.disabled)||!1},u(t.cssClass)),u(t.attributes?null===(a=t.attributes.class)||void 0===a?void 0:a.toString():""))},w=t=>Object.assign({"alert-button":!0,"bkkr-focusable":!0,"bkkr-activatable":!0,["alert-button-role-"+t.role]:void 0!==t.role},u(t.cssClass));f.style=".sc-bkkr-alert-h{--min-width:auto;--width:calc(100% - var(--bkkr-spacer, 16px));--min-height:auto;--height:auto;--max-height:90%;--background:var(--bkkr-background-color);--max-width:720px;--backdrop-opacity:var(--bkkr-backdrop-opacity, .3);--margin-bottom:calc(var(--bkkr-spacer, 16px) / 2);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;top:0;right:0;bottom:0;left:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-align:end;align-items:flex-end;-ms-flex-pack:center;justify-content:center;outline:none;font-family:var(--default-font-sans-serif);font-size:14px;contain:strict;-ms-touch-action:none;touch-action:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1001}.overlay-hidden.sc-bkkr-alert-h{display:none}.alert-top.sc-bkkr-alert-h{padding-top:50px;-ms-flex-align:start;align-items:flex-start}.alert-wrapper.sc-bkkr-alert{border-radius:32px;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);margin-bottom:var(--margin-bottom);background:var(--background);-webkit-box-shadow:none;box-shadow:none;contain:content;opacity:0;overflow:hidden;z-index:10}.alert-checkbox-group.sc-bkkr-alert::-webkit-scrollbar,.alert-radio-group.sc-bkkr-alert::-webkit-scrollbar,.alert-message.sc-bkkr-alert::-webkit-scrollbar{display:none}.alert-head.sc-bkkr-alert{padding-left:16px;padding-right:16px;padding-top:12px;padding-bottom:7px;text-align:left}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.alert-head.sc-bkkr-alert{padding-left:unset;padding-right:unset;-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px}}.alert-title.sc-bkkr-alert{margin-top:8px;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;color:var(--bkkr-text-color, #000);font-size:17px;font-weight:600}.alert-sub-title.sc-bkkr-alert{margin-left:0;margin-right:0;margin-top:5px;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;color:var(--bkkr-color-step-600, #666666);font-size:14px;font-weight:400}.alert-message.sc-bkkr-alert{padding-left:16px;padding-right:16px;padding-top:0;padding-bottom:21px;color:var(--bkkr-text-color, #000);font-size:13px;text-align:left;-webkit-box-sizing:border-box;box-sizing:border-box;overflow-y:auto;-webkit-overflow-scrolling:touch;overscroll-behavior-y:contain}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.alert-message.sc-bkkr-alert{padding-left:unset;padding-right:unset;-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px}}.alert-message.sc-bkkr-alert{max-height:240px}.alert-message.sc-bkkr-alert:empty{padding-left:0;padding-right:0;padding-top:0;padding-bottom:12px}.alert-input.sc-bkkr-alert{border-radius:4px;margin-top:10px;padding-left:6px;padding-right:6px;padding-top:6px;padding-bottom:6px;width:100%;border:0.55px solid var(--bkkr-color-step-250, #bfbfbf);background-color:var(--bkkr-background-color, #fff);-webkit-appearance:none;-moz-appearance:none;appearance:none}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.alert-input.sc-bkkr-alert{padding-left:unset;padding-right:unset;-webkit-padding-start:6px;padding-inline-start:6px;-webkit-padding-end:6px;padding-inline-end:6px}}.alert-input.sc-bkkr-alert::-webkit-input-placeholder{color:var(--bkkr-placeholder-color, var(--bkkr-color-step-400, #999999));font-family:inherit;font-weight:inherit}.alert-input.sc-bkkr-alert::-moz-placeholder{color:var(--bkkr-placeholder-color, var(--bkkr-color-step-400, #999999));font-family:inherit;font-weight:inherit}.alert-input.sc-bkkr-alert:-ms-input-placeholder{color:var(--bkkr-placeholder-color, var(--bkkr-color-step-400, #999999));font-family:inherit;font-weight:inherit}.alert-input.sc-bkkr-alert::-ms-input-placeholder{color:var(--bkkr-placeholder-color, var(--bkkr-color-step-400, #999999));font-family:inherit;font-weight:inherit}.alert-input.sc-bkkr-alert::placeholder{color:var(--bkkr-placeholder-color, var(--bkkr-color-step-400, #999999));font-family:inherit;font-weight:inherit}.alert-input.sc-bkkr-alert::-ms-clear{display:none}.alert-radio-group.sc-bkkr-alert,.alert-checkbox-group.sc-bkkr-alert{-ms-scroll-chaining:none;overscroll-behavior:contain;max-height:240px;border-top:1px solid rgba(var(--bkkr-text-color-rgb, 0, 0, 0), 0.2);overflow-y:auto;-webkit-overflow-scrolling:touch}.alert-tappable.sc-bkkr-alert{height:44px}.alert-checkbox.sc-bkkr-alert,.alert-radio.sc-bkkr-alert{cursor:pointer}@media (any-hover: hover){.alert-checkbox.sc-bkkr-alert:hover,.alert-radio.sc-bkkr-alert:hover{background-color:#eee}}.alert-radio-label.sc-bkkr-alert,.alert-checkbox-label.sc-bkkr-alert{padding-left:13px;padding-right:13px;padding-top:13px;padding-bottom:13px;-ms-flex:1;flex:1;-ms-flex-order:0;order:0;color:var(--bkkr-text-color, #000);text-overflow:ellipsis;white-space:nowrap;overflow:hidden}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.alert-radio-label.sc-bkkr-alert,.alert-checkbox-label.sc-bkkr-alert{padding-left:unset;padding-right:unset;-webkit-padding-start:13px;padding-inline-start:13px;-webkit-padding-end:13px;padding-inline-end:13px}}[aria-checked=true].sc-bkkr-alert .alert-radio-label.sc-bkkr-alert,[aria-checked=true].sc-bkkr-alert .alert-checkbox-label.sc-bkkr-alert{color:color-get(primary, base)}.alert-radio-icon.sc-bkkr-alert,.alert-checkbox-icon.sc-bkkr-alert{position:relative;-ms-flex-order:1;order:1;min-width:30px}[aria-checked=true].sc-bkkr-alert .alert-radio-inner.sc-bkkr-alert,[aria-checked=true].sc-bkkr-alert .alert-checkbox-inner.sc-bkkr-alert{top:-7px;left:7px;position:absolute;width:6px;height:12px;-webkit-transform:rotate(45deg);transform:rotate(45deg);border-width:2px;border-top-width:0;border-left-width:0;border-style:solid;border-color:color-get(primary, base)}.alert-button-group.sc-bkkr-alert{margin-right:-1px;display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap;width:100%}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.alert-button-group.sc-bkkr-alert{margin-right:unset;-webkit-margin-end:-1px;margin-inline-end:-1px}}.alert-button-group-vertical.sc-bkkr-alert{-ms-flex-direction:column;flex-direction:column;-ms-flex-wrap:nowrap;flex-wrap:nowrap}.alert-button.sc-bkkr-alert{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;border-radius:0;display:block;-ms-flex:1 1 auto;flex:1 1 auto;min-width:50%;height:44px;border:0;border-top:1px solid rgba(var(--bkkr-text-color-rgb, 0, 0, 0), 0.2);border-right:1px solid rgba(var(--bkkr-text-color-rgb, 0, 0, 0), 0.2);background-color:transparent;color:color-get(primary, base);font-size:14px;line-height:20px;cursor:pointer;overflow:hidden;z-index:0}.alert-button.sc-bkkr-alert:first-child{border-right:0}.alert-button.sc-bkkr-alert:last-child{border-right:1px solid rgba(var(--bkkr-text-color-rgb, 0, 0, 0), 0.2);font-weight:bold}.alert-button.bkkr-activated.sc-bkkr-alert{background-color:rgba(var(--bkkr-text-color-rgb, 0, 0, 0), 0.1)}.alert-button.bkkr-focused.sc-bkkr-alert,.alert-tappable.bkkr-focused.sc-bkkr-alert{background:var(--bkkr-color-step-100, #e6e6e6)}.alert-button-inner.sc-bkkr-alert{display:-ms-flexbox;display:flex;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%}.alert-button.sc-bkkr-alert .alert-button-inner.sc-bkkr-alert{pointer-events:none}.alert-input-disabled.sc-bkkr-alert,.alert-checkbox-button-disabled.sc-bkkr-alert .alert-button-inner.sc-bkkr-alert,.alert-radio-button-disabled.sc-bkkr-alert .alert-button-inner.sc-bkkr-alert{pointer-events:none;cursor:default;opacity:0.5}.alert-tappable.sc-bkkr-alert{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;display:-ms-flexbox;display:flex;width:100%;border:0;background:transparent;font-size:inherit;line-height:initial;text-align:start;contain:strict;-webkit-appearance:none;-moz-appearance:none;appearance:none}.alert-button.sc-bkkr-alert,.alert-checkbox.sc-bkkr-alert,.alert-input.sc-bkkr-alert,.alert-radio.sc-bkkr-alert{outline:none}.alert-radio-icon.sc-bkkr-alert,.alert-checkbox-icon.sc-bkkr-alert,.alert-checkbox-inner.sc-bkkr-alert{-webkit-box-sizing:border-box;box-sizing:border-box}textarea.alert-input.sc-bkkr-alert{min-height:37px;resize:none}.alert-button-role-destructive.sc-bkkr-alert,.alert-button-role-destructive.bkkr-activated.sc-bkkr-alert,.alert-button-role-destructive.bkkr-focused.sc-bkkr-alert{color:color-get(danger, base)}";export{f as bkkr_alert}