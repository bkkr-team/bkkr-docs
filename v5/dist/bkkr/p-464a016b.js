/*!
 * (C) BKKR Framework https://bkkr-team.github.io/bkkr-docs/ - MIT License
 */
const t=t=>{try{if(t instanceof e)return t.value;if("string"!=typeof t||""===t)return t;const s=document.createDocumentFragment(),r=document.createElement("div");s.appendChild(r),r.innerHTML=t,c.forEach((t=>{const c=s.querySelectorAll(t);for(let t=c.length-1;t>=0;t--){const e=c[t];e.parentNode?e.parentNode.removeChild(e):s.removeChild(e);const r=o(e);for(let t=0;t<r.length;t++)n(r[t])}}));const l=o(s);for(let t=0;t<l.length;t++)n(l[t]);const i=document.createElement("div");i.appendChild(s);const f=i.querySelector("div");return null!==f?f.innerHTML:i.innerHTML}catch(t){return console.error(t),""}},n=t=>{if(t.nodeType&&1!==t.nodeType)return;for(let n=t.attributes.length-1;n>=0;n--){const o=t.attributes.item(n),c=o.name;if(!s.includes(c.toLowerCase())){t.removeAttribute(c);continue}const e=o.value;null!=e&&e.toLowerCase().includes("javascript:")&&t.removeAttribute(c)}const c=o(t);for(let t=0;t<c.length;t++)n(c[t])},o=t=>null!=t.children?t.children:t.childNodes,s=["class","id","href","src","name","slot"],c=["script","style","iframe","meta","link","object","embed"];class e{constructor(t){this.value=t}}export{e as S,t as s}