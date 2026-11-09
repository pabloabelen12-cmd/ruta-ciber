Object.assign(UNIT_GUIDES, {
  p2u01: [
    { t: "Sala · Search Skills: buscar en las fuentes que usa un profesional", s: [
      "Abre la sala y pulsa **Join Room**. No tiene máquina: cada tarea trae un botón **View Site** que abre una **copia simulada** de una web real (a la derecha de la pantalla). Todo lo que busques ahí es de práctica.",
      "**Task 2 · Shodan (TryScanMe):** Shodan es un buscador de equipos conectados a internet (servidores, cámaras, routers), no de páginas. Pulsa **View Site**, escribe `apache` en la caja de búsqueda y abre el primer resultado. Fíjate en qué datos muestra de cada equipo (IP, puertos, país, organización) y responde.",
      "Lee también los **filtros** que explica la tarea: `country:`, `port:`, `org:` y `hostname:`. Funcionan como los operadores de Google: palabra, dos puntos y valor, sin espacio.",
      "**Task 3 · VirusTotal (TryDetectMe):** VirusTotal analiza un archivo, enlace o **hash** (una huella digital única que identifica un archivo; lo verás a fondo en la unidad 11) con decenas de antivirus a la vez. En el simulador busca el nombre de archivo que pide la pregunta y cuenta cuántos antivirus (vendors) lo marcan como peligroso.",
      "**Task 4 · CVE:** cada fallo conocido tiene un código `CVE-AÑO-NÚMERO` y una nota **CVSS** (la viste en Vulnerabilities 101). Busca el CVE que pide la pregunta en la base simulada y lee su clasificación.",
      "**Task 5 · man:** el simulador muestra el manual de `nc`. Baja hasta la parte **EXAMPLES** y busca el ejemplo que conecta a un servidor y un puerto. Es el mismo `man` que ya usas en la terminal.",
      "**Task 6 · GitHub:** muchos investigadores publican ahí pruebas de concepto (PoC: un programa que demuestra un fallo). Lee el **README** del repositorio simulado y localiza el script que pide la pregunta. Regla de oro: **nunca ejecutes código de GitHub sin leerlo antes**."
    ], learn: "Cada pregunta tiene su fuente: Shodan (equipos), VirusTotal (archivos sospechosos), CVE/NVD (fallos), man (comandos) y GitHub (código)." },
    { t: "Práctica · operadores de búsqueda en tu navegador", s: [
      "Abre una pestaña nueva en Brave. Brave usa su propio buscador (Brave Search); los operadores de abajo funcionan igual en Brave Search y en google.com.",
      "**Comillas = frase exacta.** Escribe `\"Permission denied (publickey)\"` con las comillas y pulsa Enter. Solo salen páginas con esa frase tal cual. Úsalo siempre que copies un mensaje de error.",
      "**site: = buscar dentro de un sitio.** Escribe `site:overthewire.org bandit level 13`. Todos los resultados son de overthewire.org. Abre el que diga **Level 13 → Level 14**: es la página del próximo nivel que vas a jugar.",
      "**filetype: = tipo de archivo.** Escribe `filetype:pdf subnetting cheat sheet`. Solo salen documentos PDF. Muy útil para guías y apuntes.",
      "Combínalos: `site:portswigger.net \"access control\"`. Fíjate en que no hay espacio después de los dos puntos.",
      "En la terminal también se busca: abre la terminal de CyLab (**>_**), escribe `man nc`, pulsa la tecla `/`, escribe `EXAMPLES` y Enter. El manual salta a esa palabra; `n` va a la siguiente coincidencia y `q` sale.",
      "Copia en tu cuaderno el texto exacto de un error que te haya salido (por ejemplo en Bandit), búscalo entre comillas y anota qué fuente te dio la respuesta y si era oficial."
    ], learn: "`\"frase exacta\"`, `site:` y `filetype:` filtran resultados; dentro de `man`, `/palabra` busca." }
  ],
  p2u02: [
    { t: "Ruta Pre Security (versión de 2026): qué salas te faltan y cuáles son gratis", s: [
      "Abre la ruta. Desde febrero de 2026 tiene **7 módulos y 31 salas**. Junto a cada sala completada hay una marca verde. Anota en tu cuaderno las que **no** la tienen.",
      "Ojo: varias salas de esta ruta son **de pago**. Si al abrir una ves «Premium room» y el aviso «only available for Premium or Max subscribers» con el botón **Subscribe now**, es de pago: anótala como «saltada» y pasa a la siguiente. No la necesitas para seguir este plan.",
      "Las salas **gratis** de la ruta son estas 14: Offensive Security Intro, Defensive Security Intro, Careers in Cyber, Inside a Computer System, Operating Systems: Introduction, Windows Basics, Data Representation, Data Encoding, What is Networking?, Intro to LAN, DNS in Detail, HTTP in Detail, The CIA Triad y Cryptography Concepts.",
      "Ya hiciste varias en la Fase 1 (What is Networking?, DNS in Detail, HTTP in Detail y las primeras de la ruta). Tacha en tu lista las que tengan la marca verde.",
      "**Primera mitad:** haz en orden las gratis que falten del principio de la ruta (normalmente Careers in Cyber, Inside a Computer System, Operating Systems: Introduction y Windows Basics). Recuerda: lee la tarea entera antes de responder.",
      "**Segunda mitad:** Data Representation, Data Encoding, Intro to LAN, The CIA Triad y Cryptography Concepts. En Data Encoding verás Base64 y ASCII: ya los usaste con CyberChef en los retos de picoCTF.",
      "Si una sala tiene botón **Start Machine** (o **Start Lab Machine**), espera 1-2 minutos a que cargue la vista en el navegador antes de seguir leyendo.",
      "Al terminar cada sala, cierra la pestaña, escribe sin mirar 3 ideas que recuerdes y solo después compáralas con la sala."
    ], learn: "La ruta Pre Security nueva mezcla salas gratis y Premium: haz las 14 gratis y salta las que piden suscripción." }
  ],
  p2u03: [
    { t: "Videos de Professor Messer para subredes (Network+ N10-009)", s: [
      "Abre professormesser.com. En el menú, entra en **N10-009 Network+** → **Free Network+ Videos**. Se abre la lista completa del curso, ordenada por secciones (1.1, 1.2…).",
      "Pulsa **Ctrl + F** y escribe `1.7`. Es la sección **IPv4 Addressing**. Tiene estos videos, en este orden: **Binary Math**, **IPv4 Addressing**, **Classful Subnetting**, **IPv4 Subnet Masks**, **Calculating IPv4 Subnets and Hosts**, **Magic Number Subnetting** y **Seven Second Subnetting**.",
      "Hoy mira tres: **Binary Math** (9 min, cómo pasar de decimal a binario), **IPv4 Subnet Masks** (9 min, máscaras y notación CIDR) y **Calculating IPv4 Subnets and Hosts** (10 min, cuántos equipos caben).",
      "En **Calculating IPv4 Subnets and Hosts** pausa en cada ejemplo (por ejemplo 192.168.11.0/26) y calcúlalo tú antes de que él lo resuelva.",
      "Si te sobra energía, mira **Magic Number Subnetting**: es el método rápido que usa la guía siguiente.",
      "Debajo de cada video hay el texto de lo que dice. Si el inglés del audio se hace pesado, léelo con el traductor de Brave."
    ], learn: "Hosts por red = 2 elevado a los bits de host, menos 2 (red y difusión)." },
    { t: "Método paso a paso: calcular una subred a mano (con ejemplo resuelto)", s: [
      "**Paso 1 · bits de host:** resta el número del CIDR a 32. Para `/26`: 32 − 26 = **6 bits de host**.",
      "**Paso 2 · tamaño:** direcciones = 2 elevado a los bits de host. 2⁶ = **64 direcciones**. Equipos utilizables = 64 − 2 = **62** (se quitan la dirección de red y la de difusión o broadcast).",
      "**Paso 3 · máscara:** escribe tantos 1 como el CIDR y el resto 0, en 4 grupos de 8. Cada grupo lleno de 1 vale **255**. Para el grupo a medias usa esta tabla según cuántos 1 tenga: 1=128, 2=192, 3=224, 4=240, 5=248, 6=252, 7=254. `/26` = 8+8+8+2 → **255.255.255.192**.",
      "**Paso 4 · número mágico:** 256 − el valor del grupo a medias. 256 − 192 = **64**. Las redes empiezan en múltiplos de 64 dentro de ese grupo: .0, .64, .128, .192.",
      "**Paso 5 · ¿en qué red cae tu IP?** Ejemplo resuelto: `192.168.10.77/26`. El 77 está entre 64 y 128, así que la **red** es `192.168.10.64`, la **difusión** es la siguiente red menos 1: `192.168.10.127`, y los equipos van de `.65` a `.126` (62 equipos).",
      "**Comprueba:** la red siempre es múltiplo del número mágico, la difusión siempre es impar y (difusión − red + 1) debe dar el tamaño del paso 2. Aquí 127 − 64 + 1 = 64. ✓",
      "**Ahora tú, en el cuaderno:** `10.0.5.200/27`. Haz los pasos 1 a 5 y escribe: bits de host, direcciones, equipos, máscara, número mágico, red, difusión y rango. Revisa con las comprobaciones del paso anterior.",
      "Calcula también los equipos de `/24`, `/25`, `/26` y `/16` solo con los pasos 1 y 2. Pista: en `/16` el grupo a medias no existe; hay 16 bits de host."
    ], learn: "Bits de host = 32 − CIDR; tamaño = 2^bits; máscara con la tabla 128-192-224-240-248-252-254; red = múltiplo de (256 − máscara)." },
    { t: "Tu propia red en notación CIDR", s: [
      "Pulsa la tecla Windows, escribe `PowerShell` y ábrelo. Escribe `ipconfig` y pulsa Enter.",
      "Busca el bloque de tu wifi: **Adaptador de LAN inalámbrica Wi-Fi** (en inglés, «Wireless LAN adapter Wi-Fi»). Ignora los adaptadores que digan «Medios desconectados».",
      "Anota dos líneas: **Dirección IPv4** (por ejemplo `192.168.1.35`) y **Máscara de subred** (por ejemplo `255.255.255.0`).",
      "Convierte la máscara a CIDR contando los 1: cada 255 son 8, y para el grupo a medias usa la tabla de la guía anterior al revés. `255.255.255.0` = 8+8+8+0 = `/24`.",
      "Aplica el método: con `/24` el número mágico es 256 − 0 = 256 en el último grupo, así que tu red termina en `.0`. Escribe tu red completa, por ejemplo `192.168.1.0/24`, y cuántos equipos caben.",
      "Mira también **Puerta de enlace predeterminada**: es tu router. Debe estar dentro del rango que calculaste. Si no lo está, revisa tus cuentas."
    ], learn: "`ipconfig` te da IP y máscara; con ellas escribes tu red en CIDR, como `192.168.1.0/24`." }
  ],
  p2u04: [
    { t: "Videos de Professor Messer: DHCP, ARP y NAT", s: [
      "Entra en **N10-009 Network+** → **Free Network+ Videos** (como en la unidad anterior). En esta versión del curso los temas de hoy están en secciones distintas: búscalos con **Ctrl + F**.",
      "**DHCP** (sección 3.4, 9 min): escribe `DHCP` en Ctrl + F y abre el video llamado solo **DHCP**. Anota los 4 pasos **DORA**: Discover (el equipo pregunta a toda la red desde 0.0.0.0), Offer (el servidor ofrece una IP), Request (el equipo la pide) y Acknowledge (el servidor confirma).",
      "**ARP**: en N10-009 no hay un video solo de ARP. Abre **ARP and DNS Poisoning** (sección 4.2) y mira **solo la primera parte**, donde explica el ARP normal: el equipo pregunta a todos «¿quién tiene esta IP?», el dueño responde con su MAC y la respuesta se guarda en la **caché ARP**.",
      "La segunda parte de ese video explica cómo un atacante falsifica esas respuestas (envenenamiento ARP). Solo míralo como idea: ARP no comprueba quién responde. No lo pruebes en ninguna red.",
      "**NAT** (sección 2.1, 7 min): escribe `Network Address Translation` y abre ese video. Anota cómo el router cambia tu IP privada por su IP pública al salir a internet y lo recuerda para devolverte la respuesta.",
      "Al terminar los tres, escribe sin mirar una frase por tema y luego compárala con tus notas."
    ], learn: "DHCP reparte IP (DORA), ARP traduce IP → MAC en tu red local y NAT cambia tu IP privada por la pública del router." },
    { t: "Compruébalo en tu laptop: DHCP, ARP y NAT en vivo", s: [
      "Abre **PowerShell** y escribe `ipconfig /all`. En el bloque **Adaptador de LAN inalámbrica Wi-Fi** busca: **DHCP habilitado** (debe decir «sí»), **Servidor DHCP** (quién te dio la IP, casi siempre tu router), **Concesión obtenida** y **La concesión expira** (cuánto tiempo te «presta» la IP).",
      "Escribe `arp -a`. Sale tu **caché ARP**: una tabla con **Dirección de Internet** (IP), **Dirección física** (MAC) y **Tipo**. Busca la IP de tu **Puerta de enlace predeterminada** (de `ipconfig`): al lado está la MAC de tu router. Anótala.",
      "Las filas de tipo **dinámico** las aprendió tu laptop con ARP; las **estáticas** (como las que terminan en `.255` o empiezan por `224.`) son direcciones especiales de difusión y multidifusión.",
      "Para ver NAT necesitas tu IP **pública**. Usa `nslookup`, que ya conoces: `nslookup myip.opendns.com resolver1.opendns.com`. El servidor de OpenDNS responde con la IP desde la que te ve llegar. Es la última **Address** que sale.",
      "Compara: tu IPv4 de `ipconfig` es privada (192.168…, 10… o 172.16-31…) y la de `nslookup` es pública. Esa diferencia es NAT trabajando. Si tu proveedor usa NAT doble (pasa en algunas conexiones), la IP pública puede no coincidir con la que muestra tu router: es normal.",
      "Dibuja en el cuaderno el camino: conectas al wifi → DORA con el router → tienes IP → escribes una web → DNS → ARP para hallar la MAC del router → el router hace NAT → internet. Pon una flecha por paso."
    ], learn: "`ipconfig /all` muestra el servidor DHCP, `arp -a` la caché ARP y `nslookup myip.opendns.com resolver1.opendns.com` tu IP pública." }
  ],
  p2u05: [
    { t: "Sala · Linux Fundamentals Part 1 (versión actual, 5 tareas)", s: [
      "Abre la sala y pulsa **Join Room**. En la tarea 1 pulsa **Start Lab Machine**: tras 1-2 minutos se abre a la derecha una terminal de Ubuntu dentro del navegador (vista dividida). Arriba aparece la IP y un temporizador.",
      "**Task 2 · Talking to Linux:** prueba `whoami` (muestra tu usuario) y `echo hola` (repite el texto). Responde las preguntas.",
      "**Task 3 · Finding Your Way Around:** usa `ls` para contar las carpetas, `cd nombre` para entrar, `cat archivo` para leer y `pwd` para ver dónde estás. Ya los conoces de picoCTF y Bandit: aquí los repasas.",
      "**Task 4 · Let the Machine Do the Searching:** `find` busca archivos por nombre y `grep` busca texto dentro de un archivo. Para la pregunta del `access.log`, la sintaxis es `grep TEXTO archivo` con el texto que pide la tarea.",
      "**Task 5 · Shell Operators:** lee los cuatro: `&` (deja un comando corriendo en segundo plano), `&&` (ejecuta el segundo solo si el primero salió bien), `>` (guarda la salida en un archivo, **reemplazando**) y `>>` (guarda **añadiendo al final**).",
      "Practica `>` y `>>` en la terminal de la sala: `echo uno > prueba.txt`, luego `echo dos >> prueba.txt` y `cat prueba.txt` (deben salir las dos líneas). Ahora `echo tres > prueba.txt` y `cat prueba.txt`: solo queda «tres». Esa es la diferencia.",
      "Practica las rutas: `cd /home` (absoluta: empieza en `/`, funciona desde cualquier sitio), luego `cd ..` y `pwd`. Después entra en una carpeta escribiendo solo su nombre (relativa: depende de dónde estés).",
      "Al terminar, pulsa el botón para terminar la máquina (**Terminate**) para no gastar tu tiempo de laboratorio."
    ], learn: "`>` reemplaza, `>>` añade, `&&` encadena si sale bien; las rutas absolutas empiezan en `/`." }
  ],
  p2u06: [
    { t: "Ruta gratis: permisos en la terminal de CyLab (las salas Part 2 y 3 ahora son de pago)", s: [
      "Las salas Linux Fundamentals Part 2 y Part 3 pasaron a ser **Premium**. Si al abrirlas ves «only available for Premium or Max subscribers», sigue esta guía: aprenderás lo mismo gratis y con práctica real.",
      "Lee las dos lecciones de Linux Journey: `linuxjourney.com/lesson/file-permissions` (cómo leer `-rwxr-xr--`) y `linuxjourney.com/lesson/modifying-permissions` (chmod con letras y con números). Son cortas; usa el traductor de Brave si quieres.",
      "Abre la terminal de CyLab (**>_**). Crea un archivo: `echo secreto > nota.txt`. Mira sus permisos con `ls -l nota.txt`. Verás algo como `-rw-r--r--`: el primer `-` dice que es un archivo (una `d` sería carpeta) y después van dueño, grupo y otros.",
      "Quítale todo a grupo y otros: `chmod 600 nota.txt` y repite `ls -l nota.txt`. Ahora debe decir `-rw-------`: solo tú lees y escribes. Así se protege una llave privada.",
      "Prueba quitarte a ti la lectura: `chmod 200 nota.txt` y `cat nota.txt`. Debe salir «Permission denied». Devuélvele el permiso con `chmod 644 nota.txt` y vuelve a leerlo.",
      "Ahora un programa: `echo 'echo hola desde mi script' > saludo.sh`, luego `./saludo.sh`. Sale «Permission denied» porque falta la x. Dásela solo al dueño con letras: `chmod u+x saludo.sh` (u = dueño, + = añadir, x = ejecutar) y ejecútalo otra vez.",
      "Cálculo en números (r = 4, w = 2, x = 1, se suman por grupo): traduce en el cuaderno `rw-r--r--`, `rwx------` y `rwxr-xr-x`. Comprueba cada uno aplicándolo con `chmod` a `nota.txt` y mirando `ls -l`.",
      "`chown` (cambiar el dueño) necesita ser administrador, así que en CyLab no podrás usarlo: solo apréndete qué hace. Lo practicarás más adelante."
    ], learn: "`ls -l` muestra permisos; `chmod 600` deja un archivo solo para ti; `chmod u+x` lo hace ejecutable para el dueño." },
    { t: "Si tienes TryHackMe Premium: qué mirar en Part 2 y Part 3", s: [
      "**Part 2** tiene 8 tareas: Introduction, Accessing Your Linux Machine Using SSH (Deploy), Introduction to Flags and Switches, Filesystem Interaction Continued, **Permissions 101**, Common Directories, Conclusions and Summaries y una que te manda a Part 3.",
      "En la tarea 2 pulsa **Start Machine** y usa la terminal que te ofrece la sala (AttackBox o vista en el navegador). La sala te da usuario y contraseña de su máquina: úsalos solo ahí.",
      "En **Permissions 101** fíjate en el comando `su` (cambiar de usuario) y en cómo el mismo archivo se puede o no leer según quién eres.",
      "En **Common Directories** anota para qué sirve cada carpeta: `/etc` (configuración), `/var` (datos y registros), `/root` (carpeta del administrador) y `/tmp` (temporales, se borra al reiniciar).",
      "**Part 3** tiene 9 tareas: editores de texto en la terminal, utilidades, procesos, automatización, gestión de paquetes y registros (logs). Haz las tareas en orden y con la máquina encendida.",
      "Al terminar, vuelve a la guía anterior y haz igualmente el paso de calcular permisos en números: es lo que más vas a usar."
    ], learn: "Part 2 enseña permisos y carpetas del sistema; Part 3, editores, procesos y logs." }
  ],
  p2u07: [
    { t: "Bandit · Level 13 → Level 14: entrar con una llave privada desde Windows", s: [
      "En la web de Bandit abre la página **Level 13 → Level 14** (en el menú de la izquierda; su dirección termina en `bandit14.html`). Esta vez no recibes una contraseña sino una **llave privada SSH** para entrar como bandit14.",
      "Conéctate como `bandit13` con la contraseña que conseguiste en el nivel anterior. Escribe `ls`: verás la llave (`sshkey.private`) y un archivo de pista. Mira la primera línea de la llave con `head -1 sshkey.private` (`head` muestra el principio de un archivo y `-1`, solo una línea): debe decir «-----BEGIN … PRIVATE KEY-----».",
      "El servidor **no deja** usar la llave desde dentro (conectarse a `localhost` está bloqueado para ahorrar recursos). Por eso la vas a copiar a tu laptop. Sal con `exit`.",
      "En PowerShell crea una carpeta para tus llaves y entra: `mkdir bandit-llaves` y luego `cd bandit-llaves`.",
      "Copia la llave con **scp** (secure copy: copia archivos por SSH): `scp -P 2220 bandit13@bandit.labs.overthewire.org:sshkey.private bandit14.key`. Ojo: en scp el puerto va con **P mayúscula**. Antes de los dos puntos va el servidor y después el archivo de origen; al final, el nombre con el que se guarda. Te pedirá la contraseña de bandit13. Comprueba con `ls` que existe `bandit14.key`.",
      "Conéctate con la llave: `ssh -i bandit14.key bandit14@bandit.labs.overthewire.org -p 2220`. La opción `-i` (identity) le dice a ssh qué llave usar. Si todo va bien, entras **sin que te pida contraseña**.",
      "Si sale «WARNING: UNPROTECTED PRIVATE KEY FILE!» o «Permissions … are too open», el archivo tiene permisos demasiado abiertos. PowerShell no tiene `chmod`; su equivalente es `icacls`. Escribe `icacls bandit14.key /inheritance:r` (quita los permisos heredados de la carpeta) y después `icacls bandit14.key /grant:r \"$($env:USERNAME):(R)\"` (deja solo lectura para tu usuario). Comprueba con `icacls bandit14.key`: debe salir solo tu usuario con `(R)`. Es el «chmod 600» de Windows. Repite el `ssh -i`.",
      "Si sale «invalid format», la llave se copió mal: repite el `scp`.",
      "Ya dentro como bandit14, el objetivo del nivel dice dónde está su contraseña y que solo bandit14 puede leerla. Léela con `cat` y guárdala en el cuaderno: la necesitas para el nivel 14."
    ], learn: "`scp -P puerto usuario@servidor:archivo destino` copia por SSH; `ssh -i llave` entra con llave; en Windows `icacls` hace el papel de `chmod 600`." }
  ],
  p2u08: [
    { t: "Primeros pasos en IDLE: el ejemplo resuelto línea por línea", s: [
      "Abre **IDLE** (tecla Windows → escribe `IDLE`). La ventana que se abre es la **Shell**: escribe `2 + 3` y Enter. Responde `5`. Escribe `print(\"Hola\")` y Enter. Responde `Hola`. Aquí puedes probar una línea antes de usarla en un programa.",
      "Prueba el problema típico: escribe `\"2\" + \"3\"` y Enter. Responde `'23'`: con comillas son **texto** y `+` los pega. Ahora `int(\"2\") + int(\"3\")`: responde `5`. `int()` convierte texto en número entero.",
      "Abre un archivo nuevo: **File → New File**. Escribe a mano (no pegues) el ejemplo resuelto de la unidad, las 4 líneas. Guárdalo con **Ctrl + S** en tu carpeta `Cuaderno-hacker` como `edad.py`.",
      "Qué hace cada línea: **1** `input(\"¿Cómo te llamas? \")` muestra la pregunta, espera lo que escribas y lo guarda en la variable `nombre`. **2** lo mismo con el año, pero envuelto en `int()` para que sea número. **3** resta y guarda el resultado en `edad`. **4** `print` muestra varias cosas separadas por comas (pone un espacio entre ellas).",
      "Ejecuta con **F5**. Escribe `Ana` y Enter, luego `2008` y Enter. Debe salir: `Hola, Ana - en 2026 cumples 18`.",
      "Provoca un error a propósito: quita `int(` y su `)` de la línea 2, guarda y ejecuta. Sale en rojo un **TypeError**. Lee la última línea: dice que no se puede restar texto. Vuelve a ponerlo.",
      "Explica en voz alta las 4 líneas sin mirar. Si te trabas en una, vuelve a ella."
    ], learn: "`input()` lee texto, `int()` lo convierte en número, `print()` muestra y las variables guardan valores." },
    { t: "Tu programa suma.py (lo escribes tú)", s: [
      "**File → New File**. La primera línea te la doy explicada: `a = int(input(\"Primer número: \"))`. Se lee de dentro hacia fuera: muestra la pregunta, lee el texto, lo convierte en número y lo guarda en `a`.",
      "Escribe tú la segunda línea, igual pero para `b` y con la pregunta «Segundo número: ».",
      "Escribe tú la tercera: guarda en una variable `suma` el resultado de sumar `a` y `b`.",
      "Escribe tú la cuarta: un `print` que muestre el texto `La suma es:` y la variable `suma`, separados por una coma.",
      "Guárdalo como `suma.py` en `Cuaderno-hacker` y pulsa **F5**. Con 5 y 7, la salida debe ser exactamente: `La suma es: 12`. Si sale `57`, te falta un `int()`.",
      "Ejecútalo también desde PowerShell: abre la carpeta `Cuaderno-hacker` en el Explorador de archivos, haz clic en la **barra de direcciones**, escribe `powershell` y pulsa Enter. Se abre PowerShell ya en esa carpeta. Escribe `python suma.py`.",
      "Reto extra: añade una línea que muestre también la resta y otra la multiplicación (`*`). Predice la salida antes de ejecutar.",
      "Después lee en py4e los capítulos 1 (**Why Program?**) y 2 (**Variables, expressions and statements**). Si prefieres español, el mismo curso está en `es.py4e.com` (**Libro** → «Python para todos»)."
    ], learn: "Un programa es una lista de pasos: leer (`input`), convertir (`int`), calcular y mostrar (`print`)." }
  ],
  p2u09: [
    { t: "Bandit · Level 14 → Level 15: enviar texto a un puerto con nc", s: [
      "Abre la página **Level 14 → Level 15** (dirección terminada en `bandit15.html`). Objetivo: enviar la contraseña del nivel actual al **puerto 30000** de **localhost** (el propio servidor de Bandit) para recibir la siguiente.",
      "Conéctate como `bandit14` con la contraseña que leíste en la unidad anterior.",
      "Lee lo básico del manual: `man nc`. Busca con `/` la palabra `EXAMPLES`. Sal con `q`. La forma de uso es `nc servidor puerto`: ya la usaste en el reto Nice netcat.",
      "Conéctate al servicio: `nc localhost 30000`. No pasa nada visible: el cursor se queda esperando. Es normal: `nc` está conectado y espera que escribas.",
      "Pega la contraseña de bandit14 (clic derecho) y pulsa **Enter**. El servicio responde «Correct!» y la contraseña de bandit15. Si responde «Wrong!», revisa que no pegaste espacios de más.",
      "Si se queda abierto, corta con **Ctrl + C**. Otra forma en una sola línea, con la tubería `|` que ya usaste: `cat /etc/bandit_pass/bandit14 | nc localhost 30000` (manda el contenido del archivo directamente al puerto).",
      "Guarda la nueva contraseña en el cuaderno."
    ], learn: "`nc servidor puerto` abre una conexión sin cifrar: lo que escribes llega tal cual al servicio." },
    { t: "Bandit · Level 15 → Level 16: lo mismo, pero con cifrado TLS", s: [
      "Abre **Level 15 → Level 16** (`bandit16.html`). Ahora el servicio está en el **puerto 30001** y usa **SSL/TLS**: si le hablas con `nc`, no entiende nada porque espera una conversación cifrada.",
      "`openssl` es una caja de herramientas de cifrado. Su modo `s_client` hace de **cliente TLS**: cifra lo que escribes y descifra lo que llega. Mira la ayuda con `man s_client` (si no la encuentra, `man openssl-s_client`) y busca con `/` las palabras `-connect` y `CONNECTED COMMANDS`.",
      "Conéctate como `bandit15` y escribe `openssl s_client -connect localhost:30001`. Fíjate: aquí servidor y puerto van juntos, separados por dos puntos.",
      "Sale mucho texto (certificado, «Certificate chain», «SSL handshake»…). Es el saludo TLS. Cuando termina, la conexión queda abierta esperando, igual que con nc.",
      "Pega la contraseña de bandit15 y pulsa **Enter**. Debe responder «Correct!» y la siguiente contraseña.",
      "Si en vez de eso aparece «DONE», «RENEGOTIATING» o «KEYUPDATE»: en modo interactivo, `s_client` interpreta algunas letras al principio de una línea como órdenes suyas (lo explica la sección **CONNECTED COMMANDS**). Añade la opción `-quiet` al comando (`openssl s_client -connect localhost:30001 -quiet`): quita el texto del certificado y desactiva esas órdenes.",
      "Anota en el cuaderno la diferencia: `nc` = texto sin cifrar; `openssl s_client` = la misma conversación pero dentro de TLS."
    ], learn: "`openssl s_client -connect servidor:puerto` habla con un servicio TLS; `-quiet` simplifica la salida." }
  ],
  p2u10: [
    { t: "Calentamiento: for, range e if paso a paso", s: [
      "En IDLE abre **File → New File** y escribe: `for i in range(1, 6):` y Enter. IDLE mete **4 espacios** solos en la línea siguiente: esa sangría (indentación) dice qué está dentro del bucle. Escribe `print(\"Vuelta\", i)`.",
      "Guarda como `bucle.py` y pulsa **F5**. Debe salir `Vuelta 1` hasta `Vuelta 5`. `range(1, 6)` empieza en 1 y para **antes** del 6.",
      "Nuevo archivo `nota.py`. Línea 1: `nota = int(input(\"Nota (0-100): \"))`. Línea 2: `if nota >= 90:` y dentro (con sangría) `print(\"Excelente\")`.",
      "Línea siguiente, sin sangría: `elif nota >= 70:` y dentro `print(\"Aprobado\")`. Después `else:` y dentro `print(\"Reprobado\")`. Fíjate en los **dos puntos** al final de `if`, `elif` y `else`: sin ellos sale «SyntaxError».",
      "Ejecuta tres veces: con 95 debe salir `Excelente`, con 75 `Aprobado` y con 50 `Reprobado`. Python revisa de arriba abajo y se queda con la primera condición que sea cierta.",
      "Ahora lee el ejemplo resuelto de la unidad (el de las 3 claves): `while intentos < 3` repite mientras queden intentos, `break` sale del bucle al acertar, `intentos += 1` suma 1, y el `else` del `while` solo se ejecuta si el bucle terminó **sin** `break`. Escríbelo, ejecútalo y prueba a fallar 3 veces: debe salir `Bloqueado`."
    ], learn: "La sangría marca qué va dentro; `range(1, 6)` da 1-5; `if/elif/else` se queda con la primera condición cierta." },
    { t: "Tu programa: el mayor de 5 números y cuántos son pares", s: [
      "Plan antes de escribir: necesitas una variable `mayor` que recuerde el número más grande visto hasta ahora. Pide el **primer** número fuera del bucle y guárdalo directamente en `mayor`.",
      "Luego un `for` que repita 4 veces (`range(4)`) para pedir los otros 4. Dentro: lee el número en una variable `n` con `int(input(...))`.",
      "Todavía dentro del bucle, escribe tú un `if` que compare `n` con `mayor` y, si `n` es más grande, guarde `n` en `mayor`.",
      "Fuera del bucle (sin sangría), muestra el resultado. Con las entradas 4, 9, 2, 7 y 5, la salida debe ser: `El mayor es: 9`. Prueba también con el mayor en primera posición (9, 4, 2, 7, 5) y en la última: debe salir 9 siempre.",
      "Ahora los pares: crea `pares = 0` al principio. Un número es par si el resto de dividirlo entre 2 es 0: `n % 2 == 0`. Cuando lo sea, suma 1 con `pares += 1`.",
      "Trampa típica: el primer número lo pediste fuera del bucle, así que también tienes que comprobar si es par. Con 4, 9, 2, 7, 5 debe salir `Pares: 2`.",
      "Guarda como `mayor.py` en `Cuaderno-hacker`. Después lee en py4e **Conditional Execution** (capítulo 3) y **Loops and Iterations** (capítulo 5) y haz el ejercicio 3.3 del libro (convertir una puntuación en una letra)."
    ], learn: "Para buscar un máximo se guarda «el mejor hasta ahora» y se compara en cada vuelta; `%` da el resto de una división." }
  ],
  p2u11: [
    { t: "Sala · Encryption - Crypto 101: qué hacer en cada tarea", s: [
      "Es una sala de dificultad **Medium** con 12 tareas, casi todas de lectura. No tiene máquina. Ve despacio: es mejor entender que correr.",
      "**Task 2 · Key terms:** copia en el cuaderno, con tus palabras, ciphertext (texto cifrado), plaintext (texto en claro), cipher (algoritmo de cifrado), key (llave) y la diferencia entre **encoding** (codificar, como Base64: no es secreto) y **encryption** (cifrar: sin la llave no se lee).",
      "**Task 4 · Crucial Crypto Maths:** pide restos de divisiones (operación módulo). Calcúlalos en la Shell de IDLE con `%`, como hiciste para saber si un número es par: escribe la operación y Enter. Python maneja números enormes sin problema.",
      "**Task 5 a 7:** simétrico (una llave, como AES) frente a asimétrico (pública y privada, como RSA). En la tarea 6 te dan dos números primos p y q: n es su producto, calcúlalo en IDLE con `*`.",
      "**Task 8 y 9:** firmas digitales, certificados (el candado de HTTPS) y llaves SSH. Relaciónalo con Bandit: la `sshkey.private` del nivel 13 era la mitad privada de un par como los que describe aquí.",
      "Las tareas 9 y 11 tienen una parte práctica que necesita herramientas que todavía no has aprendido. Responde las preguntas de teoría y, si alguna práctica te bloquea, anótala como pendiente y sigue: no hace falta para esta unidad.",
      "**Task 10 · Diffie-Hellman:** es cómo dos equipos acuerdan una llave secreta común sin enviarla nunca. Haz un dibujo con dos personas y las flechas de lo que se envían."
    ], learn: "Codificar no es cifrar; simétrico = una llave, asimétrico = pública + privada; HTTPS usa los dos." },
    { t: "Practica hashes con CyberChef y con PowerShell", s: [
      "Abre CyberChef. En **Operations** escribe `SHA2` y arrastra la operación al cuadro **Recipe**. En sus opciones pon **Size** en `256`.",
      "Escribe tu nombre en **Input**. En **Output** aparece una huella de **64 caracteres** hexadecimales (0-9 y a-f). Cópiala en el cuaderno.",
      "Cambia **una sola letra** del nombre. La huella cambia por completo, no solo un poco. A eso se le llama **efecto avalancha**: por eso un hash sirve para detectar cualquier cambio.",
      "Pon tu nombre original otra vez: sale exactamente la misma huella que antes. Mismo dato = mismo hash, siempre.",
      "Simula una **sal**: escribe `contraseña123` y anota el hash; luego `contraseña123` + `x9Qz` (un valor aleatorio) y anota el nuevo. Con sal distinta, la misma contraseña da hashes distintos, y las tablas de hashes precalculados ya no sirven.",
      "En tu laptop también puedes calcular hashes de archivos. Abre PowerShell en tu carpeta `Cuaderno-hacker` (barra de direcciones del Explorador → `powershell` → Enter) y escribe `Get-FileHash .\\suma.py`. Sale **Algorithm SHA256** y el **Hash**. Así se comprueba que un programa descargado no fue modificado: se compara con el hash que publica su web oficial.",
      "Explica en voz alta: un hash no se puede deshacer, por eso las contraseñas se guardan como hash con sal y no cifradas (algo cifrado se puede descifrar si alguien roba la llave)."
    ], learn: "SHA-256 da siempre 64 caracteres, cambia por completo con un solo cambio y no se puede revertir; `Get-FileHash` lo calcula en Windows." }
  ],
  p2u12: [
    { t: "Bandit · Level 16 → Level 17: tu primer escaneo de puertos (con nmap)", s: [
      "Abre **Level 16 → Level 17** (`bandit17.html`). Debes enviar la contraseña actual a un puerto entre **31000 y 32000** de **localhost**. Primero hay que saber qué puertos están abiertos y cuáles hablan TLS. Solo uno devuelve las credenciales; los demás repiten lo que les mandas.",
      "Herramienta nueva: **nmap**, el escáner de puertos más usado. Prueba qué puertos responden en un equipo. **Solo se usa con permiso**: aquí escaneas el propio servidor de Bandit porque el juego te lo pide. La estudiarás a fondo más adelante.",
      "Conéctate como `bandit16` y escribe `nmap -p 31000-32000 localhost`. La opción `-p` indica qué puertos probar; con un guion es un rango. Tarda unos segundos.",
      "Lee la tabla: **PORT** (número/protocolo), **STATE** (`open` = abierto) y **SERVICE** (lo que nmap supone que es). Anota solo los `open`. La línea «Not shown: … closed» resume los cerrados.",
      "Para saber cuáles usan TLS, pide a nmap que hable con ellos: `nmap -sV -p PUERTO1,PUERTO2,PUERTO3 localhost` (pon tus puertos separados por comas, sin espacios). `-sV` detecta el servicio real. Puede tardar 1-2 minutos. Los que dicen `ssl/…` hablan TLS.",
      "Prueba los que usan TLS uno por uno con lo de la unidad anterior: `openssl s_client -connect localhost:PUERTO -quiet` y pega la contraseña de bandit16. Si te devuelve tu propio texto, es un servicio «eco»: sal con **Ctrl + C** y prueba el siguiente.",
      "El correcto no devuelve una contraseña sino una **llave privada** (desde «-----BEGIN RSA PRIVATE KEY-----» hasta «-----END RSA PRIVATE KEY-----»). Selecciónala entera con el ratón, incluidas esas dos líneas, y pulsa **Ctrl + C**.",
      "En Windows abre el **Bloc de notas**, pega y pulsa **Enter** después de la línea END (ssh exige un salto de línea final). **Archivo → Guardar como**: carpeta `bandit-llaves`, **Tipo:** «Todos los archivos (*.*)», nombre `bandit17.key`. Aplica los dos `icacls` de la unidad del nivel 13 y entra con `ssh -i bandit17.key bandit17@bandit.labs.overthewire.org -p 2220`.",
      "Dentro como bandit17, lee su contraseña en `/etc/bandit_pass/` con `cat` y guárdala: la necesitas para el nivel 17."
    ], learn: "`nmap -p rango host` encuentra puertos abiertos y `-sV` identifica el servicio; escanear solo con permiso." },
    { t: "Bandit · Level 17 → Level 18: qué cambió entre dos archivos (diff)", s: [
      "Abre **Level 17 → Level 18** (`bandit18.html`). En tu carpeta hay `passwords.old` y `passwords.new`; la contraseña es la **única línea que cambió** en el archivo nuevo.",
      "Conéctate como `bandit17` (con la llave o con la contraseña que guardaste) y comprueba con `ls` que están los dos archivos. Son demasiado largos para compararlos a ojo.",
      "Usa `diff`, que compara dos archivos línea a línea y muestra solo las diferencias: `diff passwords.old passwords.new`.",
      "Lee la salida: una línea tipo `42c42` (la línea 42 cambió, «c» = change), luego la línea con `<` (viene del **primer** archivo que escribiste), `---` y la línea con `>` (viene del **segundo**).",
      "Como pusiste `passwords.new` en segundo lugar, la contraseña nueva es la línea que empieza por `>`. Cópiala sin el símbolo `>` ni el espacio.",
      "Aviso del propio juego: al entrar como bandit18 verás «Byebye!» y te echará. No es un error tuyo: es el reto del nivel siguiente.",
      "Crea tarjetas: `nmap -p`, `nmap -sV` y `diff archivo1 archivo2` (`<` = primero, `>` = segundo)."
    ], learn: "`diff viejo nuevo` muestra solo lo que cambió: `<` es del primer archivo y `>` del segundo." }
  ],
  p2u13: [
    { t: "Sala · Windows Fundamentals 1", s: [
      "Abre la sala con el buscador de TryHackMe (`Windows Fundamentals 1`; dirección `tryhackme.com/room/windowsfundamentals1xbx`) y pulsa **Join Room**. Tiene 10 tareas y dura unos 30 minutos.",
      "Pulsa **Start Lab Machine** y espera hasta 3 minutos: el escritorio de Windows de la sala se abre en el navegador. No necesitas VPN ni Escritorio remoto.",
      "Dentro de la máquina, la tecla Windows de tu teclado puede abrir el menú de **tu** laptop. Usa el ratón: clic derecho en el botón Inicio de la máquina → **Run** (Ejecutar) para escribir comandos como `lusrmgr.msc`.",
      "**Task 4-5:** explora `C:\\Windows\\System32` mirando, sin borrar nada. **Task 6:** abre **Local Users and Groups** con `lusrmgr.msc` y mira los usuarios y a qué grupos pertenecen.",
      "**Task 7 · UAC:** la sala entra por Escritorio remoto con un usuario normal para ver el aviso de UAC. Si no puedes hacerlo, léelo con atención: la pregunta es sobre qué significa UAC.",
      "**Task 8-9:** compara **Settings** con **Control Panel** (pon la vista en **Small icons**) y abre el **Task Manager** desde la barra de tareas, pulsando **More details**.",
      "Al terminar, pulsa **Terminate** en la máquina."
    ], learn: "Usuarios y grupos se ven en `lusrmgr.msc`; UAC pide permiso antes de cambios de administrador." },
    { t: "Sala · Windows Fundamentals 2: las herramientas de administración", s: [
      "Une la sala, pulsa **Start Lab Machine** y espera. Cada tarea abre una herramienta escribiendo su nombre en **Run**. Anótalas: te servirán toda la carrera.",
      "**Task 2:** `msconfig` (System Configuration). Mira las pestañas **Services** y **Tools**. **Task 3:** desde **Tools**, abre los ajustes de UAC.",
      "**Task 4:** `compmgmt.msc` (Computer Management). Contiene **Task Scheduler** (tareas programadas), **Event Viewer** (Visor de eventos), **Shared Folders**, **Device Manager** y **Services**. Para la pregunta de la carpeta compartida oculta: las que terminan en `$` están ocultas.",
      "**Task 5:** `msinfo32` (información del sistema). **Task 6:** `resmon` (Monitor de recursos). **Task 7:** `cmd` y prueba `hostname`, `whoami`, `ipconfig` y `netstat`.",
      "**Task 8:** `regedit` (Editor del Registro): la base de datos de configuración de Windows. Solo mira, no cambies nada.",
      "Termina la máquina al acabar."
    ], learn: "`msconfig`, `compmgmt.msc`, `msinfo32`, `resmon` y `regedit` son las herramientas básicas de un administrador de Windows." },
    { t: "En tu laptop: tus grupos y tu último inicio de sesión", s: [
      "Abre **PowerShell** y escribe `whoami /groups`. Sale una tabla con **Nombre de grupo**, **Tipo**, **SID** y **Atributos**.",
      "Busca `BUILTIN\\Administradores` (o «Administrators»). Si aparece con el atributo **Grupo usado solo para denegar**, eres administrador pero la ventana no tiene permisos elevados: eso es **UAC** protegiéndote.",
      "Escribe `Get-Service` para ver los servicios: **Status** (Running = en marcha, Stopped = parado), **Name** y **DisplayName**. Prueba `Get-Service WinDefend` para ver el de Microsoft Defender.",
      "Abre el Visor de eventos: tecla Windows → escribe `Visor de eventos` → clic derecho → **Ejecutar como administrador** (el registro de Seguridad lo pide). Acepta el aviso de UAC.",
      "En la columna izquierda: **Registros de Windows** → **Seguridad**. En la derecha pulsa **Filtrar registro actual…**, escribe `4624` en la casilla de **Id. de evento** (`<Todos los Id. de evento>`) y pulsa **Aceptar**. El 4624 es «inicio de sesión correcto».",
      "Abre el evento más reciente (el de arriba) y busca la fecha y tu nombre de cuenta. Ese es el registro que mira un defensor cuando sospecha de un acceso."
    ], learn: "`whoami /groups` muestra tus grupos; el evento 4624 del registro de Seguridad es un inicio de sesión correcto." }
  ],
  p2u14: [
    { t: "Listas, diccionarios y funciones: prueba cada pieza en la Shell", s: [
      "En la Shell de IDLE escribe `puertos = [22, 80, 443]` y luego `puertos[0]`: responde `22`. Las listas cuentan desde 0. Prueba `len(puertos)` (cuántos hay): responde `3`.",
      "Añade uno: `puertos.append(8080)` y luego `puertos`: debe salir `[22, 80, 443, 8080]`. `puertos[-1]` da el último: `8080`.",
      "Diccionario: `servicios = {22: \"ssh\", 80: \"http\"}` y luego `servicios[22]`: responde `'ssh'`. Ahora `servicios[25]`: sale un error rojo **KeyError: 25** porque esa clave no existe.",
      "Ahora `servicios.get(25, \"desconocido\")`: responde `'desconocido'` sin error. `.get` busca la clave y, si no está, devuelve el valor por defecto que le das.",
      "Función: escribe `def doble(n):`, Enter, y en la línea con sangría `return n * 2`. Pulsa Enter dos veces para cerrarla. Luego `doble(21)`: responde `42`. `def` define, el paréntesis recibe datos y `return` devuelve el resultado.",
      "Escribe el ejemplo resuelto de la unidad en un archivo `servicios.py` y ejecútalo con **F5**. Debe salir: `22 -> ssh`, `443 -> https` y `8080 -> desconocido`. Explica en voz alta por qué 8080 no da error."
    ], learn: "`lista[0]` es el primero, `len()` cuenta, `dict.get(clave, defecto)` evita el KeyError y `return` devuelve el resultado." },
    { t: "Tu función: contar puertos bajos (los escribes tú)", s: [
      "Nuevo archivo `bajos.py`. La primera línea te la doy: `def contar_bajos(lista):`.",
      "Dentro de la función (con sangría) crea un contador a 0, recorre `lista` con un `for` y, si el puerto es menor de 1024, suma 1 al contador. Es el mismo patrón que contaste los pares.",
      "Al final de la función (con la sangría de la función, no la del `for`), devuelve el contador con `return`.",
      "Fuera de la función prueba: `print(contar_bajos([22, 80, 443, 8080, 3389]))`. Debe salir `3`. Prueba también con una lista vacía `[]`: debe salir `0`.",
      "Si sale `1` en vez de `3`, tu `return` está dentro del `for` (con demasiada sangría): la función se cierra en la primera vuelta.",
      "Abre `servicios.py` y añade 3 puertos al diccionario con lo que aprendiste en la Fase 1 (por ejemplo los de FTP, SMTP o escritorio remoto) y añádelos a la lista del `for` para probarlos.",
      "Lee en py4e **Functions** (capítulo 4), **Lists** (8) y **Dictionaries** (9)."
    ], learn: "Una función recibe datos, hace un trabajo y devuelve el resultado con `return` fuera del bucle." }
  ],
  p2u15: [
    { t: "Bandit · Level 18 → Level 19: ejecutar un comando sin abrir sesión", s: [
      "Abre **Level 18 → Level 19** (`bandit19.html`). La contraseña está en el archivo `readme`, pero alguien cambió el archivo `.bashrc` (lo que se ejecuta al abrir una sesión) para echarte nada más entrar.",
      "Compruébalo: conéctate como `bandit18`. Verás «Byebye!» y la conexión se cierra. Así que no puedes abrir una sesión normal.",
      "Pero ssh puede ejecutar **un solo comando** en el servidor y traerte su salida, sin abrir la sesión interactiva (y entonces `.bashrc` no te echa). El comando va al final: `ssh bandit18@bandit.labs.overthewire.org -p 2220 ls`.",
      "Te pide la contraseña de bandit18. Debe salir la lista de archivos (verás `readme`) y la conexión se cierra sola.",
      "Ahora cambia `ls` por el comando que lee un archivo, con el nombre del archivo. Saldrá la contraseña de bandit19. Guárdala."
    ], learn: "`ssh usuario@servidor -p puerto comando` ejecuta solo ese comando en el servidor y te devuelve la salida." },
    { t: "Bandit · Level 19 → Level 20: un programa setuid", s: [
      "Abre **Level 19 → Level 20** (`bandit20.html`). Te dicen que uses el **binario setuid** de tu carpeta y que lo ejecutes sin argumentos para ver cómo se usa.",
      "Conéctate como `bandit19` y escribe `ls -l`. Fíjate en los permisos del programa: donde iría la `x` del dueño hay una **s** (`-rwsr-x---`). Esa `s` es el permiso **setuid**. Mira también la columna del **dueño**: no eres tú.",
      "setuid significa: quien ejecuta el programa lo hace **con los permisos de su dueño**. Por eso es peligroso si el programa permite hacer cualquier cosa.",
      "Ejecútalo sin argumentos: `./` + el nombre del programa (usa **Tab**). Te muestra cómo usarlo y un ejemplo con el comando `id`.",
      "Prueba el ejemplo: el programa seguido de `id`. Mira el campo **euid** (usuario efectivo): ya no es bandit19. Ese es el efecto del setuid.",
      "El objetivo dice que la contraseña está en el sitio de siempre, `/etc/bandit_pass/`. Usa el programa seguido de `cat` y la ruta del archivo de bandit20. Guárdala.",
      "En el cuaderno: por qué un programa setuid que ejecuta cualquier comando le da a cualquiera los permisos de su dueño."
    ], learn: "Una `s` en lugar de la `x` del dueño es setuid: el programa corre con los permisos de su dueño." },
    { t: "Bandit · Level 20 → Level 21: dos terminales a la vez", s: [
      "Abre **Level 20 → Level 21** (`bandit21.html`). Hay un programa setuid que **se conecta** al puerto que le digas en localhost, lee una línea y, si es la contraseña de bandit20, responde con la de bandit21. Necesitas tú un servicio escuchando en ese puerto.",
      "Abre **dos** ventanas de PowerShell: clic derecho en el icono de PowerShell de la barra de tareas → **Windows PowerShell** (o, en Terminal, **Ctrl + Shift + T** abre otra pestaña). Ponlas lado a lado con **tecla Windows + ←** y **tecla Windows + →**. Conéctate como `bandit20` en las dos.",
      "**Ventana 1 (servidor):** `nc` también puede **escuchar** en vez de conectarse, con la opción `-l` (listen): `nc -l 45678`. Elige un número entre 20000 y 60000 poco común (otros jugadores comparten el servidor). Se queda esperando.",
      "**Ventana 2 (cliente):** mira con `ls` cómo se llama el programa y ejecútalo con tu puerto: `./suconnect 45678` (con tu número).",
      "Vuelve a la **ventana 1**: ya hay conexión. Pega la contraseña de bandit20 y pulsa **Enter**.",
      "En la ventana 2 el programa dice si la contraseña coincide; en la ventana 1 llega la contraseña de bandit21. Guárdala y cierra con **Ctrl + C**.",
      "Si sale «Address already in use», ese puerto lo usa otro jugador: elige otro número y repite."
    ], learn: "`nc -l puerto` escucha conexiones; con dos terminales haces de servidor y de cliente a la vez." }
  ],
  p2u16: [
    { t: "Prepara auth.log y ejecuta el ejemplo resuelto", s: [
      "Abre el **Bloc de notas** y escribe al menos 10 líneas como estas, una por línea, usando 3 IP distintas (por ejemplo `203.0.113.5`, `198.51.100.7` y `192.168.1.20`): `Failed password for admin from 203.0.113.5` y `Accepted password for pablo from 192.168.1.20`. Haz que `203.0.113.5` falle 4 veces.",
      "**Archivo → Guardar como**: carpeta `Cuaderno-hacker`, **Tipo:** «Todos los archivos (*.*)», nombre `auth.log`, codificación **UTF-8**. Si no eliges «Todos los archivos», se guarda como `auth.log.txt` y Python no lo encuentra.",
      "En IDLE escribe el ejemplo resuelto de la unidad y guárdalo como `logs.py` **en la misma carpeta** que `auth.log`.",
      "Qué hace: `with open(\"auth.log\") as f:` abre el archivo (y lo cierra solo al terminar); `for linea in f:` recorre el archivo línea a línea; `\"Failed password\" in linea` es cierto si ese texto aparece dentro de la línea.",
      "Pulsa **F5**. Debe salir `Intentos fallidos:` seguido del número de líneas «Failed» que escribiste. Cuéntalas a mano para comprobarlo.",
      "Si sale **FileNotFoundError**, el script y `auth.log` no están en la misma carpeta, o el archivo se llama `auth.log.txt`."
    ], learn: "`with open(...) as f` + `for linea in f` lee un archivo línea a línea; `texto in linea` busca dentro." },
    { t: "Complétalo: fallos por IP y alerta de fuerza bruta", s: [
      "Prueba en la Shell cómo sacar la IP: `\"Failed password for admin from 203.0.113.5\".split()` devuelve una lista de palabras; `[-1]` toma la última: `'203.0.113.5'`.",
      "En `logs.py`, antes del `with`, crea un diccionario vacío: `conteo = {}`.",
      "Dentro del `if`, debajo del `fallidos += 1`, añade dos líneas: guardar en `ip` la última palabra de `linea`, y sumar 1 a la cuenta de esa IP con `conteo[ip] = conteo.get(ip, 0) + 1` (si la IP aún no está, empieza en 0).",
      "Al final, fuera del `with`, recorre el diccionario con `for ip in conteo:` y muestra cada IP con su número. Con el archivo del paso anterior debería salir algo como `203.0.113.5 4` y `198.51.100.7` con los suyos.",
      "Ahora la alerta, la escribes tú: dentro de ese último `for`, un `if` que, cuando una IP tenga **3 o más** fallos, muestre `ALERTA: posible fuerza bruta desde` y la IP.",
      "Comprueba: solo `203.0.113.5` (con 4 fallos) debe tener alerta. Añade 3 fallos más a otra IP en `auth.log`, guarda y vuelve a ejecutar: debe aparecer una segunda alerta.",
      "Si te atascas leyendo archivos, repasa en py4e la lección **Files** (capítulo 7)."
    ], learn: "Un diccionario con `get(ip, 0) + 1` cuenta apariciones; con un umbral conviertes un log en una alerta." }
  ],
  p2u17: [
    { t: "Sala · Web Application Basics (gratis, 11 tareas)", s: [
      "Abre la sala y pulsa **Join Room**. Es larga (unas 2 horas): divídela en dos bloques. Las tareas 3 a 8 repasan URL y HTTP, que ya viste en HTTP in Detail: aprovecha para recordar sin mirar antes de leer.",
      "**Task 2 · Web Application Overview:** anota las piezas: **front-end** (HTML = qué se muestra, CSS = cómo se ve, JavaScript = comportamiento) y **back-end** (servidor web, base de datos, infraestructura y el **WAF**, un filtro opcional que bloquea peticiones peligrosas antes de llegar al servidor).",
      "**Task 9 · Security Headers:** lista las cabeceras de seguridad que explica. Luego, en cualquier web, mira con **F12 → Red** (Network) si las respuestas las traen.",
      "**Task 10 · Practical Task:** pulsa **View Site** (o **Show Split View**). Se abre un simulador para enviar peticiones HTTP: eliges el **método**, escribes la **ruta** y, si hace falta, el **cuerpo** (body).",
      "Haz las tres peticiones que pide la tarea: un **GET** a la ruta de usuarios, un **POST** para cambiar el país de un usuario y un **DELETE** para borrar otro. Cada una da una flag: cópiala en su casilla.",
      "Si una petición falla, revisa el formato del cuerpo que explicó la tarea 6 y que el método coincida con lo que pide."
    ], learn: "Front-end (HTML, CSS, JS) corre en tu navegador; back-end (servidor, base de datos, WAF) en el servidor; se hablan con peticiones HTTP." },
    { t: "«How Websites Work» ahora es de pago: alternativa gratis con práctica", s: [
      "Si al abrir How Websites Work ves «only available for Premium or Max subscribers», usa esta guía. Si tienes Premium, haz la sala y luego igualmente el paso 3.",
      "Lee en español el artículo de MDN «Cómo funciona la web»: `developer.mozilla.org/es/docs/Learn_web_development/Getting_started/Web_standards/How_the_web_works`. Céntrate en **Clientes y servidores** y en **Entonces, ¿qué ocurre exactamente?**.",
      "Fabrica una mini-web: abre el **Bloc de notas** y escribe en tres líneas: `<h1>Mi tienda</h1>`, `<p id=\"precio\">Precio: 100</p>` y `<button onclick=\"document.getElementById('precio').textContent='Precio: 1'\">Descuento</button>`.",
      "**Guardar como** en `Cuaderno-hacker`, **Tipo:** «Todos los archivos (*.*)», nombre `tienda.html`. Haz doble clic en el archivo: se abre en Brave. La primera línea es HTML (estructura) y el `onclick` es JavaScript (comportamiento).",
      "Pulsa **Descuento**: el precio cambia a 1. Eso pasó solo en **tu** navegador. Pulsa **F12** → **Elementos** y verás el HTML ya modificado. Cualquiera puede cambiar lo que tiene en su navegador.",
      "Conclusión para el cuaderno: si una tienda real cobrara el precio que manda el navegador, cualquiera pagaría 1. Por eso **el servidor** debe calcular el precio consultando la base de datos y no fiarse del front-end."
    ], learn: "Todo lo que corre en el navegador lo controla el usuario; las decisiones importantes las toma el servidor." },
    { t: "Tu dibujo: las tres piezas de una tienda en línea", s: [
      "En una hoja dibuja tres cajas: **Navegador**, **Servidor** y **Base de datos**, con flechas de ida y vuelta.",
      "Flecha navegador → servidor: escribe una petición real, por ejemplo `POST /carrito` con el producto, la cantidad y tu **cookie de sesión** (lo viste en HTTP in Detail).",
      "Flecha servidor → base de datos: qué pregunta el servidor (por ejemplo «¿cuánto cuesta el producto 7?» y «¿quién es el usuario de esta sesión?»).",
      "Flechas de vuelta: la base de datos responde el precio; el servidor devuelve al navegador el HTML con el total.",
      "Marca con una estrella roja los puntos donde el servidor **debe comprobar** algo (sesión válida, precio real, cantidad positiva). Ahí nacen casi todas las vulnerabilidades web.",
      "Haz una foto y guárdala en `Cuaderno-hacker`."
    ], learn: "Las fallas web aparecen donde el servidor confía en datos del navegador sin comprobarlos." }
  ],
  p2u18: [
    { t: "SQLBolt: las 6 lecciones de esta unidad, una por una", s: [
      "En sqlbolt.com, las lecciones de hoy son: **SQL Lesson 1: SELECT queries 101**, **Lesson 2: Queries with constraints (Pt. 1)**, **Lesson 3: Queries with constraints (Pt. 2)**, **Lesson 4: Filtering and sorting Query results**, **SQL Review: Simple SELECT Queries** (cuenta como la 5) y **Lesson 6: Multi-table queries with JOINs**.",
      "**Lección 1:** `SELECT columna1, columna2 FROM tabla;` elige columnas; `SELECT * FROM tabla;` las trae todas. La tabla es `movies`. Las tareas están bajo **Exercise 1 — Tasks** y se marcan solas al acertar.",
      "**Lección 2:** `WHERE` filtra filas. Operadores: `=`, `!=`, `<`, `>`, `<=`, `>=`, `BETWEEN 2000 AND 2010` (rango, incluye los extremos), `IN (…)` y `NOT IN (…)`. Varias condiciones se unen con `AND` u `OR`.",
      "**Lección 3:** filtros de texto: `=` exacto, `LIKE` con `%` (cualquier cantidad de caracteres) y `_` (un carácter). Ejemplo: `WHERE title LIKE \"Toy Story%\"`. El texto va entre comillas.",
      "**Lección 4:** `DISTINCT` quita repetidos, `ORDER BY columna ASC/DESC` ordena (ASC de menor a mayor, DESC al revés) y `LIMIT 5 OFFSET 5` da 5 filas saltándose las 5 primeras.",
      "**Review:** usa la tabla `north_american_cities` (city, country, population, latitude, longitude). Mezcla todo lo anterior. Es la mejor prueba de que lo entendiste: hazla sin mirar las lecciones.",
      "**Lección 6 · JOIN:** une dos tablas por una columna común: `SELECT … FROM movies JOIN boxoffice ON movies.id = boxoffice.movie_id`. Si se hace cuesta arriba, déjala para el final del bloque.",
      "Si te atascas 10 minutos, abre el enlace **Solution** («Stuck? Read this task's Solution»), léelo, ciérralo y escríbelo tú. Cuando todas las tareas estén en verde, pulsa **Next –** para ir a la siguiente lección."
    ], learn: "`SELECT … FROM … WHERE … ORDER BY … LIMIT`: elegir columnas, tabla, filtrar, ordenar y limitar, en ese orden." },
    { t: "La consulta de ejemplo y la tuya", s: [
      "Lee la consulta de ejemplo de la unidad cláusula por cláusula y di en voz alta: qué columnas devuelve (`SELECT`), de qué tabla (`FROM`), qué filas (`WHERE` con dos condiciones unidas por `AND`), en qué orden (`ORDER BY`) y cuántas como máximo (`LIMIT`).",
      "Ahora la tuya, en el cuaderno: una tabla `productos` con columnas `nombre` y `precio`. Escribe la consulta en este orden: `SELECT` las columnas, `FROM` la tabla, `WHERE` con la condición de precio mayor de 100, `ORDER BY` el precio con la palabra que ordena de mayor a menor, y `;` al final.",
      "Pruébala en una tabla real: abre la lección **SQL Review: Simple SELECT Queries** y escribe la versión equivalente con `north_american_cities`: las ciudades con más de 1000000 habitantes, de la más poblada a la menos. Los números van sin puntos ni comas.",
      "La tabla de resultados se actualiza mientras escribes. Debe salir la ciudad más poblada arriba y ninguna con menos de un millón. Si sale al revés, te falta `DESC`.",
      "Crea dos tarjetas: «Estructura básica de una consulta SQL» y «Ordenar de mayor a menor en SQL»."
    ], learn: "Una consulta se lee como una frase: qué quiero, de dónde, con qué condición y en qué orden." }
  ],
  p2u19: [
    { t: "Instalar y abrir Burp Suite Community en Windows por primera vez", s: [
      "Sigue la guía general de PortSwigger para descargar: **Community Edition** para **Windows**. El archivo se llama algo como `burpsuite_community_windows-x64_….exe`. Ábrelo y acepta el aviso de Windows (**Sí**).",
      "En el asistente pulsa **Next** en cada pantalla (la carpeta por defecto está bien) y al final **Finish**. Burp trae su propio Java: no instales nada más.",
      "Abre **Burp Suite Community Edition** desde el menú Inicio. Si ofrece actualizar, acepta. En la primera ventana deja marcado **Temporary project in memory** (no se guarda nada al cerrar) y pulsa **Next**.",
      "En la siguiente deja **Use Burp defaults** y pulsa **Start Burp**. Se abre la ventana principal con pestañas arriba: **Dashboard**, **Target**, **Proxy**, **Intruder**, **Repeater**…",
      "Pulsa **Proxy** → **Intercept**. El interruptor debe decir **Intercept off**. Si dice **Intercept on**, haz clic para apagarlo: si no, las páginas se quedan cargando porque Burp las retiene.",
      "Pulsa **Open browser**. Se abre un Chromium que pasa todo su tráfico por Burp. Úsalo solo para laboratorios: tu navegador normal (Brave) sigue sin pasar por Burp."
    ], learn: "Burp se abre con proyecto temporal y opciones por defecto; con Intercept off solo observa, y su navegador ya viene configurado." },
    { t: "Primer uso: ver tus propias peticiones (y una POST)", s: [
      "En el navegador de Burp ve a `portswigger.net/web-security`. Si aún no tienes cuenta, pulsa **Sign up** y créala con tu correo; si ya la tienes, pulsa **Log in** y entra.",
      "En Burp ve a **Proxy → HTTP history**. Cada fila es una petición: **Host** (a qué servidor), **Method** (GET, POST…), **URL**, **Status code** y **Length**. Haz clic en la cabecera **#** para ver las más recientes arriba.",
      "Haz clic en una fila GET. Abajo, a la izquierda, está la **Request** (lo que envió tu navegador) y a la derecha la **Response** (lo que respondió el servidor). Las pestañas **Pretty**, **Raw** y **Hex** muestran lo mismo de formas distintas: usa **Pretty**.",
      "Busca la fila con **Method POST** que se generó al pulsar **Log in**. En la Request, baja hasta el final: después de las cabeceras y una línea en blanco está el **cuerpo** con los datos del formulario.",
      "Verás tu contraseña **en texto claro**. HTTPS la cifra por el camino, pero Burp está en medio con tu permiso y con su propio certificado, así que la ve. No hagas capturas de pantalla de esa petición ni la compartas.",
      "En la Response de esa petición busca la cabecera `Set-Cookie`: es la cookie de sesión que viste en la Fase 1. A partir de ahora el navegador la manda en cada petición.",
      "Cierra Burp al terminar. Como el proyecto era temporal, el historial se borra.",
      "Regla: Burp solo con tus propias peticiones a laboratorios (PortSwigger, TryHackMe, picoCTF). Nunca para modificar peticiones a sitios reales."
    ], learn: "**Proxy → HTTP history** muestra cada petición y respuesta; en una POST los datos van en el cuerpo, después de las cabeceras." }
  ],
  p2u20: [
    { t: "La teoría de control de acceso: qué leer y qué anotar", s: [
      "Abre la página de teoría (Access control vulnerabilities and privilege escalation). Lee en orden: **What is access control?**, **Vertical access controls**, **Horizontal access controls** y **Context-dependent access controls**.",
      "Anota con tus palabras: **vertical** = un usuario normal hace cosas de administrador; **horizontal** = un usuario ve o cambia datos de **otro** usuario de su mismo nivel.",
      "Lee **Examples of broken access controls** → **Vertical privilege escalation** → **Unprotected functionality**. Es exactamente lo que practicarás en los dos laboratorios: páginas de administración sin protección, descubiertas por `robots.txt` o por el código JavaScript.",
      "Lee al final **How to prevent access control vulnerabilities** y copia 3 medidas al cuaderno (por ejemplo, denegar por defecto y comprobar permisos en el servidor en cada petición).",
      "En OWASP, la lista vigente es la **Top 10:2025**, y **A01 Broken Access Control** sigue siendo el número 1 (también lo era en la de 2021). Ábrela y lee sus **Example Attack Scenarios**."
    ], learn: "Vertical = subir de nivel; horizontal = acceder a datos de otro usuario. La defensa es comprobar permisos en el servidor siempre." },
    { t: "Lab 1 · Unprotected admin functionality (Apprentice)", s: [
      "Al final de la teoría pulsa **View all access control labs** y abre **Unprotected admin functionality**. Lee el objetivo: borrar al usuario `carlos` desde un panel de administración que no está protegido.",
      "Pulsa **Access the lab** (necesitas haber iniciado sesión). Se abre una tienda falsa hecha solo para ti. Puedes abrirla desde el navegador de Burp para ver el tráfico, pero no hace falta.",
      "Piensa como en el reto «where are the robots» de la Fase 1: ¿qué archivo pide a los buscadores que no muestren ciertas rutas? Añádelo al final de la dirección del laboratorio y pulsa Enter.",
      "Verás una línea `Disallow:` con una ruta. Cambia la dirección para abrir esa ruta.",
      "Se abre el panel de administración sin pedirte nada. Busca a `carlos` y pulsa **Delete**. Arriba debe salir **Congratulations, you solved the lab!**",
      "En el cuaderno: **causa** (la página de admin solo estaba «escondida», sin comprobar quién la pide) y **arreglo** (el servidor comprueba que el usuario es administrador en cada petición a esa ruta; y no listar rutas sensibles en robots.txt)."
    ], learn: "Esconder una URL no es protegerla: `robots.txt` puede delatarla." },
    { t: "Lab 2 · Unprotected admin functionality with unpredictable URL (Apprentice)", s: [
      "Abre el laboratorio **Unprotected admin functionality with unpredictable URL** y pulsa **Access the lab**. Esta vez la ruta del panel es difícil de adivinar y no está en robots.txt (compruébalo).",
      "En la página de inicio de la tienda pulsa **Ctrl + U** para ver el código fuente, como en el reto Insp3ct0r.",
      "Pulsa **Ctrl + F** y busca `admin`. Encontrarás un bloque `<script>` que solo **muestra** el enlace al panel si eres administrador, pero que contiene la ruta completa a la vista de todos.",
      "Copia esa ruta, ponla al final de la dirección del laboratorio y pulsa Enter. Borra a `carlos` con **Delete**.",
      "Si llevas 20 minutos atascado, abre **Solution** en la página del laboratorio, léela, ciérrala y hazlo tú sin mirar.",
      "En el cuaderno: **causa** (seguridad por oscuridad: el JavaScript que recibe cualquier usuario revela la ruta) y **arreglo** (control de permisos en el servidor; no enviar al navegador rutas de administración a quien no lo es)."
    ], learn: "El código que llega al navegador lo lee cualquiera: una URL «secreta» en JavaScript no protege nada." }
  ],
  p2u21: [
    { t: "Instalar Wireshark (con Npcap) en Windows", s: [
      "Abre la página de descargas y pulsa **Windows x64 Installer** (versión estable 4.6.x). Si tu laptop tiene procesador ARM (míralo en **Configuración → Sistema → Información → Tipo de sistema**), usa **Windows Arm64 Installer**.",
      "Abre el instalador y acepta el aviso de Windows (**Sí**). Pulsa **Next**, luego **Noted** en la licencia. En **Choose Components** deja lo que viene marcado y pulsa **Next**.",
      "En **Additional Tasks** deja el acceso en el menú Inicio (el icono de escritorio es opcional). **Next** y deja la carpeta de instalación por defecto.",
      "Llega la pantalla de **Npcap**: deja marcada la casilla **Install Npcap**. Npcap es el controlador que permite capturar paquetes en Windows; sin él, Wireshark no ve ninguna interfaz. Si sale una pantalla de **USBPcap**, déjala sin marcar. Pulsa **Install**.",
      "Se abre el instalador de Npcap: **I Agree**, deja las opciones como vienen (no marques «Restrict Npcap driver's access to Administrators only») y pulsa **Install** → **Next** → **Finish**.",
      "Vuelve al instalador de Wireshark: **Next** → **Finish**. Si pide reiniciar, reinicia."
    ], learn: "En Windows Wireshark necesita Npcap para capturar; se instala desde el propio instalador." },
    { t: "Tu primera captura: DNS y HTTPS de wikipedia.org con filtros", s: [
      "Abre **Wireshark**. En la pantalla de bienvenida verás tus interfaces con una pequeña línea de actividad. Haz **doble clic en Wi-Fi** (la que se mueve). Empiezan a llenarse filas: cada una es un paquete, con **No.**, **Time**, **Source**, **Destination**, **Protocol**, **Length** e **Info**.",
      "Sin parar la captura, abre PowerShell y escribe `nslookup wikipedia.org`. Luego abre `wikipedia.org` en Brave. (Usamos `nslookup` porque Brave puede enviar sus consultas DNS cifradas y entonces no las verías.)",
      "Vuelve a Wireshark y pulsa el **cuadrado rojo** (Stop capturing packets) en la barra de arriba.",
      "Haz clic en la barra de filtros («Apply a display filter…»), escribe `dns` y pulsa Enter. La barra se pone **verde** si el filtro es válido y **roja** si no. Ahora solo ves DNS.",
      "Afina: `dns.qry.name contains \"wikipedia\"`. Verás pares **Standard query** (tu pregunta) y **Standard query response** (la respuesta). Haz clic en una respuesta.",
      "En el panel del medio están las capas, de abajo arriba del modelo OSI: **Frame**, **Ethernet II** (MAC), **Internet Protocol Version 4** (IP), **User Datagram Protocol** (puerto 53) y **Domain Name System**. Despliega **Answers** con el triángulo: ahí está la IP de wikipedia.org.",
      "Cambia el filtro a `tcp.port == 443`: es el tráfico HTTPS. El contenido va cifrado (**TLS**, «Application Data»). Prueba `tls.handshake.extensions_server_name contains \"wikipedia\"`: el **Client Hello** muestra el nombre del sitio sin cifrar. Lo que visitas se nota aunque no se lea el contenido.",
      "Borra el filtro con la **X** de la barra. Si quieres guardar la captura: **File → Save As** en `Cuaderno-hacker`. Captura solo tu tráfico y en tu red."
    ], learn: "Doble clic en la interfaz captura, el cuadrado rojo para; `dns`, `tcp.port == 443` y `dns.qry.name contains` filtran lo que ves." },
    { t: "Sala · Traffic Analysis Essentials", s: [
      "Abre la sala y pulsa **Join Room**. Tiene 4 tareas y no necesita máquina: la práctica es una web simulada.",
      "**Task 2:** lee qué es la seguridad de red y qué datos de red guarda un defensor (registros, capturas de paquetes). Relaciónalo con lo que acabas de ver en Wireshark.",
      "**Task 3 · Traffic Analysis:** lee la teoría y pulsa **View Site**. Sigue las instrucciones de la simulación hasta que te muestre la flag y pégala en la casilla.",
      "Termina con la tarea 4 y escribe en el cuaderno 2 diferencias entre mirar paquetes uno a uno (Wireshark) y vigilar el tráfico de toda una red."
    ], learn: "El análisis de tráfico ayuda a un defensor a ver qué pasa en la red y a detectar lo anómalo." }
  ],
  p2u22: [
    { t: "Ejecuta el esqueleto y comprueba el hash", s: [
      "En IDLE, **File → New File**, escribe el esqueleto de la unidad a mano y guárdalo como `claves.py` en `Cuaderno-hacker`.",
      "Qué hace cada parte: `import hashlib` carga la librería de hashes; `def puntuacion(clave):` empieza con 0 puntos y suma 1 si `len(clave) >= 12` (`len` cuenta caracteres); la última línea calcula el SHA-256.",
      "En `hashlib.sha256(clave.encode()).hexdigest()`: `.encode()` convierte el texto en bytes (el hash trabaja con bytes), `sha256(…)` calcula la huella y `.hexdigest()` la devuelve como texto de 64 caracteres.",
      "Pulsa **F5** y escribe `hola`. Debe salir `Puntuación: 0 de 4` y un hash de 64 caracteres.",
      "Compruébalo con CyberChef: operación **SHA2**, **Size** `256`, Input `hola`. Debe salir **exactamente** el mismo hash. Si sale distinto, revisa que no escribiste un espacio al final."
    ], learn: "`hashlib.sha256(texto.encode()).hexdigest()` da el mismo SHA-256 que CyberChef." },
    { t: "Completa las tres comprobaciones y el mensaje final", s: [
      "Mayúsculas (te lo explico entero): `if any(c.isupper() for c in clave):` y dentro `puntos += 1`. Se lee así: para cada carácter `c` de la clave, pregunta si es mayúscula; `any` es verdadero si **al menos uno** lo es.",
      "Prueba en la Shell antes de escribir: `\"Hola\"[0].isupper()` da `True`; `\"7\".isdigit()` da `True`; `\"!\".isalnum()` da `False` (`isalnum` es cierto solo para letras y números).",
      "Escribe tú la comprobación de **números** con el mismo patrón que la de mayúsculas, cambiando el método por el que dice si un carácter es un dígito.",
      "Escribe tú la de **símbolos**: un carácter es símbolo si **no** es letra ni número. Usa `not` delante del método de la Shell que da `False` para `!`.",
      "Las cuatro comprobaciones van dentro de la función, con la misma sangría que el primer `if`, y antes del `return`.",
      "Comprueba: `abc` → 0 de 4; `Hola` → 1; `correcaballo` → 1; `Correcaballo2024!` → 4.",
      "Mensaje final: después de calcular la puntuación, un `if`/`elif`/`else`: 0 o 1 → `débil`, 2 o 3 → `media`, 4 → `fuerte`. Guarda el resultado de la función en una variable para no llamarla dos veces.",
      "Prueba con 5 contraseñas **inventadas**. Nunca escribas tus contraseñas reales en un programa de prueba."
    ], learn: "`any(condición for c in texto)` dice si algún carácter cumple; `isupper`, `isdigit` e `isalnum` clasifican caracteres." }
  ],
  p2u23: [
    { t: "Bloque 1 · General Skills y Cryptography: PW Crack 1, Big Zip e interencdec", s: [
      "Antes de empezar: abre tu perfil o la **Progress Tracker** de la biblioteca y anota cuántos retos llevas. Te faltan los necesarios para llegar a 20. Todos los de esta guía son **Easy**.",
      "**PW Crack 1** (General Skills): descarga los dos archivos con `wget` (clic derecho en cada enlace → Copiar dirección). Lee el programa con `cat` y busca la línea con `if` que compara lo que escribe el usuario con un texto fijo.",
      "Ejecútalo en la terminal con `python3` seguido del nombre del `.py` (en Linux el comando es `python3`). Escribe lo que encontraste en el código. Lección: una contraseña escrita dentro del código no protege nada.",
      "**Big Zip** (General Skills): descarga el `.zip`, descomprímelo con `unzip` y mira con `ls`: hay demasiados archivos y carpetas para leerlos uno a uno.",
      "Usa `grep` con una opción nueva: `-r` (recursive) busca dentro de **todos** los archivos de una carpeta y sus subcarpetas: `grep -r picoCTF nombre-de-la-carpeta`. La salida dice en qué archivo estaba y la línea.",
      "**interencdec** (Cryptography): descarga el archivo y léelo con `cat`. Termina en `=`: huele a Base64. Pégalo en CyberChef con **From Base64**.",
      "El resultado empieza por `b'` y termina en `'`: así muestra Python los bytes. Copia solo lo de dentro de las comillas, ponlo como nuevo Input y aplica **From Base64** otra vez.",
      "Ahora parece una flag con las letras desplazadas. Usa **ROT13** y cambia **Amount** hasta que el principio diga `picoCTF{`."
    ], learn: "Leer el código revela secretos; `grep -r` busca en carpetas enteras; una flag puede tener varias capas de codificación." },
    { t: "Bloque 2 · Web Exploitation: dont-use-client-side e IntroToBurp", s: [
      "**dont-use-client-side:** pulsa **Launch Instance**, abre la web y pulsa **Ctrl + U**. Busca el `<script>` con la función que comprueba la contraseña.",
      "Verás varias líneas con `checkpass.substring(a, b) == '...'`. `substring(a, b)` toma los caracteres desde la posición a hasta la b. `split` es una variable con un número que se define arriba: sustitúyelo para saber cada posición.",
      "Ordena los trozos de menor a mayor posición inicial y únelos sin espacios: esa es la flag. Lección: si la comprobación está en el navegador, cualquiera la lee.",
      "**IntroToBurp:** pulsa **Launch Instance** y copia la dirección de la web. Abre Burp → **Proxy → Intercept** → **Open browser** y pega ahí la dirección.",
      "Regístrate con datos **inventados**. La web te pide después un código de un solo uso (OTP, el segundo factor).",
      "Herramienta nueva de Burp: pon el interruptor en **Intercept on**. Ahora Burp retiene cada petición hasta que pulses **Forward** (enviar) o **Drop** (descartar).",
      "Escribe cualquier código en la web y envíalo. En Burp aparece la petición retenida: al final está el cuerpo con el parámetro del código. Lee las pistas del reto sobre qué hacer con ese parámetro, edítalo directamente en Burp y pulsa **Forward**.",
      "Pon el interruptor en **Intercept off** y mira la respuesta en el navegador. Lección: si el servidor no comprueba bien el segundo factor, modificar la petición basta para saltárselo. Solo en el laboratorio del reto."
    ], learn: "Con **Intercept on** puedes cambiar una petición antes de que llegue al servidor; lo que se comprueba en el navegador no protege." },
    { t: "Bloque 3 · Forensics: Verify y Ph4nt0m 1ntrud3r", s: [
      "**Verify:** pulsa **Launch Instance** y entra por `ssh` con el comando y la contraseña que te da (como en Magikarp). Escribe `ls`: hay un archivo con un hash, un script para descifrar y una carpeta con muchos archivos.",
      "Lee el hash con `cat`. Es un SHA-256: solo uno de los archivos de la carpeta tiene exactamente esa huella.",
      "`sha256sum` calcula el SHA-256 de archivos, como `Get-FileHash` en Windows. `sha256sum carpeta/*` lo hace para todos (`*` = todos los archivos). Son demasiadas líneas: encadénalo con `| grep` y el hash pegado para quedarte con una sola.",
      "Lee con `cat` el script de descifrado para ver cómo se usa y ejecútalo con `./` pasándole la ruta del archivo que encontraste.",
      "**Ph4nt0m 1ntrud3r:** haz clic normal en el enlace del archivo PCAP: se descarga en tu carpeta **Descargas** de Windows. Ábrelo con doble clic: se abre en Wireshark.",
      "Son pocos paquetes TCP. El enunciado insiste en el **tiempo**: haz clic en la cabecera de la columna **Time** para ordenarlos.",
      "Selecciona un paquete: en el panel de abajo, a la derecha, ves su contenido en texto. Muchos llevan cadenas que parecen Base64. En el panel del medio, clic derecho sobre **Data** → **Copy** → **…as Printable Text** para copiar el texto.",
      "Decodifica cada cadena con **From Base64** en CyberChef. Algunas son ruido y otras son trozos de la flag: júntalos en el orden del tiempo.",
      "Por cada reto resuelto, apúntalo en el cuaderno: nombre, categoría, qué te dio la pista y el comando clave. Te servirá para el writeup de la unidad siguiente."
    ], learn: "`sha256sum` + `grep` encuentran un archivo por su huella; en Wireshark, ordenar por tiempo y copiar como texto ayuda a reconstruir datos." }
  ],
  p2u24: [
    { t: "Escribe tu writeup con esta plantilla", s: [
      "Elige el reto que más te enseñó. Ábrelo en la biblioteca para tener el enunciado delante (no hace falta volver a resolverlo).",
      "Abre el **Bloc de notas** y guárdalo ya en `Cuaderno-hacker` como `writeup-nombre-del-reto.md` con **Tipo:** «Todos los archivos (*.*)». La extensión `.md` es **Markdown**: texto normal donde `#` hace un título y `-` una lista. Es el formato de GitHub, donde publicarás tu portafolio.",
      "Escribe la cabecera: `# Writeup: Nombre del reto` y debajo una línea con plataforma (picoCTF / CyLab), categoría, dificultad y fecha.",
      "**## 1. El reto:** copia el objetivo con tus palabras en 2-3 líneas. **## 2. Reconocimiento:** qué te dieron (archivo, web, servidor y puerto) y los primeros comandos que usaste para entenderlo (`file`, `cat`, Ctrl + U…).",
      "**## 3. Lo que probé y falló:** cada intento fallido y **por qué** no funcionó. Es la parte que más enseña a quien te lee y la que más valoran los profesionales.",
      "**## 4. Solución paso a paso:** numera cada paso con el comando exacto. Para los comandos, deja una línea vacía antes y después y escríbelos con 4 espacios al principio de la línea: Markdown los muestra como código.",
      "**## 5. Qué aprendí y cómo se defendería:** una línea de lo que aprendiste y otra del arreglo (por ejemplo «comprobar en el servidor y no en el navegador»).",
      "**No pongas la flag real**: escribe `picoCTF{REDACTADO}`. Si añades capturas, hazlas con **tecla Windows + Shift + S**, guárdalas en la misma carpeta y comprueba que no salen contraseñas tuyas.",
      "Léelo en voz alta como si se lo explicaras a otra persona. Donde te trabes o tengas que añadir «es que…», reescribe esa frase."
    ], learn: "Un writeup cuenta reto, reconocimiento, fallos, solución y defensa, sin revelar la flag." }
  ]
});
