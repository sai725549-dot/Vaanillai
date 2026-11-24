self.addEventListener('install',function(e){self.skipWaiting();});
self.addEventListener('activate',function(e){e.waitUntil(self.clients.claim());});
self.addEventListener('fetch',function(e){if(e.request.method!=='GET')return;
e.respondWith(fetch(e.request).then(function(r){var c=r.clone();if(new URL(e.request.url).origin===location.origin)caches.open('v1').then(function(x){x.put(e.request,c);});return r;}).catch(function(){return caches.match(e.request);}));});
