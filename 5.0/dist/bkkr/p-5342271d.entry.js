import{r as i,c as t,h as e,H as s,g as n}from"./p-0bf5078b.js";const o={xs:"(min-width: 0px)",sm:"(min-width: 576px)",md:"(min-width: 768px)",lg:"(min-width: 992px)",xl:"(min-width: 1200px)",never:""},a=class{constructor(e){i(this,e),this.bkkrSplitPaneVisible=t(this,"bkkrSplitPaneVisible",7),this.visible=!1,this.disabled=!1,this.when=o.lg}visibleChanged(i){const t={visible:i,isPane:this.isPane.bind(this)};this.bkkrSplitPaneVisible.emit(t)}connectedCallback(){this.styleChildren(),this.updateState()}disconnectedCallback(){this.rmL&&(this.rmL(),this.rmL=void 0)}updateState(){if(this.rmL&&(this.rmL(),this.rmL=void 0),this.disabled)return void(this.visible=!1);const i=this.when;if("boolean"==typeof i)return void(this.visible=i);const t=o[i]||i;if(0!==t.length){if(window.matchMedia){const i=i=>{this.visible=i.matches},e=window.matchMedia(t);e.addListener(i),this.rmL=()=>e.removeListener(i),this.visible=e.matches}}else this.visible=!1}isPane(i){return!!this.visible&&i.parentElement===this.el&&i.classList.contains("split-pane-side")}styleChildren(){const i=this.contentId,t=this.el.children,e=this.el.childElementCount;let s=!1;for(let n=0;n<e;n++){const e=t[n],o=void 0!==i&&e.id===i;if(o){if(s)return void console.warn("split pane cannot have more than one main node");s=!0}l(e,o)}s||console.warn("split pane does not have a specified main node")}render(){return e(s,{class:{"split-pane-visible":this.visible}},e("slot",null))}get el(){return n(this)}static get watchers(){return{visible:["visibleChanged"],disabled:["updateState"],when:["updateState"]}}},l=(i,t)=>{let e,s;t?(e="split-pane-main",s="split-pane-side"):(e="split-pane-side",s="split-pane-main");const n=i.classList;n.add(e),n.remove(s)};a.style=":host{--side-width:100%;--border:0.55px solid var(--bkkr-border, rgba(var(--bkkr-text-color-rgb, 0, 0, 0), 0.1));--side-min-width:270px;--side-max-width:320px;top:0;right:0;bottom:0;left:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:nowrap;flex-wrap:nowrap;contain:strict}::slotted(bkkr-menu.menu-pane-visible){-ms-flex:0 1 auto;flex:0 1 auto;width:var(--side-width);min-width:var(--side-min-width);max-width:var(--side-max-width)}:host(.split-pane-visible) ::slotted(.split-pane-side),:host(.split-pane-visible) ::slotted(.split-pane-main){top:0;right:0;bottom:0;left:0;position:relative !important;-webkit-box-shadow:none !important;box-shadow:none !important;z-index:0}:host(.split-pane-visible) ::slotted(.split-pane-side){min-width:var(--side-min-width);max-width:var(--side-max-width);border-right:var(--border)}:host(.split-pane-visible) ::slotted(.split-pane-main){-ms-flex:1;flex:1}:host(.split-pane-visible) ::slotted(.split-pane-side:not(bkkr-menu)),:host(.split-pane-visible) ::slotted(bkkr-menu.split-pane-side.menu-enabled){display:-ms-flexbox;display:flex;-ms-flex-negative:0;flex-shrink:0}::slotted(.split-pane-side:not(bkkr-menu)){display:none}:host(.split-pane-visible) ::slotted(.split-pane-side){-ms-flex-order:-1;order:-1}:host(.split-pane-visible) ::slotted(.split-pane-side[side=end]){-ms-flex-order:1;order:1;min-width:var(--side-min-width);max-width:var(--side-max-width);border:0, 0, 0, var(--border)}";export{a as bkkr_split_pane}