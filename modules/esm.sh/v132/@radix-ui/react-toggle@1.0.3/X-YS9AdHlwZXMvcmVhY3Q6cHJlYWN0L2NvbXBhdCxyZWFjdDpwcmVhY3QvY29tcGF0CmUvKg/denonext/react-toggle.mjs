/* esm.sh - esbuild bundle(@radix-ui/react-toggle@1.0.3) denonext production */
import d from"../../../../../../esm.sh/@babel/runtime@7.23.1/helpers/esm/extends.js";
import{forwardRef as l,createElement as f}from"../../../../../../esm.sh/preact@10.19.6/compat.js";
import{composeEventHandlers as i}from"../../../../../../esm.sh/_@radix-ui/primitive@1.0.1.js";
import{useControllableState as $}from"../../../../../../esm.sh/v132/_@radix-ui/react-use-controllable-state@1.0.1.js";
import{Primitive as m}from"../../../../../../esm.sh/v132/_@radix-ui/react-primitive@1.0.3.js";
var c=l((e,t)=>{let{pressed:o,defaultPressed:a=!1,onPressedChange:r,...n}=e,[s=!1,b]=$({prop:o,onChange:r,defaultProp:a});return f(m.button,d({type:"button","aria-pressed":s,"data-state":s?"on":"off","data-disabled":e.disabled?"":void 0},n,{ref:t,onClick:i(e.onClick,()=>{e.disabled||b(!s)})}))}),A=c;export{A as Root,c as Toggle};
//# sourceMappingURL=react-toggle.mjs.map