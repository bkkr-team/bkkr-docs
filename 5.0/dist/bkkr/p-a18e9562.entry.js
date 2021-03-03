import{r as o,e as r,h as t,H as e,g as i}from"./p-8dfd188c.js";import"./p-63696788.js";import{c as s}from"./p-dd5dce47.js";import"./p-9b065740.js";import{B as p,b as a,c as n,e as k,f as c}from"./p-65134490.js";import{g as h}from"./p-c50c697b.js";import{a as b,d}from"./p-04115f59.js";import{d as v}from"./p-d0e2582b.js";const l=(o,r)=>{let t="top",e="left";const i=o.querySelector(".popover-content"),p=i.getBoundingClientRect().height,a=o.ownerDocument.defaultView.innerWidth,n=o.ownerDocument.defaultView.innerHeight,k=r&&r.target&&r.target.getBoundingClientRect(),c=k&&k.width||a/2,h=k&&k.height||0,b=null!=k&&"top"in k?k.top:n/2-p/2,d=null!=k&&"left"in k?k.left:a/2-Math.max(c,250)/2,v=o.querySelector(".popover-arrow"),l=v.getBoundingClientRect(),m=l.width,w=l.height;null==k&&(v.style.display="none");const f={top:b+h,left:d+c/2-m/2},u={top:b+h+(w-1),left:d,width:Math.max(c,250)};let g=!1,y=!1;u.left<x?(g=!0,u.left=x):u.width+x+u.left>a&&(y=!0,u.left=a-u.width-x,e="right"),b+h+p>n&&b-p>0?(f.top=b-(w+1),u.top=b-p-(w-1),o.className=o.className+" popover-bottom",t="bottom"):b+h+(w+1)+p>n&&(i.style.bottom=x+"%"),v.style.top=f.top+"px",v.style.left=f.left+"px",i.style.top=u.top+"px",i.style.left=u.left+"px",i.style.maxWidth=u.width+"px",g&&(i.style.left=`calc(${x}px + var(--safe-area-left, 0px))`),y&&(i.style.right=`calc(${x}px - var(--safe-area-right, 0px))`),i.style.transformOrigin=t+" "+e;const D=s(),P=s(),j=s();return P.addElement(o.querySelector("bkkr-backdrop")).fromTo("opacity",0,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),j.addElement(o.querySelector(".popover-wrapper")).fromTo("opacity",.01,1),D.addElement(o).easing("ease").duration(200).addAnimation([P,j])},x=8,m=o=>{const r=s(),t=s(),e=s();return t.addElement(o.querySelector("bkkr-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0),e.addElement(o.querySelector(".popover-wrapper")).fromTo("opacity",.99,0),r.addElement(o).easing("ease").duration(200).addAnimation([t,e])},w=class{constructor(t){o(this,t),this.didPresent=r(this,"bkkrPopoverDidPresent",7),this.willPresent=r(this,"bkkrPopoverWillPresent",7),this.willDismiss=r(this,"bkkrPopoverWillDismiss",7),this.didDismiss=r(this,"bkkrPopoverDidDismiss",7),this.presented=!1,this.keyboardClose=!0,this.backdropDismiss=!0,this.showBackdrop=!1,this.animated=!0,this.onDismiss=o=>{o.stopPropagation(),o.preventDefault(),this.dismiss()},this.onBackdropTap=()=>{this.dismiss(void 0,p)},this.onLifecycle=o=>{const r=this.usersElement,t=f[o.type];if(r&&t){const e=new CustomEvent(t,{bubbles:!1,cancelable:!1,detail:o.detail});r.dispatchEvent(e)}}}connectedCallback(){a(this.el)}async present(){if(this.presented)return;const o=this.el.querySelector(".popover-content");if(!o)throw new Error("container is undefined");const r=Object.assign(Object.assign({},this.componentProps),{popover:this.el});return this.usersElement=await b(this.delegate,o,this.component,["popover-viewport",this.el["s-sc"]],r),await v(this.usersElement),n(this,l,this.event)}async dismiss(o,r){const t=await k(this,o,r,m,this.event);return t&&await d(this.delegate,this.usersElement),t}onDidDismiss(){return c(this.el,"bkkrPopoverDidDismiss")}onWillDismiss(){return c(this.el,"bkkrPopoverWillDismiss")}render(){const{onLifecycle:o}=this;return t(e,{"aria-modal":"true","no-router":!0,tabindex:"-1",style:{zIndex:`${2e4+this.overlayIndex}`},class:Object.assign({},h(this.cssClass)),onBkkrPopoverDidPresent:o,onBkkrPopoverWillPresent:o,onBkkrPopoverWillDismiss:o,onBkkrPopoverDidDismiss:o,onBkkrDismiss:this.onDismiss,onBkkrBackdropTap:this.onBackdropTap},t("bkkr-backdrop",{tappable:this.backdropDismiss,visible:this.showBackdrop}),t("div",{tabindex:"0"}),t("div",{class:"popover-wrapper bkkr-overlay-wrapper"},t("div",{class:"popover-arrow"}),t("div",{class:"popover-content"})),t("div",{tabindex:"0"}))}get el(){return i(this)}},f={bkkrPopoverDidPresent:"bkkrViewDidEnter",bkkrPopoverWillPresent:"bkkrViewWillEnter",bkkrPopoverWillDismiss:"bkkrViewWillLeave",bkkrPopoverDidDismiss:"bkkrViewDidLeave"};w.style='.sc-bkkr-popover-h{--background:var(--bkkr-overlay-background, var(--bkkr-background-color, #fff));--min-width:250px;--min-height:0;--max-width:calc(100% - var(--bkkr-spacer));--height:auto;--width:100%;--max-height:90%;--box-shadow:0 15px 25px 0 rgba(var(--box-shadow-color, 0, 0, 0), 0.1), 0 6px 20px 0 rgba(var(--box-shadow-color, 0, 0, 0), 0.12), 0 13.2px 40px 0 rgba(var(--box-shadow-color, 0, 0, 0), 0.08);--backdrop-opacity:var(--bkkr-backdrop-opacity, .08);top:0;right:0;bottom:0;left:0;display:-ms-flexbox;display:flex;position:fixed;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;color:var(--bkkr-text-color, #000);z-index:1001}.overlay-hidden.sc-bkkr-popover-h{display:none}.popover-wrapper.sc-bkkr-popover{opacity:0;z-index:10}.popover-content.sc-bkkr-popover{border-radius:1em;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:auto;z-index:10}.popover-viewport.sc-bkkr-popover{--safe-area-top:0px;--safe-area-right:0px;--safe-area-bottom:0px;--safe-area-left:0px}.popover-viewport.sc-bkkr-popover bkkr-content.sc-bkkr-popover{padding-top:0;padding-bottom:0}.popover-arrow.sc-bkkr-popover{display:block;position:absolute;width:20px;height:10px;overflow:hidden;z-index:11}.popover-arrow.sc-bkkr-popover::after{top:3px;left:3px;border-radius:3px;position:absolute;width:14px;height:14px;-webkit-transform:rotate(45deg);transform:rotate(45deg);background:var(--background);content:"";z-index:10}.popover-bottom.sc-bkkr-popover-h .popover-arrow.sc-bkkr-popover{top:auto;bottom:-10px}.popover-bottom.sc-bkkr-popover-h .popover-arrow.sc-bkkr-popover::after{top:-6px}';export{w as bkkr_popover}