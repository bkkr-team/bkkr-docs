import{r as o,f as r,h as t,H as s}from"./p-8dfd188c.js";import{s as e}from"./p-c50c697b.js";import{m as a}from"./p-991cbfe5.js";const i=["","xs","sm","md","lg","xl","xxl"],l=class{constructor(r){o(this,r),this.shape="square",this.size="125"}onResize(){r(this)}getSize(o){let r;for(const t of i){const s=a(t),e=this[o+t.charAt(0).toUpperCase()+t.slice(1)];s&&void 0!==e&&(r=e)}return r}calculateSize(){const o=this.getSize("size");if(o&&""!==o)return{"--size":`${o}px`}}render(){const{color:o,shape:r}=this;return t(s,{class:e(o,{"shape-color":void 0!==o,[`shape-${r}`]:void 0!==r}),style:Object.assign({},this.calculateSize())},t("slot",null))}};l.style=":host{--background:rgba(var(--bkkr-text-color-rgb, 0, 0, 0), 0.065);--color:var(--bkkr-text-color, #000);display:-ms-inline-flexbox;display:inline-flex;position:relative;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:var(--size);height:var(--size);background:var(--background);color:var(--color);overflow:hidden}:host(.shape-color){--background:var(--color-base, var(--color-primary, #3880ff));--color:var(--color-contrast, var(--color-primary-contrast, #fff))}:host(.shape-square){--border-radius:18%;border-radius:var(--border-radius)}:host(.shape-circle){-webkit-clip-path:circle(50% at 50% 50%);clip-path:circle(50% at 50% 50%)}:host(.shape-triangle){-webkit-clip-path:polygon(0 0, 50% 100%, 100% 0);clip-path:polygon(0 0, 50% 100%, 100% 0)}:host(.shape-octagon){-webkit-clip-path:polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%);clip-path:polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)}:host(.shape-rombus){-webkit-clip-path:polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);clip-path:polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)}:host(.shape-parallel){-webkit-clip-path:polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%);clip-path:polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)}";export{l as bkkr_shape}