"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8360],{6218:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>c,metadata:()=>a,toc:()=>i});var r=n(5735),o=n(4474);const c={},s="objectValues",a={id:"utils/object/objectValues",title:"objectValues",description:"Object.values()\uc640 \ub3d9\uc77c\ud558\uac8c \ub3d9\uc791\ud558\ub294 \ud568\uc218\uc785\ub2c8\ub2e4.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/utils/object/objectValues.md",sourceDirName:"utils/object",slug:"/utils/object/objectValues",permalink:"/devgrace/ko/docs/utils/object/objectValues",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"objectKeys",permalink:"/devgrace/ko/docs/utils/object/objectKeys"},next:{title:"omit",permalink:"/devgrace/ko/docs/utils/object/omit"}},l={},i=[{value:"Interface",id:"interface",level:2},{value:"Usage",id:"usage",level:2},{value:"Note",id:"note",level:2}];function u(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,o.ah)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"objectvalues",children:"objectValues"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"Object.values()"}),"\uc640 \ub3d9\uc77c\ud558\uac8c \ub3d9\uc791\ud558\ub294 \ud568\uc218\uc785\ub2c8\ub2e4."]}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(t.h2,{id:"interface",children:"Interface"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"type ObjectKeys<T extends Record<PropertyKey, T[keyof T]>> = Exclude<\n  keyof T,\n  symbol\n>;\n\nconst objectValues: <T extends Record<PropertyKey, T[keyof T]>>(\n  obj: T\n) => T[ObjectKeys<T>][];\n"})}),"\n",(0,r.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",children:"import { objectValues } from '@devgrace/utils';\n\nconst symbol = Symbol('d');\nconst obj = {\n  a: 1,\n  b: 2,\n  c: 3,\n  [symbol]: 4,\n} as const;\n\n /**\n  * type: (1 | 2 | 3)[]\n  * value: [1, 2, 3]\n  */\nconst values = objectValues(obj);\n"})}),"\n",(0,r.jsx)(t.h2,{id:"note",children:"Note"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/values",children:"Object.values()"})})]})}function d(e={}){const{wrapper:t}={...(0,o.ah)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},4474:(e,t,n)=>{n.d(t,{ah:()=>i});var r=n(4614);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),i=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,c=e.originalType,l=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),b=i(n),p=o,j=b["".concat(l,".").concat(p)]||b[p]||u[p]||c;return n?r.createElement(j,s(s({ref:t},d),{},{components:n})):r.createElement(j,s({ref:t},d))}));d.displayName="MDXCreateElement"}}]);