

const cacheName = 'v1::static';

self.addEventListener('install', function (e) {
  e.waitUntil(
    caches.open(cacheName).then( function (cache) {
      return cache.addAll([
      	'/media/img/',
        '/one.js',
        '/app.js',
        '/one.css',
        '/'
      ]).then(() => self.skipWaiting());
    })
  );
  console.log('installed')
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request).then(res => res || fetch(event.request))
  );
  console.log('fetched')
});