System.register(["./p-b25c886d.system.js","./p-5e4b8ffe.system.js"],(function(r){"use strict";var e,t,n,s;return{setters:[function(r){e=r.r;t=r.h;n=r.H},function(r){s=r.s}],execute:function(){var i={circles:{dur:1e3,circles:8,fn:function(r,e,t){var n=e/t;var s=r*n-r+"ms";var i=2*Math.PI*n;return{r:5,style:{top:9*Math.sin(i)+"px",left:9*Math.cos(i)+"px","animation-delay":s}}}},circular:{dur:1400,elmDuration:true,circles:1,fn:function(){return{r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}}}},crescent:{dur:750,circles:1,fn:function(){return{r:26,style:{}}}},dots:{dur:750,circles:3,fn:function(r,e){var t=-(110*e)+"ms";return{r:6,style:{left:9-9*e+"px","animation-delay":t}}}},lines:{dur:1e3,lines:12,fn:function(r,e,t){var n="rotate("+(30*e+(e<6?180:-180))+"deg)";var s=r*e/t-r+"ms";return{y1:17,y2:29,style:{transform:n,"animation-delay":s}}}},"lines-small":{dur:1e3,lines:12,fn:function(r,e,t){var n="rotate("+(30*e+(e<6?180:-180))+"deg)";var s=r*e/t-r+"ms";return{y1:12,y2:20,style:{transform:n,"animation-delay":s}}}}};var a=i;var o=":host{display:inline-block;position:relative;width:28px;height:28px;color:var(--color, currentColor);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}:host(.bkkr-color){color:var(--color-base, var(--bkkr-text-color, #000))}svg{top:0;left:0;position:absolute;width:100%;height:100%;-webkit-transform:translateZ(0);transform:translateZ(0);-webkit-transform-origin:center;transform-origin:center}:host(.spinner-lines) line,:host(.spinner-lines-small) line{stroke-width:4px;stroke-linecap:round;stroke:currentColor}:host(.spinner-lines) svg,:host(.spinner-lines-small) svg{-webkit-animation:spinner-fade-out 1s linear infinite;animation:spinner-fade-out 1s linear infinite}:host(.spinner-circles) svg{-webkit-animation:spinner-fade-out 1s linear infinite;animation:spinner-fade-out 1s linear infinite;fill:currentColor}:host(.spinner-crescent) circle{fill:transparent;stroke-width:4px;stroke-dasharray:128px;stroke-dashoffset:82px;stroke:currentColor}:host(.spinner-crescent) svg{-webkit-animation:spinner-rotate 1s linear infinite;animation:spinner-rotate 1s linear infinite}:host(.spinner-dots) circle{stroke-width:0;fill:currentColor}:host(.spinner-dots) svg{-webkit-animation:spinner-dots 1s linear infinite;animation:spinner-dots 1s linear infinite}:host(.spinner-circular){-webkit-animation:spinner-circular linear infinite;animation:spinner-circular linear infinite}:host(.spinner-circular) circle{-webkit-animation:spinner-circular-inner ease-in-out infinite;animation:spinner-circular-inner ease-in-out infinite;fill:none;stroke:currentColor;stroke-dasharray:80px, 200px;stroke-dashoffset:0;stroke-width:5.6}:host(.spinner-paused),:host(.spinner-paused) svg,:host(.spinner-paused) circle{-webkit-animation-play-state:paused;animation-play-state:paused}@-webkit-keyframes spinner-fade-out{0%{opacity:1}100%{opacity:0}}@keyframes spinner-fade-out{0%{opacity:1}100%{opacity:0}}@-webkit-keyframes spinner-rotate{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes spinner-rotate{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes spinner-dots{0%{-webkit-transform:scale(1, 1);transform:scale(1, 1);opacity:0.9}50%{-webkit-transform:scale(0.4, 0.4);transform:scale(0.4, 0.4);opacity:0.3}100%{-webkit-transform:scale(1, 1);transform:scale(1, 1);opacity:0.9}}@keyframes spinner-dots{0%{-webkit-transform:scale(1, 1);transform:scale(1, 1);opacity:0.9}50%{-webkit-transform:scale(0.4, 0.4);transform:scale(0.4, 0.4);opacity:0.3}100%{-webkit-transform:scale(1, 1);transform:scale(1, 1);opacity:0.9}}@-webkit-keyframes spinner-circular{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes spinner-circular{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes spinner-circular-inner{0%{stroke-dasharray:1px, 200px;stroke-dashoffset:0}50%{stroke-dasharray:100px, 200px;stroke-dashoffset:-15px}100%{stroke-dasharray:100px, 200px;stroke-dashoffset:-125px}}@keyframes spinner-circular-inner{0%{stroke-dasharray:1px, 200px;stroke-dashoffset:0}50%{stroke-dasharray:100px, 200px;stroke-dashoffset:-15px}100%{stroke-dasharray:100px, 200px;stroke-dashoffset:-125px}}";var l=r("bkkr_spinner",function(){function r(r){e(this,r)}r.prototype.render=function(){var r;var e=this.type||"crescent";var i=a[e]||a["crescent"];var o=typeof this.duration==="number"&&this.duration>10?this.duration:i.dur;var l=[];if(i.circles!==undefined){for(var p=0;p<i.circles;p++){l.push(c(i,o,p,i.circles))}}else if(i.lines!==undefined){for(var p=0;p<i.lines;p++){l.push(f(i,o,p,i.lines))}}return t(n,{class:s(this.color,(r={},r["spinner-"+e]=true,r)),role:"progressbar",style:i.elmDuration?{animationDuration:o+"ms"}:{}},l)};return r}());var c=function(r,e,n,s){var i=r.fn(e,n,s);i.style["animation-duration"]=e+"ms";return t("svg",{viewBox:i.viewBox||"0 0 64 64",style:i.style},t("circle",{transform:i.transform||"translate(32,32)",cx:i.cx,cy:i.cy,r:i.r,style:r.elmDuration?{animationDuration:e+"ms"}:{}}))};var f=function(r,e,n,s){var i=r.fn(e,n,s);i.style["animation-duration"]=e+"ms";return t("svg",{viewBox:i.viewBox||"0 0 64 64",style:i.style},t("line",{transform:"translate(32,32)",y1:i.y1,y2:i.y2}))};l.style=o}}}));