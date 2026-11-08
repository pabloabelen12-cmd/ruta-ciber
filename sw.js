/* Ruta Ciber: guarda la app para que abra sin internet. */
const CACHE = "ruta-ciber-v10";
const CORE = ["./", "./index.html", "./manifest.webmanifest", "./icons/icon-192.png", "./icons/icon-512.png", "./icons/icon-maskable-512.png", "./icons/apple-touch-icon.png", "./icons/favicon-32.png"];
self.addEventListener("install", e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(CORE)).then(() => self.skipWaiting())); });
self.addEventListener("activate", e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim())); });
const keep = (req, res) => { if (res && (res.ok || res.type === "opaque")) { const cp = res.clone(); caches.open(CACHE).then(c => c.put(req, cp)); } return res; };
self.addEventListener("fetch", e => {
  const req = e.request; if (req.method !== "GET") return;
  const url = new URL(req.url);
  if (url.origin === self.location.origin) {
    if (req.mode === "navigate") {
      const scope = new URL(self.registration.scope).pathname, p = url.pathname;
      const isApp = p === scope || p === scope + "index.html";
      const key = isApp ? "./index.html" : url.origin + url.pathname;
      e.respondWith(fetch(url.href, { cache: "no-cache", credentials: "same-origin" }).then(r => keep(key, r)).catch(() => caches.match(key).then(m => m || caches.match("./index.html"))));
      return;
    }
    e.respondWith(caches.match(req).then(m => m || fetch(req).then(r => keep(req, r))));
    return;
  }
  if (url.hostname === "fonts.googleapis.com" || url.hostname === "fonts.gstatic.com") {
    e.respondWith(caches.match(req).then(m => m || fetch(req).then(r => keep(req, r)).catch(() => m)));
  }
});
