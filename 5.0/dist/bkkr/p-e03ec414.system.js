System.register(["./p-9120a7bd.system.js"],(function(e){"use strict";var t;return{setters:[function(e){t=e.p}],execute:function(){var n=e("handleClick",(function(){var e=-c*10;var n=0;var o;var v;var d;var f=new WeakMap;var l=function(){return o!==undefined&&o.parentElement!==null};var m=function(n){e=t(n);p(n)};var L=function(n){e=t(n);b()};var E=function(n){var r=t(n)-c;if(e<r){p(n)}};var h=function(n){var r=t(n)-c;if(e<r){b()}};var k=function(){clearTimeout(d);d=undefined;if(v){T(false);v=undefined}};var p=function(e){if(v||l()){return}o=undefined;w(r(e))};var b=function(){w(undefined)};var w=function(e){if(e&&e===v){return}clearTimeout(d);d=undefined;if(v){if(f.has(v)){throw new Error("internal error")}if(!v.classList.contains(i)){g(v)}T(true)}if(e){var t=f.get(e);if(t){clearTimeout(t);f.delete(e)}var n=a(e)?0:s;e.classList.remove(i);d=setTimeout((function(){g(e);d=undefined}),n)}v=e};var g=function(e){n=Date.now();e.classList.add(i)};var T=function(e){var t=v;if(!t){return}var r=u-Date.now()+n;if(e&&r>0&&!a(t)){var s=setTimeout((function(){t.classList.remove(i);f.delete(t)}),u);f.set(t,s)}else{t.classList.remove(i)}};var S=document;S.addEventListener("bkkrScrollStart",(function(e){o=e.target;k()}));S.addEventListener("bkkrScrollEnd",(function(){o=undefined}));S.addEventListener("bkkrGestureCaptured",k);S.addEventListener("touchstart",m,true);S.addEventListener("touchcancel",L,true);S.addEventListener("touchend",L,true);S.addEventListener("mousedown",E,true);S.addEventListener("mouseup",h,true)}));var r=function(e){if(e.composedPath){var t=e.composedPath();for(var n=0;n<t.length-2;n++){var r=t[n];if(r.classList&&r.classList.contains("state-activatable")){return r}}}else{return e.target.closest(".state-activatable")}};var a=function(e){return e.classList.contains("state-activatable-instant")};var i="state-activated";var s=100;var u=100;var c=2500}}}));