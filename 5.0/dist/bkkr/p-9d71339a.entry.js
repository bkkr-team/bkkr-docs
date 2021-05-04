import{r as t,c as o,h as i,H as e,g as r}from"./p-856de026.js";import{a as s,d as a}from"./p-7a743ff9.js";import{g as p,r as n}from"./p-c2089e63.js";import{B as h,b as d,c,e as l,f as v}from"./p-890f3fde.js";import{g as b}from"./p-c50c697b.js";import{d as k}from"./p-fce6d3d2.js";import{c as m}from"./p-096ce696.js";import"./p-9b065740.js";const x=(t,o)=>{let i="top",e="left";const r=p(t),s=r.querySelector(".popover-content"),a=s.getBoundingClientRect().height,n=t.ownerDocument.defaultView.innerWidth,h=t.ownerDocument.defaultView.innerHeight,d=o&&o.target&&o.target.getBoundingClientRect(),c=d&&d.width||n/2,l=d&&d.height||0,v=null!=d&&"top"in d?d.top:h/2-a/2,b=null!=d&&"left"in d?d.left:n/2-Math.max(c,250)/2,k=r.querySelector(".popover-arrow"),x=k.getBoundingClientRect(),f=x.width,u=x.height;null==d&&(k.style.display="none");const g={top:v+l,left:b+c/2-f/2},D={top:v+l+(u-1),left:b,width:Math.max(c,250)};let y=!1,P=!1;D.left<w?(y=!0,D.left=w):D.width+w+D.left>n&&(P=!0,D.left=n-D.width-w,e="right"),v+l+a>h&&v-a>0?(g.top=v-(u+1),D.top=v-a-(u-1),t.className=t.className+" popover-bottom",i="bottom"):v+l+(u+1)+a>h&&(s.style.bottom=w+"%"),k.style.top=g.top+"px",k.style.left=g.left+"px",s.style.top=D.top+"px",s.style.left=D.left+"px",s.style.maxWidth=D.width+"px",y&&(s.style.left=`calc(${w}px + var(--safe-area-left, 0px))`),P&&(s.style.right=`calc(${w}px - var(--safe-area-right, 0px))`),s.style.transformOrigin=i+" "+e;const j=m(),W=m(),B=m();return W.addElement(r.querySelector("bkkr-backdrop")).fromTo("opacity",0,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),B.addElement(r.querySelector(".popover-wrapper")).fromTo("opacity",.01,1),j.easing("ease").duration(200).addAnimation([W,B])},w=8,f=t=>{const o=p(t),i=m(),e=m(),r=m();return e.addElement(o.querySelector("bkkr-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0),r.addElement(o.querySelector(".popover-wrapper")).fromTo("opacity",.99,0),i.easing("ease").duration(200).addAnimation([e,r])},u=class{constructor(i){t(this,i),this.didPresent=o(this,"bkkrPopoverDidPresent",7),this.willPresent=o(this,"bkkrPopoverWillPresent",7),this.willDismiss=o(this,"bkkrPopoverWillDismiss",7),this.didDismiss=o(this,"bkkrPopoverDidDismiss",7),this.didPresentShorthand=o(this,"didPresent",7),this.willPresentShorthand=o(this,"willPresent",7),this.willDismissShorthand=o(this,"willDismiss",7),this.didDismissShorthand=o(this,"didDismiss",7),this.popoverIndex=D++,this.coreDelegate=(()=>{let t;return{attachViewToDom:o=>{t=o;const i=document.querySelector("bkkr-root")||document.body;return i&&t&&i.appendChild(t),t},removeViewFromDom:()=>(t&&t.remove(),Promise.resolve())}})(),this.presented=!1,this.inline=!1,this.keyboardClose=!0,this.backdropDismiss=!0,this.showBackdrop=!1,this.animated=!0,this.isOpen=!1,this.onDismiss=t=>{t.stopPropagation(),t.preventDefault(),this.dismiss()},this.onBackdropTap=()=>{this.dismiss(void 0,h)},this.onLifecycle=t=>{const o=this.usersElement,i=g[t.type];if(o&&i){const e=new CustomEvent(i,{bubbles:!1,cancelable:!1,detail:t.detail});o.dispatchEvent(e)}}}onIsOpenChange(t,o){!0===t&&!1===o?this.present():!1===t&&!0===o&&this.dismiss()}connectedCallback(){d(this.el)}componentWillLoad(){this.popoverId=this.el.hasAttribute("id")?this.el.getAttribute("id"):`bkkr-popover-${this.popoverIndex}`}componentDidLoad(){!0===this.isOpen&&n((()=>this.present()))}async present(){if(this.presented)return;void 0!==this.currentTransition&&await this.currentTransition;const t=Object.assign(Object.assign({},this.componentProps),{popover:this.el}),o=this.inline?this.delegate||this.coreDelegate:this.delegate;this.usersElement=await s(o,this.el,this.component,["popover-viewport"],t,this.inline),await k(this.usersElement),this.currentTransition=c(this,x,this.event),await this.currentTransition,this.currentTransition=void 0}async dismiss(t,o){void 0!==this.currentTransition&&await this.currentTransition,this.currentTransition=l(this,t,o,f,this.event);const i=await this.currentTransition;return i&&await a(this.delegate,this.usersElement),this.currentTransition=void 0,i}onDidDismiss(){return v(this.el,"bkkrPopoverDidDismiss")}onWillDismiss(){return v(this.el,"bkkrPopoverWillDismiss")}render(){const{onLifecycle:t,presented:o,popoverId:r}=this;return i(e,{"aria-modal":"true","no-router":!0,tabindex:"-1",style:{zIndex:`${2e4+this.overlayIndex}`},id:r,class:Object.assign(Object.assign({},b(this.cssClass)),{"overlay-hidden":!0,"popover-interactive":o}),onBkkrPopoverDidPresent:t,onBkkrPopoverWillPresent:t,onBkkrPopoverWillDismiss:t,onBkkrPopoverDidDismiss:t,onBkkrDismiss:this.onDismiss,onBkkrBackdropTap:this.onBackdropTap},i("bkkr-backdrop",{part:"backdrop",tappable:this.backdropDismiss,visible:this.showBackdrop}),i("div",{tabindex:"0"}),i("div",{class:"popover-wrapper bkkr-overlay-wrapper"},i("div",{class:"popover-arrow",part:"arrow"}),i("div",{class:"popover-content",part:"content"},i("slot",null))),i("div",{tabindex:"0"}))}get el(){return r(this)}static get watchers(){return{isOpen:["onIsOpenChange"]}}},g={bkkrPopoverDidPresent:"bkkrViewDidEnter",bkkrPopoverWillPresent:"bkkrViewWillEnter",bkkrPopoverWillDismiss:"bkkrViewWillLeave",bkkrPopoverDidDismiss:"bkkrViewDidLeave"};let D=0;u.style=':host{--background:var(--bkkr-overlay-background, var(--bkkr-background-color, #fff));--min-width:250px;--min-height:0;--max-width:calc(100% - var(--bkkr-spacer));--height:auto;--width:100%;--max-height:90%;--box-shadow:0 15px 25px 0 rgba(var(--box-shadow-color, 0, 0, 0), 0.1), 0 6px 20px 0 rgba(var(--box-shadow-color, 0, 0, 0), 0.12), 0 13.2px 40px 0 rgba(var(--box-shadow-color, 0, 0, 0), 0.08);--backdrop-opacity:0;top:0;right:0;bottom:0;left:0;display:-ms-flexbox;display:flex;position:fixed;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;color:var(--bkkr-text-color, #000);z-index:1001;pointer-events:none}:host(.popover-interactive) .popover-content,:host(.popover-interactive) bkkr-backdrop{pointer-events:auto}:host(.overlay-hidden){display:none}.popover-wrapper{opacity:0;z-index:10}.popover-content{border-radius:1em;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:auto;z-index:10}.popover-viewport{--safe-area-top:0px;--safe-area-right:0px;--safe-area-bottom:0px;--safe-area-left:0px}.popover-viewport bkkr-content{padding-top:0;padding-bottom:0}.popover-arrow{display:block;position:absolute;width:20px;height:10px;overflow:hidden;z-index:11}.popover-arrow::after{top:3px;left:3px;border-radius:3px;position:absolute;width:14px;height:14px;-webkit-transform:rotate(45deg);transform:rotate(45deg);background:var(--background);content:"";z-index:10}:host(.popover-bottom) .popover-arrow{top:auto;bottom:-10px}:host(.popover-bottom) .popover-arrow::after{top:-6px}';export{u as bkkr_popover}