/*!
 * (C) BKKR Framework https://bkkr-team.github.io/bkkr-docs/ - MIT License
 */
import{r as t,c as o}from"./p-08349d90.js";let e=class{constructor(e){t(this,e),this.bkkrRouteDataChanged=o(this,"bkkrRouteDataChanged",7),this.url=""}onUpdate(t){this.bkkrRouteDataChanged.emit(t)}onComponentProps(t,o){if(t===o)return;const e=t?Object.keys(t):[],s=o?Object.keys(o):[];if(e.length===s.length){for(const s of e)if(t[s]!==o[s])return void this.onUpdate(t)}else this.onUpdate(t)}connectedCallback(){this.bkkrRouteDataChanged.emit()}static get watchers(){return{url:["onUpdate"],component:["onUpdate"],componentProps:["onComponentProps"]}}};export{e as bkkr_route}