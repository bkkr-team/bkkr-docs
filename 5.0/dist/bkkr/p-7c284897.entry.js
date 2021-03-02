import{r as t,e,h as i,H as a,g as n}from"./p-8dfd188c.js";import{i as r,f as s}from"./p-63696788.js";import{p as o}from"./p-65134490.js";import{s as d}from"./p-c50c697b.js";const l=/^(\d{4}|[+\-]\d{6})(?:-(\d{2})(?:-(\d{2}))?)?(?:T(\d{2}):(\d{2})(?::(\d{2})(?:\.(\d{3}))?)?(?:(Z)|([+\-])(\d{2})(?::(\d{2}))?)?)?$/,h=/^((\d{2}):(\d{2})(?::(\d{2})(?:\.(\d{3}))?)?(?:(Z)|([+\-])(\d{2})(?::(\d{2}))?)?)?$/,c=(t,e,i)=>{if(!e||"string"==typeof e){const t=((t="",e="")=>{null==t&&(t=""),10!==t.length&&7!==t.length&&4!==t.length||(t+=" ");const i="string"==typeof t&&t.length>0?new Date(t):new Date,a=new Date(Date.UTC(i.getFullYear(),i.getMonth(),i.getDate(),i.getHours(),i.getMinutes(),i.getSeconds(),i.getMilliseconds()));return e&&e.length>0?new Date(i.getTime()-((t,e)=>{const i=new Date(t.toLocaleString("en-US",{timeZone:"utc"})),a=new Date(t.toLocaleString("en-US",{timeZone:e}));return i.getTime()-a.getTime()})(a,e)):a})(e,i);Number.isNaN(t.getTime())||(e=t.toISOString())}if(e&&""!==e){if("string"==typeof e){if(e=(t=>{let e=null;if(null!=t&&""!==t&&(e=h.exec(t),e?(e.unshift(void 0,void 0),e[2]=e[3]=void 0):e=l.exec(t)),null===e)return;for(let t=1;t<8;t++)e[t]=void 0!==e[t]?parseInt(e[t],10):void 0;let i=0;return e[9]&&e[10]&&(i=60*parseInt(e[10],10),e[11]&&(i+=parseInt(e[11],10)),"-"===e[9]&&(i*=-1)),{year:e[1],month:e[2],day:e[3],hour:e[4],minute:e[5],second:e[6],millisecond:e[7],tzOffset:i}})(e))return Object.assign(t,e),!0}else{if(e.year||e.hour||e.month||e.day||e.minute||e.second){void 0!==e.ampm&&void 0!==e.hour&&(e.hour.value="pm"===e.ampm.value?12===e.hour.value?12:e.hour.value+12:12===e.hour.value?0:e.hour.value);for(const i of Object.keys(e))t[i]=e[i].value;return!0}if(e.ampm)return e.hour={value:e.hour?e.hour.value:"pm"===e.ampm.value?t.hour<12?t.hour+12:t.hour:t.hour>=12?t.hour-12:t.hour},t.hour=e.hour.value,t.ampm=e.ampm.value,!0}console.warn(`Error parsing date: "${e}". Please provide a valid ISO 8601 datetime format: https://www.w3.org/TR/NOTE-datetime`)}else for(const e in t)t.hasOwnProperty(e)&&delete t[e];return!1},p=(t,e)=>{if(null==t)return;let i;return"string"==typeof t&&(t=t.replace(/\[|\]/g,"").split(",")),Array.isArray(t)&&(i=t.map((t=>t.toString().trim()))),void 0!==i&&0!==i.length||console.warn(`Invalid "${e}Names". Must be an array of strings, or a comma separated string.`),i},m=t=>("0"+(void 0!==t?Math.abs(t):"0")).slice(-2),b=t=>("000"+(void 0!==t?Math.abs(t):"0")).slice(-4),u="YYYY",k="YY",f="MMMM",g="MMM",y="MM",v="DDDD",w="DDD",x="DD",D="HH",M="hh",z="h",S="mm",C="ss",Y="A",N="a",O=[{f:u,k:"year"},{f,k:"month"},{f:v,k:"day"},{f:g,k:"month"},{f:w,k:"day"},{f:k,k:"year"},{f:y,k:"month"},{f:x,k:"day"},{f:D,k:"hour"},{f:M,k:"hour"},{f:S,k:"minute"},{f:C,k:"second"},{f:"M",k:"month"},{f:"D",k:"day"},{f:"H",k:"hour"},{f:z,k:"hour"},{f:"m",k:"minute"},{f:"s",k:"second"},{f:Y,k:"ampm"},{f:N,k:"ampm"}],j=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],F=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],T=["January","February","March","April","May","June","July","August","September","October","November","December"],A=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],E=class{constructor(i){t(this,i),this.bkkrOpen=e(this,"bkkrOpen",7),this.bkkrCancel=e(this,"bkkrCancel",7),this.bkkrInput=e(this,"bkkrInput",7),this.bkkrChange=e(this,"bkkrChange",7),this.bkkrBlur=e(this,"bkkrBlur",7),this.bkkrFocus=e(this,"bkkrFocus",7),this.bkkrStyle=e(this,"bkkrStyle",7),this.datetimeId="bkkr-datetime-"+H++,this.inheritedAttributes={},this.locale={},this.datetimeValue={},this.fireFocusEvents=!0,this.hasFocus=!1,this.isExpanded=!1,this.autofocus=!1,this.clearInput=!1,this.disabled=!1,this.displayFormat="MMM D, YYYY",this.name=this.datetimeId,this.readonly=!1,this.required=!1,this.type="text",this.value=null,this.interfaceOptions={},this.onInput=t=>{const e=t.target;e&&(this.value=e.value||""),this.bkkrInput.emit(t)},this.onBlur=t=>{this.hasFocus=!1,this.emitStyle(),this.fireFocusEvents&&this.bkkrBlur.emit(t)},this.onFocus=t=>{this.hasFocus=!0,this.emitStyle(),this.fireFocusEvents&&this.bkkrFocus.emit(t)},this.onKeydown=t=>{if("Enter"===t.key){const t=this.el.closest("form"),e=null==t?void 0:t.querySelector('[type="submit"]');e&&e.click()}},this.clearTextOnEnter=t=>{"Enter"===t.key&&this.clearTextInput(t)},this.clearTextInput=t=>{this.clearInput&&!this.readonly&&!this.disabled&&t&&(t.preventDefault(),t.stopPropagation(),this.setFocus()),this.value="",this.nativeinput&&(this.nativeinput.value="")}}disabledChanged(){this.emitStyle()}valueChanged(){this.emitStyle(),this.updateDatetimeValue(this.value),this.bkkrChange.emit({value:null==this.value?this.value:this.value.toString()})}componentWillLoad(){this.inheritedAttributes=r(this.el,["tabindex","title"]),this.locale={monthNames:p(this.monthNames,"monthNames"),monthShortNames:p(this.monthShortNames,"monthShortNames"),dayNames:p(this.dayNames,"dayNames"),dayShortNames:p(this.dayShortNames,"dayShortNames")},this.updateDatetimeValue(this.value),this.emitStyle()}connectedCallback(){this.emitStyle(),document.dispatchEvent(new CustomEvent("bkkrdatetimeDidLoad",{detail:this.el}))}disconnectedCallback(){document.dispatchEvent(new CustomEvent("bkkrdatetimeDidUnload",{detail:this.el}))}async setFocus(){this.nativeinput&&this.nativeinput.focus()}async setBlur(){this.nativeinput&&this.nativeinput.blur()}getdatetimeElement(){return Promise.resolve(this.nativeinput)}async open(t){if(this.disabled||this.isExpanded)return;this.bkkrOpen.emit();const e=this.overlay=await this.openPopover(t);return this.overlay.addEventListener("bkkrDatepickerDidChange",(t=>this.close(t))),this.isExpanded=!0,this.hasFocus=!0,this.emitStyle(),e.onDidDismiss().then((()=>{this.overlay.removeEventListener("bkkrDatepickerDidChange",(t=>this.close(t))),this.overlay=void 0,this.isExpanded=!1,this.hasFocus=!1,this.emitStyle(),this.setFocus(),this.bkkrCancel.emit()})),await e.present(),e}openPopover(t){const{value:e,locale:i,min:a,max:n}=this,r=this.interfaceOptions;console.log(e);const s=Object.assign(Object.assign({},r),{component:"bkkr-datetime-popover",cssClass:["datetime-popover",r.cssClass],event:t,componentProps:{header:r.header,subHeader:r.subHeader,value:e,locale:i,min:a,max:n}});return o.create(s)}close(t){return this.value=t.detail.value,this.updateDatetimeValue(t.detail.value),this.overlay?(this.hasFocus=!1,this.emitStyle(),this.overlay.dismiss()):Promise.resolve(!1)}getValue(){return(this.value||"").toString()}emitStyle(){this.bkkrStyle.emit({interactive:!0,datetime:!0,"has-placeholder":null!=this.placeholder,"has-value":this.hasValue(),"has-focus":this.hasFocus,"interactive-disabled":this.disabled})}updateDatetimeValue(t){c(this.datetimeValue,t,this.displayTimezone)}hasValue(){return this.getValue().length>0}get displayValue(){if(null!=this.value&&0!==this.value.length)return((t,e,i)=>{if(void 0===e)return;const a=[];let n=!1;if(O.forEach(((r,s)=>{if(t.indexOf(r.f)>-1){const o="{"+s+"}",d=((t,e,i,a)=>{if(t!==v&&t!==w){if(t===Y)return void 0!==i&&void 0!==i.hour?i.hour<12?"AM":"PM":e?e.toUpperCase():"";if(t===N)return void 0!==i&&void 0!==i.hour?i.hour<12?"am":"pm":e||"";if(null==e)return"";if(t===k||t===y||t===x||t===D||t===S||t===C)return m(e);if(t===u)return b(e);if(t===f)return(a.monthNames?a.monthNames:T)[e-1];if(t===g)return(a.monthShortNames?a.monthShortNames:A)[e-1];if(t===M||t===z){if(0===e)return"12";if(e>12&&(e-=12),t===M&&e<10)return"0"+e}return e.toString()}try{return e=new Date(i.year,i.month-1,i.day).getDay(),t===v?(a.dayNames?a.dayNames:j)[e]:(a.dayShortNames?a.dayShortNames:F)[e]}catch(t){}})(r.f,e[r.k],e,i);n||void 0===d||null==e[r.k]||(n=!0),a.push(o,d||""),t=t.replace(r.f,o)}})),n){for(let e=0;e<a.length;e+=2)t=t.replace(a[e],a[e+1]);return t}})(this.displayFormat||I,this.datetimeValue,this.locale)}render(){const t=this.datetimeId+"-lbl",e=s(this.el);return e&&(e.id=t),i(a,{"aria-disabled":this.disabled?"true":null,class:d(this.color,{"has-value":this.hasValue(),"has-focus":this.hasFocus})},i("input",Object.assign({class:"native-datetime",ref:t=>this.nativeinput=t,"aria-labelledby":t,disabled:this.disabled,autoFocus:this.autofocus,enterKeyHint:this.enterkeyhint,inputMode:this.inputmode,min:this.min,max:this.max,name:this.name,placeholder:this.placeholder||"",readOnly:this.readonly,required:this.required,type:this.type,value:this.displayValue,onInput:this.onInput,onBlur:this.onBlur,onFocus:this.onFocus,onKeyDown:this.onKeydown},this.inheritedAttributes)),i("input",{class:"input-clone",disabled:this.disabled,min:this.min,max:this.max,name:this.name,readOnly:this.readonly,required:this.required,type:"text",value:this.value,tabindex:"-1"}),i("button",{onClick:t=>this.open(t)},i("bkkr-icon",{size:"small",name:"calendar"})),this.clearInput&&!this.readonly&&!this.disabled&&i("button",{"aria-label":"reset",type:"button",class:"datetime-clear-icon",onTouchStart:this.clearTextInput,onMouseDown:this.clearTextInput,onKeyDown:this.clearTextOnEnter},i("bkkr-icon",{size:"small",name:"times-circle"})))}get el(){return n(this)}static get watchers(){return{disabled:["disabledChanged"],value:["valueChanged"]}}},I="DD.MM.YYYY";let H=0;E.style=".sc-bkkr-datetime-h{--placeholder-color:initial;--placeholder-font-style:initial;--placeholder-font-weight:initial;--padding-top:10px;--padding-end:calc(var(--bkkr-spacer, 16px) / 2);--padding-bottom:10px;--padding-start:0;--background:transparent;--color:initial;padding-left:0 !important;padding-right:0 !important;padding-top:0 !important;padding-bottom:0 !important;display:-ms-flexbox;display:flex;position:relative;-ms-flex:1;flex:1;-ms-flex-align:center;align-items:center;width:100%;background:var(--background);color:var(--color);font-family:var(--default-font-sans-serif);font-size:inherit}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.sc-bkkr-datetime-h{padding-left:unset;padding-right:unset;-webkit-padding-start:0 !important;padding-inline-start:0 !important;-webkit-padding-end:0 !important;padding-inline-end:0 !important}}bkkr-item.sc-bkkr-datetime-h:not(.item-label),bkkr-item:not(.item-label) .sc-bkkr-datetime-h{--padding-start:0}.item-label-stacked.sc-bkkr-datetime-h,.item-label-stacked .sc-bkkr-datetime-h,.item-label-floating.sc-bkkr-datetime-h,.item-label-floating .sc-bkkr-datetime-h{--padding-top:8px;--padding-bottom:8px;--padding-start:0px}.native-datetime.sc-bkkr-datetime{border-radius:var(--border-radius);padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);color:inherit;font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-align:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;white-space:inherit;display:inline-block;-ms-flex:1;flex:1;width:100%;max-width:100%;max-height:100%;border:0;outline:none;background:transparent;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-appearance:none;-moz-appearance:none;appearance:none}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.native-datetime.sc-bkkr-datetime{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.native-datetime.sc-bkkr-datetime::-moz-placeholder{-moz-transition:opacity 0.15s cubic-bezier(0.32, 0.72, 0, 1);transition:opacity 0.15s cubic-bezier(0.32, 0.72, 0, 1);transition-delay:var(--placeholder-transition-delay, none);color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity, 0.5)}.native-datetime.sc-bkkr-datetime::-ms-input-placeholder{-ms-transition:opacity 0.15s cubic-bezier(0.32, 0.72, 0, 1);transition:opacity 0.15s cubic-bezier(0.32, 0.72, 0, 1);transition-delay:var(--placeholder-transition-delay, none);color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity, 0.5)}.native-datetime.sc-bkkr-datetime::-webkit-input-placeholder{-webkit-transition:opacity 0.15s cubic-bezier(0.32, 0.72, 0, 1);transition:opacity 0.15s cubic-bezier(0.32, 0.72, 0, 1);-webkit-transition-delay:var(--placeholder-transition-delay, none);transition-delay:var(--placeholder-transition-delay, none);color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity, 0.5)}.native-datetime.sc-bkkr-datetime:-ms-input-placeholder{-ms-transition:opacity 0.15s cubic-bezier(0.32, 0.72, 0, 1);transition:opacity 0.15s cubic-bezier(0.32, 0.72, 0, 1);transition-delay:var(--placeholder-transition-delay, none);color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity, 0.5)}.native-datetime.sc-bkkr-datetime::placeholder{-webkit-transition:opacity 0.15s cubic-bezier(0.32, 0.72, 0, 1);transition:opacity 0.15s cubic-bezier(0.32, 0.72, 0, 1);-webkit-transition-delay:var(--placeholder-transition-delay, none);transition-delay:var(--placeholder-transition-delay, none);color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity, 0.5)}.native-datetime.sc-bkkr-datetime:-webkit-autofill{background-color:transparent}.native-datetime.sc-bkkr-datetime:invalid{-webkit-box-shadow:none;box-shadow:none}.native-datetime.sc-bkkr-datetime::-ms-clear{display:none}.native-datetime[disabled].sc-bkkr-datetime{opacity:0.4}.cloned-datetime.sc-bkkr-datetime{top:0;left:0;position:absolute;pointer-events:none}.datetime-clear-icon.sc-bkkr-datetime{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;background-position:center;width:30px;height:30px;border:0;outline:none;background-color:transparent;background-repeat:no-repeat;background-size:18px;visibility:hidden;-webkit-appearance:none;-moz-appearance:none;appearance:none}.datetime-clear-icon.sc-bkkr-datetime:focus{opacity:0.5}.has-value.sc-bkkr-datetime-h .datetime-clear-icon.sc-bkkr-datetime{visibility:visible}.has-focus.sc-bkkr-datetime-h{pointer-events:none}.has-focus.sc-bkkr-datetime-h datetime.sc-bkkr-datetime,.has-focus.sc-bkkr-datetime-h a.sc-bkkr-datetime,.has-focus.sc-bkkr-datetime-h button.sc-bkkr-datetime{pointer-events:auto}.input-clone.sc-bkkr-datetime{display:none}";export{E as bkkr_datetime}