const cacheKey="static-app-v1",dynamicCacheName="dynamic-data";self.addEventListener("install",(async e=>{try{const e=await caches.open(cacheKey);await e.addAll(["index.html"])}catch(e){console.error("[SW]: INSTALL ERROR",e)}})),self.addEventListener("activate",(()=>{})),self.addEventListener("fetch",(async e=>{e.respondWith(networkFirst(e.request))}));const networkFirst=async e=>{try{const t=await fetch(e);return(await caches.open(cacheKey)).put(e,t.clone()),t}catch(t){console.log("network is off, work with cache");const a=await caches.open(cacheKey);return await a.match(e)||Promise.reject("no-cache")}};