import{r as e,c as t,h as l,H as i,g as a}from"./p-06605c80.js";import{s}from"./p-c50c697b.js";const o=class{constructor(l){e(this,l),this.bkkrColor=t(this,"bkkrColor",7),this.bkkrStyle=t(this,"bkkrStyle",7),this.inRange=!1,this.noAnimate=!1}componentWillLoad(){this.inRange=!!this.el.closest("bkkr-range"),this.noAnimate="floating"===this.position,this.emitStyle(),this.emitColor()}componentDidLoad(){this.noAnimate&&setTimeout((()=>{this.noAnimate=!1}),1e3)}colorChanged(){this.emitColor()}positionChanged(){this.emitStyle()}emitColor(){const{color:e}=this;this.bkkrColor.emit({"item-label-color":void 0!==e,[`color-${e}`]:void 0!==e})}emitStyle(){const{inRange:e,position:t}=this;e||this.bkkrStyle.emit({label:!0,[`label-${t}`]:void 0!==t})}render(){const{color:e,position:t,noAnimate:a}=this;return l(i,{class:s(e,{[`label-${t}`]:void 0!==t,"label-no-animate":a})})}get el(){return a(this)}static get watchers(){return{color:["colorChanged"],position:["positionChanged"]}}};o.style=".item.sc-bkkr-label-h,.item .sc-bkkr-label-h{--color:initial;display:block;color:var(--color);font-family:var(--bkkr-font-family);font-size:inherit;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box}.label-color.sc-bkkr-label-h{color:var(--color-base)}.label-text-wrap.sc-bkkr-label-h,[text-wrap].sc-bkkr-label-h{font-size:14px;line-height:1.5;white-space:normal}.item-interactive-disabled.sc-bkkr-label-h:not(.item-multiple-inputs),.item-interactive-disabled:not(.item-multiple-inputs) .sc-bkkr-label-h{pointer-events:none;cursor:default;opacity:0.3}.item-input.sc-bkkr-label-h,.item-input .sc-bkkr-label-h{-ms-flex:initial;flex:initial;max-width:200px;pointer-events:none}.item-textarea.sc-bkkr-label-h,.item-textarea .sc-bkkr-label-h{-ms-flex-item-align:baseline;align-self:baseline}.label-fixed.sc-bkkr-label-h{-ms-flex:0 0 100px;flex:0 0 100px;width:100px;min-width:100px;max-width:200px}.label-floating.sc-bkkr-label-h{margin-bottom:0;-ms-flex-item-align:stretch;align-self:stretch;width:auto;max-width:100%;-webkit-transform:translate3d(0, 30px, 0);transform:translate3d(0, 30px, 0);-webkit-transform-origin:left top;transform-origin:left top;-webkit-transition:-webkit-transform 0.2s cubic-bezier(0.32, 0.72, 0, 1);transition:-webkit-transform 0.2s cubic-bezier(0.32, 0.72, 0, 1);transition:transform 0.2s cubic-bezier(0.32, 0.72, 0, 1);transition:transform 0.2s cubic-bezier(0.32, 0.72, 0, 1), -webkit-transform 0.2s cubic-bezier(0.32, 0.72, 0, 1)}.label-no-animate.label-floating.sc-bkkr-label-h{-webkit-transition:none;transition:none}.item-has-focus.label-floating.sc-bkkr-label-h,.item-has-focus .label-floating.sc-bkkr-label-h{color:var(--color-base, var(--color-primary, #3880ff))}.state-touched.state-invalid.label-floating.sc-bkkr-label-h,.state-touched.state-invalid .label-floating.sc-bkkr-label-h{color:var(--color-base, var(--color-danger, #eb445a))}.item-has-focus.label-floating.sc-bkkr-label-h,.item-has-focus .label-floating.sc-bkkr-label-h,.item-has-value.label-floating.sc-bkkr-label-h,.item-has-value .label-floating.sc-bkkr-label-h{-webkit-transform:translate3d(0, 0, 0) scale(0.82);transform:translate3d(0, 0, 0) scale(0.82)}.item-has-value.sc-bkkr-label-h:not(.item-has-focus).label-floating,.item-has-value:not(.item-has-focus) .label-floating.sc-bkkr-label-h{opacity:0.72}.sc-bkkr-label-s h1,.sc-bkkr-label-s h2,.sc-bkkr-label-s h3,.sc-bkkr-label-s h4,.sc-bkkr-label-s h5,.sc-bkkr-label-s h6{text-overflow:inherit;overflow:inherit}";export{o as bkkr_label}