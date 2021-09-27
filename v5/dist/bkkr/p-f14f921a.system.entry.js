System.register(["./p-3fd5d37b.system.js","./p-7e283b4e.system.js","./p-5e4b8ffe.system.js"],(function(e){"use strict";var t,r,o,a,s,i,n,c,d;return{setters:[function(e){t=e.r;r=e.c;o=e.h;a=e.H;s=e.g},function(e){i=e.d;n=e.e},function(e){c=e.s;d=e.h}],execute:function(){var b=":host{--background:transparent;--border-color:var(--bkkr-border, rgba(var(--bkkr-text-color-rgb, 0, 0, 0), 0.3));--border-color-hover:var(--bkkr-border, rgba(var(--bkkr-text-color-rgb, 0, 0, 0), 0.3));--border-color-focus:var(--bkkr-border, rgba(var(--bkkr-text-color-rgb, 0, 0, 0), 0.3));--border-color-selected:var(--color-base, var(--color-primary, #3880ff));--border-width:2px;display:inline-block;position:relative;width:24px;height:24px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:2}label{top:0;left:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;position:absolute;width:100%;height:100%;border:0;outline:none;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;opacity:0}label::-moz-focus-inner{border:0}input{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;margin:0;padding:0;border:0;outline:0;opacity:0;overflow:hidden;clip:rect(0 0 0 0);-webkit-appearance:none;-moz-appearance:none;appearance:none}.checkbox-button{border-radius:6px;display:block;width:24px;height:24px;-webkit-transform:scale(var(--scale, 1)) translateZ(0);transform:scale(var(--scale, 1)) translateZ(0);-webkit-transition:stroke-dasharray 0.6s, stroke-dashoffset 0.6s, -webkit-box-shadow 0.3s;transition:stroke-dasharray 0.6s, stroke-dashoffset 0.6s, -webkit-box-shadow 0.3s;transition:stroke-dasharray 0.6s, stroke-dashoffset 0.6s, box-shadow 0.3s;transition:stroke-dasharray 0.6s, stroke-dashoffset 0.6s, box-shadow 0.3s, -webkit-box-shadow 0.3s;-webkit-box-shadow:inset 0 0 0 var(--sharp, 0.55px) var(--backdrop, var(--border-color));box-shadow:inset 0 0 0 var(--sharp, 0.55px) var(--backdrop, var(--border-color));z-index:1;pointer-events:none;fill:none;stroke:var(--border-color-selected, var(--border-color));stroke-width:var(--border-width);stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:var(--array, 86.12);stroke-dashoffset:var(--offset, 86.12)}@media (any-hover: hover){:host(:hover) .checkbox-button{--sharp:var(--border-width);--backdrop:var(--border-color-hover)}}:host(:focus) .checkbox-button,:host(.state-focused) .checkbox-button{--sharp:var(--border-width);--backdrop:var(--border-color-focus)}:host(.state-checked) .checkbox-button{--sharp:var(--border-width);--backdrop:var(--border-color-selected);--array:16.1 86.12;--offset:102.22;-webkit-transition:stroke-dasharray 0.5s, stroke-dashoffset 0.5s, -webkit-box-shadow 0.2s 0.3s;transition:stroke-dasharray 0.5s, stroke-dashoffset 0.5s, -webkit-box-shadow 0.2s 0.3s;transition:stroke-dasharray 0.5s, stroke-dashoffset 0.5s, box-shadow 0.2s 0.3s;transition:stroke-dasharray 0.5s, stroke-dashoffset 0.5s, box-shadow 0.2s 0.3s, -webkit-box-shadow 0.2s 0.3s}:host(.state-disabled){pointer-events:none;opacity:0.3}:host(.in-item){margin-left:0;margin-right:8px;margin-top:10px;margin-bottom:9px;display:block;position:static}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host(.in-item){margin-left:unset;margin-right:unset;-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:8px;margin-inline-end:8px}}:host(.in-item[slot=start]){margin-left:2px;margin-right:var(--bkkr-spacer, 16px);margin-top:8px;margin-bottom:8px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host(.in-item[slot=start]){margin-left:unset;margin-right:unset;-webkit-margin-start:2px;margin-inline-start:2px;-webkit-margin-end:var(--bkkr-spacer, 16px);margin-inline-end:var(--bkkr-spacer, 16px)}}";var h=e("bkkr_checkbox",function(){function e(e){var o=this;t(this,e);this.bkkrChange=r(this,"bkkrChange",7);this.bkkrFocus=r(this,"bkkrFocus",7);this.bkkrBlur=r(this,"bkkrBlur",7);this.bkkrStyle=r(this,"bkkrStyle",7);this.inputId="bkkr-cb-"+l++;this.name=this.inputId;this.checked=false;this.indeterminate=false;this.disabled=false;this.value="on";this.onClick=function(e){e.preventDefault();o.setFocus();o.checked=!o.checked;o.indeterminate=false};this.onFocus=function(){o.bkkrFocus.emit()};this.onBlur=function(){o.bkkrBlur.emit()}}e.prototype.componentWillLoad=function(){this.emitStyle()};e.prototype.checkedChanged=function(e){this.bkkrChange.emit({checked:e,value:this.value});this.emitStyle()};e.prototype.disabledChanged=function(){this.emitStyle()};e.prototype.emitStyle=function(){this.bkkrStyle.emit({"state-checked":this.checked,"interactive-disabled":this.disabled})};e.prototype.setFocus=function(){if(this.focusEl){this.focusEl.focus()}};e.prototype.render=function(){var e=this;var t=this,r=t.color,s=t.checked,b=t.disabled,h=t.el,l=t.indeterminate,k=t.inputId,p=t.name,u=t.value;var f=i(h,k),m=f.label,g=f.labelId,v=f.labelText;n(true,h,p,s?u:"",b);var x=l?o("path",{d:"M5 10.75L16 10.75",part:"mark"}):o("path",{d:"M5,10.75 L8.5,14.25 L19.4,2.3 C18.8333333,1.43333333 18.0333333,1 16,1 L5,1 C2.35,1 1,2.35 1,5 L1,16 C1,18.65 2.35,20 5,20 L16,20 C18.65,20 20,18.65 20,16 L20,7.99769186",part:"mark"});return o(a,{onClick:this.onClick,"aria-labelledby":m?g:null,"aria-checked":""+s,"aria-hidden":b?"true":null,role:"checkbox",class:c(r,{"in-item":d("bkkr-item",h),"checkbox-indeterminate":l,"state-checked":s,"state-disabled":b,"state-focusable":true,interactive:true})},o("svg",{class:"checkbox-button",viewBox:"0 0 21 21",part:"container"},x),o("label",{htmlFor:k},v),o("input",{type:"checkbox","aria-checked":""+s,disabled:b,id:k,onFocus:function(){return e.onFocus()},onBlur:function(){return e.onBlur()},ref:function(t){return e.focusEl=t}}))};Object.defineProperty(e.prototype,"el",{get:function(){return s(this)},enumerable:false,configurable:true});Object.defineProperty(e,"watchers",{get:function(){return{checked:["checkedChanged"],disabled:["disabledChanged"]}},enumerable:false,configurable:true});return e}());var l=0;h.style=b}}}));