import{r as o,c as r,h as t,H as s,g as c}from"./p-a3958a94.js";import{s as l}from"./p-c50c697b.js";const a=class{constructor(t){o(this,t),this.bkkrColor=r(this,"bkkrColor",7)}componentWillLoad(){this.emitColor()}componentDidLoad(){}colorChanged(){this.emitColor()}emitColor(){const{color:o}=this;this.bkkrColor.emit({[`color-${o}`]:void 0!==o})}render(){const{color:o}=this;return t(s,{class:l(o)},t("slot",null))}get el(){return c(this)}static get watchers(){return{color:["colorChanged"]}}};a.style=":host{display:block;color:var(--color);font-family:var(--bkkr-font-family);font-size:80%;font-weight:400;line-height:1.2;contain:content;vertical-align:baseline}:host(.bkkr-color){--color:var(--color-base, var(--color-primary, #3880ff))}";export{a as bkkr_note}