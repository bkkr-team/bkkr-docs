import{r,h as o,H as a}from"./p-0bf5078b.js";import{s as t}from"./p-c50c697b.js";const i=class{constructor(o){r(this,o),this.position="fixed"}render(){const{color:r,position:i}=this;return o(a,{class:t(r,{[`footer-${i}`]:void 0!==i,"state-activatable":"floating"===i})},o("slot",null))}};i.style=":host{--padding-top:2px;--padding-bottom:2px;--padding-start:0;--padding-end:0;--background:var(--bkkr-toolbar-background, var(--bkkr-background-color, #fff));--color:var(--bkkr-text-color, #000);--border-color:var(--bkkr-border, rgba(var(--bkkr-text-color-rgb, 0, 0, 0), 0.1));--max-width:720px;display:block;-ms-flex-order:1;order:1;width:100%;background:var(--color-base, var(--background));color:var(--color-contrast, var(--color));z-index:10}:host(.footer-fixed){bottom:0;left:0;padding-left:var(--padding-left);padding-right:var(--padding-right);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);position:relative;border-top:0.55px solid var(--border-color)}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host(.footer-fixed){padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-left);padding-inline-start:var(--padding-left);-webkit-padding-end:var(--padding-right);padding-inline-end:var(--padding-right)}}:host(.footer-floating){--border-radius:2em;--box-shadow:0 15px 25px 0 rgba(var(--box-shadow-color, 0, 0, 0), 0.1), 0 6px 20px 0 rgba(var(--box-shadow-color, 0, 0, 0), 0.12), 0 13.2px 40px 0 rgba(var(--box-shadow-color, 0, 0, 0), 0.08);--transition:0.2s transform cubic-bezier(0.25, 1.11, 0.78, 1.59), 0.2s box-shadow cubic-bezier(0.25, 1.11, 0.78, 1.59);--transform:translate3d(-50%, 0, 0);margin-left:var(--padding-left);margin-right:var(--padding-right);margin-top:var(--padding-top);margin-bottom:calc(var(--padding-bottom) + var(--bkkr-spacer) / 2);right:calc(var(--bkkr-spacer) * 0.5);bottom:0;left:calc(var(--bkkr-spacer) * 0.5);border-radius:var(--border-radius);position:fixed;max-width:var(--max-width);-webkit-transform:var(--transform);transform:var(--transform);-webkit-transition:var(--transition);transition:var(--transition);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:hidden;will-change:transform, box-shadow}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host(.footer-floating){margin-left:unset;margin-right:unset;-webkit-margin-start:var(--padding-left);margin-inline-start:var(--padding-left);-webkit-margin-end:var(--padding-right);margin-inline-end:var(--padding-right)}}:host(.footer-floating) ::slotted(bkkr-toolbar){--padding-top:4px;--padding-bottom:4px}:host(.footer-floating:active),:host(.footer-floating.state-activated){--box-shadow:0 3px 5px 0 rgba(var(--box-shadow-color, 0, 0, 0), 0.1), 0 6px 10px 0 rgba(var(--box-shadow-color, 0, 0, 0), 0.12), 0 1.2px 20px 0 rgba(var(--box-shadow-color, 0, 0, 0), 0.08);--transform:scale3d(0.97, 0.97, 1);--transition:0.2s transform ease-out, 0.2s box-shadow ease-out}@media (prefers-reduced-motion: reduce){:host(.footer-floating){-webkit-transform:none;transform:none;-webkit-transition:none;transition:none}}";export{i as bkkr_footer}