const o=()=>{let o=[],c=!0;const r=document,n=e=>{o.forEach((o=>o.classList.remove(t))),e.forEach((o=>o.classList.add(t))),o=e},u=()=>{c=!1,n([])};r.addEventListener("keydown",(o=>{c=s.includes(o.key),c||n([])})),r.addEventListener("focusin",(o=>{if(c&&o.composedPath){const t=o.composedPath().filter((o=>!!o.classList&&o.classList.contains(e)));n(t)}})),r.addEventListener("focusout",(()=>{r.activeElement===r.body&&n([])})),r.addEventListener("touchstart",u),r.addEventListener("mousedown",u)},t="state-focused",e="state-focusable",s=["Tab","ArrowDown","Space","Escape"," ","Shift","Enter","ArrowLeft","ArrowRight","ArrowUp"];export{o as handleFocus}