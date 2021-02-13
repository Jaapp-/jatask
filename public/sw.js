const name = "jatask-v1";
const assets = ["/", "/style.css", "/bundle.js"];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(name)
      .then((cache) => cache.addAll(assets))
      .then(self.skipWaiting())
  );
});

self.addEventListener("fetch", (event) => {
  const url = new URL(event.request.url);
  if (assets.indexOf(url.pathname) !== -1) {
    event.respondWith(
      caches
        .match(event.request, {
          ignoreSearch: true,
        })
        .then((res) => fetch(event.request) || res)
    );
  }
});
