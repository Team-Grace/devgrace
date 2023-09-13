"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5181],{6164:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(5721);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),i=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=i(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},v=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=i(n),v=a,m=p["".concat(c,".").concat(v)]||p[v]||d[v]||o;return n?r.createElement(m,l(l({ref:t},u),{},{components:n})):r.createElement(m,l({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=v;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:a,l[1]=s;for(var i=2;i<o;i++)l[i]=n[i];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}v.displayName="MDXCreateElement"},5526:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>i});var r=n(6529),a=(n(5721),n(6164));const o={},l="useInterval",s={unversionedId:"react/hooks/useInterval",id:"react/hooks/useInterval",title:"useInterval",description:"window.setInterval\uc744 \ud3b8\ub9ac\ud558\uac8c \uc0ac\uc6a9\ud560 \uc218 \uc788\ub294 \ucee4\uc2a4\ud140 \ud6c5\uc785\ub2c8\ub2e4.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/react/hooks/useInterval.mdx",sourceDirName:"react/hooks",slug:"/react/hooks/useInterval",permalink:"/devgrace/ko/docs/react/hooks/useInterval",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"useIntersectionObserver",permalink:"/devgrace/ko/docs/react/hooks/useIntersectionObserver"},next:{title:"useIsMounted",permalink:"/devgrace/ko/docs/react/hooks/useIsMounted"}},c={},i=[{value:"Interface",id:"interface",level:2},{value:"Usage",id:"usage",level:2}],u={toc:i},p="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"useinterval"},"useInterval"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"window.setInterval"),"\uc744 \ud3b8\ub9ac\ud558\uac8c \uc0ac\uc6a9\ud560 \uc218 \uc788\ub294 \ucee4\uc2a4\ud140 \ud6c5\uc785\ub2c8\ub2e4. "),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"window.setInterva"),"\uacfc ",(0,a.kt)("inlineCode",{parentName:"p"},"useInterval")," \ud6c5\uc758 \uc8fc\uc694 \ucc28\uc774\uc810\uc740 \uadf8 \uc778\uc218\uac00 ",(0,a.kt)("inlineCode",{parentName:"p"},"\ub3d9\uc801"),"\uc774\ub77c\ub294 \uac83\uc785\ub2c8\ub2e4."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"delay"),"\uc758 \uac12\uc73c\ub85c ",(0,a.kt)("inlineCode",{parentName:"p"},"null"),"\uc744 \ub123\uc73c\uba74 \ud0c0\uc774\uba38\ub97c \uc911\uc9c0\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("br",null),(0,a.kt)("h2",{id:"interface"},"Interface"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"const useInterval: (callback: () => void, delay: number | null) => void\n")),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useInterval } from '@devgrace/react';\n\nconst Example = () => {\n  const [number, setNumber] = useState(0);\n  const [isPlaying, setIsPlaying] = useState(true);\n\n  useInterval(() => setNumber(number + 1), isPlaying ? 1000 : null);\n\n  return (\n    <div>\n      <div>{number}</div>\n      <button onClick={() => setIsPlaying(false)}>button</button>\n    </div>\n  );\n};\n")))}d.isMDXComponent=!0}}]);