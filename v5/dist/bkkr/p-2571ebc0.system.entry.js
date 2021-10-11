var __awaiter=this&&this.__awaiter||function(t,e,r,n){function i(t){return t instanceof r?t:new r((function(e){e(t)}))}return new(r||(r=Promise))((function(r,a){function s(t){try{u(n.next(t))}catch(t){a(t)}}function o(t){try{u(n["throw"](t))}catch(t){a(t)}}function u(t){t.done?r(t.value):i(t.value).then(s,o)}u((n=n.apply(t,e||[])).next())}))};var __generator=this&&this.__generator||function(t,e){var r={label:0,sent:function(){if(a[0]&1)throw a[1];return a[1]},trys:[],ops:[]},n,i,a,s;return s={next:o(0),throw:o(1),return:o(2)},typeof Symbol==="function"&&(s[Symbol.iterator]=function(){return this}),s;function o(t){return function(e){return u([t,e])}}function u(s){if(n)throw new TypeError("Generator is already executing.");while(r)try{if(n=1,i&&(a=s[0]&2?i["return"]:s[0]?i["throw"]||((a=i["return"])&&a.call(i),0):i.next)&&!(a=a.call(i,s[1])).done)return a;if(i=0,a)s=[s[0]&2,a.value];switch(s[0]){case 0:case 1:a=s;break;case 4:r.label++;return{value:s[1],done:false};case 5:r.label++;i=s[1];s=[0];continue;case 7:s=r.ops.pop();r.trys.pop();continue;default:if(!(a=r.trys,a=a.length>0&&a[a.length-1])&&(s[0]===6||s[0]===2)){r=0;continue}if(s[0]===3&&(!a||s[1]>a[0]&&s[1]<a[3])){r.label=s[1];break}if(s[0]===6&&r.label<a[1]){r.label=a[1];a=s;break}if(a&&r.label<a[2]){r.label=a[2];r.ops.push(s);break}if(a[2])r.ops.pop();r.trys.pop();continue}s=e.call(t,r)}catch(t){s=[6,t];i=0}finally{n=a=0}if(s[0]&5)throw s[1];return{value:s[0]?s[1]:void 0,done:true}}};
/*!
 * (C) BKKR Framework https://bkkr-team.github.io/bkkr-docs/ - MIT License
 */System.register(["./p-bd1be62f.system.js","./p-7c09dde3.system.js"],(function(t,e){"use strict";var r,n,i,a,s,o,u,l;return{setters:[function(t){r=t.r;n=t.c;i=t.a;a=t.h;s=t.H;o=t.g},function(t){u=t.s;l=t.h}],execute:function(){var c=":host{--background:rgba(var(--bkkr-text-color-rgb, 0, 0, 0), 0.04);--border-radius:44px;border-radius:var(--border-radius);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;margin-left:var(--bkkr-spacer, 16px);margin-right:var(--bkkr-spacer, 16px);margin-top:0;margin-bottom:0;display:-ms-flexbox;display:flex;position:relative;-ms-flex-align:stretch;align-items:stretch;-ms-flex-pack:center;justify-content:center;background:var(--background);font-size:inherit;text-align:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host{margin-left:unset;margin-right:unset;-webkit-margin-start:var(--bkkr-spacer, 16px);margin-inline-start:var(--bkkr-spacer, 16px);-webkit-margin-end:var(--bkkr-spacer, 16px);margin-inline-end:var(--bkkr-spacer, 16px)}}:host(.segment-scrollable){-ms-flex-pack:start;justify-content:start;width:auto;overflow-x:auto}:host(.segment-scrollable::-webkit-scrollbar){display:none}:host(.segment-color){background:var(--color-base, 0.04)}:host(.in-toolbar){margin-left:calc(var(--bkkr-spacer, 16px) - 4px);margin-right:calc(var(--bkkr-spacer, 16px) - 4px);margin-top:0;margin-bottom:0;width:auto}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host(.in-toolbar){margin-left:unset;margin-right:unset;-webkit-margin-start:calc(var(--bkkr-spacer, 16px) - 4px);margin-inline-start:calc(var(--bkkr-spacer, 16px) - 4px);-webkit-margin-end:calc(var(--bkkr-spacer, 16px) - 4px);margin-inline-end:calc(var(--bkkr-spacer, 16px) - 4px)}}:host(.in-toolbar:not(.segment-color)){background:var(--toolbar-segment-background, var(--background))}:host(.in-toolbar-color:not(.segment-color)){background:var(--color-contrast, 0.11)}";var h=t("bkkr_segment",function(){function t(t){var e=this;r(this,t);this.bkkrChange=n(this,"bkkrChange",7);this.bkkrSelect=n(this,"bkkrSelect",7);this.bkkrStyle=n(this,"bkkrStyle",7);this.didInit=false;this.activated=false;this.disabled=false;this.scrollable=false;this.swipeGesture=true;this.selectOnFocus=false;this.onClick=function(t){var r=t.target;var n=e.checked;if(r.tagName==="BKKR-SEGMENT"){return}e.value=r.value;if(e.scrollable||!e.swipeGesture){if(n){e.checkButton(n,r)}else{e.setCheckedClasses()}}e.checked=r};this.getSegmentButton=function(t){var r=e.getButtons().filter((function(t){return!t.disabled}));var n=r.findIndex((function(t){return t===document.activeElement}));switch(t){case"first":return r[0];case"last":return r[r.length-1];case"next":return r[n+1]||r[0];case"previous":return r[n-1]||r[r.length-1];default:return null}}}t.prototype.colorChanged=function(t,e){if(e===undefined&&t!==undefined||e!==undefined&&t===undefined){this.emitStyle()}};t.prototype.swipeGestureChanged=function(){this.gestureChanged()};t.prototype.valueChanged=function(t,e){this.bkkrSelect.emit({value:t});if(e!==""||this.didInit){if(!this.activated){this.bkkrChange.emit({value:t})}else{this.valueAfterGesture=t}}};t.prototype.disabledChanged=function(){this.gestureChanged();var t=this.getButtons();for(var e=0,r=t;e<r.length;e++){var n=r[e];n.disabled=this.disabled}};t.prototype.gestureChanged=function(){if(this.gesture){this.gesture.enable(!this.scrollable&&!this.disabled&&this.swipeGesture)}};t.prototype.connectedCallback=function(){this.emitStyle()};t.prototype.componentWillLoad=function(){this.emitStyle()};t.prototype.componentDidLoad=function(){return __awaiter(this,void 0,void 0,(function(){var t;var r=this;return __generator(this,(function(n){switch(n.label){case 0:this.setCheckedClasses();this.ensureFocusable();t=this;return[4,e.import("./p-85e87925.system.js")];case 1:t.gesture=n.sent().createGesture({el:this.el,gestureName:"segment",gesturePriority:100,threshold:0,passive:false,onStart:function(t){return r.onStart(t)},onMove:function(t){return r.onMove(t)},onEnd:function(t){return r.onEnd(t)}});this.gestureChanged();if(this.disabled){this.disabledChanged()}this.didInit=true;return[2]}}))}))};t.prototype.onStart=function(t){this.activate(t)};t.prototype.onMove=function(t){this.setNextIndex(t)};t.prototype.onEnd=function(t){this.setActivated(false);this.setNextIndex(t,true);t.event.stopImmediatePropagation();var e=this.valueAfterGesture;if(e!==undefined){this.bkkrChange.emit({value:e});this.valueAfterGesture=undefined}};t.prototype.getButtons=function(){return Array.from(this.el.querySelectorAll("bkkr-segment-button"))};t.prototype.setActivated=function(t){var e=this.getButtons();e.forEach((function(e){if(t){e.classList.add("segment-button-activated")}else{e.classList.remove("segment-button-activated")}}));this.activated=t};t.prototype.activate=function(t){var e=this;var r=t.event.target;var n=this.getButtons();var i=n.find((function(t){return t.value===e.value}));if(r.tagName!=="BKKR-SEGMENT-BUTTON"){return}if(!i){this.value=r.value;this.setCheckedClasses()}if(this.value===r.value){this.setActivated(true)}};t.prototype.getIndicator=function(t){var e=t.shadowRoot||t;return e.querySelector(".segment-button-indicator")};t.prototype.checkButton=function(t,e){var r=this.getIndicator(t);var n=this.getIndicator(e);if(r===null||n===null){return}var a=r.getBoundingClientRect();var s=n.getBoundingClientRect();var o=a.width/s.width;var u=a.left-s.left;var l="translate3d("+u+"px, 0, 0) scaleX("+o+")";i((function(){n.classList.remove("segment-button-indicator-animated");n.style.setProperty("transform",l);n.getBoundingClientRect();n.classList.add("segment-button-indicator-animated");n.style.setProperty("transform","")}));this.value=e.value;this.setCheckedClasses()};t.prototype.setCheckedClasses=function(){var t=this;var e=this.getButtons();var r=e.findIndex((function(e){return e.value===t.value}));var n=r+1;this.checked=e.find((function(e){return e.value===t.value}));for(var i=0,a=e;i<a.length;i++){var s=a[i];s.classList.remove("segment-button-after-checked")}if(n<e.length){e[n].classList.add("segment-button-after-checked")}};t.prototype.setNextIndex=function(t,e){var r=this;if(e===void 0){e=false}var n=document.dir==="rtl";var i=this.activated;var a=this.getButtons();var s=a.findIndex((function(t){return t.value===r.value}));var o=a[s];var u;var l;if(s===-1){return}var c=o.getBoundingClientRect();var h=c.left;var d=c.width;var f=t.currentX;var g=c.top+c.height/2;var v=document.elementFromPoint(f,g);var p=n?f>h+d:f<h;var b=n?f<h:f>h+d;if(i&&!e){if(p){var m=s-1;if(m>=0){l=m}}else if(b){if(i&&!e){var m=s+1;if(m<a.length){l=m}}}if(l!==undefined&&!a[l].disabled){u=a[l]}}if(!i&&e){u=v}if(u!=null){if(u.tagName==="BKKR-SEGMENT"){return false}if(o!==u){this.checkButton(o,u)}}return true};t.prototype.emitStyle=function(){this.bkkrStyle.emit({segment:true})};t.prototype.onKeyDown=function(t){var e=document.dir==="rtl";var r=this.selectOnFocus;var n;switch(t.key){case"ArrowRight":t.preventDefault();n=e?this.getSegmentButton("previous"):this.getSegmentButton("next");break;case"ArrowLeft":t.preventDefault();n=e?this.getSegmentButton("next"):this.getSegmentButton("previous");break;case"Home":t.preventDefault();n=this.getSegmentButton("first");break;case"End":t.preventDefault();n=this.getSegmentButton("last");break;case" ":case"Enter":t.preventDefault();n=document.activeElement;r=true}if(!n){return}if(r){var i=this.checked||n;this.checkButton(i,n)}n.focus()};t.prototype.ensureFocusable=function(){var t;if(this.value!==undefined){return}var e=this.getButtons();(t=e[0])===null||t===void 0?void 0:t.setAttribute("tabindex","0")};t.prototype.render=function(){return a(s,{role:"tablist",onClick:this.onClick,class:u(this.color,{"in-toolbar":l("bkkr-toolbar",this.el),"in-toolbar-color":l("bkkr-toolbar[color]",this.el),"segment-activated":this.activated,"segment-disabled":this.disabled,"segment-scrollable":this.scrollable})},a("slot",null))};Object.defineProperty(t.prototype,"el",{get:function(){return o(this)},enumerable:false,configurable:true});Object.defineProperty(t,"watchers",{get:function(){return{color:["colorChanged"],swipeGesture:["swipeGestureChanged"],value:["valueChanged"],disabled:["disabledChanged"]}},enumerable:false,configurable:true});return t}());h.style=c}}}));