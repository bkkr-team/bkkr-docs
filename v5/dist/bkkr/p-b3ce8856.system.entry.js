var __awaiter=this&&this.__awaiter||function(e,t,r,a){function n(e){return e instanceof r?e:new r((function(t){t(e)}))}return new(r||(r=Promise))((function(r,i){function o(e){try{l(a.next(e))}catch(e){i(e)}}function s(e){try{l(a["throw"](e))}catch(e){i(e)}}function l(e){e.done?r(e.value):n(e.value).then(o,s)}l((a=a.apply(e,t||[])).next())}))};var __generator=this&&this.__generator||function(e,t){var r={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},a,n,i,o;return o={next:s(0),throw:s(1),return:s(2)},typeof Symbol==="function"&&(o[Symbol.iterator]=function(){return this}),o;function s(e){return function(t){return l([e,t])}}function l(o){if(a)throw new TypeError("Generator is already executing.");while(r)try{if(a=1,n&&(i=o[0]&2?n["return"]:o[0]?n["throw"]||((i=n["return"])&&i.call(n),0):n.next)&&!(i=i.call(n,o[1])).done)return i;if(n=0,i)o=[o[0]&2,i.value];switch(o[0]){case 0:case 1:i=o;break;case 4:r.label++;return{value:o[1],done:false};case 5:r.label++;n=o[1];o=[0];continue;case 7:o=r.ops.pop();r.trys.pop();continue;default:if(!(i=r.trys,i=i.length>0&&i[i.length-1])&&(o[0]===6||o[0]===2)){r=0;continue}if(o[0]===3&&(!i||o[1]>i[0]&&o[1]<i[3])){r.label=o[1];break}if(o[0]===6&&r.label<i[1]){r.label=i[1];i=o;break}if(i&&r.label<i[2]){r.label=i[2];r.ops.push(o);break}if(i[2])r.ops.pop();r.trys.pop();continue}o=t.call(e,r)}catch(e){o=[6,e];n=0}finally{a=i=0}if(o[0]&5)throw o[1];return{value:o[0]?o[1]:void 0,done:true}}};
/*!
 * (C) BKKR Framework https://bkkr-team.github.io/bkkr-docs/ - MIT License
 */System.register(["./p-739d5869.system.js","./p-7c09dde3.system.js","./p-70aff04d.system.js","./p-d0b4e49e.system.js","./p-44ee7d88.system.js","./p-a92c7586.system.js","./p-cb4a9e7d.system.js","./p-85e87925.system.js","./p-b60c7a38.system.js","./p-b938bf14.system.js","./p-64d25547.system.js","./p-884a6563.system.js"],(function(e){"use strict";var t,r,a,n,i,o,s,l,d,c,h,u,f,p,m,b,v,g,k,w,x,y,S;return{setters:[function(e){t=e.r;r=e.c;a=e.a;n=e.h;i=e.H;o=e.g},function(e){s=e.g},function(e){l=e.B;d=e.b;c=e.c;h=e.g;u=e.e;f=e.f},function(e){p=e.C;m=e.a;b=e.d},function(e){v=e.d},function(e){g=e.c},function(e){k=e.g},function(e){w=e.createGesture},function(e){x=e.h;y=e.g;S=e.r},function(){},function(){},function(){}],execute:function(){var E=this;var D={MIN_PRESENTING_SCALE:.93};var T=function(e,t,r){var a=e.offsetHeight;var n=false;var i=function(e){return __awaiter(E,void 0,void 0,(function(){var t,r,a;return __generator(this,(function(n){switch(n.label){case 0:t=e.event.target;if(t===null||!t.closest){return[2,true]}r=t.closest("bkkr-content");if(r===null){return[2,true]}return[4,r.getScrollElement()];case 1:a=n.sent();if(a.scrollTop<=0){return[2,true]}return[2,false]}}))}))};var o=function(){t.progressStart(true,n?1:0)};var s=function(e){var r=x(1e-4,e.deltaY/a,.9999);t.progressStep(r)};var l=function(e){var i=e.velocityY;var o=x(1e-4,e.deltaY/a,.9999);var s=(e.deltaY+i*1e3)/a;var l=s>=.5;var c=l?-.001:.001;if(!l){t.easing("cubic-bezier(1, 0, 0.68, 0.28)");c+=k([0,0],[1,0],[.68,.28],[1,1],o)[0]}else{t.easing("cubic-bezier(0.32, 0.72, 0, 1)");c+=k([0,0],[.32,.72],[0,1],[1,1],o)[0]}var h=l?_(o*a,i):_((1-o)*a,i);n=l;d.enable(false);t.onFinish((function(){if(!l){d.enable(true)}})).progressEnd(l?1:0,c,h);if(l){r()}};var d=w({el:e,gestureName:"modalSwipeToClose",gesturePriority:40,direction:"y",threshold:10,canStart:i,onStart:o,onMove:s,onEnd:l});return d};var _=function(e,t){return x(400,e/Math.abs(t*1.1),500)};var C=function(e,t,r){if(r===void 0){r=400}var a=y(e);var n=g().addElement(a.querySelector("bkkr-backdrop")).fromTo("opacity",0,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]);var i=g().addElement(a.querySelectorAll(".modal-wrapper, .modal-shadow")).beforeStyles({opacity:1}).fromTo("transform","translateY(100vh)","translateY(0vh)");var o=g().addElement(e).easing("cubic-bezier(0.32,0.72,0,1)").duration(r).addAnimation(i);if(t){var s=window.innerWidth<768;var l=t.tagName==="BKKR-MODAL"&&t.presentingElement!==undefined;var d=y(t);var c=g().beforeStyles({transform:"translateY(0)","transform-origin":"top center",overflow:"hidden"});if(s){var h=!CSS.supports("width","max(0px, 1px)")?"30px":"max(30px, var(--safe-area-top))";var u=l?"-10px":h;var f=D.MIN_PRESENTING_SCALE;var p="translateY("+u+") scale("+f+")";c.afterStyles({transform:p}).addElement(t).keyframes([{offset:0,filter:"contrast(1)",transform:"translateY(0px) scale(1)",borderRadius:"0px"},{offset:1,filter:"contrast(0.85)",transform:p,borderRadius:"32px 32px 0 0"}]);o.addAnimation(c)}else{o.addAnimation(n);if(!l){i.fromTo("opacity","0","1")}else{var f=l?D.MIN_PRESENTING_SCALE:1;var p="translateY(-10px) scale("+f+")";c.afterStyles({transform:p}).addElement(d.querySelector(".modal-wrapper")).keyframes([{offset:0,filter:"contrast(1)",transform:"translateY(0) scale(1)"},{offset:1,filter:"contrast(0.85)",transform:p}]);var m=g().afterStyles({transform:p}).addElement(d.querySelector(".modal-shadow")).keyframes([{offset:0,opacity:"1",transform:"translateY(0) scale(1)"},{offset:1,opacity:"0",transform:p}]);o.addAnimation([c,m])}}}else{o.addAnimation(n)}return o};var A=function(e,t,r){if(r===void 0){r=400}var a=y(e);var n=g().addElement(a.querySelector("bkkr-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0);var i=g().addElement(a.querySelectorAll(".modal-wrapper, .modal-shadow")).beforeStyles({opacity:1}).fromTo("transform","translateY(0vh)","translateY(100vh)");var o=g().addElement(e).easing("cubic-bezier(0.32,0.72,0,1)").duration(r).addAnimation(i);if(t){var s=window.innerWidth<768;var l=t.tagName==="BKKR-MODAL"&&t.presentingElement!==undefined;var d=y(t);var c=g().beforeClearStyles(["transform"]).afterClearStyles(["transform"]).onFinish((function(e){if(e!==1){return}t.style.setProperty("overflow","")}));if(s){var h=!CSS.supports("width","max(0px, 1px)")?"30px":"max(30px, var(--safe-area-top))";var u=l?"-10px":h;var f=D.MIN_PRESENTING_SCALE;var p="translateY("+u+") scale("+f+")";c.addElement(t).keyframes([{offset:0,filter:"contrast(0.85)",transform:p,borderRadius:"32px 32px 0 0"},{offset:1,filter:"contrast(1)",transform:"translateY(0px) scale(1)",borderRadius:"0px"}]);o.addAnimation(c)}else{o.addAnimation(n);if(!l){i.fromTo("opacity","1","0")}else{var f=l?D.MIN_PRESENTING_SCALE:1;var p="translateY(-10px) scale("+f+")";c.addElement(d.querySelector(".modal-wrapper")).afterStyles({transform:"translate3d(0, 0, 0)"}).keyframes([{offset:0,filter:"contrast(0.85)",transform:p},{offset:1,filter:"contrast(1)",transform:"translateY(0) scale(1)"}]);var m=g().addElement(d.querySelector(".modal-shadow")).afterStyles({transform:"translateY(0) scale(1)"}).keyframes([{offset:0,opacity:"0",transform:p},{offset:1,opacity:"1",transform:"translateY(0) scale(1)"}]);o.addAnimation([c,m])}}}else{o.addAnimation(n)}return o};var I=":host{--width:100%;--min-width:auto;--max-width:auto;--min-height:auto;--max-height:auto;--overflow:hidden;--border-radius:0;--border-width:0;--border-style:none;--border-color:transparent;--background:var(--bkkr-overlay-background, var(--bkkr-background-color, #fff));--box-shadow:0 15px 25px 0 rgba(var(--box-shadow-color, 0, 0, 0), 0.1), 0 6px 20px 0 rgba(var(--box-shadow-color, 0, 0, 0), 0.12), 0 13.2px 40px 0 rgba(var(--box-shadow-color, 0, 0, 0), 0.08);--backdrop-opacity:0;top:0;right:0;bottom:0;left:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;contain:strict;pointer-events:none}:host(.modal-interactive) .modal-wrapper,:host(.modal-interactive) bkkr-backdrop{pointer-events:auto}:host(.overlay-hidden){display:none}:host(:first-of-type){--backdrop-opacity:var(--bkkr-backdrop-opacity, 0.3)}.modal-shadow,.modal-wrapper{display:-ms-flexbox;display:flex;position:relative;-ms-flex-direction:column;flex-direction:column;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);-webkit-transform:translate3d(0, 100%, 0);transform:translate3d(0, 100%, 0);will-change:opacity, transform;z-index:10}.modal-shadow{border-radius:var(--border-radius);position:absolute;pointer-events:none;background:transparent;-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:var(--overflow)}.modal-wrapper-inner{border-top-left-radius:var(--border-radius);border-top-right-radius:var(--border-radius);display:-ms-flexbox;display:flex;position:relative;-ms-flex:1;flex:1;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:justify;justify-content:space-between;width:100%;height:100%;border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);contain:content;overflow:var(--overflow)}bkkr-content:first-child{--padding-top:0;--padding-bottom:calc(var(--bkkr-spacer, 16px) + var(--safe-area-bottom))}.modal-handle{--offset-top:34px}.modal-handle-wrapper{--handle-height:6px;--handle-width:64px;--handle-color:var(--bkkr-text-color, #000);--handle-transition:0.2s transform cubic-bezier(0.25, 1.11, 0.78, 1.59), 0.2s box-shadow cubic-bezier(0.25, 1.11, 0.78, 1.59);--handle-transform:translate3d(0, -50%, 0);top:0;left:50%;position:absolute;width:var(--handle-width);height:32px;-webkit-transform:translateX(-50%);transform:translateX(-50%);cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:10}.modal-handle-wrapper .modal-handle-bar{top:50%;bottom:0;left:0;border-radius:var(--handle-height);position:absolute;width:100%;height:var(--handle-height);-webkit-transform:var(--handle-transform);transform:var(--handle-transform);-webkit-transition:var(--handle-transition);transition:var(--handle-transition);background-color:var(--handle-color)}.modal-handle-button{--handle-button-backround:var(--background);--handle-button-backround-hover:var(--background);--handle-button-backround-active:var(--background);--handle-button-color:var(--bkkr-text-color, #000);--handle-button-radius:50%;--handle-button-transform:scale(1.1);--handle-button-transition:0.2s transform cubic-bezier(0.32, 0.72, 0, 1), 0.2s background cubic-bezier(0.32, 0.72, 0, 1);top:-48px;right:var(--bkkr-spacer);border-radius:var(--handle-button-radius);display:none;position:absolute;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:36px;height:36px;-webkit-transition:var(--handle-button-transition);transition:var(--handle-button-transition);background:var(--handle-button-backround);color:var(--handle-button-color);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);cursor:pointer;-ms-touch-action:manipulation;touch-action:manipulation;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:10}.handle-icon{font-size:1.25rem}@media only screen and (min-width: 768px) and (min-height: 600px){:host{--width:600px;--height:500px;--safe-area-top:0px;--safe-area-bottom:0px;--safe-area-right:0px;--safe-area-left:0px}}@media only screen and (min-width: 768px) and (min-height: 768px){:host{--width:600px;--height:600px}}@media screen and (max-width: 767px){@supports (width: 1px){:host(.modal-card){--height:calc(100% - max(30px, var(--safe-area-top)) - 10px)}}@supports not (width: 1px){:host(.modal-card){--height:calc(100% - 40px)}}:host(.modal-card){--border-radius:24px;--backdrop-opacity:0;--width:100%;-ms-flex-align:end;align-items:flex-end}:host(.modal-card) .modal-wrapper-inner{--safe-area-top:0px;--safe-area-bottom:0px;--safe-area-right:0px;--safe-area-left:0px}:host(.modal-card) bkkr-backdrop{pointer-events:none}}@media screen and (min-width: 768px){:host(.modal-card){--width:calc(100% - 120px);--max-width:720px;--min-height:300px;--max-height:1000px;--border-radius:24px;--box-shadow:0px 0px 30px 10px rgba(0, 0, 0, 0.1);-webkit-transition:all 0.5s ease-in-out;transition:all 0.5s ease-in-out}:host(.modal-card) .modal-wrapper-inner{border-radius:var(--border-radius)}:host(.modal-card) .modal-handle{--offset-top:var(--bkkr-spacer)}:host(.modal-card) .modal-handle-wrapper{display:none}:host(.modal-card) .modal-handle-button{display:-ms-flexbox;display:flex}}@media (any-hover: hover){.modal-handle-wrapper:hover{--handle-transform:translate3d(0, -100%, 0);--handle-transition:0.2s transform ease-out, 0.2s box-shadow ease-out}.modal-handle-button:hover{-webkit-transform:var(--handle-button-transform);transform:var(--handle-button-transform);background:var(--handle-button-backround-hover)}}.modal-handle-button.state-activated{-webkit-transform:var(--handle-button-transform);transform:var(--handle-button-transform);background:var(--handle-button-backround-active)}@media (prefers-reduced-motion: reduce){.modal-handle-bar,.modal-handle-button{-webkit-transition:none;transition:none}}";var P=e("bkkr_modal",function(){function e(e){var a=this;t(this,e);this.didPresent=r(this,"bkkrModalDidPresent",7);this.willPresent=r(this,"bkkrModalWillPresent",7);this.willDismiss=r(this,"bkkrModalWillDismiss",7);this.didDismiss=r(this,"bkkrModalDidDismiss",7);this.didPresentShorthand=r(this,"didPresent",7);this.willPresentShorthand=r(this,"willPresent",7);this.willDismissShorthand=r(this,"willDismiss",7);this.didDismissShorthand=r(this,"didDismiss",7);this.modalIndex=j++;this.coreDelegate=p();this.inline=false;this.gestureAnimationDismissing=false;this.presented=false;this.keyboardClose=true;this.backdropDismiss=true;this.showBackdrop=true;this.animated=true;this.handle=true;this.closeButton=true;this.closeIcon="times";this.swipeToClose=true;this.presentingElement=document.querySelector("bkkr-router-outlet")||document.querySelector("bkkr-root")||document.body;this.isOpen=false;this.configureTriggerInteraction=function(){var e=a,t=e.trigger,r=e.el,n=e.destroyTriggerInteraction;if(n){n()}var i=t!==undefined?document.getElementById(t):null;if(!i){return}var o=function(e,t){var r=function(){t.present()};e.addEventListener("click",r);return function(){e.removeEventListener("click",r)}};a.destroyTriggerInteraction=o(i,r)};this.onBackdropTap=function(){a.dismiss(undefined,l)};this.onDismiss=function(e){e.stopPropagation();e.preventDefault();a.dismiss()};this.onLifecycle=function(e){var t=a.usersElement;var r=M[e.type];if(t&&r){var n=new CustomEvent(r,{bubbles:false,cancelable:false,detail:e.detail});t.dispatchEvent(n)}}}e.prototype.swipeToCloseChanged=function(e){if(this.gesture){this.gesture.enable(e)}else if(e){this.initSwipeToClose()}};e.prototype.onIsOpenChange=function(e,t){if(e===true&&t===false){this.present()}else if(e===false&&t===true){this.dismiss()}};e.prototype.onTriggerChange=function(){this.configureTriggerInteraction()};e.prototype.connectedCallback=function(){d(this.el)};e.prototype.componentWillLoad=function(){this.modalId=this.el.hasAttribute("id")?this.el.getAttribute("id"):"bkkr-modal-"+this.modalIndex};e.prototype.componentDidLoad=function(){var e=this;if(this.isOpen===true){S((function(){return e.present()}))}this.configureTriggerInteraction()};e.prototype.getDelegate=function(e){if(e===void 0){e=false}if(this.workingDelegate&&!e){return{delegate:this.workingDelegate,inline:this.inline}}var t=this.el.parentNode;var r=this.inline=t!==null&&t.tagName!=="BKKR-ROOT"&&t.tagName!=="BODY";var a=this.workingDelegate=r?this.delegate||this.coreDelegate:this.delegate;return{inline:r,delegate:a}};e.prototype.present=function(){return __awaiter(this,void 0,void 0,(function(){var e,t,r,n,i;var o=this;return __generator(this,(function(s){switch(s.label){case 0:if(this.presented){return[2]}if(!(this.currentTransition!==undefined))return[3,2];return[4,this.currentTransition];case 1:s.sent();s.label=2;case 2:e=Object.assign(Object.assign({},this.componentProps),{modal:this.el});t=this.getDelegate(true),r=t.inline,n=t.delegate;i=this;return[4,m(n,this.el,this.component,["bkkr-page"],e,r)];case 3:i.usersElement=s.sent();return[4,v(this.usersElement)];case 4:s.sent();a((function(){return o.el.classList.add("show-modal")}));this.currentTransition=c(this,"modalEnter",C,this.presentingElement);return[4,this.currentTransition];case 5:s.sent();this.currentTransition=undefined;if(this.swipeToClose){this.initSwipeToClose()}return[2]}}))}))};e.prototype.initSwipeToClose=function(){var e=this;var t=this.leaveAnimation||A;var r=this.animation=t(this.el,this.presentingElement);this.gesture=T(this.el,r,(function(){e.gestureAnimationDismissing=true;e.animation.onFinish((function(){return __awaiter(e,void 0,void 0,(function(){return __generator(this,(function(e){switch(e.label){case 0:return[4,this.dismiss(undefined,"gesture")];case 1:e.sent();this.gestureAnimationDismissing=false;return[2]}}))}))}))}));this.gesture.enable(true)};e.prototype.dismiss=function(e,t){return __awaiter(this,void 0,void 0,(function(){var r,a,n;return __generator(this,(function(i){switch(i.label){case 0:if(this.gestureAnimationDismissing&&t!=="gesture"){return[2,false]}if(!(this.currentTransition!==undefined))return[3,2];return[4,this.currentTransition];case 1:i.sent();i.label=2;case 2:r=h.get(this)||[];this.currentTransition=u(this,e,t,"modalLeave",A,this.presentingElement);return[4,this.currentTransition];case 3:a=i.sent();if(!a)return[3,5];n=this.getDelegate().delegate;return[4,b(n,this.usersElement)];case 4:i.sent();if(this.animation){this.animation.destroy()}r.forEach((function(e){return e.destroy()}));i.label=5;case 5:this.animation=undefined;this.currentTransition=undefined;return[2,a]}}))}))};e.prototype.onDidDismiss=function(){return f(this.el,"bkkrModalDidDismiss")};e.prototype.onWillDismiss=function(){return f(this.el,"bkkrModalWillDismiss")};e.prototype.render=function(){var e;var t=this;var r=this,a=r.presented,o=r.modalId,l=r.closeIcon,d=r.htmlAttributes;return n(i,Object.assign({"aria-modal":"true",tabindex:"-1",class:Object.assign((e={},e["modal-card"]=this.presentingElement!==undefined,e["overlay-hidden"]=true,e["modal-interactive"]=a,e),s(this.cssClass)),id:o},d,{style:{zIndex:""+(2e4+this.overlayIndex)},onBkkrBackdropTap:this.onBackdropTap,onBkkrDismiss:this.onDismiss,onBkkrModalDidPresent:this.onLifecycle,onBkkrModalWillPresent:this.onLifecycle,onBkkrModalWillDismiss:this.onLifecycle,onBkkrModalDidDismiss:this.onLifecycle}),n("bkkr-backdrop",{visible:this.showBackdrop,tappable:this.backdropDismiss,part:"backdrop"}),n("div",{class:"modal-shadow"}),n("div",{role:"dialog",class:{"modal-handle":this.handle,"modal-wrapper":true},part:"content"},this.handle&&n("div",{class:"modal-handle-wrapper state-activatable",onClick:function(){return t.dismiss()}},n("span",{class:"modal-handle-bar"})),this.closeButton&&n("div",{class:"modal-handle-button state-activatable",onClick:function(){return t.dismiss()}},n("bkkr-icon",{class:"handle-icon",icon:l,lazy:false})),n("div",{class:"modal-wrapper-inner"},n("slot",null))))};Object.defineProperty(e.prototype,"el",{get:function(){return o(this)},enumerable:false,configurable:true});Object.defineProperty(e,"watchers",{get:function(){return{swipeToClose:["swipeToCloseChanged"],isOpen:["onIsOpenChange"],trigger:["onTriggerChange"]}},enumerable:false,configurable:true});return e}());var M={bkkrModalDidPresent:"bkkrViewDidEnter",bkkrModalWillPresent:"bkkrViewWillEnter",bkkrModalWillDismiss:"bkkrViewWillLeave",bkkrModalDidDismiss:"bkkrViewDidLeave"};var j=0;P.style=I}}}));