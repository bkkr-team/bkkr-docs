import{r as t,h as a,H as r,g as o}from"./p-8dfd188c.js";const e=class{constructor(a){t(this,a),this.edge=!1}render(){const{horizontal:t,vertical:o,edge:e}=this;return a(r,{class:{[`fab-horizontal-${t}`]:void 0!==t,[`fab-vertical-${o}`]:void 0!==o,"fab-edge":e}},a("slot",null))}get el(){return o(this)}};e.style=":host{position:absolute;outline:0;z-index:999}:host(.fab-horizontal-center){left:50%;margin-left:-28px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host(.fab-horizontal-center){margin-left:unset;-webkit-margin-start:-28px;margin-inline-start:-28px}}:host(.fab-horizontal-start){left:calc(var(--bkkr-spacer, 16px) + var(--safe-area-left, 0px))}:host(.fab-horizontal-end){right:calc(var(--bkkr-spacer, 16px) + var(--safe-area-right, 0px))}:host(.fab-vertical-top){top:var(--bkkr-spacer, 16px)}:host(.fab-vertical-top.fab-edge){top:-28px}:host(.fab-vertical-bottom){bottom:var(--bkkr-spacer, 16px)}:host(.fab-vertical-bottom.fab-edge){bottom:-28px}:host(.fab-vertical-center){margin-top:-28px;top:50%}";export{e as bkkr_fab}