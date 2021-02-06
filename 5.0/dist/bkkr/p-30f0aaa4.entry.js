import{r as t,e as a,h as o,H as r,g as s}from"./p-8dbe4215.js";import"./p-1498697d.js";import{c as i}from"./p-c132d639.js";import{s as e}from"./p-70b25770.js";import{i as n,b as l,c,e as d,f as h}from"./p-389728bf.js";import{g as p,s as b}from"./p-09b2e663.js";const m=(t,a)=>{const o=i(),r=i(),s=t.host||t,e=t.querySelector(".toast-wrapper");switch(r.addElement(e),a){case"bottom":r.fromTo("transform","translateY(200%)","translateY(calc(-10px - var(--safe-area-bottom, 0px)))");break;case"middle":e.style.top="50%",r.fromTo("opacity",.01,1);break;default:r.fromTo("transform","translateY(-200%)","translateY(calc(10px + var(--safe-area-top, 0px)))")}return o.addElement(s).easing("cubic-bezier(.155,1.105,.295,1.12)").duration(400).addAnimation(r)},u=(t,a)=>{const o=i(),r=i(),s=t.host||t,e=t.querySelector(".toast-wrapper");switch(r.addElement(e),a){case"bottom":r.fromTo("transform","translateY(calc(-10px - var(--safe-area-bottom, 0px)))","translateY(200%)");break;case"middle":r.fromTo("opacity",.99,0);break;default:r.fromTo("transform","translateY(calc(10px + var(--safe-area-top, 0px)))","translateY(-200%)")}return o.addElement(s).easing("cubic-bezier(.36,.66,.04,1)").duration(300).addAnimation(r)},g=class{constructor(o){t(this,o),this.didPresent=a(this,"toastDidPresent",7),this.willPresent=a(this,"toastWillPresent",7),this.willDismiss=a(this,"toastWillDismiss",7),this.didDismiss=a(this,"toastDidDismiss",7),this.presented=!1,this.duration=0,this.keyboardClose=!1,this.position="top",this.animated=!0,this.dispatchCancelHandler=t=>{if(n(t.detail.role)){const t=this.getButtons().find((t=>"cancel"===t.role));this.callButtonHandler(t)}}}connectedCallback(){l(this.el)}async present(){await c(this,m,this.position),this.duration>0&&(this.durationTimeout=setTimeout((()=>this.dismiss(void 0,"timeout")),this.duration))}dismiss(t,a){return this.durationTimeout&&clearTimeout(this.durationTimeout),d(this,t,a,u,this.position)}onDidDismiss(){return h(this.el,"toastDidDismiss")}onWillDismiss(){return h(this.el,"toastWillDismiss")}getButtons(){return this.buttons?this.buttons.map((t=>"string"==typeof t?{text:t}:t)):[]}async buttonClick(t){const a=t.role;return n(a)||await this.callButtonHandler(t)?this.dismiss(void 0,a):Promise.resolve()}async callButtonHandler(t){if(t&&t.handler)try{if(!1===await t.handler())return!1}catch(t){console.error(t)}return!0}renderButtons(t,a){if(0!==t.length)return o("div",{class:{"toast-button-group":!0,["toast-button-group-"+a]:!0}},t.map((t=>o("button",{type:"button",class:x(t),tabIndex:0,onClick:()=>this.buttonClick(t),part:"button"},o("div",{class:"toast-button-inner"},t.icon&&o("BKKR-icon",{icon:t.icon,slot:void 0===t.text?"icon-only":void 0,class:"toast-icon"}),t.text)))))}render(){const t=this.getButtons(),a=t.filter((t=>"start"===t.side)),s=t.filter((t=>"start"!==t.side)),i={"toast-wrapper":!0,["toast-"+this.position]:!0};return o(r,{style:{zIndex:""+(6e4+this.overlayIndex)},class:b(this.color,Object.assign({},p(this.cssClass))),tabindex:"-1",onBkkrToastWillDismiss:this.dispatchCancelHandler},o("div",{class:i},o("div",{class:"toast-container",part:"container"},this.renderButtons(a,"start"),o("div",{class:"toast-content"},void 0!==this.header&&o("div",{class:"toast-header",part:"header"},this.header),void 0!==this.message&&o("div",{class:"toast-message",part:"message",innerHTML:e(this.message)})),this.renderButtons(s,"end"))))}get el(){return s(this)}},x=t=>Object.assign({"toast-button":!0,"toast-button-icon-only":void 0!==t.icon&&void 0===t.text,["toast-button-"+t.role]:void 0!==t.role,"state-focusable":!0,"state-activatable":!0},p(t.cssClass));g.style=":host{--border-width:0;--border-style:none;--border-color:initial;--box-shadow:0 15px 25px 0 rgba(var(--box-shadow-color, var(--bkkr-text-color-rgb, 0, 0, 0)), 0.1), 0 6px 20px 0 rgba(var(--box-shadow-color, var(--bkkr-text-color-rgb, 0, 0, 0)), 0.12), 0 13.2px 40px 0 rgba(var(--box-shadow-color, var(--bkkr-text-color-rgb, 0, 0, 0)), 0.08);--min-width:auto;--width:auto;--min-height:auto;--height:auto;--max-height:auto;--white-space:pre-wrap;--background:var(--bkkr-background-color, #fff);--border-radius:2em;--button-color:color-get(primary, base);--color:var(--bkkr-color-step-850, #262626);--max-width:700px;--start:calc(var(--bkkr-spacer, 16px) / 2);--end:var(--start);top:0;left:0;display:block;position:absolute;width:100%;height:100%;outline:none;color:var(--color);font-family:var(--default-font-sans-serif);font-size:14px;contain:strict;z-index:1001;pointer-events:none}:host(.overlay-hidden){display:none}.toast-wrapper{border-radius:var(--border-radius);right:var(--end);left:var(--start);margin-left:auto;margin-right:auto;margin-top:auto;margin-bottom:auto;display:block;position:absolute;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow)}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.toast-wrapper{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}.toast-container{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;height:inherit;min-height:inherit;max-height:inherit;pointer-events:auto;contain:content}.toast-content{padding-left:15px;padding-right:15px;padding-top:15px;padding-bottom:15px;display:-ms-flexbox;display:flex;-ms-flex:1;flex:1;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;text-align:center}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.toast-content{padding-left:unset;padding-right:unset;-webkit-padding-start:15px;padding-inline-start:15px;-webkit-padding-end:15px;padding-inline-end:15px}}.toast-header{margin-bottom:2px;font-weight:700}.toast-message{-ms-flex:1;flex:1;white-space:var(--white-space)}.toast-button-group{display:-ms-flexbox;display:flex}.toast-button{border:0;outline:none;color:var(--button-color);z-index:0}.toast-icon{font-size:1.4em}.toast-button-inner{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.toast-wrapper.toast-top{top:0;-webkit-transform:translate3d(0, -200%, 0);transform:translate3d(0, -200%, 0)}.toast-wrapper.toast-middle{opacity:0.01}.toast-wrapper.toast-bottom{bottom:0;-webkit-transform:translate3d(0, 200%, 0);transform:translate3d(0, 200%, 0)}:host(.bkkr-color){--button-color:inherit;color:current-color(contrast)}:host(.bkkr-color) .toast-button-cancel{color:inherit}:host(.bkkr-color) .toast-wrapper{background:current-color(base)}";export{g as bkkr_toast}