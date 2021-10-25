var __awaiter=this&&this.__awaiter||function(t,e,r,n){function a(t){return t instanceof r?t:new r((function(e){e(t)}))}return new(r||(r=Promise))((function(r,i){function o(t){try{l(n.next(t))}catch(t){i(t)}}function s(t){try{l(n["throw"](t))}catch(t){i(t)}}function l(t){t.done?r(t.value):a(t.value).then(o,s)}l((n=n.apply(t,e||[])).next())}))};var __generator=this&&this.__generator||function(t,e){var r={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},n,a,i,o;return o={next:s(0),throw:s(1),return:s(2)},typeof Symbol==="function"&&(o[Symbol.iterator]=function(){return this}),o;function s(t){return function(e){return l([t,e])}}function l(o){if(n)throw new TypeError("Generator is already executing.");while(r)try{if(n=1,a&&(i=o[0]&2?a["return"]:o[0]?a["throw"]||((i=a["return"])&&i.call(a),0):a.next)&&!(i=i.call(a,o[1])).done)return i;if(a=0,i)o=[o[0]&2,i.value];switch(o[0]){case 0:case 1:i=o;break;case 4:r.label++;return{value:o[1],done:false};case 5:r.label++;a=o[1];o=[0];continue;case 7:o=r.ops.pop();r.trys.pop();continue;default:if(!(i=r.trys,i=i.length>0&&i[i.length-1])&&(o[0]===6||o[0]===2)){r=0;continue}if(o[0]===3&&(!i||o[1]>i[0]&&o[1]<i[3])){r.label=o[1];break}if(o[0]===6&&r.label<i[1]){r.label=i[1];i=o;break}if(i&&r.label<i[2]){r.label=i[2];r.ops.push(o);break}if(i[2])r.ops.pop();r.trys.pop();continue}o=e.call(t,r)}catch(t){o=[6,t];a=0}finally{n=i=0}if(o[0]&5)throw o[1];return{value:o[0]?o[1]:void 0,done:true}}};
/*!
 * (C) BKKR Framework https://bkkr-team.github.io/bkkr-docs/ - MIT License
 */System.register(["./p-bd1be62f.system.js","./p-7c09dde3.system.js","./p-af5b8999.system.js"],(function(t){"use strict";var e,r,n,a,i,o,s,l;return{setters:[function(t){e=t.r;r=t.c;n=t.h;a=t.H;i=t.g},function(t){o=t.s;s=t.h},function(t){l=t.w}],execute:function(){var c=":host{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-align:center;align-items:center}:host(.in-toolbar){padding-left:20px;padding-right:20px;padding-top:0;padding-bottom:0;-ms-flex-pack:center;justify-content:center}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host(.in-toolbar){padding-left:unset;padding-right:unset;-webkit-padding-start:20px;padding-inline-start:20px;-webkit-padding-end:20px;padding-inline-end:20px}}:host(.in-toolbar-color),:host(.in-toolbar-color) .breadcrumbs-collapsed-indicator bkkr-icon{color:var(--color-contrast)}:host(.in-toolbar-color) .breadcrumbs-collapsed-indicator{background:var(--color-contrast, 0.11)}";var u=t("bkkr_breadcrumbs",function(){function t(t){var n=this;e(this,t);this.bkkrCollapsedClick=r(this,"bkkrCollapsedClick",7);this.itemsBeforeCollapse=1;this.itemsAfterCollapse=1;this.breadcrumbsInit=function(){n.setBreadcrumbSeparator();n.setMaxItems()};this.resetActiveBreadcrumb=function(){var t=n.getBreadcrumbs();var e=t.find((function(t){return t.active}));if(e&&n.activeChanged){e.active=false}};this.setMaxItems=function(){var t=n,e=t.itemsAfterCollapse,r=t.itemsBeforeCollapse,a=t.maxItems;var i=n.getBreadcrumbs();for(var o=0,s=i;o<s.length;o++){var l=s[o];l.showCollapsedIndicator=false;l.collapsed=false}var c=a!==undefined&&i.length>a&&r+e<=a;if(c){i.forEach((function(t,n){if(n===r){t.showCollapsedIndicator=true}if(n>=r&&n<i.length-e){t.collapsed=true}}))}};this.setBreadcrumbSeparator=function(){var t=n,e=t.itemsAfterCollapse,r=t.itemsBeforeCollapse,a=t.maxItems;var i=n.getBreadcrumbs();var o=i.find((function(t){return t.active}));for(var s=0,l=i;s<l.length;s++){var c=l[s];var u=a!==undefined&&e===0?c===i[r]:c===i[i.length-1];c.last=u;var d=c.separator!==undefined?c.separator:u?undefined:true;c.separator=d;if(!o&&u){c.active=true;n.activeChanged=true}}};this.getBreadcrumbs=function(){return Array.from(n.el.querySelectorAll("bkkr-breadcrumb"))}}t.prototype.onCollapsedClick=function(t){var e=this.getBreadcrumbs();var r=e.filter((function(t){return t.collapsed}));this.bkkrCollapsedClick.emit(Object.assign(Object.assign({},t.detail),{collapsedBreadcrumbs:r}))};t.prototype.maxItemsChanged=function(){this.resetActiveBreadcrumb();this.breadcrumbsInit()};t.prototype.componentWillLoad=function(){var t=this;this.breadcrumbsInit();this.mutationO=l(this.el,"bkkr-breadcrumb",(function(){return __awaiter(t,void 0,void 0,(function(){return __generator(this,(function(t){this.resetActiveBreadcrumb();this.breadcrumbsInit();return[2]}))}))}))};t.prototype.disconnectedCallback=function(){if(this.mutationO){this.mutationO.disconnect();this.mutationO=undefined}};t.prototype.render=function(){var t=this,e=t.color,r=t.collapsed;return n(a,{class:o(e,{"in-toolbar":s("bkkr-toolbar",this.el),"in-toolbar-color":s("bkkr-toolbar[color]",this.el),"breadcrumbs-collapsed":r})},n("slot",null))};Object.defineProperty(t.prototype,"el",{get:function(){return i(this)},enumerable:false,configurable:true});Object.defineProperty(t,"watchers",{get:function(){return{maxItems:["maxItemsChanged"],itemsBeforeCollapse:["maxItemsChanged"],itemsAfterCollapse:["maxItemsChanged"]}},enumerable:false,configurable:true});return t}());u.style=c}}}));