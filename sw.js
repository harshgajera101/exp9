self.addEventListener('install', event => {
    event.waitUntil(
        caches.open('shop-cache').then(cache => {
            return cache.addAll([
                '/',
                '/index.html',
                '/manifest.json',
                '/css/style.css',
                '/images/smartphone.jpeg',
                '/js/script.js'
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
});var staticCacheName = "pwa";
self.addEventListener("install", function (e) {
    e.waitUntil(
        caches.open(staticCacheName).then(function (cache) {
            return cache.addAll(["/"]);
        })
    );
});

self.addEventListener("fetch", function (event) {
    console.log(event.request.url);
    event.respondWith(
        caches.match(event.request).then(function (response) {
            return response || fetch(event.request);
        })
    );
});