var __awaiter=this&&this.__awaiter||function(r,t,e,i){function a(r){return r instanceof e?r:new e((function(t){t(r)}))}return new(e||(e=Promise))((function(e,n){function o(r){try{d(i.next(r))}catch(r){n(r)}}function s(r){try{d(i["throw"](r))}catch(r){n(r)}}function d(r){r.done?e(r.value):a(r.value).then(o,s)}d((i=i.apply(r,t||[])).next())}))};var __generator=this&&this.__generator||function(r,t){var e={label:0,sent:function(){if(n[0]&1)throw n[1];return n[1]},trys:[],ops:[]},i,a,n,o;return o={next:s(0),throw:s(1),return:s(2)},typeof Symbol==="function"&&(o[Symbol.iterator]=function(){return this}),o;function s(r){return function(t){return d([r,t])}}function d(o){if(i)throw new TypeError("Generator is already executing.");while(e)try{if(i=1,a&&(n=o[0]&2?a["return"]:o[0]?a["throw"]||((n=a["return"])&&n.call(a),0):a.next)&&!(n=n.call(a,o[1])).done)return n;if(a=0,n)o=[o[0]&2,n.value];switch(o[0]){case 0:case 1:n=o;break;case 4:e.label++;return{value:o[1],done:false};case 5:e.label++;a=o[1];o=[0];continue;case 7:o=e.ops.pop();e.trys.pop();continue;default:if(!(n=e.trys,n=n.length>0&&n[n.length-1])&&(o[0]===6||o[0]===2)){e=0;continue}if(o[0]===3&&(!n||o[1]>n[0]&&o[1]<n[3])){e.label=o[1];break}if(o[0]===6&&e.label<n[1]){e.label=n[1];n=o;break}if(n&&e.label<n[2]){e.label=n[2];e.ops.push(o);break}if(n[2])e.ops.pop();e.trys.pop();continue}o=t.call(r,e)}catch(r){o=[6,r];a=0}finally{i=n=0}if(o[0]&5)throw o[1];return{value:o[0]?o[1]:void 0,done:true}}};System.register(["./p-ddd3d159.system.js","./p-5e4b8ffe.system.js","./p-c02911cd.system.js","./p-eabc78da.system.js","./p-344de14e.system.js","./p-749e6e2c.system.js","./p-7e283b4e.system.js","./p-0b5de7fa.system.js","./p-b0e05d5f.system.js","./p-d0c60236.system.js","./p-9fa1fcc4.system.js"],(function(r){"use strict";var t,e,i,a,n,o,s,d,c,l,u,b,f,h,w,m,p,k,v,g,y;return{setters:[function(r){t=r.r;e=r.c;i=r.e;a=r.h;n=r.H;o=r.g},function(r){s=r.g},function(r){d=r.B;c=r.b;l=r.c;u=r.g;b=r.e;f=r.f},function(r){h=r.a;w=r.d},function(r){m=r.d},function(r){p=r.c},function(r){k=r.g;v=r.h},function(r){g=r.g},function(r){y=r.createGesture},function(){},function(){}],execute:function(){var x=this;var D=function(r,t,e){if(e===void 0){e=400}var i=k(r);var a=p().addElement(i.querySelector("bkkr-backdrop")).fromTo("opacity",0,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]);var n=p().addElement(i.querySelectorAll(".drawer-wrapper, .drawer-shadow")).beforeStyles({opacity:1}).fromTo("transform","translateY(100vh)","translateY(0vh)");var o=p().addElement(r).easing("cubic-bezier(0.32,0.72,0,1)").duration(e).addAnimation(n);if(t){var s=k(t);var d=p().beforeStyles({transform:"translateY(0)","transform-origin":"top center",overflow:"hidden"});d.addElement(s);o.addAnimation(d)}o.addAnimation(a);return o};var E=function(r,t,e){if(e===void 0){e=400}var i=k(r);var a=p().addElement(i.querySelector("bkkr-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0);var n=p().addElement(i.querySelectorAll(".drawer-wrapper, .drawer-shadow")).beforeStyles({opacity:1}).fromTo("transform","translateY(0vh)","translateY(100vh)");var o=p().addElement(r).easing("cubic-bezier(0.32,0.72,0,1)").duration(e).addAnimation(n);if(t){var s=p().beforeClearStyles(["transform"]).afterClearStyles(["transform"]).onFinish((function(r){if(r!==1){return}t.style.setProperty("overflow","")}));o.addAnimation(s)}o.addAnimation(a);return o};var S=function(r,t,e){var i=r.offsetHeight;var a=false;var n=function(r){return __awaiter(x,void 0,void 0,(function(){var t,e,i;return __generator(this,(function(a){switch(a.label){case 0:t=r.event.target;if(t===null||!t.closest){return[2,true]}if(t.classList.contains("choices-item")){return[2,false]}e=t.closest("bkkr-content");if(!e)return[3,2];return[4,e.getScrollElement()];case 1:i=a.sent();if(i.scrollTop<=0){return[2,true]}return[3,3];case 2:if(t){return[2,true]}a.label=3;case 3:return[2,false]}}))}))};var o=function(){t.progressStart(true,a?1:0)};var s=function(r){var e=v(1e-4,r.deltaY/i,.9999);t.progressStep(e)};var d=function(r){var n=r.velocityY;var o=v(1e-4,r.deltaY/i,.9999);var s=(r.deltaY+n*1e3)/i;var d=s>=.5;var l=d?-.001:.001;if(!d){t.easing("cubic-bezier(1, 0, 0.68, 0.28)");l+=g([0,0],[1,0],[.68,.28],[1,1],o)[0]}else{t.easing("cubic-bezier(0.32, 0.72, 0, 1)");l+=g([0,0],[.32,.72],[0,1],[1,1],o)[0]}var u=r.event.target;var b=u.closest("bkkr-content");if(b){b.scrollY=true}var f=d?T(o*i,n):T((1-o)*i,n);a=d;c.enable(false);t.onFinish((function(){if(!d){c.enable(true)}})).progressEnd(d?1:0,l,f);if(d){e()}};var c=y({el:r,gestureName:"drawerSwipeToClose",gesturePriority:40,direction:"y",threshold:10,canStart:n,onStart:o,onMove:s,onEnd:d});return c};var T=function(r,t){return v(400,r/Math.abs(t*1.1),500)};var _=".sc-bkkr-drawer-h{--min-width:auto;--min-height:auto;--overflow:hidden;--border-width:0;--border-style:none;--border-color:transparent;--background:var(--bkkr-overlay-background, var(--bkkr-background-color, #fff));--box-shadow:0 15px 25px 0 rgba(var(--box-shadow-color, 0, 0, 0), 0.1), 0 6px 20px 0 rgba(var(--box-shadow-color, 0, 0, 0), 0.12), 0 13.2px 40px 0 rgba(var(--box-shadow-color, 0, 0, 0), 0.08);--height:100vw;--max-width:720px;--max-height:min(720px, calc(90vh - var(--safe-area-top)));--border-radius:1.5em;--backdrop-opacity:0;--width:100%;--margin-bottom:0px;top:0;right:0;bottom:0;left:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-align:end;align-items:flex-end;-ms-flex-pack:center;justify-content:center;-webkit-transition:all 0.5s ease-in-out;transition:all 0.5s ease-in-out;outline:none;contain:strict}.sc-bkkr-drawer-h:first-of-type{--backdrop-opacity:var(--bkkr-backdrop-opacity, 0.3)}.drawer-shadow.sc-bkkr-drawer,.drawer-wrapper.sc-bkkr-drawer{margin-bottom:var(--margin-bottom);display:-ms-flexbox;display:flex;position:relative;-ms-flex-direction:column;flex-direction:column;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:calc(var(--height) - max(30px, var(--safe-area-top)) - 10px - var(--margin-bottom));min-height:var(--min-height);max-height:var(--max-height);-webkit-transform:translate3d(0, 100%, 0);transform:translate3d(0, 100%, 0);will-change:opacity, transform;z-index:10}.drawer-shadow.sc-bkkr-drawer{bottom:0;border-top-left-radius:var(--border-radius);border-top-right-radius:var(--border-radius);position:absolute;pointer-events:none;background:transparent;-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:var(--overflow)}.drawer-wrapper-inner.sc-bkkr-drawer{border-top-left-radius:var(--border-radius);border-top-right-radius:var(--border-radius);padding-top:var(--offset-top, 0);display:-ms-flexbox;display:flex;position:relative;-ms-flex:1;flex:1;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:justify;justify-content:space-between;width:100%;height:100%;border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);contain:content;overflow:var(--overflow);z-index:10}bkkr-content.sc-bkkr-drawer:first-child{--padding-top:0;--padding-bottom:calc(var(--bkkr-spacer, 16px) + var(--safe-area-bottom))}.drawer-card.sc-bkkr-drawer-h{--width:calc(100% - var(--bkkr-spacer, 16px));--height:calc(100vw - var(--bkkr-spacer, 16px));--margin-bottom:calc(var(--safe-area-bottom) + (var(--bkkr-spacer, 16px) / 2))}.drawer-card.sc-bkkr-drawer-h .drawer-shadow.sc-bkkr-drawer,.drawer-card.sc-bkkr-drawer-h .drawer-wrapper-inner.sc-bkkr-drawer{border-radius:var(--border-radius)}.drawer-indicator.sc-bkkr-drawer{--offset-top:24px}.drawer-indicator-wrapper.sc-bkkr-drawer{--indicator-height:6px;--indicator-width:64px;--indicator-color:var(--bkkr-text-color, #000);--indicator-transition:0.2s transform cubic-bezier(0.25, 1.11, 0.78, 1.59), 0.2s box-shadow cubic-bezier(0.25, 1.11, 0.78, 1.59);--indicator-transform:translate3d(0, -50%, 0);top:0;left:50%;position:absolute;width:var(--indicator-width);height:32px;-webkit-transform:translateX(-50%);transform:translateX(-50%);cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:11}.drawer-indicator-wrapper.sc-bkkr-drawer .drawer-indicator-bar.sc-bkkr-drawer{top:50%;bottom:0;left:0;border-radius:var(--indicator-height);position:absolute;width:100%;height:var(--indicator-height);-webkit-transform:var(--indicator-transform);transform:var(--indicator-transform);-webkit-transition:var(--indicator-transition);transition:var(--indicator-transition);background-color:rgba(var(--bkkr-text-color-rgb, 0, 0, 0), 0.2);overflow:hidden}.drawer-indicator-wrapper.sc-bkkr-drawer .drawer-indicator-bar-fill.sc-bkkr-drawer{top:0;position:absolute;width:100%;height:100%;background-color:var(--indicator-color)}.drawer-indicator-animated.sc-bkkr-drawer .drawer-indicator-bar-fill.sc-bkkr-drawer{-webkit-transform:scale(0, 1);transform:scale(0, 1);-webkit-transform-origin:left center;transform-origin:left center;-webkit-animation-name:countdown;animation-name:countdown;-webkit-animation-timing-function:linear;animation-timing-function:linear;-webkit-animation-iteration-count:1;animation-iteration-count:1;-webkit-animation-delay:400ms;animation-delay:400ms;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}@-webkit-keyframes countdown{100%{-webkit-transform:scale(1, 1);transform:scale(1, 1)}}@keyframes countdown{100%{-webkit-transform:scale(1, 1);transform:scale(1, 1)}}.drawer-indicator-button.sc-bkkr-drawer{--indicator-button-backround:var(--bkkr-background-color, #fff);--indicator-button-backround-hover:var(--indicator-button-backround);--indicator-button-backround-active:var(--indicator-button-backround);--indicator-button-color:var(--bkkr-text-color, #000);--indicator-button-radius:50%;--indicator-button-transform:scale(1.1);--indicator-button-transition:0.2s transform cubic-bezier(0.32, 0.72, 0, 1), 0.2s background cubic-bezier(0.32, 0.72, 0, 1);top:-48px;right:var(--bkkr-spacer);border-radius:var(--indicator-button-radius);display:none;position:absolute;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:36px;height:36px;-webkit-transition:var(--indicator-button-transition);transition:var(--indicator-button-transition);background:var(--indicator-button-backround);color:var(--indicator-button-color);cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:10}.indicator-icon.sc-bkkr-drawer{font-size:20px}@media screen and (min-width: 720px) and (min-height: 375px){.drawer-indicator.sc-bkkr-drawer:not(.drawer-indicator-animated){--offset-top:var(--bkkr-spacer)}.drawer-indicator.sc-bkkr-drawer:not(.drawer-indicator-animated) .drawer-indicator-wrapper.sc-bkkr-drawer{display:none}.drawer-indicator.sc-bkkr-drawer:not(.drawer-indicator-animated) .drawer-indicator-button.sc-bkkr-drawer{display:-ms-flexbox;display:flex}}@media (any-hover: hover){.drawer-indicator-wrapper.sc-bkkr-drawer:hover{--indicator-transform:translate3d(0, -100%, 0);--indicator-transition:0.2s transform ease-out, 0.2s box-shadow ease-out}.drawer-indicator-button.sc-bkkr-drawer:hover{-webkit-transform:var(--indicator-button-transform);transform:var(--indicator-button-transform);background:var(--indicator-button-backround-hover)}}.drawer-indicator-button.state-activated.sc-bkkr-drawer{-webkit-transform:var(--indicator-button-transform);transform:var(--indicator-button-transform);background:var(--indicator-button-backround-active)}@media (prefers-reduced-motion: reduce){.drawer-indicator-bar.sc-bkkr-drawer,.drawer-indicator-button.sc-bkkr-drawer{-webkit-transition:none;transition:none}}";var j=r("bkkr_drawer",function(){function r(r){var i=this;t(this,r);this.didPresent=e(this,"bkkrDrawerDidPresent",7);this.willPresent=e(this,"bkkrDrawerWillPresent",7);this.willDismiss=e(this,"bkkrDrawerWillDismiss",7);this.didDismiss=e(this,"bkkrDrawerDidDismiss",7);this.gestureAnimationDismissing=false;this.presented=false;this.keyboardClose=true;this.card=false;this.duration=0;this.backdropDismiss=true;this.showBackdrop=true;this.animated=true;this.indicator=true;this.closeButton=true;this.swipeToClose=true;this.presentingElement=document.querySelector("bkkr-root")||document.body;this.onBackdropTap=function(){i.dismiss(undefined,d)};this.onDismiss=function(r){r.stopPropagation();r.preventDefault();i.dismiss()};this.onLifecycle=function(r){var t=i.usersElement;var e=C[r.type];if(t&&e){var a=new CustomEvent(e,{bubbles:false,cancelable:false,detail:r.detail});t.dispatchEvent(a)}}}r.prototype.swipeToCloseChanged=function(r){if(this.gesture){this.gesture.enable(r)}else if(r){this.initSwipeToClose()}};r.prototype.connectedCallback=function(){c(this.el)};r.prototype.present=function(){return __awaiter(this,void 0,void 0,(function(){var r,t,e;var a=this;return __generator(this,(function(n){switch(n.label){case 0:if(this.presented){return[2]}r=this.el.querySelector(".drawer-wrapper-inner");if(!r){throw new Error("container is undefined")}t=Object.assign(Object.assign({},this.componentProps),{drawer:this.el});e=this;return[4,h(this.delegate,r,this.component,["bkkr-page","drawer-viewport"],t)];case 1:e.usersElement=n.sent();return[4,m(this.usersElement)];case 2:n.sent();i((function(){return a.el.classList.add("show-drawer")}));return[4,l(this,"drawerEnter",D,this.presentingElement)];case 3:n.sent();if(this.swipeToClose){this.initSwipeToClose()}if(this.duration>0){this.durationTimeout=setTimeout((function(){return a.dismiss(undefined,"timeout")}),this.duration)}return[2]}}))}))};r.prototype.initSwipeToClose=function(){var r=this;var t=this.leaveAnimation||E;var e=this.animation=t(this.el,this.presentingElement);this.gesture=S(this.el,e,(function(){r.gestureAnimationDismissing=true;r.animation.onFinish((function(){return __awaiter(r,void 0,void 0,(function(){return __generator(this,(function(r){switch(r.label){case 0:return[4,this.dismiss(undefined,"gesture")];case 1:r.sent();this.gestureAnimationDismissing=false;return[2]}}))}))}))}));this.gesture.enable(true)};r.prototype.dismiss=function(r,t){return __awaiter(this,void 0,void 0,(function(){var e,i;var a=this;return __generator(this,(function(n){switch(n.label){case 0:if(this.gestureAnimationDismissing&&t!=="gesture"){return[2,false]}if(this.durationTimeout){clearTimeout(this.durationTimeout);if(this.gesture.running()){if(this.duration>0){this.durationTimeout=setTimeout((function(){return a.dismiss(undefined,"timeout")}),this.duration)}return[2,false]}}e=u.get(this)||[];return[4,b(this,r,t,"drawerLeave",E,this.presentingElement)];case 1:i=n.sent();if(!i)return[3,3];return[4,w(this.delegate,this.usersElement)];case 2:n.sent();if(this.animation){this.animation.destroy()}e.forEach((function(r){return r.destroy()}));n.label=3;case 3:this.animation=undefined;return[2,i]}}))}))};r.prototype.onDidDismiss=function(){return f(this.el,"bkkrDrawerDidDismiss")};r.prototype.onWillDismiss=function(){return f(this.el,"bkkrDrawerWillDismiss")};r.prototype.render=function(){var r=this;var t=this.closeIcon;var e=this.duration>0;return a(n,{"aria-modal":"true",tabindex:"-1",class:Object.assign(Object.assign({},s(this.cssClass)),{"drawer-card":this.card}),style:{zIndex:""+(2e4+this.overlayIndex)},onBkkrBackdropTap:this.onBackdropTap,onBkkrDismiss:this.onDismiss,onBkkrDrawerDidPresent:this.onLifecycle,onBkkrDrawerWillPresent:this.onLifecycle,onBkkrDrawerWillDismiss:this.onLifecycle,onBkkrDrawerDidDismiss:this.onLifecycle},a("bkkr-backdrop",{visible:this.showBackdrop,tappable:this.backdropDismiss}),a("div",{class:"drawer-shadow"}),a("div",{tabindex:"0"}),a("div",{role:"dialog",class:{"drawer-indicator":this.indicator,"drawer-indicator-animated":e,"drawer-wrapper":true}},(this.indicator||e)&&a("div",{class:"drawer-indicator-wrapper state-activatable",onClick:function(){return r.dismiss()}},a("span",{class:"drawer-indicator-bar"},a("span",{class:"drawer-indicator-bar-fill",style:{animationDuration:this.duration+"ms"}}))),this.closeButton&&!e&&a("div",{class:"drawer-indicator-button state-activatable",onClick:function(){return r.dismiss()}},a("bkkr-icon",{class:"indicator-icon",icon:t!==null&&t!==void 0?t:"times"})),a("div",{class:"drawer-wrapper-inner"})),a("div",{tabindex:"0"}))};Object.defineProperty(r.prototype,"el",{get:function(){return o(this)},enumerable:false,configurable:true});Object.defineProperty(r,"watchers",{get:function(){return{swipeToClose:["swipeToCloseChanged"]}},enumerable:false,configurable:true});return r}());var C={bkkrDrawerDidPresent:"bkkrViewDidEnter",bkkrDrawerWillPresent:"bkkrViewWillEnter",bkkrDrawerWillDismiss:"bkkrViewWillLeave",bkkrDrawerDidDismiss:"bkkrViewDidLeave"};j.style=_}}}));