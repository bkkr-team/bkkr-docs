var __awaiter=this&&this.__awaiter||function(n,e,r,t){function i(n){return n instanceof r?n:new r((function(e){e(n)}))}return new(r||(r=Promise))((function(r,a){function u(n){try{s(t.next(n))}catch(n){a(n)}}function o(n){try{s(t["throw"](n))}catch(n){a(n)}}function s(n){n.done?r(n.value):i(n.value).then(u,o)}s((t=t.apply(n,e||[])).next())}))};var __generator=this&&this.__generator||function(n,e){var r={label:0,sent:function(){if(a[0]&1)throw a[1];return a[1]},trys:[],ops:[]},t,i,a,u;return u={next:o(0),throw:o(1),return:o(2)},typeof Symbol==="function"&&(u[Symbol.iterator]=function(){return this}),u;function o(n){return function(e){return s([n,e])}}function s(u){if(t)throw new TypeError("Generator is already executing.");while(r)try{if(t=1,i&&(a=u[0]&2?i["return"]:u[0]?i["throw"]||((a=i["return"])&&a.call(i),0):i.next)&&!(a=a.call(i,u[1])).done)return a;if(i=0,a)u=[u[0]&2,a.value];switch(u[0]){case 0:case 1:a=u;break;case 4:r.label++;return{value:u[1],done:false};case 5:r.label++;i=u[1];u=[0];continue;case 7:u=r.ops.pop();r.trys.pop();continue;default:if(!(a=r.trys,a=a.length>0&&a[a.length-1])&&(u[0]===6||u[0]===2)){r=0;continue}if(u[0]===3&&(!a||u[1]>a[0]&&u[1]<a[3])){r.label=u[1];break}if(u[0]===6&&r.label<a[1]){r.label=a[1];a=u;break}if(a&&r.label<a[2]){r.label=a[2];r.ops.push(u);break}if(a[2])r.ops.pop();r.trys.pop();continue}u=e.call(n,r)}catch(n){u=[6,n];i=0}finally{t=a=0}if(u[0]&5)throw u[1];return{value:u[0]?u[1]:void 0,done:true}}};System.register(["./p-16454e5b.system.js","./p-9895d5cb.system.js"],(function(n){"use strict";var e,r;return{setters:[function(n){e=n.c},function(n){r=n.c}],execute:function(){var t=this;var i=function(){return r().duration(400)};var a=function(n){var e;var t;var a=n.width+8;var u=r();var o=r();if(n.isEndSide){e=a+"px";t="0px"}else{e=-a+"px";t="0px"}u.addElement(n.menuInnerEl).fromTo("transform","translateX("+e+")","translateX("+t+")");var s=.2;o.addElement(n.backdropEl).fromTo("opacity",.01,s);return i().addAnimation([u,o])};var u=function(n){var e;var t;var a=n.width;if(n.isEndSide){e=-a+"px";t=a+"px"}else{e=a+"px";t=-a+"px"}var u=r().addElement(n.menuInnerEl).fromTo("transform","translateX("+t+")","translateX(0px)");var o=r().addElement(n.contentEl).fromTo("transform","translateX(0px)","translateX("+e+")");var s=r().addElement(n.backdropEl).fromTo("opacity",.01,.32);return i().addAnimation([u,o,s])};var o=function(n){var e=n.width*(n.isEndSide?-1:1)+"px";var t=r().addElement(n.contentEl).fromTo("transform","translateX(0px)","translateX("+e+")");return i().addAnimation(t)};var s=function(){var n=new Map;var r=[];var i=function(n){return __awaiter(t,void 0,void 0,(function(){var e;return __generator(this,(function(r){switch(r.label){case 0:return[4,_(n)];case 1:e=r.sent();if(e){return[2,e.open()]}return[2,false]}}))}))};var s=function(n){return __awaiter(t,void 0,void 0,(function(){var e;return __generator(this,(function(r){switch(r.label){case 0:return[4,n!==undefined?_(n):h()];case 1:e=r.sent();if(e!==undefined){return[2,e.close()]}return[2,false]}}))}))};var c=function(n){return __awaiter(t,void 0,void 0,(function(){var e;return __generator(this,(function(r){switch(r.label){case 0:return[4,_(n)];case 1:e=r.sent();if(e){return[2,e.toggle()]}return[2,false]}}))}))};var f=function(n,e){return __awaiter(t,void 0,void 0,(function(){var r;return __generator(this,(function(t){switch(t.label){case 0:return[4,_(e)];case 1:r=t.sent();if(r){r.disabled=!n}return[2,r]}}))}))};var l=function(n,e){return __awaiter(t,void 0,void 0,(function(){var r;return __generator(this,(function(t){switch(t.label){case 0:return[4,_(e)];case 1:r=t.sent();if(r){r.swipeGesture=n}return[2,r]}}))}))};var d=function(n){return __awaiter(t,void 0,void 0,(function(){var e,e;return __generator(this,(function(r){switch(r.label){case 0:if(!(n!=null))return[3,2];return[4,_(n)];case 1:e=r.sent();return[2,e!==undefined&&e.isOpen()];case 2:return[4,h()];case 3:e=r.sent();return[2,e!==undefined]}}))}))};var v=function(n){return __awaiter(t,void 0,void 0,(function(){var e;return __generator(this,(function(r){switch(r.label){case 0:return[4,_(n)];case 1:e=r.sent();if(e){return[2,!e.disabled]}return[2,false]}}))}))};var _=function(n){return __awaiter(t,void 0,void 0,(function(){var e,t;return __generator(this,(function(i){switch(i.label){case 0:return[4,X()];case 1:i.sent();if(n==="start"||n==="end"){e=S((function(e){return e.side===n&&!e.disabled}));if(e){return[2,e]}return[2,S((function(e){return e.side===n}))]}else if(n!=null){return[2,S((function(e){return e.menuId===n}))]}t=S((function(n){return!n.disabled}));if(t){return[2,t]}return[2,r.length>0?r[0].el:undefined]}}))}))};var h=function(){return __awaiter(t,void 0,void 0,(function(){return __generator(this,(function(n){switch(n.label){case 0:return[4,X()];case 1:n.sent();return[2,A()]}}))}))};var p=function(){return __awaiter(t,void 0,void 0,(function(){return __generator(this,(function(n){switch(n.label){case 0:return[4,X()];case 1:n.sent();return[2,O()]}}))}))};var w=function(){return __awaiter(t,void 0,void 0,(function(){return __generator(this,(function(n){switch(n.label){case 0:return[4,X()];case 1:n.sent();return[2,k()]}}))}))};var m=function(e,r){n.set(e,r)};var b=function(n){if(r.indexOf(n)<0){if(!n.disabled){y(n)}r.push(n)}};var g=function(n){var e=r.indexOf(n);if(e>-1){r.splice(e,1)}};var y=function(n){var e=n.side;r.filter((function(r){return r.side===e&&r!==n})).forEach((function(n){return n.disabled=true}))};var x=function(n,e,r){return __awaiter(t,void 0,void 0,(function(){var t;return __generator(this,(function(i){switch(i.label){case 0:if(k()){return[2,false]}if(!e)return[3,3];return[4,h()];case 1:t=i.sent();if(!(t&&n.el!==t))return[3,3];return[4,t.setOpen(false,false)];case 2:i.sent();i.label=3;case 3:return[2,n._setOpen(e,r)]}}))}))};var E=function(e,r){var t=n.get(e);if(!t){throw new Error("animation not registered")}var i=t(r);return i};var A=function(){return S((function(n){return n._isOpen}))};var O=function(){return r.map((function(n){return n.el}))};var k=function(){return r.some((function(n){return n.isAnimating}))};var S=function(n){var e=r.find(n);if(e!==undefined){return e.el}return undefined};var X=function(){return Promise.all(Array.from(document.querySelectorAll("bkkr-menu")).map((function(n){return new Promise((function(r){return e(n,r)}))})))};m("reveal",o);m("push",u);m("overlay",a);return{registerAnimation:m,get:_,getMenus:p,getOpen:h,isEnabled:v,swipeGesture:l,isAnimating:w,isOpen:d,enable:f,toggle:c,close:s,open:i,_getOpenSync:A,_createAnimation:E,_register:b,_unregister:g,_setOpen:x,_setActiveMenu:y}};var c=n("m",s())}}}));