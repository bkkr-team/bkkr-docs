/*!
 * (C) BKKR Framework https://bkkr-team.github.io/bkkr-docs/ - MIT License
 */
import{r as t,c as s,h as o,H as i,g as a}from"./p-24bb0787.js";import{s as r,h as e}from"./p-18201c80.js";import{w as l}from"./p-6d7ab522.js";let n=class{constructor(o){t(this,o),this.bkkrCollapsedClick=s(this,"bkkrCollapsedClick",7),this.itemsBeforeCollapse=1,this.itemsAfterCollapse=1,this.breadcrumbsInit=()=>{this.setBreadcrumbSeparator(),this.setMaxItems()},this.resetActiveBreadcrumb=()=>{const t=this.getBreadcrumbs().find((t=>t.active));t&&this.activeChanged&&(t.active=!1)},this.setMaxItems=()=>{const{itemsAfterCollapse:t,itemsBeforeCollapse:s,maxItems:o}=this,i=this.getBreadcrumbs();for(const t of i)t.showCollapsedIndicator=!1,t.collapsed=!1;void 0!==o&&i.length>o&&s+t<=o&&i.forEach(((o,a)=>{a===s&&(o.showCollapsedIndicator=!0),a>=s&&a<i.length-t&&(o.collapsed=!0)}))},this.setBreadcrumbSeparator=()=>{const{itemsAfterCollapse:t,itemsBeforeCollapse:s,maxItems:o}=this,i=this.getBreadcrumbs(),a=i.find((t=>t.active));for(const r of i){const e=void 0!==o&&0===t?r===i[s]:r===i[i.length-1];r.last=e,r.separator=void 0!==r.separator?r.separator:!e||void 0,!a&&e&&(r.active=!0,this.activeChanged=!0)}},this.getBreadcrumbs=()=>Array.from(this.el.querySelectorAll("bkkr-breadcrumb"))}onCollapsedClick(t){const s=this.getBreadcrumbs().filter((t=>t.collapsed));this.bkkrCollapsedClick.emit(Object.assign(Object.assign({},t.detail),{collapsedBreadcrumbs:s}))}maxItemsChanged(){this.resetActiveBreadcrumb(),this.breadcrumbsInit()}componentWillLoad(){this.breadcrumbsInit(),this.mutationO=l(this.el,"bkkr-breadcrumb",(async()=>{this.resetActiveBreadcrumb(),this.breadcrumbsInit()}))}disconnectedCallback(){this.mutationO&&(this.mutationO.disconnect(),this.mutationO=void 0)}render(){const{color:t,collapsed:s}=this;return o(i,{class:r(t,{"in-toolbar":e("bkkr-toolbar",this.el),"in-toolbar-color":e("bkkr-toolbar[color]",this.el),"breadcrumbs-collapsed":s})},o("slot",null))}get el(){return a(this)}static get watchers(){return{maxItems:["maxItemsChanged"],itemsBeforeCollapse:["maxItemsChanged"],itemsAfterCollapse:["maxItemsChanged"]}}};n.style=":host{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-align:center;align-items:center}:host(.in-toolbar){padding-left:20px;padding-right:20px;padding-top:0;padding-bottom:0;-ms-flex-pack:center;justify-content:center}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host(.in-toolbar){padding-left:unset;padding-right:unset;-webkit-padding-start:20px;padding-inline-start:20px;-webkit-padding-end:20px;padding-inline-end:20px}}:host(.in-toolbar-color),:host(.in-toolbar-color) .breadcrumbs-collapsed-indicator bkkr-icon{color:var(--color-contrast)}:host(.in-toolbar-color) .breadcrumbs-collapsed-indicator{background:var(--color-contrast, 0.11)}";export{n as bkkr_breadcrumbs}