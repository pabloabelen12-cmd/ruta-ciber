/* Fase 5 · Especialidad: Seguridad web avanzada y bug bounty (track "web").
   MAPA DE ESTUDIO. Cada técnica se explica a nivel conceptual y se practica en los
   laboratorios oficiales de PortSwigger (Web Security Academy), que son gratuitos,
   legales y traen el paso a paso. El bug bounty solo se hace dentro del "scope"
   (alcance) autorizado de un programa. Probar webs ajenas sin permiso es delito
   (en República Dominicana, Ley 53-07). */
P5.push(
  { id:"p5web01", track:"web", mod:"Herramienta", lvl:4, blocks:3, title:"Dominar Burp Suite de verdad",
    goal:"Pasar de usar Burp a dominarlo: Intruder, Repeater, extensiones y flujo de trabajo profesional.",
    links:[["PortSwigger Web Security Academy (gratis)","https://portswigger.net/web-security"],["BApp Store: extensiones de Burp","https://portswigger.net/bappstore"]],
    concept:[
      "Ya conoces **Burp Suite** de la Fase 2. Aquí lo dominas, porque es *la* herramienta del trabajo web. La **Web Security Academy** de PortSwigger es gratis, es de los creadores de Burp y es el mejor material web que existe.",
      "**Repeater** te deja reenviar una petición cambiando una cosa cada vez: es donde pruebas ideas a mano. **Intruder** automatiza probar muchos valores en un punto (por ejemplo, una lista de nombres de usuario).",
      "Las **extensiones** (BApp Store) amplían Burp. Algunas muy útiles son gratis y funcionan en la versión Community: **Autorize** (prueba fallos de permisos), **Logger++** (registra todo), **JWT Editor** (para tokens). Varias de pago requieren Burp Pro.",
      "La diferencia entre Community (gratis) y Pro (499 USD/año) es sobre todo el **escáner automático** y **Collaborator**. Para aprender y para empezar en bug bounty, Community sobra."
    ],
    flow:["Interceptas con el Proxy","Mandas a Repeater para probar a mano","Usas Intruder para automatizar","Extiendes Burp con extensiones"],
    steps:[
      "Crea tu cuenta gratis en la Web Security Academy y familiarízate con su estructura: temas, cada uno con teoría y laboratorios.",
      "Repasa el uso de **Repeater** e **Intruder** con los laboratorios introductorios de la Academy.",
      "Instala desde el BApp Store las extensiones gratuitas **Autorize**, **Logger++** y **JWT Editor**.",
      "Monta tu flujo: Proxy para capturar, Repeater para probar, Intruder para automatizar. Anótalo en tu cuaderno."
    ],
    hint:"No necesitas Burp Pro para aprender ni para tus primeros bug bounties. Empieza con Community; paga Pro solo cuando el escáner te ahorre tiempo de verdad.",
    quiz:[
      {q:"¿Para qué sirve Repeater?",o:["Escanear puertos","Reenviar una petición cambiando una cosa cada vez, a mano","Crackear contraseñas","Escribir el informe"],a:1,e:"Repeater es para probar ideas manualmente sobre una petición."},
      {q:"¿Qué diferencia principal tiene Burp Pro sobre Community?",o:["El color","El escáner automático y Collaborator","Es ilegal","Nada"],a:1,e:"Pro añade el escáner automático y Collaborator; Community basta para aprender."},
      {q:"¿Cuál es el mejor material web gratuito?",o:["Vídeos sueltos de YouTube","La Web Security Academy de PortSwigger","Un libro de 2005","Foros al azar"],a:1,e:"La Academy de PortSwigger es gratis y de los propios creadores de Burp."}
    ],
    cards:[["¿Qué es la Web Security Academy?","El material web gratuito de PortSwigger, con teoría y laboratorios."],["Repeater vs Intruder","Repeater: probar a mano una petición. Intruder: automatizar muchos valores."],["¿Hace falta Burp Pro para empezar?","No; Community basta para aprender y para los primeros bug bounties."]],
    keys:["La Academy de PortSwigger es el mejor material web, y gratis.","Repeater para probar a mano; Intruder para automatizar.","Community basta para empezar."]
  },
  { id:"p5web02", track:"web", mod:"Identidad", lvl:4, blocks:3, title:"Autenticación, sesiones, JWT y OAuth",
    goal:"Entender cómo las webs te reconocen y qué falla cuando lo hacen mal, el origen de muchísimos fallos graves.",
    links:[["Academy: Authentication","https://portswigger.net/web-security/authentication"],["Academy: JWT","https://portswigger.net/web-security/jwt"]],
    concept:[
      "Cuando inicias sesión, la web te da una **sesión** (normalmente una cookie) para reconocerte en las siguientes páginas sin volver a pedirte la contraseña. Si ese mecanismo falla, alguien puede hacerse pasar por ti.",
      "Un **JWT** (JSON Web Token) es un tipo de token muy usado: un texto firmado que guarda quién eres. Si la web verifica mal la firma, se puede manipular. La Academy tiene un tema entero de laboratorios sobre esto.",
      "**OAuth** es el «iniciar sesión con Google/Facebook». Es cómodo pero tiene muchas formas de configurarse mal, y esos fallos aparecen mucho en bug bounty.",
      "Todo esto se practica en los **laboratorios de la Academy**, que montan una web vulnerable solo para ti y te dan el objetivo. Aquí entiendes el concepto; el paso a paso lo haces allí."
    ],
    flow:["Inicias sesión","La web te da una sesión/token","Si la verifica mal, se puede suplantar","Se practica en los labs de la Academy"],
    steps:[
      "Lee el tema **Authentication** de la Academy y haz sus laboratorios de nivel Apprentice.",
      "Haz el tema **JWT**: entiende qué es un token firmado y por qué una verificación floja es peligrosa.",
      "En tus notas, explica con tus palabras qué es una sesión y por qué robarla equivale a suplantar a alguien.",
      "Resuelve cada laboratorio con la ayuda que da la propia Academy; no busques soluciones fuera hasta intentarlo."
    ],
    hint:"La Academy marca sus laboratorios como Apprentice, Practitioner y Expert. Haz todos los Apprentice de un tema antes de subir: están pensados en ese orden.",
    quiz:[
      {q:"¿Qué es una sesión?",o:["Una contraseña","Lo que la web te da (p. ej. una cookie) para reconocerte tras iniciar sesión","Un puerto","Un virus"],a:1,e:"La sesión te identifica en las páginas siguientes sin repetir la contraseña."},
      {q:"¿Qué es un JWT?",o:["Un antivirus","Un token de texto firmado que guarda quién eres","Un lenguaje","Un escáner"],a:1,e:"Un JSON Web Token es un token firmado con tu identidad."},
      {q:"¿Qué es OAuth?",o:["Un tipo de malware","El mecanismo de «iniciar sesión con Google/Facebook»","Un puerto","Una certificación"],a:1,e:"OAuth permite entrar con la cuenta de otro servicio; se configura mal a menudo."}
    ],
    cards:[["¿Qué es una sesión?","Lo que la web te da (una cookie) para reconocerte tras iniciar sesión."],["¿Qué es un JWT?","Un token de texto firmado que guarda quién eres."],["¿Qué es OAuth?","El «iniciar sesión con Google/Facebook»; fuente común de fallos."]],
    keys:["La sesión te identifica; robarla es suplantar.","JWT: token firmado; verificación floja = peligro.","Se practica en los labs de la Academy."]
  },
  { id:"p5web03", track:"web", mod:"Lado servidor", lvl:5, blocks:3, title:"Fallos del lado del servidor: SSRF, SSTI, XXE y más",
    goal:"Reconocer las familias de fallos que ocurren en el servidor, cómo se ven y, sobre todo, cómo se previenen.",
    links:[["Academy: SSRF","https://portswigger.net/web-security/ssrf"],["Academy: lista de todos los temas","https://portswigger.net/web-security/all-topics"]],
    concept:[
      "Los fallos del **lado del servidor** ocurren en la computadora de la empresa, no en tu navegador, y suelen ser los más graves. La Academy tiene un tema de laboratorios por cada uno.",
      "**SSRF** (Server-Side Request Forgery): engañas al servidor para que haga peticiones por ti, a veces a su propia red interna. Es justo el fallo que, en la nube, puede robar credenciales de una instancia (lo viste en la especialidad de nube).",
      "**SSTI** (inyección de plantilla), **XXE** (entidades XML), **path traversal** (salir de una carpeta) y **subida de archivos** insegura son otras familias. No necesitas memorizarlas hoy: necesitas saber que existen y practicarlas en orden en la Academy.",
      "Para cada familia, lo valioso no es solo verla romper, sino saber **cómo se previene**: validar lo que entra, no confiar en datos del usuario, usar listas de permitidos. Eso es lo que escribes en un informe de bug bounty."
    ],
    flow:["Reconoces la familia del fallo","Lo practicas en el laboratorio de la Academy","Entiendes por qué ocurre","Aprendes a prevenirlo"],
    steps:[
      "Haz el tema **SSRF** de la Academy (nivel Apprentice) y conéctalo con lo que viste de metadatos en la especialidad de nube.",
      "Recorre la lista de temas del lado del servidor y haz los laboratorios Apprentice de cada uno, en orden.",
      "Por cada familia, escribe en tu cuaderno una línea de **prevención**: qué tendría que haber hecho el programador.",
      "Practica solo en los laboratorios de la Academy, nunca contra webs reales sin permiso."
    ],
    hint:"No intentes aprenderte todos los fallos de memoria. Haz un laboratorio Apprentice de cada familia: con eso reconoces el patrón, que es lo que importa.",
    quiz:[
      {q:"¿Dónde ocurren los fallos del lado del servidor?",o:["En tu navegador","En la computadora de la empresa que sirve la web","En tu router","En el teléfono"],a:1,e:"Ocurren en el servidor; por eso suelen ser los más graves."},
      {q:"¿Qué es el SSRF?",o:["Un virus","Engañar al servidor para que haga peticiones por ti, a veces a su red interna","Un escáner de puertos","Una cookie"],a:1,e:"Server-Side Request Forgery: el servidor pide cosas en tu nombre."},
      {q:"Además de verlo romper, ¿qué es lo valioso de cada fallo?",o:["Nada más","Saber cómo se previene, que es lo que va en el informe","El nombre en inglés","Memorizarlo"],a:1,e:"La prevención es lo que se documenta y lo que aporta valor."}
    ],
    cards:[["¿Dónde ocurren los fallos del lado del servidor?","En la computadora de la empresa, no en tu navegador."],["¿Qué es el SSRF?","Engañar al servidor para que haga peticiones por ti (a veces a su red interna)."],["¿Qué conecta el SSRF con la nube?","Puede robar las credenciales de una instancia si no se usa IMDSv2."]],
    keys:["Los fallos de servidor son los más graves.","SSRF, SSTI, XXE, traversal, subida de archivos: familias a reconocer.","Lo que se paga es saber prevenir."]
  },
  { id:"p5web04", track:"web", mod:"Lado cliente", lvl:5, blocks:3, title:"Fallos del lado del cliente: XSS, CSRF y CORS",
    goal:"Dominar los fallos que ocurren en el navegador de la víctima, con el XSS a la cabeza.",
    links:[["Academy: Cross-site scripting (XSS)","https://portswigger.net/web-security/cross-site-scripting"],["Academy: CSRF","https://portswigger.net/web-security/csrf"]],
    concept:[
      "Los fallos del **lado del cliente** se ejecutan en el navegador de otra persona. Ya conociste el **XSS** en la Fase 3; aquí lo llevas a fondo, porque es uno de los fallos más frecuentes y mejor pagados.",
      "**XSS** (Cross-Site Scripting) es lograr que una web muestre y ejecute código tuyo en el navegador de otro usuario. La Academy lo divide en tipos (reflejado, almacenado, basado en DOM) con laboratorios para cada uno.",
      "**CSRF** engaña al navegador de la víctima para que haga una acción sin querer (por ejemplo, cambiar su correo). **CORS** mal configurado puede dejar que otra web lea datos que no debería.",
      "Todo en los **laboratorios de la Academy**. Tu trabajo aquí es reconocer cada tipo y entender la defensa: escapar lo que se muestra, tokens anti-CSRF, configurar CORS con cuidado."
    ],
    flow:["El fallo se ejecuta en el navegador de la víctima","Lo practicas por tipos en la Academy","Entiendes cada variante","Aprendes la defensa de cada una"],
    steps:[
      "Haz el tema **XSS** de la Academy completo a nivel Apprentice: reflejado, almacenado y basado en DOM.",
      "Haz los temas **CSRF** y **CORS** a nivel Apprentice.",
      "Crea una tabla: tipo de fallo → qué logra → cómo se defiende.",
      "Practica solo en los laboratorios; el XSS contra una web real sin permiso es delito."
    ],
    hint:"El XSS tiene fama por algo: aparece constantemente en bug bounty. Dedícale tiempo de más y haz todos sus laboratorios.",
    quiz:[
      {q:"¿Dónde se ejecutan los fallos del lado del cliente?",o:["En el servidor","En el navegador de la víctima","En el router","En Kali"],a:1,e:"Ocurren en el navegador de otro usuario."},
      {q:"¿Qué es el XSS?",o:["Robar puertos","Lograr que una web ejecute código tuyo en el navegador de otro usuario","Un antivirus","Una cookie"],a:1,e:"Cross-Site Scripting inyecta código que corre en el navegador de la víctima."},
      {q:"¿Qué hace el CSRF?",o:["Escanea redes","Engaña al navegador de la víctima para que haga una acción sin querer","Crackea JWT","Cifra datos"],a:1,e:"Fuerza una acción no deseada en nombre de la víctima."}
    ],
    cards:[["Fallos del lado del cliente, ¿dónde ocurren?","En el navegador de la víctima."],["¿Qué es el XSS?","Que una web ejecute código tuyo en el navegador de otro usuario."],["Tipos de XSS","Reflejado, almacenado y basado en DOM."],["¿Qué hace el CSRF?","Engaña al navegador de la víctima para que haga una acción sin querer."]],
    keys:["El cliente = el navegador de la víctima.","El XSS es frecuente y bien pagado: dedícale tiempo.","Para cada fallo, aprende su defensa."]
  },
  { id:"p5web05", track:"web", mod:"Lógica", lvl:5, blocks:3, title:"Lógica de negocio, race conditions y request smuggling",
    goal:"Aprender los fallos que no salen en los escáneres: los que requieren pensar como un humano.",
    links:[["Academy: Business logic vulnerabilities","https://portswigger.net/web-security/logic-flaws"],["Academy: Race conditions","https://portswigger.net/web-security/race-conditions"]],
    concept:[
      "Los fallos de **lógica de negocio** no son bugs técnicos: son errores en las reglas de la aplicación. Por ejemplo, comprar algo con cantidad negativa y que te devuelvan dinero. Ningún escáner los encuentra: hay que pensar.",
      "Las **race conditions** (condiciones de carrera) ocurren cuando dos acciones pasan a la vez y la web no lo maneja bien (por ejemplo, usar un cupón dos veces en el mismo instante). La Academy las enseña con laboratorios.",
      "El **HTTP request smuggling** es un fallo avanzado en cómo los servidores interpretan dónde empieza y termina una petición. Es difícil y muy valorado; va al final por algo.",
      "Estos son los fallos que separan a un cazador de bugs bueno de uno promedio: requieren entender el negocio y probar lo que nadie más prueba. Se practican en la Academy."
    ],
    flow:["El escáner no los ve","Piensas en las reglas del negocio","Pruebas lo inesperado","Lo practicas en los labs"],
    steps:[
      "Haz el tema **Business logic vulnerabilities** de la Academy: verás que muchos son «¿y si hago algo que el programador no esperó?».",
      "Haz el tema **Race conditions** a nivel Apprentice.",
      "Lee (sin agobiarte) el tema **HTTP request smuggling** para saber que existe; volverás a él con más nivel.",
      "Apunta ejemplos de lógica de negocio que se te ocurran para cualquier web que uses a diario (sin probarlos sin permiso)."
    ],
    hint:"Para la lógica de negocio, la mejor pregunta es: «¿qué pasa si hago esto al revés, con un número negativo, dos veces, o en otro orden?». Eso no lo prueba una máquina.",
    quiz:[
      {q:"¿Por qué un escáner no encuentra los fallos de lógica de negocio?",o:["Son invisibles","Son errores en las reglas de la app, no bugs técnicos: hay que pensar","No existen","Son muy raros"],a:1,e:"Dependen del significado del negocio, que una máquina no entiende."},
      {q:"¿Qué es una race condition?",o:["Una carrera de autos","Dos acciones a la vez que la web maneja mal (p. ej. usar un cupón dos veces)","Un tipo de XSS","Una cookie"],a:1,e:"Un problema cuando dos operaciones ocurren simultáneamente."},
      {q:"¿Qué distingue a un buen cazador de bugs?",o:["Tener Burp Pro","Pensar y probar lo que nadie más prueba","Ir rápido","Usar más herramientas"],a:1,e:"Los mejores fallos salen de pensar, no de automatizar."}
    ],
    cards:[["¿Qué es un fallo de lógica de negocio?","Un error en las reglas de la app (p. ej. comprar con cantidad negativa), no un bug técnico."],["¿Qué es una race condition?","Dos acciones a la vez que la web maneja mal (usar un cupón dos veces)."],["¿Por qué el escáner no los ve?","Dependen del significado del negocio, que una máquina no entiende."]],
    keys:["La lógica de negocio se piensa, no se escanea.","Race conditions: dos acciones a la vez mal gestionadas.","Pensar distinto es lo que separa a los buenos."]
  },
  { id:"p5web06", track:"web", mod:"APIs", lvl:5, blocks:2, title:"APIs y GraphQL",
    goal:"Aprender a evaluar las APIs, que mueven las apps modernas y cada vez tienen más peso en bug bounty.",
    links:[["Academy: API testing","https://portswigger.net/web-security/api-testing"],["Academy: GraphQL API vulnerabilities","https://portswigger.net/web-security/graphql"]],
    concept:[
      "Una **API** es la puerta por la que las apps y las webs piden datos al servidor (por ejemplo, cuando la app del banco carga tu saldo). Las apps modernas son casi todo APIs, así que son un objetivo enorme.",
      "Muchas APIs fallan en lo mismo que ya conoces: permisos mal puestos (acceder a datos de otro usuario cambiando un número, el **IDOR** de la Fase 3), autenticación floja, o exponer más de lo que deberían.",
      "**GraphQL** es un tipo de API muy usado que tiene sus propios fallos (por ejemplo, pedir más datos de los permitidos en una sola consulta). La Academy tiene un tema dedicado.",
      "Se practica en los **laboratorios de la Academy**. Si algún día haces bug bounty, muchas de las recompensas grandes están hoy en las APIs."
    ],
    flow:["La app pide datos por una API","Pruebas permisos y autenticación","GraphQL tiene fallos propios","Se practica en los labs"],
    steps:[
      "Haz el tema **API testing** de la Academy.",
      "Haz el tema **GraphQL** a nivel Apprentice.",
      "Conecta con lo que ya sabes: un IDOR en una API es cambiar un número para ver datos de otro. Anótalo.",
      "Practica solo en los laboratorios."
    ],
    hint:"Cuando uses una app del móvil con Burp de por medio (en tu propio laboratorio), verás que casi todo son llamadas a APIs. Ahí está gran parte del trabajo web moderno.",
    quiz:[
      {q:"¿Qué es una API?",o:["Un antivirus","La puerta por la que las apps piden datos al servidor","Un tipo de cookie","Un puerto"],a:1,e:"Una API es la interfaz por la que app y servidor intercambian datos."},
      {q:"¿Qué fallo conocido aparece mucho en APIs?",o:["Ninguno","Permisos mal puestos, como el IDOR","Solo XSS","Solo SQLi"],a:1,e:"El IDOR (acceder a datos de otro cambiando un número) es clásico en APIs."},
      {q:"¿Qué es GraphQL?",o:["Un lenguaje de programación","Un tipo de API muy usado con sus propios fallos","Un escáner","Una base de datos"],a:1,e:"Un tipo de API con vulnerabilidades específicas que la Academy cubre."}
    ],
    cards:[["¿Qué es una API?","La puerta por la que las apps piden datos al servidor."],["¿Qué fallo conocido abunda en APIs?","El IDOR: acceder a datos de otro cambiando un número."],["¿Qué es GraphQL?","Un tipo de API muy usado con fallos propios."]],
    keys:["Las apps modernas son casi todo APIs.","Los fallos de permisos (IDOR) abundan en APIs.","GraphQL tiene su propio tema en la Academy."]
  },
  { id:"p5web07", track:"web", mod:"Bug bounty", lvl:5, blocks:3, title:"Reconocimiento y bug bounty, dentro del alcance",
    goal:"Aprender a buscar objetivos de forma legal y organizada, respetando el alcance de cada programa.",
    links:[["HackerOne: Hacktivity (informes públicos)","https://hackerone.com/hacktivity"],["Bugcrowd University (gratis)","https://github.com/bugcrowd/bugcrowd_university"]],
    concept:[
      "El **bug bounty** es buscar fallos en programas que **invitan** a hacerlo y pagan por los que reportes. La palabra clave es **scope** (alcance): la lista de lo que puedes probar. Salir del scope es ilegal, aunque el programa exista.",
      "El **reconocimiento** a escala (encontrar todos los subdominios y webs de una empresa) se hace con herramientas como **subfinder**, **httpx** y **ffuf**. Son potentes, así que solo se usan **dentro del scope autorizado**.",
      "Antes de probar nada, se lee el **scope y las reglas** del programa: qué dominios entran, qué está prohibido, qué tipo de fallos pagan. Leer bien el scope es la mitad del trabajo.",
      "La mejor forma de aprender es leer **informes públicos** (Hacktivity de HackerOne): ves fallos reales, cómo se explicaron y cuánto pagaron. Es oro para aprender a reportar."
    ],
    flow:["Eliges un programa","Lees su scope y reglas","Reconoces solo dentro del scope","Reportas con claridad"],
    steps:[
      "Lee 10 informes públicos en **Hacktivity** de HackerOne: fíjate en cómo explican el fallo y su impacto.",
      "Estudia el material gratuito de **Bugcrowd University**.",
      "Elige un programa con alcance amplio o un **VDP** (programa de divulgación, sin pago pero legal para practicar) y **copia su scope** en tu cuaderno antes de tocar nada.",
      "Practica el reconocimiento (subfinder, httpx) solo contra dominios que estén en el scope de ese programa."
    ],
    hint:"Regla absoluta: si no está en el scope, no lo tocas. La curiosidad fuera del alcance es la diferencia entre un cazador de bugs y un delincuente.",
    quiz:[
      {q:"¿Qué es el scope en bug bounty?",o:["El pago","La lista de lo que el programa te permite probar","Una herramienta","Un tipo de fallo"],a:1,e:"El scope define qué puedes probar; salir de él es ilegal."},
      {q:"¿Cuándo se usan subfinder, httpx o ffuf?",o:["Contra cualquier web","Solo dentro del scope autorizado de un programa","Nunca","Contra webs del gobierno"],a:1,e:"Solo dentro del alcance permitido; fuera es delito."},
      {q:"¿Cuál es la mejor forma de aprender a reportar?",o:["Inventar","Leer informes públicos reales en Hacktivity","No reportar","Copiar de otros"],a:1,e:"Los informes públicos enseñan a explicar un fallo y su impacto."}
    ],
    cards:[["¿Qué es el scope?","La lista de lo que un programa de bug bounty te permite probar."],["¿Cuándo se usan subfinder/httpx/ffuf?","Solo dentro del scope autorizado."],["¿Qué es un VDP?","Un programa de divulgación: sin pago, pero legal para practicar."],["¿Dónde se aprende a reportar?","Leyendo informes públicos en la Hacktivity de HackerOne."]],
    keys:["El scope lo es todo: fuera de él es delito.","El recon potente solo dentro del alcance.","Los informes públicos enseñan a reportar."]
  },
  { id:"p5web08", track:"web", mod:"Proyecto y certificación", lvl:5, blocks:3, title:"Proyecto final: tu primer reporte y la certificación BSCP",
    goal:"Cerrar la especialidad: una semana de caza dentro de un programa legal con reporte, y fijar la certificación BSCP.",
    links:[["PortSwigger: certificación BSCP","https://portswigger.net/web-security/certification"],["HackerOne: cómo escribir un buen informe","https://docs.hackerone.com/en/articles/8369826-quality-reports"]],
    concept:[
      "**Proyecto final:** dedica una semana a un programa de bug bounty con scope amplio o un VDP. Aunque no encuentres un fallo pagable, el objetivo es **practicar el proceso completo**: elegir, leer el scope, reconocer, probar dentro de las reglas y escribir un informe claro.",
      "Un buen **informe** tiene: resumen, pasos para reproducir el fallo, impacto (qué podría hacer un atacante) y cómo se arregla. La guía de HackerOne te enseña el estándar. Un informe claro vale más que el propio fallo.",
      "**Tu certificación — la BSCP:** el **Burp Suite Certified Practitioner** (99 USD) de PortSwigger es la certificación web más respetada. Es un examen práctico de 4 horas contra webs reales. Antes conviene haber hecho los laboratorios Apprentice y Practitioner de la Academy.",
      "La Academy tiene **exámenes de práctica gratuitos** de la BSCP: hazlos antes de pagar el examen real. Son la mejor señal de si estás listo."
    ],
    flow:["Eliges un programa legal","Trabajas una semana dentro del scope","Escribes un informe profesional","Preparas y haces la BSCP"],
    steps:[
      "Elige un programa (o un VDP) y dedícale una semana real, documentando todo lo que pruebas dentro del scope.",
      "Escribe un informe profesional siguiendo la guía de HackerOne, aunque sea de un fallo pequeño o una práctica.",
      "Haz los **exámenes de práctica gratuitos** de la BSCP en la Academy para medir tu nivel.",
      "Cuando los apruebes con holgura, apunta la fecha para hacer la BSCP real (99 USD)."
    ],
    hint:"No te frustres si tu primera semana de bug bounty no da dinero: casi nadie encuentra algo pagable al principio. Lo que ganas es el proceso y el informe, que es lo que te hará bueno.",
    quiz:[
      {q:"¿Cuál es el objetivo del proyecto final?",o:["Ganar dinero ya","Practicar el proceso completo y escribir un buen informe","Encontrar 100 fallos","Usar Burp Pro"],a:1,e:"El objetivo es el proceso y el informe, no el pago inmediato."},
      {q:"¿Qué es la BSCP?",o:["Un fallo web","La certificación web más respetada, examen práctico de PortSwigger (99 USD)","Una herramienta","Un programa de bug bounty"],a:1,e:"Burp Suite Certified Practitioner: la certificación web de referencia."},
      {q:"¿Qué haces antes de pagar el examen BSCP?",o:["Nada","Los exámenes de práctica gratuitos de la Academy","Comprar Burp Pro","Leer un libro"],a:1,e:"Los simulacros gratis te dicen si estás listo."}
    ],
    cards:[["¿Cuál es el objetivo del proyecto final de web?","Practicar el proceso completo de bug bounty y escribir un buen informe."],["¿Qué es la BSCP?","La certificación web más respetada: examen práctico de PortSwigger (99 USD)."],["¿Qué haces antes de la BSCP real?","Los exámenes de práctica gratuitos de la Academy."]],
    keys:["El proyecto final es una semana de proceso con informe.","Un informe claro vale más que el fallo.","BSCP: 99 USD, con simulacros gratis antes."]
  }
);
Object.assign(PRACTICE, {
  p5web01: [[0,"Crea tu cuenta gratis y repasa Repeater e Intruder con los labs introductorios."],[1,"Instala las extensiones gratis Autorize, Logger++ y JWT Editor."]],
  p5web02: [[0,"Haz el tema Authentication a nivel Apprentice."],[1,"Haz el tema JWT."]],
  p5web03: [[0,"Haz el tema SSRF y conéctalo con la especialidad de nube."],[1,"Recorre la lista de temas del lado del servidor y haz un Apprentice de cada uno."]],
  p5web04: [[0,"Haz el tema XSS completo a nivel Apprentice."],[1,"Haz CSRF y CORS."]],
  p5web05: [[0,"Haz el tema Business logic vulnerabilities."],[1,"Haz Race conditions a nivel Apprentice."]],
  p5web06: [[0,"Haz el tema API testing."],[1,"Haz GraphQL a nivel Apprentice."]],
  p5web07: [[0,"Lee 10 informes públicos en Hacktivity."],[1,"Estudia el material gratis de Bugcrowd University."]],
  p5web08: [[0,"Mira el formato y el precio de la BSCP y haz sus exámenes de práctica gratis."],[1,"Sigue la guía de HackerOne para escribir tu informe."]]
});
Object.assign(UNIT_GUIDES, {
  p5web01: [{ t:"Preparar Burp y la Academy para trabajar en serio, paso a paso", s:[
    "Entra en **portswigger.net/web-security** y pulsa **Register** para crear tu cuenta gratuita de la Academy.",
    "Abre **Burp Suite Community** (lo instalaste en la Fase 2). Arranca con **Temporary project** → **Use Burp defaults** → **Start Burp**.",
    "Ve a la pestaña **Extensions** → **BApp Store**. Busca e instala **Autorize**, **Logger++** y **JWT Editor** (son gratis y funcionan en Community). Si Autorize pide **Jython**, descarga el «Jython standalone» que indica y señálalo en **Extensions** → **Settings**.",
    "Vuelve a la Academy, abre cualquier laboratorio **Apprentice** y pulsa **Access the lab**: se abre una web vulnerable solo para ti.",
    "Ábrela desde el navegador de Burp (**Proxy** → **Open browser**) para que todo tu tráfico pase por Burp mientras practicas.",
    "Deberías ver las peticiones apareciendo en **Proxy → HTTP history**. Ese es tu entorno de trabajo para toda la especialidad."
  ], learn:"Con la cuenta de la Academy, Burp Community y tres extensiones gratis tienes montado el entorno web profesional, todo legal y gratuito." }],
  p5web08: [{ t:"Tu semana de bug bounty y tu informe, paso a paso", s:[
    "Entra en **HackerOne** o **Bugcrowd** y elige un programa con scope amplio, o un **VDP** (programa de divulgación): son legales para practicar aunque no paguen.",
    "Abre su página de **Policy** y **Scope**. Copia en tu cuaderno **exactamente** qué dominios puedes probar y qué está prohibido. No toques nada fuera de esa lista.",
    "Durante la semana, trabaja solo dentro del scope: reconoce con calma y prueba lo que aprendiste en la Academy, documentando cada paso.",
    "Encuentres algo pagable o no, escribe un informe con la guía de HackerOne: **resumen**, **pasos para reproducir**, **impacto** y **solución**.",
    "Por separado, en la Academy, haz un **examen de práctica gratuito de la BSCP** para medir tu nivel real.",
    "Apunta tu plan: cuándo harás la BSCP (99 USD) según cómo te fue en los simulacros. Deberías terminar con un informe de ejemplo y una fecha objetivo."
  ], learn:"Una semana completa dentro del scope de un programa legal, con informe profesional, más los simulacros gratis de la BSCP, te dejan listo para certificarte." }]
});
