"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[385],{6164:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>g});var n=r(5721);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=s(r),m=a,g=d["".concat(c,".").concat(m)]||d[m]||p[m]||i;return r?n.createElement(g,l(l({ref:t},u),{},{components:r})):n.createElement(g,l({ref:t},u))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[d]="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9086:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var n=r(6529),a=(r(5721),r(6164));const i={},l="Introduce",o={unversionedId:"introduce/Introduce",id:"introduce/Introduce",title:"Introduce",description:"@devgrace is an open source library that provides useful React UI Components, React Custom Hooks, and various Utility Functions.",source:"@site/docs/introduce/Introduce.md",sourceDirName:"introduce",slug:"/introduce/",permalink:"/devgrace/docs/introduce/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",next:{title:"AB",permalink:"/devgrace/docs/react/components/AB"}},c={},s=[{value:"Usage",id:"usage",level:2},{value:'@devgrace/ui <img align="center" src="https://img.shields.io/npm/v/@devgrace/ui.svg" />',id:"devgraceui-",level:3},{value:'@devgrace/react <img align="center" src="https://img.shields.io/npm/v/@devgrace/react.svg" />',id:"devgracereact-",level:3},{value:'@devgrace/utils <img align="center" src="https://img.shields.io/npm/v/@devgrace/utils.svg" />',id:"devgraceutils-",level:3}],u={toc:s},d="wrapper";function p(e){let{components:t,...r}=e;return(0,a.kt)(d,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"introduce"},"Introduce"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"@devgrace")," is an open source library that provides useful ",(0,a.kt)("inlineCode",{parentName:"p"},"React UI Components"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"React Custom Hooks"),", and various ",(0,a.kt)("inlineCode",{parentName:"p"},"Utility Functions"),"."),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("h3",{id:"devgraceui-"},"@devgrace/ui ",(0,a.kt)("img",{align:"center",src:"https://img.shields.io/npm/v/@devgrace/ui.svg"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"A library that provides ",(0,a.kt)("inlineCode",{parentName:"li"},"React UI Components"),". (Example: ",(0,a.kt)("inlineCode",{parentName:"li"},"Button"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"Select"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"Checkbox"),") ")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"npm i @devgrace/ui\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"yarn add @devgrace/ui\n")),(0,a.kt)("h3",{id:"devgracereact-"},"@devgrace/react ",(0,a.kt)("img",{align:"center",src:"https://img.shields.io/npm/v/@devgrace/react.svg"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"A library that provides useful ",(0,a.kt)("inlineCode",{parentName:"li"},"Components")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"Custom Hooks")," related to React. ")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"npm i @devgrace/react\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"yarn add @devgrace/react\n")),(0,a.kt)("h3",{id:"devgraceutils-"},"@devgrace/utils ",(0,a.kt)("img",{align:"center",src:"https://img.shields.io/npm/v/@devgrace/utils.svg"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"A library that provides useful ",(0,a.kt)("inlineCode",{parentName:"li"},"Utility functions")," related to client development. ")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"npm i @devgrace/utils\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"yarn add @devgrace/utils\n")),(0,a.kt)("br",null))}p.isMDXComponent=!0}}]);