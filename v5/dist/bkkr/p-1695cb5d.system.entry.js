/*!
 * (C) BKKR Framework https://bkkr-team.github.io/bkkr-docs/ - MIT License
 */
System.register(["./p-6c3087ac.system.js","./p-b60c7a38.system.js","./p-7c09dde3.system.js"],(function(t){"use strict";var r,e,i,n,o;return{setters:[function(t){r=t.r;e=t.h;i=t.H},function(t){n=t.o},function(t){o=t.s}],execute:function(){var s=":host{--background:transparent;--color:var(--color-base, var(--color-primary, #3880ff));background:var(--background);color:var(--color)}a{color:inherit;font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-align:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;white-space:inherit}";var c=t("bkkr_router_link",function(){function t(t){var e=this;r(this,t);this.routerDirection="forward";this.onClick=function(t){n(e.href,t,e.routerDirection)}}t.prototype.render=function(){var t={href:this.href,rel:this.rel,target:this.target};return e(i,{onClick:this.onClick,class:o(this.color,{"state-activatable":true})},e("a",Object.assign({},t),e("slot",null)))};return t}());c.style=s}}}));