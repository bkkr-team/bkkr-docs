import{r as t,h as s,H as i}from"./p-8dbe4215.js";import"./p-3faaa6d8.js";import"./p-2c569857.js";import{m as a}from"./p-46e4bbb0.js";const n=class{constructor(s){t(this,s),this.visible=!1,this.autoHide=!0,this.onClick=()=>a.toggle(this.menu)}connectedCallback(){this.visibilityChanged()}async visibilityChanged(){this.visible=await(async t=>{const s=await a.get(t);return!(!s||!await s.isActive())})(this.menu)}render(){const t=this.autoHide&&!this.visible;return s(i,{onClick:this.onClick,"aria-hidden":t?"true":null,class:{"menu-toggle-hidden":t}},s("slot",null))}};n.style=":host{position:absolute}:host(.menu-toggle-hidden){display:none}";export{n as bkkr_menu_toggle}