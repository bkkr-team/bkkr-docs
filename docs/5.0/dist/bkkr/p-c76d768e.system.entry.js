var __awaiter=this&&this.__awaiter||function(t,e,n,r){function i(t){return t instanceof n?t:new n((function(e){e(t)}))}return new(n||(n=Promise))((function(n,o){function u(t){try{a(r.next(t))}catch(t){o(t)}}function s(t){try{a(r["throw"](t))}catch(t){o(t)}}function a(t){t.done?n(t.value):i(t.value).then(u,s)}a((r=r.apply(t,e||[])).next())}))};var __generator=this&&this.__generator||function(t,e){var n={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},r,i,o,u;return u={next:s(0),throw:s(1),return:s(2)},typeof Symbol==="function"&&(u[Symbol.iterator]=function(){return this}),u;function s(t){return function(e){return a([t,e])}}function a(u){if(r)throw new TypeError("Generator is already executing.");while(n)try{if(r=1,i&&(o=u[0]&2?i["return"]:u[0]?i["throw"]||((o=i["return"])&&o.call(i),0):i.next)&&!(o=o.call(i,u[1])).done)return o;if(i=0,o)u=[u[0]&2,o.value];switch(u[0]){case 0:case 1:o=u;break;case 4:n.label++;return{value:u[1],done:false};case 5:n.label++;i=u[1];u=[0];continue;case 7:u=n.ops.pop();n.trys.pop();continue;default:if(!(o=n.trys,o=o.length>0&&o[o.length-1])&&(u[0]===6||u[0]===2)){n=0;continue}if(u[0]===3&&(!o||u[1]>o[0]&&u[1]<o[3])){n.label=u[1];break}if(u[0]===6&&n.label<o[1]){n.label=o[1];o=u;break}if(o&&n.label<o[2]){n.label=o[2];n.ops.push(u);break}if(o[2])n.ops.pop();n.trys.pop();continue}u=e.call(t,n)}catch(t){u=[6,t];i=0}finally{r=o=0}if(u[0]&5)throw u[1];return{value:u[0]?u[1]:void 0,done:true}}};System.register(["./p-90bb25f5.system.js","./p-23b96d66.system.js","./p-b9ae5f46.system.js","./p-50317f8b.system.js"],(function(t){"use strict";var e,n,r,i;return{setters:[function(t){e=t.r;n=t.h;r=t.H},function(){},function(){},function(t){i=t.m}],execute:function(){var o=this;var u=function(t){return __awaiter(o,void 0,void 0,(function(){var e,n;return __generator(this,(function(r){switch(r.label){case 0:return[4,i.get(t)];case 1:e=r.sent();n=e;if(!n)return[3,3];return[4,e.isActive()];case 2:n=r.sent();r.label=3;case 3:return[2,!!n]}}))}))};var s=".menu-toggle,:host{position:absolute}.menu-toggle-hidden,:host(.menu-toggle-hidden){display:none}";var a=t("bkkr_menu_toggle",function(){function t(t){var n=this;e(this,t);this.visible=false;this.autoHide=true;this.onClick=function(){return i.toggle(n.menu)}}t.prototype.connectedCallback=function(){this.visibilityChanged()};t.prototype.visibilityChanged=function(){return __awaiter(this,void 0,void 0,(function(){var t;return __generator(this,(function(e){switch(e.label){case 0:t=this;return[4,u(this.menu)];case 1:t.visible=e.sent();return[2]}}))}))};t.prototype.render=function(){var t=this.autoHide&&!this.visible;return n(r,{onClick:this.onClick,"aria-hidden":t?"true":null,class:{"menu-toggle-hidden":t}},n("slot",null))};return t}());a.style=s}}}));