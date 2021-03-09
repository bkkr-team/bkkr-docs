import{r as t,e as r,g as o}from"./p-8dfd188c.js";import{m as n}from"./p-1ab51d77.js";const e=async(t,r,o,n,s=!1,a)=>{try{const u=i(t);if(n>=r.length||!u)return s;await u.componentOnReady();const c=r[n],h=await u.setRouteId(c.id,c.params,o,a);return h.changed&&(o="root",s=!0),s=await e(h.element,r,o,n+1,s,a),h.markVisible&&await h.markVisible(),s}catch(t){return console.error(t),!1}},s=":not([no-router]) bkkr-nav, :not([no-router]) bkkr-tabs, :not([no-router]) bkkr-router-outlet",i=t=>{if(!t)return;if(t.matches(s))return t;return t.querySelector(s)||void 0},a=(t,r)=>r.find((r=>((t,r)=>{const{from:o,to:n}=r;if(void 0===n)return!1;if(o.length>t.length)return!1;for(let r=0;r<o.length;r++){const n=o[r];if("*"===n)return!0;if(n!==t[r])return!1}return o.length===t.length})(t,r))),u=(t,r)=>{const o=Math.min(t.length,r.length);let n=0;for(;n<o&&t[n].toLowerCase()===r[n].id;n++);return n},c=(t,r)=>{const o=new d(t);let n,e=!1;for(let t=0;t<r.length;t++){const s=r[t].path;if(""===s[0])e=!0;else{for(const r of s){const e=o.next();if(":"===r[0]){if(""===e)return null;n=n||[],(n[t]||(n[t]={}))[r.slice(1)]=e}else if(e!==r)return null}e=!1}}return e&&e!==(""===o.next())?null:n?r.map(((t,r)=>({id:t.id,path:t.path,params:h(t.params,n[r])}))):r},h=(t,r)=>!t&&r?r:t&&!r?t:t&&r?Object.assign(Object.assign({},t),r):void 0,l=(t,r)=>{let o=null,n=0;for(const e of r){const r=c(t,e);if(null!==r){const t=f(r);t>n&&(n=t,o=r)}}return o},f=t=>{let r=1,o=1;for(const n of t)for(const t of n.path)":"===t[0]?r+=Math.pow(1,o):""!==t&&(r+=Math.pow(2,o)),o++;return r};class d{constructor(t){this.path=t.slice()}next(){return this.path.length>0?this.path.shift():""}}const w=t=>"/"+t.filter((t=>t.length>0)).join("/"),k=t=>{if(null==t)return[""];const r=t.split("?")[0].split("/").map((t=>t.trim())).filter((t=>t.length>0));return 0===r.length?[""]:r},b=t=>Array.from(t.children).filter((t=>"BKKR-ROUTE-REDIRECT"===t.tagName)).map((t=>{const r=y(t,"to");return{from:k(y(t,"from")),to:null==r?void 0:k(r)}})),p=t=>R(m(t)),m=(t,r=t)=>Array.from(r.children).filter((t=>"BKKR-ROUTE"===t.tagName&&t.component)).map((r=>{const o=y(r,"component");if(null==o)throw new Error("component missing in bkkr-route");return{path:k(y(r,"url")),id:o.toLowerCase(),params:r.componentProps,beforeLeave:r.beforeLeave,beforeEnter:r.beforeEnter,children:m(t,r)}})),y=(t,r)=>r in t?t[r]:t.hasAttribute(r)?t.getAttribute(r):null,R=t=>{const r=[];for(const o of t)g([],r,o);return r},g=(t,r,o)=>{const n=t.slice();if(n.push({id:o.id,path:o.path,params:o.params,beforeLeave:o.beforeLeave,beforeEnter:o.beforeEnter}),0!==o.children.length)for(const t of o.children)g(n,r,t);else r.push(n)},v=class{constructor(o){t(this,o),this.bkkrRouteWillChange=r(this,"bkkrRouteWillChange",7),this.bkkrRouteDidChange=r(this,"bkkrRouteDidChange",7),this.previousPath=null,this.busy=!1,this.state=0,this.lastState=0,this.root="/",this.useHash=!0}async componentWillLoad(){console.debug("[bkkr-router] router will load"),await(i(document.body)?Promise.resolve():new Promise((t=>{window.addEventListener("bkkrNavWillLoad",t,{once:!0})}))),console.debug("[bkkr-router] found nav"),await this.onRoutesChanged()}componentDidLoad(){window.addEventListener("bkkrRouteRedirectChanged",n(this.onRedirectChanged.bind(this),10)),window.addEventListener("bkkrRouteDataChanged",n(this.onRoutesChanged.bind(this),100))}async onPopState(){const t=this.historyDirection();let r=this.getPath();const o=await this.runGuards(r);return!0!==o?("object"==typeof o&&(r=k(o.redirect)),!1):(console.debug("[bkkr-router] URL changed -> update nav",r,t),this.writeNavStateRoot(r,t))}async canTransition(){const t=await this.runGuards();return!0===t||"object"==typeof t&&t.redirect}async push(t,r="forward",o){t.startsWith(".")&&(t=new URL(t,window.location.href).pathname),console.debug("[bkkr-router] URL pushed -> updating nav",t,r);let n=k(t),e=t.split("?")[1];const s=await this.runGuards(n);if(!0!==s){if("object"!=typeof s)return!1;n=k(s.redirect),e=s.redirect.split("?")[1]}return this.setPath(n,r,e),this.writeNavStateRoot(n,r,o)}back(){return window.history.back(),Promise.resolve(this.waitPromise)}async printDebug(){console.debug("CURRENT PATH",this.getPath()),console.debug("PREVIOUS PATH",this.previousPath)}async navChanged(t){if(this.busy)return console.warn("[bkkr-router] router is busy, navChanged was cancelled"),!1;const{ids:r,outlet:o}=await(async()=>{const t=[];let r,o=window.document.body;for(;r=i(o),r;){const n=await r.getRouteId();if(!n)break;o=n.element,n.element=void 0,t.push(n)}return{ids:t,outlet:r}})(),n=((t,r)=>{let o=null,n=0;const e=t.map((t=>t.id));for(const t of r){const r=u(e,t);r>n&&(o=t,n=r)}return o?o.map(((r,o)=>({id:r.id,path:r.path,params:h(r.params,t[o]&&t[o].params)}))):null})(r,p(this.el));if(!n)return console.warn("[bkkr-router] no matching URL for ",r.map((t=>t.id))),!1;const e=(t=>{const r=[];for(const o of t)for(const t of o.path)if(":"===t[0]){const n=o.params&&o.params[t.slice(1)];if(!n)return null;r.push(n)}else""!==t&&r.push(t);return r})(n);return e?(console.debug("[bkkr-router] nav changed -> update URL",r,e),this.setPath(e,t),await this.safeWriteNavState(o,n,"root",e,null,r.length),!0):(console.warn("[bkkr-router] router could not match path because some required param is missing"),!1)}onRedirectChanged(){const t=this.getPath();t&&a(t,b(this.el))&&this.writeNavStateRoot(t,"root")}onRoutesChanged(){return this.writeNavStateRoot(this.getPath(),"root")}historyDirection(){const t=window;null===t.history.state&&(this.state++,t.history.replaceState(this.state,t.document.title,t.document.location&&t.document.location.href));const r=t.history.state,o=this.lastState;return this.lastState=r,r>o||r>=o&&o>0?"forward":r<o?"back":"root"}async writeNavStateRoot(t,r,o){if(!t)return console.error("[bkkr-router] URL is not part of the routing set"),!1;const n=b(this.el),e=a(t,n);let s=null;e&&(this.setPath(e.to,r),s=e.from,t=e.to);const i=p(this.el),u=l(t,i);return u?this.safeWriteNavState(document.body,u,r,t,s,0,o):(console.error("[bkkr-router] the path does not match any route"),!1)}async safeWriteNavState(t,r,o,n,e,s=0,i){const a=await this.lock();let u=!1;try{u=await this.writeNavState(t,r,o,n,e,s,i)}catch(t){console.error(t)}return a(),u}async lock(){const t=this.waitPromise;let r;return this.waitPromise=new Promise((t=>r=t)),void 0!==t&&await t,r}async runGuards(t=this.getPath(),r=k(this.previousPath)){if(!t||!r)return!0;const o=p(this.el),n=l(t,o),e=l(r,o),s=n&&n[n.length-1].beforeEnter,i=e&&e[e.length-1].beforeLeave,a=!i||await i();if(!1===a||"object"==typeof a)return a;const u=!s||await s();return!1!==u&&"object"!=typeof u||u}async writeNavState(t,r,o,n,s,i=0,a){if(this.busy)return console.warn("[bkkr-router] router is busy, transition was cancelled"),!1;this.busy=!0;const u=this.routeChangeEvent(n,s);u&&this.bkkrRouteWillChange.emit(u);const c=await e(t,r,o,i,!1,a);return this.busy=!1,c&&console.debug("[bkkr-router] route changed",n),u&&this.bkkrRouteDidChange.emit(u),c}setPath(t,r,o){this.state++,((t,r,o,n,e,s,i)=>{let a=w([...k(this.root),...n]);o&&(a="#"+a),void 0!==i&&(a=a+"?"+i),"forward"===e?t.pushState(s,"",a):t.replaceState(s,"",a)})(window.history,0,this.useHash,t,r,this.state,o)}getPath(){return((t,r)=>{let o=t.pathname;if(this.useHash){const r=t.hash;o="#"===r[0]?r.slice(1):""}return((t,r)=>{if(t.length>r.length)return null;if(t.length<=1&&""===t[0])return r;for(let o=0;o<t.length;o++)if(t[o].length>0&&t[o]!==r[o])return null;return r.length===t.length?[""]:r.slice(t.length)})(k(r),k(o))})(window.location,this.root)}routeChangeEvent(t,r){const o=this.previousPath,n=w(t);return this.previousPath=n,n===o?null:{from:o,redirectedFrom:r?w(r):null,to:n}}get el(){return o(this)}};export{v as bkkr_router}