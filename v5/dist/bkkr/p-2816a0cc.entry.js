import{r as t,c as a,h as i,H as r,g as e}from"./p-30285648.js";import{c as o}from"./p-049a2213.js";import{b as n,c as s,e as d,f as l}from"./p-792ad557.js";import{s as p,g as c}from"./p-c50c697b.js";import{c as h}from"./p-096ce696.js";import{g}from"./p-c2089e63.js";const m=(t,a,i=400)=>{const r=h(),e=g(t).querySelector(".loading-wrapper");switch(r.addElement(e),a){case"top":r.fromTo("transform","translate3d(-50%, -200%, 0)","translate3d(-50%, calc(10px + var(--safe-area-top, 0px)), 0)");break;case"middle":e.style.top="50%",r.fromTo("opacity",.01,1);break;default:r.fromTo("transform","translate3d(-50%, 200%, 0)","translate3d(-50%, calc(-10px - var(--safe-area-bottom, 0px)), 0)")}return h().easing("cubic-bezier(.155,1.105,.295,1.12)").duration(i).addAnimation(r)},b=(t,a,i=300)=>{const r=h(),e=g(t).querySelector(".loading-wrapper");switch(r.addElement(e),a){case"top":r.fromTo("transform","translate3d(-50%, calc(10px + var(--safe-area-top, 0px)), 0)","translate3d(-50%, -200%, 0)");break;case"middle":r.fromTo("opacity",.99,0);break;default:r.fromTo("transform","translate3d(-50%, calc(-10px - var(--safe-area-bottom, 0px)), 0)","translate3d(-50%, 200%, 0)")}return h().easing("cubic-bezier(.36,.66,.04,1)").duration(i).addAnimation(r)},x=class{constructor(i){t(this,i),this.didPresent=a(this,"loadingDidPresent",7),this.willPresent=a(this,"loadingWillPresent",7),this.willDismiss=a(this,"loadingWillDismiss",7),this.didDismiss=a(this,"loadingDidDismiss",7),this.presented=!1,this.color="primary",this.keyboardClose=!1,this.position="top",this.animated=!0}connectedCallback(){n(this.el)}componentWillLoad(){void 0===this.spinner&&(this.spinner=o.get("loadingSpinner","crescent"))}async present(){await s(this,"loadingEnter",m,this.position)}dismiss(t,a){return d(this,t,a,"loadingLeave",b,this.position)}onDidDismiss(){return l(this.el,"loadingDidDismiss")}onWillDismiss(){return l(this.el,"loadingWillDismiss")}render(){const{color:t,cssClass:a,spinner:e,position:o,htmlAttributes:n}=this;return i(r,Object.assign({style:{zIndex:`${6e4+this.overlayIndex}`},class:p(t,Object.assign({},c(a))),tabindex:"-1"},n),i("div",{class:{"loading-wrapper":!0,[`loading-${o}`]:!0}},i("div",{class:"loading-container",part:"container"},i("div",{class:"loading-content"},i("bkkr-spinner",{slot:"end",type:e,color:t})))))}get el(){return e(this)}};x.style=":host{--border-width:0;--border-style:none;--border-color:initial;--box-shadow:0 15px 25px 0 rgba(var(--box-shadow-color, 0, 0, 0), 0.1), 0 6px 20px 0 rgba(var(--box-shadow-color, 0, 0, 0), 0.12), 0 13.2px 40px 0 rgba(var(--box-shadow-color, 0, 0, 0), 0.08);--min-width:auto;--width:auto;--min-height:auto;--height:auto;--max-height:auto;--white-space:pre-wrap;--background:var(--bkkr-overlay-background, var(--bkkr-background-color, #fff));--border-radius:32px;top:0;left:0;display:block;position:absolute;width:100%;height:100%;outline:none;font-family:var(--bkkr-font-family);contain:strict;z-index:1001;pointer-events:none}:host-context(bkkr-content){--safe-area-top:0px;--safe-area-bottom:0px}:host(.overlay-hidden){display:none}.loading-wrapper{border-radius:var(--border-radius);left:50%;margin-left:auto;margin-right:auto;margin-top:auto;margin-bottom:auto;display:block;position:absolute;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow)}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.loading-wrapper{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}.loading-container{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;height:inherit;min-height:inherit;max-height:inherit;pointer-events:auto;contain:content}.loading-wrapper.loading-top{top:0;-webkit-transform:translate3d(-50%, -200%, 0);transform:translate3d(-50%, -200%, 0)}.loading-wrapper.loading-middle{opacity:0.01}.loading-wrapper.loading-bottom{bottom:0;-webkit-transform:translate3d(-50%, 200%, 0);transform:translate3d(-50%, 200%, 0)}.loading-content{padding-left:15px;padding-right:15px;padding-top:15px;padding-bottom:15px;display:-ms-flexbox;display:flex;-ms-flex:1;flex:1;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;text-align:center}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.loading-content{padding-left:unset;padding-right:unset;-webkit-padding-start:15px;padding-inline-start:15px;-webkit-padding-end:15px;padding-inline-end:15px}}";export{x as bkkr_loading}