"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6288],{8664:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var t=n(5735),o=n(4474);const i={},a="isValidPhoneNumberFormat",s={id:"utils/validator/isValidPhoneNumberFormat",title:"isValidPhoneNumberFormat",description:"\uc8fc\uc5b4\uc9c4 \ubb38\uc790\uc5f4\uc774 -(hyphen)\uc744 \ud3ec\ud568\ud55c \uc804\ud654\ubc88\ud638 \ud615\uc2dd\uc778\uc9c0 \ud655\uc778\ud558\ub294 \ud568\uc218\uc785\ub2c8\ub2e4.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/utils/validator/isValidPhoneNumberFormat.md",sourceDirName:"utils/validator",slug:"/utils/validator/isValidPhoneNumberFormat",permalink:"/devgrace/ko/docs/utils/validator/isValidPhoneNumberFormat",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"isValidEmail",permalink:"/devgrace/ko/docs/utils/validator/isValidEmail"},next:{title:"Button",permalink:"/devgrace/ko/docs/ui/Button"}},l={},c=[{value:"Interface",id:"interface",level:2},{value:"Usage",id:"usage",level:2}];function u(e){const r={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.ah)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h1,{id:"isvalidphonenumberformat",children:"isValidPhoneNumberFormat"}),"\n",(0,t.jsxs)(r.p,{children:["\uc8fc\uc5b4\uc9c4 \ubb38\uc790\uc5f4\uc774 ",(0,t.jsx)(r.code,{children:"-(hyphen)"}),"\uc744 \ud3ec\ud568\ud55c \uc804\ud654\ubc88\ud638 \ud615\uc2dd\uc778\uc9c0 \ud655\uc778\ud558\ub294 \ud568\uc218\uc785\ub2c8\ub2e4."]}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.code,{children:"XXX-YYY-ZZZZ"})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.code,{children:"XXX-YYYY-ZZZZ"})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.code,{children:"XX-YYY-ZZZZ"})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.code,{children:"XX-YYYY-ZZZZ"})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.code,{children:"XXXX-YYYY"})}),"\n"]}),"\n",(0,t.jsx)(r.p,{children:"\uc2e4\uc81c \uc804\ud654\ubc88\ud638 \uccb4\uacc4\uc5d0 \ub9de\ub294\uc9c0 \uc5c4\uaca9\ud558\uac8c \ud655\uc778\ud558\uc9c0\ub294 \uc54a\uc2b5\ub2c8\ub2e4."}),"\n",(0,t.jsx)("br",{}),"\n",(0,t.jsx)(r.h2,{id:"interface",children:"Interface"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-tsx",children:"const isValidPhoneNumberFormat: (value: string) => boolean\n"})}),"\n",(0,t.jsx)(r.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-ts",children:"import { isValidPhoneNumberFormat, formatPhoneNumber } from '@devgrace/utils';\n\nconst isPhoneNumberFormat1 = isValidPhoneNumberFormat('010-1234-1234'); // true\nconst isPhoneNumberFormat2 = isValidPhoneNumberFormat('031-123-1234'); // true\nconst isPhoneNumberFormat3 = isValidPhoneNumberFormat('02-123-1234'); // true\nconst isPhoneNumberFormat4 = isValidPhoneNumberFormat('02-1234-1234'); // true\n\nconst isPhoneNumberFormat5 = isValidPhoneNumberFormat('0-1234-1234'); // false\nconst isPhoneNumberFormat6 = isValidPhoneNumberFormat('010-12455-1234'); // false\n\nconst isPhoneNumberFormat7 = isValidPhoneNumberFormat(formatPhoneNumber('01012341234')); // true\nconst isPhoneNumberFormat8 = isValidPhoneNumberFormat(formatPhoneNumber('021231234')); // true\nconst isPhoneNumberFormat9 = isValidPhoneNumberFormat(formatPhoneNumber('010-1234-1234')); // true\n"})})]})}function d(e={}){const{wrapper:r}={...(0,o.ah)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},4474:(e,r,n)=>{n.d(r,{ah:()=>c});var t=n(4614);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function i(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function a(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?i(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function s(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=t.createContext({}),c=function(e){var r=t.useContext(l),n=r;return e&&(n="function"==typeof e?e(r):a(a({},r),e)),n},u={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},d=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=c(n),h=o,b=m["".concat(l,".").concat(h)]||m[h]||u[h]||i;return n?t.createElement(b,a(a({ref:r},d),{},{components:n})):t.createElement(b,a({ref:r},d))}));d.displayName="MDXCreateElement"}}]);