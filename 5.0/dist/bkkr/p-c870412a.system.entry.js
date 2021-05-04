var __awaiter=this&&this.__awaiter||function(t,e,r,n){function i(t){return t instanceof r?t:new r((function(e){e(t)}))}return new(r||(r=Promise))((function(r,a){function o(t){try{u(n.next(t))}catch(t){a(t)}}function s(t){try{u(n["throw"](t))}catch(t){a(t)}}function u(t){t.done?r(t.value):i(t.value).then(o,s)}u((n=n.apply(t,e||[])).next())}))};var __generator=this&&this.__generator||function(t,e){var r={label:0,sent:function(){if(a[0]&1)throw a[1];return a[1]},trys:[],ops:[]},n,i,a,o;return o={next:s(0),throw:s(1),return:s(2)},typeof Symbol==="function"&&(o[Symbol.iterator]=function(){return this}),o;function s(t){return function(e){return u([t,e])}}function u(o){if(n)throw new TypeError("Generator is already executing.");while(r)try{if(n=1,i&&(a=o[0]&2?i["return"]:o[0]?i["throw"]||((a=i["return"])&&a.call(i),0):i.next)&&!(a=a.call(i,o[1])).done)return a;if(i=0,a)o=[o[0]&2,a.value];switch(o[0]){case 0:case 1:a=o;break;case 4:r.label++;return{value:o[1],done:false};case 5:r.label++;i=o[1];o=[0];continue;case 7:o=r.ops.pop();r.trys.pop();continue;default:if(!(a=r.trys,a=a.length>0&&a[a.length-1])&&(o[0]===6||o[0]===2)){r=0;continue}if(o[0]===3&&(!a||o[1]>a[0]&&o[1]<a[3])){r.label=o[1];break}if(o[0]===6&&r.label<a[1]){r.label=a[1];a=o;break}if(a&&r.label<a[2]){r.label=a[2];r.ops.push(o);break}if(a[2])r.ops.pop();r.trys.pop();continue}o=e.call(t,r)}catch(t){o=[6,t];i=0}finally{n=a=0}if(o[0]&5)throw o[1];return{value:o[0]?o[1]:void 0,done:true}}};System.register(["./p-09f46bfd.system.js","./p-91f1ed88.system.js","./p-5fcc633d.system.js","./p-5e4b8ffe.system.js","./p-fe251abf.system.js","./p-7e283b4e.system.js","./p-0b5de7fa.system.js","./p-86739731.system.js","./p-b06466bf.system.js"],(function(t){"use strict";var e,r,n,i,a,o,s,u,l,c,d,f,h,p,b,m,v,g,w;return{setters:[function(t){e=t.r;r=t.c;n=t.h;i=t.H;a=t.g},function(t){o=t.i;s=t.b;u=t.c;l=t.g;c=t.e;d=t.f},function(t){f=t.s},function(t){h=t.g;p=t.s},function(t){b=t.c},function(t){m=t.g;v=t.h},function(t){g=t.g},function(t){w=t.createGesture},function(){}],execute:function(){var y=this;var x=function(t,e,r){if(r===void 0){r=400}var n=b();var i=m(t);var a=i.querySelector(".toast-wrapper");var o="calc(-12px - var(--safe-area-bottom, 0px))";var s="calc(12px + var(--safe-area-top, 0px))";n.addElement(a);switch(e){case"bottom":n.fromTo("transform","translate3d(0, 200%, 0)","translate3d(0, "+o+", 0)");break;case"middle":var u="50%";a.style.top=""+u;n.fromTo("opacity",.01,1);break;default:n.fromTo("transform","translate3d(0, -200%, 0)","translate3d(0, "+s+", 0)");break}var l=b().easing("cubic-bezier(.155,1.105,.295,1.12)").duration(r).addAnimation(n);var c=b().beforeStyles({transform:"translateY(0)","transform-origin":"top center",overflow:"hidden"});l.addAnimation(c);return l};var k=function(t,e,r){if(r===void 0){r=300}var n=b();var i=m(t);var a=i.querySelector(".toast-wrapper");var o="calc(-12px - var(--safe-area-bottom, 0px))";var s="calc(12px + var(--safe-area-top, 0px))";n.addElement(a);switch(e){case"bottom":n.fromTo("transform","translate3d(0, "+o+", 0)","translate3d(0, 200%, 0)");break;case"middle":n.fromTo("opacity",.99,0);break;default:n.fromTo("transform","translate3d(0, "+s+", 0)","translate3d(0, -200%, 0)");break}var u=b().easing("cubic-bezier(.36,.66,.04,1)").duration(r).addAnimation(n);var l=b().beforeClearStyles(["transform"]).afterClearStyles(["transform"]).onFinish((function(t){if(t!==1){return}}));u.addAnimation(l);return u};var _=function(t,e,r,n){var i=t.querySelector(".toast-wrapper");var a=i.clientHeight;var o=false;var s=r==="top"?-1:1;var u=function(t){return __awaiter(y,void 0,void 0,(function(){var e;return __generator(this,(function(r){e=t.event.target;if(e){return[2,true]}return[2,false]}))}))};var l=function(){e.progressStart(true,o?1:0)};var c=function(t){var r=v(1e-4,t.deltaY*s/(a*2),.9999);e.progressStep(r)};var d=function(t){var r=t.velocityY;var i=v(1e-4,t.deltaY*s/(a*2),.9999);var u=(t.deltaY+r*1e3)/(a*2);var l=u*s>=.5;var c=l?-.001:.001;if(!l){e.easing("cubic-bezier(1, 0, 0.68, 0.28)");c+=g([0,0],[1,0],[.68,.28],[1,1],i)[0]}else{e.easing("cubic-bezier(0.32, 0.72, 0, 1)");c+=g([0,0],[.32,.72],[0,1],[1,1],i)[0]}var d=l?T(i*a,r):T((1-i)*a,r);o=l;f.enable(false);e.onFinish((function(){if(!l){f.enable(true)}})).progressEnd(l?1:0,c,d);if(l){n()}};var f=w({el:t,gestureName:"toastSwipeToClose",gesturePriority:40,direction:"y",threshold:10,canStart:u,onStart:l,onMove:c,onEnd:d});return f};var T=function(t,e){return v(400,t/Math.abs(e*1.1),500)};var C=":host{--border-width:0;--border-style:none;--border-color:initial;--box-shadow:0 15px 25px 0 rgba(var(--box-shadow-color, 0, 0, 0), 0.1), 0 6px 20px 0 rgba(var(--box-shadow-color, 0, 0, 0), 0.12), 0 13.2px 40px 0 rgba(var(--box-shadow-color, 0, 0, 0), 0.08);--min-width:auto;--width:auto;--min-height:auto;--height:auto;--max-height:auto;--white-space:normal;--background:var(--bkkr-overlay-background, var(--bkkr-background-color, #fff));--border-radius:2em;--button-color:color-get(primary, base);--color:var(--bkkr-text-color, #000);--max-width:700px;--start:calc(var(--bkkr-spacer, 16px) / 2);--end:var(--start);top:0;left:0;display:block;position:absolute;width:100%;height:100%;outline:none;color:var(--color);font-family:var(--bkkr-font-family);font-size:14px;contain:strict;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1001;pointer-events:none}:host(.overlay-hidden){display:none}.toast-wrapper{border-radius:var(--border-radius);right:var(--end);left:var(--start);margin-left:auto;margin-right:auto;margin-top:auto;margin-bottom:auto;display:block;position:absolute;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow)}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.toast-wrapper{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}.toast-container{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;height:inherit;min-height:inherit;max-height:inherit;pointer-events:auto;contain:content}.toast-content{padding-left:15px;padding-right:15px;padding-top:15px;padding-bottom:15px;display:-ms-flexbox;display:flex;-ms-flex:1;flex:1;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;text-align:center}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.toast-content{padding-left:unset;padding-right:unset;-webkit-padding-start:15px;padding-inline-start:15px;-webkit-padding-end:15px;padding-inline-end:15px}}.toast-header{margin-bottom:2px;font-weight:700}.toast-message{-ms-flex:1;flex:1;white-space:var(--white-space)}.toast-button-group{display:-ms-flexbox;display:flex}.toast-button{border:0;outline:none;color:var(--button-color);z-index:0}.toast-icon{font-size:1.4em}.toast-button-inner{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.toast-wrapper.toast-top{top:0;-webkit-transform:translate3d(0, -200%, 0);transform:translate3d(0, -200%, 0)}.toast-wrapper.toast-middle{opacity:0.01}.toast-wrapper.toast-bottom{bottom:0;-webkit-transform:translate3d(0, 200%, 0);transform:translate3d(0, 200%, 0)}:host(.bkkr-color){--button-color:inherit;color:current-color(contrast)}:host(.bkkr-color) .toast-button-cancel{color:inherit}:host(.bkkr-color) .toast-wrapper{background:current-color(base)}";var D=t("bkkr_toast",function(){function t(t){var n=this;e(this,t);this.didPresent=r(this,"toastDidPresent",7);this.willPresent=r(this,"toastWillPresent",7);this.willDismiss=r(this,"toastWillDismiss",7);this.didDismiss=r(this,"toastDidDismiss",7);this.gestureAnimationDismissing=false;this.presented=false;this.duration=0;this.keyboardClose=false;this.position="top";this.swipeToClose=true;this.animated=true;this.dispatchCancelHandler=function(t){var e=t.detail.role;if(o(e)){var r=n.getButtons().find((function(t){return t.role==="cancel"}));n.callButtonHandler(r)}}}t.prototype.swipeToCloseChanged=function(t){if(this.gesture){this.gesture.enable(t)}else if(t){this.initSwipeToClose()}};t.prototype.connectedCallback=function(){s(this.el)};t.prototype.present=function(){return __awaiter(this,void 0,void 0,(function(){var t=this;return __generator(this,(function(e){switch(e.label){case 0:return[4,u(this,x,this.position)];case 1:e.sent();if(this.swipeToClose){this.initSwipeToClose()}if(this.duration>0){this.durationTimeout=setTimeout((function(){return t.dismiss(undefined,"timeout")}),this.duration)}return[2]}}))}))};t.prototype.initSwipeToClose=function(){var t=this;var e=this.leaveAnimation||k;var r=this.animation=e(this.el,this.position);this.gesture=_(this.el.shadowRoot,r,this.position,(function(){t.gestureAnimationDismissing=true;t.animation.onFinish((function(){return __awaiter(t,void 0,void 0,(function(){return __generator(this,(function(t){switch(t.label){case 0:return[4,this.dismiss(undefined,"gesture")];case 1:t.sent();this.gestureAnimationDismissing=false;return[2]}}))}))}))}));this.gesture.enable(true)};t.prototype.dismiss=function(t,e){return __awaiter(this,void 0,void 0,(function(){var r,n;var i=this;return __generator(this,(function(a){switch(a.label){case 0:if(this.gestureAnimationDismissing&&e!=="gesture"){return[2,false]}if(this.durationTimeout){clearTimeout(this.durationTimeout);if(this.gesture.running()){if(this.duration>0){this.durationTimeout=setTimeout((function(){return i.dismiss(undefined,"timeout")}),this.duration)}return[2,false]}}r=l.get(this)||[];return[4,c(this,t,e,k,this.position)];case 1:n=a.sent();if(n){if(this.animation){this.animation.destroy()}r.forEach((function(t){return t.destroy()}))}this.animation=undefined;return[2,n]}}))}))};t.prototype.onDidDismiss=function(){return d(this.el,"toastDidDismiss")};t.prototype.onWillDismiss=function(){return d(this.el,"toastWillDismiss")};t.prototype.getButtons=function(){var t=this.buttons?this.buttons.map((function(t){return typeof t==="string"?{text:t}:t})):[];return t};t.prototype.buttonClick=function(t){return __awaiter(this,void 0,void 0,(function(){var e,r;return __generator(this,(function(n){switch(n.label){case 0:e=t.role;if(o(e)){return[2,this.dismiss(undefined,e)]}return[4,this.callButtonHandler(t)];case 1:r=n.sent();if(r){return[2,this.dismiss(undefined,e)]}return[2,Promise.resolve()]}}))}))};t.prototype.callButtonHandler=function(t){return __awaiter(this,void 0,void 0,(function(){var e,r;return __generator(this,(function(n){switch(n.label){case 0:if(!(t&&t.handler))return[3,4];n.label=1;case 1:n.trys.push([1,3,,4]);return[4,t.handler()];case 2:e=n.sent();if(e===false){return[2,false]}return[3,4];case 3:r=n.sent();console.error(r);return[3,4];case 4:return[2,true]}}))}))};t.prototype.renderButtons=function(t,e){var r;var i=this;if(t.length===0){return}var a=(r={"toast-button-group":true},r["toast-button-group-"+e]=true,r);return n("div",{class:a},t.map((function(t){return n("button",{type:"button",class:S(t),tabIndex:0,onClick:function(){return i.buttonClick(t)},part:"button"},n("div",{class:"toast-button-inner"},t.icon&&n("BKKR-icon",{icon:t.icon,slot:t.text===undefined?"icon-only":undefined,class:"toast-icon"}),t.text))})))};t.prototype.render=function(){var t;var e=this.getButtons();var r=e.filter((function(t){return t.side==="start"}));var a=e.filter((function(t){return t.side!=="start"}));var o=(t={"toast-wrapper":true},t["toast-"+this.position]=true,t["state-activatable"]=true,t);return n(i,{style:{zIndex:""+(6e4+this.overlayIndex)},class:p(this.color,Object.assign({},h(this.cssClass))),tabindex:"-1",onBkkrToastWillDismiss:this.dispatchCancelHandler},n("div",{class:o},n("div",{class:"toast-container",part:"container"},this.renderButtons(r,"start"),n("div",{class:"toast-content"},this.header!==undefined&&n("div",{class:"toast-header",part:"header"},this.header),this.message!==undefined&&n("div",{class:"toast-message",part:"message",innerHTML:f(this.message)})),this.renderButtons(a,"end"))))};Object.defineProperty(t.prototype,"el",{get:function(){return a(this)},enumerable:false,configurable:true});Object.defineProperty(t,"watchers",{get:function(){return{swipeToClose:["swipeToCloseChanged"]}},enumerable:false,configurable:true});return t}());var S=function(t){var e;return Object.assign((e={"toast-button":true,"toast-button-icon-only":t.icon!==undefined&&t.text===undefined},e["toast-button-"+t.role]=t.role!==undefined,e["state-focusable"]=true,e["state-activatable"]=true,e),h(t.cssClass))};D.style=C}}}));