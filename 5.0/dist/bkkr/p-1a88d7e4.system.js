var __awaiter=this&&this.__awaiter||function(e,n,t,r){function i(e){return e instanceof t?e:new t((function(n){n(e)}))}return new(t||(t=Promise))((function(t,a){function o(e){try{c(r.next(e))}catch(e){a(e)}}function u(e){try{c(r["throw"](e))}catch(e){a(e)}}function c(e){e.done?t(e.value):i(e.value).then(o,u)}c((r=r.apply(e,n||[])).next())}))};var __generator=this&&this.__generator||function(e,n){var t={label:0,sent:function(){if(a[0]&1)throw a[1];return a[1]},trys:[],ops:[]},r,i,a,o;return o={next:u(0),throw:u(1),return:u(2)},typeof Symbol==="function"&&(o[Symbol.iterator]=function(){return this}),o;function u(e){return function(n){return c([e,n])}}function c(o){if(r)throw new TypeError("Generator is already executing.");while(t)try{if(r=1,i&&(a=o[0]&2?i["return"]:o[0]?i["throw"]||((a=i["return"])&&a.call(i),0):i.next)&&!(a=a.call(i,o[1])).done)return a;if(i=0,a)o=[o[0]&2,a.value];switch(o[0]){case 0:case 1:a=o;break;case 4:t.label++;return{value:o[1],done:false};case 5:t.label++;i=o[1];o=[0];continue;case 7:o=t.ops.pop();t.trys.pop();continue;default:if(!(a=t.trys,a=a.length>0&&a[a.length-1])&&(o[0]===6||o[0]===2)){t=0;continue}if(o[0]===3&&(!a||o[1]>a[0]&&o[1]<a[3])){t.label=o[1];break}if(o[0]===6&&t.label<a[1]){t.label=a[1];a=o;break}if(a&&t.label<a[2]){t.label=a[2];t.ops.push(o);break}if(a[2])t.ops.pop();t.trys.pop();continue}o=n.call(e,t)}catch(e){o=[6,e];i=0}finally{r=a=0}if(o[0]&5)throw o[1];return{value:o[0]?o[1]:void 0,done:true}}};System.register(["./p-92f7c087.system.js","./p-d0c60236.system.js"],(function(e){"use strict";var n,t,r,i,a;return{setters:[function(e){n=e.c},function(e){t=e.b;r=e.L;i=e.a;a=e.c}],execute:function(){var o=this;var u=e("t",(function(e){return new Promise((function(t,r){n((function(){c(e);s(e).then((function(n){if(n.animation){n.animation.destroy()}l(e);t(n)}),(function(n){l(e);r(n)}))}))}))}));var c=function(e){var n=e.enteringEl;var t=e.leavingEl;w(n,t,e.direction);y(n,false);if(t){y(t,false)}};var s=function(e){return __awaiter(o,void 0,void 0,(function(){var n;return __generator(this,(function(t){n=f(e);return[2,n]}))}))};var l=function(e){var n=e.enteringEl;var t=e.leavingEl;n.classList.remove("bkkr-page-invisible");if(t!==undefined){t.classList.remove("bkkr-page-invisible")}};var f=function(e){return __awaiter(o,void 0,void 0,(function(){var n,t;return __generator(this,(function(r){switch(r.label){case 0:n=e.enteringEl;t=e.leavingEl;return[4,v(e,false)];case 1:r.sent();h(n,t);b(n,t);return[2,{hasCompleted:true}]}}))}))};var v=function(e,n){return __awaiter(o,void 0,void 0,(function(){var t,r;return __generator(this,(function(i){switch(i.label){case 0:t=e.deepWait!==undefined?e.deepWait:n;r=t?[g(e.enteringEl),g(e.leavingEl)]:[_(e.enteringEl),_(e.leavingEl)];return[4,Promise.all(r)];case 1:i.sent();return[4,d(e.viewIsReady,e.enteringEl)];case 2:i.sent();return[2]}}))}))};var d=function(e,n){return __awaiter(o,void 0,void 0,(function(){return __generator(this,(function(t){switch(t.label){case 0:if(!e)return[3,2];return[4,e(n)];case 1:t.sent();t.label=2;case 2:return[2]}}))}))};var h=function(e,n){p(n,t);p(e,r)};var b=function(e,n){p(e,i);p(n,a)};var p=function(e,n){if(e){var t=new CustomEvent(n,{bubbles:false,cancelable:false});e.dispatchEvent(t)}};var _=function(e){if(e&&e.componentOnReady){return e.componentOnReady()}return Promise.resolve()};var g=e("d",(function(e){return __awaiter(o,void 0,void 0,(function(){var n,t;return __generator(this,(function(r){switch(r.label){case 0:n=e;if(!n)return[3,4];if(!(n.componentOnReady!=null))return[3,2];return[4,n.componentOnReady()];case 1:t=r.sent();if(t!=null){return[2]}r.label=2;case 2:return[4,Promise.all(Array.from(n.children).map(g))];case 3:r.sent();r.label=4;case 4:return[2]}}))}))}));var y=function(e,n){if(n){e.setAttribute("aria-hidden","true");e.classList.add("bkkr-page-hidden")}else{e.hidden=false;e.removeAttribute("aria-hidden");e.classList.remove("bkkr-page-hidden")}};var w=function(e,n,t){if(e!==undefined){e.style.zIndex=t==="back"?"99":"101"}if(n!==undefined){n.style.zIndex="100"}}}}}));