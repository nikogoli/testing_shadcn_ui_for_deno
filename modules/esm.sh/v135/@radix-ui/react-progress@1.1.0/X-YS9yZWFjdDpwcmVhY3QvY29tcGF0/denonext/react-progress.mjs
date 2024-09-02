/* esm.sh - esbuild bundle(@radix-ui/react-progress@1.1.0) denonext production */
import*as u from"../../../../../stable/preact@10.19.6/denonext/compat.js";
import{createContextScope as R}from"../../../../../../esm.sh/v132/_@radix-ui/react-context@1.0.1.js";
import{Primitive as m}from"../../../../../../esm.sh/v132/_@radix-ui/react-primitive@1.0.3.js";
import{jsx as l}from"../../../../../stable/preact@10.19.6/denonext/jsx-runtime.js";
var d="Progress",v=100,[$,C]=R(d),[h,_]=$(d),f=u.forwardRef((r,e)=>{let{__scopeProgress:i,value:o=null,max:a,getValueLabel:N=E,...b}=r;(a||a===0)&&!p(a)&&console.error(M(`${a}`,"Progress"));let t=p(a)?a:v;o!==null&&!c(o,t)&&console.error(V(`${o}`,"Progress"));let s=c(o,t)?o:null,I=n(s)?N(s,t):void 0;return l(h,{scope:i,value:s,max:t,children:l(m.div,{"aria-valuemax":t,"aria-valuemin":0,"aria-valuenow":n(s)?s:void 0,"aria-valuetext":I,role:"progressbar","data-state":x(s,t),"data-value":s??void 0,"data-max":t,...b,ref:e})})});f.displayName=d;var g="ProgressIndicator",P=u.forwardRef((r,e)=>{let{__scopeProgress:i,...o}=r,a=_(g,i);return l(m.div,{"data-state":x(a.value,a.max),"data-value":a.value??void 0,"data-max":a.max,...o,ref:e})});P.displayName=g;function E(r,e){return`${Math.round(r/e*100)}%`}function x(r,e){return r==null?"indeterminate":r===e?"complete":"loading"}function n(r){return typeof r=="number"}function p(r){return n(r)&&!isNaN(r)&&r>0}function c(r,e){return n(r)&&!isNaN(r)&&r<=e&&r>=0}function M(r,e){return`Invalid prop \`max\` of value \`${r}\` supplied to \`${e}\`. Only numbers greater than 0 are valid max values. Defaulting to \`${v}\`.`}function V(r,e){return`Invalid prop \`value\` of value \`${r}\` supplied to \`${e}\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${v} if no \`max\` prop is set)
  - \`null\` or \`undefined\` if the progress is indeterminate.

Defaulting to \`null\`.`}var D=f,L=P;export{L as Indicator,f as Progress,P as ProgressIndicator,D as Root,C as createProgressScope};
//# sourceMappingURL=react-progress.mjs.map