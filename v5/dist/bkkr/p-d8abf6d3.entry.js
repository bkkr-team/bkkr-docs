/*!
 * (C) BKKR Framework https://bkkr-team.github.io/bkkr-docs/ - MIT License
 */
import{r as t,h as a,H as s,g as e}from"./p-08349d90.js";import{a as i}from"./p-bc73b852.js";import"./p-7b48497a.js";let r=class{constructor(a){t(this,a),this.loaded=!1,this.active=!1}async componentWillLoad(){this.active&&await this.setActive()}async setActive(){await this.prepareLazyLoaded(),this.active=!0}changeActive(t){t&&this.prepareLazyLoaded()}prepareLazyLoaded(){if(!this.loaded&&null!=this.component){this.loaded=!0;try{return i(this.delegate,this.el,this.component,["bkkr-page"])}catch(t){console.error(t)}}return Promise.resolve(void 0)}render(){const{tab:t,active:e,component:i}=this;return a(s,{role:"tabpanel","aria-hidden":e?null:"true","aria-labelledby":`nav-button-${t}`,class:{"bkkr-page":void 0===i,"tab-hidden":!e}},a("slot",null))}get el(){return e(this)}static get watchers(){return{active:["changeActive"]}}};r.style=":host(.tab-hidden){display:none !important}";export{r as bkkr_tab}