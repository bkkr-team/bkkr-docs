var __awaiter=this&&this.__awaiter||function(e,r,t,n){function i(e){return e instanceof t?e:new t((function(r){r(e)}))}return new(t||(t=Promise))((function(t,a){function o(e){try{l(n.next(e))}catch(e){a(e)}}function u(e){try{l(n["throw"](e))}catch(e){a(e)}}function l(e){e.done?t(e.value):i(e.value).then(o,u)}l((n=n.apply(e,r||[])).next())}))};var __generator=this&&this.__generator||function(e,r){var t={label:0,sent:function(){if(a[0]&1)throw a[1];return a[1]},trys:[],ops:[]},n,i,a,o;return o={next:u(0),throw:u(1),return:u(2)},typeof Symbol==="function"&&(o[Symbol.iterator]=function(){return this}),o;function u(e){return function(r){return l([e,r])}}function l(o){if(n)throw new TypeError("Generator is already executing.");while(t)try{if(n=1,i&&(a=o[0]&2?i["return"]:o[0]?i["throw"]||((a=i["return"])&&a.call(i),0):i.next)&&!(a=a.call(i,o[1])).done)return a;if(i=0,a)o=[o[0]&2,a.value];switch(o[0]){case 0:case 1:a=o;break;case 4:t.label++;return{value:o[1],done:false};case 5:t.label++;i=o[1];o=[0];continue;case 7:o=t.ops.pop();t.trys.pop();continue;default:if(!(a=t.trys,a=a.length>0&&a[a.length-1])&&(o[0]===6||o[0]===2)){t=0;continue}if(o[0]===3&&(!a||o[1]>a[0]&&o[1]<a[3])){t.label=o[1];break}if(o[0]===6&&t.label<a[1]){t.label=a[1];a=o;break}if(a&&t.label<a[2]){t.label=a[2];t.ops.push(o);break}if(a[2])t.ops.pop();t.trys.pop();continue}o=r.call(e,t)}catch(e){o=[6,e];i=0}finally{n=a=0}if(o[0]&5)throw o[1];return{value:o[0]?o[1]:void 0,done:true}}};var __spreadArrays=this&&this.__spreadArrays||function(){for(var e=0,r=0,t=arguments.length;r<t;r++)e+=arguments[r].length;for(var n=Array(e),i=0,r=0;r<t;r++)for(var a=arguments[r],o=0,u=a.length;o<u;o++,i++)n[i]=a[o];return n};System.register([],(function(e){"use strict";return{execute:function(){var r=this;var t=e("i",(function(e,r){if(r===void 0){r=[]}var t={};r.forEach((function(r){if(e.hasAttribute(r)){var n=e.getAttribute(r);if(n!==null){t[r]=e.getAttribute(r)}e.removeAttribute(r)}}));return t}));var n=e("a",(function(e,r,t,n){if(typeof window!=="undefined"){var i=window;var a=i&&i.Ionic&&i.Ionic.config;if(a){var o=a.get("_ael");if(o){return o(e,r,t,n)}else if(a._ael){return a._ael(e,r,t,n)}}}return e.addEventListener(r,t,n)}));var i=e("b",(function(e,r,t,n){if(typeof window!=="undefined"){var i=window;var a=i&&i.Ionic&&i.Ionic.config;if(a){var o=a.get("_rel");if(o){return o(e,r,t,n)}else if(a._rel){return a._rel(e,r,t,n)}}}return e.removeEventListener(r,t,n)}));var a=e("g",(function(e,r){if(r===void 0){r=e}return e.shadowRoot||r}));var o=e("r",(function(e){if(typeof __zone_symbol__requestAnimationFrame==="function"){return __zone_symbol__requestAnimationFrame(e)}if(typeof requestAnimationFrame==="function"){return requestAnimationFrame(e)}return setTimeout(e)}));var u=e("l",(function(e){return!!e.shadowRoot&&!!e.attachShadow}));var l=e("h",(function(e){var r=e.closest("ion-item");if(r){return r.querySelector("ion-label")}return null}));var f=e("d",(function(e,r,t,n,i){if(e||u(r)){var a=r.querySelector("input.aux-input");if(!a){a=r.ownerDocument.createElement("input");a.type="hidden";a.classList.add("aux-input");r.appendChild(a)}a.disabled=i;a.name=t;a.value=n||""}}));var c=e("e",(function(e,r,t){return Math.max(e,Math.min(r,t))}));var s=e("j",(function(e,r){if(!e){var t="ASSERT: "+r;console.error(t);debugger;throw new Error(t)}}));var v=e("f",(function(e,r){var t=e._original||e;return{_original:e,emit:d(t.emit.bind(t),r)}}));var d=e("k",(function(e,r){if(r===void 0){r=0}var t;return function(){var n=[];for(var i=0;i<arguments.length;i++){n[i]=arguments[i]}clearTimeout(t);t=setTimeout.apply(void 0,__spreadArrays([e,r],n))}}));var h=e("c",(function(e,r){var t;var n=e.getAttribute("aria-labelledby");var i=e.id;var a=n!==null&&n.trim()!==""?n:r+"-lbl";var o=n!==null&&n.trim()!==""?document.querySelector("#"+n):l(e);if(o){if(n===null){o.id=a}t=o.textContent;o.setAttribute("aria-hidden","true")}else if(i.trim()!==""){o=document.querySelector("label[for="+i+"]");if(o){o.id=a=i+"-lbl";t=o.textContent}}return{label:o,labelId:a,labelText:t}}));var b=/^[a-z][a-z0-9+\-.]*:/;var _=e("o",(function(e,t,n){return __awaiter(r,void 0,void 0,(function(){var r;return __generator(this,(function(i){if(e!=null&&e[0]!=="#"&&!b.test(e)){r=document.querySelector("bkkr-router");if(r){if(t!=null){t.preventDefault()}return[2,r.push(e,n)]}}return[2,false]}))}))}))}}}));