/* FASE 3: Defensa y ataque. 20 unidades. Todo se practica en laboratorios autorizados; cada ataque se estudia junto con su defensa. */
const P3 = [
{ id:"p3u01", mod:"Ataque", lvl:2, blocks:1, title:"Cómo trabaja un pentester",
  goal:"Conocer las fases de una prueba de penetración y las reglas que la hacen legal.",
  links:[["Sala “Intro to Offensive Security”",THM("offensivesecurityintro")],["Sala “Red Team Fundamentals”",THM("redteamfundamentals")]],
  concept:[
    "Una **prueba de penetración** (pentest) es un ataque autorizado y controlado. Antes de tocar nada se firma el **alcance** (qué sistemas se pueden probar) y las **reglas de enfrentamiento** (qué se permite, cuándo y cómo).",
    "Fases: **1** planificación y permiso, **2** reconocimiento, **3** escaneo y enumeración, **4** explotación, **5** post-explotación, **6** informe. El informe es lo que el cliente paga.",
    "Salirse del alcance, aunque sea por curiosidad, convierte un trabajo legal en un delito."
  ],
  flow:["Permiso y alcance","Reconocimiento","Escaneo","Explotación","Informe"],
  steps:["Haz la sala “Intro to Offensive Security”.","Haz la sala “Red Team Fundamentals”.","Escribe con tus palabras las 6 fases de un pentest y qué se entrega al final."],
  hint:"Recuerda las fases con una pregunta por cada una: ¿puedo?, ¿qué hay?, ¿qué está abierto?, ¿entro?, ¿hasta dónde?, ¿cómo lo explico?",
  quiz:[
    {q:"¿Qué define el alcance de un pentest?",o:["El precio","Qué sistemas se pueden probar","Las herramientas","El horario de comida"],a:1,e:"El alcance limita exactamente qué se puede tocar."},
    {q:"¿Qué es lo que el cliente realmente compra?",o:["Los exploits","El informe con hallazgos y soluciones","El escaneo","La herramienta"],a:1,e:"El valor está en el informe que le permite arreglar los fallos."},
    {q:"Encuentras un servidor interesante fuera del alcance. ¿Qué haces?",o:["Lo pruebas rápido","Lo anotas y avisas, sin tocarlo","Lo pruebas de noche","Lo publicas"],a:1,e:"Fuera del alcance no se toca; se comunica al cliente."}
  ],
  cards:[["Fases de un pentest","Permiso, reconocimiento, escaneo, explotación, post-explotación, informe."],["¿Qué es el alcance?","La lista de sistemas que se pueden probar."]],
  keys:["Pentest = ataque autorizado con alcance firmado.","6 fases; el informe es el producto.","Fuera del alcance no se toca."]
},
{ id:"p3u02", mod:"Defensa", lvl:2, blocks:1, title:"Cómo trabaja un SOC",
  goal:"Entender el día a día de un analista de seguridad defensiva.",
  links:[["Sala “SOC Fundamentals”",THM("socfundamentals")],["Sala “Intro to Defensive Security”",THM("defensivesecurityintro")]],
  concept:[
    "Un **SOC** (centro de operaciones de seguridad) vigila los sistemas de una empresa las 24 horas. Recibe **alertas** de muchas herramientas y decide cuáles son ataques reales.",
    "Un **falso positivo** es una alerta que parecía ataque y no lo era. Un **falso negativo** es un ataque real que no generó alerta, el peor caso.",
    "Para un hacker ético, entender el SOC es clave: te enseña qué deja rastro y cómo piensa quien te detecta."
  ],
  flow:["Alerta","Analista revisa","¿Real?","Responder o cerrar"],
  steps:["Haz la sala “Intro to Defensive Security”.","Haz la sala “SOC Fundamentals”.","Explica en voz alta la diferencia entre falso positivo y falso negativo con un ejemplo."],
  hint:"Piensa en una alarma de casa: si suena por el gato, es falso positivo; si no suena con un ladrón, es falso negativo.",
  quiz:[
    {q:"¿Qué es un falso positivo?",o:["Un ataque no detectado","Una alerta que no era un ataque","Un ataque exitoso","Un virus nuevo"],a:1,e:"La alarma sonó sin motivo real."},
    {q:"¿Cuál es el peor caso para un SOC?",o:["Falso positivo","Falso negativo","Muchas alertas","Una alerta duplicada"],a:1,e:"Un ataque real que pasa sin ser detectado."},
    {q:"¿Por qué le sirve a un hacker ético entender el SOC?",o:["No le sirve","Para saber qué deja rastro y cómo lo detectan","Para trabajar menos","Para cobrar más"],a:1,e:"Atacar bien exige entender la defensa."}
  ],
  cards:[["¿Qué es un SOC?","El centro que vigila y responde a los ataques de una empresa."],["Falso positivo frente a falso negativo","Alerta sin ataque frente a ataque sin alerta."]],
  keys:["SOC vigila y decide qué alertas son reales.","Falso negativo = ataque sin alerta, el peor caso."]
},
{ id:"p3u03", mod:"Defensa", lvl:3, blocks:2, title:"Cyber Kill Chain y MITRE ATT&CK",
  goal:"Usar los dos mapas con los que los profesionales describen un ataque.",
  links:[["MITRE ATT&CK","https://attack.mitre.org/"]],
  concept:[
    "La **Cyber Kill Chain** divide un ataque en 7 fases: reconocimiento, preparación del arma, entrega, explotación, instalación, mando y control, y acciones sobre el objetivo. Cortar cualquier eslabón detiene el ataque.",
    "**MITRE ATT&CK** es una enciclopedia de cómo atacan los grupos reales. Las **tácticas** son el objetivo (el porqué, como “acceso inicial”) y las **técnicas** son el cómo (como “phishing”).",
    "Los equipos rojo y azul usan ATT&CK como idioma común: el rojo dice qué técnica usó y el azul comprueba si la detectó."
  ],
  flow:["Reconocimiento","Entrega","Explotación","Instalación","Mando y control","Objetivo"],
  steps:["Entra en attack.mitre.org y abre la matriz Enterprise.","Busca la técnica Phishing y lee cómo se detecta y cómo se mitiga.","Toma un correo de phishing típico y ubica cada paso en la Kill Chain."],
  hint:"Las columnas de la matriz son tácticas; las casillas dentro de cada columna son técnicas.",
  quiz:[
    {q:"En ATT&CK, ¿qué es una táctica?",o:["El cómo","El objetivo o porqué","Una herramienta","Un virus"],a:1,e:"La táctica es la meta; la técnica, el método."},
    {q:"¿Cuántas fases tiene la Cyber Kill Chain?",o:["3","5","7","10"],a:2,e:"Siete fases, del reconocimiento a las acciones sobre el objetivo."},
    {q:"¿Qué pasa si el defensor corta un eslabón de la cadena?",o:["Nada","El ataque se detiene","El ataque se acelera","Se reinicia"],a:1,e:"Esa es la idea: romper cualquier fase frena el ataque."}
  ],
  cards:[["Táctica frente a técnica en MITRE ATT&CK","Táctica: el objetivo. Técnica: el cómo."],["Las 7 fases de la Cyber Kill Chain","Reconocimiento, arma, entrega, explotación, instalación, mando y control, objetivo."]],
  keys:["Kill Chain: 7 fases; cortar una detiene el ataque.","ATT&CK: tácticas (porqué) y técnicas (cómo)."]
},
{ id:"p3u04", mod:"Ataque", lvl:3, blocks:2, title:"Reconocimiento pasivo y activo",
  goal:"Distinguir la información que se obtiene sin tocar el objetivo de la que exige interactuar con él.",
  links:[["Sala “Passive Reconnaissance”",THM("passiverecon")],["Sala “Active Reconnaissance”",THM("activerecon")]],
  concept:[
    "El **reconocimiento pasivo** usa información pública sin tocar los sistemas del objetivo: registros DNS, buscadores, páginas de la empresa.",
    "El **reconocimiento activo** interactúa con los sistemas (por ejemplo, conectarse a un puerto). Deja rastro y **solo se hace dentro del alcance autorizado**.",
    "Desde el lado defensivo, saber qué información expone tu empresa ayuda a reducir la superficie de ataque."
  ],
  flow:["Pasivo: información pública","Activo: tocar el sistema","Solo dentro del alcance"],
  steps:["Haz la sala “Passive Reconnaissance”.","Haz la sala “Active Reconnaissance”.","Haz una tabla en tu cuaderno: técnica, ¿pasiva o activa?, ¿deja rastro?"],
  hint:"Pregunta clave: ¿mi acción envía algo a los servidores del objetivo? Si sí, es activa.",
  quiz:[
    {q:"Consultar los registros DNS públicos de un dominio es…",o:["Activo","Pasivo","Ilegal siempre","Explotación"],a:1,e:"Usa información pública sin tocar los sistemas del objetivo."},
    {q:"¿Qué tipo de reconocimiento deja rastro en los sistemas del objetivo?",o:["Pasivo","Activo","Ninguno","Los dos igual"],a:1,e:"El activo interactúa directamente con ellos."},
    {q:"¿Cuándo se puede hacer reconocimiento activo?",o:["Siempre","Solo dentro del alcance autorizado","De noche","Con VPN"],a:1,e:"Requiere permiso como cualquier otra prueba."}
  ],
  cards:[["Reconocimiento pasivo frente a activo","Pasivo: información pública sin tocar el objetivo. Activo: interactúa y deja rastro."]],
  keys:["Pasivo = información pública.","Activo = toca el sistema; solo con permiso."]
},
{ id:"p3u05", mod:"Ataque", lvl:3, blocks:3, title:"Nmap en el laboratorio",
  goal:"Descubrir equipos, puertos y servicios de una máquina de práctica.",
  links:[["Sala “Nmap Live Host Discovery”",THM("nmap01")],["Sala “Nmap”",THM("furthernmap")]],
  concept:[
    "**Nmap** es el escáner de red más usado. Responde tres preguntas: qué equipos están encendidos, qué puertos tienen abiertos y qué servicio y versión hay detrás de cada puerto.",
    "Un puerto puede estar **abierto** (un servicio responde), **cerrado** (no hay servicio) o **filtrado** (un firewall impide saberlo).",
    "Las salas te enseñan los comandos. Úsalos **solo contra la IP de tu máquina del laboratorio**. Escanear redes ajenas sin permiso no está permitido."
  ],
  flow:["¿Equipo vivo?","¿Puertos abiertos?","¿Qué servicio y versión?","Anotar"],
  steps:["Haz la sala “Nmap Live Host Discovery”.","Haz la sala “Nmap”.","Crea una chuleta en tu cuaderno con los tipos de escaneo que aprendiste y para qué sirve cada uno."],
  hint:"Si un escaneo tarda demasiado, revisa en la sala cómo limitar los puertos o ajustar la velocidad.",
  quiz:[
    {q:"¿Qué significa un puerto filtrado?",o:["Que está abierto","Que un firewall impide saber su estado","Que no existe","Que está cifrado"],a:1,e:"Algo bloquea las respuestas y Nmap no puede decidir."},
    {q:"¿Para qué sirve detectar la versión de un servicio?",o:["Por curiosidad","Para saber si tiene vulnerabilidades conocidas","Para acelerarlo","No sirve"],a:1,e:"Con la versión se buscan vulnerabilidades públicas (CVE)."},
    {q:"¿Contra qué puedes usar Nmap?",o:["Cualquier IP","Tus equipos o máquinas de laboratorio autorizadas","La red del colegio","Tu proveedor de internet"],a:1,e:"Solo con permiso."}
  ],
  cards:[["Estados de un puerto en Nmap","Abierto, cerrado y filtrado."],["¿Para qué sirve conocer la versión de un servicio?","Para buscar vulnerabilidades conocidas (CVE)."]],
  keys:["Nmap: equipos, puertos, servicios y versiones.","Abierto, cerrado, filtrado.","Solo contra el laboratorio."]
},
{ id:"p3u06", mod:"Defensa", lvl:3, blocks:2, title:"Detectar un ataque en la red: Snort",
  goal:"Ver el otro lado: cómo un sistema de detección reconoce un escaneo o un ataque.",
  links:[["Sala “Snort”",THM("snort")]],
  concept:[
    "Un **IDS** (sistema de detección de intrusos) vigila el tráfico y **alerta** cuando ve algo sospechoso. Un **IPS** además lo **bloquea**.",
    "Snort funciona con **reglas**: patrones que describen tráfico malicioso. Si el tráfico coincide con una regla, genera una alerta.",
    "Después de aprender a escanear, aprender cómo se detecta un escaneo te hace mejor en los dos lados."
  ],
  flow:["Tráfico","Reglas de Snort","¿Coincide?","Alerta o bloqueo"],
  steps:["Haz la sala “Snort”.","Escribe en tu cuaderno la diferencia entre IDS e IPS.","Explica en voz alta por qué un escaneo agresivo es fácil de detectar."],
  hint:"Lee cada regla de izquierda a derecha: acción, protocolo, origen, destino y lo que busca.",
  quiz:[
    {q:"¿Qué diferencia hay entre IDS e IPS?",o:["Ninguna","El IDS alerta; el IPS además bloquea","El IPS solo alerta","El IDS cifra"],a:1,e:"Detección frente a prevención."},
    {q:"¿Con qué detecta Snort el tráfico malicioso?",o:["Con reglas","Al azar","Con contraseñas","Con DNS"],a:0,e:"Compara el tráfico con reglas."},
    {q:"¿Por qué conviene a un atacante ético entender un IDS?",o:["No conviene","Porque sabe qué acciones generan alertas","Para desactivarlo","Para venderlo"],a:1,e:"Entender la detección mejora tu trabajo y tus informes."}
  ],
  cards:[["IDS frente a IPS","IDS detecta y alerta; IPS además bloquea."]],
  keys:["IDS alerta; IPS bloquea.","Snort funciona con reglas."]
},
{ id:"p3u07", mod:"Web", lvl:3, blocks:2, title:"Burp Suite Repeater",
  goal:"Modificar y reenviar peticiones para entender cómo responde un servidor del laboratorio.",
  links:[["Sala “Burp Suite: Repeater”",THM("burpsuiterepeater")]],
  concept:[
    "**Repeater** te deja tomar una petición, cambiar una parte (un parámetro, una cabecera) y reenviarla tantas veces como quieras para comparar respuestas.",
    "Es la forma básica de probar cómo valida el servidor lo que recibe: qué pasa con un valor vacío, muy largo o de otro tipo.",
    "Como siempre: solo contra laboratorios o sistemas con permiso."
  ],
  flow:["Capturar petición","Enviar a Repeater","Cambiar un valor","Comparar respuesta"],
  steps:["Haz la sala “Burp Suite: Repeater”.","Anota tres cambios que probaste y qué respondió el servidor en cada caso.","Explica en voz alta qué buscas cuando comparas dos respuestas."],
  hint:"Cambia una sola cosa cada vez: si cambias varias a la vez, no sabrás cuál provocó la diferencia.",
  quiz:[
    {q:"¿Para qué sirve Repeater?",o:["Para escanear puertos","Para modificar y reenviar una petición","Para cifrar","Para descargar archivos"],a:1,e:"Reenvías la misma petición con cambios controlados."},
    {q:"¿Por qué cambiar una sola cosa cada vez?",o:["Por velocidad","Para saber qué cambio causó la diferencia","Por obligación","No importa"],a:1,e:"Es el método científico aplicado a la web."},
    {q:"¿Dónde puedes usar Repeater?",o:["En cualquier web","Solo en laboratorios o con permiso","En redes sociales","En bancos"],a:1,e:"Modificar peticiones a sistemas ajenos sin permiso no está permitido."}
  ],
  cards:[["¿Qué hace Burp Repeater?","Reenvía una petición con cambios para comparar respuestas."]],
  keys:["Repeater: cambiar y reenviar.","Una sola variable cada vez."]
},
{ id:"p3u08", mod:"Web", lvl:3, blocks:3, title:"OWASP Top 10 en la práctica: Juice Shop",
  goal:"Recorrer los riesgos web más comunes en una tienda vulnerable a propósito.",
  links:[["Sala “OWASP Juice Shop”",THM("owaspjuiceshop")],["OWASP Top 10","https://owasp.org/www-project-top-ten/"]],
  concept:[
    "**OWASP Juice Shop** es una tienda en línea llena de fallos a propósito, creada por OWASP para aprender. Es legal y está hecha para esto.",
    "Cada reto corresponde a una categoría del OWASP Top 10. Al terminar cada uno, pregúntate: ¿qué categoría era y cómo lo arreglaría el programador?",
    "Esta unidad es larga: repártela en varios bloques."
  ],
  flow:["Reto","Categoría OWASP","Causa","Cómo se arregla"],
  steps:["Haz la primera mitad de la sala “OWASP Juice Shop”.","Haz la segunda mitad.","Haz una tabla: reto, categoría OWASP, causa y solución."],
  hint:"Lee bien las pistas de cada tarea de la sala: guían paso a paso.",
  quiz:[
    {q:"¿Qué es OWASP Juice Shop?",o:["Una tienda real","Una aplicación vulnerable a propósito para aprender","Un antivirus","Un CTF de redes"],a:1,e:"Está hecha para practicar legalmente."},
    {q:"Después de encontrar un fallo, ¿qué deberías anotar?",o:["Solo la flag","La causa y cómo se arreglaría","Nada","El nombre del reto"],a:1,e:"Entender la causa y la solución es lo que te hace profesional."},
    {q:"¿Qué organización publica el Top 10 de riesgos web?",o:["Microsoft","OWASP","Google","MITRE"],a:1,e:"OWASP, una fundación abierta dedicada a la seguridad de aplicaciones."}
  ],
  cards:[["¿Qué es OWASP Juice Shop?","Una tienda vulnerable a propósito para practicar seguridad web."]],
  keys:["Juice Shop: practicar el OWASP Top 10 legalmente.","Anota siempre causa y solución."]
},
{ id:"p3u09", mod:"Web", lvl:4, blocks:2, title:"Inyección SQL: entenderla y prevenirla",
  goal:"Entender por qué ocurre la inyección SQL y cómo se evita en el código.",
  links:[["Sala “SQL Injection”",THM("sqlinjectionlm")],["Teoría de PortSwigger","https://portswigger.net/web-security/sql-injection"]],
  concept:[
    "La **inyección SQL** ocurre cuando una aplicación mete lo que escribe el usuario **directamente dentro** de una consulta SQL. Si el texto contiene caracteres especiales de SQL, puede cambiar el significado de la consulta.",
    "La defensa principal son las **consultas parametrizadas**: el código manda la consulta y los datos por separado, y la base de datos nunca confunde datos con instrucciones.",
    "Además: dar a la aplicación solo los permisos mínimos en la base de datos y validar las entradas."
  ],
  code:"# Inseguro: el texto del usuario se pega dentro de la consulta\nconsulta = \"SELECT * FROM usuarios WHERE nombre = '\" + nombre + \"'\"\n\n# Seguro: consulta parametrizada, datos por separado\ncursor.execute(\"SELECT * FROM usuarios WHERE nombre = ?\", (nombre,))",
  steps:["Lee la teoría de PortSwigger sobre inyección SQL.","Haz la sala “SQL Injection”.","Explica en voz alta por qué la versión parametrizada del ejemplo es segura."],
  hint:"Piensa en la diferencia entre una plantilla con huecos que se rellenan y un texto que se pega y se reinterpreta.",
  quiz:[
    {q:"¿Por qué ocurre la inyección SQL?",o:["Por usar HTTPS","Porque la entrada del usuario se mezcla con la consulta","Por tener muchos usuarios","Por usar Python"],a:1,e:"El dato se interpreta como parte de la instrucción."},
    {q:"¿Cuál es la defensa principal?",o:["Esconder el formulario","Consultas parametrizadas","Usar contraseñas largas","Cambiar el puerto"],a:1,e:"Separan los datos de la instrucción."},
    {q:"¿Qué es el principio de mínimo privilegio aplicado aquí?",o:["Que la aplicación tenga solo los permisos que necesita en la base de datos","Que nadie entre","Que todo sea público","Que el usuario sea administrador"],a:0,e:"Si algo falla, el daño queda limitado."}
  ],
  cards:[["Defensa principal contra la inyección SQL","Consultas parametrizadas (datos separados de la instrucción)."],["¿Por qué ocurre la inyección SQL?","Porque la entrada del usuario se mezcla con la consulta."]],
  keys:["Inyección SQL = datos que se interpretan como instrucción.","Defensa: consultas parametrizadas.","Mínimo privilegio en la base de datos."]
},
{ id:"p3u10", mod:"Web", lvl:4, blocks:2, title:"XSS: entenderlo y prevenirlo",
  goal:"Entender el cross-site scripting y sus defensas.",
  links:[["Teoría de PortSwigger sobre XSS","https://portswigger.net/web-security/cross-site-scripting"]],
  concept:[
    "El **XSS** (cross-site scripting) ocurre cuando una web muestra contenido de un usuario sin tratarlo, y ese contenido se ejecuta como código en el navegador de otras personas.",
    "Tipos: **reflejado** (viaja en la petición y vuelve en la respuesta), **almacenado** (se guarda, por ejemplo en un comentario, y afecta a todos los que lo vean) y **basado en DOM** (ocurre en el JavaScript del navegador).",
    "Defensas: **codificar la salida** para que el texto se muestre como texto y no como código, una **política de seguridad de contenido (CSP)** y marcar las cookies de sesión como **HttpOnly** para que JavaScript no pueda leerlas."
  ],
  flow:["Usuario envía contenido","La web lo muestra sin tratar","Se ejecuta en otros navegadores"],
  steps:["Lee la teoría de PortSwigger sobre XSS.","Resuelve el primer laboratorio Apprentice de XSS reflejado. Si te atascas 20 minutos, lee la solución oficial y luego hazlo tú.","Escribe en tu cuaderno las tres defensas y qué evita cada una."],
  hint:"Fíjate dónde aparece tu texto en el HTML de la respuesta: eso explica por qué se ejecuta o no.",
  quiz:[
    {q:"¿Qué tipo de XSS afecta a todos los que ven un comentario?",o:["Reflejado","Almacenado","DOM","Ninguno"],a:1,e:"Se guarda en el servidor y se muestra a todos."},
    {q:"¿Qué hace la codificación de salida?",o:["Cifra la web","Hace que el texto se muestre como texto y no como código","Acelera la página","Bloquea usuarios"],a:1,e:"Convierte los caracteres especiales para que no se interpreten."},
    {q:"¿Para qué sirve la marca HttpOnly en una cookie?",o:["Para que JavaScript no pueda leerla","Para que dure más","Para cifrarla","Para que solo funcione en HTTP"],a:0,e:"Protege la cookie de sesión aunque haya un XSS."}
  ],
  cards:[["Tipos de XSS","Reflejado, almacenado y basado en DOM."],["Defensas contra XSS","Codificar la salida, CSP y cookies HttpOnly."]],
  keys:["XSS = contenido de usuario ejecutado como código en otros navegadores.","Reflejado, almacenado, DOM.","Defensas: codificar salida, CSP, HttpOnly."]
},
{ id:"p3u11", mod:"Web", lvl:4, blocks:2, title:"Autenticación y referencias directas (IDOR)",
  goal:"Entender los fallos de inicio de sesión y de acceso a objetos, y cómo se protegen.",
  links:[["Teoría de autenticación de PortSwigger","https://portswigger.net/web-security/authentication"],["Teoría de control de acceso e IDOR","https://portswigger.net/web-security/access-control"]],
  concept:[
    "Los fallos de **autenticación** permiten entrar como otra persona: contraseñas débiles sin límite de intentos, recuperación de contraseña mal hecha o mensajes de error que revelan si un usuario existe.",
    "Un **IDOR** (referencia directa insegura a objetos) ocurre cuando cambiando un número en la URL, como de `factura=1001` a `factura=1002`, ves datos de otra persona porque el servidor no comprueba que sean tuyos.",
    "Defensas: autenticación de dos factores, límite de intentos, mensajes de error genéricos y comprobar en el servidor que cada objeto pertenece a quien lo pide."
  ],
  flow:["Pedir factura 1002","¿El servidor comprueba el dueño?","Sí: denegado","No: IDOR"],
  steps:["Lee la teoría de autenticación de PortSwigger.","Resuelve un laboratorio Apprentice de autenticación y uno de IDOR del tema de control de acceso.","Para cada uno, anota la causa y la defensa."],
  hint:"En los laboratorios de IDOR, compara lo que ve tu usuario con lo que debería ver.",
  quiz:[
    {q:"Cambias factura=1001 por 1002 y ves la de otra persona. ¿Qué fallo es?",o:["XSS","IDOR","Inyección SQL","Phishing"],a:1,e:"El servidor no comprueba que el objeto sea tuyo."},
    {q:"¿Por qué un login no debería decir “el usuario no existe”?",o:["Por estética","Porque revela qué usuarios existen","Porque es lento","No importa"],a:1,e:"Un mensaje genérico no da pistas al atacante."},
    {q:"¿Qué defensa frena los intentos masivos de contraseñas?",o:["Cambiar el logo","Límite de intentos y doble factor","Usar HTTP","Desactivar el login"],a:1,e:"Limitar intentos y pedir un segundo factor."}
  ],
  cards:[["¿Qué es un IDOR?","Ver objetos de otro usuario cambiando un identificador porque el servidor no comprueba el dueño."],["Defensas de la autenticación","Doble factor, límite de intentos y errores genéricos."]],
  keys:["IDOR: cambiar un id y ver datos ajenos.","Login: doble factor, límite de intentos, errores genéricos."]
},
{ id:"p3u12", mod:"Defensa", lvl:3, blocks:2, title:"Inteligencia de amenazas",
  goal:"Usar información sobre atacantes reales para defender mejor.",
  links:[["Sala “Intro to Cyber Threat Intel”",THM("cyberthreatintel")]],
  concept:[
    "La **inteligencia de amenazas** recopila datos sobre quién ataca, cómo y con qué, para anticiparse.",
    "Los **indicadores de compromiso (IOC)** son rastros concretos: hashes de archivos maliciosos, IP o dominios usados por atacantes.",
    "La **pirámide del dolor** ordena los indicadores según cuánto le cuesta al atacante cambiarlos: un hash lo cambia en segundos; sus **tácticas, técnicas y procedimientos (TTP)** son lo más difícil de cambiar, y por eso lo más valioso de detectar."
  ],
  flow:["Hash","IP","Dominio","Herramientas","TTP (lo más difícil de cambiar)"],
  steps:["Haz la sala “Intro to Cyber Threat Intel”.","Dibuja la pirámide del dolor en tu cuaderno.","Explica en voz alta por qué detectar TTP es mejor que bloquear un hash."],
  hint:"Piensa en el esfuerzo del atacante: ¿qué le obligaría a cambiar toda su forma de trabajar?",
  quiz:[
    {q:"¿Qué es un IOC?",o:["Un antivirus","Un rastro concreto de un ataque, como un hash o una IP","Una contraseña","Un firewall"],a:1,e:"Indicador de compromiso."},
    {q:"En la pirámide del dolor, ¿qué es más difícil de cambiar para un atacante?",o:["El hash","La IP","Sus TTP","El dominio"],a:2,e:"Cambiar su forma de trabajar le cuesta mucho."},
    {q:"¿Para qué sirve la inteligencia de amenazas?",o:["Para atacar","Para anticiparse a los atacantes","Para vender datos","Para nada"],a:1,e:"Conocer al adversario permite defenderse antes."}
  ],
  cards:[["¿Qué es un IOC?","Indicador de compromiso: hash, IP o dominio ligado a un ataque."],["¿Qué está en la cima de la pirámide del dolor?","Las TTP: tácticas, técnicas y procedimientos."]],
  keys:["IOC = rastros concretos.","Pirámide del dolor: TTP lo más valioso de detectar."]
},
{ id:"p3u13", mod:"Defensa", lvl:3, blocks:1, title:"Analizar un correo de phishing",
  goal:"Reconocer un correo de phishing con las técnicas de un analista.",
  links:[["Sala “Security Awareness”",THM("securityawarenessintro")]],
  concept:[
    "El **phishing** sigue siendo la forma más común de empezar un ataque. Un analista revisa: si el remitente real coincide con el nombre mostrado, si los enlaces llevan a donde dicen, y si el mensaje mete prisa o miedo.",
    "Las cabeceras del correo muestran los resultados de **SPF**, **DKIM** y **DMARC**, que comprueban si el servidor que lo envió está autorizado por ese dominio.",
    "Nunca hagas clic en los enlaces ni abras adjuntos de un correo sospechoso: se analizan pasando el ratón por encima y leyendo las cabeceras."
  ],
  flow:["Remitente real","Enlaces (sin clic)","Urgencia o miedo","SPF, DKIM, DMARC"],
  steps:["Haz la sala “Security Awareness”.","Abre un correo de tu carpeta de spam sin hacer clic en nada y busca las 4 señales.","En Gmail, usa “Mostrar original” para ver las cabeceras y localiza los resultados de SPF, DKIM y DMARC."],
  hint:"En Gmail, “Mostrar original” está en el menú de los tres puntos del mensaje.",
  quiz:[
    {q:"El nombre dice “Banco Popular” pero el correo viene de un dominio raro. ¿Qué indica?",o:["Nada","Posible phishing","Que el banco cambió de dominio","Un error de Gmail"],a:1,e:"Que el nombre mostrado y el remitente real no coincidan es una señal clásica."},
    {q:"¿Qué comprueban SPF, DKIM y DMARC?",o:["La ortografía","Que el servidor que envía está autorizado por el dominio","El tamaño","Los adjuntos"],a:1,e:"Validan el origen del correo."},
    {q:"¿Cómo revisas un enlace sospechoso?",o:["Haciendo clic","Pasando el ratón por encima sin hacer clic","Reenviándolo","Respondiendo"],a:1,e:"Así ves la dirección real sin visitarla."}
  ],
  cards:[["Señales de phishing","Remitente distinto, enlaces engañosos, urgencia o miedo, fallos en SPF/DKIM/DMARC."]],
  keys:["Phishing: remitente real, enlaces, urgencia.","SPF, DKIM y DMARC validan el origen.","Nunca hacer clic al analizar."]
},
{ id:"p3u14", mod:"Ataque", lvl:4, blocks:2, title:"Metasploit en el laboratorio",
  goal:"Conocer el framework de explotación más usado y por qué los defensores parchean a tiempo.",
  links:[["Sala “Metasploit: Introduction”",THM("metasploitintro")]],
  concept:[
    "**Metasploit** es un framework que reúne miles de módulos para probar vulnerabilidades conocidas. Lo usan pentesters y también equipos de defensa para comprobar si sus sistemas están parcheados.",
    "Conceptos: un **exploit** aprovecha la vulnerabilidad; una **carga útil** (payload) es lo que se ejecuta después; los módulos **auxiliares** escanean o recopilan información.",
    "La lección defensiva es clara: casi todo lo que hay en Metasploit son fallos con parche publicado. Actualizar a tiempo evita la mayoría de estos ataques."
  ],
  flow:["Vulnerabilidad conocida","Exploit","Carga útil","Lección: parchear"],
  steps:["Haz la sala “Metasploit: Introduction” usando solo la máquina del laboratorio.","Anota la diferencia entre exploit, payload y módulo auxiliar.","Explica en voz alta por qué parchear a tiempo frena la mayoría de estos ataques."],
  hint:"Si te pierdes dentro de la consola, la sala explica cómo pedir ayuda sobre un módulo.",
  quiz:[
    {q:"¿Qué es una carga útil (payload)?",o:["El fallo","Lo que se ejecuta después de aprovechar el fallo","Un escáner","Un informe"],a:1,e:"El exploit abre la puerta; el payload es lo que entra."},
    {q:"¿Qué hacen los módulos auxiliares?",o:["Explotan","Escanean o recopilan información","Cifran","Borran logs"],a:1,e:"Apoyan el reconocimiento y la enumeración."},
    {q:"¿Cuál es la mejor defensa contra fallos conocidos?",o:["Esconder el servidor","Aplicar los parches a tiempo","Cambiar el puerto","Apagar el antivirus"],a:1,e:"Casi todos esos fallos tienen parche publicado."}
  ],
  cards:[["Exploit frente a payload","Exploit: aprovecha el fallo. Payload: lo que se ejecuta después."],["Mejor defensa contra fallos conocidos","Aplicar los parches a tiempo."]],
  keys:["Metasploit: módulos para fallos conocidos.","Exploit, payload, auxiliar.","Parchear a tiempo frena la mayoría."]
},
{ id:"p3u15", mod:"Ataque", lvl:4, blocks:3, title:"Tu primera máquina completa: Vulnversity",
  goal:"Recorrer un pentest de principio a fin en una máquina guiada.",
  links:[["Sala “Vulnversity”",THM("vulnversity")]],
  concept:[
    "Hasta ahora practicaste piezas sueltas. **Vulnversity** te lleva por todo el proceso con guía: reconocimiento, descubrimiento de contenido web, acceso inicial y escalada de privilegios.",
    "Es un **ejemplo resuelto**: la sala te guía paso a paso. Tu tarea es entender por qué se hace cada paso, no solo seguirlo.",
    "Toma notas como si fueras a escribir el informe, porque en la unidad 18 lo harás."
  ],
  flow:["Reconocimiento","Contenido web","Acceso inicial","Escalada","Notas para el informe"],
  steps:["Haz la primera mitad de la sala.","Haz la segunda mitad.","Para cada paso, escribe en tu cuaderno qué hiciste, por qué, y cómo se habría evitado."],
  hint:"Si no entiendes por qué la sala hace un paso, para y búscalo antes de seguir.",
  quiz:[
    {q:"¿Por qué esta sala se considera un ejemplo resuelto?",o:["Porque es fácil","Porque te guía paso a paso por todo el proceso","Porque no tiene flags","Porque es corta"],a:1,e:"Te muestra el camino completo para que lo entiendas antes de hacerlo solo."},
    {q:"¿Qué debes anotar en cada paso?",o:["Solo la flag","Qué hiciste, por qué y cómo se evitaría","Nada","Solo los comandos"],a:1,e:"Eso será la base de tu informe."},
    {q:"¿Qué viene después del acceso inicial?",o:["El reconocimiento","La escalada de privilegios","El permiso","Nada"],a:1,e:"Tras entrar, se busca subir de privilegios."}
  ],
  cards:[["Orden de un pentest típico en una máquina","Reconocimiento, acceso inicial, escalada de privilegios, informe."]],
  keys:["Primer recorrido completo con guía.","Anota qué, por qué y cómo se evitaría."]
},
{ id:"p3u16", mod:"Ataque", lvl:4, blocks:3, title:"Escalada de privilegios en Linux",
  goal:"Entender qué configuraciones de Linux permiten ganar privilegios y cómo se corrigen.",
  links:[["Sala “Linux Privilege Escalation”",THM("linprivesc")]],
  concept:[
    "La **escalada de privilegios** es pasar de un usuario normal a administrador (root). Casi siempre se debe a **configuraciones descuidadas**, no a fallos exóticos.",
    "Causas típicas: reglas de **sudo** demasiado amplias, programas con **setuid** innecesario (lo viste en Bandit), tareas programadas que ejecutan archivos que cualquiera puede modificar, y software sin actualizar.",
    "Para cada causa existe una corrección: mínimo privilegio en sudo, revisar los setuid, permisos correctos en los archivos y parches al día."
  ],
  flow:["Usuario normal","Configuración descuidada","root","Corrección"],
  steps:["Haz la sala “Linux Privilege Escalation”, repartida en varios bloques.","Haz una tabla: causa, cómo se detecta, cómo se corrige.","Explica en voz alta qué tiene que ver esto con los permisos que aprendiste en la Fase 2."],
  hint:"Cada técnica de la sala responde a la pregunta: ¿qué se configuró con más permisos de los necesarios?",
  quiz:[
    {q:"¿Cuál es la causa más común de una escalada de privilegios?",o:["Fallos exóticos","Configuraciones descuidadas","El monitor","La red"],a:1,e:"Permisos y reglas más amplios de lo necesario."},
    {q:"¿Qué corrige una regla de sudo demasiado amplia?",o:["Darle más permisos","Aplicar el mínimo privilegio","Borrar sudo","Cambiar la contraseña"],a:1,e:"Cada usuario solo debe poder hacer lo que necesita."},
    {q:"¿Por qué es peligrosa una tarea programada que ejecuta un archivo que cualquiera puede editar?",o:["Porque es lenta","Porque otro usuario podría cambiar lo que se ejecuta","No es peligrosa","Porque ocupa espacio"],a:1,e:"Si el archivo es editable, el contenido que se ejecuta también."}
  ],
  cards:[["¿Qué es la escalada de privilegios?","Pasar de un usuario normal a administrador o root."],["Causas típicas de escalada en Linux","sudo amplio, setuid innecesario, tareas programadas editables, software sin parches."]],
  keys:["Escalada = de usuario a root.","Casi siempre por configuraciones descuidadas.","Corrección: mínimo privilegio y parches."]
},
{ id:"p3u17", mod:"Ataque", lvl:4, blocks:3, title:"Escalada de privilegios en Windows",
  goal:"Entender las configuraciones de Windows que permiten ganar privilegios y cómo se corrigen.",
  links:[["Sala “Windows PrivEsc”",THM("windows10privesc")]],
  concept:[
    "En Windows la idea es la misma: pasar a **administrador o SYSTEM** aprovechando algo mal configurado.",
    "Causas típicas: **servicios** con permisos débiles que un usuario normal puede modificar, rutas de servicios **sin comillas** que contienen espacios, **credenciales guardadas** en archivos o en el registro, y parches que faltan.",
    "Cada una se corrige revisando permisos de servicios, poniendo comillas en las rutas, no guardando contraseñas en texto y actualizando."
  ],
  flow:["Usuario","Servicio mal configurado","SYSTEM","Corrección"],
  steps:["Haz la sala “Windows PrivEsc”, repartida en varios bloques.","Completa la misma tabla que en Linux: causa, detección, corrección.","Compara en voz alta Linux y Windows: ¿qué tienen en común?"],
  hint:"El denominador común es siempre el mismo: algo tiene más permisos de los que necesita.",
  quiz:[
    {q:"¿Cuál es la cuenta con más privilegios en Windows?",o:["Invitado","SYSTEM","Usuario","Red"],a:1,e:"SYSTEM tiene incluso más control que un administrador normal."},
    {q:"¿Qué riesgo tiene guardar contraseñas en un archivo de texto?",o:["Ninguno","Que cualquiera que lo lea las obtiene","Que se borran","Que se cifran"],a:1,e:"Las credenciales en texto son un regalo para un atacante."},
    {q:"¿Qué tienen en común la escalada en Linux y en Windows?",o:["Nada","Algo tiene más permisos de los necesarios","Usan los mismos comandos","Solo afectan a servidores"],a:1,e:"El principio de mínimo privilegio las previene en ambos."}
  ],
  cards:[["Causas típicas de escalada en Windows","Servicios con permisos débiles, rutas sin comillas, credenciales guardadas, parches que faltan."]],
  keys:["Windows: de usuario a SYSTEM.","Servicios débiles, rutas sin comillas, credenciales guardadas.","Mínimo privilegio en ambos sistemas."]
},
{ id:"p3u18", mod:"Carrera", lvl:3, blocks:2, title:"El informe: donde está el valor",
  goal:"Escribir un informe profesional de pentest a partir de tu trabajo en Vulnversity.",
  links:[["Calculadora CVSS (NVD)","https://nvd.nist.gov/vuln-metrics/cvss/v3-calculator"]],
  concept:[
    "El informe tiene dos lectores: **directivos** (que necesitan saber el riesgo en lenguaje claro) y **técnicos** (que necesitan reproducir y arreglar).",
    "Estructura: **1** resumen ejecutivo, **2** alcance y método, **3** hallazgos (cada uno con título, gravedad CVSS, evidencia, pasos para reproducir e impacto), **4** recomendaciones priorizadas.",
    "Un buen informe se entiende sin estar presente. Sin informe, el pentest no sirve de nada."
  ],
  flow:["Resumen ejecutivo","Alcance","Hallazgos","Recomendaciones"],
  steps:["Escribe el resumen ejecutivo de Vulnversity en 5 líneas, sin palabras técnicas.","Documenta 2 hallazgos con su gravedad usando la calculadora CVSS.","Escribe las recomendaciones ordenadas por prioridad."],
  hint:"Prueba el resumen ejecutivo con alguien de tu familia: si lo entiende, está bien escrito.",
  quiz:[
    {q:"¿Para quién es el resumen ejecutivo?",o:["Para técnicos","Para directivos, en lenguaje claro","Para el atacante","Para nadie"],a:1,e:"Explica el riesgo sin jerga."},
    {q:"¿Qué debe incluir cada hallazgo?",o:["Solo el título","Gravedad, evidencia, cómo reproducirlo, impacto y solución","Solo la flag","El precio"],a:1,e:"Lo necesario para entenderlo y arreglarlo."},
    {q:"¿Qué escala se usa para la gravedad?",o:["CVE","CVSS","OWASP","DNS"],a:1,e:"CVSS puntúa de 0 a 10."}
  ],
  cards:[["Partes de un informe de pentest","Resumen ejecutivo, alcance y método, hallazgos, recomendaciones."]],
  keys:["Dos lectores: directivos y técnicos.","Hallazgo: gravedad, evidencia, reproducción, impacto, solución."]
},
{ id:"p3u19", mod:"Proyecto", lvl:5, blocks:4, title:"Máquina sin guía",
  goal:"Resolver una máquina de laboratorio sin seguir un tutorial, aplicando todo el método.",
  links:[["Sala “Pickle Rick”",THM("picklerick")],["Sala “Simple CTF”",THM("easyctf")]],
  concept:[
    "Ahora quitas la guía. Elige **Pickle Rick** o **Simple CTF** y resuélvela aplicando tu metodología: reconocimiento, enumeración, acceso, escalada y notas.",
    "Regla: **30 minutos sin ayuda** en cada bloqueo. Si sigues atascado, lee solo la pista mínima de un writeup y cierra la pestaña.",
    "Al final escribes un informe corto con el formato de la unidad anterior."
  ],
  flow:["Reconocimiento","Enumeración","Acceso","Escalada","Informe"],
  steps:["Elige la máquina y anota la hora de inicio.","Trabaja la máquina aplicando la metodología, con notas en cada paso.","Si te atascas 30 minutos, toma solo la pista mínima.","Escribe el informe corto: resumen, hallazgos y recomendaciones."],
  hint:"Cuando no sepas qué hacer, vuelve al reconocimiento: casi siempre se te pasó algo ahí.",
  quiz:[
    {q:"Te atascas. ¿Qué haces primero?",o:["Leer el writeup completo","Volver a revisar tu reconocimiento","Abandonar","Reiniciar la máquina sin más"],a:1,e:"La mayoría de bloqueos se deben a algo que no viste al principio."},
    {q:"¿Cuánto esperas antes de mirar una pista en esta unidad?",o:["5 minutos","30 minutos","Nunca","2 horas"],a:1,e:"Más tiempo que en fases anteriores: ya tienes más herramientas."},
    {q:"¿Qué entregas al terminar?",o:["Solo la flag","Un informe corto","Nada","Una captura"],a:1,e:"Practicas el producto real de un pentest."}
  ],
  cards:[["Si te atascas en una máquina, ¿qué revisas primero?","El reconocimiento."]],
  keys:["Sin guía: aplicar todo el método.","30 minutos antes de la pista mínima.","Termina con un informe."]
},
{ id:"p3u20", mod:"Certificación", lvl:5, blocks:6, title:"Preparar y aprobar la eJPT",
  goal:"Prepararte para tu primera certificación práctica de hacking ético.",
  links:[["eJPT (INE Security)","https://ine.com/security/certifications/ejpt-certification"]],
  concept:[
    "La **eJPT** es un examen práctico: te dan un laboratorio y tienes que demostrar lo que sabes hacer, no recitar teoría.",
    "Plan: **1** repasa tus chuletas de Nmap, web y escalada, **2** haz dos o tres máquinas fáciles más sin guía, **3** revisa el temario oficial y marca lo que no domines, **4** reserva el examen cuando lo tengas todo marcado.",
    "Durante el examen, toma notas como en un pentest real. Tu metodología es tu mejor herramienta."
  ],
  flow:["Repasar chuletas","Máquinas sin guía","Temario oficial","Examen"],
  steps:["Lee la página oficial de la eJPT y su temario.","Marca en tu cuaderno los temas que dominas y los que no.","Practica los temas que no dominas.","Haz dos máquinas fáciles más sin guía, con informe.","Reserva y presenta el examen."],
  hint:"Si suspendes, la mayoría de los vales incluyen un segundo intento: revisa tus notas, refuerza lo que falló y vuelve.",
  quiz:[
    {q:"¿Qué tipo de examen es la eJPT?",o:["Teórico de memoria","Práctico, en un laboratorio","Oral","Solo de redes"],a:1,e:"Demuestras habilidades reales."},
    {q:"¿Cuándo deberías reservar el examen?",o:["El primer día","Cuando domines todo el temario según tu lista","Nunca","Sin practicar"],a:1,e:"Con el temario marcado, vas con seguridad."},
    {q:"¿Qué es lo más útil durante el examen?",o:["Adivinar","Tomar notas y seguir tu metodología","Ir rápido","Reiniciar"],a:1,e:"La metodología evita perderse."}
  ],
  cards:[["¿Qué tipo de examen es la eJPT?","Práctico, en un laboratorio."]],
  keys:["eJPT: examen práctico.","Temario marcado antes de reservar.","Metodología y notas durante el examen."]
}
];

