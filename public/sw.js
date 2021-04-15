const name = "jatask-v1";
const assets = ["/", "/style.css", "/bundle.js", "/img/favicon-32x32.png"];

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(name).then((cache) => cache.addAll(assets)));
});

self.addEventListener("fetch", (event) => {
  const url = new URL(event.request.url);
  if (assets.indexOf(url.pathname) !== -1) {
    event.respondWith(returnCache(event));
  }
});

function returnCache(event) {
  return caches.match(event.request).then((response) => {
    if (response) {
      event.waitUntil(fetchAndCache(event.request));
      return response;
    }
    return fetchAndCache(event.request);
  });
}

function fetchAndCache(request) {
  fetch(request)
    .then((response) => {
      caches.open(name).then((cache) => {
        cache.put(request, response.clone());
      });
      return response;
    })
    .catch((error) => {
      return Promise.reject(`Failed to fetch ${request.url}, ${error}`);
    });
}
