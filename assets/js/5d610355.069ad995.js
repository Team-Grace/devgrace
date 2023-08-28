"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[958],{6164:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>v});var r=n(5721);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=s(n),m=a,v=p["".concat(c,".").concat(m)]||p[m]||d[m]||o;return n?r.createElement(v,l(l({ref:t},u),{},{components:n})):r.createElement(v,l({ref:t},u))}));function v(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5396:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var r=n(6529),a=(n(5721),n(6164));const o={},l="useInterval",i={unversionedId:"react/hooks/useInterval",id:"react/hooks/useInterval",title:"useInterval",description:"A custom hook to conveniently use window.setInterval.",source:"@site/docs/react/hooks/useInterval.mdx",sourceDirName:"react/hooks",slug:"/react/hooks/useInterval",permalink:"/devgrace/docs/react/hooks/useInterval",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"useForceUpdate",permalink:"/devgrace/docs/react/hooks/useForceUpdate"},next:{title:"useIsMounted",permalink:"/devgrace/docs/react/hooks/useIsMounted"}},c={},s=[{value:"Interface",id:"interface",level:2},{value:"Example",id:"example",level:2}],u={toc:s},p="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"useinterval"},"useInterval"),(0,a.kt)("p",null,"A custom hook to conveniently use ",(0,a.kt)("inlineCode",{parentName:"p"},"window.setInterval"),"."),(0,a.kt)("p",null,"The main difference between the ",(0,a.kt)("inlineCode",{parentName:"p"},"window.setInterval")," you know and this ",(0,a.kt)("inlineCode",{parentName:"p"},"useInterval")," hook is that its arguments are ",(0,a.kt)("inlineCode",{parentName:"p"},"dynamic"),"."),(0,a.kt)("p",null,"You can stop the timer by putting ",(0,a.kt)("inlineCode",{parentName:"p"},"null")," as the value of ",(0,a.kt)("inlineCode",{parentName:"p"},"delay"),"."),(0,a.kt)("br",null),(0,a.kt)("h2",{id:"interface"},"Interface"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"const useInterval: (callback: () => void, delay: number | null) => void\n")),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useInterval } from '@devgrace/react';\n\nconst Example = () => {\n  const [number, setNumber] = useState(0);\n  const [isPlaying, setIsPlaying] = useState(true);\n\n  useInterval(() => setNumber(number + 1), isPlaying ? 1000 : null);\n\n  return (\n    <div>\n      <div>{number}</div>\n      <button onClick={() => setIsPlaying(false)}>button</button>\n    </div>\n  );\n};\n")))}d.isMDXComponent=!0}}]);