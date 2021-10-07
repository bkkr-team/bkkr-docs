import{r as t,c as r,h as e,g as s,H as i}from"./p-900e5a2b.js";import{c as o}from"./p-d56ecf06.js";const n=class{constructor(e){t(this,e),this.bkkrItemReorder=r(this,"bkkrItemReorder",7),this.lastToIndex=-1,this.cachedHeights=[],this.scrollElTop=0,this.scrollElBottom=0,this.scrollElInitial=0,this.containerTop=0,this.containerBottom=0,this.state=0,this.disabled=!0}disabledChanged(){this.gesture&&this.gesture.enable(!this.disabled)}async connectedCallback(){const t=this.el.closest("bkkr-content");t&&(await new Promise((r=>o(t,r))),this.scrollEl=await t.getScrollElement()),this.gesture=(await __sc_import_bkkr("./p-947c14e3.js")).createGesture({el:this.el,gestureName:"reorder",gesturePriority:110,threshold:0,direction:"y",passive:!1,canStart:async t=>this.canStart(t),onStart:t=>this.onStart(t),onMove:t=>this.onMove(t),onEnd:()=>this.onEnd()}),this.disabledChanged()}disconnectedCallback(){this.onEnd(),this.gesture&&(this.gesture.destroy(),this.gesture=void 0)}complete(t){return Promise.resolve(this.completeSync(t))}canStart(t){if(this.selectedItemEl||0!==this.state)return!1;const r=t.event.target.closest("bkkr-reorder");if(!r)return!1;const e=c(r,this.el);return!!e&&(t.data=e,!0)}onStart(t){t.event.preventDefault();const r=this.selectedItemEl=t.data,e=this.cachedHeights;e.length=0;const s=this.el,i=s.children;if(!i||0===i.length)return;let o=0;for(let t=0;t<i.length;t++){const r=i[t];o+=r.offsetHeight,e.push(o),r.$bkkrIndex=t}const n=s.getBoundingClientRect();if(this.containerTop=n.top,this.containerBottom=n.bottom,this.scrollEl){const t=this.scrollEl.getBoundingClientRect();this.scrollElInitial=this.scrollEl.scrollTop,this.scrollElTop=t.top+h,this.scrollElBottom=t.bottom-h}else this.scrollElInitial=0,this.scrollElTop=0,this.scrollElBottom=0;this.lastToIndex=a(r),this.selectedItemHeight=r.offsetHeight,this.state=1,r.classList.add(d)}onMove(t){const r=this.selectedItemEl;if(!r)return;const e=this.autoscroll(t.currentY),s=this.containerTop-e,i=Math.max(s,Math.min(t.currentY,this.containerBottom-e)),o=e+i-t.startY,n=this.itemIndexForTop(i-s);if(n!==this.lastToIndex){const t=a(r);this.lastToIndex=n,this.reorderMove(t,n)}r.style.transform=`translateY(${o}px)`}onEnd(){const t=this.selectedItemEl;if(this.state=2,!t)return void(this.state=0);const r=this.lastToIndex,e=a(t);r===e?this.completeSync():this.bkkrItemReorder.emit({from:e,to:r,complete:this.completeSync.bind(this)})}completeSync(t){const r=this.selectedItemEl;if(r&&2===this.state){const e=this.el.children,s=e.length,i=this.lastToIndex,o=a(r);i===o||void 0!==t&&!0!==t||this.el.insertBefore(r,o<i?e[i+1]:e[i]),Array.isArray(t)&&(t=l(t,o,i));for(let t=0;t<s;t++)e[t].style.transform="";r.style.transition="",r.classList.remove(d),this.selectedItemEl=void 0,this.state=0}return t}itemIndexForTop(t){const r=this.cachedHeights;for(let e=0;e<r.length;e++)if(r[e]>t)return e;return r.length-1}reorderMove(t,r){const e=this.selectedItemHeight,s=this.el.children;for(let i=0;i<s.length;i++){let o="";i>t&&i<=r?o=`translateY(${-e}px)`:i<t&&i>=r&&(o=`translateY(${e}px)`),s[i].style.transform=o}}autoscroll(t){if(!this.scrollEl)return 0;let r=0;return t<this.scrollElTop?r=-b:t>this.scrollElBottom&&(r=b),0!==r&&this.scrollEl.scrollBy(0,r),this.scrollEl.scrollTop-this.scrollElInitial}render(){return e(i,{class:{"reorder-enabled":!this.disabled,"reorder-list-active":0!==this.state}})}get el(){return s(this)}static get watchers(){return{disabled:["disabledChanged"]}}},a=t=>t.$bkkrIndex,c=(t,r)=>{let e;for(;t;){if(e=t.parentElement,e===r)return t;t=e}},h=60,b=10,d="reorder-selected",l=(t,r,e)=>{const s=t[r];return t.splice(r,1),t.splice(e,0,s),t.slice()};n.style=".reorder-enabled{--opacity-selected:0.91;--box-shadow-selected:0 3px 5px 0 rgba(var(--box-shadow-color, 0, 0, 0), 0.1), 0 6px 10px 0 rgba(var(--box-shadow-color, 0, 0, 0), 0.12), 0 1.2px 20px 0 rgba(var(--box-shadow-color, 0, 0, 0), 0.08);--background-selected:var(\n    --bkkr-item-background,\n    var(--bkkr-background-color, #fff)\n  );-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.reorder-enabled bkkr-reorder{display:block;cursor:-webkit-grab;cursor:grab;pointer-events:all;-ms-touch-action:none;touch-action:none}.reorder-selected,.reorder-selected bkkr-reorder{cursor:-webkit-grabbing;cursor:grabbing}.reorder-selected{--background:var(--background-selected);position:relative;-webkit-transition:-webkit-box-shadow 0.3s cubic-bezier(0.32, 0.72, 0, 1) !important;transition:-webkit-box-shadow 0.3s cubic-bezier(0.32, 0.72, 0, 1) !important;transition:box-shadow 0.3s cubic-bezier(0.32, 0.72, 0, 1) !important;transition:box-shadow 0.3s cubic-bezier(0.32, 0.72, 0, 1), -webkit-box-shadow 0.3s cubic-bezier(0.32, 0.72, 0, 1) !important;-webkit-box-shadow:var(--box-shadow-selected);box-shadow:var(--box-shadow-selected);opacity:var(--opacity-selected);z-index:100}.reorder-visible bkkr-reorder .reorder-icon{-webkit-transform:translate3d(0,  0,  0);transform:translate3d(0,  0,  0)}.reorder-list-active>*{-webkit-transition:-webkit-transform 0.3s cubic-bezier(0.32, 0.72, 0, 1);transition:-webkit-transform 0.3s cubic-bezier(0.32, 0.72, 0, 1);transition:transform 0.3s cubic-bezier(0.32, 0.72, 0, 1);transition:transform 0.3s cubic-bezier(0.32, 0.72, 0, 1), -webkit-transform 0.3s cubic-bezier(0.32, 0.72, 0, 1);will-change:transform}";export{n as bkkr_reorder_group}