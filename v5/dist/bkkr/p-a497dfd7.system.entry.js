var __awaiter=this&&this.__awaiter||function(t,e,r,n){function i(t){return t instanceof r?t:new r((function(e){e(t)}))}return new(r||(r=Promise))((function(r,a){function o(t){try{s(n.next(t))}catch(t){a(t)}}function u(t){try{s(n["throw"](t))}catch(t){a(t)}}function s(t){t.done?r(t.value):i(t.value).then(o,u)}s((n=n.apply(t,e||[])).next())}))};var __generator=this&&this.__generator||function(t,e){var r={label:0,sent:function(){if(a[0]&1)throw a[1];return a[1]},trys:[],ops:[]},n,i,a,o;return o={next:u(0),throw:u(1),return:u(2)},typeof Symbol==="function"&&(o[Symbol.iterator]=function(){return this}),o;function u(t){return function(e){return s([t,e])}}function s(o){if(n)throw new TypeError("Generator is already executing.");while(r)try{if(n=1,i&&(a=o[0]&2?i["return"]:o[0]?i["throw"]||((a=i["return"])&&a.call(i),0):i.next)&&!(a=a.call(i,o[1])).done)return a;if(i=0,a)o=[o[0]&2,a.value];switch(o[0]){case 0:case 1:a=o;break;case 4:r.label++;return{value:o[1],done:false};case 5:r.label++;i=o[1];o=[0];continue;case 7:o=r.ops.pop();r.trys.pop();continue;default:if(!(a=r.trys,a=a.length>0&&a[a.length-1])&&(o[0]===6||o[0]===2)){r=0;continue}if(o[0]===3&&(!a||o[1]>a[0]&&o[1]<a[3])){r.label=o[1];break}if(o[0]===6&&r.label<a[1]){r.label=a[1];a=o;break}if(a&&r.label<a[2]){r.label=a[2];r.ops.push(o);break}if(a[2])r.ops.pop();r.trys.pop();continue}o=e.call(t,r)}catch(t){o=[6,t];i=0}finally{n=a=0}if(o[0]&5)throw o[1];return{value:o[0]?o[1]:void 0,done:true}}};var __spreadArray=this&&this.__spreadArray||function(t,e){for(var r=0,n=e.length,i=t.length;r<n;r++,i++)t[i]=e[r];return t};
/*!
 * (C) BKKR Framework https://bkkr-team.github.io/bkkr-docs/ - MIT License
 */System.register(["./p-bd1be62f.system.js","./p-b60c7a38.system.js"],(function(t){"use strict";var e,r,n,i,a;return{setters:[function(t){e=t.r;r=t.c;n=t.g},function(t){i=t.c;a=t.m}],execute:function(){var o=this;var u="root";var s="forward";var f="back";var c=function(t){var e=t.filter((function(t){return t.length>0})).join("/");return"/"+e};var l=function(t,e,r){var n=c(t);if(e){n="#"+n}if(r!==undefined){n+="?"+r}return n};var h=function(t,e,r,n,i,a,o){var u=l(__spreadArray(__spreadArray([],g(e).segments),n),r,o);if(i===s){t.pushState(a,"",u)}else{t.replaceState(a,"",u)}};var v=function(t){var e=[];for(var r=0,n=t;r<n.length;r++){var i=n[r];for(var a=0,o=i.path;a<o.length;a++){var u=o[a];if(u[0]===":"){var s=i.params&&i.params[u.slice(1)];if(!s){return null}e.push(s)}else if(u!==""){e.push(u)}}}return e};var d=function(t,e){if(t.length>e.length){return null}if(t.length<=1&&t[0]===""){return e}for(var r=0;r<t.length;r++){if(t[r]!==e[r]){return null}}if(e.length===t.length){return[""]}return e.slice(t.length)};var p=function(t,e,r){var n=g(e).segments;var i=r?t.hash.slice(1):t.pathname;var a=g(i).segments;return d(n,a)};var g=function(t){var e=[""];var r;if(t!=null){var n=t.indexOf("?");if(n>-1){r=t.substr(n+1);t=t.substr(0,n)}e=t.split("/").map((function(t){return t.trim()})).filter((function(t){return t.length>0}));if(e.length===0){e=[""]}}return{segments:e,queryString:r}};var b=function(t){console.group("[bkkr-core] ROUTES["+t.length+"]");var e=function(t){var e=[];t.forEach((function(t){return e.push.apply(e,t.path)}));var r=t.map((function(t){return t.id}));console.debug("%c "+c(e),"font-weight: bold; padding-left: 20px","=>\t","("+r.join(", ")+")")};for(var r=0,n=t;r<n.length;r++){var i=n[r];e(i)}console.groupEnd()};var m=function(t){console.group("[bkkr-core] REDIRECTS["+t.length+"]");for(var e=0,r=t;e<r.length;e++){var n=r[e];if(n.to){console.debug("FROM: ","$c "+c(n.from),"font-weight: bold"," TO: ","$c "+c(n.to.segments),"font-weight: bold")}}console.groupEnd()};var w=function(t,e,r,n,a,s){if(a===void 0){a=false}return __awaiter(o,void 0,void 0,(function(){var o,f,c,l;return __generator(this,(function(h){switch(h.label){case 0:h.trys.push([0,6,,7]);o=R(t);if(n>=e.length||!o){return[2,a]}return[4,new Promise((function(t){return i(o,t)}))];case 1:h.sent();f=e[n];return[4,o.setRouteId(f.id,f.params,r,s)];case 2:c=h.sent();if(c.changed){r=u;a=true}return[4,w(c.element,e,r,n+1,a,s)];case 3:a=h.sent();if(!c.markVisible)return[3,5];return[4,c.markVisible()];case 4:h.sent();h.label=5;case 5:return[2,a];case 6:l=h.sent();console.error(l);return[2,false];case 7:return[2]}}))}))};var y=function(t){return __awaiter(o,void 0,void 0,(function(){var e,r,n,i;return __generator(this,(function(a){switch(a.label){case 0:e=[];n=t;a.label=1;case 1:if(!true)return[3,5];r=R(n);if(!r)return[3,3];return[4,r.getRouteId()];case 2:i=a.sent();if(i){n=i.element;i.element=undefined;e.push(i)}else{return[3,5]}return[3,4];case 3:return[3,5];case 4:return[3,1];case 5:return[2,{ids:e,outlet:r}]}}))}))};var _=function(){if(R(document.body)){return Promise.resolve()}return new Promise((function(t){window.addEventListener("bkkrNavWillLoad",t,{once:true})}))};var k=":not([no-router]) bkkr-nav, :not([no-router]) bkkr-tabs, :not([no-router]) bkkr-router-outlet";var R=function(t){if(!t){return undefined}if(t.matches(k)){return t}var e=t.querySelector(k);return e!==null&&e!==void 0?e:undefined};var S=function(t,e){var r=e.from,n=e.to;if(n===undefined){return false}if(r.length>t.length){return false}for(var i=0;i<r.length;i++){var a=r[i];if(a==="*"){return true}if(a!==t[i]){return false}}return r.length===t.length};var P=function(t,e){return e.find((function(e){return S(t,e)}))};var E=function(t,e){var r=Math.min(t.length,e.length);var n=0;for(;n<r;n++){if(t[n].toLowerCase()!==e[n].id){break}}return n};var C=function(t,e){var r=new D(t);var n=false;var i;for(var a=0;a<e.length;a++){var o=e[a].path;if(o[0]===""){n=true}else{for(var u=0,s=o;u<s.length;u++){var f=s[u];var c=r.next();if(f[0]===":"){if(c===""){return null}i=i||[];var l=i[a]||(i[a]={});l[f.slice(1)]=c}else if(c!==f){return null}}n=false}}var h=n?n===(r.next()===""):true;if(!h){return null}if(i){return e.map((function(t,e){return{id:t.id,path:t.path,params:L(t.params,i[e]),beforeEnter:t.beforeEnter,beforeLeave:t.beforeLeave}}))}return e};var L=function(t,e){return t||e?Object.assign(Object.assign({},t),e):undefined};var N=function(t,e){var r=null;var n=0;var i=t.map((function(t){return t.id}));for(var a=0,o=e;a<o.length;a++){var u=o[a];var s=E(i,u);if(s>n){r=u;n=s}}if(r){return r.map((function(e,r){return{id:e.id,path:e.path,params:L(e.params,t[r]&&t[r].params)}}))}return null};var j=function(t,e){var r=null;var n=0;for(var i=0,a=e;i<a.length;i++){var o=a[i];var u=C(t,o);if(u!==null){var s=x(u);if(s>n){n=s;r=u}}}return r};var x=function(t){var e=1;var r=1;for(var n=0,i=t;n<i.length;n++){var a=i[n];for(var o=0,u=a.path;o<u.length;o++){var s=u[o];if(s[0]===":"){e+=Math.pow(1,r)}else if(s!==""){e+=Math.pow(2,r)}r++}}return e};var D=function(){function t(t){this.path=t.slice()}t.prototype.next=function(){if(this.path.length>0){return this.path.shift()}return""};return t}();var O=function(t,e){if(e in t){return t[e]}if(t.hasAttribute(e)){return t.getAttribute(e)}return null};var W=function(t){return Array.from(t.children).filter((function(t){return t.tagName==="BKKR-ROUTE-REDIRECT"})).map((function(t){var e=O(t,"to");return{from:g(O(t,"from")).segments,to:e==null?undefined:g(e)}}))};var A=function(t){return q(T(t))};var T=function(t){return Array.from(t.children).filter((function(t){return t.tagName==="BKKR-ROUTE"&&t.component})).map((function(t){var e=O(t,"component");return{path:g(O(t,"url")).segments,id:e.toLowerCase(),params:t.componentProps,beforeLeave:t.beforeLeave,beforeEnter:t.beforeEnter,children:T(t)}}))};var q=function(t){var e=[];for(var r=0,n=t;r<n.length;r++){var i=n[r];G([],e,i)}return e};var G=function(t,e,r){t=t.slice();t.push({id:r.id,path:r.path,params:r.params,beforeLeave:r.beforeLeave,beforeEnter:r.beforeEnter});if(r.children.length===0){e.push(t);return}for(var n=0,i=r.children;n<i.length;n++){var a=i[n];G(t,e,a)}};var U=t("bkkr_router",function(){function t(t){e(this,t);this.bkkrRouteWillChange=r(this,"bkkrRouteWillChange",7);this.bkkrRouteDidChange=r(this,"bkkrRouteDidChange",7);this.previousPath=null;this.busy=false;this.state=0;this.lastState=0;this.root="/";this.useHash=true}t.prototype.componentWillLoad=function(){return __awaiter(this,void 0,void 0,(function(){var t,e,r;return __generator(this,(function(n){switch(n.label){case 0:return[4,_()];case 1:n.sent();return[4,this.runGuards(this.getPath())];case 2:t=n.sent();if(!(t!==true))return[3,5];if(!(typeof t==="object"))return[3,4];e=t.redirect;r=g(e);this.setPath(r.segments,u,r.queryString);return[4,this.writeNavStateRoot(r.segments,u)];case 3:n.sent();n.label=4;case 4:return[3,7];case 5:return[4,this.onRoutesChanged()];case 6:n.sent();n.label=7;case 7:return[2]}}))}))};t.prototype.componentDidLoad=function(){window.addEventListener("bkkrRouteRedirectChanged",a(this.onRedirectChanged.bind(this),10));window.addEventListener("bkkrRouteDataChanged",a(this.onRoutesChanged.bind(this),100))};t.prototype.onPopState=function(){return __awaiter(this,void 0,void 0,(function(){var t,e,r;return __generator(this,(function(n){switch(n.label){case 0:t=this.historyDirection();e=this.getPath();return[4,this.runGuards(e)];case 1:r=n.sent();if(r!==true){if(typeof r==="object"){e=g(r.redirect).segments}else{return[2,false]}}return[2,this.writeNavStateRoot(e,t)]}}))}))};t.prototype.canTransition=function(){return __awaiter(this,void 0,void 0,(function(){var t;return __generator(this,(function(e){switch(e.label){case 0:return[4,this.runGuards()];case 1:t=e.sent();if(t!==true){if(typeof t==="object"){return[2,t.redirect]}else{return[2,false]}}return[2,true]}}))}))};t.prototype.push=function(t,e,r){if(e===void 0){e="forward"}return __awaiter(this,void 0,void 0,(function(){var n,i;return __generator(this,(function(a){switch(a.label){case 0:if(t.startsWith(".")){t=new URL(t,window.location.href).pathname}n=g(t);return[4,this.runGuards(n.segments)];case 1:i=a.sent();if(i!==true){if(typeof i==="object"){n=g(i.redirect)}else{return[2,false]}}this.setPath(n.segments,e,n.queryString);return[2,this.writeNavStateRoot(n.segments,e,r)]}}))}))};t.prototype.back=function(){window.history.back();return Promise.resolve(this.waitPromise)};t.prototype.printDebug=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){b(A(this.el));m(W(this.el));return[2]}))}))};t.prototype.navChanged=function(t){return __awaiter(this,void 0,void 0,(function(){var e,r,n,i,a,o;return __generator(this,(function(s){switch(s.label){case 0:if(this.busy){console.warn("[bkkr-router] router is busy, navChanged was cancelled");return[2,false]}return[4,y(window.document.body)];case 1:e=s.sent(),r=e.ids,n=e.outlet;i=A(this.el);a=N(r,i);if(!a){console.warn("[bkkr-router] no matching URL for ",r.map((function(t){return t.id})));return[2,false]}o=v(a);if(!o){console.warn("[bkkr-router] router could not match path because some required param is missing");return[2,false]}this.setPath(o,t);return[4,this.safeWriteNavState(n,a,u,o,null,r.length)];case 2:s.sent();return[2,true]}}))}))};t.prototype.onRedirectChanged=function(){var t=this.getPath();if(t&&P(t,W(this.el))){this.writeNavStateRoot(t,u)}};t.prototype.onRoutesChanged=function(){return this.writeNavStateRoot(this.getPath(),u)};t.prototype.historyDirection=function(){var t;var e=window;if(e.history.state===null){this.state++;e.history.replaceState(this.state,e.document.title,(t=e.document.location)===null||t===void 0?void 0:t.href)}var r=e.history.state;var n=this.lastState;this.lastState=r;if(r>n||r>=n&&n>0){return s}if(r<n){return f}return u};t.prototype.writeNavStateRoot=function(t,e,r){return __awaiter(this,void 0,void 0,(function(){var n,i,a,o,u,s,f,c;return __generator(this,(function(l){if(!t){console.error("[bkkr-router] URL is not part of the routing set");return[2,false]}n=W(this.el);i=P(t,n);a=null;if(i){o=i.to,u=o.segments,s=o.queryString;this.setPath(u,e,s);a=i.from;t=u}f=A(this.el);c=j(t,f);if(!c){console.error("[bkkr-router] the path does not match any route");return[2,false]}return[2,this.safeWriteNavState(document.body,c,e,t,a,0,r)]}))}))};t.prototype.safeWriteNavState=function(t,e,r,n,i,a,o){if(a===void 0){a=0}return __awaiter(this,void 0,void 0,(function(){var u,s,f;return __generator(this,(function(c){switch(c.label){case 0:return[4,this.lock()];case 1:u=c.sent();s=false;c.label=2;case 2:c.trys.push([2,4,,5]);return[4,this.writeNavState(t,e,r,n,i,a,o)];case 3:s=c.sent();return[3,5];case 4:f=c.sent();console.error(f);return[3,5];case 5:u();return[2,s]}}))}))};t.prototype.lock=function(){return __awaiter(this,void 0,void 0,(function(){var t,e;return __generator(this,(function(r){switch(r.label){case 0:t=this.waitPromise;this.waitPromise=new Promise((function(t){return e=t}));if(!(t!==undefined))return[3,2];return[4,t];case 1:r.sent();r.label=2;case 2:return[2,e]}}))}))};t.prototype.runGuards=function(t,e){if(t===void 0){t=this.getPath()}return __awaiter(this,void 0,void 0,(function(){var r,n,i,a,o,u,s;return __generator(this,(function(f){switch(f.label){case 0:if(e===undefined){e=g(this.previousPath).segments}if(!t||!e){return[2,true]}r=A(this.el);n=j(e,r);i=n&&n[n.length-1].beforeLeave;if(!i)return[3,2];return[4,i()];case 1:o=f.sent();return[3,3];case 2:o=true;f.label=3;case 3:a=o;if(a===false||typeof a==="object"){return[2,a]}u=j(t,r);s=u&&u[u.length-1].beforeEnter;return[2,s?s():true]}}))}))};t.prototype.writeNavState=function(t,e,r,n,i,a,o){if(a===void 0){a=0}return __awaiter(this,void 0,void 0,(function(){var u,s;return __generator(this,(function(f){switch(f.label){case 0:if(this.busy){console.warn("[bkkr-router] router is busy, transition was cancelled");return[2,false]}this.busy=true;u=this.routeChangeEvent(n,i);if(u){this.bkkrRouteWillChange.emit(u)}return[4,w(t,e,r,a,false,o)];case 1:s=f.sent();this.busy=false;if(u){this.bkkrRouteDidChange.emit(u)}return[2,s]}}))}))};t.prototype.setPath=function(t,e,r){this.state++;h(window.history,this.root,this.useHash,t,e,this.state,r)};t.prototype.getPath=function(){return p(window.location,this.root,this.useHash)};t.prototype.routeChangeEvent=function(t,e){var r=this.previousPath;var n=c(t);this.previousPath=n;if(n===r){return null}var i=e?c(e):null;return{from:r,redirectedFrom:i,to:n}};Object.defineProperty(t.prototype,"el",{get:function(){return n(this)},enumerable:false,configurable:true});return t}())}}}));