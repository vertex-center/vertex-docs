(()=>{"use strict";var e,t,r,o,a,c={},n={};function f(e){var t=n[e];if(void 0!==t)return t.exports;var r=n[e]={id:e,loaded:!1,exports:{}};return c[e].call(r.exports,r,r.exports,f),r.loaded=!0,r.exports}f.m=c,f.c=n,e=[],f.O=(t,r,o,a)=>{if(!r){var c=1/0;for(u=0;u<e.length;u++){r=e[u][0],o=e[u][1],a=e[u][2];for(var n=!0,d=0;d<r.length;d++)(!1&a||c>=a)&&Object.keys(f.O).every((e=>f.O[e](r[d])))?r.splice(d--,1):(n=!1,a<c&&(c=a));if(n){e.splice(u--,1);var i=o();void 0!==i&&(t=i)}}return t}a=a||0;for(var u=e.length;u>0&&e[u-1][2]>a;u--)e[u]=e[u-1];e[u]=[r,o,a]},f.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return f.d(t,{a:t}),t},r=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,f.t=function(e,o){if(1&o&&(e=this(e)),8&o)return e;if("object"==typeof e&&e){if(4&o&&e.__esModule)return e;if(16&o&&"function"==typeof e.then)return e}var a=Object.create(null);f.r(a);var c={};t=t||[null,r({}),r([]),r(r)];for(var n=2&o&&e;"object"==typeof n&&!~t.indexOf(n);n=r(n))Object.getOwnPropertyNames(n).forEach((t=>c[t]=()=>e[t]));return c.default=()=>e,f.d(a,c),a},f.d=(e,t)=>{for(var r in t)f.o(t,r)&&!f.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},f.f={},f.e=e=>Promise.all(Object.keys(f.f).reduce(((t,r)=>(f.f[r](e,t),t)),[])),f.u=e=>"assets/js/"+({53:"935f2afb",57:"4496b259",85:"1f391b9e",148:"0b40c2e4",195:"c4f5d8e4",206:"f8409a7e",221:"da718f4d",224:"d00b4c37",225:"356cc2c5",261:"21b5ec46",414:"393be207",431:"6462569c",514:"1be78505",534:"ae223dc9",575:"2d4c236b",742:"871bfac0",743:"0b84c40e",817:"14eb3368",893:"8005c51c",918:"17896441"}[e]||e)+"."+{53:"4b0bcb8b",57:"8dc374ef",85:"a2698cc4",148:"bde8dd6a",195:"f1dd2a47",206:"d3636646",221:"18376bd0",224:"6abfc90c",225:"daa28b9b",261:"d8d8d75f",414:"eacca3aa",431:"4ddf202a",455:"2ebefede",514:"38848c68",534:"bf3a369b",575:"8415619c",742:"97679523",743:"320c301b",817:"35ff65ad",893:"9ae81eee",918:"423d5d6d",972:"4078feca"}[e]+".js",f.miniCssF=e=>{},f.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),f.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o={},a="vertex-docs:",f.l=(e,t,r,c)=>{if(o[e])o[e].push(t);else{var n,d;if(void 0!==r)for(var i=document.getElementsByTagName("script"),u=0;u<i.length;u++){var l=i[u];if(l.getAttribute("src")==e||l.getAttribute("data-webpack")==a+r){n=l;break}}n||(d=!0,(n=document.createElement("script")).charset="utf-8",n.timeout=120,f.nc&&n.setAttribute("nonce",f.nc),n.setAttribute("data-webpack",a+r),n.src=e),o[e]=[t];var b=(t,r)=>{n.onerror=n.onload=null,clearTimeout(s);var a=o[e];if(delete o[e],n.parentNode&&n.parentNode.removeChild(n),a&&a.forEach((e=>e(r))),t)return t(r)},s=setTimeout(b.bind(null,void 0,{type:"timeout",target:n}),12e4);n.onerror=b.bind(null,n.onerror),n.onload=b.bind(null,n.onload),d&&document.head.appendChild(n)}},f.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},f.p="/vertex-docs/",f.gca=function(e){return e={17896441:"918","935f2afb":"53","4496b259":"57","1f391b9e":"85","0b40c2e4":"148",c4f5d8e4:"195",f8409a7e:"206",da718f4d:"221",d00b4c37:"224","356cc2c5":"225","21b5ec46":"261","393be207":"414","6462569c":"431","1be78505":"514",ae223dc9:"534","2d4c236b":"575","871bfac0":"742","0b84c40e":"743","14eb3368":"817","8005c51c":"893"}[e]||e,f.p+f.u(e)},(()=>{var e={303:0,532:0};f.f.j=(t,r)=>{var o=f.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else if(/^(303|532)$/.test(t))e[t]=0;else{var a=new Promise(((r,a)=>o=e[t]=[r,a]));r.push(o[2]=a);var c=f.p+f.u(t),n=new Error;f.l(c,(r=>{if(f.o(e,t)&&(0!==(o=e[t])&&(e[t]=void 0),o)){var a=r&&("load"===r.type?"missing":r.type),c=r&&r.target&&r.target.src;n.message="Loading chunk "+t+" failed.\n("+a+": "+c+")",n.name="ChunkLoadError",n.type=a,n.request=c,o[1](n)}}),"chunk-"+t,t)}},f.O.j=t=>0===e[t];var t=(t,r)=>{var o,a,c=r[0],n=r[1],d=r[2],i=0;if(c.some((t=>0!==e[t]))){for(o in n)f.o(n,o)&&(f.m[o]=n[o]);if(d)var u=d(f)}for(t&&t(r);i<c.length;i++)a=c[i],f.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return f.O(u)},r=self.webpackChunkvertex_docs=self.webpackChunkvertex_docs||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})()})();