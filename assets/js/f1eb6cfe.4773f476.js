"use strict";(self.webpackChunkbkkr_docs=self.webpackChunkbkkr_docs||[]).push([[6713],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return b}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var d=n.createContext({}),u=function(e){var t=n.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(d.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,d=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),k=u(r),b=a,m=k["".concat(d,".").concat(b)]||k[b]||s[b]||o;return r?n.createElement(m,l(l({ref:t},c),{},{components:r})):n.createElement(m,l({ref:t},c))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=k;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}k.displayName="MDXCreateElement"},8215:function(e,t,r){r.d(t,{Z:function(){return a}});var n=r(7294);function a(e){var t=e.children,r=e.hidden,a=e.className;return n.createElement("div",{role:"tabpanel",hidden:r,className:a},t)}},9877:function(e,t,r){r.d(t,{Z:function(){return c}});var n=r(7462),a=r(7294),o=r(2389),l=r(5979),i=r(6010),d="tabItem_LplD";function u(e){var t,r,o,u=e.lazy,c=e.block,s=e.defaultValue,k=e.values,b=e.groupId,m=e.className,p=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=k?k:p.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),f=(0,l.lx)(g,(function(e,t){return e.value===t.value}));if(f.length>0)throw new Error('Docusaurus error: Duplicate values "'+f.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var v=null===s?s:null!=(t=null!=s?s:null==(r=p.find((function(e){return e.props.default})))?void 0:r.props.value)?t:null==(o=p[0])?void 0:o.props.value;if(null!==v&&!g.some((function(e){return e.value===v})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+v+'" but none of its children has the corresponding value. Available values are: '+g.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var h=(0,l.UB)(),N=h.tabGroupChoices,y=h.setTabGroupChoices,w=(0,a.useState)(v),E=w[0],x=w[1],C=[],T=(0,l.o5)().blockElementScrollPositionUntilNextRender;if(null!=b){var O=N[b];null!=O&&O!==E&&g.some((function(e){return e.value===O}))&&x(O)}var D=function(e){var t=e.currentTarget,r=C.indexOf(t),n=g[r].value;n!==E&&(T(t),x(n),null!=b&&y(b,n))},j=function(e){var t,r=null;switch(e.key){case"ArrowRight":var n=C.indexOf(e.currentTarget)+1;r=C[n]||C[0];break;case"ArrowLeft":var a=C.indexOf(e.currentTarget)-1;r=C[a]||C[C.length-1]}null==(t=r)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":c},m)},g.map((function(e){var t=e.value,r=e.label,o=e.attributes;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:E===t?0:-1,"aria-selected":E===t,key:t,ref:function(e){return C.push(e)},onKeyDown:j,onFocus:D,onClick:D},o,{className:(0,i.Z)("tabs__item",d,null==o?void 0:o.className,{"tabs__item--active":E===t})}),null!=r?r:t)}))),u?(0,a.cloneElement)(p.filter((function(e){return e.props.value===E}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},p.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==E})}))))}function c(e){var t=(0,o.Z)();return a.createElement(u,(0,n.Z)({key:String(t)},e))}},6306:function(e,t,r){r.d(t,{Z:function(){return d}});var n=r(7294),a=r(5861),o=r(7757),l=r.n(o),i=function(e){var t=(0,n.useRef)(null),r=(0,n.useRef)(!1),o=(0,n.useRef)([]),i=(0,n.useRef)(null);(0,n.useEffect)((function(){window.addEventListener("demoMessage",d)}),[]);var d=(0,n.useCallback)(function(){var e=(0,a.Z)(l().mark((function e(t){return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r.current?u(t):o.current.push(t);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[]),u=function(e){i.current=e;try{t.current&&t.current.contentWindow&&t.current.contentWindow.postMessage(e.detail,"*")}catch(r){}},c=n.createElement("a",{href:e.source,className:"docs-demo-source",target:"_blank",title:"Demo Source"},"View Source"),s=n.createElement("div",{className:"docs-demo-device"},n.createElement("figure",null,n.createElement("svg",{className:"docs-demo-device__ios-notch",viewBox:"0 0 219 31"},n.createElement("path",{d:"M0 1V0h219v1a5 5 0 0 0-5 5v3c0 12.15-9.85 22-22 22H27C14.85 31 5 21.15 5 9V6a5 5 0 0 0-5-5z",fillRule:"evenodd"})),n.createElement("iframe",{loading:"lazy",onLoad:function(){o.current.forEach((function(e){return u(e)})),u(i.current),o.current=[],r.current=!0},src:""+e.url,ref:t})));return n.createElement("div",{className:"docs-demo"},s,e.source&&c)},d=function(e){var t=e.demoUrl.length>0;return n.createElement("div",{className:"docs-usage"},n.createElement("div",{className:"row"},t&&n.createElement("div",{className:"col col-auto"},n.createElement(i,{url:e.demoUrl,source:e.demoSourceUrl})),n.createElement("div",{className:"col"},e.children)))}},7103:function(e,t,r){r.r(t),r.d(t,{assets:function(){return b},contentTitle:function(){return s},default:function(){return g},frontMatter:function(){return c},metadata:function(){return k},toc:function(){return m}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),l=r(9877),i=r(8215),d=r(6306),u=["components"],c={title:"bkkr-badge"},s=void 0,k={unversionedId:"components/badge",id:"version-v5/components/badge",title:"bkkr-badge",description:"Usage",source:"@site/versioned_docs/version-v5/components/badge.md",sourceDirName:"components",slug:"/components/badge",permalink:"/bkkr-docs/v5/components/badge",editUrl:"https://github.com/bkkr-team/bkkr-framework/edit/master/core/src/components/badge/readme.md",tags:[],version:"v5",frontMatter:{title:"bkkr-badge"},sidebar:"components",previous:{title:"bkkr-alert",permalink:"/bkkr-docs/v5/components/alert"},next:{title:"bkkr-breadcrumbs",permalink:"/bkkr-docs/v5/components/breadcrumbs"}},b={},m=[{value:"Usage",id:"usage",level:2},{value:"Properties",id:"properties",level:2},{value:"color",id:"color",level:3},{value:"CSS Custom Properties",id:"css-custom-properties",level:2}],p={toc:m};function g(e){var t=e.components,r=(0,a.Z)(e,u);return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)(d.Z,{demoUrl:"/bkkr-docs/demo/badge/index.html",demoSourceUrl:"https://github.com/bkkr-team/bkkr-docs/tree/master/static/demo/badge/index.html",mdxType:"DocsUsage"},(0,o.kt)(l.Z,{groupId:"framework",defaultValue:"angular",values:[{value:"angular",label:"Angular"},{value:"javascript",label:"Javascript"}],mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"angular",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- Default --\x3e\n<bkkr-badge>99</bkkr-badge>\n\n\x3c!-- Colors --\x3e\n<bkkr-badge color="primary">11</bkkr-badge>\n<bkkr-badge color="secondary">22</bkkr-badge>\n<bkkr-badge color="tertiary">33</bkkr-badge>\n<bkkr-badge color="success">44</bkkr-badge>\n<bkkr-badge color="warning">55</bkkr-badge>\n<bkkr-badge color="danger">66</bkkr-badge>\n<bkkr-badge color="light">77</bkkr-badge>\n<bkkr-badge color="medium">88</bkkr-badge>\n<bkkr-badge color="dark">99</bkkr-badge>\n\n\x3c!-- Item with badge on left and right --\x3e\n<bkkr-item>\n  <bkkr-badge slot="start">11</bkkr-badge>\n  <bkkr-label>My Item</bkkr-label>\n  <bkkr-badge slot="end">22</bkkr-badge>\n</bkkr-item>\n'))),(0,o.kt)(i.Z,{value:"javascript",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- Default --\x3e\n<bkkr-badge>99</bkkr-badge>\n\n\x3c!-- Colors --\x3e\n<bkkr-badge color="primary">11</bkkr-badge>\n<bkkr-badge color="secondary">22</bkkr-badge>\n<bkkr-badge color="tertiary">33</bkkr-badge>\n<bkkr-badge color="success">44</bkkr-badge>\n<bkkr-badge color="warning">55</bkkr-badge>\n<bkkr-badge color="danger">66</bkkr-badge>\n<bkkr-badge color="light">77</bkkr-badge>\n<bkkr-badge color="medium">88</bkkr-badge>\n<bkkr-badge color="dark">99</bkkr-badge>\n\n\x3c!-- Item with badge on left and right --\x3e\n<bkkr-item>\n  <bkkr-badge slot="start">11</bkkr-badge>\n  <bkkr-label>My Item</bkkr-label>\n  <bkkr-badge slot="end">22</bkkr-badge>\n</bkkr-item>\n'))))),(0,o.kt)("h2",{id:"properties"},"Properties"),(0,o.kt)("h3",{id:"color"},"color"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null}),(0,o.kt)("th",{parentName:"tr",align:null}))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Description")),(0,o.kt)("td",{parentName:"tr",align:null},"The color to use from your application's color palette.",(0,o.kt)("br",null),"Default options are: ",(0,o.kt)("inlineCode",{parentName:"td"},'"primary"'),", ",(0,o.kt)("inlineCode",{parentName:"td"},'"secondary"'),", ",(0,o.kt)("inlineCode",{parentName:"td"},'"tertiary"'),", ",(0,o.kt)("inlineCode",{parentName:"td"},'"success"'),", ",(0,o.kt)("inlineCode",{parentName:"td"},'"warning"'),", ",(0,o.kt)("inlineCode",{parentName:"td"},'"danger"'),", ",(0,o.kt)("inlineCode",{parentName:"td"},'"light"'),", ",(0,o.kt)("inlineCode",{parentName:"td"},'"medium"'),", and ",(0,o.kt)("inlineCode",{parentName:"td"},'"dark"'),".",(0,o.kt)("br",null),"For more information on colors, see ",(0,o.kt)("a",{parentName:"td",href:"/docs/theming/basics"},"theming"),".")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Attribute")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"color"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Type")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"string \uff5c undefined"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Default")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"undefined"))))),(0,o.kt)("h2",{id:"css-custom-properties"},"CSS Custom Properties"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"--background")),(0,o.kt)("td",{parentName:"tr",align:null},"Background of the badge")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"--color")),(0,o.kt)("td",{parentName:"tr",align:null},"Text color of the badge")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"--padding-bottom")),(0,o.kt)("td",{parentName:"tr",align:null},"Bottom padding of the badge")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"--padding-end")),(0,o.kt)("td",{parentName:"tr",align:null},"Right padding if direction is left-to-right, and left padding if direction is right-to-left of the badge")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"--padding-start")),(0,o.kt)("td",{parentName:"tr",align:null},"Left padding if direction is left-to-right, and right padding if direction is right-to-left of the badge")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"--padding-top")),(0,o.kt)("td",{parentName:"tr",align:null},"Top padding of the badge")))))}g.isMDXComponent=!0}}]);