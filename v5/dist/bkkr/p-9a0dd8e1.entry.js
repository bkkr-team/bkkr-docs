/*!
 * (C) BKKR Framework https://bkkr-team.github.io/bkkr-docs/ - MIT License
 */
import{r,h as e,H as o,g as s}from"./p-08349d90.js";let n=class{constructor(e){r(this,e)}onClick(r){const e=this.el.closest("bkkr-reorder-group");r.preventDefault(),e&&e.disabled||r.stopImmediatePropagation()}render(){return e(o,null,e("slot",null,e("bkkr-icon",{name:"grip-lines",lazy:!1,class:"reorder-icon",part:"icon"})))}get el(){return s(this)}};n.style=":host([slot]){display:none;line-height:0;z-index:100}.reorder-icon{display:block;font-size:20px;opacity:0.25}";export{n as bkkr_reorder}