/*! For license information please see eb736ecc.4786b305.js.LICENSE.txt */
"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[472],{6164:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>y});var n=r(5721);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},f="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),f=u(r),d=o,y=f["".concat(c,".").concat(d)]||f[d]||p[d]||i;return r?n.createElement(y,a(a({ref:t},s),{},{components:r})):n.createElement(y,a({ref:t},s))}));function y(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[f]="string"==typeof e?e:o,a[1]=l;for(var u=2;u<i;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8138:(e,t,r)=>{r.d(t,{AB:()=>a,df:()=>c,wY:()=>u});var n=r(6521),o=r(5721);r(6157);function i(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r}"function"==typeof SuppressedError&&SuppressedError;"function"==typeof SuppressedError&&SuppressedError;const a=e=>{let{children:t}=e;const r=Math.random()<.5?0:1,n=o.Children.toArray(t);let i=0,l=0;if(2!==n.length)return null;for(const o of n){if(![a.CaseA,a.CaseB].includes(o.type))return null;o.type===a.CaseA?i+=1:l+=1}return i>=2||l>=2?null:r?n[0]:n[1]};a.CaseA=e=>{let{children:t}=e;return(0,n.jsx)(o.Fragment,{children:t})},a.CaseB=e=>{let{children:t}=e;return(0,n.jsx)(o.Fragment,{children:t})};const l=e=>{let{action:t,calledOnce:r=!1,root:n=null,threshold:i=0,rootMargin:a="0px 0px 0px 0px"}=e;const l=(0,o.useRef)(null),c=(0,o.useCallback)(((e,n)=>{let[o]=e;if(o&&o.isIntersecting){const e=o.target;t&&t(o),l.current&&r&&n.unobserve(e)}}),[t,r]);return(0,o.useEffect)((()=>{const e=l.current;if("undefined"==typeof IntersectionObserver)return;if(!e)return;const t=new IntersectionObserver(c,{root:n,rootMargin:a,threshold:i});return t.observe(e),()=>{t.unobserve(e)}}),[n,i,a,c]),l},c=e=>{var{children:t,style:r}=e,o=i(e,["children","style"]);const a=l(Object.assign({},o));return(0,n.jsx)("div",{ref:a,style:r,children:t})},u=(0,o.forwardRef)(((e,t)=>{var{src:r,fallback:a,threshold:c,root:u,rootMargin:s,width:f,height:p,duration:d=0}=e,y=i(e,["src","fallback","threshold","root","rootMargin","width","height","duration"]);const[m,v]=(0,o.useState)(!1),h=l({action:e=>{e.target.src=r},calledOnce:!0,threshold:c,root:u,rootMargin:s}),b=(0,o.useMemo)((()=>({position:"relative",width:"number"==typeof f?`${f}px`:f,height:"number"==typeof p?`${p}px`:p})),[f,p]),g=(0,o.useMemo)((()=>({position:"absolute",left:0,top:0,width:"100%",height:"100%",opacity:m?1:0,transition:`opacity ${d/1e3}s`})),[m,d]);return(0,n.jsxs)("div",{ref:t,style:b,children:[!m&&a?a:null,(0,n.jsx)("img",Object.assign({},y,{style:g,ref:h,onLoad:()=>v(!0)}))]})}));var s="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==r.g?r.g:"undefined"!=typeof self?self:{};var f=/^\s+|\s+$/g,p=/^[-+]0x[0-9a-f]+$/i,d=/^0b[01]+$/i,y=/^0o[0-7]+$/i,m=parseInt,v="object"==typeof s&&s&&s.Object===Object&&s,h="object"==typeof self&&self&&self.Object===Object&&self,b=v||h||Function("return this")(),g=Object.prototype.toString,O=Math.max,k=Math.min,w=function(){return b.Date.now()};function x(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function j(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==g.call(e)}(e))return NaN;if(x(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=x(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(f,"");var r=d.test(e);return r||y.test(e)?m(e.slice(2),r?2:8):p.test(e)?NaN:+e}!function(e){e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")&&e.default}((function(e,t,r){var n,o,i,a,l,c,u=0,s=!1,f=!1,p=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function d(t){var r=n,i=o;return n=o=void 0,u=t,a=e.apply(i,r)}function y(e){var r=e-c;return void 0===c||r>=t||r<0||f&&e-u>=i}function m(){var e=w();if(y(e))return v(e);l=setTimeout(m,function(e){var r=t-(e-c);return f?k(r,i-(e-u)):r}(e))}function v(e){return l=void 0,p&&n?d(e):(n=o=void 0,a)}function h(){var e=w(),r=y(e);if(n=arguments,o=this,c=e,r){if(void 0===l)return function(e){return u=e,l=setTimeout(m,t),s?d(e):a}(c);if(f)return l=setTimeout(m,t),d(c)}return void 0===l&&(l=setTimeout(m,t)),a}return t=j(t)||0,x(r)&&(s=!!r.leading,i=(f="maxWait"in r)?O(j(r.maxWait)||0,t):i,p="trailing"in r?!!r.trailing:p),h.cancel=function(){void 0!==l&&clearTimeout(l),u=0,n=c=o=l=void 0},h.flush=function(){return void 0===l?a:v(w())},h}));"undefined"!=typeof window||void 0===r.g?o.useLayoutEffect:o.useEffect},7922:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var n=r(6529),o=(r(5721),r(6164)),i=r(8138);const a={},l="AB",c={unversionedId:"react/components/AB",id:"react/components/AB",title:"AB",description:"AB \ud14c\uc2a4\ud2b8\ud560 \ub54c \uc0ac\uc6a9\ud560 \uc218 \uc788\ub294 \ucef4\ud3ec\ub10c\ud2b8\uc785\ub2c8\ub2e4.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/react/components/AB.mdx",sourceDirName:"react/components",slug:"/react/components/AB",permalink:"/devgrace/ko/docs/react/components/AB",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\uc18c\uac1c",permalink:"/devgrace/ko/docs/introduce/"},next:{title:"InView",permalink:"/devgrace/ko/docs/react/components/InView"}},u={},s=[{value:"Interface",id:"interface",level:2},{value:"Usage",id:"usage",level:2},{value:"Example",id:"example",level:2}],f={toc:s},p="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"ab"},"AB"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"AB \ud14c\uc2a4\ud2b8"),"\ud560 \ub54c \uc0ac\uc6a9\ud560 \uc218 \uc788\ub294 \ucef4\ud3ec\ub10c\ud2b8\uc785\ub2c8\ub2e4. "),(0,o.kt)("p",null,"\uc544\ub798\uc640 \uac19\uc774 \uc62c\ubc14\ub974\uac8c \uc0ac\uc6a9\ud558\uc9c0 \uc54a\uc73c\uba74 ",(0,o.kt)("inlineCode",{parentName:"p"},"null"),"\uc744 \ubc18\ud658\ud569\ub2c8\ub2e4."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\uc62c\ubc14\ub974\uc9c0 \uc54a\uc740 \ucef4\ud3ec\ub10c\ud2b8 \ud0c0\uc785\uc744 \uc0ac\uc6a9 (AB.CaseA. AB.CaseB)"),(0,o.kt)("li",{parentName:"ul"},"\uc911\ubcf5\ub41c \ucef4\ud3ec\ub10c\ud2b8 \ud0c0\uc785\uc744 \uc0ac\uc6a9"),(0,o.kt)("li",{parentName:"ul"},"\uc790\uc2dd \ucef4\ud3ec\ub10c\ud2b8 \uae38\uc774\uac00 ",(0,o.kt)("inlineCode",{parentName:"li"},"2"),"\uac00 \uc544\ub2cc \uacbd\uc6b0")),(0,o.kt)("br",null),(0,o.kt)("h2",{id:"interface"},"Interface"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"const AB: {\n  ({ children }: { children: React.ReactNode }): JSX.Element | null;\n  CaseA({ children }: { children: React.ReactNode }): JSX.Element;\n  CaseB({ children }: { children: React.ReactNode }): JSX.Element;\n}\n")),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import { AB } from '@devgrace/react';\n\nconst { CaseA, CaseB } = AB;\n\nconst Example = () => {\n  return (\n    <AB>\n      <CaseA>\n        <div>A</div>\n      </CaseA>\n      <CaseB>\n        <div>B</div>\n      </CaseB>\n    </AB>\n  );\n}; \n")),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("div",null,(0,o.kt)("p",null,"\ud398\uc774\uc9c0\ub97c \uc0c8\ub85c\uace0\uce68 \ud558\uba74 \uac12\uc774 \ubcc0\uacbd\ub429\ub2c8\ub2e4."),(0,o.kt)(i.AB,{mdxType:"AB"},(0,o.kt)(i.AB.CaseA,null,(0,o.kt)("div",{style:{width:"50px",backgroundColor:"green",color:"white",fontSize:"2rem",textAlign:"center"}},"A")),(0,o.kt)(i.AB.CaseB,null,(0,o.kt)("div",{style:{width:"50px",backgroundColor:"green",color:"white",fontSize:"2rem",textAlign:"center"}},"B")))))}d.isMDXComponent=!0},5657:(e,t,r)=>{var n=r(5721),o=Symbol.for("react.element"),i=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,l=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function u(e,t,r){var n,i={},u=null,s=null;for(n in void 0!==r&&(u=""+r),void 0!==t.key&&(u=""+t.key),void 0!==t.ref&&(s=t.ref),t)a.call(t,n)&&!c.hasOwnProperty(n)&&(i[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===i[n]&&(i[n]=t[n]);return{$$typeof:o,type:e,key:u,ref:s,props:i,_owner:l.current}}t.jsx=u,t.jsxs=u},6521:(e,t,r)=>{e.exports=r(5657)}}]);