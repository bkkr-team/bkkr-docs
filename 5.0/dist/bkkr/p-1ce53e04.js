import{c as t,a as e,b as n,g as o}from"./p-a7b47bff.js";let a=0;const s=new WeakMap,r=t=>({create:e=>p(t,e),dismiss:(e,n,o)=>v(document,e,n,t,o),getTop:async()=>x(document,t)}),c=r("bkkr-alert"),i=r("bkkr-drawer"),d=r("bkkr-loading"),u=r("bkkr-modal"),b=r("bkkr-popover"),k=r("bkkr-toast"),l=t=>{"undefined"!=typeof document&&y(document);const e=a++;t.overlayIndex=e,t.hasAttribute("id")||(t.id=`bkkr-overlay-${e}`)},p=(e,n)=>"undefined"!=typeof customElements?customElements.whenDefined(e).then((()=>{const o=document.createElement(e);return o.classList.add("overlay-hidden"),Object.assign(o,n),P(document).appendChild(o),new Promise((e=>t(o,e)))})):Promise.resolve(),m='[tabindex]:not([tabindex^="-"]), input:not([type=hidden]):not([tabindex^="-"]), textarea:not([tabindex^="-"]), button:not([tabindex^="-"]), select:not([tabindex^="-"]), .state-focusable:not([tabindex^="-"])',f="input:not([type=hidden]), textarea, button, select",y=t=>{0===a&&(a=1,t.addEventListener("focus",(e=>((t,e)=>{const n=x(e),a=t.target;if(n&&a)if(n===a)n.lastFocus=void 0;else{const t=o(n);if(!t.contains(a))return;const s=t.querySelector(".bkkr-overlay-wrapper");if(!s)return;if(s.contains(a))n.lastFocus=a;else{const t=n.lastFocus;((t,e)=>{let n=t.querySelector(m);const o=n&&n.shadowRoot;o&&(n=o.querySelector(f)||n),n?n.focus():e.focus()})(s,n),t===e.activeElement&&((t,e)=>{const n=Array.from(t.querySelectorAll(m));let o=n.length>0?n[n.length-1]:null;const a=o&&o.shadowRoot;a&&(o=a.querySelector(f)||o),o?o.focus():e.focus()})(s,n),n.lastFocus=e.activeElement}}})(e,t)),!0),t.addEventListener("keyup",(e=>{if("Escape"===e.key){const e=x(t);e&&e.backdropDismiss&&e.dismiss(void 0,B)}})))},v=(t,e,n,o,a)=>{const s=x(t,o,a);return s?s.dismiss(e,n):Promise.reject("overlay does not exist")},x=(t,e,n)=>{const o=((t,e)=>(void 0===e&&(e="bkkr-modal,bkkr-toast"),Array.from(t.querySelectorAll(e)).filter((t=>t.overlayIndex>0))))(t,e);return void 0===n?o[o.length-1]:o.find((t=>t.id===n))},w=async(t,e,n)=>{if(t.presented)return;t.presented=!0,t.willPresent.emit();const o=t.enterAnimation?t.enterAnimation:e;await A(t,o,t.el,n)&&t.didPresent.emit(),"BKKR-TOAST"!==t.el.tagName&&g(t.el),t.keyboardClose&&t.el.focus()},g=async t=>{let e=document.activeElement;if(!e)return;const n=e&&e.shadowRoot;n&&(e=n.querySelector(f)||e),await t.onDidDismiss(),e.focus()},h=async(t,e,n,o,a)=>{if(!t.presented)return!1;t.presented=!1;try{t.el.style.setProperty("pointer-events","none"),t.willDismiss.emit({data:e,role:n});const r=t.leaveAnimation?t.leaveAnimation:o;"gesture"!==n&&await A(t,r,t.el,a),t.didDismiss.emit({data:e,role:n}),s.delete(t),t.el.style.removeProperty("pointer-events")}catch(t){console.error(t)}return t.el.remove(),!0},P=t=>t.querySelector("bkkr-app")||t.body,A=async(t,e,n,o)=>{n.classList.remove("overlay-hidden");const a=e(n.shadowRoot||t.el,o);t.animated||a.duration(0),t.keyboardClose&&a.beforeAddWrite((()=>{const t=n.ownerDocument.activeElement;t&&t.matches("input, bkkr-input, bkkr-textarea")&&t.blur()}));const r=s.get(t)||[];return s.set(t,[...r,a]),await a.play(),!0},E=(t,e)=>{let n;const o=new Promise((t=>n=t));return T(t,e,(t=>{n(t.detail)})),o},T=(t,o,a)=>{const s=e=>{n(t,o,s),a(e)};e(t,o,s)},j=t=>"cancel"===t||t===B,B="backdrop";export{B,c as a,l as b,w as c,i as d,h as e,E as f,s as g,j as i,d as l,u as m,b as p,k as t}