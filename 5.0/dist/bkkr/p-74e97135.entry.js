import{r as t,c as a,h as i,H as r,g as e}from"./p-856de026.js";import{b as o,c as n,e as s,f as d}from"./p-890f3fde.js";import{s as l,g as p}from"./p-c50c697b.js";import{c}from"./p-096ce696.js";import"./p-c2089e63.js";const h=(t,a)=>{const i=c(),r=c(),e=t.host||t,o=t.querySelector(".loading-wrapper");switch(r.addElement(o),a){case"top":r.fromTo("transform","translate3d(-50%, -200%, 0)","translate3d(-50%, calc(10px + var(--safe-area-top, 0px)), 0)");break;case"middle":o.style.top="50%",r.fromTo("opacity",.01,1);break;default:r.fromTo("transform","translate3d(-50%, 200%, 0)","translate3d(-50%, calc(-10px - var(--safe-area-bottom, 0px)), 0)")}return i.addElement(e).easing("cubic-bezier(.155,1.105,.295,1.12)").duration(400).addAnimation(r)},g=(t,a)=>{const i=c(),r=c(),e=t.host||t,o=t.querySelector(".loading-wrapper");switch(r.addElement(o),a){case"top":r.fromTo("transform","translate3d(-50%, calc(10px + var(--safe-area-top, 0px)), 0)","translate3d(-50%, -200%, 0)");break;case"middle":r.fromTo("opacity",.99,0);break;default:r.fromTo("transform","translate3d(-50%, calc(-10px - var(--safe-area-bottom, 0px)), 0)","translate3d(-50%, 200%, 0)")}return i.addElement(e).easing("cubic-bezier(.36,.66,.04,1)").duration(300).addAnimation(r)},m=class{constructor(i){t(this,i),this.didPresent=a(this,"loadingDidPresent",7),this.willPresent=a(this,"loadingWillPresent",7),this.willDismiss=a(this,"loadingWillDismiss",7),this.didDismiss=a(this,"loadingDidDismiss",7),this.presented=!1,this.color="primary",this.spinner="crescent",this.keyboardClose=!1,this.position="top",this.animated=!0}connectedCallback(){o(this.el)}async present(){await n(this,h,this.position)}dismiss(t,a){return s(this,t,a,g,this.position)}onDidDismiss(){return d(this.el,"loadingDidDismiss")}onWillDismiss(){return d(this.el,"loadingWillDismiss")}render(){const{color:t,cssClass:a,spinner:e,position:o}=this;return i(r,{style:{zIndex:`${6e4+this.overlayIndex}`},class:l(t,Object.assign({},p(a))),tabindex:"-1"},i("div",{class:{"loading-wrapper":!0,[`loading-${o}`]:!0}},i("div",{class:"loading-container",part:"container"},i("div",{class:"loading-content"},i("bkkr-spinner",{slot:"end",type:e,color:t})))))}get el(){return e(this)}};m.style=":host{--border-width:0;--border-style:none;--border-color:initial;--box-shadow:0 15px 25px 0 rgba(var(--box-shadow-color, 0, 0, 0), 0.1), 0 6px 20px 0 rgba(var(--box-shadow-color, 0, 0, 0), 0.12), 0 13.2px 40px 0 rgba(var(--box-shadow-color, 0, 0, 0), 0.08);--min-width:auto;--width:auto;--min-height:auto;--height:auto;--max-height:auto;--white-space:pre-wrap;--background:var(--bkkr-overlay-background, var(--bkkr-background-color, #fff));--border-radius:2em;top:0;left:0;display:block;position:absolute;width:100%;height:100%;outline:none;font-family:var(--bkkr-font-family);contain:strict;z-index:1001;pointer-events:none}:host-context(bkkr-content){--safe-area-top:0px;--safe-area-bottom:0px}:host(.overlay-hidden){display:none}.loading-wrapper{border-radius:var(--border-radius);left:50%;margin-left:auto;margin-right:auto;margin-top:auto;margin-bottom:auto;display:block;position:absolute;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow)}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.loading-wrapper{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}.loading-container{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;height:inherit;min-height:inherit;max-height:inherit;pointer-events:auto;contain:content}.loading-wrapper.loading-top{top:0;-webkit-transform:translate3d(-50%, -200%, 0);transform:translate3d(-50%, -200%, 0)}.loading-wrapper.loading-middle{opacity:0.01}.loading-wrapper.loading-bottom{bottom:0;-webkit-transform:translate3d(-50%, 200%, 0);transform:translate3d(-50%, 200%, 0)}.loading-content{padding-left:15px;padding-right:15px;padding-top:15px;padding-bottom:15px;display:-ms-flexbox;display:flex;-ms-flex:1;flex:1;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;text-align:center}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.loading-content{padding-left:unset;padding-right:unset;-webkit-padding-start:15px;padding-inline-start:15px;-webkit-padding-end:15px;padding-inline-end:15px}}";export{m as bkkr_loading}