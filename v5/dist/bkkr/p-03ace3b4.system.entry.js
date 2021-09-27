var __awaiter=this&&this.__awaiter||function(e,t,r,n){function i(e){return e instanceof r?e:new r((function(t){t(e)}))}return new(r||(r=Promise))((function(r,a){function s(e){try{l(n.next(e))}catch(e){a(e)}}function o(e){try{l(n["throw"](e))}catch(e){a(e)}}function l(e){e.done?r(e.value):i(e.value).then(s,o)}l((n=n.apply(e,t||[])).next())}))};var __generator=this&&this.__generator||function(e,t){var r={label:0,sent:function(){if(a[0]&1)throw a[1];return a[1]},trys:[],ops:[]},n,i,a,s;return s={next:o(0),throw:o(1),return:o(2)},typeof Symbol==="function"&&(s[Symbol.iterator]=function(){return this}),s;function o(e){return function(t){return l([e,t])}}function l(s){if(n)throw new TypeError("Generator is already executing.");while(r)try{if(n=1,i&&(a=s[0]&2?i["return"]:s[0]?i["throw"]||((a=i["return"])&&a.call(i),0):i.next)&&!(a=a.call(i,s[1])).done)return a;if(i=0,a)s=[s[0]&2,a.value];switch(s[0]){case 0:case 1:a=s;break;case 4:r.label++;return{value:s[1],done:false};case 5:r.label++;i=s[1];s=[0];continue;case 7:s=r.ops.pop();r.trys.pop();continue;default:if(!(a=r.trys,a=a.length>0&&a[a.length-1])&&(s[0]===6||s[0]===2)){r=0;continue}if(s[0]===3&&(!a||s[1]>a[0]&&s[1]<a[3])){r.label=s[1];break}if(s[0]===6&&r.label<a[1]){r.label=a[1];a=s;break}if(a&&r.label<a[2]){r.label=a[2];r.ops.push(s);break}if(a[2])r.ops.pop();r.trys.pop();continue}s=t.call(e,r)}catch(e){s=[6,e];i=0}finally{n=a=0}if(s[0]&5)throw s[1];return{value:s[0]?s[1]:void 0,done:true}}};System.register(["./p-e0f86900.system.js","./p-5e4b8ffe.system.js","./p-83f3b111.system.js","./p-eabc78da.system.js","./p-c64a4227.system.js","./p-749e6e2c.system.js","./p-7e283b4e.system.js","./p-0b5de7fa.system.js","./p-d2bdd6a6.system.js","./p-840fb55b.system.js","./p-d0c60236.system.js","./p-9fa1fcc4.system.js"],(function(e){"use strict";var t,r,n,i,a,s,o,l,d,c,u,h,f,b,p,m,w,v,g,k,y,x,D;return{setters:[function(e){t=e.r;r=e.c;n=e.a;i=e.h;a=e.H;s=e.g},function(e){o=e.g},function(e){l=e.B;d=e.b;c=e.c;u=e.g;h=e.e;f=e.f},function(e){b=e.C;p=e.a;m=e.d},function(e){w=e.d},function(e){v=e.c},function(e){g=e.g;k=e.h;y=e.r},function(e){x=e.g},function(e){D=e.createGesture},function(){},function(){},function(){}],execute:function(){var T=this;var E=function(e,t,r){if(r===void 0){r=400}var n=g(e);var i=v().addElement(n.querySelector("bkkr-backdrop")).fromTo("opacity",0,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]);var a=v().addElement(n.querySelectorAll(".drawer-wrapper, .drawer-shadow")).beforeStyles({opacity:1}).fromTo("transform","translateY(100vh)","translateY(0vh)");var s=v().addElement(e).easing("cubic-bezier(0.32,0.72,0,1)").duration(r).addAnimation(a);if(t){var o=v().addElement(t).beforeStyles({transform:"translateY(0)","transform-origin":"top center",overflow:"hidden"});s.addAnimation(o)}s.addAnimation(i);return s};var S=function(e,t,r){if(r===void 0){r=400}var n=g(e);var i=v().addElement(n.querySelector("bkkr-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0);var a=v().addElement(n.querySelectorAll(".drawer-wrapper, .drawer-shadow")).beforeStyles({opacity:1}).fromTo("transform","translateY(0vh)","translateY(100vh)");var s=v().addElement(e).easing("cubic-bezier(0.32,0.72,0,1)").duration(r).addAnimation(a);if(t){var o=v().addElement(t).beforeClearStyles(["transform"]).afterClearStyles(["transform"]).onFinish((function(e){if(e!==1){return}t.style.setProperty("overflow","")}));s.addAnimation(o)}s.addAnimation(i);return s};var C=function(e,t,r){var n=e.offsetHeight;var i=false;var a=function(e){return __awaiter(T,void 0,void 0,(function(){var t,r,n;return __generator(this,(function(i){switch(i.label){case 0:t=e.event.target;if(t===null||!t.closest){return[2,true]}if(t.classList.contains("choices-item")){return[2,false]}r=t.closest("bkkr-content");if(!r)return[3,2];return[4,r.getScrollElement()];case 1:n=i.sent();if(n.scrollTop<=0){return[2,true]}return[3,3];case 2:if(t){return[2,true]}i.label=3;case 3:return[2,false]}}))}))};var s=function(){t.progressStart(true,i?1:0)};var o=function(e){var r=k(1e-4,e.deltaY/n,.9999);t.progressStep(r)};var l=function(e){var a=e.velocityY;var s=k(1e-4,e.deltaY/n,.9999);var o=(e.deltaY+a*1e3)/n;var l=o>=.5;var c=l?-.001:.001;if(!l){t.easing("cubic-bezier(1, 0, 0.68, 0.28)");c+=x([0,0],[1,0],[.68,.28],[1,1],s)[0]}else{t.easing("cubic-bezier(0.32, 0.72, 0, 1)");c+=x([0,0],[.32,.72],[0,1],[1,1],s)[0]}var u=e.event.target;var h=u.closest("bkkr-content");if(h){h.scrollY=true}var f=l?_(s*n,a):_((1-s)*n,a);i=l;d.enable(false);t.onFinish((function(){if(!l){d.enable(true)}})).progressEnd(l?1:0,c,f);if(l){r()}};var d=D({el:e,gestureName:"drawerSwipeToClose",gesturePriority:40,direction:"y",threshold:10,canStart:a,onStart:s,onMove:o,onEnd:l});return d};var _=function(e,t){return k(400,e/Math.abs(t*1.1),500)};var j=":host{--min-width:auto;--min-height:auto;--overflow:hidden;--border-width:0;--border-style:none;--border-color:transparent;--background:var(--bkkr-overlay-background, var(--bkkr-background-color, #fff));--box-shadow:0 15px 25px 0 rgba(var(--box-shadow-color, 0, 0, 0), 0.1), 0 6px 20px 0 rgba(var(--box-shadow-color, 0, 0, 0), 0.12), 0 13.2px 40px 0 rgba(var(--box-shadow-color, 0, 0, 0), 0.08);--width:calc(100% - var(--bkkr-spacer, 16px));--height:calc(100vw - var(--bkkr-spacer, 16px));--margin-bottom:calc(var(--safe-area-bottom) + (var(--bkkr-spacer, 16px) / 2));--max-width:720px;--max-height:min(600px, calc(90vh - var(--safe-area-top)));--border-radius:24px;--backdrop-opacity:0;top:0;right:0;bottom:0;left:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-align:end;align-items:flex-end;-ms-flex-pack:center;justify-content:center;-webkit-transition:all 0.5s ease-in-out;transition:all 0.5s ease-in-out;outline:none;contain:strict;pointer-events:none}:host(.drawer-interactive) .drawer-wrapper,:host(.drawer-interactive) bkkr-backdrop{pointer-events:auto}:host(.overlay-hidden){display:none}:host(:first-of-type){--backdrop-opacity:var(--bkkr-backdrop-opacity, 0.3)}.drawer-shadow,.drawer-wrapper{margin-bottom:var(--margin-bottom);display:-ms-flexbox;display:flex;position:relative;-ms-flex-direction:column;flex-direction:column;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:calc(var(--height) - max(30px, var(--safe-area-top)) - 10px - var(--margin-bottom));min-height:var(--min-height);max-height:var(--max-height);-webkit-transform:translate3d(0, 100%, 0);transform:translate3d(0, 100%, 0);will-change:opacity, transform;z-index:10}.drawer-shadow{bottom:0;border-radius:var(--border-radius);position:absolute;pointer-events:none;background:transparent;-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:var(--overflow)}.drawer-wrapper-inner{--safe-area-top:0px;--safe-area-bottom:0px;--safe-area-right:0px;--safe-area-left:0px;border-radius:var(--border-radius);display:-ms-flexbox;display:flex;position:relative;-ms-flex:1;flex:1;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:justify;justify-content:space-between;width:100%;height:100%;border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);contain:content;overflow:var(--overflow);z-index:10}bkkr-content:first-child{--padding-top:0;--padding-bottom:calc(var(--bkkr-spacer, 16px) + var(--safe-area-bottom))}.drawer-handle{--offset-top:34px}.drawer-handle-wrapper{--handle-height:6px;--handle-width:64px;--handle-color:var(--bkkr-text-color, #000);--handle-transition:0.2s transform cubic-bezier(0.25, 1.11, 0.78, 1.59), 0.2s box-shadow cubic-bezier(0.25, 1.11, 0.78, 1.59);--handle-transform:translate3d(0, -50%, 0);top:0;left:50%;position:absolute;width:var(--handle-width);height:32px;-webkit-transform:translateX(-50%);transform:translateX(-50%);cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:11}.drawer-handle-wrapper .drawer-handle-bar{top:50%;bottom:0;left:0;border-radius:var(--handle-height);position:absolute;width:100%;height:var(--handle-height);-webkit-transform:var(--handle-transform);transform:var(--handle-transform);-webkit-transition:var(--handle-transition);transition:var(--handle-transition);background-color:rgba(var(--bkkr-text-color-rgb, 0, 0, 0), 0.2);overflow:hidden}.drawer-handle-wrapper .drawer-handle-bar-fill{top:0;position:absolute;width:100%;height:100%;background-color:var(--handle-color)}.drawer-handle-animated .drawer-handle-bar-fill{-webkit-transform:scale(0, 1);transform:scale(0, 1);-webkit-transform-origin:left center;transform-origin:left center;-webkit-animation-name:countdown;animation-name:countdown;-webkit-animation-timing-function:linear;animation-timing-function:linear;-webkit-animation-iteration-count:1;animation-iteration-count:1;-webkit-animation-delay:400ms;animation-delay:400ms;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}@-webkit-keyframes countdown{100%{-webkit-transform:scale(1, 1);transform:scale(1, 1)}}@keyframes countdown{100%{-webkit-transform:scale(1, 1);transform:scale(1, 1)}}.drawer-handle-button{--handle-button-backround:var(--background);--handle-button-backround-hover:var(--background);--handle-button-backround-active:var(--background);--handle-button-color:var(--bkkr-text-color, #000);--handle-button-radius:50%;--handle-button-transform:scale(1.1);--handle-button-transition:0.2s transform cubic-bezier(0.32, 0.72, 0, 1), 0.2s background cubic-bezier(0.32, 0.72, 0, 1);top:-48px;right:var(--bkkr-spacer);border-radius:var(--handle-button-radius);display:none;position:absolute;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:36px;height:36px;-webkit-transition:var(--handle-button-transition);transition:var(--handle-button-transition);background:var(--handle-button-backround);color:var(--handle-button-color);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);cursor:pointer;-ms-touch-action:manipulation;touch-action:manipulation;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:10}.handle-icon{font-size:1.25rem}@media screen and (min-width: 720px) and (min-height: 375px){:host{--box-shadow:0px 0px 30px 10px rgba(0, 0, 0, 0.1)}.drawer-handle:not(.drawer-handle-animated){--offset-top:var(--bkkr-spacer)}.drawer-handle:not(.drawer-handle-animated) .drawer-handle-wrapper{display:none}.drawer-handle:not(.drawer-handle-animated) .drawer-handle-button{display:-ms-flexbox;display:flex}}@media (any-hover: hover){.drawer-handle-wrapper:hover{--handle-transform:translate3d(0, -100%, 0);--handle-transition:0.2s transform ease-out, 0.2s box-shadow ease-out}.drawer-handle-button:hover{-webkit-transform:var(--handle-button-transform);transform:var(--handle-button-transform);background:var(--handle-button-backround-hover)}}.drawer-handle-button.state-activated{-webkit-transform:var(--handle-button-transform);transform:var(--handle-button-transform);background:var(--handle-button-backround-active)}@media (prefers-reduced-motion: reduce){.drawer-handle-bar,.drawer-handle-button{-webkit-transition:none;transition:none}}";var P=e("bkkr_drawer",function(){function e(e){var n=this;t(this,e);this.didPresent=r(this,"bkkrDrawerDidPresent",7);this.willPresent=r(this,"bkkrDrawerWillPresent",7);this.willDismiss=r(this,"bkkrDrawerWillDismiss",7);this.didDismiss=r(this,"bkkrDrawerDidDismiss",7);this.didPresentShorthand=r(this,"didPresent",7);this.willPresentShorthand=r(this,"willPresent",7);this.willDismissShorthand=r(this,"willDismiss",7);this.didDismissShorthand=r(this,"didDismiss",7);this.drawerIndex=B++;this.coreDelegate=b();this.inline=false;this.gestureAnimationDismissing=false;this.presented=false;this.keyboardClose=true;this.duration=0;this.backdropDismiss=true;this.showBackdrop=true;this.animated=true;this.handle=true;this.closeButton=true;this.swipeToClose=true;this.presentingElement=document.querySelector("bkkr-router-outlet")||document.querySelector("bkkr-root")||document.body;this.isOpen=false;this.configureTriggerInteraction=function(){var e=n,t=e.trigger,r=e.el,i=e.destroyTriggerInteraction;if(i){i()}var a=t!==undefined?document.getElementById(t):null;if(!a){return}var s=function(e,t){var r=function(){t.present()};e.addEventListener("click",r);return function(){e.removeEventListener("click",r)}};n.destroyTriggerInteraction=s(a,r)};this.onBackdropTap=function(){n.dismiss(undefined,l)};this.onDismiss=function(e){e.stopPropagation();e.preventDefault();n.dismiss()};this.onLifecycle=function(e){var t=n.usersElement;var r=z[e.type];if(t&&r){var i=new CustomEvent(r,{bubbles:false,cancelable:false,detail:e.detail});t.dispatchEvent(i)}}}e.prototype.swipeToCloseChanged=function(e){if(this.gesture){this.gesture.enable(e)}else if(e){this.initSwipeToClose()}};e.prototype.onIsOpenChange=function(e,t){if(e===true&&t===false){this.present()}else if(e===false&&t===true){this.dismiss()}};e.prototype.onTriggerChange=function(){this.configureTriggerInteraction()};e.prototype.connectedCallback=function(){d(this.el)};e.prototype.componentWillLoad=function(){this.drawerId=this.el.hasAttribute("id")?this.el.getAttribute("id"):"bkkr-drawer-"+this.drawerIndex};e.prototype.componentDidLoad=function(){var e=this;if(this.isOpen===true){y((function(){return e.present()}))}this.configureTriggerInteraction()};e.prototype.getDelegate=function(e){if(e===void 0){e=false}if(this.workingDelegate&&!e){return{delegate:this.workingDelegate,inline:this.inline}}var t=this.el.parentNode;var r=this.inline=t!==null&&t.tagName!=="BKKR-ROOT"&&t.tagName!=="BODY";var n=this.workingDelegate=r?this.delegate||this.coreDelegate:this.delegate;return{inline:r,delegate:n}};e.prototype.present=function(){return __awaiter(this,void 0,void 0,(function(){var e,t,r,i,a;var s=this;return __generator(this,(function(o){switch(o.label){case 0:if(this.presented){return[2]}if(!(this.currentTransition!==undefined))return[3,2];return[4,this.currentTransition];case 1:o.sent();o.label=2;case 2:e=Object.assign(Object.assign({},this.componentProps),{drawer:this.el});t=this.getDelegate(true),r=t.inline,i=t.delegate;a=this;return[4,p(i,this.el,this.component,["bkkr-page"],e,r)];case 3:a.usersElement=o.sent();return[4,w(this.usersElement)];case 4:o.sent();n((function(){return s.el.classList.add("show-drawer")}));this.currentTransition=c(this,"drawerEnter",E,this.presentingElement);return[4,this.currentTransition];case 5:o.sent();this.currentTransition=undefined;if(this.swipeToClose){this.initSwipeToClose()}if(this.duration>0){this.durationTimeout=setTimeout((function(){return s.dismiss(undefined,"timeout")}),this.duration)}return[2]}}))}))};e.prototype.initSwipeToClose=function(){var e=this;var t=this.leaveAnimation||S;var r=this.animation=t(this.el,this.presentingElement);this.gesture=C(this.el,r,(function(){e.gestureAnimationDismissing=true;e.animation.onFinish((function(){return __awaiter(e,void 0,void 0,(function(){return __generator(this,(function(e){switch(e.label){case 0:return[4,this.dismiss(undefined,"gesture")];case 1:e.sent();this.gestureAnimationDismissing=false;return[2]}}))}))}))}));this.gesture.enable(true)};e.prototype.dismiss=function(e,t){return __awaiter(this,void 0,void 0,(function(){var r,n,i;var a=this;return __generator(this,(function(s){switch(s.label){case 0:if(this.gestureAnimationDismissing&&t!=="gesture"){return[2,false]}if(this.durationTimeout){clearTimeout(this.durationTimeout);if(this.gesture.running()){if(this.duration>0){this.durationTimeout=setTimeout((function(){return a.dismiss(undefined,"timeout")}),this.duration)}return[2,false]}}if(!(this.currentTransition!==undefined))return[3,2];return[4,this.currentTransition];case 1:s.sent();s.label=2;case 2:r=u.get(this)||[];this.currentTransition=h(this,e,t,"drawerLeave",S,this.presentingElement);return[4,this.currentTransition];case 3:n=s.sent();if(!n)return[3,5];this.currentTransition=h(this,e,t,"drawerLeave",S,this.presentingElement);i=this.getDelegate().delegate;return[4,m(i,this.usersElement)];case 4:s.sent();if(this.animation){this.animation.destroy()}r.forEach((function(e){return e.destroy()}));s.label=5;case 5:this.animation=undefined;this.currentTransition=undefined;return[2,n]}}))}))};e.prototype.onDidDismiss=function(){return f(this.el,"bkkrDrawerDidDismiss")};e.prototype.onWillDismiss=function(){return f(this.el,"bkkrDrawerWillDismiss")};e.prototype.render=function(){var e=this;var t=this,r=t.presented,n=t.drawerId,s=t.closeIcon,l=t.htmlAttributes;var d=this.duration>0;return i(a,Object.assign({"aria-drawer":"true",tabindex:"-1",class:Object.assign(Object.assign({},o(this.cssClass)),{"overlay-hidden":true,"drawer-interactive":r}),id:n},l,{style:{zIndex:""+(2e4+this.overlayIndex)},onBkkrBackdropTap:this.onBackdropTap,onBkkrDismiss:this.onDismiss,onBkkrDrawerDidPresent:this.onLifecycle,onBkkrDrawerWillPresent:this.onLifecycle,onBkkrDrawerWillDismiss:this.onLifecycle,onBkkrDrawerDidDismiss:this.onLifecycle}),i("bkkr-backdrop",{visible:this.showBackdrop,tappable:this.backdropDismiss,part:"backdrop"}),i("div",{class:"drawer-shadow"}),i("div",{role:"dialog",class:{"drawer-handle":this.handle,"drawer-handle-animated":d,"drawer-wrapper":true},part:"content"},(this.handle||d)&&i("div",{class:"drawer-handle-wrapper state-activatable",onClick:function(){return e.dismiss()}},i("span",{class:"drawer-handle-bar"},i("span",{class:"drawer-handle-bar-fill",style:{animationDuration:this.duration+"ms"}}))),this.closeButton&&!d&&i("div",{class:"drawer-handle-button state-activatable",onClick:function(){return e.dismiss()}},i("bkkr-icon",{class:"handle-icon",icon:s!==null&&s!==void 0?s:"times",lazy:false})),i("div",{class:"drawer-wrapper-inner"},i("slot",null))))};Object.defineProperty(e.prototype,"el",{get:function(){return s(this)},enumerable:false,configurable:true});Object.defineProperty(e,"watchers",{get:function(){return{swipeToClose:["swipeToCloseChanged"],isOpen:["onIsOpenChange"],trigger:["onTriggerChange"]}},enumerable:false,configurable:true});return e}());var z={bkkrDrawerDidPresent:"bkkrViewDidEnter",bkkrDrawerWillPresent:"bkkrViewWillEnter",bkkrDrawerWillDismiss:"bkkrViewWillLeave",bkkrDrawerDidDismiss:"bkkrViewDidLeave"};var B=0;P.style=j}}}));