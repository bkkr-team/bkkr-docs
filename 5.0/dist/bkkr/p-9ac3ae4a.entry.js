import{r as t,h as i,H as o,g as e}from"./p-856de026.js";import{r as n,a as s,b as r,g as a,t as h}from"./p-c2089e63.js";var c;!function(t){t[t.Collapsed=1]="Collapsed",t[t.Collapsing=2]="Collapsing",t[t.Expanded=4]="Expanded",t[t.Expanding=8]="Expanding"}(c||(c={}));const d=class{constructor(i){t(this,i),this.updateListener=()=>this.updateState(!1),this.state=c.Collapsed,this.isNext=!1,this.isPrevious=!1,this.disabled=!1,this.readonly=!1,this.toggleIcon="chevron-down",this.toggleIconSlot="end",this.getSlottedHeaderBkkrItem=()=>{const{headerEl:t}=this;if(!t)return;const i=t.querySelector("slot");return i?i.assignedElements&&i.assignedElements().find((t=>"BKKR-ITEM"===t.tagName)):void 0},this.setAria=(t=!1)=>{const i=this.getSlottedHeaderBkkrItem();if(!i)return;const o=a(i).querySelector("button");o&&o.setAttribute("aria-expanded",`${t}`)},this.slotToggleIcon=()=>{const t=this.getSlottedHeaderBkkrItem();if(!t)return;const{toggleIconSlot:i,toggleIcon:o}=this;if(t.button=!0,t.detail=!1,t.querySelector(".bkkr-accordion-toggle-icon"))return;const e=document.createElement("bkkr-icon");e.slot=i,e.lazy=!1,e.classList.add("bkkr-accordion-toggle-icon"),e.icon=o,e.ariaHidden="true",t.appendChild(e)},this.expandAccordion=(t=!1)=>{if(t)return void(this.state=c.Expanded);if(this.state===c.Expanded)return;const{contentEl:i,contentElWrapper:o}=this;void 0!==i&&void 0!==o&&(void 0!==this.currentRaf&&cancelAnimationFrame(this.currentRaf),this.shouldAnimate()?(this.state=c.Expanding,this.currentRaf=n((async()=>{const t=o.offsetHeight,e=h(i,2e3);i.style.setProperty("max-height",`${t}px`),await this.delay(100),await e,this.state=c.Expanded,i.style.removeProperty("max-height")}))):this.state=c.Expanded)},this.collapseAccordion=(t=!1)=>{if(t)return void(this.state=c.Collapsed);if(this.state===c.Collapsed)return;const{contentEl:i}=this;void 0!==i&&(void 0!==this.currentRaf&&cancelAnimationFrame(this.currentRaf),this.shouldAnimate()?this.currentRaf=n((async()=>{i.style.setProperty("max-height",`${i.offsetHeight}px`),await this.delay(100);const t=h(i,2e3);this.state=c.Collapsing,await t,this.state=c.Collapsed,i.style.removeProperty("max-height")})):this.state=c.Collapsed)},this.shouldAnimate=()=>"undefined"!=typeof window&&!matchMedia("(prefers-reduced-motion: reduce)").matches,this.updateState=async(t=!1)=>{const i=this.accordionGroupEl,o=this.value;if(void 0===o||!i)return;const e=i.value;if(Array.isArray(e)?e.includes(o):e===o)this.expandAccordion(t),this.isNext=this.isPrevious=!1;else{this.collapseAccordion(t);const i=this.getNextSibling(),o=i&&i.value;void 0!==o&&(this.isPrevious=Array.isArray(e)?e.includes(o):e===o);const n=this.getPreviousSibling(),s=n&&n.value;void 0!==s&&(this.isNext=Array.isArray(e)?e.includes(s):e===s)}},this.getNextSibling=()=>{if(!this.el)return;const t=this.el.nextElementSibling;return"BKKR-ACCORDION"===(null==t?void 0:t.tagName)?t:void 0},this.getPreviousSibling=()=>{if(!this.el)return;const t=this.el.previousElementSibling;return"BKKR-ACCORDION"===(null==t?void 0:t.tagName)?t:void 0}}connectedCallback(){const t=this.accordionGroupEl=this.el&&this.el.closest("bkkr-accordion-group");t&&(this.updateState(!0),s(t,"bkkrChange",this.updateListener))}disconnectedCallback(){const t=this.accordionGroupEl;t&&r(t,"bkkrChange",this.updateListener)}componentDidLoad(){this.slotToggleIcon(),n((()=>{this.setAria(this.state===c.Expanded||this.state===c.Expanding)}))}delay(t){return new Promise((i=>setTimeout(i,t)))}toggleExpanded(){const{accordionGroupEl:t,value:i,state:o}=this;t&&t.requestAccordionToggle(i,o===c.Collapsed||o===c.Collapsing)}render(){const{disabled:t,readonly:e}=this,n=this.state===c.Expanded||this.state===c.Expanding,s=n?"header expanded":"header",r=n?"content expanded":"content";return this.setAria(n),i(o,{class:{"accordion-expanding":this.state===c.Expanding,"accordion-expanded":this.state===c.Expanded,"accordion-collapsing":this.state===c.Collapsing,"accordion-collapsed":this.state===c.Collapsed,"accordion-next":this.isNext,"accordion-previous":this.isPrevious,"accordion-disabled":t,"accordion-readonly":e}},i("div",{onClick:()=>this.toggleExpanded(),id:"header",part:s,"aria-controls":"content",ref:t=>this.headerEl=t},i("slot",{name:"header"})),i("div",{id:"content",part:r,role:"region","aria-labelledby":"header",ref:t=>this.contentEl=t},i("div",{id:"content-wrapper",ref:t=>this.contentElWrapper=t},i("slot",{name:"content"}))))}static get delegatesFocus(){return!0}get el(){return e(this)}};d.style=":host{display:block;position:relative;width:100%;-webkit-transition:all 300ms cubic-bezier(0.25, 0.8, 0.5, 1);transition:all 300ms cubic-bezier(0.25, 0.8, 0.5, 1);background-color:var(--bkkr-background-color, #ffffff);overflow:hidden;z-index:0}:host ::slotted(bkkr-item[slot=header]){--padding-start:var(--bkkr-spacer, 16px)}#content{-webkit-transition:max-height 300ms cubic-bezier(0.25, 0.8, 0.5, 1);transition:max-height 300ms cubic-bezier(0.25, 0.8, 0.5, 1);overflow:hidden;will-change:max-height}:host(.accordion-expanding) ::slotted(bkkr-item[slot=header]),:host(.accordion-expanded) ::slotted(bkkr-item[slot=header]){--border-width:0px}:host(.accordion-collapsing) #content{max-height:0 !important}:host(.accordion-collapsed) #content{display:none}:host(.accordion-expanding) #content{max-height:0}:host(.accordion-disabled) #header,:host(.accordion-readonly) #header{pointer-events:none}:host(.accordion-next) ::slotted(bkkr-item[slot=header]){--border-width:0.55px 0px 0.55px 0px}:host(.accordion-disabled) #header,:host(.accordion-disabled) #content{opacity:0.4}@media (prefers-reduced-motion: reduce){:host,#content{-webkit-transition:none !important;transition:none !important}}";export{d as bkkr_accordion}