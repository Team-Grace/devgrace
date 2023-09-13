"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3325],{6164:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>g});var r=n(5721);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},m=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},s="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),s=u(n),f=o,g=s["".concat(l,".").concat(f)]||s[f]||p[f]||i;return n?r.createElement(g,a(a({ref:t},m),{},{components:n})):r.createElement(g,a({ref:t},m))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[s]="string"==typeof e?e:o,a[1]=c;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},6036:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var r=n(6529),o=(n(5721),n(6164));const i={},a="getUniqTime",c={unversionedId:"utils/common/getUniqTime",id:"utils/common/getUniqTime",title:"getUniqTime",description:"\uae30\ubcf8\uc801\uc73c\ub85c new Date().getTime() \uac12\uc744 \ubc18\ud658\ud558\ub294 \ud568\uc218\uc774\uc9c0\ub9cc, \ub3d9\uc77c \uc2dc\uac04\uc5d0 \uc5ec\ub7ec\ubc88 \ud638\ucd9c \ud560 \uacbd\uc6b0 \uc720\ub2c8\ud06c \uac12\uc744 \ubc18\ud658\ud558\ub294 \ud568\uc218\uc785\ub2c8\ub2e4.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/utils/common/getUniqTime.md",sourceDirName:"utils/common",slug:"/utils/common/getUniqTime",permalink:"/devgrace/ko/docs/utils/common/getUniqTime",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"getUniqId",permalink:"/devgrace/ko/docs/utils/common/getUniqId"},next:{title:"getViewportSize",permalink:"/devgrace/ko/docs/utils/common/getViewportSize"}},l={},u=[{value:"Interface",id:"interface",level:2},{value:"Usage",id:"usage",level:2}],m={toc:u},s="wrapper";function p(e){let{components:t,...n}=e;return(0,o.kt)(s,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"getuniqtime"},"getUniqTime"),(0,o.kt)("p",null,"\uae30\ubcf8\uc801\uc73c\ub85c ",(0,o.kt)("inlineCode",{parentName:"p"},"new Date().getTime()")," \uac12\uc744 \ubc18\ud658\ud558\ub294 \ud568\uc218\uc774\uc9c0\ub9cc, \ub3d9\uc77c \uc2dc\uac04\uc5d0 \uc5ec\ub7ec\ubc88 \ud638\ucd9c \ud560 \uacbd\uc6b0 \uc720\ub2c8\ud06c \uac12\uc744 \ubc18\ud658\ud558\ub294 \ud568\uc218\uc785\ub2c8\ub2e4."),(0,o.kt)("br",null),(0,o.kt)("h2",{id:"interface"},"Interface"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"const getUniqTime: () => number\n")),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { getUniqTime } from '@devgrace/utils';\n\nconst uniqTime = getUniqTime();\n")))}p.isMDXComponent=!0}}]);