System.register(["./p-b25c886d.system.js","./p-5e4b8ffe.system.js"],(function(r){"use strict";var t,n,e,a;return{setters:[function(r){t=r.r;n=r.h;e=r.H},function(r){a=r.s}],execute:function(){var i=":host{--background:var(--color-base, var(--color-light, #f4f5f8));--color:var(--color-contrast, var(--color-light-contrast, #000));--padding-top:0.75rem;--padding-end:1rem;--padding-bottom:0.75rem;--padding-start:1rem;--border-radius:0.75em;border-radius:var(--border-radius);padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);min-width:10px;background:var(--background);font-family:var(--bkkr-font-family);font-size:80%;font-weight:400;list-style:none;contain:content}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.breadcrumb-inner{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap}.breadcrumb-item{margin-right:0.25rem;display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center;line-height:1}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.breadcrumb-item{margin-right:unset;-webkit-margin-end:0.25rem;margin-inline-end:0.25rem}}bkkr-icon{margin-left:0.25rem}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){bkkr-icon{margin-left:unset;-webkit-margin-start:0.25rem;margin-inline-start:0.25rem}}";var d=r("bkkr_breadcrumb",function(){function r(r){t(this,r)}r.prototype.getPath=function(r){console.log(typeof r!=="undefined");return typeof r!=="undefined"?[].concat(typeof r==="string"?r.split(","):r):[]};r.prototype.createBreadcrumbPath=function(r){return this.getPath(r).map((function(r,t,e){return n("a",{class:a(null,{"breadcrumb-item":true,"state-disabled":e.length-1===t})},n("span",null,r),e.length-1>t?n("bkkr-icon",{name:"chevron-right"}):"")}))};r.prototype.render=function(){var r=this.path;return n(e,null,n("nav",{class:"breadcrumb-inner","aria-label":"breadcrumb"},this.createBreadcrumbPath(r)))};return r}());d.style=i}}}));