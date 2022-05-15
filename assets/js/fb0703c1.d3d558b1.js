"use strict";(self.webpackChunkbkkr_docs=self.webpackChunkbkkr_docs||[]).push([[2071],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return p}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),m=c(n),p=a,k=m["".concat(u,".").concat(p)]||m[p]||s[p]||o;return n?r.createElement(k,l(l({ref:t},d),{},{components:n})):r.createElement(k,l({ref:t},d))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8215:function(e,t,n){n.d(t,{Z:function(){return a}});var r=n(7294);function a(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},9877:function(e,t,n){n.d(t,{Z:function(){return d}});var r=n(7462),a=n(7294),o=n(2389),l=n(5979),i=n(6010),u="tabItem_LplD";function c(e){var t,n,o,c=e.lazy,d=e.block,s=e.defaultValue,m=e.values,p=e.groupId,k=e.className,b=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=m?m:b.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),g=(0,l.lx)(f,(function(e,t){return e.value===t.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var v=null===s?s:null!=(t=null!=s?s:null==(n=b.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(o=b[0])?void 0:o.props.value;if(null!==v&&!f.some((function(e){return e.value===v})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+v+'" but none of its children has the corresponding value. Available values are: '+f.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var h=(0,l.UB)(),N=h.tabGroupChoices,y=h.setTabGroupChoices,w=(0,a.useState)(v),E=w[0],C=w[1],T=[],x=(0,l.o5)().blockElementScrollPositionUntilNextRender;if(null!=p){var O=N[p];null!=O&&O!==E&&f.some((function(e){return e.value===O}))&&C(O)}var j=function(e){var t=e.currentTarget,n=T.indexOf(t),r=f[n].value;r!==E&&(x(t),C(r),null!=p&&y(p,r))},D=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=T.indexOf(e.currentTarget)+1;n=T[r]||T[0];break;case"ArrowLeft":var a=T.indexOf(e.currentTarget)-1;n=T[a]||T[T.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":d},k)},f.map((function(e){var t=e.value,n=e.label,o=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:E===t?0:-1,"aria-selected":E===t,key:t,ref:function(e){return T.push(e)},onKeyDown:D,onFocus:j,onClick:j},o,{className:(0,i.Z)("tabs__item",u,null==o?void 0:o.className,{"tabs__item--active":E===t})}),null!=n?n:t)}))),c?(0,a.cloneElement)(b.filter((function(e){return e.props.value===E}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},b.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==E})}))))}function d(e){var t=(0,o.Z)();return a.createElement(c,(0,r.Z)({key:String(t)},e))}},6306:function(e,t,n){n.d(t,{Z:function(){return u}});var r=n(7294),a=n(5861),o=n(7757),l=n.n(o),i=function(e){var t=(0,r.useRef)(null),n=(0,r.useRef)(!1),o=(0,r.useRef)([]),i=(0,r.useRef)(null);(0,r.useEffect)((function(){window.addEventListener("demoMessage",u)}),[]);var u=(0,r.useCallback)(function(){var e=(0,a.Z)(l().mark((function e(t){return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.current?c(t):o.current.push(t);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[]),c=function(e){i.current=e;try{t.current&&t.current.contentWindow&&t.current.contentWindow.postMessage(e.detail,"*")}catch(n){}},d=r.createElement("a",{href:e.source,className:"docs-demo-source",target:"_blank",title:"Demo Source"},"View Source"),s=r.createElement("div",{className:"docs-demo-device"},r.createElement("figure",null,r.createElement("svg",{className:"docs-demo-device__ios-notch",viewBox:"0 0 219 31"},r.createElement("path",{d:"M0 1V0h219v1a5 5 0 0 0-5 5v3c0 12.15-9.85 22-22 22H27C14.85 31 5 21.15 5 9V6a5 5 0 0 0-5-5z",fillRule:"evenodd"})),r.createElement("iframe",{loading:"lazy",onLoad:function(){o.current.forEach((function(e){return c(e)})),c(i.current),o.current=[],n.current=!0},src:""+e.url,ref:t})));return r.createElement("div",{className:"docs-demo"},s,e.source&&d)},u=function(e){var t=e.demoUrl.length>0;return r.createElement("div",{className:"docs-usage"},r.createElement("div",{className:"row"},t&&r.createElement("div",{className:"col col-auto"},r.createElement(i,{url:e.demoUrl,source:e.demoSourceUrl})),r.createElement("div",{className:"col"},e.children)))}},883:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return d},metadata:function(){return m},toc:function(){return k}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),l=n(9877),i=n(8215),u=n(6306),c=["components"],d={title:"bkkr-toolbar"},s=void 0,m={unversionedId:"components/toolbar",id:"version-v5/components/toolbar",title:"bkkr-toolbar",description:"Usage",source:"@site/versioned_docs/version-v5/components/toolbar.md",sourceDirName:"components",slug:"/components/toolbar",permalink:"/bkkr-docs/v5/components/toolbar",editUrl:"https://github.com/bkkr-team/bkkr-framework/edit/master/core/src/components/toolbar/readme.md",tags:[],version:"v5",frontMatter:{title:"bkkr-toolbar"},sidebar:"components",previous:{title:"bkkr-toggle",permalink:"/bkkr-docs/v5/components/toggle"},next:{title:"bkkr-header",permalink:"/bkkr-docs/v5/components/header"}},p={},k=[{value:"Usage",id:"usage",level:2},{value:"Properties",id:"properties",level:2},{value:"color",id:"color",level:3},{value:"CSS Custom Properties",id:"css-custom-properties",level:2}],b={toc:k};function f(e){var t=e.components,n=(0,a.Z)(e,c);return(0,o.kt)("wrapper",(0,r.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)(u.Z,{demoUrl:"/bkkr-docs/demo/toolbar/index.html",demoSourceUrl:"https://github.com/bkkr-team/bkkr-docs/tree/master/static/demo/toolbar/index.html",mdxType:"DocsUsage"},(0,o.kt)(l.Z,{groupId:"framework",defaultValue:"angular",values:[{value:"angular",label:"Angular"},{value:"javascript",label:"Javascript"}],mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"angular",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<bkkr-toolbar>\n  <p class="text-center text-bold mb-0">Toolbar</p>\n</bkkr-toolbar>\n\n<bkkr-toolbar>\n    <bkkr-toolbar>\n        <bkkr-button slot="start" color="dark">\n            <bkkr-icon slot="icon-only" name="arrow-left"></bkkr-icon>\n        </bkkr-button>\n        <p class="text-center text-bold mb-0">\n            Toolbar\n        </p>\n        <bkkr-button slot="end" color="dark">\n            <bkkr-icon slot="icon-only" name="trash"></bkkr-icon>\n        </bkkr-button>\n    </bkkr-toolbar>\n</bkkr-toolbar>\n'))),(0,o.kt)(i.Z,{value:"javascript",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<bkkr-toolbar>\n  <p class="text-center text-bold mb-0">Toolbar</p>\n</bkkr-toolbar>\n\n<bkkr-toolbar>\n    <bkkr-toolbar>\n        <bkkr-button slot="start" color="dark">\n            <bkkr-icon slot="icon-only" name="arrow-left"></bkkr-icon>\n        </bkkr-button>\n        <p class="text-center text-bold mb-0">\n            Toolbar\n        </p>\n        <bkkr-button slot="end" color="dark">\n            <bkkr-icon slot="icon-only" name="trash"></bkkr-icon>\n        </bkkr-button>\n    </bkkr-toolbar>\n</bkkr-toolbar>\n'))))),(0,o.kt)("h2",{id:"properties"},"Properties"),(0,o.kt)("h3",{id:"color"},"color"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null}),(0,o.kt)("th",{parentName:"tr",align:null}))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Description")),(0,o.kt)("td",{parentName:"tr",align:null},"The color to use from your application's color palette.",(0,o.kt)("br",null),"Default options are: ",(0,o.kt)("inlineCode",{parentName:"td"},'"primary"'),", ",(0,o.kt)("inlineCode",{parentName:"td"},'"secondary"'),", ",(0,o.kt)("inlineCode",{parentName:"td"},'"tertiary"'),", ",(0,o.kt)("inlineCode",{parentName:"td"},'"success"'),", ",(0,o.kt)("inlineCode",{parentName:"td"},'"warning"'),", ",(0,o.kt)("inlineCode",{parentName:"td"},'"danger"'),", ",(0,o.kt)("inlineCode",{parentName:"td"},'"light"'),", ",(0,o.kt)("inlineCode",{parentName:"td"},'"medium"'),", and ",(0,o.kt)("inlineCode",{parentName:"td"},'"dark"'),".",(0,o.kt)("br",null),"For more information on colors, see ",(0,o.kt)("a",{parentName:"td",href:"/docs/theming/basics"},"theming"),".")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Attribute")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"color"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Type")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"string \uff5c undefined"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Default")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"undefined"))))),(0,o.kt)("h2",{id:"css-custom-properties"},"CSS Custom Properties"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"--background")),(0,o.kt)("td",{parentName:"tr",align:null},"Background of the badge")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"--color")),(0,o.kt)("td",{parentName:"tr",align:null},"Text color of the badge")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"--min-height")),(0,o.kt)("td",{parentName:"tr",align:null},"Minimum height")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"--padding-bottom")),(0,o.kt)("td",{parentName:"tr",align:null},"Bottom padding of the badge")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"--padding-end")),(0,o.kt)("td",{parentName:"tr",align:null},"Right padding if direction is left-to-right, and left padding if direction is right-to-left of the badge")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"--padding-start")),(0,o.kt)("td",{parentName:"tr",align:null},"Left padding if direction is left-to-right, and right padding if direction is right-to-left of the badge")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"--padding-top")),(0,o.kt)("td",{parentName:"tr",align:null},"Top padding of the badge")))))}f.isMDXComponent=!0}}]);