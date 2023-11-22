"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1698],{8710:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>o,contentTitle:()=>s,default:()=>u,frontMatter:()=>c,metadata:()=>i,toc:()=>l});var n=t(5735),a=t(4474);const c={},s="repeatCharacters",i={id:"utils/string/repeatCharacters",title:"repeatCharacters",description:"A function that iterates over each character in a given string for a specified number of repetitions and returns a new string.",source:"@site/docs/utils/string/repeatCharacters.md",sourceDirName:"utils/string",slug:"/utils/string/repeatCharacters",permalink:"/devgrace/docs/utils/string/repeatCharacters",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"removeSpecialCharacters",permalink:"/devgrace/docs/utils/string/removeSpecialCharacters"},next:{title:"isValidEmail",permalink:"/devgrace/docs/utils/validator/isValidEmail"}},o={},l=[{value:"Interface",id:"interface",level:2},{value:"Usage",id:"usage",level:2}];function p(e){const r={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,a.ah)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{id:"repeatcharacters",children:"repeatCharacters"}),"\n",(0,n.jsx)(r.p,{children:"A function that iterates over each character in a given string for a specified number of repetitions and returns a new string."}),"\n",(0,n.jsx)("br",{}),"\n",(0,n.jsx)(r.h2,{id:"interface",children:"Interface"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-tsx",children:"const repeatCharacters: (value: string, repeatCount: number) => string\n"})}),"\n",(0,n.jsx)(r.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-ts",children:"import { repeatCharacters } from '@devgrace/utils';\n\nconst str1 = 'A!B@C';\nconst repeatedStr1 = repeatCharacters(str1, 2); // 'AA!!BB@@CC'\n\nconst str2 = 'Hello';\nconst repeatedStr2 = repeatCharacters(str2, 3); // 'HHHeeelllooo'\n"})})]})}function u(e={}){const{wrapper:r}={...(0,a.ah)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},4474:(e,r,t)=>{t.d(r,{ah:()=>l});var n=t(4614);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=n.createContext({}),l=function(e){var r=n.useContext(o),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,c=e.originalType,o=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=l(t),f=a,h=d["".concat(o,".").concat(f)]||d[f]||p[f]||c;return t?n.createElement(h,s(s({ref:r},u),{},{components:t})):n.createElement(h,s({ref:r},u))}));u.displayName="MDXCreateElement"}}]);