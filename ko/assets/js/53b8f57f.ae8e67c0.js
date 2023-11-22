"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9485],{5934:(e,n,t)=>{t.r(n),t.d(n,{DebounceExample:()=>h,DefaultExample:()=>f,assets:()=>l,contentTitle:()=>u,default:()=>b,frontMatter:()=>s,metadata:()=>a,toc:()=>d});var r=t(5735),o=t(4474),i=t(2590),c=t(4614);const s={},u="useWindowSize",a={id:"react/hooks/useWindowSize",title:"useWindowSize",description:"\ud604\uc7ac \ube0c\ub77c\uc6b0\uc800 \ucc3d\uc758 \ub108\ube44\uc640 \ub192\uc774 \uc815\ubcf4\ub97c \ucd94\uc801\ud558\uace0, \ubc18\ud658\ud558\ub294 \ucee4\uc2a4\ud140 \ud6c5\uc785\ub2c8\ub2e4. \ub610\ud55c, \ubd88 \ud544\uc694\ud55c \ud638\ucd9c\uc744 \ubc29\uc9c0\ud558\uae30\uc704\ud55c debounce \uae30\ub2a5\uc744 \uc81c\uacf5\ud569\ub2c8\ub2e4.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/react/hooks/useWindowSize.mdx",sourceDirName:"react/hooks",slug:"/react/hooks/useWindowSize",permalink:"/devgrace/ko/docs/react/hooks/useWindowSize",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"useVisibilityChange",permalink:"/devgrace/ko/docs/react/hooks/useVisibilityChange"},next:{title:"abRandom",permalink:"/devgrace/ko/docs/utils/common/abRandom"}},l={},d=[{value:"Interface",id:"interface",level:2},{value:"Usage",id:"usage",level:2},{value:"Default",id:"default",level:3},{value:"Debounce",id:"debounce",level:3}],f=()=>{const e={br:"br",div:"div",...(0,o.ah)()},n=(0,i.iP)(),t=(0,c.useMemo)((()=>({width:"100%",background:"#439966",fontSize:"2rem",color:"#fff"})),[]);return(0,r.jsxs)(e.div,{style:t,children:["\ube0c\ub77c\uc6b0\uc800 \ud06c\uae30\ub97c \uc904\uc5ec\ubcf4\uc138\uc694. ",(0,r.jsx)(e.br,{}),"width: ",n.width,"px ",(0,r.jsx)(e.br,{}),"height: ",n.height,"px"]})},h=()=>{const e={br:"br",div:"div",...(0,o.ah)()},n=(0,i.iP)({isDebounce:!0,wait:300}),t=(0,c.useMemo)((()=>({width:"100%",background:"#0067A3",fontSize:"2rem",color:"#fff"})),[]);return(0,r.jsxs)(e.div,{style:t,children:["\ube0c\ub77c\uc6b0\uc800 \ud06c\uae30\ub97c \uc904\uc5ec\ubcf4\uc138\uc694. ",(0,r.jsx)(e.br,{}),"width: ",n.width,"px ",(0,r.jsx)(e.br,{}),"height: ",n.height,"px"]})};function p(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,o.ah)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"usewindowsize",children:"useWindowSize"}),"\n",(0,r.jsxs)(n.p,{children:["\ud604\uc7ac \ube0c\ub77c\uc6b0\uc800 \ucc3d\uc758 \ub108\ube44\uc640 \ub192\uc774 \uc815\ubcf4\ub97c \ucd94\uc801\ud558\uace0, \ubc18\ud658\ud558\ub294 \ucee4\uc2a4\ud140 \ud6c5\uc785\ub2c8\ub2e4. \ub610\ud55c, \ubd88 \ud544\uc694\ud55c \ud638\ucd9c\uc744 \ubc29\uc9c0\ud558\uae30\uc704\ud55c ",(0,r.jsx)(n.code,{children:"debounce"})," \uae30\ub2a5\uc744 \uc81c\uacf5\ud569\ub2c8\ub2e4."]}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(n.h2,{id:"interface",children:"Interface"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"interface Size {\n  width: number | null;\n  height: number | null;\n}\n\ninterface useWindowSizeProps {\n  isDebounce?: boolean; // debounce options, default: false\n  wait?: number; // debounce delay time, default: 300\n}\n\nconst useWindowSize: (options?: useWindowSizeProps) => Size\n"})}),"\n",(0,r.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsx)(n.h3,{id:"default",children:"Default"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"import { useWindowSize } from '@devgrace/react';\n\nconst Example = () => {\n  const windowSize = useWindowSize();\n  const boxStyle = useMemo(() => {\n    return {\n      width: '100%', \n      background: '#439966', \n      fontSize: '2rem',\n      color: '#fff',\n    }\n  }, []);\n\n  return (\n    <div style={boxStyle}>\n      \ube0c\ub77c\uc6b0\uc800 \ud06c\uae30\ub97c \uc904\uc5ec\ubcf4\uc138\uc694. <br />\n      width: {windowSize.width}px <br />\n      height: {windowSize.height}px\n    </div>\n  );\n};\n"})}),"\n","\n",(0,r.jsx)(f,{}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(n.h3,{id:"debounce",children:"Debounce"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"import { useWindowSize } from '@devgrace/react';\n\nconst DebounceExample = () => {\n  const windowSize = useWindowSize({ isDebounce: true, wait: 300 });\n  const boxStyle = useMemo(() => {\n    return {\n      width: '100%', \n      background: '#0067A3', \n      fontSize: '2rem',\n      color: '#fff',\n    }\n  }, []);\n\n  return (\n    <div style={boxStyle}>\n      \ube0c\ub77c\uc6b0\uc800 \ud06c\uae30\ub97c \uc904\uc5ec\ubcf4\uc138\uc694. <br />\n      width: {windowSize.width}px <br />\n      height: {windowSize.height}px\n    </div>\n  );\n};\n"})}),"\n","\n",(0,r.jsx)(h,{}),"\n",(0,r.jsx)("br",{})]})}function b(e={}){const{wrapper:n}={...(0,o.ah)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},4474:(e,n,t)=>{t.d(n,{ah:()=>a});var r=t(4614);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=r.createContext({}),a=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},l={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),f=a(t),h=o,p=f["".concat(u,".").concat(h)]||f[h]||l[h]||i;return t?r.createElement(p,c(c({ref:n},d),{},{components:t})):r.createElement(p,c({ref:n},d))}));d.displayName="MDXCreateElement"},2590:(e,n,t)=>{t.d(n,{AB:()=>i,D9:()=>U,df:()=>I,iP:()=>V,t$:()=>L,uM:()=>W,wY:()=>B,yU:()=>$});var r=t(5735),o=t(4614);t(3133);"function"==typeof SuppressedError&&SuppressedError;const i=({children:e})=>{const n=Math.random()<.5?0:1,t=o.Children.toArray(e);let r=0,c=0;if(2!==t.length)return null;for(const o of t){if(![i.CaseA,i.CaseB].includes(o.type))return null;o.type===i.CaseA?r+=1:c+=1}return r>=2||c>=2?null:n?t[0]:t[1]};i.CaseA=({children:e})=>(0,r.jsx)(o.Fragment,{children:e}),i.CaseB=({children:e})=>(0,r.jsx)(o.Fragment,{children:e});var c="object"==typeof global&&global&&global.Object===Object&&global,s="object"==typeof self&&self&&self.Object===Object&&self,u=c||s||Function("return this")(),a=u.Symbol,l=Object.prototype,d=l.hasOwnProperty,f=l.toString,h=a?a.toStringTag:void 0,p=Object.prototype.toString,b="[object Null]",g="[object Undefined]",v=a?a.toStringTag:void 0;var w="[object Symbol]",m=/\s/,y=/^\s+/;function x(e){var n=typeof e;return null!=e&&("object"==n||"function"==n)}var j=NaN,O=/^[-+]0x[0-9a-f]+$/i,S=/^0b[01]+$/i,E=/^0o[0-7]+$/i,z=parseInt;function k(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return null!=e&&"object"==typeof e}(e)&&function(e){return null==e?void 0===e?g:b:v&&v in Object(e)?function(e){var n=d.call(e,h),t=e[h];try{e[h]=void 0;var r=!0}catch(e){}var o=f.call(e);return r&&(n?e[h]=t:delete e[h]),o}(e):function(e){return p.call(e)}(e)}(e)==w}(e))return j;if(x(e)){var n="function"==typeof e.valueOf?e.valueOf():e;e=x(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=function(e){return e?e.slice(0,function(e){for(var n=e.length;n--&&m.test(e.charAt(n)););return n}(e)+1).replace(y,""):e}(e);var t=S.test(e);return t||E.test(e)?z(e.slice(2),t?2:8):O.test(e)?j:+e}var P=function(){return u.Date.now()},M=Math.max,C=Math.min;const D=(e,n,t={})=>{const r=(0,o.useMemo)((()=>function(e,n,t){var r,o,i,c,s,u,a=0,l=!1,d=!1,f=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function h(n){var t=r,i=o;return r=o=void 0,a=n,c=e.apply(i,t)}function p(e){var t=e-u;return void 0===u||t>=n||t<0||d&&e-a>=i}function b(){var e=P();if(p(e))return g(e);s=setTimeout(b,function(e){var t=n-(e-u);return d?C(t,i-(e-a)):t}(e))}function g(e){return s=void 0,f&&r?h(e):(r=o=void 0,c)}function v(){var e=P(),t=p(e);if(r=arguments,o=this,u=e,t){if(void 0===s)return function(e){return a=e,s=setTimeout(b,n),l?h(e):c}(u);if(d)return clearTimeout(s),s=setTimeout(b,n),h(u)}return void 0===s&&(s=setTimeout(b,n)),c}return n=k(n)||0,x(t)&&(l=!!t.leading,i=(d="maxWait"in t)?M(k(t.maxWait)||0,n):i,f="trailing"in t?!!t.trailing:f),v.cancel=function(){void 0!==s&&clearTimeout(s),a=0,r=u=o=s=void 0},v.flush=function(){return void 0===s?c:g(P())},v}(e,n,t)),[e,n,t]);return(e=>{const n=(0,o.useRef)(e);(0,o.useEffect)((()=>{n.current=e}),[e]),(0,o.useEffect)((()=>()=>n.current()),[])})((()=>r.cancel())),r},W=({children:e,capture:n,wait:t,options:r})=>{const i=o.Children.only(e),c=D(((...e)=>{const t=null==i?void 0:i.props;if(t)return"function"==typeof t[n]?t[n](...e):void 0}),t,r);return(0,o.cloneElement)(i,{[n]:c})};function R(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)n.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(t[r[o]]=e[r[o]])}return t}"function"==typeof SuppressedError&&SuppressedError;const T=e=>{const n=(0,o.useRef)(e);return(0,o.useEffect)((()=>{n.current=e}),[e]),(0,o.useCallback)(((...e)=>n.current(1===e.length?e[0]:e)),[])},A=({action:e,calledOnce:n=!1,root:t=null,threshold:r=0,rootMargin:i="0px 0px 0px 0px"})=>{const c=(0,o.useRef)(null),s=T(e),u=(0,o.useCallback)((([e],t)=>{if(e&&e.isIntersecting){const r=e.target;s&&s(e),n&&t.unobserve(r)}}),[s,n]);return(0,o.useEffect)((()=>{const e=c.current;if("undefined"==typeof IntersectionObserver)return;if(!e)return;const n=new IntersectionObserver(u,{root:t,rootMargin:i,threshold:r});return n.observe(e),()=>{n.unobserve(e)}}),[t,r,i,u]),c},N=(...e)=>(0,o.useCallback)((n=>{e.forEach((e=>{"function"==typeof e?e(n):null!=e&&(e.current=n)}))}),[...e]),I=(0,o.forwardRef)(((e,n)=>{const{action:t,calledOnce:o,threshold:i,root:c,rootMargin:s}=e,u=R(e,["action","calledOnce","threshold","root","rootMargin"]),a=A({action:t,calledOnce:o,threshold:i,root:c,rootMargin:s});return(0,r.jsx)("div",Object.assign({ref:N(n,a)},u,{children:e.children}))})),B=(0,o.forwardRef)(((e,n)=>{var{src:t,style:i,threshold:c,root:s,rootMargin:u}=e,a=R(e,["src","style","threshold","root","rootMargin"]);const l=A({action:e=>{e.target.src=t},calledOnce:!0,threshold:c,root:s,rootMargin:u}),d=(0,o.useMemo)((()=>Object.assign({display:"inline-block"},i)),[i]);return(0,r.jsx)("img",Object.assign({},a,{ref:N(n,l),style:d}))})),F="undefined"!=typeof window?o.useLayoutEffect:o.useEffect;(0,o.createContext)({parentPortalElement:null});const L=e=>{const n=(0,o.useRef)(null),t=T(e);return(0,o.useEffect)((()=>{const e=(()=>{if("undefined"==typeof window&&"undefined"!=typeof global)return!1;const e=window.navigator.userAgent;return/Android|webOS|iPhone|iPad|iPod|Windows Phone|BlackBerry|IEMobile|Opera Mini/i.test(e)})()?"touchstart":"mousedown",r=e=>{const r=n.current;r&&!r.contains(e.target)&&t(r)};return document.addEventListener(e,r),()=>{document.removeEventListener(e,r)}}),[t]),{ref:n}},U=e=>{const n=(0,o.useRef)(e);return(0,o.useEffect)((()=>{n.current=e}),[e]),n.current},$=e=>{const[n,t]=(0,o.useState)({bottom:0,height:0,left:0,right:0,top:0,width:0,x:0,y:0}),r=(0,o.useRef)(null),i=T(e),c=(0,o.useCallback)((([e])=>{e&&(i(e),t(e.contentRect))}),[i]);return(0,o.useEffect)((()=>{const e=r.current;if("undefined"==typeof ResizeObserver)return;if(!e)return;const n=new ResizeObserver(c);return n.observe(e),()=>{n.unobserve(e)}}),[c]),{ref:r,contentRect:n}},V=(e={})=>{const{isDebounce:n=!1,wait:t=300}=e,[r,i]=(0,o.useState)({width:null,height:null}),c=(0,o.useCallback)((()=>{i({width:window.innerWidth,height:window.innerHeight})}),[]),s=D(c,t),u=(0,o.useMemo)((()=>n?s:c),[c,n,s]);return F((()=>(c(),window.addEventListener("resize",u),()=>{window.removeEventListener("resize",u)})),[]),r}}}]);