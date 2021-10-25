/*!
 * (C) BKKR Framework https://bkkr-team.github.io/bkkr-docs/ - MIT License
 */
System.register(["./p-6c3087ac.system.js","./p-b60c7a38.system.js","./p-7c09dde3.system.js"],(function(r){"use strict";var t,e,o,a,i,n,s,c,l;return{setters:[function(r){t=r.r;e=r.c;o=r.h;a=r.H;i=r.g},function(r){n=r.i;s=r.o},function(r){c=r.s;l=r.h}],execute:function(){var d=":host{--color:var(--color-step-850, #262626);--color-active:var(--bkkr-text-color, #000);--color-hover:var(--bkkr-text-color, #000);--color-focused:var(--color-active);--background-focused:var(--color-step-50, #f2f2f2);--background-focused:var(--color-step-50, #f2f2f2);--transition:0.2s color cubic-bezier(0.32, 0.72, 0, 1), 0.2s background cubic-bezier(0.32, 0.72, 0, 1), 0.2s opacity cubic-bezier(0.32, 0.72, 0, 1);--border-radius:6.4px;display:-ms-flexbox;display:flex;-ms-flex:0 0 auto;flex:0 0 auto;-ms-flex-align:center;align-items:center;-webkit-transition:var(--transition);transition:var(--transition);color:var(--color);font-size:1rem;font-weight:400;line-height:1.5}:host(.breadcrumb-active){font-weight:600}.breadcrumb-native{color:inherit;font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-align:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;white-space:inherit;padding-left:12px;padding-right:12px;padding-top:5px;padding-bottom:5px;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;border-radius:var(--border-radius);display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;width:100%;border:1px solid transparent;outline:none;background:inherit}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.breadcrumb-native{padding-left:unset;padding-right:unset;-webkit-padding-start:12px;padding-inline-start:12px;-webkit-padding-end:12px;padding-inline-end:12px}}:host(.breadcrumb-disabled){cursor:default;opacity:0.5;pointer-events:none}:host(.breadcrumb-active){color:var(--color-active)}:host(.state-focused){color:var(--color-focused)}:host(.state-focused) .breadcrumb-native{background:var(--background-focused)}:host(.in-breadcrumbs-color.state-focused) .breadcrumb-native,:host(.bkkr-color.state-focused) .breadcrumb-native{background:var(--color-base, 0.1);color:var(--color-base)}:host(.state-focused) ::slotted(bkkr-icon),:host(.in-breadcrumbs-color.state-focused) ::slotted(bkkr-icon),:host(.bkkr-color.state-focused) ::slotted(bkkr-icon){color:var(--color-step-250, #bfbfbf)}@media (any-hover: hover){:host(.state-activatable:hover){color:var(--color-hover)}:host(.state-activatable.in-breadcrumbs-color:hover),:host(.state-activatable.bkkr-color:hover){color:var(--color-shade)}}.breadcrumb-separator{display:-ms-inline-flexbox;display:inline-flex;color:var(--color-step-450, #8c8c8c)}:host(.breadcrumb-collapsed) .breadcrumb-native{display:none}:host(.in-breadcrumbs-color),:host(.in-breadcrumbs-color.breadcrumb-active){color:var(--color-base)}:host(.in-breadcrumbs-color) .breadcrumb-separator{color:var(--color-base)}:host(.bkkr-color){color:var(--color-base)}:host(.in-toolbar-color),:host(.in-toolbar-color) .breadcrumb-separator{color:var(--color-contrast, 0.8)}:host(.in-toolbar-color.breadcrumb-active){color:var(--color-contrast)}.breadcrumbs-collapsed-indicator{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;margin-left:14px;margin-right:14px;margin-top:0;margin-bottom:0;border-radius:var(--border-radius);display:-ms-flexbox;display:flex;-ms-flex:1 1 100%;flex:1 1 100%;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:32px;height:18px;-webkit-transition:var(--transition);transition:var(--transition);border:0;outline:none;background:var(--color-step-100, #e6e6e6);color:var(--color-step-450, #8c8c8c);cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.breadcrumbs-collapsed-indicator{margin-left:unset;margin-right:unset;-webkit-margin-start:14px;margin-inline-start:14px;-webkit-margin-end:14px;margin-inline-end:14px}}.breadcrumbs-collapsed-indicator:hover{opacity:0.45}.breadcrumbs-collapsed-indicator:focus{background:var(--color-step-150, #d9d9d9)}.breadcrumbs-collapsed-indicator bkkr-icon{margin-top:1px;font-size:1.3rem}::slotted(bkkr-icon){color:var(--color-step-600, #666666);font-size:1.125rem}::slotted(bkkr-icon[slot=start]){margin-right:8px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){::slotted(bkkr-icon[slot=start]){margin-right:unset;-webkit-margin-end:8px;margin-inline-end:8px}}::slotted(bkkr-icon[slot=end]){margin-left:8px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){::slotted(bkkr-icon[slot=end]){margin-left:unset;-webkit-margin-start:8px;margin-inline-start:8px}}:host(.breadcrumb-active) ::slotted(bkkr-icon){color:var(--color-step-150, #d9d9d9)}";var b=r("bkkr_breadcrumb",function(){function r(r){var o=this;t(this,r);this.bkkrFocus=e(this,"bkkrFocus",7);this.bkkrBlur=e(this,"bkkrBlur",7);this.collapsedClick=e(this,"collapsedClick",7);this.inheritedAttributes={};this.collapsed=false;this.active=false;this.disabled=false;this.routerDirection="forward";this.onFocus=function(){o.bkkrFocus.emit()};this.onBlur=function(){o.bkkrBlur.emit()};this.collapsedIndicatorClick=function(){o.collapsedClick.emit({bkkrShadowTarget:o.collapsedRef})}}r.prototype.componentWillLoad=function(){this.inheritedAttributes=n(this.el,["aria-label"])};r.prototype.isClickable=function(){return this.href!==undefined};r.prototype.render=function(){var r=this;var t=this,e=t.color,i=t.active,n=t.collapsed,d=t.disabled,b=t.download,u=t.el,p=t.inheritedAttributes,m=t.last,h=t.routerDirection,f=t.separator,k=t.showCollapsedIndicator,g=t.target;var v=this.isClickable();var x=this.href===undefined?"span":"a";var w=d?undefined:this.href;var y=x==="span"?{}:{download:b,href:w,target:g};var z=m?false:n?k&&!m?true:false:f;return o(a,{onClick:function(r){return s(w,r,h)},"aria-disabled":d?"true":null,class:c(e,{"breadcrumb-active":i,"breadcrumb-collapsed":n,"breadcrumb-disabled":d,"in-breadcrumbs-color":l("bkkr-breadcrumbs[color]",u),"in-toolbar":l("bkkr-toolbar",this.el),"in-toolbar-color":l("bkkr-toolbar[color]",this.el),"state-activatable":v,"state-focusable":v})},o(x,Object.assign({},y,{class:"breadcrumb-native",part:"native",disabled:d,onFocus:this.onFocus,onBlur:this.onBlur},p),o("slot",{name:"start"}),o("slot",null),o("slot",{name:"end"})),k&&o("button",{part:"collapsed-indicator",onClick:function(){return r.collapsedIndicatorClick()},ref:function(t){return r.collapsedRef=t},class:{"breadcrumbs-collapsed-indicator":true}},o("bkkr-icon",{name:"ellipsis-h",lazy:false})),z&&o("span",{class:"breadcrumb-separator",part:"separator"},o("slot",{name:"separator"},o("bkkr-icon",{name:"chevron-right",lazy:false}))))};Object.defineProperty(r.prototype,"el",{get:function(){return i(this)},enumerable:false,configurable:true});return r}());b.style=d}}}));