var __awaiter=this&&this.__awaiter||function(t,r,o,e){function n(t){return t instanceof o?t:new o((function(r){r(t)}))}return new(o||(o=Promise))((function(o,i){function l(t){try{s(e.next(t))}catch(t){i(t)}}function a(t){try{s(e["throw"](t))}catch(t){i(t)}}function s(t){t.done?o(t.value):n(t.value).then(l,a)}s((e=e.apply(t,r||[])).next())}))};var __generator=this&&this.__generator||function(t,r){var o={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},e,n,i,l;return l={next:a(0),throw:a(1),return:a(2)},typeof Symbol==="function"&&(l[Symbol.iterator]=function(){return this}),l;function a(t){return function(r){return s([t,r])}}function s(l){if(e)throw new TypeError("Generator is already executing.");while(o)try{if(e=1,n&&(i=l[0]&2?n["return"]:l[0]?n["throw"]||((i=n["return"])&&i.call(n),0):n.next)&&!(i=i.call(n,l[1])).done)return i;if(n=0,i)l=[l[0]&2,i.value];switch(l[0]){case 0:case 1:i=l;break;case 4:o.label++;return{value:l[1],done:false};case 5:o.label++;n=l[1];l=[0];continue;case 7:l=o.ops.pop();o.trys.pop();continue;default:if(!(i=o.trys,i=i.length>0&&i[i.length-1])&&(l[0]===6||l[0]===2)){o=0;continue}if(l[0]===3&&(!i||l[1]>i[0]&&l[1]<i[3])){o.label=l[1];break}if(l[0]===6&&o.label<i[1]){o.label=i[1];i=l;break}if(i&&o.label<i[2]){o.label=i[2];o.ops.push(l);break}if(i[2])o.ops.pop();o.trys.pop();continue}l=r.call(t,o)}catch(t){l=[6,t];n=0}finally{e=i=0}if(l[0]&5)throw l[1];return{value:l[0]?l[1]:void 0,done:true}}};System.register(["./p-5997b787.system.js","./p-4c5bd054.system.js"],(function(t){"use strict";var r,o,e,n,i,l,a,s,c;return{setters:[function(t){r=t.r;o=t.e;e=t.i;n=t.f;i=t.h;l=t.H;a=t.g},function(t){s=t.s;c=t.h}],execute:function(){var f=".content,:host{--background:var(--bkkr-background-color);--color:var(--bkkr-text-color);--offset-top:0px;--offset-bottom:0px;--padding-top:calc(var(--bkkr-spacer, 16px) + var(--offset-top));--padding-end:0;--padding-bottom:calc(var(--bkkr-spacer, 16px) + var(--offset-bottom));--padding-start:0;padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);display:block;position:relative;-ms-flex:1;flex:1;-ms-flex-order:0;order:0;max-width:100%;height:100%;margin-top:calc(var(--offset-top) * -1);margin-bottom:calc(var(--offset-bottom) * -1);contain:size style;overflow-x:hidden}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.content,:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.inner-scroll{top:calc(var(--offset-top) * -1);right:0;bottom:calc(var(--offset-bottom) * -1);left:0;padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:calc(var(--padding-top) + var(--offset-top));padding-bottom:calc(var(--padding-bottom) + var(--keyboard-offset) + var(--offset-bottom));position:absolute;color:var(--color);overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.inner-scroll{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.scroll-y,.scroll-x{-webkit-overflow-scrolling:touch;will-change:scroll-position, transform}.scroll-y{overflow-y:var(--overflow);-ms-touch-action:pan-y;touch-action:pan-y;overscroll-behavior-y:contain}.scroll-x{overflow-x:var(--overflow);-ms-touch-action:pan-x;touch-action:pan-x;overscroll-behavior-x:contain}.scroll-x.scroll-y{-ms-touch-action:auto;touch-action:auto}:host(.content-sizing){contain:none}:host(.content-sizing) .inner-scroll{position:relative}::slotted([slot=fixed]){position:absolute}";var u=t("bkkr_content",function(){function t(t){r(this,t);this.bkkrScrollStart=o(this,"bkkrScrollStart",7);this.bkkrScroll=o(this,"bkkrScroll",7);this.bkkrScrollEnd=o(this,"bkkrScrollEnd",7);this.isScrolling=false;this.lastScroll=0;this.queued=false;this.cTop=-1;this.cBottom=-1;this.detail={scrollTop:0,scrollLeft:0,type:"scroll",event:undefined,startX:0,startY:0,startTime:0,currentX:0,currentY:0,velocityX:0,velocityY:0,deltaX:0,deltaY:0,currentTime:0,data:undefined,isScrolling:true};this.fullscreen=false;this.scrollX=false;this.scrollY=true;this.scrollEvents=false}t.prototype.onAppLoad=function(){this.resize()};t.prototype.onClick=function(t){if(this.isScrolling){t.preventDefault();t.stopPropagation()}};t.prototype.disconnectedCallback=function(){this.onScrollEnd()};t.prototype.resize=function(){var t=this;if(this.fullscreen){e((function(){return t.readDimensions()}))}else if(this.cTop!==0||this.cBottom!==0){this.cTop=this.cBottom=0;n(this)}};t.prototype.readDimensions=function(){var t=p(this.el);var r=Math.max(this.el.offsetTop,0);var o=Math.max(t.offsetHeight-r-this.el.offsetHeight,0);var e=r!==this.cTop||o!==this.cBottom;if(e){this.cTop=r;this.cBottom=o;n(this)}};t.prototype.onScroll=function(t){var r=this;var o=Date.now();var n=!this.isScrolling;this.lastScroll=o;if(n){this.onScrollStart()}if(!this.queued&&this.scrollEvents){this.queued=true;e((function(o){r.queued=false;r.detail.event=t;h(r.detail,r.scrollEl,o,n);r.bkkrScroll.emit(r.detail)}))}};t.prototype.getScrollElement=function(){return Promise.resolve(this.scrollEl)};t.prototype.scrollToTop=function(t){if(t===void 0){t=0}return this.scrollToPoint(undefined,0,t)};t.prototype.scrollToBottom=function(t){if(t===void 0){t=0}var r=this.scrollEl.scrollHeight-this.scrollEl.clientHeight;return this.scrollToPoint(undefined,r,t)};t.prototype.scrollByPoint=function(t,r,o){return this.scrollToPoint(t+this.scrollEl.scrollLeft,r+this.scrollEl.scrollTop,o)};t.prototype.scrollToPoint=function(t,r,o){if(o===void 0){o=0}return __awaiter(this,void 0,void 0,(function(){var e,n,i,l,a,s,c,f,u;return __generator(this,(function(d){e=this.scrollEl;if(o<32){if(r!=null){e.scrollTop=r}if(t!=null){e.scrollLeft=t}return[2]}i=0;l=new Promise((function(t){return n=t}));a=e.scrollTop;s=e.scrollLeft;c=r!=null?r-a:0;f=t!=null?t-s:0;u=function(t){var r=Math.min(1,(t-i)/o)-1;var l=Math.pow(r,3)+1;if(c!==0){e.scrollTop=Math.floor(l*c+a)}if(f!==0){e.scrollLeft=Math.floor(l*f+s)}if(l<1){requestAnimationFrame(u)}else{n()}};requestAnimationFrame((function(t){i=t;u(t)}));return[2,l]}))}))};t.prototype.onScrollStart=function(){var t=this;this.isScrolling=true;this.bkkrScrollStart.emit({isScrolling:true});if(this.watchDog){clearInterval(this.watchDog)}this.watchDog=setInterval((function(){if(t.lastScroll<Date.now()-120){t.onScrollEnd()}}),100)};t.prototype.onScrollEnd=function(){clearInterval(this.watchDog);this.watchDog=null;if(this.isScrolling){this.isScrolling=false;this.bkkrScrollEnd.emit({isScrolling:false})}};t.prototype.render=function(){var t=this;var r=this,o=r.scrollX,e=r.scrollY;this.resize();return i(l,{class:s(this.color,{"content-sizing":c("bkkr-popover",this.el)})},i("main",{class:{"inner-scroll":true,"scroll-x":o,"scroll-y":e,overscroll:o||e},ref:function(r){return t.scrollEl=r},onScroll:this.scrollEvents?function(r){return t.onScroll(r)}:undefined,part:"scroll"},i("slot",null)),i("slot",{name:"fixed"}))};Object.defineProperty(t.prototype,"el",{get:function(){return a(this)},enumerable:false,configurable:true});return t}());var d=function(t){if(t.parentElement){return t.parentElement}if(t.parentNode&&t.parentNode.host){return t.parentNode.host}return null};var p=function(t){var r=t.closest("bkkr-tabs");if(r){return r}var o=t.closest("bkkr-root,bkkr-page,.bkkr-page,page-inner");if(o){return o}return d(t)};var h=function(t,r,o,e){var n=t.currentX;var i=t.currentY;var l=t.currentTime;var a=r.scrollLeft;var s=r.scrollTop;var c=o-l;if(e){t.startTime=o;t.startX=a;t.startY=s;t.velocityX=t.velocityY=0}t.currentTime=o;t.currentX=t.scrollLeft=a;t.currentY=t.scrollTop=s;t.deltaX=a-t.startX;t.deltaY=s-t.startY;if(c>0&&c<100){var f=(a-n)/c;var u=(s-i)/c;t.velocityX=f*.7+t.velocityX*.3;t.velocityY=u*.7+t.velocityY*.3}};u.style=f}}}));