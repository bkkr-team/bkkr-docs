System.register([],(function(e){"use strict";return{execute:function(){var t=e("handleFocus",(function(e){var t=[];var s=true;var a=e?e.shadowRoot:document;var i=e?e:document.body;var c=function(e){t.forEach((function(e){return e.classList.remove(n)}));e.forEach((function(e){return e.classList.add(n)}));t=e};var u=function(){s=false;c([])};var v=function(e){s=o.includes(e.key);if(!s){c([])}};var f=function(e){if(s&&e.composedPath){var t=e.composedPath().filter((function(e){if(e.classList){return e.classList.contains(r)}return false}));c(t)}};var d=function(){if(a.activeElement===i){c([])}};a.addEventListener("keydown",v);a.addEventListener("focusin",f);a.addEventListener("focusout",d);a.addEventListener("touchstart",u);a.addEventListener("mousedown",u);var E=function(){a.removeEventListener("keydown",v);a.removeEventListener("focusin",f);a.removeEventListener("focusout",d);a.removeEventListener("touchstart",u);a.removeEventListener("mousedown",u)};return{destroy:E,setFocus:c}}));var n="state-focused";var r="state-focusable";var o=["Tab","ArrowDown","Space","Escape"," ","Shift","Enter","ArrowLeft","ArrowRight","ArrowUp","Home","End"]}}}));