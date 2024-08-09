/* esm.sh - esbuild bundle(@radix-ui/react-accordion@1.1.2) denonext production */
import b from"../../../../../../esm.sh/@babel/runtime@7.23.1/helpers/esm/extends.js";
import o from"../../../../../../esm.sh/preact@10.19.6/compat.js";
import{createContextScope as U}from"../../../../../../esm.sh/v132/_@radix-ui/react-context@1.0.1.js";
import{createCollection as Y}from"../../../../../../esm.sh/v132/_@radix-ui/react-collection@1.0.3.js";
import{useComposedRefs as q}from"../../../../../../esm.sh/v132/_@radix-ui/react-compose-refs@1.0.1.js";
import{composeEventHandlers as F}from"../../../../../../esm.sh/_@radix-ui/primitive@1.0.1.js";
import{useControllableState as V}from"../../../../../../esm.sh/v132/_@radix-ui/react-use-controllable-state@1.0.1.js";
import{Primitive as B}from"../../../../../../esm.sh/v132/_@radix-ui/react-primitive@1.0.3.js";
import{createCollapsibleScope as k,Root as J,Trigger as Q,Content as W}from"../../../../../../esm.sh/v132/_@radix-ui/react-collapsible@1.0.3.js";
import{useId as X}from"../../../../../../esm.sh/v132/_@radix-ui/react-id@1.0.1.js";
import{useDirection as Z}from"../../../../../../esm.sh/v132/_@radix-ui/react-direction@1.0.1.js";
var p="Accordion",ee=["Home","End","ArrowDown","ArrowUp","ArrowLeft","ArrowRight"],[R,oe,te]=Y(p),[g,Ne]=U(p,[te,k]),P=k(),T=o.forwardRef((e,c)=>{let{type:t,...n}=e,a=n,r=n;return o.createElement(R.Provider,{scope:e.__scopeAccordion},t==="multiple"?o.createElement(ae,b({},r,{ref:c})):o.createElement(ce,b({},a,{ref:c})))});T.propTypes={type(e){let c=e.value||e.defaultValue;return e.type&&!["single","multiple"].includes(e.type)?new Error("Invalid prop `type` supplied to `Accordion`. Expected one of `single | multiple`."):e.type==="multiple"&&typeof c=="string"?new Error("Invalid prop `type` supplied to `Accordion`. Expected `single` when `defaultValue` or `value` is type `string`."):e.type==="single"&&Array.isArray(c)?new Error("Invalid prop `type` supplied to `Accordion`. Expected `multiple` when `defaultValue` or `value` is type `string[]`."):null}};var[H,re]=g(p),[M,ne]=g(p,{collapsible:!1}),ce=o.forwardRef((e,c)=>{let{value:t,defaultValue:n,onValueChange:a=()=>{},collapsible:r=!1,...i}=e,[l,s]=V({prop:t,defaultProp:n,onChange:a});return o.createElement(H,{scope:e.__scopeAccordion,value:l?[l]:[],onItemOpen:s,onItemClose:o.useCallback(()=>r&&s(""),[r,s])},o.createElement(M,{scope:e.__scopeAccordion,collapsible:r},o.createElement(K,b({},i,{ref:c}))))}),ae=o.forwardRef((e,c)=>{let{value:t,defaultValue:n,onValueChange:a=()=>{},...r}=e,[i=[],l]=V({prop:t,defaultProp:n,onChange:a}),s=o.useCallback(u=>l((f=[])=>[...f,u]),[l]),$=o.useCallback(u=>l((f=[])=>f.filter(C=>C!==u)),[l]);return o.createElement(H,{scope:e.__scopeAccordion,value:i,onItemOpen:s,onItemClose:$},o.createElement(M,{scope:e.__scopeAccordion,collapsible:!0},o.createElement(K,b({},r,{ref:c}))))}),[ie,A]=g(p),K=o.forwardRef((e,c)=>{let{__scopeAccordion:t,disabled:n,dir:a,orientation:r="vertical",...i}=e,l=o.useRef(null),s=q(l,c),$=oe(t),f=Z(a)==="ltr",C=F(e.onKeyDown,m=>{var x;if(!ee.includes(m.key))return;let z=m.target,E=$().filter(h=>{var w;return!((w=h.ref.current)!==null&&w!==void 0&&w.disabled)}),v=E.findIndex(h=>h.ref.current===z),S=E.length;if(v===-1)return;m.preventDefault();let d=v,I=0,_=S-1,y=()=>{d=v+1,d>_&&(d=I)},N=()=>{d=v-1,d<I&&(d=_)};switch(m.key){case"Home":d=I;break;case"End":d=_;break;case"ArrowRight":r==="horizontal"&&(f?y():N());break;case"ArrowDown":r==="vertical"&&y();break;case"ArrowLeft":r==="horizontal"&&(f?N():y());break;case"ArrowUp":r==="vertical"&&N();break}let G=d%S;(x=E[G].ref.current)===null||x===void 0||x.focus()});return o.createElement(ie,{scope:t,disabled:n,direction:a,orientation:r},o.createElement(R.Slot,{scope:t},o.createElement(B.div,b({},i,{"data-orientation":r,ref:s,onKeyDown:n?void 0:C}))))}),D="AccordionItem",[le,j]=g(D),se=o.forwardRef((e,c)=>{let{__scopeAccordion:t,value:n,...a}=e,r=A(D,t),i=re(D,t),l=P(t),s=X(),$=n&&i.value.includes(n)||!1,u=r.disabled||e.disabled;return o.createElement(le,{scope:t,open:$,disabled:u,triggerId:s},o.createElement(J,b({"data-orientation":r.orientation,"data-state":L($)},l,a,{ref:c,disabled:u,open:$,onOpenChange:f=>{f?i.onItemOpen(n):i.onItemClose(n)}})))}),de="AccordionHeader",be=o.forwardRef((e,c)=>{let{__scopeAccordion:t,...n}=e,a=A(p,t),r=j(de,t);return o.createElement(B.h3,b({"data-orientation":a.orientation,"data-state":L(r.open),"data-disabled":r.disabled?"":void 0},n,{ref:c}))}),O="AccordionTrigger",fe=o.forwardRef((e,c)=>{let{__scopeAccordion:t,...n}=e,a=A(p,t),r=j(O,t),i=ne(O,t),l=P(t);return o.createElement(R.ItemSlot,{scope:t},o.createElement(Q,b({"aria-disabled":r.open&&!i.collapsible||void 0,"data-orientation":a.orientation,id:r.triggerId},l,n,{ref:c})))}),pe="AccordionContent",$e=o.forwardRef((e,c)=>{let{__scopeAccordion:t,...n}=e,a=A(p,t),r=j(pe,t),i=P(t);return o.createElement(W,b({role:"region","aria-labelledby":r.triggerId,"data-orientation":a.orientation},i,n,{ref:c,style:{"--radix-accordion-content-height":"var(--radix-collapsible-content-height)","--radix-accordion-content-width":"var(--radix-collapsible-content-width)",...e.style}}))});function L(e){return e?"open":"closed"}var he=T,we=se,De=be,Re=fe,Pe=$e;export{T as Accordion,$e as AccordionContent,be as AccordionHeader,se as AccordionItem,fe as AccordionTrigger,Pe as Content,De as Header,we as Item,he as Root,Re as Trigger,Ne as createAccordionScope};
//# sourceMappingURL=react-accordion.mjs.map