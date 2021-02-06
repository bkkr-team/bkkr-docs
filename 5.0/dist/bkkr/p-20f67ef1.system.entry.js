var __awaiter=this&&this.__awaiter||function(t,e,r,n){function a(t){return t instanceof r?t:new r((function(e){e(t)}))}return new(r||(r=Promise))((function(r,i){function o(t){try{l(n.next(t))}catch(t){i(t)}}function s(t){try{l(n["throw"](t))}catch(t){i(t)}}function l(t){t.done?r(t.value):a(t.value).then(o,s)}l((n=n.apply(t,e||[])).next())}))};var __generator=this&&this.__generator||function(t,e){var r={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},n,a,i,o;return o={next:s(0),throw:s(1),return:s(2)},typeof Symbol==="function"&&(o[Symbol.iterator]=function(){return this}),o;function s(t){return function(e){return l([t,e])}}function l(o){if(n)throw new TypeError("Generator is already executing.");while(r)try{if(n=1,a&&(i=o[0]&2?a["return"]:o[0]?a["throw"]||((i=a["return"])&&i.call(a),0):a.next)&&!(i=i.call(a,o[1])).done)return i;if(a=0,i)o=[o[0]&2,i.value];switch(o[0]){case 0:case 1:i=o;break;case 4:r.label++;return{value:o[1],done:false};case 5:r.label++;a=o[1];o=[0];continue;case 7:o=r.ops.pop();r.trys.pop();continue;default:if(!(i=r.trys,i=i.length>0&&i[i.length-1])&&(o[0]===6||o[0]===2)){r=0;continue}if(o[0]===3&&(!i||o[1]>i[0]&&o[1]<i[3])){r.label=o[1];break}if(o[0]===6&&r.label<i[1]){r.label=i[1];i=o;break}if(i&&r.label<i[2]){r.label=i[2];r.ops.push(o);break}if(i[2])r.ops.pop();r.trys.pop();continue}o=e.call(t,r)}catch(t){o=[6,t];a=0}finally{n=i=0}if(o[0]&5)throw o[1];return{value:o[0]?o[1]:void 0,done:true}}};System.register(["./p-92f7c087.system.js","./p-d2d3f0b5.system.js","./p-af5365d2.system.js","./p-ef1392b0.system.js","./p-4c5bd054.system.js"],(function(t){"use strict";var e,r,n,a,i,o,s,l,u,d,p;return{setters:[function(t){e=t.r;r=t.e;n=t.h;a=t.H;i=t.g},function(t){o=t.e;s=t.f;l=t.d},function(){},function(t){u=t.createGesture},function(t){d=t.s;p=t.h}],execute:function(){var h=".range,:host{--knob-handle-size:calc(var(--knob-size) * 2);--knob-border-radius:50%;--knob-background:#fff;--knob-box-shadow:0 3px 1px rgba(0, 0, 0, 0.1), 0 4px 8px rgba(0, 0, 0, 0.13), 0 0 0 1px rgba(0, 0, 0, 0.02);--knob-size:24px;--bar-height:2px;--bar-background:rgba(var(--text-color-rgb, 0, 0, 0), 0.1);--bar-background-active:var(--color-base, var(--color-primary, #3880ff));--bar-border-radius:0;--height:42px;padding-left:16px;padding-right:16px;padding-top:8px;padding-bottom:8px;display:-ms-flexbox;display:flex;position:relative;-ms-flex:3;flex:3;-ms-flex-align:center;align-items:center;font-family:var(--default-font-sans-serif);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:2}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.range,:host{padding-left:unset;padding-right:unset;-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px}}:host(.range-disabled){pointer-events:none;opacity:0.5}::slotted(bkkr-label){-ms-flex:initial;flex:initial}::slotted(bkkr-icon[slot]){font-size:24px}::slotted([slot=start]){margin-left:0;margin-right:var(--bkkr-spacer, 16px);margin-top:0;margin-bottom:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){::slotted([slot=start]){margin-left:unset;margin-right:unset;-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:var(--bkkr-spacer, 16px);margin-inline-end:var(--bkkr-spacer, 16px)}}::slotted([slot=end]){margin-left:var(--bkkr-spacer, 16px);margin-right:0;margin-top:0;margin-bottom:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){::slotted([slot=end]){margin-left:unset;margin-right:unset;-webkit-margin-start:var(--bkkr-spacer, 16px);margin-inline-start:var(--bkkr-spacer, 16px);-webkit-margin-end:0;margin-inline-end:0}}.range-slider{position:relative;-ms-flex:1;flex:1;width:100%;height:var(--height);contain:size layout style;cursor:-webkit-grab;cursor:grab;-ms-touch-action:pan-y;touch-action:pan-y}:host(.range-pressed) .range-slider{cursor:-webkit-grabbing;cursor:grabbing}.range-pin{padding-left:8px;padding-right:8px;padding-top:8px;padding-bottom:8px;display:inline-block;position:relative;top:-20px;min-width:28px;-webkit-transform:translate3d(0, 28px, 0) scale(0.01);transform:translate3d(0, 28px, 0) scale(0.01);-webkit-transition:-webkit-transform 120ms ease;transition:-webkit-transform 120ms ease;transition:transform 120ms ease;transition:transform 120ms ease, -webkit-transform 120ms ease;background:transparent;color:var(--bkkr-text-color, #000);font-size:12px;text-align:center;-webkit-box-sizing:border-box;box-sizing:border-box}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.range-pin{padding-left:unset;padding-right:unset;-webkit-padding-start:8px;padding-inline-start:8px;-webkit-padding-end:8px;padding-inline-end:8px}}:host(.range-has-pin){padding-top:20px}.range-bar{border-radius:var(--bar-border-radius);top:calc((var(--height) - var(--bar-height)) / 2);left:0;position:absolute;width:100%;height:var(--bar-height);pointer-events:none;background:var(--bar-background)}[dir=rtl] .range-bar,:host-context([dir=rtl]) .range-bar{left:unset}.range-bar-active{bottom:0;width:auto;background:var(--bar-background-active)}.range-tick{margin-left:-1px;border-radius:0;position:absolute;top:18px;width:2px;height:8px;pointer-events:none;background:rgba(var(--text-color-rgb, 0, 0, 0), 0.1)}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.range-tick{margin-left:unset;-webkit-margin-start:-1px;margin-inline-start:-1px}}.range-tick-active{background:var(--bar-background-active)}.range-knob{border-radius:var(--knob-border-radius);top:calc(50% - var(--knob-size) / 2);left:calc(50% - var(--knob-size) / 2);position:absolute;width:var(--knob-size);height:var(--knob-size);background:var(--knob-background);-webkit-box-shadow:var(--knob-box-shadow);box-shadow:var(--knob-box-shadow);z-index:2;pointer-events:none}[dir=rtl] .range-knob,:host-context([dir=rtl]) .range-knob{left:unset}.range-knob-handle{top:calc((var(--height) - var(--knob-handle-size)) / 2);left:0;margin-left:calc(0px - var(--knob-handle-size) / 2);position:absolute;width:var(--knob-handle-size);height:var(--knob-handle-size);text-align:center}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.range-knob-handle{margin-left:unset;-webkit-margin-start:calc(0px - var(--knob-handle-size) / 2);margin-inline-start:calc(0px - var(--knob-handle-size) / 2)}}[dir=rtl] .range-knob-handle,:host-context([dir=rtl]) .range-knob-handle{left:unset}.range-knob-handle:active,.range-knob-handle:focus{outline:none}.range-knob-pressed .range-pin{-webkit-transform:translate3d(0, 0, 0) scale(1);transform:translate3d(0, 0, 0) scale(1)}:host(.range-pressed) .range-bar-active{will-change:left, right}:host(.range-color) .range-bar-active,:host(.range-color) .range-tick-active{background:var(--color-base)}:host(.in-item){width:100%}:host(.in-item) ::slotted(bkkr-label){-ms-flex-item-align:center;align-self:center}";var b=t("bkkr_range",function(){function t(t){var n=this;e(this,t);this.bkkrChange=r(this,"bkkrChange",7);this.bkkrStyle=r(this,"bkkrStyle",7);this.bkkrFocus=r(this,"bkkrFocus",7);this.bkkrBlur=r(this,"bkkrBlur",7);this.didLoad=false;this.noUpdate=false;this.hasFocus=false;this.ratioA=0;this.ratioB=0;this.debounce=0;this.name="";this.dualKnobs=false;this.min=0;this.max=100;this.pin=false;this.snaps=false;this.step=1;this.ticks=true;this.disabled=false;this.value=0;this.clampBounds=function(t){return o(n.min,t,n.max)};this.ensureValueInBounds=function(t){if(n.dualKnobs){return{lower:n.clampBounds(t.lower),upper:n.clampBounds(t.upper)}}else{return n.clampBounds(t)}};this.setupGesture=function(){return __awaiter(n,void 0,void 0,(function(){var t;var e=this;return __generator(this,(function(r){t=this.rangeSlider;if(t){this.gesture=u({el:t,gestureName:"range",gesturePriority:100,threshold:0,onStart:function(t){return e.onStart(t)},onMove:function(t){return e.onMove(t)},onEnd:function(t){return e.onEnd(t)}});this.gesture.enable(!this.disabled)}return[2]}))}))};this.handleKeyboard=function(t,e){var r=n.step;r=r>0?r:1;r=r/(n.max-n.min);if(!e){r*=-1}if(t==="A"){n.ratioA=o(0,n.ratioA+r,1)}else{n.ratioB=o(0,n.ratioB+r,1)}n.updateValue()};this.onBlur=function(){if(n.hasFocus){n.hasFocus=false;n.bkkrBlur.emit();n.emitStyle()}};this.onFocus=function(){if(!n.hasFocus){n.hasFocus=true;n.bkkrFocus.emit();n.emitStyle()}}}t.prototype.debounceChanged=function(){this.bkkrChange=s(this.bkkrChange,this.debounce)};t.prototype.minChanged=function(){if(!this.noUpdate){this.updateRatio()}};t.prototype.maxChanged=function(){if(!this.noUpdate){this.updateRatio()}};t.prototype.disabledChanged=function(){if(this.gesture){this.gesture.enable(!this.disabled)}this.emitStyle()};t.prototype.valueChanged=function(t){if(!this.noUpdate){this.updateRatio()}t=this.ensureValueInBounds(t);this.bkkrChange.emit({value:t})};t.prototype.componentDidLoad=function(){this.setupGesture();this.didLoad=true};t.prototype.connectedCallback=function(){this.updateRatio();this.debounceChanged();this.disabledChanged();if(this.didLoad){this.setupGesture()}};t.prototype.disconnectedCallback=function(){if(this.gesture){this.gesture.destroy();this.gesture=undefined}};t.prototype.getValue=function(){var t=this.value||0;if(this.dualKnobs){if(typeof t==="object"){return t}return{lower:0,upper:t}}else{if(typeof t==="object"){return t.upper}return t}};t.prototype.emitStyle=function(){this.bkkrStyle.emit({interactive:true,"interactive-disabled":this.disabled})};t.prototype.onStart=function(t){var e=this.rect=this.rangeSlider.getBoundingClientRect();var r=t.currentX;var n=o(0,(r-e.left)/e.width,1);if(document.dir==="rtl"){n=1-n}this.pressedKnob=!this.dualKnobs||Math.abs(this.ratioA-n)<Math.abs(this.ratioB-n)?"A":"B";this.setFocus(this.pressedKnob);this.update(r)};t.prototype.onMove=function(t){this.update(t.currentX)};t.prototype.onEnd=function(t){this.update(t.currentX);this.pressedKnob=undefined};t.prototype.update=function(t){var e=this.rect;var r=o(0,(t-e.left)/e.width,1);if(document.dir==="rtl"){r=1-r}if(this.snaps){r=f(g(r,this.min,this.max,this.step),this.min,this.max)}if(this.pressedKnob==="A"){this.ratioA=r}else{this.ratioB=r}this.updateValue()};Object.defineProperty(t.prototype,"valA",{get:function(){return g(this.ratioA,this.min,this.max,this.step)},enumerable:false,configurable:true});Object.defineProperty(t.prototype,"valB",{get:function(){return g(this.ratioB,this.min,this.max,this.step)},enumerable:false,configurable:true});Object.defineProperty(t.prototype,"ratioLower",{get:function(){if(this.dualKnobs){return Math.min(this.ratioA,this.ratioB)}return 0},enumerable:false,configurable:true});Object.defineProperty(t.prototype,"ratioUpper",{get:function(){if(this.dualKnobs){return Math.max(this.ratioA,this.ratioB)}return this.ratioA},enumerable:false,configurable:true});t.prototype.updateRatio=function(){var t=this.getValue();var e=this,r=e.min,n=e.max;if(this.dualKnobs){this.ratioA=f(t.lower,r,n);this.ratioB=f(t.upper,r,n)}else{this.ratioA=f(t,r,n)}};t.prototype.updateValue=function(){this.noUpdate=true;var t=this,e=t.valA,r=t.valB;this.value=!this.dualKnobs?e:{lower:Math.min(e,r),upper:Math.max(e,r)};this.noUpdate=false};t.prototype.setFocus=function(t){if(this.el.shadowRoot){var e=this.el.shadowRoot.querySelector(t==="A"?".range-knob-a":".range-knob-b");if(e){e.focus()}}};t.prototype.render=function(){var t;var e=this;var r=this,i=r.min,o=r.max,s=r.step,u=r.el,h=r.handleKeyboard,b=r.pressedKnob,g=r.disabled,k=r.pin,m=r.ratioLower,v=r.ratioUpper;var x=m*100+"%";var y=100-v*100+"%";var w=document;var B=w.dir==="rtl";var A=B?"right":"left";var z=B?"left":"right";var C=function(t){var e;return e={},e[A]=t[A],e};var K=(t={},t[A]=x,t[z]=y,t);var S=[];if(this.snaps&&this.ticks){for(var F=i;F<=o;F+=s){var j=f(F,i,o);var _={ratio:j,active:j>=m&&j<=v};_[A]=j*100+"%";S.push(_)}}l(true,u,this.name,JSON.stringify(this.getValue()),g);return n(a,{onFocusin:this.onFocus,onFocusout:this.onBlur,class:d(this.color,{"in-item":p("bkkr-item",u),"range-disabled":g,"range-pressed":b!==undefined,"range-has-pin":k})},n("slot",{name:"start"}),n("div",{class:"range-slider",ref:function(t){return e.rangeSlider=t}},S.map((function(t){return n("div",{style:C(t),role:"presentation",class:{"range-tick":true,"range-tick-active":t.active},part:t.active?"tick-active":"tick"})})),n("div",{class:"range-bar",role:"presentation",part:"bar"}),n("div",{class:"range-bar range-bar-active",role:"presentation",style:K,part:"bar-active"}),c(B,{knob:"A",pressed:b==="A",value:this.valA,ratio:this.ratioA,pin:k,disabled:g,handleKeyboard:h,min:i,max:o}),this.dualKnobs&&c(B,{knob:"B",pressed:b==="B",value:this.valB,ratio:this.ratioB,pin:k,disabled:g,handleKeyboard:h,min:i,max:o})),n("slot",{name:"end"}))};Object.defineProperty(t.prototype,"el",{get:function(){return i(this)},enumerable:false,configurable:true});Object.defineProperty(t,"watchers",{get:function(){return{debounce:["debounceChanged"],min:["minChanged"],max:["maxChanged"],disabled:["disabledChanged"],value:["valueChanged"]}},enumerable:false,configurable:true});return t}());var c=function(t,e){var r=e.knob,a=e.value,i=e.ratio,o=e.min,s=e.max,l=e.disabled,u=e.pressed,d=e.pin,p=e.handleKeyboard;var h=t?"right":"left";var b=function(){var t={};t[h]=i*100+"%";return t};return n("div",{onKeyDown:function(t){var e=t.key;if(e==="ArrowLeft"||e==="ArrowDown"){p(r,false);t.preventDefault();t.stopPropagation()}else if(e==="ArrowRight"||e==="ArrowUp"){p(r,true);t.preventDefault();t.stopPropagation()}},class:{"range-knob-handle":true,"range-knob-a":r==="A","range-knob-b":r==="B","range-knob-pressed":u,"range-knob-min":a===o,"range-knob-max":a===s},style:b(),role:"slider",tabindex:l?-1:0,"aria-valuemin":o,"aria-valuemax":s,"aria-disabled":l?"true":null,"aria-valuenow":a},d&&n("div",{class:"range-pin",role:"presentation",part:"pin"},Math.round(a)),n("div",{class:"range-knob",role:"presentation",part:"knob"}))};var g=function(t,e,r,n){var a=(r-e)*t;if(n>0){a=Math.round(a/n)*n+e}return o(e,a,r)};var f=function(t,e,r){return o(0,(t-e)/(r-e),1)};b.style=h}}}));