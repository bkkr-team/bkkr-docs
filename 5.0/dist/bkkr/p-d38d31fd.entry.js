import{r as t,e as a,c as r,h as o,H as s,g as i}from"./p-8dbe4215.js";import{e}from"./p-3faaa6d8.js";import{c as n}from"./p-2862b1df.js";import{g as d}from"./p-bac8255f.js";import"./p-fcb88322.js";import{createGesture as l}from"./p-950254e0.js";import"./p-9b065740.js";import{B as c,b as h,c as m,g as p,e as b,f as k}from"./p-fc007598.js";import{g as f}from"./p-09b2e663.js";import{a as x,d as w}from"./p-04115f59.js";import{d as u}from"./p-b3dd0ddb.js";const v=(t,a)=>{const r=n().addElement(t.querySelector("bkkr-backdrop")).fromTo("opacity",0,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),o=n().addElement(t.querySelectorAll(".modal-wrapper, .modal-shadow")).beforeStyles({opacity:1}).fromTo("transform","translateY(100vh)","translateY(0vh)"),s=n().addElement(t).easing("cubic-bezier(0.32,0.72,0,1)").duration(500).addAnimation(o);if(a){const t=window.innerWidth<768,i="BKKR-MODAL"===a.tagName&&void 0!==a.presentingElement,e=n().beforeStyles({transform:"translateY(0)","transform-origin":"top center",overflow:"hidden"}),d=document.body;if(t){const t=CSS.supports("width","max(0px, 1px)")?"max(30px, var(--safe-area-top))":"30px",r=`translateY(${i?"-10px":t}) scale(0.93)`;e.afterStyles({transform:r}).beforeAddWrite((()=>d.style.setProperty("background-color","black"))).addElement(a).keyframes([{offset:0,filter:"contrast(1)",transform:"translateY(0px) scale(1)",borderRadius:"0px"},{offset:1,filter:"contrast(0.85)",transform:r,borderRadius:"32px 32px 0 0"}]),s.addAnimation(e)}else if(s.addAnimation(r),i){const t=`translateY(-10px) scale(${i?.93:1})`;e.afterStyles({transform:t}).addElement(a.querySelector(".modal-wrapper")).keyframes([{offset:0,filter:"contrast(1)",transform:"translateY(0) scale(1)"},{offset:1,filter:"contrast(0.85)",transform:t}]);const r=n().afterStyles({transform:t}).addElement(a.querySelector(".modal-shadow")).keyframes([{offset:0,opacity:"1",transform:"translateY(0) scale(1)"},{offset:1,opacity:"0",transform:t}]);s.addAnimation([e,r])}else o.fromTo("opacity","0","1")}else s.addAnimation(r);return s},g=(t,a,r=500)=>{const o=n().addElement(t.querySelector("bkkr-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0),s=n().addElement(t.querySelectorAll(".modal-wrapper, .modal-shadow")).beforeStyles({opacity:1}).fromTo("transform","translateY(0vh)","translateY(100vh)"),i=n().addElement(t).easing("cubic-bezier(0.32,0.72,0,1)").duration(r).addAnimation(s);if(a){const t=window.innerWidth<768,r="BKKR-MODAL"===a.tagName&&void 0!==a.presentingElement,e=n().beforeClearStyles(["transform"]).afterClearStyles(["transform"]).onFinish((t=>{1===t&&(a.style.setProperty("overflow",""),Array.from(d.querySelectorAll("bkkr-modal")).filter((t=>void 0!==t.presentingElement)).length<=1&&d.style.setProperty("background-color",""))})),d=document.body;if(t){const t=CSS.supports("width","max(0px, 1px)")?"max(30px, var(--safe-area-top))":"30px",o=`translateY(${r?"-10px":t}) scale(0.93)`;e.addElement(a).keyframes([{offset:0,filter:"contrast(0.85)",transform:o,borderRadius:"32px 32px 0 0"},{offset:1,filter:"contrast(1)",transform:"translateY(0px) scale(1)",borderRadius:"0px"}]),i.addAnimation(e)}else if(i.addAnimation(o),r){const t=`translateY(-10px) scale(${r?.93:1})`;e.addElement(a.querySelector(".modal-wrapper")).afterStyles({transform:"translate3d(0, 0, 0)"}).keyframes([{offset:0,filter:"contrast(0.85)",transform:t},{offset:1,filter:"contrast(1)",transform:"translateY(0) scale(1)"}]);const o=n().addElement(a.querySelector(".modal-shadow")).afterStyles({transform:"translateY(0) scale(1)"}).keyframes([{offset:0,opacity:"0",transform:t},{offset:1,opacity:"1",transform:"translateY(0) scale(1)"}]);i.addAnimation([e,o])}else s.fromTo("opacity","1","0")}else i.addAnimation(o);return i},y=class{constructor(r){t(this,r),this.didPresent=a(this,"bkkrModalDidPresent",7),this.willPresent=a(this,"bkkrModalWillPresent",7),this.willDismiss=a(this,"bkkrModalWillDismiss",7),this.didDismiss=a(this,"bkkrModalDidDismiss",7),this.gestureAnimationDismissing=!1,this.presented=!1,this.keyboardClose=!0,this.backdropDismiss=!0,this.showBackdrop=!0,this.animated=!0,this.indicator=!0,this.swipeToClose=!0,this.presentingElement=document.querySelector("bkkr-root")||document.body,this.onBackdropTap=()=>{this.dismiss(void 0,c)},this.onDismiss=t=>{t.stopPropagation(),t.preventDefault(),this.dismiss()},this.onLifecycle=t=>{const a=this.usersElement,r=D[t.type];if(a&&r){const o=new CustomEvent(r,{bubbles:!1,cancelable:!1,detail:t.detail});a.dispatchEvent(o)}}}swipeToCloseChanged(t){this.gesture?this.gesture.enable(t):t&&this.initSwipeToClose()}connectedCallback(){h(this.el)}async present(){if(this.presented)return;const t=this.el.querySelector(".modal-wrapper");if(!t)throw new Error("container is undefined");const a=Object.assign(Object.assign({},this.componentProps),{modal:this.el});this.usersElement=await x(this.delegate,t,this.component,["bkkr-page","modal-viewport"],a),await u(this.usersElement),r((()=>this.el.classList.add("show-modal"))),await m(this,v,this.presentingElement),this.swipeToClose&&this.initSwipeToClose()}initSwipeToClose(){const t=this.animation=(this.leaveAnimation||g)(this.el,this.presentingElement);this.gesture=((t,a,r)=>{const o=t.offsetHeight;let s=!1;const i=l({el:t,gestureName:"modalSwipeToClose",gesturePriority:40,direction:"y",threshold:10,canStart:async t=>{const a=t.event.target;if(null===a||!a.closest)return!0;const r=a.closest("bkkr-content");return null===r||(await r.getScrollElement()).scrollTop<=0},onStart:()=>{a.progressStart(!0,s?1:0)},onMove:t=>{const r=e(1e-4,t.deltaY/o,.9999);a.progressStep(r)},onEnd:t=>{const n=t.velocityY,l=e(1e-4,t.deltaY/o,.9999),c=(t.deltaY+1e3*n)/o>=.5;let h=c?-.001:.001;c?(a.easing("cubic-bezier(0.32, 0.72, 0, 1)"),h+=d([0,0],[.32,.72],[0,1],[1,1],l)[0]):(a.easing("cubic-bezier(1, 0, 0.68, 0.28)"),h+=d([0,0],[1,0],[.68,.28],[1,1],l)[0]);const m=((t,a)=>e(400,t/Math.abs(1.1*a),500))(c?l*o:(1-l)*o,n);s=c,i.enable(!1),a.onFinish((()=>{c||i.enable(!0)})).progressEnd(c?1:0,h,m),c&&r()}});return i})(this.el,t,(()=>{this.gestureAnimationDismissing=!0,this.animation.onFinish((async()=>{await this.dismiss(void 0,"gesture"),this.gestureAnimationDismissing=!1}))})),this.gesture.enable(!0)}async dismiss(t,a){if(this.gestureAnimationDismissing&&"gesture"!==a)return!1;const r=p.get(this)||[],o=await b(this,t,a,g,this.presentingElement);return o&&(await w(this.delegate,this.usersElement),this.animation&&this.animation.destroy(),r.forEach((t=>t.destroy()))),this.animation=void 0,o}onDidDismiss(){return k(this.el,"bkkrModalDidDismiss")}onWillDismiss(){return k(this.el,"bkkrModalWillDismiss")}render(){return o(s,{"aria-modal":"true",tabindex:"-1",class:Object.assign({"modal-card":void 0!==this.presentingElement},f(this.cssClass)),style:{zIndex:""+(2e4+this.overlayIndex)},onBkkrBackdropTap:this.onBackdropTap,onBkkrDismiss:this.onDismiss,onBkkrModalDidPresent:this.onLifecycle,onBkkrModalWillPresent:this.onLifecycle,onBkkrModalWillDismiss:this.onLifecycle,onBkkrModalDidDismiss:this.onLifecycle},o("bkkr-backdrop",{visible:this.showBackdrop,tappable:this.backdropDismiss}),o("div",{class:"modal-shadow"}),o("div",{tabindex:"0"}),o("div",{role:"dialog",class:{"modal-indicator":this.indicator,"modal-wrapper":!0}},this.indicator&&o("div",{class:"modal-indicator-wrapper state-activatable",onClick:()=>this.dismiss()},o("span",{class:"modal-indicator-bar"}))),o("div",{tabindex:"0"}))}get el(){return i(this)}static get watchers(){return{swipeToClose:["swipeToCloseChanged"]}}},D={bkkrModalDidPresent:"bkkrViewDidEnter",bkkrModalWillPresent:"bkkrViewWillEnter",bkkrModalWillDismiss:"bkkrViewWillLeave",bkkrModalDidDismiss:"bkkrViewDidLeave"};y.style=".sc-bkkr-modal-h{--width:100%;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--overflow:hidden;--border-radius:0;--border-width:0;--border-style:none;--border-color:transparent;--background:var(--bkkr-background-color);--box-shadow:0 15px 25px 0 rgba(var(--box-shadow-color, var(--bkkr-text-color-rgb, 0, 0, 0)), 0.1), 0 6px 20px 0 rgba(var(--box-shadow-color, var(--bkkr-text-color-rgb, 0, 0, 0)), 0.12), 0 13.2px 40px 0 rgba(var(--box-shadow-color, var(--bkkr-text-color-rgb, 0, 0, 0)), 0.08);--backdrop-opacity:.4;top:0;right:0;bottom:0;left:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;contain:strict}.modal-shadow.sc-bkkr-modal,.modal-wrapper.sc-bkkr-modal{border-radius:var(--border-radius);display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:justify;justify-content:space-between;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);-webkit-transform:translate3d(0, 100%, 0);transform:translate3d(0, 100%, 0);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);overflow:var(--overflow);z-index:10}.modal-shadow.sc-bkkr-modal{position:absolute;background:transparent;-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);pointer-events:none}@media only screen and (min-width: 768px) and (min-height: 600px){.sc-bkkr-modal-h{--width:600px;--height:500px;--safe-area-top:0px;--safe-area-bottom:0px;--safe-area-right:0px;--safe-area-left:0px}}@media only screen and (min-width: 768px) and (min-height: 768px){.sc-bkkr-modal-h{--width:600px;--height:600px}}@media screen and (max-width: 767px){@supports (width: max(0, 1px)){.modal-card.sc-bkkr-modal-h{--height:calc(100% - max(30px, var(--safe-area-top)) - 10px)}}@supports not (width: max(0, 1px)){.modal-card.sc-bkkr-modal-h{--height:calc(100% - 40px)}}.modal-card.sc-bkkr-modal-h .modal-wrapper.sc-bkkr-modal{border-top-left-radius:2em;border-top-right-radius:2em}.modal-card.sc-bkkr-modal-h{--backdrop-opacity:0;--width:100%;-ms-flex-align:end;align-items:flex-end}.modal-card.sc-bkkr-modal-h .modal-shadow.sc-bkkr-modal{display:none}.modal-card.sc-bkkr-modal-h bkkr-backdrop.sc-bkkr-modal{pointer-events:none}}@media screen and (min-width: 768px){.modal-card.sc-bkkr-modal-h{--width:calc(100% - 120px);--height:calc(100% - (120px + var(--safe-area-top) + var(--safe-area-bottom)));--max-width:720px;--max-height:1000px;--backdrop-opacity:0;--border-radius:2em;-webkit-transition:all 0.5s ease-in-out;transition:all 0.5s ease-in-out}.modal-card.sc-bkkr-modal-h:first-of-type{--backdrop-opacity:.18}}.modal-indicator-wrapper.sc-bkkr-modal{--indicator-height:6px;--indicator-width:16%;--indicator-color:var(--bkkr-text-color, #000);--indicator-transition:0.2s transform cubic-bezier(0.25, 1.11, 0.78, 1.59), 0.2s box-shadow cubic-bezier(0.25, 1.11, 0.78, 1.59);--indicator-transform:translate3d(0, -50%, 0);top:0;left:50%;position:absolute;width:var(--indicator-width);height:32px;-webkit-transform:translateX(-50%);transform:translateX(-50%);cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:10}.modal-indicator-wrapper.sc-bkkr-modal .modal-indicator-bar.sc-bkkr-modal{top:50%;bottom:0;left:0;border-radius:var(--indicator-height);position:absolute;width:100%;height:var(--indicator-height);-webkit-transform:var(--indicator-transform);transform:var(--indicator-transform);-webkit-transition:var(--indicator-transition);transition:var(--indicator-transition);background-color:var(--indicator-color)}@media (any-hover: hover){.modal-indicator-wrapper.sc-bkkr-modal:hover{--indicator-transform:translate3d(0, -100%, 0);--indicator-transition:0.2s transform ease-out, 0.2s box-shadow ease-out}}@media (prefers-reduced-motion: reduce){.modal-indicator-bar.sc-bkkr-modal{-webkit-transition:none;transition:none}}";export{y as bkkr_modal}