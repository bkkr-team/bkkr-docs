import{p as t}from"./p-8bf53d8d.js";const e=()=>{let e,s,u,l=10*-n,d=0;const v=new WeakMap,f=e=>{l=t(e),k()},m=()=>{clearTimeout(u),u=void 0,s&&(h(!1),s=void 0)},b=t=>{s||void 0!==e&&null!==e.parentElement||(e=void 0,p(o(t)))},k=()=>{p(void 0)},p=t=>{if(!t||t!==s){if(clearTimeout(u),u=void 0,s){if(v.has(s))throw new Error("internal error");s.classList.contains(a)||T(s),h(!0)}if(t){const e=v.get(t);e&&(clearTimeout(e),v.delete(t));const o=r(t)?0:i;t.classList.remove(a),u=setTimeout((()=>{T(t),u=void 0}),o)}s=t}},T=t=>{d=Date.now(),t.classList.add(a)},h=t=>{const e=s;if(!e)return;const o=c-Date.now()+d;if(t&&o>0&&!r(e)){const t=setTimeout((()=>{e.classList.remove(a),v.delete(e)}),c);v.set(e,t)}else e.classList.remove(a)},w=document;w.addEventListener("bkkrScrollStart",(t=>{e=t.target,m()})),w.addEventListener("bkkrScrollEnd",(()=>{e=void 0})),w.addEventListener("bkkrGestureCaptured",m),w.addEventListener("touchstart",(e=>{l=t(e),b(e)}),!0),w.addEventListener("touchcancel",f,!0),w.addEventListener("touchend",f,!0),w.addEventListener("mousedown",(e=>{const o=t(e)-n;l<o&&b(e)}),!0),w.addEventListener("mouseup",(e=>{const o=t(e)-n;l<o&&k()}),!0)},o=t=>{if(!t.composedPath)return t.target.closest(".state-activatable");{const e=t.composedPath();for(let t=0;t<e.length-2;t++){const o=e[t];if(o.classList&&o.classList.contains("state-activatable"))return o}}},r=t=>t.classList.contains("state-activatable-instant"),a="state-activated",i=100,c=100,n=2500;export{e as handleClick}