/*! For license information please see 9be130a4.de96bbd3.js.LICENSE.txt */
"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5337],{6164:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>v});var n=r(5721);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},u=Object.keys(e);for(n=0;n<u.length;n++)r=u[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(n=0;n<u.length;n++)r=u[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),a=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=a(e.components);return n.createElement(c.Provider,{value:t},e.children)},f="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,u=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),f=a(r),d=o,v=f["".concat(c,".").concat(d)]||f[d]||p[d]||u;return r?n.createElement(v,i(i({ref:t},l),{},{components:r})):n.createElement(v,i({ref:t},l))}));function v(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var u=r.length,i=new Array(u);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[f]="string"==typeof e?e:o,i[1]=s;for(var a=2;a<u;a++)i[a]=r[a];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8138:(e,t,r)=>{r.d(t,{AB:()=>s,D9:()=>R,df:()=>f,iP:()=>I,wY:()=>p,yU:()=>_});var n=r(6521),o=r(5721);r(6157);function u(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r}"function"==typeof SuppressedError&&SuppressedError;"function"==typeof SuppressedError&&SuppressedError;const i=()=>"undefined"==typeof window&&void 0!==r.g,s=e=>{let{children:t}=e;const r=Math.random()<.5?0:1,n=o.Children.toArray(t);let u=0,i=0;if(2!==n.length)return null;for(const o of n){if(![s.CaseA,s.CaseB].includes(o.type))return null;o.type===s.CaseA?u+=1:i+=1}return u>=2||i>=2?null:r?n[0]:n[1]};s.CaseA=e=>{let{children:t}=e;return(0,n.jsx)(o.Fragment,{children:t})},s.CaseB=e=>{let{children:t}=e;return(0,n.jsx)(o.Fragment,{children:t})};const c=e=>{const t=(0,o.useRef)(e);return(0,o.useEffect)((()=>{t.current=e}),[e]),(0,o.useCallback)((function(){for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];return t.current(1===r.length?r[0]:r)}),[])},a=e=>{let{action:t,calledOnce:r=!1,root:n=null,threshold:u=0,rootMargin:i="0px 0px 0px 0px"}=e;const s=(0,o.useRef)(null),a=c(t),l=(0,o.useCallback)(((e,t)=>{let[n]=e;if(n&&n.isIntersecting){const e=n.target;a&&a(n),r&&t.unobserve(e)}}),[a,r]);return(0,o.useEffect)((()=>{const e=s.current;if("undefined"==typeof IntersectionObserver)return;if(!e)return;const t=new IntersectionObserver(l,{root:n,rootMargin:i,threshold:u});return t.observe(e),()=>{t.unobserve(e)}}),[n,u,i,l]),s},l=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,o.useCallback)((e=>{t.forEach((t=>{"function"==typeof t?t(e):null!=t&&(t.current=e)}))}),[...t])},f=(0,o.forwardRef)(((e,t)=>{const{action:r,calledOnce:o,threshold:i,root:s,rootMargin:c}=e,f=u(e,["action","calledOnce","threshold","root","rootMargin"]),p=a({action:r,calledOnce:o,threshold:i,root:s,rootMargin:c});return(0,n.jsx)("div",Object.assign({ref:l(t,p)},f,{children:e.children}))})),p=(0,o.forwardRef)(((e,t)=>{var{src:r,style:i,threshold:s,root:c,rootMargin:f}=e,p=u(e,["src","style","threshold","root","rootMargin"]);const d=a({action:e=>{e.target.src=r},calledOnce:!0,threshold:s,root:c,rootMargin:f}),v=(0,o.useMemo)((()=>Object.assign({display:"inline-block"},i)),[i]);return(0,n.jsx)("img",Object.assign({},p,{ref:l(t,d),style:v}))}));var d="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==r.g?r.g:"undefined"!=typeof self?self:{};var v=/^\s+|\s+$/g,y=/^[-+]0x[0-9a-f]+$/i,h=/^0b[01]+$/i,m=/^0o[0-7]+$/i,b=parseInt,g="object"==typeof d&&d&&d.Object===Object&&d,O="object"==typeof self&&self&&self.Object===Object&&self,w=g||O||Function("return this")(),k=Object.prototype.toString,j=Math.max,E=Math.min,x=function(){return w.Date.now()};function P(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function C(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==k.call(e)}(e))return NaN;if(P(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=P(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(v,"");var r=h.test(e);return r||m.test(e)?b(e.slice(2),r?2:8):y.test(e)?NaN:+e}var T=function(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}((function(e,t,r){var n,o,u,i,s,c,a=0,l=!1,f=!1,p=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function d(t){var r=n,u=o;return n=o=void 0,a=t,i=e.apply(u,r)}function v(e){var r=e-c;return void 0===c||r>=t||r<0||f&&e-a>=u}function y(){var e=x();if(v(e))return h(e);s=setTimeout(y,function(e){var r=t-(e-c);return f?E(r,u-(e-a)):r}(e))}function h(e){return s=void 0,p&&n?d(e):(n=o=void 0,i)}function m(){var e=x(),r=v(e);if(n=arguments,o=this,c=e,r){if(void 0===s)return function(e){return a=e,s=setTimeout(y,t),l?d(e):i}(c);if(f)return s=setTimeout(y,t),d(c)}return void 0===s&&(s=setTimeout(y,t)),i}return t=C(t)||0,P(r)&&(l=!!r.leading,u=(f="maxWait"in r)?j(C(r.maxWait)||0,t):u,p="trailing"in r?!!r.trailing:p),m.cancel=function(){void 0!==s&&clearTimeout(s),a=0,n=c=o=s=void 0},m.flush=function(){return void 0===s?i:h(x())},m}));const S=function(e,t,r){void 0===r&&(r={});const n=(0,o.useMemo)((()=>T(e,t,r)),[e,t,r]);return(e=>{const t=(0,o.useRef)(e);(0,o.useEffect)((()=>{t.current=e}),[e]),(0,o.useEffect)((()=>()=>t.current()),[])})((()=>n.cancel())),n},M=i()?o.useEffect:o.useLayoutEffect,R=e=>{const t=(0,o.useRef)(e);return(0,o.useEffect)((()=>{t.current=e}),[e]),t.current},_=e=>{const[t,r]=(0,o.useState)({bottom:0,height:0,left:0,right:0,top:0,width:0,x:0,y:0}),n=(0,o.useRef)(null),u=c(e),i=(0,o.useCallback)((e=>{let[t]=e;t&&(u(t),r(t.contentRect))}),[u]);return(0,o.useEffect)((()=>{const e=n.current;if("undefined"==typeof ResizeObserver)return;if(!e)return;const t=new ResizeObserver(i);return t.observe(e),()=>{t.unobserve(e)}}),[i]),{ref:n,contentRect:t}},I=function(e){void 0===e&&(e={});const{isDebounce:t=!1,wait:r=300}=e,[n,u]=(0,o.useState)({width:null,height:null}),i=(0,o.useCallback)((()=>{u({width:window.innerWidth,height:window.innerHeight})}),[]),s=S(i,r),c=(0,o.useMemo)((()=>t?s:i),[i,t,s]);return M((()=>(i(),window.addEventListener("resize",c),()=>{window.removeEventListener("resize",c)})),[]),n}},5843:(e,t,r)=>{r.r(t),r.d(t,{Example:()=>p,assets:()=>l,contentTitle:()=>c,default:()=>y,frontMatter:()=>s,metadata:()=>a,toc:()=>f});var n=r(6529),o=r(5721),u=r(6164),i=r(8138);const s={},c="usePrevious",a={unversionedId:"react/hooks/usePrevious",id:"react/hooks/usePrevious",title:"usePrevious",description:"A custom hook that returns the value of the argument from the previous render.",source:"@site/docs/react/hooks/usePrevious.mdx",sourceDirName:"react/hooks",slug:"/react/hooks/usePrevious",permalink:"/devgrace/docs/react/hooks/usePrevious",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"usePreservedCallback",permalink:"/devgrace/docs/react/hooks/usePreservedCallback"},next:{title:"useResizeObserver",permalink:"/devgrace/docs/react/hooks/useResizeObserver"}},l={},f=[{value:"Interface",id:"interface",level:2},{value:"Usage",id:"usage",level:2}],p=()=>{const[e,t]=(0,o.useState)(0),r=(0,i.D9)(e);return(0,u.kt)("div",null,(0,u.kt)("div",null,"Current Count is - ",e),(0,u.kt)("div",null,"Previous Count is - ",r),(0,u.kt)("button",{onClick:()=>{t(e+1)}},"Increment"))},d={toc:f,Example:p},v="wrapper";function y(e){let{components:t,...r}=e;return(0,u.kt)(v,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,u.kt)("h1",{id:"useprevious"},"usePrevious"),(0,u.kt)("p",null,"A custom hook that returns the value of the argument from the previous render."),(0,u.kt)("br",null),(0,u.kt)("h2",{id:"interface"},"Interface"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-tsx"},"const usePrevious: <T>(value: T) => T;\n")),(0,u.kt)("h2",{id:"usage"},"Usage"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-tsx"},"import { usePrevious } from '@devgrace/react';\nimport { useState } from 'react';\n\nconst Example = () => {\n  const [count, setCount] = useState(0);\n  const previousCount = usePrevious(count);\n\n  const onIncrementCount = () => {\n    setCount(count + 1);\n  };\n\n  return (\n    <div>\n      <div>Current Count is - {count}</div>\n      <div>Previous Count is - {previousCount}</div>\n      <button onClick={onIncrementCount}>Increment</button>\n    </div>\n  );\n};\n")),(0,u.kt)(p,{mdxType:"Example"}))}y.isMDXComponent=!0},5657:(e,t,r)=>{var n=r(5721),o=Symbol.for("react.element"),u=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,s=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function a(e,t,r){var n,u={},a=null,l=null;for(n in void 0!==r&&(a=""+r),void 0!==t.key&&(a=""+t.key),void 0!==t.ref&&(l=t.ref),t)i.call(t,n)&&!c.hasOwnProperty(n)&&(u[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===u[n]&&(u[n]=t[n]);return{$$typeof:o,type:e,key:a,ref:l,props:u,_owner:s.current}}t.jsx=a,t.jsxs=a},6521:(e,t,r)=>{e.exports=r(5657)}}]);