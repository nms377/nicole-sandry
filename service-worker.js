"use strict";var precacheConfig=[["/index.html","6b6e4b8d85a11d1e1b9c006b0878a9d0"],["/static/css/main.db0e1660.css","fb61b8adf0d3fcee21e52f7c0b686fa4"],["/static/js/main.a4595b49.js","4e3fd718d8db0b5d1d8a82f1966610ef"],["/static/media/Download.29fa07cc.svg","29fa07ccf732aa08a6be1377625bdcb5"],["/static/media/Email.46a7564e.svg","46a7564ee11c4f2eb71a64f7f1e893df"],["/static/media/GitHub.eb7570fa.svg","eb7570fab584675103db132a03a34c77"],["/static/media/Instagram.9d971c10.svg","9d971c109cc733b9d68ebdc5fe50d06a"],["/static/media/LinkedIn.084e0f24.svg","084e0f241fe41bcaa3c6122b0e9ad6f0"],["/static/media/Nicole-Sandry-Resume.5d49a4bf.pdf","5d49a4bfb7265234cbcc5889bb3bf24c"],["/static/media/leiover.7a20f024.png","7a20f0248048ca323d56e853d998d615"],["/static/media/list.4b7d86fe.svg","4b7d86fea48e1361b7be84ccba5c60fa"],["/static/media/nicolesandry.50ece8a3.jpg","50ece8a3d4aa325327b4665b7eccd483"],["/static/media/react-insta.d6ab0fa8.png","d6ab0fa88f683b9153063d666dc961ee"],["/static/media/react-kanban.c12b56af.png","c12b56af0c11310d2a21570e8e952423"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var n=new Request(a,{credentials:"same-origin"});return fetch(n).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),n="index.html";(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),t=urlsToCacheKeys.has(a));var r="/index.html";!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL(r,self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});