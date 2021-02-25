import{r as t,e as s,c as e,h as i,H as r,g as n}from"./p-8dfd188c.js";import{s as a,h as o}from"./p-09b2e663.js";const h=class{constructor(e){t(this,e),this.bkkrChange=s(this,"bkkrChange",7),this.bkkrSelect=s(this,"bkkrSelect",7),this.bkkrStyle=s(this,"bkkrStyle",7),this.didInit=!1,this.activated=!1,this.disabled=!1,this.scrollable=!1,this.swipeGesture=!0,this.onClick=t=>{const s=t.target,e=this.checked;"BKKR-SEGMENT"!==s.tagName&&(this.value=s.value,!this.scrollable&&this.swipeGesture||(e?this.checkButton(e,s):this.setCheckedClasses()),this.checked=s)}}colorChanged(t,s){(void 0===s&&void 0!==t||void 0!==s&&void 0===t)&&this.emitStyle()}swipeGestureChanged(){this.gestureChanged()}valueChanged(t,s){this.bkkrSelect.emit({value:t}),(""!==s||this.didInit)&&(this.activated?this.valueAfterGesture=t:this.bkkrChange.emit({value:t}))}disabledChanged(){this.gestureChanged();const t=this.getButtons();for(const s of t)s.disabled=this.disabled}gestureChanged(){this.gesture&&this.gesture.enable(!this.scrollable&&!this.disabled&&this.swipeGesture)}connectedCallback(){this.emitStyle()}componentWillLoad(){this.emitStyle()}async componentDidLoad(){this.setCheckedClasses(),this.gesture=(await __sc_import_bkkr("./p-e9923a82.js")).createGesture({el:this.el,gestureName:"segment",gesturePriority:100,threshold:0,passive:!1,onStart:t=>this.onStart(t),onMove:t=>this.onMove(t),onEnd:t=>this.onEnd(t)}),this.gestureChanged(),this.disabled&&this.disabledChanged(),this.didInit=!0}onStart(t){this.activate(t)}onMove(t){this.setNextIndex(t)}onEnd(t){this.setActivated(!1),this.setNextIndex(t,!0),t.event.stopImmediatePropagation();const s=this.valueAfterGesture;void 0!==s&&(this.bkkrChange.emit({value:s}),this.valueAfterGesture=void 0)}getButtons(){return Array.from(this.el.querySelectorAll("bkkr-segment-button"))}setActivated(t){this.getButtons().forEach((s=>{t?s.classList.add("segment-button-activated"):s.classList.remove("segment-button-activated")})),this.activated=t}activate(t){const s=t.event.target,e=this.getButtons().find((t=>t.value===this.value));"BKKR-SEGMENT-BUTTON"===s.tagName&&(e||(this.value=s.value,this.setCheckedClasses()),this.value===s.value&&this.setActivated(!0))}getIndicator(t){return(t.shadowRoot||t).querySelector(".segment-button-indicator")}checkButton(t,s){const i=this.getIndicator(t),r=this.getIndicator(s);if(null===i||null===r)return;const n=i.getBoundingClientRect(),a=r.getBoundingClientRect(),o=`translate3d(${n.left-a.left}px, 0, 0) scaleX(${n.width/a.width})`;e((()=>{r.classList.remove("segment-button-indicator-animated"),r.style.setProperty("transform",o),r.getBoundingClientRect(),r.classList.add("segment-button-indicator-animated"),r.style.setProperty("transform","")})),this.value=s.value,this.setCheckedClasses()}setCheckedClasses(){const t=this.getButtons(),s=t.findIndex((t=>t.value===this.value))+1;this.checked=t.find((t=>t.value===this.value));for(const s of t)s.classList.remove("segment-button-after-checked");s<t.length&&t[s].classList.add("segment-button-after-checked")}setNextIndex(t,s=!1){const e="rtl"===document.dir,i=this.activated,r=this.getButtons(),n=r.findIndex((t=>t.value===this.value)),a=r[n];let o,h;if(-1===n)return;const c=a.getBoundingClientRect(),l=c.left,g=c.width,b=t.currentX,m=document.elementFromPoint(b,c.top+c.height/2);if(i&&!s){if(e?b>l+g:b<l){const t=n-1;t>=0&&(h=t)}else if((e?b<l:b>l+g)&&i&&!s){const t=n+1;t<r.length&&(h=t)}void 0===h||r[h].disabled||(o=r[h])}if(!i&&s&&(o=m),null!=o){if("BKKR-SEGMENT"===o.tagName)return!1;a!==o&&this.checkButton(a,o)}return!0}emitStyle(){this.bkkrStyle.emit({segment:!0})}render(){return i(r,{onClick:this.onClick,class:a(this.color,{"in-toolbar":o("bkkr-toolbar",this.el),"in-toolbar-color":o("bkkr-toolbar[color]",this.el),"segment-activated":this.activated,"segment-disabled":this.disabled,"segment-scrollable":this.scrollable})},i("slot",null))}get el(){return n(this)}static get watchers(){return{color:["colorChanged"],swipeGesture:["swipeGestureChanged"],value:["valueChanged"],disabled:["disabledChanged"]}}};h.style=":host{--background:rgba(var(--bkkr-text-color-rgb, 0, 0, 0), 0.065);border-radius:0.75em;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;margin-left:var(--bkkr-spacer, 16px);margin-right:var(--bkkr-spacer, 16px);margin-top:0;margin-bottom:0;display:-ms-flexbox;display:flex;position:relative;-ms-flex-align:stretch;align-items:stretch;-ms-flex-pack:center;justify-content:center;background:var(--background);font-size:16px;text-align:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host{margin-left:unset;margin-right:unset;-webkit-margin-start:var(--bkkr-spacer, 16px);margin-inline-start:var(--bkkr-spacer, 16px);-webkit-margin-end:var(--bkkr-spacer, 16px);margin-inline-end:var(--bkkr-spacer, 16px)}}:host(.segment-scrollable){-ms-flex-pack:start;justify-content:start;width:auto;overflow-x:auto}:host(.segment-scrollable::-webkit-scrollbar){display:none}:host(.segment-color){background:var(--color-base, 0.065)}:host(.in-toolbar){margin-left:calc(var(--bkkr-spacer, 16px) - 4px);margin-right:calc(var(--bkkr-spacer, 16px) - 4px);margin-top:0;margin-bottom:0;width:auto}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host(.in-toolbar){margin-left:unset;margin-right:unset;-webkit-margin-start:calc(var(--bkkr-spacer, 16px) - 4px);margin-inline-start:calc(var(--bkkr-spacer, 16px) - 4px);-webkit-margin-end:calc(var(--bkkr-spacer, 16px) - 4px);margin-inline-end:calc(var(--bkkr-spacer, 16px) - 4px)}}:host(.in-toolbar:not(.segment-color)){background:var(--toolbar-segment-background, var(--background))}:host(.in-toolbar-color:not(.segment-color)){background:var(--color-contrast, 0.11)}";export{h as bkkr_segment}