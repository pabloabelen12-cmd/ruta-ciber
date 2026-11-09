/* Fase 5 · Especialidad: Seguridad en la nube (track "cloud").
   Enfoque defensivo y de auditoría: proteger, detectar y corregir. Los laboratorios
   ofensivos se practican en su propia plataforma, con su sistema de pistas; aquí se
   explica qué abrir y cómo se previene cada fallo, sin secuencias de explotación. */
P5.push(
  { id:"p5cld01", track:"cloud", mod:"Bases", lvl:4, blocks:2, title:"La nube y la responsabilidad compartida",
    goal:"Entender qué es la nube, qué proteges tú y qué protege el proveedor, antes de tocar nada.",
    links:[["AWS: modelo de responsabilidad compartida (en español)","https://aws.amazon.com/es/compliance/shared-responsibility-model/"],["AWS Cloud Practitioner Essentials (curso gratis)","https://aws.amazon.com/es/training/learn-about/cloud-practitioner/"]],
    concept:[
      "La **nube** es alquilar computadoras, almacenamiento y redes de otra empresa (AWS, Azure, Google) y pagarlas por uso. No compras servidores: los enciendes cuando los necesitas.",
      "La **responsabilidad compartida** es la idea más importante de la seguridad en la nube: el proveedor protege la nube (los centros de datos, el hardware), y **tú** proteges lo que pones dentro (tus datos, quién entra, cómo configuras cada servicio).",
      "Casi todas las filtraciones de la nube no son culpa del proveedor: son de alguien que dejó un depósito de archivos abierto, una clave subida a internet o un permiso de más. Tu trabajo es evitar justo eso.",
      "Los tres grandes son **AWS** (el más usado y el que aprenderás aquí), **Azure** (empresas con Microsoft) y **GCP**. Lo que aprendas en AWS se traslada a los otros."
    ],
    flow:["El proveedor protege la nube","Tú proteges lo que pones dentro","La mayoría de fallos son de configuración","Tu trabajo: cerrar esos huecos"],
    steps:[
      "Lee la página del modelo de responsabilidad compartida y copia en tu cuaderno 3 cosas que proteges tú y 3 que protege AWS.",
      "Mira el primer módulo del curso gratuito Cloud Practitioner Essentials (en español, con tu cuaderno al lado).",
      "Sin mirar, escribe con tus palabras qué significa que la seguridad es «compartida»."
    ],
    hint:"Regla para recordarlo: el proveedor protege la nube; tú proteges lo que va DENTRO de la nube.",
    quiz:[
      {q:"Un depósito S3 queda abierto a internet y se filtran datos. ¿De quién es la responsabilidad?",o:["De AWS, porque es su nube","Del cliente, porque él configuró el acceso","De nadie, es un fallo del sistema","Del usuario que encontró los datos"],a:1,e:"Configurar el acceso a tus datos es responsabilidad del cliente, no del proveedor."},
      {q:"¿Qué protege el proveedor de la nube?",o:["Tus contraseñas","La configuración de tus permisos","El hardware y los centros de datos","Qué datos subes"],a:2,e:"El proveedor protege la infraestructura física; el resto es tuyo."},
      {q:"¿Por qué AWS es buen punto de partida?",o:["Es el único seguro","Es el más usado y lo que aprendes se traslada a los demás","Es gratis para siempre","No tiene responsabilidad compartida"],a:1,e:"AWS domina el mercado y los conceptos se trasladan a Azure y GCP."}
    ],
    cards:[["¿Qué es la responsabilidad compartida?","El proveedor protege la nube; tú proteges lo que pones dentro."],["¿De quién suele ser la culpa en una filtración de la nube?","Del cliente, por una mala configuración (un depósito abierto, una clave filtrada, un permiso de más)."],["¿Cuál es el proveedor más usado?","AWS."]],
    keys:["El proveedor protege la nube; tú, lo que va dentro.","La mayoría de los fallos son de configuración, no del proveedor.","AWS primero; se traslada a Azure y GCP."]
  },
  { id:"p5cld02", track:"cloud", mod:"Cuenta segura", lvl:4, blocks:2, title:"Crea tu cuenta de AWS sin riesgo de pagar",
    goal:"Abrir una cuenta de AWS protegida de entrada: MFA, presupuesto a cero y alertas, para que nunca te llegue una factura sorpresa.",
    links:[["AWS: registro","https://signin.aws.amazon.com/signup?request_type=register"],["AWS: cómo activar MFA (documentación)","https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_mfa_enable_virtual.html"]],
    concept:[
      "Vas a crear tu propia cuenta de AWS. El riesgo real aquí **no es un hacker: es gastar dinero sin querer** por dejar algo encendido. Por eso lo primero es blindar la cuenta y ponerle topes.",
      "La cuenta **root** es la dueña absoluta de todo. Si alguien la roba, lo pierde todo. Por eso se le pone **MFA** (segundo factor: una app en tu teléfono que da un código que cambia cada 30 segundos) y casi no se usa.",
      "Un **presupuesto a cero** (Zero spend budget) te avisa en cuanto cualquier cosa empiece a costar más que la capa gratuita. Las **alertas de la capa gratuita** avisan cuando te acercas a los límites gratis.",
      "Regla de oro de esta especialidad: **apaga y borra todo lo que enciendas** en cuanto termines de usarlo. Un recurso olvidado es lo único que te puede cobrar."
    ],
    flow:["Crear la cuenta","MFA en root","Presupuesto a cero","Alertas de la capa gratuita","Apagar todo al terminar"],
    steps:[
      "Crea la cuenta en el enlace de registro. Elige el **plan Free** (gratuito). Tendrás que meter una tarjeta para verificar identidad, pero el plan Free no cobra nada hasta que tú lo subas de categoría.",
      "Activa MFA en root siguiendo la guía de abajo (Security credentials → Assign MFA device). Usa una app como Google Authenticator o Authy en tu teléfono.",
      "Crea un presupuesto a cero: en **Budgets** → **Create budget** → **Use a template** → **Zero spend budget**, con tu correo.",
      "Activa las alertas de la capa gratuita: **Billing preferences** → **Alert preferences** → marca **Receive AWS Free Tier alerts** → guarda.",
      "Apunta en tu cuaderno: «Al terminar cada laboratorio, apago y borro los recursos». Es tu regla de ahora en adelante."
    ],
    hint:"Nunca uses la cuenta root para el trabajo diario: solo para configurar la cuenta. Para lo demás usarás un usuario IAM (siguiente unidad).",
    quiz:[
      {q:"¿Cuál es el mayor riesgo al abrir una cuenta de AWS de prácticas?",o:["Que te hackeen al instante","Gastar dinero sin querer por dejar algo encendido","Que AWS venda tus datos","Que no funcione"],a:1,e:"El riesgo práctico es la factura por recursos olvidados; por eso se ponen topes antes de nada."},
      {q:"¿Qué es MFA?",o:["Un antivirus","Un segundo factor: un código que cambia cada 30 segundos en tu teléfono","Una tarjeta de crédito","Un tipo de servidor"],a:1,e:"MFA añade un segundo factor además de la contraseña."},
      {q:"¿Para qué sirve un «Zero spend budget»?",o:["Para pagar menos","Para avisarte en cuanto algo empiece a costar más que lo gratis","Para borrar la cuenta","Para crear usuarios"],a:1,e:"Te alerta en cuanto el gasto supera la capa gratuita."}
    ],
    cards:[["¿Para qué se usa la cuenta root?","Solo para configurar la cuenta; nunca para el trabajo diario."],["¿Qué tres protecciones pones nada más crear la cuenta?","MFA en root, presupuesto a cero y alertas de la capa gratuita."],["Regla de oro para no pagar","Apagar y borrar todo lo que enciendas al terminar."]],
    keys:["El riesgo es la factura, no un hacker: pon topes primero.","MFA en root y casi no uses root.","Apaga y borra todo al terminar."]
  },
  { id:"p5cld03", track:"cloud", mod:"Identidad", lvl:4, blocks:3, title:"IAM: quién puede hacer qué",
    goal:"Dominar el control de identidad de AWS: usuarios, roles, políticas y el principio de mínimo privilegio.",
    links:[["AWS IAM: documentación (en español)","https://docs.aws.amazon.com/es_es/IAM/latest/UserGuide/introduction.html"],["AWS Policy Generator","https://awspolicygen.s3.amazonaws.com/policygen.html"]],
    concept:[
      "**IAM** (Identity and Access Management, gestión de identidad y acceso) es el portero de AWS: decide quién entra y qué puede hacer. Es la parte donde más fallos de seguridad se cometen.",
      "Un **usuario** es una persona. Un **grupo** junta usuarios con los mismos permisos. Un **rol** es un disfraz temporal de permisos que algo se pone para una tarea (por ejemplo, un servidor que necesita leer un depósito).",
      "Una **política** es un documento JSON que dice qué acciones se permiten sobre qué recursos. Tiene `Effect` (Allow o Deny), `Action` (qué se puede hacer) y `Resource` (sobre qué).",
      "El **mínimo privilegio** es la regla de oro: a cada quien, solo los permisos que necesita y nada más. La mayoría de los ataques graves en la nube empiezan con un permiso de más que permite saltar a otro sitio."
    ],
    flow:["Usuario o rol","Se le asigna una política","La política dice Allow/Deny sobre acciones y recursos","Mínimo privilegio: solo lo necesario"],
    cmds:[["Ver quién eres (CLI)","aws sts get-caller-identity"],["Listar usuarios","aws iam list-users"],["Listar políticas de un usuario","aws iam list-attached-user-policies --user-name NOMBRE"]],
    steps:[
      "Crea un **usuario IAM** para tu trabajo diario (no uses root). Dale acceso a la consola y activa su MFA también.",
      "Lee una política JSON de ejemplo de la documentación e identifica sus tres partes: `Effect`, `Action` y `Resource`.",
      "Con el Policy Generator, crea una política que solo permita **leer** un depósito S3 concreto. Fíjate en lo específico que puedes ser.",
      "Escribe con tus palabras por qué el mínimo privilegio hace más difícil un ataque."
    ],
    hint:"Si una política lleva `\"Action\": \"*\"` y `\"Resource\": \"*\"`, está dando permiso a todo sobre todo: es justo lo contrario del mínimo privilegio y una señal de alarma.",
    quiz:[
      {q:"¿Qué es un rol de IAM?",o:["Una persona","Un disfraz temporal de permisos que algo se pone para una tarea","Una contraseña","Un servidor"],a:1,e:"Un rol son permisos temporales que un servicio o usuario asume."},
      {q:"¿Qué tres partes tiene una política?",o:["Usuario, grupo y rol","Effect, Action y Resource","Nombre, correo y clave","Red, puerto y protocolo"],a:1,e:"Effect (permitir/denegar), Action (qué) y Resource (sobre qué)."},
      {q:"¿Qué es el mínimo privilegio?",o:["Dar todos los permisos por si acaso","Dar a cada quien solo lo que necesita y nada más","Usar siempre la cuenta root","No usar contraseñas"],a:1,e:"Mínimo privilegio = solo los permisos necesarios, nada más."}
    ],
    cards:[["¿Qué es IAM?","El portero de AWS: decide quién entra y qué puede hacer."],["Partes de una política","Effect (Allow/Deny), Action (qué) y Resource (sobre qué)."],["¿Qué es el mínimo privilegio?","Dar a cada identidad solo los permisos que necesita."],["Señal de alarma en una política","Action \"*\" y Resource \"*\": permiso a todo sobre todo."]],
    keys:["IAM decide quién hace qué: ahí están la mayoría de los fallos.","Política = Effect + Action + Resource.","Mínimo privilegio siempre."]
  },
  { id:"p5cld04", track:"cloud", mod:"Herramientas", lvl:4, blocks:2, title:"La AWS CLI desde tu Kali",
    goal:"Manejar AWS desde la terminal, que es como se audita y se automatiza de verdad.",
    links:[["AWS CLI: instalación (documentación)","https://docs.aws.amazon.com/es_es/cli/latest/userguide/getting-started-install.html"],["AWS CLI: configurar el acceso","https://docs.aws.amazon.com/es_es/cli/latest/userguide/cli-configure-files.html"]],
    concept:[
      "La **AWS CLI** (Command Line Interface, interfaz de línea de comandos) te deja hacer en la terminal todo lo que harías con el ratón en la consola web, pero más rápido y de forma repetible. Las auditorías serias se hacen así.",
      "La usarás desde tu **Kali en WSL2** (el que montaste en la Fase 4). Si no lo tienes, la primera guía de Hack The Box de la Fase 4 te lo explica.",
      "La forma moderna y segura de conectar la CLI con tu cuenta es con inicio de sesión temporal (**aws login** / IAM Identity Center), no con claves de acceso permanentes guardadas en un archivo. Una clave permanente filtrada es una de las causas más comunes de cuentas comprometidas.",
      "Comprueba siempre con quién estás actuando antes de tocar nada: `aws sts get-caller-identity` te dice qué identidad usa la CLI ahora mismo."
    ],
    flow:["Instalar la CLI en Kali","Conectar con sesión temporal","Comprobar la identidad","Trabajar desde la terminal"],
    cmds:[["Ver la versión","aws --version"],["Comprobar tu identidad","aws sts get-caller-identity"],["Listar tus depósitos S3","aws s3 ls"]],
    steps:[
      "Instala la AWS CLI v2 en tu Kali siguiendo la documentación (el método del archivo zip oficial).",
      "Configura el acceso con sesión temporal siguiendo la guía de abajo; evita guardar claves permanentes.",
      "Ejecuta `aws sts get-caller-identity` y comprueba que te devuelve tu usuario.",
      "Ejecuta `aws s3 ls` para ver tus depósitos (al principio no habrá ninguno: es normal)."
    ],
    hint:"Si un comando de la CLI da «Unable to locate credentials», es que no has iniciado sesión: repite la configuración del acceso.",
    quiz:[
      {q:"¿Por qué se prefiere el inicio de sesión temporal a las claves permanentes?",o:["Es más rápido","Una clave permanente filtrada compromete la cuenta; la temporal caduca sola","Es gratis","No necesita internet"],a:1,e:"Las credenciales temporales caducan solas; una clave permanente filtrada es un riesgo duradero."},
      {q:"¿Qué comando te dice con qué identidad actúa la CLI?",o:["aws whoami","aws sts get-caller-identity","aws login","aws id"],a:1,e:"`aws sts get-caller-identity` muestra la identidad activa."},
      {q:"¿Desde dónde usarás la CLI?",o:["Desde la cuenta root en el navegador","Desde tu Kali en WSL2","Desde el iPhone","Desde la consola de AWS únicamente"],a:1,e:"Desde el Kali en WSL2 que montaste en la Fase 4."}
    ],
    cards:[["¿Qué es la AWS CLI?","Manejar AWS desde la terminal, de forma rápida y repetible."],["¿Clave permanente o sesión temporal?","Sesión temporal: caduca sola y no deja una clave filtrable."],["Comando para ver tu identidad en la CLI","aws sts get-caller-identity"]],
    keys:["La auditoría seria se hace por CLI.","Sesión temporal, no claves permanentes.","Comprueba tu identidad antes de actuar."]
  },
  { id:"p5cld05", track:"cloud", mod:"Fallos típicos", lvl:5, blocks:3, title:"Los errores que causan las filtraciones (y cómo se evitan)",
    goal:"Reconocer los tres fallos de configuración más comunes de la nube y saber prevenir cada uno. La práctica ofensiva va en su laboratorio, con su sistema de pistas.",
    links:[["flaws.cloud (laboratorio guiado por pistas)","http://flaws.cloud/"],["flaws2.cloud (laboratorio guiado por pistas)","http://flaws2.cloud/"],["AWS: bloquear el acceso público a S3","https://docs.aws.amazon.com/es_es/AmazonS3/latest/userguide/access-control-block-public-access.html"]],
    concept:[
      "Casi todas las filtraciones de la nube salen de tres errores. Aquí los reconoces y, sobre todo, aprendes a **prevenirlos**, que es el trabajo que te pagarán.",
      "**1. Depósito S3 público.** Alguien marca un depósito de archivos como accesible a todo el mundo «para que sea más fácil». Se evita con **Block Public Access** activado (viene activado por defecto: no lo quites) y políticas de mínimo privilegio.",
      "**2. Metadatos de instancia y SSRF.** Cada servidor de AWS tiene una dirección interna con sus credenciales temporales. Un fallo web del tipo SSRF (que estudiaste en web) puede leerla si el servidor usa la versión vieja del servicio. Se evita **exigiendo IMDSv2**, la versión que pide un token.",
      "**3. Claves filtradas.** Una clave de acceso subida por error a GitHub la encuentran bots en minutos. Se evita **no usando claves permanentes** (unidad anterior), con `git-secrets` para que no se suban, y rotando cualquier clave expuesta.",
      "En los laboratorios (flaws.cloud, CloudGoat) **usa su propio sistema de pistas**: cada escenario te guía paso a paso. No necesitas que yo te dé comandos de ataque; necesitas entender cómo se habría evitado cada fallo."
    ],
    flow:["Reconocer el fallo","Ver cómo se explotaría (en el lab, con sus pistas)","Aprender la prevención","Aplicar la prevención en tu cuenta"],
    steps:[
      "Haz **flaws.cloud**: es un laboratorio que te enseña, nivel a nivel y con pistas, cómo se ven estos fallos. Sigue sus pistas, no busques soluciones fuera.",
      "Por cada nivel que termines, escribe en tu cuaderno **cómo se habría prevenido** ese fallo (la lista de arriba te guía).",
      "En tu propia cuenta, comprueba que **Block Public Access** está activado en S3 (enlace 3).",
      "Cuando termines flaws2.cloud, haz tu propia tabla: fallo → cómo se explota → cómo se previene."
    ],
    hint:"La meta de esta unidad no es «romper», es saber mirar una cuenta y decir «esto está mal configurado y así se arregla». Eso es lo que hace un auditor de nube.",
    quiz:[
      {q:"¿Cómo se previene que un depósito S3 quede público?",o:["Borrándolo","Con Block Public Access activado y mínimo privilegio","Cambiándole el nombre","Poniéndole contraseña al archivo"],a:1,e:"Block Public Access (activado por defecto) y políticas de mínimo privilegio."},
      {q:"¿Qué evita que un SSRF robe las credenciales de un servidor?",o:["Un antivirus","Exigir IMDSv2 (la versión con token)","Apagar el servidor","Usar la cuenta root"],a:1,e:"IMDSv2 exige un token y frena el robo de credenciales por SSRF."},
      {q:"Subiste una clave a GitHub por error. ¿Qué haces?",o:["Nada, nadie la verá","Rotarla (desactivarla y crear otra) de inmediato","Cambiar el nombre del repositorio","Ponerla privada y ya"],a:1,e:"Los bots la encuentran en minutos: hay que rotarla de inmediato; borrarla del repo no basta."}
    ],
    cards:[["Los tres fallos típicos de la nube","S3 público, metadatos/SSRF y claves filtradas."],["¿Cómo se evita un S3 público?","Block Public Access activado y mínimo privilegio."],["¿Cómo se frena el robo de credenciales por SSRF?","Exigiendo IMDSv2."],["Clave filtrada a GitHub: ¿qué haces?","Rotarla de inmediato; borrarla del repo no basta."]],
    keys:["Tres fallos causan casi todas las filtraciones.","Tu valor está en prevenir, no en romper.","En los labs usa su sistema de pistas."]
  },
  { id:"p5cld06", track:"cloud", mod:"Detección", lvl:5, blocks:2, title:"Ver lo que pasa: CloudTrail y GuardDuty",
    goal:"Montar los ojos de tu cuenta: un registro de todo lo que ocurre y un detector automático de amenazas.",
    links:[["AWS CloudTrail (documentación)","https://docs.aws.amazon.com/es_es/awscloudtrail/latest/userguide/cloudtrail-user-guide.html"],["AWS GuardDuty (documentación)","https://docs.aws.amazon.com/es_es/guardduty/latest/ug/what-is-guardduty.html"]],
    concept:[
      "No puedes defender lo que no ves. En la nube, los «ojos» son dos servicios que todo profesional de seguridad configura primero.",
      "**CloudTrail** es la cámara de seguridad: graba cada acción que se hace en la cuenta (quién, qué, cuándo, desde qué IP). El historial de eventos (**Event history**) es gratis y guarda 90 días. Es lo primero que miras cuando investigas un incidente.",
      "**GuardDuty** es el detector de intrusos: analiza solo ese registro y la red, y avisa de cosas raras (un inicio de sesión desde un país nuevo, una instancia hablando con un servidor de malware conocido).",
      "Para aprender sin esperar un ataque real, GuardDuty puede generar **hallazgos de muestra** (Generate sample findings) para que veas cómo se ve una alerta y practiques el triaje, como hacías en la especialidad de SOC."
    ],
    flow:["CloudTrail graba todo","GuardDuty analiza y alerta","Revisas los hallazgos","Investigas con el registro"],
    steps:[
      "En la consola, abre **CloudTrail** → **Event history** y mira los eventos de tu propia actividad reciente. Identifica uno tuyo (quién, qué, cuándo).",
      "Activa **GuardDuty** (tiene prueba gratuita; actívala solo para esta práctica).",
      "En GuardDuty, ve a **Settings** → **Generate sample findings** y observa cómo se ve una alerta: gravedad, tipo, recurso afectado.",
      "Cuando termines, **suspende o desactiva** GuardDuty en Settings para no gastar, y apunta en el cuaderno qué información te dio cada hallazgo."
    ],
    hint:"Esto conecta con la especialidad de SOC: un hallazgo de GuardDuty es una alerta que alguien tiene que triar. Aquí ves de dónde salen.",
    quiz:[
      {q:"¿Qué hace CloudTrail?",o:["Bloquea ataques","Graba cada acción de la cuenta (quién, qué, cuándo, desde dónde)","Crea usuarios","Apaga servidores"],a:1,e:"CloudTrail es el registro de auditoría de todo lo que pasa en la cuenta."},
      {q:"¿Qué hace GuardDuty?",o:["Graba vídeo","Analiza el registro y la red y alerta de cosas sospechosas","Cobra menos","Crea depósitos"],a:1,e:"GuardDuty es el detector de amenazas que genera hallazgos."},
      {q:"¿Por qué desactivas GuardDuty al terminar la práctica?",o:["Porque es peligroso","Para no gastar más allá de la prueba gratuita","Porque no sirve","Para borrar la cuenta"],a:1,e:"Se apaga al terminar para no generar coste, como todo recurso."}
    ],
    cards:[["¿Qué es CloudTrail?","La cámara de seguridad: graba cada acción de la cuenta."],["¿Qué es GuardDuty?","El detector de intrusos: analiza y alerta de cosas raras."],["¿Cuánto guarda gratis el historial de CloudTrail?","90 días (Event history)."]],
    keys:["No defiendes lo que no ves.","CloudTrail graba; GuardDuty alerta.","Un hallazgo de GuardDuty es una alerta de SOC."]
  },
  { id:"p5cld07", track:"cloud", mod:"Auditoría", lvl:5, blocks:3, title:"Auditar una cuenta entera con Prowler",
    goal:"Pasar una revisión automática de seguridad a tu propia cuenta y leer el informe como un auditor.",
    links:[["Prowler (repositorio oficial)","https://github.com/prowler-cloud/prowler"],["CIS AWS Foundations Benchmark (qué se audita)","https://www.cisecurity.org/benchmark/amazon_web_services"]],
    concept:[
      "**Prowler** es una herramienta gratuita que revisa automáticamente cientos de puntos de seguridad de una cuenta de AWS y te da un informe: qué está bien, qué está mal y cómo arreglarlo.",
      "Compara tu cuenta contra estándares reconocidos, como el **CIS Benchmark** (una lista de buenas prácticas que usa la industria). Pasar esa lista es lo que piden muchas auditorías reales.",
      "Prowler solo necesita permisos de **lectura** (las políticas `SecurityAudit` y `ViewOnlyAccess`): mira, no toca nada. Es seguro pasarlo sobre tu propia cuenta.",
      "Saber leer y priorizar su informe (primero lo crítico, luego lo alto) es una habilidad que se paga: es, literalmente, parte del trabajo de un auditor de nube."
    ],
    flow:["Dar permisos de lectura","Ejecutar Prowler","Leer el informe","Arreglar de lo más grave a lo menos"],
    cmds:[["Instalar Prowler","pipx install prowler"],["Auditar contra CIS","prowler aws --compliance cis_4.0_aws"],["Guardar informe en HTML y CSV","prowler aws -M csv html"],["Ver solo lo que falla","prowler aws --status FAIL"]],
    steps:[
      "Instala Prowler en tu Kali con `pipx install prowler` (comprueba el nombre exacto del estándar con `prowler aws --list-compliance`).",
      "Dale a tu usuario de auditoría las políticas `SecurityAudit` y `ViewOnlyAccess` (solo lectura).",
      "Ejecuta `prowler aws -M csv html` y abre el informe HTML en el navegador.",
      "Elige los **3 hallazgos más graves** y, por cada uno, escribe en tu cuaderno qué es, por qué importa y cómo se arregla. Arregla al menos uno en tu cuenta."
    ],
    hint:"No intentes arreglar los cientos de hallazgos de golpe. Ordena por gravedad y empieza por los críticos: así trabaja un auditor de verdad.",
    quiz:[
      {q:"¿Qué hace Prowler?",o:["Ataca cuentas de AWS","Revisa una cuenta y da un informe de seguridad con arreglos","Crea servidores","Borra depósitos"],a:1,e:"Prowler audita (solo lectura) y reporta fallos con su solución."},
      {q:"¿Qué permisos necesita Prowler?",o:["Permisos de administrador total","Solo de lectura (SecurityAudit y ViewOnlyAccess)","La cuenta root","Ninguno"],a:1,e:"Solo lectura: mira, no toca nada."},
      {q:"¿Por dónde empiezas a arreglar su informe?",o:["Por orden alfabético","Por los hallazgos más graves (críticos primero)","Por los más fáciles","No se arregla"],a:1,e:"Se prioriza por gravedad: crítico y alto primero."}
    ],
    cards:[["¿Qué es Prowler?","Una herramienta gratis que audita una cuenta de AWS y reporta fallos con su arreglo."],["¿Qué permisos necesita Prowler?","Solo de lectura: SecurityAudit y ViewOnlyAccess."],["¿Contra qué compara Prowler?","Estándares como el CIS Benchmark."],["¿Por dónde empiezas a corregir?","Por lo crítico, luego lo alto."]],
    keys:["Prowler audita y reporta: solo lectura.","Compara contra el CIS Benchmark.","Prioriza por gravedad."]
  },
  { id:"p5cld08", track:"cloud", mod:"Proyecto y certificación", lvl:5, blocks:3, title:"Contenedores, proyecto final y tu certificación",
    goal:"Cerrar la especialidad: entender contenedores, auditar tu cuenta de principio a fin con informe, y fijar tu certificación.",
    links:[["TryHackMe: Intro to Docker (gratis)","https://tryhackme.com/room/introtodocker"],["Trivy (escáner de contenedores)","https://github.com/aquasecurity/trivy"],["AWS Certified Cloud Practitioner (CLF-C02)","https://aws.amazon.com/es/certification/certified-cloud-practitioner/"],["AWS Certified Security – Specialty (SCS-C03)","https://aws.amazon.com/es/certification/certified-security-specialty/"]],
    concept:[
      "Un **contenedor** (Docker) empaqueta un programa con todo lo que necesita para correr igual en cualquier sitio. Las empresas los usan muchísimo, y una imagen con fallos conocidos es un riesgo común.",
      "**Trivy** es un escáner gratuito que revisa una imagen de contenedor y lista sus vulnerabilidades conocidas. Es el equivalente de Prowler para contenedores. (Dato real para tu informe: Trivy sufrió un ataque a su cadena de suministro en marzo de 2026; buen ejemplo de por qué se verifica lo que se instala.)",
      "**Proyecto final:** haz una auditoría completa de tu propia cuenta de laboratorio. Pasa Prowler, documenta los 5 hallazgos más importantes con su solución, escanea una imagen de Docker con Trivy, y reúnelo todo en un informe en PDF. Súbelo a tu portafolio de GitHub.",
      "**Tu certificación:** el **AWS Cloud Practitioner (CLF-C02, 100 USD, en español)** demuestra las bases y es excelente para un primer empleo. Después, el **Security – Specialty (SCS-C03, 300 USD)** es la que de verdad abre puertas en seguridad de nube."
    ],
    flow:["Entender contenedores","Escanear con Trivy","Auditoría completa con informe","Portafolio","Certificación"],
    steps:[
      "Haz la sala gratuita **Intro to Docker** de TryHackMe para entender contenedores.",
      "Instala Trivy en tu Kali y escanea una imagen pública (por ejemplo, una versión vieja de `nginx`): mira cuántas vulnerabilidades conocidas tiene.",
      "Proyecto final: audita tu cuenta con Prowler, documenta los 5 hallazgos clave con su arreglo, añade el escaneo de Trivy y escribe un informe en PDF.",
      "Sube el informe a tu portafolio de GitHub.",
      "Apunta tu plan: fecha objetivo para el AWS Cloud Practitioner, y después el Security – Specialty."
    ],
    hint:"El informe es tu mejor carta de presentación: enseña que sabes encontrar fallos, priorizarlos y explicar cómo se arreglan. Vale más que decir «sé de nube».",
    quiz:[
      {q:"¿Qué es un contenedor?",o:["Un antivirus","Un paquete con un programa y todo lo que necesita para correr igual en cualquier sitio","Un tipo de servidor físico","Una red"],a:1,e:"Un contenedor empaqueta la app y sus dependencias."},
      {q:"¿Qué hace Trivy?",o:["Crea contenedores","Escanea una imagen y lista sus vulnerabilidades conocidas","Los borra","Los acelera"],a:1,e:"Trivy es el escáner de vulnerabilidades de contenedores."},
      {q:"¿Cuál es la primera certificación recomendada?",o:["OSCP","AWS Cloud Practitioner (CLF-C02)","CISSP","eJPT"],a:1,e:"El Cloud Practitioner demuestra las bases de AWS para un primer empleo."}
    ],
    cards:[["¿Qué es un contenedor?","Un paquete con un programa y todo lo que necesita para correr igual en cualquier sitio."],["¿Qué es Trivy?","Un escáner gratis de vulnerabilidades de imágenes de contenedor."],["Primera certificación de nube","AWS Cloud Practitioner (CLF-C02, 100 USD, en español)."],["Certificación de seguridad de nube","AWS Security – Specialty (SCS-C03, 300 USD)."]],
    keys:["Trivy es el Prowler de los contenedores.","Tu proyecto final es una auditoría con informe en PDF.","Cloud Practitioner primero, Security – Specialty después."]
  }
);
Object.assign(PRACTICE, {
  p5cld01: [[0,"Lee el modelo y apunta 3 cosas que proteges tú y 3 que protege AWS."],[1,"Mira el primer módulo del curso gratuito, con tu cuaderno al lado."]],
  p5cld02: [[0,"Crea la cuenta eligiendo el plan Free. Sigue la guía para los topes de gasto."],[1,"Guía oficial para activar MFA en la cuenta root."]],
  p5cld03: [[0,"Lee la introducción a IAM y localiza una política de ejemplo."],[1,"Crea con el generador una política que solo permita leer un depósito S3."]],
  p5cld04: [[0,"Instala la AWS CLI v2 con el método del zip oficial."],[1,"Configura el acceso con sesión temporal, sin claves permanentes."]],
  p5cld05: [[0,"Haz flaws.cloud siguiendo SUS pistas; por cada nivel anota cómo se habría prevenido."],[1,"Haz flaws2.cloud igual, con su propio sistema de pistas."],[2,"Comprueba en tu cuenta que Block Public Access está activado en S3."]],
  p5cld06: [[0,"Abre CloudTrail → Event history y encuentra una acción tuya."],[1,"Activa GuardDuty, genera hallazgos de muestra y luego suspéndelo."]],
  p5cld07: [[0,"Instala Prowler y audita tu cuenta; guarda el informe en HTML."],[1,"Lee qué comprueba el CIS Benchmark para entender el informe."]],
  p5cld08: [[0,"Haz la sala gratuita Intro to Docker."],[1,"Escanea una imagen pública vieja con Trivy y cuenta sus vulnerabilidades."],[2,"Mira el temario del AWS Cloud Practitioner y ponle fecha."]]
});
Object.assign(UNIT_GUIDES, {
  p5cld02: [{ t:"Blindar tu cuenta de AWS nada más crearla, paso a paso", s:[
    "Crea la cuenta en el enlace de registro. Elige el **plan Free** (gratuito). Pondrás una tarjeta solo para verificar identidad; el plan Free no cobra nada hasta que tú subas de categoría.",
    "Entra como **root** (el correo con el que te registraste). Arriba a la derecha, en tu nombre → **Security credentials** (credenciales de seguridad).",
    "En **Multi-factor authentication (MFA)** pulsa **Assign MFA device** → **Authenticator app** → **Next**.",
    "Abre Google Authenticator o Authy en tu teléfono, escanea el **QR code** que muestra AWS, y escribe dos códigos seguidos en **MFA code 1** y **MFA code 2**. Pulsa **Add MFA**. Desde ahora, root pide ese código.",
    "Pon el tope de gasto: busca **Billing and Cost Management** → **Budgets** → **Create budget** → **Use a template (simplified)** → **Zero spend budget** → pon tu correo → **Create budget**.",
    "Activa las alertas de la capa gratuita: **Billing preferences** → **Alert preferences** → **Edit** → marca **Receive AWS Free Tier alerts** → pon tu correo → **Update**.",
    "Deberías recibir un correo de confirmación del presupuesto. A partir de aquí, trabaja con un usuario IAM, no con root."
  ], learn:"Una cuenta nueva se blinda con MFA en root, un presupuesto a cero y las alertas de la capa gratuita, antes de hacer nada más." }],
  p5cld05: [{ t:"flaws.cloud: aprender de los fallos con su sistema de pistas", s:[
    "Abre **flaws.cloud**. Es un laboratorio legal y gratuito, hecho para enseñar: cada nivel es un fallo real de configuración de AWS.",
    "Lee el nivel 1. Te explica el objetivo y, cuando te atascas, **despliega sus propias pistas** (Hint): están pensadas para enseñarte, úsalas en vez de buscar la solución fuera.",
    "Resuelve cada nivel con sus pistas. No necesitas comandos de ataque míos: el laboratorio te guía.",
    "Lo importante: por cada nivel, escribe en tu cuaderno **cómo se habría evitado** ese fallo. Nivel de S3 público → Block Public Access. Nivel de credenciales de instancia → IMDSv2. Nivel de clave suelta → no usar claves permanentes.",
    "Al terminar, tendrás una tabla: fallo → cómo ocurre → cómo se previene. Esa tabla es tu material de auditor."
  ], learn:"En los laboratorios de nube se aprende con su propio sistema de pistas; tu trabajo es entender la prevención de cada fallo, no memorizar un ataque." }],
  p5cld07: [{ t:"Pasar Prowler a tu cuenta y leer el informe, paso a paso", s:[
    "En tu Kali, instala Prowler con `pipx install prowler`. Si no tienes pipx, instálalo con `sudo apt install pipx` y luego `pipx ensurepath`.",
    "Dale a tu usuario de auditoría permisos de **solo lectura**: en IAM, añádele las políticas gestionadas `SecurityAudit` y `ViewOnlyAccess`.",
    "Comprueba primero el nombre exacto del estándar: `prowler aws --list-compliance`.",
    "Ejecuta la auditoría y guarda el informe: `prowler aws -M csv html`. Tarda unos minutos y no cambia nada en tu cuenta (solo lee).",
    "Abre el archivo **.html** que genera en tu navegador: verás los hallazgos por servicio, con su gravedad y la explicación de cada uno.",
    "Ordena por gravedad. Toma los **3 más graves** y, por cada uno, apunta: qué es, por qué importa y el arreglo que propone Prowler. Corrige al menos uno en tu cuenta y vuelve a pasar Prowler para ver que desaparece."
  ], learn:"Prowler audita tu cuenta en solo lectura y da un informe priorizable; el valor está en leerlo, priorizar por gravedad y corregir." }]
});
