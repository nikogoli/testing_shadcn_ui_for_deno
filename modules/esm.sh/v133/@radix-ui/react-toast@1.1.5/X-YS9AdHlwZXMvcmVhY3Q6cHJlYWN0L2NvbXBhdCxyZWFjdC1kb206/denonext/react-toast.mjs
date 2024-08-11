/* esm.sh - esbuild bundle(@radix-ui/react-toast@1.1.5) denonext production */
import g from"../../../../../../esm.sh/@babel/runtime@7.23.1/helpers/esm/extends.js";
import{useState as K,useRef as x,createElement as c,useCallback as U,forwardRef as I,useEffect as A,useMemo as Te,Fragment as re}from"../../../../../../esm.sh/preact@10.19.6/compat.js"
;import{createPortal as ve}from"../../../../../../esm.sh/preact@10.19.6/compat.js";
import{composeEventHandlers as P}from"../../../../../../esm.sh/_@radix-ui/primitive@1.0.1.js";
import{useComposedRefs as se}from"../../../../../../esm.sh/v132/_@radix-ui/react-compose-refs@1.0.1.js";
import{createCollection as we}from"../../../../../../esm.sh/v132/_@radix-ui/react-collection@1.0.3.js";
import{createContextScope as ye}from"../../../../../../esm.sh/v132/_@radix-ui/react-context@1.0.1.js";
import{Branch as Ee,Root as xe}from"../../../../../../esm.sh/v132/_@radix-ui/react-dismissable-layer@1.0.5.js";
import{Portal as Ce}from"../../../../../../esm.sh/v132/_@radix-ui/react-portal@1.0.4.js";
import{Presence as Pe}from"../../../../../../esm.sh/v132/_@radix-ui/react-presence@1.0.1.js";
import{Primitive as N,dispatchDiscreteCustomEvent as ge}from"../../../../../../esm.sh/v132/_@radix-ui/react-primitive@1.0.3.js";
import{useCallbackRef as X}from"../../../../../../esm.sh/v132/_@radix-ui/react-use-callback-ref@1.0.1.js";
import{useControllableState as Ie}from"../../../../../../esm.sh/v132/_@radix-ui/react-use-controllable-state@1.0.1.js";
import{useLayoutEffect as he}from"../../../../../../esm.sh/v132/_@radix-ui/react-use-layout-effect@1.0.1.js";
import{VisuallyHidden as ae}from"../../../../../../esm.sh/v132/_@radix-ui/react-visually-hidden@1.0.3.js";
var ie="ToastProvider",[ee,_e,Se]=we("Toast"),[ce,ut]=ye("Toast",[Se]),[Re,B]=ce(ie),de=e=>{let{__scopeToast:o,label:n="Notification",duration:t=5e3,swipeDirection:i="right",swipeThreshold:u=50,children:p}=e,[$,b]=K(null),[s,E]=K(0),w=x(!1),L=x(!1);return c(ee.Provider,{scope:o},c(Re,{scope:o,label:n,duration:t,swipeDirection:i,swipeThreshold:u,toastCount:s,viewport:$,onViewportChange:b,onToastAdd:U(()=>E(S=>S+1),[]),onToastRemove:U(()=>E(S=>S-1),[]),isFocusedToastEscapeKeyDownRef:w,isClosePausedRef:L},p))};de.propTypes={label(e){if(e.label&&typeof e.label=="string"&&!e.label.trim()){let o=`Invalid prop \`label\` supplied to \`${ie}\`. Expected non-empty \`string\`.`;return new Error(o)}return null}};var De="ToastViewport",Ae=["F8"],Q="toast.viewportPause",Z="toast.viewportResume",Fe=I((e,o)=>{let{__scopeToast:n,hotkey:t=Ae,label:i="Notifications ({hotkey})",...u}=e,p=B(De,n),$=_e(n),b=x(null),s=x(null),E=x(null),w=x(null),L=se(o,w,p.onViewportChange),S=t.join("+").replace(/Key/g,"").replace(/Digit/g,""),R=p.toastCount>0;A(()=>{let a=y=>{var l;t.every(m=>y[m]||y.code===m)&&((l=w.current)===null||l===void 0||l.focus())};return document.addEventListener("keydown",a),()=>document.removeEventListener("keydown",a)},[t]),A(()=>{let a=b.current,y=w.current;if(R&&a&&y){let l=()=>{if(!p.isClosePausedRef.current){let v=new CustomEvent(Q);y.dispatchEvent(v),p.isClosePausedRef.current=!0}},f=()=>{if(p.isClosePausedRef.current){let v=new CustomEvent(Z);y.dispatchEvent(v),p.isClosePausedRef.current=!1}},m=v=>{!a.contains(v.relatedTarget)&&f()},T=()=>{a.contains(document.activeElement)||f()};return a.addEventListener("focusin",l),a.addEventListener("focusout",m),a.addEventListener("pointermove",l),a.addEventListener("pointerleave",T),window.addEventListener("blur",l),window.addEventListener("focus",f),()=>{a.removeEventListener("focusin",l),a.removeEventListener("focusout",m),a.removeEventListener("pointermove",l),a.removeEventListener("pointerleave",T),window.removeEventListener("blur",l),window.removeEventListener("focus",f)}}},[R,p.isClosePausedRef]);let d=U(({tabbingDirection:a})=>{let l=$().map(f=>{let m=f.ref.current,T=[m,...ze(m)];return a==="forwards"?T:T.reverse()});return(a==="forwards"?l.reverse():l).flat()},[$]);return A(()=>{let a=w.current;if(a){let y=l=>{let f=l.altKey||l.ctrlKey||l.metaKey;if(l.key==="Tab"&&!f){let M=document.activeElement,F=l.shiftKey;if(l.target===a&&F){var T;(T=s.current)===null||T===void 0||T.focus();return}let D=d({tabbingDirection:F?"backwards":"forwards"}),V=D.findIndex(r=>r===M);if(J(D.slice(V+1)))l.preventDefault();else{var v,h;F?(v=s.current)===null||v===void 0||v.focus():(h=E.current)===null||h===void 0||h.focus()}}};return a.addEventListener("keydown",y),()=>a.removeEventListener("keydown",y)}},[$,d]),c(Ee,{ref:b,role:"region","aria-label":i.replace("{hotkey}",S),tabIndex:-1,style:{pointerEvents:R?void 0:"none"}},R&&c(oe,{ref:s,onFocusFromOutsideViewport:()=>{let a=d({tabbingDirection:"forwards"});J(a)}}),c(ee.Slot,{scope:n},c(N.ol,g({tabIndex:-1},u,{ref:L}))),R&&c(oe,{ref:E,onFocusFromOutsideViewport:()=>{let a=d({tabbingDirection:"backwards"});J(a)}}))}),Oe="ToastFocusProxy",oe=I((e,o)=>{let{__scopeToast:n,onFocusFromOutsideViewport:t,...i}=e,u=B(Oe,n);return c(ae,g({"aria-hidden":!0,tabIndex:0},i,{ref:o,style:{position:"fixed"},onFocus:p=>{var $;let b=p.relatedTarget;!(($=u.viewport)!==null&&$!==void 0&&$.contains(b))&&t()}}))}),q="Toast",Ne="toast.swipeStart",Le="toast.swipeMove",Me="toast.swipeCancel",Ye="toast.swipeEnd",ke=I((e,o)=>{let{forceMount:n,open:t,defaultOpen:i,onOpenChange:u,...p}=e,[$=!0,b]=Ie({prop:t,defaultProp:i,onChange:u});return c(Pe,{present:n||$},c(le,g({open:$},p,{ref:o,onClose:()=>b(!1),onPause:X(e.onPause),onResume:X(e.onResume),onSwipeStart:P(e.onSwipeStart,s=>{s.currentTarget.setAttribute("data-swipe","start")}),onSwipeMove:P(e.onSwipeMove,s=>{let{x:E,y:w}=s.detail.delta;s.currentTarget.setAttribute("data-swipe","move"),s.currentTarget.style.setProperty("--radix-toast-swipe-move-x",`${E}px`),s.currentTarget.style.setProperty("--radix-toast-swipe-move-y",`${w}px`)}),onSwipeCancel:P(e.onSwipeCancel,s=>{s.currentTarget.setAttribute("data-swipe","cancel"),s.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),s.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),s.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),s.currentTarget.style.removeProperty("--radix-toast-swipe-end-y")}),onSwipeEnd:P(e.onSwipeEnd,s=>{let{x:E,y:w}=s.detail.delta;s.currentTarget.setAttribute("data-swipe","end"),s.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),s.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),s.currentTarget.style.setProperty("--radix-toast-swipe-end-x",`${E}px`),s.currentTarget.style.setProperty("--radix-toast-swipe-end-y",`${w}px`),b(!1)})})))}),[Ke,Ve]=ce(q,{onClose(){}}),le=I((e,o)=>{let{__scopeToast:n,type:t="foreground",duration:i,open:u,onClose:p,onEscapeKeyDown:$,onPause:b,onResume:s,onSwipeStart:E,onSwipeMove:w,onSwipeCancel:L,onSwipeEnd:S,...R}=e,d=B(q,n),[a,y]=K(null),l=se(o,r=>y(r)),f=x(null),m=x(null),T=i||d.duration,v=x(0),h=x(T),M=x(0),{onToastAdd:F,onToastRemove:z}=d,O=X(()=>{var r;a?.contains(document.activeElement)&&((r=d.viewport)===null||r===void 0||r.focus()),p()}),D=U(r=>{!r||r===1/0||(window.clearTimeout(M.current),v.current=new Date().getTime(),M.current=window.setTimeout(O,r))},[O]);A(()=>{let r=d.viewport;if(r){let C=()=>{D(h.current),s?.()},_=()=>{let Y=new Date().getTime()-v.current;h.current=h.current-Y,window.clearTimeout(M.current),b?.()};return r.addEventListener(Q,_),r.addEventListener(Z,C),()=>{r.removeEventListener(Q,_),r.removeEventListener(Z,C)}}},[d.viewport,T,b,s,D]),A(()=>{u&&!d.isClosePausedRef.current&&D(T)},[u,T,d.isClosePausedRef,D]),A(()=>(F(),()=>z()),[F,z]);let V=Te(()=>a?be(a):null,[a]);return d.viewport?c(re,null,V&&c(He,{__scopeToast:n,role:"status","aria-live":t==="foreground"?"assertive":"polite","aria-atomic":!0},V),c(Ke,{scope:n,onClose:O},ve(c(ee.ItemSlot,{scope:n},c(xe,{asChild:!0,onEscapeKeyDown:P($,()=>{d.isFocusedToastEscapeKeyDownRef.current||O(),d.isFocusedToastEscapeKeyDownRef.current=!1})},c(N.li,g({role:"status","aria-live":"off","aria-atomic":!0,tabIndex:0,"data-state":u?"open":"closed","data-swipe-direction":d.swipeDirection},R,{ref:l,style:{userSelect:"none",touchAction:"none",...e.style},onKeyDown:P(e.onKeyDown,r=>{r.key==="Escape"&&($?.(r.nativeEvent),r.nativeEvent.defaultPrevented||(d.isFocusedToastEscapeKeyDownRef.current=!0,O()))}),onPointerDown:P(e.onPointerDown,r=>{r.button===0&&(f.current={x:r.clientX,y:r.clientY})}),onPointerMove:P(e.onPointerMove,r=>{if(!f.current)return;let C=r.clientX-f.current.x,_=r.clientY-f.current.y,Y=!!m.current,k=["left","right"].includes(d.swipeDirection),H=["left","up"].includes(d.swipeDirection)?Math.min:Math.max,fe=k?H(0,C):0,me=k?0:H(0,_),G=r.pointerType==="touch"?10:2,W={x:fe,y:me},te={originalEvent:r,delta:W};Y?(m.current=W,j(Le,w,te,{discrete:!1})):ne(W,d.swipeDirection,G)?(m.current=W,j(Ne,E,te,{discrete:!1}),r.target.setPointerCapture(r.pointerId)):(Math.abs(C)>G||Math.abs(_)>G)&&(f.current=null)}),onPointerUp:P(e.onPointerUp,r=>{let C=m.current,_=r.target;if(_.hasPointerCapture(r.pointerId)&&_.releasePointerCapture(r.pointerId),m.current=null,f.current=null,C){let Y=r.currentTarget,k={originalEvent:r,delta:C};ne(C,d.swipeDirection,d.swipeThreshold)?j(Ye,S,k,{discrete:!0}):j(Me,L,k,{discrete:!0}),Y.addEventListener("click",H=>H.preventDefault(),{once:!0})}})})))),d.viewport))):null});le.propTypes={type(e){if(e.type&&!["foreground","background"].includes(e.type)){let o=`Invalid prop \`type\` supplied to \`${q}\`. Expected \`foreground | background\`.`;return new Error(o)}return null}};var He=e=>{let{__scopeToast:o,children:n,...t}=e,i=B(q,o),[u,p]=K(!1),[$,b]=K(!1);return Be(()=>p(!0)),A(()=>{let s=window.setTimeout(()=>b(!0),1e3);return()=>window.clearTimeout(s)},[]),$?null:c(Ce,{asChild:!0},c(ae,t,u&&c(re,null,i.label," ",n)))};var We=I((e,o)=>{let{__scopeToast:n,...t}=e;return c(N.div,g({},t,{ref:o}))});var je=I((e,o)=>{let{__scopeToast:n,...t}=e;return c(N.div,g({},t,{ref:o}))}),Ue="ToastAction",ue=I((e,o)=>{let{altText:n,...t}=e;return n?c($e,{altText:n,asChild:!0},c(pe,g({},t,{ref:o}))):null});ue.propTypes={altText(e){return e.altText?null:new Error(`Missing prop \`altText\` expected on \`${Ue}\``)}};var Xe="ToastClose",pe=I((e,o)=>{let{__scopeToast:n,...t}=e,i=Ve(Xe,n);return c($e,{asChild:!0},c(N.button,g({type:"button"},t,{ref:o,onClick:P(e.onClick,i.onClose)})))}),$e=I((e,o)=>{let{__scopeToast:n,altText:t,...i}=e;return c(N.div,g({"data-radix-toast-announce-exclude":"","data-radix-toast-announce-alt":t||void 0},i,{ref:o}))});function be(e){let o=[];return Array.from(e.childNodes).forEach(t=>{if(t.nodeType===t.TEXT_NODE&&t.textContent&&o.push(t.textContent),qe(t)){let i=t.ariaHidden||t.hidden||t.style.display==="none",u=t.dataset.radixToastAnnounceExclude==="";if(!i)if(u){let p=t.dataset.radixToastAnnounceAlt;p&&o.push(p)}else o.push(...be(t))}}),o}function j(e,o,n,{discrete:t}){let i=n.originalEvent.currentTarget,u=new CustomEvent(e,{bubbles:!0,cancelable:!0,detail:n});o&&i.addEventListener(e,o,{once:!0}),t?ge(i,u):i.dispatchEvent(u)}var ne=(e,o,n=0)=>{let t=Math.abs(e.x),i=Math.abs(e.y),u=t>i;return o==="left"||o==="right"?u&&t>n:!u&&i>n};function Be(e=()=>{}){let o=X(e);he(()=>{let n=0,t=0;return n=window.requestAnimationFrame(()=>t=window.requestAnimationFrame(o)),()=>{window.cancelAnimationFrame(n),window.cancelAnimationFrame(t)}},[o])}function qe(e){return e.nodeType===e.ELEMENT_NODE}function ze(e){let o=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:t=>{let i=t.tagName==="INPUT"&&t.type==="hidden";return t.disabled||t.hidden||i?NodeFilter.FILTER_SKIP:t.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)o.push(n.currentNode);return o}function J(e){let o=document.activeElement;return e.some(n=>n===o?!0:(n.focus(),document.activeElement!==o))}var pt=de,$t=Fe,bt=ke,ft=We,mt=je,Tt=ue,vt=pe;export{Tt as Action,vt as Close,mt as Description,pt as Provider,bt as Root,ft as Title,ke as Toast,ue as ToastAction,pe as ToastClose,je as ToastDescription,de as ToastProvider,We as ToastTitle,Fe as ToastViewport,$t as Viewport,ut as createToastScope};
//# sourceMappingURL=react-toast.mjs.map