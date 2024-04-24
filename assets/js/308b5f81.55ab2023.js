"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4580],{8777:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var r=t(5735),s=t(289);const o={},c="useIntersectionObserver",i={id:"react/hooks/useIntersectionObserver",title:"useIntersectionObserver",description:"A custom hook that calls the action callback function when the target element assigned ref is exposed to the Viewport.",source:"@site/docs/react/hooks/useIntersectionObserver.mdx",sourceDirName:"react/hooks",slug:"/react/hooks/useIntersectionObserver",permalink:"/devgrace/docs/react/hooks/useIntersectionObserver",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"useImageStatus",permalink:"/devgrace/docs/react/hooks/useImageStatus"},next:{title:"useInterval",permalink:"/devgrace/docs/react/hooks/useInterval"}},a={},l=[{value:"Interface",id:"interface",level:2},{value:"Usage",id:"usage",level:2},{value:"Note",id:"note",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"useintersectionobserver",children:"useIntersectionObserver"}),"\n",(0,r.jsxs)(n.p,{children:["A custom hook that calls the ",(0,r.jsx)(n.code,{children:"action"})," callback function when the target element assigned ",(0,r.jsx)(n.code,{children:"ref"})," is exposed to the ",(0,r.jsx)(n.code,{children:"Viewport"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["You can set the Intersection Observer Option (see ",(0,r.jsx)(n.code,{children:"Note"})," below)."]}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(n.h2,{id:"interface",children:"Interface"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"interface UseIntersectionObserverProps {\n  action: (entry: IntersectionObserverEntry) => void;\n  calledOnce?: boolean;\n  threshold?: number | number[];\n  root?: Document | Element | null;\n  rootMargin?: string;\n}\n\nconst useIntersectionObserver: <T extends HTMLElement>({ \n  action, \n  calledOnce, \n  root, \n  threshold, \n  rootMargin\n}: UseIntersectionObserverProps) => React.RefObject<T>\n"})}),"\n",(0,r.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:'import { useIntersectionObserver } from \'@devgrace/react\';\n\nconst Example = () => {\n  const divRef = useIntersectionObserver<HTMLDivElement>({\n    action: () => { /* action */},\n  });\n  const imgRef = useIntersectionObserver<HTMLImageElement>({\n    action: (entry) => { /* You can use IntersectionObserverEntry if needed. */},\n  });\n\n  return (\n    <div>\n      {/* ... */}\n      <div ref={divRef}>Box</div>\n      <img ref={imgRef} src="url" alt="img" />\n    </div>\n  );\n};\n'})}),"\n",(0,r.jsx)(n.h2,{id:"note",children:"Note"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API",children:"Intersection Observer API"})})]})}function u(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},289:(e,n,t)=>{t.d(n,{Z:()=>i,a:()=>c});var r=t(4614);const s={},o=r.createContext(s);function c(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);