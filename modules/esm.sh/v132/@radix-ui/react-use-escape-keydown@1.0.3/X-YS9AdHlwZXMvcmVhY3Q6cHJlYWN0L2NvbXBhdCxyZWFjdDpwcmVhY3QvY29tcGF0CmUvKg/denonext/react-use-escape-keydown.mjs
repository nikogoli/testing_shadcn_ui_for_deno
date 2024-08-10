/* esm.sh - esbuild bundle(@radix-ui/react-use-escape-keydown@1.0.3) denonext production */
import{useEffect as l}from"../../../../../../esm.sh/preact@10.19.6/compat.js";
import{useCallbackRef as n}from"../../../../../../esm.sh/v132/_@radix-ui/react-use-callback-ref@1.0.1.js";
function i(d,e=globalThis?.document){let a=n(d);l(()=>{let o=s=>{s.key==="Escape"&&a(s)};return e.addEventListener("keydown",o),()=>e.removeEventListener("keydown",o)},[a,e])}export{i as useEscapeKeydown};
//# sourceMappingURL=react-use-escape-keydown.mjs.map