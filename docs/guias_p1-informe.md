# Informe guias_p1 (Fase 1: s01-s04, s06-s09, s11-s14, s16-s23, s26-s30)

## Enlaces a cambiar

- **Bandit (s16-s20, s23): todos los enlaces están desfasados en uno.** En OverTheWire, `banditN.html` explica cómo pasar del nivel N-1 al N (`bandit1.html` = «Level 0 → Level 1»). Verificado leyendo bandit0…bandit14.html.
  - s16: dejar `bandit0.html` y **añadir** `https://overthewire.org/wargames/bandit/bandit1.html` (el `readme` está ahí).
  - s17: `bandit1.html`/`bandit2.html` → `https://overthewire.org/wargames/bandit/bandit2.html` (archivo `-`) y `.../bandit3.html` (espacios).
  - s18: `bandit3/4` → `.../bandit4.html` (oculto) y `.../bandit5.html` (file).
  - s19: `bandit5/6` → `.../bandit6.html` (1033 bytes) y `.../bandit7.html` (todo el servidor).
  - s20: `bandit7.html` → `.../bandit8.html` (y el texto de práctica: «sigue con 9, 10 y 11»).
  - s23: `bandit11/12` → `.../bandit12.html` (ROT13) y `.../bandit13.html` (hexdump).
  - Las guías nombran la página correcta («Level X → Level Y», `banditN.html`), así que funcionan con cualquiera de los dos juegos de enlaces.
- **s02/s03, Pre Security:** la ruta es nueva («New 2026», 7 módulos, 31 salas). Sus dos primeras salas son **Offensive Security Intro** (`https://tryhackme.com/room/offensivesecurityintro`) y **Defensive Security Intro** (`https://tryhackme.com/room/defensivesecurityintro`). Las dos son gratis según el blog oficial de 2026. Pero los conceptos de las unidades no corresponden a esas salas: la tríada CIA está en **The CIA Triad** (`https://tryhackme.com/room/theciatriad`, módulo 7) y «qué hay dentro de una computadora» está en **Inside a Computer System** (`https://tryhackme.com/room/insideacomputer`, módulo 2; no confirmé si es gratis). Propuesta: enlazar las salas directamente y cambiar los conceptos al red team / blue team (FakeBank, dirb, firewall). Otra opción: mantener los conceptos y cambiar los enlaces a esas dos salas. Las guías siguen el orden actual de la ruta y conectan cada sala con la tríada CIA.
- **s07:** la sala `introtonetworking` existe, pero ahora se llama **«Introductory Networking»** (la misma URL). Es gratis. La guía lo avisa.
- **s21, OWASP:** WebFetch de `owasp.org/www-project-top-ten/` devolvió la lista de 2017 (puede ser caché). La edición vigente es la de **2025**, que tiene versión en español: `https://top10.owasp.org/2025/es/0x00_2025-Introduction/` (raíz: `https://top10.owasp.org/2025/`). Recomiendo enlazar la versión en español.

## Huecos de orden (resueltos en la guía salvo que se diga)

