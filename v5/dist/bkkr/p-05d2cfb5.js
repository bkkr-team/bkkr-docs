/*!
 * (C) BKKR Framework https://bkkr-team.github.io/bkkr-docs/ - MIT License
 */
const x={xs:"(min-width: 0px)",sm:"(min-width: 576px)",md:"(min-width: 768px)",lg:"(min-width: 992px)",xl:"(min-width: 1200px)",xll:"(min-width: 1400px)"},i={xs:"0px",sm:"576px",md:"768px",lg:"992px",xl:"1200px",xll:"1400px"},p=i=>void 0===i||""===i||!!window.matchMedia&&window.matchMedia(x[i]).matches;export{i as B,p as m}