var cacheName = 'restaurant-reviews-v1';
var assets = [
  '/',
  '/index.html',
  '/restaurant.html?id=1',
  '/restaurant.html?id=2',
  '/restaurant.html?id=3',
  '/restaurant.html?id=4',
  '/restaurant.html?id=5',
  '/restaurant.html?id=6',
  '/restaurant.html?id=7',
  '/restaurant.html?id=8',
  '/restaurant.html?id=8',
  '/restaurant.html?id=10',
  '/data/restaurants.json',
  '/js/',
  '/js/dbhelper.js',
  '/js/main.js',
  '/js/restaurant_info.js',
  '/js/sw-register.js',
  '/css/styles.css',
  '/img/',
  '/img/1.jpg',
  '/img/2.jpg',
  '/img/3.jpg',
  '/img/4.jpg',
  '/img/5.jpg',
  '/img/6.jpg',
  '/img/7.jpg',
  '/img/8.jpg',
  '/img/9.jpg',
  '/img/10.jpg',
  '/img/favicon.ico'
];

self.addEventListener('install', e => {
  console.log ('Service Worked Installed');

  e.waitUntil(
    caches
      .open(cacheName)
      .then(cache => {
        console.log('service Worked: Caching Files');
        cache.addAll(assets);
      })
        .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', e => {
  console.log ('Service Worked Activated');
  e.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cache => {
          if(cache !== cacheNames) {
            console.log("Service Worker clearing cache");
            return caches.delete(cache);
          }
        })
      );
    })
  );
});

self.addEventListener('fetch', e=> {
  console.log('service Worker fetching');
  e.respondWith(
    fetch(e.request).catch(() => caches.match(e.request))
  );
});