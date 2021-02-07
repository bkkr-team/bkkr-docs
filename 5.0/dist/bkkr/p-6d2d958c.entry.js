import{r as t,e as i,i as e,h as a,H as n,g as r}from"./p-8dbe4215.js";import{f as s,i as o,r as d,h}from"./p-3faaa6d8.js";import{s as l}from"./p-09b2e663.js";const p=class{constructor(e){t(this,e),this.bkkrChange=i(this,"bkkrChange",7),this.bkkrInput=i(this,"bkkrInput",7),this.bkkrStyle=i(this,"bkkrStyle",7),this.bkkrBlur=i(this,"bkkrBlur",7),this.bkkrFocus=i(this,"bkkrFocus",7),this.inputId="bkkr-textarea-"+c++,this.didBlurAfterEdit=!1,this.inheritedAttributes={},this.fireFocusEvents=!0,this.hasFocus=!1,this.autocapitalize="none",this.autofocus=!1,this.clearOnEdit=!1,this.debounce=0,this.disabled=!1,this.name=this.inputId,this.readonly=!1,this.required=!1,this.spellcheck=!1,this.autoGrow=!1,this.value="",this.onInput=t=>{this.nativeInput&&(this.value=this.nativeInput.value),this.emitStyle(),this.bkkrInput.emit(t)},this.onFocus=t=>{this.hasFocus=!0,this.focusChange(),this.fireFocusEvents&&this.bkkrFocus.emit(t)},this.onBlur=t=>{this.hasFocus=!1,this.focusChange(),this.fireFocusEvents&&this.bkkrBlur.emit(t)},this.onKeyDown=()=>{this.checkClearOnEdit()}}debounceChanged(){this.bkkrChange=s(this.bkkrChange,this.debounce)}disabledChanged(){this.emitStyle()}valueChanged(){const t=this.nativeInput,i=this.getValue();t&&t.value!==i&&(t.value=i),this.runAutoGrow(),this.emitStyle(),this.bkkrChange.emit({value:i})}connectedCallback(){this.emitStyle(),this.debounceChanged(),document.dispatchEvent(new CustomEvent("bkkrInputDidLoad",{detail:this.el}))}disconnectedCallback(){document.dispatchEvent(new CustomEvent("bkkrInputDidUnload",{detail:this.el}))}componentWillLoad(){this.inheritedAttributes=o(this.el,["title"])}componentDidLoad(){d((()=>this.runAutoGrow()))}runAutoGrow(){const t=this.nativeInput;t&&this.autoGrow&&e((()=>{t.style.height="auto",t.style.height=t.scrollHeight+"px",this.textareaWrapper&&(this.textareaWrapper.style.height=t.scrollHeight+"px")}))}async setFocus(){this.nativeInput&&this.nativeInput.focus()}async setBlur(){this.nativeInput&&this.nativeInput.blur()}getInputElement(){return Promise.resolve(this.nativeInput)}emitStyle(){this.bkkrStyle.emit({interactive:!0,textarea:!0,input:!0,"interactive-disabled":this.disabled,"has-placeholder":null!=this.placeholder,"has-value":this.hasValue(),"has-focus":this.hasFocus})}checkClearOnEdit(){this.clearOnEdit&&(this.didBlurAfterEdit&&this.hasValue()&&(this.value=""),this.didBlurAfterEdit=!1)}focusChange(){this.clearOnEdit&&!this.hasFocus&&this.hasValue()&&(this.didBlurAfterEdit=!0),this.emitStyle()}hasValue(){return""!==this.getValue()}getValue(){return this.value||""}render(){const t=this.getValue(),i=this.inputId+"-lbl",e=h(this.el);return e&&(e.id=i),a(n,{"aria-disabled":this.disabled?"true":null,class:l(this.color)},a("div",{class:"textarea-wrapper",ref:t=>this.textareaWrapper=t},a("textarea",Object.assign({class:"native-textarea","aria-labelledby":i,ref:t=>this.nativeInput=t,autoCapitalize:this.autocapitalize,autoFocus:this.autofocus,enterKeyHint:this.enterkeyhint,inputMode:this.inputmode,disabled:this.disabled,maxLength:this.maxlength,minLength:this.minlength,name:this.name,placeholder:this.placeholder||"",readOnly:this.readonly,required:this.required,spellcheck:this.spellcheck,cols:this.cols,rows:this.rows,wrap:this.wrap,onInput:this.onInput,onBlur:this.onBlur,onFocus:this.onFocus,onKeyDown:this.onKeyDown},this.inheritedAttributes),t)))}get el(){return r(this)}static get watchers(){return{debounce:["debounceChanged"],disabled:["disabledChanged"],value:["valueChanged"]}}};let c=0;p.style=".sc-bkkr-textarea-h{--placeholder-color:initial;--placeholder-font-style:initial;--placeholder-font-weight:initial;--padding-top:10px;--padding-end:var(--bkkr-spacer, 16px)/2;--padding-bottom:10px;--padding-start:0;--background:transparent;--color:initial;padding-left:0 !important;padding-right:0 !important;padding-top:0 !important;padding-bottom:0 !important;display:-ms-flexbox;display:flex;position:relative;-ms-flex:1;flex:1;width:100%;background:var(--background);color:var(--color);font-family:var(--default-font-sans-serif);white-space:pre-wrap;z-index:2;-webkit-box-sizing:border-box;box-sizing:border-box}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.sc-bkkr-textarea-h{padding-left:unset;padding-right:unset;-webkit-padding-start:0 !important;padding-inline-start:0 !important;-webkit-padding-end:0 !important;padding-inline-end:0 !important}}bkkr-item.sc-bkkr-textarea-h,bkkr-item .sc-bkkr-textarea-h{-ms-flex-item-align:baseline;align-self:baseline}bkkr-item.sc-bkkr-textarea-h:not(.item-label),bkkr-item:not(.item-label) .sc-bkkr-textarea-h{--padding-start:0}.textarea-wrapper.sc-bkkr-textarea{min-width:inherit;max-width:inherit;min-height:inherit;max-height:inherit}.native-textarea.sc-bkkr-textarea{border-radius:var(--border-radius);margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);color:inherit;font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-align:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;white-space:inherit;display:block;width:100%;max-width:100%;max-height:100%;border:0;outline:none;background:transparent;-webkit-box-sizing:border-box;box-sizing:border-box;resize:none;-webkit-appearance:none;-moz-appearance:none;appearance:none}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.native-textarea.sc-bkkr-textarea{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.native-textarea.sc-bkkr-textarea::-webkit-input-placeholder{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;-webkit-transition:opacity 0.15s cubic-bezier(0.32, 0.72, 0, 1);transition:opacity 0.15s cubic-bezier(0.32, 0.72, 0, 1);-webkit-transition-delay:var(--placeholder-transition-delay, none);transition-delay:var(--placeholder-transition-delay, none);color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity, 0.5)}.native-textarea.sc-bkkr-textarea::-moz-placeholder{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;-moz-transition:opacity 0.15s cubic-bezier(0.32, 0.72, 0, 1);transition:opacity 0.15s cubic-bezier(0.32, 0.72, 0, 1);transition-delay:var(--placeholder-transition-delay, none);color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity, 0.5)}.native-textarea.sc-bkkr-textarea:-ms-input-placeholder{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;-ms-transition:opacity 0.15s cubic-bezier(0.32, 0.72, 0, 1);transition:opacity 0.15s cubic-bezier(0.32, 0.72, 0, 1);transition-delay:var(--placeholder-transition-delay, none);color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity, 0.5)}.native-textarea.sc-bkkr-textarea::-ms-input-placeholder{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;-ms-transition:opacity 0.15s cubic-bezier(0.32, 0.72, 0, 1);transition:opacity 0.15s cubic-bezier(0.32, 0.72, 0, 1);transition-delay:var(--placeholder-transition-delay, none);color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity, 0.5)}.native-textarea.sc-bkkr-textarea::placeholder{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;-webkit-transition:opacity 0.15s cubic-bezier(0.32, 0.72, 0, 1);transition:opacity 0.15s cubic-bezier(0.32, 0.72, 0, 1);-webkit-transition-delay:var(--placeholder-transition-delay, none);transition-delay:var(--placeholder-transition-delay, none);color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity, 0.5)}.native-textarea[disabled].sc-bkkr-textarea{cursor:initial;opacity:0.3;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;pointer-events:none}.cloned-input.sc-bkkr-textarea{top:0;left:0;position:absolute;pointer-events:none}";export{p as bkkr_textarea}