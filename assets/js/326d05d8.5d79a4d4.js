"use strict";(self.webpackChunkbkkr_docs=self.webpackChunkbkkr_docs||[]).push([[8387],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return p}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var k=r.createContext({}),d=function(e){var t=r.useContext(k),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=d(e.components);return r.createElement(k.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,k=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=d(n),p=a,b=m["".concat(k,".").concat(p)]||m[p]||c[p]||l;return n?r.createElement(b,o(o({ref:t},u),{},{components:n})):r.createElement(b,o({ref:t},u))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var k in t)hasOwnProperty.call(t,k)&&(i[k]=t[k]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var d=2;d<l;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8215:function(e,t,n){n.d(t,{Z:function(){return a}});var r=n(7294);function a(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},9877:function(e,t,n){n.d(t,{Z:function(){return u}});var r=n(7462),a=n(7294),l=n(2389),o=n(5979),i=n(6010),k="tabItem_LplD";function d(e){var t,n,l,d=e.lazy,u=e.block,c=e.defaultValue,m=e.values,p=e.groupId,b=e.className,s=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),N=null!=m?m:s.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),g=(0,o.lx)(N,(function(e,t){return e.value===t.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var h=null===c?c:null!=(t=null!=c?c:null==(n=s.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(l=s[0])?void 0:l.props.value;if(null!==h&&!N.some((function(e){return e.value===h})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+h+'" but none of its children has the corresponding value. Available values are: '+N.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var f=(0,o.UB)(),v=f.tabGroupChoices,y=f.setTabGroupChoices,w=(0,a.useState)(h),C=w[0],T=w[1],E=[],x=(0,o.o5)().blockElementScrollPositionUntilNextRender;if(null!=p){var O=v[p];null!=O&&O!==C&&N.some((function(e){return e.value===O}))&&T(O)}var D=function(e){var t=e.currentTarget,n=E.indexOf(t),r=N[n].value;r!==C&&(x(t),T(r),null!=p&&y(p,r))},S=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=E.indexOf(e.currentTarget)+1;n=E[r]||E[0];break;case"ArrowLeft":var a=E.indexOf(e.currentTarget)-1;n=E[a]||E[E.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":u},b)},N.map((function(e){var t=e.value,n=e.label,l=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:C===t?0:-1,"aria-selected":C===t,key:t,ref:function(e){return E.push(e)},onKeyDown:S,onFocus:D,onClick:D},l,{className:(0,i.Z)("tabs__item",k,null==l?void 0:l.className,{"tabs__item--active":C===t})}),null!=n?n:t)}))),d?(0,a.cloneElement)(s.filter((function(e){return e.props.value===C}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},s.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==C})}))))}function u(e){var t=(0,l.Z)();return a.createElement(d,(0,r.Z)({key:String(t)},e))}},6306:function(e,t,n){n.d(t,{Z:function(){return k}});var r=n(7294),a=n(5861),l=n(7757),o=n.n(l),i=function(e){var t=(0,r.useRef)(null),n=(0,r.useRef)(!1),l=(0,r.useRef)([]),i=(0,r.useRef)(null);(0,r.useEffect)((function(){window.addEventListener("demoMessage",k)}),[]);var k=(0,r.useCallback)(function(){var e=(0,a.Z)(o().mark((function e(t){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.current?d(t):l.current.push(t);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[]),d=function(e){i.current=e;try{t.current&&t.current.contentWindow&&t.current.contentWindow.postMessage(e.detail,"*")}catch(n){}},u=r.createElement("a",{href:e.source,className:"docs-demo-source",target:"_blank",title:"Demo Source"},"View Source"),c=r.createElement("div",{className:"docs-demo-device"},r.createElement("figure",null,r.createElement("svg",{className:"docs-demo-device__ios-notch",viewBox:"0 0 219 31"},r.createElement("path",{d:"M0 1V0h219v1a5 5 0 0 0-5 5v3c0 12.15-9.85 22-22 22H27C14.85 31 5 21.15 5 9V6a5 5 0 0 0-5-5z",fillRule:"evenodd"})),r.createElement("iframe",{loading:"lazy",onLoad:function(){l.current.forEach((function(e){return d(e)})),d(i.current),l.current=[],n.current=!0},src:""+e.url,ref:t})));return r.createElement("div",{className:"docs-demo"},c,e.source&&u)},k=function(e){var t=e.demoUrl.length>0;return r.createElement("div",{className:"docs-usage"},r.createElement("div",{className:"row"},t&&r.createElement("div",{className:"col col-auto"},r.createElement(i,{url:e.demoUrl,source:e.demoSourceUrl})),r.createElement("div",{className:"col"},e.children)))}},5439:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return N},frontMatter:function(){return u},metadata:function(){return m},toc:function(){return b}});var r=n(7462),a=n(3366),l=(n(7294),n(3905)),o=n(9877),i=n(8215),k=n(6306),d=["components"],u={title:"bkkr-accordion"},c=void 0,m={unversionedId:"components/accordion",id:"components/accordion",title:"bkkr-accordion",description:"Usage",source:"@site/docs/components/accordion.md",sourceDirName:"components",slug:"/components/accordion",permalink:"/bkkr-docs/components/accordion",editUrl:"https://github.com/bkkr-team/bkkr-framework/edit/master/core/src/components/accordion/readme.md",tags:[],version:"current",frontMatter:{title:"bkkr-accordion"},sidebar:"components",previous:{title:"UI Components",permalink:"/bkkr-docs/components"},next:{title:"bkkr-accordion-group",permalink:"/bkkr-docs/components/accordion-group"}},p={},b=[{value:"Usage",id:"usage",level:2},{value:"Properties",id:"properties",level:2},{value:"disabled",id:"disabled",level:3},{value:"readonly",id:"readonly",level:3},{value:"toggleIcon",id:"toggleicon",level:3},{value:"toggleIconSlot",id:"toggleiconslot",level:3},{value:"value",id:"value",level:3},{value:"CSS Shadow Parts",id:"css-shadow-parts",level:2},{value:"Slots",id:"slots",level:2}],s={toc:b};function N(e){var t=e.components,n=(0,a.Z)(e,d);return(0,l.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"usage"},"Usage"),(0,l.kt)(k.Z,{demoUrl:"/bkkr-docs/demo/accordion/index.html",demoSourceUrl:"https://github.com/bkkr-team/bkkr-docs/tree/master/static/demo/accordion/index.html",mdxType:"DocsUsage"},(0,l.kt)(o.Z,{groupId:"framework",defaultValue:"angular",values:[{value:"angular",label:"Angular"},{value:"javascript",label:"Javascript"}],mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"angular",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- Basic --\x3e\n<bkkr-accordion-group>\n  <bkkr-accordion value="colors">\n    <bkkr-item slot="header">\n      <bkkr-label>Colors</bkkr-label>\n    </bkkr-item>\n\n    <bkkr-list slot="content">\n      <bkkr-item>\n        <bkkr-label>Red</bkkr-label>\n      </bkkr-item>\n      <bkkr-item>\n        <bkkr-label>Green</bkkr-label>\n      </bkkr-item>\n      <bkkr-item>\n        <bkkr-label>Blue</bkkr-label>\n      </bkkr-item>\n    </bkkr-list>\n  </bkkr-accordion>\n  <bkkr-accordion value="shapes">\n    <bkkr-item slot="header">\n      <bkkr-label>Shapes</bkkr-label>\n    </bkkr-item>\n\n    <bkkr-list slot="content">\n      <bkkr-item>\n        <bkkr-label>Circle</bkkr-label>\n      </bkkr-item>\n      <bkkr-item>\n        <bkkr-label>Triangle</bkkr-label>\n      </bkkr-item>\n      <bkkr-item>\n        <bkkr-label>Square</bkkr-label>\n      </bkkr-item>\n    </bkkr-list>\n  </bkkr-accordion>\n  <bkkr-accordion value="numbers">\n    <bkkr-item slot="header">\n      <bkkr-label>Numbers</bkkr-label>\n    </bkkr-item>\n\n    <bkkr-list slot="content">\n      <bkkr-item>\n        <bkkr-label>1</bkkr-label>\n      </bkkr-item>\n      <bkkr-item>\n        <bkkr-label>2</bkkr-label>\n      </bkkr-item>\n      <bkkr-item>\n        <bkkr-label>3</bkkr-label>\n      </bkkr-item>\n    </bkkr-list>\n  </bkkr-accordion>\n</bkkr-accordion-group>\n'))),(0,l.kt)(i.Z,{value:"javascript",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- Basic --\x3e\n<bkkr-accordion-group>\n  <bkkr-accordion value="colors">\n    <bkkr-item slot="header">\n      <bkkr-label>Colors</bkkr-label>\n    </bkkr-item>\n\n    <bkkr-list slot="content">\n      <bkkr-item>\n        <bkkr-label>Red</bkkr-label>\n      </bkkr-item>\n      <bkkr-item>\n        <bkkr-label>Green</bkkr-label>\n      </bkkr-item>\n      <bkkr-item>\n        <bkkr-label>Blue</bkkr-label>\n      </bkkr-item>\n    </bkkr-list>\n  </bkkr-accordion>\n  <bkkr-accordion value="shapes">\n    <bkkr-item slot="header">\n      <bkkr-label>Shapes</bkkr-label>\n    </bkkr-item>\n\n    <bkkr-list slot="content">\n      <bkkr-item>\n        <bkkr-label>Circle</bkkr-label>\n      </bkkr-item>\n      <bkkr-item>\n        <bkkr-label>Triangle</bkkr-label>\n      </bkkr-item>\n      <bkkr-item>\n        <bkkr-label>Square</bkkr-label>\n      </bkkr-item>\n    </bkkr-list>\n  </bkkr-accordion>\n  <bkkr-accordion value="numbers">\n    <bkkr-item slot="header">\n      <bkkr-label>Numbers</bkkr-label>\n    </bkkr-item>\n\n    <bkkr-list slot="content">\n      <bkkr-item>\n        <bkkr-label>1</bkkr-label>\n      </bkkr-item>\n      <bkkr-item>\n        <bkkr-label>2</bkkr-label>\n      </bkkr-item>\n      <bkkr-item>\n        <bkkr-label>3</bkkr-label>\n      </bkkr-item>\n    </bkkr-list>\n  </bkkr-accordion>\n</bkkr-accordion-group>\n'))))),(0,l.kt)("h2",{id:"properties"},"Properties"),(0,l.kt)("h3",{id:"disabled"},"disabled"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Description")),(0,l.kt)("td",{parentName:"tr",align:null},"If ",(0,l.kt)("inlineCode",{parentName:"td"},"true"),", the accordion cannot be interacted with.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Attribute")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"disabled"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Type")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"boolean"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Default")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false"))))),(0,l.kt)("h3",{id:"readonly"},"readonly"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Description")),(0,l.kt)("td",{parentName:"tr",align:null},"If ",(0,l.kt)("inlineCode",{parentName:"td"},"true"),", the accordion cannot be interacted with,",(0,l.kt)("br",null),"but does not alter the opacity.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Attribute")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"readonly"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Type")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"boolean"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Default")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false"))))),(0,l.kt)("h3",{id:"toggleicon"},"toggleIcon"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Description")),(0,l.kt)("td",{parentName:"tr",align:null},"The toggle icon to use. This icon will be",(0,l.kt)("br",null),"rotated when the accordion is expanded",(0,l.kt)("br",null),"or collapsed.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Attribute")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"toggle-icon"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Type")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Default")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"'chevron-down'"))))),(0,l.kt)("h3",{id:"toggleiconslot"},"toggleIconSlot"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Description")),(0,l.kt)("td",{parentName:"tr",align:null},"The slot inside of ",(0,l.kt)("inlineCode",{parentName:"td"},"bkkr-item")," to",(0,l.kt)("br",null),"place the toggle icon. Defaults to ",(0,l.kt)("inlineCode",{parentName:"td"},"'end'"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Attribute")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"toggle-icon-slot"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Type")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'"end" \uff5c "start"'))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Default")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"'end'"))))),(0,l.kt)("h3",{id:"value"},"value"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Description")),(0,l.kt)("td",{parentName:"tr",align:null},"The value of the accordion.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Attribute")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"value"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Type")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Default")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"bkkr-accordion-${accordionIds++}"))))),(0,l.kt)("h2",{id:"css-shadow-parts"},"CSS Shadow Parts"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"content")),(0,l.kt)("td",{parentName:"tr",align:null},"The wrapper element for the content slot.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"expanded")),(0,l.kt)("td",{parentName:"tr",align:null},"The expanded element. Can be used in combination")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"with the ",(0,l.kt)("inlineCode",{parentName:"td"},"header")," and ",(0,l.kt)("inlineCode",{parentName:"td"},"content")," parts (i.e. ",(0,l.kt)("inlineCode",{parentName:"td"},"::part(header expanded)"),")."),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"header")),(0,l.kt)("td",{parentName:"tr",align:null},"The wrapper element for the header slot.")))),(0,l.kt)("h2",{id:"slots"},"Slots"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"content")),(0,l.kt)("td",{parentName:"tr",align:null},"Content is placed below the header and is")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"shown or hidden based on expanded state."),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"header")),(0,l.kt)("td",{parentName:"tr",align:null},"Content is placed at the top and is used to")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"expand or collapse the accordion item."),(0,l.kt)("td",{parentName:"tr",align:null})))))}N.isMDXComponent=!0}}]);