"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1089],{3433:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>f,frontMatter:()=>i,metadata:()=>a,toc:()=>u});var r=t(5735),o=t(289),c=t(2590);const i={},s="InView",a={id:"react/components/InView",title:"InView",description:"Viewport\uc5d0 \ub178\ucd9c\ub420 \ub54c props\ub85c \ub118\uaca8\uc8fc\ub294 action \ucf5c\ubc31 \ud568\uc218\ub97c \ud638\ucd9c\ud558\ub294 \ucef4\ud3ec\ub10c\ud2b8\uc785\ub2c8\ub2e4.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/react/components/InView.mdx",sourceDirName:"react/components",slug:"/react/components/InView",permalink:"/devgrace/ko/docs/react/components/InView",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"DebounceWrapper",permalink:"/devgrace/ko/docs/react/components/DebounceWrapper"},next:{title:"LazyImage",permalink:"/devgrace/ko/docs/react/components/LazyImage"}},l={},u=[{value:"Interface",id:"interface",level:2},{value:"Usage",id:"usage",level:2},{value:"Example",id:"example",level:2}];function d(e){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"inview",children:"InView"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"Viewport"}),"\uc5d0 \ub178\ucd9c\ub420 \ub54c props\ub85c \ub118\uaca8\uc8fc\ub294 ",(0,r.jsx)(n.code,{children:"action"})," \ucf5c\ubc31 \ud568\uc218\ub97c \ud638\ucd9c\ud558\ub294 \ucef4\ud3ec\ub10c\ud2b8\uc785\ub2c8\ub2e4."]}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(n.h2,{id:"interface",children:"Interface"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"interface UseIntersectionObserverProps {\n  action: (entry: IntersectionObserverEntry) => void;\n  calledOnce?: boolean;\n  threshold?: number | number[];\n  root?: Document | Element | null;\n  rootMargin?: string;\n}\n\ntype InViewProps = React.ComponentProps<'div'> & UseIntersectionObserverProps;\n\nconst InView: React.ForwardRefExoticComponent<\n  Omit<React.PropsWithChildren<InViewProps>, 'ref'> &\n    React.RefAttributes<HTMLDivElement>\n>;\n"})}),"\n",(0,r.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"import { InView } from '@devgrace/react';\n\nconst Example = () => {\n  const onAction = () => {\n    /* action */\n  }\n\n  return (\n    <div>\n      {/* ... */}\n      <InView action={onAction} calledOnce>Box1</InView>\n    </div>\n  );\n}; \n"})}),"\n",(0,r.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,r.jsxs)("div",{style:{maxWidth:"500px",height:"500px",overflow:"scroll",background:"#f1f3f5"},children:[(0,r.jsx)("div",{style:{width:"100%",height:"600px",textAlign:"center",fontSize:"2rem"},children:"\uc2a4\ud06c\ub864 \ud574\uc8fc\uc138\uc694."}),(0,r.jsx)(c.df,{style:{width:"100%",height:"300px",background:"#c0392B",color:"white",textAlign:"center",fontSize:"21px"},action:()=>console.log("action callback(1)"),calledOnce:!0,children:(0,r.jsxs)("div",{children:[(0,r.jsx)("p",{children:"Box1"}),(0,r.jsx)("p",{children:"\ube0c\ub77c\uc6b0\uc800 \uac1c\ubc1c\uc790 \ub3c4\uad6c\uc758 \ucf58\uc194\uc744 \ud655\uc778\ud574\uc8fc\uc138\uc694."}),(0,r.jsx)("p",{children:"action \ucf5c\ubc31 \ud568\uc218\uac00 \ucd5c\ucd08 1\ud68c\ub9cc \ud638\ucd9c\ub429\ub2c8\ub2e4."}),(0,r.jsx)("p",{children:"calledOnce: true"})]})}),(0,r.jsx)("div",{style:{width:"100%",height:"100px"}}),(0,r.jsx)(c.df,{style:{width:"100%",height:"300px",background:"#89a5ea",color:"white",textAlign:"center",fontSize:"21px"},action:()=>console.log("action callback(2)"),children:(0,r.jsxs)("div",{children:[(0,r.jsx)("p",{children:"Box2"}),(0,r.jsx)("p",{children:"\ube0c\ub77c\uc6b0\uc800 \uac1c\ubc1c\uc790 \ub3c4\uad6c\uc758 \ucf58\uc194\uc744 \ud655\uc778\ud574\uc8fc\uc138\uc694."}),(0,r.jsx)("p",{children:"action \ucf5c\ubc31 \ud568\uc218\uac00 \uc5ec\ub7ec \ubc88 \ud638\ucd9c\ub429\ub2c8\ub2e4."}),(0,r.jsx)("p",{children:"calledOnce: false"})]})}),(0,r.jsx)("div",{style:{width:"100%",height:"600px",textAlign:"center"}})]})]})}function f(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},2590:(e,n,t)=>{t.d(n,{AB:()=>l,D9:()=>q,ac:()=>Y,df:()=>F,iP:()=>J,nA:()=>$,t$:()=>Z,uM:()=>z,wY:()=>N,yU:()=>G});var r=t(5735),o=t(4614);t(3133);"function"==typeof SuppressedError&&SuppressedError;const c=()=>"undefined"==typeof window&&"undefined"!=typeof global,i=()=>{},s=()=>!c(),a=e=>{const n=(0,o.useRef)(e);return(0,o.useEffect)((()=>{n.current=e}),[e]),(0,o.useCallback)(((...e)=>n.current(...e)),[])},l=({children:e})=>{const n=Math.random()<.5?0:1,t=o.Children.toArray(e);let r=0,c=0;if(2!==t.length)return null;for(const o of t){if(![l.CaseA,l.CaseB].includes(o.type))return null;o.type===l.CaseA?r+=1:c+=1}return r>=2||c>=2?null:n?t[0]:t[1]};l.CaseA=({children:e,renderAction:n})=>{const t=a(n||i);return(0,o.useEffect)((()=>{t()}),[t]),(0,r.jsx)(o.Fragment,{children:e})},l.CaseB=({children:e,renderAction:n})=>{const t=a(n||i);return(0,o.useEffect)((()=>{t()}),[t]),(0,r.jsx)(o.Fragment,{children:e})};var u="object"==typeof global&&global&&global.Object===Object&&global,d="object"==typeof self&&self&&self.Object===Object&&self,f=u||d||Function("return this")(),p=f.Symbol,h=Object.prototype,v=h.hasOwnProperty,g=h.toString,m=p?p.toStringTag:void 0,x=Object.prototype.toString,b="[object Null]",w="[object Undefined]",y=p?p.toStringTag:void 0;var j="[object Symbol]",O=/\s/,E=/^\s+/;function I(e){var n=typeof e;return null!=e&&("object"==n||"function"==n)}var M=NaN,k=/^[-+]0x[0-9a-f]+$/i,C=/^0b[01]+$/i,S=/^0o[0-7]+$/i,A=parseInt;function P(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return null!=e&&"object"==typeof e}(e)&&function(e){return null==e?void 0===e?w:b:y&&y in Object(e)?function(e){var n=v.call(e,m),t=e[m];try{e[m]=void 0;var r=!0}catch(e){}var o=g.call(e);return r&&(n?e[m]=t:delete e[m]),o}(e):function(e){return x.call(e)}(e)}(e)==j}(e))return M;if(I(e)){var n="function"==typeof e.valueOf?e.valueOf():e;e=I(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=function(e){return e?e.slice(0,function(e){for(var n=e.length;n--&&O.test(e.charAt(n)););return n}(e)+1).replace(E,""):e}(e);var t=C.test(e);return t||S.test(e)?A(e.slice(2),t?2:8):k.test(e)?M:+e}var R=function(){return f.Date.now()},V=Math.max,T=Math.min;const L=(e,n,t={})=>{const r=a(e),c=(0,o.useMemo)((()=>function(e,n,t){var r,o,c,i,s,a,l=0,u=!1,d=!1,f=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function p(n){var t=r,c=o;return r=o=void 0,l=n,i=e.apply(c,t)}function h(e){var t=e-a;return void 0===a||t>=n||t<0||d&&e-l>=c}function v(){var e=R();if(h(e))return g(e);s=setTimeout(v,function(e){var t=n-(e-a);return d?T(t,c-(e-l)):t}(e))}function g(e){return s=void 0,f&&r?p(e):(r=o=void 0,i)}function m(){var e=R(),t=h(e);if(r=arguments,o=this,a=e,t){if(void 0===s)return function(e){return l=e,s=setTimeout(v,n),u?p(e):i}(a);if(d)return clearTimeout(s),s=setTimeout(v,n),p(a)}return void 0===s&&(s=setTimeout(v,n)),i}return n=P(n)||0,I(t)&&(u=!!t.leading,c=(d="maxWait"in t)?V(P(t.maxWait)||0,n):c,f="trailing"in t?!!t.trailing:f),m.cancel=function(){void 0!==s&&clearTimeout(s),l=0,r=a=o=s=void 0},m.flush=function(){return void 0===s?i:g(R())},m}(r,n,t)),[r,n,t]);return(e=>{const n=(0,o.useRef)(e);(0,o.useEffect)((()=>{n.current=e}),[e]),(0,o.useEffect)((()=>()=>n.current()),[])})((()=>c.cancel())),c},z=({children:e,capture:n,wait:t,options:r})=>{const c=o.Children.only(e),i=L(((...e)=>{const t=null==c?void 0:c.props;if(t)return"function"==typeof t[n]?t[n](...e):void 0}),t,r);return(0,o.cloneElement)(c,{[n]:i})};function B(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)n.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(t[r[o]]=e[r[o]])}return t}"function"==typeof SuppressedError&&SuppressedError;const D=({action:e,calledOnce:n=!1,root:t=null,threshold:r=0,rootMargin:c="0px 0px 0px 0px"})=>{const i=(0,o.useRef)(null),s=a(e),l=(0,o.useCallback)((([e],t)=>{if(e&&e.isIntersecting){const r=e.target;s&&s(e),n&&t.unobserve(r)}}),[s,n]);return(0,o.useEffect)((()=>{const e=i.current;if("undefined"==typeof IntersectionObserver)return;if(!e)return;const n=new IntersectionObserver(l,{root:t,rootMargin:c,threshold:r});return n.observe(e),()=>{n.unobserve(e)}}),[t,r,c,l]),i},W=(...e)=>(0,o.useCallback)((n=>{e.forEach((e=>{"function"==typeof e?e(n):null!=e&&(e.current=n)}))}),[...e]),F=(0,o.forwardRef)(((e,n)=>{const{action:t,calledOnce:o,threshold:c,root:i,rootMargin:s}=e,a=B(e,["action","calledOnce","threshold","root","rootMargin"]),l=D({action:t,calledOnce:o,threshold:c,root:i,rootMargin:s});return(0,r.jsx)("div",Object.assign({ref:W(n,l)},a,{children:e.children}))})),N=(0,o.forwardRef)(((e,n)=>{var{src:t,style:c,threshold:i,root:s,rootMargin:a}=e,l=B(e,["src","style","threshold","root","rootMargin"]);const u=D({action:e=>{e.target.src=t},calledOnce:!0,threshold:i,root:s,rootMargin:a}),d=(0,o.useMemo)((()=>Object.assign({display:"inline-block"},c)),[c]);return(0,r.jsx)("img",Object.assign({},l,{ref:W(n,u),style:d}))})),U=s()?o.useLayoutEffect:o.useEffect;(0,o.createContext)({parentPortalElement:null});const $=({children:e,condition:n})=>(e=>"function"==typeof e?e():e)(n)?(0,r.jsx)(o.Fragment,{children:e}):null,H=e=>!!s()&&window.matchMedia(e).matches,Y=e=>{const[n,t]=(0,o.useState)(H(e)),r=(0,o.useCallback)((()=>{t(H(e))}),[e]);return(0,o.useEffect)((()=>{const n=window.matchMedia(e);return n.addEventListener("change",r),()=>n.removeEventListener("change",r)}),[e,r]),{isMatch:n}},Z=e=>{const n=(0,o.useRef)(null),t=a(e);return(0,o.useEffect)((()=>{const e=(()=>{if(c())return!1;const e=window.navigator.userAgent;return/Android|webOS|iPhone|iPad|iPod|Windows Phone|BlackBerry|IEMobile|Opera Mini/i.test(e)})()?"touchstart":"mousedown",r=e=>{const r=n.current;r&&!r.contains(e.target)&&t(r)};return document.addEventListener(e,r),()=>{document.removeEventListener(e,r)}}),[t]),{ref:n}},q=e=>{const n=(0,o.useRef)(e);return(0,o.useEffect)((()=>{n.current=e}),[e]),n.current},G=e=>{const[n,t]=(0,o.useState)({bottom:0,height:0,left:0,right:0,top:0,width:0,x:0,y:0}),r=(0,o.useRef)(null),c=a(e),i=(0,o.useCallback)((([e])=>{e&&(c(e),t(e.contentRect))}),[c]);return(0,o.useEffect)((()=>{const e=r.current;if("undefined"==typeof ResizeObserver)return;if(!e)return;const n=new ResizeObserver(i);return n.observe(e),()=>{n.unobserve(e)}}),[i]),{ref:r,contentRect:n}},J=(e={})=>{const{isDebounce:n=!1,wait:t=300}=e,[r,c]=(0,o.useState)({width:null,height:null}),i=(0,o.useCallback)((()=>{c({width:window.innerWidth,height:window.innerHeight})}),[]),s=L(i,t),a=(0,o.useMemo)((()=>n?s:i),[i,n,s]);return U((()=>(i(),window.addEventListener("resize",a),()=>{window.removeEventListener("resize",a)})),[]),r}},289:(e,n,t)=>{t.d(n,{Z:()=>s,a:()=>i});var r=t(4614);const o={},c=r.createContext(o);function i(e){const n=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(c.Provider,{value:n},e.children)}}}]);