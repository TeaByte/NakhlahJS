const CACHE_NAME = 'static-cache-v1';
self.addEventListener('install', function(event) {
    // TODO:
});
self.addEventListener('activate', function(event) {
    console.log('Service worker activating...');
});
self.addEventListener('fetch', function(event) {
    console.log('Fetching:', event.request.url);
    event.respondWith(
        caches.match(event.request).then(function(response) {
            // I KNOW THIS IS NOT THE BEST WAY TO DO THIS
            if (!response) {
                caches.open(CACHE_NAME).then(function(cache) {
                    cache.add(event.request.url);
                });
            }
            return response || fetch(event.request);
        })
    );
});