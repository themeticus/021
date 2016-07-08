
self.addEventListener('install', function (e) {
  e.waitUntil(
    caches.open('v1-static').then( function (cache) {
      return cache.addAll([
      	'/021/media/fonts/1ove.ttf',
      	'/021/media/fonts/1ove.woff',
      	'/021/media/img/love-from-the-021-2-149.jpg',
        '/021/one.js',
        '/021/app.js',
        '/021/one.css'
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