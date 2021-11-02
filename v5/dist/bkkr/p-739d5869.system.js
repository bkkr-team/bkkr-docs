var __extends=this&&this.__extends||function(){var e=function(t,r){e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)if(Object.prototype.hasOwnProperty.call(t,r))e[r]=t[r]};return e(t,r)};return function(t,r){if(typeof r!=="function"&&r!==null)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");e(t,r);function n(){this.constructor=t}t.prototype=r===null?Object.create(r):(n.prototype=r.prototype,new n)}}();var __awaiter=this&&this.__awaiter||function(e,t,r,n){function a(e){return e instanceof r?e:new r((function(t){t(e)}))}return new(r||(r=Promise))((function(r,i){function l(e){try{s(n.next(e))}catch(e){i(e)}}function $(e){try{s(n["throw"](e))}catch(e){i(e)}}function s(e){e.done?r(e.value):a(e.value).then(l,$)}s((n=n.apply(e,t||[])).next())}))};var __generator=this&&this.__generator||function(e,t){var r={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},n,a,i,l;return l={next:$(0),throw:$(1),return:$(2)},typeof Symbol==="function"&&(l[Symbol.iterator]=function(){return this}),l;function $(e){return function(t){return s([e,t])}}function s(l){if(n)throw new TypeError("Generator is already executing.");while(r)try{if(n=1,a&&(i=l[0]&2?a["return"]:l[0]?a["throw"]||((i=a["return"])&&i.call(a),0):a.next)&&!(i=i.call(a,l[1])).done)return i;if(a=0,i)l=[l[0]&2,i.value];switch(l[0]){case 0:case 1:i=l;break;case 4:r.label++;return{value:l[1],done:false};case 5:r.label++;a=l[1];l=[0];continue;case 7:l=r.ops.pop();r.trys.pop();continue;default:if(!(i=r.trys,i=i.length>0&&i[i.length-1])&&(l[0]===6||l[0]===2)){r=0;continue}if(l[0]===3&&(!i||l[1]>i[0]&&l[1]<i[3])){r.label=l[1];break}if(l[0]===6&&r.label<i[1]){r.label=i[1];i=l;break}if(i&&r.label<i[2]){r.label=i[2];r.ops.push(l);break}if(i[2])r.ops.pop();r.trys.pop();continue}l=t.call(e,r)}catch(e){l=[6,e];a=0}finally{n=i=0}if(l[0]&5)throw l[1];return{value:l[0]?l[1]:void 0,done:true}}};var __spreadArray=this&&this.__spreadArray||function(e,t){for(var r=0,n=t.length,a=e.length;r<n;r++,a++)e[a]=t[r];return e};
/*!
 * (C) BKKR Framework https://bkkr-team.github.io/bkkr-docs/ - MIT License
 */System.register([],(function(e,t){"use strict";return{execute:function(){var r=this;var n=e("N","bkkr");var a;var i;var l;var $=false;var s=false;var o=false;var f=false;var u=false;var c=e("w",typeof window!=="undefined"?window:{});var v=e("d",c.document||{head:{}});var d={$flags$:0,$resourcesUrl$:"",jmp:function(e){return e()},raf:function(e){return requestAnimationFrame(e)},ael:function(e,t,r,n){return e.addEventListener(t,r,n)},rel:function(e,t,r,n){return e.removeEventListener(t,r,n)},ce:function(e,t){return new CustomEvent(e,t)}};var h=e("s",(function(e){Object.assign(d,e)}));var m=true;var p=e("p",(function(e){return Promise.resolve(e)}));var g=function(){try{new CSSStyleSheet;return typeof(new CSSStyleSheet).replace==="function"}catch(e){}return false}();var y=function(e,t,r,n){if(r){r.map((function(r){var n=r[0],a=r[1],i=r[2];var l=w(e,n);var $=b(t,i);var s=N(n);d.ael(l,a,$,s);(t.$rmListeners$=t.$rmListeners$||[]).push((function(){return d.rel(l,a,$,s)}))}))}};var b=function(e,t){return function(r){try{{if(e.$flags$&256){e.$lazyInstance$[t](r)}else{(e.$queuedListeners$=e.$queuedListeners$||[]).push([t,r])}}}catch(e){Qe(e)}}};var w=function(e,t){if(t&4)return v;if(t&8)return c;if(t&16)return v.body;return e};var N=function(e){return(e&2)!==0};var R="r";var x="o";var k="s";var S="t";var _="s-id";var T="sty-id";var L="c-id";var C="{visibility:hidden}.hydrated{visibility:inherit}";var A="http://www.w3.org/1999/xlink";var E=function(e,t){if(t===void 0){t=""}{return function(){return}}};var I=function(e,t){{return function(){return}}};var j=new WeakMap;var P=function(e,t,r){var n=Ze.get(e);if(g&&r){n=n||new CSSStyleSheet;n.replace(t)}else{n=t}Ze.set(e,n)};var M=function(e,t,r,n){var a=B(t);var i=Ze.get(a);e=e.nodeType===11?e:v;if(i){if(typeof i==="string"){e=e.head||e;var l=j.get(e);var $=void 0;if(!l){j.set(e,l=new Set)}if(!l.has(a)){if(e.host&&($=e.querySelector("["+T+'="'+a+'"]'))){$.innerHTML=i}else{{$=v.createElement("style");$.innerHTML=i}e.insertBefore($,e.querySelector("link"))}if(l){l.add(a)}}}else if(!e.adoptedStyleSheets.includes(i)){e.adoptedStyleSheets=__spreadArray(__spreadArray([],e.adoptedStyleSheets),[i])}}return a};var O=function(e){var t=e.$cmpMeta$;var r=e.$hostElement$;var n=t.$flags$;var a=E("attachStyles",t.$tagName$);var i=M(r.shadowRoot?r.shadowRoot:r.getRootNode(),t);if(n&10){r["s-sc"]=i;r.classList.add(i+"-h");if(n&2){r.classList.add(i+"-s")}}a()};var B=function(e,t){return"sc-"+e.$tagName$};var z=function(e){return e.replace(/\/\*!@([^\/]+)\*\/[^\{]+\{/g,"$1{")};var q={};var U="http://www.w3.org/2000/svg";var V="http://www.w3.org/1999/xhtml";var H=function(e){return e!=null};var W=function(e){e=typeof e;return e==="object"||e==="function"};var F=e("h",(function(e,t){var r=[];for(var n=2;n<arguments.length;n++){r[n-2]=arguments[n]}var a=null;var i=null;var l=null;var $=false;var s=false;var o=[];var f=function(t){for(var r=0;r<t.length;r++){a=t[r];if(Array.isArray(a)){f(a)}else if(a!=null&&typeof a!=="boolean"){if($=typeof e!=="function"&&!W(a)){a=String(a)}if($&&s){o[o.length-1].$text$+=a}else{o.push($?D(null,a):a)}s=$}}};f(r);if(t){if(t.key){i=t.key}if(t.name){l=t.name}{var u=t.className||t.class;if(u){t.class=typeof u!=="object"?u:Object.keys(u).filter((function(e){return u[e]})).join(" ")}}}if(typeof e==="function"){return e(t===null?{}:t,o,K)}var c=D(e,null);c.$attrs$=t;if(o.length>0){c.$children$=o}{c.$key$=i}{c.$name$=l}return c}));var D=function(e,t){var r={$flags$:0,$tag$:e,$text$:t,$elm$:null,$children$:null};{r.$attrs$=null}{r.$key$=null}{r.$name$=null}return r};var G=e("H",{});var J=function(e){return e&&e.$tag$===G};var K={forEach:function(e,t){return e.map(Q).forEach(t)},map:function(e,t){return e.map(Q).map(t).map(X)}};var Q=function(e){return{vattrs:e.$attrs$,vchildren:e.$children$,vkey:e.$key$,vname:e.$name$,vtag:e.$tag$,vtext:e.$text$}};var X=function(e){if(typeof e.vtag==="function"){var t=Object.assign({},e.vattrs);if(e.vkey){t.key=e.vkey}if(e.vname){t.name=e.vname}return F.apply(void 0,__spreadArray([e.vtag,t],e.vchildren||[]))}var r=D(e.vtag,e.vtext);r.$attrs$=e.vattrs;r.$children$=e.vchildren;r.$key$=e.vkey;r.$name$=e.vname;return r};var Y=function(e,t,r,n,a,i){if(r!==n){var l=Ke(e,t);var $=t.toLowerCase();if(t==="class"){var s=e.classList;var o=ee(r);var f=ee(n);s.remove.apply(s,o.filter((function(e){return e&&!f.includes(e)})));s.add.apply(s,f.filter((function(e){return e&&!o.includes(e)})))}else if(t==="style"){{for(var u in r){if(!n||n[u]==null){if(u.includes("-")){e.style.removeProperty(u)}else{e.style[u]=""}}}}for(var u in n){if(!r||n[u]!==r[u]){if(u.includes("-")){e.style.setProperty(u,n[u])}else{e.style[u]=n[u]}}}}else if(t==="key");else if(t==="ref"){if(n){n(e)}}else if(!l&&t[0]==="o"&&t[1]==="n"){if(t[2]==="-"){t=t.slice(3)}else if(Ke(c,$)){t=$.slice(2)}else{t=$[2]+t.slice(3)}if(r){d.rel(e,t,r,false)}if(n){d.ael(e,t,n,false)}}else{var v=W(n);if((l||v&&n!==null)&&!a){try{if(!e.tagName.includes("-")){var h=n==null?"":n;if(t==="list"){l=false}else if(r==null||e[t]!=h){e[t]=h}}else{e[t]=n}}catch(e){}}var m=false;{if($!==($=$.replace(/^xlink\:?/,""))){t=$;m=true}}if(n==null||n===false){if(n!==false||e.getAttribute(t)===""){if(m){e.removeAttributeNS(A,t)}else{e.removeAttribute(t)}}}else if((!l||i&4||a)&&!v){n=n===true?"":n;if(m){e.setAttributeNS(A,t,n)}else{e.setAttribute(t,n)}}}}};var Z=/\s/;var ee=function(e){return!e?[]:e.split(Z)};var te=function(e,t,r,n){var a=t.$elm$.nodeType===11&&t.$elm$.host?t.$elm$.host:t.$elm$;var i=e&&e.$attrs$||q;var l=t.$attrs$||q;{for(n in i){if(!(n in l)){Y(a,n,i[n],undefined,r,t.$flags$)}}}for(n in l){Y(a,n,i[n],l[n],r,t.$flags$)}};var re=function(e,t,r,n){var s=t.$children$[r];var u=0;var c;var d;var h;if(!$){o=true;if(s.$tag$==="slot"){if(a){n.classList.add(a+"-s")}s.$flags$|=s.$children$?2:1}}if(s.$text$!==null){c=s.$elm$=v.createTextNode(s.$text$)}else if(s.$flags$&1){c=s.$elm$=v.createTextNode("")}else{if(!f){f=s.$tag$==="svg"}c=s.$elm$=v.createElementNS(f?U:V,s.$flags$&2?"slot-fb":s.$tag$);if(f&&s.$tag$==="foreignObject"){f=false}{te(null,s,f)}if(H(a)&&c["s-si"]!==a){c.classList.add(c["s-si"]=a)}if(s.$children$){for(u=0;u<s.$children$.length;++u){d=re(e,s,u,c);if(d){c.appendChild(d)}}}{if(s.$tag$==="svg"){f=false}else if(c.tagName==="foreignObject"){f=true}}}{c["s-hn"]=l;if(s.$flags$&(2|1)){c["s-sr"]=true;c["s-cr"]=i;c["s-sn"]=s.$name$||"";h=e&&e.$children$&&e.$children$[r];if(h&&h.$tag$===s.$tag$&&e.$elm$){ne(e.$elm$,false)}}}return c};var ne=function(e,t){d.$flags$|=1;var r=e.childNodes;for(var n=r.length-1;n>=0;n--){var a=r[n];if(a["s-hn"]!==l&&a["s-ol"]){oe(a).insertBefore(a,se(a));a["s-ol"].remove();a["s-ol"]=undefined;o=true}if(t){ne(a,t)}}d.$flags$&=~1};var ae=function(e,t,r,n,a,i){var $=e["s-cr"]&&e["s-cr"].parentNode||e;var s;if($.shadowRoot&&$.tagName===l){$=$.shadowRoot}for(;a<=i;++a){if(n[a]){s=re(null,r,a,e);if(s){n[a].$elm$=s;$.insertBefore(s,se(t))}}}};var ie=function(e,t,r,n,a){for(;t<=r;++t){if(n=e[t]){a=n.$elm$;he(n);{s=true;if(a["s-ol"]){a["s-ol"].remove()}else{ne(a,true)}}a.remove()}}};var le=function(e,t,r,n){var a=0;var i=0;var l=0;var $=0;var s=t.length-1;var o=t[0];var f=t[s];var u=n.length-1;var c=n[0];var v=n[u];var d;var h;while(a<=s&&i<=u){if(o==null){o=t[++a]}else if(f==null){f=t[--s]}else if(c==null){c=n[++i]}else if(v==null){v=n[--u]}else if($e(o,c)){fe(o,c);o=t[++a];c=n[++i]}else if($e(f,v)){fe(f,v);f=t[--s];v=n[--u]}else if($e(o,v)){if(o.$tag$==="slot"||v.$tag$==="slot"){ne(o.$elm$.parentNode,false)}fe(o,v);e.insertBefore(o.$elm$,f.$elm$.nextSibling);o=t[++a];v=n[--u]}else if($e(f,c)){if(o.$tag$==="slot"||v.$tag$==="slot"){ne(f.$elm$.parentNode,false)}fe(f,c);e.insertBefore(f.$elm$,o.$elm$);f=t[--s];c=n[++i]}else{l=-1;{for($=a;$<=s;++$){if(t[$]&&t[$].$key$!==null&&t[$].$key$===c.$key$){l=$;break}}}if(l>=0){h=t[l];if(h.$tag$!==c.$tag$){d=re(t&&t[i],r,l,e)}else{fe(h,c);t[l]=undefined;d=h.$elm$}c=n[++i]}else{d=re(t&&t[i],r,i,e);c=n[++i]}if(d){{oe(o.$elm$).insertBefore(d,se(o.$elm$))}}}}if(a>s){ae(e,n[u+1]==null?null:n[u+1].$elm$,r,n,i,u)}else if(i>u){ie(t,a,s)}};var $e=function(e,t){if(e.$tag$===t.$tag$){if(e.$tag$==="slot"){return e.$name$===t.$name$}{return e.$key$===t.$key$}}return false};var se=function(e){return e&&e["s-ol"]||e};var oe=function(e){return(e["s-ol"]?e["s-ol"]:e).parentNode};var fe=function(e,t){var r=t.$elm$=e.$elm$;var n=e.$children$;var a=t.$children$;var i=t.$tag$;var l=t.$text$;var $;if(l===null){{f=i==="svg"?true:i==="foreignObject"?false:f}{if(i==="slot");else{te(e,t,f)}}if(n!==null&&a!==null){le(r,n,t,a)}else if(a!==null){if(e.$text$!==null){r.textContent=""}ae(r,null,t,a,0,a.length-1)}else if(n!==null){ie(n,0,n.length-1)}if(f&&i==="svg"){f=false}}else if($=r["s-cr"]){$.parentNode.textContent=l}else if(e.$text$!==l){r.data=l}};var ue=function(e){var t=e.childNodes;var r;var n;var a;var i;var l;var $;for(n=0,a=t.length;n<a;n++){r=t[n];if(r.nodeType===1){if(r["s-sr"]){l=r["s-sn"];r.hidden=false;for(i=0;i<a;i++){$=t[i].nodeType;if(t[i]["s-hn"]!==r["s-hn"]||l!==""){if($===1&&l===t[i].getAttribute("slot")){r.hidden=true;break}}else{if($===1||$===3&&t[i].textContent.trim()!==""){r.hidden=true;break}}}}ue(r)}}};var ce=[];var ve=function(e){var t;var r;var n;var a;var i;var l;var $=0;var o=e.childNodes;var f=o.length;for(;$<f;$++){t=o[$];if(t["s-sr"]&&(r=t["s-cr"])&&r.parentNode){n=r.parentNode.childNodes;a=t["s-sn"];for(l=n.length-1;l>=0;l--){r=n[l];if(!r["s-cn"]&&!r["s-nr"]&&r["s-hn"]!==t["s-hn"]){if(de(r,a)){i=ce.find((function(e){return e.$nodeToRelocate$===r}));s=true;r["s-sn"]=r["s-sn"]||a;if(i){i.$slotRefNode$=t}else{ce.push({$slotRefNode$:t,$nodeToRelocate$:r})}if(r["s-sr"]){ce.map((function(e){if(de(e.$nodeToRelocate$,r["s-sn"])){i=ce.find((function(e){return e.$nodeToRelocate$===r}));if(i&&!e.$slotRefNode$){e.$slotRefNode$=i.$slotRefNode$}}}))}}else if(!ce.some((function(e){return e.$nodeToRelocate$===r}))){ce.push({$nodeToRelocate$:r})}}}}if(t.nodeType===1){ve(t)}}};var de=function(e,t){if(e.nodeType===1){if(e.getAttribute("slot")===null&&t===""){return true}if(e.getAttribute("slot")===t){return true}return false}if(e["s-sn"]===t){return true}return t===""};var he=function(e){{e.$attrs$&&e.$attrs$.ref&&e.$attrs$.ref(null);e.$children$&&e.$children$.map(he)}};var me=function(e,t){var r=e.$hostElement$;var n=e.$cmpMeta$;var f=e.$vnode$||D(null,null);var u=J(t)?t:F(null,null,t);l=r.tagName;if(n.$attrsToReflect$){u.$attrs$=u.$attrs$||{};n.$attrsToReflect$.map((function(e){var t=e[0],n=e[1];return u.$attrs$[n]=r[t]}))}u.$tag$=null;u.$flags$|=4;e.$vnode$=u;u.$elm$=f.$elm$=r.shadowRoot||r;{a=r["s-sc"]}{i=r["s-cr"];$=(n.$flags$&1)!==0;s=false}fe(f,u);{d.$flags$|=1;if(o){ve(u.$elm$);var c=void 0;var h=void 0;var m=void 0;var p=void 0;var g=void 0;var y=void 0;var b=0;for(;b<ce.length;b++){c=ce[b];h=c.$nodeToRelocate$;if(!h["s-ol"]){m=v.createTextNode("");m["s-nr"]=h;h.parentNode.insertBefore(h["s-ol"]=m,h)}}for(b=0;b<ce.length;b++){c=ce[b];h=c.$nodeToRelocate$;if(c.$slotRefNode$){p=c.$slotRefNode$.parentNode;g=c.$slotRefNode$.nextSibling;m=h["s-ol"];while(m=m.previousSibling){y=m["s-nr"];if(y&&y["s-sn"]===h["s-sn"]&&p===y.parentNode){y=y.nextSibling;if(!y||!y["s-nr"]){g=y;break}}}if(!g&&p!==h.parentNode||h.nextSibling!==g){if(h!==g){if(!h["s-hn"]&&h["s-ol"]){h["s-hn"]=h["s-ol"].parentNode.nodeName}p.insertBefore(h,g)}}}else{if(h.nodeType===1){h.hidden=true}}}}if(s){ue(u.$elm$)}d.$flags$&=~1;ce.length=0}};var pe=e("g",(function(e){return De(e).$hostElement$}));var ge=e("c",(function(e,t,r){var n=pe(e);return{emit:function(e){return ye(n,t,{bubbles:!!(r&4),composed:!!(r&2),cancelable:!!(r&1),detail:e})}}}));var ye=function(e,t,r){var n=d.ce(t,r);e.dispatchEvent(n);return n};var be=function(e,t){if(t&&!e.$onRenderResolve$&&t["s-p"]){t["s-p"].push(new Promise((function(t){return e.$onRenderResolve$=t})))}};var we=function(e,t){{e.$flags$|=16}if(e.$flags$&4){e.$flags$|=512;return}be(e,e.$ancestorComponent$);var r=function(){return Ne(e,t)};return $t(r)};var Ne=function(e,t){var r=E("scheduleUpdate",e.$cmpMeta$.$tagName$);var n=e.$lazyInstance$;var a;if(t){{e.$flags$|=256;if(e.$queuedListeners$){e.$queuedListeners$.map((function(e){var t=e[0],r=e[1];return Te(n,t,r)}));e.$queuedListeners$=null}}{a=Te(n,"componentWillLoad")}}{a=Le(a,(function(){return Te(n,"componentWillRender")}))}r();return Le(a,(function(){return Re(e,n,t)}))};var Re=function(e,t,n){return __awaiter(r,void 0,void 0,(function(){var r,a,i,l,$,s;return __generator(this,(function(o){r=e.$hostElement$;a=E("update",e.$cmpMeta$.$tagName$);i=r["s-rc"];if(n){O(e)}l=E("render",e.$cmpMeta$.$tagName$);{xe(e,t)}if(i){i.map((function(e){return e()}));r["s-rc"]=undefined}l();a();{$=r["s-p"];s=function(){return ke(e)};if($.length===0){s()}else{Promise.all($).then(s);e.$flags$|=4;$.length=0}}return[2]}))}))};var xe=function(e,t,r){try{t=t.render&&t.render();{e.$flags$&=~16}{e.$flags$|=2}{{{me(e,t)}}}}catch(t){Qe(t,e.$hostElement$)}return null};var ke=function(e){var t=e.$cmpMeta$.$tagName$;var r=e.$hostElement$;var n=E("postUpdate",t);var a=e.$lazyInstance$;var i=e.$ancestorComponent$;if(!(e.$flags$&64)){e.$flags$|=64;{Ce(r)}{Te(a,"componentDidLoad")}n();{e.$onReadyResolve$(r);if(!i){_e()}}}else{{Te(a,"componentDidUpdate")}n()}{e.$onInstanceResolve$(r)}{if(e.$onRenderResolve$){e.$onRenderResolve$();e.$onRenderResolve$=undefined}if(e.$flags$&512){it((function(){return we(e,false)}))}e.$flags$&=~(4|512)}};var Se=e("f",(function(e){{var t=De(e);var r=t.$hostElement$.isConnected;if(r&&(t.$flags$&(2|16))===2){we(t,false)}return r}}));var _e=function(e){{Ce(v.documentElement)}it((function(){return ye(c,"appload",{detail:{namespace:n}})}))};var Te=function(e,t,r){if(e&&e[t]){try{return e[t](r)}catch(e){Qe(e)}}return undefined};var Le=function(e,t){return e&&e.then?e.then(t):t()};var Ce=function(e){return e.classList.add("hydrated")};var Ae=function(e,t,r,n){var a=E("hydrateClient",t);var i=e.shadowRoot;var l=[];var $=[];var s=i?[]:null;var o=n.$vnode$=D(t,null);if(!d.$orgLocNodes$){Ie(v.body,d.$orgLocNodes$=new Map)}e[_]=r;e.removeAttribute(_);Ee(o,l,$,s,e,e,r);l.map((function(e){var r=e.$hostId$+"."+e.$nodeId$;var n=d.$orgLocNodes$.get(r);var a=e.$elm$;if(n&&m&&n["s-en"]===""){n.parentNode.insertBefore(a,n.nextSibling)}if(!i){a["s-hn"]=t;if(n){a["s-ol"]=n;a["s-ol"]["s-nr"]=a}}d.$orgLocNodes$.delete(r)}));if(i){s.map((function(e){if(e){i.appendChild(e)}}))}a()};var Ee=function(e,t,r,n,a,i,l){var $;var s;var o;var f;if(i.nodeType===1){$=i.getAttribute(L);if($){s=$.split(".");if(s[0]===l||s[0]==="0"){o={$flags$:0,$hostId$:s[0],$nodeId$:s[1],$depth$:s[2],$index$:s[3],$tag$:i.tagName.toLowerCase(),$elm$:i,$attrs$:null,$children$:null,$key$:null,$name$:null,$text$:null};t.push(o);i.removeAttribute(L);if(!e.$children$){e.$children$=[]}e.$children$[o.$index$]=o;e=o;if(n&&o.$depth$==="0"){n[o.$index$]=o.$elm$}}}for(f=i.childNodes.length-1;f>=0;f--){Ee(e,t,r,n,a,i.childNodes[f],l)}if(i.shadowRoot){for(f=i.shadowRoot.childNodes.length-1;f>=0;f--){Ee(e,t,r,n,a,i.shadowRoot.childNodes[f],l)}}}else if(i.nodeType===8){s=i.nodeValue.split(".");if(s[1]===l||s[1]==="0"){$=s[0];o={$flags$:0,$hostId$:s[1],$nodeId$:s[2],$depth$:s[3],$index$:s[4],$elm$:i,$attrs$:null,$children$:null,$key$:null,$name$:null,$tag$:null,$text$:null};if($===S){o.$elm$=i.nextSibling;if(o.$elm$&&o.$elm$.nodeType===3){o.$text$=o.$elm$.textContent;t.push(o);i.remove();if(!e.$children$){e.$children$=[]}e.$children$[o.$index$]=o;if(n&&o.$depth$==="0"){n[o.$index$]=o.$elm$}}}else if(o.$hostId$===l){if($===k){o.$tag$="slot";if(s[5]){i["s-sn"]=o.$name$=s[5]}else{i["s-sn"]=""}i["s-sr"]=true;if(n){o.$elm$=v.createElement(o.$tag$);if(o.$name$){o.$elm$.setAttribute("name",o.$name$)}i.parentNode.insertBefore(o.$elm$,i);i.remove();if(o.$depth$==="0"){n[o.$index$]=o.$elm$}}r.push(o);if(!e.$children$){e.$children$=[]}e.$children$[o.$index$]=o}else if($===R){if(n){i.remove()}else{a["s-cr"]=i;i["s-cn"]=true}}}}}else if(e&&e.$tag$==="style"){var u=D(null,i.textContent);u.$elm$=i;u.$index$="0";e.$children$=[u]}};var Ie=function(e,t){if(e.nodeType===1){var r=0;for(;r<e.childNodes.length;r++){Ie(e.childNodes[r],t)}if(e.shadowRoot){for(r=0;r<e.shadowRoot.childNodes.length;r++){Ie(e.shadowRoot.childNodes[r],t)}}}else if(e.nodeType===8){var n=e.nodeValue.split(".");if(n[0]===x){t.set(n[1]+"."+n[2],e);e.nodeValue="";e["s-en"]=n[3]}}};var je=function(e,t){if(e!=null&&!W(e)){if(t&4){return e==="false"?false:e===""||!!e}if(t&2){return parseFloat(e)}if(t&1){return String(e)}return e}return e};var Pe=function(e,t){return De(e).$instanceValues$.get(t)};var Me=function(e,t,r,n){var a=De(e);var i=a.$hostElement$;var l=a.$instanceValues$.get(t);var $=a.$flags$;var s=a.$lazyInstance$;r=je(r,n.$members$[t][0]);if((!($&8)||l===undefined)&&r!==l){a.$instanceValues$.set(t,r);if(s){if(n.$watchers$&&$&128){var o=n.$watchers$[t];if(o){o.map((function(e){try{s[e](r,l,t)}catch(e){Qe(e,i)}}))}}if(($&(2|16))===2){we(a,false)}}}};var Oe=function(e,t,r){if(t.$members$){if(e.watchers){t.$watchers$=e.watchers}var n=Object.entries(t.$members$);var a=e.prototype;n.map((function(e){var n=e[0],i=e[1][0];if(i&31||r&2&&i&32){Object.defineProperty(a,n,{get:function(){return Pe(this,n)},set:function(e){Me(this,n,e,t)},configurable:true,enumerable:true})}else if(r&1&&i&64){Object.defineProperty(a,n,{value:function(){var e=[];for(var t=0;t<arguments.length;t++){e[t]=arguments[t]}var r=De(this);return r.$onInstancePromise$.then((function(){var t;return(t=r.$lazyInstance$)[n].apply(t,e)}))}})}}));if(r&1){var i=new Map;a.attributeChangedCallback=function(e,t,r){var n=this;d.jmp((function(){var t=i.get(e);if(n.hasOwnProperty(t)){r=n[t];delete n[t]}else if(a.hasOwnProperty(t)&&typeof n[t]==="number"&&n[t]==r){return}n[t]=r===null&&typeof n[t]==="boolean"?false:r}))};e.observedAttributes=n.filter((function(e){var t=e[0],r=e[1];return r[0]&15})).map((function(e){var r=e[0],n=e[1];var a=n[1]||r;i.set(a,r);if(n[0]&512){t.$attrsToReflect$.push([r,a])}return a}))}}return e};var Be=function(e,t,n,a,i){return __awaiter(r,void 0,void 0,(function(){var e,r,a,l,$,s,o;return __generator(this,(function(f){switch(f.label){case 0:if(!((t.$flags$&32)===0))return[3,3];t.$flags$|=32;i=Ye(n);if(!i.then)return[3,2];e=I();return[4,i];case 1:i=f.sent();e();f.label=2;case 2:if(!i.isProxied){{n.$watchers$=i.watchers}Oe(i,n,2);i.isProxied=true}r=E("createInstance",n.$tagName$);{t.$flags$|=8}try{new i(t)}catch(e){Qe(e)}{t.$flags$&=~8}{t.$flags$|=128}r();ze(t.$lazyInstance$);if(i.style){a=i.style;l=B(n);if(!Ze.has(l)){$=E("registerStyles",n.$tagName$);P(l,a,!!(n.$flags$&1));$()}}f.label=3;case 3:s=t.$ancestorComponent$;o=function(){return we(t,true)};if(s&&s["s-rc"]){s["s-rc"].push(o)}else{o()}return[2]}}))}))};var ze=function(e){{Te(e,"connectedCallback")}};var qe=function(e){if((d.$flags$&1)===0){var t=De(e);var r=t.$cmpMeta$;var n=E("connectedCallback",r.$tagName$);if(!(t.$flags$&1)){t.$flags$|=1;var a=void 0;{a=e.getAttribute(_);if(a){if(r.$flags$&1){var i=M(e.shadowRoot,r);e.classList.remove(i+"-h",i+"-s")}Ae(e,r.$tagName$,a,t)}}if(!a){if(r.$flags$&(4|8)){Ue(e)}}{var l=e;while(l=l.parentNode||l.host){if(l.nodeType===1&&l.hasAttribute("s-id")&&l["s-p"]||l["s-p"]){be(t,t.$ancestorComponent$=l);break}}}if(r.$members$){Object.entries(r.$members$).map((function(t){var r=t[0],n=t[1][0];if(n&31&&e.hasOwnProperty(r)){var a=e[r];delete e[r];e[r]=a}}))}{it((function(){return Be(e,t,r)}))}}else{y(e,t,r.$listeners$);ze(t.$lazyInstance$)}n()}};var Ue=function(e){var t=e["s-cr"]=v.createComment("");t["s-cn"]=true;e.insertBefore(t,e.firstChild)};var Ve=function(e){if((d.$flags$&1)===0){var t=De(e);var r=t.$lazyInstance$;{if(t.$rmListeners$){t.$rmListeners$.map((function(e){return e()}));t.$rmListeners$=undefined}}{Te(r,"disconnectedCallback")}}};var He=e("b",(function(e,t){if(t===void 0){t={}}var r=E();var n=[];var a=t.exclude||[];var i=c.customElements;var l=v.head;var $=l.querySelector("meta[charset]");var s=v.createElement("style");var o=[];var f=v.querySelectorAll("["+T+"]");var u;var h=true;var m=0;Object.assign(d,t);d.$resourcesUrl$=new URL(t.resourcesUrl||"./",v.baseURI).href;{d.$flags$|=2}{for(;m<f.length;m++){P(f[m].getAttribute(T),z(f[m].innerHTML),true)}}e.map((function(e){e[1].map((function(t){var r={$flags$:t[0],$tagName$:t[1],$members$:t[2],$listeners$:t[3]};{r.$members$=t[2]}{r.$listeners$=t[3]}{r.$attrsToReflect$=[]}{r.$watchers$={}}var l=r.$tagName$;var $=function(e){__extends(t,e);function t(t){var n=e.call(this,t)||this;t=n;Je(t,r);if(r.$flags$&1){{{t.attachShadow({mode:"open",delegatesFocus:!!(r.$flags$&16)})}}}return n}t.prototype.connectedCallback=function(){var e=this;if(u){clearTimeout(u);u=null}if(h){o.push(this)}else{d.jmp((function(){return qe(e)}))}};t.prototype.disconnectedCallback=function(){var e=this;d.jmp((function(){return Ve(e)}))};t.prototype.componentOnReady=function(){return De(this).$onReadyPromise$};return t}(HTMLElement);r.$lazyBundleId$=e[0];if(!a.includes(l)&&!i.get(l)){n.push(l);i.define(l,Oe($,r,1))}}))}));{s.innerHTML=n+C;s.setAttribute("data-styles","");l.insertBefore(s,$?$.nextSibling:l.firstChild)}h=false;if(o.length){o.map((function(e){return e.connectedCallback()}))}else{{d.jmp((function(){return u=setTimeout(_e,30)}))}}r()}));var We=e("i",(function(e){var t=new URL(e,d.$resourcesUrl$);return t.origin!==c.location.origin?t.href:t.pathname}));var Fe=new WeakMap;var De=function(e){return Fe.get(e)};var Ge=e("r",(function(e,t){return Fe.set(t.$lazyInstance$=e,t)}));var Je=function(e,t){var r={$flags$:0,$hostElement$:e,$cmpMeta$:t,$instanceValues$:new Map};{r.$onInstancePromise$=new Promise((function(e){return r.$onInstanceResolve$=e}))}{r.$onReadyPromise$=new Promise((function(e){return r.$onReadyResolve$=e}));e["s-p"]=[];e["s-rc"]=[]}y(e,r,t.$listeners$);return Fe.set(e,r)};var Ke=function(e,t){return t in e};var Qe=function(e,t){return(0,console.error)(e,t)};var Xe=new Map;var Ye=function(e,r,n){var a=e.$tagName$.replace(/-/g,"_");var i=e.$lazyBundleId$;var l=Xe.get(i);if(l){return l[a]}return t.import("./"+i+".entry.js"+"").then((function(e){{Xe.set(i,e)}return e[a]}),Qe)};var Ze=new Map;var et=[];var tt=[];var rt=function(e,t){return function(r){e.push(r);if(!u){u=true;if(t&&d.$flags$&4){it(at)}else{d.raf(at)}}}};var nt=function(e){for(var t=0;t<e.length;t++){try{e[t](performance.now())}catch(e){Qe(e)}}e.length=0};var at=function(){nt(et);{nt(tt);if(u=et.length>0){d.raf(at)}}};var it=function(e){return p().then(e)};var lt=e("e",rt(et,false));var $t=e("a",rt(tt,true))}}}));