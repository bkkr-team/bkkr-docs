var __awaiter=this&&this.__awaiter||function(t,n,i,e){function a(t){return t instanceof i?t:new i((function(n){n(t)}))}return new(i||(i=Promise))((function(i,r){function o(t){try{l(e.next(t))}catch(t){r(t)}}function s(t){try{l(e["throw"](t))}catch(t){r(t)}}function l(t){t.done?i(t.value):a(t.value).then(o,s)}l((e=e.apply(t,n||[])).next())}))};var __generator=this&&this.__generator||function(t,n){var i={label:0,sent:function(){if(r[0]&1)throw r[1];return r[1]},trys:[],ops:[]},e,a,r,o;return o={next:s(0),throw:s(1),return:s(2)},typeof Symbol==="function"&&(o[Symbol.iterator]=function(){return this}),o;function s(t){return function(n){return l([t,n])}}function l(o){if(e)throw new TypeError("Generator is already executing.");while(i)try{if(e=1,a&&(r=o[0]&2?a["return"]:o[0]?a["throw"]||((r=a["return"])&&r.call(a),0):a.next)&&!(r=r.call(a,o[1])).done)return r;if(a=0,r)o=[o[0]&2,r.value];switch(o[0]){case 0:case 1:r=o;break;case 4:i.label++;return{value:o[1],done:false};case 5:i.label++;a=o[1];o=[0];continue;case 7:o=i.ops.pop();i.trys.pop();continue;default:if(!(r=i.trys,r=r.length>0&&r[r.length-1])&&(o[0]===6||o[0]===2)){i=0;continue}if(o[0]===3&&(!r||o[1]>r[0]&&o[1]<r[3])){i.label=o[1];break}if(o[0]===6&&i.label<r[1]){i.label=r[1];r=o;break}if(r&&i.label<r[2]){i.label=r[2];i.ops.push(o);break}if(r[2])i.ops.pop();i.trys.pop();continue}o=n.call(t,i)}catch(t){o=[6,t];a=0}finally{e=r=0}if(o[0]&5)throw o[1];return{value:o[0]?o[1]:void 0,done:true}}};System.register(["./p-92f7c087.system.js","./p-5fcc633d.system.js"],(function(t){"use strict";var n,i,e,a,r,o,s,l,d;return{setters:[function(t){n=t.r;i=t.e;e=t.f;a=t.c;r=t.i;o=t.h;s=t.H;l=t.g},function(t){d=t.s}],execute:function(){var c='.paginator-enabled{--padding-top:0;--padding-start:0;--padding-end:0;--padding-bottom:0;--toolbar-padding-top:var(--bkkr-spacer, 16px);--toolbar-padding-start:0;--toolbar-padding-end:0;--toolbar-padding-bottom:0;display:block}.paginator-infinite.paginator-enabled{min-height:84px}.paginator-content{padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.paginator-content{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.paginator-loading-ambient .paginator-content{--background:radial-gradient(var(--color-base, var(--color-primary, #3880ff)), var(--color-base, var(--color-primary, #3880ff))), radial-gradient(transparent, transparent), radial-gradient(var(--color-base, var(--color-primary, #3880ff)), var(--color-base, var(--color-primary, #3880ff))), radial-gradient(transparent, transparent);--border-radius:0.75em;border-radius:var(--border-radius);position:relative;overflow:hidden}.paginator-loading-ambient .paginator-content::before{top:0;left:50%;position:absolute;width:100vw;height:100vw;-webkit-transform-origin:center top;transform-origin:center top;-webkit-transition:0.2s opacity cubic-bezier(0.32, 0.72, 0, 1);transition:0.2s opacity cubic-bezier(0.32, 0.72, 0, 1);background-image:var(--background);background-repeat:no-repeat;background-position:0 0, 100% 0, 100% 100%, 0 100%;background-size:50% 50%, 50% 50%;content:"";-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:-2;-webkit-animation-name:shimmer;animation-name:shimmer;-webkit-animation-duration:5s;animation-duration:5s;-webkit-animation-timing-function:cubic-bezier(0.32, 0.72, 0, 1);animation-timing-function:cubic-bezier(0.32, 0.72, 0, 1);-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;-webkit-animation-play-state:paused;animation-play-state:paused;pointer-events:none}.paginator-loading-ambient .paginator-content::after{border-radius:var(--border-radius);top:50%;left:50%;position:absolute;width:100%;height:100%;-webkit-transform:translate(-50%, -50%);transform:translate(-50%, -50%);-webkit-transition:0.2s height cubic-bezier(0.32, 0.72, 0, 1), 0.2s -webkit-transform cubic-bezier(0.32, 0.72, 0, 1);transition:0.2s height cubic-bezier(0.32, 0.72, 0, 1), 0.2s -webkit-transform cubic-bezier(0.32, 0.72, 0, 1);transition:0.2s transform cubic-bezier(0.32, 0.72, 0, 1), 0.2s height cubic-bezier(0.32, 0.72, 0, 1);transition:0.2s transform cubic-bezier(0.32, 0.72, 0, 1), 0.2s height cubic-bezier(0.32, 0.72, 0, 1), 0.2s -webkit-transform cubic-bezier(0.32, 0.72, 0, 1);background:var(--bkkr-background-color, #fff);-webkit-filter:blur(10px);filter:blur(10px);content:"";-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:-1;pointer-events:none}@-webkit-keyframes shimmer{0%{-webkit-transform:translate(-50%, 100%) scale(1, 0);transform:translate(-50%, 100%) scale(1, 0);opacity:0}50%{-webkit-transform:translate(-50%, 0%) scale(1, 1);transform:translate(-50%, 0%) scale(1, 1);opacity:1}100%{-webkit-transform:translate(-50%, 0%) scale(1, 1);transform:translate(-50%, 0%) scale(1, 1);opacity:0}}@keyframes shimmer{0%{-webkit-transform:translate(-50%, 100%) scale(1, 0);transform:translate(-50%, 100%) scale(1, 0);opacity:0}50%{-webkit-transform:translate(-50%, 0%) scale(1, 1);transform:translate(-50%, 0%) scale(1, 1);opacity:1}100%{-webkit-transform:translate(-50%, 0%) scale(1, 1);transform:translate(-50%, 0%) scale(1, 1);opacity:0}}.paginator-loading-content{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;display:none;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;width:100%;min-height:84px;text-align:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.paginator-loading-text{margin-left:32px;margin-right:32px;margin-top:4px;margin-bottom:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.paginator-loading-text{margin-left:unset;margin-right:unset;-webkit-margin-start:32px;margin-inline-start:32px;-webkit-margin-end:32px;margin-inline-end:32px}}.paginator-loading>.paginator-content::before{opacity:1;-webkit-animation-play-state:running;animation-play-state:running}.paginator-loading>.paginator-content::after{width:calc(100% - 12px);height:calc(100% - 12px)}.paginator-loading>.paginator-loading-content{display:-ms-flexbox;display:flex}.paginator-toolbar{margin-left:0;margin-right:-0.9em;margin-top:0;margin-bottom:0;padding-left:var(--toolbar-padding-start);padding-right:var(--toolbar-padding-end);padding-top:var(--toolbar-padding-top);padding-bottom:var(--toolbar-padding-bottom);display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.paginator-toolbar{margin-left:unset;margin-right:unset;-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:-0.9em;margin-inline-end:-0.9em}}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.paginator-toolbar{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--toolbar-padding-start);padding-inline-start:var(--toolbar-padding-start);-webkit-padding-end:var(--toolbar-padding-end);padding-inline-end:var(--toolbar-padding-end)}}.paginator-toolbar bkkr-select{min-width:60px;font-size:0.875em}.paginator-toolbar-fragment{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;width:100%}.paginator-toolbar-fragment bkkr-button{min-width:2.8em}.paginator-toolbar-fragment .paginator-statustext{padding-right:var(--bkkr-spacer, 16px);position:relative}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.paginator-toolbar-fragment .paginator-statustext{padding-right:unset;-webkit-padding-end:var(--bkkr-spacer, 16px);padding-inline-end:var(--bkkr-spacer, 16px)}}.paginator-toolbar-fragment .paginator-statustext:after{top:0;right:0;position:absolute;width:0.55px;height:100%;background-color:var(--bkkr-border, rgba(var(--bkkr-text-color-rgb, 0, 0, 0), 0.1));content:""}';var g=t("bkkr_paginator",function(){function t(t){var e=this;n(this,t);this.bkkrPaginator=i(this,"bkkrPaginator",7);this.bkkrPageSizeChanged=i(this,"bkkrPageSizeChanged",7);this.thrPx=0;this.thrPc=0;this.didFire=false;this.isBusy=false;this.isLoading=false;this.threshold="15%";this.page=1;this.infinite=false;this.toolbar=true;this.position="bottom";this.arrowIcon="chevron";this.statusText="/";this.loadingType="ambient";this.loadingSpinner="crescent";this.disabled=false;this.routerDirection="forward";this.onScroll=function(){var t=e.scrollEl;if(!t||!e.canStart()){return 1}var n=t.scrollTop;var i=t.scrollHeight;var a=t.offsetHeight;var r=e.thrPc!==0?a*e.thrPc:e.thrPx;var o=e.position==="bottom"?i-n-r-a:n-r;if(o<0){if(!e.didFire){e.isLoading=true;e.didFire=true;e.page+=1;e.bkkrPaginator.emit();return 3}}else{e.didFire=false}return 4};this.handleClick=function(t,n){t.preventDefault();e.changeIndex(n)};this.handleLenghtChange=function(t){e.lenght=t.detail.value;var n=e.page*e.lenght;if(n>e.items){e.page=Math.ceil(e.items/e.lenght)}e.bkkrPageSizeChanged.emit()}}t.prototype.thresholdChanged=function(){var t=this.threshold;if(t.lastIndexOf("%")>-1){this.thrPx=0;this.thrPc=parseFloat(t)/100}else{this.thrPx=parseFloat(t);this.thrPc=0}};t.prototype.itemsChanged=function(){e(this)};t.prototype.pageChanged=function(){e(this)};t.prototype.infiniteChanged=function(){var t=this.infinite&&!this.disabled;if(!t){this.isLoading=false;this.isBusy=false}this.enableScrollEvents(t)};t.prototype.disabledChanged=function(){var t=this.disabled;if(t){this.isLoading=false;this.isBusy=false;this.infinite=false}};t.prototype.connectedCallback=function(){return __awaiter(this,void 0,void 0,(function(){var t,n;var i=this;return __generator(this,(function(e){switch(e.label){case 0:t=this.el.closest("bkkr-content");if(!t){console.error("<bkkr-paginator> must be used inside an <bkkr-content>");return[2]}n=this;return[4,t.getScrollElement()];case 1:n.scrollEl=e.sent();this.thresholdChanged();this.infiniteChanged();this.disabledChanged();if(this.position==="top"){a((function(){if(i.scrollEl){i.scrollEl.scrollTop=i.scrollEl.scrollHeight-i.scrollEl.clientHeight}}))}return[2]}}))}))};t.prototype.onResize=function(){e(this)};t.prototype.disconnectedCallback=function(){this.enableScrollEvents(false);this.scrollEl=undefined};t.prototype.changeIndex=function(t){if(!this.isLoading){this.isLoading=true;this.page=t;this.bkkrPaginator.emit()}};t.prototype.complete=function(){return __awaiter(this,void 0,void 0,(function(){var t,n;var i=this;return __generator(this,(function(e){t=this.scrollEl;if(!this.isLoading||!t){return[2]}this.isLoading=false;if(this.position==="top"){this.isBusy=true;n=t.scrollHeight-t.scrollTop;requestAnimationFrame((function(){r((function(){var e=t.scrollHeight;var r=e-n;requestAnimationFrame((function(){a((function(){t.scrollTop=r;i.isBusy=false}))}))}))}))}return[2]}))}))};t.prototype.canStart=function(){return!this.disabled&&!this.isBusy&&!!this.scrollEl&&!this.isLoading&&!!this.infinite};t.prototype.enableScrollEvents=function(t){if(this.scrollEl){if(t){this.scrollEl.addEventListener("scroll",this.onScroll)}else{this.scrollEl.removeEventListener("scroll",this.onScroll)}}};t.prototype.render=function(){var t;var n=this;var i=this,e=i.disabled,a=i.infinite,r=i.items,l=i.href,c=i.lenght,g=i.page,u=i.isLoading,f=i.loadingType,h=i.loadingSpinner,b=i.loadingText,m=i.toolbar,k=i.arrowIcon,v=i.statusText,w=i.handleClick;var y=window.innerWidth<768;var x=a?1:g*c-(c-1);var C=Math.min(g*c,r);var z=Math.ceil(r/c);var E=x>1;var P=C<r;var S=[];var _=false;for(var L=1;L<=z;L++){if(L===1||L===z||L>=g-1&&L<g+2){S.push({index:L,label:L,selected:L===g?true:null});_=false}else{if(!_&&L>1&&(L>=g-1||L<g+2)){S.push({index:null,label:"..."});_=true}}}return o(s,{class:(t={"paginator-loading":u,"paginator-enabled":!e,"paginator-infinite":a},t["paginator-loading-"+f]=true,t)},o("div",{class:"paginator-content"},o("slot",null)),f==="spinner"&&o("div",{class:"paginator-loading-content"},h&&o("div",{class:"paginator-loading-spinner"},o("bkkr-spinner",{type:h})),b&&o("div",{class:"paginator-loading-text",innerHTML:d(b)})),m&&!a&&o("nav",{class:"paginator-toolbar"},!y&&o("div",{class:"paginator-toolbar-fragment"},o("small",{class:"paginator-statustext"},x," - ",C," ",v," ",r),o("bkkr-select",{value:15,search:false,interface:"popover",onBkkrChange:function(t){return n.handleLenghtChange(t)}},o("bkkr-select-option",{value:15},"15"),o("bkkr-select-option",{value:30},"30"),o("bkkr-select-option",{value:50},"50"))),o("div",{class:"paginator-toolbar-fragment justify-content-center justify-content-md-end"},o("bkkr-button",{fill:"clear",color:"primary",href:l!==undefined?l+(g-1):null,disabled:!E,onClick:function(t){return n.handleClick(t,g-1)}},o("bkkr-icon",{name:k+"-left"})),S.map((function(t){return p(t,{href:l,handleClick:w})})),o("bkkr-button",{fill:"clear",color:"primary",href:l!==undefined?l+(g+1):null,disabled:!P,onClick:function(t){return n.handleClick(t,g+1)}},o("bkkr-icon",{name:k+"-right"})))))};Object.defineProperty(t.prototype,"el",{get:function(){return l(this)},enumerable:false,configurable:true});Object.defineProperty(t,"watchers",{get:function(){return{threshold:["thresholdChanged"],lenght:["itemsChanged"],page:["pageChanged"],infinite:["infiniteChanged"],disabled:["disabledChanged"]}},enumerable:false,configurable:true});return t}());var p=function(t,n){var i=n.href,e=n.handleClick;var a=window.innerWidth<768;if(a&&!t.selected){return}return o("bkkr-button",{href:i&&t.index?i+t.index:null,onClick:function(n){return e(n,t.index)},fill:t.selected?"solid":"clear",color:"primary",disabled:t.index===null},t.label)};g.style=c}}}));