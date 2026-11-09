/* Fase 5: especialización avanzada. El alumno elige UNA especialidad (state.track).
   Las unidades de cada especialidad se añaden en p5_<pista>.js con P5.push(...). */
const P5 = [];
const TRACKS = [
  { id: "pentest", icon: "⚔", title: "Pentesting avanzado", sub: "Active Directory, explotación manual y camino a la OSCP",
    para: "Si lo que más te gustó fue entrar en máquinas y redes completas de principio a fin." },
  { id: "web", icon: "⌘", title: "Seguridad web avanzada", sub: "Burp a fondo, fallos avanzados, APIs, bug bounty y BSCP",
    para: "Si disfrutaste los labs de PortSwigger y quieres ganar dinero con recompensas por fallos." },
  { id: "blue", icon: "⛨", title: "Defensa: SOC y respuesta", sub: "SIEM, detección, forense y caza de amenazas",
    para: "Si te gustó analizar registros, tráfico y correos: es la puerta de entrada con más empleo." },
  { id: "cloud", icon: "☁", title: "Seguridad en la nube", sub: "AWS, IAM, errores típicos, detección y contenedores",
    para: "Si te interesa cómo se protegen las empresas que viven en AWS o Azure: muy demandado y bien pagado." },
  { id: "malware", icon: "☣", title: "Malware e ingeniería inversa", sub: "Ensamblador, Ghidra, análisis estático y dinámico",
    para: "Si te pica la curiosidad por cómo funciona un programa por dentro. Es el camino más exigente." }
];
GATES[5] = { minProc: 3, exam: null,
  milestones: [
    { id: "project", label: "Terminé el proyecto final de mi especialidad (unidad 08) con su entregable", type: "check" },
    { id: "portfolio", label: "Publiqué el proyecto o un writeup en mi portafolio de GitHub", type: "check" },
    { id: "next", label: "Tengo fecha o plan concreto para la certificación de mi especialidad", type: "check" }
  ] };
