"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4611],{6164:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(5721);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),l=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(i.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},v=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(r),v=o,f=p["".concat(i,".").concat(v)]||p[v]||d[v]||a;return r?n.createElement(f,s(s({ref:t},u),{},{components:r})):n.createElement(f,s({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=v;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[p]="string"==typeof e?e:o,s[1]=c;for(var l=2;l<a;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}v.displayName="MDXCreateElement"},6951:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var n=r(6529),o=(r(5721),r(6164));const a={},s="useIntersectionObserver",c={unversionedId:"react/hooks/useIntersectionObserver",id:"react/hooks/useIntersectionObserver",title:"useIntersectionObserver",description:"ref\ub97c \ud560\ub2f9\ud55c \ud0c0\uac9f \uc5d8\ub9ac\uba3c\ud2b8\uac00 Viewport\uc5d0 \ub178\ucd9c\ub418\ub294 \uc2dc\uc810\uc5d0 action \ucf5c\ubc31 \ud568\uc218\ub97c \ud638\ucd9c\uc2dc\ud0a4\ub294 \ucee4\uc2a4\ud140 \ud6c5\uc785\ub2c8\ub2e4.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/react/hooks/useIntersectionObserver.mdx",sourceDirName:"react/hooks",slug:"/react/hooks/useIntersectionObserver",permalink:"/devgrace/ko/docs/react/hooks/useIntersectionObserver",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"useImageStatus",permalink:"/devgrace/ko/docs/react/hooks/useImageStatus"},next:{title:"useInterval",permalink:"/devgrace/ko/docs/react/hooks/useInterval"}},i={},l=[{value:"Interface",id:"interface",level:2},{value:"Usage",id:"usage",level:2},{value:"Note",id:"note",level:2}],u={toc:l},p="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"useintersectionobserver"},"useIntersectionObserver"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"ref"),"\ub97c \ud560\ub2f9\ud55c \ud0c0\uac9f \uc5d8\ub9ac\uba3c\ud2b8\uac00 ",(0,o.kt)("inlineCode",{parentName:"p"},"Viewport"),"\uc5d0 \ub178\ucd9c\ub418\ub294 \uc2dc\uc810\uc5d0 ",(0,o.kt)("inlineCode",{parentName:"p"},"action")," \ucf5c\ubc31 \ud568\uc218\ub97c \ud638\ucd9c\uc2dc\ud0a4\ub294 \ucee4\uc2a4\ud140 \ud6c5\uc785\ub2c8\ub2e4."),(0,o.kt)("p",null,"Intersection Observer Option\uc744 \uc124\uc815\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.(\ud558\ub2e8 ",(0,o.kt)("inlineCode",{parentName:"p"},"Note")," \ucc38\uace0)"),(0,o.kt)("br",null),(0,o.kt)("h2",{id:"interface"},"Interface"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"interface UseIntersectionObserverProps {\n  action: (entry: IntersectionObserverEntry) => void;\n  calledOnce?: boolean;\n  threshold?: number | number[];\n  root?: Document | Element | null;\n  rootMargin?: string;\n}\n\nconst useIntersectionObserver: <T extends HTMLElement>({ \n  action, \n  calledOnce, \n  root, \n  threshold, \n  rootMargin\n}: UseIntersectionObserverProps) => React.RefObject<T>\n")),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useIntersectionObserver } from \'@devgrace/react\';\n\nconst Example = () => {\n  const divRef = useIntersectionObserver<HTMLDivElement>({\n    action: () => { /* action */},\n  });\n  const imgRef = useIntersectionObserver<HTMLImageElement>({\n    action: (entry) => { /* \ud544\uc694\ud558\ub2e4\uba74 IntersectionObserverEntry \ub97c \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. */},\n  });\n\n  return (\n    <div>\n      {/* ... */}\n      <div ref={divRef}>Box</div>\n      <img ref={imgRef} src="url" alt="img" />\n    </div>\n  );\n};\n')),(0,o.kt)("h2",{id:"note"},"Note"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/ko/docs/Web/API/IntersectionObserver"},"Intersection Observer API")))}d.isMDXComponent=!0}}]);