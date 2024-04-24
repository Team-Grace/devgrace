"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3776],{3552:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>a,default:()=>l,frontMatter:()=>c,metadata:()=>r,toc:()=>d});var o=t(5735),s=t(289);const c={},a="useDebounce",r={id:"react/hooks/useDebounce",title:"useDebounce",description:"A custom hook that makes it easy to use debounce.",source:"@site/docs/react/hooks/useDebounce.mdx",sourceDirName:"react/hooks",slug:"/react/hooks/useDebounce",permalink:"/devgrace/docs/react/hooks/useDebounce",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"useAsyncPreservedCallback",permalink:"/devgrace/docs/react/hooks/useAsyncPreservedCallback"},next:{title:"useForceUpdate",permalink:"/devgrace/docs/react/hooks/useForceUpdate"}},u={},d=[{value:"Interface",id:"interface",level:2},{value:"Usage",id:"usage",level:2}];function i(e){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"usedebounce",children:"useDebounce"}),"\n",(0,o.jsxs)(n.p,{children:["A custom hook that makes it easy to use ",(0,o.jsx)(n.code,{children:"debounce"}),"."]}),"\n",(0,o.jsx)("br",{}),"\n",(0,o.jsx)(n.h2,{id:"interface",children:"Interface"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"// lodash-es DebounceSettings\n// https://www.geeksforgeeks.org/lodash-_-debounce-method/\ninterface DebounceSettings {\n  leading?: boolean | undefined;\n  maxWait?: number | undefined;\n  trailing?: boolean | undefined;\n}\n\ntype DebounceParameters = Parameters<typeof debounce>;\n\nconst useDebounce: (\n  callback: DebounceParameters[0], //  (...args: any) => any\n  wait: DebounceParameters[1], // number\n  options?: DebounceParameters[2] // DebounceSettings\n) => DebouncedFunc<(...args: any) => any>;\n"})}),"\n",(0,o.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"import { useDebounce } from '@devgrace/react';\n\nconst Example = () => {\n  const handle = useDebounce(() => {\n    console.log('debounce');\n  }, 500);\n\n  return <button onClick={handle}>button1</button>;\n};\n"})})]})}function l(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(i,{...e})}):i(e)}},289:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>a});var o=t(4614);const s={},c=o.createContext(s);function a(e){const n=o.useContext(c);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),o.createElement(c.Provider,{value:n},e.children)}}}]);