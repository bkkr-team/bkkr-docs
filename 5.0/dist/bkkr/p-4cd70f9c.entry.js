import{r as t,e as i,h as e,H as a,g as n}from"./p-8dfd188c.js";import{i as r,f as s}from"./p-63696788.js";import{p as o}from"./p-65134490.js";import{s as d}from"./p-c50c697b.js";const l=class{constructor(e){t(this,e),this.bkkrOpen=i(this,"bkkrOpen",7),this.bkkrCancel=i(this,"bkkrCancel",7),this.bkkrInput=i(this,"bkkrInput",7),this.bkkrChange=i(this,"bkkrChange",7),this.bkkrBlur=i(this,"bkkrBlur",7),this.bkkrFocus=i(this,"bkkrFocus",7),this.bkkrStyle=i(this,"bkkrStyle",7),this.datetimeId="bkkr-datetime-"+h++,this.inheritedAttributes={},this.fireFocusEvents=!0,this.hasFocus=!1,this.isExpanded=!1,this.autofocus=!1,this.clearInput=!1,this.disabled=!1,this.displayFormat="MMM D, YYYY",this.name=this.datetimeId,this.readonly=!1,this.required=!1,this.type="text",this.value="",this.interfaceOptions={},this.onInput=t=>{const i=t.target;i&&(this.value=i.value||""),this.bkkrInput.emit(t)},this.onBlur=t=>{this.hasFocus=!1,this.emitStyle(),this.fireFocusEvents&&this.bkkrBlur.emit(t)},this.onFocus=t=>{this.hasFocus=!0,this.emitStyle(),this.fireFocusEvents&&this.bkkrFocus.emit(t)},this.onKeydown=t=>{if("Enter"===t.key){const t=this.el.closest("form"),i=null==t?void 0:t.querySelector('[type="submit"]');i&&i.click()}},this.clearTextOnEnter=t=>{"Enter"===t.key&&this.clearTextInput(t)},this.clearTextInput=t=>{this.clearInput&&!this.readonly&&!this.disabled&&t&&(t.preventDefault(),t.stopPropagation(),this.setFocus()),this.value="",this.nativeinput&&(this.nativeinput.value="")}}disabledChanged(){this.emitStyle()}valueChanged(){this.emitStyle(),this.bkkrChange.emit({value:null==this.value?this.value:this.value.toString()})}componentWillLoad(){this.inheritedAttributes=r(this.el,["tabindex","title"])}connectedCallback(){this.emitStyle(),document.dispatchEvent(new CustomEvent("bkkrdatetimeDidLoad",{detail:this.el}))}disconnectedCallback(){document.dispatchEvent(new CustomEvent("bkkrdatetimeDidUnload",{detail:this.el}))}async setFocus(){this.nativeinput&&this.nativeinput.focus()}async setBlur(){this.nativeinput&&this.nativeinput.blur()}getdatetimeElement(){return Promise.resolve(this.nativeinput)}async open(t){if(this.disabled||this.isExpanded)return;this.bkkrOpen.emit();const i=await this.openPopover(t);return this.isExpanded=!0,this.hasFocus=!0,this.emitStyle(),i.onDidDismiss().then((()=>{this.isExpanded=!1,this.hasFocus=!1,this.emitStyle(),this.setFocus(),this.bkkrCancel.emit()})),await i.present(),i}openPopover(t){const i=this.interfaceOptions,e=this.value,a=Object.assign(Object.assign({},i),{component:"bkkr-datepicker-popover",cssClass:["datepicker-popover",i.cssClass],event:t,componentProps:{header:i.header,subHeader:i.subHeader,value:e}});return o.create(a)}getValue(){return(this.value||"").toString()}emitStyle(){this.bkkrStyle.emit({interactive:!0,datetime:!0,"has-placeholder":null!=this.placeholder,"has-value":this.hasValue(),"has-focus":this.hasFocus,"interactive-disabled":this.disabled})}hasValue(){return this.getValue().length>0}render(){const t=this.getValue(),i=this.datetimeId+"-lbl",n=s(this.el);return n&&(n.id=i),e(a,{"aria-disabled":this.disabled?"true":null,class:d(this.color,{"has-value":this.hasValue(),"has-focus":this.hasFocus})},e("input",Object.assign({class:"native-datetime",ref:t=>this.nativeinput=t,"aria-labelledby":i,disabled:this.disabled,autoFocus:this.autofocus,enterKeyHint:this.enterkeyhint,inputMode:this.inputmode,min:this.min,max:this.max,name:this.name,placeholder:this.placeholder||"",readOnly:this.readonly,required:this.required,type:this.type,value:t,onInput:this.onInput,onBlur:this.onBlur,onFocus:this.onFocus,onKeyDown:this.onKeydown},this.inheritedAttributes)),e("bkkr-button",{size:"small",onClick:t=>this.open(t)},e("bkkr-icon",{size:"small",name:"calendar"})),this.clearInput&&!this.readonly&&!this.disabled&&e("button",{"aria-label":"reset",type:"button",class:"datetime-clear-icon",onTouchStart:this.clearTextInput,onMouseDown:this.clearTextInput,onKeyDown:this.clearTextOnEnter},e("bkkr-icon",{size:"small",name:"times-circle"})))}get el(){return n(this)}static get watchers(){return{disabled:["disabledChanged"],value:["valueChanged"]}}};let h=0;l.style=".sc-bkkr-datetime-h{--placeholder-color:initial;--placeholder-font-style:initial;--placeholder-font-weight:initial;--padding-top:10px;--padding-end:calc(var(--bkkr-spacer, 16px) / 2);--padding-bottom:10px;--padding-start:0;--background:transparent;--color:initial;padding-left:0 !important;padding-right:0 !important;padding-top:0 !important;padding-bottom:0 !important;display:-ms-flexbox;display:flex;position:relative;-ms-flex:1;flex:1;-ms-flex-align:center;align-items:center;width:100%;background:var(--background);color:var(--color);font-family:var(--default-font-sans-serif);font-size:inherit}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.sc-bkkr-datetime-h{padding-left:unset;padding-right:unset;-webkit-padding-start:0 !important;padding-inline-start:0 !important;-webkit-padding-end:0 !important;padding-inline-end:0 !important}}bkkr-item.sc-bkkr-datetime-h:not(.item-label),bkkr-item:not(.item-label) .sc-bkkr-datetime-h{--padding-start:0}.item-label-stacked.sc-bkkr-datetime-h,.item-label-stacked .sc-bkkr-datetime-h,.item-label-floating.sc-bkkr-datetime-h,.item-label-floating .sc-bkkr-datetime-h{--padding-top:8px;--padding-bottom:8px;--padding-start:0px}.native-datetime.sc-bkkr-datetime{border-radius:var(--border-radius);padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);color:inherit;font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-align:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;white-space:inherit;display:inline-block;-ms-flex:1;flex:1;width:100%;max-width:100%;max-height:100%;border:0;outline:none;background:transparent;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-appearance:none;-moz-appearance:none;appearance:none}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.native-datetime.sc-bkkr-datetime{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.native-datetime.sc-bkkr-datetime::-moz-placeholder{-moz-transition:opacity 0.15s cubic-bezier(0.32, 0.72, 0, 1);transition:opacity 0.15s cubic-bezier(0.32, 0.72, 0, 1);transition-delay:var(--placeholder-transition-delay, none);color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity, 0.5)}.native-datetime.sc-bkkr-datetime::-ms-input-placeholder{-ms-transition:opacity 0.15s cubic-bezier(0.32, 0.72, 0, 1);transition:opacity 0.15s cubic-bezier(0.32, 0.72, 0, 1);transition-delay:var(--placeholder-transition-delay, none);color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity, 0.5)}.native-datetime.sc-bkkr-datetime::-webkit-input-placeholder{-webkit-transition:opacity 0.15s cubic-bezier(0.32, 0.72, 0, 1);transition:opacity 0.15s cubic-bezier(0.32, 0.72, 0, 1);-webkit-transition-delay:var(--placeholder-transition-delay, none);transition-delay:var(--placeholder-transition-delay, none);color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity, 0.5)}.native-datetime.sc-bkkr-datetime:-ms-input-placeholder{-ms-transition:opacity 0.15s cubic-bezier(0.32, 0.72, 0, 1);transition:opacity 0.15s cubic-bezier(0.32, 0.72, 0, 1);transition-delay:var(--placeholder-transition-delay, none);color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity, 0.5)}.native-datetime.sc-bkkr-datetime::placeholder{-webkit-transition:opacity 0.15s cubic-bezier(0.32, 0.72, 0, 1);transition:opacity 0.15s cubic-bezier(0.32, 0.72, 0, 1);-webkit-transition-delay:var(--placeholder-transition-delay, none);transition-delay:var(--placeholder-transition-delay, none);color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity, 0.5)}.native-datetime.sc-bkkr-datetime:-webkit-autofill{background-color:transparent}.native-datetime.sc-bkkr-datetime:invalid{-webkit-box-shadow:none;box-shadow:none}.native-datetime.sc-bkkr-datetime::-ms-clear{display:none}.native-datetime[disabled].sc-bkkr-datetime{opacity:0.4}.cloned-datetime.sc-bkkr-datetime{top:0;left:0;position:absolute;pointer-events:none}.datetime-clear-icon.sc-bkkr-datetime{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;background-position:center;width:30px;height:30px;border:0;outline:none;background-color:transparent;background-repeat:no-repeat;background-size:18px;visibility:hidden;-webkit-appearance:none;-moz-appearance:none;appearance:none}.datetime-clear-icon.sc-bkkr-datetime:focus{opacity:0.5}.has-value.sc-bkkr-datetime-h .datetime-clear-icon.sc-bkkr-datetime{visibility:visible}.has-focus.sc-bkkr-datetime-h{pointer-events:none}.has-focus.sc-bkkr-datetime-h datetime.sc-bkkr-datetime,.has-focus.sc-bkkr-datetime-h a.sc-bkkr-datetime,.has-focus.sc-bkkr-datetime-h button.sc-bkkr-datetime{pointer-events:auto}";export{l as bkkr_datetime}