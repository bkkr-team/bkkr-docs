import{r as t,h as s,H as i}from"./p-8dbe4215.js";import"./p-5527b9e6.js";import"./p-d4f97589.js";import{m as e}from"./p-a3fb4740.js";const n=class{constructor(s){t(this,s),this.visible=!1,this.autoHide=!0,this.onClick=()=>e.toggle(this.menu)}connectedCallback(){this.visibilityChanged()}async visibilityChanged(){this.visible=await(async t=>{const s=await e.get(t);return!(!s||!await s.isActive())})(this.menu)}render(){const t=this.autoHide&&!this.visible;return s(i,{onClick:this.onClick,"aria-hidden":t?"true":null,class:{"menu-toggle-hidden":t}},s("slot",null))}};n.style=".menu-toggle,:host{position:absolute}.menu-toggle-hidden,:host(.menu-toggle-hidden){display:none}";export{n as bkkr_menu_toggle}