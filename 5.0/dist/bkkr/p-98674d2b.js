import{c as t}from"./p-2862b1df.js";const n=()=>t().duration(300),a=a=>{let r,e;const s=a.width+8,i=t(),o=t();return a.isEndSide?(r=s+"px",e="0px"):(r=-s+"px",e="0px"),i.addElement(a.menuInnerEl).fromTo("transform",`translateX(${r})`,`translateX(${e})`),o.addElement(a.backdropEl).fromTo("opacity",.01,.2),n().addAnimation([i,o])},r=a=>{let r;const e=a.width;r=a.isEndSide?-e+"px":e+"px";const s=t().addElement(a.menuInnerEl).fromTo("box-shadow","0px 0px 0px rgba(0,0,0,0)","var(--box-shadow)"),i=t().addElement(a.contentEl).fromTo("transform","translateX(0px)",`translateX(${r})`),o=t().addElement(a.backdropEl).fromTo("opacity",.01,.32);return n().addAnimation([s,i,o])},e=a=>{const r=a.width*(a.isEndSide?-1:1)+"px",e=t().addElement(a.contentEl).fromTo("transform","translateX(0px)",`translateX(${r})`);return n().addAnimation(e)},s=(()=>{const t=new Map,n=[],s=async t=>{if(await l(),"start"===t||"end"===t){return w((n=>n.side===t&&!n.disabled))||w((n=>n.side===t))}if(null!=t)return w((n=>n.menuId===t));return w((t=>!t.disabled))||(n.length>0?n[0].el:void 0)},i=async()=>(await l(),u()),o=(n,a)=>{t.set(n,a)},c=t=>{const a=t.side;n.filter((n=>n.side===a&&n!==t)).forEach((t=>t.disabled=!0))},u=()=>w((t=>t._isOpen)),p=()=>n.some((t=>t.isAnimating)),w=t=>{const a=n.find(t);if(void 0!==a)return a.el},l=()=>Promise.all(Array.from(document.querySelectorAll("bkkr-menu")).map((t=>t.componentOnReady())));return o("reveal",e),o("push",r),o("overlay",a),{registerAnimation:o,get:s,getMenus:async()=>(await l(),n.map((t=>t.el))),getOpen:i,isEnabled:async t=>{const n=await s(t);return!!n&&!n.disabled},swipeGesture:async(t,n)=>{const a=await s(n);return a&&(a.swipeGesture=t),a},isAnimating:async()=>(await l(),p()),isOpen:async t=>{if(null!=t){const n=await s(t);return void 0!==n&&n.isOpen()}return void 0!==await i()},enable:async(t,n)=>{const a=await s(n);return a&&(a.disabled=!t),a},toggle:async t=>{const n=await s(t);return!!n&&n.toggle()},close:async t=>{const n=await(void 0!==t?s(t):i());return void 0!==n&&n.close()},open:async t=>{const n=await s(t);return!!n&&n.open()},_getOpenSync:u,_createAnimation:(n,a)=>{const r=t.get(n);if(!r)throw new Error("animation not registered");return r(a)},_register:t=>{n.indexOf(t)<0&&(t.disabled||c(t),n.push(t))},_unregister:t=>{const a=n.indexOf(t);a>-1&&n.splice(a,1)},_setOpen:async(t,n,a)=>{if(p())return!1;if(n){const n=await i();n&&t.el!==n&&await n.setOpen(!1,!1)}return t._setOpen(n,a)},_setActiveMenu:c}})();export{s as m}