import{r as t,e as i,c as n,i as s,h as e,H as a,g as r}from"./p-8dbe4215.js";import{o as l}from"./p-5527b9e6.js";import{s as o}from"./p-70b25770.js";const h=class{constructor(n){t(this,n),this.bkkrPaginator=i(this,"bkkrPaginator",7),this.thrPx=0,this.thrPc=0,this.didFire=!1,this.isBusy=!1,this.isLoading=!1,this.threshold="15%",this.page=1,this.infinite=!1,this.toolbar=!0,this.position="bottom",this.loadingSpinner="crescent",this.disabled=!1,this.routerDirection="forward",this.onScroll=()=>{const t=this.scrollEl;if(!t||!this.canStart())return 1;const i=this.el.offsetHeight;if(console.log(this.el.offsetHeight),0===i)return 2;const n=t.scrollTop,s=t.offsetHeight,e=0!==this.thrPc?s*this.thrPc:this.thrPx;if(("bottom"===this.position?t.scrollHeight-i-n-e-s:n-i-e)<0){if(!this.didFire)return this.isLoading=!0,this.didFire=!0,this.page+=1,this.bkkrPaginator.emit(),3}else this.didFire=!1;return 4},this.handleClick=(t,i)=>{this.changeIndex(i),null!==this.href&&l(this.href+i,t,this.routerDirection)}}thresholdChanged(){const t=this.threshold;t.lastIndexOf("%")>-1?(this.thrPx=0,this.thrPc=parseFloat(t)/100):(this.thrPx=parseFloat(t),this.thrPc=0)}infiniteChanged(){const t=this.infinite&&!this.disabled;t||(this.isLoading=!1,this.isBusy=!1),this.enableScrollEvents(t)}disabledChanged(){this.disabled&&(this.isLoading=!1,this.isBusy=!1,this.infinite=!1)}async connectedCallback(){const t=this.el.closest("bkkr-content");t?(this.scrollEl=await t.getScrollElement(),"top"===this.position&&n((()=>{this.scrollEl&&(this.scrollEl.scrollTop=this.scrollEl.scrollHeight-this.scrollEl.clientHeight)}))):console.error("<bkkr-paginator> must be used inside an <bkkr-content>")}disconnectedCallback(){this.enableScrollEvents(!1),this.scrollEl=void 0}changeIndex(t){this.isLoading||(this.isLoading=!0,this.page=t,this.bkkrPaginator.emit())}async complete(){const t=this.scrollEl;if(this.isLoading&&t&&(this.isLoading=!1,"top"===this.position)){this.isBusy=!0;const i=t.scrollHeight-t.scrollTop;requestAnimationFrame((()=>{s((()=>{const s=t.scrollHeight-i;requestAnimationFrame((()=>{n((()=>{t.scrollTop=s,this.isBusy=!1}))}))}))}))}}canStart(){return!(this.disabled||this.isBusy||!this.scrollEl||this.isLoading||!this.infinite)}enableScrollEvents(t){this.scrollEl&&(t?this.scrollEl.addEventListener("scroll",this.onScroll):this.scrollEl.removeEventListener("scroll",this.onScroll))}render(){const{disabled:t,infinite:i,items:n,href:s,lenght:r,page:l,isLoading:h,loadingSpinner:g,loadingText:d,toolbar:p,handleClick:b}=this,k=i?1:l*r-(r-1),m=Math.min(l*r,n),u=Math.floor(n/r),f=k>1,x=m<n,C=[];let w=!1;for(let t=1;t<=u;t++)1===t||t===u||t>=l-1&&t<l+2?(C.push({index:t,label:t,selected:t===l||null}),w=!1):!w&&t>1&&(t>=l-1||t<l+2)&&(C.push({index:null,label:"..."}),w=!0);return e(a,{class:{"paginator-loading":h,"paginator-enabled":!t,"paginator-infinite":i}},e("div",{class:"paginator-loading-content"},g&&e("div",{class:"paginator-loading-spinner"},e("bkkr-spinner",{type:g})),d&&e("div",{class:"paginator-loading-text",innerHTML:o(d)})),p&&!i&&e("bkkr-row",{class:"paginator-toolbar align-items-center"},e("bkkr-col",null,e("small",null,k," - ",m," of ",n)),e("bkkr-col",{size:"12","size-lg":"auto",class:"text-center"},e("bkkr-button",{fill:"clear",href:null!==s?s+(l-1):null,disabled:!f,onClick:t=>this.handleClick(t,l-1)},e("bkkr-icon",{name:"chevron-left"})),C.map((t=>c(t,{href:s,handleClick:b}))),e("bkkr-button",{fill:"clear",href:null!==s?s+(l+1):null,disabled:!x,onClick:t=>this.handleClick(t,l+1)},e("bkkr-icon",{name:"chevron-right"})))))}get el(){return r(this)}static get watchers(){return{threshold:["thresholdChanged"],infinite:["infiniteChanged"],disabled:["disabledChanged"]}}},c=(t,{href:i,handleClick:n})=>e("bkkr-button",{href:i&&t.index?i+t.index:null,onClick:i=>n(i,t.index),fill:t.selected?"solid":"clear",disabled:null!==t.index},e("bkkr-label",null,t.label));h.style=".paginator-enabled{display:block}.paginator-infinite.paginator-enabled{min-height:84px}.paginator-loading-content{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;display:none;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;width:100%;min-height:84px;text-align:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.paginator-loading-text{margin-left:32px;margin-right:32px;margin-top:4px;margin-bottom:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.paginator-loading-text{margin-left:unset;margin-right:unset;-webkit-margin-start:32px;margin-inline-start:32px;-webkit-margin-end:32px;margin-inline-end:32px}}.paginator-loading>.paginator-loading-content{display:-ms-flexbox;display:flex}.paginator-toolbar{padding-top:var(--bkkr-spacer)}";export{h as bkkr_paginator}