
self.addEventListener('install', function (e) {
  e.waitUntil(
    caches.open('v1-static').then( function (cache) {
      return cache.addAll([
      	'media/fonts/1ove.ttf',
      	'media/fonts/1ove.woff',
      	'media/img/love-from-the-021-2-149.jpg',
        'one.js',
        'app.js',
        'one.css'
      ]).then(() => self.skipWaiting());
    })
  );
  console.log('installed...')
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request).then(res => res || fetch(event.request))
  );
});