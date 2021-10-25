var __awaiter=this&&this.__awaiter||function(e,t,i,n){function r(e){return e instanceof i?e:new i((function(t){t(e)}))}return new(i||(i=Promise))((function(i,a){function s(e){try{l(n.next(e))}catch(e){a(e)}}function o(e){try{l(n["throw"](e))}catch(e){a(e)}}function l(e){e.done?i(e.value):r(e.value).then(s,o)}l((n=n.apply(e,t||[])).next())}))};var __generator=this&&this.__generator||function(e,t){var i={label:0,sent:function(){if(a[0]&1)throw a[1];return a[1]},trys:[],ops:[]},n,r,a,s;return s={next:o(0),throw:o(1),return:o(2)},typeof Symbol==="function"&&(s[Symbol.iterator]=function(){return this}),s;function o(e){return function(t){return l([e,t])}}function l(s){if(n)throw new TypeError("Generator is already executing.");while(i)try{if(n=1,r&&(a=s[0]&2?r["return"]:s[0]?r["throw"]||((a=r["return"])&&a.call(r),0):r.next)&&!(a=a.call(r,s[1])).done)return a;if(r=0,a)s=[s[0]&2,a.value];switch(s[0]){case 0:case 1:a=s;break;case 4:i.label++;return{value:s[1],done:false};case 5:i.label++;r=s[1];s=[0];continue;case 7:s=i.ops.pop();i.trys.pop();continue;default:if(!(a=i.trys,a=a.length>0&&a[a.length-1])&&(s[0]===6||s[0]===2)){i=0;continue}if(s[0]===3&&(!a||s[1]>a[0]&&s[1]<a[3])){i.label=s[1];break}if(s[0]===6&&i.label<a[1]){i.label=a[1];a=s;break}if(a&&i.label<a[2]){i.label=a[2];i.ops.push(s);break}if(a[2])i.ops.pop();i.trys.pop();continue}s=t.call(e,i)}catch(e){s=[6,e];r=0}finally{n=a=0}if(s[0]&5)throw s[1];return{value:s[0]?s[1]:void 0,done:true}}};
/*!
 * (C) BKKR Framework https://bkkr-team.github.io/bkkr-docs/ - MIT License
 */System.register(["./p-6c3087ac.system.js","./p-7c09dde3.system.js","./p-70aff04d.system.js","./p-b60c7a38.system.js","./p-af5b8999.system.js","./p-b938bf14.system.js"],(function(e){"use strict";var t,i,n,r,a,s,o,l,c,u,h,d,p,f,b;return{setters:[function(e){t=e.r;i=e.c;n=e.h;r=e.H;a=e.g;s=e.f},function(e){o=e.h},function(e){l=e.p;c=e.d;u=e.a},function(e){h=e.f;d=e.d;p=e.e;f=e.c},function(e){b=e.w},function(){}],execute:function(){var v=":host{--placeholder-color:initial;--padding-top:10px;--padding-end:0;--padding-bottom:10px;--padding-start:var(--bkkr-spacer, 16px);display:-ms-flexbox;display:flex;position:relative;-ms-flex:1;flex:1;-ms-flex-align:center;align-items:center;width:auto;font-family:var(--bkkr-font-family);overflow:hidden;-ms-touch-action:manipulation;touch-action:manipulation;z-index:2}.select-placeholder{-webkit-transition:var(--placeholder-transition, none);transition:var(--placeholder-transition, none);-webkit-transition-delay:var(--placeholder-transition-delay, none);transition-delay:var(--placeholder-transition-delay, none);color:var(--placeholder-color);opacity:var(--placeholder-opacity, 0.5)}label{top:0;left:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;position:absolute;width:100%;height:100%;border:0;outline:none;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;opacity:0}label::-moz-focus-inner{border:0}button{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;margin:0;padding:0;border:0;outline:0;opacity:0;overflow:hidden;clip:rect(0 0 0 0);-webkit-appearance:none;-moz-appearance:none;appearance:none}.select-text{padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);-ms-flex:1;flex:1;min-width:16px;min-height:18px;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.select-text{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.toggle-icon{position:relative;width:32px;height:32px}:host-context(.item-label-stacked) .toggle-icon,:host-context(.item-label-floating) .toggle-icon{margin-top:-18px}.toggle-icon-inner{top:50%;left:50%;position:absolute;width:0;height:0;-webkit-transform:translate(-50%, -50%);transform:translate(-50%, -50%);border-top:5px solid;border-right:5px solid transparent;border-left:5px solid transparent;color:currentColor;pointer-events:none}:host(.has-focus) .toggle-icon{-webkit-transform:rotate(180deg);transform:rotate(180deg);color:var(--highlight-background)}:host(.select-disabled){opacity:0.4;pointer-events:none}:host(.in-item){position:static;width:100%;max-height:100%}";var g=e("bkkr_select",function(){function e(e){var n=this;t(this,e);this.bkkrSearch=i(this,"bkkrSearch",7);this.bkkrChange=i(this,"bkkrChange",7);this.bkkrOpen=i(this,"bkkrOpen",7);this.bkkrCancel=i(this,"bkkrCancel",7);this.bkkrFocus=i(this,"bkkrFocus",7);this.bkkrBlur=i(this,"bkkrBlur",7);this.bkkrStyle=i(this,"bkkrStyle",7);this.didInit=false;this.inputId="bkkr-sel-"+C++;this.hasFocus=false;this.isExpanded=false;this.cancelText="Cancel";this.okText="OK";this.multiple=false;this.name=this.inputId;this.disabled=false;this.toggleIcon=true;this.interface="popover";this.search=false;this.deselect=true;this.interfaceOptions={};this.onClick=function(e){n.setFocus();n.open(e)};this.onFocus=function(){n.bkkrFocus.emit()};this.onBlur=function(){n.bkkrBlur.emit()}}e.prototype.disabledChanged=function(){this.emitStyle()};e.prototype.valueChanged=function(){this.emitStyle();if(this.didInit){this.bkkrChange.emit({value:this.value})}};e.prototype.connectedCallback=function(){var e=this;this.mutationO=b(this.el,"bkkr-select-option",(function(){return __awaiter(e,void 0,void 0,(function(){var e=this;return __generator(this,(function(t){this.updateOverlayOptions();this.emitStyle();s(this);f(this.el,(function(){if(!e.didInit){e.didInit=true;e.updateOverlayOptions();e.emitStyle()}}));return[2]}))}))}))};e.prototype.disconnectedCallback=function(){if(this.mutationO){this.mutationO.disconnect();this.mutationO=undefined}};e.prototype.open=function(e){return __awaiter(this,void 0,void 0,(function(){var t,i;var n=this;return __generator(this,(function(r){switch(r.label){case 0:if(this.disabled||this.isExpanded){return[2,undefined]}this.bkkrOpen.emit();i=this;return[4,this.createOverlay(e)];case 1:t=i.overlay=r.sent();this.overlay.addEventListener("bkkrSelectDidSearch",(function(e){return n.emitSearch(e)}));this.overlay.addEventListener("bkkrSelectDidReset",(function(){return n.reset()}));this.isExpanded=true;this.hasFocus=true;this.emitStyle();t.onDidDismiss().then((function(){t.removeEventListener("bkkrSelectDidSearch",(function(e){return n.emitSearch(e)}));t.removeEventListener("bkkrSelectDidReset",(function(){return n.reset()}));n.overlay=undefined;n.isExpanded=false;n.hasFocus=false;n.emitStyle();n.setFocus();n.bkkrCancel.emit()}));return[4,t.present()];case 2:r.sent();return[2,t]}}))}))};e.prototype.emitSearch=function(e){if(this.didInit){this.bkkrSearch.emit({value:e.detail.detail.value})}};e.prototype.updateOverlayOptions=function(){var e=this.overlay;if(!e){return}var t=this.childOpts;var i=this.value;switch(this.interface){case"popover":var n=e.querySelector("bkkr-select-choices");if(n){n.options=this.createChoicesOptions(t,i)}break;case"drawer":var r=e.querySelector("bkkr-select-choices");if(r){r.options=this.createChoicesOptions(t,i)}break;case"alert":var a=this.multiple?"checkbox":"radio";e.inputs=this.createAlertInputs(t,a,i);break}};e.prototype.createOverlay=function(e){var t=this.interface;if(t==="popover"&&!e){console.warn('Select interface cannot be a "popover" without passing an event. Using the "alert" interface instead.');t="alert"}if(t==="drawer"&&!e){console.warn('Select interface cannot be a "drawer" without passing an event. Using the "alert" interface instead.');t="alert"}if(t==="popover"){return this.openPopover(e)}if(t==="alert"){return this.openAlert()}return this.openDrawer(e)};e.prototype.openPopover=function(e){return __awaiter(this,void 0,void 0,(function(){var t,i,n;return __generator(this,(function(r){t=this.interfaceOptions;i=this.value;n=Object.assign(Object.assign({},t),{component:"bkkr-select-choices",cssClass:["select-popover",t.cssClass],event:e,size:"cover",trigger:this.inputId,componentProps:{header:t.header,subHeader:t.subHeader,search:this.search,multiple:this.multiple,deselect:this.deselect,interfaceOptions:this.interfaceOptions,value:i,options:this.createChoicesOptions(this.childOpts,i)}});return[2,l.create(n)]}))}))};e.prototype.openDrawer=function(e){return __awaiter(this,void 0,void 0,(function(){var t,i,n;return __generator(this,(function(r){t=this.interfaceOptions;i=this.value;n=Object.assign(Object.assign({closeIcon:"check"},t),{component:"bkkr-select-choices",cssClass:["select-drawer",t.cssClass],event:e,componentProps:{header:t.header,subHeader:t.subHeader,search:this.search,multiple:this.multiple,deselect:this.deselect,interfaceOptions:this.interfaceOptions,value:i,options:this.createChoicesOptions(this.childOpts,i)}});return[2,c.create(n)]}))}))};e.prototype.createChoicesOptions=function(e,t){var i=this;var n=e.map((function(e){var n=y(e);var r=Array.from(e.classList).filter((function(e){return e!=="hydrated"})).join(" ");var a=S+" "+r;return{label:e.textContent||"",cssClass:a,value:n,selected:m(n,t,i.compareWith),disabled:e.disabled,handler:function(e){i.value=e;if(!i.multiple){i.close()}}}}));return n};e.prototype.openAlert=function(){return __awaiter(this,void 0,void 0,(function(){var e,t,i,n,r;var a=this;return __generator(this,(function(s){e=this.getLabel();t=e?e.textContent:null;i=this.interfaceOptions;n=this.multiple?"checkbox":"radio";r=Object.assign(Object.assign({},i),{header:i.header?i.header:t,inputs:this.createAlertInputs(this.childOpts,n,this.value),buttons:[{text:this.cancelText,role:"cancel",handler:function(){a.bkkrCancel.emit()}},{text:this.okText,handler:function(e){a.value=e}}],cssClass:["select-alert",i.cssClass,this.multiple?"multiple-select-alert":"single-select-alert"]});return[2,u.create(r)]}))}))};e.prototype.createAlertInputs=function(e,t,i){var n=this;var r=e.map((function(e){var r=y(e);var a=Array.from(e.classList).filter((function(e){return e!=="hydrated"})).join(" ");var s=S+" "+a;return{type:t,cssClass:s,label:e.textContent||"",value:r,checked:m(r,i,n.compareWith),disabled:e.disabled}}));return r};e.prototype.close=function(){if(!this.overlay){return Promise.resolve(false)}this.hasFocus=false;this.emitStyle();return this.overlay.dismiss()};e.prototype.reset=function(){this.value=this.multiple?[]:null;if(!this.multiple){this.close()}};e.prototype.getLabel=function(){return h(this.el)};e.prototype.hasValue=function(){return this.getText()!==""};Object.defineProperty(e.prototype,"childOpts",{get:function(){return Array.from(this.el.querySelectorAll("bkkr-select-option"))},enumerable:false,configurable:true});e.prototype.getText=function(){var e=this.selectedText;if(e!==undefined&&e!==null&&e.length>0){return e}return w(this.childOpts,this.value,this.compareWith)};e.prototype.setFocus=function(){if(this.focusEl){this.focusEl.focus()}};e.prototype.emitStyle=function(){this.bkkrStyle.emit({interactive:true,input:true,select:true,"has-placeholder":this.placeholder!==undefined,"has-value":this.hasValue(),"has-focus":this.hasFocus,"interactive-disabled":this.disabled,"select-disabled":this.disabled})};e.prototype.render=function(){var e=this;var t=this,i=t.disabled,a=t.el,s=t.inputId,l=t.isExpanded,c=t.name,u=t.placeholder,h=t.value,f=t.toggleIcon;var b=d(a,s),v=b.labelText,g=b.labelId;p(true,a,c,k(h),i);var m=false;var y=this.getText();if(y===""&&u!==undefined){y=u;m=true}var x={"select-text":true,"select-placeholder":m};var w=m?"placeholder":"text";var O=v!==undefined?y!==""?y+", "+v:v:y;return n(r,{onClick:this.onClick,role:"button","aria-haspopup":"listbox","aria-disabled":i?"true":null,"aria-label":O,class:{"in-item":o("bkkr-item",a),"select-disabled":i,"has-value":this.hasValue(),"has-focus":this.hasFocus}},n("div",{"aria-hidden":"true",class:x,part:w},y),f&&n("div",{class:"toggle-icon",role:"presentation",part:"icon"},n("div",{class:"toggle-icon-inner"})),n("label",{id:g},O),n("button",{type:"button",disabled:i,id:s,"aria-labelledby":g,"aria-haspopup":"listbox","aria-expanded":""+l,onFocus:this.onFocus,onBlur:this.onBlur,ref:function(t){return e.focusEl=t}}))};Object.defineProperty(e.prototype,"el",{get:function(){return a(this)},enumerable:false,configurable:true});Object.defineProperty(e,"watchers",{get:function(){return{disabled:["disabledChanged"],placeholder:["disabledChanged"],value:["valueChanged"]}},enumerable:false,configurable:true});return e}());var m=function(e,t,i){if(e===undefined){return false}if(Array.isArray(e)){return e.some((function(e){return x(e,t,i)}))}else{return x(e,t,i)}};var y=function(e){var t=e.value;return t===undefined?e.textContent||"":t};var k=function(e){if(e==null){return undefined}if(Array.isArray(e)){return e.join(",")}return e.toString()};var x=function(e,t,i){if(typeof i==="function"){return i(e,t)}else if(typeof i==="string"){return e[i]===t[i]}else{return Array.isArray(t)?t.includes(e):e===t}};var w=function(e,t,i){if(t===undefined){return""}if(Array.isArray(t)){return t.map((function(t){return O(e,t,i)})).filter((function(e){return e!==null})).join(", ")}else{return O(e,t,i)||""}};var O=function(e,t,i){var n=e.find((function(e){return x(y(e),t,i)}));return n?n.textContent:null};var C=0;var S="select-interface-option";g.style=v;var _=":host{display:none}";var j=e("bkkr_select_option",function(){function e(e){t(this,e);this.inputId="bkkr-select-opt-"+I++;this.disabled=false}e.prototype.render=function(){return n(r,{role:"option",id:this.inputId})};Object.defineProperty(e.prototype,"el",{get:function(){return a(this)},enumerable:false,configurable:true});return e}());var I=0;j.style=_}}}));