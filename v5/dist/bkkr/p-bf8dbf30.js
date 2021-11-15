/*!
 * (C) BKKR Framework https://bkkr-team.github.io/bkkr-docs/ - MIT License
 */
const e=(e,n=0)=>new Promise((r=>{t(e,n,r)})),t=(e,t=0,n)=>{let r,i;const a={passive:!0},o=()=>{r&&r()},s=t=>{void 0!==t&&e!==t.target||(o(),n(t))};return e&&(e.addEventListener("webkitTransitionEnd",s,a),e.addEventListener("transitionend",s,a),i=setTimeout(s,t+500),r=()=>{i&&(clearTimeout(i),i=void 0),e.removeEventListener("webkitTransitionEnd",s,a),e.removeEventListener("transitionend",s,a)}),o},n=(e,t)=>{e.componentOnReady?e.componentOnReady().then(t):t()},r=(e,t=[])=>{const n={};return t.forEach((t=>{e.hasAttribute(t)&&(null!==e.getAttribute(t)&&(n[t]=e.getAttribute(t)),e.removeAttribute(t))})),n},i=(e,t,n,r)=>{if("undefined"!=typeof window){const i=window,a=i&&i.Ionic&&i.Ionic.config;if(a){const i=a.get("_ael");if(i)return i(e,t,n,r);if(a._ael)return a._ael(e,t,n,r)}}return e.addEventListener(t,n,r)},a=(e,t,n,r)=>{if("undefined"!=typeof window){const i=window,a=i&&i.Ionic&&i.Ionic.config;if(a){const i=a.get("_rel");if(i)return i(e,t,n,r);if(a._rel)return a._rel(e,t,n,r)}}return e.removeEventListener(t,n,r)},o=(e,t=e)=>e.shadowRoot||t,s=e=>"function"==typeof __zone_symbol__requestAnimationFrame?__zone_symbol__requestAnimationFrame(e):"function"==typeof requestAnimationFrame?requestAnimationFrame(e):setTimeout(e),u=e=>!!e.shadowRoot&&!!e.attachShadow,l=e=>{const t=e.closest("bkkr-item");return t?t.querySelector("bkkr-label"):null},d=(e,t,n,r,i)=>{if(e||u(t)){let e=t.querySelector("input.aux-input");e||(e=t.ownerDocument.createElement("input"),e.type="hidden",e.classList.add("aux-input"),t.appendChild(e)),e.disabled=i,e.name=n,e.value=r||""}},c=(e,t,n)=>Math.max(e,Math.min(t,n)),f=(e,t)=>{if(!e){const e="ASSERT: "+t;throw console.error(e),new Error(e)}},m=e=>e.timeStamp||Date.now(),b=e=>{const t="rtl"===document.dir;switch(e){case"start":return t;case"end":return!t;default:throw new Error(`"${e}" is not a valid value for [side]. Use "start" or "end" instead.`)}},w=(e,t)=>{const n=e._original||e;return{_original:e,emit:_(n.emit.bind(n),t)}},_=(e,t=0)=>{let n;return(...r)=>{clearTimeout(n),n=setTimeout(e,t,...r)}},p=(e,t)=>{let n;const r=e.getAttribute("aria-labelledby"),i=e.id;let a=null!==r&&""!==r.trim()?r:t+"-lbl",o=null!==r&&""!==r.trim()?document.getElementById(r):l(e);return o?(null===r&&(o.id=a),n=o.textContent,o.setAttribute("aria-hidden","true")):""!==i.trim()&&(o=document.querySelector(`label[for="${i}"]`),o&&(""!==o.id?a=o.id:o.id=a=`${i}-lbl`,n=o.textContent)),{label:o,labelId:a,labelText:n}},k=/^[a-z][a-z0-9+\-.]*:/,T=async(e,t,n)=>{if(null!=e&&"#"!==e[0]&&!k.test(e)){const r=document.querySelector("bkkr-router");if(r)return null!=t&&t.preventDefault(),r.push(e,n)}return!1};export{c as a,i as b,n as c,a as d,p as e,d as f,o as g,l as h,r as i,w as j,b as k,f as l,_ as m,u as n,T as o,m as p,s as r,e as t}