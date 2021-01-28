var __awaiter=this&&this.__awaiter||function(e,t,r,o){function i(e){return e instanceof r?e:new r((function(t){t(e)}))}return new(r||(r=Promise))((function(r,n){function s(e){try{p(o.next(e))}catch(e){n(e)}}function a(e){try{p(o["throw"](e))}catch(e){n(e)}}function p(e){e.done?r(e.value):i(e.value).then(s,a)}p((o=o.apply(e,t||[])).next())}))};var __generator=this&&this.__generator||function(e,t){var r={label:0,sent:function(){if(n[0]&1)throw n[1];return n[1]},trys:[],ops:[]},o,i,n,s;return s={next:a(0),throw:a(1),return:a(2)},typeof Symbol==="function"&&(s[Symbol.iterator]=function(){return this}),s;function a(e){return function(t){return p([e,t])}}function p(s){if(o)throw new TypeError("Generator is already executing.");while(r)try{if(o=1,i&&(n=s[0]&2?i["return"]:s[0]?i["throw"]||((n=i["return"])&&n.call(i),0):i.next)&&!(n=n.call(i,s[1])).done)return n;if(i=0,n)s=[s[0]&2,n.value];switch(s[0]){case 0:case 1:n=s;break;case 4:r.label++;return{value:s[1],done:false};case 5:r.label++;i=s[1];s=[0];continue;case 7:s=r.ops.pop();r.trys.pop();continue;default:if(!(n=r.trys,n=n.length>0&&n[n.length-1])&&(s[0]===6||s[0]===2)){r=0;continue}if(s[0]===3&&(!n||s[1]>n[0]&&s[1]<n[3])){r.label=s[1];break}if(s[0]===6&&r.label<n[1]){r.label=n[1];n=s;break}if(n&&r.label<n[2]){r.label=n[2];r.ops.push(s);break}if(n[2])r.ops.pop();r.trys.pop();continue}s=t.call(e,r)}catch(e){s=[6,e];i=0}finally{o=n=0}if(s[0]&5)throw s[1];return{value:s[0]?s[1]:void 0,done:true}}};System.register(["./p-5997b787.system.js","./p-23b96d66.system.js","./p-41dd7f22.system.js","./p-4c5bd054.system.js","./p-b9ae5f46.system.js","./p-42e53900.system.js","./p-dd74220a.system.js"],(function(e){"use strict";var t,r,o,i,n,s,a,p,l,c,d,u,v,f,h;return{setters:[function(e){t=e.r;r=e.e;o=e.h;i=e.H;n=e.g},function(){},function(e){s=e.B;a=e.p;p=e.a;l=e.d;c=e.e},function(e){d=e.g},function(e){u=e.c},function(e){v=e.a;f=e.d},function(e){h=e.d}],execute:function(){var b=function(e,t){var r="top";var o="left";var i=e.querySelector(".popover-content");var n=i.getBoundingClientRect();var s=n.width;var a=n.height;var p=e.ownerDocument.defaultView.innerWidth;var l=e.ownerDocument.defaultView.innerHeight;var c=t&&t.target&&t.target.getBoundingClientRect();var d=c!=null&&"top"in c?c.top:l/2-a/2;var v=c!=null&&"left"in c?c.left:p/2;var f=c&&c.width||0;var h=c&&c.height||0;var b=e.querySelector(".popover-arrow");var m=b.getBoundingClientRect();var y=m.width;var w=m.height;if(c==null){b.style.display="none"}var g={top:d+h,left:v+f/2-y/2};var x={top:d+h+(w-1),left:v+f/2-s/2};var D=false;var P=false;if(x.left<k+25){D=true;x.left=k}else if(s+k+x.left+25>p){P=true;x.left=p-s-k;o="right"}if(d+h+a>l&&d-a>0){g.top=d-(w+1);x.top=d-a-(w-1);e.className=e.className+" popover-bottom";r="bottom"}else if(d+h+a>l){i.style.bottom=k+"%"}b.style.top=g.top+"px";b.style.left=g.left+"px";i.style.top=x.top+"px";i.style.left=x.left+"px";if(D){i.style.left="calc("+x.left+"px + var(--safe-area-left, 0px))"}if(P){i.style.left="calc("+x.left+"px - var(--safe-area-right, 0px))"}i.style.transformOrigin=r+" "+o;var _=u();var E=u();var B=u();E.addElement(e.querySelector("bkkr-backdrop")).fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]);B.addElement(e.querySelector(".popover-wrapper")).fromTo("opacity",.01,1);return _.addElement(e).easing("ease").duration(100).addAnimation([E,B])};var k=8;var m=function(e){var t=u();var r=u();var o=u();r.addElement(e.querySelector("bkkr-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0);o.addElement(e.querySelector(".popover-wrapper")).fromTo("opacity",.99,0);return t.addElement(e).easing("ease").duration(500).addAnimation([r,o])};var y='.sc-bkkr-popover-h{--background:var(--bkkr-background-color, #fff);--min-width:0;--min-height:0;--max-width:auto;--height:auto;--width:calc(100% - var(--bkkr-spacer));--max-height:90%;--box-shadow:none;--backdrop-opacity:var(--bkkr-backdrop-opacity, .08);top:0;right:0;bottom:0;left:0;display:-ms-flexbox;display:flex;position:fixed;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;color:var(--bkkr-text-color, #000);z-index:1001}.overlay-hidden.sc-bkkr-popover-h{display:none}.popover-wrapper.sc-bkkr-popover{opacity:0;z-index:10}.popover-content.sc-bkkr-popover{border-radius:32px;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:auto;z-index:10}.popover-viewport.sc-bkkr-popover{--safe-area-top:0;--safe-area-right:0;--safe-area-bottom:0;--safe-area-left:0}.popover-arrow.sc-bkkr-popover{display:block;position:absolute;width:20px;height:10px;overflow:hidden}.popover-arrow.sc-bkkr-popover::after{top:3px;left:3px;border-radius:3px;position:absolute;width:14px;height:14px;-webkit-transform:rotate(45deg);transform:rotate(45deg);background:var(--background);content:"";z-index:10}.popover-bottom.sc-bkkr-popover-h .popover-arrow.sc-bkkr-popover{top:auto;bottom:-10px}.popover-bottom.sc-bkkr-popover-h .popover-arrow.sc-bkkr-popover::after{top:-6px}';var w=e("bkkr_popover",function(){function e(e){var o=this;t(this,e);this.didPresent=r(this,"bkkrPopoverDidPresent",7);this.willPresent=r(this,"bkkrPopoverWillPresent",7);this.willDismiss=r(this,"bkkrPopoverWillDismiss",7);this.didDismiss=r(this,"bkkrPopoverDidDismiss",7);this.presented=false;this.keyboardClose=true;this.backdropDismiss=true;this.showBackdrop=true;this.animated=true;this.onDismiss=function(e){e.stopPropagation();e.preventDefault();o.dismiss()};this.onBackdropTap=function(){o.dismiss(undefined,s)};this.onLifecycle=function(e){var t=o.usersElement;var r=g[e.type];if(t&&r){var i=new CustomEvent(r,{bubbles:false,cancelable:false,detail:e.detail});t.dispatchEvent(i)}}}e.prototype.connectedCallback=function(){a(this.el)};e.prototype.present=function(){return __awaiter(this,void 0,void 0,(function(){var e,t,r;return __generator(this,(function(o){switch(o.label){case 0:if(this.presented){return[2]}e=this.el.querySelector(".popover-content");if(!e){throw new Error("container is undefined")}t=Object.assign(Object.assign({},this.componentProps),{popover:this.el});r=this;return[4,v(this.delegate,e,this.component,["popover-viewport",this.el["s-sc"]],t)];case 1:r.usersElement=o.sent();return[4,h(this.usersElement)];case 2:o.sent();return[2,p(this,b,this.event)]}}))}))};e.prototype.dismiss=function(e,t){return __awaiter(this,void 0,void 0,(function(){var r;return __generator(this,(function(o){switch(o.label){case 0:return[4,l(this,e,t,m,this.event)];case 1:r=o.sent();if(!r)return[3,3];return[4,f(this.delegate,this.usersElement)];case 2:o.sent();o.label=3;case 3:return[2,r]}}))}))};e.prototype.onDidDismiss=function(){return c(this.el,"bkkrPopoverDidDismiss")};e.prototype.onWillDismiss=function(){return c(this.el,"bkkrPopoverWillDismiss")};e.prototype.render=function(){var e=this.onLifecycle;return o(i,{"aria-modal":"true","no-router":true,tabindex:"-1",style:{zIndex:""+(2e4+this.overlayIndex)},class:Object.assign({},d(this.cssClass)),onBkkrPopoverDidPresent:e,onBkkrPopoverWillPresent:e,onBkkrPopoverWillDismiss:e,onBkkrPopoverDidDismiss:e,onBkkrDismiss:this.onDismiss,onBkkrBackdropTap:this.onBackdropTap},o("bkkr-backdrop",{tappable:this.backdropDismiss,visible:this.showBackdrop}),o("div",{tabindex:"0"}),o("div",{class:"popover-wrapper bkkr-overlay-wrapper"},o("div",{class:"popover-arrow"}),o("div",{class:"popover-content"})),o("div",{tabindex:"0"}))};Object.defineProperty(e.prototype,"el",{get:function(){return n(this)},enumerable:false,configurable:true});return e}());var g={bkkrPopoverDidPresent:"bkkrViewDidEnter",bkkrPopoverWillPresent:"bkkrViewWillEnter",bkkrPopoverWillDismiss:"bkkrViewWillLeave",bkkrPopoverDidDismiss:"bkkrViewDidLeave"};w.style=y}}}));