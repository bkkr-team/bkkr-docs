/*!
 * (C) BKKR Framework https://bkkr-team.github.io/bkkr-docs/ - MIT License
 */
System.register(["./p-739d5869.system.js","./p-315e94f8.system.js","./p-7c09dde3.system.js"],(function(t){"use strict";var i,n,r,a,e,d,s;return{setters:[function(t){i=t.r;n=t.f;r=t.h;a=t.H},function(t){e=t.m;d=t.B},function(t){s=t.s}],execute:function(){var o=":host{--padding-top:0;--padding-end:calc(var(--safe-area-right) + var(--bkkr-spacer, 16px));--padding-bottom:0;--padding-start:calc(var(--safe-area-left) + var(--bkkr-spacer, 16px));padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);-webkit-transition:background-color 0.4s cubic-bezier(0.32, 0.72, 0, 1);transition:background-color 0.4s cubic-bezier(0.32, 0.72, 0, 1);display:-ms-flexbox;display:flex;position:relative;-ms-flex-direction:column;flex-direction:column;width:100%;max-width:var(--max-width);margin:0 auto}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}@media (prefers-reduced-motion: reduce){:host{-webkit-transition:none;transition:none}}";var p=["","xs","sm","md","lg","xl","xxl"];var c=t("bkkr_container",function(){function t(t){i(this,t)}t.prototype.onResize=function(){n(this)};t.prototype.getSize=function(){var t;if(!this.fluid){for(var i=0,n=p;i<n.length;i++){var r=n[i];var a=e(r);if(a&&r!=="xs"){t=d[r]}}}return t?{"--max-width":""+t}:null};t.prototype.render=function(){var t=this.color;return r(a,{class:s(t),style:Object.assign({},this.getSize())},r("slot",null))};return t}());c.style=o}}}));