/* FASE 4: Especialización y primeros ingresos. 12 unidades. */
const P4 = [
{ id:"p4u01", mod:"Laboratorio", lvl:3, blocks:3, title:"Hack The Box: Starting Point, Tier 0",
  goal:"Empezar en Hack The Box con sus máquinas de introducción.",
  links:[["Hack The Box","https://app.hackthebox.com/"],["Qué es Starting Point","https://help.hackthebox.com/en/articles/6007919-introduction-to-starting-point"]],
  concept:[
    "**Hack The Box** tiene máquinas más realistas que TryHackMe. **Starting Point** es su recorrido de entrada, en tres niveles (Tiers).",
    "El **Tier 0** enseña a conectarte por VPN, enumerar puertos y servicios e interactuar con ellos. Cada máquina se centra en una herramienta o servicio.",
    "Cada Tier mezcla máquinas gratuitas y de pago. Para avanzar con la cuenta gratuita basta con completar las gratuitas."
  ],
  flow:["Cuenta y VPN","Máquina del Tier 0","Enumerar","Interactuar con el servicio"],
  steps:["Crea tu cuenta en Hack The Box y lee el artículo de Starting Point.","Configura la VPN siguiendo las instrucciones de la plataforma.","Completa las máquinas gratuitas del Tier 0, con notas de cada una."],
  hint:"Si la VPN no conecta, revisa que solo tengas una VPN activa a la vez.",
  quiz:[
    {q:"¿Qué enseña el Tier 0 de Starting Point?",o:["Explotación avanzada","Conexión por VPN, enumeración y uso de servicios","Redacción de informes","Programación"],a:1,e:"Es el nivel de introducción."},
    {q:"¿Necesitas pagar para avanzar en Starting Point?",o:["Sí, siempre","No, basta con completar las máquinas gratuitas","Solo en Tier 0","Solo en Tier 2"],a:1,e:"Las gratuitas permiten avanzar."},
    {q:"¿Para qué sirve la VPN de Hack The Box?",o:["Para navegar anónimo","Para conectarte a la red de sus laboratorios","Para descargar juegos","Para cifrar tu disco"],a:1,e:"Las máquinas están en su red privada."}
  ],
  cards:[["¿Qué es Starting Point en Hack The Box?","El recorrido de entrada, en tres niveles (Tiers)."]],
  keys:["Starting Point: 3 Tiers de introducción.","Tier 0: VPN, enumeración, servicios."]
},
{ id:"p4u02", mod:"Laboratorio", lvl:4, blocks:4, title:"Starting Point, Tier 1",
  goal:"Aplicar técnicas básicas de explotación en máquinas de un solo paso.",
  links:[["Hack The Box","https://app.hackthebox.com/"]],
  concept:[
    "El **Tier 1** introduce la explotación básica, todavía con un paso principal por máquina.",
    "Sigue tu metodología de siempre y escribe un writeup corto de cada máquina en tu cuaderno.",
    "Fíjate en los patrones: muchas máquinas comparten causas (configuraciones por defecto, credenciales débiles, software sin parches)."
  ],
  flow:["Enumerar","Identificar el fallo","Un paso de explotación","Writeup"],
  steps:["Completa las máquinas gratuitas del Tier 1.","Escribe un writeup corto de cada una con la causa y la defensa.","Haz una lista de los patrones que se repiten."],
  hint:"Antes de buscar fallos complicados, comprueba lo obvio: configuraciones por defecto y credenciales débiles.",
  quiz:[
    {q:"¿Qué añade el Tier 1 respecto al Tier 0?",o:["Nada","Explotación básica de un paso","Informes","Programación"],a:1,e:"Primeras explotaciones, de un paso principal."},
    {q:"¿Qué causas se repiten mucho en estas máquinas?",o:["Fallos de hardware","Configuraciones por defecto, credenciales débiles y falta de parches","Virus","Cortes de luz"],a:1,e:"Las mismas que en empresas reales."},
    {q:"¿Qué incluye cada writeup?",o:["Solo la flag","La causa y la defensa","Nada","El tiempo"],a:1,e:"Entender la causa y la defensa es lo que aprendes."}
  ],
  cards:[["Causas que más se repiten en máquinas fáciles","Configuraciones por defecto, credenciales débiles y software sin parches."]],
  keys:["Tier 1: explotación básica de un paso.","Busca patrones que se repiten."]
},
{ id:"p4u03", mod:"Laboratorio", lvl:5, blocks:5, title:"Starting Point, Tier 2",
  goal:"Resolver máquinas completas con varios pasos y dos flags.",
  links:[["Hack The Box","https://app.hackthebox.com/"]],
  concept:[
    "El **Tier 2** tiene máquinas completas que encadenan varios pasos: enumeración, acceso inicial y escalada de privilegios hasta root o SYSTEM, con dos flags: `user.txt` y `root.txt`.",
    "Es lo más parecido a un pentest real de esta ruta. Trabaja cada máquina como un proyecto, con informe al final."
  ],
  flow:["Enumeración","Acceso inicial","user.txt","Escalada","root.txt"],
  steps:["Completa las máquinas gratuitas del Tier 2.","Escribe un informe corto de cada una.","Anota cuánto tardaste en cada una para ver tu progreso."],
  hint:"Separa las dos mitades: primero céntrate solo en conseguir user.txt.",
  quiz:[
    {q:"¿Qué dos flags tiene una máquina del Tier 2?",o:["flag1 y flag2","user.txt y root.txt","pico y ctf","inicio y fin"],a:1,e:"Una por el acceso de usuario y otra por la escalada."},
    {q:"¿Qué pasos encadena una máquina completa?",o:["Solo escaneo","Enumeración, acceso inicial y escalada","Solo escalada","Solo informe"],a:1,e:"Es el ciclo completo."},
    {q:"¿Por qué anotar cuánto tardas?",o:["Por competir","Para medir tu progreso","No sirve","Para el ranking"],a:1,e:"Ver que tardas menos es la prueba de que mejoras."}
  ],
  cards:[["Flags de una máquina completa de HTB","user.txt (acceso) y root.txt (escalada)."]],
  keys:["Tier 2: máquinas completas con dos flags.","Trabaja cada una como un proyecto con informe."]
},
{ id:"p4u04", mod:"Comunidad", lvl:3, blocks:2, title:"CTF en equipo",
  goal:"Participar en una competencia CTF real con un equipo.",
  links:[["CTFtime: calendario de competencias","https://ctftime.org/"],["picoCTF (competencia anual)","https://cylabacademy.org/competitors.html"]],
  concept:[
    "En una competencia **CTF en equipo** cada persona se especializa en una categoría (web, cripto, forense...) y se reparten los retos. Es como trabaja un equipo real.",
    "**CTFtime** lista competencias de todo el mundo, muchas en línea y gratuitas. picoCTF celebra una competencia anual cada primavera.",
    "Busca o crea el equipo de CTF de tu universidad: es una de las mejores formas de destacar ante las empresas."
  ],
  flow:["Buscar evento","Formar equipo","Repartir categorías","Competir","Writeups"],
  steps:["Busca en CTFtime una competencia para principiantes en las próximas semanas.","Forma o únete a un equipo (universidad, amigos o comunidad en línea).","Participa y escribe al menos un writeup al terminar (cuando el evento haya acabado)."],
  hint:"Elige una categoría en la que te sientas fuerte y quédate con ella durante el evento.",
  quiz:[
    {q:"¿Qué es CTFtime?",o:["Un antivirus","Un calendario de competencias CTF","Un curso","Una certificación"],a:1,e:"Reúne eventos CTF de todo el mundo."},
    {q:"¿Cómo se organiza un equipo de CTF?",o:["Todos hacen lo mismo","Cada uno se especializa en una categoría","Uno solo hace todo","Al azar"],a:1,e:"Reparto por especialidad, como en un equipo real."},
    {q:"¿Cuándo publicar el writeup de un reto de competencia?",o:["Durante el evento","Cuando el evento haya terminado","Nunca","Antes de empezar"],a:1,e:"Publicar soluciones durante el evento rompe las reglas."}
  ],
  cards:[["¿Dónde se encuentran competencias CTF?","En CTFtime (ctftime.org)."]],
  keys:["CTF en equipo: especialización por categoría.","CTFtime para encontrar eventos.","Writeups solo después del evento."]
},
{ id:"p4u05", mod:"Recompensas", lvl:3, blocks:2, title:"Cómo funcionan las recompensas por fallos",
  goal:"Entender las reglas de los programas de bug bounty antes de participar.",
  links:[["HackerOne Hacktivity (informes públicos)","https://hackerone.com/hacktivity"]],
  concept:[
    "En un **programa de recompensas por fallos** (bug bounty), una empresa invita a investigadores a buscar fallos en sistemas concretos y paga por los válidos.",
    "Cada programa tiene un **alcance** (qué se puede probar), **reglas** (qué técnicas están prohibidas) y una política de **divulgación responsable**: el fallo se comunica en privado a la empresa y no se publica hasta que se arregla.",
    "Hay programas que no pagan, llamados **VDP** (programas de divulgación de vulnerabilidades). Son buenos para empezar y ganar experiencia."
  ],
  flow:["Leer el programa","Alcance y reglas","Probar solo lo permitido","Informar en privado"],
  steps:["Lee las reglas completas de tres programas públicos y anota qué tienen en común.","Escribe en tu cuaderno qué está siempre prohibido (por ejemplo, afectar a otros usuarios o tumbar el servicio).","Explica en voz alta qué es la divulgación responsable."],
  hint:"Si una regla no está clara, se pregunta al programa antes de probar. Nunca se asume.",
  quiz:[
    {q:"¿Qué define lo que puedes probar en un programa?",o:["Tu intuición","El alcance publicado","Lo que encuentres","Nada"],a:1,e:"Solo lo que el programa incluye explícitamente."},
    {q:"¿Qué es la divulgación responsable?",o:["Publicar el fallo enseguida","Comunicarlo en privado y no publicarlo hasta que se arregle","Venderlo","Ignorarlo"],a:1,e:"Protege a los usuarios mientras se corrige."},
    {q:"¿Qué es un VDP?",o:["Un programa que siempre paga","Un programa de divulgación que normalmente no paga","Un virus","Una VPN"],a:1,e:"Sirve para ganar experiencia y reputación."}
  ],
  cards:[["¿Qué es la divulgación responsable?","Comunicar el fallo en privado y no publicarlo hasta que se arregle."],["¿Qué es un VDP?","Programa de divulgación de vulnerabilidades, normalmente sin pago."]],
  keys:["Bug bounty: alcance, reglas, divulgación responsable.","VDP para empezar sin presión."]
},
{ id:"p4u06", mod:"Recompensas", lvl:3, blocks:2, title:"Aprende de 10 informes públicos",
  goal:"Estudiar cómo escriben y piensan los investigadores con experiencia.",
  links:[["HackerOne Hacktivity","https://hackerone.com/hacktivity"]],
  concept:[
    "Los informes **divulgados públicamente** muestran fallos reales ya corregidos. Son un ejemplo resuelto de cómo piensa un investigador.",
    "Para cada informe fíjate en: qué tipo de fallo era, cómo lo encontró, cómo lo explicó y qué impacto demostró sin causar daño."
  ],
  flow:["Leer informe","Tipo de fallo","Cómo lo encontró","Cómo lo explicó"],
  steps:["Lee 10 informes divulgados de tipos de fallo que ya conoces (IDOR, XSS, control de acceso).","Para cada uno, anota tipo, idea clave y cómo demostró el impacto.","Escribe qué hacen los mejores informes que los peores no hacen."],
  hint:"Empieza por informes cortos y de tipos de fallo que estudiaste en la Fase 3.",
  quiz:[
    {q:"¿Por qué estudiar informes públicos?",o:["Para copiar fallos","Para aprender cómo piensan y escriben los investigadores","Para ganar dinero rápido","No sirve"],a:1,e:"Son ejemplos resueltos de trabajo real."},
    {q:"¿Cómo demuestra el impacto un buen informe?",o:["Causando daño","De forma mínima y controlada, sin afectar a otros","Publicándolo","No lo demuestra"],a:1,e:"Demostrar sin dañar es parte de las reglas."},
    {q:"¿Qué tipo de fallo ya conoces de la Fase 3?",o:["IDOR","Ninguno","Solo virus","Solo phishing"],a:0,e:"IDOR, XSS y control de acceso los estudiaste."}
  ],
  cards:[["¿Cómo se demuestra el impacto en un informe?","De forma mínima y controlada, sin afectar a otros usuarios."]],
  keys:["Informes públicos = ejemplos resueltos reales.","Demostrar impacto sin causar daño."]
},
{ id:"p4u07", mod:"Recompensas", lvl:5, blocks:6, title:"Tu primer programa, dentro del alcance",
  goal:"Participar con calma en un programa para principiantes respetando todas las reglas.",
  links:[["HackerOne","https://hackerone.com/"]],
  concept:[
    "Elige un programa con alcance amplio y reglas claras, idealmente un VDP. Lee el alcance dos veces y anótalo en tu cuaderno antes de empezar.",
    "Trabaja con tu metodología, céntrate en un solo tipo de fallo que domines y **no esperes dinero al principio**: lo normal es tardar en encontrar el primer fallo válido.",
    "Si dudas de si algo está permitido, no lo hagas y pregunta al programa."
  ],
  flow:["Elegir programa","Anotar alcance","Un tipo de fallo","Informe claro"],
  steps:["Elige un programa y copia su alcance y reglas en tu cuaderno.","Dedica varios bloques a probar un solo tipo de fallo dentro del alcance.","Si encuentras algo, escribe el informe con la estructura que estudiaste; si no, anota lo que aprendiste."],
  hint:"Que no encuentres nada al principio es normal. Lo que mides es tu proceso, no el resultado.",
  quiz:[
    {q:"¿Qué haces antes de probar nada?",o:["Escanear todo","Leer y anotar el alcance y las reglas","Buscar contraseñas","Nada"],a:1,e:"El alcance es el límite legal."},
    {q:"No estás seguro de si algo está permitido. ¿Qué haces?",o:["Probarlo","No hacerlo y preguntar","Hacerlo rápido","Buscar en foros"],a:1,e:"La duda siempre se resuelve preguntando."},
    {q:"¿Qué es lo normal al empezar?",o:["Ganar mucho dinero","Tardar en encontrar el primer fallo válido","Encontrar fallos críticos","Ser baneado"],a:1,e:"La paciencia y el método marcan la diferencia."}
  ],
  cards:[["Regla de oro en bug bounty","Ante la duda sobre el alcance, no lo hagas y pregunta."]],
  keys:["Alcance anotado antes de empezar.","Un tipo de fallo, con calma.","Ante la duda, preguntar."]
},
{ id:"p4u08", mod:"Python", lvl:4, blocks:3, title:"Automatiza tu propio trabajo con Python",
  goal:"Crear herramientas que te ahorren tiempo en tu flujo de trabajo.",
  links:[["Documentación de Python","https://docs.python.org/3/"]],
  concept:[
    "Los profesionales automatizan lo repetitivo. Ideas para tu propio trabajo: un script que cree la plantilla de informe con fecha y nombre de la máquina, otro que organice tus capturas por carpeta, otro que convierta tus notas en una tabla.",
    "Escribe tú el código. Puedes preguntar dudas, pero el diseño y las líneas son tuyos: así se ve en tu portafolio."
  ],
  steps:["Elige una tarea repetitiva de tu flujo de trabajo.","Escribe el script que la automatiza.","Añade instrucciones de uso al principio del archivo.","Guárdalo para tu portafolio."],
  hint:"Empieza por la versión más pequeña que funcione y mejórala después.",
  quiz:[
    {q:"¿Qué conviene automatizar?",o:["Lo que haces una vez","Lo repetitivo","Nada","Lo divertido"],a:1,e:"Lo repetitivo es donde más tiempo ahorras."},
    {q:"¿Por qué escribir tú el código?",o:["Por obligación","Porque es tu aprendizaje y tu portafolio","Porque la IA no sabe","No importa"],a:1,e:"Las empresas valoran lo que sabes hacer tú."},
    {q:"¿Cómo empezar un script nuevo?",o:["Con todas las funciones a la vez","Con la versión más pequeña que funcione","Copiando otro","Sin probarlo"],a:1,e:"Funciona primero, mejora después."}
  ],
  cards:[],
  keys:["Automatiza lo repetitivo.","Versión mínima primero."]
},
{ id:"p4u09", mod:"Carrera", lvl:2, blocks:2, title:"Tu portafolio en GitHub",
  goal:"Reunir tu trabajo en un portafolio público que puedas enseñar a las empresas.",
  links:[["GitHub","https://github.com/"]],
  concept:[
    "Un portafolio demuestra lo que sabes hacer mejor que cualquier título. Incluye: tus scripts de Python, writeups **permitidos** (de máquinas retiradas o retos cuyas reglas lo permitan) y un archivo README que te presente.",
    "Nunca publiques soluciones de máquinas o retos activos, ni nada de un programa de recompensas sin permiso de la empresa."
  ],
  flow:["README","Scripts","Writeups permitidos","Enlace en tu CV"],
  steps:["Crea tu cuenta de GitHub y un repositorio llamado portafolio.","Escribe un README que diga quién eres y qué estás aprendiendo.","Sube tus scripts de Python y 2 o 3 writeups permitidos."],
  hint:"Un README claro y corto vale más que muchos archivos sin explicar.",
  quiz:[
    {q:"¿Qué writeups puedes publicar?",o:["Todos","Solo los permitidos por las reglas de la plataforma","Los de máquinas activas","Los de bug bounty sin permiso"],a:1,e:"Respeta siempre las reglas de cada plataforma."},
    {q:"¿Qué es lo primero que ve alguien en tu portafolio?",o:["El código","El README","Las fotos","Nada"],a:1,e:"El README es tu presentación."},
    {q:"¿Por qué un portafolio vale tanto?",o:["Porque es bonito","Porque demuestra lo que sabes hacer","Porque es obligatorio","No vale"],a:1,e:"Muestra habilidades reales."}
  ],
  cards:[],
  keys:["Portafolio: README, scripts, writeups permitidos.","Nada activo ni de bug bounty sin permiso."]
},
{ id:"p4u10", mod:"Carrera", lvl:2, blocks:2, title:"CV, LinkedIn y tu primera pasantía",
  goal:"Preparar tu perfil profesional y buscar tu primera pasantía en seguridad.",
  links:[["LinkedIn","https://www.linkedin.com/"]],
  concept:[
    "Tu CV de seguridad destaca por **evidencias**: certificación eJPT, máquinas resueltas, competencias CTF, portafolio en GitHub.",
    "En LinkedIn, pon un titular claro (por ejemplo, “Estudiante de ciberseguridad · eJPT”), enlaza tu portafolio y comparte lo que aprendes.",
    "Las pasantías suelen salir en bancos, empresas de telecomunicaciones, consultoras y el gobierno. Pregunta también en tu universidad."
  ],
  steps:["Escribe tu CV en una página, con una sección de proyectos y certificaciones.","Actualiza tu perfil de LinkedIn con titular, foto profesional y enlace al portafolio.","Haz una lista de 10 empresas donde te gustaría hacer la pasantía y busca sus ofertas."],
  hint:"Pide a un profesor o a alguien del sector que revise tu CV antes de enviarlo.",
  quiz:[
    {q:"¿Qué hace destacar un CV de ciberseguridad?",o:["Muchas páginas","Evidencias: certificaciones, máquinas, CTF y portafolio","Colores llamativos","Una foto grande"],a:1,e:"Lo que puedes demostrar."},
    {q:"¿Qué debe tener tu titular de LinkedIn?",o:["Nada","Tu rol y una credencial clara","Un chiste","Tu dirección"],a:1,e:"Que se entienda en una línea quién eres."},
    {q:"¿Dónde suelen salir pasantías de seguridad?",o:["Solo en el extranjero","Bancos, telecomunicaciones, consultoras y gobierno","En ningún sitio","Solo en redes sociales"],a:1,e:"Son los sectores que más invierten en seguridad."}
  ],
  cards:[],
  keys:["CV con evidencias.","LinkedIn con titular y portafolio.","Lista de 10 empresas objetivo."]
},
{ id:"p4u11", mod:"Carrera", lvl:3, blocks:2, title:"Trabajo remoto en dólares",
  goal:"Prepararte para trabajar a distancia para empresas de fuera del país.",
  links:[],
  concept:[
    "Tu buen inglés es tu mayor ventaja aquí. Las empresas buscan perfiles que se comuniquen bien y demuestren habilidades con evidencias.",
    "Prepara: entrevistas técnicas en inglés (explica en voz alta una máquina que hayas resuelto), un portafolio sólido y referencias.",
    "Cuidado con las **estafas**: una oferta legítima nunca te pide pagar para empezar ni datos bancarios antes de firmar un contrato."
  ],
  flow:["Inglés técnico","Portafolio","Entrevistas","Contrato legítimo"],
  steps:["Graba un video de 5 minutos explicando en inglés una máquina que resolviste, y escúchalo.","Busca 10 ofertas remotas de puestos de entrada y anota los requisitos que se repiten.","Escribe tu plan para cubrir los requisitos que te faltan."],
  hint:"Explicar en voz alta en inglés es también práctica de recuerdo: refuerza lo que sabes.",
  quiz:[
    {q:"Una oferta te pide pagar para empezar. ¿Qué es?",o:["Normal","Una estafa","Un trámite","Una prueba"],a:1,e:"Un empleo legítimo no cobra por contratarte."},
    {q:"¿Cuál es tu mayor ventaja para el trabajo remoto?",o:["Tu horario","Tu nivel de inglés","Tu computadora","Ninguna"],a:1,e:"La comunicación en inglés abre el mercado internacional."},
    {q:"¿Cómo preparas una entrevista técnica?",o:["Memorizando definiciones","Explicando en voz alta trabajos que hiciste","No se prepara","Leyendo noticias"],a:1,e:"Demostrar experiencia real convence más."}
  ],
  cards:[["Señal de estafa en ofertas de trabajo","Te piden pagar o datos bancarios antes de firmar."]],
  keys:["Inglés + portafolio + entrevistas.","Nunca pagar para empezar un trabajo."]
},
{ id:"p4u12", mod:"Carrera", lvl:4, blocks:2, title:"Camino a la OSCP y tu especialidad",
  goal:"Elegir hacia dónde especializarte y planear tu siguiente gran certificación.",
  links:[["OffSec PEN-200 (OSCP)","https://www.offsec.com/courses/pen-200/"]],
  concept:[
    "La **OSCP** de OffSec es una de las certificaciones de hacking ético más reconocidas por las empresas. Su curso es el PEN-200 y su examen es práctico y exigente.",
    "Antes de ir por ella, elige una **especialidad**: seguridad web, equipo rojo, nube o Active Directory. Profundizar en una te hace más valioso que saber un poco de todo.",
    "Haz tu plan de los próximos 12 meses: especialidad, certificación, proyectos y meta de ingresos."
  ],
  flow:["Elegir especialidad","Certificación avanzada","Proyectos","Primeros ingresos"],
  steps:["Lee la página del PEN-200 y anota los requisitos que ya cumples.","Elige una especialidad y escribe por qué.","Escribe tu plan de 12 meses y compártelo conmigo para revisarlo."],
  hint:"Elige la especialidad que más disfrutaste en las Fases 3 y 4: es la que vas a sostener en el tiempo.",
  quiz:[
    {q:"¿Qué empresa ofrece la OSCP?",o:["CompTIA","OffSec","INE","OWASP"],a:1,e:"OffSec, con su curso PEN-200."},
    {q:"¿Por qué elegir una especialidad?",o:["Por moda","Porque profundizar te hace más valioso","No hace falta","Para estudiar menos"],a:1,e:"Las empresas buscan profundidad en un área."},
    {q:"¿Cómo elegir la especialidad?",o:["La que pague más hoy","La que más disfrutaste practicando","Al azar","La más difícil"],a:1,e:"Lo que disfrutas lo sostienes en el tiempo."}
  ],
  cards:[],
  keys:["OSCP (OffSec PEN-200): certificación avanzada reconocida.","Elegir especialidad y plan de 12 meses."]
}
];

