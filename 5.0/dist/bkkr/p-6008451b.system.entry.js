System.register(["./p-ddd3d159.system.js","./p-5e4b8ffe.system.js"],(function(t){"use strict";var n,e,r,o;return{setters:[function(t){n=t.r;e=t.h;r=t.H},function(t){o=t.s}],execute:function(){var i=":host{--color:var(--bkkr-toolbar-color, var(--bkkr-text-color, #000));--padding-top:2px;--padding-bottom:2px;--padding-start:4px;--padding-end:4px;--min-height:44px;padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);display:-ms-flexbox;display:flex;position:relative;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;width:100%;min-height:var(--min-height);margin-bottom:0;background:var(--background);color:var(--color);list-style:none;contain:content;overflow:hidden;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:10;-webkit-box-sizing:border-box;box-sizing:border-box}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}:host(.bkkr-color){--background:var(--color-base);--color:var(--color-contrast)}.toolbar-content{-ms-flex:1 1 0%;flex:1 1 0%;min-width:0}::slotted(bkkr-progress-bar){right:0;bottom:0;left:0;position:absolute}";var a=t("bkkr_toolbar",function(){function t(t){n(this,t)}t.prototype.render=function(){var t=this.color;return e(r,{class:o(t,null)},e("slot",{name:"start"}),e("div",{class:"toolbar-content"},e("slot",null)),e("slot",{name:"end"}))};return t}());a.style=i}}}));