var __awaiter=this&&this.__awaiter||function(t,e,a,n){function r(t){return t instanceof a?t:new a((function(e){e(t)}))}return new(a||(a=Promise))((function(a,o){function i(t){try{c(n.next(t))}catch(t){o(t)}}function s(t){try{c(n["throw"](t))}catch(t){o(t)}}function c(t){t.done?a(t.value):r(t.value).then(i,s)}c((n=n.apply(t,e||[])).next())}))};var __generator=this&&this.__generator||function(t,e){var a={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},n,r,o,i;return i={next:s(0),throw:s(1),return:s(2)},typeof Symbol==="function"&&(i[Symbol.iterator]=function(){return this}),i;function s(t){return function(e){return c([t,e])}}function c(i){if(n)throw new TypeError("Generator is already executing.");while(a)try{if(n=1,r&&(o=i[0]&2?r["return"]:i[0]?r["throw"]||((o=r["return"])&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;if(r=0,o)i=[i[0]&2,o.value];switch(i[0]){case 0:case 1:o=i;break;case 4:a.label++;return{value:i[1],done:false};case 5:a.label++;r=i[1];i=[0];continue;case 7:i=a.ops.pop();a.trys.pop();continue;default:if(!(o=a.trys,o=o.length>0&&o[o.length-1])&&(i[0]===6||i[0]===2)){a=0;continue}if(i[0]===3&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(i[0]===6&&a.label<o[1]){a.label=o[1];o=i;break}if(o&&a.label<o[2]){a.label=o[2];a.ops.push(i);break}if(o[2])a.ops.pop();a.trys.pop();continue}i=e.call(t,a)}catch(t){i=[6,t];r=0}finally{n=o=0}if(i[0]&5)throw i[1];return{value:i[0]?i[1]:void 0,done:true}}};System.register(["./p-b25c886d.system.js","./p-ff24562d.system.js","./p-af5365d2.system.js","./p-064daac9.system.js","./p-4c5bd054.system.js"],(function(t){"use strict";var e,a,n,r,o,i,s,c,l,d;return{setters:[function(t){e=t.r;a=t.e;n=t.h;r=t.H;o=t.g},function(t){i=t.d;s=t.e},function(){},function(t){c=t.createGesture},function(t){l=t.s;d=t.h}],execute:function(){var h=":host{--background:rgba(var(--bkkr-text-color-rgb, 0, 0, 0), 0.065);--background-hover:rgba(var(--bkkr-text-color-rgb, 0, 0, 0), 0.3);--background-focus:rgba(var(--bkkr-text-color-rgb, 0, 0, 0), 0.3);--background-checked:var(--color-base, var(--color-primary, #3880ff));--border-radius:12px;--handle-background:var(--bkkr-background-color, #fff);--handle-background-checked:var(--bkkr-background-color, #fff);--handle-border-radius:21px;--handle-box-shadow:0 1.5px 2.5px 0 rgba(var(--box-shadow-color, 0, 0, 0), 0.1), 0 6px 5px 0 rgba(var(--box-shadow-color, 0, 0, 0), 0.12), 0 0.6px 10px 0 rgba(var(--box-shadow-color, 0, 0, 0), 0.08);--handle-height:calc(24px - (3px * 2));--handle-max-height:calc(100% - (var(--handle-spacing) * 2));--handle-width:calc(24px - (3px * 2));--handle-spacing:3px;--handle-transition:transform 0.3s cubic-bezier(0.32, 0.72, 0, 1), width 120ms ease-in-out, left 110ms ease-in-out, right 110ms ease-in-out;display:inline-block;position:relative;width:42px;height:24px;outline:none;contain:strict;cursor:pointer;-ms-touch-action:none;touch-action:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:2;-webkit-box-sizing:content-box !important;box-sizing:content-box !important}label{top:0;left:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;position:absolute;width:100%;height:100%;border:0;outline:none;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;opacity:0}label::-moz-focus-inner{border:0}input{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;margin:0;padding:0;border:0;outline:0;opacity:0;overflow:hidden;clip:rect(0 0 0 0);-webkit-appearance:none;-moz-appearance:none;appearance:none}@media (any-hover: hover){:host(:hover) .toggle-icon{background:var(--background-hover)}}:host(:focus) .toggle-icon,:host(.state-focused) .toggle-icon{background:var(--background-focus)}:host(.state-disabled){pointer-events:none;opacity:0.5}.toggle-icon-wrapper{display:-ms-flexbox;display:flex;position:relative;-ms-flex-align:center;align-items:center;width:100%;height:100%;-webkit-transition:var(--handle-transition);transition:var(--handle-transition);will-change:transform}.toggle-icon{border-radius:var(--border-radius);display:block;position:relative;width:100%;height:100%;-webkit-transform:translate3d(0, 0, 0);transform:translate3d(0, 0, 0);-webkit-transition:background-color 0.2s;transition:background-color 0.2s;background-color:var(--background);overflow:inherit;pointer-events:none}:host(.state-checked) .toggle-icon{background:var(--background-checked)}:host(.toggle-color.state-checked) .toggle-icon{background:var(--color-base)}.toggle-inner{left:var(--handle-spacing);border-radius:var(--handle-border-radius);position:absolute;width:var(--handle-width);height:var(--handle-height);max-height:var(--handle-max-height);-webkit-transition:var(--handle-transition);transition:var(--handle-transition);background:var(--handle-background);-webkit-box-shadow:var(--handle-box-shadow);box-shadow:var(--handle-box-shadow);contain:strict;will-change:transform}:host(.state-checked) .toggle-icon-wrapper{-webkit-transform:translate3d(calc(100% - var(--handle-width)), 0, 0);transform:translate3d(calc(100% - var(--handle-width)), 0, 0)}:host-context([dir=rtl]):host(.state-checked) .toggle-icon-wrapper,:host-context([dir=rtl]).state-checked .toggle-icon-wrapper{-webkit-transform:translate3d(calc(-100% + var(--handle-width)), 0, 0);transform:translate3d(calc(-100% + var(--handle-width)), 0, 0)}:host(.state-checked) .toggle-inner{-webkit-transform:translate3d(calc(var(--handle-spacing) * -2), 0, 0);transform:translate3d(calc(var(--handle-spacing) * -2), 0, 0);background:var(--handle-background-checked)}:host-context([dir=rtl]):host(.state-checked) .toggle-inner,:host-context([dir=rtl]).state-checked .toggle-inner{-webkit-transform:translate3d(calc(var(--handle-spacing) * 2), 0, 0);transform:translate3d(calc(var(--handle-spacing) * 2), 0, 0)}:host(.state-activated) .toggle-icon::before,:host(.state-checked) .toggle-icon::before{-webkit-transform:scale3d(0, 0, 0);transform:scale3d(0, 0, 0)}:host(.state-activated.state-checked) .toggle-inner::before{-webkit-transform:scale3d(0, 0, 0);transform:scale3d(0, 0, 0)}:host(.state-activated) .toggle-inner{width:calc(var(--handle-width) + 6px)}:host(.state-activated.state-checked) .toggle-icon-wrapper{-webkit-transform:translate3d(calc(100% - var(--handle-width) - 6px), 0, 0);transform:translate3d(calc(100% - var(--handle-width) - 6px), 0, 0)}:host-context([dir=rtl]):host(.state-activated.state-checked) .toggle-icon-wrapper,:host-context([dir=rtl]).state-activated.state-checked .toggle-icon-wrapper{-webkit-transform:translate3d(calc(-100% + var(--handle-width) + 6px), 0, 0);transform:translate3d(calc(-100% + var(--handle-width) + 6px), 0, 0)}:host(.in-item[slot]){margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:var(--bkkr-spacer, 16px);padding-right:var(--bkkr-spacer, 16px);padding-top:6px;padding-bottom:5px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host(.in-item[slot]){padding-left:unset;padding-right:unset;-webkit-padding-start:var(--bkkr-spacer, 16px);padding-inline-start:var(--bkkr-spacer, 16px);-webkit-padding-end:var(--bkkr-spacer, 16px);padding-inline-end:var(--bkkr-spacer, 16px)}}:host(.in-item[slot=start]){padding-left:0;padding-right:16px;padding-top:6px;padding-bottom:5px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host(.in-item[slot=start]){padding-left:unset;padding-right:unset;-webkit-padding-start:0;padding-inline-start:0;-webkit-padding-end:16px;padding-inline-end:16px}}";var u=t("bkkr_toggle",function(){function t(t){var n=this;e(this,t);this.bkkrChange=a(this,"bkkrChange",7);this.bkkrFocus=a(this,"bkkrFocus",7);this.bkkrBlur=a(this,"bkkrBlur",7);this.bkkrStyle=a(this,"bkkrStyle",7);this.inputId="bkkr-"+g++;this.lastDrag=0;this.activated=false;this.name=this.inputId;this.checked=false;this.disabled=false;this.value="on";this.onClick=function(t){t.preventDefault();if(n.lastDrag+300<Date.now()){n.checked=!n.checked}};this.onFocus=function(){n.bkkrFocus.emit()};this.onBlur=function(){n.bkkrBlur.emit()}}t.prototype.checkedChanged=function(t){this.bkkrChange.emit({checked:t,value:this.value})};t.prototype.disabledChanged=function(){this.emitStyle();if(this.gesture){this.gesture.enable(!this.disabled)}};t.prototype.connectedCallback=function(){return __awaiter(this,void 0,void 0,(function(){var t=this;return __generator(this,(function(e){this.gesture=c({el:this.el,gestureName:"toggle",gesturePriority:100,threshold:5,passive:false,onStart:function(){return t.onStart()},onMove:function(e){return t.onMove(e)},onEnd:function(e){return t.onEnd(e)}});this.disabledChanged();return[2]}))}))};t.prototype.disconnectedCallback=function(){if(this.gesture){this.gesture.destroy();this.gesture=undefined}};t.prototype.componentWillLoad=function(){this.emitStyle()};t.prototype.emitStyle=function(){this.bkkrStyle.emit({"interactive-disabled":this.disabled})};t.prototype.onStart=function(){this.activated=true;this.setFocus()};t.prototype.onMove=function(t){if(p(document,this.checked,t.deltaX,-10)){this.checked=!this.checked}};t.prototype.onEnd=function(t){this.activated=false;this.lastDrag=Date.now();t.event.preventDefault();t.event.stopImmediatePropagation()};t.prototype.getValue=function(){return this.value||""};t.prototype.setFocus=function(){if(this.focusEl){this.focusEl.focus()}};t.prototype.render=function(){var t=this;var e=this,a=e.activated,o=e.color,c=e.checked,h=e.disabled,u=e.el,p=e.inputId,g=e.name;var b=i(u,p),f=b.label,k=b.labelId,v=b.labelText;var m=this.getValue();s(true,u,g,c?m:"",h);return n(r,{onClick:this.onClick,"aria-labelledby":f?k:null,"aria-checked":""+c,"aria-hidden":h?"true":null,role:"switch",class:l(o,{"in-item":d("bkkr-item",u),"state-activated":a,"state-checked":c,"state-disabled":h,"state-focusable":true,interactive:true})},n("div",{class:"toggle-icon",part:"track"},n("div",{class:"toggle-icon-wrapper"},n("div",{class:"toggle-inner",part:"handle"}))),n("label",{htmlFor:p},v),n("input",{type:"checkbox",role:"switch","aria-checked":""+c,disabled:h,id:p,onFocus:function(){return t.onFocus()},onBlur:function(){return t.onBlur()},ref:function(e){return t.focusEl=e}}))};Object.defineProperty(t.prototype,"el",{get:function(){return o(this)},enumerable:false,configurable:true});Object.defineProperty(t,"watchers",{get:function(){return{checked:["checkedChanged"],disabled:["disabledChanged"]}},enumerable:false,configurable:true});return t}());var p=function(t,e,a,n){var r=t.dir==="rtl";if(e){return!r&&n>a||r&&-n<a}else{return!r&&-n<a||r&&n>a}};var g=0;u.style=h}}}));