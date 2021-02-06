var __awaiter=this&&this.__awaiter||function(e,t,r,a){function i(e){return e instanceof r?e:new r((function(t){t(e)}))}return new(r||(r=Promise))((function(r,o){function n(e){try{l(a.next(e))}catch(e){o(e)}}function s(e){try{l(a["throw"](e))}catch(e){o(e)}}function l(e){e.done?r(e.value):i(e.value).then(n,s)}l((a=a.apply(e,t||[])).next())}))};var __generator=this&&this.__generator||function(e,t){var r={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},a,i,o,n;return n={next:s(0),throw:s(1),return:s(2)},typeof Symbol==="function"&&(n[Symbol.iterator]=function(){return this}),n;function s(e){return function(t){return l([e,t])}}function l(n){if(a)throw new TypeError("Generator is already executing.");while(r)try{if(a=1,i&&(o=n[0]&2?i["return"]:n[0]?i["throw"]||((o=i["return"])&&o.call(i),0):i.next)&&!(o=o.call(i,n[1])).done)return o;if(i=0,o)n=[n[0]&2,o.value];switch(n[0]){case 0:case 1:o=n;break;case 4:r.label++;return{value:n[1],done:false};case 5:r.label++;i=n[1];n=[0];continue;case 7:n=r.ops.pop();r.trys.pop();continue;default:if(!(o=r.trys,o=o.length>0&&o[o.length-1])&&(n[0]===6||n[0]===2)){r=0;continue}if(n[0]===3&&(!o||n[1]>o[0]&&n[1]<o[3])){r.label=n[1];break}if(n[0]===6&&r.label<o[1]){r.label=o[1];o=n;break}if(o&&r.label<o[2]){r.label=o[2];r.ops.push(n);break}if(o[2])r.ops.pop();r.trys.pop();continue}n=t.call(e,r)}catch(e){n=[6,e];i=0}finally{a=o=0}if(n[0]&5)throw n[1];return{value:n[0]?n[1]:void 0,done:true}}};System.register(["./p-92f7c087.system.js","./p-7c3866d2.system.js","./p-95c5e7da.system.js","./p-0b5de7fa.system.js","./p-af5365d2.system.js","./p-956bb589.system.js","./p-d0c60236.system.js","./p-d75c5632.system.js","./p-4c5bd054.system.js","./p-42e53900.system.js","./p-1a88d7e4.system.js"],(function(e){"use strict";var t,r,a,i,o,n,s,l,d,c,f,m,u,h,p,b,k,v,y,w;return{setters:[function(e){t=e.r;r=e.e;a=e.c;i=e.h;o=e.H;n=e.g},function(e){s=e.e},function(e){l=e.c},function(e){d=e.g},function(){},function(e){c=e.createGesture},function(){},function(e){f=e.B;m=e.b;u=e.c;h=e.g;p=e.e;b=e.f},function(e){k=e.g},function(e){v=e.a;y=e.d},function(e){w=e.d}],execute:function(){var g=this;var x={MIN_PRESENTING_SCALE:.93};var E=function(e,t,r){var a=e.offsetHeight;var i=false;var o=function(e){return __awaiter(g,void 0,void 0,(function(){var t,r;return __generator(this,(function(a){t=e.event.target;if(t===null||!t.closest){return[2,true]}r=t.closest("bkkr-content");if(r===null){return[2,true]}return[2,false]}))}))};var n=function(){t.progressStart(true,i?1:0)};var l=function(e){var r=s(1e-4,e.deltaY/a,.9999);t.progressStep(r)};var f=function(e){var o=e.velocityY;var n=s(1e-4,e.deltaY/a,.9999);var l=(e.deltaY+o*1e3)/a;var c=l>=.5;var f=c?-.001:.001;if(!c){t.easing("cubic-bezier(1, 0, 0.68, 0.28)");f+=d([0,0],[1,0],[.68,.28],[1,1],n)[0]}else{t.easing("cubic-bezier(0.32, 0.72, 0, 1)");f+=d([0,0],[.32,.72],[0,1],[1,1],n)[0]}var u=c?S(n*a,o):S((1-n)*a,o);i=c;m.enable(false);t.onFinish((function(){if(!c){m.enable(true)}})).progressEnd(c?1:0,f,u);if(c){r()}};var m=c({el:e,gestureName:"modalSwipeToClose",gesturePriority:40,direction:"y",threshold:10,canStart:o,onStart:n,onMove:l,onEnd:f});return m};var S=function(e,t){return s(400,e/Math.abs(t*1.1),500)};var _=function(e,t){var r=l().addElement(e.querySelector("bkkr-backdrop")).fromTo("opacity",0,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]);var a=l().addElement(e.querySelectorAll(".modal-wrapper, .modal-shadow")).beforeStyles({opacity:1}).fromTo("transform","translateY(100vh)","translateY(0vh)");var i=l().addElement(e).easing("cubic-bezier(0.32,0.72,0,1)").duration(500).addAnimation(a);if(t){var o=window.innerWidth<768;var n=t.tagName==="BKKR-MODAL"&&t.presentingElement!==undefined;var s=l().beforeStyles({transform:"translateY(0)","transform-origin":"top center",overflow:"hidden"});var d=document.body;if(o){var c=!CSS.supports("width","max(0px, 1px)")?"30px":"max(30px, var(--safe-area-top))";var f=n?"-10px":c;var m=x.MIN_PRESENTING_SCALE;var u="translateY("+f+") scale("+m+")";s.afterStyles({transform:u}).beforeAddWrite((function(){return d.style.setProperty("background-color","black")})).addElement(t).keyframes([{offset:0,filter:"contrast(1)",transform:"translateY(0px) scale(1)",borderRadius:"0px"},{offset:1,filter:"contrast(0.85)",transform:u,borderRadius:"32px 32px 0 0"}]);i.addAnimation(s)}else{i.addAnimation(r);if(!n){a.fromTo("opacity","0","1")}else{var m=n?x.MIN_PRESENTING_SCALE:1;var u="translateY(-10px) scale("+m+")";s.afterStyles({transform:u}).addElement(t.querySelector(".modal-wrapper")).keyframes([{offset:0,filter:"contrast(1)",transform:"translateY(0) scale(1)"},{offset:1,filter:"contrast(0.85)",transform:u}]);var h=l().afterStyles({transform:u}).addElement(t.querySelector(".modal-shadow")).keyframes([{offset:0,opacity:"1",transform:"translateY(0) scale(1)"},{offset:1,opacity:"0",transform:u}]);i.addAnimation([s,h])}}}else{i.addAnimation(r)}return i};var D=function(e,t,r){if(r===void 0){r=500}var a=l().addElement(e.querySelector("bkkr-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0);var i=l().addElement(e.querySelectorAll(".modal-wrapper, .modal-shadow")).beforeStyles({opacity:1}).fromTo("transform","translateY(0vh)","translateY(100vh)");var o=l().addElement(e).easing("cubic-bezier(0.32,0.72,0,1)").duration(r).addAnimation(i);if(t){var n=window.innerWidth<768;var s=t.tagName==="BKKR-MODAL"&&t.presentingElement!==undefined;var d=l().beforeClearStyles(["transform"]).afterClearStyles(["transform"]).onFinish((function(e){if(e!==1){return}t.style.setProperty("overflow","");var r=Array.from(c.querySelectorAll("bkkr-modal")).filter((function(e){return e.presentingElement!==undefined})).length;if(r<=1){c.style.setProperty("background-color","")}}));var c=document.body;if(n){var f=!CSS.supports("width","max(0px, 1px)")?"30px":"max(30px, var(--safe-area-top))";var m=s?"-10px":f;var u=x.MIN_PRESENTING_SCALE;var h="translateY("+m+") scale("+u+")";d.addElement(t).keyframes([{offset:0,filter:"contrast(0.85)",transform:h,borderRadius:"32px 32px 0 0"},{offset:1,filter:"contrast(1)",transform:"translateY(0px) scale(1)",borderRadius:"0px"}]);o.addAnimation(d)}else{o.addAnimation(a);if(!s){i.fromTo("opacity","1","0")}else{var u=s?x.MIN_PRESENTING_SCALE:1;var h="translateY(-10px) scale("+u+")";d.addElement(t.querySelector(".modal-wrapper")).afterStyles({transform:"translate3d(0, 0, 0)"}).keyframes([{offset:0,filter:"contrast(0.85)",transform:h},{offset:1,filter:"contrast(1)",transform:"translateY(0) scale(1)"}]);var p=l().addElement(t.querySelector(".modal-shadow")).afterStyles({transform:"translateY(0) scale(1)"}).keyframes([{offset:0,opacity:"0",transform:h},{offset:1,opacity:"1",transform:"translateY(0) scale(1)"}]);o.addAnimation([d,p])}}}else{o.addAnimation(a)}return o};var A=".sc-bkkr-modal-h{--width:100%;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--overflow:hidden;--border-radius:0;--border-width:0;--border-style:none;--border-color:transparent;--background:var(--bkkr-background-color);--box-shadow:0 15px 25px 0 rgba(var(--box-shadow-color, var(--bkkr-text-color-rgb, 0, 0, 0)), 0.1), 0 6px 20px 0 rgba(var(--box-shadow-color, var(--bkkr-text-color-rgb, 0, 0, 0)), 0.12), 0 13.2px 40px 0 rgba(var(--box-shadow-color, var(--bkkr-text-color-rgb, 0, 0, 0)), 0.08);--backdrop-opacity:.4;top:0;right:0;bottom:0;left:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;contain:strict}.modal-shadow.sc-bkkr-modal,.modal-wrapper.sc-bkkr-modal{border-radius:var(--border-radius);display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:justify;justify-content:space-between;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);-webkit-transform:translate3d(0, 100%, 0);transform:translate3d(0, 100%, 0);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);overflow:var(--overflow);z-index:10}.modal-shadow.sc-bkkr-modal{position:absolute;background:transparent;-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);pointer-events:none}@media only screen and (min-width: 768px) and (min-height: 600px){.sc-bkkr-modal-h{--width:600px;--height:500px;--safe-area-top:0px;--safe-area-bottom:0px;--safe-area-right:0px;--safe-area-left:0px}}@media only screen and (min-width: 768px) and (min-height: 768px){.sc-bkkr-modal-h{--width:600px;--height:600px}}@media screen and (max-width: 767px){@supports (width: max(0, 1px)){.modal-card.sc-bkkr-modal-h{--height:calc(100% - max(30px, var(--safe-area-top)) - 10px)}}@supports not (width: max(0, 1px)){.modal-card.sc-bkkr-modal-h{--height:calc(100% - 40px)}}.modal-card.sc-bkkr-modal-h .modal-wrapper.sc-bkkr-modal{border-top-left-radius:2em;border-top-right-radius:2em}.modal-card.sc-bkkr-modal-h{--backdrop-opacity:0;--width:100%;-ms-flex-align:end;align-items:flex-end}.modal-card.sc-bkkr-modal-h .modal-shadow.sc-bkkr-modal{display:none}.modal-card.sc-bkkr-modal-h bkkr-backdrop.sc-bkkr-modal{pointer-events:none}}@media screen and (min-width: 768px){.modal-card.sc-bkkr-modal-h{--width:calc(100% - 120px);--height:calc(100% - (120px + var(--safe-area-top) + var(--safe-area-bottom)));--max-width:720px;--max-height:1000px;--backdrop-opacity:0;--border-radius:2em;-webkit-transition:all 0.5s ease-in-out;transition:all 0.5s ease-in-out}.modal-card.sc-bkkr-modal-h:first-of-type{--backdrop-opacity:.18}}.modal-indicator-wrapper.sc-bkkr-modal{--indicator-height:6px;--indicator-width:16%;--indicator-color:var(--bkkr-text-color, #000);--indicator-transition:0.2s transform cubic-bezier(0.25, 1.11, 0.78, 1.59), 0.2s box-shadow cubic-bezier(0.25, 1.11, 0.78, 1.59);--indicator-transform:translate3d(0, -50%, 0);top:0;left:50%;position:absolute;width:var(--indicator-width);height:32px;-webkit-transform:translateX(-50%);transform:translateX(-50%);cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:10}.modal-indicator-wrapper.sc-bkkr-modal .modal-indicator-bar.sc-bkkr-modal{top:50%;bottom:0;left:0;border-radius:var(--indicator-height);position:absolute;width:100%;height:var(--indicator-height);-webkit-transform:var(--indicator-transform);transform:var(--indicator-transform);-webkit-transition:var(--indicator-transition);transition:var(--indicator-transition);background-color:var(--indicator-color)}@media (any-hover: hover){.modal-indicator-wrapper.sc-bkkr-modal:hover{--indicator-transform:translate3d(0, -100%, 0);--indicator-transition:0.2s transform ease-out, 0.2s box-shadow ease-out}}@media (prefers-reduced-motion: reduce){.modal-indicator-bar.sc-bkkr-modal{-webkit-transition:none;transition:none}}";var C=e("bkkr_modal",function(){function e(e){var a=this;t(this,e);this.didPresent=r(this,"bkkrModalDidPresent",7);this.willPresent=r(this,"bkkrModalWillPresent",7);this.willDismiss=r(this,"bkkrModalWillDismiss",7);this.didDismiss=r(this,"bkkrModalDidDismiss",7);this.gestureAnimationDismissing=false;this.presented=false;this.keyboardClose=true;this.backdropDismiss=true;this.showBackdrop=true;this.animated=true;this.indicator=true;this.swipeToClose=true;this.presentingElement=document.querySelector("bkkr-root")||document.body;this.onBackdropTap=function(){a.dismiss(undefined,f)};this.onDismiss=function(e){e.stopPropagation();e.preventDefault();a.dismiss()};this.onLifecycle=function(e){var t=a.usersElement;var r=T[e.type];if(t&&r){var i=new CustomEvent(r,{bubbles:false,cancelable:false,detail:e.detail});t.dispatchEvent(i)}}}e.prototype.swipeToCloseChanged=function(e){if(this.gesture){this.gesture.enable(e)}else if(e){this.initSwipeToClose()}};e.prototype.connectedCallback=function(){m(this.el)};e.prototype.present=function(){return __awaiter(this,void 0,void 0,(function(){var e,t,r;var i=this;return __generator(this,(function(o){switch(o.label){case 0:if(this.presented){return[2]}e=this.el.querySelector(".modal-wrapper");if(!e){throw new Error("container is undefined")}t=Object.assign(Object.assign({},this.componentProps),{modal:this.el});r=this;return[4,v(this.delegate,e,this.component,["bkkr-page","modal-viewport"],t)];case 1:r.usersElement=o.sent();return[4,w(this.usersElement)];case 2:o.sent();a((function(){return i.el.classList.add("show-modal")}));return[4,u(this,_,this.presentingElement)];case 3:o.sent();if(this.swipeToClose){this.initSwipeToClose()}return[2]}}))}))};e.prototype.initSwipeToClose=function(){var e=this;var t=this.leaveAnimation||D;var r=this.animation=t(this.el,this.presentingElement);this.gesture=E(this.el,r,(function(){e.gestureAnimationDismissing=true;e.animation.onFinish((function(){return __awaiter(e,void 0,void 0,(function(){return __generator(this,(function(e){switch(e.label){case 0:return[4,this.dismiss(undefined,"gesture")];case 1:e.sent();this.gestureAnimationDismissing=false;return[2]}}))}))}))}));this.gesture.enable(true)};e.prototype.dismiss=function(e,t){return __awaiter(this,void 0,void 0,(function(){var r,a;return __generator(this,(function(i){switch(i.label){case 0:if(this.gestureAnimationDismissing&&t!=="gesture"){return[2,false]}r=h.get(this)||[];return[4,p(this,e,t,D,this.presentingElement)];case 1:a=i.sent();if(!a)return[3,3];return[4,y(this.delegate,this.usersElement)];case 2:i.sent();if(this.animation){this.animation.destroy()}r.forEach((function(e){return e.destroy()}));i.label=3;case 3:this.animation=undefined;return[2,a]}}))}))};e.prototype.onDidDismiss=function(){return b(this.el,"bkkrModalDidDismiss")};e.prototype.onWillDismiss=function(){return b(this.el,"bkkrModalWillDismiss")};e.prototype.render=function(){var e;var t=this;return i(o,{"aria-modal":"true",tabindex:"-1",class:Object.assign((e={},e["modal-card"]=this.presentingElement!==undefined,e),k(this.cssClass)),style:{zIndex:""+(2e4+this.overlayIndex)},onBkkrBackdropTap:this.onBackdropTap,onBkkrDismiss:this.onDismiss,onBkkrModalDidPresent:this.onLifecycle,onBkkrModalWillPresent:this.onLifecycle,onBkkrModalWillDismiss:this.onLifecycle,onBkkrModalDidDismiss:this.onLifecycle},i("bkkr-backdrop",{visible:this.showBackdrop,tappable:this.backdropDismiss}),i("div",{class:"modal-shadow"}),i("div",{tabindex:"0"}),i("div",{role:"dialog",class:{"modal-indicator":this.indicator,"modal-wrapper":true}},this.indicator&&i("div",{class:"modal-indicator-wrapper state-activatable",onClick:function(){return t.dismiss()}},i("span",{class:"modal-indicator-bar"}))),i("div",{tabindex:"0"}))};Object.defineProperty(e.prototype,"el",{get:function(){return n(this)},enumerable:false,configurable:true});Object.defineProperty(e,"watchers",{get:function(){return{swipeToClose:["swipeToCloseChanged"]}},enumerable:false,configurable:true});return e}());var T={bkkrModalDidPresent:"bkkrViewDidEnter",bkkrModalWillPresent:"bkkrViewWillEnter",bkkrModalWillDismiss:"bkkrViewWillLeave",bkkrModalDidDismiss:"bkkrViewDidLeave"};C.style=A}}}));