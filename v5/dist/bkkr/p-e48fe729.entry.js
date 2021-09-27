import{r as t,c as a,a as r,h as e,H as o,g as s}from"./p-a3958a94.js";import{g as i}from"./p-c50c697b.js";import{B as n,b as d,c as l,g as h,e as c,f as p}from"./p-792ad557.js";import{C as m,a as b,d as f}from"./p-7e44b543.js";import{d as u}from"./p-15e66705.js";import{c as k}from"./p-096ce696.js";import{g as x}from"./p-bac8255f.js";import{createGesture as w}from"./p-2cd93b5c.js";import{h as v,g,r as y}from"./p-c2089e63.js";import"./p-049a2213.js";import"./p-9b065740.js";import"./p-a0421d09.js";const D=(t,a,r=400)=>{const e=g(t),o=k().addElement(e.querySelector("bkkr-backdrop")).fromTo("opacity",0,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),s=k().addElement(e.querySelectorAll(".modal-wrapper, .modal-shadow")).beforeStyles({opacity:1}).fromTo("transform","translateY(100vh)","translateY(0vh)"),i=k().addElement(t).easing("cubic-bezier(0.32,0.72,0,1)").duration(r).addAnimation(s);if(a){const t=window.innerWidth<768,r="BKKR-MODAL"===a.tagName&&void 0!==a.presentingElement,e=g(a),n=k().beforeStyles({transform:"translateY(0)","transform-origin":"top center",overflow:"hidden"});if(t){const t=CSS.supports("width","max(0px, 1px)")?"max(30px, var(--safe-area-top))":"30px",e=`translateY(${r?"-10px":t}) scale(0.93)`;n.afterStyles({transform:e}).addElement(a).keyframes([{offset:0,filter:"contrast(1)",transform:"translateY(0px) scale(1)",borderRadius:"0px"},{offset:1,filter:"contrast(0.85)",transform:e,borderRadius:"32px 32px 0 0"}]),i.addAnimation(n)}else if(i.addAnimation(o),r){const t=`translateY(-10px) scale(${r?.93:1})`;n.afterStyles({transform:t}).addElement(e.querySelector(".modal-wrapper")).keyframes([{offset:0,filter:"contrast(1)",transform:"translateY(0) scale(1)"},{offset:1,filter:"contrast(0.85)",transform:t}]);const a=k().afterStyles({transform:t}).addElement(e.querySelector(".modal-shadow")).keyframes([{offset:0,opacity:"1",transform:"translateY(0) scale(1)"},{offset:1,opacity:"0",transform:t}]);i.addAnimation([n,a])}else s.fromTo("opacity","0","1")}else i.addAnimation(o);return i},j=(t,a,r=400)=>{const e=g(t),o=k().addElement(e.querySelector("bkkr-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0),s=k().addElement(e.querySelectorAll(".modal-wrapper, .modal-shadow")).beforeStyles({opacity:1}).fromTo("transform","translateY(0vh)","translateY(100vh)"),i=k().addElement(t).easing("cubic-bezier(0.32,0.72,0,1)").duration(r).addAnimation(s);if(a){const t=window.innerWidth<768,r="BKKR-MODAL"===a.tagName&&void 0!==a.presentingElement,e=g(a),n=k().beforeClearStyles(["transform"]).afterClearStyles(["transform"]).onFinish((t=>{1===t&&a.style.setProperty("overflow","")}));if(t){const t=CSS.supports("width","max(0px, 1px)")?"max(30px, var(--safe-area-top))":"30px",e=`translateY(${r?"-10px":t}) scale(0.93)`;n.addElement(a).keyframes([{offset:0,filter:"contrast(0.85)",transform:e,borderRadius:"32px 32px 0 0"},{offset:1,filter:"contrast(1)",transform:"translateY(0px) scale(1)",borderRadius:"0px"}]),i.addAnimation(n)}else if(i.addAnimation(o),r){const t=`translateY(-10px) scale(${r?.93:1})`;n.addElement(e.querySelector(".modal-wrapper")).afterStyles({transform:"translate3d(0, 0, 0)"}).keyframes([{offset:0,filter:"contrast(0.85)",transform:t},{offset:1,filter:"contrast(1)",transform:"translateY(0) scale(1)"}]);const a=k().addElement(e.querySelector(".modal-shadow")).afterStyles({transform:"translateY(0) scale(1)"}).keyframes([{offset:0,opacity:"0",transform:t},{offset:1,opacity:"1",transform:"translateY(0) scale(1)"}]);i.addAnimation([n,a])}else s.fromTo("opacity","1","0")}else i.addAnimation(o);return i},C=class{constructor(r){t(this,r),this.didPresent=a(this,"bkkrModalDidPresent",7),this.willPresent=a(this,"bkkrModalWillPresent",7),this.willDismiss=a(this,"bkkrModalWillDismiss",7),this.didDismiss=a(this,"bkkrModalDidDismiss",7),this.didPresentShorthand=a(this,"didPresent",7),this.willPresentShorthand=a(this,"willPresent",7),this.willDismissShorthand=a(this,"willDismiss",7),this.didDismissShorthand=a(this,"didDismiss",7),this.modalIndex=Y++,this.coreDelegate=m(),this.inline=!1,this.gestureAnimationDismissing=!1,this.presented=!1,this.keyboardClose=!0,this.backdropDismiss=!0,this.showBackdrop=!0,this.animated=!0,this.handle=!0,this.closeButton=!0,this.closeIcon="times",this.swipeToClose=!0,this.presentingElement=document.querySelector("bkkr-router-outlet")||document.querySelector("bkkr-root")||document.body,this.isOpen=!1,this.configureTriggerInteraction=()=>{const{trigger:t,el:a,destroyTriggerInteraction:r}=this;r&&r();const e=void 0!==t?document.getElementById(t):null;e&&(this.destroyTriggerInteraction=((t,a)=>{const r=()=>{a.present()};return t.addEventListener("click",r),()=>{t.removeEventListener("click",r)}})(e,a))},this.onBackdropTap=()=>{this.dismiss(void 0,n)},this.onDismiss=t=>{t.stopPropagation(),t.preventDefault(),this.dismiss()},this.onLifecycle=t=>{const a=this.usersElement,r=M[t.type];if(a&&r){const e=new CustomEvent(r,{bubbles:!1,cancelable:!1,detail:t.detail});a.dispatchEvent(e)}}}swipeToCloseChanged(t){this.gesture?this.gesture.enable(t):t&&this.initSwipeToClose()}onIsOpenChange(t,a){!0===t&&!1===a?this.present():!1===t&&!0===a&&this.dismiss()}onTriggerChange(){this.configureTriggerInteraction()}connectedCallback(){d(this.el)}componentWillLoad(){this.modalId=this.el.hasAttribute("id")?this.el.getAttribute("id"):`bkkr-modal-${this.modalIndex}`}componentDidLoad(){!0===this.isOpen&&y((()=>this.present())),this.configureTriggerInteraction()}getDelegate(t=!1){if(this.workingDelegate&&!t)return{delegate:this.workingDelegate,inline:this.inline};const a=this.el.parentNode,r=this.inline=null!==a&&"BKKR-ROOT"!==a.tagName&&"BODY"!==a.tagName;return{inline:r,delegate:this.workingDelegate=r?this.delegate||this.coreDelegate:this.delegate}}async present(){if(this.presented)return;void 0!==this.currentTransition&&await this.currentTransition;const t=Object.assign(Object.assign({},this.componentProps),{modal:this.el}),{inline:a,delegate:e}=this.getDelegate(!0);this.usersElement=await b(e,this.el,this.component,["bkkr-page"],t,a),await u(this.usersElement),r((()=>this.el.classList.add("show-modal"))),this.currentTransition=l(this,"modalEnter",D,this.presentingElement),await this.currentTransition,this.currentTransition=void 0,this.swipeToClose&&this.initSwipeToClose()}initSwipeToClose(){const t=this.animation=(this.leaveAnimation||j)(this.el,this.presentingElement);this.gesture=((t,a,r)=>{const e=t.offsetHeight;let o=!1;const s=w({el:t,gestureName:"modalSwipeToClose",gesturePriority:40,direction:"y",threshold:10,canStart:async t=>{const a=t.event.target;if(null===a||!a.closest)return!0;const r=a.closest("bkkr-content");return null===r||(await r.getScrollElement()).scrollTop<=0},onStart:()=>{a.progressStart(!0,o?1:0)},onMove:t=>{const r=v(1e-4,t.deltaY/e,.9999);a.progressStep(r)},onEnd:t=>{const i=t.velocityY,n=v(1e-4,t.deltaY/e,.9999),d=(t.deltaY+1e3*i)/e>=.5;let l=d?-.001:.001;d?(a.easing("cubic-bezier(0.32, 0.72, 0, 1)"),l+=x([0,0],[.32,.72],[0,1],[1,1],n)[0]):(a.easing("cubic-bezier(1, 0, 0.68, 0.28)"),l+=x([0,0],[1,0],[.68,.28],[1,1],n)[0]);const h=((t,a)=>v(400,t/Math.abs(1.1*a),500))(d?n*e:(1-n)*e,i);o=d,s.enable(!1),a.onFinish((()=>{d||s.enable(!0)})).progressEnd(d?1:0,l,h),d&&r()}});return s})(this.el,t,(()=>{this.gestureAnimationDismissing=!0,this.animation.onFinish((async()=>{await this.dismiss(void 0,"gesture"),this.gestureAnimationDismissing=!1}))})),this.gesture.enable(!0)}async dismiss(t,a){if(this.gestureAnimationDismissing&&"gesture"!==a)return!1;void 0!==this.currentTransition&&await this.currentTransition;const r=h.get(this)||[];this.currentTransition=c(this,t,a,"modalLeave",j,this.presentingElement);const e=await this.currentTransition;if(e){const{delegate:t}=this.getDelegate();await f(t,this.usersElement),this.animation&&this.animation.destroy(),r.forEach((t=>t.destroy()))}return this.animation=void 0,this.currentTransition=void 0,e}onDidDismiss(){return p(this.el,"bkkrModalDidDismiss")}onWillDismiss(){return p(this.el,"bkkrModalWillDismiss")}render(){const{presented:t,modalId:a,closeIcon:r,htmlAttributes:s}=this;return e(o,Object.assign({"aria-modal":"true",tabindex:"-1",class:Object.assign({"modal-card":void 0!==this.presentingElement,"overlay-hidden":!0,"modal-interactive":t},i(this.cssClass)),id:a},s,{style:{zIndex:`${2e4+this.overlayIndex}`},onBkkrBackdropTap:this.onBackdropTap,onBkkrDismiss:this.onDismiss,onBkkrModalDidPresent:this.onLifecycle,onBkkrModalWillPresent:this.onLifecycle,onBkkrModalWillDismiss:this.onLifecycle,onBkkrModalDidDismiss:this.onLifecycle}),e("bkkr-backdrop",{visible:this.showBackdrop,tappable:this.backdropDismiss,part:"backdrop"}),e("div",{class:"modal-shadow"}),e("div",{role:"dialog",class:{"modal-handle":this.handle,"modal-wrapper":!0},part:"content"},this.handle&&e("div",{class:"modal-handle-wrapper state-activatable",onClick:()=>this.dismiss()},e("span",{class:"modal-handle-bar"})),this.closeButton&&e("div",{class:"modal-handle-button state-activatable",onClick:()=>this.dismiss()},e("bkkr-icon",{class:"handle-icon",icon:r,lazy:!1})),e("div",{class:"modal-wrapper-inner"},e("slot",null))))}get el(){return s(this)}static get watchers(){return{swipeToClose:["swipeToCloseChanged"],isOpen:["onIsOpenChange"],trigger:["onTriggerChange"]}}},M={bkkrModalDidPresent:"bkkrViewDidEnter",bkkrModalWillPresent:"bkkrViewWillEnter",bkkrModalWillDismiss:"bkkrViewWillLeave",bkkrModalDidDismiss:"bkkrViewDidLeave"};let Y=0;C.style=":host{--width:100%;--min-width:auto;--max-width:auto;--min-height:auto;--max-height:auto;--overflow:hidden;--border-radius:0;--border-width:0;--border-style:none;--border-color:transparent;--background:var(--bkkr-overlay-background, var(--bkkr-background-color, #fff));--box-shadow:0 15px 25px 0 rgba(var(--box-shadow-color, 0, 0, 0), 0.1), 0 6px 20px 0 rgba(var(--box-shadow-color, 0, 0, 0), 0.12), 0 13.2px 40px 0 rgba(var(--box-shadow-color, 0, 0, 0), 0.08);--backdrop-opacity:0;top:0;right:0;bottom:0;left:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;contain:strict;pointer-events:none}:host(.modal-interactive) .modal-wrapper,:host(.modal-interactive) bkkr-backdrop{pointer-events:auto}:host(.overlay-hidden){display:none}:host(:first-of-type){--backdrop-opacity:var(--bkkr-backdrop-opacity, 0.3)}.modal-shadow,.modal-wrapper{display:-ms-flexbox;display:flex;position:relative;-ms-flex-direction:column;flex-direction:column;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);-webkit-transform:translate3d(0, 100%, 0);transform:translate3d(0, 100%, 0);will-change:opacity, transform;z-index:10}.modal-shadow{border-radius:var(--border-radius);position:absolute;pointer-events:none;background:transparent;-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:var(--overflow)}.modal-wrapper-inner{border-top-left-radius:var(--border-radius);border-top-right-radius:var(--border-radius);display:-ms-flexbox;display:flex;position:relative;-ms-flex:1;flex:1;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:justify;justify-content:space-between;width:100%;height:100%;border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);contain:content;overflow:var(--overflow)}bkkr-content:first-child{--padding-top:0;--padding-bottom:calc(var(--bkkr-spacer, 16px) + var(--safe-area-bottom))}.modal-handle{--offset-top:34px}.modal-handle-wrapper{--handle-height:6px;--handle-width:64px;--handle-color:var(--bkkr-text-color, #000);--handle-transition:0.2s transform cubic-bezier(0.25, 1.11, 0.78, 1.59), 0.2s box-shadow cubic-bezier(0.25, 1.11, 0.78, 1.59);--handle-transform:translate3d(0, -50%, 0);top:0;left:50%;position:absolute;width:var(--handle-width);height:32px;-webkit-transform:translateX(-50%);transform:translateX(-50%);cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:10}.modal-handle-wrapper .modal-handle-bar{top:50%;bottom:0;left:0;border-radius:var(--handle-height);position:absolute;width:100%;height:var(--handle-height);-webkit-transform:var(--handle-transform);transform:var(--handle-transform);-webkit-transition:var(--handle-transition);transition:var(--handle-transition);background-color:var(--handle-color)}.modal-handle-button{--handle-button-backround:var(--background);--handle-button-backround-hover:var(--background);--handle-button-backround-active:var(--background);--handle-button-color:var(--bkkr-text-color, #000);--handle-button-radius:50%;--handle-button-transform:scale(1.1);--handle-button-transition:0.2s transform cubic-bezier(0.32, 0.72, 0, 1), 0.2s background cubic-bezier(0.32, 0.72, 0, 1);top:-48px;right:var(--bkkr-spacer);border-radius:var(--handle-button-radius);display:none;position:absolute;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:36px;height:36px;-webkit-transition:var(--handle-button-transition);transition:var(--handle-button-transition);background:var(--handle-button-backround);color:var(--handle-button-color);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);cursor:pointer;-ms-touch-action:manipulation;touch-action:manipulation;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:10}.handle-icon{font-size:1.25rem}@media only screen and (min-width: 768px) and (min-height: 600px){:host{--width:600px;--height:500px;--safe-area-top:0px;--safe-area-bottom:0px;--safe-area-right:0px;--safe-area-left:0px}}@media only screen and (min-width: 768px) and (min-height: 768px){:host{--width:600px;--height:600px}}@media screen and (max-width: 767px){@supports (width: max(0, 1px)){:host(.modal-card){--height:calc(100% - max(30px, var(--safe-area-top)) - 10px)}}@supports not (width: max(0, 1px)){:host(.modal-card){--height:calc(100% - 40px)}}:host(.modal-card){--border-radius:24px;--backdrop-opacity:0;--width:100%;-ms-flex-align:end;align-items:flex-end}:host(.modal-card) .modal-wrapper-inner{--safe-area-top:0px;--safe-area-bottom:0px;--safe-area-right:0px;--safe-area-left:0px}:host(.modal-card) bkkr-backdrop{pointer-events:none}}@media screen and (min-width: 768px){:host(.modal-card){--width:calc(100% - 120px);--max-width:720px;--min-height:300px;--max-height:1000px;--border-radius:24px;--box-shadow:0px 0px 30px 10px rgba(0, 0, 0, 0.1);-webkit-transition:all 0.5s ease-in-out;transition:all 0.5s ease-in-out}:host(.modal-card) .modal-wrapper-inner{border-radius:var(--border-radius)}:host(.modal-card) .modal-handle{--offset-top:var(--bkkr-spacer)}:host(.modal-card) .modal-handle-wrapper{display:none}:host(.modal-card) .modal-handle-button{display:-ms-flexbox;display:flex}}@media (any-hover: hover){.modal-handle-wrapper:hover{--handle-transform:translate3d(0, -100%, 0);--handle-transition:0.2s transform ease-out, 0.2s box-shadow ease-out}.modal-handle-button:hover{-webkit-transform:var(--handle-button-transform);transform:var(--handle-button-transform);background:var(--handle-button-backround-hover)}}.modal-handle-button.state-activated{-webkit-transform:var(--handle-button-transform);transform:var(--handle-button-transform);background:var(--handle-button-backround-active)}@media (prefers-reduced-motion: reduce){.modal-handle-bar,.modal-handle-button{-webkit-transition:none;transition:none}}";export{C as bkkr_modal}