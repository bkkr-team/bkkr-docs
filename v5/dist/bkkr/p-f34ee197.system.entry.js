/*!
 * (C) BKKR Framework https://bkkr-team.github.io/bkkr-docs/ - MIT License
 */
System.register(["./p-bd1be62f.system.js"],(function(e){"use strict";var r,t,n,o;return{setters:[function(e){r=e.r;t=e.h;n=e.H;o=e.g}],execute:function(){var i=":host([slot]){display:none;line-height:0;z-index:100}.reorder-icon{display:block;font-size:20px;opacity:0.25}";var s=e("bkkr_reorder",function(){function e(e){r(this,e)}e.prototype.onClick=function(e){var r=this.el.closest("bkkr-reorder-group");e.preventDefault();if(!r||!r.disabled){e.stopImmediatePropagation()}};e.prototype.render=function(){var e="grip-lines";return t(n,null,t("slot",null,t("bkkr-icon",{name:e,lazy:false,class:"reorder-icon",part:"icon"})))};Object.defineProperty(e.prototype,"el",{get:function(){return o(this)},enumerable:false,configurable:true});return e}());s.style=i}}}));