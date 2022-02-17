var __awaiter=this&&this.__awaiter||function(t,r,o,e){function n(t){return t instanceof o?t:new o((function(r){r(t)}))}return new(o||(o=Promise))((function(o,i){function l(t){try{a(e.next(t))}catch(t){i(t)}}function s(t){try{a(e["throw"](t))}catch(t){i(t)}}function a(t){t.done?o(t.value):n(t.value).then(l,s)}a((e=e.apply(t,r||[])).next())}))};var __generator=this&&this.__generator||function(t,r){var o={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},e,n,i,l;return l={next:s(0),throw:s(1),return:s(2)},typeof Symbol==="function"&&(l[Symbol.iterator]=function(){return this}),l;function s(t){return function(r){return a([t,r])}}function a(l){if(e)throw new TypeError("Generator is already executing.");while(o)try{if(e=1,n&&(i=l[0]&2?n["return"]:l[0]?n["throw"]||((i=n["return"])&&i.call(n),0):n.next)&&!(i=i.call(n,l[1])).done)return i;if(n=0,i)l=[l[0]&2,i.value];switch(l[0]){case 0:case 1:i=l;break;case 4:o.label++;return{value:l[1],done:false};case 5:o.label++;n=l[1];l=[0];continue;case 7:l=o.ops.pop();o.trys.pop();continue;default:if(!(i=o.trys,i=i.length>0&&i[i.length-1])&&(l[0]===6||l[0]===2)){o=0;continue}if(l[0]===3&&(!i||l[1]>i[0]&&l[1]<i[3])){o.label=l[1];break}if(l[0]===6&&o.label<i[1]){o.label=i[1];i=l;break}if(i&&o.label<i[2]){o.label=i[2];o.ops.push(l);break}if(i[2])o.ops.pop();o.trys.pop();continue}l=r.call(t,o)}catch(t){l=[6,t];n=0}finally{e=i=0}if(l[0]&5)throw l[1];return{value:l[0]?l[1]:void 0,done:true}}};
/*!
 * (C) BKKR Framework https://bkkr-team.github.io/bkkr-docs/ - MIT License
 */System.register(["./p-85995b21.system.js","./p-e3e6838c.system.js","./p-7c09dde3.system.js"],(function(t){"use strict";var r,o,e,n,i,l,s,a,c,f;return{setters:[function(t){r=t.r;o=t.c;e=t.e;n=t.f;i=t.h;l=t.H;s=t.g},function(t){a=t.c},function(t){c=t.s;f=t.h}],execute:function(){var u=":host{--background:var(--background, var(--bkkr-background-color, #fff));--color:var(--color, var(--bkkr-text-color, #000));--offset-top:0px;--offset-bottom:0px;--padding-top:calc(var(--bkkr-spacer, 16px));--padding-end:0;--padding-bottom:calc(var(--bkkr-spacer, 16px));--padding-start:0;--offset-top:0px;--offset-bottom:0px;--overflow:auto;--scrollbar-gutter:stable both-edges;display:block;position:relative;-ms-flex:1;flex:1;-ms-flex-order:0;order:0;max-width:100%;height:100%;margin:0 !important;padding:0 !important;font-family:var(--bkkr-font-family);contain:size style}.inner-scroll{top:calc(var(--offset-top) * -1);right:0px;bottom:calc(var(--offset-bottom) * -1);left:0px;padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:calc(var(--padding-top) + var(--offset-top));padding-bottom:calc(var(--padding-bottom) + var(--keyboard-offset, 0px) + var(--offset-bottom));position:absolute;background-color:var(--background);color:var(--color);overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box;-ms-touch-action:manipulation;touch-action:manipulation}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.inner-scroll{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.scroll-y,.scroll-x{-webkit-overflow-scrolling:touch;will-change:scroll-position, transform;scrollbar-gutter:var(--scrollbar-gutter)}.scroll-y{overflow-y:var(--overflow);overscroll-behavior-y:contain}.scroll-x{overflow-x:var(--overflow);overscroll-behavior-x:contain}:host(.content-sizing){display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;min-height:0;contain:none}:host(.content-sizing) .inner-scroll{position:relative;top:0;bottom:0;margin-top:calc(var(--offset-top) * -1);margin-bottom:calc(var(--offset-bottom) * -1)}::slotted([slot=fixed]){position:absolute;-webkit-transform:translateZ(0);transform:translateZ(0)}";var p=t("bkkr_content",function(){function t(t){r(this,t);this.bkkrScrollStart=o(this,"bkkrScrollStart",7);this.bkkrScroll=o(this,"bkkrScroll",7);this.bkkrScrollEnd=o(this,"bkkrScrollEnd",7);this.isScrolling=false;this.lastScroll=0;this.queued=false;this.cTop=-1;this.cBottom=-1;this.isMainContent=true;this.detail={scrollTop:0,scrollLeft:0,type:"scroll",event:undefined,startX:0,startY:0,startTime:0,currentX:0,currentY:0,velocityX:0,velocityY:0,deltaX:0,deltaY:0,currentTime:0,data:undefined,isScrolling:true};this.fullscreen=false;this.scrollX=false;this.scrollY=true;this.scrollEvents=false}t.prototype.onAppLoad=function(){this.resize()};t.prototype.connectedCallback=function(){this.isMainContent=this.el.closest("bkkr-menu, bkkr-popover, bkkr-modal, bkkr-drawer")===null};t.prototype.disconnectedCallback=function(){this.onScrollEnd()};t.prototype.resize=function(){var t=this;if(this.fullscreen){e((function(){return t.readDimensions()}))}else if(this.cTop!==0||this.cBottom!==0){this.cTop=this.cBottom=0;n(this)}};t.prototype.readDimensions=function(){var t=d(this.el);var r=Math.max(this.el.offsetTop,0);var o=Math.max(t.offsetHeight-r-this.el.offsetHeight,0);var e=r!==this.cTop||o!==this.cBottom;if(e){this.cTop=r;this.cBottom=o;n(this)}};t.prototype.onScroll=function(t){var r=this;var o=Date.now();var n=!this.isScrolling;this.lastScroll=o;if(n){this.onScrollStart()}if(!this.queued&&this.scrollEvents){this.queued=true;e((function(o){r.queued=false;r.detail.event=t;v(r.detail,r.scrollEl,o,n);r.bkkrScroll.emit(r.detail)}))}};t.prototype.getScrollElement=function(){return __awaiter(this,void 0,void 0,(function(){var t=this;return __generator(this,(function(r){switch(r.label){case 0:if(!!this.scrollEl)return[3,2];return[4,new Promise((function(r){return a(t.el,r)}))];case 1:r.sent();r.label=2;case 2:return[2,Promise.resolve(this.scrollEl)]}}))}))};t.prototype.scrollToTop=function(t){if(t===void 0){t=0}return this.scrollToPoint(undefined,0,t)};t.prototype.scrollToBottom=function(t){if(t===void 0){t=0}return __awaiter(this,void 0,void 0,(function(){var r,o;return __generator(this,(function(e){switch(e.label){case 0:return[4,this.getScrollElement()];case 1:r=e.sent();o=r.scrollHeight-r.clientHeight;return[2,this.scrollToPoint(undefined,o,t)]}}))}))};t.prototype.scrollByPoint=function(t,r,o){return __awaiter(this,void 0,void 0,(function(){var e;return __generator(this,(function(n){switch(n.label){case 0:return[4,this.getScrollElement()];case 1:e=n.sent();return[2,this.scrollToPoint(t+e.scrollLeft,r+e.scrollTop,o)]}}))}))};t.prototype.scrollToPoint=function(t,r,o){if(o===void 0){o=0}return __awaiter(this,void 0,void 0,(function(){var e,n,i,l,s,a,c,f,u;return __generator(this,(function(p){switch(p.label){case 0:return[4,this.getScrollElement()];case 1:e=p.sent();if(o<32){if(r!=null){e.scrollTop=r}if(t!=null){e.scrollLeft=t}return[2]}i=0;l=new Promise((function(t){return n=t}));s=e.scrollTop;a=e.scrollLeft;c=r!=null?r-s:0;f=t!=null?t-a:0;u=function(t){var r=Math.min(1,(t-i)/o)-1;var l=Math.pow(r,3)+1;if(c!==0){e.scrollTop=Math.floor(l*c+s)}if(f!==0){e.scrollLeft=Math.floor(l*f+a)}if(l<1){requestAnimationFrame(u)}else{n()}};requestAnimationFrame((function(t){i=t;u(t)}));return[2,l]}}))}))};t.prototype.onScrollStart=function(){var t=this;this.isScrolling=true;this.bkkrScrollStart.emit({isScrolling:true});if(this.watchDog){clearInterval(this.watchDog)}this.watchDog=setInterval((function(){if(t.lastScroll<Date.now()-120){t.onScrollEnd()}}),100)};t.prototype.onScrollEnd=function(){clearInterval(this.watchDog);this.watchDog=null;if(this.isScrolling){this.isScrolling=false;this.bkkrScrollEnd.emit({isScrolling:false})}};t.prototype.render=function(){var t=this;var r=this,o=r.isMainContent,e=r.scrollX,n=r.scrollY;var s=o?"main":"div";this.resize();return i(l,{class:c(this.color,{"content-sizing":f("bkkr-popover",this.el)}),style:{"--offset-top":"".concat(this.cTop,"px"),"--offset-bottom":"".concat(this.cBottom,"px")}},i(s,{class:{"inner-scroll":true,"scroll-x":e,"scroll-y":n},ref:function(r){return t.scrollEl=r},onScroll:this.scrollEvents?function(r){return t.onScroll(r)}:undefined,part:"scroll"},i("slot",null)),i("slot",{name:"fixed"}))};Object.defineProperty(t.prototype,"el",{get:function(){return s(this)},enumerable:false,configurable:true});return t}());var h=function(t){if(t.parentElement){return t.parentElement}if(t.parentNode&&t.parentNode.host){return t.parentNode.host}return null};var d=function(t){var r=t.closest("bkkr-tabs");if(r){return r}var o=t.closest("bkkr-root,bkkr-page,.bkkr-page,page-inner,.popover-content");if(o){return o}return h(t)};var v=function(t,r,o,e){var n=t.currentX;var i=t.currentY;var l=t.currentTime;var s=r.scrollLeft;var a=r.scrollTop;var c=o-l;if(e){t.startTime=o;t.startX=s;t.startY=a;t.velocityX=t.velocityY=0}t.currentTime=o;t.currentX=t.scrollLeft=s;t.currentY=t.scrollTop=a;t.deltaX=s-t.startX;t.deltaY=a-t.startY;if(c>0&&c<100){var f=(s-n)/c;var u=(a-i)/c;t.velocityX=f*.7+t.velocityX*.3;t.velocityY=u*.7+t.velocityY*.3}};p.style=u}}}));