var __awaiter=this&&this.__awaiter||function(t,o,r,e){function n(t){return t instanceof r?t:new r((function(o){o(t)}))}return new(r||(r=Promise))((function(r,i){function l(t){try{a(e.next(t))}catch(t){i(t)}}function s(t){try{a(e["throw"](t))}catch(t){i(t)}}function a(t){t.done?r(t.value):n(t.value).then(l,s)}a((e=e.apply(t,o||[])).next())}))};var __generator=this&&this.__generator||function(t,o){var r={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},e,n,i,l;return l={next:s(0),throw:s(1),return:s(2)},typeof Symbol==="function"&&(l[Symbol.iterator]=function(){return this}),l;function s(t){return function(o){return a([t,o])}}function a(l){if(e)throw new TypeError("Generator is already executing.");while(r)try{if(e=1,n&&(i=l[0]&2?n["return"]:l[0]?n["throw"]||((i=n["return"])&&i.call(n),0):n.next)&&!(i=i.call(n,l[1])).done)return i;if(n=0,i)l=[l[0]&2,i.value];switch(l[0]){case 0:case 1:i=l;break;case 4:r.label++;return{value:l[1],done:false};case 5:r.label++;n=l[1];l=[0];continue;case 7:l=r.ops.pop();r.trys.pop();continue;default:if(!(i=r.trys,i=i.length>0&&i[i.length-1])&&(l[0]===6||l[0]===2)){r=0;continue}if(l[0]===3&&(!i||l[1]>i[0]&&l[1]<i[3])){r.label=l[1];break}if(l[0]===6&&r.label<i[1]){r.label=i[1];i=l;break}if(i&&r.label<i[2]){r.label=i[2];r.ops.push(l);break}if(i[2])r.ops.pop();r.trys.pop();continue}l=o.call(t,r)}catch(t){l=[6,t];n=0}finally{e=i=0}if(l[0]&5)throw l[1];return{value:l[0]?l[1]:void 0,done:true}}};System.register(["./p-b25c886d.system.js","./p-5e4b8ffe.system.js"],(function(t){"use strict";var o,r,e,n,i,l,s,a,c;return{setters:[function(t){o=t.r;r=t.e;e=t.i;n=t.f;i=t.h;l=t.H;s=t.g},function(t){a=t.s;c=t.h}],execute:function(){var f=":host{--background:var(--background, var(--bkkr-background-color, #fff));--color:var(--color, var(--bkkr-text-color, #000));--offset-top:0px;--offset-bottom:0px;--padding-top:calc(var(--bkkr-spacer, 16px) + var(--offset-top));--padding-end:0;--padding-bottom:calc(var(--bkkr-spacer, 16px) + var(--offset-bottom));--padding-start:0;--overflow:auto;display:block;position:relative;-ms-flex:1;flex:1;-ms-flex-order:0;order:0;max-width:100%;height:100%;margin-top:calc(var(--offset-top) * -1);margin-bottom:calc(var(--offset-bottom) * -1);font-family:var(--default-font-sans-serif);contain:size style}.inner-scroll{top:calc(var(--offset-top) * -1);right:0;bottom:calc(var(--offset-bottom) * -1);left:0;padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:calc(var(--padding-top) + var(--offset-top));padding-bottom:calc(var(--padding-bottom) + var(--keyboard-offset, 0px) + var(--offset-bottom));position:absolute;background-color:var(--background);color:var(--color);overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.inner-scroll{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.scroll-y,.scroll-x{-webkit-overflow-scrolling:touch;will-change:scroll-position, transform}.scroll-y{overflow-y:var(--overflow);-ms-touch-action:pan-y;touch-action:pan-y;overscroll-behavior-y:contain}.scroll-x{overflow-x:var(--overflow);-ms-touch-action:pan-x;touch-action:pan-x;overscroll-behavior-x:contain}.scroll-x.scroll-y{-ms-touch-action:auto;touch-action:auto}:host(.content-sizing){contain:none}:host(.content-sizing) .inner-scroll{position:relative}::slotted([slot=fixed]){position:absolute}";var u=t("bkkr_content",function(){function t(t){o(this,t);this.bkkrScrollStart=r(this,"bkkrScrollStart",7);this.bkkrScroll=r(this,"bkkrScroll",7);this.bkkrScrollEnd=r(this,"bkkrScrollEnd",7);this.isScrolling=false;this.lastScroll=0;this.queued=false;this.cTop=-1;this.cBottom=-1;this.detail={scrollTop:0,scrollLeft:0,type:"scroll",event:undefined,startX:0,startY:0,startTime:0,currentX:0,currentY:0,velocityX:0,velocityY:0,deltaX:0,deltaY:0,currentTime:0,data:undefined,isScrolling:true};this.fullscreen=false;this.scrollX=false;this.scrollY=true;this.scrollEvents=false}t.prototype.onAppLoad=function(){this.resize()};t.prototype.onClick=function(t){if(this.isScrolling){t.preventDefault();t.stopPropagation()}};t.prototype.disconnectedCallback=function(){this.onScrollEnd()};t.prototype.resize=function(){var t=this;if(this.fullscreen){e((function(){return t.readDimensions()}))}else if(this.cTop!==0||this.cBottom!==0){this.cTop=this.cBottom=0;n(this)}};t.prototype.readDimensions=function(){var t=h(this.el);var o=Math.max(this.el.offsetTop,0);var r=Math.max(t.offsetHeight-o-this.el.offsetHeight,0);var e=o!==this.cTop||r!==this.cBottom;if(e){this.cTop=o;this.cBottom=r;n(this)}};t.prototype.onScroll=function(t){var o=this;var r=Date.now();var n=!this.isScrolling;this.lastScroll=r;if(n){this.onScrollStart()}if(!this.queued&&this.scrollEvents){this.queued=true;e((function(r){o.queued=false;o.detail.event=t;d(o.detail,o.scrollEl,r,n);o.bkkrScroll.emit(o.detail)}))}};t.prototype.getScrollElement=function(){return Promise.resolve(this.scrollEl)};t.prototype.scrollToTop=function(t){if(t===void 0){t=0}return this.scrollToPoint(undefined,0,t)};t.prototype.scrollToBottom=function(t){if(t===void 0){t=0}var o=this.scrollEl.scrollHeight-this.scrollEl.clientHeight;return this.scrollToPoint(undefined,o,t)};t.prototype.scrollByPoint=function(t,o,r){return this.scrollToPoint(t+this.scrollEl.scrollLeft,o+this.scrollEl.scrollTop,r)};t.prototype.scrollToPoint=function(t,o,r){if(r===void 0){r=0}return __awaiter(this,void 0,void 0,(function(){var e,n,i,l,s,a,c,f,u;return __generator(this,(function(p){e=this.scrollEl;if(r<32){if(o!=null){e.scrollTop=o}if(t!=null){e.scrollLeft=t}return[2]}i=0;l=new Promise((function(t){return n=t}));s=e.scrollTop;a=e.scrollLeft;c=o!=null?o-s:0;f=t!=null?t-a:0;u=function(t){var o=Math.min(1,(t-i)/r)-1;var l=Math.pow(o,3)+1;if(c!==0){e.scrollTop=Math.floor(l*c+s)}if(f!==0){e.scrollLeft=Math.floor(l*f+a)}if(l<1){requestAnimationFrame(u)}else{n()}};requestAnimationFrame((function(t){i=t;u(t)}));return[2,l]}))}))};t.prototype.onScrollStart=function(){var t=this;this.isScrolling=true;this.bkkrScrollStart.emit({isScrolling:true});if(this.watchDog){clearInterval(this.watchDog)}this.watchDog=setInterval((function(){if(t.lastScroll<Date.now()-120){t.onScrollEnd()}}),100)};t.prototype.onScrollEnd=function(){clearInterval(this.watchDog);this.watchDog=null;if(this.isScrolling){this.isScrolling=false;this.bkkrScrollEnd.emit({isScrolling:false})}};t.prototype.render=function(){var t=this;var o=this,r=o.scrollX,e=o.scrollY;this.resize();return i(l,{class:a(this.color,{"content-sizing":c("bkkr-popover",this.el)})},i("main",{class:{"inner-scroll":true,"scroll-x":r,"scroll-y":e},ref:function(o){return t.scrollEl=o},onScroll:this.scrollEvents?function(o){return t.onScroll(o)}:undefined,part:"scroll"},i("slot",null)),i("slot",{name:"fixed"}))};Object.defineProperty(t.prototype,"el",{get:function(){return s(this)},enumerable:false,configurable:true});return t}());var p=function(t){if(t.parentElement){return t.parentElement}if(t.parentNode&&t.parentNode.host){return t.parentNode.host}return null};var h=function(t){var o=t.closest("bkkr-tabs");if(o){return o}var r=t.closest("bkkr-root,bkkr-page,.bkkr-page,page-inner");if(r){return r}return p(t)};var d=function(t,o,r,e){var n=t.currentX;var i=t.currentY;var l=t.currentTime;var s=o.scrollLeft;var a=o.scrollTop;var c=r-l;if(e){t.startTime=r;t.startX=s;t.startY=a;t.velocityX=t.velocityY=0}t.currentTime=r;t.currentX=t.scrollLeft=s;t.currentY=t.scrollTop=a;t.deltaX=s-t.startX;t.deltaY=a-t.startY;if(c>0&&c<100){var f=(s-n)/c;var u=(a-i)/c;t.velocityX=f*.7+t.velocityX*.3;t.velocityY=u*.7+t.velocityY*.3}};u.style=f}}}));