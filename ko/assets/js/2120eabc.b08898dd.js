"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3630],{2278:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var n=r(5735),c=r(4474);const o={},a="useForceUpdate",s={id:"react/hooks/useForceUpdate",title:"useForceUpdate",description:"\ubc18\ud658\ub41c \ud568\uc218\ub97c \uc2e4\ud589\ud558\uba74 \uac15\uc81c\ub85c \ucef4\ud3ec\ub10c\ud2b8\uac00 \ub9ac\ub80c\ub354\ub9c1 \uc2dc\ud0a4\ub294 \ucee4\uc2a4\ud140 \ud6c5\uc785\ub2c8\ub2e4.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/react/hooks/useForceUpdate.mdx",sourceDirName:"react/hooks",slug:"/react/hooks/useForceUpdate",permalink:"/devgrace/ko/docs/react/hooks/useForceUpdate",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"useDebounce",permalink:"/devgrace/ko/docs/react/hooks/useDebounce"},next:{title:"useImageStatus",permalink:"/devgrace/ko/docs/react/hooks/useImageStatus"}},i={},u=[{value:"Interface",id:"interface",level:2},{value:"Usage",id:"usage",level:2},{value:"Note",id:"note",level:2}];function l(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,c.ah)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"useforceupdate",children:"useForceUpdate"}),"\n",(0,n.jsxs)(t.p,{children:["\ubc18\ud658\ub41c \ud568\uc218\ub97c \uc2e4\ud589\ud558\uba74 \uac15\uc81c\ub85c \ucef4\ud3ec\ub10c\ud2b8\uac00 ",(0,n.jsx)(t.code,{children:"\ub9ac\ub80c\ub354\ub9c1"})," \uc2dc\ud0a4\ub294 \ucee4\uc2a4\ud140 \ud6c5\uc785\ub2c8\ub2e4."]}),"\n",(0,n.jsx)("br",{}),"\n",(0,n.jsx)(t.h2,{id:"interface",children:"Interface"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-tsx",children:"// type DispatchWithoutAction = () => void;\nconst useForceUpdate: () => React.DispatchWithoutAction\n"})}),"\n",(0,n.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-tsx",children:"import { useForceUpdate } from '@devgrace/react';\n\nconst Example = () => {\n  const forceUpdate = useForceUpdate();\n\n  const handleForceUpdate = useCallback(() => {\n    forceUpdate();\n  }, [forceUpdate]);\n\n  return (\n    <div>\n      <button onClick={handleForceUpdate}>Button</button>;\n    </div>\n  );\n};\n"})}),"\n",(0,n.jsx)(t.h2,{id:"note",children:"Note"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"https://github.com/streamich/react-use/pull/837",children:"https://github.com/streamich/react-use/pull/837"})})]})}function d(e={}){const{wrapper:t}={...(0,c.ah)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},4474:(e,t,r)=>{r.d(t,{ah:()=>u});var n=r(4614);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,c=function(e,t){if(null==e)return{};var r,n,c={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(c[r]=e[r]);return c}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(c[r]=e[r])}return c}var i=n.createContext({}),u=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,c=e.mdxType,o=e.originalType,i=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=u(r),h=c,f=p["".concat(i,".").concat(h)]||p[h]||l[h]||o;return r?n.createElement(f,a(a({ref:t},d),{},{components:r})):n.createElement(f,a({ref:t},d))}));d.displayName="MDXCreateElement"}}]);