"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5690],{225:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=n(5735),c=n(4474);const o={},i="pick",s={id:"utils/object/pick",title:"pick",description:"\uc778\uc790\ub85c \ub123\uc740 keys\ub85c \uad6c\uc131\ub41c \uac1d\uccb4\ub97c \ubc18\ud658\ud558\ub294 \ud568\uc218\uc785\ub2c8\ub2e4. \ubc18\ud658\ub41c \uac1d\uccb4\ub294 \uae4a\uc740 \ubcf5\uc0ac\ub41c \uc0c8\ub85c\uc6b4 \uac1d\uccb4\uc785\ub2c8\ub2e4.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/utils/object/pick.md",sourceDirName:"utils/object",slug:"/utils/object/pick",permalink:"/devgrace/ko/docs/utils/object/pick",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"omit",permalink:"/devgrace/ko/docs/utils/object/omit"},next:{title:"countSubstringOccurrences",permalink:"/devgrace/ko/docs/utils/string/countSubstringOccurrences"}},a={},l=[{value:"Interface",id:"interface",level:2},{value:"Usage",id:"usage",level:2}];function u(e){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,c.ah)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"pick",children:"pick"}),"\n",(0,r.jsxs)(t.p,{children:["\uc778\uc790\ub85c \ub123\uc740 ",(0,r.jsx)(t.code,{children:"keys"}),"\ub85c \uad6c\uc131\ub41c \uac1d\uccb4\ub97c \ubc18\ud658\ud558\ub294 \ud568\uc218\uc785\ub2c8\ub2e4. \ubc18\ud658\ub41c \uac1d\uccb4\ub294 ",(0,r.jsx)(t.code,{children:"\uae4a\uc740 \ubcf5\uc0ac\ub41c \uc0c8\ub85c\uc6b4 \uac1d\uccb4"}),"\uc785\ub2c8\ub2e4."]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"symbol"}),"\uc740 \uc81c\uc678\ub429\ub2c8\ub2e4."]}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(t.h2,{id:"interface",children:"Interface"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"type ObjectKeys<T extends Record<PropertyKey, T[keyof T]>> = Exclude<\n  keyof T,\n  symbol\n>;\n\nconst pick: <\n  T extends Record<PropertyKey, T[keyof T]>,\n  K extends ObjectKeys<T>\n>(\n  obj: T,\n  keys: K | K[]\n) => Pick<Record<ObjectKeys<T>, T[ObjectKeys<T>]>, K>;\n"})}),"\n",(0,r.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",children:"import { pick } from '@devgrace/utils';\n\nconst pickedObj1 = pick({ a: 1, b: 2, c: 3 }, 'b'); // { b: 2 }\nconst pickedObj2 = pick({ a: 1, b: 2, c: 3 }, ['a', 'c']); // { a: 1, c: 3 }\n"})})]})}function p(e={}){const{wrapper:t}={...(0,c.ah)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},4474:(e,t,n)=>{n.d(t,{ah:()=>l});var r=n(4614);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var a=r.createContext({}),l=function(e){var t=r.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,c=e.mdxType,o=e.originalType,a=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(n),b=c,f=d["".concat(a,".").concat(b)]||d[b]||u[b]||o;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));p.displayName="MDXCreateElement"}}]);