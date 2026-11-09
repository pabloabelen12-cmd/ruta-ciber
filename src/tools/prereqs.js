// Genera src/prereqs.js: para cada unidad, lo que ya debe saber (y en qué unidad lo aprendió).
// También informa de lo que una unidad usa sin haberse enseñado antes. Uso: node tools/prereqs.js
const fs = require("fs"), path = require("path");
const dir = path.join(__dirname, "..");
const files = ["content.js", "content2.js", "content3.js", "practice.js", "guides.js",
  ...fs.readdirSync(dir).filter(f => /^guides_p\d\.js$/.test(f)).sort()];
const src = files.map(f => fs.readFileSync(path.join(dir, f), "utf8")).join("\n");
const { LESSONS, P2, P3, P4, PRACTICE, UNIT_GUIDES } = new Function(src + "\nreturn {LESSONS,P2,P3,P4,PRACTICE,UNIT_GUIDES};")();
const all = [...LESSONS, ...P2, ...P3, ...P4];
// [etiqueta visible, regex]
const T = [
  ["la terminal de Linux", /\bterminal\b/], ["ls", /(^|[\s`'(])ls(\s|`|$)/], ["cd", /(^|[\s`'(])cd(\s|`|$)/], ["cat", /(^|[\s`'(])cat(\s|`|$)/],
  ["wget", /\bwget\b/], ["nc (netcat)", /\b(nc|netcat)\b/], ["ssh", /\bssh\b/], ["chmod", /\bchmod\b/], ["find", /(^|[\s`])find(\s|`)/],
  ["grep", /\bgrep\b/], ["sort y uniq", /\b(sort|uniq)\b/], ["strings", /(^|[\s`])strings(\s|`)/], ["Base64", /\bbase64\b/], ["tr", /(^|[\s`])tr(\s|`)/],
  ["xxd", /\bxxd\b/], ["tar y gzip", /\b(tar|gzip|bzip2|gunzip)\b/], ["diff", /\bdiff\b/], ["nmap", /\bnmap\b/], ["openssl", /\bopenssl\b/],
  ["Python", /\bpython\b/], ["SQL", /\bsql\b/], ["Burp Suite", /\bburp\b/], ["Wireshark", /\bwireshark\b/], ["Metasploit", /\b(metasploit|msfconsole)\b/],
  ["sudo", /\bsudo\b/], ["CyberChef", /\bcyberchef\b/], ["F12 (herramientas del navegador)", /\bf12\b/], ["VPN", /\b(vpn|openvpn)\b/],
  ["setuid", /\bsetuid\b/], ["hash", /\bhash(es)?\b/], ["puertos", /\bpuertos?\b/], ["direcciones IP", /\bip\b/], ["DNS", /\bdns\b/], ["HTTP", /\bhttps?\b/],
  ["cookies", /\bcookies?\b/], ["XSS", /\bxss\b/], ["IDOR", /\bidor\b/], ["inyección SQL", /inyecci[oó]n sql|sqli\b/], ["CVSS", /\bcvss\b/],
  ["MITRE ATT&CK", /\bmitre\b/], ["escalada de privilegios", /escalada de privilegios|privesc/], ["máquina virtual", /m[aá]quina virtual|virtualbox/], ["git", /\bgit\b/]
];
const low = s => (s || "").toString().toLowerCase();
const practice = u => (PRACTICE[u.id] || []).map(x => typeof x[0] === "number" ? x[1] : x[2]);
const guideText = u => (UNIT_GUIDES[u.id] || []).flatMap(g => [g.t, ...g.s]);
const guideLearn = u => (UNIT_GUIDES[u.id] || []).map(g => g.learn || "");
const firstTaught = {}, out = {}, issues = [];
const NOT_TEACH = new Set(["s04", "s26", "s27", "s28"]); // tarjetas y repasos: mencionan, no enseñan
all.forEach(u => {
  const teach = NOT_TEACH.has(u.id) ? "" : low([...(u.concept || []), ...((u.cmds || []).map(c => c.join(" "))), ...guideLearn(u)].join("\n"));
  const use = low([...(u.steps || []), ...practice(u), ...guideText(u)].join("\n"));
  const need = [];
  for (const [label, re] of T) {
    const used = re.test(use), taught = re.test(teach);
    if (used && firstTaught[label] && firstTaught[label] !== u.id) need.push([label, firstTaught[label]]);
    else if (used && !firstTaught[label] && !taught) issues.push(`${u.id}: usa «${label}» sin enseñarlo antes`);
    if ((taught || used) && !firstTaught[label]) firstTaught[label] = u.id;
  }
  if (need.length) out[u.id] = need.slice(0, 8);
});
fs.writeFileSync(path.join(dir, "prereqs.js"), "/* Generado por tools/prereqs.js: no editar a mano. */\nconst PREREQS = " + JSON.stringify(out) + ";\n");
console.log(`prereqs: ${Object.keys(out).length} unidades con requisitos · ${issues.length} avisos`);
if (issues.length) console.log(issues.join("\n"));
