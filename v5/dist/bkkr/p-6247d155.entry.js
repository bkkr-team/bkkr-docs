/*!
 * (C) BKKR Framework https://bkkr-team.github.io/bkkr-docs/ - MIT License
 */
import{r,h as o,H as t,g as i}from"./p-fef964f0.js";let n=class{constructor(o){r(this,o),this.animated=!1}render(){return o(t,{class:{"skeleton-animated":this.animated}},o("span",null," "))}get el(){return i(this)}};n.style=":host{--background:rgba(var(--background-rgb, var(--bkkr-text-color-rgb, 0, 0, 0)), 0.04);--border-radius:12px;border-radius:var(--border-radius, inherit);display:block;width:100%;height:inherit;margin-top:4px;margin-bottom:4px;background:var(--background);font-size:inherit;line-height:1;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;pointer-events:none}:host(.skeleton-animated){position:relative;background:-webkit-gradient(linear, left top, right top, color-stop(8%, rgba(var(--background-rgb, var(--bkkr-text-color-rgb, 0, 0, 0)), 0.04)), color-stop(18%, rgba(var(--background-rgb, var(--bkkr-text-color-rgb, 0, 0, 0)), 0.135)), color-stop(33%, rgba(var(--background-rgb, var(--bkkr-text-color-rgb, 0, 0, 0)), 0.04)));background:linear-gradient(to right, rgba(var(--background-rgb, var(--bkkr-text-color-rgb, 0, 0, 0)), 0.04) 8%, rgba(var(--background-rgb, var(--bkkr-text-color-rgb, 0, 0, 0)), 0.135) 18%, rgba(var(--background-rgb, var(--bkkr-text-color-rgb, 0, 0, 0)), 0.04) 33%);background-size:800px 104px;-webkit-animation-name:shimmer;animation-name:shimmer;-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-timing-function:linear;animation-timing-function:linear;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}@-webkit-keyframes shimmer{0%{background-position:-400px 0}100%{background-position:400px 0}}@keyframes shimmer{0%{background-position:-400px 0}100%{background-position:400px 0}}";export{n as bkkr_skeleton}