var __awaiter=this&&this.__awaiter||function(t,e,n,r){function i(t){return t instanceof n?t:new n((function(e){e(t)}))}return new(n||(n=Promise))((function(n,a){function o(t){try{l(r.next(t))}catch(t){a(t)}}function s(t){try{l(r["throw"](t))}catch(t){a(t)}}function l(t){t.done?n(t.value):i(t.value).then(o,s)}l((r=r.apply(t,e||[])).next())}))};var __generator=this&&this.__generator||function(t,e){var n={label:0,sent:function(){if(a[0]&1)throw a[1];return a[1]},trys:[],ops:[]},r,i,a,o;return o={next:s(0),throw:s(1),return:s(2)},typeof Symbol==="function"&&(o[Symbol.iterator]=function(){return this}),o;function s(t){return function(e){return l([t,e])}}function l(o){if(r)throw new TypeError("Generator is already executing.");while(n)try{if(r=1,i&&(a=o[0]&2?i["return"]:o[0]?i["throw"]||((a=i["return"])&&a.call(i),0):i.next)&&!(a=a.call(i,o[1])).done)return a;if(i=0,a)o=[o[0]&2,a.value];switch(o[0]){case 0:case 1:a=o;break;case 4:n.label++;return{value:o[1],done:false};case 5:n.label++;i=o[1];o=[0];continue;case 7:o=n.ops.pop();n.trys.pop();continue;default:if(!(a=n.trys,a=a.length>0&&a[a.length-1])&&(o[0]===6||o[0]===2)){n=0;continue}if(o[0]===3&&(!a||o[1]>a[0]&&o[1]<a[3])){n.label=o[1];break}if(o[0]===6&&n.label<a[1]){n.label=a[1];a=o;break}if(a&&n.label<a[2]){n.label=a[2];n.ops.push(o);break}if(a[2])n.ops.pop();n.trys.pop();continue}o=e.call(t,n)}catch(t){o=[6,t];i=0}finally{r=a=0}if(o[0]&5)throw o[1];return{value:o[0]?o[1]:void 0,done:true}}};System.register(["./p-90bb25f5.system.js","./p-4c5bd054.system.js","./p-af5365d2.system.js","./p-bb64759c.system.js"],(function(t){"use strict";var e,n,r,i,a,o,s,l,u;return{setters:[function(t){e=t.r;n=t.e;r=t.c;i=t.h;a=t.H;o=t.g},function(t){s=t.s;l=t.h},function(){},function(t){u=t.c}],execute:function(){var c=":host{--background:rgba(var(--bkkr-text-color-rgb, 0, 0, 0), 0.065);border-radius:8px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:-ms-flexbox;display:flex;position:relative;-ms-flex-align:stretch;align-items:stretch;-ms-flex-pack:center;justify-content:center;width:100%;background:var(--background);text-align:center;contain:paint;overflow:hidden;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:0}:host(.segment-scrollable){-ms-flex-pack:start;justify-content:start;width:auto;overflow-x:auto}:host(.segment-scrollable::-webkit-scrollbar){display:none}:host(.segment-color){background:var(--color-base, 0.065)}:host(.in-toolbar){margin-left:auto;margin-right:auto;margin-top:0;margin-bottom:0;width:auto}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host(.in-toolbar){margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}:host(.in-toolbar:not(.segment-color)){background:var(--toolbar-segment-background, var(--background))}:host(.in-toolbar-color:not(.segment-color)){background:var(--color-contrast, 0.11)}";var h=t("bkkr_segment",function(){function t(t){var r=this;e(this,t);this.bkkrChange=n(this,"bkkrChange",7);this.bkkrSelect=n(this,"bkkrSelect",7);this.bkkrStyle=n(this,"bkkrStyle",7);this.didInit=false;this.activated=false;this.disabled=false;this.scrollable=false;this.swipeGesture=true;this.onClick=function(t){var e=t.target;var n=r.checked;if(e.tagName==="BKKR-SEGMENT"){return}r.value=e.value;if(r.scrollable||!r.swipeGesture){if(n){r.checkButton(n,e)}else{r.setCheckedClasses()}}r.checked=e}}t.prototype.colorChanged=function(t,e){if(e===undefined&&t!==undefined||e!==undefined&&t===undefined){this.emitStyle()}};t.prototype.swipeGestureChanged=function(){this.gestureChanged()};t.prototype.valueChanged=function(t,e){this.bkkrSelect.emit({value:t});if(e!==""||this.didInit){if(!this.activated){this.bkkrChange.emit({value:t})}else{this.valueAfterGesture=t}}};t.prototype.disabledChanged=function(){this.gestureChanged();var t=this.getButtons();for(var e=0,n=t;e<n.length;e++){var r=n[e];r.disabled=this.disabled}};t.prototype.gestureChanged=function(){if(this.gesture){this.gesture.enable(!this.scrollable&&!this.disabled&&this.swipeGesture)}};t.prototype.connectedCallback=function(){this.emitStyle()};t.prototype.componentWillLoad=function(){this.emitStyle()};t.prototype.componentDidLoad=function(){return __awaiter(this,void 0,void 0,(function(){var t=this;return __generator(this,(function(e){this.setCheckedClasses();this.gesture=u({el:this.el,gestureName:"segment",gesturePriority:100,threshold:0,passive:false,onStart:function(e){return t.onStart(e)},onMove:function(e){return t.onMove(e)},onEnd:function(e){return t.onEnd(e)}});this.gestureChanged();if(this.disabled){this.disabledChanged()}this.didInit=true;return[2]}))}))};t.prototype.onStart=function(t){this.activate(t)};t.prototype.onMove=function(t){this.setNextIndex(t)};t.prototype.onEnd=function(t){this.setActivated(false);t.event.stopImmediatePropagation();var e=this.valueAfterGesture;if(e!==undefined){this.bkkrChange.emit({value:e});this.valueAfterGesture=undefined}};t.prototype.getButtons=function(){return Array.from(this.el.querySelectorAll("bkkr-segment-button"))};t.prototype.setActivated=function(t){var e=this.getButtons();e.forEach((function(e){if(t){e.classList.add("segment-button-activated")}else{e.classList.remove("segment-button-activated")}}));this.activated=t};t.prototype.activate=function(t){var e=this;var n=t.event.target;var r=this.getButtons();var i=r.find((function(t){return t.value===e.value}));if(n.tagName!=="BKKR-SEGMENT-BUTTON"){return}if(!i){this.value=n.value;this.setCheckedClasses()}if(this.value===n.value){this.setActivated(true)}};t.prototype.getIndicator=function(t){var e=t.shadowRoot||t;return e.querySelector(".segment-button-indicator")};t.prototype.checkButton=function(t,e){var n=this.getIndicator(t);var i=this.getIndicator(e);if(n===null||i===null){return}var a=n.getBoundingClientRect();var o=i.getBoundingClientRect();var s=a.width/o.width;var l=a.left-o.left;var u="translate3d("+l+"px, 0, 0) scaleX("+s+")";r((function(){i.classList.remove("segment-button-indicator-animated");i.style.setProperty("transform",u);i.getBoundingClientRect();i.classList.add("segment-button-indicator-animated");i.style.setProperty("transform","")}));this.value=e.value;this.setCheckedClasses()};t.prototype.setCheckedClasses=function(){var t=this;var e=this.getButtons();var n=e.findIndex((function(e){return e.value===t.value}));var r=n+1;this.checked=e.find((function(e){return e.value===t.value}));for(var i=0,a=e;i<a.length;i++){var o=a[i];o.classList.remove("segment-button-after-checked")}if(r<e.length){e[r].classList.add("segment-button-after-checked")}};t.prototype.setNextIndex=function(t,e){var n=this;if(e===void 0){e=false}var r=document.dir==="rtl";var i=this.activated;var a=this.getButtons();var o=a.findIndex((function(t){return t.value===n.value}));var s=a[o];var l;var u;if(o===-1){return}var c=s.getBoundingClientRect();var h=c.left;var d=c.width;var f=t.currentX;var g=c.top+c.height/2;var v=document.elementFromPoint(f,g);var b=r?f>h+d:f<h;var p=r?f<h:f>h+d;if(i&&!e){if(b){var m=o-1;if(m>=0){u=m}}else if(p){if(i&&!e){var m=o+1;if(m<a.length){u=m}}}if(u!==undefined&&!a[u].disabled){l=a[u]}}if(!i&&e){l=v}if(l!=null){if(l.tagName==="BKKR-SEGMENT"){return false}if(s!==l){this.checkButton(s,l)}}return true};t.prototype.emitStyle=function(){this.bkkrStyle.emit({segment:true})};t.prototype.render=function(){return i(a,{onClick:this.onClick,class:s(this.color,{"in-toolbar":l("bkkr-toolbar",this.el),"in-toolbar-color":l("bkkr-toolbar[color]",this.el),"segment-activated":this.activated,"segment-disabled":this.disabled,"segment-scrollable":this.scrollable})},i("slot",null))};Object.defineProperty(t.prototype,"el",{get:function(){return o(this)},enumerable:false,configurable:true});Object.defineProperty(t,"watchers",{get:function(){return{color:["colorChanged"],swipeGesture:["swipeGestureChanged"],value:["valueChanged"],disabled:["disabledChanged"]}},enumerable:false,configurable:true});return t}());h.style=c}}}));