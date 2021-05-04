import{r,c as t,e as i,h as a,H as e,g as o}from"./p-856de026.js";import{g as s}from"./p-c50c697b.js";import{B as n,b as d,c,g as b,e as k,f as w}from"./p-4050f5f9.js";import{a as h,d as l}from"./p-fe612af3.js";import{d as m}from"./p-fce6d3d2.js";import{c as p}from"./p-c346915b.js";import{g as u}from"./p-bac8255f.js";import{createGesture as f}from"./p-4b074146.js";import{h as v}from"./p-c2089e63.js";import"./p-9b065740.js";import"./p-0d9cab2d.js";const x=(r,t,i=400)=>{const a=p().addElement(r.querySelector("bkkr-backdrop")).fromTo("opacity",0,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),e=p().addElement(r.querySelectorAll(".drawer-wrapper, .drawer-shadow")).beforeStyles({opacity:1}).fromTo("transform","translateY(100vh)","translateY(0vh)"),o=p().addElement(r).easing("cubic-bezier(0.32,0.72,0,1)").duration(i).addAnimation(e);if(t){const r=p().beforeStyles({transform:"translateY(0)","transform-origin":"top center",overflow:"hidden"});r.addElement(t),o.addAnimation(r)}return o.addAnimation(a),o},g=(r,t,i=400)=>{const a=p().addElement(r.querySelector("bkkr-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0),e=p().addElement(r.querySelectorAll(".drawer-wrapper, .drawer-shadow")).beforeStyles({opacity:1}).fromTo("transform","translateY(0vh)","translateY(100vh)"),o=p().addElement(r).easing("cubic-bezier(0.32,0.72,0,1)").duration(i).addAnimation(e);if(t){const r=p().beforeClearStyles(["transform"]).afterClearStyles(["transform"]).onFinish((r=>{1===r&&t.style.setProperty("overflow","")}));o.addAnimation(r)}return o.addAnimation(a),o},y=class{constructor(i){r(this,i),this.didPresent=t(this,"bkkrDrawerDidPresent",7),this.willPresent=t(this,"bkkrDrawerWillPresent",7),this.willDismiss=t(this,"bkkrDrawerWillDismiss",7),this.didDismiss=t(this,"bkkrDrawerDidDismiss",7),this.gestureAnimationDismissing=!1,this.presented=!1,this.keyboardClose=!0,this.card=!1,this.duration=0,this.backdropDismiss=!0,this.showBackdrop=!0,this.animated=!0,this.indicator=!0,this.closeButton=!0,this.swipeToClose=!0,this.presentingElement=document.querySelector("bkkr-root")||document.body,this.onBackdropTap=()=>{this.dismiss(void 0,n)},this.onDismiss=r=>{r.stopPropagation(),r.preventDefault(),this.dismiss()},this.onLifecycle=r=>{const t=this.usersElement,i=D[r.type];if(t&&i){const a=new CustomEvent(i,{bubbles:!1,cancelable:!1,detail:r.detail});t.dispatchEvent(a)}}}swipeToCloseChanged(r){this.gesture?this.gesture.enable(r):r&&this.initSwipeToClose()}connectedCallback(){d(this.el)}async present(){if(this.presented)return;const r=this.el.querySelector(".drawer-wrapper-inner");if(!r)throw new Error("container is undefined");const t=Object.assign(Object.assign({},this.componentProps),{drawer:this.el});this.usersElement=await h(this.delegate,r,this.component,["bkkr-page","drawer-viewport"],t),await m(this.usersElement),i((()=>this.el.classList.add("show-drawer"))),await c(this,x,this.presentingElement),this.swipeToClose&&this.initSwipeToClose(),this.duration>0&&(this.durationTimeout=setTimeout((()=>this.dismiss(void 0,"timeout")),this.duration))}initSwipeToClose(){const r=this.animation=(this.leaveAnimation||g)(this.el,this.presentingElement);this.gesture=((r,t,i)=>{const a=r.offsetHeight;let e=!1;const o=f({el:r,gestureName:"drawerSwipeToClose",gesturePriority:40,direction:"y",threshold:10,canStart:async r=>{const t=r.event.target;if(null===t||!t.closest)return!0;if(t.classList.contains("choices-item"))return!1;const i=t.closest("bkkr-content");if(i){if((await i.getScrollElement()).scrollTop<=0)return!0}else if(t)return!0;return!1},onStart:()=>{t.progressStart(!0,e?1:0)},onMove:r=>{const i=v(1e-4,r.deltaY/a,.9999);t.progressStep(i)},onEnd:r=>{const s=r.velocityY,n=v(1e-4,r.deltaY/a,.9999),d=(r.deltaY+1e3*s)/a>=.5;let c=d?-.001:.001;d?(t.easing("cubic-bezier(0.32, 0.72, 0, 1)"),c+=u([0,0],[.32,.72],[0,1],[1,1],n)[0]):(t.easing("cubic-bezier(1, 0, 0.68, 0.28)"),c+=u([0,0],[1,0],[.68,.28],[1,1],n)[0]);const b=r.event.target.closest("bkkr-content");b&&(b.scrollY=!0);const k=((r,t)=>v(400,r/Math.abs(1.1*t),500))(d?n*a:(1-n)*a,s);e=d,o.enable(!1),t.onFinish((()=>{d||o.enable(!0)})).progressEnd(d?1:0,c,k),d&&i()}});return o})(this.el,r,(()=>{this.gestureAnimationDismissing=!0,this.animation.onFinish((async()=>{await this.dismiss(void 0,"gesture"),this.gestureAnimationDismissing=!1}))})),this.gesture.enable(!0)}async dismiss(r,t){if(this.gestureAnimationDismissing&&"gesture"!==t)return!1;if(this.durationTimeout&&(clearTimeout(this.durationTimeout),this.gesture.running()))return this.duration>0&&(this.durationTimeout=setTimeout((()=>this.dismiss(void 0,"timeout")),this.duration)),!1;const i=b.get(this)||[],a=await k(this,r,t,g,this.presentingElement);return a&&(await l(this.delegate,this.usersElement),this.animation&&this.animation.destroy(),i.forEach((r=>r.destroy()))),this.animation=void 0,a}onDidDismiss(){return w(this.el,"bkkrDrawerDidDismiss")}onWillDismiss(){return w(this.el,"bkkrDrawerWillDismiss")}render(){const{closeIcon:r}=this,t=this.duration>0;return a(e,{"aria-modal":"true",tabindex:"-1",class:Object.assign(Object.assign({},s(this.cssClass)),{"drawer-card":this.card}),style:{zIndex:`${2e4+this.overlayIndex}`},onBkkrBackdropTap:this.onBackdropTap,onBkkrDismiss:this.onDismiss,onBkkrDrawerDidPresent:this.onLifecycle,onBkkrDrawerWillPresent:this.onLifecycle,onBkkrDrawerWillDismiss:this.onLifecycle,onBkkrDrawerDidDismiss:this.onLifecycle},a("bkkr-backdrop",{visible:this.showBackdrop,tappable:this.backdropDismiss}),a("div",{class:"drawer-shadow"}),a("div",{tabindex:"0"}),a("div",{role:"dialog",class:{"drawer-indicator":this.indicator,"drawer-indicator-animated":t,"drawer-wrapper":!0}},(this.indicator||t)&&a("div",{class:"drawer-indicator-wrapper state-activatable",onClick:()=>this.dismiss()},a("span",{class:"drawer-indicator-bar"},a("span",{class:"drawer-indicator-bar-fill",style:{animationDuration:`${this.duration}ms`}}))),this.closeButton&&!t&&a("div",{class:"drawer-indicator-button state-activatable",onClick:()=>this.dismiss()},a("bkkr-icon",{class:"indicator-icon",icon:null!=r?r:"times"})),a("div",{class:"drawer-wrapper-inner"})),a("div",{tabindex:"0"}))}get el(){return o(this)}static get watchers(){return{swipeToClose:["swipeToCloseChanged"]}}},D={bkkrDrawerDidPresent:"bkkrViewDidEnter",bkkrDrawerWillPresent:"bkkrViewWillEnter",bkkrDrawerWillDismiss:"bkkrViewWillLeave",bkkrDrawerDidDismiss:"bkkrViewDidLeave"};y.style=".sc-bkkr-drawer-h{--min-width:auto;--min-height:auto;--overflow:hidden;--border-width:0;--border-style:none;--border-color:transparent;--background:var(--bkkr-overlay-background, var(--bkkr-background-color, #fff));--box-shadow:0 15px 25px 0 rgba(var(--box-shadow-color, 0, 0, 0), 0.1), 0 6px 20px 0 rgba(var(--box-shadow-color, 0, 0, 0), 0.12), 0 13.2px 40px 0 rgba(var(--box-shadow-color, 0, 0, 0), 0.08);--height:100vw;--max-width:720px;--max-height:min(720px, calc(90vh - var(--safe-area-top)));--border-radius:1.5em;--backdrop-opacity:0;--width:100%;--margin-bottom:0px;top:0;right:0;bottom:0;left:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-align:end;align-items:flex-end;-ms-flex-pack:center;justify-content:center;-webkit-transition:all 0.5s ease-in-out;transition:all 0.5s ease-in-out;outline:none;contain:strict}.sc-bkkr-drawer-h:first-of-type{--backdrop-opacity:var(--bkkr-backdrop-opacity, 0.3)}.drawer-shadow.sc-bkkr-drawer,.drawer-wrapper.sc-bkkr-drawer{margin-bottom:var(--margin-bottom);display:-ms-flexbox;display:flex;position:relative;-ms-flex-direction:column;flex-direction:column;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:calc(var(--height) - max(30px, var(--safe-area-top)) - 10px - var(--margin-bottom));min-height:var(--min-height);max-height:var(--max-height);-webkit-transform:translate3d(0, 100%, 0);transform:translate3d(0, 100%, 0);will-change:opacity, transform;z-index:10}.drawer-shadow.sc-bkkr-drawer{bottom:0;border-top-left-radius:var(--border-radius);border-top-right-radius:var(--border-radius);position:absolute;pointer-events:none;background:transparent;-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:var(--overflow)}.drawer-wrapper-inner.sc-bkkr-drawer{border-top-left-radius:var(--border-radius);border-top-right-radius:var(--border-radius);padding-top:var(--offset-top, 0);display:-ms-flexbox;display:flex;position:relative;-ms-flex:1;flex:1;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:justify;justify-content:space-between;width:100%;height:100%;border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);contain:content;overflow:var(--overflow);z-index:10}bkkr-content.sc-bkkr-drawer:first-child{--padding-top:0;--padding-bottom:calc(var(--bkkr-spacer, 16px) + var(--safe-area-bottom))}.drawer-card.sc-bkkr-drawer-h{--width:calc(100% - var(--bkkr-spacer, 16px));--height:calc(100vw - var(--bkkr-spacer, 16px));--margin-bottom:calc(var(--safe-area-bottom) + (var(--bkkr-spacer, 16px) / 2))}.drawer-card.sc-bkkr-drawer-h .drawer-shadow.sc-bkkr-drawer,.drawer-card.sc-bkkr-drawer-h .drawer-wrapper-inner.sc-bkkr-drawer{border-radius:var(--border-radius)}.drawer-indicator.sc-bkkr-drawer{--offset-top:24px}.drawer-indicator-wrapper.sc-bkkr-drawer{--indicator-height:6px;--indicator-width:64px;--indicator-color:var(--bkkr-text-color, #000);--indicator-transition:0.2s transform cubic-bezier(0.25, 1.11, 0.78, 1.59), 0.2s box-shadow cubic-bezier(0.25, 1.11, 0.78, 1.59);--indicator-transform:translate3d(0, -50%, 0);top:0;left:50%;position:absolute;width:var(--indicator-width);height:32px;-webkit-transform:translateX(-50%);transform:translateX(-50%);cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:11}.drawer-indicator-wrapper.sc-bkkr-drawer .drawer-indicator-bar.sc-bkkr-drawer{top:50%;bottom:0;left:0;border-radius:var(--indicator-height);position:absolute;width:100%;height:var(--indicator-height);-webkit-transform:var(--indicator-transform);transform:var(--indicator-transform);-webkit-transition:var(--indicator-transition);transition:var(--indicator-transition);background-color:rgba(var(--bkkr-text-color-rgb, 0, 0, 0), 0.2);overflow:hidden}.drawer-indicator-wrapper.sc-bkkr-drawer .drawer-indicator-bar-fill.sc-bkkr-drawer{top:0;position:absolute;width:100%;height:100%;background-color:var(--indicator-color)}.drawer-indicator-animated.sc-bkkr-drawer .drawer-indicator-bar-fill.sc-bkkr-drawer{-webkit-transform:scale(0, 1);transform:scale(0, 1);-webkit-transform-origin:left center;transform-origin:left center;-webkit-animation-name:countdown;animation-name:countdown;-webkit-animation-timing-function:linear;animation-timing-function:linear;-webkit-animation-iteration-count:1;animation-iteration-count:1;-webkit-animation-delay:400ms;animation-delay:400ms;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}@-webkit-keyframes countdown{100%{-webkit-transform:scale(1, 1);transform:scale(1, 1)}}@keyframes countdown{100%{-webkit-transform:scale(1, 1);transform:scale(1, 1)}}.drawer-indicator-button.sc-bkkr-drawer{--indicator-button-backround:var(--bkkr-background-color, #fff);--indicator-button-backround-hover:var(--indicator-button-backround);--indicator-button-backround-active:var(--indicator-button-backround);--indicator-button-color:var(--bkkr-text-color, #000);--indicator-button-radius:50%;--indicator-button-transform:scale(1.1);--indicator-button-transition:0.2s transform cubic-bezier(0.32, 0.72, 0, 1), 0.2s background cubic-bezier(0.32, 0.72, 0, 1);top:-48px;right:var(--bkkr-spacer);border-radius:var(--indicator-button-radius);display:none;position:absolute;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:36px;height:36px;-webkit-transition:var(--indicator-button-transition);transition:var(--indicator-button-transition);background:var(--indicator-button-backround);color:var(--indicator-button-color);cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:10}.indicator-icon.sc-bkkr-drawer{font-size:20px}@media screen and (min-width: 720px) and (min-height: 375px){.drawer-indicator.sc-bkkr-drawer:not(.drawer-indicator-animated){--offset-top:var(--bkkr-spacer)}.drawer-indicator.sc-bkkr-drawer:not(.drawer-indicator-animated) .drawer-indicator-wrapper.sc-bkkr-drawer{display:none}.drawer-indicator.sc-bkkr-drawer:not(.drawer-indicator-animated) .drawer-indicator-button.sc-bkkr-drawer{display:-ms-flexbox;display:flex}}@media (any-hover: hover){.drawer-indicator-wrapper.sc-bkkr-drawer:hover{--indicator-transform:translate3d(0, -100%, 0);--indicator-transition:0.2s transform ease-out, 0.2s box-shadow ease-out}.drawer-indicator-button.sc-bkkr-drawer:hover{-webkit-transform:var(--indicator-button-transform);transform:var(--indicator-button-transform);background:var(--indicator-button-backround-hover)}}.drawer-indicator-button.state-activated.sc-bkkr-drawer{-webkit-transform:var(--indicator-button-transform);transform:var(--indicator-button-transform);background:var(--indicator-button-backround-active)}@media (prefers-reduced-motion: reduce){.drawer-indicator-bar.sc-bkkr-drawer,.drawer-indicator-button.sc-bkkr-drawer{-webkit-transition:none;transition:none}}";export{y as bkkr_drawer}