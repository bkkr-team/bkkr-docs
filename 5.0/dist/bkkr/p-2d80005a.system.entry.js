var __awaiter=this&&this.__awaiter||function(t,e,r,n){function a(t){return t instanceof r?t:new r((function(e){e(t)}))}return new(r||(r=Promise))((function(r,i){function o(t){try{l(n.next(t))}catch(t){i(t)}}function s(t){try{l(n["throw"](t))}catch(t){i(t)}}function l(t){t.done?r(t.value):a(t.value).then(o,s)}l((n=n.apply(t,e||[])).next())}))};var __generator=this&&this.__generator||function(t,e){var r={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},n,a,i,o;return o={next:s(0),throw:s(1),return:s(2)},typeof Symbol==="function"&&(o[Symbol.iterator]=function(){return this}),o;function s(t){return function(e){return l([t,e])}}function l(o){if(n)throw new TypeError("Generator is already executing.");while(r)try{if(n=1,a&&(i=o[0]&2?a["return"]:o[0]?a["throw"]||((i=a["return"])&&i.call(a),0):a.next)&&!(i=i.call(a,o[1])).done)return i;if(a=0,i)o=[o[0]&2,i.value];switch(o[0]){case 0:case 1:i=o;break;case 4:r.label++;return{value:o[1],done:false};case 5:r.label++;a=o[1];o=[0];continue;case 7:o=r.ops.pop();r.trys.pop();continue;default:if(!(i=r.trys,i=i.length>0&&i[i.length-1])&&(o[0]===6||o[0]===2)){r=0;continue}if(o[0]===3&&(!i||o[1]>i[0]&&o[1]<i[3])){r.label=o[1];break}if(o[0]===6&&r.label<i[1]){r.label=i[1];i=o;break}if(i&&r.label<i[2]){r.label=i[2];r.ops.push(o);break}if(i[2])r.ops.pop();r.trys.pop();continue}o=e.call(t,r)}catch(t){o=[6,t];a=0}finally{n=i=0}if(o[0]&5)throw o[1];return{value:o[0]?o[1]:void 0,done:true}}};System.register(["./p-b25c886d.system.js","./p-d0d1fdbb.system.js","./p-96cdd33f.system.js","./p-999ed61e.system.js","./p-5e4b8ffe.system.js"],(function(t){"use strict";var e,r,n,a,i,o,s,l,d,c,p,u;return{setters:[function(t){e=t.r;r=t.e;n=t.h;a=t.H;i=t.g},function(){},function(t){o=t.c},function(t){s=t.b;l=t.c;d=t.e;c=t.f},function(t){p=t.s;u=t.g}],execute:function(){var h=function(t,e){var r=o();var n=o();var a=t.host||t;var i=t.querySelector(".loading-wrapper");var s="calc(-10px - var(--safe-area-bottom, 0px))";var l="calc(10px + var(--safe-area-top, 0px))";n.addElement(i);switch(e){case"top":n.fromTo("transform","translate3d(-50%, -200%, 0)","translate3d(-50%, "+l+", 0)");break;case"middle":var d="50%";i.style.top=""+d;n.fromTo("opacity",.01,1);break;default:n.fromTo("transform","translate3d(-50%, 200%, 0)","translate3d(-50%, "+s+", 0)");break}return r.addElement(a).easing("cubic-bezier(.155,1.105,.295,1.12)").duration(400).addAnimation(n)};var f=function(t,e){var r=o();var n=o();var a=t.host||t;var i=t.querySelector(".loading-wrapper");var s="calc(-10px - var(--safe-area-bottom, 0px))";var l="calc(10px + var(--safe-area-top, 0px))";n.addElement(i);switch(e){case"top":n.fromTo("transform","translate3d(-50%, "+l+", 0)","translate3d(-50%, -200%, 0)");break;case"middle":n.fromTo("opacity",.99,0);break;default:n.fromTo("transform","translate3d(-50%, "+s+", 0)","translate3d(-50%, 200%, 0)");break}return r.addElement(a).easing("cubic-bezier(.36,.66,.04,1)").duration(300).addAnimation(n)};var b=":host{--border-width:0;--border-style:none;--border-color:initial;--box-shadow:0 15px 25px 0 rgba(var(--box-shadow-color, 0, 0, 0), 0.1), 0 6px 20px 0 rgba(var(--box-shadow-color, 0, 0, 0), 0.12), 0 13.2px 40px 0 rgba(var(--box-shadow-color, 0, 0, 0), 0.08);--min-width:auto;--width:auto;--min-height:auto;--height:auto;--max-height:auto;--white-space:pre-wrap;--background:var(--bkkr-overlay-background, var(--bkkr-background-color, #fff));--border-radius:2em;top:0;left:0;display:block;position:absolute;width:100%;height:100%;outline:none;font-family:var(--bkkr-font-family);contain:strict;z-index:1001;pointer-events:none}:host-context(bkkr-content){--safe-area-top:0px;--safe-area-bottom:0px}:host(.overlay-hidden){display:none}.loading-wrapper{border-radius:var(--border-radius);left:50%;margin-left:auto;margin-right:auto;margin-top:auto;margin-bottom:auto;display:block;position:absolute;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow)}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.loading-wrapper{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}.loading-container{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;height:inherit;min-height:inherit;max-height:inherit;pointer-events:auto;contain:content}.loading-wrapper.loading-top{top:0;-webkit-transform:translate3d(-50%, -200%, 0);transform:translate3d(-50%, -200%, 0)}.loading-wrapper.loading-middle{opacity:0.01}.loading-wrapper.loading-bottom{bottom:0;-webkit-transform:translate3d(-50%, 200%, 0);transform:translate3d(-50%, 200%, 0)}.loading-content{padding-left:15px;padding-right:15px;padding-top:15px;padding-bottom:15px;display:-ms-flexbox;display:flex;-ms-flex:1;flex:1;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;text-align:center}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.loading-content{padding-left:unset;padding-right:unset;-webkit-padding-start:15px;padding-inline-start:15px;-webkit-padding-end:15px;padding-inline-end:15px}}";var g=t("bkkr_loading",function(){function t(t){e(this,t);this.didPresent=r(this,"loadingDidPresent",7);this.willPresent=r(this,"loadingWillPresent",7);this.willDismiss=r(this,"loadingWillDismiss",7);this.didDismiss=r(this,"loadingDidDismiss",7);this.presented=false;this.color="primary";this.spinner="crescent";this.keyboardClose=false;this.position="top";this.animated=true}t.prototype.connectedCallback=function(){s(this.el)};t.prototype.present=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){switch(t.label){case 0:return[4,l(this,h,this.position)];case 1:t.sent();return[2]}}))}))};t.prototype.dismiss=function(t,e){return d(this,t,e,f,this.position)};t.prototype.onDidDismiss=function(){return c(this.el,"loadingDidDismiss")};t.prototype.onWillDismiss=function(){return c(this.el,"loadingWillDismiss")};t.prototype.render=function(){var t;var e=this,r=e.color,i=e.cssClass,o=e.spinner,s=e.position;return n(a,{style:{zIndex:""+(6e4+this.overlayIndex)},class:p(r,Object.assign({},u(i))),tabindex:"-1"},n("div",{class:(t={"loading-wrapper":true},t["loading-"+s]=true,t)},n("div",{class:"loading-container",part:"container"},n("div",{class:"loading-content"},n("bkkr-spinner",{slot:"end",type:o,color:r})))))};Object.defineProperty(t.prototype,"el",{get:function(){return i(this)},enumerable:false,configurable:true});return t}());g.style=b}}}));