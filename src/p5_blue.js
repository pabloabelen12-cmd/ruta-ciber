/* Fase 5 · Especialidad «blue»: Defensa (SOC, detección y respuesta a incidentes).
   8 unidades p5blue01–p5blue08. Recursos y precios verificados en noviembre de 2026.
   Todo lo que genere actividad sospechosa se hace SOLO en tu propia laptop o en
   laboratorios autorizados (Ley 53-07 de República Dominicana). */
P5.push(
  { id:"p5blue01", track:"blue", mod:"SOC", lvl:4, blocks:3,
    title:"Del SOC nivel 1 al nivel 2: triaje de alertas",
    goal:"Entender qué hace cada nivel de un SOC y triar alertas con un método repetible, en la ruta SOC Level 1 y en el simulador.",
    links:[
      ["Ruta «SOC Level 1» (TryHackMe)","https://tryhackme.com/path/outline/soclevel1"],
      ["Sala «SOC L1 Alert Triage»","https://tryhackme.com/room/socl1alerttriage"],
      ["Sala «SOC L1 Alert Reporting»","https://tryhackme.com/room/socl1alertreporting"],
      ["SOC Simulator (TryHackMe)","https://tryhackme.com/soc-sim"],
      ["Sala «SOC L2 Alert Triage»","https://tryhackme.com/room/socl2alerttriage"]
    ],
    concept:[
      "En un SOC el **analista L1** (nivel 1) recibe la cola de alertas, hace el **triaje** (triage: clasificar rápido) y decide si la cierra o la **escala** (la pasa al nivel siguiente). El **analista L2** investiga a fondo lo escalado, contiene el incidente y ajusta las reglas que hacen ruido.",
      "Cada alerta termina con un veredicto: **verdadero positivo** (ataque real), **falso positivo** (la regla se equivocó) o **verdadero positivo benigno** (la regla acertó, pero era actividad autorizada, como un escaneo del propio equipo de IT). La prioridad sale de cruzar la **gravedad** de la alerta con lo **crítico** del equipo afectado.",
      "Un buen triaje responde siempre lo mismo: qué pasó, en qué equipo, con qué usuario, cuándo, y qué ocurrió justo antes y después. Lo que no está escrito en el ticket no existe: tu nota debe permitir que otra persona repita tu razonamiento.",
      "La ruta **SOC Level 1** de TryHackMe (14 módulos, renovada en noviembre de 2025) es la columna de esta especialidad. Casi todas sus salas son **Premium** (de pago: unos €126 al año). En la Fase 3 ya hiciste «SOC Fundamentals»; ahora pasas a la práctica real."
    ],
    flow:[
      "Lee la alerta completa: regla, equipo, usuario y hora.",
      "Busca contexto: ¿qué hizo ese equipo o usuario antes y después?",
      "Decide: verdadero positivo, falso positivo o benigno, con la evidencia que lo prueba.",
      "Escribe la nota del ticket y escala si hace falta."
    ],
    steps:[
      "Activa TryHackMe Premium y pulsa «Enroll in path» en la ruta SOC Level 1.",
      "Completa los módulos «Blue Team Introduction» y «SOC Team Internals», incluidas «SOC L1 Alert Triage» y «SOC L1 Alert Reporting».",
      "Resuelve un escenario fácil del SOC Simulator con un informe por alerta.",
      "Haz la sala «SOC L2 Alert Triage» para ver qué cambia en el nivel 2.",
      "Crea tu plantilla de nota de triaje: la usarás hasta el proyecto final."
    ],
    hint:"Si dudas entre verdadero y falso positivo, pregúntate qué evidencia concreta te haría cambiar de opinión, y ve a buscarla.",
    quiz:[
      {q:"Salta una alerta de «escaneo de puertos» por el escáner de vulnerabilidades que IT lanza cada lunes con permiso. ¿Cómo la clasificas?",
       o:["Falso positivo","Verdadero positivo que hay que escalar ya","Verdadero positivo benigno: la regla acertó, pero la actividad está autorizada","Falso negativo"],a:2,
       e:"La regla detectó bien un escaneo real, así que no es un falso positivo. Pero la actividad está autorizada: se documenta y se puede proponer una excepción para ese escáner."},
      {q:"¿Qué hace normalmente un analista L2 que no hace un L1?",
       o:["Leer la cola de alertas","Investigar a fondo lo escalado, contener el incidente y ajustar reglas","Cerrar falsos positivos","Abrir tickets"],a:1,
       e:"El L1 clasifica y escala. El L2 profundiza, contiene y mejora la detección para que el L1 reciba menos ruido."},
      {q:"Llegan a la vez dos alertas de igual gravedad: una en la laptop de un pasante y otra en el controlador de dominio. ¿Cuál atiendes primero?",
       o:["La del controlador de dominio, porque ese equipo es más crítico","La del pasante, porque llegó antes en la lista","Da igual, tienen la misma gravedad","Ninguna hasta que lleguen más alertas"],a:0,
       e:"La prioridad combina gravedad y criticidad. El controlador de dominio (el servidor que gestiona todas las cuentas de la empresa) comprometido afecta a toda la organización."}
    ],
    cards:[
      ["¿Qué es el triaje de alertas?","Clasificar rápido cada alerta (real, error o autorizada) y decidir si se cierra o se escala."],
      ["Verdadero positivo benigno","La regla acertó, pero la actividad era legítima y autorizada."],
      ["¿Qué decide la prioridad de una alerta?","Su gravedad cruzada con lo crítico del equipo o usuario afectado."]
    ],
    keys:["El L1 tría y escala; el L2 investiga, contiene y mejora las reglas.","Cada decisión de triaje lleva su evidencia escrita en el ticket."] },

  { id:"p5blue02", track:"blue", mod:"Logs", lvl:4, blocks:3,
    title:"Registros de Windows, Sysmon y Linux",
    goal:"Saber qué evento deja cada acción importante en Windows y Linux, y generar y leer esos eventos en tu propia laptop.",
    links:[
      ["Sala «Windows Logging for SOC»","https://tryhackme.com/room/windowsloggingforsoc"],
      ["Sala «Linux Logging for SOC»","https://tryhackme.com/room/linuxloggingforsoc"],
      ["Sysmon (Microsoft Sysinternals)","https://learn.microsoft.com/en-us/sysinternals/downloads/sysmon"],
      ["Configuración sysmon-config (SwiftOnSecurity)","https://github.com/SwiftOnSecurity/sysmon-config"],
      ["Microsoft: «Appendix L: Events to monitor»","https://learn.microsoft.com/en-us/windows-server/identity/ad-ds/plan/appendix-l--events-to-monitor"]
    ],
    concept:[
      "Un **log** (registro) es la memoria del sistema. En Windows se ven en el **Visor de eventos** y cada evento tiene un **Event ID** (número de evento). Los que más usarás: **4624** inicio de sesión correcto, **4625** fallido, **4672** sesión con privilegios de administrador, **4688** proceso creado, **4720** cuenta creada, **4732** usuario añadido a un grupo local, **1102** registro de auditoría borrado y, en el log System, **7045** servicio instalado.",
      "En el 4624 y el 4625 mira el **Logon Type** (tipo de inicio de sesión): 2 es en el teclado, 3 por red (por ejemplo, una carpeta compartida) y 10 por escritorio remoto (RDP). Cientos de 4625 seguidos y luego un 4624 desde la misma IP es el dibujo típico de una fuerza bruta que acertó.",
      "**Sysmon** (de Microsoft Sysinternals) registra lo que Windows no guarda bien: **ID 1** proceso creado con su línea de comandos completa y su hash, **3** conexión de red, **11** archivo creado, **13** valor del registro modificado y **22** consulta DNS. Necesita un archivo de configuración que decida qué guardar; sin él, mete mucho ruido.",
      "En Linux los inicios de sesión y el uso de `sudo` van a `/var/log/auth.log` (Debian, Ubuntu, Kali) o al diario de **systemd**, que se lee con `journalctl`. PowerShell también deja rastro: el evento **4104** guarda el texto de los scripts ejecutados."
    ],
    flow:[
      "Pregúntate: ¿qué acción del atacante quiero ver?",
      "Elige la fuente: Security, System, Sysmon o auth.log.",
      "Filtra por Event ID y por rango de horas.",
      "Lee los campos clave: usuario, equipo, proceso e IP."
    ],
    steps:[
      "Haz la sala «Windows Logging for SOC».",
      "Genera un 4625 en tu laptop y encuéntralo en el Visor de eventos y con PowerShell.",
      "Instala Sysmon con la configuración de SwiftOnSecurity y encuentra tus eventos 1 y 22.",
      "Haz la sala «Linux Logging for SOC» y lee tus intentos de `sudo` en Kali.",
      "Crea una tarjeta por cada Event ID de esta unidad."
    ],
    hint:"No memorices 50 IDs: domina estos 10 y aprende a buscar el resto en la tabla de Microsoft (enlace 5).",
    quiz:[
      {q:"Ves 300 eventos 4625 en 5 minutos desde la IP 203.0.113.7 y luego un 4624 con Logon Type 10 desde la misma IP. ¿Qué es lo más probable?",
       o:["Un usuario que olvidó su contraseña","Una fuerza bruta por escritorio remoto (RDP) que consiguió entrar","Una actualización de Windows","Un escaneo de puertos sin éxito"],a:1,
       e:"Muchos fallos seguidos desde una IP y luego un éxito de tipo 10 es una fuerza bruta exitosa por RDP. Hay que escalar ya."},
      {q:"¿Qué evento de Sysmon te da la línea de comandos completa de un programa que se ejecutó?",
       o:["ID 3","ID 22","ID 13","ID 1"],a:3,
       e:"El ID 1 (creación de proceso) guarda la línea de comandos, el proceso padre y el hash del ejecutable."},
      {q:"Aparece un evento 1102 a las 3:00 de la madrugada en un servidor. ¿Por qué preocupa?",
       o:["Porque alguien borró el registro de auditoría, algo que hacen los atacantes para tapar huellas","Porque el servidor se reinició","Porque hubo un inicio de sesión fallido","Porque se instaló un servicio"],a:0,
       e:"Microsoft lo clasifica de criticidad media a alta: un borrado del log sin explicación se investiga siempre."}
    ],
    cards:[
      ["Event ID 4625","Inicio de sesión fallido (log Security)."],
      ["Logon Type 10","Inicio de sesión por escritorio remoto (RDP)."],
      ["Sysmon ID 1 y 3","1 = proceso creado con línea de comandos; 3 = conexión de red."],
      ["¿Dónde se ven los usos de sudo en Linux?","En /var/log/auth.log o con journalctl (el diario de systemd)."]
    ],
    keys:["4624/4625 más el Logon Type cuentan quién entró y cómo.","Sysmon da la línea de comandos, la red y el DNS de cada proceso."] },

  { id:"p5blue03", track:"blue", mod:"SIEM", lvl:4, blocks:3,
    title:"SIEM práctico: Splunk y el lenguaje SPL",
    goal:"Buscar, contar y correlacionar eventos en Splunk con SPL, primero en TryHackMe y luego con tus propios registros.",
    links:[
      ["Sala «Splunk: The Basics»","https://tryhackme.com/room/splunk101"],
      ["Sala «Incident Handling With Splunk»","https://tryhackme.com/room/splunk201"],
      ["Sala «Splunk 2» (datos de BOTS v2)","https://tryhackme.com/room/splunk2gcd5"],
      ["Sala «Alert Triage With Splunk»","https://tryhackme.com/room/alerttriagewithsplunk"],
      ["Descargar Splunk Enterprise (prueba de 60 días y luego Free)","https://www.splunk.com/en_us/download/splunk-enterprise.html"],
      ["Cursos gratis de Splunk","https://www.splunk.com/en_us/training/free-courses/overview.html"]
    ],
    concept:[
      "Un **SIEM** (gestión de información y eventos de seguridad) junta los registros de todas las máquinas en un solo sitio para buscarlos y crear alertas. **Splunk** es de los más usados en empresas; **Elastic** es su gran alternativa.",
      "**SPL** (el lenguaje de búsqueda de Splunk) funciona como las tuberías de Linux: primero filtras y luego pasas el resultado a comandos con `|`. Ejemplo: `index=main EventCode=4625 | stats count by Account_Name | sort -count` busca fallos de inicio de sesión, los cuenta por cuenta de usuario y los ordena de mayor a menor.",
      "Comandos clave: `stats` (contar y agrupar), `table` (elegir columnas), `sort`, `where` (filtrar por un cálculo, como `where count > 10`), `timechart` (gráfica en el tiempo) y `top`/`rare` (lo más y lo menos frecuente). Limita siempre el **rango de tiempo** en el selector: buscar en «All time» es lento y ruidoso.",
      "**Boss of the SOC (BOTS)** es la competición de Splunk; sus datos (v1, v2 y v3) son públicos y gratis en GitHub, y TryHackMe los usa en sus salas. En Elastic se busca con **KQL**: `event.code : 4625` equivale a `EventCode=4625`. Cambia la sintaxis, no el método."
    ],
    flow:[
      "Elige índice y rango de tiempo.",
      "Filtra con campo=valor hasta quedarte con pocos eventos.",
      "Agrupa con stats para ver patrones.",
      "Pivota: toma un valor raro y búscalo solo."
    ],
    steps:[
      "Haz «Splunk: The Basics» e «Incident Handling With Splunk».",
      "Haz «Splunk 2» y resuelve sin soluciones la serie de preguntas 100.",
      "Instala Splunk en tu laptop e indexa tus logs Security, System y Sysmon.",
      "Escribe 5 búsquedas SPL propias y guárdalas con lo que responde cada una.",
      "Termina con «Alert Triage With Splunk»."
    ],
    hint:"Si una búsqueda no devuelve nada, quita filtros de uno en uno hasta que aparezcan eventos; luego mira en la barra lateral cómo se llama el campo de verdad.",
    quiz:[
      {q:"¿Qué hace `index=main EventCode=4625 | stats count by src_ip | where count > 20`?",
       o:["Muestra los 20 primeros fallos","Lista las IP de origen con más de 20 inicios de sesión fallidos","Borra los eventos con más de 20 fallos","Cuenta todos los eventos del índice"],a:1,
       e:"Filtra los 4625, cuenta por IP de origen y se queda con las que superan 20: candidatas a fuerza bruta."},
      {q:"Tu búsqueda tarda muchísimo y trae millones de eventos. ¿Qué corriges primero?",
       o:["Añadir más comandos stats","Cambiar a Elastic","Acotar el rango de tiempo y el índice","Reiniciar Splunk"],a:2,
       e:"Menos tiempo y un índice concreto significan menos datos que leer: es la optimización número uno."},
      {q:"¿Qué comando SPL muestra los valores menos frecuentes de un campo, donde suelen esconderse las rarezas?",
       o:["`rare`","`top`","`table`","`sort -count`"],a:0,
       e:"`rare` es lo contrario de `top`. En la caza de amenazas, lo raro merece una mirada."}
    ],
    cards:[
      ["¿Qué hace `| stats count by campo`?","Cuenta los eventos agrupándolos por los valores de ese campo."],
      ["¿Qué es BOTS?","Boss of the SOC: la competición de Splunk, con datos de ataques publicados gratis."],
      ["Splunk Free","Licencia gratis permanente: 500 MB al día, sin alertas ni usuarios."]
    ],
    keys:["SPL: filtrar primero, luego tuberías con stats, table, sort y where.","Acotar el tiempo es la primera optimización."] },

  { id:"p5blue04", track:"blue", mod:"Detección", lvl:4, blocks:2,
    title:"Reglas de detección con Sigma y MITRE ATT&CK",
    goal:"Escribir una regla Sigma, convertirla a SPL, probarla en tu Splunk y ubicarla en el mapa de ATT&CK.",
    links:[
      ["SigmaHQ (repositorio de reglas)","https://github.com/SigmaHQ/sigma"],
      ["Documentación: reglas Sigma","https://sigmahq.io/docs/basics/rules.html"],
      ["sigconverter.io (convertidor web)","https://sigconverter.io/"],
      ["Sala «Sigma Language»","https://tryhackme.com/room/sigmalanguage"],
      ["MITRE ATT&CK Navigator","https://mitre-attack.github.io/attack-navigator/"]
    ],
    concept:[
      "**Sigma** es un formato abierto para escribir una regla de detección una sola vez y convertirla al lenguaje de cualquier SIEM (SPL de Splunk, consultas de Elastic, Sentinel...). Es a los logs lo que Snort es al tráfico de red.",
      "Una regla Sigma es un archivo **YAML** (texto ordenado con sangrías) con tres partes obligatorias: `title`, `logsource` (de qué registro hablamos, por ejemplo `category: process_creation` y `product: windows`) y `detection` (las condiciones y la línea `condition`). Además suele llevar `level` (gravedad), `falsepositives` y `tags` con la técnica ATT&CK, como `attack.t1033`.",
      "Los **modificadores** afinan la comparación: `Image|endswith: '\\whoami.exe'` (el programa termina en whoami.exe) o `CommandLine|contains: ' -enc '`. Una buena regla detecta un **comportamiento**, no un nombre de archivo que el atacante cambia en segundos: recuerda la pirámide del dolor.",
      "El repositorio **SigmaHQ** tiene miles de reglas revisadas por la comunidad: antes de escribir una, busca si ya existe. **ATT&CK Navigator** te deja pintar en la matriz las técnicas que ya cubres con reglas, para ver tus huecos."
    ],
    flow:[
      "Elige una técnica ATT&CK concreta.",
      "Averigua qué deja en los logs: qué evento y qué campo.",
      "Escribe la regla y conviértela a SPL.",
      "Pruébala generando la actividad en tu equipo y anota los falsos positivos."
    ],
    steps:[
      "Haz la sala «Sigma Language».",
      "Lee una regla real de `rules/windows/process_creation` en SigmaHQ y explica cada línea.",
      "Escribe tu regla para `whoami.exe`, conviértela y pruébala en tu Splunk.",
      "Crea una capa en ATT&CK Navigator con las técnicas que ya detectas."
    ],
    hint:"Una regla que nunca probaste no es una regla: genera la actividad tú mismo, en tu equipo, y comprueba que salta.",
    quiz:[
      {q:"¿Qué parte de una regla Sigma dice de qué tipo de registro hablamos?",
       o:["`detection`","`level`","`logsource`","`tags`"],a:2,
       e:"`logsource` indica la categoría y el producto (por ejemplo, creación de procesos en Windows). El convertidor lo usa para saber dónde buscar."},
      {q:"¿Por qué es mejor detectar `CommandLine|contains: ' -enc '` en PowerShell que el hash de un script concreto?",
       o:["Porque los hashes no existen en Windows","Porque detecta un comportamiento, que al atacante le cuesta más cambiar","Porque es más corto","Porque Sigma no admite hashes"],a:1,
       e:"Un hash cambia modificando un solo byte. Ejecutar PowerShell codificado es un comportamiento (TTP) más estable: está más arriba en la pirámide del dolor."},
      {q:"En sigconverter.io, ¿qué eliges en «Target» para obtener una búsqueda de Splunk?",
       o:["Splunk","Sysmon","YAML","Navigator"],a:0,
       e:"El target es el destino (el SIEM). Sysmon es una pipeline: traduce los nombres de campo, no es el destino."}
    ],
    cards:[
      ["Las 3 partes obligatorias de una regla Sigma","title, logsource y detection (con su condition)."],
      ["Modificador `|endswith`","El campo termina en ese texto."],
      ["ATT&CK Navigator","Herramienta web para marcar en la matriz las técnicas que cubres."]
    ],
    keys:["Sigma: escribes una vez y conviertes a cualquier SIEM.","Detecta comportamientos y prueba cada regla antes de darla por buena."] },

  { id:"p5blue05", track:"blue", mod:"Red", lvl:5, blocks:3,
    title:"Análisis de red avanzado: Wireshark, Zeek y Suricata",
    goal:"Investigar un PCAP real de malware: encontrar el equipo infectado, la descarga y el mando y control, con tres herramientas que se complementan.",
    links:[
      ["Sala «Wireshark: Traffic Analysis»","https://tryhackme.com/room/wiresharktrafficanalysis"],
      ["Sala «Network Monitoring with Zeek»","https://tryhackme.com/room/networkmonitoringwithzeek"],
      ["malware-traffic-analysis.net: ejercicios","https://www.malware-traffic-analysis.net/training-exercises.html"],
      ["Suricata: opciones de línea de comandos","https://docs.suricata.io/en/latest/command-line-options.html"],
      ["CyberDefenders: lab «PacketDetective»","https://cyberdefenders.org/blueteam-ctf-challenges/packetdetective/"]
    ],
    concept:[
      "Un **PCAP** es una grabación del tráfico de red. Wireshark te deja leerlo paquete a paquete, pero con miles de paquetes te pierdes: los analistas empiezan por un **resumen** y bajan al detalle solo donde hace falta.",
      "**Zeek** convierte un PCAP en registros de texto por protocolo: `conn.log` (cada conexión), `dns.log`, `http.log`, `ssl.log` (nombres de servidor TLS) y `files.log` (archivos transferidos). **Suricata** es un IDS como Snort: pasa reglas sobre el tráfico y escribe las alertas en `fast.log` y `eve.json`.",
      "Señales típicas de infección: **beaconing** (balizas: conexiones a la misma IP cada pocos segundos o minutos, muy regulares), dominios raros o recién creados, descargas de `.exe` o `.dll` por HTTP y conexiones a una IP directa sin consulta DNS antes.",
      "Los PCAP de malware-traffic-analysis.net contienen **malware real** y su autor avisa del riesgo de infección si los manejas en Windows. Trabájalos dentro de Kali (WSL), nunca abras los archivos que extraigas y no los compartas. Analizar para defender es legal; usar ese malware contra otros es delito (Ley 53-07)."
    ],
    flow:[
      "Resumen: ¿qué IP interna habla más y con quién? (conn.log o Statistics).",
      "Alertas: ¿qué dicen las reglas? (fast.log de Suricata).",
      "Detalle: abre en Wireshark solo las conexiones sospechosas.",
      "Conclusión: equipo, usuario, dominios o IP maliciosos y hora en UTC."
    ],
    steps:[
      "Haz la sala «Wireshark: Traffic Analysis».",
      "Haz la sala «Network Monitoring with Zeek».",
      "Instala Zeek, Suricata y Wireshark en tu Kali.",
      "Resuelve un ejercicio reciente de malware-traffic-analysis.net y escribe tus respuestas antes de mirar las del autor.",
      "Haz el lab «PacketDetective» de CyberDefenders."
    ],
    hint:"Empieza siempre por el resumen (conn.log o Statistics → Conversations), nunca por el paquete número 1.",
    quiz:[
      {q:"En `conn.log` ves un equipo interno que conecta a la misma IP externa cada 60 segundos exactos durante horas. ¿Qué sugiere?",
       o:["Una actualización de Windows","Beaconing de un malware hacia su servidor de mando y control","Un escaneo de puertos","Tráfico DNS normal"],a:1,
       e:"La regularidad perfecta es típica de un programa automático que pide órdenes a su servidor (C2)."},
      {q:"¿Qué log de Zeek miras para ver el nombre del servidor de una conexión HTTPS?",
       o:["`files.log`","`conn.log`","`dns.log`","`ssl.log`"],a:3,
       e:"`ssl.log` guarda el SNI (Server Name Indication): el nombre que el cliente pidió al abrir la conexión TLS, visible aunque el contenido vaya cifrado."},
      {q:"¿Por qué los PCAP de malware-traffic-analysis.net se trabajan dentro de Kali y no en Windows?",
       o:["Porque contienen malware real que podría infectar Windows si se extrae y se abre","Porque Wireshark no existe en Windows","Porque Zeek solo lee archivos de Windows","Porque pesan menos en Linux"],a:0,
       e:"El propio autor advierte del riesgo en Windows. En Kali los archivos de Windows no se ejecutan por accidente."}
    ],
    cards:[
      ["¿Qué es beaconing?","Conexiones periódicas y regulares de un malware a su servidor de mando y control."],
      ["Zeek: conn.log","Una línea por conexión: IPs, puertos, protocolo, duración y bytes."],
      ["Suricata: fast.log","Las alertas de las reglas, una por línea."],
      ["Filtro de Wireshark para ver peticiones HTTP","`http.request`"]
    ],
    keys:["Resumen primero (Zeek, estadísticas), detalle después (Wireshark).","El malware de los PCAP se queda en Kali y nunca se abre."] },

  { id:"p5blue06", track:"blue", mod:"Forense", lvl:5, blocks:3,
    title:"Forense de Windows y de memoria con Volatility 3",
    goal:"Reconstruir qué se ejecutó en un Windows a partir de sus artefactos y de un volcado de memoria, y ordenarlo en una línea de tiempo.",
    links:[
      ["Sala «Windows Forensics 1»","https://tryhackme.com/room/windowsforensics1"],
      ["Herramientas de Eric Zimmerman (EZ Tools)","https://ericzimmerman.github.io/"],
      ["Documentación de Volatility 3","https://volatility3.readthedocs.io/en/latest/"],
      ["Sala «Volatility»","https://tryhackme.com/room/volatility"],
      ["CyberDefenders: lab «Amadey - APT-C-36»","https://cyberdefenders.org/blueteam-ctf-challenges/amadey/"]
    ],
    concept:[
      "El **forense digital** responde con pruebas qué pasó en un equipo y cuándo. Windows guarda **artefactos** (rastros) sin que nadie lo pida: **Prefetch** (`C:\\Windows\\Prefetch`: qué programas se ejecutaron, cuántas veces y cuándo), **Amcache** y **Shimcache** (programas presentes o ejecutados), archivos **LNK** y **Jump Lists** (qué archivos abrió el usuario), **ShellBags** (qué carpetas vio) y la **$MFT** (la tabla de todos los archivos del disco con sus fechas).",
      "Las herramientas gratis de **Eric Zimmerman** convierten cada artefacto en un CSV: `PECmd` (Prefetch), `AmcacheParser`, `LECmd` (LNK), `MFTECmd` ($MFT) y `EvtxECmd` (logs). **Timeline Explorer** abre esos CSV para ordenarlos y filtrarlos: así nace la **línea de tiempo** (timeline), la columna de cualquier informe.",
      "La **memoria RAM** guarda lo que el disco no: procesos en marcha, conexiones abiertas, comandos y código inyectado. **Volatility 3** analiza un volcado de memoria con plugins: `windows.info`, `windows.pslist`, `windows.pstree` (quién lanzó a quién), `windows.cmdline`, `windows.netscan` y `windows.malfind` (memoria sospechosa de inyección).",
      "Regla de oro: el **orden de volatilidad**. Primero se captura lo que desaparece antes (la memoria) y luego el disco. Se trabaja siempre sobre copias y se anota el hash de cada prueba, para que valga."
    ],
    flow:[
      "¿Qué pregunta respondo? (qué se ejecutó, quién y cuándo).",
      "Elige el artefacto que la responde.",
      "Procésalo a CSV o con el plugin adecuado.",
      "Junta las horas en una línea de tiempo y busca la cadena de hechos."
    ],
    steps:[
      "Haz la sala «Windows Forensics 1».",
      "Analiza el Prefetch de tu propia laptop con PECmd y ábrelo en Timeline Explorer.",
      "Instala Volatility 3 en Kali y haz la sala «Volatility».",
      "Resuelve el lab «Amadey - APT-C-36» con Volatility 3.",
      "Dibuja la línea de tiempo del caso Amadey con al menos 6 eventos."
    ],
    hint:"Un proceso hijo raro en `windows.pstree` (Word o el navegador lanzando PowerShell o cmd) es la primera pista que se busca.",
    quiz:[
      {q:"Quieres saber si `malo.exe` se ejecutó en un equipo y cuándo. ¿Qué artefacto miras primero?",
       o:["ShellBags","Prefetch","El fondo de pantalla","Jump Lists"],a:1,
       e:"Prefetch guarda los programas ejecutados, el número de ejecuciones y las últimas fechas."},
      {q:"En `windows.pstree` ves `WINWORD.EXE` como padre de `powershell.exe`. ¿Qué indica?",
       o:["Nada: Word siempre abre PowerShell","Que Windows se actualizó","Probablemente un documento con macro maliciosa que lanzó PowerShell","Que el usuario abrió PowerShell a mano"],a:2,
       e:"Word no necesita lanzar PowerShell. Esa relación padre-hijo es típica del acceso inicial por documento malicioso."},
      {q:"¿Qué plugin de Volatility 3 lista las conexiones de red del volcado?",
       o:["`windows.netscan`","`windows.pslist`","`windows.info`","`windows.cmdline`"],a:0,
       e:"`windows.netscan` muestra conexiones y puertos con el PID del proceso dueño."}
    ],
    cards:[
      ["¿Qué guarda Prefetch?","Qué programas se ejecutaron, cuántas veces y cuándo."],
      ["`windows.pstree`","Plugin de Volatility 3 que muestra quién lanzó a quién (padre e hijo)."],
      ["Orden de volatilidad","Capturar primero lo que desaparece antes: memoria, luego disco."],
      ["¿Para qué sirve Timeline Explorer?","Para abrir, ordenar y filtrar los CSV de las EZ Tools y montar la línea de tiempo."]
    ],
    keys:["Artefactos de disco = qué pasó; memoria = qué estaba pasando.","Todo hallazgo va a la línea de tiempo con su hora y su prueba."] },

  { id:"p5blue07", track:"blue", mod:"Hunting", lvl:5, blocks:3,
    title:"Threat hunting, inteligencia de amenazas y YARA",
    goal:"Cazar amenazas que no generaron alerta a partir de una hipótesis, pivotar con IOCs y escribir tus primeras reglas YARA.",
    links:[
      ["Sala «Threat Hunting: Introduction»","https://tryhackme.com/room/threathuntingintroduction"],
      ["Marco PEAK de Splunk (threat hunting)","https://www.splunk.com/en_us/blog/security/peak-threat-hunting-framework.html"],
      ["Sala «Threat Hunting With YARA»","https://tryhackme.com/room/threathuntingwithyara"],
      ["Documentación: escribir reglas YARA","https://yara.readthedocs.io/en/stable/writingrules.html"],
      ["MalwareBazaar (abuse.ch)","https://bazaar.abuse.ch/"]
    ],
    concept:[
      "El **threat hunting** (caza de amenazas) busca ataques que **no** dispararon ninguna alerta. Parte de que el atacante ya podría estar dentro y lo busca de forma activa, en vez de esperar a la cola de alertas.",
      "El marco **PEAK** de Splunk ordena la caza en tres fases: **Prepare** (elegir tema e hipótesis), **Execute** (buscar en los datos) y **Act** (documentar, convertir lo encontrado en detección y comunicarlo). Hay tres tipos de caza: por **hipótesis**, por **línea base** (qué es lo normal y qué se sale) y asistida por modelos.",
      "Una buena **hipótesis** es concreta y comprobable: «Si un atacante usa PowerShell codificado (T1059.001), veré eventos Sysmon ID 1 con `-enc` en la línea de comandos, lanzados por un proceso que no es de administración».",
      "La **inteligencia de amenazas** (CTI) te da **IOCs** para pivotar: de un hash a su familia de malware, de la familia a sus técnicas. **YARA** describe archivos maliciosos con cadenas y condiciones para encontrarlos en disco o memoria. El YARA original está en mantenimiento y su sucesor es **YARA-X**, con la misma idea de reglas."
    ],
    flow:[
      "Hipótesis: técnica ATT&CK + rastro que dejaría + dónde lo veré.",
      "Busca en los datos (SPL, Zeek o Volatility).",
      "Confirma o descarta, y documenta las dos cosas.",
      "Act: convierte lo encontrado en una regla Sigma o YARA."
    ],
    steps:[
      "Haz la sala «Threat Hunting: Introduction» y lee el artículo de PEAK.",
      "Escribe 2 hipótesis con el formato de esta unidad y cázalas en tu Splunk.",
      "Haz la sala «Threat Hunting With YARA».",
      "Escribe y prueba en Kali una regla YARA contra archivos de prueba creados por ti.",
      "Pivota en MalwareBazaar un hash de tu ejercicio de la unidad 05 y anota su familia."
    ],
    hint:"Una caza que no encuentra nada también es un resultado: documenta qué buscaste y en qué datos. Demuestra que esa técnica no está presente, o que te faltan registros.",
    quiz:[
      {q:"¿Qué diferencia al threat hunting del triaje de alertas?",
       o:["El hunting busca de forma activa ataques que no dispararon alertas","El hunting solo usa antivirus","El triaje es más avanzado","No hay diferencia"],a:0,
       e:"El triaje reacciona a alertas; la caza sale a buscar lo que las reglas no vieron."},
      {q:"¿Cuál es una hipótesis de caza bien formulada?",
       o:["«Buscar cosas raras»","«Revisar todos los logs de ayer»","«Si hay persistencia por servicios (T1543.003), veré eventos 7045 con rutas en carpetas de usuario»","«Instalar un antivirus nuevo»"],a:2,
       e:"Nombra la técnica, el rastro esperado y la fuente de datos: se puede confirmar o descartar."},
      {q:"En una regla YARA, ¿qué sección es obligatoria?",
       o:["`meta`","`strings`","`import`","`condition`"],a:3,
       e:"Solo `condition` es obligatoria; `meta` y `strings` son opcionales, aunque casi siempre se usan."}
    ],
    cards:[
      ["Las 3 fases de PEAK","Prepare, Execute y Act, con conocimiento en todas."],
      ["Partes de una regla YARA","rule nombre { meta, strings, condition }"],
      ["`yara -s -r regla.yar carpeta`","Busca en la carpeta y subcarpetas (-r) y muestra las cadenas que coinciden (-s)."]
    ],
    keys:["Hipótesis concreta: técnica, rastro y fuente de datos.","Toda caza termina en documentación y, si puede, en una detección nueva."] },

  { id:"p5blue08", track:"blue", mod:"Proyecto", lvl:5, blocks:3,
    title:"Proyecto final: investiga un incidente y elige tu certificación",
    goal:"Investigar un incidente completo en un laboratorio, entregar un informe profesional y decidir tu certificación blue team con precios reales.",
    links:[
      ["CyberDefenders: laboratorios","https://cyberdefenders.org/blueteam-ctf-challenges/"],
      ["CyberDefenders: lab «Lockdown»","https://cyberdefenders.org/blueteam-ctf-challenges/lockdown/"],
      ["Blue Team Labs Online","https://blueteamlabs.online/"],
      ["BTL1 de Centri (antes Security Blue Team)","https://www.centri.org/certifications/blue-team-level-1"],
      ["TryHackMe SAL1","https://tryhackme.com/certification/security-analyst-level-1"],
      ["HTB Academy: ruta SOC Analyst (para la CDSA)","https://academy.hackthebox.com/path/preview/soc-analyst"]
    ],
    concept:[
      "En un trabajo real, el producto de una investigación es el **informe de incidente**: lo leen tu jefe, el equipo técnico y a veces abogados. Debe contar qué pasó, cómo lo sabes, qué impacto tuvo y qué hay que hacer.",
      "Estructura profesional: **resumen ejecutivo** (5 líneas sin tecnicismos), **alcance y datos analizados**, **línea de tiempo** en UTC, **hallazgos** con evidencia, **IOCs**, **mapeo a ATT&CK**, **contención y recomendaciones** y **lecciones aprendidas**.",
      "Certificaciones de entrada (precios de noviembre de 2026): **BTL1** de Centri, £399 con curso, examen práctico de 24 horas, una repetición gratis y validez de por vida; **SAL1** de TryHackMe, unos €301 (con descuento si eres Premium), con preguntas tipo test y escenarios en su SOC Simulator en 24 horas y una repetición gratis; **HTB CDSA**, más exigente: 7 días de laboratorio más informe, tras completar la ruta SOC Analyst de HTB Academy (voucher suelto de unos US$210 más la suscripción).",
      "LetsDefend se está integrando en Hack The Box: desde octubre de 2026 ya no vende planes anuales y su contenido pasa a HTB Academy y HTB Labs. Por eso aquí usas CyberDefenders y Blue Team Labs Online, que tienen laboratorios gratis."
    ],
    flow:[
      "Lee el escenario y define el alcance: qué datos tienes y qué preguntas respondes.",
      "Investiga con el método de cada unidad: logs, SIEM, red y memoria.",
      "Construye la línea de tiempo y mapea cada paso a ATT&CK.",
      "Escribe el informe y revísalo como si fueras el cliente."
    ],
    steps:[
      "Elige un laboratorio gratis de varias etapas (por ejemplo «Lockdown») y resuélvelo con tu método.",
      "Escribe el informe completo con la plantilla de la guía y expórtalo a PDF.",
      "Publica en GitHub una versión sin flags ni respuestas, solo si la plataforma lo permite.",
      "Compara BTL1, SAL1 y CDSA y elige una con fecha y presupuesto.",
      "Comparte conmigo tu informe para revisarlo."
    ],
    hint:"Escribe el resumen ejecutivo al final, cuando ya conoces toda la historia, pero colócalo al principio del informe.",
    quiz:[
      {q:"¿Qué va en el resumen ejecutivo?",
       o:["Todas las búsquedas SPL","Qué pasó, el impacto y qué hacer, en pocas líneas y sin tecnicismos","La lista completa de IOCs","Las capturas de Wireshark"],a:1,
       e:"Lo lee quien decide y no es técnico: necesita la historia, el impacto y la decisión que se le pide."},
      {q:"¿Por qué la línea de tiempo del informe va en UTC?",
       o:["Porque queda más bonita","Porque lo exige Wireshark","Porque así se comparan sin errores eventos de equipos y zonas horarias distintas","Porque UTC es la hora de República Dominicana"],a:2,
       e:"República Dominicana está en UTC−4; los servidores pueden estar en cualquier zona. UTC evita confusiones."},
      {q:"Según lo verificado, ¿qué certificación incluye curso, examen práctico y validez de por vida?",
       o:["BTL1","Ninguna","CDSA, que es tipo test","SAL1, que es solo teoría"],a:0,
       e:"BTL1 incluye 4 meses de curso, un examen práctico de 24 horas y certificación de por vida."}
    ],
    cards:[
      ["Partes del informe de incidente","Resumen ejecutivo, alcance, línea de tiempo, hallazgos, IOCs, ATT&CK, recomendaciones y lecciones."],
      ["¿Cómo se escribe un dominio malicioso en un informe?","Desactivado, para que nadie haga clic: evil[.]example"],
      ["Requisito de la CDSA","Completar al 100 % la ruta SOC Analyst de HTB Academy y tener voucher."]
    ],
    keys:["El informe es el producto: cada hallazgo con su prueba y su hora en UTC.","Elige certificación con precio verificado el día que compres."] }
);

