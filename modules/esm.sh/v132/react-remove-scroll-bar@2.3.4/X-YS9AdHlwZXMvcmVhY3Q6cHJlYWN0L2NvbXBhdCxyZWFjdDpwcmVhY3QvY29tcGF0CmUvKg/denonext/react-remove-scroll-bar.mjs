/* esm.sh - esbuild bundle(react-remove-scroll-bar@2.3.4) denonext production */
import*as l from"../../../../../esm.sh/preact@10.19.6/compat.js";
import{styleSingleton as u}from"../../../../../esm.sh/v132/_react-style-singleton@2.2.1.js";
var i="right-scroll-bar-position",c="width-before-scroll-bar",g="with-scroll-bars-hidden",p="--removed-body-scroll-bar-size";var v={left:0,top:0,right:0,gap:0},m=function(n){return parseInt(n||"",10)||0},h=function(n){var a=window.getComputedStyle(document.body),r=a[n==="padding"?"paddingLeft":"marginLeft"],t=a[n==="padding"?"paddingTop":"marginTop"],o=a[n==="padding"?"paddingRight":"marginRight"];return[m(r),m(t),m(o)]},s=function(n){if(n===void 0&&(n="margin"),typeof window>"u")return v;var a=h(n),r=document.documentElement.clientWidth,t=window.innerWidth;return{left:a[0],top:a[1],right:a[2],gap:Math.max(0,t-r+a[2]-a[0])}};var x=u(),b=function(n,a,r,t){var o=n.left,d=n.top,f=n.right,e=n.gap;return r===void 0&&(r="margin"),`
  .`.concat(g,` {
   overflow: hidden `).concat(t,`;
   padding-right: `).concat(e,"px ").concat(t,`;
  }
  body {
    overflow: hidden `).concat(t,`;
    overscroll-behavior: contain;
    `).concat([a&&"position: relative ".concat(t,";"),r==="margin"&&`
    padding-left: `.concat(o,`px;
    padding-top: `).concat(d,`px;
    padding-right: `).concat(f,`px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(e,"px ").concat(t,`;
    `),r==="padding"&&"padding-right: ".concat(e,"px ").concat(t,";")].filter(Boolean).join(""),`
  }
  
  .`).concat(i,` {
    right: `).concat(e,"px ").concat(t,`;
  }
  
  .`).concat(c,` {
    margin-right: `).concat(e,"px ").concat(t,`;
  }
  
  .`).concat(i," .").concat(i,` {
    right: 0 `).concat(t,`;
  }
  
  .`).concat(c," .").concat(c,` {
    margin-right: 0 `).concat(t,`;
  }
  
  body {
    `).concat(p,": ").concat(e,`px;
  }
`)},w=function(n){var a=n.noRelative,r=n.noImportant,t=n.gapMode,o=t===void 0?"margin":t,d=l.useMemo(function(){return s(o)},[o]);return l.createElement(x,{styles:b(d,!a,o,r?"":"!important")})};export{w as RemoveScrollBar,c as fullWidthClassName,s as getGapWidth,g as noScrollbarsClassName,p as removedBarSizeVariable,i as zeroRightClassName};
//# sourceMappingURL=react-remove-scroll-bar.mjs.map