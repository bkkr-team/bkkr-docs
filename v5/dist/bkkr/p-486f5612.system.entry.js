/*!
 * (C) BKKR Framework https://bkkr-team.github.io/bkkr-docs/ - MIT License
 */
System.register(["./p-6c3087ac.system.js","./p-b60c7a38.system.js","./p-7c09dde3.system.js"],(function(t){"use strict";var e,i,r,a,o,n,s,l,d;return{setters:[function(t){e=t.r;i=t.f;r=t.h;a=t.H;o=t.g},function(t){n=t.r;s=t.o},function(t){l=t.s;d=t.h}],execute:function(){var c=':host{--padding-top:0;--padding-bottom:0;--padding-end:0;--padding-start:0;--inner-border-width:0;--inner-padding-top:0;--inner-padding-bottom:0;--inner-padding-start:0;--inner-padding-end:calc(var(--bkkr-spacer, 16px) * 0.5);--inner-box-shadow:none;--show-full-highlight:0;--show-inset-highlight:0;--detail-icon-color:initial;--detail-icon-font-size:20px;--detail-icon-opacity:0.25;--color:var(--bkkr-text-color, #000);--color-activated:var(--color);--color-focused:var(--color);--color-hover:var(--color);--min-height:44px;--transition:0.2s border cubic-bezier(0.32, 0.72, 0, 1), 0.2s background cubic-bezier(0.32, 0.72, 0, 1);--background:var(--background, var(--bkkr-item-background, var(--bkkr-background-color, transparent)));--background-activated:currentColor;--background-focused:currentColor;--background-hover:currentColor;--background-activated-opacity:0.12;--background-focused-opacity:0.04;--background-hover-opacity:0.04;--border-radius:12px;--border-width:0;--border-style:solid;--border-color:var(--bkkr-border, rgba(var(--bkkr-text-color-rgb, 0, 0, 0), 0.3));--border-color-hover:var(--bkkr-border, rgba(var(--bkkr-text-color-rgb, 0, 0, 0), 0.7));--border-color-focus:var(--bkkr-border, rgba(var(--bkkr-text-color-rgb, 0, 0, 0), 0.7));--highlight-width:0;--highlight-height:2px;--highlight-background:var(--highlight-color-focused);--highlight-color-focused:var(--color-base, var(--color-primary, #3880ff));--highlight-color-invalid:var(--color-base, var(--color-danger, #eb445a));-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:block;position:relative;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;outline:none;color:var(--color);font-family:var(--bkkr-font-family);font-size:1rem;text-align:initial;text-decoration:none;overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box}:host(.state-activatable){cursor:pointer}:host(.item-shape-round){--border-radius:32px}:host(.in-list){--padding-start:var(--bkkr-spacer, 16px);--border-radius:0;--inner-border-width:0 0 0.55px 0}.item-native{border-radius:var(--border-radius);margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:calc(var(--padding-start) + var(--safe-area-left, 0));padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);color:inherit;font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-align:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;white-space:inherit;display:-ms-flexbox;display:flex;position:relative;-ms-flex-align:inherit;align-items:inherit;-ms-flex-pack:inherit;justify-content:inherit;width:100%;min-height:var(--min-height);-webkit-transition:var(--transition);transition:var(--transition);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);outline:none;background:var(--background);overflow:inherit;-webkit-box-sizing:border-box;box-sizing:border-box;z-index:1}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.item-native{padding-left:unset;padding-right:unset;-webkit-padding-start:calc(var(--padding-start) + var(--safe-area-left, 0));padding-inline-start:calc(var(--padding-start) + var(--safe-area-left, 0));-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.item-native::-moz-focus-inner{border:0}.item-native::after{top:0;right:0;bottom:0;left:0;position:absolute;content:"";opacity:0;-webkit-transition:0.2s opacity cubic-bezier(0.32, 0.72, 0, 1);transition:0.2s opacity cubic-bezier(0.32, 0.72, 0, 1);z-index:-1}button,a{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-user-drag:none}:host(.item-color:not(.item-fill-solid):not(.item-fill-outline)) .item-native{background:var(--color-base);color:var(--color-contrast)}:host(.item-color:not(.item-fill-solid):not(.item-fill-outline)) .item-native,:host(.item-color:not(.item-fill-solid):not(.item-fill-outline)) .item-inner{border-color:var(--color-shade)}:host(.state-activatable.state-focused) .item-native{color:var(--color-focused)}:host(.state-activatable.state-focused) .item-native::after{background:var(--background-focused);opacity:var(--background-focused-opacity)}:host(.item-color.state-activatable.state-focused) .item-native{color:var(--color-contrast)}:host(.item-color.state-activatable.state-focused) .item-native::after{background:var(--color-contrast);opacity:var(--background-focused-opacity)}:host(.state-activatable.item-fill-solid.state-focused) .item-native,:host(.state-activatable.item-fill-solid.item-has-focus) .item-native{--background:var(--background-focused)}@media (any-hover: hover){:host(.state-activatable:hover) .item-native{color:var(--color-hover)}:host(.state-activatable:hover) .item-native::after{background:var(--background-hover);opacity:var(--background-hover-opacity)}:host(.item-color.state-activatable:hover) .item-native{color:var(--color-contrast)}:host(.item-color.state-activatable:hover) .item-native::after{background:var(--color-contrast);opacity:var(--background-hover-opacity)}}:host(.state-activatable.state-activated) .item-native{color:var(--color-activated)}:host(.state-activatable.state-activated) .item-native::after{background:var(--background-activated);opacity:var(--background-activated-opacity)}:host(.state-activatable.item-color.state-activated) .item-native{color:var(--color-contrast)}:host(.state-activatable.item-color.state-activated) .item-native::after{background:#000;opacity:var(--background-activated-opacity)}:host(.state-disabled){pointer-events:none;cursor:default;opacity:0.3}:host(.item-interactive){--show-full-highlight:1;--show-inset-highlight:0}:host(.item-interactive.in-list){--show-full-highlight:0;--show-inset-highlight:1}:host(.item-lines-full){--border-width:0 0 0.55px 0;--show-full-highlight:1;--show-inset-highlight:0}:host(.item-lines-inset){--inner-border-width:0 0 0.55px 0;--show-full-highlight:0;--show-inset-highlight:1}:host(.item-lines-inset),:host(.item-lines-none){--border-width:0;--show-full-highlight:0}:host(.item-lines-full),:host(.item-lines-none){--inner-border-width:0;--show-inset-highlight:0}:host(.item-fill-none.state-activatable:not(.in-list)){--padding-start:calc(var(--bkkr-spacer, 16px) * 0.5);--inner-padding-end:var(--bkkr-spacer, 16px);--inner-padding-top:0;--inner-padding-bottom:0;margin-left:calc(var(--bkkr-spacer, 16px) * 0.5 * -1);margin-right:calc(var(--bkkr-spacer, 16px) * 0.5 * -1);margin-top:0;margin-bottom:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host(.item-fill-none.state-activatable:not(.in-list)){margin-left:unset;margin-right:unset;-webkit-margin-start:calc(var(--bkkr-spacer, 16px) * 0.5 * -1);margin-inline-start:calc(var(--bkkr-spacer, 16px) * 0.5 * -1);-webkit-margin-end:calc(var(--bkkr-spacer, 16px) * 0.5 * -1);margin-inline-end:calc(var(--bkkr-spacer, 16px) * 0.5 * -1)}}:host(.item-fill-solid){--background:rgba(var(--bkkr-text-color-rgb, 0, 0, 0), 0.06);--background-hover:rgba(var(--bkkr-text-color-rgb, 0, 0, 0), 0.1);--background-focused:rgba(var(--bkkr-text-color-rgb, 0, 0, 0), 0.1);--border-width:0;--padding-start:var(--bkkr-spacer, 16px)}:host(.item-fill-solid){--show-full-highlight:0;--show-inset-highlight:1}:host(.item-fill-solid) .item-native:hover{--background:var(--background-hover)}:host(.item-fill-solid.item-has-focus) .item-native{--background:var(--background-focused)}:host(.item-fill-solid.item-shape-round) .item-native{--padding-start:26px;--padding-end:10px}:host(.item-fill-outline){--border-color:var(--bkkr-border, rgba(var(--bkkr-text-color-rgb, 0, 0, 0), 0.3));--border-width:0.55px;--padding-start:var(--bkkr-spacer, 16px);border:none;overflow:visible}:host(.item-fill-outline) .item-native{--padding-left:10px;--show-full-highlight:0}:host(.item-fill-outline.item-shape-round) .item-native{--inner-padding-start:10px}:host(.item-fill-outline.item-label-floating.item-has-focus) .item-native ::slotted(bkkr-input:not(:first-child)),:host(.item-fill-outline.item-label-floating.item-has-value) .item-native ::slotted(bkkr-input:not(:first-child)),:host(.item-fill-outline.item-label-floating.item-has-focus) .item-native ::slotted(bkkr-textarea:not(:first-child)),:host(.item-fill-outline.item-label-floating.item-has-value) .item-native ::slotted(bkkr-textarea:not(:first-child)){-webkit-transform:translateY(-25%);transform:translateY(-25%)}.item-inner{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:var(--inner-padding-start);padding-right:calc(var(--safe-area-right, 0) + var(--inner-padding-end));padding-top:var(--inner-padding-top);padding-bottom:var(--inner-padding-bottom);display:-ms-flexbox;display:flex;position:relative;-ms-flex:1;flex:1;-ms-flex-direction:inherit;flex-direction:inherit;-ms-flex-align:inherit;align-items:inherit;-ms-flex-item-align:stretch;align-self:stretch;max-width:inherit;min-height:inherit;-webkit-transition:var(--transition);transition:var(--transition);border-width:var(--inner-border-width);border-style:var(--border-style);border-color:var(--border-color);-webkit-box-shadow:var(--inner-box-shadow);box-shadow:var(--inner-box-shadow);overflow:inherit;-webkit-box-sizing:border-box;box-sizing:border-box}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.item-inner{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--inner-padding-start);padding-inline-start:var(--inner-padding-start);-webkit-padding-end:calc(var(--safe-area-right, 0) + var(--inner-padding-end));padding-inline-end:calc(var(--safe-area-right, 0) + var(--inner-padding-end))}}.item-detail-icon{color:var(--detail-icon-color);font-size:var(--detail-icon-font-size);opacity:var(--detail-icon-opacity)}::slotted(bkkr-button){--margin-top:0;--margin-bottom:0;--margin-start:0;--margin-end:0;--height:2.3em;z-index:1}::slotted(bkkr-label){margin-left:0;margin-right:8px;margin-top:10px;margin-bottom:10px;pointer-events:none}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){::slotted(bkkr-label){margin-left:unset;margin-right:unset;-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:8px;margin-inline-end:8px}}::slotted(bkkr-label:not([slot=end])){-ms-flex:1;flex:1}::slotted([slot=start]){margin-left:0;margin-right:var(--bkkr-spacer, 16px);margin-top:calc(var(--bkkr-spacer, 16px) * 0.5);margin-bottom:calc(var(--bkkr-spacer, 16px) * 0.5)}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){::slotted([slot=start]){margin-left:unset;margin-right:unset;-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:var(--bkkr-spacer, 16px);margin-inline-end:var(--bkkr-spacer, 16px)}}::slotted([slot=end]){margin-left:var(--bkkr-spacer, 16px);margin-right:var(--bkkr-spacer, 16px);margin-top:calc(var(--bkkr-spacer, 16px) * 0.5);margin-bottom:calc(var(--bkkr-spacer, 16px) * 0.5)}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){::slotted([slot=end]){margin-left:unset;margin-right:unset;-webkit-margin-start:var(--bkkr-spacer, 16px);margin-inline-start:var(--bkkr-spacer, 16px);-webkit-margin-end:var(--bkkr-spacer, 16px);margin-inline-end:var(--bkkr-spacer, 16px)}}:host(.item-fill-solid) ::slotted([slot=start]),:host(.item-fill-solid) ::slotted([slot=end]),:host(.item-fill-outline) ::slotted([slot=start]),:host(.item-fill-outline) ::slotted([slot=end]){-ms-flex-item-align:center;align-self:center}::slotted(bkkr-icon){font-size:1.25em}::slotted(bkkr-icon[slot=start]),::slotted(bkkr-icon[slot=end]){margin-top:7px;margin-bottom:7px}::slotted(bkkr-toggle[slot=start]),::slotted(bkkr-toggle[slot=end]){margin-left:0;margin-right:0;margin-top:0;margin-bottom:0}:host(.item-input){--inner-border-width:0 0 0.55px 0;-ms-flex-align:center;align-items:center}:host(.item-interactive.item-input){--full-highlight-height:calc(var(--highlight-height) * var(--show-full-highlight));--inset-highlight-height:calc(var(--highlight-height) * var(--show-inset-highlight))}:host(.item-input) .item-native{cursor:text}:host(.item-input.item-fill-none) .item-native{border-radius:0}.item-wrapper{display:-ms-flexbox;display:flex;-ms-flex:1;flex:1;-ms-flex-direction:inherit;flex-direction:inherit;-ms-flex-align:inherit;align-items:inherit;-ms-flex-item-align:stretch;align-self:stretch;max-width:inherit;text-overflow:ellipsis;overflow:inherit;-webkit-box-sizing:border-box;box-sizing:border-box}:host(.item-fill-solid.item-input){--border-width:0;--inner-border-width:0;--padding-end:var(--padding-start)}:host(.item-fill-solid.item-input.item-shape-round) .item-native{--padding-end:26px}:host(.item-fill-outline.item-input){--background-hover:transparent;--background-focused:transparent;--inner-border-width:0;--highlight-height:2px}@media (any-hover: hover){:host(.item-fill-outline.item-input):hover .item-native{--border-color:var(--bkkr-border, rgba(var(--bkkr-text-color-rgb, 0, 0, 0), 0.7))}}.item-highlight,.item-inner-highlight{right:0;bottom:0;left:0;border-radius:inherit;position:absolute;width:var(--highlight-width);height:100%;-webkit-transform:scaleY(0);transform:scaleY(0);-webkit-transform-origin:bottom center;transform-origin:bottom center;-webkit-transition:width 0.2s cubic-bezier(0.32, 0.72, 0, 1), -webkit-transform 0.2s cubic-bezier(0.32, 0.72, 0, 1);transition:width 0.2s cubic-bezier(0.32, 0.72, 0, 1), -webkit-transform 0.2s cubic-bezier(0.32, 0.72, 0, 1);transition:width 0.2s cubic-bezier(0.32, 0.72, 0, 1), transform 0.2s cubic-bezier(0.32, 0.72, 0, 1);transition:width 0.2s cubic-bezier(0.32, 0.72, 0, 1), transform 0.2s cubic-bezier(0.32, 0.72, 0, 1), -webkit-transform 0.2s cubic-bezier(0.32, 0.72, 0, 1);border-style:var(--border-style);border-color:var(--highlight-background);z-index:2;-webkit-box-sizing:border-box;box-sizing:border-box;pointer-events:none}:host(.item-interactive) .item-highlight{border-width:0 0 var(--full-highlight-height) 0}:host(.item-interactive) .item-inner-highlight{border-width:0 0 var(--inset-highlight-height) 0}:host(.item-fill-outline) .item-highlight{--position-offset:calc(-1 * var(--border-width));top:var(--position-offset);left:var(--position-offset);width:calc(100% + 2 * var(--border-width));height:calc(100% + 2 * var(--border-width));-webkit-transform:scaleY(1);transform:scaleY(1);-webkit-transition:opacity 0.2s cubic-bezier(0.32, 0.72, 0, 1), -webkit-transform 0.2s cubic-bezier(0.32, 0.72, 0, 1);transition:opacity 0.2s cubic-bezier(0.32, 0.72, 0, 1), -webkit-transform 0.2s cubic-bezier(0.32, 0.72, 0, 1);transition:opacity 0.2s cubic-bezier(0.32, 0.72, 0, 1), transform 0.2s cubic-bezier(0.32, 0.72, 0, 1);transition:opacity 0.2s cubic-bezier(0.32, 0.72, 0, 1), transform 0.2s cubic-bezier(0.32, 0.72, 0, 1), -webkit-transform 0.2s cubic-bezier(0.32, 0.72, 0, 1);opacity:0}:host(.item-fill-outline.item-interactive) .item-highlight{border-width:var(--full-highlight-height)}:host(.item-fill-outline.item-interactive) .item-inner-highlight{border-width:var(--inset-highlight-height)}:host(.item-fill-outline.state-focused) .item-native,:host(.item-fill-outline.item-has-focus) .item-native{border-color:transparent}@media (any-hover: hover){:host(.item-input:hover){--border-color:var(--border-color-hover)}}:host(.item-interactive.item-input.state-focused),:host(.item-interactive.item-input.item-has-focus),:host(.item-interactive.item-input.state-touched.state-invalid){--highlight-width:100%}:host(.item-fill-none.item-interactive.state-focus) .item-highlight,:host(.item-fill-none.item-interactive.item-has-focus) .item-highlight,:host(.item-fill-none.item-interactive.state-touched.state-invalid) .item-highlight{-webkit-transform:scaleY(1);transform:scaleY(1)}:host(.item-fill-outline.item-interactive.state-focus) .item-highlight,:host(.item-fill-outline.item-interactive.item-has-focus) .item-highlight,:host(.item-fill-outline.item-interactive.state-touched.state-invalid) .item-highlight{opacity:1}:host(.item-fill-solid.item-interactive.state-focus) .item-inner-highlight,:host(.item-fill-solid.item-interactive.item-has-focus) .item-inner-highlight,:host(.item-fill-solid.item-interactive.state-touched.state-invalid) .item-inner-highlight{-webkit-transform:scaleY(1);transform:scaleY(1)}:host(.item-interactive.item-has-focus) .item-native{caret-color:var(--highlight-background)}:host(.item-has-focus) .item-native{caret-color:var(--highlight-color-focused)}:host(.item-interactive-disabled:not(.item-multiple-inputs)){pointer-events:none;cursor:default}:host(.item-interactive.state-invalid){--highlight-background:var(--highlight-color-invalid)}:host(.item-interactive.state-invalid:not(.state-pristine)) ::slotted([slot=helper]){display:none}:host(.item-interactive.state-invalid:not(.state-pristine)) ::slotted([slot=error]){display:block}:host(:not(.item-label)) ::slotted(bkkr-select){--padding-start:0;width:100%}:host(.item-label-stacked) ::slotted(bkkr-select),:host(.item-label-floating) ::slotted(bkkr-select){--padding-top:8px;--padding-bottom:8px;--padding-start:0;-ms-flex-item-align:stretch;align-self:stretch;width:100%;max-width:100%}:host(.item-multiple-inputs) ::slotted(bkkr-checkbox),:host(.item-multiple-inputs) ::slotted(bkkr-radio),:host(.item-multiple-inputs) ::slotted(bkkr-select){position:relative}:host(.item-textarea){-ms-flex-align:stretch;align-items:stretch}::slotted(bkkr-reorder[slot]){margin-top:0;margin-bottom:0}:host(.item-label-stacked),:host(.item-label-floating){-ms-flex-align:start;align-items:start}:host(.item-label-floating) ::slotted(bkkr-datepicker),:host(.item-label-floating) ::slotted(bkkr-input),:host(.item-label-floating) ::slotted(bkkr-textarea),:host(.item-label-floating) ::slotted(bkkr-select){--placeholder-opacity:0}:host(.item-label-stacked) .item-wrapper,:host(.item-label-floating) .item-wrapper{-ms-flex:1;flex:1;-ms-flex-direction:column;flex-direction:column}:host(.item-label-stacked) ::slotted([slot=end]),:host(.item-label-floating) ::slotted([slot=end]){margin-top:7px;margin-bottom:7px}:host(.item-label-floating.item-has-focus) ::slotted(bkkr-datepicker),:host(.item-label-floating.item-has-focus) ::slotted(bkkr-input),:host(.item-label-floating.item-has-focus) ::slotted(bkkr-textarea),:host(.item-label-floating.item-has-focus) ::slotted(bkkr-select){--placeholder-opacity:0.5;--placeholder-transitbkkr-delay:0.05s}:host(.item-radio) ::slotted(bkkr-label),:host(.item-toggle) ::slotted(bkkr-label){margin-left:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host(.item-radio) ::slotted(bkkr-label),:host(.item-toggle) ::slotted(bkkr-label){margin-left:unset;-webkit-margin-start:0;margin-inline-start:0}}:host(.item-label-fixed) ::slotted(bkkr-select){--padding-start:0}::slotted(.button-small){--padding-top:0;--padding-bottom:0;--padding-start:0.5em;--padding-end:0.5em;height:24px;font-size:0.8rem}::slotted(bkkr-shape){--size:36px}::slotted(bkkr-thumbnail){width:56px;height:56px}::slotted(bkkr-bkkr-shape[slot=end]),::slotted(bkkr-thumbnail[slot=end]){margin-left:calc(var(--bkkr-spacer, 16px) * 0.5);margin-right:calc(var(--bkkr-spacer, 16px) * 0.5);margin-top:calc(var(--bkkr-spacer, 16px) * 0.5);margin-bottom:calc(var(--bkkr-spacer, 16px) * 0.5)}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){::slotted(bkkr-bkkr-shape[slot=end]),::slotted(bkkr-thumbnail[slot=end]){margin-left:unset;margin-right:unset;-webkit-margin-start:calc(var(--bkkr-spacer, 16px) * 0.5);margin-inline-start:calc(var(--bkkr-spacer, 16px) * 0.5);-webkit-margin-end:calc(var(--bkkr-spacer, 16px) * 0.5);margin-inline-end:calc(var(--bkkr-spacer, 16px) * 0.5)}}.item-bottom{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:calc(var(--padding-start) + var(--ion-safe-area-left, 0px) + var(--bottom-padding-start, 0px));padding-right:var(--inner-padding-end);padding-top:var(--bottom-padding-top);padding-bottom:var(--bottom-padding-bottom);display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.item-bottom{padding-left:unset;padding-right:unset;-webkit-padding-start:calc(var(--padding-start) + var(--ion-safe-area-left, 0px) + var(--bottom-padding-start, 0px));padding-inline-start:calc(var(--padding-start) + var(--ion-safe-area-left, 0px) + var(--bottom-padding-start, 0px));-webkit-padding-end:var(--inner-padding-end);padding-inline-end:var(--inner-padding-end)}}:host(.item-fill-solid) ::slotted([slot=start]),:host(.item-fill-solid) ::slotted([slot=end]),:host(.item-fill-outline) ::slotted([slot=start]),:host(.item-fill-outline) ::slotted([slot=end]){-ms-flex-item-align:center;align-self:center}::slotted([slot=helper]),::slotted([slot=error]),.item-counter{padding-top:5px;font-size:12px;z-index:1}.item-counter{margin-left:auto;justify-self:flex-end}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.item-counter{margin-left:unset;-webkit-margin-start:auto;margin-inline-start:auto}}::slotted([slot=helper]:empty),::slotted([slot=error]:empty){display:none}::slotted([slot=error]){display:none;color:var(--highlight-color-invalid)}@media (prefers-reduced-motion: reduce){.item-highlight,.item-inner-highlight{-webkit-transition:none;transition:none}}';var h=t("bkkr_item",function(){function t(t){e(this,t);this.labelColorStyles={};this.itemStyles=new Map;this.multipleInputs=false;this.button=false;this.detailIcon="chevron-right";this.disabled=false;this.counter=true;this.routerDirection="forward";this.type="button"}t.prototype.handleIonChange=function(t){if(this.counter&&t.target===this.getFirstInput()){this.updateCounterOutput(t.target)}};t.prototype.labelColorChanged=function(t){var e=this.color;if(e===undefined){this.labelColorStyles=t.detail}};t.prototype.itemStyle=function(t){t.stopPropagation();var e=t.target.tagName;var r=t.detail;var a={};var o=this.itemStyles.get(e)||{};var n=false;Object.keys(r).forEach((function(t){if(r[t]){var e="item-"+t;if(!o[e]){n=true}a[e]=true}}));if(!n&&Object.keys(a).length!==Object.keys(o).length){n=true}if(n){this.itemStyles.set(e,a);i(this)}};t.prototype.connectedCallback=function(){if(this.counter){this.updateCounterOutput(this.getFirstInput())}this.hasStartEl()};t.prototype.componentDidUpdate=function(){var t=this;var e=this.getFirstInput();if(e&&!this.clickListener){this.clickListener=function(i){return t.delegateFocus(i,e)};this.el.addEventListener("click",this.clickListener)}};t.prototype.disconnectedCallback=function(){var t=this.getFirstInput();if(t&&this.clickListener){this.el.removeEventListener("click",this.clickListener);this.clickListener=undefined}};t.prototype.componentDidLoad=function(){var t=this;n((function(){return t.setMultipleInputs()}))};t.prototype.setMultipleInputs=function(){var t=this.el.querySelectorAll("bkkr-checkbox, bkkr-select, bkkr-radio");var e=this.el.querySelectorAll("bkkr-input, bkkr-range, bkkr-segment, bkkr-textarea, bkkr-toggle, bkkr-datetime");var i=this.el.querySelectorAll("bkkr-anchor, bkkr-button, a, button");this.multipleInputs=t.length+e.length>1||t.length+i.length>1||t.length>0&&this.isClickable()};t.prototype.hasCover=function(){var t=this.el.querySelectorAll("bkkr-checkbox, bkkr-radio");return t.length===1&&!this.multipleInputs};t.prototype.isClickable=function(){return this.href!==undefined||this.button};t.prototype.canActivate=function(){return this.isClickable()||this.hasCover()};t.prototype.getFirstInput=function(){var t=this.el.querySelectorAll("bkkr-input, bkkr-textarea");return t[0]};t.prototype.delegateFocus=function(t,e){var i=t.target.tagName==="BKKR-ITEM";var r=false;if(document.activeElement){r=e.querySelector("input, textarea")===document.activeElement}if(i&&(r||!this.multipleInputs)){e.fireFocusEvents=false;e.setBlur();e.setFocus();n((function(){e.fireFocusEvents=true}))}};t.prototype.updateCounterOutput=function(t){var e,i;if(this.counter&&!this.multipleInputs&&(t===null||t===void 0?void 0:t.maxlength)!==undefined){var r=(i=(e=t===null||t===void 0?void 0:t.value)===null||e===void 0?void 0:e.toString().length)!==null&&i!==void 0?i:0;this.counterString=""+(t.maxlength-r)}};t.prototype.hasStartEl=function(){var t=this.el.querySelector('[slot="start"]');if(t!==null){this.el.classList.add("item-has-start-slot")}};t.prototype.render=function(){var t;var e=this,i=e.counterString,o=e.detail,n=e.detailIcon,c=e.download,h=e.fill,g=e.labelColorStyles,m=e.lines,b=e.disabled,p=e.href,u=e.rel,v=e.shape,k=e.target,f=e.routerDirection;var x={};var w=this.isClickable();var y=this.canActivate();var z=w?p===undefined?"button":"a":"div";var C=h||"none";var S=z==="button"?{type:this.type}:{download:c,href:p,rel:u,target:k};var j=w?{onClick:function(t){s(p,t,f)}}:{};var I=o!==undefined?o:false;this.itemStyles.forEach((function(t){Object.assign(x,t)}));var O=b||x["item-interactive-disabled"]?"true":null;return r(a,{"aria-disabled":O,class:Object.assign(Object.assign(Object.assign({},x),g),l(this.color,(t={item:true},t["item-lines-"+m]=m!==undefined,t["item-fill-"+C]=true,t["item-shape-"+v]=v!==undefined,t["in-list"]=d("bkkr-list",this.el),t["item-multiple-inputs"]=this.multipleInputs,t["state-activatable"]=y,t["state-focusable"]=true,t["state-disabled"]=b,t["item-rtl"]=document.dir==="rtl",t)))},r(z,Object.assign({},S,{class:"item-native",part:"native",disabled:b},j),r("slot",{name:"start"}),r("div",{class:"item-inner"},r("div",{class:"item-wrapper"},r("slot",null)),r("slot",{name:"end"}),I&&r("bkkr-icon",{icon:n,lazy:false,class:"item-detail-icon",part:"detail-icon","aria-hidden":"true"}),r("div",{class:"item-inner-highlight"})),r("div",{class:"item-highlight"})),r("div",{class:"item-bottom"},r("slot",{name:"error"}),r("slot",{name:"helper"}),i&&r("bkkr-note",{class:"item-counter"},i)))};Object.defineProperty(t,"delegatesFocus",{get:function(){return true},enumerable:false,configurable:true});Object.defineProperty(t.prototype,"el",{get:function(){return o(this)},enumerable:false,configurable:true});return t}());h.style=c}}}));