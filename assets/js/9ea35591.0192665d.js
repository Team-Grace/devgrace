"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5539],{4576:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>r,toc:()=>u});var i=n(5735),s=n(289);const l={},o="isNotNullish",r={id:"utils/validator/isNotNullish",title:"isNotNullish",description:"A function that checks that the given argument is not null or undefined, and if not, narrows it down to the given argument type.",source:"@site/docs/utils/validator/isNotNullish.md",sourceDirName:"utils/validator",slug:"/utils/validator/isNotNullish",permalink:"/devgrace/docs/utils/validator/isNotNullish",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"isFunction",permalink:"/devgrace/docs/utils/validator/isFuntion"},next:{title:"isNullish",permalink:"/devgrace/docs/utils/validator/isNullish"}},a={},u=[{value:"Interface",id:"interface",level:2},{value:"Usage",id:"usage",level:2}];function c(e){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"isnotnullish",children:"isNotNullish"}),"\n",(0,i.jsxs)(t.p,{children:["A function that checks that the given argument is not ",(0,i.jsx)(t.code,{children:"null"})," or ",(0,i.jsx)(t.code,{children:"undefined"}),", and if not, narrows it down to the given argument type."]}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(t.h2,{id:"interface",children:"Interface"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-tsx",metastring:'title="typescript"',children:"const isNotNullish: <T>(val: T | null | undefined) => val is T\n"})}),"\n",(0,i.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-ts",children:"import { isNotNullish } from '@devgrace/utils';\n\nisNotNullish(1); // true\nisNotNullish(false); // true\nisNotNullish(\"str\"); // true\nisNotNullish({}); // true\n\nisNotNullish(undefined); // false\nisNotNullish(null); // false\n"})})]})}function d(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},289:(e,t,n)=>{n.d(t,{Z:()=>r,a:()=>o});var i=n(4614);const s={},l=i.createContext(s);function o(e){const t=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(l.Provider,{value:t},e.children)}}}]);