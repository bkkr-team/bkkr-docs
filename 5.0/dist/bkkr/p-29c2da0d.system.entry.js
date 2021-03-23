var __awaiter=this&&this.__awaiter||function(e,r,t,n){function i(e){return e instanceof t?e:new t((function(r){r(e)}))}return new(t||(t=Promise))((function(t,o){function a(e){try{s(n.next(e))}catch(e){o(e)}}function u(e){try{s(n["throw"](e))}catch(e){o(e)}}function s(e){e.done?t(e.value):i(e.value).then(a,u)}s((n=n.apply(e,r||[])).next())}))};var __generator=this&&this.__generator||function(e,r){var t={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},n,i,o,a;return a={next:u(0),throw:u(1),return:u(2)},typeof Symbol==="function"&&(a[Symbol.iterator]=function(){return this}),a;function u(e){return function(r){return s([e,r])}}function s(a){if(n)throw new TypeError("Generator is already executing.");while(t)try{if(n=1,i&&(o=a[0]&2?i["return"]:a[0]?i["throw"]||((o=i["return"])&&o.call(i),0):i.next)&&!(o=o.call(i,a[1])).done)return o;if(i=0,o)a=[a[0]&2,o.value];switch(a[0]){case 0:case 1:o=a;break;case 4:t.label++;return{value:a[1],done:false};case 5:t.label++;i=a[1];a=[0];continue;case 7:a=t.ops.pop();t.trys.pop();continue;default:if(!(o=t.trys,o=o.length>0&&o[o.length-1])&&(a[0]===6||a[0]===2)){t=0;continue}if(a[0]===3&&(!o||a[1]>o[0]&&a[1]<o[3])){t.label=a[1];break}if(a[0]===6&&t.label<o[1]){t.label=o[1];o=a;break}if(o&&t.label<o[2]){t.label=o[2];t.ops.push(a);break}if(o[2])t.ops.pop();t.trys.pop();continue}a=r.call(e,t)}catch(e){a=[6,e];i=0}finally{n=o=0}if(a[0]&5)throw a[1];return{value:a[0]?a[1]:void 0,done:true}}};var __spreadArrays=this&&this.__spreadArrays||function(){for(var e=0,r=0,t=arguments.length;r<t;r++)e+=arguments[r].length;for(var n=Array(e),i=0,r=0;r<t;r++)for(var o=arguments[r],a=0,u=o.length;a<u;a++,i++)n[i]=o[a];return n};System.register(["./p-a34b76fe.system.js"],(function(e){"use strict";var r,t,n,i,o;return{setters:[function(e){r=e.r;t=e.c;n=e.h;i=e.H;o=e.g}],execute:function(){var a=":host{display:block}:host(.accordion-group-expand-inset) ::slotted(bkkr-accordion.accordion-expanding),:host(.accordion-group-expand-inset) ::slotted(bkkr-accordion.accordion-expanded){border-bottom:none}";var u=e("bkkr_accordion_group",function(){function e(e){r(this,e);this.bkkrChange=t(this,"bkkrChange",7);this.disabled=false;this.readonly=false;this.expand="accordion"}e.prototype.valueChanged=function(){var e=this,r=e.value,t=e.multiple;if(!t&&Array.isArray(r)){this.value=r[0]}else{this.bkkrChange.emit({value:this.value})}};e.prototype.disabledChanged=function(){return __awaiter(this,void 0,void 0,(function(){var e,r,t,n,i;return __generator(this,(function(o){switch(o.label){case 0:e=this.disabled;return[4,this.getAccordions()];case 1:r=o.sent();for(t=0,n=r;t<n.length;t++){i=n[t];i.disabled=e}return[2]}}))}))};e.prototype.readonlyChanged=function(){return __awaiter(this,void 0,void 0,(function(){var e,r,t,n,i;return __generator(this,(function(o){switch(o.label){case 0:e=this.readonly;return[4,this.getAccordions()];case 1:r=o.sent();for(t=0,n=r;t<n.length;t++){i=n[t];i.readonly=e}return[2]}}))}))};e.prototype.onKeydown=function(e){return __awaiter(this,void 0,void 0,(function(){var r,t,n,i,o,a;return __generator(this,(function(u){switch(u.label){case 0:r=document.activeElement;if(!r){return[2]}t=r.tagName==="BKKR-ACCORDION"?r:r.closest("bkkr-accordion");if(!t){return[2]}n=t.closest("bkkr-accordion-group");if(n!==this.el){return[2]}return[4,this.getAccordions()];case 1:i=u.sent();o=i.findIndex((function(e){return e===t}));if(o===-1){return[2]}e.preventDefault();if(e.key==="ArrowDown"){a=this.findNextAccordion(i,o)}else if(e.key==="ArrowUp"){a=this.findPreviousAccordion(i,o)}else if(e.key==="Home"){a=i[0]}else if(e.key==="End"){a=i[i.length-1]}if(a!==undefined&&a!==r){a.focus()}return[2]}}))}))};e.prototype.componentDidLoad=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(e){if(this.disabled){this.disabledChanged()}if(this.readonly){this.readonlyChanged()}return[2]}))}))};e.prototype.requestAccordionToggle=function(e,r){return __awaiter(this,void 0,void 0,(function(){var t,n,i,o,a,u,s,u;return __generator(this,(function(c){t=this,n=t.multiple,i=t.value,o=t.readonly,a=t.disabled;if(o||a){return[2]}if(r){if(n){u=i||[];s=u.find((function(r){return r===e}));if(s===undefined&&e!==undefined){this.value=__spreadArrays(u,[e])}}else{this.value=e}}else{if(n){u=i||[];this.value=u.filter((function(r){return r!==e}))}else{this.value=undefined}}return[2]}))}))};e.prototype.findNextAccordion=function(e,r){var t=e[r+1];if(t===undefined){return e[0]}return t};e.prototype.findPreviousAccordion=function(e,r){var t=e[r-1];if(t===undefined){return e[e.length-1]}return t};e.prototype.getAccordions=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(e){return[2,Array.from(this.el.querySelectorAll("bkkr-accordion"))]}))}))};e.prototype.render=function(){var e;var r=this,t=r.disabled,o=r.readonly,a=r.expand;return n(i,{class:(e={"accordion-group-disabled":t,"accordion-group-readonly":o},e["accordion-group-expand-"+a]=true,e),role:"presentation"},n("slot",null))};Object.defineProperty(e.prototype,"el",{get:function(){return o(this)},enumerable:false,configurable:true});Object.defineProperty(e,"watchers",{get:function(){return{value:["valueChanged"],disabled:["disabledChanged"],readonly:["readonlyChanged"]}},enumerable:false,configurable:true});return e}());u.style=a}}}));