/*!
 * (C) BKKR Framework https://bkkr-team.github.io/bkkr-docs/ - MIT License
 */
import{r as t,c as e,h as a,H as r,g as n}from"./p-08349d90.js";import{createGesture as i}from"./p-b4206503.js";import{d as o,e as s}from"./p-7b48497a.js";import{s as d,h as c}from"./p-18201c80.js";import"./p-f081b157.js";let l=class{constructor(a){t(this,a),this.bkkrChange=e(this,"bkkrChange",7),this.bkkrFocus=e(this,"bkkrFocus",7),this.bkkrBlur=e(this,"bkkrBlur",7),this.bkkrStyle=e(this,"bkkrStyle",7),this.inputId="bkkr-"+g++,this.lastDrag=0,this.activated=!1,this.name=this.inputId,this.checked=!1,this.disabled=!1,this.value="on",this.onClick=t=>{t.preventDefault(),this.lastDrag+300<Date.now()&&(this.checked=!this.checked)},this.onFocus=()=>{this.bkkrFocus.emit()},this.onBlur=()=>{this.bkkrBlur.emit()}}checkedChanged(t){this.bkkrChange.emit({checked:t,value:this.value})}disabledChanged(){this.emitStyle(),this.gesture&&this.gesture.enable(!this.disabled)}async connectedCallback(){this.gesture=i({el:this.el,gestureName:"toggle",gesturePriority:100,threshold:5,passive:!1,onStart:()=>this.onStart(),onMove:t=>this.onMove(t),onEnd:t=>this.onEnd(t)}),this.disabledChanged()}disconnectedCallback(){this.gesture&&(this.gesture.destroy(),this.gesture=void 0)}componentWillLoad(){this.emitStyle()}emitStyle(){this.bkkrStyle.emit({"interactive-disabled":this.disabled})}onStart(){this.activated=!0,this.setFocus()}onMove(t){h(document,this.checked,t.deltaX,-10)&&(this.checked=!this.checked)}onEnd(t){this.activated=!1,this.lastDrag=Date.now(),t.event.preventDefault(),t.event.stopImmediatePropagation()}getValue(){return this.value||""}setFocus(){this.focusEl&&this.focusEl.focus()}render(){const{activated:t,color:e,checked:n,disabled:i,el:l,inputId:h,name:g}=this,{label:p,labelId:b,labelText:k}=o(l,h),u=this.getValue();return s(!0,l,g,n?u:"",i),a(r,{onClick:this.onClick,"aria-labelledby":p?b:null,"aria-checked":`${n}`,"aria-hidden":i?"true":null,role:"switch",class:d(e,{"in-item":c("bkkr-item",l),"state-activated":t,"state-checked":n,"state-disabled":i,"state-focusable":!0,interactive:!0})},a("div",{class:"toggle-icon",part:"track"},a("div",{class:"toggle-icon-wrapper"},a("div",{class:"toggle-inner",part:"handle"}))),a("label",{htmlFor:h},k),a("input",{type:"checkbox",role:"switch","aria-checked":`${n}`,disabled:i,id:h,onFocus:()=>this.onFocus(),onBlur:()=>this.onBlur(),ref:t=>this.focusEl=t}))}get el(){return n(this)}static get watchers(){return{checked:["checkedChanged"],disabled:["disabledChanged"]}}};const h=(t,e,a,r)=>{const n="rtl"===t.dir;return e?!n&&r>a||n&&-r<a:!n&&-r<a||n&&r>a};let g=0;l.style=":host{--background:rgba(var(--bkkr-text-color-rgb, 0, 0, 0), 0.04);--background-hover:rgba(var(--bkkr-text-color-rgb, 0, 0, 0), 0.3);--background-focus:rgba(var(--bkkr-text-color-rgb, 0, 0, 0), 0.3);--background-checked:var(--color-base, var(--color-primary, #3880ff));--border-radius:12px;--handle-background:var(--bkkr-input-knob-background, var(--bkkr-background-color, #fff));--handle-background-checked:var(--bkkr-input-knob-background, var(--bkkr-background-color, #fff));--handle-border-radius:21px;--handle-box-shadow:0 1.5px 2.5px 0 rgba(var(--box-shadow-color, 0, 0, 0), 0.1), 0 6px 5px 0 rgba(var(--box-shadow-color, 0, 0, 0), 0.12), 0 0.6px 10px 0 rgba(var(--box-shadow-color, 0, 0, 0), 0.08);--handle-height:calc(24px - (3px * 2));--handle-max-height:calc(100% - var(--handle-spacing) * 2);--handle-width:calc(24px - (3px * 2));--handle-spacing:3px;--handle-transition:transform 0.3s cubic-bezier(0.32, 0.72, 0, 1), width 120ms ease-in-out, left 110ms ease-in-out, right 110ms ease-in-out;display:inline-block;position:relative;width:42px;height:24px;outline:none;contain:strict;cursor:pointer;-ms-touch-action:none;touch-action:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:2;-webkit-box-sizing:content-box !important;box-sizing:content-box !important}label{top:0;left:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;position:absolute;width:100%;height:100%;border:0;outline:none;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;opacity:0;pointer-events:none}label::-moz-focus-inner{border:0}input{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;margin:0;padding:0;border:0;outline:0;opacity:0;overflow:hidden;clip:rect(0 0 0 0);-webkit-appearance:none;-moz-appearance:none;appearance:none}@media (any-hover: hover){:host(:hover) .toggle-icon{background:var(--background-hover)}}:host(:focus) .toggle-icon,:host(.state-focused) .toggle-icon{background:var(--background-focus)}:host(.state-disabled){pointer-events:none;opacity:0.5}.toggle-icon-wrapper{display:-ms-flexbox;display:flex;position:relative;-ms-flex-align:center;align-items:center;width:100%;height:100%;-webkit-transition:var(--handle-transition);transition:var(--handle-transition);will-change:transform}.toggle-icon{border-radius:var(--border-radius);display:block;position:relative;width:100%;height:100%;-webkit-transform:translate3d(0, 0, 0);transform:translate3d(0, 0, 0);-webkit-transition:background-color 0.2s;transition:background-color 0.2s;background-color:var(--background);overflow:inherit;pointer-events:none}:host(.state-checked) .toggle-icon{background:var(--background-checked)}:host(.toggle-color.state-checked) .toggle-icon{background:var(--color-base)}.toggle-inner{left:var(--handle-spacing);border-radius:var(--handle-border-radius);position:absolute;width:var(--handle-width);height:var(--handle-height);max-height:var(--handle-max-height);-webkit-transition:var(--handle-transition);transition:var(--handle-transition);background:var(--handle-background);-webkit-box-shadow:var(--handle-box-shadow);box-shadow:var(--handle-box-shadow);contain:strict;will-change:transform}:host(.state-checked) .toggle-icon-wrapper{-webkit-transform:translate3d(calc(100% - var(--handle-width)), 0, 0);transform:translate3d(calc(100% - var(--handle-width)), 0, 0)}:host-context([dir=rtl]):host(.state-checked) .toggle-icon-wrapper,:host-context([dir=rtl]).state-checked .toggle-icon-wrapper{-webkit-transform:translate3d(calc(-100% + var(--handle-width)), 0, 0);transform:translate3d(calc(-100% + var(--handle-width)), 0, 0)}:host(.state-checked) .toggle-inner{-webkit-transform:translate3d(calc(var(--handle-spacing) * -2), 0, 0);transform:translate3d(calc(var(--handle-spacing) * -2), 0, 0);background:var(--handle-background-checked)}:host-context([dir=rtl]):host(.state-checked) .toggle-inner,:host-context([dir=rtl]).state-checked .toggle-inner{-webkit-transform:translate3d(calc(var(--handle-spacing) * 2), 0, 0);transform:translate3d(calc(var(--handle-spacing) * 2), 0, 0)}:host(.state-activated) .toggle-icon::before,:host(.state-checked) .toggle-icon::before{-webkit-transform:scale3d(0, 0, 0);transform:scale3d(0, 0, 0)}:host(.state-activated.state-checked) .toggle-inner::before{-webkit-transform:scale3d(0, 0, 0);transform:scale3d(0, 0, 0)}:host(.state-activated) .toggle-inner{width:calc(var(--handle-width) + 6px)}:host(.state-activated.state-checked) .toggle-icon-wrapper{-webkit-transform:translate3d(calc(100% - var(--handle-width) - 6px), 0, 0);transform:translate3d(calc(100% - var(--handle-width) - 6px), 0, 0)}:host-context([dir=rtl]):host(.state-activated.state-checked) .toggle-icon-wrapper,:host-context([dir=rtl]).state-activated.state-checked .toggle-icon-wrapper{-webkit-transform:translate3d(calc(-100% + var(--handle-width) + 6px), 0, 0);transform:translate3d(calc(-100% + var(--handle-width) + 6px), 0, 0)}:host(.in-item[slot]){margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:var(--bkkr-spacer, 16px);padding-right:var(--bkkr-spacer, 16px);padding-top:6px;padding-bottom:5px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host(.in-item[slot]){padding-left:unset;padding-right:unset;-webkit-padding-start:var(--bkkr-spacer, 16px);padding-inline-start:var(--bkkr-spacer, 16px);-webkit-padding-end:var(--bkkr-spacer, 16px);padding-inline-end:var(--bkkr-spacer, 16px)}}:host(.in-item[slot=start]){padding-left:0;padding-right:16px;padding-top:6px;padding-bottom:5px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host(.in-item[slot=start]){padding-left:unset;padding-right:unset;-webkit-padding-start:0;padding-inline-start:0;-webkit-padding-end:16px;padding-inline-end:16px}}";export{l as bkkr_toggle}