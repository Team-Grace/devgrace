"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9122],{7382:(e,t,n)=>{n.r(t),n.d(t,{Example:()=>d,assets:()=>a,contentTitle:()=>s,default:()=>p,frontMatter:()=>c,metadata:()=>u,toc:()=>l});var r=n(5735),o=n(289),i=n(2590);const c={},s="useMediaQuery",u={id:"react/hooks/useMediaQuery",title:"useMediaQuery",description:"Resize \uc2dc\uc5d0\ub3c4 \ub3d9\uc791\ud558\uba70, \ubbf8\ub514\uc5b4 \ucffc\ub9ac \ubb38\uc790\uc5f4\uc758 \ubd84\uc11d \uacb0\uacfc\ub97c \uc27d\uac8c \ud655\uc778 \ud560 \uc218 \uc788\ub294 \ucee4\uc2a4\ud140 \ud6c5\uc785\ub2c8\ub2e4.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/react/hooks/useMediaQuery.mdx",sourceDirName:"react/hooks",slug:"/react/hooks/useMediaQuery",permalink:"/devgrace/ko/docs/react/hooks/useMediaQuery",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"useIsomorphicLayoutEffect",permalink:"/devgrace/ko/docs/react/hooks/useIsomorphicLayoutEffect"},next:{title:"useMergeRefs",permalink:"/devgrace/ko/docs/react/hooks/useMergeRefs"}},a={},l=[{value:"Interface",id:"interface",level:2},{value:"Usage",id:"usage",level:2}],d=()=>{const e={div:"div",p:"p",...(0,o.a)()},{isMatch:t}=(0,i.ac)("(min-width: 768px)");return(0,r.jsxs)(e.div,{children:[(0,r.jsx)(e.p,{children:"\ube0c\ub77c\uc6b0\uc800 \ub108\ube44\ub97c \uc218\uc815\ud574\ubcf4\uc138\uc694!"}),(0,r.jsx)(e.p,{children:t?"viewport \ub108\ube44\uac00 768px \uc774\uc0c1\uc785\ub2c8\ub2e4.":"viewport \ub108\ube44\uac00 768px \ubbf8\ub9cc\uc785\ub2c8\ub2e4."})]})};function f(e){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"usemediaquery",children:"useMediaQuery"}),"\n",(0,r.jsx)(t.p,{children:"Resize \uc2dc\uc5d0\ub3c4 \ub3d9\uc791\ud558\uba70, \ubbf8\ub514\uc5b4 \ucffc\ub9ac \ubb38\uc790\uc5f4\uc758 \ubd84\uc11d \uacb0\uacfc\ub97c \uc27d\uac8c \ud655\uc778 \ud560 \uc218 \uc788\ub294 \ucee4\uc2a4\ud140 \ud6c5\uc785\ub2c8\ub2e4."}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(t.h2,{id:"interface",children:"Interface"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"const useMediaQuery: (query: string) => {\n    isMatch: boolean;\n}\n"})}),"\n",(0,r.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"import { useMediaQuery } from '@devgrace/react';\n\nconst Example = () => {\n  const { isMatch } = useMediaQuery('(min-width: 768px)');\n\n  return (\n    <div>\n      <p>\n        {isMatch\n          ? 'viewport \ub108\ube44\uac00 768px \uc774\uc0c1\uc785\ub2c8\ub2e4.'\n          : 'viewport \ub108\ube44\uac00 768px \ubbf8\ub9cc\uc785\ub2c8\ub2e4.'}\n      </p>\n    </div>\n  );\n};\n\n"})}),"\n","\n",(0,r.jsx)(d,{})]})}function p(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(f,{...e})}):f(e)}},2590:(e,t,n)=>{n.d(t,{AB:()=>a,D9:()=>Z,ac:()=>H,df:()=>D,iP:()=>J,nA:()=>$,t$:()=>Y,uM:()=>z,wY:()=>U,yU:()=>G});var r=n(5735),o=n(4614);n(3133);"function"==typeof SuppressedError&&SuppressedError;const i=()=>"undefined"==typeof window&&"undefined"!=typeof global,c=()=>{},s=()=>!i(),u=e=>{const t=(0,o.useRef)(e);return(0,o.useEffect)((()=>{t.current=e}),[e]),(0,o.useCallback)(((...e)=>t.current(1===e.length?e[0]:e)),[])},a=({children:e})=>{const t=Math.random()<.5?0:1,n=o.Children.toArray(e);let r=0,i=0;if(2!==n.length)return null;for(const o of n){if(![a.CaseA,a.CaseB].includes(o.type))return null;o.type===a.CaseA?r+=1:i+=1}return r>=2||i>=2?null:t?n[0]:n[1]};a.CaseA=({children:e,renderAction:t})=>{const n=u(t||c);return(0,o.useEffect)((()=>{n()}),[n]),(0,r.jsx)(o.Fragment,{children:e})},a.CaseB=({children:e,renderAction:t})=>{const n=u(t||c);return(0,o.useEffect)((()=>{n()}),[n]),(0,r.jsx)(o.Fragment,{children:e})};var l="object"==typeof global&&global&&global.Object===Object&&global,d="object"==typeof self&&self&&self.Object===Object&&self,f=l||d||Function("return this")(),p=f.Symbol,h=Object.prototype,v=h.hasOwnProperty,g=h.toString,y=p?p.toStringTag:void 0,m=Object.prototype.toString,b="[object Null]",x="[object Undefined]",w=p?p.toStringTag:void 0;var j="[object Symbol]",M=/\s/,E=/^\s+/;function O(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}var k=NaN,C=/^[-+]0x[0-9a-f]+$/i,S=/^0b[01]+$/i,R=/^0o[0-7]+$/i,P=parseInt;function A(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return null!=e&&"object"==typeof e}(e)&&function(e){return null==e?void 0===e?x:b:w&&w in Object(e)?function(e){var t=v.call(e,y),n=e[y];try{e[y]=void 0;var r=!0}catch(e){}var o=g.call(e);return r&&(t?e[y]=n:delete e[y]),o}(e):function(e){return m.call(e)}(e)}(e)==j}(e))return k;if(O(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=O(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=function(e){return e?e.slice(0,function(e){for(var t=e.length;t--&&M.test(e.charAt(t)););return t}(e)+1).replace(E,""):e}(e);var n=S.test(e);return n||R.test(e)?P(e.slice(2),n?2:8):C.test(e)?k:+e}var I=function(){return f.Date.now()},Q=Math.max,T=Math.min;const L=(e,t,n={})=>{const r=(0,o.useMemo)((()=>function(e,t,n){var r,o,i,c,s,u,a=0,l=!1,d=!1,f=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function p(t){var n=r,i=o;return r=o=void 0,a=t,c=e.apply(i,n)}function h(e){var n=e-u;return void 0===u||n>=t||n<0||d&&e-a>=i}function v(){var e=I();if(h(e))return g(e);s=setTimeout(v,function(e){var n=t-(e-u);return d?T(n,i-(e-a)):n}(e))}function g(e){return s=void 0,f&&r?p(e):(r=o=void 0,c)}function y(){var e=I(),n=h(e);if(r=arguments,o=this,u=e,n){if(void 0===s)return function(e){return a=e,s=setTimeout(v,t),l?p(e):c}(u);if(d)return clearTimeout(s),s=setTimeout(v,t),p(u)}return void 0===s&&(s=setTimeout(v,t)),c}return t=A(t)||0,O(n)&&(l=!!n.leading,i=(d="maxWait"in n)?Q(A(n.maxWait)||0,t):i,f="trailing"in n?!!n.trailing:f),y.cancel=function(){void 0!==s&&clearTimeout(s),a=0,r=u=o=s=void 0},y.flush=function(){return void 0===s?c:g(I())},y}(e,t,n)),[e,t,n]);return(e=>{const t=(0,o.useRef)(e);(0,o.useEffect)((()=>{t.current=e}),[e]),(0,o.useEffect)((()=>()=>t.current()),[])})((()=>r.cancel())),r},z=({children:e,capture:t,wait:n,options:r})=>{const i=o.Children.only(e),c=L(((...e)=>{const n=null==i?void 0:i.props;if(n)return"function"==typeof n[t]?n[t](...e):void 0}),n,r);return(0,o.cloneElement)(i,{[t]:c})};function N(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}"function"==typeof SuppressedError&&SuppressedError;const B=({action:e,calledOnce:t=!1,root:n=null,threshold:r=0,rootMargin:i="0px 0px 0px 0px"})=>{const c=(0,o.useRef)(null),s=u(e),a=(0,o.useCallback)((([e],n)=>{if(e&&e.isIntersecting){const r=e.target;s&&s(e),t&&n.unobserve(r)}}),[s,t]);return(0,o.useEffect)((()=>{const e=c.current;if("undefined"==typeof IntersectionObserver)return;if(!e)return;const t=new IntersectionObserver(a,{root:n,rootMargin:i,threshold:r});return t.observe(e),()=>{t.unobserve(e)}}),[n,r,i,a]),c},F=(...e)=>(0,o.useCallback)((t=>{e.forEach((e=>{"function"==typeof e?e(t):null!=e&&(e.current=t)}))}),[...e]),D=(0,o.forwardRef)(((e,t)=>{const{action:n,calledOnce:o,threshold:i,root:c,rootMargin:s}=e,u=N(e,["action","calledOnce","threshold","root","rootMargin"]),a=B({action:n,calledOnce:o,threshold:i,root:c,rootMargin:s});return(0,r.jsx)("div",Object.assign({ref:F(t,a)},u,{children:e.children}))})),U=(0,o.forwardRef)(((e,t)=>{var{src:n,style:i,threshold:c,root:s,rootMargin:u}=e,a=N(e,["src","style","threshold","root","rootMargin"]);const l=B({action:e=>{e.target.src=n},calledOnce:!0,threshold:c,root:s,rootMargin:u}),d=(0,o.useMemo)((()=>Object.assign({display:"inline-block"},i)),[i]);return(0,r.jsx)("img",Object.assign({},a,{ref:F(t,l),style:d}))})),W=s()?o.useLayoutEffect:o.useEffect;(0,o.createContext)({parentPortalElement:null});const $=({children:e,condition:t})=>(e=>"function"==typeof e?e():e)(t)?(0,r.jsx)(o.Fragment,{children:e}):null,q=e=>!!s()&&window.matchMedia(e).matches,H=e=>{const[t,n]=(0,o.useState)(q(e)),r=(0,o.useCallback)((()=>{n(q(e))}),[e]);return(0,o.useEffect)((()=>{const t=window.matchMedia(e);return t.addEventListener("change",r),()=>t.removeEventListener("change",r)}),[e,r]),{isMatch:t}},Y=e=>{const t=(0,o.useRef)(null),n=u(e);return(0,o.useEffect)((()=>{const e=(()=>{if(i())return!1;const e=window.navigator.userAgent;return/Android|webOS|iPhone|iPad|iPod|Windows Phone|BlackBerry|IEMobile|Opera Mini/i.test(e)})()?"touchstart":"mousedown",r=e=>{const r=t.current;r&&!r.contains(e.target)&&n(r)};return document.addEventListener(e,r),()=>{document.removeEventListener(e,r)}}),[n]),{ref:t}},Z=e=>{const t=(0,o.useRef)(e);return(0,o.useEffect)((()=>{t.current=e}),[e]),t.current},G=e=>{const[t,n]=(0,o.useState)({bottom:0,height:0,left:0,right:0,top:0,width:0,x:0,y:0}),r=(0,o.useRef)(null),i=u(e),c=(0,o.useCallback)((([e])=>{e&&(i(e),n(e.contentRect))}),[i]);return(0,o.useEffect)((()=>{const e=r.current;if("undefined"==typeof ResizeObserver)return;if(!e)return;const t=new ResizeObserver(c);return t.observe(e),()=>{t.unobserve(e)}}),[c]),{ref:r,contentRect:t}},J=(e={})=>{const{isDebounce:t=!1,wait:n=300}=e,[r,i]=(0,o.useState)({width:null,height:null}),c=(0,o.useCallback)((()=>{i({width:window.innerWidth,height:window.innerHeight})}),[]),s=L(c,n),u=(0,o.useMemo)((()=>t?s:c),[c,t,s]);return W((()=>(c(),window.addEventListener("resize",u),()=>{window.removeEventListener("resize",u)})),[]),r}},289:(e,t,n)=>{n.d(t,{Z:()=>s,a:()=>c});var r=n(4614);const o={},i=r.createContext(o);function c(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);