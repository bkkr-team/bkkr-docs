var __awaiter=this&&this.__awaiter||function(e,n,t,r){function a(e){return e instanceof t?e:new t((function(n){n(e)}))}return new(t||(t=Promise))((function(t,i){function o(e){try{c(r.next(e))}catch(e){i(e)}}function u(e){try{c(r["throw"](e))}catch(e){i(e)}}function c(e){e.done?t(e.value):a(e.value).then(o,u)}c((r=r.apply(e,n||[])).next())}))};var __generator=this&&this.__generator||function(e,n){var t={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},r,a,i,o;return o={next:u(0),throw:u(1),return:u(2)},typeof Symbol==="function"&&(o[Symbol.iterator]=function(){return this}),o;function u(e){return function(n){return c([e,n])}}function c(o){if(r)throw new TypeError("Generator is already executing.");while(t)try{if(r=1,a&&(i=o[0]&2?a["return"]:o[0]?a["throw"]||((i=a["return"])&&i.call(a),0):a.next)&&!(i=i.call(a,o[1])).done)return i;if(a=0,i)o=[o[0]&2,i.value];switch(o[0]){case 0:case 1:i=o;break;case 4:t.label++;return{value:o[1],done:false};case 5:t.label++;a=o[1];o=[0];continue;case 7:o=t.ops.pop();t.trys.pop();continue;default:if(!(i=t.trys,i=i.length>0&&i[i.length-1])&&(o[0]===6||o[0]===2)){t=0;continue}if(o[0]===3&&(!i||o[1]>i[0]&&o[1]<i[3])){t.label=o[1];break}if(o[0]===6&&t.label<i[1]){t.label=i[1];i=o;break}if(i&&t.label<i[2]){t.label=i[2];t.ops.push(o);break}if(i[2])t.ops.pop();t.trys.pop();continue}o=n.call(e,t)}catch(e){o=[6,e];a=0}finally{r=i=0}if(o[0]&5)throw o[1];return{value:o[0]?o[1]:void 0,done:true}}};System.register([],(function(e){"use strict";return{execute:function(){var n=this;var t=e("d",(function(e){return __awaiter(n,void 0,void 0,(function(){var n,r;return __generator(this,(function(a){switch(a.label){case 0:n=e;if(!n)return[3,4];if(!(n.componentOnReady!=null))return[3,2];return[4,n.componentOnReady()];case 1:r=a.sent();if(r!=null){return[2]}a.label=2;case 2:return[4,Promise.all(Array.from(n.children).map(t))];case 3:a.sent();a.label=4;case 4:return[2]}}))}))}))}}}));