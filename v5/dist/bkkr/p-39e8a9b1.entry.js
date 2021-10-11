/*!
 * (C) BKKR Framework https://bkkr-team.github.io/bkkr-docs/ - MIT License
 */
import{r as t,c as s,h as o,H as a,g as i}from"./p-08349d90.js";import{i as r,b as e,c as n,g as l,e as c,f as h}from"./p-c86d93c3.js";import{s as d}from"./p-464a016b.js";import{g as p,s as m}from"./p-18201c80.js";import{c as b}from"./p-177c1201.js";import{g as u,h as g}from"./p-7b48497a.js";import{g as f}from"./p-87969847.js";import{createGesture as v}from"./p-b4206503.js";import"./p-6a36e565.js";import"./p-f081b157.js";const x=(t,s,o=400)=>{const a=b(),i=u(t).querySelector(".toast-wrapper");switch(a.addElement(i),s){case"bottom":a.fromTo("transform","translate3d(0, 200%, 0)","translate3d(0, calc(-12px - var(--safe-area-bottom, 0px)), 0)");break;case"middle":i.style.top="50%",a.fromTo("opacity",.01,1);break;default:a.fromTo("transform","translate3d(0, -200%, 0)","translate3d(0, calc(12px + var(--safe-area-top, 0px)), 0)")}const r=b().easing("cubic-bezier(.155,1.105,.295,1.12)").duration(o).addAnimation(a),e=b().beforeStyles({transform:"translateY(0)","transform-origin":"top center",overflow:"hidden"});return r.addAnimation(e),r},w=(t,s,o=300)=>{const a=b(),i=u(t).querySelector(".toast-wrapper");switch(a.addElement(i),s){case"bottom":a.fromTo("transform","translate3d(0, calc(-12px - var(--safe-area-bottom, 0px)), 0)","translate3d(0, 200%, 0)");break;case"middle":a.fromTo("opacity",.99,0);break;default:a.fromTo("transform","translate3d(0, calc(12px + var(--safe-area-top, 0px)), 0)","translate3d(0, -200%, 0)")}const r=b().easing("cubic-bezier(.36,.66,.04,1)").duration(o).addAnimation(a),e=b().beforeClearStyles(["transform"]).afterClearStyles(["transform"]).onFinish((()=>{}));return r.addAnimation(e),r};let k=class{constructor(o){t(this,o),this.didPresent=s(this,"toastDidPresent",7),this.willPresent=s(this,"toastWillPresent",7),this.willDismiss=s(this,"toastWillDismiss",7),this.didDismiss=s(this,"toastDidDismiss",7),this.gestureAnimationDismissing=!1,this.presented=!1,this.duration=0,this.keyboardClose=!1,this.position="top",this.swipeToClose=!0,this.animated=!0,this.dispatchCancelHandler=t=>{if(r(t.detail.role)){const t=this.getButtons().find((t=>"cancel"===t.role));this.callButtonHandler(t)}}}swipeToCloseChanged(t){this.gesture?this.gesture.enable(t):t&&this.initSwipeToClose()}connectedCallback(){e(this.el)}async present(){await n(this,"toastEnter",x,this.position),this.swipeToClose&&this.initSwipeToClose(),this.duration>0&&(this.durationTimeout=setTimeout((()=>this.dismiss(void 0,"timeout")),this.duration))}initSwipeToClose(){const t=this.animation=(this.leaveAnimation||w)(this.el,this.position);this.gesture=((t,s,o,a)=>{var i;const r=null===(i=null==t?void 0:t.shadowRoot)||void 0===i?void 0:i.querySelector(".toast-wrapper"),e=(null==r?void 0:r.clientHeight)||0;let n=!1;const l="top"===o?-1:1,c=v({el:t,gestureName:"toastSwipeToClose",gesturePriority:40,direction:"y",threshold:10,canStart:async t=>!!t.event.target,onStart:()=>{s.progressStart(!0,n?1:0)},onMove:t=>{const o=g(1e-4,t.deltaY*l/(2*e),.9999);s.progressStep(o)},onEnd:t=>{const o=t.velocityY,i=g(1e-4,t.deltaY*l/(2*e),.9999),r=(t.deltaY+1e3*o)/(2*e)*l>=.5;let h=r?-.001:.001;r?(s.easing("cubic-bezier(0.32, 0.72, 0, 1)"),h+=f([0,0],[.32,.72],[0,1],[1,1],i)[0]):(s.easing("cubic-bezier(1, 0, 0.68, 0.28)"),h+=f([0,0],[1,0],[.68,.28],[1,1],i)[0]);const d=((t,s)=>g(400,t/Math.abs(1.1*s),500))(r?i*e:(1-i)*e,o);n=r,c.enable(!1),s.onFinish((()=>{r||c.enable(!0)})).progressEnd(r?1:0,h,d),r&&a()}});return c})(this.el,t,this.position,(()=>{this.gestureAnimationDismissing=!0,this.animation.onFinish((async()=>{await this.dismiss(void 0,"gesture"),this.gestureAnimationDismissing=!1}))})),this.gesture.enable(!0)}async dismiss(t,s){var o;if(this.gestureAnimationDismissing&&"gesture"!==s)return!1;if(this.durationTimeout&&(clearTimeout(this.durationTimeout),null===(o=this.gesture)||void 0===o?void 0:o.running()))return this.duration>0&&(this.durationTimeout=setTimeout((()=>this.dismiss(void 0,"timeout")),this.duration)),!1;const a=l.get(this)||[],i=await c(this,t,s,"toastLeave",w,this.position);return i&&(this.animation&&this.animation.destroy(),a.forEach((t=>t.destroy()))),this.animation=void 0,i}onDidDismiss(){return h(this.el,"toastDidDismiss")}onWillDismiss(){return h(this.el,"toastWillDismiss")}getButtons(){return this.buttons?this.buttons.map((t=>"string"==typeof t?{text:t}:t)):[]}async buttonClick(t){const s=t.role;return r(s)||await this.callButtonHandler(t)?this.dismiss(void 0,s):Promise.resolve()}async callButtonHandler(t){if(t&&t.handler)try{if(!1===await t.handler())return!1}catch(t){console.error(t)}return!0}renderButtons(t,s){if(0!==t.length)return o("div",{class:{"toast-button-group":!0,[`toast-button-group-${s}`]:!0}},t.map((t=>o("button",{type:"button",class:y(t),tabIndex:0,onClick:()=>this.buttonClick(t),part:"button"},o("div",{class:"toast-button-inner"},t.icon&&o("bkkr-icon",{icon:t.icon,slot:void 0===t.text?"icon-only":void 0,class:"toast-icon",lazy:!1}),t.text)))))}render(){var t;const s=this.getButtons(),i=s.filter((t=>"start"===t.side)),r=s.filter((t=>"start"!==t.side)),e={"toast-wrapper":!0,[`toast-${this.position}`]:!0,"state-activatable":!0},n=(null===(t=this.htmlAttributes)||void 0===t?void 0:t.role)||(s.length>0?"dialog":"status");return o(a,Object.assign({role:n,style:{zIndex:`${6e4+this.overlayIndex}`},class:m(this.color,Object.assign({},p(this.cssClass))),onBkkrToastWillDismiss:this.dispatchCancelHandler},this.htmlAttributes),o("div",{class:e},o("div",{class:"toast-container",part:"container"},this.renderButtons(i,"start"),o("div",{class:"toast-content"},void 0!==this.header&&o("div",{class:"toast-header",part:"header"},this.header),void 0!==this.message&&o("div",{class:"toast-message",part:"message",innerHTML:d(this.message)})),this.renderButtons(r,"end"))))}get el(){return i(this)}static get watchers(){return{swipeToClose:["swipeToCloseChanged"]}}};const y=t=>Object.assign({"toast-button":!0,"toast-button-icon-only":void 0!==t.icon&&void 0===t.text,[`toast-button-${t.role}`]:void 0!==t.role,"state-focusable":!0,"state-activatable":!0},p(t.cssClass));k.style=":host{--border-width:0;--border-style:none;--border-color:initial;--box-shadow:0 15px 25px 0 rgba(var(--box-shadow-color, 0, 0, 0), 0.1), 0 6px 20px 0 rgba(var(--box-shadow-color, 0, 0, 0), 0.12), 0 13.2px 40px 0 rgba(var(--box-shadow-color, 0, 0, 0), 0.08);--min-width:auto;--width:auto;--min-height:auto;--height:auto;--max-height:auto;--white-space:normal;--background:var(--bkkr-overlay-background, var(--bkkr-background-color, #fff));--border-radius:32px;--button-color:color-get(primary, base);--color:var(--bkkr-text-color, #000);--max-width:700px;--start:calc(var(--bkkr-spacer, 16px) * 0.5);--end:var(--start);top:0;left:0;display:block;position:absolute;width:100%;height:100%;outline:none;color:var(--color);font-family:var(--bkkr-font-family);font-size:0.85rem;contain:strict;-ms-touch-action:none;touch-action:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1001;pointer-events:none}:host(.overlay-hidden){display:none}.toast-wrapper{border-radius:var(--border-radius);right:var(--end);left:var(--start);margin-left:auto;margin-right:auto;margin-top:auto;margin-bottom:auto;display:block;position:absolute;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow)}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.toast-wrapper{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}.toast-container{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;height:inherit;min-height:inherit;max-height:inherit;pointer-events:auto;contain:content}.toast-content{padding-left:15px;padding-right:15px;padding-top:15px;padding-bottom:15px;display:-ms-flexbox;display:flex;-ms-flex:1;flex:1;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;text-align:center}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.toast-content{padding-left:unset;padding-right:unset;-webkit-padding-start:15px;padding-inline-start:15px;-webkit-padding-end:15px;padding-inline-end:15px}}.toast-header{margin-bottom:2px;font-weight:700}.toast-message{-ms-flex:1;flex:1;white-space:var(--white-space)}.toast-button-group{display:-ms-flexbox;display:flex}.toast-button{border:0;outline:none;color:var(--button-color);z-index:0}.toast-icon{font-size:1.4em}.toast-button-inner{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.toast-wrapper.toast-top{top:0;-webkit-transform:translate3d(0, -200%, 0);transform:translate3d(0, -200%, 0)}.toast-wrapper.toast-middle{opacity:0.01}.toast-wrapper.toast-bottom{bottom:0;-webkit-transform:translate3d(0, 200%, 0);transform:translate3d(0, 200%, 0)}:host(.bkkr-color){--button-color:inherit;color:current-color(contrast)}:host(.bkkr-color) .toast-button-cancel{color:inherit}:host(.bkkr-color) .toast-wrapper{background:current-color(base)}";export{k as bkkr_toast}