Object.assign(PRACTICE, {
  p5blue01: [
    [0,"Pulsa «Enroll in path». Esta ruta te acompaña toda la especialidad; en esta unidad haz los módulos «Blue Team Introduction» y «SOC Team Internals»."],
    [1,"Completa las 6 tareas y copia a tu cuaderno los campos de una alerta y cómo se prioriza."],
    [2,"Completa la sala y copia la guía de escalado de la tarea «Escalation Guide»."],
    [3,"Pulsa «Launch simulator», elige un escenario fácil y tría todas sus alertas con un informe por cada una."],
    [4,"Hazla después del simulador para comparar el trabajo del L1 con el del L2."]
  ],
  p5blue02: [
    [0,"Completa las 8 tareas y anota cada Event ID que aparezca."],
    [1,"Completa la sala y repite sus comandos en tu propia Kali."],
    [2,"Descarga Sysmon e instálalo en tu laptop siguiendo la guía 2."],
    [3,"Descarga el archivo sysmonconfig-export.xml (la guía 2 te da el comando)."],
    [4,"Busca en la tabla 4624, 4625, 4688, 4720 y 1102 y anota su criticidad."]
  ],
  p5blue03: [
    [0,"Completa la sala para conocer la interfaz de Splunk."],
    [1,"Sigue la investigación por fases de la Kill Chain, pregunta a pregunta."],
    [2,"Resuelve la serie 100 sin ayuda y anota cada búsqueda que funcionó."],
    [3,"Haz la sala al final para unir el triaje de la unidad 01 con SPL."],
    [4,"Descarga el instalador .msi de Windows e indexa tus logs (guía 1)."],
    [5,"Opcional: apúntate gratis a «Intro to Splunk» y «Using Fields» si quieres reforzar."]
  ],
  p5blue04: [
    [0,"Entra en rules → windows → process_creation y lee una regla sobre whoami."],
    [1,"Consulta los campos y los modificadores cuando escribas tu regla."],
    [2,"Pega tu regla, elige Splunk en «Target» y la pipeline de Sysmon."],
    [3,"Completa las 7 tareas de la sala."],
    [4,"Crea una capa Enterprise y marca T1033 y T1110."]
  ],
  p5blue05: [
    [0,"Completa las 11 tareas; anota cada filtro que uses."],
    [1,"Completa la sala; practica zeek-cut sobre cada log."],
    [2,"Elige un ejercicio reciente y resuélvelo dentro de Kali con la guía 2."],
    [3,"Consulta qué hacen -r, -k, -S y -l antes de lanzar Suricata."],
    [4,"Crea tu cuenta gratis y resuelve el lab con Wireshark (guía 3)."]
  ],
  p5blue06: [
    [0,"Completa las 11 tareas, incluido el reto práctico."],
    [1,"Descarga PECmd, LECmd y Timeline Explorer (guía 1)."],
    [2,"Consulta el tutorial de Windows cuando dudes de un plugin."],
    [3,"Completa la sala con el volcado que trae su máquina."],
    [4,"Resuelve el lab con Volatility 3 y monta su línea de tiempo (guía 3)."]
  ],
  p5blue07: [
    [0,"Completa las 7 tareas, incluida la práctica."],
    [1,"Lee el artículo y copia las tres fases y los tres tipos de caza."],
    [2,"Completa las 10 tareas de la sala."],
    [3,"Consulta los modificadores nocase, wide y ascii mientras escribes tu regla."],
    [4,"Busca un hash y lee su ficha sin descargar la muestra (guía 3)."]
  ],
  p5blue08: [
    [0,"Filtra por Content → Community para ver los laboratorios gratis."],
    [1,"Resuelve este caso de varias etapas como proyecto final (guía 1)."],
    [2,"Alternativa: un «challenge» gratis descargable como segundo caso."],
    [3,"Lee el temario y el formato del examen BTL1."],
    [4,"Lee el formato del examen SAL1 y su precio en tu país."],
    [5,"Revisa los 15 módulos de la ruta que exige la CDSA."]
  ]
});

