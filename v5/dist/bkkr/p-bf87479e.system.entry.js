/*!
 * (C) BKKR Framework https://bkkr-team.github.io/bkkr-docs/ - MIT License
 */
System.register(["./p-739d5869.system.js","./p-7c09dde3.system.js"],(function(t){"use strict";var n,o,e,r;return{setters:[function(t){n=t.r;o=t.h;e=t.H},function(t){r=t.s}],execute:function(){var i=":host{--background:transparent;--color:var(--bkkr-toolbar-color, var(--bkkr-text-color, #000));--padding-top:2px;--padding-bottom:2px;--padding-start:4px;--padding-end:4px;--min-height:44px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);display:-ms-flexbox;display:flex;position:relative;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;width:100%;min-height:var(--min-height);margin-bottom:0;background:var(--background);color:var(--color);list-style:none;contain:content;overflow:hidden;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:10;-webkit-box-sizing:border-box;box-sizing:border-box}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}:host(.bkkr-color){--background:var(--color-base);--color:var(--color-contrast)}.toolbar-content{-ms-flex:1 1 0%;flex:1 1 0%;min-width:0}::slotted(bkkr-progress-bar){right:0;bottom:0;left:0;position:absolute}";var a=t("bkkr_toolbar",function(){function t(t){n(this,t)}t.prototype.render=function(){var t=this.color;return o(e,{class:r(t)},o("slot",{name:"start"}),o("div",{class:"toolbar-content"},o("slot",null)),o("slot",{name:"end"}))};return t}());a.style=i}}}));