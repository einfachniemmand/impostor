self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('v1').then(cache =>
      cache.addAll([
        '/',
        '/index.html',
        '/manifest.json',
        '/img/android.png',
        '/img/screenshot.png',
        '/img/personalize.png'
      ])
    )
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response =>
      response || fetch(event.request)
    )
  );
});
