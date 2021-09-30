import{r,c as t,h as e,H as s,g as a}from"./p-a3958a94.js";import{d as o,e as i}from"./p-d56ecf06.js";import{s as n,h}from"./p-b0f3bd3c.js";const d=class{constructor(e){r(this,e),this.bkkrChange=t(this,"bkkrChange",7),this.bkkrFocus=t(this,"bkkrFocus",7),this.bkkrBlur=t(this,"bkkrBlur",7),this.bkkrStyle=t(this,"bkkrStyle",7),this.inputId="bkkr-cb-"+b++,this.name=this.inputId,this.checked=!1,this.indeterminate=!1,this.disabled=!1,this.value="on",this.onClick=r=>{r.preventDefault(),this.setFocus(),this.checked=!this.checked,this.indeterminate=!1},this.onFocus=()=>{this.bkkrFocus.emit()},this.onBlur=()=>{this.bkkrBlur.emit()}}componentWillLoad(){this.emitStyle()}checkedChanged(r){this.bkkrChange.emit({checked:r,value:this.value}),this.emitStyle()}disabledChanged(){this.emitStyle()}emitStyle(){this.bkkrStyle.emit({"state-checked":this.checked,"interactive-disabled":this.disabled})}setFocus(){this.focusEl&&this.focusEl.focus()}render(){const{color:r,checked:t,disabled:a,el:d,indeterminate:b,inputId:c,name:l,value:k}=this,{label:p,labelId:m,labelText:g}=o(d,c);i(!0,d,l,t?k:"",a);let x=e("path",b?{d:"M5 10.75L16 10.75",part:"mark"}:{d:"M5,10.75 L8.5,14.25 L19.4,2.3 C18.8333333,1.43333333 18.0333333,1 16,1 L5,1 C2.35,1 1,2.35 1,5 L1,16 C1,18.65 2.35,20 5,20 L16,20 C18.65,20 20,18.65 20,16 L20,7.99769186",part:"mark"});return e(s,{onClick:this.onClick,"aria-labelledby":p?m:null,"aria-checked":`${t}`,"aria-hidden":a?"true":null,role:"checkbox",class:n(r,{"in-item":h("bkkr-item",d),"checkbox-indeterminate":b,"state-checked":t,"state-disabled":a,"state-focusable":!0,interactive:!0})},e("svg",{class:"checkbox-button",viewBox:"0 0 21 21",part:"container"},x),e("label",{htmlFor:c},g),e("input",{type:"checkbox","aria-checked":`${t}`,disabled:a,id:c,onFocus:()=>this.onFocus(),onBlur:()=>this.onBlur(),ref:r=>this.focusEl=r}))}get el(){return a(this)}static get watchers(){return{checked:["checkedChanged"],disabled:["disabledChanged"]}}};let b=0;d.style=":host{--background:transparent;--border-color:var(--bkkr-border, rgba(var(--bkkr-text-color-rgb, 0, 0, 0), 0.3));--border-color-hover:var(--bkkr-border, rgba(var(--bkkr-text-color-rgb, 0, 0, 0), 0.3));--border-color-focus:var(--bkkr-border, rgba(var(--bkkr-text-color-rgb, 0, 0, 0), 0.3));--border-color-selected:var(--color-base, var(--color-primary, #3880ff));--border-width:2px;display:inline-block;position:relative;width:24px;height:24px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:2}label{top:0;left:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;position:absolute;width:100%;height:100%;border:0;outline:none;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;opacity:0}label::-moz-focus-inner{border:0}input{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;margin:0;padding:0;border:0;outline:0;opacity:0;overflow:hidden;clip:rect(0 0 0 0);-webkit-appearance:none;-moz-appearance:none;appearance:none}.checkbox-button{border-radius:6px;display:block;width:24px;height:24px;-webkit-transform:scale(var(--scale, 1)) translateZ(0);transform:scale(var(--scale, 1)) translateZ(0);-webkit-transition:stroke-dasharray 0.6s, stroke-dashoffset 0.6s, -webkit-box-shadow 0.3s;transition:stroke-dasharray 0.6s, stroke-dashoffset 0.6s, -webkit-box-shadow 0.3s;transition:stroke-dasharray 0.6s, stroke-dashoffset 0.6s, box-shadow 0.3s;transition:stroke-dasharray 0.6s, stroke-dashoffset 0.6s, box-shadow 0.3s, -webkit-box-shadow 0.3s;-webkit-box-shadow:inset 0 0 0 var(--sharp, 0.55px) var(--backdrop, var(--border-color));box-shadow:inset 0 0 0 var(--sharp, 0.55px) var(--backdrop, var(--border-color));z-index:1;pointer-events:none;fill:none;stroke:var(--border-color-selected, var(--border-color));stroke-width:var(--border-width);stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:var(--array, 86.12);stroke-dashoffset:var(--offset, 86.12)}@media (any-hover: hover){:host(:hover) .checkbox-button{--sharp:var(--border-width);--backdrop:var(--border-color-hover)}}:host(:focus) .checkbox-button,:host(.state-focused) .checkbox-button{--sharp:var(--border-width);--backdrop:var(--border-color-focus)}:host(.state-checked) .checkbox-button{--sharp:var(--border-width);--backdrop:var(--border-color-selected);--array:16.1 86.12;--offset:102.22;-webkit-transition:stroke-dasharray 0.5s, stroke-dashoffset 0.5s, -webkit-box-shadow 0.2s 0.3s;transition:stroke-dasharray 0.5s, stroke-dashoffset 0.5s, -webkit-box-shadow 0.2s 0.3s;transition:stroke-dasharray 0.5s, stroke-dashoffset 0.5s, box-shadow 0.2s 0.3s;transition:stroke-dasharray 0.5s, stroke-dashoffset 0.5s, box-shadow 0.2s 0.3s, -webkit-box-shadow 0.2s 0.3s}:host(.state-disabled){pointer-events:none;opacity:0.3}:host(.in-item){margin-left:0;margin-right:8px;margin-top:10px;margin-bottom:9px;display:block;position:static}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host(.in-item){margin-left:unset;margin-right:unset;-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:8px;margin-inline-end:8px}}:host(.in-item[slot=start]){margin-left:2px;margin-right:var(--bkkr-spacer, 16px);margin-top:8px;margin-bottom:8px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host(.in-item[slot=start]){margin-left:unset;margin-right:unset;-webkit-margin-start:2px;margin-inline-start:2px;-webkit-margin-end:var(--bkkr-spacer, 16px);margin-inline-end:var(--bkkr-spacer, 16px)}}";export{d as bkkr_checkbox}