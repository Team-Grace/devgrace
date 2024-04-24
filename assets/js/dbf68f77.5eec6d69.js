"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8862],{9685:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>f,frontMatter:()=>r,metadata:()=>i,toc:()=>u});var o=t(5735),s=t(289);const r={},c="useIsomorphicLayoutEffect",i={id:"react/hooks/useIsomorphicLayoutEffect",title:"useIsomorphicLayoutEffect",description:"The useIsomorphicLayoutEffect provides a hook to ensure that it runs synchronously even in server-side rendering environments.",source:"@site/docs/react/hooks/useIsomorphicLayoutEffect.mdx",sourceDirName:"react/hooks",slug:"/react/hooks/useIsomorphicLayoutEffect",permalink:"/devgrace/docs/react/hooks/useIsomorphicLayoutEffect",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"useIsMounted",permalink:"/devgrace/docs/react/hooks/useIsMounted"},next:{title:"useMediaQuery",permalink:"/devgrace/docs/react/hooks/useMediaQuery"}},a={},u=[{value:"Interface",id:"interface",level:2},{value:"Usage",id:"usage",level:2}];function d(e){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"useisomorphiclayouteffect",children:"useIsomorphicLayoutEffect"}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"useIsomorphicLayoutEffect"})," provides a hook to ensure that it runs synchronously even in server-side rendering environments."]}),"\n",(0,o.jsxs)(n.p,{children:["Use ",(0,o.jsx)(n.code,{children:"useLayoutEffect"})," in the client environment and ",(0,o.jsx)(n.code,{children:"useEffect"})," in the server environment."]}),"\n",(0,o.jsx)("br",{}),"\n",(0,o.jsx)(n.h2,{id:"interface",children:"Interface"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"const useIsomorphicLayoutEffect: (\n  effect: React.EffectCallback, \n  deps?: React.DependencyList | undefined\n) => void;\n"})}),"\n",(0,o.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"import { useIsomorphicLayoutEffect } from '@devgrace/react';\n\nconst Example = () => {\n  useIsomorphicLayoutEffect(() => {\n    console.log(\n      \"This is useLayoutEffect in the client environment and useEffect in the server environment.\",\n    )\n  }, []);\n\n  return <div>{/* ... */}</div>;\n};\n"})})]})}function f(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},289:(e,n,t)=>{t.d(n,{Z:()=>i,a:()=>c});var o=t(4614);const s={},r=o.createContext(s);function c(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);