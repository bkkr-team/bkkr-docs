System.register(["./p-a69a7bca.system.js","./p-4c5bd054.system.js"],(function(t){"use strict";var e,r,i,n;return{setters:[function(t){e=t.r;r=t.h;i=t.H},function(t){n=t.s}],execute:function(){var a=".card,:host{--safe-area-left:0;--safe-area-right:0;--border-radius:32px;--box-shadow:0 4px 16px rgba(0, 0, 0, 0.12);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:block;position:relative;background:var(--background);color:var(--color);font-family:var(--default-font-sans-serif)}.card .card-header+.card-content,:host .card-header+.card-content{--padding-top:0}.card-disabled{pointer-events:none;cursor:default;opacity:0.3}.card-native{color:inherit;font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-align:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;white-space:inherit;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;border-radius:var(--border-radius);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);-webkit-transition:all 0.4s ease;transition:all 0.4s ease;display:block;width:100%;min-height:var(--min-height);-webkit-transition:var(--transition);transition:var(--transition);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);outline:none;background:inherit;overflow:hidden}@media (prefers-reduced-motion: reduce){.card-native{-webkit-transition:none;transition:none}}.card-native::-moz-focus-inner{border:0}button,a{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-user-drag:none}";var o=t("bkkr_card",function(){function t(t){e(this,t);this.button=false;this.type="button";this.disabled=false}t.prototype.isClickable=function(){return this.href!==undefined||this.button};t.prototype.renderCard=function(){var t=this.isClickable();if(!t){return[r("slot",null)]}var e=this.href;var i=t?e===undefined?"button":"a":"div";var n=i==="button"?{type:this.type}:{download:this.download,href:this.href,rel:this.rel,target:this.target};return r(i,Object.assign({},n,{class:"card-native",part:"native",disabled:this.disabled}),r("slot",null))};t.prototype.render=function(){return r(i,{class:n(this.color,{"card-disabled":this.disabled,"bkkr-activatable":this.isClickable()})},this.renderCard())};return t}());o.style=a}}}));