import{r as t,e,h as i,H as o,g as n}from"./p-8dbe4215.js";const a=class{constructor(i){t(this,i),this.bkkrNavButtonClick=e(this,"bkkrNavButtonClick",7),this.disabled=!1,this.layout="icon-top",this.selected=!1,this.onKeyUp=t=>{"Enter"!==t.key&&" "!==t.key||this.selectNav(t)},this.onClick=t=>{this.selectNav(t)}}onNavBarChanged(t){const e=t.target,i=this.el.parentElement;(t.composedPath&&t.composedPath().includes(i)||e&&e.contains(this.el))&&(this.selected=this.tab===t.detail.nav)}selectNav(t){void 0!==this.tab&&(this.disabled||this.bkkrNavButtonClick.emit({tab:this.tab,href:this.href,selected:this.selected}),t.preventDefault())}get hasLabel(){return!!this.el.querySelector("bkkr-label")}get hasIcon(){return!!this.el.querySelector("bkkr-icon")}get tabIndex(){return this.disabled?-1:this.el.hasAttribute("tabindex")?this.el.getAttribute("tabindex"):0}render(){const{disabled:t,hasIcon:e,hasLabel:n,tabIndex:a,href:r,rel:s,target:l,layout:d,selected:b,tab:h}=this;return i(o,{onClick:this.onClick,onKeyup:this.onKeyUp,role:"tab",tabindex:a,"aria-selected":b?"true":null,id:void 0!==h?"nav-button-"+h:null,class:{"nav-selected":b,"nav-disabled":t,"nav-has-label":n,"nav-has-icon":e,"nav-has-label-only":n&&!e,"nav-has-icon-only":e&&!n,["nav-layout-"+d]:!0,"state-activatable":!0,"bkkr-selectable":!0,"state-focusable":!0}},i("a",Object.assign({},{download:this.download,href:r,rel:s,target:l},{tabIndex:-1,class:"button-native",part:"native"}),i("span",{class:"button-inner"},i("slot",null))))}get el(){return n(this)}};a.style=':host{--background-hover:rgba(var(--bkkr-text-color-rgb, 0, 0, 0), 0.04);--background-focused-opacity:1;--padding-top:2px;--padding-end:2px;--padding-bottom:2px;--padding-start:2px;--min-height:36px;-ms-flex:1;flex:1;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;max-width:240px;height:100%;outline:none;background:var(--background);color:var(--color);font-size:10px}.button-native{border-radius:calc(var(--border-radius, 1em) + 2px);margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);color:inherit;font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-align:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;white-space:inherit;display:-ms-flexbox;display:flex;position:relative;-ms-flex-direction:inherit;flex-direction:inherit;-ms-flex-align:inherit;align-items:inherit;-ms-flex-pack:inherit;justify-content:inherit;width:100%;height:100%;min-height:var(--min-height);border:0;outline:none;background:transparent;text-decoration:none;cursor:pointer;overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-user-drag:none}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.button-native{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.button-native::after{top:0;right:0;bottom:0;left:0;position:absolute;content:"";opacity:0}.button-inner{display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:inherit;flex-flow:inherit;-ms-flex-align:inherit;align-items:inherit;-ms-flex-pack:inherit;justify-content:inherit;width:100%;height:100%;z-index:1}:host(.state-focused) .button-native{color:var(--color-focused)}:host(.state-focused) .button-native::after{background:var(--background-focused);opacity:var(--background-focused-opacity)}@media (any-hover: hover){.button-native:hover{background:var(--background-hover)}}:host(.nav-selected){color:var(--color-selected)}:host(.nav-selected) ::slotted(bkkr-icon){color:var(--color-selected)}:host(.nav-hidden){display:none !important}:host(.nav-disabled){pointer-events:none;opacity:0.4}::slotted(bkkr-label),::slotted(bkkr-icon){display:block;-ms-flex-item-align:center;align-self:center;max-width:100%;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box}::slotted(bkkr-label){margin-top:0;margin-bottom:1px;-ms-flex-order:0;order:0;min-height:11px;font-weight:500}::slotted(bkkr-icon){margin-top:2px;margin-bottom:2px;-ms-flex-order:-1;order:-1;height:1em;font-size:23px}::slotted(bkkr-icon::before){vertical-align:top}:host(.nav-has-label-only) ::slotted(bkkr-label){white-space:normal}::slotted(bkkr-badge){padding-left:6px;padding-right:6px;padding-top:1px;padding-bottom:1px;top:0;left:calc(50% + 6px);position:absolute;height:auto;font-size:12px;line-height:16px;z-index:1;-webkit-box-sizing:border-box;box-sizing:border-box}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){::slotted(bkkr-badge){padding-left:unset;padding-right:unset;-webkit-padding-start:6px;padding-inline-start:6px;-webkit-padding-end:6px;padding-inline-end:6px}}:host(.nav-layout-icon-start){-ms-flex-direction:row;flex-direction:row}:host(.nav-layout-icon-end){-ms-flex-direction:row-reverse;flex-direction:row-reverse}:host(.nav-layout-icon-bottom){-ms-flex-direction:column-reverse;flex-direction:column-reverse}:host(.nav-layout-icon-hide) ::slotted(bkkr-icon){display:none}:host(.nav-layout-label-hide) ::slotted(bkkr-label){display:none}:host(.nav-has-label-only) ::slotted(bkkr-label){margin-left:0;margin-right:0;margin-top:2px;margin-bottom:2px;font-size:12px;font-size:14px;line-height:1.1}:host(.nav-layout-icon-end) ::slotted(bkkr-label),:host(.nav-layout-icon-start) ::slotted(bkkr-label),:host(.nav-layout-icon-hide) ::slotted(bkkr-label){margin-top:2px;margin-bottom:2px;font-size:14px;line-height:1.1}:host(.nav-layout-icon-end) ::slotted(bkkr-icon),:host(.nav-layout-icon-start) ::slotted(bkkr-icon){min-width:24px;height:26px;margin-top:2px;margin-bottom:1px;font-size:24px}:host(.nav-layout-icon-bottom) ::slotted(bkkr-badge){left:calc(50% + 12px)}:host(.nav-layout-icon-bottom) ::slotted(bkkr-icon){margin-top:0;margin-bottom:1px}:host(.nav-layout-icon-bottom) ::slotted(bkkr-label){margin-top:4px}:host(.nav-layout-icon-start) ::slotted(bkkr-badge),:host(.nav-layout-icon-end) ::slotted(bkkr-badge){top:10px;left:calc(50% + 35px)}:host(.nav-layout-icon-hide) ::slotted(bkkr-badge),:host(.nav-has-label-only) ::slotted(bkkr-badge){top:10px;left:calc(50% + 30px)}:host(.nav-layout-label-hide) ::slotted(bkkr-badge),:host(.nav-has-icon-only) ::slotted(bkkr-badge){top:10px}:host(.nav-layout-label-hide) ::slotted(bkkr-icon){margin-left:0;margin-right:0;margin-top:0;margin-bottom:0}';export{a as bkkr_nav}