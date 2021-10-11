var __awaiter=this&&this.__awaiter||function(e,r,t,n){function a(e){return e instanceof t?e:new t((function(r){r(e)}))}return new(t||(t=Promise))((function(t,i){function u(e){try{o(n.next(e))}catch(e){i(e)}}function f(e){try{o(n["throw"](e))}catch(e){i(e)}}function o(e){e.done?t(e.value):a(e.value).then(u,f)}o((n=n.apply(e,r||[])).next())}))};var __generator=this&&this.__generator||function(e,r){var t={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},n,a,i,u;return u={next:f(0),throw:f(1),return:f(2)},typeof Symbol==="function"&&(u[Symbol.iterator]=function(){return this}),u;function f(e){return function(r){return o([e,r])}}function o(u){if(n)throw new TypeError("Generator is already executing.");while(t)try{if(n=1,a&&(i=u[0]&2?a["return"]:u[0]?a["throw"]||((i=a["return"])&&i.call(a),0):a.next)&&!(i=i.call(a,u[1])).done)return i;if(a=0,i)u=[u[0]&2,i.value];switch(u[0]){case 0:case 1:i=u;break;case 4:t.label++;return{value:u[1],done:false};case 5:t.label++;a=u[1];u=[0];continue;case 7:u=t.ops.pop();t.trys.pop();continue;default:if(!(i=t.trys,i=i.length>0&&i[i.length-1])&&(u[0]===6||u[0]===2)){t=0;continue}if(u[0]===3&&(!i||u[1]>i[0]&&u[1]<i[3])){t.label=u[1];break}if(u[0]===6&&t.label<i[1]){t.label=i[1];i=u;break}if(i&&t.label<i[2]){t.label=i[2];t.ops.push(u);break}if(i[2])t.ops.pop();t.trys.pop();continue}u=r.call(e,t)}catch(e){u=[6,e];a=0}finally{n=i=0}if(u[0]&5)throw u[1];return{value:u[0]?u[1]:void 0,done:true}}};
/*!
 * (C) BKKR Framework https://bkkr-team.github.io/bkkr-docs/ - MIT License
 */System.register(["./p-884a6563.system.js"],(function(e){"use strict";var r;return{setters:[function(t){r=t.G;e("GESTURE_CONTROLLER",t.G)}],execute:function(){var t=this;var n=function(e,r,t,n){var i=a(e)?{capture:!!n.capture,passive:!!n.passive}:!!n.capture;var u;var f;if(e["__zone_symbol__addEventListener"]){u="__zone_symbol__addEventListener";f="__zone_symbol__removeEventListener"}else{u="addEventListener";f="removeEventListener"}e[u](r,t,i);return function(){e[f](r,t,i)}};var a=function(e){if(i===undefined){try{var r=Object.defineProperty({},"passive",{get:function(){i=true}});e.addEventListener("optsTest",(function(){return}),r)}catch(e){i=false}}return!!i};var i;var u=2e3;var f=function(e,r,t,a,i){var f;var c;var s;var v;var l;var d;var p;var h=0;var y=function(a){h=Date.now()+u;if(!r(a)){return}if(!c&&t){c=n(e,"touchmove",t,i)}if(!s){s=n(a.target,"touchend",b,i)}if(!v){v=n(a.target,"touchcancel",b,i)}};var m=function(a){if(h>Date.now()){return}if(!r(a)){return}if(!d&&t){d=n(o(e),"mousemove",t,i)}if(!p){p=n(o(e),"mouseup",_,i)}};var b=function(e){g();if(a){a(e)}};var _=function(e){X();if(a){a(e)}};var g=function(){if(c){c()}if(s){s()}if(v){v()}c=s=v=undefined};var X=function(){if(d){d()}if(p){p()}d=p=undefined};var Y=function(){g();X()};var w=function(r){if(r===void 0){r=true}if(!r){if(f){f()}if(l){l()}f=l=undefined;Y()}else{if(!f){f=n(e,"touchstart",y,i)}if(!l){l=n(e,"mousedown",m,i)}}};var T=function(){w(false);a=t=r=undefined};return{enable:w,stop:Y,destroy:T}};var o=function(e){return e instanceof Document?e:e.ownerDocument};var c=function(e,r,t){var n=t*(Math.PI/180);var a=e==="x";var i=Math.cos(n);var u=r*r;var f=0;var o=0;var c=false;var s=0;return{start:function(e,r){f=e;o=r;s=0;c=true},detect:function(e,r){if(!c){return false}var t=e-f;var n=r-o;var v=t*t+n*n;if(v<u){return false}var l=Math.sqrt(v);var d=(a?t:n)/l;if(d>i){s=1}else if(d<-i){s=-1}else{s=0}c=false;return true},isGesture:function(){return s!==0},getDirection:function(){return s}}};var s=e("createGesture",(function(e){var n=false;var a=false;var i=true;var u=false;var o=Object.assign({disableScroll:false,direction:"x",gesturePriority:0,passive:true,maxAngle:40,threshold:10},e);var s=o.canStart;var p=o.onWillStart;var h=o.onStart;var y=o.onEnd;var m=o.notCaptured;var b=o.onMove;var _=o.threshold;var g=o.passive;var X=o.blurOnStart;var Y={type:"pan",startX:0,startY:0,startTime:0,currentX:0,currentY:0,velocityX:0,velocityY:0,deltaX:0,deltaY:0,currentTime:0,event:undefined,data:undefined};var w=c(o.direction,o.threshold,o.maxAngle);var T=r.createGesture({name:e.gestureName,priority:e.gesturePriority,disableScroll:e.disableScroll});var E=function(e){return __awaiter(t,void 0,void 0,(function(){var r,t;return __generator(this,(function(n){switch(n.label){case 0:r=d(e);if(a||!i){return[2,false]}l(e,Y);Y.startX=Y.currentX;Y.startY=Y.currentY;Y.startTime=Y.currentTime=r;Y.velocityX=Y.velocityY=Y.deltaX=Y.deltaY=0;Y.event=e;t=s;if(!t)return[3,2];return[4,s(Y)];case 1:t=n.sent()===false;n.label=2;case 2:if(t){return[2,false]}T.release();if(!T.start()){return[2,false]}a=true;if(_===0){return[2,G()]}w.start(Y.startX,Y.startY);return[2,true]}}))}))};var S=function(e){if(n){if(!u&&i){u=true;v(Y,e);requestAnimationFrame(x)}return}v(Y,e);if(w.detect(Y.currentX,Y.currentY)){if(!w.isGesture()||!G()){M()}}};var x=function(){if(!n){return}u=false;if(b){b(Y)}};var G=function(){if(T&&!T.capture()){return false}n=true;i=false;Y.startX=Y.currentX;Y.startY=Y.currentY;Y.startTime=Y.currentTime;if(p){p(Y).then(D)}else{D()}return true};var L=function(){if(typeof document!=="undefined"){var e=document.activeElement;if(e!==null&&e.blur){e.blur()}}};var D=function(){if(X){L()}if(h){h(Y)}i=true};var O=function(){n=false;a=false;u=false;i=true;T.release()};var P=function(e){var r=n;var t=i;O();if(!t){return}v(Y,e);if(r){if(y){y(Y)}return}if(m){m(Y)}};var k=f(o.el,E,S,P,{capture:false,passive:g});var M=function(){O();k.stop();if(m){m(Y)}};return{running:function(){return n},enable:function(e){if(e===void 0){e=true}if(!e){if(n){P(undefined)}O()}k.enable(e)},destroy:function(){T.destroy();k.destroy()}}}));var v=function(e,r){if(!r){return}var t=e.currentX;var n=e.currentY;var a=e.currentTime;l(r,e);var i=e.currentX;var u=e.currentY;var f=e.currentTime=d(r);var o=f-a;if(o>0&&o<100){var c=(i-t)/o;var s=(u-n)/o;e.velocityX=c*.7+e.velocityX*.3;e.velocityY=s*.7+e.velocityY*.3}e.deltaX=i-e.startX;e.deltaY=u-e.startY;e.event=r};var l=function(e,r){var t=0;var n=0;if(e){var a=e.changedTouches;if(a&&a.length>0){var i=a[0];t=i.clientX;n=i.clientY}else if(e.pageX!==undefined){t=e.pageX;n=e.pageY}}r.currentX=t;r.currentY=n};var d=function(e){return e.timeStamp||Date.now()}}}}));