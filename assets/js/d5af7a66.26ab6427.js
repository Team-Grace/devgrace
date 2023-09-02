"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2],{6164:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>f});var n=t(5721);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=n.createContext({}),l=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},u=function(e){var r=l(e.components);return n.createElement(s.Provider,{value:r},e.children)},p="mdxType",v={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(t),d=i,f=p["".concat(s,".").concat(d)]||p[d]||v[d]||o;return t?n.createElement(f,a(a({ref:r},u),{},{components:t})):n.createElement(f,a({ref:r},u))}));function f(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=d;var c={};for(var s in r)hasOwnProperty.call(r,s)&&(c[s]=r[s]);c.originalType=e,c[p]="string"==typeof e?e:i,a[1]=c;for(var l=2;l<o;l++)a[l]=t[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},6819:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>a,default:()=>v,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var n=t(6529),i=(t(5721),t(6164));const o={},a="isServer",c={unversionedId:"utils/device/isSever",id:"utils/device/isSever",title:"isServer",description:"A function to check if the JavaScript runtime environment is a Server(Node.js).",source:"@site/docs/utils/device/isSever.md",sourceDirName:"utils/device",slug:"/utils/device/isSever",permalink:"/devgrace/docs/utils/device/isSever",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"isMobile",permalink:"/devgrace/docs/utils/device/isMobile"},next:{title:"countSubstringOccurrences",permalink:"/devgrace/docs/utils/string/countSubstringOccurrences"}},s={},l=[{value:"Interface",id:"interface",level:2},{value:"Usage",id:"usage",level:2}],u={toc:l},p="wrapper";function v(e){let{components:r,...t}=e;return(0,i.kt)(p,(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"isserver"},"isServer"),(0,i.kt)("p",null,"A function to check if the JavaScript runtime environment is a ",(0,i.kt)("inlineCode",{parentName:"p"},"Server(Node.js)"),"."),(0,i.kt)("p",null,"If it returns ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),", it is a server environment."),(0,i.kt)("br",null),(0,i.kt)("h2",{id:"interface"},"Interface"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"const isServer: () => boolean\n")),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import { isServer } from '@devgrace/utils';\n\nif (isServer()) {\n  /* server(Node.js) environment */\n}\n")))}v.isMDXComponent=!0}}]);