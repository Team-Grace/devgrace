"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[939],{6347:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>l,frontMatter:()=>c,metadata:()=>a,toc:()=>u});var n=r(5735),o=r(4474);const c={},s="useIsomorphicLayoutEffect",a={id:"react/hooks/useIsomorphicLayoutEffect",title:"useIsomorphicLayoutEffect",description:"useIsomorphicLayoutEffect\ub294 \uc11c\ubc84 \uc0ac\uc774\ub4dc \ub80c\ub354\ub9c1 \ud658\uacbd\uc5d0\uc11c\ub3c4 \ub3d9\uae30\uc801\uc73c\ub85c \uc2e4\ud589\ub418\ub3c4\ub85d \ubcf4\uc7a5\ud558\ub294 \ucee4\uc2a4\ud140 \ud6c5 \uc785\ub2c8\ub2e4.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/react/hooks/useIsomorphicLayoutEffect.mdx",sourceDirName:"react/hooks",slug:"/react/hooks/useIsomorphicLayoutEffect",permalink:"/devgrace/ko/docs/react/hooks/useIsomorphicLayoutEffect",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"useIsMounted",permalink:"/devgrace/ko/docs/react/hooks/useIsMounted"},next:{title:"useMergeRefs",permalink:"/devgrace/ko/docs/react/hooks/useMergeRefs"}},i={},u=[{value:"Interface",id:"interface",level:2},{value:"Usage",id:"usage",level:2}];function f(e){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,o.ah)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"useisomorphiclayouteffect",children:"useIsomorphicLayoutEffect"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"useIsomorphicLayoutEffect"}),"\ub294 \uc11c\ubc84 \uc0ac\uc774\ub4dc \ub80c\ub354\ub9c1 \ud658\uacbd\uc5d0\uc11c\ub3c4 \ub3d9\uae30\uc801\uc73c\ub85c \uc2e4\ud589\ub418\ub3c4\ub85d \ubcf4\uc7a5\ud558\ub294 \ucee4\uc2a4\ud140 \ud6c5 \uc785\ub2c8\ub2e4."]}),"\n",(0,n.jsxs)(t.p,{children:["client\ud658\uacbd\uc5d0\uc11c\ub294 ",(0,n.jsx)(t.code,{children:"useLayoutEffect"}),"\ub97c \uc0ac\uc6a9\ud558\uace0, server\ud658\uacbd\uc5d0\uc11c\ub294 ",(0,n.jsx)(t.code,{children:"useEffect"}),"\ub97c \uc0ac\uc6a9\ud569\ub2c8\ub2e4."]}),"\n",(0,n.jsx)("br",{}),"\n",(0,n.jsx)(t.h2,{id:"interface",children:"Interface"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-tsx",children:"const useIsomorphicLayoutEffect: (\n  effect: React.EffectCallback, \n  deps?: React.DependencyList | undefined\n) => void;\n"})}),"\n",(0,n.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-tsx",children:"import { useIsomorphicLayoutEffect } from '@devgrace/react';\n\nconst Example = () => {\n  useIsomorphicLayoutEffect(() => {\n    console.log(\n      \"client \ud658\uacbd\uc5d0\uc11c\ub294 useLayoutEffect, server \ud658\uacbd\uc5d0\uc11c\ub294 useEffect \uc785\ub2c8\ub2e4.\",\n    )\n  }, []);\n\n  return <div>{/* ... */}</div>;\n};\n"})})]})}function l(e={}){const{wrapper:t}={...(0,o.ah)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(f,{...e})}):f(e)}},4474:(e,t,r)=>{r.d(t,{ah:()=>u});var n=r(4614);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),u=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},l=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,c=e.originalType,i=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),p=u(r),d=o,h=p["".concat(i,".").concat(d)]||p[d]||f[d]||c;return r?n.createElement(h,s(s({ref:t},l),{},{components:r})):n.createElement(h,s({ref:t},l))}));l.displayName="MDXCreateElement"}}]);