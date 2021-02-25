import{r,e as t,c as a,h as i,H as e,g as o}from"./p-8dbe4215.js";import{e as s}from"./p-3faaa6d8.js";import{c as n}from"./p-2862b1df.js";import{g as d}from"./p-bac8255f.js";import"./p-fcb88322.js";import{createGesture as c}from"./p-e9923a82.js";import"./p-9b065740.js";import{B as b,b as w,c as k,g as h,e as l,f as m}from"./p-fc007598.js";import{g as p}from"./p-09b2e663.js";import{a as u,d as f}from"./p-04115f59.js";import{d as v}from"./p-b3dd0ddb.js";const x=(r,t,a=400)=>{const i=n().addElement(r.querySelector("bkkr-backdrop")).fromTo("opacity",0,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),e=n().addElement(r.querySelectorAll(".drawer-wrapper, .drawer-shadow")).beforeStyles({opacity:1}).fromTo("transform","translateY(100vh)","translateY(0vh)"),o=n().addElement(r).easing("cubic-bezier(0.32,0.72,0,1)").duration(a).addAnimation(e);if(t){const r=n().beforeStyles({transform:"translateY(0)","transform-origin":"top center",overflow:"hidden"});r.addElement(t),o.addAnimation(r)}return o.addAnimation(i),o},g=(r,t,a=400)=>{const i=n().addElement(r.querySelector("bkkr-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0),e=n().addElement(r.querySelectorAll(".drawer-wrapper, .drawer-shadow")).beforeStyles({opacity:1}).fromTo("transform","translateY(0vh)","translateY(100vh)"),o=n().addElement(r).easing("cubic-bezier(0.32,0.72,0,1)").duration(a).addAnimation(e);if(t){const r=n().beforeClearStyles(["transform"]).afterClearStyles(["transform"]).onFinish((r=>{1===r&&t.style.setProperty("overflow","")}));o.addAnimation(r)}return o.addAnimation(i),o},y=class{constructor(a){r(this,a),this.didPresent=t(this,"bkkrDrawerDidPresent",7),this.willPresent=t(this,"bkkrDrawerWillPresent",7),this.willDismiss=t(this,"bkkrDrawerWillDismiss",7),this.didDismiss=t(this,"bkkrDrawerDidDismiss",7),this.gestureAnimationDismissing=!1,this.presented=!1,this.keyboardClose=!0,this.card=!1,this.duration=0,this.backdropDismiss=!0,this.showBackdrop=!0,this.animated=!0,this.indicator=!0,this.closeButton=!0,this.swipeToClose=!0,this.presentingElement=document.querySelector("bkkr-root")||document.body,this.onBackdropTap=()=>{this.dismiss(void 0,b)},this.onDismiss=r=>{r.stopPropagation(),r.preventDefault(),this.dismiss()},this.onLifecycle=r=>{const t=this.usersElement,a=D[r.type];if(t&&a){const i=new CustomEvent(a,{bubbles:!1,cancelable:!1,detail:r.detail});t.dispatchEvent(i)}}}swipeToCloseChanged(r){this.gesture?this.gesture.enable(r):r&&this.initSwipeToClose()}connectedCallback(){w(this.el)}async present(){if(this.presented)return;const r=this.el.querySelector(".drawer-wrapper-inner");if(!r)throw new Error("container is undefined");const t=Object.assign(Object.assign({},this.componentProps),{drawer:this.el});this.usersElement=await u(this.delegate,r,this.component,["bkkr-page","drawer-viewport"],t),await v(this.usersElement),a((()=>this.el.classList.add("show-drawer"))),await k(this,x,this.presentingElement),this.swipeToClose&&this.initSwipeToClose(),this.duration>0&&(this.durationTimeout=setTimeout((()=>this.dismiss(void 0,"timeout")),this.duration))}initSwipeToClose(){const r=this.animation=(this.leaveAnimation||g)(this.el,this.presentingElement);this.gesture=((r,t,a)=>{const i=r.offsetHeight;let e=!1;const o=c({el:r,gestureName:"drawerSwipeToClose",gesturePriority:40,direction:"y",threshold:10,canStart:async r=>{const t=r.event.target;if(null===t||!t.closest)return!0;if(t.classList.contains("choices-item"))return!1;const a=t.closest("bkkr-content");if(a){if((await a.getScrollElement()).scrollTop<=0)return!0}else if(t)return!0;return!1},onStart:()=>{t.progressStart(!0,e?1:0)},onMove:r=>{const a=s(1e-4,r.deltaY/i,.9999);t.progressStep(a)},onEnd:r=>{const n=r.velocityY,c=s(1e-4,r.deltaY/i,.9999),b=(r.deltaY+1e3*n)/i>=.5;let w=b?-.001:.001;b?(t.easing("cubic-bezier(0.32, 0.72, 0, 1)"),w+=d([0,0],[.32,.72],[0,1],[1,1],c)[0]):(t.easing("cubic-bezier(1, 0, 0.68, 0.28)"),w+=d([0,0],[1,0],[.68,.28],[1,1],c)[0]);const k=r.event.target.closest("bkkr-content");k&&(k.scrollY=!0);const h=((r,t)=>s(400,r/Math.abs(1.1*t),500))(b?c*i:(1-c)*i,n);e=b,o.enable(!1),t.onFinish((()=>{b||o.enable(!0)})).progressEnd(b?1:0,w,h),b&&a()}});return o})(this.el,r,(()=>{this.gestureAnimationDismissing=!0,this.animation.onFinish((async()=>{await this.dismiss(void 0,"gesture"),this.gestureAnimationDismissing=!1}))})),this.gesture.enable(!0)}async dismiss(r,t){if(this.gestureAnimationDismissing&&"gesture"!==t)return!1;if(this.durationTimeout&&(clearTimeout(this.durationTimeout),this.gesture.running()))return this.duration>0&&(this.durationTimeout=setTimeout((()=>this.dismiss(void 0,"timeout")),this.duration)),!1;const a=h.get(this)||[],i=await l(this,r,t,g,this.presentingElement);return i&&(await f(this.delegate,this.usersElement),this.animation&&this.animation.destroy(),a.forEach((r=>r.destroy()))),this.animation=void 0,i}onDidDismiss(){return m(this.el,"bkkrDrawerDidDismiss")}onWillDismiss(){return m(this.el,"bkkrDrawerWillDismiss")}render(){const r=this.duration>0;return i(e,{"aria-modal":"true",tabindex:"-1",class:Object.assign(Object.assign({},p(this.cssClass)),{"drawer-card":this.card}),style:{zIndex:""+(2e4+this.overlayIndex)},onBkkrBackdropTap:this.onBackdropTap,onBkkrDismiss:this.onDismiss,onBkkrDrawerDidPresent:this.onLifecycle,onBkkrDrawerWillPresent:this.onLifecycle,onBkkrDrawerWillDismiss:this.onLifecycle,onBkkrDrawerDidDismiss:this.onLifecycle},i("bkkr-backdrop",{visible:this.showBackdrop,tappable:this.backdropDismiss}),i("div",{class:"drawer-shadow"}),i("div",{tabindex:"0"}),i("div",{role:"dialog",class:{"drawer-indicator":this.indicator,"drawer-indicator-animated":r,"drawer-wrapper":!0}},this.indicator||r&&i("div",{class:"drawer-indicator-wrapper state-activatable",onClick:()=>this.dismiss()},i("span",{class:"drawer-indicator-bar"},i("span",{class:"drawer-indicator-bar-fill",style:{animationDuration:this.duration+"ms"}}))),this.closeButton&&!r&&i("div",{class:"drawer-indicator-button state-activatable",onClick:()=>this.dismiss()},i("bkkr-icon",{class:"indicator-icon",name:"times"})),i("div",{class:"drawer-wrapper-inner"})),i("div",{tabindex:"0"}))}get el(){return o(this)}static get watchers(){return{swipeToClose:["swipeToCloseChanged"]}}},D={bkkrDrawerDidPresent:"bkkrViewDidEnter",bkkrDrawerWillPresent:"bkkrViewWillEnter",bkkrDrawerWillDismiss:"bkkrViewWillLeave",bkkrDrawerDidDismiss:"bkkrViewDidLeave"};y.style=".sc-bkkr-drawer-h{--min-width:auto;--min-height:auto;--overflow:hidden;--border-width:0;--border-style:none;--border-color:transparent;--background:var(--bkkr-overlay-background, var(--bkkr-background-color, #fff));--box-shadow:0 15px 25px 0 rgba(var(--box-shadow-color, 0, 0, 0), 0.1), 0 6px 20px 0 rgba(var(--box-shadow-color, 0, 0, 0), 0.12), 0 13.2px 40px 0 rgba(var(--box-shadow-color, 0, 0, 0), 0.08);--height:100vw;--max-width:720px;--max-height:min(720px, calc(90vh - var(--safe-area-top)));--border-radius:2em;--backdrop-opacity:0;--width:100%;--margin-bottom:0px;top:0;right:0;bottom:0;left:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-align:end;align-items:flex-end;-ms-flex-pack:center;justify-content:center;-webkit-transition:all 0.5s ease-in-out;transition:all 0.5s ease-in-out;outline:none;contain:strict}.sc-bkkr-drawer-h:first-of-type{--backdrop-opacity:.18}.drawer-shadow.sc-bkkr-drawer,.drawer-wrapper.sc-bkkr-drawer{margin-bottom:var(--margin-bottom);position:relative;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:calc(var(--height) - max(30px, var(--safe-area-top)) - 10px - var(--margin-bottom));min-height:var(--min-height);max-height:var(--max-height);-webkit-transform:translate3d(0, 100%, 0);transform:translate3d(0, 100%, 0);z-index:10}.drawer-shadow.sc-bkkr-drawer{border-top-left-radius:var(--border-radius);border-top-right-radius:var(--border-radius);position:absolute;pointer-events:none;background:transparent;-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:var(--overflow)}.drawer-wrapper-inner.sc-bkkr-drawer{border-top-left-radius:var(--border-radius);border-top-right-radius:var(--border-radius);padding-top:var(--offset-top, 0);position:relative;display:-ms-flexbox;display:flex;height:100%;width:100%;-ms-flex:1;flex:1;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:justify;justify-content:space-between;border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);overflow:var(--overflow);contain:content}bkkr-content.sc-bkkr-drawer:first-child{--padding-top:0;--padding-bottom:calc(var(--bkkr-spacer, 16px) + var(--safe-area-bottom))}.drawer-card.sc-bkkr-drawer-h{--width:calc(100% - var(--bkkr-spacer, 16px));--height:calc(100vw - var(--bkkr-spacer, 16px));--margin-bottom:calc(var(--safe-area-bottom) + (var(--bkkr-spacer, 16px) / 2))}.drawer-card.sc-bkkr-drawer-h .drawer-shadow.sc-bkkr-drawer,.drawer-card.sc-bkkr-drawer-h .drawer-wrapper.sc-bkkr-drawer,.drawer-card.sc-bkkr-drawer-h .drawer-wrapper-inner.sc-bkkr-drawer{border-radius:var(--border-radius)}.drawer-indicator.sc-bkkr-drawer{--offset-top:24px}.drawer-indicator-wrapper.sc-bkkr-drawer{--indicator-height:6px;--indicator-width:64px;--indicator-color:var(--bkkr-text-color, #000);--indicator-transition:0.2s transform cubic-bezier(0.25, 1.11, 0.78, 1.59), 0.2s box-shadow cubic-bezier(0.25, 1.11, 0.78, 1.59);--indicator-transform:translate3d(0, -50%, 0);top:0;left:50%;position:absolute;width:var(--indicator-width);height:32px;-webkit-transform:translateX(-50%);transform:translateX(-50%);cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:10}.drawer-indicator-wrapper.sc-bkkr-drawer .drawer-indicator-bar.sc-bkkr-drawer{top:50%;bottom:0;left:0;border-radius:var(--indicator-height);position:absolute;width:100%;height:var(--indicator-height);-webkit-transform:var(--indicator-transform);transform:var(--indicator-transform);-webkit-transition:var(--indicator-transition);transition:var(--indicator-transition);overflow:hidden;background-color:rgba(var(--bkkr-text-color-rgb, 0, 0, 0), 0.2)}.drawer-indicator-wrapper.sc-bkkr-drawer .drawer-indicator-bar-fill.sc-bkkr-drawer{top:0;position:absolute;width:100%;height:100%;background-color:var(--indicator-color)}.drawer-indicator-animated.sc-bkkr-drawer .drawer-indicator-bar-fill.sc-bkkr-drawer{-webkit-transform:scale(0, 1);transform:scale(0, 1);-webkit-transform-origin:left center;transform-origin:left center;-webkit-animation-name:countdown;animation-name:countdown;-webkit-animation-timing-function:linear;animation-timing-function:linear;-webkit-animation-iteration-count:1;animation-iteration-count:1;-webkit-animation-delay:400ms;animation-delay:400ms;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}@-webkit-keyframes countdown{100%{-webkit-transform:scale(1, 1);transform:scale(1, 1)}}@keyframes countdown{100%{-webkit-transform:scale(1, 1);transform:scale(1, 1)}}.drawer-indicator-button.sc-bkkr-drawer{--indicator-button-backround:transparent;--indicator-button-backround-hover:rgba(var(--bkkr-text-color-rgb, 0, 0, 0), .064);--indicator-button-backround-active:rgba(var(--bkkr-text-color-rgb, 0, 0, 0), .12);--indicator-button-color:var(--bkkr-text-color, #000);--indicator-button-radius:50%;--indicator-button-transform:rotate(90deg);--indicator-button-transition:0.2s transform cubic-bezier(0.32, 0.72, 0, 1), 0.2s background cubic-bezier(0.32, 0.72, 0, 1);top:-48px;right:var(--bkkr-spacer);border-radius:var(--indicator-button-radius);position:absolute;display:none;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;width:36px;height:36px;cursor:pointer;-webkit-transition:var(--indicator-button-transition);transition:var(--indicator-button-transition);background:var(--indicator-button-backround);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:10}.indicator-icon.sc-bkkr-drawer{font-size:20px}@media screen and (min-width: 720px) and (min-height: 375px){.drawer-indicator.sc-bkkr-drawer:not(.drawer-indicator-animated){--offset-top:var(--bkkr-spacer)}.drawer-indicator.sc-bkkr-drawer:not(.drawer-indicator-animated) .drawer-indicator-wrapper.sc-bkkr-drawer{display:none}.drawer-indicator.sc-bkkr-drawer:not(.drawer-indicator-animated) .drawer-indicator-button.sc-bkkr-drawer{display:-ms-flexbox;display:flex}}@media (any-hover: hover){.drawer-indicator-wrapper.sc-bkkr-drawer:hover{--indicator-transform:translate3d(0, -100%, 0);--indicator-transition:0.2s transform ease-out, 0.2s box-shadow ease-out}.drawer-indicator-button.sc-bkkr-drawer:hover{background:var(--indicator-button-backround-hover);-webkit-transform:var(--indicator-button-transform);transform:var(--indicator-button-transform)}}.drawer-indicator-button.state-activated.sc-bkkr-drawer{background:var(--indicator-button-backround-active);-webkit-transform:var(--indicator-button-transform);transform:var(--indicator-button-transform)}@media (prefers-reduced-motion: reduce){.drawer-indicator-bar.sc-bkkr-drawer{-webkit-transition:none;transition:none}}";export{y as bkkr_drawer}