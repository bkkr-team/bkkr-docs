import{r as t,h as s,H as i}from"./p-856de026.js";import{m as n}from"./p-18b00d23.js";import"./p-c2089e63.js";import"./p-c346915b.js";const e=class{constructor(s){t(this,s),this.visible=!1,this.autoHide=!0,this.onClick=()=>n.toggle(this.menu)}connectedCallback(){this.visibilityChanged()}async visibilityChanged(){this.visible=await(async t=>{const s=await n.get(t);return!(!s||!await s.isActive())})(this.menu)}render(){const t=this.autoHide&&!this.visible;return s(i,{onClick:this.onClick,"aria-hidden":t?"true":null,class:{"menu-toggle-hidden":t}},s("slot",null))}};e.style=":host{position:relative}:host(.menu-toggle-hidden){display:none}";export{e as bkkr_menu_toggle}