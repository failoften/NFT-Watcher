self.addEventListener("install", (event) => {
  console.log("Service Worker Installed");
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => response || fetch(event.request))
  );
});
