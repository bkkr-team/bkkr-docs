System.register(["./p-90bb25f5.system.js"],(function(t){"use strict";var i,r,e,o,n;return{setters:[function(t){i=t.r;r=t.e;e=t.h;o=t.H;n=t.g}],execute:function(){var s=".img,:host{border-radius:calc(var(--border-radius) - var(--padding-top));display:block;-o-object-fit:contain;object-fit:contain;overflow:hidden}img{display:block;width:100%;height:100%;-o-object-fit:inherit;object-fit:inherit;-o-object-position:inherit;object-position:inherit}";var d=t("bkkr_img",function(){function t(t){var e=this;i(this,t);this.bkkrImgWillLoad=r(this,"bkkrImgWillLoad",7);this.bkkrImgDidLoad=r(this,"bkkrImgDidLoad",7);this.bkkrError=r(this,"bkkrError",7);this.onLoad=function(){e.bkkrImgDidLoad.emit()};this.onError=function(){e.bkkrError.emit()}}t.prototype.srcChanged=function(){this.addIO()};t.prototype.componentDidLoad=function(){this.addIO()};t.prototype.addIO=function(){var t=this;if(this.src===undefined){return}if(typeof window!=="undefined"&&"IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"isIntersecting"in window.IntersectionObserverEntry.prototype){this.removeIO();this.io=new IntersectionObserver((function(i){if(i[0].isIntersecting){t.load();t.removeIO()}}));this.io.observe(this.el)}else{setTimeout((function(){return t.load()}),200)}};t.prototype.load=function(){this.loadError=this.onError;this.loadSrc=this.src;this.bkkrImgWillLoad.emit()};t.prototype.removeIO=function(){if(this.io){this.io.disconnect();this.io=undefined}};t.prototype.render=function(){return e(o,null,e("img",{decoding:"async",src:this.loadSrc,alt:this.alt,onLoad:this.onLoad,onError:this.loadError,part:"image"}))};Object.defineProperty(t.prototype,"el",{get:function(){return n(this)},enumerable:false,configurable:true});Object.defineProperty(t,"watchers",{get:function(){return{src:["srcChanged"]}},enumerable:false,configurable:true});return t}());d.style=s}}}));