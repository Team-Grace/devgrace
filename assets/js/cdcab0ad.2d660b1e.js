"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[470],{6164:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(5721);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(f,l(l({ref:t},s),{},{components:n})):r.createElement(f,l({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7929:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var r=n(6529),a=(n(5721),n(6164));const o={},l="Portal",i={unversionedId:"react/components/Portal",id:"react/components/Portal",title:"Portal",description:"The Portal Component uses React.createPortal to render the Child Component on a DOM Element outside of the Parent Component's DOM hierarchy.",source:"@site/docs/react/components/Portal.mdx",sourceDirName:"react/components",slug:"/react/components/Portal",permalink:"/devgrace/docs/react/components/Portal",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"InView",permalink:"/devgrace/docs/react/components/InView"},next:{title:"useDebounce",permalink:"/devgrace/docs/react/hooks/useDebounce"}},c={},p=[{value:"Interface",id:"interface",level:2},{value:"Default Usage",id:"default-usage",level:2},{value:"Container Usage",id:"container-usage",level:2},{value:"Nested Usage",id:"nested-usage",level:2}],s={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"portal"},"Portal"),(0,a.kt)("p",null,"The Portal Component uses ",(0,a.kt)("inlineCode",{parentName:"p"},"React.createPortal")," to render the Child Component on a DOM Element outside of the Parent Component's DOM hierarchy."),(0,a.kt)("p",null,"The Portal Component renders a Child Component in ",(0,a.kt)("inlineCode",{parentName:"p"},"document.body")," by default. However, if you pass in the Portal Component's ",(0,a.kt)("inlineCode",{parentName:"p"},"containerRef")," prop, you can render the Child Component in a ",(0,a.kt)("inlineCode",{parentName:"p"},"different DOM Element")," than ",(0,a.kt)("inlineCode",{parentName:"p"},"document.body"),"."),(0,a.kt)("p",null,"Additionally, it supports ",(0,a.kt)("inlineCode",{parentName:"p"},"nested portal functionality"),". Nesting multiple Portal Components creates ",(0,a.kt)("inlineCode",{parentName:"p"},"a nested portal DOM hierarchy"),"."),(0,a.kt)("p",null,"The Portal Component is ideal for use with features like ",(0,a.kt)("inlineCode",{parentName:"p"},"Modal"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Dialog"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"Tooltip"),"."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://react.dev/reference/react-dom/createPortal#rendering-a-modal-dialog-with-a-portal"},"React CreatePortal")," Please refer to the following articles"),(0,a.kt)("br",null),(0,a.kt)("h2",{id:"interface"},"Interface"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"const Portal: ({ children, className, containerRef }: {\n  children: React.ReactNode;\n  className?: string;\n  containerRef?: React.RefObject<HTMLElement>;\n}) => JSX.Element\n")),(0,a.kt)("h2",{id:"default-usage"},"Default Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import { Portal } from '@devgrace/react'\n\nconst Example = () => {\n  return (\n    <Portal>\n      <p>Example Portal</p>\n    </Portal>\n  );\n};\n")),(0,a.kt)("h2",{id:"container-usage"},"Container Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import { Portal } from '@devgrace/react'\n\nconst Example = () => {\n  const ref = useRef<HTMLDivElement | null>(null);\n\n  return (\n    <div>\n      <Portal containerRef={ref}>\n        <p>Example Portal</p>\n      </Portal>\n\n      <div id=\"outer\" ref={ref} />\n    </div>\n  );\n};\n")),(0,a.kt)("h2",{id:"nested-usage"},"Nested Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import { Portal } from '@devgrace/react'\n\nconst Example = () => {\n  return (\n    <Portal>\n      <p>Default Portal</p>\n      <Portal>\n        <p>Nested Portal1</p>\n        <Portal>\n          <p>Nested Portal2</p>\n        </Portal>\n      </Portal>\n    </Portal>\n  );\n};\n")))}d.isMDXComponent=!0}}]);