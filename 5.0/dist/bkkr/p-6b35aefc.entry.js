import{r as t,c as a,e as r,h as o,H as i,g as s}from"./p-e501253c.js";import{g as e}from"./p-c50c697b.js";import{B as n,b as d,c,g as l,e as m,f as b}from"./p-90a249ca.js";import{a as h,d as p}from"./p-7e44b543.js";import{d as k}from"./p-69f4d75d.js";import{c as f}from"./p-096ce696.js";import{g as u}from"./p-bac8255f.js";import{createGesture as x}from"./p-af97c94b.js";import{h as w,g as v}from"./p-c2089e63.js";import"./p-9b065740.js";import"./p-a0421d09.js";const g=(t,a,r=400)=>{const o=v(t),i=f().addElement(o.querySelector("bkkr-backdrop")).fromTo("opacity",0,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),s=f().addElement(o.querySelectorAll(".modal-wrapper, .modal-shadow")).beforeStyles({opacity:1}).fromTo("transform","translateY(100vh)","translateY(0vh)"),e=f().addElement(o).easing("cubic-bezier(0.32,0.72,0,1)").duration(r).addAnimation(s);if(a){const t=window.innerWidth<768,r="BKKR-MODAL"===a.tagName&&void 0!==a.presentingElement,o=v(a),n=f().beforeStyles({transform:"translateY(0)","transform-origin":"top center",overflow:"hidden"}),d=document.body;if(t){const t=CSS.supports("width","max(0px, 1px)")?"max(30px, var(--safe-area-top))":"30px",o=`translateY(${r?"-10px":t}) scale(0.93)`;n.afterStyles({transform:o}).beforeAddWrite((()=>d.style.setProperty("background-color","black"))).addElement(a).keyframes([{offset:0,filter:"contrast(1)",transform:"translateY(0px) scale(1)",borderRadius:"0px"},{offset:1,filter:"contrast(0.85)",transform:o,borderRadius:"32px 32px 0 0"}]),e.addAnimation(n)}else if(e.addAnimation(i),r){const t=`translateY(-10px) scale(${r?.93:1})`;n.afterStyles({transform:t}).addElement(o.querySelector(".modal-wrapper")).keyframes([{offset:0,filter:"contrast(1)",transform:"translateY(0) scale(1)"},{offset:1,filter:"contrast(0.85)",transform:t}]);const a=f().afterStyles({transform:t}).addElement(o.querySelector(".modal-shadow")).keyframes([{offset:0,opacity:"1",transform:"translateY(0) scale(1)"},{offset:1,opacity:"0",transform:t}]);e.addAnimation([n,a])}else s.fromTo("opacity","0","1")}else e.addAnimation(i);return e},y=(t,a,r=400)=>{const o=v(t),i=f().addElement(o.querySelector("bkkr-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0),s=f().addElement(o.querySelectorAll(".modal-wrapper, .modal-shadow")).beforeStyles({opacity:1}).fromTo("transform","translateY(0vh)","translateY(100vh)"),e=f().addElement(o).easing("cubic-bezier(0.32,0.72,0,1)").duration(r).addAnimation(s);if(a){const t=window.innerWidth<768,r="BKKR-MODAL"===a.tagName&&void 0!==a.presentingElement,o=v(a),n=f().beforeClearStyles(["transform"]).afterClearStyles(["transform"]).onFinish((t=>{1===t&&(a.style.setProperty("overflow",""),Array.from(d.querySelectorAll("bkkr-modal")).filter((t=>void 0!==t.presentingElement)).length<=1&&d.style.setProperty("background-color",""))})),d=document.body;if(t){const t=CSS.supports("width","max(0px, 1px)")?"max(30px, var(--safe-area-top))":"30px",o=`translateY(${r?"-10px":t}) scale(0.93)`;n.addElement(a).keyframes([{offset:0,filter:"contrast(0.85)",transform:o,borderRadius:"32px 32px 0 0"},{offset:1,filter:"contrast(1)",transform:"translateY(0px) scale(1)",borderRadius:"0px"}]),e.addAnimation(n)}else if(e.addAnimation(i),r){const t=`translateY(-10px) scale(${r?.93:1})`;n.addElement(o.querySelector(".modal-wrapper")).afterStyles({transform:"translate3d(0, 0, 0)"}).keyframes([{offset:0,filter:"contrast(0.85)",transform:t},{offset:1,filter:"contrast(1)",transform:"translateY(0) scale(1)"}]);const a=f().addElement(o.querySelector(".modal-shadow")).afterStyles({transform:"translateY(0) scale(1)"}).keyframes([{offset:0,opacity:"0",transform:t},{offset:1,opacity:"1",transform:"translateY(0) scale(1)"}]);e.addAnimation([n,a])}else s.fromTo("opacity","1","0")}else e.addAnimation(i);return e},D=class{constructor(r){t(this,r),this.didPresent=a(this,"bkkrModalDidPresent",7),this.willPresent=a(this,"bkkrModalWillPresent",7),this.willDismiss=a(this,"bkkrModalWillDismiss",7),this.didDismiss=a(this,"bkkrModalDidDismiss",7),this.gestureAnimationDismissing=!1,this.presented=!1,this.keyboardClose=!0,this.backdropDismiss=!0,this.showBackdrop=!0,this.animated=!0,this.indicator=!0,this.closeButton=!0,this.closeIcon="times",this.swipeToClose=!0,this.presentingElement=document.querySelector("bkkr-root")||document.body,this.onBackdropTap=()=>{this.dismiss(void 0,n)},this.onDismiss=t=>{t.stopPropagation(),t.preventDefault(),this.dismiss()},this.onLifecycle=t=>{const a=this.usersElement,r=j[t.type];if(a&&r){const o=new CustomEvent(r,{bubbles:!1,cancelable:!1,detail:t.detail});a.dispatchEvent(o)}}}swipeToCloseChanged(t){this.gesture?this.gesture.enable(t):t&&this.initSwipeToClose()}connectedCallback(){d(this.el)}async present(){if(this.presented)return;const t=this.el.querySelector(".modal-wrapper-inner");if(!t)throw new Error("container is undefined");const a=Object.assign(Object.assign({},this.componentProps),{modal:this.el});this.usersElement=await h(this.delegate,t,this.component,["bkkr-page","modal-viewport"],a),await k(this.usersElement),r((()=>this.el.classList.add("show-modal"))),await c(this,"modalEnter",g,this.presentingElement),this.swipeToClose&&this.initSwipeToClose()}initSwipeToClose(){const t=this.animation=(this.leaveAnimation||y)(this.el,this.presentingElement);this.gesture=((t,a,r)=>{const o=t.offsetHeight;let i=!1;const s=x({el:t,gestureName:"modalSwipeToClose",gesturePriority:40,direction:"y",threshold:10,canStart:async t=>{const a=t.event.target;if(null===a||!a.closest)return!0;const r=a.closest("bkkr-content");return null===r||(await r.getScrollElement()).scrollTop<=0},onStart:()=>{a.progressStart(!0,i?1:0)},onMove:t=>{const r=w(1e-4,t.deltaY/o,.9999);a.progressStep(r)},onEnd:t=>{const e=t.velocityY,n=w(1e-4,t.deltaY/o,.9999),d=(t.deltaY+1e3*e)/o>=.5;let c=d?-.001:.001;d?(a.easing("cubic-bezier(0.32, 0.72, 0, 1)"),c+=u([0,0],[.32,.72],[0,1],[1,1],n)[0]):(a.easing("cubic-bezier(1, 0, 0.68, 0.28)"),c+=u([0,0],[1,0],[.68,.28],[1,1],n)[0]);const l=((t,a)=>w(400,t/Math.abs(1.1*a),500))(d?n*o:(1-n)*o,e);i=d,s.enable(!1),a.onFinish((()=>{d||s.enable(!0)})).progressEnd(d?1:0,c,l),d&&r()}});return s})(this.el,t,(()=>{this.gestureAnimationDismissing=!0,this.animation.onFinish((async()=>{await this.dismiss(void 0,"gesture"),this.gestureAnimationDismissing=!1}))})),this.gesture.enable(!0)}async dismiss(t,a){if(this.gestureAnimationDismissing&&"gesture"!==a)return!1;const r=l.get(this)||[],o=await m(this,t,a,"modalLeave",y,this.presentingElement);return o&&(await p(this.delegate,this.usersElement),this.animation&&this.animation.destroy(),r.forEach((t=>t.destroy()))),this.animation=void 0,o}onDidDismiss(){return b(this.el,"bkkrModalDidDismiss")}onWillDismiss(){return b(this.el,"bkkrModalWillDismiss")}render(){const{closeIcon:t}=this;return o(i,{"aria-modal":"true",tabindex:"-1",class:Object.assign({"modal-card":void 0!==this.presentingElement},e(this.cssClass)),style:{zIndex:`${2e4+this.overlayIndex}`},onBkkrBackdropTap:this.onBackdropTap,onBkkrDismiss:this.onDismiss,onBkkrModalDidPresent:this.onLifecycle,onBkkrModalWillPresent:this.onLifecycle,onBkkrModalWillDismiss:this.onLifecycle,onBkkrModalDidDismiss:this.onLifecycle},o("bkkr-backdrop",{visible:this.showBackdrop,tappable:this.backdropDismiss}),o("div",{class:"modal-shadow"}),o("div",{tabindex:"0"}),o("div",{role:"dialog",class:{"modal-indicator":this.indicator,"modal-wrapper":!0}},this.indicator&&o("div",{class:"modal-indicator-wrapper state-activatable",onClick:()=>this.dismiss()},o("span",{class:"modal-indicator-bar"})),this.closeButton&&o("div",{class:"modal-indicator-button state-activatable",onClick:()=>this.dismiss()},o("bkkr-icon",{class:"indicator-icon",icon:t})),o("div",{class:"modal-wrapper-inner"})),o("div",{tabindex:"0"}))}get el(){return s(this)}static get watchers(){return{swipeToClose:["swipeToCloseChanged"]}}},j={bkkrModalDidPresent:"bkkrViewDidEnter",bkkrModalWillPresent:"bkkrViewWillEnter",bkkrModalWillDismiss:"bkkrViewWillLeave",bkkrModalDidDismiss:"bkkrViewDidLeave"};D.style=".sc-bkkr-modal-h{--width:100%;--min-width:auto;--max-width:auto;--min-height:auto;--max-height:auto;--overflow:hidden;--border-radius:0;--border-width:0;--border-style:none;--border-color:transparent;--background:var(--bkkr-background-color);--box-shadow:0 15px 25px 0 rgba(var(--box-shadow-color, 0, 0, 0), 0.1), 0 6px 20px 0 rgba(var(--box-shadow-color, 0, 0, 0), 0.12), 0 13.2px 40px 0 rgba(var(--box-shadow-color, 0, 0, 0), 0.08);--backdrop-opacity:0;top:0;right:0;bottom:0;left:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;contain:strict}.sc-bkkr-modal-h:first-of-type{--backdrop-opacity:var(--ion-backdrop-opacity, 0.4)}.modal-shadow.sc-bkkr-modal,.modal-wrapper.sc-bkkr-modal{display:-ms-flexbox;display:flex;position:relative;-ms-flex-direction:column;flex-direction:column;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);-webkit-transform:translate3d(0, 100%, 0);transform:translate3d(0, 100%, 0);will-change:opacity, transform;z-index:10}.modal-shadow.sc-bkkr-modal{border-radius:var(--border-radius);position:absolute;pointer-events:none;background:transparent;-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:var(--overflow)}.modal-wrapper-inner.sc-bkkr-modal{border-top-left-radius:var(--border-radius);border-top-right-radius:var(--border-radius);padding-top:var(--offset-top, 0);display:-ms-flexbox;display:flex;position:relative;-ms-flex:1;flex:1;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:justify;justify-content:space-between;width:100%;height:100%;border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);contain:content;overflow:var(--overflow)}bkkr-content.sc-bkkr-modal:first-child{--padding-top:0;--padding-bottom:calc(var(--bkkr-spacer, 16px) + var(--safe-area-bottom))}.modal-indicator.sc-bkkr-modal{--offset-top:24px}.modal-indicator-wrapper.sc-bkkr-modal{--indicator-height:6px;--indicator-width:64px;--indicator-color:var(--bkkr-text-color, #000);--indicator-transition:0.2s transform cubic-bezier(0.25, 1.11, 0.78, 1.59), 0.2s box-shadow cubic-bezier(0.25, 1.11, 0.78, 1.59);--indicator-transform:translate3d(0, -50%, 0);top:0;left:50%;position:absolute;width:var(--indicator-width);height:32px;-webkit-transform:translateX(-50%);transform:translateX(-50%);cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:10}.modal-indicator-wrapper.sc-bkkr-modal .modal-indicator-bar.sc-bkkr-modal{top:50%;bottom:0;left:0;border-radius:var(--indicator-height);position:absolute;width:100%;height:var(--indicator-height);-webkit-transform:var(--indicator-transform);transform:var(--indicator-transform);-webkit-transition:var(--indicator-transition);transition:var(--indicator-transition);background-color:var(--indicator-color)}.modal-indicator-button.sc-bkkr-modal{--indicator-button-backround:var(--bkkr-background-color, #fff);--indicator-button-backround-hover:var(--indicator-button-backround);--indicator-button-backround-active:var(--indicator-button-backround);--indicator-button-color:var(--bkkr-text-color, #000);--indicator-button-radius:50%;--indicator-button-transform:scale(1.1);--indicator-button-transition:0.2s transform cubic-bezier(0.32, 0.72, 0, 1), 0.2s background cubic-bezier(0.32, 0.72, 0, 1);top:-48px;right:var(--bkkr-spacer);border-radius:var(--indicator-button-radius);display:none;position:absolute;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:36px;height:36px;-webkit-transition:var(--indicator-button-transition);transition:var(--indicator-button-transition);background:var(--indicator-button-backround);color:var(--indicator-button-color);cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:10}.indicator-icon.sc-bkkr-modal{font-size:20px}@media only screen and (min-width: 768px) and (min-height: 600px){.sc-bkkr-modal-h{--width:600px;--height:500px;--safe-area-top:0px;--safe-area-bottom:0px;--safe-area-right:0px;--safe-area-left:0px}}@media only screen and (min-width: 768px) and (min-height: 768px){.sc-bkkr-modal-h{--width:600px;--height:600px}}@media screen and (max-width: 767px){@supports (width: max(0, 1px)){.modal-card.sc-bkkr-modal-h{--height:calc(100% - max(30px, var(--safe-area-top)) - 10px)}}@supports not (width: max(0, 1px)){.modal-card.sc-bkkr-modal-h{--height:calc(100% - 40px)}}.modal-card.sc-bkkr-modal-h{--border-radius:1.5em;--backdrop-opacity:0;--width:100%;-ms-flex-align:end;align-items:flex-end}.modal-card.sc-bkkr-modal-h .modal-shadow.sc-bkkr-modal{display:none}.modal-card.sc-bkkr-modal-h bkkr-backdrop.sc-bkkr-modal{pointer-events:none}}@media screen and (min-width: 768px){.modal-card.sc-bkkr-modal-h{--width:calc(100% - 120px);--max-width:720px;--min-height:300px;--max-height:1000px;--backdrop-opacity:0;--border-radius:1.5em;--box-shadow:0px 0px 30px 10px rgba(0, 0, 0, 0.1);-webkit-transition:all 0.5s ease-in-out;transition:all 0.5s ease-in-out}.modal-card.sc-bkkr-modal-h .modal-wrapper-inner.sc-bkkr-modal{border-radius:var(--border-radius)}.modal-card.sc-bkkr-modal-h .modal-indicator.sc-bkkr-modal{--offset-top:0}.modal-card.sc-bkkr-modal-h .modal-indicator-wrapper.sc-bkkr-modal{display:none}.modal-card.sc-bkkr-modal-h .modal-indicator-button.sc-bkkr-modal{display:-ms-flexbox;display:flex}.modal-card.sc-bkkr-modal-h .modal-shadow.sc-bkkr-modal{-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow)}}@media (any-hover: hover){.modal-indicator-wrapper.sc-bkkr-modal:hover{--indicator-transform:translate3d(0, -100%, 0);--indicator-transition:0.2s transform ease-out, 0.2s box-shadow ease-out}.modal-indicator-button.sc-bkkr-modal:hover{-webkit-transform:var(--indicator-button-transform);transform:var(--indicator-button-transform);background:var(--indicator-button-backround-hover)}}.modal-indicator-button.state-activated.sc-bkkr-modal{-webkit-transform:var(--indicator-button-transform);transform:var(--indicator-button-transform);background:var(--indicator-button-backround-active)}@media (prefers-reduced-motion: reduce){.modal-indicator-bar.sc-bkkr-modal,.modal-indicator-button.sc-bkkr-modal{-webkit-transition:none;transition:none}}";export{D as bkkr_modal}