import{r as o,e as r,h as t,H as e,g as i}from"./p-8dbe4215.js";import"./p-ce719b56.js";import{c as s}from"./p-57e2bdf5.js";import"./p-9b065740.js";import{B as p,b as a,c as n,e as k,f as b}from"./p-8e9cb243.js";import{g as c}from"./p-09b2e663.js";import{a as d,d as h}from"./p-04115f59.js";import{d as l}from"./p-b3dd0ddb.js";const v=(o,r)=>{let t="top";const e=o.querySelector(".popover-content"),i=e.getBoundingClientRect().height,p=o.ownerDocument.defaultView.innerWidth,a=o.ownerDocument.defaultView.innerHeight,n=r&&r.target&&r.target.getBoundingClientRect(),k=null!=n&&"top"in n?n.top:a/2-i/2,b=null!=n&&"left"in n?n.left:p/2,c=n&&n.width||0,d=n&&n.height||0,h=o.querySelector(".popover-arrow"),l=h.getBoundingClientRect(),v=l.width,m=l.height;null==n&&(h.style.display="none");const w={top:k+d,left:b+c/2-v/2},f={top:k+d+(m-1),left:b,width:c};let u=!1;console.log(c+x+f.left>p),console.log(p),f.left<x&&(u=!0,f.left=x),k+d+i>a&&k-i>0?(w.top=k-(m+1),f.top=k-i-(m-1),o.className=o.className+" popover-bottom",t="bottom"):k+d+i>a&&(e.style.bottom=x+"%"),c>p&&(f.width=p-x),h.style.top=w.top+"px",h.style.left=w.left+"px",e.style.top=f.top+"px",e.style.width=f.width+"px",e.style.left=u?`calc(${f.left}px + var(--safe-area-left, 0px))`:f.left+"px",e.style.left=f.left+"px",e.style.transformOrigin=t+" left";const g=s(),y=s(),D=s();return y.addElement(o.querySelector("bkkr-backdrop")).fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),D.addElement(o.querySelector(".popover-wrapper")).fromTo("opacity",.01,1),g.addElement(o).easing("ease").duration(200).addAnimation([y,D])},x=8,m=o=>{const r=s(),t=s(),e=s();return t.addElement(o.querySelector("bkkr-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0),e.addElement(o.querySelector(".popover-wrapper")).fromTo("opacity",.99,0),r.addElement(o).easing("ease").duration(200).addAnimation([t,e])},w=class{constructor(t){o(this,t),this.didPresent=r(this,"bkkrPopoverDidPresent",7),this.willPresent=r(this,"bkkrPopoverWillPresent",7),this.willDismiss=r(this,"bkkrPopoverWillDismiss",7),this.didDismiss=r(this,"bkkrPopoverDidDismiss",7),this.presented=!1,this.keyboardClose=!0,this.backdropDismiss=!0,this.showBackdrop=!1,this.animated=!0,this.onDismiss=o=>{o.stopPropagation(),o.preventDefault(),this.dismiss()},this.onBackdropTap=()=>{this.dismiss(void 0,p)},this.onLifecycle=o=>{const r=this.usersElement,t=f[o.type];if(r&&t){const e=new CustomEvent(t,{bubbles:!1,cancelable:!1,detail:o.detail});r.dispatchEvent(e)}}}connectedCallback(){a(this.el)}async present(){if(this.presented)return;const o=this.el.querySelector(".popover-content");if(!o)throw new Error("container is undefined");const r=Object.assign(Object.assign({},this.componentProps),{popover:this.el});return this.usersElement=await d(this.delegate,o,this.component,["popover-viewport",this.el["s-sc"]],r),await l(this.usersElement),n(this,v,this.event)}async dismiss(o,r){const t=await k(this,o,r,m,this.event);return t&&await h(this.delegate,this.usersElement),t}onDidDismiss(){return b(this.el,"bkkrPopoverDidDismiss")}onWillDismiss(){return b(this.el,"bkkrPopoverWillDismiss")}render(){const{onLifecycle:o}=this;return t(e,{"aria-modal":"true","no-router":!0,tabindex:"-1",style:{zIndex:""+(2e4+this.overlayIndex)},class:Object.assign({},c(this.cssClass)),onBkkrPopoverDidPresent:o,onBkkrPopoverWillPresent:o,onBkkrPopoverWillDismiss:o,onBkkrPopoverDidDismiss:o,onBkkrDismiss:this.onDismiss,onBkkrBackdropTap:this.onBackdropTap},t("bkkr-backdrop",{tappable:this.backdropDismiss,visible:this.showBackdrop}),t("div",{tabindex:"0"}),t("div",{class:"popover-wrapper bkkr-overlay-wrapper"},t("div",{class:"popover-arrow"}),t("div",{class:"popover-content"})),t("div",{tabindex:"0"}))}get el(){return i(this)}},f={bkkrPopoverDidPresent:"bkkrViewDidEnter",bkkrPopoverWillPresent:"bkkrViewWillEnter",bkkrPopoverWillDismiss:"bkkrViewWillLeave",bkkrPopoverDidDismiss:"bkkrViewDidLeave"};w.style='.sc-bkkr-popover-h{--background:var(--bkkr-background-color, #fff);--min-width:0;--min-height:0;--max-width:auto;--height:auto;--width:calc(100% - var(--bkkr-spacer));--max-height:90%;--box-shadow:0 15px 25px 0 rgba(var(--box-shadow-color, var(--bkkr-text-color-rgb, 0, 0, 0)), 0.1), 0 6px 20px 0 rgba(var(--box-shadow-color, var(--bkkr-text-color-rgb, 0, 0, 0)), 0.12), 0 13.2px 40px 0 rgba(var(--box-shadow-color, var(--bkkr-text-color-rgb, 0, 0, 0)), 0.08);--backdrop-opacity:var(--bkkr-backdrop-opacity, .08);top:0;right:0;bottom:0;left:0;display:-ms-flexbox;display:flex;position:fixed;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;color:var(--bkkr-text-color, #000);z-index:1001}.overlay-hidden.sc-bkkr-popover-h{display:none}.popover-wrapper.sc-bkkr-popover{opacity:0;z-index:10}.popover-content.sc-bkkr-popover{border-radius:1em;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:auto;z-index:10}.popover-viewport.sc-bkkr-popover{--safe-area-top:0px;--safe-area-right:0px;--safe-area-bottom:0px;--safe-area-left:0px}.popover-viewport.sc-bkkr-popover bkkr-content.sc-bkkr-popover{padding-top:0;padding-bottom:0}.popover-arrow.sc-bkkr-popover{display:block;position:absolute;width:20px;height:10px;overflow:hidden;z-index:11}.popover-arrow.sc-bkkr-popover::after{top:3px;left:3px;border-radius:3px;position:absolute;width:14px;height:14px;-webkit-transform:rotate(45deg);transform:rotate(45deg);background:var(--background);content:"";z-index:10}.popover-bottom.sc-bkkr-popover-h .popover-arrow.sc-bkkr-popover{top:auto;bottom:-10px}.popover-bottom.sc-bkkr-popover-h .popover-arrow.sc-bkkr-popover::after{top:-6px}';export{w as bkkr_popover}