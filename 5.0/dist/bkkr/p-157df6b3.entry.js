import{r as t,e as o,h as s,H as a}from"./p-8dbe4215.js";import{G as r}from"./p-fcb88322.js";const i=class{constructor(s){t(this,s),this.bkkrBackdropTap=o(this,"bkkrBackdropTap",7),this.blocker=r.createBlocker({disableScroll:!0}),this.visible=!0,this.tappable=this.visible,this.stopPropagation=!0}connectedCallback(){this.stopPropagation&&this.blocker.block()}disconnectedCallback(){this.blocker.unblock()}onMouseDown(t){this.emitTap(t)}emitTap(t){this.stopPropagation&&(t.preventDefault(),t.stopPropagation()),this.tappable&&this.bkkrBackdropTap.emit()}render(){return s(a,{tabindex:"-1",class:{"backdrop-hide":!this.visible,"backdrop-no-tappable":!this.tappable}})}};i.style=":host{top:0;right:0;bottom:0;left:0;display:block;position:absolute;-webkit-transform:translateZ(0);transform:translateZ(0);background-color:var(--bkkr-backdrop-color, #000);contain:strict;cursor:pointer;opacity:0;-ms-touch-action:none;touch-action:none;z-index:2}:host(.backdrop-hide){background:transparent}:host(.backdrop-no-tappable){cursor:auto}";export{i as bkkr_backdrop}