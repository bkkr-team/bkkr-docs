/*!
 * (C) BKKR Framework https://bkkr-team.github.io/bkkr-docs/ - MIT License
 */
import{r as t,c as r}from"./p-3b0af71a.js";let e=class{constructor(e){t(this,e),this.bkkrRouteRedirectChanged=r(this,"bkkrRouteRedirectChanged",7)}propDidChange(){this.bkkrRouteRedirectChanged.emit()}connectedCallback(){this.bkkrRouteRedirectChanged.emit()}static get watchers(){return{from:["propDidChange"],to:["propDidChange"]}}};export{e as bkkr_route_redirect}