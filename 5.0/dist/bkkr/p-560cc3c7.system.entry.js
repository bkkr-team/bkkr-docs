var __awaiter=this&&this.__awaiter||function(t,e,r,n){function i(t){return t instanceof r?t:new r((function(e){e(t)}))}return new(r||(r=Promise))((function(r,a){function o(t){try{s(n.next(t))}catch(t){a(t)}}function u(t){try{s(n["throw"](t))}catch(t){a(t)}}function s(t){t.done?r(t.value):i(t.value).then(o,u)}s((n=n.apply(t,e||[])).next())}))};var __generator=this&&this.__generator||function(t,e){var r={label:0,sent:function(){if(a[0]&1)throw a[1];return a[1]},trys:[],ops:[]},n,i,a,o;return o={next:u(0),throw:u(1),return:u(2)},typeof Symbol==="function"&&(o[Symbol.iterator]=function(){return this}),o;function u(t){return function(e){return s([t,e])}}function s(o){if(n)throw new TypeError("Generator is already executing.");while(r)try{if(n=1,i&&(a=o[0]&2?i["return"]:o[0]?i["throw"]||((a=i["return"])&&a.call(i),0):i.next)&&!(a=a.call(i,o[1])).done)return a;if(i=0,a)o=[o[0]&2,a.value];switch(o[0]){case 0:case 1:a=o;break;case 4:r.label++;return{value:o[1],done:false};case 5:r.label++;i=o[1];o=[0];continue;case 7:o=r.ops.pop();r.trys.pop();continue;default:if(!(a=r.trys,a=a.length>0&&a[a.length-1])&&(o[0]===6||o[0]===2)){r=0;continue}if(o[0]===3&&(!a||o[1]>a[0]&&o[1]<a[3])){r.label=o[1];break}if(o[0]===6&&r.label<a[1]){r.label=a[1];a=o;break}if(a&&r.label<a[2]){r.label=a[2];r.ops.push(o);break}if(a[2])r.ops.pop();r.trys.pop();continue}o=e.call(t,r)}catch(t){o=[6,t];i=0}finally{n=a=0}if(o[0]&5)throw o[1];return{value:o[0]?o[1]:void 0,done:true}}};var __spreadArrays=this&&this.__spreadArrays||function(){for(var t=0,e=0,r=arguments.length;e<r;e++)t+=arguments[e].length;for(var n=Array(t),i=0,e=0;e<r;e++)for(var a=arguments[e],o=0,u=a.length;o<u;o++,i++)n[i]=a[o];return n};System.register(["./p-a34b76fe.system.js","./p-e4515508.system.js"],(function(t){"use strict";var e,r,n,i;return{setters:[function(t){e=t.r;r=t.c;n=t.g},function(t){i=t.m}],execute:function(){var a=this;var o="root";var u="forward";var s="back";var f=function(t,e,r,n,i,u){if(i===void 0){i=false}return __awaiter(a,void 0,void 0,(function(){var a,s,c,l;return __generator(this,(function(h){switch(h.label){case 0:h.trys.push([0,6,,7]);a=v(t);if(n>=e.length||!a){return[2,i]}return[4,a.componentOnReady()];case 1:h.sent();s=e[n];return[4,a.setRouteId(s.id,s.params,r,u)];case 2:c=h.sent();if(c.changed){r=o;i=true}return[4,f(c.element,e,r,n+1,i,u)];case 3:i=h.sent();if(!c.markVisible)return[3,5];return[4,c.markVisible()];case 4:h.sent();h.label=5;case 5:return[2,i];case 6:l=h.sent();console.error(l);return[2,false];case 7:return[2]}}))}))};var c=function(t){return __awaiter(a,void 0,void 0,(function(){var e,r,n,i;return __generator(this,(function(a){switch(a.label){case 0:e=[];n=t;a.label=1;case 1:if(!true)return[3,5];r=v(n);if(!r)return[3,3];return[4,r.getRouteId()];case 2:i=a.sent();if(i){n=i.element;i.element=undefined;e.push(i)}else{return[3,5]}return[3,4];case 3:return[3,5];case 4:return[3,1];case 5:return[2,{ids:e,outlet:r}]}}))}))};var l=function(){if(v(document.body)){return Promise.resolve()}return new Promise((function(t){window.addEventListener("bkkrNavWillLoad",t,{once:true})}))};var h=":not([no-router]) bkkr-nav, :not([no-router]) bkkr-tabs, :not([no-router]) bkkr-router-outlet";var v=function(t){if(!t){return undefined}if(t.matches(h)){return t}var e=t.querySelector(h);return e?e:undefined};var d=function(t,e){var r=e.from,n=e.to;if(n===undefined){return false}if(r.length>t.length){return false}for(var i=0;i<r.length;i++){var a=r[i];if(a==="*"){return true}if(a!==t[i]){return false}}return r.length===t.length};var p=function(t,e){return e.find((function(e){return d(t,e)}))};var b=function(t,e){var r=Math.min(t.length,e.length);var n=0;for(;n<r;n++){if(t[n].toLowerCase()!==e[n].id){break}}return n};var g=function(t,e){var r=new k(t);var n=false;var i;for(var a=0;a<e.length;a++){var o=e[a].path;if(o[0]===""){n=true}else{for(var u=0,s=o;u<s.length;u++){var f=s[u];var c=r.next();if(f[0]===":"){if(c===""){return null}i=i||[];var l=i[a]||(i[a]={});l[f.slice(1)]=c}else if(c!==f){return null}}n=false}}var h=n?n===(r.next()===""):true;if(!h){return null}if(i){return e.map((function(t,e){return{id:t.id,path:t.path,params:w(t.params,i[e])}}))}return e};var w=function(t,e){if(!t&&e){return e}else if(t&&!e){return t}else if(t&&e){return Object.assign(Object.assign({},t),e)}return undefined};var m=function(t,e){var r=null;var n=0;var i=t.map((function(t){return t.id}));for(var a=0,o=e;a<o.length;a++){var u=o[a];var s=b(i,u);if(s>n){r=u;n=s}}if(r){return r.map((function(e,r){return{id:e.id,path:e.path,params:w(e.params,t[r]&&t[r].params)}}))}return null};var y=function(t,e){var r=null;var n=0;for(var i=0,a=e;i<a.length;i++){var o=a[i];var u=g(t,o);if(u!==null){var s=_(u);if(s>n){n=s;r=u}}}return r};var _=function(t){var e=1;var r=1;for(var n=0,i=t;n<i.length;n++){var a=i[n];for(var o=0,u=a.path;o<u.length;o++){var s=u[o];if(s[0]===":"){e+=Math.pow(1,r)}else if(s!==""){e+=Math.pow(2,r)}r++}}return e};var k=function(){function t(t){this.path=t.slice()}t.prototype.next=function(){if(this.path.length>0){return this.path.shift()}return""};return t}();var R=function(t){var e=t.filter((function(t){return t.length>0})).join("/");return"/"+e};var P=function(t){var e=[];for(var r=0,n=t;r<n.length;r++){var i=n[r];for(var a=0,o=i.path;a<o.length;a++){var u=o[a];if(u[0]===":"){var s=i.params&&i.params[u.slice(1)];if(!s){return null}e.push(s)}else if(u!==""){e.push(u)}}}return e};var S=function(t,e,r,n,i,a,o){var s=R(__spreadArrays(E(e),n));if(r){s="#"+s}if(o!==undefined){s=s+"?"+o}if(i===u){t.pushState(a,"",s)}else{t.replaceState(a,"",s)}};var C=function(t,e){if(t.length>e.length){return null}if(t.length<=1&&t[0]===""){return e}for(var r=0;r<t.length;r++){if(t[r].length>0&&t[r]!==e[r]){return null}}if(e.length===t.length){return[""]}return e.slice(t.length)};var L=function(t,e,r){var n=t.pathname;if(r){var i=t.hash;n=i[0]==="#"?i.slice(1):""}var a=E(e);var o=E(n);return C(a,o)};var E=function(t){if(t==null){return[""]}var e=t.split("?")[0];var r=e.split("/").map((function(t){return t.trim()})).filter((function(t){return t.length>0}));if(r.length===0){return[""]}else{return r}};var N=function(t){return Array.from(t.children).filter((function(t){return t.tagName==="BKKR-ROUTE-REDIRECT"})).map((function(t){var e=U(t,"to");return{from:E(U(t,"from")),to:e==null?undefined:E(e)}}))};var j=function(t){return x(A(t))};var A=function(t,e){if(e===void 0){e=t}return Array.from(e.children).filter((function(t){return t.tagName==="BKKR-ROUTE"&&t.component})).map((function(e){var r=U(e,"component");if(r==null){throw new Error("component missing in bkkr-route")}return{path:E(U(e,"url")),id:r.toLowerCase(),params:e.componentProps,beforeLeave:e.beforeLeave,beforeEnter:e.beforeEnter,children:A(t,e)}}))};var U=function(t,e){if(e in t){return t[e]}if(t.hasAttribute(e)){return t.getAttribute(e)}return null};var x=function(t){var e=[];for(var r=0,n=t;r<n.length;r++){var i=n[r];D([],e,i)}return e};var D=function(t,e,r){var n=t.slice();n.push({id:r.id,path:r.path,params:r.params,beforeLeave:r.beforeLeave,beforeEnter:r.beforeEnter});if(r.children.length===0){e.push(n);return}for(var i=0,a=r.children;i<a.length;i++){var o=a[i];D(n,e,o)}};var W=t("bkkr_router",function(){function t(t){e(this,t);this.bkkrRouteWillChange=r(this,"bkkrRouteWillChange",7);this.bkkrRouteDidChange=r(this,"bkkrRouteDidChange",7);this.previousPath=null;this.busy=false;this.state=0;this.lastState=0;this.root="/";this.useHash=true}t.prototype.componentWillLoad=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){switch(t.label){case 0:console.debug("[bkkr-router] router will load");return[4,l()];case 1:t.sent();console.debug("[bkkr-router] found nav");return[4,this.onRoutesChanged()];case 2:t.sent();return[2]}}))}))};t.prototype.componentDidLoad=function(){window.addEventListener("bkkrRouteRedirectChanged",i(this.onRedirectChanged.bind(this),10));window.addEventListener("bkkrRouteDataChanged",i(this.onRoutesChanged.bind(this),100))};t.prototype.onPopState=function(){return __awaiter(this,void 0,void 0,(function(){var t,e,r;return __generator(this,(function(n){switch(n.label){case 0:t=this.historyDirection();e=this.getPath();return[4,this.runGuards(e)];case 1:r=n.sent();if(r!==true){if(typeof r==="object"){e=E(r.redirect)}return[2,false]}console.debug("[bkkr-router] URL changed -> update nav",e,t);return[2,this.writeNavStateRoot(e,t)]}}))}))};t.prototype.canTransition=function(){return __awaiter(this,void 0,void 0,(function(){var t;return __generator(this,(function(e){switch(e.label){case 0:return[4,this.runGuards()];case 1:t=e.sent();if(t!==true){if(typeof t==="object"){return[2,t.redirect]}else{return[2,false]}}return[2,true]}}))}))};t.prototype.push=function(t,e,r){if(e===void 0){e="forward"}return __awaiter(this,void 0,void 0,(function(){var n,i,a;return __generator(this,(function(o){switch(o.label){case 0:if(t.startsWith(".")){t=new URL(t,window.location.href).pathname}console.debug("[bkkr-router] URL pushed -> updating nav",t,e);n=E(t);i=t.split("?")[1];return[4,this.runGuards(n)];case 1:a=o.sent();if(a!==true){if(typeof a==="object"){n=E(a.redirect);i=a.redirect.split("?")[1]}else{return[2,false]}}this.setPath(n,e,i);return[2,this.writeNavStateRoot(n,e,r)]}}))}))};t.prototype.back=function(){window.history.back();return Promise.resolve(this.waitPromise)};t.prototype.printDebug=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){console.debug("CURRENT PATH",this.getPath());console.debug("PREVIOUS PATH",this.previousPath);return[2]}))}))};t.prototype.navChanged=function(t){return __awaiter(this,void 0,void 0,(function(){var e,r,n,i,a,u;return __generator(this,(function(s){switch(s.label){case 0:if(this.busy){console.warn("[bkkr-router] router is busy, navChanged was cancelled");return[2,false]}return[4,c(window.document.body)];case 1:e=s.sent(),r=e.ids,n=e.outlet;i=j(this.el);a=m(r,i);if(!a){console.warn("[bkkr-router] no matching URL for ",r.map((function(t){return t.id})));return[2,false]}u=P(a);if(!u){console.warn("[bkkr-router] router could not match path because some required param is missing");return[2,false]}console.debug("[bkkr-router] nav changed -> update URL",r,u);this.setPath(u,t);return[4,this.safeWriteNavState(n,a,o,u,null,r.length)];case 2:s.sent();return[2,true]}}))}))};t.prototype.onRedirectChanged=function(){var t=this.getPath();if(t&&p(t,N(this.el))){this.writeNavStateRoot(t,o)}};t.prototype.onRoutesChanged=function(){return this.writeNavStateRoot(this.getPath(),o)};t.prototype.historyDirection=function(){var t=window;if(t.history.state===null){this.state++;t.history.replaceState(this.state,t.document.title,t.document.location&&t.document.location.href)}var e=t.history.state;var r=this.lastState;this.lastState=e;if(e>r||e>=r&&r>0){return u}else if(e<r){return s}else{return o}};t.prototype.writeNavStateRoot=function(t,e,r){return __awaiter(this,void 0,void 0,(function(){var n,i,a,o,u;return __generator(this,(function(s){if(!t){console.error("[bkkr-router] URL is not part of the routing set");return[2,false]}n=N(this.el);i=p(t,n);a=null;if(i){this.setPath(i.to,e);a=i.from;t=i.to}o=j(this.el);u=y(t,o);if(!u){console.error("[bkkr-router] the path does not match any route");return[2,false]}return[2,this.safeWriteNavState(document.body,u,e,t,a,0,r)]}))}))};t.prototype.safeWriteNavState=function(t,e,r,n,i,a,o){if(a===void 0){a=0}return __awaiter(this,void 0,void 0,(function(){var u,s,f;return __generator(this,(function(c){switch(c.label){case 0:return[4,this.lock()];case 1:u=c.sent();s=false;c.label=2;case 2:c.trys.push([2,4,,5]);return[4,this.writeNavState(t,e,r,n,i,a,o)];case 3:s=c.sent();return[3,5];case 4:f=c.sent();console.error(f);return[3,5];case 5:u();return[2,s]}}))}))};t.prototype.lock=function(){return __awaiter(this,void 0,void 0,(function(){var t,e;return __generator(this,(function(r){switch(r.label){case 0:t=this.waitPromise;this.waitPromise=new Promise((function(t){return e=t}));if(!(t!==undefined))return[3,2];return[4,t];case 1:r.sent();r.label=2;case 2:return[2,e]}}))}))};t.prototype.runGuards=function(t,e){if(t===void 0){t=this.getPath()}if(e===void 0){e=E(this.previousPath)}return __awaiter(this,void 0,void 0,(function(){var r,n,i,a,o,u,s,f,c;return __generator(this,(function(l){switch(l.label){case 0:if(!t||!e){return[2,true]}r=j(this.el);n=y(t,r);i=y(e,r);a=n&&n[n.length-1].beforeEnter;o=i&&i[i.length-1].beforeLeave;if(!o)return[3,2];return[4,o()];case 1:s=l.sent();return[3,3];case 2:s=true;l.label=3;case 3:u=s;if(u===false||typeof u==="object"){return[2,u]}if(!a)return[3,5];return[4,a()];case 4:c=l.sent();return[3,6];case 5:c=true;l.label=6;case 6:f=c;if(f===false||typeof f==="object"){return[2,f]}return[2,true]}}))}))};t.prototype.writeNavState=function(t,e,r,n,i,a,o){if(a===void 0){a=0}return __awaiter(this,void 0,void 0,(function(){var u,s;return __generator(this,(function(c){switch(c.label){case 0:if(this.busy){console.warn("[bkkr-router] router is busy, transition was cancelled");return[2,false]}this.busy=true;u=this.routeChangeEvent(n,i);if(u){this.bkkrRouteWillChange.emit(u)}return[4,f(t,e,r,a,false,o)];case 1:s=c.sent();this.busy=false;if(s){console.debug("[bkkr-router] route changed",n)}if(u){this.bkkrRouteDidChange.emit(u)}return[2,s]}}))}))};t.prototype.setPath=function(t,e,r){this.state++;S(window.history,this.root,this.useHash,t,e,this.state,r)};t.prototype.getPath=function(){return L(window.location,this.root,this.useHash)};t.prototype.routeChangeEvent=function(t,e){var r=this.previousPath;var n=R(t);this.previousPath=n;if(n===r){return null}var i=e?R(e):null;return{from:r,redirectedFrom:i,to:n}};Object.defineProperty(t.prototype,"el",{get:function(){return n(this)},enumerable:false,configurable:true});return t}())}}}));