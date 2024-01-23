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
  event.respondWith(() => {
    // check if the user is offline first and return the page from the cache
    if (!navigator.onLine) {
      return caches.match(event.request).then(function (response) {
        if (response) {
          return response;
        }
        return caches.match('/offline');
      });
    }
  }
  );
});