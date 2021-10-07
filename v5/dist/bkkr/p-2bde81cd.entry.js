import{r as t,c as r,a as e,h as a,H as i,g as s}from"./p-900e5a2b.js";import{g as n}from"./p-b0f3bd3c.js";import{B as o,b as d,c as h,g as l,e as c,f as b}from"./p-54727ac4.js";import{C as w,a as p,d as m}from"./p-c3faa065.js";import{d as u}from"./p-c891261e.js";import{c as k}from"./p-3ac671b5.js";import{g as f,h as v,r as g}from"./p-d56ecf06.js";import{g as x}from"./p-dfea2885.js";import{createGesture as y}from"./p-947c14e3.js";import"./p-257b1818.js";import"./p-9b065740.js";import"./p-2263719e.js";const D=(t,r,e=400)=>{const a=f(t),i=k().addElement(a.querySelector("bkkr-backdrop")).fromTo("opacity",0,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),s=k().addElement(a.querySelectorAll(".drawer-wrapper, .drawer-shadow")).beforeStyles({opacity:1}).fromTo("transform","translateY(100vh)","translateY(0vh)"),n=k().addElement(t).easing("cubic-bezier(0.32,0.72,0,1)").duration(e).addAnimation(s);if(r){const t=k().addElement(r).beforeStyles({transform:"translateY(0)","transform-origin":"top center",overflow:"hidden"});n.addAnimation(t)}return n.addAnimation(i),n},j=(t,r,e=400)=>{const a=f(t),i=k().addElement(a.querySelector("bkkr-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0),s=k().addElement(a.querySelectorAll(".drawer-wrapper, .drawer-shadow")).beforeStyles({opacity:1}).fromTo("transform","translateY(0vh)","translateY(100vh)"),n=k().addElement(t).easing("cubic-bezier(0.32,0.72,0,1)").duration(e).addAnimation(s);if(r){const t=k().addElement(r).beforeClearStyles(["transform"]).afterClearStyles(["transform"]).onFinish((t=>{1===t&&r.style.setProperty("overflow","")}));n.addAnimation(t)}return n.addAnimation(i),n},z=class{constructor(e){t(this,e),this.didPresent=r(this,"bkkrDrawerDidPresent",7),this.willPresent=r(this,"bkkrDrawerWillPresent",7),this.willDismiss=r(this,"bkkrDrawerWillDismiss",7),this.didDismiss=r(this,"bkkrDrawerDidDismiss",7),this.didPresentShorthand=r(this,"didPresent",7),this.willPresentShorthand=r(this,"willPresent",7),this.willDismissShorthand=r(this,"willDismiss",7),this.didDismissShorthand=r(this,"didDismiss",7),this.drawerIndex=T++,this.coreDelegate=w(),this.inline=!1,this.gestureAnimationDismissing=!1,this.presented=!1,this.keyboardClose=!0,this.duration=0,this.backdropDismiss=!0,this.showBackdrop=!0,this.animated=!0,this.handle=!0,this.closeButton=!0,this.closeIcon="times",this.swipeToClose=!0,this.presentingElement=document.querySelector("bkkr-router-outlet")||document.querySelector("bkkr-root")||document.body,this.isOpen=!1,this.configureTriggerInteraction=()=>{const{trigger:t,el:r,destroyTriggerInteraction:e}=this;e&&e();const a=void 0!==t?document.getElementById(t):null;a&&(this.destroyTriggerInteraction=((t,r)=>{const e=()=>{r.present()};return t.addEventListener("click",e),()=>{t.removeEventListener("click",e)}})(a,r))},this.onBackdropTap=()=>{this.dismiss(void 0,o)},this.onDismiss=t=>{t.stopPropagation(),t.preventDefault(),this.dismiss()},this.onLifecycle=t=>{const r=this.usersElement,e=C[t.type];if(r&&e){const a=new CustomEvent(e,{bubbles:!1,cancelable:!1,detail:t.detail});r.dispatchEvent(a)}}}swipeToCloseChanged(t){this.gesture?this.gesture.enable(t):t&&this.initSwipeToClose()}onIsOpenChange(t,r){!0===t&&!1===r?this.present():!1===t&&!0===r&&this.dismiss()}onTriggerChange(){this.configureTriggerInteraction()}connectedCallback(){d(this.el)}componentWillLoad(){this.drawerId=this.el.hasAttribute("id")?this.el.getAttribute("id"):`bkkr-drawer-${this.drawerIndex}`}componentDidLoad(){!0===this.isOpen&&g((()=>this.present())),this.configureTriggerInteraction()}getDelegate(t=!1){if(this.workingDelegate&&!t)return{delegate:this.workingDelegate,inline:this.inline};const r=this.el.parentNode,e=this.inline=null!==r&&"BKKR-ROOT"!==r.tagName&&"BODY"!==r.tagName;return{inline:e,delegate:this.workingDelegate=e?this.delegate||this.coreDelegate:this.delegate}}async present(){if(this.presented)return;void 0!==this.currentTransition&&await this.currentTransition;const t=Object.assign(Object.assign({},this.componentProps),{drawer:this.el}),{inline:r,delegate:a}=this.getDelegate(!0);this.usersElement=await p(a,this.el,this.component,["bkkr-page"],t,r),await u(this.usersElement),e((()=>this.el.classList.add("show-drawer"))),this.currentTransition=h(this,"drawerEnter",D,this.presentingElement),await this.currentTransition,this.currentTransition=void 0,this.swipeToClose&&this.initSwipeToClose(),this.duration>0&&(this.durationTimeout=setTimeout((()=>this.dismiss(void 0,"timeout")),this.duration))}initSwipeToClose(){const t=this.animation=(this.leaveAnimation||j)(this.el,this.presentingElement);this.gesture=((t,r,e)=>{const a=t.offsetHeight;let i=!1;const s=y({el:t,gestureName:"drawerSwipeToClose",gesturePriority:40,direction:"y",threshold:10,canStart:async t=>{const r=t.event.target;if(null===r||!r.closest)return!0;if(r.classList.contains("choices-item"))return!1;const e=r.closest("bkkr-content");if(e){if((await e.getScrollElement()).scrollTop<=0)return!0}else if(r)return!0;return!1},onStart:()=>{r.progressStart(!0,i?1:0)},onMove:t=>{const e=v(1e-4,t.deltaY/a,.9999);r.progressStep(e)},onEnd:t=>{const n=t.velocityY,o=v(1e-4,t.deltaY/a,.9999),d=(t.deltaY+1e3*n)/a>=.5;let h=d?-.001:.001;d?(r.easing("cubic-bezier(0.32, 0.72, 0, 1)"),h+=x([0,0],[.32,.72],[0,1],[1,1],o)[0]):(r.easing("cubic-bezier(1, 0, 0.68, 0.28)"),h+=x([0,0],[1,0],[.68,.28],[1,1],o)[0]);const l=t.event.target;if(null===l||!l.closest)return;const c=l.closest("bkkr-content");c&&(c.scrollY=!0);const b=((t,r)=>v(400,t/Math.abs(1.1*r),500))(d?o*a:(1-o)*a,n);i=d,s.enable(!1),r.onFinish((()=>{d||s.enable(!0)})).progressEnd(d?1:0,h,b),d&&e()}});return s})(this.el,t,(()=>{this.gestureAnimationDismissing=!0,this.animation.onFinish((async()=>{await this.dismiss(void 0,"gesture"),this.gestureAnimationDismissing=!1}))})),this.gesture.enable(!0)}async dismiss(t,r){var e;if(this.gestureAnimationDismissing&&"gesture"!==r)return!1;if(this.durationTimeout&&(clearTimeout(this.durationTimeout),null===(e=this.gesture)||void 0===e?void 0:e.running()))return this.duration>0&&(this.durationTimeout=setTimeout((()=>this.dismiss(void 0,"timeout")),this.duration)),!1;void 0!==this.currentTransition&&await this.currentTransition;const a=l.get(this)||[];this.currentTransition=c(this,t,r,"drawerLeave",j,this.presentingElement);const i=await this.currentTransition;if(i){this.currentTransition=c(this,t,r,"drawerLeave",j,this.presentingElement);const{delegate:e}=this.getDelegate();await m(e,this.usersElement),this.animation&&this.animation.destroy(),a.forEach((t=>t.destroy()))}return this.animation=void 0,this.currentTransition=void 0,i}onDidDismiss(){return b(this.el,"bkkrDrawerDidDismiss")}onWillDismiss(){return b(this.el,"bkkrDrawerWillDismiss")}render(){const{presented:t,drawerId:r,closeIcon:e,htmlAttributes:s}=this,o=this.duration>0;return a(i,Object.assign({"aria-drawer":"true",tabindex:"-1",class:Object.assign(Object.assign({},n(this.cssClass)),{"overlay-hidden":!0,"drawer-interactive":t}),id:r},s,{style:{zIndex:`${2e4+this.overlayIndex}`},onBkkrBackdropTap:this.onBackdropTap,onBkkrDismiss:this.onDismiss,onBkkrDrawerDidPresent:this.onLifecycle,onBkkrDrawerWillPresent:this.onLifecycle,onBkkrDrawerWillDismiss:this.onLifecycle,onBkkrDrawerDidDismiss:this.onLifecycle}),a("bkkr-backdrop",{visible:this.showBackdrop,tappable:this.backdropDismiss,part:"backdrop"}),a("div",{class:"drawer-shadow"}),a("div",{role:"dialog",class:{"drawer-handle":this.handle,"drawer-handle-animated":o,"drawer-wrapper":!0},part:"content"},(this.handle||o)&&a("div",{class:"drawer-handle-wrapper state-activatable",onClick:()=>this.dismiss()},a("span",{class:"drawer-handle-bar"},a("span",{class:"drawer-handle-bar-fill",style:{animationDuration:`${this.duration}ms`}}))),this.closeButton&&!o&&a("div",{class:"drawer-handle-button state-activatable",onClick:()=>this.dismiss()},a("bkkr-icon",{class:"handle-icon",icon:e,lazy:!1})),a("div",{class:"drawer-wrapper-inner"},a("slot",null))))}get el(){return s(this)}static get watchers(){return{swipeToClose:["swipeToCloseChanged"],isOpen:["onIsOpenChange"],trigger:["onTriggerChange"]}}},C={bkkrDrawerDidPresent:"bkkrViewDidEnter",bkkrDrawerWillPresent:"bkkrViewWillEnter",bkkrDrawerWillDismiss:"bkkrViewWillLeave",bkkrDrawerDidDismiss:"bkkrViewDidLeave"};let T=0;z.style=":host{--min-width:auto;--min-height:auto;--overflow:hidden;--border-width:0;--border-style:none;--border-color:transparent;--background:var(--bkkr-overlay-background, var(--bkkr-background-color, #fff));--box-shadow:0 15px 25px 0 rgba(var(--box-shadow-color, 0, 0, 0), 0.1), 0 6px 20px 0 rgba(var(--box-shadow-color, 0, 0, 0), 0.12), 0 13.2px 40px 0 rgba(var(--box-shadow-color, 0, 0, 0), 0.08);--width:calc(100% - var(--bkkr-spacer, 16px));--height:calc(100vw - var(--bkkr-spacer, 16px));--margin-bottom:calc(var(--safe-area-bottom) + (var(--bkkr-spacer, 16px) * 0.5));--max-width:720px;--max-height:min(600px, calc(90vh - var(--safe-area-top)));--border-radius:24px;--backdrop-opacity:0;top:0;right:0;bottom:0;left:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-align:end;align-items:flex-end;-ms-flex-pack:center;justify-content:center;-webkit-transition:all 0.5s ease-in-out;transition:all 0.5s ease-in-out;outline:none;contain:strict;pointer-events:none}:host(.drawer-interactive) .drawer-wrapper,:host(.drawer-interactive) bkkr-backdrop{pointer-events:auto}:host(.overlay-hidden){display:none}:host(:first-of-type){--backdrop-opacity:var(--bkkr-backdrop-opacity, 0.3)}.drawer-shadow,.drawer-wrapper{margin-bottom:var(--margin-bottom);display:-ms-flexbox;display:flex;position:relative;-ms-flex-direction:column;flex-direction:column;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:calc(var(--height) - max(30px, var(--safe-area-top)) - 10px - var(--margin-bottom));min-height:var(--min-height);max-height:var(--max-height);-webkit-transform:translate3d(0, 100%, 0);transform:translate3d(0, 100%, 0);will-change:opacity, transform;z-index:10}.drawer-shadow{bottom:0;border-radius:var(--border-radius);position:absolute;pointer-events:none;background:transparent;-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:var(--overflow)}.drawer-wrapper-inner{--safe-area-top:0px;--safe-area-bottom:0px;--safe-area-right:0px;--safe-area-left:0px;border-radius:var(--border-radius);display:-ms-flexbox;display:flex;position:relative;-ms-flex:1;flex:1;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:justify;justify-content:space-between;width:100%;height:100%;border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);contain:content;overflow:var(--overflow);z-index:10}bkkr-content:first-child{--padding-top:0;--padding-bottom:calc(var(--bkkr-spacer, 16px) + var(--safe-area-bottom))}.drawer-handle{--offset-top:34px}.drawer-handle-wrapper{--handle-height:6px;--handle-width:64px;--handle-color:var(--bkkr-text-color, #000);--handle-transition:0.2s transform cubic-bezier(0.25, 1.11, 0.78, 1.59), 0.2s box-shadow cubic-bezier(0.25, 1.11, 0.78, 1.59);--handle-transform:translate3d(0, -50%, 0);top:0;left:50%;position:absolute;width:var(--handle-width);height:32px;-webkit-transform:translateX(-50%);transform:translateX(-50%);cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:11}.drawer-handle-wrapper .drawer-handle-bar{top:50%;bottom:0;left:0;border-radius:var(--handle-height);position:absolute;width:100%;height:var(--handle-height);-webkit-transform:var(--handle-transform);transform:var(--handle-transform);-webkit-transition:var(--handle-transition);transition:var(--handle-transition);background-color:rgba(var(--bkkr-text-color-rgb, 0, 0, 0), 0.2);overflow:hidden}.drawer-handle-wrapper .drawer-handle-bar-fill{top:0;position:absolute;width:100%;height:100%;background-color:var(--handle-color)}.drawer-handle-animated .drawer-handle-bar-fill{-webkit-transform:scale(0, 1);transform:scale(0, 1);-webkit-transform-origin:left center;transform-origin:left center;-webkit-animation-name:countdown;animation-name:countdown;-webkit-animation-timing-function:linear;animation-timing-function:linear;-webkit-animation-iteration-count:1;animation-iteration-count:1;-webkit-animation-delay:400ms;animation-delay:400ms;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}@-webkit-keyframes countdown{100%{-webkit-transform:scale(1, 1);transform:scale(1, 1)}}@keyframes countdown{100%{-webkit-transform:scale(1, 1);transform:scale(1, 1)}}.drawer-handle-button{--handle-button-backround:var(--background);--handle-button-backround-hover:var(--background);--handle-button-backround-active:var(--background);--handle-button-color:var(--bkkr-text-color, #000);--handle-button-radius:50%;--handle-button-transform:scale(1.1);--handle-button-transition:0.2s transform cubic-bezier(0.32, 0.72, 0, 1), 0.2s background cubic-bezier(0.32, 0.72, 0, 1);top:-48px;right:var(--bkkr-spacer);border-radius:var(--handle-button-radius);display:none;position:absolute;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:36px;height:36px;-webkit-transition:var(--handle-button-transition);transition:var(--handle-button-transition);background:var(--handle-button-backround);color:var(--handle-button-color);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);cursor:pointer;-ms-touch-action:manipulation;touch-action:manipulation;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:10}.handle-icon{font-size:1.25rem}@media screen and (min-width: 720px) and (min-height: 375px){:host{--box-shadow:0px 0px 30px 10px rgba(0, 0, 0, 0.1)}.drawer-handle:not(.drawer-handle-animated){--offset-top:var(--bkkr-spacer)}.drawer-handle:not(.drawer-handle-animated) .drawer-handle-wrapper{display:none}.drawer-handle:not(.drawer-handle-animated) .drawer-handle-button{display:-ms-flexbox;display:flex}}@media (any-hover: hover){.drawer-handle-wrapper:hover{--handle-transform:translate3d(0, -100%, 0);--handle-transition:0.2s transform ease-out, 0.2s box-shadow ease-out}.drawer-handle-button:hover{-webkit-transform:var(--handle-button-transform);transform:var(--handle-button-transform);background:var(--handle-button-backround-hover)}}.drawer-handle-button.state-activated{-webkit-transform:var(--handle-button-transform);transform:var(--handle-button-transform);background:var(--handle-button-backround-active)}@media (prefers-reduced-motion: reduce){.drawer-handle-bar,.drawer-handle-button{-webkit-transition:none;transition:none}}";export{z as bkkr_drawer}