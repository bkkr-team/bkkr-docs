/*!
 * (C) BKKR Framework https://bkkr-team.github.io/bkkr-docs/ - MIT License
 */
import{c as e}from"./p-bf8dbf30.js";const t=async(t,r,o,n,s,i)=>{if(t)return t.attachViewToDom(r,o,s,n);if(!(i||"string"==typeof o||o instanceof HTMLElement))throw new Error("framework delegate is missing");const a="string"==typeof o?r.ownerDocument&&r.ownerDocument.createElement(o):o;return n&&n.forEach((e=>a.classList.add(e))),s&&Object.assign(a,s),r.appendChild(a),await new Promise((t=>e(a,t))),a},r=(e,t)=>{if(t){if(e)return e.removeViewFromDom(t.parentElement,t);t.remove()}return Promise.resolve()},o=()=>{let t,r;return{attachViewToDom:async(o,n,s={},i=[])=>{if(t=o,n){const r="string"==typeof n?t.ownerDocument&&t.ownerDocument.createElement(n):n;i.forEach((e=>r.classList.add(e))),Object.assign(r,s),t.appendChild(r),await new Promise((t=>e(r,t)))}const a=document.querySelector("bkkr-root")||document.body;return r=document.createComment("bkkr teleport"),t.parentNode.insertBefore(r,t),a.appendChild(t),t},removeViewFromDom:()=>(t&&r&&(r.parentNode.insertBefore(t,r),r.remove()),Promise.resolve())}};export{o as C,t as a,r as d}