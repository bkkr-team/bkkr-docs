System.register(["./p-92f7c087.system.js","./p-4c5bd054.system.js"],(function(e){"use strict";var t,n,i,r,o,s;return{setters:[function(e){t=e.j;n=e.r;i=e.h;r=e.H;o=e.g},function(e){s=e.s}],execute:function(){var a;var c=function(){if(typeof window==="undefined"){return new Map}else{if(!a){var e=window;e.Icons=e.Icons||{};a=e.Icons.map=e.Icons.map||new Map}return a}};var l=function(e){var t=d(e.src);if(t!==null){return t}t=u(e.name,e.icon);if(t!==null){return f(t,e.type)}if(e.icon){t=d(e.icon);if(t!==null){return t}t=d(e.icon);if(t!==null){return t}}return null};var f=function(e,n){if(n===void 0){n="solid"}var i=c().get(e);if(i){return i}return t("assets/fontawesome/"+n+"/"+e+".svg")};var u=function(e,t){if(!e&&t&&!v(t)){e=t}if(h(e)){e=p(e)}if(!h(e)||e.trim()===""){return null}var n=e.replace(/[a-z]|-|\d/gi,"");if(n!==""){return null}return e};var d=function(e){if(h(e)){e=e.trim();if(v(e)){return e}}return null};var v=function(e){return e.length>0&&/(\/|\.)/.test(e)};var h=function(e){return typeof e==="string"};var p=function(e){return e.toLowerCase()};var b=function(e){var t=document.createElement("div");t.innerHTML=e;for(var n=t.childNodes.length-1;n>=0;n--){if(t.childNodes[n].nodeName.toLowerCase()!=="svg"){t.removeChild(t.childNodes[n])}}var i=t.firstElementChild;if(i&&i.nodeName.toLowerCase()==="svg"){var r=i.getAttribute("class")||"";i.setAttribute("class",(r+" s-bkkr-icon").trim());if(g(i)){return t.innerHTML}}return""};var g=function(e){if(e.nodeType===1){if(e.nodeName.toLowerCase()==="script"){return false}for(var t=0;t<e.attributes.length;t++){var n=e.attributes[t].value;if(h(n)&&n.toLowerCase().indexOf("on")===0){return false}}for(var t=0;t<e.childNodes.length;t++){if(!g(e.childNodes[t])){return false}}}return true};var m=new Map;var w=new Map;var y=function(e,t){var n=w.get(e);if(!n){if(typeof fetch!=="undefined"&&typeof document!=="undefined"){n=fetch(e).then((function(n){if(n.ok){return n.text().then((function(n){if(n!==undefined&&t!==false){n=b(n)}m.set(e,n||"")}))}m.set(e,"")}));w.set(e,n)}else{m.set(e,"");return Promise.resolve()}}return n};var C=":host{-webkit-box-sizing:content-box !important;box-sizing:content-box !important;display:inline-block;width:1em;height:1em;color:var(--color, currentColor);fill:var(--color, currentColor);contain:strict}.icon-inner,svg{display:block;width:100%;height:100%}:host(.icon-small){font-size:14px !important}:host(.icon-large){font-size:32px !important}:host(.icon-color){--color:var(--color-base, var(--color-primary, #3880ff))}";var I=e("bkkr_icon",function(){function e(e){n(this,e);this.isVisible=false;this.type="solid";this.lazy=false;this.sanitize=true}e.prototype.connectedCallback=function(){var e=this;this.waitUntilVisible(this.el,"50px",(function(){e.isVisible=true;e.loadIcon()}))};e.prototype.disconnectedCallback=function(){if(this.io){this.io.disconnect();this.io=undefined}};e.prototype.waitUntilVisible=function(e,t,n){var i=this;if(this.lazy&&typeof window!=="undefined"&&window.IntersectionObserver){var r=this.io=new window.IntersectionObserver((function(e){if(e[0].isIntersecting){r.disconnect();i.io=undefined;n()}}),{rootMargin:t});r.observe(e)}else{n()}};e.prototype.loadIcon=function(){var e=this;if(this.isVisible){var t=l(this);if(t!==null){if(m.has(t)){this.svgContent=m.get(t)}else{y(t,this.sanitize).then((function(){return e.svgContent=m.get(t)}))}}}if(this.ariaLabel===null&&this.ariaHidden!=="true"){var n=u(this.name,this.icon);if(n!==null){this.ariaLabel=n.replace(/\-/g," ")}}};e.prototype.render=function(){var e;var t=this,n=t.color,o=t.size;return i(r,{role:"img",class:s(n,(e={},e["icon-"+o]=!!o,e["icon-color"]=!!n,e))},this.svgContent?i("div",{class:"icon-inner",innerHTML:this.svgContent}):i("div",{class:"icon-inner"}))};Object.defineProperty(e,"assetsDirs",{get:function(){return["assets"]},enumerable:false,configurable:true});Object.defineProperty(e.prototype,"el",{get:function(){return o(this)},enumerable:false,configurable:true});Object.defineProperty(e,"watchers",{get:function(){return{name:["loadIcon"],src:["loadIcon"],icon:["loadIcon"]}},enumerable:false,configurable:true});return e}());I.style=C}}}));