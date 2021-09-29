import{r as t,h as i,H as o,g as e}from"./p-a3958a94.js";import{c as n}from"./p-049a2213.js";import{r as s,a as r,b as a,g as c,t as h}from"./p-d56ecf06.js";var d;!function(t){t[t.Collapsed=1]="Collapsed",t[t.Collapsing=2]="Collapsing",t[t.Expanded=4]="Expanded",t[t.Expanding=8]="Expanding"}(d||(d={}));const l=class{constructor(i){t(this,i),this.updateListener=()=>this.updateState(!1),this.state=d.Collapsed,this.isNext=!1,this.isPrevious=!1,this.value="bkkr-accordion-"+p++,this.disabled=!1,this.readonly=!1,this.toggleIcon="chevron-down",this.toggleIconSlot="end",this.setItemDefaults=()=>{const t=this.getSlottedHeaderBkkrItem();t&&(t.button=!0,t.detail=!1,void 0===t.lines&&(t.lines="full"))},this.getSlottedHeaderBkkrItem=()=>{const{headerEl:t}=this;if(!t)return;const i=t.querySelector("slot");return i?i.assignedElements&&i.assignedElements().find((t=>"BKKR-ITEM"===t.tagName)):void 0},this.setAria=(t=!1)=>{const i=this.getSlottedHeaderBkkrItem();if(!i)return;const o=c(i).querySelector("button");o&&o.setAttribute("aria-expanded",`${t}`)},this.slotToggleIcon=()=>{const t=this.getSlottedHeaderBkkrItem();if(!t)return;const{toggleIconSlot:i,toggleIcon:o}=this;if(t.querySelector(".bkkr-accordion-toggle-icon"))return;const e=document.createElement("bkkr-icon");e.slot=i,e.lazy=!1,e.classList.add("bkkr-accordion-toggle-icon"),e.icon=o,e.ariaHidden="true",t.appendChild(e)},this.expandAccordion=(t=!1)=>{if(t)return void(this.state=d.Expanded);if(this.state===d.Expanded)return;const{contentEl:i,contentElWrapper:o}=this;void 0!==i&&void 0!==o&&(void 0!==this.currentRaf&&cancelAnimationFrame(this.currentRaf),this.shouldAnimate()?s((()=>{this.state=d.Expanding,this.currentRaf=s((async()=>{const t=o.offsetHeight,e=h(i,2e3);i.style.setProperty("max-height",`${t}px`),await e,this.state=d.Expanded,i.style.removeProperty("max-height")}))})):this.state=d.Expanded)},this.collapseAccordion=(t=!1)=>{if(t)return void(this.state=d.Collapsed);if(this.state===d.Collapsed)return;const{contentEl:i}=this;void 0!==i&&(void 0!==this.currentRaf&&cancelAnimationFrame(this.currentRaf),this.shouldAnimate()?this.currentRaf=s((async()=>{i.style.setProperty("max-height",`${i.offsetHeight}px`),s((async()=>{const t=h(i,2e3);this.state=d.Collapsing,await t,this.state=d.Collapsed,i.style.removeProperty("max-height")}))})):this.state=d.Collapsed)},this.shouldAnimate=()=>"undefined"!=typeof window&&(!matchMedia("(prefers-reduced-motion: reduce)").matches&&!(!n.get("animated",!0)||this.accordionGroupEl&&!this.accordionGroupEl.animated)),this.updateState=async(t=!1)=>{const i=this.accordionGroupEl,o=this.value;if(!i)return;const e=i.value;if(Array.isArray(e)?e.includes(o):e===o)this.expandAccordion(t),this.isNext=this.isPrevious=!1;else{this.collapseAccordion(t);const i=this.getNextSibling(),o=i&&i.value;void 0!==o&&(this.isPrevious=Array.isArray(e)?e.includes(o):e===o);const n=this.getPreviousSibling(),s=n&&n.value;void 0!==s&&(this.isNext=Array.isArray(e)?e.includes(s):e===s)}},this.getNextSibling=()=>{if(!this.el)return;const t=this.el.nextElementSibling;return"BKKR-ACCORDION"===(null==t?void 0:t.tagName)?t:void 0},this.getPreviousSibling=()=>{if(!this.el)return;const t=this.el.previousElementSibling;return"BKKR-ACCORDION"===(null==t?void 0:t.tagName)?t:void 0}}connectedCallback(){const t=this.accordionGroupEl=this.el&&this.el.closest("bkkr-accordion-group");t&&(this.updateState(!0),r(t,"bkkrChange",this.updateListener))}disconnectedCallback(){const t=this.accordionGroupEl;t&&a(t,"bkkrChange",this.updateListener)}componentDidLoad(){this.setItemDefaults(),this.slotToggleIcon(),s((()=>{this.setAria(this.state===d.Expanded||this.state===d.Expanding)}))}toggleExpanded(){const{accordionGroupEl:t,value:i,state:o}=this;t&&t.requestAccordionToggle(i,o===d.Collapsed||o===d.Collapsing)}render(){const{disabled:t,readonly:e}=this,s=this.state===d.Expanded||this.state===d.Expanding,r=s?"header expanded":"header",a=s?"content expanded":"content";return this.setAria(s),i(o,{class:{"accordion-expanding":this.state===d.Expanding,"accordion-expanded":this.state===d.Expanded,"accordion-collapsing":this.state===d.Collapsing,"accordion-collapsed":this.state===d.Collapsed,"accordion-next":this.isNext,"accordion-previous":this.isPrevious,"accordion-disabled":t,"accordion-readonly":e,"accordion-animated":n.getBoolean("animated",!0)}},i("div",{onClick:()=>this.toggleExpanded(),id:"header",part:r,"aria-controls":"content",ref:t=>this.headerEl=t},i("slot",{name:"header"})),i("div",{id:"content",part:a,role:"region","aria-labelledby":"header",ref:t=>this.contentEl=t},i("div",{id:"content-wrapper",ref:t=>this.contentElWrapper=t},i("slot",{name:"content"}))))}static get delegatesFocus(){return!0}get el(){return e(this)}};let p=0;l.style=":host{display:block;position:relative;width:100%;background-color:var(--bkkr-background-color, #ffffff);overflow:hidden;z-index:0}:host(.accordion-animated){-webkit-transition:all 300ms cubic-bezier(0.25, 0.8, 0.5, 1);transition:all 300ms cubic-bezier(0.25, 0.8, 0.5, 1)}:host(.accordion-animated) #content{-webkit-transition:max-height 300ms cubic-bezier(0.25, 0.8, 0.5, 1);transition:max-height 300ms cubic-bezier(0.25, 0.8, 0.5, 1)}:host ::slotted(bkkr-item[slot=header]){--padding-start:var(--bkkr-spacer, 16px)}#content{overflow:hidden;will-change:max-height}:host(.accordion-expanding) ::slotted(bkkr-item[slot=header]),:host(.accordion-expanded) ::slotted(bkkr-item[slot=header]){--border-width:0px}:host(.accordion-collapsing) #content{max-height:0 !important}:host(.accordion-collapsed) #content{display:none}:host(.accordion-expanding) #content{max-height:0}:host(.accordion-disabled) #header,:host(.accordion-readonly) #header{pointer-events:none}:host(.accordion-next) ::slotted(bkkr-item[slot=header]){--border-width:0.55px 0px 0.55px 0px}:host(.accordion-disabled) #header,:host(.accordion-disabled) #content{opacity:0.4}@media (prefers-reduced-motion: reduce){:host,#content{-webkit-transition:none !important;transition:none !important}}";export{l as bkkr_accordion}