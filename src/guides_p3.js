/* Guías de la Fase 3 (p3u01–p3u20) para Ruta Ciber.
   Se suman a UNIT_GUIDES. Imitan el estilo de s05/s10/s15/s24/s25.
   PLATFORM_GUIDES ya explica aparte: unirse a una sala de TryHackMe y usar
   Start Machine / Start AttackBox (thm), MITRE ATT&CK (mitre), OWASP Top 10
   (owasp), Burp y la Web Security Academy de PortSwigger (portswigger), la
   calculadora CVSS de NVD (nvd) e INE para la eJPT (ine). Aquí solo va lo
   específico de cada unidad. Todo lo ofensivo, SOLO contra la IP del laboratorio. */
Object.assign(UNIT_GUIDES, {
  p3u01: [
    { t: "Intro to Offensive Security: ataca FakeBank (solo en el laboratorio)", s: [
      "La sala abre sola un escritorio dentro del navegador con la web «FakeBank» (un banco de mentira para practicar). En la tarea **Starting the Lab**, fíjate en el **número de cuenta** que se ve en la pantalla: anótalo, lo usarás luego.",
      "Ve a la tarea **Find Hidden Pages**. Pulsa el botón verde que indica la tarea para abrir una **terminal** dentro del laboratorio.",
      "Escribe `dirb http://fakebank.thm` y pulsa Enter. `dirb` es una herramienta que prueba a ciegas muchos nombres de página habituales (admin, images, login…) para descubrir **páginas ocultas** que no aparecen enlazadas en el sitio.",
      "Mira la salida: cada línea que empieza por `+` es una página que **sí existe**. Una de ellas es una página de administración que no deberías poder usar (algo parecido a `/bank-transfer`).",
      "En la tarea **Attack the Admin Page**, en el navegador del laboratorio añade esa ruta al final de la dirección de FakeBank y entra. Haz una transferencia a **tu** número de cuenta del paso 1 por 2000 o más.",
      "Vuelve a la cuenta: el saldo se pone positivo y sale un cartel verde. Esas palabras en MAYÚSCULAS son la respuesta. Reflexión: una página de administración sin control de acceso deja que cualquiera mueva dinero. Esto solo es legal aquí, contra la máquina de la sala."
    ], learn: "`dirb http://sitio` descubre páginas ocultas probando nombres comunes; una página de admin sin control de acceso es un fallo crítico." },
    { t: "Red Team Fundamentals: ordena las 6 fases y entrégalas", s: [
      "Esta sala es de lectura. Lee las tareas **Vulnerability Assessment… Limitations**, **Red Team Engagements** y **Teams and Functions**: explican la diferencia entre escaneo de vulnerabilidades, pentest y ejercicio de equipo rojo.",
      "En **Teams and Functions** anota los tres equipos: **Red** (ataca), **Blue** (defiende) y **White** (árbitro que controla las reglas). Cada uno tiene su papel.",
      "En **Engagement Structure** verás una **cadena de ataque** (kill chain). Compárala con las 6 fases de un pentest que explica esta unidad.",
      "En la tarea **Overview of a Red Team Engagement** pulsa **View Site** y sigue el ejemplo guiado hasta obtener la bandera de la tarea.",
      "Cierra escribiendo en tu cuaderno, con tus palabras, las **6 fases** de un pentest (permiso, reconocimiento, escaneo, explotación, post-explotación, informe) y qué se entrega al final: el informe. Ese es el objetivo de esta unidad."
    ], learn: "Rojo ataca, azul defiende y blanco arbitra; un pentest va de pedir permiso a entregar el informe, que es el producto final." }
  ],
  p3u02: [
    { t: "Intro to Defensive Security: defiende FakeBank", s: [
      "Empieza por esta sala (es la base). En la tarea **Detect Suspicious Activity** pulsa **View Site**: se abre a la derecha un panel de vigilancia (un tablero con alertas).",
      "Revisa las alertas y busca la que se sale de lo normal; anota la **IP de origen** sospechosa que pide la pregunta.",
      "En **Identify the Attack** abre la lista «URL Discovery Attempts» (intentos de descubrir URLs) y mira la entrada más reciente: verás muchos intentos rápidos de llegar a páginas ocultas. Eso es alguien escaneando, como hiciste tú con `dirb` en la unidad anterior.",
      "En **Stop the Attack** escribe la IP del atacante en la casilla «Add Firewall Rule», elige **BLOCK** en el desplegable y pulsa **Apply**. Cuando salga el mensaje de éxito, copia la bandera.",
      "Fíjate: has visto el ataque desde el lado del defensor. Lo que para el atacante es un escaneo, para el SOC es una fila de alertas."
    ], learn: "El defensor ve el ataque como alertas; bloquear la IP del atacante con una regla de firewall corta la actividad." },
    { t: "SOC Fundamentals: haz de analista de nivel 1", s: [
      "Lee las tareas **People**, **Process** y **Technology**: aprende los tres pilares de un SOC (personas, procesos y tecnología) y los niveles de analista (L1, L2, L3).",
      "En la tarea **Process** memoriza las **5 preguntas** (las 5 W en inglés): qué, cuándo, dónde, quién y por qué. Es la forma de clasificar («triage») cualquier alerta.",
      "En la tarea **Practical Exercise of SOC** pulsa **View Site**: te llega una alerta de **escaneo de puertos** sobre un equipo. Usa el **SIEM** (la herramienta que junta y muestra los registros) del panel para ver los registros de esa alerta.",
      "Responde las preguntas de la alerta con las 5 W. Un detalle clave del ejercicio: el escaneo lo lanzó el equipo de evaluación de vulnerabilidades, así que el «por qué» no es malicioso: es un **falso positivo**.",
      "Cierra la alerta, copia la bandera y escribe en tu cuaderno un ejemplo de **falso positivo** (alerta que no era ataque) y uno de **falso negativo** (ataque sin alerta, el peor caso)."
    ], learn: "Un SOC clasifica cada alerta con las 5 W; distinguir un falso positivo de un ataque real es el trabajo del analista L1." }
  ],
  p3u03: [
    { t: "Ubica un phishing en la Cyber Kill Chain", s: [
      "Dibuja en tu cuaderno las **7 fases** de la Cyber Kill Chain en orden: reconocimiento, preparación del arma, entrega, explotación, instalación, mando y control (C2) y acciones sobre el objetivo.",
      "Toma un correo de phishing típico (el que roba una contraseña con un enlace falso) y coloca cada paso donde encaje: buscar a la víctima = reconocimiento; crear el correo con el enlace = preparación; enviarlo = entrega; que la víctima haga clic y escriba su clave = explotación.",
      "Marca en qué fase lo cortaría cada defensa: un filtro de correo corta la **entrega**; formar al empleado corta la **explotación**; bloquear el dominio malicioso corta el **mando y control**.",
      "Conclusión en una línea de tu cuaderno: romper **cualquier** eslabón detiene el ataque entero."
    ], learn: "La Kill Chain ordena un ataque en 7 fases; cortar un solo eslabón (entrega, explotación o C2) lo detiene." },
    { t: "Busca la técnica Phishing (T1566) en ATT&CK", s: [
      "En la matriz **Enterprise** de ATT&CK, la columna **Initial Access** (acceso inicial) es la **táctica** (el para qué). Dentro, abre la técnica **Phishing**; su código es **T1566**.",
      "Lee sus apartados **Mitigations** (cómo prevenirla) y **Detection** (cómo detectarla) y copia una de cada en tu cuaderno.",
      "Une las dos ideas de la unidad: la **táctica** de ATT&CK (Initial Access) coincide con la fase **entrega/explotación** de la Kill Chain. Son dos mapas del mismo ataque.",
      "Explícate en voz alta por qué rojo y azul usan ATT&CK como idioma común: el rojo dice «usé T1566» y el azul comprueba si su detección lo habría visto."
    ], learn: "Una táctica (Initial Access) es el porqué y una técnica (Phishing, T1566) es el cómo; ATT&CK es el idioma común de rojo y azul." }
  ],
  p3u04: [
    { t: "Passive Recon: whois, nslookup y dig sin tocar el objetivo", s: [
      "Reconocimiento **pasivo** = sacar información pública sin conectarte a los sistemas del objetivo. Esta sala te enseña tres herramientas nuevas; úsalas en la terminal de la AttackBox.",
      "`whois ejemplo.com` consulta el **registro del dominio**: quién lo registró, cuándo y qué servidores DNS usa. La pregunta de la tarea **Whois** sale de esa salida.",
      "`nslookup -type=TYPE dominio` pregunta al DNS por un tipo de registro. Por ejemplo `nslookup -type=MX ejemplo.com` da los servidores de correo; `A` da la dirección IP.",
      "`dig dominio TIPO` hace lo mismo con más detalle, y puedes elegir el servidor DNS: `dig @1.1.1.1 ejemplo.com MX`. En la tarea **nslookup and dig** compara ambas salidas.",
      "En las tareas **DNSDumpster** y **Shodan.io** usa esas webs (ábrelas en el navegador): DNSDumpster dibuja los subdominios; Shodan busca equipos ya expuestos con filtros como `hostname:` o `port:`. Nada de esto toca al objetivo.",
      "Anota: todas estas consultas son pasivas porque preguntan a terceros (registros, DNS, buscadores), no al objetivo."
    ], learn: "`whois` da el dueño del dominio, `nslookup`/`dig` consultan el DNS y Shodan/DNSDumpster buscan lo ya expuesto, todo sin tocar al objetivo." },
    { t: "Active Recon: ping, traceroute, telnet y netcat contra la máquina", s: [
      "Reconocimiento **activo** = sí te conectas a la máquina del objetivo, así que deja rastro y **solo se hace dentro del laboratorio**. Arranca la AttackBox y la máquina de la tarea.",
      "`ping -c 5 MACHINE_IP` envía 5 paquetes para ver si la máquina responde y cuánto tarda. `-c` fija el número de paquetes (en Windows sería `-n`).",
      "`traceroute MACHINE_IP` muestra el camino de saltos (routers) hasta la máquina. Sirve para entender por dónde pasa tu tráfico.",
      "`telnet MACHINE_IP 80` abre una conexión al **puerto** 80. Si escribes `GET / HTTP/1.1`, Enter, `host: telnet`, Enter, Enter, el servidor te responde: así hablas «a mano» con un servicio web.",
      "`nc MACHINE_IP 21` (netcat, que ya usaste en Bandit) hace lo mismo de forma más flexible; añade `-v` para ver detalles de la conexión y leer el **banner** (la versión del servicio).",
      "Rellena tu tabla: técnica, ¿pasiva o activa?, ¿deja rastro? El ping, traceroute, telnet y nc son activos; whois, dig y Shodan son pasivos."
    ], learn: "`ping`, `traceroute`, `telnet puerto` y `nc puerto` interrogan a la máquina directamente: son recon activo y solo se usan contra el laboratorio." }
  ],
  p3u05: [
    { t: "Nmap Live Host Discovery: encontrar qué equipos están vivos", s: [
      "Esta sala va de **descubrir equipos**, no puertos todavía. Arranca la red (**Start**) y la AttackBox. Muchos escaneos necesitan permisos de administrador: antepón `sudo`.",
      "`nmap -sn 10.10.10.0/24` hace un «ping scan»: `-sn` significa «sin escaneo de puertos», solo mira qué hosts responden. El `/24` es el rango de la red (lo viste en subredes).",
      "`sudo nmap -PR -sn OBJETIVOS` descubre por **ARP** (dentro de tu misma red local, lo más fiable). `-PE`, `-PP`, `-PM` usan distintos tipos de **ping ICMP**.",
      "`sudo nmap -PS22,80,443 -sn OBJETIVOS` prueba con paquetes **TCP SYN** a esos puertos; `-PA` usa TCP ACK y `-PU` usa UDP. Sirven cuando el ping normal está bloqueado por un firewall.",
      "`-n` le dice a Nmap que **no** resuelva nombres DNS (va más rápido); `-R` le obliga a resolverlos. Prueba ambos y nota la diferencia de velocidad.",
      "Apunta en tu chuleta: `-sn` = solo descubrir hosts; `-PR/-PE/-PS/-PA/-PU` = distintas formas de preguntar «¿estás vivo?». Solo contra la IP de la sala."
    ], learn: "`nmap -sn` descubre qué equipos están encendidos; `-PR/-PE/-PS/-PA/-PU` son maneras de sondearlos cuando el ping normal falla." },
    { t: "Nmap (further): tipos de escaneo, versiones y guiones", s: [
      "Esta sala va de **puertos y servicios**. Despliega la máquina y la AttackBox. Recuerda: un escaneo SYN necesita `sudo`.",
      "`nmap -sS MACHINE_IP` es el escaneo **SYN** (rápido y silencioso, por eso necesita sudo). `-sT` es el **TCP Connect** (completo, sin sudo). `-sU` escanea **UDP**.",
      "Añade `-p-` para escanear **los 65535 puertos**, o `-p 80,443` para puertos concretos; sin `-p` Nmap mira los 1000 más comunes.",
      "`-sV` detecta la **versión** del servicio detrás de cada puerto (clave para buscar vulnerabilidades); `-sC` lanza los **guiones** (scripts) seguros por defecto; `-O` intenta adivinar el sistema operativo.",
      "Junta lo útil en un solo comando: `sudo nmap -sV -sC -p- MACHINE_IP`. Léelo así: versiones + guiones básicos + todos los puertos contra esa IP. Este es el escaneo que repetirás en cada máquina.",
      "Si Nmap dice que el host parece caído porque el firewall bloquea el ping, añade `-Pn` («no hagas ping, escanea igual»). Guarda la chuleta con cada opción y para qué sirve."
    ], learn: "`-sS/-sT/-sU` eligen el tipo de escaneo, `-p-` abre todos los puertos y `-sV -sC` revelan versión y detalles: `sudo nmap -sV -sC -p- IP` es tu escaneo base." }
  ],
  p3u06: [
    { t: "Snort: entender sudo y probar la instalación", s: [
      "Despliega la máquina de la tarea **Interactive Material and VM**; aparece en la vista dividida. En el Escritorio tienes la carpeta **Task-Exercises** con los archivos de cada tarea.",
      "Snort necesita permisos de administrador para leer el tráfico de red. Por eso casi todos los comandos empiezan por **`sudo`** (viene de «super user do», «hazlo como superusuario»): ejecuta ese comando con permisos de root.",
      "Comprueba que Snort está instalado: `snort -V` (muestra la versión). Comprueba que su configuración es válida: `sudo snort -c /etc/snort/snort.conf -T`. La `-T` significa «test»: revisa y no arranca.",
      "En **Sniffer Mode** mira el tráfico en vivo: `sudo snort -v` (resumen), `sudo snort -de` (con datos y cabeceras). Es parecido a Wireshark pero en texto.",
      "En **IDS/IPS Mode** verás la regla de ejemplo `alert icmp any any <> any any (msg:\"ICMP Packet Found\"; sid:100001; rev:1;)`. Se lee así: **alerta** cuando haya tráfico **icmp** de cualquier origen a cualquier destino, y escribe ese mensaje. Las reglas viven en `/etc/snort/rules/local.rules`.",
      "Lánzalo con `sudo snort -c /etc/snort/snort.conf -A console` y, en otra terminal, genera tráfico con `sudo ./traffic-generator.sh`. Verás saltar las alertas. Escribe la diferencia: un **IDS** avisa, un **IPS** además bloquea."
    ], learn: "`sudo` ejecuta como administrador; Snort compara el tráfico con reglas en `local.rules` y, cuando coinciden, lanza una alerta (IDS) o la bloquea (IPS)." }
  ],
  p3u07: [
    { t: "Burp Repeater: cambiar y reenviar una petición", s: [
      "Despliega la máquina (**Start Lab Machine**) y abre Burp con su navegador (lo instalaste en la Fase 2). Entra en `http://MACHINE_IP/` para que la petición quede capturada.",
      "En **Proxy → HTTP history** haz clic derecho sobre esa petición y elige **Send to Repeater** (o pulsa `Ctrl + R`). Arriba se activa la pestaña **Repeater**.",
      "En Repeater, a la izquierda está la **petición** (la puedes editar) y a la derecha la **respuesta**. Pulsa **Send** y mira qué responde el servidor.",
      "Cambia **una sola cosa** y vuelve a pulsar **Send**: por ejemplo edita la cabecera `Connection: close` a `open`, o un parámetro de la URL. Compara las dos respuestas con los botones de historial que hay junto a **Send**.",
      "En la tarea práctica, añade una cabecera nueva llamada `FlagAuthorised` con valor `True` (escríbela en el editor o con el **Inspector**) y pulsa **Send**: la bandera aparece en la respuesta.",
      "En el reto, entra a `http://MACHINE_IP/products/` y manda a Repeater una petición de un producto; cambia el número final por valores extremos hasta que el servidor devuelva un «500 Internal Server Error», y lee la respuesta. Solo contra esta máquina.",
      "Cambia una cosa cada vez: así sabes exactamente qué provocó cada cambio en la respuesta."
    ], learn: "`Ctrl + R` manda una petición a Repeater; editas una parte, pulsas **Send** y comparas respuestas para ver cómo valida el servidor." }
  ],
  p3u08: [
    { t: "Juice Shop: preparar el laboratorio y abrir el marcador", s: [
      "Despliega la máquina y abre `http://MACHINE_IP` en el navegador. Juice Shop es una tienda **llena de fallos a propósito**, hecha por OWASP para aprender: aquí todo es legal.",
      "Si usas Burp y una bandera no aparece, **apaga el proxy** en el navegador y recarga; algunas banderas solo saltan con la conexión directa.",
      "Abre el **marcador de retos**: escribe en la barra `http://MACHINE_IP/#/score-board`. Ahí ves todos los retos, su dificultad y cuáles llevas. Empieza por los de 1 estrella.",
      "Tarea **Let's go on an adventure**: navega la tienda con Burp y el **Intercept** en «off» para ver cómo se mueven las peticiones. Busca el correo del administrador en las reseñas de productos.",
      "Aviso de orden: en esta sala verás dos técnicas que se explican a fondo **después**: la **inyección SQL** (escribir código SQL en un formulario para que la base de datos haga algo que no debía; unidad 9) y el **XSS** (meter JavaScript en una página para que se ejecute en el navegador de otra persona; unidad 10). Cuando las toques aquí, apunta el reto y vuelve a él tras esas unidades si no lo entiendes.",
      "Tras cada reto, pregúntate: ¿qué categoría del **OWASP Top 10** era y cómo lo arreglaría el programador? Ten abierta la lista OWASP para clasificarlo. Reparte la sala en 3 bloques."
    ], learn: "El marcador `/#/score-board` ordena los retos por dificultad; cada reto de Juice Shop es una categoría del OWASP Top 10." }
  ],
  p3u09: [
    { t: "SQL Injection (sala): recorrer los 4 niveles", s: [
      "Primero lee la teoría de PortSwigger del enlace (la guía de PortSwigger te la abre). Luego despliega la máquina de la sala con **Start Lab Machine**.",
      "Recuerda de la Fase 2 que SQL es el idioma de las bases de datos. La **inyección** pasa cuando tu texto se cuela **dentro** de la consulta y cambia su significado. El carácter que suele romper la consulta es la comilla simple `'`.",
      "**Nivel 1 (In-Band)**: provoca un error metiendo una comilla y luego usa consultas `UNION SELECT` para enumerar la base de datos. La sala te explica la sintaxis; tú la aplicas.",
      "**Nivel 2 (bypass de login)**: en la caja de consulta y el formulario, construye una condición que siempre sea verdadera para saltarte la autenticación. Entiende **por qué** funciona, no lo copies sin más.",
      "**Nivel 3 (Boolean)** y **Nivel 4 (Time based)**: aquí la web no te muestra el dato, solo responde «sí/no» o tarda más. Deduces letra a letra; el nivel 4 usa `SLEEP()` para medir el retardo.",
      "Termina con la tarea **Remediation**: escribe en tu cuaderno las tres defensas (consultas parametrizadas, validar la entrada, mínimos privilegios) y explica en voz alta por qué la versión parametrizada no se puede inyectar: datos e instrucciones van por separado."
    ], learn: "La comilla `'` rompe una consulta mal hecha; `UNION SELECT` extrae datos y las consultas parametrizadas lo evitan al separar datos de instrucciones." }
  ],
  p3u10: [
    { t: "Lab Apprentice: «Reflected XSS into HTML context with nothing encoded»", s: [
      "Lee primero la teoría de XSS (la guía de PortSwigger te explica cómo entrar a la Academy y abrir el laboratorio). El primer laboratorio Apprentice de XSS reflejado se llama exactamente «Reflected XSS into HTML context with nothing encoded».",
      "Pulsa **Access the lab**. Es un blog: tiene un **buscador**. Escribe una palabra cualquiera, por ejemplo `prueba`, y busca.",
      "Mira la página de resultados: aparece «0 search results for 'prueba'». Tu texto se ha **reflejado** tal cual en la página. Confírmalo con **Ctrl + U** (código fuente): tu palabra está dentro del HTML sin ninguna codificación.",
      "Como el texto no se codifica, si en vez de una palabra escribes una **etiqueta HTML** con una etiqueta `<script>` que llame a la función `alert()`, el navegador la ejecutará en lugar de mostrarla como texto. Esa es la prueba de XSS.",
      "Escríbela tú en el buscador y pulsa buscar. Si salta el aviso, arriba aparece «Congratulations, you solved the lab!».",
      "En tu cuaderno apunta las tres defensas y qué evita cada una: **codificar la salida** (que el texto se muestre como texto), **CSP** (limita qué scripts se ejecutan) y cookies **HttpOnly** (que JavaScript no las lea). Solo en el laboratorio."
    ], learn: "Si una web refleja tu entrada sin codificarla, una etiqueta `<script>` se ejecuta: eso es XSS reflejado, y la defensa es codificar la salida." }
  ],
  p3u11: [
    { t: "Lab Apprentice de autenticación: «Username enumeration via different responses»", s: [
      "En la teoría de autenticación de PortSwigger, abre el laboratorio Apprentice «Username enumeration via different responses» y pulsa **Access the lab**.",
      "Objetivo: descubrir un **usuario válido** y luego su contraseña aprovechando que el servidor responde **distinto** según si el usuario existe o no.",
      "Haz un login con un usuario inventado y captúralo en Burp. Mándalo a **Intruder** (clic derecho → **Send to Intruder**): Intruder repite la petición cambiando un valor por cada palabra de una lista.",
      "Marca el campo del **usuario** como posición, carga la lista de usuarios que da el laboratorio y lanza el ataque. Ordena por la columna **Length** (longitud): la respuesta que mide distinto delata al usuario que existe. No se da la lista aquí; la trae el laboratorio.",
      "Repite el ataque sobre el **campo de contraseña** con el usuario ya encontrado para dar con la clave. Entra y el laboratorio se marca **Solved**.",
      "Apunta la causa (mensajes de error que revelan si un usuario existe, sin límite de intentos) y las defensas (mensajes genéricos, límite de intentos, 2FA)."
    ], learn: "Si el servidor responde distinto para un usuario válido, Intruder lo revela probando una lista; la defensa son mensajes genéricos y límite de intentos." },
    { t: "Lab Apprentice de IDOR: «Insecure direct object references»", s: [
      "En la teoría de control de acceso, abre el laboratorio Apprentice «Insecure direct object references» y pulsa **Access the lab**. Ya tocaste control de acceso en la Fase 2; esto es el caso concreto de IDOR.",
      "Entra con la cuenta que te da el laboratorio y usa la función de **chat en vivo**; descarga tu registro de chat con **View transcript**.",
      "Mira la dirección del archivo que descargaste: termina en un **número** seguido de `.txt`, por ejemplo `2.txt`. Ese número identifica **tu** transcripción.",
      "Cambia ese número por otro (por ejemplo `1.txt`) en la barra de direcciones y entra: el servidor te entrega la transcripción de **otra persona** porque no comprueba que sea tuya. Eso es un IDOR.",
      "Dentro de esa transcripción ajena hay una contraseña; úsala como pide el laboratorio para resolverlo. Hazlo solo aquí.",
      "Anota la causa (el servidor confía en un número que tú controlas) y la defensa (comprobar en el servidor que cada objeto pertenece a quien lo pide)."
    ], learn: "Cambiar un número de la URL para ver datos de otro es un IDOR; se arregla comprobando en el servidor que el objeto es tuyo." }
  ],
  p3u12: [
    { t: "Intro to Cyber Threat Intel: construir un perfil de amenaza", s: [
      "Lee las tareas **Cyber Threat Intelligence** y **CTI Lifecycle**: aprende qué es un **IOC** (indicador de compromiso: un hash de archivo malicioso, una IP o un dominio del atacante) y las fases del ciclo de inteligencia.",
      "En **CTI Standards & Frameworks** verás cómo encajan MITRE ATT&CK (que ya conoces), la Kill Chain, CVE/CVSS y los formatos **STIX/TAXII** para compartir inteligencia.",
      "En la tarea **Practical Analysis** pulsa **View Site**: se abre el «Static Site Lab» con una herramienta de vigilancia. Rellena los datos de la amenaza (por ejemplo un correo y un archivo descargado) para montar el **perfil**.",
      "Responde las preguntas del laboratorio con esos datos. La idea: pasar de datos sueltos a inteligencia útil para defender.",
      "Dibuja en tu cuaderno la **pirámide del dolor**: abajo lo que el atacante cambia en segundos (un hash), arriba sus **TTP** (tácticas, técnicas y procedimientos), lo más caro de cambiar.",
      "Explica en voz alta por qué detectar un **TTP** vale más que bloquear un hash: el atacante cambia el hash al instante, pero su forma de trabajar no."
    ], learn: "Un IOC (hash, IP, dominio) es un rastro fácil de cambiar; detectar los TTP del atacante, en la cima de la pirámide del dolor, duele mucho más." }
  ],
  p3u13: [
    { t: "Security Awareness y las señales del phishing", s: [
      "Haz la sala **Security Awareness**: cubre por qué todos somos objetivo, el coste de las filtraciones y los tipos de atacante. En la tarea de **Have I Been Pwned** busca tu correo en haveibeenpwned.com y, si sale en una filtración, cambia esa contraseña.",
      "Ahora practica el análisis por tu cuenta. Abre un correo de tu carpeta de **spam** **sin hacer clic en nada** ni abrir adjuntos.",
      "Busca las 4 señales: ¿el remitente real coincide con el nombre mostrado?, ¿el enlace lleva a donde dice? (pasa el ratón **por encima** del enlace, sin pulsar, y mira abajo la dirección real), ¿el mensaje mete prisa o miedo?, ¿pide datos o dinero?",
      "En Gmail abre el correo, pulsa los **tres puntos** (⋮) arriba a la derecha y elige **Mostrar original**. Se abre una página con las **cabeceras**.",
      "Localiza los resultados de **SPF**, **DKIM** y **DMARC**: comprueban si el servidor que envió el correo está autorizado por ese dominio. Un `PASS` es buena señal; un `FAIL` o `SOFTFAIL` es sospechoso.",
      "Anota tu veredicto y por qué. Nunca pruebes esto haciendo clic: el análisis se hace mirando, no abriendo."
    ], learn: "Un phishing se detecta sin hacer clic: remitente, enlace real al pasar el ratón, urgencia, y SPF/DKIM/DMARC en «Mostrar original»." }
  ],
  p3u14: [
    { t: "Metasploit: Introduction, comando a comando", s: [
      "Despliega la máquina del laboratorio y la AttackBox. Abre Metasploit con `msfconsole` (tarda unos segundos en cargar).",
      "`search ms17-010` busca módulos relacionados con una vulnerabilidad. En los resultados, cada módulo tiene un número y una ruta.",
      "`use exploit/windows/smb/ms17_010_eternalblue` selecciona el **exploit** (el módulo que aprovecha la vulnerabilidad). También puedes escribir `use` y el número del resultado.",
      "`show options` lista lo que hay que rellenar. Lo esencial es **RHOSTS** (la máquina objetivo): `set RHOSTS 10.10.x.x` con la IP del laboratorio. `setg` lo fija para toda la sesión.",
      "`info` muestra la ficha del módulo: qué hace y a qué sistemas afecta. Léela antes de lanzar nada.",
      "`run` (o `exploit`) lanza el módulo contra la máquina del laboratorio. Un módulo **auxiliary** (`use auxiliary/scanner/smb/smb_ms17_010`) solo comprueba si es vulnerable, sin atacar; úsalo primero.",
      "Apunta la diferencia: **exploit** abre la puerta, **payload** (carga útil) es lo que se ejecuta dentro, **auxiliary** escanea. Lección defensiva: casi todo esto son fallos con parche publicado; actualizar a tiempo los frena. Solo contra la máquina de la sala."
    ], learn: "En Metasploit: `search` busca, `use` elige, `show options` y `set RHOSTS` configuran, `info` informa y `run` lanza; un `auxiliary` solo comprueba." }
  ],
  p3u15: [
    { t: "Vulnversity: reconocimiento y descubrimiento web", s: [
      "Despliega la máquina y la AttackBox. Empieza enumerando con lo de la unidad 5: `nmap -sV MACHINE_IP` para ver puertos, servicios y versiones. Anota en qué puerto corre la web (no suele ser el 80).",
      "Para descubrir carpetas de la web usa **gobuster**, un buscador de directorios como `dirb` pero más rápido: `gobuster dir -u http://MACHINE_IP:PUERTO -w /usr/share/wordlists/dirb/common.txt`. `dir` = modo directorios, `-u` = la dirección, `-w` = la **lista de palabras** que prueba.",
      "Fíjate en la carpeta de subida de archivos que aparezca en los resultados. La sala te guía: tu trabajo es entender **por qué** cada paso, no solo seguirlo.",
      "La sala usa Burp para averiguar qué extensiones de archivo acepta la subida. Sigue sus instrucciones y, cuando toque, usa `nc -lvnp PUERTO` (netcat a la escucha, de la Fase 1) para recibir la conexión de vuelta.",
      "Para la parte final busca archivos con permiso especial **setuid** (lo viste en Bandit) con `find / -perm -u=s -type f 2>/dev/null`. El `2>/dev/null` esconde los errores.",
      "Toma notas como si fueras a escribir el informe, porque en la unidad 18 lo harás con esta máquina: para cada paso anota qué hiciste, por qué y cómo se habría evitado. Reparte la sala en 3 bloques."
    ], learn: "`nmap -sV` enumera, `gobuster dir -u … -w lista` descubre carpetas y `find / -perm -u=s` busca programas setuid; toma notas para el informe." }
  ],
  p3u16: [
    { t: "Linux Privilege Escalation: enumerar antes de escalar", s: [
      "Entra por SSH con el usuario que da la sala (`karen` en varias tareas). **Escalar privilegios** es pasar de usuario normal a **root** (administrador), casi siempre por configuraciones descuidadas.",
      "Primero **enumera** (reúne información del sistema): `hostname`, `uname -a` (versión del núcleo), `id` y `sudo -l` (qué puedes ejecutar como otro usuario). Léelos con calma.",
      "En la tarea **Sudo**: `sudo -l` lista los programas que puedes correr con `sudo`. **sudo** («super user do») ejecuta un comando como administrador. Si un programa de la lista permite abrir una shell, ahí está la vía. La web **GTFOBins** te dice qué programas sirven para eso.",
      "En la tarea **SUID**: busca programas con el bit setuid con `find / -type f -perm -04000 -ls 2>/dev/null`. Un programa setuid corre con los permisos de su dueño (a veces root).",
      "En las tareas **Capabilities**, **Cron Jobs** y **PATH**: revisa `getcap -r / 2>/dev/null` (capacidades), el archivo `/etc/crontab` (tareas programadas) y las carpetas donde puedes escribir. Cada una es una configuración mal puesta.",
      "Rellena tu tabla: causa (sudo amplio, setuid de más, cron editable, PATH manipulable), cómo se detecta y cómo se corrige (mínimo privilegio, quitar setuid, permisos correctos, parches). Solo en la máquina de la sala."
    ], learn: "Se escala enumerando primero (`id`, `sudo -l`, `uname -a`) y luego revisando sudo, SUID, capabilities y cron; cada fallo es una mala configuración con arreglo." }
  ],
  p3u17: [
    { t: "Windows PrivEsc: mismas ideas, otras configuraciones", s: [
      "Conéctate a la máquina por **RDP** (Escritorio remoto) con el usuario que da la sala. En Windows la meta es pasar a **Administrador** o **SYSTEM** aprovechando algo mal configurado.",
      "La sala usa herramientas que enumeran el sistema por ti: **winPEAS** y **PowerUp.ps1** listan configuraciones peligrosas, y **accesschk.exe** (de Microsoft) comprueba permisos de servicios. Ejecútalas según indica cada tarea y lee lo que marcan en rojo.",
      "Recorre las tareas por tema, sin saltarte ninguna: **servicios** con permisos débiles que un usuario normal puede cambiar, rutas de servicio **sin comillas** con espacios, **credenciales guardadas** en archivos o en el registro, y **tareas programadas** editables.",
      "Para cada técnica entiende la causa (por qué funciona) antes de ejecutarla, porque eso es lo que apuntarás en la tabla.",
      "Rellena la misma tabla que en Linux: causa, cómo se detecta, cómo se corrige (revisar permisos de servicios, poner comillas en las rutas, no guardar contraseñas en texto, parchear).",
      "Compara en voz alta Linux y Windows: en los dos, escalar casi nunca es un fallo raro, sino una configuración descuidada. Todo esto, solo en la máquina de la sala."
    ], learn: "En Windows winPEAS/PowerUp/accesschk encuentran servicios, rutas sin comillas, credenciales y tareas mal configuradas; la causa, como en Linux, es la mala configuración." }
  ],
  p3u18: [
    { t: "Escribe el informe de Vulnversity", s: [
      "Abre un documento nuevo. El informe tiene dos lectores: **directivos** (quieren el riesgo en lenguaje claro) y **técnicos** (quieren reproducir y arreglar). Escribe para los dos.",
      "Monta la estructura: **1** resumen ejecutivo, **2** alcance y método, **3** hallazgos, **4** recomendaciones priorizadas.",
      "Escribe el **resumen ejecutivo** de Vulnversity en 5 líneas, **sin palabras técnicas**: qué probaste, qué encontraste y qué riesgo supone para el negocio.",
      "Documenta **2 hallazgos** con tus notas. Cada uno lleva: título, gravedad **CVSS**, evidencia (captura o comando), pasos para reproducirlo e impacto.",
      "Para la gravedad usa la calculadora CVSS (la guía de NVD te explica cada botón). Elige las opciones que describen tu hallazgo y copia al informe la nota y la cadena `CVSS:3.1/...` para que cualquiera compruebe tu cálculo.",
      "Termina con las **recomendaciones ordenadas por prioridad**: primero lo más grave y fácil de arreglar. Relee: un buen informe se entiende sin que tú estés presente."
    ], learn: "Un informe de pentest va de resumen ejecutivo sin tecnicismos a hallazgos con CVSS y pasos para reproducir, y acaba en recomendaciones por prioridad." }
  ],
  p3u19: [
    { t: "Máquina sin guía: tu método paso a paso", s: [
      "Elige **Pickle Rick** o **Simple CTF** y anota la hora de inicio. Ahora no hay tutorial: aplicas tu método y la **regla de los 30 minutos** (30 min atascado antes de mirar una pista mínima y cerrar la pestaña).",
      "**1. Enumerar**: despliega la máquina y lánzale `nmap -sV -sC -p- MACHINE_IP` para ver todos los puertos, servicios y versiones. Apunta cada puerto abierto.",
      "**2. Explorar la web** (si hay): abre la página, mira el **código fuente** (Ctrl + U), prueba `/robots.txt` y busca carpetas con `gobuster dir -u http://MACHINE_IP -w /usr/share/wordlists/dirb/common.txt`.",
      "**3. Buscar versiones y exploits**: con la versión que dio `-sV`, busca si tiene una vulnerabilidad conocida (su **CVE**). En Simple CTF, una de las preguntas es justo el CVE.",
      "**4. Acceso**: consigue entrar según lo que encontraste (un servicio vulnerable, credenciales, un panel). Guarda la bandera de usuario.",
      "**5. Escalar**: ya dentro, repite la enumeración de privilegios: `sudo -l`, busca setuid, mira otros usuarios. Consigue root y la bandera final.",
      "**6. Documentar**: escribe el informe corto (resumen, hallazgos, recomendaciones) con el formato de la unidad 18. Todo contra la IP de la sala."
    ], learn: "El método es siempre el mismo: enumerar con nmap, explorar la web, buscar el CVE de cada versión, entrar, escalar y documentar." }
  ],
  p3u20: [
    { t: "Prepararte para la eJPT (examen práctico)", s: [
      "La **eJPT** (de INE Security) es un examen **práctico**: te dan un laboratorio y demuestras lo que sabes hacer, no recitas teoría. El carné dura 3 años. Lee la página oficial (la guía de INE te ayuda a entrar).",
      "Copia el **temario** oficial en tu cuaderno con sus pesos: **Assessment Methodologies** (25%), **Host & Network Penetration Testing** (35%), **Host & Networking Auditing** (25%) y **Web Application Penetration Testing** (15%). Marca con ✓ lo que dominas y con ✗ lo que no.",
      "Empieza por los temas con ✗ y repasa tus chuletas de Nmap, web y escalada de las unidades anteriores.",
      "Haz **dos o tres máquinas fáciles más sin guía** (como en la unidad 19), cada una con su informe. Es el mejor ensayo del examen.",
      "Sobre el acceso: necesitas una **suscripción de INE** y un **voucher** (vale) del examen. Algunos planes (como el bundle «eJPT + Prep») ya incluyen el voucher y una **repetición gratis** si no apruebas a la primera. El voucher caduca a los 180 días: no lo compres hasta tenerlo todo con ✓.",
      "Durante el examen, toma notas como en un pentest real: tu metodología ordenada es tu mejor herramienta."
    ], learn: "La eJPT es un examen práctico de 4 dominios (metodologías 25%, red 35%, auditoría 25%, web 15%); se aprueba con método y máquinas sin guía ensayadas antes." }
  ]
});
