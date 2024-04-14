"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9143],{8194:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>l,frontMatter:()=>r,metadata:()=>u,toc:()=>a});var s=n(5735),o=n(289);const r={},c="useTimeout",u={id:"react/hooks/useTimeout",title:"useTimeout",description:"window.setTimeout\uc744 \ud3b8\ub9ac\ud558\uac8c \uc0ac\uc6a9\ud560 \uc218 \uc788\ub294 \ucee4\uc2a4\ud140 \ud6c5 \uc785\ub2c8\ub2e4.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/react/hooks/useTimeout.mdx",sourceDirName:"react/hooks",slug:"/react/hooks/useTimeout",permalink:"/devgrace/ko/docs/react/hooks/useTimeout",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"useResizeObserver",permalink:"/devgrace/ko/docs/react/hooks/useResizeObserver"},next:{title:"useToggle",permalink:"/devgrace/ko/docs/react/hooks/useToggle"}},i={},a=[{value:"Interface",id:"interface",level:2},{value:"Usage",id:"usage",level:2}];function d(e){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"usetimeout",children:"useTimeout"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"window.setTimeout"}),"\uc744 \ud3b8\ub9ac\ud558\uac8c \uc0ac\uc6a9\ud560 \uc218 \uc788\ub294 \ucee4\uc2a4\ud140 \ud6c5 \uc785\ub2c8\ub2e4."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"delay"}),"\uc758 \uac12\uc73c\ub85c ",(0,s.jsx)(t.code,{children:"null"}),"\uc744 \ub123\uc73c\uba74 \ud0c0\uc774\uba38\ub97c \uc911\uc9c0\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."]}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsx)(t.h2,{id:"interface",children:"Interface"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-tsx",children:"type SetTimeoutParameters = Parameters<typeof setTimeout>;\n\nconst useTimeout: (callback: SetTimeoutParameters[0], delay?: SetTimeoutParameters[1]) => void\n"})}),"\n",(0,s.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-tsx",children:"import { useTimeout } from '@devgrace/react';\n\nconst Example = () => {\n  const [number, setNumber] = useState(0);\n\n  useTimeout(() => {\n    setNumber(number + 1);\n  }, 1000);\n\n  useTimeout(() => {\n    setNumber(number + 1);\n  }, 2000);\n\n  return <div>{number}</div>;\n};\n"})})]})}function l(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},289:(e,t,n)=>{n.d(t,{Z:()=>u,a:()=>c});var s=n(4614);const o={},r=s.createContext(o);function c(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function u(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);