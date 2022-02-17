/*!
 * (C) BKKR Framework https://bkkr-team.github.io/bkkr-docs/ - MIT License
 */
System.register(["./p-85995b21.system.js","./p-884a6563.system.js"],(function(t){"use strict";var o,r,a,e,i;return{setters:[function(t){o=t.r;r=t.c;a=t.h;e=t.H},function(t){i=t.G}],execute:function(){var n=":host{top:0;right:0;bottom:0;left:0;display:block;position:absolute;-webkit-transform:translateZ(0);transform:translateZ(0);background-color:var(--bkkr-backdrop-color, #000);contain:strict;cursor:pointer;opacity:0;-ms-touch-action:none;touch-action:none;z-index:2}:host(.backdrop-hide){background:transparent}:host(.backdrop-no-tappable){cursor:auto}";var s=t("bkkr_backdrop",function(){function t(t){o(this,t);this.bkkrBackdropTap=r(this,"bkkrBackdropTap",7);this.blocker=i.createBlocker({disableScroll:true});this.visible=true;this.tappable=true;this.stopPropagation=true}t.prototype.connectedCallback=function(){if(this.stopPropagation){this.blocker.block()}};t.prototype.disconnectedCallback=function(){this.blocker.unblock()};t.prototype.onMouseDown=function(t){this.emitTap(t)};t.prototype.emitTap=function(t){if(this.stopPropagation){t.preventDefault();t.stopPropagation()}if(this.tappable){this.bkkrBackdropTap.emit()}};t.prototype.render=function(){var t=this,o=t.visible,r=t.tappable;return a(e,{tabindex:"-1","aria-hidden":"true",class:{"backdrop-hide":!o,"backdrop-no-tappable":!r}})};return t}());s.style=n}}}));