var __awaiter=this&&this.__awaiter||function(t,r,e,a){function o(t){return t instanceof e?t:new e((function(r){r(t)}))}return new(e||(e=Promise))((function(e,i){function n(t){try{d(a.next(t))}catch(t){i(t)}}function s(t){try{d(a["throw"](t))}catch(t){i(t)}}function d(t){t.done?e(t.value):o(t.value).then(n,s)}d((a=a.apply(t,r||[])).next())}))};var __generator=this&&this.__generator||function(t,r){var e={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},a,o,i,n;return n={next:s(0),throw:s(1),return:s(2)},typeof Symbol==="function"&&(n[Symbol.iterator]=function(){return this}),n;function s(t){return function(r){return d([t,r])}}function d(n){if(a)throw new TypeError("Generator is already executing.");while(e)try{if(a=1,o&&(i=n[0]&2?o["return"]:n[0]?o["throw"]||((i=o["return"])&&i.call(o),0):o.next)&&!(i=i.call(o,n[1])).done)return i;if(o=0,i)n=[n[0]&2,i.value];switch(n[0]){case 0:case 1:i=n;break;case 4:e.label++;return{value:n[1],done:false};case 5:e.label++;o=n[1];n=[0];continue;case 7:n=e.ops.pop();e.trys.pop();continue;default:if(!(i=e.trys,i=i.length>0&&i[i.length-1])&&(n[0]===6||n[0]===2)){e=0;continue}if(n[0]===3&&(!i||n[1]>i[0]&&n[1]<i[3])){e.label=n[1];break}if(n[0]===6&&e.label<i[1]){e.label=i[1];i=n;break}if(i&&e.label<i[2]){e.label=i[2];e.ops.push(n);break}if(i[2])e.ops.pop();e.trys.pop();continue}n=r.call(t,e)}catch(t){n=[6,t];o=0}finally{a=i=0}if(n[0]&5)throw n[1];return{value:n[0]?n[1]:void 0,done:true}}};System.register(["./p-b25c886d.system.js","./p-926d2b94.system.js","./p-4fc78158.system.js","./p-0b5de7fa.system.js","./p-b06466bf.system.js","./p-86739731.system.js","./p-d0c60236.system.js","./p-4c58e3b5.system.js","./p-5e4b8ffe.system.js","./p-42e53900.system.js","./p-7cc062bc.system.js"],(function(t){"use strict";var r,e,a,o,i,n,s,d,l,c,u,m,f,b,p,h,k,v,w,y;return{setters:[function(t){r=t.r;e=t.e;a=t.c;o=t.h;i=t.H;n=t.g},function(t){s=t.h},function(t){d=t.c},function(t){l=t.g},function(){},function(t){c=t.createGesture},function(){},function(t){u=t.B;m=t.b;f=t.c;b=t.g;p=t.e;h=t.f},function(t){k=t.g},function(t){v=t.a;w=t.d},function(t){y=t.d}],execute:function(){var x=this;var g={MIN_PRESENTING_SCALE:.93};var E=function(t,r,e){var a=t.offsetHeight;var o=false;var i=function(t){return __awaiter(x,void 0,void 0,(function(){var r,e,a;return __generator(this,(function(o){switch(o.label){case 0:r=t.event.target;if(r===null||!r.closest){return[2,true]}e=r.closest("bkkr-content");if(e===null){return[2,true]}return[4,e.getScrollElement()];case 1:a=o.sent();if(a.scrollTop<=0){return[2,true]}return[2,false]}}))}))};var n=function(){r.progressStart(true,o?1:0)};var d=function(t){var e=s(1e-4,t.deltaY/a,.9999);r.progressStep(e)};var u=function(t){var i=t.velocityY;var n=s(1e-4,t.deltaY/a,.9999);var d=(t.deltaY+i*1e3)/a;var c=d>=.5;var u=c?-.001:.001;if(!c){r.easing("cubic-bezier(1, 0, 0.68, 0.28)");u+=l([0,0],[1,0],[.68,.28],[1,1],n)[0]}else{r.easing("cubic-bezier(0.32, 0.72, 0, 1)");u+=l([0,0],[.32,.72],[0,1],[1,1],n)[0]}var f=c?S(n*a,i):S((1-n)*a,i);o=c;m.enable(false);r.onFinish((function(){if(!c){m.enable(true)}})).progressEnd(c?1:0,u,f);if(c){e()}};var m=c({el:t,gestureName:"modalSwipeToClose",gesturePriority:40,direction:"y",threshold:10,canStart:i,onStart:n,onMove:d,onEnd:u});return m};var S=function(t,r){return s(400,t/Math.abs(r*1.1),500)};var _=function(t,r,e){if(e===void 0){e=400}var a=d().addElement(t.querySelector("bkkr-backdrop")).fromTo("opacity",0,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]);var o=d().addElement(t.querySelectorAll(".modal-wrapper, .modal-shadow")).beforeStyles({opacity:1}).fromTo("transform","translateY(100vh)","translateY(0vh)");var i=d().addElement(t).easing("cubic-bezier(0.32,0.72,0,1)").duration(e).addAnimation(o);if(r){var n=window.innerWidth<768;var s=r.tagName==="BKKR-MODAL"&&r.presentingElement!==undefined;var l=d().beforeStyles({transform:"translateY(0)","transform-origin":"top center",overflow:"hidden"});var c=document.body;if(n){var u=!CSS.supports("width","max(0px, 1px)")?"30px":"max(30px, var(--safe-area-top))";var m=s?"-10px":u;var f=g.MIN_PRESENTING_SCALE;var b="translateY("+m+") scale("+f+")";l.afterStyles({transform:b}).beforeAddWrite((function(){return c.style.setProperty("background-color","black")})).addElement(r).keyframes([{offset:0,filter:"contrast(1)",transform:"translateY(0px) scale(1)",borderRadius:"0px"},{offset:1,filter:"contrast(0.85)",transform:b,borderRadius:"32px 32px 0 0"}]);i.addAnimation(l)}else{i.addAnimation(a);if(!s){o.fromTo("opacity","0","1")}else{var f=s?g.MIN_PRESENTING_SCALE:1;var b="translateY(-10px) scale("+f+")";l.afterStyles({transform:b}).addElement(r.querySelector(".modal-wrapper")).keyframes([{offset:0,filter:"contrast(1)",transform:"translateY(0) scale(1)"},{offset:1,filter:"contrast(0.85)",transform:b}]);var p=d().afterStyles({transform:b}).addElement(r.querySelector(".modal-shadow")).keyframes([{offset:0,opacity:"1",transform:"translateY(0) scale(1)"},{offset:1,opacity:"0",transform:b}]);i.addAnimation([l,p])}}}else{i.addAnimation(a)}return i};var D=function(t,r,e){if(e===void 0){e=400}var a=d().addElement(t.querySelector("bkkr-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0);var o=d().addElement(t.querySelectorAll(".modal-wrapper, .modal-shadow")).beforeStyles({opacity:1}).fromTo("transform","translateY(0vh)","translateY(100vh)");var i=d().addElement(t).easing("cubic-bezier(0.32,0.72,0,1)").duration(e).addAnimation(o);if(r){var n=window.innerWidth<768;var s=r.tagName==="BKKR-MODAL"&&r.presentingElement!==undefined;var l=d().beforeClearStyles(["transform"]).afterClearStyles(["transform"]).onFinish((function(t){if(t!==1){return}r.style.setProperty("overflow","");var e=Array.from(c.querySelectorAll("bkkr-modal")).filter((function(t){return t.presentingElement!==undefined})).length;if(e<=1){c.style.setProperty("background-color","")}}));var c=document.body;if(n){var u=!CSS.supports("width","max(0px, 1px)")?"30px":"max(30px, var(--safe-area-top))";var m=s?"-10px":u;var f=g.MIN_PRESENTING_SCALE;var b="translateY("+m+") scale("+f+")";l.addElement(r).keyframes([{offset:0,filter:"contrast(0.85)",transform:b,borderRadius:"32px 32px 0 0"},{offset:1,filter:"contrast(1)",transform:"translateY(0px) scale(1)",borderRadius:"0px"}]);i.addAnimation(l)}else{i.addAnimation(a);if(!s){o.fromTo("opacity","1","0")}else{var f=s?g.MIN_PRESENTING_SCALE:1;var b="translateY(-10px) scale("+f+")";l.addElement(r.querySelector(".modal-wrapper")).afterStyles({transform:"translate3d(0, 0, 0)"}).keyframes([{offset:0,filter:"contrast(0.85)",transform:b},{offset:1,filter:"contrast(1)",transform:"translateY(0) scale(1)"}]);var p=d().addElement(r.querySelector(".modal-shadow")).afterStyles({transform:"translateY(0) scale(1)"}).keyframes([{offset:0,opacity:"0",transform:b},{offset:1,opacity:"1",transform:"translateY(0) scale(1)"}]);i.addAnimation([l,p])}}}else{i.addAnimation(a)}return i};var A=".sc-bkkr-modal-h{--width:100%;--min-width:auto;--max-width:auto;--min-height:auto;--max-height:auto;--overflow:hidden;--border-radius:0;--border-width:0;--border-style:none;--border-color:transparent;--background:var(--bkkr-background-color);--box-shadow:0 15px 25px 0 rgba(var(--box-shadow-color, 0, 0, 0), 0.1), 0 6px 20px 0 rgba(var(--box-shadow-color, 0, 0, 0), 0.12), 0 13.2px 40px 0 rgba(var(--box-shadow-color, 0, 0, 0), 0.08);--backdrop-opacity:var(--bkkr-backdrop-opacity, .3);top:0;right:0;bottom:0;left:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;contain:strict}.modal-shadow.sc-bkkr-modal,.modal-wrapper.sc-bkkr-modal{display:-ms-flexbox;display:flex;position:relative;-ms-flex-direction:column;flex-direction:column;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);-webkit-transform:translate3d(0, 100%, 0);transform:translate3d(0, 100%, 0);z-index:10}.modal-shadow.sc-bkkr-modal{border-radius:var(--border-radius);position:absolute;pointer-events:none;background:transparent;-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:var(--overflow)}.modal-wrapper-inner.sc-bkkr-modal{border-top-left-radius:var(--border-radius);border-top-right-radius:var(--border-radius);padding-top:var(--offset-top, 0);display:-ms-flexbox;display:flex;position:relative;-ms-flex:1;flex:1;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:justify;justify-content:space-between;width:100%;height:100%;border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);contain:content;overflow:var(--overflow)}bkkr-content.sc-bkkr-modal:first-child{--padding-top:0;--padding-bottom:calc(var(--bkkr-spacer, 16px) + var(--safe-area-bottom))}.modal-indicator.sc-bkkr-modal{--offset-top:24px}.modal-indicator-wrapper.sc-bkkr-modal{--indicator-height:6px;--indicator-width:64px;--indicator-color:var(--bkkr-text-color, #000);--indicator-transition:0.2s transform cubic-bezier(0.25, 1.11, 0.78, 1.59), 0.2s box-shadow cubic-bezier(0.25, 1.11, 0.78, 1.59);--indicator-transform:translate3d(0, -50%, 0);top:0;left:50%;position:absolute;width:var(--indicator-width);height:32px;-webkit-transform:translateX(-50%);transform:translateX(-50%);cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:10}.modal-indicator-wrapper.sc-bkkr-modal .modal-indicator-bar.sc-bkkr-modal{top:50%;bottom:0;left:0;border-radius:var(--indicator-height);position:absolute;width:100%;height:var(--indicator-height);-webkit-transform:var(--indicator-transform);transform:var(--indicator-transform);-webkit-transition:var(--indicator-transition);transition:var(--indicator-transition);background-color:var(--indicator-color)}.modal-indicator-button.sc-bkkr-modal{--indicator-button-backround:transparent;--indicator-button-backround-hover:rgba(var(--bkkr-text-color-rgb, 0, 0, 0), .064);--indicator-button-backround-active:rgba(var(--bkkr-text-color-rgb, 0, 0, 0), .12);--indicator-button-color:var(--bkkr-background-color, #fff);--indicator-button-radius:50%;--indicator-button-transform:rotate(90deg);--indicator-button-transition:0.2s transform cubic-bezier(0.32, 0.72, 0, 1), 0.2s background cubic-bezier(0.32, 0.72, 0, 1);top:-48px;right:var(--bkkr-spacer);border-radius:var(--indicator-button-radius);display:none;position:absolute;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:36px;height:36px;-webkit-transition:var(--indicator-button-transition);transition:var(--indicator-button-transition);background:var(--indicator-button-backround);cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:10}.indicator-icon.sc-bkkr-modal{font-size:20px}@media only screen and (min-width: 768px) and (min-height: 600px){.sc-bkkr-modal-h{--width:600px;--height:500px;--safe-area-top:0px;--safe-area-bottom:0px;--safe-area-right:0px;--safe-area-left:0px}}@media only screen and (min-width: 768px) and (min-height: 768px){.sc-bkkr-modal-h{--width:600px;--height:600px}}@media screen and (max-width: 767px){@supports (width: max(0, 1px)){.modal-card.sc-bkkr-modal-h{--height:calc(100% - max(30px, var(--safe-area-top)) - 10px)}}@supports not (width: max(0, 1px)){.modal-card.sc-bkkr-modal-h{--height:calc(100% - 40px)}}.modal-card.sc-bkkr-modal-h{--border-radius:1.5em;--backdrop-opacity:0;--width:100%;-ms-flex-align:end;align-items:flex-end}.modal-card.sc-bkkr-modal-h .modal-shadow.sc-bkkr-modal{display:none}.modal-card.sc-bkkr-modal-h bkkr-backdrop.sc-bkkr-modal{pointer-events:none}}@media screen and (min-width: 768px){.modal-card.sc-bkkr-modal-h{--width:calc(100% - 120px);--max-width:720px;--min-height:300px;--max-height:1000px;--backdrop-opacity:0;--border-radius:1.5em;-webkit-transition:all 0.5s ease-in-out;transition:all 0.5s ease-in-out}.modal-card.sc-bkkr-modal-h:first-of-type{--backdrop-opacity:var(--bkkr-backdrop-opacity, .3)}.modal-card.sc-bkkr-modal-h .modal-wrapper-inner.sc-bkkr-modal{border-radius:var(--border-radius)}.modal-card.sc-bkkr-modal-h .modal-indicator.sc-bkkr-modal{--offset-top:0}.modal-card.sc-bkkr-modal-h .modal-indicator-wrapper.sc-bkkr-modal{display:none}.modal-card.sc-bkkr-modal-h .modal-indicator-button.sc-bkkr-modal{display:-ms-flexbox;display:flex}}@media (any-hover: hover){.modal-indicator-wrapper.sc-bkkr-modal:hover{--indicator-transform:translate3d(0, -100%, 0);--indicator-transition:0.2s transform ease-out, 0.2s box-shadow ease-out}.modal-indicator-button.sc-bkkr-modal:hover{-webkit-transform:var(--indicator-button-transform);transform:var(--indicator-button-transform);background:var(--indicator-button-backround-hover)}}.modal-indicator-button.state-activated.sc-bkkr-modal{-webkit-transform:var(--indicator-button-transform);transform:var(--indicator-button-transform);background:var(--indicator-button-backround-active)}@media (prefers-reduced-motion: reduce){.modal-indicator-bar.sc-bkkr-modal,.modal-indicator-button.sc-bkkr-modal{-webkit-transition:none;transition:none}}";var C=t("bkkr_modal",function(){function t(t){var a=this;r(this,t);this.didPresent=e(this,"bkkrModalDidPresent",7);this.willPresent=e(this,"bkkrModalWillPresent",7);this.willDismiss=e(this,"bkkrModalWillDismiss",7);this.didDismiss=e(this,"bkkrModalDidDismiss",7);this.gestureAnimationDismissing=false;this.presented=false;this.keyboardClose=true;this.backdropDismiss=true;this.showBackdrop=true;this.animated=true;this.indicator=true;this.closeButton=true;this.swipeToClose=true;this.presentingElement=document.querySelector("bkkr-root")||document.body;this.onBackdropTap=function(){a.dismiss(undefined,u)};this.onDismiss=function(t){t.stopPropagation();t.preventDefault();a.dismiss()};this.onLifecycle=function(t){var r=a.usersElement;var e=T[t.type];if(r&&e){var o=new CustomEvent(e,{bubbles:false,cancelable:false,detail:t.detail});r.dispatchEvent(o)}}}t.prototype.swipeToCloseChanged=function(t){if(this.gesture){this.gesture.enable(t)}else if(t){this.initSwipeToClose()}};t.prototype.connectedCallback=function(){m(this.el)};t.prototype.present=function(){return __awaiter(this,void 0,void 0,(function(){var t,r,e;var o=this;return __generator(this,(function(i){switch(i.label){case 0:if(this.presented){return[2]}t=this.el.querySelector(".modal-wrapper-inner");if(!t){throw new Error("container is undefined")}r=Object.assign(Object.assign({},this.componentProps),{modal:this.el});e=this;return[4,v(this.delegate,t,this.component,["bkkr-page","modal-viewport"],r)];case 1:e.usersElement=i.sent();return[4,y(this.usersElement)];case 2:i.sent();a((function(){return o.el.classList.add("show-modal")}));return[4,f(this,_,this.presentingElement)];case 3:i.sent();if(this.swipeToClose){this.initSwipeToClose()}return[2]}}))}))};t.prototype.initSwipeToClose=function(){var t=this;var r=this.leaveAnimation||D;var e=this.animation=r(this.el,this.presentingElement);this.gesture=E(this.el,e,(function(){t.gestureAnimationDismissing=true;t.animation.onFinish((function(){return __awaiter(t,void 0,void 0,(function(){return __generator(this,(function(t){switch(t.label){case 0:return[4,this.dismiss(undefined,"gesture")];case 1:t.sent();this.gestureAnimationDismissing=false;return[2]}}))}))}))}));this.gesture.enable(true)};t.prototype.dismiss=function(t,r){return __awaiter(this,void 0,void 0,(function(){var e,a;return __generator(this,(function(o){switch(o.label){case 0:if(this.gestureAnimationDismissing&&r!=="gesture"){return[2,false]}e=b.get(this)||[];return[4,p(this,t,r,D,this.presentingElement)];case 1:a=o.sent();if(!a)return[3,3];return[4,w(this.delegate,this.usersElement)];case 2:o.sent();if(this.animation){this.animation.destroy()}e.forEach((function(t){return t.destroy()}));o.label=3;case 3:this.animation=undefined;return[2,a]}}))}))};t.prototype.onDidDismiss=function(){return h(this.el,"bkkrModalDidDismiss")};t.prototype.onWillDismiss=function(){return h(this.el,"bkkrModalWillDismiss")};t.prototype.render=function(){var t;var r=this;return o(i,{"aria-modal":"true",tabindex:"-1",class:Object.assign((t={},t["modal-card"]=this.presentingElement!==undefined,t),k(this.cssClass)),style:{zIndex:""+(2e4+this.overlayIndex)},onBkkrBackdropTap:this.onBackdropTap,onBkkrDismiss:this.onDismiss,onBkkrModalDidPresent:this.onLifecycle,onBkkrModalWillPresent:this.onLifecycle,onBkkrModalWillDismiss:this.onLifecycle,onBkkrModalDidDismiss:this.onLifecycle},o("bkkr-backdrop",{visible:this.showBackdrop,tappable:this.backdropDismiss}),o("div",{class:"modal-shadow"}),o("div",{tabindex:"0"}),o("div",{role:"dialog",class:{"modal-indicator":this.indicator,"modal-wrapper":true}},this.indicator&&o("div",{class:"modal-indicator-wrapper state-activatable",onClick:function(){return r.dismiss()}},o("span",{class:"modal-indicator-bar"})),this.closeButton&&o("div",{class:"modal-indicator-button state-activatable",onClick:function(){return r.dismiss()}},o("bkkr-icon",{class:"indicator-icon",name:"times"})),o("div",{class:"modal-wrapper-inner"})),o("div",{tabindex:"0"}))};Object.defineProperty(t.prototype,"el",{get:function(){return n(this)},enumerable:false,configurable:true});Object.defineProperty(t,"watchers",{get:function(){return{swipeToClose:["swipeToCloseChanged"]}},enumerable:false,configurable:true});return t}());var T={bkkrModalDidPresent:"bkkrViewDidEnter",bkkrModalWillPresent:"bkkrViewWillEnter",bkkrModalWillDismiss:"bkkrViewWillLeave",bkkrModalDidDismiss:"bkkrViewDidLeave"};C.style=A}}}));