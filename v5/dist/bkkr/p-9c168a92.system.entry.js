System.register(["./p-8bb9cfc3.system.js","./p-f3bd9b52.system.js"],(function(l){"use strict";var s,m,i,n,r;return{setters:[function(l){s=l.r;m=l.f;i=l.h;n=l.H},function(l){r=l.m}],execute:function(){var d=".grid,:host{--columns:12;display:grid;grid-template-columns:repeat(var(--columns), 1fr)}.grid-1{--columns:1}.grid-2{--columns:2}.grid-3{--columns:3}.grid-4{--columns:4}.grid-5{--columns:5}.grid-6{--columns:6}.grid-7{--columns:7}.grid-8{--columns:8}.grid-9{--columns:9}.grid-10{--columns:10}.grid-11{--columns:11}.grid-12{--columns:12}@media (min-width: 576px){.grid-sm-1{--columns:1}.grid-sm-2{--columns:2}.grid-sm-3{--columns:3}.grid-sm-4{--columns:4}.grid-sm-5{--columns:5}.grid-sm-6{--columns:6}.grid-sm-7{--columns:7}.grid-sm-8{--columns:8}.grid-sm-9{--columns:9}.grid-sm-10{--columns:10}.grid-sm-11{--columns:11}.grid-sm-12{--columns:12}}@media (min-width: 768px){.grid-md-1{--columns:1}.grid-md-2{--columns:2}.grid-md-3{--columns:3}.grid-md-4{--columns:4}.grid-md-5{--columns:5}.grid-md-6{--columns:6}.grid-md-7{--columns:7}.grid-md-8{--columns:8}.grid-md-9{--columns:9}.grid-md-10{--columns:10}.grid-md-11{--columns:11}.grid-md-12{--columns:12}}@media (min-width: 992px){.grid-lg-1{--columns:1}.grid-lg-2{--columns:2}.grid-lg-3{--columns:3}.grid-lg-4{--columns:4}.grid-lg-5{--columns:5}.grid-lg-6{--columns:6}.grid-lg-7{--columns:7}.grid-lg-8{--columns:8}.grid-lg-9{--columns:9}.grid-lg-10{--columns:10}.grid-lg-11{--columns:11}.grid-lg-12{--columns:12}}@media (min-width: 1200px){.grid-xl-1{--columns:1}.grid-xl-2{--columns:2}.grid-xl-3{--columns:3}.grid-xl-4{--columns:4}.grid-xl-5{--columns:5}.grid-xl-6{--columns:6}.grid-xl-7{--columns:7}.grid-xl-8{--columns:8}.grid-xl-9{--columns:9}.grid-xl-10{--columns:10}.grid-xl-11{--columns:11}.grid-xl-12{--columns:12}}@media (min-width: 1400px){.grid-xxl-1{--columns:1}.grid-xxl-2{--columns:2}.grid-xxl-3{--columns:3}.grid-xxl-4{--columns:4}.grid-xxl-5{--columns:5}.grid-xxl-6{--columns:6}.grid-xxl-7{--columns:7}.grid-xxl-8{--columns:8}.grid-xxl-9{--columns:9}.grid-xxl-10{--columns:10}.grid-xxl-11{--columns:11}.grid-xxl-12{--columns:12}}";var o=["","xs","sm","md","lg","xl","xxl"];var u=l("bkkr_grid",function(){function l(l){s(this,l)}l.prototype.onResize=function(){m(this)};l.prototype.getColumns=function(l){var s;for(var m=0,i=o;m<i.length;m++){var n=i[m];var d=r(n);var u=this[l+n.charAt(0).toUpperCase()+n.slice(1)];if(d&&u!==undefined){s=u}}return s};l.prototype.calculateSize=function(){var l=this.getColumns("size");if(!l||l===""){return}return{"--columns":""+l}};l.prototype.render=function(){return i(n,{style:Object.assign({},this.calculateSize())},i("slot",null))};return l}());u.style=d}}}));