var __awaiter=this&&this.__awaiter||function(e,n,t,r){function i(e){return e instanceof t?e:new t((function(n){n(e)}))}return new(t||(t=Promise))((function(t,a){function u(e){try{s(r.next(e))}catch(e){a(e)}}function o(e){try{s(r["throw"](e))}catch(e){a(e)}}function s(e){e.done?t(e.value):i(e.value).then(u,o)}s((r=r.apply(e,n||[])).next())}))};var __generator=this&&this.__generator||function(e,n){var t={label:0,sent:function(){if(a[0]&1)throw a[1];return a[1]},trys:[],ops:[]},r,i,a,u;return u={next:o(0),throw:o(1),return:o(2)},typeof Symbol==="function"&&(u[Symbol.iterator]=function(){return this}),u;function o(e){return function(n){return s([e,n])}}function s(u){if(r)throw new TypeError("Generator is already executing.");while(t)try{if(r=1,i&&(a=u[0]&2?i["return"]:u[0]?i["throw"]||((a=i["return"])&&a.call(i),0):i.next)&&!(a=a.call(i,u[1])).done)return a;if(i=0,a)u=[u[0]&2,a.value];switch(u[0]){case 0:case 1:a=u;break;case 4:t.label++;return{value:u[1],done:false};case 5:t.label++;i=u[1];u=[0];continue;case 7:u=t.ops.pop();t.trys.pop();continue;default:if(!(a=t.trys,a=a.length>0&&a[a.length-1])&&(u[0]===6||u[0]===2)){t=0;continue}if(u[0]===3&&(!a||u[1]>a[0]&&u[1]<a[3])){t.label=u[1];break}if(u[0]===6&&t.label<a[1]){t.label=a[1];a=u;break}if(a&&t.label<a[2]){t.label=a[2];t.ops.push(u);break}if(a[2])t.ops.pop();t.trys.pop();continue}u=n.call(e,t)}catch(e){u=[6,e];i=0}finally{r=a=0}if(u[0]&5)throw u[1];return{value:u[0]?u[1]:void 0,done:true}}};System.register(["./p-e726f40f.system.js","./p-d0c60236.system.js","./p-7e283b4e.system.js"],(function(e){"use strict";var n,t,r,i,a,u;return{setters:[function(e){n=e.e},function(e){t=e.b;r=e.L;i=e.a;a=e.c},function(e){u=e.c}],execute:function(){var o=this;var s=e("t",(function(e){return new Promise((function(t,r){n((function(){c(e);l(e).then((function(n){if(n.animation){n.animation.destroy()}f(e);t(n)}),(function(n){f(e);r(n)}))}))}))}));var c=function(e){var n=e.enteringEl;var t=e.leavingEl;m(n,t,e.direction);y(n,false);if(t){y(t,false)}};var l=function(e){return __awaiter(o,void 0,void 0,(function(){var n;return __generator(this,(function(t){n=v(e);return[2,n]}))}))};var f=function(e){var n=e.enteringEl;var t=e.leavingEl;n.classList.remove("bkkr-page-invisible");if(t!==undefined){t.classList.remove("bkkr-page-invisible")}};var v=function(e){return __awaiter(o,void 0,void 0,(function(){var n,t;return __generator(this,(function(r){switch(r.label){case 0:n=e.enteringEl;t=e.leavingEl;return[4,d(e,false)];case 1:r.sent();b(n,t);p(n,t);return[2,{hasCompleted:true}]}}))}))};var d=function(e,n){return __awaiter(o,void 0,void 0,(function(){var t,r;return __generator(this,(function(i){switch(i.label){case 0:t=e.deepWait!==undefined?e.deepWait:n;r=t?[w(e.enteringEl),w(e.leavingEl)]:[g(e.enteringEl),g(e.leavingEl)];return[4,Promise.all(r)];case 1:i.sent();return[4,h(e.viewIsReady,e.enteringEl)];case 2:i.sent();return[2]}}))}))};var h=function(e,n){return __awaiter(o,void 0,void 0,(function(){return __generator(this,(function(t){switch(t.label){case 0:if(!e)return[3,2];return[4,e(n)];case 1:t.sent();t.label=2;case 2:return[2]}}))}))};var b=function(e,n){_(n,t);_(e,r)};var p=function(e,n){_(e,i);_(n,a)};var _=function(e,n){if(e){var t=new CustomEvent(n,{bubbles:false,cancelable:false});e.dispatchEvent(t)}};var g=function(e){if(e){return new Promise((function(n){return u(e,n)}))}return Promise.resolve()};var w=e("d",(function(e){return __awaiter(o,void 0,void 0,(function(){var n,t;return __generator(this,(function(r){switch(r.label){case 0:n=e;if(!n)return[3,4];if(!(n.componentOnReady!=null))return[3,2];return[4,n.componentOnReady()];case 1:t=r.sent();if(t!=null){return[2]}r.label=2;case 2:return[4,Promise.all(Array.from(n.children).map(w))];case 3:r.sent();r.label=4;case 4:return[2]}}))}))}));var y=function(e,n){if(n){e.setAttribute("aria-hidden","true");e.classList.add("bkkr-page-hidden")}else{e.hidden=false;e.removeAttribute("aria-hidden");e.classList.remove("bkkr-page-hidden")}};var m=function(e,n,t){if(e!==undefined){e.style.zIndex=t==="back"?"99":"101"}if(n!==undefined){n.style.zIndex="100"}}}}}));