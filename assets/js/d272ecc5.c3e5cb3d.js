"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5380],{8614:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var r=n(5735),c=n(4474);const o={},s="objectKeys",a={id:"utils/object/objectKeys",title:"objectKeys",description:"a function that works the same as Object.keys(), but protects the key type.",source:"@site/docs/utils/object/objectKeys.md",sourceDirName:"utils/object",slug:"/utils/object/objectKeys",permalink:"/devgrace/docs/utils/object/objectKeys",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"objectEntries",permalink:"/devgrace/docs/utils/object/objectEntries"},next:{title:"objectValues",permalink:"/devgrace/docs/utils/object/objectValues"}},i={},l=[{value:"Interface",id:"interface",level:2},{value:"Usage",id:"usage",level:2},{value:"Note",id:"note",level:2}];function b(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,c.ah)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"objectkeys",children:"objectKeys"}),"\n",(0,r.jsxs)(t.p,{children:["a function that works the same as ",(0,r.jsx)(t.code,{children:"Object.keys()"}),", but protects the key type."]}),"\n",(0,r.jsx)(t.p,{children:"Note that the symbol property is excluded because it is not an enumeration."}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(t.h2,{id:"interface",children:"Interface"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"type ObjectKeys<T extends Record<PropertyKey, T[keyof T]>> = Exclude<\n  keyof T,\n  symbol\n>;\n\nconst objectKeys: <T extends Record<ObjectKeys<T>, T[keyof T]>>(\n  obj: T\n) => ObjectKeys<T>[];\n"})}),"\n",(0,r.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",children:'import { objectKeys } from \'@devgrace/utils\';\n\nconst symbol = Symbol(\'d\');\nconst obj = {\n  a: 1,\n  b: 2,\n  c: 3,\n  [symbol]: 4,\n} as const;\n\n /**\n  * type: ("a" | "b" | "c")[]\n  * value: ["a", "b", "c"]\n  */\nconst keys = objectKeys(obj);\n'})}),"\n",(0,r.jsx)(t.h2,{id:"note",children:"Note"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys",children:"Object.keys()"})})]})}function u(e={}){const{wrapper:t}={...(0,c.ah)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(b,{...e})}):b(e)}},4474:(e,t,n)=>{n.d(t,{ah:()=>l});var r=n(4614);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var i=r.createContext({}),l=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,c=e.mdxType,o=e.originalType,i=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),d=l(n),p=c,j=d["".concat(i,".").concat(p)]||d[p]||b[p]||o;return n?r.createElement(j,s(s({ref:t},u),{},{components:n})):r.createElement(j,s({ref:t},u))}));u.displayName="MDXCreateElement"}}]);