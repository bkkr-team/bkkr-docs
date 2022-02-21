"use strict";(self.webpackChunkbkkr_docs=self.webpackChunkbkkr_docs||[]).push([[5991],{5439:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return b},contentTitle:function(){return m},metadata:function(){return p},toc:function(){return c},default:function(){return u}});var a=n(7462),r=n(3366),l=(n(7294),n(3905)),k=n(9877),i=n(8215),o=n(682),d=["components"],b={title:"bkkr-accordion"},m=void 0,p={unversionedId:"components/accordion",id:"components/accordion",title:"bkkr-accordion",description:"Usage",source:"@site/docs/components/accordion.md",sourceDirName:"components",slug:"/components/accordion",permalink:"/bkkr-docs/components/accordion",editUrl:"https://github.com/bkkr-team/bkkr-framework/edit/mmaster/core/src/components/accordion/readme.md",tags:[],version:"current",frontMatter:{title:"bkkr-accordion"},sidebar:"components",previous:{title:"UI Components",permalink:"/bkkr-docs/components"},next:{title:"bkkr-accordion-group",permalink:"/bkkr-docs/components/accordion-group"}},c=[{value:"Usage",id:"usage",children:[],level:2},{value:"Properties",id:"properties",children:[{value:"disabled",id:"disabled",children:[],level:3},{value:"readonly",id:"readonly",children:[],level:3},{value:"toggleIcon",id:"toggleicon",children:[],level:3},{value:"toggleIconSlot",id:"toggleiconslot",children:[],level:3},{value:"value",id:"value",children:[],level:3}],level:2},{value:"CSS Shadow Parts",id:"css-shadow-parts",children:[],level:2},{value:"Slots",id:"slots",children:[],level:2}],s={toc:c};function u(t){var e=t.components,n=(0,r.Z)(t,d);return(0,l.kt)("wrapper",(0,a.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"usage"},"Usage"),(0,l.kt)(o.Z,{demoUrl:"/bkkr-docs/demo/accordion/index.html",demoSourceUrl:"https://github.com/bkkr-team/bkkr-docs/tree/master/static/demo/accordion/index.html",mdxType:"DocsUsage"},(0,l.kt)(k.Z,{groupId:"framework",defaultValue:"angular",values:[{value:"angular",label:"Angular"},{value:"javascript",label:"Javascript"}],mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"angular",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- Basic --\x3e\n<bkkr-accordion-group>\n  <bkkr-accordion value="colors">\n    <bkkr-item slot="header">\n      <bkkr-label>Colors</bkkr-label>\n    </bkkr-item>\n\n    <bkkr-list slot="content">\n      <bkkr-item>\n        <bkkr-label>Red</bkkr-label>\n      </bkkr-item>\n      <bkkr-item>\n        <bkkr-label>Green</bkkr-label>\n      </bkkr-item>\n      <bkkr-item>\n        <bkkr-label>Blue</bkkr-label>\n      </bkkr-item>\n    </bkkr-list>\n  </bkkr-accordion>\n  <bkkr-accordion value="shapes">\n    <bkkr-item slot="header">\n      <bkkr-label>Shapes</bkkr-label>\n    </bkkr-item>\n\n    <bkkr-list slot="content">\n      <bkkr-item>\n        <bkkr-label>Circle</bkkr-label>\n      </bkkr-item>\n      <bkkr-item>\n        <bkkr-label>Triangle</bkkr-label>\n      </bkkr-item>\n      <bkkr-item>\n        <bkkr-label>Square</bkkr-label>\n      </bkkr-item>\n    </bkkr-list>\n  </bkkr-accordion>\n  <bkkr-accordion value="numbers">\n    <bkkr-item slot="header">\n      <bkkr-label>Numbers</bkkr-label>\n    </bkkr-item>\n\n    <bkkr-list slot="content">\n      <bkkr-item>\n        <bkkr-label>1</bkkr-label>\n      </bkkr-item>\n      <bkkr-item>\n        <bkkr-label>2</bkkr-label>\n      </bkkr-item>\n      <bkkr-item>\n        <bkkr-label>3</bkkr-label>\n      </bkkr-item>\n    </bkkr-list>\n  </bkkr-accordion>\n</bkkr-accordion-group>\n'))),(0,l.kt)(i.Z,{value:"javascript",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- Basic --\x3e\n<bkkr-accordion-group>\n  <bkkr-accordion value="colors">\n    <bkkr-item slot="header">\n      <bkkr-label>Colors</bkkr-label>\n    </bkkr-item>\n\n    <bkkr-list slot="content">\n      <bkkr-item>\n        <bkkr-label>Red</bkkr-label>\n      </bkkr-item>\n      <bkkr-item>\n        <bkkr-label>Green</bkkr-label>\n      </bkkr-item>\n      <bkkr-item>\n        <bkkr-label>Blue</bkkr-label>\n      </bkkr-item>\n    </bkkr-list>\n  </bkkr-accordion>\n  <bkkr-accordion value="shapes">\n    <bkkr-item slot="header">\n      <bkkr-label>Shapes</bkkr-label>\n    </bkkr-item>\n\n    <bkkr-list slot="content">\n      <bkkr-item>\n        <bkkr-label>Circle</bkkr-label>\n      </bkkr-item>\n      <bkkr-item>\n        <bkkr-label>Triangle</bkkr-label>\n      </bkkr-item>\n      <bkkr-item>\n        <bkkr-label>Square</bkkr-label>\n      </bkkr-item>\n    </bkkr-list>\n  </bkkr-accordion>\n  <bkkr-accordion value="numbers">\n    <bkkr-item slot="header">\n      <bkkr-label>Numbers</bkkr-label>\n    </bkkr-item>\n\n    <bkkr-list slot="content">\n      <bkkr-item>\n        <bkkr-label>1</bkkr-label>\n      </bkkr-item>\n      <bkkr-item>\n        <bkkr-label>2</bkkr-label>\n      </bkkr-item>\n      <bkkr-item>\n        <bkkr-label>3</bkkr-label>\n      </bkkr-item>\n    </bkkr-list>\n  </bkkr-accordion>\n</bkkr-accordion-group>\n'))))),(0,l.kt)("h2",{id:"properties"},"Properties"),(0,l.kt)("h3",{id:"disabled"},"disabled"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Description")),(0,l.kt)("td",{parentName:"tr",align:null},"If ",(0,l.kt)("inlineCode",{parentName:"td"},"true"),", the accordion cannot be interacted with.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Attribute")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"disabled"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Type")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"boolean"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Default")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false"))))),(0,l.kt)("h3",{id:"readonly"},"readonly"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Description")),(0,l.kt)("td",{parentName:"tr",align:null},"If ",(0,l.kt)("inlineCode",{parentName:"td"},"true"),", the accordion cannot be interacted with,",(0,l.kt)("br",null),"but does not alter the opacity.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Attribute")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"readonly"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Type")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"boolean"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Default")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false"))))),(0,l.kt)("h3",{id:"toggleicon"},"toggleIcon"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Description")),(0,l.kt)("td",{parentName:"tr",align:null},"The toggle icon to use. This icon will be",(0,l.kt)("br",null),"rotated when the accordion is expanded",(0,l.kt)("br",null),"or collapsed.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Attribute")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"toggle-icon"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Type")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Default")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"'chevron-down'"))))),(0,l.kt)("h3",{id:"toggleiconslot"},"toggleIconSlot"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Description")),(0,l.kt)("td",{parentName:"tr",align:null},"The slot inside of ",(0,l.kt)("inlineCode",{parentName:"td"},"bkkr-item")," to",(0,l.kt)("br",null),"place the toggle icon. Defaults to ",(0,l.kt)("inlineCode",{parentName:"td"},"'end'"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Attribute")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"toggle-icon-slot"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Type")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'"end" \uff5c "start"'))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Default")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"'end'"))))),(0,l.kt)("h3",{id:"value"},"value"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Description")),(0,l.kt)("td",{parentName:"tr",align:null},"The value of the accordion.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Attribute")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"value"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Type")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Default")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"bkkr-accordion-${accordionIds++}"))))),(0,l.kt)("h2",{id:"css-shadow-parts"},"CSS Shadow Parts"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"content")),(0,l.kt)("td",{parentName:"tr",align:null},"The wrapper element for the content slot.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"expanded")),(0,l.kt)("td",{parentName:"tr",align:null},"The expanded element. Can be used in combination")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"with the ",(0,l.kt)("inlineCode",{parentName:"td"},"header")," and ",(0,l.kt)("inlineCode",{parentName:"td"},"content")," parts (i.e. ",(0,l.kt)("inlineCode",{parentName:"td"},"::part(header expanded)"),")."),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"header")),(0,l.kt)("td",{parentName:"tr",align:null},"The wrapper element for the header slot.")))),(0,l.kt)("h2",{id:"slots"},"Slots"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"content")),(0,l.kt)("td",{parentName:"tr",align:null},"Content is placed below the header and is")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"shown or hidden based on expanded state."),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"header")),(0,l.kt)("td",{parentName:"tr",align:null},"Content is placed at the top and is used to")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"expand or collapse the accordion item."),(0,l.kt)("td",{parentName:"tr",align:null})))))}u.isMDXComponent=!0}}]);