import{r,h as a,H as t}from"./p-8dfd188c.js";import{s as i}from"./p-c50c697b.js";const n=class{constructor(a){r(this,a)}getPath(r){return console.log(void 0!==r),void 0!==r?[].concat("string"==typeof r?r.split(","):r):[]}createBreadcrumbPath(r){return this.getPath(r).map(((r,t,n)=>a("a",{class:i(null,{"breadcrumb-item":!0,"state-disabled":n.length-1===t})},a("span",null,r),n.length-1>t?a("bkkr-icon",{name:"chevron-right"}):"")))}render(){const{path:r}=this;return a(t,null,a("nav",{class:"breadcrumb-inner","aria-label":"breadcrumb"},this.createBreadcrumbPath(r)))}};n.style=":host{--background:var(--color-base, var(--color-light, #f4f5f8));--color:var(--color-contrast, var(--color-light-contrast, #000));--padding-top:0.75rem;--padding-end:1rem;--padding-bottom:0.75rem;--padding-start:1rem;--border-radius:0.75em;border-radius:var(--border-radius);padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);min-width:10px;background:var(--background);font-family:var(--bkkr-font-family);font-size:80%;font-weight:400;list-style:none;contain:content}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.breadcrumb-inner{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap}.breadcrumb-item{margin-right:0.25rem;display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center;line-height:1}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.breadcrumb-item{margin-right:unset;-webkit-margin-end:0.25rem;margin-inline-end:0.25rem}}bkkr-icon{margin-left:0.25rem}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){bkkr-icon{margin-left:unset;-webkit-margin-start:0.25rem;margin-inline-start:0.25rem}}";export{n as bkkr_breadcrumb}