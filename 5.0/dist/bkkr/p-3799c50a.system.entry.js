System.register(["./p-92f7c087.system.js","./p-d2d3f0b5.system.js","./p-4c5bd054.system.js"],(function(r){"use strict";var t,o,e,a,i;return{setters:[function(r){t=r.r;o=r.h;e=r.H},function(r){a=r.o},function(r){i=r.s}],execute:function(){var n=":host{--background:var(--bkkr-background-color, #fff);--safe-area-left:0;--safe-area-right:0;--border-radius:2em;--box-shadow:0 15px 25px 0 rgba(var(--box-shadow-color, var(--bkkr-text-color-rgb, 0, 0, 0)), 0.1), 0 6px 20px 0 rgba(var(--box-shadow-color, var(--bkkr-text-color-rgb, 0, 0, 0)), 0.12), 0 13.2px 40px 0 rgba(var(--box-shadow-color, var(--bkkr-text-color-rgb, 0, 0, 0)), 0.08);--transition:0.2s transform cubic-bezier(0.25, 1.11, 0.78, 1.59), 0.2s box-shadow cubic-bezier(0.25, 1.11, 0.78, 1.59);--transform:translateZ(0);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:block;position:relative;color:var(--color);font-family:var(--default-font-sans-serif)}:host .card-header+.card-content{--padding-top:0}.card-native{color:inherit;font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-align:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;white-space:inherit;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;border-radius:var(--border-radius);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);display:block;width:100%;min-height:var(--min-height);-webkit-transform:var(--transform);transform:var(--transform);-webkit-transition:var(--transition);transition:var(--transition);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);outline:none;background:var(--background);overflow:hidden}.card-native::-moz-focus-inner{border:0}button,a{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-user-drag:none}:host(:active),:host(.state-activated){--box-shadow:0 3px 5px 0 rgba(var(--box-shadow-color, var(--bkkr-text-color-rgb, 0, 0, 0)), 0.1), 0 6px 10px 0 rgba(var(--box-shadow-color, var(--bkkr-text-color-rgb, 0, 0, 0)), 0.12), 0 1.2px 20px 0 rgba(var(--box-shadow-color, var(--bkkr-text-color-rgb, 0, 0, 0)), 0.08);--transform:scale3d(0.97, 0.97, 1);--transition:0.2s transform ease-out, 0.2s box-shadow ease-out}:host(:disabled),:host(.state-disabled){pointer-events:none;cursor:default;opacity:0.3}@media (prefers-reduced-motion: reduce){.card-native{-webkit-transform:none;transform:none;-webkit-transition:none;transition:none}}";var s=r("bkkr_card",function(){function r(r){t(this,r);this.button=false;this.type="button";this.disabled=false;this.routerDirection="forward"}r.prototype.isClickable=function(){return this.href!==undefined||this.button};r.prototype.renderCard=function(){var r=this.isClickable();var t=this,e=t.href,i=t.routerDirection;var n=r?e===undefined?"button":"a":"div";var s=n==="button"?{type:this.type}:{download:this.download,href:this.href,rel:this.rel,target:this.target};return o(n,Object.assign({},s,{class:"card-native",part:"native",disabled:this.disabled,onClick:function(r){return a(e,r,i)}}),o("slot",null))};r.prototype.render=function(){return o(e,{class:i(this.color,{"state-disabled":this.disabled,"state-activatable":this.isClickable()})},this.renderCard())};return r}());s.style=n}}}));