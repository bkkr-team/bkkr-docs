import{r as t,e,h as a,H as i,g as n}from"./p-ff07675f.js";import{s as r}from"./p-09b2e663.js";const s=class{constructor(a){t(this,a),this.bkkrNavBarChanged=e(this,"bkkrNavBarChanged",7),this.keyboardVisible=!1}selectedNavChanged(){void 0!==this.selectedNav&&this.bkkrNavBarChanged.emit({nav:this.selectedNav})}componentWillLoad(){this.selectedNavChanged()}connectedCallback(){"undefined"!=typeof window&&(this.keyboardWillShowHandler=()=>{"top"!==this.el.getAttribute("slot")&&(this.keyboardVisible=!0)},this.keyboardWillHideHandler=()=>{setTimeout((()=>this.keyboardVisible=!1),50)},window.addEventListener("keyboardWillShow",this.keyboardWillShowHandler),window.addEventListener("keyboardWillHide",this.keyboardWillHideHandler))}disconnectedCallback(){"undefined"!=typeof window&&(window.removeEventListener("keyboardWillShow",this.keyboardWillShowHandler),window.removeEventListener("keyboardWillHide",this.keyboardWillHideHandler),this.keyboardWillShowHandler=this.keyboardWillHideHandler=void 0)}render(){const{color:t,keyboardVisible:e}=this;return a(i,{role:"navlist","aria-hidden":e?"true":null,class:r(t,{"nav-bar-hidden":e})},a("slot",null))}get el(){return n(this)}static get watchers(){return{selectedNav:["selectedNavChanged"]}}};s.style=".navs,:host{--color:var(--bkkr-color-step-600, #666666);--color-selected:var(--color-base, var(--color-primary, #3880ff));padding-left:var(--safe-area-left);padding-right:var(--safe-area-right);margin-left:auto;margin-right:auto;margin-bottom:0;display:-ms-flexbox;display:flex;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-ms-flex-align:center;align-items:center;-ms-flex-pack:stretch;justify-content:stretch;width:auto;max-width:720px;height:100%;list-style:none;text-align:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:10;-webkit-box-sizing:content-box !important;box-sizing:content-box !important}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.navs,:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--safe-area-left);padding-inline-start:var(--safe-area-left);-webkit-padding-end:var(--safe-area-right);padding-inline-end:var(--safe-area-right)}}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.navs,:host{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}:host(.nav-bar-hidden){display:none !important}";export{s as bkkr_navs}