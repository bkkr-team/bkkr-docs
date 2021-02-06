import{r as t,e as i,h as s,H as e,g as n}from"./p-8dbe4215.js";import{j as h,e as o}from"./p-1498697d.js";import"./p-c132d639.js";import{g as a}from"./p-bac8255f.js";import{G as r}from"./p-fcb88322.js";import{createGesture as m}from"./p-83441745.js";import{m as d}from"./p-61faf617.js";const l=class{constructor(s){t(this,s),this.bkkrWillOpen=i(this,"bkkrWillOpen",7),this.bkkrWillClose=i(this,"bkkrWillClose",7),this.bkkrDidOpen=i(this,"bkkrDidOpen",7),this.bkkrDidClose=i(this,"bkkrDidClose",7),this.bkkrMenuChange=i(this,"bkkrMenuChange",7),this.lastOnEnd=0,this.blocker=r.createBlocker({disableScroll:!0}),this.isAnimating=!1,this._isOpen=!1,this.isPaneVisible=!1,this.isEndSide=!1,this.disabled=!1,this.side="start",this.swipeGesture=!0,this.maxEdgeStart=50}async connectedCallback(){void 0===this.type&&(this.type="overlay");const t=this.el.parentNode,i=void 0!==this.contentId?document.getElementById(this.contentId):t&&t.querySelector&&t.querySelector("[main]");i&&i.tagName?(this.contentEl=i,i.classList.add("menu-content"),d._register(this),this.gesture=m({el:document,gestureName:"menu-swipe",gesturePriority:30,threshold:10,blurOnStart:!0,canStart:t=>this.canStart(t),onWillStart:()=>this.onWillStart(),onStart:()=>this.onStart(),onMove:t=>this.onMove(t),onEnd:t=>this.onEnd(t)}),this.updateState()):console.error('Menu: must have a "content" element to listen for drag events on.')}async componentDidLoad(){this.bkkrMenuChange.emit({disabled:this.disabled,open:this._isOpen}),this.updateState()}disconnectedCallback(){this.blocker.destroy(),d._unregister(this),this.animation&&this.animation.destroy(),this.gesture&&(this.gesture.destroy(),this.gesture=void 0),this.animation=void 0,this.contentEl=this.backdropEl=this.menuInnerEl=void 0}onSplitPaneChanged(t){this.isPaneVisible=t.detail.isPane(this.el),this.updateState()}onBackdropClick(t){this._isOpen&&this.lastOnEnd<t.timeStamp-100&&t.composedPath&&!t.composedPath().includes(this.menuInnerEl)&&(t.preventDefault(),t.stopPropagation(),this.close())}isOpen(){return Promise.resolve(this._isOpen)}isActive(){return Promise.resolve(this._isActive())}open(t=!0){return this.setOpen(!0,t)}close(t=!0){return this.setOpen(!1,t)}toggle(t=!0){return this.setOpen(!this._isOpen,t)}setOpen(t,i=!0){return d._setOpen(this,t,i)}async _setOpen(t,i=!0){return!(!this._isActive()||this.isAnimating||t===this._isOpen||(this.beforeAnimation(t),await this.loadAnimation(),await this.startAnimation(t,i),this.afterAnimation(t),0))}async loadAnimation(){const t=this.menuInnerEl.offsetWidth;t===this.width&&void 0!==this.animation||(this.width=t,this.animation&&(this.animation.destroy(),this.animation=void 0),this.animation=await d._createAnimation(this.type,this),this.animation.fill("both"))}async startAnimation(t,i){const s=!t,e=this.animation.direction(s?"reverse":"normal").easing(s?"cubic-bezier(1, 0, 0.68, 0.28)":"cubic-bezier(0.32,0.72,0,1)").onFinish((()=>{"reverse"===e.getDirection()&&e.direction("normal")}));i?await e.play():e.play({sync:!0})}_isActive(){return!this.disabled&&!this.isPaneVisible}canSwipe(){return this.swipeGesture&&!this.isAnimating&&this._isActive()}canStart(t){return!(document.querySelector("bkkr-modal.show-modal")||!this.canSwipe())&&(!!this._isOpen||!d._getOpenSync()&&c(window,t.currentX,this.isEndSide,this.maxEdgeStart))}onWillStart(){return this.beforeAnimation(!this._isOpen),this.loadAnimation()}onStart(){this.isAnimating&&this.animation?this.animation.progressStart(!0,this._isOpen?1:0):h(!1,"isAnimating has to be true")}onMove(t){if(!this.isAnimating||!this.animation)return void h(!1,"isAnimating has to be true");const i=u(t.deltaX,this._isOpen,this.isEndSide)/this.width;this.animation.progressStep(this._isOpen?1-i:i)}onEnd(t){if(!this.isAnimating||!this.animation)return void h(!1,"isAnimating has to be true");const i=this._isOpen,s=this.isEndSide,e=u(t.deltaX,i,s),n=this.width,r=e/n,m=t.velocityX,d=n/2,l=m>=0&&(m>.2||t.deltaX>d),c=m<=0&&(m<-.2||t.deltaX<-d),p=i?s?l:c:s?c:l;let b=!i&&p;i&&!p&&(b=!0),this.lastOnEnd=t.currentTime;let w=p?.001:-.001;w+=a([0,0],[.4,0],[.6,1],[1,1],o(0,r<0?.01:r,.9999))[0]||0;const f=this._isOpen?!p:p;this.animation.easing("cubic-bezier(0.4, 0.0, 0.6, 1)").onFinish((()=>this.afterAnimation(b)),{oneTimeCallback:!0}).progressEnd(f?1:0,this._isOpen?1-w:w,300)}beforeAnimation(t){h(!this.isAnimating,"_before() should not be called while animating"),this.el.classList.add(p),this.backdropEl&&this.backdropEl.classList.add(b),this.blocker.block(),this.isAnimating=!0,t?this.bkkrWillOpen.emit():this.bkkrWillClose.emit()}afterAnimation(t){h(this.isAnimating,"_before() should be called while animating"),this._isOpen=t,this.isAnimating=!1,this._isOpen||this.blocker.unblock(),t?(this.contentEl&&this.contentEl.classList.add(w),this.bkkrDidOpen.emit()):(this.el.classList.remove(p),this.contentEl&&this.contentEl.classList.remove(w),this.backdropEl&&this.backdropEl.classList.remove(b),this.animation&&this.animation.stop(),this.bkkrDidClose.emit())}updateState(){const t=this._isActive();this.gesture&&this.gesture.enable(t&&this.swipeGesture),!t&&this._isOpen&&this.forceClosing(),this.disabled||d._setActiveMenu(this),h(!this.isAnimating,"can not be animating")}forceClosing(){h(this._isOpen,"menu cannot be closed"),this.isAnimating=!0,this.animation.direction("reverse").play({sync:!0}),this.afterAnimation(!1)}render(){const{isEndSide:t,type:i,disabled:n,isPaneVisible:h}=this;return s(e,{role:"navigation",class:{["menu-type-"+i]:!0,"menu-enabled":!n,"menu-side-end":t,"menu-side-start":!t,"menu-pane-visible":h}},s("div",{class:"menu-inner",part:"container",ref:t=>this.menuInnerEl=t},s("slot",null)),s("bkkr-backdrop",{ref:t=>this.backdropEl=t,class:"menu-backdrop",tappable:!1,stopPropagation:!1,part:"backdrop"}))}get el(){return n(this)}},u=(t,i,s)=>Math.max(0,i!==s?-t:t),c=(t,i,s,e)=>s?i>=t.innerWidth-e:i<=e,p="show-menu",b="show-backdrop",w="menu-content-open";l.style=".menu,:host{--width:264px;--min-width:auto;--max-width:auto;--height:100%;--background:#fff;top:0;right:0;bottom:0;left:0;display:none;position:absolute;contain:size style}.menu-inner{top:0;right:auto;bottom:0;left:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:justify;justify-content:space-between;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);-webkit-transform:translate3d(-9999px, 0, 0);transform:translate3d(-9999px, 0, 0);background:var(--background);contain:size style;z-index:1000}.show-menu,:host(.show-menu){display:block}.menu-side-start .menu-inner,:host(.menu-side-start) .menu-inner{--safe-area-right:0;right:auto;left:0}.menu-side-end .menu-inner,:host(.menu-side-end) .menu-inner{--safe-area-left:0;right:0;left:auto}bkkr-backdrop{display:none;opacity:0.01;z-index:-1}.menu-type-reveal,:host(.menu-type-reveal){z-index:0}.menu-type-reveal.show-menu .menu-inner,.show-menu:host(.menu-type-reveal) .menu-inner,.menu-type-reveal:host(.show-menu) .menu-inner,:host(.menu-type-reveal):host(.show-menu) .menu-inner{-webkit-transform:translate3d(0, 0, 0);transform:translate3d(0, 0, 0)}.menu-type-overlay,:host(.menu-type-overlay){z-index:100}.menu-type-overlay .show-backdrop,:host(.menu-type-overlay) .show-backdrop{display:block;cursor:pointer}:host(.menu-pane-visible){width:var(--width);min-width:var(--min-width);max-width:var(--max-width)}:host(.menu-pane-visible) .menu-inner{top:0;bottom:0;width:100%;-webkit-transform:none !important;transform:none !important;-webkit-box-shadow:none !important;box-shadow:none !important}:host(.menu-pane-visible) ion-backdrop{display:hidden !important;}";export{l as bkkr_menu}