/*!
 * (C) BKKR Framework https://bkkr-team.github.io/bkkr-docs/ - MIT License
 */
System.register([],(function(e){"use strict";return{execute:function(){var r=e("w",(function(e,r,t){if(typeof MutationObserver==="undefined"){return}var u=new MutationObserver((function(e){t(n(e,r))}));u.observe(e,{childList:true,subtree:true});return u}));var n=function(e,r){var n;e.forEach((function(e){for(var u=0;u<e.addedNodes.length;u++){n=t(e.addedNodes[u],r)||n}}));return n};var t=function(e,r){if(e.nodeType!==1){return undefined}var n=e.tagName===r.toUpperCase()?[e]:Array.from(e.querySelectorAll(r));return n.find((function(r){return r.value===e.value}))}}}}));