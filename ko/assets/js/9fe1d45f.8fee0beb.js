"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4772],{6164:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(5721);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=s(r),d=o,f=p["".concat(l,".").concat(d)]||p[d]||m[d]||a;return r?n.createElement(f,c(c({ref:t},u),{},{components:r})):n.createElement(f,c({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:o,c[1]=i;for(var s=2;s<a;s++)c[s]=r[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4993:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var n=r(6529),o=(r(5721),r(6164));const a={},c="omit",i={unversionedId:"utils/object/omit",id:"utils/object/omit",title:"omit",description:"\uc778\uc790\ub85c \ub123\uc740 keys\ub97c \uc0dd\ub7b5\ud55c \uac1d\uccb4\ub97c \ubc18\ud658\ud558\ub294 \ud568\uc218\uc785\ub2c8\ub2e4.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/utils/object/omit.md",sourceDirName:"utils/object",slug:"/utils/object/omit",permalink:"/devgrace/ko/docs/utils/object/omit",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"objectValues",permalink:"/devgrace/ko/docs/utils/object/objectValues"},next:{title:"pick",permalink:"/devgrace/ko/docs/utils/object/pick"}},l={},s=[{value:"Interface",id:"interface",level:2},{value:"Usage",id:"usage",level:2}],u={toc:s},p="wrapper";function m(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"omit"},"omit"),(0,o.kt)("p",null,"\uc778\uc790\ub85c \ub123\uc740 ",(0,o.kt)("inlineCode",{parentName:"p"},"keys"),"\ub97c \uc0dd\ub7b5\ud55c \uac1d\uccb4\ub97c \ubc18\ud658\ud558\ub294 \ud568\uc218\uc785\ub2c8\ub2e4."),(0,o.kt)("p",null,"\ubc18\ud658\ub41c \uac1d\uccb4\ub294 ",(0,o.kt)("inlineCode",{parentName:"p"},"\uae4a\uc740 \ubcf5\uc0ac\ub41c \uc0c8\ub85c\uc6b4 \uac1d\uccb4"),"\uc785\ub2c8\ub2e4."),(0,o.kt)("br",null),(0,o.kt)("h2",{id:"interface"},"Interface"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"const omit: <T extends Record<string, any>, K extends keyof T>(\n  obj: T,\n  keys: K | K[]\n) => Omit<T, K>;\n")),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { omit } from '@devgrace/utils';\n\nconst omittedObj1 = omit({ a: 1, b: 2, c: 3 }, 'b'); // { a: 1, c: 3 }\nconst omittedObj1 = omit({ a: 1, b: 2, c: 3, d: 4 }, ['b', 'd']); // { a: 1, c: 3 }\n")))}m.isMDXComponent=!0}}]);