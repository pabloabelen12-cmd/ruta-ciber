# Ruta Ciber · código fuente

La app publicada (`../index.html`, `../sw.js`, `../manifest.webmanifest`) se genera desde esta carpeta.

| Archivo | Qué contiene |
|---|---|
| `content.js` | Fase 1: sesiones s01–s30 (`LESSONS`), `DECISION_QS`, `WEEKS` |
| `content2.js` | Fase 2: unidades p2u01–p2u24 (`P2`) |
| `content3.js` | Fases 3 y 4 (`P3`, `P4`) y las puertas (`GATES`) |
| `practice.js` | `PRACTICE` (qué hacer en cada enlace), `AUTO_STEP`, `AUTO_ROUTE` |
| `guides.js` | `PLATFORM_GUIDES`, `GUIDE_HOSTS`, `UNIT_GUIDES` (guías paso a paso) |
| `app2.js` | Lógica y vistas de la app |
| `shell2.html` | HTML y estilos (`/*CONTENT*/` y `/*APP*/` se sustituyen al construir) |
| `build.py` | Construye `app/` (PWA) y `ruta-ciber.html` (versión de Claude) |
| `test2.js` | Simula el recorrido completo (debe terminar con `flags 86/86`) |

## Cambiar algo
```
cd src
python3 build.py              # genera app/ y ruta-ciber.html
node --check all3.js && node test2.js   # debe decir: flags 86/86
cp -r app/. ..                # copia la PWA a la raíz publicada
```
Sube el número de `CACHE = "ruta-ciber-vN"` en `build.py` en cada publicación para que las apps instaladas se actualicen.
El progreso del usuario vive en `localStorage` con la clave `rutaciber.v1`: no cambies ids de unidades ni el formato sin migración.
