var __awaiter=this&&this.__awaiter||function(e,t,r,n){function i(e){return e instanceof r?e:new r((function(t){t(e)}))}return new(r||(r=Promise))((function(r,a){function s(e){try{l(n.next(e))}catch(e){a(e)}}function o(e){try{l(n["throw"](e))}catch(e){a(e)}}function l(e){e.done?r(e.value):i(e.value).then(s,o)}l((n=n.apply(e,t||[])).next())}))};var __generator=this&&this.__generator||function(e,t){var r={label:0,sent:function(){if(a[0]&1)throw a[1];return a[1]},trys:[],ops:[]},n,i,a,s;return s={next:o(0),throw:o(1),return:o(2)},typeof Symbol==="function"&&(s[Symbol.iterator]=function(){return this}),s;function o(e){return function(t){return l([e,t])}}function l(s){if(n)throw new TypeError("Generator is already executing.");while(r)try{if(n=1,i&&(a=s[0]&2?i["return"]:s[0]?i["throw"]||((a=i["return"])&&a.call(i),0):i.next)&&!(a=a.call(i,s[1])).done)return a;if(i=0,a)s=[s[0]&2,a.value];switch(s[0]){case 0:case 1:a=s;break;case 4:r.label++;return{value:s[1],done:false};case 5:r.label++;i=s[1];s=[0];continue;case 7:s=r.ops.pop();r.trys.pop();continue;default:if(!(a=r.trys,a=a.length>0&&a[a.length-1])&&(s[0]===6||s[0]===2)){r=0;continue}if(s[0]===3&&(!a||s[1]>a[0]&&s[1]<a[3])){r.label=s[1];break}if(s[0]===6&&r.label<a[1]){r.label=a[1];a=s;break}if(a&&r.label<a[2]){r.label=a[2];r.ops.push(s);break}if(a[2])r.ops.pop();r.trys.pop();continue}s=t.call(e,r)}catch(e){s=[6,e];i=0}finally{n=a=0}if(s[0]&5)throw s[1];return{value:s[0]?s[1]:void 0,done:true}}};System.register(["./p-5997b787.system.js","./p-23b96d66.system.js","./p-41dd7f22.system.js","./p-4c5bd054.system.js"],(function(e){"use strict";var t,r,n,i,a,s,o,l,c,u,d,p;return{setters:[function(e){t=e.r;r=e.e;n=e.h;i=e.H;a=e.g},function(e){s=e.h;o=e.c;l=e.d},function(e){c=e.c;u=e.f;d=e.g},function(e){p=e.h}],execute:function(){var h=function(e,t,r){if(typeof MutationObserver==="undefined"){return}var n=new MutationObserver((function(e){r(f(e,t))}));n.observe(e,{childList:true,subtree:true});return n};var f=function(e,t){var r;e.forEach((function(e){for(var n=0;n<e.addedNodes.length;n++){r=v(e.addedNodes[n],t)||r}}));return r};var v=function(e,t){if(e.nodeType!==1){return undefined}var r=e.tagName===t.toUpperCase()?[e]:Array.from(e.querySelectorAll(t));return r.find((function(t){return t.value===e.value}))};var b=":host{--placeholder-color:initial;--padding-top:10px;--padding-end:var(--bkkr-spacer, 16px)/2;--padding-bottom:10px;--padding-start:var(--bkkr-spacer, 16px);padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);display:-ms-flexbox;display:flex;position:relative;-ms-flex-align:center;align-items:center;font-family:var(--default-font-sans-serif);overflow:hidden;z-index:2}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}:host(.in-item){position:static;max-width:45%}:host(.select-disabled){opacity:0.4;pointer-events:none}:host(.bkkr-focused) button{border:2px solid #5e9ed6}.select-placeholder{-webkit-transition:var(--placeholder-transition, none);transition:var(--placeholder-transition, none);-webkit-transition-delay:var(--placeholder-transition-delay, none);transition-delay:var(--placeholder-transition-delay, none);color:var(--placeholder-color);opacity:var(--placeholder-opacity, 0.5)}label{top:0;left:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;position:absolute;width:100%;height:100%;border:0;outline:none;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;opacity:0}label::-moz-focus-inner{border:0}button{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;margin:0;padding:0;border:0;outline:0;opacity:0;overflow:hidden;clip:rect(0 0 0 0);-webkit-appearance:none;-moz-appearance:none;appearance:none}.select-icon{position:relative;width:12px;height:18px;opacity:0.33}.select-text{-ms-flex:1;flex:1;min-width:16px;font-size:inherit;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.select-icon-inner{top:50%;left:0;margin-top:-2px;position:absolute;width:0;height:0;border-top:5px solid;border-right:5px solid transparent;border-left:5px solid transparent;color:currentColor;pointer-events:none}";var y=e("bkkr_select",function(){function e(e){var n=this;t(this,e);this.bkkrChange=r(this,"bkkrChange",7);this.bkkrCancel=r(this,"bkkrCancel",7);this.bkkrFocus=r(this,"bkkrFocus",7);this.bkkrBlur=r(this,"bkkrBlur",7);this.bkkrStyle=r(this,"bkkrStyle",7);this.didInit=false;this.inputId="bkkr-sel-"+C++;this.hasFocus=false;this.isExpanded=false;this.cancelText="Cancel";this.okText="OK";this.multiple=false;this.name=this.inputId;this.disabled=false;this.interface="drawer";this.search=true;this.interfaceOptions={};this.onClick=function(e){n.setFocus();n.open(e)};this.onFocus=function(){n.bkkrFocus.emit()};this.onBlur=function(){n.bkkrBlur.emit()}}e.prototype.disabledChanged=function(){this.emitStyle()};e.prototype.valueChanged=function(){this.emitStyle();if(this.didInit){this.bkkrChange.emit({value:this.value})}};e.prototype.componentDidLoad=function(){this.didInit=true};e.prototype.connectedCallback=function(){var e=this;this.updateOverlayOptions();this.emitStyle();this.mutationO=h(this.el,"ion-select-option",(function(){return __awaiter(e,void 0,void 0,(function(){return __generator(this,(function(e){this.updateOverlayOptions();return[2]}))}))}))};e.prototype.disconnectedCallback=function(){if(this.mutationO){this.mutationO.disconnect();this.mutationO=undefined}};e.prototype.open=function(e){return __awaiter(this,void 0,void 0,(function(){var t,r;var n=this;return __generator(this,(function(i){switch(i.label){case 0:if(this.disabled||this.isExpanded){return[2,undefined]}r=this;return[4,this.createOverlay(e)];case 1:t=r.overlay=i.sent();this.isExpanded=true;this.hasFocus=true;this.emitStyle();t.onDidDismiss().then((function(){n.overlay=undefined;n.isExpanded=false;n.hasFocus=false;n.emitStyle();n.setFocus()}));return[4,t.present()];case 2:i.sent();return[2,t]}}))}))};e.prototype.updateOverlayOptions=function(){var e=this.overlay;if(!e){return}var t=this.childOpts;var r=this.value;switch(this.interface){case"popover":var n=e.querySelector("bkkr-select-popover");if(n){n.options=this.createChoicesOptions(t,r)}break;case"drawer":var i=e.querySelector("bkkr-select-drawer");if(i){i.options=this.createChoicesOptions(t,r)}break;case"alert":var a=this.multiple?"checkbox":"radio";e.inputs=this.createAlertInputs(t,a,r);break}};e.prototype.createOverlay=function(e){var t=this.interface;if(t==="popover"&&!e){console.warn('Select interface cannot be a "popover" without passing an event. Using the "alert" interface instead.');t="alert"}if(t==="drawer"&&!e){console.warn('Select interface cannot be a "drawer" without passing an event. Using the "alert" interface instead.');t="alert"}if(t!=="alert"&&this.multiple){console.warn('Multiple option is only supported in "drawer".');t="alert"}if(t==="popover"){return this.openPopover(e)}if(t==="alert"){return this.openAlert()}return this.openDrawer(e)};e.prototype.openPopover=function(e){return __awaiter(this,void 0,void 0,(function(){var t,r,n;return __generator(this,(function(i){t=this.interfaceOptions;r=this.value;n=Object.assign(Object.assign({},t),{component:"bkkr-select-choices",cssClass:["select-popover",t.cssClass],event:e,componentProps:{header:t.header,subHeader:t.subHeader,search:this.search,value:r,options:this.createChoicesOptions(this.childOpts,r)}});return[2,c.create(n)]}))}))};e.prototype.openDrawer=function(e){return __awaiter(this,void 0,void 0,(function(){var t,r,n;return __generator(this,(function(i){t=this.interfaceOptions;r=this.value;n=Object.assign(Object.assign({},t),{component:"bkkr-select-choices",cssClass:["select-drawer",t.cssClass],event:e,componentProps:{header:t.header,subHeader:t.subHeader,search:this.search,multiple:this.multiple,interfaceOptions:this.interfaceOptions,value:r,options:this.createChoicesOptions(this.childOpts,r)}});return[2,u.create(n)]}))}))};e.prototype.createChoicesOptions=function(e,t){var r=this;var n=e.map((function(e){var n=m(e);var i=Array.from(e.classList).filter((function(e){return e!=="hydrated"})).join(" ");var a=_+" "+i;return{label:e.textContent||"",cssClass:a,value:n,selected:g(n,t,r.compareWith),disabled:e.disabled,handler:function(){r.value=n;if(!r.multiple){r.close()}}}}));return n};e.prototype.openAlert=function(){return __awaiter(this,void 0,void 0,(function(){var e,t,r,n,i;var a=this;return __generator(this,(function(s){e=this.getLabel();t=e?e.textContent:null;r=this.interfaceOptions;n=this.multiple?"checkbox":"radio";i=Object.assign(Object.assign({},r),{header:r.header?r.header:t,inputs:this.createAlertInputs(this.childOpts,n,this.value),buttons:[{text:this.cancelText,role:"cancel",handler:function(){a.bkkrCancel.emit()}},{text:this.okText,handler:function(e){a.value=e}}],cssClass:["select-alert",r.cssClass,this.multiple?"multiple-select-alert":"single-select-alert"]});return[2,d.create(i)]}))}))};e.prototype.createAlertInputs=function(e,t,r){var n=this;var i=e.map((function(e){var i=m(e);var a=Array.from(e.classList).filter((function(e){return e!=="hydrated"})).join(" ");var s=_+" "+a;return{type:t,cssClass:s,label:e.textContent||"",value:i,checked:g(i,r,n.compareWith),disabled:e.disabled}}));return i};e.prototype.close=function(){if(!this.overlay){return Promise.resolve(false)}this.hasFocus=false;this.emitStyle();return this.overlay.dismiss()};e.prototype.getLabel=function(){return s(this.el)};e.prototype.hasValue=function(){return this.getText()!==""};Object.defineProperty(e.prototype,"childOpts",{get:function(){return Array.from(this.el.querySelectorAll("bkkr-select-option"))},enumerable:false,configurable:true});e.prototype.getText=function(){var e=this.selectedText;if(e!=null&&e!==""){return e}return w(this.childOpts,this.value,this.compareWith)};e.prototype.setFocus=function(){if(this.focusEl){this.focusEl.focus()}};e.prototype.emitStyle=function(){this.bkkrStyle.emit({interactive:true,select:true,"has-placeholder":this.placeholder!=null,"has-value":this.hasValue(),"has-focus":this.hasFocus,"interactive-disabled":this.disabled,"select-disabled":this.disabled})};e.prototype.render=function(){var e=this;var t=this,r=t.disabled,a=t.el,s=t.inputId,c=t.isExpanded,u=t.name,d=t.placeholder,h=t.value;var f=o(a,s),v=f.labelText,b=f.labelId;l(true,a,u,k(h),r);var y=this.getText();var g=false;var m=y;if(m===""&&d!=null){m=d;g=true}var x={"select-text":true,"select-placeholder":g};var w=g?"placeholder":"text";var O=v!==undefined?m!==""?m+", "+v:v:m;return n(i,{onClick:this.onClick,role:"button","aria-haspopup":"listbox","aria-disabled":r?"true":null,"aria-label":O,class:{"in-item":p("bkkr-item",a),"select-disabled":r,"has-value":this.hasValue(),"has-focus":this.hasFocus}},n("div",{"aria-hidden":"true",class:x,part:w},m),n("div",{class:"select-icon",role:"presentation",part:"icon"},n("div",{class:"select-icon-inner"})),n("label",{id:b},O),n("button",{type:"button",disabled:r,id:s,"aria-labelledby":b,"aria-haspopup":"listbox","aria-expanded":""+c,onFocus:this.onFocus,onBlur:this.onBlur,ref:function(t){return e.focusEl=t}}))};Object.defineProperty(e.prototype,"el",{get:function(){return a(this)},enumerable:false,configurable:true});Object.defineProperty(e,"watchers",{get:function(){return{disabled:["disabledChanged"],placeholder:["disabledChanged"],value:["valueChanged"]}},enumerable:false,configurable:true});return e}());var g=function(e,t,r){if(e===undefined){return false}if(Array.isArray(e)){return e.some((function(e){return x(e,t,r)}))}else{return x(e,t,r)}};var m=function(e){var t=e.value;return t===undefined?e.textContent||"":t};var k=function(e){if(e==null){return undefined}if(Array.isArray(e)){return e.join(",")}return e.toString()};var x=function(e,t,r){if(typeof r==="function"){return r(e,t)}else if(typeof r==="string"){return e[r]===t[r]}else{return Array.isArray(t)?t.includes(e):e===t}};var w=function(e,t,r){if(t===undefined){return""}if(Array.isArray(t)){return t.map((function(t){return O(e,t,r)})).filter((function(e){return e!==null})).join(", ")}else{return O(e,t,r)||""}};var O=function(e,t,r){var n=e.find((function(e){return x(m(e),t,r)}));return n?n.textContent:null};var C=0;var _="select-interface-option";y.style=b}}}));