import{r,c as a,f as t,h as e,H as s,g as c}from"./p-900e5a2b.js";import{j as i,r as o}from"./p-d56ecf06.js";import{s as n}from"./p-b0f3bd3c.js";const b=class{constructor(t){r(this,t),this.bkkrInput=a(this,"bkkrInput",7),this.bkkrChange=a(this,"bkkrChange",7),this.bkkrCancel=a(this,"bkkrCancel",7),this.bkkrClear=a(this,"bkkrClear",7),this.bkkrBlur=a(this,"bkkrBlur",7),this.bkkrFocus=a(this,"bkkrFocus",7),this.bkkrStyle=a(this,"bkkrStyle",7),this.isCancelVisible=!1,this.shouldAlignLeft=!0,this.focused=!1,this.noAnimate=!0,this.animated=!1,this.autocomplete="off",this.autocorrect="off",this.cancelButtonText="Cancel",this.debounce=250,this.disabled=!1,this.placeholder="Search",this.showCancelButton="never",this.spellcheck=!1,this.type="search",this.value="",this.onClearInput=r=>{this.bkkrClear.emit(),r&&(r.preventDefault(),r.stopPropagation()),setTimeout((()=>{""!==this.getValue()&&(this.value="",this.bkkrInput.emit())}),64)},this.onCancelSearchbar=r=>{r&&(r.preventDefault(),r.stopPropagation()),this.bkkrCancel.emit(),this.onClearInput(),this.nativeInput&&this.nativeInput.blur()},this.onInput=r=>{const a=r.target;a&&(this.value=a.value),this.bkkrInput.emit(r)},this.onBlur=()=>{this.focused=!1,this.bkkrBlur.emit(),this.positionElements()},this.onFocus=()=>{this.focused=!0,this.bkkrFocus.emit(),this.positionElements()}}debounceChanged(){this.bkkrChange=i(this.bkkrChange,this.debounce)}valueChanged(){const r=this.nativeInput,a=this.getValue();r&&r.value!==a&&(r.value=a),this.bkkrChange.emit({value:a})}showCancelButtonChanged(){requestAnimationFrame((()=>{this.positionElements(),t(this)}))}connectedCallback(){this.emitStyle()}componentDidLoad(){this.positionElements(),this.debounceChanged(),setTimeout((()=>{this.noAnimate=!1}),300)}emitStyle(){this.bkkrStyle.emit({searchbar:!0})}async setFocus(){this.nativeInput&&this.nativeInput.focus()}getInputElement(){return Promise.resolve(this.nativeInput)}positionElements(){const r=this.getValue(),a=this.shouldAlignLeft,t=!this.animated||""!==r.trim()||!!this.focused;this.shouldAlignLeft=t,a!==t&&this.positionPlaceholder(),this.animated&&this.positionCancelButton()}positionPlaceholder(){const r=this.nativeInput;if(!r)return;const a="rtl"===document.dir,t=(this.el.shadowRoot||this.el).querySelector(".searchbar-search-icon");if(this.shouldAlignLeft)r.removeAttribute("style"),t.removeAttribute("style");else{const e=document,s=e.createElement("span");s.innerText=this.placeholder||"",e.body.appendChild(s),o((()=>{const e=s.offsetWidth;s.remove();const c="calc(50% - "+e/2+"px)",i="calc(50% - "+(e/2+40)+"px)";a?(r.style.paddingRight=c,t.style.marginRight=i):(r.style.paddingLeft=c,t.style.marginLeft=i)}))}}positionCancelButton(){const r="rtl"===document.dir,a=(this.el.shadowRoot||this.el).querySelector(".searchbar-cancel-button"),t=this.shouldShowCancelButton();if(a&&t!==this.isCancelVisible){const e=a.style;if(this.isCancelVisible=t,t)r?e.marginLeft="0":e.marginRight="0";else{const t=a.offsetWidth;t>0&&(r?e.marginLeft=-t+"px":e.marginRight=-t+"px")}}}getValue(){return this.value||""}hasValue(){return""!==this.getValue()}shouldShowCancelButton(){return!("never"===this.showCancelButton||"focus"===this.showCancelButton&&!this.focused)}render(){const{cancelButtonText:r}=this,a=this.animated,t=this.shouldShowCancelButton(),c="never"!==this.showCancelButton&&e("button",{"aria-label":r,"aria-hidden":t?void 0:"true",type:"button",tabIndex:t?void 0:-1,onMouseDown:this.onCancelSearchbar,onTouchStart:this.onCancelSearchbar,class:"searchbar-cancel-button"},e("div",{"aria-hidden":"true"},r));return e(s,{role:"search","aria-disabled":this.disabled?"true":null,class:n(this.color,{"searchbar-animated":a,"searchbar-no-animate":a&&this.noAnimate,"searchbar-has-value":this.hasValue(),"searchbar-left-aligned":this.shouldAlignLeft,"searchbar-has-focus":this.focused,"searchbar-should-show-cancel":this.shouldShowCancelButton(),"state-activatable":!0,"state-focusable":!0,"state-disabled":this.disabled})},e("div",{class:"searchbar-input-container"},e("input",{"aria-label":"search text",disabled:this.disabled,ref:r=>this.nativeInput=r,class:"searchbar-input",inputMode:this.inputmode,enterKeyHint:this.enterkeyhint,onInput:this.onInput,onBlur:this.onBlur,onFocus:this.onFocus,placeholder:this.placeholder,type:this.type,value:this.getValue(),autoComplete:this.autocomplete,autoCorrect:this.autocorrect,spellcheck:this.spellcheck}),e("bkkr-icon",{"aria-hidden":"true",icon:"search",lazy:!1,class:"searchbar-search-icon"}),e("button",{"aria-label":"reset",type:"button","no-blur":!0,class:"searchbar-clear-button",onMouseDown:this.onClearInput,onTouchStart:this.onClearInput},e("bkkr-icon",{"aria-hidden":"true",icon:"times-circle",lazy:!1,class:"searchbar-clear-icon"}))),c)}get el(){return c(this)}static get watchers(){return{debounce:["debounceChanged"],value:["valueChanged"],showCancelButton:["showCancelButtonChanged"]}}};b.style=".sc-bkkr-searchbar-h{--placeholder-color:initial;--placeholder-font-style:initial;--placeholder-font-weight:initial;--placeholder-opacity:0.5;--background:rgba(var(--bkkr-text-color-rgb, 0, 0, 0), 0.04);--background-hover:rgba(var(--bkkr-text-color-rgb, 0, 0, 0), 0.08);--background-focus:rgba(var(--bkkr-text-color-rgb, 0, 0, 0), 0.08);--background-active:rgba(var(--bkkr-text-color-rgb, 0, 0, 0), 0.12);--border-radius:12px;--box-shadow:none;--cancel-button-color:var(--color-base, var(--color-primary, #3880ff));--clear-button-color:var(--color-step-600, #666666);--color:var(--bkkr-text-color, #000);--icon-color:var(--color-step-600, #666666);--min-height:2.7em;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;padding-left:var(--bkkr-spacer, 16px);padding-right:var(--bkkr-spacer, 16px);padding-top:0;padding-bottom:0;display:-ms-flexbox;display:flex;position:relative;-ms-flex-align:center;align-items:center;width:100%;min-height:var(--min-height);color:var(--color);font-family:var(--bkkr-font-family);-webkit-box-sizing:border-box;box-sizing:border-box;contain:strict;-ms-touch-action:manipulation;touch-action:manipulation}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.sc-bkkr-searchbar-h{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--bkkr-spacer, 16px);padding-inline-start:var(--bkkr-spacer, 16px);-webkit-padding-end:var(--bkkr-spacer, 16px);padding-inline-end:var(--bkkr-spacer, 16px)}}.searchbar-search-icon.sc-bkkr-searchbar{margin-left:calc(50% - 60px);top:50%;left:10px;position:absolute;width:1.15em;height:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);-webkit-transition:all 0.2s cubic-bezier(0.32, 0.72, 0, 1);transition:all 0.2s cubic-bezier(0.32, 0.72, 0, 1);color:var(--icon-color);contain:strict;pointer-events:none}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.searchbar-search-icon.sc-bkkr-searchbar{margin-left:unset;-webkit-margin-start:calc(50% - 60px);margin-inline-start:calc(50% - 60px)}}.searchbar-input-container.sc-bkkr-searchbar{display:block;position:relative;-ms-flex-negative:1;flex-shrink:1;width:100%;height:100%;min-height:var(--min-height)}.searchbar-input.sc-bkkr-searchbar{color:inherit;font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-align:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;white-space:inherit;border-radius:var(--border-radius);padding-left:28px;padding-right:28px;padding-top:0;padding-bottom:0;display:block;width:100%;height:100%;min-height:var(--min-height);-webkit-transition:all 0.2s cubic-bezier(0.32, 0.72, 0, 1);transition:all 0.2s cubic-bezier(0.32, 0.72, 0, 1);border:0;outline:none;background:var(--background);font-family:inherit;font-size:inherit;font-weight:400;-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);contain:strict;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-appearance:none;-moz-appearance:none;appearance:none}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.searchbar-input.sc-bkkr-searchbar{padding-left:unset;padding-right:unset;-webkit-padding-start:28px;padding-inline-start:28px;-webkit-padding-end:28px;padding-inline-end:28px}}.searchbar-input.sc-bkkr-searchbar::-moz-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.searchbar-input.sc-bkkr-searchbar::-ms-input-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.searchbar-input.sc-bkkr-searchbar::-webkit-input-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.searchbar-input.sc-bkkr-searchbar:-ms-input-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.searchbar-input.sc-bkkr-searchbar::placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.searchbar-input.sc-bkkr-searchbar::-webkit-search-cancel-button,.searchbar-input.sc-bkkr-searchbar::-ms-clear{display:none}.searchbar-cancel-button.sc-bkkr-searchbar{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:8px;padding-right:0;padding-top:0;padding-bottom:0;display:none;-ms-flex-negative:0;flex-shrink:0;height:100%;border:0;outline:none;background-color:transparent;color:var(--cancel-button-color);font-size:1em;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.searchbar-cancel-button.sc-bkkr-searchbar{padding-left:unset;padding-right:unset;-webkit-padding-start:8px;padding-inline-start:8px;-webkit-padding-end:0;padding-inline-end:0}}.searchbar-cancel-button.sc-bkkr-searchbar>div.sc-bkkr-searchbar{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%}.searchbar-clear-button.sc-bkkr-searchbar{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;top:0;right:0;background-position:center;display:none;position:absolute;width:36px;height:100%;min-height:0;border:0;outline:none;background-color:transparent;color:var(--clear-button-color);-webkit-appearance:none;-moz-appearance:none;appearance:none}.searchbar-clear-icon.sc-bkkr-searchbar{width:14px;height:100%}.searchbar-has-value.searchbar-has-focus.sc-bkkr-searchbar-h .searchbar-clear-button.sc-bkkr-searchbar{display:block}.searchbar-left-aligned.sc-bkkr-searchbar-h .searchbar-search-icon.sc-bkkr-searchbar{margin-left:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.searchbar-left-aligned.sc-bkkr-searchbar-h .searchbar-search-icon.sc-bkkr-searchbar{margin-left:unset;-webkit-margin-start:0;margin-inline-start:0}}.searchbar-left-aligned.sc-bkkr-searchbar-h .searchbar-input.sc-bkkr-searchbar{padding-left:40px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.searchbar-left-aligned.sc-bkkr-searchbar-h .searchbar-input.sc-bkkr-searchbar{padding-left:unset;-webkit-padding-start:40px;padding-inline-start:40px}}@media (any-hover: hover){.sc-bkkr-searchbar-h:hover .searchbar-input.sc-bkkr-searchbar{background:var(--background-hover)}}.sc-bkkr-searchbar-h:focus .searchbar-input.sc-bkkr-searchbar,.state-focused.sc-bkkr-searchbar-h .searchbar-input.sc-bkkr-searchbar{background:var(--background-focus)}.sc-bkkr-searchbar-h:active .searchbar-input.sc-bkkr-searchbar,.state-activated.sc-bkkr-searchbar-h .searchbar-input.sc-bkkr-searchbar{background:var(--background-active)}.sc-bkkr-searchbar-h:disabled,.state-disabled.sc-bkkr-searchbar-h{cursor:default;opacity:0.3;pointer-events:none}.searchbar-has-focus.sc-bkkr-searchbar-h .searchbar-cancel-button.sc-bkkr-searchbar,.searchbar-should-show-cancel.sc-bkkr-searchbar-h .searchbar-cancel-button.sc-bkkr-searchbar,.searchbar-animated.sc-bkkr-searchbar-h .searchbar-cancel-button.sc-bkkr-searchbar{display:block}.searchbar-animated.searchbar-has-focus.sc-bkkr-searchbar-h .searchbar-cancel-button.sc-bkkr-searchbar,.searchbar-animated.searchbar-should-show-cancel.sc-bkkr-searchbar-h .searchbar-cancel-button.sc-bkkr-searchbar{opacity:1;pointer-events:auto}.searchbar-animated.sc-bkkr-searchbar-h .searchbar-cancel-button.sc-bkkr-searchbar{margin-right:-100%;-webkit-transform:translate3d(0,  0,  0);transform:translate3d(0,  0,  0);-webkit-transition:all 0.2s cubic-bezier(0.32, 0.72, 0, 1);transition:all 0.2s cubic-bezier(0.32, 0.72, 0, 1);opacity:0;pointer-events:none}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.searchbar-animated.sc-bkkr-searchbar-h .searchbar-cancel-button.sc-bkkr-searchbar{margin-right:unset;-webkit-margin-end:-100%;margin-inline-end:-100%}}.searchbar-no-animate.sc-bkkr-searchbar-h .searchbar-search-icon.sc-bkkr-searchbar,.searchbar-no-animate.sc-bkkr-searchbar-h .searchbar-input.sc-bkkr-searchbar,.searchbar-no-animate.sc-bkkr-searchbar-h .searchbar-cancel-button.sc-bkkr-searchbar{-webkit-transition-duration:0ms;transition-duration:0ms}.bkkr-color.sc-bkkr-searchbar-h{color:var(--color-contrast)}.bkkr-color.sc-bkkr-searchbar-h .searchbar-input.sc-bkkr-searchbar{background:var(--color-base)}.bkkr-color.sc-bkkr-searchbar-h .searchbar-clear-button.sc-bkkr-searchbar,.bkkr-color.sc-bkkr-searchbar-h .searchbar-cancel-button.sc-bkkr-searchbar,.bkkr-color.sc-bkkr-searchbar-h .searchbar-search-icon.sc-bkkr-searchbar{color:inherit}.bkkr-color.sc-bkkr-searchbar-h .searchbar-cancel-button.sc-bkkr-searchbar{color:var(--color-base)}@media (any-hover: hover){.bkkr-color.sc-bkkr-searchbar-h .searchbar-cancel-button.sc-bkkr-searchbar:hover{color:var(--color-tint)}}bkkr-toolbar.sc-bkkr-searchbar-h,bkkr-toolbar .sc-bkkr-searchbar-h{--min-height:36px;padding-left:calc(var(--bkkr-spacer, 16px) - 4px);padding-right:calc(var(--bkkr-spacer, 16px) - 4px);padding-top:0;padding-bottom:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){bkkr-toolbar.sc-bkkr-searchbar-h,bkkr-toolbar .sc-bkkr-searchbar-h{padding-left:unset;padding-right:unset;-webkit-padding-start:calc(var(--bkkr-spacer, 16px) - 4px);padding-inline-start:calc(var(--bkkr-spacer, 16px) - 4px);-webkit-padding-end:calc(var(--bkkr-spacer, 16px) - 4px);padding-inline-end:calc(var(--bkkr-spacer, 16px) - 4px)}}bkkr-toolbar.bkkr-color.sc-bkkr-searchbar-h:not(.bkkr-color),bkkr-toolbar.bkkr-color .sc-bkkr-searchbar-h:not(.bkkr-color){color:inherit}bkkr-toolbar.bkkr-color.sc-bkkr-searchbar-h:not(.bkkr-color) .searchbar-cancel-button.sc-bkkr-searchbar,bkkr-toolbar.bkkr-color .sc-bkkr-searchbar-h:not(.bkkr-color) .searchbar-cancel-button.sc-bkkr-searchbar{color:currentColor}bkkr-toolbar.bkkr-color.sc-bkkr-searchbar-h .searchbar-search-icon.sc-bkkr-searchbar,bkkr-toolbar.bkkr-color .sc-bkkr-searchbar-h .searchbar-search-icon.sc-bkkr-searchbar{color:currentColor;opacity:0.5}bkkr-toolbar.bkkr-color.sc-bkkr-searchbar-h:not(.bkkr-color) .searchbar-input.sc-bkkr-searchbar,bkkr-toolbar.bkkr-color .sc-bkkr-searchbar-h:not(.bkkr-color) .searchbar-input.sc-bkkr-searchbar{background:rgba(var(--color-contrast-rgb), 0.04);color:currentColor}bkkr-toolbar.bkkr-color.sc-bkkr-searchbar-h:not(.bkkr-color) .searchbar-clear-button.sc-bkkr-searchbar,bkkr-toolbar.bkkr-color .sc-bkkr-searchbar-h:not(.bkkr-color) .searchbar-clear-button.sc-bkkr-searchbar{color:currentColor;opacity:0.5}";export{b as bkkr_searchbar}