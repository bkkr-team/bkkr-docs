/*!
 * (C) BKKR Framework https://bkkr-team.github.io/bkkr-docs/ - MIT License
 */
import{r as t,c as o,g as r}from"./p-fef964f0.js";import{c as n,m as e}from"./p-bf8dbf30.js";const s=t=>"/"+t.filter((t=>t.length>0)).join("/"),i=t=>{let o,r=[""];if(null!=t){const n=t.indexOf("?");n>-1&&(o=t.substr(n+1),t=t.substr(0,n)),r=t.split("/").map((t=>t.trim())).filter((t=>t.length>0)),0===r.length&&(r=[""])}return{segments:r,queryString:o}},a=async(t,o,r,e,s=!1,i)=>{try{const c=u(t);if(e>=o.length||!c)return s;await new Promise((t=>n(c,t)));const h=o[e],l=await c.setRouteId(h.id,h.params,r,i);return l.changed&&(r="root",s=!0),s=await a(l.element,o,r,e+1,s,i),l.markVisible&&await l.markVisible(),s}catch(t){return console.error(t),!1}},c=":not([no-router]) bkkr-nav, :not([no-router]) bkkr-tabs, :not([no-router]) bkkr-router-outlet",u=t=>{if(!t)return;if(t.matches(c))return t;const o=t.querySelector(c);return null!=o?o:void 0},h=(t,o)=>o.find((o=>((t,o)=>{const{from:r,to:n}=o;if(void 0===n)return!1;if(r.length>t.length)return!1;for(let o=0;o<r.length;o++){const n=r[o];if("*"===n)return!0;if(n!==t[o])return!1}return r.length===t.length})(t,o))),l=(t,o)=>{const r=Math.min(t.length,o.length);let n=0;for(;n<r&&t[n].toLowerCase()===o[n].id;n++);return n},f=(t,o)=>{const r=new k(t);let n,e=!1;for(let t=0;t<o.length;t++){const s=o[t].path;if(""===s[0])e=!0;else{for(const o of s){const e=r.next();if(":"===o[0]){if(""===e)return null;n=n||[],(n[t]||(n[t]={}))[o.slice(1)]=e}else if(e!==o)return null}e=!1}}return e&&e!==(""===r.next())?null:n?o.map(((t,o)=>({id:t.id,path:t.path,params:d(t.params,n[o]),beforeEnter:t.beforeEnter,beforeLeave:t.beforeLeave}))):o},d=(t,o)=>t||o?Object.assign(Object.assign({},t),o):void 0,w=(t,o)=>{let r=null,n=0;for(const e of o){const o=f(t,e);if(null!==o){const t=b(o);t>n&&(n=t,r=o)}}return r},b=t=>{let o=1,r=1;for(const n of t)for(const t of n.path)":"===t[0]?o+=Math.pow(1,r):""!==t&&(o+=Math.pow(2,r)),r++;return o};class k{constructor(t){this.path=t.slice()}next(){return this.path.length>0?this.path.shift():""}}const m=(t,o)=>o in t?t[o]:t.hasAttribute(o)?t.getAttribute(o):null,p=t=>Array.from(t.children).filter((t=>"BKKR-ROUTE-REDIRECT"===t.tagName)).map((t=>{const o=m(t,"to");return{from:i(m(t,"from")).segments,to:null==o?void 0:i(o)}})),y=t=>v(g(t)),g=t=>Array.from(t.children).filter((t=>"BKKR-ROUTE"===t.tagName&&t.component)).map((t=>{const o=m(t,"component");return{path:i(m(t,"url")).segments,id:o.toLowerCase(),params:t.componentProps,beforeLeave:t.beforeLeave,beforeEnter:t.beforeEnter,children:g(t)}})),v=t=>{const o=[];for(const r of t)R([],o,r);return o},R=(t,o,r)=>{if((t=t.slice()).push({id:r.id,path:r.path,params:r.params,beforeLeave:r.beforeLeave,beforeEnter:r.beforeEnter}),0!==r.children.length)for(const n of r.children)R(t,o,n);else o.push(t)};let C=class{constructor(r){t(this,r),this.bkkrRouteWillChange=o(this,"bkkrRouteWillChange",7),this.bkkrRouteDidChange=o(this,"bkkrRouteDidChange",7),this.previousPath=null,this.busy=!1,this.state=0,this.lastState=0,this.root="/",this.useHash=!0}async componentWillLoad(){await(u(document.body)?Promise.resolve():new Promise((t=>{window.addEventListener("bkkrNavWillLoad",t,{once:!0})})));const t=await this.runGuards(this.getPath());if(!0!==t){if("object"==typeof t){const{redirect:o}=t,r=i(o);this.setPath(r.segments,"root",r.queryString),await this.writeNavStateRoot(r.segments,"root")}}else await this.onRoutesChanged()}componentDidLoad(){window.addEventListener("bkkrRouteRedirectChanged",e(this.onRedirectChanged.bind(this),10)),window.addEventListener("bkkrRouteDataChanged",e(this.onRoutesChanged.bind(this),100))}async onPopState(){const t=this.historyDirection();let o=this.getPath();const r=await this.runGuards(o);if(!0!==r){if("object"!=typeof r)return!1;o=i(r.redirect).segments}return this.writeNavStateRoot(o,t)}onBackButton(t){t.detail.register(0,(t=>{this.back(),t()}))}async canTransition(){const t=await this.runGuards();return!0===t||"object"==typeof t&&t.redirect}async push(t,o="forward",r){t.startsWith(".")&&(t=new URL(t,window.location.href).pathname);let n=i(t);const e=await this.runGuards(n.segments);if(!0!==e){if("object"!=typeof e)return!1;n=i(e.redirect)}return this.setPath(n.segments,o,n.queryString),this.writeNavStateRoot(n.segments,o,r)}back(){return window.history.back(),Promise.resolve(this.waitPromise)}async printDebug(){(t=>{console.group(`[bkkr-core] ROUTES[${t.length}]`);for(const o of t){const t=[];o.forEach((o=>t.push(...o.path)));const r=o.map((t=>t.id));console.debug(`%c ${s(t)}`,"font-weight: bold; padding-left: 20px","=>\t",`(${r.join(", ")})`)}console.groupEnd()})(y(this.el)),(t=>{console.group(`[bkkr-core] REDIRECTS[${t.length}]`);for(const o of t)o.to&&console.debug("FROM: ",`$c ${s(o.from)}`,"font-weight: bold"," TO: ",`$c ${s(o.to.segments)}`,"font-weight: bold");console.groupEnd()})(p(this.el))}async navChanged(t){if(this.busy)return console.warn("[bkkr-router] router is busy, navChanged was cancelled"),!1;const{ids:o,outlet:r}=await(async()=>{const t=[];let o,r=window.document.body;for(;o=u(r),o;){const n=await o.getRouteId();if(!n)break;r=n.element,n.element=void 0,t.push(n)}return{ids:t,outlet:o}})(),n=((t,o)=>{let r=null,n=0;const e=t.map((t=>t.id));for(const t of o){const o=l(e,t);o>n&&(r=t,n=o)}return r?r.map(((o,r)=>({id:o.id,path:o.path,params:d(o.params,t[r]&&t[r].params)}))):null})(o,y(this.el));if(!n)return console.warn("[bkkr-router] no matching URL for ",o.map((t=>t.id))),!1;const e=(t=>{const o=[];for(const r of t)for(const t of r.path)if(":"===t[0]){const n=r.params&&r.params[t.slice(1)];if(!n)return null;o.push(n)}else""!==t&&o.push(t);return o})(n);return e?(this.setPath(e,t),await this.safeWriteNavState(r,n,"root",e,null,o.length),!0):(console.warn("[bkkr-router] router could not match path because some required param is missing"),!1)}onRedirectChanged(){const t=this.getPath();t&&h(t,p(this.el))&&this.writeNavStateRoot(t,"root")}onRoutesChanged(){return this.writeNavStateRoot(this.getPath(),"root")}historyDirection(){var t;const o=window;null===o.history.state&&(this.state++,o.history.replaceState(this.state,o.document.title,null===(t=o.document.location)||void 0===t?void 0:t.href));const r=o.history.state,n=this.lastState;return this.lastState=r,r>n||r>=n&&n>0?"forward":r<n?"back":"root"}async writeNavStateRoot(t,o,r){if(!t)return console.error("[bkkr-router] URL is not part of the routing set"),!1;const n=p(this.el),e=h(t,n);let s=null;if(e){const{segments:r,queryString:n}=e.to;this.setPath(r,o,n),s=e.from,t=r}const i=y(this.el),a=w(t,i);return a?this.safeWriteNavState(document.body,a,o,t,s,0,r):(console.error("[bkkr-router] the path does not match any route"),!1)}async safeWriteNavState(t,o,r,n,e,s=0,i){const a=await this.lock();let c=!1;try{c=await this.writeNavState(t,o,r,n,e,s,i)}catch(t){console.error(t)}return a(),c}async lock(){const t=this.waitPromise;let o;return this.waitPromise=new Promise((t=>o=t)),void 0!==t&&await t,o}async runGuards(t=this.getPath(),o){if(void 0===o&&(o=i(this.previousPath).segments),!t||!o)return!0;const r=y(this.el),n=w(o,r),e=n&&n[n.length-1].beforeLeave,s=!e||await e();if(!1===s||"object"==typeof s)return s;const a=w(t,r),c=a&&a[a.length-1].beforeEnter;return!c||c()}async writeNavState(t,o,r,n,e,s=0,i){if(this.busy)return console.warn("[bkkr-router] router is busy, transition was cancelled"),!1;this.busy=!0;const c=this.routeChangeEvent(n,e);c&&this.bkkrRouteWillChange.emit(c);const u=await a(t,o,r,s,!1,i);return this.busy=!1,c&&this.bkkrRouteDidChange.emit(c),u}setPath(t,o,r){this.state++,((t,o,r,n,e,a,c)=>{const u=((t,o,r)=>{let n=s(t);return o&&(n="#"+n),void 0!==r&&(n+="?"+r),n})([...i(o).segments,...n],r,c);"forward"===e?t.pushState(a,"",u):t.replaceState(a,"",u)})(window.history,this.root,this.useHash,t,o,this.state,r)}getPath(){return((t,o,r)=>{const n=i(this.root).segments,e=r?t.hash.slice(1):t.pathname;return((t,o)=>{if(t.length>o.length)return null;if(t.length<=1&&""===t[0])return o;for(let r=0;r<t.length;r++)if(t[r]!==o[r])return null;return o.length===t.length?[""]:o.slice(t.length)})(n,i(e).segments)})(window.location,0,this.useHash)}routeChangeEvent(t,o){const r=this.previousPath,n=s(t);return this.previousPath=n,n===r?null:{from:r,redirectedFrom:o?s(o):null,to:n}}get el(){return r(this)}};export{C as bkkr_router}