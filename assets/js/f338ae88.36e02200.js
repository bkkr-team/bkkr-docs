"use strict";(self.webpackChunkbkkr_docs=self.webpackChunkbkkr_docs||[]).push([[1880],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return p}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),m=c(n),p=a,k=m["".concat(u,".").concat(p)]||m[p]||s[p]||l;return n?r.createElement(k,o(o({ref:t},d),{},{components:n})):r.createElement(k,o({ref:t},d))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8215:function(e,t,n){n.d(t,{Z:function(){return a}});var r=n(7294);function a(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},9877:function(e,t,n){n.d(t,{Z:function(){return d}});var r=n(7462),a=n(7294),l=n(2389),o=n(5979),i=n(6010),u="tabItem_LplD";function c(e){var t,n,l,c=e.lazy,d=e.block,s=e.defaultValue,m=e.values,p=e.groupId,k=e.className,f=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=m?m:f.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),v=(0,o.lx)(b,(function(e,t){return e.value===t.value}));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===s?s:null!=(t=null!=s?s:null==(n=f.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(l=f[0])?void 0:l.props.value;if(null!==g&&!b.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var N=(0,o.UB)(),h=N.tabGroupChoices,y=N.setTabGroupChoices,w=(0,a.useState)(g),E=w[0],x=w[1],O=[],T=(0,o.o5)().blockElementScrollPositionUntilNextRender;if(null!=p){var C=h[p];null!=C&&C!==E&&b.some((function(e){return e.value===C}))&&x(C)}var D=function(e){var t=e.currentTarget,n=O.indexOf(t),r=b[n].value;r!==E&&(T(t),x(r),null!=p&&y(p,r))},j=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=O.indexOf(e.currentTarget)+1;n=O[r]||O[0];break;case"ArrowLeft":var a=O.indexOf(e.currentTarget)-1;n=O[a]||O[O.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":d},k)},b.map((function(e){var t=e.value,n=e.label,l=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:E===t?0:-1,"aria-selected":E===t,key:t,ref:function(e){return O.push(e)},onKeyDown:j,onFocus:D,onClick:D},l,{className:(0,i.Z)("tabs__item",u,null==l?void 0:l.className,{"tabs__item--active":E===t})}),null!=n?n:t)}))),c?(0,a.cloneElement)(f.filter((function(e){return e.props.value===E}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},f.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==E})}))))}function d(e){var t=(0,l.Z)();return a.createElement(c,(0,r.Z)({key:String(t)},e))}},6306:function(e,t,n){n.d(t,{Z:function(){return u}});var r=n(7294),a=n(5861),l=n(7757),o=n.n(l),i=function(e){var t=(0,r.useRef)(null),n=(0,r.useRef)(!1),l=(0,r.useRef)([]),i=(0,r.useRef)(null);(0,r.useEffect)((function(){window.addEventListener("demoMessage",u)}),[]);var u=(0,r.useCallback)(function(){var e=(0,a.Z)(o().mark((function e(t){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.current?c(t):l.current.push(t);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[]),c=function(e){i.current=e;try{t.current&&t.current.contentWindow&&t.current.contentWindow.postMessage(e.detail,"*")}catch(n){}},d=r.createElement("a",{href:e.source,className:"docs-demo-source",target:"_blank",title:"Demo Source"},"View Source"),s=r.createElement("div",{className:"docs-demo-device"},r.createElement("figure",null,r.createElement("svg",{className:"docs-demo-device__ios-notch",viewBox:"0 0 219 31"},r.createElement("path",{d:"M0 1V0h219v1a5 5 0 0 0-5 5v3c0 12.15-9.85 22-22 22H27C14.85 31 5 21.15 5 9V6a5 5 0 0 0-5-5z",fillRule:"evenodd"})),r.createElement("iframe",{loading:"lazy",onLoad:function(){l.current.forEach((function(e){return c(e)})),c(i.current),l.current=[],n.current=!0},src:""+e.url,ref:t})));return r.createElement("div",{className:"docs-demo"},s,e.source&&d)},u=function(e){var t=e.demoUrl.length>0;return r.createElement("div",{className:"docs-usage"},r.createElement("div",{className:"row"},t&&r.createElement("div",{className:"col col-auto"},r.createElement(i,{url:e.demoUrl,source:e.demoSourceUrl})),r.createElement("div",{className:"col"},e.children)))}},7565:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return b},frontMatter:function(){return d},metadata:function(){return m},toc:function(){return k}});var r=n(7462),a=n(3366),l=(n(7294),n(3905)),o=n(9877),i=n(8215),u=n(6306),c=["components"],d={title:"bkkr-fab"},s=void 0,m={unversionedId:"components/fab",id:"components/fab",title:"bkkr-fab",description:"Usage",source:"@site/docs/components/fab.md",sourceDirName:"components",slug:"/components/fab",permalink:"/bkkr-docs/components/fab",editUrl:"https://github.com/bkkr-team/bkkr-framework/edit/master/core/src/components/fab/readme.md",tags:[],version:"current",frontMatter:{title:"bkkr-fab"},sidebar:"components",previous:{title:"bkkr-datetime",permalink:"/bkkr-docs/components/datetime"},next:{title:"bkkr-fab-button",permalink:"/bkkr-docs/components/fab-button"}},p={},k=[{value:"Usage",id:"usage",level:2},{value:"Properties",id:"properties",level:2},{value:"edge",id:"edge",level:3},{value:"horizontal",id:"horizontal",level:3},{value:"vertical",id:"vertical",level:3}],f={toc:k};function b(e){var t=e.components,n=(0,a.Z)(e,c);return(0,l.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"usage"},"Usage"),(0,l.kt)(u.Z,{demoUrl:"/bkkr-docs/demo/fab/index.html",demoSourceUrl:"https://github.com/bkkr-team/bkkr-docs/tree/master/static/demo/fab/index.html",mdxType:"DocsUsage"},(0,l.kt)(o.Z,{groupId:"framework",defaultValue:"angular",values:[{value:"angular",label:"Angular"},{value:"javascript",label:"Javascript"}],mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"angular",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<bkkr-content>\n    \x3c!-- Default bottom right --\x3e\n    <bkkr-fab vertical="bottom" horizontal="end" slot="fixed">\n        <bkkr-fab-button color="primary">\n            <bkkr-icon name="plus"></bkkr-icon>\n        </bkkr-fab-button>\n    </bkkr-fab>\n</bkkr-content>\n'))),(0,l.kt)(i.Z,{value:"javascript",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<bkkr-content>\n    \x3c!-- Default bottom right --\x3e\n    <bkkr-fab vertical="bottom" horizontal="end" slot="fixed">\n        <bkkr-fab-button color="primary">\n            <bkkr-icon name="plus"></bkkr-icon>\n        </bkkr-fab-button>\n    </bkkr-fab>\n</bkkr-content>\n'))))),(0,l.kt)("h2",{id:"properties"},"Properties"),(0,l.kt)("h3",{id:"edge"},"edge"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Description")),(0,l.kt)("td",{parentName:"tr",align:null},"If ",(0,l.kt)("inlineCode",{parentName:"td"},"true"),", the fab will display on the edge of the header if",(0,l.kt)("br",null),(0,l.kt)("inlineCode",{parentName:"td"},"vertical")," is ",(0,l.kt)("inlineCode",{parentName:"td"},'"top"'),", and on the edge of the footer if",(0,l.kt)("br",null),"it is ",(0,l.kt)("inlineCode",{parentName:"td"},'"bottom"'),". Should be used with a ",(0,l.kt)("inlineCode",{parentName:"td"},"fixed")," slot.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Attribute")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"edge"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Type")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"boolean"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Default")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false"))))),(0,l.kt)("h3",{id:"horizontal"},"horizontal"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Description")),(0,l.kt)("td",{parentName:"tr",align:null},"Where to align the fab horizontally in the viewport.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Attribute")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"horizontal"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Type")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'"center" \uff5c "end" \uff5c "start" \uff5c undefined'))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Default")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"undefined"))))),(0,l.kt)("h3",{id:"vertical"},"vertical"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Description")),(0,l.kt)("td",{parentName:"tr",align:null},"Where to align the fab vertically in the viewport.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Attribute")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"vertical"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Type")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'"bottom" \uff5c "center" \uff5c "top" \uff5c undefined'))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Default")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"undefined"))))))}b.isMDXComponent=!0}}]);