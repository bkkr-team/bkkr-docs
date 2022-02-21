"use strict";(self.webpackChunkbkkr_docs=self.webpackChunkbkkr_docs||[]).push([[6603],{1156:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return p},contentTitle:function(){return m},metadata:function(){return N},toc:function(){return s},default:function(){return g}});var a=n(7462),l=n(3366),r=(n(7294),n(3905)),i=n(9877),d=n(8215),o=n(682),k=["components"],p={title:"bkkr-infinite-scroll"},m=void 0,N={unversionedId:"components/infinite-scroll",id:"components/infinite-scroll",title:"bkkr-infinite-scroll",description:"Usage",source:"@site/docs/components/infinite-scroll.md",sourceDirName:"components",slug:"/components/infinite-scroll",permalink:"/bkkr-docs/components/infinite-scroll",editUrl:"https://github.com/bkkr-team/bkkr-framework/edit/master/core/src/components/infinite-scroll/readme.md",tags:[],version:"current",frontMatter:{title:"bkkr-infinite-scroll"},sidebar:"components",previous:{title:"bkkr-paginator",permalink:"/bkkr-docs/components/paginator"},next:{title:"bkkr-popover",permalink:"/bkkr-docs/components/popover"}},s=[{value:"Usage",id:"usage",children:[],level:2},{value:"Properties",id:"properties",children:[{value:"animated",id:"animated",children:[],level:3},{value:"buttonText",id:"buttontext",children:[],level:3},{value:"disabled",id:"disabled",children:[],level:3},{value:"infinite",id:"infinite",children:[],level:3},{value:"items",id:"items",children:[],level:3},{value:"length",id:"length",children:[],level:3},{value:"loadingText",id:"loadingtext",children:[],level:3},{value:"page",id:"page",children:[],level:3},{value:"position",id:"position",children:[],level:3},{value:"spinner",id:"spinner",children:[],level:3},{value:"threshold",id:"threshold",children:[],level:3}],level:2},{value:"Events",id:"events",children:[],level:2},{value:"Methods",id:"methods",children:[{value:"complete",id:"complete",children:[],level:3}],level:2}],u={toc:s};function g(t){var e=t.components,n=(0,l.Z)(t,k);return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)(o.Z,{demoUrl:"/bkkr-docs/demo/infinite-scroll/index.html",demoSourceUrl:"https://github.com/bkkr-team/bkkr-docs/tree/master/static/demo/infinite-scroll/index.html",mdxType:"DocsUsage"},(0,r.kt)(i.Z,{groupId:"framework",defaultValue:"angular",values:[{value:"angular",label:"Angular"},{value:"javascript",label:"Javascript"}],mdxType:"Tabs"},(0,r.kt)(d.Z,{value:"angular",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<bkkr-content>\n    <bkkr-container class="mb-3">\n        <bkkr-button (click)="toggleinfinite-scroll()" expand="block">\n            Toggle Infinite Scroll\n        </bkkr-button>\n    </bkkr-container>\n\n    <bkkr-infinite-scroll threshold="100px" infinite="true"  items="110" length="10" page="7" (bkkrinfinite-scroll)="loadData($event)">\n        <bkkr-list id="list">\n        </bkkr-list>\n    </bkkr-infinite-scroll>\n</bkkr-content>\n'))),(0,r.kt)(d.Z,{value:"javascript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<bkkr-content>\n    <bkkr-container class="mb-3">\n        <bkkr-button onClick="toggleinfinite-scroll()" expand="block">\n            Toggle Infinite Scroll\n        </bkkr-button>\n    </bkkr-container>\n\n    <bkkr-infinite-scroll threshold="100px" infinite="true" id="infinite-scroll" items="110" length="10" page="7">\n        <bkkr-list id="list">\n        </bkkr-list>\n    </bkkr-infinite-scroll>\n</bkkr-content>\n\n<script>\n    const infinite-scroll = document.getElementById(\'infinite-scroll\');\n\n    function toggleinfinite-scroll() {\n      infinite-scroll.disabled = !infinite-scroll.disabled;\n    }\n\n    infinite-scroll.addEventListener(\'bkkrinfinite-scroll\', async function () {\n      console.log(\'Loading data...\');\n      await wait(500);\n      infinite-scroll.complete();\n      appendItems();\n\n      console.log(\'Done\');\n    });\n<\/script>\n'))))),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("h3",{id:"animated"},"animated"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null}))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Description")),(0,r.kt)("td",{parentName:"tr",align:null},"Animate loading indication.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Attribute")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"animated"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Type")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"boolean"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Default")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"true"))))),(0,r.kt)("h3",{id:"buttontext"},"buttonText"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null}))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Description")),(0,r.kt)("td",{parentName:"tr",align:null},"Text to display on 'Show more' button.",(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"td"},"buttonText")," can accept either plaintext or HTML as a string.",(0,r.kt)("br",null),"To display characters normally reserved for HTML, they",(0,r.kt)("br",null),"must be escaped. For example ",(0,r.kt)("inlineCode",{parentName:"td"},"<Bkkr>")," would become",(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"td"},"&lt;Bkkr&gt;"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Attribute")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"button-text"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Type")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"SafeString \uff5c string \uff5c undefined"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Default")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"'Show more'"))))),(0,r.kt)("h3",{id:"disabled"},"disabled"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null}))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Description")),(0,r.kt)("td",{parentName:"tr",align:null},"If ",(0,r.kt)("inlineCode",{parentName:"td"},"true"),", the infinite scroll will be hidden and scroll event listeners",(0,r.kt)("br",null),"will be removed.",(0,r.kt)("br",null),(0,r.kt)("br",null),"Set this to true to disable the infinite scroll from actively",(0,r.kt)("br",null),"trying to receive new data while scrolling. This is useful",(0,r.kt)("br",null),"when it is known that there is no more data that can be added, and",(0,r.kt)("br",null),"the infinite scroll is no longer needed.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Attribute")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"disabled"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Type")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"boolean"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Default")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false"))))),(0,r.kt)("h3",{id:"infinite"},"infinite"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null}))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Description")),(0,r.kt)("td",{parentName:"tr",align:null},"Enable  infinite loading.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Attribute")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"infinite"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Type")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"boolean"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Default")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false"))))),(0,r.kt)("h3",{id:"items"},"items"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null}))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Description")),(0,r.kt)("td",{parentName:"tr",align:null},"Number of items.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Attribute")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"items"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Type")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"number"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Default")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"0"))))),(0,r.kt)("h3",{id:"length"},"length"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null}))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Description")),(0,r.kt)("td",{parentName:"tr",align:null},"Length of the page.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Attribute")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"length"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Type")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"number"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Default")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"0"))))),(0,r.kt)("h3",{id:"loadingtext"},"loadingText"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null}))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Description")),(0,r.kt)("td",{parentName:"tr",align:null},"Optional text to display while loading.",(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"td"},"loadingText")," can accept either plaintext or HTML as a string.",(0,r.kt)("br",null),"To display characters normally reserved for HTML, they",(0,r.kt)("br",null),"must be escaped. For example ",(0,r.kt)("inlineCode",{parentName:"td"},"<Bkkr>")," would become",(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"td"},"&lt;Bkkr&gt;"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Attribute")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"loading-text"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Type")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"SafeString \uff5c string \uff5c undefined"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Default")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"undefined"))))),(0,r.kt)("h3",{id:"page"},"page"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null}))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Description")),(0,r.kt)("td",{parentName:"tr",align:null},"The currently displayed page.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Attribute")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"page"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Type")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"number"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Default")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"1"))))),(0,r.kt)("h3",{id:"position"},"position"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null}))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Description")),(0,r.kt)("td",{parentName:"tr",align:null},"The position of the infinite scroll element.",(0,r.kt)("br",null),"The value can be either ",(0,r.kt)("inlineCode",{parentName:"td"},"top")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"bottom"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Attribute")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"position"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Type")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"bottom" \uff5c "top"'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Default")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"'bottom'"))))),(0,r.kt)("h3",{id:"spinner"},"spinner"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null}))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Description")),(0,r.kt)("td",{parentName:"tr",align:null},"An animated SVG spinner that shows while loading.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Attribute")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"spinner"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Type")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"circles" \uff5c "circular" \uff5c "crescent" \uff5c "dots" \uff5c "lines" \uff5c "lines-sharp" \uff5c "lines-sharp-small" \uff5c "lines-small" \uff5c undefined'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Default")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"undefined"))))),(0,r.kt)("h3",{id:"threshold"},"threshold"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null}))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Description")),(0,r.kt)("td",{parentName:"tr",align:null},"The threshold distance from the bottom",(0,r.kt)("br",null),"of the content to call the ",(0,r.kt)("inlineCode",{parentName:"td"},"infinite")," output event when scrolled.",(0,r.kt)("br",null),"The threshold value can be either a percent, or",(0,r.kt)("br",null),"in pixels. For example, use the value of ",(0,r.kt)("inlineCode",{parentName:"td"},"10%")," for the ",(0,r.kt)("inlineCode",{parentName:"td"},"infinite"),(0,r.kt)("br",null),"output event to get called when the user has scrolled 10%",(0,r.kt)("br",null),"from the bottom of the page. Use the value ",(0,r.kt)("inlineCode",{parentName:"td"},"100px")," when the",(0,r.kt)("br",null),"scroll is within 100 pixels from the bottom of the page.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Attribute")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"threshold"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Type")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Default")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"'15%'"))))),(0,r.kt)("h2",{id:"events"},"Events"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"bkkrInfinite")),(0,r.kt)("td",{parentName:"tr",align:null},"Emitted when the scroll reaches")))),(0,r.kt)("p",null,"the threshold distance, or stepper have changed. From within your infinite handler,\nyou must call the infinite scroll's ",(0,r.kt)("inlineCode",{parentName:"p"},"complete()")," method when\nyour async operation has completed. |\n| ",(0,r.kt)("inlineCode",{parentName:"p"},"bkkrPageSizeChanged")," | Emitted when page size have changed. |"),(0,r.kt)("h2",{id:"methods"},"Methods"),(0,r.kt)("h3",{id:"complete"},"complete"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null}))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Description")),(0,r.kt)("td",{parentName:"tr",align:null},"Call ",(0,r.kt)("inlineCode",{parentName:"td"},"complete()")," within the ",(0,r.kt)("inlineCode",{parentName:"td"},"ionInfinite")," output event handler when",(0,r.kt)("br",null),"your async operation has completed. For example, the ",(0,r.kt)("inlineCode",{parentName:"td"},"loading"),(0,r.kt)("br",null),"state is while the app is performing an asynchronous operation,",(0,r.kt)("br",null),"such as receiving more data from an AJAX request to add more items",(0,r.kt)("br",null),"to a data list. Once the data has been received and UI updated, you",(0,r.kt)("br",null),"then call this method to signify that the loading has completed.",(0,r.kt)("br",null),"This method will change the infinite scroll's state from ",(0,r.kt)("inlineCode",{parentName:"td"},"loading"),(0,r.kt)("br",null),"to ",(0,r.kt)("inlineCode",{parentName:"td"},"enabled"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Signature")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"complete() => Promise<void>"))))))}g.isMDXComponent=!0}}]);