var __awaiter=this&&this.__awaiter||function(e,t,r,n){function o(e){return e instanceof r?e:new r((function(t){t(e)}))}return new(r||(r=Promise))((function(r,a){function i(e){try{c(n.next(e))}catch(e){a(e)}}function l(e){try{c(n["throw"](e))}catch(e){a(e)}}function c(e){e.done?r(e.value):o(e.value).then(i,l)}c((n=n.apply(e,t||[])).next())}))};var __generator=this&&this.__generator||function(e,t){var r={label:0,sent:function(){if(a[0]&1)throw a[1];return a[1]},trys:[],ops:[]},n,o,a,i;return i={next:l(0),throw:l(1),return:l(2)},typeof Symbol==="function"&&(i[Symbol.iterator]=function(){return this}),i;function l(e){return function(t){return c([e,t])}}function c(i){if(n)throw new TypeError("Generator is already executing.");while(r)try{if(n=1,o&&(a=i[0]&2?o["return"]:i[0]?o["throw"]||((a=o["return"])&&a.call(o),0):o.next)&&!(a=a.call(o,i[1])).done)return a;if(o=0,a)i=[i[0]&2,a.value];switch(i[0]){case 0:case 1:a=i;break;case 4:r.label++;return{value:i[1],done:false};case 5:r.label++;o=i[1];i=[0];continue;case 7:i=r.ops.pop();r.trys.pop();continue;default:if(!(a=r.trys,a=a.length>0&&a[a.length-1])&&(i[0]===6||i[0]===2)){r=0;continue}if(i[0]===3&&(!a||i[1]>a[0]&&i[1]<a[3])){r.label=i[1];break}if(i[0]===6&&r.label<a[1]){r.label=a[1];a=i;break}if(a&&r.label<a[2]){r.label=a[2];r.ops.push(i);break}if(a[2])r.ops.pop();r.trys.pop();continue}i=t.call(e,r)}catch(e){i=[6,e];o=0}finally{n=a=0}if(i[0]&5)throw i[1];return{value:i[0]?i[1]:void 0,done:true}}};System.register(["./p-3fd5d37b.system.js","./p-d6f55265.system.js","./p-4e9afeb2.system.js"],(function(e){"use strict";var t,r,n,o,a,i,l,c,s;return{setters:[function(e){t=e.e;r=e.a;n=e.r;o=e.h;a=e.H;i=e.g},function(e){l=e.h;c=e.c},function(e){s=e.s}],execute:function(){var d=function(e,n){t((function(){var t=e.scrollTop;var o=n.clientHeight;if(t<0){n.style.setProperty("--opacity-scale","0");e.style.setProperty("clip-path","inset("+o+"px 0px 0px 0px)");return}var a=t;var i=10;var c=l(0,a/i,1);r((function(){e.style.removeProperty("clip-path");n.style.setProperty("--opacity-scale",c.toString())}))}))};var p=":host{--background:var(--bkkr-toolbar-background, var(--bkkr-background-color, #fff));--color:var(--bkkr-toolbar-color, var(--bkkr-text-color, #000));--border-color:var(--bkkr-toolbar-border-color, rgba(var(--bkkr-text-color-rgb, 0, 0, 0), 0.1));--border-width:0.55px;--border-style:solid;--padding-top:0;--padding-bottom:0;--padding-start:0;--padding-end:0;--opacity:1;--opacity-scale:1;padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);top:0;left:0;display:block;position:relative;-ms-flex-order:-1;order:-1;width:100%;color:var(--color-contrast, var(--color));z-index:10}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.header-background{top:0;right:0;bottom:0;left:0;position:absolute;-webkit-transform:translateZ(0);transform:translateZ(0);border-bottom:var(--border-width) var(--border-style) var(--border-color);background:var(--color-base, var(--background));contain:strict;opacity:calc(var(--opacity) * var(--opacity-scale));z-index:-1;pointer-events:none}.header-content{-ms-flex:1 1 0%;flex:1 1 0%;min-width:0}.header-collapse-fade{--opacity-scale:0}";var u=e("bkkr_header",function(){function e(e){var t=this;n(this,e);this.checkCollapsibleHeader=function(){var e=t.collapse;var r=e==="fade";t.destroyCollapsibleHeader();if(r){var n=t.el.closest("bkkr-root,bkkr-page,.bkkr-page,page-inner");var o=n?n.querySelector("bkkr-content"):null;t.setupFadeHeader(o)}};this.setupFadeHeader=function(e){return __awaiter(t,void 0,void 0,(function(){var t,r;var n=this;return __generator(this,(function(o){switch(o.label){case 0:if(!e){console.error("bkkr-header requires a content to collapse. Make sure there is an bkkr-content.");return[2]}return[4,new Promise((function(t){return c(e,t)}))];case 1:o.sent();r=this;return[4,e.getScrollElement()];case 2:t=r.scrollEl=o.sent();this.contentScrollCallback=function(){d(t,n.el)};t.addEventListener("scroll",this.contentScrollCallback);d(t,this.el);return[2]}}))}))}}e.prototype.componentDidLoad=function(){this.checkCollapsibleHeader()};e.prototype.componentDidUpdate=function(){this.checkCollapsibleHeader()};e.prototype.destroyCollapsibleHeader=function(){if(this.scrollEl&&this.contentScrollCallback){this.scrollEl.removeEventListener("scroll",this.contentScrollCallback);this.contentScrollCallback=undefined}};e.prototype.render=function(){var e;var t=this,r=t.color,n=t.collapse;return o(a,{class:s(r,(e={},e["header-collapse-"+n]=n!==undefined,e))},o("div",{class:"header-background"}),o("div",{class:"header-content"},o("slot",null)))};Object.defineProperty(e.prototype,"el",{get:function(){return i(this)},enumerable:false,configurable:true});return e}());u.style=p}}}));