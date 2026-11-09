# Informe · Bloque Fase 3 (p3u01–p3u20) · archivo `guias_p3.js`

Verificado en noviembre de 2026. Todas las salas de mi bloque existen hoy y pertenecen a la ruta gratuita **Cyber Security 101** de TryHackMe (guía "free_path" y outline del path). Confirmados los slugs actuales y los títulos de tarea de cada sala.

## Enlaces a cambiar

- **p3u13 (phishing)** — Enlace actual: `tryhackme.com/room/securityawarenessintro` ("Security Awareness"). **Problema:** la sala **no enseña a analizar un correo de phishing**: cubre concienciación general (Have I Been Pwned, coste de filtraciones, tipos de atacante). No toca cabeceras ni SPF/DKIM/DMARC, que es justo el objetivo de la unidad. **Reemplazo gratuito verificado:** sala **"Phishing Analysis Fundamentals"** → `https://tryhackme.com/room/phishinganalysisfundamentals` (enseña anatomía del correo, cabeceras, SPF/DKIM/DMARC). Alternativa también gratis: **"Phishing Emails 1"** → `https://tryhackme.com/room/phishingemails1tryoe`. Mientras no se cambie el enlace, mi guía cubre el objetivo combinando la sala actual con el análisis de cabeceras en Gmail ("Mostrar original") que los propios pasos 2–3 de la unidad ya piden.

- **p3u18 (CVSS)** — Enlace actual: calculadora CVSS **v3.1** de NVD (`nvd.nist.gov/vuln-metrics/cvss/v3-calculator`). **Estado:** sigue activa y es válida para aprender. **Aviso:** desde 2023 el estándar vigente es **CVSS v4.0** (lo mantiene FIRST), cuya calculadora oficial está en `https://www.first.org/cvss/calculator/4.0`. NVD no aloja una calculadora v4.0 propia equivalente. No cambié el enlace (v3.1 es correcto para el nivel), pero conviene mencionar v4.0 como lo actual. La guía de plataforma `nvd` ya explica la v3.1 botón a botón, así que mi guía de unidad se centra en la estructura del informe.

## Huecos de orden (cosas usadas antes de enseñarse)

- **p3u01** usa **`dirb`** (escáner de directorios) y no estaba en la lista de lo enseñado. **Resuelto en la guía:** explico qué es (prueba nombres de página comunes para hallar páginas ocultas) y cómo leer su salida (líneas con `+`).
- **p3u04** introduce **`whois`, `nslookup`, `dig`, `ping`, `traceroute`, `telnet`** (ninguno enseñado antes; `nc` sí, en s10). **Resuelto:** cada uno se enseña en su paso con sintaxis y para qué sirve. Es su primera aparición y la unidad va de recon, así que es el sitio natural.
- **p3u06 (Snort)** usa **`sudo`** de forma intensiva, pero según la lista `sudo` "se enseña" en p3u16 (posterior). **Resuelto:** defino `sudo` ("super user do", ejecutar como administrador) dentro de la guía de p3u06, y lo vuelvo a reforzar en p3u16. Propuesta de contenido: mover la primera mención formal de `sudo` a p3u06 en la lista de prerrequisitos.
- **p3u08 (Juice Shop)** usa **inyección SQL** (se enseña en p3u09) y **XSS** (p3u10), ambas **después**. **Resuelto:** aviso explícito en la guía de que esas técnicas se explican a fondo en las dos unidades siguientes y recomiendo volver al reto tras verlas. No reordené porque Juice Shop es un recorrido amplio y sirve de aperitivo.
- **p3u11 (autenticación)** usa **Burp Intruder**, que no se había presentado (en Fase 2 se vio Burp general y en p3u07 Repeater). **Resuelto:** explico Intruder en un paso (repite la petición cambiando un valor por cada palabra de una lista; ordenar por "Length" para ver la respuesta distinta).
- **p3u15 (Vulnversity)** usa **`gobuster`**, no enseñado (sí `dirb` si se acepta p3u01). **Resuelto:** lo presento como "un `dirb` más rápido" con su sintaxis (`dir -u -w`). También reutiliza `nc -lvnp` (s10) y `find -perm` setuid (Bandit, p2u15), ya conocidos.

## Mejoras de contenido

- **p3u03**: el único enlace es MITRE; la Cyber Kill Chain no tiene recurso propio. No hace falta (la app ya explica el concepto y mi guía la trabaja con el ejemplo de phishing), pero se podría añadir el link de Lockheed Martin como lectura opcional.
- **p3u12**: la sala revampeada "Intro to Cyber Threat Intel" **no cubre la pirámide del dolor** (sí STIX/TAXII, ciclo CTI, MITRE). El paso de la unidad "dibuja la pirámide del dolor" se apoya solo en la explicación de la propia app. Mi guía lo mantiene como reflexión; conviene que el concepto quede bien explicado en el texto de la unidad, no en la sala.
- **p3u17 (Windows PrivEsc)**: la sala `windows10privesc` es correcta y gratuita, pero es densa para un principiante. La guía la plantea tarea por tema sin dar comandos de explotación, solo el mapa de configuraciones y sus correcciones (coherente con el enfoque defensivo del curso).

## No verificado

- No pude **leer directamente** varias páginas de TryHackMe con la herramienta (bloqueo del clasificador en Linux PrivEsc y Windows PrivEsc; TryHackMe además no sirve bien el contenido completo a lectores automáticos). Los **títulos de tarea y herramientas** de esas dos salas los tomé de la lectura parcial lograda y de conocimiento del curso; conviene una verificación visual rápida al abrir cada sala.
- Para **p3u13** confirmé por búsqueda que "Phishing Analysis Fundamentals" y "Phishing Emails 1" existen, pero no pude abrir sus páginas para listar tareas; el mapeo exacto de tareas quedaría por confirmar si se adopta el cambio.
