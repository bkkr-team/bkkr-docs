var __awaiter=this&&this.__awaiter||function(t,e,r,n){function i(t){return t instanceof r?t:new r((function(e){e(t)}))}return new(r||(r=Promise))((function(r,a){function o(t){try{l(n.next(t))}catch(t){a(t)}}function s(t){try{l(n["throw"](t))}catch(t){a(t)}}function l(t){t.done?r(t.value):i(t.value).then(o,s)}l((n=n.apply(t,e||[])).next())}))};var __generator=this&&this.__generator||function(t,e){var r={label:0,sent:function(){if(a[0]&1)throw a[1];return a[1]},trys:[],ops:[]},n,i,a,o;return o={next:s(0),throw:s(1),return:s(2)},typeof Symbol==="function"&&(o[Symbol.iterator]=function(){return this}),o;function s(t){return function(e){return l([t,e])}}function l(o){if(n)throw new TypeError("Generator is already executing.");while(r)try{if(n=1,i&&(a=o[0]&2?i["return"]:o[0]?i["throw"]||((a=i["return"])&&a.call(i),0):i.next)&&!(a=a.call(i,o[1])).done)return a;if(i=0,a)o=[o[0]&2,a.value];switch(o[0]){case 0:case 1:a=o;break;case 4:r.label++;return{value:o[1],done:false};case 5:r.label++;i=o[1];o=[0];continue;case 7:o=r.ops.pop();r.trys.pop();continue;default:if(!(a=r.trys,a=a.length>0&&a[a.length-1])&&(o[0]===6||o[0]===2)){r=0;continue}if(o[0]===3&&(!a||o[1]>a[0]&&o[1]<a[3])){r.label=o[1];break}if(o[0]===6&&r.label<a[1]){r.label=a[1];a=o;break}if(a&&r.label<a[2]){r.label=a[2];r.ops.push(o);break}if(a[2])r.ops.pop();r.trys.pop();continue}o=e.call(t,r)}catch(t){o=[6,t];i=0}finally{n=a=0}if(o[0]&5)throw o[1];return{value:o[0]?o[1]:void 0,done:true}}};System.register(["./p-90bb25f5.system.js","./p-4c5bd054.system.js","./p-23b96d66.system.js","./p-41dd7f22.system.js","./p-b9ae5f46.system.js"],(function(t){"use strict";var e,r,n,i,a,o,s,l,d,c,p,u;return{setters:[function(t){e=t.r;r=t.e;n=t.h;i=t.H;a=t.g},function(t){o=t.s;s=t.g},function(){},function(t){l=t.p;d=t.a;c=t.d;p=t.e},function(t){u=t.c}],execute:function(){var h=function(t,e){var r=u();var n=u();var i=t.host||t;var a=t.querySelector(".loading-wrapper");var o="calc(-10px - var(--safe-area-bottom, 0px))";var s="calc(10px + var(--safe-area-top, 0px))";n.addElement(a);switch(e){case"top":n.fromTo("transform","translate3d(-50%, -200%, 0)","translate3d(-50%, "+s+", 0)");break;case"middle":var l="50%";a.style.top=""+l;n.fromTo("opacity",.01,1);break;default:n.fromTo("transform","translate3d(-50%, 200%, 0)","translate3d(-50%, "+o+", 0)");break}return r.addElement(i).easing("cubic-bezier(.155,1.105,.295,1.12)").duration(400).addAnimation(n)};var f=function(t,e){var r=u();var n=u();var i=t.host||t;var a=t.querySelector(".loading-wrapper");var o="calc(-10px - var(--safe-area-bottom, 0px))";var s="calc(10px + var(--safe-area-top, 0px))";n.addElement(a);switch(e){case"top":n.fromTo("transform","translate3d(-50%, "+s+", 0)","translate3d(-50%, -200%, 0)");break;case"middle":n.fromTo("opacity",.99,0);break;default:n.fromTo("transform","translate3d(-50%, "+o+", 0)","translate3d(-50%, 200%, 0)");break}return r.addElement(i).easing("cubic-bezier(.36,.66,.04,1)").duration(300).addAnimation(n)};var g=":host{--border-width:0;--border-style:none;--border-color:initial;--box-shadow:0 0 30px 10px rgba(0, 0, 0, .1);--min-width:auto;--width:auto;--min-height:auto;--height:auto;--max-height:auto;--white-space:pre-wrap;--background:var(--bkkr-background-color, #fff);--border-radius:32px;top:0;left:0;display:block;position:absolute;width:100%;height:100%;outline:none;font-family:var(--default-font-sans-serif);contain:strict;z-index:1050;pointer-events:none}:host-context(bkkr-content){--safe-area-top:0px;--safe-area-bottom:0px}.loading.overlay-hidden{display:none}.loading-wrapper{border-radius:var(--border-radius);left:50%;margin-left:auto;margin-right:auto;margin-top:auto;margin-bottom:auto;display:block;position:absolute;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow)}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.loading-wrapper{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}.loading-container{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;height:inherit;min-height:inherit;max-height:inherit;pointer-events:auto;contain:content}.loading-content{padding-left:15px;padding-right:15px;padding-top:15px;padding-bottom:15px;display:-ms-flexbox;display:flex;-ms-flex:1;flex:1;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;text-align:center}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.loading-content{padding-left:unset;padding-right:unset;-webkit-padding-start:15px;padding-inline-start:15px;-webkit-padding-end:15px;padding-inline-end:15px}}.loading-wrapper.loading-top{top:0;-webkit-transform:translate3d(-50%, -200%, 0);transform:translate3d(-50%, -200%, 0)}.loading-wrapper.loading-middle{opacity:0.01}.loading-wrapper.loading-bottom{bottom:0;-webkit-transform:translate3d(-50%, 200%, 0);transform:translate3d(-50%, 200%, 0)}@media (any-hover: hover){.loading-button:hover{cursor:pointer}}";var m=t("bkkr_loading",function(){function t(t){e(this,t);this.didPresent=r(this,"loadingDidPresent",7);this.willPresent=r(this,"loadingWillPresent",7);this.willDismiss=r(this,"loadingWillDismiss",7);this.didDismiss=r(this,"loadingDidDismiss",7);this.presented=false;this.color="primary";this.spinner="crescent";this.keyboardClose=false;this.position="top";this.animated=true}t.prototype.connectedCallback=function(){l(this.el)};t.prototype.present=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){switch(t.label){case 0:return[4,d(this,h,this.position)];case 1:t.sent();return[2]}}))}))};t.prototype.dismiss=function(t,e){return c(this,t,e,f,this.position)};t.prototype.onDidDismiss=function(){return p(this.el,"loadingDidDismiss")};t.prototype.onWillDismiss=function(){return p(this.el,"loadingWillDismiss")};t.prototype.render=function(){var t;var e=this,r=e.color,a=e.cssClass,l=e.spinner,d=e.position;return n(i,{style:{zIndex:""+(6e4+this.overlayIndex)},class:o(r,Object.assign({},s(a))),tabindex:"-1"},n("div",{class:(t={"loading-wrapper":true},t["loading-"+d]=true,t)},n("div",{class:"loading-container",part:"container"},n("div",{class:"loading-content"},n("bkkr-spinner",{slot:"end",type:l,color:r})))))};Object.defineProperty(t.prototype,"el",{get:function(){return a(this)},enumerable:false,configurable:true});return t}());m.style=g}}}));