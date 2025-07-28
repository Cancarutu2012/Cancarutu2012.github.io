let notificationIntervalId = null;

self.addEventListener('install', event => {
  console.log('[SW] Telepítve');
  self.skipWaiting();  // Azonnal aktiválás
});

self.addEventListener('activate', event => {
  console.log('[SW] Aktiválva');
  event.waitUntil(self.clients.claim());
});

self.addEventListener('message', event => {
  if(event.data && event.data.command === 'start-notifications') {
    if(notificationIntervalId === null) {
      notificationIntervalId = setInterval(() => {
        self.registration.showNotification('Radetzky FM', {
          body: 'Na, kívánsz egy kis zenét?',
          icon: '/icons/icon-192.png',
          vibrate: [200, 100, 200],
          tag: 'radetzkyfm-reminder',
        });
      }, 1800000); // 30 perc = 1800000 ms

      console.log('[SW] Értesítés időzítő elindítva');
    }
  }
});
