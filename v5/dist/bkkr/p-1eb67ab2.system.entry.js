var __awaiter=this&&this.__awaiter||function(t,e,n,r){function o(t){return t instanceof n?t:new n((function(e){e(t)}))}return new(n||(n=Promise))((function(n,a){function i(t){try{u(r.next(t))}catch(t){a(t)}}function s(t){try{u(r["throw"](t))}catch(t){a(t)}}function u(t){t.done?n(t.value):o(t.value).then(i,s)}u((r=r.apply(t,e||[])).next())}))};var __generator=this&&this.__generator||function(t,e){var n={label:0,sent:function(){if(a[0]&1)throw a[1];return a[1]},trys:[],ops:[]},r,o,a,i;return i={next:s(0),throw:s(1),return:s(2)},typeof Symbol==="function"&&(i[Symbol.iterator]=function(){return this}),i;function s(t){return function(e){return u([t,e])}}function u(i){if(r)throw new TypeError("Generator is already executing.");while(n)try{if(r=1,o&&(a=i[0]&2?o["return"]:i[0]?o["throw"]||((a=o["return"])&&a.call(o),0):o.next)&&!(a=a.call(o,i[1])).done)return a;if(o=0,a)i=[i[0]&2,a.value];switch(i[0]){case 0:case 1:a=i;break;case 4:n.label++;return{value:i[1],done:false};case 5:n.label++;o=i[1];i=[0];continue;case 7:i=n.ops.pop();n.trys.pop();continue;default:if(!(a=n.trys,a=a.length>0&&a[a.length-1])&&(i[0]===6||i[0]===2)){n=0;continue}if(i[0]===3&&(!a||i[1]>a[0]&&i[1]<a[3])){n.label=i[1];break}if(i[0]===6&&n.label<a[1]){n.label=a[1];a=i;break}if(a&&n.label<a[2]){n.label=a[2];n.ops.push(i);break}if(a[2])n.ops.pop();n.trys.pop();continue}i=e.call(t,n)}catch(t){i=[6,t];o=0}finally{r=a=0}if(i[0]&5)throw i[1];return{value:i[0]?i[1]:void 0,done:true}}};System.register(["./p-3fd5d37b.system.js"],(function(t,e){"use strict";var n,r,o,a;return{setters:[function(t){n=t.r;r=t.h;o=t.H;a=t.g}],execute:function(){var i=".root{top:0;right:0;bottom:0;left:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:justify;justify-content:space-between;contain:layout size style;overflow:hidden;z-index:0}.root bkkr-header:first-of-type{--padding-top:calc(var(--safe-area-top, 0px) + var(--offset-top, 0px))}.root bkkr-content:first-child{--padding-top:calc(\n    var(--bkkr-spacer, 16px) + var(--safe-area-top, 0px) +\n      var(--offset-top, 0px)\n  )}.root bkkr-content:last-child{--padding-bottom:calc(\n    var(--bkkr-spacer, 16px) + var(--safe-area-bottom, 0px) +\n      var(--offset-bottom, 0px)\n  )}.root bkkr-footer:last-of-type{--padding-bottom:calc(\n    var(--safe-area-bottom, 0px) + var(--offset-bottom, 0px)\n  )}";var s=t("bkkr_root",function(){function t(t){n(this,t)}t.prototype.componentDidLoad=function(){var t=this;u((function(){return __awaiter(t,void 0,void 0,(function(){var t=this;return __generator(this,(function(n){e.import("./p-07363ab0.system.js").then((function(t){return t.handleClick()}));e.import("./p-050734d6.system.js").then((function(e){return t.handleFocus=e.handleFocus()}));return[2]}))}))}))};t.prototype.setFocus=function(t){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(e){if(this.handleFocus){this.handleFocus.setFocus(t)}return[2]}))}))};t.prototype.render=function(){return r(o,{class:"root"},r("slot",null))};Object.defineProperty(t.prototype,"el",{get:function(){return a(this)},enumerable:false,configurable:true});return t}());var u=function(t){if("requestIdleCallback"in window){window.requestIdleCallback(t)}else{setTimeout(t,32)}};s.style=i}}}));