// Simple service worker for caching static assets
const CACHE_NAME = 'restaurants-v1';
const STATIC_ASSETS = [
  '/',
  '/manifest.json',
  '/_next/static/css/app/globals.css',
];

// Install event
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(STATIC_ASSETS))
      .then(() => self.skipWaiting())
  );
});

// Activate event
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (cacheName !== CACHE_NAME) {
              return caches.delete(cacheName);
            }
          })
        );
      })
      .then(() => self.clients.claim())
  );
});

// Fetch event - cache first for static assets
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Only handle GET requests
  if (request.method !== 'GET') return;

  // Skip cross-origin requests
  if (url.origin !== location.origin) return;

  // Cache strategy for different types of requests
  if (url.pathname.startsWith('/_next/static/') || url.pathname.startsWith('/images/')) {
    // Static assets - cache first
    event.respondWith(
      caches.open(CACHE_NAME)
        .then((cache) => cache.match(request))
        .then((response) => response || fetch(request))
    );
  } else if (url.pathname === '/' || url.pathname.match(/^\/[a-z-]+$/)) {
    // Pages - network first with cache fallback
    event.respondWith(
      fetch(request)
        .then((response) => {
          if (response.ok) {
            const responseClone = response.clone();
            caches.open(CACHE_NAME)
              .then((cache) => cache.put(request, responseClone));
          }
          return response;
        })
        .catch(() => caches.match(request))
    );
  }
});