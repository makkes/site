"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7041],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(r),m=o,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||a;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3416:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var n=r(7462),o=(r(7294),r(3905));const a={title:"Cluster API Provider MicroVM"},i=void 0,s={unversionedId:"guides/capmvm",id:"guides/capmvm",title:"Cluster API Provider MicroVM",description:"Installing and using CAPMVM to create bare-metal workload clusters.",source:"@site/docs/guides/capmvm.md",sourceDirName:"guides",slug:"/guides/capmvm",permalink:"/site/docs/guides/capmvm",draft:!1,editUrl:"https://github.com/weaveworks-liquidmetal/site/tree/main/docs/guides/capmvm.md",tags:[],version:"current",frontMatter:{title:"Cluster API Provider MicroVM"},sidebar:"docs",previous:{title:"Cluster API",permalink:"/site/docs/guides/cluster-api"},next:{title:"Service Authentication",permalink:"/site/docs/guides/authn"}},c={},l=[{value:"CAPMVM API",id:"capmvm-api",level:2},{value:"Adding SSH keys to MicroVMs",id:"adding-ssh-keys-to-microvms",level:2}],u={toc:l};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Installing and using CAPMVM to create bare-metal workload clusters."),(0,o.kt)("p",null,"CAPMVM is Liquid Metal's bare-metal CAPI infrastructure provider."),(0,o.kt)("p",null,"Instructions on how to install CAPMVM to your management cluster can be found\nin any of the ",(0,o.kt)("a",{parentName:"p",href:"/docs/tutorial-basics/capi"},"tutorials")," on this site."),(0,o.kt)("h2",{id:"capmvm-api"},"CAPMVM API"),(0,o.kt)("h2",{id:"adding-ssh-keys-to-microvms"},"Adding SSH keys to MicroVMs"),(0,o.kt)("p",null,"To add SSH keys to any MicroVM nodes, add the following to your ",(0,o.kt)("inlineCode",{parentName:"p"},"cluster.yaml"),"\nbefore applying:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'...\nkind: MicrovmCluster\nspec:\n  sshPublicKeys:\n  - user: "root"\n    authorizedKeys:\n    - "ssh-ed25519 foobar"\n...\n')))}p.isMDXComponent=!0}}]);