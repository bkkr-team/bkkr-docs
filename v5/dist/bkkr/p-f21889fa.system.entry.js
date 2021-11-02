var __awaiter=this&&this.__awaiter||function(t,e,r,n){function i(t){return t instanceof r?t:new r((function(e){e(t)}))}return new(r||(r=Promise))((function(r,o){function s(t){try{u(n.next(t))}catch(t){o(t)}}function a(t){try{u(n["throw"](t))}catch(t){o(t)}}function u(t){t.done?r(t.value):i(t.value).then(s,a)}u((n=n.apply(t,e||[])).next())}))};var __generator=this&&this.__generator||function(t,e){var r={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},n,i,o,s;return s={next:a(0),throw:a(1),return:a(2)},typeof Symbol==="function"&&(s[Symbol.iterator]=function(){return this}),s;function a(t){return function(e){return u([t,e])}}function u(s){if(n)throw new TypeError("Generator is already executing.");while(r)try{if(n=1,i&&(o=s[0]&2?i["return"]:s[0]?i["throw"]||((o=i["return"])&&o.call(i),0):i.next)&&!(o=o.call(i,s[1])).done)return o;if(i=0,o)s=[s[0]&2,o.value];switch(s[0]){case 0:case 1:o=s;break;case 4:r.label++;return{value:s[1],done:false};case 5:r.label++;i=s[1];s=[0];continue;case 7:s=r.ops.pop();r.trys.pop();continue;default:if(!(o=r.trys,o=o.length>0&&o[o.length-1])&&(s[0]===6||s[0]===2)){r=0;continue}if(s[0]===3&&(!o||s[1]>o[0]&&s[1]<o[3])){r.label=s[1];break}if(s[0]===6&&r.label<o[1]){r.label=o[1];o=s;break}if(o&&r.label<o[2]){r.label=o[2];r.ops.push(s);break}if(o[2])r.ops.pop();r.trys.pop();continue}s=e.call(t,r)}catch(t){s=[6,t];i=0}finally{n=o=0}if(s[0]&5)throw s[1];return{value:s[0]?s[1]:void 0,done:true}}};
/*!
 * (C) BKKR Framework https://bkkr-team.github.io/bkkr-docs/ - MIT License
 */System.register(["./p-739d5869.system.js"],(function(t){"use strict";var e,r,n,i,o;return{setters:[function(t){e=t.r;r=t.c;n=t.h;i=t.H;o=t.g}],execute:function(){var s=":host{top:0;right:0;bottom:0;left:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;width:100%;height:100%;contain:layout size style;z-index:0}.tabs-inner{position:relative;-ms-flex:1;flex:1;contain:layout size style}";var a=t("bkkr_tabs",function(){function t(t){var n=this;e(this,t);this.bkkrNavWillLoad=r(this,"bkkrNavWillLoad",7);this.bkkrTabsWillChange=r(this,"bkkrTabsWillChange",3);this.bkkrTabsDidChange=r(this,"bkkrTabsDidChange",3);this.transitioning=false;this.useRouter=false;this.onNavClicked=function(t){var e=t.detail,r=e.href,i=e.nav;if(n.useRouter&&r!==undefined){var o=document.querySelector("bkkr-router");if(o){o.push(r)}}else{n.select(i)}}}t.prototype.componentWillLoad=function(){return __awaiter(this,void 0,void 0,(function(){var t;return __generator(this,(function(e){switch(e.label){case 0:if(!this.useRouter){this.useRouter=!!document.querySelector("bkkr-router")&&!this.el.closest("[no-router]")}if(!!this.useRouter)return[3,2];t=this.tabs;if(!(t.length>0))return[3,2];return[4,this.select(t[0])];case 1:e.sent();e.label=2;case 2:this.bkkrNavWillLoad.emit();return[2]}}))}))};t.prototype.componentWillRender=function(){var t=this.el.querySelector("bkkr-navs");if(t){var e=this.selectedTab?this.selectedTab.tab:undefined;t.selectedNav=e}};t.prototype.select=function(t){return __awaiter(this,void 0,void 0,(function(){var e;return __generator(this,(function(r){switch(r.label){case 0:e=u(this.tabs,t);if(!this.shouldSwitch(e)){return[2,false]}return[4,this.setActive(e)];case 1:r.sent();return[4,this.notifyRouter()];case 2:r.sent();this.tabSwitch();return[2,true]}}))}))};t.prototype.getTab=function(t){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(e){return[2,u(this.tabs,t)]}))}))};t.prototype.getSelected=function(){return Promise.resolve(this.selectedTab?this.selectedTab.tab:undefined)};t.prototype.setRouteId=function(t){return __awaiter(this,void 0,void 0,(function(){var e;var r=this;return __generator(this,(function(n){switch(n.label){case 0:e=u(this.tabs,t);if(!this.shouldSwitch(e)){return[2,{changed:false,element:this.selectedTab}]}return[4,this.setActive(e)];case 1:n.sent();return[2,{changed:true,element:this.selectedTab,markVisible:function(){return r.tabSwitch()}}]}}))}))};t.prototype.getRouteId=function(){return __awaiter(this,void 0,void 0,(function(){var t;return __generator(this,(function(e){t=this.selectedTab&&this.selectedTab.tab;return[2,t!==undefined?{id:t,element:this.selectedTab}:undefined]}))}))};t.prototype.setActive=function(t){if(this.transitioning){return Promise.reject("transitioning already happening")}this.transitioning=true;this.leavingTab=this.selectedTab;this.selectedTab=t;this.bkkrTabsWillChange.emit({tab:t.tab});t.active=true;return Promise.resolve()};t.prototype.tabSwitch=function(){var t=this.selectedTab;var e=this.leavingTab;this.leavingTab=undefined;this.transitioning=false;if(!t){return}if(e!==t){if(e){e.active=false}this.bkkrTabsDidChange.emit({tab:t.tab})}};t.prototype.notifyRouter=function(){if(this.useRouter){var t=document.querySelector("bkkr-router");if(t){return t.navChanged("forward")}}return Promise.resolve(false)};t.prototype.shouldSwitch=function(t){var e=this.selectedTab;return t!==undefined&&t!==e&&!this.transitioning};Object.defineProperty(t.prototype,"tabs",{get:function(){return Array.from(this.el.querySelectorAll("bkkr-tab"))},enumerable:false,configurable:true});t.prototype.render=function(){return n(i,{onBkkrNavButtonClick:this.onNavClicked},n("slot",{name:"top"}),n("div",{class:"tabs-inner"},n("slot",null)),n("slot",{name:"bottom"}))};Object.defineProperty(t.prototype,"el",{get:function(){return o(this)},enumerable:false,configurable:true});return t}());var u=function(t,e){var r=typeof e==="string"?t.find((function(t){return t.tab===e})):e;if(!r){console.error('tab with id: "'+r+'" does not exist')}return r};a.style=s}}}));