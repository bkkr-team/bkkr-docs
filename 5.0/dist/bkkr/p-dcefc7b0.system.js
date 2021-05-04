var __awaiter=this&&this.__awaiter||function(e,t,r,n){function a(e){return e instanceof r?e:new r((function(t){t(e)}))}return new(r||(r=Promise))((function(r,i){function o(e){try{s(n.next(e))}catch(e){i(e)}}function u(e){try{s(n["throw"](e))}catch(e){i(e)}}function s(e){e.done?r(e.value):a(e.value).then(o,u)}s((n=n.apply(e,t||[])).next())}))};var __generator=this&&this.__generator||function(e,t){var r={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},n,a,i,o;return o={next:u(0),throw:u(1),return:u(2)},typeof Symbol==="function"&&(o[Symbol.iterator]=function(){return this}),o;function u(e){return function(t){return s([e,t])}}function s(o){if(n)throw new TypeError("Generator is already executing.");while(r)try{if(n=1,a&&(i=o[0]&2?a["return"]:o[0]?a["throw"]||((i=a["return"])&&i.call(a),0):a.next)&&!(i=i.call(a,o[1])).done)return i;if(a=0,i)o=[o[0]&2,i.value];switch(o[0]){case 0:case 1:i=o;break;case 4:r.label++;return{value:o[1],done:false};case 5:r.label++;a=o[1];o=[0];continue;case 7:o=r.ops.pop();r.trys.pop();continue;default:if(!(i=r.trys,i=i.length>0&&i[i.length-1])&&(o[0]===6||o[0]===2)){r=0;continue}if(o[0]===3&&(!i||o[1]>i[0]&&o[1]<i[3])){r.label=o[1];break}if(o[0]===6&&r.label<i[1]){r.label=i[1];i=o;break}if(i&&r.label<i[2]){r.label=i[2];r.ops.push(o);break}if(i[2])r.ops.pop();r.trys.pop();continue}o=t.call(e,r)}catch(e){o=[6,e];a=0}finally{n=i=0}if(o[0]&5)throw o[1];return{value:o[0]?o[1]:void 0,done:true}}};var __spreadArray=this&&this.__spreadArray||function(e,t){for(var r=0,n=t.length,a=e.length;r<n;r++,a++)e[a]=t[r];return e};System.register(["./p-7e283b4e.system.js"],(function(e){"use strict";var t,r,n,a;return{setters:[function(e){t=e.c;r=e.a;n=e.b;a=e.g}],execute:function(){var i=this;var o=0;var u=e("g",new WeakMap);var s=function(e){return{create:function(t){return m(e,t)},dismiss:function(t,r,n){return x(document,t,r,e,n)},getTop:function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){return[2,E(document,e)]}))}))}}};var c=e("a",s("bkkr-alert"));var l=e("d",s("bkkr-drawer"));var f=e("l",s("bkkr-loading"));var d=e("m",s("bkkr-modal"));var v=e("p",s("bkkr-popover"));var b=e("t",s("bkkr-toast"));var p=e("b",(function(e){if(typeof document!=="undefined"){g(document)}var t=o++;e.overlayIndex=t;if(!e.hasAttribute("id")){e.id="bkkr-overlay-"+t}}));var m=function(e,r){if(typeof customElements!=="undefined"){return customElements.whenDefined(e).then((function(){var n=document.createElement(e);n.classList.add("overlay-hidden");Object.assign(n,Object.assign(Object.assign({},r),{inline:false}));D(document).appendChild(n);return new Promise((function(e){return t(n,e)}))}))}return Promise.resolve()};var h='[tabindex]:not([tabindex^="-"]), input:not([type=hidden]):not([tabindex^="-"]), textarea:not([tabindex^="-"]), button:not([tabindex^="-"]), select:not([tabindex^="-"]), .state-focusable:not([tabindex^="-"])';var y="input:not([type=hidden]), textarea, button, select";var k=function(e,t){var r=e.querySelector(h);var n=r&&r.shadowRoot;if(n){r=n.querySelector(y)||r}if(r){r.focus()}else{t.focus()}};var w=function(e,t){var r=Array.from(e.querySelectorAll(h));var n=r.length>0?r[r.length-1]:null;var a=n&&n.shadowRoot;if(a){n=a.querySelector(y)||n}if(n){n.focus()}else{t.focus()}};var _=function(e,t){var r=E(t);var n=e.target;if(!r||!n){return}var i=function(){if(r===n){r.lastFocus=undefined}else{var e=a(r);if(!e.contains(n)){return}var i=e.querySelector(".bkkr-overlay-wrapper");if(!i){return}if(i.contains(n)){r.lastFocus=n}else{var o=r.lastFocus;k(i,r);if(o===t.activeElement){w(i,r)}r.lastFocus=t.activeElement}}};var o=function(){if(r.contains(n)){r.lastFocus=n}else{var e=r.lastFocus;k(r,r);if(e===t.activeElement){w(r,r)}r.lastFocus=t.activeElement}};if(r.shadowRoot){o()}else{i()}};var g=function(e){if(o===0){o=1;e.addEventListener("focus",(function(t){return _(t,e)}),true);e.addEventListener("keyup",(function(t){if(t.key==="Escape"){var r=E(e);if(r&&r.backdropDismiss){r.dismiss(undefined,O)}}}))}};var x=function(e,t,r,n,a){var i=E(e,n,a);if(!i){return Promise.reject("overlay does not exist")}return i.dismiss(t,r)};var A=function(e,t){if(t===undefined){t="bkkr-modal,bkkr-toast"}return Array.from(e.querySelectorAll(t)).filter((function(e){return e.overlayIndex>0}))};var E=function(e,t,r){var n=A(e,t);return r===undefined?n[n.length-1]:n.find((function(e){return e.id===r}))};var S=e("c",(function(e,t,r){return __awaiter(i,void 0,void 0,(function(){var n,a;return __generator(this,(function(i){switch(i.label){case 0:if(e.presented){return[2]}e.presented=true;e.willPresent.emit();n=e.enterAnimation?e.enterAnimation:t;return[4,F(e,n,e.el,r)];case 1:a=i.sent();if(a){e.didPresent.emit()}if(e.el.tagName!=="BKKR-TOAST"){P(e.el)}if(e.keyboardClose){e.el.focus()}return[2]}}))}))}));var P=function(e){return __awaiter(i,void 0,void 0,(function(){var t,r;return __generator(this,(function(n){switch(n.label){case 0:t=document.activeElement;if(!t){return[2]}r=t&&t.shadowRoot;if(r){t=r.querySelector(y)||t}return[4,e.onDidDismiss()];case 1:n.sent();t.focus();return[2]}}))}))};var q=e("e",(function(e,t,r,n,a){return __awaiter(i,void 0,void 0,(function(){var i,o;return __generator(this,(function(s){switch(s.label){case 0:if(!e.presented){return[2,false]}e.presented=false;s.label=1;case 1:s.trys.push([1,4,,5]);e.el.style.setProperty("pointer-events","none");e.willDismiss.emit({data:t,role:r});i=e.leaveAnimation?e.leaveAnimation:n;if(!(r!=="gesture"))return[3,3];return[4,F(e,i,e.el,a)];case 2:s.sent();s.label=3;case 3:e.didDismiss.emit({data:t,role:r});u.delete(e);e.el.style.removeProperty("pointer-events");return[3,5];case 4:o=s.sent();console.error(o);return[3,5];case 5:e.el.remove();return[2,true]}}))}))}));var D=function(e){return e.querySelector("bkkr-app")||e.body};var F=function(e,t,r,n){return __awaiter(i,void 0,void 0,(function(){var a,i,o;return __generator(this,(function(s){switch(s.label){case 0:r.classList.remove("overlay-hidden");a=r.shadowRoot||e.el;i=t(a,n);if(!e.animated){i.duration(0)}if(e.keyboardClose){i.beforeAddWrite((function(){var e=r.ownerDocument.activeElement;if(e&&e.matches("input, bkkr-input, bkkr-textarea")){e.blur()}}))}o=u.get(e)||[];u.set(e,__spreadArray(__spreadArray([],o),[i]));return[4,i.play()];case 1:s.sent();return[2,true]}}))}))};var R=e("f",(function(e,t){var r;var n=new Promise((function(e){return r=e}));j(e,t,(function(e){r(e.detail)}));return n}));var j=function(e,t,a){var i=function(r){n(e,t,i);a(r)};r(e,t,i)};var L=e("i",(function(e){return e==="cancel"||e===O}));var O=e("B","backdrop")}}}));