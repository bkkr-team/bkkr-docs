var __awaiter=this&&this.__awaiter||function(t,i,n,e){function r(t){return t instanceof n?t:new n((function(i){i(t)}))}return new(n||(n=Promise))((function(n,a){function o(t){try{l(e.next(t))}catch(t){a(t)}}function s(t){try{l(e["throw"](t))}catch(t){a(t)}}function l(t){t.done?n(t.value):r(t.value).then(o,s)}l((e=e.apply(t,i||[])).next())}))};var __generator=this&&this.__generator||function(t,i){var n={label:0,sent:function(){if(a[0]&1)throw a[1];return a[1]},trys:[],ops:[]},e,r,a,o;return o={next:s(0),throw:s(1),return:s(2)},typeof Symbol==="function"&&(o[Symbol.iterator]=function(){return this}),o;function s(t){return function(i){return l([t,i])}}function l(o){if(e)throw new TypeError("Generator is already executing.");while(n)try{if(e=1,r&&(a=o[0]&2?r["return"]:o[0]?r["throw"]||((a=r["return"])&&a.call(r),0):r.next)&&!(a=a.call(r,o[1])).done)return a;if(r=0,a)o=[o[0]&2,a.value];switch(o[0]){case 0:case 1:a=o;break;case 4:n.label++;return{value:o[1],done:false};case 5:n.label++;r=o[1];o=[0];continue;case 7:o=n.ops.pop();n.trys.pop();continue;default:if(!(a=n.trys,a=a.length>0&&a[a.length-1])&&(o[0]===6||o[0]===2)){n=0;continue}if(o[0]===3&&(!a||o[1]>a[0]&&o[1]<a[3])){n.label=o[1];break}if(o[0]===6&&n.label<a[1]){n.label=a[1];a=o;break}if(a&&n.label<a[2]){n.label=a[2];n.ops.push(o);break}if(a[2])n.ops.pop();n.trys.pop();continue}o=i.call(t,n)}catch(t){o=[6,t];r=0}finally{e=a=0}if(o[0]&5)throw o[1];return{value:o[0]?o[1]:void 0,done:true}}};
/*!
 * (C) BKKR Framework https://bkkr-team.github.io/bkkr-docs/ - MIT License
 */System.register(["./p-6c3087ac.system.js","./p-b938bf14.system.js","./p-213ca704.system.js"],(function(t){"use strict";var i,n,e,r,a,o,s,l,d,c;return{setters:[function(t){i=t.r;n=t.c;e=t.f;r=t.a;a=t.e;o=t.h;s=t.H;l=t.g},function(t){d=t.b},function(t){c=t.s}],execute:function(){var g=".infinite-scroll{--padding-top:0;--padding-start:0;--padding-end:0;--padding-bottom:0;--toolbar-padding-top:calc(var(--bkkr-spacer, 16px) * 2);--toolbar-padding-start:0;--toolbar-padding-end:0;--toolbar-padding-bottom:var(--bkkr-spacer, 16px);--toolbar-max-width:12.5rem}.infinite-scroll-enabled{display:block}.infinite-scroll-infinite.infinite-scroll-enabled{min-height:84px}.infinite-scroll-content{padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);display:-ms-flexbox;display:flex;position:relative;-ms-flex-direction:column;flex-direction:column}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.infinite-scroll-content{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.infinite-scroll-loading-content{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;display:none;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;width:100%;min-height:84px;text-align:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.infinite-scroll-loading-text{margin-left:32px;margin-right:32px;margin-top:4px;margin-bottom:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.infinite-scroll-loading-text{margin-left:unset;margin-right:unset;-webkit-margin-start:32px;margin-inline-start:32px;-webkit-margin-end:32px;margin-inline-end:32px}}.infinite-scroll-loading>.infinite-scroll-loading-content{display:-ms-flexbox;display:flex}.infinite-scroll-loading:not(.infinite-scroll-infinite) .infinite-scroll-bottom bkkr-button{display:none}.infinite-scroll-bottom{margin-left:0;margin-right:-0.9em;margin-top:0;margin-bottom:0;padding-left:var(--toolbar-padding-start);padding-right:var(--toolbar-padding-end);padding-top:var(--toolbar-padding-top);padding-bottom:var(--toolbar-padding-bottom);display:block;text-align:center}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.infinite-scroll-bottom{margin-left:unset;margin-right:unset;-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:-0.9em;margin-inline-end:-0.9em}}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.infinite-scroll-bottom{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--toolbar-padding-start);padding-inline-start:var(--toolbar-padding-start);-webkit-padding-end:var(--toolbar-padding-end);padding-inline-end:var(--toolbar-padding-end)}}.infinite-scroll-bottom .infinite-scroll-count{margin-bottom:var(--bkkr-spacer, 16px);padding-right:var(--bkkr-spacer, 16px);position:relative}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.infinite-scroll-bottom .infinite-scroll-count{padding-right:unset;-webkit-padding-end:var(--bkkr-spacer, 16px);padding-inline-end:var(--bkkr-spacer, 16px)}}.infinite-scroll-bottom bkkr-button,.infinite-scroll-bottom bkkr-progress-bar{width:100%;max-width:var(--toolbar-max-width)}.infinite-scroll-bottom bkkr-progress-bar{margin-left:auto;margin-right:auto}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.infinite-scroll-bottom bkkr-progress-bar{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}.infinite-scroll-bottom bkkr-button{margin-left:auto;margin-right:auto;margin-top:calc(var(--bkkr-spacer, 16px) * 2)}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.infinite-scroll-bottom bkkr-button{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}";var p=t("bkkr_infinite_scroll",function(){function t(t){var e=this;i(this,t);this.bkkrInfinite=n(this,"bkkrInfinite",7);this.bkkrPageSizeChanged=n(this,"bkkrPageSizeChanged",7);this.thrPx=0;this.thrPc=0;this.didFire=false;this.isBusy=false;this.isLoading=false;this.reset=false;this.animated=true;this.threshold="15%";this.items=0;this.length=0;this.page=1;this.infinite=false;this.position="bottom";this.buttonText="Show more";this.disabled=false;this.onScroll=function(){var t=e.scrollEl;if(!t||!e.canStart()){return 1}var i=t.scrollTop;var n=t.scrollHeight;var r=t.offsetHeight;var a=e.thrPc!==0?r*e.thrPc:e.thrPx;var o=e.position==="bottom"?n-i-a-r:i-a;if(o<0){if(!e.didFire){e.isLoading=true;e.didFire=true;e.page+=1;e.bkkrInfinite.emit();return 3}}else{e.didFire=false}return 4};this.handleClick=function(t,i){t.preventDefault();e.changeIndex(i)}}t.prototype.thresholdChanged=function(){var t=this.threshold;if(t.lastIndexOf("%")>-1){this.thrPx=0;this.thrPc=parseFloat(t)/100}else{this.thrPx=parseFloat(t);this.thrPc=0}};t.prototype.itemsChanged=function(){e(this)};t.prototype.pageChanged=function(){e(this)};t.prototype.infiniteChanged=function(){var t=this.infinite&&!this.disabled;if(!t){this.isLoading=false;this.isBusy=false}this.enableScrollEvents(this.infinite)};t.prototype.disabledChanged=function(){var t=this.disabled;if(t){this.isLoading=false;this.isBusy=false}};t.prototype.connectedCallback=function(){return __awaiter(this,void 0,void 0,(function(){var t,i;var n=this;return __generator(this,(function(e){switch(e.label){case 0:t=this.el.closest("bkkr-content");if(!t){console.error("<bkkr-infinite-scroll> must be used inside an <bkkr-content>");return[2]}i=this;return[4,t.getScrollElement()];case 1:i.scrollEl=e.sent();this.thresholdChanged();this.infiniteChanged();this.disabledChanged();if(this.position==="top"){r((function(){if(n.scrollEl){n.scrollEl.scrollTop=n.scrollEl.scrollHeight-n.scrollEl.clientHeight}}))}return[2]}}))}))};t.prototype.componentWillLoad=function(){if(this.spinner===undefined){this.spinner=d.get("infiniteSpinner","crescent")}};t.prototype.disconnectedCallback=function(){this.enableScrollEvents(false);this.scrollEl=undefined};t.prototype.changeIndex=function(t){if(!this.isLoading){this.isLoading=true;this.page=t;this.bkkrInfinite.emit()}};t.prototype.complete=function(){return __awaiter(this,void 0,void 0,(function(){var t,i;var n=this;return __generator(this,(function(e){t=this.scrollEl;if(!this.isLoading||!t){return[2]}this.isLoading=false;if(this.position==="top"){this.isBusy=true;i=t.scrollHeight-t.scrollTop;requestAnimationFrame((function(){a((function(){var e=t.scrollHeight;var a=e-i;requestAnimationFrame((function(){r((function(){t.scrollTop=a;n.isBusy=false}))}))}))}))}return[2]}))}))};t.prototype.canStart=function(){return!this.disabled&&!this.isBusy&&!!this.scrollEl&&!this.isLoading&&!!this.infinite};t.prototype.enableScrollEvents=function(t){if(this.scrollEl){if(t){this.scrollEl.addEventListener("scroll",this.onScroll)}else{this.scrollEl.removeEventListener("scroll",this.onScroll)}}};t.prototype.render=function(){var t=this;var i=this,n=i.animated,e=i.disabled,r=i.infinite,a=i.items,l=i.length,d=i.page,g=i.isLoading,p=i.spinner,f=i.loadingText,u=i.buttonText;var h=!n?0:undefined;var b=Math.min(d*l,a);var m=b<a;return o(s,{class:{"infinite-scroll":true,"infinite-scroll-loading":g,"infinite-scroll-enabled":!e,"infinite-scroll-infinite":r}},o("div",{class:"infinite-scroll-content"},o("div",{class:"infinite-scroll-content-inner"},o("slot",null)),!r&&o("nav",{class:"infinite-scroll-bottom"},o("div",{class:"infinite-scroll-count"},o("small",null,b," / ",a)),o("bkkr-progress-bar",{value:b/a}),m&&o("bkkr-button",{color:"primary",disabled:e,onClick:function(i){return t.handleClick(i,d+1)}},u))),o("div",{class:"infinite-scroll-loading-content"},p&&o("div",{class:"infinite-scroll-loading-spinner"},o("bkkr-spinner",{type:p,duration:h})),f&&o("div",{class:"infinite-scroll-loading-text",innerHTML:c(f)})))};Object.defineProperty(t.prototype,"el",{get:function(){return l(this)},enumerable:false,configurable:true});Object.defineProperty(t,"watchers",{get:function(){return{threshold:["thresholdChanged"],length:["itemsChanged"],page:["pageChanged"],infinite:["infiniteChanged"],disabled:["disabledChanged"]}},enumerable:false,configurable:true});return t}());p.style=g}}}));