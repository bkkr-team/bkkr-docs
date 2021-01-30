import{r as e,h as r,H as n}from"./p-8dbe4215.js";import{s}from"./p-09b2e663.js";const t={circles:{dur:1e3,circles:8,fn:(e,r,n)=>{const s=r/n,t=e*s-e+"ms",i=2*Math.PI*s;return{r:5,style:{top:9*Math.sin(i)+"px",left:9*Math.cos(i)+"px","animation-delay":t}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(e,r)=>({r:6,style:{left:9-9*r+"px","animation-delay":-110*r+"ms"}})},lines:{dur:1e3,lines:12,fn:(e,r,n)=>({y1:17,y2:29,style:{transform:`rotate(${30*r+(r<6?180:-180)}deg)`,"animation-delay":e*r/n-e+"ms"}})},"lines-small":{dur:1e3,lines:12,fn:(e,r,n)=>({y1:12,y2:20,style:{transform:`rotate(${30*r+(r<6?180:-180)}deg)`,"animation-delay":e*r/n-e+"ms"}})}},i=class{constructor(r){e(this,r)}getName(){return this.type||"lines"}render(){const e=this,i=e.getName(),l=t[i]||t.lines,c="number"==typeof e.duration&&e.duration>10?e.duration:l.dur,p=[];if(void 0!==l.circles)for(let e=0;e<l.circles;e++)p.push(a(l,c,e,l.circles));else if(void 0!==l.lines)for(let e=0;e<l.lines;e++)p.push(o(l,c,e,l.lines));return r(n,{class:s(e.color,{["spinner-"+i]:!0}),role:"progressbar",style:l.elmDuration?{animationDuration:c+"ms"}:{}},p)}},a=(e,n,s,t)=>{const i=e.fn(n,s,t);return i.style["animation-duration"]=n+"ms",r("svg",{viewBox:i.viewBox||"0 0 64 64",style:i.style},r("circle",{transform:i.transform||"translate(32,32)",cx:i.cx,cy:i.cy,r:i.r,style:e.elmDuration?{animationDuration:n+"ms"}:{}}))},o=(e,n,s,t)=>{const i=e.fn(n,s,t);return i.style["animation-duration"]=n+"ms",r("svg",{viewBox:i.viewBox||"0 0 64 64",style:i.style},r("line",{transform:"translate(32,32)",y1:i.y1,y2:i.y2}))};i.style=".spinner,:host{--color:var(--color-base, currentColor);display:inline-block;position:relative;width:28px;height:28px;color:var(--color);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}svg{top:0;left:0;position:absolute;width:100%;height:100%;-webkit-transform:translateZ(0);transform:translateZ(0);-webkit-transform-origin:center;transform-origin:center}.spinner-lines line,:host(.spinner-lines) line,.spinner-lines-small line{stroke-width:4px;stroke-linecap:round;stroke:currentColor}.spinner-lines svg,:host(.spinner-lines) svg,.spinner-lines-small svg{-webkit-animation:spinner-fade-out 1s linear infinite;animation:spinner-fade-out 1s linear infinite}.spinner-circles svg,:host(.spinner-circles) svg{-webkit-animation:spinner-fade-out 1s linear infinite;animation:spinner-fade-out 1s linear infinite;fill:currentColor}.spinner-crescent circle,:host(.spinner-crescent) circle{fill:transparent;stroke-width:4px;stroke-dasharray:128px;stroke-dashoffset:82px;stroke:currentColor}.spinner-crescent svg,:host(.spinner-crescent) svg{-webkit-animation:spinner-rotate 1s linear infinite;animation:spinner-rotate 1s linear infinite}.spinner-dots circle,:host(.spinner-dots) circle{stroke-width:0;fill:currentColor}.spinner-dots svg,:host(.spinner-dots) svg{-webkit-animation:spinner-dots 1s linear infinite;animation:spinner-dots 1s linear infinite}.spinner-circular,:host(.spinner-circular){-webkit-animation:spinner-circular linear infinite;animation:spinner-circular linear infinite}.spinner-circular circle,:host(.spinner-circular) circle{-webkit-animation:spinner-circular-inner ease-in-out infinite;animation:spinner-circular-inner ease-in-out infinite;fill:none;stroke:currentColor;stroke-dasharray:80px, 200px;stroke-dashoffset:0;stroke-width:5.6}.spinner-paused,.spinner-paused svg,.spinner-paused circle{-webkit-animation-play-state:paused;animation-play-state:paused}@-webkit-keyframes spinner-fade-out{0%{opacity:1}100%{opacity:0}}@keyframes spinner-fade-out{0%{opacity:1}100%{opacity:0}}@-webkit-keyframes spinner-rotate{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes spinner-rotate{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes spinner-dots{0%{-webkit-transform:scale(1, 1);transform:scale(1, 1);opacity:0.9}50%{-webkit-transform:scale(0.4, 0.4);transform:scale(0.4, 0.4);opacity:0.3}100%{-webkit-transform:scale(1, 1);transform:scale(1, 1);opacity:0.9}}@keyframes spinner-dots{0%{-webkit-transform:scale(1, 1);transform:scale(1, 1);opacity:0.9}50%{-webkit-transform:scale(0.4, 0.4);transform:scale(0.4, 0.4);opacity:0.3}100%{-webkit-transform:scale(1, 1);transform:scale(1, 1);opacity:0.9}}@-webkit-keyframes spinner-circular{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes spinner-circular{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes spinner-circular-inner{0%{stroke-dasharray:1px, 200px;stroke-dashoffset:0}50%{stroke-dasharray:100px, 200px;stroke-dashoffset:-15px}100%{stroke-dasharray:100px, 200px;stroke-dashoffset:-125px}}@keyframes spinner-circular-inner{0%{stroke-dasharray:1px, 200px;stroke-dashoffset:0}50%{stroke-dasharray:100px, 200px;stroke-dashoffset:-15px}100%{stroke-dasharray:100px, 200px;stroke-dashoffset:-125px}}";export{i as bkkr_spinner}