System.register(["./p-92f7c087.system.js","./p-d2d3f0b5.system.js","./p-7660814d.system.js","./p-af5365d2.system.js","./p-9688d910.system.js","./p-5fcc633d.system.js","./p-576893c9.system.js","./p-4c5bd054.system.js"],(function(t){"use strict";var e,r,a,n,i,o,s,l,d,c,p,b,u,k,h,f,g;return{setters:[function(t){e=t.c;r=t.r;a=t.e;n=t.f;i=t.h;o=t.H;s=t.g},function(){},function(t){l=t.c},function(){},function(t){d=t.createGesture},function(t){c=t.s},function(t){p=t.B;b=t.i;u=t.b;k=t.c;h=t.e;f=t.f},function(t){g=t.g}],execute:function(){var m=function(t,r){var a;var n;var i=function(t,e){if(typeof document==="undefined"){return}var n=document.elementFromPoint(t,e);if(!n||!r(n)){s();return}if(n!==a){s();o(n)}};var o=function(t){a=t;if(!n){n=a}var r=a;e((function(){return r.classList.add("ion-activated")}))};var s=function(t){if(t===void 0){t=false}if(!a){return}var r=a;e((function(){return r.classList.remove("ion-activated")}));if(t&&n!==a){a.click()}a=undefined};return d({el:t,gestureName:"buttonActiveDrag",threshold:0,onStart:function(t){return i(t.currentX,t.currentY)},onMove:function(t){return i(t.currentX,t.currentY)},onEnd:function(){s(true);n=undefined}})};var v=function(t,e,r){var a=l().addElement(t.querySelector("bkkr-backdrop")).fromTo("opacity",0,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]);var n=l().addElement(t.querySelectorAll(".alert-wrapper, .alert-shadow")).beforeStyles({opacity:1});switch(e){case"top":n.fromTo("transform","translate3d(0, -200%, 0)","translate3d(0, 0, 0)");break;default:n.fromTo("transform","translate3d(0, 200%, 0)","translate3d(0, 0, 0)");break}var i=l().addElement(t).easing("cubic-bezier(0.32,0.72,0,1)").duration(500).addAnimation(n);if(r){var o=l().beforeStyles({transform:"translateY(0)","transform-origin":"top center",overflow:"hidden"});o.addElement(r);i.addAnimation(o)}i.addAnimation(a);return i};var x=function(t,e,r,a){if(a===void 0){a=500}var n=l().addElement(t.querySelector("bkkr-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0);var i=l().addElement(t.querySelectorAll(".alert-wrapper, .alert-shadow")).beforeStyles({opacity:1});switch(e){case"top":i.fromTo("transform","translate3d(0, 0, 0)","translate3d(0, -200%, 0)");break;default:i.fromTo("transform","translate3d(0, 0, 0)","translate3d(0, 200%, 0)");break}var o=l().addElement(t).easing("cubic-bezier(0.32,0.72,0,1)").duration(a).addAnimation(i);if(r){var s=l().beforeClearStyles(["transform"]).afterClearStyles(["transform"]).onFinish((function(t){if(t!==1){return}r.style.setProperty("overflow","")}));o.addAnimation(s)}o.addAnimation(n);return o};var w=".sc-bkkr-alert-h{--min-width:auto;--width:calc(100% - var(--bkkr-spacer, 16px));--min-height:auto;--height:auto;--max-height:90%;--background:var(--bkkr-background-color);--box-shadow:0 15px 25px 0 rgba(var(--box-shadow-color, var(--bkkr-text-color-rgb, 0, 0, 0)), 0.1), 0 6px 20px 0 rgba(var(--box-shadow-color, var(--bkkr-text-color-rgb, 0, 0, 0)), 0.12), 0 13.2px 40px 0 rgba(var(--box-shadow-color, var(--bkkr-text-color-rgb, 0, 0, 0)), 0.08);--max-width:720px;--backdrop-opacity:var(--bkkr-backdrop-opacity, .3);--margin-top:calc(var(--safe-area-top) + (var(--bkkr-spacer, 16px) / 2));--margin-bottom:calc(var(--safe-area-bottom) + (var(--bkkr-spacer, 16px) / 2));-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;top:0;right:0;bottom:0;left:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-align:end;align-items:flex-end;-ms-flex-pack:center;justify-content:center;outline:none;font-family:var(--default-font-sans-serif);font-size:14px;contain:strict;-ms-touch-action:none;touch-action:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1001}.overlay-hidden.sc-bkkr-alert-h{display:none}.alert-wrapper.sc-bkkr-alert{border-radius:2em;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);contain:content;opacity:0;overflow:hidden;z-index:10}.alert-top.sc-bkkr-alert-h{-ms-flex-align:start;align-items:flex-start}.alert-top.sc-bkkr-alert-h .alert-wrapper.sc-bkkr-alert{-webkit-transform:translate3d(0, -200%, 0);transform:translate3d(0, -200%, 0);margin-top:var(--margin-top)}.alert-bottom.sc-bkkr-alert-h{-ms-flex-align:end;align-items:flex-end}.alert-bottom.sc-bkkr-alert-h .alert-wrapper.sc-bkkr-alert{-webkit-transform:translate3d(0, 200%, 0);transform:translate3d(0, 200%, 0);margin-bottom:var(--margin-bottom)}.alert-checkbox-group.sc-bkkr-alert::-webkit-scrollbar,.alert-radio-group.sc-bkkr-alert::-webkit-scrollbar,.alert-message.sc-bkkr-alert::-webkit-scrollbar{display:none}.alert-button.sc-bkkr-alert,.alert-checkbox.sc-bkkr-alert,.alert-input.sc-bkkr-alert,.alert-radio.sc-bkkr-alert{outline:none}.alert-radio-icon.sc-bkkr-alert,.alert-checkbox-icon.sc-bkkr-alert,.alert-checkbox-inner.sc-bkkr-alert{-webkit-box-sizing:border-box;box-sizing:border-box}.alert-tappable.sc-bkkr-alert{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;display:-ms-flexbox;display:flex;width:100%;border:0;background:transparent;font-size:inherit;line-height:initial;text-align:start;contain:strict;-webkit-appearance:none;-moz-appearance:none;appearance:none}.alert-head.sc-bkkr-alert{padding-left:16px;padding-right:16px;padding-top:12px;padding-bottom:7px;text-align:left}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.alert-head.sc-bkkr-alert{padding-left:unset;padding-right:unset;-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px}}.alert-title.sc-bkkr-alert{margin-top:8px;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;color:var(--bkkr-text-color, #000);font-size:17px;font-weight:600}.alert-sub-title.sc-bkkr-alert{margin-left:0;margin-right:0;margin-top:5px;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;color:var(--bkkr-color-step-600, #666666);font-size:14px;font-weight:400}.alert-message.sc-bkkr-alert{padding-left:16px;padding-right:16px;padding-top:0;padding-bottom:21px;color:var(--bkkr-text-color, #000);font-size:13px;text-align:left;-webkit-box-sizing:border-box;box-sizing:border-box;overflow-y:auto;-webkit-overflow-scrolling:touch;overscroll-behavior-y:contain}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.alert-message.sc-bkkr-alert{padding-left:unset;padding-right:unset;-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px}}.alert-message.sc-bkkr-alert{max-height:240px}.alert-message.sc-bkkr-alert:empty{padding-left:0;padding-right:0;padding-top:0;padding-bottom:12px}.alert-input.sc-bkkr-alert{border-radius:4px;margin-top:10px;padding-left:6px;padding-right:6px;padding-top:6px;padding-bottom:6px;width:100%;border:0.55px solid var(--bkkr-color-step-250, #bfbfbf);background-color:var(--bkkr-background-color, #fff);-webkit-appearance:none;-moz-appearance:none;appearance:none}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.alert-input.sc-bkkr-alert{padding-left:unset;padding-right:unset;-webkit-padding-start:6px;padding-inline-start:6px;-webkit-padding-end:6px;padding-inline-end:6px}}.alert-input.sc-bkkr-alert::-webkit-input-placeholder{color:var(--bkkr-placeholder-color, var(--bkkr-color-step-400, #999999));font-family:inherit;font-weight:inherit}.alert-input.sc-bkkr-alert::-moz-placeholder{color:var(--bkkr-placeholder-color, var(--bkkr-color-step-400, #999999));font-family:inherit;font-weight:inherit}.alert-input.sc-bkkr-alert:-ms-input-placeholder{color:var(--bkkr-placeholder-color, var(--bkkr-color-step-400, #999999));font-family:inherit;font-weight:inherit}.alert-input.sc-bkkr-alert::-ms-input-placeholder{color:var(--bkkr-placeholder-color, var(--bkkr-color-step-400, #999999));font-family:inherit;font-weight:inherit}.alert-input.sc-bkkr-alert::placeholder{color:var(--bkkr-placeholder-color, var(--bkkr-color-step-400, #999999));font-family:inherit;font-weight:inherit}.alert-input.sc-bkkr-alert::-ms-clear{display:none}textarea.alert-input.sc-bkkr-alert{min-height:37px;resize:none}.alert-radio-group.sc-bkkr-alert,.alert-checkbox-group.sc-bkkr-alert{-ms-scroll-chaining:none;overscroll-behavior:contain;max-height:240px;border-top:1px solid var(--bkkr-border, rgba(var(--bkkr-text-color-rgb, 0, 0, 0), 0.1));overflow-y:auto;-webkit-overflow-scrolling:touch}.alert-tappable.sc-bkkr-alert{height:44px}.alert-checkbox.sc-bkkr-alert,.alert-radio.sc-bkkr-alert{cursor:pointer}@media (any-hover: hover){.alert-checkbox.sc-bkkr-alert:hover,.alert-radio.sc-bkkr-alert:hover{background-color:#eee}}.alert-radio-label.sc-bkkr-alert,.alert-checkbox-label.sc-bkkr-alert{padding-left:13px;padding-right:13px;padding-top:13px;padding-bottom:13px;-ms-flex:1;flex:1;-ms-flex-order:0;order:0;color:var(--bkkr-text-color, #000);text-overflow:ellipsis;white-space:nowrap;overflow:hidden}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.alert-radio-label.sc-bkkr-alert,.alert-checkbox-label.sc-bkkr-alert{padding-left:unset;padding-right:unset;-webkit-padding-start:13px;padding-inline-start:13px;-webkit-padding-end:13px;padding-inline-end:13px}}[aria-checked=true].sc-bkkr-alert .alert-radio-label.sc-bkkr-alert,[aria-checked=true].sc-bkkr-alert .alert-checkbox-label.sc-bkkr-alert{color:color-get(primary, base)}.alert-radio-icon.sc-bkkr-alert,.alert-checkbox-icon.sc-bkkr-alert{position:relative;-ms-flex-order:1;order:1;min-width:30px}[aria-checked=true].sc-bkkr-alert .alert-radio-inner.sc-bkkr-alert,[aria-checked=true].sc-bkkr-alert .alert-checkbox-inner.sc-bkkr-alert{top:-7px;left:7px;position:absolute;width:6px;height:12px;-webkit-transform:rotate(45deg);transform:rotate(45deg);border-width:2px;border-top-width:0;border-left-width:0;border-style:solid;border-color:color-get(primary, base)}.alert-button-group.sc-bkkr-alert{margin-right:-1px;display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap;width:100%}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.alert-button-group.sc-bkkr-alert{margin-right:unset;-webkit-margin-end:-1px;margin-inline-end:-1px}}.alert-button-group-vertical.sc-bkkr-alert{-ms-flex-direction:column;flex-direction:column;-ms-flex-wrap:nowrap;flex-wrap:nowrap}.alert-button.sc-bkkr-alert{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;border-radius:0;display:block;-ms-flex:1 1 auto;flex:1 1 auto;min-width:50%;height:44px;border:0;border-top:1px solid var(--bkkr-border, rgba(var(--bkkr-text-color-rgb, 0, 0, 0), 0.1));border-right:1px solid var(--bkkr-border, rgba(var(--bkkr-text-color-rgb, 0, 0, 0), 0.1));background-color:transparent;color:color-get(primary, base);font-size:14px;line-height:20px;cursor:pointer;overflow:hidden;z-index:0}.alert-button.sc-bkkr-alert:first-child{border-left:0}.alert-button.sc-bkkr-alert:last-child{border-right:0;font-weight:bold}.alert-button-inner.sc-bkkr-alert{display:-ms-flexbox;display:flex;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%}.alert-button.sc-bkkr-alert .alert-button-inner.sc-bkkr-alert{pointer-events:none}.alert-button-role-destructive.sc-bkkr-alert,.alert-button-role-destructive.state-activated.sc-bkkr-alert,.alert-button-role-destructive.state-focused.sc-bkkr-alert{color:color-get(danger, base)}@media (any-hover: hover){.alert-button.sc-bkkr-alert:hover{background-color:rgba(var(--bkkr-text-color-rgb, 0, 0, 0), 0.04)}}.alert-button.state-focused.sc-bkkr-alert,.alert-tappable.state-focused.sc-bkkr-alert{background:rgba(var(--bkkr-text-color-rgb, 0, 0, 0), 0.04)}.alert-button.state-activated.sc-bkkr-alert{background-color:rgba(var(--bkkr-text-color-rgb, 0, 0, 0), 0.12)}.alert-input-disabled.sc-bkkr-alert,.alert-checkbox-button-disabled.sc-bkkr-alert .alert-button-inner.sc-bkkr-alert,.alert-radio-button-disabled.sc-bkkr-alert .alert-button-inner.sc-bkkr-alert{pointer-events:none;cursor:default;opacity:0.5}";var y=t("bkkr_alert",function(){function t(t){var e=this;r(this,t);this.didPresent=a(this,"alertDidPresent",7);this.willPresent=a(this,"alertWillPresent",7);this.willDismiss=a(this,"alertWillDismiss",7);this.didDismiss=a(this,"alertDidDismiss",7);this.processedInputs=[];this.processedButtons=[];this.presented=false;this.keyboardClose=true;this.buttons=[];this.inputs=[];this.backdropDismiss=true;this.animated=true;this.position="bottom";this.onBackdropTap=function(){e.dismiss(undefined,p)};this.dispatchCancelHandler=function(t){var r=t.detail.role;if(b(r)){var a=e.processedButtons.find((function(t){return t.role==="cancel"}));e.callButtonHandler(a)}}}t.prototype.onKeydown=function(t){var e=new Set(this.processedInputs.map((function(t){return t.type})));if(!e.has("radio")||t.target&&!this.el.contains(t.target)||t.target.classList.contains("alert-button")){return}var r=this.el.querySelectorAll(".alert-radio");var a=Array.from(r).filter((function(t){return!t.disabled}));var n=a.findIndex((function(e){return e.id===t.target.id}));var i;if(["ArrowDown","ArrowRight"].includes(t.code)){i=n===a.length-1?a[0]:a[n+1]}if(["ArrowUp","ArrowLeft"].includes(t.code)){i=n===0?a[a.length-1]:a[n-1]}if(i&&a.includes(i)){var o=this.processedInputs.find((function(t){return t.id===(i===null||i===void 0?void 0:i.id)}));if(o){this.rbClick(o);i.focus()}}};t.prototype.buttonsChanged=function(){var t=this.buttons;this.processedButtons=t.map((function(t){return typeof t==="string"?{text:t,role:t.toLowerCase()==="cancel"?"cancel":undefined}:t}))};t.prototype.inputsChanged=function(){var t=this;var e=this.inputs;var r=e.find((function(t){return!t.disabled}));var a=e.find((function(t){return t.checked&&!t.disabled}));var n=a||r;var i=new Set(e.map((function(t){return t.type})));if(i.has("checkbox")&&i.has("radio")){console.warn("Alert cannot mix input types: "+Array.from(i.values()).join("/")+". Please see alert docs for more info.")}this.inputType=i.values().next().value;this.processedInputs=e.map((function(e,r){return{type:e.type||"text",name:e.name||""+r,placeholder:e.placeholder||"",value:e.value,label:e.label,checked:!!e.checked,disabled:!!e.disabled,id:e.id||"alert-input-"+t.overlayIndex+"-"+r,handler:e.handler,min:e.min,max:e.max,cssClass:e.cssClass||"",attributes:e.attributes||{},tabindex:e.type==="radio"&&e!==n?-1:0}}))};t.prototype.connectedCallback=function(){u(this.el)};t.prototype.componentWillLoad=function(){this.inputsChanged();this.buttonsChanged()};t.prototype.disconnectedCallback=function(){if(this.gesture){this.gesture.destroy();this.gesture=undefined}};t.prototype.componentDidLoad=function(){if(this.gesture||!this.wrapperEl){return}this.gesture=m(this.wrapperEl,(function(t){return t.classList.contains("alert-button")}));this.gesture.enable(true)};t.prototype.present=function(){return k(this,v,this.position)};t.prototype.dismiss=function(t,e){return h(this,t,e,x,this.position)};t.prototype.onDidDismiss=function(){return f(this.el,"alertDidDismiss")};t.prototype.onWillDismiss=function(){return f(this.el,"alertWillDismiss")};t.prototype.rbClick=function(t){for(var e=0,r=this.processedInputs;e<r.length;e++){var a=r[e];a.checked=a===t;a.tabindex=a===t?0:-1}this.activeId=t.id;t.handler?t.handler(t):null;n(this)};t.prototype.cbClick=function(t){t.checked=!t.checked;t.handler?t.handler(t):null;n(this)};t.prototype.buttonClick=function(t){var e=t.role;var r=this.getValues();if(b(e)){return this.dismiss({values:r},e)}var a=this.callButtonHandler(t,r);if(a!==false){return this.dismiss(Object.assign({values:r},a),t.role)}return Promise.resolve(false)};t.prototype.callButtonHandler=function(t,e){if(t&&t.handler){var r=t.handler(e);if(r===false){return false}if(typeof r==="object"){return r}}return{}};t.prototype.getValues=function(){if(this.processedInputs.length===0){return undefined}if(this.inputType==="radio"){var t=this.processedInputs.find((function(t){return!!t.checked}));return t?t.value:undefined}if(this.inputType==="checkbox"){return this.processedInputs.filter((function(t){return t.checked})).map((function(t){return t.value}))}var e={};this.processedInputs.forEach((function(t){e[t.name]=t.value||""}));return e};t.prototype.renderAlertInputs=function(){switch(this.inputType){case"checkbox":return this.renderCheckbox();case"radio":return this.renderRadio();default:return this.renderInput()}};t.prototype.renderCheckbox=function(){var t=this;var e=this.processedInputs;if(e.length===0){return null}return i("div",{class:"alert-checkbox-group"},e.map((function(e){return i("button",{type:"button",onClick:function(){return t.cbClick(e)},"aria-checked":""+e.checked,id:e.id,disabled:e.disabled,tabIndex:e.tabindex,role:"checkbox",class:Object.assign(Object.assign({},g(e.cssClass)),{"alert-tappable":true,"alert-checkbox":true,"alert-checkbox-button":true,"state-focusable":true,"alert-checkbox-button-disabled":e.disabled||false})},i("div",{class:"alert-button-inner"},i("div",{class:"alert-checkbox-icon"},i("div",{class:"alert-checkbox-inner"})),i("div",{class:"alert-checkbox-label"},e.label)))})))};t.prototype.renderRadio=function(){var t=this;var e=this.processedInputs;if(e.length===0){return null}return i("div",{class:"alert-radio-group",role:"radiogroup","aria-activedescendant":this.activeId},e.map((function(e){return i("button",{type:"button",onClick:function(){return t.rbClick(e)},"aria-checked":""+e.checked,disabled:e.disabled,id:e.id,tabIndex:e.tabindex,class:Object.assign(Object.assign({},g(e.cssClass)),{"alert-radio-button":true,"alert-tappable":true,"alert-radio":true,"state-focusable":true,"alert-radio-button-disabled":e.disabled||false}),role:"radio"},i("div",{class:"alert-button-inner"},i("div",{class:"alert-radio-icon"},i("div",{class:"alert-radio-inner"})),i("div",{class:"alert-radio-label"},e.label)))})))};t.prototype.renderInput=function(){var t=this.processedInputs;if(t.length===0){return null}return i("div",{class:"alert-input-group"},t.map((function(t){var e,r,a,n;if(t.type==="textarea"){return i("div",{class:"alert-input-wrapper"},i("textarea",Object.assign({placeholder:t.placeholder,value:t.value,id:t.id,tabIndex:t.tabindex},t.attributes,{disabled:(r=(e=t.attributes)===null||e===void 0?void 0:e.disabled)!==null&&r!==void 0?r:t.disabled,class:C(t),onInput:function(e){var r;t.value=e.target.value;if((r=t.attributes)===null||r===void 0?void 0:r.onInput){t.attributes.onInput(e)}}})))}else{return i("div",{class:"alert-input-wrapper"},i("input",Object.assign({placeholder:t.placeholder,type:t.type,min:t.min,max:t.max,value:t.value,id:t.id,tabIndex:t.tabindex},t.attributes,{disabled:(n=(a=t.attributes)===null||a===void 0?void 0:a.disabled)!==null&&n!==void 0?n:t.disabled,class:C(t),onInput:function(e){var r;t.value=e.target.value;if((r=t.attributes)===null||r===void 0?void 0:r.onInput){t.attributes.onInput(e)}}})))}})))};t.prototype.renderAlertButtons=function(){var t=this;var e=this.processedButtons;var r={"alert-button-group":true,"alert-button-group-vertical":e.length>2};return i("div",{class:r},e.map((function(e){return i("button",{type:"button",class:I(e),tabIndex:0,onClick:function(){return t.buttonClick(e)}},i("span",{class:"alert-button-inner"},e.text))})))};t.prototype.render=function(){var t;var e=this;var r=this,a=r.overlayIndex,n=r.header,s=r.subHeader;var l="alert-"+a+"-hdr";var d="alert-"+a+"-sub-hdr";var p="alert-"+a+"-msg";return i(o,{role:"dialog","aria-modal":"true",tabindex:"-1",style:{zIndex:""+(2e4+a)},class:Object.assign(Object.assign({},g(this.cssClass)),(t={},t["alert-"+this.position]=true,t)),onBkkrAlertWillDismiss:this.dispatchCancelHandler,onBkkrBackdropTap:this.onBackdropTap},i("bkkr-backdrop",{tappable:this.backdropDismiss}),i("div",{tabindex:"0"}),i("div",{class:"alert-wrapper bkkr-overlay-wrapper",ref:function(t){return e.wrapperEl=t}},i("div",{class:"alert-head"},n&&i("h2",{id:l,class:"alert-title"},n),s&&i("h2",{id:d,class:"alert-sub-title"},s)),i("div",{id:p,class:"alert-message",innerHTML:c(this.message)}),this.renderAlertInputs(),this.renderAlertButtons()),i("div",{tabindex:"0"}))};Object.defineProperty(t.prototype,"el",{get:function(){return s(this)},enumerable:false,configurable:true});Object.defineProperty(t,"watchers",{get:function(){return{buttons:["buttonsChanged"],inputs:["inputsChanged"]}},enumerable:false,configurable:true});return t}());var C=function(t){var e,r,a;return Object.assign(Object.assign({"alert-input":true,"alert-input-disabled":((r=(e=t.attributes)===null||e===void 0?void 0:e.disabled)!==null&&r!==void 0?r:t.disabled)||false},g(t.cssClass)),g(t.attributes?(a=t.attributes.class)===null||a===void 0?void 0:a.toString():""))};var I=function(t){var e;return Object.assign((e={"alert-button":true,"state-focusable":true,"state-activatable":true},e["alert-button-role-"+t.role]=t.role!==undefined,e),g(t.cssClass))};y.style=w}}}));