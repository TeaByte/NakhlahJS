const CACHE_NAME = 'cache-v1';
self.addEventListener('install', async function (event) {
  const cacheNames = await caches.keys();
  await Promise.all(
    cacheNames.map(function (cacheName) {
      if (cacheName !== CACHE_NAME) {
        return caches.delete(cacheName);
      }
    })
  );
  const resp = await fetch('/sw-cache.json');
  const FILES_TO_CACHE = await resp.json();
  caches.open(CACHE_NAME).then(function (cache) {
    return cache.addAll(FILES_TO_CACHE);
  })

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
    })
  );
  event.waitUntil(
    caches.open(CACHE_NAME).then(async function (cache) {
      const resp = await fetch('/sw-cache.json');
      const FILES_TO_CACHE = await resp.json();
      return cache.addAll(FILES_TO_CACHE);
    })
  );
});
self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request).then(function (response) {
      if (!response) {
        caches.open(CACHE_NAME).then(function (cache) {
          cache.add(event.request.url);
        });
      }
      return response || fetch(event.request);
    })
  );
});