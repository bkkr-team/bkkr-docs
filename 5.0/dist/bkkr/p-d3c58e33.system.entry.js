System.register(["./p-92f7c087.system.js","./p-4c5bd054.system.js"],(function(e){"use strict";var t,i,l,o,n,a;return{setters:[function(e){t=e.r;i=e.e;l=e.h;o=e.H;n=e.g},function(e){a=e.s}],execute:function(){var r=".item.sc-bkkr-label-h,.item .sc-bkkr-label-h{--color:initial;display:block;color:var(--color);font-family:var(--default-font-sans-serif);font-size:inherit;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box}.label-color.sc-bkkr-label-h{color:current-color(base)}.label-text-wrap.sc-bkkr-label-h,[text-wrap].sc-bkkr-label-h{font-size:14px;line-height:1.5;white-space:normal}.item-interactive-disabled.sc-bkkr-label-h:not(.item-multiple-inputs),.item-interactive-disabled:not(.item-multiple-inputs) .sc-bkkr-label-h{pointer-events:none;cursor:default;opacity:0.3}.item-input.sc-bkkr-label-h,.item-input .sc-bkkr-label-h{-ms-flex:initial;flex:initial;max-width:200px;pointer-events:none}.item-textarea.sc-bkkr-label-h,.item-textarea .sc-bkkr-label-h{-ms-flex-item-align:baseline;align-self:baseline}.label-fixed.sc-bkkr-label-h{-ms-flex:0 0 100px;flex:0 0 100px;width:100px;min-width:100px;max-width:200px}.label-floating.sc-bkkr-label-h{margin-bottom:0;-ms-flex-item-align:stretch;align-self:stretch;width:auto;max-width:100%;-webkit-transform:translate3d(0, 30px, 0);transform:translate3d(0, 30px, 0);-webkit-transform-origin:left top;transform-origin:left top;-webkit-transition:-webkit-transform 0.15s ease-in-out;transition:-webkit-transform 0.15s ease-in-out;transition:transform 0.15s ease-in-out;transition:transform 0.15s ease-in-out, -webkit-transform 0.15s ease-in-out}.label-no-animate.label-floating.sc-bkkr-label-h{-webkit-transition:none;transition:none}.item-has-focus.label-floating.sc-bkkr-label-h,.item-has-focus .label-floating.sc-bkkr-label-h{color:var(--color-base, var(--color-primary, #3880ff))}.item-has-focus.label-floating.sc-bkkr-label-h,.item-has-focus .label-floating.sc-bkkr-label-h,.item-has-value.label-floating.sc-bkkr-label-h,.item-has-value .label-floating.sc-bkkr-label-h{-webkit-transform:translate3d(0, 0, 0) scale(0.82);transform:translate3d(0, 0, 0) scale(0.82)}.sc-bkkr-label-s h1,.sc-bkkr-label-s h2,.sc-bkkr-label-s h3,.sc-bkkr-label-s h4,.sc-bkkr-label-s h5,.sc-bkkr-label-s h6{text-overflow:inherit;overflow:inherit}";var s=e("bkkr_label",function(){function e(e){t(this,e);this.bkkrColor=i(this,"bkkrColor",7);this.bkkrStyle=i(this,"bkkrStyle",7);this.inRange=false;this.noAnimate=false}e.prototype.componentWillLoad=function(){this.inRange=!!this.el.closest("bkkr-range");this.noAnimate=this.position==="floating";this.emitStyle();this.emitColor()};e.prototype.componentDidLoad=function(){var e=this;if(this.noAnimate){setTimeout((function(){e.noAnimate=false}),1e3)}};e.prototype.colorChanged=function(){this.emitColor()};e.prototype.positionChanged=function(){this.emitStyle()};e.prototype.emitColor=function(){var e;var t=this.color;this.bkkrColor.emit((e={"item-label-color":t!==undefined},e["bkkr-color-"+t]=t!==undefined,e))};e.prototype.emitStyle=function(){var e;var t=this,i=t.inRange,l=t.position;if(!i){this.bkkrStyle.emit((e={label:true},e["label-"+l]=l!==undefined,e))}};e.prototype.render=function(){var e;var t=this.position;return l(o,{class:a(this.color,(e={},e["label-"+t]=t!==undefined,e["label-no-animate"]=this.noAnimate,e))})};Object.defineProperty(e.prototype,"el",{get:function(){return n(this)},enumerable:false,configurable:true});Object.defineProperty(e,"watchers",{get:function(){return{color:["colorChanged"],position:["positionChanged"]}},enumerable:false,configurable:true});return e}());s.style=r}}}));