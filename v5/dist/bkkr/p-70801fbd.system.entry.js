/*!
 * (C) BKKR Framework https://bkkr-team.github.io/bkkr-docs/ - MIT License
 */
System.register(["./p-85995b21.system.js","./p-7c09dde3.system.js","./p-e3e6838c.system.js"],(function(t){"use strict";var e,o,n,r,i,a,s,c;return{setters:[function(t){e=t.r;o=t.f;n=t.h;r=t.H;i=t.g},function(t){a=t.h},function(t){s=t.a;c=t.b}],execute:function(){var d=':host{--background:none;--background-checked:none;--background-hover:none;--background-hover-opacity:0;--background-focused:none;--background-focused-opacity:0;--border-width:1px;--border-color:rgba(var(--bkkr-text-color-rgb, 0, 0, 0), 0.12);--border-style:solid;--color:initial;--color-hover:var(--color);--color-checked:var(--color);--color-disabled:var(--color);--indicator-box-shadow:0 1.5px 2.5px 0 rgba(var(--box-shadow-color, 0, 0, 0), 0.1), 0 6px 5px 0 rgba(var(--box-shadow-color, 0, 0, 0), 0.12), 0 0.6px 10px 0 rgba(var(--box-shadow-color, 0, 0, 0), 0.08);--indicator-color:var(--bkkr-card-background, var(--bkkr-background-color, #fff));--indicator-height:100%;--indicator-transition:0.26s transform cubic-bezier(0.32, 0.72, 0, 1), 0.2s box-shadow cubic-bezier(0.32, 0.72, 0, 1);--indicator-transform:none;--transition:100ms all linear;--padding-top:0;--padding-end:13px;--padding-bottom:0;--padding-start:13px;--min-height:30px;margin-top:3px;margin-bottom:3px;border-radius:var(--border-radius, 12px);display:-ms-flexbox;display:flex;position:relative;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-preferred-size:0;flex-basis:0;-ms-flex-direction:row;flex-direction:row;min-width:70px;height:auto;min-height:var(--min-height);-webkit-transform:translate3d(0, 0, 0);transform:translate3d(0, 0, 0);background:var(--background);color:var(--color);font-size:0.8em;font-weight:450;line-height:35px;text-decoration:none;text-overflow:ellipsis;white-space:nowrap;cursor:pointer;-webkit-font-kerning:none;font-kerning:none;-ms-touch-action:manipulation;touch-action:manipulation}.button-native{border-radius:0;color:inherit;font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-align:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;white-space:inherit;margin-left:var(--margin-start);margin-right:var(--margin-end);margin-top:var(--margin-top);margin-bottom:var(--margin-bottom);padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);-webkit-transform:translate3d(0,  0,  0);transform:translate3d(0,  0,  0);display:-ms-flexbox;display:flex;position:relative;-ms-flex-direction:inherit;flex-direction:inherit;-ms-flex-positive:1;flex-grow:1;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;min-width:inherit;max-width:inherit;height:auto;min-height:inherit;max-height:inherit;-webkit-transform:translate3d(0, 0, 0);transform:translate3d(0, 0, 0);-webkit-transition:var(--transition);transition:var(--transition);border:none;outline:none;background:transparent;contain:content;overflow:hidden;z-index:2;pointer-events:none;will-change:transform, box-shadow}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.button-native{margin-left:unset;margin-right:unset;-webkit-margin-start:var(--margin-start);margin-inline-start:var(--margin-start);-webkit-margin-end:var(--margin-end);margin-inline-end:var(--margin-end)}}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.button-native{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.button-native::after{top:0;right:0;bottom:0;left:0;position:absolute;content:"";opacity:0}.button-inner{display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:inherit;flex-flow:inherit;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;z-index:1}:host::before{margin-left:0;margin-right:0;margin-top:5px;margin-bottom:5px;-webkit-transition:160ms opacity ease-in-out;transition:160ms opacity ease-in-out;-webkit-transition-delay:100ms;transition-delay:100ms;border-left:var(--border-width) var(--border-style) var(--border-color);content:"";opacity:1;will-change:opacity}:host(:first-of-type)::before{border-left-color:transparent}:host(.segment-button-checked){background:var(--background-checked);color:var(--color-checked);z-index:-1}:host(.segment-button-checked)::before,:host(.segment-button-after-checked)::before{opacity:0}:host(.segment-button-disabled){pointer-events:none;cursor:default;opacity:0.3}:host(.segment-button-activated){--indicator-transform:scale(0.95);--indicator-box-shadow:none}:host(.state-focused) .button-native{color:var(--color-focused);opacity:0.7}:host(.state-focused) .button-native::after{background:var(--background-focused);opacity:var(--background-focused-opacity)}:host(:focus){outline:none}@media (any-hover: hover){:host(:hover) .button-native{color:var(--color-hover);opacity:0.5}:host(:hover) .button-native::after{background:var(--background-hover);opacity:var(--background-hover-opacity)}:host(.segment-button-checked:hover) .button-native{color:var(--color-checked);opacity:1}}::slotted(bkkr-label){-webkit-box-sizing:border-box;box-sizing:border-box;display:block;-ms-flex-item-align:center;align-self:center;line-height:22px;text-overflow:ellipsis;white-space:nowrap;pointer-events:none}.segment-button-indicator{padding-left:3px;padding-right:3px;top:0;right:0;bottom:0;left:0;-webkit-transform-origin:left;transform-origin:left;position:absolute;opacity:0;-webkit-box-sizing:border-box;box-sizing:border-box;pointer-events:none;will-change:transform, opacity}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.segment-button-indicator{padding-left:unset;padding-right:unset;-webkit-padding-start:3px;padding-inline-start:3px;-webkit-padding-end:3px;padding-inline-end:3px}}.segment-button-indicator-background{border-radius:var(--border-radius);width:100%;height:var(--indicator-height);-webkit-transform:var(--indicator-transform);transform:var(--indicator-transform);-webkit-transition:var(--indicator-transition);transition:var(--indicator-transition);background:var(--indicator-color);-webkit-box-shadow:var(--indicator-box-shadow);box-shadow:var(--indicator-box-shadow);pointer-events:none}.segment-button-indicator-animated{-webkit-transition:var(--indicator-transition);transition:var(--indicator-transition)}:host(.segment-button-checked) .segment-button-indicator{opacity:1}:host(.in-segment-color){background:none;color:var(--bkkr-text-color, #000)}:host(.in-segment-color) .segment-button-indicator-background{background:var(--bkkr-card-background, var(--bkkr-background-color, #fff))}@media (any-hover: hover){:host(.in-segment-color:hover) .button-native,:host(.in-segment-color.segment-button-checked:hover) .button-native{color:var(--bkkr-text-color, #000)}}@media (prefers-reduced-motion: reduce){.segment-button-indicator-background{-webkit-transform:none;transform:none}.segment-button-indicator-animated{-webkit-transition:none;transition:none}}:host(.in-toolbar:not(.in-segment-color)){--background-checked:var(--toolbar-segment-background-checked, none);--color:var(--toolbar-segment-color, var(--toolbar-color), initial);--color-checked:var(\n    --toolbar-segment-color-checked,\n    var(--toolbar-color),\n    initial\n  );--indicator-color:var(--toolbar-segment-indicator-color, var(--bkkr-card-background, var(--bkkr-background-color, #fff)))}:host(.in-toolbar-color) .segment-button-indicator-background{background:#fff}:host(.in-toolbar-color:not(.in-segment-color)) .button-native{color:var(--color-contrast)}:host(.in-toolbar-color.segment-button-checked:not(.in-segment-color)) .button-native{color:var(--color-base)}@media (any-hover: hover){:host(.in-toolbar-color:not(.in-segment-color):hover) .button-native{color:var(--color-contrast)}:host(.in-toolbar-color.segment-button-checked:not(.in-segment-color):hover) .button-native{color:var(--color-base)}}';var l=0;var b=t("bkkr_segment_button",function(){function t(t){var n=this;e(this,t);this.segmentEl=null;this.checked=false;this.disabled=false;this.type="button";this.value="bkkr-sb-"+l++;this.updateStyle=function(){o(n)};this.updateState=function(){if(n.segmentEl){n.checked=n.segmentEl.value===n.value}}}t.prototype.connectedCallback=function(){var t=this.segmentEl=this.el.closest("bkkr-segment");if(t){this.updateState();s(t,"bkkrSelect",this.updateState);s(t,"bkkrStyle",this.updateStyle)}};t.prototype.disconnectedCallback=function(){var t=this.segmentEl;if(t){c(t,"bkkrSelect",this.updateState);c(t,"bkkrStyle",this.updateStyle);this.segmentEl=null}};Object.defineProperty(t.prototype,"tabIndex",{get:function(){return this.checked&&!this.disabled?0:-1},enumerable:false,configurable:true});t.prototype.render=function(){var t=this,e=t.checked,o=t.type,i=t.disabled,s=t.segmentEl,c=t.tabIndex;var d=function(){return s!==null&&s.color!==undefined};return n(r,{role:"tab","aria-selected":e?"true":"false","aria-disabled":i?"true":null,tabIndex:c,class:{"in-toolbar":a("bkkr-toolbar",this.el),"in-toolbar-color":a("bkkr-toolbar[color]",this.el),"in-segment":a("bkkr-segment",this.el),"in-segment-color":d(),"segment-button-disabled":i,"segment-button-checked":e,"state-activatable":true,"state-activatable-instant":true,"state-focusable":true}},n("button",{type:o,tabIndex:-1,"aria-pressed":e?"true":"false",class:"button-native",part:"native",disabled:i},n("span",{class:"button-inner"},n("slot",null))),n("div",{part:"indicator",class:{"segment-button-indicator":true,"segment-button-indicator-animated":true}},n("div",{part:"indicator-background",class:"segment-button-indicator-background"})))};Object.defineProperty(t.prototype,"el",{get:function(){return i(this)},enumerable:false,configurable:true});return t}());b.style=d}}}));