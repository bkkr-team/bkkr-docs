var __awaiter=this&&this.__awaiter||function(r,e,t,i){function a(r){return r instanceof t?r:new t((function(e){e(r)}))}return new(t||(t=Promise))((function(t,n){function o(r){try{c(i.next(r))}catch(r){n(r)}}function s(r){try{c(i["throw"](r))}catch(r){n(r)}}function c(r){r.done?t(r.value):a(r.value).then(o,s)}c((i=i.apply(r,e||[])).next())}))};var __generator=this&&this.__generator||function(r,e){var t={label:0,sent:function(){if(n[0]&1)throw n[1];return n[1]},trys:[],ops:[]},i,a,n,o;return o={next:s(0),throw:s(1),return:s(2)},typeof Symbol==="function"&&(o[Symbol.iterator]=function(){return this}),o;function s(r){return function(e){return c([r,e])}}function c(o){if(i)throw new TypeError("Generator is already executing.");while(t)try{if(i=1,a&&(n=o[0]&2?a["return"]:o[0]?a["throw"]||((n=a["return"])&&n.call(a),0):a.next)&&!(n=n.call(a,o[1])).done)return n;if(a=0,n)o=[o[0]&2,n.value];switch(o[0]){case 0:case 1:n=o;break;case 4:t.label++;return{value:o[1],done:false};case 5:t.label++;a=o[1];o=[0];continue;case 7:o=t.ops.pop();t.trys.pop();continue;default:if(!(n=t.trys,n=n.length>0&&n[n.length-1])&&(o[0]===6||o[0]===2)){t=0;continue}if(o[0]===3&&(!n||o[1]>n[0]&&o[1]<n[3])){t.label=o[1];break}if(o[0]===6&&t.label<n[1]){t.label=n[1];n=o;break}if(n&&t.label<n[2]){t.label=n[2];t.ops.push(o);break}if(n[2])t.ops.pop();t.trys.pop();continue}o=e.call(r,t)}catch(r){o=[6,r];a=0}finally{i=n=0}if(o[0]&5)throw o[1];return{value:o[0]?o[1]:void 0,done:true}}};System.register(["./p-92f7c087.system.js","./p-d2d3f0b5.system.js","./p-7660814d.system.js","./p-0b5de7fa.system.js","./p-af5365d2.system.js","./p-064daac9.system.js","./p-d0c60236.system.js","./p-576893c9.system.js","./p-4c5bd054.system.js","./p-42e53900.system.js","./p-1a88d7e4.system.js"],(function(r){"use strict";var e,t,i,a,n,o,s,c,d,l,u,b,f,h,p,w,k,m,v,g;return{setters:[function(r){e=r.r;t=r.e;i=r.c;a=r.h;n=r.H;o=r.g},function(r){s=r.e},function(r){c=r.c},function(r){d=r.g},function(){},function(r){l=r.createGesture},function(){},function(r){u=r.B;b=r.b;f=r.c;h=r.g;p=r.e;w=r.f},function(r){k=r.g},function(r){m=r.a;v=r.d},function(r){g=r.d}],execute:function(){var y=this;var x=function(r,e,t){if(t===void 0){t=400}var i=c().addElement(r.querySelector("bkkr-backdrop")).fromTo("opacity",0,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]);var a=c().addElement(r.querySelectorAll(".drawer-wrapper, .drawer-shadow")).beforeStyles({opacity:1}).fromTo("transform","translateY(100vh)","translateY(0vh)");var n=c().addElement(r).easing("cubic-bezier(0.32,0.72,0,1)").duration(t).addAnimation(a);if(e){var o=c().beforeStyles({transform:"translateY(0)","transform-origin":"top center",overflow:"hidden"});o.addElement(e);n.addAnimation(o)}n.addAnimation(i);return n};var D=function(r,e,t){if(t===void 0){t=400}var i=c().addElement(r.querySelector("bkkr-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0);var a=c().addElement(r.querySelectorAll(".drawer-wrapper, .drawer-shadow")).beforeStyles({opacity:1}).fromTo("transform","translateY(0vh)","translateY(100vh)");var n=c().addElement(r).easing("cubic-bezier(0.32,0.72,0,1)").duration(t).addAnimation(a);if(e){var o=c().beforeClearStyles(["transform"]).afterClearStyles(["transform"]).onFinish((function(r){if(r!==1){return}e.style.setProperty("overflow","")}));n.addAnimation(o)}n.addAnimation(i);return n};var E=function(r,e,t){var i=r.offsetHeight;var a=false;var n=function(r){return __awaiter(y,void 0,void 0,(function(){var e,t,i;return __generator(this,(function(a){switch(a.label){case 0:e=r.event.target;if(e===null||!e.closest){return[2,true]}if(e.classList.contains("choices-item")){return[2,false]}t=e.closest("bkkr-content");if(!t)return[3,2];return[4,t.getScrollElement()];case 1:i=a.sent();if(i.scrollTop<=0){return[2,true]}return[3,3];case 2:if(e){return[2,true]}a.label=3;case 3:return[2,false]}}))}))};var o=function(){e.progressStart(true,a?1:0)};var c=function(r){var t=s(1e-4,r.deltaY/i,.9999);e.progressStep(t)};var u=function(r){var n=r.velocityY;var o=s(1e-4,r.deltaY/i,.9999);var c=(r.deltaY+n*1e3)/i;var l=c>=.5;var u=l?-.001:.001;if(!l){e.easing("cubic-bezier(1, 0, 0.68, 0.28)");u+=d([0,0],[1,0],[.68,.28],[1,1],o)[0]}else{e.easing("cubic-bezier(0.32, 0.72, 0, 1)");u+=d([0,0],[.32,.72],[0,1],[1,1],o)[0]}var f=r.event.target;var h=f.closest("bkkr-content");if(h){h.scrollY=true}var p=l?S(o*i,n):S((1-o)*i,n);a=l;b.enable(false);e.onFinish((function(){if(!l){b.enable(true)}})).progressEnd(l?1:0,u,p);if(l){t()}};var b=l({el:r,gestureName:"drawerSwipeToClose",gesturePriority:40,direction:"y",threshold:10,canStart:n,onStart:o,onMove:c,onEnd:u});return b};var S=function(r,e){return s(400,r/Math.abs(e*1.1),500)};var _=".sc-bkkr-drawer-h{--min-width:auto;--min-height:auto;--overflow:hidden;--border-width:0;--border-style:none;--border-color:transparent;--background:var(--bkkr-overlay-background, var(--bkkr-background-color, #fff));--box-shadow:0 15px 25px 0 rgba(var(--box-shadow-color, 0, 0, 0), 0.1), 0 6px 20px 0 rgba(var(--box-shadow-color, 0, 0, 0), 0.12), 0 13.2px 40px 0 rgba(var(--box-shadow-color, 0, 0, 0), 0.08);--height:100vw;--max-width:600px;--max-height:calc(90vh - var(--safe-area-top));--border-radius:2em;--backdrop-opacity:0;--width:100%;--margin-bottom:0px;top:0;right:0;bottom:0;left:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-align:end;align-items:flex-end;-ms-flex-pack:center;justify-content:center;-webkit-transition:all 0.5s ease-in-out;transition:all 0.5s ease-in-out;outline:none;contain:strict}.sc-bkkr-drawer-h:first-of-type{--backdrop-opacity:.18}.drawer-shadow.sc-bkkr-drawer,.drawer-wrapper.sc-bkkr-drawer{position:relative;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:calc(var(--height) - max(30px, var(--safe-area-top)) - 10px - var(--margin-bottom));min-height:var(--min-height);max-height:var(--max-height);-webkit-transform:translate3d(0, 100%, 0);transform:translate3d(0, 100%, 0);z-index:10}.drawer-shadow.sc-bkkr-drawer{border-top-left-radius:var(--border-radius);border-top-right-radius:var(--border-radius);position:absolute;pointer-events:none;background:transparent;-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:var(--overflow)}.drawer-wrapper-inner.sc-bkkr-drawer{border-top-left-radius:var(--border-radius);border-top-right-radius:var(--border-radius);padding-top:var(--offset-top, 0);margin-bottom:var(--margin-bottom);position:relative;display:-ms-flexbox;display:flex;height:100%;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:justify;justify-content:space-between;border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);overflow:var(--overflow);contain:content}bkkr-content.sc-bkkr-drawer:first-child{--padding-top:0;--padding-bottom:calc(var(--bkkr-spacer, 16px) + var(--safe-area-bottom))}.drawer-card.sc-bkkr-drawer-h{--width:calc(100% - var(--bkkr-spacer, 16px));--height:calc(100vw - var(--bkkr-spacer, 16px));--margin-bottom:calc(var(--safe-area-bottom) + (var(--bkkr-spacer, 16px) / 2))}.drawer-card.sc-bkkr-drawer-h .drawer-shadow.sc-bkkr-drawer,.drawer-card.sc-bkkr-drawer-h .drawer-wrapper.sc-bkkr-drawer{border-radius:var(--border-radius)}.drawer-indicator-wrapper.sc-bkkr-drawer{--indicator-height:6px;--indicator-width:64px;--indicator-color:var(--bkkr-text-color, #000);--indicator-transition:0.2s transform cubic-bezier(0.25, 1.11, 0.78, 1.59), 0.2s box-shadow cubic-bezier(0.25, 1.11, 0.78, 1.59);--indicator-transform:translate3d(0, -50%, 0);top:0;left:50%;position:absolute;width:var(--indicator-width);height:32px;-webkit-transform:translateX(-50%);transform:translateX(-50%);cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:10}.drawer-indicator-wrapper.sc-bkkr-drawer .drawer-indicator-bar.sc-bkkr-drawer{top:50%;bottom:0;left:0;border-radius:var(--indicator-height);position:absolute;width:100%;height:var(--indicator-height);-webkit-transform:var(--indicator-transform);transform:var(--indicator-transform);-webkit-transition:var(--indicator-transition);transition:var(--indicator-transition);background-color:var(--indicator-color)}.drawer-indicator-button.sc-bkkr-drawer{--indicator-button-backround:transparent;--indicator-button-backround-hover:rgba(var(--bkkr-text-color-rgb, 0, 0, 0), .064);--indicator-button-backround-active:rgba(var(--bkkr-text-color-rgb, 0, 0, 0), .12);--indicator-button-color:var(--bkkr-text-color, #000);--indicator-button-radius:50%;--indicator-button-transform:rotate(90deg);--indicator-button-transition:0.2s transform cubic-bezier(0.32, 0.72, 0, 1), 0.2s background cubic-bezier(0.32, 0.72, 0, 1);top:-48px;right:var(--bkkr-spacer);border-radius:var(--indicator-button-radius);position:absolute;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;width:36px;height:36px;cursor:pointer;-webkit-transition:var(--indicator-button-transition);transition:var(--indicator-button-transition);background:var(--indicator-button-backround);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:10}.indicator-icon.sc-bkkr-drawer{font-size:20px}@media screen and (max-width: 767px){.drawer-indicator.sc-bkkr-drawer{--offset-top:24px}}@media screen and (min-width: 768px){.drawer-indicator.sc-bkkr-drawer{--offset-top:24px}}@media (any-hover: hover){.drawer-indicator-wrapper.sc-bkkr-drawer:hover{--indicator-transform:translate3d(0, -100%, 0);--indicator-transition:0.2s transform ease-out, 0.2s box-shadow ease-out}.drawer-indicator-button.sc-bkkr-drawer:hover{background:var(--indicator-button-backround-hover);-webkit-transform:var(--indicator-button-transform);transform:var(--indicator-button-transform)}}.drawer-indicator-button.state-activated.sc-bkkr-drawer{background:var(--indicator-button-backround-active);-webkit-transform:var(--indicator-button-transform);transform:var(--indicator-button-transform)}@media (prefers-reduced-motion: reduce){.drawer-indicator-bar.sc-bkkr-drawer{-webkit-transition:none;transition:none}}";var j=r("bkkr_drawer",function(){function r(r){var i=this;e(this,r);this.didPresent=t(this,"bkkrDrawerDidPresent",7);this.willPresent=t(this,"bkkrDrawerWillPresent",7);this.willDismiss=t(this,"bkkrDrawerWillDismiss",7);this.didDismiss=t(this,"bkkrDrawerDidDismiss",7);this.gestureAnimationDismissing=false;this.presented=false;this.keyboardClose=true;this.card=false;this.backdropDismiss=true;this.showBackdrop=true;this.animated=true;this.indicator=true;this.swipeToClose=true;this.presentingElement=document.querySelector("bkkr-root")||document.body;this.onBackdropTap=function(){i.dismiss(undefined,u)};this.onDismiss=function(r){r.stopPropagation();r.preventDefault();i.dismiss()};this.onLifecycle=function(r){var e=i.usersElement;var t=C[r.type];if(e&&t){var a=new CustomEvent(t,{bubbles:false,cancelable:false,detail:r.detail});e.dispatchEvent(a)}}}r.prototype.swipeToCloseChanged=function(r){if(this.gesture){this.gesture.enable(r)}else if(r){this.initSwipeToClose()}};r.prototype.connectedCallback=function(){b(this.el)};r.prototype.present=function(){return __awaiter(this,void 0,void 0,(function(){var r,e,t;var a=this;return __generator(this,(function(n){switch(n.label){case 0:if(this.presented){return[2]}r=this.el.querySelector(".drawer-wrapper-inner");if(!r){throw new Error("container is undefined")}e=Object.assign(Object.assign({},this.componentProps),{drawer:this.el});t=this;return[4,m(this.delegate,r,this.component,["bkkr-page","drawer-viewport"],e)];case 1:t.usersElement=n.sent();return[4,g(this.usersElement)];case 2:n.sent();i((function(){return a.el.classList.add("show-drawer")}));return[4,f(this,x,this.presentingElement)];case 3:n.sent();if(this.swipeToClose){this.initSwipeToClose()}return[2]}}))}))};r.prototype.initSwipeToClose=function(){var r=this;var e=this.leaveAnimation||D;var t=this.animation=e(this.el,this.presentingElement);this.gesture=E(this.el,t,(function(){r.gestureAnimationDismissing=true;r.animation.onFinish((function(){return __awaiter(r,void 0,void 0,(function(){return __generator(this,(function(r){switch(r.label){case 0:return[4,this.dismiss(undefined,"gesture")];case 1:r.sent();this.gestureAnimationDismissing=false;return[2]}}))}))}))}));this.gesture.enable(true)};r.prototype.dismiss=function(r,e){return __awaiter(this,void 0,void 0,(function(){var t,i;return __generator(this,(function(a){switch(a.label){case 0:if(this.gestureAnimationDismissing&&e!=="gesture"){return[2,false]}t=h.get(this)||[];return[4,p(this,r,e,D,this.presentingElement)];case 1:i=a.sent();if(!i)return[3,3];return[4,v(this.delegate,this.usersElement)];case 2:a.sent();if(this.animation){this.animation.destroy()}t.forEach((function(r){return r.destroy()}));a.label=3;case 3:this.animation=undefined;return[2,i]}}))}))};r.prototype.onDidDismiss=function(){return w(this.el,"bkkrDrawerDidDismiss")};r.prototype.onWillDismiss=function(){return w(this.el,"bkkrDrawerWillDismiss")};r.prototype.render=function(){var r=this;return a(n,{"aria-modal":"true",tabindex:"-1",class:Object.assign(Object.assign({},k(this.cssClass)),{"drawer-card":this.card}),style:{zIndex:""+(2e4+this.overlayIndex)},onBkkrBackdropTap:this.onBackdropTap,onBkkrDismiss:this.onDismiss,onBkkrDrawerDidPresent:this.onLifecycle,onBkkrDrawerWillPresent:this.onLifecycle,onBkkrDrawerWillDismiss:this.onLifecycle,onBkkrDrawerDidDismiss:this.onLifecycle},a("bkkr-backdrop",{visible:this.showBackdrop,tappable:this.backdropDismiss}),a("div",{class:"drawer-shadow"}),a("div",{tabindex:"0"}),a("div",{role:"dialog",class:{"drawer-indicator":this.indicator,"drawer-wrapper":true}},this.indicator&&a("div",{class:"drawer-indicator-wrapper state-activatable",onClick:function(){return r.dismiss()}},a("span",{class:"drawer-indicator-bar"})),this.indicator&&a("div",{class:"drawer-indicator-button state-activatable",onClick:function(){return r.dismiss()}},a("bkkr-icon",{class:"indicator-icon",name:"times"})),a("div",{class:"drawer-wrapper-inner"})),a("div",{tabindex:"0"}))};Object.defineProperty(r.prototype,"el",{get:function(){return o(this)},enumerable:false,configurable:true});Object.defineProperty(r,"watchers",{get:function(){return{swipeToClose:["swipeToCloseChanged"]}},enumerable:false,configurable:true});return r}());var C={bkkrDrawerDidPresent:"bkkrViewDidEnter",bkkrDrawerWillPresent:"bkkrViewWillEnter",bkkrDrawerWillDismiss:"bkkrViewWillLeave",bkkrDrawerDidDismiss:"bkkrViewDidLeave"};j.style=_}}}));