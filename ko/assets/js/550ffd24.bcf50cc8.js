"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6524],{6164:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(5721);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),i=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=i(e.components);return r.createElement(p.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),s=i(n),m=a,f=s["".concat(p,".").concat(m)]||s[m]||d[m]||o;return n?r.createElement(f,l(l({ref:t},u),{},{components:n})):r.createElement(f,l({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c[s]="string"==typeof e?e:a,l[1]=c;for(var i=2;i<o;i++)l[i]=n[i];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},731:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>i});var r=n(6529),a=(n(5721),n(6164));const o={},l="Portal",c={unversionedId:"react/components/Portal",id:"react/components/Portal",title:"Portal",description:"Portal \ucef4\ud3ec\ub10c\ud2b8\ub294 React.createPortal\uc744 \uc0ac\uc6a9\ud574 \ubd80\ubaa8 \ucef4\ud3ec\ub10c\ud2b8\uc758 DOM \uacc4\uce35 \uad6c\uc870 \uc678\ubd80\uc758 DOM \ub178\ub4dc\uc5d0\uc11c \uc790\uc2dd \ucef4\ud3ec\ub10c\ud2b8\ub97c \ub80c\ub354\ub9c1\ud569\ub2c8\ub2e4.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/react/components/Portal.mdx",sourceDirName:"react/components",slug:"/react/components/Portal",permalink:"/devgrace/ko/docs/react/components/Portal",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"LazyImage",permalink:"/devgrace/ko/docs/react/components/LazyImage"},next:{title:"useAsyncPreservedCallback",permalink:"/devgrace/ko/docs/react/hooks/useAsyncPreservedCallback"}},p={},i=[{value:"Interface",id:"interface",level:2},{value:"Usage",id:"usage",level:2},{value:"Default",id:"default",level:3},{value:"Container",id:"container",level:3},{value:"Nested",id:"nested",level:3}],u={toc:i},s="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(s,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"portal"},"Portal"),(0,a.kt)("p",null,"Portal \ucef4\ud3ec\ub10c\ud2b8\ub294 ",(0,a.kt)("inlineCode",{parentName:"p"},"React.createPortal"),"\uc744 \uc0ac\uc6a9\ud574 \ubd80\ubaa8 \ucef4\ud3ec\ub10c\ud2b8\uc758 DOM \uacc4\uce35 \uad6c\uc870 \uc678\ubd80\uc758 DOM \ub178\ub4dc\uc5d0\uc11c \uc790\uc2dd \ucef4\ud3ec\ub10c\ud2b8\ub97c \ub80c\ub354\ub9c1\ud569\ub2c8\ub2e4."),(0,a.kt)("p",null,"Portal \ucef4\ud3ec\ub10c\ud2b8\ub294 \uae30\ubcf8\uc801\uc73c\ub85c ",(0,a.kt)("inlineCode",{parentName:"p"},"document.body"),"\uc5d0 \uc790\uc2dd \ucef4\ud3ec\ub10c\ud2b8\ub97c \ub80c\ub354\ub9c1\ud569\ub2c8\ub2e4. \ud558\uc9c0\ub9cc Portal \ucef4\ud3ec\ub10c\ud2b8\uc758 ",(0,a.kt)("inlineCode",{parentName:"p"},"containerRef")," \ud504\ub85c\ud37c\ud2f0\ub97c \uc804\ub2ec\ud558\uba74 \uc790\uc2dd \ucef4\ud3ec\ub10c\ud2b8\ub97c ",(0,a.kt)("inlineCode",{parentName:"p"},"document.body"),"\uac00 \uc544\ub2cc ",(0,a.kt)("inlineCode",{parentName:"p"},"\ub2e4\ub978 DOM Element"),"\uc5d0\uc11c \ub80c\ub354\ub9c1\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("p",null,"\ub610\ud55c, ",(0,a.kt)("inlineCode",{parentName:"p"},"\uc911\ucca9 \ud3ec\ud138 \uae30\ub2a5"),"\uc744 \uc9c0\uc6d0\ud569\ub2c8\ub2e4. \uc5ec\ub7ec Portal \ucef4\ud3ec\ub10c\ud2b8\ub97c \uc911\ucca9\ud558\uba74 ",(0,a.kt)("inlineCode",{parentName:"p"},"\uc911\ucca9\ub41c Portal DOM \uacc4\uce35 \uad6c\uc870"),"\uac00 \uc0dd\uc131\ub429\ub2c8\ub2e4."),(0,a.kt)("p",null,"Portal \ucef4\ud3ec\ub10c\ud2b8\ub294 ",(0,a.kt)("inlineCode",{parentName:"p"},"Modal"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Dialog"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Tooltip"),"\uacfc \uac19\uc740 \uae30\ub2a5\uacfc \ud568\uaed8 \uc0ac\uc6a9\ud558\uae30\uc5d0 \uc774\uc0c1\uc801\uc785\ub2c8\ub2e4."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://react.dev/reference/react-dom/createPortal#rendering-a-modal-dialog-with-a-portal"},"React CreatePortal")," \ub2e4\uc74c \ubb38\uc11c\ub97c \ucc38\uace0\ud574\uc8fc\uc138\uc694."),(0,a.kt)("br",null),(0,a.kt)("h2",{id:"interface"},"Interface"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"function Portal({\n  children,\n  containerRef,\n}: {\n  children: React.ReactNode;\n  containerRef?: React.RefObject<HTMLElement | null>;\n}): JSX.Element;\n")),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("h3",{id:"default"},"Default"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import { Portal } from '@devgrace/react'\n\nconst Example = () => {\n  return (\n    <Portal>\n      <p>Example Portal</p>\n    </Portal>\n  );\n};\n")),(0,a.kt)("h3",{id:"container"},"Container"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import { Portal } from '@devgrace/react'\n\nconst Example = () => {\n  const ref = useRef<HTMLDivElement | null>(null);\n\n  return (\n    <div>\n      <Portal containerRef={ref}>\n        <p>Example Portal</p>\n      </Portal>\n\n      <div id=\"outer\" ref={ref} />\n    </div>\n  );\n};\n")),(0,a.kt)("h3",{id:"nested"},"Nested"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import { Portal } from '@devgrace/react'\n\nconst Example = () => {\n  return (\n    <Portal>\n      <p>Default Portal</p>\n      <Portal>\n        <p>Nested Portal1</p>\n        <Portal>\n          <p>Nested Portal2</p>\n        </Portal>\n      </Portal>\n    </Portal>\n  );\n};\n")))}d.isMDXComponent=!0}}]);