const CACHE_NAME = 'cache-v1';

self.addEventListener('install', async function (_event) {
  const cacheNames = await caches.keys();
  await Promise.all(
    cacheNames.map(function (cacheName) {
      if (cacheName !== CACHE_NAME) {
        return caches.delete(cacheName);
      }
    })
  );
  const resp = await fetch('/sw-cache.json');
  const data = await resp.json();
  await caches.open(CACHE_NAME).then(function (cache) {
    return cache.addAll([...data, "/"]);
  });
});

self.addEventListener('activate', function (event) {
  event.waitUntil(
    cacheNewResources()
  );
});

async function cacheNewResources() {
  const resp = await fetch('/sw-cache.json');
  const data = await resp.json();
  const cache = await caches.open(CACHE_NAME);
  await cache.addAll([...data, "/"]);
}

// self.addEventListener('fetch', function (event) {
//   const requestUrl = new URL(event.request.url);
//   // Cache external resources first
//   if (!requestUrl.origin.includes(self.location.hostname)) {
//     event.respondWith(
//       caches.match(event.request).then(function (response) {
//         if (response) {
//           return response;
//         } else {
//           // cache external resources
//           if (requestUrl.protocol === 'http:' || requestUrl.protocol === 'https:') {
//             return fetch(event.request).then(function (response) {
//               const responseClone = response.clone();
//               caches.open(CACHE_NAME).then(function (cache) {
//                 cache.put(event.request, responseClone);
//               });
//               return response;
//             });
//           } else {
//             return fetch(event.request);
//           }
//         }
//       })
//     );
//     return;
//   }

//   // For non-GET requests, use the network
//   if (event.request.method !== 'GET') {
//     event.respondWith(fetch(event.request));
//     return;
//   }

//   event.respondWith(
//     caches.open(CACHE_NAME).then(function (cache) {
//       return cache.match(event.request).then(function (response) {
//         const fetchPromise = fetch(event.request).then(function (networkResponse) {
//           // If the request is successful, update the cache
//           if (networkResponse.ok) {
//             cache.put(event.request, networkResponse.clone());
//           }
//           return networkResponse;
//         });

//         // Use the cache first, and fall back to the network if offline
//         return response || fetchPromise;
//       });
//     })
//   );
// });

self.addEventListener('sync', function (event) {
  if (event.tag === 'syncData') {
    event.waitUntil(syncData());
  }
});

function syncData() {
  // Implement your data synchronization logic here
  // This function will be called when the connection is restored
  console.log('Syncing data...');
}
