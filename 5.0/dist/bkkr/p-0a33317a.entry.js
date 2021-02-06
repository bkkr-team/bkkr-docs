import{r as t,e as s,h as o,H as a,g as r}from"./p-8dbe4215.js";import{e as i}from"./p-3faaa6d8.js";import{c as e}from"./p-2862b1df.js";import{g as n}from"./p-bac8255f.js";import"./p-fcb88322.js";import{createGesture as c}from"./p-950254e0.js";import{s as l}from"./p-70b25770.js";import{i as h,b as d,c as p,g as b,e as m,f as u}from"./p-fc007598.js";import{g,s as f}from"./p-09b2e663.js";const x=(t,s,o=400)=>{const a=e(),r=t.host||t,i=t.querySelector(".toast-wrapper");switch(a.addElement(i),s){case"bottom":a.fromTo("transform","translate3d(0, 200%, 0)","translate3d(0, calc(-12px - var(--safe-area-bottom, 0px)), 0)");break;case"middle":i.style.top="50%",a.fromTo("opacity",.01,1);break;default:a.fromTo("transform","translate3d(0, -200%, 0)","translate3d(0, calc(12px + var(--safe-area-top, 0px)), 0)")}const n=e().addElement(r).easing("cubic-bezier(.155,1.105,.295,1.12)").duration(o).addAnimation(a),c=e().beforeStyles({transform:"translateY(0)","transform-origin":"top center",overflow:"hidden"});return n.addAnimation(c),n},w=(t,s,o=300)=>{const a=e(),r=t.host||t,i=t.querySelector(".toast-wrapper");switch(a.addElement(i),s){case"bottom":a.fromTo("transform","translate3d(0, calc(-12px - var(--safe-area-bottom, 0px)), 0)","translate3d(0, 200%, 0)");break;case"middle":a.fromTo("opacity",.99,0);break;default:a.fromTo("transform","translate3d(0, calc(12px + var(--safe-area-top, 0px)), 0)","translate3d(0, -200%, 0)")}const n=e().addElement(r).easing("cubic-bezier(.36,.66,.04,1)").duration(o).addAnimation(a),c=e().beforeClearStyles(["transform"]).afterClearStyles(["transform"]).onFinish((()=>{}));return n.addAnimation(c),n},v=class{constructor(o){t(this,o),this.didPresent=s(this,"toastDidPresent",7),this.willPresent=s(this,"toastWillPresent",7),this.willDismiss=s(this,"toastWillDismiss",7),this.didDismiss=s(this,"toastDidDismiss",7),this.gestureAnimationDismissing=!1,this.presented=!1,this.duration=0,this.keyboardClose=!1,this.position="top",this.swipeToClose=!0,this.animated=!0,this.dispatchCancelHandler=t=>{if(h(t.detail.role)){const t=this.getButtons().find((t=>"cancel"===t.role));this.callButtonHandler(t)}}}swipeToCloseChanged(t){this.gesture?this.gesture.enable(t):t&&this.initSwipeToClose()}connectedCallback(){d(this.el)}async present(){await p(this,x,this.position),this.swipeToClose&&this.initSwipeToClose(),this.duration>0&&(this.durationTimeout=setTimeout((()=>this.dismiss(void 0,"timeout")),this.duration))}initSwipeToClose(){const t=this.animation=(this.leaveAnimation||w)(this.el.shadowRoot,this.position);this.gesture=((t,s,o,a)=>{const r=t.querySelector(".toast-wrapper").clientHeight;console.log(r);let e=!1;const l="top"===o?-1:1,h=c({el:t,gestureName:"toastSwipeToClose",gesturePriority:40,direction:"y",threshold:10,canStart:async t=>!!t.event.target,onStart:()=>{s.progressStart(!0,e?1:0)},onMove:t=>{const o=i(1e-4,t.deltaY*l/(2*r),.9999);s.progressStep(o)},onEnd:t=>{const o=t.velocityY,c=i(1e-4,t.deltaY*l/(2*r),.9999),d=(t.deltaY+1e3*o)/(2*r)*l>=.5;let p=d?-.001:.001;d?(s.easing("cubic-bezier(0.32, 0.72, 0, 1)"),p+=n([0,0],[.32,.72],[0,1],[1,1],c)[0]):(s.easing("cubic-bezier(1, 0, 0.68, 0.28)"),p+=n([0,0],[1,0],[.68,.28],[1,1],c)[0]);const b=((t,s)=>i(400,t/Math.abs(1.1*s),500))(d?c*r:(1-c)*r,o);e=d,h.enable(!1),s.onFinish((()=>{d||h.enable(!0)})).progressEnd(d?1:0,p,b),d&&a()}});return h})(this.el.shadowRoot,t,this.position,(()=>{this.gestureAnimationDismissing=!0,this.animation.onFinish((async()=>{await this.dismiss(void 0,"gesture"),this.gestureAnimationDismissing=!1}))})),this.gesture.enable(!0),console.log(this.gesture)}async dismiss(t,s){if(this.gestureAnimationDismissing&&"gesture"!==s)return!1;this.durationTimeout&&clearTimeout(this.durationTimeout);const o=b.get(this)||[],a=await m(this,t,s,w,this.position);return a&&(this.animation&&this.animation.destroy(),o.forEach((t=>t.destroy()))),this.animation=void 0,a}onDidDismiss(){return u(this.el,"toastDidDismiss")}onWillDismiss(){return u(this.el,"toastWillDismiss")}getButtons(){return this.buttons?this.buttons.map((t=>"string"==typeof t?{text:t}:t)):[]}async buttonClick(t){const s=t.role;return h(s)||await this.callButtonHandler(t)?this.dismiss(void 0,s):Promise.resolve()}async callButtonHandler(t){if(t&&t.handler)try{if(!1===await t.handler())return!1}catch(t){console.error(t)}return!0}renderButtons(t,s){if(0!==t.length)return o("div",{class:{"toast-button-group":!0,["toast-button-group-"+s]:!0}},t.map((t=>o("button",{type:"button",class:k(t),tabIndex:0,onClick:()=>this.buttonClick(t),part:"button"},o("div",{class:"toast-button-inner"},t.icon&&o("BKKR-icon",{icon:t.icon,slot:void 0===t.text?"icon-only":void 0,class:"toast-icon"}),t.text)))))}render(){const t=this.getButtons(),s=t.filter((t=>"start"===t.side)),r=t.filter((t=>"start"!==t.side)),i={"toast-wrapper":!0,["toast-"+this.position]:!0};return o(a,{style:{zIndex:""+(6e4+this.overlayIndex)},class:f(this.color,Object.assign({},g(this.cssClass))),tabindex:"-1",onBkkrToastWillDismiss:this.dispatchCancelHandler},o("div",{class:i},o("div",{class:"toast-container",part:"container"},this.renderButtons(s,"start"),o("div",{class:"toast-content"},void 0!==this.header&&o("div",{class:"toast-header",part:"header"},this.header),void 0!==this.message&&o("div",{class:"toast-message",part:"message",innerHTML:l(this.message)})),this.renderButtons(r,"end"))))}get el(){return r(this)}static get watchers(){return{swipeToClose:["swipeToCloseChanged"]}}},k=t=>Object.assign({"toast-button":!0,"toast-button-icon-only":void 0!==t.icon&&void 0===t.text,["toast-button-"+t.role]:void 0!==t.role,"state-focusable":!0,"state-activatable":!0},g(t.cssClass));v.style=":host{--border-width:0;--border-style:none;--border-color:initial;--box-shadow:0 15px 25px 0 rgba(var(--box-shadow-color, var(--bkkr-text-color-rgb, 0, 0, 0)), 0.1), 0 6px 20px 0 rgba(var(--box-shadow-color, var(--bkkr-text-color-rgb, 0, 0, 0)), 0.12), 0 13.2px 40px 0 rgba(var(--box-shadow-color, var(--bkkr-text-color-rgb, 0, 0, 0)), 0.08);--min-width:auto;--width:auto;--min-height:auto;--height:auto;--max-height:auto;--white-space:pre-wrap;--background:var(--bkkr-background-color, #fff);--border-radius:2em;--button-color:color-get(primary, base);--color:var(--bkkr-color-step-850, #262626);--max-width:700px;--start:calc(var(--bkkr-spacer, 16px) / 2);--end:var(--start);top:0;left:0;display:block;position:absolute;width:100%;height:100%;outline:none;color:var(--color);font-family:var(--default-font-sans-serif);font-size:14px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;contain:strict;z-index:1001;pointer-events:none}:host(.overlay-hidden){display:none}.toast-wrapper{border-radius:var(--border-radius);right:var(--end);left:var(--start);margin-left:auto;margin-right:auto;margin-top:auto;margin-bottom:auto;display:block;position:absolute;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow)}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.toast-wrapper{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}.toast-container{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;height:inherit;min-height:inherit;max-height:inherit;pointer-events:auto;contain:content}.toast-content{padding-left:15px;padding-right:15px;padding-top:15px;padding-bottom:15px;display:-ms-flexbox;display:flex;-ms-flex:1;flex:1;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;text-align:center}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.toast-content{padding-left:unset;padding-right:unset;-webkit-padding-start:15px;padding-inline-start:15px;-webkit-padding-end:15px;padding-inline-end:15px}}.toast-header{margin-bottom:2px;font-weight:700}.toast-message{-ms-flex:1;flex:1;white-space:var(--white-space)}.toast-button-group{display:-ms-flexbox;display:flex}.toast-button{border:0;outline:none;color:var(--button-color);z-index:0}.toast-icon{font-size:1.4em}.toast-button-inner{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.toast-wrapper.toast-top{top:0;-webkit-transform:translate3d(0, -200%, 0);transform:translate3d(0, -200%, 0)}.toast-wrapper.toast-middle{opacity:0.01}.toast-wrapper.toast-bottom{bottom:0;-webkit-transform:translate3d(0, 200%, 0);transform:translate3d(0, 200%, 0)}:host(.bkkr-color){--button-color:inherit;color:current-color(contrast)}:host(.bkkr-color) .toast-button-cancel{color:inherit}:host(.bkkr-color) .toast-wrapper{background:current-color(base)}";export{v as bkkr_toast}