Object.assign(UNIT_GUIDES, {
  p5blue01: [
    { t:"Organiza la ruta SOC Level 1", s:[
      "Entra en la ruta «SOC Level 1» (enlace 1) con tu cuenta. Si eres Free verás candados: esas salas son **Premium**. Mira el precio en tryhackme.com/pricing; en noviembre de 2026 eran unos €10,50 al mes pagando el año entero (€126).",
      "Pulsa **Enroll in path**. La ruta queda en tu panel y TryHackMe va marcando tu progreso.",
      "Revisa la lista: son 14 módulos, desde «Blue Team Introduction» hasta «SOC Level 1 Capstone Challenges». No los hagas de golpe: cada unidad de esta app te dice qué módulo toca.",
      "En esta unidad haz «Blue Team Introduction» y «SOC Team Internals». Las salas que ya hiciste en la Fase 3 salen marcadas; no las repitas.",
      "En «SOC L1 Alert Triage» (enlace 2), tarea **Alert Properties**, copia a tu cuaderno los campos de una alerta: nombre, gravedad, hora, equipo, usuario.",
      "En «SOC L1 Alert Reporting» (enlace 3), tarea **Escalation Guide**, anota en qué casos se escala. Será la base de tu plantilla (guía 3)."
    ], learn:"La ruta SOC Level 1 es tu columna; el triaje empieza por conocer los campos de una alerta y las reglas de escalado." },
    { t:"Tu primer turno en el SOC Simulator", s:[
      "Abre el SOC Simulator (enlace 4) y pulsa **Launch simulator**. Elige un escenario fácil (por ejemplo «Phishing Unfolding», si tu plan lo incluye) y pulsa **Start**. Espera a que cargue.",
      "A la izquierda pulsa **Alert Queue**: es la cola de alertas que van llegando. Pulsa la flecha de cada alerta para desplegarla y ver por qué saltó.",
      "Para trabajar una alerta, pulsa el icono de la cabeza que tiene a la derecha: pasa a **Assigned Alert(s)**, es decir, ahora es tuya.",
      "Investiga en el SIEM del escenario (Splunk, Elastic o Sentinel, según te toque). Aún no sabes SPL a fondo: busca por el nombre del equipo, el usuario o la IP. En la unidad 03 lo aprenderás bien.",
      "Abre el informe del caso (encima de la alerta asignada) y elige **True Positive** o **False Positive**. Rellena los campos con tu evidencia y decide si escalas.",
      "Pulsa **Submit and close alert** y vuelve a la cola. Para aprobar debes identificar todos los verdaderos positivos antes de que se acabe el tiempo.",
      "Al terminar, lee la puntuación y los comentarios de cada informe. Apunta qué alerta clasificaste mal y por qué."
    ], learn:"Triar es asignarte la alerta, investigar el contexto, decidir con evidencia y documentar; el simulador puntúa también el informe." },
    { t:"Tu plantilla de nota de triaje", s:[
      "En tu carpeta «Cuaderno-hacker» crea un documento llamado «plantilla-triaje».",
      "Escribe estos apartados: **Alerta** (nombre y hora en UTC), **Activo** (equipo e IP), **Usuario**, **Qué pasó** (una frase), **Evidencia** (qué buscaste y qué viste), **Veredicto** (verdadero positivo, falso positivo o benigno) y **Acción** (cerrar o escalar, y a quién).",
      "Usa siempre la hora en **UTC** (tiempo universal). República Dominicana está en UTC−4, y los registros de máquinas distintas solo se comparan bien en la misma zona horaria.",
      "Rellénala con una alerta del simulador. Si otra persona no podría repetir tu razonamiento leyendo solo la nota, añade la evidencia que falta.",
      "Haz la sala «SOC L2 Alert Triage» (enlace 5) y añade a la plantilla un apartado **Siguiente paso**: lo que haría un L2 con esa alerta."
    ], learn:"Una nota de triaje buena es repetible: hora en UTC, activo, usuario, evidencia, veredicto y acción." }
  ],
  p5blue02: [
    { t:"Lee tu Visor de eventos y genera un 4625", s:[
      "Pulsa la tecla Windows, escribe «Visor de eventos», haz clic derecho y elige **Ejecutar como administrador**: el log de seguridad solo lo lee un administrador.",
      "A la izquierda abre **Registros de Windows** → **Seguridad**. En el centro verás miles de eventos con la columna **Id. del evento**.",
      "Abre PowerShell normal y escribe `runas /user:usuariofalso cmd`. `runas` ejecuta un programa como otro usuario y `/user:` dice cuál. Cuando pida la contraseña escribe cualquier cosa y pulsa Enter: fallará a propósito. Hazlo solo en tu laptop.",
      "Vuelve al Visor y pulsa **Actualizar**. A la derecha pulsa **Filtrar registro actual...**, escribe `4625` en la casilla «<Todos los Id. de evento>» y pulsa **Aceptar**.",
      "Abre el evento. En la pestaña **General** busca el nombre de la cuenta que falló (usuariofalso), el **tipo de inicio de sesión** (Logon Type) y el motivo del error. Es justo lo que mira un analista.",
      "Ahora por consola. Abre PowerShell **como administrador** y escribe `Get-WinEvent -FilterHashtable @{LogName='Security'; Id=4625} -MaxEvents 5 | Format-List TimeCreated, Message`. `-FilterHashtable` filtra por log e ID, `-MaxEvents 5` trae solo los 5 más recientes y `Format-List` muestra cada evento en líneas legibles."
    ], learn:"El Visor y `Get-WinEvent` filtran por Event ID; un 4625 dice qué cuenta falló, cómo y por qué." },
    { t:"Instala Sysmon en tu laptop", s:[
      "Abre la página de Sysmon (enlace 3) y pulsa el enlace **Download Sysmon**. Descomprime el ZIP en `C:\\Herramientas\\Sysmon`. Dentro verás `Sysmon.exe` y `Sysmon64.exe`; tu laptop usa el de 64 bits.",
      "Abre PowerShell **como administrador** y entra en la carpeta: `cd C:\\Herramientas\\Sysmon`.",
      "Descarga la configuración: `Invoke-WebRequest -Uri https://raw.githubusercontent.com/SwiftOnSecurity/sysmon-config/master/sysmonconfig-export.xml -OutFile sysmonconfig-export.xml`. `-Uri` es la dirección y `-OutFile` el nombre con que se guarda. Esta configuración descarta el ruido normal de Windows.",
      "Instala: `.\\Sysmon64.exe -accepteula -i sysmonconfig-export.xml`. `-accepteula` acepta la licencia y `-i` instala con ese archivo de configuración. Verás que el servicio Sysmon64 se instala y arranca; no hace falta reiniciar.",
      "Genera actividad: abre el Bloc de notas y, en PowerShell, escribe `Resolve-DnsName example.com` (hace una consulta DNS).",
      "En el Visor ve a **Registros de aplicaciones y servicios** → **Microsoft** → **Windows** → **Sysmon** → **Operational**. Filtra por ID 1 y busca `notepad.exe` con su línea de comandos y su hash; luego filtra por ID 22 y busca example.com. Si no sale, abre otra web en Brave y vuelve a mirar.",
      "Por consola: `Get-WinEvent -LogName 'Microsoft-Windows-Sysmon/Operational' -MaxEvents 10 | Format-Table TimeCreated, Id -AutoSize`. Si algún día quieres quitarlo: `.\\Sysmon64.exe -u`."
    ], learn:"Sysmon se instala con `-accepteula -i config.xml` y escribe en Sysmon/Operational: ID 1 procesos, ID 22 consultas DNS." },
    { t:"Logs de Linux en tu Kali", s:[
      "Abre Kali desde el menú Inicio (o escribe `wsl -d kali-linux` en PowerShell).",
      "Haz la sala «Linux Logging for SOC» (enlace 2), sobre todo las tareas **Authentication Logs** y **Using Auditd**.",
      "En tu Kali genera un fallo: `sudo -k` olvida la contraseña de sudo que tenía guardada; luego escribe `sudo ls` y pon una contraseña equivocada a propósito. Después repite con la buena.",
      "Busca el rastro: `ls /var/log/auth.log`. Si existe, escribe `sudo grep -i sudo /var/log/auth.log | tail -n 5`. `grep -i` busca sin importar mayúsculas y `tail -n 5` muestra las 5 últimas líneas.",
      "Si no existe (Kali reciente puede no traer rsyslog), usa el diario de systemd: `sudo journalctl _COMM=sudo --since '15 min ago'`. `_COMM=sudo` filtra por el programa y `--since` limita el tiempo. Verás la línea del intento fallido y la del comando correcto.",
      "Si `journalctl` dice que el sistema no arrancó con systemd, actívalo: `sudo nano /etc/wsl.conf`, añade una línea `[boot]` y debajo `systemd=true`, guarda (Ctrl+O, Enter, Ctrl+X) y en PowerShell escribe `wsl --shutdown`. Al volver a abrir Kali funcionará.",
      "Compara: en Windows el fallo era un 4625 con campos; en Linux es una línea de texto. El SIEM convierte las dos en campos comparables (unidad 03)."
    ], learn:"En Linux, sudo y SSH dejan rastro en auth.log o en journalctl; filtra por programa y por tiempo." }
  ],
  p5blue03: [
    { t:"Instala Splunk en tu laptop (gratis)", s:[
      "Splunk es pesado: cierra otros programas mientras lo usas y deja libres al menos 10 GB de disco.",
      "En la página de descarga (enlace 5) crea tu cuenta gratis de Splunk y descarga el paquete de **Windows** en formato `.msi` (pesa algo más de 1 GB).",
      "Ejecuta el `.msi`, acepta la licencia y, cuando lo pida, crea el usuario administrador de Splunk con una contraseña nueva (no uses la de Windows). Deja el resto de opciones por defecto.",
      "Al terminar abre Brave en `http://localhost:8000` y entra con ese usuario. Empiezas con la prueba de **Splunk Enterprise** de 60 días.",
      "En la página de inicio pulsa **Add Data** → **Monitor** → **Local Event Logs**. Haz clic en **Security**, **System** y en el canal de Sysmon (`Microsoft-Windows-Sysmon/Operational`). No elijas todos: se llenaría de datos. Pulsa **Next**, deja el índice `main`, pulsa **Review** y luego **Submit**.",
      "Pulsa **Start Searching**, elige «Last 24 hours» en el selector de tiempo y escribe `index=main | stats count by source`. Deberías ver una fila por cada log que añadiste.",
      "Antes de que acaben los 60 días pásate a la licencia gratis: **Settings** → **Licensing** → **Change License Group** → **Free license** → **Save**, y reinicia cuando lo pida. Splunk Free indexa 500 MB al día y no tiene alertas ni usuarios, pero para aprender sobra."
    ], learn:"Splunk se instala con el .msi, se usa en localhost:8000 y, tras la prueba, sigue gratis con la licencia Free." },
    { t:"Tus primeras 5 búsquedas SPL", s:[
      "Fallos de inicio de sesión: genera uno con `runas` como en la unidad 02 y busca `index=main EventCode=4625`. Si no sale nada, busca solo `index=main 4625` y mira en la barra lateral **Interesting Fields** cómo se llaman los campos en tu instalación.",
      "Cuenta y ordena: `index=main EventCode=4625 | stats count by Account_Name | sort -count`. `stats count by` agrupa y cuenta; en `sort -count` el signo `-` significa de mayor a menor.",
      "Elige columnas: `index=main source=*Sysmon* EventCode=1 | table _time, Image, CommandLine`. `table` muestra solo esos campos y `_time` es la hora del evento. Verás qué programas ejecutaste.",
      "Gráfica en el tiempo: `index=main EventCode=4625 | timechart span=1h count`. `timechart` cuenta los eventos por hora (`span=1h`); abre la pestaña **Visualization** para ver la gráfica.",
      "Lo raro: `index=main source=*Sysmon* EventCode=1 | rare limit=10 Image` muestra los 10 programas que menos se ejecutan. Revisa que los conoces todos.",
      "Guarda las 5 búsquedas en tu cuaderno con una línea que diga qué pregunta responde cada una. Las reutilizarás en las unidades 04 y 07.",
      "Si un empleo pide Elastic, la misma idea en KQL sería `event.code : 4625 and user.name : admin`: cambia la sintaxis, no el método."
    ], learn:"Con stats, sort, table, timechart y rare respondes la mayoría de las preguntas de un SOC." },
    { t:"Investiga como en BOTS (TryHackMe)", s:[
      "Haz «Splunk: The Basics» (enlace 1) para conocer la interfaz del laboratorio: la aplicación **Search & Reporting**, el selector de tiempo y la barra de campos.",
      "En «Incident Handling With Splunk» (enlace 2) sigue la investigación por las fases de la Cyber Kill Chain que ya conoces: reconocimiento, explotación, instalación... Cada tarea se responde con búsquedas.",
      "Método para cada pregunta: 1) escribe el índice y un filtro amplio; 2) mira **Interesting Fields** y pulsa un campo para ver sus valores más comunes; 3) añade filtros hasta quedarte con pocos eventos; 4) resume con `stats`.",
      "En «Splunk 2» (enlace 3) trabajas con los datos de BOTS v2. Las preguntas van por series (100, 200, 300 y 400) de fácil a difícil: haz la serie 100 sin ayuda y anota cada búsqueda que funcionó.",
      "Si te atascas más de 20 minutos, usa la pista de la sala, no una solución publicada: tu meta es el método, no la flag.",
      "Termina con «Alert Triage With Splunk» (enlace 4): ahora juntas el triaje de la unidad 01 con SPL."
    ], learn:"Investigar en Splunk es filtro amplio, mirar campos, acotar y resumir con stats, pregunta a pregunta." }
  ],
  p5blue04: [
    { t:"Lee una regla real de SigmaHQ", s:[
      "Abre SigmaHQ (enlace 1) y entra en las carpetas `rules` → `windows` → `process_creation`. Cada archivo `.yml` es una regla.",
      "Pulsa la tecla `t` (el buscador de archivos de GitHub) y escribe `whoami`. Abre una de las reglas que aparecen.",
      "Identifica cada parte: `title`, `id`, `status`, `description`, `references`, `tags`, `logsource`, `detection`, `falsepositives` y `level`. Mira qué técnica lleva en `tags` y búscala en attack.mitre.org.",
      "En `detection` fíjate en la estructura: uno o más grupos (como `selection`) con campos y valores, y la línea `condition` que los combina (por ejemplo `selection` o `selection and not filter`).",
      "Anota qué falsos positivos admite la regla. Pensar en ellos es el trabajo del **detection engineer** (ingeniero de detección)."
    ], learn:"Toda regla Sigma tiene título, logsource y detection; los tags la unen a ATT&CK y falsepositives avisa del ruido." },
    { t:"Escribe, convierte y prueba tu regla", s:[
      "Haz antes la sala «Sigma Language» (enlace 4), sobre todo **Writing a Sigma Rule** y **From YAML to SIEM Query**.",
      "Abre el Bloc de notas y escribe tu regla línea a línea, con sangrías de 4 espacios (YAML no admite tabuladores): `title: Ejecución de whoami`, `logsource:` con debajo `category: process_creation` y `product: windows`, `detection:` con debajo `selection:` y, más adentro, `Image|endswith: '\\whoami.exe'`, luego `condition: selection` al nivel de `selection`, después `level: low` y `tags:` con `- attack.discovery` y `- attack.t1033`. Guárdala como `whoami.yml`.",
      "Abre sigconverter.io (enlace 3) y pega tu regla en el panel `rule.yml`. En **Target** elige Splunk y en **Pipeline** la de Sysmon (traduce los campos genéricos a los de Sysmon). La consulta aparece en el panel «query».",
      "Opcional por consola, en Kali: `sudo apt install -y pipx`, `pipx ensurepath` (cierra y abre la terminal), `pipx install sigma-cli`, `sigma plugin install splunk` y `sigma convert -t splunk -p sysmon whoami.yml`. `-t` es el destino (target) y `-p` la pipeline.",
      "En tu laptop escribe `whoami` en PowerShell para generar el evento (Sysmon ID 1). En Splunk pega la consulta con «Last 15 minutes». Si no sale, añade `index=main` al principio y comprueba en **Interesting Fields** que existe el campo `Image`.",
      "Anota cuántas veces salta en un día normal. Los administradores usan whoami a menudo: por eso el `level` es `low`. Esa reflexión es el **tuning** (ajuste) de una regla."
    ], learn:"Regla Sigma → sigconverter (Target Splunk, pipeline Sysmon) → generar la actividad → comprobar que salta y medir el ruido." },
    { t:"Tu mapa de cobertura en ATT&CK Navigator", s:[
      "Abre ATT&CK Navigator (enlace 5), pulsa **Create New Layer** y elige **Enterprise**.",
      "Con la lupa de búsqueda de la barra superior busca T1033 (System Owner/User Discovery) y selecciónala.",
      "Con la técnica seleccionada, ponle un color de fondo o una puntuación desde los controles de técnica de la barra superior. Haz lo mismo con T1110 (Brute Force), que ya detectas con tus búsquedas de 4625.",
      "Añade a cada técnica un comentario con el nombre de tu regla o búsqueda.",
      "Descarga la capa en JSON con el icono de descarga de los controles de capa y guárdala en tu cuaderno. Es tu mapa de cobertura: crecerá en las unidades 05 a 07. Si te pierdes, pulsa el icono **?** de arriba a la derecha (ayuda)."
    ], learn:"El Navigator muestra qué técnicas cubres y cuáles son tus huecos de detección." }
  ],
  p5blue05: [
    { t:"Prepara tu laboratorio de PCAP en Kali", s:[
      "Abre Kali y actualiza la lista de paquetes: `sudo apt update`.",
      "Instala las herramientas: `sudo apt install -y zeek suricata wireshark tshark`. `-y` responde «sí» a todo. Si te pregunta si los usuarios sin privilegios pueden capturar paquetes, elige **No**: solo vas a leer archivos.",
      "Comprueba Zeek con `zeek --version`. Si dice «command not found», mira si está en `/opt/zeek/bin` con `ls /opt/zeek/bin` y usa esa ruta completa.",
      "Descarga las reglas gratis de Suricata (Emerging Threats Open): `sudo suricata-update`. Se guardan en `/var/lib/suricata/rules/suricata.rules`. Si el comando no existe, instálalo con `sudo apt install -y suricata-update`.",
      "Crea tu carpeta: `mkdir -p ~/pcaps && cd ~/pcaps`. Trabaja siempre en el disco de Linux (`~`), no en `/mnt/c`, para que Windows no toque estos archivos.",
      "Wireshark gráfico se abre desde Kali con `wireshark &` gracias a WSLg de Windows 11 (`&` deja la terminal libre)."
    ], learn:"Zeek, Suricata y Wireshark viven en Kali; los PCAP se guardan en el disco de Linux." },
    { t:"Investiga un ejercicio de malware-traffic-analysis.net", s:[
      "Abre la lista de ejercicios (enlace 3) y elige uno reciente: el autor aconseja empezar por los más nuevos e ir hacia atrás. Lee el escenario y las preguntas, pero no abras la página de respuestas.",
      "En la página del ejercicio haz clic derecho en el enlace del ZIP con el PCAP → **Copiar dirección del enlace**. En Kali: `cd ~/pcaps && wget 'pega-aquí-la-URL'` y luego `unzip nombre.zip`. La contraseña de los ZIP se explica en la página **About** del sitio.",
      "Zeek: `mkdir zeek && cd zeek && zeek -C -r ../archivo.pcap`. `-r` lee un PCAP en vez de una tarjeta de red y `-C` ignora los errores de checksum, habituales en capturas. Con `ls` verás `conn.log`, `dns.log`, `http.log`, `ssl.log` y `files.log`.",
      "Quién habla con quién: `cat conn.log | zeek-cut id.orig_h id.resp_h id.resp_p | sort | uniq -c | sort -rn | head`. `zeek-cut` saca columnas por nombre (`id.orig_h` origen, `id.resp_h` destino, `id.resp_p` puerto); `uniq -c` cuenta repeticiones y `sort -rn` ordena de mayor a menor.",
      "Dominios, webs y TLS: `cat dns.log | zeek-cut query | sort | uniq -c | sort -rn | head -20`, `cat http.log | zeek-cut host uri user_agent` y `cat ssl.log | zeek-cut server_name`. Apunta todo lo que no parezca normal.",
      "Suricata: `cd ~/pcaps && mkdir suri && sudo suricata -r archivo.pcap -k none -S /var/lib/suricata/rules/suricata.rules -l suri`. `-r` lee el PCAP, `-k none` desactiva la comprobación de checksums, `-S` carga solo ese archivo de reglas y `-l` es la carpeta de salida. Lee las alertas con `cat suri/fast.log`.",
      "Wireshark: `wireshark archivo.pcap &`. Usa **Statistics** → **Conversations** para ver los pares de IP con más tráfico y filtros como `http.request`, `tls.handshake.extensions_server_name` o `ip.addr == 10.0.0.5` (cambia la IP). Para el nombre del equipo y del usuario prueba `dhcp`, `nbns` y `kerberos.CNameString`.",
      "Escribe tus respuestas (IP, nombre de equipo, usuario, dominios maliciosos y hora en UTC) y solo entonces compáralas con la página de respuestas. **File** → **Export Objects** puede sacar archivos del tráfico: no los abras nunca."
    ], learn:"Método: Zeek y Suricata para el resumen, Wireshark para el detalle, y respuestas escritas antes de mirar la solución." },
    { t:"PacketDetective en CyberDefenders", s:[
      "Crea tu cuenta gratis en CyberDefenders y abre «PacketDetective» (enlace 5). Es de dificultad fácil y solo necesita Wireshark.",
      "Lee el escenario y copia todas las preguntas antes de tocar nada.",
      "Empieza el lab con el botón que te ofrezca la ficha. Si te da archivos para descargar, hazlo dentro de Kali en `~/pcaps/packetdetective`, como en la guía 2.",
      "Antes de cada pregunta decide qué la responde mejor: una estadística (**Statistics**), un filtro, o seguir una conversación entera (clic derecho en un paquete → **Follow** → **TCP Stream**).",
      "Anota en tu cuaderno cada filtro que funcionó: será tu chuleta para el proyecto final."
    ], learn:"Cada pregunta de red se responde con estadísticas, filtros o siguiendo un flujo; elige antes de buscar." }
  ],
  p5blue06: [
    { t:"Artefactos de tu propia laptop con las EZ Tools", s:[
      "Instala el **.NET Desktop Runtime 10** de Microsoft (desde dotnet.microsoft.com, versión para Windows x64): Timeline Explorer lo necesita.",
      "En la web de Eric Zimmerman (enlace 2) descarga los ZIP de **PECmd**, **LECmd** y **Timeline Explorer**. Descomprímelos con 7-Zip (el extractor de Windows puede bloquear sus DLL) en `C:\\Forense\\Tools`. Si un ZIP crea una subcarpeta, ajusta las rutas de los comandos.",
      "Abre PowerShell **como administrador** y escribe `C:\\Forense\\Tools\\PECmd.exe -d C:\\Windows\\Prefetch --csv C:\\Forense\\Salida`. `-d` es la carpeta a procesar y `--csv` dónde guardar el resultado. Verás pasar cada archivo `.pf` con el programa, su número de ejecuciones y sus últimas fechas.",
      "Archivos abiertos recientemente: `C:\\Forense\\Tools\\LECmd.exe -d $env:APPDATA\\Microsoft\\Windows\\Recent --csv C:\\Forense\\Salida`. `$env:APPDATA` es tu carpeta de datos de usuario.",
      "Abre **TimelineExplorer.exe**, pulsa **File** → **Open** y elige el CSV de PECmd cuyo nombre termina en «Timeline».",
      "Pulsa la cabecera de la columna de hora para ordenar y usa la casilla de filtro bajo cada cabecera. Busca tu propio uso: ¿a qué hora abriste hoy Brave o PowerShell?",
      "Haz la sala «Windows Forensics 1» (enlace 1): ahí verás el registro de Windows y las pruebas de uso de USB con datos preparados."
    ], learn:"PECmd y LECmd convierten artefactos en CSV; Timeline Explorer los ordena en una línea de tiempo." },
    { t:"Volatility 3 en Kali", s:[
      "En Kali instala pipx (instala programas de Python aislados): `sudo apt install -y pipx` y `pipx ensurepath`. Cierra y abre la terminal.",
      "Instala Volatility 3: `pipx install volatility3`. El comando que queda es `vol`; comprueba con `vol -h`.",
      "Consigue un volcado de práctica: el de la sala «Volatility» (enlace 4, ya viene en su máquina) o el del lab Amadey (enlace 5). Trabaja en `~/memoria`, dentro de Kali.",
      "Identifica el sistema: `vol -f volcado.mem windows.info` (`-f` es el archivo; cambia el nombre por el tuyo). La primera vez tarda: Volatility descarga y prepara los **símbolos** de ese Windows (las tablas que le explican cómo está organizada su memoria).",
      "Procesos: `vol -f volcado.mem windows.pslist` y `vol -f volcado.mem windows.pstree`. Busca nombres imitados (`scvhost.exe` en vez de `svchost.exe`), padres raros y horas de inicio extrañas.",
      "Comandos y red: `vol -f volcado.mem windows.cmdline` muestra los argumentos de cada proceso; `vol -f volcado.mem windows.netscan` lista conexiones con IP, puerto y PID.",
      "Inyección: `vol -f volcado.mem windows.malfind --pid 1234` (cambia 1234 por el PID sospechoso) busca memoria ejecutable que no corresponde a ningún archivo, típica de código inyectado.",
      "Para guardar una salida: `vol -f volcado.mem -r csv windows.pslist > pslist.csv`. `-r csv` cambia el formato de salida y `>` lo guarda en un archivo."
    ], learn:"Con info, pslist, pstree, cmdline, netscan y malfind respondes qué corría, quién lo lanzó, con qué y a dónde hablaba." },
    { t:"La línea de tiempo del caso", s:[
      "Abre el lab «Amadey - APT-C-36» (enlace 5), lee el escenario y copia las preguntas.",
      "Responde cada pregunta con un plugin de la guía anterior. Escribe qué plugin usaste y qué viste, no solo la respuesta.",
      "Con cada hallazgo apunta su hora en UTC en una tabla de tres columnas: **Hora**, **Qué pasó** y **Prueba** (plugin o artefacto).",
      "Ordena la tabla por hora. Debe contar una historia: entrada, ejecución, persistencia y conexión al servidor del atacante.",
      "Marca a cada fila su técnica ATT&CK y añádela a tu capa del Navigator de la unidad 04."
    ], learn:"La línea de tiempo convierte hallazgos sueltos en una historia con pruebas." }
  ],
  p5blue07: [
    { t:"Tu primera caza con hipótesis (en tu Splunk)", s:[
      "Haz la sala «Threat Hunting: Introduction» (enlace 1) y lee el artículo de PEAK (enlace 2).",
      "Escribe la hipótesis en tu cuaderno: técnica, rastro esperado y fuente. Ejemplo: T1059.001; Sysmon ID 1 con `-enc` en la línea de comandos; índice main.",
      "Genera un positivo de prueba en tu laptop: en PowerShell escribe `powershell -EncodedCommand dwBoAG8AYQBtAGkA`. Ese texto es «whoami» codificado en Base64: es inofensivo y te mostrará tu usuario.",
      "Busca en Splunk: `index=main source=*Sysmon* EventCode=1 CommandLine=*-enc* | table _time, ParentImage, Image, CommandLine`. El comodín `*-enc*` también encuentra `-EncodedCommand` porque Splunk no distingue mayúsculas en los valores.",
      "Amplía el rango a 30 días. Para cada resultado mira el padre (`ParentImage`): si es una herramienta de administración conocida, es benigno; si es Word, el navegador o algo raro, sería para escalar.",
      "Caza por línea base: `index=main source=*Sysmon* EventCode=3 | stats count by Image | sort count`. Arriba quedan los programas que menos conexiones hacen: revisa que los conoces todos.",
      "Act: escribe el resultado (encontrado o no, datos revisados, fechas) y convierte la hipótesis en una regla Sigma como en la unidad 04."
    ], learn:"Hipótesis → búsqueda → veredicto documentado → nueva detección: así es un ciclo de caza." },
    { t:"YARA en Kali, paso a paso", s:[
      "Instala YARA: `sudo apt install -y yara` y comprueba con `yara --version`.",
      "Crea archivos de prueba inofensivos: `mkdir -p ~/yara-pruebas && cd ~/yara-pruebas`, luego `echo 'hola mundo' > normal.txt` y `echo 'conectar a evil-c2.example y ejecutar payload' > sospechoso.txt`.",
      "Abre el editor con `nano mi_regla.yar` y escribe, línea a línea: `rule Prueba_C2`, `{`, `meta:`, `description = \"Regla de práctica\"`, `strings:`, `$dominio = \"evil-c2.example\" nocase`, `$palabra = \"payload\"`, `condition:`, `$dominio and $palabra` y `}`. Guarda con Ctrl+O, Enter y Ctrl+X.",
      "Ejecuta: `yara -s -r mi_regla.yar ~/yara-pruebas`. `-r` recorre la carpeta y sus subcarpetas, y `-s` muestra qué cadenas coincidieron. Debe salir solo `sospechoso.txt`.",
      "Cambia la condición a `any of them` y vuelve a ejecutar: ahora basta con una cadena. Así ves cómo `condition` cambia la sensibilidad de la regla.",
      "Haz la sala «Threat Hunting With YARA» (enlace 3). En la documentación (enlace 4) lee los modificadores `nocase`, `wide` y `ascii`: `wide` sirve para textos de programas de Windows, que guardan cada carácter en dos bytes.",
      "YARA-X es el sucesor de YARA: si algún día lo usas, mira su instalación y su comando en su documentación; la forma de las reglas es la misma idea."
    ], learn:"Una regla YARA son cadenas más una condición; `yara -s -r` te dice qué archivo coincide y por qué." },
    { t:"Pivota un IOC sin tocar el malware", s:[
      "Vuelve a tu ejercicio de la unidad 05. Haz que Zeek calcule los hashes de los archivos transferidos: `cd ~/pcaps && mkdir zeek2 && cd zeek2 && zeek -C -r ../archivo.pcap frameworks/files/hash-all-files`.",
      "Saca los hashes: `cat files.log | zeek-cut mime_type sha256`. Elige uno cuyo tipo sea un ejecutable o un documento.",
      "Abre MalwareBazaar (enlace 5), entra en **Browse** y pega el hash en el buscador. No descargues la muestra: solo lee su ficha (familia, etiquetas y primera vez visto).",
      "Pivota: busca esa familia en attack.mitre.org (sección Software) y apunta 3 técnicas que usa.",
      "Convierte una de esas técnicas en la hipótesis de tu próxima caza. Así se cierra el ciclo: inteligencia → hipótesis → caza → detección.",
      "Recuerda la Ley 53-07: descargar o usar malware contra otros es delito. Consultar hashes y analizar tráfico para defender, en tu laboratorio, es tu trabajo."
    ], learn:"Un hash lleva a una familia y la familia a sus técnicas: la inteligencia alimenta la caza." }
  ],
  p5blue08: [
    { t:"Investiga el incidente", s:[
      "En CyberDefenders (enlace 1) usa el filtro **Content** → **Community** para ver los laboratorios gratis. «Lockdown» (enlace 2) es buena opción: combina red, memoria y malware en varias etapas. Comprueba en su ficha que es gratis para tu cuenta antes de empezar.",
      "Lee el escenario y copia todas las preguntas: son tu lista de alcance.",
      "Si el lab se descarga, hazlo dentro de Kali en su propia carpeta (`mkdir -p ~/casos/lockdown`) y calcula el hash de la evidencia antes de tocarla: `sha256sum *`. Anótalo: es tu cadena de custodia.",
      "Responde cada pregunta con la herramienta de la unidad que toca: red (unidad 05), memoria (unidad 06), IOCs y YARA (unidad 07). Por cada respuesta anota la prueba: comando y salida.",
      "Construye la línea de tiempo con cuatro columnas: **Hora UTC**, **Qué pasó**, **Prueba** y **Técnica ATT&CK**.",
      "Segundo caso, si quieres más práctica: en Blue Team Labs Online (enlace 3) los «challenges» descargables son gratis; las «investigations» en el navegador son de pago (PRO, desde £15 al mes)."
    ], learn:"Alcance claro, hash de la evidencia, una prueba por respuesta y todo a la línea de tiempo." },
    { t:"Escribe el informe", s:[
      "Crea un documento con estos apartados: 1. Resumen ejecutivo, 2. Alcance y datos analizados, 3. Línea de tiempo, 4. Hallazgos, 5. IOCs, 6. Mapeo a ATT&CK, 7. Contención y recomendaciones, 8. Lecciones aprendidas.",
      "Hallazgos: uno por apartado, con título, qué viste, la prueba (captura o comando) y por qué importa.",
      "IOCs en una tabla de tres columnas: **Tipo**, **Valor** y **Contexto**. Escribe dominios e IP desactivados para que nadie haga clic: `evil[.]example`, `203.0.113[.]7`.",
      "Recomendaciones concretas y priorizadas: aislar el equipo, bloquear los IOCs, cambiar credenciales y la regla Sigma que habría detectado el ataque antes.",
      "Escribe el resumen ejecutivo al final: qué pasó, impacto, estado actual y qué decisión se pide, en 5 líneas.",
      "Revisa: ¿alguien sin conocimientos técnicos entiende el resumen? ¿Otro analista puede repetir cada hallazgo con tu prueba? Exporta a PDF.",
      "Si lo publicas en GitHub (como en la Fase 4), usa un caso cuya plataforma permita publicar writeups y quita flags y respuestas literales. Si no lo permite, guárdalo privado y enséñalo en entrevistas."
    ], learn:"Un informe profesional cuenta la historia arriba y deja cada prueba repetible abajo." },
    { t:"Elige tu certificación", s:[
      "Abre las tres páginas (enlaces 4, 5 y 6) y confirma el precio el día que vayas a comprar: cambian y algunos dependen del país.",
      "**BTL1** (Centri, antes Security Blue Team): £399. Incluye 4 meses de curso, 23 laboratorios en el navegador, un examen práctico de respuesta a incidentes de 24 horas, una repetición gratis y certificación de por vida.",
      "**SAL1** (TryHackMe): unos €301, con descuento si eres Premium. Tiene preguntas tipo test y una parte práctica en el SOC Simulator, dentro de una ventana de 24 horas, con una repetición gratis. Encaja si ya terminaste la ruta SOC Level 1.",
      "**CDSA** (Hack The Box): exige completar al 100 % la ruta SOC Analyst de HTB Academy (15 módulos). Acceso: plan Student de US$10 al mes (necesitas correo de universidad) o Silver de US$30 al mes, más el voucher (unos US$210); el plan Silver anual (US$550) ya incluye vouchers. Examen: 7 días de laboratorio más un informe.",
      "Criterio: con presupuesto corto y TryHackMe Premium ya pagado, SAL1; si quieres un curso completo con examen práctico y validez de por vida, BTL1; deja la CDSA como segundo paso, cuando tu proyecto final haya salido bien.",
      "Escribe tu decisión con fecha de examen y cuánto debes ahorrar cada mes, y compártela conmigo para revisarla."
    ], learn:"BTL1, SAL1 y CDSA difieren en precio, formato y exigencia; elige por presupuesto y verifica el precio antes de pagar." }
  ]
});
