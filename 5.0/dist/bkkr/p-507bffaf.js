import{c as t}from"./p-63696788.js";import{c as n}from"./p-dd5dce47.js";const r=()=>n().duration(400),a=t=>{let a,e;const s=t.width+8,i=n(),o=n();return t.isEndSide?(a=s+"px",e="0px"):(a=-s+"px",e="0px"),i.addElement(t.menuInnerEl).fromTo("transform",`translateX(${a})`,`translateX(${e})`),o.addElement(t.backdropEl).fromTo("opacity",.01,.2),r().addAnimation([i,o])},e=t=>{let a,e;const s=t.width;t.isEndSide?(a=-s+"px",e=s+"px"):(a=s+"px",e=-s+"px");const i=n().addElement(t.menuInnerEl).fromTo("transform",`translateX(${e})`,"translateX(0px)"),o=n().addElement(t.contentEl).fromTo("transform","translateX(0px)",`translateX(${a})`),c=n().addElement(t.backdropEl).fromTo("opacity",.01,.32);return r().addAnimation([i,o,c])},s=t=>{const a=t.width*(t.isEndSide?-1:1)+"px",e=n().addElement(t.contentEl).fromTo("transform","translateX(0px)",`translateX(${a})`);return r().addAnimation(e)},i=(()=>{const n=new Map,r=[],i=async t=>{if(await m(),"start"===t||"end"===t){return w((n=>n.side===t&&!n.disabled))||w((n=>n.side===t))}if(null!=t)return w((n=>n.menuId===t));return w((t=>!t.disabled))||(r.length>0?r[0].el:void 0)},o=async()=>(await m(),p()),c=(t,r)=>{n.set(t,r)},u=t=>{const n=t.side;r.filter((r=>r.side===n&&r!==t)).forEach((t=>t.disabled=!0))},p=()=>w((t=>t._isOpen)),l=()=>r.some((t=>t.isAnimating)),w=t=>{const n=r.find(t);if(void 0!==n)return n.el},m=()=>Promise.all(Array.from(document.querySelectorAll("bkkr-menu")).map((n=>new Promise((r=>t(n,r))))));return c("reveal",s),c("push",e),c("overlay",a),{registerAnimation:c,get:i,getMenus:async()=>(await m(),r.map((t=>t.el))),getOpen:o,isEnabled:async t=>{const n=await i(t);return!!n&&!n.disabled},swipeGesture:async(t,n)=>{const r=await i(n);return r&&(r.swipeGesture=t),r},isAnimating:async()=>(await m(),l()),isOpen:async t=>{if(null!=t){const n=await i(t);return void 0!==n&&n.isOpen()}return void 0!==await o()},enable:async(t,n)=>{const r=await i(n);return r&&(r.disabled=!t),r},toggle:async t=>{const n=await i(t);return!!n&&n.toggle()},close:async t=>{const n=await(void 0!==t?i(t):o());return void 0!==n&&n.close()},open:async t=>{const n=await i(t);return!!n&&n.open()},_getOpenSync:p,_createAnimation:(t,r)=>{const a=n.get(t);if(!a)throw new Error("animation not registered");return a(r)},_register:t=>{r.indexOf(t)<0&&(t.disabled||u(t),r.push(t))},_unregister:t=>{const n=r.indexOf(t);n>-1&&r.splice(n,1)},_setOpen:async(t,n,r)=>{if(l())return!1;if(n){const n=await o();n&&t.el!==n&&await n.setOpen(!1,!1)}return t._setOpen(n,r)},_setActiveMenu:u}})();export{i as m}