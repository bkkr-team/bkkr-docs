import{r as t,c as o}from"./p-06605c80.js";const s=class{constructor(s){t(this,s),this.bkkrRouteDataChanged=o(this,"bkkrRouteDataChanged",7),this.url=""}onUpdate(t){this.bkkrRouteDataChanged.emit(t)}onComponentProps(t,o){if(t===o)return;const s=t?Object.keys(t):[],n=o?Object.keys(o):[];if(s.length===n.length){for(const n of s)if(t[n]!==o[n])return void this.onUpdate(t)}else this.onUpdate(t)}connectedCallback(){this.bkkrRouteDataChanged.emit()}static get watchers(){return{url:["onUpdate"],component:["onUpdate"],componentProps:["onComponentProps"]}}};export{s as bkkr_route}