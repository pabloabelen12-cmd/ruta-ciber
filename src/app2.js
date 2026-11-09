"use strict";
/* ════════ Utilidades ════════ */
const $ = s => document.querySelector(s);
const esc = s => String(s ?? "").replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const fmt = s => esc(s).replace(/`([^`]+)`/g, "<code>$1</code>").replace(/\*\*([^*]+)\*\*/g, "<b>$1</b>");
const pad = n => String(n).padStart(2, "0");
const ymd = d => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
const parseYmd = s => { const [y, m, d] = s.split("-").map(Number); return new Date(y, m - 1, d); };
const addDays = (s, n) => { const d = parseYmd(s); d.setDate(d.getDate() + n); return ymd(d); };
const diffDays = (a, b) => Math.round((parseYmd(a) - parseYmd(b)) / 864e5);
const todayStr = () => ymd(new Date());
const weekKey = (s = todayStr()) => { const d = parseYmd(s); const dow = (d.getDay() + 6) % 7; return addDays(s, -dow); };
const DOW = ["domingo","lunes","martes","miércoles","jueves","viernes","sábado"];
const MON = ["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"];
const MONS = ["ene","feb","mar","abr","may","jun","jul","ago","sep","oct","nov","dic"];
const fmtShort = s => { const d = parseYmd(s); return `${d.getDate()} ${MONS[d.getMonth()]}`; };
const fmtLong = s => { const d = parseYmd(s); return `${DOW[d.getDay()]} ${d.getDate()} de ${MON[d.getMonth()]}`; };
const toMin = t => { const [h, m] = t.split(":").map(Number); return h * 60 + m; };
const fromMin = m => { m = ((m % 1440) + 1440) % 1440; return `${pad(Math.floor(m / 60))}:${pad(m % 60)}`; };
const to12 = t => { let [h, m] = t.split(":").map(Number); const ap = h >= 12 ? "p. m." : "a. m."; h = h % 12 || 12; return `${h}:${pad(m)} ${ap}`; };
const uid = () => Math.random().toString(36).slice(2, 10) + Date.now().toString(36).slice(-4);
const fmtDur = m => { m = +m || 0; const h = Math.floor(m / 60), r = m % 60; return h ? `${h} h${r ? " " + r + " min" : ""}` : `${r} min`; };
const ascii = (f, w = 24) => { f = Math.max(0, Math.min(1, f || 0)); const n = Math.round(f * w); return `[${"█".repeat(n)}${"░".repeat(w - n)}] ${pad(Math.round(f * 100)).padStart(3, " ")}%`; };
const lvlBar = n => `${"▮".repeat(n)}<i>${"▯".repeat(5 - n)}</i>`;

/* ════════ Fases y unidades ════════ */
const P1MOD = { 1: "Fundamentos", 2: "Redes", 3: "Web", 4: "Linux", 5: "Ataque", 6: "Prueba" };
const P1LVL = { 1: 1, 2: 1, 3: 2, 4: 2, 5: 3, 6: 3 };
LESSONS.forEach(l => { l.mod = l.mod || P1MOD[l.w]; l.lvl = l.lvl || P1LVL[l.w]; l.blocks = l.blocks || (l.sat ? 2 : 1); });
const PH = [
  { n: 1, title: "La prueba", sub: "30 sesiones", units: LESSONS, desc: "Descubre con datos si la ciberseguridad es lo tuyo: redes, web, Linux y tus primeros retos de hacking." },
  { n: 2, title: "Fundamentos sólidos", sub: `${P2.length} unidades`, units: P2, desc: "Redes a fondo, Linux, Python escrito por ti, criptografía y cómo funciona la web por dentro." },
  { n: 3, title: "Defensa y ataque", sub: `${P3.length} unidades`, units: P3, desc: "Cómo trabajan un pentester y un SOC, los fallos web más comunes y su defensa, y tu primera certificación." },
  { n: 4, title: "Especialización ofensiva", sub: `${P4.length} unidades`, units: P4, desc: "Hack The Box, CTF en equipo, recompensas por fallos, portafolio y tus primeros ingresos." },
  { n: 5, title: "Especialización avanzada", get sub() { const t = curTrack(); return t ? `${t.title.toLowerCase()} · ${trackUnits(t.id).length} unidades` : `elige 1 de ${TRACKS.length} especialidades`; },
    get units() { return trackUnits(state.track); }, desc: "Eliges un camino y llegas a nivel avanzado: pentesting, web, defensa, nube o malware. Cada uno con su proyecto final y su certificación." }
];
const trackUnits = t => t ? P5.filter(u => u.track === t) : [];
const curTrack = () => TRACKS.find(t => t.id === state.track) || null;
PH.slice(0, 4).forEach(ph => ph.units.forEach((u, i) => { u.p = ph.n; u.i = i; }));
TRACKS.forEach(t => trackUnits(t.id).forEach((u, i) => { u.p = 5; u.i = i; }));
const ALL = [...PH.slice(0, 4).flatMap(ph => ph.units), ...P5];
const CORE_N = ALL.length - P5.length;
const routeUnits = () => [...PH.slice(0, 4).flatMap(ph => ph.units), ...trackUnits(state.track)];
const siblings = u => u.p === 5 ? trackUnits(u.track) : unitsOf(u.p);
const UNIT = Object.fromEntries(ALL.map(u => [u.id, u]));
const unitsOf = n => PH[n - 1].units;
const PASS = q => Math.ceil(q.length * 0.66);
const EXAM_PASS = 8;
const num = i => pad(i + 1);

/* ════════ Estado ════════ */
const LS_KEY = "rutaciber.v1";
const IN_CLAUDE = !!(window.claude && window.claude.use);
let deferredInstall = null, justInstalled = false;
const isStandalone = () => !!((window.matchMedia && window.matchMedia("(display-mode: standalone)").matches) || navigator.standalone);
const isIOS = () => /iPhone|iPad|iPod/.test(navigator.userAgent || "");
window.addEventListener("beforeinstallprompt", e => { e.preventDefault(); deferredInstall = e; if (typeof render === "function") render(); });
window.addEventListener("appinstalled", () => { deferredInstall = null; justInstalled = true; if (typeof toast === "function") toast("Ruta Ciber instalada"); if (typeof render === "function") render(); });
const phaseBlank = () => ({ start: null, passedAt: null, override: false, ms: {}, exam: null });
function defaultState() {
  return { v: 2, updatedAt: 0, sessions: {}, cards: [], reviews: {}, agenda: [], reviewLog: {}, decision: [null, null, null, null, null],
    test: [{ name: "General Skills", solved: false, min: "" }, { name: "Web Exploitation", solved: false, min: "" }, { name: "Cryptography", solved: false, min: "" }, { name: "Siguiente nivel de Bandit", solved: false, min: "" }],
    phases: { 1: phaseBlank(), 2: phaseBlank(), 3: phaseBlank(), 4: phaseBlank(), 5: phaseBlank() }, track: null };
}
function normalize(s) {
  const d = defaultState();
  if (!s || typeof s !== "object") return d;
  if (!s.phases) {
    s.phases = d.phases;
    const anyDone = Object.values(s.sessions || {}).some(x => x && x.done);
    if (anyDone) s.phases[1].start = s.start && s.start <= todayStr() ? s.start : todayStr();
  }
  for (const n of [1, 2, 3, 4, 5]) s.phases[n] = Object.assign(phaseBlank(), s.phases[n] || {});
  if ((s.v || 1) < 2) { s.reviewsOld = s.reviews; s.reviews = {}; s.v = 2; }
  delete s.start;
  for (const k of Object.keys(d)) if (s[k] === undefined) s[k] = d[k];
  return s;
}
let state = (() => { try { const r = localStorage.getItem(LS_KEY); if (r) return normalize(JSON.parse(r)); } catch (e) {} return defaultState(); })();
const sess = id => {
  const s = (state.sessions[id] ||= {});
  if (s.recall === undefined) s.recall = "";
  if (!Array.isArray(s.steps)) s.steps = [];
  if (!s.notes) s.notes = { tried: "", failed: "", worked: "", line: "" };
  if (s.blocksDone === undefined) s.blocksDone = 0;
  return s;
};
function saveLocal() { try { localStorage.setItem(LS_KEY, JSON.stringify(state)); } catch (e) {} }
function save() { state.updatedAt = Date.now(); saveLocal(); scheduleRemote(); }

/* ════════ Sincronización: un documento privado por persona ════════ */
let remoteRef = null, writing = false, writeAgain = false, writeTimer = null, syncMode = "connecting";
const SYNC_TXT = { connecting: ["", "conectando…"], ok: ["ok", "sincronizado entre tus dispositivos"], busy: ["busy", "guardando…"], local: ["", IN_CLAUDE ? "guardado solo en este dispositivo" : "guardado en este dispositivo · funciona sin internet"], err: ["err", "sin conexión: se guarda aquí y se sincroniza luego"] };
function setSync(mode) {
  syncMode = mode;
  const [cls, txt] = SYNC_TXT[mode] || SYNC_TXT.local;
  const html = `<span class="dot ${cls}"></span><span>${esc(txt)}</span>`;
  const a = $("#sync"); if (a) a.innerHTML = html;
  const b = $("#sync2"); if (b) b.innerHTML = html;
}
function scheduleRemote() { if (!remoteRef) return; clearTimeout(writeTimer); setSync("busy"); writeTimer = setTimeout(flushRemote, 1200); }
async function flushRemote() {
  writeTimer = null;
  if (!remoteRef) return;
  if (writing) { writeAgain = true; return; }
  writing = true;
  try { await remoteRef.set({ s: JSON.parse(JSON.stringify(state)) }); setSync("ok"); }
  catch (e) { setSync("err"); if (e && e.code === "unavailable") setTimeout(scheduleRemote, 4000 + Math.random() * 3000); }
  writing = false;
  if (writeAgain) { writeAgain = false; flushRemote(); }
}
const isTyping = () => { const a = document.activeElement; return !!a && (a.tagName === "TEXTAREA" || (a.tagName === "INPUT" && !["checkbox", "button", "submit"].includes(a.type))); };
async function initSync() {
  try {
    if (!window.claude || !window.claude.use) { setSync("local"); return; }
    const [user, db] = await Promise.all([window.claude.use("user"), window.claude.use("db")]);
    if (!user || !db) { setSync("local"); return; }
    const id = await user.id();
    if (!id) { setSync("local"); return; }
    remoteRef = db.doc("data/users/" + id + "/state");
    const t = setTimeout(() => { if (syncMode === "connecting") setSync("err"); }, 10000);
    remoteRef.onSnapshot(snap => {
      if (!snap.metadata.fromCache) clearTimeout(t);
      const remote = snap.exists ? (snap.data() || {}).s : null;
      if (remote && remote.updatedAt > state.updatedAt) {
        state = normalize(JSON.parse(JSON.stringify(remote)));
        saveLocal();
        if (!isTyping()) render();
      } else if ((!remote && state.updatedAt > 0) || (remote && remote.updatedAt < state.updatedAt)) {
        scheduleRemote();
      }
      if (!snap.metadata.fromCache && !writing && !writeTimer && syncMode !== "busy") setSync("ok");
    }, () => setSync("err"));
  } catch (e) { setSync("local"); }
}

/* ════════ Reglas de la ruta ════════ */
const phaseOpen = n => n === 1 || !!state.phases[n - 1].passedAt;
const phasePassed = n => !!state.phases[n].passedAt;
const activePhase = () => { for (const n of [1, 2, 3, 4, 5]) if (!phasePassed(n)) return n; return 5; };
const allPassed = () => phasePassed(5);
const prevUnit = u => u.i > 0 ? siblings(u)[u.i - 1] : (u.p > 1 ? unitsOf(u.p - 1).at(-1) : null);
const isLocked = u => !phaseOpen(u.p) || (u.p === 5 && u.track !== state.track) || (u.i > 0 && !sess(siblings(u)[u.i - 1].id).done);
const doneIn = n => unitsOf(n).filter(u => sess(u.id).done).length;
const nextUnit = () => { if (allPassed()) return null; const n = activePhase(); return unitsOf(n).find(u => !sess(u.id).done) || null; };
const recallOk = s => (s.recall || "").trim().length >= 15;
const stepsOk = (u, s) => u.steps.every((_, i) => s.steps[i]);
const notesOk = s => Object.values(s.notes || {}).filter(v => (v || "").trim().length >= 3).length >= 2;
const testOk = () => state.test.some(t => t.solved || String(t.min).trim() !== "");
const decisionOk = () => state.decision.every(v => v === true || v === false);
function quizOk(u, s) {
  if (u.test) return testOk();
  if (u.decision) return decisionOk();
  return !!(s.quiz && s.quiz.best >= PASS(u.quiz));
}
const checkLabel = u => u.quiz ? `Aprobar el quiz (${PASS(u.quiz)} de ${u.quiz.length})` : u.test ? "Registrar la prueba" : "Responder la decisión";
function reqItems(u, s) {
  return [
    { k: "Escribir lo que recuerdas", ok: recallOk(s) },
    { k: "Marcar todos los pasos", ok: stepsOk(u, s) },
    { k: checkLabel(u), ok: quizOk(u, s) }
  ];
}
function procItems(u, s) {
  const first = u.quiz ? !!(s.quiz && s.quiz.first >= PASS(u.quiz)) : quizOk(u, s);
  return [
    { k: "Recordaste antes de empezar", ok: recallOk(s) },
    { k: "Completaste todos los pasos", ok: stepsOk(u, s) },
    { k: u.quiz ? "Aprobaste al primer intento" : (u.test ? "Registraste la prueba" : "Respondiste la decisión"), ok: first },
    { k: "Anotaste en tu cuaderno", ok: notesOk(s) },
    { k: "Lo explicaste en voz alta", ok: !!s.explained }
  ];
}
const procScore = (u, s) => procItems(u, s).filter(x => x.ok).length;
const avgProc = n => { const d = unitsOf(n).filter(u => sess(u.id).done); return d.length ? d.reduce((a, u) => a + procScore(u, sess(u.id)), 0) / d.length : 0; };

/* Puerta de cada fase */
function gateStatus(n) {
  const g = GATES[n], units = unitsOf(n), d = doneIn(n), ph = state.phases[n];
  const items = [];
  if (n === 5) items.push({ k: "Elegir tu especialidad", ok: !!state.track, v: curTrack() ? curTrack().title : "pendiente" });
  items.push({ k: `Capturar las ${units.length} unidades de la fase`, ok: units.length > 0 && d === units.length, v: `${d}/${units.length}` });
  const ap = avgProc(n);
  items.push({ k: `Calidad media del proceso de ${g.minProc} o más`, ok: d === units.length && ap >= g.minProc, v: d ? ap.toFixed(1) + "/5" : "–" });
  if (n === 1) {
    const yes = state.decision.filter(v => v === true).length;
    items.push({ k: "Decisión: 4 o 5 síes (sesión 30)", ok: decisionOk() && (yes >= 4 || ph.override), v: decisionOk() ? `${yes}/5${ph.override && yes < 4 ? " · sigues por decisión propia" : ""}` : "pendiente" });
  }
  for (const m of g.milestones) {
    const v = ph.ms[m.id];
    const ok = m.type === "check" ? !!v : (+v || 0) >= m.min;
    items.push({ k: m.type === "check" ? m.label : `${m.label}: ${m.min} o más`, ok, v: m.type === "check" ? (v ? "hecho" : "pendiente") : `${+v || 0}/${m.min}` });
  }
  if (g.exam) { const ex = ph.exam; items.push({ k: `Examen de la fase: ${EXAM_PASS} de ${g.exam.length}`, ok: !!(ex && ex.best >= EXAM_PASS), v: ex ? `${ex.best}/${g.exam.length}` : "sin hacer" }); }
  return { items, ok: items.every(x => x.ok), unitsDone: units.length > 0 && d === units.length };
}

/* Ritmo según la fecha en que empezaste la fase (5 bloques por semana) */
function pace(n) {
  const st = state.phases[n].start; if (!st) return null;
  const units = unitsOf(n), total = units.reduce((a, u) => a + u.blocks, 0);
  const done = units.reduce((a, u) => { const s = sess(u.id); return a + (s.done ? u.blocks : Math.min(s.blocksDone || 0, u.blocks - 1)); }, 0);
  const days = Math.max(1, diffDays(todayStr(), st) + 1);
  const expected = Math.min(total, Math.round(days * 5 / 7));
  return { total, done, expected, behind: Math.max(0, expected - done), weeksLeft: Math.ceil((total - done) / 5) };
}

/* ════════ Tarjetas con repaso espaciado ════════ */
const INTERVALS = [0, 1, 2, 4, 8, 16, 32];
const dueCards = () => { const t = todayStr(); return state.cards.filter(c => c.due <= t); };
function addCard(q, a, src) { state.cards.push({ id: uid(), q, a, box: 1, due: todayStr(), src: src || "Tarjeta propia" }); }
function intervalLabel(c, r) { const box = r === 0 ? 1 : Math.min(6, c.box + (r === 1 ? 1 : 2)); const d = r === 0 ? 0 : INTERVALS[box]; return d === 0 ? "hoy" : d === 1 ? "mañana" : `${d} días`; }
function rateCard(c, r) {
  if (r === 0) { c.box = 1; c.due = todayStr(); }
  else { c.box = Math.min(6, c.box + (r === 1 ? 1 : 2)); c.due = addDays(todayStr(), INTERVALS[c.box]); }
  const t = todayStr(); state.reviewLog[t] = (state.reviewLog[t] || 0) + 1;
}

/* ════════ Horario fijo ════════ */
const SCHED = {
  weekday: [
    ["06:00", "13:30", "Colegio", "school", ""],
    ["14:00", "14:20", "Llegar y comer", "free", ""],
    ["14:20", "15:05", "Bloque de práctica (45 min)", "study", "Lo que practicas justo antes de dormir se fija mejor durante el sueño."],
    ["15:10", "16:40", "Siesta de 90 min, con alarma", "sleep", "Un ciclo de sueño completo: despiertas sin la pesadez de cortar el sueño profundo."],
    ["16:40", "17:30", "Libre, merienda, prepararte", "free", ""],
    ["17:30", "20:00", "Gimnasio", "gym", "Hacer ejercicio unas horas después de aprender ayuda a retenerlo."],
    ["20:00", "21:00", "Cena y ducha", "free", ""],
    ["21:00", "21:15", "Repaso de tarjetas (15 min)", "review", "Recordar sin mirar lo de hoy, justo antes de dormir."],
    ["21:30", "22:00", "Pantallas fuera", "free", ""],
    ["22:00", "05:00", "Dormir", "sleep", "Con la siesta sumas unas 8 h y media al día."]
  ],
  friday: [
    ["06:00", "13:30", "Colegio", "school", ""],
    ["14:00", "14:20", "Llegar y comer", "free", ""],
    ["14:20", "15:05", "Libre: el viernes no se estudia", "free", "Descansar también es parte del método."],
    ["15:10", "16:40", "Siesta de 90 min, con alarma", "sleep", ""],
    ["17:30", "20:00", "Gimnasio", "gym", ""],
    ["22:00", "05:00", "Dormir", "sleep", ""]
  ],
  saturday: [
    ["09:30", "10:20", "Sesión larga: bloque 1 (50 min)", "study", "Las unidades marcadas como sesión larga encajan aquí."],
    ["10:20", "10:35", "Descanso lejos de la pantalla", "free", ""],
    ["10:35", "11:25", "Sesión larga: bloque 2 (50 min)", "study", ""],
    ["21:00", "21:15", "Repaso de tarjetas", "review", ""],
    ["22:00", "05:00", "Dormir", "sleep", ""]
  ],
  sunday: [
    ["10:00", "10:30", "Revisión semanal (30 min, a la hora que quieras)", "review", "Llena la revisión de la semana en Progreso."],
    ["21:00", "21:15", "Repaso de tarjetas", "review", ""],
    ["22:00", "05:00", "Dormir", "sleep", ""]
  ]
};
const KIND = { school: "Colegio", study: "Estudio", sleep: "Sueño", gym: "Gimnasio", review: "Repaso", free: "Libre" };
const schedKey = dow => dow === 0 ? "sunday" : dow === 6 ? "saturday" : dow === 5 ? "friday" : "weekday";
const schedFor = dow => SCHED[schedKey(dow)];
function inBlock(b, m) { const s = toMin(b[0]), e = toMin(b[1]); return e > s ? (m >= s && m < e) : (m >= s || m < e); }
function nowBlock() { const d = new Date(), m = d.getHours() * 60 + d.getMinutes(); const list = schedFor(d.getDay()); return { cur: list.find(b => inBlock(b, m)), nxt: list.find(b => toMin(b[0]) > m) }; }

/* ════════ Estado de interfaz ════════ */
const ui = { schedDay: null, rutaPhase: null, quizSel: {}, revealKeys: {}, revealHint: {}, review: null, confirmReset: false, confirmImport: false, pendingImport: null, agendaEdit: null, toastT: null, unlocked: null };
let timer = { uid: null, startedAt: 0, acc: 0, running: false };
function toast(msg) {
  let t = $("#toast"); if (!t) { t = document.createElement("div"); t.id = "toast"; t.className = "toast"; t.setAttribute("role", "status"); document.body.appendChild(t); }
  t.textContent = msg; t.hidden = false; clearTimeout(ui.toastT); ui.toastT = setTimeout(() => { t.hidden = true; }, 2800);
}

/* ════════ Navegación ════════ */
const ICONS = {
  hoy: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 17l6-6-6-6M12 19h8"/></svg>',
  ruta: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M5 21V4M5 4h11l-2 4 2 4H5"/></svg>',
  horario: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>',
  agenda: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/></svg>',
  tarjetas: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="7" width="14" height="12" rx="2"/><path d="M7 7V5h14v12h-4"/></svg>',
  progreso: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/></svg>'
};
const NAV = [["hoy", "Hoy"], ["ruta", "Ruta"], ["horario", "Horario"], ["agenda", "Agenda"], ["tarjetas", "Tarjetas"], ["progreso", "Progreso"]];
const route = () => (location.hash || "").replace("#", "") || "hoy";
function renderNav(r) {
  const base = r.startsWith("u-") || r.startsWith("puerta-") ? "ruta" : r;
  const due = dueCards().length;
  const badge = k => k === "tarjetas" && due ? `<span class="badge">${due}</span>` : "";
  $("#nav").innerHTML = NAV.map(([k, t]) => `<a href="#${k}" class="${base === k ? "on" : ""}"><span>${t.toLowerCase()}</span>${badge(k)}</a>`).join("");
  $("#tabbar").innerHTML = NAV.map(([k, t]) => `<a href="#${k}" class="${base === k ? "on" : ""}" aria-label="${t}">${ICONS[k]}<span>${t}</span>${badge(k)}</a>`).join("");
}
let lastRoute = null;
function render() {
  const r = route();
  freshRoute = r !== lastRoute;
  renderNav(r);
  let html;
  if (r.startsWith("u-")) html = viewUnit(UNIT[r.slice(2)]);
  else if (r.startsWith("puerta-")) html = viewGate(parseInt(r.slice(7), 10));
  else html = ({ hoy: viewHoy, ruta: viewRuta, horario: viewHorario, agenda: viewAgenda, tarjetas: viewTarjetas, progreso: viewProgreso }[r] || viewHoy)();
  $("#main").innerHTML = `<div class="wrap">${html}</div>${ui.unlocked ? unlockOverlay(ui.unlocked) : ""}`;
  if (r !== lastRoute) { window.scrollTo(0, 0); lastRoute = r; }
  setSync(syncMode);
  paintTimer();
}
let freshRoute = true;
const cmdline = path => `<span class="prompt"><span class="u">pablo@ruta</span>:<span class="h">~/${esc(path)}</span>$ <span class="${freshRoute ? "typed" : ""}">./${esc(path.split("/").pop())}</span></span>`;
function unlockOverlay(n) {
  const last = n > 5;
  return `<div class="unlock" role="dialog" aria-modal="true" aria-label="Fase desbloqueada"><div class="box">
