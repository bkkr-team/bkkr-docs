import{r as o,c as r,h as e,H as t,g as i}from"./p-856de026.js";import{a as p,d as s}from"./p-fe612af3.js";import{B as a,b as n,c as k,e as c,f as h}from"./p-4050f5f9.js";import{g as b}from"./p-c50c697b.js";import{d as v}from"./p-fce6d3d2.js";import{c as d}from"./p-c346915b.js";import{g as l}from"./p-c2089e63.js";import"./p-9b065740.js";const x=(o,r)=>{let e="top",t="left";const i=l(o),p=i.querySelector(".popover-content"),s=p.getBoundingClientRect().height,a=o.ownerDocument.defaultView.innerWidth,n=o.ownerDocument.defaultView.innerHeight,k=r&&r.target&&r.target.getBoundingClientRect(),c=k&&k.width||a/2,h=k&&k.height||0,b=null!=k&&"top"in k?k.top:n/2-s/2,v=null!=k&&"left"in k?k.left:a/2-Math.max(c,250)/2,x=i.querySelector(".popover-arrow"),f=x.getBoundingClientRect(),w=f.width,u=f.height;null==k&&(x.style.display="none");const g={top:b+h,left:v+c/2-w/2},y={top:b+h+(u-1),left:v,width:Math.max(c,250)};let D=!1,P=!1;y.left<m?(D=!0,y.left=m):y.width+m+y.left>a&&(P=!0,y.left=a-y.width-m,t="right"),b+h+s>n&&b-s>0?(g.top=b-(u+1),y.top=b-s-(u-1),o.className=o.className+" popover-bottom",e="bottom"):b+h+(u+1)+s>n&&(p.style.bottom=m+"%"),x.style.top=g.top+"px",x.style.left=g.left+"px",p.style.top=y.top+"px",p.style.left=y.left+"px",p.style.maxWidth=y.width+"px",D&&(p.style.left=`calc(${m}px + var(--safe-area-left, 0px))`),P&&(p.style.right=`calc(${m}px - var(--safe-area-right, 0px))`),p.style.transformOrigin=e+" "+t;const j=d(),W=d(),B=d();return W.addElement(i.querySelector("bkkr-backdrop")).fromTo("opacity",0,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),B.addElement(i.querySelector(".popover-wrapper")).fromTo("opacity",.01,1),j.easing("ease").duration(200).addAnimation([W,B])},m=8,f=o=>{const r=l(o),e=d(),t=d(),i=d();return t.addElement(r.querySelector("bkkr-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0),i.addElement(r.querySelector(".popover-wrapper")).fromTo("opacity",.99,0),e.easing("ease").duration(200).addAnimation([t,i])},w=class{constructor(e){o(this,e),this.didPresent=r(this,"bkkrPopoverDidPresent",7),this.willPresent=r(this,"bkkrPopoverWillPresent",7),this.willDismiss=r(this,"bkkrPopoverWillDismiss",7),this.didDismiss=r(this,"bkkrPopoverDidDismiss",7),this.presented=!1,this.keyboardClose=!0,this.backdropDismiss=!0,this.showBackdrop=!1,this.animated=!0,this.onDismiss=o=>{o.stopPropagation(),o.preventDefault(),this.dismiss()},this.onBackdropTap=()=>{this.dismiss(void 0,a)},this.onLifecycle=o=>{const r=this.usersElement,e=u[o.type];if(r&&e){const t=new CustomEvent(e,{bubbles:!1,cancelable:!1,detail:o.detail});r.dispatchEvent(t)}}}connectedCallback(){n(this.el)}async present(){if(this.presented)return;const o=this.el.querySelector(".popover-content");if(!o)throw new Error("container is undefined");const r=Object.assign(Object.assign({},this.componentProps),{popover:this.el});return this.usersElement=await p(this.delegate,o,this.component,["popover-viewport",this.el["s-sc"]],r),await v(this.usersElement),k(this,x,this.event)}async dismiss(o,r){const e=await c(this,o,r,f,this.event);return e&&await s(this.delegate,this.usersElement),e}onDidDismiss(){return h(this.el,"bkkrPopoverDidDismiss")}onWillDismiss(){return h(this.el,"bkkrPopoverWillDismiss")}render(){const{onLifecycle:o}=this;return e(t,{"aria-modal":"true","no-router":!0,tabindex:"-1",style:{zIndex:`${2e4+this.overlayIndex}`},class:Object.assign({},b(this.cssClass)),onBkkrPopoverDidPresent:o,onBkkrPopoverWillPresent:o,onBkkrPopoverWillDismiss:o,onBkkrPopoverDidDismiss:o,onBkkrDismiss:this.onDismiss,onBkkrBackdropTap:this.onBackdropTap},e("bkkr-backdrop",{tappable:this.backdropDismiss,visible:this.showBackdrop}),e("div",{tabindex:"0"}),e("div",{class:"popover-wrapper bkkr-overlay-wrapper"},e("div",{class:"popover-arrow"}),e("div",{class:"popover-content"})),e("div",{tabindex:"0"}))}get el(){return i(this)}},u={bkkrPopoverDidPresent:"bkkrViewDidEnter",bkkrPopoverWillPresent:"bkkrViewWillEnter",bkkrPopoverWillDismiss:"bkkrViewWillLeave",bkkrPopoverDidDismiss:"bkkrViewDidLeave"};w.style='.sc-bkkr-popover-h{--background:var(--bkkr-overlay-background, var(--bkkr-background-color, #fff));--min-width:250px;--min-height:0;--max-width:calc(100% - var(--bkkr-spacer));--height:auto;--width:100%;--max-height:90%;--box-shadow:0 15px 25px 0 rgba(var(--box-shadow-color, 0, 0, 0), 0.1), 0 6px 20px 0 rgba(var(--box-shadow-color, 0, 0, 0), 0.12), 0 13.2px 40px 0 rgba(var(--box-shadow-color, 0, 0, 0), 0.08);--backdrop-opacity:0;top:0;right:0;bottom:0;left:0;display:-ms-flexbox;display:flex;position:fixed;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;color:var(--bkkr-text-color, #000);z-index:1001;pointer-events:none}.popover-interactive.sc-bkkr-popover-h .popover-content.sc-bkkr-popover,.popover-interactive.sc-bkkr-popover-h bkkr-backdrop.sc-bkkr-popover{pointer-events:auto}.overlay-hidden.sc-bkkr-popover-h{display:none}.popover-wrapper.sc-bkkr-popover{opacity:0;z-index:10}.popover-content.sc-bkkr-popover{border-radius:1em;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:auto;z-index:10}.popover-viewport.sc-bkkr-popover{--safe-area-top:0px;--safe-area-right:0px;--safe-area-bottom:0px;--safe-area-left:0px}.popover-viewport.sc-bkkr-popover bkkr-content.sc-bkkr-popover{padding-top:0;padding-bottom:0}.popover-arrow.sc-bkkr-popover{display:block;position:absolute;width:20px;height:10px;overflow:hidden;z-index:11}.popover-arrow.sc-bkkr-popover::after{top:3px;left:3px;border-radius:3px;position:absolute;width:14px;height:14px;-webkit-transform:rotate(45deg);transform:rotate(45deg);background:var(--background);content:"";z-index:10}.popover-bottom.sc-bkkr-popover-h .popover-arrow.sc-bkkr-popover{top:auto;bottom:-10px}.popover-bottom.sc-bkkr-popover-h .popover-arrow.sc-bkkr-popover::after{top:-6px}';export{w as bkkr_popover}