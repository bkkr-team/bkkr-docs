/*!
 * (C) BKKR Framework https://bkkr-team.github.io/bkkr-docs/ - MIT License
 */
const o=(o,r)=>null!==r.closest(o),r=(o,r)=>Object.assign("string"==typeof o&&o.length>0?{"bkkr-color":!0,[`color-${o}`]:!0}:{},r),s=o=>{const r={};return(o=>void 0!==o?(Array.isArray(o)?o:o.split(" ")).filter((o=>null!=o)).map((o=>o.trim())).filter((o=>""!==o)):[])(o).forEach((o=>r[o]=!0)),r};export{s as g,o as h,r as s}