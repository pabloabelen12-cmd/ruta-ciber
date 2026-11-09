/* Contenido de la Fase 1: 30 sesiones. Cada sesión: concepto, pasos, comandos, quiz, tarjetas y puntos clave. */
const LESSONS = [
/* ───────── SEMANA 1 ───────── */
{ id:"s01", w:1, day:"Lun", title:"Monta tu laboratorio",
  goal:"Tener todas tus cuentas listas y entender qué hace un hacker ético.",
  links:[["TryHackMe (crear cuenta)","https://tryhackme.com"],["CyLab Academy, antes picoCTF (crear cuenta)","https://learn.cylabacademy.org/"]],
  concept:[
    "Un **hacker ético** hace lo mismo que un atacante, pero con permiso por escrito del dueño del sistema. Su trabajo es encontrar los fallos antes que los criminales y explicar cómo arreglarlos.",
    "En las empresas hay dos equipos: el **red team** (equipo rojo) simula ataques reales y el **blue team** (equipo azul) vigila, detecta y responde. Tú apuntas al rojo, pero vas a aprender los dos.",
    "Todo lo que practiques será en plataformas creadas para eso. Atacar un sistema sin permiso, aunque sea “para probar”, es un delito."
  ],
  flow:["Te contratan","Firmas el permiso","Atacas el sistema","Encuentras fallos","Entregas el informe"],
  steps:[
    "Crea tu cuenta en TryHackMe con tu correo.",
    "Crea tu cuenta en CyLab Security Academy (el nuevo nombre de picoCTF). Si ya tenías cuenta de picoCTF, entra con ella.",
    "En Documentos de Windows, crea la carpeta “Cuaderno-hacker”. Ahí guardarás notas y capturas.",
    "Abre la pestaña Tarjetas de esta app: ahí vivirán tus tarjetas de repaso. No necesitas instalar nada más.",
    "Escribe en tu cuaderno qué crees que hace un hacker ético en un día normal. Lo releerás al final de la Fase 1."
  ],
  hint:"Si TryHackMe te pide un plan de pago, elige el gratuito. Todo lo de la Fase 1 funciona sin pagar.",
  quiz:[
    {q:"¿Qué separa a un hacker ético de un criminal?", o:["Usa herramientas diferentes","Tiene permiso por escrito del dueño del sistema","Solo ataca empresas grandes","Trabaja de noche"], a:1, e:"Las técnicas pueden ser las mismas. La diferencia es la autorización: sin permiso escrito, es un delito."},
    {q:"¿Qué hace el blue team?", o:["Simula ataques","Vende software de seguridad","Vigila, detecta y responde a los ataques","Escribe virus"], a:2, e:"El blue team defiende. El red team es el que simula ataques."},
    {q:"¿Dónde puedes practicar ataques legalmente?", o:["En el wifi del vecino","En la página de tu colegio","En plataformas como TryHackMe y picoCTF","En cualquier sitio si no robas nada"], a:2, e:"Las plataformas de práctica te dan permiso explícito sobre sus máquinas. En cualquier otro sitio necesitas autorización escrita."}
  ],
  cards:[["¿Qué necesita un hacker ético antes de atacar un sistema?","Permiso por escrito del dueño del sistema."],["¿Qué hace el red team?","Simula ataques reales para encontrar fallos."],["¿Qué hace el blue team?","Vigila, detecta y responde a los ataques."]],
  keys:["Un hacker ético ataca solo con permiso por escrito.","Red team simula ataques; blue team detecta y defiende.","Se practica solo en plataformas preparadas para eso."]
},
{ id:"s02", w:1, day:"Mar", title:"Pre Security: primera sala",
  goal:"Empezar la ruta Pre Security y aprender la tríada CIA, la base de toda la seguridad.",
  links:[["Ruta Pre Security en TryHackMe","https://tryhackme.com/path/outline/presecurity"]],
  concept:[
    "Toda la seguridad protege tres cosas. Se llaman la **tríada CIA** por sus siglas en inglés:",
    "**Confidencialidad:** que solo lea la información quien debe. **Integridad:** que nadie la cambie sin permiso. **Disponibilidad:** que funcione cuando la necesitas.",
    "Cada ataque rompe al menos una de las tres. Cuando veas un ataque nuevo, pregúntate siempre cuál rompe."
  ],
  flow:["Confidencialidad","Integridad","Disponibilidad"],
  steps:[
    "Entra en la ruta Pre Security y abre la primera sala.",
    "Responde las preguntas de cada tarea tú solo antes de mirar pistas.",
    "Anota en tu cuaderno un ejemplo de la vida real para cada letra de la tríada CIA."
  ],
  hint:"Las respuestas de TryHackMe suelen estar en el texto de la misma tarea. Vuelve a leer solo el párrafo de la pregunta.",
  quiz:[
    {q:"Alguien lee tus mensajes privados sin permiso. ¿Qué rompe?", o:["Confidencialidad","Integridad","Disponibilidad"], a:0, e:"Leer lo que no debes es romper la confidencialidad."},
    {q:"Alguien cambia la nota de un examen en el sistema del colegio. ¿Qué rompe?", o:["Confidencialidad","Integridad","Disponibilidad"], a:1, e:"Modificar datos sin permiso rompe la integridad."},
    {q:"Una página se cae porque la llenan de tráfico falso. ¿Qué rompe?", o:["Confidencialidad","Integridad","Disponibilidad"], a:2, e:"Si el servicio no funciona cuando lo necesitas, se rompe la disponibilidad."}
  ],
  cards:[["¿Qué significa la C de la tríada CIA?","Confidencialidad: que solo lea la información quien debe."],["¿Qué significa la I de la tríada CIA?","Integridad: que nadie cambie la información sin permiso."],["¿Qué significa la A de la tríada CIA?","Disponibilidad (Availability): que el sistema funcione cuando se necesita."]],
  keys:["La tríada CIA: confidencialidad, integridad y disponibilidad.","Cada ataque rompe al menos una de las tres.","Leer sin permiso = confidencialidad; cambiar = integridad; tumbar = disponibilidad."]
},
{ id:"s03", w:1, day:"Mié", title:"Pre Security: segunda sala",
  goal:"Entender qué hay dentro de una computadora y por qué Linux importa tanto en seguridad.",
  links:[["Ruta Pre Security en TryHackMe","https://tryhackme.com/path/outline/presecurity"]],
  concept:[
    "Una computadora tiene un **procesador (CPU)** que ejecuta instrucciones, **memoria RAM** que guarda lo que estás usando ahora y se borra al apagar, y **almacenamiento** (disco) que guarda los archivos aunque apagues.",
    "El **sistema operativo** (Windows, Linux, macOS) es el programa que maneja todo eso y te deja usarlo.",
    "La mayoría de los servidores de internet usan **Linux**. Por eso un hacker ético tiene que moverse en Linux con soltura, aunque en su casa use Windows."
  ],
  flow:["Tú","Programas","Sistema operativo","CPU, RAM y disco"],
  steps:[
    "Haz la segunda sala de la ruta Pre Security.",
    "En Windows, abre el Administrador de tareas (Ctrl + Shift + Esc) y mira la pestaña Rendimiento: CPU, memoria y disco en vivo.",
    "Anota en tu cuaderno la diferencia entre RAM y disco con tus palabras."
  ],
  cmds:[["Ver información de tu equipo en PowerShell","systeminfo"]],
  hint:"Si una pregunta te pide un dato de la máquina virtual, asegúrate de haberla iniciado con el botón verde de la tarea.",
  quiz:[
    {q:"¿Qué pasa con lo que está en la RAM cuando apagas la computadora?", o:["Se guarda en la nube","Se borra","Pasa al procesador","Nada, se queda igual"], a:1, e:"La RAM es memoria temporal: se borra al apagar. El disco es lo que guarda los archivos."},
    {q:"¿Qué hace el sistema operativo?", o:["Solo muestra el escritorio","Maneja el hardware y te deja usar los programas","Protege contra virus y nada más","Conecta a internet"], a:1, e:"Es el intermediario entre los programas y el hardware."},
    {q:"¿Por qué un hacker ético debe saber Linux?", o:["Porque es más bonito","Porque la mayoría de los servidores lo usan","Porque Windows es ilegal","Porque no tiene virus"], a:1, e:"La mayoría de los servidores de internet corren Linux, así que ahí está gran parte de lo que vas a analizar."}
  ],
  cards:[["Diferencia entre RAM y disco","La RAM guarda lo que usas ahora y se borra al apagar; el disco guarda archivos de forma permanente."],["¿Qué sistema operativo usan la mayoría de los servidores?","Linux."]],
  keys:["CPU ejecuta, RAM guarda lo temporal, disco guarda lo permanente.","El sistema operativo conecta programas y hardware.","La mayoría de los servidores usan Linux."]
},
{ id:"s04", w:1, day:"Jue", title:"Recordar y fabricar tarjetas",
  goal:"Aprender a estudiar con el método de esta app: recordar sin mirar y crear buenas tarjetas.",
  links:[],
  concept:[
    "Releer apuntes da la sensación de que sabes, pero no fija la memoria. Lo que la fija es el **esfuerzo de recordar**: intentar sacar la respuesta de tu cabeza antes de mirarla.",
    "Por eso esta app te hace recordar al empezar cada sesión y te da tarjetas que vuelven justo cuando estás a punto de olvidarlas. Eso se llama **repaso espaciado**.",
    "Una buena tarjeta tiene **una sola pregunta corta** con una respuesta clara. “Explica las redes” es mala. “¿Qué puerto usa HTTPS?” es buena."
  ],
  steps:[
    "Sin mirar nada, escribe en tu cuaderno 5 cosas que aprendiste esta semana.",
    "Ahora compara con tus notas y marca lo que te faltó.",
    "Crea en la pestaña Tarjetas al menos 3 tarjetas propias con lo que olvidaste.",
    "Haz un repaso completo de las tarjetas que tengas pendientes."
  ],
  hint:"Si no se te ocurre una tarjeta, convierte cada punto que olvidaste en una pregunta de una línea.",
  quiz:[
    {q:"¿Qué técnica tiene más evidencia para recordar a largo plazo?", o:["Releer los apuntes","Subrayar","Ponerte a prueba sin mirar","Ver el mismo video dos veces"], a:2, e:"Ponerte a prueba (práctica de recuerdo) y repartir el estudio en el tiempo son las dos técnicas mejor calificadas."},
    {q:"¿Cuál es la mejor tarjeta?", o:["Explica todo sobre redes","¿Qué puerto usa HTTPS?","Redes, puertos y protocolos","Ver capítulo 3"], a:1, e:"Una pregunta corta con una respuesta concreta."},
    {q:"¿Por qué las tarjetas vuelven en días distintos?", o:["Por error de la app","Para repasar justo antes de olvidar","Para que estudies más horas","Porque son aleatorias"], a:1, e:"El repaso espaciado te muestra cada tarjeta cuando está a punto de olvidarse, que es cuando más fija."}
  ],
  cards:[["¿Qué fija más la memoria: releer o recordar sin mirar?","Recordar sin mirar (práctica de recuerdo)."],["¿Cómo es una buena tarjeta?","Una sola pregunta corta con una respuesta clara."]],
  keys:["Recordar sin mirar fija más que releer.","El repaso espaciado muestra cada tarjeta justo antes de olvidarla.","Una tarjeta = una pregunta corta."]
},
{ id:"s05", w:1, day:"Sáb", title:"La terminal desde cero", cmdsShell:"linux",
  goal:"Aprender a moverte y leer archivos en una terminal Linux, y resolver tu primer reto con lo aprendido.",
  sat:true,
  links:[["Biblioteca de retos picoCTF (y su terminal)","https://learn.cylabacademy.org/library"],["CTF Primer, capítulo 2: The Shell","https://primer.picoctf.org/#_the_shell"]],
  concept:[
    "La **terminal** (también llamada shell o consola) es una forma de usar la computadora **escribiendo órdenes** en vez de hacer clic. Es la herramienta número uno de un hacker: casi todos los servidores del mundo usan Linux y se manejan así.",
    "Cada orden es un **comando**: primero el nombre, después las **opciones** (empiezan por guion) y después los **argumentos** (sobre qué actúa). En `ls -l Documentos`: `ls` es el comando, `-l` la opción y `Documentos` el argumento.",
    "El texto que aparece antes del cursor es el **prompt**, por ejemplo `pablo@webshell:~$`. La `~` significa **tu carpeta personal**. Una **ruta** es la dirección de un archivo: `/` es la raíz (la carpeta de más arriba) y las carpetas se separan con `/`, como `/home/pablo/practica`.",
    "Linux distingue mayúsculas: `Flag` y `flag` son archivos distintos. Y no hay papelera: lo que borras con `rm` desaparece para siempre.",
    "No tienes que instalar nada: CyLab te da una terminal Linux dentro del navegador. Se abre con el botón **>_** del espacio de trabajo."
  ],
  flow:["Escribes un comando","Pulsas Enter","Lees la respuesta","Siguiente comando"],
  steps:[
    "Abre la biblioteca de retos, entra en cualquier reto con **Open in Workspace** y pulsa **>_** para abrir la terminal. La primera guía de abajo te lo explica.",
    "Lee el capítulo 2 del CTF Primer (enlace 2, o la pestaña **CTF Primer** dentro del workspace). Si el inglés pesa, usa el botón de traducir de Brave.",
    "Haz el **ejercicio guiado** de abajo en la terminal, comando por comando, leyendo qué responde cada uno.",
    "Resuelve tu primer reto, **Obedient Cat**, siguiendo su guía. Solo necesitas wget, ls y cat.",
    "Sin mirar, escribe en tu cuaderno qué hace cada comando de hoy. Luego compara con la lista de comandos."
  ],
  cmds:[["Dónde estoy","pwd"],["Qué hay aquí","ls"],["Ver también archivos ocultos y detalles","ls -la"],["Crear una carpeta","mkdir practica"],["Entrar a una carpeta","cd practica"],["Subir a la carpeta de arriba","cd .."],["Volver a tu carpeta personal","cd ~"],["Crear un archivo con texto","echo hola > saludo.txt"],["Leer un archivo","cat saludo.txt"],["Copiar un archivo","cp saludo.txt copia.txt"],["Descargar un archivo de internet","wget dirección-del-archivo"],["Ver el manual de un comando (sal con q)","man ls"],["Limpiar la pantalla","clear"]],
  hint:"Si un comando se queda colgado, pulsa Ctrl + C para cancelarlo. Con las flechas ↑ y ↓ recuperas los comandos que ya escribiste, y con Tab la terminal completa los nombres.",
  quiz:[
    {q:"¿Qué hace pwd?", o:["Cambia la contraseña","Muestra en qué carpeta estás","Lista los archivos","Borra la pantalla"], a:1, e:"pwd (print working directory) te dice la ruta de la carpeta en la que estás."},
    {q:"Estás en /home/pablo/practica. ¿Adónde te lleva cd ..?", o:["A /","A /home/pablo","A /home/pablo/practica","Da un error"], a:1, e:"Los dos puntos .. son la carpeta de arriba."},
    {q:"¿Qué muestra ls -la que ls no muestra?", o:["Nada distinto","Los archivos ocultos (empiezan por punto) y sus detalles","Solo las carpetas","El contenido de los archivos"], a:1, e:"-a muestra los ocultos y -l los detalles: permisos, tamaño y fecha."}
  ],
  cards:[["¿Qué hace pwd?","Muestra la carpeta en la que estás."],["¿Cómo subes a la carpeta de arriba?","cd .."],["¿Qué significa ~ en la terminal?","Tu carpeta personal."],["¿Cómo ves los archivos ocultos?","ls -la"],["¿Qué tecla autocompleta nombres en la terminal?","Tab"],["¿Cómo cancelas un comando colgado?","Ctrl + C"]],
  keys:["Comando + opciones + argumentos.","pwd dónde estoy, ls qué hay, cd moverme, cat leer.","Tab autocompleta, Ctrl + C cancela, ↑ repite."]
},
/* ───────── SEMANA 2 ───────── */
{ id:"s06", w:2, day:"Lun", title:"What Is Networking?",
  goal:"Entender qué es una red y cómo se identifica cada dispositivo.",
  links:[["Sala “What Is Networking?”","https://tryhackme.com/room/whatisnetworking"]],
  concept:[
    "Una **red** son dispositivos conectados para compartir información. **Internet** es una red de redes.",
    "Cada dispositivo tiene una **dirección IP**, como la dirección de una casa, que puede cambiar. La **dirección MAC** viene grabada en la tarjeta de red, como el número de serie.",
    "Las IP que empiezan por `192.168.`, `10.` o `172.16.` a `172.31.` son **privadas**: solo existen dentro de tu casa o empresa. El **router** traduce entre tu red privada e internet."
  ],
  flow:["Tu laptop","Router de casa","Tu proveedor de internet","Internet","Servidor"],
  steps:[
    "Haz la sala “What Is Networking?” en TryHackMe.",
    "Abre PowerShell y ejecuta ipconfig /all. Busca tu dirección IPv4 y tu dirección física (MAC).",
    "Ejecuta ping google.com y mira cuánto tarda la respuesta.",
    "Anota tu IP privada y explica en tu cuaderno por qué es privada."
  ],
  cmds:[["Ver tu IP y tu MAC","ipconfig /all"],["Comprobar si un equipo responde","ping google.com"]],
  hint:"En ipconfig, busca el adaptador que dice Wi-Fi o Ethernet, según cómo estés conectado.",
  quiz:[
    {q:"¿Qué identifica a la tarjeta de red de forma física?", o:["La dirección IP","La dirección MAC","El nombre del equipo","El puerto"], a:1, e:"La MAC viene grabada en la tarjeta de red. La IP se asigna y puede cambiar."},
    {q:"¿Cuál de estas IP es privada?", o:["8.8.8.8","192.168.1.20","142.250.80.46","1.1.1.1"], a:1, e:"Las que empiezan por 192.168. son privadas y solo existen dentro de una red local."},
    {q:"¿Qué protocolo usa ping?", o:["HTTP","ICMP","DNS","SSH"], a:1, e:"Ping envía mensajes ICMP para ver si un equipo responde."}
  ],
  cards:[["Diferencia entre IP y MAC","La IP es la dirección lógica que puede cambiar; la MAC está grabada en la tarjeta de red."],["Rangos de IP privadas","10.x.x.x, 172.16 a 172.31.x.x y 192.168.x.x"],["¿Qué protocolo usa ping?","ICMP."]],
  keys:["IP = dirección lógica; MAC = dirección física de la tarjeta.","192.168.x.x, 10.x.x.x y 172.16-31.x.x son privadas.","Ping usa ICMP."]
},
{ id:"s07", w:2, day:"Mar", title:"Intro to Networking",
  goal:"Conocer el modelo OSI: las 7 capas por las que pasa cada mensaje.",
  links:[["Sala “Introductory Networking” (antes Intro to Networking)","https://tryhackme.com/room/introtonetworking"]],
  concept:[
    "El **modelo OSI** divide la comunicación en 7 capas. Cada capa tiene un trabajo y le pasa el mensaje a la siguiente.",
    "De arriba abajo: **7 Aplicación** (HTTP), **6 Presentación** (formato, cifrado), **5 Sesión**, **4 Transporte** (TCP, UDP), **3 Red** (IP), **2 Enlace de datos** (MAC), **1 Física** (cables, ondas).",
    "Al enviar, cada capa añade su propia cabecera al mensaje. Eso se llama **encapsulación**. Al recibir, se quitan en orden inverso."
  ],
  flow:["7 Aplicación","4 Transporte","3 Red","2 Enlace","1 Física"],
  steps:[
    "Haz la sala “Intro to Networking”.",
    "Inventa una frase para recordar las 7 capas en orden y escríbela en tu cuaderno.",
    "Para cada capa, anota un ejemplo de algo que trabaje en ella."
  ],
  hint:"Si te pierdes con las capas, piensa en una carta: escribes el texto (aplicación), la metes en un sobre con dirección (red) y el cartero la lleva (física).",
  quiz:[
    {q:"¿En qué capa OSI trabaja la dirección IP?", o:["Capa 2","Capa 3","Capa 4","Capa 7"], a:1, e:"IP es la capa 3, la de red."},
    {q:"¿En qué capa trabajan TCP y UDP?", o:["Capa 1","Capa 3","Capa 4","Capa 6"], a:2, e:"TCP y UDP son la capa 4, la de transporte."},
    {q:"¿Qué es la encapsulación?", o:["Cifrar un mensaje","Que cada capa añada su cabecera al enviar","Bloquear un puerto","Comprimir un archivo"], a:1, e:"Al bajar por las capas, cada una envuelve el mensaje con su información."}
  ],
  cards:[["Las 7 capas OSI de arriba abajo","Aplicación, Presentación, Sesión, Transporte, Red, Enlace de datos, Física."],["¿En qué capa OSI está IP?","Capa 3, red."],["¿En qué capa OSI están TCP y UDP?","Capa 4, transporte."]],
  keys:["OSI tiene 7 capas: aplicación arriba, física abajo.","IP = capa 3; TCP/UDP = capa 4; HTTP = capa 7.","Encapsulación: cada capa añade su cabecera."]
},
{ id:"s08", w:2, day:"Mié", title:"Networking Concepts, primera mitad",
  goal:"Entender la diferencia entre TCP y UDP y cómo empieza una conexión.",
  links:[["Sala “Networking Concepts”","https://tryhackme.com/room/networkingconcepts"]],
  concept:[
    "**TCP** es fiable: confirma que cada pedazo llegó y lo reenvía si se pierde. Lo usan la web, el correo y las descargas.",
    "**UDP** es rápido pero no confirma nada. Lo usan las videollamadas, los juegos en línea y el streaming, donde llegar a tiempo importa más que llegar todo.",
    "Una conexión TCP empieza con el **saludo de tres pasos**: el cliente manda **SYN**, el servidor responde **SYN-ACK** y el cliente cierra con **ACK**.",
    "Tanto TCP como UDP usan **puertos**: números del 0 al 65535 que indican a qué programa de la computadora va cada mensaje. Si la IP es la dirección del edificio, el puerto es el número del apartamento."
  ],
  flow:["Cliente: SYN","Servidor: SYN-ACK","Cliente: ACK","Conexión abierta"],
  steps:[
    "Haz la primera mitad de “Networking Concepts”.",
    "Dibuja en tu cuaderno el saludo de tres pasos con flechas.",
    "Escribe dos aplicaciones que usen TCP y dos que usen UDP, y por qué."
  ],
  hint:"Para recordar el saludo: “¿Hola?” (SYN), “Hola, ¿me oyes?” (SYN-ACK), “Sí” (ACK).",
  quiz:[
    {q:"¿Cuál es el orden del saludo de TCP?", o:["ACK, SYN, SYN-ACK","SYN, SYN-ACK, ACK","SYN, ACK, FIN","SYN-ACK, SYN, ACK"], a:1, e:"Primero SYN, luego SYN-ACK y por último ACK."},
    {q:"¿Qué protocolo suele usar una videollamada?", o:["TCP","UDP","FTP","SMTP"], a:1, e:"UDP prioriza la velocidad. Perder un fotograma importa menos que llegar tarde."},
    {q:"¿Qué hace TCP si se pierde un pedazo?", o:["Nada","Lo reenvía","Cierra la conexión","Cambia a UDP"], a:1, e:"TCP confirma cada pedazo y reenvía lo que se pierde."}
  ],
  cards:[["Saludo de tres pasos de TCP","SYN, SYN-ACK, ACK."],["¿Cuándo se usa UDP en vez de TCP?","Cuando la velocidad importa más que recibirlo todo: videollamadas, juegos, streaming."]],
  keys:["TCP confirma y reenvía; UDP es rápido sin confirmar.","Saludo TCP: SYN, SYN-ACK, ACK.","Videollamadas y juegos suelen usar UDP."]
},
{ id:"s09", w:2, day:"Jue", title:"Networking Concepts, segunda mitad y tu dibujo",
  goal:"Conocer los puertos más importantes y dibujar el viaje de un mensaje.",
  links:[["Sala “Networking Concepts”","https://tryhackme.com/room/networkingconcepts"]],
  concept:[
    "Un **puerto** es como el número de apartamento dentro de un edificio (la IP). Hay 65 536 puertos, del 0 al 65535.",
    "Los que más vas a ver: **22** SSH, **53** DNS, **80** HTTP, **443** HTTPS. Cuando un atacante escanea un equipo, busca qué puertos están abiertos para saber qué servicios hay."
  ],
  flow:["IP del servidor","Puerto 443","Servicio HTTPS","Página web"],
  steps:[
    "Termina “Networking Concepts”.",
    "En PowerShell comprueba que el puerto 443 de google.com responde.",
    "En una hoja, dibuja a mano el camino de un mensaje de WhatsApp desde tu teléfono hasta el de otra persona. Usa lo que sabes de IP, router, capas y TCP.",
    "Toma una foto del dibujo y guárdala en tu carpeta Cuaderno-hacker."
  ],
  cmds:[["Probar si un puerto responde","Test-NetConnection google.com -Port 443"],["Ver las conexiones abiertas de tu laptop","netstat -an"]],
  hint:"En Test-NetConnection busca la línea TcpTestSucceeded. Si dice True, el puerto está abierto.",
  quiz:[
    {q:"¿Qué puerto usa HTTPS?", o:["80","22","443","53"], a:2, e:"HTTPS usa el 443; HTTP sin cifrar usa el 80."},
    {q:"¿Qué servicio suele estar en el puerto 22?", o:["DNS","SSH","Correo","HTTP"], a:1, e:"SSH, el acceso remoto por terminal, usa el 22."},
    {q:"¿Para qué escanea puertos un atacante?", o:["Para acelerar la red","Para saber qué servicios tiene un equipo","Para cerrar los puertos","Para cambiar la IP"], a:1, e:"Cada puerto abierto es un servicio que se puede analizar."}
  ],
  cards:[["Puerto de HTTPS","443"],["Puerto de HTTP","80"],["Puerto de SSH","22"],["Puerto de DNS","53"]],
  keys:["Puertos clave: 22 SSH, 53 DNS, 80 HTTP, 443 HTTPS.","Hay 65 536 puertos (0 a 65535).","Escanear puertos revela qué servicios hay."]
},
{ id:"s10", w:2, day:"Sáb", title:"Terminal 2: hablar con servidores", cmdsShell:"linux",
  goal:"Conectarte a servidores con nc y ssh, ejecutar programas descargados y repasar la semana.",
  sat:true,
  links:[["Biblioteca de retos picoCTF","https://learn.cylabacademy.org/library"],["CyberChef","https://gchq.github.io/CyberChef/"]],
  concept:[
    "`nc` (**netcat**) abre una conexión con un **servidor** en un **puerto** y te deja leer lo que responde y escribirle. Es como llamar por teléfono a un programa: `nc servidor puerto`. Ya sabes qué es un puerto por esta semana de redes.",
    "`ssh` te da una terminal completa **dentro de otra computadora**: `ssh usuario@servidor -p puerto`. Al escribir la contraseña no se ve nada: es normal, por seguridad. Para salir escribes `exit`.",
    "Las computadoras guardan cada letra como un número: es el código **ASCII**. 65 es la A, 66 la B, 97 la a. Muchos retos te dan números que en realidad son letras.",
    "Un programa descargado no se puede ejecutar hasta darle permiso: `chmod +x archivo`. Después se ejecuta con `./archivo`. El `./` significa «el programa que está en esta carpeta»."
  ],
  flow:["Tu terminal","nc o ssh","Servidor del reto","Lees la respuesta","Flag"],
  steps:[
    "Bloque 1 (50 min): resuelve **Nice netcat…** y **Magikarp Ground Mission** siguiendo sus guías.",
    "Si te sobra tiempo, resuelve **Wave a flag**.",
    "Descanso de 15 minutos lejos de la pantalla.",
    "Bloque 2 (50 min): repasa todas tus tarjetas pendientes y crea 3 nuevas con los comandos de esta semana."
  ],
  cmds:[["Conectarte a un servicio","nc servidor puerto"],["Entrar a otra máquina","ssh usuario@servidor -p puerto"],["Salir de esa máquina","exit"],["Dar permiso de ejecución","chmod +x archivo"],["Ejecutar un programa de esta carpeta","./archivo"],["Pedirle ayuda a un programa","./archivo -h"]],
  hint:"Si nc se queda en silencio, el servidor espera que escribas algo. Si ya terminó de hablar, pulsa Ctrl + C para cortar.",
  quiz:[
    {q:"¿Qué hace nc servidor.net 1234?", o:["Descarga un archivo","Abre una conexión con ese servidor en el puerto 1234","Cambia la contraseña","Apaga el servidor"], a:1, e:"netcat conecta con un servidor y un puerto para hablar con el programa que escucha ahí."},
    {q:"¿Qué letra es el 65 en ASCII?", o:["a","A","6","Z"], a:1, e:"65 es la A mayúscula; la a minúscula es 97."},
    {q:"Descargas un programa y al ejecutarlo dice Permission denied. ¿Qué haces?", o:["Lo borras","chmod +x programa","cd programa","cat programa"], a:1, e:"chmod +x le da permiso de ejecución."}
  ],
  cards:[["Comando para conectar con un servidor y un puerto","nc servidor puerto"],["Comando para entrar a otra máquina","ssh usuario@servidor -p puerto"],["¿Qué letra es 65 en ASCII?","A"],["¿Cómo haces ejecutable un archivo?","chmod +x archivo"],["¿Qué significa ./ delante de un programa?","Que está en la carpeta actual."]],
  keys:["nc conecta con un puerto; ssh te da una terminal remota.","ASCII: cada letra es un número (65 = A).","chmod +x y ./programa para ejecutar."]
},
/* ───────── SEMANA 3 ───────── */
{ id:"s11", w:3, day:"Lun", title:"DNS in Detail",
  goal:"Entender cómo un nombre como google.com se convierte en una IP.",
  links:[["Sala “DNS in Detail”","https://tryhackme.com/room/dnsindetail"]],
  concept:[
    "El **DNS** es la agenda de contactos de internet: traduce nombres (google.com) a direcciones IP.",
    "Cuando escribes una dirección, tu equipo pregunta a un **resolver**, que si no lo sabe pregunta a los **servidores raíz**, luego a los del dominio (.com) y por último al **servidor autoritativo** del sitio, que da la respuesta final.",
    "Tipos de registro: **A** (IPv4), **AAAA** (IPv6), **CNAME** (alias de otro nombre), **MX** (servidor de correo), **TXT** (texto, se usa para verificaciones)."
  ],
  flow:["Tu navegador","Resolver","Servidor raíz","Servidor .com","Servidor autoritativo"],
  steps:[
    "Haz la sala “DNS in Detail”.",
    "En PowerShell, busca la IP de google.com con nslookup.",
    "Busca los servidores de correo (registro MX) de gmail.com.",
    "Anota en tu cuaderno el camino de una consulta DNS con tus palabras."
  ],
  cmds:[["Buscar la IP de un dominio","nslookup google.com"],["Ver el registro MX (correo)","Resolve-DnsName gmail.com -Type MX"]],
  hint:"Si una pregunta te pide un registro concreto, en la sala hay una herramienta para consultarlo: úsala en vez de adivinar.",
  quiz:[
    {q:"¿Qué tipo de registro DNS guarda una dirección IPv4?", o:["MX","A","TXT","CNAME"], a:1, e:"El registro A da la IPv4. AAAA da la IPv6."},
    {q:"¿Qué registro indica el servidor de correo?", o:["A","MX","AAAA","NS"], a:1, e:"MX significa mail exchange."},
    {q:"¿Quién da la respuesta final de una consulta DNS?", o:["El servidor raíz","Tu router","El servidor autoritativo del dominio","Google"], a:2, e:"El autoritativo es el que de verdad conoce los registros de ese dominio."}
  ],
  cards:[["¿Qué hace el DNS?","Traduce nombres de dominio a direcciones IP."],["Registro DNS A","Dirección IPv4."],["Registro DNS MX","Servidor de correo del dominio."],["Registro DNS CNAME","Un alias que apunta a otro nombre."]],
  keys:["DNS traduce nombres a IP.","Camino: resolver, raíz, TLD, autoritativo.","A = IPv4, AAAA = IPv6, MX = correo, CNAME = alias."]
},
{ id:"s12", w:3, day:"Mar", title:"HTTP in Detail, primera mitad",
  goal:"Entender qué es una petición HTTP y las partes de una URL.",
  links:[["Sala “HTTP in Detail”","https://tryhackme.com/room/httpindetail"]],
  concept:[
    "La web funciona con **peticiones y respuestas**: tu navegador pide algo (petición) y el servidor contesta (respuesta).",
    "Una URL tiene partes: `https://tienda.com:443/productos?id=7` es **protocolo** (https), **dominio** (tienda.com), **puerto** (443), **ruta** (/productos) y **parámetros** (id=7).",
    "Métodos principales: **GET** pide datos, **POST** envía datos (un formulario), **PUT** actualiza y **DELETE** borra."
  ],
  flow:["Navegador: GET /productos","Servidor procesa","Respuesta: 200 OK + HTML"],
  steps:[
    "Haz la primera mitad de “HTTP in Detail”.",
    "Toma 3 URL reales de páginas que uses y sepáralas en sus partes en tu cuaderno.",
    "Escribe un ejemplo de cuándo se usa GET y cuándo POST."
  ],
  hint:"Si la URL no muestra el puerto, es porque usa el de siempre: 443 para https y 80 para http.",
  quiz:[
    {q:"Al enviar un formulario de inicio de sesión, ¿qué método se usa normalmente?", o:["GET","POST","DELETE","HEAD"], a:1, e:"POST envía datos en el cuerpo de la petición, no en la URL."},
    {q:"En https://tienda.com/ofertas?pag=2, ¿qué es pag=2?", o:["El dominio","La ruta","Un parámetro","El puerto"], a:2, e:"Lo que va después del ? son los parámetros."},
    {q:"Si la URL empieza por https y no dice puerto, ¿cuál se usa?", o:["80","443","8080","22"], a:1, e:"HTTPS usa el 443 por defecto."}
  ],
  cards:[["Partes de una URL","Protocolo, dominio, puerto, ruta y parámetros."],["GET frente a POST","GET pide datos; POST envía datos (formularios)."]],
  keys:["La web son peticiones y respuestas.","URL: protocolo, dominio, puerto, ruta, parámetros.","GET pide, POST envía."]
},
{ id:"s13", w:3, day:"Mié", title:"HTTP in Detail, segunda mitad",
  goal:"Leer códigos de estado, cabeceras y cookies.",
  links:[["Sala “HTTP in Detail”","https://tryhackme.com/room/httpindetail"]],
  concept:[
    "Cada respuesta trae un **código de estado**: **2xx** todo bien (200), **3xx** redirección (301, 304), **4xx** error del cliente (401 falta iniciar sesión, 403 prohibido, 404 no existe), **5xx** error del servidor (500).",
    "Las **cabeceras** llevan información extra: `Host` (a qué sitio va), `User-Agent` (qué navegador eres), `Cookie` y `Set-Cookie`.",
    "HTTP no recuerda nada entre peticiones. Las **cookies** sirven para que el servidor sepa que sigues siendo tú, por ejemplo después de iniciar sesión."
  ],
  flow:["Inicias sesión","Servidor: Set-Cookie","Navegador guarda la cookie","Cada petición envía la cookie"],
  steps:[
    "Termina “HTTP in Detail”.",
    "Escribe en tu cuaderno una tabla con 200, 301, 401, 403, 404 y 500, y qué significa cada uno.",
    "Explica en voz alta por qué robar una cookie de sesión es tan grave."
  ],
  hint:"Truco: 4xx = te equivocaste tú (el cliente); 5xx = se equivocó el servidor.",
  quiz:[
    {q:"¿Qué significa 404?", o:["Prohibido","No encontrado","Error del servidor","Todo bien"], a:1, e:"404 Not Found: la ruta no existe."},
    {q:"¿Qué diferencia hay entre 401 y 403?", o:["Ninguna","401 = falta autenticarte; 403 = no tienes permiso","401 = error del servidor; 403 = no existe","403 = redirección"], a:1, e:"Con 401 te falta iniciar sesión. Con 403 el servidor sabe quién eres pero no te deja."},
    {q:"¿Para qué sirven las cookies de sesión?", o:["Para acelerar la página","Para que el servidor sepa que sigues siendo tú","Para guardar imágenes","Para cifrar la web"], a:1, e:"HTTP no tiene memoria; la cookie identifica tu sesión en cada petición."}
  ],
  cards:[["Códigos 2xx, 3xx, 4xx y 5xx","Éxito, redirección, error del cliente, error del servidor."],["401 frente a 403","401: falta autenticarte. 403: no tienes permiso."],["¿Para qué sirve una cookie de sesión?","Para que el servidor sepa que sigues siendo tú entre peticiones."]],
  keys:["2xx bien, 3xx redirección, 4xx cliente, 5xx servidor.","401 falta login; 403 prohibido; 404 no existe.","La cookie de sesión te identifica en cada petición."]
},
{ id:"s14", w:3, day:"Jue", title:"Las herramientas del navegador en vivo",
  goal:"Ver con tus propios ojos las peticiones HTTP que estudiaste.",
  links:[],
  concept:[
    "Edge y Chrome traen **herramientas de desarrollador** (F12). La pestaña **Red** (Network) muestra cada petición que hace la página: método, código de estado, cabeceras y tiempo.",
    "La pestaña **Aplicación** (Application) muestra las cookies guardadas. Un hacker ético usa esto todo el tiempo para entender cómo funciona una web.",
    "Un **304** significa “no ha cambiado”: el navegador ya tenía el archivo guardado y no lo vuelve a descargar."
  ],
  flow:["F12","Pestaña Red","Recargar (F5)","Clic en una petición","Ver cabeceras"],
  steps:[
    "Abre cualquier página que uses (por ejemplo, la de tu colegio o wikipedia.org) en Edge o Chrome.",
    "Pulsa F12, entra en la pestaña Red y recarga con F5.",
    "Haz clic en la primera petición. Encuentra el método, el código de estado y la cabecera User-Agent.",
    "Busca alguna respuesta con Set-Cookie y una con código 304 o 301.",
    "En la pestaña Aplicación, mira las cookies del sitio. Solo mira, no las cambies en sitios reales."
  ],
  cmds:[["Abrir las herramientas","F12"],["Ver el código fuente de la página","Ctrl + U"]],
  hint:"Si la lista de peticiones está vacía, deja F12 abierto y recarga la página: solo registra lo que pasa mientras está abierto.",
  quiz:[
    {q:"¿En qué pestaña ves las peticiones de la página?", o:["Consola","Red (Network)","Elementos","Rendimiento"], a:1, e:"La pestaña Red registra cada petición y su respuesta."},
    {q:"¿Qué significa un código 304?", o:["El archivo no ha cambiado y se usa la copia guardada","Error del servidor","Prohibido","Redirección permanente"], a:0, e:"304 Not Modified: el navegador reutiliza lo que ya tenía."},
    {q:"¿Dónde ves las cookies guardadas?", o:["Pestaña Red","Pestaña Aplicación","En el código fuente","En la barra de direcciones"], a:1, e:"En Aplicación (Application), apartado Cookies."}
  ],
  cards:[["Atajo para las herramientas del navegador","F12."],["¿Qué significa HTTP 304?","No modificado: se usa la copia guardada."],["Atajo para ver el código fuente","Ctrl + U."]],
  keys:["F12 abre las herramientas; Red muestra las peticiones.","Aplicación muestra las cookies.","304 = no modificado."]
},
{ id:"s15", w:3, day:"Sáb", title:"picoCTF: Web Exploitation",
  goal:"Resolver Insp3ct0r, where are the robots y Cookies usando lo que sabes de HTTP.",
  sat:true,
  links:[["Retos picoCTF: Web Exploitation","https://learn.cylabacademy.org/library"]],
  concept:[
    "Muchos retos web fáciles esconden la flag en lo que el navegador ya recibió: **comentarios en el código fuente** (Ctrl + U), archivos CSS o JavaScript, o **cookies**.",
    "El archivo `robots.txt` le dice a los buscadores qué no indexar. A veces revela rutas que alguien quería esconder.",
    "Lección clave: todo lo que está en tu navegador lo puedes ver y cambiar. Por eso un servidor **nunca debe confiar** en lo que le manda el cliente."
  ],
  flow:["Código fuente","CSS y JS","Cookies","robots.txt","Flag"],
  steps:[
    "Bloque 1 (50 min): resuelve **Insp3ct0r** siguiendo su guía.",
    "Sigue con **where are the robots**.",
    "Descanso de 15 minutos.",
    "Bloque 2 (50 min): resuelve **Cookies**. Anota qué revisaste en cada reto y dónde estaba la flag."
  ],
  hint:"Si la flag parece partida en trozos, revisa cada archivo que carga la página: HTML, CSS y JS.",
  quiz:[
    {q:"¿Qué atajo muestra el código fuente?", o:["Ctrl + U","Ctrl + S","F5","Alt + F4"], a:0, e:"Ctrl + U abre el código fuente de la página."},
    {q:"¿Para qué existe robots.txt?", o:["Para bloquear hackers","Para decir a los buscadores qué no indexar","Para guardar contraseñas","Para acelerar la web"], a:1, e:"Es una sugerencia para buscadores, no una protección."},
    {q:"¿Por qué un servidor no debe confiar en una cookie sin verificarla?", o:["Porque caduca","Porque el usuario la puede modificar","Porque pesa mucho","Porque es pública"], a:1, e:"Todo lo que está en el navegador del usuario lo controla el usuario."}
  ],
  cards:[["¿Qué es robots.txt?","Un archivo que dice a los buscadores qué no indexar. No protege nada."],["Regla de oro en seguridad web","El servidor nunca confía en lo que manda el cliente."]],
  keys:["Revisa código fuente, CSS/JS, cookies y robots.txt.","robots.txt no protege nada.","El servidor nunca debe confiar en el cliente."]
},
/* ───────── SEMANA 4 ───────── */
{ id:"s16", w:4, day:"Lun", title:"Bandit nivel 0: entrar por SSH",
  goal:"Conectarte a un servidor Linux remoto desde tu laptop con Windows.",
  links:[["Bandit: cómo entrar (nivel 0)","https://overthewire.org/wargames/bandit/bandit0.html"],["Bandit nivel 0 → 1","https://overthewire.org/wargames/bandit/bandit1.html"]],
  concept:[
    "**SSH** te da una terminal en otro equipo a través de internet, con la conexión cifrada. Es como sentarte delante de un servidor que está en otro país.",
    "Windows 10 y 11 ya traen el comando `ssh`. La opción `-p 2220` indica el puerto, porque Bandit no usa el 22 de siempre.",
    "Al escribir la contraseña en la terminal **no se ve nada**, ni asteriscos. Es normal: escríbela y pulsa Enter."
  ],
  flow:["PowerShell en tu laptop","ssh por internet","Servidor de Bandit","Terminal Linux"],
  steps:[
    "Lee la página del nivel 0 de Bandit.",
    "Abre PowerShell y conéctate con el comando de abajo. La contraseña del nivel 0 está en la página del nivel.",
    "Dentro, usa ls para ver los archivos y cat para leer el que encuentres.",
    "Guarda en tu cuaderno la contraseña del nivel 1 y sal con exit."
  ],
  cmds:[["Conectarte a Bandit","ssh bandit0@bandit.labs.overthewire.org -p 2220"],["Ver archivos","ls"],["Leer un archivo","cat nombre-del-archivo"],["Salir","exit"]],
  hint:"Si la primera vez te pregunta si confías en el servidor, escribe yes y pulsa Enter.",
  quiz:[
    {q:"¿Qué indica -p 2220 en el comando ssh?", o:["La contraseña","El puerto","El usuario","El nivel"], a:1, e:"-p elige el puerto. El de SSH por defecto es el 22."},
    {q:"¿Qué hace ls?", o:["Borra archivos","Lista los archivos de la carpeta","Lee un archivo","Cierra la sesión"], a:1, e:"ls lista el contenido de la carpeta actual."},
    {q:"Escribes la contraseña y no aparece nada en pantalla. ¿Qué pasa?", o:["El teclado falla","Es normal, la terminal la oculta","Se bloqueó la cuenta","Hay que reiniciar"], a:1, e:"Las terminales no muestran la contraseña mientras la escribes."}
  ],
  cards:[["¿Qué es SSH?","Una terminal remota con la conexión cifrada."],["Puerto por defecto de SSH","22."],["Comando para listar archivos en Linux","ls"],["Comando para leer un archivo en Linux","cat"]],
  keys:["SSH = terminal remota cifrada.","-p elige el puerto; Bandit usa el 2220.","ls lista, cat lee, exit sale."]
},
{ id:"s17", w:4, day:"Mar", title:"Bandit niveles 1 y 2: nombres raros",
  goal:"Leer archivos con nombres que confunden a la terminal.",
  links:[["Bandit nivel 1 → 2","https://overthewire.org/wargames/bandit/bandit2.html"],["Bandit nivel 2 → 3","https://overthewire.org/wargames/bandit/bandit3.html"]],
  concept:[
    "En Linux, lo que empieza por un guion (`-`) se interpreta como una **opción** del comando. Si un archivo se llama así, hay que indicar que es un archivo, por ejemplo con su ruta: `./nombre`.",
    "Si un nombre tiene **espacios**, la terminal cree que son varios archivos. Se resuelve poniendo el nombre entre comillas o con `\\` antes de cada espacio. Si además **empieza por guiones** (como `--spaces in this filename--`), las comillas no bastan: añade `./` delante (`cat ./\"--spaces…--\"`) o escribe `--` antes del nombre para decir «aquí acaban las opciones».",
    "La tecla **Tab** autocompleta nombres. Úsala siempre: evita errores y escapa los espacios por ti."
  ],
  flow:["Leer el objetivo del nivel","ls","Pensar por qué falla","Probar otra forma","Contraseña"],
  steps:[
    "Conéctate como bandit1 con la contraseña que guardaste.",
    "Lee el objetivo del nivel 1 en la web y resuélvelo.",
    "Haz lo mismo con el nivel 2.",
    "Anota en tu cuaderno la regla que aprendiste en cada nivel, no solo la contraseña."
  ],
  cmds:[["Conectarte al nivel 1","ssh bandit1@bandit.labs.overthewire.org -p 2220"],["Ver en qué carpeta estás","pwd"]],
  hint:"Prueba a escribir las primeras letras del nombre y pulsar Tab. Fíjate en cómo lo completa.",
  quiz:[
    {q:"¿Por qué cat - no lee un archivo llamado “-”?", o:["Porque está vacío","Porque el guion se interpreta como una opción","Porque no tienes permiso","Porque es un virus"], a:1, e:"La terminal lee el guion como opción o entrada estándar; con ./- queda claro que es un archivo."},
    {q:"¿Cómo lees un archivo con espacios en el nombre?", o:["No se puede","Poniendo el nombre entre comillas","Borrando los espacios","Con ls"], a:1, e:"Las comillas hacen que la terminal lo trate como un solo nombre."},
    {q:"¿Qué hace la tecla Tab en la terminal?", o:["Cierra la sesión","Autocompleta nombres","Borra la línea","Cambia de usuario"], a:1, e:"Tab completa nombres de archivos y comandos."}
  ],
  cards:[["Cómo leer un archivo llamado “-”","Usar su ruta: ./-"],["Cómo leer un archivo con espacios","Poner el nombre entre comillas o usar Tab."],["Comando para saber en qué carpeta estás","pwd"]],
  keys:["Un nombre con guion se lee con ./nombre.","Nombres con espacios van entre comillas.","Tab autocompleta."]
},
{ id:"s18", w:4, day:"Mié", title:"Bandit niveles 3 y 4: ocultos y tipos",
  goal:"Encontrar archivos ocultos y averiguar qué tipo de archivo es cada uno.",
  links:[["Bandit nivel 3 → 4","https://overthewire.org/wargames/bandit/bandit4.html"],["Bandit nivel 4 → 5","https://overthewire.org/wargames/bandit/bandit5.html"]],
  concept:[
    "En Linux, los archivos cuyo nombre empieza por punto (`.oculto`) **no aparecen** con `ls`. Para verlos usa `ls -a`.",
    "`cd carpeta` entra en una carpeta y `cd ..` sube un nivel.",
    "El comando `file` te dice qué tipo de archivo es (texto, imagen, datos binarios). Muy útil cuando hay muchos archivos y solo uno es legible."
  ],
  flow:["ls -a","cd a la carpeta","file ./*","cat al de texto"],
  steps:[
    "Resuelve el nivel 3 usando lo que sabes de archivos ocultos.",
    "Resuelve el nivel 4 usando el comando file.",
    "Crea una tarjeta para ls -a, cd .. y file."
  ],
  cmds:[["Ver también los archivos ocultos","ls -a"],["Ver el tipo de varios archivos","file ./*"],["Subir una carpeta","cd .."]],
  hint:"En el nivel 4, busca el único archivo que file describa como texto.",
  quiz:[
    {q:"¿Cómo ves los archivos ocultos?", o:["ls","ls -a","cat -a","pwd"], a:1, e:"La opción -a muestra también los que empiezan por punto."},
    {q:"¿Qué hace el comando file?", o:["Crea un archivo","Dice qué tipo de archivo es","Borra un archivo","Copia un archivo"], a:1, e:"Analiza el contenido y dice si es texto, imagen, datos, etc."},
    {q:"¿Qué hace cd ..?", o:["Entra en una carpeta llamada ..","Sube un nivel de carpeta","Borra la carpeta","Vuelve al inicio de sesión"], a:1, e:".. significa la carpeta de arriba."}
  ],
  cards:[["Ver archivos ocultos en Linux","ls -a"],["Saber el tipo de un archivo","file nombre"],["Subir una carpeta","cd .."]],
  keys:["Los archivos con punto delante están ocultos: ls -a.","file dice el tipo de archivo.","cd entra; cd .. sube."]
},
{ id:"s19", w:4, day:"Jue", title:"Bandit niveles 5 y 6: buscar con find",
  goal:"Encontrar un archivo entre cientos usando sus características.",
  links:[["Bandit nivel 5 → 6","https://overthewire.org/wargames/bandit/bandit6.html"],["Bandit nivel 6 → 7","https://overthewire.org/wargames/bandit/bandit7.html"]],
  concept:[
    "`find` busca archivos por características: `-type f` (solo archivos), `-size` (tamaño), `-user` y `-group` (dueño). Ejemplo: `find . -type f -size 100c` busca archivos de exactamente 100 bytes.",
    "Cuando buscas en todo el sistema salen muchos errores de “permiso denegado”. Añadir `2>/dev/null` manda esos errores a la basura y deja solo los resultados.",
    "Esto es lo que hace un atacante dentro de un servidor: buscar archivos interesantes por sus pistas."
  ],
  flow:["Leer las pistas del nivel","Traducirlas a opciones de find","Ejecutar","Leer el resultado"],
  steps:[
    "Lee el objetivo del nivel 5 y convierte cada pista en una opción de find.",
    "Resuelve el nivel 5.",
    "Resuelve el nivel 6, que busca en todo el servidor.",
    "Crea una tarjeta por cada opción de find que usaste."
  ],
  cmds:[["Buscar archivos de un tamaño exacto","find . -type f -size 1033c"],["Buscar ocultando errores","find / -user nombre 2>/dev/null"],["Ver la ayuda de find","man find"]],
  hint:"La c en -size significa bytes. Lee el manual con man find y busca la palabra size pulsando / .",
  quiz:[
    {q:"¿Qué busca find . -type f?", o:["Solo carpetas","Solo archivos","Archivos ocultos","Archivos borrados"], a:1, e:"-type f se limita a archivos normales; -type d serían carpetas."},
    {q:"¿Qué hace 2>/dev/null?", o:["Borra los archivos","Oculta los mensajes de error","Guarda el resultado","Da permisos"], a:1, e:"Redirige los errores (salida 2) a /dev/null, que los descarta."},
    {q:"¿Qué significa la c en -size 1033c?", o:["Caracteres","Bytes","Carpetas","Kilobytes"], a:1, e:"En find, el sufijo c indica bytes."}
  ],
  cards:[["Buscar solo archivos con find","find . -type f"],["Ocultar errores en la terminal","2>/dev/null"],["Buscar por dueño con find","-user nombre"]],
  keys:["find busca por tipo, tamaño, dueño y grupo.","2>/dev/null oculta los errores.","-size 100c = 100 bytes."]
},
{ id:"s20", w:4, day:"Sáb", title:"Bandit niveles 7 al 10",
  goal:"Filtrar texto con grep, sort, uniq y strings, y unir comandos con tuberías.",
  sat:true,
  links:[["Bandit nivel 7 → 8","https://overthewire.org/wargames/bandit/bandit8.html"]],
  concept:[
    "La **tubería** `|` manda la salida de un comando a la entrada del siguiente. Así combinas comandos pequeños para hacer algo grande.",
    "`grep palabra archivo` muestra solo las líneas que contienen esa palabra. `sort` ordena líneas. `uniq -c` cuenta líneas repetidas, pero solo si están juntas: por eso va después de `sort`.",
    "`strings archivo` saca el texto legible de un archivo binario. Y `base64 -d archivo` decodifica Base64, que ya conoces de picoCTF."
  ],
  flow:["cat datos.txt","| sort","| uniq -c","Resultado"],
  steps:[
    "Bloque 1 (50 min): niveles 7 y 8.",
    "Descanso de 15 minutos.",
    "Bloque 2 (50 min): niveles 9 y 10.",
    "Guarda cada contraseña en tu cuaderno y escribe la regla de cada nivel."
  ],
  cmds:[["Buscar una palabra en un archivo","grep palabra data.txt"],["Contar líneas repetidas","sort data.txt | uniq -c"],["Sacar texto legible de un binario","strings data.txt"],["Decodificar Base64 (nivel 10)","base64 -d data.txt"]],
  hint:"Si un comando saca demasiadas líneas, añade | grep algo para filtrar.",
  quiz:[
    {q:"¿Qué hace la tubería |?", o:["Borra la salida","Pasa la salida de un comando al siguiente","Cierra la terminal","Guarda en un archivo"], a:1, e:"Conecta comandos: la salida de uno es la entrada del otro."},
    {q:"¿Por qué se usa sort antes de uniq?", o:["Por costumbre","Porque uniq solo detecta repetidas que están juntas","Porque uniq es lento","No hace falta"], a:1, e:"sort pone las líneas iguales juntas para que uniq las cuente bien."},
    {q:"¿Qué hace strings?", o:["Cifra texto","Saca el texto legible de un archivo binario","Cuenta palabras","Cambia el nombre"], a:1, e:"Extrae las secuencias de caracteres legibles."}
  ],
  cards:[["¿Qué hace la tubería | ?","Pasa la salida de un comando como entrada del siguiente."],["¿Por qué sort antes de uniq?","uniq solo junta repetidas que están seguidas."],["Comando para buscar texto en un archivo","grep"]],
  keys:["| conecta comandos.","grep filtra líneas; sort ordena; uniq -c cuenta repetidas seguidas.","strings saca texto de binarios."]
},
/* ───────── SEMANA 5 ───────── */
{ id:"s21", w:5, day:"Lun", title:"Web Security Essentials",
  goal:"Entender qué es una vulnerabilidad, una amenaza y un riesgo.",
  links:[["Sala “Web Security Essentials”","https://tryhackme.com/room/websecurityessentials"],["OWASP Top 10 (edición 2025, en español)","https://top10.owasp.org/2025/es/0x00_2025-Introduction/"]],
  concept:[
    "**Vulnerabilidad:** un fallo que se puede aprovechar (una contraseña por defecto). **Amenaza:** quien podría aprovecharla (un atacante). **Riesgo:** la probabilidad de que pase por el daño que causaría.",
    "La **superficie de ataque** es todo lo que un atacante puede tocar: formularios, puertos abiertos, empleados, aplicaciones.",
    "**OWASP Top 10** es la lista de referencia de los riesgos más comunes en aplicaciones web. La vas a estudiar a fondo en la Fase 3."
  ],
  flow:["Amenaza","encuentra una vulnerabilidad","= riesgo","Impacto"],
  steps:[
    "Haz la sala “Web Security Essentials”.",
    "Abre la página de OWASP Top 10 y lee solo los nombres de la lista.",
    "Para tu propio teléfono, escribe una vulnerabilidad, una amenaza y un riesgo."
  ],
  hint:"Si mezclas los tres términos, piensa en una casa: la ventana rota es la vulnerabilidad, el ladrón la amenaza y el riesgo es que entre.",
  quiz:[
    {q:"Una contraseña por defecto que nadie cambió es…", o:["Una amenaza","Una vulnerabilidad","Un riesgo","Un exploit"], a:1, e:"Es un fallo aprovechable: una vulnerabilidad."},
    {q:"¿Qué es la superficie de ataque?", o:["El escritorio del atacante","Todo lo que un atacante puede tocar","El antivirus","La red wifi"], a:1, e:"Todos los puntos de entrada posibles al sistema."},
    {q:"¿Qué es OWASP Top 10?", o:["Un antivirus","Una lista de los riesgos más comunes en aplicaciones web","Un lenguaje","Un CTF"], a:1, e:"Es la referencia estándar sobre riesgos web."}
  ],
  cards:[["Vulnerabilidad, amenaza y riesgo","Fallo aprovechable; quien lo aprovecha; probabilidad por impacto."],["¿Qué es la superficie de ataque?","Todo lo que un atacante puede tocar de un sistema."],["¿Qué es OWASP Top 10?","La lista de referencia de los riesgos web más comunes."]],
  keys:["Vulnerabilidad = fallo; amenaza = quien lo aprovecha; riesgo = probabilidad por impacto.","Superficie de ataque = todo lo que se puede tocar.","OWASP Top 10 = riesgos web más comunes."]
},
{ id:"s22", w:5, day:"Mar", title:"Vulnerabilities 101",
  goal:"Saber cómo se nombran, se puntúan y se buscan las vulnerabilidades conocidas.",
  links:[["Sala “Vulnerabilities 101”","https://tryhackme.com/room/vulnerabilities101"],["Base de datos NVD","https://nvd.nist.gov/"]],
  concept:[
    "Cada vulnerabilidad pública recibe un identificador **CVE**, como `CVE-2021-44228`. Así todo el mundo habla del mismo fallo.",
    "El **CVSS** puntúa la gravedad de 0.0 a 10.0. De 9.0 en adelante es crítica.",
    "Un **exploit** es el código o la técnica que aprovecha una vulnerabilidad. La vulnerabilidad es el agujero; el exploit es la forma de entrar por él."
  ],
  flow:["Se descubre un fallo","Recibe un CVE","Se puntúa con CVSS","Sale el parche"],
  steps:[
    "Haz la sala “Vulnerabilities 101”.",
    "Busca en NVD el CVE-2021-44228 y anota su puntuación CVSS y qué programa afectaba.",
    "Explica en voz alta la diferencia entre vulnerabilidad y exploit."
  ],
  hint:"En NVD, escribe el CVE completo en el buscador y abre el resultado.",
  quiz:[
    {q:"¿Qué es un CVE?", o:["Un virus","Un identificador único de una vulnerabilidad pública","Un antivirus","Un tipo de cifrado"], a:1, e:"CVE da un nombre único a cada vulnerabilidad conocida."},
    {q:"¿En qué rango va la puntuación CVSS?", o:["1 a 5","0 a 100","0.0 a 10.0","A a F"], a:2, e:"CVSS va de 0.0 a 10.0."},
    {q:"¿Qué es un exploit?", o:["El fallo en sí","El código o técnica que aprovecha un fallo","Un parche","Un informe"], a:1, e:"La vulnerabilidad es el agujero; el exploit, la forma de usarlo."}
  ],
  cards:[["¿Qué es un CVE?","El identificador único de una vulnerabilidad pública."],["Rango de CVSS","0.0 a 10.0 (9.0 o más = crítica)."],["Vulnerabilidad frente a exploit","El agujero frente a la forma de aprovecharlo."]],
  keys:["CVE = nombre único de una vulnerabilidad.","CVSS puntúa de 0 a 10.","Exploit = la forma de aprovechar el fallo."]
},
{ id:"s23", w:5, day:"Mié", title:"Bandit niveles 11 y 12",
  goal:"Deshacer un cifrado por rotación y desenvolver un archivo comprimido varias veces.",
  links:[["Bandit nivel 11 → 12","https://overthewire.org/wargames/bandit/bandit12.html"],["Bandit nivel 12 → 13","https://overthewire.org/wargames/bandit/bandit13.html"]],
  concept:[
    "**ROT13** cambia cada letra por la que está 13 posiciones después (A pasa a N). Como el alfabeto tiene 26 letras, aplicarlo dos veces devuelve el original. El comando `tr` cambia unos caracteres por otros usando rangos.",
    "En el nivel 12 el archivo es un **volcado hexadecimal** de otro archivo que fue **comprimido varias veces**. `xxd -r` lo devuelve a binario; luego `file` te dice cada vez qué tipo de compresión tiene (gzip, bzip2, tar) para descomprimirlo con la herramienta correcta.",
    "Trabaja dentro de una carpeta temporal propia, que puedes crear con `mktemp -d`, para no ensuciar el servidor."
  ],
  flow:["xxd -r","file","Descomprimir","¿Otra vez comprimido?","Texto final"],
  steps:[
    "Resuelve el nivel 11 leyendo el manual de tr y pensando cómo hacer ROT13 con rangos.",
    "Para el nivel 12, crea una carpeta temporal y copia el archivo allí.",
    "Repite: file, cambiar la extensión y descomprimir, hasta llegar al texto.",
    "Anota en tu cuaderno cada tipo de compresión que encontraste."
  ],
  cmds:[["Crear una carpeta temporal","mktemp -d"],["Volver de hexadecimal a binario","xxd -r data.txt > data.bin"],["Ver qué tipo de archivo es","file data.bin"],["Ver la ayuda de tr","man tr"]],
  hint:"Con tr puedes escribir rangos como 'A-Z'. Y en el nivel 12, file te dice siempre qué herramienta usar a continuación.",
  quiz:[
    {q:"Con ROT13, ¿en qué se convierte la A?", o:["B","M","N","Z"], a:2, e:"A más 13 posiciones es N."},
    {q:"¿Qué hace xxd -r?", o:["Comprime un archivo","Convierte un volcado hexadecimal de vuelta a binario","Borra un archivo","Cifra con ROT13"], a:1, e:"La opción -r invierte el volcado hexadecimal."},
    {q:"Tienes un archivo comprimido y no sabes con qué. ¿Qué usas?", o:["cat","file","ls","pwd"], a:1, e:"file identifica el tipo: gzip, bzip2, tar..."}
  ],
  cards:[["¿Qué es ROT13?","Cambiar cada letra por la que está 13 posiciones después."],["Convertir un volcado hexadecimal a binario","xxd -r"],["Crear una carpeta temporal en Linux","mktemp -d"]],
  keys:["ROT13: cada letra avanza 13; tr lo hace con rangos.","xxd -r devuelve el binario; file dice cómo descomprimir.","Trabaja en una carpeta temporal."]
},
{ id:"s24", w:5, day:"Jue", title:"picoCTF: Cryptography",
  goal:"Resolver Mod 26 y The Numbers y entender por qué el cifrado César es débil.",
  links:[["Retos picoCTF: Cryptography","https://learn.cylabacademy.org/library"],["CyberChef","https://gchq.github.io/CyberChef/"]],
  concept:[
    "El **cifrado César** desplaza cada letra un número fijo de posiciones. ROT13 es un César con desplazamiento 13.",
    "Es débil porque solo hay **25 desplazamientos útiles**: se pueden probar todos en segundos. A eso se le llama **fuerza bruta**.",
    "**CyberChef** es una herramienta gratuita en el navegador para codificar, decodificar y probar cifrados sencillos sin instalar nada.",
    "No confundas cifrar con codificar: **Base64** o el hexadecimal son **codificaciones**, otra forma de escribir lo mismo, y cualquiera las deshace sin clave. Un cifrado sí necesita una clave."
  ],
  flow:["Texto cifrado","Probar los 25 desplazamientos","Ver cuál tiene sentido","Flag"],
  steps:[
    "Resuelve **Mod 26** siguiendo su guía (usarás CyberChef).",
    "Resuelve **The Numbers**.",
    "Anota para cada reto qué tipo de codificación o cifrado era y cómo lo reconociste."
  ],
  hint:"En CyberChef, la receta ROT13 tiene un campo de cantidad: cámbialo y mira cuándo aparece texto con sentido.",
  quiz:[
    {q:"¿Cuántos desplazamientos útiles tiene el cifrado César con 26 letras?", o:["5","13","25","Infinitos"], a:2, e:"Con 26 letras hay 25 desplazamientos distintos del original."},
    {q:"¿Por qué el César es débil?", o:["Porque es antiguo","Porque se pueden probar todas las claves en segundos","Porque usa números","No es débil"], a:1, e:"Tan pocas claves permiten la fuerza bruta inmediata."},
    {q:"¿Qué es la fuerza bruta?", o:["Romper el teclado","Probar todas las posibilidades","Usar un virus","Adivinar una vez"], a:1, e:"Probar sistemáticamente todas las opciones hasta acertar."}
  ],
  cards:[["¿Qué es el cifrado César?","Desplazar cada letra un número fijo de posiciones."],["¿Por qué el César es débil?","Solo tiene 25 claves: se prueban todas en segundos."],["¿Qué es la fuerza bruta?","Probar todas las posibilidades hasta acertar."]],
  keys:["César = desplazar letras; ROT13 es un César de 13.","Solo 25 claves: cae por fuerza bruta.","CyberChef sirve para probar codificaciones."]
},
{ id:"s25", w:5, day:"Sáb", title:"Mini-CTF mezclado",
  goal:"Practicar como en una competencia real: categorías mezcladas y con reloj.",
  sat:true,
  links:[["Biblioteca de retos picoCTF","https://learn.cylabacademy.org/library"]],
  concept:[
    "Hoy juegas un mini-CTF: una hora resolviendo retos fáciles de distintas categorías.",
    "Regla: **20 minutos sin ayuda** en cada reto antes de pedir pista. Si a los 40 minutos no avanzas, pasas al siguiente y lo anotas para después.",
    "Un buen hacker documenta todo. Tus notas de hoy son el primer borrador de lo que en el futuro será un informe profesional."
  ],
  flow:["Elegir reto","20 min sin ayuda","Pista si hace falta","Anotar","Siguiente"],
  steps:[
    "Bloque 1 (50 min) con el temporizador: **First Grep**, **Bases** y **Glory of the Garden** (sus guías son cortas a propósito: ya sabes más).",
    "Descanso de 15 minutos.",
    "Bloque 2 (50 min): sigue o vuelve a los que dejaste. Escribe la solución de uno como si se la explicaras a otra persona."
  ],
  hint:"Si no sabes de qué categoría es un reto, mira las pistas que da el propio enunciado: “codificado”, “página”, “archivo”...",
  quiz:[
    {q:"Llevas 20 minutos atascado en un reto. ¿Qué haces?", o:["Seguir sin parar","Pedir una pista","Abandonar el CTF","Copiar la solución completa"], a:1, e:"Una pista te desbloquea sin quitarte el aprendizaje."},
    {q:"¿Por qué anotar todo lo que pruebas?", o:["Para tener más páginas","Para no repetir intentos y poder explicar la solución","Porque lo exige picoCTF","No sirve"], a:1, e:"Las notas evitan repetir errores y son la base de un informe."},
    {q:"Te dan un texto con letras que parecen desordenadas. ¿Qué categoría es probablemente?", o:["Web","Cryptography","Forensics","Binary"], a:1, e:"Texto transformado suele ser criptografía o codificación."}
  ],
  cards:[["Regla del atasco","20 minutos sin ayuda, luego pista; a los 40, al siguiente."]],
  keys:["20 minutos sin ayuda, luego pista.","Anotar todo evita repetir y prepara el informe."]
},
/* ───────── SEMANA 6 ───────── */
{ id:"s26", w:6, day:"Lun", title:"Repaso: redes y web",
  goal:"Comprobar sin ayuda lo que recuerdas de redes, DNS y HTTP.",
  links:[],
  concept:[
    "Hoy no hay tema nuevo. Esta sesión mide lo que de verdad se quedó.",
    "Primero responde el quiz de abajo sin mirar nada. Después repasa solo lo que fallaste en tus notas y tarjetas."
  ],
  steps:[
    "Responde el quiz de esta sesión sin mirar nada.",
    "Repasa en tus notas solo lo que fallaste.",
    "Haz un repaso completo de tus tarjetas pendientes.",
    "Termina cualquier sala de TryHackMe que hayas dejado a medias."
  ],
  hint:"Si fallas una pregunta, busca la sesión donde lo viste en la pestaña Ruta y relee solo sus puntos clave.",
  quiz:[
    {q:"¿Qué registro DNS usarías para encontrar el servidor de correo de un dominio?", o:["A","MX","CNAME","AAAA"], a:1, e:"MX indica los servidores de correo."},
    {q:"Una petición devuelve 403. ¿Qué pasó?", o:["La página no existe","No tienes permiso","El servidor falló","Todo bien"], a:1, e:"403 es prohibido: el servidor no te deja acceder."},
    {q:"¿En qué capa OSI está HTTP?", o:["3","4","7","1"], a:2, e:"HTTP es un protocolo de la capa 7, aplicación."},
    {q:"¿Qué viene después de SYN-ACK en el saludo de TCP?", o:["SYN","FIN","ACK","RST"], a:2, e:"El cliente responde ACK y la conexión queda abierta."}
  ],
  cards:[],
  keys:["Repaso de redes y web hecho: revisa lo que fallaste."]
},
{ id:"s27", w:6, day:"Mar", title:"Repaso: Linux",
  goal:"Comprobar sin ayuda los comandos de Linux que usaste en Bandit.",
  links:[],
  concept:["Mismo método que ayer: quiz sin mirar y luego repaso solo de lo que fallaste."],
  steps:[
    "Responde el quiz sin mirar nada.",
    "Si fallaste algo, vuelve a hacer el nivel de Bandit donde lo usaste.",
    "Repasa tus tarjetas pendientes."
  ],
  hint:"Si no recuerdas un comando, man nombre-del-comando muestra su manual dentro de Bandit.",
  quiz:[
    {q:"¿Cómo ves los archivos ocultos?", o:["ls -a","cat -a","find -o","pwd -a"], a:0, e:"ls -a muestra también los que empiezan por punto."},
    {q:"¿Qué hace 2>/dev/null?", o:["Oculta los errores","Borra el disco","Guarda la salida","Cambia de usuario"], a:0, e:"Manda los mensajes de error a la basura."},
    {q:"Quieres contar líneas repetidas de un archivo. ¿Qué usas?", o:["uniq -c archivo","sort archivo | uniq -c","grep -c archivo","wc archivo"], a:1, e:"sort junta las iguales y uniq -c las cuenta."},
    {q:"¿Cómo lees un archivo llamado “-”?", o:["cat -","cat ./-","ls -","read -"], a:1, e:"Con la ruta ./- la terminal sabe que es un archivo."}
  ],
  cards:[],
  keys:["Repaso de Linux hecho: revisa lo que fallaste."]
},
{ id:"s28", w:6, day:"Mié", title:"Repaso: conceptos de seguridad",
  goal:"Cerrar pendientes y comprobar los conceptos de seguridad.",
  links:[],
  concept:["Última sesión de repaso antes de la prueba. Termina lo pendiente para llegar limpio al jueves."],
  steps:[
    "Responde el quiz sin mirar nada.",
    "Termina cualquier tarea pendiente de semanas anteriores.",
    "Deja tus tarjetas pendientes en cero."
  ],
  hint:"Mejor llegar al jueves con pocas cosas bien sabidas que con muchas a medias.",
  quiz:[
    {q:"Alguien tumba una página con tráfico falso. ¿Qué parte de la tríada CIA rompe?", o:["Confidencialidad","Integridad","Disponibilidad"], a:2, e:"Si el servicio no está disponible, se rompe la disponibilidad."},
    {q:"¿Qué es un CVE?", o:["Un exploit","El identificador de una vulnerabilidad pública","Un tipo de virus","Un puerto"], a:1, e:"Un nombre único para cada vulnerabilidad conocida."},
    {q:"Base64 es…", o:["Cifrado fuerte","Codificación reversible sin clave","Un hash","Un protocolo"], a:1, e:"Cualquiera puede decodificarlo."},
    {q:"¿Qué necesitas antes de atacar un sistema real?", o:["Una VPN","Permiso por escrito","Un buen portátil","Nada si es para aprender"], a:1, e:"Sin autorización escrita es un delito."}
  ],
  cards:[],
  keys:["Repaso general hecho: llegas a la prueba con todo cerrado."]
},
{ id:"s29", w:6, day:"Jue", title:"Prueba sin ayuda",
  goal:"Resolver retos nuevos sin pistas y medir cuánto tardas.",
  test:true,
  links:[["Biblioteca de retos picoCTF","https://learn.cylabacademy.org/library"],["OverTheWire Bandit","https://overthewire.org/wargames/bandit/"]],
  concept:[
    "Esta es tu prueba. Elige retos que **no hayas visto antes**: uno de General Skills, uno de Web Exploitation y uno de Cryptography. En Bandit, **rehaz desde cero y sin notas** el nivel 12 → 13 (el siguiente nivel necesita llaves SSH, que aprenderás en la Fase 2).",
    "Sin pistas ni soluciones. Si a los 30 minutos no lo tienes, márcalo como no resuelto y pasa al siguiente. El resultado no tiene que ser perfecto: tiene que ser real."
  ],
  steps:[
    "Pon el temporizador y apunta el tiempo de cada reto abajo.",
    "Haz los 4 retos sin pistas.",
    "Escribe en el cuaderno cuál te costó más y por qué."
  ],
  hint:"La prueba mide dónde estás, no si eres bueno o malo. Un reto no resuelto también es información útil.",
  quiz:null,
  cards:[],
  keys:["Hiciste la prueba sin ayuda: revisa tus tiempos."]
},
{ id:"s30", w:6, day:"Sáb", title:"Revisión final y decisión",
  goal:"Decidir con datos si pasas a la Fase 2.",
  decision:true,
  links:[],
  concept:[
    "Mira tu pestaña Progreso: sesiones hechas, calidad de tu proceso, resultados de los quiz y tus ganas semana a semana.",
    "Luego responde las 5 preguntas con honestidad. Si respondes sí a 4 o a las 5, pasas a la Fase 2."
  ],
  steps:[
    "Revisa la pestaña Progreso completa.",
    "Relee lo que escribiste en la sesión 1 sobre qué hace un hacker ético. Compáralo con lo que sabes hoy.",
    "Responde las 5 preguntas de decisión."
  ],
  hint:"Si sale menos de 4, no es un fracaso: es justo la información que necesitabas antes de elegir carrera.",
  quiz:null,
  cards:[],
  keys:["Tomaste la decisión de la Fase 1 con datos."]
}
];

const DECISION_QS = [
  "¿La mayoría de los días tenías ganas de hacer la sesión?",
  "Cuando te atascaste, ¿volviste al día siguiente sin que nadie te obligara?",
  "¿Sentiste satisfacción al resolver un reto, aunque te costara?",
  "¿Te quedó curiosidad por algo que todavía no sabes hacer?",
  "¿Cumpliste al menos 4 de cada 5 sesiones?"
];

const WEEKS = [
  {n:1, title:"Preparar el terreno", goal:"Tener todo listo y entender qué hace un profesional de seguridad."},
  {n:2, title:"Cómo hablan las computadoras", goal:"Entender qué pasa cuando mandas un mensaje por internet."},
  {n:3, title:"La web por dentro", goal:"Ver lo que pasa entre tu navegador y una página web."},
  {n:4, title:"La terminal de Linux", goal:"Moverte por un servidor remoto solo con comandos."},
  {n:5, title:"Pensar como atacante", goal:"Entender qué es una vulnerabilidad y cómo se aprovecha."},
  {n:6, title:"Prueba final y decisión", goal:"Comprobar qué aprendiste y decidir con datos."}
];

