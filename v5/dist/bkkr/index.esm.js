export{c as createAnimation}from"./p-096ce696.js";export{g as getTimeGivenProgression}from"./p-bac8255f.js";export{createGesture}from"./p-2cd93b5c.js";import{a as r,r as e,b as o}from"./p-c2089e63.js";export{c as componentOnReady}from"./p-c2089e63.js";export{S as SafeString}from"./p-70b25770.js";export{a as LIFECYCLE_DID_ENTER,c as LIFECYCLE_DID_LEAVE,L as LIFECYCLE_WILL_ENTER,b as LIFECYCLE_WILL_LEAVE,d as LIFECYCLE_WILL_UNLOAD}from"./p-9b065740.js";export{m as menuController}from"./p-7fd35ff0.js";export{a as alertController,d as drawerController,l as loadingController,m as modalController,p as popoverController,t as toastController}from"./p-792ad557.js";import"./p-a0421d09.js";import"./p-049a2213.js";const s=r=>{const e=window,o=e.Bkkr;if(!o||!o.config||"Object"===o.config.constructor.name)return e.Bkkr=e.Bkkr||{},e.Bkkr.config=Object.assign(Object.assign({},e.Bkkr.config),r),e.Bkkr.config;console.error("bkkr config was already initialized")},n=(t,a=!0)=>{if("undefined"==typeof window)return;const s=t.el,i=s.closest(".bkkr-page");if(!i){if(a){const r=s.getRootNode();if("DIV"===r.tagName){const e=new MutationObserver((o=>{const a=null===o[0].oldValue,s=r.classList.contains("bkkr-page");a&&s&&(e.disconnect(),n(t,!1))}));e.observe(r,{attributeFilter:["class"],attributeOldValue:!0})}}return}const l=s.closest("bkkr-modal, bkkr-drawer, bkkr-popover");if(l){const t="BKKR-MODAL"===l.tagName?"bkkrModalWillPresent":"bkkrDrawerWillPresent",a=()=>{e((()=>{s.swiper.update(),o(l,t,a)}))};r(l,t,a)}else new MutationObserver((r=>{var e;const o=null===(e=r[0].oldValue)||void 0===e?void 0:e.includes("bkkr-page-invisible"),t=i.classList.contains("bkkr-page-invisible");t||t===o||s.swiper.update()})).observe(i,{attributeFilter:["class"],attributeOldValue:!0});const p=()=>{s.swiper.update(),o(window,"appload",p)};r(window,"appload",p)},i={name:"bkkr",on:{afterInit(r){n(r)}}};export{i as BkkrSwiper,s as setupConfig}