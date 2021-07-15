import{r as t,c as o,i,f as s,h as r,H as n,g as a}from"./p-e501253c.js";import{s as l,h as e}from"./p-c50c697b.js";const c=class{constructor(i){t(this,i),this.bkkrScrollStart=o(this,"bkkrScrollStart",7),this.bkkrScroll=o(this,"bkkrScroll",7),this.bkkrScrollEnd=o(this,"bkkrScrollEnd",7),this.isScrolling=!1,this.lastScroll=0,this.queued=!1,this.cTop=-1,this.cBottom=-1,this.isMainContent=!0,this.detail={scrollTop:0,scrollLeft:0,type:"scroll",event:void 0,startX:0,startY:0,startTime:0,currentX:0,currentY:0,velocityX:0,velocityY:0,deltaX:0,deltaY:0,currentTime:0,data:void 0,isScrolling:!0},this.fullscreen=!1,this.scrollX=!1,this.scrollY=!0,this.scrollEvents=!1}onAppLoad(){this.resize()}onClick(t){this.isScrolling&&(t.preventDefault(),t.stopPropagation())}connectedCallback(){this.isMainContent=null===this.el.closest("bkkr-menu, bkkr-popover, bkkr-modal, bkkr-drawer")}disconnectedCallback(){this.onScrollEnd()}resize(){this.fullscreen?i((()=>this.readDimensions())):0===this.cTop&&0===this.cBottom||(this.cTop=this.cBottom=0,s(this))}readDimensions(){const t=h(this.el),o=Math.max(this.el.offsetTop,0),i=Math.max(t.offsetHeight-o-this.el.offsetHeight,0);(o!==this.cTop||i!==this.cBottom)&&(this.cTop=o,this.cBottom=i,s(this))}onScroll(t){const o=Date.now(),s=!this.isScrolling;this.lastScroll=o,s&&this.onScrollStart(),!this.queued&&this.scrollEvents&&(this.queued=!0,i((o=>{this.queued=!1,this.detail.event=t,d(this.detail,this.scrollEl,o,s),this.bkkrScroll.emit(this.detail)})))}getScrollElement(){return Promise.resolve(this.scrollEl)}scrollToTop(t=0){return this.scrollToPoint(void 0,0,t)}scrollToBottom(t=0){return this.scrollToPoint(void 0,this.scrollEl.scrollHeight-this.scrollEl.clientHeight,t)}scrollByPoint(t,o,i){return this.scrollToPoint(t+this.scrollEl.scrollLeft,o+this.scrollEl.scrollTop,i)}async scrollToPoint(t,o,i=0){const s=this.scrollEl;if(i<32)return null!=o&&(s.scrollTop=o),void(null!=t&&(s.scrollLeft=t));let r,n=0;const a=new Promise((t=>r=t)),l=s.scrollTop,e=s.scrollLeft,c=null!=o?o-l:0,h=null!=t?t-e:0,d=t=>{const o=Math.min(1,(t-n)/i)-1,a=Math.pow(o,3)+1;0!==c&&(s.scrollTop=Math.floor(a*c+l)),0!==h&&(s.scrollLeft=Math.floor(a*h+e)),a<1?requestAnimationFrame(d):r()};return requestAnimationFrame((t=>{n=t,d(t)})),a}onScrollStart(){this.isScrolling=!0,this.bkkrScrollStart.emit({isScrolling:!0}),this.watchDog&&clearInterval(this.watchDog),this.watchDog=setInterval((()=>{this.lastScroll<Date.now()-120&&this.onScrollEnd()}),100)}onScrollEnd(){clearInterval(this.watchDog),this.watchDog=null,this.isScrolling&&(this.isScrolling=!1,this.bkkrScrollEnd.emit({isScrolling:!1}))}render(){const{isMainContent:t,scrollX:o,scrollY:i}=this,s=t?"main":"div";return this.resize(),r(n,{class:l(this.color,{"content-sizing":e("bkkr-popover",this.el)}),style:{"--offset-top":`${this.cTop}px`,"--offset-bottom":`${this.cBottom}px`}},r(s,{class:{"inner-scroll":!0,"scroll-x":o,"scroll-y":i},ref:t=>this.scrollEl=t,onScroll:this.scrollEvents?t=>this.onScroll(t):void 0,part:"scroll"},r("slot",null)),r("slot",{name:"fixed"}))}get el(){return a(this)}},h=t=>{const o=t.closest("bkkr-tabs");if(o)return o;return t.closest("bkkr-root,bkkr-page,.bkkr-page,page-inner")||(t=>t.parentElement?t.parentElement:t.parentNode&&t.parentNode.host?t.parentNode.host:null)(t)},d=(t,o,i,s)=>{const r=t.currentX,n=t.currentY,a=o.scrollLeft,l=o.scrollTop,e=i-t.currentTime;if(s&&(t.startTime=i,t.startX=a,t.startY=l,t.velocityX=t.velocityY=0),t.currentTime=i,t.currentX=t.scrollLeft=a,t.currentY=t.scrollTop=l,t.deltaX=a-t.startX,t.deltaY=l-t.startY,e>0&&e<100){const o=(l-n)/e;t.velocityX=(a-r)/e*.7+.3*t.velocityX,t.velocityY=.7*o+.3*t.velocityY}};c.style=":host{--background:var(--background, var(--bkkr-background-color, #fff));--color:var(--color, var(--bkkr-text-color, #000));--offset-top:0px;--offset-bottom:0px;--padding-top:calc(var(--bkkr-spacer, 16px));--padding-end:0;--padding-bottom:calc(var(--bkkr-spacer, 16px));--padding-start:0;--offset-top:0px;--offset-bottom:0px;--overflow:auto;display:block;position:relative;-ms-flex:1;flex:1;-ms-flex-order:0;order:0;max-width:100%;height:100%;margin:0 !important;padding:0 !important;font-family:var(--bkkr-font-family);contain:size style}.inner-scroll{top:calc(var(--offset-top) * -1);right:0px;bottom:calc(var(--offset-bottom) * -1);left:0px;padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:calc(var(--padding-top) + var(--offset-top));padding-bottom:calc(var(--padding-bottom) + var(--keyboard-offset, 0px) + var(--offset-bottom));position:absolute;background-color:var(--background);color:var(--color);overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box;-ms-touch-action:manipulation;touch-action:manipulation}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.inner-scroll{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.scroll-y,.scroll-x{-webkit-overflow-scrolling:touch;will-change:scroll-position, transform}.scroll-y{overflow-y:var(--overflow);overscroll-behavior-y:contain}.scroll-x{overflow-x:var(--overflow);overscroll-behavior-x:contain}:host(.content-sizing){contain:none}:host(.content-sizing) .inner-scroll{position:relative}::slotted([slot=fixed]){position:absolute}";export{c as bkkr_content}