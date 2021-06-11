import{r as t,c as a,e as o,h as r,H as i,g as s}from"./p-e501253c.js";import{g as e}from"./p-c50c697b.js";import{B as n,b as d,c,g as l,e as h,f as p}from"./p-90a249ca.js";import{C as m,a as b,d as f}from"./p-7e44b543.js";import{d as u}from"./p-69f4d75d.js";import{c as k}from"./p-096ce696.js";import{g as x}from"./p-bac8255f.js";import{createGesture as w}from"./p-af97c94b.js";import{h as v,g,r as y}from"./p-c2089e63.js";import"./p-9b065740.js";import"./p-a0421d09.js";const D=(t,a,o=400)=>{const r=g(t),i=k().addElement(r.querySelector("bkkr-backdrop")).fromTo("opacity",0,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),s=k().addElement(r.querySelectorAll(".modal-wrapper, .modal-shadow")).beforeStyles({opacity:1}).fromTo("transform","translateY(100vh)","translateY(0vh)"),e=k().easing("cubic-bezier(0.32,0.72,0,1)").duration(o).addAnimation(s);if(a){const t=window.innerWidth<768,o="BKKR-MODAL"===a.tagName&&void 0!==a.presentingElement,r=g(a),n=k().beforeStyles({transform:"translateY(0)","transform-origin":"top center",overflow:"hidden"}),d=document.body;if(t){const t=CSS.supports("width","max(0px, 1px)")?"max(30px, var(--safe-area-top))":"30px",r=`translateY(${o?"-10px":t}) scale(0.93)`;n.afterStyles({transform:r}).beforeAddWrite((()=>d.style.setProperty("background-color","black"))).addElement(a).keyframes([{offset:0,filter:"contrast(1)",transform:"translateY(0px) scale(1)",borderRadius:"0px"},{offset:1,filter:"contrast(0.85)",transform:r,borderRadius:"32px 32px 0 0"}]),e.addAnimation(n)}else if(e.addAnimation(i),o){const t=`translateY(-10px) scale(${o?.93:1})`;n.afterStyles({transform:t}).addElement(r.querySelector(".modal-wrapper")).keyframes([{offset:0,filter:"contrast(1)",transform:"translateY(0) scale(1)"},{offset:1,filter:"contrast(0.85)",transform:t}]);const a=k().afterStyles({transform:t}).addElement(r.querySelector(".modal-shadow")).keyframes([{offset:0,opacity:"1",transform:"translateY(0) scale(1)"},{offset:1,opacity:"0",transform:t}]);e.addAnimation([n,a])}else s.fromTo("opacity","0","1")}else e.addAnimation(i);return e},j=(t,a,o=400)=>{const r=g(t),i=k().addElement(r.querySelector("bkkr-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0),s=k().addElement(r.querySelectorAll(".modal-wrapper, .modal-shadow")).beforeStyles({opacity:1}).fromTo("transform","translateY(0vh)","translateY(100vh)"),e=k().addElement(r).easing("cubic-bezier(0.32,0.72,0,1)").duration(o).addAnimation(s);if(a){const t=window.innerWidth<768,o="BKKR-MODAL"===a.tagName&&void 0!==a.presentingElement,r=g(a),n=k().beforeClearStyles(["transform"]).afterClearStyles(["transform"]).onFinish((t=>{1===t&&(a.style.setProperty("overflow",""),Array.from(d.querySelectorAll("bkkr-modal")).filter((t=>void 0!==t.presentingElement)).length<=1&&d.style.setProperty("background-color",""))})),d=document.body;if(t){const t=CSS.supports("width","max(0px, 1px)")?"max(30px, var(--safe-area-top))":"30px",r=`translateY(${o?"-10px":t}) scale(0.93)`;n.addElement(a).keyframes([{offset:0,filter:"contrast(0.85)",transform:r,borderRadius:"32px 32px 0 0"},{offset:1,filter:"contrast(1)",transform:"translateY(0px) scale(1)",borderRadius:"0px"}]),e.addAnimation(n)}else if(e.addAnimation(i),o){const t=`translateY(-10px) scale(${o?.93:1})`;n.addElement(r.querySelector(".modal-wrapper")).afterStyles({transform:"translate3d(0, 0, 0)"}).keyframes([{offset:0,filter:"contrast(0.85)",transform:t},{offset:1,filter:"contrast(1)",transform:"translateY(0) scale(1)"}]);const a=k().addElement(r.querySelector(".modal-shadow")).afterStyles({transform:"translateY(0) scale(1)"}).keyframes([{offset:0,opacity:"0",transform:t},{offset:1,opacity:"1",transform:"translateY(0) scale(1)"}]);e.addAnimation([n,a])}else s.fromTo("opacity","1","0")}else e.addAnimation(i);return e},C=class{constructor(o){t(this,o),this.didPresent=a(this,"bkkrModalDidPresent",7),this.willPresent=a(this,"bkkrModalWillPresent",7),this.willDismiss=a(this,"bkkrModalWillDismiss",7),this.didDismiss=a(this,"bkkrModalDidDismiss",7),this.didPresentShorthand=a(this,"didPresent",7),this.willPresentShorthand=a(this,"willPresent",7),this.willDismissShorthand=a(this,"willDismiss",7),this.didDismissShorthand=a(this,"didDismiss",7),this.modalIndex=Y++,this.coreDelegate=m(),this.gestureAnimationDismissing=!1,this.presented=!1,this.inline=!0,this.keyboardClose=!0,this.backdropDismiss=!0,this.showBackdrop=!0,this.animated=!0,this.indicator=!0,this.closeButton=!0,this.closeIcon="times",this.swipeToClose=!0,this.presentingElement=document.querySelector("bkkr-root")||document.body,this.isOpen=!1,this.configureTriggerInteraction=()=>{const{trigger:t,el:a,destroyTriggerInteraction:o}=this;o&&o();const r=void 0!==t?document.getElementById(t):null;r&&(this.destroyTriggerInteraction=((t,a)=>{const o=()=>{a.present()};return t.addEventListener("click",o),()=>{t.removeEventListener("click",o)}})(r,a))},this.onBackdropTap=()=>{this.dismiss(void 0,n)},this.onDismiss=t=>{t.stopPropagation(),t.preventDefault(),this.dismiss()},this.onLifecycle=t=>{const a=this.usersElement,o=M[t.type];if(a&&o){const r=new CustomEvent(o,{bubbles:!1,cancelable:!1,detail:t.detail});a.dispatchEvent(r)}}}swipeToCloseChanged(t){this.gesture?this.gesture.enable(t):t&&this.initSwipeToClose()}onIsOpenChange(t,a){!0===t&&!1===a?this.present():!1===t&&!0===a&&this.dismiss()}onTriggerChange(){this.configureTriggerInteraction()}connectedCallback(){d(this.el)}componentWillLoad(){this.modalId=this.el.hasAttribute("id")?this.el.getAttribute("id"):`bkkr-modal-${this.modalIndex}`}componentDidLoad(){!0===this.isOpen&&y((()=>this.present())),this.configureTriggerInteraction()}async present(){if(this.presented)return;void 0!==this.currentTransition&&await this.currentTransition;const t=Object.assign(Object.assign({},this.componentProps),{modal:this.el}),a=this.inline?this.delegate||this.coreDelegate:this.delegate;this.usersElement=await b(a,this.el,this.component,["bkkr-page"],t,this.inline),await u(this.usersElement),o((()=>this.el.classList.add("show-modal"))),this.currentTransition=c(this,"modalEnter",D,this.presentingElement),await this.currentTransition,this.currentTransition=void 0,this.swipeToClose&&this.initSwipeToClose()}initSwipeToClose(){const t=this.animation=(this.leaveAnimation||j)(this.el,this.presentingElement);this.gesture=((t,a,o)=>{const r=t.offsetHeight;let i=!1;const s=w({el:t,gestureName:"modalSwipeToClose",gesturePriority:40,direction:"y",threshold:10,canStart:async t=>{const a=t.event.target;if(null===a||!a.closest)return!0;const o=a.closest("bkkr-content");return null===o||(await o.getScrollElement()).scrollTop<=0},onStart:()=>{a.progressStart(!0,i?1:0)},onMove:t=>{const o=v(1e-4,t.deltaY/r,.9999);a.progressStep(o)},onEnd:t=>{const e=t.velocityY,n=v(1e-4,t.deltaY/r,.9999),d=(t.deltaY+1e3*e)/r>=.5;let c=d?-.001:.001;d?(a.easing("cubic-bezier(0.32, 0.72, 0, 1)"),c+=x([0,0],[.32,.72],[0,1],[1,1],n)[0]):(a.easing("cubic-bezier(1, 0, 0.68, 0.28)"),c+=x([0,0],[1,0],[.68,.28],[1,1],n)[0]);const l=((t,a)=>v(400,t/Math.abs(1.1*a),500))(d?n*r:(1-n)*r,e);i=d,s.enable(!1),a.onFinish((()=>{d||s.enable(!0)})).progressEnd(d?1:0,c,l),d&&o()}});return s})(this.el,t,(()=>{this.gestureAnimationDismissing=!0,this.animation.onFinish((async()=>{await this.dismiss(void 0,"gesture"),this.gestureAnimationDismissing=!1}))})),this.gesture.enable(!0)}async dismiss(t,a){if(this.gestureAnimationDismissing&&"gesture"!==a)return!1;void 0!==this.currentTransition&&await this.currentTransition;const o=l.get(this)||[];this.currentTransition=h(this,t,a,"modalLeave",j,this.presentingElement);const r=await this.currentTransition;if(r){const t=this.inline?this.delegate||this.coreDelegate:this.delegate;await f(t,this.usersElement),this.animation&&this.animation.destroy(),o.forEach((t=>t.destroy()))}return this.animation=void 0,this.currentTransition=void 0,r}onDidDismiss(){return p(this.el,"bkkrModalDidDismiss")}onWillDismiss(){return p(this.el,"bkkrModalWillDismiss")}render(){const{presented:t,modalId:a,closeIcon:o}=this;return r(i,{"aria-modal":"true",tabindex:"-1",class:Object.assign({"modal-card":void 0!==this.presentingElement,"overlay-hidden":!0,"modal-interactive":t},e(this.cssClass)),id:a,style:{zIndex:`${2e4+this.overlayIndex}`},onBkkrBackdropTap:this.onBackdropTap,onBkkrDismiss:this.onDismiss,onBkkrModalDidPresent:this.onLifecycle,onBkkrModalWillPresent:this.onLifecycle,onBkkrModalWillDismiss:this.onLifecycle,onBkkrModalDidDismiss:this.onLifecycle},r("bkkr-backdrop",{visible:this.showBackdrop,tappable:this.backdropDismiss,part:"backdrop"}),r("div",{class:"modal-shadow"}),r("div",{role:"dialog",class:{"modal-indicator":this.indicator,"modal-wrapper":!0},part:"content"},this.indicator&&r("div",{class:"modal-indicator-wrapper state-activatable",onClick:()=>this.dismiss()},r("span",{class:"modal-indicator-bar"})),this.closeButton&&r("div",{class:"modal-indicator-button state-activatable",onClick:()=>this.dismiss()},r("bkkr-icon",{class:"indicator-icon",icon:o})),r("div",{class:"modal-wrapper-inner"},r("slot",null))))}get el(){return s(this)}static get watchers(){return{swipeToClose:["swipeToCloseChanged"],isOpen:["onIsOpenChange"],trigger:["onTriggerChange"]}}},M={bkkrModalDidPresent:"bkkrViewDidEnter",bkkrModalWillPresent:"bkkrViewWillEnter",bkkrModalWillDismiss:"bkkrViewWillLeave",bkkrModalDidDismiss:"bkkrViewDidLeave"};let Y=0;C.style=":host{--width:100%;--min-width:auto;--max-width:auto;--min-height:auto;--max-height:auto;--overflow:hidden;--border-radius:0;--border-width:0;--border-style:none;--border-color:transparent;--background:var(--bkkr-background-color);--box-shadow:0 15px 25px 0 rgba(var(--box-shadow-color, 0, 0, 0), 0.1), 0 6px 20px 0 rgba(var(--box-shadow-color, 0, 0, 0), 0.12), 0 13.2px 40px 0 rgba(var(--box-shadow-color, 0, 0, 0), 0.08);--backdrop-opacity:0;top:0;right:0;bottom:0;left:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;contain:strict;pointer-events:none}:host(.modal-interactive) .modal-wrapper,:host(.modal-interactive) bkkr-backdrop{pointer-events:auto}:host(:first-of-type){--backdrop-opacity:var(--bkkr-backdrop-opacity, 0.4)}.modal-shadow,.modal-wrapper{display:-ms-flexbox;display:flex;position:relative;-ms-flex-direction:column;flex-direction:column;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);-webkit-transform:translate3d(0, 100%, 0);transform:translate3d(0, 100%, 0);will-change:opacity, transform;z-index:10}.modal-shadow{border-radius:var(--border-radius);position:absolute;pointer-events:none;background:transparent;-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:var(--overflow)}.modal-wrapper-inner{border-top-left-radius:var(--border-radius);border-top-right-radius:var(--border-radius);display:-ms-flexbox;display:flex;position:relative;-ms-flex:1;flex:1;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:justify;justify-content:space-between;width:100%;height:100%;border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);contain:content;overflow:var(--overflow)}bkkr-content:first-child{--padding-top:0;--padding-bottom:calc(var(--bkkr-spacer, 16px) + var(--safe-area-bottom))}.modal-indicator{--offset-top:34px}.modal-indicator-wrapper{--indicator-height:6px;--indicator-width:64px;--indicator-color:var(--bkkr-text-color, #000);--indicator-transition:0.2s transform cubic-bezier(0.25, 1.11, 0.78, 1.59), 0.2s box-shadow cubic-bezier(0.25, 1.11, 0.78, 1.59);--indicator-transform:translate3d(0, -50%, 0);top:0;left:50%;position:absolute;width:var(--indicator-width);height:32px;-webkit-transform:translateX(-50%);transform:translateX(-50%);cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:10}.modal-indicator-wrapper .modal-indicator-bar{top:50%;bottom:0;left:0;border-radius:var(--indicator-height);position:absolute;width:100%;height:var(--indicator-height);-webkit-transform:var(--indicator-transform);transform:var(--indicator-transform);-webkit-transition:var(--indicator-transition);transition:var(--indicator-transition);background-color:var(--indicator-color)}.modal-indicator-button{--indicator-button-backround:var(--bkkr-background-color, #fff);--indicator-button-backround-hover:var(--indicator-button-backround);--indicator-button-backround-active:var(--indicator-button-backround);--indicator-button-color:var(--bkkr-text-color, #000);--indicator-button-radius:50%;--indicator-button-transform:scale(1.1);--indicator-button-transition:0.2s transform cubic-bezier(0.32, 0.72, 0, 1), 0.2s background cubic-bezier(0.32, 0.72, 0, 1);top:-48px;right:var(--bkkr-spacer);border-radius:var(--indicator-button-radius);display:none;position:absolute;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:36px;height:36px;-webkit-transition:var(--indicator-button-transition);transition:var(--indicator-button-transition);background:var(--indicator-button-backround);color:var(--indicator-button-color);cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:10}.indicator-icon{font-size:20px}@media only screen and (min-width: 768px) and (min-height: 600px){:host{--width:600px;--height:500px;--safe-area-top:0px;--safe-area-bottom:0px;--safe-area-right:0px;--safe-area-left:0px}}@media only screen and (min-width: 768px) and (min-height: 768px){:host{--width:600px;--height:600px}}@media screen and (max-width: 767px){@supports (width: max(0, 1px)){:host(.modal-card){--height:calc(100% - max(30px, var(--safe-area-top)) - 10px)}}@supports not (width: max(0, 1px)){:host(.modal-card){--height:calc(100% - 40px)}}:host(.modal-card){--border-radius:1.5em;--backdrop-opacity:0;--width:100%;--safe-area-top:0px;--safe-area-bottom:0px;--safe-area-right:0px;--safe-area-left:0px;-ms-flex-align:end;align-items:flex-end}:host(.modal-card) .modal-shadow{display:none}:host(.modal-card) bkkr-backdrop{pointer-events:none}}@media screen and (min-width: 768px){:host(.modal-card){--width:calc(100% - 120px);--max-width:720px;--min-height:300px;--max-height:1000px;--backdrop-opacity:0;--border-radius:1.5em;--box-shadow:0px 0px 30px 10px rgba(0, 0, 0, 0.1);-webkit-transition:all 0.5s ease-in-out;transition:all 0.5s ease-in-out}:host(.modal-card) .modal-wrapper-inner{border-radius:var(--border-radius)}:host(.modal-card) .modal-indicator{--offset-top:0}:host(.modal-card) .modal-indicator-wrapper{display:none}:host(.modal-card) .modal-indicator-button{display:-ms-flexbox;display:flex}:host(.modal-card) .modal-shadow{-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow)}}@media (any-hover: hover){.modal-indicator-wrapper:hover{--indicator-transform:translate3d(0, -100%, 0);--indicator-transition:0.2s transform ease-out, 0.2s box-shadow ease-out}.modal-indicator-button:hover{-webkit-transform:var(--indicator-button-transform);transform:var(--indicator-button-transform);background:var(--indicator-button-backround-hover)}}.modal-indicator-button.state-activated{-webkit-transform:var(--indicator-button-transform);transform:var(--indicator-button-transform);background:var(--indicator-button-backround-active)}@media (prefers-reduced-motion: reduce){.modal-indicator-bar,.modal-indicator-button{-webkit-transition:none;transition:none}}";export{C as bkkr_modal}