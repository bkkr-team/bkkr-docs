"use strict";(self.webpackChunkbkkr_docs=self.webpackChunkbkkr_docs||[]).push([[4397],{2382:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return b},contentTitle:function(){return m},metadata:function(){return s},toc:function(){return p},default:function(){return c}});var n=t(7462),k=t(3366),a=(t(7294),t(3905)),l=t(9877),o=t(8215),d=t(682),i=["components"],b={title:"bkkr-reorder-group"},m=void 0,s={unversionedId:"components/reorder-group",id:"components/reorder-group",title:"bkkr-reorder-group",description:"Usage",source:"@site/docs/components/reorder-group.md",sourceDirName:"components",slug:"/components/reorder-group",permalink:"/bkkr-docs/components/reorder-group",editUrl:"https://github.com/bkkr-team/bkkr-framework/edit/master/core/src/components/reorder-group/readme.md",tags:[],version:"current",frontMatter:{title:"bkkr-reorder-group"},sidebar:"components",previous:{title:"bkkr-reorder",permalink:"/bkkr-docs/components/reorder"},next:{title:"bkkr-router",permalink:"/bkkr-docs/components/router"}},p=[{value:"Usage",id:"usage",children:[],level:2},{value:"Properties",id:"properties",children:[{value:"disabled",id:"disabled",children:[],level:3}],level:2},{value:"Events",id:"events",children:[],level:2},{value:"Methods",id:"methods",children:[{value:"complete",id:"complete",children:[],level:3}],level:2}],u={toc:p};function c(e){var r=e.components,t=(0,k.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)(d.Z,{demoUrl:"",demoSourceUrl:"",mdxType:"DocsUsage"},(0,a.kt)(l.Z,{groupId:"framework",defaultValue:"angular",values:[{value:"angular",label:"Angular"},{value:"javascript",label:"Javascript"}],mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"angular",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- The reorder gesture is disabled by default, enable it to drag and drop items --\x3e\n<bkkr-reorder-group disabled="false">\n  \x3c!-- Default reorder icon, end aligned items --\x3e\n  <bkkr-item>\n    <bkkr-label>\n      Item 1\n    </bkkr-label>\n    <bkkr-reorder slot="end"></bkkr-reorder>\n  </bkkr-item>\n\n  <bkkr-item>\n    <bkkr-label>\n      Item 2\n    </bkkr-label>\n    <bkkr-reorder slot="end"></bkkr-reorder>\n  </bkkr-item>\n\n  \x3c!-- Default reorder icon, start aligned items --\x3e\n  <bkkr-item>\n    <bkkr-reorder slot="start"></bkkr-reorder>\n    <bkkr-label>\n      Item 3\n    </bkkr-label>\n  </bkkr-item>\n\n  <bkkr-item>\n    <bkkr-reorder slot="start"></bkkr-reorder>\n    <bkkr-label>\n      Item 4\n    </bkkr-label>\n  </bkkr-item>\n\n  \x3c!-- Custom reorder icon end items --\x3e\n  <bkkr-item>\n    <bkkr-label>\n      Item 5\n    </bkkr-label>\n    <bkkr-reorder slot="end">\n      <bkkr-icon name="pizza"></bkkr-icon>\n    </bkkr-reorder>\n  </bkkr-item>\n\n  <bkkr-item>\n    <bkkr-label>\n      Item 6\n    </bkkr-label>\n    <bkkr-reorder slot="end">\n      <bkkr-icon name="pizza"></bkkr-icon>\n    </bkkr-reorder>\n  </bkkr-item>\n\n  \x3c!-- Items wrapped in a reorder, entire item can be dragged --\x3e\n  <bkkr-reorder>\n    <bkkr-item>\n      <bkkr-label>\n        Item 7\n      </bkkr-label>\n    </bkkr-item>\n  </bkkr-reorder>\n\n  <bkkr-reorder>\n    <bkkr-item>\n      <bkkr-label>\n        Item 8\n      </bkkr-label>\n    </bkkr-item>\n  </bkkr-reorder>\n</bkkr-reorder-group>\n'))),(0,a.kt)(o.Z,{value:"javascript",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- The reorder gesture is disabled by default, enable it to drag and drop items --\x3e\n<bkkr-reorder-group disabled="false">\n  \x3c!-- Default reorder icon, end aligned items --\x3e\n  <bkkr-item>\n    <bkkr-label>\n      Item 1\n    </bkkr-label>\n    <bkkr-reorder slot="end"></bkkr-reorder>\n  </bkkr-item>\n\n  <bkkr-item>\n    <bkkr-label>\n      Item 2\n    </bkkr-label>\n    <bkkr-reorder slot="end"></bkkr-reorder>\n  </bkkr-item>\n\n  \x3c!-- Default reorder icon, start aligned items --\x3e\n  <bkkr-item>\n    <bkkr-reorder slot="start"></bkkr-reorder>\n    <bkkr-label>\n      Item 3\n    </bkkr-label>\n  </bkkr-item>\n\n  <bkkr-item>\n    <bkkr-reorder slot="start"></bkkr-reorder>\n    <bkkr-label>\n      Item 4\n    </bkkr-label>\n  </bkkr-item>\n\n  \x3c!-- Custom reorder icon end items --\x3e\n  <bkkr-item>\n    <bkkr-label>\n      Item 5\n    </bkkr-label>\n    <bkkr-reorder slot="end">\n      <bkkr-icon name="pizza"></bkkr-icon>\n    </bkkr-reorder>\n  </bkkr-item>\n\n  <bkkr-item>\n    <bkkr-label>\n      Item 6\n    </bkkr-label>\n    <bkkr-reorder slot="end">\n      <bkkr-icon name="pizza"></bkkr-icon>\n    </bkkr-reorder>\n  </bkkr-item>\n\n  \x3c!-- Items wrapped in a reorder, entire item can be dragged --\x3e\n  <bkkr-reorder>\n    <bkkr-item>\n      <bkkr-label>\n        Item 7\n      </bkkr-label>\n    </bkkr-item>\n  </bkkr-reorder>\n\n  <bkkr-reorder>\n    <bkkr-item>\n      <bkkr-label>\n        Item 8\n      </bkkr-label>\n    </bkkr-item>\n  </bkkr-reorder>\n</bkkr-reorder-group>\n'))))),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"disabled"},"disabled"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null}),(0,a.kt)("th",{parentName:"tr",align:null}))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Description")),(0,a.kt)("td",{parentName:"tr",align:null},"If ",(0,a.kt)("inlineCode",{parentName:"td"},"true"),", the reorder will be hidden.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Attribute")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"disabled"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Type")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"boolean"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Default")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"true"))))),(0,a.kt)("h2",{id:"events"},"Events"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"bkkrItemReorder")),(0,a.kt)("td",{parentName:"tr",align:null},"Event that needs to be listened to in order to complete the reorder action.")))),(0,a.kt)("p",null,"Once the event has been emitted, the ",(0,a.kt)("inlineCode",{parentName:"p"},"complete()")," method then needs\nto be called in order to finalize the reorder action. |"),(0,a.kt)("h2",{id:"methods"},"Methods"),(0,a.kt)("h3",{id:"complete"},"complete"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null}),(0,a.kt)("th",{parentName:"tr",align:null}))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Description")),(0,a.kt)("td",{parentName:"tr",align:null},"Completes the reorder operation. Must be called by the ",(0,a.kt)("inlineCode",{parentName:"td"},"bkkrItemReorder")," event.",(0,a.kt)("br",null),(0,a.kt)("br",null),"If a list of items is passed, the list will be reordered and returned in the",(0,a.kt)("br",null),"proper order.",(0,a.kt)("br",null),(0,a.kt)("br",null),"If no parameters are passed or if ",(0,a.kt)("inlineCode",{parentName:"td"},"true")," is passed in, the reorder will complete",(0,a.kt)("br",null),"and the item will remain in the position it was dragged to. If ",(0,a.kt)("inlineCode",{parentName:"td"},"false")," is passed,",(0,a.kt)("br",null),"the reorder will complete and the item will bounce back to its original position.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Signature")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"complete(listOrReorder?: boolean \uff5c any[] \uff5c undefined) => Promise<any>"))))))}c.isMDXComponent=!0}}]);