import{r as t,c as i,h as s,H as o,g as e}from"./p-30285648.js";const h=class{constructor(s){t(this,s),this.bkkrImgWillLoad=i(this,"bkkrImgWillLoad",7),this.bkkrImgDidLoad=i(this,"bkkrImgDidLoad",7),this.bkkrError=i(this,"bkkrError",7),this.locked=!0,this.onLoad=()=>{this.bkkrImgDidLoad.emit()},this.onError=()=>{this.bkkrError.emit()}}srcChanged(){this.addIO()}componentDidLoad(){this.addIO()}addIO(){void 0!==this.src&&("undefined"!=typeof window&&"IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"isIntersecting"in window.IntersectionObserverEntry.prototype?(this.removeIO(),this.io=new IntersectionObserver((t=>{t[t.length-1].isIntersecting&&(this.load(),this.removeIO())})),this.io.observe(this.el)):setTimeout((()=>this.load()),200))}load(){this.loadError=this.onError,this.loadSrc=this.src,this.bkkrImgWillLoad.emit()}removeIO(){this.io&&(this.io.disconnect(),this.io=void 0)}render(){return s(o,{class:{"img-locked":this.locked}},s("img",{decoding:"async",src:this.loadSrc,alt:this.alt,onLoad:this.onLoad,onError:this.loadError,part:"image"}))}get el(){return e(this)}static get watchers(){return{src:["srcChanged"]}}};h.style=':host{display:block;-o-object-fit:contain;object-fit:contain}img{display:block;width:100%;height:100%;-o-object-fit:inherit;object-fit:inherit;-o-object-position:inherit;object-position:inherit}:host(.img-locked){position:relative}:host(.img-locked):before{top:0;right:0;bottom:0;left:0;position:absolute;content:"";z-index:10}';export{h as bkkr_img}