"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[640],{6164:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>d});var n=t(5721);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=n.createContext({}),l=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},p=function(e){var r=l(e.components);return n.createElement(s.Provider,{value:r},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=l(t),f=a,d=u["".concat(s,".").concat(f)]||u[f]||m[f]||o;return t?n.createElement(d,c(c({ref:r},p),{},{components:t})):n.createElement(d,c({ref:r},p))}));function d(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,c=new Array(o);c[0]=f;var i={};for(var s in r)hasOwnProperty.call(r,s)&&(i[s]=r[s]);i.originalType=e,i[u]="string"==typeof e?e:a,c[1]=i;for(var l=2;l<o;l++)c[l]=t[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},4550:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>c,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var n=t(6529),a=(t(5721),t(6164));const o={},c="removeSpecialCharacters",i={unversionedId:"utils/string/removeSpecialCharacters",id:"utils/string/removeSpecialCharacters",title:"removeSpecialCharacters",description:"A function that takes a string and returns a string stripped of special characters.",source:"@site/docs/utils/string/removeSpecialCharacters.md",sourceDirName:"utils/string",slug:"/utils/string/removeSpecialCharacters",permalink:"/devgrace/docs/utils/string/removeSpecialCharacters",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"formatPhoneNumber",permalink:"/devgrace/docs/utils/string/formatPhoneNumber"},next:{title:"Button",permalink:"/devgrace/docs/ui/Button"}},s={},l=[{value:"Interface",id:"interface",level:2},{value:"Usage",id:"usage",level:2}],p={toc:l},u="wrapper";function m(e){let{components:r,...t}=e;return(0,a.kt)(u,(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"removespecialcharacters"},"removeSpecialCharacters"),(0,a.kt)("p",null,"A function that takes a string and returns a string stripped of ",(0,a.kt)("inlineCode",{parentName:"p"},"special characters"),"."),(0,a.kt)("br",null),(0,a.kt)("h2",{id:"interface"},"Interface"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"const removeSpecialCharacters: (value: string) => string\n")),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { removeSpecialCharacters } from '@devgrace/utils';\n\nconst str = removeSpecialCharacters('H@#!ello, @Wo!@!&@rld!'); // Hello World\n")))}m.isMDXComponent=!0}}]);