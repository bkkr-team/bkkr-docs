/*!
 * (C) BKKR Framework https://bkkr-team.github.io/bkkr-docs/ - MIT License
 */
import{r as o,c as t,h as r,H as s,g as n}from"./p-08349d90.js";let i=class{constructor(r){o(this,r),this.bkkrChange=t(this,"bkkrChange",7),this.animated=!0,this.disabled=!1,this.readonly=!1,this.expand="compact"}valueChanged(){const{value:o,multiple:t}=this;!t&&Array.isArray(o)?this.value=o[0]:this.bkkrChange.emit({value:this.value})}async disabledChanged(){const{disabled:o}=this,t=await this.getAccordions();for(const r of t)r.disabled=o}async readonlyChanged(){const{readonly:o}=this,t=await this.getAccordions();for(const r of t)r.readonly=o}async onKeydown(o){const t=document.activeElement;if(!t)return;const r="BKKR-ACCORDION"===t.tagName?t:t.closest("bkkr-accordion");if(!r)return;if(r.closest("bkkr-accordion-group")!==this.el)return;const s=await this.getAccordions(),n=s.findIndex((o=>o===r));if(-1===n)return;let i;"ArrowDown"===o.key?i=this.findNextAccordion(s,n):"ArrowUp"===o.key?i=this.findPreviousAccordion(s,n):"Home"===o.key?i=s[0]:"End"===o.key&&(i=s[s.length-1]),void 0!==i&&i!==t&&i.focus()}async componentDidLoad(){this.disabled&&this.disabledChanged(),this.readonly&&this.readonlyChanged()}async requestAccordionToggle(o,t){const{multiple:r,value:s,readonly:n,disabled:i}=this;if(!n&&!i)if(t)if(r){const t=s||[],r=Array.isArray(t)?t:[t];void 0===r.find((t=>t===o))&&void 0!==o&&(this.value=[...r,o])}else this.value=o;else if(r){const t=s||[],r=Array.isArray(t)?t:[t];this.value=r.filter((t=>t!==o))}else this.value=void 0}findNextAccordion(o,t){const r=o[t+1];return void 0===r?o[0]:r}findPreviousAccordion(o,t){const r=o[t-1];return void 0===r?o[o.length-1]:r}async getAccordions(){return Array.from(this.el.querySelectorAll("bkkr-accordion"))}render(){const{disabled:o,readonly:t,expand:n}=this;return r(s,{class:{"accordion-group-disabled":o,"accordion-group-readonly":t,[`accordion-group-expand-${n}`]:!0},role:"presentation"},r("slot",null))}get el(){return n(this)}static get watchers(){return{value:["valueChanged"],disabled:["disabledChanged"],readonly:["readonlyChanged"]}}};i.style=":host{display:block}:host(.accordion-group-expand-inset) ::slotted(bkkr-accordion.accordion-expanding),:host(.accordion-group-expand-inset) ::slotted(bkkr-accordion.accordion-expanded){border-bottom:none}";export{i as bkkr_accordion_group}