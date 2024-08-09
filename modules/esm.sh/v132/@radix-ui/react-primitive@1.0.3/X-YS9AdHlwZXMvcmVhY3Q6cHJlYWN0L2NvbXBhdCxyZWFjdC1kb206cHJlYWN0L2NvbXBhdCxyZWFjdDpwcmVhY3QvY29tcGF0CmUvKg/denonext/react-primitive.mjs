/* esm.sh - esbuild bundle(@radix-ui/react-primitive@1.0.3) denonext production */
import c from"../../../../../../esm.sh/@babel/runtime@7.23.1/helpers/esm/extends.js";
import{forwardRef as $,useEffect as m,createElement as n}from"../../../../../../esm.sh/preact@10.19.6/compat.js";
import{flushSync as p}from"../../../../../../esm.sh/preact@10.19.6/compat.js";
import{Slot as l}from"../../../../../../esm.sh/v132/_@radix-ui/react-slot@1.0.2.js";
var d=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"],u=d.reduce((t,e)=>{let f=$((r,o)=>{let{asChild:s,...a}=r,i=s?l:e;return m(()=>{window[Symbol.for("radix-ui")]=!0},[]),n(i,c({},a,{ref:o}))});return f.displayName=`Primitive.${e}`,{...t,[e]:f}},{});function E(t,e){t&&p(()=>t.dispatchEvent(e))}var x=u;export{u as Primitive,x as Root,E as dispatchDiscreteCustomEvent};
//# sourceMappingURL=react-primitive.mjs.map