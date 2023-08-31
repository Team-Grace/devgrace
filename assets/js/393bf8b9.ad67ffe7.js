/*! For license information please see 393bf8b9.ad67ffe7.js.LICENSE.txt */
"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[946],{6164:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>y});var r=n(5721);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(n),d=o,y=p["".concat(c,".").concat(d)]||p[d]||f[d]||i;return n?r.createElement(y,a(a({ref:t},u),{},{components:n})):r.createElement(y,a({ref:t},u))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8138:(e,t,n)=>{n.d(t,{AB:()=>a,df:()=>c,wY:()=>s});var r=n(6521),o=n(5721);n(6157);function i(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}"function"==typeof SuppressedError&&SuppressedError;"function"==typeof SuppressedError&&SuppressedError;const a=e=>{let{children:t}=e;const n=Math.random()<.5?0:1,r=o.Children.toArray(t);let i=0,l=0;if(2!==r.length)return null;for(const o of r){if(![a.CaseA,a.CaseB].includes(o.type))return null;o.type===a.CaseA?i+=1:l+=1}return i>=2||l>=2?null:n?r[0]:r[1]};a.CaseA=e=>{let{children:t}=e;return(0,r.jsx)(o.Fragment,{children:t})},a.CaseB=e=>{let{children:t}=e;return(0,r.jsx)(o.Fragment,{children:t})};const l=e=>{let{action:t,calledOnce:n=!1,root:r=null,threshold:i=0,rootMargin:a="0px 0px 0px 0px"}=e;const l=(0,o.useRef)(null),c=(0,o.useCallback)(((e,r)=>{let[o]=e;if(o&&o.isIntersecting){const e=o.target;t&&t(o),l.current&&n&&r.unobserve(e)}}),[t,n]);return(0,o.useEffect)((()=>{const e=l.current;if("undefined"==typeof IntersectionObserver)return;if(!e)return;const t=new IntersectionObserver(c,{root:r,rootMargin:a,threshold:i});return t.observe(e),()=>{t.unobserve(e)}}),[r,i,a,c]),l},c=e=>{var{children:t,style:n}=e,o=i(e,["children","style"]);const a=l(Object.assign({},o));return(0,r.jsx)("div",{ref:a,style:n,children:t})},s=(0,o.forwardRef)(((e,t)=>{var{src:n,fallback:a,threshold:c,root:s,rootMargin:u,width:p,height:f,duration:d=0}=e,y=i(e,["src","fallback","threshold","root","rootMargin","width","height","duration"]);const[m,v]=(0,o.useState)(!1),h=l({action:e=>{e.target.src=n},calledOnce:!0,threshold:c,root:s,rootMargin:u}),g=(0,o.useMemo)((()=>({position:"relative",width:"number"==typeof p?`${p}px`:p,height:"number"==typeof f?`${f}px`:f})),[p,f]),b=(0,o.useMemo)((()=>({position:"absolute",left:0,top:0,width:"100%",height:"100%",opacity:m?1:0,transition:`opacity ${d/1e3}s`})),[m,d]);return(0,r.jsxs)("div",{ref:t,style:g,children:[!m&&a?a:null,(0,r.jsx)("img",Object.assign({},y,{style:b,ref:h,onLoad:()=>v(!0)}))]})}));var u="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==n.g?n.g:"undefined"!=typeof self?self:{};var p=/^\s+|\s+$/g,f=/^[-+]0x[0-9a-f]+$/i,d=/^0b[01]+$/i,y=/^0o[0-7]+$/i,m=parseInt,v="object"==typeof u&&u&&u.Object===Object&&u,h="object"==typeof self&&self&&self.Object===Object&&self,g=v||h||Function("return this")(),b=Object.prototype.toString,O=Math.max,w=Math.min,k=function(){return g.Date.now()};function x(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function j(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==b.call(e)}(e))return NaN;if(x(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=x(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(p,"");var n=d.test(e);return n||y.test(e)?m(e.slice(2),n?2:8):f.test(e)?NaN:+e}!function(e){e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")&&e.default}((function(e,t,n){var r,o,i,a,l,c,s=0,u=!1,p=!1,f=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function d(t){var n=r,i=o;return r=o=void 0,s=t,a=e.apply(i,n)}function y(e){var n=e-c;return void 0===c||n>=t||n<0||p&&e-s>=i}function m(){var e=k();if(y(e))return v(e);l=setTimeout(m,function(e){var n=t-(e-c);return p?w(n,i-(e-s)):n}(e))}function v(e){return l=void 0,f&&r?d(e):(r=o=void 0,a)}function h(){var e=k(),n=y(e);if(r=arguments,o=this,c=e,n){if(void 0===l)return function(e){return s=e,l=setTimeout(m,t),u?d(e):a}(c);if(p)return l=setTimeout(m,t),d(c)}return void 0===l&&(l=setTimeout(m,t)),a}return t=j(t)||0,x(n)&&(u=!!n.leading,i=(p="maxWait"in n)?O(j(n.maxWait)||0,t):i,f="trailing"in n?!!n.trailing:f),h.cancel=function(){void 0!==l&&clearTimeout(l),s=0,r=c=o=l=void 0},h.flush=function(){return void 0===l?a:v(k())},h}));"undefined"!=typeof window||void 0===n.g?o.useLayoutEffect:o.useEffect},4750:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>u});var r=n(6529),o=(n(5721),n(6164)),i=n(8138);const a={},l="AB",c={unversionedId:"react/components/AB",id:"react/components/AB",title:"AB",description:"Component that can be used when AB testing.",source:"@site/docs/react/components/AB.mdx",sourceDirName:"react/components",slug:"/react/components/AB",permalink:"/devgrace/docs/react/components/AB",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Introduce",permalink:"/devgrace/docs/introduce/"},next:{title:"InView",permalink:"/devgrace/docs/react/components/InView"}},s={},u=[{value:"Interface",id:"interface",level:2},{value:"Usage",id:"usage",level:2},{value:"Example",id:"example",level:2}],p={toc:u},f="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(f,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"ab"},"AB"),(0,o.kt)("p",null,"Component that can be used when ",(0,o.kt)("inlineCode",{parentName:"p"},"AB testing"),"."),(0,o.kt)("p",null,"Returns ",(0,o.kt)("inlineCode",{parentName:"p"},"null")," if not used correctly, as shown below."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Using an invalid component type (AB.CaseA. AB.CaseB)"),(0,o.kt)("li",{parentName:"ul"},"Using a duplicate component type"),(0,o.kt)("li",{parentName:"ul"},"children length is not ",(0,o.kt)("inlineCode",{parentName:"li"},"2"))),(0,o.kt)("br",null),(0,o.kt)("h2",{id:"interface"},"Interface"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"const AB: {\n  ({ children }: { children: React.ReactNode }): JSX.Element | null;\n  CaseA({ children }: { children: React.ReactNode }): JSX.Element;\n  CaseB({ children }: { children: React.ReactNode }): JSX.Element;\n}\n")),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import { AB } from '@devgrace/react';\n\nconst { CaseA, CaseB } = AB;\n\nconst Example = () => {\n  return (\n    <AB>\n      <CaseA>\n        <div>A</div>\n      </CaseA>\n      <CaseB>\n        <div>B</div>\n      </CaseB>\n    </AB>\n  );\n}; \n")),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("div",null,(0,o.kt)("p",null,"Refreshing the page will change the value."),(0,o.kt)(i.AB,{mdxType:"AB"},(0,o.kt)(i.AB.CaseA,null,(0,o.kt)("div",{style:{width:"50px",backgroundColor:"green",color:"white",fontSize:"2rem",textAlign:"center"}},"A")),(0,o.kt)(i.AB.CaseB,null,(0,o.kt)("div",{style:{width:"50px",backgroundColor:"green",color:"white",fontSize:"2rem",textAlign:"center"}},"B")))))}d.isMDXComponent=!0},5657:(e,t,n)=>{var r=n(5721),o=Symbol.for("react.element"),i=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,l=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function s(e,t,n){var r,i={},s=null,u=null;for(r in void 0!==n&&(s=""+n),void 0!==t.key&&(s=""+t.key),void 0!==t.ref&&(u=t.ref),t)a.call(t,r)&&!c.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===i[r]&&(i[r]=t[r]);return{$$typeof:o,type:e,key:s,ref:u,props:i,_owner:l.current}}t.jsx=s,t.jsxs=s},6521:(e,t,n)=>{e.exports=n(5657)}}]);