/* esm.sh - esbuild bundle(react-style-singleton@2.2.1) denonext production */
import*as l from"../../../../../esm.sh/preact@10.19.6/compat.js";
import{getNonce as a}from"../../../../../esm.sh/get-nonce@1.0.1.js";
function c(){if(!document)return null;var t=document.createElement("style");t.type="text/css";var e=a();return e&&t.setAttribute("nonce",e),t}function s(t,e){t.styleSheet?t.styleSheet.cssText=e:t.appendChild(document.createTextNode(e))}function f(t){var e=document.head||document.getElementsByTagName("head")[0];e.appendChild(t)}var o=function(){var t=0,e=null;return{add:function(n){t==0&&(e=c())&&(s(e,n),f(e)),t++},remove:function(){t--,!t&&e&&(e.parentNode&&e.parentNode.removeChild(e),e=null)}}};var r=function(){var t=o();return function(e,n){l.useEffect(function(){return t.add(e),function(){t.remove()}},[e&&n])}};var m=function(){var t=r(),e=function(n){var i=n.styles,u=n.dynamic;return t(i,u),null};return e};export{r as styleHookSingleton,m as styleSingleton,o as stylesheetSingleton};
//# sourceMappingURL=react-style-singleton.mjs.map