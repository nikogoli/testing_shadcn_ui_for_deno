/* esm.sh - esbuild bundle(@radix-ui/react-use-size@1.0.1) denonext production */
import{useState as h}from"../../../../../../esm.sh/preact@10.19.6/compat.js";
import{useLayoutEffect as n}from"../../../../../../esm.sh/v132/_@radix-ui/react-use-layout-effect@1.0.1.js";
function z(e){let[u,r]=h(void 0);return n(()=>{if(e){r({width:e.offsetWidth,height:e.offsetHeight});let f=new ResizeObserver(i=>{if(!Array.isArray(i)||!i.length)return;let b=i[0],t,o;if("borderBoxSize"in b){let s=b.borderBoxSize,d=Array.isArray(s)?s[0]:s;t=d.inlineSize,o=d.blockSize}else t=e.offsetWidth,o=e.offsetHeight;r({width:t,height:o})});return f.observe(e,{box:"border-box"}),()=>f.unobserve(e)}else r(void 0)},[e]),u}export{z as useSize};
//# sourceMappingURL=react-use-size.mjs.map