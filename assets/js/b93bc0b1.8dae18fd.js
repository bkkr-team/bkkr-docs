"use strict";(self.webpackChunkbkkr_docs=self.webpackChunkbkkr_docs||[]).push([[8473],{1741:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return d},contentTitle:function(){return k},metadata:function(){return p},toc:function(){return m},default:function(){return N}});var a=n(7462),r=n(3366),l=(n(7294),n(3905)),o=(n(9877),n(8215),n(3725)),i=["components"],d={title:"bkkr-route"},k=void 0,p={unversionedId:"components/route",id:"components/route",title:"bkkr-route",description:"Usage",source:"@site/docs/components/route.md",sourceDirName:"components",slug:"/components/route",permalink:"/bkkr-docs/components/route",editUrl:"https://github.com/bkkr-team/bkkr-docs/edit/master/docs/components/route.md",tags:[],version:"current",frontMatter:{title:"bkkr-route"},sidebar:"components",previous:{title:"bkkr-router-outlet",permalink:"/bkkr-docs/components/router-outlet"},next:{title:"bkkr-route-redirect",permalink:"/bkkr-docs/components/route-redirect"}},m=[{value:"Usage",id:"usage",children:[],level:2},{value:"Properties",id:"properties",children:[{value:"beforeEnter",id:"beforeenter",children:[],level:3},{value:"beforeLeave",id:"beforeleave",children:[],level:3},{value:"component",id:"component",children:[],level:3},{value:"componentProps",id:"componentprops",children:[],level:3},{value:"url",id:"url",children:[],level:3}],level:2},{value:"Events",id:"events",children:[],level:2}],u={toc:m};function N(t){var e=t.components,n=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,a.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"usage"},"Usage"),(0,l.kt)(o.Z,{mdxType:"DocUsage"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<bkkr-router>\n  <bkkr-route url="/home" component="page-home"></bkkr-route>\n  <bkkr-route url="/dashboard" component="page-dashboard"></bkkr-route>\n  <bkkr-route url="/new-message" component="page-new-message"></bkkr-route>\n  <bkkr-route url="/login" component="page-login"></bkkr-route>\n</bkkr-router>\n'))),(0,l.kt)("h2",{id:"properties"},"Properties"),(0,l.kt)("h3",{id:"beforeenter"},"beforeEnter"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Description")),(0,l.kt)("td",{parentName:"tr",align:null},"A navigation hook that is fired when the route tries to enter.",(0,l.kt)("br",null),"Returning ",(0,l.kt)("inlineCode",{parentName:"td"},"true")," allows the navigation to proceed, while returning",(0,l.kt)("br",null),(0,l.kt)("inlineCode",{parentName:"td"},"false")," causes it to be cancelled. Returning a ",(0,l.kt)("inlineCode",{parentName:"td"},"NavigationHookOptions"),(0,l.kt)("br",null),"object causes the router to redirect to the path specified.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Attribute")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Type")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"(() => NavigationHookResult \uff5c Promise<NavigationHookResult>) \uff5c undefined"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Default")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"undefined"))))),(0,l.kt)("h3",{id:"beforeleave"},"beforeLeave"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Description")),(0,l.kt)("td",{parentName:"tr",align:null},"A navigation hook that is fired when the route tries to leave.",(0,l.kt)("br",null),"Returning ",(0,l.kt)("inlineCode",{parentName:"td"},"true")," allows the navigation to proceed, while returning",(0,l.kt)("br",null),(0,l.kt)("inlineCode",{parentName:"td"},"false")," causes it to be cancelled. Returning a ",(0,l.kt)("inlineCode",{parentName:"td"},"NavigationHookOptions"),(0,l.kt)("br",null),"object causes the router to redirect to the path specified.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Attribute")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Type")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"(() => NavigationHookResult \uff5c Promise<NavigationHookResult>) \uff5c undefined"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Default")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"undefined"))))),(0,l.kt)("h3",{id:"component"},"component"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Description")),(0,l.kt)("td",{parentName:"tr",align:null},"Name of the component to load/select in the navigation outlet (",(0,l.kt)("inlineCode",{parentName:"td"},"bkkr-tabs"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"bkkr-nav"),")",(0,l.kt)("br",null),"when the route matches.",(0,l.kt)("br",null),(0,l.kt)("br",null),"The value of this property is not always the tagname of the component to load,",(0,l.kt)("br",null),"in ",(0,l.kt)("inlineCode",{parentName:"td"},"bkkr-tabs")," it actually refers to the name of the ",(0,l.kt)("inlineCode",{parentName:"td"},"bkkr-tab")," to select.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Attribute")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"component"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Type")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Default")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"undefined"))))),(0,l.kt)("h3",{id:"componentprops"},"componentProps"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Description")),(0,l.kt)("td",{parentName:"tr",align:null},"A key value ",(0,l.kt)("inlineCode",{parentName:"td"},"{ 'red': true, 'blue': 'white'}")," containing props that should be passed",(0,l.kt)("br",null),"to the defined component when rendered.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Attribute")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Type")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"undefined \uff5c { [key: string]: any; }"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Default")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"undefined"))))),(0,l.kt)("h3",{id:"url"},"url"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Description")),(0,l.kt)("td",{parentName:"tr",align:null},"Relative path that needs to match in order for this route to apply.",(0,l.kt)("br",null),(0,l.kt)("br",null),"Accepts paths similar to expressjs so that you can define parameters",(0,l.kt)("br",null),"in the url /foo/:bar where bar would be available in incoming props.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Attribute")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"url"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Type")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Default")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"''"))))),(0,l.kt)("h2",{id:"events"},"Events"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"bkkrRouteDataChanged")),(0,l.kt)("td",{parentName:"tr",align:null},"Used internally by ",(0,l.kt)("inlineCode",{parentName:"td"},"bkkr-router")," to know when this route did change.")))))}N.isMDXComponent=!0}}]);