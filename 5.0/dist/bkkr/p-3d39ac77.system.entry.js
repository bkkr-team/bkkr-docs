var __awaiter=this&&this.__awaiter||function(t,e,i,n){function r(t){return t instanceof i?t:new i((function(e){e(t)}))}return new(i||(i=Promise))((function(i,a){function l(t){try{s(n.next(t))}catch(t){a(t)}}function o(t){try{s(n["throw"](t))}catch(t){a(t)}}function s(t){t.done?i(t.value):r(t.value).then(l,o)}s((n=n.apply(t,e||[])).next())}))};var __generator=this&&this.__generator||function(t,e){var i={label:0,sent:function(){if(a[0]&1)throw a[1];return a[1]},trys:[],ops:[]},n,r,a,l;return l={next:o(0),throw:o(1),return:o(2)},typeof Symbol==="function"&&(l[Symbol.iterator]=function(){return this}),l;function o(t){return function(e){return s([t,e])}}function s(l){if(n)throw new TypeError("Generator is already executing.");while(i)try{if(n=1,r&&(a=l[0]&2?r["return"]:l[0]?r["throw"]||((a=r["return"])&&a.call(r),0):r.next)&&!(a=a.call(r,l[1])).done)return a;if(r=0,a)l=[l[0]&2,a.value];switch(l[0]){case 0:case 1:a=l;break;case 4:i.label++;return{value:l[1],done:false};case 5:i.label++;r=l[1];l=[0];continue;case 7:l=i.ops.pop();i.trys.pop();continue;default:if(!(a=i.trys,a=a.length>0&&a[a.length-1])&&(l[0]===6||l[0]===2)){i=0;continue}if(l[0]===3&&(!a||l[1]>a[0]&&l[1]<a[3])){i.label=l[1];break}if(l[0]===6&&i.label<a[1]){i.label=a[1];a=l;break}if(a&&i.label<a[2]){i.label=a[2];i.ops.push(l);break}if(a[2])i.ops.pop();i.trys.pop();continue}l=e.call(t,i)}catch(t){l=[6,t];r=0}finally{n=a=0}if(l[0]&5)throw l[1];return{value:l[0]?l[1]:void 0,done:true}}};System.register(["./p-92f7c087.system.js","./p-7c3866d2.system.js","./p-5fcc633d.system.js"],(function(t){"use strict";var e,i,n,r,a,l,o,s,c;return{setters:[function(t){e=t.r;i=t.e;n=t.c;r=t.i;a=t.h;l=t.H;o=t.g},function(t){s=t.o},function(t){c=t.s}],execute:function(){var u=".paginator-enabled{display:block}.paginator-infinite.paginator-enabled{min-height:84px}.paginator-loading-content{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;display:none;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;width:100%;min-height:84px;text-align:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.paginator-loading-text{margin-left:32px;margin-right:32px;margin-top:4px;margin-bottom:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.paginator-loading-text{margin-left:unset;margin-right:unset;-webkit-margin-start:32px;margin-inline-start:32px;-webkit-margin-end:32px;margin-inline-end:32px}}.paginator-loading>.paginator-loading-content{display:-ms-flexbox;display:flex}.paginator-toolbar{padding-top:var(--bkkr-spacer)}";var h=t("bkkr_paginator",function(){function t(t){var n=this;e(this,t);this.bkkrPaginator=i(this,"bkkrPaginator",7);this.thrPx=0;this.thrPc=0;this.didFire=false;this.isBusy=false;this.isLoading=false;this.threshold="15%";this.page=1;this.infinite=false;this.toolbar=true;this.position="bottom";this.loadingSpinner="crescent";this.disabled=false;this.routerDirection="forward";this.onScroll=function(){var t=n.scrollEl;if(!t||!n.canStart()){return 1}var e=n.el.offsetHeight;console.log(n.el.offsetHeight);if(e===0){return 2}var i=t.scrollTop;var r=t.scrollHeight;var a=t.offsetHeight;var l=n.thrPc!==0?a*n.thrPc:n.thrPx;var o=n.position==="bottom"?r-e-i-l-a:i-e-l;if(o<0){if(!n.didFire){n.isLoading=true;n.didFire=true;n.page+=1;n.bkkrPaginator.emit();return 3}}else{n.didFire=false}return 4};this.handleClick=function(t,e){n.changeIndex(e);if(n.href!==undefined){s(n.href+e,t,n.routerDirection)}}}t.prototype.thresholdChanged=function(){var t=this.threshold;if(t.lastIndexOf("%")>-1){this.thrPx=0;this.thrPc=parseFloat(t)/100}else{this.thrPx=parseFloat(t);this.thrPc=0}};t.prototype.infiniteChanged=function(){var t=this.infinite&&!this.disabled;if(!t){this.isLoading=false;this.isBusy=false}this.enableScrollEvents(t)};t.prototype.disabledChanged=function(){var t=this.disabled;if(t){this.isLoading=false;this.isBusy=false;this.infinite=false}};t.prototype.connectedCallback=function(){return __awaiter(this,void 0,void 0,(function(){var t,e;var i=this;return __generator(this,(function(r){switch(r.label){case 0:t=this.el.closest("bkkr-content");if(!t){console.error("<bkkr-paginator> must be used inside an <bkkr-content>");return[2]}e=this;return[4,t.getScrollElement()];case 1:e.scrollEl=r.sent();if(this.position==="top"){n((function(){if(i.scrollEl){i.scrollEl.scrollTop=i.scrollEl.scrollHeight-i.scrollEl.clientHeight}}))}return[2]}}))}))};t.prototype.disconnectedCallback=function(){this.enableScrollEvents(false);this.scrollEl=undefined};t.prototype.changeIndex=function(t){if(!this.isLoading){this.isLoading=true;this.page=t;this.bkkrPaginator.emit()}};t.prototype.complete=function(){return __awaiter(this,void 0,void 0,(function(){var t,e;var i=this;return __generator(this,(function(a){t=this.scrollEl;if(!this.isLoading||!t){return[2]}this.isLoading=false;if(this.position==="top"){this.isBusy=true;e=t.scrollHeight-t.scrollTop;requestAnimationFrame((function(){r((function(){var r=t.scrollHeight;var a=r-e;requestAnimationFrame((function(){n((function(){t.scrollTop=a;i.isBusy=false}))}))}))}))}return[2]}))}))};t.prototype.canStart=function(){return!this.disabled&&!this.isBusy&&!!this.scrollEl&&!this.isLoading&&!!this.infinite};t.prototype.enableScrollEvents=function(t){if(this.scrollEl){if(t){this.scrollEl.addEventListener("scroll",this.onScroll)}else{this.scrollEl.removeEventListener("scroll",this.onScroll)}}};t.prototype.render=function(){var t=this;var e=this,i=e.disabled,n=e.infinite,r=e.items,o=e.href,s=e.lenght,u=e.page,h=e.isLoading,d=e.loadingSpinner,p=e.loadingText,g=e.toolbar,b=e.handleClick;var k=n?1:u*s-(s-1);var m=Math.min(u*s,r);var v=Math.ceil(r/s);var y=k>1;var x=m<r;var w=[];var E=false;for(var C=1;C<=v;C++){if(C===1||C===v||C>=u-1&&C<u+2){w.push({index:C,label:C,selected:C===u?true:null});E=false}else{if(!E&&C>1&&(C>=u-1||C<u+2)){w.push({index:null,label:"..."});E=true}}}return a(l,{class:{"paginator-loading":h,"paginator-enabled":!i,"paginator-infinite":n}},a("div",{class:"paginator-loading-content"},d&&a("div",{class:"paginator-loading-spinner"},a("bkkr-spinner",{type:d})),p&&a("div",{class:"paginator-loading-text",innerHTML:c(p)})),g&&!n&&a("bkkr-row",{class:"paginator-toolbar align-items-center"},a("bkkr-col",null,a("small",null,k," - ",m," of ",r)),a("bkkr-col",{size:"12","size-lg":"auto",class:"text-center"},a("bkkr-button",{fill:"clear",size:"small",href:o!==undefined?o+(u-1):null,disabled:!y,onClick:function(e){return t.handleClick(e,u-1)}},a("bkkr-icon",{name:"chevron-left"})),w.map((function(t){return f(t,{href:o,handleClick:b})})),a("bkkr-button",{fill:"clear",size:"small",href:o!==undefined?o+(u+1):null,disabled:!x,onClick:function(e){return t.handleClick(e,u+1)}},a("bkkr-icon",{name:"chevron-right"})))))};Object.defineProperty(t.prototype,"el",{get:function(){return o(this)},enumerable:false,configurable:true});Object.defineProperty(t,"watchers",{get:function(){return{threshold:["thresholdChanged"],infinite:["infiniteChanged"],disabled:["disabledChanged"]}},enumerable:false,configurable:true});return t}());var f=function(t,e){var i=e.href,n=e.handleClick;return a("bkkr-button",{href:i&&t.index?i+t.index:null,onClick:function(e){return n(e,t.index)},fill:t.selected?"solid":"clear",disabled:t.index===null,size:"small"},a("bkkr-label",null,t.label))};h.style=u}}}));