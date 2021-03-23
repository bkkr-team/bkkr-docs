import{r as t,c as s,h as i,H as e,g as o}from"./p-06605c80.js";const n=class{constructor(i){t(this,i),this.bkkrNavWillLoad=s(this,"bkkrNavWillLoad",7),this.bkkrTabsWillChange=s(this,"bkkrTabsWillChange",3),this.bkkrTabsDidChange=s(this,"bkkrTabsDidChange",3),this.transitioning=!1,this.useRouter=!1,this.onNavClicked=t=>{const{href:s,nav:i}=t.detail;if(this.useRouter&&void 0!==s){const t=document.querySelector("bkkr-router");t&&t.push(s)}else this.select(i)}}async componentWillLoad(){if(this.useRouter||(this.useRouter=!!document.querySelector("bkkr-router")&&!this.el.closest("[no-router]")),!this.useRouter){const t=this.tabs;t.length>0&&await this.select(t[0])}this.bkkrNavWillLoad.emit()}componentWillRender(){const t=this.el.querySelector("bkkr-navs");t&&(t.selectedNav=this.selectedTab?this.selectedTab.tab:void 0)}async select(t){const s=r(this.tabs,t);return!!this.shouldSwitch(s)&&(await this.setActive(s),await this.notifyRouter(),this.tabSwitch(),!0)}async getTab(t){return r(this.tabs,t)}getSelected(){return Promise.resolve(this.selectedTab?this.selectedTab.tab:void 0)}async setRouteId(t){const s=r(this.tabs,t);return this.shouldSwitch(s)?(await this.setActive(s),{changed:!0,element:this.selectedTab,markVisible:()=>this.tabSwitch()}):{changed:!1,element:this.selectedTab}}async getRouteId(){const t=this.selectedTab&&this.selectedTab.tab;return void 0!==t?{id:t,element:this.selectedTab}:void 0}setActive(t){return this.transitioning?Promise.reject("transitioning already happening"):(this.transitioning=!0,this.leavingTab=this.selectedTab,this.selectedTab=t,this.bkkrTabsWillChange.emit({tab:t.tab}),t.active=!0,Promise.resolve())}tabSwitch(){const t=this.selectedTab,s=this.leavingTab;this.leavingTab=void 0,this.transitioning=!1,t&&s!==t&&(s&&(s.active=!1),this.bkkrTabsDidChange.emit({tab:t.tab}))}notifyRouter(){if(this.useRouter){const t=document.querySelector("bkkr-router");if(t)return t.navChanged("forward")}return Promise.resolve(!1)}shouldSwitch(t){return void 0!==t&&t!==this.selectedTab&&!this.transitioning}get tabs(){return Array.from(this.el.querySelectorAll("bkkr-tab"))}render(){return i(e,{onBkkrNavButtonClick:this.onNavClicked},i("slot",{name:"top"}),i("div",{class:"tabs-inner"},i("slot",null)),i("slot",{name:"bottom"}))}get el(){return o(this)}},r=(t,s)=>{const i="string"==typeof s?t.find((t=>t.tab===s)):s;return i||console.error(`tab with id: "${i}" does not exist`),i};n.style=":host{top:0;right:0;bottom:0;left:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;width:100%;height:100%;contain:layout size style;z-index:0}.tabs-inner{position:relative;-ms-flex:1;flex:1;contain:layout size style}";export{n as bkkr_tabs}