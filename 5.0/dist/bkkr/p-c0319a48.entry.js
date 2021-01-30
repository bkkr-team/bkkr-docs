import{r as t,e as r,h as i,H as e,g as a}from"./p-8dbe4215.js";import{a as o,b as n,c as s}from"./p-5527b9e6.js";import{s as l,h as b}from"./p-09b2e663.js";const d=class{constructor(i){t(this,i),this.bkkrStyle=r(this,"bkkrStyle",7),this.bkkrFocus=r(this,"bkkrFocus",7),this.bkkrBlur=r(this,"bkkrBlur",7),this.inputId="bkkr-rb-"+c++,this.radioGroup=null,this.checked=!1,this.buttonTabindex=-1,this.name=this.inputId,this.disabled=!1,this.updateState=()=>{this.radioGroup&&(this.checked=this.radioGroup.value===this.value)},this.onFocus=()=>{this.bkkrFocus.emit()},this.onBlur=()=>{this.bkkrBlur.emit()}}async setFocus(t){t.stopPropagation(),t.preventDefault(),this.el.focus()}async setButtonTabindex(t){this.buttonTabindex=t}connectedCallback(){void 0===this.value&&(this.value=this.inputId);const t=this.radioGroup=this.el.closest("bkkr-radio-group");t&&(this.updateState(),o(t,"bkkrChange",this.updateState))}disconnectedCallback(){const t=this.radioGroup;t&&(n(t,"bkkrChange",this.updateState),this.radioGroup=null)}componentWillLoad(){this.emitStyle()}emitStyle(){this.bkkrStyle.emit({"radio-checked":this.checked,"interactive-disabled":this.disabled})}render(){const{inputId:t,disabled:r,checked:a,color:o,el:n,buttonTabindex:d}=this,{label:c,labelId:h,labelText:m}=s(n,t);return i(e,{"aria-checked":""+a,"aria-hidden":r?"true":null,"aria-labelledby":c?h:null,role:"radio",tabindex:d,onFocus:this.onFocus,onBlur:this.onBlur,class:l(o,{"in-item":b("bkkr-item",n),interactive:!0,"radio-checked":a,"radio-disabled":r})},i("div",{class:"radio-button",part:"container"},i("div",{class:"radio-mark",part:"mark"})),i("label",{htmlFor:t},m),i("input",{type:"radio",checked:a,disabled:r,tabindex:"-1",id:t}))}get el(){return a(this)}static get watchers(){return{color:["emitStyle"],checked:["emitStyle"],disabled:["emitStyle"]}}};let c=0;d.style=":host{--border-radius:50%;--color:rgba(var(--bkkr-text-color-rgb, 0, 0, 0), 0.088);--color-checked:var(--color-base, var(--color-primary, #3880ff));--mark-background:var(--bkkr-background-color, #fff);--mark-box-shadow:0 3px 12px rgba(var(--bkkr-text-color-rgb, 0, 0, 0), 0.16), 0 3px 1px rgba(var(--bkkr-text-color-rgb, 0, 0, 0), 0.1);--mark-transition:transform 150ms ease-in-out;display:inline-block;position:relative;width:24px;height:24px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:2;-webkit-box-sizing:border-box;box-sizing:border-box}:host(.radio-disabled){pointer-events:none;opacity:0.3}.radio-button{border-radius:var(--border-radius);display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;background-color:var(--color);contain:layout size style}.radio-button,.radio-mark{-webkit-box-sizing:border-box;box-sizing:border-box}label{top:0;left:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;position:absolute;width:100%;height:100%;border:0;outline:none;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;margin-left:0;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;opacity:0}label::-moz-focus-inner{border:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){label{margin-left:unset;-webkit-margin-start:0;margin-inline-start:0}}input{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;margin:0;padding:0;border:0;outline:0;opacity:0;overflow:hidden;clip:rect(0 0 0 0);-webkit-appearance:none;-moz-appearance:none;appearance:none}:host(:focus){outline:none}.radio-mark{border-radius:var(--border-radius);width:100%;height:100%;-webkit-transition:var(--mark-transition);transition:var(--mark-transition);background-color:var(--mark-background);-webkit-box-shadow:var(--mark-box-shadow);box-shadow:var(--mark-box-shadow)}:host(.radio-checked) .radio-button{background-color:var(--color-checked)}:host(.radio-checked) .radio-mark{-webkit-transform:scale(0.5);transform:scale(0.5)}:host(.in-item){margin-left:var(--bkkr-spacer, 16px)/2;margin-right:11px;margin-top:8px;margin-bottom:8px;display:block;position:static}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host(.in-item){margin-left:unset;margin-right:unset;-webkit-margin-start:var(--bkkr-spacer, 16px)/2;margin-inline-start:var(--bkkr-spacer, 16px)/2;-webkit-margin-end:11px;margin-inline-end:11px}}:host(.in-item[slot=start]){margin-left:3px;margin-right:21px;margin-top:8px;margin-bottom:8px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host(.in-item[slot=start]){margin-left:unset;margin-right:unset;-webkit-margin-start:3px;margin-inline-start:3px;-webkit-margin-end:21px;margin-inline-end:21px}}";export{d as bkkr_radio}