import{r as t,e as o,i as s,f as i,h as r,H as n,g as a}from"./p-8dbe4215.js";import{s as l,h as e}from"./p-09b2e663.js";const c=class{constructor(s){t(this,s),this.bkkrScrollStart=o(this,"bkkrScrollStart",7),this.bkkrScroll=o(this,"bkkrScroll",7),this.bkkrScrollEnd=o(this,"bkkrScrollEnd",7),this.isScrolling=!1,this.lastScroll=0,this.queued=!1,this.cTop=-1,this.cBottom=-1,this.detail={scrollTop:0,scrollLeft:0,type:"scroll",event:void 0,startX:0,startY:0,startTime:0,currentX:0,currentY:0,velocityX:0,velocityY:0,deltaX:0,deltaY:0,currentTime:0,data:void 0,isScrolling:!0},this.fullscreen=!1,this.scrollX=!1,this.scrollY=!0,this.scrollEvents=!1}onAppLoad(){this.resize()}onClick(t){this.isScrolling&&(t.preventDefault(),t.stopPropagation())}disconnectedCallback(){this.onScrollEnd()}resize(){this.fullscreen?s((()=>this.readDimensions())):0===this.cTop&&0===this.cBottom||(this.cTop=this.cBottom=0,i(this))}readDimensions(){const t=h(this.el),o=Math.max(this.el.offsetTop,0),s=Math.max(t.offsetHeight-o-this.el.offsetHeight,0);(o!==this.cTop||s!==this.cBottom)&&(this.cTop=o,this.cBottom=s,i(this))}onScroll(t){const o=Date.now(),i=!this.isScrolling;this.lastScroll=o,i&&this.onScrollStart(),!this.queued&&this.scrollEvents&&(this.queued=!0,s((o=>{this.queued=!1,this.detail.event=t,d(this.detail,this.scrollEl,o,i),this.bkkrScroll.emit(this.detail)})))}getScrollElement(){return Promise.resolve(this.scrollEl)}scrollToTop(t=0){return this.scrollToPoint(void 0,0,t)}scrollToBottom(t=0){return this.scrollToPoint(void 0,this.scrollEl.scrollHeight-this.scrollEl.clientHeight,t)}scrollByPoint(t,o,s){return this.scrollToPoint(t+this.scrollEl.scrollLeft,o+this.scrollEl.scrollTop,s)}async scrollToPoint(t,o,s=0){const i=this.scrollEl;if(s<32)return null!=o&&(i.scrollTop=o),void(null!=t&&(i.scrollLeft=t));let r,n=0;const a=new Promise((t=>r=t)),l=i.scrollTop,e=i.scrollLeft,c=null!=o?o-l:0,h=null!=t?t-e:0,d=t=>{const o=Math.min(1,(t-n)/s)-1,a=Math.pow(o,3)+1;0!==c&&(i.scrollTop=Math.floor(a*c+l)),0!==h&&(i.scrollLeft=Math.floor(a*h+e)),a<1?requestAnimationFrame(d):r()};return requestAnimationFrame((t=>{n=t,d(t)})),a}onScrollStart(){this.isScrolling=!0,this.bkkrScrollStart.emit({isScrolling:!0}),this.watchDog&&clearInterval(this.watchDog),this.watchDog=setInterval((()=>{this.lastScroll<Date.now()-120&&this.onScrollEnd()}),100)}onScrollEnd(){clearInterval(this.watchDog),this.watchDog=null,this.isScrolling&&(this.isScrolling=!1,this.bkkrScrollEnd.emit({isScrolling:!1}))}render(){const{scrollX:t,scrollY:o}=this;return this.resize(),r(n,{class:l(this.color,{"content-sizing":e("bkkr-popover",this.el)})},r("main",{class:{"inner-scroll":!0,"scroll-x":t,"scroll-y":o},ref:t=>this.scrollEl=t,onScroll:this.scrollEvents?t=>this.onScroll(t):void 0,part:"scroll"},r("slot",null)),r("slot",{name:"fixed"}))}get el(){return a(this)}},h=t=>{const o=t.closest("bkkr-tabs");if(o)return o;return t.closest("bkkr-root,bkkr-page,.bkkr-page,page-inner")||(t=>t.parentElement?t.parentElement:t.parentNode&&t.parentNode.host?t.parentNode.host:null)(t)},d=(t,o,s,i)=>{const r=t.currentX,n=t.currentY,a=o.scrollLeft,l=o.scrollTop,e=s-t.currentTime;if(i&&(t.startTime=s,t.startX=a,t.startY=l,t.velocityX=t.velocityY=0),t.currentTime=s,t.currentX=t.scrollLeft=a,t.currentY=t.scrollTop=l,t.deltaX=a-t.startX,t.deltaY=l-t.startY,e>0&&e<100){const o=(l-n)/e;t.velocityX=(a-r)/e*.7+.3*t.velocityX,t.velocityY=.7*o+.3*t.velocityY}};c.style=":host{--background:var(--bkkr-background-color, #fff);--color:var(--bkkr-text-color);--offset-top:0px;--offset-bottom:0px;--padding-top:calc(var(--bkkr-spacer, 16px) + var(--offset-top));--padding-end:0;--padding-bottom:calc(var(--bkkr-spacer, 16px) + var(--offset-bottom));--padding-start:0;--overflow:auto;display:block;position:relative;-ms-flex:1;flex:1;-ms-flex-order:0;order:0;max-width:100%;height:100%;margin-top:calc(var(--offset-top) * -1);margin-bottom:calc(var(--offset-bottom) * -1);font-family:var(--default-font-sans-serif);contain:size style}.inner-scroll{top:calc(var(--offset-top) * -1);right:0;bottom:calc(var(--offset-bottom) * -1);left:0;padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:calc(var(--padding-top) + var(--offset-top));padding-bottom:calc(var(--padding-bottom) + var(--keyboard-offset, 0px) + var(--offset-bottom));position:absolute;background-color:var(--background);color:var(--color);overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.inner-scroll{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.scroll-y,.scroll-x{-webkit-overflow-scrolling:touch;will-change:scroll-position, transform}.scroll-y{overflow-y:var(--overflow);-ms-touch-action:pan-y;touch-action:pan-y;overscroll-behavior-y:contain}.scroll-x{overflow-x:var(--overflow);-ms-touch-action:pan-x;touch-action:pan-x;overscroll-behavior-x:contain}.scroll-x.scroll-y{-ms-touch-action:auto;touch-action:auto}:host(.content-sizing){contain:none}:host(.content-sizing) .inner-scroll{position:relative}::slotted([slot=fixed]){position:absolute}";export{c as bkkr_content}