"use strict";(self.webpackChunkbkkr_docs=self.webpackChunkbkkr_docs||[]).push([[3993],{1757:function(t,e,a){a.r(e),a.d(e,{frontMatter:function(){return p},contentTitle:function(){return o},metadata:function(){return N},toc:function(){return u},default:function(){return b}});var n=a(7462),r=a(3366),l=(a(7294),a(3905)),k=a(9877),d=a(8215),i=a(3725),m=["components"],p={title:"bkkr-range",demoUrl:"/docs/demo/range/index.html",demoSourceUrl:"https://github.com/bkkr-team/bkkr-docs/tree/master/static/demo/range/index.html"},o=void 0,N={unversionedId:"components/range",id:"components/range",title:"bkkr-range",description:"Usage",source:"@site/docs/components/range.md",sourceDirName:"components",slug:"/components/range",permalink:"/bkkr-docs/components/range",editUrl:"https://github.com/bkkr-team/bkkr-docs/edit/master/docs/components/range.md",tags:[],version:"current",frontMatter:{title:"bkkr-range",demoUrl:"/docs/demo/range/index.html",demoSourceUrl:"https://github.com/bkkr-team/bkkr-docs/tree/master/static/demo/range/index.html"},sidebar:"components",previous:{title:"bkkr-radio-group",permalink:"/bkkr-docs/components/radio-group"},next:{title:"bkkr-reorder",permalink:"/bkkr-docs/components/reorder"}},u=[{value:"Usage",id:"usage",children:[],level:2},{value:"Properties",id:"properties",children:[{value:"color",id:"color",children:[],level:3},{value:"debounce",id:"debounce",children:[],level:3},{value:"disabled",id:"disabled",children:[],level:3},{value:"dualKnobs",id:"dualknobs",children:[],level:3},{value:"max",id:"max",children:[],level:3},{value:"min",id:"min",children:[],level:3},{value:"name",id:"name",children:[],level:3},{value:"pin",id:"pin",children:[],level:3},{value:"snaps",id:"snaps",children:[],level:3},{value:"step",id:"step",children:[],level:3},{value:"ticks",id:"ticks",children:[],level:3},{value:"value",id:"value",children:[],level:3}],level:2},{value:"Events",id:"events",children:[],level:2},{value:"CSS Shadow Parts",id:"css-shadow-parts",children:[],level:2},{value:"CSS Custom Properties",id:"css-custom-properties",children:[],level:2},{value:"Slots",id:"slots",children:[],level:2}],g={toc:u};function b(t){var e=t.components,a=(0,r.Z)(t,m);return(0,l.kt)("wrapper",(0,n.Z)({},g,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"usage"},"Usage"),(0,l.kt)(i.Z,{mdxType:"DocUsage"},(0,l.kt)(k.Z,{groupId:"framework",defaultValue:"angular",values:[{value:"angular",label:"Angular"},{value:"javascript",label:"Javascript"}],mdxType:"Tabs"},(0,l.kt)(d.Z,{value:"angular",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<bkkr-list>\n  <bkkr-item>\n    <bkkr-range color="danger" [pin]="true"></bkkr-range>\n  </bkkr-item>\n\n  <bkkr-item>\n    <bkkr-range [min]="-200" [max]="200" color="secondary">\n      <bkkr-label slot="start">-200</bkkr-label>\n      <bkkr-label slot="end">200</bkkr-label>\n    </bkkr-range>\n  </bkkr-item>\n\n  <bkkr-item>\n    <bkkr-range [min]="20" [max]="80" [step]="2">\n      <bkkr-icon size="small" slot="start" name="sunny"></bkkr-icon>\n      <bkkr-icon slot="end" name="sunny"></bkkr-icon>\n    </bkkr-range>\n  </bkkr-item>\n\n  <bkkr-item>\n    <bkkr-range [min]="1000" [max]="2000" [step]="100" [snaps]="true" color="secondary"></bkkr-range>\n  </bkkr-item>\n\n  <bkkr-item>\n    <bkkr-range [min]="1000" [max]="2000" [step]="100" [snaps]="true" [ticks]="false" color="secondary"></bkkr-range>\n  </bkkr-item>\n\n  <bkkr-item>\n    <bkkr-range [dualKnobs]="true" [min]="21" [max]="72" [step]="3" [snaps]="true"></bkkr-range>\n  </bkkr-item>\n</bkkr-list>\n'))),(0,l.kt)(d.Z,{value:"javascript",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<bkkr-list>\n  <bkkr-item>\n    <bkkr-range color="danger" pin="true"></bkkr-range>\n  </bkkr-item>\n\n  <bkkr-item>\n    <bkkr-range min="-200" max="200" color="secondary">\n      <bkkr-label slot="start">-200</bkkr-label>\n      <bkkr-label slot="end">200</bkkr-label>\n    </bkkr-range>\n  </bkkr-item>\n\n  <bkkr-item>\n    <bkkr-range min="20" max="80" step="2">\n      <bkkr-icon size="small" slot="start" name="sunny"></bkkr-icon>\n      <bkkr-icon slot="end" name="sunny"></bkkr-icon>\n    </bkkr-range>\n  </bkkr-item>\n\n  <bkkr-item>\n    <bkkr-range min="1000" max="2000" step="100" snaps="true" color="secondary"></bkkr-range>\n  </bkkr-item>\n\n  <bkkr-item>\n    <bkkr-range min="1000" max="2000" step="100" snaps="true" ticks="false" color="secondary"></bkkr-range>\n  </bkkr-item>\n\n  <bkkr-item>\n    <bkkr-range dualKnobs="true" min="21" max="72" step="3" snaps="true"></bkkr-range>\n  </bkkr-item>\n</bkkr-list>\n'))))),(0,l.kt)("h2",{id:"properties"},"Properties"),(0,l.kt)("h3",{id:"color"},"color"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Description")),(0,l.kt)("td",{parentName:"tr",align:null},"The color to use from your application's color palette.",(0,l.kt)("br",null),"Default options are: ",(0,l.kt)("inlineCode",{parentName:"td"},'"primary"'),", ",(0,l.kt)("inlineCode",{parentName:"td"},'"secondary"'),", ",(0,l.kt)("inlineCode",{parentName:"td"},'"tertiary"'),", ",(0,l.kt)("inlineCode",{parentName:"td"},'"success"'),", ",(0,l.kt)("inlineCode",{parentName:"td"},'"warning"'),", ",(0,l.kt)("inlineCode",{parentName:"td"},'"danger"'),", ",(0,l.kt)("inlineCode",{parentName:"td"},'"light"'),", ",(0,l.kt)("inlineCode",{parentName:"td"},'"medium"'),", and ",(0,l.kt)("inlineCode",{parentName:"td"},'"dark"'),".",(0,l.kt)("br",null),"For more information on colors, see ",(0,l.kt)("a",{parentName:"td",href:"/docs/theming/basics"},"theming"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Attribute")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"color"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Type")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string \uff5c undefined"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Default")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"undefined"))))),(0,l.kt)("h3",{id:"debounce"},"debounce"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Description")),(0,l.kt)("td",{parentName:"tr",align:null},"How long, in milliseconds, to wait to trigger the",(0,l.kt)("br",null),(0,l.kt)("inlineCode",{parentName:"td"},"ionChange")," event after each change in the range value.",(0,l.kt)("br",null),"This also impacts form bindings such as ",(0,l.kt)("inlineCode",{parentName:"td"},"ngModel")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"v-model"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Attribute")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"debounce"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Type")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"number"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Default")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"0"))))),(0,l.kt)("h3",{id:"disabled"},"disabled"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Description")),(0,l.kt)("td",{parentName:"tr",align:null},"If ",(0,l.kt)("inlineCode",{parentName:"td"},"true"),", the user cannot interact with the range.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Attribute")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"disabled"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Type")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"boolean"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Default")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false"))))),(0,l.kt)("h3",{id:"dualknobs"},"dualKnobs"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Description")),(0,l.kt)("td",{parentName:"tr",align:null},"Show two knobs.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Attribute")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"dual-knobs"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Type")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"boolean"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Default")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false"))))),(0,l.kt)("h3",{id:"max"},"max"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Description")),(0,l.kt)("td",{parentName:"tr",align:null},"Maximum integer value of the range.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Attribute")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"max"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Type")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"number"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Default")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"100"))))),(0,l.kt)("h3",{id:"min"},"min"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Description")),(0,l.kt)("td",{parentName:"tr",align:null},"Minimum integer value of the range.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Attribute")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"min"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Type")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"number"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Default")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"0"))))),(0,l.kt)("h3",{id:"name"},"name"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Description")),(0,l.kt)("td",{parentName:"tr",align:null},"The name of the control, which is submitted with the form data.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Attribute")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"name"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Type")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Default")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"''"))))),(0,l.kt)("h3",{id:"pin"},"pin"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Description")),(0,l.kt)("td",{parentName:"tr",align:null},"If ",(0,l.kt)("inlineCode",{parentName:"td"},"true"),", a pin with integer value is shown when the knob",(0,l.kt)("br",null),"is pressed.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Attribute")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"pin"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Type")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"boolean"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Default")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false"))))),(0,l.kt)("h3",{id:"snaps"},"snaps"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Description")),(0,l.kt)("td",{parentName:"tr",align:null},"If ",(0,l.kt)("inlineCode",{parentName:"td"},"true"),", the knob snaps to tick marks evenly spaced based",(0,l.kt)("br",null),"on the step property value.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Attribute")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"snaps"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Type")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"boolean"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Default")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false"))))),(0,l.kt)("h3",{id:"step"},"step"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Description")),(0,l.kt)("td",{parentName:"tr",align:null},"Specifies the value granularity.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Attribute")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"step"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Type")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"number"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Default")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"1"))))),(0,l.kt)("h3",{id:"ticks"},"ticks"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Description")),(0,l.kt)("td",{parentName:"tr",align:null},"If ",(0,l.kt)("inlineCode",{parentName:"td"},"true"),", tick marks are displayed based on the step value.",(0,l.kt)("br",null),"Only applies when ",(0,l.kt)("inlineCode",{parentName:"td"},"snaps")," is ",(0,l.kt)("inlineCode",{parentName:"td"},"true"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Attribute")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"ticks"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Type")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"boolean"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Default")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"true"))))),(0,l.kt)("h3",{id:"value"},"value"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Description")),(0,l.kt)("td",{parentName:"tr",align:null},"the value of the range.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Attribute")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"value"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Type")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"number \uff5c { lower: number; upper: number; }"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Default")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"0"))))),(0,l.kt)("h2",{id:"events"},"Events"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"bkkrBlur")),(0,l.kt)("td",{parentName:"tr",align:null},"Emitted when the range loses focus.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"bkkrChange")),(0,l.kt)("td",{parentName:"tr",align:null},"Emitted when the value property has changed.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"bkkrFocus")),(0,l.kt)("td",{parentName:"tr",align:null},"Emitted when the range has focus.")))),(0,l.kt)("h2",{id:"css-shadow-parts"},"CSS Shadow Parts"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"bar")),(0,l.kt)("td",{parentName:"tr",align:null},"The inactive part of the bar.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"bar-active")),(0,l.kt)("td",{parentName:"tr",align:null},"The active part of the bar.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"knob")),(0,l.kt)("td",{parentName:"tr",align:null},"The handle that is used to drag the range.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"pin")),(0,l.kt)("td",{parentName:"tr",align:null},"The counter that appears above a knob.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"tick")),(0,l.kt)("td",{parentName:"tr",align:null},"An inactive tick mark.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"tick-active")),(0,l.kt)("td",{parentName:"tr",align:null},"An active tick mark.")))),(0,l.kt)("h2",{id:"css-custom-properties"},"CSS Custom Properties"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--bar-background")),(0,l.kt)("td",{parentName:"tr",align:null},"Background of the range bar")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--bar-background-active")),(0,l.kt)("td",{parentName:"tr",align:null},"Background of the active range bar")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--bar-border-radius")),(0,l.kt)("td",{parentName:"tr",align:null},"Border radius of the range bar")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--bar-height")),(0,l.kt)("td",{parentName:"tr",align:null},"Height of the range bar")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--height")),(0,l.kt)("td",{parentName:"tr",align:null},"Height of the range")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--knob-background")),(0,l.kt)("td",{parentName:"tr",align:null},"Background of the range knob")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--knob-border-radius")),(0,l.kt)("td",{parentName:"tr",align:null},"Border radius of the range knob")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--knob-box-shadow")),(0,l.kt)("td",{parentName:"tr",align:null},"Box shadow of the range knob")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--knob-size")),(0,l.kt)("td",{parentName:"tr",align:null},"Size of the range knob")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--pin-background")),(0,l.kt)("td",{parentName:"tr",align:null},"Background of the range pin")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--pin-color")),(0,l.kt)("td",{parentName:"tr",align:null},"Color of the range pin")))),(0,l.kt)("h2",{id:"slots"},"Slots"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"end")),(0,l.kt)("td",{parentName:"tr",align:null},"Content is placed to the right of the range slider in LTR, and to the left in RTL.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"start")),(0,l.kt)("td",{parentName:"tr",align:null},"Content is placed to the left of the range slider in LTR, and to the right in RTL.")))))}b.isMDXComponent=!0}}]);