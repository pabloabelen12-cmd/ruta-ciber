const fs=require('fs');
let html='';
function makeEnv(store){
  const fakeEl=(main)=>{let h='';return {set innerHTML(v){h=v; if(main) html=v}, get innerHTML(){return h}, hidden:false, textContent:'', setAttribute(){}, scrollIntoView(){}}};
  const els={}, handlers={};
  global.localStorage={getItem:k=>store[k]||null,setItem:(k,v)=>store[k]=v};
  global.document={querySelector:s=>(els[s] ||= fakeEl(s==='#main')), addEventListener:(t,f)=>handlers[t]=f, getElementById:()=>null, createElement:()=>fakeEl(), body:{appendChild(){}}, activeElement:null};
  global.window={claude:undefined, scrollTo(){}, addEventListener(){}};
  global.location={hash:''}; window.location=location;
  global.navigator={}; global.setInterval=()=>0;
  return handlers;
}
const code=fs.readFileSync(__dirname+'/all3.js','utf8');
const out=[];
// ── 1. Migración desde la versión 1 ──
{
  const old={v:1,start:'2026-11-09',updatedAt:5,sessions:{s01:{recall:'xxxxxxxxxxxxxxxxxxxx',steps:[true,true,true,true,true],quiz:{attempts:1,first:3,best:3},notes:{tried:'a',failed:'',worked:'',line:''},done:true,doneAt:'2026-11-07'}},cards:[],reviews:{1:{ganas:4}},decision:[null,null,null,null,null],agenda:[],reviewLog:{},test:[]};
  const store={'rutaciber.v1':JSON.stringify(old)}; makeEnv(store);
  const r=new Function(code+';return {state, phaseOpen, doneIn, activePhase};')();
  out.push('migración: v='+r.state.v+' inicio fase1='+r.state.phases[1].start+' s01 hecha='+r.state.sessions.s01.done+' reviews viejas guardadas='+!!r.state.reviewsOld+' fase2 abierta='+r.phaseOpen(2));
}
// ── 2. Recorrido completo ──
const handlers=makeEnv({});
const api=new Function(code+`;return {get state(){return state}, render, sess, UNIT, ALL, PH, GATES, unitsOf, isLocked, phaseOpen, phasePassed, activePhase, gateStatus, pace, nextUnit, ui, dueCards, procScore, reqItems, TRACKS, P5, routeUnits, curTrack};`)();
const click=(attrs)=>{ const b={dataset:attrs}; b.closest=()=>b; handlers.click({target:{closest:()=>b}, preventDefault(){}}); };
const go=h=>{ location.hash='#'+h; api.render(); };
// todas las pantallas
const routes=['hoy','ruta','horario','agenda','tarjetas','progreso','puerta-1','puerta-2','puerta-3','puerta-4','puerta-5',...api.ALL.map(u=>'u-'+u.id)];
let rare=[];
for(const r of routes){ go(r); if(!html||html.length<300) throw new Error('vacía '+r); const clean=html.replace(/data-[a-z-]+="[^"]*"/g,''); if(/undefined|NaN|\[object|null<|>null/.test(clean)) rare.push(r); }
out.push('pantallas renderizadas: '+routes.length+(rare.length?' · texto raro en '+rare.join(','):' · sin texto raro'));
go('hoy'); out.push('hoy antes de empezar muestra botón empezar: '+/empezar --hoy/.test(html));
click({action:'start-route'}); out.push('inicio fase 1: '+api.state.phases[1].start);
// intento de saltarse: capturar s02 sin s01
click({action:'capture',id:'s02'}); out.push('capturar s02 antes que s01 -> '+api.sess('s02').done);
// fase 2 bloqueada
click({action:'step',id:'p2u01',k:'0'}); out.push('marcar paso en fase 2 bloqueada -> '+!!api.sess('p2u01').steps[0]);
go('u-p2u01'); out.push('unidad de fase 2 muestra ACCESO DENEGADO: '+/ACCESO DENEGADO/.test(html));
// completar una unidad bien
function complete(u, opts={}){
  const s=api.sess(u.id);
  s.recall = opts.noRecall ? '' : 'Recuerdo lo principal de la unidad anterior con detalle';
  u.steps.forEach((_,k)=>{ if(!s.steps[k]) click({action:'step',id:u.id,k:String(k)}); });
  if(u.quiz){ u.quiz.forEach((q,i)=>click({action:'pick',key:u.id,q:String(i),o:String(q.a)})); click({action:'quiz-submit',key:u.id,kind:'quiz'}); }
  if(u.test){ api.state.test[0].solved=true; }
  if(u.decision){ for(let k=0;k<5;k++) click({action:'decide',k:String(k),v: k<4?'1':'0'}); }
  if(!opts.noNotes){ s.notes.tried='Probé varias cosas'; s.notes.worked='Funcionó al final'; }
  if(!opts.noExplain && !s.explained) click({action:'flag',id:u.id,f:'explained'});
  click({action:'capture',id:u.id});
  return s.done;
}
// requisito: sin recuerdo no se captura
{ const u=api.UNIT.s01, s=api.sess('s01'); u.steps.forEach((_,k)=>click({action:'step',id:'s01',k:String(k)})); u.quiz.forEach((q,i)=>click({action:'pick',key:'s01',q:String(i),o:String(q.a)})); click({action:'quiz-submit',key:'s01',kind:'quiz'}); click({action:'capture',id:'s01'}); out.push('s01 sin escribir el recuerdo -> capturada: '+s.done); }
// quiz suspendido no permite capturar
{ const u=api.UNIT.s01, s=api.sess('s01'); s.recall='Un hacker ético necesita permiso escrito'; s.quiz=null; u.quiz.forEach((q,i)=>click({action:'pick',key:'s01',q:String(i),o:String((q.a+1)%q.o.length)})); click({action:'quiz-submit',key:'s01',kind:'quiz'}); click({action:'capture',id:'s01'}); out.push('s01 con quiz suspendido -> capturada: '+s.done+' (nota '+s.quiz.lastScore+'/3)'); click({action:'quiz-retry',key:'s01'}); }
let ok=0; for(const u of api.unitsOf(1)) ok+=complete(u)?1:0;
out.push('fase 1: capturadas '+ok+'/30 · tarjetas '+api.state.cards.length);
let gs=api.gateStatus(1); out.push('puerta 1 ok='+gs.ok+' · '+gs.items.map(i=>(i.ok?'✓':'✗')+i.v).join(' '));
click({action:'pass-gate',n:'1'}); out.push('fase 2 abierta: '+api.phaseOpen(2)+' · inicio fase 2: '+api.state.phases[2].start+' · aviso: '+api.ui.unlocked);
click({action:'unlock-ok'}); out.push('tras el aviso, ruta: '+location.hash);
// fase 2 con calidad baja en algunas
let i=0; for(const u of api.unitsOf(2)){ complete(u, i%2===0?{noNotes:true,noExplain:true}:{}); i++; }
gs=api.gateStatus(2); out.push('puerta 2 sin hitos ni examen ok='+gs.ok+' · '+gs.items.map(i=>(i.ok?'✓':'✗')+i.v).join(' '));
click({action:'pass-gate',n:'2'}); out.push('intentar abrir fase 3 sin cumplir -> '+api.phaseOpen(3));
api.state.phases[2].ms={presec:true,bandit:16,pico:22,script:true,writeup:true};
api.GATES[2].exam.forEach((q,k)=>click({action:'pick',key:'gate2',q:String(k),o:String(k<7?q.a:(q.a+1)%q.o.length)})); click({action:'quiz-submit',key:'gate2',kind:'exam'});
gs=api.gateStatus(2); out.push('examen 7/10 -> puerta ok='+gs.ok+' (examen '+api.state.phases[2].exam.best+'/10)');
click({action:'quiz-retry',key:'gate2'}); api.GATES[2].exam.forEach((q,k)=>click({action:'pick',key:'gate2',q:String(k),o:String(q.a)})); click({action:'quiz-submit',key:'gate2',kind:'exam'});
gs=api.gateStatus(2); out.push('examen 10/10, calidad media '+gs.items[1].v+' -> puerta ok='+gs.ok);
click({action:'pass-gate',n:'2'}); out.push('fase 3 abierta: '+api.phaseOpen(3));
for(const u of api.unitsOf(3)) complete(u);
api.state.phases[3].ms={labs:3,reports:2,cert:true}; api.GATES[3].exam.forEach((q,k)=>click({action:'pick',key:'gate3',q:String(k),o:String(q.a)})); click({action:'quiz-submit',key:'gate3',kind:'exam'});
click({action:'pass-gate',n:'3'}); out.push('fase 4 abierta: '+api.phaseOpen(4));
for(const u of api.unitsOf(4)) complete(u);
api.state.phases[4].ms={tier2:true,ctf:true,portfolio:true,cv:true}; api.GATES[4].exam.forEach((q,k)=>click({action:'pick',key:'gate4',q:String(k),o:String(q.a)})); click({action:'quiz-submit',key:'gate4',kind:'exam'});
click({action:'pass-gate',n:'4'}); out.push('fase 5 abierta: '+api.phaseOpen(5)+' · sin especialidad, unidades: '+api.unitsOf(5).length+' · puerta 5 ok: '+api.gateStatus(5).ok);
go('hoy'); out.push('hoy pide elegir especialidad: '+/Elige tu especialidad/.test(html)); api.ui.rutaPhase=5; go('ruta'); out.push('ruta muestra las '+api.TRACKS.length+' especialidades: '+api.TRACKS.every(t=>html.includes(t.title)));
const trk=api.TRACKS.find(t=>api.P5.some(u=>u.track===t.id));
if (trk) { const other=api.P5.find(u=>u.track!==trk.id);
  click({action:'track-pick',t:trk.id}); out.push('especialidad elegida: '+api.curTrack().id+' · unidades: '+api.unitsOf(5).length+(other?' · unidad de otra especialidad bloqueada: '+api.isLocked(other):''));
  for(const u of api.unitsOf(5)) complete(u);
  api.state.phases[5].ms={project:true,portfolio:true,next:true};
  click({action:'pass-gate',n:'5'}); }
out.push('ruta completa: '+api.phasePassed(5)+' · aviso final: '+api.ui.unlocked+' · flags '+api.routeUnits().filter(u=>api.sess(u.id).done).length+'/'+api.routeUnits().length);
go('hoy'); out.push('hoy muestra ruta completa: '+/Ruta completa/.test(html));
// ritmo
api.state.phases[1].start='2026-10-01'; const p=api.pace(1); out.push('ritmo fase 1 (iniciada hace 5+ semanas, todo hecho): hechos '+p.done+'/'+p.total+' esperados '+p.expected+' atraso '+p.behind);
for(const r of ['progreso','ruta','puerta-1','puerta-4','puerta-5','tarjetas']){ go(r); if(/undefined|NaN/.test(html.replace(/data-[a-z-]+="[^"]*"/g,''))) out.push('texto raro al final en '+r); }
out.push('tamaño del estado guardado: '+(JSON.stringify(api.state).length/1024).toFixed(1)+' KB (límite 256 KB)');
console.log(out.join('\n'));
