import{r as t,f as a,h as i,H as r}from"./p-e501253c.js";import{m as n,B as d}from"./p-991cbfe5.js";import{s as e}from"./p-c50c697b.js";const s=["","xs","sm","md","lg","xl","xxl"],o=class{constructor(a){t(this,a)}onResize(){a(this)}getSize(){let t;for(const a of s)n(a)&&"xs"!==a&&(t=d[a]);return t?{"--max-width":`${t}`}:null}render(){const{color:t,fluid:a}=this;return i(r,{class:e(t),style:!a&&Object.assign({},this.getSize())},i("slot",null))}};o.style=":host{--padding-top:0;--padding-end:calc(var(--safe-area-right) + var(--bkkr-spacer, 16px));--padding-bottom:0;--padding-start:calc(var(--safe-area-left) + var(--bkkr-spacer, 16px));padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);-webkit-transition:background-color 0.4s cubic-bezier(0.32, 0.72, 0, 1);transition:background-color 0.4s cubic-bezier(0.32, 0.72, 0, 1);display:-ms-flexbox;display:flex;position:relative;-ms-flex-direction:column;flex-direction:column;width:100%;max-width:var(--max-width);margin:0 auto}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}@media (prefers-reduced-motion: reduce){:host{-webkit-transition:none;transition:none}}";export{o as bkkr_container}