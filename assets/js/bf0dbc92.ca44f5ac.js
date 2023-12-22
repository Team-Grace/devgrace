"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8067],{6037:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>s,default:()=>f,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var r=t(5735),o=t(289),c=t(2590);const i={},s="InView",l={id:"react/components/InView",title:"InView",description:"A component that calls an action callback function that is passed as a prop when exposed to a Viewport.",source:"@site/docs/react/components/InView.mdx",sourceDirName:"react/components",slug:"/react/components/InView",permalink:"/devgrace/docs/react/components/InView",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"DebounceWrapper",permalink:"/devgrace/docs/react/components/DebounceWrapper"},next:{title:"LazyImage",permalink:"/devgrace/docs/react/components/LazyImage"}},a={},u=[{value:"Interface",id:"interface",level:2},{value:"Usage",id:"usage",level:2},{value:"Example",id:"example",level:2}];function d(e){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"inview",children:"InView"}),"\n",(0,r.jsxs)(n.p,{children:["A component that calls an ",(0,r.jsx)(n.code,{children:"action"})," callback function that is passed as a prop when exposed to a ",(0,r.jsx)(n.code,{children:"Viewport"}),"."]}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(n.h2,{id:"interface",children:"Interface"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"interface UseIntersectionObserverProps {\n  action: (entry: IntersectionObserverEntry) => void;\n  calledOnce?: boolean;\n  threshold?: number | number[];\n  root?: Document | Element | null;\n  rootMargin?: string;\n}\n\ntype InViewProps = React.ComponentProps<'div'> & UseIntersectionObserverProps;\n\nconst InView: React.ForwardRefExoticComponent<\n  Omit<React.PropsWithChildren<InViewProps>, 'ref'> &\n    React.RefAttributes<HTMLDivElement>\n>;\n"})}),"\n",(0,r.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"import { InView } from '@devgrace/react';\n\nconst Example = () => {\n  const onAction = () => {\n    /* action */\n  }\n\n  return (\n    <div>\n      {/* ... */}\n      <InView action={onAction} calledOnce>Box1</InView>\n    </div>\n  );\n}; \n"})}),"\n",(0,r.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,r.jsxs)("div",{style:{maxWidth:"500px",height:"500px",overflow:"scroll",background:"#f1f3f5"},children:[(0,r.jsx)("div",{style:{width:"100%",height:"600px",textAlign:"center",fontSize:"2rem"},children:"Please scroll down."}),(0,r.jsx)(c.df,{style:{width:"100%",height:"300px",background:"#c0392B",color:"white",textAlign:"center",fontSize:"21px"},action:()=>console.log("action callback(1)"),calledOnce:!0,children:(0,r.jsxs)("div",{children:[(0,r.jsx)("p",{children:"Box1"}),(0,r.jsx)("p",{children:"Check the console in your browser's developer tools."}),(0,r.jsx)("p",{children:"The action callback function is called only the first time."}),(0,r.jsx)("p",{children:"calledOnce: true"})]})}),(0,r.jsx)("div",{style:{width:"100%",height:"100px"}}),(0,r.jsx)(c.df,{style:{width:"100%",height:"300px",background:"#89a5ea",color:"white",textAlign:"center",fontSize:"21px"},action:()=>console.log("action callback(2)"),children:(0,r.jsxs)("div",{children:[(0,r.jsx)("p",{children:"Box2"}),(0,r.jsx)("p",{children:"Check the console in your browser's developer tools."}),(0,r.jsx)("p",{children:"The action callback function is called multiple times."}),(0,r.jsx)("p",{children:"calledOnce: false"})]})}),(0,r.jsx)("div",{style:{width:"100%",height:"600px",textAlign:"center"}})]})]})}function f(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},2590:(e,n,t)=>{t.d(n,{AB:()=>s,D9:()=>$,df:()=>L,iP:()=>Y,nA:()=>N,t$:()=>U,uM:()=>T,wY:()=>W,yU:()=>H});var r=t(5735),o=t(4614);t(3133);"function"==typeof SuppressedError&&SuppressedError;const c=()=>{},i=e=>{const n=(0,o.useRef)(e);return(0,o.useEffect)((()=>{n.current=e}),[e]),(0,o.useCallback)(((...e)=>n.current(1===e.length?e[0]:e)),[])},s=({children:e})=>{const n=Math.random()<.5?0:1,t=o.Children.toArray(e);let r=0,c=0;if(2!==t.length)return null;for(const o of t){if(![s.CaseA,s.CaseB].includes(o.type))return null;o.type===s.CaseA?r+=1:c+=1}return r>=2||c>=2?null:n?t[0]:t[1]};s.CaseA=({children:e,onAction:n})=>{const t=i(n||c);return(0,o.useEffect)((()=>{t()}),[t]),(0,r.jsx)(o.Fragment,{children:e})},s.CaseB=({children:e,onAction:n})=>{const t=i(n||c);return(0,o.useEffect)((()=>{t()}),[t]),(0,r.jsx)(o.Fragment,{children:e})};var l="object"==typeof global&&global&&global.Object===Object&&global,a="object"==typeof self&&self&&self.Object===Object&&self,u=l||a||Function("return this")(),d=u.Symbol,f=Object.prototype,p=f.hasOwnProperty,h=f.toString,v=d?d.toStringTag:void 0,g=Object.prototype.toString,m="[object Null]",x="[object Undefined]",b=d?d.toStringTag:void 0;var w="[object Symbol]",y=/\s/,j=/^\s+/;function O(e){var n=typeof e;return null!=e&&("object"==n||"function"==n)}var E=NaN,I=/^[-+]0x[0-9a-f]+$/i,k=/^0b[01]+$/i,C=/^0o[0-7]+$/i,M=parseInt;function A(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return null!=e&&"object"==typeof e}(e)&&function(e){return null==e?void 0===e?x:m:b&&b in Object(e)?function(e){var n=p.call(e,v),t=e[v];try{e[v]=void 0;var r=!0}catch(e){}var o=h.call(e);return r&&(n?e[v]=t:delete e[v]),o}(e):function(e){return g.call(e)}(e)}(e)==w}(e))return E;if(O(e)){var n="function"==typeof e.valueOf?e.valueOf():e;e=O(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=function(e){return e?e.slice(0,function(e){for(var n=e.length;n--&&y.test(e.charAt(n)););return n}(e)+1).replace(j,""):e}(e);var t=k.test(e);return t||C.test(e)?M(e.slice(2),t?2:8):I.test(e)?E:+e}var P=function(){return u.Date.now()},S=Math.max,R=Math.min;const V=(e,n,t={})=>{const r=(0,o.useMemo)((()=>function(e,n,t){var r,o,c,i,s,l,a=0,u=!1,d=!1,f=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function p(n){var t=r,c=o;return r=o=void 0,a=n,i=e.apply(c,t)}function h(e){var t=e-l;return void 0===l||t>=n||t<0||d&&e-a>=c}function v(){var e=P();if(h(e))return g(e);s=setTimeout(v,function(e){var t=n-(e-l);return d?R(t,c-(e-a)):t}(e))}function g(e){return s=void 0,f&&r?p(e):(r=o=void 0,i)}function m(){var e=P(),t=h(e);if(r=arguments,o=this,l=e,t){if(void 0===s)return function(e){return a=e,s=setTimeout(v,n),u?p(e):i}(l);if(d)return clearTimeout(s),s=setTimeout(v,n),p(l)}return void 0===s&&(s=setTimeout(v,n)),i}return n=A(n)||0,O(t)&&(u=!!t.leading,c=(d="maxWait"in t)?S(A(t.maxWait)||0,n):c,f="trailing"in t?!!t.trailing:f),m.cancel=function(){void 0!==s&&clearTimeout(s),a=0,r=l=o=s=void 0},m.flush=function(){return void 0===s?i:g(P())},m}(e,n,t)),[e,n,t]);return(e=>{const n=(0,o.useRef)(e);(0,o.useEffect)((()=>{n.current=e}),[e]),(0,o.useEffect)((()=>()=>n.current()),[])})((()=>r.cancel())),r},T=({children:e,capture:n,wait:t,options:r})=>{const c=o.Children.only(e),i=V(((...e)=>{const t=null==c?void 0:c.props;if(t)return"function"==typeof t[n]?t[n](...e):void 0}),t,r);return(0,o.cloneElement)(c,{[n]:i})};function z(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)n.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(t[r[o]]=e[r[o]])}return t}"function"==typeof SuppressedError&&SuppressedError;const B=({action:e,calledOnce:n=!1,root:t=null,threshold:r=0,rootMargin:c="0px 0px 0px 0px"})=>{const s=(0,o.useRef)(null),l=i(e),a=(0,o.useCallback)((([e],t)=>{if(e&&e.isIntersecting){const r=e.target;l&&l(e),n&&t.unobserve(r)}}),[l,n]);return(0,o.useEffect)((()=>{const e=s.current;if("undefined"==typeof IntersectionObserver)return;if(!e)return;const n=new IntersectionObserver(a,{root:t,rootMargin:c,threshold:r});return n.observe(e),()=>{n.unobserve(e)}}),[t,r,c,a]),s},D=(...e)=>(0,o.useCallback)((n=>{e.forEach((e=>{"function"==typeof e?e(n):null!=e&&(e.current=n)}))}),[...e]),L=(0,o.forwardRef)(((e,n)=>{const{action:t,calledOnce:o,threshold:c,root:i,rootMargin:s}=e,l=z(e,["action","calledOnce","threshold","root","rootMargin"]),a=B({action:t,calledOnce:o,threshold:c,root:i,rootMargin:s});return(0,r.jsx)("div",Object.assign({ref:D(n,a)},l,{children:e.children}))})),W=(0,o.forwardRef)(((e,n)=>{var{src:t,style:c,threshold:i,root:s,rootMargin:l}=e,a=z(e,["src","style","threshold","root","rootMargin"]);const u=B({action:e=>{e.target.src=t},calledOnce:!0,threshold:i,root:s,rootMargin:l}),d=(0,o.useMemo)((()=>Object.assign({display:"inline-block"},c)),[c]);return(0,r.jsx)("img",Object.assign({},a,{ref:D(n,u),style:d}))})),F="undefined"!=typeof window?o.useLayoutEffect:o.useEffect;(0,o.createContext)({parentPortalElement:null});const N=({children:e,condition:n})=>(e=>"function"==typeof e?e():e)(n)?(0,r.jsx)(o.Fragment,{children:e}):null,U=e=>{const n=(0,o.useRef)(null),t=i(e);return(0,o.useEffect)((()=>{const e=(()=>{if("undefined"==typeof window&&"undefined"!=typeof global)return!1;const e=window.navigator.userAgent;return/Android|webOS|iPhone|iPad|iPod|Windows Phone|BlackBerry|IEMobile|Opera Mini/i.test(e)})()?"touchstart":"mousedown",r=e=>{const r=n.current;r&&!r.contains(e.target)&&t(r)};return document.addEventListener(e,r),()=>{document.removeEventListener(e,r)}}),[t]),{ref:n}},$=e=>{const n=(0,o.useRef)(e);return(0,o.useEffect)((()=>{n.current=e}),[e]),n.current},H=e=>{const[n,t]=(0,o.useState)({bottom:0,height:0,left:0,right:0,top:0,width:0,x:0,y:0}),r=(0,o.useRef)(null),c=i(e),s=(0,o.useCallback)((([e])=>{e&&(c(e),t(e.contentRect))}),[c]);return(0,o.useEffect)((()=>{const e=r.current;if("undefined"==typeof ResizeObserver)return;if(!e)return;const n=new ResizeObserver(s);return n.observe(e),()=>{n.unobserve(e)}}),[s]),{ref:r,contentRect:n}},Y=(e={})=>{const{isDebounce:n=!1,wait:t=300}=e,[r,c]=(0,o.useState)({width:null,height:null}),i=(0,o.useCallback)((()=>{c({width:window.innerWidth,height:window.innerHeight})}),[]),s=V(i,t),l=(0,o.useMemo)((()=>n?s:i),[i,n,s]);return F((()=>(i(),window.addEventListener("resize",l),()=>{window.removeEventListener("resize",l)})),[]),r}},289:(e,n,t)=>{t.d(n,{Z:()=>s,a:()=>i});var r=t(4614);const o={},c=r.createContext(o);function i(e){const n=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(c.Provider,{value:n},e.children)}}}]);