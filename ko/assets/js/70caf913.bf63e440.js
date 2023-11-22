"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2774],{1870:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>o,contentTitle:()=>s,default:()=>d,frontMatter:()=>c,metadata:()=>l,toc:()=>i});var n=t(5735),a=t(4474);const c={},s="usePreservedCallback",l={id:"react/hooks/usePreservedCallback",title:"usePreservedCallback",description:"\uc8fc\uc5b4\uc9c4 \ucf5c\ubc31 \ud568\uc218\ub97c \ubcf4\uc874\ud558\uace0 \ucef4\ud3ec\ub10c\ud2b8 \ub80c\ub354\ub9c1 \uc0ac\uc774\uc5d0 \uc7ac\uc0ac\uc6a9\ud560 \uc218 \uc788\ub3c4\ub85d \ub3c4\uc640\uc8fc\ub294 \ucee4\uc2a4\ud140 \ud6c5\uc785\ub2c8\ub2e4.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/react/hooks/usePreservedCallback.mdx",sourceDirName:"react/hooks",slug:"/react/hooks/usePreservedCallback",permalink:"/devgrace/ko/docs/react/hooks/usePreservedCallback",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"useOnClickOutside",permalink:"/devgrace/ko/docs/react/hooks/useOnClickOutside"},next:{title:"usePrevious",permalink:"/devgrace/ko/docs/react/hooks/usePrevious"}},o={},i=[{value:"Interface",id:"interface",level:2},{value:"Usage",id:"usage",level:2},{value:"as-is",id:"as-is",level:3},{value:"to-be (usePreservedCallback)",id:"to-be-usepreservedcallback",level:3}];function u(e){const r={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,a.ah)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{id:"usepreservedcallback",children:"usePreservedCallback"}),"\n",(0,n.jsx)(r.p,{children:"\uc8fc\uc5b4\uc9c4 \ucf5c\ubc31 \ud568\uc218\ub97c \ubcf4\uc874\ud558\uace0 \ucef4\ud3ec\ub10c\ud2b8 \ub80c\ub354\ub9c1 \uc0ac\uc774\uc5d0 \uc7ac\uc0ac\uc6a9\ud560 \uc218 \uc788\ub3c4\ub85d \ub3c4\uc640\uc8fc\ub294 \ucee4\uc2a4\ud140 \ud6c5\uc785\ub2c8\ub2e4."}),"\n",(0,n.jsx)(r.p,{children:"\uc774 \ud6c5\uc740 \ud2b9\ud788 \ucf5c\ubc31 \ud568\uc218\uac00 \ub80c\ub354\ub9c1 \uc911\uc5d0 \ubcc0\uacbd\ub420 \ub54c \uc720\uc6a9\ud569\ub2c8\ub2e4. \ubd88\ud544\uc694\ud55c \ud568\uc218 \uc0dd\uc131\uc744 \ubc29\uc9c0\ud558\uace0 \ucd5c\uc801\ud654\ud558\uba70, \ucd5c\uc2e0 \ubc84\uc804\uc758 \ucf5c\ubc31 \ud568\uc218\ub97c \uc0ac\uc6a9 \ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."}),"\n",(0,n.jsx)("br",{}),"\n",(0,n.jsx)(r.h2,{id:"interface",children:"Interface"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-tsx",children:"const usePreservedCallback: <T extends (...args: any[]) => any>(\n  callback: T\n) => (...args: any[]) => any;\n"})}),"\n",(0,n.jsx)(r.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsx)(r.h3,{id:"as-is",children:"as-is"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-tsx",children:'import React, { useEffect, useState } from "react";\n\nconst Example = () => {\n  const [state, setState] = useState(0);\n\n  const callback = () => {\n    setState(state + 1);\n  };\n\n  useEffect(() => {\n    callback(); // \ubb34\ud55c \ud638\ucd9c\n  }, [callback]);\n\n  return (\n    <>{/* ... */}</>\n  );\n}\n'})}),"\n",(0,n.jsx)(r.h3,{id:"to-be-usepreservedcallback",children:"to-be (usePreservedCallback)"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-tsx",children:"import React, { useEffect, useState } from \"react\";\nimport { usePreservedCallback } from '@devgrace/react';\n\nconst Example = () => {\n  const [state, setState] = useState(0);\n\n  const callback = usePreservedCallback(() => {\n    setState(state + 1);\n  });\n\n  useEffect(() => {\n    callback(); // 1\ud68c\ub9cc \ud638\ucd9c\n  }, [callback]);\n\n  return (\n    <>{/* ... */}</>\n  );\n}\n"})})]})}function d(e={}){const{wrapper:r}={...(0,a.ah)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},4474:(e,r,t)=>{t.d(r,{ah:()=>i});var n=t(4614);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=n.createContext({}),i=function(e){var r=n.useContext(o),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,c=e.originalType,o=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=i(t),b=a,f=p["".concat(o,".").concat(b)]||p[b]||u[b]||c;return t?n.createElement(f,s(s({ref:r},d),{},{components:t})):n.createElement(f,s({ref:r},d))}));d.displayName="MDXCreateElement"}}]);