var __awaiter=this&&this.__awaiter||function(t,e,r,n){function i(t){return t instanceof r?t:new r((function(e){e(t)}))}return new(r||(r=Promise))((function(r,o){function a(t){try{u(n.next(t))}catch(t){o(t)}}function s(t){try{u(n["throw"](t))}catch(t){o(t)}}function u(t){t.done?r(t.value):i(t.value).then(a,s)}u((n=n.apply(t,e||[])).next())}))};var __generator=this&&this.__generator||function(t,e){var r={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},n,i,o,a;return a={next:s(0),throw:s(1),return:s(2)},typeof Symbol==="function"&&(a[Symbol.iterator]=function(){return this}),a;function s(t){return function(e){return u([t,e])}}function u(a){if(n)throw new TypeError("Generator is already executing.");while(r)try{if(n=1,i&&(o=a[0]&2?i["return"]:a[0]?i["throw"]||((o=i["return"])&&o.call(i),0):i.next)&&!(o=o.call(i,a[1])).done)return o;if(i=0,o)a=[a[0]&2,o.value];switch(a[0]){case 0:case 1:o=a;break;case 4:r.label++;return{value:a[1],done:false};case 5:r.label++;i=a[1];a=[0];continue;case 7:a=r.ops.pop();r.trys.pop();continue;default:if(!(o=r.trys,o=o.length>0&&o[o.length-1])&&(a[0]===6||a[0]===2)){r=0;continue}if(a[0]===3&&(!o||a[1]>o[0]&&a[1]<o[3])){r.label=a[1];break}if(a[0]===6&&r.label<o[1]){r.label=o[1];o=a;break}if(o&&r.label<o[2]){r.label=o[2];r.ops.push(a);break}if(o[2])r.ops.pop();r.trys.pop();continue}a=e.call(t,r)}catch(t){a=[6,t];i=0}finally{n=o=0}if(a[0]&5)throw a[1];return{value:a[0]?a[1]:void 0,done:true}}};System.register(["./p-92f7c087.system.js","./p-d2d3f0b5.system.js","./p-7660814d.system.js","./p-0b5de7fa.system.js","./p-af5365d2.system.js","./p-064daac9.system.js","./p-5fcc633d.system.js","./p-576893c9.system.js","./p-4c5bd054.system.js"],(function(t){"use strict";var e,r,n,i,o,a,s,u,l,c,d,f,h,p,b,m,v,g;return{setters:[function(t){e=t.r;r=t.e;n=t.h;i=t.H;o=t.g},function(t){a=t.e},function(t){s=t.c},function(t){u=t.g},function(){},function(t){l=t.createGesture},function(t){c=t.s},function(t){d=t.i;f=t.b;h=t.c;p=t.g;b=t.e;m=t.f},function(t){v=t.g;g=t.s}],execute:function(){var w=this;var x=function(t,e,r){if(r===void 0){r=400}var n=s();var i=t.host||t;var o=t.querySelector(".toast-wrapper");var a="calc(-12px - var(--safe-area-bottom, 0px))";var u="calc(12px + var(--safe-area-top, 0px))";n.addElement(o);switch(e){case"bottom":n.fromTo("transform","translate3d(0, 200%, 0)","translate3d(0, "+a+", 0)");break;case"middle":var l="50%";o.style.top=""+l;n.fromTo("opacity",.01,1);break;default:n.fromTo("transform","translate3d(0, -200%, 0)","translate3d(0, "+u+", 0)");break}var c=s().addElement(i).easing("cubic-bezier(.155,1.105,.295,1.12)").duration(r).addAnimation(n);var d=s().beforeStyles({transform:"translateY(0)","transform-origin":"top center",overflow:"hidden"});c.addAnimation(d);return c};var y=function(t,e,r){if(r===void 0){r=300}var n=s();var i=t.host||t;var o=t.querySelector(".toast-wrapper");var a="calc(-12px - var(--safe-area-bottom, 0px))";var u="calc(12px + var(--safe-area-top, 0px))";n.addElement(o);switch(e){case"bottom":n.fromTo("transform","translate3d(0, "+a+", 0)","translate3d(0, 200%, 0)");break;case"middle":n.fromTo("opacity",.99,0);break;default:n.fromTo("transform","translate3d(0, "+u+", 0)","translate3d(0, -200%, 0)");break}var l=s().addElement(i).easing("cubic-bezier(.36,.66,.04,1)").duration(r).addAnimation(n);var c=s().beforeClearStyles(["transform"]).afterClearStyles(["transform"]).onFinish((function(t){if(t!==1){return}}));l.addAnimation(c);return l};var k=function(t,e,r,n){var i=t.querySelector(".toast-wrapper");var o=i.clientHeight;var s=false;var c=r==="top"?-1:1;var d=function(t){return __awaiter(w,void 0,void 0,(function(){var e;return __generator(this,(function(r){e=t.event.target;if(e){return[2,true]}return[2,false]}))}))};var f=function(){e.progressStart(true,s?1:0)};var h=function(t){var r=a(1e-4,t.deltaY*c/(o*2),.9999);e.progressStep(r)};var p=function(t){var r=t.velocityY;var i=a(1e-4,t.deltaY*c/(o*2),.9999);var l=(t.deltaY+r*1e3)/(o*2);var d=l*c>=.5;var f=d?-.001:.001;if(!d){e.easing("cubic-bezier(1, 0, 0.68, 0.28)");f+=u([0,0],[1,0],[.68,.28],[1,1],i)[0]}else{e.easing("cubic-bezier(0.32, 0.72, 0, 1)");f+=u([0,0],[.32,.72],[0,1],[1,1],i)[0]}var h=d?_(i*o,r):_((1-i)*o,r);s=d;b.enable(false);e.onFinish((function(){if(!d){b.enable(true)}})).progressEnd(d?1:0,f,h);if(d){n()}};var b=l({el:t,gestureName:"toastSwipeToClose",gesturePriority:40,direction:"y",threshold:10,canStart:d,onStart:f,onMove:h,onEnd:p});return b};var _=function(t,e){return a(400,t/Math.abs(e*1.1),500)};var T=":host{--border-width:0;--border-style:none;--border-color:initial;--box-shadow:0 15px 25px 0 rgba(var(--box-shadow-color, var(--bkkr-text-color-rgb, 0, 0, 0)), 0.1), 0 6px 20px 0 rgba(var(--box-shadow-color, var(--bkkr-text-color-rgb, 0, 0, 0)), 0.12), 0 13.2px 40px 0 rgba(var(--box-shadow-color, var(--bkkr-text-color-rgb, 0, 0, 0)), 0.08);--min-width:auto;--width:auto;--min-height:auto;--height:auto;--max-height:auto;--white-space:pre-wrap;--background:var(--bkkr-background-color, #fff);--border-radius:2em;--button-color:color-get(primary, base);--color:var(--bkkr-color-step-850, #262626);--max-width:700px;--start:calc(var(--bkkr-spacer, 16px) / 2);--end:var(--start);top:0;left:0;display:block;position:absolute;width:100%;height:100%;outline:none;color:var(--color);font-family:var(--default-font-sans-serif);font-size:14px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;contain:strict;z-index:1001;pointer-events:none}:host(.overlay-hidden){display:none}.toast-wrapper{border-radius:var(--border-radius);right:var(--end);left:var(--start);margin-left:auto;margin-right:auto;margin-top:auto;margin-bottom:auto;display:block;position:absolute;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow)}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.toast-wrapper{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}.toast-container{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;height:inherit;min-height:inherit;max-height:inherit;pointer-events:auto;contain:content}.toast-content{padding-left:15px;padding-right:15px;padding-top:15px;padding-bottom:15px;display:-ms-flexbox;display:flex;-ms-flex:1;flex:1;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;text-align:center}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.toast-content{padding-left:unset;padding-right:unset;-webkit-padding-start:15px;padding-inline-start:15px;-webkit-padding-end:15px;padding-inline-end:15px}}.toast-header{margin-bottom:2px;font-weight:700}.toast-message{-ms-flex:1;flex:1;white-space:var(--white-space)}.toast-button-group{display:-ms-flexbox;display:flex}.toast-button{border:0;outline:none;color:var(--button-color);z-index:0}.toast-icon{font-size:1.4em}.toast-button-inner{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.toast-wrapper.toast-top{top:0;-webkit-transform:translate3d(0, -200%, 0);transform:translate3d(0, -200%, 0)}.toast-wrapper.toast-middle{opacity:0.01}.toast-wrapper.toast-bottom{bottom:0;-webkit-transform:translate3d(0, 200%, 0);transform:translate3d(0, 200%, 0)}:host(.bkkr-color){--button-color:inherit;color:current-color(contrast)}:host(.bkkr-color) .toast-button-cancel{color:inherit}:host(.bkkr-color) .toast-wrapper{background:current-color(base)}";var C=t("bkkr_toast",function(){function t(t){var n=this;e(this,t);this.didPresent=r(this,"toastDidPresent",7);this.willPresent=r(this,"toastWillPresent",7);this.willDismiss=r(this,"toastWillDismiss",7);this.didDismiss=r(this,"toastDidDismiss",7);this.gestureAnimationDismissing=false;this.presented=false;this.duration=0;this.keyboardClose=false;this.position="top";this.swipeToClose=true;this.animated=true;this.dispatchCancelHandler=function(t){var e=t.detail.role;if(d(e)){var r=n.getButtons().find((function(t){return t.role==="cancel"}));n.callButtonHandler(r)}}}t.prototype.swipeToCloseChanged=function(t){if(this.gesture){this.gesture.enable(t)}else if(t){this.initSwipeToClose()}};t.prototype.connectedCallback=function(){f(this.el)};t.prototype.present=function(){return __awaiter(this,void 0,void 0,(function(){var t=this;return __generator(this,(function(e){switch(e.label){case 0:return[4,h(this,x,this.position)];case 1:e.sent();if(this.swipeToClose){this.initSwipeToClose()}if(this.duration>0){this.durationTimeout=setTimeout((function(){return t.dismiss(undefined,"timeout")}),this.duration)}return[2]}}))}))};t.prototype.initSwipeToClose=function(){var t=this;var e=this.leaveAnimation||y;var r=this.animation=e(this.el.shadowRoot,this.position);this.gesture=k(this.el.shadowRoot,r,this.position,(function(){t.gestureAnimationDismissing=true;t.animation.onFinish((function(){return __awaiter(t,void 0,void 0,(function(){return __generator(this,(function(t){switch(t.label){case 0:return[4,this.dismiss(undefined,"gesture")];case 1:t.sent();this.gestureAnimationDismissing=false;return[2]}}))}))}))}));this.gesture.enable(true)};t.prototype.dismiss=function(t,e){return __awaiter(this,void 0,void 0,(function(){var r,n;return __generator(this,(function(i){switch(i.label){case 0:if(this.gestureAnimationDismissing&&e!=="gesture"){return[2,false]}if(this.durationTimeout){clearTimeout(this.durationTimeout);if(this.gesture.running()){return[2,false]}}r=p.get(this)||[];return[4,b(this,t,e,y,this.position)];case 1:n=i.sent();if(n){if(this.animation){this.animation.destroy()}r.forEach((function(t){return t.destroy()}))}this.animation=undefined;return[2,n]}}))}))};t.prototype.onDidDismiss=function(){return m(this.el,"toastDidDismiss")};t.prototype.onWillDismiss=function(){return m(this.el,"toastWillDismiss")};t.prototype.getButtons=function(){var t=this.buttons?this.buttons.map((function(t){return typeof t==="string"?{text:t}:t})):[];return t};t.prototype.buttonClick=function(t){return __awaiter(this,void 0,void 0,(function(){var e,r;return __generator(this,(function(n){switch(n.label){case 0:e=t.role;if(d(e)){return[2,this.dismiss(undefined,e)]}return[4,this.callButtonHandler(t)];case 1:r=n.sent();if(r){return[2,this.dismiss(undefined,e)]}return[2,Promise.resolve()]}}))}))};t.prototype.callButtonHandler=function(t){return __awaiter(this,void 0,void 0,(function(){var e,r;return __generator(this,(function(n){switch(n.label){case 0:if(!(t&&t.handler))return[3,4];n.label=1;case 1:n.trys.push([1,3,,4]);return[4,t.handler()];case 2:e=n.sent();if(e===false){return[2,false]}return[3,4];case 3:r=n.sent();console.error(r);return[3,4];case 4:return[2,true]}}))}))};t.prototype.renderButtons=function(t,e){var r;var i=this;if(t.length===0){return}var o=(r={"toast-button-group":true},r["toast-button-group-"+e]=true,r);return n("div",{class:o},t.map((function(t){return n("button",{type:"button",class:D(t),tabIndex:0,onClick:function(){return i.buttonClick(t)},part:"button"},n("div",{class:"toast-button-inner"},t.icon&&n("BKKR-icon",{icon:t.icon,slot:t.text===undefined?"icon-only":undefined,class:"toast-icon"}),t.text))})))};t.prototype.render=function(){var t;var e=this.getButtons();var r=e.filter((function(t){return t.side==="start"}));var o=e.filter((function(t){return t.side!=="start"}));var a=(t={"toast-wrapper":true},t["toast-"+this.position]=true,t);return n(i,{style:{zIndex:""+(6e4+this.overlayIndex)},class:g(this.color,Object.assign({},v(this.cssClass))),tabindex:"-1",onBkkrToastWillDismiss:this.dispatchCancelHandler},n("div",{class:a},n("div",{class:"toast-container",part:"container"},this.renderButtons(r,"start"),n("div",{class:"toast-content"},this.header!==undefined&&n("div",{class:"toast-header",part:"header"},this.header),this.message!==undefined&&n("div",{class:"toast-message",part:"message",innerHTML:c(this.message)})),this.renderButtons(o,"end"))))};Object.defineProperty(t.prototype,"el",{get:function(){return o(this)},enumerable:false,configurable:true});Object.defineProperty(t,"watchers",{get:function(){return{swipeToClose:["swipeToCloseChanged"]}},enumerable:false,configurable:true});return t}());var D=function(t){var e;return Object.assign((e={"toast-button":true,"toast-button-icon-only":t.icon!==undefined&&t.text===undefined},e["toast-button-"+t.role]=t.role!==undefined,e["state-focusable"]=true,e["state-activatable"]=true,e),v(t.cssClass))};C.style=T}}}));