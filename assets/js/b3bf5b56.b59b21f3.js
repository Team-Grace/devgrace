"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1175],{6627:(e,n,t)=>{t.r(n),t.d(n,{DebounceExample:()=>h,DefaultExample:()=>f,assets:()=>d,contentTitle:()=>u,default:()=>b,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var r=t(5735),o=t(289),i=t(2590),c=t(4614);const s={},u="useWindowSize",a={id:"react/hooks/useWindowSize",title:"useWindowSize",description:"A custom hook that tracks and returns the width and height information of the current browser window. It also provides a debounce function to prevent unnecessary calls.",source:"@site/docs/react/hooks/useWindowSize.mdx",sourceDirName:"react/hooks",slug:"/react/hooks/useWindowSize",permalink:"/devgrace/docs/react/hooks/useWindowSize",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"useWindowScrollTo",permalink:"/devgrace/docs/react/hooks/useWindowScrollTo"},next:{title:"abRandom",permalink:"/devgrace/docs/utils/common/abRandom"}},d={},l=[{value:"Interface",id:"interface",level:2},{value:"Usage",id:"usage",level:2},{value:"Default",id:"default",level:3},{value:"Debounce",id:"debounce",level:3}],f=()=>{const e={br:"br",div:"div",...(0,o.a)()},n=(0,i.iP)(),t=(0,c.useMemo)((()=>({width:"100%",background:"#439966",fontSize:"2rem",color:"#fff"})),[]);return(0,r.jsxs)(e.div,{style:t,children:["Try reducing the width of your browser. ",(0,r.jsx)(e.br,{}),"width: ",n.width,"px ",(0,r.jsx)(e.br,{}),"height: ",n.height,"px"]})},h=()=>{const e={br:"br",div:"div",...(0,o.a)()},n=(0,i.iP)({isDebounce:!0,wait:300}),t=(0,c.useMemo)((()=>({width:"100%",background:"#0067A3",fontSize:"2rem",color:"#fff"})),[]);return(0,r.jsxs)(e.div,{style:t,children:["Try reducing the width of your browser. ",(0,r.jsx)(e.br,{}),"width: ",n.width,"px ",(0,r.jsx)(e.br,{}),"height: ",n.height,"px"]})};function p(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"usewindowsize",children:"useWindowSize"}),"\n",(0,r.jsxs)(n.p,{children:["A custom hook that tracks and returns the width and height information of the current browser window. It also provides a ",(0,r.jsx)(n.code,{children:"debounce"})," function to prevent unnecessary calls."]}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(n.h2,{id:"interface",children:"Interface"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"interface Size {\n  width: number | null;\n  height: number | null;\n}\n\ninterface useWindowSizeProps {\n  isDebounce?: boolean; // debounce options, default: false\n  wait?: number; // debounce delay time, default: 300\n}\n\nconst useWindowSize: (options?: useWindowSizeProps) => Size\n"})}),"\n",(0,r.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsx)(n.h3,{id:"default",children:"Default"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"import { useWindowSize } from '@devgrace/react';\n\nconst Example = () => {\n  const windowSize = useWindowSize();\n  const boxStyle = useMemo(() => {\n    return {\n      width: '100%', \n      background: '#439966', \n      fontSize: '2rem',\n      color: '#fff',\n    }\n  }, []);\n\n  return (\n    <div style={boxStyle}>\n      Try reducing the width of your browser. <br />\n      width: {windowSize.width}px <br />\n      height: {windowSize.height}px\n    </div>\n  );\n};\n"})}),"\n","\n",(0,r.jsx)(f,{}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(n.h3,{id:"debounce",children:"Debounce"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"import { useWindowSize } from '@devgrace/react';\n\nconst DebounceExample = () => {\n  const windowSize = useWindowSize({ isDebounce: true, wait: 300 });\n  const boxStyle = useMemo(() => {\n    return {\n      width: '100%', \n      background: '#0067A3', \n      fontSize: '2rem',\n      color: '#fff',\n    }\n  }, []);\n\n  return (\n    <div style={boxStyle}>\n      Try reducing the width of your browser. <br />\n      width: {windowSize.width}px <br />\n      height: {windowSize.height}px\n    </div>\n  );\n};\n"})}),"\n","\n",(0,r.jsx)(h,{}),"\n",(0,r.jsx)("br",{})]})}function b(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},2590:(e,n,t)=>{t.d(n,{AB:()=>a,D9:()=>G,ac:()=>Z,df:()=>F,iP:()=>K,nA:()=>H,t$:()=>q,uM:()=>I,wY:()=>U,yU:()=>J});var r=t(5735),o=t(4614);t(3133);"function"==typeof SuppressedError&&SuppressedError;const i=()=>"undefined"==typeof window&&"undefined"!=typeof global,c=()=>{},s=()=>!i(),u=e=>{const n=(0,o.useRef)(e);return(0,o.useEffect)((()=>{n.current=e}),[e]),(0,o.useCallback)(((...e)=>n.current(...e)),[])},a=({children:e})=>{const n=Math.random()<.5?0:1,t=o.Children.toArray(e);let r=0,i=0;if(2!==t.length)return null;for(const o of t){if(![a.CaseA,a.CaseB].includes(o.type))return null;o.type===a.CaseA?r+=1:i+=1}return r>=2||i>=2?null:n?t[0]:t[1]};a.CaseA=({children:e,renderAction:n})=>{const t=u(n||c);return(0,o.useEffect)((()=>{t()}),[t]),(0,r.jsx)(o.Fragment,{children:e})},a.CaseB=({children:e,renderAction:n})=>{const t=u(n||c);return(0,o.useEffect)((()=>{t()}),[t]),(0,r.jsx)(o.Fragment,{children:e})};var d="object"==typeof global&&global&&global.Object===Object&&global,l="object"==typeof self&&self&&self.Object===Object&&self,f=d||l||Function("return this")(),h=f.Symbol,p=Object.prototype,b=p.hasOwnProperty,w=p.toString,v=h?h.toStringTag:void 0,g=Object.prototype.toString,m="[object Null]",x="[object Undefined]",y=h?h.toStringTag:void 0;var j="[object Symbol]",S=/\s/,E=/^\s+/;function O(e){var n=typeof e;return null!=e&&("object"==n||"function"==n)}var z=NaN,k=/^[-+]0x[0-9a-f]+$/i,M=/^0b[01]+$/i,W=/^0o[0-7]+$/i,C=parseInt;function P(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return null!=e&&"object"==typeof e}(e)&&function(e){return null==e?void 0===e?x:m:y&&y in Object(e)?function(e){var n=b.call(e,v),t=e[v];try{e[v]=void 0;var r=!0}catch(e){}var o=w.call(e);return r&&(n?e[v]=t:delete e[v]),o}(e):function(e){return g.call(e)}(e)}(e)==j}(e))return z;if(O(e)){var n="function"==typeof e.valueOf?e.valueOf():e;e=O(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=function(e){return e?e.slice(0,function(e){for(var n=e.length;n--&&S.test(e.charAt(n)););return n}(e)+1).replace(E,""):e}(e);var t=M.test(e);return t||W.test(e)?C(e.slice(2),t?2:8):k.test(e)?z:+e}var T=function(){return f.Date.now()},A=Math.max,D=Math.min;const R=(e,n,t={})=>{const r=u(e),i=(0,o.useMemo)((()=>function(e,n,t){var r,o,i,c,s,u,a=0,d=!1,l=!1,f=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function h(n){var t=r,i=o;return r=o=void 0,a=n,c=e.apply(i,t)}function p(e){var t=e-u;return void 0===u||t>=n||t<0||l&&e-a>=i}function b(){var e=T();if(p(e))return w(e);s=setTimeout(b,function(e){var t=n-(e-u);return l?D(t,i-(e-a)):t}(e))}function w(e){return s=void 0,f&&r?h(e):(r=o=void 0,c)}function v(){var e=T(),t=p(e);if(r=arguments,o=this,u=e,t){if(void 0===s)return function(e){return a=e,s=setTimeout(b,n),d?h(e):c}(u);if(l)return clearTimeout(s),s=setTimeout(b,n),h(u)}return void 0===s&&(s=setTimeout(b,n)),c}return n=P(n)||0,O(t)&&(d=!!t.leading,i=(l="maxWait"in t)?A(P(t.maxWait)||0,n):i,f="trailing"in t?!!t.trailing:f),v.cancel=function(){void 0!==s&&clearTimeout(s),a=0,r=u=o=s=void 0},v.flush=function(){return void 0===s?c:w(T())},v}(r,n,t)),[r,n,t]);return(e=>{const n=(0,o.useRef)(e);(0,o.useEffect)((()=>{n.current=e}),[e]),(0,o.useEffect)((()=>()=>n.current()),[])})((()=>i.cancel())),i},I=({children:e,capture:n,wait:t,options:r})=>{const i=o.Children.only(e),c=R(((...e)=>{const t=null==i?void 0:i.props;if(t)return"function"==typeof t[n]?t[n](...e):void 0}),t,r);return(0,o.cloneElement)(i,{[n]:c})};function L(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)n.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(t[r[o]]=e[r[o]])}return t}"function"==typeof SuppressedError&&SuppressedError;const N=({action:e,calledOnce:n=!1,root:t=null,threshold:r=0,rootMargin:i="0px 0px 0px 0px"})=>{const c=(0,o.useRef)(null),s=u(e),a=(0,o.useCallback)((([e],t)=>{if(e&&e.isIntersecting){const r=e.target;s&&s(e),n&&t.unobserve(r)}}),[s,n]);return(0,o.useEffect)((()=>{const e=c.current;if("undefined"==typeof IntersectionObserver)return;if(!e)return;const n=new IntersectionObserver(a,{root:t,rootMargin:i,threshold:r});return n.observe(e),()=>{n.unobserve(e)}}),[t,r,i,a]),c},B=(...e)=>(0,o.useCallback)((n=>{e.forEach((e=>{"function"==typeof e?e(n):null!=e&&(e.current=n)}))}),[...e]),F=(0,o.forwardRef)(((e,n)=>{const{action:t,calledOnce:o,threshold:i,root:c,rootMargin:s}=e,u=L(e,["action","calledOnce","threshold","root","rootMargin"]),a=N({action:t,calledOnce:o,threshold:i,root:c,rootMargin:s});return(0,r.jsx)("div",Object.assign({ref:B(n,a)},u,{children:e.children}))})),U=(0,o.forwardRef)(((e,n)=>{var{src:t,style:i,threshold:c,root:s,rootMargin:u}=e,a=L(e,["src","style","threshold","root","rootMargin"]);const d=N({action:e=>{e.target.src=t},calledOnce:!0,threshold:c,root:s,rootMargin:u}),l=(0,o.useMemo)((()=>Object.assign({display:"inline-block"},i)),[i]);return(0,r.jsx)("img",Object.assign({},a,{ref:B(n,d),style:l}))})),$=s()?o.useLayoutEffect:o.useEffect;(0,o.createContext)({parentPortalElement:null});const H=({children:e,condition:n})=>(e=>"function"==typeof e?e():e)(n)?(0,r.jsx)(o.Fragment,{children:e}):null,Y=e=>!!s()&&window.matchMedia(e).matches,Z=e=>{const[n,t]=(0,o.useState)(Y(e)),r=(0,o.useCallback)((()=>{t(Y(e))}),[e]);return(0,o.useEffect)((()=>{const n=window.matchMedia(e);return n.addEventListener("change",r),()=>n.removeEventListener("change",r)}),[e,r]),{isMatch:n}},q=e=>{const n=(0,o.useRef)(null),t=u(e);return(0,o.useEffect)((()=>{const e=(()=>{if(i())return!1;const e=window.navigator.userAgent;return/Android|webOS|iPhone|iPad|iPod|Windows Phone|BlackBerry|IEMobile|Opera Mini/i.test(e)})()?"touchstart":"mousedown",r=e=>{const r=n.current;r&&!r.contains(e.target)&&t(r)};return document.addEventListener(e,r),()=>{document.removeEventListener(e,r)}}),[t]),{ref:n}},G=e=>{const n=(0,o.useRef)(e);return(0,o.useEffect)((()=>{n.current=e}),[e]),n.current},J=e=>{const[n,t]=(0,o.useState)({bottom:0,height:0,left:0,right:0,top:0,width:0,x:0,y:0}),r=(0,o.useRef)(null),i=u(e),c=(0,o.useCallback)((([e])=>{e&&(i(e),t(e.contentRect))}),[i]);return(0,o.useEffect)((()=>{const e=r.current;if("undefined"==typeof ResizeObserver)return;if(!e)return;const n=new ResizeObserver(c);return n.observe(e),()=>{n.unobserve(e)}}),[c]),{ref:r,contentRect:n}},K=(e={})=>{const{isDebounce:n=!1,wait:t=300}=e,[r,i]=(0,o.useState)({width:null,height:null}),c=(0,o.useCallback)((()=>{i({width:window.innerWidth,height:window.innerHeight})}),[]),s=R(c,t),u=(0,o.useMemo)((()=>n?s:c),[c,n,s]);return $((()=>(c(),window.addEventListener("resize",u),()=>{window.removeEventListener("resize",u)})),[]),r}},289:(e,n,t)=>{t.d(n,{Z:()=>s,a:()=>c});var r=t(4614);const o={},i=r.createContext(o);function c(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);