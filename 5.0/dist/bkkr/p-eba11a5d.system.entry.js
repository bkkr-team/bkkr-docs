var __awaiter=this&&this.__awaiter||function(e,t,r,o){function i(e){return e instanceof r?e:new r((function(t){t(e)}))}return new(r||(r=Promise))((function(r,n){function a(e){try{p(o.next(e))}catch(e){n(e)}}function s(e){try{p(o["throw"](e))}catch(e){n(e)}}function p(e){e.done?r(e.value):i(e.value).then(a,s)}p((o=o.apply(e,t||[])).next())}))};var __generator=this&&this.__generator||function(e,t){var r={label:0,sent:function(){if(n[0]&1)throw n[1];return n[1]},trys:[],ops:[]},o,i,n,a;return a={next:s(0),throw:s(1),return:s(2)},typeof Symbol==="function"&&(a[Symbol.iterator]=function(){return this}),a;function s(e){return function(t){return p([e,t])}}function p(a){if(o)throw new TypeError("Generator is already executing.");while(r)try{if(o=1,i&&(n=a[0]&2?i["return"]:a[0]?i["throw"]||((n=i["return"])&&n.call(i),0):i.next)&&!(n=n.call(i,a[1])).done)return n;if(i=0,n)a=[a[0]&2,n.value];switch(a[0]){case 0:case 1:n=a;break;case 4:r.label++;return{value:a[1],done:false};case 5:r.label++;i=a[1];a=[0];continue;case 7:a=r.ops.pop();r.trys.pop();continue;default:if(!(n=r.trys,n=n.length>0&&n[n.length-1])&&(a[0]===6||a[0]===2)){r=0;continue}if(a[0]===3&&(!n||a[1]>n[0]&&a[1]<n[3])){r.label=a[1];break}if(a[0]===6&&r.label<n[1]){r.label=n[1];n=a;break}if(n&&r.label<n[2]){r.label=n[2];r.ops.push(a);break}if(n[2])r.ops.pop();r.trys.pop();continue}a=t.call(e,r)}catch(e){a=[6,e];i=0}finally{o=n=0}if(a[0]&5)throw a[1];return{value:a[0]?a[1]:void 0,done:true}}};System.register(["./p-92f7c087.system.js","./p-c68e00c3.system.js","./p-a4ae7b54.system.js","./p-d0c60236.system.js","./p-17ce3a68.system.js","./p-4c5bd054.system.js","./p-42e53900.system.js","./p-1a88d7e4.system.js"],(function(e){"use strict";var t,r,o,i,n,a,s,p,l,c,d,v,u,f,h;return{setters:[function(e){t=e.r;r=e.e;o=e.h;i=e.H;n=e.g},function(){},function(e){a=e.c},function(){},function(e){s=e.B;p=e.b;l=e.c;c=e.e;d=e.f},function(e){v=e.g},function(e){u=e.a;f=e.d},function(e){h=e.d}],execute:function(){var b=function(e,t){var r="top";var o="left";var i=e.querySelector(".popover-content");var n=i.getBoundingClientRect();var s=n.width;var p=n.height;var l=e.ownerDocument.defaultView.innerWidth;var c=e.ownerDocument.defaultView.innerHeight;var d=t&&t.target&&t.target.getBoundingClientRect();var v=d!=null&&"top"in d?d.top:c/2-p/2;var u=d!=null&&"left"in d?d.left:l/2;var f=d&&d.width||0;var h=d&&d.height||0;var b=e.querySelector(".popover-arrow");var m=b.getBoundingClientRect();var w=m.width;var y=m.height;if(d==null){b.style.display="none"}var x={top:v+h,left:u+f/2-w/2};var g={top:v+h+(y-1),left:u,width:f};var D=false;var P=false;console.log(s+g.left+25);if(g.left<k+25){D=true;g.left=k}else if(s+g.left+25>l){P=true;g.left=l-s-k;o="right"}if(v+h+p>c&&v-p>0){x.top=v-(y+1);g.top=v-p-(y-1);e.className=e.className+" popover-bottom";r="bottom"}else if(v+h+p>c){i.style.bottom=k+"%"}if(f>l){g.width=l}b.style.top=x.top+"px";b.style.left=x.left+"px";i.style.top=g.top+"px";i.style.left=g.left+"px";i.style.width=g.width+"px";if(D){i.style.left="calc("+g.left+"px + var(--safe-area-left, 0px))"}if(P){i.style.left="calc("+g.left+"px - var(--safe-area-right, 0px))"}i.style.transformOrigin=r+" "+o;var _=a();var E=a();var B=a();E.addElement(e.querySelector("bkkr-backdrop")).fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]);B.addElement(e.querySelector(".popover-wrapper")).fromTo("opacity",.01,1);return _.addElement(e).easing("ease").duration(200).addAnimation([E,B])};var k=8;var m=function(e){var t=a();var r=a();var o=a();r.addElement(e.querySelector("bkkr-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0);o.addElement(e.querySelector(".popover-wrapper")).fromTo("opacity",.99,0);return t.addElement(e).easing("ease").duration(200).addAnimation([r,o])};var w='.sc-bkkr-popover-h{--background:var(--bkkr-background-color, #fff);--min-width:0;--min-height:0;--max-width:auto;--height:auto;--width:calc(100% - var(--bkkr-spacer));--max-height:90%;--box-shadow:0 15px 25px 0 rgba(var(--box-shadow-color, var(--bkkr-text-color-rgb, 0, 0, 0)), 0.1), 0 6px 20px 0 rgba(var(--box-shadow-color, var(--bkkr-text-color-rgb, 0, 0, 0)), 0.12), 0 13.2px 40px 0 rgba(var(--box-shadow-color, var(--bkkr-text-color-rgb, 0, 0, 0)), 0.08);--backdrop-opacity:var(--bkkr-backdrop-opacity, .08);top:0;right:0;bottom:0;left:0;display:-ms-flexbox;display:flex;position:fixed;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;color:var(--bkkr-text-color, #000);z-index:1001}.overlay-hidden.sc-bkkr-popover-h{display:none}.popover-wrapper.sc-bkkr-popover{opacity:0;z-index:10}.popover-content.sc-bkkr-popover{border-radius:1em;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:auto;z-index:10}.popover-viewport.sc-bkkr-popover{--safe-area-top:0px;--safe-area-right:0px;--safe-area-bottom:0px;--safe-area-left:0px}.popover-viewport.sc-bkkr-popover bkkr-content.sc-bkkr-popover{padding-top:0;padding-bottom:0}.popover-arrow.sc-bkkr-popover{display:block;position:absolute;width:20px;height:10px;overflow:hidden}.popover-arrow.sc-bkkr-popover::after{top:3px;left:3px;border-radius:3px;position:absolute;width:14px;height:14px;-webkit-transform:rotate(45deg);transform:rotate(45deg);background:var(--background);content:"";z-index:10}.popover-bottom.sc-bkkr-popover-h .popover-arrow.sc-bkkr-popover{top:auto;bottom:-10px}.popover-bottom.sc-bkkr-popover-h .popover-arrow.sc-bkkr-popover::after{top:-6px}';var y=e("bkkr_popover",function(){function e(e){var o=this;t(this,e);this.didPresent=r(this,"bkkrPopoverDidPresent",7);this.willPresent=r(this,"bkkrPopoverWillPresent",7);this.willDismiss=r(this,"bkkrPopoverWillDismiss",7);this.didDismiss=r(this,"bkkrPopoverDidDismiss",7);this.presented=false;this.keyboardClose=true;this.backdropDismiss=true;this.showBackdrop=false;this.animated=true;this.onDismiss=function(e){e.stopPropagation();e.preventDefault();o.dismiss()};this.onBackdropTap=function(){o.dismiss(undefined,s)};this.onLifecycle=function(e){var t=o.usersElement;var r=x[e.type];if(t&&r){var i=new CustomEvent(r,{bubbles:false,cancelable:false,detail:e.detail});t.dispatchEvent(i)}}}e.prototype.connectedCallback=function(){p(this.el)};e.prototype.present=function(){return __awaiter(this,void 0,void 0,(function(){var e,t,r;return __generator(this,(function(o){switch(o.label){case 0:if(this.presented){return[2]}e=this.el.querySelector(".popover-content");if(!e){throw new Error("container is undefined")}t=Object.assign(Object.assign({},this.componentProps),{popover:this.el});r=this;return[4,u(this.delegate,e,this.component,["popover-viewport",this.el["s-sc"]],t)];case 1:r.usersElement=o.sent();return[4,h(this.usersElement)];case 2:o.sent();return[2,l(this,b,this.event)]}}))}))};e.prototype.dismiss=function(e,t){return __awaiter(this,void 0,void 0,(function(){var r;return __generator(this,(function(o){switch(o.label){case 0:return[4,c(this,e,t,m,this.event)];case 1:r=o.sent();if(!r)return[3,3];return[4,f(this.delegate,this.usersElement)];case 2:o.sent();o.label=3;case 3:return[2,r]}}))}))};e.prototype.onDidDismiss=function(){return d(this.el,"bkkrPopoverDidDismiss")};e.prototype.onWillDismiss=function(){return d(this.el,"bkkrPopoverWillDismiss")};e.prototype.render=function(){var e=this.onLifecycle;return o(i,{"aria-modal":"true","no-router":true,tabindex:"-1",style:{zIndex:""+(2e4+this.overlayIndex)},class:Object.assign({},v(this.cssClass)),onBkkrPopoverDidPresent:e,onBkkrPopoverWillPresent:e,onBkkrPopoverWillDismiss:e,onBkkrPopoverDidDismiss:e,onBkkrDismiss:this.onDismiss,onBkkrBackdropTap:this.onBackdropTap},o("bkkr-backdrop",{tappable:this.backdropDismiss,visible:this.showBackdrop}),o("div",{tabindex:"0"}),o("div",{class:"popover-wrapper bkkr-overlay-wrapper"},o("div",{class:"popover-arrow"}),o("div",{class:"popover-content"})),o("div",{tabindex:"0"}))};Object.defineProperty(e.prototype,"el",{get:function(){return n(this)},enumerable:false,configurable:true});return e}());var x={bkkrPopoverDidPresent:"bkkrViewDidEnter",bkkrPopoverWillPresent:"bkkrViewWillEnter",bkkrPopoverWillDismiss:"bkkrViewWillLeave",bkkrPopoverDidDismiss:"bkkrViewDidLeave"};y.style=w}}}));