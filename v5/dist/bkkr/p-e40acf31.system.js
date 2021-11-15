var __awaiter=this&&this.__awaiter||function(e,n,r,t){function i(e){return e instanceof r?e:new r((function(n){n(e)}))}return new(r||(r=Promise))((function(r,a){function o(e){try{l(t.next(e))}catch(e){a(e)}}function u(e){try{l(t["throw"](e))}catch(e){a(e)}}function l(e){e.done?r(e.value):i(e.value).then(o,u)}l((t=t.apply(e,n||[])).next())}))};var __generator=this&&this.__generator||function(e,n){var r={label:0,sent:function(){if(a[0]&1)throw a[1];return a[1]},trys:[],ops:[]},t,i,a,o;return o={next:u(0),throw:u(1),return:u(2)},typeof Symbol==="function"&&(o[Symbol.iterator]=function(){return this}),o;function u(e){return function(n){return l([e,n])}}function l(o){if(t)throw new TypeError("Generator is already executing.");while(r)try{if(t=1,i&&(a=o[0]&2?i["return"]:o[0]?i["throw"]||((a=i["return"])&&a.call(i),0):i.next)&&!(a=a.call(i,o[1])).done)return a;if(i=0,a)o=[o[0]&2,a.value];switch(o[0]){case 0:case 1:a=o;break;case 4:r.label++;return{value:o[1],done:false};case 5:r.label++;i=o[1];o=[0];continue;case 7:o=r.ops.pop();r.trys.pop();continue;default:if(!(a=r.trys,a=a.length>0&&a[a.length-1])&&(o[0]===6||o[0]===2)){r=0;continue}if(o[0]===3&&(!a||o[1]>a[0]&&o[1]<a[3])){r.label=o[1];break}if(o[0]===6&&r.label<a[1]){r.label=a[1];a=o;break}if(a&&r.label<a[2]){r.label=a[2];r.ops.push(o);break}if(a[2])r.ops.pop();r.trys.pop();continue}o=n.call(e,r)}catch(e){o=[6,e];i=0}finally{t=a=0}if(o[0]&5)throw o[1];return{value:o[0]?o[1]:void 0,done:true}}};
/*!
 * (C) BKKR Framework https://bkkr-team.github.io/bkkr-docs/ - MIT License
 */System.register(["./p-739d5869.system.js","./p-0fe48761.system.js"],(function(e){"use strict";var n,r;return{setters:[function(e){n=e.a},function(e){r=e.c}],execute:function(){var t=this;var i=e("L","bkkrViewWillEnter");var a=e("a","bkkrViewDidEnter");var o=e("b","bkkrViewWillLeave");var u=e("c","bkkrViewDidLeave");var l=e("d","bkkrViewWillUnload");var s=e("t",(function(e){return new Promise((function(r,t){n((function(){c(e);f(e).then((function(n){if(n.animation){n.animation.destroy()}v(e);r(n)}),(function(n){v(e);t(n)}))}))}))}));var c=function(e){var n=e.enteringEl;var r=e.leavingEl;m(n,r,e.direction);k(n,false);if(r){k(r,false)}};var f=function(e){return __awaiter(t,void 0,void 0,(function(){var n;return __generator(this,(function(r){n=d(e);return[2,n]}))}))};var v=function(e){var n=e.enteringEl;var r=e.leavingEl;n.classList.remove("bkkr-page-invisible");if(r!==undefined){r.classList.remove("bkkr-page-invisible")}};var d=function(e){return __awaiter(t,void 0,void 0,(function(){var n,r;return __generator(this,(function(t){switch(t.label){case 0:n=e.enteringEl;r=e.leavingEl;return[4,b(e,false)];case 1:t.sent();w(n,r);p(n,r);return[2,{hasCompleted:true}]}}))}))};var b=function(e,n){return __awaiter(t,void 0,void 0,(function(){var r,t;return __generator(this,(function(i){switch(i.label){case 0:r=e.deepWait!==undefined?e.deepWait:n;t=r?[y(e.enteringEl),y(e.leavingEl)]:[g(e.enteringEl),g(e.leavingEl)];return[4,Promise.all(t)];case 1:i.sent();return[4,h(e.viewIsReady,e.enteringEl)];case 2:i.sent();return[2]}}))}))};var h=function(e,n){return __awaiter(t,void 0,void 0,(function(){return __generator(this,(function(r){switch(r.label){case 0:if(!e)return[3,2];return[4,e(n)];case 1:r.sent();r.label=2;case 2:return[2]}}))}))};var w=function(e,n){_(n,o);_(e,i)};var p=function(e,n){_(e,a);_(n,u)};var _=function(e,n){if(e){var r=new CustomEvent(n,{bubbles:false,cancelable:false});e.dispatchEvent(r)}};var g=function(e){if(e){return new Promise((function(n){return r(e,n)}))}return Promise.resolve()};var y=e("e",(function(e){return __awaiter(t,void 0,void 0,(function(){var n,r;return __generator(this,(function(t){switch(t.label){case 0:n=e;if(!n)return[3,4];if(!(n.componentOnReady!=null))return[3,2];return[4,n.componentOnReady()];case 1:r=t.sent();if(r!=null){return[2]}t.label=2;case 2:return[4,Promise.all(Array.from(n.children).map(y))];case 3:t.sent();t.label=4;case 4:return[2]}}))}))}));var k=function(e,n){if(n){e.setAttribute("aria-hidden","true");e.classList.add("bkkr-page-hidden")}else{e.hidden=false;e.removeAttribute("aria-hidden");e.classList.remove("bkkr-page-hidden")}};var m=function(e,n,r){if(e!==undefined){e.style.zIndex=r==="back"?"99":"101"}if(n!==undefined){n.style.zIndex="100"}}}}}));