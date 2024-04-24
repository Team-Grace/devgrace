"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3899],{2210:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var t=r(5735),o=r(289);const i={},s="isValidPhoneNumberFormat",a={id:"utils/validator/isValidPhoneNumberFormat",title:"isValidPhoneNumberFormat",description:"a function to check if the given string is in the form of a phone number with -(hyphen).",source:"@site/docs/utils/validator/isValidPhoneNumberFormat.md",sourceDirName:"utils/validator",slug:"/utils/validator/isValidPhoneNumberFormat",permalink:"/devgrace/docs/utils/validator/isValidPhoneNumberFormat",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"isValidEmail",permalink:"/devgrace/docs/utils/validator/isValidEmail"},next:{title:"Button",permalink:"/devgrace/docs/ui/Button"}},l={},c=[{value:"Interface",id:"interface",level:2},{value:"Usage",id:"usage",level:2}];function m(e){const n={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"isvalidphonenumberformat",children:"isValidPhoneNumberFormat"}),"\n",(0,t.jsxs)(n.p,{children:["a function to check if the given string is in the form of a phone number with ",(0,t.jsx)(n.code,{children:"-(hyphen)"}),"."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"XXX-YYY-ZZZZ"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"XXX-YYYY-ZZZZ"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"XX-YYY-ZZZZ"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"XX-YYYY-ZZZZ"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"XXXX-YYYY"})}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"We don't strictly check to see if they match the actual phone numbering system."}),"\n",(0,t.jsx)("br",{}),"\n",(0,t.jsx)(n.h2,{id:"interface",children:"Interface"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"const isValidPhoneNumberFormat: (value: string) => boolean\n"})}),"\n",(0,t.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"import { isValidPhoneNumberFormat, formatPhoneNumber } from '@devgrace/utils';\n\nconst isPhoneNumberFormat1 = isValidPhoneNumberFormat('010-1234-1234'); // true\nconst isPhoneNumberFormat2 = isValidPhoneNumberFormat('031-123-1234'); // true\nconst isPhoneNumberFormat3 = isValidPhoneNumberFormat('02-123-1234'); // true\nconst isPhoneNumberFormat4 = isValidPhoneNumberFormat('02-1234-1234'); // true\n\nconst isPhoneNumberFormat5 = isValidPhoneNumberFormat('0-1234-1234'); // false\nconst isPhoneNumberFormat6 = isValidPhoneNumberFormat('010-12455-1234'); // false\n\nconst isPhoneNumberFormat7 = isValidPhoneNumberFormat(formatPhoneNumber('01012341234')); // true\nconst isPhoneNumberFormat8 = isValidPhoneNumberFormat(formatPhoneNumber('021231234')); // true\nconst isPhoneNumberFormat9 = isValidPhoneNumberFormat(formatPhoneNumber('010-1234-1234')); // true\n"})})]})}function u(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(m,{...e})}):m(e)}},289:(e,n,r)=>{r.d(n,{Z:()=>a,a:()=>s});var t=r(4614);const o={},i=t.createContext(o);function s(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);