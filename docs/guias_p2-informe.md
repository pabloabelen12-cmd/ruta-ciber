# Informe guias_p2 (Fase 2: p2u01–p2u24)

Archivo: `guias_p2.js` (24 entradas, 46 guías, todas con 4-9 pasos y `learn`). Validado con `node --check` y simulando el formateador de la app (`fmt` en `app2.js`: el negrita no admite `*` dentro, así que «Todos los archivos (*.*)» va fuera del negrita).

## Enlaces a cambiar

**Bandit: todos los enlaces del bloque apuntan a la página anterior.** En OverTheWire, `banditN.html` es «Level N-1 → Level N». La app llama «nivel N» a lo que se juega como banditN, cuyo enunciado está en `bandit(N+1).html`. Las guías dicen «abre la página Level 13 → Level 14 (`bandit14.html`)», así que siguen siendo correctas cuando se corrijan los enlaces.
- p2u07: `bandit13.html` → https://overthewire.org/wargames/bandit/bandit14.html (ahora abre el nivel del hexdump).
- p2u09: `bandit14`/`bandit15` → `bandit15.html` (puerto 30000) y `bandit16.html` (TLS 30001).
- p2u12: `bandit16`/`bandit17` → `bandit17.html` (31000-32000) y `bandit18.html` (diff).
- p2u15: `bandit18`/`19`/`20` → `bandit19.html` (.bashrc), `bandit20.html` (setuid) y `bandit21.html` (suconnect).
- Fuera de mi bloque pasa lo mismo: s17 (1,2→2,3), s18 (3,4→4,5), s19 (5,6→6,7), s20 (7→8…11) y s23 (11,12→12,13). s16 (`bandit0.html`) está bien.

**TryHackMe:**
- p2u02: Pre Security se rehízo el 18 feb 2026. Ahora tiene 31 salas y **17 son Premium**. Las 14 gratis: Offensive Security Intro, Defensive Security Intro, Careers in Cyber, Inside a Computer System, Operating Systems: Introduction, Windows Basics, Data Representation, Data Encoding, What is Networking?, Intro to LAN, DNS in Detail, HTTP in Detail, The CIA Triad y Cryptography Concepts. La guía las lista. La ruta antigua sigue disponible por ahora en https://tryhackme.com/path/outline/presecuritylegacy.
- p2u06: **Linux Fundamentals Part 2 y Part 3 ahora son Premium.** Alternativa gratis verificada: https://linuxjourney.com/lesson/file-permissions y https://linuxjourney.com/lesson/modifying-permissions. La guía añade práctica de chmod en la terminal de CyLab. Si se mantienen las salas, sus URL directas son https://tryhackme.com/room/linuxfundamentalspart2 y …part3.
- p2u13: el enlace de búsqueda de WF1 puede cambiarse por la URL directa https://tryhackme.com/room/windowsfundamentals1xbx (gratis).
- p2u17: **How Websites Work es Premium.** Alternativa en español: https://developer.mozilla.org/es/docs/Learn_web_development/Getting_started/Web_standards/How_the_web_works. La guía añade una mini-web en el Bloc de notas. Web Application Basics sigue gratis.

**Otros:**
- p2u03/p2u04: en vez de la portada, enlazar el índice del curso: https://www.professormesser.com/network-plus/n10-009/n10-009-video/n10-009-training-course/. Videos:
  - …/ipv4-subnet-masks-n10-009/
  - …/calculating-ipv4-subnets-and-hosts-n10-009/
  - …/dhcp-n10-009/
  - …/arp-and-dns-poisoning-n10-009/
  - …/network-address-translation-n10-009/
