var __awaiter=this&&this.__awaiter||function(e,t,r,n){function i(e){return e instanceof r?e:new r((function(t){t(e)}))}return new(r||(r=Promise))((function(r,a){function o(e){try{u(n.next(e))}catch(e){a(e)}}function l(e){try{u(n["throw"](e))}catch(e){a(e)}}function u(e){e.done?r(e.value):i(e.value).then(o,l)}u((n=n.apply(e,t||[])).next())}))};var __generator=this&&this.__generator||function(e,t){var r={label:0,sent:function(){if(a[0]&1)throw a[1];return a[1]},trys:[],ops:[]},n,i,a,o;return o={next:l(0),throw:l(1),return:l(2)},typeof Symbol==="function"&&(o[Symbol.iterator]=function(){return this}),o;function l(e){return function(t){return u([e,t])}}function u(o){if(n)throw new TypeError("Generator is already executing.");while(r)try{if(n=1,i&&(a=o[0]&2?i["return"]:o[0]?i["throw"]||((a=i["return"])&&a.call(i),0):i.next)&&!(a=a.call(i,o[1])).done)return a;if(i=0,a)o=[o[0]&2,a.value];switch(o[0]){case 0:case 1:a=o;break;case 4:r.label++;return{value:o[1],done:false};case 5:r.label++;i=o[1];o=[0];continue;case 7:o=r.ops.pop();r.trys.pop();continue;default:if(!(a=r.trys,a=a.length>0&&a[a.length-1])&&(o[0]===6||o[0]===2)){r=0;continue}if(o[0]===3&&(!a||o[1]>a[0]&&o[1]<a[3])){r.label=o[1];break}if(o[0]===6&&r.label<a[1]){r.label=a[1];a=o;break}if(a&&r.label<a[2]){r.label=a[2];r.ops.push(o);break}if(a[2])r.ops.pop();r.trys.pop();continue}o=t.call(e,r)}catch(e){o=[6,e];i=0}finally{n=a=0}if(o[0]&5)throw o[1];return{value:o[0]?o[1]:void 0,done:true}}};System.register(["./p-b25c886d.system.js"],(function(e){"use strict";var t,r,n,i,a;return{setters:[function(e){t=e.r;r=e.e;n=e.h;i=e.g;a=e.H}],execute:function(){var o=e("bkkr_radio_group",function(){function e(e){var n=this;t(this,e);this.bkkrChange=r(this,"bkkrChange",7);this.inputId="bkkr-rg-"+l++;this.labelId=this.inputId+"-lbl";this.allowEmptySelection=true;this.name=this.inputId;this.setRadioTabindex=function(e){var t=n.getRadios();var r=t.find((function(e){return!e.disabled}));var i=t.find((function(t){return t.value===e&&!t.disabled}));if(!r&&!i){return}var a=i||r;for(var o=0,l=t;o<l.length;o++){var u=l[o];var s=u===a?0:-1;u.setButtonTabindex(s)}};this.onClick=function(e){e.preventDefault();var t=e.target&&e.target.closest("bkkr-radio");if(t){var r=n.value;var i=t.value;if(i!==r){n.value=i}else if(n.allowEmptySelection){n.value=undefined}}}}e.prototype.valueChanged=function(e){this.setRadioTabindex(e);this.bkkrChange.emit({value:e})};e.prototype.componentDidLoad=function(){this.setRadioTabindex(this.value)};e.prototype.connectedCallback=function(){return __awaiter(this,void 0,void 0,(function(){var e,t;return __generator(this,(function(r){e=this.el.querySelector("bkkr-list-header")||this.el.querySelector("bkkr-item-divider");if(e){t=this.label=e.querySelector("bkkr-label");if(t){this.labelId=t.id=this.name+"-lbl"}}return[2]}))}))};e.prototype.getRadios=function(){return Array.from(this.el.querySelectorAll("bkkr-radio"))};e.prototype.onKeydown=function(e){var t=!!this.el.closest("bkkr-select-popover");var r=!!this.el.closest("bkkr-select-drawer");if(e.target&&!this.el.contains(e.target)){return}var n=Array.from(this.el.querySelectorAll("bkkr-radio")).filter((function(e){return!e.disabled}));if(e.target&&n.includes(e.target)){var i=n.findIndex((function(t){return t===e.target}));var a=n[i];var o=void 0;if(["ArrowDown","ArrowRight"].includes(e.code)){o=i===n.length-1?n[0]:n[i+1]}if(["ArrowUp","ArrowLeft"].includes(e.code)){o=i===0?n[n.length-1]:n[i-1]}if(o&&n.includes(o)){o.setFocus(e);if(!t||!r){this.value=o.value}}if(["Space"].includes(e.code)){this.value=a.value}}};e.prototype.render=function(){var e=this,t=e.label,r=e.labelId;return n(a,{role:"radiogroup","aria-labelledby":t?r:null,onClick:this.onClick})};Object.defineProperty(e.prototype,"el",{get:function(){return i(this)},enumerable:false,configurable:true});Object.defineProperty(e,"watchers",{get:function(){return{value:["valueChanged"]}},enumerable:false,configurable:true});return e}());var l=0}}}));