/*!
 * (C) BKKR Framework https://bkkr-team.github.io/bkkr-docs/ - MIT License
 */
import{r as o,c as r,h as t,H as s,g as l}from"./p-24bb0787.js";import{s as c}from"./p-18201c80.js";let i=class{constructor(t){o(this,t),this.bkkrColor=r(this,"bkkrColor",7)}componentWillLoad(){this.emitColor()}componentDidLoad(){}colorChanged(){this.emitColor()}emitColor(){const{color:o}=this;this.bkkrColor.emit({[`color-${o}`]:void 0!==o})}render(){const{color:o}=this;return t(s,{class:c(o)},t("slot",null))}get el(){return l(this)}static get watchers(){return{color:["colorChanged"]}}};i.style=":host{display:block;color:var(--color);font-family:var(--bkkr-font-family);font-size:80%;font-weight:400;line-height:1.2;contain:content;vertical-align:baseline}:host(.bkkr-color){--color:var(--color-base, var(--color-primary, #3880ff))}";export{i as bkkr_note}