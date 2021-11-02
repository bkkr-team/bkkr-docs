/*!
 * (C) BKKR Framework https://bkkr-team.github.io/bkkr-docs/ - MIT License
 */
import{r as l,c as e,h as t,H as a,g as i}from"./p-fef964f0.js";import{s as o}from"./p-18201c80.js";let s=class{constructor(t){l(this,t),this.bkkrColor=e(this,"bkkrColor",7),this.bkkrStyle=e(this,"bkkrStyle",7),this.inRange=!1,this.noAnimate=!1}componentWillLoad(){this.inRange=!!this.el.closest("bkkr-range"),this.noAnimate="floating"===this.position,this.emitStyle(),this.emitColor()}componentDidLoad(){this.noAnimate&&setTimeout((()=>{this.noAnimate=!1}),1e3)}colorChanged(){this.emitColor()}positionChanged(){this.emitStyle()}emitColor(){const{color:l}=this;this.bkkrColor.emit({"item-label-color":void 0!==l,[`color-${l}`]:void 0!==l})}emitStyle(){const{inRange:l,position:e}=this;l||this.bkkrStyle.emit({label:!0,[`label-${e}`]:void 0!==e})}render(){const{color:l,position:e,noAnimate:i}=this;return t(a,{class:o(l,{[`label-${e}`]:void 0!==e,"label-no-animate":i,"label-rtl":"rtl"===document.dir})})}get el(){return i(this)}static get watchers(){return{color:["colorChanged"],position:["positionChanged"]}}};s.style='.sc-bkkr-label-h{-ms-touch-action:manipulation;touch-action:manipulation}.item.sc-bkkr-label-h,.item .sc-bkkr-label-h{--color:initial;display:block;color:var(--color);font-family:var(--bkkr-font-family);font-size:inherit;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box}.label-color.sc-bkkr-label-h{color:var(--color-base)}.label-text-wrap.sc-bkkr-label-h,[text-wrap].sc-bkkr-label-h{white-space:normal}.item-interactive-disabled.sc-bkkr-label-h:not(.item-multiple-inputs),.item-interactive-disabled:not(.item-multiple-inputs) .sc-bkkr-label-h{pointer-events:none;cursor:default;opacity:0.3}.item-input.sc-bkkr-label-h,.item-input .sc-bkkr-label-h{-ms-flex:initial;flex:initial;max-width:200px;pointer-events:none}.item-textarea.sc-bkkr-label-h,.item-textarea .sc-bkkr-label-h{-ms-flex-item-align:baseline;align-self:baseline}.label-fixed.sc-bkkr-label-h{-ms-flex:0 0 100px;flex:0 0 100px;width:100px;min-width:100px;max-width:200px}.label-stacked.sc-bkkr-label-h,.label-floating.sc-bkkr-label-h{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;-ms-flex-item-align:stretch;align-self:stretch;width:auto;max-width:100%;-webkit-transform-origin:top left;transform-origin:top left;z-index:3}.label-stacked.label-rtl.sc-bkkr-label-h,.label-floating.label-rtl.sc-bkkr-label-h{-webkit-transform-origin:top right;transform-origin:top right}.label-stacked.sc-bkkr-label-h{-webkit-transform:translateY(50%) scale(0.75);transform:translateY(50%) scale(0.75);-webkit-transition:color 150ms cubic-bezier(0.32, 0.72, 0, 1);transition:color 150ms cubic-bezier(0.32, 0.72, 0, 1)}.label-floating.sc-bkkr-label-h{-webkit-transform:translateY(96%);transform:translateY(96%);-webkit-transition:color 0.2s cubic-bezier(0.32, 0.72, 0, 1), -webkit-transform 0.2s cubic-bezier(0.32, 0.72, 0, 1);transition:color 0.2s cubic-bezier(0.32, 0.72, 0, 1), -webkit-transform 0.2s cubic-bezier(0.32, 0.72, 0, 1);transition:color 0.2s cubic-bezier(0.32, 0.72, 0, 1), transform 0.2s cubic-bezier(0.32, 0.72, 0, 1);transition:color 0.2s cubic-bezier(0.32, 0.72, 0, 1), transform 0.2s cubic-bezier(0.32, 0.72, 0, 1), -webkit-transform 0.2s cubic-bezier(0.32, 0.72, 0, 1)}.label-no-animate.label-floating.sc-bkkr-label-h,.label-no-animate.label-stacked.sc-bkkr-label-h{-webkit-transition:none;transition:none}.item-has-focus.label-floating.sc-bkkr-label-h,.item-has-focus .label-floating.sc-bkkr-label-h,.item-has-focus.label-stacked.sc-bkkr-label-h,.item-has-focus .label-stacked.sc-bkkr-label-h{color:var(--color-base, var(--color-primary, #3880ff))}.state-focused.label-floating.sc-bkkr-label-h,.state-focused .label-floating.sc-bkkr-label-h,.item-has-focus.label-floating.sc-bkkr-label-h,.item-has-focus .label-floating.sc-bkkr-label-h,.item-has-placeholder.sc-bkkr-label-h:not(.item-input).label-floating,.item-has-placeholder:not(.item-input) .label-floating.sc-bkkr-label-h,.item-has-value.label-floating.sc-bkkr-label-h,.item-has-value .label-floating.sc-bkkr-label-h{-webkit-transform:translateY(50%) scale(0.75);transform:translateY(50%) scale(0.75)}.item-has-value.sc-bkkr-label-h:not(.item-has-focus).label-floating,.item-has-value:not(.item-has-focus) .label-floating.sc-bkkr-label-h,.item-has-value.sc-bkkr-label-h:not(.item-has-focus).label-stacked,.item-has-value:not(.item-has-focus) .label-stacked.sc-bkkr-label-h{opacity:0.92}.item-fill-outline.item-has-focus.label-floating.sc-bkkr-label-h,.item-fill-outline.item-has-focus .label-floating.sc-bkkr-label-h,.item-fill-outline.item-has-placeholder.sc-bkkr-label-h:not(.item-input).label-floating,.item-fill-outline.item-has-placeholder:not(.item-input) .label-floating.sc-bkkr-label-h,.item-fill-outline.item-has-value.label-floating.sc-bkkr-label-h,.item-fill-outline.item-has-value .label-floating.sc-bkkr-label-h{-webkit-transform:translateY(-6px) scale(0.75);transform:translateY(-6px) scale(0.75);position:relative;max-width:-webkit-min-content;max-width:-moz-min-content;max-width:min-content;background-color:var(--background, var(--bkkr-item-background, var(--bkkr-background-color, transparent)));overflow:visible;z-index:3}.item-fill-outline.item-has-focus.label-floating.sc-bkkr-label-h::before,.item-fill-outline.item-has-focus .label-floating.sc-bkkr-label-h::before,.item-fill-outline.item-has-focus.label-floating.sc-bkkr-label-h::after,.item-fill-outline.item-has-focus .label-floating.sc-bkkr-label-h::after,.item-fill-outline.item-has-placeholder.sc-bkkr-label-h:not(.item-input).label-floating::before,.item-fill-outline.item-has-placeholder:not(.item-input) .label-floating.sc-bkkr-label-h::before,.item-fill-outline.item-has-placeholder.sc-bkkr-label-h:not(.item-input).label-floating::after,.item-fill-outline.item-has-placeholder:not(.item-input) .label-floating.sc-bkkr-label-h::after,.item-fill-outline.item-has-value.label-floating.sc-bkkr-label-h::before,.item-fill-outline.item-has-value .label-floating.sc-bkkr-label-h::before,.item-fill-outline.item-has-value.label-floating.sc-bkkr-label-h::after,.item-fill-outline.item-has-value .label-floating.sc-bkkr-label-h::after{position:absolute;width:4px;height:100%;background-color:var(--background, var(--bkkr-item-background, var(--bkkr-background-color, transparent)));content:""}.item-fill-outline.item-has-focus.label-floating.sc-bkkr-label-h::before,.item-fill-outline.item-has-focus .label-floating.sc-bkkr-label-h::before,.item-fill-outline.item-has-placeholder.sc-bkkr-label-h:not(.item-input).label-floating::before,.item-fill-outline.item-has-placeholder:not(.item-input) .label-floating.sc-bkkr-label-h::before,.item-fill-outline.item-has-value.label-floating.sc-bkkr-label-h::before,.item-fill-outline.item-has-value .label-floating.sc-bkkr-label-h::before{left:calc(-1 * 4px)}.item-fill-outline.item-has-focus.label-floating.sc-bkkr-label-h::after,.item-fill-outline.item-has-focus .label-floating.sc-bkkr-label-h::after,.item-fill-outline.item-has-placeholder.sc-bkkr-label-h:not(.item-input).label-floating::after,.item-fill-outline.item-has-placeholder:not(.item-input) .label-floating.sc-bkkr-label-h::after,.item-fill-outline.item-has-value.label-floating.sc-bkkr-label-h::after,.item-fill-outline.item-has-value .label-floating.sc-bkkr-label-h::after{right:calc(-1 * 4px)}.item-fill-solid.item-has-focus.state-color.label-stacked.sc-bkkr-label-h:not(.state-color),.item-fill-solid.item-has-focus.state-color .label-stacked.sc-bkkr-label-h:not(.state-color),.item-fill-solid.item-has-focus.state-color.label-floating.sc-bkkr-label-h:not(.state-color),.item-fill-solid.item-has-focus.state-color .label-floating.sc-bkkr-label-h:not(.state-color),.item-fill-outline.item-has-focus.state-color.label-stacked.sc-bkkr-label-h:not(.state-color),.item-fill-outline.item-has-focus.state-color .label-stacked.sc-bkkr-label-h:not(.state-color),.item-fill-outline.item-has-focus.state-color.label-floating.sc-bkkr-label-h:not(.state-color),.item-fill-outline.item-has-focus.state-color .label-floating.sc-bkkr-label-h:not(.state-color){color:current-color(base)}.state-touched.state-invalid.sc-bkkr-label-h -no-combinator.sc-bkkr-label-h:not(.state-color),.state-touched.state-invalid .sc-bkkr-label-h -no-combinator.sc-bkkr-label-h:not(.state-color){color:var(--highlight-color-invalid)}.item-fill-outline.item-has-focus.item-has-start-slot.label-floating.sc-bkkr-label-h,.item-fill-outline.item-has-focus.item-has-start-slot .label-floating.sc-bkkr-label-h,.item-fill-outline.item-has-placeholder.sc-bkkr-label-h:not(.item-input).item-has-start-slot.label-floating,.item-fill-outline.item-has-placeholder:not(.item-input).item-has-start-slot .label-floating.sc-bkkr-label-h,.item-fill-outline.item-has-value.item-has-start-slot.label-floating.sc-bkkr-label-h,.item-fill-outline.item-has-value.item-has-start-slot .label-floating.sc-bkkr-label-h{-webkit-transform:translateX(-32px) translateY(-6px) scale(0.75);transform:translateX(-32px) translateY(-6px) scale(0.75)}.item-fill-outline.item-has-focus.item-has-start-slot.label-floating.label-rtl.sc-bkkr-label-h,.item-fill-outline.item-has-focus.item-has-start-slot .label-floating.label-rtl.sc-bkkr-label-h,.item-fill-outline.item-has-placeholder.sc-bkkr-label-h:not(.item-input).item-has-start-slot.label-floating.label-rtl,.item-fill-outline.item-has-placeholder:not(.item-input).item-has-start-slot .label-floating.label-rtl.sc-bkkr-label-h,.item-fill-outline.item-has-value.item-has-start-slot.label-floating.label-rtl.sc-bkkr-label-h,.item-fill-outline.item-has-value.item-has-start-slot .label-floating.label-rtl.sc-bkkr-label-h{-webkit-transform:translateX(calc(-1 * -32px)) translateY(-6px) scale(0.75);transform:translateX(calc(-1 * -32px)) translateY(-6px) scale(0.75)}.sc-bkkr-label-s h1,.sc-bkkr-label-s h2,.sc-bkkr-label-s h3,.sc-bkkr-label-s h4,.sc-bkkr-label-s h5,.sc-bkkr-label-s h6{text-overflow:inherit;overflow:inherit}.sc-bkkr-label-s h2:last-child,.sc-bkkr-label-s h3:last-child,.sc-bkkr-label-s h4:last-child,.sc-bkkr-label-s h5:last-child,.sc-bkkr-label-s h6:last-child,.sc-bkkr-label-s p:last-child{margin-bottom:0}.sc-bkkr-label-h.label-color.sc-bkkr-label-s>p,.label-color .sc-bkkr-label-h.sc-bkkr-label-s>p{color:inherit}';export{s as bkkr_label}