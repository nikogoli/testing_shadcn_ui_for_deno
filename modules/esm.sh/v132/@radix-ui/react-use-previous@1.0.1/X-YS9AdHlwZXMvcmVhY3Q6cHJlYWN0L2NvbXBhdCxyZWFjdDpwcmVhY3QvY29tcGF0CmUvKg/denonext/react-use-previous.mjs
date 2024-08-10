/* esm.sh - esbuild bundle(@radix-ui/react-use-previous@1.0.1) denonext production */
import{useRef as u,useMemo as s}from"../../../../../../esm.sh/preact@10.19.6/compat.js";
function t(e){let r=u({value:e,previous:e});return s(()=>(r.current.value!==e&&(r.current.previous=r.current.value,r.current.value=e),r.current.previous),[e])}export{t as usePrevious};
//# sourceMappingURL=react-use-previous.mjs.map