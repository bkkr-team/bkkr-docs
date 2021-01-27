var __awaiter=this&&this.__awaiter||function(n,e,r,t){function i(n){return n instanceof r?n:new r((function(e){e(n)}))}return new(r||(r=Promise))((function(r,a){function u(n){try{s(t.next(n))}catch(n){a(n)}}function o(n){try{s(t["throw"](n))}catch(n){a(n)}}function s(n){n.done?r(n.value):i(n.value).then(u,o)}s((t=t.apply(n,e||[])).next())}))};var __generator=this&&this.__generator||function(n,e){var r={label:0,sent:function(){if(a[0]&1)throw a[1];return a[1]},trys:[],ops:[]},t,i,a,u;return u={next:o(0),throw:o(1),return:o(2)},typeof Symbol==="function"&&(u[Symbol.iterator]=function(){return this}),u;function o(n){return function(e){return s([n,e])}}function s(u){if(t)throw new TypeError("Generator is already executing.");while(r)try{if(t=1,i&&(a=u[0]&2?i["return"]:u[0]?i["throw"]||((a=i["return"])&&a.call(i),0):i.next)&&!(a=a.call(i,u[1])).done)return a;if(i=0,a)u=[u[0]&2,a.value];switch(u[0]){case 0:case 1:a=u;break;case 4:r.label++;return{value:u[1],done:false};case 5:r.label++;i=u[1];u=[0];continue;case 7:u=r.ops.pop();r.trys.pop();continue;default:if(!(a=r.trys,a=a.length>0&&a[a.length-1])&&(u[0]===6||u[0]===2)){r=0;continue}if(u[0]===3&&(!a||u[1]>a[0]&&u[1]<a[3])){r.label=u[1];break}if(u[0]===6&&r.label<a[1]){r.label=a[1];a=u;break}if(a&&r.label<a[2]){r.label=a[2];r.ops.push(u);break}if(a[2])r.ops.pop();r.trys.pop();continue}u=e.call(n,r)}catch(n){u=[6,n];i=0}finally{t=a=0}if(u[0]&5)throw u[1];return{value:u[0]?u[1]:void 0,done:true}}};System.register(["./p-b9ae5f46.system.js"],(function(n){"use strict";var e;return{setters:[function(n){e=n.c}],execute:function(){var r=this;var t=function(){return e().duration(400)};var i=function(n){var r;var i;var a=n.width+8;var u=e();var o=e();if(n.isEndSide){r=a+"px";i="0px"}else{r=-a+"px";i="0px"}u.addElement(n.menuInnerEl).fromTo("transform","translateX("+r+")","translateX("+i+")");var s=.2;o.addElement(n.backdropEl).fromTo("opacity",.01,s);return t().addAnimation([u,o])};var a=function(n){var r;var i;var a=n.width;if(n.isEndSide){r=-a+"px";i=a+"px"}else{r=a+"px";i=-a+"px"}var u=e().addElement(n.menuInnerEl).fromTo("transform","translateX("+i+")","translateX(0px)");var o=e().addElement(n.contentEl).fromTo("transform","translateX(0px)","translateX("+r+")");var s=e().addElement(n.backdropEl).fromTo("opacity",.01,.32);return t().addAnimation([u,o,s])};var u=function(n){var r=n.width*(n.isEndSide?-1:1)+"px";var i=e().addElement(n.contentEl).fromTo("transform","translateX(0px)","translateX("+r+")");return t().addAnimation(i)};var o=function(){var n=new Map;var e=[];var t=function(n){return __awaiter(r,void 0,void 0,(function(){var e;return __generator(this,(function(r){switch(r.label){case 0:return[4,v(n)];case 1:e=r.sent();if(e){return[2,e.open()]}return[2,false]}}))}))};var o=function(n){return __awaiter(r,void 0,void 0,(function(){var e;return __generator(this,(function(r){switch(r.label){case 0:return[4,n!==undefined?v(n):_()];case 1:e=r.sent();if(e!==undefined){return[2,e.close()]}return[2,false]}}))}))};var s=function(n){return __awaiter(r,void 0,void 0,(function(){var e;return __generator(this,(function(r){switch(r.label){case 0:return[4,v(n)];case 1:e=r.sent();if(e){return[2,e.toggle()]}return[2,false]}}))}))};var c=function(n,e){return __awaiter(r,void 0,void 0,(function(){var r;return __generator(this,(function(t){switch(t.label){case 0:return[4,v(e)];case 1:r=t.sent();if(r){r.disabled=!n}return[2,r]}}))}))};var f=function(n,e){return __awaiter(r,void 0,void 0,(function(){var r;return __generator(this,(function(t){switch(t.label){case 0:return[4,v(e)];case 1:r=t.sent();if(r){r.swipeGesture=n}return[2,r]}}))}))};var l=function(n){return __awaiter(r,void 0,void 0,(function(){var e,e;return __generator(this,(function(r){switch(r.label){case 0:if(!(n!=null))return[3,2];return[4,v(n)];case 1:e=r.sent();return[2,e!==undefined&&e.isOpen()];case 2:return[4,_()];case 3:e=r.sent();return[2,e!==undefined]}}))}))};var d=function(n){return __awaiter(r,void 0,void 0,(function(){var e;return __generator(this,(function(r){switch(r.label){case 0:return[4,v(n)];case 1:e=r.sent();if(e){return[2,!e.disabled]}return[2,false]}}))}))};var v=function(n){return __awaiter(r,void 0,void 0,(function(){var r,t;return __generator(this,(function(i){switch(i.label){case 0:return[4,S()];case 1:i.sent();if(n==="start"||n==="end"){r=k((function(e){return e.side===n&&!e.disabled}));if(r){return[2,r]}return[2,k((function(e){return e.side===n}))]}else if(n!=null){return[2,k((function(e){return e.menuId===n}))]}t=k((function(n){return!n.disabled}));if(t){return[2,t]}return[2,e.length>0?e[0].el:undefined]}}))}))};var _=function(){return __awaiter(r,void 0,void 0,(function(){return __generator(this,(function(n){switch(n.label){case 0:return[4,S()];case 1:n.sent();return[2,E()]}}))}))};var h=function(){return __awaiter(r,void 0,void 0,(function(){return __generator(this,(function(n){switch(n.label){case 0:return[4,S()];case 1:n.sent();return[2,O()]}}))}))};var p=function(){return __awaiter(r,void 0,void 0,(function(){return __generator(this,(function(n){switch(n.label){case 0:return[4,S()];case 1:n.sent();return[2,A()]}}))}))};var w=function(e,r){n.set(e,r)};var m=function(n){if(e.indexOf(n)<0){if(!n.disabled){g(n)}e.push(n)}};var b=function(n){var r=e.indexOf(n);if(r>-1){e.splice(r,1)}};var g=function(n){var r=n.side;e.filter((function(e){return e.side===r&&e!==n})).forEach((function(n){return n.disabled=true}))};var y=function(n,e,t){return __awaiter(r,void 0,void 0,(function(){var r;return __generator(this,(function(i){switch(i.label){case 0:if(A()){return[2,false]}if(!e)return[3,3];return[4,_()];case 1:r=i.sent();if(!(r&&n.el!==r))return[3,3];return[4,r.setOpen(false,false)];case 2:i.sent();i.label=3;case 3:return[2,n._setOpen(e,t)]}}))}))};var x=function(e,r){var t=n.get(e);if(!t){throw new Error("animation not registered")}var i=t(r);return i};var E=function(){return k((function(n){return n._isOpen}))};var O=function(){return e.map((function(n){return n.el}))};var A=function(){return e.some((function(n){return n.isAnimating}))};var k=function(n){var r=e.find(n);if(r!==undefined){return r.el}return undefined};var S=function(){return Promise.all(Array.from(document.querySelectorAll("bkkr-menu")).map((function(n){return n.componentOnReady()})))};w("reveal",u);w("push",a);w("overlay",i);return{registerAnimation:w,get:v,getMenus:h,getOpen:_,isEnabled:d,swipeGesture:f,isAnimating:p,isOpen:l,enable:c,toggle:s,close:o,open:t,_getOpenSync:E,_createAnimation:x,_register:m,_unregister:b,_setOpen:y,_setActiveMenu:g}};var s=n("m",o())}}}));