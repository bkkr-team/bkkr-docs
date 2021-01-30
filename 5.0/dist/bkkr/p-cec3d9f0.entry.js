import{r as t,e as i,c as s,i as n,h as e,H as a,g as r}from"./p-8dbe4215.js";import{s as o}from"./p-70b25770.js";const h=class{constructor(s){t(this,s),this.bkkrPaginator=i(this,"bkkrPaginator",7),this.thrPx=0,this.thrPc=0,this.didFire=!1,this.isBusy=!1,this.isLoading=!1,this.threshold="15%",this.pageSize=10,this.pageIndex=1,this.infinite=!0,this.toolbar=!0,this.position="bottom",this.loadingSpinner="lines",this.disabled=!1,this.onScroll=()=>{const t=this.scrollEl;if(!t||!this.canStart())return 1;const i=this.el.offsetHeight;if(0===i)return 2;const s=t.scrollTop,n=t.offsetHeight,e=0!==this.thrPc?n*this.thrPc:this.thrPx;if(("bottom"===this.position?t.scrollHeight-i-s-e-n:s-i-e)<0){if(!this.didFire)return this.isLoading=!0,this.didFire=!0,this.pageIndex+=1,this.bkkrPaginator.emit(),3}else this.didFire=!1;return 4}}thresholdChanged(){const t=this.threshold;t.lastIndexOf("%")>-1?(this.thrPx=0,this.thrPc=parseFloat(t)/100):(this.thrPx=parseFloat(t),this.thrPc=0)}disabledChanged(){const t=this.disabled,i=this.infinite;t&&(this.isLoading=!1,this.isBusy=!1),this.enableScrollEvents(!t&&i)}async connectedCallback(){const t=this.el.closest("bkkr-content");t?(this.scrollEl=await t.getScrollElement(),this.thresholdChanged(),this.disabledChanged(),"top"===this.position&&s((()=>{this.scrollEl&&(this.scrollEl.scrollTop=this.scrollEl.scrollHeight-this.scrollEl.clientHeight)}))):console.error("<bkkr-paginator> must be used inside an <bkkr-content>")}disconnectedCallback(){this.enableScrollEvents(!1),this.scrollEl=void 0}changeIndex(t){this.isLoading||(this.isLoading=!0,this.pageIndex=t,this.bkkrPaginator.emit())}async complete(){const t=this.scrollEl;if(this.isLoading&&t&&(this.isLoading=!1,"top"===this.position)){this.isBusy=!0;const i=t.scrollHeight-t.scrollTop;requestAnimationFrame((()=>{n((()=>{const n=t.scrollHeight-i;requestAnimationFrame((()=>{s((()=>{t.scrollTop=n,this.isBusy=!1}))}))}))}))}}canStart(){return!(this.disabled||this.isBusy||!this.scrollEl||this.isLoading||!this.infinite)}enableScrollEvents(t){this.scrollEl&&(t?this.scrollEl.addEventListener("scroll",this.onScroll):this.scrollEl.removeEventListener("scroll",this.onScroll))}render(){const{disabled:t,infinite:i,lenght:s,pageSize:n,pageIndex:r,isLoading:h,loadingSpinner:l,loadingText:c,toolbar:g}=this,d=i?1:r*n-(n-1),p=Math.min(r*n,s);return e(a,{class:{"paginator-loading":h,"paginator-enabled":!t}},e("div",{class:"paginator-loading-content"},l&&e("div",{class:"paginator-loading-spinner"},e("bkkr-spinner",{type:l})),c&&e("div",{class:"paginator-loading-text",innerHTML:o(c)})),g&&e("bkkr-toolbar",{class:"paginator-toolbar"},e("div",{slot:"start"},e("small",null,d," - ",p," of ",s)),e("div",{slot:"end"},e("bkkr-button",{disabled:r<=1,onClick:()=>this.changeIndex(r-1)},e("bkkr-icon",{name:"chevron-left"})),e("bkkr-button",{disabled:r*n>=s,onClick:()=>this.changeIndex(r+1)},e("bkkr-icon",{name:"chevron-right"})))))}get el(){return r(this)}static get watchers(){return{threshold:["thresholdChanged"],disabled:["disabledChanged"]}}};h.style=":host{display:none;width:100%}.paginator-enabled{display:block}.paginator-loading-content{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;display:none;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;width:100%;min-height:84px;text-align:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.paginator-loading-text{margin-left:32px;margin-right:32px;margin-top:4px;margin-bottom:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.paginator-loading-text{margin-left:unset;margin-right:unset;-webkit-margin-start:32px;margin-inline-start:32px;-webkit-margin-end:32px;margin-inline-end:32px}}.paginator-loading>.paginator-loading-content{display:-ms-flexbox;display:flex}";export{h as bkkr_paginator}