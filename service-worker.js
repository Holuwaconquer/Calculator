self.addEventListener('install', event => {
    event.waitUntil(
      caches.open('v1').then(cache => {
        return cache.addAll([
          './',
          './index.html',
          './cal.css',
          './cal.js.js',
          './icon-1.png',
          './icon-1.png'
        ]);
      })
    );
  });
  
  self.addEventListener('fetch', event => {
    event.respondWith(
      caches.match(event.request).then(response => {
        return response || fetch(event.request);
      })
    );
  });
  