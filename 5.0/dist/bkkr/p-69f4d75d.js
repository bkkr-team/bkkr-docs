import{e as a}from"./p-e501253c.js";import{b as i,L as s,a as e,c as n}from"./p-9b065740.js";import{c as o}from"./p-c2089e63.js";const r=i=>new Promise(((s,e)=>{a((()=>{t(i),c(i).then((a=>{a.animation&&a.animation.destroy(),d(i),s(a)}),(a=>{d(i),e(a)}))}))})),t=a=>{const i=a.enteringEl,s=a.leavingEl;y(i,s,a.direction),f(i,!1),s&&f(s,!1)},c=async a=>b(a),d=a=>{const i=a.leavingEl;a.enteringEl.classList.remove("bkkr-page-invisible"),void 0!==i&&i.classList.remove("bkkr-page-invisible")},b=async a=>{const i=a.enteringEl,s=a.leavingEl;return await m(a,!1),l(i,s),k(i,s),{hasCompleted:!0}},m=async(a,i)=>{const s=(void 0!==a.deepWait?a.deepWait:i)?[v(a.enteringEl),v(a.leavingEl)]:[u(a.enteringEl),u(a.leavingEl)];await Promise.all(s),await p(a.viewIsReady,a.enteringEl)},p=async(a,i)=>{a&&await a(i)},l=(a,e)=>{w(e,i),w(a,s)},k=(a,i)=>{w(a,e),w(i,n)},w=(a,i)=>{if(a){const s=new CustomEvent(i,{bubbles:!1,cancelable:!1});a.dispatchEvent(s)}},u=a=>a?new Promise((i=>o(a,i))):Promise.resolve(),v=async a=>{const i=a;if(i){if(null!=i.componentOnReady&&null!=await i.componentOnReady())return;await Promise.all(Array.from(i.children).map(v))}},f=(a,i)=>{i?(a.setAttribute("aria-hidden","true"),a.classList.add("bkkr-page-hidden")):(a.hidden=!1,a.removeAttribute("aria-hidden"),a.classList.remove("bkkr-page-hidden"))},y=(a,i,s)=>{void 0!==a&&(a.style.zIndex="back"===s?"99":"101"),void 0!==i&&(i.style.zIndex="100")};export{v as d,r as t}