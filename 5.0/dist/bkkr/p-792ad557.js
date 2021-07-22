import{c as t}from"./p-049a2213.js";import{c as e,a as n,b as o,g as a}from"./p-c2089e63.js";let r=0;const s=new WeakMap,i=t=>({create:e=>m(t,e),dismiss:(e,n,o)=>h(document,e,n,t,o),getTop:async()=>g(document,t)}),c=i("bkkr-alert"),d=i("bkkr-drawer"),k=i("bkkr-loading"),l=i("bkkr-modal"),u=i("bkkr-popover"),b=i("bkkr-toast"),p=t=>{"undefined"!=typeof document&&w(document);const e=r++;t.overlayIndex=e,t.hasAttribute("id")||(t.id=`bkkr-overlay-${e}`)},m=(t,n)=>"undefined"!=typeof customElements?customElements.whenDefined(t).then((()=>{const o=document.createElement(t);return o.classList.add("overlay-hidden"),Object.assign(o,Object.assign({},n)),O(document).appendChild(o),new Promise((t=>e(o,t)))})):Promise.resolve(),f='[tabindex]:not([tabindex^="-"]), input:not([type=hidden]):not([tabindex^="-"]), textarea:not([tabindex^="-"]), button:not([tabindex^="-"]), select:not([tabindex^="-"]), .state-focusable:not([tabindex^="-"])',v="input:not([type=hidden]), textarea, button, select",y=(t,e)=>{let n=t.querySelector(f);const o=n&&n.shadowRoot;if(o&&(n=o.querySelector(v)||n),n){if(n.focus(),n.classList.contains("state-focusable")){const t=e.closest("bkkr-root");t&&t.setFocus([n])}}else e.focus()},x=(t,e)=>{const n=Array.from(t.querySelectorAll(f));let o=n.length>0?n[n.length-1]:null;const a=o&&o.shadowRoot;a&&(o=a.querySelector(v)||o),o?o.focus():e.focus()},w=t=>{0===r&&(r=1,t.addEventListener("focus",(e=>((t,e)=>{const n=g(e),o=t.target;n&&o&&(n.shadowRoot?(()=>{if(n.contains(o))n.lastFocus=o;else{const t=n.lastFocus;y(n,n),t===e.activeElement&&x(n,n),n.lastFocus=e.activeElement}})():(()=>{if(n===o)n.lastFocus=void 0;else{const t=a(n);if(!t.contains(o))return;const r=t.querySelector(".bkkr-overlay-wrapper");if(!r)return;if(r.contains(o))n.lastFocus=o;else{const t=n.lastFocus;y(r,n),t===e.activeElement&&x(r,n),n.lastFocus=e.activeElement}}})())})(e,t)),!0),t.addEventListener("keyup",(e=>{if("Escape"===e.key){const e=g(t);e&&e.backdropDismiss&&e.dismiss(void 0,R)}})))},h=(t,e,n,o,a)=>{const r=g(t,o,a);return r?r.dismiss(e,n):Promise.reject("overlay does not exist")},g=(t,e,n)=>{const o=((t,e)=>(void 0===e&&(e="bkkr-alert,bkkr-drawer,bkkr-loading,bkkr-modal,bkkr-popover,bkkr-toast"),Array.from(t.querySelectorAll(e)).filter((t=>t.overlayIndex>0))))(t,e);return void 0===n?o[o.length-1]:o.find((t=>t.id===n))},j=(t=!1)=>{const e=O(document).querySelector("bkkr-router-outlet, bkkr-nav, #bkkr-view-container-root");e&&(t?e.setAttribute("aria-hidden","true"):e.removeAttribute("aria-hidden"))},P=async(e,n,o,a)=>{var r,s;if(e.presented)return;j(!0),e.presented=!0,e.willPresent.emit(),null===(r=e.willPresentShorthand)||void 0===r||r.emit();const i=e.enterAnimation?e.enterAnimation:t.get(n,o);await T(e,i,e.el,a)&&(e.didPresent.emit(),null===(s=e.didPresentShorthand)||void 0===s||s.emit()),"BKKR-TOAST"!==e.el.tagName&&A(e.el),e.keyboardClose&&e.el.focus()},A=async t=>{let e=document.activeElement;if(!e)return;const n=e&&e.shadowRoot;n&&(e=n.querySelector(v)||e),await t.onDidDismiss(),e.focus()},E=async(e,n,o,a,r,i)=>{var c,d;if(!e.presented)return!1;j(!1),e.presented=!1;try{e.el.style.setProperty("pointer-events","none"),e.willDismiss.emit({data:n,role:o}),null===(c=e.willDismissShorthand)||void 0===c||c.emit({data:n,role:o});const k=e.leaveAnimation?e.leaveAnimation:t.get(a,r);"gesture"!==o&&await T(e,k,e.el,i),e.didDismiss.emit({data:n,role:o}),null===(d=e.didDismissShorthand)||void 0===d||d.emit({data:n,role:o}),s.delete(e),e.el.classList.add("overlay-hidden")}catch(t){console.error(t)}return e.el.remove(),!0},O=t=>t.querySelector("bkkr-root")||t.body,T=async(e,n,o,a)=>{o.classList.remove("overlay-hidden");const r=n(e.el,a);e.animated&&t.getBoolean("animated",!0)||r.duration(0),e.keyboardClose&&r.beforeAddWrite((()=>{const t=o.ownerDocument.activeElement;t&&t.matches("input,bkkr-input, bkkr-datepicker, bkkr-textarea")&&t.blur()}));const i=s.get(e)||[];return s.set(e,[...i,r]),await r.play(),!0},B=(t,e)=>{let n;const o=new Promise((t=>n=t));return K(t,e,(t=>{n(t.detail)})),o},K=(t,e,a)=>{const r=n=>{o(t,e,r),a(n)};n(t,e,r)},M=t=>"cancel"===t||t===R,R="backdrop";export{R as B,c as a,p as b,P as c,d,E as e,B as f,s as g,y as h,M as i,k as l,l as m,u as p,b as t}