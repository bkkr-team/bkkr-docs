/*!
 * (C) BKKR Framework https://bkkr-team.github.io/bkkr-docs/ - MIT License
 */
class t{constructor(){this.m=new Map}reset(t){this.m=new Map(Object.entries(t))}get(t,e){const r=this.m.get(t);return void 0!==r?r:e}getBoolean(t,e=!1){const r=this.m.get(t);return void 0===r?e:"string"==typeof r?"true"===r:!!r}getNumber(t,e){const r=parseFloat(this.m.get(t));return isNaN(r)?void 0!==e?e:NaN:r}set(t,e){this.m.set(t,e)}}const e=new t,r=t=>{try{const e=t.sessionStorage.getItem(a);return null!==e?JSON.parse(e):{}}catch(t){return{}}},s=(t,e)=>{try{t.sessionStorage.setItem(a,JSON.stringify(e))}catch(t){return}},n=t=>{const e={};return t.location.search.slice(1).split("&").map((t=>t.split("="))).map((([t,e])=>[decodeURIComponent(t),decodeURIComponent(e)])).filter((([t])=>o(t,c))).map((([t,e])=>[t.slice(c.length),e])).forEach((([t,r])=>{e[t]=r})),e},o=(t,e)=>t.substr(0,e.length)===e,c="bkkr:",a="bkkr-persist-config";export{n as a,e as b,r as c,s}