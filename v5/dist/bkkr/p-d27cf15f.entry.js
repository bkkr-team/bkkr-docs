import{r as t,h as i,H as s}from"./p-a3958a94.js";import{m as a}from"./p-71f234de.js";import"./p-d56ecf06.js";import"./p-3ac671b5.js";const n=class{constructor(i){t(this,i),this.visible=!1,this.autoHide=!0,this.onClick=()=>a.toggle(this.menu)}connectedCallback(){this.visibilityChanged()}async visibilityChanged(){this.visible=await(async t=>{const i=await a.get(t);return!(!i||!await i.isActive())})(this.menu)}render(){const t=this.autoHide&&!this.visible;return i(s,{onClick:this.onClick,"aria-hidden":t?"true":null,class:{"menu-toggle-hidden":t}},i("slot",null))}};n.style=":host{position:relative;-ms-touch-action:manipulation;touch-action:manipulation}:host(.menu-toggle-hidden){display:none}";export{n as bkkr_menu_toggle}