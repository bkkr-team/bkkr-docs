export{c as createAnimation}from"./p-3ac671b5.js";export{g as getTimeGivenProgression}from"./p-dfea2885.js";export{createGesture}from"./p-947c14e3.js";import{s as e}from"./p-900e5a2b.js";import{s as r}from"./p-da405c7e.js";import{c as o,a as s,b as n,s as i}from"./p-257b1818.js";import{a as f,r as j,b as k}from"./p-d56ecf06.js";export{c as componentOnReady}from"./p-d56ecf06.js";export{S as SafeString}from"./p-a7ac77cc.js";export{a as LIFECYCLE_DID_ENTER,c as LIFECYCLE_DID_LEAVE,L as LIFECYCLE_WILL_ENTER,b as LIFECYCLE_WILL_LEAVE,d as LIFECYCLE_WILL_UNLOAD}from"./p-9b065740.js";export{m as menuController}from"./p-71f234de.js";export{a as alertController,d as drawerController,l as loadingController,m as modalController,p as popoverController,t as toastController}from"./p-54727ac4.js";import"./p-2263719e.js";const C=(t={})=>{if("undefined"==typeof window)return;const a=window;Context.config=o;const p=a.Bkkr=a.Bkkr||{},l={};t._ael&&(l.ael=t._ael),t._rel&&(l.rel=t._rel),t._ce&&(l.ce=t._ce),e(l);const c=Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},s(a)),{persistConfig:!1}),p.config),n(a)),t);o.reset(c),o.getBoolean("persistConfig")&&i(a,c),r(a),p.config=o,o.getBoolean("_testing")&&o.set("animated",!1)},u=e=>{const r=window,t=r.Bkkr;if(!t||!t.config||"Object"===t.config.constructor.name)return r.Bkkr=r.Bkkr||{},r.Bkkr.config=Object.assign(Object.assign({},r.Bkkr.config),e),r.Bkkr.config},E=(e,r=!0)=>{if("undefined"==typeof window)return;const t=e.el,o=t.closest(".bkkr-page");if(!o){if(r){const r=t.getRootNode();if("DIV"===r.tagName){const t=new MutationObserver((o=>{const s=null===o[0].oldValue,a=r.classList.contains("bkkr-page");s&&a&&(t.disconnect(),E(e,!1))}));t.observe(r,{attributeFilter:["class"],attributeOldValue:!0})}}return}const s=t.closest("bkkr-modal, bkkr-drawer, bkkr-popover");if(s){const e="BKKR-MODAL"===s.tagName?"bkkrModalWillPresent":"bkkrDrawerWillPresent",r=()=>{j((()=>{t.swiper.update(),k(s,e,r)}))};f(s,e,r)}else new MutationObserver((e=>{var r;const s=null===(r=e[0].oldValue)||void 0===r?void 0:r.includes("bkkr-page-invisible"),a=o.classList.contains("bkkr-page-invisible");a||a===s||t.swiper.update()})).observe(o,{attributeFilter:["class"],attributeOldValue:!0});const a=()=>{t.swiper.update(),k(window,"appload",a)};f(window,"appload",a)},w={name:"bkkr",on:{afterInit(e){E(e)}}};export{w as BkkrSwiper,C as initialize,u as setupConfig}