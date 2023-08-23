"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[777],{6164:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var r=n(5721);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},s="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),s=u(n),f=i,d=s["".concat(c,".").concat(f)]||s[f]||p[f]||a;return n?r.createElement(d,o(o({ref:t},m),{},{components:n})):r.createElement(d,o({ref:t},m))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[s]="string"==typeof e?e:i,o[1]=l;for(var u=2;u<a;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},667:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var r=n(6529),i=(n(5721),n(6164));const a={},o="getUniqTime",l={unversionedId:"utils/common/getUniqTime",id:"utils/common/getUniqTime",title:"getUniqTime",description:"Function that returns the value new Date().getTime() by default, but returns a unique value if called multiple times at the same time.",source:"@site/docs/utils/common/getUniqTime.md",sourceDirName:"utils/common",slug:"/utils/common/getUniqTime",permalink:"/devgrace/docs/utils/common/getUniqTime",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"getUniqId",permalink:"/devgrace/docs/utils/common/getUniqId"},next:{title:"isClient",permalink:"/devgrace/docs/utils/device/isClient"}},c={},u=[{value:"Interface",id:"interface",level:2},{value:"Example",id:"example",level:2}],m={toc:u},s="wrapper";function p(e){let{components:t,...n}=e;return(0,i.kt)(s,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"getuniqtime"},"getUniqTime"),(0,i.kt)("p",null,"Function that returns the value ",(0,i.kt)("inlineCode",{parentName:"p"},"new Date().getTime()")," by default, but returns a unique value if called multiple times at the same time."),(0,i.kt)("br",null),(0,i.kt)("h2",{id:"interface"},"Interface"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"const getUniqTime: () => number\n")),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import { getUniqTime } from '@devgrace/utils';\n\nconst uniqTime = getUniqTime();\n")))}p.isMDXComponent=!0}}]);