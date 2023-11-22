"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8911],{5545:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>l,frontMatter:()=>s,metadata:()=>a,toc:()=>u});var r=n(5735),o=n(4474);const s={},c="useIsMounted",a={id:"react/hooks/useIsMounted",title:"useIsMounted",description:"A custom hook to check whether a Component is mounted in the browser.",source:"@site/docs/react/hooks/useIsMounted.mdx",sourceDirName:"react/hooks",slug:"/react/hooks/useIsMounted",permalink:"/devgrace/docs/react/hooks/useIsMounted",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"useInterval",permalink:"/devgrace/docs/react/hooks/useInterval"},next:{title:"useIsomorphicLayoutEffect",permalink:"/devgrace/docs/react/hooks/useIsomorphicLayoutEffect"}},i={},u=[{value:"Interface",id:"interface",level:2},{value:"Usage",id:"usage",level:2}];function d(e){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,o.ah)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"useismounted",children:"useIsMounted"}),"\n",(0,r.jsx)(t.p,{children:"A custom hook to check whether a Component is mounted in the browser."}),"\n",(0,r.jsxs)(t.p,{children:["It can also be used in ",(0,r.jsx)(t.code,{children:"SSR"})," environments to guarantee that the actual component is mounted in the browser. (Feat. Hydration Error)"]}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(t.h2,{id:"interface",children:"Interface"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"const useIsMounted: () => boolean\n"})}),"\n",(0,r.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"import { useIsMounted } from '@devgrace/react';\n\nconst Example = () => {\n  const isMounted = useIsMounted();\n\n  return <div>{isMounted ? 'done' : 'in progress'}</div>;\n};\n"})})]})}function l(e={}){const{wrapper:t}={...(0,o.ah)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},4474:(e,t,n)=>{n.d(t,{ah:()=>u});var r=n(4614);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},l=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,i=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),p=u(n),h=o,f=p["".concat(i,".").concat(h)]||p[h]||d[h]||s;return n?r.createElement(f,c(c({ref:t},l),{},{components:n})):r.createElement(f,c({ref:t},l))}));l.displayName="MDXCreateElement"}}]);