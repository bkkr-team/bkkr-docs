/*!
 * (C) BKKR Framework https://bkkr-team.github.io/bkkr-docs/ - MIT License
 */
import{r as t,h as r,H as i}from"./p-fef964f0.js";import{o as e}from"./p-bf8dbf30.js";import{s as o}from"./p-18201c80.js";let s=class{constructor(r){t(this,r),this.routerDirection="forward",this.onClick=t=>{e(this.href,t,this.routerDirection)}}render(){const t={href:this.href,rel:this.rel,target:this.target};return r(i,{onClick:this.onClick,class:o(this.color,{"state-activatable":!0})},r("a",Object.assign({},t),r("slot",null)))}};s.style=":host{--background:transparent;--color:var(--color-base, var(--color-primary, #3880ff));background:var(--background);color:var(--color)}a{color:inherit;font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-align:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;white-space:inherit}";export{s as bkkr_router_link}