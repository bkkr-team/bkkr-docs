var __awaiter=this&&this.__awaiter||function(t,e,i,n){function r(t){return t instanceof i?t:new i((function(e){e(t)}))}return new(i||(i=Promise))((function(i,s){function o(t){try{u(n.next(t))}catch(t){s(t)}}function a(t){try{u(n["throw"](t))}catch(t){s(t)}}function u(t){t.done?i(t.value):r(t.value).then(o,a)}u((n=n.apply(t,e||[])).next())}))};var __generator=this&&this.__generator||function(t,e){var i={label:0,sent:function(){if(s[0]&1)throw s[1];return s[1]},trys:[],ops:[]},n,r,s,o;return o={next:a(0),throw:a(1),return:a(2)},typeof Symbol==="function"&&(o[Symbol.iterator]=function(){return this}),o;function a(t){return function(e){return u([t,e])}}function u(o){if(n)throw new TypeError("Generator is already executing.");while(i)try{if(n=1,r&&(s=o[0]&2?r["return"]:o[0]?r["throw"]||((s=r["return"])&&s.call(r),0):r.next)&&!(s=s.call(r,o[1])).done)return s;if(r=0,s)o=[o[0]&2,s.value];switch(o[0]){case 0:case 1:s=o;break;case 4:i.label++;return{value:o[1],done:false};case 5:i.label++;r=o[1];o=[0];continue;case 7:o=i.ops.pop();i.trys.pop();continue;default:if(!(s=i.trys,s=s.length>0&&s[s.length-1])&&(o[0]===6||o[0]===2)){i=0;continue}if(o[0]===3&&(!s||o[1]>s[0]&&o[1]<s[3])){i.label=o[1];break}if(o[0]===6&&i.label<s[1]){i.label=s[1];s=o;break}if(s&&i.label<s[2]){i.label=s[2];i.ops.push(o);break}if(s[2])i.ops.pop();i.trys.pop();continue}o=e.call(t,i)}catch(t){o=[6,t];r=0}finally{n=s=0}if(o[0]&5)throw o[1];return{value:o[0]?o[1]:void 0,done:true}}};System.register(["./p-b25c886d.system.js","./p-d0d1fdbb.system.js","./p-96cdd33f.system.js","./p-0b5de7fa.system.js","./p-b06466bf.system.js","./p-86739731.system.js","./p-c510aef9.system.js"],(function(t){"use strict";var e,i,n,r,s,o,a,u,h,l,c,d;return{setters:[function(t){e=t.r;i=t.e;n=t.h;r=t.H;s=t.g},function(t){o=t.k;a=t.l;u=t.h},function(){},function(t){h=t.g},function(t){l=t.G},function(t){c=t.createGesture},function(t){d=t.m}],execute:function(){var p=":host{--width:264px;--min-width:auto;--max-width:auto;--height:100%;--background:var(--bkkr-background-color, #fff);--box-shadow:0 15px 25px 0 rgba(var(--box-shadow-color, 0, 0, 0), 0.1), 0 6px 20px 0 rgba(var(--box-shadow-color, 0, 0, 0), 0.12), 0 13.2px 40px 0 rgba(var(--box-shadow-color, 0, 0, 0), 0.08);--backdrop-opacity:var(--bkkr-backdrop-opacity, .3);top:0;right:0;bottom:0;left:0;display:none;position:absolute;contain:size style}:host(.show-menu){display:block}.menu-inner{top:0;right:auto;bottom:0;left:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:justify;justify-content:space-between;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);-webkit-transform:translate3d(-9999px, 0, 0);transform:translate3d(-9999px, 0, 0);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);contain:size style;z-index:1000}:host(.menu-side-start) .menu-inner{--safe-area-right:0px;right:auto;left:0}:host(.menu-side-end) .menu-inner{--safe-area-left:0px;right:0;left:auto}bkkr-backdrop{display:none;z-index:-1}:host(.menu-type-reveal){z-index:0}:host(.menu-type-reveal.show-menu) .menu-inner{-webkit-transform:translate3d(0, 0, 0);transform:translate3d(0, 0, 0)}:host(.menu-type-overlay){z-index:100}:host(.menu-type-overlay) .show-backdrop{display:block;cursor:pointer}:host(.menu-pane-visible){width:var(--width);min-width:var(--min-width);max-width:var(--max-width)}:host(.menu-pane-visible) .menu-inner{top:0;bottom:0;width:100%;-webkit-transform:none !important;transform:none !important;-webkit-box-shadow:none !important;box-shadow:none !important}:host(.menu-pane-visible) ion-backdrop{display:hidden !important;}";var f=t("bkkr_menu",function(){function t(t){e(this,t);this.bkkrWillOpen=i(this,"bkkrWillOpen",7);this.bkkrWillClose=i(this,"bkkrWillClose",7);this.bkkrDidOpen=i(this,"bkkrDidOpen",7);this.bkkrDidClose=i(this,"bkkrDidClose",7);this.bkkrMenuChange=i(this,"bkkrMenuChange",7);this.lastOnEnd=0;this.blocker=l.createBlocker({disableScroll:true});this.isAnimating=false;this._isOpen=false;this.isPaneVisible=false;this.isEndSide=false;this.disabled=false;this.side="start";this.swipeGesture=true;this.maxEdgeStart=50}t.prototype.typeChanged=function(t,e){var i=this.contentEl;if(i){if(e!==undefined){i.classList.remove("menu-content-"+e)}i.classList.add("menu-content-"+t);i.removeAttribute("style")}if(this.menuInnerEl){this.menuInnerEl.removeAttribute("style")}this.animation=undefined};t.prototype.disabledChanged=function(){this.updateState();this.bkkrMenuChange.emit({disabled:this.disabled,open:this._isOpen})};t.prototype.sideChanged=function(){this.isEndSide=o(this.side)};t.prototype.swipeGestureChanged=function(){this.updateState()};t.prototype.connectedCallback=function(){return __awaiter(this,void 0,void 0,(function(){var t,e,i;var n=this;return __generator(this,(function(r){if(this.type===undefined){this.type="overlay"}t=this.el;e=t.parentNode;i=this.contentId!==undefined?document.getElementById(this.contentId):e&&e.querySelector&&e.querySelector("[main]");if(!i||!i.tagName){console.error('Menu: must have a "content" element to listen for drag events on.');return[2]}this.contentEl=i;i.classList.add("menu-content");this.typeChanged(this.type,undefined);this.sideChanged();d._register(this);this.gesture=c({el:document,gestureName:"menu-swipe",gesturePriority:30,threshold:10,blurOnStart:true,canStart:function(t){return __awaiter(n,void 0,void 0,(function(){return __generator(this,(function(e){return[2,this.canStart(t)]}))}))},onWillStart:function(){return n.onWillStart()},onStart:function(){return n.onStart()},onMove:function(t){return n.onMove(t)},onEnd:function(t){return n.onEnd(t)}});this.updateState();return[2]}))}))};t.prototype.componentDidLoad=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){this.bkkrMenuChange.emit({disabled:this.disabled,open:this._isOpen});this.updateState();return[2]}))}))};t.prototype.disconnectedCallback=function(){this.blocker.destroy();d._unregister(this);if(this.animation){this.animation.destroy()}if(this.gesture){this.gesture.destroy();this.gesture=undefined}this.animation=undefined;this.contentEl=this.backdropEl=this.menuInnerEl=undefined};t.prototype.onSplitPaneChanged=function(t){this.isPaneVisible=t.detail.isPane(this.el);this.updateState()};t.prototype.onBackdropClick=function(t){if(this._isOpen&&this.lastOnEnd<t.timeStamp-100){var e=t.composedPath?!t.composedPath().includes(this.menuInnerEl):false;if(e){t.preventDefault();t.stopPropagation();this.close()}}};t.prototype.isOpen=function(){return Promise.resolve(this._isOpen)};t.prototype.isActive=function(){return Promise.resolve(this._isActive())};t.prototype.open=function(t){if(t===void 0){t=true}return this.setOpen(true,t)};t.prototype.close=function(t){if(t===void 0){t=true}return this.setOpen(false,t)};t.prototype.toggle=function(t){if(t===void 0){t=true}return this.setOpen(!this._isOpen,t)};t.prototype.setOpen=function(t,e){if(e===void 0){e=true}return d._setOpen(this,t,e)};t.prototype._setOpen=function(t,e){if(e===void 0){e=true}return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(i){switch(i.label){case 0:if(!this._isActive()||this.isAnimating||t===this._isOpen){return[2,false]}this.beforeAnimation(t);return[4,this.loadAnimation()];case 1:i.sent();return[4,this.startAnimation(t,e)];case 2:i.sent();this.afterAnimation(t);return[2,true]}}))}))};t.prototype.loadAnimation=function(){return __awaiter(this,void 0,void 0,(function(){var t,e;return __generator(this,(function(i){switch(i.label){case 0:t=this.menuInnerEl.offsetWidth;if(t===this.width&&this.animation!==undefined){return[2]}this.width=t;if(this.animation){this.animation.destroy();this.animation=undefined}e=this;return[4,d._createAnimation(this.type,this)];case 1:e.animation=i.sent();this.animation.fill("both");return[2]}}))}))};t.prototype.startAnimation=function(t,e){return __awaiter(this,void 0,void 0,(function(){var i,n,r,s;return __generator(this,(function(o){switch(o.label){case 0:i=!t;n="cubic-bezier(0.32,0.72,0,1)";r="cubic-bezier(1, 0, 0.68, 0.28)";s=this.animation.direction(i?"reverse":"normal").easing(i?r:n).onFinish((function(){if(s.getDirection()==="reverse"){s.direction("normal")}}));if(!e)return[3,2];return[4,s.play()];case 1:o.sent();return[3,3];case 2:s.play({sync:true});o.label=3;case 3:return[2]}}))}))};t.prototype._isActive=function(){return!this.disabled&&!this.isPaneVisible};t.prototype.canSwipe=function(){return this.swipeGesture&&!this.isAnimating&&this._isActive()};t.prototype.canStart=function(t){var e=!!document.querySelector("bkkr-modal.show-modal");if(e||!this.canSwipe()){return false}if(this._isOpen){return true}else if(d._getOpenSync()){return false}return b(window,t.currentX,this.isEndSide,this.maxEdgeStart)};t.prototype.onWillStart=function(){this.beforeAnimation(!this._isOpen);return this.loadAnimation()};t.prototype.onStart=function(){if(!this.isAnimating||!this.animation){a(false,"isAnimating has to be true");return}this.animation.progressStart(true,this._isOpen?1:0)};t.prototype.onMove=function(t){if(!this.isAnimating||!this.animation){a(false,"isAnimating has to be true");return}var e=m(t.deltaX,this._isOpen,this.isEndSide);var i=e/this.width;this.animation.progressStep(this._isOpen?1-i:i)};t.prototype.onEnd=function(t){var e=this;if(!this.isAnimating||!this.animation){a(false,"isAnimating has to be true");return}var i=this._isOpen;var n=this.isEndSide;var r=m(t.deltaX,i,n);var s=this.width;var o=r/s;var l=t.velocityX;var c=s/2;var d=l>=0&&(l>.2||t.deltaX>c);var p=l<=0&&(l<-.2||t.deltaX<-c);var f=i?n?d:p:n?p:d;var b=!i&&f;if(i&&!f){b=true}this.lastOnEnd=t.currentTime;var v=f?.001:-.001;var y=o<0?.01:o;v+=h([0,0],[.4,0],[.6,1],[1,1],u(0,y,.9999))[0]||0;var g=this._isOpen?!f:f;this.animation.easing("cubic-bezier(0.4, 0.0, 0.6, 1)").onFinish((function(){return e.afterAnimation(b)}),{oneTimeCallback:true}).progressEnd(g?1:0,this._isOpen?1-v:v,300)};t.prototype.beforeAnimation=function(t){a(!this.isAnimating,"_before() should not be called while animating");this.el.classList.add(v);if(this.backdropEl){this.backdropEl.classList.add(y)}this.blocker.block();this.isAnimating=true;if(t){this.bkkrWillOpen.emit()}else{this.bkkrWillClose.emit()}};t.prototype.afterAnimation=function(t){a(this.isAnimating,"_before() should be called while animating");this._isOpen=t;this.isAnimating=false;if(!this._isOpen){this.blocker.unblock()}if(t){if(this.contentEl){this.contentEl.classList.add(g)}this.bkkrDidOpen.emit()}else{this.el.classList.remove(v);if(this.contentEl){this.contentEl.classList.remove(g)}if(this.backdropEl){this.backdropEl.classList.remove(y)}if(this.animation){this.animation.stop()}this.bkkrDidClose.emit()}};t.prototype.updateState=function(){var t=this._isActive();if(this.gesture){this.gesture.enable(t&&this.swipeGesture)}if(!t&&this._isOpen){this.forceClosing()}if(!this.disabled){d._setActiveMenu(this)}a(!this.isAnimating,"can not be animating")};t.prototype.forceClosing=function(){a(this._isOpen,"menu cannot be closed");this.isAnimating=true;var t=this.animation.direction("reverse");t.play({sync:true});this.afterAnimation(false)};t.prototype.render=function(){var t;var e=this;var i=this,s=i.isEndSide,o=i.type,a=i.disabled,u=i.isPaneVisible;return n(r,{role:"navigation",class:(t={},t["menu-type-"+o]=true,t["menu-enabled"]=!a,t["menu-side-end"]=s,t["menu-side-start"]=!s,t["menu-pane-visible"]=u,t)},n("div",{class:"menu-inner",part:"container",ref:function(t){return e.menuInnerEl=t}},n("slot",null)),n("bkkr-backdrop",{ref:function(t){return e.backdropEl=t},class:"menu-backdrop",tappable:false,stopPropagation:false,part:"backdrop"}))};Object.defineProperty(t.prototype,"el",{get:function(){return s(this)},enumerable:false,configurable:true});return t}());var m=function(t,e,i){return Math.max(0,e!==i?-t:t)};var b=function(t,e,i,n){if(i){return e>=t.innerWidth-n}else{return e<=n}};var v="show-menu";var y="show-backdrop";var g="menu-content-open";f.style=p}}}));