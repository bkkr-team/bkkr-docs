System.register(["./p-3fd5d37b.system.js","./p-d6f55265.system.js","./p-4e9afeb2.system.js"],(function(t){"use strict";var r,e,o,a,i;return{setters:[function(t){r=t.r;e=t.h;o=t.H},function(t){a=t.o},function(t){i=t.s}],execute:function(){var n=":host{--background:var(--bkkr-card-background, var(--bkkr-background-color, #fff));--safe-area-left:0px;--safe-area-right:0px;--border-radius:24px;--box-shadow:0 15px 25px 0 rgba(var(--box-shadow-color, 0, 0, 0), 0.1), 0 6px 20px 0 rgba(var(--box-shadow-color, 0, 0, 0), 0.12), 0 13.2px 40px 0 rgba(var(--box-shadow-color, 0, 0, 0), 0.08);--transition:0.2s transform cubic-bezier(0.25, 1.11, 0.78, 1.59), 0.2s box-shadow cubic-bezier(0.25, 1.11, 0.78, 1.59);--transform:translateZ(0);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:-ms-flexbox;display:flex;position:relative;-ms-flex-direction:column;flex-direction:column;color:var(--color);font-family:var(--bkkr-font-family)}:host .card-header+.card-content{--padding-top:0}.card-native{color:inherit;font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-align:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;white-space:inherit;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;border-radius:var(--border-radius);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;height:100%;min-height:var(--min-height);-webkit-transform:var(--transform);transform:var(--transform);-webkit-transition:var(--transition);transition:var(--transition);will-change:transform, box-shadow;border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);outline:none;background:var(--background);overflow:hidden}.card-native::-moz-focus-inner{border:0}button,a{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-user-drag:none}:host(:active.state-activatable),:host(.state-activated.state-activatable){--box-shadow:0 3px 5px 0 rgba(var(--box-shadow-color, 0, 0, 0), 0.1), 0 6px 10px 0 rgba(var(--box-shadow-color, 0, 0, 0), 0.12), 0 1.2px 20px 0 rgba(var(--box-shadow-color, 0, 0, 0), 0.08);--transform:scale3d(0.97, 0.97, 1);--transition:0.2s transform ease-out, 0.2s box-shadow ease-out}:host(:disabled),:host(.state-disabled){pointer-events:none;cursor:default;opacity:0.3}@media (prefers-reduced-motion: reduce){.card-native{-webkit-transform:none;transform:none;-webkit-transition:none;transition:none}}";var s=t("bkkr_card",function(){function t(t){r(this,t);this.button=false;this.type="button";this.disabled=false;this.routerDirection="forward"}t.prototype.isClickable=function(){return this.href!==undefined||this.button};t.prototype.renderCard=function(){var t=this.isClickable();var r=this,o=r.href,i=r.routerDirection;var n=t?o===undefined?"button":"a":"div";var s=n==="button"?{type:this.type}:{download:this.download,href:this.href,rel:this.rel,target:this.target};return e(n,Object.assign({},s,{class:"card-native",part:"native",disabled:this.disabled,onClick:function(t){return a(o,t,i)}}),e("slot",null))};t.prototype.render=function(){var t=this,r=t.color,a=t.disabled;return e(o,{class:i(r,{"state-disabled":a,"state-activatable":this.isClickable()})},this.renderCard())};return t}());s.style=n}}}));