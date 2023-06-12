"use strict";(self.webpackChunkvertex_docs=self.webpackChunkvertex_docs||[]).push([[534],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>g});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),c=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=c(e.components);return a.createElement(l.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(t),m=r,g=u["".concat(l,".").concat(m)]||u[m]||d[m]||i;return t?a.createElement(g,o(o({ref:n},p),{},{components:t})):a.createElement(g,o({ref:n},p))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[u]="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=t[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},1151:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var a=t(7462),r=(t(7294),t(3905));const i={sidebar_position:2},o="Manage",s={unversionedId:"instances/manage",id:"instances/manage",title:"Manage",description:"To manage an instance, click on it. The page will display multiple settings and management tools.",source:"@site/docs/instances/manage.mdx",sourceDirName:"instances",slug:"/instances/manage",permalink:"/docs/instances/manage",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Install new instances",permalink:"/docs/instances/install-new-instances"},next:{title:"Logs",permalink:"/docs/logs"}},l={},c=[{value:"Docker",id:"docker",level:2},{value:"Logs",id:"logs",level:2},{value:"Environment",id:"environment",level:2},{value:"Dependencies",id:"dependencies",level:2}],p={toc:c},u="wrapper";function d(e){let{components:n,...t}=e;return(0,r.kt)(u,(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"manage"},"Manage"),(0,r.kt)("p",null,"To manage an instance, click on it. The page will display multiple settings and management tools."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Docker:")," Describe the Docker instance, if applicable."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Logs:")," See the instance logs."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Environment:")," Change environment configuration (ports, secret variables...)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Dependencies:")," Install dependencies on your machine easily.")),(0,r.kt)("h2",{id:"docker"},"Docker"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"This page is only visible if the instance uses Docker.")),(0,r.kt)("p",null,"This page displays some info about the Docker container, like its ID, name, image or platform."),(0,r.kt)("h2",{id:"logs"},"Logs"),(0,r.kt)("p",null,"This page displays the logs in real-time. Note that these logs are also backup in the ",(0,r.kt)("inlineCode",{parentName:"p"},"{instance_path}/.vertex/logs")," directory, and are split in one file per day. These can be useful to investigate issues long after they appeared."),(0,r.kt)("h2",{id:"environment"},"Environment"),(0,r.kt)("p",null,"On this page, you can edit the instance settings, like ports or secret keys."),(0,r.kt)("h2",{id:"dependencies"},"Dependencies"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"This page is only visible if the instance doesn't use Docker.")),(0,r.kt)("p",null,"If a dependency is missing on your computer to run an instance, you can try to use the Vertex Dependencies tool to fix these in one click."),(0,r.kt)("p",null,"To install a package, select your favourite package manager, and click install."),(0,r.kt)("p",null,"However, package managers that need admin privileges cannot be used by Vertex. In this case, Vertex will give you the command you need to execute to install the missing dependencies."))}d.isMDXComponent=!0}}]);