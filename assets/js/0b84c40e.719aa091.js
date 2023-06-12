"use strict";(self.webpackChunkvertex_docs=self.webpackChunkvertex_docs||[]).push([[743],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>m});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),p=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},c=function(e){var r=p(e.components);return n.createElement(l.Provider,{value:r},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},v=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(t),v=o,m=u["".concat(l,".").concat(v)]||u[v]||d[v]||i;return t?n.createElement(m,a(a({ref:r},c),{},{components:t})):n.createElement(m,a({ref:r},c))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=v;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s[u]="string"==typeof e?e:o,a[1]=s;for(var p=2;p<i;p++)a[p]=t[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}v.displayName="MDXCreateElement"},5007:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var n=t(7462),o=(t(7294),t(3905));const i={sidebar_position:1},a="Develop a service",s={unversionedId:"developers/develop-service",id:"developers/develop-service",title:"Develop a service",description:"To create a basic service, you'll need this hierarchy:",source:"@site/docs/developers/develop-service.mdx",sourceDirName:"developers",slug:"/developers/develop-service",permalink:"/docs/developers/develop-service",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Developers",permalink:"/docs/category/developers"}},l={},p=[],c={toc:p},u="wrapper";function d(e){let{components:r,...t}=e;return(0,o.kt)(u,(0,n.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"develop-a-service"},"Develop a service"),(0,o.kt)("p",null,"To create a basic service, you'll need this hierarchy:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},".vertex\n    \\- service.json\n\nyour-service.sh\n")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},".vertex/service.json")),(0,o.kt)("p",{parentName:"li"},"This file allows you to describe your service to Vertex (name, description, dependencies...). Below is an example of service.json file."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "id": "service-id",\n    "name": "Service Name",\n    "repository": "github.com/vertex-center/service-repository",\n    "description": "A small description of your service.",\n    "environment": [\n        {\n            "type": "port",\n            "name": "PORT",\n            "display_name": "Server Port",\n            "default": "8080",\n            "description": "The port to expose the API of this server."\n        }\n    ],\n    "methods": {\n        "script": {\n            "file": "start.sh",\n            "dependencies": {\n                "redis": true\n            }\n        },\n        "docker": {\n            "dockerfile": "Dockerfile",\n            "ports": [\n                "6379"\n            ],\n            "volumes": {\n                "data": "/opt/storage"\n            }\n        }\n    }\n}\n'))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"start.sh")),(0,o.kt)("p",{parentName:"li"},"This file is the script that Vertex will use to start your service.\nFor example, if you want to run a go server, use this:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"```Shell\n#!/bin/bash\n\nexec go run .\n```\n")),(0,o.kt)("p",{parentName:"li"},"You can use a different name for the file, by changing its name in the ",(0,o.kt)("inlineCode",{parentName:"p"},"service.json")," file."),(0,o.kt)("admonition",{parentName:"li",type:"note"},(0,o.kt)("p",{parentName:"admonition"},"This script will only be used if the service is installed from sources, or if there are no binaries available in the GitHub releases of the repository.")))),(0,o.kt)("p",null,"These two files are everything you need to convert your program to a Vertex service!"))}d.isMDXComponent=!0}}]);