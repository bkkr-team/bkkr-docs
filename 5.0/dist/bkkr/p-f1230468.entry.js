import{r as t,h as a,H as e,g as s}from"./p-856de026.js";import{a as i}from"./p-fe612af3.js";import"./p-c2089e63.js";const r=class{constructor(a){t(this,a),this.loaded=!1,this.active=!1}async componentWillLoad(){this.active&&await this.setActive()}async setActive(){await this.prepareLazyLoaded(),this.active=!0}changeActive(t){t&&this.prepareLazyLoaded()}prepareLazyLoaded(){if(!this.loaded&&null!=this.component){this.loaded=!0;try{return i(this.delegate,this.el,this.component,["bkkr-page"])}catch(t){console.error(t)}}return Promise.resolve(void 0)}render(){const{tab:t,active:s,component:i}=this;return a(e,{role:"tabpanel","aria-hidden":s?null:"true","aria-labelledby":`nav-button-${t}`,class:{"bkkr-page":void 0===i,"tab-hidden":!s}},a("slot",null))}get el(){return s(this)}static get watchers(){return{active:["changeActive"]}}};r.style=":host(.tab-hidden){display:none !important}";export{r as bkkr_tab}