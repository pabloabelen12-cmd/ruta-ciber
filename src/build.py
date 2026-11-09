import json, os
os.makedirs('app', exist_ok=True)
R=lambda f: open(f,encoding='utf-8').read()
import glob, subprocess
subprocess.run(['node', 'tools/prereqs.js'], check=True)
content = '\n'.join(R(f) for f in ['content.js','content2.js','content3.js','content5.js','practice.js','guides.js'] + sorted(glob.glob('guides_p[0-9].js')) + sorted(glob.glob('p5_*.js')) + ['prereqs.js'])
app = R('app2.js')
shell = R('shell2.html')
body = shell.replace('/*CONTENT*/',content).replace('/*APP*/',app)
open('ruta-ciber.html','w',encoding='utf-8').write(body)
open('all3.js','w',encoding='utf-8').write(content+'\n'+app)
# ── App instalable ──
head = '''<!doctype html>
<html lang="es">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">
<meta name="theme-color" content="#050A08">
<meta name="description" content="Tu ruta de ciberseguridad en 4 fases.">
<link rel="manifest" href="manifest.webmanifest">
<link rel="icon" type="image/png" sizes="32x32" href="icons/favicon-32.png">
<link rel="apple-touch-icon" href="icons/apple-touch-icon.png">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-title" content="Ruta Ciber">
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
<style>:root{padding-top:env(safe-area-inset-top,0px)}body{margin:0}img{max-width:100%}[hidden]{display:none!important}html,body{overscroll-behavior-y:none}</style>
</head>
<body>
'''
sw_reg = '''<script>
if ("serviceWorker" in navigator && (location.protocol === "https:" || location.hostname === "localhost" || location.hostname === "127.0.0.1")) {
  window.addEventListener("load", () => navigator.serviceWorker.register("./sw.js").catch(() => {}));
}
</script>
'''
open('app/index.html','w',encoding='utf-8').write(head+body+'\n'+sw_reg+'</body>\n</html>\n')
manifest = {
 "name":"Ruta Ciber","short_name":"Ruta Ciber","description":"Tu ruta de ciberseguridad en 4 fases: sesiones guiadas, prácticas, quiz, tarjetas, horario y agenda.",
 "lang":"es","start_url":"./#hoy","scope":"./","display":"standalone","orientation":"any",
 "background_color":"#050A08","theme_color":"#050A08",
 "icons":[{"src":"icons/icon-192.png","sizes":"192x192","type":"image/png"},
          {"src":"icons/icon-512.png","sizes":"512x512","type":"image/png"},
          {"src":"icons/icon-maskable-512.png","sizes":"512x512","type":"image/png","purpose":"maskable"}]}
open('app/manifest.webmanifest','w',encoding='utf-8').write(json.dumps(manifest,ensure_ascii=False,indent=2))
sw = '''/* Ruta Ciber: guarda la app para que abra sin internet. */
const CACHE = "ruta-ciber-v11";
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
'''
open('app/sw.js','w',encoding='utf-8').write(sw)
leeme = '''RUTA CIBER · cómo instalar la app
=================================

Esta carpeta es la app completa. Para instalarla en el iPhone y en Windows
hay que ponerla en internet una vez (gratis, con GitHub Pages). Después
funciona como una app normal y también sin conexión.

1) PUBLICARLA (una sola vez, unos 10 minutos, desde la laptop)
   - Crea una cuenta gratis en https://github.com
   - Pulsa "New repository". Nombre: ruta-ciber. Público. Create repository.
   - Pulsa "uploading an existing file" y arrastra TODO lo que hay dentro
     de esta carpeta (index.html, manifest.webmanifest, sw.js y la carpeta
     icons). Pulsa "Commit changes".
   - Ve a Settings > Pages. En "Branch" elige "main" y "/ (root)". Save.
   - En uno o dos minutos tu app estará en:
     https://TU-USUARIO.github.io/ruta-ciber/

2) INSTALARLA EN WINDOWS
   - Abre esa dirección en Microsoft Edge o en Google Chrome.
   - Pulsa el icono de "Instalar" que aparece a la derecha de la barra de
     direcciones (o el menú ... > Aplicaciones > Instalar este sitio
     como aplicación).
   - Quedará en el menú Inicio y en la barra de tareas, con su propia
     ventana, como cualquier programa.

3) INSTALARLA EN EL IPHONE
   - Abre la misma dirección en Safari.
   - Toca el botón Compartir (el cuadrado con la flecha hacia arriba).
   - Elige "Agregar a pantalla de inicio" y luego "Agregar".
   - Se abre a pantalla completa, sin barra del navegador.

4) TU PROGRESO
   - Cada dispositivo guarda su propio progreso, también sin internet.
   - Para pasarlo de la laptop al teléfono (o al revés): Progreso >
     "copiar mi progreso", envíatelo por WhatsApp o correo, y en el otro
     dispositivo pégalo en "restaurar".

PRUEBA RÁPIDA SIN PUBLICAR: haz doble clic en index.html y se abre en el
navegador. Así funciona, pero no se instala como app ni trabaja sin internet.
'''
open('app/LEEME.txt','w',encoding='utf-8').write(leeme.replace('\n','\r\n'))
print('build ok')
