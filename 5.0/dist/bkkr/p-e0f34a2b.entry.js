import{r as t,e,h as a,H as r,g as i}from"./p-8dbe4215.js";import{c as n,d as o}from"./p-3faaa6d8.js";import"./p-fcb88322.js";import{createGesture as s}from"./p-e9923a82.js";import{s as d,h as l}from"./p-09b2e663.js";const c=class{constructor(a){t(this,a),this.bkkrChange=e(this,"bkkrChange",7),this.bkkrFocus=e(this,"bkkrFocus",7),this.bkkrBlur=e(this,"bkkrBlur",7),this.bkkrStyle=e(this,"bkkrStyle",7),this.inputId="bkkr-"+g++,this.lastDrag=0,this.activated=!1,this.name=this.inputId,this.checked=!1,this.disabled=!1,this.value="on",this.onClick=t=>{t.preventDefault(),this.lastDrag+300<Date.now()&&(this.checked=!this.checked)},this.onFocus=()=>{this.bkkrFocus.emit()},this.onBlur=()=>{this.bkkrBlur.emit()}}checkedChanged(t){this.bkkrChange.emit({checked:t,value:this.value})}disabledChanged(){this.emitStyle(),this.gesture&&this.gesture.enable(!this.disabled)}async connectedCallback(){this.gesture=s({el:this.el,gestureName:"toggle",gesturePriority:100,threshold:5,passive:!1,onStart:()=>this.onStart(),onMove:t=>this.onMove(t),onEnd:t=>this.onEnd(t)}),this.disabledChanged()}disconnectedCallback(){this.gesture&&(this.gesture.destroy(),this.gesture=void 0)}componentWillLoad(){this.emitStyle()}emitStyle(){this.bkkrStyle.emit({"interactive-disabled":this.disabled})}onStart(){this.activated=!0,this.setFocus()}onMove(t){h(document,this.checked,t.deltaX,-10)&&(this.checked=!this.checked)}onEnd(t){this.activated=!1,this.lastDrag=Date.now(),t.event.preventDefault(),t.event.stopImmediatePropagation()}getValue(){return this.value||""}setFocus(){this.focusEl&&this.focusEl.focus()}render(){const{activated:t,color:e,checked:i,disabled:s,el:c,inputId:h,name:g}=this,{label:p,labelId:b,labelText:k}=n(c,h),m=this.getValue();return o(!0,c,g,i?m:"",s),a(r,{onClick:this.onClick,"aria-labelledby":p?b:null,"aria-checked":""+i,"aria-hidden":s?"true":null,role:"switch",class:d(e,{"in-item":l("bkkr-item",c),"toggle-activated":t,"toggle-checked":i,"toggle-disabled":s,interactive:!0})},a("div",{class:"toggle-icon",part:"track"},a("div",{class:"toggle-icon-wrapper"},a("div",{class:"toggle-inner",part:"handle"}))),a("label",{htmlFor:h},k),a("input",{type:"checkbox",role:"switch","aria-checked":""+i,disabled:s,id:h,onFocus:()=>this.onFocus(),onBlur:()=>this.onBlur(),ref:t=>this.focusEl=t}))}get el(){return i(this)}static get watchers(){return{checked:["checkedChanged"],disabled:["disabledChanged"]}}},h=(t,e,a,r)=>{const i="rtl"===t.dir;return e?!i&&r>a||i&&-r<a:!i&&-r<a||i&&r>a};let g=0;c.style=".toggle,:host{--background:rgba(var(--bkkr-text-color-rgb, 0, 0, 0), 0.088);--background-checked:var(--color-base, var(--color-primary, #3880ff));--border-radius:12px;--handle-background:var(--bkkr-background-color, #fff);--handle-background-checked:var(--bkkr-background-color, #fff);--handle-border-radius:21px;--handle-box-shadow:0 3px 12px rgba(var(--bkkr-text-color-rgb, 0, 0, 0), 0.16), 0 3px 1px rgba(var(--bkkr-text-color-rgb, 0, 0, 0), 0.1);--handle-height:calc(24px - (2px * 2));--handle-max-height:calc(100% - (var(--handle-spacing) * 2));--handle-width:calc(24px - (2px * 2));--handle-spacing:2px;--handle-transition:transform 300ms, width 120ms ease-in-out 80ms, left 110ms ease-in-out 80ms, right 110ms ease-in-out 80ms;display:inline-block;position:relative;width:42px;height:24px;outline:none;contain:strict;cursor:pointer;overflow:hidden;-ms-touch-action:none;touch-action:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:2;-webkit-box-sizing:content-box !important;box-sizing:content-box !important}label{top:0;left:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;position:absolute;width:100%;height:100%;border:0;outline:none;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;opacity:0}label::-moz-focus-inner{border:0}input{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;margin:0;padding:0;border:0;outline:0;opacity:0;overflow:hidden;clip:rect(0 0 0 0);-webkit-appearance:none;-moz-appearance:none;appearance:none}:host(.state-focused) input{border:2px solid #5e9ed6}:host(.toggle-disabled){pointer-events:none;opacity:0.3}.toggle-icon-wrapper{display:-ms-flexbox;display:flex;position:relative;-ms-flex-align:center;align-items:center;width:100%;height:100%;-webkit-transition:var(--handle-transition);transition:var(--handle-transition);will-change:transform}.toggle-icon{border-radius:var(--border-radius);display:block;position:relative;width:100%;height:100%;-webkit-transform:translate3d(0, 0, 0);transform:translate3d(0, 0, 0);-webkit-transition:background-color 300ms;transition:background-color 300ms;background:var(--background);overflow:inherit;pointer-events:none}:host(.toggle-checked) .toggle-icon{background:var(--background-checked)}:host(.toggle-color.toggle-checked) .toggle-icon{background:var(--color-base)}.toggle-inner{left:var(--handle-spacing);border-radius:var(--handle-border-radius);position:absolute;width:var(--handle-width);height:var(--handle-height);max-height:var(--handle-max-height);-webkit-transition:var(--handle-transition);transition:var(--handle-transition);background:var(--handle-background);-webkit-box-shadow:var(--handle-box-shadow);box-shadow:var(--handle-box-shadow);contain:strict;will-change:transform}:host(.toggle-checked) .toggle-icon-wrapper{-webkit-transform:translate3d(calc(100% - var(--handle-width)), 0, 0);transform:translate3d(calc(100% - var(--handle-width)), 0, 0)}:host-context([dir=rtl]):host(.toggle-checked) .toggle-icon-wrapper,:host-context([dir=rtl]).toggle-checked .toggle-icon-wrapper{-webkit-transform:translate3d(calc(-100% + var(--handle-width)), 0, 0);transform:translate3d(calc(-100% + var(--handle-width)), 0, 0)}:host(.toggle-checked) .toggle-inner{-webkit-transform:translate3d(calc(var(--handle-spacing) * -2), 0, 0);transform:translate3d(calc(var(--handle-spacing) * -2), 0, 0);background:var(--handle-background-checked)}:host-context([dir=rtl]):host(.toggle-checked) .toggle-inner,:host-context([dir=rtl]).toggle-checked .toggle-inner{-webkit-transform:translate3d(calc(var(--handle-spacing) * 2), 0, 0);transform:translate3d(calc(var(--handle-spacing) * 2), 0, 0)}:host(.toggle-activated) .toggle-icon::before,:host(.toggle-checked) .toggle-icon::before{-webkit-transform:scale3d(0, 0, 0);transform:scale3d(0, 0, 0)}:host(.toggle-activated.toggle-checked) .toggle-inner::before{-webkit-transform:scale3d(0, 0, 0);transform:scale3d(0, 0, 0)}:host(.toggle-activated) .toggle-inner{width:calc(var(--handle-width) + 6px)}:host(.toggle-activated.toggle-checked) .toggle-icon-wrapper{-webkit-transform:translate3d(calc(100% - var(--handle-width) - 6px), 0, 0);transform:translate3d(calc(100% - var(--handle-width) - 6px), 0, 0)}:host-context([dir=rtl]):host(.toggle-activated.toggle-checked) .toggle-icon-wrapper,:host-context([dir=rtl]).toggle-activated.toggle-checked .toggle-icon-wrapper{-webkit-transform:translate3d(calc(-100% + var(--handle-width) + 6px), 0, 0);transform:translate3d(calc(-100% + var(--handle-width) + 6px), 0, 0)}:host(.in-item[slot]){margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:var(--bkkr-spacer, 16px);padding-right:var(--bkkr-spacer, 16px);padding-top:6px;padding-bottom:5px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host(.in-item[slot]){padding-left:unset;padding-right:unset;-webkit-padding-start:var(--bkkr-spacer, 16px);padding-inline-start:var(--bkkr-spacer, 16px);-webkit-padding-end:var(--bkkr-spacer, 16px);padding-inline-end:var(--bkkr-spacer, 16px)}}:host(.in-item[slot=start]){padding-left:0;padding-right:16px;padding-top:6px;padding-bottom:5px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host(.in-item[slot=start]){padding-left:unset;padding-right:unset;-webkit-padding-start:0;padding-inline-start:0;-webkit-padding-end:16px;padding-inline-end:16px}}";export{c as bkkr_toggle}