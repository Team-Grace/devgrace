"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4277],{6164:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>b});var n=r(5721);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,c=e.originalType,u=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),p=s(r),f=a,b=p["".concat(u,".").concat(f)]||p[f]||m[f]||c;return r?n.createElement(b,o(o({ref:t},l),{},{components:r})):n.createElement(b,o({ref:t},l))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=r.length,o=new Array(c);o[0]=f;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[p]="string"==typeof e?e:a,o[1]=i;for(var s=2;s<c;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},5070:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>m,frontMatter:()=>c,metadata:()=>i,toc:()=>s});var n=r(6529),a=(r(5721),r(6164));const c={},o="extractNumber",i={unversionedId:"utils/string/extractNumber",id:"utils/string/extractNumber",title:"extractNumber",description:"\ubb38\uc790\uc5f4\uc744 \uc785\ub825\ud558\uba74 \uc22b\uc790\ub97c \uc81c\uc678\ud55c \ubaa8\ub4e0 \ubb38\uc790\ub97c \uc81c\uac70\ud55c \ubb38\uc790\uc5f4\uc744 \ubc18\ud658\ud558\ub294 \ud568\uc218\uc785\ub2c8\ub2e4.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/utils/string/extractNumber.md",sourceDirName:"utils/string",slug:"/utils/string/extractNumber",permalink:"/devgrace/ko/docs/utils/string/extractNumber",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"countSubstringOccurrences",permalink:"/devgrace/ko/docs/utils/string/countSubstringOccurrences"},next:{title:"formatNumberWithCommas",permalink:"/devgrace/ko/docs/utils/string/formatNumberWithCommas"}},u={},s=[{value:"Interface",id:"interface",level:2},{value:"Usage",id:"usage",level:2}],l={toc:s},p="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"extractnumber"},"extractNumber"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"\ubb38\uc790\uc5f4"),"\uc744 \uc785\ub825\ud558\uba74 \uc22b\uc790\ub97c \uc81c\uc678\ud55c \ubaa8\ub4e0 \ubb38\uc790\ub97c \uc81c\uac70\ud55c \ubb38\uc790\uc5f4\uc744 \ubc18\ud658\ud558\ub294 \ud568\uc218\uc785\ub2c8\ub2e4."),(0,a.kt)("br",null),(0,a.kt)("h2",{id:"interface"},"Interface"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"const extractNumber: (value: string) => string\n")),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { extractNumber } from '@devgrace/utils';\n\nconst str1 = extractNumber('abc123sd45'); // '12345'\nconst str2 = extractNumber('1 23 sd 4 5'); // '12345'\nconst str3 = extractNumber('\ud83e\udd72'); // ''\nconst str4 = extractNumber('   '); // ''\n")))}m.isMDXComponent=!0}}]);