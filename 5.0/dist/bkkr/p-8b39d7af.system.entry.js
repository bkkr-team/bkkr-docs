System.register(["./p-92f7c087.system.js","./p-4c5bd054.system.js","./p-54706802.system.js"],(function(t){"use strict";var n,i,r,a,e,d,s;return{setters:[function(t){n=t.r;i=t.f;r=t.h;a=t.H},function(t){e=t.s},function(t){d=t.m;s=t.B}],execute:function(){var o=":host{--padding-top:0;--padding-end:calc(var(--safe-area-right) + var(--bkkr-spacer, 16px));--padding-bottom:0;--padding-start:calc(var(--safe-area-left) + var(--bkkr-spacer, 16px));padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);-webkit-transition:background-color 0.4s cubic-bezier(0.32, 0.72, 0, 1);transition:background-color 0.4s cubic-bezier(0.32, 0.72, 0, 1);display:-ms-flexbox;display:flex;position:relative;-ms-flex-direction:column;flex-direction:column;width:100%;max-width:var(--max-width);margin:0 auto}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}@media (prefers-reduced-motion: reduce){:host{-webkit-transition:none;transition:none}}";var p=["","xs","sm","md","lg","xl","xxl"];var c=t("bkkr_container",function(){function t(t){n(this,t)}t.prototype.onResize=function(){i(this)};t.prototype.getSize=function(){var t;for(var n=0,i=p;n<i.length;n++){var r=i[n];var a=d(r);if(a&&r!=="xs"){t=s[r]}}return t?{"--max-width":""+t}:null};t.prototype.render=function(){var t=this,n=t.color,i=t.fluid;return r(a,{class:e(n),style:!i&&Object.assign({},this.getSize())},r("slot",null))};return t}());c.style=o}}}));