import{r as t,f as o,h as n,H as r,g as e}from"./p-8dfd188c.js";import{a as i,b as a}from"./p-63696788.js";import{h as s}from"./p-c50c697b.js";let d=0;const c=class{constructor(n){t(this,n),this.segmentEl=null,this.checked=!1,this.disabled=!1,this.type="button",this.value="bkkr-sb-"+d++,this.updateStyle=()=>{o(this)},this.updateState=()=>{this.segmentEl&&(this.checked=this.segmentEl.value===this.value)}}connectedCallback(){const t=this.segmentEl=this.el.closest("bkkr-segment");t&&(this.updateState(),i(t,"bkkrSelect",this.updateState),i(t,"bkkrStyle",this.updateStyle))}disconnectedCallback(){const t=this.segmentEl;t&&(a(t,"bkkrSelect",this.updateState),a(t,"bkkrStyle",this.updateStyle),this.segmentEl=null)}render(){const{checked:t,type:o,disabled:e,segmentEl:i}=this;return n(r,{"aria-disabled":e?"true":null,class:{"in-toolbar":s("bkkr-toolbar",this.el),"in-toolbar-color":s("bkkr-toolbar[color]",this.el),"in-segment":s("bkkr-segment",this.el),"in-segment-color":null!==i&&void 0!==i.color,"segment-button-disabled":e,"segment-button-checked":t,"state-activatable":!0,"state-activatable-instant":!0,"state-focusable":!0}},n("button",{type:o,"aria-pressed":t?"true":"false",class:"button-native",part:"native",disabled:e},n("span",{class:"button-inner"},n("slot",null))),n("div",{part:"indicator",class:{"segment-button-indicator":!0,"segment-button-indicator-animated":!0}},n("div",{part:"indicator-background",class:"segment-button-indicator-background"})))}get el(){return e(this)}};c.style=':host{--background:none;--background-checked:none;--background-hover:none;--background-hover-opacity:0;--background-focused:none;--background-focused-opacity:0;--border-width:1px;--border-color:rgba(var(--bkkr-text-color-rgb, 0, 0, 0), 0.12);--border-style:solid;--color:initial;--color-hover:var(--color);--color-checked:var(--color);--color-disabled:var(--color);--indicator-box-shadow:0 1.5px 2.5px 0 rgba(var(--box-shadow-color, 0, 0, 0), 0.1), 0 6px 5px 0 rgba(var(--box-shadow-color, 0, 0, 0), 0.12), 0 0.6px 10px 0 rgba(var(--box-shadow-color, 0, 0, 0), 0.08);--indicator-color:var(--color-step-350, var(--bkkr-background-color, #fff));--indicator-height:100%;--indicator-transition:0.26s transform cubic-bezier(0.32, 0.72, 0, 1), 0.2s box-shadow cubic-bezier(0.32, 0.72, 0, 1);--indicator-transform:none;--transition:100ms all linear;--padding-top:0;--padding-end:13px;--padding-bottom:0;--padding-start:13px;--min-height:30px;margin-top:3px;margin-bottom:3px;border-radius:var(--border-radius, 0.75em);display:-ms-flexbox;display:flex;position:relative;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-preferred-size:0;flex-basis:0;-ms-flex-direction:row;flex-direction:row;min-width:70px;height:auto;min-height:var(--min-height);-webkit-transform:translate3d(0, 0, 0);transform:translate3d(0, 0, 0);background:var(--background);color:var(--color);font-size:13px;font-weight:450;line-height:35px;text-decoration:none;text-overflow:ellipsis;white-space:nowrap;cursor:pointer;-webkit-font-kerning:none;font-kerning:none}.button-native{border-radius:0;color:inherit;font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-align:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;white-space:inherit;margin-left:var(--margin-start);margin-right:var(--margin-end);margin-top:var(--margin-top);margin-bottom:var(--margin-bottom);padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);-webkit-transform:translate3d(0,  0,  0);transform:translate3d(0,  0,  0);display:-ms-flexbox;display:flex;position:relative;-ms-flex-direction:inherit;flex-direction:inherit;-ms-flex-positive:1;flex-grow:1;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;min-width:inherit;max-width:inherit;height:auto;min-height:inherit;max-height:inherit;-webkit-transform:translate3d(0, 0, 0);transform:translate3d(0, 0, 0);-webkit-transition:var(--transition);transition:var(--transition);border:none;outline:none;background:transparent;contain:content;overflow:hidden;z-index:2;pointer-events:none}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.button-native{margin-left:unset;margin-right:unset;-webkit-margin-start:var(--margin-start);margin-inline-start:var(--margin-start);-webkit-margin-end:var(--margin-end);margin-inline-end:var(--margin-end)}}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.button-native{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.button-native::after{top:0;right:0;bottom:0;left:0;position:absolute;content:"";opacity:0}.button-inner{display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:inherit;flex-flow:inherit;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;z-index:1}:host::before{margin-left:0;margin-right:0;margin-top:5px;margin-bottom:5px;-webkit-transition:160ms opacity ease-in-out;transition:160ms opacity ease-in-out;-webkit-transition-delay:100ms;transition-delay:100ms;border-left:var(--border-width) var(--border-style) var(--border-color);content:"";opacity:1;will-change:opacity}:host(:first-of-type)::before{border-left-color:transparent}:host(.segment-button-checked){background:var(--background-checked);color:var(--color-checked);z-index:-1}:host(.segment-button-checked)::before,:host(.segment-button-after-checked)::before{opacity:0}:host(.segment-button-disabled){pointer-events:none;cursor:default;opacity:0.3}:host(.segment-button-activated){--indicator-transform:scale(.95);--indicator-box-shadow:none}:host(.state-focused) .button-native{color:var(--color-focused);opacity:0.7}:host(.state-focused) .button-native::after{background:var(--background-focused);opacity:var(--background-focused-opacity)}@media (any-hover: hover){:host(:hover) .button-native{color:var(--color-hover);opacity:0.5}:host(:hover) .button-native::after{background:var(--background-hover);opacity:var(--background-hover-opacity)}:host(.segment-button-checked:hover) .button-native{color:var(--color-checked);opacity:1}}::slotted(bkkr-label){-webkit-box-sizing:border-box;box-sizing:border-box;display:block;-ms-flex-item-align:center;align-self:center;line-height:22px;text-overflow:ellipsis;white-space:nowrap;pointer-events:none}.segment-button-indicator{padding-left:3px;padding-right:3px;top:0;right:0;bottom:0;left:0;-webkit-transform-origin:left;transform-origin:left;position:absolute;opacity:0;-webkit-box-sizing:border-box;box-sizing:border-box;pointer-events:none;will-change:transform, opacity}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.segment-button-indicator{padding-left:unset;padding-right:unset;-webkit-padding-start:3px;padding-inline-start:3px;-webkit-padding-end:3px;padding-inline-end:3px}}.segment-button-indicator-background{border-radius:var(--border-radius);width:100%;height:var(--indicator-height);-webkit-transform:var(--indicator-transform);transform:var(--indicator-transform);-webkit-transition:var(--indicator-transition);transition:var(--indicator-transition);background:var(--indicator-color);-webkit-box-shadow:var(--indicator-box-shadow);box-shadow:var(--indicator-box-shadow);pointer-events:none}.segment-button-indicator-animated{-webkit-transition:var(--indicator-transition);transition:var(--indicator-transition)}:host(.segment-button-checked) .segment-button-indicator{opacity:1}:host(.in-segment-color){background:none;color:var(--bkkr-text-color, #000)}:host(.in-segment-color) .segment-button-indicator-background{background:var(--color-step-350, var(--bkkr-background-color, #fff))}@media (any-hover: hover){:host(.in-segment-color:hover) .button-native,:host(.in-segment-color.segment-button-checked:hover) .button-native{color:var(--bkkr-text-color, #000)}}@media (prefers-reduced-motion: reduce){.segment-button-indicator-background{-webkit-transform:none;transform:none}.segment-button-indicator-animated{-webkit-transition:none;transition:none}}:host(.in-toolbar:not(.in-segment-color)){--background-checked:var(--toolbar-segment-background-checked, none);--color:var(--toolbar-segment-color, var(--toolbar-color), initial);--color-checked:var(--toolbar-segment-color-checked, var(--toolbar-color), initial);--indicator-color:var(--toolbar-segment-indicator-color, var(--color-step-350, var(--bkkr-background-color, #fff)))}:host(.in-toolbar-color) .segment-button-indicator-background{background:#fff}:host(.in-toolbar-color:not(.in-segment-color)) .button-native{color:var(--color-contrast)}:host(.in-toolbar-color.segment-button-checked:not(.in-segment-color)) .button-native{color:var(--color-base)}@media (any-hover: hover){:host(.in-toolbar-color:not(.in-segment-color):hover) .button-native{color:var(--color-contrast)}:host(.in-toolbar-color.segment-button-checked:not(.in-segment-color):hover) .button-native{color:var(--color-base)}}';export{c as bkkr_segment_button}