var __awaiter=this&&this.__awaiter||function(t,e,n,r){function i(t){return t instanceof n?t:new n((function(e){e(t)}))}return new(n||(n=Promise))((function(n,o){function s(t){try{a(r.next(t))}catch(t){o(t)}}function u(t){try{a(r["throw"](t))}catch(t){o(t)}}function a(t){t.done?n(t.value):i(t.value).then(s,u)}a((r=r.apply(t,e||[])).next())}))};var __generator=this&&this.__generator||function(t,e){var n={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},r,i,o,s;return s={next:u(0),throw:u(1),return:u(2)},typeof Symbol==="function"&&(s[Symbol.iterator]=function(){return this}),s;function u(t){return function(e){return a([t,e])}}function a(s){if(r)throw new TypeError("Generator is already executing.");while(n)try{if(r=1,i&&(o=s[0]&2?i["return"]:s[0]?i["throw"]||((o=i["return"])&&o.call(i),0):i.next)&&!(o=o.call(i,s[1])).done)return o;if(i=0,o)s=[s[0]&2,o.value];switch(s[0]){case 0:case 1:o=s;break;case 4:n.label++;return{value:s[1],done:false};case 5:n.label++;i=s[1];s=[0];continue;case 7:s=n.ops.pop();n.trys.pop();continue;default:if(!(o=n.trys,o=o.length>0&&o[o.length-1])&&(s[0]===6||s[0]===2)){n=0;continue}if(s[0]===3&&(!o||s[1]>o[0]&&s[1]<o[3])){n.label=s[1];break}if(s[0]===6&&n.label<o[1]){n.label=o[1];o=s;break}if(o&&n.label<o[2]){n.label=o[2];n.ops.push(s);break}if(o[2])n.ops.pop();n.trys.pop();continue}s=e.call(t,n)}catch(t){s=[6,t];i=0}finally{r=o=0}if(s[0]&5)throw s[1];return{value:s[0]?s[1]:void 0,done:true}}};System.register(["./p-b25c886d.system.js","./p-d0d1fdbb.system.js","./p-96cdd33f.system.js","./p-c510aef9.system.js"],(function(t){"use strict";var e,n,r,i;return{setters:[function(t){e=t.r;n=t.h;r=t.H},function(){},function(){},function(t){i=t.m}],execute:function(){var o=this;var s=function(t){return __awaiter(o,void 0,void 0,(function(){var e,n;return __generator(this,(function(r){switch(r.label){case 0:return[4,i.get(t)];case 1:e=r.sent();n=e;if(!n)return[3,3];return[4,e.isActive()];case 2:n=r.sent();r.label=3;case 3:return[2,!!n]}}))}))};var u=":host{position:relative}:host(.menu-toggle-hidden){display:none}";var a=t("bkkr_menu_toggle",function(){function t(t){var n=this;e(this,t);this.visible=false;this.autoHide=true;this.onClick=function(){return i.toggle(n.menu)}}t.prototype.connectedCallback=function(){this.visibilityChanged()};t.prototype.visibilityChanged=function(){return __awaiter(this,void 0,void 0,(function(){var t;return __generator(this,(function(e){switch(e.label){case 0:t=this;return[4,s(this.menu)];case 1:t.visible=e.sent();return[2]}}))}))};t.prototype.render=function(){var t=this.autoHide&&!this.visible;return n(r,{onClick:this.onClick,"aria-hidden":t?"true":null,class:{"menu-toggle-hidden":t}},n("slot",null))};return t}());a.style=u}}}));