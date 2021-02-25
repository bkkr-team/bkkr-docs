import{r as t,e as r,h as i,H as a,g as e}from"./p-8dfd188c.js";import{f as n,h as s,e as o}from"./p-8bf53d8d.js";import"./p-fcb88322.js";import{createGesture as h}from"./p-e9923a82.js";import{s as b,h as d}from"./p-09b2e663.js";const l=class{constructor(i){t(this,i),this.bkkrChange=r(this,"bkkrChange",7),this.bkkrStyle=r(this,"bkkrStyle",7),this.bkkrFocus=r(this,"bkkrFocus",7),this.bkkrBlur=r(this,"bkkrBlur",7),this.didLoad=!1,this.noUpdate=!1,this.hasFocus=!1,this.ratioA=0,this.ratioB=0,this.debounce=0,this.name="",this.dualKnobs=!1,this.min=0,this.max=100,this.pin=!1,this.snaps=!1,this.step=1,this.ticks=!0,this.disabled=!1,this.value=0,this.clampBounds=t=>n(this.min,t,this.max),this.ensureValueInBounds=t=>this.dualKnobs?{lower:this.clampBounds(t.lower),upper:this.clampBounds(t.upper)}:this.clampBounds(t),this.setupGesture=async()=>{const t=this.rangeSlider;t&&(this.gesture=h({el:t,gestureName:"range",gesturePriority:100,threshold:0,onStart:t=>this.onStart(t),onMove:t=>this.onMove(t),onEnd:t=>this.onEnd(t)}),this.gesture.enable(!this.disabled))},this.handleKeyboard=(t,r)=>{let i=this.step;i=i>0?i:1,i/=this.max-this.min,r||(i*=-1),"A"===t?this.ratioA=n(0,this.ratioA+i,1):this.ratioB=n(0,this.ratioB+i,1),this.updateValue()},this.onBlur=()=>{this.hasFocus&&(this.hasFocus=!1,this.bkkrBlur.emit(),this.emitStyle())},this.onFocus=()=>{this.hasFocus||(this.hasFocus=!0,this.bkkrFocus.emit(),this.emitStyle())}}debounceChanged(){this.bkkrChange=s(this.bkkrChange,this.debounce)}minChanged(){this.noUpdate||this.updateRatio()}maxChanged(){this.noUpdate||this.updateRatio()}disabledChanged(){this.gesture&&this.gesture.enable(!this.disabled),this.emitStyle()}valueChanged(t){this.noUpdate||this.updateRatio(),t=this.ensureValueInBounds(t),this.bkkrChange.emit({value:t})}componentDidLoad(){this.setupGesture(),this.didLoad=!0}connectedCallback(){this.updateRatio(),this.debounceChanged(),this.disabledChanged(),this.didLoad&&this.setupGesture()}disconnectedCallback(){this.gesture&&(this.gesture.destroy(),this.gesture=void 0)}getValue(){const t=this.value||0;return this.dualKnobs?"object"==typeof t?t:{lower:0,upper:t}:"object"==typeof t?t.upper:t}emitStyle(){this.bkkrStyle.emit({interactive:!0,"interactive-disabled":this.disabled})}onStart(t){const r=this.rect=this.rangeSlider.getBoundingClientRect(),i=t.currentX;let a=n(0,(i-r.left)/r.width,1);"rtl"===document.dir&&(a=1-a),this.pressedKnob=!this.dualKnobs||Math.abs(this.ratioA-a)<Math.abs(this.ratioB-a)?"A":"B",this.setFocus(this.pressedKnob),this.update(i)}onMove(t){this.update(t.currentX)}onEnd(t){this.update(t.currentX),this.pressedKnob=void 0}update(t){const r=this.rect;let i=n(0,(t-r.left)/r.width,1);"rtl"===document.dir&&(i=1-i),this.snaps&&(i=p(c(i,this.min,this.max,this.step),this.min,this.max)),"A"===this.pressedKnob?this.ratioA=i:this.ratioB=i,this.updateValue()}get valA(){return c(this.ratioA,this.min,this.max,this.step)}get valB(){return c(this.ratioB,this.min,this.max,this.step)}get ratioLower(){return this.dualKnobs?Math.min(this.ratioA,this.ratioB):0}get ratioUpper(){return this.dualKnobs?Math.max(this.ratioA,this.ratioB):this.ratioA}updateRatio(){const t=this.getValue(),{min:r,max:i}=this;this.dualKnobs?(this.ratioA=p(t.lower,r,i),this.ratioB=p(t.upper,r,i)):this.ratioA=p(t,r,i)}updateValue(){this.noUpdate=!0;const{valA:t,valB:r}=this;this.value=this.dualKnobs?{lower:Math.min(t,r),upper:Math.max(t,r)}:t,this.noUpdate=!1}setFocus(t){if(this.el.shadowRoot){const r=this.el.shadowRoot.querySelector("A"===t?".range-knob-a":".range-knob-b");r&&r.focus()}}render(){const{min:t,max:r,step:e,el:n,handleKeyboard:s,pressedKnob:h,disabled:l,pin:c,ratioLower:k,ratioUpper:u}=this,m="rtl"===document.dir,v=m?"right":"left",x=t=>({[v]:t[v]}),f={[v]:100*k+"%",[m?"left":"right"]:100-100*u+"%"},w=[];if(this.snaps&&this.ticks)for(let i=t;i<=r;i+=e){const a=p(i,t,r),e={ratio:a,active:a>=k&&a<=u};e[v]=100*a+"%",w.push(e)}return o(!0,n,this.name,JSON.stringify(this.getValue()),l),i(a,{onFocusin:this.onFocus,onFocusout:this.onBlur,class:b(this.color,{"in-item":d("bkkr-item",n),"range-has-pin":c,"state-disabled":l,"state-pressed":void 0!==h,"state-focusable":!0})},i("slot",{name:"start"}),i("div",{class:"range-slider",ref:t=>this.rangeSlider=t},w.map((t=>i("div",{style:x(t),role:"presentation",class:{"range-tick":!0,"range-tick-active":t.active},part:t.active?"tick-active":"tick"}))),i("div",{class:"range-bar",role:"presentation",part:"bar"}),i("div",{class:"range-bar range-bar-active",role:"presentation",style:f,part:"bar-active"}),g(m,{knob:"A",pressed:"A"===h,value:this.valA,ratio:this.ratioA,pin:c,disabled:l,handleKeyboard:s,min:t,max:r}),this.dualKnobs&&g(m,{knob:"B",pressed:"B"===h,value:this.valB,ratio:this.ratioB,pin:c,disabled:l,handleKeyboard:s,min:t,max:r})),i("slot",{name:"end"}))}get el(){return e(this)}static get watchers(){return{debounce:["debounceChanged"],min:["minChanged"],max:["maxChanged"],disabled:["disabledChanged"],value:["valueChanged"]}}},g=(t,{knob:r,value:a,ratio:e,min:n,max:s,disabled:o,pressed:h,pin:b,handleKeyboard:d})=>{const l=t?"right":"left";return i("div",{onKeyDown:t=>{const i=t.key;"ArrowLeft"===i||"ArrowDown"===i?(d(r,!1),t.preventDefault(),t.stopPropagation()):"ArrowRight"!==i&&"ArrowUp"!==i||(d(r,!0),t.preventDefault(),t.stopPropagation())},class:{"range-knob-handle":!0,"range-knob-a":"A"===r,"range-knob-b":"B"===r,"range-knob-pressed":h,"range-knob-min":a===n,"range-knob-max":a===s},style:(()=>{const t={};return t[l]=100*e+"%",t})(),role:"slider",tabindex:o?-1:0,"aria-valuemin":n,"aria-valuemax":s,"aria-disabled":o?"true":null,"aria-valuenow":a},b&&i("div",{class:"range-pin",role:"presentation",part:"pin"},Math.round(a)),i("div",{class:"range-knob",role:"presentation",part:"knob"}))},c=(t,r,i,a)=>{let e=(i-r)*t;return a>0&&(e=Math.round(e/a)*a+r),n(r,e,i)},p=(t,r,i)=>n(0,(t-r)/(i-r),1);l.style=":host{--knob-handle-size:calc(var(--knob-size) * 2);--knob-border-radius:50%;--knob-background:var(--bkkr-background-color, #fff);--knob-box-shadow:0 1.5px 2.5px 0 rgba(var(--box-shadow-color, 0, 0, 0), 0.1), 0 6px 5px 0 rgba(var(--box-shadow-color, 0, 0, 0), 0.12), 0 0.6px 10px 0 rgba(var(--box-shadow-color, 0, 0, 0), 0.08);--knob-size:24px;--bar-height:2px;--bar-background:rgba(var(--text-color-rgb, 0, 0, 0), 0.1);--bar-background-hover:rgba(var(--text-color-rgb, 0, 0, 0), 0.3);--bar-background-focus:rgba(var(--text-color-rgb, 0, 0, 0), 0.3);--bar-background-active:var(--color-base, var(--color-primary, #3880ff));--bar-border-radius:0;--bar-transition:0.2s background-color cubic-bezier(0.32, 0.72, 0, 1);--height:42px;padding-left:16px;padding-right:16px;padding-top:8px;padding-bottom:8px;display:-ms-flexbox;display:flex;position:relative;-ms-flex:3;flex:3;-ms-flex-align:center;align-items:center;font-family:var(--default-font-sans-serif);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:2}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px}}::slotted(bkkr-label){-ms-flex:initial;flex:initial}::slotted(bkkr-icon[slot]){font-size:24px}::slotted([slot=start]){margin-left:0;margin-right:var(--bkkr-spacer, 16px);margin-top:0;margin-bottom:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){::slotted([slot=start]){margin-left:unset;margin-right:unset;-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:var(--bkkr-spacer, 16px);margin-inline-end:var(--bkkr-spacer, 16px)}}::slotted([slot=end]){margin-left:var(--bkkr-spacer, 16px);margin-right:0;margin-top:0;margin-bottom:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){::slotted([slot=end]){margin-left:unset;margin-right:unset;-webkit-margin-start:var(--bkkr-spacer, 16px);margin-inline-start:var(--bkkr-spacer, 16px);-webkit-margin-end:0;margin-inline-end:0}}.range-slider{position:relative;-ms-flex:1;flex:1;width:100%;height:var(--height);contain:size layout style;cursor:pointer;-ms-touch-action:pan-y;touch-action:pan-y}:host(.state-pressed) .range-knob-handle{cursor:-webkit-grabbing;cursor:grabbing}.range-pin{padding-left:8px;padding-right:8px;padding-top:8px;padding-bottom:8px;display:inline-block;position:relative;top:-20px;min-width:28px;-webkit-transform:translate3d(0, 28px, 0) scale(0.01);transform:translate3d(0, 28px, 0) scale(0.01);-webkit-transition:-webkit-transform 0.2s cubic-bezier(0.32, 0.72, 0, 1);transition:-webkit-transform 0.2s cubic-bezier(0.32, 0.72, 0, 1);transition:transform 0.2s cubic-bezier(0.32, 0.72, 0, 1);transition:transform 0.2s cubic-bezier(0.32, 0.72, 0, 1), -webkit-transform 0.2s cubic-bezier(0.32, 0.72, 0, 1);background:transparent;color:var(--bkkr-text-color, #000);font-size:12px;text-align:center;-webkit-box-sizing:border-box;box-sizing:border-box}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.range-pin{padding-left:unset;padding-right:unset;-webkit-padding-start:8px;padding-inline-start:8px;-webkit-padding-end:8px;padding-inline-end:8px}}:host(.range-has-pin){padding-top:20px}.range-bar{border-radius:var(--bar-border-radius);top:calc((var(--height) - var(--bar-height)) / 2);left:0;position:absolute;width:100%;height:var(--bar-height);-webkit-transition:var(--bar-transition);transition:var(--bar-transition);background-color:var(--bar-background);pointer-events:none}[dir=rtl] .range-bar,:host-context([dir=rtl]) .range-bar{left:unset}.range-bar-active{bottom:0;width:auto;background:var(--bar-background-active)}.range-tick{margin-left:-1px;border-radius:0;position:absolute;top:18px;width:2px;height:8px;pointer-events:none;background:rgba(var(--text-color-rgb, 0, 0, 0), 0.1)}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.range-tick{margin-left:unset;-webkit-margin-start:-1px;margin-inline-start:-1px}}.range-tick-active{background:var(--bar-background-active)}.range-knob{--knob-transition:0.2s transform cubic-bezier(0.25, 1.11, 0.78, 1.59);--knob-transform:translateZ(0);border-radius:var(--knob-border-radius);top:calc(50% - var(--knob-size) / 2);left:calc(50% - var(--knob-size) / 2);position:absolute;width:var(--knob-size);height:var(--knob-size);-webkit-transform:var(--knob-transform);transform:var(--knob-transform);-webkit-transition:var(--knob-transition);transition:var(--knob-transition);background:var(--knob-background);-webkit-box-shadow:var(--knob-box-shadow);box-shadow:var(--knob-box-shadow);z-index:2;pointer-events:none}[dir=rtl] .range-knob,:host-context([dir=rtl]) .range-knob{left:unset}.range-knob-handle{top:calc((var(--height) - var(--knob-handle-size)) / 2);left:0;margin-left:calc(0px - var(--knob-handle-size) / 2);position:absolute;width:var(--knob-handle-size);height:var(--knob-handle-size);text-align:center;cursor:-webkit-grab;cursor:grab}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.range-knob-handle{margin-left:unset;-webkit-margin-start:calc(0px - var(--knob-handle-size) / 2);margin-inline-start:calc(0px - var(--knob-handle-size) / 2)}}[dir=rtl] .range-knob-handle,:host-context([dir=rtl]) .range-knob-handle{left:unset}.range-knob-handle:active,.range-knob-handle:focus{outline:none}.range-knob-pressed .range-knob{--knob-transform:scale3d(0.9, 0.9, 1);--knob-transition:0.2s transform ease-out}.range-knob-pressed .range-pin{-webkit-transform:translate3d(0, 0, 0) scale(1);transform:translate3d(0, 0, 0) scale(1)}@media (any-hover: hover){:host(:hover) .range-bar:not(.range-bar-active),:host(:hover) .range-tick:not(.range-tick-active){background:var(--bar-background-hover)}}:host(:focus) .range-bar:not(.range-bar-active),:host(:focus) .range-tick:not(.range-tick-active),:host(.state-focused) .range-bar:not(.range-bar-active),:host(.state-focused) .range-tick:not(.range-tick-active){background:var(--bar-background-focus)}:host(.state-pressed) .range-bar-active{will-change:left, right}:host(:disabled),:host(.state-disabled){pointer-events:none;opacity:0.3}:host(.range-color) .range-bar-active,:host(.range-color) .range-tick-active{background:var(--color-base)}:host(.in-item){width:100%}:host(.in-item) ::slotted(bkkr-label){-ms-flex-item-align:center;align-self:center}";export{l as bkkr_range}