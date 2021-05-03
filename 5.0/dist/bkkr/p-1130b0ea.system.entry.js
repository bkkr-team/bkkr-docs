var __awaiter=this&&this.__awaiter||function(t,e,n,r){function i(t){return t instanceof n?t:new n((function(e){e(t)}))}return new(n||(n=Promise))((function(n,o){function a(t){try{u(r.next(t))}catch(t){o(t)}}function s(t){try{u(r["throw"](t))}catch(t){o(t)}}function u(t){t.done?n(t.value):i(t.value).then(a,s)}u((r=r.apply(t,e||[])).next())}))};var __generator=this&&this.__generator||function(t,e){var n={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},r,i,o,a;return a={next:s(0),throw:s(1),return:s(2)},typeof Symbol==="function"&&(a[Symbol.iterator]=function(){return this}),a;function s(t){return function(e){return u([t,e])}}function u(a){if(r)throw new TypeError("Generator is already executing.");while(n)try{if(r=1,i&&(o=a[0]&2?i["return"]:a[0]?i["throw"]||((o=i["return"])&&o.call(i),0):i.next)&&!(o=o.call(i,a[1])).done)return o;if(i=0,o)a=[a[0]&2,o.value];switch(a[0]){case 0:case 1:o=a;break;case 4:n.label++;return{value:a[1],done:false};case 5:n.label++;i=a[1];a=[0];continue;case 7:a=n.ops.pop();n.trys.pop();continue;default:if(!(o=n.trys,o=o.length>0&&o[o.length-1])&&(a[0]===6||a[0]===2)){n=0;continue}if(a[0]===3&&(!o||a[1]>o[0]&&a[1]<o[3])){n.label=a[1];break}if(a[0]===6&&n.label<o[1]){n.label=o[1];o=a;break}if(o&&n.label<o[2]){n.label=o[2];n.ops.push(a);break}if(o[2])n.ops.pop();n.trys.pop();continue}a=e.call(t,n)}catch(t){a=[6,t];i=0}finally{r=o=0}if(a[0]&5)throw a[1];return{value:a[0]?a[1]:void 0,done:true}}};System.register(["./p-09f46bfd.system.js","./p-6df88714.system.js","./p-72a8c2e7.system.js","./p-7e283b4e.system.js","./p-d0c60236.system.js"],(function(t){"use strict";var e,n,r,i,o,a,s;return{setters:[function(t){e=t.r;n=t.c;r=t.h;i=t.g},function(t){o=t.a;a=t.d},function(t){s=t.t},function(){},function(){}],execute:function(){var u=":host{top:0;right:0;bottom:0;left:0;position:absolute;contain:layout size style;overflow:hidden;z-index:0}";var c=t("bkkr_router_outlet",function(){function t(t){e(this,t);this.bkkrNavWillLoad=n(this,"bkkrNavWillLoad",7);this.bkkrNavWillChange=n(this,"bkkrNavWillChange",3);this.bkkrNavDidChange=n(this,"bkkrNavDidChange",3);this.animated=true}t.prototype.componentWillLoad=function(){this.bkkrNavWillLoad.emit()};t.prototype.disconnectedCallback=function(){if(this.gesture){this.gesture.destroy();this.gesture=undefined}};t.prototype.commit=function(t,e,n){return __awaiter(this,void 0,void 0,(function(){var r,i,o;return __generator(this,(function(a){switch(a.label){case 0:return[4,this.lock()];case 1:r=a.sent();i=false;a.label=2;case 2:a.trys.push([2,4,,5]);return[4,this.transition(t,e,n)];case 3:i=a.sent();return[3,5];case 4:o=a.sent();console.error(o);return[3,5];case 5:r();return[2,i]}}))}))};t.prototype.setRouteId=function(t,e,n){return __awaiter(this,void 0,void 0,(function(){var r;return __generator(this,(function(i){switch(i.label){case 0:return[4,this.setRoot(t,e,{duration:n==="root"?0:undefined,direction:n==="back"?"back":"forward"})];case 1:r=i.sent();return[2,{changed:r,element:this.activeEl}]}}))}))};t.prototype.getRouteId=function(){return __awaiter(this,void 0,void 0,(function(){var t;return __generator(this,(function(e){t=this.activeEl;return[2,t?{id:t.tagName,element:t}:undefined]}))}))};t.prototype.setRoot=function(t,e,n){return __awaiter(this,void 0,void 0,(function(){var r,i;return __generator(this,(function(s){switch(s.label){case 0:if(this.activeComponent===t){return[2,false]}r=this.activeEl;return[4,o(this.delegate,this.el,t,["bkkr-page","bkkr-page-invisible"],e)];case 1:i=s.sent();this.activeComponent=t;this.activeEl=i;return[4,this.commit(i,r,n)];case 2:s.sent();return[4,a(this.delegate,r)];case 3:s.sent();return[2,true]}}))}))};t.prototype.transition=function(t,e,n){if(n===void 0){n={}}return __awaiter(this,void 0,void 0,(function(){var r,i,o;return __generator(this,(function(a){switch(a.label){case 0:if(e===t){return[2,false]}this.bkkrNavWillChange.emit();r=this.el;i=this.animated;o=this.animation||n.animationBuilder;return[4,s(Object.assign(Object.assign({animated:i,enteringEl:t,leavingEl:e,baseEl:r},n),{animationBuilder:o}))];case 1:a.sent();this.bkkrNavDidChange.emit();return[2,true]}}))}))};t.prototype.lock=function(){return __awaiter(this,void 0,void 0,(function(){var t,e;return __generator(this,(function(n){switch(n.label){case 0:t=this.waitPromise;this.waitPromise=new Promise((function(t){return e=t}));if(!(t!==undefined))return[3,2];return[4,t];case 1:n.sent();n.label=2;case 2:return[2,e]}}))}))};t.prototype.render=function(){return r("slot",null)};Object.defineProperty(t.prototype,"el",{get:function(){return i(this)},enumerable:false,configurable:true});return t}());c.style=u}}}));