"use strict";(self.webpackChunkbkkr_docs=self.webpackChunkbkkr_docs||[]).push([[8351],{2227:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return d},contentTitle:function(){return m},metadata:function(){return s},toc:function(){return p},default:function(){return u}});var a=n(7462),r=n(3366),k=(n(7294),n(3905)),l=n(9877),b=n(8215),o=n(682),i=["components"],d={title:"bkkr-tabs"},m=void 0,s={unversionedId:"components/tabs",id:"components/tabs",title:"bkkr-tabs",description:"Usage",source:"@site/docs/components/tabs.md",sourceDirName:"components",slug:"/components/tabs",permalink:"/bkkr-docs/components/tabs",editUrl:"https://github.com/bkkr-team/bkkr-framework/edit/mmaster/core/src/components/tabs/readme.md",tags:[],version:"current",frontMatter:{title:"bkkr-tabs"},sidebar:"components",previous:{title:"bkkr-slide",permalink:"/bkkr-docs/components/slide"},next:{title:"bkkr-tab",permalink:"/bkkr-docs/components/tab"}},p=[{value:"Usage",id:"usage",children:[],level:2},{value:"Events",id:"events",children:[],level:2},{value:"Methods",id:"methods",children:[{value:"getSelected",id:"getselected",children:[],level:3},{value:"getTab",id:"gettab",children:[],level:3},{value:"select",id:"select",children:[],level:3}],level:2}],c={toc:p};function u(t){var e=t.components,n=(0,r.Z)(t,i);return(0,k.kt)("wrapper",(0,a.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,k.kt)("h2",{id:"usage"},"Usage"),(0,k.kt)(o.Z,{demoUrl:"/bkkr-docs/demo/tabs/index.html",demoSourceUrl:"https://github.com/bkkr-team/bkkr-docs/tree/master/static/demo/tabs/index.html",mdxType:"DocsUsage"},(0,k.kt)(l.Z,{groupId:"framework",defaultValue:"angular",values:[{value:"angular",label:"Angular"},{value:"javascript",label:"Javascript"}],mdxType:"Tabs"},(0,k.kt)(b.Z,{value:"angular",mdxType:"TabItem"},(0,k.kt)("pre",null,(0,k.kt)("code",{parentName:"pre",className:"language-html"},'<bkkr-tabs>\n    <bkkr-footer position="floating" slot="bottom">\n        <bkkr-toolbar>\n            <bkkr-navs>\n                <bkkr-nav nav="tab-schedule">\n                    <bkkr-icon name="calendar"></bkkr-icon>\n                     <bkkr-label>Schedule</bkkr-label>\n                </bkkr-nav>\n\n                <bkkr-nav nav="tab-speaker">\n                        bkkr-icon name="user"></bkkr-icon>\n                    <bkkr-label>Speakers</bkkr-label>\n                </bkkr-nav>\n\n                <bkkr-nav nav="tab-map">\n                    <bkkr-icon name="map"></bkkr-icon>\n                    <bkkr-label>Map</bkkr-label>\n                </bkkr-nav>\n\n                <bkkr-nav nav="tab-about">\n                    <bkkr-icon name="info"></bkkr-icon>\n                    <bkkr-label>About</bkkr-label>\n                </bkkr-nav>\n            </bkkr-navs>\n        </bkkr-toolbar>\n    </bkkr-footer>\n</bkkr-tabs>\n'))),(0,k.kt)(b.Z,{value:"javascript",mdxType:"TabItem"},(0,k.kt)("pre",null,(0,k.kt)("code",{parentName:"pre",className:"language-html"},'<bkkr-tabs>\n    <bkkr-tab tab="tab-schedule">\n        <bkkr-content>\n            <p>tab-schedule</p>\n        </bkkr-content>\n    </bkkr-tab>\n\n    <bkkr-tab tab="tab-speaker">\n        <bkkr-content>\n            <p>tab-speaker</p>\n        </bkkr-content>\n    </bkkr-tab>\n\n    <bkkr-tab tab="tab-map">\n        <bkkr-content>\n            <p>tab-map</p>\n        </bkkr-content>\n    </bkkr-tab>\n\n    <bkkr-tab tab="tab-about">\n        <bkkr-content>\n            <p>tab-about</p>\n        </bkkr-content>\n    </bkkr-tab>\n\n    <bkkr-footer position="floating" slot="bottom">\n        <bkkr-toolbar>\n            <bkkr-navs>\n                <bkkr-nav nav="tab-schedule">\n                    <bkkr-icon name="calendar"></bkkr-icon>\n                     <bkkr-label>Schedule</bkkr-label>\n                </bkkr-nav>\n\n                <bkkr-nav nav="tab-speaker">\n                        bkkr-icon name="user"></bkkr-icon>\n                    <bkkr-label>Speakers</bkkr-label>\n                </bkkr-nav>\n\n                <bkkr-nav nav="tab-map">\n                    <bkkr-icon name="map"></bkkr-icon>\n                    <bkkr-label>Map</bkkr-label>\n                </bkkr-nav>\n\n                <bkkr-nav nav="tab-about">\n                    <bkkr-icon name="info"></bkkr-icon>\n                    <bkkr-label>About</bkkr-label>\n                </bkkr-nav>\n            </bkkr-navs>\n        </bkkr-toolbar>\n    </bkkr-footer>\n</bkkr-tabs>\n'))))),(0,k.kt)("h2",{id:"events"},"Events"),(0,k.kt)("table",null,(0,k.kt)("thead",{parentName:"table"},(0,k.kt)("tr",{parentName:"thead"},(0,k.kt)("th",{parentName:"tr",align:null},"Name"),(0,k.kt)("th",{parentName:"tr",align:null},"Description"))),(0,k.kt)("tbody",{parentName:"table"},(0,k.kt)("tr",{parentName:"tbody"},(0,k.kt)("td",{parentName:"tr",align:null},(0,k.kt)("inlineCode",{parentName:"td"},"bkkrTabsDidChange")),(0,k.kt)("td",{parentName:"tr",align:null},"Emitted when the navigation has finished transitioning to a new component.")),(0,k.kt)("tr",{parentName:"tbody"},(0,k.kt)("td",{parentName:"tr",align:null},(0,k.kt)("inlineCode",{parentName:"td"},"bkkrTabsWillChange")),(0,k.kt)("td",{parentName:"tr",align:null},"Emitted when the navigation is about to transition to a new component.")))),(0,k.kt)("h2",{id:"methods"},"Methods"),(0,k.kt)("h3",{id:"getselected"},"getSelected"),(0,k.kt)("table",null,(0,k.kt)("thead",{parentName:"table"},(0,k.kt)("tr",{parentName:"thead"},(0,k.kt)("th",{parentName:"tr",align:null}),(0,k.kt)("th",{parentName:"tr",align:null}))),(0,k.kt)("tbody",{parentName:"table"},(0,k.kt)("tr",{parentName:"tbody"},(0,k.kt)("td",{parentName:"tr",align:null},(0,k.kt)("strong",{parentName:"td"},"Description")),(0,k.kt)("td",{parentName:"tr",align:null},"Get the currently selected tab.")),(0,k.kt)("tr",{parentName:"tbody"},(0,k.kt)("td",{parentName:"tr",align:null},(0,k.kt)("strong",{parentName:"td"},"Signature")),(0,k.kt)("td",{parentName:"tr",align:null},(0,k.kt)("inlineCode",{parentName:"td"},"getSelected() => Promise<string \uff5c undefined>"))))),(0,k.kt)("h3",{id:"gettab"},"getTab"),(0,k.kt)("table",null,(0,k.kt)("thead",{parentName:"table"},(0,k.kt)("tr",{parentName:"thead"},(0,k.kt)("th",{parentName:"tr",align:null}),(0,k.kt)("th",{parentName:"tr",align:null}))),(0,k.kt)("tbody",{parentName:"table"},(0,k.kt)("tr",{parentName:"tbody"},(0,k.kt)("td",{parentName:"tr",align:null},(0,k.kt)("strong",{parentName:"td"},"Description")),(0,k.kt)("td",{parentName:"tr",align:null},"Get a specific tab by the value of its ",(0,k.kt)("inlineCode",{parentName:"td"},"tab")," property or an element reference.")),(0,k.kt)("tr",{parentName:"tbody"},(0,k.kt)("td",{parentName:"tr",align:null},(0,k.kt)("strong",{parentName:"td"},"Signature")),(0,k.kt)("td",{parentName:"tr",align:null},(0,k.kt)("inlineCode",{parentName:"td"},"getTab(tab: string \uff5c HTMLBkkrTabElement) => Promise<HTMLBkkrTabElement \uff5c undefined>"))))),(0,k.kt)("h3",{id:"select"},"select"),(0,k.kt)("table",null,(0,k.kt)("thead",{parentName:"table"},(0,k.kt)("tr",{parentName:"thead"},(0,k.kt)("th",{parentName:"tr",align:null}),(0,k.kt)("th",{parentName:"tr",align:null}))),(0,k.kt)("tbody",{parentName:"table"},(0,k.kt)("tr",{parentName:"tbody"},(0,k.kt)("td",{parentName:"tr",align:null},(0,k.kt)("strong",{parentName:"td"},"Description")),(0,k.kt)("td",{parentName:"tr",align:null},"Select a tab by the value of its ",(0,k.kt)("inlineCode",{parentName:"td"},"tab")," property or an element reference.")),(0,k.kt)("tr",{parentName:"tbody"},(0,k.kt)("td",{parentName:"tr",align:null},(0,k.kt)("strong",{parentName:"td"},"Signature")),(0,k.kt)("td",{parentName:"tr",align:null},(0,k.kt)("inlineCode",{parentName:"td"},"select(tab: string \uff5c HTMLBkkrTabElement) => Promise<boolean>"))))))}u.isMDXComponent=!0}}]);