var __awaiter=this&&this.__awaiter||function(t,e,r,o){function n(t){return t instanceof r?t:new r((function(e){e(t)}))}return new(r||(r=Promise))((function(r,i){function a(t){try{l(o.next(t))}catch(t){i(t)}}function s(t){try{l(o["throw"](t))}catch(t){i(t)}}function l(t){t.done?r(t.value):n(t.value).then(a,s)}l((o=o.apply(t,e||[])).next())}))};var __generator=this&&this.__generator||function(t,e){var r={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},o,n,i,a;return a={next:s(0),throw:s(1),return:s(2)},typeof Symbol==="function"&&(a[Symbol.iterator]=function(){return this}),a;function s(t){return function(e){return l([t,e])}}function l(a){if(o)throw new TypeError("Generator is already executing.");while(r)try{if(o=1,n&&(i=a[0]&2?n["return"]:a[0]?n["throw"]||((i=n["return"])&&i.call(n),0):n.next)&&!(i=i.call(n,a[1])).done)return i;if(n=0,i)a=[a[0]&2,i.value];switch(a[0]){case 0:case 1:i=a;break;case 4:r.label++;return{value:a[1],done:false};case 5:r.label++;n=a[1];a=[0];continue;case 7:a=r.ops.pop();r.trys.pop();continue;default:if(!(i=r.trys,i=i.length>0&&i[i.length-1])&&(a[0]===6||a[0]===2)){r=0;continue}if(a[0]===3&&(!i||a[1]>i[0]&&a[1]<i[3])){r.label=a[1];break}if(a[0]===6&&r.label<i[1]){r.label=i[1];i=a;break}if(i&&r.label<i[2]){r.label=i[2];r.ops.push(a);break}if(i[2])r.ops.pop();r.trys.pop();continue}a=e.call(t,r)}catch(t){a=[6,t];n=0}finally{o=i=0}if(a[0]&5)throw a[1];return{value:a[0]?a[1]:void 0,done:true}}};System.register(["./p-b25c886d.system.js","./p-926d2b94.system.js","./p-4c58e3b5.system.js","./p-5e4b8ffe.system.js"],(function(t){"use strict";var e,r,o,n,i,a,s,l,c,u,d,h,p,b,f,v;return{setters:[function(t){e=t.r;r=t.e;o=t.h;n=t.H;i=t.g},function(t){a=t.o;s=t.n;l=t.i;c=t.f;u=t.d;d=t.e},function(t){h=t.p;p=t.d;b=t.a},function(t){f=t.s;v=t.h}],execute:function(){var k=':host{--overflow:initial;--background-active:var(--color, currentColor);--background-focus:var(--color, currentColor);--background-hover:var(--color, currentColor);--background-opacity:1;--background-active-opacity:.12;--background-focus-opacity:.04;--background-hover-opacity:.04;--border-width:0;--border-color:transparent;--border-style:solid;--border-radius:1em;--color-active:var(--color);--color-focus:var(--color);--color-hover:var(--color);--box-shadow:none;--padding-top:0;--padding-start:0.9em;--padding-end:0.9em;--padding-bottom:0;--height:2.8em;--transition:0.2s transform cubic-bezier(0.25, 1.11, 0.78, 1.59), 0.2s box-shadow cubic-bezier(0.25, 1.11, 0.78, 1.59);--transform:translateZ(0);display:inline-block;width:auto;height:var(--height);outline:0;color:var(--color);font-family:var(--default-font-sans-serif);font-weight:600;line-height:1;text-align:center;text-decoration:none;text-overflow:ellipsis;white-space:nowrap;cursor:pointer;overflow:var(--overflow);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;vertical-align:top;vertical-align:-webkit-baseline-middle;pointer-events:auto;-webkit-font-kerning:none;font-kerning:none}.button-native{-webkit-transition:var(--transition);transition:var(--transition);padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);border-radius:var(--border-radius);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);color:inherit;font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-align:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;white-space:inherit;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-align:center;align-items:center;width:100%;height:100%;-webkit-transform:var(--transform);transform:var(--transform);transition:var(--transition);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);outline:none;background:var(--background, transparent);color:var(--color, currentColor);cursor:pointer;opacity:var(--opacity);overflow:hidden;z-index:0;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-appearance:none;-moz-appearance:none;appearance:none}@media (prefers-reduced-motion: reduce){.button-native{-webkit-transition:none;transition:none}}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.button-native{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.button-native::-moz-focus-inner{border:0}.button-inner{display:-ms-flexbox;display:flex;position:relative;-ms-flex:1;flex:1;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;z-index:1}:host(.button-outline){--border-width:3px;--border-color:var(--bkkr-text-color, #000)}:host(.button-solid){--background:currentColor;--background-active:var(--bkkr-background-color, #fff);--background-focus:var(--bkkr-background-color, #fff);--background-hover:var(--bkkr-background-color, #fff);--box-shadow-color:var(--bkkr-text-color-rgb, 0, 0, 0);--box-shadow:0 3px 5px 0 rgba(var(--box-shadow-color, 0, 0, 0), 0.14), 0 6px 10px 0 rgba(var(--box-shadow-color, 0, 0, 0), 0.18), 0 1.2px 20px 0 rgba(var(--box-shadow-color, 0, 0, 0), 0.1);--box-shadow-active:0 1.5px 2.5px 0 rgba(var(--box-shadow-color, 0, 0, 0), 0.14), 0 6px 5px 0 rgba(var(--box-shadow-color, 0, 0, 0), 0.18), 0 0.6px 10px 0 rgba(var(--box-shadow-color, 0, 0, 0), 0.1)}:host(.button-block){display:block}:host(.button-block) .button-native{width:100%;contain:content}:host(.button-large){--border-radius:1em;--padding-top:0;--padding-start:1em;--padding-end:1em;--padding-bottom:0;height:2.8em;font-size:20px}:host(.button-small){--border-radius:0.75em;--padding-top:0;--padding-start:calc(var(--bkkr-spacer, 16px) - 4px);--padding-end:calc(var(--bkkr-spacer, 16px) - 4px);--padding-bottom:0;height:2.1em;font-size:13px}.button-native::after{top:0;right:0;bottom:0;left:0;position:absolute;content:"";opacity:0;-webkit-transition:0.2s opacity cubic-bezier(0.32, 0.72, 0, 1);transition:0.2s opacity cubic-bezier(0.32, 0.72, 0, 1)}@media (any-hover: hover){:host(:hover) .button-native{color:var(--color-hover)}:host(:hover) .button-native::after{background:var(--background-hover);opacity:var(--background-hover-opacity)}}:host(:focus) .button-native,:host(.state-focused) .button-native{color:var(--color-focus)}:host(:focus) .button-native::after,:host(.state-focused) .button-native::after{background:var(--background-focus);opacity:var(--background-focus-opacity)}:host(:active),:host(.state-activated){--box-shadow:var(--box-shadow-active);--transform:scale3d(0.97, 0.97, 1);--transition:0.2s transform ease-out, 0.2s box-shadow ease-out}:host(:active) .button-native,:host(.state-activated) .button-native{color:var(--color-active)}:host(:active) .button-native::after,:host(.state-activated) .button-native::after{background:var(--background-active);opacity:var(--background-active-opacity)}:host(:disabled),:host(.state-disabled){cursor:default;opacity:0.5;pointer-events:none}:host(.button-solid.bkkr-color){--background:var(--color-base);--background-active:var(--color-contrast);--background-focus:var(--color-contrast);--background-hover:var(--color-contrast);--color:var(--color-contrast);--box-shadow-color:var(--color-base-rgb)}:host(.button-outline.bkkr-color){--background-active:var(--color-base);--background-focus:var(--color-base);--background-hover:var(--color-base);--border-color:var(--color-base);--color:var(--color-base)}:host(.button-clear.bkkr-color){--background-active:var(--color-base);--background-focus:var(--color-base);--background-hover:var(--color-base);--color:var(--color-base)}:host(.button-toolbar){--padding-start:calc(var(--bkkr-spacer, 16px) - 4px);--padding-end:calc(var(--bkkr-spacer, 16px) - 4px);--height:2.1em;--border-radius:0.75em}.button-toolbar-color:not([color]){--background-active:rgba(var(--color-contrast-rgb), var(--background-active-opacity));--background-focus:rgba(var(--color-contrast-rgb), var(--background-focus-opacity));--background-hover:rgba(var(--color-contrast-rgb), var(--background-hover-opacity))}:host(.button-toolbar:not([color])) .button-native{color:var(--color-contrast, var(--color))}:host(.button-outline.button-toolbar:not([color])) .button-native{border-color:var(--bkkr-toolbar-color, var(--color, var(--border-color)))}:host(.button-solid.button-toolbar:not([color])) .button-native{background:var(--bkkr-toolbar-color, var(--background));color:var(--bkkr-toolbar-background, var(--color))}@media (prefers-reduced-motion: reduce){.button-native{-webkit-transform:none;transform:none;-webkit-transition:none;transition:none}}';var g=t("bkkr_button",function(){function t(t){var o=this;e(this,t);this.bkkrFocus=r(this,"bkkrFocus",7);this.bkkrBlur=r(this,"bkkrBlur",7);this.inItem=false;this.inToolbar=false;this.inheritedAttributes={};this.disabled=false;this.routerDirection="forward";this.type="button";this.handleClick=function(t){if(o.type==="button"){a(o.href,t,o.routerDirection)}else if(s(o.el)){var e=o.el.closest("form");if(e){t.preventDefault();var r=document.createElement("button");r.type=o.type;r.style.display="none";e.appendChild(r);r.click();r.remove()}}};this.onFocus=function(){o.bkkrFocus.emit()};this.onBlur=function(){o.bkkrBlur.emit()}}t.prototype.componentWillLoad=function(){this.inToolbar=!!this.el.closest("bkkr-toolbar");this.inItem=!!this.el.closest("bkkr-item")||!!this.el.closest("ion-item-divider");this.inheritedAttributes=l(this.el,["aria-label"])};Object.defineProperty(t.prototype,"hasIconOnly",{get:function(){return!!this.el.querySelector('[slot="icon-only"]')},enumerable:false,configurable:true});t.prototype.render=function(){var t;var e=this,r=e.type,i=e.disabled,a=e.rel,s=e.target,l=e.size,c=e.href,u=e.hasIconOnly,d=e.inToolbar,h=e.inheritedAttributes,p=e.color,b=e.expand,k=e.shape;var g=l===undefined&&this.inItem?"small":l;var m=c===undefined?"button":"a";var y=m==="button"?{type:r}:{download:this.download,href:c,rel:a,target:s};var x=this.fill;if(x===undefined){x=this.inToolbar?"clear":"solid"}return o(n,{onClick:this.handleClick,"aria-disabled":i?"true":null,class:f(p,(t={},t["button-"+b]=b!==undefined,t["button-"+l]=g!==undefined,t["button-"+k]=k!==undefined,t["button-"+x]=true,t["button-toolbar"]=d,t["button-toolbar-color"]=v("bkkr-toolbar[color]",this.el),t["button-has-icon-only"]=u,t["state-disabled"]=i,t["state-activatable"]=true,t["state-focusable"]=true,t))},o(m,Object.assign({},y,{part:"native",disabled:i,class:"button-native",onFocus:this.onFocus,onBlur:this.onBlur},h),o("slot",{name:"start"}),o("span",{class:"button-inner"},o("slot",{name:"icon-only"}),o("slot",null)),o("slot",{name:"end"})))};Object.defineProperty(t.prototype,"el",{get:function(){return i(this)},enumerable:false,configurable:true});return t}());g.style=k;var m=function(t,e,r){if(typeof MutationObserver==="undefined"){return}var o=new MutationObserver((function(t){r(y(t,e))}));o.observe(t,{childList:true,subtree:true});return o};var y=function(t,e){var r;t.forEach((function(t){for(var o=0;o<t.addedNodes.length;o++){r=x(t.addedNodes[o],e)||r}}));return r};var x=function(t,e){if(t.nodeType!==1){return undefined}var r=t.tagName===e.toUpperCase()?[t]:Array.from(t.querySelectorAll(e));return r.find((function(e){return e.value===t.value}))};var w=":host{--placeholder-color:initial;--padding-top:10px;--padding-end:calc(var(--bkkr-spacer, 16px) / 2);--padding-bottom:10px;--padding-start:var(--bkkr-spacer, 16px);padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);display:-ms-flexbox;display:flex;position:relative;-ms-flex-align:center;align-items:center;width:auto;font-family:var(--default-font-sans-serif);overflow:hidden;z-index:2}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}:host(.in-item){position:static;max-width:45%}:host(.select-disabled){opacity:0.4;pointer-events:none}:host(.state-focused) button{border:2px solid #5e9ed6}.select-placeholder{-webkit-transition:var(--placeholder-transition, none);transition:var(--placeholder-transition, none);-webkit-transition-delay:var(--placeholder-transition-delay, none);transition-delay:var(--placeholder-transition-delay, none);color:var(--placeholder-color);opacity:var(--placeholder-opacity, 0.5)}label{top:0;left:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;position:absolute;width:100%;height:100%;border:0;outline:none;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;opacity:0}label::-moz-focus-inner{border:0}button{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;margin:0;padding:0;border:0;outline:0;opacity:0;overflow:hidden;clip:rect(0 0 0 0);-webkit-appearance:none;-moz-appearance:none;appearance:none}.select-icon{margin-left:var(--bkkr-spacer);position:relative;width:12px;height:18px;opacity:0.33}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.select-icon{margin-left:unset;-webkit-margin-start:var(--bkkr-spacer);margin-inline-start:var(--bkkr-spacer)}}.select-text{-ms-flex:1;flex:1;min-width:16px;font-size:inherit;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.select-icon-inner{top:50%;left:0;margin-top:-2px;position:absolute;width:0;height:0;border-top:5px solid;border-right:5px solid transparent;border-left:5px solid transparent;color:currentColor;pointer-events:none}";var O=t("bkkr_select",function(){function t(t){var o=this;e(this,t);this.bkkrSearch=r(this,"bkkrSearch",7);this.bkkrChange=r(this,"bkkrChange",7);this.bkkrOpen=r(this,"bkkrOpen",7);this.bkkrCancel=r(this,"bkkrCancel",7);this.bkkrFocus=r(this,"bkkrFocus",7);this.bkkrBlur=r(this,"bkkrBlur",7);this.bkkrStyle=r(this,"bkkrStyle",7);this.didInit=false;this.inputId="bkkr-sel-"+F++;this.hasFocus=false;this.isExpanded=false;this.cancelText="Cancel";this.okText="OK";this.multiple=false;this.name=this.inputId;this.disabled=false;this.interface="drawer";this.search=true;this.interfaceOptions={};this.onClick=function(t){o.setFocus();o.open(t)};this.onFocus=function(){o.bkkrFocus.emit()};this.onBlur=function(){o.bkkrBlur.emit()}}t.prototype.disabledChanged=function(){this.emitStyle()};t.prototype.valueChanged=function(){this.emitStyle();if(this.didInit){this.bkkrChange.emit({value:this.value})}};t.prototype.componentDidLoad=function(){this.didInit=true};t.prototype.connectedCallback=function(){var t=this;this.updateOverlayOptions();this.emitStyle();this.mutationO=m(this.el,"bkkr-select-option",(function(){return __awaiter(t,void 0,void 0,(function(){return __generator(this,(function(t){this.updateOverlayOptions();return[2]}))}))}))};t.prototype.disconnectedCallback=function(){if(this.mutationO){this.mutationO.disconnect();this.mutationO=undefined}};t.prototype.open=function(t){return __awaiter(this,void 0,void 0,(function(){var e,r;var o=this;return __generator(this,(function(n){switch(n.label){case 0:if(this.disabled||this.isExpanded){return[2,undefined]}this.bkkrOpen.emit();r=this;return[4,this.createOverlay(t)];case 1:e=r.overlay=n.sent();this.overlay.addEventListener("bkkrSelectDidSearch",(function(t){return o.emitSearch(t)}));this.overlay.addEventListener("bkkrSelectDidReset",(function(){return o.reset()}));this.isExpanded=true;this.hasFocus=true;this.emitStyle();e.onDidDismiss().then((function(){o.overlay.removeEventListener("bkkrSelectDidSearch",(function(t){return o.emitSearch(t)}));o.overlay.removeEventListener("bkkrSelectDidReset",(function(){return o.reset()}));o.overlay=undefined;o.isExpanded=false;o.hasFocus=false;o.emitStyle();o.setFocus();o.bkkrCancel.emit()}));return[4,e.present()];case 2:n.sent();return[2,e]}}))}))};t.prototype.emitSearch=function(t){if(this.didInit){this.bkkrSearch.emit({value:t.detail.detail.value})}};t.prototype.updateOverlayOptions=function(){var t=this.overlay;if(!t){return}var e=this.childOpts;var r=this.value;switch(this.interface){case"popover":var o=t.querySelector("bkkr-select-choices");if(o){o.options=this.createChoicesOptions(e,r)}break;case"drawer":var n=t.querySelector("bkkr-select-choices");if(n){n.options=this.createChoicesOptions(e,r)}break;case"alert":var i=this.multiple?"checkbox":"radio";t.inputs=this.createAlertInputs(e,i,r);break}};t.prototype.createOverlay=function(t){var e=this.interface;if(e==="popover"&&!t){console.warn('Select interface cannot be a "popover" without passing an event. Using the "alert" interface instead.');e="alert"}if(e==="drawer"&&!t){console.warn('Select interface cannot be a "drawer" without passing an event. Using the "alert" interface instead.');e="alert"}if(e==="popover"){return this.openPopover(t)}if(e==="alert"){return this.openAlert()}return this.openDrawer(t)};t.prototype.openPopover=function(t){return __awaiter(this,void 0,void 0,(function(){var e,r,o;return __generator(this,(function(n){e=this.interfaceOptions;r=this.value;o=Object.assign(Object.assign({},e),{component:"bkkr-select-choices",cssClass:["select-popover",e.cssClass],event:t,componentProps:{header:e.header,subHeader:e.subHeader,search:this.search,value:r,options:this.createChoicesOptions(this.childOpts,r)}});return[2,h.create(o)]}))}))};t.prototype.openDrawer=function(t){return __awaiter(this,void 0,void 0,(function(){var e,r,o;return __generator(this,(function(n){e=this.interfaceOptions;r=this.value;o=Object.assign(Object.assign({},e),{component:"bkkr-select-choices",cssClass:["select-drawer",e.cssClass],event:t,componentProps:{header:e.header,subHeader:e.subHeader,search:this.search,multiple:this.multiple,interfaceOptions:this.interfaceOptions,value:r,options:this.createChoicesOptions(this.childOpts,r)}});return[2,p.create(o)]}))}))};t.prototype.createChoicesOptions=function(t,e){var r=this;var o=t.map((function(t){var o=S(t);var n=Array.from(t.classList).filter((function(t){return t!=="hydrated"})).join(" ");var i=I+" "+n;return{label:t.textContent||"",cssClass:i,value:o,selected:C(o,e,r.compareWith),disabled:t.disabled,handler:function(t){r.value=t;if(!r.multiple){r.close()}}}}));return o};t.prototype.openAlert=function(){return __awaiter(this,void 0,void 0,(function(){var t,e,r,o,n;var i=this;return __generator(this,(function(a){t=this.getLabel();e=t?t.textContent:null;r=this.interfaceOptions;o=this.multiple?"checkbox":"radio";n=Object.assign(Object.assign({},r),{header:r.header?r.header:e,inputs:this.createAlertInputs(this.childOpts,o,this.value),buttons:[{text:this.cancelText,role:"cancel",handler:function(){i.bkkrCancel.emit()}},{text:this.okText,handler:function(t){i.value=t}}],cssClass:["select-alert",r.cssClass,this.multiple?"multiple-select-alert":"single-select-alert"]});return[2,b.create(n)]}))}))};t.prototype.createAlertInputs=function(t,e,r){var o=this;var n=t.map((function(t){var n=S(t);var i=Array.from(t.classList).filter((function(t){return t!=="hydrated"})).join(" ");var a=I+" "+i;return{type:e,cssClass:a,label:t.textContent||"",value:n,checked:C(n,r,o.compareWith),disabled:t.disabled}}));return n};t.prototype.close=function(){if(!this.overlay){return Promise.resolve(false)}this.hasFocus=false;this.emitStyle();return this.overlay.dismiss()};t.prototype.reset=function(){this.value=this.multiple?[]:null;if(!this.multiple){this.close()}};t.prototype.getLabel=function(){return c(this.el)};t.prototype.hasValue=function(){return this.getText()!==""};Object.defineProperty(t.prototype,"childOpts",{get:function(){return Array.from(this.el.querySelectorAll("bkkr-select-option"))},enumerable:false,configurable:true});t.prototype.getText=function(){var t=this.selectedText;if(t!=null&&t!==""){return t}return A(this.childOpts,this.value,this.compareWith)};t.prototype.setFocus=function(){if(this.focusEl){this.focusEl.focus()}};t.prototype.emitStyle=function(){this.bkkrStyle.emit({interactive:true,input:true,select:true,"has-placeholder":this.placeholder!=null,"has-value":this.hasValue(),"has-focus":this.hasFocus,"interactive-disabled":this.disabled,"select-disabled":this.disabled})};t.prototype.render=function(){var t=this;var e=this,r=e.disabled,i=e.el,a=e.inputId,s=e.isExpanded,l=e.name,c=e.placeholder,h=e.value;var p=u(i,a),b=p.labelText,f=p.labelId;d(true,i,l,_(h),r);var k=this.getText();var g=false;var m=k;if(m===""&&c!=null){m=c;g=true}var y={"select-text":true,"select-placeholder":g};var x=g?"placeholder":"text";var w=b!==undefined?m!==""?m+", "+b:b:m;return o(n,{onClick:this.onClick,role:"button","aria-haspopup":"listbox","aria-disabled":r?"true":null,"aria-label":w,class:{"in-item":v("bkkr-item",i),"select-disabled":r,"has-value":this.hasValue(),"has-focus":this.hasFocus}},o("div",{"aria-hidden":"true",class:y,part:x},m),o("div",{class:"select-icon",role:"presentation",part:"icon"},o("div",{class:"select-icon-inner"})),o("label",{id:f},w),o("button",{type:"button",disabled:r,id:a,"aria-labelledby":f,"aria-haspopup":"listbox","aria-expanded":""+s,onFocus:this.onFocus,onBlur:this.onBlur,ref:function(e){return t.focusEl=e}}))};Object.defineProperty(t.prototype,"el",{get:function(){return i(this)},enumerable:false,configurable:true});Object.defineProperty(t,"watchers",{get:function(){return{disabled:["disabledChanged"],placeholder:["disabledChanged"],value:["valueChanged"]}},enumerable:false,configurable:true});return t}());var C=function(t,e,r){if(t===undefined){return false}if(Array.isArray(t)){return t.some((function(t){return j(t,e,r)}))}else{return j(t,e,r)}};var S=function(t){var e=t.value;return e===undefined?t.textContent||"":e};var _=function(t){if(t==null){return undefined}if(Array.isArray(t)){return t.join(",")}return t.toString()};var j=function(t,e,r){if(typeof r==="function"){return r(t,e)}else if(typeof r==="string"){return t[r]===e[r]}else{return Array.isArray(e)?e.includes(t):t===e}};var A=function(t,e,r){if(e===undefined){return""}if(Array.isArray(e)){return e.map((function(e){return z(t,e,r)})).filter((function(t){return t!==null})).join(", ")}else{return z(t,e,r)||""}};var z=function(t,e,r){var o=t.find((function(t){return j(S(t),e,r)}));return o?o.textContent:null};var F=0;var I="select-interface-option";O.style=w;var E=":host{display:none}";var T=t("bkkr_select_option",function(){function t(t){e(this,t);this.inputId="bkkr-select-opt-"+B++;this.disabled=false}t.prototype.render=function(){return o(n,{role:"option",id:this.inputId})};Object.defineProperty(t.prototype,"el",{get:function(){return i(this)},enumerable:false,configurable:true});return t}());var B=0;T.style=E}}}));