"use strict";(self.webpackChunkbkkr_docs=self.webpackChunkbkkr_docs||[]).push([[377],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return c}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=s(r),c=a,k=m["".concat(u,".").concat(c)]||m[c]||d[c]||l;return r?n.createElement(k,o(o({ref:t},p),{},{components:r})):n.createElement(k,o({ref:t},p))}));function c(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var s=2;s<l;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8215:function(e,t,r){r.d(t,{Z:function(){return a}});var n=r(7294);function a(e){var t=e.children,r=e.hidden,a=e.className;return n.createElement("div",{role:"tabpanel",hidden:r,className:a},t)}},9877:function(e,t,r){r.d(t,{Z:function(){return p}});var n=r(7462),a=r(7294),l=r(2389),o=r(5979),i=r(6010),u="tabItem_LplD";function s(e){var t,r,l,s=e.lazy,p=e.block,d=e.defaultValue,m=e.values,c=e.groupId,k=e.className,b=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=m?m:b.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),f=(0,o.lx)(g,(function(e,t){return e.value===t.value}));if(f.length>0)throw new Error('Docusaurus error: Duplicate values "'+f.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var N=null===d?d:null!=(t=null!=d?d:null==(r=b.find((function(e){return e.props.default})))?void 0:r.props.value)?t:null==(l=b[0])?void 0:l.props.value;if(null!==N&&!g.some((function(e){return e.value===N})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+N+'" but none of its children has the corresponding value. Available values are: '+g.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var v=(0,o.UB)(),h=v.tabGroupChoices,y=v.setTabGroupChoices,C=(0,a.useState)(N),w=C[0],x=C[1],E=[],T=(0,o.o5)().blockElementScrollPositionUntilNextRender;if(null!=c){var D=h[c];null!=D&&D!==w&&g.some((function(e){return e.value===D}))&&x(D)}var O=function(e){var t=e.currentTarget,r=E.indexOf(t),n=g[r].value;n!==w&&(T(t),x(n),null!=c&&y(c,n))},P=function(e){var t,r=null;switch(e.key){case"ArrowRight":var n=E.indexOf(e.currentTarget)+1;r=E[n]||E[0];break;case"ArrowLeft":var a=E.indexOf(e.currentTarget)-1;r=E[a]||E[E.length-1]}null==(t=r)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":p},k)},g.map((function(e){var t=e.value,r=e.label,l=e.attributes;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:function(e){return E.push(e)},onKeyDown:P,onFocus:O,onClick:O},l,{className:(0,i.Z)("tabs__item",u,null==l?void 0:l.className,{"tabs__item--active":w===t})}),null!=r?r:t)}))),s?(0,a.cloneElement)(b.filter((function(e){return e.props.value===w}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},b.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==w})}))))}function p(e){var t=(0,l.Z)();return a.createElement(s,(0,n.Z)({key:String(t)},e))}},6306:function(e,t,r){r.d(t,{Z:function(){return u}});var n=r(7294),a=r(5861),l=r(7757),o=r.n(l),i=function(e){var t=(0,n.useRef)(null),r=(0,n.useRef)(!1),l=(0,n.useRef)([]),i=(0,n.useRef)(null);(0,n.useEffect)((function(){window.addEventListener("demoMessage",u)}),[]);var u=(0,n.useCallback)(function(){var e=(0,a.Z)(o().mark((function e(t){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r.current?s(t):l.current.push(t);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[]),s=function(e){i.current=e;try{t.current&&t.current.contentWindow&&t.current.contentWindow.postMessage(e.detail,"*")}catch(r){}},p=n.createElement("a",{href:e.source,className:"docs-demo-source",target:"_blank",title:"Demo Source"},"View Source"),d=n.createElement("div",{className:"docs-demo-device"},n.createElement("figure",null,n.createElement("svg",{className:"docs-demo-device__ios-notch",viewBox:"0 0 219 31"},n.createElement("path",{d:"M0 1V0h219v1a5 5 0 0 0-5 5v3c0 12.15-9.85 22-22 22H27C14.85 31 5 21.15 5 9V6a5 5 0 0 0-5-5z",fillRule:"evenodd"})),n.createElement("iframe",{loading:"lazy",onLoad:function(){l.current.forEach((function(e){return s(e)})),s(i.current),l.current=[],r.current=!0},src:""+e.url,ref:t})));return n.createElement("div",{className:"docs-demo"},d,e.source&&p)},u=function(e){var t=e.demoUrl.length>0;return n.createElement("div",{className:"docs-usage"},n.createElement("div",{className:"row"},t&&n.createElement("div",{className:"col col-auto"},n.createElement(i,{url:e.demoUrl,source:e.demoSourceUrl})),n.createElement("div",{className:"col"},e.children)))}},6474:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return d},default:function(){return g},frontMatter:function(){return p},metadata:function(){return m},toc:function(){return k}});var n=r(7462),a=r(3366),l=(r(7294),r(3905)),o=r(9877),i=r(8215),u=r(6306),s=["components"],p={title:"bkkr-progress-bar"},d=void 0,m={unversionedId:"components/progress-bar",id:"components/progress-bar",title:"bkkr-progress-bar",description:"Usage",source:"@site/docs/components/progress-bar.md",sourceDirName:"components",slug:"/components/progress-bar",permalink:"/bkkr-docs/components/progress-bar",editUrl:"https://github.com/bkkr-team/bkkr-framework/edit/master/core/src/components/progress-bar/readme.md",tags:[],version:"current",frontMatter:{title:"bkkr-progress-bar"},sidebar:"components",previous:{title:"bkkr-loading",permalink:"/bkkr-docs/components/loading"},next:{title:"bkkr-skeleton",permalink:"/bkkr-docs/components/skeleton"}},c={},k=[{value:"Usage",id:"usage",level:2},{value:"Properties",id:"properties",level:2},{value:"buffer",id:"buffer",level:3},{value:"color",id:"color",level:3},{value:"reversed",id:"reversed",level:3},{value:"type",id:"type",level:3},{value:"value",id:"value",level:3},{value:"CSS Custom Properties",id:"css-custom-properties",level:2}],b={toc:k};function g(e){var t=e.components,r=(0,a.Z)(e,s);return(0,l.kt)("wrapper",(0,n.Z)({},b,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"usage"},"Usage"),(0,l.kt)(u.Z,{demoUrl:"/bkkr-docs/demo/progress-bar/index.html",demoSourceUrl:"https://github.com/bkkr-team/bkkr-docs/tree/master/static/demo/progress-bar/index.html",mdxType:"DocsUsage"},(0,l.kt)(o.Z,{groupId:"framework",defaultValue:"angular",values:[{value:"angular",label:"Angular"},{value:"javascript",label:"Javascript"}],mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"angular",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- Default Progressbar --\x3e\n<bkkr-progress-bar></bkkr-progress-bar>\n\n\x3c!-- Default Progressbar with 50 percent --\x3e\n<bkkr-progress-bar [value]="0.5"></bkkr-progress-bar>\n\n\x3c!-- Colorize Progressbar --\x3e\n<bkkr-progress-bar color="primary" [value]="0.5"></bkkr-progress-bar>\n<bkkr-progress-bar color="secondary" [value]="0.5"></bkkr-progress-bar>\n\n\x3c!-- Other types --\x3e\n<bkkr-progress-bar [value]="0.25" [buffer]="0.5"></bkkr-progress-bar>\n<bkkr-progress-bar type="indeterminate"></bkkr-progress-bar>\n<bkkr-progress-bar type="indeterminate" reversed="true"></bkkr-progress-bar>\n'))),(0,l.kt)(i.Z,{value:"javascript",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- Default Progressbar --\x3e\n<bkkr-progress-bar></bkkr-progress-bar>\n\n\x3c!-- Default Progressbar with 50 percent --\x3e\n<bkkr-progress-bar value="0.5"></bkkr-progress-bar>\n\n\x3c!-- Colorize Progressbar --\x3e\n<bkkr-progress-bar color="primary" value="0.5"></bkkr-progress-bar>\n<bkkr-progress-bar color="secondary" value="0.5"></bkkr-progress-bar>\n\n\x3c!-- Other types --\x3e\n<bkkr-progress-bar value="0.25" buffer="0.5"></bkkr-progress-bar>\n<bkkr-progress-bar type="indeterminate"></bkkr-progress-bar>\n<bkkr-progress-bar type="indeterminate" reversed="true"></bkkr-progress-bar>\n'))))),(0,l.kt)("h2",{id:"properties"},"Properties"),(0,l.kt)("h3",{id:"buffer"},"buffer"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Description")),(0,l.kt)("td",{parentName:"tr",align:null},"If the buffer and value are smaller than 1, the buffer circles will show.",(0,l.kt)("br",null),"The buffer should be between ","[0, 1]",".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Attribute")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"buffer"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Type")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"number"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Default")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"1"))))),(0,l.kt)("h3",{id:"color"},"color"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Description")),(0,l.kt)("td",{parentName:"tr",align:null},"The color to use from your application's color palette.",(0,l.kt)("br",null),"Default options are: ",(0,l.kt)("inlineCode",{parentName:"td"},'"primary"'),", ",(0,l.kt)("inlineCode",{parentName:"td"},'"secondary"'),", ",(0,l.kt)("inlineCode",{parentName:"td"},'"tertiary"'),", ",(0,l.kt)("inlineCode",{parentName:"td"},'"success"'),", ",(0,l.kt)("inlineCode",{parentName:"td"},'"warning"'),", ",(0,l.kt)("inlineCode",{parentName:"td"},'"danger"'),", ",(0,l.kt)("inlineCode",{parentName:"td"},'"light"'),", ",(0,l.kt)("inlineCode",{parentName:"td"},'"medium"'),", and ",(0,l.kt)("inlineCode",{parentName:"td"},'"dark"'),".",(0,l.kt)("br",null),"For more information on colors, see ",(0,l.kt)("a",{parentName:"td",href:"/docs/theming/basics"},"theming"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Attribute")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"color"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Type")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string \uff5c undefined"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Default")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"undefined"))))),(0,l.kt)("h3",{id:"reversed"},"reversed"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Description")),(0,l.kt)("td",{parentName:"tr",align:null},"If true, reverse the progress bar direction.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Attribute")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"reversed"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Type")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"boolean"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Default")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false"))))),(0,l.kt)("h3",{id:"type"},"type"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Description")),(0,l.kt)("td",{parentName:"tr",align:null},"The state of the progress bar, based on if the time the process takes is known or not.",(0,l.kt)("br",null),"Default options are: ",(0,l.kt)("inlineCode",{parentName:"td"},'"determinate"')," (no animation), ",(0,l.kt)("inlineCode",{parentName:"td"},'"indeterminate"')," (animate from left to right).")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Attribute")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"type"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Type")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'"determinate" \uff5c "indeterminate"'))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Default")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"'determinate'"))))),(0,l.kt)("h3",{id:"value"},"value"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Description")),(0,l.kt)("td",{parentName:"tr",align:null},"The value determines how much of the active bar should display when the",(0,l.kt)("br",null),(0,l.kt)("inlineCode",{parentName:"td"},"type")," is ",(0,l.kt)("inlineCode",{parentName:"td"},'"determinate"'),".",(0,l.kt)("br",null),"The value should be between ","[0, 1]",".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Attribute")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"value"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Type")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"number"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Default")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"0"))))),(0,l.kt)("h2",{id:"css-custom-properties"},"CSS Custom Properties"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--background")),(0,l.kt)("td",{parentName:"tr",align:null},"Same as --buffer-background when using a determinate progress bar, otherwise it styles the background of the bkkr-progress-bar itself.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--buffer-background")),(0,l.kt)("td",{parentName:"tr",align:null},"Color of the buffer bar")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--progress-background")),(0,l.kt)("td",{parentName:"tr",align:null},"Color of the progress bar")))))}g.isMDXComponent=!0}}]);