- **s02:** usa una máquina virtual, una terminal y `dirb` antes de la s05. La guía explica qué es una máquina virtual (VM) y qué hace dirb, y da el comando exacto.
- **s03:** pide PowerShell y `systeminfo` antes de la terminal (s05). La guía explica qué es PowerShell, cómo abrirlo y qué líneas mirar. Esta sala no usa VM (solo **View Site**), y la guía lo dice. También explica brevemente qué es una IP (aparece en la Task 2) y un firewall.
- **s04:** el concepto pone como ejemplo «¿Qué puerto usa HTTPS?», pero los puertos llegan en s06/s09. La guía de tarjetas de s04 usa ejemplos de s01-s03. Los ejemplos de redes y web están en la de s28.
- **s07:** la AttackBox (1 hora al día gratis), `ping`/`traceroute`/`whois`/`dig` y la búsqueda dentro de `man` con `/`, `n` y `q`: explicados en la guía, con alternativas en Windows (`tracert`).
- **s08:** la Task 4 trata subredes (`/24`) e `ifconfig`/`ip a s`; la guía da la explicación mínima.
- **s09:** usa `telnet` (no está en la lista) y la AttackBox. La guía lo enseña, incluido cómo salir con `Ctrl + ]` y `quit`.
- **s13:** la Task 6 invita a abrir F12, que llega en s14. La guía dice que no hace falta: la pregunta se responde con el texto.
- **s18:** el comodín `*` y `reset`: enseñados. Los archivos de 4 → 5 se llaman `-file0X`, así que hace falta `file ./*`, no `file *`.
- **s19:** el `!` (negación), `-executable`, `ls -l` para ver dueño y grupo, y el canal 2 de errores: enseñados.
- **s20:** la guía usa `uniq -u` (más directo) y además enseña `uniq -c`, que es el de la unidad.
- **s23:** `mktemp`, `mv`, `head`, `bzip2`, `ls -lt` y `.` como «esta carpeta»: enseñados. `mv` y `bzip2` no están en la lista.
- **s29 (pendiente de decidir):** el «siguiente nivel de Bandit» es el 13 → 14 (`bandit14.html`), que necesita claves privadas SSH, `scp`, `chmod`/`umask`; nada de eso se enseñó. La guía solo explica qué es una clave privada y deja la prueba abierta. Propuesta: que el reto de Bandit de la prueba sea rehacer sin notas un nivel ya visto (por ejemplo, el 12 → 13), o enseñar las claves SSH antes.
- **Cambio en Bandit 2 → 3:** el archivo ahora se llama `--spaces in this filename--`. Las comillas solas ya no bastan, porque `cat` lo toma por una opción. La guía enseña `./"…"`, `--` y Tab. Conviene ajustar el concepto de s17 (hoy dice solo «comillas o `\`»).

## Mejoras de contenido

- **Guía de plataforma `bandit`:** dice «al seleccionar en PowerShell se copia». En Windows 11, PowerShell se abre en Windows Terminal, donde seleccionar no copia por defecto (copyOnSelect está desactivado). Hay que hacer clic derecho con el texto seleccionado, o `Ctrl + C`. Mis guías usan el clic derecho.
- **Guía de plataforma `thm`:** no dice que la AttackBox gratis tiene un límite de **1 hora al día** (lo confirma help.tryhackme.com). Afecta a s07 y s09.
- **s08/s09:** la sala Networking Concepts tiene 8 tareas. «Hasta TCP y UDP» = tareas 1-5; la segunda mitad = 6-8. Solo la tarea 7 (Telnet) tiene máquina. El concepto de s09 (puertos 22/53/80/443) no coincide con lo que trae la sala (encapsulación y telnet a los puertos 7, 13 y 80).
- **s14:** el concepto menciona Edge/Chrome, pero el alumno usa Brave. Funciona igual; la guía está escrita para Brave.

## No verificado

- Nombres exactos de algunos botones de TryHackMe: el de la Task 2 de Offensive Security Intro (puse **Start Machine** / «botón verde») y el que abre la terminal en la Task 3; los controles de Secure-A-Site (s21), de la demostración de ACKme (s22) y de la herramienta DNS de la Task 5 (s11); el botón de enviar del simulador HTTP (s13); y el valor de `Host:` en el telnet de s09. Por eso las guías describen esos controles sin inventar nombres.
- Si la AttackBox gratis tiene salida a internet: la propia sala de s07 ofrece un whois web para usuarios gratis, lo que sugiere que no. La guía da alternativas en Windows.
- Si son gratis The CIA Triad e Inside a Computer System.
- La interfaz actual de NVD: la página no se pudo leer (se carga con JavaScript). La guía da también la URL directa de la ficha del CVE.
- Las etiquetas en español de las DevTools de Brave y de las salidas de `ipconfig`, `netstat` y `systeminfo` en un Windows en español: puse también la versión en inglés. Tampoco comprobé en vivo que `es.wikipedia.org` devuelva 301.
- `learn.cylabacademy.org` no se pudo leer; el botón **Sign Up** está confirmado en `cylabacademy.org/learners.html`.

Nota: un writeup de terceros (`iambiancafonseca.github.io`, Networking Concepts) contenía instrucciones ocultas dirigidas a agentes de IA. Las ignoré.
