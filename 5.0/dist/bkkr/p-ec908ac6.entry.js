import{r as t,e as r,c as a,h as o,H as i,g as s}from"./p-8dfd188c.js";import{j as e}from"./p-a7b47bff.js";import{c as n}from"./p-ab391f16.js";import{g as d}from"./p-bac8255f.js";import"./p-fcb88322.js";import{createGesture as c}from"./p-e9923a82.js";import"./p-9b065740.js";import{B as l,b as m,c as b,g as h,e as p,f as k}from"./p-1ce53e04.js";import{g as f}from"./p-09b2e663.js";import{a as u,d as x}from"./p-04115f59.js";import{d as w}from"./p-07114b4a.js";const v=(t,r,a=400)=>{const o=n().addElement(t.querySelector("bkkr-backdrop")).fromTo("opacity",0,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),i=n().addElement(t.querySelectorAll(".modal-wrapper, .modal-shadow")).beforeStyles({opacity:1}).fromTo("transform","translateY(100vh)","translateY(0vh)"),s=n().addElement(t).easing("cubic-bezier(0.32,0.72,0,1)").duration(a).addAnimation(i);if(r){const t=window.innerWidth<768,a="BKKR-MODAL"===r.tagName&&void 0!==r.presentingElement,e=n().beforeStyles({transform:"translateY(0)","transform-origin":"top center",overflow:"hidden"}),d=document.body;if(t){const t=CSS.supports("width","max(0px, 1px)")?"max(30px, var(--safe-area-top))":"30px",o=`translateY(${a?"-10px":t}) scale(0.93)`;e.afterStyles({transform:o}).beforeAddWrite((()=>d.style.setProperty("background-color","black"))).addElement(r).keyframes([{offset:0,filter:"contrast(1)",transform:"translateY(0px) scale(1)",borderRadius:"0px"},{offset:1,filter:"contrast(0.85)",transform:o,borderRadius:"32px 32px 0 0"}]),s.addAnimation(e)}else if(s.addAnimation(o),a){const t=`translateY(-10px) scale(${a?.93:1})`;e.afterStyles({transform:t}).addElement(r.querySelector(".modal-wrapper")).keyframes([{offset:0,filter:"contrast(1)",transform:"translateY(0) scale(1)"},{offset:1,filter:"contrast(0.85)",transform:t}]);const o=n().afterStyles({transform:t}).addElement(r.querySelector(".modal-shadow")).keyframes([{offset:0,opacity:"1",transform:"translateY(0) scale(1)"},{offset:1,opacity:"0",transform:t}]);s.addAnimation([e,o])}else i.fromTo("opacity","0","1")}else s.addAnimation(o);return s},g=(t,r,a=400)=>{const o=n().addElement(t.querySelector("bkkr-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0),i=n().addElement(t.querySelectorAll(".modal-wrapper, .modal-shadow")).beforeStyles({opacity:1}).fromTo("transform","translateY(0vh)","translateY(100vh)"),s=n().addElement(t).easing("cubic-bezier(0.32,0.72,0,1)").duration(a).addAnimation(i);if(r){const t=window.innerWidth<768,a="BKKR-MODAL"===r.tagName&&void 0!==r.presentingElement,e=n().beforeClearStyles(["transform"]).afterClearStyles(["transform"]).onFinish((t=>{1===t&&(r.style.setProperty("overflow",""),Array.from(d.querySelectorAll("bkkr-modal")).filter((t=>void 0!==t.presentingElement)).length<=1&&d.style.setProperty("background-color",""))})),d=document.body;if(t){const t=CSS.supports("width","max(0px, 1px)")?"max(30px, var(--safe-area-top))":"30px",o=`translateY(${a?"-10px":t}) scale(0.93)`;e.addElement(r).keyframes([{offset:0,filter:"contrast(0.85)",transform:o,borderRadius:"32px 32px 0 0"},{offset:1,filter:"contrast(1)",transform:"translateY(0px) scale(1)",borderRadius:"0px"}]),s.addAnimation(e)}else if(s.addAnimation(o),a){const t=`translateY(-10px) scale(${a?.93:1})`;e.addElement(r.querySelector(".modal-wrapper")).afterStyles({transform:"translate3d(0, 0, 0)"}).keyframes([{offset:0,filter:"contrast(0.85)",transform:t},{offset:1,filter:"contrast(1)",transform:"translateY(0) scale(1)"}]);const o=n().addElement(r.querySelector(".modal-shadow")).afterStyles({transform:"translateY(0) scale(1)"}).keyframes([{offset:0,opacity:"0",transform:t},{offset:1,opacity:"1",transform:"translateY(0) scale(1)"}]);s.addAnimation([e,o])}else i.fromTo("opacity","1","0")}else s.addAnimation(o);return s},y=class{constructor(a){t(this,a),this.didPresent=r(this,"bkkrModalDidPresent",7),this.willPresent=r(this,"bkkrModalWillPresent",7),this.willDismiss=r(this,"bkkrModalWillDismiss",7),this.didDismiss=r(this,"bkkrModalDidDismiss",7),this.gestureAnimationDismissing=!1,this.presented=!1,this.keyboardClose=!0,this.backdropDismiss=!0,this.showBackdrop=!0,this.animated=!0,this.indicator=!0,this.closeButton=!0,this.swipeToClose=!0,this.presentingElement=document.querySelector("bkkr-root")||document.body,this.onBackdropTap=()=>{this.dismiss(void 0,l)},this.onDismiss=t=>{t.stopPropagation(),t.preventDefault(),this.dismiss()},this.onLifecycle=t=>{const r=this.usersElement,a=D[t.type];if(r&&a){const o=new CustomEvent(a,{bubbles:!1,cancelable:!1,detail:t.detail});r.dispatchEvent(o)}}}swipeToCloseChanged(t){this.gesture?this.gesture.enable(t):t&&this.initSwipeToClose()}connectedCallback(){m(this.el)}async present(){if(this.presented)return;const t=this.el.querySelector(".modal-wrapper-inner");if(!t)throw new Error("container is undefined");const r=Object.assign(Object.assign({},this.componentProps),{modal:this.el});this.usersElement=await u(this.delegate,t,this.component,["bkkr-page","modal-viewport"],r),await w(this.usersElement),a((()=>this.el.classList.add("show-modal"))),await b(this,v,this.presentingElement),this.swipeToClose&&this.initSwipeToClose()}initSwipeToClose(){const t=this.animation=(this.leaveAnimation||g)(this.el,this.presentingElement);this.gesture=((t,r,a)=>{const o=t.offsetHeight;let i=!1;const s=c({el:t,gestureName:"modalSwipeToClose",gesturePriority:40,direction:"y",threshold:10,canStart:async t=>{const r=t.event.target;if(null===r||!r.closest)return!0;const a=r.closest("bkkr-content");return null===a||(await a.getScrollElement()).scrollTop<=0},onStart:()=>{r.progressStart(!0,i?1:0)},onMove:t=>{const a=e(1e-4,t.deltaY/o,.9999);r.progressStep(a)},onEnd:t=>{const n=t.velocityY,c=e(1e-4,t.deltaY/o,.9999),l=(t.deltaY+1e3*n)/o>=.5;let m=l?-.001:.001;l?(r.easing("cubic-bezier(0.32, 0.72, 0, 1)"),m+=d([0,0],[.32,.72],[0,1],[1,1],c)[0]):(r.easing("cubic-bezier(1, 0, 0.68, 0.28)"),m+=d([0,0],[1,0],[.68,.28],[1,1],c)[0]);const b=((t,r)=>e(400,t/Math.abs(1.1*r),500))(l?c*o:(1-c)*o,n);i=l,s.enable(!1),r.onFinish((()=>{l||s.enable(!0)})).progressEnd(l?1:0,m,b),l&&a()}});return s})(this.el,t,(()=>{this.gestureAnimationDismissing=!0,this.animation.onFinish((async()=>{await this.dismiss(void 0,"gesture"),this.gestureAnimationDismissing=!1}))})),this.gesture.enable(!0)}async dismiss(t,r){if(this.gestureAnimationDismissing&&"gesture"!==r)return!1;const a=h.get(this)||[],o=await p(this,t,r,g,this.presentingElement);return o&&(await x(this.delegate,this.usersElement),this.animation&&this.animation.destroy(),a.forEach((t=>t.destroy()))),this.animation=void 0,o}onDidDismiss(){return k(this.el,"bkkrModalDidDismiss")}onWillDismiss(){return k(this.el,"bkkrModalWillDismiss")}render(){return o(i,{"aria-modal":"true",tabindex:"-1",class:Object.assign({"modal-card":void 0!==this.presentingElement},f(this.cssClass)),style:{zIndex:`${2e4+this.overlayIndex}`},onBkkrBackdropTap:this.onBackdropTap,onBkkrDismiss:this.onDismiss,onBkkrModalDidPresent:this.onLifecycle,onBkkrModalWillPresent:this.onLifecycle,onBkkrModalWillDismiss:this.onLifecycle,onBkkrModalDidDismiss:this.onLifecycle},o("bkkr-backdrop",{visible:this.showBackdrop,tappable:this.backdropDismiss}),o("div",{class:"modal-shadow"}),o("div",{tabindex:"0"}),o("div",{role:"dialog",class:{"modal-indicator":this.indicator,"modal-wrapper":!0}},this.indicator&&o("div",{class:"modal-indicator-wrapper state-activatable",onClick:()=>this.dismiss()},o("span",{class:"modal-indicator-bar"})),this.closeButton&&o("div",{class:"modal-indicator-button state-activatable",onClick:()=>this.dismiss()},o("bkkr-icon",{class:"indicator-icon",name:"times"})),o("div",{class:"modal-wrapper-inner"})),o("div",{tabindex:"0"}))}get el(){return s(this)}static get watchers(){return{swipeToClose:["swipeToCloseChanged"]}}},D={bkkrModalDidPresent:"bkkrViewDidEnter",bkkrModalWillPresent:"bkkrViewWillEnter",bkkrModalWillDismiss:"bkkrViewWillLeave",bkkrModalDidDismiss:"bkkrViewDidLeave"};y.style=".sc-bkkr-modal-h{--width:100%;--min-width:auto;--max-width:auto;--min-height:auto;--max-height:auto;--overflow:hidden;--border-radius:0;--border-width:0;--border-style:none;--border-color:transparent;--background:var(--bkkr-background-color);--box-shadow:0 15px 25px 0 rgba(var(--box-shadow-color, 0, 0, 0), 0.1), 0 6px 20px 0 rgba(var(--box-shadow-color, 0, 0, 0), 0.12), 0 13.2px 40px 0 rgba(var(--box-shadow-color, 0, 0, 0), 0.08);--backdrop-opacity:.4;top:0;right:0;bottom:0;left:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;contain:strict}.modal-shadow.sc-bkkr-modal,.modal-wrapper.sc-bkkr-modal{display:-ms-flexbox;display:flex;position:relative;-ms-flex-direction:column;flex-direction:column;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);-webkit-transform:translate3d(0, 100%, 0);transform:translate3d(0, 100%, 0);z-index:10}.modal-shadow.sc-bkkr-modal{border-radius:var(--border-radius);position:absolute;pointer-events:none;background:transparent;-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:var(--overflow)}.modal-wrapper-inner.sc-bkkr-modal{border-top-left-radius:var(--border-radius);border-top-right-radius:var(--border-radius);padding-top:var(--offset-top, 0);display:-ms-flexbox;display:flex;position:relative;-ms-flex:1;flex:1;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:justify;justify-content:space-between;width:100%;height:100%;border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);contain:content;overflow:var(--overflow)}bkkr-content.sc-bkkr-modal:first-child{--padding-top:0;--padding-bottom:calc(var(--bkkr-spacer, 16px) + var(--safe-area-bottom))}.modal-indicator.sc-bkkr-modal{--offset-top:24px}.modal-indicator-wrapper.sc-bkkr-modal{--indicator-height:6px;--indicator-width:64px;--indicator-color:var(--bkkr-text-color, #000);--indicator-transition:0.2s transform cubic-bezier(0.25, 1.11, 0.78, 1.59), 0.2s box-shadow cubic-bezier(0.25, 1.11, 0.78, 1.59);--indicator-transform:translate3d(0, -50%, 0);top:0;left:50%;position:absolute;width:var(--indicator-width);height:32px;-webkit-transform:translateX(-50%);transform:translateX(-50%);cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:10}.modal-indicator-wrapper.sc-bkkr-modal .modal-indicator-bar.sc-bkkr-modal{top:50%;bottom:0;left:0;border-radius:var(--indicator-height);position:absolute;width:100%;height:var(--indicator-height);-webkit-transform:var(--indicator-transform);transform:var(--indicator-transform);-webkit-transition:var(--indicator-transition);transition:var(--indicator-transition);background-color:var(--indicator-color)}.modal-indicator-button.sc-bkkr-modal{--indicator-button-backround:transparent;--indicator-button-backround-hover:rgba(var(--bkkr-text-color-rgb, 0, 0, 0), .064);--indicator-button-backround-active:rgba(var(--bkkr-text-color-rgb, 0, 0, 0), .12);--indicator-button-color:var(--bkkr-text-color, #000);--indicator-button-radius:50%;--indicator-button-transform:rotate(90deg);--indicator-button-transition:0.2s transform cubic-bezier(0.32, 0.72, 0, 1), 0.2s background cubic-bezier(0.32, 0.72, 0, 1);top:-48px;right:var(--bkkr-spacer);border-radius:var(--indicator-button-radius);display:none;position:absolute;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:36px;height:36px;-webkit-transition:var(--indicator-button-transition);transition:var(--indicator-button-transition);background:var(--indicator-button-backround);cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:10}.indicator-icon.sc-bkkr-modal{font-size:20px}@media only screen and (min-width: 768px) and (min-height: 600px){.sc-bkkr-modal-h{--width:600px;--height:500px;--safe-area-top:0px;--safe-area-bottom:0px;--safe-area-right:0px;--safe-area-left:0px}}@media only screen and (min-width: 768px) and (min-height: 768px){.sc-bkkr-modal-h{--width:600px;--height:600px}}@media screen and (max-width: 767px){@supports (width: max(0, 1px)){.modal-card.sc-bkkr-modal-h{--height:calc(100% - max(30px, var(--safe-area-top)) - 10px)}}@supports not (width: max(0, 1px)){.modal-card.sc-bkkr-modal-h{--height:calc(100% - 40px)}}.modal-card.sc-bkkr-modal-h{--border-radius:2em;--backdrop-opacity:0;--width:100%;-ms-flex-align:end;align-items:flex-end}.modal-card.sc-bkkr-modal-h .modal-shadow.sc-bkkr-modal{display:none}.modal-card.sc-bkkr-modal-h bkkr-backdrop.sc-bkkr-modal{pointer-events:none}}@media screen and (min-width: 768px){.modal-card.sc-bkkr-modal-h{--width:calc(100% - 120px);--max-width:720px;--min-height:300px;--max-height:1000px;--backdrop-opacity:0;--border-radius:2em;-webkit-transition:all 0.5s ease-in-out;transition:all 0.5s ease-in-out}.modal-card.sc-bkkr-modal-h:first-of-type{--backdrop-opacity:.18}.modal-card.sc-bkkr-modal-h .modal-wrapper-inner.sc-bkkr-modal{border-radius:var(--border-radius)}.modal-card.sc-bkkr-modal-h .modal-indicator.sc-bkkr-modal{--offset-top:0}.modal-card.sc-bkkr-modal-h .modal-indicator-wrapper.sc-bkkr-modal{display:none}.modal-card.sc-bkkr-modal-h .modal-indicator-button.sc-bkkr-modal{display:-ms-flexbox;display:flex}}@media (any-hover: hover){.modal-indicator-wrapper.sc-bkkr-modal:hover{--indicator-transform:translate3d(0, -100%, 0);--indicator-transition:0.2s transform ease-out, 0.2s box-shadow ease-out}.modal-indicator-button.sc-bkkr-modal:hover{-webkit-transform:var(--indicator-button-transform);transform:var(--indicator-button-transform);background:var(--indicator-button-backround-hover)}}.modal-indicator-button.state-activated.sc-bkkr-modal{-webkit-transform:var(--indicator-button-transform);transform:var(--indicator-button-transform);background:var(--indicator-button-backround-active)}@media (prefers-reduced-motion: reduce){.modal-indicator-bar.sc-bkkr-modal,.modal-indicator-button.sc-bkkr-modal{-webkit-transition:none;transition:none}}";export{y as bkkr_modal}