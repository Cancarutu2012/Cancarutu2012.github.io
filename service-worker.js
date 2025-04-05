self.addEventListener('install', event => {
  console.log('[ServiceWorker] Installed');
});

self.addEventListener('fetch', event => {
  // Optional: Cache requests here
});
