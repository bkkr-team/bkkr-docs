var __awaiter=this&&this.__awaiter||function(e,t,i,n){function a(e){return e instanceof i?e:new i((function(t){t(e)}))}return new(i||(i=Promise))((function(i,r){function o(e){try{l(n.next(e))}catch(e){r(e)}}function s(e){try{l(n["throw"](e))}catch(e){r(e)}}function l(e){e.done?i(e.value):a(e.value).then(o,s)}l((n=n.apply(e,t||[])).next())}))};var __generator=this&&this.__generator||function(e,t){var i={label:0,sent:function(){if(r[0]&1)throw r[1];return r[1]},trys:[],ops:[]},n,a,r,o;return o={next:s(0),throw:s(1),return:s(2)},typeof Symbol==="function"&&(o[Symbol.iterator]=function(){return this}),o;function s(e){return function(t){return l([e,t])}}function l(o){if(n)throw new TypeError("Generator is already executing.");while(i)try{if(n=1,a&&(r=o[0]&2?a["return"]:o[0]?a["throw"]||((r=a["return"])&&r.call(a),0):a.next)&&!(r=r.call(a,o[1])).done)return r;if(a=0,r)o=[o[0]&2,r.value];switch(o[0]){case 0:case 1:r=o;break;case 4:i.label++;return{value:o[1],done:false};case 5:i.label++;a=o[1];o=[0];continue;case 7:o=i.ops.pop();i.trys.pop();continue;default:if(!(r=i.trys,r=r.length>0&&r[r.length-1])&&(o[0]===6||o[0]===2)){i=0;continue}if(o[0]===3&&(!r||o[1]>r[0]&&o[1]<r[3])){i.label=o[1];break}if(o[0]===6&&i.label<r[1]){i.label=r[1];r=o;break}if(r&&i.label<r[2]){i.label=r[2];i.ops.push(o);break}if(r[2])i.ops.pop();i.trys.pop();continue}o=t.call(e,i)}catch(e){o=[6,e];a=0}finally{n=r=0}if(o[0]&5)throw o[1];return{value:o[0]?o[1]:void 0,done:true}}};System.register(["./p-b25c886d.system.js","./p-926d2b94.system.js","./p-4c58e3b5.system.js","./p-5e4b8ffe.system.js"],(function(e){"use strict";var t,i,n,a,r,o,s,l,d;return{setters:[function(e){t=e.r;i=e.e;n=e.h;a=e.H;r=e.g},function(e){o=e.i;s=e.f},function(e){l=e.p},function(e){d=e.s}],execute:function(){var u=function(e,t,i){if(t===undefined){return undefined}var n=[];var a=false;J.forEach((function(r,o){if(e.indexOf(r.f)>-1){var s="{"+o+"}";var l=c(r.f,t[r.k],t,i);if(!a&&l!==undefined&&t[r.k]!=null){a=true}n.push(s,l||"");e=e.replace(r.f,s)}}));if(!a){return undefined}for(var r=0;r<n.length;r+=2){e=e.replace(n[r],n[r+1])}return e};var c=function(e,t,i,n){if(e===N||e===E){try{t=new Date(i.year,i.month-1,i.day).getDay();if(e===N){return(n.dayNames?n.dayNames:L)[t]}return(n.dayShortNames?n.dayShortNames:K)[t]}catch(e){}return undefined}if(e===B){return i!==undefined&&i.hour!==undefined?i.hour<12?"AM":"PM":t?t.toUpperCase():""}if(e===q){return i!==undefined&&i.hour!==undefined?i.hour<12?"am":"pm":t||""}if(t==null){return""}if(e===D||e===F||e===I||e===C||e===j||e===Y){return g(t)}if(e===S){return x(t)}if(e===M){return(n.monthNames?n.monthNames:U)[t-1]}if(e===O){return(n.monthShortNames?n.monthShortNames:Z)[t-1]}if(e===V||e===P){if(t===0){return"12"}if(t>12){t-=12}if(e===V&&t<10){return"0"+t}}return t.toString()};var h=/^(\d{4}|[+\-]\d{6})(?:-(\d{2})(?:-(\d{2}))?)?(?:T(\d{2}):(\d{2})(?::(\d{2})(?:\.(\d{3}))?)?(?:(Z)|([+\-])(\d{2})(?::(\d{2}))?)?)?$/;var f=/^((\d{2}):(\d{2})(?::(\d{2})(?:\.(\d{3}))?)?(?:(Z)|([+\-])(\d{2})(?::(\d{2}))?)?)?$/;var p=function(e){var t=null;if(e!=null&&e!==""){t=f.exec(e);if(t){t.unshift(undefined,undefined);t[2]=t[3]=undefined}else{t=h.exec(e)}}if(t===null){return undefined}for(var i=1;i<8;i++){t[i]=t[i]!==undefined?parseInt(t[i],10):undefined}var n=0;if(t[9]&&t[10]){n=parseInt(t[10],10)*60;if(t[11]){n+=parseInt(t[11],10)}if(t[9]==="-"){n*=-1}}return{year:t[1],month:t[2],day:t[3],hour:t[4],minute:t[5],second:t[6],millisecond:t[7],tzOffset:n}};var m=function(e,t){if(e===void 0){e=""}if(t===void 0){t=""}if(e===undefined||e===null){e=""}if(e.length===10||e.length===7||e.length===4){e+=" "}var i=typeof e==="string"&&e.length>0?new Date(e):new Date;var n=new Date(Date.UTC(i.getFullYear(),i.getMonth(),i.getDate(),i.getHours(),i.getMinutes(),i.getSeconds(),i.getMilliseconds()));if(t&&t.length>0){return new Date(i.getTime()-v(n,t))}return n};var v=function(e,t){var i=new Date(e.toLocaleString("en-US",{timeZone:"utc"}));var n=new Date(e.toLocaleString("en-US",{timeZone:t}));return i.getTime()-n.getTime()};var b=function(e,t,i){if(!t||typeof t==="string"){var n=m(t,i);if(!Number.isNaN(n.getTime())){t=n.toISOString()}}if(t&&t!==""){if(typeof t==="string"){t=p(t);if(t){Object.assign(e,t);return true}}else if(t.year||t.hour||t.month||t.day||t.minute||t.second){if(t.ampm!==undefined&&t.hour!==undefined){t.hour.value=t.ampm.value==="pm"?t.hour.value===12?12:t.hour.value+12:t.hour.value===12?0:t.hour.value}for(var a=0,r=Object.keys(t);a<r.length;a++){var o=r[a];e[o]=t[o].value}return true}else if(t.ampm){t.hour={value:t.hour?t.hour.value:t.ampm.value==="pm"?e.hour<12?e.hour+12:e.hour:e.hour>=12?e.hour-12:e.hour};e["hour"]=t["hour"].value;e["ampm"]=t["ampm"].value;return true}console.warn('Error parsing date: "'+t+'". Please provide a valid ISO 8601 datetime format: https://www.w3.org/TR/NOTE-datetime')}else{for(var s in e){if(e.hasOwnProperty(s)){delete e[s]}}}return false};var y=function(e){var t="";if(e.year!==undefined){t=x(e.year);if(e.month!==undefined){t+="-"+g(e.month);if(e.day!==undefined){t+="-"+g(e.day);if(e.hour!==undefined){t+="T"+g(e.hour)+":"+g(e.minute)+":"+g(e.second);if(e.millisecond>0){t+="."+w(e.millisecond)}if(e.tzOffset===undefined){t+="Z"}else{t+=(e.tzOffset>0?"+":"-")+g(Math.floor(Math.abs(e.tzOffset/60)))+":"+g(e.tzOffset%60)}}}}}else if(e.hour!==undefined){t=g(e.hour)+":"+g(e.minute);if(e.second!==undefined){t+=":"+g(e.second);if(e.millisecond!==undefined){t+="."+w(e.millisecond)}}}return t};var k=function(e,t){if(e==null){return undefined}if(typeof e==="string"){e=e.replace(/\[|\]/g,"").split(",")}var i;if(Array.isArray(e)){i=e.map((function(e){return e.toString().trim()}))}if(i===undefined||i.length===0){console.warn('Invalid "'+t+'Names". Must be an array of strings, or a comma separated string.')}return i};var g=function(e){return("0"+(e!==undefined?Math.abs(e):"0")).slice(-2)};var w=function(e){return("00"+(e!==undefined?Math.abs(e):"0")).slice(-3)};var x=function(e){return("000"+(e!==undefined?Math.abs(e):"0")).slice(-4)};var S="YYYY";var D="YY";var M="MMMM";var O="MMM";var F="MM";var z="M";var N="DDDD";var E="DDD";var I="DD";var T="D";var C="HH";var _="H";var V="hh";var P="h";var j="mm";var A="m";var Y="ss";var H="s";var B="A";var q="a";var J=[{f:S,k:"year"},{f:M,k:"month"},{f:N,k:"day"},{f:O,k:"month"},{f:E,k:"day"},{f:D,k:"year"},{f:F,k:"month"},{f:I,k:"day"},{f:C,k:"hour"},{f:V,k:"hour"},{f:j,k:"minute"},{f:Y,k:"second"},{f:z,k:"month"},{f:T,k:"day"},{f:_,k:"hour"},{f:P,k:"hour"},{f:A,k:"minute"},{f:H,k:"second"},{f:B,k:"ampm"},{f:q,k:"ampm"}];var L=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];var K=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];var U=["January","February","March","April","May","June","July","August","September","October","November","December"];var Z=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];var W=".sc-bkkr-datetime-h{--placeholder-color:initial;--placeholder-font-style:initial;--placeholder-font-weight:initial;--padding-top:10px;--padding-end:calc(var(--bkkr-spacer, 16px) / 2);--padding-bottom:10px;--padding-start:0;--background:transparent;--color:initial;padding-left:0 !important;padding-right:0 !important;padding-top:0 !important;padding-bottom:0 !important;display:-ms-flexbox;display:flex;position:relative;-ms-flex:1;flex:1;-ms-flex-align:center;align-items:center;width:100%;background:var(--background);color:var(--color);font-family:var(--default-font-sans-serif);font-size:inherit}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.sc-bkkr-datetime-h{padding-left:unset;padding-right:unset;-webkit-padding-start:0 !important;padding-inline-start:0 !important;-webkit-padding-end:0 !important;padding-inline-end:0 !important}}bkkr-item.sc-bkkr-datetime-h:not(.item-label),bkkr-item:not(.item-label) .sc-bkkr-datetime-h{--padding-start:0}.item-label-stacked.sc-bkkr-datetime-h,.item-label-stacked .sc-bkkr-datetime-h,.item-label-floating.sc-bkkr-datetime-h,.item-label-floating .sc-bkkr-datetime-h{--padding-top:8px;--padding-bottom:8px;--padding-start:0px}.native-datetime.sc-bkkr-datetime{border-radius:var(--border-radius);padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);color:inherit;font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-align:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;white-space:inherit;display:inline-block;-ms-flex:1;flex:1;width:100%;max-width:100%;max-height:100%;border:0;outline:none;background:transparent;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-appearance:none;-moz-appearance:none;appearance:none}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.native-datetime.sc-bkkr-datetime{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.native-datetime.sc-bkkr-datetime::-moz-placeholder{-moz-transition:opacity 0.15s cubic-bezier(0.32, 0.72, 0, 1);transition:opacity 0.15s cubic-bezier(0.32, 0.72, 0, 1);transition-delay:var(--placeholder-transition-delay, none);color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity, 0.5)}.native-datetime.sc-bkkr-datetime::-ms-input-placeholder{-ms-transition:opacity 0.15s cubic-bezier(0.32, 0.72, 0, 1);transition:opacity 0.15s cubic-bezier(0.32, 0.72, 0, 1);transition-delay:var(--placeholder-transition-delay, none);color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity, 0.5)}.native-datetime.sc-bkkr-datetime::-webkit-input-placeholder{-webkit-transition:opacity 0.15s cubic-bezier(0.32, 0.72, 0, 1);transition:opacity 0.15s cubic-bezier(0.32, 0.72, 0, 1);-webkit-transition-delay:var(--placeholder-transition-delay, none);transition-delay:var(--placeholder-transition-delay, none);color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity, 0.5)}.native-datetime.sc-bkkr-datetime:-ms-input-placeholder{-ms-transition:opacity 0.15s cubic-bezier(0.32, 0.72, 0, 1);transition:opacity 0.15s cubic-bezier(0.32, 0.72, 0, 1);transition-delay:var(--placeholder-transition-delay, none);color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity, 0.5)}.native-datetime.sc-bkkr-datetime::placeholder{-webkit-transition:opacity 0.15s cubic-bezier(0.32, 0.72, 0, 1);transition:opacity 0.15s cubic-bezier(0.32, 0.72, 0, 1);-webkit-transition-delay:var(--placeholder-transition-delay, none);transition-delay:var(--placeholder-transition-delay, none);color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity, 0.5)}.native-datetime.sc-bkkr-datetime:-webkit-autofill{background-color:transparent}.native-datetime.sc-bkkr-datetime:invalid{-webkit-box-shadow:none;box-shadow:none}.native-datetime.sc-bkkr-datetime::-ms-clear{display:none}.native-datetime[disabled].sc-bkkr-datetime{opacity:0.4}.cloned-datetime.sc-bkkr-datetime{top:0;left:0;position:absolute;pointer-events:none}.datetime-clear-icon.sc-bkkr-datetime{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;background-position:center;width:30px;height:30px;border:0;outline:none;background-color:transparent;background-repeat:no-repeat;background-size:18px;visibility:hidden;-webkit-appearance:none;-moz-appearance:none;appearance:none}.datetime-clear-icon.sc-bkkr-datetime:focus{opacity:0.5}.has-value.sc-bkkr-datetime-h .datetime-clear-icon.sc-bkkr-datetime{visibility:visible}.has-focus.sc-bkkr-datetime-h{pointer-events:none}.has-focus.sc-bkkr-datetime-h datetime.sc-bkkr-datetime,.has-focus.sc-bkkr-datetime-h a.sc-bkkr-datetime,.has-focus.sc-bkkr-datetime-h button.sc-bkkr-datetime{pointer-events:auto}.input-clone.sc-bkkr-datetime{display:none}";var $=e("bkkr_datetime",function(){function e(e){var n=this;t(this,e);this.bkkrOpen=i(this,"bkkrOpen",7);this.bkkrCancel=i(this,"bkkrCancel",7);this.bkkrInput=i(this,"bkkrInput",7);this.bkkrChange=i(this,"bkkrChange",7);this.bkkrBlur=i(this,"bkkrBlur",7);this.bkkrFocus=i(this,"bkkrFocus",7);this.bkkrStyle=i(this,"bkkrStyle",7);this.datetimeId="bkkr-datetime-"+R++;this.inheritedAttributes={};this.locale={};this.datetimeValue={};this.fireFocusEvents=true;this.hasFocus=false;this.isExpanded=false;this.autofocus=false;this.clearInput=false;this.disabled=false;this.displayFormat=G;this.name=this.datetimeId;this.readonly=false;this.required=false;this.type="text";this.value=null;this.interfaceOptions={};this.onInput=function(e){var t=e.target;if(t){n.value=t.value||""}n.bkkrInput.emit(e)};this.onBlur=function(e){n.hasFocus=false;n.emitStyle();if(n.fireFocusEvents){n.bkkrBlur.emit(e)}};this.onFocus=function(e){n.hasFocus=true;n.emitStyle();if(n.fireFocusEvents){n.bkkrFocus.emit(e)}};this.onKeydown=function(e){if(e.key==="Enter"){var t=n.el.closest("form");var i=t===null||t===void 0?void 0:t.querySelector('[type="submit"]');if(i){i.click()}}};this.clearTextOnEnter=function(e){if(e.key==="Enter"){n.clearTextInput(e)}};this.clearTextInput=function(e){if(n.clearInput&&!n.readonly&&!n.disabled&&e){e.preventDefault();e.stopPropagation();n.setFocus()}n.value="";if(n.nativeinput){n.nativeinput.value=""}}}e.prototype.disabledChanged=function(){this.emitStyle()};e.prototype.valueChanged=function(){this.emitStyle();this.updateDatetimeValue(this.value);this.bkkrChange.emit({value:this.value==null?this.value:this.value.toString()})};e.prototype.componentWillLoad=function(){this.inheritedAttributes=o(this.el,["tabindex","title"]);this.locale={monthNames:k(this.monthNames,"monthNames"),monthShortNames:k(this.monthShortNames,"monthShortNames"),dayNames:k(this.dayNames,"dayNames"),dayShortNames:k(this.dayShortNames,"dayShortNames")};this.updateDatetimeValue(this.value);this.emitStyle()};e.prototype.connectedCallback=function(){this.emitStyle();{document.dispatchEvent(new CustomEvent("bkkrdatetimeDidLoad",{detail:this.el}))}};e.prototype.disconnectedCallback=function(){{document.dispatchEvent(new CustomEvent("bkkrdatetimeDidUnload",{detail:this.el}))}};e.prototype.setFocus=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(e){if(this.nativeinput){this.nativeinput.focus()}return[2]}))}))};e.prototype.setBlur=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(e){if(this.nativeinput){this.nativeinput.blur()}return[2]}))}))};e.prototype.getdatetimeElement=function(){return Promise.resolve(this.nativeinput)};e.prototype.open=function(e){return __awaiter(this,void 0,void 0,(function(){var t,i;var n=this;return __generator(this,(function(a){switch(a.label){case 0:if(this.disabled||this.isExpanded){return[2,undefined]}this.bkkrOpen.emit();i=this;return[4,this.openPopover(e)];case 1:t=i.overlay=a.sent();this.overlay.addEventListener("bkkrDatepickerDidChange",(function(e){return n.close(e)}));this.isExpanded=true;this.hasFocus=true;this.emitStyle();t.onDidDismiss().then((function(){n.overlay.removeEventListener("bkkrDatepickerDidChange",(function(e){return n.close(e)}));n.overlay=undefined;n.isExpanded=false;n.hasFocus=false;n.emitStyle();n.setFocus();n.bkkrCancel.emit()}));return[4,t.present()];case 2:a.sent();return[2,t]}}))}))};e.prototype.openPopover=function(e){var t=this,i=t.value,n=t.locale,a=t.min,r=t.max;var o=this.interfaceOptions;console.log(i);var s=Object.assign(Object.assign({},o),{component:"bkkr-datetime-popover",cssClass:["datetime-popover",o.cssClass],event:e,componentProps:{header:o.header,subHeader:o.subHeader,value:i,locale:n,min:a,max:r}});return l.create(s)};e.prototype.close=function(e){this.value=e.detail.value;this.updateDatetimeValue(e.detail.value);if(!this.overlay){return Promise.resolve(false)}this.hasFocus=false;this.emitStyle();return this.overlay.dismiss()};e.prototype.getValue=function(){return(this.value||"").toString()};e.prototype.emitStyle=function(){this.bkkrStyle.emit({interactive:true,datetime:true,"has-placeholder":this.placeholder!=null,"has-value":this.hasValue(),"has-focus":this.hasFocus,"interactive-disabled":this.disabled})};e.prototype.updateDatetimeValue=function(e){var t=new Date(y(e));console.log(t);b(this.datetimeValue,t,this.displayTimezone)};e.prototype.hasValue=function(){return this.getValue().length>0};Object.defineProperty(e.prototype,"displayValue",{get:function(){var e=this.displayFormat||G;if(this.value===undefined||this.value===null||this.value.length===0){return}return u(e,this.datetimeValue,this.locale)},enumerable:false,configurable:true});e.prototype.render=function(){var e=this;var t=this.datetimeId+"-lbl";var i=s(this.el);if(i){i.id=t}return n(a,{"aria-disabled":this.disabled?"true":null,class:d(this.color,{"has-value":this.hasValue(),"has-focus":this.hasFocus})},n("input",Object.assign({class:"native-datetime",ref:function(t){return e.nativeinput=t},"aria-labelledby":t,disabled:this.disabled,autoFocus:this.autofocus,enterKeyHint:this.enterkeyhint,inputMode:this.inputmode,min:this.min,max:this.max,name:this.name,placeholder:this.placeholder||"",readOnly:this.readonly,required:this.required,type:this.type,value:this.displayValue,onInput:this.onInput,onBlur:this.onBlur,onFocus:this.onFocus,onKeyDown:this.onKeydown},this.inheritedAttributes)),n("input",{class:"input-clone",disabled:this.disabled,min:this.min,max:this.max,name:this.name,readOnly:this.readonly,required:this.required,type:"text",value:this.value,tabindex:"-1"}),n("button",{onClick:function(t){return e.open(t)}},n("bkkr-icon",{size:"small",name:"calendar"})),this.clearInput&&!this.readonly&&!this.disabled&&n("button",{"aria-label":"reset",type:"button",class:"datetime-clear-icon",onTouchStart:this.clearTextInput,onMouseDown:this.clearTextInput,onKeyDown:this.clearTextOnEnter},n("bkkr-icon",{size:"small",name:"times-circle"})))};Object.defineProperty(e.prototype,"el",{get:function(){return r(this)},enumerable:false,configurable:true});Object.defineProperty(e,"watchers",{get:function(){return{disabled:["disabledChanged"],value:["valueChanged"]}},enumerable:false,configurable:true});return e}());var G="DD.MM.YYYY";var R=0;$.style=W}}}));