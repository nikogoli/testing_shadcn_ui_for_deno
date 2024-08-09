/* esm.sh - esbuild bundle(@radix-ui/react-use-controllable-state@1.0.1) denonext production */
import{useCallback as d,useState as b,useRef as i,useEffect as C}from"../../../../../../esm.sh/preact@10.19.6/compat.js";
import{useCallbackRef as r}from"../../../../../../esm.sh/v132/_@radix-ui/react-use-callback-ref@1.0.1.js";
function w({prop:e,defaultProp:a,onChange:s=()=>{}}){let[t,n]=P({defaultProp:a,onChange:s}),o=e!==void 0,f=o?e:t,l=r(s),$=d(c=>{if(o){let u=typeof c=="function"?c(e):c;u!==e&&l(u)}else n(c)},[o,e,n,l]);return[f,$]}function P({defaultProp:e,onChange:a}){let s=b(e),[t]=s,n=i(t),o=r(a);return C(()=>{n.current!==t&&(o(t),n.current=t)},[t,n,o]),s}export{w as useControllableState};
//# sourceMappingURL=react-use-controllable-state.mjs.map