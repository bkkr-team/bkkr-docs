import{r as t,f as r,h as a,H as s}from"./p-8dfd188c.js";import{m as i}from"./p-991cbfe5.js";const e=["","xs","sm","md","lg","xl","xxl"],n=class{constructor(r){t(this,r)}onResize(){r(this)}getColumns(t){let r;for(const a of e){const s=i(a),e=this[t+a.charAt(0).toUpperCase()+a.slice(1)];s&&void 0!==e&&(r=e)}return r}calculateSize(){const t=this.getColumns("size");if(t&&""!==t)return{"--grow":"0","--basis":""+("auto"===t?"auto":`calc((${t} / var(--columns, 12)) * 100%)`)}}setOrder(){return{order:`${this.getColumns("order")}`}}render(){return a(s,{style:Object.assign(Object.assign({},this.calculateSize()),this.setOrder())},a("slot",null))}};n.style=":host{--grow:1;--basis:0%;padding-left:calc(var(--gutter-x) / 2);padding-right:calc(var(--gutter-x) / 2);margin-left:var(--offset, 0);-ms-flex:var(--grow) 0 var(--basis);flex:var(--grow) 0 var(--basis);width:var(--basis, auto);min-width:0;max-width:100%}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:calc(var(--gutter-x) / 2);padding-inline-start:calc(var(--gutter-x) / 2);-webkit-padding-end:calc(var(--gutter-x) / 2);padding-inline-end:calc(var(--gutter-x) / 2)}}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host{margin-left:unset;-webkit-margin-start:var(--offset, 0);margin-inline-start:var(--offset, 0)}}";export{n as bkkr_col}