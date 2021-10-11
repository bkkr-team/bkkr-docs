/*!
 * (C) BKKR Framework https://bkkr-team.github.io/bkkr-docs/ - MIT License
 */
System.register(["./p-bd1be62f.system.js"],(function(e){"use strict";var i,t,s,n,r;return{setters:[function(e){i=e.r;t=e.c;s=e.h;n=e.H;r=e.g}],execute:function(){var a=":host{--side-width:100%;--border:0.55px solid var(--bkkr-border, rgba(var(--bkkr-text-color-rgb, 0, 0, 0), 0.1));--side-min-width:270px;--side-max-width:320px;top:0;right:0;bottom:0;left:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:nowrap;flex-wrap:nowrap;contain:strict}::slotted(bkkr-menu.menu-pane-visible){-ms-flex:0 1 auto;flex:0 1 auto;width:var(--side-width);min-width:var(--side-min-width);max-width:var(--side-max-width)}:host(.split-pane-visible) ::slotted(.split-pane-side),:host(.split-pane-visible) ::slotted(.split-pane-main){top:0;right:0;bottom:0;left:0;position:relative !important;-webkit-box-shadow:none !important;box-shadow:none !important;z-index:0}:host(.split-pane-visible) ::slotted(.split-pane-side){min-width:var(--side-min-width);max-width:var(--side-max-width);border-right:var(--border)}:host(.split-pane-visible) ::slotted(.split-pane-main){-ms-flex:1;flex:1}:host(.split-pane-visible) ::slotted(.split-pane-side:not(bkkr-menu)),:host(.split-pane-visible) ::slotted(bkkr-menu.split-pane-side.menu-enabled){display:-ms-flexbox;display:flex;-ms-flex-negative:0;flex-shrink:0}::slotted(.split-pane-side:not(bkkr-menu)){display:none}:host(.split-pane-visible) ::slotted(.split-pane-side){-ms-flex-order:-1;order:-1}:host(.split-pane-visible) ::slotted(.split-pane-side[side=end]){-ms-flex-order:1;order:1;min-width:var(--side-min-width);max-width:var(--side-max-width);border:0, 0, 0, var(--border)}";var l="split-pane-main";var o="split-pane-side";var d={xs:"(min-width: 0px)",sm:"(min-width: 576px)",md:"(min-width: 768px)",lg:"(min-width: 992px)",xl:"(min-width: 1200px)",never:""};var p=e("bkkr_split_pane",function(){function e(e){i(this,e);this.bkkrSplitPaneVisible=t(this,"bkkrSplitPaneVisible",7);this.visible=false;this.disabled=false;this.when=d["lg"]}e.prototype.visibleChanged=function(e){var i={visible:e,isPane:this.isPane.bind(this)};this.bkkrSplitPaneVisible.emit(i)};e.prototype.connectedCallback=function(){this.styleChildren();this.updateState()};e.prototype.disconnectedCallback=function(){if(this.rmL){this.rmL();this.rmL=undefined}};e.prototype.updateState=function(){var e=this;if(this.rmL){this.rmL();this.rmL=undefined}if(this.disabled){this.visible=false;return}var i=this.when;if(typeof i==="boolean"){this.visible=i;return}var t=d[i]||i;if(t.length===0){this.visible=false;return}if(window.matchMedia){var s=function(i){e.visible=i.matches};var n=window.matchMedia(t);n.addListener(s);this.rmL=function(){return n.removeListener(s)};this.visible=n.matches}};e.prototype.isPane=function(e){if(!this.visible){return false}return e.parentElement===this.el&&e.classList.contains(o)};e.prototype.styleChildren=function(){var e=this.contentId;var i=this.el.children;var t=this.el.childElementCount;var s=false;for(var n=0;n<t;n++){var r=i[n];var a=e!==undefined&&r.id===e;if(a){if(s){console.warn("split pane cannot have more than one main node");return}s=true}h(r,a)}if(!s){console.warn("split pane does not have a specified main node")}};e.prototype.render=function(){return s(n,{class:{"split-pane-visible":this.visible}},s("slot",null))};Object.defineProperty(e.prototype,"el",{get:function(){return r(this)},enumerable:false,configurable:true});Object.defineProperty(e,"watchers",{get:function(){return{visible:["visibleChanged"],disabled:["updateState"],when:["updateState"]}},enumerable:false,configurable:true});return e}());var h=function(e,i){var t;var s;if(i){t=l;s=o}else{t=o;s=l}var n=e.classList;n.add(t);n.remove(s)};p.style=a}}}));