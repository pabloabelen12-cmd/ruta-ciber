Object.assign(UNIT_GUIDES, {
  p4u01: [
    { t: "Monta tu laboratorio Linux en Windows (WSL2 + Kali), paso a paso", s: [
      "Hasta ahora las herramientas de ataque (nmap, nc...) estaban en cajas que te daban en el navegador (la AttackBox de TryHackMe, la terminal de picoCTF). En Hack The Box, con cuenta gratis, **no** tienes una caja así siempre encendida (la Pwnbox del navegador solo te da **una sesión de 2 horas para toda la vida de la cuenta**). Por eso vas a montar tu propio Linux **dentro** de Windows con **WSL** (Windows Subsystem for Linux, «subsistema de Linux para Windows»): un Linux real que corre junto a Windows, sin instalar una máquina virtual pesada.",
      "Abre **PowerShell como administrador**: tecla Windows, escribe `PowerShell`, clic derecho sobre **Windows PowerShell** → **Ejecutar como administrador**. Escribe `wsl --install -d kali-linux` y pulsa Enter. Esto baja e instala **Kali Linux** (la distribución de Linux preparada para seguridad). Cuando termine, **reinicia la laptop** si te lo pide.",
      "Tras reiniciar, tecla Windows → escribe `kali` → abre **Kali Linux**. La primera vez te pide crear un **usuario** y una **contraseña** para ese Linux (apúntalos; al escribir la contraseña no se ve nada, es normal). Cuando veas un prompt que termina en `$`, ya estás dentro de tu Linux.",
      "Actualiza el sistema e instala las herramientas: escribe `sudo apt update && sudo apt install -y kali-linux-headless openvpn` y Enter. Pon tu contraseña cuando la pida. `kali-linux-headless` trae el paquete de herramientas (nmap, netcat, smbclient...) y `openvpn` es el programa que te conectará a la VPN. Tarda un rato: es mucha descarga.",
      "WSL no carga por defecto el módulo que la VPN necesita. Actívalo con `sudo modprobe tun` (cárgalo una vez por sesión, antes de conectar la VPN). Si no diera error, está listo.",
      "Ahora consigue tu archivo de VPN de Hack The Box: la guía de plataforma de HTB te explica el flujo (**Connect to HTB** → **Starting Point** → **OpenVPN** → elige servidor cercano y **Download VPN**). Guarda el archivo `.ovpn`. En Kali, ese archivo está en `/mnt/c/Users/TuUsuario/Downloads/` (WSL ve tu disco C en `/mnt/c`).",
      "Conéctate: en Kali escribe `sudo openvpn /mnt/c/Users/TuUsuario/Downloads/starting_point_TUUSER.ovpn` (cambia la ruta por la de tu archivo). Deja esa ventana **abierta**: si la cierras, se corta la VPN.",
      "Debe aparecer al final la línea «Initialization Sequence Completed». Eso significa que ya estás dentro de la red de HTB. Abre **otra** ventana de Kali para trabajar (tecla Windows → Kali otra vez) y comprueba la conexión con `ip addr show tun0`: debe mostrar una interfaz `tun0` con una IP. Si sale, ya puedes atacar las máquinas del laboratorio."
    ], learn: "WSL2 te da un Kali real dentro de Windows; `sudo modprobe tun` + `sudo openvpn archivo.ovpn` te conecta a la red del laboratorio de HTB." },
    { t: "Starting Point, Tier 0: enumerar y hablar con un servicio (método por máquina)", s: [
      "El Tier 0 tiene 4 máquinas **gratuitas** (las que no muestran un candado): cada una te enseña a hablar con **un** servicio distinto. En la máquina, pulsa **Spawn Machine**, espera 1–2 minutos y copia la **IP** que aparece: es la única dirección que puedes tocar. Todo esto solo contra esa IP del laboratorio; nada fuera de ahí.",
      "Empieza SIEMPRE igual: en tu Kali conectado a la VPN, escanea los puertos con `nmap -sC -sV IP` (lo viste en nmap: `-sV` detecta versiones, `-sC` lanza los scripts básicos). Mira qué puerto está abierto: eso te dice qué servicio enseña la máquina.",
      "**Máquina de telnet (puerto 23):** `telnet` es un programa viejo para conectarte a la consola de otra máquina **sin cifrar**. Conéctate con `telnet IP`. Cuando pida «login», prueba el usuario de administrador de Linux. Si entra sin pedir contraseña, el fallo es que no había autenticación. Lee la flag `flag.txt` con `cat` y envíala en **Submit Flag**.",
      "**Máquina de FTP (puerto 21):** `ftp` sirve para transferir archivos. Conéctate con `ftp IP` y, cuando pida «Name», escribe `anonymous` (acceso anónimo, sin contraseña): pulsa Enter en la contraseña. Dentro usa `ls` para ver archivos y `get nombre` para descargarlos a tu Kali. Sal con `bye` y lee el archivo descargado con `cat`.",
      "**Máquina de SMB (puerto 445):** SMB es el sistema de carpetas compartidas de Windows. Lista las carpetas con `smbclient -L //IP/ -N` (`-L` lista, `-N` entra sin contraseña). Conéctate a una carpeta que no sea del sistema con `smbclient //IP/NombreCarpeta -N`. Dentro, `ls` y `get archivo` como en FTP.",
      "**Máquina de Redis (puerto 6379):** Redis es una base de datos en memoria. Conéctate con `redis-cli -h IP` (`-h` es el servidor). Dentro escribe `info` para ver datos del servidor, `keys *` para listar todo lo guardado y `get nombre-de-la-clave` para leer un valor. Ahí suele estar lo que buscas.",
      "De cada máquina, escribe en tu cuaderno: puerto, servicio, qué permitió el acceso (sin autenticación, acceso anónimo...) y cómo se arregla. Al terminar pulsa **Stop Machine**."
    ], learn: "Primero `nmap` para ver el servicio; luego su cliente propio: `telnet`, `ftp` (anonymous), `smbclient -N`, `redis-cli -h`. Casi todas fallan por no pedir autenticación." }
  ],
  p4u02: [
    { t: "Starting Point, Tier 1: tu primer paso de explotación (método)", s: [
      "El Tier 1 sigue siendo de **un paso principal**, pero ahora ese paso es una explotación, no solo «entrar». Haz las máquinas gratuitas (sin candado). Trabaja siempre contra la **IP** que te da **Spawn Machine**, nada más.",
      "Rutina fija: `nmap -sC -sV IP`. Si ves un puerto web (80 o 443), ábrelo en Brave escribiendo `http://IP` en la barra de direcciones. Si ves otro servicio (FTP, base de datos), usa su cliente como en el Tier 0.",
      "En las webs, lo primero es buscar **carpetas y páginas ocultas** con un «fuzzer» de directorios. Instala uno: `sudo apt install -y gobuster`. `gobuster` prueba muchos nombres de carpeta y te dice cuáles existen. Úsalo así: `gobuster dir -u http://IP -w /usr/share/wordlists/dirb/common.txt` (`dir` = modo directorios, `-u` la dirección, `-w` la lista de nombres a probar).",
      "Si encuentras un panel de inicio de sesión, recuerda lo que estudiaste de **inyección SQL** (SQLi) y de credenciales por defecto: prueba primero usuarios y contraseñas comunes (admin/admin) y, si el campo no filtra comillas, la técnica de SQLi que viste en PortSwigger. Solo en esta máquina del laboratorio.",
      "Si el servicio es una base de datos MySQL (puerto 3306), conéctate con el cliente: `mysql -h IP -u usuario -p` (`-h` servidor, `-u` usuario, `-p` pedirá la contraseña). Dentro usas el SQL que ya sabes (`SHOW DATABASES;`, `USE basededatos;`, `SELECT * FROM tabla;`).",
      "Cuando consigas entrar o leer lo que buscas, encuentra el archivo de la flag con `find / -name flag.txt 2>/dev/null` (busca en todo el disco el archivo y esconde los errores) y léelo con `cat`.",
      "Escribe un writeup corto de cada máquina: servicio, fallo, cómo se explota y cómo se defiende (parchear, quitar credenciales por defecto, usar consultas preparadas contra SQLi). Pulsa **Stop Machine** al acabar."
    ], learn: "Tier 1 = enumerar con nmap + gobuster y aplicar una técnica que ya conoces (credenciales por defecto, SQLi, acceso a un servicio) contra la IP del laboratorio." }
  ],
  p4u03: [
    { t: "Starting Point, Tier 2: máquina completa de principio a fin (método)", s: [
      "El Tier 2 encadena **varios pasos** y tiene **dos flags**: `user.txt` (cuando entras como un usuario normal) y `root.txt` (cuando llegas a administrador). Es lo más parecido a un pentest real. Trabaja cada una como un proyecto, contra su **IP** del laboratorio.",
      "Fase 1, enumerar: `nmap -sC -sV IP` y, si hay web, `gobuster dir -u http://IP -w /usr/share/wordlists/dirb/common.txt`. Apunta cada puerto, versión y carpeta encontrada. El 80 % del trabajo es mirar bien aquí.",
      "Fase 2, acceso inicial (foothold): busca la debilidad del servicio que encontraste (una versión vieja con fallo conocido, un panel con credenciales débiles, una subida de archivos). Usa la técnica que corresponda de lo que ya estudiaste. Cuando logres ejecutar comandos en la máquina, ya eres un usuario normal: lee `user.txt` con `cat`.",
      "Fase 3, reconocimiento interno: ya dentro, mira quién eres con `whoami` y `id`, y qué puedes hacer de más. Recuerda la **escalada de privilegios en Linux** que viste: revisa `sudo -l` (qué puedes ejecutar como administrador), busca archivos con permiso **setuid** con `find / -perm -4000 2>/dev/null`, y mira tareas y servicios.",
      "Fase 4, escalada: aprovecha lo que encontraste para pasar a **root** (el administrador de Linux) o **SYSTEM** (el de Windows). Si una herramienta te lo permite por configuración insegura, úsala solo para elevar privilegios en **esta** máquina.",
      "Fase 5, segunda flag: ya como root, lee `root.txt` (suele estar en `/root/root.txt`) con `cat` y envíala en **Submit Flag**.",
      "Escribe un informe por máquina con las 5 fases, una captura por fase y cuánto tardaste. Ese informe es exactamente lo que harás en un trabajo real. Pulsa **Stop Machine** al terminar."
    ], learn: "Una máquina completa = enumerar → acceso inicial (user.txt) → reconocimiento interno → escalada de privilegios → root.txt, documentando cada paso." }
  ],
  p4u04: [
    { t: "CTFtime: encontrar una competencia para principiantes", s: [
      "Abre ctftime.org. En el menú de arriba pulsa **Upcoming** (próximos): es el calendario de competencias de todo el mundo, con la fecha y la hora en **UTC** (República Dominicana es UTC−4: a las 20:00 UTC son las 16:00 aquí).",
      "Cada fila trae un icono de formato. Busca los de tipo **Jeopardy**: son como picoCTF, retos sueltos por categorías (web, cripto, forense...) que resuelves para ganar puntos. Evita por ahora los **Attack-Defense**, que son de equipos que atacan y defienden a la vez: son más avanzados.",
      "Fíjate en el **Weight** (peso) del evento: es cuánto valora CTFtime esa competencia. Para empezar, elige eventos de peso bajo o con la etiqueta de principiantes; la dificultad será más amable.",
      "Abre un evento que te cuadre de fecha. Lee su descripción y pulsa el enlace a su web oficial para registrarte allí (CTFtime solo es el calendario; el juego ocurre en la web del evento).",
      "Apunta la fecha de inicio y fin en tu calendario con la hora ya pasada a tu zona. Muchos duran 24 o 48 horas seguidas: no tienes que jugar todo ese tiempo.",
      "Nota: picoCTF celebra su competencia cada primavera. La edición 2026 fue del 9 al 19 de marzo; la de 2027 aún no está anunciada, así que revisa picoctf.org cada cierto tiempo. Mientras tanto, su biblioteca de retos sigue abierta para practicar."
    ], learn: "CTFtime > Upcoming lista competencias; para empezar elige formato Jeopardy y peso bajo, y te registras en la web oficial del evento." },
    { t: "Unirte a un equipo o crear el tuyo en CTFtime", s: [
      "Crea tu cuenta en CTFtime: arriba a la derecha **Sign in** → **Register**. Confirma el correo y entra.",
      "Para **crear** un equipo (por ejemplo el de tu universidad): menú **Teams** → **Create new team**. Ponle nombre y país. Al crearlo, en tu perfil aparece tu equipo con un **Invitation code** (código de invitación): Profile → Your teams → Edit your team. Comparte ese código solo con tus compañeros.",
      "Para **unirte** a un equipo que ya existe: entra en la página del equipo y envía una **membership request** (solicitud) desde el formulario de tu Profile; un miembro la aprueba, o te pasa el **Invitation code** para que te unas directo.",
      "¿No tienes equipo todavía? En **Teams** → **Get team members** hay un buscador para encontrar gente que busca compañeros. También sirven comunidades de Discord de CTF para principiantes.",
      "Antes del evento, repartíos las categorías: tú coges la que más dominas (por ejemplo web o general skills) y cada quien otra. Así trabaja un equipo real.",
      "Cuando el evento **haya terminado** (nunca antes, para no dar pistas a rivales), escribe un writeup de al menos un reto que resolvieras y súbelo a tu portafolio de GitHub."
    ], learn: "En CTFtime creas un equipo (y repartes su Invitation code) o te unes a uno con una solicitud; cada miembro se especializa en una categoría." }
  ],
  p4u05: [
    { t: "Leer el alcance y las reglas de un programa en HackerOne", s: [
      "Entra en hackerone.com. Lo nuevo aquí no es Hacktivity (ya lo viste), sino aprender a leer **a quién** se le permite probar **qué**. Ve al buscador de programas (**Opportunity Discovery** / Directory).",
      "Puedes filtrar por **program type** (tipo de programa). Fíjate en dos: **Bug bounty** (paga por fallos válidos) y **VDP**, siglas de «Vulnerability Disclosure Program» (programa de divulgación de vulnerabilidades): **no paga**, pero acepta y arregla lo que reportas. Para empezar, los **VDP** son ideales porque sus reglas suelen ser más abiertas y relajadas.",
      "Abre un programa y busca su página de seguridad. Lee la parte de **Scope** (alcance): es la lista de lo que puedes tocar. Suele estar dividida en **In scope** (dentro del alcance: permitido) y **Out of scope** (fuera: prohibido). Cada activo dice si además es **Eligible for bounty** (si pagan por fallos ahí).",
      "Lee ahora las reglas (la **Policy** o política). Apunta en tu cuaderno qué técnicas están **siempre prohibidas**: casi todos prohíben ataques de denegación de servicio (tumbar el servicio), spam, ingeniería social a empleados y tocar datos de otros usuarios reales.",
      "Haz esto con **tres** programas distintos y compara. Verás que se repiten las mismas reglas de oro. Esa es la base de la divulgación responsable: el fallo se avisa **en privado** a la empresa y no se publica hasta que lo arreglan.",
      "Regla absoluta: si algo **no** está claramente **In scope**, no lo toques. Probar fuera del alcance no es bug bounty: es acceso no autorizado, y es ilegal aunque el programa exista."
    ], learn: "En HackerOne, un VDP no paga pero es bueno para empezar; solo se prueba lo que está In scope, respetando la Policy; fuera de ahí es ilegal." }
  ],
  p4u06: [
    { t: "Aprender de 10 informes públicos (método de lectura)", s: [
      "En hackerone.com ve a **Hacktivity** (la lista de informes que las empresas dejaron hacer públicos). Arriba hay filtros: filtra por **weakness** (tipo de debilidad) y elige uno que ya conozcas, como IDOR, XSS o control de acceso. Así lees fallos que entiendes.",
      "Abre un informe con estado **Disclosed** (divulgado). Léelo entero con esta plantilla en tu cuaderno: (1) **tipo** de fallo, (2) **cómo lo encontró** la persona (qué miró, qué herramienta), (3) **cómo demostró el impacto** sin causar daño, (4) qué **recompensa** o reconocimiento recibió.",
      "Fíjate en el apartado de **Timeline** (línea de tiempo): verás cuánto tardó la empresa en responder y arreglar. Eso te enseña cómo es el proceso real.",
      "Mira cómo está **escrito** el informe: título claro, pasos numerados para reproducir el fallo, una prueba (captura o vídeo) y el impacto explicado para alguien que no es técnico. Los mejores informes convencen en 30 segundos.",
      "Repite con **10 informes** de los tipos que conoces. Guarda la tabla de los 10 en tu cuaderno.",
      "Al final escribe una conclusión: qué hacen los mejores informes que los peores no hacen. Eso es lo que copiarás cuando escribas el tuyo."
    ], learn: "Leer 10 informes Disclosed de un tipo que ya conoces te enseña cómo piensan, cómo prueban el impacto sin dañar y cómo escriben un buen reporte." }
  ],
  p4u07: [
    { t: "Tu primer programa, dentro del alcance y dentro de la ley", s: [
      "Antes de tocar nada, lo legal. En República Dominicana rige la **Ley 53-07** sobre crímenes y delitos de alta tecnología. Su **Artículo 6** castiga el **acceso ilícito** a un sistema (entrar o pasarte de tu autorización) con **3 meses a 1 año de prisión** y multa; sube a 1–3 años si alteras o divulgas datos. Su **Artículo 8** castiga poseer o usar herramientas para delinquir. Un programa de bug bounty es tu **permiso por escrito** para probar: solo te cubre **dentro** de su Scope y sus reglas. Fuera de ahí, cometes el delito del Artículo 6. (Nota: hay un nuevo Código Penal, Ley 74-25, que entra en vigor en agosto de 2026 y endurece estas penas; la idea es la misma: sin permiso, es delito.)",
      "Elige en HackerOne un programa con alcance **amplio** y reglas claras, idealmente un **VDP**. Copia su **Scope** completo (In scope y Out of scope) y su Policy en tu cuaderno antes de probar nada. Léelo **dos veces**.",
      "Confirma que los activos que vas a tocar están **In scope**. Si un subdominio o una app no aparece, está fuera: no la toques.",
      "Elige **un solo** tipo de fallo que domines (por ejemplo IDOR o control de acceso) y céntrate en él en varios bloques de trabajo. No esperes dinero al principio: lo normal es tardar en encontrar el primero válido.",
      "Prueba siempre con suavidad: una sola cuenta de prueba, sin automatizar ataques masivos, sin tocar datos de usuarios reales y sin repetir algo que pueda tumbar el servicio. Si dudas de si algo está permitido, **no lo hagas** y pregunta al programa por su canal oficial.",
      "Si encuentras algo, escríbelo con la estructura que estudiaste en los 10 informes. Si no encuentras nada, no es un fracaso: anota lo que aprendiste del objetivo. Nunca publiques el fallo por tu cuenta: se queda entre tú y la empresa hasta que lo arreglen."
    ], learn: "El permiso del programa (su Scope) es lo único que te separa del delito del Art. 6 de la Ley 53-07; se prueba un solo tipo de fallo, con suavidad y sin salir del alcance." }
  ],
  p4u08: [
    { t: "Tu primer script útil: generar la plantilla de un writeup", s: [
      "Vas a escribir una herramienta que te ahorre tiempo real: cada vez que empiezas una máquina, te crea una carpeta con la plantilla del informe ya con la fecha y el nombre. Abre **IDLE** (tecla Windows → `IDLE`) → **File → New File**.",
      "Escribe la primera línea: `import os` y debajo `from datetime import date`. `import` trae módulos ya hechos de Python: `os` sirve para crear carpetas y archivos; `datetime` para la fecha de hoy. No instalas nada: vienen con Python.",
      "Pide el nombre de la máquina: `maquina = input('Nombre de la maquina: ')`. `input()` muestra ese texto, espera a que escribas y guarda lo que pongas en la variable `maquina`.",
      "Calcula la fecha de hoy: `hoy = date.today()`. Guarda la fecha actual en `hoy` (saldrá como `2026-11-08`).",
      "Crea la carpeta: `os.makedirs(maquina, exist_ok=True)`. `makedirs` crea una carpeta con el nombre de la máquina; `exist_ok=True` evita el error si ya existe.",
      "Prepara el texto de la plantilla con una cadena de varias líneas entre tres comillas: `plantilla = f'''# Writeup: {maquina}\\nFecha: {hoy}\\n\\n## Enumeracion\\n\\n## Acceso inicial\\n\\n## Escalada\\n\\n## Como se defiende\\n'''`. La `f` antes de las comillas permite meter `{maquina}` y `{hoy}` dentro del texto; `\\n` es un salto de línea.",
      "Escribe el archivo dentro de la carpeta: `ruta = os.path.join(maquina, 'writeup.md')` une la carpeta y el nombre del archivo, y luego `with open(ruta, 'w') as f: f.write(plantilla)` abre el archivo en modo escritura (`'w'`) y vuelca la plantilla. El `with` cierra el archivo solo al terminar.",
      "Avisa de que terminó: `print(f'Listo: {ruta}')`. Guarda con **Ctrl + S** como `nuevo_writeup.py` en tu carpeta `Cuaderno-hacker` y ejecútalo con **F5**. Escribe un nombre de máquina y comprueba que aparece la carpeta con el `writeup.md` dentro, ya fechado.",
      "Mejora tú una cosa: por ejemplo, que al principio del archivo haya un comentario con instrucciones de uso (`# Uso: ejecutar y escribir el nombre de la maquina`). Súbelo a tu portafolio: es código tuyo."
    ], learn: "Con `input`, `os.makedirs`, `open(...,'w')` y `datetime` automatizas una tarea repetitiva; las f-strings (`f'...{variable}...'`) meten datos dentro del texto." }
  ],
  p4u09: [
    { t: "Qué es git y GitHub, y tu portafolio desde la web (sin instalar nada)", s: [
      "**git** es un programa que guarda el historial de tus archivos: cada vez que guardas un cambio (un «commit»), git recuerda qué cambió y cuándo, para que puedas volver atrás. **GitHub** es una web donde subes esos proyectos para enseñarlos y guardarlos en la nube. La unidad usa git, pero puedes hacer todo **desde la web de GitHub**, sin instalar git en la laptop.",
      "La guía de plataforma de GitHub ya te explica crear la cuenta y el repositorio `portafolio` con su README. Aquí vas a dejarlo profesional. Primero, un **README de perfil**: crea un repositorio **con el mismo nombre que tu usuario** (si tu usuario es `juanp`, el repo se llama `juanp`), márcalo **Public** y **Add a README file**. Ese README especial se muestra en tu página de perfil para quien te busque.",
      "Edita ese README con el **lápiz** ✏ (**Edit**). Pon quién eres, qué estás aprendiendo (redes, Linux, web), tus logros (picoCTF, TryHackMe, máquinas de HTB) y un enlace a tu repo `portafolio`. Guarda con **Commit changes** → **Commit changes**. Cada «commit» es una foto guardada de tu trabajo.",
      "En tu repo `portafolio`, organiza por carpetas. Para crear una carpeta y un archivo a la vez: **Add file → Create new file** y en el nombre escribe `scripts/nuevo_writeup.py`: la barra `/` crea la carpeta `scripts`. Pega tu script y **Commit changes**.",
      "Sube tus writeups **permitidos** (de máquinas retiradas o retos cuyas reglas lo permitan) igual: **Add file → Create new file**, nombre `writeups/nombre-del-reto.md`, escribe y **Commit changes**. Nunca subas soluciones de máquinas activas ni nada de un bug bounty sin permiso de la empresa.",
      "Para subir un archivo que ya tienes en la laptop (una imagen, un .py): **Add file → Upload files**, arrástralo y **Commit changes**. Con esto manejas todo tu portafolio sin instalar nada."
    ], learn: "git guarda el historial (commits) y GitHub lo publica; desde la web puedes crear tu README de perfil, carpetas con `/` y subir archivos, todo sin instalar git." },
    { t: "Opción avanzada: GitHub Desktop en Windows", s: [
      "Si prefieres trabajar con tus archivos en la laptop y subirlos de golpe, instala **GitHub Desktop**: entra en desktop.github.com, pulsa **Download for Windows**, abre el instalador y, al abrir el programa, inicia sesión con tu cuenta de GitHub (**Sign in to GitHub.com**).",
      "Trae tu repositorio a la laptop: **File → Clone repository** («clonar» = descargar una copia enlazada con GitHub). Elige `portafolio` de la lista, elige una carpeta local y pulsa **Clone**. Ahora tienes esa carpeta en tu disco.",
      "Trabaja normal: crea o edita archivos dentro de esa carpeta con el Explorador de Windows o IDLE. GitHub Desktop detecta los cambios solos y los muestra en la pestaña **Changes** (cambios), a la izquierda.",
      "Para guardar ese paquete de cambios: abajo a la izquierda escribe un **Summary** (resumen corto, por ejemplo «agrego script de writeups») y pulsa **Commit to main**. Eso crea el commit en tu copia local.",
      "Para subirlo a la web pulsa **Push origin** (arriba). «Push» envía tus commits a GitHub. Recarga tu repo en github.com y verás los cambios ahí.",
      "Si editaste algo en la web, antes de trabajar pulsa **Fetch origin** → **Pull origin** para traer esos cambios a tu laptop y no pisarlos. Regla: primero **Pull**, luego trabajas, luego **Commit** y **Push**."
    ], learn: "GitHub Desktop: Clone trae el repo, Commit to main guarda un paquete de cambios local y Push origin lo sube; Pull trae lo que cambiaste en la web." }
  ],
  p4u10: [
    { t: "Tu CV de seguridad en una página", s: [
      "Un CV de seguridad convence con **evidencias**, no con adjetivos. Escríbelo en **una sola página**. Puedes usar un documento normal (Word o Google Docs) y exportarlo a PDF, que es como se envía.",
      "Orden de arriba a abajo: (1) **Nombre y titular** (por ejemplo «Estudiante de ciberseguridad · eJPT»); (2) **Contacto**: correo profesional, enlace a tu GitHub y a tu LinkedIn; (3) **Resumen** de 2 líneas de quién eres y qué buscas.",
      "Luego la sección más importante: **Proyectos y práctica**. Lista con viñetas: «Resolví N máquinas en Hack The Box (Starting Point)», «Completé la ruta Pre Security y SOC de TryHackMe», «Participé en el CTF X con el equipo Y», «Scripts en Python en mi GitHub». Cada línea enlaza a la prueba.",
      "Después **Certificaciones** (eJPT cuando la tengas), **Formación** (tu universidad) e **Idiomas** (inglés: tu gran ventaja, ponlo como «avanzado»).",
      "Habilidades: una línea con herramientas que de verdad usaste: Linux, nmap, Burp Suite, Wireshark, Python, SQL. No pongas nada que no sepas defender en una entrevista.",
      "Guárdalo como PDF con un nombre claro: `CV-TuNombre-Ciberseguridad.pdf`. Revisa que no haya faltas y que todo quepa en una página."
    ], learn: "El CV de seguridad vive de evidencias enlazadas (HTB, TryHackMe, CTF, GitHub), cabe en una página y se envía en PDF; el inglés es tu diferencial." },
    { t: "LinkedIn y buscar tu primera pasantía", s: [
      "La guía de plataforma de LinkedIn te explica editar el perfil y buscar empleo. Aquí lo afinas. **Titular**: ponlo orientado a lo que quieres, por ejemplo «Estudiante de ciberseguridad · TryHackMe · Hack The Box · busca pasantía».",
      "**Acerca de / Información**: 3–4 líneas en primera persona con lo que aprendes y el enlace a tu portafolio de GitHub. En **Destacado** (Featured) ancla tu GitHub y tu mejor writeup.",
      "Rellena **Proyectos** y **Licencias y certificaciones** con lo mismo que pusiste en el CV, para que coincidan.",
      "Para buscar: pestaña **Empleos** → escribe `pasante ciberseguridad` o `security intern` → filtros **Ubicación** (tu país o Remoto) y **Nivel de experiencia: Prácticas** y **Sin experiencia**. Pulsa **Guardar** en las que te interesen.",
      "Haz una lista de **10 empresas** donde te gustaría entrar. En seguridad suelen contratar pasantes los **bancos**, las **telecomunicaciones**, las **consultoras** y el **gobierno**. Pregunta también en la bolsa de empleo de tu universidad.",
      "Conéctate con personas que trabajen en esas empresas con una nota corta y educada. No pidas trabajo de golpe: pregunta por su camino. Comparte cada semana algo que aprendiste; eso te hace visible."
    ], learn: "LinkedIn con titular orientado a pasantía, portafolio enlazado y perfil que coincide con el CV; busca con filtros Prácticas/Sin experiencia y haz una lista de 10 empresas." }
  ],
  p4u11: [
    { t: "Prepararte para trabajo remoto en dólares (plataformas verificadas)", s: [
      "Tu inglés avanzado es tu mayor ventaja para trabajar remoto para empresas de fuera. Prepara tres cosas: entrevistas técnicas **en inglés**, un portafolio sólido y referencias.",
      "Practica la entrevista: **graba un vídeo de 5 minutos en inglés** explicando en voz alta una máquina que resolviste (qué enumeraste, cómo entraste, cómo escalaste). Escúchate y repítelo hasta que fluya. Esto es justo lo que te pedirán.",
      "Busca ofertas remotas en plataformas que de verdad contratan desde Latinoamérica: **Get on Board** (getonbrd.com, muy usado en Latinoamérica, filtra por «Remote»), **Working Nomads** (workingnomads.com, tiene sección de ciberseguridad para Latam), **Torre** (torre.ai), **We Work Remotely** (weworkremotely.com) y **Remotive** (remotive.com). Busca `junior security analyst`, `SOC analyst` o `junior penetration tester` y fíjate en las que digan «Remote (Latin America)» o «Remote (Worldwide)».",
      "Guarda **10 ofertas** de nivel de entrada y haz una tabla con los requisitos que se repiten (certificaciones, herramientas, años). Eso te dice exactamente qué estudiar después.",
      "Escribe tu plan para cubrir lo que te falte: qué certificación, qué herramienta, en cuántas semanas. Prioriza lo que más se repite en las ofertas.",
      "Cuidado con las **estafas**: una oferta legítima **nunca** te pide pagar para empezar, ni comprar equipo por adelantado, ni tus datos bancarios antes de firmar un contrato. Si piden dinero o van con prisa rara, es estafa. Desconfía también de ofertas solo por chat sin videollamada."
    ], learn: "Prepara una explicación en inglés grabada y un portafolio; busca en Get on Board, Working Nomads, Torre, We Work Remotely y Remotive filtrando «Remote Latin America»; ninguna oferta real te cobra por empezar." }
  ],
  p4u12: [
    { t: "El camino a la OSCP (PEN-200): precio, formato y requisitos hoy", s: [
      "La guía de plataforma de OffSec te explica revisar el temario. Aquí van los datos actuales (offsec.com, 2026) para que decidas con cifras reales. La **OSCP** es de las certificaciones de hacking ético más valoradas; su curso es el **PEN-200**.",
      "**Precio** (offsec.com): el paquete **Course + Cert Bundle** (90 días de acceso al curso, laboratorios y **un** intento de examen) cuesta **1,749 USD**. La suscripción **Learn One** (1 año de acceso y **dos** intentos) ronda los **2,199 USD/año**. Es cara: trátala como una meta a meses vista, no para ya.",
      "**Formato del examen**: es práctico y a distancia, **vigilado** («proctored») por videollamada. Tienes **23 horas y 45 minutos** para atacar y **otras 24 horas** para entregar el **informe**. Hay **3 máquinas sueltas** (20 puntos cada una) y **1 conjunto de Active Directory** de 3 máquinas (40 puntos). Necesitas **70 de 100 puntos** para aprobar. El informe cuenta: si no lo entregas bien, no apruebas aunque hackees todo.",
      "**Requisitos**: OffSec dice que no hay requisitos formales, pero recomienda lo que tú ya estás construyendo: redes TCP/IP, administración básica de Windows y Linux, y algo de Bash y Python. El Tier 2 de HTB y las máquinas de TryHackMe son la preparación ideal.",
      "Antes de ir por la OSCP, **elige una especialidad** y profundiza en ella: te hace más valioso que saber un poco de todo. Las cuatro grandes son seguridad web (AppSec), equipo rojo (red team), nube (cloud) y Active Directory.",
      "Si la OSCP te queda lejos o cara ahora, hay rutas con un **siguiente paso concreto más barato**: para **SOC/defensa**, haz la ruta **SOC Level 1** de TryHackMe y apunta a la certificación **BTL1**; para **AppSec/web**, prepara el **Burp Suite Certified Practitioner (BSCP)** de PortSwigger (unos **99 USD**) con la Web Security Academy que ya usas; para **cloud**, empieza por el **AWS Certified Cloud Practitioner (CLF-C02)** (unos **100 USD**) y practica gratis con el laboratorio flaws.cloud.",
      "Escribe tu **plan de 12 meses**: especialidad elegida (y por qué), la certificación objetivo, los proyectos que harás y tu meta de ingresos. Compártelo conmigo para revisarlo."
    ], learn: "OSCP/PEN-200: ~1,749 USD el paquete, examen vigilado de 23h45 + 24h de informe, 70/100 para aprobar; antes elige especialidad (web→BSCP, SOC→BTL1, cloud→AWS CCP) con su siguiente paso más barato." }
  ]
});
