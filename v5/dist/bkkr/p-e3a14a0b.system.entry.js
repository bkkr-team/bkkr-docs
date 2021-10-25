/*!
 * (C) BKKR Framework https://bkkr-team.github.io/bkkr-docs/ - MIT License
 */
System.register(["./p-6c3087ac.system.js","./p-7c09dde3.system.js"],(function(e){"use strict";var t,n,i,r,a,o;return{setters:[function(e){t=e.r;n=e.c;i=e.h;r=e.H;a=e.g},function(e){o=e.s}],execute:function(){var s=":host{--color:var(--color-step-600, #666666);--color-selected:var(--color-base, var(--color-primary, #3880ff));padding-left:var(--safe-area-left);padding-right:var(--safe-area-right);margin-left:auto;margin-right:auto;margin-bottom:0;display:-ms-flexbox;display:flex;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-ms-flex-align:center;align-items:center;-ms-flex-pack:stretch;justify-content:stretch;width:auto;max-width:720px;height:100%;list-style:none;text-align:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:10;-webkit-box-sizing:content-box !important;box-sizing:content-box !important}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--safe-area-left);padding-inline-start:var(--safe-area-left);-webkit-padding-end:var(--safe-area-right);padding-inline-end:var(--safe-area-right)}}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}:host(.nav-bar-hidden){display:none !important}";var l=e("bkkr_navs",function(){function e(e){t(this,e);this.bkkrNavBarChanged=n(this,"bkkrNavBarChanged",7);this.keyboardVisible=false}e.prototype.selectedNavChanged=function(){if(this.selectedNav!==undefined){this.bkkrNavBarChanged.emit({nav:this.selectedNav})}};e.prototype.componentWillLoad=function(){this.selectedNavChanged()};e.prototype.connectedCallback=function(){var e=this;if(typeof window!=="undefined"){this.keyboardWillShowHandler=function(){if(e.el.getAttribute("slot")!=="top"){e.keyboardVisible=true}};this.keyboardWillHideHandler=function(){setTimeout((function(){return e.keyboardVisible=false}),50)};window.addEventListener("keyboardWillShow",this.keyboardWillShowHandler);window.addEventListener("keyboardWillHide",this.keyboardWillHideHandler)}};e.prototype.disconnectedCallback=function(){if(typeof window!=="undefined"){window.removeEventListener("keyboardWillShow",this.keyboardWillShowHandler);window.removeEventListener("keyboardWillHide",this.keyboardWillHideHandler);this.keyboardWillShowHandler=this.keyboardWillHideHandler=undefined}};e.prototype.render=function(){var e=this,t=e.color,n=e.keyboardVisible;return i(r,{role:"navlist","aria-hidden":n?"true":null,class:o(t,{"nav-bar-hidden":n})},i("slot",null))};Object.defineProperty(e.prototype,"el",{get:function(){return a(this)},enumerable:false,configurable:true});Object.defineProperty(e,"watchers",{get:function(){return{selectedNav:["selectedNavChanged"]}},enumerable:false,configurable:true});return e}());l.style=s}}}));