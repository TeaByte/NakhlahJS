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
  const data = await resp.json();
  caches.open(CACHE_NAME).then(function (cache) {
    return cache.addAll([...data, "/"]);
  })

});
self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(async function (cache) {
      const resp = await fetch('/sw-cache.json');
      const data = await resp.json();
      return cache.addAll([...data, "/"]);
    })
  );
});
self.addEventListener('fetch', function (event) {
  // TODO: make external resources cache first and the rest network first and if offline use cache if available and if not use fallback
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