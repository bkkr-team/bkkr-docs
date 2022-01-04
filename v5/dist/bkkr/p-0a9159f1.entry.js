/*!
 * (C) BKKR Framework https://bkkr-team.github.io/bkkr-docs/ - MIT License
 */
import{r as i,c as t,f as n,a as r,e as a,h as e,H as s,g as o}from"./p-fef964f0.js";import{b as l}from"./p-e7c3cb65.js";import{c as d}from"./p-bf8dbf30.js";import{s as g}from"./p-464a016b.js";let p=class{constructor(n){i(this,n),this.bkkrInfinite=t(this,"bkkrInfinite",7),this.bkkrPageSizeChanged=t(this,"bkkrPageSizeChanged",7),this.thrPx=0,this.thrPc=0,this.didFire=!1,this.isBusy=!1,this.isLoading=!1,this.reset=!1,this.animated=!0,this.threshold="15%",this.items=0,this.length=0,this.page=1,this.infinite=!1,this.position="bottom",this.buttonText="Show more",this.disabled=!1,this.onScroll=()=>{const i=this.scrollEl;if(!i||!this.canStart())return 1;const t=i.scrollTop,n=i.offsetHeight,r=0!==this.thrPc?n*this.thrPc:this.thrPx;if(("bottom"===this.position?i.scrollHeight-t-r-n:t-r)<0){if(!this.didFire)return this.isLoading=!0,this.didFire=!0,this.page+=1,this.bkkrInfinite.emit(),3}else this.didFire=!1;return 4},this.handleClick=(i,t)=>{i.preventDefault(),this.changeIndex(t)}}thresholdChanged(){const i=this.threshold;i.lastIndexOf("%")>-1?(this.thrPx=0,this.thrPc=parseFloat(i)/100):(this.thrPx=parseFloat(i),this.thrPc=0)}itemsChanged(){n(this)}pageChanged(){n(this)}infiniteChanged(){this.infinite&&!this.disabled||(this.isLoading=!1,this.isBusy=!1),this.enableScrollEvents(this.infinite)}disabledChanged(){this.disabled&&(this.isLoading=!1,this.isBusy=!1)}async connectedCallback(){const i=this.el.closest("bkkr-content");i?(await new Promise((t=>d(i,t))),this.scrollEl=await i.getScrollElement(),this.thresholdChanged(),this.infiniteChanged(),this.disabledChanged(),"top"===this.position&&r((()=>{this.scrollEl&&(this.scrollEl.scrollTop=this.scrollEl.scrollHeight-this.scrollEl.clientHeight)}))):console.error("<bkkr-infinite-scroll> must be used inside an <bkkr-content>")}componentWillLoad(){void 0===this.spinner&&(this.spinner=l.get("infiniteSpinner","crescent"))}disconnectedCallback(){this.enableScrollEvents(!1),this.scrollEl=void 0}changeIndex(i){this.isLoading||(this.isLoading=!0,this.page=i,this.bkkrInfinite.emit())}async complete(){const i=this.scrollEl;if(this.isLoading&&i&&(this.isLoading=!1,"top"===this.position)){this.isBusy=!0;const t=i.scrollHeight-i.scrollTop;requestAnimationFrame((()=>{a((()=>{const n=i.scrollHeight-t;requestAnimationFrame((()=>{r((()=>{i.scrollTop=n,this.isBusy=!1}))}))}))}))}}canStart(){return!(this.disabled||this.isBusy||!this.scrollEl||this.isLoading||!this.infinite)}enableScrollEvents(i){this.scrollEl&&(i?this.scrollEl.addEventListener("scroll",this.onScroll):this.scrollEl.removeEventListener("scroll",this.onScroll))}render(){const{animated:i,disabled:t,infinite:n,items:r,length:a,page:o,isLoading:l,spinner:d,loadingText:p,buttonText:h}=this,m=i?void 0:0,c=Math.min(o*a,r),b=c<r;return e(s,{class:{"infinite-scroll":!0,"infinite-scroll-loading":l,"infinite-scroll-enabled":!t,"infinite-scroll-infinite":n}},e("div",{class:"infinite-scroll-content"},e("div",{class:"infinite-scroll-content-inner"},e("slot",null)),!n&&e("nav",{class:"infinite-scroll-bottom"},e("div",{class:"infinite-scroll-count"},e("small",null,c," / ",r)),e("bkkr-progress-bar",{value:c/r}),b&&e("bkkr-button",{color:"primary",disabled:t,onClick:i=>this.handleClick(i,o+1)},h))),e("div",{class:"infinite-scroll-loading-content"},d&&e("div",{class:"infinite-scroll-loading-spinner"},e("bkkr-spinner",{type:d,duration:m,paused:!l})),p&&e("div",{class:"infinite-scroll-loading-text",innerHTML:g(p)})))}get el(){return o(this)}static get watchers(){return{threshold:["thresholdChanged"],length:["itemsChanged"],page:["pageChanged"],infinite:["infiniteChanged"],disabled:["disabledChanged"]}}};p.style=".infinite-scroll{--padding-top:0;--padding-start:0;--padding-end:0;--padding-bottom:0;--toolbar-padding-top:calc(var(--bkkr-spacer, 16px) * 2);--toolbar-padding-start:0;--toolbar-padding-end:0;--toolbar-padding-bottom:var(--bkkr-spacer, 16px);--toolbar-max-width:12.5rem}.infinite-scroll-enabled{display:block}.infinite-scroll-infinite.infinite-scroll-enabled{min-height:84px}.infinite-scroll-content{padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);display:-ms-flexbox;display:flex;position:relative;-ms-flex-direction:column;flex-direction:column}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.infinite-scroll-content{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.infinite-scroll-loading-content{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;display:none;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;width:100%;min-height:84px;text-align:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.infinite-scroll-loading-text{margin-left:32px;margin-right:32px;margin-top:4px;margin-bottom:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.infinite-scroll-loading-text{margin-left:unset;margin-right:unset;-webkit-margin-start:32px;margin-inline-start:32px;-webkit-margin-end:32px;margin-inline-end:32px}}.infinite-scroll-loading>.infinite-scroll-loading-content{display:-ms-flexbox;display:flex}.infinite-scroll-loading:not(.infinite-scroll-infinite) .infinite-scroll-bottom bkkr-button{display:none}.infinite-scroll-bottom{margin-left:0;margin-right:-0.9em;margin-top:0;margin-bottom:0;padding-left:var(--toolbar-padding-start);padding-right:var(--toolbar-padding-end);padding-top:var(--toolbar-padding-top);padding-bottom:var(--toolbar-padding-bottom);display:block;text-align:center}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.infinite-scroll-bottom{margin-left:unset;margin-right:unset;-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:-0.9em;margin-inline-end:-0.9em}}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.infinite-scroll-bottom{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--toolbar-padding-start);padding-inline-start:var(--toolbar-padding-start);-webkit-padding-end:var(--toolbar-padding-end);padding-inline-end:var(--toolbar-padding-end)}}.infinite-scroll-bottom .infinite-scroll-count{margin-bottom:var(--bkkr-spacer, 16px);padding-right:var(--bkkr-spacer, 16px);position:relative}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.infinite-scroll-bottom .infinite-scroll-count{padding-right:unset;-webkit-padding-end:var(--bkkr-spacer, 16px);padding-inline-end:var(--bkkr-spacer, 16px)}}.infinite-scroll-bottom bkkr-button,.infinite-scroll-bottom bkkr-progress-bar{width:100%;max-width:var(--toolbar-max-width)}.infinite-scroll-bottom bkkr-progress-bar{margin-left:auto;margin-right:auto}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.infinite-scroll-bottom bkkr-progress-bar{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}.infinite-scroll-bottom bkkr-button{margin-left:auto;margin-right:auto;margin-top:calc(var(--bkkr-spacer, 16px) * 2)}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.infinite-scroll-bottom bkkr-button{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}";export{p as bkkr_infinite_scroll}