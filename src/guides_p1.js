Object.assign(UNIT_GUIDES, {
  s01: [
    { t: "Crear tu cuenta de TryHackMe", s: [
      "Abre `tryhackme.com` en Brave y pulsa el botón **Join for FREE** (arriba a la derecha). Si ya tienes cuenta, pulsa **Log In**.",
      "Rellena el formulario: un **nombre de usuario** (será público: usa uno serio, por ejemplo tu nombre y un número), tu **correo** y una **contraseña** que no uses en otro sitio. También puedes entrar con el botón de Google.",
      "Revisa tu correo (mira también **Spam** o **Promociones**) y pulsa el enlace de verificación que te manda TryHackMe.",
      "Al entrar puede salir un pequeño cuestionario sobre tus intereses o tu nivel. Respóndelo con sinceridad (principiante) o sáltalo: no cambia nada importante.",
      "No pagues nada. La cuenta gratis basta para toda la Fase 1: las salas que vas a hacer son gratuitas. Si te ofrecen **Premium** o **Subscribe**, cierra el aviso.",
      "Comprueba que funciona: arriba a la derecha debe aparecer tu foto o tu inicial. Cierra sesión y vuelve a entrar con **Log In** para confirmar que recuerdas la contraseña."
    ], learn: "Ya tienes cuenta gratis en TryHackMe, la plataforma de salas guiadas que usarás en redes y web." },
    { t: "Crear tu cuenta de CyLab Security Academy (antes picoCTF)", s: [
      "Abre `learn.cylabacademy.org` y pulsa **Sign Up**. Si ya tenías cuenta de picoCTF, prueba primero **Log In** con tus datos de siempre.",
      "Rellena usuario, correo y contraseña, y acepta las condiciones. Te llega un correo de confirmación: pulsa su enlace para activar la cuenta.",
      "Entra con **Log In**. Busca en el menú la **Challenge Library** (biblioteca de retos) y ábrela: debes ver una lista de retos con categorías como General Skills o Web Exploitation.",
      "No resuelvas nada todavía: el primer reto llega en la sesión 5, con su guía.",
      "Guarda tus dos contraseñas en un sitio seguro (el gestor de contraseñas de Brave o una libreta), no en un archivo de texto en el escritorio."
    ], learn: "CyLab Security Academy es la nueva casa de picoCTF: retos con terminal Linux incluida en el navegador." },
    { t: "Crear tu carpeta Cuaderno-hacker en Windows", s: [
      "Pulsa la tecla **Windows + E**: se abre el **Explorador de archivos**.",
      "En la columna izquierda haz clic en **Documentos**.",
      "Haz clic derecho en un espacio vacío → **Nuevo** → **Carpeta**. Escribe `Cuaderno-hacker` y pulsa Enter.",
      "Entra en la carpeta. Haz clic derecho → **Nuevo** → **Documento de texto** y llámalo `sesion-01.txt`. Ábrelo con doble clic.",
      "Escribe ahí, sin buscar nada, qué crees que hace un hacker ético en un día normal. Guarda con **Ctrl + S**. Lo releerás en la sesión 30.",
      "Para capturas de pantalla: **Windows + Shift + S**, elige la zona y luego pega la imagen donde quieras guardarla. Guárdalas también en esta carpeta."
    ], learn: "Tu cuaderno es tu memoria de trabajo: todo lo que intentes y aprendas va ahí." }
  ],

  s02: [
    { t: "Sala Offensive Security Intro, tarea por tarea", s: [
      "Abre la ruta Pre Security. Tiene 7 módulos; el primero es **Introduction to Cyber Security** y su primera sala es **Offensive Security Intro** (gratis). Haz clic en ella y pulsa **Join Room**.",
      "**Task 1 «Think like a Hacker!»**: lee el texto y responde la pregunta de opciones: te pregunta cómo se llama simular las acciones de un atacante para encontrar fallos.",
      "**Task 2 «Starting the Lab»**: pulsa el botón verde de la tarea (**Start Machine**). La página se divide en dos y a la derecha, tras 1 o 2 minutos, aparece un escritorio con un navegador abierto en **FakeBank**, un banco falso hecho para practicar.",
      "Eso que ves a la derecha es una **máquina virtual** (virtual machine, VM): una computadora completa simulada por software. Corre en los servidores de TryHackMe y tú solo ves su pantalla dentro de Brave. No instalas nada, no toca tu laptop y, si la rompes, no pasa nada: se borra al terminar.",
      "Responde la pregunta de la Task 2 leyendo lo que muestra FakeBank en esa pantalla.",
      "**Task 3 «Find Hidden Pages»**: pulsa el botón verde de la tarea que abre la terminal de la máquina virtual. Es tu primer contacto con una terminal (la aprenderás bien en la sesión 5): solo escribe exactamente `dirb http://fakebank.thm` y pulsa Enter.",
      "`dirb` prueba miles de nombres de páginas típicos (admin, login, images…) contra la web y te avisa de los que existen. Espera a que termine: las líneas que empiezan por `+` son páginas encontradas. La pregunta te pide la que no es `/images`.",
      "**Task 4 «Attack the Admin Page»**: en el navegador de la máquina virtual (no en Brave), escribe en la barra de direcciones la dirección de FakeBank seguida de la página escondida que encontraste y pulsa Enter. Sigue los datos de la tarea para hacer la transferencia y copia el mensaje verde que aparece.",
      "Ética: aquí atacas FakeBank porque es un laboratorio hecho para eso. Hacer lo mismo con una web real sin permiso escrito es un delito. Al terminar, piensa: una transferencia que nadie autorizó, ¿qué letra de la tríada CIA rompe? Anótalo en tu cuaderno con un ejemplo de la vida real para cada letra."
    ], learn: "Una máquina virtual es una computadora simulada para practicar sin riesgo; `dirb` encuentra páginas escondidas probando nombres comunes." }
  ],

  s03: [
    { t: "Sala Defensive Security Intro, tarea por tarea", s: [
      "En la ruta Pre Security abre la segunda sala, **Defensive Security Intro** (gratis), y pulsa **Join Room**. Es la otra cara de ayer: ahora defiendes FakeBank del ataque.",
      "Esta sala **no** necesita máquina virtual. Las tareas 2, 3 y 4 dicen «Task includes website» y traen un botón **View Site**: abre a la derecha una web simulada, no una computadora entera. Mucho más ligera.",
      "**Task 1 «Think like a Defender»**: lee y responde. Fíjate en qué hace el **blue team** (equipo azul) en un día normal: vigilar, detectar y responder.",
      "**Task 2 «Detect Suspicious Activity»**: pulsa **View Site**. Se abre el panel de vigilancia (dashboard) de FakeBank. Revisa las alertas y busca la dirección IP de origen que se repite en la actividad sospechosa. Una **dirección IP** es el número que identifica a un equipo en la red (lo verás a fondo en la sesión 6).",
      "**Task 3 «Identify the Attack»**: en la lista **URL Discovery Attempts** busca la última dirección que probó el atacante (mira la hora). Es justo lo que hacía `dirb` ayer, visto desde el lado del defensor.",
      "**Task 4 «Stop the Attack»**: en el cuadro **Add Firewall Rule** escribe la IP del atacante, elige **BLOCK** y pulsa **Apply**. Un **firewall** (cortafuegos) decide qué tráfico entra y cuál no. Cuando salga el mensaje de éxito, copia la flag y pégala en la pregunta.",
      "En tu cuaderno: ¿qué letra de la CIA protegiste al bloquear al atacante? Escribe una frase."
    ], learn: "El blue team detecta en los registros lo que hace el atacante y lo frena, por ejemplo bloqueando su IP en el firewall." },
    { t: "Tu computadora por dentro: Administrador de tareas y PowerShell", s: [
      "Pulsa **Ctrl + Shift + Esc**: se abre el **Administrador de tareas**. Si sale en pequeño, pulsa **Más detalles**.",
      "En la columna de la izquierda pulsa **Rendimiento** (el icono de una gráfica). Haz clic en **CPU**, luego en **Memoria** y luego en **Disco 0 (C:)**. Abre Brave con varias pestañas y mira cómo sube el uso de CPU y de memoria.",
      "Anota: cuántos GB de **Memoria** (RAM) tiene tu laptop y cuántos GB de capacidad tiene el disco. La RAM es mucho más pequeña: guarda solo lo que usas ahora y se borra al apagar.",
      "Ahora vas a usar **PowerShell**, la terminal de Windows: un programa donde escribes órdenes en vez de hacer clic. Pulsa la tecla **Windows**, escribe `PowerShell` y pulsa Enter.",
      "Se abre una ventana con algo como `PS C:\\Users\\tu-nombre>`. Eso es el **prompt**: significa que te está esperando. Escribe `systeminfo` y pulsa Enter. Tarda unos segundos.",
      "Busca estas líneas: **Nombre del sistema operativo**, **Procesador(es)** y **Cantidad total de memoria física**. Si tu Windows está en inglés: OS Name, Processor(s) y Total Physical Memory. Comprueba que la memoria coincide con la del Administrador de tareas.",
      "Escribe `exit` y pulsa Enter para cerrar PowerShell. Ya sabes abrirlo: lo usarás desde la sesión 6.",
      "Ninguna sala de hoy usa máquina virtual. Recuerda la idea de ayer: una máquina virtual tiene sus propios CPU, RAM y disco, pero simulados, y los saca prestados de un servidor real."
    ], learn: "La CPU ejecuta, la RAM guarda lo de ahora y se borra al apagar, el disco guarda para siempre; PowerShell es la terminal de Windows." }
  ],

  s04: [
    { t: "Cómo convertir lo que olvidaste en buenas tarjetas", s: [
      "Abre tu cuaderno con la lista de 5 cosas que escribiste sin mirar y lo que marcaste como olvidado. Cada cosa olvidada es una tarjeta. Lo que recordaste bien no necesita tarjeta.",
      "Regla 1, **una sola idea por tarjeta**. Mal: «¿Qué es la tríada CIA?» → «Confidencialidad, integridad, disponibilidad y lo que significa cada una». Bien: tres tarjetas, por ejemplo «¿Qué letra de la CIA se rompe si alguien cambia tus notas sin permiso?» → «Integridad».",
      "Regla 2, **que te obligue a sacar la respuesta**, no a adivinar. Evita sí o no. Mal: «¿La RAM se borra al apagar?» → «Sí». Bien: «¿Qué memoria se borra al apagar la computadora?» → «La RAM».",
      "Regla 3, **respuesta corta**: de 1 a 5 palabras. Si necesitas un párrafo, la tarjeta tiene demasiadas ideas: divídela.",
      "Regla 4, **con algo que hiciste tú**: se recuerda mejor. Por ejemplo: «¿Qué herramienta usé en FakeBank para encontrar páginas escondidas?» → «dirb». «¿Qué hice en el firewall para frenar al atacante?» → «Bloquear su IP».",
      "Regla 5, si una idea va en los dos sentidos, haz dos tarjetas: «¿Qué hace el red team?» → «Simula ataques reales» y «¿Cómo se llama el equipo que vigila y responde?» → «Blue team».",
      "Ve a la pestaña **Tarjetas** de esta app. En **Crear una tarjeta** escribe tu pregunta en **pregunta corta**, la respuesta en **respuesta** y pulsa **+ añadir tarjeta**. Repite hasta tener al menos 3.",
      "Baja a **Todas tus tarjetas** y léelas. Si alguna tiene dos ideas o una respuesta larga, pulsa **borrar** y rehazla.",
      "Pulsa **./repasar** y repasa todas las pendientes: di la respuesta antes de pulsar **mostrar respuesta** y califícate con sinceridad."
    ], learn: "Buena tarjeta = una idea, pregunta que obliga a recordar, respuesta corta y, si puedes, sacada de algo que hiciste." }
  ],

  s06: [
    { t: "Sala What Is Networking?, tarea por tarea", s: [
      "Abre la sala y pulsa **Join Room**. Tiene 5 tareas y unos 30 minutos.",
      "**Task 1 «What is Networking?»** y **Task 2 «What is the Internet?»**: solo lectura. Las respuestas están en el texto (el término para dispositivos conectados y quién inventó la web).",
      "**Task 3 «Identifying Devices on a Network»**: lee la parte de IP y MAC. Las preguntas piden qué significan las siglas IP y MAC, cómo se llama cada número de una IP separado por puntos y cuántos tiene.",
      "Pulsa **View Site** en la Task 3. A la derecha sale un wifi de hotel simulado: el router deja pasar los paquetes de **Alice**, que pagó, y bloquea los tuyos (los de **Bob**). Los paquetes verdes pasan y los tuyos se descartan.",
      "Cambia la MAC de tu dispositivo por la de Alice en la casilla de la MAC y aplica el cambio. Mira cómo ahora el router deja pasar tus paquetes: aparece la flag. Esto se llama **MAC spoofing** (falsificar la MAC). Funciona porque el router solo mira la MAC, que se puede cambiar. Hazlo solo en laboratorios: en una red real sin permiso es ilegal.",
      "**Task 4 «Ping (ICMP)»**: lee qué es `ping` (manda un mensaje corto y espera la respuesta para ver si un equipo está vivo). Pulsa **View Site**, escribe en la casilla la dirección `8.8.8.8` y lanza el ping. La web muestra el comando que se ejecutaría y la flag.",
      "**Task 5 «Continue Your Learning: Intro to LAN»**: no tienes que hacer esa otra sala ahora. Si la tarea no tiene pregunta, pulsa **Complete** para cerrarla."
    ], learn: "La IP identifica un equipo en la red y puede cambiar; la MAC viene de fábrica, pero se puede falsificar." },
    { t: "Tu propia red en PowerShell: ipconfig y ping", s: [
      "Abre PowerShell (tecla **Windows**, escribe `PowerShell`, Enter). Escribe `ipconfig /all` y pulsa Enter. Sale mucho texto, uno por cada adaptador de red.",
      "Busca el bloque de tu conexión: «Adaptador de LAN inalámbrica Wi-Fi» si usas wifi, o «Adaptador de Ethernet» si usas cable. Ignora los que digan «Medios desconectados».",
      "En ese bloque busca **Dirección física**: es tu MAC, seis pares separados por guiones (como `A4-5E-60-12-34-56`). Busca **Dirección IPv4**: es tu IP, por ejemplo `192.168.1.25`. En Windows en inglés: Physical Address e IPv4 Address.",
      "Busca **Puerta de enlace predeterminada** (Default Gateway): es la IP de tu router. Suele terminar en `.1`.",
      "Comprueba si tu IP es privada: ¿empieza por `192.168.`, por `10.` o entre `172.16.` y `172.31.`? Si sí, solo existe dentro de tu casa. Afuera, internet ve la IP pública de tu router.",
      "Curiosidad: Windows puede usar una MAC aleatoria en cada wifi (opción «Direcciones de hardware aleatorias»). Es la misma idea que el MAC spoofing de la sala, pero para tu privacidad.",
      "Escribe `ping google.com` y pulsa Enter. En Windows manda 4 mensajes y se detiene solo. Cada línea dice «Respuesta desde … tiempo=35ms»: ese tiempo es lo que tarda en ir y volver.",
      "Al final lee **Estadísticas de ping**: enviados, recibidos y perdidos. Si los perdidos son 0, la conexión va bien. Anota tu IP privada, tu MAC y el tiempo medio en el cuaderno."
    ], learn: "`ipconfig /all` muestra tu IP, tu MAC y tu router; `ping` comprueba si un equipo responde y cuánto tarda." }
  ],

  s07: [
    { t: "Sala Intro to Networking (hoy se llama «Introductory Networking»)", s: [
      "Abre el enlace: la sala se llama ahora **Introductory Networking**, pero es la misma. Pulsa **Join Room**. Tiene 9 tareas.",
      "**Task 2 «The OSI Model: An Overview»**: antes de leer, escribe de memoria las capas que recuerdes del concepto de hoy. Luego lee la tarea y responde: casi todas las preguntas son «¿qué capa hace tal cosa?». Usa tu frase para recordar el orden.",
      "**Task 3 «Encapsulation»**: cada capa envuelve el mensaje con su cabecera, como meter una carta en un sobre y el sobre en una caja. Las preguntas piden cómo se llama el dato en cada capa.",
      "**Task 4 «The TCP/IP Model»**: es la versión práctica del OSI, con solo 4 capas. Dibuja en tu cuaderno las 7 capas del OSI al lado de las 4 de TCP/IP y une con flechas cuáles se juntan.",
      "Las **Tasks 5 a 8** usan herramientas de Linux (`ping`, `traceroute`, `whois` y `dig`). Para eso pulsa **Start AttackBox**, arriba de la sala: es una máquina virtual Linux en el navegador, como la de FakeBank. Con la cuenta gratis tienes **1 hora al día**, así que haz estas 4 tareas seguidas.",
      "En la AttackBox abre la terminal (el icono de la pantalla negra). Muchas preguntas piden una opción (switch) de un comando: búscala en su manual con `man ping`. Dentro del manual escribe `/` seguido de una palabra (por ejemplo `/interval`) y Enter para buscarla, `n` para ir al siguiente resultado y `q` para salir.",
      "Si un comando contra internet no responde dentro de la AttackBox, hazlo en PowerShell en tu laptop: `ping dominio` funciona igual, y en Windows `traceroute` se llama `tracert`. Recuerda: `Ctrl + C` detiene un comando que no termina.",
      "Para `whois` (quién registró un dominio), si no funciona en la AttackBox usa la versión web que enlaza la propia tarea. Las preguntas de `dig` (Task 8) se responden casi todas leyendo el texto.",
      "Al terminar, cierra la AttackBox con su botón **Terminate** para no gastar tu hora. Repasa el esquema del modelo OSI de la sala y escribe un ejemplo de algo que trabaje en cada capa."
    ], learn: "El modelo OSI tiene 7 capas, TCP/IP las resume en 4; `ping`, `traceroute`, `whois` y `dig` exploran la red desde la terminal." }
  ],

  s08: [
    { t: "Sala Networking Concepts, primera mitad (tareas 1 a 5)", s: [
      "Abre la sala y pulsa **Join Room**. Tiene 8 tareas: hoy haces de la 1 a la 5 (hasta «UDP and TCP» incluida). No necesitas máquina en ninguna de ellas.",
      "**Task 2 «OSI Model»**: repite lo de ayer. Úsala como prueba: antes de leer, escribe las 7 capas en orden en tu cuaderno y luego comprueba. Las preguntas piden qué capa hace cada trabajo.",
      "**Task 3 «TCP/IP Model»**: las preguntas piden en qué capa está un protocolo (por ejemplo HTTP) y cuántas capas del OSI caben en la capa de aplicación de TCP/IP. Mira el dibujo comparativo de la tarea.",
      "**Task 4 «IP Addresses and Subnets»**: verás salidas de `ifconfig` e `ip a s`, que son el `ipconfig` de Linux. Una **subred** es un trozo de red: `/24` significa que los 3 primeros números de la IP son la red y el último es el equipo. Te pedirán reconocer una IP pública y una IP imposible (ningún número puede pasar de 255).",
      "**Task 5 «UDP and TCP»**: lee con calma el saludo de tres pasos (SYN, SYN-ACK, ACK). Las preguntas piden cuál de los dos protocolos usa ese saludo, cuál no establece conexión y cuántos puertos existen aproximadamente.",
      "Para aquí. Dibuja en tu cuaderno dos columnas, cliente y servidor, y tres flechas: SYN (cliente → servidor), SYN-ACK (servidor → cliente) y ACK (cliente → servidor).",
      "Escribe dos aplicaciones que usen TCP y dos que usen UDP, y por qué: ¿qué importa más en cada una, que llegue todo o que llegue rápido?"
    ], learn: "TCP confirma cada entrega y empieza con SYN, SYN-ACK, ACK; UDP no confirma nada y por eso es más rápido." }
  ],

  s09: [
    { t: "Sala Networking Concepts, segunda mitad (tareas 6 a 8)", s: [
      "**Task 6 «Encapsulation»**: cada capa le da un nombre distinto a su trozo de datos: **segmento** en TCP, **datagrama** en UDP, **paquete** en IP y **trama** (frame) en wifi o Ethernet. Las preguntas piden esos nombres.",
      "**Task 7 «Telnet»**: `telnet` es un programa que abre una conexión TCP con cualquier puerto y te deja escribirle texto a mano. No cifra nada, por eso hoy solo se usa para hacer pruebas. Te sirve para ver los puertos funcionando.",
      "Pulsa el botón verde **Start Lab Machine** de la Task 7 y espera a que aparezca su IP. Luego pulsa **Start AttackBox** (tu hora gratis del día) y abre su terminal. Solo puedes conectarte a esa IP: es la máquina de práctica de la sala.",
      "Puerto 7 (echo): escribe `telnet IP 7`, cambiando IP por la de la máquina. Escribe una frase y pulsa Enter: el servidor te la devuelve igual. Para salir pulsa `Ctrl + ]`, escribe `quit` y Enter.",
      "Puerto 13 (daytime): `telnet IP 13`. El servidor te manda la fecha y la hora y cierra la conexión solo.",
      "Puerto 80 (web): `telnet IP 80`. Escribe `GET / HTTP/1.1` y Enter, luego la línea `Host:` que indica la tarea y Enter, y pulsa **Enter otra vez** (la línea vacía le dice al servidor que terminaste de pedir).",
      "La respuesta trae cabeceras y el código HTML de la página. La cabecera `Server:` dice qué programa de servidor web es, y en el HTML está la flag. Esto es exactamente lo que hace tu navegador sin que lo veas.",
      "**Task 8 «Conclusion»**: pulsa **Complete**. Después cierra la máquina y la AttackBox con **Terminate**."
    ], learn: "Un puerto es una puerta a un servicio; con `telnet IP puerto` hablas a mano con él, incluso pidiendo una web con GET." },
    { t: "Los puertos desde tu laptop y tu dibujo", s: [
      "Abre PowerShell y escribe `Test-NetConnection google.com -Port 443`. Tarda unos segundos.",
      "Lee el resultado: **RemoteAddress** es la IP de Google, **RemotePort** el puerto y **TcpTestSucceeded : True** significa que el saludo TCP se completó: el puerto 443 (HTTPS) está abierto.",
      "Prueba un puerto que Google no ofrece: `Test-NetConnection google.com -Port 22`. Tarda más y termina con un aviso amarillo y **TcpTestSucceeded : False**. Así se ve un puerto cerrado o filtrado.",
      "Escribe `netstat -an`. Cada línea es una conexión: protocolo, **Dirección local** (tu IP:puerto), **Dirección remota** (la otra IP:puerto) y **Estado**.",
      "Busca líneas con estado **ESTABLISHED** (o ESTABLECIDO) y dirección remota terminada en `:443`: son conexiones HTTPS abiertas ahora mismo, sobre todo de Brave. Las que dicen **LISTENING** (o ESCUCHANDO) son puertos de tu laptop esperando conexiones.",
      "Para el dibujo de WhatsApp, pon en orden: tu teléfono (IP privada) → tu router (cambia a IP pública) → internet → servidores de WhatsApp (conexión TCP cifrada) → el router de la otra persona → su teléfono. Marca en cada salto qué capa trabaja: MAC en la red de casa, IP entre redes, TCP de punta a punta.",
      "Hazle una foto al dibujo con el iPhone, pásala a la laptop y guárdala en `Documentos\\Cuaderno-hacker`."
    ], learn: "`Test-NetConnection` comprueba un puerto concreto; `netstat -an` muestra todas las conexiones abiertas de tu equipo." }
  ],

  s11: [
    { t: "Sala DNS in Detail, tarea por tarea", s: [
      "Abre la sala y pulsa **Join Room**. Tiene 5 tareas; solo la última es práctica.",
      "**Task 1 «What is DNS?»**: la pregunta es qué significan las siglas. Está en el texto.",
      "**Task 2 «Domain Hierarchy»**: aprende las partes de un nombre, de derecha a izquierda: **TLD** (dominio de nivel superior, como `.com`), el **dominio de segundo nivel** (como `google`) y el **subdominio** (como `www` o `mail`). Las preguntas piden límites de longitud y ejemplos: están en el texto.",
      "**Task 3 «Record Types»**: A, AAAA, CNAME, MX y TXT. Las preguntas te piden elegir el tipo de registro según lo que buscas. Si dudas, vuelve al concepto de hoy.",
      "**Task 4 «Making A Request»**: el viaje de una consulta: tu equipo → **resolver** → **servidor raíz** → servidor del **TLD** → **servidor autoritativo**. Fíjate en el **TTL** (time to live): los segundos que se guarda la respuesta antes de volver a preguntar.",
      "**Task 5 «Practical»**: pulsa **View Site**. A la derecha sale una herramienta para hacer consultas DNS: eliges el **tipo de registro** en una lista, escribes el nombre y lanzas la consulta. Debajo te muestra el comando `nslookup` equivalente que usarías en tu computadora.",
      "Cada pregunta te dice el tipo de registro que necesitas: la del CNAME, consulta tipo CNAME; la del TXT, tipo TXT; la del MX, tipo MX; y la del registro A, tipo A. Escribe el nombre exactamente como aparece en la pregunta y copia el valor que te devuelve."
    ], learn: "El DNS traduce nombres a IP preguntando de arriba abajo (raíz, TLD, autoritativo); cada tipo de registro guarda un dato distinto." },
    { t: "Consultas DNS desde tu laptop", s: [
      "Abre PowerShell y escribe `nslookup google.com`.",
      "Las dos primeras líneas (**Servidor** y **Address**) son tu **resolver**: el servidor DNS al que pregunta tu laptop, a menudo tu router o el de tu proveedor de internet.",
      "Después sale «Respuesta no autoritativa»: significa que la respuesta viene de la memoria del resolver, no del servidor autoritativo de Google. Es lo normal.",
      "En **Addresses** verás varias IP: las que tienen `:` son IPv6 (registro AAAA) y las de cuatro números con puntos son IPv4 (registro A). Anota una IPv4.",
      "Ahora el correo de Gmail: `Resolve-DnsName gmail.com -Type MX`. Sale una tabla: **NameExchange** es el nombre del servidor de correo y **Preference** su prioridad (cuanto más bajo el número, antes se usa).",
      "Lo mismo con el comando clásico: `nslookup -type=MX gmail.com`. Compara: deben salir los mismos servidores.",
      "En tu cuaderno escribe el camino de una consulta DNS con tus palabras, de tu laptop al servidor autoritativo y de vuelta."
    ], learn: "`nslookup` y `Resolve-DnsName` hacen consultas DNS desde Windows; `-Type MX` pide los servidores de correo." }
  ],

  s12: [
    { t: "Sala HTTP in Detail, primera mitad (tareas 1 a 3)", s: [
      "Abre la sala y pulsa **Join Room**. Tiene 7 tareas: hoy haces de la 1 a la 3.",
      "**Task 1 «What is HTTP(S)?»**: lee la diferencia entre HTTP y HTTPS (la S es de seguro: va cifrado). Pulsa **View Site**: sale una página de prueba con un **candado tachado** junto a la dirección. Eso indica que la conexión segura tiene un problema. Haz clic en ese aviso para que aparezca la flag.",
      "**Task 2 «Requests And Responses»**: lee las partes de una URL que enseña la sala (scheme, user, host/domain, port, path, query string y fragment) y el ejemplo de petición y respuesta.",
      "Las preguntas de la Task 2 se responden mirando ese ejemplo: qué versión de HTTP usa y qué cabecera de la respuesta dice cuántos datos van a llegar.",
      "**Task 3 «HTTP Methods»**: cuatro situaciones (crear una cuenta, actualizar el correo, borrar una foto, ver un artículo). Para cada una piensa: ¿pido, envío algo nuevo, cambio algo que existe o borro?",
      "Ejercicio de URL: en Brave abre una página que uses, haz clic en la barra de direcciones para ver la URL completa y cópiala en el cuaderno. Haz lo mismo con dos más (por ejemplo un video de YouTube y una búsqueda de Google).",
      "Sepárala en partes. Ejemplo: `https://www.youtube.com/watch?v=abc123&t=30` → protocolo `https`, dominio `www.youtube.com`, puerto 443 (no se escribe porque es el de HTTPS por defecto), ruta `/watch`, parámetros `v=abc123` y `t=30` (van después del `?` y se separan con `&`).",
      "Escribe un ejemplo de GET (abrir una noticia) y uno de POST (enviar el formulario de inicio de sesión) de páginas que uses."
    ], learn: "Una URL es protocolo + dominio + puerto + ruta + parámetros; GET pide datos y POST los envía." }
  ],

  s13: [
    { t: "Sala HTTP in Detail, segunda mitad (tareas 4 a 7)", s: [
      "**Task 4 «HTTP Status Codes»**: lee la tabla de códigos. El **View Site** muestra ejemplos de cómo se ven; míralo si quieres. Las cuatro preguntas son situaciones: algo se creó, una página no existe, falló el servidor o su base de datos, o no has iniciado sesión. Piensa primero el grupo (2xx, 4xx, 5xx) y luego el número.",
      "**Task 5 «Headers»**: distingue cabeceras de la **petición** (las manda tu navegador) y de la **respuesta** (las manda el servidor). Te preguntan cuál dice qué navegador eres, cuál dice el tipo de dato que vuelve y cuál dice a qué sitio vas.",
      "**Task 6 «Cookies»**: lee cómo el servidor guarda una cookie en tu navegador y cómo el navegador la devuelve en cada petición. La pregunta pide qué cabecera de la respuesta guarda la cookie. Si la tarea te invita a abrir las herramientas del navegador (F12), puedes dejarlo para mañana: la sesión 14 está dedicada a eso.",
      "**Task 7 «Making Requests»**: pulsa **View Site**. Sale un simulador de peticiones: una lista para elegir el **método** (GET, POST, PUT, DELETE), una casilla para la **ruta** y un engranaje ⚙ para añadir parámetros. Un botón envía la petición y abajo ves la respuesta.",
      "Haz las cinco peticiones que pide la tarea, en orden: `GET /room`; `GET /blog` con el parámetro de la URL `id` igual a `1` (se añade en ⚙); `DELETE /user/1`; `PUT /user/2` con el parámetro del cuerpo `username` igual a `admin`; y `POST /login` con `username` igual a `thm` y `password` igual a `letmein`.",
      "Cada respuesta correcta trae una flag: pégala en su pregunta. Antes de cada petición nueva, abre ⚙ y borra los parámetros de la anterior, o la respuesta saldrá mal.",
      "En tu cuaderno haz la tabla de 200, 301, 401, 403, 404 y 500. Después explica en voz alta: si alguien copia tu cookie de sesión, ¿qué puede hacer sin saber tu contraseña?"
    ], learn: "Los códigos dicen cómo fue la petición; las cabeceras llevan datos extra; `Set-Cookie` guarda la cookie que te identifica." }
  ],

  s14: [
    { t: "Ver las peticiones HTTP en Brave, en vivo", s: [
      "Brave usa las mismas herramientas que Chrome. Abre `es.wikipedia.org` y pulsa **F12**. Si el panel sale en inglés, las pestañas son Elements, Console, Network y Application; en español, Elementos, Consola, Red y Aplicación.",
      "Entra en la pestaña **Red** y marca la casilla **Conservar registro** (Preserve log): así no se borra la lista cuando la página te redirige.",
      "Haz clic en la barra de direcciones, escribe `es.wikipedia.org` (sin nada más) y pulsa Enter. Busca la fila con código **301**: Wikipedia te redirige a su portada (si antes sale una fila con 307, es Brave pasándote a HTTPS). Haz clic en ella y en **Encabezados** busca la cabecera **location**: dice adónde te manda.",
      "Haz clic en la fila de la portada (dice `Wikipedia:Portada`). En la sección **General** lee el **Método de solicitud** (Request Method, GET) y el **Código de estado** (Status Code, 200).",
      "Baja hasta **Encabezados de solicitud** (Request Headers) y busca **user-agent**: es lo que tu navegador dice de sí mismo. Verás que dice «Chrome»: Brave se presenta así para que las webs funcionen igual.",
      "Busca una respuesta que guarde cookies: en la casilla **Filtrar** (Filter) escribe `has-response-header:set-cookie`. Abre una fila y localiza **set-cookie** en **Encabezados de respuesta**. Borra el filtro al terminar.",
      "Busca un 304: comprueba que **Inhabilitar caché** (Disable cache) está desmarcado, recarga con **F5** y escribe en **Filtrar** `status-code:304`. Si no sale ninguno, mira la columna **Tamaño**: «(memory cache)» o «(disk cache)» es la misma idea, el navegador ya lo tenía guardado.",
      "Pestaña **Aplicación** → en la columna izquierda **Cookies** → `https://es.wikipedia.org`. Mira nombre, valor y fecha de caducidad. Solo mira: en sitios reales no se toca nada."
    ], learn: "En la pestaña Red ves cada petición con su método, código y cabeceras; en Aplicación, las cookies que guarda tu navegador." }
  ],

  s16: [
    { t: "Bandit nivel 0 y el paso al nivel 1", s: [
      "Cómo se leen las páginas de Bandit: la página `bandit0.html` explica cómo entrar, y cada página `banditN.html` explica cómo pasar del nivel N−1 al N. Hoy usas dos: **Level 0** (bandit0.html) y **Level 0 → Level 1** (bandit1.html). Están en el menú de la izquierda de la web.",
      "Lee **Level 0**: servidor `bandit.labs.overthewire.org`, puerto `2220`, y el usuario y la contraseña del nivel 0 aparecen en esa misma página.",
      "Abre PowerShell y escribe `ssh bandit0@bandit.labs.overthewire.org -p 2220`. Por partes: `ssh` es el programa, `bandit0` el usuario, `@` significa «en», después el servidor, y `-p 2220` el puerto (SSH normalmente usa el 22; Bandit usa otro).",
      "La primera vez sale «Are you sure you want to continue connecting (yes/no/[fingerprint])?». Es la huella (fingerprint) del servidor: al decir `yes` tu laptop la recuerda y te avisará si un día cambia, lo que podría ser una trampa.",
      "Escribe la contraseña (no se ve nada mientras escribes) y Enter. Si sale «Permission denied, please try again.», la escribiste mal: revisa mayúsculas.",
      "Sale un texto largo de bienvenida con las reglas del juego, y el prompt cambia a `bandit0@bandit:~$`. Ya no estás en tu laptop: estás en un servidor Linux. Aquí funcionan `ls` y `cat` (sesión 5), no los comandos de PowerShell.",
      "Lee **Level 0 → Level 1**: la contraseña está en un archivo llamado `readme` en tu carpeta personal. Escribe `ls`: debe salir `readme`. Luego `cat readme`.",
      "Selecciona la contraseña con el ratón (es una línea larga de letras y números) y cópiala: en la Terminal de Windows 11, el **clic derecho** sobre texto seleccionado lo copia. Pégala en tu cuaderno como «bandit1: …».",
      "Escribe `exit` para volver a tu laptop. Comprueba que la guardaste bien entrando con `ssh bandit1@bandit.labs.overthewire.org -p 2220`: si llegas a `bandit1@bandit:~$`, funcionó. Sal con `exit`."
    ], learn: "`ssh usuario@servidor -p puerto` te da una terminal en otra máquina; Bandit es un servidor creado para que lo practiques legalmente." }
  ],

  s17: [
    { t: "Nivel 1 → 2: un archivo llamado «-»", s: [
      "Entra como `bandit1`. Lee la página **Level 1 → Level 2** (`bandit2.html`): la contraseña está en un archivo llamado `-` en tu carpeta personal.",
      "Escribe `ls`: sale `-`. Prueba `cat -` y pulsa Enter: no pasa nada y el cursor se queda esperando.",
      "¿Por qué? Para muchos comandos, un `-` solo significa «lee del teclado» (la entrada estándar). Escribe cualquier palabra y Enter: `cat` te la repite. Sal con `Ctrl + C`.",
      "La solución es darle una **ruta**, para que no parezca una opción: `cat ./-`. El `.` es la carpeta donde estás, así que `./-` significa «el archivo llamado - que está aquí».",
      "También funciona la ruta completa: escribe `pwd` para ver tu carpeta (`/home/bandit1`) y luego `cat /home/bandit1/-`.",
      "Guarda la contraseña en tu cuaderno y sal con `exit`."
    ], learn: "Un nombre que empieza por guion parece una opción; con `./nombre` le dices a la terminal que es un archivo." },
    { t: "Nivel 2 → 3: espacios y guiones en el nombre", s: [
      "Entra como `bandit2`. Lee la página **Level 2 → Level 3** (`bandit3.html`): el archivo se llama `--spaces in this filename--`. Tiene dos trampas: espacios y dos guiones al principio.",
      "Prueba `cat spaces in this filename`: sale un error por cada palabra, porque la terminal cree que son varios archivos separados.",
      "Prueba con comillas: `cat \"--spaces in this filename--\"`. Las comillas arreglan los espacios, pero ahora `cat` se queja de una opción que no conoce («unrecognized option»), porque el nombre empieza por `--`.",
      "Junta las dos soluciones: ruta y comillas. `cat ./\"--spaces in this filename--\"`. Otra forma: `cat -- \"--spaces in this filename--\"`; un `--` solo significa «aquí terminan las opciones, lo que sigue son nombres».",
      "La forma más cómoda: escribe `cat ./--` y pulsa **Tab**. La terminal completa el nombre sola y pone `\\` delante de cada espacio, que es otra forma de decir «este espacio es parte del nombre».",
      "Guarda la contraseña. En tu cuaderno escribe las dos reglas: guion al principio → `./`; espacios → comillas, `\\` o Tab."
    ], learn: "Las comillas o `\\` protegen los espacios; `./` o `--` evitan que un nombre con guiones se lea como opción." }
  ],

  s18: [
    { t: "Nivel 3 → 4: el archivo oculto", s: [
      "Entra como `bandit3`. Lee **Level 3 → Level 4** (`bandit4.html`): la contraseña está en un archivo **oculto** dentro de la carpeta `inhere`.",
      "Escribe `ls`: verás la carpeta `inhere`. Entra con `cd inhere` y escribe `ls`: parece vacía.",
      "En Linux, los archivos cuyo nombre empieza por punto no salen con `ls`. Escribe `ls -a` (a de all, todos): ahora aparecen `.` (esta carpeta), `..` (la de arriba) y el archivo escondido.",
      "Su nombre empieza por varios puntos y es raro. Escribe `cat ./` seguido de los puntos y la primera letra del nombre tal como lo ves en `ls -a`, y pulsa **Tab**: la terminal completa el resto. Pulsa Enter.",
      "Guarda la contraseña. Vuelve a tu carpeta personal con `cd ..` y comprueba con `pwd` que estás en `/home/bandit3`."
    ], learn: "Los archivos que empiezan por punto están ocultos; `ls -a` los muestra." },
    { t: "Nivel 4 → 5: el único archivo legible", s: [
      "Entra como `bandit4`. Lee **Level 4 → Level 5** (`bandit5.html`): la contraseña está en el **único archivo legible por humanos** (human-readable) de `inhere`.",
      "Entra con `cd inhere` y escribe `ls`: hay 10 archivos llamados `-file00` a `-file09`. Fíjate: empiezan por guion, como en el nivel 1.",
      "Abrir uno por uno con `cat` llena la pantalla de símbolos raros y puede desordenar la terminal. Si te pasa, escribe `reset` y Enter para arreglarla.",
      "Mejor pregunta qué tipo es cada uno con `file`. El `*` es un **comodín**: significa «todos los nombres de esta carpeta». Escribe `file ./*` (con `./` delante porque los nombres empiezan por guion).",
      "Sale una línea por archivo. Los que dicen `data` son binarios. Busca el único que dice `ASCII text`: ese es texto que puedes leer.",
      "Léelo con `cat ./-file0X`, cambiando la X por su número. Guarda la contraseña.",
      "Crea tus tarjetas: «¿Cómo ves los archivos ocultos?» → `ls -a`; «¿Cómo subes una carpeta?» → `cd ..`; «¿Qué comando dice el tipo de un archivo?» → `file`."
    ], learn: "`file` dice qué tipo de archivo es sin abrirlo; `*` significa todos los archivos; `reset` arregla una terminal desordenada." }
  ],

  s19: [
    { t: "Nivel 5 → 6: convertir pistas en opciones de find", s: [
      "Entra como `bandit5`. Lee **Level 5 → Level 6** (`bandit6.html`): el archivo está en algún lugar dentro de `inhere`, es legible por humanos, mide **1033 bytes** y **no es ejecutable**.",
      "Mira el problema: `ls inhere` muestra unas 20 carpetas (`maybehere00`, `maybehere01`…), cada una con varios archivos. Buscar a mano sería eterno.",
      "`find` recorre carpetas y subcarpetas buscando por características. Su forma es `find dónde-buscar condiciones`. Convierte cada pista en una condición:",
      "«Es un archivo» → `-type f` (f de file; `d` serían carpetas). «Mide 1033 bytes» → `-size 1033c`: la `c` significa bytes; sin ella, find cuenta en bloques de 512 bytes y no lo encontrarías.",
      "«No es ejecutable» → `! -executable`. El `!` significa «NO»: niega la condición que va detrás.",
      "Junta todo: `find inhere -type f -size 1033c ! -executable`. Debe salir una sola ruta, como `inhere/maybehere07/.file2`.",
      "Comprueba la pista que falta con `file` + la ruta (debe decir `ASCII text`) y léelo con `cat` + la ruta. Usa **Tab** para no escribir la ruta a mano. Guarda la contraseña."
    ], learn: "`find` busca por tipo (`-type f`), tamaño (`-size 1033c`) y permisos; `!` niega una condición." },
    { t: "Nivel 6 → 7: buscar en todo el servidor sin ver errores", s: [
      "Entra como `bandit6`. Lee **Level 6 → Level 7** (`bandit7.html`): el archivo está **en algún lugar del servidor**, su dueño es el usuario `bandit7`, su grupo es `bandit6` y mide 33 bytes.",
      "Cada archivo de Linux tiene un **usuario dueño** y un **grupo**. Puedes verlos con `ls -l`: son la tercera y la cuarta columna.",
      "Como no sabes la carpeta, buscas desde la raíz, `/`, que lo contiene todo. Pistas convertidas: `-user bandit7`, `-group bandit6` y `-size 33c`.",
      "Prueba `find / -user bandit7 -group bandit6 -size 33c`. Sale una avalancha de líneas «Permission denied»: son carpetas en las que no puedes entrar. El resultado está escondido entre ellas.",
      "Los programas escriben los resultados por un canal y los errores por otro, el canal **2**. Ya conoces `>`, que manda la salida a un archivo. `2>` manda solo los errores, y `/dev/null` es un agujero negro que borra todo lo que recibe.",
      "Repite añadiendo `2>/dev/null` al final: `find / -user bandit7 -group bandit6 -size 33c 2>/dev/null`. Ahora sale una sola ruta.",
      "Léela con `cat` + esa ruta y guarda la contraseña. Crea una tarjeta por cada opción de find que usaste hoy."
    ], learn: "`-user` y `-group` buscan por dueño; `/` es la raíz; `2>/dev/null` tira a la basura los mensajes de error." }
  ],

  s20: [
    { t: "Niveles 7 → 8 y 8 → 9: grep, sort y uniq", s: [
      "Las páginas de hoy son **Level 7 → Level 8** (`bandit8.html`), **8 → 9** (`bandit9.html`), **9 → 10** (`bandit10.html`) y **10 → 11** (`bandit11.html`). Desde cada una pasas a la siguiente con el enlace del menú de la izquierda.",
      "Entra como `bandit7`. Objetivo: la contraseña está en `data.txt`, en la línea de la palabra «millionth». Mira el tamaño con `ls -l`: tiene miles de líneas.",
      "`grep palabra archivo` muestra solo las líneas que contienen esa palabra. Escribe `grep millionth data.txt`. Sale una línea: la palabra y, al lado, la contraseña. Guárdala.",
      "Entra como `bandit8`. Objetivo: la contraseña es la **única línea que aparece una sola vez** en `data.txt`; todas las demás se repiten.",
      "`uniq` compara cada línea con la de justo encima, así que solo detecta repetidas si están **juntas**. Por eso primero se ordena con `sort`, que pone las iguales una debajo de otra.",
      "La tubería `|` pasa lo que sale de un comando al siguiente. `uniq -u` muestra solo las líneas que no se repiten (u de unique). Escribe `sort data.txt | uniq -u`. Sale una sola línea.",
      "Compruébalo con `sort data.txt | uniq -c`: la `-c` cuenta cuántas veces sale cada línea. Todas tienen un número mayor que 1 menos la tuya. Guarda la contraseña."
    ], learn: "`grep` filtra líneas por una palabra; `sort | uniq -u` deja solo las líneas que aparecen una vez." },
    { t: "Niveles 9 → 10 y 10 → 11: strings y base64", s: [
      "Entra como `bandit9`. Objetivo: la contraseña está en `data.txt`, en uno de los pocos textos legibles, precedido por varios signos `=`.",
      "Prueba `file data.txt`: dice `data`. Es un archivo binario: con `cat` verías símbolos raros (si se desordena la terminal, escribe `reset`).",
      "`strings archivo` saca solo los trozos de texto legible de un binario. Pero salen muchos. Fíltralos con la tubería: `strings data.txt | grep ==`.",
      "Salen unas pocas líneas que empiezan por `===`. La contraseña es la de 32 caracteres (letras y números mezclados) que va detrás de los iguales. Guárdala.",
      "Entra como `bandit10`. Objetivo: `data.txt` contiene datos codificados en **Base64**. Mira con `cat data.txt`: una mezcla de mayúsculas, minúsculas y números, quizá con `=` al final. Así se reconoce Base64.",
      "Base64 no es cifrado: es otra forma de escribir lo mismo y no necesita clave. Decodifícalo con `base64 -d data.txt` (la `-d` es de decode, decodificar). Sale una frase con la contraseña.",
      "Guarda cada contraseña y escribe en tu cuaderno la regla de cada nivel en una línea."
    ], learn: "`strings` saca texto de un binario; `|` encadena comandos; `base64 -d` deshace Base64." }
  ],

  s21: [
    { t: "Sala Web Security Essentials, tarea por tarea", s: [
      "Abre la sala y pulsa **Join Room**. Tiene 7 tareas; solo la 6 es práctica.",
      "**Task 2 «Why Web?»**: por qué la mayoría de los programas ahora son web y quién es responsable de los datos de los usuarios en una aplicación web.",
      "**Task 3 «Web Infrastructure»**: las tres capas de una web: la **aplicación** (el código), el **servidor web** (el programa que responde, como Apache o Nginx) y la **máquina host** (el sistema operativo donde corre todo). Las preguntas salen de esa explicación.",
      "**Task 4 «Protecting the Web»**: medidas para reducir el daño de una amenaza, como mantener todo actualizado (parchear).",
      "**Task 5 «Defense Systems»**: aprende qué es un **WAF** (Web Application Firewall, cortafuegos de aplicaciones web): filtra las peticiones antes de que lleguen a la web. Fíjate en dónde puede ir instalado y en cómo detecta ataques comparando con patrones conocidos.",
      "**Task 6 «Practice Scenario»**: pulsa **View Site**. Sale **Secure-A-Site**, una web a punto de publicarse que tienes que proteger en tres capas: **Web Application**, **Web Server** y **Host Machine**.",
      "En cada capa elige las medidas que aprendiste: validar lo que escribe el usuario, ocultar la versión del servidor, cerrar puertos y servicios que no se usan, actualizar. Cada capa bien protegida te da una flag. Si una opción falla, vuelve a leer las tareas 4 y 5.",
      "En tu cuaderno: para tu teléfono escribe una **vulnerabilidad** (el fallo), una **amenaza** (quién podría aprovecharlo) y el **riesgo** (qué tan probable es y cuánto daño haría). Ejemplo con otro aparato: laptop sin actualizar → un virus que usa ese fallo → probable si navegas mucho, daño alto."
    ], learn: "Una web se protege en tres capas (aplicación, servidor y host); vulnerabilidad es el fallo, amenaza quien lo usa, riesgo su probabilidad por su daño." },
    { t: "La lista OWASP Top 10, solo los nombres", s: [
      "Abre el enlace de OWASP Top 10. La versión vigente es la de **2025**: los códigos terminan en `:2025` (por ejemplo `A01:2025`). Si la página te muestra una lista de 2017 o 2021, busca el enlace a la edición 2025.",
      "Lee solo los 10 nombres. En español son: Pérdida de Control de Acceso, Configuración de Seguridad Incorrecta, Fallas en la Cadena de Suministro de Software, Fallas Criptográficas, Inyección, Diseño Inseguro, Fallas de Autenticación, Fallas en la Integridad del Software o de los Datos, Fallas en el Registro, Alerta y Monitoreo de Seguridad, y Manejo Inadecuado de Condiciones Excepcionales.",
      "Abre el primero, **A01:2025 Broken Access Control**. Lee solo los ejemplos de ataque: alguien ve o cambia datos que no le tocan.",
      "Relaciónalo con algo que ya hiciste: en el reto Cookies (sesión 15) cambiabas un número y veías otras galletas. ¿Se parece?",
      "No intentes memorizar la lista hoy: la estudiarás a fondo en la Fase 3. Copia los 10 nombres en tu cuaderno."
    ], learn: "OWASP Top 10 es la lista de referencia de los fallos web más comunes; el primero es el control de acceso roto." }
  ],

  s22: [
    { t: "Sala Vulnerabilities 101, tarea por tarea", s: [
      "Abre la sala y pulsa **Join Room**. Tiene 7 tareas y solo la 6 es práctica.",
      "**Task 2 «Introduction to Vulnerabilities»**: lee los tipos de vulnerabilidad (del sistema operativo, de configuración, credenciales débiles o por defecto, de lógica de la aplicación y de factor humano). Las dos preguntas te dan una situación y tú eliges el tipo.",
      "**Task 3 «Scoring Vulnerabilities (CVSS & VPR)»**: compara los dos sistemas de puntuación. Las preguntas piden el año del primer CVSS, cuál puntúa según el riesgo para la organización y cuál es gratis y abierto. Todo está en el texto.",
      "**Task 4 «Vulnerability Databases»**: presenta **NVD** y **Exploit-DB** (una base de datos de exploits públicos). Para contar los CVE publicados en julio de 2021 usa la búsqueda avanzada de NVD: elige un rango de fecha de publicación del 1 al 31 de julio de 2021 y lee el número total de resultados.",
      "La otra pregunta de la Task 4 es quién mantiene Exploit-DB: está en la propia web de Exploit-DB (mira el pie de página o «About»).",
      "**Task 5 «An Example of Finding a Vulnerability»**: un caso real: alguien ve el nombre y la versión de un programa y busca fallos conocidos para esa versión. La pregunta es qué tipo de vulnerabilidad dejó ver esa versión.",
      "**Task 6 «Showcase: Exploiting Ackme's Application»**: pulsa **View Site** y sigue en orden los pasos que te va mostrando la web, como si fueras el pentester. Es una demostración guiada: al final aparece la flag.",
      "Explica en voz alta: la vulnerabilidad es el agujero y el exploit es la forma de entrar por él. Pon un ejemplo de casa: una ventana sin cerrojo y alguien que sabe abrirla desde fuera."
    ], learn: "Las vulnerabilidades se clasifican por tipo, se puntúan con CVSS y se buscan en NVD y Exploit-DB." },
    { t: "Buscar un CVE en NVD", s: [
      "Abre `nvd.nist.gov`. Usa el buscador de vulnerabilidades (menú **Search** → **Vulnerabilities**) y escribe `CVE-2021-44228`. Si el buscador cambió, abre directamente `nvd.nist.gov/vuln/detail/CVE-2021-44228`.",
      "En la ficha del CVE lee la **Description** (descripción): el nombre del programa afectado aparece en la primera frase.",
      "Busca la sección **Severity** (gravedad) y la puntuación **CVSS 3.x**: un número de 0.0 a 10.0 y una palabra (LOW, MEDIUM, HIGH o CRITICAL). Puede haber dos notas: la de NIST y la de la organización que publicó el fallo (CNA). Anota las dos si son distintas.",
      "Junto a la nota hay un **vector**, un texto como `AV:N/AC:L/...`. Resume cómo se puntuó: por ejemplo `AV:N` significa que se ataca por la red. La guía de la calculadora CVSS te explica cada letra.",
      "Anota en tu cuaderno: el CVE, el programa afectado, la nota y la palabra de gravedad. Con 9.0 o más es crítica.",
      "Baja hasta **References**: son enlaces a avisos y parches. Así trabaja un analista: identifica el CVE, mide su gravedad y busca cómo se corrige."
    ], learn: "Cada fallo público tiene su ficha en NVD con descripción, nota CVSS, vector y enlaces al parche." }
  ],

  s23: [
    { t: "Nivel 11 → 12: ROT13 con tr", s: [
      "Entra como `bandit11`. Lee **Level 11 → Level 12** (`bandit12.html`): en `data.txt` todas las letras, minúsculas y mayúsculas, están rotadas 13 posiciones. Es ROT13, como en el reto Mod 26.",
      "`tr` cambia caracteres por otros: el primer grupo dice qué buscar y el segundo por qué cambiarlo, en el mismo orden. Prueba `echo abc | tr 'abc' 'xyz'`: sale `xyz` (a→x, b→y, c→z).",
      "Se pueden usar rangos: `A-Z` son todas las mayúsculas. Ahora piensa en ROT13: la A pasa a N, la B a O… la M a Z, y después la N vuelve a A… hasta la Z, que pasa a M.",
      "Así que el rango `A-Z` se convierte en dos trozos seguidos: `N-Z` y luego `A-M`, es decir `N-ZA-M`. Con las minúsculas igual: `n-za-m`.",
      "Pruébalo con una palabra que conoces: `echo Hola | tr 'A-Za-z' 'N-ZA-Mn-za-m'`. Debe salir `Ubyn`. Si lo vuelves a pasar por el mismo `tr`, vuelve `Hola`: ROT13 aplicado dos veces deshace el cambio.",
      "Aplícalo al archivo: `cat data.txt | tr 'A-Za-z' 'N-ZA-Mn-za-m'`. Sale una frase en inglés con la contraseña. Guárdala."
    ], learn: "`tr 'grupo1' 'grupo2'` cambia cada carácter por su pareja; con rangos partidos se hace ROT13." },
    { t: "Nivel 12 → 13: desenvolver el archivo capa a capa", s: [
      "Entra como `bandit12`. Lee **Level 12 → Level 13** (`bandit13.html`): `data.txt` es un **volcado hexadecimal** (hexdump) de un archivo comprimido muchas veces. Mira sus primeras líneas con `head data.txt` (`head` enseña solo las 10 primeras líneas de un archivo): a la izquierda la posición, en medio los bytes en hexadecimal y a la derecha su texto.",
      "No puedes crear archivos en tu carpeta personal, así que trabaja en una carpeta temporal. `mktemp -d` crea una con un nombre imposible de adivinar dentro de `/tmp` y te dice su ruta (algo como `/tmp/tmp.Xa81kQ2z`). Entra con `cd` + esa ruta (cópiala).",
      "Copia el archivo aquí: `cp ~/data.txt .` (el `.` final es «esta carpeta»). Devuélvelo a binario con `xxd -r data.txt > data`: `xxd` hace volcados hexadecimales y `-r` (reverse) hace lo contrario.",
      "Escribe `file data`. Te dirá qué tipo de compresión tiene. Según lo que diga, haz uno de los tres pasos siguientes. `mv viejo nuevo` cambia el nombre de un archivo, y lo necesitas porque los descompresores exigen la extensión correcta.",
      "Si dice **gzip compressed data**: `mv data data.gz` y luego `gzip -d data.gz`. Queda un archivo llamado `data`.",
      "Si dice **bzip2 compressed data**: `mv data data.bz2` y luego `bzip2 -d data.bz2`. Queda otra vez `data`.",
      "Si dice **POSIX tar archive**: un tar es una caja con archivos dentro. Ábrela con `tar -xf data` (x de extraer, f de archivo) y escribe `ls`: sale un archivo con otro nombre. Ese es el siguiente a revisar con `file`.",
      "Repite: `file` → renombrar → descomprimir, unas 8 o 9 veces. Si no sabes cuál es el último archivo, usa `ls -lt`: el más reciente sale arriba. Anota en el cuaderno cada tipo que te sale.",
      "Cuando `file` diga **ASCII text**, léelo con `cat`. Ahí está la contraseña. Guárdala."
    ], learn: "`xxd -r` deshace un volcado hexadecimal; `file` dice el tipo de compresión; `mv` renombra; `gzip -d`, `bzip2 -d` y `tar -xf` descomprimen." }
  ],

  s26: [
    { t: "Cómo hacer el repaso de redes y web sin trampas", s: [
      "No abras tus notas todavía. En **Recordar**, escribe de memoria todo lo que sepas de estos temas: las 7 capas OSI, el saludo de TCP, los puertos 22, 53, 80 y 443, los tipos de registro DNS, los métodos HTTP y los grupos de códigos (2xx, 3xx, 4xx, 5xx).",
      "Baja a **Comprobar** y responde las 4 preguntas sin mirar nada. Pulsa **comprobar respuestas**. Necesitas 3 de 4.",
      "Por cada fallo, lee la explicación y escribe en tu cuaderno: la pregunta, lo que respondiste, la respuesta correcta y por qué te confundiste. Esa última parte es la que más enseña.",
      "Localiza la sesión de cada fallo: modelo OSI → sesión 07; TCP → 08; puertos → 09; DNS → 11; métodos HTTP → 12; códigos y cookies → 13. En la pestaña **Ruta** ábrela y relee solo sus puntos clave.",
      "Si fallaste DNS, abre **DNS in Detail** y relee la **Task 3 «Record Types»**: la sala ya está hecha, no pierdes progreso. Si fallaste HTTP, abre **HTTP in Detail** → **Task 4 «HTTP Status Codes»**.",
      "Crea una tarjeta por cada fallo en la pestaña **Tarjetas** (una idea por tarjeta). Después haz el repaso completo de las pendientes con **./repasar**.",
      "Salas a medias: abre la ruta Pre Security y las salas de las sesiones 06 a 13. Las que no tengan la barra de progreso al 100 % las terminas hoy, empezando por la primera tarea sin marcar en verde.",
      "Mañana, antes de seguir, intenta responder otra vez de memoria las preguntas que fallaste hoy. Si te salen, el repaso funcionó."
    ], learn: "Primero recuperar sin mirar, después comprobar y solo entonces repasar lo que fallaste: así el repaso rinde el doble." }
  ],

  s27: [
    { t: "Repaso de Linux: quiz y volver al nivel exacto", s: [
      "Sin mirar, escribe en **Recordar** cada comando de Bandit con lo que hace: `ls -a`, `cd ..`, `cat ./-`, comillas y `\\` para espacios, `file`, `find` con `-type`, `-size`, `-user`, `-group`, `2>/dev/null`, `grep`, `sort | uniq -u`, `strings`, `base64 -d`, `tr`, `xxd -r`, `mktemp -d` y `mv`.",
      "Responde el quiz de **Comprobar** sin mirar y pulsa **comprobar respuestas**.",
      "Por cada fallo, busca su nivel: `cat ./-` → Level 1 → 2 (`bandit2.html`); `ls -a` → Level 3 → 4 (`bandit4.html`); `2>/dev/null` → Level 6 → 7 (`bandit7.html`); `sort | uniq` → Level 8 → 9 (`bandit9.html`).",
      "Para rehacer un nivel, entra con el usuario de ese nivel y la contraseña de tu cuaderno. Por ejemplo, para el 8 → 9: `ssh bandit8@bandit.labs.overthewire.org -p 2220`. Por eso guardabas todas las contraseñas.",
      "Escribe el comando de memoria, sin mirar tus notas. Si sale la misma contraseña que tienes en el cuaderno, lo dominas.",
      "Si no recuerdas una opción, consulta el manual dentro de Bandit: `man find`. Busca con `/` y una palabra (por ejemplo `/size`) y Enter, `n` para el siguiente resultado, `q` para salir. Usar `man` no es hacer trampa: es lo que hacen los profesionales.",
      "Crea una tarjeta por cada comando que fallaste, con una situación: «Quiero leer un archivo llamado -» → `cat ./-`. Después repasa tus tarjetas pendientes."
    ], learn: "Rehacer el nivel exacto donde fallaste, sin mirar, es la forma más rápida de fijar un comando." }
  ],

  s28: [
    { t: "Quiz final de conceptos y cierre de pendientes", s: [
      "Responde el quiz de **Comprobar** sin mirar nada y pulsa **comprobar respuestas**. Anota los fallos como ayer: pregunta, lo que dijiste, lo correcto y por qué.",
      "Haz tu lista de pendientes: en la pestaña **Ruta** busca sesiones de la Fase 1 sin la marca de flag capturada. Ábrelas y mira qué les falta en la barra de arriba: **recordar**, **practicar**, **comprobar** o **cerrar**.",
      "Empieza por lo que menos tarda (un quiz o el cuaderno de **Cerrar**) y deja para el final las salas o niveles largos.",
      "En las sesiones ya capturadas, mira si el cuaderno de **Cerrar** quedó vacío. Rellena al menos **qué intenté** y **lo que me llevo**: son tus apuntes para la prueba.",
      "Comprueba que tienes en el cuaderno todas las contraseñas de Bandit hasta la de `bandit13`. Mañana entrarás con ella. Si falta alguna, rehaz ese nivel hoy.",
      "Si algo no cabe hoy, déjalo escrito en tu cuaderno para la semana siguiente: mejor pocas cosas bien sabidas que muchas a medias."
    ], learn: "Antes de una prueba, cierra primero lo pequeño y anota lo que quede, sin agobiarte." },
    { t: "Tarjetas en cero y arreglar las que siempre fallas", s: [
      "Pestaña **Tarjetas** → **./repasar**. Di cada respuesta en voz alta antes de pulsar **mostrar respuesta** y califícate con sinceridad hasta que no quede ninguna.",
      "Mira **Qué tan firmes están**: las de **N1** son las recién creadas o las que fallas. Busca en **Todas tus tarjetas** las que llevas varias veces marcando **otra vez**: casi siempre es la tarjeta la que está mal hecha, no tu memoria.",
      "Arreglo 1, dividir la que tiene varias ideas. Mal: «Códigos HTTP» → «200 bien, 301 redirige, 403 prohibido…». Bien: «¿Qué código devuelve el servidor si la página no existe?» → «404», y otra para cada código.",
      "Arreglo 2, preguntar algo concreto. Mal: «¿Qué es el DNS?» → un párrafo. Bien: «¿Qué registro DNS dice cuál es el servidor de correo de un dominio?» → «MX». Bien: «¿Qué manda el servidor en el segundo paso del saludo TCP?» → «SYN-ACK».",
      "Arreglo 3, ponerla en una situación real. Mal: «2>/dev/null» → «oculta errores». Bien: «find te llena la pantalla de Permission denied. ¿Qué añades al final?» → `2>/dev/null`. Bien: «Abres una web y la conexión se rompe por tráfico falso. ¿Qué letra de la CIA se rompe?» → «Disponibilidad».",
      "Arreglo 4, para los códigos parecidos haz tarjetas de diferencia: «¿401 o 403 si no has iniciado sesión?» → «401». «¿Puerto de HTTP y de HTTPS?» → «80 y 443».",
      "Pulsa **borrar** en la tarjeta mala y crea las buenas en **Crear una tarjeta**. Las nuevas entran como pendientes: repásalas una vez hoy para dejar el contador en cero."
    ], learn: "Si una tarjeta falla siempre, reescríbela: una idea, pregunta concreta y, mejor, una situación real." }
  ],

  s29: [
    { t: "Cómo hacer la prueba sin ayuda", s: [
      "Prepara antes de empezar: Brave con dos pestañas (la biblioteca de CyLab y la página de Bandit), PowerShell abierto, tu cuaderno y un temporizador (app **Reloj** de Windows → **Temporizador**, o el del iPhone) en 30 minutos.",
      "Reglas: no uses **Reveal hint**, no busques el nombre del reto en internet y no pidas ayuda. Sí puedes usar tu cuaderno, `man` y herramientas como CyberChef: son tus herramientas de trabajo, no soluciones.",
      "Reto 1: en la biblioteca filtra **Category: General Skills** y **Difficulty: Easy**. Elige uno que no hayas abierto nunca (no los de las guías: Obedient Cat, Wave a flag, First Grep, Bases…). Pon el temporizador.",
      "Método para cualquier reto: lee el enunciado dos veces; pregúntate si te dan un archivo, un `nc`, un `ssh` o una web; escribe en el cuaderno qué herramientas que conoces podrían servir; prueba de una en una y anota cada intento y su resultado.",
      "A los 30 minutos para, aunque estés cerca. Si lo resolviste, envía la flag. En la sección **Tu prueba** marca **resuelto** si lo lograste y escribe los minutos en **min** (30 si no salió).",
      "Repite con un reto de **Web Exploitation** (empieza siempre por código fuente, CSS y JS, cookies y `robots.txt`) y uno de **Cryptography** (pregúntate: ¿es una codificación como Base64 o un cifrado como ROT13?).",
      "Bandit: entra como `bandit13` y lee **Level 13 → Level 14** (`bandit14.html`). Este nivel trae algo nuevo: en vez de contraseña te dan una **clave privada SSH**, un archivo que sirve para entrar sin escribir contraseña. Lee los mensajes de error con atención y usa `man ssh`. La página menciona un archivo de pista en tu carpeta: no lo abras hasta que pasen los 30 minutos.",
      "Al terminar, escribe en el cuaderno cuál te costó más y por qué: ¿no sabías qué herramienta usar, la usaste mal o te faltaba un concepto? Esa respuesta te dice qué repasar."
    ], learn: "Una prueba real mide dónde estás: reto nuevo, 30 minutos, sin pistas, y anotar el tiempo aunque no salga." }
  ],

  s30: [
    { t: "Cómo tomar la decisión con datos", s: [
      "Abre la pestaña **Progreso** y copia en tu cuaderno los 5 números de arriba: **flags capturadas**, **calidad del proceso (de 5)**, **aciertos al primer intento**, **días activos esta semana** y **tarjetas pendientes**.",
      "Lee cada aviso de **¿Lo estás haciendo bien?**. Marca cuáles están en **bien** y cuáles en **atento** u **ojo**.",
      "En **Revisión de esta semana** escribe qué te gustó más y dónde te atascaste, y pulsa tus **ganas** del 1 al 5. Mira la barra de **tus ganas semana a semana**: ¿suben, bajan o se mantienen?",
      "Relee tu primer texto: en la pestaña **Ruta** abre la sesión 01 y mira lo que escribiste en **Recordar** (y en `sesion-01.txt` de tu carpeta Cuaderno-hacker). Escribe debajo tres cosas que hoy sabes que entonces no sabías.",
      "Antes de responder cada pregunta, busca una prueba en tus datos. Ganas → tu historial de ganas. Volver tras atascarte → tus notas de **qué falló y por qué**. Satisfacción → tus resultados de la prueba de ayer. Curiosidad → escribe algo concreto que quieras aprender. 4 de cada 5 sesiones → compara tus flags capturadas con las semanas que llevas.",
      "Ahora responde **sí** o **no** a las 5 preguntas de **Las 5 preguntas de la decisión**. Responde lo que dicen tus datos, no cómo te sientes hoy.",
      "Con 4 o 5 síes pasas a la Fase 2. Con menos no has fracasado: es información. Lee el mensaje que te da la app y háblalo antes de decidir."
    ], learn: "Una buena decisión se apoya en datos: tus números, tus notas y tus ganas a lo largo de las semanas." }
  ]
});
