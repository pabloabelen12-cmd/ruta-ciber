/* FASE 2: Fundamentos sólidos. 24 unidades de fácil a difícil. Una unidad puede llevar varios bloques de 45 min. */
const THM = s => "https://tryhackme.com/room/" + s;
const P2 = [
{ id:"p2u01", mod:"Habilidades", lvl:1, blocks:1, title:"Buscar como un profesional",
  goal:"Encontrar respuestas técnicas fiables por tu cuenta, que es la habilidad que más usarás en tu carrera.",
  links:[["Sala “Search Skills”",THM("searchskills")]],
  concept:[
    "Nadie se sabe todo de memoria. Un buen profesional sabe **buscar bien**: usa fuentes oficiales, compara y comprueba antes de creer.",
    "Operadores útiles en Google: comillas para una frase exacta (`\"permission denied\"`), `site:` para buscar dentro de un sitio (`site:overthewire.org`) y `filetype:` para un tipo de archivo (`filetype:pdf`).",
    "Para un comando de Linux, la fuente principal es su manual: `man comando`. Para una vulnerabilidad, la base de datos oficial NVD."
  ],
  flow:["Pregunta clara","Fuente oficial","Comparar dos fuentes","Probar en el laboratorio"],
  steps:["Haz la sala “Search Skills”.","Busca con site: la página del nivel 13 de Bandit.","Busca con comillas el mensaje exacto de un error que te haya salido y anota qué encontraste."],
  hint:"Si una respuesta de un foro no explica por qué funciona, busca la documentación oficial antes de usarla.",
  quiz:[
    {q:"¿Qué hace site:overthewire.org en una búsqueda?",o:["Abre la web","Busca solo dentro de ese sitio","Bloquea ese sitio","Busca archivos PDF"],a:1,e:"site: limita los resultados a un dominio."},
    {q:"¿Para qué sirven las comillas en una búsqueda?",o:["Para buscar la frase exacta","Para buscar en inglés","Para buscar imágenes","No sirven"],a:0,e:"Las comillas obligan a buscar esas palabras juntas y en ese orden."},
    {q:"¿Cuál es la fuente más fiable para entender un comando de Linux?",o:["Un video viral","Su manual (man)","Un comentario anónimo","Un meme"],a:1,e:"El manual oficial describe exactamente cada opción."}
  ],
  cards:[["Operador para buscar dentro de un sitio","site:dominio.com"],["Operador para buscar un tipo de archivo","filetype:pdf"]],
  keys:["site: busca dentro de un sitio; comillas = frase exacta.","El manual (man) es la fuente principal de un comando."]
},
{ id:"p2u02", mod:"Redes", lvl:1, blocks:3, title:"Termina la ruta Pre Security",
  goal:"Completar todas las salas de Pre Security que te faltan.",
  links:[["Ruta Pre Security","https://tryhackme.com/path/outline/presecurity"]],
  concept:[
    "En la Fase 1 hiciste las primeras salas. Ahora la terminas completa: es la base sobre la que se apoya todo lo demás.",
    "Esta unidad ocupa varios bloques. Haz una o dos salas por bloque y marca cada paso al acabar.",
    "Antes de cada sala nueva, recuerda sin mirar la anterior. Es el mismo método de la Fase 1."
  ],
  steps:["Revisa en la ruta qué salas te faltan y anótalas.","Completa la primera mitad de las que faltan.","Completa la segunda mitad.","Anota en tu cuaderno las 3 ideas que más te costaron."],
  hint:"Si una sala se repite con algo que ya viste en la Fase 1, hazla rápido igualmente: te sirve de repaso espaciado.",
  quiz:[
    {q:"¿En qué capa OSI trabaja el enrutamiento por IP?",o:["2","3","4","7"],a:1,e:"La capa 3, red, se encarga del direccionamiento IP y el enrutamiento."},
    {q:"¿Qué protocolo traduce un nombre de dominio a una IP?",o:["DHCP","DNS","HTTP","ARP"],a:1,e:"DNS es la agenda de internet."},
    {q:"¿Qué código HTTP indica que la ruta no existe?",o:["200","301","404","500"],a:2,e:"404 Not Found."}
  ],
  cards:[],
  keys:["Pre Security completa: redes, web y sistemas como base."]
},
{ id:"p2u03", mod:"Redes", lvl:2, blocks:2, title:"Subredes y CIDR",
  goal:"Saber cuántos equipos caben en una red a partir de su máscara.",
  links:[["Professor Messer: índice del curso Network+ (N10-009)","https://www.professormesser.com/network-plus/n10-009/n10-009-video/n10-009-training-course/"],["Video: IPv4 Subnet Masks","https://www.professormesser.com/network-plus/n10-009/n10-009-video/ipv4-subnet-masks-n10-009/"],["Video: Calculating IPv4 Subnets and Hosts","https://www.professormesser.com/network-plus/n10-009/n10-009-video/calculating-ipv4-subnets-and-hosts-n10-009/"]],
  concept:[
    "Una IPv4 tiene 32 bits. La notación **CIDR** dice cuántos de esos bits son de la red: en `192.168.1.0/24`, los primeros 24 bits son la red y quedan 8 bits para los equipos.",
    "Con 8 bits hay 2⁸ = 256 direcciones. Se restan 2 (la de red y la de difusión), así que caben **254 equipos**. Un `/24` equivale a la máscara `255.255.255.0`.",
    "Regla rápida: cada bit que quitas a la red duplica las direcciones. `/25` = 128, `/24` = 256, `/23` = 512, `/16` = 65 536."
  ],
  flow:["192.168.1.0/24","24 bits de red","8 bits de equipos","256 direcciones","254 utilizables"],
  steps:["Busca en el canal de Professor Messer el video de subredes (subnetting) del curso de Network+ y míralo.","Calcula a mano cuántos equipos caben en /24, /25, /26 y /16.","Con ipconfig, mira tu máscara de subred y escribe tu red en notación CIDR."],
  cmds:[["Ver tu máscara de subred","ipconfig"]],
  hint:"Usa la fórmula 2^(32 − número) − 2. Para /26: 2^6 − 2 = 62.",
  quiz:[
    {q:"¿Cuántos equipos utilizables caben en un /24?",o:["256","254","255","24"],a:1,e:"256 direcciones menos la de red y la de difusión."},
    {q:"¿Qué máscara equivale a /24?",o:["255.0.0.0","255.255.0.0","255.255.255.0","255.255.255.255"],a:2,e:"24 bits a 1: tres bloques de 255."},
    {q:"¿Cuántas direcciones tiene un /26?",o:["26","62","64","128"],a:2,e:"2^(32−26) = 64 direcciones; 62 utilizables."}
  ],
  cards:[["Equipos utilizables en un /24","254 (256 menos red y difusión)."],["Máscara de un /24","255.255.255.0"],["Fórmula de equipos en una subred","2^(32 − prefijo) − 2"]],
  keys:["/24 = 255.255.255.0 = 254 equipos.","Cada bit menos de red duplica las direcciones.","Fórmula: 2^(32 − prefijo) − 2."]
},
{ id:"p2u04", mod:"Redes", lvl:2, blocks:1, title:"DHCP, ARP y NAT",
  goal:"Entender cómo un equipo consigue su IP, encuentra a otros en la red y sale a internet.",
  links:[["Video: DHCP","https://www.professormesser.com/network-plus/n10-009/n10-009-video/dhcp-n10-009/"],["Video: ARP and DNS Poisoning (primera parte: ARP)","https://www.professormesser.com/network-plus/n10-009/n10-009-video/arp-and-dns-poisoning-n10-009/"],["Video: Network Address Translation","https://www.professormesser.com/network-plus/n10-009/n10-009-video/network-address-translation-n10-009/"]],
  concept:[
    "**DHCP** reparte las IP automáticamente. Sigue cuatro pasos: Discover, Offer, Request y Acknowledge (DORA).",
    "**ARP** traduce una IP a la dirección MAC dentro de tu red local. Sin ARP, tu laptop no sabría a qué tarjeta de red enviar los datos.",
    "**NAT** permite que todos los equipos de tu casa, con IP privadas, salgan a internet usando la única IP pública de tu router."
  ],
  flow:["DHCP te da una IP","ARP encuentra la MAC del router","El router aplica NAT","Internet"],
  steps:["Mira los videos de DHCP, ARP y NAT de Professor Messer.","Ejecuta arp -a y localiza la IP de tu router y su MAC.","Dibuja en tu cuaderno qué pasa desde que conectas la laptop al wifi hasta que abres una página."],
  cmds:[["Ver la tabla ARP","arp -a"],["Ver el servidor DHCP que te dio la IP","ipconfig /all"]],
  hint:"La IP del router suele aparecer como “Puerta de enlace predeterminada” en ipconfig.",
  quiz:[
    {q:"¿Qué significa DORA en DHCP?",o:["Discover, Offer, Request, Acknowledge","Data, Output, Route, Access","DNS, Origin, Router, ARP","Ninguna"],a:0,e:"Son los cuatro mensajes con los que un equipo obtiene su IP."},
    {q:"¿Qué traduce ARP?",o:["Nombre a IP","IP a MAC en la red local","IP privada a pública","Puerto a servicio"],a:1,e:"ARP encuentra la MAC que corresponde a una IP local."},
    {q:"¿Qué permite NAT?",o:["Cifrar el wifi","Que muchos equipos privados compartan una IP pública","Asignar IP","Resolver nombres"],a:1,e:"El router traduce las IP privadas a su IP pública."}
  ],
  cards:[["Los 4 pasos de DHCP","Discover, Offer, Request, Acknowledge (DORA)."],["¿Qué hace ARP?","Traduce una IP a una MAC dentro de la red local."],["¿Qué hace NAT?","Permite que equipos con IP privada salgan a internet con una IP pública."]],
  keys:["DHCP reparte IP con DORA.","ARP: IP a MAC en la red local.","NAT: muchas IP privadas detrás de una pública."]
},
{ id:"p2u05", mod:"Linux", lvl:2, blocks:2, title:"Linux Fundamentals, parte 1",
  goal:"Moverte por Linux con soltura con tu propia máquina del laboratorio.",
  links:[["Sala “Linux Fundamentals Part 1”",THM("linuxfundamentalspart1")]],
  concept:[
    "Ya usaste Linux en Bandit. Esta sala ordena lo que aprendiste y añade cosas nuevas, con una máquina en el navegador para practicar.",
    "Fíjate en la diferencia entre **rutas absolutas** (empiezan en `/`, como `/home/usuario`) y **relativas** (desde donde estás, como `./notas`).",
    "Los operadores `>` (guardar la salida en un archivo, reemplazando) y `>>` (añadir al final) son de lo más usado en el día a día."
  ],
  flow:["pwd: ¿dónde estoy?","ls: ¿qué hay?","cd: moverme","cat / > / >>"],
  steps:["Haz la sala “Linux Fundamentals Part 1”.","Escribe en el cuaderno la diferencia entre ruta absoluta y relativa con un ejemplo.","Crea tarjetas para > y >>."],
  hint:"Si un comando no hace lo que esperas, prueba con --help o man nombre.",
  quiz:[
    {q:"¿Cuál es una ruta absoluta?",o:["./notas","notas/hoy","/home/usuario/notas","../notas"],a:2,e:"Las absolutas empiezan en / , la raíz del sistema."},
    {q:"¿Qué hace echo hola > a.txt si a.txt ya existe?",o:["Añade al final","Reemplaza el contenido","Da error","Nada"],a:1,e:"> sobrescribe el archivo."},
    {q:"¿Qué hace >>?",o:["Borra el archivo","Añade al final del archivo","Lee el archivo","Lo mueve"],a:1,e:">> añade sin borrar lo que había."}
  ],
  cards:[["Diferencia entre > y >>",">: reemplaza el archivo. >>: añade al final."],["¿Cómo empieza una ruta absoluta?","Por / (la raíz)."]],
  keys:["Absoluta empieza en /; relativa, desde donde estás.","> reemplaza; >> añade."]
},
{ id:"p2u06", mod:"Linux", lvl:2, blocks:2, title:"Permisos en Linux",
  goal:"Leer y cambiar permisos, la base de cómo Linux protege cada archivo.",
  links:[["Linux Journey: permisos de archivos","https://linuxjourney.com/lesson/file-permissions"],["Linux Journey: cambiar permisos","https://linuxjourney.com/lesson/modifying-permissions"],["Terminal de práctica (CyLab)","https://learn.cylabacademy.org/library"]],
  concept:[
    "`ls -l` muestra algo como `-rwxr-xr--`. Son tres grupos de tres letras: **dueño**, **grupo** y **otros**. r = leer, w = escribir, x = ejecutar.",
    "En números: r = 4, w = 2, x = 1, y se suman. `755` = rwx r-x r-x. `644` = rw- r-- r--. `600` = solo el dueño lee y escribe: así deben estar las llaves privadas.",
    "`chmod` cambia permisos y `chown` cambia el dueño. Muchos fallos de seguridad reales son simplemente permisos mal puestos."
  ],
  flow:["Dueño rwx","Grupo r-x","Otros r-x","= 755"],
  steps:["Lee las dos lecciones de permisos de Linux Journey y practica `ls -l` y `chmod` en la terminal de CyLab siguiendo la guía (las salas Linux Fundamentals Part 2 y 3 ahora son de pago).","Traduce a números estos permisos: rw-r--r--, rwx------, rwxr-xr-x.","Explica en voz alta por qué una llave privada debe tener permisos 600."],
  hint:"Suma por grupos de tres: rwx = 4+2+1 = 7; r-x = 4+0+1 = 5.",
  quiz:[
    {q:"¿Qué significa 644?",o:["rwxr--r--","rw-r--r--","rw-rw-rw-","r--r--r--"],a:1,e:"6 = 4+2 (rw-), 4 = r--."},
    {q:"¿Qué permiso debe tener una llave privada SSH?",o:["777","755","644","600"],a:3,e:"Solo el dueño debe poder leerla y escribirla."},
    {q:"¿Qué comando cambia los permisos?",o:["chown","chmod","ls -l","sudo"],a:1,e:"chmod cambia permisos; chown cambia el dueño."}
  ],
  cards:[["Valores de r, w y x","r = 4, w = 2, x = 1"],["Permiso 755","rwxr-xr-x"],["Permiso correcto para una llave privada","600"]],
  keys:["Tres grupos: dueño, grupo, otros.","r=4, w=2, x=1; 755 y 644 son los más comunes.","Las llaves privadas van con 600."]
},
{ id:"p2u07", mod:"Linux", lvl:2, blocks:1, title:"Bandit 13: entrar con una llave",
  goal:"Usar una llave SSH en vez de una contraseña.",
  links:[["Bandit nivel 13 → 14","https://overthewire.org/wargames/bandit/bandit14.html"]],
  concept:[
    "Además de contraseñas, SSH acepta **llaves**: un par formado por una llave pública (que se deja en el servidor) y una privada (que guardas tú, como una llave de casa).",
    "Con `ssh -i archivo_llave usuario@servidor` te conectas usando la llave privada.",
    "En Windows, si el archivo de la llave tiene permisos demasiado abiertos, ssh se niega a usarla. Es la misma idea del permiso 600 que acabas de aprender."
  ],
  flow:["Llave privada en tu laptop","ssh -i","El servidor comprueba con la pública","Entras"],
  steps:["Lee el objetivo del nivel 13.","Copia la llave privada a un archivo en tu laptop.","Conéctate al siguiente nivel usándola.","Anota qué error te salió (si salió) y cómo lo resolviste."],
  cmds:[["Conectarte con una llave","ssh -i bandit14.key bandit14@bandit.labs.overthewire.org -p 2220"]],
  hint:"Si Windows dice que la llave está desprotegida (UNPROTECTED PRIVATE KEY FILE), busca cómo quitar los permisos de otros usuarios a ese archivo con el comando icacls.",
  quiz:[
    {q:"¿Qué parte del par de llaves nunca debes compartir?",o:["La pública","La privada","Las dos","Ninguna"],a:1,e:"La privada es tu identidad; la pública se puede dar a cualquiera."},
    {q:"¿Qué opción de ssh indica el archivo de la llave?",o:["-p","-i","-k","-l"],a:1,e:"-i (identity) señala la llave privada."},
    {q:"¿Por qué ssh rechaza una llave con permisos abiertos?",o:["Por un error","Porque otros usuarios podrían leerla","Porque está caducada","Porque es pública"],a:1,e:"Una llave que otros pueden leer ya no es privada."}
  ],
  cards:[["¿Para qué sirve ssh -i?","Para conectarte usando un archivo de llave privada."],["Llave pública frente a privada","La pública va en el servidor; la privada la guardas tú."]],
  keys:["SSH con llaves: pública en el servidor, privada contigo.","ssh -i usa la llave privada.","Llave con permisos abiertos = rechazada."]
},
{ id:"p2u08", mod:"Python", lvl:2, blocks:2, title:"Python 1: instalar y tu primer programa",
  goal:"Instalar Python en Windows y escribir tus primeros programas tú mismo, sin IA.",
  links:[["Descargar Python","https://www.python.org/downloads/"],["Curso gratis Python for Everybody","https://www.py4e.com/"]],
  concept:[
    "Python es el lenguaje más usado en seguridad para automatizar tareas. Aquí la regla es estricta: **escribes tú el código**. Puedes preguntar dudas, pero no copiar programas enteros.",
    "Al instalarlo en Windows, marca la casilla **Add python.exe to PATH**. Así podrás ejecutar `python` desde PowerShell.",
    "Primero estudia el ejemplo resuelto de abajo línea por línea. Después escribe tu versión sin mirarlo."
  ],
  code:"nombre = input(\"¿Cómo te llamas? \")\nanio = int(input(\"¿En qué año naciste? \"))\nedad = 2026 - anio\nprint(\"Hola,\", nombre, \"- en 2026 cumples\", edad)",
  steps:["Instala Python marcando “Add python.exe to PATH”.","En PowerShell escribe python --version para comprobarlo.","Lee el ejemplo resuelto y explica cada línea en voz alta.","Sin mirarlo, escribe un programa que pida dos números y muestre su suma. Guárdalo como suma.py y ejecútalo.","Lee los capítulos 1 y 2 de Python for Everybody."],
  cmds:[["Comprobar la instalación","python --version"],["Ejecutar tu programa","python suma.py"]],
  hint:"input() siempre devuelve texto. Para sumar números, conviértelos con int().",
  quiz:[
    {q:"¿Qué tipo de dato devuelve input()?",o:["Número","Texto (string)","Lista","Booleano"],a:1,e:"Siempre texto; por eso se usa int() para convertirlo."},
    {q:"¿Qué casilla debes marcar al instalar Python en Windows?",o:["Install for all users","Add python.exe to PATH","Disable path length","Ninguna"],a:1,e:"Así PowerShell encuentra el comando python."},
    {q:"¿Qué muestra print(\"2\" + \"3\")?",o:["5","23","Error","2 3"],a:1,e:"Con texto, + une las cadenas."}
  ],
  cards:[["¿Qué devuelve input() en Python?","Siempre texto (string)."],["Convertir texto a número entero en Python","int(texto)"]],
  keys:["Instala con Add to PATH.","input() devuelve texto; int() lo convierte.","Escribes tú el código, sin copiar."]
},
{ id:"p2u09", mod:"Linux", lvl:3, blocks:2, title:"Bandit 14 y 15: hablar con un puerto",
  goal:"Enviar datos a un servicio en un puerto, primero sin cifrado y luego con TLS.",
  links:[["Bandit nivel 14 → 15","https://overthewire.org/wargames/bandit/bandit15.html"],["Bandit nivel 15 → 16","https://overthewire.org/wargames/bandit/bandit16.html"]],
  concept:[
    "Cada servicio escucha en un puerto. Con **netcat** (`nc`) puedes conectarte a cualquier puerto y escribirle texto directamente, como si fueras el programa cliente.",
    "Si el servicio usa **TLS** (cifrado), netcat no sirve: hay que hablar con él usando una herramienta que cifre, como `openssl s_client`.",
    "`localhost` es el propio equipo en el que estás. En estos niveles hablas con un servicio del mismo servidor de Bandit."
  ],
  flow:["Tu terminal","Puerto del servicio","¿Cifrado? usa openssl","Respuesta"],
  steps:["Resuelve el nivel 14 leyendo el manual de nc.","Resuelve el nivel 15 leyendo la ayuda de openssl s_client.","Anota la diferencia entre los dos en tu cuaderno."],
  cmds:[["Manual de netcat (dentro de Bandit)","man nc"],["Ayuda de openssl s_client","man s_client"]],
  hint:"Piensa qué espera recibir el servicio según el enunciado del nivel, y envíaselo.",
  quiz:[
    {q:"¿Para qué sirve nc (netcat)?",o:["Cifrar archivos","Conectarse a un puerto y enviar o recibir datos","Cambiar permisos","Buscar archivos"],a:1,e:"Es la navaja suiza para hablar con puertos."},
    {q:"Un servicio usa TLS. ¿Qué usas?",o:["nc","openssl s_client","cat","ping"],a:1,e:"openssl s_client negocia el cifrado TLS."},
    {q:"¿Qué es localhost?",o:["Un servidor de Google","El propio equipo","El router","Una IP pública"],a:1,e:"localhost (127.0.0.1) es el mismo equipo."}
  ],
  cards:[["¿Qué hace netcat?","Conecta con un puerto para enviar y recibir datos."],["Hablar con un servicio TLS desde la terminal","openssl s_client"],["IP de localhost","127.0.0.1"]],
  keys:["nc habla con puertos sin cifrar.","openssl s_client para servicios con TLS.","localhost = 127.0.0.1."]
},
{ id:"p2u10", mod:"Python", lvl:2, blocks:2, title:"Python 2: condiciones y bucles",
  goal:"Que tus programas tomen decisiones y repitan tareas.",
  links:[["Python for Everybody","https://www.py4e.com/"]],
  concept:[
    "`if`, `elif` y `else` deciden qué hacer según una condición. Los **bucles** repiten: `for` recorre una serie y `while` repite mientras algo sea cierto.",
    "`range(5)` genera 0, 1, 2, 3 y 4: empieza en 0 y no incluye el 5.",
    "Ejemplo resuelto abajo. Después, la versión incompleta: termina tú las partes que faltan."
  ],
  code:"# Ejemplo resuelto\nintentos = 0\nwhile intentos < 3:\n    clave = input(\"Clave: \")\n    if clave == \"bandit\":\n        print(\"Acceso concedido\")\n        break\n    intentos += 1\n    print(\"Incorrecta. Te quedan\", 3 - intentos)\nelse:\n    print(\"Bloqueado\")",
  steps:["Lee los capítulos 3 y 5 de Python for Everybody.","Explica en voz alta qué hace cada línea del ejemplo.","Sin mirarlo, escribe un programa que pida 5 números con un for y diga cuál es el mayor.","Modifícalo para que diga también cuántos son pares."],
  hint:"Para saber si un número es par: numero % 2 == 0.",
  quiz:[
    {q:"¿Qué números genera range(5)?",o:["1 a 5","0 a 5","0 a 4","5"],a:2,e:"Empieza en 0 y se detiene antes del 5."},
    {q:"¿Qué hace break dentro de un bucle?",o:["Repite","Sale del bucle","Da error","Pausa el programa"],a:1,e:"Termina el bucle en ese momento."},
    {q:"¿Cómo sabes si n es par?",o:["n / 2","n % 2 == 0","n == 2","n // 2 == 1"],a:1,e:"% da el resto; si es 0, es par."}
  ],
  cards:[["¿Qué genera range(5)?","0, 1, 2, 3, 4"],["¿Qué hace break?","Sale del bucle."],["Comprobar si un número es par en Python","n % 2 == 0"]],
  keys:["if/elif/else deciden; for y while repiten.","range(5) = 0 a 4.","% da el resto de una división."]
},
{ id:"p2u11", mod:"Criptografía", lvl:2, blocks:2, title:"Cifrado y hash",
  goal:"Distinguir cifrado simétrico, asimétrico y hash, y saber para qué sirve cada uno.",
  links:[["Sala “Encryption - Crypto 101”",THM("encryptioncrypto101")],["CyberChef","https://gchq.github.io/CyberChef/"],["Sala “Cryptography Concepts” (gratis, fácil)",THM("cryptographyconcepts")]],
  concept:[
    "**Cifrado simétrico** (como AES): la misma llave cifra y descifra. Es rápido, pero hay que compartir la llave de forma segura.",
    "**Cifrado asimétrico** (como RSA): una llave pública cifra y solo la privada descifra. HTTPS lo usa para acordar una llave simétrica de forma segura.",
    "Un **hash** (como SHA-256) convierte cualquier dato en una huella de tamaño fijo y **no se puede deshacer**. Las contraseñas se guardan como hash, con una **sal** (un valor aleatorio) para que dos contraseñas iguales no den el mismo hash."
  ],
  flow:["Simétrico: 1 llave","Asimétrico: pública + privada","Hash: huella sin vuelta atrás"],
  steps:["Haz primero la sala “Cryptography Concepts” y después “Encryption - Crypto 101”.","En CyberChef, calcula el SHA-256 de tu nombre y luego de tu nombre con una letra cambiada. Compara.","Explica en voz alta por qué las contraseñas se guardan como hash con sal y no cifradas."],
  hint:"Pregúntate siempre: ¿necesito recuperar el dato original? Si sí, es cifrado. Si no, es hash.",
  quiz:[
    {q:"¿Qué tipo de cifrado usa la misma llave para cifrar y descifrar?",o:["Asimétrico","Simétrico","Hash","Base64"],a:1,e:"Simétrico: una sola llave compartida."},
    {q:"¿Se puede deshacer un hash para obtener el dato original?",o:["Sí, con la llave","No, es de un solo sentido","Sí, con Base64","Solo en Linux"],a:1,e:"Un hash no tiene vuelta atrás; solo se puede comparar."},
    {q:"¿Para qué sirve la sal en las contraseñas?",o:["Para cifrarlas","Para que contraseñas iguales den hashes distintos","Para acortarlas","Para recuperarlas"],a:1,e:"La sal hace único cada hash aunque la contraseña se repita."}
  ],
  cards:[["Cifrado simétrico frente a asimétrico","Simétrico: una llave. Asimétrico: pública cifra, privada descifra."],["¿Qué es un hash?","Una huella de tamaño fijo que no se puede deshacer."],["¿Para qué sirve la sal?","Para que contraseñas iguales tengan hashes distintos."]],
  keys:["Simétrico = una llave; asimétrico = pública + privada.","Hash = huella sin vuelta atrás.","Contraseñas: hash con sal."]
},
{ id:"p2u12", mod:"Linux", lvl:3, blocks:2, title:"Bandit 16 y 17: qué escucha y qué cambió",
  goal:"Descubrir qué puertos están abiertos en el servidor de práctica y comparar archivos.",
  links:[["Bandit nivel 16 → 17","https://overthewire.org/wargames/bandit/bandit17.html"],["Bandit nivel 17 → 18","https://overthewire.org/wargames/bandit/bandit18.html"]],
  concept:[
    "En el nivel 16 tienes que averiguar qué puertos de un rango están escuchando en el propio servidor de Bandit, y cuál de ellos habla TLS. Es tu primer **escaneo de puertos**, dentro de un entorno donde tienes permiso.",
    "En el nivel 17 aparece `diff`, que compara dos archivos y muestra solo las líneas distintas.",
    "Recuerda: escanear equipos ajenos sin permiso no está permitido. Aquí lo haces porque el propio juego te lo pide."
  ],
  flow:["Rango de puertos","¿Cuáles están abiertos?","¿Cuál usa TLS?","Respuesta"],
  steps:["Lee el objetivo del nivel 16 y las herramientas que sugiere.","Resuélvelo usando solo el rango de puertos que indica el enunciado.","Resuelve el nivel 17 con diff.","Crea tarjetas para lo nuevo."],
  cmds:[["Comparar dos archivos","diff archivo1 archivo2"]],
  hint:"El enunciado del nivel 16 sugiere herramientas. Lee su manual y busca cómo indicar un rango de puertos.",
  quiz:[
    {q:"¿Qué hace diff?",o:["Borra diferencias","Muestra las líneas distintas entre dos archivos","Une archivos","Cifra archivos"],a:1,e:"diff compara línea por línea."},
    {q:"¿Cuándo es aceptable escanear puertos?",o:["Siempre","En sistemas propios o con permiso, como Bandit","Si no te descubren","Nunca"],a:1,e:"Solo con autorización: tus equipos o plataformas de práctica."},
    {q:"Encuentras 5 puertos abiertos. ¿Cómo sabes cuál habla TLS?",o:["Adivinando","Probando a conectarte con una herramienta que use TLS","Por el número más alto","No se puede"],a:1,e:"El que responde a una conexión TLS es el que la usa."}
  ],
  cards:[["Comando para comparar dos archivos","diff"]],
  keys:["Escaneo de puertos solo con permiso.","diff muestra las líneas distintas."]
},
{ id:"p2u13", mod:"Windows", lvl:2, blocks:2, title:"Windows por dentro",
  goal:"Entender usuarios, servicios y registros de eventos de Windows, el sistema de casi todas las empresas.",
  links:[["Sala “Windows Fundamentals 2”",THM("windowsfundamentals2x0x")],["Sala “Windows Fundamentals 1”",THM("windowsfundamentals1xbx")]],
  concept:[
    "Casi todas las empresas usan Windows en sus computadoras. Defenderlas o evaluarlas exige conocerlo por dentro.",
    "**Usuarios y grupos:** un usuario del grupo Administradores puede cambiar todo. El **Control de cuentas de usuario (UAC)** pide confirmación antes de acciones con privilegios.",
    "Los **servicios** son programas que corren en segundo plano. El **Visor de eventos** guarda registros de lo que pasa: inicios de sesión, errores, cambios. Es la primera fuente que mira un defensor."
  ],
  flow:["Usuarios y grupos","Servicios","Visor de eventos","Qué pasó y cuándo"],
  steps:["Busca y haz “Windows Fundamentals 1”.","Haz la sala “Windows Fundamentals 2”.","En tu laptop, ejecuta whoami /groups y mira a qué grupos perteneces.","Abre el Visor de eventos (eventvwr), ve a Registros de Windows → Seguridad y localiza tu último inicio de sesión."],
  cmds:[["Ver tu usuario y grupos","whoami /groups"],["Ver los servicios","Get-Service"],["Abrir el Visor de eventos","eventvwr"]],
  hint:"Si el registro de Seguridad no se abre, ejecuta el Visor de eventos como administrador.",
  quiz:[
    {q:"¿Para qué sirve el Control de cuentas de usuario (UAC)?",o:["Para cifrar el disco","Para pedir confirmación antes de acciones con privilegios","Para crear usuarios","Para el wifi"],a:1,e:"UAC frena cambios importantes sin tu permiso."},
    {q:"¿Dónde ve un defensor los inicios de sesión en Windows?",o:["En el Explorador","En el Visor de eventos","En el Bloc de notas","En la papelera"],a:1,e:"El registro de Seguridad del Visor de eventos guarda los inicios de sesión."},
    {q:"¿Qué es un servicio de Windows?",o:["Un virus","Un programa que corre en segundo plano","Una carpeta","Un usuario"],a:1,e:"Los servicios funcionan sin ventana, a menudo desde que arranca el equipo."}
  ],
  cards:[["¿Dónde se ven los inicios de sesión en Windows?","Visor de eventos → Registros de Windows → Seguridad."],["¿Qué es UAC?","Control de cuentas de usuario: pide confirmación para acciones con privilegios."]],
  keys:["Administradores pueden cambiar todo; UAC pide confirmación.","Servicios = programas en segundo plano.","Visor de eventos = lo primero que mira un defensor."]
},
{ id:"p2u14", mod:"Python", lvl:3, blocks:2, title:"Python 3: listas, diccionarios y funciones",
  goal:"Guardar muchos datos y organizar tu código en funciones reutilizables.",
  links:[["Python for Everybody","https://www.py4e.com/"]],
  concept:[
    "Una **lista** guarda elementos en orden: `puertos = [22, 80, 443]`. El primero es `puertos[0]`.",
    "Un **diccionario** guarda pares clave → valor: `servicios = {22: \"ssh\", 80: \"http\"}`. Se consulta con `servicios[22]`.",
    "Una **función** (`def`) agrupa código para reutilizarlo. Recibe datos y devuelve un resultado con `return`."
  ],
  code:"def servicio(puerto):\n    conocidos = {22: \"ssh\", 53: \"dns\", 80: \"http\", 443: \"https\"}\n    return conocidos.get(puerto, \"desconocido\")\n\nfor p in [22, 443, 8080]:\n    print(p, \"->\", servicio(p))",
  steps:["Lee los capítulos 4, 8 y 9 de Python for Everybody.","Explica el ejemplo en voz alta: ¿qué hace .get y por qué evita un error?","Sin mirarlo, escribe una función que reciba una lista de puertos y devuelva cuántos son menores de 1024.","Añade 3 puertos más al diccionario con lo que sabes de la Fase 1."],
  hint:"Recorre la lista con un for y suma 1 a un contador cuando el puerto cumpla la condición.",
  quiz:[
    {q:"En puertos = [22, 80, 443], ¿qué es puertos[0]?",o:["80","22","443","Error"],a:1,e:"Las listas empiezan a contar en 0."},
    {q:"¿Qué guarda un diccionario?",o:["Solo números","Pares clave → valor","Archivos","Funciones"],a:1,e:"Cada clave apunta a un valor."},
    {q:"¿Qué hace return en una función?",o:["Repite la función","Devuelve un resultado","Imprime","Termina el programa"],a:1,e:"return entrega el resultado a quien llamó a la función."}
  ],
  cards:[["¿Desde qué número cuentan las listas en Python?","Desde 0."],["Diccionario en Python","Pares clave → valor, como {22: \"ssh\"}."],["¿Qué hace dict.get(clave, defecto)?","Devuelve el valor o el defecto si la clave no existe."]],
  keys:["Listas en orden, empiezan en 0.","Diccionario: clave → valor.","def agrupa código; return devuelve el resultado."]
},
{ id:"p2u15", mod:"Linux", lvl:3, blocks:3, title:"Bandit 18 a 20: comandos remotos y setuid",
  goal:"Ejecutar un comando por SSH sin abrir sesión y entender los programas setuid.",
  links:[["Bandit nivel 18 → 19","https://overthewire.org/wargames/bandit/bandit19.html"],["Bandit nivel 19 → 20","https://overthewire.org/wargames/bandit/bandit20.html"],["Bandit nivel 20 → 21","https://overthewire.org/wargames/bandit/bandit21.html"]],
  concept:[
    "Con SSH puedes ejecutar **un solo comando** en el servidor sin abrir una sesión interactiva, escribiéndolo al final del comando ssh.",
    "Un programa con permiso **setuid** se ejecuta con los permisos de su **dueño**, no de quien lo lanza. Es útil, pero si está mal hecho permite hacer cosas que no deberías. Por eso los defensores revisan qué programas tienen setuid.",
    "En el nivel 20 necesitas **dos terminales a la vez**: abre dos ventanas de PowerShell conectadas a Bandit."
  ],
  flow:["Nivel 18: comando remoto","Nivel 19: setuid","Nivel 20: dos terminales"],
  steps:["Resuelve el nivel 18 ejecutando un comando por SSH.","Resuelve el nivel 19 leyendo qué hace el programa setuid.","Resuelve el nivel 20 con dos ventanas de PowerShell.","Escribe en el cuaderno por qué setuid es un riesgo si se configura mal."],
  hint:"En el nivel 19, ejecuta primero el programa sin argumentos: te dice cómo usarlo.",
  quiz:[
    {q:"¿Con qué permisos se ejecuta un programa setuid?",o:["Con los de quien lo lanza","Con los de su dueño","Con los de root siempre","Sin permisos"],a:1,e:"Hereda los permisos del dueño del archivo."},
    {q:"¿Por qué un defensor revisa los programas setuid?",o:["Porque ocupan espacio","Porque si están mal hechos permiten ganar privilegios","Porque son lentos","No los revisa"],a:1,e:"Un setuid inseguro puede dar permisos que no deberías tener."},
    {q:"¿Cómo ejecutas un comando remoto sin abrir sesión?",o:["No se puede","Escribiéndolo al final del comando ssh","Con ping","Con scp"],a:1,e:"ssh usuario@servidor comando ejecuta solo ese comando."}
  ],
  cards:[["¿Qué es setuid?","Un permiso que hace que el programa se ejecute con los permisos de su dueño."],["Ejecutar un solo comando por SSH","ssh usuario@servidor comando"]],
  keys:["ssh puede ejecutar un solo comando.","setuid = corre con permisos del dueño; riesgo si está mal hecho.","Nivel 20: dos terminales."]
},
{ id:"p2u16", mod:"Python", lvl:3, blocks:2, title:"Python 4: analiza un registro como un defensor",
  goal:"Escribir un script que lea un archivo de registro y detecte intentos fallidos de inicio de sesión.",
  links:[["Python for Everybody","https://www.py4e.com/"]],
  concept:[
    "Los analistas de seguridad leen registros (logs) para detectar ataques. Un script de 15 líneas puede ahorrarles horas.",
    "Crea un archivo `auth.log` con líneas inventadas como estas (copia y pega varias veces cambiando la IP):",
    "`Failed password for admin from 203.0.113.5`  ·  `Accepted password for pablo from 192.168.1.20`",
    "Abajo tienes el ejemplo resuelto que cuenta las líneas fallidas. Tu tarea es completarlo para que cuente **por IP**."
  ],
  code:"fallidos = 0\nwith open(\"auth.log\") as f:\n    for linea in f:\n        if \"Failed password\" in linea:\n            fallidos += 1\nprint(\"Intentos fallidos:\", fallidos)\n\n# TU TAREA: usa un diccionario para contar los fallos de cada IP.\n# Pista: la IP es la última palabra -> linea.split()[-1]",
  steps:["Crea auth.log con al menos 10 líneas, con 3 IP distintas.","Ejecuta el ejemplo resuelto y comprueba el total.","Complétalo para contar los fallos por IP con un diccionario.","Haz que avise cuando una IP tenga 3 fallos o más."],
  hint:"Si la IP no está aún en el diccionario, empieza su cuenta en 0: conteo[ip] = conteo.get(ip, 0) + 1",
  quiz:[
    {q:"¿Qué hace with open(\"auth.log\") as f?",o:["Borra el archivo","Abre el archivo y lo cierra solo al terminar","Lo cifra","Crea una carpeta"],a:1,e:"with cierra el archivo automáticamente."},
    {q:"¿Qué devuelve \"a b c\".split()[-1]?",o:["a","b","c","Error"],a:2,e:"split separa por espacios; -1 es el último elemento."},
    {q:"¿Por qué es útil este script para un defensor?",o:["Para atacar","Para detectar muchos intentos fallidos desde una misma IP","Para borrar logs","No es útil"],a:1,e:"Muchos fallos desde una IP suelen indicar un ataque de fuerza bruta."}
  ],
  cards:[["Último elemento de una lista en Python","lista[-1]"],["¿Qué indica muchos fallos de login desde una IP?","Un posible ataque de fuerza bruta."]],
  keys:["Los defensores leen logs.","split() separa; [-1] es el último.","Contar fallos por IP con un diccionario."]
},
{ id:"p2u17", mod:"Web", lvl:2, blocks:2, title:"Cómo se construye una web",
  goal:"Entender las piezas de una aplicación web: lo que ves, lo que corre en el servidor y la base de datos.",
  links:[["Sala “Web Application Basics”",THM("webapplicationbasics")],["Cómo funciona la web (MDN, en español)","https://developer.mozilla.org/es/docs/Learn_web_development/Getting_started/Web_standards/How_the_web_works"]],
  concept:[
    "El **front-end** es lo que corre en tu navegador: HTML (estructura), CSS (estilo) y JavaScript (comportamiento).",
    "El **back-end** corre en el servidor: recibe tus peticiones, aplica las reglas y consulta la **base de datos**, donde se guardan usuarios, productos o mensajes.",
    "Casi todas las vulnerabilidades web aparecen en la frontera entre estas piezas: cuando el servidor confía en algo que vino del navegador."
  ],
  flow:["Navegador (HTML, CSS, JS)","Servidor (reglas)","Base de datos"],
  steps:["Lee el artículo de MDN «Cómo funciona la web» y haz la mini-web de la guía.","Haz la sala “Web Application Basics”.","Dibuja las tres piezas de una tienda en línea y qué datos pasan entre ellas."],
  hint:"Si dudas si algo es front-end o back-end, pregúntate: ¿lo puedo ver con Ctrl + U? Si sí, es front-end.",
  quiz:[
    {q:"¿Qué parte de una web corre en tu navegador?",o:["Back-end","Front-end","Base de datos","Servidor DNS"],a:1,e:"HTML, CSS y JavaScript corren en el navegador."},
    {q:"¿Dónde se guardan los usuarios de una tienda en línea?",o:["En el CSS","En la base de datos","En el navegador","En el router"],a:1,e:"La base de datos guarda la información permanente."},
    {q:"¿Dónde nacen muchas vulnerabilidades web?",o:["En el monitor","Cuando el servidor confía en lo que manda el navegador","En el wifi","En el teclado"],a:1,e:"Todo lo que llega del navegador debe validarse en el servidor."}
  ],
  cards:[["Front-end frente a back-end","Front-end: corre en el navegador. Back-end: corre en el servidor."],["Las tres piezas de una aplicación web","Navegador, servidor y base de datos."]],
  keys:["Front-end en el navegador; back-end en el servidor.","La base de datos guarda la información.","Vulnerabilidades: cuando el servidor confía en el navegador."]
},
{ id:"p2u18", mod:"Web", lvl:2, blocks:2, title:"SQL: el idioma de las bases de datos",
  goal:"Escribir consultas SQL básicas. Lo necesitarás para entender muchas vulnerabilidades web.",
  links:[["SQLBolt: lecciones interactivas gratis","https://sqlbolt.com/"]],
  concept:[
    "**SQL** es el lenguaje para pedir datos a una base de datos. La consulta más básica es `SELECT columnas FROM tabla WHERE condición`.",
    "`ORDER BY` ordena los resultados y `LIMIT` limita cuántos salen. `AND` y `OR` combinan condiciones.",
    "Entender bien SQL es lo que después te permitirá entender por qué ciertas webs son vulnerables y cómo se protegen."
  ],
  code:"SELECT nombre, correo\nFROM usuarios\nWHERE pais = 'RD' AND activo = 1\nORDER BY nombre\nLIMIT 10;",
  steps:["Haz las lecciones 1 a 6 de SQLBolt.","Explica en voz alta qué devuelve la consulta de ejemplo.","Escribe tú una consulta que saque los productos con precio mayor de 100, ordenados del más caro al más barato."],
  hint:"Para ordenar de mayor a menor, añade DESC después de la columna en ORDER BY.",
  quiz:[
    {q:"¿Qué palabra filtra filas en SQL?",o:["SELECT","FROM","WHERE","ORDER"],a:2,e:"WHERE indica la condición."},
    {q:"¿Cómo ordenas de mayor a menor?",o:["ORDER BY precio ASC","ORDER BY precio DESC","SORT precio","LIMIT DESC"],a:1,e:"DESC = descendente."},
    {q:"¿Qué hace LIMIT 10?",o:["Borra 10 filas","Devuelve como máximo 10 filas","Suma 10","Filtra por 10"],a:1,e:"Limita la cantidad de resultados."}
  ],
  cards:[["Estructura básica de una consulta SQL","SELECT columnas FROM tabla WHERE condición"],["Ordenar de mayor a menor en SQL","ORDER BY columna DESC"]],
  keys:["SELECT … FROM … WHERE …","ORDER BY ordena; DESC de mayor a menor.","LIMIT limita resultados."]
},
{ id:"p2u19", mod:"Web", lvl:3, blocks:2, title:"Burp Suite: mira tu propio tráfico web",
  goal:"Instalar Burp Suite Community y ver las peticiones que hace tu navegador.",
  links:[["Burp Suite Community (gratis)","https://portswigger.net/burp"],["PortSwigger Web Security Academy","https://portswigger.net/web-security"]],
  concept:[
    "**Burp Suite** es la herramienta principal de un auditor web. Funciona como un **proxy**: se coloca entre tu navegador y el servidor y te deja ver y modificar cada petición.",
    "La versión Community es gratuita. Trae su propio navegador ya configurado: en la pestaña **Proxy** pulsa “Open browser”.",
    "Úsalo solo con tus propias peticiones a los laboratorios de PortSwigger o TryHackMe, nunca para modificar peticiones a sitios reales."
  ],
  flow:["Navegador de Burp","Burp (proxy)","Servidor del laboratorio"],
  steps:["Instala Burp Suite Community en Windows.","Crea tu cuenta gratuita en PortSwigger Web Security Academy.","Abre el navegador de Burp, entra en la Academy y mira las peticiones en Proxy → HTTP history.","Encuentra una petición POST (por ejemplo, al iniciar sesión) y mira qué datos envía."],
  hint:"Si la página no carga, revisa que Intercept esté apagado: con Intercept encendido, Burp retiene cada petición hasta que la sueltes.",
  quiz:[
    {q:"¿Qué es un proxy en este contexto?",o:["Un antivirus","Un intermediario entre navegador y servidor","Una VPN","Un servidor DNS"],a:1,e:"Burp se coloca en medio para ver y modificar el tráfico."},
    {q:"La página no carga con Burp abierto. ¿Qué revisas primero?",o:["El wifi","Si Intercept está encendido","El antivirus","Reinstalar"],a:1,e:"Intercept retiene las peticiones hasta que las sueltas."},
    {q:"¿Dónde puedes usar Burp para modificar peticiones?",o:["En cualquier web","Solo en laboratorios o sistemas con permiso","En la web de tu colegio","En redes sociales"],a:1,e:"Modificar peticiones a sistemas ajenos sin permiso no está permitido."}
  ],
  cards:[["¿Qué es Burp Suite?","Un proxy para ver y modificar peticiones web."],["¿Qué hace Intercept en Burp?","Retiene cada petición hasta que la sueltes."]],
  keys:["Burp = proxy entre navegador y servidor.","Intercept retiene peticiones.","Solo en laboratorios o con permiso."]
},
{ id:"p2u20", mod:"Web", lvl:3, blocks:2, title:"Control de acceso: tus primeros laboratorios web",
  goal:"Entender el fallo web más común y resolver tus primeros laboratorios de PortSwigger.",
  links:[["Teoría y laboratorios de control de acceso","https://portswigger.net/web-security/access-control"],["OWASP Top 10 (edición 2025, en español)","https://top10.owasp.org/2025/es/0x00_2025-Introduction/"]],
  concept:[
    "El **control de acceso** decide quién puede hacer qué. Está roto cuando, por ejemplo, un usuario normal puede ver la página de administración o los datos de otro usuario.",
    "Es el número 1 del OWASP Top 10, tanto en la edición de 2021 como en la de 2025. La protección es siempre la misma: **el servidor comprueba los permisos en cada petición**, no solo esconde botones.",
    "Los laboratorios de PortSwigger están hechos para practicar esto legalmente. Lee la teoría antes de cada uno."
  ],
  flow:["Leer la teoría","Laboratorio Apprentice","Anotar la causa","Anotar la defensa"],
  steps:["Lee la página de teoría de control de acceso.","Resuelve los dos primeros laboratorios de nivel Apprentice. Si te atascas 20 minutos, lee la solución oficial y luego hazlo tú.","Para cada laboratorio, anota la causa del fallo y cómo se arreglaría."],
  hint:"Pregúntate en cada laboratorio: ¿qué está comprobando el servidor y qué no?",
  quiz:[
    {q:"¿Qué es un control de acceso roto?",o:["Una contraseña débil","Que un usuario pueda hacer o ver lo que no debería","Un servidor lento","Un virus"],a:1,e:"Fallan las reglas de quién puede hacer qué."},
    {q:"¿Cuál es la defensa correcta?",o:["Esconder el botón","Que el servidor compruebe los permisos en cada petición","Cambiar el color","Usar HTTPS"],a:1,e:"Esconder algo en la interfaz no lo protege."},
    {q:"¿Qué posición ocupa en el OWASP Top 10 (2021 y 2025)?",o:["1","3","7","10"],a:0,e:"Broken Access Control es el número 1."}
  ],
  cards:[["Defensa contra el control de acceso roto","El servidor comprueba los permisos en cada petición."],["Número 1 del OWASP Top 10 (2021 y 2025)","Control de acceso roto (Broken Access Control)."]],
  keys:["Control de acceso = quién puede hacer qué.","Esconder un botón no protege.","Es el n.º 1 del OWASP Top 10 (2021 y 2025)."]
},
{ id:"p2u21", mod:"Redes", lvl:3, blocks:2, title:"Wireshark: mira tu propio tráfico de red",
  goal:"Capturar y leer el tráfico de tu laptop, como hace un analista de redes.",
  links:[["Descargar Wireshark","https://www.wireshark.org/download.html"],["Sala “Traffic Analysis Essentials”",THM("trafficanalysisessentials")]],
  concept:[
    "**Wireshark** captura los paquetes que pasan por tu tarjeta de red y te deja verlos capa por capa: todo lo que estudiaste del modelo OSI, en vivo.",
    "Los **filtros de visualización** te dejan ver solo lo que buscas: `dns` muestra las consultas DNS, `tcp.port == 443` el tráfico HTTPS.",
    "Captura solo tu propio tráfico, en tu red. Capturar el tráfico de otras personas sin permiso no está permitido."
  ],
  flow:["Captura","Filtro dns","Consulta y respuesta","Ver las capas"],
  steps:["Instala Wireshark (en Windows instala también Npcap cuando te lo pregunte).","Empieza una captura en tu adaptador wifi y abre wikipedia.org.","Filtra por dns y encuentra la consulta y la respuesta de wikipedia.org.","Haz la sala “Traffic Analysis Essentials”."],
  hint:"Si no ves nada al filtrar, comprueba que capturas en el adaptador correcto (el que muestra actividad).",
  quiz:[
    {q:"¿Qué filtro muestra solo las consultas DNS?",o:["http","dns","ip","tcp.syn"],a:1,e:"El filtro dns muestra ese protocolo."},
    {q:"¿Qué necesita Wireshark en Windows para capturar?",o:["Npcap","Java","Python","Nada"],a:0,e:"Npcap es el controlador de captura en Windows."},
    {q:"¿Qué tráfico puedes capturar?",o:["El de cualquier red","Solo el tuyo o con permiso","El de tus vecinos","El de tu colegio"],a:1,e:"Capturar tráfico ajeno sin permiso no está permitido."}
  ],
  cards:[["Filtro de Wireshark para DNS","dns"],["Filtro de Wireshark para el puerto 443","tcp.port == 443"]],
  keys:["Wireshark muestra los paquetes capa por capa.","Filtros: dns, tcp.port == 443.","Solo tu propio tráfico."]
},
{ id:"p2u22", mod:"Python", lvl:4, blocks:2, title:"Python 5: tu herramienta de contraseñas",
  goal:"Escribir una herramienta que evalúe contraseñas y calcule su hash.",
  links:[["Documentación de hashlib","https://docs.python.org/3/library/hashlib.html"]],
  concept:[
    "Vas a juntar todo lo de Python en una herramienta defensiva. Esta vez el ejemplo viene **incompleto a propósito**: tienes el esqueleto y tú escribes las partes marcadas.",
    "`hashlib` es la librería de Python para calcular hashes. `hashlib.sha256(texto.encode()).hexdigest()` devuelve el SHA-256 en texto."
  ],
  code:"import hashlib\n\ndef puntuacion(clave):\n    puntos = 0\n    if len(clave) >= 12:\n        puntos += 1\n    # TU PARTE: suma 1 si tiene mayúsculas, 1 si tiene números\n    # y 1 si tiene símbolos (pista: any() y str.isupper())\n    return puntos\n\nclave = input(\"Contraseña a evaluar: \")\nprint(\"Puntuación:\", puntuacion(clave), \"de 4\")\nprint(\"SHA-256:\", hashlib.sha256(clave.encode()).hexdigest())",
  steps:["Copia el esqueleto en claves.py y ejecútalo.","Completa las tres comprobaciones que faltan.","Añade un mensaje: débil (0-1), media (2-3) o fuerte (4).","Prueba con 5 contraseñas inventadas, nunca con las tuyas reales."],
  hint:"any(c.isupper() for c in clave) devuelve True si al menos una letra es mayúscula.",
  quiz:[
    {q:"¿Qué devuelve hexdigest()?",o:["La contraseña original","El hash en texto hexadecimal","Un número entero","Un error"],a:1,e:"Devuelve el hash como texto en hexadecimal."},
    {q:"¿Qué hace any(c.isdigit() for c in clave)?",o:["Cuenta los números","Dice si hay al menos un número","Borra los números","Ordena"],a:1,e:"any devuelve True si alguno cumple la condición."},
    {q:"¿Por qué no pruebas con tus contraseñas reales?",o:["Porque falla el programa","Porque podrían quedar guardadas o a la vista","Da igual","Porque Python no deja"],a:1,e:"Nunca pongas tus contraseñas reales en pruebas."}
  ],
  cards:[["Calcular SHA-256 en Python","hashlib.sha256(texto.encode()).hexdigest()"],["¿Qué hace any()?","Devuelve True si al menos un elemento cumple la condición."]],
  keys:["hashlib calcula hashes.","any() comprueba si alguno cumple.","Nunca pruebes con contraseñas reales."]
},
{ id:"p2u23", mod:"Práctica", lvl:3, blocks:3, title:"picoCTF: llega a 20 retos",
  goal:"Practicar mezclando categorías hasta sumar 20 retos resueltos en total.",
  links:[["Biblioteca de retos picoCTF","https://learn.cylabacademy.org/library"]],
  concept:[
    "Llevas meses aprendiendo piezas sueltas. Ahora las mezclas: General Skills, Web, Cryptography y Forensics.",
    "Mismas reglas de siempre: 20 minutos sin ayuda, luego pista; anota cada reto en tu cuaderno.",
    "Empieza por Difficulty: Easy en cada categoría y sube a Medium poco a poco."
  ],
  steps:["Mira cuántos retos llevas resueltos en tu perfil de CyLab Academy (antes picoCTF).","Bloque 1: resuelve retos mezclando categorías.","Bloque 2: sigue mezclando.","Bloque 3: termina hasta llegar a 20 en total."],
  hint:"Si una categoría se te resiste, haz uno fácil de otra y vuelve después: mezclar ayuda.",
  quiz:[
    {q:"¿Por qué mezclar categorías en vez de hacer una sola?",o:["Es más rápido","Te enseña a reconocer qué tipo de problema tienes","Da más puntos","No hay diferencia"],a:1,e:"La práctica mezclada mejora la capacidad de identificar el problema."},
    {q:"Te dan una imagen y el reto dice que hay algo escondido. ¿Qué categoría es probablemente?",o:["Web","Forensics","Cryptography","General Skills"],a:1,e:"Analizar archivos para encontrar datos ocultos es forense."},
    {q:"Llevas 20 minutos atascado. ¿Qué haces?",o:["Seguir horas","Pedir una pista","Dejarlo para siempre","Copiar la solución entera"],a:1,e:"La pista te desbloquea sin quitarte el aprendizaje."}
  ],
  cards:[["¿Qué categoría analiza archivos para encontrar datos ocultos?","Forensics."]],
  keys:["Mezclar categorías enseña a reconocer problemas.","Forensics = analizar archivos."]
},
{ id:"p2u24", mod:"Proyecto", lvl:4, blocks:2, title:"Proyecto: tu primer writeup",
  goal:"Escribir la solución completa de un reto como lo haría un profesional.",
  links:[],
  concept:[
    "Un **writeup** explica cómo resolviste un reto: qué viste, qué probaste, qué falló y qué funcionó. Es la base de los informes profesionales y de tu futuro portafolio.",
    "Estructura: **1** el reto y su objetivo, **2** reconocimiento (qué te dieron), **3** intentos fallidos y por qué, **4** la solución paso a paso, **5** qué aprendiste y cómo se defendería.",
    "Guárdalo en tu carpeta Cuaderno-hacker. Publícalo solo si las reglas de la plataforma lo permiten."
  ],
  flow:["Reto","Reconocimiento","Intentos","Solución","Lección y defensa"],
  steps:["Elige el reto de picoCTF que más te enseñó.","Escribe el writeup con las 5 partes.","Léelo en voz alta como si se lo explicaras a otra persona y corrige lo confuso."],
  hint:"Incluye los intentos fallidos: muestran tu forma de pensar, que es lo que más valoran las empresas.",
  quiz:[
    {q:"¿Por qué incluir los intentos fallidos en un writeup?",o:["Para alargarlo","Porque muestran tu forma de razonar","No se deben incluir","Por obligación"],a:1,e:"Tu proceso de pensamiento es lo más valioso."},
    {q:"¿Qué parte explica cómo protegerse?",o:["El reconocimiento","La lección y defensa","Los intentos","El objetivo"],a:1,e:"Un buen writeup termina con la defensa."},
    {q:"¿Cuándo puedes publicar un writeup?",o:["Siempre","Cuando las reglas de la plataforma lo permiten","Nunca","Solo en redes sociales"],a:1,e:"Algunas plataformas prohíben publicar soluciones de retos activos."}
  ],
  cards:[["Las 5 partes de un writeup","Reto, reconocimiento, intentos, solución, lección y defensa."]],
  keys:["Writeup: reto, reconocimiento, intentos, solución, defensa.","Publicar solo si las reglas lo permiten."]
}
];
