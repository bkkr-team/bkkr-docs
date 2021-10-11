/*!
 * (C) BKKR Framework https://bkkr-team.github.io/bkkr-docs/ - MIT License
 */
export{c as createAnimation}from"./p-177c1201.js";export{g as getTimeGivenProgression}from"./p-87969847.js";export{createGesture}from"./p-b4206503.js";import{s as r}from"./p-08349d90.js";import{s as e}from"./p-61de5cff.js";import{c as o,a as s,b as n,s as i}from"./p-6a36e565.js";import{a as f,r as j,b as k}from"./p-7b48497a.js";export{c as componentOnReady}from"./p-7b48497a.js";export{S as SafeString}from"./p-464a016b.js";export{a as LIFECYCLE_DID_ENTER,c as LIFECYCLE_DID_LEAVE,L as LIFECYCLE_WILL_ENTER,b as LIFECYCLE_WILL_LEAVE,d as LIFECYCLE_WILL_UNLOAD}from"./p-d7a8dd59.js";export{m as menuController}from"./p-a534f355.js";export{a as alertController,d as drawerController,l as loadingController,m as modalController,p as popoverController,t as toastController}from"./p-c86d93c3.js";import"./p-f081b157.js";const C=(t={})=>{if("undefined"==typeof window)return;const a=window;Context.config=o;const p=a.Bkkr=a.Bkkr||{},l={};t._ael&&(l.ael=t._ael),t._rel&&(l.rel=t._rel),t._ce&&(l.ce=t._ce),r(l);const b=Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},s(a)),{persistConfig:!1}),p.config),n(a)),t);o.reset(b),o.getBoolean("persistConfig")&&i(a,b),e(a),p.config=o,o.getBoolean("_testing")&&o.set("animated",!1)},u=r=>{const e=window,t=e.Bkkr;if(!t||!t.config||"Object"===t.config.constructor.name)return e.Bkkr=e.Bkkr||{},e.Bkkr.config=Object.assign(Object.assign({},e.Bkkr.config),r),e.Bkkr.config},E=(r,e=!0)=>{if("undefined"==typeof window)return;const t=r.el,o=t.closest(".bkkr-page");if(!o){if(e){const e=t.getRootNode();if("DIV"===e.tagName){const t=new MutationObserver((o=>{const s=null===o[0].oldValue,a=e.classList.contains("bkkr-page");s&&a&&(t.disconnect(),E(r,!1))}));t.observe(e,{attributeFilter:["class"],attributeOldValue:!0})}}return}const s=t.closest("bkkr-modal, bkkr-drawer, bkkr-popover");if(s){const r="BKKR-MODAL"===s.tagName?"bkkrModalWillPresent":"bkkrDrawerWillPresent",e=()=>{j((()=>{t.swiper.update(),k(s,r,e)}))};f(s,r,e)}else new MutationObserver((r=>{var e;const s=null===(e=r[0].oldValue)||void 0===e?void 0:e.includes("bkkr-page-invisible"),a=o.classList.contains("bkkr-page-invisible");a||a===s||t.swiper.update()})).observe(o,{attributeFilter:["class"],attributeOldValue:!0});const a=()=>{t.swiper.update(),k(window,"appload",a)};f(window,"appload",a)},w={name:"bkkr",on:{afterInit(r){E(r)}}};export{w as BkkrSwiper,C as initialize,u as setupConfig}