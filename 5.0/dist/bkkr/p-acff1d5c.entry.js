import{j as t,r as i,h as n,H as s,g as o}from"./p-e501253c.js";import{s as e}from"./p-c50c697b.js";let r;const l=(t,i)=>(t||!i||a(i)||(t=i),h(t)&&(t=u(t)),h(t)&&""!==t.trim()?""!==t.replace(/[a-z]|-|\d/gi,"")?null:t:null),c=t=>h(t)&&(t=t.trim(),a(t))?t:null,a=t=>t.length>0&&/(\/|\.)/.test(t),h=t=>"string"==typeof t,u=t=>t.toLowerCase(),f=t=>{if(1===t.nodeType){if("script"===t.nodeName.toLowerCase())return!1;for(let i=0;i<t.attributes.length;i++){const n=t.attributes[i].value;if(h(n)&&0===n.toLowerCase().indexOf("on"))return!1}for(let i=0;i<t.childNodes.length;i++)if(!f(t.childNodes[i]))return!1}return!0},d=new Map,p=new Map,w=class{constructor(t){i(this,t),this.isVisible=!1,this.type="solid",this.lazy=!1,this.sanitize=!0}connectedCallback(){this.waitUntilVisible(this.el,"50px",(()=>{this.isVisible=!0,this.loadIcon()}))}disconnectedCallback(){this.io&&(this.io.disconnect(),this.io=void 0)}waitUntilVisible(t,i,n){if(this.lazy&&"undefined"!=typeof window&&window.IntersectionObserver){const s=this.io=new window.IntersectionObserver((t=>{t[0].isIntersecting&&(s.disconnect(),this.io=void 0,n())}),{rootMargin:i});s.observe(t)}else n()}loadIcon(){if(this.isVisible){const i=(i=>{let n=c(i.src);if(null!==n)return n;if(n=l(i.name,i.icon),null!==n)return((i,n="solid")=>(()=>{if("undefined"==typeof window)return new Map;if(!r){const t=window;t.Icons=t.Icons||{},r=t.Icons.map=t.Icons.map||new Map}return r})().get(i)||t(`assets/fontawesome/${n}/${i}.svg`))(n,i.type);if(i.icon){if(n=c(i.icon),null!==n)return n;if(n=c(i.icon),null!==n)return n}return null})(this);null!==i&&(d.has(i)?this.svgContent=d.get(i):((t,i)=>{let n=p.get(t);if(!n){if("undefined"==typeof fetch||"undefined"==typeof document)return d.set(t,""),Promise.resolve();n=fetch(t).then((n=>{if(n.ok)return n.text().then((n=>{void 0!==n&&!1!==i&&(n=(t=>{const i=document.createElement("div");i.innerHTML=t;for(let t=i.childNodes.length-1;t>=0;t--)"svg"!==i.childNodes[t].nodeName.toLowerCase()&&i.removeChild(i.childNodes[t]);const n=i.firstElementChild;if(n&&"svg"===n.nodeName.toLowerCase()){const t=n.getAttribute("class")||"";if(n.setAttribute("class",(t+" s-bkkr-icon").trim()),f(n))return i.innerHTML}return""})(n)),d.set(t,n||"")}));d.set(t,"")})),p.set(t,n)}return n})(i,this.sanitize).then((()=>this.svgContent=d.get(i))))}if(null===this.ariaLabel&&"true"!==this.ariaHidden){const t=l(this.name,this.icon);null!==t&&(this.ariaLabel=t.replace(/\-/g," "))}}render(){const{color:t,size:i}=this;return n(s,{role:"img",class:e(t,{[`icon-${i}`]:!!i})},n("div",this.svgContent?{class:"icon-inner",innerHTML:this.svgContent}:{class:"icon-inner"}))}static get assetsDirs(){return["assets"]}get el(){return o(this)}static get watchers(){return{name:["loadIcon"],src:["loadIcon"],icon:["loadIcon"]}}};w.style=":host{-webkit-box-sizing:content-box !important;box-sizing:content-box !important;display:inline-block;width:1em;height:1em;color:var(--color, currentColor);fill:var(--color, currentColor);contain:strict}.icon-inner,svg{display:block;width:100%;height:100%}:host(.icon-small){font-size:14px !important}:host(.icon-large){font-size:32px !important}:host(.bkkr-color){--color:var(--color-base)}";export{w as bkkr_icon}