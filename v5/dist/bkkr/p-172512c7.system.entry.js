var __awaiter=this&&this.__awaiter||function(e,t,n,r){function i(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,o){function a(e){try{c(r.next(e))}catch(e){o(e)}}function s(e){try{c(r["throw"](e))}catch(e){o(e)}}function c(e){e.done?n(e.value):i(e.value).then(a,s)}c((r=r.apply(e,t||[])).next())}))};var __generator=this&&this.__generator||function(e,t){var n={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},r,i,o,a;return a={next:s(0),throw:s(1),return:s(2)},typeof Symbol==="function"&&(a[Symbol.iterator]=function(){return this}),a;function s(e){return function(t){return c([e,t])}}function c(a){if(r)throw new TypeError("Generator is already executing.");while(n)try{if(r=1,i&&(o=a[0]&2?i["return"]:a[0]?i["throw"]||((o=i["return"])&&o.call(i),0):i.next)&&!(o=o.call(i,a[1])).done)return o;if(i=0,o)a=[a[0]&2,o.value];switch(a[0]){case 0:case 1:o=a;break;case 4:n.label++;return{value:a[1],done:false};case 5:n.label++;i=a[1];a=[0];continue;case 7:a=n.ops.pop();n.trys.pop();continue;default:if(!(o=n.trys,o=o.length>0&&o[o.length-1])&&(a[0]===6||a[0]===2)){n=0;continue}if(a[0]===3&&(!o||a[1]>o[0]&&a[1]<o[3])){n.label=a[1];break}if(a[0]===6&&n.label<o[1]){n.label=o[1];o=a;break}if(o&&n.label<o[2]){n.label=o[2];n.ops.push(a);break}if(o[2])n.ops.pop();n.trys.pop();continue}a=t.call(e,n)}catch(e){a=[6,e];i=0}finally{r=o=0}if(a[0]&5)throw a[1];return{value:a[0]?a[1]:void 0,done:true}}};System.register(["./p-8bb9cfc3.system.js","./p-0c770587.system.js","./p-d6f55265.system.js"],(function(e){"use strict";var t,n,r,i,o,a,s,c,d,l;return{setters:[function(e){t=e.r;n=e.h;r=e.H;i=e.g},function(e){o=e.c},function(e){a=e.r;s=e.a;c=e.b;d=e.g;l=e.t}],execute:function(){var u=":host{display:block;position:relative;width:100%;background-color:var(--bkkr-background-color, #ffffff);overflow:hidden;z-index:0}:host(.accordion-animated){-webkit-transition:all 300ms cubic-bezier(0.25, 0.8, 0.5, 1);transition:all 300ms cubic-bezier(0.25, 0.8, 0.5, 1)}:host(.accordion-animated) #content{-webkit-transition:max-height 300ms cubic-bezier(0.25, 0.8, 0.5, 1);transition:max-height 300ms cubic-bezier(0.25, 0.8, 0.5, 1)}:host ::slotted(bkkr-item[slot=header]){--padding-start:var(--bkkr-spacer, 16px)}#content{overflow:hidden;will-change:max-height}:host(.accordion-expanding) ::slotted(bkkr-item[slot=header]),:host(.accordion-expanded) ::slotted(bkkr-item[slot=header]){--border-width:0px}:host(.accordion-collapsing) #content{max-height:0 !important}:host(.accordion-collapsed) #content{display:none}:host(.accordion-expanding) #content{max-height:0}:host(.accordion-disabled) #header,:host(.accordion-readonly) #header{pointer-events:none}:host(.accordion-next) ::slotted(bkkr-item[slot=header]){--border-width:0.55px 0px 0.55px 0px}:host(.accordion-disabled) #header,:host(.accordion-disabled) #content{opacity:0.4}@media (prefers-reduced-motion: reduce){:host,#content{-webkit-transition:none !important;transition:none !important}}";var f;(function(e){e[e["Collapsed"]=1]="Collapsed";e[e["Collapsing"]=2]="Collapsing";e[e["Expanded"]=4]="Expanded";e[e["Expanding"]=8]="Expanding"})(f||(f={}));var h=e("bkkr_accordion",function(){function e(e){var n=this;t(this,e);this.updateListener=function(){return n.updateState(false)};this.state=f.Collapsed;this.isNext=false;this.isPrevious=false;this.value="bkkr-accordion-"+p++;this.disabled=false;this.readonly=false;this.toggleIcon="chevron-down";this.toggleIconSlot="end";this.setItemDefaults=function(){var e=n.getSlottedHeaderBkkrItem();if(!e){return}e.button=true;e.detail=false;if(e.lines===undefined){e.lines="full"}};this.getSlottedHeaderBkkrItem=function(){var e=n.headerEl;if(!e){return}var t=e.querySelector("slot");if(!t){return}var r=t.assignedElements&&t.assignedElements().find((function(e){return e.tagName==="BKKR-ITEM"}));return r};this.setAria=function(e){if(e===void 0){e=false}var t=n.getSlottedHeaderBkkrItem();if(!t){return}var r=d(t);var i=r.querySelector("button");if(!i){return}i.setAttribute("aria-expanded",""+e)};this.slotToggleIcon=function(){var e=n.getSlottedHeaderBkkrItem();if(!e){return}var t=n,r=t.toggleIconSlot,i=t.toggleIcon;var o=e.querySelector(".bkkr-accordion-toggle-icon");if(o){return}var a=document.createElement("bkkr-icon");a.slot=r;a.lazy=false;a.classList.add("bkkr-accordion-toggle-icon");a.icon=i;a.ariaHidden="true";e.appendChild(a)};this.expandAccordion=function(e){if(e===void 0){e=false}if(e){n.state=f.Expanded;return}if(n.state===f.Expanded){return}var t=n,r=t.contentEl,i=t.contentElWrapper;if(r===undefined||i===undefined){return}if(n.currentRaf!==undefined){cancelAnimationFrame(n.currentRaf)}if(n.shouldAnimate()){a((function(){n.state=f.Expanding;n.currentRaf=a((function(){return __awaiter(n,void 0,void 0,(function(){var e,t;return __generator(this,(function(n){switch(n.label){case 0:e=i.offsetHeight;t=l(r,2e3);r.style.setProperty("max-height",e+"px");return[4,t];case 1:n.sent();this.state=f.Expanded;r.style.removeProperty("max-height");return[2]}}))}))}))}))}else{n.state=f.Expanded}};this.collapseAccordion=function(e){if(e===void 0){e=false}if(e){n.state=f.Collapsed;return}if(n.state===f.Collapsed){return}var t=n.contentEl;if(t===undefined){return}if(n.currentRaf!==undefined){cancelAnimationFrame(n.currentRaf)}if(n.shouldAnimate()){n.currentRaf=a((function(){return __awaiter(n,void 0,void 0,(function(){var e;var n=this;return __generator(this,(function(r){e=t.offsetHeight;t.style.setProperty("max-height",e+"px");a((function(){return __awaiter(n,void 0,void 0,(function(){var e;return __generator(this,(function(n){switch(n.label){case 0:e=l(t,2e3);this.state=f.Collapsing;return[4,e];case 1:n.sent();this.state=f.Collapsed;t.style.removeProperty("max-height");return[2]}}))}))}));return[2]}))}))}))}else{n.state=f.Collapsed}};this.shouldAnimate=function(){if(typeof window==="undefined"){return false}var e=matchMedia("(prefers-reduced-motion: reduce)").matches;if(e){return false}var t=o.get("animated",true);if(!t){return false}if(n.accordionGroupEl&&!n.accordionGroupEl.animated){return false}return true};this.updateState=function(e){if(e===void 0){e=false}return __awaiter(n,void 0,void 0,(function(){var t,n,r,i,o,a,s,c;return __generator(this,(function(d){t=this.accordionGroupEl;n=this.value;if(!t){return[2]}r=t.value;i=Array.isArray(r)?r.includes(n):r===n;if(i){this.expandAccordion(e);this.isNext=this.isPrevious=false}else{this.collapseAccordion(e);o=this.getNextSibling();a=o&&o.value;if(a!==undefined){this.isPrevious=Array.isArray(r)?r.includes(a):r===a}s=this.getPreviousSibling();c=s&&s.value;if(c!==undefined){this.isNext=Array.isArray(r)?r.includes(c):r===c}}return[2]}))}))};this.getNextSibling=function(){if(!n.el){return}var e=n.el.nextElementSibling;if((e===null||e===void 0?void 0:e.tagName)!=="BKKR-ACCORDION"){return}return e};this.getPreviousSibling=function(){if(!n.el){return}var e=n.el.previousElementSibling;if((e===null||e===void 0?void 0:e.tagName)!=="BKKR-ACCORDION"){return}return e}}e.prototype.connectedCallback=function(){var e=this.accordionGroupEl=this.el&&this.el.closest("bkkr-accordion-group");if(e){this.updateState(true);s(e,"bkkrChange",this.updateListener)}};e.prototype.disconnectedCallback=function(){var e=this.accordionGroupEl;if(e){c(e,"bkkrChange",this.updateListener)}};e.prototype.componentDidLoad=function(){var e=this;this.setItemDefaults();this.slotToggleIcon();a((function(){var t=e.state===f.Expanded||e.state===f.Expanding;e.setAria(t)}))};e.prototype.toggleExpanded=function(){var e=this,t=e.accordionGroupEl,n=e.value,r=e.state;if(t){var i=r===f.Collapsed||r===f.Collapsing;t.requestAccordionToggle(n,i)}};e.prototype.render=function(){var e=this;var t=this,i=t.disabled,a=t.readonly;var s=this.state===f.Expanded||this.state===f.Expanding;var c=s?"header expanded":"header";var d=s?"content expanded":"content";this.setAria(s);return n(r,{class:{"accordion-expanding":this.state===f.Expanding,"accordion-expanded":this.state===f.Expanded,"accordion-collapsing":this.state===f.Collapsing,"accordion-collapsed":this.state===f.Collapsed,"accordion-next":this.isNext,"accordion-previous":this.isPrevious,"accordion-disabled":i,"accordion-readonly":a,"accordion-animated":o.getBoolean("animated",true)}},n("div",{onClick:function(){return e.toggleExpanded()},id:"header",part:c,"aria-controls":"content",ref:function(t){return e.headerEl=t}},n("slot",{name:"header"})),n("div",{id:"content",part:d,role:"region","aria-labelledby":"header",ref:function(t){return e.contentEl=t}},n("div",{id:"content-wrapper",ref:function(t){return e.contentElWrapper=t}},n("slot",{name:"content"}))))};Object.defineProperty(e,"delegatesFocus",{get:function(){return true},enumerable:false,configurable:true});Object.defineProperty(e.prototype,"el",{get:function(){return i(this)},enumerable:false,configurable:true});return e}());var p=0;h.style=u}}}));