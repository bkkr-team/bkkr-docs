import{r as t,e as i,h as n,H as e,g as a}from"./p-8dbe4215.js";import{f as r,i as s,h as o}from"./p-1498697d.js";import{s as l}from"./p-09b2e663.js";const h=class{constructor(n){t(this,n),this.bkkrInput=i(this,"bkkrInput",7),this.bkkrChange=i(this,"bkkrChange",7),this.bkkrBlur=i(this,"bkkrBlur",7),this.bkkrFocus=i(this,"bkkrFocus",7),this.bkkrStyle=i(this,"bkkrStyle",7),this.inputId="bkkr-input-"+p++,this.didBlurAfterEdit=!1,this.inheritedAttributes={},this.fireFocusEvents=!0,this.hasFocus=!1,this.autocapitalize="off",this.autocomplete="off",this.autocorrect="off",this.autofocus=!1,this.clearInput=!1,this.debounce=0,this.disabled=!1,this.name=this.inputId,this.readonly=!1,this.required=!1,this.spellcheck=!1,this.type="text",this.value="",this.onInput=t=>{const i=t.target;i&&(this.value=i.value||""),this.bkkrInput.emit(t)},this.onBlur=t=>{this.hasFocus=!1,this.focusChanged(),this.emitStyle(),this.fireFocusEvents&&this.bkkrBlur.emit(t)},this.onFocus=t=>{this.hasFocus=!0,this.focusChanged(),this.emitStyle(),this.fireFocusEvents&&this.bkkrFocus.emit(t)},this.onKeydown=t=>{this.shouldClearOnEdit()&&(this.didBlurAfterEdit&&this.hasValue()&&"Enter"!==t.key&&this.clearTextInput(),this.didBlurAfterEdit=!1)},this.clearTextOnEnter=t=>{"Enter"===t.key&&this.clearTextInput(t)},this.clearTextInput=t=>{this.clearInput&&!this.readonly&&!this.disabled&&t&&(t.preventDefault(),t.stopPropagation(),this.setFocus()),this.value="",this.nativeInput&&(this.nativeInput.value="")}}debounceChanged(){this.bkkrChange=r(this.bkkrChange,this.debounce)}disabledChanged(){this.emitStyle()}valueChanged(){this.emitStyle(),this.bkkrChange.emit({value:null==this.value?this.value:this.value.toString()})}componentWillLoad(){this.inheritedAttributes=s(this.el,["tabindex","title"])}connectedCallback(){this.emitStyle(),this.debounceChanged(),document.dispatchEvent(new CustomEvent("bkkrInputDidLoad",{detail:this.el}))}disconnectedCallback(){document.dispatchEvent(new CustomEvent("bkkrInputDidUnload",{detail:this.el}))}async setFocus(){this.nativeInput&&this.nativeInput.focus()}async setBlur(){this.nativeInput&&this.nativeInput.blur()}getInputElement(){return Promise.resolve(this.nativeInput)}shouldClearOnEdit(){const{type:t,clearOnEdit:i}=this;return void 0===i?"password"===t:i}getValue(){return"number"==typeof this.value?this.value.toString():(this.value||"").toString()}emitStyle(){this.bkkrStyle.emit({interactive:!0,input:!0,"has-placeholder":null!=this.placeholder,"has-value":this.hasValue(),"has-focus":this.hasFocus,"interactive-disabled":this.disabled})}focusChanged(){!this.hasFocus&&this.shouldClearOnEdit()&&this.hasValue()&&(this.didBlurAfterEdit=!0)}hasValue(){return this.getValue().length>0}render(){const t=this.getValue(),i=this.inputId+"-lbl",a=o(this.el);return a&&(a.id=i),n(e,{"aria-disabled":this.disabled?"true":null,class:l(this.color,{"has-value":this.hasValue(),"has-focus":this.hasFocus})},n("input",Object.assign({class:"native-input",ref:t=>this.nativeInput=t,"aria-labelledby":i,disabled:this.disabled,accept:this.accept,autoCapitalize:this.autocapitalize,autoComplete:this.autocomplete,autoCorrect:this.autocorrect,autoFocus:this.autofocus,enterKeyHint:this.enterkeyhint,inputMode:this.inputmode,min:this.min,max:this.max,minLength:this.minlength,maxLength:this.maxlength,multiple:this.multiple,name:this.name,pattern:this.pattern,placeholder:this.placeholder||"",readOnly:this.readonly,required:this.required,spellcheck:this.spellcheck,step:this.step,size:this.size,type:this.type,value:t,onInput:this.onInput,onBlur:this.onBlur,onFocus:this.onFocus,onKeyDown:this.onKeydown},this.inheritedAttributes)),this.clearInput&&!this.readonly&&!this.disabled&&n("button",{"aria-label":"reset",type:"button",class:"input-clear-icon",onTouchStart:this.clearTextInput,onMouseDown:this.clearTextInput,onKeyDown:this.clearTextOnEnter}))}get el(){return a(this)}static get watchers(){return{debounce:["debounceChanged"],disabled:["disabledChanged"],value:["valueChanged"]}}};let p=0;h.style=".input.sc-bkkr-input,.sc-bkkr-input-h{--placeholder-color:initial;--placeholder-font-style:initial;--placeholder-font-weight:initial;--padding-top:10px;--padding-end:var(--bkkr-spacer, 16px)/2;--padding-bottom:10px;--padding-start:0;--background:transparent;--color:initial;padding-left:0 !important;padding-right:0 !important;padding-top:0 !important;padding-bottom:0 !important;display:-ms-flexbox;display:flex;position:relative;-ms-flex:1;flex:1;-ms-flex-align:center;align-items:center;width:100%;background:var(--background);color:var(--color);font-family:var(--default-font-sans-serif);font-size:inherit;z-index:2}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.input.sc-bkkr-input,.sc-bkkr-input-h{padding-left:unset;padding-right:unset;-webkit-padding-start:0 !important;padding-inline-start:0 !important;-webkit-padding-end:0 !important;padding-inline-end:0 !important}}bkkr-item.sc-bkkr-input-h:not(.item-label),bkkr-item:not(.item-label) .sc-bkkr-input-h{--padding-start:0}.item-label-stacked.sc-bkkr-input-h,.item-label-stacked .sc-bkkr-input-h,.item-label-floating.sc-bkkr-input-h,.item-label-floating .sc-bkkr-input-h{--padding-top:8px;--padding-bottom:8px;--padding-start:0px}.native-input.sc-bkkr-input{border-radius:var(--border-radius);padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);color:inherit;font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-align:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;white-space:inherit;display:inline-block;-ms-flex:1;flex:1;width:100%;max-width:100%;max-height:100%;border:0;outline:none;background:transparent;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-appearance:none;-moz-appearance:none;appearance:none}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.native-input.sc-bkkr-input{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.native-input.sc-bkkr-input::-webkit-input-placeholder{-webkit-transition:var(--placeholder-transition, none);transition:var(--placeholder-transition, none);-webkit-transition-delay:var(--placeholder-transition-delay, none);transition-delay:var(--placeholder-transition-delay, none);color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity, 0.5)}.native-input.sc-bkkr-input::-moz-placeholder{-moz-transition:var(--placeholder-transition, none);transition:var(--placeholder-transition, none);transition-delay:var(--placeholder-transition-delay, none);color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity, 0.5)}.native-input.sc-bkkr-input:-ms-input-placeholder{-ms-transition:var(--placeholder-transition, none);transition:var(--placeholder-transition, none);transition-delay:var(--placeholder-transition-delay, none);color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity, 0.5)}.native-input.sc-bkkr-input::-ms-input-placeholder{-ms-transition:var(--placeholder-transition, none);transition:var(--placeholder-transition, none);transition-delay:var(--placeholder-transition-delay, none);color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity, 0.5)}.native-input.sc-bkkr-input::placeholder{-webkit-transition:var(--placeholder-transition, none);transition:var(--placeholder-transition, none);-webkit-transition-delay:var(--placeholder-transition-delay, none);transition-delay:var(--placeholder-transition-delay, none);color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity, 0.5)}.native-input.sc-bkkr-input:-webkit-autofill{background-color:transparent}.native-input.sc-bkkr-input:invalid{-webkit-box-shadow:none;box-shadow:none}.native-input.sc-bkkr-input::-ms-clear{display:none}.native-input[disabled].sc-bkkr-input{opacity:0.4}.cloned-input.sc-bkkr-input{top:0;left:0;position:absolute;pointer-events:none}.input-clear-icon.sc-bkkr-input{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;background-position:center;width:30px;height:30px;border:0;outline:none;background-color:transparent;background-repeat:no-repeat;background-size:18px;visibility:hidden;-webkit-appearance:none;-moz-appearance:none;appearance:none}.input-clear-icon.sc-bkkr-input:focus{opacity:0.5}.has-value.sc-bkkr-input-h .input-clear-icon.sc-bkkr-input{visibility:visible}.has-focus.sc-bkkr-input-h{pointer-events:none}.has-focus.sc-bkkr-input-h input.sc-bkkr-input,.has-focus.sc-bkkr-input-h a.sc-bkkr-input,.has-focus.sc-bkkr-input-h button.sc-bkkr-input{pointer-events:auto}";export{h as bkkr_input}