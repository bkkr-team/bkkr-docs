var __awaiter=this&&this.__awaiter||function(t,e,n,i){function r(t){return t instanceof n?t:new n((function(e){e(t)}))}return new(n||(n=Promise))((function(n,o){function a(t){try{s(i.next(t))}catch(t){o(t)}}function u(t){try{s(i["throw"](t))}catch(t){o(t)}}function s(t){t.done?n(t.value):r(t.value).then(a,u)}s((i=i.apply(t,e||[])).next())}))};var __generator=this&&this.__generator||function(t,e){var n={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},i,r,o,a;return a={next:u(0),throw:u(1),return:u(2)},typeof Symbol==="function"&&(a[Symbol.iterator]=function(){return this}),a;function u(t){return function(e){return s([t,e])}}function s(a){if(i)throw new TypeError("Generator is already executing.");while(n)try{if(i=1,r&&(o=a[0]&2?r["return"]:a[0]?r["throw"]||((o=r["return"])&&o.call(r),0):r.next)&&!(o=o.call(r,a[1])).done)return o;if(r=0,o)a=[a[0]&2,o.value];switch(a[0]){case 0:case 1:o=a;break;case 4:n.label++;return{value:a[1],done:false};case 5:n.label++;r=a[1];a=[0];continue;case 7:a=n.ops.pop();n.trys.pop();continue;default:if(!(o=n.trys,o=o.length>0&&o[o.length-1])&&(a[0]===6||a[0]===2)){n=0;continue}if(a[0]===3&&(!o||a[1]>o[0]&&a[1]<o[3])){n.label=a[1];break}if(a[0]===6&&n.label<o[1]){n.label=o[1];o=a;break}if(o&&n.label<o[2]){n.label=o[2];n.ops.push(a);break}if(o[2])n.ops.pop();n.trys.pop();continue}a=e.call(t,n)}catch(t){a=[6,t];r=0}finally{i=o=0}if(a[0]&5)throw a[1];return{value:a[0]?a[1]:void 0,done:true}}};System.register(["./p-3fd5d37b.system.js","./p-dcbbc512.system.js","./p-7e283b4e.system.js","./p-749e6e2c.system.js"],(function(t){"use strict";var e,n,i,r;return{setters:[function(t){e=t.r;n=t.h;i=t.H},function(t){r=t.m},function(){},function(){}],execute:function(){var o=this;var a=function(t){return __awaiter(o,void 0,void 0,(function(){var e,n;return __generator(this,(function(i){switch(i.label){case 0:return[4,r.get(t)];case 1:e=i.sent();n=e;if(!n)return[3,3];return[4,e.isActive()];case 2:n=i.sent();i.label=3;case 3:return[2,!!n]}}))}))};var u=":host{position:relative;-ms-touch-action:manipulation;touch-action:manipulation}:host(.menu-toggle-hidden){display:none}";var s=t("bkkr_menu_toggle",function(){function t(t){var n=this;e(this,t);this.visible=false;this.autoHide=true;this.onClick=function(){return r.toggle(n.menu)}}t.prototype.connectedCallback=function(){this.visibilityChanged()};t.prototype.visibilityChanged=function(){return __awaiter(this,void 0,void 0,(function(){var t;return __generator(this,(function(e){switch(e.label){case 0:t=this;return[4,a(this.menu)];case 1:t.visible=e.sent();return[2]}}))}))};t.prototype.render=function(){var t=this.autoHide&&!this.visible;return n(i,{onClick:this.onClick,"aria-hidden":t?"true":null,class:{"menu-toggle-hidden":t}},n("slot",null))};return t}());s.style=u}}}));