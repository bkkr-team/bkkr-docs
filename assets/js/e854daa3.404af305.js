"use strict";(self.webpackChunkbkkr_docs=self.webpackChunkbkkr_docs||[]).push([[8050],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return k}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),d=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=d(e.components);return a.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),p=d(n),k=r,c=p["".concat(u,".").concat(k)]||p[k]||s[k]||l;return n?a.createElement(c,o(o({ref:t},m),{},{components:n})):a.createElement(c,o({ref:t},m))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=p;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var d=2;d<l;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8215:function(e,t,n){n.d(t,{Z:function(){return r}});var a=n(7294);function r(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},9877:function(e,t,n){n.d(t,{Z:function(){return m}});var a=n(7462),r=n(7294),l=n(2389),o=n(5979),i=n(6010),u="tabItem_LplD";function d(e){var t,n,l,d=e.lazy,m=e.block,s=e.defaultValue,p=e.values,k=e.groupId,c=e.className,b=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=p?p:b.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),N=(0,o.lx)(g,(function(e,t){return e.value===t.value}));if(N.length>0)throw new Error('Docusaurus error: Duplicate values "'+N.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var f=null===s?s:null!=(t=null!=s?s:null==(n=b.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(l=b[0])?void 0:l.props.value;if(null!==f&&!g.some((function(e){return e.value===f})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+f+'" but none of its children has the corresponding value. Available values are: '+g.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var v=(0,o.UB)(),h=v.tabGroupChoices,y=v.setTabGroupChoices,w=(0,r.useState)(f),C=w[0],E=w[1],T=[],D=(0,o.o5)().blockElementScrollPositionUntilNextRender;if(null!=k){var O=h[k];null!=O&&O!==C&&g.some((function(e){return e.value===O}))&&E(O)}var x=function(e){var t=e.currentTarget,n=T.indexOf(t),a=g[n].value;a!==C&&(D(t),E(a),null!=k&&y(k,a))},j=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=T.indexOf(e.currentTarget)+1;n=T[a]||T[0];break;case"ArrowLeft":var r=T.indexOf(e.currentTarget)-1;n=T[r]||T[T.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":m},c)},g.map((function(e){var t=e.value,n=e.label,l=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:C===t?0:-1,"aria-selected":C===t,key:t,ref:function(e){return T.push(e)},onKeyDown:j,onFocus:x,onClick:x},l,{className:(0,i.Z)("tabs__item",u,null==l?void 0:l.className,{"tabs__item--active":C===t})}),null!=n?n:t)}))),d?(0,r.cloneElement)(b.filter((function(e){return e.props.value===C}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},b.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==C})}))))}function m(e){var t=(0,l.Z)();return r.createElement(d,(0,a.Z)({key:String(t)},e))}},6306:function(e,t,n){n.d(t,{Z:function(){return u}});var a=n(7294),r=n(5861),l=n(7757),o=n.n(l),i=function(e){var t=(0,a.useRef)(null),n=(0,a.useRef)(!1),l=(0,a.useRef)([]),i=(0,a.useRef)(null);(0,a.useEffect)((function(){window.addEventListener("demoMessage",u)}),[]);var u=(0,a.useCallback)(function(){var e=(0,r.Z)(o().mark((function e(t){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.current?d(t):l.current.push(t);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[]),d=function(e){i.current=e;try{t.current&&t.current.contentWindow&&t.current.contentWindow.postMessage(e.detail,"*")}catch(n){}},m=a.createElement("a",{href:e.source,className:"docs-demo-source",target:"_blank",title:"Demo Source"},"View Source"),s=a.createElement("div",{className:"docs-demo-device"},a.createElement("figure",null,a.createElement("svg",{className:"docs-demo-device__ios-notch",viewBox:"0 0 219 31"},a.createElement("path",{d:"M0 1V0h219v1a5 5 0 0 0-5 5v3c0 12.15-9.85 22-22 22H27C14.85 31 5 21.15 5 9V6a5 5 0 0 0-5-5z",fillRule:"evenodd"})),a.createElement("iframe",{loading:"lazy",onLoad:function(){l.current.forEach((function(e){return d(e)})),d(i.current),l.current=[],n.current=!0},src:""+e.url,ref:t})));return a.createElement("div",{className:"docs-demo"},s,e.source&&m)},u=function(e){var t=e.demoUrl.length>0;return a.createElement("div",{className:"docs-usage"},a.createElement("div",{className:"row"},t&&a.createElement("div",{className:"col col-auto"},a.createElement(i,{url:e.demoUrl,source:e.demoSourceUrl})),a.createElement("div",{className:"col"},e.children)))}},3616:function(e,t,n){n.r(t),n.d(t,{assets:function(){return k},contentTitle:function(){return s},default:function(){return g},frontMatter:function(){return m},metadata:function(){return p},toc:function(){return c}});var a=n(7462),r=n(3366),l=(n(7294),n(3905)),o=n(9877),i=n(8215),u=n(6306),d=["components"],m={title:"bkkr-segment"},s=void 0,p={unversionedId:"components/segment",id:"version-v5/components/segment",title:"bkkr-segment",description:"Usage",source:"@site/versioned_docs/version-v5/components/segment.md",sourceDirName:"components",slug:"/components/segment",permalink:"/bkkr-docs/v5/components/segment",editUrl:"https://github.com/bkkr-team/bkkr-framework/edit/master/core/src/components/segment/readme.md",tags:[],version:"v5",frontMatter:{title:"bkkr-segment"},sidebar:"components",previous:{title:"bkkr-searchbar",permalink:"/bkkr-docs/v5/components/searchbar"},next:{title:"bkkr-segment-button",permalink:"/bkkr-docs/v5/components/segment-button"}},k={},c=[{value:"Usage",id:"usage",level:2},{value:"Properties",id:"properties",level:2},{value:"color",id:"color",level:3},{value:"disabled",id:"disabled",level:3},{value:"scrollable",id:"scrollable",level:3},{value:"selectOnFocus",id:"selectonfocus",level:3},{value:"swipeGesture",id:"swipegesture",level:3},{value:"value",id:"value",level:3},{value:"Events",id:"events",level:2},{value:"CSS Custom Properties",id:"css-custom-properties",level:2}],b={toc:c};function g(e){var t=e.components,n=(0,r.Z)(e,d);return(0,l.kt)("wrapper",(0,a.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"usage"},"Usage"),(0,l.kt)(u.Z,{demoUrl:"/bkkr-docs/demo/segment/index.html",demoSourceUrl:"https://github.com/bkkr-team/bkkr-docs/tree/master/static/demo/segment/index.html",mdxType:"DocsUsage"},(0,l.kt)(o.Z,{groupId:"framework",defaultValue:"angular",values:[{value:"angular",label:"Angular"},{value:"javascript",label:"Javascript"}],mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"angular",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- Default Segment --\x3e\n<bkkr-segment (ionChange)="segmentChanged($event)">\n  <bkkr-segment-button value="friends">\n    <bkkr-label>Friends</bkkr-label>\n  </bkkr-segment-button>\n  <bkkr-segment-button value="enemies">\n    <bkkr-label>Enemies</bkkr-label>\n  </bkkr-segment-button>\n</bkkr-segment>\n'))),(0,l.kt)(i.Z,{value:"javascript",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- Default Segment --\x3e\n<bkkr-segment>\n  <bkkr-segment-button value="friends">\n    <bkkr-label>Friends</bkkr-label>\n  </bkkr-segment-button>\n  <bkkr-segment-button value="enemies">\n    <bkkr-label>Enemies</bkkr-label>\n  </bkkr-segment-button>\n</bkkr-segment>\n'))))),(0,l.kt)("h2",{id:"properties"},"Properties"),(0,l.kt)("h3",{id:"color"},"color"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Description")),(0,l.kt)("td",{parentName:"tr",align:null},"The color to use from your application's color palette.",(0,l.kt)("br",null),"Default options are: ",(0,l.kt)("inlineCode",{parentName:"td"},'"primary"'),", ",(0,l.kt)("inlineCode",{parentName:"td"},'"secondary"'),", ",(0,l.kt)("inlineCode",{parentName:"td"},'"tertiary"'),", ",(0,l.kt)("inlineCode",{parentName:"td"},'"success"'),", ",(0,l.kt)("inlineCode",{parentName:"td"},'"warning"'),", ",(0,l.kt)("inlineCode",{parentName:"td"},'"danger"'),", ",(0,l.kt)("inlineCode",{parentName:"td"},'"light"'),", ",(0,l.kt)("inlineCode",{parentName:"td"},'"medium"'),", and ",(0,l.kt)("inlineCode",{parentName:"td"},'"dark"'),".",(0,l.kt)("br",null),"For more information on colors, see ",(0,l.kt)("a",{parentName:"td",href:"/docs/theming/basics"},"theming"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Attribute")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"color"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Type")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string \uff5c undefined"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Default")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"undefined"))))),(0,l.kt)("h3",{id:"disabled"},"disabled"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Description")),(0,l.kt)("td",{parentName:"tr",align:null},"If ",(0,l.kt)("inlineCode",{parentName:"td"},"true"),", the user cannot interact with the segment.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Attribute")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"disabled"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Type")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"boolean"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Default")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false"))))),(0,l.kt)("h3",{id:"scrollable"},"scrollable"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Description")),(0,l.kt)("td",{parentName:"tr",align:null},"If ",(0,l.kt)("inlineCode",{parentName:"td"},"true"),", the segment buttons will overflow and the user can swipe to see them.",(0,l.kt)("br",null),"In addition, this will disable the gesture to drag the indicator between the buttons",(0,l.kt)("br",null),"in order to swipe to see hidden buttons.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Attribute")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"scrollable"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Type")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"boolean"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Default")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false"))))),(0,l.kt)("h3",{id:"selectonfocus"},"selectOnFocus"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Description")),(0,l.kt)("td",{parentName:"tr",align:null},"If ",(0,l.kt)("inlineCode",{parentName:"td"},"true"),", navigating to an ",(0,l.kt)("inlineCode",{parentName:"td"},"bkkr-segment-button")," with the keyboard will focus and select the element.",(0,l.kt)("br",null),"If ",(0,l.kt)("inlineCode",{parentName:"td"},"false"),", keyboard navigation will only focus the ",(0,l.kt)("inlineCode",{parentName:"td"},"bkkr-segment-button")," element.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Attribute")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"select-on-focus"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Type")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"boolean"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Default")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false"))))),(0,l.kt)("h3",{id:"swipegesture"},"swipeGesture"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Description")),(0,l.kt)("td",{parentName:"tr",align:null},"If ",(0,l.kt)("inlineCode",{parentName:"td"},"true"),", users will be able to swipe between segment buttons to activate them.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Attribute")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"swipe-gesture"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Type")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"boolean"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Default")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"true"))))),(0,l.kt)("h3",{id:"value"},"value"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Description")),(0,l.kt)("td",{parentName:"tr",align:null},"the value of the segment.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Attribute")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"value"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Type")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"any"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Default")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"undefined"))))),(0,l.kt)("h2",{id:"events"},"Events"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"bkkrChange")),(0,l.kt)("td",{parentName:"tr",align:null},"Emitted when the value property has changed and any")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"dragging pointer has been released from ",(0,l.kt)("inlineCode",{parentName:"td"},"bkkr-segment"),"."),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h2",{id:"css-custom-properties"},"CSS Custom Properties"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--background")),(0,l.kt)("td",{parentName:"tr",align:null},"Background of the segment button")))))}g.isMDXComponent=!0}}]);