var __extends=this&&this.__extends||function(){var e=function(t,r){e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)if(Object.prototype.hasOwnProperty.call(t,r))e[r]=t[r]};return e(t,r)};return function(t,r){if(typeof r!=="function"&&r!==null)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");e(t,r);function n(){this.constructor=t}t.prototype=r===null?Object.create(r):(n.prototype=r.prototype,new n)}}();var __awaiter=this&&this.__awaiter||function(e,t,r,n){function a(e){return e instanceof r?e:new r((function(t){t(e)}))}return new(r||(r=Promise))((function(r,i){function s(e){try{o(n.next(e))}catch(e){i(e)}}function l(e){try{o(n["throw"](e))}catch(e){i(e)}}function o(e){e.done?r(e.value):a(e.value).then(s,l)}o((n=n.apply(e,t||[])).next())}))};var __generator=this&&this.__generator||function(e,t){var r={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},n,a,i,s;return s={next:l(0),throw:l(1),return:l(2)},typeof Symbol==="function"&&(s[Symbol.iterator]=function(){return this}),s;function l(e){return function(t){return o([e,t])}}function o(s){if(n)throw new TypeError("Generator is already executing.");while(r)try{if(n=1,a&&(i=s[0]&2?a["return"]:s[0]?a["throw"]||((i=a["return"])&&i.call(a),0):a.next)&&!(i=i.call(a,s[1])).done)return i;if(a=0,i)s=[s[0]&2,i.value];switch(s[0]){case 0:case 1:i=s;break;case 4:r.label++;return{value:s[1],done:false};case 5:r.label++;a=s[1];s=[0];continue;case 7:s=r.ops.pop();r.trys.pop();continue;default:if(!(i=r.trys,i=i.length>0&&i[i.length-1])&&(s[0]===6||s[0]===2)){r=0;continue}if(s[0]===3&&(!i||s[1]>i[0]&&s[1]<i[3])){r.label=s[1];break}if(s[0]===6&&r.label<i[1]){r.label=i[1];i=s;break}if(i&&r.label<i[2]){r.label=i[2];r.ops.push(s);break}if(i[2])r.ops.pop();r.trys.pop();continue}s=t.call(e,r)}catch(e){s=[6,e];a=0}finally{n=i=0}if(s[0]&5)throw s[1];return{value:s[0]?s[1]:void 0,done:true}}};var __spreadArray=this&&this.__spreadArray||function(e,t){for(var r=0,n=t.length,a=e.length;r<n;r++,a++)e[a]=t[r];return e};System.register([],(function(e,t){"use strict";return{execute:function(){var r=this;var n=e("N","bkkr");var a;var i;var s;var l=false;var o=false;var f=false;var $=false;var u=false;var c=e("w",typeof window!=="undefined"?window:{});var v=e("C",c.CSS);var d=e("d",c.document||{head:{}});var h=e("p",{$flags$:0,$resourcesUrl$:"",jmp:function(e){return e()},raf:function(e){return requestAnimationFrame(e)},ael:function(e,t,r,n){return e.addEventListener(t,r,n)},rel:function(e,t,r,n){return e.removeEventListener(t,r,n)},ce:function(e,t){return new CustomEvent(e,t)}});var m=function(){return(d.head.attachShadow+"").indexOf("[native")>-1}();var p=e("a",(function(e){return Promise.resolve(e)}));var g=function(){try{new CSSStyleSheet;return typeof(new CSSStyleSheet).replace==="function"}catch(e){}return false}();var y=function(e,t,r,n){if(r){r.map((function(r){var n=r[0],a=r[1],i=r[2];var s=w(e,n);var l=b(t,i);var o=N(n);h.ael(s,a,l,o);(t.$rmListeners$=t.$rmListeners$||[]).push((function(){return h.rel(s,a,l,o)}))}))}};var b=function(e,t){return function(r){try{{if(e.$flags$&256){e.$lazyInstance$[t](r)}else{(e.$queuedListeners$=e.$queuedListeners$||[]).push([t,r])}}}catch(e){ze(e)}}};var w=function(e,t){if(t&4)return d;if(t&8)return c;if(t&16)return d.body;return e};var N=function(e){return(e&2)!==0};var R="{visibility:hidden}.hydrated{visibility:inherit}";var S="http://www.w3.org/1999/xlink";var k=function(e,t){if(t===void 0){t=""}{return function(){return}}};var _=function(e,t){{return function(){return}}};var x=new WeakMap;var C=function(e,t,r){var n=He.get(e);if(g&&r){n=n||new CSSStyleSheet;n.replace(t)}else{n=t}He.set(e,n)};var T=function(e,t,r,n){var a=j(t);var i=He.get(a);e=e.nodeType===11?e:d;if(i){if(typeof i==="string"){e=e.head||e;var s=x.get(e);var l=void 0;if(!s){x.set(e,s=new Set)}if(!s.has(a)){{if(h.$cssShim$){l=h.$cssShim$.createHostStyle(n,a,i,!!(t.$flags$&10));var o=l["s-sc"];if(o){a=o;s=null}}else{l=d.createElement("style");l.innerHTML=i}e.insertBefore(l,e.querySelector("link"))}if(s){s.add(a)}}}else if(!e.adoptedStyleSheets.includes(i)){e.adoptedStyleSheets=__spreadArray(__spreadArray([],e.adoptedStyleSheets),[i])}}return a};var L=function(e){var t=e.$cmpMeta$;var r=e.$hostElement$;var n=t.$flags$;var a=k("attachStyles",t.$tagName$);var i=T(m&&r.shadowRoot?r.shadowRoot:r.getRootNode(),t,e.$modeName$,r);if(n&10){r["s-sc"]=i;r.classList.add(i+"-h");if(n&2){r.classList.add(i+"-s")}}a()};var j=function(e,t){return"sc-"+e.$tagName$};var E={};var A="http://www.w3.org/2000/svg";var P="http://www.w3.org/1999/xhtml";var O=function(e){return e!=null};var I=function(e){e=typeof e;return e==="object"||e==="function"};var M=e("h",(function(e,t){var r=[];for(var n=2;n<arguments.length;n++){r[n-2]=arguments[n]}var a=null;var i=null;var s=null;var l=false;var o=false;var f=[];var $=function(t){for(var r=0;r<t.length;r++){a=t[r];if(Array.isArray(a)){$(a)}else if(a!=null&&typeof a!=="boolean"){if(l=typeof e!=="function"&&!I(a)){a=String(a)}if(l&&o){f[f.length-1].$text$+=a}else{f.push(l?B(null,a):a)}o=l}}};$(r);if(t){if(t.key){i=t.key}if(t.name){s=t.name}{var u=t.className||t.class;if(u){t.class=typeof u!=="object"?u:Object.keys(u).filter((function(e){return u[e]})).join(" ")}}}if(typeof e==="function"){return e(t===null?{}:t,f,q)}var c=B(e,null);c.$attrs$=t;if(f.length>0){c.$children$=f}{c.$key$=i}{c.$name$=s}return c}));var B=function(e,t){var r={$flags$:0,$tag$:e,$text$:t,$elm$:null,$children$:null};{r.$attrs$=null}{r.$key$=null}{r.$name$=null}return r};var z=e("H",{});var U=function(e){return e&&e.$tag$===z};var q={forEach:function(e,t){return e.map(H).forEach(t)},map:function(e,t){return e.map(H).map(t).map(V)}};var H=function(e){return{vattrs:e.$attrs$,vchildren:e.$children$,vkey:e.$key$,vname:e.$name$,vtag:e.$tag$,vtext:e.$text$}};var V=function(e){if(typeof e.vtag==="function"){var t=Object.assign({},e.vattrs);if(e.vkey){t.key=e.vkey}if(e.vname){t.name=e.vname}return M.apply(void 0,__spreadArray([e.vtag,t],e.vchildren||[]))}var r=B(e.vtag,e.vtext);r.$attrs$=e.vattrs;r.$children$=e.vchildren;r.$key$=e.vkey;r.$name$=e.vname;return r};var W=function(e,t,r,n,a,i){if(r!==n){var s=Be(e,t);var l=t.toLowerCase();if(t==="class"){var o=e.classList;var f=D(r);var $=D(n);o.remove.apply(o,f.filter((function(e){return e&&!$.includes(e)})));o.add.apply(o,$.filter((function(e){return e&&!f.includes(e)})))}else if(t==="style"){{for(var u in r){if(!n||n[u]==null){if(u.includes("-")){e.style.removeProperty(u)}else{e.style[u]=""}}}}for(var u in n){if(!r||n[u]!==r[u]){if(u.includes("-")){e.style.setProperty(u,n[u])}else{e.style[u]=n[u]}}}}else if(t==="key");else if(t==="ref"){if(n){n(e)}}else if(!s&&t[0]==="o"&&t[1]==="n"){if(t[2]==="-"){t=t.slice(3)}else if(Be(c,l)){t=l.slice(2)}else{t=l[2]+t.slice(3)}if(r){h.rel(e,t,r,false)}if(n){h.ael(e,t,n,false)}}else{var v=I(n);if((s||v&&n!==null)&&!a){try{if(!e.tagName.includes("-")){var d=n==null?"":n;if(t==="list"){s=false}else if(r==null||e[t]!=d){e[t]=d}}else{e[t]=n}}catch(e){}}var m=false;{if(l!==(l=l.replace(/^xlink\:?/,""))){t=l;m=true}}if(n==null||n===false){if(n!==false||e.getAttribute(t)===""){if(m){e.removeAttributeNS(S,t)}else{e.removeAttribute(t)}}}else if((!s||i&4||a)&&!v){n=n===true?"":n;if(m){e.setAttributeNS(S,t,n)}else{e.setAttribute(t,n)}}}}};var F=/\s/;var D=function(e){return!e?[]:e.split(F)};var G=function(e,t,r,n){var a=t.$elm$.nodeType===11&&t.$elm$.host?t.$elm$.host:t.$elm$;var i=e&&e.$attrs$||E;var s=t.$attrs$||E;{for(n in i){if(!(n in s)){W(a,n,i[n],undefined,r,t.$flags$)}}}for(n in s){W(a,n,i[n],s[n],r,t.$flags$)}};var J=function(e,t,r,n){var o=t.$children$[r];var u=0;var c;var v;var h;if(!l){f=true;if(o.$tag$==="slot"){if(a){n.classList.add(a+"-s")}o.$flags$|=o.$children$?2:1}}if(o.$text$!==null){c=o.$elm$=d.createTextNode(o.$text$)}else if(o.$flags$&1){c=o.$elm$=d.createTextNode("")}else{if(!$){$=o.$tag$==="svg"}c=o.$elm$=d.createElementNS($?A:P,o.$flags$&2?"slot-fb":o.$tag$);if($&&o.$tag$==="foreignObject"){$=false}{G(null,o,$)}if(O(a)&&c["s-si"]!==a){c.classList.add(c["s-si"]=a)}if(o.$children$){for(u=0;u<o.$children$.length;++u){v=J(e,o,u,c);if(v){c.appendChild(v)}}}{if(o.$tag$==="svg"){$=false}else if(c.tagName==="foreignObject"){$=true}}}{c["s-hn"]=s;if(o.$flags$&(2|1)){c["s-sr"]=true;c["s-cr"]=i;c["s-sn"]=o.$name$||"";h=e&&e.$children$&&e.$children$[r];if(h&&h.$tag$===o.$tag$&&e.$elm$){K(e.$elm$,false)}}}return c};var K=function(e,t){h.$flags$|=1;var r=e.childNodes;for(var n=r.length-1;n>=0;n--){var a=r[n];if(a["s-hn"]!==s&&a["s-ol"]){te(a).insertBefore(a,ee(a));a["s-ol"].remove();a["s-ol"]=undefined;f=true}if(t){K(a,t)}}h.$flags$&=~1};var Q=function(e,t,r,n,a,i){var l=e["s-cr"]&&e["s-cr"].parentNode||e;var o;if(l.shadowRoot&&l.tagName===s){l=l.shadowRoot}for(;a<=i;++a){if(n[a]){o=J(null,r,a,e);if(o){n[a].$elm$=o;l.insertBefore(o,ee(t))}}}};var X=function(e,t,r,n,a){for(;t<=r;++t){if(n=e[t]){a=n.$elm$;le(n);{o=true;if(a["s-ol"]){a["s-ol"].remove()}else{K(a,true)}}a.remove()}}};var Y=function(e,t,r,n){var a=0;var i=0;var s=0;var l=0;var o=t.length-1;var f=t[0];var $=t[o];var u=n.length-1;var c=n[0];var v=n[u];var d;var h;while(a<=o&&i<=u){if(f==null){f=t[++a]}else if($==null){$=t[--o]}else if(c==null){c=n[++i]}else if(v==null){v=n[--u]}else if(Z(f,c)){re(f,c);f=t[++a];c=n[++i]}else if(Z($,v)){re($,v);$=t[--o];v=n[--u]}else if(Z(f,v)){if(f.$tag$==="slot"||v.$tag$==="slot"){K(f.$elm$.parentNode,false)}re(f,v);e.insertBefore(f.$elm$,$.$elm$.nextSibling);f=t[++a];v=n[--u]}else if(Z($,c)){if(f.$tag$==="slot"||v.$tag$==="slot"){K($.$elm$.parentNode,false)}re($,c);e.insertBefore($.$elm$,f.$elm$);$=t[--o];c=n[++i]}else{s=-1;{for(l=a;l<=o;++l){if(t[l]&&t[l].$key$!==null&&t[l].$key$===c.$key$){s=l;break}}}if(s>=0){h=t[s];if(h.$tag$!==c.$tag$){d=J(t&&t[i],r,s,e)}else{re(h,c);t[s]=undefined;d=h.$elm$}c=n[++i]}else{d=J(t&&t[i],r,i,e);c=n[++i]}if(d){{te(f.$elm$).insertBefore(d,ee(f.$elm$))}}}}if(a>o){Q(e,n[u+1]==null?null:n[u+1].$elm$,r,n,i,u)}else if(i>u){X(t,a,o)}};var Z=function(e,t){if(e.$tag$===t.$tag$){if(e.$tag$==="slot"){return e.$name$===t.$name$}{return e.$key$===t.$key$}}return false};var ee=function(e){return e&&e["s-ol"]||e};var te=function(e){return(e["s-ol"]?e["s-ol"]:e).parentNode};var re=function(e,t){var r=t.$elm$=e.$elm$;var n=e.$children$;var a=t.$children$;var i=t.$tag$;var s=t.$text$;var l;if(s===null){{$=i==="svg"?true:i==="foreignObject"?false:$}{if(i==="slot");else{G(e,t,$)}}if(n!==null&&a!==null){Y(r,n,t,a)}else if(a!==null){if(e.$text$!==null){r.textContent=""}Q(r,null,t,a,0,a.length-1)}else if(n!==null){X(n,0,n.length-1)}if($&&i==="svg"){$=false}}else if(l=r["s-cr"]){l.parentNode.textContent=s}else if(e.$text$!==s){r.data=s}};var ne=function(e){var t=e.childNodes;var r;var n;var a;var i;var s;var l;for(n=0,a=t.length;n<a;n++){r=t[n];if(r.nodeType===1){if(r["s-sr"]){s=r["s-sn"];r.hidden=false;for(i=0;i<a;i++){l=t[i].nodeType;if(t[i]["s-hn"]!==r["s-hn"]||s!==""){if(l===1&&s===t[i].getAttribute("slot")){r.hidden=true;break}}else{if(l===1||l===3&&t[i].textContent.trim()!==""){r.hidden=true;break}}}}ne(r)}}};var ae=[];var ie=function(e){var t;var r;var n;var a;var i;var s;var l=0;var f=e.childNodes;var $=f.length;for(;l<$;l++){t=f[l];if(t["s-sr"]&&(r=t["s-cr"])&&r.parentNode){n=r.parentNode.childNodes;a=t["s-sn"];for(s=n.length-1;s>=0;s--){r=n[s];if(!r["s-cn"]&&!r["s-nr"]&&r["s-hn"]!==t["s-hn"]){if(se(r,a)){i=ae.find((function(e){return e.$nodeToRelocate$===r}));o=true;r["s-sn"]=r["s-sn"]||a;if(i){i.$slotRefNode$=t}else{ae.push({$slotRefNode$:t,$nodeToRelocate$:r})}if(r["s-sr"]){ae.map((function(e){if(se(e.$nodeToRelocate$,r["s-sn"])){i=ae.find((function(e){return e.$nodeToRelocate$===r}));if(i&&!e.$slotRefNode$){e.$slotRefNode$=i.$slotRefNode$}}}))}}else if(!ae.some((function(e){return e.$nodeToRelocate$===r}))){ae.push({$nodeToRelocate$:r})}}}}if(t.nodeType===1){ie(t)}}};var se=function(e,t){if(e.nodeType===1){if(e.getAttribute("slot")===null&&t===""){return true}if(e.getAttribute("slot")===t){return true}return false}if(e["s-sn"]===t){return true}return t===""};var le=function(e){{e.$attrs$&&e.$attrs$.ref&&e.$attrs$.ref(null);e.$children$&&e.$children$.map(le)}};var oe=function(e,t){var r=e.$hostElement$;var n=e.$cmpMeta$;var $=e.$vnode$||B(null,null);var u=U(t)?t:M(null,null,t);s=r.tagName;if(n.$attrsToReflect$){u.$attrs$=u.$attrs$||{};n.$attrsToReflect$.map((function(e){var t=e[0],n=e[1];return u.$attrs$[n]=r[t]}))}u.$tag$=null;u.$flags$|=4;e.$vnode$=u;u.$elm$=$.$elm$=r.shadowRoot||r;{a=r["s-sc"]}{i=r["s-cr"];l=m&&(n.$flags$&1)!==0;o=false}re($,u);{h.$flags$|=1;if(f){ie(u.$elm$);var c=void 0;var v=void 0;var p=void 0;var g=void 0;var y=void 0;var b=void 0;var w=0;for(;w<ae.length;w++){c=ae[w];v=c.$nodeToRelocate$;if(!v["s-ol"]){p=d.createTextNode("");p["s-nr"]=v;v.parentNode.insertBefore(v["s-ol"]=p,v)}}for(w=0;w<ae.length;w++){c=ae[w];v=c.$nodeToRelocate$;if(c.$slotRefNode$){g=c.$slotRefNode$.parentNode;y=c.$slotRefNode$.nextSibling;p=v["s-ol"];while(p=p.previousSibling){b=p["s-nr"];if(b&&b["s-sn"]===v["s-sn"]&&g===b.parentNode){b=b.nextSibling;if(!b||!b["s-nr"]){y=b;break}}}if(!y&&g!==v.parentNode||v.nextSibling!==y){if(v!==y){if(!v["s-hn"]&&v["s-ol"]){v["s-hn"]=v["s-ol"].parentNode.nodeName}g.insertBefore(v,y)}}}else{if(v.nodeType===1){v.hidden=true}}}}if(o){ne(u.$elm$)}h.$flags$&=~1;ae.length=0}};var fe=e("g",(function(e){return Oe(e).$hostElement$}));var $e=e("c",(function(e,t,r){var n=fe(e);return{emit:function(e){return ue(n,t,{bubbles:!!(r&4),composed:!!(r&2),cancelable:!!(r&1),detail:e})}}}));var ue=function(e,t,r){var n=h.ce(t,r);e.dispatchEvent(n);return n};var ce=function(e,t){if(t&&!e.$onRenderResolve$&&t["s-p"]){t["s-p"].push(new Promise((function(t){return e.$onRenderResolve$=t})))}};var ve=function(e,t){{e.$flags$|=16}if(e.$flags$&4){e.$flags$|=512;return}ce(e,e.$ancestorComponent$);var r=function(){return de(e,t)};return Qe(r)};var de=function(e,t){var r=k("scheduleUpdate",e.$cmpMeta$.$tagName$);var n=e.$lazyInstance$;var a;if(t){{e.$flags$|=256;if(e.$queuedListeners$){e.$queuedListeners$.map((function(e){var t=e[0],r=e[1];return be(n,t,r)}));e.$queuedListeners$=null}}{a=be(n,"componentWillLoad")}}{a=we(a,(function(){return be(n,"componentWillRender")}))}r();return we(a,(function(){return he(e,n,t)}))};var he=function(e,t,n){return __awaiter(r,void 0,void 0,(function(){var r,a,i,s,l,o;return __generator(this,(function(f){r=e.$hostElement$;a=k("update",e.$cmpMeta$.$tagName$);i=r["s-rc"];if(n){L(e)}s=k("render",e.$cmpMeta$.$tagName$);{me(e,t)}if(h.$cssShim$){h.$cssShim$.updateHost(r)}if(i){i.map((function(e){return e()}));r["s-rc"]=undefined}s();a();{l=r["s-p"];o=function(){return pe(e)};if(l.length===0){o()}else{Promise.all(l).then(o);e.$flags$|=4;l.length=0}}return[2]}))}))};var me=function(e,t,r){try{t=t.render&&t.render();{e.$flags$&=~16}{e.$flags$|=2}{{{oe(e,t)}}}}catch(t){ze(t,e.$hostElement$)}return null};var pe=function(e){var t=e.$cmpMeta$.$tagName$;var r=e.$hostElement$;var n=k("postUpdate",t);var a=e.$lazyInstance$;var i=e.$ancestorComponent$;if(!(e.$flags$&64)){e.$flags$|=64;{Ne(r)}{be(a,"componentDidLoad")}n();{e.$onReadyResolve$(r);if(!i){ye()}}}else{{be(a,"componentDidUpdate")}n()}{e.$onInstanceResolve$(r)}{if(e.$onRenderResolve$){e.$onRenderResolve$();e.$onRenderResolve$=undefined}if(e.$flags$&512){Je((function(){return ve(e,false)}))}e.$flags$&=~(4|512)}};var ge=e("f",(function(e){{var t=Oe(e);var r=t.$hostElement$.isConnected;if(r&&(t.$flags$&(2|16))===2){ve(t,false)}return r}}));var ye=function(e){{Ne(d.documentElement)}Je((function(){return ue(c,"appload",{detail:{namespace:n}})}))};var be=function(e,t,r){if(e&&e[t]){try{return e[t](r)}catch(e){ze(e)}}return undefined};var we=function(e,t){return e&&e.then?e.then(t):t()};var Ne=function(e){return e.classList.add("hydrated")};var Re=function(e,t){if(e!=null&&!I(e)){if(t&4){return e==="false"?false:e===""||!!e}if(t&2){return parseFloat(e)}if(t&1){return String(e)}return e}return e};var Se=function(e,t){return Oe(e).$instanceValues$.get(t)};var ke=function(e,t,r,n){var a=Oe(e);var i=a.$hostElement$;var s=a.$instanceValues$.get(t);var l=a.$flags$;var o=a.$lazyInstance$;r=Re(r,n.$members$[t][0]);if((!(l&8)||s===undefined)&&r!==s){a.$instanceValues$.set(t,r);if(o){if(n.$watchers$&&l&128){var f=n.$watchers$[t];if(f){f.map((function(e){try{o[e](r,s,t)}catch(e){ze(e,i)}}))}}if((l&(2|16))===2){ve(a,false)}}}};var _e=function(e,t,r){if(t.$members$){if(e.watchers){t.$watchers$=e.watchers}var n=Object.entries(t.$members$);var a=e.prototype;n.map((function(e){var n=e[0],i=e[1][0];if(i&31||r&2&&i&32){Object.defineProperty(a,n,{get:function(){return Se(this,n)},set:function(e){ke(this,n,e,t)},configurable:true,enumerable:true})}else if(r&1&&i&64){Object.defineProperty(a,n,{value:function(){var e=[];for(var t=0;t<arguments.length;t++){e[t]=arguments[t]}var r=Oe(this);return r.$onInstancePromise$.then((function(){var t;return(t=r.$lazyInstance$)[n].apply(t,e)}))}})}}));if(r&1){var i=new Map;a.attributeChangedCallback=function(e,t,r){var n=this;h.jmp((function(){var t=i.get(e);n[t]=r===null&&typeof n[t]==="boolean"?false:r}))};e.observedAttributes=n.filter((function(e){var t=e[0],r=e[1];return r[0]&15})).map((function(e){var r=e[0],n=e[1];var a=n[1]||r;i.set(a,r);if(n[0]&512){t.$attrsToReflect$.push([r,a])}return a}))}}return e};var xe=function(e,n,a,i,s){return __awaiter(r,void 0,void 0,(function(){var e,r,i,l,o,f,$;return __generator(this,(function(u){switch(u.label){case 0:if(!((n.$flags$&32)===0))return[3,5];n.$flags$|=32;s=qe(a);if(!s.then)return[3,2];e=_();return[4,s];case 1:s=u.sent();e();u.label=2;case 2:if(!s.isProxied){{a.$watchers$=s.watchers}_e(s,a,2);s.isProxied=true}r=k("createInstance",a.$tagName$);{n.$flags$|=8}try{new s(n)}catch(e){ze(e)}{n.$flags$&=~8}{n.$flags$|=128}r();Ce(n.$lazyInstance$);if(!s.style)return[3,5];i=s.style;l=j(a);if(!!He.has(l))return[3,5];o=k("registerStyles",a.$tagName$);if(!(a.$flags$&8))return[3,4];return[4,t.import("./p-cd733818.system.js").then((function(e){return e.scopeCss(i,l,false)}))];case 3:i=u.sent();u.label=4;case 4:C(l,i,!!(a.$flags$&1));o();u.label=5;case 5:f=n.$ancestorComponent$;$=function(){return ve(n,true)};if(f&&f["s-rc"]){f["s-rc"].push($)}else{$()}return[2]}}))}))};var Ce=function(e){{be(e,"connectedCallback")}};var Te=function(e){if((h.$flags$&1)===0){var t=Oe(e);var r=t.$cmpMeta$;var n=k("connectedCallback",r.$tagName$);if(!(t.$flags$&1)){t.$flags$|=1;{if(r.$flags$&(4|8)){Le(e)}}{var a=e;while(a=a.parentNode||a.host){if(a["s-p"]){ce(t,t.$ancestorComponent$=a);break}}}if(r.$members$){Object.entries(r.$members$).map((function(t){var r=t[0],n=t[1][0];if(n&31&&e.hasOwnProperty(r)){var a=e[r];delete e[r];e[r]=a}}))}{Je((function(){return xe(e,t,r)}))}}else{y(e,t,r.$listeners$);Ce(t.$lazyInstance$)}n()}};var Le=function(e){var t=e["s-cr"]=d.createComment("");t["s-cn"]=true;e.insertBefore(t,e.firstChild)};var je=function(e){if((h.$flags$&1)===0){var t=Oe(e);var r=t.$lazyInstance$;{if(t.$rmListeners$){t.$rmListeners$.map((function(e){return e()}));t.$rmListeners$=undefined}}if(h.$cssShim$){h.$cssShim$.removeHost(e)}{be(r,"disconnectedCallback")}}};var Ee=e("b",(function(e,t){if(t===void 0){t={}}var r=k();var n=[];var a=t.exclude||[];var i=c.customElements;var s=d.head;var l=s.querySelector("meta[charset]");var o=d.createElement("style");var f=[];var $;var u=true;Object.assign(h,t);h.$resourcesUrl$=new URL(t.resourcesUrl||"./",d.baseURI).href;e.map((function(e){return e[1].map((function(t){var r={$flags$:t[0],$tagName$:t[1],$members$:t[2],$listeners$:t[3]};{r.$members$=t[2]}{r.$listeners$=t[3]}{r.$attrsToReflect$=[]}{r.$watchers$={}}if(!m&&r.$flags$&1){r.$flags$|=8}var s=r.$tagName$;var l=function(e){__extends(t,e);function t(t){var n=e.call(this,t)||this;t=n;Me(t,r);if(r.$flags$&1){if(m){{t.attachShadow({mode:"open",delegatesFocus:!!(r.$flags$&16)})}}else if(!("shadowRoot"in t)){t.shadowRoot=t}}return n}t.prototype.connectedCallback=function(){var e=this;if($){clearTimeout($);$=null}if(u){f.push(this)}else{h.jmp((function(){return Te(e)}))}};t.prototype.disconnectedCallback=function(){var e=this;h.jmp((function(){return je(e)}))};t.prototype.componentOnReady=function(){return Oe(this).$onReadyPromise$};return t}(HTMLElement);r.$lazyBundleId$=e[0];if(!a.includes(s)&&!i.get(s)){n.push(s);i.define(s,_e(l,r,1))}}))}));{o.innerHTML=n+R;o.setAttribute("data-styles","");s.insertBefore(o,l?l.nextSibling:s.firstChild)}u=false;if(f.length){f.map((function(e){return e.connectedCallback()}))}else{{h.jmp((function(){return $=setTimeout(ye,30)}))}}r()}));var Ae=e("j",(function(e){var t=new URL(e,h.$resourcesUrl$);return t.origin!==c.location.origin?t.href:t.pathname}));var Pe=new WeakMap;var Oe=function(e){return Pe.get(e)};var Ie=e("r",(function(e,t){return Pe.set(t.$lazyInstance$=e,t)}));var Me=function(e,t){var r={$flags$:0,$hostElement$:e,$cmpMeta$:t,$instanceValues$:new Map};{r.$onInstancePromise$=new Promise((function(e){return r.$onInstanceResolve$=e}))}{r.$onReadyPromise$=new Promise((function(e){return r.$onReadyResolve$=e}));e["s-p"]=[];e["s-rc"]=[]}y(e,r,t.$listeners$);return Pe.set(e,r)};var Be=function(e,t){return t in e};var ze=function(e,t){return(0,console.error)(e,t)};var Ue=new Map;var qe=function(e,r,n){var a=e.$tagName$.replace(/-/g,"_");var i=e.$lazyBundleId$;var s=Ue.get(i);if(s){return s[a]}return t.import("./"+i+".entry.js"+"").then((function(e){{Ue.set(i,e)}return e[a]}),ze)};var He=new Map;var Ve=[];var We=[];var Fe=function(e,t){return function(r){e.push(r);if(!u){u=true;if(t&&h.$flags$&4){Je(Ge)}else{h.raf(Ge)}}}};var De=function(e){for(var t=0;t<e.length;t++){try{e[t](performance.now())}catch(e){ze(e)}}e.length=0};var Ge=function(){De(Ve);{De(We);if(u=Ve.length>0){h.raf(Ge)}}};var Je=function(e){return p().then(e)};var Ke=e("i",Fe(Ve,false));var Qe=e("e",Fe(We,true))}}}));