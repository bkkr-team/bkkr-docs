import{r as t,e as i,h as s,g as e}from"./p-8dfd188c.js";import"./p-ea7764d1.js";import"./p-9b065740.js";import{a,d as o}from"./p-04115f59.js";import{t as r}from"./p-c6950013.js";const n=class{constructor(s){t(this,s),this.bkkrNavWillLoad=i(this,"bkkrNavWillLoad",7),this.bkkrNavWillChange=i(this,"bkkrNavWillChange",3),this.bkkrNavDidChange=i(this,"bkkrNavDidChange",3),this.animated=!0}componentWillLoad(){this.bkkrNavWillLoad.emit()}disconnectedCallback(){this.gesture&&(this.gesture.destroy(),this.gesture=void 0)}async commit(t,i,s){const e=await this.lock();let a=!1;try{a=await this.transition(t,i,s)}catch(t){console.error(t)}return e(),a}async setRouteId(t,i,s){return{changed:await this.setRoot(t,i,{duration:"root"===s?0:void 0,direction:"back"===s?"back":"forward"}),element:this.activeEl}}async getRouteId(){const t=this.activeEl;return t?{id:t.tagName,element:t}:void 0}async setRoot(t,i,s){if(this.activeComponent===t)return!1;const e=this.activeEl,r=await a(this.delegate,this.el,t,["bkkr-page","bkkr-page-invisible"],i);return this.activeComponent=t,this.activeEl=r,await this.commit(r,e,s),await o(this.delegate,e),!0}async transition(t,i,s={}){if(i===t)return!1;this.bkkrNavWillChange.emit();const{el:e}=this,a=this.animated,o=this.animation||s.animationBuilder;return await r(Object.assign(Object.assign({animated:a,enteringEl:t,leavingEl:i,baseEl:e},s),{animationBuilder:o})),this.bkkrNavDidChange.emit(),!0}async lock(){const t=this.waitPromise;let i;return this.waitPromise=new Promise((t=>i=t)),void 0!==t&&await t,i}render(){return s("slot",null)}get el(){return e(this)}};n.style=":host{top:0;right:0;bottom:0;left:0;position:absolute;contain:layout size style;overflow:hidden;z-index:0}";export{n as bkkr_router_outlet}