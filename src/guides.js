/* Guías paso a paso. Cada guía: { t: título, s: [pasos], learn: "qué aprendiste" }.
   PLATFORM_GUIDES se muestra solo en las unidades que usan esa plataforma. */
const PLATFORM_GUIDES = {
  cylab: { t: "Cómo se resuelve un reto en CyLab (picoCTF), paso a paso", s: [
    "Abre la biblioteca de retos. Arriba a la derecha hay tres filtros: en **Category** elige la categoría que pide la sesión (por ejemplo General Skills) y en **Difficulty** elige **Easy**. Si no filtras, salen primero los retos de Inteligencia Artificial, que no son para esta etapa.",
    "Haz clic en el nombre del reto. Se abre una ventana: pulsa **Open in Workspace** (abajo a la derecha). Ahora tienes la lista de retos a la izquierda y el reto en el centro.",
    "En la columna de la derecha pulsa el botón **>_**. Se abre la pestaña **Terminal**: es una computadora Linux dentro del navegador, ya preparada con todas las herramientas. Ahí escribes los comandos y pulsas Enter.",
    "Para **pegar** en la terminal: clic derecho → Pegar, o `Ctrl + Shift + V`. Para **copiar** desde la terminal: selecciona el texto con el ratón y clic derecho → Copiar. Dentro de la terminal, `Ctrl + C` no copia: detiene el programa que está corriendo.",
    "Si el reto dice **INSTANCE · Launch Instance**, pulsa ese botón primero. Crea tu propio servidor del reto y entonces aparecen el comando, el servidor y el puerto que debes usar. Solo puedes tener **una instancia a la vez**: si en el cuadro de abajo a la derecha hay otra corriendo, párala con el botón cuadrado ■.",
    "Lee el enunciado dos veces y pregúntate: ¿me dan un archivo, un comando `nc` o un comando `ssh`? Eso te dice qué hacer (lo explican las guías de cada reto).",
    "La flag casi siempre tiene la forma `picoCTF{...}`. Cópiala **completa**, con las llaves, pégala en la casilla **FLAG** y pulsa **Submit**. Si sale en verde, el reto queda resuelto.",
    "Las pistas (**Reveal hint**) no quitan puntos aquí, pero úsalas solo después de 20 minutos intentándolo: el esfuerzo es lo que te enseña."
  ]},
  thm: { t: "Cómo se hace una sala de TryHackMe, paso a paso", s: [
    "Abre el enlace de la sala y pulsa el botón **Join Room** (unirte a la sala). Si te pide iniciar sesión, entra con tu cuenta.",
    "La sala está dividida en **Tasks** (tareas). Haz clic en el título de cada tarea para desplegarla y lee el texto completo antes de responder.",
    "Al final de cada tarea hay preguntas con una casilla. Escribe la respuesta y pulsa **Submit**. Si es correcta, se pone en verde. Si una pregunta dice **No answer needed**, solo pulsa **Complete**.",
    "Si una tarea tiene un botón verde **Start Machine**, púlsalo y espera 1 o 2 minutos: arranca la máquina de práctica y aparece su dirección IP arriba.",
    "Si necesitas una terminal para atacar esa máquina, pulsa el botón azul **Start AttackBox** (arriba de la página). Se abre una computadora Linux en el navegador; no tienes que instalar nada. Con la cuenta gratis la AttackBox dura **1 hora al día**: ten la tarea leída antes de arrancarla y apágala al terminar.",
    "¿Atascado? Pulsa **Hint** junto a la pregunta, si lo hay. Si no, vuelve a leer la tarea: casi siempre la respuesta está en el texto.",
    "La sala está terminada cuando la barra de progreso de arriba llega al 100 %."
  ]},
  bandit: { t: "Cómo se juega Bandit desde tu laptop, paso a paso", s: [
    "En Windows pulsa la tecla Windows, escribe **PowerShell** y ábrelo. Windows 10 y 11 ya traen `ssh`, no tienes que instalar nada.",
    "Para entrar a un nivel escribe `ssh banditN@bandit.labs.overthewire.org -p 2220`, cambiando la N por el número del nivel (por ejemplo `bandit0`). Pulsa Enter.",
    "La primera vez pregunta «Are you sure you want to continue connecting?» Escribe `yes` y Enter.",
    "Cuando pida **password**, pega la contraseña con **clic derecho** (en PowerShell el clic derecho pega). **No se ve nada mientras escribes o pegas**: es normal, es por seguridad. Pulsa Enter.",
    "Ya estás dentro de un servidor Linux. Lee en la página del nivel el apartado **Level Goal**: te dice dónde está la contraseña del siguiente nivel.",
    "Cuando la encuentres, selecciónala con el ratón y pulsa **Ctrl + C** (con texto seleccionado, copia). Si no se copia, haz clic derecho sobre la selección. Guárdala en tu cuaderno: sin ella no puedes volver a ese nivel.",
    "Escribe `exit` para salir y conéctate al siguiente nivel con su número y la contraseña que encontraste."
  ]},
  tarjetas: { t: "Cómo se usan las tarjetas de esta app, paso a paso", s: [
    "Pulsa la pestaña **tarjetas** del menú. Arriba verás cuántas te tocan hoy.",
    "Para crear una: en **Crear una tarjeta** escribe una **pregunta corta** y su **respuesta**, y pulsa **+ añadir tarjeta**. Buena tarjeta = una sola idea, pregunta clara (por ejemplo «¿Qué puerto usa HTTPS?» → «443»).",
    "Para repasar pulsa **./repasar**. Te sale la pregunta: **di la respuesta en voz alta o en tu cabeza antes de mirarla**. Ese esfuerzo es lo que te hace recordar.",
    "Pulsa **mostrar respuesta** (o la barra espaciadora) y compárala con lo que dijiste.",
    "Califícate con sinceridad: **otra vez** (la fallaste: vuelve pronto), **bien** (la sabías con esfuerzo) o **fácil** (salió sola: tardará más en volver). Atajos: teclas 1, 2 y 3.",
    "Sigue hasta que no queden pendientes y pulsa **← terminar repaso**. Las tarjetas vuelven solas en el día que toca: no tienes que acordarte tú."
  ]},
  progreso: { t: "Cómo leer tu progreso, paso a paso", s: [
    "Pulsa la pestaña **progreso** del menú.",
    "En **Las 4 fases** ves cuántas unidades llevas de cada fase y si vas a tiempo, adelantado o atrasado.",
    "En **¿Lo estás haciendo bien?** mira la calidad de tu proceso: si escribiste lo que recordabas, si te lo explicaste en voz alta y si intentaste 20 minutos antes de pedir pista. Lo ideal es 4 o 5 de 5.",
    "En **Revisión de esta semana** compara tus ganas y tu energía semana a semana. Úsalo para responder la decisión con datos, no con lo que sientes ese día."
  ]},
  devtools: { t: "Cómo se usan las herramientas del navegador (F12), paso a paso", s: [
    "Abre la página que diga la sesión en Brave o Chrome y pulsa **F12**. Se abre un panel con pestañas (Elementos, Consola, Red…). Si te sale en inglés: Elements, Console, Network.",
    "Haz clic en la pestaña **Red** (Network) y pulsa **F5** para recargar la página. Se llena una lista: cada fila es una petición que hizo el navegador.",
    "Haz clic en la **primera fila** (la que tiene el nombre de la página). A la derecha, en **Encabezados** (Headers), verás el **método** (GET), el **código de estado** (200) y, más abajo, en los encabezados de la petición, el **User-Agent**.",
    "Para ver el código de la página: **Ctrl + U** lo abre en otra pestaña. Para ver cookies: pestaña **Aplicación** (Application) → **Cookies** en la columna izquierda.",
    "Solo mira: no cambies nada en páginas que no sean de práctica."
  ]},
  messer: { t: "Cómo se usan los videos de Professor Messer, paso a paso", s: [
    "Abre el enlace. En el menú de arriba pulsa **Training Courses** y elige el curso **CompTIA Network+** (el número más reciente).",
    "Se abre la lista de todos los videos del curso, ordenados por tema. Pulsa **Ctrl + F** y escribe la palabra del tema de hoy (por ejemplo `Subnet`, `DHCP`, `ARP` o `NAT`) para encontrarlo rápido.",
    "Abre el video. Son cortos (5–15 minutos) y están en inglés: activa los subtítulos con el botón **CC** y, si quieres, pon la traducción automática al español en ⚙ → Subtítulos → Traducir automáticamente.",
    "Míralo con tu cuaderno al lado. Pausa cada vez que diga una definición y escríbela con tus palabras.",
    "Al terminar, sin mirar, escribe 3 cosas que recuerdes. Después revisa si eran correctas."
  ]},
  python: { t: "Cómo se instala y se usa Python en Windows, paso a paso", s: [
    "Entra en python.org → **Downloads** → pulsa el botón amarillo **Download Python 3.x** (detecta que usas Windows).",
    "Abre el instalador. **Antes de nada marca la casilla «Add python.exe to PATH»** (abajo). Luego pulsa **Install Now** y espera.",
    "Comprueba que funciona: abre **PowerShell** y escribe `python --version`. Debe salir algo como `Python 3.13.1`. Si dice que no lo encuentra, reinstala marcando la casilla del paso anterior.",
    "Para escribir programas usa **IDLE**, que viene con Python: tecla Windows → escribe `IDLE` → ábrelo.",
    "En IDLE: **File → New File**. Escribe tu código, guárdalo con **Ctrl + S** en tu carpeta `Cuaderno-hacker` con un nombre terminado en `.py` (por ejemplo `hola.py`) y pulsa **F5** para ejecutarlo. El resultado sale en la otra ventana.",
    "Si sale un error en rojo, lee la **última línea**: dice qué falló y en qué línea. El 90 % de las veces es un espacio de más, una comilla o dos puntos que faltan."
  ]},
  py4e: { t: "Cómo se sigue el curso Python for Everybody, paso a paso", s: [
    "Abre py4e.com y pulsa **Lessons**. Cada lección es un capítulo del libro, con video, diapositivas y ejercicios.",
    "Abre el capítulo que diga la sesión. Mira el video (en inglés, con subtítulos **CC**; puedes traducirlos en ⚙). Si prefieres leer, el libro gratis está en el enlace **Book** (también hay versión en español: busca «Python para todos» en la página).",
    "Copia a mano en IDLE cada ejemplo del video y ejecútalo con **F5**. Escribirlo tú, no copiar y pegar, es lo que te enseña.",
    "Cambia una cosa del ejemplo y adivina qué pasará antes de ejecutarlo. Si acertaste, lo entendiste.",
    "Haz los ejercicios del final del capítulo en el libro. Guarda cada uno como archivo `.py` en tu cuaderno."
  ]},
  pydocs: { t: "Cómo se busca en la documentación de Python, paso a paso", s: [
    "Abre docs.python.org. Arriba a la derecha hay una caja **Quick search**: escribe el nombre de lo que buscas (por ejemplo `hashlib` o `open`) y pulsa Enter.",
    "En los resultados abre el que coincida exactamente. Baja hasta los **ejemplos de código**: suelen estar en recuadros grises.",
    "Copia el ejemplo a IDLE, ejecútalo y cámbialo poco a poco hasta que haga lo que necesitas."
  ]},
  sqlbolt: { t: "Cómo se hace una lección de SQLBolt, paso a paso", s: [
    "Abre sqlbolt.com y entra en la **lección 1**. Lee la explicación de arriba: es corta.",
    "Abajo hay una tabla de datos y una lista de **Exercises** (tareas). Escribe tu consulta en el cuadro de texto, por ejemplo `SELECT title FROM movies;`.",
    "La tabla de resultados se actualiza sola mientras escribes. Cuando tu consulta cumple una tarea, la tarea se marca en verde. Pasa a la siguiente.",
    "Si te atascas, pulsa **Show solution** solo después de intentarlo 10 minutos, y luego vuelve a escribirla tú sin mirar.",
    "Al completar todas las tareas pulsa **Continue** para ir a la siguiente lección."
  ]},
  portswigger: { t: "Cómo se usan Burp Suite y la Web Security Academy, paso a paso", s: [
    "**Instalar Burp:** en portswigger.net/burp pulsa **Download**, elige **Community Edition** (gratis) y **Windows**. Abre el instalador y acepta todo con **Next**.",
    "**Abrir Burp:** al arrancar elige **Temporary project** → **Next** → **Use Burp defaults** → **Start Burp**.",
    "**Navegador de Burp:** pestaña **Proxy** → **Intercept**. Comprueba que el botón diga **Intercept is off** (si está en on, la página se queda cargando). Pulsa **Open browser**: se abre un Chrome que pasa por Burp.",
    "**Ver el tráfico:** navega en ese navegador y luego mira **Proxy → HTTP history**. Cada fila es una petición; haz clic en una para ver la petición y la respuesta completas.",
    "**Academy:** en portswigger.net/web-security crea tu cuenta gratis (**Sign up**) y entra. Elige el tema que diga la sesión (por ejemplo Access control) y lee la teoría de arriba abajo.",
    "**Laboratorios:** al final de la teoría hay laboratorios. Abre uno marcado **APPRENTICE**, lee el objetivo y pulsa **Access the lab**: se abre una web solo para ti. Ábrela desde el navegador de Burp para ver todo lo que pasa.",
    "Cuando cumples el objetivo, arriba aparece el aviso **Congratulations, you solved the lab!** y el laboratorio queda marcado como **Solved**.",
    "Usa Burp **solo** con los laboratorios y con tus propias páginas. Nunca con webs ajenas."
  ]},
  owasp: { t: "Cómo se lee la lista OWASP Top 10, paso a paso", s: [
    "Abre la página. Baja hasta la lista de los 10 riesgos (A01, A02…).",
    "Haz clic en el que diga la sesión. Cada página tiene: **Overview** (de qué va), **Description** (cómo se ve el fallo), **How to Prevent** (cómo se corrige) y **Example Attack Scenarios** (ejemplos).",
    "Lee primero los ejemplos: son lo más fácil de entender. Luego **How to Prevent**: eso es lo que pondrás en tus informes.",
    "Si el inglés se hace pesado, usa el botón de traducir de Brave en la barra de direcciones."
  ]},
  mitre: { t: "Cómo se usa MITRE ATT&CK, paso a paso", s: [
    "Abre attack.mitre.org. En el menú de arriba pulsa **Matrices → Enterprise**.",
    "La matriz tiene columnas (**tácticas**: el *para qué* del atacante, como Initial Access) y dentro cada casilla es una **técnica** (el *cómo*, como Phishing).",
    "Haz clic en la técnica que diga la sesión. Arriba verás su código (por ejemplo **T1566**).",
    "Baja por la página: **Procedure Examples** (grupos reales que la usaron), **Mitigations** (cómo prevenirla) y **Detection** (cómo detectarla).",
    "Anota en tu cuaderno: código, nombre, una mitigación y una forma de detectarla."
  ]},
  nvd: { t: "Cómo se calcula la gravedad de un fallo (CVSS), paso a paso", s: [
    "Abre la calculadora CVSS del enlace (NVD). Verás grupos de botones: **Attack Vector**, **Attack Complexity**, **Privileges Required**, **User Interaction**, **Scope** y el impacto en **Confidentiality**, **Integrity** y **Availability**.",
    "Para cada grupo elige la opción que describe tu hallazgo. Ejemplo: si se explota por internet, Attack Vector = **Network**; si no hace falta iniciar sesión, Privileges Required = **None**.",
    "Arriba se calcula la nota (0 a 10) y su nivel: Low, Medium, High o Critical.",
    "Copia la nota y la cadena de texto que empieza por `CVSS:3.1/...` en tu informe: así cualquiera puede comprobar tu cálculo."
  ]},
  ine: { t: "Cómo se empieza en INE para la eJPT, paso a paso", s: [
    "Abre ine.com y crea tu cuenta gratis (**Sign up**). La versión gratuita (Starter Pass) incluye el curso para la eJPT.",
    "En tu panel busca el **Learning Path** «Penetration Testing Student» (eJPT).",
    "Abre la página del examen eJPT y lee el temario: cópialo en tu cuaderno y marca con ✓ lo que ya dominas y con ✗ lo que no.",
    "Empieza por los temas con ✗. No compres el examen hasta que todos tengan ✓."
  ]},
  htb: { t: "Cómo se conecta y se juega Hack The Box (Starting Point), paso a paso", s: [
    "Entra en app.hackthebox.com y crea tu cuenta (**Sign up**). Confirma el correo.",
    "En el menú de la izquierda pulsa **Starting Point** y elige el **Tier** que diga la sesión.",
    "Para llegar a las máquinas necesitas una VPN: pulsa **Connect to HTB** → **Starting Point** → **OpenVPN** → **Download VPN** (baja un archivo `.ovpn`).",
    "Instala **OpenVPN Connect** para Windows desde openvpn.net. Ábrelo, pulsa **Upload File** / arrastra el archivo `.ovpn` y pulsa **Connect**. Cuando diga *Connected*, ya estás dentro.",
    "En Starting Point, pulsa **Spawn Machine** en la máquina. Tras 1–2 minutos aparece su **IP**: es la única dirección que puedes atacar.",
    "Cada máquina trae **tareas con preguntas** que te guían. Respóndelas en orden; la última pide la flag (`root.txt` o similar).",
    "Al terminar, pulsa **Stop Machine** y desconecta la VPN."
  ]},
  hackerone: { t: "Cómo se usa HackerOne para aprender, paso a paso", s: [
    "Abre hackerone.com. Para leer informes reales ve a **Hacktivity**: es la lista de fallos que las empresas dejaron publicar.",
    "Abre un informe con estado **Disclosed**. Lee: qué encontró la persona, cómo lo demostró y cuánto le pagaron.",
    "Para ver programas ve a **Opportunities** (o Directory). Abre uno y lee las pestañas **Policy** (reglas) y **Scope** (qué se puede probar y qué no).",
    "Regla de oro: **solo pruebas lo que está dentro del Scope**, respetando las reglas. Fuera de eso es ilegal aunque el programa exista."
  ]},
  github: { t: "Cómo se crea tu portafolio en GitHub, paso a paso", s: [
    "Entra en github.com y crea tu cuenta (**Sign up**). Elige un nombre de usuario profesional: lo verán las empresas.",
    "Arriba a la derecha pulsa **+** → **New repository**. Ponle de nombre `portafolio`, márcalo como **Public** y marca **Add a README file**. Pulsa **Create repository**.",
    "Para escribir en el README pulsa el **lápiz** ✏ (Edit). Escribe quién eres, qué estudias y qué has aprendido. Usa `#` para títulos y `-` para listas.",
    "Pulsa **Commit changes** → **Commit changes** para guardar.",
    "Para subir un writeup: **Add file → Create new file**, nombre `writeups/nombre-del-reto.md`, escribe y **Commit changes**."
  ]},
  linkedin: { t: "Cómo se usa LinkedIn para buscar trabajo, paso a paso", s: [
    "Entra en linkedin.com y abre tu perfil (tu foto arriba → **Ver perfil**).",
    "Pulsa el **lápiz** junto a tu nombre para editar el **titular**: por ejemplo «Estudiante de ciberseguridad · picoCTF · TryHackMe».",
    "En **Información** pon el enlace a tu portafolio de GitHub.",
    "Para buscar empleo pulsa **Empleos**, escribe el puesto (por ejemplo `junior security analyst`) y usa los filtros **Remoto** y **Nivel de experiencia: Prácticas / Sin experiencia**.",
    "Pulsa **Guardar** en las ofertas que te interesen y compara qué piden: eso te dice qué estudiar después."
  ]},
  offsec: { t: "Cómo se revisa el camino a la OSCP, paso a paso", s: [
    "Abre la página del curso **PEN-200** en offsec.com.",
    "Lee los **requisitos previos** y el **temario** (syllabus). Cópialo en tu cuaderno.",
    "Marca con ✓ lo que ya hiciste en Hack The Box y TryHackMe, y con ✗ lo que falta. Ese es tu plan de estudio para los próximos meses."
  ]}
};
const GUIDE_HOSTS = [["cylabacademy", "cylab"], ["tryhackme.com", "thm"], ["overthewire.org", "bandit"], ["#tarjetas", "tarjetas"], ["#progreso", "progreso"], ["wikipedia.org", "devtools"], ["professormesser", "messer"], ["python.org/downloads", "python"], ["www.python.org", "python"], ["py4e.com", "py4e"], ["docs.python.org", "pydocs"], ["sqlbolt.com", "sqlbolt"], ["portswigger.net", "portswigger"], ["owasp.org", "owasp"], ["attack.mitre.org", "mitre"], ["nvd.nist.gov", "nvd"], ["ine.com", "ine"], ["hackthebox.com", "htb"], ["hackerone.com", "hackerone"], ["github.com", "github"], ["linkedin.com", "linkedin"], ["offsec.com", "offsec"]];

