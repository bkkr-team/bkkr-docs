var __awaiter=this&&this.__awaiter||function(t,e,n,r){function o(t){return t instanceof n?t:new n((function(e){e(t)}))}return new(n||(n=Promise))((function(n,i){function a(t){try{c(r.next(t))}catch(t){i(t)}}function u(t){try{c(r["throw"](t))}catch(t){i(t)}}function c(t){t.done?n(t.value):o(t.value).then(a,u)}c((r=r.apply(t,e||[])).next())}))};var __generator=this&&this.__generator||function(t,e){var n={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},r,o,i,a;return a={next:u(0),throw:u(1),return:u(2)},typeof Symbol==="function"&&(a[Symbol.iterator]=function(){return this}),a;function u(t){return function(e){return c([t,e])}}function c(a){if(r)throw new TypeError("Generator is already executing.");while(n)try{if(r=1,o&&(i=a[0]&2?o["return"]:a[0]?o["throw"]||((i=o["return"])&&i.call(o),0):o.next)&&!(i=i.call(o,a[1])).done)return i;if(o=0,i)a=[a[0]&2,i.value];switch(a[0]){case 0:case 1:i=a;break;case 4:n.label++;return{value:a[1],done:false};case 5:n.label++;o=a[1];a=[0];continue;case 7:a=n.ops.pop();n.trys.pop();continue;default:if(!(i=n.trys,i=i.length>0&&i[i.length-1])&&(a[0]===6||a[0]===2)){n=0;continue}if(a[0]===3&&(!i||a[1]>i[0]&&a[1]<i[3])){n.label=a[1];break}if(a[0]===6&&n.label<i[1]){n.label=i[1];i=a;break}if(i&&n.label<i[2]){n.label=i[2];n.ops.push(a);break}if(i[2])n.ops.pop();n.trys.pop();continue}a=e.call(t,n)}catch(t){a=[6,t];o=0}finally{r=i=0}if(a[0]&5)throw a[1];return{value:a[0]?a[1]:void 0,done:true}}};System.register(["./p-92f7c087.system.js"],(function(t,e){"use strict";var n,r,o;return{setters:[function(t){n=t.r;r=t.h;o=t.H}],execute:function(){var i=".root{top:0;right:0;bottom:0;left:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:justify;justify-content:space-between;background-color:var(--bkkr-background-color);contain:layout size style;overflow:hidden;z-index:0}.root bkkr-header:first-of-type{--padding-top:var(--safe-area-top)}.root bkkr-content:first-child{--padding-top:var(--safe-area-top)}.root bkkr-content:last-child{--padding-bottom:var(--safe-area-bottom)}.root bkkr-footer:last-of-type{--padding-bottom:var(--safe-area-bottom)}";var a=t("bkkr_root",function(){function t(t){n(this,t)}t.prototype.componentDidLoad=function(){var t=this;u((function(){return __awaiter(t,void 0,void 0,(function(){return __generator(this,(function(t){e.import("./p-c6061594.system.js").then((function(t){return t.handleClick()}));e.import("./p-469c2a9e.system.js").then((function(t){return t.handleFocus()}));return[2]}))}))}))};t.prototype.render=function(){return r(o,{class:"root"},r("slot",null))};return t}());var u=function(t){if("requestIdleCallback"in window){window.requestIdleCallback(t)}else{setTimeout(t,32)}};a.style=i}}}));