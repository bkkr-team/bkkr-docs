import{r as t,c as o}from"./p-856de026.js";const s=class{constructor(s){t(this,s),this.bkkrRouteDataChanged=o(this,"bkkrRouteDataChanged",7),this.url=""}onUpdate(t){this.bkkrRouteDataChanged.emit(t)}onComponentProps(t,o){if(t===o)return;const s=t?Object.keys(t):[],e=o?Object.keys(o):[];if(s.length===e.length){for(const e of s)if(t[e]!==o[e])return void this.onUpdate(t)}else this.onUpdate(t)}connectedCallback(){this.bkkrRouteDataChanged.emit()}static get watchers(){return{url:["onUpdate"],component:["onUpdate"],componentProps:["onComponentProps"]}}};export{s as bkkr_route}