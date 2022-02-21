"use strict";(self.webpackChunkbkkr_docs=self.webpackChunkbkkr_docs||[]).push([[3630],{6304:function(t,e,r){r.r(e),r.d(e,{frontMatter:function(){return p},contentTitle:function(){return m},metadata:function(){return b},toc:function(){return u},default:function(){return c}});var a=r(7462),n=r(3366),l=(r(7294),r(3905)),o=r(9877),d=r(8215),k=r(682),i=["components"],p={title:"bkkr-header"},m=void 0,b={unversionedId:"components/header",id:"components/header",title:"bkkr-header",description:"Usage",source:"@site/docs/components/header.md",sourceDirName:"components",slug:"/components/header",permalink:"/bkkr-docs/components/header",editUrl:"https://github.com/bkkr-team/bkkr-framework/edit/master/core/src/components/header/readme.md",tags:[],version:"current",frontMatter:{title:"bkkr-header"},sidebar:"components",previous:{title:"bkkr-toolbar",permalink:"/bkkr-docs/components/toolbar"},next:{title:"bkkr-footer",permalink:"/bkkr-docs/components/footer"}},u=[{value:"Usage",id:"usage",children:[],level:2},{value:"Properties",id:"properties",children:[{value:"collapse",id:"collapse",children:[],level:3},{value:"color",id:"color",children:[],level:3}],level:2},{value:"CSS Custom Properties",id:"css-custom-properties",children:[],level:2}],s={toc:u};function c(t){var e=t.components,r=(0,n.Z)(t,i);return(0,l.kt)("wrapper",(0,a.Z)({},s,r,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"usage"},"Usage"),(0,l.kt)(k.Z,{demoUrl:"/bkkr-docs/demo/header/index.html",demoSourceUrl:"https://github.com/bkkr-team/bkkr-docs/tree/master/static/demo/header/index.html",mdxType:"DocsUsage"},(0,l.kt)(o.Z,{groupId:"framework",defaultValue:"angular",values:[{value:"angular",label:"Angular"},{value:"javascript",label:"Javascript"}],mdxType:"Tabs"},(0,l.kt)(d.Z,{value:"angular",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- Default --\x3e\n<bkkr-header>\n  <bkkr-toolbar>\n    <bkkr-buttons slot="start">\n      <bkkr-back-button></bkkr-back-button>\n    </bkkr-buttons>\n    <bkkr-title>My Navigation Bar</bkkr-title>\n  </bkkr-toolbar>\n\n  <bkkr-toolbar>\n    <bkkr-title>Subheader</bkkr-title>\n  </bkkr-toolbar>\n</bkkr-header>\n\n\x3c!-- Header without a border --\x3e\n<bkkr-header class="border-0">\n  <bkkr-toolbar>\n    <bkkr-title>Header - No Border</bkkr-title>\n  </bkkr-toolbar>\n</bkkr-header>\n\n<bkkr-content></bkkr-content>\n'))),(0,l.kt)(d.Z,{value:"javascript",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- Default --\x3e\n<bkkr-header>\n  <bkkr-toolbar>\n    <bkkr-buttons slot="start">\n      <bkkr-back-button></bkkr-back-button>\n    </bkkr-buttons>\n    <bkkr-title>My Navigation Bar</bkkr-title>\n  </bkkr-toolbar>\n\n  <bkkr-toolbar>\n    <bkkr-title>Subheader</bkkr-title>\n  </bkkr-toolbar>\n</bkkr-header>\n\n\x3c!-- Header without a border --\x3e\n<bkkr-header class="border-0">\n  <bkkr-toolbar>\n    <bkkr-title>Header - No Border</bkkr-title>\n  </bkkr-toolbar>\n</bkkr-header>\n\n<bkkr-content></bkkr-content>\n'))))),(0,l.kt)("h2",{id:"properties"},"Properties"),(0,l.kt)("h3",{id:"collapse"},"collapse"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Description")),(0,l.kt)("td",{parentName:"tr",align:null},"Describes the scroll effect that will be applied to the header.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Attribute")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"collapse"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Type")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'"fade" \uff5c undefined'))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Default")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"undefined"))))),(0,l.kt)("h3",{id:"color"},"color"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Description")),(0,l.kt)("td",{parentName:"tr",align:null},"The color to use from your application's color palette.",(0,l.kt)("br",null),"Default options are: ",(0,l.kt)("inlineCode",{parentName:"td"},'"primary"'),", ",(0,l.kt)("inlineCode",{parentName:"td"},'"secondary"'),", ",(0,l.kt)("inlineCode",{parentName:"td"},'"tertiary"'),", ",(0,l.kt)("inlineCode",{parentName:"td"},'"success"'),", ",(0,l.kt)("inlineCode",{parentName:"td"},'"warning"'),", ",(0,l.kt)("inlineCode",{parentName:"td"},'"danger"'),", ",(0,l.kt)("inlineCode",{parentName:"td"},'"light"'),", ",(0,l.kt)("inlineCode",{parentName:"td"},'"medium"'),", and ",(0,l.kt)("inlineCode",{parentName:"td"},'"dark"'),".",(0,l.kt)("br",null),"For more information on colors, see ",(0,l.kt)("a",{parentName:"td",href:"/docs/theming/basics"},"theming"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Attribute")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"color"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Type")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string \uff5c undefined"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Default")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"undefined"))))),(0,l.kt)("h2",{id:"css-custom-properties"},"CSS Custom Properties"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--background")),(0,l.kt)("td",{parentName:"tr",align:null},"Background")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--border-color")),(0,l.kt)("td",{parentName:"tr",align:null},"Color of the header border")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--border-style")),(0,l.kt)("td",{parentName:"tr",align:null},"Style of the header border")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--border-width")),(0,l.kt)("td",{parentName:"tr",align:null},"Width of the header border")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--color")),(0,l.kt)("td",{parentName:"tr",align:null},"Text color")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--padding-bottom")),(0,l.kt)("td",{parentName:"tr",align:null},"Bottom padding")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--padding-end")),(0,l.kt)("td",{parentName:"tr",align:null},"Right padding if direction is left-to-right, and left padding if direction is right-to-left")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--padding-start")),(0,l.kt)("td",{parentName:"tr",align:null},"Left padding if direction is left-to-right, and right padding if direction is right-to-left")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--padding-top")),(0,l.kt)("td",{parentName:"tr",align:null},"Top padding")))))}c.isMDXComponent=!0}}]);