<pre>  ___  ___ ___ ___ ___ ___
 / _ \\/ __/ __| __/ __/ _ \\
| (_) \\__ \\__ \\ _|\\__ \\ (_) |
 \\__\\_\\___/___/___|___/\\___/ </pre>
    <h2>${last ? "Ruta completa" : `Fase ${n} desbloqueada`}</h2>
    <p class="muted">${last ? "Terminaste las 5 fases y tu especialidad. Ahora toca la certificación y tu primer empleo: cuéntame tu plan y lo revisamos." : `${esc(PH[n - 1].title)}: ${esc(PH[n - 1].desc)}`}</p>
    <button class="btn primary" data-action="unlock-ok">${last ? "Ver mi progreso" : "Empezar la fase"}</button></div></div>`;
}

/* ════════ Vista: Hoy ════════ */
function viewHoy() {
  const t = todayStr(), dow = new Date().getDay();
  const nb = nowBlock(), due = dueCards().length, n = activePhase(), nu = nextUnit(), started = !!state.phases[1].start;
  let hero;
  if (allPassed()) {
    hero = termCard("ruta/completa", `<span class="eyebrow">5 de 5 fases</span><h2>Ruta completa</h2><p>Capturaste las ${routeUnits().length} unidades y abriste las 5 puertas. Ahora toca certificarte y conseguir tu primer empleo.</p><div class="row"><a class="btn primary" href="#progreso">Ver mi progreso</a></div>`, true);
  } else if (!started && n === 1 && doneIn(1) === 0) {
    const u = LESSONS[0];
    hero = termCard("ruta/inicio", `<span class="eyebrow">fase 1 · la prueba</span><h2>Tu ruta empieza cuando tú digas</h2>
      <p>Pulsa el botón y hoy será tu día 1. El ritmo se calcula desde esa fecha, así que no importa qué día empieces.</p>
      <div class="row"><button class="btn primary" data-action="start-route">./empezar --hoy</button><a class="btn" href="#u-${u.id}">Ver la primera sesión</a></div>`, true);
  } else if (n === 5 && !state.track) {
    hero = termCard("fase-5/elegir", `<span class="eyebrow">fase 5 · especialización avanzada</span><h2>Elige tu especialidad</h2>
      <p>Llegaste al nivel avanzado. Ahora eliges un camino: pentesting, web, defensa, nube o malware. Antes de empezar, pídeme que revise los enlaces: las plataformas cambian.</p>
      <div class="row"><a class="btn primary" href="#ruta" data-action="ruta-phase" data-n="5">Ver las 5 especialidades</a></div>`, true);
  } else if (!nu) {
    hero = termCard(`fase-${n}/puerta`, `<span class="eyebrow">fase ${n} · todas las unidades capturadas</span><h2>La Puerta ${n} te espera</h2>
      <p>${n < 5 ? `Para abrir la Fase ${n + 1}` : "Para completar la ruta"} tienes que demostrar que terminaste bien: calidad del proceso, hitos${GATES[n].exam ? " y examen" : " y decisión"}.</p>
      <div class="row"><a class="btn flagbtn" href="#puerta-${n}">Ir a la Puerta ${n}</a></div>`, true);
  } else {
    const s = sess(nu.id), pg = recallOk(s) || s.steps.some(Boolean) || s.quiz;
    hero = termCard(`fase-${n}/${nu.p === 1 ? "sesion" : "unidad"}-${num(nu.i)}`, `<div class="spread"><span class="eyebrow">fase ${n} · ${nu.p === 1 ? "sesión" : "unidad"} ${num(nu.i)} de ${unitsOf(n).length} · ${esc(nu.mod)}</span><span class="lvl" title="Dificultad">${lvlBar(nu.lvl)}</span></div>
      <h2>${esc(nu.title)}</h2><p>${esc(nu.goal)}</p>
      ${nu.blocks > 1 ? `<div class="row small"><span class="muted mono">bloques</span>${blocksHtml(nu, s)}<span class="muted small">${nu.p === 1 ? "sesión larga: dos bloques de 50 min" : `unos ${nu.blocks} bloques de 45 min`}</span></div>` : ""}
      <div class="row"><a class="btn primary" href="#u-${nu.id}">${pg ? "./continuar" : "./empezar"}</a><span class="muted small mono">recordar 5 · practicar 35 · cerrar 5</span></div>`, true);
  }
  const p = pace(n);
  const dayNote = dow === 5 ? `<div class="card"><h3>Viernes: libre</h3><p class="muted small">No hay bloque de estudio. Descansar también es parte del método. Si quieres, haz solo el repaso de tarjetas.</p></div>`
    : dow === 0 ? `<div class="card"><div class="spread"><h3>Domingo: revisión semanal</h3><span class="pill flag">30 min</span></div><p class="muted small">Llena la revisión de esta semana: lo que te gustó, dónde te atascaste y tus ganas.</p><div class="row"><a class="btn" href="#progreso">Ir a la revisión</a></div></div>` : "";
  const ag = state.agenda.filter(a => a.date === t).sort((a, b) => (a.time || "").localeCompare(b.time || ""));
  const agMin = ag.reduce((s2, a) => s2 + (+a.min || 0), 0);
  return `<div class="head">${cmdline("hoy")}<h1>${greeting()}<span class="cur"></span></h1>
    <p class="muted small mono">${fmtLong(t)} · ${nb.cur ? `ahora: ${esc(nb.cur[2].toLowerCase())}` : "sin bloque fijo ahora"}${nb.nxt ? ` · luego: ${esc(nb.nxt[2].toLowerCase())} a las ${to12(nb.nxt[0])}` : ""}</p></div>
    ${installCard()}${hero}${dayNote}
    <div class="grid2">
      <div class="card"><div class="spread"><h3>Tarjetas de hoy</h3><span class="pill ${due ? "flag" : "good"}">${due} pendientes</span></div>
        <p class="muted small">${due ? "Repásalas en tu bloque de las 9:00 p. m. Unos 15 minutos." : "Nada pendiente. Al capturar una unidad se añaden tarjetas nuevas."}</p>
        <div class="row"><a class="btn${due ? " primary" : ""}" href="#tarjetas">${due ? "Repasar ahora" : "Ver tarjetas"}</a></div></div>
      <div class="card"><div class="spread"><h3>Fase ${n}: ${esc(PH[n - 1].title)}</h3>${p ? (p.behind <= 1 ? `<span class="pill good">al día</span>` : `<span class="pill ${p.behind > 4 ? "bad" : "warn"}">${p.behind} bloques atrás</span>`) : `<span class="pill">sin empezar</span>`}</div>
        <div class="ascii">${ascii(doneIn(n) / unitsOf(n).length, 18)}</div>
        <p class="muted small">${doneIn(n)} de ${unitsOf(n).length} capturadas${p ? ` · faltan unas ${p.weeksLeft} semanas a 5 bloques por semana` : ""}.${p && p.behind > 1 ? " No recuperes haciendo el doble: sigue con lo que toca." : ""}</p></div>
    </div>
    <div class="card"><div class="spread"><h3>Tu agenda de hoy</h3><a class="btn sm" href="#agenda">+ tarea</a></div>
      ${ag.length ? `<div>${ag.map(agRow).join("")}</div><p class="muted small">${fmtDur(agMin)} planificados en tareas.</p>` : `<p class="muted small">Sin tareas propias para hoy. El horario fijo está en Horario.</p>`}</div>`;
}
function installCard() {
  if (IN_CLAUDE || isStandalone() || justInstalled) return "";
  if (deferredInstall) return `<div class="card"><div class="spread"><div><h3>Instala Ruta Ciber en esta computadora</h3><p class="muted small">Tendrá su icono en el menú Inicio y se abrirá en su propia ventana, también sin internet.</p></div><button class="btn primary" data-action="install">./instalar</button></div></div>`;
  if (isIOS()) return `<div class="card"><h3>Instálala en tu iPhone</h3><ol class="small"><li>Toca el botón <b>Compartir</b> de Safari (el cuadrado con la flecha hacia arriba).</li><li>Elige <b>Agregar a pantalla de inicio</b> y luego <b>Agregar</b>.</li><li>Abre Ruta Ciber desde el icono verde: se verá a pantalla completa.</li></ol><p class="muted small">Tiene que ser Safari: en otros navegadores del iPhone no aparece esa opción.</p></div>`;
  return "";
}
function greeting() { const h = new Date().getHours(); return h < 12 ? "Buenos días" : h < 19 ? "Buenas tardes" : "Buenas noches"; }
const termCard = (path, body, hot) => `<div class="term ${hot ? "hot" : ""}"><div class="term-bar"><i></i><i></i><i></i><span>~/${esc(path)}</span></div><div class="term-body">${body}</div></div>`;
const blocksHtml = (u, s) => `<span class="blocks" aria-label="${s.done ? u.blocks : s.blocksDone} de ${u.blocks} bloques">${Array.from({ length: u.blocks }, (_, k) => `<i class="${s.done || k < s.blocksDone ? "on" : ""}"></i>`).join("")}</span>`;

/* ════════ Vista: Unidad ════════ */
function viewUnit(u) {
  if (!u) return `<div class="empty">Esa unidad no existe. <a href="#ruta">Volver a la ruta</a></div>`;
  const s = sess(u.id), locked = isLocked(u), closed = !phaseOpen(u.p), prev = prevUnit(u);
  const label = u.p === 1 ? "sesión" : "unidad", slug = u.p === 1 ? "sesion" : "unidad";
  const head = `<div class="head"><div class="meta"><a class="btn ghost sm" href="#ruta">← ruta</a>${cmdline(`fase-${u.p}/${slug}-${num(u.i)}`)}</div>
    <h1>${esc(u.title)}</h1>
    <div class="meta"><span class="pill cy">${esc(u.mod)}</span><span class="lvl" title="Dificultad">${lvlBar(u.lvl)}</span><span class="pill">${u.p === 1 && u.blocks === 2 ? "sesión larga" : u.blocks > 1 ? `${u.blocks} bloques` : "1 bloque"}</span>${s.done ? `<span class="pill flag">⚑ capturada</span>` : locked ? `<span class="pill bad">bloqueada</span>` : ""}</div>
    <p class="muted">${esc(u.goal)}</p>${prereqHtml(u)}</div>`;
  if (closed) {
    return `${head}<div class="lockbox"><b>ACCESO DENEGADO · fase ${u.p} cerrada</b><span>Esta unidad se abre cuando pases la Puerta ${u.p - 1}. Puedes leer de qué trata, pero todavía no se puede hacer.</span><div class="row"><a class="btn" href="#puerta-${u.p - 1}">Ver la Puerta ${u.p - 1}</a></div></div>
      <div class="card"><h3>Lo que aprenderás</h3><div class="concept">${u.concept.map(x => `<p>${fmt(x)}</p>`).join("")}</div></div>`;
  }
  const st = [recallOk(s), stepsOk(u, s), quizOk(u, s), s.done];
  const stepper = `<div class="stepper">${["recordar", "practicar", "comprobar", "cerrar"].map((nm, k) => `<a href="#u-${u.id}" data-action="jump" data-to="sec${k}" class="${st[k] ? "ok" : ""}"><small>${st[k] ? "[x]" : "[ ]"} paso ${k + 1}</small><span>${nm}</span></a>`).join("")}</div>`;
  const recallPrompt = !prev ? "Antes de empezar: sin buscar nada, escribe qué crees que hace un hacker ético en un día normal."
    : `Sin mirar nada, escribe lo que recuerdes de <b>${esc(prev.title)}</b>${prev.p !== u.p ? ` (última unidad de la Fase ${prev.p})` : ""}.`;
  const recall = `<section class="card sec" id="sec0"><div class="sec-h"><span class="n">01</span><h2>Recordar</h2><span class="muted small mono">5 min</span></div>
    <p>${recallPrompt}</p>
    <label class="f" for="rc-${u.id}">lo que recuerdo<textarea id="rc-${u.id}" data-bind="sessions.${u.id}.recall" placeholder="Escribe aunque sea poco. El esfuerzo de recordar es lo que fija la memoria.">${esc(s.recall)}</textarea></label>
    ${prev ? (ui.revealKeys[u.id] ? `<div class="reveal"><span class="eyebrow">puntos clave de ${esc(prev.title)}</span><ul>${prev.keys.map(k => `<li>${esc(k)}</li>`).join("")}</ul><p class="muted small">¿Qué te faltó? Eso es lo que más te conviene repasar.</p></div>`
      : `<div class="row"><button class="btn" data-action="reveal-keys" data-id="${u.id}" ${recallOk(s) ? "" : "disabled"}>Comparar con los puntos clave</button><span class="muted small" data-hint>${recallOk(s) ? "" : "Escribe primero lo que recuerdes."}</span></div>`) : ""}
  </section>`;
  const practice = `<section class="card sec" id="sec1"><div class="sec-h"><span class="n">02</span><h2>Practicar</h2><span class="muted small mono">${u.p === 1 && u.blocks === 2 ? "50 + 15 + 50 min" : u.blocks > 1 ? `${u.blocks} bloques de 35 min` : "35 min"}</span></div>
    <div class="concept">${u.concept.map(p => `<p>${fmt(p)}</p>`).join("")}</div>
    ${u.flow ? `<div class="flow" aria-label="Esquema">${u.flow.map(n => `<span class="node">${esc(n)}</span>`).join('<span class="arr">→</span>')}</div>` : ""}
    ${u.code ? `<div class="codebox"><div class="cb-bar"><span>ejemplo</span><button class="btn sm" data-action="copy" data-text="${esc(u.code)}">copiar</button></div><pre><code>${esc(u.code)}</code></pre></div>` : ""}
    ${practiceHtml(u)}
    ${guidesHtml(u)}
    ${u.cmds ? `<div class="list${u.cmdsShell === "linux" ? " linux" : ""}"><span class="eyebrow">${u.cmdsShell === "linux" ? "en la terminal de CyLab (botón >_ del workspace) · comandos de linux" : "en tu laptop (Windows) o dentro del servidor de práctica"}</span>${u.cmds.map(([d, c]) => `<div class="cmd"><div><small>${esc(d)}</small><code>${esc(c)}</code></div><button class="btn sm" data-action="copy" data-text="${esc(c)}">copiar</button></div>`).join("")}</div>` : ""}
    ${u.blocks > 1 ? `<div class="spread"><div class="row"><span class="eyebrow">bloques de esta unidad</span>${blocksHtml(u, s)}<span class="muted small mono">${s.done ? u.blocks : s.blocksDone}/${u.blocks}</span></div>${s.done ? "" : `<div class="row"><button class="btn sm" data-action="block-minus" data-id="${u.id}" ${s.blocksDone ? "" : "disabled"}>−</button><button class="btn sm" data-action="block-plus" data-id="${u.id}" ${s.blocksDone >= u.blocks - 1 ? "disabled" : ""}>+1 bloque hecho</button></div>`}</div>` : ""}
    <span class="eyebrow">pasos · ${u.steps.filter((_, k) => s.steps[k]).length} de ${u.steps.length} marcados</span>
    ${s.done ? "" : `<p class="muted small">Cuando termines cada paso, tócalo para marcarlo con [x]. La flag solo se captura con todos marcados.</p>`}
    <ul class="checks">${u.steps.map((t, k) => { const li = autoFor(u, k), viaRoute = Object.entries(AUTO_ROUTE).find(([, l]) => l.some(([i, kk]) => i === u.id && kk === k)); const tag = s.steps[k] ? "" : li !== null ? `<small class="auto">↗ se marca solo al pulsar «abrir» en el enlace ${li + 1}</small>` : viaRoute ? `<small class="auto">↗ se marca solo al entrar en la pestaña ${esc(viaRoute[0])}</small>` : ""; return `<li><button data-action="step" data-id="${u.id}" data-k="${k}" class="${s.steps[k] ? "on" : ""}" aria-pressed="${!!s.steps[k]}"><span class="box"></span><span>${fmt(t)}${tag}</span></button></li>`; }).join("")}</ul>
    ${s.done || locked || stepsOk(u, s) ? "" : `<div class="row"><button class="btn sm" data-action="steps-all" data-id="${u.id}">ya hice todos los pasos · marcarlos</button></div>`}
    ${ui.revealHint[u.id] ? `<div class="reveal"><span class="eyebrow">pista</span><p>${fmt(u.hint)}</p></div>` : `<div class="row"><button class="btn ghost" data-action="reveal-hint" data-id="${u.id}">¿Atascado más de 20 minutos? Ver pista</button></div>`}
  </section>`;
  let check = "";
  if (u.quiz) check = `<section class="card sec" id="sec2"><div class="sec-h"><span class="n">03</span><h2>Comprobar</h2><span class="muted small mono">aprobar: ${PASS(u.quiz)} de ${u.quiz.length}</span></div>
    <p class="muted small">Responde sin mirar tus notas. Si fallas, lee la explicación y vuelve a intentarlo.</p>${quizHtml(u.id, u.quiz, s.quiz, PASS(u.quiz), "quiz")}</section>`;
  else if (u.test) check = `<section class="card sec" id="sec2"><div class="sec-h"><span class="n">03</span><h2>Tu prueba</h2></div>
    <p class="muted small">Apunta cada reto al terminarlo. Sin pistas ni soluciones.</p>
    <div class="list">${state.test.map((tt, k) => `<div class="cmd"><div><b>${esc(tt.name)}</b></div><div class="row"><label class="row small"><input type="checkbox" id="tst-${k}" data-bind="test.${k}.solved" ${tt.solved ? "checked" : ""}> resuelto</label><input type="number" min="0" id="tmin-${k}" data-bind="test.${k}.min" value="${esc(tt.min)}" placeholder="min" style="width:90px" aria-label="Minutos"></div></div>`).join("")}</div></section>`;
  else if (u.decision) { const yes = state.decision.filter(v => v === true).length;
    check = `<section class="card sec" id="sec2"><div class="sec-h"><span class="n">03</span><h2>Las 5 preguntas de la decisión</h2></div>${decisionBlock()}
    ${decisionOk() ? `<div class="reveal">${yes >= 4 ? `<p><b>${yes} de 5: cumples la decisión de la Puerta 1.</b></p>` : `<p><b>${yes} de 5.</b> No es un fracaso: es la información que buscabas. Hablemos antes de decidir. Si aun así quieres seguir, podrás hacerlo desde la Puerta 1.</p>`}</div>` : ""}</section>`; }
  const n = s.notes;
  const req = reqItems(u, s), canCapture = req.every(x => x.ok);
  const close = `<section class="card sec" id="sec3"><div class="sec-h"><span class="n">04</span><h2>Cerrar</h2><span class="muted small mono">5 min</span></div>
    <span class="eyebrow">cuaderno de hacker</span>
    <div class="grid2">
      <label class="f" for="nt-${u.id}">qué intenté<textarea id="nt-${u.id}" data-bind="sessions.${u.id}.notes.tried">${esc(n.tried)}</textarea></label>
      <label class="f" for="nf-${u.id}">qué falló y por qué<textarea id="nf-${u.id}" data-bind="sessions.${u.id}.notes.failed">${esc(n.failed)}</textarea></label>
      <label class="f" for="nw-${u.id}">qué funcionó<textarea id="nw-${u.id}" data-bind="sessions.${u.id}.notes.worked">${esc(n.worked)}</textarea></label>
      <label class="f" for="nl-${u.id}">lo que me llevo (una frase)<textarea id="nl-${u.id}" data-bind="sessions.${u.id}.notes.line">${esc(n.line)}</textarea></label>
    </div>
    <ul class="checks">
      <li><button data-action="flag" data-id="${u.id}" data-f="explained" class="${s.explained ? "on" : ""}" aria-pressed="${!!s.explained}"><span class="box"></span><span>Me lo expliqué en voz alta en 2 minutos, como si se lo contara a un amigo.</span></button></li>
      <li><button data-action="flag" data-id="${u.id}" data-f="noEarlyHint" class="${s.noEarlyHint ? "on" : ""}" aria-pressed="${!!s.noEarlyHint}"><span class="box"></span><span>Intenté al menos 20 minutos antes de pedir pista (o no la necesité).</span></button></li>
    </ul>
    ${u.cards.length ? `<div class="reveal"><span class="eyebrow">${s.done ? "tarjetas añadidas" : "al capturar se añaden estas tarjetas"}</span><ul>${u.cards.map(([q]) => `<li>${esc(q)}</li>`).join("")}</ul></div>` : ""}
    <div><span class="eyebrow">calidad de tu proceso: ${procScore(u, s)}/5</span><div class="proc" style="margin-top:6px">${procItems(u, s).map(x => `<span class="pill ${x.ok ? "good" : ""}">${x.ok ? "✓" : "·"} ${esc(x.k)}</span>`).join("")}</div></div>
    ${s.done ? `<div class="flagbox"><span class="eyebrow">flag capturada · ${fmtShort(s.doneAt)}</span><span class="mono">flag{f${u.p}_${num(u.i)}_${u.id}_ok}</span>${nextAfter(u)}</div>`
      : locked ? `<div class="lockbox"><b>bloqueada</b><span>Primero captura la ${label} ${num(u.i - 1)}.</span></div>`
      : `<div class="list"><span class="eyebrow">para capturar la flag</span>${req.map(x => { const sec = x.k.startsWith("Escribir") ? "sec0" : x.k.startsWith("Marcar") ? "sec1" : "sec2"; const extra = x.k.startsWith("Marcar") ? ` (${u.steps.filter((_, k) => s.steps[k]).length} de ${u.steps.length})` : ""; return x.ok ? `<span class="small mono" style="color:var(--acc)">[x] ${esc(x.k)}${extra}</span>` : `<a href="#u-${u.id}" data-action="jump" data-to="${sec}" class="small mono" style="color:var(--warn)">[ ] ${esc(x.k)}${extra} · ir ahí ↑</a>`; }).join("")}</div>
         <div class="row"><button class="btn flagbtn" data-action="capture" data-id="${u.id}" ${canCapture ? "" : "disabled"}>capturar la flag</button>${canCapture && procScore(u, s) < 5 ? `<span class="muted small">Lo que falta en tu proceso quedará registrado.</span>` : ""}</div>`}
  </section>`;
  const lockBanner = locked && !s.done ? `<div class="lockbox"><b>vista previa</b><span>Puedes leerla, pero se hace en orden: primero la ${label} ${num(u.i - 1)}.</span></div>` : "";
  return `${head}${lockBanner}<div class="timer" id="timerbox"></div>${stepper}${recall}${practice}${check}${close}`;
}
function autoMark(id, k, why) {
  const u = UNIT[id]; if (!u || !u.steps[k] || isLocked(u)) return false;
  const s = sess(id); if (s.done || s.steps[k]) return false;
  for (let j = 0; j < u.steps.length; j++) s.steps[j] = !!s.steps[j];
  s.steps[k] = true; ensureStarted(u.p); save();
  toast(`[x] paso ${k + 1} marcado${why ? " · " + why : ""}`);
  return true;
}
const autoFor = (u, k) => { const m = AUTO_STEP[u.id]; if (!m) return null; for (const [li, st] of Object.entries(m)) if (+st === k) return +li; return null; };
function practiceItems(u) {
  const P = PRACTICE[u.id];
  if (!P) return (u.links || []).map(([t, url]) => ({ t, url, d: "" }));
  return P.map(x => typeof x[0] === "number" ? { t: u.links[x[0]][0], url: u.links[x[0]][1], d: x[1] } : { url: x[0], t: x[1], d: x[2] });
}
function practiceHtml(u) {
  const items = practiceItems(u); if (!items.length) return "";
  return `<div class="practice"><span class="eyebrow">dónde practicar · qué harás exactamente</span>${items.map((p, k) => {
    const internal = p.url.startsWith("#");
    let host = "en esta app"; if (!internal) { try { host = new URL(p.url).hostname.replace(/^www\./, ""); } catch (e) { host = ""; } }
    return `<div class="prac"><span class="pn">${k + 1}</span><div class="pb"><b>${esc(p.t)}</b><small>${esc(host)}</small>${p.d ? `<p>${fmt(p.d)}</p>` : ""}</div><a class="btn sm ${internal ? "" : "primary"}" href="${esc(p.url)}" data-action="open-link" data-id="${u.id}" data-li="${k}"${internal ? "" : ' target="_blank" rel="noopener"'}>${internal ? "ir" : "abrir ↗"}</a></div>`;
  }).join("")}</div>`;
}
function prereqHtml(u) {
  const need = (typeof PREREQS !== "undefined" && PREREQS[u.id]) || [];
  if (!need.length) return "";
  return `<div class="prereq"><span class="eyebrow">antes necesitas saber · toca para repasar</span><div class="chips">${need.map(([label, id]) => { const v = UNIT[id], ok = v && sess(id).done; return `<a class="chip${ok ? " ok" : ""}" href="#u-${id}" title="${esc(v ? v.title : id)}">${ok ? "✓" : "○"} ${esc(label)} <small>${esc(id)}</small></a>`; }).join("")}</div></div>`;
}
function guidesHtml(u) {
  const urls = [...practiceItems(u).map(p => p.url), ...(u.links || []).map(l => l[1])];
  const plat = [...new Set(GUIDE_HOSTS.filter(([h]) => urls.some(x => x.includes(h))).map(([, k]) => k))].map(k => PLATFORM_GUIDES[k]);
  const all = [...plat, ...(UNIT_GUIDES[u.id] || [])];
  if (!all.length) return "";
  return `<div class="guides"><span class="eyebrow">guía paso a paso · cómo se hace exactamente</span>${all.map((g, i) => `<details class="guide"${i === 0 ? " open" : ""}><summary>${fmt(g.t)}</summary><ol>${g.s.map(x => `<li>${fmt(x)}</li>`).join("")}</ol>${g.learn ? `<p class="learn"><b>Lo que aprendiste:</b> ${fmt(g.learn)}</p>` : ""}</details>`).join("")}</div>`;
}
function nextAfter(u) {
  const nx = siblings(u)[u.i + 1];
  if (nx) return `<div class="row"><a class="btn primary" href="#u-${nx.id}">siguiente: ${esc(nx.title)}</a></div>`;
  return `<div class="row"><a class="btn primary" href="#puerta-${u.p}">ir a la Puerta ${u.p}</a></div>`;
}
function quizHtml(key, qs, rec, pass, kind) {
  const sel = ui.quizSel[key] || [];
  const graded = rec && rec.last && ui.quizSel[key] === undefined;
  const answers = graded ? rec.last : sel;
  return `${qs.map((qq, qi) => `<div class="q"><p>${qi + 1}. ${esc(qq.q)}</p><div class="opts">${qq.o.map((o, oi) => {
      let cls = "";
      if (graded) { if (oi === qq.a) cls = "right"; else if (answers[qi] === oi) cls = "wrong"; }
      else if (answers[qi] === oi) cls = "sel";
      return `<button class="opt ${cls}" ${graded ? "disabled" : ""} data-action="pick" data-key="${key}" data-q="${qi}" data-o="${oi}"><span class="k">${"abcd"[oi]})</span><span>${esc(o)}</span></button>`;
    }).join("")}</div>${graded ? `<p class="expl ${answers[qi] === qq.a ? "ok" : "no"}">${answers[qi] === qq.a ? "Correcto. " : "No era esa. "}${esc(qq.e)}</p>` : ""}</div>`).join("")}
    ${graded ? `<div class="spread"><p class="mono"><b>${rec.lastScore}/${qs.length}</b> ${rec.best >= pass ? `<span class="pill good">aprobado</span>` : `<span class="pill bad">aún no</span>`} <span class="muted small">intentos: ${rec.attempts} · primer intento: ${rec.first}/${qs.length}</span></p><button class="btn" data-action="quiz-retry" data-key="${key}">volver a intentarlo</button></div>`
      : `<div class="row"><button class="btn primary" data-action="quiz-submit" data-key="${key}" data-kind="${kind}" ${sel.filter(v => v !== undefined).length === qs.length ? "" : "disabled"}>comprobar respuestas</button></div>`}`;
}
function decisionBlock() {
  return `<div class="list">${DECISION_QS.map((q, k) => `<div class="spread"><p style="flex:1;min-width:220px">${k + 1}. ${esc(q)}</p><div class="yn"><button class="btn sm ${state.decision[k] === true ? "on" : ""}" data-action="decide" data-k="${k}" data-v="1">sí</button><button class="btn sm ${state.decision[k] === false ? "on" : ""}" data-action="decide" data-k="${k}" data-v="0">no</button></div></div>`).join("")}</div>`;
}

/* ════════ Vista: Puerta ════════ */
function viewGate(n) {
  if (!(n >= 1 && n <= 5)) return `<div class="empty">Esa puerta no existe. <a href="#ruta">Volver a la ruta</a></div>`;
  const ph = state.phases[n], g = GATES[n], gs = gateStatus(n), open = phaseOpen(n);
  const head = `<div class="head"><div class="meta"><a class="btn ghost sm" href="#ruta">← ruta</a>${cmdline(`fase-${n}/puerta`)}</div><h1>Puerta ${n}</h1>
    <p class="muted">${n < 5 ? `Cierra la Fase ${n} y abre la Fase ${n + 1}: ${esc(PH[n].title)}.` : "Cierra tu especialidad y completa la ruta."} Solo se abre si terminaste bien, no solo rápido.</p></div>`;
  if (!open) return `${head}<div class="lockbox"><b>ACCESO DENEGADO</b><span>Primero tienes que pasar la Puerta ${n - 1}.</span></div>`;
  if (ph.passedAt) return `${head}<div class="flagbox"><span class="eyebrow">puerta abierta · ${fmtShort(ph.passedAt)}</span><span class="mono">flag{puerta_${n}_abierta}</span>${n < 5 ? `<div class="row"><a class="btn primary" href="#ruta" data-action="ruta-phase" data-n="${n + 1}">ver la Fase ${n + 1}</a></div>` : ""}</div>`;
  const low = unitsOf(n).filter(u => sess(u.id).done && procScore(u, sess(u.id)) < g.minProc);
  const checklist = `<div class="card"><h3>Condiciones</h3><div>${gs.items.map(x => `<div class="gitem"><span class="st ${x.ok ? "ok" : "no"}">${x.ok ? "[x]" : "[ ]"}</span><span>${esc(x.k)}</span><span class="pill ${x.ok ? "good" : ""}">${esc(x.v)}</span></div>`).join("")}</div>
    ${low.length ? `<div class="reveal"><span class="eyebrow">unidades con proceso por debajo de ${g.minProc}</span><p class="small muted">Puedes mejorarlas ahora: escribe tus notas, márcalas como explicadas en voz alta o completa lo que falte.</p><div class="links">${low.slice(0, 12).map(u => `<a class="btn sm" href="#u-${u.id}">${num(u.i)} · ${procScore(u, sess(u.id))}/5</a>`).join("")}</div></div>` : ""}</div>`;
  const ms = g.milestones.length ? `<div class="card"><h3>Hitos fuera de la app</h3><p class="muted small">Cosas que haces en las plataformas. Márcalas con honestidad: la app confía en ti, y el único engañado serías tú.</p>
    <div class="list">${g.milestones.map(m => m.type === "check"
      ? `<ul class="checks"><li><button data-action="ms-toggle" data-n="${n}" data-m="${m.id}" class="${ph.ms[m.id] ? "on" : ""}" aria-pressed="${!!ph.ms[m.id]}"><span class="box"></span><span>${esc(m.label)}</span></button></li></ul>`
      : `<label class="f" for="ms-${n}-${m.id}">${esc(m.label)} (mínimo ${m.min})<input type="number" min="0" id="ms-${n}-${m.id}" data-bind="phases.${n}.ms.${m.id}" data-num="1" value="${esc(ph.ms[m.id] ?? "")}" placeholder="0"></label>`).join("")}</div></div>` : "";
  let exam = "";
  if (g.exam) exam = `<div class="card" id="examen"><div class="spread"><h3>Examen de la Fase ${n}</h3><span class="pill">aprobar: ${EXAM_PASS} de ${g.exam.length}</span></div>
    ${gs.unitsDone ? `<p class="muted small">Sin notas ni ayuda. Si no llegas, lee las explicaciones, repasa y vuelve a intentarlo otro día.</p>${quizHtml("gate" + n, g.exam, ph.exam, EXAM_PASS, "exam")}`
      : `<div class="lockbox"><b>examen bloqueado</b><span>Se abre cuando captures las ${unitsOf(n).length} unidades de la fase.</span></div>`}</div>`;
  let decision = "";
  if (n === 1) { const yes = state.decision.filter(v => v === true).length;
    decision = `<div class="card"><h3>Decisión de la Fase 1</h3>${decisionBlock()}
    ${decisionOk() && yes < 4 ? `<div class="reveal"><p class="small">Tu decisión dio ${yes} de 5. Lo recomendable es hablarlo conmigo antes de seguir. Si aun así quieres continuar, puedes hacerlo por decisión propia.</p>${ph.override ? `<span class="pill good">sigues por decisión propia</span>` : `<button class="btn" data-action="override">Quiero seguir de todos modos</button>`}</div>` : ""}</div>`; }
  const openBtn = `<div class="card"><div class="spread"><div><h3>${n < 5 ? `Abrir la Fase ${n + 1}` : "Completar la ruta"}</h3><p class="muted small">${gs.ok ? "Cumples todas las condiciones." : "Cuando todas las condiciones estén en [x], se activa el botón."}</p></div><button class="btn primary" data-action="pass-gate" data-n="${n}" ${gs.ok ? "" : "disabled"}>${n < 4 ? `./abrir --fase ${n + 1}` : "./completar"}</button></div></div>`;
  return `${head}${checklist}${decision}${ms}${exam}${openBtn}`;
}

/* ════════ Temporizador ════════ */
const timerPlan = u => u && u.p === 1 && u.blocks === 2 ? [["bloque 1", 50], ["descanso", 15], ["bloque 2", 50]] : [["recordar", 5], ["practicar", 35], ["cerrar", 5]];
const timerElapsed = () => timer.acc + (timer.running ? Date.now() - timer.startedAt : 0);
function paintTimer() {
  const box = $("#timerbox"); if (!box) return;
  const r = route(); const u = UNIT[r.slice(2)]; if (!u) return;
  if (timer.uid !== u.id) timer = { uid: u.id, startedAt: 0, acc: 0, running: false };
  const plan = timerPlan(u), total = plan.reduce((a, p) => a + p[1], 0) * 60000;
  const el = Math.min(timerElapsed(), total);
  let acc = 0, phase = plan.at(-1)[0];
  for (const p of plan) { if (el < acc + p[1] * 60000) { phase = p[0]; break; } acc += p[1] * 60000; }
  const finished = el >= total;
  if (finished && timer.running) { timer.acc = total; timer.running = false; toast("Tiempo cumplido. Cierra la sesión."); }
  const mm = Math.floor(el / 60000), ss = Math.floor(el / 1000) % 60;
  let a2 = 0;
  const segs = plan.map(p => { const st = a2 * 60000, len = p[1] * 60000; a2 += p[1]; const f = Math.max(0, Math.min(1, (el - st) / len)); return `<div style="flex:${p[1]}"><i style="width:${f * 100}%"></i></div>`; }).join("");
  box.innerHTML = `<div class="spread"><div class="row"><span class="t">${pad(mm)}:${pad(ss)}</span><span class="pill ${finished ? "good" : timer.running ? "cy" : ""}">${finished ? "tiempo cumplido" : phase}</span></div>
    <div class="row">${timer.running ? `<button class="btn sm" data-action="t-pause">pausar</button>` : `<button class="btn sm primary" data-action="t-start">${el > 0 && !finished ? "seguir" : "iniciar"}</button>`}${el > 0 ? `<button class="btn sm ghost" data-action="t-reset">reiniciar</button>` : ""}</div></div>
    <div class="tsegs">${segs}</div>`;
}
setInterval(() => { if (timer.running) paintTimer(); }, 1000);

/* ════════ Vista: Ruta ════════ */
function viewRuta() {
  const sel = ui.rutaPhase || activePhase(), ph = PH[sel - 1], open = phaseOpen(sel), nu = nextUnit();
  const tabs = `<div class="ptabs" role="tablist">${PH.map(p => { const o = phaseOpen(p.n), ps = phasePassed(p.n);
    return `<button role="tab" aria-selected="${p.n === sel}" class="${p.n === sel ? "on" : ""} ${o ? "" : "lk"}" data-action="ruta-phase" data-n="${p.n}"><small>fase ${p.n} ${ps ? "· ⚑ cerrada" : o ? "· abierta" : "· bloqueada"}</small><span>${esc(p.title)}</span></button>`; }).join("")}</div>`;
  const total = ph.units.length, d = doneIn(sel);
  const header = `<div class="card"><div class="spread"><div><span class="eyebrow">fase ${sel} · ${esc(ph.sub)} · ${ph.units.reduce((a, u) => a + u.blocks, 0)} bloques</span><h2>${esc(ph.title)}</h2></div>${phasePassed(sel) ? `<span class="pill flag">⚑ cerrada ${fmtShort(state.phases[sel].passedAt)}</span>` : open ? `<span class="pill good">abierta</span>` : `<span class="pill bad">bloqueada</span>`}</div>
    <p class="muted small">${esc(ph.desc)}</p><div class="ascii fl">${ascii(total ? d / total : 0, 22)}</div>
    ${open ? "" : `<div class="lockbox"><b>ACCESO DENEGADO</b><span>Se abre al pasar la Puerta ${sel - 1}. Puedes ver lo que contiene.</span></div>`}</div>`;
  const row = u => { const s = sess(u.id), lk = isLocked(u), nx = nu && nu.id === u.id;
    const status = s.done ? `<span class="pill flag">⚑ ${procScore(u, s)}/5</span>` : nx ? `<span class="pill good">siguiente</span>` : lk ? `<span class="pill">bloqueada</span>` : `<span class="pill cy">disponible</span>`;
    return `<a class="urow ${s.done ? "done" : ""} ${nx ? "next" : ""} ${lk && !nx && !s.done ? "lk" : ""}" href="#u-${u.id}"><span class="num">${num(u.i)}</span><span class="tt"><b>${esc(u.title)}</b><small><span class="lvl">${lvlBar(u.lvl)}</span> · ${esc(u.mod)}${u.blocks > 1 ? ` · ${u.p === 1 ? "sesión larga" : u.blocks + " bloques"}` : ""}</small></span>${status}</a>`; };
  let body;
  if (sel === 1) body = WEEKS.map(w => { const us = LESSONS.filter(l => l.w === w.n);
    return `<div class="card"><div class="spread"><div><span class="eyebrow">semana de estudio ${w.n}</span><h3>${esc(w.title)}</h3></div><span class="pill ${us.every(u => sess(u.id).done) ? "flag" : ""}">${us.filter(u => sess(u.id).done).length}/${us.length}</span></div><p class="muted small">${esc(w.goal)}</p><div class="list">${us.map(row).join("")}</div></div>`; }).join("");
  else if (sel === 5) body = trackPicker(row);
  else { const chunks = []; for (let i = 0; i < ph.units.length; i += 6) chunks.push(ph.units.slice(i, i + 6));
    body = chunks.map((c, k) => `<div class="card"><div class="spread"><div><span class="eyebrow">tramo ${k + 1} de ${chunks.length}</span><h3>${["Arranque", "Construyendo", "Subiendo el nivel", "Cierre"][k] || "Tramo " + (k + 1)}</h3></div><span class="pill ${c.every(u => sess(u.id).done) ? "flag" : ""}">${c.filter(u => sess(u.id).done).length}/${c.length}</span></div><div class="list">${c.map(row).join("")}</div></div>`).join(""); }
  const gate = `<a class="urow gate" href="#puerta-${sel}"><span class="num">⚿</span><span class="tt"><b>Puerta ${sel}</b><small>${sel < 5 ? `abre la Fase ${sel + 1}` : "completa la ruta"} · proceso, hitos${GATES[sel].exam ? " y examen" : sel === 1 ? " y decisión" : ""}</small></span>${phasePassed(sel) ? `<span class="pill flag">abierta</span>` : `<span class="pill">cerrada</span>`}</a>`;
  return `<div class="head">${cmdline("ruta")}<h1>Tu ruta<span class="cur"></span></h1><p class="muted">De lo más fácil a lo más difícil. Cada fase se abre al pasar la puerta de la anterior.</p></div>
    ${tabs}${header}${body}${gate}${methodCard()}`;
}
function trackPicker(row) {
  const open = phaseOpen(5), cur = state.track, pv = ui.trackPreview || cur || TRACKS[0].id;
  const tabs = `<div class="tracks">${TRACKS.map(t => { const n = trackUnits(t.id).length, d = trackUnits(t.id).filter(u => sess(u.id).done).length;
    return `<button class="track ${t.id === pv ? "on" : ""} ${t.id === cur ? "mine" : ""}" data-action="track-preview" data-t="${t.id}" aria-pressed="${t.id === pv}"><span class="ti">${t.icon}</span><b>${esc(t.title)}</b><small>${esc(t.sub)}</small><small class="mono">${t.id === cur ? `tu especialidad · ${d}/${n}` : `${n} unidades`}</small></button>`; }).join("")}</div>`;
  const t = TRACKS.find(x => x.id === pv), us = trackUnits(pv), mine = pv === cur;
  const action = !open ? `<p class="muted small">Se abre al pasar la Puerta 4. Puedes ver todas las especialidades desde ya.</p>`
    : mine ? `<div class="row"><span class="pill good">es tu especialidad</span></div>`
    : `<div class="row"><button class="btn primary" data-action="track-pick" data-t="${pv}">${cur ? "Cambiar a esta especialidad" : "Elegir esta especialidad"}</button>${cur ? `<span class="muted small">Tu avance en la otra no se pierde.</span>` : ""}</div>`;
  return `<div class="card"><span class="eyebrow">especialidades · elige una</span><h3>¿Qué camino quieres dominar?</h3>
    <p class="muted small">No tienes que decidir hoy: mira cada una. Cuando llegues, antes de empezar, pídeme que revise sus enlaces, porque las plataformas y los precios cambian.</p>${tabs}</div>
    <div class="card"><div class="spread"><div><span class="eyebrow">${esc(t.sub)}</span><h3>${t.icon} ${esc(t.title)}</h3></div></div>
    <p class="small">${esc(t.para)}</p>${action}<div class="list">${us.length ? us.map(row).join("") : `<div class="empty">Esta especialidad todavía no tiene unidades.</div>`}</div></div>`;
}
function methodCard() {
  return `<div class="card"><h3>Por qué la ruta está hecha así</h3><ul class="small">
    <li><b>Recordar antes de mirar</b> y <b>repartir el estudio</b> en el tiempo son las dos técnicas con más evidencia para retener.</li>
    <li><b>Primero ejemplos resueltos, luego sin ayuda:</b> al principio aprendes más viendo cómo se resuelve; después se quitan pasos poco a poco hasta que lo haces solo. Por eso las máquinas pasan de guiadas a sin guía.</li>
    <li><b>Mezclar temas</b> en los repasos te enseña a reconocer qué tipo de problema tienes delante.</li>
    <li><b>Dificultad que sube despacio</b> (▮ a ▮▮▮▮▮): nunca un salto brusco.</li>
    <li><b>Dormir y hacer ejercicio</b> consolidan lo que practicaste: por eso tu horario los protege.</li></ul></div>`;
}

/* ════════ Vista: Horario ════════ */
function viewHorario() {
  const dow = new Date().getDay(), key = ui.schedDay || schedKey(dow), list = SCHED[key], isToday = key === schedKey(dow);
  const nowM = new Date().getHours() * 60 + new Date().getMinutes();
  const S = 300, E = 1380, span = E - S;
  const segs = list.map(b => { let s = toMin(b[0]), e = toMin(b[1]); if (e <= s) e = E; s = Math.max(S, s); e = Math.min(E, e); if (e <= s) return ""; return `<span title="${esc(b[2])}" style="left:${(s - S) / span * 100}%;width:${(e - s) / span * 100}%;background:var(--c-${b[3]})"></span>`; }).join("");
  const nowLine = isToday && nowM >= S && nowM <= E ? `<i class="now" style="left:${(nowM - S) / span * 100}%"></i>` : "";
  const studyMin = { weekday: 60, friday: 0, saturday: 115, sunday: 45 }[key];
  return `<div class="head">${cmdline("horario")}<h1>Tu día<span class="cur"></span></h1><p class="muted">Unas 6 h y media de estudio a la semana, sin quitarte el gimnasio ni el descanso.</p></div>
    <div class="daytabs" role="tablist">${[["weekday", "lun a jue"], ["friday", "viernes"], ["saturday", "sábado"], ["sunday", "domingo"]].map(([k, t]) => `<button role="tab" aria-selected="${k === key}" class="${k === key ? "on" : ""}" data-action="sday" data-k="${k}">${t}${k === schedKey(dow) ? " · hoy" : ""}</button>`).join("")}</div>
    <div class="card"><div class="daybar">${segs}${nowLine}</div>
      <div class="hours"><span>5 a. m.</span><span>9</span><span>1 p. m.</span><span>5</span><span>9</span><span>11 p. m.</span></div>
      <div class="legend">${["study", "review", "sleep", "gym", "school", "free"].map(k => `<span><i style="background:var(--c-${k})"></i>${KIND[k]}</span>`).join("")}</div>
      <p class="small muted mono">estudio y repaso este día: ${fmtDur(studyMin)}</p></div>
    <div class="card"><div>${list.map(b => `<div class="slot ${isToday && inBlock(b, nowM) ? "cur" : ""}"><span class="tm">${to12(b[0])}<br>${to12(b[1])}</span><span class="sw" style="background:var(--c-${b[3]})"></span><div><b>${esc(b[2])}</b>${b[4] ? `<p class="muted small">${esc(b[4])}</p>` : ""}</div></div>`).join("")}</div></div>
    <div class="card"><h3>Si algo no cuadra</h3><ul class="small">
      <li><b>Llegas muy cansado a las 2:20:</b> haz la siesta primero (2:30 a 4:00) y el bloque de 4:15 a 5:00.</li>
      <li><b>Semana de exámenes del colegio:</b> solo los 15 minutos de tarjetas por la noche. El colegio va primero.</li>
      <li><b>Una noche te desvelas:</b> al día siguiente haz el bloque igual, pero salta el repaso nocturno y acuéstate a tu hora.</li>
      <li><b>En vacaciones:</b> puedes hacer dos bloques al día con 15 minutos de descanso entre ellos.</li></ul></div>`;
}

/* ════════ Vista: Agenda ════════ */
function conflictFor(a) {
  if (!a.time || !a.date) return null;
  const dow = parseYmd(a.date).getDay(), s = toMin(a.time), e = s + (+a.min || 0);
  const hit = schedFor(dow).filter(b => ["school", "gym", "study", "sleep"].includes(b[3])).find(b => {
    const bs = toMin(b[0]), be = toMin(b[1]);
    if (be <= bs) return s < be || e > bs;
    return s < be && e > bs;
  });
  return hit ? hit[2] : null;
}
function agRow(a) {
  const c = conflictFor(a), end = a.time ? fromMin(toMin(a.time) + (+a.min || 0)) : "";
  return `<div class="ag ${a.done ? "done" : ""}"><span class="tm">${a.time ? to12(a.time) : "sin hora"}${end ? `<br><span class="muted">${to12(end)}</span>` : ""}</span>
    <div><b class="ttl">${esc(a.title)}</b><p class="muted small">${fmtDur(a.min)}${a.notes ? " · " + esc(a.notes) : ""}</p>${c && !a.done ? `<span class="pill warn">choca con: ${esc(c)}</span>` : ""}</div>
    <div class="row acts"><button class="btn sm" data-action="ag-done" data-id="${a.id}">${a.done ? "deshacer" : "hecha"}</button><button class="btn sm ghost" data-action="ag-edit" data-id="${a.id}">editar</button><button class="btn sm ghost" data-action="ag-del" data-id="${a.id}">borrar</button></div></div>`;
}
function viewAgenda() {
  const t = todayStr(), ed = ui.agendaEdit ? state.agenda.find(a => a.id === ui.agendaEdit) : null;
  const f = ed || { title: "", date: t, time: "", min: 30, notes: "" };
  const upcoming = state.agenda.filter(a => a.date >= t && !a.done).sort((a, b) => (a.date + (a.time || "99")).localeCompare(b.date + (b.time || "99")));
  const past = state.agenda.filter(a => a.done || a.date < t).sort((a, b) => b.date.localeCompare(a.date)).slice(0, 15);
  const byDate = {}; upcoming.forEach(a => (byDate[a.date] ||= []).push(a));
  const wk = addDays(t, 7), weekMin = upcoming.filter(a => a.date < wk).reduce((s, a) => s + (+a.min || 0), 0);
  return `<div class="head">${cmdline("agenda")}<h1>Agenda<span class="cur"></span></h1><p class="muted">Añade lo que tengas que hacer con su hora y sus minutos. Te aviso si choca con el colegio, el gimnasio, tu bloque de estudio o el sueño.</p></div>
    <form class="card" id="agform" autocomplete="off"><h3>${ed ? "Editar tarea" : "Nueva tarea"}</h3>
      <div class="formgrid">
        <label class="f wide" for="ag-title">qué tienes que hacer<input type="text" id="ag-title" name="title" required value="${esc(f.title)}" placeholder="Ej.: terminar la sala DNS in Detail"></label>
        <label class="f" for="ag-date">fecha<input type="date" id="ag-date" name="date" required value="${esc(f.date)}"></label>
        <label class="f" for="ag-time">hora<input type="time" id="ag-time" name="time" value="${esc(f.time)}"></label>
        <label class="f" for="ag-min">minutos<input type="number" id="ag-min" name="min" min="5" step="5" value="${esc(f.min)}"></label>
        <label class="f wide" for="ag-notes">notas o enlace<input type="text" id="ag-notes" name="notes" value="${esc(f.notes)}" placeholder="Opcional"></label>
      </div>
      <div class="row"><button class="btn primary" type="submit">${ed ? "guardar cambios" : "+ añadir a la agenda"}</button>${ed ? `<button class="btn ghost" type="button" data-action="ag-cancel">cancelar</button>` : ""}</div></form>
    <div class="stats"><div class="stat"><b>${upcoming.length}</b><span>tareas pendientes</span></div><div class="stat"><b>${fmtDur(weekMin)}</b><span>en los próximos 7 días</span></div><div class="stat"><b>${fmtDur(state.agenda.filter(a => a.date === t).reduce((s, a) => s + (+a.min || 0), 0))}</b><span>para hoy</span></div></div>
    ${Object.keys(byDate).length ? Object.entries(byDate).map(([d, list]) => `<div class="card"><div class="spread"><h3>${d === t ? "Hoy" : d === addDays(t, 1) ? "Mañana" : fmtLong(d)}</h3><span class="pill">${fmtDur(list.reduce((s, a) => s + (+a.min || 0), 0))}</span></div><div>${list.map(agRow).join("")}</div></div>`).join("")
      : `<div class="empty">Sin tareas pendientes. Añade la primera con el formulario de arriba.</div>`}
    ${past.length ? `<div class="card"><h3>Hechas y pasadas</h3><div>${past.map(agRow).join("")}</div></div>` : ""}`;
}

/* ════════ Vista: Tarjetas ════════ */
function viewTarjetas() {
  const due = dueCards(), rv = ui.review;
  if (rv) {
    const c = state.cards.find(x => x.id === rv.queue[rv.i]);
    if (!c) { ui.review = null; return viewTarjetas(); }
    return `<div class="head"><div class="meta"><button class="btn ghost sm" data-action="rv-stop">← terminar repaso</button><span class="eyebrow">tarjeta ${rv.i + 1} de ${rv.queue.length}</span></div></div>
      <div class="ascii">${ascii(rv.i / rv.queue.length, 22)}</div>
      ${termCard("tarjetas/repaso", `<div class="flash"><span class="eyebrow">${esc(c.src)}</span><div class="front">${esc(c.q)}</div>
        ${rv.show ? `<div class="back">${esc(c.a)}</div><div class="rate">
          <button class="btn" data-action="rate" data-r="0">otra vez<small>${intervalLabel(c, 0)}</small></button>
          <button class="btn primary" data-action="rate" data-r="1">bien<small>${intervalLabel(c, 1)}</small></button>
          <button class="btn" data-action="rate" data-r="2">fácil<small>${intervalLabel(c, 2)}</small></button></div><p class="muted small mono">atajos: 1 · 2 · 3</p>`
          : `<p class="muted small">Di la respuesta en voz alta o en tu cabeza antes de mirarla.</p><button class="btn primary" data-action="rv-show">mostrar respuesta</button><p class="muted small mono">atajo: espacio</p>`}</div>`, true)}`;
  }
  const counts = [1, 2, 3, 4, 5, 6].map(b => state.cards.filter(c => c.box === b).length), mx = Math.max(1, ...counts);
  const today = todayStr(), last7 = Array.from({ length: 7 }, (_, k) => addDays(today, -k)).reduce((s, d) => s + (state.reviewLog[d] || 0), 0);
  return `<div class="head">${cmdline("tarjetas")}<h1>Repaso espaciado<span class="cur"></span></h1><p class="muted">Cada tarjeta vuelve justo cuando estás a punto de olvidarla. Si la sabes, tarda más en volver; si fallas, vuelve hoy.</p></div>
    ${termCard("tarjetas", `<div class="spread"><div><h2>${due.length} pendientes hoy</h2><p class="muted small">${due.length ? `Unos ${Math.max(2, Math.round(due.length * 0.4))} minutos.` : "Nada pendiente. Vuelve mañana o captura tu siguiente unidad."}</p></div><button class="btn primary" data-action="rv-start" ${due.length ? "" : "disabled"}>./repasar</button></div>`, due.length > 0)}
    <div class="grid2">
      <div class="card"><h3>Qué tan firmes están</h3><div class="boxes">${counts.map((c, k) => `<div><small>${c}</small><i style="height:${c / mx * 100}%"></i><small>N${k + 1}</small></div>`).join("")}</div><p class="muted small">N1 recién aprendidas · N6 muy firmes. Repasadas en 7 días: <b>${last7}</b>.</p></div>
      <form class="card" id="cardform" autocomplete="off"><h3>Crear una tarjeta</h3>
        <label class="f" for="cf-q">pregunta corta<input type="text" id="cf-q" name="q" required placeholder="¿Qué puerto usa SSH?"></label>
        <label class="f" for="cf-a">respuesta<input type="text" id="cf-a" name="a" required placeholder="22"></label>
        <div class="row"><button class="btn primary" type="submit">+ añadir tarjeta</button></div></form></div>
    <div class="card"><div class="spread"><h3>Todas tus tarjetas</h3><span class="pill">${state.cards.length}</span></div>
      ${state.cards.length ? `<div>${state.cards.slice().reverse().map(c => `<div class="citem"><div><b>${esc(c.q)}</b><p class="muted small">${esc(c.a)} · N${c.box} · vuelve ${c.due <= today ? "hoy" : fmtShort(c.due)}</p></div><button class="btn sm ghost" data-action="card-del" data-id="${c.id}">borrar</button></div>`).join("")}</div>`
        : `<div class="empty">Aún no tienes tarjetas. Al capturar la sesión 01 se añaden 3, y puedes crear las tuyas arriba.</div>`}</div>`;
}

/* ════════ Vista: Progreso ════════ */
function viewProgreso() {
  const done = routeUnits().filter(u => sess(u.id).done), t = todayStr();
  const avg = done.length ? done.reduce((a, u) => a + procScore(u, sess(u.id)), 0) / done.length : 0;
  const qz = done.filter(u => u.quiz && sess(u.id).quiz);
  const firstPct = qz.length ? Math.round(qz.reduce((a, u) => a + sess(u.id).quiz.first / u.quiz.length, 0) / qz.length * 100) : null;
  const acts = new Set(Object.keys(state.reviewLog)); done.forEach(u => sess(u.id).doneAt && acts.add(sess(u.id).doneAt));
  const active7 = Array.from({ length: 7 }, (_, k) => addDays(t, -k)).filter(d => acts.has(d)).length;
  const due = dueCards().length, wk = weekKey(), r = state.reviews[wk] || {};
  const hist = Object.keys(state.reviews).sort().slice(-10).map(k => ({ k, g: state.reviews[k].ganas })).filter(x => x.g);
  return `<div class="head">${cmdline("progreso")}<h1>Progreso<span class="cur"></span></h1><p class="muted">No solo cuánto haces: también si sigues bien el método.</p></div>
    <div class="stats">
      <div class="stat"><b>${done.length}/${routeUnits().length}</b><span>flags capturadas${state.track ? "" : " (sin la Fase 5)"}</span></div>
      <div class="stat"><b>${done.length ? avg.toFixed(1) : "–"}</b><span>calidad del proceso (de 5)</span></div>
      <div class="stat"><b>${firstPct === null ? "–" : firstPct + "%"}</b><span>aciertos al primer intento</span></div>
      <div class="stat"><b>${active7}/7</b><span>días activos esta semana</span></div>
      <div class="stat"><b>${due}</b><span>tarjetas pendientes</span></div></div>
    <div class="card"><h3>Las 5 fases</h3><div class="list">${PH.map(p => `<div class="spread"><span class="mono small" style="min-width:210px">fase ${p.n} · ${esc(p.title.toLowerCase())}</span><span class="ascii ${phasePassed(p.n) ? "fl" : ""}">${phaseOpen(p.n) ? (p.units.length ? ascii(doneIn(p.n) / p.units.length, 20) : "[ elige especialidad ]") : "[ bloqueada ]"}</span></div>`).join("")}</div></div>
    <div class="card"><h3>¿Lo estás haciendo bien?</h3>${(() => { const ds = diagnostics(done, firstPct, due); return ds.length ? `<div class="diag">${ds.map(d => `<span class="pill ${d.c}">${d.t}</span><div><b>${esc(d.h)}</b><p class="muted small">${esc(d.p)}</p></div>`).join("")}</div>` : `<div class="empty">Aparecerá aquí cuando captures tu primera unidad.</div>`; })()}</div>
    <div class="card" id="review"><div class="spread"><h3>Revisión de esta semana</h3><span class="pill">semana del ${fmtShort(wk)}</span></div>
      <div class="grid2"><label class="f" for="rl-${wk}">lo que más me gustó<textarea id="rl-${wk}" data-bind="reviews.${wk}.liked">${esc(r.liked)}</textarea></label>
      <label class="f" for="rs-${wk}">dónde me atasqué<textarea id="rs-${wk}" data-bind="reviews.${wk}.stuck">${esc(r.stuck)}</textarea></label></div>
      <div class="spread"><span class="small mono">ganas (1 ninguna · 5 muchas)</span><div class="ganas">${[1, 2, 3, 4, 5].map(g => `<button class="${r.ganas === g ? "on" : ""}" data-action="ganas" data-w="${wk}" data-g="${g}" aria-pressed="${r.ganas === g}">${g}</button>`).join("")}</div></div>
      ${hist.length ? `<div><span class="eyebrow">tus ganas semana a semana</span><div class="hist" style="margin-top:8px">${hist.map(h => `<i title="${fmtShort(h.k)}: ${h.g}" style="height:${h.g * 20}%"></i>`).join("")}</div></div>` : ""}</div>
    ${viewAjustes()}`;
}
function diagnostics(done, firstPct, due) {
  if (!done.length) return [];
  const out = [], n = activePhase(), p = pace(n);
  if (p) out.push(p.behind <= 1 ? { c: "good", t: "bien", h: "Vas a buen ritmo.", p: "Unos 5 bloques por semana. Sigue con lo que toca cada día." }
    : { c: p.behind > 4 ? "bad" : "warn", t: p.behind > 4 ? "ojo" : "atento", h: `Vas ${p.behind} bloques por detrás de tu ritmo.`, p: p.behind > 4 ? "No recuperes haciendo el doble. Si es por exámenes o vacaciones, cambia la fecha de inicio de la fase en Ajustes." : "Un par de días perdidos no rompen nada: sigue con la que toca." });
  const rc = Math.round(done.filter(u => recallOk(sess(u.id))).length / done.length * 100);
  out.push(rc >= 80 ? { c: "good", t: "bien", h: `Recuerdas antes de empezar (${rc}%).`, p: "Es la técnica que más fija la memoria." } : { c: rc >= 50 ? "warn" : "bad", t: rc >= 50 ? "atento" : "ojo", h: `Solo recuerdas antes de empezar en el ${rc}% de las unidades.`, p: "Esos 5 minutos son los más rentables de la sesión." });
  if (firstPct !== null) out.push(firstPct >= 80 ? { c: "good", t: "bien", h: `Aciertas el ${firstPct}% al primer intento.`, p: "Estás entendiendo lo que practicas." }
    : firstPct >= 60 ? { c: "warn", t: "atento", h: `Aciertas el ${firstPct}% al primer intento.`, p: "Antes del quiz, explícate en voz alta lo que hiciste. Si no te sale, vuelve al concepto." }
    : { c: "bad", t: "ojo", h: `Aciertas solo el ${firstPct}% al primer intento.`, p: "Vas muy rápido por la práctica. Termina los pasos y relee el concepto antes de contestar." });
  const nt = Math.round(done.filter(u => notesOk(sess(u.id))).length / done.length * 100);
  out.push(nt >= 80 ? { c: "good", t: "bien", h: `Anotas en tu cuaderno (${nt}%).`, p: "Esas notas se convierten en tu método y tus informes." } : { c: "warn", t: "atento", h: `Solo anotas en el ${nt}% de las unidades.`, p: "Escribe al menos qué intentaste y qué funcionó. Son 2 minutos." });
  const ex = Math.round(done.filter(u => sess(u.id).explained).length / done.length * 100);
  if (ex < 60) out.push({ c: "warn", t: "atento", h: `Te explicas en voz alta en el ${ex}% de las unidades.`, p: "Explicarlo es la forma más rápida de descubrir lo que aún no entiendes." });
  out.push(due <= 20 ? { c: "good", t: "bien", h: "Tus tarjetas están al día.", p: "Repasarlas cada noche evita que se acumulen." } : { c: due > 40 ? "bad" : "warn", t: due > 40 ? "ojo" : "atento", h: `Tienes ${due} tarjetas acumuladas.`, p: "Haz el repaso de 15 minutos esta noche. En un par de días se normaliza." });
  const g = Object.keys(state.reviews).sort().map(k => state.reviews[k].ganas).filter(Boolean);
  if (g.length >= 2 && g.slice(-2).every(x => x <= 2)) out.push({ c: "bad", t: "habla", h: "Llevas dos semanas con pocas ganas.", p: "Para y háblalo conmigo antes de abandonar. Ajustamos el plan." });
  else if (g.length) out.push({ c: g.at(-1) >= 3 ? "good" : "warn", t: g.at(-1) >= 3 ? "bien" : "atento", h: `Tus ganas la última semana: ${g.at(-1)} de 5.`, p: g.at(-1) >= 3 ? "Buena señal." : "Anota en la revisión qué te quitó las ganas." });
  return out;
}
function viewAjustes() {
  const n = activePhase(), st = state.phases[n].start;
  return `<div class="card" id="ajustes"><h3>Ajustes</h3><p class="small" id="sync2"></p>
    <div class="formgrid"><label class="f wide" for="set-start">fecha de inicio de la fase ${n}<input type="date" id="set-start" value="${esc(st || "")}"></label></div>
    <p class="muted small">El ritmo se calcula desde esta fecha. Cámbiala si pausaste por exámenes o vacaciones.</p></div>
  ${IN_CLAUDE ? "" : `<div class="card"><h3>Esta app guarda tu progreso en este dispositivo</h3><p class="small">Para tener el mismo progreso en la laptop y en el teléfono:</p><ol class="small">
    <li>En el dispositivo donde más avanzaste, pulsa <b>copiar mi progreso</b> (abajo).</li>
    <li>Envíatelo a ti mismo: por WhatsApp, correo o una nota.</li>
    <li>En el otro dispositivo, pega el texto en <b>restaurar</b> y confirma.</li></ol>
    <p class="muted small">Hazlo cuando cambies de dispositivo, por ejemplo cada domingo en la revisión semanal.</p></div>`}
  <div class="card" ${IN_CLAUDE ? "" : "hidden"}><h3>Usarla en tu iPhone</h3><ol class="small">
    <li>En el iPhone, abre Safari y entra en claude.ai con tu misma cuenta.</li>
    <li>Abre el enlace de Ruta Ciber (lo encuentras en la conversación donde la creamos, desde la app de Claude, o envíatelo).</li>
    <li>Toca el botón Compartir y elige <b>Agregar a pantalla de inicio</b>. Te queda un icono como una app.</li>
    <li>Si te pide iniciar sesión, entra con la misma cuenta: verás tu progreso igual que en la laptop.</li></ol>
    <p class="muted small">Tu progreso vive en tu cuenta, no en el dispositivo. Lo que marques en uno aparece en el otro.</p></div>
  <div class="card"><h3>${IN_CLAUDE ? "Copia de seguridad" : "Pasar tu progreso a otro dispositivo"}</h3>
    <div class="row"><button class="btn" data-action="export">copiar mi progreso</button></div>
    <label class="f" for="imp">restaurar: pega aquí el texto<textarea id="imp" placeholder="Pega aquí una copia de seguridad"></textarea></label>
    <div class="row">${ui.confirmImport ? `<span class="small">Esto reemplaza todo tu progreso actual.</span><button class="btn danger" data-action="import-yes">sí, restaurar</button><button class="btn ghost" data-action="import-no">cancelar</button>` : `<button class="btn" data-action="import">restaurar copia</button>`}</div>
    <div class="row">${ui.confirmReset ? `<span class="small">Se borrará todo tu progreso, en todos tus dispositivos.</span><button class="btn danger" data-action="reset-yes">sí, borrar todo</button><button class="btn ghost" data-action="reset-no">cancelar</button>` : `<button class="btn ghost" data-action="reset">empezar de cero</button>`}</div></div>`;
}

/* ════════ Acciones ════════ */
function setPath(path, value) {
  const ks = path.split("."); let o = state;
  for (let k = 0; k < ks.length - 1; k++) { const key = ks[k]; if (o[key] === undefined || o[key] === null || typeof o[key] !== "object") o[key] = {}; o = o[key]; }
  o[ks.at(-1)] = value;
}
function copyText(text) {
  if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(text).then(() => toast("copiado"), () => fallbackCopy(text));
  else fallbackCopy(text);
}
function fallbackCopy(text) {
  const ta = document.createElement("textarea"); ta.value = text; ta.style.position = "fixed"; ta.style.opacity = "0"; document.body.appendChild(ta); ta.select();
  let ok = false; try { ok = document.execCommand("copy"); } catch (e) {}
  ta.remove(); toast(ok ? "copiado" : "No se pudo copiar: selecciónalo a mano");
}
function ensureStarted(n) { if (!state.phases[n].start) state.phases[n].start = todayStr(); }
function gradeQuiz(key, kind) {
  const sel = ui.quizSel[key] || [];
  let qs, holder, pass;
  if (kind === "exam") { const n = +key.slice(4); qs = GATES[n].exam; holder = state.phases[n]; pass = EXAM_PASS; }
  else { const u = UNIT[key]; qs = u.quiz; holder = sess(key); pass = PASS(qs); }
  const score = qs.reduce((a, q, k) => a + (sel[k] === q.a ? 1 : 0), 0);
  const field = kind === "exam" ? "exam" : "quiz";
  const rec = holder[field] || { attempts: 0, first: 0, best: 0 };
  if (rec.attempts === 0) rec.first = score;
  rec.attempts += 1; rec.best = Math.max(rec.best, score); rec.last = sel.slice(); rec.lastScore = score;
  holder[field] = rec; delete ui.quizSel[key]; save();
  toast(score >= pass ? `${score}/${qs.length}: aprobado` : `${score}/${qs.length}: lee las explicaciones y vuelve a intentarlo`);
}
document.addEventListener("click", e => {
  const b = e.target.closest("[data-action]"); if (!b) return;
  const a = b.dataset.action, id = b.dataset.id, U = id ? UNIT[id] : null;
  switch (a) {
    case "jump": { e.preventDefault(); const el = document.getElementById(b.dataset.to); if (el) el.scrollIntoView({ behavior: "smooth", block: "start" }); return; }
    case "install": if (deferredInstall) { const ev = deferredInstall; ev.prompt(); ev.userChoice.then(c => { if (c && c.outcome === "accepted") { deferredInstall = null; justInstalled = true; } render(); }).catch(() => {}); } return;
    case "start-route": ensureStarted(1); save(); toast("Día 1. A por la sesión 01."); location.hash = "u-" + LESSONS[0].id; return;
    case "reveal-keys": ui.revealKeys[id] = true; break;
    case "reveal-hint": ui.revealHint[id] = true; break;
    case "step": { if (!U || isLocked(U) || sess(id).done) { if (sess(id).done) break; toast("Primero termina la unidad anterior"); return; } const s = sess(id), k = +b.dataset.k; for (let j = 0; j < U.steps.length; j++) s.steps[j] = !!s.steps[j]; s.steps[k] = !s.steps[k]; save(); break; }
    case "open-link": { if (!U) return; const k = AUTO_STEP[id] && AUTO_STEP[id][b.dataset.li]; if (k !== undefined && autoMark(id, +k, "abriste el enlace")) setTimeout(render, 400); return; }
    case "steps-all": { if (!U || isLocked(U) || sess(id).done) return; const s = sess(id); U.steps.forEach((_, j) => s.steps[j] = true); save(); toast(`[x] ${U.steps.length} pasos marcados`); break; }
    case "flag": { const s = sess(id); s[b.dataset.f] = !s[b.dataset.f]; save(); break; }
    case "block-plus": { const s = sess(id); if (s.blocksDone < U.blocks - 1) { s.blocksDone += 1; ensureStarted(U.p); save(); toast(`bloque ${s.blocksDone} de ${U.blocks} hecho`); } break; }
    case "block-minus": { const s = sess(id); if (s.blocksDone > 0) { s.blocksDone -= 1; save(); } break; }
    case "copy": copyText(b.dataset.text); return;
    case "pick": { const k = b.dataset.key, arr = ui.quizSel[k] || []; arr[+b.dataset.q] = +b.dataset.o; ui.quizSel[k] = arr; break; }
    case "quiz-submit": { const k = b.dataset.key; if (b.dataset.kind !== "exam" && UNIT[k] && isLocked(UNIT[k])) { toast("Primero termina la anterior"); return; } gradeQuiz(k, b.dataset.kind); break; }
    case "quiz-retry": ui.quizSel[b.dataset.key] = []; break;
    case "capture": {
      const s = sess(id); if (s.done || !U) return;
      if (isLocked(U)) { toast("Primero captura la anterior"); return; }
      const miss = reqItems(U, s).find(x => !x.ok); if (miss) { toast("Falta: " + miss.k.toLowerCase()); const el = document.getElementById(miss.k.startsWith("Escribir") ? "sec0" : miss.k.startsWith("Marcar") ? "sec1" : "sec2"); if (el) el.scrollIntoView({ behavior: "smooth", block: "start" }); return; }
      s.done = true; s.doneAt = todayStr(); s.blocksDone = U.blocks; ensureStarted(U.p);
      U.cards.forEach(([q, ans]) => addCard(q, ans, `Fase ${U.p} · ${U.title}`));
      save(); toast(`⚑ flag capturada${U.cards.length ? ` · ${U.cards.length} tarjetas nuevas` : ""}`);
      timer = { uid: null, startedAt: 0, acc: 0, running: false };
      break;
    }
    case "decide": state.decision[+b.dataset.k] = b.dataset.v === "1"; save(); break;
    case "override": state.phases[1].override = true; save(); break;
    case "ms-toggle": { const ph = state.phases[+b.dataset.n]; ph.ms[b.dataset.m] = !ph.ms[b.dataset.m]; save(); break; }
    case "pass-gate": {
      const n = +b.dataset.n; if (!gateStatus(n).ok || phasePassed(n)) return;
      state.phases[n].passedAt = todayStr();
      if (n < 5) { state.phases[n + 1].start = todayStr(); ui.rutaPhase = n + 1; }
      save(); ui.unlocked = n + 1; break;
    }
    case "unlock-ok": { const n = ui.unlocked; ui.unlocked = null; location.hash = n <= 5 && unitsOf(n).length ? "u-" + unitsOf(n)[0].id : n === 5 ? "ruta" : "progreso"; render(); return; }
    case "track-preview": ui.trackPreview = b.dataset.t; break;
    case "track-pick": { if (!phaseOpen(5)) return; state.track = b.dataset.t; ui.trackPreview = b.dataset.t; save(); toast("Especialidad elegida: " + curTrack().title); break; }
    case "ruta-phase": ui.rutaPhase = +b.dataset.n; if (route() !== "ruta") return; break;
    case "t-start": timer.startedAt = Date.now(); timer.running = true; paintTimer(); return;
    case "t-pause": timer.acc = timerElapsed(); timer.running = false; paintTimer(); return;
    case "t-reset": timer.acc = 0; timer.running = false; paintTimer(); return;
    case "sday": ui.schedDay = b.dataset.k; break;
    case "ag-done": { const x = state.agenda.find(y => y.id === id); if (x) { x.done = !x.done; save(); } break; }
    case "ag-del": state.agenda = state.agenda.filter(y => y.id !== id); if (ui.agendaEdit === id) ui.agendaEdit = null; save(); toast("tarea borrada"); break;
    case "ag-edit": ui.agendaEdit = id; if (route() !== "agenda") { location.hash = "agenda"; return; } render(); window.scrollTo({ top: 0, behavior: "smooth" }); return;
    case "ag-cancel": ui.agendaEdit = null; break;
    case "rv-start": ui.review = { queue: dueCards().map(c => c.id), i: 0, show: false }; break;
    case "rv-show": if (ui.review) ui.review.show = true; break;
    case "rv-stop": ui.review = null; break;
    case "rate": rateFromUI(+b.dataset.r); return;
    case "card-del": state.cards = state.cards.filter(c => c.id !== id); save(); break;
    case "ganas": setPath(`reviews.${b.dataset.w}.ganas`, +b.dataset.g); save(); break;
    case "export": copyText(JSON.stringify(state)); return;
    case "import": { const v = ($("#imp") || {}).value || ""; try { const p = JSON.parse(v); if (!p || typeof p !== "object" || !p.sessions) throw 0; ui.pendingImport = p; ui.confirmImport = true; } catch (err) { toast("Ese texto no es una copia válida"); return; } break; }
    case "import-yes": if (ui.pendingImport) { const keep = state.updatedAt; state = normalize(ui.pendingImport); state.updatedAt = keep; ui.pendingImport = null; ui.confirmImport = false; save(); toast("copia restaurada"); } break;
    case "import-no": ui.pendingImport = null; ui.confirmImport = false; break;
    case "reset": ui.confirmReset = true; break;
    case "reset-yes": state = Object.assign(defaultState(), { updatedAt: state.updatedAt }); ui.confirmReset = false; ui.quizSel = {}; ui.rutaPhase = null; save(); toast("progreso borrado"); break;
    case "reset-no": ui.confirmReset = false; break;
    default: return;
  }
  render();
});
function rateFromUI(r) {
  const rv = ui.review; if (!rv) return;
  const c = state.cards.find(x => x.id === rv.queue[rv.i]); if (!c) return;
  rateCard(c, r);
  if (r === 0) rv.queue.push(c.id);
  rv.i += 1; rv.show = false;
  if (rv.i >= rv.queue.length) { ui.review = null; toast("repaso terminado"); }
  save(); render();
}
document.addEventListener("keydown", e => {
  if (e.key === "Escape" && ui.unlocked) { ui.unlocked = null; render(); return; }
  if (!ui.review || route() !== "tarjetas" || isTyping()) return;
  if (e.key === " " && !ui.review.show) { e.preventDefault(); ui.review.show = true; render(); }
  else if (ui.review.show && ["1", "2", "3"].includes(e.key)) { e.preventDefault(); rateFromUI(+e.key - 1); }
});
let bindTimer = null;
function onBind(e) {
  const el = e.target; if (!el.dataset || !el.dataset.bind) return;
  const v = el.type === "checkbox" ? el.checked : el.dataset.num ? (el.value === "" ? "" : Math.max(0, parseInt(el.value, 10) || 0)) : el.value;
  setPath(el.dataset.bind, v);
  state.updatedAt = Date.now(); saveLocal();
  clearTimeout(bindTimer); bindTimer = setTimeout(save, 500);
  if (el.dataset.bind.endsWith(".recall")) {
    const sec = el.closest("section"), btn = sec && sec.querySelector('[data-action="reveal-keys"]');
    if (btn) { const ok = el.value.trim().length >= 15; btn.disabled = !ok; const h = sec.querySelector("[data-hint]"); if (h) h.textContent = ok ? "" : "Escribe primero lo que recuerdes."; }
  }
}
document.addEventListener("input", onBind);
document.addEventListener("change", e => {
  const el = e.target;
  if (el.type === "checkbox" && el.dataset.bind) { onBind(e); render(); return; }
  if (el.dataset && el.dataset.bind && (el.type === "number")) { clearTimeout(bindTimer); save(); render(); return; }
  if (el.id === "set-start" && el.value) { const n = activePhase(); state.phases[n].start = el.value; save(); toast("fecha de inicio actualizada"); render(); }
});
document.addEventListener("focusout", e => { if (e.target.matches && e.target.matches("textarea[data-bind], input[type=text][data-bind]")) { clearTimeout(bindTimer); save(); } });
document.addEventListener("submit", e => {
  e.preventDefault();
  if (e.target.id === "agform") {
    const fd = new FormData(e.target), title = String(fd.get("title") || "").trim(); if (!title) return;
    const rec = { title, date: fd.get("date") || todayStr(), time: fd.get("time") || "", min: Math.max(0, parseInt(fd.get("min"), 10) || 0), notes: String(fd.get("notes") || "").trim() };
    if (ui.agendaEdit) { const x = state.agenda.find(y => y.id === ui.agendaEdit); if (x) Object.assign(x, rec); ui.agendaEdit = null; toast("tarea guardada"); }
    else { state.agenda.push({ id: uid(), done: false, ...rec }); const c = conflictFor(rec); toast(c ? `añadida · ojo: choca con ${c.toLowerCase()}` : "añadida a tu agenda"); }
    save(); render();
  } else if (e.target.id === "cardform") {
    const fd = new FormData(e.target), q = String(fd.get("q") || "").trim(), a = String(fd.get("a") || "").trim(); if (!q || !a) return;
    addCard(q, a, "Tarjeta propia"); save(); toast("tarjeta añadida para hoy"); render();
  }
});
function routeAuto() { (AUTO_ROUTE[route()] || []).forEach(([id, k]) => autoMark(id, k, "entraste en " + route())); }
window.addEventListener("hashchange", () => { if (route() !== "tarjetas") ui.review = null; routeAuto(); render(); });

routeAuto();
render();
initSync();
