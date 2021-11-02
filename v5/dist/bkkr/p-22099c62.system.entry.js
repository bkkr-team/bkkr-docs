/*!
 * (C) BKKR Framework https://bkkr-team.github.io/bkkr-docs/ - MIT License
 */
System.register(["./p-739d5869.system.js","./p-7c09dde3.system.js","./p-b60c7a38.system.js"],(function(i){"use strict";var r,e,t,n,a;return{setters:[function(i){r=i.r;e=i.h;t=i.H},function(i){n=i.s},function(i){a=i.h}],execute:function(){var s=":host{--progress-background:var(--color-base, var(--color-primary, #3880ff));--buffer-background:rgba(var(--color-base-rgb, var(--color-primary-rgb, 56, 128, 255)), 0.2);display:block;position:relative;width:100%;height:3px;contain:strict;direction:ltr;overflow:hidden}:host(.progress-bar-indeterminate){background:var(--buffer-background)}.progress,.progress-indeterminate,.indeterminate-bar-primary,.indeterminate-bar-secondary,.progress-buffer-bar,.progress-buffer-bar::before,.buffer-circles{top:0;right:0;bottom:0;left:0;position:absolute;width:100%;height:100%}.progress,.progress-buffer-bar{-webkit-transform-origin:left top;transform-origin:left top;-webkit-transition:-webkit-transform 150ms linear;transition:-webkit-transform 150ms linear;transition:transform 150ms linear;transition:transform 150ms linear, -webkit-transform 150ms linear}.progress,.progress-indeterminate{background:var(--progress-background);z-index:2}.progress-buffer-bar{background:var(--buffer-background);z-index:1}.indeterminate-bar-primary{top:0;right:0;bottom:0;left:-145.166611%;-webkit-animation:primary-indeterminate-translate 2s infinite linear;animation:primary-indeterminate-translate 2s infinite linear}.indeterminate-bar-primary .progress-indeterminate{-webkit-animation:primary-indeterminate-scale 2s infinite linear;animation:primary-indeterminate-scale 2s infinite linear;-webkit-animation-play-state:inherit;animation-play-state:inherit}.indeterminate-bar-secondary{top:0;right:0;bottom:0;left:-54.888891%;-webkit-animation:secondary-indeterminate-translate 2s infinite linear;animation:secondary-indeterminate-translate 2s infinite linear}.indeterminate-bar-secondary .progress-indeterminate{-webkit-animation:secondary-indeterminate-scale 2s infinite linear;animation:secondary-indeterminate-scale 2s infinite linear;-webkit-animation-play-state:inherit;animation-play-state:inherit}buffer-circles.buffer-circles-reversed{right:unset;left:2px;background-position:right;}.buffer-circles{right:-8px;left:unset;-webkit-transition:width 150ms linear;transition:width 150ms linear;background:radial-gradient(ellipse at center, var(--buffer-background) 0%, var(--buffer-background) 30%, transparent 30%) repeat-x 5px;background-position:left;background-size:10px 10px;z-index:0;-webkit-animation:buffering 450ms infinite linear;animation:buffering 450ms infinite linear}:host(.progress-bar-reversed) .progress,:host(.progress-bar-reversed) .progress-buffer-bar{-webkit-transform-origin:right top;transform-origin:right top}:host(.progress-bar-reversed) .buffer-circles,:host(.progress-bar-reversed) .indeterminate-bar-primary,:host(.progress-bar-reversed) .indeterminate-bar-secondary,:host(.progress-bar-reversed) .progress-indeterminate{animation-direction:reverse}:host(.progress-paused) .indeterminate-bar-secondary,:host(.progress-paused) .indeterminate-bar-primary,:host(.progress-paused) .buffer-circles{-webkit-animation-play-state:paused;animation-play-state:paused}@-webkit-keyframes primary-indeterminate-translate{0%{-webkit-transform:translateX(0);transform:translateX(0)}20%{-webkit-transform:translateX(0);transform:translateX(0);-webkit-animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819)}59.15%{-webkit-transform:translateX(83.67142%);transform:translateX(83.67142%);-webkit-animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352)}100%{-webkit-transform:translateX(200.611057%);transform:translateX(200.611057%)}}@keyframes primary-indeterminate-translate{0%{-webkit-transform:translateX(0);transform:translateX(0)}20%{-webkit-transform:translateX(0);transform:translateX(0);-webkit-animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819)}59.15%{-webkit-transform:translateX(83.67142%);transform:translateX(83.67142%);-webkit-animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352)}100%{-webkit-transform:translateX(200.611057%);transform:translateX(200.611057%)}}@-webkit-keyframes primary-indeterminate-scale{0%{-webkit-transform:scaleX(0.08);transform:scaleX(0.08)}36.65%{-webkit-transform:scaleX(0.08);transform:scaleX(0.08);-webkit-animation-timing-function:cubic-bezier(0.334731, 0.12482, 0.785844, 1);animation-timing-function:cubic-bezier(0.334731, 0.12482, 0.785844, 1)}69.15%{-webkit-transform:scaleX(0.661479);transform:scaleX(0.661479);-webkit-animation-timing-function:cubic-bezier(0.06, 0.11, 0.6, 1);animation-timing-function:cubic-bezier(0.06, 0.11, 0.6, 1)}100%{-webkit-transform:scaleX(0.08);transform:scaleX(0.08)}}@keyframes primary-indeterminate-scale{0%{-webkit-transform:scaleX(0.08);transform:scaleX(0.08)}36.65%{-webkit-transform:scaleX(0.08);transform:scaleX(0.08);-webkit-animation-timing-function:cubic-bezier(0.334731, 0.12482, 0.785844, 1);animation-timing-function:cubic-bezier(0.334731, 0.12482, 0.785844, 1)}69.15%{-webkit-transform:scaleX(0.661479);transform:scaleX(0.661479);-webkit-animation-timing-function:cubic-bezier(0.06, 0.11, 0.6, 1);animation-timing-function:cubic-bezier(0.06, 0.11, 0.6, 1)}100%{-webkit-transform:scaleX(0.08);transform:scaleX(0.08)}}@-webkit-keyframes secondary-indeterminate-translate{0%{-webkit-transform:translateX(0);transform:translateX(0);-webkit-animation-timing-function:cubic-bezier(0.15, 0, 0.515058, 0.409685);animation-timing-function:cubic-bezier(0.15, 0, 0.515058, 0.409685)}25%{-webkit-transform:translateX(37.651913%);transform:translateX(37.651913%);-webkit-animation-timing-function:cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);animation-timing-function:cubic-bezier(0.31033, 0.284058, 0.8, 0.733712)}48.35%{-webkit-transform:translateX(84.386165%);transform:translateX(84.386165%);-webkit-animation-timing-function:cubic-bezier(0.4, 0.627035, 0.6, 0.902026);animation-timing-function:cubic-bezier(0.4, 0.627035, 0.6, 0.902026)}100%{-webkit-transform:translateX(160.277782%);transform:translateX(160.277782%)}}@keyframes secondary-indeterminate-translate{0%{-webkit-transform:translateX(0);transform:translateX(0);-webkit-animation-timing-function:cubic-bezier(0.15, 0, 0.515058, 0.409685);animation-timing-function:cubic-bezier(0.15, 0, 0.515058, 0.409685)}25%{-webkit-transform:translateX(37.651913%);transform:translateX(37.651913%);-webkit-animation-timing-function:cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);animation-timing-function:cubic-bezier(0.31033, 0.284058, 0.8, 0.733712)}48.35%{-webkit-transform:translateX(84.386165%);transform:translateX(84.386165%);-webkit-animation-timing-function:cubic-bezier(0.4, 0.627035, 0.6, 0.902026);animation-timing-function:cubic-bezier(0.4, 0.627035, 0.6, 0.902026)}100%{-webkit-transform:translateX(160.277782%);transform:translateX(160.277782%)}}@-webkit-keyframes secondary-indeterminate-scale{0%{-webkit-transform:scaleX(0.08);transform:scaleX(0.08);-webkit-animation-timing-function:cubic-bezier(0.205028, 0.057051, 0.57661, 0.453971);animation-timing-function:cubic-bezier(0.205028, 0.057051, 0.57661, 0.453971)}19.15%{-webkit-transform:scaleX(0.457104);transform:scaleX(0.457104);-webkit-animation-timing-function:cubic-bezier(0.152313, 0.196432, 0.648374, 1.004315);animation-timing-function:cubic-bezier(0.152313, 0.196432, 0.648374, 1.004315)}44.15%{-webkit-transform:scaleX(0.72796);transform:scaleX(0.72796);-webkit-animation-timing-function:cubic-bezier(0.257759, -0.003163, 0.211762, 1.38179);animation-timing-function:cubic-bezier(0.257759, -0.003163, 0.211762, 1.38179)}100%{-webkit-transform:scaleX(0.08);transform:scaleX(0.08)}}@keyframes secondary-indeterminate-scale{0%{-webkit-transform:scaleX(0.08);transform:scaleX(0.08);-webkit-animation-timing-function:cubic-bezier(0.205028, 0.057051, 0.57661, 0.453971);animation-timing-function:cubic-bezier(0.205028, 0.057051, 0.57661, 0.453971)}19.15%{-webkit-transform:scaleX(0.457104);transform:scaleX(0.457104);-webkit-animation-timing-function:cubic-bezier(0.152313, 0.196432, 0.648374, 1.004315);animation-timing-function:cubic-bezier(0.152313, 0.196432, 0.648374, 1.004315)}44.15%{-webkit-transform:scaleX(0.72796);transform:scaleX(0.72796);-webkit-animation-timing-function:cubic-bezier(0.257759, -0.003163, 0.211762, 1.38179);animation-timing-function:cubic-bezier(0.257759, -0.003163, 0.211762, 1.38179)}100%{-webkit-transform:scaleX(0.08);transform:scaleX(0.08)}}@-webkit-keyframes buffering{to{-webkit-transform:translateX(-10px);transform:translateX(-10px)}}@keyframes buffering{to{-webkit-transform:translateX(-10px);transform:translateX(-10px)}}";var o=i("bkkr_progress_bar",function(){function i(i){r(this,i);this.type="determinate";this.reversed=false;this.value=0;this.buffer=1}i.prototype.render=function(){var i;var r=this,a=r.color,s=r.type,o=r.reversed,b=r.value,f=r.buffer;var l=document.dir==="rtl"?!o:o;return e(t,{role:"progressbar","aria-valuenow":s==="determinate"?b:null,"aria-valuemin":"0","aria-valuemax":"1",class:n(a,(i={},i["progress-bar-"+s]=true,i["progress-bar-reversed"]=l,i))},s==="indeterminate"?m():c(b,f,l))};return i}());var m=function(){return[e("div",{class:"indeterminate-bar-primary"},e("span",{class:"progress-indeterminate"})),e("div",{class:"indeterminate-bar-secondary"},e("span",{class:"progress-indeterminate"}))]};var c=function(i,r,t){var n=a(0,i,1);var s=a(0,r,1);return[e("div",{class:"progress",style:{transform:"scaleX("+n+")"}}),s!==1&&e("div",{class:{"buffer-circles":true,"buffer-circles-reversed":t},style:{width:"calc("+(1-s)*100+"%)"}}),e("div",{class:"progress-buffer-bar",style:{transform:"scaleX("+s+")"}})]};o.style=s}}}));