import{r as a,f as t,h as i,H as r}from"./p-a3958a94.js";import{m as n,B as d}from"./p-ad294878.js";import{s}from"./p-b0f3bd3c.js";const e=["","xs","sm","md","lg","xl","xxl"],o=class{constructor(t){a(this,t)}onResize(){t(this)}getSize(){let a;if(!this.fluid)for(const t of e)n(t)&&"xs"!==t&&(a=d[t]);return a?{"--max-width":`${a}`}:null}render(){const{color:a}=this;return i(r,{class:s(a),style:Object.assign({},this.getSize())},i("slot",null))}};o.style=":host{--padding-top:0;--padding-end:calc(var(--safe-area-right) + var(--bkkr-spacer, 16px));--padding-bottom:0;--padding-start:calc(var(--safe-area-left) + var(--bkkr-spacer, 16px));padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);-webkit-transition:background-color 0.4s cubic-bezier(0.32, 0.72, 0, 1);transition:background-color 0.4s cubic-bezier(0.32, 0.72, 0, 1);display:-ms-flexbox;display:flex;position:relative;-ms-flex-direction:column;flex-direction:column;width:100%;max-width:var(--max-width);margin:0 auto}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}@media (prefers-reduced-motion: reduce){:host{-webkit-transition:none;transition:none}}";export{o as bkkr_container}