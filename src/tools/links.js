// Lista todos los enlaces de la app (unidades, prácticas y guías) agrupados por dominio. Uso: node tools/links.js > links.json
const fs = require("fs"), path = require("path"), dir = path.join(__dirname, "..");
const files = ["content.js", "content2.js", "content3.js", "content5.js", "practice.js", "guides.js",
  ...fs.readdirSync(dir).filter(f => /^guides_p\d\.js$|^p5_.*\.js$/.test(f)).sort()];
const src = files.map(f => fs.readFileSync(path.join(dir, f), "utf8")).join("\n");
const { LESSONS, P2, P3, P4, P5, PRACTICE, UNIT_GUIDES } = new Function(src + "\nreturn {LESSONS,P2,P3,P4,P5,PRACTICE,UNIT_GUIDES};")();
const urls = new Map();
const add = (u, where) => { if (!/^https?:\/\//.test(u)) return; u = u.replace(/[).,;»]+$/, ""); if (!urls.has(u)) urls.set(u, []); urls.get(u).push(where); };
for (const u of [...LESSONS, ...P2, ...P3, ...P4, ...P5]) (u.links || []).forEach(l => add(l[1], u.id));
for (const [id, P] of Object.entries(PRACTICE)) P.forEach(x => typeof x[0] === "string" && add(x[0], id));
const scan = (t, id) => (t.match(/https?:\/\/[^\s`"'<>)]+/g) || []).forEach(u => add(u, id));
for (const [id, gs] of Object.entries(UNIT_GUIDES)) gs.forEach(g => [g.t, ...g.s, g.learn || ""].forEach(t => scan(t, id)));
const byHost = {};
for (const [u, w] of urls) { let h; try { h = new URL(u).origin; } catch (e) { continue; } if (/MACHINE_IP|TARGET|localhost|127\.0\.0\.1|10\.\d+\.|<|IP_/i.test(u)) continue; (byHost[h] = byHost[h] || []).push({ u, w: [...new Set(w)].join(",") }); }
console.log(JSON.stringify(byHost, null, 1));
