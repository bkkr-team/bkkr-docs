"use strict";(self.webpackChunkbkkr_docs=self.webpackChunkbkkr_docs||[]).push([[3015],{3905:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return N}});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var d=a.createContext({}),k=function(t){var e=a.useContext(d),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},p=function(t){var e=k(t.components);return a.createElement(d.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,d=t.parentName,p=i(t,["components","mdxType","originalType","parentName"]),m=k(n),N=r,s=m["".concat(d,".").concat(N)]||m[N]||u[N]||l;return n?a.createElement(s,o(o({ref:e},p),{},{components:n})):a.createElement(s,o({ref:e},p))}));function N(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var d in e)hasOwnProperty.call(e,d)&&(i[d]=e[d]);i.originalType=t,i.mdxType="string"==typeof t?t:r,o[1]=i;for(var k=2;k<l;k++)o[k]=n[k];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8215:function(t,e,n){n.d(e,{Z:function(){return r}});var a=n(7294);function r(t){var e=t.children,n=t.hidden,r=t.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},e)}},9877:function(t,e,n){n.d(e,{Z:function(){return p}});var a=n(7462),r=n(7294),l=n(2389),o=n(5979),i=n(6010),d="tabItem_LplD";function k(t){var e,n,l,k=t.lazy,p=t.block,u=t.defaultValue,m=t.values,N=t.groupId,s=t.className,b=r.Children.map(t.children,(function(t){if((0,r.isValidElement)(t)&&void 0!==t.props.value)return t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof t.type?t.type:t.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),c=null!=m?m:b.map((function(t){var e=t.props;return{value:e.value,label:e.label,attributes:e.attributes}})),g=(0,o.lx)(c,(function(t,e){return t.value===e.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(t){return t.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var h=null===u?u:null!=(e=null!=u?u:null==(n=b.find((function(t){return t.props.default})))?void 0:n.props.value)?e:null==(l=b[0])?void 0:l.props.value;if(null!==h&&!c.some((function(t){return t.value===h})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+h+'" but none of its children has the corresponding value. Available values are: '+c.map((function(t){return t.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var f=(0,o.UB)(),y=f.tabGroupChoices,v=f.setTabGroupChoices,C=(0,r.useState)(h),w=C[0],x=C[1],T=[],D=(0,o.o5)().blockElementScrollPositionUntilNextRender;if(null!=N){var E=y[N];null!=E&&E!==w&&c.some((function(t){return t.value===E}))&&x(E)}var O=function(t){var e=t.currentTarget,n=T.indexOf(e),a=c[n].value;a!==w&&(D(e),x(a),null!=N&&v(N,a))},S=function(t){var e,n=null;switch(t.key){case"ArrowRight":var a=T.indexOf(t.currentTarget)+1;n=T[a]||T[0];break;case"ArrowLeft":var r=T.indexOf(t.currentTarget)-1;n=T[r]||T[T.length-1]}null==(e=n)||e.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":p},s)},c.map((function(t){var e=t.value,n=t.label,l=t.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:w===e?0:-1,"aria-selected":w===e,key:e,ref:function(t){return T.push(t)},onKeyDown:S,onFocus:O,onClick:O},l,{className:(0,i.Z)("tabs__item",d,null==l?void 0:l.className,{"tabs__item--active":w===e})}),null!=n?n:e)}))),k?(0,r.cloneElement)(b.filter((function(t){return t.props.value===w}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},b.map((function(t,e){return(0,r.cloneElement)(t,{key:e,hidden:t.props.value!==w})}))))}function p(t){var e=(0,l.Z)();return r.createElement(k,(0,a.Z)({key:String(e)},t))}},6306:function(t,e,n){n.d(e,{Z:function(){return d}});var a=n(7294),r=n(5861),l=n(7757),o=n.n(l),i=function(t){var e=(0,a.useRef)(null),n=(0,a.useRef)(!1),l=(0,a.useRef)([]),i=(0,a.useRef)(null);(0,a.useEffect)((function(){window.addEventListener("demoMessage",d)}),[]);var d=(0,a.useCallback)(function(){var t=(0,r.Z)(o().mark((function t(e){return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n.current?k(e):l.current.push(e);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),[]),k=function(t){i.current=t;try{e.current&&e.current.contentWindow&&e.current.contentWindow.postMessage(t.detail,"*")}catch(n){}},p=a.createElement("a",{href:t.source,className:"docs-demo-source",target:"_blank",title:"Demo Source"},"View Source"),u=a.createElement("div",{className:"docs-demo-device"},a.createElement("figure",null,a.createElement("svg",{className:"docs-demo-device__ios-notch",viewBox:"0 0 219 31"},a.createElement("path",{d:"M0 1V0h219v1a5 5 0 0 0-5 5v3c0 12.15-9.85 22-22 22H27C14.85 31 5 21.15 5 9V6a5 5 0 0 0-5-5z",fillRule:"evenodd"})),a.createElement("iframe",{loading:"lazy",onLoad:function(){l.current.forEach((function(t){return k(t)})),k(i.current),l.current=[],n.current=!0},src:""+t.url,ref:e})));return a.createElement("div",{className:"docs-demo"},u,t.source&&p)},d=function(t){var e=t.demoUrl.length>0;return a.createElement("div",{className:"docs-usage"},a.createElement("div",{className:"row"},e&&a.createElement("div",{className:"col col-auto"},a.createElement(i,{url:t.demoUrl,source:t.demoSourceUrl})),a.createElement("div",{className:"col"},t.children)))}},5854:function(t,e,n){n.r(e),n.d(e,{assets:function(){return N},contentTitle:function(){return u},default:function(){return c},frontMatter:function(){return p},metadata:function(){return m},toc:function(){return s}});var a=n(7462),r=n(3366),l=(n(7294),n(3905)),o=n(9877),i=n(8215),d=n(6306),k=["components"],p={title:"bkkr-button"},u=void 0,m={unversionedId:"components/button",id:"version-v5/components/button",title:"bkkr-button",description:"Usage",source:"@site/versioned_docs/version-v5/components/button.md",sourceDirName:"components",slug:"/components/button",permalink:"/bkkr-docs/v5/components/button",editUrl:"https://github.com/bkkr-team/bkkr-framework/edit/master/core/src/components/button/readme.md",tags:[],version:"v5",frontMatter:{title:"bkkr-button"},sidebar:"components",previous:{title:"bkkr-breadcrumb",permalink:"/bkkr-docs/v5/components/breadcrumb"},next:{title:"bkkr-card",permalink:"/bkkr-docs/v5/components/card"}},N={},s=[{value:"Usage",id:"usage",level:2},{value:"Properties",id:"properties",level:2},{value:"color",id:"color",level:3},{value:"disabled",id:"disabled",level:3},{value:"download",id:"download",level:3},{value:"expand",id:"expand",level:3},{value:"fill",id:"fill",level:3},{value:"href",id:"href",level:3},{value:"rel",id:"rel",level:3},{value:"routerDirection",id:"routerdirection",level:3},{value:"shape",id:"shape",level:3},{value:"size",id:"size",level:3},{value:"target",id:"target",level:3},{value:"type",id:"type",level:3},{value:"Events",id:"events",level:2},{value:"CSS Shadow Parts",id:"css-shadow-parts",level:2},{value:"CSS Custom Properties",id:"css-custom-properties",level:2},{value:"Slots",id:"slots",level:2}],b={toc:s};function c(t){var e=t.components,n=(0,r.Z)(t,k);return(0,l.kt)("wrapper",(0,a.Z)({},b,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"usage"},"Usage"),(0,l.kt)(d.Z,{demoUrl:"/bkkr-docs/demo/button/index.html",demoSourceUrl:"https://github.com/bkkr-team/bkkr-docs/tree/master/static/demo/button/index.html",mdxType:"DocsUsage"},(0,l.kt)(o.Z,{groupId:"framework",defaultValue:"angular",values:[{value:"angular",label:"Angular"},{value:"javascript",label:"Javascript"}],mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"angular",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- Default --\x3e\n<bkkr-button>Default</bkkr-button>\n\n\x3c!-- Anchor --\x3e\n<bkkr-button href="#">Anchor</bkkr-button>\n\n\x3c!-- Colors --\x3e\n<bkkr-button color="primary">Primary</bkkr-button>\n\n\x3c!-- Expand --\x3e\n<bkkr-button expand="full">Full Button</bkkr-button>\n<bkkr-button expand="block">Block Button</bkkr-button>\n\n\x3c!-- Round --\x3e\n<bkkr-button shape="round">Round Button</bkkr-button>\n\n\x3c!-- Fill --\x3e\n<bkkr-button fill="clear">Clear</bkkr-button>\n<bkkr-button fill="outline">Outline</bkkr-button>\n<bkkr-button fill="solid">Solid</bkkr-button>\n\n\x3c!-- Icons --\x3e\n<bkkr-button>\n  <bkkr-icon slot="start" name="star"></bkkr-icon>\n  Left Icon\n</bkkr-button>\n\n<bkkr-button>\n  Right Icon\n  <bkkr-icon slot="end" name="star"></bkkr-icon>\n</bkkr-button>\n\n<bkkr-button>\n  <bkkr-icon slot="icon-only" name="star"></bkkr-icon>\n</bkkr-button>\n\n\x3c!-- Sizes --\x3e\n<bkkr-button size="large">Large</bkkr-button>\n<bkkr-button>Default</bkkr-button>\n<bkkr-button size="small">Small</bkkr-button>\n'))),(0,l.kt)(i.Z,{value:"javascript",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- Default --\x3e\n<bkkr-button>Default</bkkr-button>\n\n\x3c!-- Anchor --\x3e\n<bkkr-button href="#">Anchor</bkkr-button>\n\n\x3c!-- Colors --\x3e\n<bkkr-button color="primary">Primary</bkkr-button>\n\n\x3c!-- Expand --\x3e\n<bkkr-button expand="full">Full Button</bkkr-button>\n<bkkr-button expand="block">Block Button</bkkr-button>\n\n\x3c!-- Round --\x3e\n<bkkr-button shape="round">Round Button</bkkr-button>\n\n\x3c!-- Fill --\x3e\n<bkkr-button fill="clear">Clear</bkkr-button>\n<bkkr-button fill="outline">Outline</bkkr-button>\n<bkkr-button fill="solid">Solid</bkkr-button>\n\n\x3c!-- Icons --\x3e\n<bkkr-button>\n  <bkkr-icon slot="start" name="star"></bkkr-icon>\n  Left Icon\n</bkkr-button>\n\n<bkkr-button>\n  Right Icon\n  <bkkr-icon slot="end" name="star"></bkkr-icon>\n</bkkr-button>\n\n<bkkr-button>\n  <bkkr-icon slot="icon-only" name="star"></bkkr-icon>\n</bkkr-button>\n\n\x3c!-- Sizes --\x3e\n<bkkr-button size="large">Large</bkkr-button>\n<bkkr-button>Default</bkkr-button>\n<bkkr-button size="small">Small</bkkr-button>\n'))))),(0,l.kt)("h2",{id:"properties"},"Properties"),(0,l.kt)("h3",{id:"color"},"color"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Description")),(0,l.kt)("td",{parentName:"tr",align:null},"The color to use from your application's color palette.",(0,l.kt)("br",null),"Default options are: ",(0,l.kt)("inlineCode",{parentName:"td"},'"primary"'),", ",(0,l.kt)("inlineCode",{parentName:"td"},'"secondary"'),", ",(0,l.kt)("inlineCode",{parentName:"td"},'"tertiary"'),", ",(0,l.kt)("inlineCode",{parentName:"td"},'"success"'),", ",(0,l.kt)("inlineCode",{parentName:"td"},'"warning"'),", ",(0,l.kt)("inlineCode",{parentName:"td"},'"danger"'),", ",(0,l.kt)("inlineCode",{parentName:"td"},'"light"'),", ",(0,l.kt)("inlineCode",{parentName:"td"},'"medium"'),", and ",(0,l.kt)("inlineCode",{parentName:"td"},'"dark"'),".",(0,l.kt)("br",null),"For more information on colors, see ",(0,l.kt)("a",{parentName:"td",href:"/docs/theming/basics"},"theming"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Attribute")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"color"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Type")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string \uff5c undefined"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Default")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"undefined"))))),(0,l.kt)("h3",{id:"disabled"},"disabled"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Description")),(0,l.kt)("td",{parentName:"tr",align:null},"If ",(0,l.kt)("inlineCode",{parentName:"td"},"true"),", the user cannot interact with the button.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Attribute")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"disabled"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Type")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"boolean"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Default")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false"))))),(0,l.kt)("h3",{id:"download"},"download"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Description")),(0,l.kt)("td",{parentName:"tr",align:null},"This attribute instructs browsers to download a URL instead of navigating to",(0,l.kt)("br",null),"it, so the user will be prompted to save it as a local file. If the attribute",(0,l.kt)("br",null),"has a value, it is used as the pre-filled file name in the Save prompt",(0,l.kt)("br",null),"(the user can still change the file name if they want).")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Attribute")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"download"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Type")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string \uff5c undefined"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Default")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"undefined"))))),(0,l.kt)("h3",{id:"expand"},"expand"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Description")),(0,l.kt)("td",{parentName:"tr",align:null},"Set to ",(0,l.kt)("inlineCode",{parentName:"td"},'"block"')," for a full-width button or to ",(0,l.kt)("inlineCode",{parentName:"td"},'"full"')," for a full-width button",(0,l.kt)("br",null),"without left and right borders.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Attribute")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"expand"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Type")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'"block" \uff5c undefined'))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Default")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"undefined"))))),(0,l.kt)("h3",{id:"fill"},"fill"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Description")),(0,l.kt)("td",{parentName:"tr",align:null},"Set to ",(0,l.kt)("inlineCode",{parentName:"td"},'"clear"')," for a transparent button, to ",(0,l.kt)("inlineCode",{parentName:"td"},'"outline"')," for a transparent",(0,l.kt)("br",null),"button with a border, or to ",(0,l.kt)("inlineCode",{parentName:"td"},'"solid"'),". The default style is ",(0,l.kt)("inlineCode",{parentName:"td"},'"solid"')," except inside of",(0,l.kt)("br",null),"a toolbar, where the default is ",(0,l.kt)("inlineCode",{parentName:"td"},'"clear"'),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Attribute")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"fill"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Type")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'"clear" \uff5c "default" \uff5c "outline" \uff5c "solid" \uff5c undefined'))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Default")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"undefined"))))),(0,l.kt)("h3",{id:"href"},"href"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Description")),(0,l.kt)("td",{parentName:"tr",align:null},"Contains a URL or a URL fragment that the hyperlink points to.",(0,l.kt)("br",null),"If this property is set, an anchor tag will be rendered.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Attribute")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"href"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Type")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string \uff5c undefined"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Default")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"undefined"))))),(0,l.kt)("h3",{id:"rel"},"rel"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Description")),(0,l.kt)("td",{parentName:"tr",align:null},"Specifies the relationship of the target object to the link object.",(0,l.kt)("br",null),"The value is a space-separated list of ",(0,l.kt)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Link_types"},"link types"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Attribute")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"rel"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Type")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string \uff5c undefined"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Default")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"undefined"))))),(0,l.kt)("h3",{id:"routerdirection"},"routerDirection"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Description")),(0,l.kt)("td",{parentName:"tr",align:null},"When using a router, it specifies the transition direction when navigating to",(0,l.kt)("br",null),"another page using ",(0,l.kt)("inlineCode",{parentName:"td"},"href"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Attribute")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"router-direction"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Type")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'"back" \uff5c "forward" \uff5c "root"'))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Default")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"'forward'"))))),(0,l.kt)("h3",{id:"shape"},"shape"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Description")),(0,l.kt)("td",{parentName:"tr",align:null},"The button shape.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Attribute")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"shape"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Type")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'"round" \uff5c undefined'))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Default")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"undefined"))))),(0,l.kt)("h3",{id:"size"},"size"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Description")),(0,l.kt)("td",{parentName:"tr",align:null},"The button size.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Attribute")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"size"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Type")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'"default" \uff5c "large" \uff5c "small" \uff5c undefined'))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Default")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"undefined"))))),(0,l.kt)("h3",{id:"target"},"target"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Description")),(0,l.kt)("td",{parentName:"tr",align:null},"Specifies where to display the linked URL.",(0,l.kt)("br",null),"Only applies when an ",(0,l.kt)("inlineCode",{parentName:"td"},"href")," is provided.",(0,l.kt)("br",null),"Special keywords: ",(0,l.kt)("inlineCode",{parentName:"td"},'"_blank"'),", ",(0,l.kt)("inlineCode",{parentName:"td"},'"_self"'),", ",(0,l.kt)("inlineCode",{parentName:"td"},'"_parent"'),", ",(0,l.kt)("inlineCode",{parentName:"td"},'"_top"'),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Attribute")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"target"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Type")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string \uff5c undefined"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Default")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"undefined"))))),(0,l.kt)("h3",{id:"type"},"type"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Description")),(0,l.kt)("td",{parentName:"tr",align:null},"The type of the button.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Attribute")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"type"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Type")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'"button" \uff5c "reset" \uff5c "submit"'))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Default")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"'button'"))))),(0,l.kt)("h2",{id:"events"},"Events"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"bkkrBlur")),(0,l.kt)("td",{parentName:"tr",align:null},"Emitted when the button loses focus.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"bkkrFocus")),(0,l.kt)("td",{parentName:"tr",align:null},"Emitted when the button has focus.")))),(0,l.kt)("h2",{id:"css-shadow-parts"},"CSS Shadow Parts"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"native")),(0,l.kt)("td",{parentName:"tr",align:null},"The native HTML button or anchor element that wraps all child elements.")))),(0,l.kt)("h2",{id:"css-custom-properties"},"CSS Custom Properties"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--background")),(0,l.kt)("td",{parentName:"tr",align:null},"Background")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--background-active")),(0,l.kt)("td",{parentName:"tr",align:null},"Background when pressed.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--background-active-opacity")),(0,l.kt)("td",{parentName:"tr",align:null},"Opacity when pressed")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--background-focus")),(0,l.kt)("td",{parentName:"tr",align:null},"Background when focused with the tab key")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--background-focus-opacity")),(0,l.kt)("td",{parentName:"tr",align:null},"Opacity when focused with the tab key")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--background-hover")),(0,l.kt)("td",{parentName:"tr",align:null},"Background on hover")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--background-hover-opacity")),(0,l.kt)("td",{parentName:"tr",align:null},"Opacity of the background on hover")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--background-opacity")),(0,l.kt)("td",{parentName:"tr",align:null},"Background opacity")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--border-color")),(0,l.kt)("td",{parentName:"tr",align:null},"Border color")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--border-radius")),(0,l.kt)("td",{parentName:"tr",align:null},"Border radius")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--border-style")),(0,l.kt)("td",{parentName:"tr",align:null},"Border style")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--border-width")),(0,l.kt)("td",{parentName:"tr",align:null},"Border width")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--box-shadow")),(0,l.kt)("td",{parentName:"tr",align:null},"Box shadow")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--box-shadow-active")),(0,l.kt)("td",{parentName:"tr",align:null},"Box shadow when pressed.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--color")),(0,l.kt)("td",{parentName:"tr",align:null},"Text color")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--color-active")),(0,l.kt)("td",{parentName:"tr",align:null},"Text color when pressed")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--color-focus")),(0,l.kt)("td",{parentName:"tr",align:null},"Text color when focused with the tab key")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--color-hover")),(0,l.kt)("td",{parentName:"tr",align:null},"Text color when hover")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--cursot")),(0,l.kt)("td",{parentName:"tr",align:null},"Cursor type")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--opacity")),(0,l.kt)("td",{parentName:"tr",align:null},"Opacity")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--overflow")),(0,l.kt)("td",{parentName:"tr",align:null},"Overflow")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--padding-bottom")),(0,l.kt)("td",{parentName:"tr",align:null},"Bottom padding")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--padding-end")),(0,l.kt)("td",{parentName:"tr",align:null},"Right padding if direction is left-to-right, and left padding if direction is right-to-left")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--padding-start")),(0,l.kt)("td",{parentName:"tr",align:null},"Left padding if direction is left-to-right, and right padding if direction is right-to-left")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--padding-top")),(0,l.kt)("td",{parentName:"tr",align:null},"Top padding")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--transition")),(0,l.kt)("td",{parentName:"tr",align:null},"Transition")))),(0,l.kt)("h2",{id:"slots"},"Slots"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"``"),(0,l.kt)("td",{parentName:"tr",align:null},"Content is placed between the named slots if provided without a slot.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"end")),(0,l.kt)("td",{parentName:"tr",align:null},"Content is placed to the right of the button text in LTR, and to the left in RTL.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"icon-only")),(0,l.kt)("td",{parentName:"tr",align:null},"Should be used on an icon in a button that has no text.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"start")),(0,l.kt)("td",{parentName:"tr",align:null},"Content is placed to the left of the button text in LTR, and to the right in RTL.")))))}c.isMDXComponent=!0}}]);