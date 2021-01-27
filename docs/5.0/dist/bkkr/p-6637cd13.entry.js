import{r as e,e as t,h as s,H as r,g as a}from"./p-ff07675f.js";import{s as i,h as o}from"./p-09b2e663.js";import{c as n,d as h}from"./p-812c3cb0.js";const c=class{constructor(s){e(this,s),this.bkkrChange=t(this,"bkkrChange",7),this.bkkrFocus=t(this,"bkkrFocus",7),this.bkkrBlur=t(this,"bkkrBlur",7),this.bkkrStyle=t(this,"bkkrStyle",7),this.inputId="bkkr-cb-"+d++,this.name=this.inputId,this.checked=!1,this.indeterminate=!1,this.disabled=!1,this.value="on",this.onClick=e=>{e.preventDefault(),this.setFocus(),this.checked=!this.checked,this.indeterminate=!1},this.onFocus=()=>{this.bkkrFocus.emit()},this.onBlur=()=>{this.bkkrBlur.emit()}}componentWillLoad(){this.emitStyle()}checkedChanged(e){this.bkkrChange.emit({checked:e,value:this.value}),this.emitStyle()}disabledChanged(){this.emitStyle()}emitStyle(){this.bkkrStyle.emit({"checkbox-checked":this.checked,"interactive-disabled":this.disabled})}setFocus(){this.focusEl&&this.focusEl.focus()}render(){const{color:e,checked:t,disabled:a,el:c,indeterminate:d,inputId:b,name:l,value:k}=this,{label:p,labelId:m,labelText:x}=n(c,b);h(!0,c,l,t?k:"",a);let g=s("path",d?{d:"M5 10.75L16 10.75",part:"mark"}:{d:"M5,10.75 L8.5,14.25 L19.4,2.3 C18.8333333,1.43333333 18.0333333,1 17,1 L4,1 C2.35,1 1,2.35 1,4 L1,17 C1,18.65 2.35,20 4,20 L17,20 C18.65,20 20,18.65 20,17 L20,7.99769186",part:"mark"});return s(r,{onClick:this.onClick,"aria-labelledby":p?m:null,"aria-checked":""+t,"aria-hidden":a?"true":null,role:"checkbox",class:i(e,{"in-item":o("bkkr-item",c),"checkbox-checked":t,"checkbox-disabled":a,"checkbox-indeterminate":d,interactive:!0})},s("svg",{class:"checkbox-button",viewBox:"0 0 21 21",part:"container"},g),s("label",{htmlFor:b},x),s("input",{type:"checkbox","aria-checked":""+t,disabled:a,id:b,onFocus:()=>this.onFocus(),onBlur:()=>this.onBlur(),ref:e=>this.focusEl=e}))}get el(){return a(this)}static get watchers(){return{checked:["checkedChanged"],disabled:["disabledChanged"]}}};let d=0;c.style=":host{--background:#fff;--border-color:#d1d6ee;--border-color-hover:#bbc1e1;--checkmark-color:var(--color-base, var(--color-primary, #3880ff));--checkmark-width:2px;display:inline-block;position:relative;width:24px;height:24px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:2}label{top:0;left:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;position:absolute;width:100%;height:100%;border:0;outline:none;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;opacity:0}label::-moz-focus-inner{border:0}input{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;margin:0;padding:0;border:0;outline:0;opacity:0;overflow:hidden;clip:rect(0 0 0 0);-webkit-appearance:none;-moz-appearance:none;appearance:none}.checkbox-button{border-radius:4px;display:block;width:24px;height:24px;-webkit-transform:scale(var(--scale, 1)) translateZ(0);transform:scale(var(--scale, 1)) translateZ(0);-webkit-transition:stroke-dasharray 0.6s, stroke-dashoffset 0.6s, -webkit-box-shadow 0.3s;transition:stroke-dasharray 0.6s, stroke-dashoffset 0.6s, -webkit-box-shadow 0.3s;transition:stroke-dasharray 0.6s, stroke-dashoffset 0.6s, box-shadow 0.3s;transition:stroke-dasharray 0.6s, stroke-dashoffset 0.6s, box-shadow 0.3s, -webkit-box-shadow 0.3s;-webkit-box-shadow:inset 0 0 0 var(--s, 1px) var(--b, var(--border-color));box-shadow:inset 0 0 0 var(--s, 1px) var(--b, var(--border-color));z-index:1;pointer-events:none;fill:none;stroke:var(--checkmark-color, var(--border-color));stroke-width:var(--checkmark-width);stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:var(--array, 86.12);stroke-dashoffset:var(--offset, 86.12)}@media (any-hover: hover){:host(:hover) .checkbox-button{--s:2px;--b:var(--border-color-hover)}}:host(.checkbox-checked) .checkbox-button{--s:2px;--b:var(--checkmark-color);--array:16.1 86.12;--offset:102.22;-webkit-transition:stroke-dasharray 0.5s, stroke-dashoffset 0.5s, -webkit-box-shadow 0.2s 0.3s;transition:stroke-dasharray 0.5s, stroke-dashoffset 0.5s, -webkit-box-shadow 0.2s 0.3s;transition:stroke-dasharray 0.5s, stroke-dashoffset 0.5s, box-shadow 0.2s 0.3s;transition:stroke-dasharray 0.5s, stroke-dashoffset 0.5s, box-shadow 0.2s 0.3s, -webkit-box-shadow 0.2s 0.3s}:host(.checkbox-disabled){pointer-events:none;opacity:0.3}:host(.in-item){margin-left:0;margin-right:8px;margin-top:10px;margin-bottom:9px;display:block;position:static}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host(.in-item){margin-left:unset;margin-right:unset;-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:8px;margin-inline-end:8px}}:host(.in-item[slot=start]){margin-left:2px;margin-right:var(--bkkr-spacer, 16px);margin-top:8px;margin-bottom:8px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host(.in-item[slot=start]){margin-left:unset;margin-right:unset;-webkit-margin-start:2px;margin-inline-start:2px;-webkit-margin-end:var(--bkkr-spacer, 16px);margin-inline-end:var(--bkkr-spacer, 16px)}}";export{c as bkkr_checkbox}