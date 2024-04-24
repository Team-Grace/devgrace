"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1297],{6344:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>p,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>a});var t=o(5735),c=o(289);const r={},s="deepCopy",i={id:"utils/common/deepCopy",title:"deepCopy",description:"\uc778\uc790\ub85c \uc8fc\uc5b4\uc9c4 \uac12\uc744 \uae4a\uc740 \ubcf5\uc0ac\ub97c \uc218\ud589\ud558\ub294 \ud568\uc218\uc785\ub2c8\ub2e4.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/utils/common/deepCopy.md",sourceDirName:"utils/common",slug:"/utils/common/deepCopy",permalink:"/devgrace/ko/docs/utils/common/deepCopy",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"asyncNoop",permalink:"/devgrace/ko/docs/utils/common/asyncNoop"},next:{title:"deepEqual",permalink:"/devgrace/ko/docs/utils/common/deepEqual"}},p={},a=[{value:"Interface",id:"interface",level:2},{value:"Usage",id:"usage",level:2}];function d(e){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,c.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"deepcopy",children:"deepCopy"}),"\n",(0,t.jsxs)(n.p,{children:["\uc778\uc790\ub85c \uc8fc\uc5b4\uc9c4 \uac12\uc744 ",(0,t.jsx)(n.code,{children:"\uae4a\uc740 \ubcf5\uc0ac"}),"\ub97c \uc218\ud589\ud558\ub294 \ud568\uc218\uc785\ub2c8\ub2e4."]}),"\n",(0,t.jsx)("br",{}),"\n",(0,t.jsx)(n.h2,{id:"interface",children:"Interface"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"const deepCopy: <T>(source: T) => T\n"})}),"\n",(0,t.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"import { deepCopy } from '@devgrace/utils';\n\nconst originNum = 42;\nconst copyNum = deepCopy(originNum);\n\nconst originObj = { a: 1, b: { c: 2 } };\nconst copyObj = deepCopy(originObj);\n\nconst originArray = [1, 2, [3, 4]];\nconst copyArray = deepCopy(originArray);\n\nconst originSet = new Set([1, 2, 3]);\nconst copySet = deepCopy(originSet);\n\nconst originMap = new Map([\n  ['a', 1],\n  ['b', 2],\n]);\nconst copyMap = deepCopy(originMap);\n"})})]})}function u(e={}){const{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},289:(e,n,o)=>{o.d(n,{Z:()=>i,a:()=>s});var t=o(4614);const c={},r=t.createContext(c);function s(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:s(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);