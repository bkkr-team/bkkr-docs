System.register(["./p-09f46bfd.system.js"],(function(t){"use strict";var e,n;return{setters:[function(t){e=t.r;n=t.c}],execute:function(){var r=t("bkkr_route",function(){function t(t){e(this,t);this.bkkrRouteDataChanged=n(this,"bkkrRouteDataChanged",7);this.url=""}t.prototype.onUpdate=function(t){this.bkkrRouteDataChanged.emit(t)};t.prototype.onComponentProps=function(t,e){if(t===e){return}var n=t?Object.keys(t):[];var r=e?Object.keys(e):[];if(n.length!==r.length){this.onUpdate(t);return}for(var o=0,a=n;o<a.length;o++){var u=a[o];if(t[u]!==e[u]){this.onUpdate(t);return}}};t.prototype.connectedCallback=function(){this.bkkrRouteDataChanged.emit()};Object.defineProperty(t,"watchers",{get:function(){return{url:["onUpdate"],component:["onUpdate"],componentProps:["onComponentProps"]}},enumerable:false,configurable:true});return t}())}}}));