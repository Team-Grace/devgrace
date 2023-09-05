"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[738],{6164:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(5721);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(r),d=a,f=u["".concat(s,".").concat(d)]||u[d]||m[d]||i;return r?n.createElement(f,l(l({ref:t},p),{},{components:r})):n.createElement(f,l({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:a,l[1]=o;for(var c=2;c<i;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2232:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var n=r(6529),a=(r(5721),r(6164));const i={},l="isValidEmail",o={unversionedId:"utils/string/isValidEmail",id:"utils/string/isValidEmail",title:"isValidEmail",description:"\uc8fc\uc5b4\uc9c4 \ubb38\uc790\uc5f4\uc774 \uc774\uba54\uc77c \ud615\uc2dd\uc744 \uc900\uc218\ud558\ub294\uc9c0 \ud655\uc778\ud558\ub294 \ud568\uc218\uc785\ub2c8\ub2e4.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/utils/string/isValidEmail.md",sourceDirName:"utils/string",slug:"/utils/string/isValidEmail",permalink:"/devgrace/ko/docs/utils/string/isValidEmail",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"formatPhoneNumber",permalink:"/devgrace/ko/docs/utils/string/formatPhoneNumber"},next:{title:"removeSpecialCharacters",permalink:"/devgrace/ko/docs/utils/string/removeSpecialCharacters"}},s={},c=[{value:"Interface",id:"interface",level:2},{value:"Usage",id:"usage",level:2},{value:"Note",id:"note",level:2}],p={toc:c},u="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"isvalidemail"},"isValidEmail"),(0,a.kt)("p",null,"\uc8fc\uc5b4\uc9c4 \ubb38\uc790\uc5f4\uc774 ",(0,a.kt)("inlineCode",{parentName:"p"},"\uc774\uba54\uc77c \ud615\uc2dd"),"\uc744 \uc900\uc218\ud558\ub294\uc9c0 \ud655\uc778\ud558\ub294 \ud568\uc218\uc785\ub2c8\ub2e4."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.ietf.org/rfc/rfc5322.txt"},"RFC 5322")," \uae30\uc900\uc758 \uc815\uaddc\ud45c\ud604\uc2dd\uc744 \uc0ac\uc6a9\ud558\uc600\uc73c\uba70, \ud574\ub2f9 \ud568\uc218\uc5d0\uc11c \uc0ac\uc6a9\ud558\ub294 \uc815\uaddc\uc2dd\uc740 \uc774\uba54\uc77c \ud615\ud0dc\uc758 ",(0,a.kt)("inlineCode",{parentName:"p"},"99.99%"),"\ub97c \uac80\uc0ac\ub97c \ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("p",null,"\ucc38\uace0\ub85c, \uc644\ubcbd\ud55c \uc774\uba54\uc77c \uc815\uaddc\uc2dd\uc740 \uc874\uc7ac\ud558\uc9c0 \uc54a\uae30 \ub54c\ubb38\uc5d0 99.99% \uc785\ub2c8\ub2e4."),(0,a.kt)("br",null),(0,a.kt)("h2",{id:"interface"},"Interface"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"const isValidEmail: (email: string) => boolean\n")),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { isValidEmail } from '@devgrace/utils';\n\nconst isEmail1 = isValidEmail('example@email.com'); // true\nconst isEmail2 = isValidEmail('invalid-email'); // false\n")),(0,a.kt)("h2",{id:"note"},"Note"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.ietf.org/rfc/rfc5322.txt"},"RFC 5322"),"\n",(0,a.kt)("a",{parentName:"p",href:"https://emailregex.com/"},"emailregex")))}m.isMDXComponent=!0}}]);