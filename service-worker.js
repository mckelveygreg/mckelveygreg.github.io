"use strict";var precacheConfig=[["/index.html","48fd69f68b3a0f58b574ca668d5bd1b4"],["/static/css/main.82b10bcd.css","013d08ead9ab5dce0e7550510d2a1654"],["/static/js/main.e54b028b.js","3a3557cb5a9a963a98961b38ee8fb6f0"],["/static/media/100-days-of-code.a3c81d5a.jpg","a3c81d5a1c346caba206fea2a95b1b86"],["/static/media/APIs-and-Microservices.aa0e218f.jpg","aa0e218f03c1a1db0c8bc5bf410e85fb"],["/static/media/Data_Visualization.59a31f6e.jpg","59a31f6e35ad8855ffdfe850a251fce7"],["/static/media/Frontend_libraries.6496d81f.png","6496d81f4c7398223e05abedb1a3bb38"],["/static/media/JavaScript_Data_Structures_Cert.395f1742.png","395f1742d4c047620d222dae6d3c5dd3"],["/static/media/Simon-game.b34c4e48.jpg","b34c4e48464a1b22d426670b32e79c0e"],["/static/media/d3-bar-graph.5a1bdd1a.jpg","5a1bdd1a6351e9e77597013283621fd6"],["/static/media/d3_choropleth_map.d32d5014.png","d32d501440c0792af03cf333572ab92e"],["/static/media/d3_heat_map.0a407979.png","0a407979030a5660c0530c4625d668ce"],["/static/media/d3_treemap.2810823b.png","2810823b8cee3163d0254888e5e7bb00"],["/static/media/dad_jokes.04b64e24.png","04b64e24640d340f391fa78787aa0fd7"],["/static/media/drum-machine.415a7550.jpg","415a755005733d29942fc57864e2bf20"],["/static/media/js-calculator.1d317289.jpg","1d317289c8e6022fb602f6d0e0bab336"],["/static/media/legacy_front_end.d9ba4dac.png","d9ba4dac17fd6a4297631df39010d50c"],["/static/media/lunch-survey.98ad5e5e.jpg","98ad5e5e14cb8add687b896114bcfcbf"],["/static/media/markdown_previewer.149a6e38.png","149a6e38b3e82eb5d9187f0b0ffd38f3"],["/static/media/product-landing.9efb52b2.jpg","9efb52b2cb3cc314dd3aa54c47b97e9c"],["/static/media/responsive_web_design_cert.3713071e.png","3713071e90fee6a847bc64ee1e930bb2"],["/static/media/scatterplot.170c0e1c.jpg","170c0e1cfcf1d0f6123983079e43c462"],["/static/media/tech-documentation.175b6b79.jpg","175b6b79e293857e6a502e32a35e2399"],["/static/media/tree_background.37d1ff6a.png","37d1ff6ae65adcd2c9e2b638b20b8cf1"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,t,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),r.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return t.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],n=new URL(a,self.location),r=createCacheKey(n,hashParamName,t,/\.\w{8}\./);return[n.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,n),e=urlsToCacheKeys.has(t));var r="/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(t=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});