"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2269],{7348:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>f,frontMatter:()=>c,metadata:()=>a,toc:()=>d});var r=n(5735),o=n(289),i=n(2590);const c={},s="LazyImage",a={id:"react/components/LazyImage",title:"LazyImage",description:"An image component that Lazy loading an assigned image when exposed to a Viewport.",source:"@site/docs/react/components/LazyImage.mdx",sourceDirName:"react/components",slug:"/react/components/LazyImage",permalink:"/devgrace/docs/react/components/LazyImage",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"InView",permalink:"/devgrace/docs/react/components/InView"},next:{title:"Portal",permalink:"/devgrace/docs/react/components/Portal"}},l={},d=[{value:"Interface",id:"interface",level:2},{value:"Usage",id:"usage",level:2},{value:"Default",id:"default",level:3},{value:"Fallback",id:"fallback",level:3},{value:"Example",id:"example",level:2},{value:"Note",id:"note",level:2}];function u(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"lazyimage",children:"LazyImage"}),"\n",(0,r.jsxs)(t.p,{children:["An image component that ",(0,r.jsx)(t.code,{children:"Lazy loading"})," an assigned image when exposed to a ",(0,r.jsx)(t.code,{children:"Viewport"}),"."]}),"\n",(0,r.jsxs)(t.p,{children:["You can resize the image by entering ",(0,r.jsx)(t.code,{children:"width"}),", ",(0,r.jsx)(t.code,{children:"height"})," values and at the same time improve the ",(0,r.jsx)(t.code,{children:"Layout Shift"}),"."]}),"\n",(0,r.jsxs)(t.p,{children:["You can set the Intersection Observer Option (see ",(0,r.jsx)(t.code,{children:"Note"})," below)."]}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(t.h2,{id:"interface",children:"Interface"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"interface LazyImageProps extends React.ComponentProps<'img'> {\n  src: string;\n  threshold?: number | number[]; // default: 0\n  root?: Document | Element | null; // default: null\n  rootMargin?: string; // default: '0px 0px 0px 0px'\n}\n\nconst LazyImage: React.ForwardRefExoticComponent<Omit<LazyImageProps, \"ref\"> & React.RefAttributes<HTMLDivElement>>\n"})}),"\n",(0,r.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsx)(t.h3,{id:"default",children:"Default"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"import { LazyImage } from '@devgrace/react';\nimport img1 from '../assets/img1.png';\nimport img2 from '../assets/img2.png';\n\nconst Example = () => {\n  return (\n    <div>\n      {/* ... */}\n      <LazyImage width={400} height={400} src={img1} alt=\"img1\" />\n      {/* ... */}\n      <LazyImage width={400} height={400} src={img2} alt=\"img2\" />\n      {/* ... */}\n    </div>\n  );\n}; \n"})}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(t.h3,{id:"fallback",children:"Fallback"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"import { LazyImage } from '@devgrace/react';\nimport img1 from '../assets/img1.png';\n\nconst Example = () => {\n  const [isLoaded, setIsLoaded] = useState(false);\n\n  const wrapperStyle: CSSProperties = {\n    position: 'relative',\n    width: '400px',\n    height: '400px',\n  };\n\n  const imgStyle: CSSProperties = {\n    position: 'absolute',\n    top: 0,\n    left: 0,\n    opacity: isLoaded ? 1 : 0,\n    transition: 'opacity 0.2s',\n  };\n\n  const skeletonStyle: CSSProperties = {\n    width: '400px',\n    height: '400px',\n    backgroundColor: '#cdcbcb',\n  }\n\n  return (\n    <div style={wrapperStyle}>\n      {!isLoaded && <div style={skeletonStyle} />}\n      <LazyImage\n        style={imgStyle}\n        width={400}\n        height={400}\n        src={img1}\n        alt=\"img1\"\n        onLoad={() => setIsLoaded(true)}\n      />\n    </div>\n  );\n}; \n"})}),"\n",(0,r.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,r.jsxs)("div",{style:{maxWidth:"500px",height:"500px",overflow:"scroll",background:"#f8f8f8"},children:[(0,r.jsx)("div",{style:{width:"100%",height:"500px",textAlign:"center",fontSize:"2rem"},children:(0,r.jsx)(t.p,{children:"Please scroll down."})}),(0,r.jsx)(i.wY,{width:"100%",height:400,src:"https://github.com/Team-Grace/devgrace/assets/64779472/b5640bec-2abc-4205-afbf-ccfd9876a90b",alt:"img1",onClick:()=>console.log("img click1")}),(0,r.jsx)("div",{style:{width:"100%",height:"150px"}}),(0,r.jsx)(i.wY,{width:"100%",height:400,src:"https://github.com/Team-Grace/devgrace/assets/64779472/207743a7-b29f-4826-bc08-8df0d67e568b",alt:"img2",onClick:()=>console.log("img click2")}),(0,r.jsx)("div",{style:{width:"100%",height:"150px"}}),(0,r.jsx)(i.wY,{width:"100%",height:400,src:"https://github.com/Team-Grace/devgrace/assets/64779472/d1957ec8-fe87-406e-bfda-fb4ee505b152",alt:"img3",onClick:()=>console.log("img click3")})]}),"\n",(0,r.jsx)(t.h2,{id:"note",children:"Note"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API",children:"Intersection Observer API"})})]})}function f(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},2590:(e,t,n)=>{n.d(t,{AB:()=>i,D9:()=>U,df:()=>D,iP:()=>$,nA:()=>Y,t$:()=>B,uM:()=>M,wY:()=>F,yU:()=>V});var r=n(5735),o=n(4614);n(3133);"function"==typeof SuppressedError&&SuppressedError;const i=({children:e})=>{const t=Math.random()<.5?0:1,n=o.Children.toArray(e);let r=0,c=0;if(2!==n.length)return null;for(const o of n){if(![i.CaseA,i.CaseB].includes(o.type))return null;o.type===i.CaseA?r+=1:c+=1}return r>=2||c>=2?null:t?n[0]:n[1]};i.CaseA=({children:e})=>(0,r.jsx)(o.Fragment,{children:e}),i.CaseB=({children:e})=>(0,r.jsx)(o.Fragment,{children:e});var c="object"==typeof global&&global&&global.Object===Object&&global,s="object"==typeof self&&self&&self.Object===Object&&self,a=c||s||Function("return this")(),l=a.Symbol,d=Object.prototype,u=d.hasOwnProperty,f=d.toString,h=l?l.toStringTag:void 0,p=Object.prototype.toString,g="[object Null]",m="[object Undefined]",v=l?l.toStringTag:void 0;var b="[object Symbol]",x=/\s/,y=/^\s+/;function w(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}var j=NaN,O=/^[-+]0x[0-9a-f]+$/i,I=/^0b[01]+$/i,E=/^0o[0-7]+$/i,S=parseInt;function L(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return null!=e&&"object"==typeof e}(e)&&function(e){return null==e?void 0===e?m:g:v&&v in Object(e)?function(e){var t=u.call(e,h),n=e[h];try{e[h]=void 0;var r=!0}catch(e){}var o=f.call(e);return r&&(t?e[h]=n:delete e[h]),o}(e):function(e){return p.call(e)}(e)}(e)==b}(e))return j;if(w(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=w(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=function(e){return e?e.slice(0,function(e){for(var t=e.length;t--&&x.test(e.charAt(t)););return t}(e)+1).replace(y,""):e}(e);var n=I.test(e);return n||E.test(e)?S(e.slice(2),n?2:8):O.test(e)?j:+e}var k=function(){return a.Date.now()},C=Math.max,z=Math.min;const P=(e,t,n={})=>{const r=(0,o.useMemo)((()=>function(e,t,n){var r,o,i,c,s,a,l=0,d=!1,u=!1,f=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function h(t){var n=r,i=o;return r=o=void 0,l=t,c=e.apply(i,n)}function p(e){var n=e-a;return void 0===a||n>=t||n<0||u&&e-l>=i}function g(){var e=k();if(p(e))return m(e);s=setTimeout(g,function(e){var n=t-(e-a);return u?z(n,i-(e-l)):n}(e))}function m(e){return s=void 0,f&&r?h(e):(r=o=void 0,c)}function v(){var e=k(),n=p(e);if(r=arguments,o=this,a=e,n){if(void 0===s)return function(e){return l=e,s=setTimeout(g,t),d?h(e):c}(a);if(u)return clearTimeout(s),s=setTimeout(g,t),h(a)}return void 0===s&&(s=setTimeout(g,t)),c}return t=L(t)||0,w(n)&&(d=!!n.leading,i=(u="maxWait"in n)?C(L(n.maxWait)||0,t):i,f="trailing"in n?!!n.trailing:f),v.cancel=function(){void 0!==s&&clearTimeout(s),l=0,r=a=o=s=void 0},v.flush=function(){return void 0===s?c:m(k())},v}(e,t,n)),[e,t,n]);return(e=>{const t=(0,o.useRef)(e);(0,o.useEffect)((()=>{t.current=e}),[e]),(0,o.useEffect)((()=>()=>t.current()),[])})((()=>r.cancel())),r},M=({children:e,capture:t,wait:n,options:r})=>{const i=o.Children.only(e),c=P(((...e)=>{const n=null==i?void 0:i.props;if(n)return"function"==typeof n[t]?n[t](...e):void 0}),n,r);return(0,o.cloneElement)(i,{[t]:c})};function R(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}"function"==typeof SuppressedError&&SuppressedError;const A=e=>{const t=(0,o.useRef)(e);return(0,o.useEffect)((()=>{t.current=e}),[e]),(0,o.useCallback)(((...e)=>t.current(1===e.length?e[0]:e)),[])},T=({action:e,calledOnce:t=!1,root:n=null,threshold:r=0,rootMargin:i="0px 0px 0px 0px"})=>{const c=(0,o.useRef)(null),s=A(e),a=(0,o.useCallback)((([e],n)=>{if(e&&e.isIntersecting){const r=e.target;s&&s(e),t&&n.unobserve(r)}}),[s,t]);return(0,o.useEffect)((()=>{const e=c.current;if("undefined"==typeof IntersectionObserver)return;if(!e)return;const t=new IntersectionObserver(a,{root:n,rootMargin:i,threshold:r});return t.observe(e),()=>{t.unobserve(e)}}),[n,r,i,a]),c},N=(...e)=>(0,o.useCallback)((t=>{e.forEach((e=>{"function"==typeof e?e(t):null!=e&&(e.current=t)}))}),[...e]),D=(0,o.forwardRef)(((e,t)=>{const{action:n,calledOnce:o,threshold:i,root:c,rootMargin:s}=e,a=R(e,["action","calledOnce","threshold","root","rootMargin"]),l=T({action:n,calledOnce:o,threshold:i,root:c,rootMargin:s});return(0,r.jsx)("div",Object.assign({ref:N(t,l)},a,{children:e.children}))})),F=(0,o.forwardRef)(((e,t)=>{var{src:n,style:i,threshold:c,root:s,rootMargin:a}=e,l=R(e,["src","style","threshold","root","rootMargin"]);const d=T({action:e=>{e.target.src=n},calledOnce:!0,threshold:c,root:s,rootMargin:a}),u=(0,o.useMemo)((()=>Object.assign({display:"inline-block"},i)),[i]);return(0,r.jsx)("img",Object.assign({},l,{ref:N(t,d),style:u}))})),W="undefined"!=typeof window?o.useLayoutEffect:o.useEffect;(0,o.createContext)({parentPortalElement:null});const Y=({children:e,condition:t})=>(e=>"function"==typeof e?e():e)(t)?(0,r.jsx)(o.Fragment,{children:e}):null,B=e=>{const t=(0,o.useRef)(null),n=A(e);return(0,o.useEffect)((()=>{const e=(()=>{if("undefined"==typeof window&&"undefined"!=typeof global)return!1;const e=window.navigator.userAgent;return/Android|webOS|iPhone|iPad|iPod|Windows Phone|BlackBerry|IEMobile|Opera Mini/i.test(e)})()?"touchstart":"mousedown",r=e=>{const r=t.current;r&&!r.contains(e.target)&&n(r)};return document.addEventListener(e,r),()=>{document.removeEventListener(e,r)}}),[n]),{ref:t}},U=e=>{const t=(0,o.useRef)(e);return(0,o.useEffect)((()=>{t.current=e}),[e]),t.current},V=e=>{const[t,n]=(0,o.useState)({bottom:0,height:0,left:0,right:0,top:0,width:0,x:0,y:0}),r=(0,o.useRef)(null),i=A(e),c=(0,o.useCallback)((([e])=>{e&&(i(e),n(e.contentRect))}),[i]);return(0,o.useEffect)((()=>{const e=r.current;if("undefined"==typeof ResizeObserver)return;if(!e)return;const t=new ResizeObserver(c);return t.observe(e),()=>{t.unobserve(e)}}),[c]),{ref:r,contentRect:t}},$=(e={})=>{const{isDebounce:t=!1,wait:n=300}=e,[r,i]=(0,o.useState)({width:null,height:null}),c=(0,o.useCallback)((()=>{i({width:window.innerWidth,height:window.innerHeight})}),[]),s=P(c,n),a=(0,o.useMemo)((()=>t?s:c),[c,t,s]);return W((()=>(c(),window.addEventListener("resize",a),()=>{window.removeEventListener("resize",a)})),[]),r}},289:(e,t,n)=>{n.d(t,{Z:()=>s,a:()=>c});var r=n(4614);const o={},i=r.createContext(o);function c(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);