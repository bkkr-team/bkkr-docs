import{r as t,c as s,h as i,g as r,H as e}from"./p-900e5a2b.js";const o=class{constructor(i){t(this,i),this.bkkrChange=s(this,"bkkrChange",7),this.inputId="bkkr-rg-"+h++,this.labelId=`${this.inputId}-lbl`,this.allowEmptySelection=!1,this.name=this.inputId,this.setRadioTabindex=t=>{const s=this.getRadios(),i=s.find((t=>!t.disabled)),r=s.find((s=>s.value===t&&!s.disabled));if(!i&&!r)return;const e=r||i;for(const t of s)t.setButtonTabindex(t===e?0:-1)},this.onClick=t=>{t.preventDefault();const s=t.target&&t.target.closest("bkkr-radio");if(s){const t=s.value;t!==this.value?this.value=t:this.allowEmptySelection&&(this.value=void 0)}}}valueChanged(t){this.setRadioTabindex(t),this.bkkrChange.emit({value:t})}componentDidLoad(){this.setRadioTabindex(this.value)}async connectedCallback(){const t=this.el.querySelector("bkkr-list-header")||this.el.querySelector("bkkr-item-divider");if(t){const s=this.label=t.querySelector("bkkr-label");s&&(this.labelId=s.id=this.name+"-lbl")}}getRadios(){return Array.from(this.el.querySelectorAll("bkkr-radio"))}onKeydown(t){const s=!!this.el.closest("bkkr-select-popover"),i=!!this.el.closest("bkkr-select-drawer");if(t.target&&!this.el.contains(t.target))return;const r=this.getRadios().filter((t=>!t.disabled));if(t.target&&r.includes(t.target)){const e=r.findIndex((s=>s===t.target)),o=r[e];let h;["ArrowDown","ArrowRight"].includes(t.code)&&(h=e===r.length-1?r[0]:r[e+1]),["ArrowUp","ArrowLeft"].includes(t.code)&&(h=0===e?r[r.length-1]:r[e-1]),h&&r.includes(h)&&(h.setFocus(t),s&&i||(this.value=h.value)),["Space"].includes(t.code)&&(this.value=this.allowEmptySelection&&void 0!==this.value?void 0:o.value,t.preventDefault())}}render(){const{label:t,labelId:s}=this;return i(e,{role:"radiogroup","aria-labelledby":t?s:null,onClick:this.onClick})}get el(){return r(this)}static get watchers(){return{value:["valueChanged"]}}};let h=0;export{o as bkkr_radio_group}