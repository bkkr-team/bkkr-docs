/*!
 * (C) BKKR Framework https://bkkr-team.github.io/bkkr-docs/ - MIT License
 */
import{r as t,f as r,h as s,H as a}from"./p-fef964f0.js";import{m as i}from"./p-05d2cfb5.js";const e=["","xs","sm","md","lg","xl","xxl"];let n=class{constructor(r){t(this,r)}onResize(){r(this)}getColumns(t){let r;for(const s of e){const a=i(s),e=this[t+s.charAt(0).toUpperCase()+s.slice(1)];a&&void 0!==e&&(r=e)}return r}calculateSize(){const t=this.getColumns("size");if(t&&""!==t)return{"--grow":"0","--basis":""+("auto"===t?"auto":`calc((${t} / var(--columns, 12)) * 100%)`)}}setOrder(){return{order:`${this.getColumns("order")}`}}render(){return s(a,{style:Object.assign(Object.assign({},this.calculateSize()),this.setOrder())},s("slot",null))}};n.style=":host{--grow:1;--basis:0%;padding-left:var(--gutter-x);padding-right:var(--gutter-x);margin-left:var(--offset, 0);-ms-flex:var(--grow) 0 var(--basis);flex:var(--grow) 0 var(--basis);width:var(--basis, auto);min-width:0;max-width:100%}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--gutter-x);padding-inline-start:var(--gutter-x);-webkit-padding-end:var(--gutter-x);padding-inline-end:var(--gutter-x)}}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host{margin-left:unset;-webkit-margin-start:var(--offset, 0);margin-inline-start:var(--offset, 0)}}";export{n as bkkr_col}