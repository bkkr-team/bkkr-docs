var __awaiter=this&&this.__awaiter||function(e,t,r,n){function a(e){return e instanceof r?e:new r((function(t){t(e)}))}return new(r||(r=Promise))((function(r,i){function o(e){try{s(n.next(e))}catch(e){i(e)}}function u(e){try{s(n["throw"](e))}catch(e){i(e)}}function s(e){e.done?r(e.value):a(e.value).then(o,u)}s((n=n.apply(e,t||[])).next())}))};var __generator=this&&this.__generator||function(e,t){var r={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},n,a,i,o;return o={next:u(0),throw:u(1),return:u(2)},typeof Symbol==="function"&&(o[Symbol.iterator]=function(){return this}),o;function u(e){return function(t){return s([e,t])}}function s(o){if(n)throw new TypeError("Generator is already executing.");while(r)try{if(n=1,a&&(i=o[0]&2?a["return"]:o[0]?a["throw"]||((i=a["return"])&&i.call(a),0):a.next)&&!(i=i.call(a,o[1])).done)return i;if(a=0,i)o=[o[0]&2,i.value];switch(o[0]){case 0:case 1:i=o;break;case 4:r.label++;return{value:o[1],done:false};case 5:r.label++;a=o[1];o=[0];continue;case 7:o=r.ops.pop();r.trys.pop();continue;default:if(!(i=r.trys,i=i.length>0&&i[i.length-1])&&(o[0]===6||o[0]===2)){r=0;continue}if(o[0]===3&&(!i||o[1]>i[0]&&o[1]<i[3])){r.label=o[1];break}if(o[0]===6&&r.label<i[1]){r.label=i[1];i=o;break}if(i&&r.label<i[2]){r.label=i[2];r.ops.push(o);break}if(i[2])r.ops.pop();r.trys.pop();continue}o=t.call(e,r)}catch(e){o=[6,e];a=0}finally{n=i=0}if(o[0]&5)throw o[1];return{value:o[0]?o[1]:void 0,done:true}}};var __spreadArrays=this&&this.__spreadArrays||function(){for(var e=0,t=0,r=arguments.length;t<r;t++)e+=arguments[t].length;for(var n=Array(e),a=0,t=0;t<r;t++)for(var i=arguments[t],o=0,u=i.length;o<u;o++,a++)n[a]=i[o];return n};System.register(["./p-6f9677dd.system.js"],(function(e){"use strict";var t,r,n;return{setters:[function(e){t=e.a;r=e.b;n=e.g}],execute:function(){var a=this;var i=0;var o=e("g",new WeakMap);var u=function(e){return{create:function(t){return h(e,t)},dismiss:function(t,r,n){return g(document,t,r,e,n)},getTop:function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){return[2,A(document,e)]}))}))}}};var s=e("a",u("bkkr-alert"));var c=e("d",u("bkkr-drawer"));var l=e("l",u("bkkr-loading"));var f=e("m",u("bkkr-modal"));var d=e("p",u("bkkr-popover"));var v=e("t",u("bkkr-toast"));var b=e("b",(function(e){if(typeof document!=="undefined"){_(document)}var t=i++;e.overlayIndex=t;if(!e.hasAttribute("id")){e.id="bkkr-overlay-"+t}}));var h=function(e,t){if(typeof customElements!=="undefined"){return customElements.whenDefined(e).then((function(){var r=document.createElement(e);r.classList.add("overlay-hidden");Object.assign(r,t);D(document).appendChild(r);return r.componentOnReady()}))}return Promise.resolve()};var p='[tabindex]:not([tabindex^="-"]), input:not([type=hidden]):not([tabindex^="-"]), textarea:not([tabindex^="-"]), button:not([tabindex^="-"]), select:not([tabindex^="-"]), .bkkr-focusable:not([tabindex^="-"])';var m="input:not([type=hidden]), textarea, button, select";var y=function(e,t){var r=e.querySelector(p);var n=r&&r.shadowRoot;if(n){r=n.querySelector(m)||r}if(r){r.focus()}else{t.focus()}};var k=function(e,t){var r=Array.from(e.querySelectorAll(p));var n=r.length>0?r[r.length-1]:null;var a=n&&n.shadowRoot;if(a){n=a.querySelector(m)||n}if(n){n.focus()}else{t.focus()}};var w=function(e,t){var r=A(t);var a=e.target;if(!r||!a){return}if(r===a){r.lastFocus=undefined}else{var i=n(r);if(!i.contains(a)){return}var o=i.querySelector(".bkkr-overlay-wrapper");if(!o){return}if(o.contains(a)){r.lastFocus=a}else{var u=r.lastFocus;y(o,r);if(u===t.activeElement){k(o,r)}r.lastFocus=t.activeElement}}};var _=function(e){if(i===0){i=1;e.addEventListener("focus",(function(t){return w(t,e)}),true);e.addEventListener("keyup",(function(t){if(t.key==="Escape"){var r=A(e);if(r&&r.backdropDismiss){r.dismiss(undefined,T)}}}))}};var g=function(e,t,r,n,a){var i=A(e,n,a);if(!i){return Promise.reject("overlay does not exist")}return i.dismiss(t,r)};var x=function(e,t){if(t===undefined){t="bkkr-modal,bkkr-toast"}return Array.from(e.querySelectorAll(t)).filter((function(e){return e.overlayIndex>0}))};var A=function(e,t,r){var n=x(e,t);return r===undefined?n[n.length-1]:n.find((function(e){return e.id===r}))};var S=e("c",(function(e,t,r){return __awaiter(a,void 0,void 0,(function(){var n,a;return __generator(this,(function(i){switch(i.label){case 0:if(e.presented){return[2]}e.presented=true;e.willPresent.emit();n=e.enterAnimation?e.enterAnimation:t;return[4,P(e,n,e.el,r)];case 1:a=i.sent();if(a){e.didPresent.emit()}if(e.el.tagName!=="BKKR-TOAST"){E(e.el)}if(e.keyboardClose){e.el.focus()}return[2]}}))}))}));var E=function(e){return __awaiter(a,void 0,void 0,(function(){var t,r;return __generator(this,(function(n){switch(n.label){case 0:t=document.activeElement;if(!t){return[2]}r=t&&t.shadowRoot;if(r){t=r.querySelector(m)||t}return[4,e.onDidDismiss()];case 1:n.sent();t.focus();return[2]}}))}))};var q=e("e",(function(e,t,r,n,i){return __awaiter(a,void 0,void 0,(function(){var a,u;return __generator(this,(function(s){switch(s.label){case 0:if(!e.presented){return[2,false]}e.presented=false;s.label=1;case 1:s.trys.push([1,4,,5]);e.el.style.setProperty("pointer-events","none");e.willDismiss.emit({data:t,role:r});a=e.leaveAnimation?e.leaveAnimation:n;if(!(r!=="gesture"))return[3,3];return[4,P(e,a,e.el,i)];case 2:s.sent();s.label=3;case 3:e.didDismiss.emit({data:t,role:r});o.delete(e);return[3,5];case 4:u=s.sent();console.error(u);return[3,5];case 5:e.el.remove();return[2,true]}}))}))}));var D=function(e){return e.querySelector("bkkr-app")||e.body};var P=function(e,t,r,n){return __awaiter(a,void 0,void 0,(function(){var a,i,u;return __generator(this,(function(s){switch(s.label){case 0:r.classList.remove("overlay-hidden");a=r.shadowRoot||e.el;i=t(a,n);if(!e.animated){i.duration(0)}if(e.keyboardClose){i.beforeAddWrite((function(){var e=r.ownerDocument.activeElement;if(e&&e.matches("input, bkkr-input, bkkr-textarea")){e.blur()}}))}u=o.get(e)||[];o.set(e,__spreadArrays(u,[i]));return[4,i.play()];case 1:s.sent();return[2,true]}}))}))};var R=e("f",(function(e,t){var r;var n=new Promise((function(e){return r=e}));F(e,t,(function(e){r(e.detail)}));return n}));var F=function(e,n,a){var i=function(t){r(e,n,i);a(t)};t(e,n,i)};var L=e("i",(function(e){return e==="cancel"||e===T}));var T=e("B","backdrop")}}}));