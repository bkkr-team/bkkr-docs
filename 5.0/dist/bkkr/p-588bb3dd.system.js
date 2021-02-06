var __awaiter=this&&this.__awaiter||function(n,e,r,t){function a(n){return n instanceof r?n:new r((function(e){e(n)}))}return new(r||(r=Promise))((function(r,i){function u(n){try{s(t.next(n))}catch(n){i(n)}}function o(n){try{s(t["throw"](n))}catch(n){i(n)}}function s(n){n.done?r(n.value):a(n.value).then(u,o)}s((t=t.apply(n,e||[])).next())}))};var __generator=this&&this.__generator||function(n,e){var r={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},t,a,i,u;return u={next:o(0),throw:o(1),return:o(2)},typeof Symbol==="function"&&(u[Symbol.iterator]=function(){return this}),u;function o(n){return function(e){return s([n,e])}}function s(u){if(t)throw new TypeError("Generator is already executing.");while(r)try{if(t=1,a&&(i=u[0]&2?a["return"]:u[0]?a["throw"]||((i=a["return"])&&i.call(a),0):a.next)&&!(i=i.call(a,u[1])).done)return i;if(a=0,i)u=[u[0]&2,i.value];switch(u[0]){case 0:case 1:i=u;break;case 4:r.label++;return{value:u[1],done:false};case 5:r.label++;a=u[1];u=[0];continue;case 7:u=r.ops.pop();r.trys.pop();continue;default:if(!(i=r.trys,i=i.length>0&&i[i.length-1])&&(u[0]===6||u[0]===2)){r=0;continue}if(u[0]===3&&(!i||u[1]>i[0]&&u[1]<i[3])){r.label=u[1];break}if(u[0]===6&&r.label<i[1]){r.label=i[1];i=u;break}if(i&&r.label<i[2]){r.label=i[2];r.ops.push(u);break}if(i[2])r.ops.pop();r.trys.pop();continue}u=e.call(n,r)}catch(n){u=[6,n];a=0}finally{t=i=0}if(u[0]&5)throw u[1];return{value:u[0]?u[1]:void 0,done:true}}};System.register(["./p-7660814d.system.js"],(function(n){"use strict";var e;return{setters:[function(n){e=n.c}],execute:function(){var r=this;var t=function(){return e().duration(300)};var a=function(n){var r;var a;var i=n.width+8;var u=e();var o=e();if(n.isEndSide){r=i+"px";a="0px"}else{r=-i+"px";a="0px"}u.addElement(n.menuInnerEl).fromTo("transform","translateX("+r+")","translateX("+a+")");var s=.2;o.addElement(n.backdropEl).fromTo("opacity",.01,s);return t().addAnimation([u,o])};var i=function(n){var r;var a;var i=n.width;if(n.isEndSide){r=-i+"px";a=i+"px"}else{r=i+"px";a=-i+"px"}var u=e().addElement(n.menuInnerEl).fromTo("box-shadow","0px 0px 0px rgba(0,0,0,0)","var(--box-shadow)").fromTo("transform","translateX("+a+")","translateX(0px)");var o=e().addElement(n.contentEl).fromTo("transform","translateX(0px)","translateX("+r+")");var s=e().addElement(n.backdropEl).fromTo("opacity",.01,.32);return t().addAnimation([u,o,s])};var u=function(n){var r=n.width*(n.isEndSide?-1:1)+"px";var a=e().addElement(n.contentEl).fromTo("transform","translateX(0px)","translateX("+r+")");return t().addAnimation(a)};var o=function(){var n=new Map;var e=[];var t=function(n){return __awaiter(r,void 0,void 0,(function(){var e;return __generator(this,(function(r){switch(r.label){case 0:return[4,v(n)];case 1:e=r.sent();if(e){return[2,e.open()]}return[2,false]}}))}))};var o=function(n){return __awaiter(r,void 0,void 0,(function(){var e;return __generator(this,(function(r){switch(r.label){case 0:return[4,n!==undefined?v(n):_()];case 1:e=r.sent();if(e!==undefined){return[2,e.close()]}return[2,false]}}))}))};var s=function(n){return __awaiter(r,void 0,void 0,(function(){var e;return __generator(this,(function(r){switch(r.label){case 0:return[4,v(n)];case 1:e=r.sent();if(e){return[2,e.toggle()]}return[2,false]}}))}))};var c=function(n,e){return __awaiter(r,void 0,void 0,(function(){var r;return __generator(this,(function(t){switch(t.label){case 0:return[4,v(e)];case 1:r=t.sent();if(r){r.disabled=!n}return[2,r]}}))}))};var f=function(n,e){return __awaiter(r,void 0,void 0,(function(){var r;return __generator(this,(function(t){switch(t.label){case 0:return[4,v(e)];case 1:r=t.sent();if(r){r.swipeGesture=n}return[2,r]}}))}))};var l=function(n){return __awaiter(r,void 0,void 0,(function(){var e,e;return __generator(this,(function(r){switch(r.label){case 0:if(!(n!=null))return[3,2];return[4,v(n)];case 1:e=r.sent();return[2,e!==undefined&&e.isOpen()];case 2:return[4,_()];case 3:e=r.sent();return[2,e!==undefined]}}))}))};var d=function(n){return __awaiter(r,void 0,void 0,(function(){var e;return __generator(this,(function(r){switch(r.label){case 0:return[4,v(n)];case 1:e=r.sent();if(e){return[2,!e.disabled]}return[2,false]}}))}))};var v=function(n){return __awaiter(r,void 0,void 0,(function(){var r,t;return __generator(this,(function(a){switch(a.label){case 0:return[4,S()];case 1:a.sent();if(n==="start"||n==="end"){r=k((function(e){return e.side===n&&!e.disabled}));if(r){return[2,r]}return[2,k((function(e){return e.side===n}))]}else if(n!=null){return[2,k((function(e){return e.menuId===n}))]}t=k((function(n){return!n.disabled}));if(t){return[2,t]}return[2,e.length>0?e[0].el:undefined]}}))}))};var _=function(){return __awaiter(r,void 0,void 0,(function(){return __generator(this,(function(n){switch(n.label){case 0:return[4,S()];case 1:n.sent();return[2,E()]}}))}))};var p=function(){return __awaiter(r,void 0,void 0,(function(){return __generator(this,(function(n){switch(n.label){case 0:return[4,S()];case 1:n.sent();return[2,O()]}}))}))};var h=function(){return __awaiter(r,void 0,void 0,(function(){return __generator(this,(function(n){switch(n.label){case 0:return[4,S()];case 1:n.sent();return[2,A()]}}))}))};var w=function(e,r){n.set(e,r)};var m=function(n){if(e.indexOf(n)<0){if(!n.disabled){g(n)}e.push(n)}};var b=function(n){var r=e.indexOf(n);if(r>-1){e.splice(r,1)}};var g=function(n){var r=n.side;e.filter((function(e){return e.side===r&&e!==n})).forEach((function(n){return n.disabled=true}))};var x=function(n,e,t){return __awaiter(r,void 0,void 0,(function(){var r;return __generator(this,(function(a){switch(a.label){case 0:if(A()){return[2,false]}if(!e)return[3,3];return[4,_()];case 1:r=a.sent();if(!(r&&n.el!==r))return[3,3];return[4,r.setOpen(false,false)];case 2:a.sent();a.label=3;case 3:return[2,n._setOpen(e,t)]}}))}))};var y=function(e,r){var t=n.get(e);if(!t){throw new Error("animation not registered")}var a=t(r);return a};var E=function(){return k((function(n){return n._isOpen}))};var O=function(){return e.map((function(n){return n.el}))};var A=function(){return e.some((function(n){return n.isAnimating}))};var k=function(n){var r=e.find(n);if(r!==undefined){return r.el}return undefined};var S=function(){return Promise.all(Array.from(document.querySelectorAll("bkkr-menu")).map((function(n){return n.componentOnReady()})))};w("reveal",u);w("push",i);w("overlay",a);return{registerAnimation:w,get:v,getMenus:p,getOpen:_,isEnabled:d,swipeGesture:f,isAnimating:h,isOpen:l,enable:c,toggle:s,close:o,open:t,_getOpenSync:E,_createAnimation:y,_register:m,_unregister:b,_setOpen:x,_setActiveMenu:g}};var s=n("m",o())}}}));