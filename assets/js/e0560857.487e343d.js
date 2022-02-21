"use strict";(self.webpackChunkbkkr_docs=self.webpackChunkbkkr_docs||[]).push([[8828],{7112:function(t,e,a){a.r(e),a.d(e,{frontMatter:function(){return o},contentTitle:function(){return m},metadata:function(){return s},toc:function(){return N},default:function(){return g}});var n=a(7462),r=a(3366),l=(a(7294),a(3905)),i=a(9877),d=a(8215),p=a(682),k=["components"],o={title:"bkkr-slides"},m=void 0,s={unversionedId:"components/slides",id:"components/slides",title:"bkkr-slides",description:"Adopted from Swiper.js:",source:"@site/docs/components/slides.md",sourceDirName:"components",slug:"/components/slides",permalink:"/bkkr-docs/components/slides",editUrl:"https://github.com/bkkr-team/bkkr-framework/edit/mmaster/core/src/components/slides/readme.md",tags:[],version:"current",frontMatter:{title:"bkkr-slides"},sidebar:"components",previous:{title:"bkkr-select-option",permalink:"/bkkr-docs/components/select-option"},next:{title:"bkkr-slide",permalink:"/bkkr-docs/components/slide"}},N=[{value:"Usage",id:"usage",children:[],level:2},{value:"Properties",id:"properties",children:[{value:"options",id:"options",children:[],level:3},{value:"pager",id:"pager",children:[],level:3},{value:"scrollbar",id:"scrollbar",children:[],level:3}],level:2},{value:"Events",id:"events",children:[],level:2},{value:"Methods",id:"methods",children:[{value:"getActiveIndex",id:"getactiveindex",children:[],level:3},{value:"getPreviousIndex",id:"getpreviousindex",children:[],level:3},{value:"getSwiper",id:"getswiper",children:[],level:3},{value:"isBeginning",id:"isbeginning",children:[],level:3},{value:"isEnd",id:"isend",children:[],level:3},{value:"length",id:"length",children:[],level:3},{value:"lockSwipeToNext",id:"lockswipetonext",children:[],level:3},{value:"lockSwipeToPrev",id:"lockswipetoprev",children:[],level:3},{value:"lockSwipes",id:"lockswipes",children:[],level:3},{value:"slideNext",id:"slidenext",children:[],level:3},{value:"slidePrev",id:"slideprev",children:[],level:3},{value:"slideTo",id:"slideto",children:[],level:3},{value:"startAutoplay",id:"startautoplay",children:[],level:3},{value:"stopAutoplay",id:"stopautoplay",children:[],level:3},{value:"update",id:"update",children:[],level:3},{value:"updateAutoHeight",id:"updateautoheight",children:[],level:3}],level:2},{value:"CSS Custom Properties",id:"css-custom-properties",children:[],level:2}],u={toc:N};function g(t){var e=t.components,a=(0,r.Z)(t,k);return(0,l.kt)("wrapper",(0,n.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Adopted from Swiper.js:\nThe most modern mobile touch slider and framework with hardware accelerated transitions."),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"http://www.idangero.us/swiper/"},"http://www.idangero.us/swiper/")),(0,l.kt)("p",null,"Copyright 2016 Vladimir Kharlampidi The iDangero.us"),(0,l.kt)("p",null,"Licensed under ",(0,l.kt)("a",{parentName:"p",href:"https://opensource.org/licenses/MIT"},"MIT")),(0,l.kt)("h2",{id:"usage"},"Usage"),(0,l.kt)(p.Z,{demoUrl:"/bkkr-docs/demo/slides/index.html",demoSourceUrl:"https://github.com/bkkr-team/bkkr-docs/tree/master/static/demo/slides/index.html",mdxType:"DocsUsage"},(0,l.kt)(i.Z,{groupId:"framework",defaultValue:"angular",values:[{value:"angular",label:"Angular"},{value:"javascript",label:"Javascript"}],mdxType:"Tabs"},(0,l.kt)(d.Z,{value:"angular",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<bkkr-slides pager="true">\n    <bkkr-slide>\n      <h1>Slide 1</h1>\n    </bkkr-slide>\n\n    <bkkr-slide>\n      <h1>Slide 2</h1>\n    </bkkr-slide>\n\n    <bkkr-slide>\n      <h1>Slide 3</h1>\n    </bkkr-slide>\n</bkkr-slides>\n'))),(0,l.kt)(d.Z,{value:"javascript",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<bkkr-slides pager="true">\n    <bkkr-slide>\n      <h1>Slide 1</h1>\n    </bkkr-slide>\n\n    <bkkr-slide>\n      <h1>Slide 2</h1>\n    </bkkr-slide>\n\n    <bkkr-slide>\n      <h1>Slide 3</h1>\n    </bkkr-slide>\n</bkkr-slides>\n'))))),(0,l.kt)("h2",{id:"properties"},"Properties"),(0,l.kt)("h3",{id:"options"},"options"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Description")),(0,l.kt)("td",{parentName:"tr",align:null},"Options to pass to the swiper instance.",(0,l.kt)("br",null),"See ",(0,l.kt)("a",{parentName:"td",href:"http://idangero.us/swiper/api/"},"http://idangero.us/swiper/api/")," for valid options")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Attribute")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Type")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"SwiperOptions"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Default")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"{}"))))),(0,l.kt)("h3",{id:"pager"},"pager"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Description")),(0,l.kt)("td",{parentName:"tr",align:null},"If ",(0,l.kt)("inlineCode",{parentName:"td"},"true"),", show the pagination.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Attribute")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"pager"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Type")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"boolean"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Default")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false"))))),(0,l.kt)("h3",{id:"scrollbar"},"scrollbar"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Description")),(0,l.kt)("td",{parentName:"tr",align:null},"If ",(0,l.kt)("inlineCode",{parentName:"td"},"true"),", show the scrollbar.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Attribute")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"scrollbar"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Type")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"boolean"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Default")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false"))))),(0,l.kt)("h2",{id:"events"},"Events"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"bkkrSlideDidChange")),(0,l.kt)("td",{parentName:"tr",align:null},"Emitted after the active slide has changed.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"bkkrSlideDoubleTap")),(0,l.kt)("td",{parentName:"tr",align:null},"Emitted when the user double taps on the slide's container.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"bkkrSlideDrag")),(0,l.kt)("td",{parentName:"tr",align:null},"Emitted when the slider is actively being moved.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"bkkrSlideNextEnd")),(0,l.kt)("td",{parentName:"tr",align:null},"Emitted when the next slide has ended.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"bkkrSlideNextStart")),(0,l.kt)("td",{parentName:"tr",align:null},"Emitted when the next slide has started.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"bkkrSlidePrevEnd")),(0,l.kt)("td",{parentName:"tr",align:null},"Emitted when the previous slide has ended.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"bkkrSlidePrevStart")),(0,l.kt)("td",{parentName:"tr",align:null},"Emitted when the previous slide has started.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"bkkrSlideReachEnd")),(0,l.kt)("td",{parentName:"tr",align:null},"Emitted when the slider is at the last slide.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"bkkrSlideReachStart")),(0,l.kt)("td",{parentName:"tr",align:null},"Emitted when the slider is at its initial position.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"bkkrSlidesDidLoad")),(0,l.kt)("td",{parentName:"tr",align:null},"Emitted after Swiper initialization")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"bkkrSlideTap")),(0,l.kt)("td",{parentName:"tr",align:null},"Emitted when the user taps/clicks on the slide's container.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"bkkrSlideTouchEnd")),(0,l.kt)("td",{parentName:"tr",align:null},"Emitted when the user releases the touch.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"bkkrSlideTouchStart")),(0,l.kt)("td",{parentName:"tr",align:null},"Emitted when the user first touches the slider.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"bkkrSlideTransitionEnd")),(0,l.kt)("td",{parentName:"tr",align:null},"Emitted when the slide transition has ended.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"bkkrSlideTransitionStart")),(0,l.kt)("td",{parentName:"tr",align:null},"Emitted when the slide transition has started.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"bkkrSlideWillChange")),(0,l.kt)("td",{parentName:"tr",align:null},"Emitted before the active slide has changed.")))),(0,l.kt)("h2",{id:"methods"},"Methods"),(0,l.kt)("h3",{id:"getactiveindex"},"getActiveIndex"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Description")),(0,l.kt)("td",{parentName:"tr",align:null},"Get the index of the active slide.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Signature")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"getActiveIndex() => Promise<number>"))))),(0,l.kt)("h3",{id:"getpreviousindex"},"getPreviousIndex"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Description")),(0,l.kt)("td",{parentName:"tr",align:null},"Get the index of the previous slide.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Signature")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"getPreviousIndex() => Promise<number>"))))),(0,l.kt)("h3",{id:"getswiper"},"getSwiper"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Description")),(0,l.kt)("td",{parentName:"tr",align:null},"Get the Swiper instance.",(0,l.kt)("br",null),"Use this to access the full Swiper API.",(0,l.kt)("br",null),"See ",(0,l.kt)("a",{parentName:"td",href:"https://idangero.us/swiper/api/"},"https://idangero.us/swiper/api/")," for all API options.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Signature")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"getSwiper() => Promise<any>"))))),(0,l.kt)("h3",{id:"isbeginning"},"isBeginning"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Description")),(0,l.kt)("td",{parentName:"tr",align:null},"Get whether or not the current slide is the first slide.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Signature")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"isBeginning() => Promise<boolean>"))))),(0,l.kt)("h3",{id:"isend"},"isEnd"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Description")),(0,l.kt)("td",{parentName:"tr",align:null},"Get whether or not the current slide is the last slide.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Signature")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"isEnd() => Promise<boolean>"))))),(0,l.kt)("h3",{id:"length"},"length"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Description")),(0,l.kt)("td",{parentName:"tr",align:null},"Get the total number of slides.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Signature")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"length() => Promise<number>"))))),(0,l.kt)("h3",{id:"lockswipetonext"},"lockSwipeToNext"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Description")),(0,l.kt)("td",{parentName:"tr",align:null},"Lock or unlock the ability to slide to the next slide.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Signature")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"lockSwipeToNext(lock: boolean) => Promise<void>"))))),(0,l.kt)("h3",{id:"lockswipetoprev"},"lockSwipeToPrev"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Description")),(0,l.kt)("td",{parentName:"tr",align:null},"Lock or unlock the ability to slide to the previous slide.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Signature")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"lockSwipeToPrev(lock: boolean) => Promise<void>"))))),(0,l.kt)("h3",{id:"lockswipes"},"lockSwipes"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Description")),(0,l.kt)("td",{parentName:"tr",align:null},"Lock or unlock the ability to slide to the next or previous slide.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Signature")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"lockSwipes(lock: boolean) => Promise<void>"))))),(0,l.kt)("h3",{id:"slidenext"},"slideNext"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Description")),(0,l.kt)("td",{parentName:"tr",align:null},"Transition to the next slide.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Signature")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"slideNext(speed?: number \uff5c undefined, runCallbacks?: boolean \uff5c undefined) => Promise<void>"))))),(0,l.kt)("h3",{id:"slideprev"},"slidePrev"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Description")),(0,l.kt)("td",{parentName:"tr",align:null},"Transition to the previous slide.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Signature")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"slidePrev(speed?: number \uff5c undefined, runCallbacks?: boolean \uff5c undefined) => Promise<void>"))))),(0,l.kt)("h3",{id:"slideto"},"slideTo"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Description")),(0,l.kt)("td",{parentName:"tr",align:null},"Transition to the specified slide.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Signature")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"slideTo(index: number, speed?: number \uff5c undefined, runCallbacks?: boolean \uff5c undefined) => Promise<void>"))))),(0,l.kt)("h3",{id:"startautoplay"},"startAutoplay"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Description")),(0,l.kt)("td",{parentName:"tr",align:null},"Start auto play.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Signature")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"startAutoplay() => Promise<void>"))))),(0,l.kt)("h3",{id:"stopautoplay"},"stopAutoplay"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Description")),(0,l.kt)("td",{parentName:"tr",align:null},"Stop auto play.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Signature")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"stopAutoplay() => Promise<void>"))))),(0,l.kt)("h3",{id:"update"},"update"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Description")),(0,l.kt)("td",{parentName:"tr",align:null},"Update the underlying slider implementation. Call this if you've added or removed",(0,l.kt)("br",null),"child slides.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Signature")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"update() => Promise<void>"))))),(0,l.kt)("h3",{id:"updateautoheight"},"updateAutoHeight"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Description")),(0,l.kt)("td",{parentName:"tr",align:null},"Force swiper to update its height (when autoHeight is enabled) for the duration",(0,l.kt)("br",null),"equal to 'speed' parameter.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Signature")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"updateAutoHeight(speed?: number \uff5c undefined) => Promise<void>"))))),(0,l.kt)("h2",{id:"css-custom-properties"},"CSS Custom Properties"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--bullet-background")),(0,l.kt)("td",{parentName:"tr",align:null},"Background of the pagination bullets")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--bullet-background-active")),(0,l.kt)("td",{parentName:"tr",align:null},"Background of the active pagination bullet")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--progress-bar-background")),(0,l.kt)("td",{parentName:"tr",align:null},"Background of the pagination progress-bar")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--progress-bar-background-active")),(0,l.kt)("td",{parentName:"tr",align:null},"Background of the active pagination progress-bar")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--scroll-bar-background")),(0,l.kt)("td",{parentName:"tr",align:null},"Background of the pagination scroll-bar")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--scroll-bar-background-active")),(0,l.kt)("td",{parentName:"tr",align:null},"Background of the active pagination scroll-bar")))))}g.isMDXComponent=!0}}]);