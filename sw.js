// Basic service worker for caching
const CACHE_NAME = 'portfolio-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/style.css',
  '/script.js',
  '/images/my photo.jpg',
  '/images/anime-wallpapers.jpg',
  '/images/python-icon.webp',
  '/images/tenserflow.png',
  '/images/Numpy icon.png',
  '/images/C++ icon.png',
  '/images/project-ai-chatbot.jpg',
  '/images/slime.gif'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});