/* esm.sh - esbuild bundle(@radix-ui/react-slider@1.1.2) denonext production */
import D from"../../../../../../esm.sh/@babel/runtime@7.23.1/helpers/esm/extends.js";
import{forwardRef as E,useState as k,useRef as P,createElement as $,useMemo as le,useEffect as W}from"../../../../../../esm.sh/preact@10.19.6/compat.js";
import{clamp as q}from"../../../../../../esm.sh/@radix-ui/number@1.0.1.js";
import{composeEventHandlers as M}from"../../../../../../esm.sh/_@radix-ui/primitive@1.0.1.js";
import{useComposedRefs as R}from"../../../../../../esm.sh/v132/_@radix-ui/react-compose-refs@1.0.1.js";
import{createContextScope as de}from"../../../../../../esm.sh/v132/_@radix-ui/react-context@1.0.1.js";
import{useControllableState as ue}from"../../../../../../esm.sh/v132/_@radix-ui/react-use-controllable-state@1.0.1.js";
import{useDirection as fe}from"../../../../../../esm.sh/v132/_@radix-ui/react-direction@1.0.1.js";
import{usePrevious as me}from"../../../../../../esm.sh/v132/_@radix-ui/react-use-previous@1.0.1.js";
import{useSize as $e}from"../../../../../../esm.sh/v132/_@radix-ui/react-use-size@1.0.1.js";
import{Primitive as H}from"../../../../../../esm.sh/v132/_@radix-ui/react-primitive@1.0.3.js";
import{createCollection as pe}from"../../../../../../esm.sh/v132/_@radix-ui/react-collection@1.0.3.js";
var J=["PageUp","PageDown"],Q=["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"],Z={"from-left":["Home","PageDown","ArrowDown","ArrowLeft"],"from-right":["Home","PageDown","ArrowDown","ArrowRight"],"from-bottom":["Home","PageDown","ArrowDown","ArrowLeft"],"from-top":["Home","PageDown","ArrowUp","ArrowLeft"]},A="Slider",[N,Se,ge]=pe(A),[ee,Ge]=de(A,[ge]),[ve,O]=ee(A),he=E((e,t)=>{let{name:o,min:a=0,max:i=100,step:n=1,orientation:c="horizontal",disabled:s=!1,minStepsBetweenThumbs:u=0,defaultValue:m=[a],value:S,onValueChange:r=()=>{},onValueCommit:l=()=>{},inverted:y=!1,...v}=e,[p,g]=k(null),w=R(t,f=>g(f)),C=P(new Set),d=P(0),x=c==="horizontal",K=p?!!p.closest("form"):!0,F=x?be:ye,[h=[],re]=ue({prop:S,defaultProp:m,onChange:f=>{var b;(b=[...C.current][d.current])===null||b===void 0||b.focus(),r(f)}}),U=P(h);function ie(f){let b=Me(h,f);I(f,b)}function se(f){I(f,d.current)}function ce(){let f=U.current[d.current];h[d.current]!==f&&l(h)}function I(f,b,{commit:B}={commit:!1}){let Y=Te(n),z=Ae(Math.round((f-a)/n)*n+a,Y),T=q(z,[a,i]);re((_=[])=>{let V=Ce(_,T,b);if(Ie(V,u*n)){d.current=V.indexOf(T);let j=String(V)!==String(_);return j&&B&&l(V),j?V:_}else return _})}return $(ve,{scope:e.__scopeSlider,disabled:s,min:a,max:i,valueIndexToChangeRef:d,thumbs:C.current,values:h,orientation:c},$(N.Provider,{scope:e.__scopeSlider},$(N.Slot,{scope:e.__scopeSlider},$(F,D({"aria-disabled":s,"data-disabled":s?"":void 0},v,{ref:w,onPointerDown:M(v.onPointerDown,()=>{s||(U.current=h)}),min:a,max:i,inverted:y,onSlideStart:s?void 0:ie,onSlideMove:s?void 0:se,onSlideEnd:s?void 0:ce,onHomeKeyDown:()=>!s&&I(a,0,{commit:!0}),onEndKeyDown:()=>!s&&I(i,h.length-1,{commit:!0}),onStepKeyDown:({event:f,direction:b})=>{if(!s){let z=J.includes(f.key)||f.shiftKey&&Q.includes(f.key)?10:1,T=d.current,_=h[T],V=n*z*b;I(_+V,T,{commit:!0})}}})))),K&&h.map((f,b)=>$(Ve,{key:b,name:o?o+(h.length>1?"[]":""):void 0,value:f})))}),[te,ne]=ee(A,{startEdge:"left",endEdge:"right",size:"width",direction:1}),be=E((e,t)=>{let{min:o,max:a,dir:i,inverted:n,onSlideStart:c,onSlideMove:s,onSlideEnd:u,onStepKeyDown:m,...S}=e,[r,l]=k(null),y=R(t,d=>l(d)),v=P(),p=fe(i),g=p==="ltr",w=g&&!n||!g&&n;function C(d){let x=v.current||r.getBoundingClientRect(),K=[0,x.width],h=L(K,w?[o,a]:[a,o]);return v.current=x,h(d-x.left)}return $(te,{scope:e.__scopeSlider,startEdge:w?"left":"right",endEdge:w?"right":"left",direction:w?1:-1,size:"width"},$(oe,D({dir:p,"data-orientation":"horizontal"},S,{ref:y,style:{...S.style,"--radix-slider-thumb-transform":"translateX(-50%)"},onSlideStart:d=>{let x=C(d.clientX);c?.(x)},onSlideMove:d=>{let x=C(d.clientX);s?.(x)},onSlideEnd:()=>{v.current=void 0,u?.()},onStepKeyDown:d=>{let K=Z[w?"from-left":"from-right"].includes(d.key);m?.({event:d,direction:K?-1:1})}})))}),ye=E((e,t)=>{let{min:o,max:a,inverted:i,onSlideStart:n,onSlideMove:c,onSlideEnd:s,onStepKeyDown:u,...m}=e,S=P(null),r=R(t,S),l=P(),y=!i;function v(p){let g=l.current||S.current.getBoundingClientRect(),w=[0,g.height],d=L(w,y?[a,o]:[o,a]);return l.current=g,d(p-g.top)}return $(te,{scope:e.__scopeSlider,startEdge:y?"bottom":"top",endEdge:y?"top":"bottom",size:"height",direction:y?1:-1},$(oe,D({"data-orientation":"vertical"},m,{ref:r,style:{...m.style,"--radix-slider-thumb-transform":"translateY(50%)"},onSlideStart:p=>{let g=v(p.clientY);n?.(g)},onSlideMove:p=>{let g=v(p.clientY);c?.(g)},onSlideEnd:()=>{l.current=void 0,s?.()},onStepKeyDown:p=>{let w=Z[y?"from-bottom":"from-top"].includes(p.key);u?.({event:p,direction:w?-1:1})}})))}),oe=E((e,t)=>{let{__scopeSlider:o,onSlideStart:a,onSlideMove:i,onSlideEnd:n,onHomeKeyDown:c,onEndKeyDown:s,onStepKeyDown:u,...m}=e,S=O(A,o);return $(H.span,D({},m,{ref:t,onKeyDown:M(e.onKeyDown,r=>{r.key==="Home"?(c(r),r.preventDefault()):r.key==="End"?(s(r),r.preventDefault()):J.concat(Q).includes(r.key)&&(u(r),r.preventDefault())}),onPointerDown:M(e.onPointerDown,r=>{let l=r.target;l.setPointerCapture(r.pointerId),r.preventDefault(),S.thumbs.has(l)?l.focus():a(r)}),onPointerMove:M(e.onPointerMove,r=>{r.target.hasPointerCapture(r.pointerId)&&i(r)}),onPointerUp:M(e.onPointerUp,r=>{let l=r.target;l.hasPointerCapture(r.pointerId)&&(l.releasePointerCapture(r.pointerId),n(r))})}))}),we="SliderTrack",xe=E((e,t)=>{let{__scopeSlider:o,...a}=e,i=O(we,o);return $(H.span,D({"data-disabled":i.disabled?"":void 0,"data-orientation":i.orientation},a,{ref:t}))}),X="SliderRange",De=E((e,t)=>{let{__scopeSlider:o,...a}=e,i=O(X,o),n=ne(X,o),c=P(null),s=R(t,c),u=i.values.length,m=i.values.map(l=>ae(l,i.min,i.max)),S=u>1?Math.min(...m):0,r=100-Math.max(...m);return $(H.span,D({"data-orientation":i.orientation,"data-disabled":i.disabled?"":void 0},a,{ref:s,style:{...e.style,[n.startEdge]:S+"%",[n.endEdge]:r+"%"}}))}),G="SliderThumb",Pe=E((e,t)=>{let o=Se(e.__scopeSlider),[a,i]=k(null),n=R(t,s=>i(s)),c=le(()=>a?o().findIndex(s=>s.ref.current===a):-1,[o,a]);return $(Ee,D({},e,{ref:n,index:c}))}),Ee=E((e,t)=>{let{__scopeSlider:o,index:a,...i}=e,n=O(G,o),c=ne(G,o),[s,u]=k(null),m=R(t,g=>u(g)),S=$e(s),r=n.values[a],l=r===void 0?0:ae(r,n.min,n.max),y=_e(a,n.values.length),v=S?.[c.size],p=v?Re(v,l,c.direction):0;return W(()=>{if(s)return n.thumbs.add(s),()=>{n.thumbs.delete(s)}},[s,n.thumbs]),$("span",{style:{transform:"var(--radix-slider-thumb-transform)",position:"absolute",[c.startEdge]:`calc(${l}% + ${p}px)`}},$(N.ItemSlot,{scope:e.__scopeSlider},$(H.span,D({role:"slider","aria-label":e["aria-label"]||y,"aria-valuemin":n.min,"aria-valuenow":r,"aria-valuemax":n.max,"aria-orientation":n.orientation,"data-orientation":n.orientation,"data-disabled":n.disabled?"":void 0,tabIndex:n.disabled?void 0:0},i,{ref:m,style:r===void 0?{display:"none"}:e.style,onFocus:M(e.onFocus,()=>{n.valueIndexToChangeRef.current=a})}))))}),Ve=e=>{let{value:t,...o}=e,a=P(null),i=me(t);return W(()=>{let n=a.current,c=window.HTMLInputElement.prototype,u=Object.getOwnPropertyDescriptor(c,"value").set;if(i!==t&&u){let m=new Event("input",{bubbles:!0});u.call(n,t),n.dispatchEvent(m)}},[i,t]),$("input",D({style:{display:"none"}},o,{ref:a,defaultValue:t}))};function Ce(e=[],t,o){let a=[...e];return a[o]=t,a.sort((i,n)=>i-n)}function ae(e,t,o){let n=100/(o-t)*(e-t);return q(n,[0,100])}function _e(e,t){return t>2?`Value ${e+1} of ${t}`:t===2?["Minimum","Maximum"][e]:void 0}function Me(e,t){if(e.length===1)return 0;let o=e.map(i=>Math.abs(i-t)),a=Math.min(...o);return o.indexOf(a)}function Re(e,t,o){let a=e/2,n=L([0,50],[0,a]);return(a-n(t)*o)*o}function Ke(e){return e.slice(0,-1).map((t,o)=>e[o+1]-t)}function Ie(e,t){if(t>0){let o=Ke(e);return Math.min(...o)>=t}return!0}function L(e,t){return o=>{if(e[0]===e[1]||t[0]===t[1])return t[0];let a=(t[1]-t[0])/(e[1]-e[0]);return t[0]+a*(o-e[0])}}function Te(e){return(String(e).split(".")[1]||"").length}function Ae(e,t){let o=Math.pow(10,t);return Math.round(e*o)/o}var We=he,qe=xe,Je=De,Qe=Pe;export{Je as Range,We as Root,he as Slider,De as SliderRange,Pe as SliderThumb,xe as SliderTrack,Qe as Thumb,qe as Track,Ge as createSliderScope};
//# sourceMappingURL=react-slider.mjs.map