var __awaiter=this&&this.__awaiter||function(e,t,r,o){function n(e){return e instanceof r?e:new r((function(t){t(e)}))}return new(r||(r=Promise))((function(r,i){function s(e){try{l(o.next(e))}catch(e){i(e)}}function a(e){try{l(o["throw"](e))}catch(e){i(e)}}function l(e){e.done?r(e.value):n(e.value).then(s,a)}l((o=o.apply(e,t||[])).next())}))};var __generator=this&&this.__generator||function(e,t){var r={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},o,n,i,s;return s={next:a(0),throw:a(1),return:a(2)},typeof Symbol==="function"&&(s[Symbol.iterator]=function(){return this}),s;function a(e){return function(t){return l([e,t])}}function l(s){if(o)throw new TypeError("Generator is already executing.");while(r)try{if(o=1,n&&(i=s[0]&2?n["return"]:s[0]?n["throw"]||((i=n["return"])&&i.call(n),0):n.next)&&!(i=i.call(n,s[1])).done)return i;if(n=0,i)s=[s[0]&2,i.value];switch(s[0]){case 0:case 1:i=s;break;case 4:r.label++;return{value:s[1],done:false};case 5:r.label++;n=s[1];s=[0];continue;case 7:s=r.ops.pop();r.trys.pop();continue;default:if(!(i=r.trys,i=i.length>0&&i[i.length-1])&&(s[0]===6||s[0]===2)){r=0;continue}if(s[0]===3&&(!i||s[1]>i[0]&&s[1]<i[3])){r.label=s[1];break}if(s[0]===6&&r.label<i[1]){r.label=i[1];i=s;break}if(i&&r.label<i[2]){r.label=i[2];r.ops.push(s);break}if(i[2])r.ops.pop();r.trys.pop();continue}s=t.call(e,r)}catch(e){s=[6,e];n=0}finally{o=i=0}if(s[0]&5)throw s[1];return{value:s[0]?s[1]:void 0,done:true}}};System.register(["./p-3fd5d37b.system.js"],(function(e,t){"use strict";var r,o,n,i,s;return{setters:[function(e){r=e.r;o=e.c;n=e.h;i=e.g;s=e.H}],execute:function(){var a=".reorder-enabled{--opacity-selected:0.91;--box-shadow-selected:0 3px 5px 0 rgba(var(--box-shadow-color, 0, 0, 0), 0.1), 0 6px 10px 0 rgba(var(--box-shadow-color, 0, 0, 0), 0.12), 0 1.2px 20px 0 rgba(var(--box-shadow-color, 0, 0, 0), 0.08);--background-selected:var(--bkkr-item-background, var(--bkkr-background-color, #fff));-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.reorder-enabled bkkr-reorder{display:block;cursor:-webkit-grab;cursor:grab;pointer-events:all;-ms-touch-action:none;touch-action:none}.reorder-selected,.reorder-selected bkkr-reorder{cursor:-webkit-grabbing;cursor:grabbing}.reorder-selected{--background:var(--background-selected);position:relative;-webkit-transition:-webkit-box-shadow 0.3s cubic-bezier(0.32, 0.72, 0, 1) !important;transition:-webkit-box-shadow 0.3s cubic-bezier(0.32, 0.72, 0, 1) !important;transition:box-shadow 0.3s cubic-bezier(0.32, 0.72, 0, 1) !important;transition:box-shadow 0.3s cubic-bezier(0.32, 0.72, 0, 1), -webkit-box-shadow 0.3s cubic-bezier(0.32, 0.72, 0, 1) !important;-webkit-box-shadow:var(--box-shadow-selected);box-shadow:var(--box-shadow-selected);opacity:var(--opacity-selected);z-index:100}.reorder-visible bkkr-reorder .reorder-icon{-webkit-transform:translate3d(0,  0,  0);transform:translate3d(0,  0,  0)}.reorder-list-active>*{-webkit-transition:-webkit-transform 0.3s cubic-bezier(0.32, 0.72, 0, 1);transition:-webkit-transform 0.3s cubic-bezier(0.32, 0.72, 0, 1);transition:transform 0.3s cubic-bezier(0.32, 0.72, 0, 1);transition:transform 0.3s cubic-bezier(0.32, 0.72, 0, 1), -webkit-transform 0.3s cubic-bezier(0.32, 0.72, 0, 1);will-change:transform}";var l=e("bkkr_reorder_group",function(){function e(e){r(this,e);this.bkkrItemReorder=o(this,"bkkrItemReorder",7);this.lastToIndex=-1;this.cachedHeights=[];this.scrollElTop=0;this.scrollElBottom=0;this.scrollElInitial=0;this.containerTop=0;this.containerBottom=0;this.state=0;this.disabled=true}e.prototype.disabledChanged=function(){if(this.gesture){this.gesture.enable(!this.disabled)}};e.prototype.connectedCallback=function(){return __awaiter(this,void 0,void 0,(function(){var e,r,o;var n=this;return __generator(this,(function(i){switch(i.label){case 0:e=this.el.closest("bkkr-content");if(!e)return[3,2];r=this;return[4,e.getScrollElement()];case 1:r.scrollEl=i.sent();i.label=2;case 2:o=this;return[4,t.import("./p-39b047c1.system.js")];case 3:o.gesture=i.sent().createGesture({el:this.el,gestureName:"reorder",gesturePriority:110,threshold:0,direction:"y",passive:false,canStart:function(e){return __awaiter(n,void 0,void 0,(function(){return __generator(this,(function(t){return[2,this.canStart(e)]}))}))},onStart:function(e){return n.onStart(e)},onMove:function(e){return n.onMove(e)},onEnd:function(){return n.onEnd()}});this.disabledChanged();return[2]}}))}))};e.prototype.disconnectedCallback=function(){this.onEnd();if(this.gesture){this.gesture.destroy();this.gesture=undefined}};e.prototype.complete=function(e){return Promise.resolve(this.completeSync(e))};e.prototype.canStart=function(e){if(this.selectedItemEl||this.state!==0){return false}var t=e.event.target;var r=t.closest("bkkr-reorder");if(!r){return false}var o=u(r,this.el);if(!o){return false}e.data=o;return true};e.prototype.onStart=function(e){e.event.preventDefault();var t=this.selectedItemEl=e.data;var r=this.cachedHeights;r.length=0;var o=this.el;var n=o.children;if(!n||n.length===0){return}var i=0;for(var s=0;s<n.length;s++){var a=n[s];i+=a.offsetHeight;r.push(i);a.$bkkrIndex=s}var l=o.getBoundingClientRect();this.containerTop=l.top;this.containerBottom=l.bottom;if(this.scrollEl){var u=this.scrollEl.getBoundingClientRect();this.scrollElInitial=this.scrollEl.scrollTop;this.scrollElTop=u.top+h;this.scrollElBottom=u.bottom-h}else{this.scrollElInitial=0;this.scrollElTop=0;this.scrollElBottom=0}this.lastToIndex=c(t);this.selectedItemHeight=t.offsetHeight;this.state=1;t.classList.add(f)};e.prototype.onMove=function(e){var t=this.selectedItemEl;if(!t){return}var r=this.autoscroll(e.currentY);var o=this.containerTop-r;var n=this.containerBottom-r;var i=Math.max(o,Math.min(e.currentY,n));var s=r+i-e.startY;var a=i-o;var l=this.itemIndexForTop(a);if(l!==this.lastToIndex){var u=c(t);this.lastToIndex=l;this.reorderMove(u,l)}t.style.transform="translateY("+s+"px)"};e.prototype.onEnd=function(){var e=this.selectedItemEl;this.state=2;if(!e){this.state=0;return}var t=this.lastToIndex;var r=c(e);if(t===r){this.completeSync()}else{this.bkkrItemReorder.emit({from:r,to:t,complete:this.completeSync.bind(this)})}};e.prototype.completeSync=function(e){var t=this.selectedItemEl;if(t&&this.state===2){var r=this.el.children;var o=r.length;var n=this.lastToIndex;var i=c(t);if(n!==i&&(e===undefined||e===true)){var s=i<n?r[n+1]:r[n];this.el.insertBefore(t,s)}if(Array.isArray(e)){e=b(e,i,n)}for(var a=0;a<o;a++){r[a].style["transform"]=""}t.style.transition="";t.classList.remove(f);this.selectedItemEl=undefined;this.state=0}return e};e.prototype.itemIndexForTop=function(e){var t=this.cachedHeights;for(var r=0;r<t.length;r++){if(t[r]>e){return r}}return t.length-1};e.prototype.reorderMove=function(e,t){var r=this.selectedItemHeight;var o=this.el.children;for(var n=0;n<o.length;n++){var i=o[n].style;var s="";if(n>e&&n<=t){s="translateY("+-r+"px)"}else if(n<e&&n>=t){s="translateY("+r+"px)"}i["transform"]=s}};e.prototype.autoscroll=function(e){if(!this.scrollEl){return 0}var t=0;if(e<this.scrollElTop){t=-d}else if(e>this.scrollElBottom){t=d}if(t!==0){this.scrollEl.scrollBy(0,t)}return this.scrollEl.scrollTop-this.scrollElInitial};e.prototype.render=function(){return n(s,{class:{"reorder-enabled":!this.disabled,"reorder-list-active":this.state!==0}})};Object.defineProperty(e.prototype,"el",{get:function(){return i(this)},enumerable:false,configurable:true});Object.defineProperty(e,"watchers",{get:function(){return{disabled:["disabledChanged"]}},enumerable:false,configurable:true});return e}());var c=function(e){return e["$bkkrIndex"]};var u=function(e,t){var r;while(e){r=e.parentElement;if(r===t){return e}e=r}return undefined};var h=60;var d=10;var f="reorder-selected";var b=function(e,t,r){var o=e[t];e.splice(t,1);e.splice(r,0,o);return e.slice()};l.style=a}}}));