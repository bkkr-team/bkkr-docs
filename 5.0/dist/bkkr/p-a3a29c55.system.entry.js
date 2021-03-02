var __awaiter=this&&this.__awaiter||function(t,e,r,i){function n(t){return t instanceof r?t:new r((function(e){e(t)}))}return new(r||(r=Promise))((function(r,a){function o(t){try{c(i.next(t))}catch(t){a(t)}}function s(t){try{c(i["throw"](t))}catch(t){a(t)}}function c(t){t.done?r(t.value):n(t.value).then(o,s)}c((i=i.apply(t,e||[])).next())}))};var __generator=this&&this.__generator||function(t,e){var r={label:0,sent:function(){if(a[0]&1)throw a[1];return a[1]},trys:[],ops:[]},i,n,a,o;return o={next:s(0),throw:s(1),return:s(2)},typeof Symbol==="function"&&(o[Symbol.iterator]=function(){return this}),o;function s(t){return function(e){return c([t,e])}}function c(o){if(i)throw new TypeError("Generator is already executing.");while(r)try{if(i=1,n&&(a=o[0]&2?n["return"]:o[0]?n["throw"]||((a=n["return"])&&a.call(n),0):n.next)&&!(a=a.call(n,o[1])).done)return a;if(n=0,a)o=[o[0]&2,a.value];switch(o[0]){case 0:case 1:a=o;break;case 4:r.label++;return{value:o[1],done:false};case 5:r.label++;n=o[1];o=[0];continue;case 7:o=r.ops.pop();r.trys.pop();continue;default:if(!(a=r.trys,a=a.length>0&&a[a.length-1])&&(o[0]===6||o[0]===2)){r=0;continue}if(o[0]===3&&(!a||o[1]>a[0]&&o[1]<a[3])){r.label=o[1];break}if(o[0]===6&&r.label<a[1]){r.label=a[1];a=o;break}if(a&&r.label<a[2]){r.label=a[2];r.ops.push(o);break}if(a[2])r.ops.pop();r.trys.pop();continue}o=e.call(t,r)}catch(t){o=[6,t];n=0}finally{i=a=0}if(o[0]&5)throw o[1];return{value:o[0]?o[1]:void 0,done:true}}};System.register(["./p-b25c886d.system.js","./p-926d2b94.system.js","./p-5e4b8ffe.system.js"],(function(t){"use strict";var e,r,i,n,a,o,s,c,u,l;return{setters:[function(t){e=t.r;r=t.e;i=t.h;n=t.H;a=t.g},function(t){o=t.a;s=t.b;c=t.d},function(t){u=t.s;l=t.h}],execute:function(){var b=":host{--border-radius:50%;--background:rgba(var(--bkkr-text-color-rgb, 0, 0, 0), 0.04);--background-hover:rgba(var(--bkkr-text-color-rgb, 0, 0, 0), 0.3);--background-focus:rgba(var(--bkkr-text-color-rgb, 0, 0, 0), 0.3);--background-checked:var(--color-base, var(--color-primary, #3880ff));--transition:0.2s background-color cubic-bezier(0.32, 0.72, 0, 1);--mark-background:var(--bkkr-background-color, #fff);--mark-box-shadow:0 1.5px 2.5px 0 rgba(var(--box-shadow-color, 0, 0, 0), 0.14), 0 6px 5px 0 rgba(var(--box-shadow-color, 0, 0, 0), 0.18), 0 0.6px 10px 0 rgba(var(--box-shadow-color, 0, 0, 0), 0.1);--mark-transition:0.5s transform cubic-bezier(0.155, 1.105, 0.295, 1.12);--mark-scale-checked:.5;display:inline-block;position:relative;width:24px;height:24px;-webkit-transition:var(--transition);transition:var(--transition);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:2;-webkit-box-sizing:border-box;box-sizing:border-box}.radio-button{border-radius:var(--border-radius);display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;-webkit-transition:var(--transition);transition:var(--transition);background-color:var(--background);contain:layout size style;z-index:1;pointer-events:none}.radio-button,.radio-mark{-webkit-box-sizing:border-box;box-sizing:border-box}label{top:0;left:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;position:absolute;width:100%;height:100%;border:0;outline:none;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;margin-left:0;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;opacity:0}label::-moz-focus-inner{border:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){label{margin-left:unset;-webkit-margin-start:0;margin-inline-start:0}}input{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;margin:0;padding:0;border:0;outline:0;opacity:0;overflow:hidden;clip:rect(0 0 0 0);-webkit-appearance:none;-moz-appearance:none;appearance:none}:host(:focus){outline:none}.radio-mark{border-radius:var(--border-radius);width:calc(100% - 6px);height:calc(100% - 6px);-webkit-transition:var(--mark-transition);transition:var(--mark-transition);background:var(--mark-background);-webkit-box-shadow:var(--mark-box-shadow);box-shadow:var(--mark-box-shadow)}@media (any-hover: hover){:host(:hover) .radio-button{background:var(--background-hover)}}:host(:focus) .radio-button,:host(.state-focused) .radio-button{background:var(--background-focus)}:host(.state-checked) .radio-button{background:var(--background-checked)}:host(.state-checked) .radio-mark{-webkit-transform:scale(var(--mark-scale-checked));transform:scale(var(--mark-scale-checked))}:host(:disabled),:host(.state-disabled){pointer-events:none;cursor:default;opacity:0.3}:host(.in-item){margin-left:var(--bkkr-spacer, 16px)/2;margin-right:11px;margin-top:8px;margin-bottom:8px;display:block;position:static}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host(.in-item){margin-left:unset;margin-right:unset;-webkit-margin-start:var(--bkkr-spacer, 16px)/2;margin-inline-start:var(--bkkr-spacer, 16px)/2;-webkit-margin-end:11px;margin-inline-end:11px}}:host(.in-item[slot=start]){margin-left:3px;margin-right:21px;margin-top:8px;margin-bottom:8px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host(.in-item[slot=start]){margin-left:unset;margin-right:unset;-webkit-margin-start:3px;margin-inline-start:3px;-webkit-margin-end:21px;margin-inline-end:21px}}@media (prefers-reduced-motion: reduce){.radio-mark{-webkit-transition:none;transition:none}}";var d=t("bkkr_radio",function(){function t(t){var i=this;e(this,t);this.bkkrStyle=r(this,"bkkrStyle",7);this.bkkrFocus=r(this,"bkkrFocus",7);this.bkkrBlur=r(this,"bkkrBlur",7);this.inputId="bkkr-rb-"+p++;this.radioGroup=null;this.checked=false;this.buttonTabindex=-1;this.name=this.inputId;this.disabled=false;this.updateState=function(){if(i.radioGroup){i.checked=i.radioGroup.value===i.value}};this.onFocus=function(){i.bkkrFocus.emit()};this.onBlur=function(){i.bkkrBlur.emit()}}t.prototype.setFocus=function(t){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(e){t.stopPropagation();t.preventDefault();this.el.focus();return[2]}))}))};t.prototype.setButtonTabindex=function(t){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(e){this.buttonTabindex=t;return[2]}))}))};t.prototype.connectedCallback=function(){if(this.value===undefined){this.value=this.inputId}var t=this.radioGroup=this.el.closest("bkkr-radio-group");if(t){this.updateState();o(t,"bkkrChange",this.updateState)}};t.prototype.disconnectedCallback=function(){var t=this.radioGroup;if(t){s(t,"bkkrChange",this.updateState);this.radioGroup=null}};t.prototype.componentWillLoad=function(){this.emitStyle()};t.prototype.emitStyle=function(){this.bkkrStyle.emit({"state-checked":this.checked,"interactive-disabled":this.disabled})};t.prototype.render=function(){var t=this,e=t.inputId,r=t.disabled,a=t.checked,o=t.color,s=t.el,b=t.buttonTabindex;var d=c(s,e),p=d.label,h=d.labelId,k=d.labelText;return i(n,{"aria-checked":""+a,"aria-hidden":r?"true":null,"aria-labelledby":p?h:null,role:"radio",tabindex:b,onFocus:this.onFocus,onBlur:this.onBlur,class:u(o,{"in-item":l("bkkr-item",s),interactive:true,"state-checked":a,"state-disabled":r,"state-focusable":true})},i("div",{class:"radio-button",part:"container"},i("div",{class:"radio-mark",part:"mark"})),i("label",{htmlFor:e},k),i("input",{type:"radio",checked:a,disabled:r,tabindex:"-1",id:e}))};Object.defineProperty(t.prototype,"el",{get:function(){return a(this)},enumerable:false,configurable:true});Object.defineProperty(t,"watchers",{get:function(){return{color:["emitStyle"],checked:["emitStyle"],disabled:["emitStyle"]}},enumerable:false,configurable:true});return t}());var p=0;d.style=b}}}));