/* Puertas: condiciones para cerrar cada fase y abrir la siguiente. */
const GATES = {
  1: { minProc: 3, exam: null,
       milestones: [] },
  2: { minProc: 3,
       milestones: [
         {id:"presec", label:"Completé la ruta Pre Security en TryHackMe", type:"check"},
         {id:"bandit", label:"Nivel de Bandit alcanzado", type:"number", min:15, unit:"nivel"},
         {id:"pico", label:"Retos de picoCTF resueltos en total", type:"number", min:20, unit:"retos"},
         {id:"script", label:"Escribí yo mismo al menos un script de Python que funciona", type:"check"},
         {id:"writeup", label:"Escribí mi primer writeup completo", type:"check"}
       ],
       exam: [
         {q:"¿Cuántos equipos utilizables caben en un /24?",o:["254","256","24","512"],a:0,e:"256 direcciones menos red y difusión."},
         {q:"¿Qué traduce ARP?",o:["Nombre a IP","IP a MAC en la red local","IP privada a pública","Puerto a servicio"],a:1,e:"ARP trabaja dentro de la red local."},
         {q:"¿Qué significa el permiso 600?",o:["rw-------","rwxrwxrwx","rw-r--r--","r--------"],a:0,e:"Solo el dueño lee y escribe."},
         {q:"¿Con qué permisos se ejecuta un programa setuid?",o:["Los de quien lo lanza","Los de su dueño","Sin permisos","Los de invitado"],a:1,e:"Hereda los del dueño del archivo."},
         {q:"¿Qué devuelve input() en Python?",o:["Un número","Texto","Una lista","Nada"],a:1,e:"Siempre texto."},
         {q:"¿Se puede deshacer un hash?",o:["Sí, con la llave","No, es de un solo sentido","Sí, con Base64","Depende del día"],a:1,e:"Un hash solo se compara, no se revierte."},
         {q:"¿Qué palabra filtra filas en SQL?",o:["SELECT","WHERE","FROM","LIMIT"],a:1,e:"WHERE define la condición."},
         {q:"¿Cuál es la defensa correcta ante un control de acceso roto?",o:["Esconder botones","Comprobar permisos en el servidor en cada petición","Cambiar colores","Usar HTTP"],a:1,e:"Esconder no protege."},
         {q:"¿Qué filtro de Wireshark muestra el DNS?",o:["http","dns","arp","ip.src"],a:1,e:"El filtro dns."},
         {q:"¿Dónde ve un defensor los inicios de sesión en Windows?",o:["Explorador","Visor de eventos","Bloc de notas","Panel de control"],a:1,e:"Registro de Seguridad del Visor de eventos."}
       ] },
  3: { minProc: 3,
       milestones: [
         {id:"labs", label:"Máquinas de laboratorio completadas de principio a fin", type:"number", min:3, unit:"máquinas"},
         {id:"reports", label:"Informes escritos con formato profesional", type:"number", min:2, unit:"informes"},
         {id:"cert", label:"Aprobé la eJPT (o una certificación práctica equivalente)", type:"check"}
       ],
       exam: [
         {q:"¿Qué es lo primero en cualquier pentest?",o:["Escanear","Tener el permiso y el alcance firmados","Explotar","Escribir el informe"],a:1,e:"Sin permiso, no hay pentest legal."},
         {q:"¿Qué es un falso negativo?",o:["Alerta sin ataque","Ataque sin alerta","Un error de red","Un virus"],a:1,e:"El peor caso para un SOC."},
         {q:"En MITRE ATT&CK, ¿qué es una técnica?",o:["El objetivo","El cómo","Una herramienta concreta","Un país"],a:1,e:"Táctica = porqué; técnica = cómo."},
         {q:"¿Qué significa un puerto filtrado?",o:["Abierto","Un firewall impide saber su estado","Cerrado","Cifrado"],a:1,e:"Algo bloquea las respuestas."},
         {q:"¿Cuál es la defensa principal contra la inyección SQL?",o:["Consultas parametrizadas","Esconder formularios","HTTPS","Contraseñas largas"],a:0,e:"Separan los datos de la instrucción."},
         {q:"¿Qué marca de cookie impide que JavaScript la lea?",o:["Secure","HttpOnly","SameSite","Path"],a:1,e:"HttpOnly protege la cookie de sesión."},
         {q:"Cambias un id en la URL y ves datos ajenos. ¿Qué fallo es?",o:["XSS","IDOR","CSRF","DoS"],a:1,e:"Referencia directa insegura a objetos."},
         {q:"¿Qué está en la cima de la pirámide del dolor?",o:["Hashes","IP","TTP","Dominios"],a:2,e:"Lo más difícil de cambiar para el atacante."},
         {q:"¿Cuál es la causa más común de una escalada de privilegios?",o:["Configuraciones descuidadas","Fallos de hardware","El wifi","La pantalla"],a:0,e:"Permisos más amplios de lo necesario."},
         {q:"¿Para quién es el resumen ejecutivo de un informe?",o:["Para técnicos","Para directivos, en lenguaje claro","Para el atacante","Para el SOC"],a:1,e:"Explica el riesgo sin jerga."}
       ] },
  4: { minProc: 3,
       milestones: [
         {id:"tier2", label:"Completé las máquinas gratuitas del Tier 2 de Starting Point", type:"check"},
         {id:"ctf", label:"Participé en al menos una competencia CTF en equipo", type:"check"},
         {id:"portfolio", label:"Mi portafolio en GitHub está publicado", type:"check"},
         {id:"cv", label:"Mi CV y mi LinkedIn están listos", type:"check"}
       ],
       exam: [
         {q:"¿Qué dos flags tiene una máquina completa de HTB?",o:["user.txt y root.txt","a y b","pico y ctf","flag1 y flag2"],a:0,e:"Acceso de usuario y escalada."},
         {q:"¿Qué es la divulgación responsable?",o:["Publicar enseguida","Informar en privado y esperar al arreglo","Vender el fallo","Ignorarlo"],a:1,e:"Protege a los usuarios."},
         {q:"Dudas si algo está en el alcance. ¿Qué haces?",o:["Probarlo","No hacerlo y preguntar","Hacerlo rápido","Nada"],a:1,e:"La duda se resuelve preguntando."},
         {q:"¿Cuándo publicar un writeup de una competencia?",o:["Durante el evento","Cuando termine el evento","Antes","Nunca"],a:1,e:"Durante el evento rompe las reglas."},
         {q:"¿Qué writeups pueden ir en tu portafolio?",o:["Todos","Los permitidos por las reglas de la plataforma","Los de máquinas activas","Los de bug bounty sin permiso"],a:1,e:"Respeta las reglas de cada sitio."},
         {q:"Una oferta remota te pide pagar para empezar. ¿Qué es?",o:["Normal","Una estafa","Un trámite","Un seguro"],a:1,e:"Un empleo legítimo no cobra por contratarte."},
         {q:"¿Qué empresa ofrece la OSCP?",o:["OffSec","INE","CompTIA","Google"],a:0,e:"OffSec, curso PEN-200."},
         {q:"¿Qué hace destacar un CV de seguridad?",o:["Diseño llamativo","Evidencias verificables","Muchas páginas","Una foto"],a:1,e:"Certificaciones, máquinas, CTF y portafolio."},
         {q:"¿Qué es un VDP?",o:["Un programa de divulgación que normalmente no paga","Un virus","Una VPN","Un examen"],a:0,e:"Útil para ganar experiencia."},
         {q:"¿Qué es lo más valioso al especializarte?",o:["Saber un poco de todo","Profundizar en un área que disfrutes","Cambiar cada mes","Solo certificaciones"],a:1,e:"La profundidad te hace más valioso."}
       ] }
};