/* Guías de retos concretos, por unidad. */
const UNIT_GUIDES = {
  s10: [
    { t: "Reto · Nice netcat…: hablar con un servidor y traducir números", s: [
      "Busca `Nice netcat`, ábrelo en el workspace y pulsa **Launch Instance**. Aparece un comando parecido a `nc servidor.net 12345`. El tuyo tendrá otro servidor y otro número de puerto.",
      "Copia el comando **sin el símbolo $** del principio, pégalo en la terminal y pulsa Enter. `nc` (netcat) abre una conexión con ese servidor y ese puerto.",
      "El servidor responde con muchos números, uno por línea. Cada número es una letra en código **ASCII** (lo viste en esta sesión: 65 es la A).",
      "Selecciona con el ratón todos los números, de arriba abajo, y clic derecho → Copiar. Si la terminal se queda esperando, pulsa `Ctrl + C` para cortar la conexión.",
      "Arriba del panel derecho pulsa la pestaña **CyberChef**. Pega los números en el cuadro **Input**.",
      "En la lista **Operations** (a la izquierda de CyberChef) busca `From Decimal` y arrástralo al cuadro **Recipe**. En **Delimiter** elige **Line feed** (salto de línea).",
      "En **Output** aparece el texto traducido: es la flag. Cópiala y envíala."
    ], learn: "`nc servidor puerto` conecta con un servicio; los números ASCII se traducen con From Decimal en CyberChef." },
    { t: "Reto · Magikarp Ground Mission: entrar por SSH y moverte entre carpetas", s: [
      "Busca `Magikarp`, ábrelo y pulsa **Launch Instance** (si tienes otra instancia corriendo, párala antes con ■). Te dará un comando `ssh ctf-player@servidor -p puerto` y una **contraseña**.",
      "Pega el comando `ssh` en la terminal y pulsa Enter. Si pregunta «Are you sure you want to continue connecting?», escribe `yes` y Enter.",
      "Cuando pida **password**, pega la contraseña del reto y pulsa Enter. **No se ve mientras la pegas**: es normal.",
      "Ya estás dentro de otra computadora. Escribe `ls` para ver qué archivos hay y `cat nombre-del-archivo` para leer cada uno.",
      "La flag está repartida en **varias partes** en carpetas distintas, y los archivos te dicen adónde ir. Para moverte usa `cd`: `cd /` te lleva a la carpeta raíz (la de arriba del todo) y `cd ~` vuelve a tu carpeta personal. Después de cada `cd`, haz `ls` otra vez.",
      "Junta las partes **en orden** sin espacios, envía la flag y escribe `exit` para salir del servidor."
    ], learn: "`ssh usuario@servidor -p puerto` entra a otra máquina; `cd` cambia de carpeta; `/` es la raíz y `~` tu carpeta personal." },
    { t: "Reto · Wave a flag: ejecutar un programa y pedirle ayuda", s: [
      "Busca `Wave a flag` (General Skills, Easy), ábrelo en el workspace y abre la terminal con **>_**.",
      "Clic derecho en el enlace del programa → **Copiar dirección del enlace**. En la terminal: `wget ` + pegar + Enter.",
      "Escribe `ls` para ver el nombre exacto del archivo (en este reto se llama `warm`).",
      "Los archivos descargados no tienen permiso para ejecutarse. Dáselo con `chmod +x warm` (`chmod` cambia permisos; `+x` significa «ejecutable»).",
      "Ejecútalo con `./warm`. El `./` significa «el programa que está en esta carpeta».",
      "Lee lo que responde: te pide una opción. Las opciones van después del nombre con un guion, y la más común en Linux es `-h` (help, ayuda). Pruébala y aparecerá la flag."
    ], learn: "`chmod +x` hace ejecutable un archivo, `./programa` lo ejecuta y `-h` pide la ayuda de casi cualquier herramienta." }
  ],
  s15: [
    { t: "Reto · Insp3ct0r: leer el código de una web", s: [
      "Busca `Insp3ct0r` (Web Exploitation, Easy), ábrelo y pulsa **Launch Instance**. Aparece un enlace a la web del reto: ábrelo.",
      "En esa web pulsa **Ctrl + U**: se abre el **código fuente** (el HTML que recibió tu navegador).",
      "Busca **comentarios**: en HTML se escriben así `<!-- comentario -->`. Ahí está la primera parte de la flag.",
      "La flag está en **3 partes**. Las otras dos están en los archivos de **estilos** (`.css`) y de **código** (`.js`). En el código fuente, haz clic en los enlaces a esos archivos y busca sus comentarios: en CSS y JS se escriben `/* así */` o `// así`.",
      "Junta las 3 partes en orden, sin espacios, y envíala."
    ], learn: "Todo lo que la web manda a tu navegador lo puedes leer: HTML, CSS, JavaScript y sus comentarios." },
    { t: "Reto · where are the robots: el archivo robots.txt", s: [
      "Busca `where are the robots`, pulsa **Launch Instance** y abre la web.",
      "En la barra de direcciones, añade `/robots.txt` al final de la dirección (después del número de puerto) y pulsa Enter.",
      "Verás líneas como `Disallow: /algo.html`. Son rutas que el dueño pidió a los buscadores **no mostrar**. Pero cualquiera puede abrirlas.",
      "Cambia `/robots.txt` por esa ruta en la barra de direcciones y pulsa Enter. Ahí está la flag."
    ], learn: "`robots.txt` no protege nada: solo pide a Google que no indexe. A veces revela rutas escondidas." },
    { t: "Reto · Cookies: cambiar una cookie", s: [
      "Busca `Cookies` (el primero, Easy), pulsa **Launch Instance** y abre la web. Escribe en la caja el nombre de galleta que sugiere (por ejemplo `snickerdoodle`) y pulsa el botón.",
      "Pulsa **F12** → pestaña **Aplicación** (Application) → en la columna izquierda, **Cookies** → la dirección del reto. Verás una cookie llamada `name` con un **número** como valor.",
      "Haz doble clic en el valor y cámbialo por otro número (1, 2, 3…). Pulsa Enter y recarga la página con **F5**: ahora te muestra otra galleta.",
      "Ve probando números en orden y anótalos. Uno de ellos muestra la flag.",
      "Piensa: el servidor decidió qué mostrarte según un número que **tú controlas**. Eso es un fallo: el servidor nunca debe confiar en lo que manda el navegador."
    ], learn: "Las cookies las guarda tu navegador y puedes cambiarlas con F12. Un servidor seguro no se fía de ellas." }
  ],
  s24: [
    { t: "Reto · Mod 26: ROT13 con CyberChef", s: [
      "Busca `Mod 26` (Cryptography, Easy) y ábrelo. El enunciado trae un texto que parece una flag con las letras cambiadas. Cópialo **entero**, con las llaves.",
      "Abre **CyberChef** (pestaña dentro del workspace o el enlace 2 de esta sesión). Pega el texto en el cuadro **Input**.",
      "En **Operations** (izquierda) escribe `ROT13` y arrastra la operación al cuadro **Recipe** (centro).",
      "En **Output** aparece `picoCTF{...}`. Esa es la flag.",
      "Experimento: cambia **Amount** a otros números y mira cómo cambia el texto. Así entiendes por qué el César es débil: solo hay 25 opciones."
    ], learn: "ROT13 desplaza cada letra 13 posiciones; aplicarlo dos veces devuelve el original (13 + 13 = 26)." },
    { t: "Reto · The Numbers: números que son letras", s: [
      "Busca `The Numbers` y abre el enlace **numbers** con clic normal: es una imagen.",
      "Verás grupos de números con llaves `{ }`, como una flag. El primer grupo tiene 7 números: son las letras de PICOCTF.",
      "Cada número es la **posición de una letra en el abecedario** inglés: 1 = A, 2 = B, 3 = C … 26 = Z. Escribe en tu cuaderno la letra de cada número.",
      "Escribe la flag en **MAYÚSCULAS**, con las llaves: `PICOCTF{...}`. Si no la acepta, revisa que no tengas espacios."
    ], learn: "Reconocer el patrón es la mitad de la criptografía: aquí, números del 1 al 26 = letras." }
  ],
  s25: [
    { t: "Mini-CTF · First Grep (General Skills)", s: [
      "Descarga el archivo del reto con `wget`.",
      "Es muy largo para leerlo a mano. Usa `grep`, que busca un texto dentro de un archivo: `grep picoCTF nombre-del-archivo`.",
      "Solo se muestra la línea que contiene la flag."
    ], learn: "`grep texto archivo` encuentra una aguja en un pajar." },
    { t: "Mini-CTF · Bases (General Skills)", s: [
      "El enunciado trae un texto raro. Cópialo y pégalo en el **Input** de CyberChef.",
      "Por las letras, números y mayúsculas mezcladas, prueba la operación `From Base64`.",
      "El resultado va dentro de `picoCTF{ }` cuando lo envíes."
    ], learn: "Base64 se reconoce por mezclar mayúsculas, minúsculas y números, a veces con `=` al final." },
    { t: "Mini-CTF · Glory of the Garden (Forensics)", s: [
      "Descarga la imagen `garden.jpg` con `wget`. Si la abres, solo ves un jardín.",
      "Una imagen es un archivo binario, pero puede llevar texto escondido. `strings` saca todo el texto legible: `strings garden.jpg`.",
      "Sale demasiado texto. Combínalo con `grep` usando la barra `|` (pipe), que pasa la salida de un comando al siguiente: `strings garden.jpg | grep pico`."
    ], learn: "`strings` saca texto de archivos binarios; `|` encadena comandos." },
    { t: "Extra · Tab, Tab, Attack: descomprimir y autocompletar con Tab", s: [
      "Busca `Tab, Tab, Attack`, ábrelo y descarga el archivo `.zip` con `wget` (clic derecho en el enlace → Copiar dirección).",
      "Escribe `unzip ` y las 3 primeras letras del archivo, y pulsa la tecla **Tab**: la terminal completa el nombre sola. Pulsa Enter. `unzip` descomprime archivos .zip.",
      "Aparece una carpeta con un nombre larguísimo, y dentro hay más carpetas, una dentro de otra. Escribe `cd ` + las primeras letras + **Tab** + Enter. Repite: `ls` para ver qué hay y `cd` + Tab para entrar.",
      "Truco: con `cd ` + letras + Tab, Tab, Tab… puedes completar varias carpetas de golpe.",
      "En la última carpeta hay un programa. Ejecútalo con `./` + Tab + Enter. Si dice *Permission denied*, primero `chmod +x` + Tab."
    ], learn: "La tecla **Tab** autocompleta nombres: ahorra tiempo y evita errores. `unzip` descomprime." }
  ],
  s05: [
    { t: "Ejercicio guiado · tu primera vez en la terminal", s: [
      "Abre la terminal (**>_** en el workspace). Escribe `pwd` y pulsa Enter. Te responde la ruta de tu carpeta actual, algo como `/home/tu-usuario`. Esa es tu carpeta personal, la `~`.",
      "Escribe `ls` y Enter. Muestra lo que hay en la carpeta. Ahora `ls -la`: aparecen también los archivos **ocultos** (los que empiezan por punto, como `.bashrc`) y detalles como tamaño y fecha.",
      "Crea una carpeta para practicar: `mkdir practica`. Comprueba con `ls` que aparece.",
      "Entra en ella: `cd practica`. Fíjate cómo cambia el prompt. Comprueba dónde estás con `pwd`.",
      "Crea un archivo con texto: `echo hola hacker > saludo.txt`. El símbolo `>` guarda lo que sale del comando dentro de un archivo. Comprueba con `ls`.",
      "Lee el archivo: `cat saludo.txt`. Debe salir «hola hacker».",
      "Copia el archivo: `cp saludo.txt copia.txt` y comprueba con `ls` que ahora hay dos.",
      "Prueba el autocompletado: escribe `cat co` y pulsa **Tab**. La terminal completa `copia.txt` sola. Pulsa Enter.",
      "Pulsa la flecha **↑**: vuelve el último comando. Así no tienes que reescribirlo.",
      "Sube a la carpeta de arriba con `cd ..` y comprueba con `pwd`. Luego vuelve a tu carpeta personal desde cualquier sitio con `cd ~`.",
      "Abre el manual de un comando: `man ls`. Muévete con las flechas y sal pulsando **q**. Todo comando tiene su manual.",
      "Escribe `clear` para limpiar la pantalla. Si en algún momento algo se queda colgado, **Ctrl + C** lo cancela."
    ], learn: "`pwd` dónde estoy, `ls` qué hay, `mkdir` crear carpeta, `cd` moverme, `echo … >` crear archivo, `cat` leer, `cp` copiar, `man` ayuda." },
    { t: "Tu primer reto · Obedient Cat: descargar un archivo y leerlo", s: [
      "En la biblioteca (Category: General Skills, Difficulty: Easy) escribe `Obedient Cat` en **Search**, abre el reto y pulsa **Open in Workspace**. Abre la terminal con **>_**.",
      "El enunciado tiene un enlace llamado **flag**. **No hagas clic normal**: haz **clic derecho** sobre él → **Copiar dirección del enlace**.",
      "En la terminal escribe `wget ` (con un espacio al final), pega la dirección con clic derecho → Pegar y pulsa Enter. `wget` descarga archivos de internet.",
      "Escribe `ls` y Enter. `ls` lista los archivos de la carpeta: debe aparecer uno llamado `flag`.",
      "Escribe `cat flag` y Enter. `cat` muestra lo que hay dentro de un archivo. Ahí está la flag.",
      "Selecciónala con el ratón, clic derecho → Copiar, pégala en **FLAG** y pulsa **Submit**."
    ], learn: "`wget` descarga, `ls` lista lo que hay, `cat` muestra el contenido de un archivo." }
  ]
};
