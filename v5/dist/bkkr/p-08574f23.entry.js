import{r as t,h as i,H as s}from"./p-a3958a94.js";import{m as n}from"./p-7fd35ff0.js";import"./p-c2089e63.js";import"./p-096ce696.js";const a=class{constructor(i){t(this,i),this.visible=!1,this.autoHide=!0,this.onClick=()=>n.toggle(this.menu)}connectedCallback(){this.visibilityChanged()}async visibilityChanged(){this.visible=await(async t=>{const i=await n.get(t);return!(!i||!await i.isActive())})(this.menu)}render(){const t=this.autoHide&&!this.visible;return i(s,{onClick:this.onClick,"aria-hidden":t?"true":null,class:{"menu-toggle-hidden":t}},i("slot",null))}};a.style=":host{position:relative;-ms-touch-action:manipulation;touch-action:manipulation}:host(.menu-toggle-hidden){display:none}";export{a as bkkr_menu_toggle}