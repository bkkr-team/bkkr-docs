import{r as i,h as r,H as t}from"./p-900e5a2b.js";import{s as e}from"./p-b0f3bd3c.js";import{h as n}from"./p-d56ecf06.js";const a=class{constructor(r){i(this,r),this.type="determinate",this.reversed=!1,this.value=0,this.buffer=1}render(){const{color:i,type:n,reversed:a,value:m,buffer:b}=this,c="rtl"===document.dir?!a:a;return r(t,{role:"progressbar","aria-valuenow":"determinate"===n?m:null,"aria-valuemin":"0","aria-valuemax":"1",class:e(i,{[`progress-bar-${n}`]:!0,"progress-bar-reversed":c})},"indeterminate"===n?s():o(m,b,c))}},s=()=>[r("div",{class:"indeterminate-bar-primary"},r("span",{class:"progress-indeterminate"})),r("div",{class:"indeterminate-bar-secondary"},r("span",{class:"progress-indeterminate"}))],o=(i,t,e)=>{const a=n(0,i,1),s=n(0,t,1);return[r("div",{class:"progress",style:{transform:`scaleX(${a})`}}),1!==s&&r("div",{class:{"buffer-circles":!0,"buffer-circles-reversed":e},style:{width:`calc(${100*(1-s)}%)`}}),r("div",{class:"progress-buffer-bar",style:{transform:`scaleX(${s})`}})]};a.style=":host{--progress-background:var(--color-base, var(--color-primary, #3880ff));--buffer-background:rgba(var(--color-base-rgb, var(--color-primary-rgb, 56, 128, 255)), 0.2);display:block;position:relative;width:100%;height:3px;contain:strict;direction:ltr;overflow:hidden}:host(.progress-bar-indeterminate){background:var(--buffer-background)}.progress,.progress-indeterminate,.indeterminate-bar-primary,.indeterminate-bar-secondary,.progress-buffer-bar,.progress-buffer-bar::before,.buffer-circles{top:0;right:0;bottom:0;left:0;position:absolute;width:100%;height:100%}.progress,.progress-buffer-bar{-webkit-transform-origin:left top;transform-origin:left top;-webkit-transition:-webkit-transform 150ms linear;transition:-webkit-transform 150ms linear;transition:transform 150ms linear;transition:transform 150ms linear, -webkit-transform 150ms linear}.progress,.progress-indeterminate{background:var(--progress-background);z-index:2}.progress-buffer-bar{background:var(--buffer-background);z-index:1}.indeterminate-bar-primary{top:0;right:0;bottom:0;left:-145.166611%;-webkit-animation:primary-indeterminate-translate 2s infinite linear;animation:primary-indeterminate-translate 2s infinite linear}.indeterminate-bar-primary .progress-indeterminate{-webkit-animation:primary-indeterminate-scale 2s infinite linear;animation:primary-indeterminate-scale 2s infinite linear;-webkit-animation-play-state:inherit;animation-play-state:inherit}.indeterminate-bar-secondary{top:0;right:0;bottom:0;left:-54.888891%;-webkit-animation:secondary-indeterminate-translate 2s infinite linear;animation:secondary-indeterminate-translate 2s infinite linear}.indeterminate-bar-secondary .progress-indeterminate{-webkit-animation:secondary-indeterminate-scale 2s infinite linear;animation:secondary-indeterminate-scale 2s infinite linear;-webkit-animation-play-state:inherit;animation-play-state:inherit}buffer-circles.buffer-circles-reversed{right:unset;left:2px;background-position:right;}.buffer-circles{right:-8px;left:unset;-webkit-transition:width 150ms linear;transition:width 150ms linear;background:radial-gradient(ellipse at center, var(--buffer-background) 0%, var(--buffer-background) 30%, transparent 30%) repeat-x 5px;background-position:left;background-size:10px 10px;z-index:0;-webkit-animation:buffering 450ms infinite linear;animation:buffering 450ms infinite linear}:host(.progress-bar-reversed) .progress,:host(.progress-bar-reversed) .progress-buffer-bar{-webkit-transform-origin:right top;transform-origin:right top}:host(.progress-bar-reversed) .buffer-circles,:host(.progress-bar-reversed) .indeterminate-bar-primary,:host(.progress-bar-reversed) .indeterminate-bar-secondary,:host(.progress-bar-reversed) .progress-indeterminate{animation-direction:reverse}:host(.progress-paused) .indeterminate-bar-secondary,:host(.progress-paused) .indeterminate-bar-primary,:host(.progress-paused) .buffer-circles{-webkit-animation-play-state:paused;animation-play-state:paused}@-webkit-keyframes primary-indeterminate-translate{0%{-webkit-transform:translateX(0);transform:translateX(0)}20%{-webkit-transform:translateX(0);transform:translateX(0);-webkit-animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819)}59.15%{-webkit-transform:translateX(83.67142%);transform:translateX(83.67142%);-webkit-animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352)}100%{-webkit-transform:translateX(200.611057%);transform:translateX(200.611057%)}}@keyframes primary-indeterminate-translate{0%{-webkit-transform:translateX(0);transform:translateX(0)}20%{-webkit-transform:translateX(0);transform:translateX(0);-webkit-animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819)}59.15%{-webkit-transform:translateX(83.67142%);transform:translateX(83.67142%);-webkit-animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352)}100%{-webkit-transform:translateX(200.611057%);transform:translateX(200.611057%)}}@-webkit-keyframes primary-indeterminate-scale{0%{-webkit-transform:scaleX(0.08);transform:scaleX(0.08)}36.65%{-webkit-transform:scaleX(0.08);transform:scaleX(0.08);-webkit-animation-timing-function:cubic-bezier(0.334731, 0.12482, 0.785844, 1);animation-timing-function:cubic-bezier(0.334731, 0.12482, 0.785844, 1)}69.15%{-webkit-transform:scaleX(0.661479);transform:scaleX(0.661479);-webkit-animation-timing-function:cubic-bezier(0.06, 0.11, 0.6, 1);animation-timing-function:cubic-bezier(0.06, 0.11, 0.6, 1)}100%{-webkit-transform:scaleX(0.08);transform:scaleX(0.08)}}@keyframes primary-indeterminate-scale{0%{-webkit-transform:scaleX(0.08);transform:scaleX(0.08)}36.65%{-webkit-transform:scaleX(0.08);transform:scaleX(0.08);-webkit-animation-timing-function:cubic-bezier(0.334731, 0.12482, 0.785844, 1);animation-timing-function:cubic-bezier(0.334731, 0.12482, 0.785844, 1)}69.15%{-webkit-transform:scaleX(0.661479);transform:scaleX(0.661479);-webkit-animation-timing-function:cubic-bezier(0.06, 0.11, 0.6, 1);animation-timing-function:cubic-bezier(0.06, 0.11, 0.6, 1)}100%{-webkit-transform:scaleX(0.08);transform:scaleX(0.08)}}@-webkit-keyframes secondary-indeterminate-translate{0%{-webkit-transform:translateX(0);transform:translateX(0);-webkit-animation-timing-function:cubic-bezier(0.15, 0, 0.515058, 0.409685);animation-timing-function:cubic-bezier(0.15, 0, 0.515058, 0.409685)}25%{-webkit-transform:translateX(37.651913%);transform:translateX(37.651913%);-webkit-animation-timing-function:cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);animation-timing-function:cubic-bezier(0.31033, 0.284058, 0.8, 0.733712)}48.35%{-webkit-transform:translateX(84.386165%);transform:translateX(84.386165%);-webkit-animation-timing-function:cubic-bezier(0.4, 0.627035, 0.6, 0.902026);animation-timing-function:cubic-bezier(0.4, 0.627035, 0.6, 0.902026)}100%{-webkit-transform:translateX(160.277782%);transform:translateX(160.277782%)}}@keyframes secondary-indeterminate-translate{0%{-webkit-transform:translateX(0);transform:translateX(0);-webkit-animation-timing-function:cubic-bezier(0.15, 0, 0.515058, 0.409685);animation-timing-function:cubic-bezier(0.15, 0, 0.515058, 0.409685)}25%{-webkit-transform:translateX(37.651913%);transform:translateX(37.651913%);-webkit-animation-timing-function:cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);animation-timing-function:cubic-bezier(0.31033, 0.284058, 0.8, 0.733712)}48.35%{-webkit-transform:translateX(84.386165%);transform:translateX(84.386165%);-webkit-animation-timing-function:cubic-bezier(0.4, 0.627035, 0.6, 0.902026);animation-timing-function:cubic-bezier(0.4, 0.627035, 0.6, 0.902026)}100%{-webkit-transform:translateX(160.277782%);transform:translateX(160.277782%)}}@-webkit-keyframes secondary-indeterminate-scale{0%{-webkit-transform:scaleX(0.08);transform:scaleX(0.08);-webkit-animation-timing-function:cubic-bezier(0.205028, 0.057051, 0.57661, 0.453971);animation-timing-function:cubic-bezier(0.205028, 0.057051, 0.57661, 0.453971)}19.15%{-webkit-transform:scaleX(0.457104);transform:scaleX(0.457104);-webkit-animation-timing-function:cubic-bezier(0.152313, 0.196432, 0.648374, 1.004315);animation-timing-function:cubic-bezier(0.152313, 0.196432, 0.648374, 1.004315)}44.15%{-webkit-transform:scaleX(0.72796);transform:scaleX(0.72796);-webkit-animation-timing-function:cubic-bezier(0.257759, -0.003163, 0.211762, 1.38179);animation-timing-function:cubic-bezier(0.257759, -0.003163, 0.211762, 1.38179)}100%{-webkit-transform:scaleX(0.08);transform:scaleX(0.08)}}@keyframes secondary-indeterminate-scale{0%{-webkit-transform:scaleX(0.08);transform:scaleX(0.08);-webkit-animation-timing-function:cubic-bezier(0.205028, 0.057051, 0.57661, 0.453971);animation-timing-function:cubic-bezier(0.205028, 0.057051, 0.57661, 0.453971)}19.15%{-webkit-transform:scaleX(0.457104);transform:scaleX(0.457104);-webkit-animation-timing-function:cubic-bezier(0.152313, 0.196432, 0.648374, 1.004315);animation-timing-function:cubic-bezier(0.152313, 0.196432, 0.648374, 1.004315)}44.15%{-webkit-transform:scaleX(0.72796);transform:scaleX(0.72796);-webkit-animation-timing-function:cubic-bezier(0.257759, -0.003163, 0.211762, 1.38179);animation-timing-function:cubic-bezier(0.257759, -0.003163, 0.211762, 1.38179)}100%{-webkit-transform:scaleX(0.08);transform:scaleX(0.08)}}@-webkit-keyframes buffering{to{-webkit-transform:translateX(-10px);transform:translateX(-10px)}}@keyframes buffering{to{-webkit-transform:translateX(-10px);transform:translateX(-10px)}}";export{a as bkkr_progress_bar}