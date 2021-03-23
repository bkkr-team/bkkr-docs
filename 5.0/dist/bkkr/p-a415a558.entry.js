import{r as o,c as n,h as t,H as r,g as s}from"./p-06605c80.js";const i=class{constructor(t){o(this,t),this.bkkrChange=n(this,"bkkrChange",7),this.disabled=!1,this.readonly=!1,this.expand="accordion"}valueChanged(){const{value:o,multiple:n}=this;!n&&Array.isArray(o)?this.value=o[0]:this.bkkrChange.emit({value:this.value})}async disabledChanged(){const{disabled:o}=this,n=await this.getAccordions();for(const t of n)t.disabled=o}async readonlyChanged(){const{readonly:o}=this,n=await this.getAccordions();for(const t of n)t.readonly=o}async onKeydown(o){const n=document.activeElement;if(!n)return;const t="BKKR-ACCORDION"===n.tagName?n:n.closest("bkkr-accordion");if(!t)return;if(t.closest("bkkr-accordion-group")!==this.el)return;const r=await this.getAccordions(),s=r.findIndex((o=>o===t));if(-1===s)return;let i;"ArrowDown"===o.key?i=this.findNextAccordion(r,s):"ArrowUp"===o.key?i=this.findPreviousAccordion(r,s):"Home"===o.key?i=r[0]:"End"===o.key&&(i=r[r.length-1]),void 0!==i&&i!==n&&i.focus()}async componentDidLoad(){this.disabled&&this.disabledChanged(),this.readonly&&this.readonlyChanged()}async requestAccordionToggle(o,n){const{multiple:t,value:r,readonly:s,disabled:i}=this;if(!s&&!i)if(n)if(t){const n=r||[];void 0===n.find((n=>n===o))&&void 0!==o&&(this.value=[...n,o])}else this.value=o;else this.value=t?(r||[]).filter((n=>n!==o)):void 0}findNextAccordion(o,n){const t=o[n+1];return void 0===t?o[0]:t}findPreviousAccordion(o,n){const t=o[n-1];return void 0===t?o[o.length-1]:t}async getAccordions(){return Array.from(this.el.querySelectorAll("bkkr-accordion"))}render(){const{disabled:o,readonly:n,expand:s}=this;return t(r,{class:{"accordion-group-disabled":o,"accordion-group-readonly":n,[`accordion-group-expand-${s}`]:!0},role:"presentation"},t("slot",null))}get el(){return s(this)}static get watchers(){return{value:["valueChanged"],disabled:["disabledChanged"],readonly:["readonlyChanged"]}}};i.style=":host{display:block}:host(.accordion-group-expand-inset) ::slotted(bkkr-accordion.accordion-expanding),:host(.accordion-group-expand-inset) ::slotted(bkkr-accordion.accordion-expanded){border-bottom:none}";export{i as bkkr_accordion_group}