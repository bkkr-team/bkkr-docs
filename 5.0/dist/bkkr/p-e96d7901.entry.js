import{r as e,h as r,H as t}from"./p-8dbe4215.js";import{s}from"./p-09b2e663.js";const n={circles:{dur:1e3,circles:8,fn:(e,r,t)=>{const s=r/t,n=e*s-e+"ms",i=2*Math.PI*s;return{r:5,style:{top:9*Math.sin(i)+"px",left:9*Math.cos(i)+"px","animation-delay":n}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(e,r)=>({r:6,style:{left:9-9*r+"px","animation-delay":-110*r+"ms"}})},lines:{dur:1e3,lines:12,fn:(e,r,t)=>({y1:17,y2:29,style:{transform:`rotate(${30*r+(r<6?180:-180)}deg)`,"animation-delay":e*r/t-e+"ms"}})},"lines-small":{dur:1e3,lines:12,fn:(e,r,t)=>({y1:12,y2:20,style:{transform:`rotate(${30*r+(r<6?180:-180)}deg)`,"animation-delay":e*r/t-e+"ms"}})}},i=class{constructor(r){e(this,r)}render(){const e=this.type||"crescent",i=n[e]||n.crescent,l="number"==typeof this.duration&&this.duration>10?this.duration:i.dur,c=[];if(void 0!==i.circles)for(let e=0;e<i.circles;e++)c.push(a(i,l,e,i.circles));else if(void 0!==i.lines)for(let e=0;e<i.lines;e++)c.push(o(i,l,e,i.lines));return r(t,{class:s(this.color,{["spinner-"+e]:!0}),role:"progressbar",style:i.elmDuration?{animationDuration:l+"ms"}:{}},c)}},a=(e,t,s,n)=>{const i=e.fn(t,s,n);return i.style["animation-duration"]=t+"ms",r("svg",{viewBox:i.viewBox||"0 0 64 64",style:i.style},r("circle",{transform:i.transform||"translate(32,32)",cx:i.cx,cy:i.cy,r:i.r,style:e.elmDuration?{animationDuration:t+"ms"}:{}}))},o=(e,t,s,n)=>{const i=e.fn(t,s,n);return i.style["animation-duration"]=t+"ms",r("svg",{viewBox:i.viewBox||"0 0 64 64",style:i.style},r("line",{transform:"translate(32,32)",y1:i.y1,y2:i.y2}))};i.style=":host{--color:var(--color-base, currentColor);display:inline-block;position:relative;width:28px;height:28px;color:var(--color);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}svg{top:0;left:0;position:absolute;width:100%;height:100%;-webkit-transform:translateZ(0);transform:translateZ(0);-webkit-transform-origin:center;transform-origin:center}:host(.spinner-lines) line,:host(.spinner-lines-small) line{stroke-width:4px;stroke-linecap:round;stroke:currentColor}:host(.spinner-lines) svg,:host(.spinner-lines-small) svg{-webkit-animation:spinner-fade-out 1s linear infinite;animation:spinner-fade-out 1s linear infinite}:host(.spinner-circles) svg{-webkit-animation:spinner-fade-out 1s linear infinite;animation:spinner-fade-out 1s linear infinite;fill:currentColor}:host(.spinner-crescent) circle{fill:transparent;stroke-width:4px;stroke-dasharray:128px;stroke-dashoffset:82px;stroke:currentColor}:host(.spinner-crescent) svg{-webkit-animation:spinner-rotate 1s linear infinite;animation:spinner-rotate 1s linear infinite}:host(.spinner-dots) circle{stroke-width:0;fill:currentColor}:host(.spinner-dots) svg{-webkit-animation:spinner-dots 1s linear infinite;animation:spinner-dots 1s linear infinite}:host(.spinner-circular){-webkit-animation:spinner-circular linear infinite;animation:spinner-circular linear infinite}:host(.spinner-circular) circle{-webkit-animation:spinner-circular-inner ease-in-out infinite;animation:spinner-circular-inner ease-in-out infinite;fill:none;stroke:currentColor;stroke-dasharray:80px, 200px;stroke-dashoffset:0;stroke-width:5.6}:host(.spinner-paused),:host(.spinner-paused) svg,:host(.spinner-paused) circle{-webkit-animation-play-state:paused;animation-play-state:paused}@-webkit-keyframes spinner-fade-out{0%{opacity:1}100%{opacity:0}}@keyframes spinner-fade-out{0%{opacity:1}100%{opacity:0}}@-webkit-keyframes spinner-rotate{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes spinner-rotate{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes spinner-dots{0%{-webkit-transform:scale(1, 1);transform:scale(1, 1);opacity:0.9}50%{-webkit-transform:scale(0.4, 0.4);transform:scale(0.4, 0.4);opacity:0.3}100%{-webkit-transform:scale(1, 1);transform:scale(1, 1);opacity:0.9}}@keyframes spinner-dots{0%{-webkit-transform:scale(1, 1);transform:scale(1, 1);opacity:0.9}50%{-webkit-transform:scale(0.4, 0.4);transform:scale(0.4, 0.4);opacity:0.3}100%{-webkit-transform:scale(1, 1);transform:scale(1, 1);opacity:0.9}}@-webkit-keyframes spinner-circular{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes spinner-circular{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes spinner-circular-inner{0%{stroke-dasharray:1px, 200px;stroke-dashoffset:0}50%{stroke-dasharray:100px, 200px;stroke-dashoffset:-15px}100%{stroke-dasharray:100px, 200px;stroke-dashoffset:-125px}}@keyframes spinner-circular-inner{0%{stroke-dasharray:1px, 200px;stroke-dashoffset:0}50%{stroke-dasharray:100px, 200px;stroke-dashoffset:-15px}100%{stroke-dasharray:100px, 200px;stroke-dashoffset:-125px}}";export{i as bkkr_spinner}