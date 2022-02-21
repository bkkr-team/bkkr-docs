"use strict";(self.webpackChunkbkkr_docs=self.webpackChunkbkkr_docs||[]).push([[9596],{5191:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return d},default:function(){return m}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),l=(n(9877),n(8215),n(3725)),k=["components"],i={title:"bkkr-router"},p=void 0,u={unversionedId:"components/router",id:"components/router",title:"bkkr-router",description:"Usage",source:"@site/docs/components/router.md",sourceDirName:"components",slug:"/components/router",permalink:"/docs/components/router",editUrl:"https://github.com/bkkr-team/bkkr-docs/edit/master/docs/components/router.md",tags:[],version:"current",frontMatter:{title:"bkkr-router"},sidebar:"components",previous:{title:"bkkr-reorder-group",permalink:"/docs/components/reorder-group"},next:{title:"bkkr-router-link",permalink:"/docs/components/router-link"}},d=[{value:"Usage",id:"usage",children:[],level:2},{value:"Properties",id:"properties",children:[{value:"root",id:"root",children:[],level:3},{value:"useHash",id:"usehash",children:[],level:3}],level:2},{value:"Events",id:"events",children:[],level:2},{value:"Methods",id:"methods",children:[{value:"back",id:"back",children:[],level:3},{value:"push",id:"push",children:[],level:3}],level:2}],s={toc:d};function m(t){var e=t.components,n=(0,a.Z)(t,k);return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)(l.Z,{mdxType:"DocUsage"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<bkkr-router>\n  <bkkr-route component="page-tabs">\n    <bkkr-route url="/schedule" component="tab-schedule">\n      <bkkr-route component="page-schedule"></bkkr-route>\n      <bkkr-route url="/session/:sessionId" component="page-session"></bkkr-route>\n    </bkkr-route>\n\n    <bkkr-route url="/speakers" component="tab-speaker">\n      <bkkr-route component="page-speaker-list"></bkkr-route>\n      <bkkr-route url="/session/:sessionId" component="page-session"></bkkr-route>\n      <bkkr-route url="/:speakerId" component="page-speaker-detail"></bkkr-route>\n    </bkkr-route>\n\n    <bkkr-route url="/map" component="page-map"></bkkr-route>\n    <bkkr-route url="/about" component="page-about"></bkkr-route>\n  </bkkr-route>\n\n  <bkkr-route url="/tutorial" component="page-tutorial"></bkkr-route>\n  <bkkr-route url="/login" component="page-login"></bkkr-route>\n  <bkkr-route url="/account" component="page-account"></bkkr-route>\n  <bkkr-route url="/signup" component="page-signup"></bkkr-route>\n  <bkkr-route url="/support" component="page-support"></bkkr-route>\n</bkkr-router>\n'))),(0,o.kt)("h2",{id:"properties"},"Properties"),(0,o.kt)("h3",{id:"root"},"root"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null}),(0,o.kt)("th",{parentName:"tr",align:null}))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Description")),(0,o.kt)("td",{parentName:"tr",align:null},"By default ",(0,o.kt)("inlineCode",{parentName:"td"},"bkkr-router"),' will match the routes at the root path ("/").',(0,o.kt)("br",null),"That can be changed when")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Attribute")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"root"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Type")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"string"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Default")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"'/'"))))),(0,o.kt)("h3",{id:"usehash"},"useHash"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null}),(0,o.kt)("th",{parentName:"tr",align:null}))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Description")),(0,o.kt)("td",{parentName:"tr",align:null},'The router can work in two "modes":',(0,o.kt)("br",null),"- With hash: ",(0,o.kt)("inlineCode",{parentName:"td"},"/index.html#/path/to/page"),(0,o.kt)("br",null),"- Without hash: ",(0,o.kt)("inlineCode",{parentName:"td"},"/path/to/page"),(0,o.kt)("br",null),(0,o.kt)("br",null),"Using one or another might depend in the requirements of your app and/or where it's deployed.",(0,o.kt)("br",null),(0,o.kt)("br",null),'Usually "hash-less" navigation works better for SEO and it\'s more user friendly too, but it might',(0,o.kt)("br",null),"requires additional server-side configuration in order to properly work.",(0,o.kt)("br",null),(0,o.kt)("br",null),"On the other side hash-navigation is much easier to deploy, it even works over the file protocol.",(0,o.kt)("br",null),(0,o.kt)("br",null),"By default, this property is ",(0,o.kt)("inlineCode",{parentName:"td"},"true"),", change to ",(0,o.kt)("inlineCode",{parentName:"td"},"false")," to allow hash-less URLs.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Attribute")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"use-hash"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Type")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"boolean"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Default")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"true"))))),(0,o.kt)("h2",{id:"events"},"Events"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"bkkrRouteDidChange")),(0,o.kt)("td",{parentName:"tr",align:null},"Emitted when the route had changed")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"bkkrRouteWillChange")),(0,o.kt)("td",{parentName:"tr",align:null},"Event emitted when the route is about to change")))),(0,o.kt)("h2",{id:"methods"},"Methods"),(0,o.kt)("h3",{id:"back"},"back"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null}),(0,o.kt)("th",{parentName:"tr",align:null}))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Description")),(0,o.kt)("td",{parentName:"tr",align:null},"Go back to previous page in the window.history.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Signature")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"back() => Promise<void>"))))),(0,o.kt)("h3",{id:"push"},"push"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null}),(0,o.kt)("th",{parentName:"tr",align:null}))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Description")),(0,o.kt)("td",{parentName:"tr",align:null},"Navigate to the specified path.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Signature")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"push(path: string, direction?: RouterDirection, animation?: AnimationBuilder \uff5c undefined) => Promise<boolean>"))))))}m.isMDXComponent=!0}}]);