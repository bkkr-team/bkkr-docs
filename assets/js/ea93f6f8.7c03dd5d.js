"use strict";(self.webpackChunkbkkr_docs=self.webpackChunkbkkr_docs||[]).push([[8956],{3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return c}});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var d=a.createContext({}),p=function(t){var e=a.useContext(d),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},u=function(t){var e=p(t.components);return a.createElement(d.Provider,{value:e},t.children)},k={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,d=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),m=p(n),c=r,s=m["".concat(d,".").concat(c)]||m[c]||k[c]||l;return n?a.createElement(s,i(i({ref:e},u),{},{components:n})):a.createElement(s,i({ref:e},u))}));function c(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var d in e)hasOwnProperty.call(e,d)&&(o[d]=e[d]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8215:function(t,e,n){n.d(e,{Z:function(){return r}});var a=n(7294);function r(t){var e=t.children,n=t.hidden,r=t.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},e)}},9877:function(t,e,n){n.d(e,{Z:function(){return u}});var a=n(7462),r=n(7294),l=n(2389),i=n(5979),o=n(6010),d="tabItem_LplD";function p(t){var e,n,l,p=t.lazy,u=t.block,k=t.defaultValue,m=t.values,c=t.groupId,s=t.className,N=r.Children.map(t.children,(function(t){if((0,r.isValidElement)(t)&&void 0!==t.props.value)return t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof t.type?t.type:t.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=m?m:N.map((function(t){var e=t.props;return{value:e.value,label:e.label,attributes:e.attributes}})),g=(0,i.lx)(b,(function(t,e){return t.value===e.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(t){return t.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var h=null===k?k:null!=(e=null!=k?k:null==(n=N.find((function(t){return t.props.default})))?void 0:n.props.value)?e:null==(l=N[0])?void 0:l.props.value;if(null!==h&&!b.some((function(t){return t.value===h})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+h+'" but none of its children has the corresponding value. Available values are: '+b.map((function(t){return t.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var f=(0,i.UB)(),v=f.tabGroupChoices,y=f.setTabGroupChoices,C=(0,r.useState)(h),w=C[0],T=C[1],D=[],E=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=c){var x=v[c];null!=x&&x!==w&&b.some((function(t){return t.value===x}))&&T(x)}var O=function(t){var e=t.currentTarget,n=D.indexOf(e),a=b[n].value;a!==w&&(E(e),T(a),null!=c&&y(c,a))},S=function(t){var e,n=null;switch(t.key){case"ArrowRight":var a=D.indexOf(t.currentTarget)+1;n=D[a]||D[0];break;case"ArrowLeft":var r=D.indexOf(t.currentTarget)-1;n=D[r]||D[D.length-1]}null==(e=n)||e.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":u},s)},b.map((function(t){var e=t.value,n=t.label,l=t.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:w===e?0:-1,"aria-selected":w===e,key:e,ref:function(t){return D.push(t)},onKeyDown:S,onFocus:O,onClick:O},l,{className:(0,o.Z)("tabs__item",d,null==l?void 0:l.className,{"tabs__item--active":w===e})}),null!=n?n:e)}))),p?(0,r.cloneElement)(N.filter((function(t){return t.props.value===w}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},N.map((function(t,e){return(0,r.cloneElement)(t,{key:e,hidden:t.props.value!==w})}))))}function u(t){var e=(0,l.Z)();return r.createElement(p,(0,a.Z)({key:String(e)},t))}},6306:function(t,e,n){n.d(e,{Z:function(){return d}});var a=n(7294),r=n(5861),l=n(7757),i=n.n(l),o=function(t){var e=(0,a.useRef)(null),n=(0,a.useRef)(!1),l=(0,a.useRef)([]),o=(0,a.useRef)(null);(0,a.useEffect)((function(){window.addEventListener("demoMessage",d)}),[]);var d=(0,a.useCallback)(function(){var t=(0,r.Z)(i().mark((function t(e){return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n.current?p(e):l.current.push(e);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),[]),p=function(t){o.current=t;try{e.current&&e.current.contentWindow&&e.current.contentWindow.postMessage(t.detail,"*")}catch(n){}},u=a.createElement("a",{href:t.source,className:"docs-demo-source",target:"_blank",title:"Demo Source"},"View Source"),k=a.createElement("div",{className:"docs-demo-device"},a.createElement("figure",null,a.createElement("svg",{className:"docs-demo-device__ios-notch",viewBox:"0 0 219 31"},a.createElement("path",{d:"M0 1V0h219v1a5 5 0 0 0-5 5v3c0 12.15-9.85 22-22 22H27C14.85 31 5 21.15 5 9V6a5 5 0 0 0-5-5z",fillRule:"evenodd"})),a.createElement("iframe",{loading:"lazy",onLoad:function(){l.current.forEach((function(t){return p(t)})),p(o.current),l.current=[],n.current=!0},src:""+t.url,ref:e})));return a.createElement("div",{className:"docs-demo"},k,t.source&&u)},d=function(t){var e=t.demoUrl.length>0;return a.createElement("div",{className:"docs-usage"},a.createElement("div",{className:"row"},e&&a.createElement("div",{className:"col col-auto"},a.createElement(o,{url:t.demoUrl,source:t.demoSourceUrl})),a.createElement("div",{className:"col"},t.children)))}},7554:function(t,e,n){n.r(e),n.d(e,{assets:function(){return c},contentTitle:function(){return k},default:function(){return b},frontMatter:function(){return u},metadata:function(){return m},toc:function(){return s}});var a=n(7462),r=n(3366),l=(n(7294),n(3905)),i=n(9877),o=n(8215),d=n(6306),p=["components"],u={title:"bkkr-card"},k=void 0,m={unversionedId:"components/card",id:"version-v5/components/card",title:"bkkr-card",description:"Usage",source:"@site/versioned_docs/version-v5/components/card.md",sourceDirName:"components",slug:"/components/card",permalink:"/bkkr-docs/v5/components/card",editUrl:"https://github.com/bkkr-team/bkkr-framework/edit/master/core/src/components/card/readme.md",tags:[],version:"v5",frontMatter:{title:"bkkr-card"},sidebar:"components",previous:{title:"bkkr-button",permalink:"/bkkr-docs/v5/components/button"},next:{title:"bkkr-card-content",permalink:"/bkkr-docs/v5/components/card-content"}},c={},s=[{value:"Usage",id:"usage",level:2},{value:"Properties",id:"properties",level:2},{value:"button",id:"button",level:3},{value:"color",id:"color",level:3},{value:"disabled",id:"disabled",level:3},{value:"download",id:"download",level:3},{value:"fill",id:"fill",level:3},{value:"href",id:"href",level:3},{value:"rel",id:"rel",level:3},{value:"routerDirection",id:"routerdirection",level:3},{value:"target",id:"target",level:3},{value:"type",id:"type",level:3},{value:"CSS Custom Properties",id:"css-custom-properties",level:2}],N={toc:s};function b(t){var e=t.components,n=(0,r.Z)(t,p);return(0,l.kt)("wrapper",(0,a.Z)({},N,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"usage"},"Usage"),(0,l.kt)(d.Z,{demoUrl:"/bkkr-docs/demo/card/index.html",demoSourceUrl:"https://github.com/bkkr-team/bkkr-docs/tree/master/static/demo/card/index.html",mdxType:"DocsUsage"},(0,l.kt)(i.Z,{groupId:"framework",defaultValue:"angular",values:[{value:"angular",label:"Angular"},{value:"javascript",label:"Javascript"}],mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"angular",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- Default --\x3e\n<bkkr-card>\n  <bkkr-card-header>\n    <bkkr-card-subtitle>Card Subtitle</bkkr-card-subtitle>\n    <h2 class="mb-0 text-bold">Card Title</h2>\n  </bkkr-card-header>\n\n  <bkkr-card-content>\n    Keep close to Nature\'s heart... and break clear away, once in awhile,\n    and climb a mountain or spend a week in the woods. Wash your spirit clean.\n  </bkkr-card-content>\n</bkkr-card>\n\n\x3c!-- Item in card --\x3e\n<bkkr-card>\n  <bkkr-item>\n    <bkkr-icon name="thumbtack" slot="start"></bkkr-icon>\n    <bkkr-label>bkkr-item in a card, icon left, button right</bkkr-label>\n    <bkkr-button fill="outline" slot="end">View</bkkr-button>\n  </bkkr-item>\n\n  <bkkr-card-content>\n    This is content, without any paragraph or header tags,\n    within an bkkr-card-content element.\n  </bkkr-card-content>\n</bkkr-card>\n'))),(0,l.kt)(o.Z,{value:"javascript",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- Default --\x3e\n<bkkr-card>\n  <bkkr-card-header>\n    <bkkr-card-subtitle>Card Subtitle</bkkr-card-subtitle>\n    <h2 class="mb-0 text-bold">Card Title</h2>\n  </bkkr-card-header>\n\n  <bkkr-card-content>\n    Keep close to Nature\'s heart... and break clear away, once in awhile,\n    and climb a mountain or spend a week in the woods. Wash your spirit clean.\n  </bkkr-card-content>\n</bkkr-card>\n\n\x3c!-- Item in card --\x3e\n<bkkr-card>\n  <bkkr-item>\n    <bkkr-icon name="thumbtack" slot="start"></bkkr-icon>\n    <bkkr-label>bkkr-item in a card, icon left, button right</bkkr-label>\n    <bkkr-button fill="outline" slot="end">View</bkkr-button>\n  </bkkr-item>\n\n  <bkkr-card-content>\n    This is content, without any paragraph or header tags,\n    within an bkkr-card-content element.\n  </bkkr-card-content>\n</bkkr-card>\n'))))),(0,l.kt)("h2",{id:"properties"},"Properties"),(0,l.kt)("h3",{id:"button"},"button"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Description")),(0,l.kt)("td",{parentName:"tr",align:null},"If ",(0,l.kt)("inlineCode",{parentName:"td"},"true"),", a button tag will be rendered and the card will be tappable.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Attribute")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"button"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Type")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"boolean"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Default")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false"))))),(0,l.kt)("h3",{id:"color"},"color"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Description")),(0,l.kt)("td",{parentName:"tr",align:null},"The color to use from your application's color palette.",(0,l.kt)("br",null),"Default options are: ",(0,l.kt)("inlineCode",{parentName:"td"},'"primary"'),", ",(0,l.kt)("inlineCode",{parentName:"td"},'"secondary"'),", ",(0,l.kt)("inlineCode",{parentName:"td"},'"tertiary"'),", ",(0,l.kt)("inlineCode",{parentName:"td"},'"success"'),", ",(0,l.kt)("inlineCode",{parentName:"td"},'"warning"'),", ",(0,l.kt)("inlineCode",{parentName:"td"},'"danger"'),", ",(0,l.kt)("inlineCode",{parentName:"td"},'"light"'),", ",(0,l.kt)("inlineCode",{parentName:"td"},'"medium"'),", and ",(0,l.kt)("inlineCode",{parentName:"td"},'"dark"'),".",(0,l.kt)("br",null),"For more information on colors, see ",(0,l.kt)("a",{parentName:"td",href:"/docs/theming/basics"},"theming"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Attribute")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"color"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Type")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string \uff5c undefined"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Default")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"undefined"))))),(0,l.kt)("h3",{id:"disabled"},"disabled"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Description")),(0,l.kt)("td",{parentName:"tr",align:null},"If ",(0,l.kt)("inlineCode",{parentName:"td"},"true"),", the user cannot interact with the card.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Attribute")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"disabled"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Type")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"boolean"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Default")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false"))))),(0,l.kt)("h3",{id:"download"},"download"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Description")),(0,l.kt)("td",{parentName:"tr",align:null},"This attribute instructs browsers to download a URL instead of navigating to",(0,l.kt)("br",null),"it, so the user will be prompted to save it as a local file. If the attribute",(0,l.kt)("br",null),"has a value, it is used as the pre-filled file name in the Save prompt",(0,l.kt)("br",null),"(the user can still change the file name if they want).")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Attribute")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"download"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Type")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string \uff5c undefined"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Default")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"undefined"))))),(0,l.kt)("h3",{id:"fill"},"fill"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Description")),(0,l.kt)("td",{parentName:"tr",align:null},"Set to ",(0,l.kt)("inlineCode",{parentName:"td"},'"elevated"')," for a elevated card, ",(0,l.kt)("inlineCode",{parentName:"td"},'"outline"')," for a transparent",(0,l.kt)("br",null),"card with a border, or to ",(0,l.kt)("inlineCode",{parentName:"td"},'"solid"'),". The default style is ",(0,l.kt)("inlineCode",{parentName:"td"},'"elevated"'),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Attribute")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"fill"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Type")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'"elevated" \uff5c "outline" \uff5c "solid" \uff5c undefined'))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Default")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"undefined"))))),(0,l.kt)("h3",{id:"href"},"href"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Description")),(0,l.kt)("td",{parentName:"tr",align:null},"Contains a URL or a URL fragment that the hyperlink points to.",(0,l.kt)("br",null),"If this property is set, an anchor tag will be rendered.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Attribute")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"href"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Type")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string \uff5c undefined"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Default")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"undefined"))))),(0,l.kt)("h3",{id:"rel"},"rel"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Description")),(0,l.kt)("td",{parentName:"tr",align:null},"Specifies the relationship of the target object to the link object.",(0,l.kt)("br",null),"The value is a space-separated list of ",(0,l.kt)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Link_types"},"link types"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Attribute")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"rel"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Type")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string \uff5c undefined"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Default")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"undefined"))))),(0,l.kt)("h3",{id:"routerdirection"},"routerDirection"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Description")),(0,l.kt)("td",{parentName:"tr",align:null},"When using a router, it specifies the transition direction when navigating to",(0,l.kt)("br",null),"another page using ",(0,l.kt)("inlineCode",{parentName:"td"},"href"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Attribute")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"router-direction"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Type")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'"back" \uff5c "forward" \uff5c "root"'))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Default")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"'forward'"))))),(0,l.kt)("h3",{id:"target"},"target"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Description")),(0,l.kt)("td",{parentName:"tr",align:null},"Specifies where to display the linked URL.",(0,l.kt)("br",null),"Only applies when an ",(0,l.kt)("inlineCode",{parentName:"td"},"href")," is provided.",(0,l.kt)("br",null),"Special keywords: ",(0,l.kt)("inlineCode",{parentName:"td"},'"_blank"'),", ",(0,l.kt)("inlineCode",{parentName:"td"},'"_self"'),", ",(0,l.kt)("inlineCode",{parentName:"td"},'"_parent"'),", ",(0,l.kt)("inlineCode",{parentName:"td"},'"_top"'),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Attribute")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"target"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Type")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string \uff5c undefined"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Default")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"undefined"))))),(0,l.kt)("h3",{id:"type"},"type"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Description")),(0,l.kt)("td",{parentName:"tr",align:null},"The type of the button. Only used when an ",(0,l.kt)("inlineCode",{parentName:"td"},"onclick")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"button")," property is present.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Attribute")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"type"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Type")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'"button" \uff5c "reset" \uff5c "submit"'))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Default")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"'button'"))))),(0,l.kt)("h2",{id:"css-custom-properties"},"CSS Custom Properties"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--background")),(0,l.kt)("td",{parentName:"tr",align:null},"Background of the card")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--border-color")),(0,l.kt)("td",{parentName:"tr",align:null},"Border color of the card")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--border-radius")),(0,l.kt)("td",{parentName:"tr",align:null},"Border radius of the card")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--border-style")),(0,l.kt)("td",{parentName:"tr",align:null},"Border style of the card")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--border-width")),(0,l.kt)("td",{parentName:"tr",align:null},"Border width of the card")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--box-shadow")),(0,l.kt)("td",{parentName:"tr",align:null},"Box shadow of the card")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--box-shadow-active")),(0,l.kt)("td",{parentName:"tr",align:null},"Box shadow when pressed.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--color")),(0,l.kt)("td",{parentName:"tr",align:null},"Color of the card")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--overflow")),(0,l.kt)("td",{parentName:"tr",align:null},"Overflow of the card.")))))}b.isMDXComponent=!0}}]);