- p2u20: OWASP ya publicó la **Top 10:2025** (https://owasp.org/Top10/2025/), y A01 Broken Access Control sigue en 1.º lugar. El concepto dice «del OWASP Top 10 de 2021». Propongo «de 2021 y de 2025». La página `owasp.org/www-project-top-ten/` que leí estaba desactualizada (mostraba la de 2017).
- p2u20, URL de los laboratorios:
  - https://portswigger.net/web-security/access-control/lab-unprotected-admin-functionality
  - https://portswigger.net/web-security/access-control/lab-unprotected-admin-functionality-with-unpredictable-url

## Huecos de orden (enseñados dentro de la guía)

- p2u01: `/` para buscar dentro de `man`; Shodan y VirusTotal (simulados en la sala).
- p2u04: IP pública con `nslookup myip.opendns.com resolver1.opendns.com` (nslookup ya se vio en s11).
- p2u07: **scp** (`-P` mayúscula), **head**, **icacls** como «chmod 600» de Windows, y `mkdir`/`cd` en PowerShell. Sin ellos el nivel no se puede hacer: el servidor bloquea `ssh` a localhost, así que hay que copiar la llave a Windows.
- p2u08: abrir PowerShell en una carpeta escribiendo `powershell` en la barra de direcciones del Explorador.
- p2u09: `-quiet` de `openssl s_client`, para evitar DONE/RENEGOTIATING/KEYUPDATE.
- p2u11: **Get-FileHash**. Las prácticas de las tareas 9 y 11 de Crypto 101 necesitan herramientas que todavía no se han visto; la guía dice que se dejen pendientes.
- p2u12: **nmap** (`-p rango`, `-sV`) antes de p3u05, solo contra localhost en Bandit y con aviso ético. También guardar la llave con el Bloc de notas (salto de línea final, «Todos los archivos») e icacls.
- p2u15: `nc -l puerto` (escuchar), `id`/euid, abrir dos PowerShell y colocarlas con Win+←/→.
- p2u16, p2u17, p2u24: guardar con el Bloc de notas usando «Todos los archivos» para que no termine en `.txt`.
- p2u23: `python3` en Linux, `grep -r`, `sha256sum`, **Burp Intercept on/Forward/Drop** (antes de p3u07), `substring` de JavaScript y en Wireshark Copy → «…as Printable Text».
- p2u24: lo básico de Markdown (`#` y bloques de código con 4 espacios).

## Mejoras de contenido

- **p2u11:** Crypto 101 es de dificultad Medium y sus prácticas usan herramientas no enseñadas. Propongo añadir antes Cryptography Concepts (gratis, Easy, de Pre Security), o sustituir Crypto 101 por ella.
- **p2u01:** la sala Search Skills cambió y **ya no enseña operadores de Google**. Ahora trae Shodan, VirusTotal, CVE, man y GitHub en sitios simulados. La segunda guía cubre los operadores.
- **p2u04:** N10-009 no tiene un video solo de ARP. Se usa la primera parte de «ARP and DNS Poisoning».
- **p2u17:** ya está dentro de Pre Security («How Websites Work»), así que se solapa con p2u02.
- **p2u18:** SQLBolt no tiene «Lesson 5»; en su lugar está «SQL Review: Simple SELECT Queries». La lección 6 es de JOINs.
- **p2u23 (picoCTF):** 7 retos Easy, todos comprobados en `learn.cylabacademy.org/library?search=<nombre>`:
  - PW Crack 1 (General Skills)
  - Big Zip (General Skills)
  - dont-use-client-side (Web)
  - IntroToBurp (Web)
  - interencdec (Cryptography)
  - Verify (Forensics)
  - Ph4nt0m 1ntrud3r (Forensics)

  Descartados por ser Medium: plumbing, Packets Primer, Python Wrangling y caesar.
- **PLATFORM_GUIDES desactualizadas:**
  - messer: no existe el menú «Training Courses»; es **N10-009 Network+ → Free Network+ Videos**.
  - portswigger: el interruptor ahora dice **Intercept off / Intercept on** (no «Intercept is off»).
  - sqlbolt: no hay «Show solution» ni «Continue»; son el enlace **Solution** y **Next – SQL Lesson N…**.
  - thm: muchas salas dicen ahora **Start Lab Machine** en vez de «Start Machine».
- **p2u09:** el comando `man s_client` puede necesitar `man openssl-s_client`; la guía lo menciona.
- **p2u13:** para abrir el registro de Seguridad, el Visor de eventos debe ejecutarse como administrador; la guía lo explica.

## No verificado

- **Gratis o Premium:** en Search Skills, Encryption - Crypto 101, Windows Fundamentals 1 y 2, Linux Fundamentals Part 1, Web Application Basics y Traffic Analysis Essentials no apareció ningún texto Premium. Las doy por gratis, pero no lo vi con una cuenta gratuita.
- **Burp:** el texto «Use Burp defaults» de la primera pantalla. La documentación solo dice Next → Start Burp.
- **Wireshark 4.6:** si el instalador aún tiene la página USBPcap, y el texto exacto de las opciones de Npcap.
- **Textos de Windows en español:** «Grupo usado solo para denegar», la casilla del filtro de Id. de evento, «Adaptador de LAN inalámbrica Wi-Fi» y «Concesión obtenida».
- **Brave Search:** si admite `filetype:`.
- **Retos y niveles (método sacado de mi conocimiento, no de cada página):**
  - Detalles internos de Ph4nt0m 1ntrud3r y Verify.
  - El nombre `suconnect`. La guía pide comprobarlo con `ls`.
  - `nc -l puerto` en la netcat de Bandit.
  - Que `-quiet` desactiva los CONNECTED COMMANDS. Viene de lo que recuerdo de la página man; no lo comprobé en vivo.
- **Bloqueo de ssh a localhost en Bandit 13→14:** lo confirma un walkthrough reciente, no el texto oficial del nivel.
- **Pasos de las simulaciones de TryHackMe:** no detallé los de la tarea 3 de Traffic Analysis Essentials.

Nota de método: TryHackMe y OverTheWire bloquean `curl` desde aquí y los leí con WebFetch. La biblioteca de CyLab no cargaba con WebFetch, así que la leí con el Chrome conectado del usuario (Claude in Chrome): solo búsquedas y abrir las fichas de los retos, sin revelar pistas ni enviar nada. Cerré la pestaña al terminar.
