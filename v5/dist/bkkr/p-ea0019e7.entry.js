/*!
 * (C) BKKR Framework https://bkkr-team.github.io/bkkr-docs/ - MIT License
 */
import{e as o,a as r,r as t,h as a,H as i,g as n}from"./p-fef964f0.js";import{h as e,c as s}from"./p-7b48497a.js";import{s as d}from"./p-18201c80.js";const l=(t,a)=>{o((()=>{const o=e(0,1-(t.scrollTop-(t.scrollHeight-t.clientHeight-10))/10,1);r((()=>{a.style.setProperty("--opacity-scale",o.toString())}))}))};let b=class{constructor(o){t(this,o),this.position="fixed",this.checkCollapsibleFooter=()=>{const{collapse:o}=this,r="fade"===o;if(this.destroyCollapsibleFooter(),r){const o=this.el.closest("bkkr-root,bkkr-page,.bkkr-page,page-inner"),r=o?o.querySelector("bkkr-content"):null;this.setupFadeFooter(r)}},this.setupFadeFooter=async o=>{if(!o)return void console.error("bkkr-footer requires a content to collapse. Make sure there is an bkkr-content.");await new Promise((r=>s(o,r)));const r=this.scrollEl=await o.getScrollElement();this.contentScrollCallback=()=>{l(r,this.el)},r.addEventListener("scroll",this.contentScrollCallback),l(r,this.el)}}componentDidLoad(){this.checkCollapsibleFooter()}componentDidUpdate(){this.checkCollapsibleFooter()}destroyCollapsibleFooter(){this.scrollEl&&this.contentScrollCallback&&(this.scrollEl.removeEventListener("scroll",this.contentScrollCallback),this.contentScrollCallback=void 0)}render(){const{color:o,position:r,collapse:t}=this;return a(i,{class:d(o,{[`footer-${r}`]:void 0!==r,[`footer-collapse-${t}`]:void 0!==t,"state-activatable":"floating"===r})},a("div",{class:"footer-background"}),a("div",{class:"footer-content"},a("slot",null)))}get el(){return n(this)}};b.style=":host{--background:var(--bkkr-toolbar-background, var(--bkkr-background-color, #fff));--color:var(--bkkr-toolbar-color, var(--bkkr-text-color, #000));--border-color:var(--bkkr-toolbar-border-color, rgba(var(--bkkr-text-color-rgb, 0, 0, 0), 0.1));--border-width:0.55px;--border-style:solid;--padding-top:2px;--padding-bottom:2px;--padding-start:0;--padding-end:0;--max-width:720px;--opacity:1;--opacity-scale:1;display:block;-ms-flex-order:1;order:1;color:var(--color-contrast, var(--color));z-index:10}:host(.footer-fixed){bottom:0;left:0;padding-left:var(--padding-left);padding-right:var(--padding-right);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);position:relative;width:100%}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host(.footer-fixed){padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-left);padding-inline-start:var(--padding-left);-webkit-padding-end:var(--padding-right);padding-inline-end:var(--padding-right)}}:host(.footer-fixed) .footer-background{border-top:var(--border-width) var(--border-style) var(--border-color)}:host(.footer-floating){--border-radius:32px;--box-shadow:0 15px 25px 0 rgba(var(--box-shadow-color, 0, 0, 0), 0.1), 0 6px 20px 0 rgba(var(--box-shadow-color, 0, 0, 0), 0.12), 0 13.2px 40px 0 rgba(var(--box-shadow-color, 0, 0, 0), 0.08);--transition:0.2s transform cubic-bezier(0.25, 1.11, 0.78, 1.59), 0.2s box-shadow cubic-bezier(0.25, 1.11, 0.78, 1.59);--transform:translate3d(0, 0, 0);--background:var(--bkkr-overlay-background, var(--bkkr-background-color, #fff));margin-left:var(--padding-left);margin-right:var(--padding-right);margin-top:var(--padding-top);margin-bottom:calc(var(--padding-bottom) + var(--bkkr-spacer) * 0.5);right:calc(var(--bkkr-spacer) * 0.5);bottom:0;left:calc(var(--bkkr-spacer) * 0.5);border-radius:var(--border-radius);position:fixed;max-width:var(--max-width);-webkit-transform:var(--transform);transform:var(--transform);-webkit-transition:var(--transition);transition:var(--transition);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:hidden;will-change:transform, box-shadow}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host(.footer-floating){margin-left:unset;margin-right:unset;-webkit-margin-start:var(--padding-left);margin-inline-start:var(--padding-left);-webkit-margin-end:var(--padding-right);margin-inline-end:var(--padding-right)}}:host(.footer-floating) ::slotted(bkkr-toolbar){--padding-top:4px;--padding-bottom:4px}.footer-background{top:0;right:0;bottom:0;left:0;position:absolute;-webkit-transform:translateZ(0);transform:translateZ(0);background:var(--color-base, var(--background));contain:strict;opacity:calc(var(--opacity) * var(--opacity-scale));z-index:-1;pointer-events:none}.footer-content{-ms-flex:1 1 0%;flex:1 1 0%;min-width:0}:host(.footer-floating:active),:host(.footer-floating.state-activated){--box-shadow:0 3px 5px 0 rgba(var(--box-shadow-color, 0, 0, 0), 0.1), 0 6px 10px 0 rgba(var(--box-shadow-color, 0, 0, 0), 0.12), 0 1.2px 20px 0 rgba(var(--box-shadow-color, 0, 0, 0), 0.08);--transform:scale3d(0.97, 0.97, 1);--transition:0.2s transform ease-out, 0.2s box-shadow ease-out}@media (prefers-reduced-motion: reduce){:host(.footer-floating){-webkit-transform:none;transform:none;-webkit-transition:none;transition:none}}";export{b as bkkr_footer}