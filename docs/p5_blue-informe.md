# Fase 5 · Especialidad «blue» (Defensa: SOC, detección y respuesta) — informe

Archivo: `p5_blue.js` (8 unidades p5blue01–p5blue08, PRACTICE y UNIT_GUIDES). La validación con node imprime 8. Todos los índices de PRACTICE existen en `links`. Cada unidad tiene 3 preguntas, con la respuesta correcta en posiciones variadas, y entre 2 y 3 guías de 5 a 8 pasos.

## Ruta
1. **p5blue01 · SOC L1 → L2 y triaje**: la ruta SOC Level 1 de TryHackMe, las salas de triaje y reporte, el SOC Simulator y una plantilla de nota de triaje en UTC.
2. **p5blue02 · Registros**: Event IDs clave (4624/4625 y Logon Type, 4672, 4688, 4720, 4732, 1102, 7045, 4104). Sysmon instalado en la propia laptop con sysmon-config, y auth.log/journalctl en Kali.
3. **p5blue03 · SIEM con Splunk**: SPL explicado (stats, table, sort, where, timechart, rare) y la equivalencia en KQL. Salas de TryHackMe con datos BOTS y Splunk Free en la laptop, indexando sus propios logs.
4. **p5blue04 · Sigma y ATT&CK**: anatomía de una regla, regla propia para whoami, conversión con sigconverter.io o sigma-cli, prueba en Splunk, tuning y capa en ATT&CK Navigator.
5. **p5blue05 · Red avanzada**: Wireshark a fondo, Zeek y Suricata en Kali, y ejercicios de malware-traffic-analysis.net (manejados con seguridad dentro de Kali), más PacketDetective de CyberDefenders.
6. **p5blue06 · Forense**: artefactos de Windows con las EZ Tools (PECmd, LECmd y Timeline Explorer sobre la propia laptop) y Volatility 3 (info, pslist, pstree, cmdline, netscan, malfind), con línea de tiempo del lab Amadey.
7. **p5blue07 · Threat hunting, CTI y YARA**: marco PEAK, caza por hipótesis y por línea base en el propio Splunk, YARA en Kali con archivos de prueba inofensivos y pivote de hashes en MalwareBazaar y ATT&CK.
8. **p5blue08 · Proyecto final**: investigación completa de un lab gratis de CyberDefenders («Lockdown», de red, memoria y malware) o de BTLO, un informe profesional en 8 apartados y la comparación con precios de BTL1, SAL1 y CDSA.

## Coste (verificado en noviembre de 2026)
- **Gratis:** Sysmon, sysmon-config, Splunk Enterprise (prueba de 60 días y luego licencia Free permanente de 500 MB al día), cursos gratis de Splunk, SigmaHQ, sigconverter.io, sigma-cli, ATT&CK Navigator, Zeek, Suricata (con las reglas ET Open), Wireshark, malware-traffic-analysis.net, EZ Tools, Volatility 3 (2.28.x en PyPI), YARA, MalwareBazaar, labs «Community» de CyberDefenders (cuenta Free; tiempo de nube limitado) y los «challenges» de BTLO.
- **TryHackMe Premium:** €10,50 al mes pagando el año (€126). Es necesario: casi todas las salas de la especialidad son Premium (Splunk, Sigma Language, Wireshark: Traffic Analysis, Zeek, Volatility, Incident Handling With Splunk, Splunk 2…).
- **CyberDefenders CyberRange:** US$25 al mes (opcional).
- **BTLO PRO** (investigations): £15 al mes, £144 al año (opcional).
- **BTL1** (Centri): £399, con curso de 4 meses, 23 labs, examen práctico de 24 h, una repetición y validez de por vida.
- **SAL1** (TryHackMe): unos €301 según la página de la certificación, con una repetición gratis y descuento para Premium. Hay discrepancias: la tabla de esa misma página dice «from $349», y el descuento aparece como 25 % en la página y 15 % en el blog.
- **HTB CDSA:** el voucher suelto cuesta unos US$210 (cifra de una fuente secundaria). Hay que sumar el acceso a la ruta SOC Analyst: Student US$10 al mes, Silver US$30 al mes, o Silver anual US$550 con vouchers incluidos (precios desde el 12-10-2026).

## Hallazgos que cambian recomendaciones habituales
- **Security Blue Team ahora se llama Centri.** La URL de BTL1 redirige a centri.org y BTLO sigue en blueteamlabs.online.
- **LetsDefend se integra en Hack The Box.** Desde el 15 de octubre de 2026 ya no vende planes anuales y su contenido pasa a HTB Academy y HTB Labs. Por eso no lo uso como recurso principal; se explica en p5blue08.
- **La ruta SOC Level 1 de TryHackMe se renovó** (anuncio del 4-11-2025). Ahora tiene 14 módulos y salas nuevas: «Windows Logging for SOC», «SOC L1 Alert Triage»… La ruta SOC Level 2 existe, con 15 módulos.
- **YARA está en modo mantenimiento y su sucesor es YARA-X.** Se menciona, pero la práctica usa `yara` de Kali.

## No verificado
- **Tier de varias salas:** no pude confirmar si son gratis o Premium «SOC L1 Alert Triage», «SOC L1 Alert Reporting», «SOC L2 Alert Triage», «Windows Logging for SOC», «Linux Logging for SOC», «Threat Hunting: Introduction», «Threat Hunting With YARA» y «Windows Forensics 1». Sus páginas no lo indican. Tampoco sé qué escenarios del SOC Simulator entran en cada plan.
- **Acceso gratis en CyberDefenders:** las fichas de PacketDetective, Amadey y Lockdown no dicen si son gratis. Lockdown sale sin la etiqueta «Premium» en el listado y PacketDetective aparece como lab gratis en una guía de terceros. La guía le pide al alumno que lo compruebe.
- **Precio de la SAL1:** €301 frente a «from $349», y el formato exacto (80 preguntas y 2 escenarios, de una fuente secundaria). En la app no di el número de preguntas.
- **Precio del voucher CDSA:** unos US$210 según una fuente secundaria, que avisa de que podría cambiar tras el 12-10-2026.
- **Interfaces no confirmadas:** botón «Download Sysmon» de Sysinternals; nombre exacto del CSV «…Timeline» de PECmd; controles de capa y técnica de ATT&CK Navigator, que describo por ubicación salvo «Create New Layer» y «Enterprise».
- **Detalles de Kali:**
  - si `zeek` de Kali (5.1.1) queda en el PATH o en `/opt/zeek/bin` (la guía cubre los dos casos);
  - si `suricata-update` viene con el paquete `suricata` (la guía da la alternativa);
  - que `/var/log/auth.log` exista en Kali reciente (la guía da la alternativa `journalctl`).
- **Comandos de memoria, sin ejecutar aquí:** `zeek -C -r` con `frameworks/files/hash-all-files`, `vol ... --pid` y `-r csv`.
- **Nombres de campos SPL** (Account_Name, Image, CommandLine): dependen de cómo indexa Splunk los logs locales. La guía enseña a comprobarlos en «Interesting Fields».
- **Precio mensual de TryHackMe** (pago mes a mes): no lo confirmé, solo el anual.
