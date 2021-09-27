import{r as t,c as i,h as s,H as e,g as n}from"./p-a3958a94.js";import{c as h}from"./p-049a2213.js";import{g as o}from"./p-bac8255f.js";import{createGesture as a}from"./p-2cd93b5c.js";import{k as r,l as d,h as l}from"./p-c2089e63.js";import{m as c}from"./p-7fd35ff0.js";import{G as m}from"./p-a0421d09.js";import"./p-096ce696.js";const p=class{constructor(s){t(this,s),this.bkkrWillOpen=i(this,"bkkrWillOpen",7),this.bkkrWillClose=i(this,"bkkrWillClose",7),this.bkkrDidOpen=i(this,"bkkrDidOpen",7),this.bkkrDidClose=i(this,"bkkrDidClose",7),this.bkkrMenuChange=i(this,"bkkrMenuChange",7),this.lastOnEnd=0,this.blocker=m.createBlocker({disableScroll:!0}),this.isAnimating=!1,this._isOpen=!1,this.isPaneVisible=!1,this.isEndSide=!1,this.disabled=!1,this.side="start",this.swipeGesture=!0,this.maxEdgeStart=50}typeChanged(t,i){const s=this.contentEl;s&&(void 0!==i&&s.classList.remove(`menu-content-${i}`),s.classList.add(`menu-content-${t}`),s.removeAttribute("style")),this.menuInnerEl&&this.menuInnerEl.removeAttribute("style"),this.animation=void 0}disabledChanged(){this.updateState(),this.bkkrMenuChange.emit({disabled:this.disabled,open:this._isOpen})}sideChanged(){this.isEndSide=r(this.side)}swipeGestureChanged(){this.updateState()}async connectedCallback(){void 0===this.type&&(this.type=h.get("menuType","overlay"));const t=this.el.parentNode,i=void 0!==this.contentId?document.getElementById(this.contentId):t&&t.querySelector&&t.querySelector("[main]");i&&i.tagName?(this.el.contains(i)&&console.error('Menu: "contentId" should refer to the main view\'s ion-content, not the ion-content inside of the ion-menu.'),this.contentEl=i,i.classList.add("menu-content"),this.typeChanged(this.type,void 0),this.sideChanged(),c._register(this),this.gesture=a({el:document,gestureName:"menu-swipe",gesturePriority:30,threshold:10,blurOnStart:!0,canStart:async t=>this.canStart(t),onWillStart:()=>this.onWillStart(),onStart:()=>this.onStart(),onMove:t=>this.onMove(t),onEnd:t=>this.onEnd(t)}),this.updateState()):console.error('Menu: must have a "content" element to listen for drag events on.')}async componentDidLoad(){this.bkkrMenuChange.emit({disabled:this.disabled,open:this._isOpen}),this.updateState()}disconnectedCallback(){this.blocker.destroy(),c._unregister(this),this.animation&&this.animation.destroy(),this.gesture&&(this.gesture.destroy(),this.gesture=void 0),this.animation=void 0,this.contentEl=this.backdropEl=this.menuInnerEl=void 0}onSplitPaneChanged(t){this.isPaneVisible=t.detail.isPane(this.el),this.updateState()}onBackdropClick(t){this._isOpen&&this.lastOnEnd<t.timeStamp-100&&t.composedPath&&!t.composedPath().includes(this.menuInnerEl)&&(t.preventDefault(),t.stopPropagation(),this.close())}isOpen(){return Promise.resolve(this._isOpen)}isActive(){return Promise.resolve(this._isActive())}open(t=!0){return this.setOpen(!0,t)}close(t=!0){return this.setOpen(!1,t)}toggle(t=!0){return this.setOpen(!this._isOpen,t)}setOpen(t,i=!0){return c._setOpen(this,t,i)}async _setOpen(t,i=!0){return!(!this._isActive()||this.isAnimating||t===this._isOpen||(this.beforeAnimation(t),await this.loadAnimation(),await this.startAnimation(t,i),this.afterAnimation(t),0))}async loadAnimation(){const t=this.menuInnerEl.offsetWidth;t===this.width&&void 0!==this.animation||(this.width=t,this.animation&&(this.animation.destroy(),this.animation=void 0),this.animation=await c._createAnimation(this.type,this),this.animation.fill("both"))}async startAnimation(t,i){const s=!t,e=this.animation.direction(s?"reverse":"normal").easing(s?"cubic-bezier(1, 0, 0.68, 0.28)":"cubic-bezier(0.32,0.72,0,1)").onFinish((()=>{"reverse"===e.getDirection()&&e.direction("normal")}));i?await e.play():e.play({sync:!0})}_isActive(){return!this.disabled&&!this.isPaneVisible}canSwipe(){return this.swipeGesture&&!this.isAnimating&&this._isActive()}canStart(t){return!(document.querySelector("bkkr-modal.show-modal")||!this.canSwipe())&&(!!this._isOpen||!c._getOpenSync()&&b(window,t.currentX,this.isEndSide,this.maxEdgeStart))}onWillStart(){return this.beforeAnimation(!this._isOpen),this.loadAnimation()}onStart(){this.isAnimating&&this.animation?this.animation.progressStart(!0,this._isOpen?1:0):d(!1,"isAnimating has to be true")}onMove(t){if(!this.isAnimating||!this.animation)return void d(!1,"isAnimating has to be true");const i=u(t.deltaX,this._isOpen,this.isEndSide)/this.width;this.animation.progressStep(this._isOpen?1-i:i)}onEnd(t){if(!this.isAnimating||!this.animation)return void d(!1,"isAnimating has to be true");const i=this._isOpen,s=this.isEndSide,e=u(t.deltaX,i,s),n=this.width,h=e/n,a=t.velocityX,r=n/2,c=a>=0&&(a>.2||t.deltaX>r),m=a<=0&&(a<-.2||t.deltaX<-r),p=i?s?c:m:s?m:c;let b=!i&&p;i&&!p&&(b=!0),this.lastOnEnd=t.currentTime;let w=p?.001:-.001;w+=o([0,0],[.4,0],[.6,1],[1,1],l(0,h<0?.01:h,.9999))[0]||0;const k=this._isOpen?!p:p;this.animation.easing("cubic-bezier(0.4, 0.0, 0.6, 1)").onFinish((()=>this.afterAnimation(b)),{oneTimeCallback:!0}).progressEnd(k?1:0,this._isOpen?1-w:w,300)}beforeAnimation(t){d(!this.isAnimating,"_before() should not be called while animating"),this.el.classList.add(w),this.backdropEl&&this.backdropEl.classList.add(k),this.blocker.block(),this.isAnimating=!0,t?this.bkkrWillOpen.emit():this.bkkrWillClose.emit()}afterAnimation(t){d(this.isAnimating,"_before() should be called while animating"),this._isOpen=t,this.isAnimating=!1,this._isOpen||this.blocker.unblock(),t?(this.contentEl&&this.contentEl.classList.add(v),this.bkkrDidOpen.emit()):(this.el.classList.remove(w),this.contentEl&&this.contentEl.classList.remove(v),this.backdropEl&&this.backdropEl.classList.remove(k),this.animation&&this.animation.stop(),this.bkkrDidClose.emit())}updateState(){const t=this._isActive();this.gesture&&this.gesture.enable(t&&this.swipeGesture),!t&&this._isOpen&&this.forceClosing(),this.disabled||c._setActiveMenu(this),d(!this.isAnimating,"can not be animating")}forceClosing(){d(this._isOpen,"menu cannot be closed"),this.isAnimating=!0,this.animation.direction("reverse").play({sync:!0}),this.afterAnimation(!1)}render(){const{isEndSide:t,type:i,disabled:n,isPaneVisible:h}=this;return s(e,{role:"navigation",class:{[`menu-type-${i}`]:!0,"menu-enabled":!n,"menu-side-end":t,"menu-side-start":!t,"menu-pane-visible":h}},s("div",{class:"menu-inner",part:"container",ref:t=>this.menuInnerEl=t},s("slot",null)),s("bkkr-backdrop",{ref:t=>this.backdropEl=t,class:"menu-backdrop",tappable:!1,stopPropagation:!1,part:"backdrop"}))}get el(){return n(this)}},u=(t,i,s)=>Math.max(0,i!==s?-t:t),b=(t,i,s,e)=>s?i>=t.innerWidth-e:i<=e,w="show-menu",k="show-backdrop",v="menu-content-open";p.style=":host{--width:264px;--min-width:auto;--max-width:auto;--height:100%;--background:var(--bkkr-background-color, #fff);--box-shadow:0 15px 25px 0 rgba(var(--box-shadow-color, 0, 0, 0), 0.1), 0 6px 20px 0 rgba(var(--box-shadow-color, 0, 0, 0), 0.12), 0 13.2px 40px 0 rgba(var(--box-shadow-color, 0, 0, 0), 0.08);--backdrop-opacity:var(--bkkr-backdrop-opacity, .3);top:0;right:0;bottom:0;left:0;display:none;position:absolute;contain:size style}:host(.show-menu){display:block}.menu-inner{top:0;right:auto;bottom:0;left:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:justify;justify-content:space-between;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);-webkit-transform:translate3d(-9999px, 0, 0);transform:translate3d(-9999px, 0, 0);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);contain:size style;z-index:1000}:host(.menu-side-start) .menu-inner{--safe-area-right:0px;right:auto;left:0}:host(.menu-side-end) .menu-inner{--safe-area-left:0px;right:0;left:auto}bkkr-backdrop{display:none;z-index:-1}:host(.menu-type-reveal){z-index:0}:host(.menu-type-reveal.show-menu) .menu-inner{-webkit-transform:translate3d(0, 0, 0);transform:translate3d(0, 0, 0)}:host(.menu-type-overlay){z-index:100}:host(.menu-type-overlay) .show-backdrop{display:block;cursor:pointer}:host(.menu-pane-visible){width:var(--width);min-width:var(--min-width);max-width:var(--max-width)}:host(.menu-pane-visible) .menu-inner{top:0;bottom:0;width:100%;-webkit-transform:none !important;transform:none !important;-webkit-box-shadow:none !important;box-shadow:none !important}:host(.menu-pane-visible) ion-backdrop{display:hidden !important;}";export{p as bkkr_menu}