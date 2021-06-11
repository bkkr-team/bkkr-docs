var __awaiter=this&&this.__awaiter||function(e,t,r,o){function n(e){return e instanceof r?e:new r((function(t){t(e)}))}return new(r||(r=Promise))((function(r,i){function a(e){try{c(o.next(e))}catch(e){i(e)}}function s(e){try{c(o["throw"](e))}catch(e){i(e)}}function c(e){e.done?r(e.value):n(e.value).then(a,s)}c((o=o.apply(e,t||[])).next())}))};var __generator=this&&this.__generator||function(e,t){var r={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},o,n,i,a;return a={next:s(0),throw:s(1),return:s(2)},typeof Symbol==="function"&&(a[Symbol.iterator]=function(){return this}),a;function s(e){return function(t){return c([e,t])}}function c(a){if(o)throw new TypeError("Generator is already executing.");while(r)try{if(o=1,n&&(i=a[0]&2?n["return"]:a[0]?n["throw"]||((i=n["return"])&&i.call(n),0):n.next)&&!(i=i.call(n,a[1])).done)return i;if(n=0,i)a=[a[0]&2,i.value];switch(a[0]){case 0:case 1:i=a;break;case 4:r.label++;return{value:a[1],done:false};case 5:r.label++;n=a[1];a=[0];continue;case 7:a=r.ops.pop();r.trys.pop();continue;default:if(!(i=r.trys,i=i.length>0&&i[i.length-1])&&(a[0]===6||a[0]===2)){r=0;continue}if(a[0]===3&&(!i||a[1]>i[0]&&a[1]<i[3])){r.label=a[1];break}if(a[0]===6&&r.label<i[1]){r.label=i[1];i=a;break}if(i&&r.label<i[2]){r.label=i[2];r.ops.push(a);break}if(i[2])r.ops.pop();r.trys.pop();continue}a=t.call(e,r)}catch(e){a=[6,e];n=0}finally{o=i=0}if(a[0]&5)throw a[1];return{value:a[0]?a[1]:void 0,done:true}}};System.register(["./p-ddd3d159.system.js","./p-eabc78da.system.js","./p-7e283b4e.system.js","./p-c02911cd.system.js","./p-5e4b8ffe.system.js","./p-344de14e.system.js","./p-749e6e2c.system.js","./p-d0c60236.system.js"],(function(e){"use strict";var t,r,o,n,i,a,s,c,p,u,f,d,l,v,h,g,m,b,k,w;return{setters:[function(e){t=e.r;r=e.c;o=e.h;n=e.H;i=e.g},function(e){a=e.C;s=e.a;c=e.d},function(e){p=e.r;u=e.g;f=e.a},function(e){d=e.B;l=e.b;v=e.c;h=e.h;g=e.e;m=e.f},function(e){b=e.g},function(e){k=e.d},function(e){w=e.c},function(){}],execute:function(){var y=this;var x=function(e){return D(e)};var P=function(e,t){if(typeof e==="string"){t=e;e=undefined}return x(e).includes(t)};var D=function(e){if(e===void 0){e=window}if(typeof e==="undefined"){return[]}e.Ionic=e.Ionic||{};var t=e.Ionic.platforms;if(t==null){t=e.Ionic.platforms=T(e);t.forEach((function(t){return e.document.documentElement.classList.add("plt-"+t)}))}return t};var T=function(e){return Object.keys(R).filter((function(t){return R[t](e)}))};var E=function(e){return W(e)&&!N(e)};var I=function(e){if(z(e,/iPad/i)){return true}if(z(e,/Macintosh/i)&&W(e)){return true}return false};var _=function(e){return z(e,/iPhone/i)};var L=function(e){return z(e,/iPhone|iPod/i)||I(e)};var A=function(e){return z(e,/android|sink/i)};var S=function(e){return A(e)&&!z(e,/mobile/i)};var B=function(e){var t=e.innerWidth;var r=e.innerHeight;var o=Math.min(t,r);var n=Math.max(t,r);return o>390&&o<520&&(n>620&&n<800)};var C=function(e){var t=e.innerWidth;var r=e.innerHeight;var o=Math.min(t,r);var n=Math.max(t,r);return I(e)||S(e)||o>460&&o<820&&(n>780&&n<1400)};var W=function(e){return K(e,"(any-pointer:coarse)")};var O=function(e){return!W(e)};var N=function(e){return j(e)||Y(e)};var j=function(e){return!!(e["cordova"]||e["phonegap"]||e["PhoneGap"])};var Y=function(e){var t=e["Capacitor"];return!!(t&&t.isNative)};var X=function(e){return z(e,/electron/i)};var q=function(e){return!!(e.matchMedia("(display-mode: standalone)").matches||e.navigator.standalone)};var z=function(e,t){return t.test(e.navigator.userAgent)};var K=function(e,t){return e.matchMedia(t).matches};var R={ipad:I,iphone:_,ios:L,android:A,phablet:B,tablet:C,cordova:j,capacitor:Y,electron:X,pwa:q,mobile:W,mobileweb:E,desktop:O,hybrid:N};var H=function(e){if(!e){return{arrowWidth:0,arrowHeight:0}}var t=e.getBoundingClientRect(),r=t.width,o=t.height;return{arrowWidth:r,arrowHeight:o}};var F=function(e,t,r){var o=t.getBoundingClientRect();var n=o.height;var i=o.width;if(e==="cover"&&r){var a=r.getBoundingClientRect();i=a.width}return{contentWidth:i,contentHeight:n}};var M=function(e,t,r,o){var n=[];var i=u(o);var a=i.querySelector(".popover-content");switch(t){case"hover":n=[{eventName:"mouseenter",callback:function(t){var o=document.elementFromPoint(t.clientX,t.clientY);if(o===e){return}r.dismiss(undefined,undefined,false)}}];break;case"context-menu":case"click":default:n=[{eventName:"click",callback:function(t){var o=t.target;var n=o.closest("[data-bkkr-popover-trigger]");if(n===e){t.stopPropagation();return}r.dismiss(undefined,undefined,false)}}];break}n.forEach((function(e){var t=e.eventName,r=e.callback;return a.addEventListener(t,r)}));return function(){n.forEach((function(e){var t=e.eventName,r=e.callback;return a.removeEventListener(t,r)}))}};var V=function(e,t,r){var o=[];switch(t){case"hover":var n;o=[{eventName:"mouseenter",callback:function(e){return __awaiter(y,void 0,void 0,(function(){return __generator(this,(function(t){e.stopPropagation();if(n){clearTimeout(n)}n=setTimeout((function(){p((function(){r.presentFromTrigger(e);n=undefined}))}),100);return[2]}))}))}},{eventName:"mouseleave",callback:function(e){if(n){clearTimeout(n)}var t=e.relatedTarget;if(!t){return}if(t.closest("bkkr-popover")!==r){r.dismiss(undefined,undefined,false)}}},{eventName:"click",callback:function(e){return e.stopPropagation()}},{eventName:"bkkrPopoverActivateTrigger",callback:function(e){return r.presentFromTrigger(e,true)}}];break;case"context-menu":o=[{eventName:"contextmenu",callback:function(e){e.preventDefault();r.presentFromTrigger(e)}},{eventName:"click",callback:function(e){return e.stopPropagation()}},{eventName:"bkkrPopoverActivateTrigger",callback:function(e){return r.presentFromTrigger(e,true)}}];break;case"click":default:o=[{eventName:"click",callback:function(e){return r.presentFromTrigger(e)}},{eventName:"bkkrPopoverActivateTrigger",callback:function(e){return r.presentFromTrigger(e,true)}}];break}o.forEach((function(t){var r=t.eventName,o=t.callback;return e.addEventListener(r,o)}));e.setAttribute("data-bkkr-popover-trigger","true");return function(){o.forEach((function(t){var r=t.eventName,o=t.callback;return e.removeEventListener(r,o)}));e.removeAttribute("data-bkkr-popover-trigger")}};var G=function(e,t){if(!t||t.tagName!=="BKKR-ITEM"){return-1}return e.findIndex((function(e){return e===t}))};var U=function(e,t){var r=G(e,t);return e[r+1]};var J=function(e,t){var r=G(e,t);return e[r-1]};var Q=function(e){return e.hasAttribute("data-bkkr-popover-trigger")};var Z=function(e){var t=function(t){return __awaiter(y,void 0,void 0,(function(){var r,o,n,i,a,s,c;return __generator(this,(function(p){switch(p.label){case 0:r=document.activeElement;o=[];try{o=Array.from(e.querySelectorAll("bkkr-item:not(bkkr-popover bkkr-popover *)"))}catch(e){}n=t.key;switch(n){case"ArrowLeft":return[3,1];case"ArrowDown":return[3,3];case"ArrowUp":return[3,4];case"ArrowRight":return[3,5];case" ":return[3,5];case"Enter":return[3,5]}return[3,6];case 1:return[4,e.getParentPopover()];case 2:i=p.sent();if(i){e.dismiss(undefined,undefined,false)}return[3,6];case 3:a=U(o,r);if(a!==undefined){a.focus()}return[3,6];case 4:s=J(o,r);if(s!==undefined){s.focus()}return[3,6];case 5:if(r&&Q(r)){c=new CustomEvent("bkkrPopoverActivateTrigger");r.dispatchEvent(c)}return[3,6];case 6:return[2]}}))}))};e.addEventListener("keydown",t);return function(){return e.removeEventListener("keydown",t)}};var $=function(e,t,r,o,n,i,a,s,c,p,u){var f;var d={top:0,left:0,width:0,height:0};switch(i){case"event":if(!u){return c}var l=u;d={top:l.clientY,left:l.clientX,width:1,height:1};break;case"trigger":default:var v=u;var h=p||((f=v===null||v===void 0?void 0:v.detail)===null||f===void 0?void 0:f.bkkrShadowTarget)||(v===null||v===void 0?void 0:v.target);if(!h){return c}var g=h.getBoundingClientRect();d={top:g.top,left:g.left,width:g.width,height:g.height};break}var m=ne(a,d,t,r,o,n,e);var b=ie(s,a,d,t,r);var k=m.top+b.top;var w=m.left+b.left;var y=oe(a,o,n,k,w,t,r,e),x=y.arrowTop,P=y.arrowLeft;var D=ee(a,s,e),T=D.originX,E=D.originY;return{top:k,left:w,referenceCoordinates:d,arrowTop:x,arrowLeft:P,originX:T,originY:E}};var ee=function(e,t,r){switch(e){case"top":return{originX:te(t),originY:"bottom"};case"bottom":return{originX:te(t),originY:"top"};case"left":return{originX:"right",originY:re(t)};case"right":return{originX:"left",originY:re(t)};case"start":return{originX:r?"left":"right",originY:re(t)};case"end":return{originX:r?"right":"left",originY:re(t)}}};var te=function(e){switch(e){case"start":return"left";case"center":return"center";case"end":return"right"}};var re=function(e){switch(e){case"start":return"top";case"center":return"center";case"end":return"bottom"}};var oe=function(e,t,r,o,n,i,a,s){var c={arrowTop:o+a/2-t/2,arrowLeft:n+i-t/2};var p={arrowTop:o+a/2-t/2,arrowLeft:n-t*1.5};switch(e){case"top":return{arrowTop:o+a,arrowLeft:n+i/2-t/2};case"bottom":return{arrowTop:o-r,arrowLeft:n+i/2-t/2};case"left":return c;case"right":return p;case"start":return s?p:c;case"end":return s?c:p;default:return{arrowTop:0,arrowLeft:0}}};var ne=function(e,t,r,o,n,i,a){var s={top:t.top,left:t.left-r-n};var c={top:t.top,left:t.left+t.width+n};switch(e){case"top":return{top:t.top-o-i,left:t.left};case"right":return c;case"bottom":return{top:t.top+t.height+i,left:t.left};case"left":return s;case"start":return a?c:s;case"end":return a?s:c}};var ie=function(e,t,r,o,n){switch(e){case"center":return se(t,r,o,n);case"end":return ae(t,r,o,n);case"start":default:return{top:0,left:0}}};var ae=function(e,t,r,o){switch(e){case"start":case"end":case"left":case"right":return{top:-(o-t.height),left:0};case"top":case"bottom":default:return{top:0,left:-(r-t.width)}}};var se=function(e,t,r,o){switch(e){case"start":case"end":case"left":case"right":return{top:-(o/2-t.height/2),left:0};case"top":case"bottom":default:return{top:0,left:-(r/2-t.width/2)}}};var ce=function(e,t,r,o,n,i,a,s,c,p,u,f,d,l,v){if(d===void 0){d=0}if(l===void 0){l=0}if(v===void 0){v=0}var h=d;var g=l;var m=r;var b=t;var k;var w=p;var y=u;var x=false;var P=false;var D=f?f.top+f.height:i/2-s/2;var T=f?f.height:0;var E=false;if(m<o+c){m=o;x=true;w="left"}else if(a+o+m+c>n){P=true;m=n-a-o;w="right"}if(D+T+s>i&&(e==="top"||e==="bottom")){if(D-s>0){b=D-s-T-(v-1);h=b+s;y="bottom";E=true}else{k=o}}return{top:b,left:m,bottom:k,originX:w,originY:y,checkSafeAreaLeft:x,checkSafeAreaRight:P,arrowTop:h,arrowLeft:g,addPopoverBottomClass:E}};var pe=function(e,t,r,o){if(t===void 0){t=false}if(!r&&!o){return false}if(e!=="top"&&e!=="bottom"&&t){return false}return true};var ue=8;var fe=function(e,t){var r=t.event,o=t.size,n=t.trigger,i=t.reference,a=t.side,s=t.align;var c=e.ownerDocument;var p=c.dir==="rtl";var f=c.defaultView.innerWidth;var d=c.defaultView.innerHeight;var l=u(e);var v=l.querySelector(".popover-content");var h=l.querySelector(".popover-arrow");console.log(v);var g=F(o,v,n),m=g.contentWidth,b=g.contentHeight;var k=H(h),y=k.arrowWidth,x=k.arrowHeight;var P={top:d/2-b/2,left:f/2-m/2,originX:p?"right":"left",originY:"top"};var D=$(p,m,b,y,x,i,a,s,P,n,r);var T=ce(a,D.top,D.left,ue,f,d,m,b,25,D.originX,D.originY,D.referenceCoordinates,D.arrowTop,D.arrowLeft,x),E=T.originX,I=T.originY,_=T.top,L=T.left,A=T.bottom,S=T.checkSafeAreaLeft,B=T.checkSafeAreaRight,C=T.arrowTop,W=T.arrowLeft,O=T.addPopoverBottomClass;var N=w();var j=w();var Y=w();j.addElement(l.querySelector("bkkr-backdrop")).fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]);Y.addElement(l.querySelector(".popover-wrapper")).fromTo("opacity",.01,1);return N.easing("ease").duration(100).beforeAddWrite((function(){if(o==="cover"){e.style.setProperty("--width",m+"px")}if(O){e.classList.add("popover-bottom")}if(A!==undefined){v.style.setProperty("bottom",A+"px")}var t=" + var(--safe-area-left, 0)";var i=" - var(--safe-area-right, 0)";var s=L+"px";if(S){s=L+"px"+t}if(B){s=L+"px"+i}v.style.setProperty("top","calc("+_+"px + var(--offset-y, 0))");v.style.setProperty("left","calc("+s+" + var(--offset-x, 0))");v.style.setProperty("transform-origin",I+" "+E);if(h!==null){var c=D.top!==_||D.left!==L;var p=pe(a,c,r,n);if(p){h.style.setProperty("top","calc("+C+"px + var(--offset-y, 0))");h.style.setProperty("left","calc("+W+"px + var(--offset-x, 0))")}else{h.style.setProperty("display","none")}}})).addAnimation([j,Y])};var de=function(e){var t=u(e);var r=t.querySelector(".popover-content");var o=t.querySelector(".popover-arrow");var n=w();var i=w();var a=w();i.addElement(t.querySelector("bkkr-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0);a.addElement(t.querySelector(".popover-wrapper")).fromTo("opacity",.99,0);return n.easing("ease").afterAddWrite((function(){e.style.removeProperty("--width");e.classList.remove("popover-bottom");r.style.removeProperty("top");r.style.removeProperty("left");r.style.removeProperty("bottom");r.style.removeProperty("transform-origin");if(o){o.style.removeProperty("top");o.style.removeProperty("left");o.style.removeProperty("display")}})).duration(300).addAnimation([i,a])};var le=':host{--background:var(--bkkr-overlay-background, var(--bkkr-background-color, #fff));--min-width:250px;--min-height:0;--max-width:auto;--height:auto;--width:250px;--max-height:90%;--box-shadow:0 15px 25px 0 rgba(var(--box-shadow-color, 0, 0, 0), 0.1), 0 6px 20px 0 rgba(var(--box-shadow-color, 0, 0, 0), 0.12), 0 13.2px 40px 0 rgba(var(--box-shadow-color, 0, 0, 0), 0.08);--backdrop-opacity:0;--offset-x:0px;--offset-y:0px;top:0;right:0;bottom:0;left:0;display:-ms-flexbox;display:flex;position:fixed;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;color:var(--bkkr-text-color, #000);z-index:1001;pointer-events:none}:host(.popover-interactive) .popover-content,:host(.popover-interactive) bkkr-backdrop{pointer-events:auto}:host(.overlay-hidden){display:none}:host(.popover-desktop){--box-shadow:0px 4px 16px 0px rgba(0, 0, 0, 0.12)}.popover-wrapper{opacity:0;z-index:10}.popover-content{--safe-area-top:0px;--safe-area-right:0px;--safe-area-bottom:0px;--safe-area-left:0px;border-radius:1em;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:auto;z-index:10}:host(.popover-desktop) .popover-content{border:0.5px solid var(--color-step-100, #e6e6e6)}:host(.popover-nested.popover-side-left){--offset-x:5px}:host(.popover-nested.popover-side-right){--offset-x:-5px}:host(.popover-nested.popover-side-start){--offset-x:5px}:host-context([dir=rtl]):host(.popover-nested.popover-side-start),:host-context([dir=rtl]).popover-nested.popover-side-start{--offset-x:-5px}:host(.popover-nested.popover-side-end){--offset-x:-5px}:host-context([dir=rtl]):host(.popover-nested.popover-side-end),:host-context([dir=rtl]).popover-nested.popover-side-end{--offset-x:5px}.popover-arrow{display:block;position:absolute;width:20px;height:10px;overflow:hidden;z-index:11}.popover-arrow::after{top:3px;left:3px;border-radius:3px;position:absolute;width:14px;height:14px;-webkit-transform:rotate(45deg);transform:rotate(45deg);background:var(--background);content:"";z-index:10}:host(.popover-bottom) .popover-arrow{top:auto;bottom:-10px}:host(.popover-bottom) .popover-arrow::after{top:-6px}:host(.popover-side-left) .popover-arrow{-webkit-transform:rotate(90deg);transform:rotate(90deg)}:host(.popover-side-right) .popover-arrow{-webkit-transform:rotate(-90deg);transform:rotate(-90deg)}:host(.popover-side-top) .popover-arrow{-webkit-transform:rotate(180deg);transform:rotate(180deg)}:host(.popover-side-start) .popover-arrow{-webkit-transform:rotate(90deg);transform:rotate(90deg)}:host-context([dir=rtl]):host(.popover-side-start) .popover-arrow,:host-context([dir=rtl]).popover-side-start .popover-arrow{-webkit-transform:rotate(-90deg);transform:rotate(-90deg)}:host(.popover-side-end) .popover-arrow{-webkit-transform:rotate(-90deg);transform:rotate(-90deg)}:host-context([dir=rtl]):host(.popover-side-end) .popover-arrow,:host-context([dir=rtl]).popover-side-end .popover-arrow{-webkit-transform:rotate(90deg);transform:rotate(90deg)}';var ve=e("bkkr_popover",function(){function e(e){var o=this;t(this,e);this.didPresent=r(this,"bkkrPopoverDidPresent",7);this.willPresent=r(this,"bkkrPopoverWillPresent",7);this.willDismiss=r(this,"bkkrPopoverWillDismiss",7);this.didDismiss=r(this,"bkkrPopoverDidDismiss",7);this.didPresentShorthand=r(this,"didPresent",7);this.willPresentShorthand=r(this,"willPresent",7);this.willDismissShorthand=r(this,"willDismiss",7);this.didDismissShorthand=r(this,"didDismiss",7);this.parentPopover=null;this.popoverIndex=ge++;this.coreDelegate=a();this.inline=false;this.focusDescendantOnPresent=false;this.presented=false;this.keyboardClose=true;this.backdropDismiss=true;this.showBackdrop=false;this.animated=true;this.triggerAction="click";this.size="auto";this.dismissOnSelect=false;this.reference="trigger";this.side="bottom";this.alignment="start";this.arrow=true;this.isOpen=false;this.onDismiss=function(e){e.stopPropagation();e.preventDefault();o.dismiss()};this.onBackdropTap=function(){o.dismiss(undefined,d)};this.onLifecycle=function(e){var t=o.usersElement;var r=he[e.type];if(t&&r){var n=new CustomEvent(r,{bubbles:false,cancelable:false,detail:e.detail});t.dispatchEvent(n)}};this.configureTriggerInteraction=function(){var e=o,t=e.trigger,r=e.triggerAction,n=e.el,i=e.destroyTriggerInteraction;if(i){i()}var a=o.triggerEl=t!==undefined?document.getElementById(t):null;if(!a){return}o.destroyTriggerInteraction=V(a,r,n)};this.configureKeyboardInteraction=function(){var e=o,t=e.destroyKeyboardInteraction,r=e.el;if(t){t()}o.destroyKeyboardInteraction=Z(r)};this.configureDismissInteraction=function(){var e=o,t=e.destroyDismissInteraction,r=e.parentPopover,n=e.triggerAction,i=e.triggerEl,a=e.el;if(!r||!i){return}if(t){t()}o.destroyDismissInteraction=M(i,n,a,r)}}e.prototype.onTriggerChange=function(){this.configureTriggerInteraction()};e.prototype.onIsOpenChange=function(e,t){if(e===true&&t===false){this.present()}else if(e===false&&t===true){this.dismiss()}};e.prototype.connectedCallback=function(){l(this.el)};e.prototype.componentWillLoad=function(){this.popoverId=this.el.hasAttribute("id")?this.el.getAttribute("id"):"bkkr-popover-"+this.popoverIndex;this.parentPopover=this.el.closest("bkkr-popover:not(#"+this.popoverId+")")};e.prototype.componentDidLoad=function(){var e=this;var t=this,r=t.parentPopover,o=t.isOpen;if(o===true){p((function(){return e.present()}))}if(r){f(r,"bkkrPopoverWillDismiss",(function(){e.dismiss(undefined,undefined,false)}))}this.configureTriggerInteraction()};e.prototype.presentFromTrigger=function(e,t){if(t===void 0){t=false}return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(r){switch(r.label){case 0:this.triggerEv=e;this.focusDescendantOnPresent=t;return[4,this.present()];case 1:r.sent();this.triggerEv=undefined;this.focusDescendantOnPresent=false;return[2]}}))}))};e.prototype.getDelegate=function(e){if(e===void 0){e=false}if(this.workingDelegate&&!e){return{delegate:this.workingDelegate,inline:this.inline}}var t=this.el.parentNode;var r=this.inline=t!==null&&t.tagName!=="BKKR-ROOT"&&t.tagName!=="BODY";var o=this.workingDelegate=r?this.delegate||this.coreDelegate:this.delegate;return{inline:r,delegate:o}};e.prototype.present=function(){return __awaiter(this,void 0,void 0,(function(){var e,t,r,o,n;return __generator(this,(function(i){switch(i.label){case 0:if(this.presented){return[2]}if(!(this.currentTransition!==undefined))return[3,2];return[4,this.currentTransition];case 1:i.sent();i.label=2;case 2:e=Object.assign(Object.assign({},this.componentProps),{popover:this.el});t=this.getDelegate(true),r=t.inline,o=t.delegate;n=this;return[4,s(o,this.el,this.component,["popover-viewport"],e,r)];case 3:n.usersElement=i.sent();return[4,k(this.usersElement)];case 4:i.sent();this.configureKeyboardInteraction();this.configureDismissInteraction();this.currentTransition=v(this,"popoverEnter",fe,{event:this.event||this.triggerEv,size:this.size,trigger:this.triggerEl,reference:this.reference,side:this.side,align:this.alignment});return[4,this.currentTransition];case 5:i.sent();this.currentTransition=undefined;if(this.focusDescendantOnPresent){h(this.el,this.el)}return[2]}}))}))};e.prototype.dismiss=function(e,t,r){if(r===void 0){r=true}return __awaiter(this,void 0,void 0,(function(){var o,n,i,a,s;return __generator(this,(function(p){switch(p.label){case 0:if(!(this.currentTransition!==undefined))return[3,2];return[4,this.currentTransition];case 1:p.sent();p.label=2;case 2:o=this,n=o.destroyKeyboardInteraction,i=o.destroyDismissInteraction;if(r&&this.parentPopover){this.parentPopover.dismiss(e,t,r)}this.currentTransition=g(this,e,t,"popoverLeave",de,this.event);return[4,this.currentTransition];case 3:a=p.sent();if(!a)return[3,5];if(n){n();this.destroyKeyboardInteraction=undefined}if(i){i();this.destroyDismissInteraction=undefined}s=this.getDelegate().delegate;return[4,c(s,this.usersElement)];case 4:p.sent();p.label=5;case 5:this.currentTransition=undefined;return[2,a]}}))}))};e.prototype.getParentPopover=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(e){return[2,this.parentPopover]}))}))};e.prototype.onDidDismiss=function(){return m(this.el,"bkkrPopoverDidDismiss")};e.prototype.onWillDismiss=function(){return m(this.el,"bkkrPopoverWillDismiss")};e.prototype.render=function(){var e;var t=this;var r=this,i=r.onLifecycle,a=r.popoverId,s=r.parentPopover,c=r.dismissOnSelect,p=r.presented,u=r.side,f=r.arrow;var d=P("desktop");var l=f&&!s&&!d;return o(n,{"aria-modal":"true","no-router":true,tabindex:"-1",style:{zIndex:""+(2e4+this.overlayIndex)},id:a,class:Object.assign(Object.assign({},b(this.cssClass)),(e={"overlay-hidden":true,"popover-interactive":p,"popover-desktop":d},e["popover-side-"+u]=true,e["popover-nested"]=!!s,e)),onBkkrPopoverDidPresent:i,onBkkrPopoverWillPresent:i,onBkkrPopoverWillDismiss:i,onBkkrPopoverDidDismiss:i,onBkkrDismiss:this.onDismiss,onBkkrBackdropTap:this.onBackdropTap},!s&&o("bkkr-backdrop",{tappable:this.backdropDismiss,visible:this.showBackdrop}),o("div",{class:"popover-wrapper bkkr-overlay-wrapper",onClick:c?function(){return t.dismiss()}:undefined},l&&o("div",{class:"popover-arrow"}),o("div",{class:"popover-content"},o("slot",null))))};Object.defineProperty(e.prototype,"el",{get:function(){return i(this)},enumerable:false,configurable:true});Object.defineProperty(e,"watchers",{get:function(){return{trigger:["onTriggerChange"],triggerAction:["onTriggerChange"],isOpen:["onIsOpenChange"]}},enumerable:false,configurable:true});return e}());var he={bkkrPopoverDidPresent:"bkkrViewDidEnter",bkkrPopoverWillPresent:"bkkrViewWillEnter",bkkrPopoverWillDismiss:"bkkrViewWillLeave",bkkrPopoverDidDismiss:"bkkrViewDidLeave"};var ge=0;ve.style=le}}}));