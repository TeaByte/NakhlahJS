const CACHE_NAME = 'cache-v1';
const no_cache_urls = [
    "/sw-cache.json",
]
self.addEventListener('install', function (event) {
    event.waitUntil(
        () => {
            const cacheNames = caches.keys();
            Promise.all(
                cacheNames.map(function (cacheName) {
                    if (cacheName !== CACHE_NAME) {
                        return caches.delete(cacheName);
                    }
                })
            );
            cacheNewResources()
        }
    );
});

self.addEventListener('activate', function (event) {
    event.waitUntil(
        caches.keys().then(function (cacheNames) {
            return Promise.all(
                cacheNames.map(function (cacheName) {
                    if (cacheName !== CACHE_NAME) {
                        return caches.delete(cacheName);
                    }
                })
            );
        }).then(function () {
            return cacheNewResources();
        })
    );
});

async function cacheNewResources() {
    const resp = await fetch('/sw-cache.json');
    const data = await resp.json();
    const cache = await caches.open(CACHE_NAME);
    await cache.addAll([...data, "/", "/offline", "/courses"]);
}

self.addEventListener('fetch', async function (event) {
    const url = new URL(event.request.url).pathname
    // ! this code update cache on every request it is not good for performance, but it make app works offline
    // TODO: remove this code block
    if (event.request.method === 'GET' && navigator.onLine && event.request.url.startsWith('http')) {
        try {
            const cache = await caches.open(CACHE_NAME);
            const resp = await fetch(event.request);
            cache.put(event.request, resp.clone());
            event.respondWith(resp);
        } catch (error) {
            // TODO: handle error
            // console.error('Error fetching and caching:', error);
        }
    }
    // ! this code block is for offline support temproray
    // TODO: remove this code block
    if (!navigator.onLine) {
        event.respondWith(
            caches.match(event.request).then(function (response) {
                if (response) {
                    return response;
                } else {
                    return caches.match(new Request('/offline'));
                }
            })
        );
    }
    // TODO: Implement cache strategy
    //   if (no_cache_urls.includes(url)) {
    //     event.respondWith(fetch(event.request));
    //   } else {
    //     event.respondWith(
    //       caches.match(event.request).then(function (response) {
    //         if (response) {
    //           return response;
    //         } else {
    //           if (event.request.method === 'GET') {
    //             return fetch(event.request).then(function (response) {
    //               return caches.open(CACHE_NAME).then(function (cache) {
    //                 cache.put(event.request, response.clone());
    //                 return response;
    //               });
    //             });
    //           } else {
    //             return fetch(event.request);
    //           }
    //         }
    //       })
    //     );
    //   }
});
