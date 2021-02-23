import{r as t,e as i,f as a,c as n,i as e,h as r,H as s,g as o}from"./p-8dbe4215.js";import{s as l}from"./p-70b25770.js";const d=class{constructor(a){t(this,a),this.bkkrPaginator=i(this,"bkkrPaginator",7),this.bkkrPageSizeChanged=i(this,"bkkrPageSizeChanged",7),this.thrPx=0,this.thrPc=0,this.didFire=!1,this.isBusy=!1,this.isLoading=!1,this.threshold="15%",this.page=1,this.infinite=!1,this.toolbar=!0,this.position="bottom",this.arrowIcon="chevron",this.statusText="/",this.loadingType="ambient",this.loadingSpinner="crescent",this.disabled=!1,this.routerDirection="forward",this.onScroll=()=>{const t=this.scrollEl;if(!t||!this.canStart())return 1;const i=t.scrollTop,a=t.offsetHeight,n=0!==this.thrPc?a*this.thrPc:this.thrPx;if(("bottom"===this.position?t.scrollHeight-i-n-a:i-n)<0){if(!this.didFire)return this.isLoading=!0,this.didFire=!0,this.page+=1,this.bkkrPaginator.emit(),3}else this.didFire=!1;return 4},this.handleClick=(t,i)=>{t.preventDefault(),this.changeIndex(i)},this.handleLenghtChange=t=>{this.lenght=t.detail.value,this.page*this.lenght>this.items&&(this.page=Math.ceil(this.items/this.lenght)),this.bkkrPageSizeChanged.emit()}}thresholdChanged(){const t=this.threshold;t.lastIndexOf("%")>-1?(this.thrPx=0,this.thrPc=parseFloat(t)/100):(this.thrPx=parseFloat(t),this.thrPc=0)}itemsChanged(){a(this)}pageChanged(){a(this)}infiniteChanged(){const t=this.infinite&&!this.disabled;t||(this.isLoading=!1,this.isBusy=!1),this.enableScrollEvents(t)}disabledChanged(){this.disabled&&(this.isLoading=!1,this.isBusy=!1,this.infinite=!1)}async connectedCallback(){const t=this.el.closest("bkkr-content");t?(this.scrollEl=await t.getScrollElement(),this.thresholdChanged(),this.infiniteChanged(),this.disabledChanged(),"top"===this.position&&n((()=>{this.scrollEl&&(this.scrollEl.scrollTop=this.scrollEl.scrollHeight-this.scrollEl.clientHeight)}))):console.error("<bkkr-paginator> must be used inside an <bkkr-content>")}onResize(){a(this)}disconnectedCallback(){this.enableScrollEvents(!1),this.scrollEl=void 0}changeIndex(t){this.isLoading||(this.isLoading=!0,this.page=t,this.bkkrPaginator.emit())}async complete(){const t=this.scrollEl;if(this.isLoading&&t&&(this.isLoading=!1,"top"===this.position)){this.isBusy=!0;const i=t.scrollHeight-t.scrollTop;requestAnimationFrame((()=>{e((()=>{const a=t.scrollHeight-i;requestAnimationFrame((()=>{n((()=>{t.scrollTop=a,this.isBusy=!1}))}))}))}))}}canStart(){return!(this.disabled||this.isBusy||!this.scrollEl||this.isLoading||!this.infinite)}enableScrollEvents(t){this.scrollEl&&(t?this.scrollEl.addEventListener("scroll",this.onScroll):this.scrollEl.removeEventListener("scroll",this.onScroll))}render(){const{disabled:t,infinite:i,items:a,href:n,lenght:e,page:o,isLoading:d,loadingType:p,loadingSpinner:h,loadingText:c,toolbar:b,arrowIcon:m,statusText:k,handleClick:f}=this,u=window.innerWidth<768,w=i?1:o*e-(e-1),x=Math.min(o*e,a),v=Math.ceil(a/e),y=w>1,C=x<a,z=[];let j=!1;for(let t=1;t<=v;t++)1===t||t===v||t>=o-1&&t<o+2?(z.push({index:t,label:t,selected:t===o||null}),j=!1):!j&&t>1&&(t>=o-1||t<o+2)&&(z.push({index:null,label:"..."}),j=!0);return r(s,{class:{"paginator-loading":d,"paginator-enabled":!t,"paginator-infinite":i,["paginator-loading-"+p]:!0}},r("div",{class:"paginator-content"},r("slot",null)),"spinner"===p&&r("div",{class:"paginator-loading-content"},h&&r("div",{class:"paginator-loading-spinner"},r("bkkr-spinner",{type:h})),c&&r("div",{class:"paginator-loading-text",innerHTML:l(c)})),b&&!i&&r("nav",{class:"paginator-toolbar"},!u&&r("div",{class:"paginator-toolbar-fragment"},r("small",{class:"paginator-statustext"},w," - ",x," ",k," ",a),r("bkkr-select",{value:15,search:!1,interface:"popover",onBkkrChange:t=>this.handleLenghtChange(t)},r("bkkr-select-option",{value:15},"15"),r("bkkr-select-option",{value:30},"30"),r("bkkr-select-option",{value:50},"50"))),r("div",{class:"paginator-toolbar-fragment justify-content-center justify-content-md-end"},r("bkkr-button",{fill:"clear",color:"primary",href:void 0!==n?n+(o-1):null,disabled:!y,onClick:t=>this.handleClick(t,o-1)},r("bkkr-icon",{name:m+"-left"})),z.map((t=>g(t,{href:n,handleClick:f}))),r("bkkr-button",{fill:"clear",color:"primary",href:void 0!==n?n+(o+1):null,disabled:!C,onClick:t=>this.handleClick(t,o+1)},r("bkkr-icon",{name:m+"-right"})))))}get el(){return o(this)}static get watchers(){return{threshold:["thresholdChanged"],lenght:["itemsChanged"],page:["pageChanged"],infinite:["infiniteChanged"],disabled:["disabledChanged"]}}},g=(t,{href:i,handleClick:a})=>{if(!(window.innerWidth<768)||t.selected)return r("bkkr-button",{href:i&&t.index?i+t.index:null,onClick:i=>a(i,t.index),fill:t.selected?"solid":"clear",color:"primary",disabled:null===t.index},t.label)};d.style='.paginator-enabled{--padding-top:0;--padding-start:0;--padding-end:0;--padding-bottom:0;--toolbar-padding-top:var(--bkkr-spacer, 16px);--toolbar-padding-start:0;--toolbar-padding-end:0;--toolbar-padding-bottom:0;display:block}.paginator-infinite.paginator-enabled{min-height:84px}.paginator-content{padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.paginator-content{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.paginator-loading-ambient .paginator-content{--background:var(--color-base, var(--color-primary, #3880ff));--border-radius:0.75em;border-radius:var(--border-radius);position:relative;overflow:hidden}.paginator-loading-ambient .paginator-content::before{top:50%;left:50%;position:absolute;width:100vw;height:100vw;-webkit-transform:translate(0%, -50%) scale(0);transform:translate(0%, -50%) scale(0);-webkit-transform-origin:center;transform-origin:center;-webkit-transition:0.2s opacity cubic-bezier(0.32, 0.72, 0, 1);transition:0.2s opacity cubic-bezier(0.32, 0.72, 0, 1);background-color:var(--background);content:"";opacity:0;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:-2;-webkit-animation-name:shimmer;animation-name:shimmer;-webkit-animation-duration:5s;animation-duration:5s;-webkit-animation-timing-function:linear;animation-timing-function:linear;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;-webkit-animation-play-state:paused;animation-play-state:paused;pointer-events:none}.paginator-loading-ambient .paginator-content::after{border-radius:var(--border-radius);top:50%;left:50%;position:absolute;width:100%;height:100%;-webkit-transform:translate(-50%, -50%);transform:translate(-50%, -50%);-webkit-transition:0.2s width cubic-bezier(0.32, 0.72, 0, 1), 0.2s height cubic-bezier(0.32, 0.72, 0, 1);transition:0.2s width cubic-bezier(0.32, 0.72, 0, 1), 0.2s height cubic-bezier(0.32, 0.72, 0, 1);background:var(--bkkr-background-color, #fff);-webkit-filter:blur(10px);filter:blur(10px);content:"";-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:-1;pointer-events:none}@-webkit-keyframes shimmer{0%{-webkit-transform:translate(0%, -50%) scale(0);transform:translate(0%, -50%) scale(0)}50%{-webkit-transform:translate(50%, -50%) scale(1);transform:translate(50%, -50%) scale(1)}100%{-webkit-transform:translate(100%, -50%) scale(0);transform:translate(100%, -50%) scale(0)}}@keyframes shimmer{0%{-webkit-transform:translate(0%, -50%) scale(0);transform:translate(0%, -50%) scale(0)}50%{-webkit-transform:translate(50%, -50%) scale(1);transform:translate(50%, -50%) scale(1)}100%{-webkit-transform:translate(100%, -50%) scale(0);transform:translate(100%, -50%) scale(0)}}.paginator-loading-content{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;display:none;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;width:100%;min-height:84px;text-align:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.paginator-loading-text{margin-left:32px;margin-right:32px;margin-top:4px;margin-bottom:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.paginator-loading-text{margin-left:unset;margin-right:unset;-webkit-margin-start:32px;margin-inline-start:32px;-webkit-margin-end:32px;margin-inline-end:32px}}.paginator-loading>.paginator-content::before{opacity:1;-webkit-animation-play-state:running;animation-play-state:running}.paginator-loading>.paginator-content::after{width:calc(100% - 12px);height:calc(100% - 12px)}.paginator-loading>.paginator-loading-content{display:-ms-flexbox;display:flex}.paginator-toolbar{margin-left:0;margin-right:-0.9em;margin-top:0;margin-bottom:0;padding-left:var(--toolbar-padding-start);padding-right:var(--toolbar-padding-end);padding-top:var(--toolbar-padding-top);padding-bottom:var(--toolbar-padding-bottom);display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.paginator-toolbar{margin-left:unset;margin-right:unset;-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:-0.9em;margin-inline-end:-0.9em}}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.paginator-toolbar{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--toolbar-padding-start);padding-inline-start:var(--toolbar-padding-start);-webkit-padding-end:var(--toolbar-padding-end);padding-inline-end:var(--toolbar-padding-end)}}.paginator-toolbar bkkr-select{min-width:60px;font-size:0.875em}.paginator-toolbar-fragment{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;width:100%}.paginator-toolbar-fragment bkkr-button{min-width:2.8em}.paginator-toolbar-fragment .paginator-statustext{padding-right:var(--bkkr-spacer, 16px);position:relative}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.paginator-toolbar-fragment .paginator-statustext{padding-right:unset;-webkit-padding-end:var(--bkkr-spacer, 16px);padding-inline-end:var(--bkkr-spacer, 16px)}}.paginator-toolbar-fragment .paginator-statustext:after{top:0;right:0;position:absolute;width:0.55px;height:100%;background-color:var(--bkkr-border, rgba(var(--bkkr-text-color-rgb, 0, 0, 0), 0.1));content:""}';export{d as bkkr_paginator}