import{r as t,c as e,h as o,H as r,g as i}from"./p-e501253c.js";import{C as s,a,d as n}from"./p-7e44b543.js";import{r as p,g as c,a as h}from"./p-c2089e63.js";import{B as d,b as l,c as v,h as g,e as k,f as b}from"./p-90a249ca.js";import{g as f}from"./p-c50c697b.js";import{d as m}from"./p-69f4d75d.js";import{c as w}from"./p-096ce696.js";import"./p-9b065740.js";const u=(t=window)=>{if(void 0===t)return[];t.Ionic=t.Ionic||{};let e=t.Ionic.platforms;return null==e&&(e=t.Ionic.platforms=x(t),e.forEach((e=>t.document.documentElement.classList.add(`plt-${e}`)))),e},x=t=>Object.keys(N).filter((e=>N[e](t))),y=t=>!!A(t,/iPad/i)||!(!A(t,/Macintosh/i)||!D(t)),P=t=>A(t,/android|sink/i),D=t=>$(t,"(any-pointer:coarse)"),T=t=>L(t)||W(t),L=t=>!!(t.cordova||t.phonegap||t.PhoneGap),W=t=>{const e=t.Capacitor;return!(!e||!e.isNative)},A=(t,e)=>e.test(t.navigator.userAgent),$=(t,e)=>t.matchMedia(e).matches,N={ipad:y,iphone:t=>A(t,/iPhone/i),ios:t=>A(t,/iPhone|iPod/i)||y(t),android:P,phablet:t=>{const e=t.innerWidth,o=t.innerHeight,r=Math.min(e,o),i=Math.max(e,o);return r>390&&r<520&&i>620&&i<800},tablet:t=>{const e=t.innerWidth,o=t.innerHeight,r=Math.min(e,o),i=Math.max(e,o);return y(t)||(t=>P(t)&&!A(t,/mobile/i))(t)||r>460&&r<820&&i>780&&i<1400},cordova:L,capacitor:W,electron:t=>A(t,/electron/i),pwa:t=>!(!t.matchMedia("(display-mode: standalone)").matches&&!t.navigator.standalone),mobile:D,mobileweb:t=>D(t)&&!T(t),desktop:t=>!D(t),hybrid:T},j=(t,e)=>e&&"BKKR-ITEM"===e.tagName?t.findIndex((t=>t===e)):-1,B=t=>{switch(t){case"start":return"left";case"center":return"center";case"end":return"right"}},C=t=>{switch(t){case"start":return"top";case"center":return"center";case"end":return"bottom"}},O=(t,e,o,r)=>{switch(t){case"start":case"end":case"left":case"right":return{top:-(r-e.height),left:0};case"top":case"bottom":default:return{top:0,left:-(o-e.width)}}},Y=(t,e,o,r)=>{switch(t){case"start":case"end":case"left":case"right":return{top:-(r/2-e.height/2),left:0};case"top":case"bottom":default:return{top:0,left:-(o/2-e.width/2)}}},X=(t,e)=>{const{event:o,size:r,trigger:i,reference:s,side:a,align:n}=e,p=t.ownerDocument,h="rtl"===p.dir,d=p.defaultView.innerWidth,l=p.defaultView.innerHeight,v=c(t),g=v.querySelector(".popover-content"),k=v.querySelector(".popover-arrow"),{contentWidth:b,contentHeight:f}=((t,e,o)=>{const r=e.getBoundingClientRect(),i=r.height;let s=r.width;return"cover"===t&&o&&(s=o.getBoundingClientRect().width),{contentWidth:s,contentHeight:i}})(r,g,i),{arrowWidth:m,arrowHeight:u}=(t=>{if(!t)return{arrowWidth:0,arrowHeight:0};const{width:e,height:o}=t.getBoundingClientRect();return{arrowWidth:e,arrowHeight:o}})(k),x=((t,e,o,r,i,s,a,n,p,c,h)=>{var d;let l={top:0,left:0,width:0,height:0};switch(s){case"event":if(!h)return p;l={top:h.clientY,left:h.clientX,width:1,height:1};break;case"trigger":default:const t=h,e=c||(null===(d=null==t?void 0:t.detail)||void 0===d?void 0:d.bkkrShadowTarget)||(null==t?void 0:t.target);if(!e)return p;const o=e.getBoundingClientRect();l={top:o.top,left:o.left,width:o.width,height:o.height}}const v=((t,e,o,r,i,s,a)=>{const n={top:e.top,left:e.left-o-i},p={top:e.top,left:e.left+e.width+i};switch(t){case"top":return{top:e.top-r-s,left:e.left};case"right":return p;case"bottom":return{top:e.top+e.height+s,left:e.left};case"left":return n;case"start":return a?p:n;case"end":return a?n:p}})(a,l,e,o,r,i,t),g=((t,e,o,r,i)=>{switch(t){case"center":return Y(e,o,r,i);case"end":return O(e,o,r,i);case"start":default:return{top:0,left:0}}})(n,a,l,e,o),k=v.top+g.top,b=v.left+g.left,{arrowTop:f,arrowLeft:m}=((t,e,o,r,i,s,a,n)=>{const p={arrowTop:r+a/2-e/2,arrowLeft:i+s-e/2},c={arrowTop:r+a/2-e/2,arrowLeft:i-1.5*e};switch(t){case"top":return{arrowTop:r+a,arrowLeft:i+s/2-e/2};case"bottom":return{arrowTop:r-o,arrowLeft:i+s/2-e/2};case"left":return p;case"right":return c;case"start":return n?c:p;case"end":return n?p:c;default:return{arrowTop:0,arrowLeft:0}}})(a,r,i,k,b,e,o,t),{originX:w,originY:u}=((t,e,o)=>{switch(t){case"top":return{originX:B(e),originY:"bottom"};case"bottom":return{originX:B(e),originY:"top"};case"left":return{originX:"right",originY:C(e)};case"right":return{originX:"left",originY:C(e)};case"start":return{originX:o?"left":"right",originY:C(e)};case"end":return{originX:o?"right":"left",originY:C(e)}}})(a,n,t);return{top:k,left:b,referenceCoordinates:l,arrowTop:f,arrowLeft:m,originX:w,originY:u}})(h,b,f,m,u,s,a,n,{top:l/2-f/2,left:d/2-b/2,originX:h?"right":"left",originY:"top"},i,o),{originX:y,originY:P,top:D,left:T,bottom:L,checkSafeAreaLeft:W,checkSafeAreaRight:A,arrowTop:$,arrowLeft:N,addPopoverBottomClass:j}=((t,e,o,r,i,s,a,n,p,c,h,d,l=0,v=0,g=0)=>{let k,b=l,f=o,m=e,w=c,u=h,x=!1,y=!1;const P=d?d.top+d.height:s/2-n/2,D=d?d.height:0;let T=!1;return f<r+p?(f=r,x=!0,w="left"):a+r+f+p>i&&(y=!0,f=i-a-r,w="right"),P+D+n>s&&("top"===t||"bottom"===t)&&(P-n>0?(m=P-n-D-(g-1),b=m+n,u="bottom",T=!0):k=r),{top:m,left:f,bottom:k,originX:w,originY:u,checkSafeAreaLeft:x,checkSafeAreaRight:y,arrowTop:b,arrowLeft:v,addPopoverBottomClass:T}})(a,x.top,x.left,8,d,l,b,f,25,x.originX,x.originY,x.referenceCoordinates,x.arrowTop,x.arrowLeft,u),X=w(),I=w(),z=w();return I.addElement(v.querySelector("bkkr-backdrop")).fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),z.addElement(v.querySelector(".popover-wrapper")).fromTo("opacity",.01,1),X.easing("ease").duration(100).beforeAddWrite((()=>{"cover"===r&&(console.log(b),t.style.setProperty("--width",`${b}px`)),j&&t.classList.add("popover-bottom"),void 0!==L&&g.style.setProperty("bottom",`${L}px`);let e=`${T}px`;W&&(e=`${T}px + var(--safe-area-left, 0)`),A&&(e=`${T}px - var(--safe-area-right, 0)`),g.style.setProperty("top",`calc(${D}px + var(--offset-y, 0))`),g.style.setProperty("left",`calc(${e} + var(--offset-x, 0))`),g.style.setProperty("transform-origin",`${P} ${y}`),null!==k&&(((t,e=!1,o,r)=>!(!o&&!r||"top"!==t&&"bottom"!==t&&e))(a,x.top!==D||x.left!==T,o,i)?(k.style.setProperty("top",`calc(${$}px + var(--offset-y, 0))`),k.style.setProperty("left",`calc(${N}px + var(--offset-x, 0))`)):k.style.setProperty("display","none"))})).addAnimation([I,z])},I=t=>{const e=c(t),o=e.querySelector(".popover-content"),r=e.querySelector(".popover-arrow"),i=w(),s=w(),a=w();return s.addElement(e.querySelector("bkkr-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0),a.addElement(e.querySelector(".popover-wrapper")).fromTo("opacity",.99,0),i.easing("ease").afterAddWrite((()=>{t.style.removeProperty("--width"),t.classList.remove("popover-bottom"),o.style.removeProperty("top"),o.style.removeProperty("left"),o.style.removeProperty("bottom"),o.style.removeProperty("transform-origin"),r&&(r.style.removeProperty("top"),r.style.removeProperty("left"),r.style.removeProperty("display"))})).duration(300).addAnimation([s,a])},z=class{constructor(o){t(this,o),this.didPresent=e(this,"bkkrPopoverDidPresent",7),this.willPresent=e(this,"bkkrPopoverWillPresent",7),this.willDismiss=e(this,"bkkrPopoverWillDismiss",7),this.didDismiss=e(this,"bkkrPopoverDidDismiss",7),this.didPresentShorthand=e(this,"didPresent",7),this.willPresentShorthand=e(this,"willPresent",7),this.willDismissShorthand=e(this,"willDismiss",7),this.didDismissShorthand=e(this,"didDismiss",7),this.parentPopover=null,this.popoverIndex=H++,this.coreDelegate=s(),this.inline=!1,this.focusDescendantOnPresent=!1,this.presented=!1,this.keyboardClose=!0,this.backdropDismiss=!0,this.showBackdrop=!1,this.animated=!0,this.triggerAction="click",this.size="auto",this.dismissOnSelect=!1,this.reference="trigger",this.side="bottom",this.alignment="start",this.arrow=!0,this.isOpen=!1,this.onDismiss=t=>{t.stopPropagation(),t.preventDefault(),this.dismiss()},this.onBackdropTap=()=>{this.dismiss(void 0,d)},this.onLifecycle=t=>{const e=this.usersElement,o=E[t.type];if(e&&o){const r=new CustomEvent(o,{bubbles:!1,cancelable:!1,detail:t.detail});e.dispatchEvent(r)}},this.configureTriggerInteraction=()=>{const{trigger:t,triggerAction:e,el:o,destroyTriggerInteraction:r}=this;r&&r();const i=this.triggerEl=void 0!==t?document.getElementById(t):null;i&&(this.destroyTriggerInteraction=((t,e,o)=>{let r=[];switch(e){case"hover":let t;r=[{eventName:"mouseenter",callback:async e=>{e.stopPropagation(),t&&clearTimeout(t),t=setTimeout((()=>{p((()=>{o.presentFromTrigger(e),t=void 0}))}),100)}},{eventName:"mouseleave",callback:e=>{t&&clearTimeout(t);const r=e.relatedTarget;r&&r.closest("bkkr-popover")!==o&&o.dismiss(void 0,void 0,!1)}},{eventName:"click",callback:t=>t.stopPropagation()},{eventName:"bkkrPopoverActivateTrigger",callback:t=>o.presentFromTrigger(t,!0)}];break;case"context-menu":r=[{eventName:"contextmenu",callback:t=>{t.preventDefault(),o.presentFromTrigger(t)}},{eventName:"click",callback:t=>t.stopPropagation()},{eventName:"bkkrPopoverActivateTrigger",callback:t=>o.presentFromTrigger(t,!0)}];break;case"click":default:r=[{eventName:"click",callback:t=>o.presentFromTrigger(t)},{eventName:"bkkrPopoverActivateTrigger",callback:t=>o.presentFromTrigger(t,!0)}]}return r.forEach((({eventName:e,callback:o})=>t.addEventListener(e,o))),t.setAttribute("data-bkkr-popover-trigger","true"),()=>{r.forEach((({eventName:e,callback:o})=>t.removeEventListener(e,o))),t.removeAttribute("data-bkkr-popover-trigger")}})(i,e,o))},this.configureKeyboardInteraction=()=>{const{destroyKeyboardInteraction:t,el:e}=this;t&&t(),this.destroyKeyboardInteraction=(t=>{const e=async e=>{const o=document.activeElement;let r=[];try{r=Array.from(t.querySelectorAll("bkkr-item:not(bkkr-popover bkkr-popover *)"))}catch(t){}switch(e.key){case"ArrowLeft":await t.getParentPopover()&&t.dismiss(void 0,void 0,!1);break;case"ArrowDown":const e=((t,e)=>t[j(t,e)+1])(r,o);void 0!==e&&e.focus();break;case"ArrowUp":const i=((t,e)=>t[j(t,e)-1])(r,o);void 0!==i&&i.focus();break;case"ArrowRight":case" ":case"Enter":if(o&&o.hasAttribute("data-bkkr-popover-trigger")){const t=new CustomEvent("bkkrPopoverActivateTrigger");o.dispatchEvent(t)}}};return t.addEventListener("keydown",e),()=>t.removeEventListener("keydown",e)})(e)},this.configureDismissInteraction=()=>{const{destroyDismissInteraction:t,parentPopover:e,triggerAction:o,triggerEl:r,el:i}=this;e&&r&&(t&&t(),this.destroyDismissInteraction=((t,e,o,r)=>{let i=[];const s=c(r).querySelector(".popover-content");switch(e){case"hover":i=[{eventName:"mouseenter",callback:e=>{document.elementFromPoint(e.clientX,e.clientY)!==t&&o.dismiss(void 0,void 0,!1)}}];break;case"context-menu":case"click":default:i=[{eventName:"click",callback:e=>{e.target.closest("[data-bkkr-popover-trigger]")!==t?o.dismiss(void 0,void 0,!1):e.stopPropagation()}}]}return i.forEach((({eventName:t,callback:e})=>s.addEventListener(t,e))),()=>{i.forEach((({eventName:t,callback:e})=>s.removeEventListener(t,e)))}})(r,o,i,e))}}onTriggerChange(){this.configureTriggerInteraction()}onIsOpenChange(t,e){!0===t&&!1===e?this.present():!1===t&&!0===e&&this.dismiss()}connectedCallback(){l(this.el)}componentWillLoad(){this.popoverId=this.el.hasAttribute("id")?this.el.getAttribute("id"):`bkkr-popover-${this.popoverIndex}`,this.parentPopover=this.el.closest(`bkkr-popover:not(#${this.popoverId})`)}componentDidLoad(){const{parentPopover:t,isOpen:e}=this;!0===e&&p((()=>this.present())),t&&h(t,"bkkrPopoverWillDismiss",(()=>{this.dismiss(void 0,void 0,!1)})),this.configureTriggerInteraction()}async presentFromTrigger(t,e=!1){this.triggerEv=t,this.focusDescendantOnPresent=e,await this.present(),this.triggerEv=void 0,this.focusDescendantOnPresent=!1}getDelegate(t=!1){if(this.workingDelegate&&!t)return{delegate:this.workingDelegate,inline:this.inline};const e=this.el.parentNode,o=this.inline=null!==e&&"BKKR-ROOT"!==e.tagName&&"BODY"!==e.tagName;return{inline:o,delegate:this.workingDelegate=o?this.delegate||this.coreDelegate:this.delegate}}async present(){if(this.presented)return;void 0!==this.currentTransition&&await this.currentTransition;const t=Object.assign(Object.assign({},this.componentProps),{popover:this.el}),{inline:e,delegate:o}=this.getDelegate(!0);this.usersElement=await a(o,this.el,this.component,["popover-viewport"],t,e),await m(this.usersElement),this.configureKeyboardInteraction(),this.configureDismissInteraction(),this.currentTransition=v(this,"popoverEnter",X,{event:this.event||this.triggerEv,size:this.size,trigger:this.triggerEl,reference:this.reference,side:this.side,align:this.alignment}),await this.currentTransition,this.currentTransition=void 0,this.focusDescendantOnPresent&&g(this.el,this.el)}async dismiss(t,e,o=!0){void 0!==this.currentTransition&&await this.currentTransition;const{destroyKeyboardInteraction:r,destroyDismissInteraction:i}=this;o&&this.parentPopover&&this.parentPopover.dismiss(t,e,o),this.currentTransition=k(this,t,e,"popoverLeave",I,this.event);const s=await this.currentTransition;if(s){r&&(r(),this.destroyKeyboardInteraction=void 0),i&&(i(),this.destroyDismissInteraction=void 0);const{delegate:t}=this.getDelegate();await n(t,this.usersElement)}return this.currentTransition=void 0,s}async getParentPopover(){return this.parentPopover}onDidDismiss(){return b(this.el,"bkkrPopoverDidDismiss")}onWillDismiss(){return b(this.el,"bkkrPopoverWillDismiss")}render(){const{onLifecycle:t,popoverId:e,parentPopover:i,dismissOnSelect:s,presented:a,side:n,arrow:p}=this,c=("string"==typeof(d="desktop")&&(l=d,d=void 0),(v=d,u(v)).includes(l)),h=p&&!i&&!c;var d,l,v;return o(r,{"aria-modal":"true","no-router":!0,tabindex:"-1",style:{zIndex:`${2e4+this.overlayIndex}`},id:e,class:Object.assign(Object.assign({},f(this.cssClass)),{"overlay-hidden":!0,"popover-interactive":a,"popover-desktop":c,[`popover-side-${n}`]:!0,"popover-nested":!!i}),onBkkrPopoverDidPresent:t,onBkkrPopoverWillPresent:t,onBkkrPopoverWillDismiss:t,onBkkrPopoverDidDismiss:t,onBkkrDismiss:this.onDismiss,onBkkrBackdropTap:this.onBackdropTap},!i&&o("bkkr-backdrop",{tappable:this.backdropDismiss,visible:this.showBackdrop}),o("div",{class:"popover-wrapper bkkr-overlay-wrapper",onClick:s?()=>this.dismiss():void 0},h&&o("div",{class:"popover-arrow"}),o("div",{class:"popover-content"},o("slot",null))))}get el(){return i(this)}static get watchers(){return{trigger:["onTriggerChange"],triggerAction:["onTriggerChange"],isOpen:["onIsOpenChange"]}}},E={bkkrPopoverDidPresent:"bkkrViewDidEnter",bkkrPopoverWillPresent:"bkkrViewWillEnter",bkkrPopoverWillDismiss:"bkkrViewWillLeave",bkkrPopoverDidDismiss:"bkkrViewDidLeave"};let H=0;z.style=':host{--background:var(--bkkr-overlay-background, var(--bkkr-background-color, #fff));--min-width:250px;--min-height:0;--max-width:auto;--height:auto;--width:250px;--max-height:90%;--box-shadow:0 15px 25px 0 rgba(var(--box-shadow-color, 0, 0, 0), 0.1), 0 6px 20px 0 rgba(var(--box-shadow-color, 0, 0, 0), 0.12), 0 13.2px 40px 0 rgba(var(--box-shadow-color, 0, 0, 0), 0.08);--backdrop-opacity:0;--offset-x:0px;--offset-y:0px;top:0;right:0;bottom:0;left:0;display:-ms-flexbox;display:flex;position:fixed;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;color:var(--bkkr-text-color, #000);z-index:1001;pointer-events:none}:host(.popover-interactive) .popover-content,:host(.popover-interactive) bkkr-backdrop{pointer-events:auto}:host(.overlay-hidden){display:none}:host(.popover-desktop){--box-shadow:0px 4px 16px 0px rgba(0, 0, 0, 0.12)}.popover-wrapper{opacity:0;z-index:10}.popover-content{--safe-area-top:0px;--safe-area-right:0px;--safe-area-bottom:0px;--safe-area-left:0px;border-radius:1em;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:auto;z-index:10}:host(.popover-desktop) .popover-content{border:0.5px solid var(--color-step-100, #e6e6e6)}:host(.popover-nested.popover-side-left){--offset-x:5px}:host(.popover-nested.popover-side-right){--offset-x:-5px}:host(.popover-nested.popover-side-start){--offset-x:5px}:host-context([dir=rtl]):host(.popover-nested.popover-side-start),:host-context([dir=rtl]).popover-nested.popover-side-start{--offset-x:-5px}:host(.popover-nested.popover-side-end){--offset-x:-5px}:host-context([dir=rtl]):host(.popover-nested.popover-side-end),:host-context([dir=rtl]).popover-nested.popover-side-end{--offset-x:5px}.popover-arrow{display:block;position:absolute;width:20px;height:10px;overflow:hidden;z-index:11}.popover-arrow::after{top:3px;left:3px;border-radius:3px;position:absolute;width:14px;height:14px;-webkit-transform:rotate(45deg);transform:rotate(45deg);background:var(--background);content:"";z-index:10}:host(.popover-bottom) .popover-arrow{top:auto;bottom:-10px}:host(.popover-bottom) .popover-arrow::after{top:-6px}:host(.popover-side-left) .popover-arrow{-webkit-transform:rotate(90deg);transform:rotate(90deg)}:host(.popover-side-right) .popover-arrow{-webkit-transform:rotate(-90deg);transform:rotate(-90deg)}:host(.popover-side-top) .popover-arrow{-webkit-transform:rotate(180deg);transform:rotate(180deg)}:host(.popover-side-start) .popover-arrow{-webkit-transform:rotate(90deg);transform:rotate(90deg)}:host-context([dir=rtl]):host(.popover-side-start) .popover-arrow,:host-context([dir=rtl]).popover-side-start .popover-arrow{-webkit-transform:rotate(-90deg);transform:rotate(-90deg)}:host(.popover-side-end) .popover-arrow{-webkit-transform:rotate(-90deg);transform:rotate(-90deg)}:host-context([dir=rtl]):host(.popover-side-end) .popover-arrow,:host-context([dir=rtl]).popover-side-end .popover-arrow{-webkit-transform:rotate(90deg);transform:rotate(90deg)}';export{z as bkkr_popover}