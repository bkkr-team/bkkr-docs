/*!
 * (C) BKKR Framework https://bkkr-team.github.io/bkkr-docs/ - MIT License
 */
const t=(t,n=0)=>new Promise((r=>{e(t,n,r)})),e=(t,e=0,n)=>{let r,i;const o={passive:!0},a=()=>{r&&r()},s=e=>{void 0!==e&&t!==e.target||(a(),n(e))};return t&&(t.addEventListener("webkitTransitionEnd",s,o),t.addEventListener("transitionend",s,o),i=setTimeout(s,e+500),r=()=>{i&&(clearTimeout(i),i=void 0),t.removeEventListener("webkitTransitionEnd",s,o),t.removeEventListener("transitionend",s,o)}),a},n=(t,e)=>{t.componentOnReady?t.componentOnReady().then(e):e()},r=(t,e=[])=>{const n={};return e.forEach((e=>{t.hasAttribute(e)&&(null!==t.getAttribute(e)&&(n[e]=t.getAttribute(e)),t.removeAttribute(e))})),n},i=(t,e,n,r)=>{if("undefined"!=typeof window){const i=window,o=i&&i.Ionic&&i.Ionic.config;if(o){const i=o.get("_ael");if(i)return i(t,e,n,r);if(o._ael)return o._ael(t,e,n,r)}}return t.addEventListener(e,n,r)},o=(t,e,n,r)=>{if("undefined"!=typeof window){const i=window,o=i&&i.Ionic&&i.Ionic.config;if(o){const i=o.get("_rel");if(i)return i(t,e,n,r);if(o._rel)return o._rel(t,e,n,r)}}return t.removeEventListener(e,n,r)},a=(t,e=t)=>t.shadowRoot||e,s=t=>"function"==typeof __zone_symbol__requestAnimationFrame?__zone_symbol__requestAnimationFrame(t):"function"==typeof requestAnimationFrame?requestAnimationFrame(t):setTimeout(t),u=t=>!!t.shadowRoot&&!!t.attachShadow,l=t=>{const e=t.closest("bkkr-item");return e?e.querySelector("bkkr-label"):null},c=t=>{if(t.focus(),t.classList.contains("state-focusable")){const e=t.closest("bkkr-root");e&&e.setFocus([t])}},f=(t,e)=>{let n;const r=t.getAttribute("aria-labelledby"),i=t.id;let o=null!==r&&""!==r.trim()?r:e+"-lbl",a=null!==r&&""!==r.trim()?document.getElementById(r):l(t);return a?(null===r&&(a.id=o),n=a.textContent,a.setAttribute("aria-hidden","true")):""!==i.trim()&&(a=document.querySelector(`label[for="${i}"]`),a&&(""!==a.id?o=a.id:a.id=o=`${i}-lbl`,n=a.textContent)),{label:a,labelId:o,labelText:n}},d=(t,e,n,r,i)=>{if(t||u(e)){let t=e.querySelector("input.aux-input");t||(t=e.ownerDocument.createElement("input"),t.type="hidden",t.classList.add("aux-input"),e.appendChild(t)),t.disabled=i,t.name=n,t.value=r||""}},m=(t,e,n)=>Math.max(t,Math.min(e,n)),b=(t,e)=>{if(!t){const t="ASSERT: "+e;throw console.error(t),new Error(t)}},w=t=>t.timeStamp||Date.now(),_=t=>{const e="rtl"===document.dir;switch(t){case"start":return e;case"end":return!e;default:throw new Error(`"${t}" is not a valid value for [side]. Use "start" or "end" instead.`)}},k=(t,e)=>{const n=t._original||t;return{_original:t,emit:p(n.emit.bind(n),e)}},p=(t,e=0)=>{let n;return(...r)=>{clearTimeout(n),n=setTimeout(t,e,...r)}},T=/^[a-z][a-z0-9+\-.]*:/,h=async(t,e,n)=>{if(null!=t&&"#"!==t[0]&&!T.test(t)){const r=document.querySelector("bkkr-router");if(r)return null!=e&&e.preventDefault(),r.push(t,n)}return!1},y=(t,e)=>{if(null!=t||(t={}),null!=e||(e={}),t===e)return!0;const n=Object.keys(t);if(n.length!==Object.keys(e).length)return!1;for(const r of n){if(!(r in e))return!1;if(t[r]!==e[r])return!1}return!0};export{i as a,o as b,n as c,f as d,d as e,c as f,a as g,l as h,r as i,m as j,k,_ as l,b as m,p as n,h as o,u as p,w as q,s as r,y as s,t}