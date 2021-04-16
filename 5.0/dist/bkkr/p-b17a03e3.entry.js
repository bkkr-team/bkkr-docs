import{r as t,c as r,h as a,H as i,g as e}from"./p-0bf5078b.js";import{a as o,b as n,d as s}from"./p-c2089e63.js";import{s as b,h as c}from"./p-c50c697b.js";const d=class{constructor(a){t(this,a),this.bkkrStyle=r(this,"bkkrStyle",7),this.bkkrFocus=r(this,"bkkrFocus",7),this.bkkrBlur=r(this,"bkkrBlur",7),this.inputId="bkkr-rb-"+l++,this.radioGroup=null,this.checked=!1,this.buttonTabindex=-1,this.name=this.inputId,this.disabled=!1,this.updateState=()=>{this.radioGroup&&(this.checked=this.radioGroup.value===this.value)},this.onFocus=()=>{this.bkkrFocus.emit()},this.onBlur=()=>{this.bkkrBlur.emit()}}async setFocus(t){t.stopPropagation(),t.preventDefault(),this.el.focus()}async setButtonTabindex(t){this.buttonTabindex=t}connectedCallback(){void 0===this.value&&(this.value=this.inputId);const t=this.radioGroup=this.el.closest("bkkr-radio-group");t&&(this.updateState(),o(t,"bkkrChange",this.updateState))}disconnectedCallback(){const t=this.radioGroup;t&&(n(t,"bkkrChange",this.updateState),this.radioGroup=null)}componentWillLoad(){this.emitStyle()}emitStyle(){this.bkkrStyle.emit({"state-checked":this.checked,"interactive-disabled":this.disabled})}render(){const{inputId:t,disabled:r,checked:e,color:o,el:n,buttonTabindex:d}=this,{label:l,labelId:h,labelText:k}=s(n,t);return a(i,{"aria-checked":`${e}`,"aria-hidden":r?"true":null,"aria-labelledby":l?h:null,role:"radio",tabindex:d,onFocus:this.onFocus,onBlur:this.onBlur,class:b(o,{"in-item":c("bkkr-item",n),interactive:!0,"state-checked":e,"state-disabled":r,"state-focusable":!0})},a("div",{class:"radio-button",part:"container"},a("div",{class:"radio-mark",part:"mark"})),a("label",{htmlFor:t},k),a("input",{type:"radio",checked:e,disabled:r,tabindex:"-1",id:t}))}get el(){return e(this)}static get watchers(){return{color:["emitStyle"],checked:["emitStyle"],disabled:["emitStyle"]}}};let l=0;d.style=":host{--border-radius:50%;--background:rgba(var(--bkkr-text-color-rgb, 0, 0, 0), 0.04);--background-hover:rgba(var(--bkkr-text-color-rgb, 0, 0, 0), 0.3);--background-focus:rgba(var(--bkkr-text-color-rgb, 0, 0, 0), 0.3);--background-checked:var(--color-base, var(--color-primary, #3880ff));--transition:0.2s background-color cubic-bezier(0.32, 0.72, 0, 1);--mark-background:var(--bkkr-background-color, #fff);--mark-box-shadow:0 1.5px 2.5px 0 rgba(var(--box-shadow-color, 0, 0, 0), 0.1), 0 6px 5px 0 rgba(var(--box-shadow-color, 0, 0, 0), 0.12), 0 0.6px 10px 0 rgba(var(--box-shadow-color, 0, 0, 0), 0.08);--mark-transition:0.5s transform cubic-bezier(0.155, 1.105, 0.295, 1.12);--mark-scale-checked:.5;display:inline-block;position:relative;width:24px;height:24px;-webkit-transition:var(--transition);transition:var(--transition);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:2;-webkit-box-sizing:border-box;box-sizing:border-box}.radio-button{border-radius:var(--border-radius);display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;-webkit-transition:var(--transition);transition:var(--transition);background-color:var(--background);contain:layout size style;z-index:1;pointer-events:none}.radio-button,.radio-mark{-webkit-box-sizing:border-box;box-sizing:border-box}label{top:0;left:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;position:absolute;width:100%;height:100%;border:0;outline:none;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;margin-left:0;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;opacity:0}label::-moz-focus-inner{border:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){label{margin-left:unset;-webkit-margin-start:0;margin-inline-start:0}}input{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;margin:0;padding:0;border:0;outline:0;opacity:0;overflow:hidden;clip:rect(0 0 0 0);-webkit-appearance:none;-moz-appearance:none;appearance:none}:host(:focus){outline:none}.radio-mark{border-radius:var(--border-radius);width:calc(100% - 6px);height:calc(100% - 6px);-webkit-transition:var(--mark-transition);transition:var(--mark-transition);background:var(--mark-background);-webkit-box-shadow:var(--mark-box-shadow);box-shadow:var(--mark-box-shadow)}@media (any-hover: hover){:host(:hover) .radio-button{background:var(--background-hover)}}:host(:focus) .radio-button,:host(.state-focused) .radio-button{background:var(--background-focus)}:host(.state-checked) .radio-button{background:var(--background-checked)}:host(.state-checked) .radio-mark{-webkit-transform:scale(var(--mark-scale-checked));transform:scale(var(--mark-scale-checked))}:host(:disabled),:host(.state-disabled){pointer-events:none;cursor:default;opacity:0.3}:host(.in-item){margin-left:var(--bkkr-spacer, 16px)/2;margin-right:11px;margin-top:8px;margin-bottom:8px;display:block;position:static}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host(.in-item){margin-left:unset;margin-right:unset;-webkit-margin-start:var(--bkkr-spacer, 16px)/2;margin-inline-start:var(--bkkr-spacer, 16px)/2;-webkit-margin-end:11px;margin-inline-end:11px}}:host(.in-item[slot=start]){margin-left:3px;margin-right:21px;margin-top:8px;margin-bottom:8px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host(.in-item[slot=start]){margin-left:unset;margin-right:unset;-webkit-margin-start:3px;margin-inline-start:3px;-webkit-margin-end:21px;margin-inline-end:21px}}@media (prefers-reduced-motion: reduce){.radio-mark{-webkit-transition:none;transition:none}}";export{d as bkkr_radio}