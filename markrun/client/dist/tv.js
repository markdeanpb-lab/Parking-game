var ld=Object.defineProperty;var cd=(n,t)=>{for(var e in t)ld(n,e,{get:t[e],enumerable:!0})};function Th({role:n,getToken:t,getKey:e,onWelcome:i,onState:s,onMessage:r,onStatus:o}){let a=null,l=0,h=null,p=!1,g=0,d=null,c=0,u=()=>`${location.protocol==="https:"?"wss":"ws"}://${location.host}/ws`;function _(y){o?.(y)}function m(){if(clearTimeout(h),a&&(a.readyState===0||a.readyState===1))return;_(l?"reconnecting":"connecting");try{a=new WebSocket(u())}catch{f();return}let y=a;y.onopen=()=>{l=0,_("open"),c=Date.now(),S({t:"hello",role:n,token:t?.()||void 0,key:e?.()||void 0}),clearInterval(d),d=setInterval(()=>{if(S({t:"ping",at:Date.now()}),Date.now()-c>25e3&&y.readyState===1)try{y.close()}catch{}},8e3)},y.onmessage=k=>{c=Date.now();let w;try{w=JSON.parse(k.data)}catch{return}if(w.t==="pong"){w.serverNow&&(g=w.serverNow+(Date.now()-w.at)/2-Date.now());return}w.t==="welcome"?i?.(w):w.t==="state"?(w.state?.serverNow&&(g=w.state.serverNow-Date.now()),s?.(w.state)):r?.(w)},y.onclose=()=>{clearInterval(d),y===a&&(_("closed"),p||f())},y.onerror=()=>{try{y.close()}catch{}}}function f(){clearTimeout(h);let y=Math.min(8e3,400*2**l)*(.75+Math.random()*.5);l++,h=setTimeout(m,y)}function S(y){return a&&a.readyState===1?(a.send(JSON.stringify(y)),!0):!1}let x=()=>{document.visibilityState==="visible"&&(!a||a.readyState>1?(l=0,m()):S({t:"ping",at:Date.now()}))};return document.addEventListener("visibilitychange",x),window.addEventListener("online",()=>{l=0,m()}),window.addEventListener("pageshow",x),window.addEventListener("focus",x),m(),{send:S,reconnect(){l=0;try{a?.close()}catch{}m()},close(){p=!0,a?.close()},serverNow:()=>Date.now()+g,get open(){return a?.readyState===1}}}function Ah(){let n=null,t=null,e=null,i=null,s=null,r=null,o=.8,a=!1,l=!0,h=null;function p(){if(n)return n;let M=window.AudioContext||window.webkitAudioContext;if(!M)return null;n=new M,r=n.createDynamicsCompressor(),r.threshold.value=-14,r.ratio.value=4,r.attack.value=.005,r.release.value=.2,t=n.createGain(),t.gain.value=a?0:o,e=n.createGain(),e.gain.value=.9,i=n.createGain(),i.gain.value=.32,e.connect(r),i.connect(r),r.connect(t),t.connect(n.destination),s=n.createBuffer(1,n.sampleRate*2,n.sampleRate);let v=s.getChannelData(0);for(let b=0;b<v.length;b++)v[b]=Math.random()*2-1;return n}function g(){let M=p();return M&&M.state==="suspended"&&M.resume(),!!M}let d=()=>n&&n.state==="running";function c(M,v,b,I,T,E){M.gain.cancelScheduledValues(v),M.gain.setValueAtTime(1e-4,v),M.gain.exponentialRampToValueAtTime(I,v+b),M.gain.setValueAtTime(I,v+b+T),M.gain.exponentialRampToValueAtTime(1e-4,v+b+T+E)}function u(M,v,b,I,{gain:T=.2,a:E=.01,rel:F=.2,dest:U=e,detune:B=0,filter:z=null,pan:W=0}={}){let it=n.createOscillator();it.type=M,it.frequency.setValueAtTime(v,b),it.detune.value=B;let D=n.createGain(),ft=it;if(z){let O=n.createBiquadFilter();O.type=z.type||"lowpass",O.frequency.value=z.freq,O.Q.value=z.q||.7,ft.connect(O),ft=O}ft.connect(D);let Lt=D;if(W&&n.createStereoPanner){let O=n.createStereoPanner();O.pan.value=W,D.connect(O),Lt=O}return Lt.connect(U),c(D,b,E,T,Math.max(0,I-E),F),it.start(b),it.stop(b+I+F+.05),it}function _(M,v,{gain:b=.2,a:I=.01,rel:T=.2,type:E="bandpass",freq:F=1e3,q:U=1,dest:B=e}={}){let z=n.createBufferSource();z.buffer=s,z.loop=!0;let W=n.createBiquadFilter();W.type=E,W.frequency.setValueAtTime(F,M),W.Q.value=U;let it=n.createGain();return z.connect(W),W.connect(it),it.connect(B),c(it,M,I,b,Math.max(0,v-I),T),z.start(M,Math.random()),z.stop(M+v+T+.05),{s:z,f:W,g:it}}let m=M=>440*2**((M-69)/12),f={horn(M){for(let[v,b]of[[233,0],[293.7,6],[349,-5]])u("sawtooth",v*.92,M,1.1,{gain:.13,a:.03,rel:.25,filter:{freq:2200},detune:b}).frequency.exponentialRampToValueAtTime(v,M+.12);u("square",116.5,M,1.1,{gain:.05,a:.03,rel:.25,filter:{freq:800}})},crowd(M,{dur:v=3.5,peak:b=.32}={}){for(let[I,T,E]of[[700,.8,1],[1800,1.2,.7],[3200,1.5,.35]]){let F=_(M,v*.4,{gain:b*E,a:v*.45,rel:v*.55,freq:I,q:T}),U=n.createOscillator();U.frequency.value=5+Math.random()*4;let B=n.createGain();B.gain.value=b*E*.35,U.connect(B),B.connect(F.g.gain),U.start(M),U.stop(M+v+.2)}for(let I=0;I<4;I++){let T=M+.4+Math.random()*v*.5;u("triangle",500+Math.random()*300,T,.35,{gain:.025,a:.08,rel:.25,filter:{freq:1600},pan:Math.random()*1.6-.8}).frequency.exponentialRampToValueAtTime(800+Math.random()*400,T+.3)}},whoosh(M){let v=_(M,.45,{gain:.35,a:.12,rel:.25,freq:400,q:2.5});v.f.frequency.exponentialRampToValueAtTime(3500,M+.3),v.f.frequency.exponentialRampToValueAtTime(700,M+.7)},bell(M){for(let v of[M,M+.42])[[1,.22,1.6],[2.76,.09,.9],[5.4,.05,.5],[8.93,.03,.3]].forEach(([b,I,T])=>u("sine",830*b,v,.01,{gain:I,a:.003,rel:T}))},fanfare(M){let v=[[67,0,.14],[72,.15,.14],[76,.3,.14],[79,.45,.32],[76,.8,.14],[79,.95,.9]];for(let[b,I,T]of v){for(let E of[-7,7])u("sawtooth",m(b),M+I,T,{gain:.07,a:.02,rel:.18,filter:{freq:2600},detune:E});u("square",m(b-12),M+I,T,{gain:.03,a:.02,rel:.15,filter:{freq:1200}})}for(let b of[60,64,67,72])u("triangle",m(b),M+.95,.9,{gain:.06,a:.03,rel:.6});f.cymbal(M+.95,.12)},cymbal(M,v=.15){_(M,.05,{gain:v,a:.002,rel:1.4,type:"highpass",freq:6e3,q:.5})},kaching(M){_(M,.03,{gain:.3,a:.002,rel:.05,type:"highpass",freq:3e3}),_(M+.05,.02,{gain:.25,a:.002,rel:.06,type:"bandpass",freq:1800,q:3});for(let[v,b]of[[2093,.14],[2637,.1],[3136,.08],[4186,.05]])u("sine",v,M+.12,.02,{gain:b,a:.003,rel:.9});for(let v=0;v<6;v++)u("sine",3e3+Math.random()*2e3,M+.2+v*.05,.01,{gain:.03,a:.002,rel:.12})},sadtrombone(M){let v=[[55,0,.42],[54,.48,.42],[53,.96,.42],[52,1.44,1.3]];for(let[b,I,T]of v){let E=u("sawtooth",m(b),M+I,T,{gain:.11,a:.04,rel:.2,filter:{freq:1100,q:2}});if(I>1){let F=n.createOscillator();F.frequency.value=6;let U=n.createGain();U.gain.value=6,F.connect(U),U.connect(E.frequency),F.start(M+I),F.stop(M+I+T+.3),E.frequency.setValueAtTime(m(b),M+I),E.frequency.linearRampToValueAtTime(m(b-1),M+I+T)}}},drumroll(M,{dur:v=2.2}={}){let b=Math.floor(v*16);for(let I=0;I<b;I++)_(M+I/16,.02,{gain:.04+.16*(I/b),a:.002,rel:.06,freq:1800,q:.8});f.cymbal(M+v,.2),u("sine",70,M+v,.05,{gain:.5,a:.003,rel:.4})},sting(M){for(let v of[48,55,60,63])for(let b of[-8,8])u("sawtooth",m(v),M,.16,{gain:.05,a:.01,rel:.5,filter:{freq:1800},detune:b});f.cymbal(M,.1)},pop(M){u("sine",520,M,.02,{gain:.18,a:.003,rel:.12}).frequency.exponentialRampToValueAtTime(1100,M+.08)},tick(M){u("square",1600,M,.005,{gain:.04,a:.001,rel:.03,filter:{freq:3e3}})},lock(M){u("sine",140,M,.04,{gain:.4,a:.002,rel:.2}),_(M,.02,{gain:.2,a:.002,rel:.05,freq:2500,q:1}),u("triangle",660,M+.06,.05,{gain:.08,a:.005,rel:.2}),u("triangle",990,M+.14,.08,{gain:.08,a:.005,rel:.3})},join(M){[72,76,79,84].forEach((v,b)=>u("triangle",m(v),M+b*.07,.06,{gain:.1,a:.005,rel:.2}))},beep(M){u("square",880,M,.08,{gain:.06,a:.005,rel:.05,filter:{freq:2500}})},go(M){u("square",1320,M,.3,{gain:.07,a:.005,rel:.1,filter:{freq:3e3}})},stamp(M){u("sine",90,M,.05,{gain:.5,a:.002,rel:.25}),_(M,.04,{gain:.25,a:.002,rel:.1,type:"lowpass",freq:1200})},reveal(M){[64,67,71,74].forEach((v,b)=>u("triangle",m(v+12),M+b*.05,.05,{gain:.06,a:.004,rel:.25}))},boo(M){u("sawtooth",160,M,.7,{gain:.06,a:.1,rel:.3,filter:{freq:600}}).frequency.linearRampToValueAtTime(110,M+.8)}};function S(M,v){if(!d()||a)return;let b=f[M];if(b)try{b(n.currentTime+.02,v)}catch(I){console.warn("sfx",M,I)}}let x={lobby:{bpm:92,chords:[[60,64,67,71],[57,60,64,67],[53,57,60,64],[55,59,62,67]],arp:[0,2,1,3,2,1,3,2],swing:.08,shaker:!0,block:!1},betting:{bpm:108,chords:[[57,60,64],[53,57,60],[60,64,67],[55,59,62]],arp:[0,1,2,1,0,2,1,2],swing:.05,shaker:!0,block:!0},results:{bpm:100,chords:[[60,64,67],[65,69,72],[55,59,62],[60,64,67]],arp:[0,1,2,3,2,1,0,1],swing:.06,shaker:!1,block:!1}};function y(){if(!h)return;let M=x[h.kind],v=60/M.bpm/2;for(;h.nextT<n.currentTime+.35;){let b=h.step,I=Math.floor(b/8)%M.chords.length,T=M.chords[I],E=h.nextT+(b%2?M.swing*v:0),F=b%8;if(F===0){for(let B of T.slice(0,3))for(let z of[-6,6])u("triangle",m(B),E,v*7.5,{gain:.022,a:.35,rel:.6,dest:i,detune:z,filter:{freq:1300}});u("sine",m(T[0]-24),E,v*2.5,{gain:.14,a:.01,rel:.25,dest:i})}F===4&&u("sine",m(T[0]-24+7),E,v*2,{gain:.1,a:.01,rel:.25,dest:i});let U=T[M.arp[F]%T.length]+12;b%16<15&&u("sine",m(U),E,.02,{gain:.045,a:.004,rel:v*1.6,dest:i}),u("triangle",m(U+12),E,.01,{gain:.01,a:.002,rel:.15,dest:i}),M.shaker&&b%2===1&&_(E,.01,{gain:.018,a:.003,rel:.05,type:"highpass",freq:7e3,dest:i}),M.block&&(F===2||F===6)&&u("sine",1250,E,.004,{gain:.04,a:.001,rel:.05,dest:i}),h.step++,h.nextT+=v}}function k(M="lobby"){if(!p()||h?.kind===M)return;if(C(.6),!l){h=null,w=M;return}w=M;let v=n.createGain();v.gain.value=1e-4,v.connect(r);let b=i;i=v,v.gain.exponentialRampToValueAtTime(.32,n.currentTime+1.5),h={kind:M,nextT:n.currentTime+.1,step:0,bus:v},h.timer=setInterval(()=>{d()&&y()},90)}let w=null;function C(M=.8){if(!h)return;clearInterval(h.timer);let v=h.bus;n&&v&&(v.gain.cancelScheduledValues(n.currentTime),v.gain.setValueAtTime(v.gain.value,n.currentTime),v.gain.exponentialRampToValueAtTime(1e-4,n.currentTime+M),setTimeout(()=>v.disconnect(),M*1e3+500)),h=null}function R(M){!h||!n||h.bus.gain.setTargetAtTime(M?.14:.32,n.currentTime,.25)}return{unlock:g,play:S,ready:d,get context(){return n},setVolume(M){o=Math.max(0,Math.min(1,M)),t&&t.gain.setTargetAtTime(a?0:o,n.currentTime,.05)},setMuted(M){a=!!M,t&&t.gain.setTargetAtTime(a?0:o,n.currentTime,.05)},get muted(){return a},setMusicEnabled(M){if(l=!!M,l)w&&!h&&k(w);else{let v=h?.kind||w;C(),w=v}},startMusic:k,stopMusic:C,duck:R,get musicKind(){return h?.kind||null}}}var xe=(n,t=document)=>t.querySelector(n),hi=(n,t=document)=>[...t.querySelectorAll(n)];function $t(n){return String(n??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}function Ke(n){let t=document.createElement("template");return t.innerHTML=n.trim(),t.content.firstElementChild}var Rh="pp";function mn(n){let t=Math.round(Number(n)||0);return`${t<0?"\u2212":""}${Math.abs(t).toLocaleString("en-GB")}${Rh}`}function ji(n){let t=Math.round(Number(n)||0);return`${t>0?"+":t<0?"\u2212":"\xB1"}${Math.abs(t).toLocaleString("en-GB")}${Rh}`}function Ci(n){let t=Math.abs(Math.round(Number(n)||0));return`${t.toLocaleString("en-GB")} Parkpound${t===1?"":"s"}`}var Ri=n=>n?.shortName||n?.nickname||"";function hd(n){let t=n%100;return t>=11&&t<=13?"th":{1:"st",2:"nd",3:"rd"}[n%10]||"th"}function Qi(n,t=""){return`<span class="ordinal p${n} ${t}">${n}<sup>${hd(n)}</sup></span>`}function gn(n,t=64,e=""){let i=n||{emoji:"\u{1F642}",colour:"#2f8cff"};return`<span class="avatar ${e}" style="width:${t}px;height:${t}px;font-size:${Math.round(t*.58)}px;background:${$t(i.colour)}">${$t(i.emoji)}</span>`}function Ch(n){return n=Math.round(Number(n)||0),`${Math.floor(n/60)}:${String(n%60).padStart(2,"0")}`}function Wa(n,t,e,i=1200,s=o=>String(Math.round(o)),r){let o=performance.now(),a,l=Math.round(t),h=p=>{let g=Math.min(1,(p-o)/i),d=1-(1-g)**3,c=t+(e-t)*d;n.textContent=s(c);let u=Math.round(c);r&&u!==l&&(l=u,r(u)),g<1&&(a=requestAnimationFrame(h))};return a=requestAnimationFrame(h),()=>cancelAnimationFrame(a)}function tn(n,t){return n?.runners?.find(e=>e.id===t)}function lo(n,t){if(!n||!t)return"";if(t.type==="win")return`${tn(n,t.runnerId)?.nickname||t.runnerId} to WIN`;if(t.type==="inplay")return`${tn(n,t.runnerId)?.nickname||t.runnerId} to WIN (halfway)`;if(t.type==="prop")return`${n.props?.find(o=>o.id===t.propId)?.text||"Side bet"} \u2014 ${String(t.pick).toUpperCase()}`;let e=n.matchups?.find(r=>r.id===t.matchupId);if(!e)return"Head-to-head";let i=Ri(tn(n,t.pick))||t.pick,s=Ri(tn(n,t.pick===e.a?e.b:e.a));return`${i} to beat ${s}`}function gr(n,t){if(t.type==="win")return tn(n,t.runnerId)?.odds?.win??0;if(t.type==="inplay")return Number(t.odds)||0;if(t.type==="prop"){let i=n?.props?.find(s=>s.id===t.propId);return(t.pick==="yes"?i?.odds?.yes:i?.odds?.no)??0}let e=n?.matchups?.find(i=>i.id===t.matchupId);return e?t.pick===e.a?e.odds.a:e.odds.b:0}function yr(n=document.body,{count:t=120,colours:e=["#ffd23f","#ff4d5a","#2ec27e","#2f8cff","#ff6fb5","#7b4dff"],duration:i=3200,zIndex:s=9e3,contained:r=!1}={}){let o=document.createElement("div");o.style.cssText=`position:${r?"absolute":"fixed"};inset:0;pointer-events:none;overflow:hidden;z-index:${s}`;for(let a=0;a<t;a++){let l=document.createElement("i"),h=8+Math.random()*12,p=Math.random()*100,g=(Math.random()-.5)*30,d=Math.random()*720-360,c=Math.random()*400,u=i*(.6+Math.random()*.5);l.style.cssText=`position:absolute;left:${p}%;top:-30px;width:${h}px;height:${h*(.4+Math.random()*.6)}px;background:${e[a%e.length]};border:2px solid #14183c;border-radius:${Math.random()<.3?"50%":"2px"}`,l.animate([{transform:"translate(0,0) rotate(0deg)",opacity:1},{transform:`translate(${g}vw, 110vh) rotate(${d}deg)`,opacity:1}],{duration:u,delay:c,easing:"cubic-bezier(.2,.6,.4,1)",fill:"forwards"}),o.appendChild(l)}n.appendChild(o),setTimeout(()=>o.remove(),i*1.3+500)}function co(n){return n?.type==="prop"?null:n?.runnerId||n?.pick||null}function Ih(n){return{win:"WIN",h2h:"HEAD-TO-HEAD",prop:"SIDE BET",inplay:"HALFWAY"}[n?.type]||""}function Xa(n,t){if(!t)return"";if(t.type==="win")return tn(n,t.runnerId)?.odds?.display||`\xD7${gr(n,t)}`;if(t.type==="inplay")return t.display||`\xD7${Number(t.lockedOdds??t.odds)||""}`;if(t.type==="prop"){let i=n?.props?.find(s=>s.id===t.propId);return(t.pick==="yes"?i?.odds?.displayYes:i?.odds?.displayNo)||`\xD7${gr(n,t)}`}let e=n?.matchups?.find(i=>i.id===t.matchupId);return(t.pick===e?.a?e?.odds?.displayA:e?.odds?.displayB)||`\xD7${gr(n,t)}`}function Ph(n){let t=Math.round(Number(n?.returned)||0),e=Math.round(Number(n?.stake)||0);return n?.void||n?.push||!n?.won&&t===e&&e>0?{kind:"push",net:0,text:"refunded \xB10"}:n?.won?{kind:"won",net:t-e,text:ji(t-e)}:{kind:"lost",net:-e,text:ji(-e)}}function ho(n,t=10){if(!n)return{headline:"",kicker:""};if(n.headline)return{headline:n.headline,kicker:n.kicker||""};let e=String(n.text||"").trim(),i="",s=e.indexOf('"');s>0&&(i=e.slice(s).replace(/"/g,"").trim(),e=e.slice(0,s).trim());let r=e.match(/^(.+?[.!?])(\s+|$)([\s\S]*)$/),o=r?r[1]:e,a=r?r[3].trim():"",l=o.split(/\s+/);l.length>t&&(a=`\u2026${l.slice(t-1).join(" ")}${a?` ${a}`:""}`,o=`${l.slice(0,t-1).join(" ")}\u2026`);let h=[a,i?`\u201C${i}\u201D`:""].filter(Boolean).join(" ");return{headline:o,kicker:h}}var ne="#14183c";function ud(n){let t=2166136261;for(let e of String(n))t^=e.charCodeAt(0),t=Math.imul(t,16777619);return t>>>0}var Lh=["#2b1a10","#5a3418","#8a5a2b","#d8a24a","#1b1b1b","#b8432a","#9aa0a8"];function vs(n,t){let e=parseInt(String(n||"#888888").replace("#","").padEnd(6,"8").slice(0,6),16),i=e>>16&255,s=e>>8&255,r=e&255,o=t<0?0:255,a=Math.abs(t);return i=Math.round((o-i)*a+i),s=Math.round((o-s)*a+s),r=Math.round((o-r)*a+r),`#${(1<<24|i<<16|s<<8|r).toString(16).slice(1)}`}function kh(n,{size:t=120,idSuffix:e=""}={}){let i=n?.look||{},s=n?.colour?.primary||"#ff4d5a",r=n?.colour?.secondary||"#ffffff",o=i.skin||"#f1c6a5",a=ud(n?.id+(n?.nickname||"")),l=i.hairColour||i.hairColor||Lh[a%Lh.length],h=i.build||"compact",p={stocky:50,tall:40,lanky:34,compact:42}[h]??42,g={tall:8,lanky:10,stocky:2,compact:4}[h]??4,d={compact:31,stocky:30,lanky:28,tall:29}[h]??30,c=60,u=50-g/2,_=n?.lane??"",m=`pc${a.toString(36)}${e}`,f=[];f.push(`<defs><clipPath id="${m}"><circle cx="60" cy="60" r="56"/></clipPath></defs>`),f.push(`<circle cx="60" cy="60" r="56" fill="${vs(s,.55)}"/>`),f.push(`<g clip-path="url(#${m})">`),f.push(`<path d="M0 92 L120 70 L120 120 L0 120Z" fill="${vs(s,.35)}" opacity=".6"/>`);let S=u+d+g-4;f.push(`<path d="M${c-p} 124 Q${c-p} ${S+6} ${c-14} ${S} L${c+14} ${S} Q${c+p} ${S+6} ${c+p} 124Z" fill="${s}" stroke="${ne}" stroke-width="5" stroke-linejoin="round"/>`),f.push(`<path d="M${c-18} ${S+1} L${c-2} ${S+1} L${c+26} 124 L${c+8} 124Z" fill="${r}" stroke="${ne}" stroke-width="3" stroke-linejoin="round"/>`),f.push(`<rect x="${c-30}" y="${S+14}" width="22" height="17" rx="3" fill="#fff" stroke="${ne}" stroke-width="3" transform="rotate(-6 ${c-19} ${S+22})"/>`),f.push(`<text x="${c-19}" y="${S+28}" font-family="Lilita One, Arial Black, sans-serif" font-size="14" text-anchor="middle" fill="${ne}" transform="rotate(-6 ${c-19} ${S+22})">${_}</text>`),f.push(`<rect x="${c-9}" y="${u+d-8}" width="18" height="${g+12}" fill="${o}" stroke="${ne}" stroke-width="5"/>`),i.accessory==="medal"&&(f.push(`<path d="M${c-12} ${S} L${c} ${S+22} L${c+12} ${S}" fill="none" stroke="${r}" stroke-width="6"/>`),f.push(`<circle cx="${c}" cy="${S+26}" r="9" fill="#ffcf3a" stroke="${ne}" stroke-width="4"/>`));let x=i.hair||"short";["long","ponytail","bob"].includes(x)&&f.push(`<path d="M${c-d-4} ${u} Q${c-d-6} ${u+d+14} ${c-d+10} ${u+d+10} L${c+d-10} ${u+d+10} Q${c+d+6} ${u+d+14} ${c+d+4} ${u}Z" fill="${l}" stroke="${ne}" stroke-width="5" stroke-linejoin="round"/>`),x==="ponytail"&&f.push(`<ellipse cx="${c+d+6}" cy="${u-6}" rx="9" ry="16" fill="${l}" stroke="${ne}" stroke-width="5" transform="rotate(25 ${c+d+6} ${u-6})"/>`),f.push(`<circle cx="${c-d+1}" cy="${u+4}" r="7" fill="${o}" stroke="${ne}" stroke-width="5"/>`),f.push(`<circle cx="${c+d-1}" cy="${u+4}" r="7" fill="${o}" stroke="${ne}" stroke-width="5"/>`),f.push(`<ellipse cx="${c}" cy="${u}" rx="${d}" ry="${d+2}" fill="${o}" stroke="${ne}" stroke-width="5"/>`),f.push(`<ellipse cx="${c-16}" cy="${u+11}" rx="6" ry="4" fill="#ff8f8f" opacity=".45"/><ellipse cx="${c+16}" cy="${u+11}" rx="6" ry="4" fill="#ff8f8f" opacity=".45"/>`);let y=u-d-2,k={short:`<path d="M${c-d+2} ${u-6} Q${c-d} ${y-4} ${c} ${y-2} Q${c+d} ${y-4} ${c+d-2} ${u-6} Q${c+8} ${u-18} ${c-d+2} ${u-6}Z"/>`,buzz:`<path d="M${c-d+3} ${u-8} Q${c} ${y-6} ${c+d-3} ${u-8} Q${c} ${u-20} ${c-d+3} ${u-8}Z"/>`,curly:`<path d="M${c-d} ${u-2} q-6 -12 4 -18 q0 -12 14 -12 q6 -10 18 -4 q12 -4 16 8 q12 4 8 18 q-14 -8 -30 -6 q-16 0 -30 14z"/>`,afro:`<circle cx="${c}" cy="${u-14}" r="${d+8}"/>`,mohawk:`<path d="M${c-6} ${u-14} L${c-8} ${y-16} L${c+8} ${y-16} L${c+6} ${u-14}Z"/>`,quiff:`<path d="M${c-d+2} ${u-6} Q${c-d} ${y} ${c-4} ${y-2} Q${c+20} ${y-18} ${c+d+4} ${y+2} Q${c+d} ${u-8} ${c+d-2} ${u-6} Q${c+8} ${u-18} ${c-d+2} ${u-6}Z"/>`,bun:`<g><circle cx="${c}" cy="${y-6}" r="10"/><path d="M${c-d+2} ${u-6} Q${c-d} ${y-2} ${c} ${y} Q${c+d} ${y-2} ${c+d-2} ${u-6} Q${c} ${u-16} ${c-d+2} ${u-6}Z"/></g>`,long:`<path d="M${c-d+1} ${u+2} Q${c-d} ${y-4} ${c} ${y-2} Q${c+d} ${y-4} ${c+d-1} ${u+2} Q${c+10} ${u-16} ${c-2} ${u-12} Q${c-14} ${u-16} ${c-d+1} ${u+2}Z"/>`,bald:""};k.ponytail=k.long,k.bob=k.long,k.spiky=`<path d="M${c-d+2} ${u-6} L${c-d+2} ${y+2} L${c-14} ${y-12} L${c-8} ${y-2} L${c} ${y-16} L${c+6} ${y-2} L${c+15} ${y-12} L${c+d-2} ${y+2} L${c+d-2} ${u-6} Q${c} ${u-18} ${c-d+2} ${u-6}Z"/>`,k.mullet=`<g><path d="M${c+d-6} ${u} Q${c+d+10} ${u+22} ${c+d-2} ${u+34} L${c+d-14} ${u+20}Z"/><path d="M${c-d+6} ${u} Q${c-d-10} ${u+22} ${c-d+2} ${u+34} L${c-d+14} ${u+20}Z"/>${k.short}</g>`,k.swept=`<path d="M${c-d+2} ${u-4} Q${c-d-4} ${y-6} ${c+6} ${y-6} Q${c+d+8} ${y} ${c+d-1} ${u-2} Q${c+4} ${u-22} ${c-d+2} ${u-4}Z"/>`;let w=k[x]??k.short;w&&f.push(`<g fill="${l}" stroke="${ne}" stroke-width="5" stroke-linejoin="round">${w}</g>`);let C=i.face||"grin",R=u+1,M=(F,U)=>U?`<path d="M${F-5} ${R} Q${F} ${R+4} ${F+5} ${R}" fill="none" stroke="${ne}" stroke-width="3.5" stroke-linecap="round"/>`:`<ellipse cx="${F}" cy="${R}" rx="4.2" ry="5.6" fill="${ne}"/><circle cx="${F+1.4}" cy="${R-2}" r="1.5" fill="#fff"/>`,v="",b="",I=M(c-11)+M(c+11);switch(C){case"determined":case"focused":case"fierce":v=`<path d="M${c-18} ${R-12} L${c-5} ${R-7} M${c+18} ${R-12} L${c+5} ${R-7}" stroke="${ne}" stroke-width="4" stroke-linecap="round"/>`,b=`<path d="M${c-9} ${u+17} L${c+9} ${u+15}" stroke="${ne}" stroke-width="4" stroke-linecap="round"/>`;break;case"smug":case"cheeky":I=`<path d="M${c-16} ${R} L${c-6} ${R}" stroke="${ne}" stroke-width="4" stroke-linecap="round"/>`+M(c+11),v=`<path d="M${c+5} ${R-10} Q${c+11} ${R-15} ${c+18} ${R-10}" fill="none" stroke="${ne}" stroke-width="3.5" stroke-linecap="round"/>`,b=`<path d="M${c-8} ${u+15} Q${c+4} ${u+19} ${c+11} ${u+11}" fill="none" stroke="${ne}" stroke-width="4" stroke-linecap="round"/>`;break;case"worried":case"nervous":case"anxious":v=`<path d="M${c-17} ${R-8} L${c-6} ${R-13} M${c+17} ${R-8} L${c+6} ${R-13}" stroke="${ne}" stroke-width="3.5" stroke-linecap="round"/>`,b=`<path d="M${c-10} ${u+17} q5 -5 10 0 q5 5 10 0" fill="none" stroke="${ne}" stroke-width="3.5" stroke-linecap="round"/>`;break;case"sleepy":case"tired":case"dozy":I=M(c-11,!0)+M(c+11,!0),b=`<ellipse cx="${c+2}" cy="${u+17}" rx="5" ry="4" fill="${ne}"/>`;break;case"wink":I=M(c-11,!0)+M(c+11),b=`<path d="M${c-11} ${u+12} Q${c} ${u+24} ${c+11} ${u+12}Z" fill="#fff" stroke="${ne}" stroke-width="3.5" stroke-linejoin="round"/>`;break;case"gritted":v=`<path d="M${c-18} ${R-11} L${c-5} ${R-7} M${c+18} ${R-11} L${c+5} ${R-7}" stroke="${ne}" stroke-width="4" stroke-linecap="round"/>`,b=`<rect x="${c-12}" y="${u+11}" width="24" height="10" rx="3" fill="#fff" stroke="${ne}" stroke-width="3.5"/><path d="M${c-4} ${u+11} v10 M${c+4} ${u+11} v10 M${c-12} ${u+16} h24" stroke="${ne}" stroke-width="2"/>`;break;case"tongue-out":I=M(c-11,!0)+M(c+11),b=`<path d="M${c-11} ${u+12} Q${c} ${u+20} ${c+11} ${u+12}" fill="none" stroke="${ne}" stroke-width="3.5" stroke-linecap="round"/><path d="M${c-2} ${u+15} q4 14 10 0z" fill="#ff6b7a" stroke="${ne}" stroke-width="3"/>`;break;case"wide-eyed":I=`<circle cx="${c-11}" cy="${R}" r="7.5" fill="#fff" stroke="${ne}" stroke-width="3"/><circle cx="${c-11}" cy="${R}" r="3.2" fill="${ne}"/><circle cx="${c+11}" cy="${R}" r="7.5" fill="#fff" stroke="${ne}" stroke-width="3"/><circle cx="${c+11}" cy="${R}" r="3.2" fill="${ne}"/>`,b=`<ellipse cx="${c}" cy="${u+17}" rx="5" ry="6" fill="${ne}"/>`;break;case"shocked":case"surprised":b=`<ellipse cx="${c}" cy="${u+17}" rx="6" ry="8" fill="${ne}"/>`,v=`<path d="M${c-17} ${R-13} Q${c-11} ${R-17} ${c-5} ${R-13} M${c+17} ${R-13} Q${c+11} ${R-17} ${c+5} ${R-13}" fill="none" stroke="${ne}" stroke-width="3.5" stroke-linecap="round"/>`;break;default:b=`<path d="M${c-13} ${u+11} Q${c} ${u+27} ${c+13} ${u+11}Z" fill="#fff" stroke="${ne}" stroke-width="3.5" stroke-linejoin="round"/><path d="M${c-6} ${u+19} Q${c} ${u+23} ${c+6} ${u+19}" fill="#ff6b7a"/>`}f.push(I,v,b),f.push(`<path d="M${c-2} ${u+4} Q${c+3} ${u+8} ${c-1} ${u+10}" fill="none" stroke="${vs(o,-.35)}" stroke-width="3" stroke-linecap="round"/>`);let T=i.accessory;T==="sunglasses"||T==="shades"?f.push(`<g stroke="${ne}" stroke-width="3.5"><rect x="${c-21}" y="${R-7}" width="17" height="12" rx="4" fill="${ne}"/><rect x="${c+4}" y="${R-7}" width="17" height="12" rx="4" fill="${ne}"/><path d="M${c-4} ${R-3} L${c+4} ${R-3}"/></g><path d="M${c-18} ${R-4} l5 0 M${c+7} ${R-4} l5 0" stroke="#fff" stroke-width="2.5" stroke-linecap="round"/>`):T==="glasses"||T==="specs"?f.push(`<g stroke="${ne}" stroke-width="3.5" fill="rgba(255,255,255,.25)"><circle cx="${c-11}" cy="${R}" r="8"/><circle cx="${c+11}" cy="${R}" r="8"/><path d="M${c-3} ${R} L${c+3} ${R}"/></g>`):T==="moustache"||T==="mustache"||T==="tache"?f.push(`<path d="M${c} ${u+12} q-8 -6 -16 0 q6 6 16 0 q8 -6 16 0 q-6 6 -16 0z" fill="${l}" stroke="${ne}" stroke-width="3" stroke-linejoin="round"/>`):T==="headphones"||T==="earbuds"?f.push(`<path d="M${c-d-2} ${u+2} Q${c} ${y-22} ${c+d+2} ${u+2}" fill="none" stroke="${ne}" stroke-width="7"/><rect x="${c-d-8}" y="${u-6}" width="12" height="20" rx="5" fill="${r}" stroke="${ne}" stroke-width="4"/><rect x="${c+d-4}" y="${u-6}" width="12" height="20" rx="5" fill="${r}" stroke="${ne}" stroke-width="4"/>`):T==="beard"?f.push(`<path d="M${c-d+4} ${u+4} Q${c-d+6} ${u+d+6} ${c} ${u+d+8} Q${c+d-6} ${u+d+6} ${c+d-4} ${u+4} Q${c+14} ${u+18} ${c} ${u+22} Q${c-14} ${u+18} ${c-d+4} ${u+4}Z" fill="${l}" stroke="${ne}" stroke-width="3.5" stroke-linejoin="round"/>`):T==="scarf"?f.push(`<path d="M${c-20} ${S-4} Q${c} ${S+8} ${c+20} ${S-4} L${c+22} ${S+6} Q${c} ${S+18} ${c-22} ${S+6}Z" fill="${r}" stroke="${ne}" stroke-width="3.5"/><rect x="${c+8}" y="${S+6}" width="9" height="22" rx="2" fill="${r}" stroke="${ne}" stroke-width="3"/>`):T==="cape"?f.push(`<path d="M${c-22} ${S} L${c-46} 124 M${c+22} ${S} L${c+46} 124" stroke="${r}" stroke-width="8" stroke-linecap="round"/>`):T==="wristbands"||T==="bumbag"?f.push(`<rect x="${c-26}" y="${S+30}" width="${T==="bumbag"?30:14}" height="${T==="bumbag"?14:10}" rx="5" fill="${r}" stroke="${ne}" stroke-width="3.5"/>`):T==="whistle"&&f.push(`<path d="M${c-10} ${S} Q${c} ${S+18} ${c+10} ${S}" fill="none" stroke="${r}" stroke-width="3"/><rect x="${c-6}" y="${S+12}" width="14" height="8" rx="3" fill="#cfd8e8" stroke="${ne}" stroke-width="3"/>`);let E=i.hat;return E==="backwards-cap"?(f.push(`<path d="M${c-d+1} ${u-8} Q${c-d+2} ${y-10} ${c} ${y-10} Q${c+d-2} ${y-10} ${c+d-1} ${u-8}Z" fill="${s}" stroke="${ne}" stroke-width="5" stroke-linejoin="round"/>`),f.push(`<path d="M${c-d+4} ${u-12} Q${c-d-14} ${u-14} ${c-d-18} ${u-4} L${c-d+2} ${u-4}Z" fill="${vs(s,-.2)}" stroke="${ne}" stroke-width="5" stroke-linejoin="round"/>`)):E==="cap"||E==="baseball cap"||E==="trucker"?(f.push(`<path d="M${c-d+1} ${u-8} Q${c-d+2} ${y-10} ${c} ${y-10} Q${c+d-2} ${y-10} ${c+d-1} ${u-8}Z" fill="${s}" stroke="${ne}" stroke-width="5" stroke-linejoin="round"/>`),f.push(`<path d="M${c-6} ${u-10} Q${c+24} ${u-18} ${c+d+16} ${u-6} L${c+d-2} ${u-4}Z" fill="${vs(s,-.2)}" stroke="${ne}" stroke-width="5" stroke-linejoin="round"/>`),f.push(`<circle cx="${c}" cy="${y-10}" r="3.5" fill="${r}" stroke="${ne}" stroke-width="2.5"/>`)):E==="beanie"||E==="bobble"||E==="bobble hat"||E==="woolly hat"?(f.push(`<path d="M${c-d} ${u-6} Q${c-d} ${y-14} ${c} ${y-14} Q${c+d} ${y-14} ${c+d} ${u-6}Z" fill="${r}" stroke="${ne}" stroke-width="5" stroke-linejoin="round"/>`),f.push(`<rect x="${c-d-2}" y="${u-12}" width="${d*2+4}" height="11" rx="5" fill="${s}" stroke="${ne}" stroke-width="5"/>`),f.push(`<circle cx="${c}" cy="${y-16}" r="8" fill="${s}" stroke="${ne}" stroke-width="5"/>`)):E==="headband"||E==="sweatband"?(f.push(`<path d="M${c-d} ${u-13} Q${c} ${u-22} ${c+d} ${u-13} L${c+d+1} ${u-4} Q${c} ${u-13} ${c-d-1} ${u-4}Z" fill="${r}" stroke="${ne}" stroke-width="4" stroke-linejoin="round"/>`),f.push(`<path d="M${c+d} ${u-9} l12 -4 l-2 10z" fill="${r}" stroke="${ne}" stroke-width="3.5" stroke-linejoin="round"/>`)):E==="visor"?f.push(`<path d="M${c-d} ${u-12} Q${c} ${u-20} ${c+d} ${u-12} L${c+d} ${u-5} Q${c} ${u-12} ${c-d} ${u-5}Z" fill="${s}" stroke="${ne}" stroke-width="4"/><path d="M${c-18} ${u-10} Q${c+4} ${u-2} ${c+30} ${u-10} L${c+20} ${u-15}Z" fill="${vs(s,-.2)}" stroke="${ne}" stroke-width="4" stroke-linejoin="round"/>`):E==="bucket"||E==="bucket hat"||E==="sun hat"?f.push(`<path d="M${c-d-12} ${u-6} L${c-d+4} ${y-8} Q${c} ${y-16} ${c+d-4} ${y-8} L${c+d+12} ${u-6} Q${c} ${u-14} ${c-d-12} ${u-6}Z" fill="${r}" stroke="${ne}" stroke-width="5" stroke-linejoin="round"/>`):E==="party"||E==="party hat"?f.push(`<path d="M${c-14} ${y+4} L${c+4} ${y-30} L${c+16} ${y+2}Z" fill="${s}" stroke="${ne}" stroke-width="5" stroke-linejoin="round"/><circle cx="${c+4}" cy="${y-32}" r="5" fill="${r}" stroke="${ne}" stroke-width="3"/>`):E==="tophat"||E==="top hat"?f.push(`<rect x="${c-18}" y="${y-30}" width="36" height="30" rx="3" fill="${ne}"/><rect x="${c-18}" y="${y-10}" width="36" height="7" fill="${s}"/><rect x="${c-30}" y="${y-2}" width="60" height="8" rx="4" fill="${ne}"/>`):E==="crown"?f.push(`<path d="M${c-20} ${y+2} L${c-22} ${y-20} L${c-10} ${y-8} L${c} ${y-24} L${c+10} ${y-8} L${c+22} ${y-20} L${c+20} ${y+2}Z" fill="#ffcf3a" stroke="${ne}" stroke-width="4" stroke-linejoin="round"/>`):E&&f.push(`<path d="M${c-d+1} ${u-8} Q${c-d+2} ${y-10} ${c} ${y-10} Q${c+d-2} ${y-10} ${c+d-1} ${u-8}Z" fill="${r}" stroke="${ne}" stroke-width="5" stroke-linejoin="round"/>`),f.push("</g>"),f.push(`<circle cx="60" cy="60" r="56" fill="none" stroke="${ne}" stroke-width="6"/>`),`<svg class="portrait" viewBox="0 0 120 120" width="${t}" height="${t}" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">${f.join("")}</svg>`}var fd=/(daniel|george|arthur|ryan|oliver|thomas|male|james|harry|guy|brian|fred|alex|aaron)/i,dd=/(kate|serena|martha|libby|sonia|hazel|susan|female|stephanie|fiona|moira|tessa|karen|emma|amy|samantha|victoria|zira|aria|jenny|catherine)/i;function Dh({onLine:n,onIdle:t}={}){let e=typeof window<"u"?window.speechSynthesis:null,i=!0,s=.9,r={jeff:null,pam:null},o=[],a=null,l=null;function h(){if(!e)return;let _=e.getVoices()||[];if(!_.length)return;let m=_.filter(C=>/en[-_]GB/i.test(C.lang)),f=_.filter(C=>/^en/i.test(C.lang)),S=m.length?m:f.length?f:_,y=(C=>[...C.filter(R=>R.localService),...C.filter(R=>!R.localService)])(S),k=y.find(C=>fd.test(C.name))||y[0],w=y.find(C=>dd.test(C.name)&&C!==k)||y.find(C=>C!==k)||k;r={jeff:k,pam:w}}e&&(h(),e.addEventListener?.("voiceschanged",h));let p=_=>Math.max(2200,String(_).split(/\s+/).length*400+600);function g(){clearTimeout(l),a=null;let _=o.shift();if(!_){t?.();return}a=_,n?.(_);let m=()=>{a===_&&g()};if(i&&e&&(r.jeff||r.pam)){let f=new SpeechSynthesisUtterance(_.text),S=_.speaker==="pam"?r.pam:r.jeff;S?(f.voice=S,f.lang=S.lang):f.lang="en-GB";let x=r.jeff===r.pam;f.pitch=_.speaker==="pam"?x?1.35:1.08:x?.8:.95,f.rate=_.rate||1.06,f.volume=s,f.onend=m,f.onerror=m;try{e.speak(f)}catch{}l=setTimeout(()=>{try{e.cancel()}catch{}m()},p(_.text)*2.2+2e3)}else l=setTimeout(m,p(_.text))}function d(_,m="jeff",{priority:f=2,interrupt:S=!1}={}){if(!_)return;let x={text:String(_),speaker:m,priority:f,at:Date.now()};for(S&&(o.length=0,c()),o.push(x);o.length>2;){let y=0;for(let k=1;k<o.length;k++)o[k].priority<o[y].priority&&(y=k);o.splice(y,1)}a||g()}function c(){if(clearTimeout(l),e)try{e.cancel()}catch{}a=null}function u(){o.length=0,c(),t?.()}return{say:d,clear:u,get busy(){return!!a||o.length>0},get available(){return!!e},setEnabled(_){if(i=!!_,!i&&e)try{e.cancel()}catch{}},setVolume(_){s=Math.max(0,Math.min(1,_))},whenIdle(_=15e3){return new Promise(m=>{let f=Date.now(),S=setInterval(()=>{(!a&&!o.length||Date.now()-f>_)&&(clearInterval(S),m())},120)})},get voiceNames(){return{jeff:r.jeff?.name,pam:r.pam?.name}}}}var Za=[1720,4220],qa=2500;function Gn(n,t){if(t<=0)return 0;if(t>=n[200])return 5e3;let e=0,i=200;for(;i-e>1;){let r=e+i>>1;n[r]<=t?e=r:i=r}let s=(t-n[e])/(n[i]-n[e]);return(e+s)*25}function Un(n,t){let e=Math.max(0,Math.min(5e3,t))/25,i=Math.floor(e),s=Math.min(200,i+1);return n[i]+(e-i)*(n[s]-n[i])}function pd(n,{dt:t=1,debounceS:e=6}={}){let i=n.map(v=>v.id),s=Math.max(...n.map(v=>v.officialS)),r=[...n].sort((v,b)=>v.officialS-b.officialS).map(v=>v.id),o=[];for(let v=0;v<=Math.ceil(s);v+=t){let b=n.map(I=>Gn(I.progress,v));o.push({t:v,d:b})}let a=[],l=n.length,h={},p=(v,b)=>`${v}-${b}`,g=null,d=0,c=null,u=0,_=0,m=0,f=!1,S=null;for(let v of o){if(v.t<15)continue;let b=n.map(E=>v.t>=E.officialS);for(let E=0;E<l;E++)for(let F=E+1;F<l;F++){if(b[E]&&b[F])continue;let U=v.d[E]>v.d[F]?E:F,B=h[p(E,F)];if(!B){h[p(E,F)]={ahead:U,cand:U,since:v.t};continue}if(U!==B.cand&&(B.cand=U,B.since=v.t),B.cand!==B.ahead&&v.t-B.since>=e){let z=B.cand,W=B.cand===E?F:E;B.ahead=B.cand;let it=B.since;m++,a.push({type:"overtake",raceS:it,by:i[z],on:i[W],atM:Math.round(Gn(n[z].progress,it))})}}let I=v.d.indexOf(Math.max(...v.d));if(g===null){g=I,d=v.t;continue}I!==g?c!==I?(c=I,u=v.t):v.t-u>=e&&!b[g]&&(a.push({type:"lead_change",raceS:u,from:i[g],to:i[I],atM:Math.round(v.d[I])}),_++,v.d[I]>3500&&(f=!0),g=I,d=u,c=null):c=null;let T=[...v.d].sort((E,F)=>F-E);S===null&&T[0]-T[1]>60&&T[0]<5e3&&(S=v.t,a.push({type:"breakaway",raceS:v.t,who:i[I],gapM:Math.round(T[0]-T[1]),atM:Math.round(T[0])}))}let x=v=>Math.min(...n.map(b=>Un(b.progress,v)));for(let[v,b]of Za.entries())a.push({type:"hill",raceS:x(b),lap:v+1,atM:b});a.push({type:"lap",raceS:x(qa),atM:qa,order:Ya(n,x(qa))}),a.push({type:"final_stretch",raceS:x(4600),atM:4600,order:Ya(n,x(4600))});for(let v of n)a.push({type:"finish",raceS:v.officialS,who:v.id,place:r.indexOf(v.id)+1});a.sort((v,b)=>v.raceS-b.raceS);let y=n.map(v=>v.officialS).sort((v,b)=>v-b),k=v=>Ya(n,x(v)),w=k(2e3)[0],C=k(1e3)[0],R=k(4e3)[0],M=k(2e3).at(-1);return{finishOrder:r,winningMarginS:y[1]-y[0],spreadS:y.at(-1)-y[0],leadChanges:_,overtakes:m,lateLeadChange:f,leaderAt1k:C,leaderAt2k:w,leaderAt4k:R,leaderAt2kFinalPlace:r.indexOf(w)+1,winnerPlaceAt2k:k(2e3).indexOf(r[0])+1,winnerPlaceAt1k:k(1e3).indexOf(r[0])+1,lastAt2kFinalPlace:r.indexOf(M)+1,breakawayAtS:S,events:a}}function Ya(n,t){return n.map(e=>({id:e.id,d:Gn(e.progress,t),f:e.officialS})).sort((e,i)=>i.d-e.d||e.f-i.f).map(e=>e.id)}function md(n,{targetS:t=140}={}){let e=Math.max(...n.map(f=>f.officialS)),i=Math.min(...n.map(f=>Un(f.progress,4500))),s=45,r=i,o=e+3,a=o-r,l=4,h=Math.min(t*.45,Math.max(25,a/1.6)),p=a/h,g=r-s,d=Math.max(30,t-s/l-h),c=g/d,u=f=>{let S=Uh(s-10,s+10,f),x=Uh(r-60,r,f);return l+(c-l)*S+(p-c)*x},_=[[0,0]],m=0;for(let f=1;f<=Math.ceil(o);f++)m+=1/u(f-.5),_.push([f,Math.round(m*1e3)/1e3]);return{map:_,durationS:Math.round(m*10)/10,raceEndS:Math.ceil(o),rates:{start:l,middle:Math.round(c*10)/10,finale:Math.round(p*100)/100}}}function Uh(n,t,e){let i=Math.max(0,Math.min(1,(e-n)/(t-n)));return i*i*(3-2*i)}function Ii(n,t){let e=n.map;if(t<=0)return 0;if(t>=e.length-1)return e.at(-1)[1];let i=Math.floor(t),s=t-i;return e[i][1]+s*(e[i+1][1]-e[i][1])}function _s(n,t){let e=n.map;if(t<=0)return 0;let i=0,s=e.length-1;if(t>=e[s][1])return e[s][0];for(;s-i>1;){let r=i+s>>1;e[r][1]<=t?i=r:s=r}return e[i][0]+(t-e[i][1])/(e[s][1]-e[i][1])}function Nh(n,t,e={}){let i=pd(t),s=md(t,e),r=[...i.events];for(let a of t)for(let[l,h]of(a.diversions||[]).entries())r.push({type:"diversion",who:a.id,lap:l+1,raceS:Un(a.progress,h.fromM),endRaceS:Un(a.progress,h.toM),fromM:h.fromM,toM:h.toM});r.sort((a,l)=>a.raceS-l.raceS);let o=r.map(a=>({...a,broadcastS:Math.round(Ii(s,a.raceS)*100)/100,...a.endRaceS!=null?{endBroadcastS:Math.round(Ii(s,a.endRaceS)*100)/100}:{}}));return{roundId:n,courseLengthM:5e3,runners:t.map(a=>({id:a.id,officialS:a.officialS,progress:a.progress,pacingSource:a.pacingSource,diversions:a.diversions||null})),timeMap:s,events:o,finishOrder:i.finishOrder,summary:{winningMarginS:i.winningMarginS,spreadS:i.spreadS,leadChanges:i.leadChanges,overtakes:i.overtakes,lateLeadChange:i.lateLeadChange}}}var Ms="#14183c";function Fh(n,{course:t,round:e,plan:i,speed:s=1}){let r=document.createElement("canvas");r.style.cssText="position:absolute;inset:0;width:100%;height:100%;display:block",n.appendChild(r);let o=r.getContext("2d",{alpha:!1}),a=e?.runners||[],l=t?.points||[],h=0,p=!1,g=!1,d=0,c="idle",u=0,_=0,m=-1,f=null,S=null,x=[],y=null,k=1/0,w=-1/0,C=1/0,R=-1/0;for(let B of l)k=Math.min(k,B[0]),w=Math.max(w,B[0]),C=Math.min(C,B[2]),R=Math.max(R,B[2]);function M(){let B=Math.min(1,1100/Math.max(1,n.clientWidth));r.width=Math.round(n.clientWidth*B),r.height=Math.round(n.clientHeight*B)}M();let v=new ResizeObserver(M);v.observe(n);function b(B,z){let W=r.width,it=r.height,D=it*.16,ft=it*.24,Lt=W*.08,O=Math.min((W-Lt*2-W*.22)/(w-k||1),(it-D-ft)/(R-C||1)),X=Lt+(W-Lt*2-W*.22-(w-k)*O)/2,J=D+(it-D-ft-(R-C)*O)/2;return[X+(B-k)*O,J+(z-C)*O,O]}function I(B){if(!l.length)return[0,0];let z=Math.max(0,Math.min(l.length-1,B/5e3*(l.length-1))),W=Math.floor(z),it=Math.min(l.length-1,W+1),D=z-W;return[l[W][0]+(l[it][0]-l[W][0])*D,l[W][2]+(l[it][2]-l[W][2])*D]}let T=null;function E(){let B=r.width,z=r.height;T=document.createElement("canvas"),T.width=B,T.height=z;let W=T.getContext("2d"),it=W.createLinearGradient(0,0,0,z);it.addColorStop(0,"#45cf86"),it.addColorStop(1,"#1f9e5c"),W.fillStyle=it,W.fillRect(0,0,B,z),W.fillStyle="rgba(255,255,255,.05)";let D=B/1920;for(let ft=-z;ft<B;ft+=160*D)W.beginPath(),W.moveTo(ft,0),W.lineTo(ft+80*D,0),W.lineTo(ft+80*D+z*.5,z),W.lineTo(ft+z*.5,z),W.fill();if(l.length){let ft=new Path2D;l.forEach((J,V)=>{let[st,nt]=b(J[0],J[2]);V?ft.lineTo(st,nt):ft.moveTo(st,nt)});let Lt=b(0,0)[2];W.lineCap="round",W.lineJoin="round",W.strokeStyle=Ms,W.lineWidth=Math.max(16,Lt*14),W.stroke(ft),W.strokeStyle="#fff",W.lineWidth=Math.max(12,Lt*11),W.stroke(ft),W.strokeStyle="#6f84a8",W.lineWidth=Math.max(8,Lt*8),W.stroke(ft);let[O,X]=b(...t.finish?[t.finish[0],t.finish[1]]:[l.at(-1)[0],l.at(-1)[2]]);W.save(),W.translate(O,X);for(let J=-2;J<2;J++)for(let V=-1;V<1;V++)W.fillStyle=J+V&1?"#fff":Ms,W.fillRect(J*8,V*8,8,8);W.restore()}}function F(){let B=r.width,z=r.height;(!T||T.width!==B||T.height!==z)&&E(),o.drawImage(T,0,0);let W=i?_s(i.timeMap,d):0,it=(i?.runners||[]).map(V=>({id:V.id,m:Gn(V.progress,W),done:W>=V.officialS,f:V.officialS}));it.sort((V,st)=>st.m-V.m||V.f-st.f);let D=Math.max(14,B/90);for(let V of[...it].reverse()){let st=a.find(zt=>zt.id===V.id),[nt,St]=b(...I(V.m));o.beginPath(),o.arc(nt,St+4,D,0,Math.PI*2),o.fillStyle="rgba(0,0,0,.25)",o.fill(),o.beginPath(),o.arc(nt,St,D,0,Math.PI*2),o.fillStyle=st?.colour?.primary||"#fff",o.fill(),o.lineWidth=D*.28,o.strokeStyle=Ms,o.stroke(),o.fillStyle="#fff",o.font=`${Math.round(D*1.15)}px "Lilita One", sans-serif`,o.textAlign="center",o.textBaseline="middle",o.lineWidth=D*.25,o.strokeText(String(st?.lane??""),nt,St+1),o.fillText(String(st?.lane??""),nt,St+1)}let ft=B*.77,Lt=z*.16,O=z*.075;o.font=`${Math.round(z*.035)}px "Lilita One", sans-serif`,o.textAlign="left",o.textBaseline="middle",it.forEach((V,st)=>{let nt=a.find(zt=>zt.id===V.id),St=Lt+st*O;o.save(),o.translate(ft,St),o.transform(1,0,-.14,1,0,0),o.fillStyle=Ms,o.fillRect(4,6,B*.2,O*.82),o.fillStyle=st===0?"#ffd23f":"#2a62e0",o.fillRect(0,0,B*.2,O*.82),o.fillStyle=nt?.colour?.primary||"#fff",o.fillRect(0,0,B*.012,O*.82),o.restore(),o.fillStyle=st===0?Ms:"#fff",o.fillText(`${st+1}  ${(nt?.shortName||nt?.nickname||V.id).slice(0,16)}`,ft+B*.02,St+O*.41)}),o.font=`${Math.round(z*.04)}px "Lilita One", sans-serif`,o.textAlign="left";let X=Math.floor(W),J=`${Math.floor(X/60)}:${String(X%60).padStart(2,"0")}`;o.lineWidth=8,o.strokeStyle=Ms,o.strokeText(J,ft,Lt-z*.05),o.fillStyle="#ffd23f",o.fillText(J,ft,Lt-z*.05)}function U(B){if(g)return;let z=u?Math.min(.1,(B-u)/1e3):0;if(u=B,c==="race"&&!p){for(d+=z*s;x.length&&x[0].broadcastS<=d;){let W=x.shift();try{f?.(W)}catch(it){console.warn(it)}}if(d>=(i.timeMap.durationS||0)+1.5){c="done";let W=S;S=null,W?.()}}B-_>45&&(d!==m||!T)&&(_=B,m=d,F()),h=requestAnimationFrame(U)}return h=requestAnimationFrame(U),{kind:"2d",playIntro(B){setTimeout(()=>B?.(),10)},playRace(B,z){f=B,S=z,x=[...i.events||[],...i.commentary||[]].sort((W,it)=>W.broadcastS-it.broadcastS),d=0,c="race"},showPodium(B){y=B},setPaused(B){p=!!B},seek(B){for(d=Math.max(0,Number(B)||0);x.length&&x[0].broadcastS<=d;)x.shift();c="race"},get broadcastTime(){return c==="race"||c==="done"?d:-1},dispose(){g=!0,cancelAnimationFrame(h),v.disconnect(),r.remove()}}}var qi={};cd(qi,{createRaceView:()=>vv});var jc="170";var gd=0,Oh=1,yd=2;var ju=1,Qc=2,gi=3,Hi=0,fn=1,je=2,Bi=0,Vs=1,Bh=2,zh=3,Hh=4,xd=5,as=100,vd=101,_d=102,Md=103,bd=104,Sd=200,wd=201,Ed=202,Td=203,Il=204,Pl=205,Ad=206,Rd=207,Cd=208,Id=209,Pd=210,Ld=211,kd=212,Dd=213,Ud=214,Ll=0,kl=1,Dl=2,qs=3,Ul=4,Nl=5,Fl=6,Ol=7,Qu=0,Nd=1,Fd=2,ri=0,Od=1,Bd=2,zd=3,Hd=4,$d=5,Vd=6,Gd=7;var tf=300,Ys=301,Zs=302,Bl=303,zl=304,Ca=306,us=1e3,cs=1001,Hl=1002,Sn=1003,Wd=1004;var uo=1005;var ii=1006,Ja=1007;var hs=1008;var _i=1009,ef=1010,nf=1011,Ur=1012,th=1013,fs=1014,si=1015,Zr=1016,eh=1017,nh=1018,Js=1020,sf=35902,rf=1021,of=1022,kn=1023,af=1024,lf=1025,Gs=1026,Ks=1027,ih=1028,sh=1029,cf=1030,rh=1031;var oh=1033,Vo=33776,Go=33777,Wo=33778,Xo=33779,$l=35840,Vl=35841,Gl=35842,Wl=35843,Xl=36196,ql=37492,Yl=37496,Zl=37808,Jl=37809,Kl=37810,jl=37811,Ql=37812,tc=37813,ec=37814,nc=37815,ic=37816,sc=37817,rc=37818,oc=37819,ac=37820,lc=37821,qo=36492,cc=36494,hc=36495,hf=36283,uc=36284,fc=36285,dc=36286;var Yo=2300,pc=2301,Ka=2302,$h=2400,Vh=2401,Gh=2402;var Xd=3200,qd=3201;var uf=0,Yd=1,Fi="",hn="srgb",ir="srgb-linear",Ia="linear",Ne="srgb";var bs=7680;var Wh=519,Zd=512,Jd=513,Kd=514,ff=515,jd=516,Qd=517,tp=518,ep=519,mc=35044;var Xh="300 es",xi=2e3,Zo=2001,$i=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let i=this._listeners[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},yn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],qh=1234567,Ir=Math.PI/180,Nr=180/Math.PI;function oi(){let n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(yn[n&255]+yn[n>>8&255]+yn[n>>16&255]+yn[n>>24&255]+"-"+yn[t&255]+yn[t>>8&255]+"-"+yn[t>>16&15|64]+yn[t>>24&255]+"-"+yn[e&63|128]+yn[e>>8&255]+"-"+yn[e>>16&255]+yn[e>>24&255]+yn[i&255]+yn[i>>8&255]+yn[i>>16&255]+yn[i>>24&255]).toLowerCase()}function un(n,t,e){return Math.max(t,Math.min(e,n))}function ah(n,t){return(n%t+t)%t}function np(n,t,e,i,s){return i+(n-t)*(s-i)/(e-t)}function ip(n,t,e){return n!==t?(e-n)/(t-n):0}function Pr(n,t,e){return(1-e)*n+e*t}function sp(n,t,e,i){return Pr(n,t,1-Math.exp(-e*i))}function rp(n,t=1){return t-Math.abs(ah(n,t*2)-t)}function op(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function ap(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function lp(n,t){return n+Math.floor(Math.random()*(t-n+1))}function cp(n,t){return n+Math.random()*(t-n)}function hp(n){return n*(.5-Math.random())}function up(n){n!==void 0&&(qh=n);let t=qh+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function fp(n){return n*Ir}function dp(n){return n*Nr}function pp(n){return(n&n-1)===0&&n!==0}function mp(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function gp(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function yp(n,t,e,i,s){let r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),h=r((t+i)/2),p=o((t+i)/2),g=r((t-i)/2),d=o((t-i)/2),c=r((i-t)/2),u=o((i-t)/2);switch(s){case"XYX":n.set(a*p,l*g,l*d,a*h);break;case"YZY":n.set(l*d,a*p,l*g,a*h);break;case"ZXZ":n.set(l*g,l*d,a*p,a*h);break;case"XZX":n.set(a*p,l*u,l*c,a*h);break;case"YXY":n.set(l*c,a*p,l*u,a*h);break;case"ZYZ":n.set(l*u,l*c,a*p,a*h);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Yn(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function ke(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var Gi={DEG2RAD:Ir,RAD2DEG:Nr,generateUUID:oi,clamp:un,euclideanModulo:ah,mapLinear:np,inverseLerp:ip,lerp:Pr,damp:sp,pingpong:rp,smoothstep:op,smootherstep:ap,randInt:lp,randFloat:cp,randFloatSpread:hp,seededRandom:up,degToRad:fp,radToDeg:dp,isPowerOfTwo:pp,ceilPowerOfTwo:mp,floorPowerOfTwo:gp,setQuaternionFromProperEuler:yp,normalize:ke,denormalize:Yn},Bt=class n{constructor(t=0,e=0){n.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(un(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Me=class n{constructor(t,e,i,s,r,o,a,l,h){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,h)}set(t,e,i,s,r,o,a,l,h){let p=this.elements;return p[0]=t,p[1]=s,p[2]=a,p[3]=e,p[4]=r,p[5]=l,p[6]=i,p[7]=o,p[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[3],l=i[6],h=i[1],p=i[4],g=i[7],d=i[2],c=i[5],u=i[8],_=s[0],m=s[3],f=s[6],S=s[1],x=s[4],y=s[7],k=s[2],w=s[5],C=s[8];return r[0]=o*_+a*S+l*k,r[3]=o*m+a*x+l*w,r[6]=o*f+a*y+l*C,r[1]=h*_+p*S+g*k,r[4]=h*m+p*x+g*w,r[7]=h*f+p*y+g*C,r[2]=d*_+c*S+u*k,r[5]=d*m+c*x+u*w,r[8]=d*f+c*y+u*C,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],h=t[7],p=t[8];return e*o*p-e*a*h-i*r*p+i*a*l+s*r*h-s*o*l}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],h=t[7],p=t[8],g=p*o-a*h,d=a*l-p*r,c=h*r-o*l,u=e*g+i*d+s*c;if(u===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/u;return t[0]=g*_,t[1]=(s*h-p*i)*_,t[2]=(a*i-s*o)*_,t[3]=d*_,t[4]=(p*e-s*l)*_,t[5]=(s*r-a*e)*_,t[6]=c*_,t[7]=(i*l-h*e)*_,t[8]=(o*e-i*r)*_,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,o,a){let l=Math.cos(r),h=Math.sin(r);return this.set(i*l,i*h,-i*(l*o+h*a)+o+t,-s*h,s*l,-s*(-h*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(ja.makeScale(t,e)),this}rotate(t){return this.premultiply(ja.makeRotation(-t)),this}translate(t,e){return this.premultiply(ja.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},ja=new Me;function df(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function Jo(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function xp(){let n=Jo("canvas");return n.style.display="block",n}var Yh={};function Rr(n){n in Yh||(Yh[n]=!0,console.warn(n))}function vp(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}function _p(n){let t=n.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Mp(n){let t=n.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var Ce={enabled:!0,workingColorSpace:ir,spaces:{},convert:function(n,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===Ne&&(n.r=vi(n.r),n.g=vi(n.g),n.b=vi(n.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(n.applyMatrix3(this.spaces[t].toXYZ),n.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===Ne&&(n.r=Ws(n.r),n.g=Ws(n.g),n.b=Ws(n.b))),n},fromWorkingColorSpace:function(n,t){return this.convert(n,this.workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===Fi?Ia:this.spaces[n].transfer},getLuminanceCoefficients:function(n,t=this.workingColorSpace){return n.fromArray(this.spaces[t].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,t,e){return n.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function vi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ws(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Zh=[.64,.33,.3,.6,.15,.06],Jh=[.2126,.7152,.0722],Kh=[.3127,.329],jh=new Me().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Qh=new Me().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Ce.define({[ir]:{primaries:Zh,whitePoint:Kh,transfer:Ia,toXYZ:jh,fromXYZ:Qh,luminanceCoefficients:Jh,workingColorSpaceConfig:{unpackColorSpace:hn},outputColorSpaceConfig:{drawingBufferColorSpace:hn}},[hn]:{primaries:Zh,whitePoint:Kh,transfer:Ne,toXYZ:jh,fromXYZ:Qh,luminanceCoefficients:Jh,outputColorSpaceConfig:{drawingBufferColorSpace:hn}}});var Ss,gc=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Ss===void 0&&(Ss=Jo("canvas")),Ss.width=t.width,Ss.height=t.height;let i=Ss.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=Ss}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Jo("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=vi(r[o]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(vi(e[i]/255)*255):e[i]=vi(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},bp=0,Ko=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:bp++}),this.uuid=oi(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Qa(s[o].image)):r.push(Qa(s[o]))}else r=Qa(s);i.url=r}return e||(t.images[this.uuid]=i),i}};function Qa(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?gc.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Sp=0,An=class n extends $i{constructor(t=n.DEFAULT_IMAGE,e=n.DEFAULT_MAPPING,i=cs,s=cs,r=ii,o=hs,a=kn,l=_i,h=n.DEFAULT_ANISOTROPY,p=Fi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Sp++}),this.uuid=oi(),this.name="",this.source=new Ko(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=h,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Bt(0,0),this.repeat=new Bt(1,1),this.center=new Bt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Me,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=p,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==tf)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case us:t.x=t.x-Math.floor(t.x);break;case cs:t.x=t.x<0?0:1;break;case Hl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case us:t.y=t.y-Math.floor(t.y);break;case cs:t.y=t.y<0?0:1;break;case Hl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};An.DEFAULT_IMAGE=null;An.DEFAULT_MAPPING=tf;An.DEFAULT_ANISOTROPY=1;var Ze=class n{constructor(t=0,e=0,i=0,s=1){n.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r,l=t.elements,h=l[0],p=l[4],g=l[8],d=l[1],c=l[5],u=l[9],_=l[2],m=l[6],f=l[10];if(Math.abs(p-d)<.01&&Math.abs(g-_)<.01&&Math.abs(u-m)<.01){if(Math.abs(p+d)<.1&&Math.abs(g+_)<.1&&Math.abs(u+m)<.1&&Math.abs(h+c+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let x=(h+1)/2,y=(c+1)/2,k=(f+1)/2,w=(p+d)/4,C=(g+_)/4,R=(u+m)/4;return x>y&&x>k?x<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(x),s=w/i,r=C/i):y>k?y<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),i=w/s,r=R/s):k<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(k),i=C/r,s=R/r),this.set(i,s,r,e),this}let S=Math.sqrt((m-u)*(m-u)+(g-_)*(g-_)+(d-p)*(d-p));return Math.abs(S)<.001&&(S=1),this.x=(m-u)/S,this.y=(g-_)/S,this.z=(d-p)/S,this.w=Math.acos((h+c+f-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},yc=class extends $i{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Ze(0,0,t,e),this.scissorTest=!1,this.viewport=new Ze(0,0,t,e);let s={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ii,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);let r=new An(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];let o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new Ko(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Mi=class extends yc{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},jo=class extends An{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Sn,this.minFilter=Sn,this.wrapR=cs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var xc=class extends An{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Sn,this.minFilter=Sn,this.wrapR=cs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Fn=class{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,o,a){let l=i[s+0],h=i[s+1],p=i[s+2],g=i[s+3],d=r[o+0],c=r[o+1],u=r[o+2],_=r[o+3];if(a===0){t[e+0]=l,t[e+1]=h,t[e+2]=p,t[e+3]=g;return}if(a===1){t[e+0]=d,t[e+1]=c,t[e+2]=u,t[e+3]=_;return}if(g!==_||l!==d||h!==c||p!==u){let m=1-a,f=l*d+h*c+p*u+g*_,S=f>=0?1:-1,x=1-f*f;if(x>Number.EPSILON){let k=Math.sqrt(x),w=Math.atan2(k,f*S);m=Math.sin(m*w)/k,a=Math.sin(a*w)/k}let y=a*S;if(l=l*m+d*y,h=h*m+c*y,p=p*m+u*y,g=g*m+_*y,m===1-a){let k=1/Math.sqrt(l*l+h*h+p*p+g*g);l*=k,h*=k,p*=k,g*=k}}t[e]=l,t[e+1]=h,t[e+2]=p,t[e+3]=g}static multiplyQuaternionsFlat(t,e,i,s,r,o){let a=i[s],l=i[s+1],h=i[s+2],p=i[s+3],g=r[o],d=r[o+1],c=r[o+2],u=r[o+3];return t[e]=a*u+p*g+l*c-h*d,t[e+1]=l*u+p*d+h*g-a*c,t[e+2]=h*u+p*c+a*d-l*g,t[e+3]=p*u-a*g-l*d-h*c,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,h=a(i/2),p=a(s/2),g=a(r/2),d=l(i/2),c=l(s/2),u=l(r/2);switch(o){case"XYZ":this._x=d*p*g+h*c*u,this._y=h*c*g-d*p*u,this._z=h*p*u+d*c*g,this._w=h*p*g-d*c*u;break;case"YXZ":this._x=d*p*g+h*c*u,this._y=h*c*g-d*p*u,this._z=h*p*u-d*c*g,this._w=h*p*g+d*c*u;break;case"ZXY":this._x=d*p*g-h*c*u,this._y=h*c*g+d*p*u,this._z=h*p*u+d*c*g,this._w=h*p*g-d*c*u;break;case"ZYX":this._x=d*p*g-h*c*u,this._y=h*c*g+d*p*u,this._z=h*p*u-d*c*g,this._w=h*p*g+d*c*u;break;case"YZX":this._x=d*p*g+h*c*u,this._y=h*c*g+d*p*u,this._z=h*p*u-d*c*g,this._w=h*p*g-d*c*u;break;case"XZY":this._x=d*p*g-h*c*u,this._y=h*c*g-d*p*u,this._z=h*p*u+d*c*g,this._w=h*p*g+d*c*u;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],h=e[2],p=e[6],g=e[10],d=i+a+g;if(d>0){let c=.5/Math.sqrt(d+1);this._w=.25/c,this._x=(p-l)*c,this._y=(r-h)*c,this._z=(o-s)*c}else if(i>a&&i>g){let c=2*Math.sqrt(1+i-a-g);this._w=(p-l)/c,this._x=.25*c,this._y=(s+o)/c,this._z=(r+h)/c}else if(a>g){let c=2*Math.sqrt(1+a-i-g);this._w=(r-h)/c,this._x=(s+o)/c,this._y=.25*c,this._z=(l+p)/c}else{let c=2*Math.sqrt(1+g-i-a);this._w=(o-s)/c,this._x=(r+h)/c,this._y=(l+p)/c,this._z=.25*c}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(un(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,h=e._z,p=e._w;return this._x=i*p+o*a+s*h-r*l,this._y=s*p+o*l+r*a-i*h,this._z=r*p+o*h+i*l-s*a,this._w=o*p-i*a-s*l-r*h,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let i=this._x,s=this._y,r=this._z,o=this._w,a=o*t._w+i*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let c=1-e;return this._w=c*o+e*this._w,this._x=c*i+e*this._x,this._y=c*s+e*this._y,this._z=c*r+e*this._z,this.normalize(),this}let h=Math.sqrt(l),p=Math.atan2(h,a),g=Math.sin((1-e)*p)/h,d=Math.sin(e*p)/h;return this._w=o*g+this._w*d,this._x=i*g+this._x*d,this._y=s*g+this._y*d,this._z=r*g+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},$=class n{constructor(t=0,e=0,i=0){n.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(tu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(tu.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,h=2*(o*s-a*i),p=2*(a*e-r*s),g=2*(r*i-o*e);return this.x=e+l*h+o*g-a*p,this.y=i+l*p+a*h-r*g,this.z=s+l*g+r*p-o*h,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return tl.copy(this).projectOnVector(t),this.sub(tl)}reflect(t){return this.sub(tl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(un(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},tl=new $,tu=new Fn,bi=class{constructor(t=new $(1/0,1/0,1/0),e=new $(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Wn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Wn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=Wn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Wn):Wn.fromBufferAttribute(r,o),Wn.applyMatrix4(t.matrixWorld),this.expandByPoint(Wn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),fo.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),fo.copy(i.boundingBox)),fo.applyMatrix4(t.matrixWorld),this.union(fo)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Wn),Wn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(xr),po.subVectors(this.max,xr),ws.subVectors(t.a,xr),Es.subVectors(t.b,xr),Ts.subVectors(t.c,xr),Pi.subVectors(Es,ws),Li.subVectors(Ts,Es),ts.subVectors(ws,Ts);let e=[0,-Pi.z,Pi.y,0,-Li.z,Li.y,0,-ts.z,ts.y,Pi.z,0,-Pi.x,Li.z,0,-Li.x,ts.z,0,-ts.x,-Pi.y,Pi.x,0,-Li.y,Li.x,0,-ts.y,ts.x,0];return!el(e,ws,Es,Ts,po)||(e=[1,0,0,0,1,0,0,0,1],!el(e,ws,Es,Ts,po))?!1:(mo.crossVectors(Pi,Li),e=[mo.x,mo.y,mo.z],el(e,ws,Es,Ts,po))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Wn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Wn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ui[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ui[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ui[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ui[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ui[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ui[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ui[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ui[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ui),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},ui=[new $,new $,new $,new $,new $,new $,new $,new $],Wn=new $,fo=new bi,ws=new $,Es=new $,Ts=new $,Pi=new $,Li=new $,ts=new $,xr=new $,po=new $,mo=new $,es=new $;function el(n,t,e,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){es.fromArray(n,r);let a=s.x*Math.abs(es.x)+s.y*Math.abs(es.y)+s.z*Math.abs(es.z),l=t.dot(es),h=e.dot(es),p=i.dot(es);if(Math.max(-Math.max(l,h,p),Math.min(l,h,p))>a)return!1}return!0}var wp=new bi,vr=new $,nl=new $,Vi=class{constructor(t=new $,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):wp.setFromPoints(t).getCenter(i);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;vr.subVectors(t,this.center);let e=vr.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(vr,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(nl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(vr.copy(t.center).add(nl)),this.expandByPoint(vr.copy(t.center).sub(nl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},fi=new $,il=new $,go=new $,ki=new $,sl=new $,yo=new $,rl=new $,Qo=class{constructor(t=new $,e=new $(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,fi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=fi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(fi.copy(this.origin).addScaledVector(this.direction,e),fi.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){il.copy(t).add(e).multiplyScalar(.5),go.copy(e).sub(t).normalize(),ki.copy(this.origin).sub(il);let r=t.distanceTo(e)*.5,o=-this.direction.dot(go),a=ki.dot(this.direction),l=-ki.dot(go),h=ki.lengthSq(),p=Math.abs(1-o*o),g,d,c,u;if(p>0)if(g=o*l-a,d=o*a-l,u=r*p,g>=0)if(d>=-u)if(d<=u){let _=1/p;g*=_,d*=_,c=g*(g+o*d+2*a)+d*(o*g+d+2*l)+h}else d=r,g=Math.max(0,-(o*d+a)),c=-g*g+d*(d+2*l)+h;else d=-r,g=Math.max(0,-(o*d+a)),c=-g*g+d*(d+2*l)+h;else d<=-u?(g=Math.max(0,-(-o*r+a)),d=g>0?-r:Math.min(Math.max(-r,-l),r),c=-g*g+d*(d+2*l)+h):d<=u?(g=0,d=Math.min(Math.max(-r,-l),r),c=d*(d+2*l)+h):(g=Math.max(0,-(o*r+a)),d=g>0?r:Math.min(Math.max(-r,-l),r),c=-g*g+d*(d+2*l)+h);else d=o>0?-r:r,g=Math.max(0,-(o*d+a)),c=-g*g+d*(d+2*l)+h;return i&&i.copy(this.origin).addScaledVector(this.direction,g),s&&s.copy(il).addScaledVector(go,d),c}intersectSphere(t,e){fi.subVectors(t.center,this.origin);let i=fi.dot(this.direction),s=fi.dot(fi)-i*i,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,o,a,l,h=1/this.direction.x,p=1/this.direction.y,g=1/this.direction.z,d=this.origin;return h>=0?(i=(t.min.x-d.x)*h,s=(t.max.x-d.x)*h):(i=(t.max.x-d.x)*h,s=(t.min.x-d.x)*h),p>=0?(r=(t.min.y-d.y)*p,o=(t.max.y-d.y)*p):(r=(t.max.y-d.y)*p,o=(t.min.y-d.y)*p),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),g>=0?(a=(t.min.z-d.z)*g,l=(t.max.z-d.z)*g):(a=(t.max.z-d.z)*g,l=(t.min.z-d.z)*g),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,fi)!==null}intersectTriangle(t,e,i,s,r){sl.subVectors(e,t),yo.subVectors(i,t),rl.crossVectors(sl,yo);let o=this.direction.dot(rl),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ki.subVectors(this.origin,t);let l=a*this.direction.dot(yo.crossVectors(ki,yo));if(l<0)return null;let h=a*this.direction.dot(sl.cross(ki));if(h<0||l+h>o)return null;let p=-a*ki.dot(rl);return p<0?null:this.at(p/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},we=class n{constructor(t,e,i,s,r,o,a,l,h,p,g,d,c,u,_,m){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,h,p,g,d,c,u,_,m)}set(t,e,i,s,r,o,a,l,h,p,g,d,c,u,_,m){let f=this.elements;return f[0]=t,f[4]=e,f[8]=i,f[12]=s,f[1]=r,f[5]=o,f[9]=a,f[13]=l,f[2]=h,f[6]=p,f[10]=g,f[14]=d,f[3]=c,f[7]=u,f[11]=_,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,i=t.elements,s=1/As.setFromMatrixColumn(t,0).length(),r=1/As.setFromMatrixColumn(t,1).length(),o=1/As.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),h=Math.sin(s),p=Math.cos(r),g=Math.sin(r);if(t.order==="XYZ"){let d=o*p,c=o*g,u=a*p,_=a*g;e[0]=l*p,e[4]=-l*g,e[8]=h,e[1]=c+u*h,e[5]=d-_*h,e[9]=-a*l,e[2]=_-d*h,e[6]=u+c*h,e[10]=o*l}else if(t.order==="YXZ"){let d=l*p,c=l*g,u=h*p,_=h*g;e[0]=d+_*a,e[4]=u*a-c,e[8]=o*h,e[1]=o*g,e[5]=o*p,e[9]=-a,e[2]=c*a-u,e[6]=_+d*a,e[10]=o*l}else if(t.order==="ZXY"){let d=l*p,c=l*g,u=h*p,_=h*g;e[0]=d-_*a,e[4]=-o*g,e[8]=u+c*a,e[1]=c+u*a,e[5]=o*p,e[9]=_-d*a,e[2]=-o*h,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let d=o*p,c=o*g,u=a*p,_=a*g;e[0]=l*p,e[4]=u*h-c,e[8]=d*h+_,e[1]=l*g,e[5]=_*h+d,e[9]=c*h-u,e[2]=-h,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let d=o*l,c=o*h,u=a*l,_=a*h;e[0]=l*p,e[4]=_-d*g,e[8]=u*g+c,e[1]=g,e[5]=o*p,e[9]=-a*p,e[2]=-h*p,e[6]=c*g+u,e[10]=d-_*g}else if(t.order==="XZY"){let d=o*l,c=o*h,u=a*l,_=a*h;e[0]=l*p,e[4]=-g,e[8]=h*p,e[1]=d*g+_,e[5]=o*p,e[9]=c*g-u,e[2]=u*g-c,e[6]=a*p,e[10]=_*g+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Ep,t,Tp)}lookAt(t,e,i){let s=this.elements;return Pn.subVectors(t,e),Pn.lengthSq()===0&&(Pn.z=1),Pn.normalize(),Di.crossVectors(i,Pn),Di.lengthSq()===0&&(Math.abs(i.z)===1?Pn.x+=1e-4:Pn.z+=1e-4,Pn.normalize(),Di.crossVectors(i,Pn)),Di.normalize(),xo.crossVectors(Pn,Di),s[0]=Di.x,s[4]=xo.x,s[8]=Pn.x,s[1]=Di.y,s[5]=xo.y,s[9]=Pn.y,s[2]=Di.z,s[6]=xo.z,s[10]=Pn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[4],l=i[8],h=i[12],p=i[1],g=i[5],d=i[9],c=i[13],u=i[2],_=i[6],m=i[10],f=i[14],S=i[3],x=i[7],y=i[11],k=i[15],w=s[0],C=s[4],R=s[8],M=s[12],v=s[1],b=s[5],I=s[9],T=s[13],E=s[2],F=s[6],U=s[10],B=s[14],z=s[3],W=s[7],it=s[11],D=s[15];return r[0]=o*w+a*v+l*E+h*z,r[4]=o*C+a*b+l*F+h*W,r[8]=o*R+a*I+l*U+h*it,r[12]=o*M+a*T+l*B+h*D,r[1]=p*w+g*v+d*E+c*z,r[5]=p*C+g*b+d*F+c*W,r[9]=p*R+g*I+d*U+c*it,r[13]=p*M+g*T+d*B+c*D,r[2]=u*w+_*v+m*E+f*z,r[6]=u*C+_*b+m*F+f*W,r[10]=u*R+_*I+m*U+f*it,r[14]=u*M+_*T+m*B+f*D,r[3]=S*w+x*v+y*E+k*z,r[7]=S*C+x*b+y*F+k*W,r[11]=S*R+x*I+y*U+k*it,r[15]=S*M+x*T+y*B+k*D,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],h=t[13],p=t[2],g=t[6],d=t[10],c=t[14],u=t[3],_=t[7],m=t[11],f=t[15];return u*(+r*l*g-s*h*g-r*a*d+i*h*d+s*a*c-i*l*c)+_*(+e*l*c-e*h*d+r*o*d-s*o*c+s*h*p-r*l*p)+m*(+e*h*g-e*a*c-r*o*g+i*o*c+r*a*p-i*h*p)+f*(-s*a*p-e*l*g+e*a*d+s*o*g-i*o*d+i*l*p)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],h=t[7],p=t[8],g=t[9],d=t[10],c=t[11],u=t[12],_=t[13],m=t[14],f=t[15],S=g*m*h-_*d*h+_*l*c-a*m*c-g*l*f+a*d*f,x=u*d*h-p*m*h-u*l*c+o*m*c+p*l*f-o*d*f,y=p*_*h-u*g*h+u*a*c-o*_*c-p*a*f+o*g*f,k=u*g*l-p*_*l-u*a*d+o*_*d+p*a*m-o*g*m,w=e*S+i*x+s*y+r*k;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let C=1/w;return t[0]=S*C,t[1]=(_*d*r-g*m*r-_*s*c+i*m*c+g*s*f-i*d*f)*C,t[2]=(a*m*r-_*l*r+_*s*h-i*m*h-a*s*f+i*l*f)*C,t[3]=(g*l*r-a*d*r-g*s*h+i*d*h+a*s*c-i*l*c)*C,t[4]=x*C,t[5]=(p*m*r-u*d*r+u*s*c-e*m*c-p*s*f+e*d*f)*C,t[6]=(u*l*r-o*m*r-u*s*h+e*m*h+o*s*f-e*l*f)*C,t[7]=(o*d*r-p*l*r+p*s*h-e*d*h-o*s*c+e*l*c)*C,t[8]=y*C,t[9]=(u*g*r-p*_*r-u*i*c+e*_*c+p*i*f-e*g*f)*C,t[10]=(o*_*r-u*a*r+u*i*h-e*_*h-o*i*f+e*a*f)*C,t[11]=(p*a*r-o*g*r-p*i*h+e*g*h+o*i*c-e*a*c)*C,t[12]=k*C,t[13]=(p*_*s-u*g*s+u*i*d-e*_*d-p*i*m+e*g*m)*C,t[14]=(u*a*s-o*_*s-u*i*l+e*_*l+o*i*m-e*a*m)*C,t[15]=(o*g*s-p*a*s+p*i*l-e*g*l-o*i*d+e*a*d)*C,this}scale(t){let e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),s=Math.sin(e),r=1-i,o=t.x,a=t.y,l=t.z,h=r*o,p=r*a;return this.set(h*o+i,h*a-s*l,h*l+s*a,0,h*a+s*l,p*a+i,p*l-s*o,0,h*l-s*a,p*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,h=r+r,p=o+o,g=a+a,d=r*h,c=r*p,u=r*g,_=o*p,m=o*g,f=a*g,S=l*h,x=l*p,y=l*g,k=i.x,w=i.y,C=i.z;return s[0]=(1-(_+f))*k,s[1]=(c+y)*k,s[2]=(u-x)*k,s[3]=0,s[4]=(c-y)*w,s[5]=(1-(d+f))*w,s[6]=(m+S)*w,s[7]=0,s[8]=(u+x)*C,s[9]=(m-S)*C,s[10]=(1-(d+_))*C,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){let s=this.elements,r=As.set(s[0],s[1],s[2]).length(),o=As.set(s[4],s[5],s[6]).length(),a=As.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Xn.copy(this);let h=1/r,p=1/o,g=1/a;return Xn.elements[0]*=h,Xn.elements[1]*=h,Xn.elements[2]*=h,Xn.elements[4]*=p,Xn.elements[5]*=p,Xn.elements[6]*=p,Xn.elements[8]*=g,Xn.elements[9]*=g,Xn.elements[10]*=g,e.setFromRotationMatrix(Xn),i.x=r,i.y=o,i.z=a,this}makePerspective(t,e,i,s,r,o,a=xi){let l=this.elements,h=2*r/(e-t),p=2*r/(i-s),g=(e+t)/(e-t),d=(i+s)/(i-s),c,u;if(a===xi)c=-(o+r)/(o-r),u=-2*o*r/(o-r);else if(a===Zo)c=-o/(o-r),u=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=g,l[12]=0,l[1]=0,l[5]=p,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=c,l[14]=u,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,s,r,o,a=xi){let l=this.elements,h=1/(e-t),p=1/(i-s),g=1/(o-r),d=(e+t)*h,c=(i+s)*p,u,_;if(a===xi)u=(o+r)*g,_=-2*g;else if(a===Zo)u=r*g,_=-1*g;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*h,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*p,l[9]=0,l[13]=-c,l[2]=0,l[6]=0,l[10]=_,l[14]=-u,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}},As=new $,Xn=new we,Ep=new $(0,0,0),Tp=new $(1,1,1),Di=new $,xo=new $,Pn=new $,eu=new we,nu=new Fn,Zn=class n{constructor(t=0,e=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],h=s[5],p=s[9],g=s[2],d=s[6],c=s[10];switch(e){case"XYZ":this._y=Math.asin(un(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-p,c),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,h),this._z=0);break;case"YXZ":this._x=Math.asin(-un(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(a,c),this._z=Math.atan2(l,h)):(this._y=Math.atan2(-g,r),this._z=0);break;case"ZXY":this._x=Math.asin(un(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-g,c),this._z=Math.atan2(-o,h)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-un(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(d,c),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,h));break;case"YZX":this._z=Math.asin(un(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-p,h),this._y=Math.atan2(-g,r)):(this._x=0,this._y=Math.atan2(a,c));break;case"XZY":this._z=Math.asin(-un(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,h),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-p,c),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return eu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(eu,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return nu.setFromEuler(this),this.setFromQuaternion(nu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Zn.DEFAULT_ORDER="XYZ";var ta=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Ap=0,iu=new $,Rs=new Fn,di=new we,vo=new $,_r=new $,Rp=new $,Cp=new Fn,su=new $(1,0,0),ru=new $(0,1,0),ou=new $(0,0,1),au={type:"added"},Ip={type:"removed"},Cs={type:"childadded",child:null},ol={type:"childremoved",child:null},Fe=class n extends $i{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ap++}),this.uuid=oi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new $,e=new Zn,i=new Fn,s=new $(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new we},normalMatrix:{value:new Me}}),this.matrix=new we,this.matrixWorld=new we,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ta,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Rs.setFromAxisAngle(t,e),this.quaternion.multiply(Rs),this}rotateOnWorldAxis(t,e){return Rs.setFromAxisAngle(t,e),this.quaternion.premultiply(Rs),this}rotateX(t){return this.rotateOnAxis(su,t)}rotateY(t){return this.rotateOnAxis(ru,t)}rotateZ(t){return this.rotateOnAxis(ou,t)}translateOnAxis(t,e){return iu.copy(t).applyQuaternion(this.quaternion),this.position.add(iu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(su,t)}translateY(t){return this.translateOnAxis(ru,t)}translateZ(t){return this.translateOnAxis(ou,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(di.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?vo.copy(t):vo.set(t,e,i);let s=this.parent;this.updateWorldMatrix(!0,!1),_r.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?di.lookAt(_r,vo,this.up):di.lookAt(vo,_r,this.up),this.quaternion.setFromRotationMatrix(di),s&&(di.extractRotation(s.matrixWorld),Rs.setFromRotationMatrix(di),this.quaternion.premultiply(Rs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(au),Cs.child=t,this.dispatchEvent(Cs),Cs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Ip),ol.child=t,this.dispatchEvent(ol),ol.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),di.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),di.multiply(t.parent.matrixWorld)),t.applyMatrix4(di),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(au),Cs.child=t,this.dispatchEvent(Cs),Cs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_r,t,Rp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_r,Cp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let h=0,p=l.length;h<p;h++){let g=l[h];r(t.shapes,g)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,h=this.material.length;l<h;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),h=o(t.textures),p=o(t.images),g=o(t.shapes),d=o(t.skeletons),c=o(t.animations),u=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),h.length>0&&(i.textures=h),p.length>0&&(i.images=p),g.length>0&&(i.shapes=g),d.length>0&&(i.skeletons=d),c.length>0&&(i.animations=c),u.length>0&&(i.nodes=u)}return i.object=s,i;function o(a){let l=[];for(let h in a){let p=a[h];delete p.metadata,l.push(p)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}};Fe.DEFAULT_UP=new $(0,1,0);Fe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Fe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var qn=new $,pi=new $,al=new $,mi=new $,Is=new $,Ps=new $,lu=new $,ll=new $,cl=new $,hl=new $,ul=new Ze,fl=new Ze,dl=new Ze,Oi=class n{constructor(t=new $,e=new $,i=new $){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),qn.subVectors(t,e),s.cross(qn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){qn.subVectors(s,e),pi.subVectors(i,e),al.subVectors(t,e);let o=qn.dot(qn),a=qn.dot(pi),l=qn.dot(al),h=pi.dot(pi),p=pi.dot(al),g=o*h-a*a;if(g===0)return r.set(0,0,0),null;let d=1/g,c=(h*l-a*p)*d,u=(o*p-a*l)*d;return r.set(1-c-u,u,c)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,mi)===null?!1:mi.x>=0&&mi.y>=0&&mi.x+mi.y<=1}static getInterpolation(t,e,i,s,r,o,a,l){return this.getBarycoord(t,e,i,s,mi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,mi.x),l.addScaledVector(o,mi.y),l.addScaledVector(a,mi.z),l)}static getInterpolatedAttribute(t,e,i,s,r,o){return ul.setScalar(0),fl.setScalar(0),dl.setScalar(0),ul.fromBufferAttribute(t,e),fl.fromBufferAttribute(t,i),dl.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(ul,r.x),o.addScaledVector(fl,r.y),o.addScaledVector(dl,r.z),o}static isFrontFacing(t,e,i,s){return qn.subVectors(i,e),pi.subVectors(t,e),qn.cross(pi).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return qn.subVectors(this.c,this.b),pi.subVectors(this.a,this.b),qn.cross(pi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return n.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return n.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,s=this.b,r=this.c,o,a;Is.subVectors(s,i),Ps.subVectors(r,i),ll.subVectors(t,i);let l=Is.dot(ll),h=Ps.dot(ll);if(l<=0&&h<=0)return e.copy(i);cl.subVectors(t,s);let p=Is.dot(cl),g=Ps.dot(cl);if(p>=0&&g<=p)return e.copy(s);let d=l*g-p*h;if(d<=0&&l>=0&&p<=0)return o=l/(l-p),e.copy(i).addScaledVector(Is,o);hl.subVectors(t,r);let c=Is.dot(hl),u=Ps.dot(hl);if(u>=0&&c<=u)return e.copy(r);let _=c*h-l*u;if(_<=0&&h>=0&&u<=0)return a=h/(h-u),e.copy(i).addScaledVector(Ps,a);let m=p*u-c*g;if(m<=0&&g-p>=0&&c-u>=0)return lu.subVectors(r,s),a=(g-p)/(g-p+(c-u)),e.copy(s).addScaledVector(lu,a);let f=1/(m+_+d);return o=_*f,a=d*f,e.copy(i).addScaledVector(Is,o).addScaledVector(Ps,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},pf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ui={h:0,s:0,l:0},_o={h:0,s:0,l:0};function pl(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}var oe=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=hn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ce.toWorkingColorSpace(this,e),this}setRGB(t,e,i,s=Ce.workingColorSpace){return this.r=t,this.g=e,this.b=i,Ce.toWorkingColorSpace(this,s),this}setHSL(t,e,i,s=Ce.workingColorSpace){if(t=ah(t,1),e=un(e,0,1),i=un(i,0,1),e===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=pl(o,r,t+1/3),this.g=pl(o,r,t),this.b=pl(o,r,t-1/3)}return Ce.toWorkingColorSpace(this,s),this}setStyle(t,e=hn){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=hn){let i=pf[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=vi(t.r),this.g=vi(t.g),this.b=vi(t.b),this}copyLinearToSRGB(t){return this.r=Ws(t.r),this.g=Ws(t.g),this.b=Ws(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=hn){return Ce.fromWorkingColorSpace(xn.copy(this),t),Math.round(un(xn.r*255,0,255))*65536+Math.round(un(xn.g*255,0,255))*256+Math.round(un(xn.b*255,0,255))}getHexString(t=hn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Ce.workingColorSpace){Ce.fromWorkingColorSpace(xn.copy(this),e);let i=xn.r,s=xn.g,r=xn.b,o=Math.max(i,s,r),a=Math.min(i,s,r),l,h,p=(a+o)/2;if(a===o)l=0,h=0;else{let g=o-a;switch(h=p<=.5?g/(o+a):g/(2-o-a),o){case i:l=(s-r)/g+(s<r?6:0);break;case s:l=(r-i)/g+2;break;case r:l=(i-s)/g+4;break}l/=6}return t.h=l,t.s=h,t.l=p,t}getRGB(t,e=Ce.workingColorSpace){return Ce.fromWorkingColorSpace(xn.copy(this),e),t.r=xn.r,t.g=xn.g,t.b=xn.b,t}getStyle(t=hn){Ce.fromWorkingColorSpace(xn.copy(this),t);let e=xn.r,i=xn.g,s=xn.b;return t!==hn?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(Ui),this.setHSL(Ui.h+t,Ui.s+e,Ui.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Ui),t.getHSL(_o);let i=Pr(Ui.h,_o.h,e),s=Pr(Ui.s,_o.s,e),r=Pr(Ui.l,_o.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},xn=new oe;oe.NAMES=pf;var Pp=0,Si=class extends $i{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Pp++}),this.uuid=oi(),this.name="",this.blending=Vs,this.side=Hi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Il,this.blendDst=Pl,this.blendEquation=as,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new oe(0,0,0),this.blendAlpha=0,this.depthFunc=qs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Wh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=bs,this.stencilZFail=bs,this.stencilZPass=bs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Vs&&(i.blending=this.blending),this.side!==Hi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Il&&(i.blendSrc=this.blendSrc),this.blendDst!==Pl&&(i.blendDst=this.blendDst),this.blendEquation!==as&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==qs&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Wh&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==bs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==bs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==bs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Rn=class extends Si{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new oe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zn,this.combine=Qu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var en=new $,Mo=new Bt,$e=class{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=mc,this.updateRanges=[],this.gpuType=si,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Mo.fromBufferAttribute(this,e),Mo.applyMatrix3(t),this.setXY(e,Mo.x,Mo.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)en.fromBufferAttribute(this,e),en.applyMatrix3(t),this.setXYZ(e,en.x,en.y,en.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)en.fromBufferAttribute(this,e),en.applyMatrix4(t),this.setXYZ(e,en.x,en.y,en.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)en.fromBufferAttribute(this,e),en.applyNormalMatrix(t),this.setXYZ(e,en.x,en.y,en.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)en.fromBufferAttribute(this,e),en.transformDirection(t),this.setXYZ(e,en.x,en.y,en.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Yn(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=ke(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Yn(e,this.array)),e}setX(t,e){return this.normalized&&(e=ke(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Yn(e,this.array)),e}setY(t,e){return this.normalized&&(e=ke(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Yn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ke(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Yn(e,this.array)),e}setW(t,e){return this.normalized&&(e=ke(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=ke(e,this.array),i=ke(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=ke(e,this.array),i=ke(i,this.array),s=ke(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=ke(e,this.array),i=ke(i,this.array),s=ke(s,this.array),r=ke(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==mc&&(t.usage=this.usage),t}};var ea=class extends $e{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var na=class extends $e{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var me=class extends $e{constructor(t,e,i){super(new Float32Array(t),e,i)}},Lp=0,Nn=new we,ml=new Fe,Ls=new $,Ln=new bi,Mr=new bi,cn=new $,Oe=class n extends $i{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Lp++}),this.uuid=oi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(df(t)?na:ea)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Me().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Nn.makeRotationFromQuaternion(t),this.applyMatrix4(Nn),this}rotateX(t){return Nn.makeRotationX(t),this.applyMatrix4(Nn),this}rotateY(t){return Nn.makeRotationY(t),this.applyMatrix4(Nn),this}rotateZ(t){return Nn.makeRotationZ(t),this.applyMatrix4(Nn),this}translate(t,e,i){return Nn.makeTranslation(t,e,i),this.applyMatrix4(Nn),this}scale(t,e,i){return Nn.makeScale(t,e,i),this.applyMatrix4(Nn),this}lookAt(t){return ml.lookAt(t),ml.updateMatrix(),this.applyMatrix4(ml.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ls).negate(),this.translate(Ls.x,Ls.y,Ls.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new me(i,3))}else{for(let i=0,s=e.count;i<s;i++){let r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new bi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new $(-1/0,-1/0,-1/0),new $(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){let r=e[i];Ln.setFromBufferAttribute(r),this.morphTargetsRelative?(cn.addVectors(this.boundingBox.min,Ln.min),this.boundingBox.expandByPoint(cn),cn.addVectors(this.boundingBox.max,Ln.max),this.boundingBox.expandByPoint(cn)):(this.boundingBox.expandByPoint(Ln.min),this.boundingBox.expandByPoint(Ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Vi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new $,1/0);return}if(t){let i=this.boundingSphere.center;if(Ln.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];Mr.setFromBufferAttribute(a),this.morphTargetsRelative?(cn.addVectors(Ln.min,Mr.min),Ln.expandByPoint(cn),cn.addVectors(Ln.max,Mr.max),Ln.expandByPoint(cn)):(Ln.expandByPoint(Mr.min),Ln.expandByPoint(Mr.max))}Ln.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)cn.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(cn));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let h=0,p=a.count;h<p;h++)cn.fromBufferAttribute(a,h),l&&(Ls.fromBufferAttribute(t,h),cn.add(Ls)),s=Math.max(s,i.distanceToSquared(cn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new $e(new Float32Array(4*i.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let R=0;R<i.count;R++)a[R]=new $,l[R]=new $;let h=new $,p=new $,g=new $,d=new Bt,c=new Bt,u=new Bt,_=new $,m=new $;function f(R,M,v){h.fromBufferAttribute(i,R),p.fromBufferAttribute(i,M),g.fromBufferAttribute(i,v),d.fromBufferAttribute(r,R),c.fromBufferAttribute(r,M),u.fromBufferAttribute(r,v),p.sub(h),g.sub(h),c.sub(d),u.sub(d);let b=1/(c.x*u.y-u.x*c.y);isFinite(b)&&(_.copy(p).multiplyScalar(u.y).addScaledVector(g,-c.y).multiplyScalar(b),m.copy(g).multiplyScalar(c.x).addScaledVector(p,-u.x).multiplyScalar(b),a[R].add(_),a[M].add(_),a[v].add(_),l[R].add(m),l[M].add(m),l[v].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:t.count}]);for(let R=0,M=S.length;R<M;++R){let v=S[R],b=v.start,I=v.count;for(let T=b,E=b+I;T<E;T+=3)f(t.getX(T+0),t.getX(T+1),t.getX(T+2))}let x=new $,y=new $,k=new $,w=new $;function C(R){k.fromBufferAttribute(s,R),w.copy(k);let M=a[R];x.copy(M),x.sub(k.multiplyScalar(k.dot(M))).normalize(),y.crossVectors(w,M);let b=y.dot(l[R])<0?-1:1;o.setXYZW(R,x.x,x.y,x.z,b)}for(let R=0,M=S.length;R<M;++R){let v=S[R],b=v.start,I=v.count;for(let T=b,E=b+I;T<E;T+=3)C(t.getX(T+0)),C(t.getX(T+1)),C(t.getX(T+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new $e(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let d=0,c=i.count;d<c;d++)i.setXYZ(d,0,0,0);let s=new $,r=new $,o=new $,a=new $,l=new $,h=new $,p=new $,g=new $;if(t)for(let d=0,c=t.count;d<c;d+=3){let u=t.getX(d+0),_=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,u),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,m),p.subVectors(o,r),g.subVectors(s,r),p.cross(g),a.fromBufferAttribute(i,u),l.fromBufferAttribute(i,_),h.fromBufferAttribute(i,m),a.add(p),l.add(p),h.add(p),i.setXYZ(u,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,h.x,h.y,h.z)}else for(let d=0,c=e.count;d<c;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),p.subVectors(o,r),g.subVectors(s,r),p.cross(g),i.setXYZ(d+0,p.x,p.y,p.z),i.setXYZ(d+1,p.x,p.y,p.z),i.setXYZ(d+2,p.x,p.y,p.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)cn.fromBufferAttribute(t,e),cn.normalize(),t.setXYZ(e,cn.x,cn.y,cn.z)}toNonIndexed(){function t(a,l){let h=a.array,p=a.itemSize,g=a.normalized,d=new h.constructor(l.length*p),c=0,u=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?c=l[_]*a.data.stride+a.offset:c=l[_]*p;for(let f=0;f<p;f++)d[u++]=h[c++]}return new $e(d,p,g)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new n,i=this.index.array,s=this.attributes;for(let a in s){let l=s[a],h=t(l,i);e.setAttribute(a,h)}let r=this.morphAttributes;for(let a in r){let l=[],h=r[a];for(let p=0,g=h.length;p<g;p++){let d=h[p],c=t(d,i);l.push(c)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let h=o[a];e.addGroup(h.start,h.count,h.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let h in l)l[h]!==void 0&&(t[h]=l[h]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let l in i){let h=i[l];t.data.attributes[l]=h.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let h=this.morphAttributes[l],p=[];for(let g=0,d=h.length;g<d;g++){let c=h[g];p.push(c.toJSON(t.data))}p.length>0&&(s[l]=p,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone(e));let s=t.attributes;for(let h in s){let p=s[h];this.setAttribute(h,p.clone(e))}let r=t.morphAttributes;for(let h in r){let p=[],g=r[h];for(let d=0,c=g.length;d<c;d++)p.push(g[d].clone(e));this.morphAttributes[h]=p}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let h=0,p=o.length;h<p;h++){let g=o[h];this.addGroup(g.start,g.count,g.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},cu=new we,ns=new Qo,bo=new Vi,hu=new $,So=new $,wo=new $,Eo=new $,gl=new $,To=new $,uu=new $,Ao=new $,De=class extends Fe{constructor(t=new Oe,e=new Rn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){To.set(0,0,0);for(let l=0,h=r.length;l<h;l++){let p=a[l],g=r[l];p!==0&&(gl.fromBufferAttribute(g,t),o?To.addScaledVector(gl,p):To.addScaledVector(gl.sub(e),p))}e.add(To)}return e}raycast(t,e){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),bo.copy(i.boundingSphere),bo.applyMatrix4(r),ns.copy(t.ray).recast(t.near),!(bo.containsPoint(ns.origin)===!1&&(ns.intersectSphere(bo,hu)===null||ns.origin.distanceToSquared(hu)>(t.far-t.near)**2))&&(cu.copy(r).invert(),ns.copy(t.ray).applyMatrix4(cu),!(i.boundingBox!==null&&ns.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,ns)))}_computeIntersections(t,e,i){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,h=r.attributes.uv,p=r.attributes.uv1,g=r.attributes.normal,d=r.groups,c=r.drawRange;if(a!==null)if(Array.isArray(o))for(let u=0,_=d.length;u<_;u++){let m=d[u],f=o[m.materialIndex],S=Math.max(m.start,c.start),x=Math.min(a.count,Math.min(m.start+m.count,c.start+c.count));for(let y=S,k=x;y<k;y+=3){let w=a.getX(y),C=a.getX(y+1),R=a.getX(y+2);s=Ro(this,f,t,i,h,p,g,w,C,R),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let u=Math.max(0,c.start),_=Math.min(a.count,c.start+c.count);for(let m=u,f=_;m<f;m+=3){let S=a.getX(m),x=a.getX(m+1),y=a.getX(m+2);s=Ro(this,o,t,i,h,p,g,S,x,y),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let u=0,_=d.length;u<_;u++){let m=d[u],f=o[m.materialIndex],S=Math.max(m.start,c.start),x=Math.min(l.count,Math.min(m.start+m.count,c.start+c.count));for(let y=S,k=x;y<k;y+=3){let w=y,C=y+1,R=y+2;s=Ro(this,f,t,i,h,p,g,w,C,R),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let u=Math.max(0,c.start),_=Math.min(l.count,c.start+c.count);for(let m=u,f=_;m<f;m+=3){let S=m,x=m+1,y=m+2;s=Ro(this,o,t,i,h,p,g,S,x,y),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function kp(n,t,e,i,s,r,o,a){let l;if(t.side===fn?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,t.side===Hi,a),l===null)return null;Ao.copy(a),Ao.applyMatrix4(n.matrixWorld);let h=e.ray.origin.distanceTo(Ao);return h<e.near||h>e.far?null:{distance:h,point:Ao.clone(),object:n}}function Ro(n,t,e,i,s,r,o,a,l,h){n.getVertexPosition(a,So),n.getVertexPosition(l,wo),n.getVertexPosition(h,Eo);let p=kp(n,t,e,i,So,wo,Eo,uu);if(p){let g=new $;Oi.getBarycoord(uu,So,wo,Eo,g),s&&(p.uv=Oi.getInterpolatedAttribute(s,a,l,h,g,new Bt)),r&&(p.uv1=Oi.getInterpolatedAttribute(r,a,l,h,g,new Bt)),o&&(p.normal=Oi.getInterpolatedAttribute(o,a,l,h,g,new $),p.normal.dot(i.direction)>0&&p.normal.multiplyScalar(-1));let d={a,b:l,c:h,normal:new $,materialIndex:0};Oi.getNormal(So,wo,Eo,d.normal),p.face=d,p.barycoord=g}return p}var Te=class n extends Oe{constructor(t=1,e=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],h=[],p=[],g=[],d=0,c=0;u("z","y","x",-1,-1,i,e,t,o,r,0),u("z","y","x",1,-1,i,e,-t,o,r,1),u("x","z","y",1,1,t,i,e,s,o,2),u("x","z","y",1,-1,t,i,-e,s,o,3),u("x","y","z",1,-1,t,e,i,s,r,4),u("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new me(h,3)),this.setAttribute("normal",new me(p,3)),this.setAttribute("uv",new me(g,2));function u(_,m,f,S,x,y,k,w,C,R,M){let v=y/C,b=k/R,I=y/2,T=k/2,E=w/2,F=C+1,U=R+1,B=0,z=0,W=new $;for(let it=0;it<U;it++){let D=it*b-T;for(let ft=0;ft<F;ft++){let Lt=ft*v-I;W[_]=Lt*S,W[m]=D*x,W[f]=E,h.push(W.x,W.y,W.z),W[_]=0,W[m]=0,W[f]=w>0?1:-1,p.push(W.x,W.y,W.z),g.push(ft/C),g.push(1-it/R),B+=1}}for(let it=0;it<R;it++)for(let D=0;D<C;D++){let ft=d+D+F*it,Lt=d+D+F*(it+1),O=d+(D+1)+F*(it+1),X=d+(D+1)+F*it;l.push(ft,Lt,X),l.push(Lt,O,X),z+=6}a.addGroup(c,z,M),c+=z,d+=B}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function js(n){let t={};for(let e in n){t[e]={};for(let i in n[e]){let s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function Mn(n){let t={};for(let e=0;e<n.length;e++){let i=js(n[e]);for(let s in i)t[s]=i[s]}return t}function Dp(n){let t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function mf(n){let t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ce.workingColorSpace}var lh={clone:js,merge:Mn},Up=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Np=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,wn=class extends Si{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Up,this.fragmentShader=Np,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=js(t.uniforms),this.uniformsGroups=Dp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}},ia=class extends Fe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new we,this.projectionMatrix=new we,this.projectionMatrixInverse=new we,this.coordinateSystem=xi}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Ni=new $,fu=new Bt,du=new Bt,bn=class extends ia{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Nr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Ir*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Nr*2*Math.atan(Math.tan(Ir*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Ni.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ni.x,Ni.y).multiplyScalar(-t/Ni.z),Ni.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ni.x,Ni.y).multiplyScalar(-t/Ni.z)}getViewSize(t,e){return this.getViewBounds(t,fu,du),e.subVectors(du,fu)}setViewOffset(t,e,i,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Ir*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,h=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*i/h,s*=o.width/l,i*=o.height/h}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},ks=-90,Ds=1,vc=class extends Fe{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new bn(ks,Ds,t,e);s.layers=this.layers,this.add(s);let r=new bn(ks,Ds,t,e);r.layers=this.layers,this.add(r);let o=new bn(ks,Ds,t,e);o.layers=this.layers,this.add(o);let a=new bn(ks,Ds,t,e);a.layers=this.layers,this.add(a);let l=new bn(ks,Ds,t,e);l.layers=this.layers,this.add(l);let h=new bn(ks,Ds,t,e);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,s,r,o,a,l]=e;for(let h of e)this.remove(h);if(t===xi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Zo)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let h of e)this.add(h),h.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,h,p]=this.children,g=t.getRenderTarget(),d=t.getActiveCubeFace(),c=t.getActiveMipmapLevel(),u=t.xr.enabled;t.xr.enabled=!1;let _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,r),t.setRenderTarget(i,1,s),t.render(e,o),t.setRenderTarget(i,2,s),t.render(e,a),t.setRenderTarget(i,3,s),t.render(e,l),t.setRenderTarget(i,4,s),t.render(e,h),i.texture.generateMipmaps=_,t.setRenderTarget(i,5,s),t.render(e,p),t.setRenderTarget(g,d,c),t.xr.enabled=u,i.texture.needsPMREMUpdate=!0}},sa=class extends An{constructor(t,e,i,s,r,o,a,l,h,p){t=t!==void 0?t:[],e=e!==void 0?e:Ys,super(t,e,i,s,r,o,a,l,h,p),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},_c=class extends Mi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new sa(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:ii}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Te(5,5,5),r=new wn({name:"CubemapFromEquirect",uniforms:js(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:fn,blending:Bi});r.uniforms.tEquirect.value=e;let o=new De(s,r),a=e.minFilter;return e.minFilter===hs&&(e.minFilter=ii),new vc(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,i,s){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,s);t.setRenderTarget(r)}},yl=new $,Fp=new $,Op=new Me,yi=class{constructor(t=new $(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let s=yl.subVectors(i,e).cross(Fp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let i=t.delta(yl),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||Op.getNormalMatrix(t),s=this.coplanarPoint(yl).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},is=new Vi,Co=new $,Fr=class{constructor(t=new yi,e=new yi,i=new yi,s=new yi,r=new yi,o=new yi){this.planes=[t,e,i,s,r,o]}set(t,e,i,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=xi){let i=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],h=s[4],p=s[5],g=s[6],d=s[7],c=s[8],u=s[9],_=s[10],m=s[11],f=s[12],S=s[13],x=s[14],y=s[15];if(i[0].setComponents(l-r,d-h,m-c,y-f).normalize(),i[1].setComponents(l+r,d+h,m+c,y+f).normalize(),i[2].setComponents(l+o,d+p,m+u,y+S).normalize(),i[3].setComponents(l-o,d-p,m-u,y-S).normalize(),i[4].setComponents(l-a,d-g,m-_,y-x).normalize(),e===xi)i[5].setComponents(l+a,d+g,m+_,y+x).normalize();else if(e===Zo)i[5].setComponents(a,g,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),is.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),is.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(is)}intersectsSprite(t){return is.center.set(0,0,0),is.radius=.7071067811865476,is.applyMatrix4(t.matrixWorld),this.intersectsSphere(is)}intersectsSphere(t){let e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let s=e[i];if(Co.x=s.normal.x>0?t.max.x:t.min.x,Co.y=s.normal.y>0?t.max.y:t.min.y,Co.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Co)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function gf(){let n=null,t=!1,e=null,i=null;function s(r,o){e(r,o),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function Bp(n){let t=new WeakMap;function e(a,l){let h=a.array,p=a.usage,g=h.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,h,p),a.onUploadCallback();let c;if(h instanceof Float32Array)c=n.FLOAT;else if(h instanceof Uint16Array)a.isFloat16BufferAttribute?c=n.HALF_FLOAT:c=n.UNSIGNED_SHORT;else if(h instanceof Int16Array)c=n.SHORT;else if(h instanceof Uint32Array)c=n.UNSIGNED_INT;else if(h instanceof Int32Array)c=n.INT;else if(h instanceof Int8Array)c=n.BYTE;else if(h instanceof Uint8Array)c=n.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)c=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:d,type:c,bytesPerElement:h.BYTES_PER_ELEMENT,version:a.version,size:g}}function i(a,l,h){let p=l.array,g=l.updateRanges;if(n.bindBuffer(h,a),g.length===0)n.bufferSubData(h,0,p);else{g.sort((c,u)=>c.start-u.start);let d=0;for(let c=1;c<g.length;c++){let u=g[d],_=g[c];_.start<=u.start+u.count+1?u.count=Math.max(u.count,_.start+_.count-u.start):(++d,g[d]=_)}g.length=d+1;for(let c=0,u=g.length;c<u;c++){let _=g[c];n.bufferSubData(h,_.start*p.BYTES_PER_ELEMENT,p,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(n.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let p=t.get(a);(!p||p.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let h=t.get(a);if(h===void 0)t.set(a,e(a,l));else if(h.version<a.version){if(h.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(h.buffer,a,l),h.version=a.version}}return{get:s,remove:r,update:o}}var dn=class n extends Oe{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(i),l=Math.floor(s),h=a+1,p=l+1,g=t/a,d=e/l,c=[],u=[],_=[],m=[];for(let f=0;f<p;f++){let S=f*d-o;for(let x=0;x<h;x++){let y=x*g-r;u.push(y,-S,0),_.push(0,0,1),m.push(x/a),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let S=0;S<a;S++){let x=S+h*f,y=S+h*(f+1),k=S+1+h*(f+1),w=S+1+h*f;c.push(x,y,w),c.push(y,k,w)}this.setIndex(c),this.setAttribute("position",new me(u,3)),this.setAttribute("normal",new me(_,3)),this.setAttribute("uv",new me(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.widthSegments,t.heightSegments)}},zp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Hp=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,$p=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Vp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Gp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Wp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Xp=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,qp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Yp=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Zp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Jp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Kp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,jp=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Qp=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,tm=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,em=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,nm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,im=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,sm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,rm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,om=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,am=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,lm=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,cm=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,hm=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,um=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,fm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,dm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,pm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,mm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,gm="gl_FragColor = linearToOutputTexel( gl_FragColor );",ym=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,xm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,vm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,_m=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Mm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,bm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Sm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,wm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Em=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Tm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Am=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Rm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Cm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Im=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Pm=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Lm=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,km=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Dm=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Um=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Nm=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Fm=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Om=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Bm=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,zm=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Hm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,$m=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Vm=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Gm=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Wm=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Xm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,qm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ym=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Zm=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Jm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Km=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,jm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Qm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,t0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,e0=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,n0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,i0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,s0=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,r0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,o0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,a0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,l0=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,c0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,h0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,u0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,f0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,d0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,p0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,m0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,g0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,y0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,x0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,v0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,_0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,M0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,b0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,S0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,w0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,E0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,T0=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,A0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,R0=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,C0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,I0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,P0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,L0=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,k0=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,D0=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,U0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,N0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,F0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,O0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,B0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,z0=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,H0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$0=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,V0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,G0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,W0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,X0=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,q0=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Y0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Z0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,J0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,K0=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,j0=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Q0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,tg=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,eg=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ng=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ig=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,sg=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rg=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,og=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,ag=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,lg=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cg=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,hg=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ug=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,fg=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dg=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,pg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,mg=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,gg=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,yg=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,xg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ge={alphahash_fragment:zp,alphahash_pars_fragment:Hp,alphamap_fragment:$p,alphamap_pars_fragment:Vp,alphatest_fragment:Gp,alphatest_pars_fragment:Wp,aomap_fragment:Xp,aomap_pars_fragment:qp,batching_pars_vertex:Yp,batching_vertex:Zp,begin_vertex:Jp,beginnormal_vertex:Kp,bsdfs:jp,iridescence_fragment:Qp,bumpmap_pars_fragment:tm,clipping_planes_fragment:em,clipping_planes_pars_fragment:nm,clipping_planes_pars_vertex:im,clipping_planes_vertex:sm,color_fragment:rm,color_pars_fragment:om,color_pars_vertex:am,color_vertex:lm,common:cm,cube_uv_reflection_fragment:hm,defaultnormal_vertex:um,displacementmap_pars_vertex:fm,displacementmap_vertex:dm,emissivemap_fragment:pm,emissivemap_pars_fragment:mm,colorspace_fragment:gm,colorspace_pars_fragment:ym,envmap_fragment:xm,envmap_common_pars_fragment:vm,envmap_pars_fragment:_m,envmap_pars_vertex:Mm,envmap_physical_pars_fragment:Lm,envmap_vertex:bm,fog_vertex:Sm,fog_pars_vertex:wm,fog_fragment:Em,fog_pars_fragment:Tm,gradientmap_pars_fragment:Am,lightmap_pars_fragment:Rm,lights_lambert_fragment:Cm,lights_lambert_pars_fragment:Im,lights_pars_begin:Pm,lights_toon_fragment:km,lights_toon_pars_fragment:Dm,lights_phong_fragment:Um,lights_phong_pars_fragment:Nm,lights_physical_fragment:Fm,lights_physical_pars_fragment:Om,lights_fragment_begin:Bm,lights_fragment_maps:zm,lights_fragment_end:Hm,logdepthbuf_fragment:$m,logdepthbuf_pars_fragment:Vm,logdepthbuf_pars_vertex:Gm,logdepthbuf_vertex:Wm,map_fragment:Xm,map_pars_fragment:qm,map_particle_fragment:Ym,map_particle_pars_fragment:Zm,metalnessmap_fragment:Jm,metalnessmap_pars_fragment:Km,morphinstance_vertex:jm,morphcolor_vertex:Qm,morphnormal_vertex:t0,morphtarget_pars_vertex:e0,morphtarget_vertex:n0,normal_fragment_begin:i0,normal_fragment_maps:s0,normal_pars_fragment:r0,normal_pars_vertex:o0,normal_vertex:a0,normalmap_pars_fragment:l0,clearcoat_normal_fragment_begin:c0,clearcoat_normal_fragment_maps:h0,clearcoat_pars_fragment:u0,iridescence_pars_fragment:f0,opaque_fragment:d0,packing:p0,premultiplied_alpha_fragment:m0,project_vertex:g0,dithering_fragment:y0,dithering_pars_fragment:x0,roughnessmap_fragment:v0,roughnessmap_pars_fragment:_0,shadowmap_pars_fragment:M0,shadowmap_pars_vertex:b0,shadowmap_vertex:S0,shadowmask_pars_fragment:w0,skinbase_vertex:E0,skinning_pars_vertex:T0,skinning_vertex:A0,skinnormal_vertex:R0,specularmap_fragment:C0,specularmap_pars_fragment:I0,tonemapping_fragment:P0,tonemapping_pars_fragment:L0,transmission_fragment:k0,transmission_pars_fragment:D0,uv_pars_fragment:U0,uv_pars_vertex:N0,uv_vertex:F0,worldpos_vertex:O0,background_vert:B0,background_frag:z0,backgroundCube_vert:H0,backgroundCube_frag:$0,cube_vert:V0,cube_frag:G0,depth_vert:W0,depth_frag:X0,distanceRGBA_vert:q0,distanceRGBA_frag:Y0,equirect_vert:Z0,equirect_frag:J0,linedashed_vert:K0,linedashed_frag:j0,meshbasic_vert:Q0,meshbasic_frag:tg,meshlambert_vert:eg,meshlambert_frag:ng,meshmatcap_vert:ig,meshmatcap_frag:sg,meshnormal_vert:rg,meshnormal_frag:og,meshphong_vert:ag,meshphong_frag:lg,meshphysical_vert:cg,meshphysical_frag:hg,meshtoon_vert:ug,meshtoon_frag:fg,points_vert:dg,points_frag:pg,shadow_vert:mg,shadow_frag:gg,sprite_vert:yg,sprite_frag:xg},jt={common:{diffuse:{value:new oe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Me},alphaMap:{value:null},alphaMapTransform:{value:new Me},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Me}},envmap:{envMap:{value:null},envMapRotation:{value:new Me},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Me}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Me}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Me},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Me},normalScale:{value:new Bt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Me},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Me}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Me}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Me}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new oe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new oe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Me},alphaTest:{value:0},uvTransform:{value:new Me}},sprite:{diffuse:{value:new oe(16777215)},opacity:{value:1},center:{value:new Bt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Me},alphaMap:{value:null},alphaMapTransform:{value:new Me},alphaTest:{value:0}}},ni={basic:{uniforms:Mn([jt.common,jt.specularmap,jt.envmap,jt.aomap,jt.lightmap,jt.fog]),vertexShader:ge.meshbasic_vert,fragmentShader:ge.meshbasic_frag},lambert:{uniforms:Mn([jt.common,jt.specularmap,jt.envmap,jt.aomap,jt.lightmap,jt.emissivemap,jt.bumpmap,jt.normalmap,jt.displacementmap,jt.fog,jt.lights,{emissive:{value:new oe(0)}}]),vertexShader:ge.meshlambert_vert,fragmentShader:ge.meshlambert_frag},phong:{uniforms:Mn([jt.common,jt.specularmap,jt.envmap,jt.aomap,jt.lightmap,jt.emissivemap,jt.bumpmap,jt.normalmap,jt.displacementmap,jt.fog,jt.lights,{emissive:{value:new oe(0)},specular:{value:new oe(1118481)},shininess:{value:30}}]),vertexShader:ge.meshphong_vert,fragmentShader:ge.meshphong_frag},standard:{uniforms:Mn([jt.common,jt.envmap,jt.aomap,jt.lightmap,jt.emissivemap,jt.bumpmap,jt.normalmap,jt.displacementmap,jt.roughnessmap,jt.metalnessmap,jt.fog,jt.lights,{emissive:{value:new oe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ge.meshphysical_vert,fragmentShader:ge.meshphysical_frag},toon:{uniforms:Mn([jt.common,jt.aomap,jt.lightmap,jt.emissivemap,jt.bumpmap,jt.normalmap,jt.displacementmap,jt.gradientmap,jt.fog,jt.lights,{emissive:{value:new oe(0)}}]),vertexShader:ge.meshtoon_vert,fragmentShader:ge.meshtoon_frag},matcap:{uniforms:Mn([jt.common,jt.bumpmap,jt.normalmap,jt.displacementmap,jt.fog,{matcap:{value:null}}]),vertexShader:ge.meshmatcap_vert,fragmentShader:ge.meshmatcap_frag},points:{uniforms:Mn([jt.points,jt.fog]),vertexShader:ge.points_vert,fragmentShader:ge.points_frag},dashed:{uniforms:Mn([jt.common,jt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ge.linedashed_vert,fragmentShader:ge.linedashed_frag},depth:{uniforms:Mn([jt.common,jt.displacementmap]),vertexShader:ge.depth_vert,fragmentShader:ge.depth_frag},normal:{uniforms:Mn([jt.common,jt.bumpmap,jt.normalmap,jt.displacementmap,{opacity:{value:1}}]),vertexShader:ge.meshnormal_vert,fragmentShader:ge.meshnormal_frag},sprite:{uniforms:Mn([jt.sprite,jt.fog]),vertexShader:ge.sprite_vert,fragmentShader:ge.sprite_frag},background:{uniforms:{uvTransform:{value:new Me},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ge.background_vert,fragmentShader:ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Me}},vertexShader:ge.backgroundCube_vert,fragmentShader:ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ge.cube_vert,fragmentShader:ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ge.equirect_vert,fragmentShader:ge.equirect_frag},distanceRGBA:{uniforms:Mn([jt.common,jt.displacementmap,{referencePosition:{value:new $},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ge.distanceRGBA_vert,fragmentShader:ge.distanceRGBA_frag},shadow:{uniforms:Mn([jt.lights,jt.fog,{color:{value:new oe(0)},opacity:{value:1}}]),vertexShader:ge.shadow_vert,fragmentShader:ge.shadow_frag}};ni.physical={uniforms:Mn([ni.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Me},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Me},clearcoatNormalScale:{value:new Bt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Me},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Me},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Me},sheen:{value:0},sheenColor:{value:new oe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Me},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Me},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Me},transmissionSamplerSize:{value:new Bt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Me},attenuationDistance:{value:0},attenuationColor:{value:new oe(0)},specularColor:{value:new oe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Me},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Me},anisotropyVector:{value:new Bt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Me}}]),vertexShader:ge.meshphysical_vert,fragmentShader:ge.meshphysical_frag};var Io={r:0,b:0,g:0},ss=new Zn,vg=new we;function _g(n,t,e,i,s,r,o){let a=new oe(0),l=r===!0?0:1,h,p,g=null,d=0,c=null;function u(S){let x=S.isScene===!0?S.background:null;return x&&x.isTexture&&(x=(S.backgroundBlurriness>0?e:t).get(x)),x}function _(S){let x=!1,y=u(S);y===null?f(a,l):y&&y.isColor&&(f(y,1),x=!0);let k=n.xr.getEnvironmentBlendMode();k==="additive"?i.buffers.color.setClear(0,0,0,1,o):k==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||x)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(S,x){let y=u(x);y&&(y.isCubeTexture||y.mapping===Ca)?(p===void 0&&(p=new De(new Te(1,1,1),new wn({name:"BackgroundCubeMaterial",uniforms:js(ni.backgroundCube.uniforms),vertexShader:ni.backgroundCube.vertexShader,fragmentShader:ni.backgroundCube.fragmentShader,side:fn,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(k,w,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(p)),ss.copy(x.backgroundRotation),ss.x*=-1,ss.y*=-1,ss.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(ss.y*=-1,ss.z*=-1),p.material.uniforms.envMap.value=y,p.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,p.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(vg.makeRotationFromEuler(ss)),p.material.toneMapped=Ce.getTransfer(y.colorSpace)!==Ne,(g!==y||d!==y.version||c!==n.toneMapping)&&(p.material.needsUpdate=!0,g=y,d=y.version,c=n.toneMapping),p.layers.enableAll(),S.unshift(p,p.geometry,p.material,0,0,null)):y&&y.isTexture&&(h===void 0&&(h=new De(new dn(2,2),new wn({name:"BackgroundMaterial",uniforms:js(ni.background.uniforms),vertexShader:ni.background.vertexShader,fragmentShader:ni.background.fragmentShader,side:Hi,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(h)),h.material.uniforms.t2D.value=y,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.toneMapped=Ce.getTransfer(y.colorSpace)!==Ne,y.matrixAutoUpdate===!0&&y.updateMatrix(),h.material.uniforms.uvTransform.value.copy(y.matrix),(g!==y||d!==y.version||c!==n.toneMapping)&&(h.material.needsUpdate=!0,g=y,d=y.version,c=n.toneMapping),h.layers.enableAll(),S.unshift(h,h.geometry,h.material,0,0,null))}function f(S,x){S.getRGB(Io,mf(n)),i.buffers.color.setClear(Io.r,Io.g,Io.b,x,o)}return{getClearColor:function(){return a},setClearColor:function(S,x=1){a.set(S),l=x,f(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(S){l=S,f(a,l)},render:_,addToRenderList:m}}function Mg(n,t){let e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=d(null),r=s,o=!1;function a(v,b,I,T,E){let F=!1,U=g(T,I,b);r!==U&&(r=U,h(r.object)),F=c(v,T,I,E),F&&u(v,T,I,E),E!==null&&t.update(E,n.ELEMENT_ARRAY_BUFFER),(F||o)&&(o=!1,y(v,b,I,T),E!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(E).buffer))}function l(){return n.createVertexArray()}function h(v){return n.bindVertexArray(v)}function p(v){return n.deleteVertexArray(v)}function g(v,b,I){let T=I.wireframe===!0,E=i[v.id];E===void 0&&(E={},i[v.id]=E);let F=E[b.id];F===void 0&&(F={},E[b.id]=F);let U=F[T];return U===void 0&&(U=d(l()),F[T]=U),U}function d(v){let b=[],I=[],T=[];for(let E=0;E<e;E++)b[E]=0,I[E]=0,T[E]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:b,enabledAttributes:I,attributeDivisors:T,object:v,attributes:{},index:null}}function c(v,b,I,T){let E=r.attributes,F=b.attributes,U=0,B=I.getAttributes();for(let z in B)if(B[z].location>=0){let it=E[z],D=F[z];if(D===void 0&&(z==="instanceMatrix"&&v.instanceMatrix&&(D=v.instanceMatrix),z==="instanceColor"&&v.instanceColor&&(D=v.instanceColor)),it===void 0||it.attribute!==D||D&&it.data!==D.data)return!0;U++}return r.attributesNum!==U||r.index!==T}function u(v,b,I,T){let E={},F=b.attributes,U=0,B=I.getAttributes();for(let z in B)if(B[z].location>=0){let it=F[z];it===void 0&&(z==="instanceMatrix"&&v.instanceMatrix&&(it=v.instanceMatrix),z==="instanceColor"&&v.instanceColor&&(it=v.instanceColor));let D={};D.attribute=it,it&&it.data&&(D.data=it.data),E[z]=D,U++}r.attributes=E,r.attributesNum=U,r.index=T}function _(){let v=r.newAttributes;for(let b=0,I=v.length;b<I;b++)v[b]=0}function m(v){f(v,0)}function f(v,b){let I=r.newAttributes,T=r.enabledAttributes,E=r.attributeDivisors;I[v]=1,T[v]===0&&(n.enableVertexAttribArray(v),T[v]=1),E[v]!==b&&(n.vertexAttribDivisor(v,b),E[v]=b)}function S(){let v=r.newAttributes,b=r.enabledAttributes;for(let I=0,T=b.length;I<T;I++)b[I]!==v[I]&&(n.disableVertexAttribArray(I),b[I]=0)}function x(v,b,I,T,E,F,U){U===!0?n.vertexAttribIPointer(v,b,I,E,F):n.vertexAttribPointer(v,b,I,T,E,F)}function y(v,b,I,T){_();let E=T.attributes,F=I.getAttributes(),U=b.defaultAttributeValues;for(let B in F){let z=F[B];if(z.location>=0){let W=E[B];if(W===void 0&&(B==="instanceMatrix"&&v.instanceMatrix&&(W=v.instanceMatrix),B==="instanceColor"&&v.instanceColor&&(W=v.instanceColor)),W!==void 0){let it=W.normalized,D=W.itemSize,ft=t.get(W);if(ft===void 0)continue;let Lt=ft.buffer,O=ft.type,X=ft.bytesPerElement,J=O===n.INT||O===n.UNSIGNED_INT||W.gpuType===th;if(W.isInterleavedBufferAttribute){let V=W.data,st=V.stride,nt=W.offset;if(V.isInstancedInterleavedBuffer){for(let St=0;St<z.locationSize;St++)f(z.location+St,V.meshPerAttribute);v.isInstancedMesh!==!0&&T._maxInstanceCount===void 0&&(T._maxInstanceCount=V.meshPerAttribute*V.count)}else for(let St=0;St<z.locationSize;St++)m(z.location+St);n.bindBuffer(n.ARRAY_BUFFER,Lt);for(let St=0;St<z.locationSize;St++)x(z.location+St,D/z.locationSize,O,it,st*X,(nt+D/z.locationSize*St)*X,J)}else{if(W.isInstancedBufferAttribute){for(let V=0;V<z.locationSize;V++)f(z.location+V,W.meshPerAttribute);v.isInstancedMesh!==!0&&T._maxInstanceCount===void 0&&(T._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let V=0;V<z.locationSize;V++)m(z.location+V);n.bindBuffer(n.ARRAY_BUFFER,Lt);for(let V=0;V<z.locationSize;V++)x(z.location+V,D/z.locationSize,O,it,D*X,D/z.locationSize*V*X,J)}}else if(U!==void 0){let it=U[B];if(it!==void 0)switch(it.length){case 2:n.vertexAttrib2fv(z.location,it);break;case 3:n.vertexAttrib3fv(z.location,it);break;case 4:n.vertexAttrib4fv(z.location,it);break;default:n.vertexAttrib1fv(z.location,it)}}}}S()}function k(){R();for(let v in i){let b=i[v];for(let I in b){let T=b[I];for(let E in T)p(T[E].object),delete T[E];delete b[I]}delete i[v]}}function w(v){if(i[v.id]===void 0)return;let b=i[v.id];for(let I in b){let T=b[I];for(let E in T)p(T[E].object),delete T[E];delete b[I]}delete i[v.id]}function C(v){for(let b in i){let I=i[b];if(I[v.id]===void 0)continue;let T=I[v.id];for(let E in T)p(T[E].object),delete T[E];delete I[v.id]}}function R(){M(),o=!0,r!==s&&(r=s,h(r.object))}function M(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:R,resetDefaultState:M,dispose:k,releaseStatesOfGeometry:w,releaseStatesOfProgram:C,initAttributes:_,enableAttribute:m,disableUnusedAttributes:S}}function bg(n,t,e){let i;function s(h){i=h}function r(h,p){n.drawArrays(i,h,p),e.update(p,i,1)}function o(h,p,g){g!==0&&(n.drawArraysInstanced(i,h,p,g),e.update(p,i,g))}function a(h,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,h,0,p,0,g);let c=0;for(let u=0;u<g;u++)c+=p[u];e.update(c,i,1)}function l(h,p,g,d){if(g===0)return;let c=t.get("WEBGL_multi_draw");if(c===null)for(let u=0;u<h.length;u++)o(h[u],p[u],d[u]);else{c.multiDrawArraysInstancedWEBGL(i,h,0,p,0,d,0,g);let u=0;for(let _=0;_<g;_++)u+=p[_]*d[_];e.update(u,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Sg(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let C=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(C){return!(C!==kn&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){let R=C===Zr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==_i&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==si&&!R)}function l(C){if(C==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=e.precision!==void 0?e.precision:"highp",p=l(h);p!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",p,"instead."),h=p);let g=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),c=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),u=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),f=n.getParameter(n.MAX_VERTEX_ATTRIBS),S=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),x=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),k=u>0,w=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:h,logarithmicDepthBuffer:g,reverseDepthBuffer:d,maxTextures:c,maxVertexTextures:u,maxTextureSize:_,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:S,maxVaryings:x,maxFragmentUniforms:y,vertexTextures:k,maxSamples:w}}function wg(n){let t=this,e=null,i=0,s=!1,r=!1,o=new yi,a=new Me,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(g,d){let c=g.length!==0||d||i!==0||s;return s=d,i=g.length,c},this.beginShadows=function(){r=!0,p(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(g,d){e=p(g,d,0)},this.setState=function(g,d,c){let u=g.clippingPlanes,_=g.clipIntersection,m=g.clipShadows,f=n.get(g);if(!s||u===null||u.length===0||r&&!m)r?p(null):h();else{let S=r?0:i,x=S*4,y=f.clippingState||null;l.value=y,y=p(u,d,x,c);for(let k=0;k!==x;++k)y[k]=e[k];f.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=S}};function h(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function p(g,d,c,u){let _=g!==null?g.length:0,m=null;if(_!==0){if(m=l.value,u!==!0||m===null){let f=c+_*4,S=d.matrixWorldInverse;a.getNormalMatrix(S),(m===null||m.length<f)&&(m=new Float32Array(f));for(let x=0,y=c;x!==_;++x,y+=4)o.copy(g[x]).applyMatrix4(S,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function Eg(n){let t=new WeakMap;function e(o,a){return a===Bl?o.mapping=Ys:a===zl&&(o.mapping=Zs),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===Bl||a===zl)if(t.has(o)){let l=t.get(o).texture;return e(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let h=new _c(l.height);return h.fromEquirectangularTexture(n,o),t.set(o,h),o.addEventListener("dispose",s),e(h.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}var ra=class extends ia{constructor(t=-1,e=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-t,o=i+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let h=(this.right-this.left)/this.view.fullWidth/this.zoom,p=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=h*this.view.offsetX,o=r+h*this.view.width,a-=p*this.view.offsetY,l=a-p*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Hs=4,pu=[.125,.215,.35,.446,.526,.582],ls=20,xl=new ra,mu=new oe,vl=null,_l=0,Ml=0,bl=!1,os=(1+Math.sqrt(5))/2,Us=1/os,gu=[new $(-os,Us,0),new $(os,Us,0),new $(-Us,0,os),new $(Us,0,os),new $(0,os,-Us),new $(0,os,Us),new $(-1,1,-1),new $(1,1,-1),new $(-1,1,1),new $(1,1,1)],oa=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100){vl=this._renderer.getRenderTarget(),_l=this._renderer.getActiveCubeFace(),Ml=this._renderer.getActiveMipmapLevel(),bl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,i,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=vu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=xu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(vl,_l,Ml),this._renderer.xr.enabled=bl,t.scissorTest=!1,Po(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ys||t.mapping===Zs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),vl=this._renderer.getRenderTarget(),_l=this._renderer.getActiveCubeFace(),Ml=this._renderer.getActiveMipmapLevel(),bl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:ii,minFilter:ii,generateMipmaps:!1,type:Zr,format:kn,colorSpace:ir,depthBuffer:!1},s=yu(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=yu(t,e,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Tg(r)),this._blurMaterial=Ag(r,t,e)}return s}_compileMaterial(t){let e=new De(this._lodPlanes[0],t);this._renderer.compile(e,xl)}_sceneToCubeUV(t,e,i,s){let a=new bn(90,1,e,i),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],p=this._renderer,g=p.autoClear,d=p.toneMapping;p.getClearColor(mu),p.toneMapping=ri,p.autoClear=!1;let c=new Rn({name:"PMREM.Background",side:fn,depthWrite:!1,depthTest:!1}),u=new De(new Te,c),_=!1,m=t.background;m?m.isColor&&(c.color.copy(m),t.background=null,_=!0):(c.color.copy(mu),_=!0);for(let f=0;f<6;f++){let S=f%3;S===0?(a.up.set(0,l[f],0),a.lookAt(h[f],0,0)):S===1?(a.up.set(0,0,l[f]),a.lookAt(0,h[f],0)):(a.up.set(0,l[f],0),a.lookAt(0,0,h[f]));let x=this._cubeSize;Po(s,S*x,f>2?x:0,x,x),p.setRenderTarget(s),_&&p.render(u,a),p.render(t,a)}u.geometry.dispose(),u.material.dispose(),p.toneMapping=d,p.autoClear=g,t.background=m}_textureToCubeUV(t,e){let i=this._renderer,s=t.mapping===Ys||t.mapping===Zs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=vu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=xu());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new De(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;Po(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(o,xl)}_applyPMREM(t){let e=this._renderer,i=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=gu[(s-r-1)%gu.length];this._blur(t,r-1,r,o,a)}e.autoClear=i}_blur(t,e,i,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,s,"latitudinal",r),this._halfBlur(o,t,i,i,s,"longitudinal",r)}_halfBlur(t,e,i,s,r,o,a){let l=this._renderer,h=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let p=3,g=new De(this._lodPlanes[s],h),d=h.uniforms,c=this._sizeLods[i]-1,u=isFinite(r)?Math.PI/(2*c):2*Math.PI/(2*ls-1),_=r/u,m=isFinite(r)?1+Math.floor(p*_):ls;m>ls&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ls}`);let f=[],S=0;for(let C=0;C<ls;++C){let R=C/_,M=Math.exp(-R*R/2);f.push(M),C===0?S+=M:C<m&&(S+=2*M)}for(let C=0;C<f.length;C++)f[C]=f[C]/S;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:x}=this;d.dTheta.value=u,d.mipInt.value=x-i;let y=this._sizeLods[s],k=3*y*(s>x-Hs?s-x+Hs:0),w=4*(this._cubeSize-y);Po(e,k,w,3*y,2*y),l.setRenderTarget(e),l.render(g,xl)}};function Tg(n){let t=[],e=[],i=[],s=n,r=n-Hs+1+pu.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let l=1/a;o>n-Hs?l=pu[o-n+Hs-1]:o===0&&(l=0),i.push(l);let h=1/(a-2),p=-h,g=1+h,d=[p,p,g,p,g,g,p,p,g,g,p,g],c=6,u=6,_=3,m=2,f=1,S=new Float32Array(_*u*c),x=new Float32Array(m*u*c),y=new Float32Array(f*u*c);for(let w=0;w<c;w++){let C=w%3*2/3-1,R=w>2?0:-1,M=[C,R,0,C+2/3,R,0,C+2/3,R+1,0,C,R,0,C+2/3,R+1,0,C,R+1,0];S.set(M,_*u*w),x.set(d,m*u*w);let v=[w,w,w,w,w,w];y.set(v,f*u*w)}let k=new Oe;k.setAttribute("position",new $e(S,_)),k.setAttribute("uv",new $e(x,m)),k.setAttribute("faceIndex",new $e(y,f)),t.push(k),s>Hs&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function yu(n,t,e){let i=new Mi(n,t,e);return i.texture.mapping=Ca,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Po(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function Ag(n,t,e){let i=new Float32Array(ls),s=new $(0,1,0);return new wn({name:"SphericalGaussianBlur",defines:{n:ls,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:ch(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Bi,depthTest:!1,depthWrite:!1})}function xu(){return new wn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ch(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Bi,depthTest:!1,depthWrite:!1})}function vu(){return new wn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ch(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Bi,depthTest:!1,depthWrite:!1})}function ch(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Rg(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){let l=a.mapping,h=l===Bl||l===zl,p=l===Ys||l===Zs;if(h||p){let g=t.get(a),d=g!==void 0?g.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new oa(n)),g=h?e.fromEquirectangular(a,g):e.fromCubemap(a,g),g.texture.pmremVersion=a.pmremVersion,t.set(a,g),g.texture;if(g!==void 0)return g.texture;{let c=a.image;return h&&c&&c.height>0||p&&c&&s(c)?(e===null&&(e=new oa(n)),g=h?e.fromEquirectangular(a):e.fromCubemap(a),g.texture.pmremVersion=a.pmremVersion,t.set(a,g),a.addEventListener("dispose",r),g.texture):null}}}return a}function s(a){let l=0,h=6;for(let p=0;p<h;p++)a[p]!==void 0&&l++;return l===h}function r(a){let l=a.target;l.removeEventListener("dispose",r);let h=t.get(l);h!==void 0&&(t.delete(l),h.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function Cg(n){let t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let s=e(i);return s===null&&Rr("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function Ig(n,t,e,i){let s={},r=new WeakMap;function o(g){let d=g.target;d.index!==null&&t.remove(d.index);for(let u in d.attributes)t.remove(d.attributes[u]);for(let u in d.morphAttributes){let _=d.morphAttributes[u];for(let m=0,f=_.length;m<f;m++)t.remove(_[m])}d.removeEventListener("dispose",o),delete s[d.id];let c=r.get(d);c&&(t.remove(c),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(g,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,e.memory.geometries++),d}function l(g){let d=g.attributes;for(let u in d)t.update(d[u],n.ARRAY_BUFFER);let c=g.morphAttributes;for(let u in c){let _=c[u];for(let m=0,f=_.length;m<f;m++)t.update(_[m],n.ARRAY_BUFFER)}}function h(g){let d=[],c=g.index,u=g.attributes.position,_=0;if(c!==null){let S=c.array;_=c.version;for(let x=0,y=S.length;x<y;x+=3){let k=S[x+0],w=S[x+1],C=S[x+2];d.push(k,w,w,C,C,k)}}else if(u!==void 0){let S=u.array;_=u.version;for(let x=0,y=S.length/3-1;x<y;x+=3){let k=x+0,w=x+1,C=x+2;d.push(k,w,w,C,C,k)}}else return;let m=new(df(d)?na:ea)(d,1);m.version=_;let f=r.get(g);f&&t.remove(f),r.set(g,m)}function p(g){let d=r.get(g);if(d){let c=g.index;c!==null&&d.version<c.version&&h(g)}else h(g);return r.get(g)}return{get:a,update:l,getWireframeAttribute:p}}function Pg(n,t,e){let i;function s(d){i=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,c){n.drawElements(i,c,r,d*o),e.update(c,i,1)}function h(d,c,u){u!==0&&(n.drawElementsInstanced(i,c,r,d*o,u),e.update(c,i,u))}function p(d,c,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,c,0,r,d,0,u);let m=0;for(let f=0;f<u;f++)m+=c[f];e.update(m,i,1)}function g(d,c,u,_){if(u===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<d.length;f++)h(d[f]/o,c[f],_[f]);else{m.multiDrawElementsInstancedWEBGL(i,c,0,r,d,0,_,0,u);let f=0;for(let S=0;S<u;S++)f+=c[S]*_[S];e.update(f,i,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=h,this.renderMultiDraw=p,this.renderMultiDrawInstances=g}function Lg(n){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(r/3);break;case n.LINES:e.lines+=a*(r/2);break;case n.LINE_STRIP:e.lines+=a*(r-1);break;case n.LINE_LOOP:e.lines+=a*r;break;case n.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function kg(n,t,e){let i=new WeakMap,s=new Ze;function r(o,a,l){let h=o.morphTargetInfluences,p=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,g=p!==void 0?p.length:0,d=i.get(a);if(d===void 0||d.count!==g){let M=function(){C.dispose(),i.delete(a),a.removeEventListener("dispose",M)};d!==void 0&&d.texture.dispose();let c=a.morphAttributes.position!==void 0,u=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],f=a.morphAttributes.normal||[],S=a.morphAttributes.color||[],x=0;c===!0&&(x=1),u===!0&&(x=2),_===!0&&(x=3);let y=a.attributes.position.count*x,k=1;y>t.maxTextureSize&&(k=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);let w=new Float32Array(y*k*4*g),C=new jo(w,y,k,g);C.type=si,C.needsUpdate=!0;let R=x*4;for(let v=0;v<g;v++){let b=m[v],I=f[v],T=S[v],E=y*k*4*v;for(let F=0;F<b.count;F++){let U=F*R;c===!0&&(s.fromBufferAttribute(b,F),w[E+U+0]=s.x,w[E+U+1]=s.y,w[E+U+2]=s.z,w[E+U+3]=0),u===!0&&(s.fromBufferAttribute(I,F),w[E+U+4]=s.x,w[E+U+5]=s.y,w[E+U+6]=s.z,w[E+U+7]=0),_===!0&&(s.fromBufferAttribute(T,F),w[E+U+8]=s.x,w[E+U+9]=s.y,w[E+U+10]=s.z,w[E+U+11]=T.itemSize===4?s.w:1)}}d={count:g,texture:C,size:new Bt(y,k)},i.set(a,d),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let c=0;for(let _=0;_<h.length;_++)c+=h[_];let u=a.morphTargetsRelative?1:1-c;l.getUniforms().setValue(n,"morphTargetBaseInfluence",u),l.getUniforms().setValue(n,"morphTargetInfluences",h)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:r}}function Dg(n,t,e,i){let s=new WeakMap;function r(l){let h=i.render.frame,p=l.geometry,g=t.get(l,p);if(s.get(g)!==h&&(t.update(g),s.set(g,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==h&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,h))),l.isSkinnedMesh){let d=l.skeleton;s.get(d)!==h&&(d.update(),s.set(d,h))}return g}function o(){s=new WeakMap}function a(l){let h=l.target;h.removeEventListener("dispose",a),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:r,dispose:o}}var aa=class extends An{constructor(t,e,i,s,r,o,a,l,h,p=Gs){if(p!==Gs&&p!==Ks)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&p===Gs&&(i=fs),i===void 0&&p===Ks&&(i=Js),super(null,s,r,o,a,l,p,i,h),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Sn,this.minFilter=l!==void 0?l:Sn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},yf=new An,_u=new aa(1,1),xf=new jo,vf=new xc,_f=new sa,Mu=[],bu=[],Su=new Float32Array(16),wu=new Float32Array(9),Eu=new Float32Array(4);function sr(n,t,e){let i=n[0];if(i<=0||i>0)return n;let s=t*e,r=Mu[s];if(r===void 0&&(r=new Float32Array(s),Mu[s]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(r,a)}return r}function rn(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function on(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Pa(n,t){let e=bu[t];e===void 0&&(e=new Int32Array(t),bu[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function Ug(n,t){let e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function Ng(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(rn(e,t))return;n.uniform2fv(this.addr,t),on(e,t)}}function Fg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(rn(e,t))return;n.uniform3fv(this.addr,t),on(e,t)}}function Og(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(rn(e,t))return;n.uniform4fv(this.addr,t),on(e,t)}}function Bg(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(rn(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),on(e,t)}else{if(rn(e,i))return;Eu.set(i),n.uniformMatrix2fv(this.addr,!1,Eu),on(e,i)}}function zg(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(rn(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),on(e,t)}else{if(rn(e,i))return;wu.set(i),n.uniformMatrix3fv(this.addr,!1,wu),on(e,i)}}function Hg(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(rn(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),on(e,t)}else{if(rn(e,i))return;Su.set(i),n.uniformMatrix4fv(this.addr,!1,Su),on(e,i)}}function $g(n,t){let e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function Vg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(rn(e,t))return;n.uniform2iv(this.addr,t),on(e,t)}}function Gg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(rn(e,t))return;n.uniform3iv(this.addr,t),on(e,t)}}function Wg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(rn(e,t))return;n.uniform4iv(this.addr,t),on(e,t)}}function Xg(n,t){let e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function qg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(rn(e,t))return;n.uniform2uiv(this.addr,t),on(e,t)}}function Yg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(rn(e,t))return;n.uniform3uiv(this.addr,t),on(e,t)}}function Zg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(rn(e,t))return;n.uniform4uiv(this.addr,t),on(e,t)}}function Jg(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(_u.compareFunction=ff,r=_u):r=yf,e.setTexture2D(t||r,s)}function Kg(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||vf,s)}function jg(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||_f,s)}function Qg(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||xf,s)}function ty(n){switch(n){case 5126:return Ug;case 35664:return Ng;case 35665:return Fg;case 35666:return Og;case 35674:return Bg;case 35675:return zg;case 35676:return Hg;case 5124:case 35670:return $g;case 35667:case 35671:return Vg;case 35668:case 35672:return Gg;case 35669:case 35673:return Wg;case 5125:return Xg;case 36294:return qg;case 36295:return Yg;case 36296:return Zg;case 35678:case 36198:case 36298:case 36306:case 35682:return Jg;case 35679:case 36299:case 36307:return Kg;case 35680:case 36300:case 36308:case 36293:return jg;case 36289:case 36303:case 36311:case 36292:return Qg}}function ey(n,t){n.uniform1fv(this.addr,t)}function ny(n,t){let e=sr(t,this.size,2);n.uniform2fv(this.addr,e)}function iy(n,t){let e=sr(t,this.size,3);n.uniform3fv(this.addr,e)}function sy(n,t){let e=sr(t,this.size,4);n.uniform4fv(this.addr,e)}function ry(n,t){let e=sr(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function oy(n,t){let e=sr(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function ay(n,t){let e=sr(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function ly(n,t){n.uniform1iv(this.addr,t)}function cy(n,t){n.uniform2iv(this.addr,t)}function hy(n,t){n.uniform3iv(this.addr,t)}function uy(n,t){n.uniform4iv(this.addr,t)}function fy(n,t){n.uniform1uiv(this.addr,t)}function dy(n,t){n.uniform2uiv(this.addr,t)}function py(n,t){n.uniform3uiv(this.addr,t)}function my(n,t){n.uniform4uiv(this.addr,t)}function gy(n,t,e){let i=this.cache,s=t.length,r=Pa(e,s);rn(i,r)||(n.uniform1iv(this.addr,r),on(i,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||yf,r[o])}function yy(n,t,e){let i=this.cache,s=t.length,r=Pa(e,s);rn(i,r)||(n.uniform1iv(this.addr,r),on(i,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||vf,r[o])}function xy(n,t,e){let i=this.cache,s=t.length,r=Pa(e,s);rn(i,r)||(n.uniform1iv(this.addr,r),on(i,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||_f,r[o])}function vy(n,t,e){let i=this.cache,s=t.length,r=Pa(e,s);rn(i,r)||(n.uniform1iv(this.addr,r),on(i,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||xf,r[o])}function _y(n){switch(n){case 5126:return ey;case 35664:return ny;case 35665:return iy;case 35666:return sy;case 35674:return ry;case 35675:return oy;case 35676:return ay;case 5124:case 35670:return ly;case 35667:case 35671:return cy;case 35668:case 35672:return hy;case 35669:case 35673:return uy;case 5125:return fy;case 36294:return dy;case 36295:return py;case 36296:return my;case 35678:case 36198:case 36298:case 36306:case 35682:return gy;case 35679:case 36299:case 36307:return yy;case 35680:case 36300:case 36308:case 36293:return xy;case 36289:case 36303:case 36311:case 36292:return vy}}var Mc=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=ty(e.type)}},bc=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=_y(e.type)}},Sc=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],i)}}},Sl=/(\w+)(\])?(\[|\.)?/g;function Tu(n,t){n.seq.push(t),n.map[t.id]=t}function My(n,t,e){let i=n.name,s=i.length;for(Sl.lastIndex=0;;){let r=Sl.exec(i),o=Sl.lastIndex,a=r[1],l=r[2]==="]",h=r[3];if(l&&(a=a|0),h===void 0||h==="["&&o+2===s){Tu(e,h===void 0?new Mc(a,n,t):new bc(a,n,t));break}else{let g=e.map[a];g===void 0&&(g=new Sc(a),Tu(e,g)),e=g}}}var Xs=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);My(r,o,this)}}setValue(t,e,i,s){let r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){let s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let i=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&i.push(o)}return i}};function Au(n,t,e){let i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}var by=37297,Sy=0;function wy(n,t){let e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}var Ru=new Me;function Ey(n){Ce._getMatrix(Ru,Ce.workingColorSpace,n);let t=`mat3( ${Ru.elements.map(e=>e.toFixed(4))} )`;switch(Ce.getTransfer(n)){case Ia:return[t,"LinearTransferOETF"];case Ne:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function Cu(n,t,e){let i=n.getShaderParameter(t,n.COMPILE_STATUS),s=n.getShaderInfoLog(t).trim();if(i&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+wy(n.getShaderSource(t),o)}else return s}function Ty(n,t){let e=Ey(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Ay(n,t){let e;switch(t){case Od:e="Linear";break;case Bd:e="Reinhard";break;case zd:e="Cineon";break;case Hd:e="ACESFilmic";break;case Vd:e="AgX";break;case Gd:e="Neutral";break;case $d:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Lo=new $;function Ry(){Ce.getLuminanceCoefficients(Lo);let n=Lo.x.toFixed(4),t=Lo.y.toFixed(4),e=Lo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Cy(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Cr).join(`
`)}function Iy(n){let t=[];for(let e in n){let i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function Py(n,t){let e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(t,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function Cr(n){return n!==""}function Iu(n,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Pu(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Ly=/^[ \t]*#include +<([\w\d./]+)>/gm;function wc(n){return n.replace(Ly,Dy)}var ky=new Map;function Dy(n,t){let e=ge[t];if(e===void 0){let i=ky.get(t);if(i!==void 0)e=ge[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return wc(e)}var Uy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Lu(n){return n.replace(Uy,Ny)}function Ny(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function ku(n){let t=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Fy(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===ju?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===Qc?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===gi&&(t="SHADOWMAP_TYPE_VSM"),t}function Oy(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Ys:case Zs:t="ENVMAP_TYPE_CUBE";break;case Ca:t="ENVMAP_TYPE_CUBE_UV";break}return t}function By(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Zs:t="ENVMAP_MODE_REFRACTION";break}return t}function zy(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Qu:t="ENVMAP_BLENDING_MULTIPLY";break;case Nd:t="ENVMAP_BLENDING_MIX";break;case Fd:t="ENVMAP_BLENDING_ADD";break}return t}function Hy(n){let t=n.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function $y(n,t,e,i){let s=n.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=Fy(e),h=Oy(e),p=By(e),g=zy(e),d=Hy(e),c=Cy(e),u=Iy(r),_=s.createProgram(),m,f,S=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,u].filter(Cr).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,u].filter(Cr).join(`
`),f.length>0&&(f+=`
`)):(m=[ku(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,u,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+p:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Cr).join(`
`),f=[ku(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,u,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.envMap?"#define "+p:"",e.envMap?"#define "+g:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ri?"#define TONE_MAPPING":"",e.toneMapping!==ri?ge.tonemapping_pars_fragment:"",e.toneMapping!==ri?Ay("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ge.colorspace_pars_fragment,Ty("linearToOutputTexel",e.outputColorSpace),Ry(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Cr).join(`
`)),o=wc(o),o=Iu(o,e),o=Pu(o,e),a=wc(a),a=Iu(a,e),a=Pu(a,e),o=Lu(o),a=Lu(a),e.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[c,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",e.glslVersion===Xh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Xh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let x=S+m+o,y=S+f+a,k=Au(s,s.VERTEX_SHADER,x),w=Au(s,s.FRAGMENT_SHADER,y);s.attachShader(_,k),s.attachShader(_,w),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function C(b){if(n.debug.checkShaderErrors){let I=s.getProgramInfoLog(_).trim(),T=s.getShaderInfoLog(k).trim(),E=s.getShaderInfoLog(w).trim(),F=!0,U=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(F=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,_,k,w);else{let B=Cu(s,k,"vertex"),z=Cu(s,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+b.name+`
Material Type: `+b.type+`

Program Info Log: `+I+`
`+B+`
`+z)}else I!==""?console.warn("THREE.WebGLProgram: Program Info Log:",I):(T===""||E==="")&&(U=!1);U&&(b.diagnostics={runnable:F,programLog:I,vertexShader:{log:T,prefix:m},fragmentShader:{log:E,prefix:f}})}s.deleteShader(k),s.deleteShader(w),R=new Xs(s,_),M=Py(s,_)}let R;this.getUniforms=function(){return R===void 0&&C(this),R};let M;this.getAttributes=function(){return M===void 0&&C(this),M};let v=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=s.getProgramParameter(_,by)),v},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Sy++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=k,this.fragmentShader=w,this}var Vy=0,Ec=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new Tc(t),e.set(t,i)),i}},Tc=class{constructor(t){this.id=Vy++,this.code=t,this.usedTimes=0}};function Gy(n,t,e,i,s,r,o){let a=new ta,l=new Ec,h=new Set,p=[],g=s.logarithmicDepthBuffer,d=s.vertexTextures,c=s.precision,u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(M){return h.add(M),M===0?"uv":`uv${M}`}function m(M,v,b,I,T){let E=I.fog,F=T.geometry,U=M.isMeshStandardMaterial?I.environment:null,B=(M.isMeshStandardMaterial?e:t).get(M.envMap||U),z=B&&B.mapping===Ca?B.image.height:null,W=u[M.type];M.precision!==null&&(c=s.getMaxPrecision(M.precision),c!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",c,"instead."));let it=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,D=it!==void 0?it.length:0,ft=0;F.morphAttributes.position!==void 0&&(ft=1),F.morphAttributes.normal!==void 0&&(ft=2),F.morphAttributes.color!==void 0&&(ft=3);let Lt,O,X,J;if(W){let tt=ni[W];Lt=tt.vertexShader,O=tt.fragmentShader}else Lt=M.vertexShader,O=M.fragmentShader,l.update(M),X=l.getVertexShaderID(M),J=l.getFragmentShaderID(M);let V=n.getRenderTarget(),st=n.state.buffers.depth.getReversed(),nt=T.isInstancedMesh===!0,St=T.isBatchedMesh===!0,zt=!!M.map,ht=!!M.matcap,yt=!!B,N=!!M.aoMap,ut=!!M.lightMap,rt=!!M.bumpMap,_t=!!M.normalMap,kt=!!M.displacementMap,Z=!!M.emissiveMap,Ft=!!M.metalnessMap,H=!!M.roughnessMap,P=M.anisotropy>0,dt=M.clearcoat>0,At=M.dispersion>0,It=M.iridescence>0,Y=M.sheen>0,pt=M.transmission>0,ct=P&&!!M.anisotropyMap,bt=dt&&!!M.clearcoatMap,wt=dt&&!!M.clearcoatNormalMap,Rt=dt&&!!M.clearcoatRoughnessMap,Pt=It&&!!M.iridescenceMap,Xt=It&&!!M.iridescenceThicknessMap,Qt=Y&&!!M.sheenColorMap,Jt=Y&&!!M.sheenRoughnessMap,pe=!!M.specularMap,re=!!M.specularColorMap,Se=!!M.specularIntensityMap,ot=pt&&!!M.transmissionMap,qt=pt&&!!M.thicknessMap,Ct=!!M.gradientMap,Dt=!!M.alphaMap,A=M.alphaTest>0,G=!!M.alphaHash,K=!!M.extensions,at=ri;M.toneMapped&&(V===null||V.isXRRenderTarget===!0)&&(at=n.toneMapping);let vt={shaderID:W,shaderType:M.type,shaderName:M.name,vertexShader:Lt,fragmentShader:O,defines:M.defines,customVertexShaderID:X,customFragmentShaderID:J,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:c,batching:St,batchingColor:St&&T._colorsTexture!==null,instancing:nt,instancingColor:nt&&T.instanceColor!==null,instancingMorph:nt&&T.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:V===null?n.outputColorSpace:V.isXRRenderTarget===!0?V.texture.colorSpace:ir,alphaToCoverage:!!M.alphaToCoverage,map:zt,matcap:ht,envMap:yt,envMapMode:yt&&B.mapping,envMapCubeUVHeight:z,aoMap:N,lightMap:ut,bumpMap:rt,normalMap:_t,displacementMap:d&&kt,emissiveMap:Z,normalMapObjectSpace:_t&&M.normalMapType===Yd,normalMapTangentSpace:_t&&M.normalMapType===uf,metalnessMap:Ft,roughnessMap:H,anisotropy:P,anisotropyMap:ct,clearcoat:dt,clearcoatMap:bt,clearcoatNormalMap:wt,clearcoatRoughnessMap:Rt,dispersion:At,iridescence:It,iridescenceMap:Pt,iridescenceThicknessMap:Xt,sheen:Y,sheenColorMap:Qt,sheenRoughnessMap:Jt,specularMap:pe,specularColorMap:re,specularIntensityMap:Se,transmission:pt,transmissionMap:ot,thicknessMap:qt,gradientMap:Ct,opaque:M.transparent===!1&&M.blending===Vs&&M.alphaToCoverage===!1,alphaMap:Dt,alphaTest:A,alphaHash:G,combine:M.combine,mapUv:zt&&_(M.map.channel),aoMapUv:N&&_(M.aoMap.channel),lightMapUv:ut&&_(M.lightMap.channel),bumpMapUv:rt&&_(M.bumpMap.channel),normalMapUv:_t&&_(M.normalMap.channel),displacementMapUv:kt&&_(M.displacementMap.channel),emissiveMapUv:Z&&_(M.emissiveMap.channel),metalnessMapUv:Ft&&_(M.metalnessMap.channel),roughnessMapUv:H&&_(M.roughnessMap.channel),anisotropyMapUv:ct&&_(M.anisotropyMap.channel),clearcoatMapUv:bt&&_(M.clearcoatMap.channel),clearcoatNormalMapUv:wt&&_(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Rt&&_(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Pt&&_(M.iridescenceMap.channel),iridescenceThicknessMapUv:Xt&&_(M.iridescenceThicknessMap.channel),sheenColorMapUv:Qt&&_(M.sheenColorMap.channel),sheenRoughnessMapUv:Jt&&_(M.sheenRoughnessMap.channel),specularMapUv:pe&&_(M.specularMap.channel),specularColorMapUv:re&&_(M.specularColorMap.channel),specularIntensityMapUv:Se&&_(M.specularIntensityMap.channel),transmissionMapUv:ot&&_(M.transmissionMap.channel),thicknessMapUv:qt&&_(M.thicknessMap.channel),alphaMapUv:Dt&&_(M.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(_t||P),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,pointsUvs:T.isPoints===!0&&!!F.attributes.uv&&(zt||Dt),fog:!!E,useFog:M.fog===!0,fogExp2:!!E&&E.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:g,reverseDepthBuffer:st,skinning:T.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:D,morphTextureStride:ft,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:n.shadowMap.enabled&&b.length>0,shadowMapType:n.shadowMap.type,toneMapping:at,decodeVideoTexture:zt&&M.map.isVideoTexture===!0&&Ce.getTransfer(M.map.colorSpace)===Ne,decodeVideoTextureEmissive:Z&&M.emissiveMap.isVideoTexture===!0&&Ce.getTransfer(M.emissiveMap.colorSpace)===Ne,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===je,flipSided:M.side===fn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:K&&M.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(K&&M.extensions.multiDraw===!0||St)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return vt.vertexUv1s=h.has(1),vt.vertexUv2s=h.has(2),vt.vertexUv3s=h.has(3),h.clear(),vt}function f(M){let v=[];if(M.shaderID?v.push(M.shaderID):(v.push(M.customVertexShaderID),v.push(M.customFragmentShaderID)),M.defines!==void 0)for(let b in M.defines)v.push(b),v.push(M.defines[b]);return M.isRawShaderMaterial===!1&&(S(v,M),x(v,M),v.push(n.outputColorSpace)),v.push(M.customProgramCacheKey),v.join()}function S(M,v){M.push(v.precision),M.push(v.outputColorSpace),M.push(v.envMapMode),M.push(v.envMapCubeUVHeight),M.push(v.mapUv),M.push(v.alphaMapUv),M.push(v.lightMapUv),M.push(v.aoMapUv),M.push(v.bumpMapUv),M.push(v.normalMapUv),M.push(v.displacementMapUv),M.push(v.emissiveMapUv),M.push(v.metalnessMapUv),M.push(v.roughnessMapUv),M.push(v.anisotropyMapUv),M.push(v.clearcoatMapUv),M.push(v.clearcoatNormalMapUv),M.push(v.clearcoatRoughnessMapUv),M.push(v.iridescenceMapUv),M.push(v.iridescenceThicknessMapUv),M.push(v.sheenColorMapUv),M.push(v.sheenRoughnessMapUv),M.push(v.specularMapUv),M.push(v.specularColorMapUv),M.push(v.specularIntensityMapUv),M.push(v.transmissionMapUv),M.push(v.thicknessMapUv),M.push(v.combine),M.push(v.fogExp2),M.push(v.sizeAttenuation),M.push(v.morphTargetsCount),M.push(v.morphAttributeCount),M.push(v.numDirLights),M.push(v.numPointLights),M.push(v.numSpotLights),M.push(v.numSpotLightMaps),M.push(v.numHemiLights),M.push(v.numRectAreaLights),M.push(v.numDirLightShadows),M.push(v.numPointLightShadows),M.push(v.numSpotLightShadows),M.push(v.numSpotLightShadowsWithMaps),M.push(v.numLightProbes),M.push(v.shadowMapType),M.push(v.toneMapping),M.push(v.numClippingPlanes),M.push(v.numClipIntersection),M.push(v.depthPacking)}function x(M,v){a.disableAll(),v.supportsVertexTextures&&a.enable(0),v.instancing&&a.enable(1),v.instancingColor&&a.enable(2),v.instancingMorph&&a.enable(3),v.matcap&&a.enable(4),v.envMap&&a.enable(5),v.normalMapObjectSpace&&a.enable(6),v.normalMapTangentSpace&&a.enable(7),v.clearcoat&&a.enable(8),v.iridescence&&a.enable(9),v.alphaTest&&a.enable(10),v.vertexColors&&a.enable(11),v.vertexAlphas&&a.enable(12),v.vertexUv1s&&a.enable(13),v.vertexUv2s&&a.enable(14),v.vertexUv3s&&a.enable(15),v.vertexTangents&&a.enable(16),v.anisotropy&&a.enable(17),v.alphaHash&&a.enable(18),v.batching&&a.enable(19),v.dispersion&&a.enable(20),v.batchingColor&&a.enable(21),M.push(a.mask),a.disableAll(),v.fog&&a.enable(0),v.useFog&&a.enable(1),v.flatShading&&a.enable(2),v.logarithmicDepthBuffer&&a.enable(3),v.reverseDepthBuffer&&a.enable(4),v.skinning&&a.enable(5),v.morphTargets&&a.enable(6),v.morphNormals&&a.enable(7),v.morphColors&&a.enable(8),v.premultipliedAlpha&&a.enable(9),v.shadowMapEnabled&&a.enable(10),v.doubleSided&&a.enable(11),v.flipSided&&a.enable(12),v.useDepthPacking&&a.enable(13),v.dithering&&a.enable(14),v.transmission&&a.enable(15),v.sheen&&a.enable(16),v.opaque&&a.enable(17),v.pointsUvs&&a.enable(18),v.decodeVideoTexture&&a.enable(19),v.decodeVideoTextureEmissive&&a.enable(20),v.alphaToCoverage&&a.enable(21),M.push(a.mask)}function y(M){let v=u[M.type],b;if(v){let I=ni[v];b=lh.clone(I.uniforms)}else b=M.uniforms;return b}function k(M,v){let b;for(let I=0,T=p.length;I<T;I++){let E=p[I];if(E.cacheKey===v){b=E,++b.usedTimes;break}}return b===void 0&&(b=new $y(n,v,M,r),p.push(b)),b}function w(M){if(--M.usedTimes===0){let v=p.indexOf(M);p[v]=p[p.length-1],p.pop(),M.destroy()}}function C(M){l.remove(M)}function R(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:y,acquireProgram:k,releaseProgram:w,releaseShaderCache:C,programs:p,dispose:R}}function Wy(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function Xy(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function Du(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Uu(){let n=[],t=0,e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function o(g,d,c,u,_,m){let f=n[t];return f===void 0?(f={id:g.id,object:g,geometry:d,material:c,groupOrder:u,renderOrder:g.renderOrder,z:_,group:m},n[t]=f):(f.id=g.id,f.object=g,f.geometry=d,f.material=c,f.groupOrder=u,f.renderOrder=g.renderOrder,f.z=_,f.group=m),t++,f}function a(g,d,c,u,_,m){let f=o(g,d,c,u,_,m);c.transmission>0?i.push(f):c.transparent===!0?s.push(f):e.push(f)}function l(g,d,c,u,_,m){let f=o(g,d,c,u,_,m);c.transmission>0?i.unshift(f):c.transparent===!0?s.unshift(f):e.unshift(f)}function h(g,d){e.length>1&&e.sort(g||Xy),i.length>1&&i.sort(d||Du),s.length>1&&s.sort(d||Du)}function p(){for(let g=t,d=n.length;g<d;g++){let c=n[g];if(c.id===null)break;c.id=null,c.object=null,c.geometry=null,c.material=null,c.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:p,sort:h}}function qy(){let n=new WeakMap;function t(i,s){let r=n.get(i),o;return r===void 0?(o=new Uu,n.set(i,[o])):s>=r.length?(o=new Uu,r.push(o)):o=r[s],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function Yy(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new $,color:new oe};break;case"SpotLight":e={position:new $,direction:new $,color:new oe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new $,color:new oe,distance:0,decay:0};break;case"HemisphereLight":e={direction:new $,skyColor:new oe,groundColor:new oe};break;case"RectAreaLight":e={color:new oe,position:new $,halfWidth:new $,halfHeight:new $};break}return n[t.id]=e,e}}}function Zy(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Bt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Bt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Bt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}var Jy=0;function Ky(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function jy(n){let t=new Yy,e=Zy(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new $);let s=new $,r=new we,o=new we;function a(h){let p=0,g=0,d=0;for(let M=0;M<9;M++)i.probe[M].set(0,0,0);let c=0,u=0,_=0,m=0,f=0,S=0,x=0,y=0,k=0,w=0,C=0;h.sort(Ky);for(let M=0,v=h.length;M<v;M++){let b=h[M],I=b.color,T=b.intensity,E=b.distance,F=b.shadow&&b.shadow.map?b.shadow.map.texture:null;if(b.isAmbientLight)p+=I.r*T,g+=I.g*T,d+=I.b*T;else if(b.isLightProbe){for(let U=0;U<9;U++)i.probe[U].addScaledVector(b.sh.coefficients[U],T);C++}else if(b.isDirectionalLight){let U=t.get(b);if(U.color.copy(b.color).multiplyScalar(b.intensity),b.castShadow){let B=b.shadow,z=e.get(b);z.shadowIntensity=B.intensity,z.shadowBias=B.bias,z.shadowNormalBias=B.normalBias,z.shadowRadius=B.radius,z.shadowMapSize=B.mapSize,i.directionalShadow[c]=z,i.directionalShadowMap[c]=F,i.directionalShadowMatrix[c]=b.shadow.matrix,S++}i.directional[c]=U,c++}else if(b.isSpotLight){let U=t.get(b);U.position.setFromMatrixPosition(b.matrixWorld),U.color.copy(I).multiplyScalar(T),U.distance=E,U.coneCos=Math.cos(b.angle),U.penumbraCos=Math.cos(b.angle*(1-b.penumbra)),U.decay=b.decay,i.spot[_]=U;let B=b.shadow;if(b.map&&(i.spotLightMap[k]=b.map,k++,B.updateMatrices(b),b.castShadow&&w++),i.spotLightMatrix[_]=B.matrix,b.castShadow){let z=e.get(b);z.shadowIntensity=B.intensity,z.shadowBias=B.bias,z.shadowNormalBias=B.normalBias,z.shadowRadius=B.radius,z.shadowMapSize=B.mapSize,i.spotShadow[_]=z,i.spotShadowMap[_]=F,y++}_++}else if(b.isRectAreaLight){let U=t.get(b);U.color.copy(I).multiplyScalar(T),U.halfWidth.set(b.width*.5,0,0),U.halfHeight.set(0,b.height*.5,0),i.rectArea[m]=U,m++}else if(b.isPointLight){let U=t.get(b);if(U.color.copy(b.color).multiplyScalar(b.intensity),U.distance=b.distance,U.decay=b.decay,b.castShadow){let B=b.shadow,z=e.get(b);z.shadowIntensity=B.intensity,z.shadowBias=B.bias,z.shadowNormalBias=B.normalBias,z.shadowRadius=B.radius,z.shadowMapSize=B.mapSize,z.shadowCameraNear=B.camera.near,z.shadowCameraFar=B.camera.far,i.pointShadow[u]=z,i.pointShadowMap[u]=F,i.pointShadowMatrix[u]=b.shadow.matrix,x++}i.point[u]=U,u++}else if(b.isHemisphereLight){let U=t.get(b);U.skyColor.copy(b.color).multiplyScalar(T),U.groundColor.copy(b.groundColor).multiplyScalar(T),i.hemi[f]=U,f++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=jt.LTC_FLOAT_1,i.rectAreaLTC2=jt.LTC_FLOAT_2):(i.rectAreaLTC1=jt.LTC_HALF_1,i.rectAreaLTC2=jt.LTC_HALF_2)),i.ambient[0]=p,i.ambient[1]=g,i.ambient[2]=d;let R=i.hash;(R.directionalLength!==c||R.pointLength!==u||R.spotLength!==_||R.rectAreaLength!==m||R.hemiLength!==f||R.numDirectionalShadows!==S||R.numPointShadows!==x||R.numSpotShadows!==y||R.numSpotMaps!==k||R.numLightProbes!==C)&&(i.directional.length=c,i.spot.length=_,i.rectArea.length=m,i.point.length=u,i.hemi.length=f,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.pointShadow.length=x,i.pointShadowMap.length=x,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=S,i.pointShadowMatrix.length=x,i.spotLightMatrix.length=y+k-w,i.spotLightMap.length=k,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=C,R.directionalLength=c,R.pointLength=u,R.spotLength=_,R.rectAreaLength=m,R.hemiLength=f,R.numDirectionalShadows=S,R.numPointShadows=x,R.numSpotShadows=y,R.numSpotMaps=k,R.numLightProbes=C,i.version=Jy++)}function l(h,p){let g=0,d=0,c=0,u=0,_=0,m=p.matrixWorldInverse;for(let f=0,S=h.length;f<S;f++){let x=h[f];if(x.isDirectionalLight){let y=i.directional[g];y.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),g++}else if(x.isSpotLight){let y=i.spot[c];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),c++}else if(x.isRectAreaLight){let y=i.rectArea[u];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(m),o.identity(),r.copy(x.matrixWorld),r.premultiply(m),o.extractRotation(r),y.halfWidth.set(x.width*.5,0,0),y.halfHeight.set(0,x.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),u++}else if(x.isPointLight){let y=i.point[d];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(m),d++}else if(x.isHemisphereLight){let y=i.hemi[_];y.direction.setFromMatrixPosition(x.matrixWorld),y.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:i}}function Nu(n){let t=new jy(n),e=[],i=[];function s(p){h.camera=p,e.length=0,i.length=0}function r(p){e.push(p)}function o(p){i.push(p)}function a(){t.setup(e)}function l(p){t.setupView(e,p)}let h={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:h,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function Qy(n){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new Nu(n),t.set(s,[a])):r>=o.length?(a=new Nu(n),o.push(a)):a=o[r],a}function i(){t=new WeakMap}return{get:e,dispose:i}}var Ac=class extends Si{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Xd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Rc=class extends Si{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},tx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ex=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function nx(n,t,e){let i=new Fr,s=new Bt,r=new Bt,o=new Ze,a=new Ac({depthPacking:qd}),l=new Rc,h={},p=e.maxTextureSize,g={[Hi]:fn,[fn]:Hi,[je]:je},d=new wn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Bt},radius:{value:4}},vertexShader:tx,fragmentShader:ex}),c=d.clone();c.defines.HORIZONTAL_PASS=1;let u=new Oe;u.setAttribute("position",new $e(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new De(u,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ju;let f=this.type;this.render=function(w,C,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;let M=n.getRenderTarget(),v=n.getActiveCubeFace(),b=n.getActiveMipmapLevel(),I=n.state;I.setBlending(Bi),I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);let T=f!==gi&&this.type===gi,E=f===gi&&this.type!==gi;for(let F=0,U=w.length;F<U;F++){let B=w[F],z=B.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",B,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;s.copy(z.mapSize);let W=z.getFrameExtents();if(s.multiply(W),r.copy(z.mapSize),(s.x>p||s.y>p)&&(s.x>p&&(r.x=Math.floor(p/W.x),s.x=r.x*W.x,z.mapSize.x=r.x),s.y>p&&(r.y=Math.floor(p/W.y),s.y=r.y*W.y,z.mapSize.y=r.y)),z.map===null||T===!0||E===!0){let D=this.type!==gi?{minFilter:Sn,magFilter:Sn}:{};z.map!==null&&z.map.dispose(),z.map=new Mi(s.x,s.y,D),z.map.texture.name=B.name+".shadowMap",z.camera.updateProjectionMatrix()}n.setRenderTarget(z.map),n.clear();let it=z.getViewportCount();for(let D=0;D<it;D++){let ft=z.getViewport(D);o.set(r.x*ft.x,r.y*ft.y,r.x*ft.z,r.y*ft.w),I.viewport(o),z.updateMatrices(B,D),i=z.getFrustum(),y(C,R,z.camera,B,this.type)}z.isPointLightShadow!==!0&&this.type===gi&&S(z,R),z.needsUpdate=!1}f=this.type,m.needsUpdate=!1,n.setRenderTarget(M,v,b)};function S(w,C){let R=t.update(_);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,c.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,c.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Mi(s.x,s.y)),d.uniforms.shadow_pass.value=w.map.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,n.setRenderTarget(w.mapPass),n.clear(),n.renderBufferDirect(C,null,R,d,_,null),c.uniforms.shadow_pass.value=w.mapPass.texture,c.uniforms.resolution.value=w.mapSize,c.uniforms.radius.value=w.radius,n.setRenderTarget(w.map),n.clear(),n.renderBufferDirect(C,null,R,c,_,null)}function x(w,C,R,M){let v=null,b=R.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(b!==void 0)v=b;else if(v=R.isPointLight===!0?l:a,n.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){let I=v.uuid,T=C.uuid,E=h[I];E===void 0&&(E={},h[I]=E);let F=E[T];F===void 0&&(F=v.clone(),E[T]=F,C.addEventListener("dispose",k)),v=F}if(v.visible=C.visible,v.wireframe=C.wireframe,M===gi?v.side=C.shadowSide!==null?C.shadowSide:C.side:v.side=C.shadowSide!==null?C.shadowSide:g[C.side],v.alphaMap=C.alphaMap,v.alphaTest=C.alphaTest,v.map=C.map,v.clipShadows=C.clipShadows,v.clippingPlanes=C.clippingPlanes,v.clipIntersection=C.clipIntersection,v.displacementMap=C.displacementMap,v.displacementScale=C.displacementScale,v.displacementBias=C.displacementBias,v.wireframeLinewidth=C.wireframeLinewidth,v.linewidth=C.linewidth,R.isPointLight===!0&&v.isMeshDistanceMaterial===!0){let I=n.properties.get(v);I.light=R}return v}function y(w,C,R,M,v){if(w.visible===!1)return;if(w.layers.test(C.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&v===gi)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,w.matrixWorld);let T=t.update(w),E=w.material;if(Array.isArray(E)){let F=T.groups;for(let U=0,B=F.length;U<B;U++){let z=F[U],W=E[z.materialIndex];if(W&&W.visible){let it=x(w,W,M,v);w.onBeforeShadow(n,w,C,R,T,it,z),n.renderBufferDirect(R,null,T,it,w,z),w.onAfterShadow(n,w,C,R,T,it,z)}}}else if(E.visible){let F=x(w,E,M,v);w.onBeforeShadow(n,w,C,R,T,F,null),n.renderBufferDirect(R,null,T,F,w,null),w.onAfterShadow(n,w,C,R,T,F,null)}}let I=w.children;for(let T=0,E=I.length;T<E;T++)y(I[T],C,R,M,v)}function k(w){w.target.removeEventListener("dispose",k);for(let R in h){let M=h[R],v=w.target.uuid;v in M&&(M[v].dispose(),delete M[v])}}}var ix={[Ll]:kl,[Dl]:Fl,[Ul]:Ol,[qs]:Nl,[kl]:Ll,[Fl]:Dl,[Ol]:Ul,[Nl]:qs};function sx(n,t){function e(){let ot=!1,qt=new Ze,Ct=null,Dt=new Ze(0,0,0,0);return{setMask:function(A){Ct!==A&&!ot&&(n.colorMask(A,A,A,A),Ct=A)},setLocked:function(A){ot=A},setClear:function(A,G,K,at,vt){vt===!0&&(A*=at,G*=at,K*=at),qt.set(A,G,K,at),Dt.equals(qt)===!1&&(n.clearColor(A,G,K,at),Dt.copy(qt))},reset:function(){ot=!1,Ct=null,Dt.set(-1,0,0,0)}}}function i(){let ot=!1,qt=!1,Ct=null,Dt=null,A=null;return{setReversed:function(G){if(qt!==G){let K=t.get("EXT_clip_control");qt?K.clipControlEXT(K.LOWER_LEFT_EXT,K.ZERO_TO_ONE_EXT):K.clipControlEXT(K.LOWER_LEFT_EXT,K.NEGATIVE_ONE_TO_ONE_EXT);let at=A;A=null,this.setClear(at)}qt=G},getReversed:function(){return qt},setTest:function(G){G?V(n.DEPTH_TEST):st(n.DEPTH_TEST)},setMask:function(G){Ct!==G&&!ot&&(n.depthMask(G),Ct=G)},setFunc:function(G){if(qt&&(G=ix[G]),Dt!==G){switch(G){case Ll:n.depthFunc(n.NEVER);break;case kl:n.depthFunc(n.ALWAYS);break;case Dl:n.depthFunc(n.LESS);break;case qs:n.depthFunc(n.LEQUAL);break;case Ul:n.depthFunc(n.EQUAL);break;case Nl:n.depthFunc(n.GEQUAL);break;case Fl:n.depthFunc(n.GREATER);break;case Ol:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Dt=G}},setLocked:function(G){ot=G},setClear:function(G){A!==G&&(qt&&(G=1-G),n.clearDepth(G),A=G)},reset:function(){ot=!1,Ct=null,Dt=null,A=null,qt=!1}}}function s(){let ot=!1,qt=null,Ct=null,Dt=null,A=null,G=null,K=null,at=null,vt=null;return{setTest:function(tt){ot||(tt?V(n.STENCIL_TEST):st(n.STENCIL_TEST))},setMask:function(tt){qt!==tt&&!ot&&(n.stencilMask(tt),qt=tt)},setFunc:function(tt,Tt,Wt){(Ct!==tt||Dt!==Tt||A!==Wt)&&(n.stencilFunc(tt,Tt,Wt),Ct=tt,Dt=Tt,A=Wt)},setOp:function(tt,Tt,Wt){(G!==tt||K!==Tt||at!==Wt)&&(n.stencilOp(tt,Tt,Wt),G=tt,K=Tt,at=Wt)},setLocked:function(tt){ot=tt},setClear:function(tt){vt!==tt&&(n.clearStencil(tt),vt=tt)},reset:function(){ot=!1,qt=null,Ct=null,Dt=null,A=null,G=null,K=null,at=null,vt=null}}}let r=new e,o=new i,a=new s,l=new WeakMap,h=new WeakMap,p={},g={},d=new WeakMap,c=[],u=null,_=!1,m=null,f=null,S=null,x=null,y=null,k=null,w=null,C=new oe(0,0,0),R=0,M=!1,v=null,b=null,I=null,T=null,E=null,F=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),U=!1,B=0,z=n.getParameter(n.VERSION);z.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec(z)[1]),U=B>=1):z.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),U=B>=2);let W=null,it={},D=n.getParameter(n.SCISSOR_BOX),ft=n.getParameter(n.VIEWPORT),Lt=new Ze().fromArray(D),O=new Ze().fromArray(ft);function X(ot,qt,Ct,Dt){let A=new Uint8Array(4),G=n.createTexture();n.bindTexture(ot,G),n.texParameteri(ot,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(ot,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let K=0;K<Ct;K++)ot===n.TEXTURE_3D||ot===n.TEXTURE_2D_ARRAY?n.texImage3D(qt,0,n.RGBA,1,1,Dt,0,n.RGBA,n.UNSIGNED_BYTE,A):n.texImage2D(qt+K,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,A);return G}let J={};J[n.TEXTURE_2D]=X(n.TEXTURE_2D,n.TEXTURE_2D,1),J[n.TEXTURE_CUBE_MAP]=X(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[n.TEXTURE_2D_ARRAY]=X(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),J[n.TEXTURE_3D]=X(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),V(n.DEPTH_TEST),o.setFunc(qs),rt(!1),_t(Oh),V(n.CULL_FACE),N(Bi);function V(ot){p[ot]!==!0&&(n.enable(ot),p[ot]=!0)}function st(ot){p[ot]!==!1&&(n.disable(ot),p[ot]=!1)}function nt(ot,qt){return g[ot]!==qt?(n.bindFramebuffer(ot,qt),g[ot]=qt,ot===n.DRAW_FRAMEBUFFER&&(g[n.FRAMEBUFFER]=qt),ot===n.FRAMEBUFFER&&(g[n.DRAW_FRAMEBUFFER]=qt),!0):!1}function St(ot,qt){let Ct=c,Dt=!1;if(ot){Ct=d.get(qt),Ct===void 0&&(Ct=[],d.set(qt,Ct));let A=ot.textures;if(Ct.length!==A.length||Ct[0]!==n.COLOR_ATTACHMENT0){for(let G=0,K=A.length;G<K;G++)Ct[G]=n.COLOR_ATTACHMENT0+G;Ct.length=A.length,Dt=!0}}else Ct[0]!==n.BACK&&(Ct[0]=n.BACK,Dt=!0);Dt&&n.drawBuffers(Ct)}function zt(ot){return u!==ot?(n.useProgram(ot),u=ot,!0):!1}let ht={[as]:n.FUNC_ADD,[vd]:n.FUNC_SUBTRACT,[_d]:n.FUNC_REVERSE_SUBTRACT};ht[Md]=n.MIN,ht[bd]=n.MAX;let yt={[Sd]:n.ZERO,[wd]:n.ONE,[Ed]:n.SRC_COLOR,[Il]:n.SRC_ALPHA,[Pd]:n.SRC_ALPHA_SATURATE,[Cd]:n.DST_COLOR,[Ad]:n.DST_ALPHA,[Td]:n.ONE_MINUS_SRC_COLOR,[Pl]:n.ONE_MINUS_SRC_ALPHA,[Id]:n.ONE_MINUS_DST_COLOR,[Rd]:n.ONE_MINUS_DST_ALPHA,[Ld]:n.CONSTANT_COLOR,[kd]:n.ONE_MINUS_CONSTANT_COLOR,[Dd]:n.CONSTANT_ALPHA,[Ud]:n.ONE_MINUS_CONSTANT_ALPHA};function N(ot,qt,Ct,Dt,A,G,K,at,vt,tt){if(ot===Bi){_===!0&&(st(n.BLEND),_=!1);return}if(_===!1&&(V(n.BLEND),_=!0),ot!==xd){if(ot!==m||tt!==M){if((f!==as||y!==as)&&(n.blendEquation(n.FUNC_ADD),f=as,y=as),tt)switch(ot){case Vs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Bh:n.blendFunc(n.ONE,n.ONE);break;case zh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Hh:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",ot);break}else switch(ot){case Vs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Bh:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case zh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Hh:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",ot);break}S=null,x=null,k=null,w=null,C.set(0,0,0),R=0,m=ot,M=tt}return}A=A||qt,G=G||Ct,K=K||Dt,(qt!==f||A!==y)&&(n.blendEquationSeparate(ht[qt],ht[A]),f=qt,y=A),(Ct!==S||Dt!==x||G!==k||K!==w)&&(n.blendFuncSeparate(yt[Ct],yt[Dt],yt[G],yt[K]),S=Ct,x=Dt,k=G,w=K),(at.equals(C)===!1||vt!==R)&&(n.blendColor(at.r,at.g,at.b,vt),C.copy(at),R=vt),m=ot,M=!1}function ut(ot,qt){ot.side===je?st(n.CULL_FACE):V(n.CULL_FACE);let Ct=ot.side===fn;qt&&(Ct=!Ct),rt(Ct),ot.blending===Vs&&ot.transparent===!1?N(Bi):N(ot.blending,ot.blendEquation,ot.blendSrc,ot.blendDst,ot.blendEquationAlpha,ot.blendSrcAlpha,ot.blendDstAlpha,ot.blendColor,ot.blendAlpha,ot.premultipliedAlpha),o.setFunc(ot.depthFunc),o.setTest(ot.depthTest),o.setMask(ot.depthWrite),r.setMask(ot.colorWrite);let Dt=ot.stencilWrite;a.setTest(Dt),Dt&&(a.setMask(ot.stencilWriteMask),a.setFunc(ot.stencilFunc,ot.stencilRef,ot.stencilFuncMask),a.setOp(ot.stencilFail,ot.stencilZFail,ot.stencilZPass)),Z(ot.polygonOffset,ot.polygonOffsetFactor,ot.polygonOffsetUnits),ot.alphaToCoverage===!0?V(n.SAMPLE_ALPHA_TO_COVERAGE):st(n.SAMPLE_ALPHA_TO_COVERAGE)}function rt(ot){v!==ot&&(ot?n.frontFace(n.CW):n.frontFace(n.CCW),v=ot)}function _t(ot){ot!==gd?(V(n.CULL_FACE),ot!==b&&(ot===Oh?n.cullFace(n.BACK):ot===yd?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):st(n.CULL_FACE),b=ot}function kt(ot){ot!==I&&(U&&n.lineWidth(ot),I=ot)}function Z(ot,qt,Ct){ot?(V(n.POLYGON_OFFSET_FILL),(T!==qt||E!==Ct)&&(n.polygonOffset(qt,Ct),T=qt,E=Ct)):st(n.POLYGON_OFFSET_FILL)}function Ft(ot){ot?V(n.SCISSOR_TEST):st(n.SCISSOR_TEST)}function H(ot){ot===void 0&&(ot=n.TEXTURE0+F-1),W!==ot&&(n.activeTexture(ot),W=ot)}function P(ot,qt,Ct){Ct===void 0&&(W===null?Ct=n.TEXTURE0+F-1:Ct=W);let Dt=it[Ct];Dt===void 0&&(Dt={type:void 0,texture:void 0},it[Ct]=Dt),(Dt.type!==ot||Dt.texture!==qt)&&(W!==Ct&&(n.activeTexture(Ct),W=Ct),n.bindTexture(ot,qt||J[ot]),Dt.type=ot,Dt.texture=qt)}function dt(){let ot=it[W];ot!==void 0&&ot.type!==void 0&&(n.bindTexture(ot.type,null),ot.type=void 0,ot.texture=void 0)}function At(){try{n.compressedTexImage2D.apply(n,arguments)}catch(ot){console.error("THREE.WebGLState:",ot)}}function It(){try{n.compressedTexImage3D.apply(n,arguments)}catch(ot){console.error("THREE.WebGLState:",ot)}}function Y(){try{n.texSubImage2D.apply(n,arguments)}catch(ot){console.error("THREE.WebGLState:",ot)}}function pt(){try{n.texSubImage3D.apply(n,arguments)}catch(ot){console.error("THREE.WebGLState:",ot)}}function ct(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(ot){console.error("THREE.WebGLState:",ot)}}function bt(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(ot){console.error("THREE.WebGLState:",ot)}}function wt(){try{n.texStorage2D.apply(n,arguments)}catch(ot){console.error("THREE.WebGLState:",ot)}}function Rt(){try{n.texStorage3D.apply(n,arguments)}catch(ot){console.error("THREE.WebGLState:",ot)}}function Pt(){try{n.texImage2D.apply(n,arguments)}catch(ot){console.error("THREE.WebGLState:",ot)}}function Xt(){try{n.texImage3D.apply(n,arguments)}catch(ot){console.error("THREE.WebGLState:",ot)}}function Qt(ot){Lt.equals(ot)===!1&&(n.scissor(ot.x,ot.y,ot.z,ot.w),Lt.copy(ot))}function Jt(ot){O.equals(ot)===!1&&(n.viewport(ot.x,ot.y,ot.z,ot.w),O.copy(ot))}function pe(ot,qt){let Ct=h.get(qt);Ct===void 0&&(Ct=new WeakMap,h.set(qt,Ct));let Dt=Ct.get(ot);Dt===void 0&&(Dt=n.getUniformBlockIndex(qt,ot.name),Ct.set(ot,Dt))}function re(ot,qt){let Dt=h.get(qt).get(ot);l.get(qt)!==Dt&&(n.uniformBlockBinding(qt,Dt,ot.__bindingPointIndex),l.set(qt,Dt))}function Se(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),p={},W=null,it={},g={},d=new WeakMap,c=[],u=null,_=!1,m=null,f=null,S=null,x=null,y=null,k=null,w=null,C=new oe(0,0,0),R=0,M=!1,v=null,b=null,I=null,T=null,E=null,Lt.set(0,0,n.canvas.width,n.canvas.height),O.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:V,disable:st,bindFramebuffer:nt,drawBuffers:St,useProgram:zt,setBlending:N,setMaterial:ut,setFlipSided:rt,setCullFace:_t,setLineWidth:kt,setPolygonOffset:Z,setScissorTest:Ft,activeTexture:H,bindTexture:P,unbindTexture:dt,compressedTexImage2D:At,compressedTexImage3D:It,texImage2D:Pt,texImage3D:Xt,updateUBOMapping:pe,uniformBlockBinding:re,texStorage2D:wt,texStorage3D:Rt,texSubImage2D:Y,texSubImage3D:pt,compressedTexSubImage2D:ct,compressedTexSubImage3D:bt,scissor:Qt,viewport:Jt,reset:Se}}function Fu(n,t,e,i){let s=rx(i);switch(e){case rf:return n*t;case af:return n*t;case lf:return n*t*2;case ih:return n*t/s.components*s.byteLength;case sh:return n*t/s.components*s.byteLength;case cf:return n*t*2/s.components*s.byteLength;case rh:return n*t*2/s.components*s.byteLength;case of:return n*t*3/s.components*s.byteLength;case kn:return n*t*4/s.components*s.byteLength;case oh:return n*t*4/s.components*s.byteLength;case Vo:case Go:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Wo:case Xo:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Vl:case Wl:return Math.max(n,16)*Math.max(t,8)/4;case $l:case Gl:return Math.max(n,8)*Math.max(t,8)/2;case Xl:case ql:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Yl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Zl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Jl:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case Kl:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case jl:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case Ql:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case tc:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case ec:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case nc:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case ic:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case sc:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case rc:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case oc:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case ac:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case lc:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case qo:case cc:case hc:return Math.ceil(n/4)*Math.ceil(t/4)*16;case hf:case uc:return Math.ceil(n/4)*Math.ceil(t/4)*8;case fc:case dc:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function rx(n){switch(n){case _i:case ef:return{byteLength:1,components:1};case Ur:case nf:case Zr:return{byteLength:2,components:1};case eh:case nh:return{byteLength:2,components:4};case fs:case th:case si:return{byteLength:4,components:1};case sf:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function ox(n,t,e,i,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new Bt,p=new WeakMap,g,d=new WeakMap,c=!1;try{c=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function u(H,P){return c?new OffscreenCanvas(H,P):Jo("canvas")}function _(H,P,dt){let At=1,It=Ft(H);if((It.width>dt||It.height>dt)&&(At=dt/Math.max(It.width,It.height)),At<1)if(typeof HTMLImageElement<"u"&&H instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&H instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&H instanceof ImageBitmap||typeof VideoFrame<"u"&&H instanceof VideoFrame){let Y=Math.floor(At*It.width),pt=Math.floor(At*It.height);g===void 0&&(g=u(Y,pt));let ct=P?u(Y,pt):g;return ct.width=Y,ct.height=pt,ct.getContext("2d").drawImage(H,0,0,Y,pt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+It.width+"x"+It.height+") to ("+Y+"x"+pt+")."),ct}else return"data"in H&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+It.width+"x"+It.height+")."),H;return H}function m(H){return H.generateMipmaps}function f(H){n.generateMipmap(H)}function S(H){return H.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:H.isWebGL3DRenderTarget?n.TEXTURE_3D:H.isWebGLArrayRenderTarget||H.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function x(H,P,dt,At,It=!1){if(H!==null){if(n[H]!==void 0)return n[H];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+H+"'")}let Y=P;if(P===n.RED&&(dt===n.FLOAT&&(Y=n.R32F),dt===n.HALF_FLOAT&&(Y=n.R16F),dt===n.UNSIGNED_BYTE&&(Y=n.R8)),P===n.RED_INTEGER&&(dt===n.UNSIGNED_BYTE&&(Y=n.R8UI),dt===n.UNSIGNED_SHORT&&(Y=n.R16UI),dt===n.UNSIGNED_INT&&(Y=n.R32UI),dt===n.BYTE&&(Y=n.R8I),dt===n.SHORT&&(Y=n.R16I),dt===n.INT&&(Y=n.R32I)),P===n.RG&&(dt===n.FLOAT&&(Y=n.RG32F),dt===n.HALF_FLOAT&&(Y=n.RG16F),dt===n.UNSIGNED_BYTE&&(Y=n.RG8)),P===n.RG_INTEGER&&(dt===n.UNSIGNED_BYTE&&(Y=n.RG8UI),dt===n.UNSIGNED_SHORT&&(Y=n.RG16UI),dt===n.UNSIGNED_INT&&(Y=n.RG32UI),dt===n.BYTE&&(Y=n.RG8I),dt===n.SHORT&&(Y=n.RG16I),dt===n.INT&&(Y=n.RG32I)),P===n.RGB_INTEGER&&(dt===n.UNSIGNED_BYTE&&(Y=n.RGB8UI),dt===n.UNSIGNED_SHORT&&(Y=n.RGB16UI),dt===n.UNSIGNED_INT&&(Y=n.RGB32UI),dt===n.BYTE&&(Y=n.RGB8I),dt===n.SHORT&&(Y=n.RGB16I),dt===n.INT&&(Y=n.RGB32I)),P===n.RGBA_INTEGER&&(dt===n.UNSIGNED_BYTE&&(Y=n.RGBA8UI),dt===n.UNSIGNED_SHORT&&(Y=n.RGBA16UI),dt===n.UNSIGNED_INT&&(Y=n.RGBA32UI),dt===n.BYTE&&(Y=n.RGBA8I),dt===n.SHORT&&(Y=n.RGBA16I),dt===n.INT&&(Y=n.RGBA32I)),P===n.RGB&&dt===n.UNSIGNED_INT_5_9_9_9_REV&&(Y=n.RGB9_E5),P===n.RGBA){let pt=It?Ia:Ce.getTransfer(At);dt===n.FLOAT&&(Y=n.RGBA32F),dt===n.HALF_FLOAT&&(Y=n.RGBA16F),dt===n.UNSIGNED_BYTE&&(Y=pt===Ne?n.SRGB8_ALPHA8:n.RGBA8),dt===n.UNSIGNED_SHORT_4_4_4_4&&(Y=n.RGBA4),dt===n.UNSIGNED_SHORT_5_5_5_1&&(Y=n.RGB5_A1)}return(Y===n.R16F||Y===n.R32F||Y===n.RG16F||Y===n.RG32F||Y===n.RGBA16F||Y===n.RGBA32F)&&t.get("EXT_color_buffer_float"),Y}function y(H,P){let dt;return H?P===null||P===fs||P===Js?dt=n.DEPTH24_STENCIL8:P===si?dt=n.DEPTH32F_STENCIL8:P===Ur&&(dt=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):P===null||P===fs||P===Js?dt=n.DEPTH_COMPONENT24:P===si?dt=n.DEPTH_COMPONENT32F:P===Ur&&(dt=n.DEPTH_COMPONENT16),dt}function k(H,P){return m(H)===!0||H.isFramebufferTexture&&H.minFilter!==Sn&&H.minFilter!==ii?Math.log2(Math.max(P.width,P.height))+1:H.mipmaps!==void 0&&H.mipmaps.length>0?H.mipmaps.length:H.isCompressedTexture&&Array.isArray(H.image)?P.mipmaps.length:1}function w(H){let P=H.target;P.removeEventListener("dispose",w),R(P),P.isVideoTexture&&p.delete(P)}function C(H){let P=H.target;P.removeEventListener("dispose",C),v(P)}function R(H){let P=i.get(H);if(P.__webglInit===void 0)return;let dt=H.source,At=d.get(dt);if(At){let It=At[P.__cacheKey];It.usedTimes--,It.usedTimes===0&&M(H),Object.keys(At).length===0&&d.delete(dt)}i.remove(H)}function M(H){let P=i.get(H);n.deleteTexture(P.__webglTexture);let dt=H.source,At=d.get(dt);delete At[P.__cacheKey],o.memory.textures--}function v(H){let P=i.get(H);if(H.depthTexture&&(H.depthTexture.dispose(),i.remove(H.depthTexture)),H.isWebGLCubeRenderTarget)for(let At=0;At<6;At++){if(Array.isArray(P.__webglFramebuffer[At]))for(let It=0;It<P.__webglFramebuffer[At].length;It++)n.deleteFramebuffer(P.__webglFramebuffer[At][It]);else n.deleteFramebuffer(P.__webglFramebuffer[At]);P.__webglDepthbuffer&&n.deleteRenderbuffer(P.__webglDepthbuffer[At])}else{if(Array.isArray(P.__webglFramebuffer))for(let At=0;At<P.__webglFramebuffer.length;At++)n.deleteFramebuffer(P.__webglFramebuffer[At]);else n.deleteFramebuffer(P.__webglFramebuffer);if(P.__webglDepthbuffer&&n.deleteRenderbuffer(P.__webglDepthbuffer),P.__webglMultisampledFramebuffer&&n.deleteFramebuffer(P.__webglMultisampledFramebuffer),P.__webglColorRenderbuffer)for(let At=0;At<P.__webglColorRenderbuffer.length;At++)P.__webglColorRenderbuffer[At]&&n.deleteRenderbuffer(P.__webglColorRenderbuffer[At]);P.__webglDepthRenderbuffer&&n.deleteRenderbuffer(P.__webglDepthRenderbuffer)}let dt=H.textures;for(let At=0,It=dt.length;At<It;At++){let Y=i.get(dt[At]);Y.__webglTexture&&(n.deleteTexture(Y.__webglTexture),o.memory.textures--),i.remove(dt[At])}i.remove(H)}let b=0;function I(){b=0}function T(){let H=b;return H>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+H+" texture units while this GPU supports only "+s.maxTextures),b+=1,H}function E(H){let P=[];return P.push(H.wrapS),P.push(H.wrapT),P.push(H.wrapR||0),P.push(H.magFilter),P.push(H.minFilter),P.push(H.anisotropy),P.push(H.internalFormat),P.push(H.format),P.push(H.type),P.push(H.generateMipmaps),P.push(H.premultiplyAlpha),P.push(H.flipY),P.push(H.unpackAlignment),P.push(H.colorSpace),P.join()}function F(H,P){let dt=i.get(H);if(H.isVideoTexture&&kt(H),H.isRenderTargetTexture===!1&&H.version>0&&dt.__version!==H.version){let At=H.image;if(At===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(At.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{O(dt,H,P);return}}e.bindTexture(n.TEXTURE_2D,dt.__webglTexture,n.TEXTURE0+P)}function U(H,P){let dt=i.get(H);if(H.version>0&&dt.__version!==H.version){O(dt,H,P);return}e.bindTexture(n.TEXTURE_2D_ARRAY,dt.__webglTexture,n.TEXTURE0+P)}function B(H,P){let dt=i.get(H);if(H.version>0&&dt.__version!==H.version){O(dt,H,P);return}e.bindTexture(n.TEXTURE_3D,dt.__webglTexture,n.TEXTURE0+P)}function z(H,P){let dt=i.get(H);if(H.version>0&&dt.__version!==H.version){X(dt,H,P);return}e.bindTexture(n.TEXTURE_CUBE_MAP,dt.__webglTexture,n.TEXTURE0+P)}let W={[us]:n.REPEAT,[cs]:n.CLAMP_TO_EDGE,[Hl]:n.MIRRORED_REPEAT},it={[Sn]:n.NEAREST,[Wd]:n.NEAREST_MIPMAP_NEAREST,[uo]:n.NEAREST_MIPMAP_LINEAR,[ii]:n.LINEAR,[Ja]:n.LINEAR_MIPMAP_NEAREST,[hs]:n.LINEAR_MIPMAP_LINEAR},D={[Zd]:n.NEVER,[ep]:n.ALWAYS,[Jd]:n.LESS,[ff]:n.LEQUAL,[Kd]:n.EQUAL,[tp]:n.GEQUAL,[jd]:n.GREATER,[Qd]:n.NOTEQUAL};function ft(H,P){if(P.type===si&&t.has("OES_texture_float_linear")===!1&&(P.magFilter===ii||P.magFilter===Ja||P.magFilter===uo||P.magFilter===hs||P.minFilter===ii||P.minFilter===Ja||P.minFilter===uo||P.minFilter===hs)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(H,n.TEXTURE_WRAP_S,W[P.wrapS]),n.texParameteri(H,n.TEXTURE_WRAP_T,W[P.wrapT]),(H===n.TEXTURE_3D||H===n.TEXTURE_2D_ARRAY)&&n.texParameteri(H,n.TEXTURE_WRAP_R,W[P.wrapR]),n.texParameteri(H,n.TEXTURE_MAG_FILTER,it[P.magFilter]),n.texParameteri(H,n.TEXTURE_MIN_FILTER,it[P.minFilter]),P.compareFunction&&(n.texParameteri(H,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(H,n.TEXTURE_COMPARE_FUNC,D[P.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(P.magFilter===Sn||P.minFilter!==uo&&P.minFilter!==hs||P.type===si&&t.has("OES_texture_float_linear")===!1)return;if(P.anisotropy>1||i.get(P).__currentAnisotropy){let dt=t.get("EXT_texture_filter_anisotropic");n.texParameterf(H,dt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(P.anisotropy,s.getMaxAnisotropy())),i.get(P).__currentAnisotropy=P.anisotropy}}}function Lt(H,P){let dt=!1;H.__webglInit===void 0&&(H.__webglInit=!0,P.addEventListener("dispose",w));let At=P.source,It=d.get(At);It===void 0&&(It={},d.set(At,It));let Y=E(P);if(Y!==H.__cacheKey){It[Y]===void 0&&(It[Y]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,dt=!0),It[Y].usedTimes++;let pt=It[H.__cacheKey];pt!==void 0&&(It[H.__cacheKey].usedTimes--,pt.usedTimes===0&&M(P)),H.__cacheKey=Y,H.__webglTexture=It[Y].texture}return dt}function O(H,P,dt){let At=n.TEXTURE_2D;(P.isDataArrayTexture||P.isCompressedArrayTexture)&&(At=n.TEXTURE_2D_ARRAY),P.isData3DTexture&&(At=n.TEXTURE_3D);let It=Lt(H,P),Y=P.source;e.bindTexture(At,H.__webglTexture,n.TEXTURE0+dt);let pt=i.get(Y);if(Y.version!==pt.__version||It===!0){e.activeTexture(n.TEXTURE0+dt);let ct=Ce.getPrimaries(Ce.workingColorSpace),bt=P.colorSpace===Fi?null:Ce.getPrimaries(P.colorSpace),wt=P.colorSpace===Fi||ct===bt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,P.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,P.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,wt);let Rt=_(P.image,!1,s.maxTextureSize);Rt=Z(P,Rt);let Pt=r.convert(P.format,P.colorSpace),Xt=r.convert(P.type),Qt=x(P.internalFormat,Pt,Xt,P.colorSpace,P.isVideoTexture);ft(At,P);let Jt,pe=P.mipmaps,re=P.isVideoTexture!==!0,Se=pt.__version===void 0||It===!0,ot=Y.dataReady,qt=k(P,Rt);if(P.isDepthTexture)Qt=y(P.format===Ks,P.type),Se&&(re?e.texStorage2D(n.TEXTURE_2D,1,Qt,Rt.width,Rt.height):e.texImage2D(n.TEXTURE_2D,0,Qt,Rt.width,Rt.height,0,Pt,Xt,null));else if(P.isDataTexture)if(pe.length>0){re&&Se&&e.texStorage2D(n.TEXTURE_2D,qt,Qt,pe[0].width,pe[0].height);for(let Ct=0,Dt=pe.length;Ct<Dt;Ct++)Jt=pe[Ct],re?ot&&e.texSubImage2D(n.TEXTURE_2D,Ct,0,0,Jt.width,Jt.height,Pt,Xt,Jt.data):e.texImage2D(n.TEXTURE_2D,Ct,Qt,Jt.width,Jt.height,0,Pt,Xt,Jt.data);P.generateMipmaps=!1}else re?(Se&&e.texStorage2D(n.TEXTURE_2D,qt,Qt,Rt.width,Rt.height),ot&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,Rt.width,Rt.height,Pt,Xt,Rt.data)):e.texImage2D(n.TEXTURE_2D,0,Qt,Rt.width,Rt.height,0,Pt,Xt,Rt.data);else if(P.isCompressedTexture)if(P.isCompressedArrayTexture){re&&Se&&e.texStorage3D(n.TEXTURE_2D_ARRAY,qt,Qt,pe[0].width,pe[0].height,Rt.depth);for(let Ct=0,Dt=pe.length;Ct<Dt;Ct++)if(Jt=pe[Ct],P.format!==kn)if(Pt!==null)if(re){if(ot)if(P.layerUpdates.size>0){let A=Fu(Jt.width,Jt.height,P.format,P.type);for(let G of P.layerUpdates){let K=Jt.data.subarray(G*A/Jt.data.BYTES_PER_ELEMENT,(G+1)*A/Jt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Ct,0,0,G,Jt.width,Jt.height,1,Pt,K)}P.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Ct,0,0,0,Jt.width,Jt.height,Rt.depth,Pt,Jt.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Ct,Qt,Jt.width,Jt.height,Rt.depth,0,Jt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else re?ot&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,Ct,0,0,0,Jt.width,Jt.height,Rt.depth,Pt,Xt,Jt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,Ct,Qt,Jt.width,Jt.height,Rt.depth,0,Pt,Xt,Jt.data)}else{re&&Se&&e.texStorage2D(n.TEXTURE_2D,qt,Qt,pe[0].width,pe[0].height);for(let Ct=0,Dt=pe.length;Ct<Dt;Ct++)Jt=pe[Ct],P.format!==kn?Pt!==null?re?ot&&e.compressedTexSubImage2D(n.TEXTURE_2D,Ct,0,0,Jt.width,Jt.height,Pt,Jt.data):e.compressedTexImage2D(n.TEXTURE_2D,Ct,Qt,Jt.width,Jt.height,0,Jt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):re?ot&&e.texSubImage2D(n.TEXTURE_2D,Ct,0,0,Jt.width,Jt.height,Pt,Xt,Jt.data):e.texImage2D(n.TEXTURE_2D,Ct,Qt,Jt.width,Jt.height,0,Pt,Xt,Jt.data)}else if(P.isDataArrayTexture)if(re){if(Se&&e.texStorage3D(n.TEXTURE_2D_ARRAY,qt,Qt,Rt.width,Rt.height,Rt.depth),ot)if(P.layerUpdates.size>0){let Ct=Fu(Rt.width,Rt.height,P.format,P.type);for(let Dt of P.layerUpdates){let A=Rt.data.subarray(Dt*Ct/Rt.data.BYTES_PER_ELEMENT,(Dt+1)*Ct/Rt.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Dt,Rt.width,Rt.height,1,Pt,Xt,A)}P.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Rt.width,Rt.height,Rt.depth,Pt,Xt,Rt.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Qt,Rt.width,Rt.height,Rt.depth,0,Pt,Xt,Rt.data);else if(P.isData3DTexture)re?(Se&&e.texStorage3D(n.TEXTURE_3D,qt,Qt,Rt.width,Rt.height,Rt.depth),ot&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Rt.width,Rt.height,Rt.depth,Pt,Xt,Rt.data)):e.texImage3D(n.TEXTURE_3D,0,Qt,Rt.width,Rt.height,Rt.depth,0,Pt,Xt,Rt.data);else if(P.isFramebufferTexture){if(Se)if(re)e.texStorage2D(n.TEXTURE_2D,qt,Qt,Rt.width,Rt.height);else{let Ct=Rt.width,Dt=Rt.height;for(let A=0;A<qt;A++)e.texImage2D(n.TEXTURE_2D,A,Qt,Ct,Dt,0,Pt,Xt,null),Ct>>=1,Dt>>=1}}else if(pe.length>0){if(re&&Se){let Ct=Ft(pe[0]);e.texStorage2D(n.TEXTURE_2D,qt,Qt,Ct.width,Ct.height)}for(let Ct=0,Dt=pe.length;Ct<Dt;Ct++)Jt=pe[Ct],re?ot&&e.texSubImage2D(n.TEXTURE_2D,Ct,0,0,Pt,Xt,Jt):e.texImage2D(n.TEXTURE_2D,Ct,Qt,Pt,Xt,Jt);P.generateMipmaps=!1}else if(re){if(Se){let Ct=Ft(Rt);e.texStorage2D(n.TEXTURE_2D,qt,Qt,Ct.width,Ct.height)}ot&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,Pt,Xt,Rt)}else e.texImage2D(n.TEXTURE_2D,0,Qt,Pt,Xt,Rt);m(P)&&f(At),pt.__version=Y.version,P.onUpdate&&P.onUpdate(P)}H.__version=P.version}function X(H,P,dt){if(P.image.length!==6)return;let At=Lt(H,P),It=P.source;e.bindTexture(n.TEXTURE_CUBE_MAP,H.__webglTexture,n.TEXTURE0+dt);let Y=i.get(It);if(It.version!==Y.__version||At===!0){e.activeTexture(n.TEXTURE0+dt);let pt=Ce.getPrimaries(Ce.workingColorSpace),ct=P.colorSpace===Fi?null:Ce.getPrimaries(P.colorSpace),bt=P.colorSpace===Fi||pt===ct?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,P.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,P.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,bt);let wt=P.isCompressedTexture||P.image[0].isCompressedTexture,Rt=P.image[0]&&P.image[0].isDataTexture,Pt=[];for(let Dt=0;Dt<6;Dt++)!wt&&!Rt?Pt[Dt]=_(P.image[Dt],!0,s.maxCubemapSize):Pt[Dt]=Rt?P.image[Dt].image:P.image[Dt],Pt[Dt]=Z(P,Pt[Dt]);let Xt=Pt[0],Qt=r.convert(P.format,P.colorSpace),Jt=r.convert(P.type),pe=x(P.internalFormat,Qt,Jt,P.colorSpace),re=P.isVideoTexture!==!0,Se=Y.__version===void 0||At===!0,ot=It.dataReady,qt=k(P,Xt);ft(n.TEXTURE_CUBE_MAP,P);let Ct;if(wt){re&&Se&&e.texStorage2D(n.TEXTURE_CUBE_MAP,qt,pe,Xt.width,Xt.height);for(let Dt=0;Dt<6;Dt++){Ct=Pt[Dt].mipmaps;for(let A=0;A<Ct.length;A++){let G=Ct[A];P.format!==kn?Qt!==null?re?ot&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,A,0,0,G.width,G.height,Qt,G.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,A,pe,G.width,G.height,0,G.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):re?ot&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,A,0,0,G.width,G.height,Qt,Jt,G.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,A,pe,G.width,G.height,0,Qt,Jt,G.data)}}}else{if(Ct=P.mipmaps,re&&Se){Ct.length>0&&qt++;let Dt=Ft(Pt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,qt,pe,Dt.width,Dt.height)}for(let Dt=0;Dt<6;Dt++)if(Rt){re?ot&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,0,0,0,Pt[Dt].width,Pt[Dt].height,Qt,Jt,Pt[Dt].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,0,pe,Pt[Dt].width,Pt[Dt].height,0,Qt,Jt,Pt[Dt].data);for(let A=0;A<Ct.length;A++){let K=Ct[A].image[Dt].image;re?ot&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,A+1,0,0,K.width,K.height,Qt,Jt,K.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,A+1,pe,K.width,K.height,0,Qt,Jt,K.data)}}else{re?ot&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,0,0,0,Qt,Jt,Pt[Dt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,0,pe,Qt,Jt,Pt[Dt]);for(let A=0;A<Ct.length;A++){let G=Ct[A];re?ot&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,A+1,0,0,Qt,Jt,G.image[Dt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,A+1,pe,Qt,Jt,G.image[Dt])}}}m(P)&&f(n.TEXTURE_CUBE_MAP),Y.__version=It.version,P.onUpdate&&P.onUpdate(P)}H.__version=P.version}function J(H,P,dt,At,It,Y){let pt=r.convert(dt.format,dt.colorSpace),ct=r.convert(dt.type),bt=x(dt.internalFormat,pt,ct,dt.colorSpace),wt=i.get(P),Rt=i.get(dt);if(Rt.__renderTarget=P,!wt.__hasExternalTextures){let Pt=Math.max(1,P.width>>Y),Xt=Math.max(1,P.height>>Y);It===n.TEXTURE_3D||It===n.TEXTURE_2D_ARRAY?e.texImage3D(It,Y,bt,Pt,Xt,P.depth,0,pt,ct,null):e.texImage2D(It,Y,bt,Pt,Xt,0,pt,ct,null)}e.bindFramebuffer(n.FRAMEBUFFER,H),_t(P)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,At,It,Rt.__webglTexture,0,rt(P)):(It===n.TEXTURE_2D||It>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&It<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,At,It,Rt.__webglTexture,Y),e.bindFramebuffer(n.FRAMEBUFFER,null)}function V(H,P,dt){if(n.bindRenderbuffer(n.RENDERBUFFER,H),P.depthBuffer){let At=P.depthTexture,It=At&&At.isDepthTexture?At.type:null,Y=y(P.stencilBuffer,It),pt=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ct=rt(P);_t(P)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ct,Y,P.width,P.height):dt?n.renderbufferStorageMultisample(n.RENDERBUFFER,ct,Y,P.width,P.height):n.renderbufferStorage(n.RENDERBUFFER,Y,P.width,P.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,pt,n.RENDERBUFFER,H)}else{let At=P.textures;for(let It=0;It<At.length;It++){let Y=At[It],pt=r.convert(Y.format,Y.colorSpace),ct=r.convert(Y.type),bt=x(Y.internalFormat,pt,ct,Y.colorSpace),wt=rt(P);dt&&_t(P)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,wt,bt,P.width,P.height):_t(P)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,wt,bt,P.width,P.height):n.renderbufferStorage(n.RENDERBUFFER,bt,P.width,P.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function st(H,P){if(P&&P.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,H),!(P.depthTexture&&P.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let At=i.get(P.depthTexture);At.__renderTarget=P,(!At.__webglTexture||P.depthTexture.image.width!==P.width||P.depthTexture.image.height!==P.height)&&(P.depthTexture.image.width=P.width,P.depthTexture.image.height=P.height,P.depthTexture.needsUpdate=!0),F(P.depthTexture,0);let It=At.__webglTexture,Y=rt(P);if(P.depthTexture.format===Gs)_t(P)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,It,0,Y):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,It,0);else if(P.depthTexture.format===Ks)_t(P)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,It,0,Y):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,It,0);else throw new Error("Unknown depthTexture format")}function nt(H){let P=i.get(H),dt=H.isWebGLCubeRenderTarget===!0;if(P.__boundDepthTexture!==H.depthTexture){let At=H.depthTexture;if(P.__depthDisposeCallback&&P.__depthDisposeCallback(),At){let It=()=>{delete P.__boundDepthTexture,delete P.__depthDisposeCallback,At.removeEventListener("dispose",It)};At.addEventListener("dispose",It),P.__depthDisposeCallback=It}P.__boundDepthTexture=At}if(H.depthTexture&&!P.__autoAllocateDepthBuffer){if(dt)throw new Error("target.depthTexture not supported in Cube render targets");st(P.__webglFramebuffer,H)}else if(dt){P.__webglDepthbuffer=[];for(let At=0;At<6;At++)if(e.bindFramebuffer(n.FRAMEBUFFER,P.__webglFramebuffer[At]),P.__webglDepthbuffer[At]===void 0)P.__webglDepthbuffer[At]=n.createRenderbuffer(),V(P.__webglDepthbuffer[At],H,!1);else{let It=H.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Y=P.__webglDepthbuffer[At];n.bindRenderbuffer(n.RENDERBUFFER,Y),n.framebufferRenderbuffer(n.FRAMEBUFFER,It,n.RENDERBUFFER,Y)}}else if(e.bindFramebuffer(n.FRAMEBUFFER,P.__webglFramebuffer),P.__webglDepthbuffer===void 0)P.__webglDepthbuffer=n.createRenderbuffer(),V(P.__webglDepthbuffer,H,!1);else{let At=H.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,It=P.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,It),n.framebufferRenderbuffer(n.FRAMEBUFFER,At,n.RENDERBUFFER,It)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function St(H,P,dt){let At=i.get(H);P!==void 0&&J(At.__webglFramebuffer,H,H.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),dt!==void 0&&nt(H)}function zt(H){let P=H.texture,dt=i.get(H),At=i.get(P);H.addEventListener("dispose",C);let It=H.textures,Y=H.isWebGLCubeRenderTarget===!0,pt=It.length>1;if(pt||(At.__webglTexture===void 0&&(At.__webglTexture=n.createTexture()),At.__version=P.version,o.memory.textures++),Y){dt.__webglFramebuffer=[];for(let ct=0;ct<6;ct++)if(P.mipmaps&&P.mipmaps.length>0){dt.__webglFramebuffer[ct]=[];for(let bt=0;bt<P.mipmaps.length;bt++)dt.__webglFramebuffer[ct][bt]=n.createFramebuffer()}else dt.__webglFramebuffer[ct]=n.createFramebuffer()}else{if(P.mipmaps&&P.mipmaps.length>0){dt.__webglFramebuffer=[];for(let ct=0;ct<P.mipmaps.length;ct++)dt.__webglFramebuffer[ct]=n.createFramebuffer()}else dt.__webglFramebuffer=n.createFramebuffer();if(pt)for(let ct=0,bt=It.length;ct<bt;ct++){let wt=i.get(It[ct]);wt.__webglTexture===void 0&&(wt.__webglTexture=n.createTexture(),o.memory.textures++)}if(H.samples>0&&_t(H)===!1){dt.__webglMultisampledFramebuffer=n.createFramebuffer(),dt.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,dt.__webglMultisampledFramebuffer);for(let ct=0;ct<It.length;ct++){let bt=It[ct];dt.__webglColorRenderbuffer[ct]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,dt.__webglColorRenderbuffer[ct]);let wt=r.convert(bt.format,bt.colorSpace),Rt=r.convert(bt.type),Pt=x(bt.internalFormat,wt,Rt,bt.colorSpace,H.isXRRenderTarget===!0),Xt=rt(H);n.renderbufferStorageMultisample(n.RENDERBUFFER,Xt,Pt,H.width,H.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ct,n.RENDERBUFFER,dt.__webglColorRenderbuffer[ct])}n.bindRenderbuffer(n.RENDERBUFFER,null),H.depthBuffer&&(dt.__webglDepthRenderbuffer=n.createRenderbuffer(),V(dt.__webglDepthRenderbuffer,H,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Y){e.bindTexture(n.TEXTURE_CUBE_MAP,At.__webglTexture),ft(n.TEXTURE_CUBE_MAP,P);for(let ct=0;ct<6;ct++)if(P.mipmaps&&P.mipmaps.length>0)for(let bt=0;bt<P.mipmaps.length;bt++)J(dt.__webglFramebuffer[ct][bt],H,P,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,bt);else J(dt.__webglFramebuffer[ct],H,P,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0);m(P)&&f(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(pt){for(let ct=0,bt=It.length;ct<bt;ct++){let wt=It[ct],Rt=i.get(wt);e.bindTexture(n.TEXTURE_2D,Rt.__webglTexture),ft(n.TEXTURE_2D,wt),J(dt.__webglFramebuffer,H,wt,n.COLOR_ATTACHMENT0+ct,n.TEXTURE_2D,0),m(wt)&&f(n.TEXTURE_2D)}e.unbindTexture()}else{let ct=n.TEXTURE_2D;if((H.isWebGL3DRenderTarget||H.isWebGLArrayRenderTarget)&&(ct=H.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(ct,At.__webglTexture),ft(ct,P),P.mipmaps&&P.mipmaps.length>0)for(let bt=0;bt<P.mipmaps.length;bt++)J(dt.__webglFramebuffer[bt],H,P,n.COLOR_ATTACHMENT0,ct,bt);else J(dt.__webglFramebuffer,H,P,n.COLOR_ATTACHMENT0,ct,0);m(P)&&f(ct),e.unbindTexture()}H.depthBuffer&&nt(H)}function ht(H){let P=H.textures;for(let dt=0,At=P.length;dt<At;dt++){let It=P[dt];if(m(It)){let Y=S(H),pt=i.get(It).__webglTexture;e.bindTexture(Y,pt),f(Y),e.unbindTexture()}}}let yt=[],N=[];function ut(H){if(H.samples>0){if(_t(H)===!1){let P=H.textures,dt=H.width,At=H.height,It=n.COLOR_BUFFER_BIT,Y=H.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,pt=i.get(H),ct=P.length>1;if(ct)for(let bt=0;bt<P.length;bt++)e.bindFramebuffer(n.FRAMEBUFFER,pt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+bt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,pt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+bt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,pt.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,pt.__webglFramebuffer);for(let bt=0;bt<P.length;bt++){if(H.resolveDepthBuffer&&(H.depthBuffer&&(It|=n.DEPTH_BUFFER_BIT),H.stencilBuffer&&H.resolveStencilBuffer&&(It|=n.STENCIL_BUFFER_BIT)),ct){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,pt.__webglColorRenderbuffer[bt]);let wt=i.get(P[bt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,wt,0)}n.blitFramebuffer(0,0,dt,At,0,0,dt,At,It,n.NEAREST),l===!0&&(yt.length=0,N.length=0,yt.push(n.COLOR_ATTACHMENT0+bt),H.depthBuffer&&H.resolveDepthBuffer===!1&&(yt.push(Y),N.push(Y),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,N)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,yt))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ct)for(let bt=0;bt<P.length;bt++){e.bindFramebuffer(n.FRAMEBUFFER,pt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+bt,n.RENDERBUFFER,pt.__webglColorRenderbuffer[bt]);let wt=i.get(P[bt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,pt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+bt,n.TEXTURE_2D,wt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,pt.__webglMultisampledFramebuffer)}else if(H.depthBuffer&&H.resolveDepthBuffer===!1&&l){let P=H.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[P])}}}function rt(H){return Math.min(s.maxSamples,H.samples)}function _t(H){let P=i.get(H);return H.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&P.__useRenderToTexture!==!1}function kt(H){let P=o.render.frame;p.get(H)!==P&&(p.set(H,P),H.update())}function Z(H,P){let dt=H.colorSpace,At=H.format,It=H.type;return H.isCompressedTexture===!0||H.isVideoTexture===!0||dt!==ir&&dt!==Fi&&(Ce.getTransfer(dt)===Ne?(At!==kn||It!==_i)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",dt)),P}function Ft(H){return typeof HTMLImageElement<"u"&&H instanceof HTMLImageElement?(h.width=H.naturalWidth||H.width,h.height=H.naturalHeight||H.height):typeof VideoFrame<"u"&&H instanceof VideoFrame?(h.width=H.displayWidth,h.height=H.displayHeight):(h.width=H.width,h.height=H.height),h}this.allocateTextureUnit=T,this.resetTextureUnits=I,this.setTexture2D=F,this.setTexture2DArray=U,this.setTexture3D=B,this.setTextureCube=z,this.rebindTextures=St,this.setupRenderTarget=zt,this.updateRenderTargetMipmap=ht,this.updateMultisampleRenderTarget=ut,this.setupDepthRenderbuffer=nt,this.setupFrameBufferTexture=J,this.useMultisampledRTT=_t}function ax(n,t){function e(i,s=Fi){let r,o=Ce.getTransfer(s);if(i===_i)return n.UNSIGNED_BYTE;if(i===eh)return n.UNSIGNED_SHORT_4_4_4_4;if(i===nh)return n.UNSIGNED_SHORT_5_5_5_1;if(i===sf)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===ef)return n.BYTE;if(i===nf)return n.SHORT;if(i===Ur)return n.UNSIGNED_SHORT;if(i===th)return n.INT;if(i===fs)return n.UNSIGNED_INT;if(i===si)return n.FLOAT;if(i===Zr)return n.HALF_FLOAT;if(i===rf)return n.ALPHA;if(i===of)return n.RGB;if(i===kn)return n.RGBA;if(i===af)return n.LUMINANCE;if(i===lf)return n.LUMINANCE_ALPHA;if(i===Gs)return n.DEPTH_COMPONENT;if(i===Ks)return n.DEPTH_STENCIL;if(i===ih)return n.RED;if(i===sh)return n.RED_INTEGER;if(i===cf)return n.RG;if(i===rh)return n.RG_INTEGER;if(i===oh)return n.RGBA_INTEGER;if(i===Vo||i===Go||i===Wo||i===Xo)if(o===Ne)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Vo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Go)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Wo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Xo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Vo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Go)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Wo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Xo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===$l||i===Vl||i===Gl||i===Wl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===$l)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Vl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Gl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Wl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Xl||i===ql||i===Yl)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Xl||i===ql)return o===Ne?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Yl)return o===Ne?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Zl||i===Jl||i===Kl||i===jl||i===Ql||i===tc||i===ec||i===nc||i===ic||i===sc||i===rc||i===oc||i===ac||i===lc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Zl)return o===Ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Jl)return o===Ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Kl)return o===Ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===jl)return o===Ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ql)return o===Ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===tc)return o===Ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===ec)return o===Ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===nc)return o===Ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===ic)return o===Ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===sc)return o===Ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===rc)return o===Ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===oc)return o===Ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===ac)return o===Ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===lc)return o===Ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===qo||i===cc||i===hc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===qo)return o===Ne?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===cc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===hc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===hf||i===uc||i===fc||i===dc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===qo)return r.COMPRESSED_RED_RGTC1_EXT;if(i===uc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===fc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===dc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Js?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}var Cc=class extends bn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},de=class extends Fe{constructor(){super(),this.isGroup=!0,this.type="Group"}},lx={type:"move"},Lr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new de,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new de,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new $,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new $),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new de,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new $,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new $),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,h=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(h&&t.hand){o=!0;for(let _ of t.hand.values()){let m=e.getJointPose(_,i),f=this._getHandJoint(h,_);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}let p=h.joints["index-finger-tip"],g=h.joints["thumb-tip"],d=p.position.distanceTo(g.position),c=.02,u=.005;h.inputState.pinching&&d>c+u?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!h.inputState.pinching&&d<=c-u&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(lx)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),h!==null&&(h.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new de;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},cx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,hx=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Ic=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){let s=new An,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new wn({vertexShader:cx,fragmentShader:hx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new De(new dn(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Pc=class extends $i{constructor(t,e){super();let i=this,s=null,r=1,o=null,a="local-floor",l=1,h=null,p=null,g=null,d=null,c=null,u=null,_=new Ic,m=e.getContextAttributes(),f=null,S=null,x=[],y=[],k=new Bt,w=null,C=new bn;C.viewport=new Ze;let R=new bn;R.viewport=new Ze;let M=[C,R],v=new Cc,b=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(O){let X=x[O];return X===void 0&&(X=new Lr,x[O]=X),X.getTargetRaySpace()},this.getControllerGrip=function(O){let X=x[O];return X===void 0&&(X=new Lr,x[O]=X),X.getGripSpace()},this.getHand=function(O){let X=x[O];return X===void 0&&(X=new Lr,x[O]=X),X.getHandSpace()};function T(O){let X=y.indexOf(O.inputSource);if(X===-1)return;let J=x[X];J!==void 0&&(J.update(O.inputSource,O.frame,h||o),J.dispatchEvent({type:O.type,data:O.inputSource}))}function E(){s.removeEventListener("select",T),s.removeEventListener("selectstart",T),s.removeEventListener("selectend",T),s.removeEventListener("squeeze",T),s.removeEventListener("squeezestart",T),s.removeEventListener("squeezeend",T),s.removeEventListener("end",E),s.removeEventListener("inputsourceschange",F);for(let O=0;O<x.length;O++){let X=y[O];X!==null&&(y[O]=null,x[O].disconnect(X))}b=null,I=null,_.reset(),t.setRenderTarget(f),c=null,d=null,g=null,s=null,S=null,Lt.stop(),i.isPresenting=!1,t.setPixelRatio(w),t.setSize(k.width,k.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(O){r=O,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(O){a=O,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||o},this.setReferenceSpace=function(O){h=O},this.getBaseLayer=function(){return d!==null?d:c},this.getBinding=function(){return g},this.getFrame=function(){return u},this.getSession=function(){return s},this.setSession=async function(O){if(s=O,s!==null){if(f=t.getRenderTarget(),s.addEventListener("select",T),s.addEventListener("selectstart",T),s.addEventListener("selectend",T),s.addEventListener("squeeze",T),s.addEventListener("squeezestart",T),s.addEventListener("squeezeend",T),s.addEventListener("end",E),s.addEventListener("inputsourceschange",F),m.xrCompatible!==!0&&await e.makeXRCompatible(),w=t.getPixelRatio(),t.getSize(k),s.renderState.layers===void 0){let X={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};c=new XRWebGLLayer(s,e,X),s.updateRenderState({baseLayer:c}),t.setPixelRatio(1),t.setSize(c.framebufferWidth,c.framebufferHeight,!1),S=new Mi(c.framebufferWidth,c.framebufferHeight,{format:kn,type:_i,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let X=null,J=null,V=null;m.depth&&(V=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,X=m.stencil?Ks:Gs,J=m.stencil?Js:fs);let st={colorFormat:e.RGBA8,depthFormat:V,scaleFactor:r};g=new XRWebGLBinding(s,e),d=g.createProjectionLayer(st),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),S=new Mi(d.textureWidth,d.textureHeight,{format:kn,type:_i,depthTexture:new aa(d.textureWidth,d.textureHeight,J,void 0,void 0,void 0,void 0,void 0,void 0,X),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),h=null,o=await s.requestReferenceSpace(a),Lt.setContext(s),Lt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function F(O){for(let X=0;X<O.removed.length;X++){let J=O.removed[X],V=y.indexOf(J);V>=0&&(y[V]=null,x[V].disconnect(J))}for(let X=0;X<O.added.length;X++){let J=O.added[X],V=y.indexOf(J);if(V===-1){for(let nt=0;nt<x.length;nt++)if(nt>=y.length){y.push(J),V=nt;break}else if(y[nt]===null){y[nt]=J,V=nt;break}if(V===-1)break}let st=x[V];st&&st.connect(J)}}let U=new $,B=new $;function z(O,X,J){U.setFromMatrixPosition(X.matrixWorld),B.setFromMatrixPosition(J.matrixWorld);let V=U.distanceTo(B),st=X.projectionMatrix.elements,nt=J.projectionMatrix.elements,St=st[14]/(st[10]-1),zt=st[14]/(st[10]+1),ht=(st[9]+1)/st[5],yt=(st[9]-1)/st[5],N=(st[8]-1)/st[0],ut=(nt[8]+1)/nt[0],rt=St*N,_t=St*ut,kt=V/(-N+ut),Z=kt*-N;if(X.matrixWorld.decompose(O.position,O.quaternion,O.scale),O.translateX(Z),O.translateZ(kt),O.matrixWorld.compose(O.position,O.quaternion,O.scale),O.matrixWorldInverse.copy(O.matrixWorld).invert(),st[10]===-1)O.projectionMatrix.copy(X.projectionMatrix),O.projectionMatrixInverse.copy(X.projectionMatrixInverse);else{let Ft=St+kt,H=zt+kt,P=rt-Z,dt=_t+(V-Z),At=ht*zt/H*Ft,It=yt*zt/H*Ft;O.projectionMatrix.makePerspective(P,dt,At,It,Ft,H),O.projectionMatrixInverse.copy(O.projectionMatrix).invert()}}function W(O,X){X===null?O.matrixWorld.copy(O.matrix):O.matrixWorld.multiplyMatrices(X.matrixWorld,O.matrix),O.matrixWorldInverse.copy(O.matrixWorld).invert()}this.updateCamera=function(O){if(s===null)return;let X=O.near,J=O.far;_.texture!==null&&(_.depthNear>0&&(X=_.depthNear),_.depthFar>0&&(J=_.depthFar)),v.near=R.near=C.near=X,v.far=R.far=C.far=J,(b!==v.near||I!==v.far)&&(s.updateRenderState({depthNear:v.near,depthFar:v.far}),b=v.near,I=v.far),C.layers.mask=O.layers.mask|2,R.layers.mask=O.layers.mask|4,v.layers.mask=C.layers.mask|R.layers.mask;let V=O.parent,st=v.cameras;W(v,V);for(let nt=0;nt<st.length;nt++)W(st[nt],V);st.length===2?z(v,C,R):v.projectionMatrix.copy(C.projectionMatrix),it(O,v,V)};function it(O,X,J){J===null?O.matrix.copy(X.matrixWorld):(O.matrix.copy(J.matrixWorld),O.matrix.invert(),O.matrix.multiply(X.matrixWorld)),O.matrix.decompose(O.position,O.quaternion,O.scale),O.updateMatrixWorld(!0),O.projectionMatrix.copy(X.projectionMatrix),O.projectionMatrixInverse.copy(X.projectionMatrixInverse),O.isPerspectiveCamera&&(O.fov=Nr*2*Math.atan(1/O.projectionMatrix.elements[5]),O.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(d===null&&c===null))return l},this.setFoveation=function(O){l=O,d!==null&&(d.fixedFoveation=O),c!==null&&c.fixedFoveation!==void 0&&(c.fixedFoveation=O)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(v)};let D=null;function ft(O,X){if(p=X.getViewerPose(h||o),u=X,p!==null){let J=p.views;c!==null&&(t.setRenderTargetFramebuffer(S,c.framebuffer),t.setRenderTarget(S));let V=!1;J.length!==v.cameras.length&&(v.cameras.length=0,V=!0);for(let nt=0;nt<J.length;nt++){let St=J[nt],zt=null;if(c!==null)zt=c.getViewport(St);else{let yt=g.getViewSubImage(d,St);zt=yt.viewport,nt===0&&(t.setRenderTargetTextures(S,yt.colorTexture,d.ignoreDepthValues?void 0:yt.depthStencilTexture),t.setRenderTarget(S))}let ht=M[nt];ht===void 0&&(ht=new bn,ht.layers.enable(nt),ht.viewport=new Ze,M[nt]=ht),ht.matrix.fromArray(St.transform.matrix),ht.matrix.decompose(ht.position,ht.quaternion,ht.scale),ht.projectionMatrix.fromArray(St.projectionMatrix),ht.projectionMatrixInverse.copy(ht.projectionMatrix).invert(),ht.viewport.set(zt.x,zt.y,zt.width,zt.height),nt===0&&(v.matrix.copy(ht.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),V===!0&&v.cameras.push(ht)}let st=s.enabledFeatures;if(st&&st.includes("depth-sensing")){let nt=g.getDepthInformation(J[0]);nt&&nt.isValid&&nt.texture&&_.init(t,nt,s.renderState)}}for(let J=0;J<x.length;J++){let V=y[J],st=x[J];V!==null&&st!==void 0&&st.update(V,X,h||o)}D&&D(O,X),X.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:X}),u=null}let Lt=new gf;Lt.setAnimationLoop(ft),this.setAnimationLoop=function(O){D=O},this.dispose=function(){}}},rs=new Zn,ux=new we;function fx(n,t){function e(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,mf(n)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,S,x,y){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),g(m,f)):f.isMeshPhongMaterial?(r(m,f),p(m,f)):f.isMeshStandardMaterial?(r(m,f),d(m,f),f.isMeshPhysicalMaterial&&c(m,f,y)):f.isMeshMatcapMaterial?(r(m,f),u(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),_(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?l(m,f,S,x):f.isSpriteMaterial?h(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,e(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===fn&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,e(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===fn&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,e(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,e(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);let S=t.get(f),x=S.envMap,y=S.envMapRotation;x&&(m.envMap.value=x,rs.copy(y),rs.x*=-1,rs.y*=-1,rs.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(rs.y*=-1,rs.z*=-1),m.envMapRotation.value.setFromMatrix4(ux.makeRotationFromEuler(rs)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,S,x){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*S,m.scale.value=x*.5,f.map&&(m.map.value=f.map,e(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function p(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function g(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function c(m,f,S){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===fn&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,m.specularIntensityMapTransform))}function u(m,f){f.matcap&&(m.matcap.value=f.matcap)}function _(m,f){let S=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function dx(n,t,e,i){let s={},r={},o=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,x){let y=x.program;i.uniformBlockBinding(S,y)}function h(S,x){let y=s[S.id];y===void 0&&(u(S),y=p(S),s[S.id]=y,S.addEventListener("dispose",m));let k=x.program;i.updateUBOMapping(S,k);let w=t.render.frame;r[S.id]!==w&&(d(S),r[S.id]=w)}function p(S){let x=g();S.__bindingPointIndex=x;let y=n.createBuffer(),k=S.__size,w=S.usage;return n.bindBuffer(n.UNIFORM_BUFFER,y),n.bufferData(n.UNIFORM_BUFFER,k,w),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,x,y),y}function g(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(S){let x=s[S.id],y=S.uniforms,k=S.__cache;n.bindBuffer(n.UNIFORM_BUFFER,x);for(let w=0,C=y.length;w<C;w++){let R=Array.isArray(y[w])?y[w]:[y[w]];for(let M=0,v=R.length;M<v;M++){let b=R[M];if(c(b,w,M,k)===!0){let I=b.__offset,T=Array.isArray(b.value)?b.value:[b.value],E=0;for(let F=0;F<T.length;F++){let U=T[F],B=_(U);typeof U=="number"||typeof U=="boolean"?(b.__data[0]=U,n.bufferSubData(n.UNIFORM_BUFFER,I+E,b.__data)):U.isMatrix3?(b.__data[0]=U.elements[0],b.__data[1]=U.elements[1],b.__data[2]=U.elements[2],b.__data[3]=0,b.__data[4]=U.elements[3],b.__data[5]=U.elements[4],b.__data[6]=U.elements[5],b.__data[7]=0,b.__data[8]=U.elements[6],b.__data[9]=U.elements[7],b.__data[10]=U.elements[8],b.__data[11]=0):(U.toArray(b.__data,E),E+=B.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,I,b.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function c(S,x,y,k){let w=S.value,C=x+"_"+y;if(k[C]===void 0)return typeof w=="number"||typeof w=="boolean"?k[C]=w:k[C]=w.clone(),!0;{let R=k[C];if(typeof w=="number"||typeof w=="boolean"){if(R!==w)return k[C]=w,!0}else if(R.equals(w)===!1)return R.copy(w),!0}return!1}function u(S){let x=S.uniforms,y=0,k=16;for(let C=0,R=x.length;C<R;C++){let M=Array.isArray(x[C])?x[C]:[x[C]];for(let v=0,b=M.length;v<b;v++){let I=M[v],T=Array.isArray(I.value)?I.value:[I.value];for(let E=0,F=T.length;E<F;E++){let U=T[E],B=_(U),z=y%k,W=z%B.boundary,it=z+W;y+=W,it!==0&&k-it<B.storage&&(y+=k-it),I.__data=new Float32Array(B.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=y,y+=B.storage}}}let w=y%k;return w>0&&(y+=k-w),S.__size=y,S.__cache={},this}function _(S){let x={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(x.boundary=4,x.storage=4):S.isVector2?(x.boundary=8,x.storage=8):S.isVector3||S.isColor?(x.boundary=16,x.storage=12):S.isVector4?(x.boundary=16,x.storage=16):S.isMatrix3?(x.boundary=48,x.storage=48):S.isMatrix4?(x.boundary=64,x.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),x}function m(S){let x=S.target;x.removeEventListener("dispose",m);let y=o.indexOf(x.__bindingPointIndex);o.splice(y,1),n.deleteBuffer(s[x.id]),delete s[x.id],delete r[x.id]}function f(){for(let S in s)n.deleteBuffer(s[S]);o=[],s={},r={}}return{bind:l,update:h,dispose:f}}var la=class{constructor(t={}){let{canvas:e=xp(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:h=!1,powerPreference:p="default",failIfMajorPerformanceCaveat:g=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let c;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");c=i.getContextAttributes().alpha}else c=o;let u=new Uint32Array(4),_=new Int32Array(4),m=null,f=null,S=[],x=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=hn,this.toneMapping=ri,this.toneMappingExposure=1;let y=this,k=!1,w=0,C=0,R=null,M=-1,v=null,b=new Ze,I=new Ze,T=null,E=new oe(0),F=0,U=e.width,B=e.height,z=1,W=null,it=null,D=new Ze(0,0,U,B),ft=new Ze(0,0,U,B),Lt=!1,O=new Fr,X=!1,J=!1,V=new we,st=new we,nt=new $,St=new Ze,zt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ht=!1;function yt(){return R===null?z:1}let N=i;function ut(L,q){return e.getContext(L,q)}try{let L={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:h,powerPreference:p,failIfMajorPerformanceCaveat:g};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${jc}`),e.addEventListener("webglcontextlost",Dt,!1),e.addEventListener("webglcontextrestored",A,!1),e.addEventListener("webglcontextcreationerror",G,!1),N===null){let q="webgl2";if(N=ut(q,L),N===null)throw ut(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(L){throw console.error("THREE.WebGLRenderer: "+L.message),L}let rt,_t,kt,Z,Ft,H,P,dt,At,It,Y,pt,ct,bt,wt,Rt,Pt,Xt,Qt,Jt,pe,re,Se,ot;function qt(){rt=new Cg(N),rt.init(),re=new ax(N,rt),_t=new Sg(N,rt,t,re),kt=new sx(N,rt),_t.reverseDepthBuffer&&d&&kt.buffers.depth.setReversed(!0),Z=new Lg(N),Ft=new Wy,H=new ox(N,rt,kt,Ft,_t,re,Z),P=new Eg(y),dt=new Rg(y),At=new Bp(N),Se=new Mg(N,At),It=new Ig(N,At,Z,Se),Y=new Dg(N,It,At,Z),Qt=new kg(N,_t,H),Rt=new wg(Ft),pt=new Gy(y,P,dt,rt,_t,Se,Rt),ct=new fx(y,Ft),bt=new qy,wt=new Qy(rt),Xt=new _g(y,P,dt,kt,Y,c,l),Pt=new nx(y,Y,_t),ot=new dx(N,Z,_t,kt),Jt=new bg(N,rt,Z),pe=new Pg(N,rt,Z),Z.programs=pt.programs,y.capabilities=_t,y.extensions=rt,y.properties=Ft,y.renderLists=bt,y.shadowMap=Pt,y.state=kt,y.info=Z}qt();let Ct=new Pc(y,N);this.xr=Ct,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){let L=rt.get("WEBGL_lose_context");L&&L.loseContext()},this.forceContextRestore=function(){let L=rt.get("WEBGL_lose_context");L&&L.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(L){L!==void 0&&(z=L,this.setSize(U,B,!1))},this.getSize=function(L){return L.set(U,B)},this.setSize=function(L,q,Q=!0){if(Ct.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}U=L,B=q,e.width=Math.floor(L*z),e.height=Math.floor(q*z),Q===!0&&(e.style.width=L+"px",e.style.height=q+"px"),this.setViewport(0,0,L,q)},this.getDrawingBufferSize=function(L){return L.set(U*z,B*z).floor()},this.setDrawingBufferSize=function(L,q,Q){U=L,B=q,z=Q,e.width=Math.floor(L*Q),e.height=Math.floor(q*Q),this.setViewport(0,0,L,q)},this.getCurrentViewport=function(L){return L.copy(b)},this.getViewport=function(L){return L.copy(D)},this.setViewport=function(L,q,Q,xt){L.isVector4?D.set(L.x,L.y,L.z,L.w):D.set(L,q,Q,xt),kt.viewport(b.copy(D).multiplyScalar(z).round())},this.getScissor=function(L){return L.copy(ft)},this.setScissor=function(L,q,Q,xt){L.isVector4?ft.set(L.x,L.y,L.z,L.w):ft.set(L,q,Q,xt),kt.scissor(I.copy(ft).multiplyScalar(z).round())},this.getScissorTest=function(){return Lt},this.setScissorTest=function(L){kt.setScissorTest(Lt=L)},this.setOpaqueSort=function(L){W=L},this.setTransparentSort=function(L){it=L},this.getClearColor=function(L){return L.copy(Xt.getClearColor())},this.setClearColor=function(){Xt.setClearColor.apply(Xt,arguments)},this.getClearAlpha=function(){return Xt.getClearAlpha()},this.setClearAlpha=function(){Xt.setClearAlpha.apply(Xt,arguments)},this.clear=function(L=!0,q=!0,Q=!0){let xt=0;if(L){let lt=!1;if(R!==null){let Ot=R.texture.format;lt=Ot===oh||Ot===rh||Ot===sh}if(lt){let Ot=R.texture.type,Gt=Ot===_i||Ot===fs||Ot===Ur||Ot===Js||Ot===eh||Ot===nh,Nt=Xt.getClearColor(),Ht=Xt.getClearAlpha(),ee=Nt.r,ie=Nt.g,Kt=Nt.b;Gt?(u[0]=ee,u[1]=ie,u[2]=Kt,u[3]=Ht,N.clearBufferuiv(N.COLOR,0,u)):(_[0]=ee,_[1]=ie,_[2]=Kt,_[3]=Ht,N.clearBufferiv(N.COLOR,0,_))}else xt|=N.COLOR_BUFFER_BIT}q&&(xt|=N.DEPTH_BUFFER_BIT),Q&&(xt|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(xt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Dt,!1),e.removeEventListener("webglcontextrestored",A,!1),e.removeEventListener("webglcontextcreationerror",G,!1),bt.dispose(),wt.dispose(),Ft.dispose(),P.dispose(),dt.dispose(),Y.dispose(),Se.dispose(),ot.dispose(),pt.dispose(),Ct.dispose(),Ct.removeEventListener("sessionstart",Ut),Ct.removeEventListener("sessionend",j),Mt.stop()};function Dt(L){L.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),k=!0}function A(){console.log("THREE.WebGLRenderer: Context Restored."),k=!1;let L=Z.autoReset,q=Pt.enabled,Q=Pt.autoUpdate,xt=Pt.needsUpdate,lt=Pt.type;qt(),Z.autoReset=L,Pt.enabled=q,Pt.autoUpdate=Q,Pt.needsUpdate=xt,Pt.type=lt}function G(L){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",L.statusMessage)}function K(L){let q=L.target;q.removeEventListener("dispose",K),at(q)}function at(L){vt(L),Ft.remove(L)}function vt(L){let q=Ft.get(L).programs;q!==void 0&&(q.forEach(function(Q){pt.releaseProgram(Q)}),L.isShaderMaterial&&pt.releaseShaderCache(L))}this.renderBufferDirect=function(L,q,Q,xt,lt,Ot){q===null&&(q=zt);let Gt=lt.isMesh&&lt.matrixWorld.determinant()<0,Nt=mt(L,q,Q,xt,lt);kt.setMaterial(xt,Gt);let Ht=Q.index,ee=1;if(xt.wireframe===!0){if(Ht=It.getWireframeAttribute(Q),Ht===void 0)return;ee=2}let ie=Q.drawRange,Kt=Q.attributes.position,he=ie.start*ee,Ie=(ie.start+ie.count)*ee;Ot!==null&&(he=Math.max(he,Ot.start*ee),Ie=Math.min(Ie,(Ot.start+Ot.count)*ee)),Ht!==null?(he=Math.max(he,0),Ie=Math.min(Ie,Ht.count)):Kt!=null&&(he=Math.max(he,0),Ie=Math.min(Ie,Kt.count));let Be=Ie-he;if(Be<0||Be===1/0)return;Se.setup(lt,xt,Nt,Q,Ht);let Tn,Pe=Jt;if(Ht!==null&&(Tn=At.get(Ht),Pe=pe,Pe.setIndex(Tn)),lt.isMesh)xt.wireframe===!0?(kt.setLineWidth(xt.wireframeLinewidth*yt()),Pe.setMode(N.LINES)):Pe.setMode(N.TRIANGLES);else if(lt.isLine){let ce=xt.linewidth;ce===void 0&&(ce=1),kt.setLineWidth(ce*yt()),lt.isLineSegments?Pe.setMode(N.LINES):lt.isLineLoop?Pe.setMode(N.LINE_LOOP):Pe.setMode(N.LINE_STRIP)}else lt.isPoints?Pe.setMode(N.POINTS):lt.isSprite&&Pe.setMode(N.TRIANGLES);if(lt.isBatchedMesh)if(lt._multiDrawInstances!==null)Pe.renderMultiDrawInstances(lt._multiDrawStarts,lt._multiDrawCounts,lt._multiDrawCount,lt._multiDrawInstances);else if(rt.get("WEBGL_multi_draw"))Pe.renderMultiDraw(lt._multiDrawStarts,lt._multiDrawCounts,lt._multiDrawCount);else{let ce=lt._multiDrawStarts,ci=lt._multiDrawCounts,Le=lt._multiDrawCount,Vn=Ht?At.get(Ht).bytesPerElement:1,xs=Ft.get(xt).currentProgram.getUniforms();for(let In=0;In<Le;In++)xs.setValue(N,"_gl_DrawID",In),Pe.render(ce[In]/Vn,ci[In])}else if(lt.isInstancedMesh)Pe.renderInstances(he,Be,lt.count);else if(Q.isInstancedBufferGeometry){let ce=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,ci=Math.min(Q.instanceCount,ce);Pe.renderInstances(he,Be,ci)}else Pe.render(he,Be)};function tt(L,q,Q){L.transparent===!0&&L.side===je&&L.forceSinglePass===!1?(L.side=fn,L.needsUpdate=!0,Ee(L,q,Q),L.side=Hi,L.needsUpdate=!0,Ee(L,q,Q),L.side=je):Ee(L,q,Q)}this.compile=function(L,q,Q=null){Q===null&&(Q=L),f=wt.get(Q),f.init(q),x.push(f),Q.traverseVisible(function(lt){lt.isLight&&lt.layers.test(q.layers)&&(f.pushLight(lt),lt.castShadow&&f.pushShadow(lt))}),L!==Q&&L.traverseVisible(function(lt){lt.isLight&&lt.layers.test(q.layers)&&(f.pushLight(lt),lt.castShadow&&f.pushShadow(lt))}),f.setupLights();let xt=new Set;return L.traverse(function(lt){if(!(lt.isMesh||lt.isPoints||lt.isLine||lt.isSprite))return;let Ot=lt.material;if(Ot)if(Array.isArray(Ot))for(let Gt=0;Gt<Ot.length;Gt++){let Nt=Ot[Gt];tt(Nt,Q,lt),xt.add(Nt)}else tt(Ot,Q,lt),xt.add(Ot)}),x.pop(),f=null,xt},this.compileAsync=function(L,q,Q=null){let xt=this.compile(L,q,Q);return new Promise(lt=>{function Ot(){if(xt.forEach(function(Gt){Ft.get(Gt).currentProgram.isReady()&&xt.delete(Gt)}),xt.size===0){lt(L);return}setTimeout(Ot,10)}rt.get("KHR_parallel_shader_compile")!==null?Ot():setTimeout(Ot,10)})};let Tt=null;function Wt(L){Tt&&Tt(L)}function Ut(){Mt.stop()}function j(){Mt.start()}let Mt=new gf;Mt.setAnimationLoop(Wt),typeof self<"u"&&Mt.setContext(self),this.setAnimationLoop=function(L){Tt=L,Ct.setAnimationLoop(L),L===null?Mt.stop():Mt.start()},Ct.addEventListener("sessionstart",Ut),Ct.addEventListener("sessionend",j),this.render=function(L,q){if(q!==void 0&&q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(k===!0)return;if(L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),Ct.enabled===!0&&Ct.isPresenting===!0&&(Ct.cameraAutoUpdate===!0&&Ct.updateCamera(q),q=Ct.getCamera()),L.isScene===!0&&L.onBeforeRender(y,L,q,R),f=wt.get(L,x.length),f.init(q),x.push(f),st.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),O.setFromProjectionMatrix(st),J=this.localClippingEnabled,X=Rt.init(this.clippingPlanes,J),m=bt.get(L,S.length),m.init(),S.push(m),Ct.enabled===!0&&Ct.isPresenting===!0){let Ot=y.xr.getDepthSensingMesh();Ot!==null&&Et(Ot,q,-1/0,y.sortObjects)}Et(L,q,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort(W,it),ht=Ct.enabled===!1||Ct.isPresenting===!1||Ct.hasDepthSensing()===!1,ht&&Xt.addToRenderList(m,L),this.info.render.frame++,X===!0&&Rt.beginShadows();let Q=f.state.shadowsArray;Pt.render(Q,L,q),X===!0&&Rt.endShadows(),this.info.autoReset===!0&&this.info.reset();let xt=m.opaque,lt=m.transmissive;if(f.setupLights(),q.isArrayCamera){let Ot=q.cameras;if(lt.length>0)for(let Gt=0,Nt=Ot.length;Gt<Nt;Gt++){let Ht=Ot[Gt];le(xt,lt,L,Ht)}ht&&Xt.render(L);for(let Gt=0,Nt=Ot.length;Gt<Nt;Gt++){let Ht=Ot[Gt];Zt(m,L,Ht,Ht.viewport)}}else lt.length>0&&le(xt,lt,L,q),ht&&Xt.render(L),Zt(m,L,q);R!==null&&(H.updateMultisampleRenderTarget(R),H.updateRenderTargetMipmap(R)),L.isScene===!0&&L.onAfterRender(y,L,q),Se.resetDefaultState(),M=-1,v=null,x.pop(),x.length>0?(f=x[x.length-1],X===!0&&Rt.setGlobalState(y.clippingPlanes,f.state.camera)):f=null,S.pop(),S.length>0?m=S[S.length-1]:m=null};function Et(L,q,Q,xt){if(L.visible===!1)return;if(L.layers.test(q.layers)){if(L.isGroup)Q=L.renderOrder;else if(L.isLOD)L.autoUpdate===!0&&L.update(q);else if(L.isLight)f.pushLight(L),L.castShadow&&f.pushShadow(L);else if(L.isSprite){if(!L.frustumCulled||O.intersectsSprite(L)){xt&&St.setFromMatrixPosition(L.matrixWorld).applyMatrix4(st);let Gt=Y.update(L),Nt=L.material;Nt.visible&&m.push(L,Gt,Nt,Q,St.z,null)}}else if((L.isMesh||L.isLine||L.isPoints)&&(!L.frustumCulled||O.intersectsObject(L))){let Gt=Y.update(L),Nt=L.material;if(xt&&(L.boundingSphere!==void 0?(L.boundingSphere===null&&L.computeBoundingSphere(),St.copy(L.boundingSphere.center)):(Gt.boundingSphere===null&&Gt.computeBoundingSphere(),St.copy(Gt.boundingSphere.center)),St.applyMatrix4(L.matrixWorld).applyMatrix4(st)),Array.isArray(Nt)){let Ht=Gt.groups;for(let ee=0,ie=Ht.length;ee<ie;ee++){let Kt=Ht[ee],he=Nt[Kt.materialIndex];he&&he.visible&&m.push(L,Gt,he,Q,St.z,Kt)}}else Nt.visible&&m.push(L,Gt,Nt,Q,St.z,null)}}let Ot=L.children;for(let Gt=0,Nt=Ot.length;Gt<Nt;Gt++)Et(Ot[Gt],q,Q,xt)}function Zt(L,q,Q,xt){let lt=L.opaque,Ot=L.transmissive,Gt=L.transparent;f.setupLightsView(Q),X===!0&&Rt.setGlobalState(y.clippingPlanes,Q),xt&&kt.viewport(b.copy(xt)),lt.length>0&&ae(lt,q,Q),Ot.length>0&&ae(Ot,q,Q),Gt.length>0&&ae(Gt,q,Q),kt.buffers.depth.setTest(!0),kt.buffers.depth.setMask(!0),kt.buffers.color.setMask(!0),kt.setPolygonOffset(!1)}function le(L,q,Q,xt){if((Q.isScene===!0?Q.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[xt.id]===void 0&&(f.state.transmissionRenderTarget[xt.id]=new Mi(1,1,{generateMipmaps:!0,type:rt.has("EXT_color_buffer_half_float")||rt.has("EXT_color_buffer_float")?Zr:_i,minFilter:hs,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ce.workingColorSpace}));let Ot=f.state.transmissionRenderTarget[xt.id],Gt=xt.viewport||b;Ot.setSize(Gt.z,Gt.w);let Nt=y.getRenderTarget();y.setRenderTarget(Ot),y.getClearColor(E),F=y.getClearAlpha(),F<1&&y.setClearColor(16777215,.5),y.clear(),ht&&Xt.render(Q);let Ht=y.toneMapping;y.toneMapping=ri;let ee=xt.viewport;if(xt.viewport!==void 0&&(xt.viewport=void 0),f.setupLightsView(xt),X===!0&&Rt.setGlobalState(y.clippingPlanes,xt),ae(L,Q,xt),H.updateMultisampleRenderTarget(Ot),H.updateRenderTargetMipmap(Ot),rt.has("WEBGL_multisampled_render_to_texture")===!1){let ie=!1;for(let Kt=0,he=q.length;Kt<he;Kt++){let Ie=q[Kt],Be=Ie.object,Tn=Ie.geometry,Pe=Ie.material,ce=Ie.group;if(Pe.side===je&&Be.layers.test(xt.layers)){let ci=Pe.side;Pe.side=fn,Pe.needsUpdate=!0,_e(Be,Q,xt,Tn,Pe,ce),Pe.side=ci,Pe.needsUpdate=!0,ie=!0}}ie===!0&&(H.updateMultisampleRenderTarget(Ot),H.updateRenderTargetMipmap(Ot))}y.setRenderTarget(Nt),y.setClearColor(E,F),ee!==void 0&&(xt.viewport=ee),y.toneMapping=Ht}function ae(L,q,Q){let xt=q.isScene===!0?q.overrideMaterial:null;for(let lt=0,Ot=L.length;lt<Ot;lt++){let Gt=L[lt],Nt=Gt.object,Ht=Gt.geometry,ee=xt===null?Gt.material:xt,ie=Gt.group;Nt.layers.test(Q.layers)&&_e(Nt,q,Q,Ht,ee,ie)}}function _e(L,q,Q,xt,lt,Ot){L.onBeforeRender(y,q,Q,xt,lt,Ot),L.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,L.matrixWorld),L.normalMatrix.getNormalMatrix(L.modelViewMatrix),lt.onBeforeRender(y,q,Q,xt,L,Ot),lt.transparent===!0&&lt.side===je&&lt.forceSinglePass===!1?(lt.side=fn,lt.needsUpdate=!0,y.renderBufferDirect(Q,q,xt,lt,L,Ot),lt.side=Hi,lt.needsUpdate=!0,y.renderBufferDirect(Q,q,xt,lt,L,Ot),lt.side=je):y.renderBufferDirect(Q,q,xt,lt,L,Ot),L.onAfterRender(y,q,Q,xt,lt,Ot)}function Ee(L,q,Q){q.isScene!==!0&&(q=zt);let xt=Ft.get(L),lt=f.state.lights,Ot=f.state.shadowsArray,Gt=lt.state.version,Nt=pt.getParameters(L,lt.state,Ot,q,Q),Ht=pt.getProgramCacheKey(Nt),ee=xt.programs;xt.environment=L.isMeshStandardMaterial?q.environment:null,xt.fog=q.fog,xt.envMap=(L.isMeshStandardMaterial?dt:P).get(L.envMap||xt.environment),xt.envMapRotation=xt.environment!==null&&L.envMap===null?q.environmentRotation:L.envMapRotation,ee===void 0&&(L.addEventListener("dispose",K),ee=new Map,xt.programs=ee);let ie=ee.get(Ht);if(ie!==void 0){if(xt.currentProgram===ie&&xt.lightsStateVersion===Gt)return et(L,Nt),ie}else Nt.uniforms=pt.getUniforms(L),L.onBeforeCompile(Nt,y),ie=pt.acquireProgram(Nt,Ht),ee.set(Ht,ie),xt.uniforms=Nt.uniforms;let Kt=xt.uniforms;return(!L.isShaderMaterial&&!L.isRawShaderMaterial||L.clipping===!0)&&(Kt.clippingPlanes=Rt.uniform),et(L,Nt),xt.needsLights=Vt(L),xt.lightsStateVersion=Gt,xt.needsLights&&(Kt.ambientLightColor.value=lt.state.ambient,Kt.lightProbe.value=lt.state.probe,Kt.directionalLights.value=lt.state.directional,Kt.directionalLightShadows.value=lt.state.directionalShadow,Kt.spotLights.value=lt.state.spot,Kt.spotLightShadows.value=lt.state.spotShadow,Kt.rectAreaLights.value=lt.state.rectArea,Kt.ltc_1.value=lt.state.rectAreaLTC1,Kt.ltc_2.value=lt.state.rectAreaLTC2,Kt.pointLights.value=lt.state.point,Kt.pointLightShadows.value=lt.state.pointShadow,Kt.hemisphereLights.value=lt.state.hemi,Kt.directionalShadowMap.value=lt.state.directionalShadowMap,Kt.directionalShadowMatrix.value=lt.state.directionalShadowMatrix,Kt.spotShadowMap.value=lt.state.spotShadowMap,Kt.spotLightMatrix.value=lt.state.spotLightMatrix,Kt.spotLightMap.value=lt.state.spotLightMap,Kt.pointShadowMap.value=lt.state.pointShadowMap,Kt.pointShadowMatrix.value=lt.state.pointShadowMatrix),xt.currentProgram=ie,xt.uniformsList=null,ie}function Re(L){if(L.uniformsList===null){let q=L.currentProgram.getUniforms();L.uniformsList=Xs.seqWithValue(q.seq,L.uniforms)}return L.uniformsList}function et(L,q){let Q=Ft.get(L);Q.outputColorSpace=q.outputColorSpace,Q.batching=q.batching,Q.batchingColor=q.batchingColor,Q.instancing=q.instancing,Q.instancingColor=q.instancingColor,Q.instancingMorph=q.instancingMorph,Q.skinning=q.skinning,Q.morphTargets=q.morphTargets,Q.morphNormals=q.morphNormals,Q.morphColors=q.morphColors,Q.morphTargetsCount=q.morphTargetsCount,Q.numClippingPlanes=q.numClippingPlanes,Q.numIntersection=q.numClipIntersection,Q.vertexAlphas=q.vertexAlphas,Q.vertexTangents=q.vertexTangents,Q.toneMapping=q.toneMapping}function mt(L,q,Q,xt,lt){q.isScene!==!0&&(q=zt),H.resetTextureUnits();let Ot=q.fog,Gt=xt.isMeshStandardMaterial?q.environment:null,Nt=R===null?y.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:ir,Ht=(xt.isMeshStandardMaterial?dt:P).get(xt.envMap||Gt),ee=xt.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,ie=!!Q.attributes.tangent&&(!!xt.normalMap||xt.anisotropy>0),Kt=!!Q.morphAttributes.position,he=!!Q.morphAttributes.normal,Ie=!!Q.morphAttributes.color,Be=ri;xt.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(Be=y.toneMapping);let Tn=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,Pe=Tn!==void 0?Tn.length:0,ce=Ft.get(xt),ci=f.state.lights;if(X===!0&&(J===!0||L!==v)){let Dn=L===v&&xt.id===M;Rt.setState(xt,L,Dn)}let Le=!1;xt.version===ce.__version?(ce.needsLights&&ce.lightsStateVersion!==ci.state.version||ce.outputColorSpace!==Nt||lt.isBatchedMesh&&ce.batching===!1||!lt.isBatchedMesh&&ce.batching===!0||lt.isBatchedMesh&&ce.batchingColor===!0&&lt.colorTexture===null||lt.isBatchedMesh&&ce.batchingColor===!1&&lt.colorTexture!==null||lt.isInstancedMesh&&ce.instancing===!1||!lt.isInstancedMesh&&ce.instancing===!0||lt.isSkinnedMesh&&ce.skinning===!1||!lt.isSkinnedMesh&&ce.skinning===!0||lt.isInstancedMesh&&ce.instancingColor===!0&&lt.instanceColor===null||lt.isInstancedMesh&&ce.instancingColor===!1&&lt.instanceColor!==null||lt.isInstancedMesh&&ce.instancingMorph===!0&&lt.morphTexture===null||lt.isInstancedMesh&&ce.instancingMorph===!1&&lt.morphTexture!==null||ce.envMap!==Ht||xt.fog===!0&&ce.fog!==Ot||ce.numClippingPlanes!==void 0&&(ce.numClippingPlanes!==Rt.numPlanes||ce.numIntersection!==Rt.numIntersection)||ce.vertexAlphas!==ee||ce.vertexTangents!==ie||ce.morphTargets!==Kt||ce.morphNormals!==he||ce.morphColors!==Ie||ce.toneMapping!==Be||ce.morphTargetsCount!==Pe)&&(Le=!0):(Le=!0,ce.__version=xt.version);let Vn=ce.currentProgram;Le===!0&&(Vn=Ee(xt,q,lt));let xs=!1,In=!1,pr=!1,He=Vn.getUniforms(),ei=ce.uniforms;if(kt.useProgram(Vn.program)&&(xs=!0,In=!0,pr=!0),xt.id!==M&&(M=xt.id,In=!0),xs||v!==L){kt.buffers.depth.getReversed()?(V.copy(L.projectionMatrix),_p(V),Mp(V),He.setValue(N,"projectionMatrix",V)):He.setValue(N,"projectionMatrix",L.projectionMatrix),He.setValue(N,"viewMatrix",L.matrixWorldInverse);let Ti=He.map.cameraPosition;Ti!==void 0&&Ti.setValue(N,nt.setFromMatrixPosition(L.matrixWorld)),_t.logarithmicDepthBuffer&&He.setValue(N,"logDepthBufFC",2/(Math.log(L.far+1)/Math.LN2)),(xt.isMeshPhongMaterial||xt.isMeshToonMaterial||xt.isMeshLambertMaterial||xt.isMeshBasicMaterial||xt.isMeshStandardMaterial||xt.isShaderMaterial)&&He.setValue(N,"isOrthographic",L.isOrthographicCamera===!0),v!==L&&(v=L,In=!0,pr=!0)}if(lt.isSkinnedMesh){He.setOptional(N,lt,"bindMatrix"),He.setOptional(N,lt,"bindMatrixInverse");let Dn=lt.skeleton;Dn&&(Dn.boneTexture===null&&Dn.computeBoneTexture(),He.setValue(N,"boneTexture",Dn.boneTexture,H))}lt.isBatchedMesh&&(He.setOptional(N,lt,"batchingTexture"),He.setValue(N,"batchingTexture",lt._matricesTexture,H),He.setOptional(N,lt,"batchingIdTexture"),He.setValue(N,"batchingIdTexture",lt._indirectTexture,H),He.setOptional(N,lt,"batchingColorTexture"),lt._colorsTexture!==null&&He.setValue(N,"batchingColorTexture",lt._colorsTexture,H));let mr=Q.morphAttributes;if((mr.position!==void 0||mr.normal!==void 0||mr.color!==void 0)&&Qt.update(lt,Q,Vn),(In||ce.receiveShadow!==lt.receiveShadow)&&(ce.receiveShadow=lt.receiveShadow,He.setValue(N,"receiveShadow",lt.receiveShadow)),xt.isMeshGouraudMaterial&&xt.envMap!==null&&(ei.envMap.value=Ht,ei.flipEnvMap.value=Ht.isCubeTexture&&Ht.isRenderTargetTexture===!1?-1:1),xt.isMeshStandardMaterial&&xt.envMap===null&&q.environment!==null&&(ei.envMapIntensity.value=q.environmentIntensity),In&&(He.setValue(N,"toneMappingExposure",y.toneMappingExposure),ce.needsLights&&Yt(ei,pr),Ot&&xt.fog===!0&&ct.refreshFogUniforms(ei,Ot),ct.refreshMaterialUniforms(ei,xt,z,B,f.state.transmissionRenderTarget[L.id]),Xs.upload(N,Re(ce),ei,H)),xt.isShaderMaterial&&xt.uniformsNeedUpdate===!0&&(Xs.upload(N,Re(ce),ei,H),xt.uniformsNeedUpdate=!1),xt.isSpriteMaterial&&He.setValue(N,"center",lt.center),He.setValue(N,"modelViewMatrix",lt.modelViewMatrix),He.setValue(N,"normalMatrix",lt.normalMatrix),He.setValue(N,"modelMatrix",lt.matrixWorld),xt.isShaderMaterial||xt.isRawShaderMaterial){let Dn=xt.uniformsGroups;for(let Ti=0,Ai=Dn.length;Ti<Ai;Ti++){let Eh=Dn[Ti];ot.update(Eh,Vn),ot.bind(Eh,Vn)}}return Vn}function Yt(L,q){L.ambientLightColor.needsUpdate=q,L.lightProbe.needsUpdate=q,L.directionalLights.needsUpdate=q,L.directionalLightShadows.needsUpdate=q,L.pointLights.needsUpdate=q,L.pointLightShadows.needsUpdate=q,L.spotLights.needsUpdate=q,L.spotLightShadows.needsUpdate=q,L.rectAreaLights.needsUpdate=q,L.hemisphereLights.needsUpdate=q}function Vt(L){return L.isMeshLambertMaterial||L.isMeshToonMaterial||L.isMeshPhongMaterial||L.isMeshStandardMaterial||L.isShadowMaterial||L.isShaderMaterial&&L.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(L,q,Q){Ft.get(L.texture).__webglTexture=q,Ft.get(L.depthTexture).__webglTexture=Q;let xt=Ft.get(L);xt.__hasExternalTextures=!0,xt.__autoAllocateDepthBuffer=Q===void 0,xt.__autoAllocateDepthBuffer||rt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),xt.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(L,q){let Q=Ft.get(L);Q.__webglFramebuffer=q,Q.__useDefaultFramebuffer=q===void 0},this.setRenderTarget=function(L,q=0,Q=0){R=L,w=q,C=Q;let xt=!0,lt=null,Ot=!1,Gt=!1;if(L){let Ht=Ft.get(L);if(Ht.__useDefaultFramebuffer!==void 0)kt.bindFramebuffer(N.FRAMEBUFFER,null),xt=!1;else if(Ht.__webglFramebuffer===void 0)H.setupRenderTarget(L);else if(Ht.__hasExternalTextures)H.rebindTextures(L,Ft.get(L.texture).__webglTexture,Ft.get(L.depthTexture).__webglTexture);else if(L.depthBuffer){let Kt=L.depthTexture;if(Ht.__boundDepthTexture!==Kt){if(Kt!==null&&Ft.has(Kt)&&(L.width!==Kt.image.width||L.height!==Kt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");H.setupDepthRenderbuffer(L)}}let ee=L.texture;(ee.isData3DTexture||ee.isDataArrayTexture||ee.isCompressedArrayTexture)&&(Gt=!0);let ie=Ft.get(L).__webglFramebuffer;L.isWebGLCubeRenderTarget?(Array.isArray(ie[q])?lt=ie[q][Q]:lt=ie[q],Ot=!0):L.samples>0&&H.useMultisampledRTT(L)===!1?lt=Ft.get(L).__webglMultisampledFramebuffer:Array.isArray(ie)?lt=ie[Q]:lt=ie,b.copy(L.viewport),I.copy(L.scissor),T=L.scissorTest}else b.copy(D).multiplyScalar(z).floor(),I.copy(ft).multiplyScalar(z).floor(),T=Lt;if(kt.bindFramebuffer(N.FRAMEBUFFER,lt)&&xt&&kt.drawBuffers(L,lt),kt.viewport(b),kt.scissor(I),kt.setScissorTest(T),Ot){let Ht=Ft.get(L.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+q,Ht.__webglTexture,Q)}else if(Gt){let Ht=Ft.get(L.texture),ee=q||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,Ht.__webglTexture,Q||0,ee)}M=-1},this.readRenderTargetPixels=function(L,q,Q,xt,lt,Ot,Gt){if(!(L&&L.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Nt=Ft.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&Gt!==void 0&&(Nt=Nt[Gt]),Nt){kt.bindFramebuffer(N.FRAMEBUFFER,Nt);try{let Ht=L.texture,ee=Ht.format,ie=Ht.type;if(!_t.textureFormatReadable(ee)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!_t.textureTypeReadable(ie)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=L.width-xt&&Q>=0&&Q<=L.height-lt&&N.readPixels(q,Q,xt,lt,re.convert(ee),re.convert(ie),Ot)}finally{let Ht=R!==null?Ft.get(R).__webglFramebuffer:null;kt.bindFramebuffer(N.FRAMEBUFFER,Ht)}}},this.readRenderTargetPixelsAsync=async function(L,q,Q,xt,lt,Ot,Gt){if(!(L&&L.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Nt=Ft.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&Gt!==void 0&&(Nt=Nt[Gt]),Nt){let Ht=L.texture,ee=Ht.format,ie=Ht.type;if(!_t.textureFormatReadable(ee))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!_t.textureTypeReadable(ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(q>=0&&q<=L.width-xt&&Q>=0&&Q<=L.height-lt){kt.bindFramebuffer(N.FRAMEBUFFER,Nt);let Kt=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,Kt),N.bufferData(N.PIXEL_PACK_BUFFER,Ot.byteLength,N.STREAM_READ),N.readPixels(q,Q,xt,lt,re.convert(ee),re.convert(ie),0);let he=R!==null?Ft.get(R).__webglFramebuffer:null;kt.bindFramebuffer(N.FRAMEBUFFER,he);let Ie=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await vp(N,Ie,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,Kt),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,Ot),N.deleteBuffer(Kt),N.deleteSync(Ie),Ot}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(L,q=null,Q=0){L.isTexture!==!0&&(Rr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),q=arguments[0]||null,L=arguments[1]);let xt=Math.pow(2,-Q),lt=Math.floor(L.image.width*xt),Ot=Math.floor(L.image.height*xt),Gt=q!==null?q.x:0,Nt=q!==null?q.y:0;H.setTexture2D(L,0),N.copyTexSubImage2D(N.TEXTURE_2D,Q,0,0,Gt,Nt,lt,Ot),kt.unbindTexture()},this.copyTextureToTexture=function(L,q,Q=null,xt=null,lt=0){L.isTexture!==!0&&(Rr("WebGLRenderer: copyTextureToTexture function signature has changed."),xt=arguments[0]||null,L=arguments[1],q=arguments[2],lt=arguments[3]||0,Q=null);let Ot,Gt,Nt,Ht,ee,ie,Kt,he,Ie,Be=L.isCompressedTexture?L.mipmaps[lt]:L.image;Q!==null?(Ot=Q.max.x-Q.min.x,Gt=Q.max.y-Q.min.y,Nt=Q.isBox3?Q.max.z-Q.min.z:1,Ht=Q.min.x,ee=Q.min.y,ie=Q.isBox3?Q.min.z:0):(Ot=Be.width,Gt=Be.height,Nt=Be.depth||1,Ht=0,ee=0,ie=0),xt!==null?(Kt=xt.x,he=xt.y,Ie=xt.z):(Kt=0,he=0,Ie=0);let Tn=re.convert(q.format),Pe=re.convert(q.type),ce;q.isData3DTexture?(H.setTexture3D(q,0),ce=N.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(H.setTexture2DArray(q,0),ce=N.TEXTURE_2D_ARRAY):(H.setTexture2D(q,0),ce=N.TEXTURE_2D),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,q.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,q.unpackAlignment);let ci=N.getParameter(N.UNPACK_ROW_LENGTH),Le=N.getParameter(N.UNPACK_IMAGE_HEIGHT),Vn=N.getParameter(N.UNPACK_SKIP_PIXELS),xs=N.getParameter(N.UNPACK_SKIP_ROWS),In=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,Be.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Be.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Ht),N.pixelStorei(N.UNPACK_SKIP_ROWS,ee),N.pixelStorei(N.UNPACK_SKIP_IMAGES,ie);let pr=L.isDataArrayTexture||L.isData3DTexture,He=q.isDataArrayTexture||q.isData3DTexture;if(L.isRenderTargetTexture||L.isDepthTexture){let ei=Ft.get(L),mr=Ft.get(q),Dn=Ft.get(ei.__renderTarget),Ti=Ft.get(mr.__renderTarget);kt.bindFramebuffer(N.READ_FRAMEBUFFER,Dn.__webglFramebuffer),kt.bindFramebuffer(N.DRAW_FRAMEBUFFER,Ti.__webglFramebuffer);for(let Ai=0;Ai<Nt;Ai++)pr&&N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Ft.get(L).__webglTexture,lt,ie+Ai),L.isDepthTexture?(He&&N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Ft.get(q).__webglTexture,lt,Ie+Ai),N.blitFramebuffer(Ht,ee,Ot,Gt,Kt,he,Ot,Gt,N.DEPTH_BUFFER_BIT,N.NEAREST)):He?N.copyTexSubImage3D(ce,lt,Kt,he,Ie+Ai,Ht,ee,Ot,Gt):N.copyTexSubImage2D(ce,lt,Kt,he,Ie+Ai,Ht,ee,Ot,Gt);kt.bindFramebuffer(N.READ_FRAMEBUFFER,null),kt.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else He?L.isDataTexture||L.isData3DTexture?N.texSubImage3D(ce,lt,Kt,he,Ie,Ot,Gt,Nt,Tn,Pe,Be.data):q.isCompressedArrayTexture?N.compressedTexSubImage3D(ce,lt,Kt,he,Ie,Ot,Gt,Nt,Tn,Be.data):N.texSubImage3D(ce,lt,Kt,he,Ie,Ot,Gt,Nt,Tn,Pe,Be):L.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,lt,Kt,he,Ot,Gt,Tn,Pe,Be.data):L.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,lt,Kt,he,Be.width,Be.height,Tn,Be.data):N.texSubImage2D(N.TEXTURE_2D,lt,Kt,he,Ot,Gt,Tn,Pe,Be);N.pixelStorei(N.UNPACK_ROW_LENGTH,ci),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Le),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Vn),N.pixelStorei(N.UNPACK_SKIP_ROWS,xs),N.pixelStorei(N.UNPACK_SKIP_IMAGES,In),lt===0&&q.generateMipmaps&&N.generateMipmap(ce),kt.unbindTexture()},this.copyTextureToTexture3D=function(L,q,Q=null,xt=null,lt=0){return L.isTexture!==!0&&(Rr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),Q=arguments[0]||null,xt=arguments[1]||null,L=arguments[2],q=arguments[3],lt=arguments[4]||0),Rr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(L,q,Q,xt,lt)},this.initRenderTarget=function(L){Ft.get(L).__webglFramebuffer===void 0&&H.setupRenderTarget(L)},this.initTexture=function(L){L.isCubeTexture?H.setTextureCube(L,0):L.isData3DTexture?H.setTexture3D(L,0):L.isDataArrayTexture||L.isCompressedArrayTexture?H.setTexture2DArray(L,0):H.setTexture2D(L,0),kt.unbindTexture()},this.resetState=function(){w=0,C=0,R=null,kt.reset(),Se.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return xi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=Ce._getDrawingBufferColorSpace(t),e.unpackColorSpace=Ce._getUnpackColorSpace()}};var ca=class n{constructor(t,e=1,i=1e3){this.isFog=!0,this.name="",this.color=new oe(t),this.near=e,this.far=i}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},ha=class extends Fe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Zn,this.environmentIntensity=1,this.environmentRotation=new Zn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},ua=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=mc,this.updateRanges=[],this.version=0,this.uuid=oi()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[i+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=oi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=oi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},_n=new $,Or=class n{constructor(t,e,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)_n.fromBufferAttribute(this,e),_n.applyMatrix4(t),this.setXYZ(e,_n.x,_n.y,_n.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)_n.fromBufferAttribute(this,e),_n.applyNormalMatrix(t),this.setXYZ(e,_n.x,_n.y,_n.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)_n.fromBufferAttribute(this,e),_n.transformDirection(t),this.setXYZ(e,_n.x,_n.y,_n.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=Yn(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=ke(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=ke(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ke(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ke(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ke(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Yn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Yn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Yn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Yn(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=ke(e,this.array),i=ke(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=ke(e,this.array),i=ke(i,this.array),s=ke(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=ke(e,this.array),i=ke(i,this.array),s=ke(s,this.array),r=ke(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new $e(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new n(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Br=class extends Si{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new oe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Ns,br=new $,Fs=new $,Os=new $,Bs=new Bt,Sr=new Bt,Mf=new we,ko=new $,wr=new $,Do=new $,Ou=new Bt,wl=new Bt,Bu=new Bt,fa=class extends Fe{constructor(t=new Br){if(super(),this.isSprite=!0,this.type="Sprite",Ns===void 0){Ns=new Oe;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new ua(e,5);Ns.setIndex([0,1,2,0,2,3]),Ns.setAttribute("position",new Or(i,3,0,!1)),Ns.setAttribute("uv",new Or(i,2,3,!1))}this.geometry=Ns,this.material=t,this.center=new Bt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Fs.setFromMatrixScale(this.matrixWorld),Mf.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Os.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Fs.multiplyScalar(-Os.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let o=this.center;Uo(ko.set(-.5,-.5,0),Os,o,Fs,s,r),Uo(wr.set(.5,-.5,0),Os,o,Fs,s,r),Uo(Do.set(.5,.5,0),Os,o,Fs,s,r),Ou.set(0,0),wl.set(1,0),Bu.set(1,1);let a=t.ray.intersectTriangle(ko,wr,Do,!1,br);if(a===null&&(Uo(wr.set(-.5,.5,0),Os,o,Fs,s,r),wl.set(0,1),a=t.ray.intersectTriangle(ko,Do,wr,!1,br),a===null))return;let l=t.ray.origin.distanceTo(br);l<t.near||l>t.far||e.push({distance:l,point:br.clone(),uv:Oi.getInterpolation(br,ko,wr,Do,Ou,wl,Bu,new Bt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function Uo(n,t,e,i,s,r){Bs.subVectors(n,e).addScalar(.5).multiply(i),s!==void 0?(Sr.x=r*Bs.x-s*Bs.y,Sr.y=s*Bs.x+r*Bs.y):Sr.copy(Bs),n.copy(t),n.x+=Sr.x,n.y+=Sr.y,n.applyMatrix4(Mf)}var zr=class extends An{constructor(t=null,e=1,i=1,s,r,o,a,l,h=Sn,p=Sn,g,d){super(null,o,a,l,h,p,s,r,g,d),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Hr=class extends $e{constructor(t,e,i,s=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},zs=new we,zu=new we,No=[],Hu=new bi,px=new we,Er=new De,Tr=new Vi,nn=class extends De{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Hr(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,px)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new bi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,zs),Hu.copy(t.boundingBox).applyMatrix4(zs),this.boundingBox.union(Hu)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Vi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,zs),Tr.copy(t.boundingSphere).applyMatrix4(zs),this.boundingSphere.union(Tr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let i=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=t*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(t,e){let i=this.matrixWorld,s=this.count;if(Er.geometry=this.geometry,Er.material=this.material,Er.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Tr.copy(this.boundingSphere),Tr.applyMatrix4(i),t.ray.intersectsSphere(Tr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,zs),zu.multiplyMatrices(i,zs),Er.matrixWorld=zu,Er.raycast(t,No);for(let o=0,a=No.length;o<a;o++){let l=No[o];l.instanceId=r,l.object=this,e.push(l)}No.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Hr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let i=e.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new zr(new Float32Array(s*this.count),s,this.count,ih,si));let r=this.morphTexture.source.data.data,o=0;for(let h=0;h<i.length;h++)o+=i[h];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;r[l]=a,r.set(i,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var ds=class extends Si{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new oe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},da=new $,pa=new $,$u=new we,Ar=new Qo,Fo=new Vi,El=new $,Vu=new $,Lc=class extends Fe{constructor(t=new Oe,e=new ds){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[0];for(let s=1,r=e.count;s<r;s++)da.fromBufferAttribute(e,s-1),pa.fromBufferAttribute(e,s),i[s]=i[s-1],i[s]+=da.distanceTo(pa);t.setAttribute("lineDistance",new me(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let i=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Fo.copy(i.boundingSphere),Fo.applyMatrix4(s),Fo.radius+=r,t.ray.intersectsSphere(Fo)===!1)return;$u.copy(s).invert(),Ar.copy(t.ray).applyMatrix4($u);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,h=this.isLineSegments?2:1,p=i.index,d=i.attributes.position;if(p!==null){let c=Math.max(0,o.start),u=Math.min(p.count,o.start+o.count);for(let _=c,m=u-1;_<m;_+=h){let f=p.getX(_),S=p.getX(_+1),x=Oo(this,t,Ar,l,f,S);x&&e.push(x)}if(this.isLineLoop){let _=p.getX(u-1),m=p.getX(c),f=Oo(this,t,Ar,l,_,m);f&&e.push(f)}}else{let c=Math.max(0,o.start),u=Math.min(d.count,o.start+o.count);for(let _=c,m=u-1;_<m;_+=h){let f=Oo(this,t,Ar,l,_,_+1);f&&e.push(f)}if(this.isLineLoop){let _=Oo(this,t,Ar,l,u-1,c);_&&e.push(_)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Oo(n,t,e,i,s,r){let o=n.geometry.attributes.position;if(da.fromBufferAttribute(o,s),pa.fromBufferAttribute(o,r),e.distanceSqToSegment(da,pa,El,Vu)>i)return;El.applyMatrix4(n.matrixWorld);let l=t.ray.origin.distanceTo(El);if(!(l<t.near||l>t.far))return{distance:l,point:Vu.clone().applyMatrix4(n.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:n}}var Gu=new $,Wu=new $,Qs=class extends Lc{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[];for(let s=0,r=e.count;s<r;s+=2)Gu.fromBufferAttribute(e,s),Wu.fromBufferAttribute(e,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Gu.distanceTo(Wu);t.setAttribute("lineDistance",new me(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var tr=class extends An{constructor(t,e,i,s,r,o,a,l,h){super(t,e,i,s,r,o,a,l,h),this.isCanvasTexture=!0,this.needsUpdate=!0}},On=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],i,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)i=this.getPoint(o/t),r+=i.distanceTo(s),e.push(r),s=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let i=this.getLengths(),s=0,r=i.length,o;e?o=e:o=t*i[r-1];let a=0,l=r-1,h;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),h=i[s]-o,h<0)a=s+1;else if(h>0)l=s-1;else{l=s;break}if(s=l,i[s]===o)return s/(r-1);let p=i[s],d=i[s+1]-p,c=(o-p)/d;return(s+c)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new Bt:new $);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e){let i=new $,s=[],r=[],o=[],a=new $,l=new we;for(let c=0;c<=t;c++){let u=c/t;s[c]=this.getTangentAt(u,new $)}r[0]=new $,o[0]=new $;let h=Number.MAX_VALUE,p=Math.abs(s[0].x),g=Math.abs(s[0].y),d=Math.abs(s[0].z);p<=h&&(h=p,i.set(1,0,0)),g<=h&&(h=g,i.set(0,1,0)),d<=h&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let c=1;c<=t;c++){if(r[c]=r[c-1].clone(),o[c]=o[c-1].clone(),a.crossVectors(s[c-1],s[c]),a.length()>Number.EPSILON){a.normalize();let u=Math.acos(un(s[c-1].dot(s[c]),-1,1));r[c].applyMatrix4(l.makeRotationAxis(a,u))}o[c].crossVectors(s[c],r[c])}if(e===!0){let c=Math.acos(un(r[0].dot(r[t]),-1,1));c/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(c=-c);for(let u=1;u<=t;u++)r[u].applyMatrix4(l.makeRotationAxis(s[u],c*u)),o[u].crossVectors(s[u],r[u])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},$r=class extends On{constructor(t=0,e=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new Bt){let i=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(a),h=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let p=Math.cos(this.aRotation),g=Math.sin(this.aRotation),d=l-this.aX,c=h-this.aY;l=d*p-c*g+this.aX,h=d*g+c*p+this.aY}return i.set(l,h)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},kc=class extends $r{constructor(t,e,i,s,r,o){super(t,e,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function hh(){let n=0,t=0,e=0,i=0;function s(r,o,a,l){n=r,t=a,e=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,h){s(o,a,h*(a-r),h*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,h,p,g){let d=(o-r)/h-(a-r)/(h+p)+(a-o)/p,c=(a-o)/p-(l-o)/(p+g)+(l-a)/g;d*=p,c*=p,s(o,a,d,c)},calc:function(r){let o=r*r,a=o*r;return n+t*r+e*o+i*a}}}var Bo=new $,Tl=new hh,Al=new hh,Rl=new hh,Vr=class extends On{constructor(t=[],e=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=s}getPoint(t,e=new $){let i=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let h,p;this.closed||a>0?h=s[(a-1)%r]:(Bo.subVectors(s[0],s[1]).add(s[0]),h=Bo);let g=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?p=s[(a+2)%r]:(Bo.subVectors(s[r-1],s[r-2]).add(s[r-1]),p=Bo),this.curveType==="centripetal"||this.curveType==="chordal"){let c=this.curveType==="chordal"?.5:.25,u=Math.pow(h.distanceToSquared(g),c),_=Math.pow(g.distanceToSquared(d),c),m=Math.pow(d.distanceToSquared(p),c);_<1e-4&&(_=1),u<1e-4&&(u=_),m<1e-4&&(m=_),Tl.initNonuniformCatmullRom(h.x,g.x,d.x,p.x,u,_,m),Al.initNonuniformCatmullRom(h.y,g.y,d.y,p.y,u,_,m),Rl.initNonuniformCatmullRom(h.z,g.z,d.z,p.z,u,_,m)}else this.curveType==="catmullrom"&&(Tl.initCatmullRom(h.x,g.x,d.x,p.x,this.tension),Al.initCatmullRom(h.y,g.y,d.y,p.y,this.tension),Rl.initCatmullRom(h.z,g.z,d.z,p.z,this.tension));return i.set(Tl.calc(l),Al.calc(l),Rl.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(new $().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Xu(n,t,e,i,s){let r=(i-t)*.5,o=(s-e)*.5,a=n*n,l=n*a;return(2*e-2*i+r+o)*l+(-3*e+3*i-2*r-o)*a+r*n+e}function mx(n,t){let e=1-n;return e*e*t}function gx(n,t){return 2*(1-n)*n*t}function yx(n,t){return n*n*t}function kr(n,t,e,i){return mx(n,t)+gx(n,e)+yx(n,i)}function xx(n,t){let e=1-n;return e*e*e*t}function vx(n,t){let e=1-n;return 3*e*e*n*t}function _x(n,t){return 3*(1-n)*n*n*t}function Mx(n,t){return n*n*n*t}function Dr(n,t,e,i,s){return xx(n,t)+vx(n,e)+_x(n,i)+Mx(n,s)}var ma=class extends On{constructor(t=new Bt,e=new Bt,i=new Bt,s=new Bt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new Bt){let i=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Dr(t,s.x,r.x,o.x,a.x),Dr(t,s.y,r.y,o.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Dc=class extends On{constructor(t=new $,e=new $,i=new $,s=new $){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new $){let i=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Dr(t,s.x,r.x,o.x,a.x),Dr(t,s.y,r.y,o.y,a.y),Dr(t,s.z,r.z,o.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},ga=class extends On{constructor(t=new Bt,e=new Bt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Bt){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Bt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Uc=class extends On{constructor(t=new $,e=new $){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new $){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new $){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ya=class extends On{constructor(t=new Bt,e=new Bt,i=new Bt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new Bt){let i=e,s=this.v0,r=this.v1,o=this.v2;return i.set(kr(t,s.x,r.x,o.x),kr(t,s.y,r.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},xa=class extends On{constructor(t=new $,e=new $,i=new $){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new $){let i=e,s=this.v0,r=this.v1,o=this.v2;return i.set(kr(t,s.x,r.x,o.x),kr(t,s.y,r.y,o.y),kr(t,s.z,r.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},va=class extends On{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Bt){let i=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],h=s[o],p=s[o>s.length-2?s.length-1:o+1],g=s[o>s.length-3?s.length-1:o+2];return i.set(Xu(a,l.x,h.x,p.x,g.x),Xu(a,l.y,h.y,p.y,g.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(new Bt().fromArray(s))}return this}},_a=Object.freeze({__proto__:null,ArcCurve:kc,CatmullRomCurve3:Vr,CubicBezierCurve:ma,CubicBezierCurve3:Dc,EllipseCurve:$r,LineCurve:ga,LineCurve3:Uc,QuadraticBezierCurve:ya,QuadraticBezierCurve3:xa,SplineCurve:va}),Nc=class extends On{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new _a[i](e,t))}return this}getPoint(t,e){let i=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let o=s[r]-i,a=this.curves[r],l=a.getLength(),h=l===0?0:1-o/l;return a.getPointAt(h,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let i=0,s=this.curves.length;i<s;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],i;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let h=0;h<l.length;h++){let p=l[h];i&&i.equals(p)||(e.push(p),i=p)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let s=t.curves[e];this.curves.push(new _a[s.type]().fromJSON(s))}return this}},Gr=class extends Nc{constructor(t){super(),this.type="Path",this.currentPoint=new Bt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let i=new ga(this.currentPoint.clone(),new Bt(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,s){let r=new ya(this.currentPoint.clone(),new Bt(t,e),new Bt(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(t,e,i,s,r,o){let a=new ma(this.currentPoint.clone(),new Bt(t,e),new Bt(i,s),new Bt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),i=new va(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,i,s,r,o),this}absarc(t,e,i,s,r,o){return this.absellipse(t,e,i,i,s,r,o),this}ellipse(t,e,i,s,r,o,a,l){let h=this.currentPoint.x,p=this.currentPoint.y;return this.absellipse(t+h,e+p,i,s,r,o,a,l),this}absellipse(t,e,i,s,r,o,a,l){let h=new $r(t,e,i,s,r,o,a,l);if(this.curves.length>0){let g=h.getPoint(0);g.equals(this.currentPoint)||this.lineTo(g.x,g.y)}this.curves.push(h);let p=h.getPoint(1);return this.currentPoint.copy(p),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Wr=class n extends Oe{constructor(t=[new Bt(0,-.5),new Bt(.5,0),new Bt(0,.5)],e=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:i,phiLength:s},e=Math.floor(e),s=un(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],h=[],p=1/e,g=new $,d=new Bt,c=new $,u=new $,_=new $,m=0,f=0;for(let S=0;S<=t.length-1;S++)switch(S){case 0:m=t[S+1].x-t[S].x,f=t[S+1].y-t[S].y,c.x=f*1,c.y=-m,c.z=f*0,_.copy(c),c.normalize(),l.push(c.x,c.y,c.z);break;case t.length-1:l.push(_.x,_.y,_.z);break;default:m=t[S+1].x-t[S].x,f=t[S+1].y-t[S].y,c.x=f*1,c.y=-m,c.z=f*0,u.copy(c),c.x+=_.x,c.y+=_.y,c.z+=_.z,c.normalize(),l.push(c.x,c.y,c.z),_.copy(u)}for(let S=0;S<=e;S++){let x=i+S*p*s,y=Math.sin(x),k=Math.cos(x);for(let w=0;w<=t.length-1;w++){g.x=t[w].x*y,g.y=t[w].y,g.z=t[w].x*k,o.push(g.x,g.y,g.z),d.x=S/e,d.y=w/(t.length-1),a.push(d.x,d.y);let C=l[3*w+0]*y,R=l[3*w+1],M=l[3*w+0]*k;h.push(C,R,M)}}for(let S=0;S<e;S++)for(let x=0;x<t.length-1;x++){let y=x+S*t.length,k=y,w=y+t.length,C=y+t.length+1,R=y+1;r.push(k,w,R),r.push(C,R,w)}this.setIndex(r),this.setAttribute("position",new me(o,3)),this.setAttribute("uv",new me(a,2)),this.setAttribute("normal",new me(h,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.points,t.segments,t.phiStart,t.phiLength)}},Jn=class n extends Wr{constructor(t=1,e=1,i=4,s=8){let r=new Gr;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(i),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:i,radialSegments:s}}static fromJSON(t){return new n(t.radius,t.length,t.capSegments,t.radialSegments)}};var ue=class n extends Oe{constructor(t=1,e=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let h=this;s=Math.floor(s),r=Math.floor(r);let p=[],g=[],d=[],c=[],u=0,_=[],m=i/2,f=0;S(),o===!1&&(t>0&&x(!0),e>0&&x(!1)),this.setIndex(p),this.setAttribute("position",new me(g,3)),this.setAttribute("normal",new me(d,3)),this.setAttribute("uv",new me(c,2));function S(){let y=new $,k=new $,w=0,C=(e-t)/i;for(let R=0;R<=r;R++){let M=[],v=R/r,b=v*(e-t)+t;for(let I=0;I<=s;I++){let T=I/s,E=T*l+a,F=Math.sin(E),U=Math.cos(E);k.x=b*F,k.y=-v*i+m,k.z=b*U,g.push(k.x,k.y,k.z),y.set(F,C,U).normalize(),d.push(y.x,y.y,y.z),c.push(T,1-v),M.push(u++)}_.push(M)}for(let R=0;R<s;R++)for(let M=0;M<r;M++){let v=_[M][R],b=_[M+1][R],I=_[M+1][R+1],T=_[M][R+1];(t>0||M!==0)&&(p.push(v,b,T),w+=3),(e>0||M!==r-1)&&(p.push(b,I,T),w+=3)}h.addGroup(f,w,0),f+=w}function x(y){let k=u,w=new Bt,C=new $,R=0,M=y===!0?t:e,v=y===!0?1:-1;for(let I=1;I<=s;I++)g.push(0,m*v,0),d.push(0,v,0),c.push(.5,.5),u++;let b=u;for(let I=0;I<=s;I++){let E=I/s*l+a,F=Math.cos(E),U=Math.sin(E);C.x=M*U,C.y=m*v,C.z=M*F,g.push(C.x,C.y,C.z),d.push(0,v,0),w.x=F*.5+.5,w.y=U*.5*v+.5,c.push(w.x,w.y),u++}for(let I=0;I<s;I++){let T=k+I,E=b+I;y===!0?p.push(E,E+1,T):p.push(E+1,E,T),R+=3}h.addGroup(f,R,y===!0?1:2),f+=R}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},qe=class n extends ue{constructor(t=1,e=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new n(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Fc=class n extends Oe{constructor(t=[],e=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:s};let r=[],o=[];a(s),h(i),p(),this.setAttribute("position",new me(r,3)),this.setAttribute("normal",new me(r.slice(),3)),this.setAttribute("uv",new me(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(S){let x=new $,y=new $,k=new $;for(let w=0;w<e.length;w+=3)c(e[w+0],x),c(e[w+1],y),c(e[w+2],k),l(x,y,k,S)}function l(S,x,y,k){let w=k+1,C=[];for(let R=0;R<=w;R++){C[R]=[];let M=S.clone().lerp(y,R/w),v=x.clone().lerp(y,R/w),b=w-R;for(let I=0;I<=b;I++)I===0&&R===w?C[R][I]=M:C[R][I]=M.clone().lerp(v,I/b)}for(let R=0;R<w;R++)for(let M=0;M<2*(w-R)-1;M++){let v=Math.floor(M/2);M%2===0?(d(C[R][v+1]),d(C[R+1][v]),d(C[R][v])):(d(C[R][v+1]),d(C[R+1][v+1]),d(C[R+1][v]))}}function h(S){let x=new $;for(let y=0;y<r.length;y+=3)x.x=r[y+0],x.y=r[y+1],x.z=r[y+2],x.normalize().multiplyScalar(S),r[y+0]=x.x,r[y+1]=x.y,r[y+2]=x.z}function p(){let S=new $;for(let x=0;x<r.length;x+=3){S.x=r[x+0],S.y=r[x+1],S.z=r[x+2];let y=m(S)/2/Math.PI+.5,k=f(S)/Math.PI+.5;o.push(y,1-k)}u(),g()}function g(){for(let S=0;S<o.length;S+=6){let x=o[S+0],y=o[S+2],k=o[S+4],w=Math.max(x,y,k),C=Math.min(x,y,k);w>.9&&C<.1&&(x<.2&&(o[S+0]+=1),y<.2&&(o[S+2]+=1),k<.2&&(o[S+4]+=1))}}function d(S){r.push(S.x,S.y,S.z)}function c(S,x){let y=S*3;x.x=t[y+0],x.y=t[y+1],x.z=t[y+2]}function u(){let S=new $,x=new $,y=new $,k=new $,w=new Bt,C=new Bt,R=new Bt;for(let M=0,v=0;M<r.length;M+=9,v+=6){S.set(r[M+0],r[M+1],r[M+2]),x.set(r[M+3],r[M+4],r[M+5]),y.set(r[M+6],r[M+7],r[M+8]),w.set(o[v+0],o[v+1]),C.set(o[v+2],o[v+3]),R.set(o[v+4],o[v+5]),k.copy(S).add(x).add(y).divideScalar(3);let b=m(k);_(w,v+0,S,b),_(C,v+2,x,b),_(R,v+4,y,b)}}function _(S,x,y,k){k<0&&S.x===1&&(o[x]=S.x-1),y.x===0&&y.z===0&&(o[x]=k/2/Math.PI+.5)}function m(S){return Math.atan2(S.z,-S.x)}function f(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.vertices,t.indices,t.radius,t.details)}};var ps=class extends Gr{constructor(t){super(t),this.uuid=oi(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let i=0,s=this.holes.length;i<s;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let s=t.holes[e];this.holes.push(new Gr().fromJSON(s))}return this}},bx={triangulate:function(n,t,e=2){let i=t&&t.length,s=i?t[0]*e:n.length,r=bf(n,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,h,p,g,d,c;if(i&&(r=Ax(n,t,r,e)),n.length>80*e){a=h=n[0],l=p=n[1];for(let u=e;u<s;u+=e)g=n[u],d=n[u+1],g<a&&(a=g),d<l&&(l=d),g>h&&(h=g),d>p&&(p=d);c=Math.max(h-a,p-l),c=c!==0?32767/c:0}return Xr(r,o,e,a,l,c,0),o}};function bf(n,t,e,i,s){let r,o;if(s===Ox(n,t,e,i)>0)for(r=t;r<e;r+=i)o=qu(r,n[r],n[r+1],o);else for(r=e-i;r>=t;r-=i)o=qu(r,n[r],n[r+1],o);return o&&La(o,o.next)&&(Yr(o),o=o.next),o}function ms(n,t){if(!n)return n;t||(t=n);let e=n,i;do if(i=!1,!e.steiner&&(La(e,e.next)||Xe(e.prev,e,e.next)===0)){if(Yr(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function Xr(n,t,e,i,s,r,o){if(!n)return;!o&&r&&Lx(n,i,s,r);let a=n,l,h;for(;n.prev!==n.next;){if(l=n.prev,h=n.next,r?wx(n,i,s,r):Sx(n)){t.push(l.i/e|0),t.push(n.i/e|0),t.push(h.i/e|0),Yr(n),n=h.next,a=h.next;continue}if(n=h,n===a){o?o===1?(n=Ex(ms(n),t,e),Xr(n,t,e,i,s,r,2)):o===2&&Tx(n,t,e,i,s,r):Xr(ms(n),t,e,i,s,r,1);break}}}function Sx(n){let t=n.prev,e=n,i=n.next;if(Xe(t,e,i)>=0)return!1;let s=t.x,r=e.x,o=i.x,a=t.y,l=e.y,h=i.y,p=s<r?s<o?s:o:r<o?r:o,g=a<l?a<h?a:h:l<h?l:h,d=s>r?s>o?s:o:r>o?r:o,c=a>l?a>h?a:h:l>h?l:h,u=i.next;for(;u!==t;){if(u.x>=p&&u.x<=d&&u.y>=g&&u.y<=c&&$s(s,a,r,l,o,h,u.x,u.y)&&Xe(u.prev,u,u.next)>=0)return!1;u=u.next}return!0}function wx(n,t,e,i){let s=n.prev,r=n,o=n.next;if(Xe(s,r,o)>=0)return!1;let a=s.x,l=r.x,h=o.x,p=s.y,g=r.y,d=o.y,c=a<l?a<h?a:h:l<h?l:h,u=p<g?p<d?p:d:g<d?g:d,_=a>l?a>h?a:h:l>h?l:h,m=p>g?p>d?p:d:g>d?g:d,f=Oc(c,u,t,e,i),S=Oc(_,m,t,e,i),x=n.prevZ,y=n.nextZ;for(;x&&x.z>=f&&y&&y.z<=S;){if(x.x>=c&&x.x<=_&&x.y>=u&&x.y<=m&&x!==s&&x!==o&&$s(a,p,l,g,h,d,x.x,x.y)&&Xe(x.prev,x,x.next)>=0||(x=x.prevZ,y.x>=c&&y.x<=_&&y.y>=u&&y.y<=m&&y!==s&&y!==o&&$s(a,p,l,g,h,d,y.x,y.y)&&Xe(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;x&&x.z>=f;){if(x.x>=c&&x.x<=_&&x.y>=u&&x.y<=m&&x!==s&&x!==o&&$s(a,p,l,g,h,d,x.x,x.y)&&Xe(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;y&&y.z<=S;){if(y.x>=c&&y.x<=_&&y.y>=u&&y.y<=m&&y!==s&&y!==o&&$s(a,p,l,g,h,d,y.x,y.y)&&Xe(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function Ex(n,t,e){let i=n;do{let s=i.prev,r=i.next.next;!La(s,r)&&Sf(s,i,i.next,r)&&qr(s,r)&&qr(r,s)&&(t.push(s.i/e|0),t.push(i.i/e|0),t.push(r.i/e|0),Yr(i),Yr(i.next),i=n=r),i=i.next}while(i!==n);return ms(i)}function Tx(n,t,e,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Ux(o,a)){let l=wf(o,a);o=ms(o,o.next),l=ms(l,l.next),Xr(o,t,e,i,s,r,0),Xr(l,t,e,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function Ax(n,t,e,i){let s=[],r,o,a,l,h;for(r=0,o=t.length;r<o;r++)a=t[r]*i,l=r<o-1?t[r+1]*i:n.length,h=bf(n,a,l,i,!1),h===h.next&&(h.steiner=!0),s.push(Dx(h));for(s.sort(Rx),r=0;r<s.length;r++)e=Cx(s[r],e);return e}function Rx(n,t){return n.x-t.x}function Cx(n,t){let e=Ix(n,t);if(!e)return t;let i=wf(e,n);return ms(i,i.next),ms(e,e.next)}function Ix(n,t){let e=t,i=-1/0,s,r=n.x,o=n.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){let d=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=r&&d>i&&(i=d,s=e.x<e.next.x?e:e.next,d===r))return s}e=e.next}while(e!==t);if(!s)return null;let a=s,l=s.x,h=s.y,p=1/0,g;e=s;do r>=e.x&&e.x>=l&&r!==e.x&&$s(o<h?r:i,o,l,h,o<h?i:r,o,e.x,e.y)&&(g=Math.abs(o-e.y)/(r-e.x),qr(e,n)&&(g<p||g===p&&(e.x>s.x||e.x===s.x&&Px(s,e)))&&(s=e,p=g)),e=e.next;while(e!==a);return s}function Px(n,t){return Xe(n.prev,n,t.prev)<0&&Xe(t.next,n,n.next)<0}function Lx(n,t,e,i){let s=n;do s.z===0&&(s.z=Oc(s.x,s.y,t,e,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,kx(s)}function kx(n){let t,e,i,s,r,o,a,l,h=1;do{for(e=n,n=null,r=null,o=0;e;){for(o++,i=e,a=0,t=0;t<h&&(a++,i=i.nextZ,!!i);t++);for(l=h;a>0||l>0&&i;)a!==0&&(l===0||!i||e.z<=i.z)?(s=e,e=e.nextZ,a--):(s=i,i=i.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;e=i}r.nextZ=null,h*=2}while(o>1);return n}function Oc(n,t,e,i,s){return n=(n-e)*s|0,t=(t-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,n|t<<1}function Dx(n){let t=n,e=n;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==n);return e}function $s(n,t,e,i,s,r,o,a){return(s-o)*(t-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(i-a)}function Ux(n,t){return n.next.i!==t.i&&n.prev.i!==t.i&&!Nx(n,t)&&(qr(n,t)&&qr(t,n)&&Fx(n,t)&&(Xe(n.prev,n,t.prev)||Xe(n,t.prev,t))||La(n,t)&&Xe(n.prev,n,n.next)>0&&Xe(t.prev,t,t.next)>0)}function Xe(n,t,e){return(t.y-n.y)*(e.x-t.x)-(t.x-n.x)*(e.y-t.y)}function La(n,t){return n.x===t.x&&n.y===t.y}function Sf(n,t,e,i){let s=Ho(Xe(n,t,e)),r=Ho(Xe(n,t,i)),o=Ho(Xe(e,i,n)),a=Ho(Xe(e,i,t));return!!(s!==r&&o!==a||s===0&&zo(n,e,t)||r===0&&zo(n,i,t)||o===0&&zo(e,n,i)||a===0&&zo(e,t,i))}function zo(n,t,e){return t.x<=Math.max(n.x,e.x)&&t.x>=Math.min(n.x,e.x)&&t.y<=Math.max(n.y,e.y)&&t.y>=Math.min(n.y,e.y)}function Ho(n){return n>0?1:n<0?-1:0}function Nx(n,t){let e=n;do{if(e.i!==n.i&&e.next.i!==n.i&&e.i!==t.i&&e.next.i!==t.i&&Sf(e,e.next,n,t))return!0;e=e.next}while(e!==n);return!1}function qr(n,t){return Xe(n.prev,n,n.next)<0?Xe(n,t,n.next)>=0&&Xe(n,n.prev,t)>=0:Xe(n,t,n.prev)<0||Xe(n,n.next,t)<0}function Fx(n,t){let e=n,i=!1,s=(n.x+t.x)/2,r=(n.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==n);return i}function wf(n,t){let e=new Bc(n.i,n.x,n.y),i=new Bc(t.i,t.x,t.y),s=n.next,r=t.prev;return n.next=t,t.prev=n,e.next=s,s.prev=e,i.next=e,e.prev=i,r.next=i,i.prev=r,i}function qu(n,t,e,i){let s=new Bc(n,t,e);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function Yr(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Bc(n,t,e){this.i=n,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Ox(n,t,e,i){let s=0;for(let r=t,o=e-i;r<e;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}var zi=class n{static area(t){let e=t.length,i=0;for(let s=e-1,r=0;r<e;s=r++)i+=t[s].x*t[r].y-t[r].x*t[s].y;return i*.5}static isClockWise(t){return n.area(t)<0}static triangulateShape(t,e){let i=[],s=[],r=[];Yu(t),Zu(i,t);let o=t.length;e.forEach(Yu);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,Zu(i,e[l]);let a=bx.triangulate(i,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function Yu(n){let t=n.length;t>2&&n[t-1].equals(n[0])&&n.pop()}function Zu(n,t){for(let e=0;e<t.length;e++)n.push(t[e].x),n.push(t[e].y)}var Ma=class n extends Oe{constructor(t=new ps([new Bt(.5,.5),new Bt(-.5,.5),new Bt(-.5,-.5),new Bt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let i=this,s=[],r=[];for(let a=0,l=t.length;a<l;a++){let h=t[a];o(h)}this.setAttribute("position",new me(s,3)),this.setAttribute("uv",new me(r,2)),this.computeVertexNormals();function o(a){let l=[],h=e.curveSegments!==void 0?e.curveSegments:12,p=e.steps!==void 0?e.steps:1,g=e.depth!==void 0?e.depth:1,d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,c=e.bevelThickness!==void 0?e.bevelThickness:.2,u=e.bevelSize!==void 0?e.bevelSize:c-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3,f=e.extrudePath,S=e.UVGenerator!==void 0?e.UVGenerator:Bx,x,y=!1,k,w,C,R;f&&(x=f.getSpacedPoints(p),y=!0,d=!1,k=f.computeFrenetFrames(p,!1),w=new $,C=new $,R=new $),d||(m=0,c=0,u=0,_=0);let M=a.extractPoints(h),v=M.shape,b=M.holes;if(!zi.isClockWise(v)){v=v.reverse();for(let ht=0,yt=b.length;ht<yt;ht++){let N=b[ht];zi.isClockWise(N)&&(b[ht]=N.reverse())}}let T=zi.triangulateShape(v,b),E=v;for(let ht=0,yt=b.length;ht<yt;ht++){let N=b[ht];v=v.concat(N)}function F(ht,yt,N){return yt||console.error("THREE.ExtrudeGeometry: vec does not exist"),ht.clone().addScaledVector(yt,N)}let U=v.length,B=T.length;function z(ht,yt,N){let ut,rt,_t,kt=ht.x-yt.x,Z=ht.y-yt.y,Ft=N.x-ht.x,H=N.y-ht.y,P=kt*kt+Z*Z,dt=kt*H-Z*Ft;if(Math.abs(dt)>Number.EPSILON){let At=Math.sqrt(P),It=Math.sqrt(Ft*Ft+H*H),Y=yt.x-Z/At,pt=yt.y+kt/At,ct=N.x-H/It,bt=N.y+Ft/It,wt=((ct-Y)*H-(bt-pt)*Ft)/(kt*H-Z*Ft);ut=Y+kt*wt-ht.x,rt=pt+Z*wt-ht.y;let Rt=ut*ut+rt*rt;if(Rt<=2)return new Bt(ut,rt);_t=Math.sqrt(Rt/2)}else{let At=!1;kt>Number.EPSILON?Ft>Number.EPSILON&&(At=!0):kt<-Number.EPSILON?Ft<-Number.EPSILON&&(At=!0):Math.sign(Z)===Math.sign(H)&&(At=!0),At?(ut=-Z,rt=kt,_t=Math.sqrt(P)):(ut=kt,rt=Z,_t=Math.sqrt(P/2))}return new Bt(ut/_t,rt/_t)}let W=[];for(let ht=0,yt=E.length,N=yt-1,ut=ht+1;ht<yt;ht++,N++,ut++)N===yt&&(N=0),ut===yt&&(ut=0),W[ht]=z(E[ht],E[N],E[ut]);let it=[],D,ft=W.concat();for(let ht=0,yt=b.length;ht<yt;ht++){let N=b[ht];D=[];for(let ut=0,rt=N.length,_t=rt-1,kt=ut+1;ut<rt;ut++,_t++,kt++)_t===rt&&(_t=0),kt===rt&&(kt=0),D[ut]=z(N[ut],N[_t],N[kt]);it.push(D),ft=ft.concat(D)}for(let ht=0;ht<m;ht++){let yt=ht/m,N=c*Math.cos(yt*Math.PI/2),ut=u*Math.sin(yt*Math.PI/2)+_;for(let rt=0,_t=E.length;rt<_t;rt++){let kt=F(E[rt],W[rt],ut);V(kt.x,kt.y,-N)}for(let rt=0,_t=b.length;rt<_t;rt++){let kt=b[rt];D=it[rt];for(let Z=0,Ft=kt.length;Z<Ft;Z++){let H=F(kt[Z],D[Z],ut);V(H.x,H.y,-N)}}}let Lt=u+_;for(let ht=0;ht<U;ht++){let yt=d?F(v[ht],ft[ht],Lt):v[ht];y?(C.copy(k.normals[0]).multiplyScalar(yt.x),w.copy(k.binormals[0]).multiplyScalar(yt.y),R.copy(x[0]).add(C).add(w),V(R.x,R.y,R.z)):V(yt.x,yt.y,0)}for(let ht=1;ht<=p;ht++)for(let yt=0;yt<U;yt++){let N=d?F(v[yt],ft[yt],Lt):v[yt];y?(C.copy(k.normals[ht]).multiplyScalar(N.x),w.copy(k.binormals[ht]).multiplyScalar(N.y),R.copy(x[ht]).add(C).add(w),V(R.x,R.y,R.z)):V(N.x,N.y,g/p*ht)}for(let ht=m-1;ht>=0;ht--){let yt=ht/m,N=c*Math.cos(yt*Math.PI/2),ut=u*Math.sin(yt*Math.PI/2)+_;for(let rt=0,_t=E.length;rt<_t;rt++){let kt=F(E[rt],W[rt],ut);V(kt.x,kt.y,g+N)}for(let rt=0,_t=b.length;rt<_t;rt++){let kt=b[rt];D=it[rt];for(let Z=0,Ft=kt.length;Z<Ft;Z++){let H=F(kt[Z],D[Z],ut);y?V(H.x,H.y+x[p-1].y,x[p-1].x+N):V(H.x,H.y,g+N)}}}O(),X();function O(){let ht=s.length/3;if(d){let yt=0,N=U*yt;for(let ut=0;ut<B;ut++){let rt=T[ut];st(rt[2]+N,rt[1]+N,rt[0]+N)}yt=p+m*2,N=U*yt;for(let ut=0;ut<B;ut++){let rt=T[ut];st(rt[0]+N,rt[1]+N,rt[2]+N)}}else{for(let yt=0;yt<B;yt++){let N=T[yt];st(N[2],N[1],N[0])}for(let yt=0;yt<B;yt++){let N=T[yt];st(N[0]+U*p,N[1]+U*p,N[2]+U*p)}}i.addGroup(ht,s.length/3-ht,0)}function X(){let ht=s.length/3,yt=0;J(E,yt),yt+=E.length;for(let N=0,ut=b.length;N<ut;N++){let rt=b[N];J(rt,yt),yt+=rt.length}i.addGroup(ht,s.length/3-ht,1)}function J(ht,yt){let N=ht.length;for(;--N>=0;){let ut=N,rt=N-1;rt<0&&(rt=ht.length-1);for(let _t=0,kt=p+m*2;_t<kt;_t++){let Z=U*_t,Ft=U*(_t+1),H=yt+ut+Z,P=yt+rt+Z,dt=yt+rt+Ft,At=yt+ut+Ft;nt(H,P,dt,At)}}}function V(ht,yt,N){l.push(ht),l.push(yt),l.push(N)}function st(ht,yt,N){St(ht),St(yt),St(N);let ut=s.length/3,rt=S.generateTopUV(i,s,ut-3,ut-2,ut-1);zt(rt[0]),zt(rt[1]),zt(rt[2])}function nt(ht,yt,N,ut){St(ht),St(yt),St(ut),St(yt),St(N),St(ut);let rt=s.length/3,_t=S.generateSideWallUV(i,s,rt-6,rt-3,rt-2,rt-1);zt(_t[0]),zt(_t[1]),zt(_t[3]),zt(_t[1]),zt(_t[2]),zt(_t[3])}function St(ht){s.push(l[ht*3+0]),s.push(l[ht*3+1]),s.push(l[ht*3+2])}function zt(ht){r.push(ht.x),r.push(ht.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,i=this.parameters.options;return zx(e,i,t)}static fromJSON(t,e){let i=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];i.push(a)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new _a[s.type]().fromJSON(s)),new n(i,t.options)}},Bx={generateTopUV:function(n,t,e,i,s){let r=t[e*3],o=t[e*3+1],a=t[i*3],l=t[i*3+1],h=t[s*3],p=t[s*3+1];return[new Bt(r,o),new Bt(a,l),new Bt(h,p)]},generateSideWallUV:function(n,t,e,i,s,r){let o=t[e*3],a=t[e*3+1],l=t[e*3+2],h=t[i*3],p=t[i*3+1],g=t[i*3+2],d=t[s*3],c=t[s*3+1],u=t[s*3+2],_=t[r*3],m=t[r*3+1],f=t[r*3+2];return Math.abs(a-p)<Math.abs(o-h)?[new Bt(o,1-l),new Bt(h,1-g),new Bt(d,1-u),new Bt(_,1-f)]:[new Bt(a,1-l),new Bt(p,1-g),new Bt(c,1-u),new Bt(m,1-f)]}};function zx(n,t,e){if(e.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){let r=n[i];e.shapes.push(r.uuid)}else e.shapes.push(n.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var sn=class n extends Fc{constructor(t=1,e=0){let i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new n(t.radius,t.detail)}};var er=class n extends Oe{constructor(t=.5,e=1,i=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:o},i=Math.max(3,i),s=Math.max(1,s);let a=[],l=[],h=[],p=[],g=t,d=(e-t)/s,c=new $,u=new Bt;for(let _=0;_<=s;_++){for(let m=0;m<=i;m++){let f=r+m/i*o;c.x=g*Math.cos(f),c.y=g*Math.sin(f),l.push(c.x,c.y,c.z),h.push(0,0,1),u.x=(c.x/e+1)/2,u.y=(c.y/e+1)/2,p.push(u.x,u.y)}g+=d}for(let _=0;_<s;_++){let m=_*(i+1);for(let f=0;f<i;f++){let S=f+m,x=S,y=S+i+1,k=S+i+2,w=S+1;a.push(x,y,w),a.push(y,k,w)}}this.setIndex(a),this.setAttribute("position",new me(l,3)),this.setAttribute("normal",new me(h,3)),this.setAttribute("uv",new me(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},ba=class n extends Oe{constructor(t=new ps([new Bt(0,.5),new Bt(-.5,-.5),new Bt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let i=[],s=[],r=[],o=[],a=0,l=0;if(Array.isArray(t)===!1)h(t);else for(let p=0;p<t.length;p++)h(t[p]),this.addGroup(a,l,p),a+=l,l=0;this.setIndex(i),this.setAttribute("position",new me(s,3)),this.setAttribute("normal",new me(r,3)),this.setAttribute("uv",new me(o,2));function h(p){let g=s.length/3,d=p.extractPoints(e),c=d.shape,u=d.holes;zi.isClockWise(c)===!1&&(c=c.reverse());for(let m=0,f=u.length;m<f;m++){let S=u[m];zi.isClockWise(S)===!0&&(u[m]=S.reverse())}let _=zi.triangulateShape(c,u);for(let m=0,f=u.length;m<f;m++){let S=u[m];c=c.concat(S)}for(let m=0,f=c.length;m<f;m++){let S=c[m];s.push(S.x,S.y,0),r.push(0,0,1),o.push(S.x,S.y)}for(let m=0,f=_.length;m<f;m++){let S=_[m],x=S[0]+g,y=S[1]+g,k=S[2]+g;i.push(x,y,k),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return Hx(e,t)}static fromJSON(t,e){let i=[];for(let s=0,r=t.shapes.length;s<r;s++){let o=e[t.shapes[s]];i.push(o)}return new n(i,t.curveSegments)}};function Hx(n,t){if(t.shapes=[],Array.isArray(n))for(let e=0,i=n.length;e<i;e++){let s=n[e];t.shapes.push(s.uuid)}else t.shapes.push(n.uuid);return t}var ye=class n extends Oe{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),h=0,p=[],g=new $,d=new $,c=[],u=[],_=[],m=[];for(let f=0;f<=i;f++){let S=[],x=f/i,y=0;f===0&&o===0?y=.5/e:f===i&&l===Math.PI&&(y=-.5/e);for(let k=0;k<=e;k++){let w=k/e;g.x=-t*Math.cos(s+w*r)*Math.sin(o+x*a),g.y=t*Math.cos(o+x*a),g.z=t*Math.sin(s+w*r)*Math.sin(o+x*a),u.push(g.x,g.y,g.z),d.copy(g).normalize(),_.push(d.x,d.y,d.z),m.push(w+y,1-x),S.push(h++)}p.push(S)}for(let f=0;f<i;f++)for(let S=0;S<e;S++){let x=p[f][S+1],y=p[f][S],k=p[f+1][S],w=p[f+1][S+1];(f!==0||o>0)&&c.push(x,y,w),(f!==i-1||l<Math.PI)&&c.push(y,k,w)}this.setIndex(c),this.setAttribute("position",new me(u,3)),this.setAttribute("normal",new me(_,3)),this.setAttribute("uv",new me(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Je=class n extends Oe{constructor(t=1,e=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);let o=[],a=[],l=[],h=[],p=new $,g=new $,d=new $;for(let c=0;c<=i;c++)for(let u=0;u<=s;u++){let _=u/s*r,m=c/i*Math.PI*2;g.x=(t+e*Math.cos(m))*Math.cos(_),g.y=(t+e*Math.cos(m))*Math.sin(_),g.z=e*Math.sin(m),a.push(g.x,g.y,g.z),p.x=t*Math.cos(_),p.y=t*Math.sin(_),d.subVectors(g,p).normalize(),l.push(d.x,d.y,d.z),h.push(u/s),h.push(c/i)}for(let c=1;c<=i;c++)for(let u=1;u<=s;u++){let _=(s+1)*c+u-1,m=(s+1)*(c-1)+u-1,f=(s+1)*(c-1)+u,S=(s+1)*c+u;o.push(_,m,S),o.push(m,f,S)}this.setIndex(o),this.setAttribute("position",new me(a,3)),this.setAttribute("normal",new me(l,3)),this.setAttribute("uv",new me(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var Sa=class n extends Oe{constructor(t=new xa(new $(-1,-1,0),new $(-1,1,0),new $(1,1,0)),e=64,i=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:i,radialSegments:s,closed:r};let o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new $,l=new $,h=new Bt,p=new $,g=[],d=[],c=[],u=[];_(),this.setIndex(u),this.setAttribute("position",new me(g,3)),this.setAttribute("normal",new me(d,3)),this.setAttribute("uv",new me(c,2));function _(){for(let x=0;x<e;x++)m(x);m(r===!1?e:0),S(),f()}function m(x){p=t.getPointAt(x/e,p);let y=o.normals[x],k=o.binormals[x];for(let w=0;w<=s;w++){let C=w/s*Math.PI*2,R=Math.sin(C),M=-Math.cos(C);l.x=M*y.x+R*k.x,l.y=M*y.y+R*k.y,l.z=M*y.z+R*k.z,l.normalize(),d.push(l.x,l.y,l.z),a.x=p.x+i*l.x,a.y=p.y+i*l.y,a.z=p.z+i*l.z,g.push(a.x,a.y,a.z)}}function f(){for(let x=1;x<=e;x++)for(let y=1;y<=s;y++){let k=(s+1)*(x-1)+(y-1),w=(s+1)*x+(y-1),C=(s+1)*x+y,R=(s+1)*(x-1)+y;u.push(k,w,R),u.push(w,C,R)}}function S(){for(let x=0;x<=e;x++)for(let y=0;y<=s;y++)h.x=x/e,h.y=y/s,c.push(h.x,h.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new n(new _a[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};var wa=class extends Si{static get type(){return"MeshToonMaterial"}constructor(t){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.color=new oe(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new oe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=uf,this.normalScale=new Bt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};function $o(n,t,e){return!n||!e&&n.constructor===t?n:typeof t.BYTES_PER_ELEMENT=="number"?new t(n):Array.prototype.slice.call(n)}function $x(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var nr=class{constructor(t,e,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,s=e[i],r=e[i-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=i+2;;){if(s===void 0){if(t<r)break i;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=e[++i],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=e[--i-1],t>=r)break t}o=i,i=0;break e}break n}for(;i<o;){let a=i+o>>>1;t<e[a]?o=a:i=a+1}if(s=e[i],r=e[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=i[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},zc=class extends nr{constructor(t,e,i,s){super(t,e,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:$h,endingEnd:$h}}intervalChanged_(t,e,i){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Vh:r=t,a=2*e-i;break;case Gh:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Vh:o=t,l=2*i-e;break;case Gh:o=1,l=i+s[1]-s[0];break;default:o=t-1,l=e}let h=(i-e)*.5,p=this.valueSize;this._weightPrev=h/(e-a),this._weightNext=h/(l-i),this._offsetPrev=r*p,this._offsetNext=o*p}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,h=l-a,p=this._offsetPrev,g=this._offsetNext,d=this._weightPrev,c=this._weightNext,u=(i-e)/(s-e),_=u*u,m=_*u,f=-d*m+2*d*_-d*u,S=(1+d)*m+(-1.5-2*d)*_+(-.5+d)*u+1,x=(-1-c)*m+(1.5+c)*_+.5*u,y=c*m-c*_;for(let k=0;k!==a;++k)r[k]=f*o[p+k]+S*o[h+k]+x*o[l+k]+y*o[g+k];return r}},Hc=class extends nr{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,h=l-a,p=(i-e)/(s-e),g=1-p;for(let d=0;d!==a;++d)r[d]=o[h+d]*g+o[l+d]*p;return r}},$c=class extends nr{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Kn=class{constructor(t,e,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=$o(e,this.TimeBufferType),this.values=$o(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:$o(t.times,Array),values:$o(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s)}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new $c(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Hc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new zc(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Yo:e=this.InterpolantFactoryMethodDiscrete;break;case pc:e=this.InterpolantFactoryMethodLinear;break;case Ka:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Yo;case this.InterpolantFactoryMethodLinear:return pc;case this.InterpolantFactoryMethodSmooth:return Ka}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]*=t}return this}trim(t,e){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<t;)++r;for(;o!==-1&&i[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&$x(s))for(let a=0,l=s.length;a!==l;++a){let h=s[a];if(isNaN(h)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,h),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Ka,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,h=t[a],p=t[a+1];if(h!==p&&(a!==1||h!==t[0]))if(s)l=!0;else{let g=a*i,d=g-i,c=g+i;for(let u=0;u!==i;++u){let _=e[g+u];if(_!==e[d+u]||_!==e[c+u]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let g=a*i,d=o*i;for(let c=0;c!==i;++c)e[d+c]=e[g+c]}++o}}if(r>0){t[o]=t[r];for(let a=r*i,l=o*i,h=0;h!==i;++h)e[l+h]=e[a+h];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,s=new i(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};Kn.prototype.TimeBufferType=Float32Array;Kn.prototype.ValueBufferType=Float32Array;Kn.prototype.DefaultInterpolation=pc;var gs=class extends Kn{constructor(t,e,i){super(t,e,i)}};gs.prototype.ValueTypeName="bool";gs.prototype.ValueBufferType=Array;gs.prototype.DefaultInterpolation=Yo;gs.prototype.InterpolantFactoryMethodLinear=void 0;gs.prototype.InterpolantFactoryMethodSmooth=void 0;var Vc=class extends Kn{};Vc.prototype.ValueTypeName="color";var Gc=class extends Kn{};Gc.prototype.ValueTypeName="number";var Wc=class extends nr{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-e)/(s-e),h=t*a;for(let p=h+a;h!==p;h+=4)Fn.slerpFlat(r,0,o,h-a,o,h,l);return r}},Ea=class extends Kn{InterpolantFactoryMethodLinear(t){return new Wc(this.times,this.values,this.getValueSize(),t)}};Ea.prototype.ValueTypeName="quaternion";Ea.prototype.InterpolantFactoryMethodSmooth=void 0;var ys=class extends Kn{constructor(t,e,i){super(t,e,i)}};ys.prototype.ValueTypeName="string";ys.prototype.ValueBufferType=Array;ys.prototype.DefaultInterpolation=Yo;ys.prototype.InterpolantFactoryMethodLinear=void 0;ys.prototype.InterpolantFactoryMethodSmooth=void 0;var Xc=class extends Kn{};Xc.prototype.ValueTypeName="vector";var qc=class{constructor(t,e,i){let s=this,r=!1,o=0,a=0,l,h=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this.itemStart=function(p){a++,r===!1&&s.onStart!==void 0&&s.onStart(p,o,a),r=!0},this.itemEnd=function(p){o++,s.onProgress!==void 0&&s.onProgress(p,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(p){s.onError!==void 0&&s.onError(p)},this.resolveURL=function(p){return l?l(p):p},this.setURLModifier=function(p){return l=p,this},this.addHandler=function(p,g){return h.push(p,g),this},this.removeHandler=function(p){let g=h.indexOf(p);return g!==-1&&h.splice(g,2),this},this.getHandler=function(p){for(let g=0,d=h.length;g<d;g+=2){let c=h[g],u=h[g+1];if(c.global&&(c.lastIndex=0),c.test(p))return u}return null}}},Vx=new qc,Yc=class{constructor(t){this.manager=t!==void 0?t:Vx,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let i=this;return new Promise(function(s,r){i.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};Yc.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ta=class extends Fe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new oe(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},Aa=class extends Ta{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Fe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new oe(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},Cl=new we,Ju=new $,Ku=new $,Zc=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Bt(512,512),this.map=null,this.mapPass=null,this.matrix=new we,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Fr,this._frameExtents=new Bt(1,1),this._viewportCount=1,this._viewports=[new Ze(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,i=this.matrix;Ju.setFromMatrixPosition(t.matrixWorld),e.position.copy(Ju),Ku.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Ku),e.updateMatrixWorld(),Cl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Cl),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Cl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var Jc=class extends Zc{constructor(){super(new ra(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ra=class extends Ta{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Fe.DEFAULT_UP),this.updateMatrix(),this.target=new Fe,this.shadow=new Jc}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var uh="\\[\\]\\.:\\/",Gx=new RegExp("["+uh+"]","g"),fh="[^"+uh+"]",Wx="[^"+uh.replace("\\.","")+"]",Xx=/((?:WC+[\/:])*)/.source.replace("WC",fh),qx=/(WCOD+)?/.source.replace("WCOD",Wx),Yx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",fh),Zx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",fh),Jx=new RegExp("^"+Xx+qx+Yx+Zx+"$"),Kx=["material","materials","bones","map"],Kc=class{constructor(t,e,i){let s=i||We.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},We=class n{constructor(t,e,i){this.path=e,this.parsedPath=i||n.parseTrackName(e),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new n.Composite(t,e,i):new n(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Gx,"")}static parseTrackName(t){let e=Jx.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);Kx.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=i(a.children);if(l)return l}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)t[e++]=i[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=n.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let h=e.objectIndex;switch(i){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let p=0;p<t.length;p++)if(t[p].name===h){h=p;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(h!==void 0){if(t[h]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[h]}}let o=t[s];if(o===void 0){let h=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+h+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};We.Composite=Kc;We.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};We.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};We.prototype.GetterByBindingType=[We.prototype._getValue_direct,We.prototype._getValue_array,We.prototype._getValue_arrayElement,We.prototype._getValue_toArray];We.prototype.SetterByBindingTypeAndVersioning=[[We.prototype._setValue_direct,We.prototype._setValue_direct_setNeedsUpdate,We.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[We.prototype._setValue_array,We.prototype._setValue_array_setNeedsUpdate,We.prototype._setValue_array_setMatrixWorldNeedsUpdate],[We.prototype._setValue_arrayElement,We.prototype._setValue_arrayElement_setNeedsUpdate,We.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[We.prototype._setValue_fromArray,We.prototype._setValue_fromArray_setNeedsUpdate,We.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var h_=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:jc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=jc);var jx=2.3,Ve=7.2,ka=.16,Wi=(n,t,e)=>{let i=Math.max(0,Math.min(1,(e-n)/(t-n)));return i*i*(3-2*i)};function Ef(n,t,e){let i=n.points,s=i.length-1,r=n.lengthM/s,o=O=>{let X=Math.max(0,Math.min(s,O/r)),J=Math.min(s-1,Math.floor(X)),V=X-J,st=i[Math.max(0,J-1)],nt=i[J],St=i[J+1],zt=i[Math.min(s,J+2)],ht=yt=>.5*(2*nt[yt]+(-st[yt]+St[yt])*V+(2*st[yt]-5*nt[yt]+4*St[yt]-zt[yt])*V*V+(-st[yt]+3*nt[yt]-3*St[yt]+zt[yt])*V*V*V);return[ht(0),ht(2),nt[1]+(St[1]-nt[1])*V]},a=O=>{if(O<=n.lengthM)return o(O);let X=o(n.lengthM-20),J=o(n.lengthM),V=(O-n.lengthM)/20;return[J[0]+(J[0]-X[0])*V,J[1]+(J[1]-X[1])*V,J[2]]},l=2700,h=2585,p=n.overlaps.filter(([O,X])=>X>O).sort((O,X)=>O[1]-X[1]),g=O=>{for(let V=0;V<p.length-1;V++){let[st,nt]=p[V],[St,zt]=p[V+1];if(O<=zt)return st+(O-nt)*(St-st)/(zt-nt)}let[X,J]=p.at(-1);return X+(O-J)},d=[];for(let O=0;O<=l;O+=2)d.push([O,...o(O)]);let c=2600,u=4900,_=[];for(let O=c;O<=u;O+=10){let X=o(O),J=g(O),V=J,st=1e9;for(let nt of d){if(Math.abs(nt[0]-J)>60)continue;let St=(nt[1]-X[0])**2+(nt[2]-X[1])**2;St<st&&(st=St,V=nt[0])}_.push(V)}let m=_.map((O,X)=>{let J=0,V=0;for(let st=-3;st<=3;st++){let nt=X+st;nt>=0&&nt<_.length&&(J+=_[nt],V++)}return J/V});for(let O=1;O<m.length;O++)m[O]=Math.max(m[O],m[O-1]+.5);let f=O=>{let X=(O-c)/10,J=Math.max(0,Math.min(m.length-2,Math.floor(X))),V=X-J;return m[J]+(m[J+1]-m[J])*V},S={};function x(O){for(let X of Object.keys(S))delete S[X];for(let X of O?.runners||[])!X.diversions||!X.diversions.length||(S[X.id]=X.diversions.map(J=>{let V=J.path,st=[0];for(let nt=1;nt<V.length;nt++)st.push(st[nt-1]+Math.hypot(V[nt][0]-V[nt-1][0],V[nt][1]-V[nt-1][1]));return{...J,cum:st,len:st.at(-1)}}))}x(e);let y=(O,X)=>{let J=Math.max(0,Math.min(1,(X-O.fromM)/(O.toM-O.fromM)))*O.len,V=0;for(;V<O.cum.length-2&&O.cum[V+1]<J;)V++;let st=(J-O.cum[V])/Math.max(1e-6,O.cum[V+1]-O.cum[V]);return[O.path[V][0]+(O.path[V+1][0]-O.path[V][0])*st,O.path[V][1]+(O.path[V+1][1]-O.path[V][1])*st]};function k(O){if(O<c-60){let st=a(O);return[st[0],st[1]]}let X=a(O);if(O>=u+40)return[X[0],X[1]];let J=Wi(c-60,c+60,O)*(1-Wi(u-60,u,O));if(J<=0)return[X[0],X[1]];let V=o(Math.min(l,f(Math.max(c,Math.min(u,O)))));return[X[0]+(V[0]-X[0])*J,X[1]+(V[1]-X[1])*J]}function w(O,X){let J=k(O),V=X&&S[X];if(V){for(let st of V)if(O>st.fromM&&O<st.toM){let nt=Wi(st.fromM,st.fromM+30,O)*(1-Wi(st.toM-30,st.toM,O)),St=y(st,O);return J=[J[0]+(St[0]-J[0])*nt,J[1]+(St[1]-J[1])*nt],{x:J[0],z:J[1],div:nt,divInfo:st}}}return{x:J[0],z:J[1],div:0,divInfo:null}}let[C,R,M,v]=t.bounds,b={x0:C-60,z0:R-60,cell:5};b.nx=Math.ceil((M+60-b.x0)/b.cell)+1,b.nz=Math.ceil((v+60-b.z0)/b.cell)+1,b.h=new Float32Array(b.nx*b.nz);let I=[];for(let O=0;O<=s;O+=2)I.push(i[O]);let T=0;for(let O of I)T+=O[1];T/=I.length;let E=(O,X)=>Math.sin(O*.011+1.3)*Math.cos(X*.009-.4)*2.2+Math.sin(O*.027+X*.019)*.9;for(let O=0;O<b.nz;O++)for(let X=0;X<b.nx;X++){let J=b.x0+X*b.cell,V=b.z0+O*b.cell,st=0,nt=0,St=1e9;for(let yt of I){let N=(yt[0]-J)**2+(yt[2]-V)**2;N<St&&(St=N);let ut=1/(N+400),rt=ut*ut;st+=rt,nt+=rt*yt[1]}let zt=Wi(30,160,Math.sqrt(St)),ht=nt/st*(1-zt*.4)+T*zt*.4+E(J,V)*zt;b.h[O*b.nx+X]=ht*jx}let F=t.features.filter(O=>O.closed&&["water","track","tennis","pitch"].includes(O.kind)&&O.pts.length>3);for(let O of F){let X=Bn(O.pts),J=[];for(let nt=Math.max(0,Math.floor((X[1]-12-b.z0)/b.cell));nt<=Math.min(b.nz-1,Math.ceil((X[3]+12-b.z0)/b.cell));nt++)for(let St=Math.max(0,Math.floor((X[0]-12-b.x0)/b.cell));St<=Math.min(b.nx-1,Math.ceil((X[2]+12-b.x0)/b.cell));St++){let zt=b.x0+St*b.cell,ht=b.z0+nt*b.cell,yt=Jr(O.pts,zt,ht);yt<12&&J.push([nt*b.nx+St,yt])}let V=0,st=0;for(let[nt,St]of J)St<0&&(V+=b.h[nt],st++);if(st){V/=st,O.kind==="water"&&(V=Math.min(...J.filter(nt=>nt[1]<0).map(nt=>b.h[nt[0]]))-.2),O._level=V;for(let[nt,St]of J){let zt=1-Wi(0,12,St);b.h[nt]=b.h[nt]*(1-zt)+V*zt-(O.kind==="water"?1.6*(1-Wi(-6,0,St)):0)}}}{for(let ht=0;ht<3;ht++){let yt=new Float32Array(b.h);for(let N=1;N<b.nz-1;N++)for(let ut=1;ut<b.nx-1;ut++){let rt=N*b.nx+ut;yt[rt]=(b.h[rt]*4+b.h[rt-1]+b.h[rt+1]+b.h[rt-b.nx]+b.h[rt+b.nx])/8}b.h.set(yt)}let O=new Float32Array(b.nx*b.nz).fill(1e9),X=new Float32Array(b.nx*b.nz),J=new Float32Array(b.nx*b.nz),V=(ht,yt)=>b.h[yt*b.nx+ht],st=(ht,yt)=>{let N=Math.round((ht-b.x0)/b.cell),ut=Math.round((yt-b.z0)/b.cell);return V(Math.max(0,Math.min(b.nx-1,N)),Math.max(0,Math.min(b.nz-1,ut)))},nt=[[0,h],[2540,2690],[u-80,n.lengthM+45]],St=[];for(let[ht,yt]of nt)for(let N=ht;N<=yt;N+=2){let ut=k(N);St.push([ut[0],ut[1],st(ut[0],ut[1])])}for(let ht=0;ht<4;ht++)for(let yt=1;yt<St.length-1;yt++)St[yt][2]=(St[yt-1][2]+St[yt][2]*2+St[yt+1][2])/4;let zt=Ve/2+7;for(let[ht,yt,N]of St){let ut=Math.floor((ht-zt-b.x0)/b.cell),rt=Math.ceil((ht+zt-b.x0)/b.cell),_t=Math.floor((yt-zt-b.z0)/b.cell),kt=Math.ceil((yt+zt-b.z0)/b.cell);for(let Z=Math.max(0,_t);Z<=Math.min(b.nz-1,kt);Z++)for(let Ft=Math.max(0,ut);Ft<=Math.min(b.nx-1,rt);Ft++){let H=Math.hypot(b.x0+Ft*b.cell-ht,b.z0+Z*b.cell-yt);if(H>zt)continue;let P=Z*b.nx+Ft,dt=(1-H/zt)**2;X[P]+=dt,J[P]+=dt*N,H<O[P]&&(O[P]=H)}}for(let ht=0;ht<O.length;ht++)if(O[ht]<zt&&X[ht]>0){let yt=1-Wi(Ve/2+.5,zt,O[ht]);b.h[ht]=b.h[ht]*(1-yt)+J[ht]/X[ht]*yt}b.pathSamples=St}let U=F.filter(O=>O.kind==="water").sort((O,X)=>X.pts.length-O.pts.length)[0];function B(O,X){let J=(O-b.x0)/b.cell,V=(X-b.z0)/b.cell,st=Math.max(0,Math.min(b.nx-2,Math.floor(J))),nt=Math.max(0,Math.min(b.nz-2,Math.floor(V))),St=Math.max(0,Math.min(1,J-st)),zt=Math.max(0,Math.min(1,V-nt)),ht=b.h[nt*b.nx+st],yt=b.h[nt*b.nx+st+1],N=b.h[(nt+1)*b.nx+st],ut=b.h[(nt+1)*b.nx+st+1];return St+zt<=1?ht+(yt-ht)*St+(N-ht)*zt:ut+(N-ut)*(1-St)+(yt-ut)*(1-zt)}let z=new $;function W(O,X,J={}){let V=w(O,X),st=Math.max(0,O-4),nt=st+8,St=w(st,X),zt=w(nt,X),ht=zt.x-St.x,yt=zt.z-St.z,N=Math.hypot(ht,yt)||1;return ht/=N,yt/=N,J.x=V.x,J.z=V.z,J.y=B(V.x,V.z)+ka,J.tx=ht,J.tz=yt,J.rx=-yt,J.rz=ht,J.slope=(B(zt.x,zt.z)-B(St.x,St.z))/Math.max(1,N),J.div=V.div,J.divInfo=V.divInfo,J}function it(O,X=25){let J=Math.max(0,O-X),V=k(J),st=k(J+2*X),nt=Math.hypot(st[0]-V[0],st[1]-V[1])||1;return z.set((st[0]-V[0])/nt,0,(st[1]-V[1])/nt).clone()}let D=[{from:0,to:h,lift:0},{from:2540,to:2690,lift:.02},{from:u-80,to:n.lengthM+45,lift:.035}],ft=n.lengthM;return{P:i,raw:o,rawExt:a,baseXZ:k,LAP1_END_DRAW:h,xzAt:w,sample:W,heading:it,heightAt:B,terrain:b,ribbons:D,finishM:ft,lake:U,flat:F,geoOf:O=>O>=c&&O<=u?f(O):O,diversions:S,setPlan:x,LAP1_END:l,MAP_FROM:c,MAP_TO:u}}function Bn(n){let t=[1e9,1e9,-1e9,-1e9];for(let e of n)t[0]=Math.min(t[0],e[0]),t[1]=Math.min(t[1],e[1]),t[2]=Math.max(t[2],e[0]),t[3]=Math.max(t[3],e[1]);return t}function rr(n,t,e){let i=!1;for(let s=0,r=n.length-1;s<n.length;r=s++){let[o,a]=n[s],[l,h]=n[r];a>e!=h>e&&t<(l-o)*(e-a)/(h-a)+o&&(i=!i)}return i}function Jr(n,t,e){let i=1e9;for(let s=0,r=n.length-1;s<n.length;r=s++){let[o,a]=n[r],[l,h]=n[s],p=l-o,g=h-a,d=p*p+g*g||1,c=Math.max(0,Math.min(1,((t-o)*p+(e-a)*g)/d));i=Math.min(i,Math.hypot(t-o-p*c,e-a-g*c))}return rr(n,t,e)?-i:i}function Qe(n,t=!1){let e=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},o={},a=n[0].morphTargetsRelative,l=new Oe,h=0;for(let p=0;p<n.length;++p){let g=n[p],d=0;if(e!==(g.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+p+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let c in g.attributes){if(!i.has(c))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+p+'. All geometries must have compatible attributes; make sure "'+c+'" attribute exists among all geometries, or in none of them.'),null;r[c]===void 0&&(r[c]=[]),r[c].push(g.attributes[c]),d++}if(d!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+p+". Make sure all geometries have the same number of attributes."),null;if(a!==g.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+p+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let c in g.morphAttributes){if(!s.has(c))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+p+".  .morphAttributes must be consistent throughout all geometries."),null;o[c]===void 0&&(o[c]=[]),o[c].push(g.morphAttributes[c])}if(t){let c;if(e)c=g.index.count;else if(g.attributes.position!==void 0)c=g.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+p+". The geometry must have either an index or a position attribute"),null;l.addGroup(h,c,p),h+=c}}if(e){let p=0,g=[];for(let d=0;d<n.length;++d){let c=n[d].index;for(let u=0;u<c.count;++u)g.push(c.getX(u)+p);p+=n[d].attributes.position.count}l.setIndex(g)}for(let p in r){let g=Tf(r[p]);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+p+" attribute."),null;l.setAttribute(p,g)}for(let p in o){let g=o[p][0].length;if(g===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[p]=[];for(let d=0;d<g;++d){let c=[];for(let _=0;_<o[p].length;++_)c.push(o[p][_][d]);let u=Tf(c);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+p+" morphAttribute."),null;l.morphAttributes[p].push(u)}}return l}function Tf(n){let t,e,i,s=-1,r=0;for(let h=0;h<n.length;++h){let p=n[h];if(t===void 0&&(t=p.array.constructor),t!==p.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=p.itemSize),e!==p.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=p.normalized),i!==p.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=p.gpuType),s!==p.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=p.count*e}let o=new t(r),a=new $e(o,e,i),l=0;for(let h=0;h<n.length;++h){let p=n[h];if(p.isInterleavedBufferAttribute){let g=l/e;for(let d=0,c=p.count;d<c;d++)for(let u=0;u<e;u++){let _=p.getComponent(d,u);a.setComponent(d+g,u,_)}}else o.set(p.array,l);l+=p.count*e}return s!==void 0&&(a.gpuType=s),a}var Kr=new $;function zn(n,t,e,i,s,r){let o=2*Math.PI*s/4,a=Math.max(r-2*s,0),l=Math.PI/4;Kr.copy(t),Kr[i]=0,Kr.normalize();let h=.5*o/(o+a),p=1-Kr.angleTo(n)/l;return Math.sign(Kr[e])===1?p*h:a/(o+a)+h+h*(1-p)}var be=class extends Te{constructor(t=1,e=1,i=1,s=2,r=.1){if(s=s*2+1,r=Math.min(t/2,e/2,i/2,r),super(1,1,1,s,s,s),s===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let a=new $,l=new $,h=new $(t,e,i).divideScalar(2).subScalar(r),p=this.attributes.position.array,g=this.attributes.normal.array,d=this.attributes.uv.array,c=p.length/6,u=new $,_=.5/s;for(let m=0,f=0;m<p.length;m+=3,f+=2)switch(a.fromArray(p,m),l.copy(a),l.x-=Math.sign(l.x)*_,l.y-=Math.sign(l.y)*_,l.z-=Math.sign(l.z)*_,l.normalize(),p[m+0]=h.x*Math.sign(a.x)+l.x*r,p[m+1]=h.y*Math.sign(a.y)+l.y*r,p[m+2]=h.z*Math.sign(a.z)+l.z*r,g[m+0]=l.x,g[m+1]=l.y,g[m+2]=l.z,Math.floor(m/c)){case 0:u.set(1,0,0),d[f+0]=zn(u,l,"z","y",r,i),d[f+1]=1-zn(u,l,"y","z",r,e);break;case 1:u.set(-1,0,0),d[f+0]=1-zn(u,l,"z","y",r,i),d[f+1]=1-zn(u,l,"y","z",r,e);break;case 2:u.set(0,1,0),d[f+0]=1-zn(u,l,"x","z",r,t),d[f+1]=zn(u,l,"z","x",r,i);break;case 3:u.set(0,-1,0),d[f+0]=1-zn(u,l,"x","z",r,t),d[f+1]=1-zn(u,l,"z","x",r,i);break;case 4:u.set(0,0,1),d[f+0]=1-zn(u,l,"x","y",r,t),d[f+1]=1-zn(u,l,"y","x",r,e);break;case 5:u.set(0,0,-1),d[f+0]=zn(u,l,"x","y",r,t),d[f+1]=1-zn(u,l,"y","x",r,e);break}}};var Xi=null;function Qx(){if(Xi)return Xi;let n=[118,172,228,255],t=new Uint8Array(n.length*4);return n.forEach((e,i)=>t.set([e,e,e,255],i*4)),Xi=new zr(t,n.length,1,kn),Xi.minFilter=Xi.magFilter=Sn,Xi.generateMipmaps=!1,Xi.needsUpdate=!0,Xi}var jr=new Map;function gt(n,t={}){let e=!t.map&&(typeof n=="number"||typeof n=="string")?`${n}|${JSON.stringify(t)}`:null;if(e&&!t.map&&jr.has(e))return jr.get(e);let i=new wa({color:new oe(n??16777215),gradientMap:Qx(),...t});return e&&!t.map&&jr.set(e,i),i}function Af(){for(let n of jr.values())n.dispose();jr.clear(),Qr.forEach(n=>n.dispose()),Qr.clear()}var dh={uRes:{value:new Bt(1920,1080)}},Qr=new Map;function tv(n=3,t=1709088,e=14){let i=`${n}|${t}|${e}`;if(Qr.has(i))return Qr.get(i);let s=new wn({uniforms:{...lh.clone(jt.fog),uRes:dh.uRes,uWidth:{value:n},uRef:{value:e},uColor:{value:new oe(t)}},vertexShader:`
      attribute vec3 onormal;
      uniform vec2 uRes; uniform float uWidth; uniform float uRef;
      #include <fog_pars_vertex>
      void main() {
        mat4 m = modelMatrix;
        #ifdef USE_INSTANCING
          m = modelMatrix * instanceMatrix;
        #endif
        vec4 wp = m * vec4(position, 1.0);
        vec3 wn = normalize(mat3(m) * onormal);
        vec4 clip = projectionMatrix * viewMatrix * wp;
        vec4 clipN = projectionMatrix * viewMatrix * vec4(wp.xyz + wn * 0.05, 1.0);
        vec2 dir = clipN.xy / clipN.w - clip.xy / clip.w;
        float l = length(dir);
        dir = l > 1e-6 ? dir / l : vec2(0.0);
        float k = clamp(uRef / max(clip.w, 0.1), 0.18, 1.0);
        float px = uWidth * k * (uRes.y / 1080.0);
        clip.xy += dir * px * 2.0 / uRes * clip.w;
        clip.z += 0.0004 * clip.w;
        gl_Position = clip;
        vec4 mvPosition = viewMatrix * wp;
        #include <fog_vertex>
      }`,fragmentShader:`
      uniform vec3 uColor;
      #include <fog_pars_fragment>
      void main() { gl_FragColor = vec4(uColor, 1.0);
        #include <fog_fragment>
      }`,side:fn,fog:!0});return Qr.set(i,s),s}function ph(n){if(n.getAttribute("onormal"))return n;n.getAttribute("normal")||n.computeVertexNormals();let t=n.getAttribute("position"),e=n.getAttribute("normal"),i=new Map,s=a=>`${Math.round(t.getX(a)*1e3)},${Math.round(t.getY(a)*1e3)},${Math.round(t.getZ(a)*1e3)}`,r=[];for(let a=0;a<t.count;a++){let l=s(a),h=i.get(l);h||(h=[0,0,0],i.set(l,h)),h[0]+=e.getX(a),h[1]+=e.getY(a),h[2]+=e.getZ(a),r.push(h)}let o=new Float32Array(t.count*3);for(let a=0;a<t.count;a++){let l=r[a],h=Math.hypot(l[0],l[1],l[2])||1;o[a*3]=l[0]/h,o[a*3+1]=l[1]/h,o[a*3+2]=l[2]/h}return n.setAttribute("onormal",new $e(o,3)),n}function jn(n,t=3,e,i){ph(n.geometry);let s=tv(t,e,i),r;return n.isInstancedMesh?(r=new nn(n.geometry,s,n.count),r.instanceMatrix=n.instanceMatrix,r.count=n.count,n.frustumCulled&&n.boundingSphere?(r.boundingSphere=n.boundingSphere,r.frustumCulled=!0):(r.frustumCulled=!1,n.frustumCulled=!1),n.userData.outline=r):(r=new De(n.geometry,s),r.frustumCulled=n.frustumCulled),r.castShadow=!1,r.receiveShadow=!1,r.userData.isOutline=!0,r.renderOrder=n.renderOrder,n.add(r),r}function ve(n,t,{cast:e=!0,receive:i=!0,ol:s=0,olColor:r,olRef:o}={}){let a=new De(n,t);return a.castShadow=e,a.receiveShadow=i,s&&jn(a,s,r,o),a}function an(n,t,e,{repeat:i=!1,srgb:s=!0,aniso:r=8}={}){let o=document.createElement("canvas");o.width=n,o.height=t;let a=o.getContext("2d");e(a,n,t);let l=new tr(o);return s&&(l.colorSpace=hn),i&&(l.wrapS=l.wrapT=us),l.anisotropy=r,l}var mh='"Lilita One", "Arial Black", "Arial Rounded MT Bold", Impact, sans-serif',se=Cn(20240817);function Cn(n){return()=>{n|=0,n=n+1831565813|0;let t=Math.imul(n^n>>>15,1|n);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function Qn(n,t,e,i){let s=an(n,t,e);return document.fonts&&document.fonts.load&&document.fonts.load('64px "Lilita One"').then(()=>{let r=s.image.getContext("2d");r.clearRect(0,0,n,t),e(r,n,t),s.needsUpdate=!0}).catch(()=>{}),i?.push(s),s}function ln(n,t,e,i,s,r="#fff",o="#1a1420",a=.16,l="center"){n.font=`${s}px ${mh}`,n.textAlign=l,n.textBaseline="middle",n.lineJoin="round",n.lineWidth=s*a,n.strokeStyle=o,n.strokeText(t,e,i),n.fillStyle=r,n.fillText(t,e,i)}function Cf(n,t,e){let{course:i,park:s,hasFunfair:r}=e,o=[],a=new de;n.add(a);let l=A=>(a.add(A),A),h=t.terrain,p=(h.nx-1)*h.cell,g=(h.nz-1)*h.cell,d=new Map,c=6,u=(A,G)=>`${Math.floor(A/c)},${Math.floor(G/c)}`,_=(A,G,K)=>{let at=u(A,G),vt=d.get(at);vt||d.set(at,vt=[]),vt.push([A,G,K])},m=(A,G,K)=>{let at=Math.floor(A/c),vt=Math.floor(G/c),tt=Math.ceil((K+30)/c);for(let Tt=-tt;Tt<=tt;Tt++)for(let Wt=-tt;Wt<=tt;Wt++){let Ut=d.get(`${at+Tt},${vt+Wt}`);if(Ut){for(let[j,Mt,Et]of Ut)if((j-A)**2+(Mt-G)**2<(Et+K)**2)return!1}}return!0},f=[];for(let A of t.ribbons)for(let G=A.from;G<=A.to;G+=3){let K=t.baseXZ(G);f.push(K),_(K[0],K[1],Ve/2+1.5)}for(let A in t.diversions)for(let G of t.diversions[A])for(let K of G.path)_(K[0],K[1],4);let S=s.features.filter(A=>A.kind==="park").sort((A,G)=>G.pts.length-A.pts.length)[0].pts,x=(A,G)=>rr(S,A,G),k=s.features.filter(A=>A.closed&&["water","track","tennis","pitch","playground","building"].includes(A.kind)).map(A=>[Bn(A.pts),A]),w=(A,G,K=2)=>k.some(([at,vt])=>A>at[0]-K&&A<at[2]+K&&G>at[1]-K&&G<at[3]+K&&Jr(vt.pts,A,G)<K),C=1.7,R=[];function M(A,G){R.push({im:A,list:G})}let v=new we().makeScale(0,0,0);function b(A){for(let{im:G,list:K}of R){let at=!1;K.forEach((vt,tt)=>{!vt.cleared&&A(vt.x,vt.z)&&(vt.cleared=!0,G.setMatrixAt(tt,v),at=!0)}),at&&(G.instanceMatrix.needsUpdate=!0)}}function I(){let A=T.image.getContext("2d");E(A,T.image.width,T.image.height),T.needsUpdate=!0}let T=an(Math.round(p*C),Math.round(g*C),(A,G,K)=>E(A,G,K),{aniso:8});o.push(T);function E(A,G,K){let at=j=>(j-h.x0)*C,vt=j=>(j-h.z0)*C,tt=(j,Mt=!0)=>{A.beginPath(),j.forEach((Et,Zt)=>Zt?A.lineTo(at(Et[0]),vt(Et[1])):A.moveTo(at(Et[0]),vt(Et[1]))),Mt&&A.closePath()};A.fillStyle="#d8d2c2",A.fillRect(0,0,G,K);for(let j=0;j<9e3;j++)A.fillStyle=se()<.5?"#cfc8b6":"#e2dccd",A.fillRect(se()*G,se()*K,3,3);tt(S),A.fillStyle="#66cf45",A.fill(),A.save(),tt(S),A.clip(),A.translate(G/2,K/2),A.rotate(-.62);for(let j=-2e3;j<2e3;j+=2*14*C)A.fillStyle="rgba(255,255,140,0.10)",A.fillRect(j,-2500,14*C,5e3);A.setTransform(1,0,0,1,0,0);for(let j=0;j<26e3;j++){let Mt=se()*G,Et=se()*K;A.fillStyle=se()<.6?"rgba(40,140,40,0.35)":"rgba(190,255,120,0.35)",A.fillRect(Mt,Et,2+se()*2,2+se()*3)}A.restore();let Tt=(j,Mt,Et)=>{for(let Zt of s.features)Zt.kind===j&&Zt.closed&&(tt(Zt.pts),A.fillStyle=Mt,A.fill(),Et&&(A.strokeStyle=Et,A.lineWidth=2,A.stroke()))};Tt("grass","#72d64e"),Tt("garden","#86dc5c"),Tt("wood","#3f9e3a"),Tt("scrub","#5cb544");for(let j of s.features)if(j.kind==="pitch"&&j.closed){A.save(),tt(j.pts),A.clip(),A.fillStyle="#5ccc3f",A.fill();let Mt=Bn(j.pts);for(let Et=Mt[0];Et<Mt[2];Et+=8)A.fillStyle="rgba(255,255,255,0.10)",A.fillRect(at(Et),vt(Mt[1]),4*C,(Mt[3]-Mt[1])*C);A.restore(),tt(j.pts),A.strokeStyle="#ffffff",A.lineWidth=2.2,A.stroke()}for(let j of s.features)if(j.kind==="playground"&&j.closed){tt(j.pts),A.fillStyle="#7fcfb4",A.fill(),A.save(),tt(j.pts),A.clip();let Mt=Bn(j.pts);for(let Et=0;Et<260;Et++)A.fillStyle=se()<.5?"rgba(20,80,70,0.18)":"rgba(255,255,255,0.22)",A.fillRect(at(Mt[0]+se()*(Mt[2]-Mt[0])),vt(Mt[1]+se()*(Mt[3]-Mt[1])),3,3);for(let Et=0;Et<(Mt[2]-Mt[0])*(Mt[3]-Mt[1])/400;Et++)A.beginPath(),A.arc(at(Mt[0]+se()*(Mt[2]-Mt[0])),vt(Mt[1]+se()*(Mt[3]-Mt[1])),1.6*C,0,7),A.fillStyle=["#ffd93b","#57c7ff","#ff6f91"][Et%3],A.fill();A.restore(),tt(j.pts),A.strokeStyle="#ffffff",A.lineWidth=.8*C,A.stroke()}let Wt=j=>{let Mt=0;for(let Et=0,Zt=j.pts.length-1;Et<j.pts.length;Zt=Et++)Mt+=(j.pts[Zt][0]+j.pts[Et][0])*(j.pts[Zt][1]-j.pts[Et][1]);return Math.abs(Mt/2)};for(let j of s.features)if(j.kind==="track"&&j.closed&&Wt(j)>5e3){A.save(),tt(j.pts),A.clip(),A.fillStyle="#e2523a",A.fill();let Mt=9*C,Et=Da(j.pts),Zt=Bn(j.pts),le=Zt[2]-Zt[0],ae=Zt[3]-Zt[1],_e=Re=>j.pts.map(et=>[Et[0]+(et[0]-Et[0])*Re,Et[1]+(et[1]-Et[1])*Re]),Ee=1-2*9/Math.min(le,ae);for(let Re=1;Re<=5;Re++)tt(_e(1-(1-Ee)*(Re/6))),A.strokeStyle="rgba(255,255,255,0.9)",A.lineWidth=1.6,A.stroke();tt(_e(Ee)),A.fillStyle="#5ccc3f",A.fill(),A.strokeStyle="#ffffff",A.lineWidth=3,A.stroke(),A.restore(),tt(j.pts),A.strokeStyle="#ffffff",A.lineWidth=3,A.stroke()}for(let j of s.features)if(j.kind==="track"&&j.closed&&Wt(j)<=5e3){let Mt=j.tags?.surface==="sand";if(!j.tags?.surface)continue;tt(j.pts),A.fillStyle=Mt?"#f2d58f":"#e2523a",A.fill(),A.strokeStyle="#ffffff",A.lineWidth=1.5,A.stroke()}for(let j of s.features)if(j.kind==="tennis"&&j.closed){tt(j.pts),A.fillStyle="#3f9fd1",A.fill(),A.strokeStyle="#ffffff",A.lineWidth=2.5,A.stroke();let Mt=Da(j.pts),Et=Bn(j.pts);A.save(),tt(j.pts),A.clip(),A.strokeStyle="rgba(255,255,255,0.9)",A.lineWidth=1.5,A.beginPath(),A.moveTo(at(Mt[0]),vt(Et[1])),A.lineTo(at(Mt[0]),vt(Et[3])),A.stroke(),A.restore()}for(let j of s.features)j.kind==="water"&&j.closed&&(tt(j.pts),A.strokeStyle="#f4efe0",A.lineWidth=3.4*C,A.lineJoin="round",A.stroke(),A.fillStyle="#2f8fe0",A.fill());for(let j of s.features)j.kind==="path"&&(tt(j.pts,!1),A.lineCap="round",A.lineJoin="round",A.strokeStyle="#c9ad78",A.lineWidth=3.6*C,A.stroke());for(let j of s.features)j.kind==="path"&&(tt(j.pts,!1),A.strokeStyle="#ecd8a6",A.lineWidth=2.6*C,A.stroke());let Ut=j=>({primary:15,secondary:12,tertiary:11,residential:8,unclassified:8,service:5,trunk:16})[j.tags?.highway]||7;for(let j of s.features)j.kind==="road"&&(tt(j.pts,j.closed),A.lineCap="round",A.lineJoin="round",A.strokeStyle="#ece6d6",A.lineWidth=(Ut(j)+4)*C,A.stroke());for(let j of s.features)j.kind==="road"&&(tt(j.pts,j.closed),A.strokeStyle="#7f8597",A.lineWidth=Ut(j)*C,A.stroke());for(let j of s.features)j.kind==="road"&&Ut(j)>=11&&(tt(j.pts,!1),A.setLineDash([5*C,5*C]),A.strokeStyle="#f4f1e6",A.lineWidth=.5*C,A.stroke(),A.setLineDash([]));for(let j of s.features)j.kind==="rail"&&(tt(j.pts,!1),A.strokeStyle="#9b8f84",A.lineWidth=5*C,A.stroke());for(let j of s.features)j.kind==="rail"&&(tt(j.pts,!1),A.setLineDash([1,2]),A.strokeStyle="#5b4f46",A.lineWidth=3*C,A.stroke(),A.setLineDash([]),tt(j.pts,!1),A.strokeStyle="#c9ccd6",A.lineWidth=.8,A.stroke());for(let j of s.features)j.kind==="building"&&j.closed&&(tt(j.pts),A.fillStyle="#9c968a",A.fill());for(let j in t.diversions)for(let Mt of t.diversions[j])A.beginPath(),Mt.path.forEach((Et,Zt)=>Zt?A.lineTo(at(Et[0]),vt(Et[1])):A.moveTo(at(Et[0]),vt(Et[1]))),A.lineCap="round",A.lineJoin="round",A.strokeStyle="rgba(196,160,96,0.85)",A.lineWidth=4*C,A.stroke(),A.setLineDash([2*C,3*C]),A.strokeStyle="rgba(255,240,200,0.8)",A.lineWidth=.6*C,A.stroke(),A.setLineDash([])}{let A=h.nx*h.nz,G=new Float32Array(A*3),K=new Float32Array(A*2);for(let Et=0;Et<h.nz;Et++)for(let Zt=0;Zt<h.nx;Zt++){let le=Et*h.nx+Zt;G[le*3]=h.x0+Zt*h.cell,G[le*3+1]=h.h[le],G[le*3+2]=h.z0+Et*h.cell,K[le*2]=Zt/(h.nx-1),K[le*2+1]=1-Et/(h.nz-1)}let at=new Uint32Array((h.nx-1)*(h.nz-1)*6),vt=0;for(let Et=0;Et<h.nz-1;Et++)for(let Zt=0;Zt<h.nx-1;Zt++){let le=Et*h.nx+Zt,ae=le+1,_e=le+h.nx,Ee=_e+1;at[vt++]=le,at[vt++]=_e,at[vt++]=ae,at[vt++]=ae,at[vt++]=_e,at[vt++]=Ee}let tt=new Oe;tt.setAttribute("position",new $e(G,3)),tt.setAttribute("uv",new $e(K,2)),tt.setIndex(new $e(at,1)),tt.computeVertexNormals();let Tt=gt(16777215,{map:T}),Wt=an(256,256,(Et,Zt,le)=>{Et.fillStyle="#808080",Et.fillRect(0,0,Zt,le);for(let ae=0;ae<1800;ae++){let _e=100+Math.floor(se()*70);Et.fillStyle=`rgb(${_e},${_e},${_e})`;let Ee=se()*Zt,Re=se()*le;Et.fillRect(Ee,Re,2,3+se()*5)}for(let ae=0;ae<500;ae++)Et.fillStyle="rgba(255,255,255,0.18)",Et.fillRect(se()*Zt,se()*le,2,2)},{repeat:!0,srgb:!1});o.push(Wt),Tt.onBeforeCompile=Et=>{Et.uniforms.uDetail={value:Wt},Et.vertexShader=Et.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vWPos;`).replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
vWPos = (modelMatrix * vec4(transformed, 1.0)).xyz;`),Et.fragmentShader=Et.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vWPos; uniform sampler2D uDetail;`).replace("#include <map_fragment>",`#include <map_fragment>
          float dd = length(vWPos - cameraPosition);
          float d1 = texture2D(uDetail, vWPos.xz / 3.0).r, d2 = texture2D(uDetail, vWPos.xz / 11.0).r;
          float fade = 1.0 - smoothstep(25.0, 140.0, dd);
          diffuseColor.rgb *= mix(1.0, 0.8 + 0.4 * mix(d2, d1, fade), 0.55);`)},Tt.customProgramCacheKey=()=>"terrain-detail";let Ut=ve(tt,Tt,{cast:!1});Ut.name="terrain",l(Ut);let j=new De(new er(700,5200,48,1),gt(13227680));j.rotation.x=-Math.PI/2,j.position.set(h.x0+p/2,-2,h.z0+g/2),j.receiveShadow=!1,l(j);let Mt=new De(new dn(p+1800,g+1800),gt(13686197));Mt.rotation.x=-Math.PI/2,Mt.position.set(h.x0+p/2,-3,h.z0+g/2),l(Mt)}let F=an(256,256,(A,G,K)=>{A.fillStyle="#7f8fb0",A.fillRect(0,0,G,K);for(let at=0;at<1600;at++)A.fillStyle=se()<.5?"rgba(255,255,255,0.07)":"rgba(30,40,70,0.08)",A.fillRect(se()*G,se()*K,2,2);A.fillStyle="#6b7a9b",A.fillRect(0,0,G*.035,K),A.fillRect(G*.965,0,G*.035,K),A.fillStyle="#ffffff",A.fillRect(G*.06,0,G*.045,K),A.fillRect(G*.895,0,G*.045,K),A.fillStyle="rgba(255,255,255,0.35)",A.fillRect(G*.49,0,G*.02,K*.5)},{repeat:!0});o.push(F);{let A=[];for(let tt of t.ribbons)A.push(U(tt));let G=Qe(A),K=ve(G,gt(16777215,{map:F}),{cast:!1});K.name="path",l(K);let at=Qe(t.ribbons.map(tt=>U(tt,!0))),vt=ve(at,gt(5924226),{cast:!1});l(vt)}function U(A,G=!1){let K=[];for(let j=A.from;j<=A.to+.01;j+=2)K.push(t.baseXZ(j));let at=[],vt=[],tt=[],Tt=0;for(let j=0;j<K.length;j++){let Mt=K[Math.max(0,j-1)],Et=K[Math.min(K.length-1,j+1)],Zt=Et[0]-Mt[0],le=Et[1]-Mt[1],ae=Math.hypot(Zt,le)||1;Zt/=ae,le/=ae;let _e=-le,Ee=Zt,Re=Ve/2,et=[K[j][0]-_e*Re,K[j][1]-Ee*Re],mt=[K[j][0]+_e*Re,K[j][1]+Ee*Re],Yt=t.heightAt(K[j][0],K[j][1]),Vt=Math.max(t.heightAt(et[0],et[1]),Yt-.05)+ka+A.lift,L=Math.max(t.heightAt(mt[0],mt[1]),Yt-.05)+ka+A.lift;G?(at.push(et[0]-_e*.15,Vt-.45,et[1]-Ee*.15,et[0],Vt,et[1],mt[0],L,mt[1],mt[0]+_e*.15,L-.45,mt[1]+Ee*.15),vt.push(0,0,0,1,0,1,0,0)):(at.push(et[0],Vt,et[1],mt[0],L,mt[1]),vt.push(0,Tt/8,1,Tt/8)),j&&(Tt+=2)}let Wt=G?4:2;for(let j=0;j<K.length-1;j++){let Mt=j*Wt,Et=(j+1)*Wt;G?(tt.push(Mt,Et,Mt+1,Mt+1,Et,Et+1),tt.push(Mt+2,Et+2,Mt+3,Mt+3,Et+2,Et+3)):tt.push(Mt,Et,Mt+1,Mt+1,Et,Et+1)}let Ut=new Oe;if(Ut.setAttribute("position",new me(at,3)),Ut.setAttribute("uv",new me(vt,2)),Ut.setIndex(tt),Ut.computeVertexNormals(),Ut.getAttribute("normal").getY(0)<0&&!G){let j=Ut.index.array;for(let Mt=0;Mt<j.length;Mt+=3){let Et=j[Mt+1];j[Mt+1]=j[Mt+2],j[Mt+2]=Et}Ut.computeVertexNormals()}return Ut}let B={uTime:{value:0}},z=s.features.filter(A=>A.kind==="water"&&A.closed);for(let A of z){let G=(A._level??Math.min(...A.pts.map(Tt=>t.heightAt(Tt[0],Tt[1]))))+.05,K=new ps(A.pts.map(Tt=>new Bt(Tt[0],-Tt[1]))),at=new ba(K,4);at.rotateX(-Math.PI/2),at.translate(0,G,0);let vt=new wn({uniforms:{...B,...jt.fog},vertexShader:`varying vec3 vW;
${ge.fog_pars_vertex}
        void main(){ vec4 w = modelMatrix*vec4(position,1.); vW=w.xyz; vec4 mvPosition = viewMatrix*w; gl_Position=projectionMatrix*mvPosition;
${ge.fog_vertex}
}`,fragmentShader:`uniform float uTime; varying vec3 vW;
${ge.fog_pars_fragment}
        void main(){
          vec2 p = vW.xz*0.09;
          float w1 = sin(p.x*3.1 + uTime*1.3 + sin(p.y*2.3+uTime*0.7)*1.7);
          float w2 = sin(p.y*2.7 - uTime*1.1 + sin(p.x*1.9-uTime*0.5)*1.9);
          float r = smoothstep(0.86,0.9, w1*w2);
          vec3 c = mix(vec3(0.16,0.55,0.93), vec3(0.24,0.70,1.0), smoothstep(-0.6,0.8,w1*0.5+w2*0.5));
          c = mix(c, vec3(0.92,0.98,1.0), r);
          gl_FragColor = vec4(c,1.);
          #include <colorspace_fragment>

${ge.fog_fragment}
        }`,fog:!0}),tt=new De(at,vt);tt.name="water",l(tt),o.push(vt),A._waterLevel=G}let W=[];if(t.lake){let A=t.lake,G=Bn(A.pts),K=[16767291,16735581,5752831,16777215,16748497,8257418],at=new be(2,.7,3.6,2,.32),vt=new be(1.2,.5,.8,2,.2);for(let tt=0,Tt=0;tt<9&&Tt<300;Tt++){let Wt=G[0]+se()*(G[2]-G[0]),Ut=G[1]+se()*(G[3]-G[1]);if(Jr(A.pts,Wt,Ut)>-7)continue;let j=new de,Mt=ve(at,gt(K[tt%K.length]),{ol:2.5});j.add(Mt);let Et=ve(vt,gt(16777215),{ol:2});Et.position.y=.45,j.add(Et);let Zt=ve(new ye(.42,12,8),gt(K[(tt+2)%K.length]),{ol:2});Zt.position.set(0,.9,.7),j.add(Zt),j.position.set(Wt,(A._waterLevel??0)+.1,Ut),j.rotation.y=se()*6.28,l(j),W.push({g:j,ph:se()*6.28,x:Wt,z:Ut,a:j.rotation.y}),tt++}}{let A=an(128,128,(tt,Tt,Wt)=>{tt.fillStyle="#ffffff",tt.fillRect(0,0,Tt,Wt),tt.fillStyle="#ffffff",tt.fillRect(0,0,14,14),tt.fillStyle="#3b4a6b",tt.fillRect(34,30,60,58),tt.fillStyle="#9ec9ff",tt.fillRect(38,34,52,50),tt.fillStyle="#ffffff",tt.fillRect(62,34,4,50),tt.fillRect(38,56,52,4),tt.fillStyle="rgba(0,0,0,0.08)",tt.fillRect(0,118,Tt,10)},{repeat:!0});o.push(A);let G={generateTopUV:(tt,Tt,Wt,Ut,j)=>[new Bt(.02,.98),new Bt(.02,.98),new Bt(.02,.98)],generateSideWallUV:(tt,Tt,Wt,Ut,j,Mt)=>{let Et=Tt[Wt*3],Zt=Tt[Wt*3+1],le=Tt[Wt*3+2],ae=Tt[Ut*3],_e=Tt[Ut*3+1],Ee=Tt[Ut*3+2],Re=Tt[j*3+2],et=Tt[Mt*3+2],mt=(Math.abs(Zt-_e)<Math.abs(Et-ae)?Et:Zt)/4.2,Yt=(Math.abs(Zt-_e)<Math.abs(Et-ae)?ae:_e)/4.2;return[new Bt(mt,le/3.2),new Bt(Yt,Ee/3.2),new Bt(Yt,Re/3.2),new Bt(mt,et/3.2)]}},K=["#e98a64","#f3d9a6","#d86f5a","#f6efe0","#a8c8e6","#f2b5a0","#c9b6e4","#f4c46a"],at=["#5d6488","#7a5d6c","#4f6b78"],vt=[];for(let tt of s.features){if(tt.kind!=="building"||!tt.closed||tt.pts.length<4)continue;let Tt=Da(tt.pts);if(x(Tt[0],Tt[1]))continue;let Wt=parseFloat(tt.tags?.["building:levels"])||(se()<.7?3:4),Ut=Math.min(30,Wt*3.1),j=new ps(tt.pts.map(Re=>new Bt(Re[0],-Re[1]))),Mt;try{Mt=new Ma(j,{depth:Ut,bevelEnabled:!1,UVGenerator:G})}catch{continue}Mt.rotateX(-Math.PI/2);let Et=Math.min(...tt.pts.map(Re=>t.heightAt(Re[0],Re[1])))-1.5;Mt.translate(0,Et,0);let Zt=Mt.getAttribute("normal"),le=Zt.count,ae=new Float32Array(le*3),_e=new oe(K[Math.floor(se()*K.length)]).convertSRGBToLinear(),Ee=new oe(at[Math.floor(se()*at.length)]).convertSRGBToLinear();for(let Re=0;Re<le;Re++){let et=Zt.getY(Re)>.5?Ee:_e;ae[Re*3]=et.r,ae[Re*3+1]=et.g,ae[Re*3+2]=et.b}Mt.setAttribute("color",new $e(ae,3)),vt.push(Mt.index?Mt.toNonIndexed():Mt)}if(vt.length){let tt=Qe(vt),Tt=ve(tt,gt(16777215,{map:A,vertexColors:!0}),{cast:!0,ol:1.6,olRef:60});Tt.name="buildings",l(Tt)}}let it=t.sample(t.finishM),D=t.sample(0),ft={start:D,finish:it},Lt=new de;l(Lt);function O(A,G,K,at){let vt=new de,tt=Ve/2+1.4,Tt=.85,Wt=an(256,32,(le,ae,_e)=>{for(let Ee=0;Ee<16;Ee++)le.fillStyle=Ee%2?K:at,le.fillRect(Ee*ae/16,0,ae/16+1,_e)},{repeat:!1});o.push(Wt);let Ut=new Je(tt,Tt,14,40,Math.PI);Ut.scale(1,1.25,1);let j=ve(Ut,gt(16777215,{map:Wt}),{ol:3.5});vt.add(j);let Mt=new ue(Tt*1.4,Tt*1.6,.8,16);for(let le of[-1,1]){let ae=ve(Mt,gt(at),{ol:3});ae.position.set(le*tt,.3,0),vt.add(ae)}let Et=Qn(1024,256,(le,ae,_e)=>{le.fillStyle="#1b1b3a",Ye(le,0,0,ae,_e,60),le.fill(),le.fillStyle=K,Ye(le,12,12,ae-24,_e-24,50),le.fill(),ln(le,"MARKRUN",ae/2,_e*.42,150,"#ffffff","#1b1b3a",.18),ln(le,G,ae/2,_e*.83,56,"#ffe14d","#1b1b3a",.2)},o),Zt=ve(new be(tt*1.55,tt*.4,.7,3,.25),[gt(at),gt(at),gt(at),gt(at),gt(16777215,{map:Et}),gt(16777215,{map:Et})],{ol:3.5});return Zt.position.y=tt*1.25+Tt*1.25+tt*.2-.15,vt.add(Zt),vt.position.set(A.x,A.y-.1,A.z),vt.rotation.y=Math.atan2(-A.rz,A.rx),Lt.add(vt),vt}ft.finishArch=O(it,"FINISH","#ff3d8b","#ffd23f"),O(D,"START","#2e9bff","#ffd23f");let X=an(256,64,(A,G,K)=>{let vt=G/16;for(let tt=0;tt<16;tt++)for(let Tt=0;Tt<4;Tt++)A.fillStyle=(tt+Tt)%2?"#111":"#fff",A.fillRect(tt*vt,Tt*vt,vt,vt)});o.push(X);function J(A,G,K,at=.03){let vt=new dn(Ve,K);vt.rotateX(-Math.PI/2);let tt=new De(vt,gt(16777215,{map:G,transparent:!0,alphaTest:.3,polygonOffset:!0,polygonOffsetFactor:-2}));return tt.position.set(A.x,A.y+at,A.z),tt.rotation.y=Math.atan2(-A.rz,A.rx),tt.receiveShadow=!0,l(tt),tt}J(it,X,2.2,.05);let V=Qn(512,128,(A,G,K)=>{A.fillStyle="#ffffff",A.fillRect(0,0,G,22),ln(A,"START",G/2,80,72,"#ffffff","rgba(0,0,0,0)",0)},o);{let A=t.sample(2.5);J(A,V,3,.05).rotation.y+=Math.PI}let st=new Fe;function nt(A,G,K,{ol:at=0,olRef:vt,cast:tt=!0,colors:Tt,chunk:Wt=0}={}){if(!K.length)return null;if(Wt){let j=new Map;K.forEach((Et,Zt)=>{let le=`${Math.floor(Et.x/Wt)},${Math.floor(Et.z/Wt)}`,ae=j.get(le);ae||j.set(le,ae={l:[],c:[]}),ae.l.push(Et),Tt&&ae.c.push(Tt[Zt])});let Mt=null;for(let{l:Et,c:Zt}of j.values()){let le=nt(A,G,Et,{ol:at,olRef:vt,cast:tt,colors:Tt?Zt:null});Mt=Mt||le}return Mt}let Ut=new nn(A,G,K.length);return K.forEach((j,Mt)=>{st.position.set(j.x,j.y,j.z),st.rotation.set(j.rx||0,j.ry||0,j.rz||0),st.scale.set(j.sx??j.s??1,j.sy??j.s??1,j.sz??j.s??1),st.updateMatrix(),Ut.setMatrixAt(Mt,st.matrix),Tt&&Ut.setColorAt(Mt,new oe(Tt[Mt]))}),Ut.castShadow=tt,Ut.receiveShadow=!0,Ut.computeBoundingSphere(),at&&jn(Ut,at,void 0,vt),M(Ut,K),l(Ut),Ut}let St=[];{let A=K=>{let at=t.rawExt(K-12),vt=t.rawExt(K),tt=t.rawExt(K+12),Tt=Math.atan2(vt[1]-at[1],vt[0]-at[0]),Ut=Math.atan2(tt[1]-vt[1],tt[0]-vt[0])-Tt;for(;Ut>Math.PI;)Ut-=2*Math.PI;for(;Ut<-Math.PI;)Ut+=2*Math.PI;return Ut},G=[[20,t.LAP1_END_DRAW-20],[t.MAP_TO-40,t.finishM-10]];for(let[K,at]of G){let vt=null;for(let tt=K;tt<at;tt+=4){let Tt=A(tt);Math.abs(Tt)>.45?(!vt||Math.abs(Tt)>Math.abs(vt.d))&&(vt={m:tt,d:Tt}):vt&&(St.some(Wt=>Math.abs(Wt.m-vt.m)<50)||St.push(vt),vt=null)}}}let zt=[],ht=[],yt=[],N=[];for(let A of St){let G=A.d>0;for(let K=-2;K<=2;K++){let at=t.sample(A.m+K*5),vt=G?-1:1,tt=Ve/2+1.6,Tt=at.x+at.rx*tt*vt,Wt=at.z+at.rz*tt*vt;m(Tt,Wt,.3),(G?ht:zt).push({x:Tt,y:t.heightAt(Tt,Wt),z:Wt,ry:Math.atan2(-at.tz,at.tx)+(vt>0?Math.PI:0)})}for(let K=-3;K<=3;K++){let at=t.sample(A.m+K*3.5),vt=G?1:-1,tt=Ve/2+.7;yt.push({x:at.x+at.rx*tt*vt,y:t.heightAt(at.x+at.rx*tt*vt,at.z+at.rz*tt*vt),z:at.z+at.rz*tt*vt,ry:se()*6});for(let Tt=0;Tt<2;Tt++){let Wt=t.sample(A.m+K*3.5+Tt*1.75),Ut=Ve/2+.1;N.push({x:Wt.x+Wt.rx*Ut*vt,y:Wt.y-.05,z:Wt.z+Wt.rz*Ut*vt,ry:Math.atan2(Wt.tx,Wt.tz),red:(K*2+Tt)%2===0})}}}ft.corners=St;{let A=an(256,96,(Ut,j,Mt)=>{Ut.fillStyle="#2f6fe0",Ut.fillRect(0,0,j,Mt),Ut.fillStyle="#ffffff";for(let Et=0;Et<4;Et++){let Zt=18+Et*60;Ut.beginPath(),Ut.moveTo(Zt,12),Ut.lineTo(Zt+26,12),Ut.lineTo(Zt+54,Mt/2),Ut.lineTo(Zt+26,Mt-12),Ut.lineTo(Zt,Mt-12),Ut.lineTo(Zt+28,Mt/2),Ut.closePath(),Ut.fill()}Ut.strokeStyle="#1b3f8f",Ut.lineWidth=8,Ut.strokeRect(0,0,j,Mt)}),G=A.clone();G.repeat.x=-1,G.offset.x=1,G.wrapS=us,G.needsUpdate=!0,o.push(A,G);let at=(Ut=>{let j=new Te(3.2,1.2,.12);j.rotateX(-.32),j.translate(0,.62,.22);let Mt=new Te(3.2,1.2,.12);return Mt.rotateX(.32),Mt.translate(0,.62,-.22),Mt.rotateY(Math.PI),Qe([j,Mt])})();ph(at),nt(at,gt(16777215,{map:A}),ht,{ol:2.5}),nt(at,gt(16777215,{map:G}),zt,{ol:2.5});let vt=an(16,64,(Ut,j,Mt)=>{for(let Et=0;Et<4;Et++)Ut.fillStyle=Et%2?"#ffffff":"#ff6a2b",Ut.fillRect(0,Et*Mt/4,j,Mt/4)});o.push(vt);let tt=new ue(.06,.32,.9,12,1);tt.translate(0,.5,0);let Tt=new Te(.8,.08,.8);Tt.translate(0,.04,0),nt(tt,gt(16777215,{map:vt}),yt,{ol:2}),nt(Tt,gt(16738859),yt,{ol:1.5});let Wt=new Te(.5,.22,1.75);Wt.translate(0,.11,0),nt(Wt,gt(16777215),N.map(Ut=>Ut),{ol:1.5,colors:N.map(Ut=>Ut.red?15216959:16777215)})}let ut=new de;l(ut);function rt(A,G,K,at,vt,{postH:tt=1.6,face:Tt=0,scale:Wt=1}={}){let Ut=Qn(512,Math.round(512*at/K),vt,o),j=new de,Mt=ve(new be(K,at,.25,2,.08),[gt(5978660),gt(5978660),gt(5978660),gt(5978660),gt(16777215,{map:Ut}),gt(16777215,{map:Ut})],{ol:3});Mt.position.y=tt+at/2,j.add(Mt);let Et=new Te(.25,tt+at*.5,.25);for(let _e of[-1,1]){let Ee=ve(Et,gt(9067062),{ol:2});Ee.position.set(_e*K*.35,(tt+at*.5)/2,-.1),j.add(Ee)}let Zt=Ve/2+2.2+K*.15,le=A.x+A.rx*Zt*G,ae=A.z+A.rz*Zt*G;return j.position.set(le,t.heightAt(le,ae)-.1,ae),j.rotation.y=Math.atan2(-A.tx,-A.tz)+G*.5+Tt,j.scale.setScalar(Wt),ut.add(j),j}let _t=1720,kt=t.sample(_t-10);ft.hillSign=rt(kt,1,6,3.2,(A,G,K)=>{A.fillStyle="#ffd23f",Ye(A,0,0,G,K,40),A.fill(),A.lineWidth=16,A.strokeStyle="#1b1b3a",Ye(A,8,8,G-16,K-16,34),A.stroke(),A.fillStyle="#3aa845",A.beginPath(),A.moveTo(40,K-40),A.lineTo(150,70),A.lineTo(260,K-40),A.closePath(),A.fill(),A.strokeStyle="#1b1b3a",A.lineWidth=8,A.stroke(),A.fillStyle="#fff",A.beginPath(),A.moveTo(118,118),A.lineTo(150,70),A.lineTo(182,118),A.closePath(),A.fill(),ln(A,"THE",380,K*.3,72,"#ffffff","#1b1b3a",.2),ln(A,"HILL",370,K*.66,120,"#ff3d8b","#1b1b3a",.16)},{postH:1.4}),ft.hillM=_t;for(let A of[1,2,3,4]){let G=A*1e3,K=t.sample(t.geoOf(G));rt(K,-1,1.6,1.3,(at,vt,tt)=>{at.fillStyle="#ffffff",Ye(at,0,0,vt,tt,50),at.fill(),at.fillStyle="#ff3d8b",Ye(at,20,20,vt-40,tt-40,36),at.fill(),ln(at,`${A}K`,vt/2,tt/2+8,230,"#ffffff","#1b1b3a",.14)},{postH:.7})}let Z=t.sample(2475);ft.lapBoard=rt(Z,1,4.4,2.6,(A,G,K)=>{A.fillStyle="#1b1b3a",Ye(A,0,0,G,K,40),A.fill(),A.fillStyle="#2e9bff",Ye(A,14,14,G-28,K-28,30),A.fill(),ln(A,"LAP",G/2,K*.28,90,"#ffffff","#1b1b3a",.18),ln(A,"2 OF 2",G/2,K*.66,150,"#ffe14d","#1b1b3a",.14)},{postH:1.2}),ft.lapM=2500;let Ft=[],H=[],P=[],dt=[];function At(A,G,K,at=3.2,vt=12){let tt=null;for(let Tt=A;Tt<=G;Tt+=vt){let Wt=t.sample(Tt),Ut=Ve/2+1,j=Wt.x+Wt.rx*Ut*K,Mt=Wt.z+Wt.rz*Ut*K,Et=t.heightAt(j,Mt);H.push({x:j,y:Et,z:Mt});let Zt=new $(j,Et+at,Mt);if(tt){let le=[];for(let ae=0;ae<=12;ae++){let _e=ae/12,Ee=tt.clone().lerp(Zt,_e);Ee.y-=Math.sin(_e*Math.PI)*.6,le.push(Ee)}P.push(le);for(let ae=1;ae<12;ae++){let _e=le[ae],Ee=le[ae+1].clone().sub(le[ae-1]);Ft.push({x:_e.x,y:_e.y,z:_e.z,ry:Math.atan2(-Ee.z,Ee.x)})}}tt=Zt}}function It(A,G,K,at=Ve/2+2.2){for(let vt=A;vt<=G;vt+=2.4){let tt=t.sample(vt),Tt=tt.x+tt.rx*at*K,Wt=tt.z+tt.rz*at*K;dt.push({x:Tt,y:t.heightAt(Tt,Wt),z:Wt,ry:Math.atan2(tt.tx,tt.tz)})}}let Y=t.finishM;At(Y-70,Y+10,1),At(Y-70,Y+10,-1),At(-6,50,1),At(-6,50,-1),It(Y-60,Y+14,1),It(Y-60,Y+14,-1),It(-4,40,1),It(-4,40,-1);{let A=new Oe;A.setAttribute("position",new me([-.3,0,0,.3,0,0,0,-.62,0],3)),A.setAttribute("normal",new me([0,0,1,0,0,1,0,0,1],3));let G=Ft.map((j,Mt)=>[16727435,16765503,3054591,4054148,16747069,16777215][Mt%6]);nt(A,gt(16777215,{side:je}),Ft,{colors:G,cast:!1});let K=new ue(.07,.09,3.3,6);K.translate(0,1.65,0),nt(K,gt(16777215),H,{ol:1.5});let at=new Oe().setFromPoints(P.flatMap(j=>j.slice(0,-1).flatMap((Mt,Et)=>[Mt,j[Et+1]]))),vt=new Qs(at,new ds({color:3355443}));l(vt),o.push(at);let tt=[];for(let j=0;j<4;j++){let Mt=new Te(.16,1,.06);Mt.translate(-.9+j*.6,.5,0),tt.push(Mt)}let Tt=new Te(2.4,.12,.05);Tt.translate(0,.65,.05),tt.push(Tt);let Wt=Tt.clone();Wt.translate(0,-.35,0),tt.push(Wt);let Ut=Qe(tt);Ut.rotateY(Math.PI/2),nt(Ut,gt(16777215),dt,{ol:1.8})}let pt=[],ct=(A,G,K,at,vt,tt=1.35)=>pt.push({m0:A,m1:G,side:K,off:Ve/2+3,depth:at,density:vt,spacing:tt});ct(Y-58,Y+12,1,6,1),ct(Y-58,Y+12,-1,6,1),ct(-2,38,1,5,.9),ct(-2,38,-1,5,.9),ct(1940,2010,1,4,.7),ct(1960,2010,-1,3,.6),ct(_t-10,_t+40,-1,3,.55),ct(2440,2490,-1,3,.7),ct(_t-70,_t+10,1,3,.5),ct(_t-70,_t-20,-1,3,.45),ct(2080,2160,1,4,.75),ct(2080,2160,-1,4,.75),ct(800,860,1,3,.6),ct(1250,1310,-1,3,.6),ft.crowdZones=pt;{let A=s.pois.filter(at=>at.kind==="bench"&&x(at.pos[0],at.pos[1])&&m(at.pos[0],at.pos[1],1)).map(at=>({x:at.pos[0],y:t.heightAt(at.pos[0],at.pos[1]),z:at.pos[1],ry:se()*6})),G=Qe([new Te(1.8,.12,.5).translate(0,.5,0),new Te(1.8,.4,.1).translate(0,.8,-.22),new Te(.1,.5,.45).translate(-.8,.25,0),new Te(.1,.5,.45).translate(.8,.25,0)]);nt(G,gt(11892031),A,{ol:1.5});let K=s.pois.filter(at=>at.kind==="cafe"&&x(at.pos[0],at.pos[1])&&m(at.pos[0],at.pos[1],4));for(let at of K){let vt=new de;vt.add(ve(new be(5,3,4,2,.2),gt(16774108),{ol:2.5})).position.y=1.5;let tt=an(128,16,(Ut,j,Mt)=>{for(let Et=0;Et<8;Et++)Ut.fillStyle=Et%2?"#fff":"#ff4f6d",Ut.fillRect(Et*16,0,16,Mt)});o.push(tt);let Tt=ve(new Te(5.6,.2,2),gt(16777215,{map:tt}),{ol:2});Tt.position.set(0,2.9,2.3),Tt.rotation.x=.35,vt.add(Tt);let Wt=ve(new qe(4,1.6,4),gt(3054591),{ol:2.5});Wt.position.y=3.8,Wt.rotation.y=Math.PI/4,vt.add(Wt),vt.position.set(at.pos[0],t.heightAt(at.pos[0],at.pos[1]),at.pos[1]),vt.rotation.y=se()*6,l(vt),_(at.pos[0],at.pos[1],5)}}for(let A of pt)for(let G=A.m0-8;G<=A.m1+8;G+=4){let K=t.sample(G),at=A.off+A.depth/2;_(K.x+K.rx*at*A.side,K.z+K.rz*at*A.side,A.depth/2+3)}for(let A of[D,it])_(A.x,A.z,14);function bt(A,G){let K=null,at=1e9;for(let vt of f){let tt=(vt[0]-A)**2+(vt[1]-G)**2;tt<at&&(at=tt,K=vt)}return K}ft.nearestOnRibbon=bt,ft.ribbonSamples=f;let wt=new Map;for(let A of f){let G=`${Math.floor(A[0]/10)},${Math.floor(A[1]/10)}`,K=wt.get(G);K||wt.set(G,K=[]),K.push(A)}let Rt=(A,G,K=1)=>{let at=Math.floor(A/10),vt=Math.floor(G/10),tt=(Ve/2+K)**2;for(let Tt=-1;Tt<=1;Tt++)for(let Wt=-1;Wt<=1;Wt++)for(let Ut of wt.get(`${at+Tt},${vt+Wt}`)||[])if((Ut[0]-A)**2+(Ut[1]-G)**2<tt)return!0;return!1};ft.reserve=_,ft.clearOf=m;let Pt=[],Xt=(A,G,K,at)=>!m(A,G,2.5*at)||w(A,G,1.5)?!1:(Pt.push({x:A,z:G,kind:K,s:at}),_(A,G,2.2*at),!0);for(let A of s.pois)A.kind==="tree"&&Xt(A.pos[0],A.pos[1],0,.85+se()*.35);for(let A of s.features)if(A.kind==="wood"&&A.closed){let G=Bn(A.pts),K=(G[2]-G[0])*(G[3]-G[1]);for(let at=0;at<K/90;at++){let vt=G[0]+se()*(G[2]-G[0]),tt=G[1]+se()*(G[3]-G[1]);rr(A.pts,vt,tt)&&Xt(vt,tt,1,.9+se()*.5)}}{let A=Bn(S);for(let G=0;G<2600;G++){let K=A[0]+se()*(A[2]-A[0]),at=A[1]+se()*(A[3]-A[1]);!x(K,at)||-Jr(S,K,at)>45&&se()<.75||Xt(K,at,se()<.7?1:2,.8+se()*.5)}for(let G of s.features)if(G.kind==="road"&&!G.closed)for(let K=1;K<G.pts.length;K++){let at=G.pts[K-1],vt=G.pts[K],tt=Math.hypot(vt[0]-at[0],vt[1]-at[1]);for(let Tt=0;Tt<tt;Tt+=22){let Wt=Tt/tt,Ut=at[0]+(vt[0]-at[0])*Wt,j=at[1]+(vt[1]-at[1])*Wt,Mt=-(vt[1]-at[1])/tt,Et=(vt[0]-at[0])/tt,Zt=8+se()*2;se()<.5&&Xt(Ut+Mt*Zt,j+Et*Zt,0,.6+se()*.2)}}}{let A=[3978315,5031250,3121226,6539594,8376650,3450963],G=new ue(.32,.5,4.2,7);G.translate(0,2.1,0);let K=new sn(3.2,1);K.scale(1,1.08,1),K.translate(0,6.6,0);let at=Qe([new sn(3,1).translate(0,6.2,0),new sn(2.3,0).translate(1.9,5.3,.6),new sn(2.2,0).translate(-1.7,5.5,-.8),new sn(2,0).translate(.2,8.2,.3)].map(Rf)),vt=Qe([new qe(3,4.2,8).translate(0,5,0),new qe(2.4,3.6,8).translate(0,7.2,0),new qe(1.6,3,8).translate(0,9.2,0)].map(Rf)),tt=Pt.map(Ut=>({x:Ut.x,y:t.heightAt(Ut.x,Ut.z)-.2,z:Ut.z,ry:se()*6.28,s:Ut.s}));nt(G,gt(9067062),tt,{ol:2,olRef:40,chunk:160});let Tt=gt(16777215);K.computeVertexNormals(),[K,at,vt].forEach((Ut,j)=>{let Mt=tt.filter((Et,Zt)=>Pt[Zt].kind===j);nt(Ut,Tt,Mt,{ol:2.2,olRef:40,colors:Mt.map(()=>A[Math.floor(se()*A.length)]),chunk:160})}),ft.treeCount=Pt.length}{let A=Qe([0,1,2,3].map(tt=>{let Tt=new qe(.09,.55,3);return Tt.translate(0,.27,0),Tt.rotateZ((tt-1.5)*.25),Tt.rotateY(tt*1.7),Tt.translate((tt-1.5)*.08,0,tt%2*.06),Tt.index?Tt.toNonIndexed():Tt})),G=Qe([new ue(.03,.03,.35,4).translate(0,.17,0).toNonIndexed(),new sn(.13,0).translate(0,.38,0)]),K=[],at=[],vt=[];for(let tt=0;tt<9e3;tt++){let Tt=f[Math.floor(se()*f.length)],Wt=se()*6.283,Ut=Ve/2+1+se()*22,j=Tt[0]+Math.cos(Wt)*Ut,Mt=Tt[1]+Math.sin(Wt)*Ut;if(!x(j,Mt)||w(j,Mt,.5)||!m(j,Mt,.2))continue;let Et=t.heightAt(j,Mt)-.03;se()<.62?K.push({x:j,y:Et,z:Mt,ry:se()*6,s:.5+se()*.6}):(at.push({x:j,y:Et,z:Mt,ry:se()*6,s:.35+se()*.25}),vt.push(["#ff5d8f","#ffd93b","#ffffff","#b06bff","#ff8a3d","#57c7ff"][Math.floor(se()*6)]))}nt(A,gt(5226296),K,{cast:!1,chunk:120}),nt(G,gt(16777215),at,{cast:!1,colors:vt,chunk:120})}let Qt=new wn({side:fn,depthWrite:!1,fog:!1,uniforms:{top:{value:new oe(3116287)},mid:{value:new oe(9425919)},bot:{value:new oe(15333631)}},vertexShader:"varying vec3 vP; void main(){ vP = normalize(position); gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.); }",fragmentShader:`uniform vec3 top; uniform vec3 mid; uniform vec3 bot; varying vec3 vP; void main(){ float h=vP.y; vec3 c = h>0.12? mix(mid, top, smoothstep(0.12,0.7,h)) : mix(bot, mid, smoothstep(-0.05,0.12,h)); gl_FragColor=vec4(c,1.);
#include <colorspace_fragment>
}`}),Jt=new De(new ye(5e3,32,16),Qt);Jt.renderOrder=-10,Jt.frustumCulled=!1,n.add(Jt),o.push(Qt,Jt.geometry);let pe=Qe([[0,0,0,14],[13,-3,2,10],[-13,-4,-1,10],[6,6,-2,9],[-6,5,3,8],[22,-6,0,6],[-22,-7,1,6]].map(([A,G,K,at])=>new sn(at,2).translate(A,G,K)));pe.scale(1,.7,.8);let re=[h.x0+p/2,h.z0+g/2],Se=[];for(let A=0;A<26;A++){let G=se()*6.28,K=300+se()*1300;Se.push({x:re[0]+Math.cos(G)*K,y:170+se()*120,z:re[1]+Math.sin(G)*K,ry:se()*6,s:.8+se()*1.4})}let ot=nt(pe,gt(16777215,{emissive:6981808,emissiveIntensity:.35,fog:!1}),Se,{ol:1.5,olRef:300,cast:!1}),qt=[];for(let A=0;A<18;A++){let G=A/18*6.28+se()*.2,K=1900+se()*500;qt.push({x:re[0]+Math.cos(G)*K,y:-40,z:re[1]+Math.sin(G)*K,sx:320+se()*260,sy:80+se()*90,sz:260+se()*200,ry:se()*6})}nt(new ye(1,24,12),gt(7128954),qt,{cast:!1,colors:qt.map((A,G)=>[8047487,6273413,9425290][G%3])});function Ct(A){B.uTime.value=A;for(let G of W)G.g.position.y=(t.lake?._waterLevel??0)+.1+Math.sin(A*1.7+G.ph)*.08,G.g.rotation.z=Math.sin(A*1.3+G.ph)*.06,G.g.rotation.y=G.a+Math.sin(A*.1+G.ph)*.4;ot&&(ot.position.x=Math.sin(A*.01)*40)}function Dt(){a.traverse(A=>{A.geometry&&A.geometry.dispose()});for(let A of o)A.dispose?.();n.remove(a),n.remove(Jt)}return{group:a,anchors:ft,update:Ct,dispose:Dt,inPark:x,clearOf:m,reserve:_,blocked:w,groundTex:T,onPath:Rt,registerInstanced:M,clearArea:b,redrawGround:I}}function Rf(n){let t=n.index?n.toNonIndexed():n;return t.computeVertexNormals(),t}function Da(n){let t=0,e=0;for(let i of n)t+=i[0],e+=i[1];return[t/n.length,e/n.length]}function Ye(n,t,e,i,s,r){n.beginPath(),n.moveTo(t+r,e),n.arcTo(t+i,e,t+i,e+s,r),n.arcTo(t+i,e+s,t,e+s,r),n.arcTo(t,e+s,t,e,r),n.arcTo(t,e,t+i,e,r),n.closePath()}var If=[16735631,16765503,5752831,8248938,16747069,11566079,5234888,16739179,16777215,9414911],Pf=[4054148,16727435,16765503,3054591,16777215];function ev(){let n=[];for(let i=0;i<=8;i++){let s=i/8,r=s*1.25,o=s<.12?.48+s*1.2:Math.sqrt(Math.max(0,1-Math.pow((s-.12)/.88,2.2)))*.62;n.push(new Bt(Math.max(.001,o),r))}n.unshift(new Bt(.001,0));let e=new Wr(n,12);return e.computeVertexNormals(),e}function gh(n,t){let e=Cn(99),i=t.length,s=new de;if(n.add(s),!i)return{update(){},hideWhere(){},dispose(){n.remove(s)},group:s};let r=ev(),o=new ye(.15,8,5);o.scale(.8,1.15,.5);let a=new ye(.075,6,4);a.scale(.85,1.2,.5);let l=new ye(.13,6,5),h=new qe(.14,.36,6);h.translate(0,.18,0);let p=new qe(.26,.55,8);p.translate(0,.27,0);let g=new ye(.2,7,5),d=(z,W,it,D)=>{let ft=new nn(z,W,it);return ft.castShadow=!0,ft.receiveShadow=!0,ft.userData.ol=D,s.add(ft),ft},c=d(r,gt(16777215),i,2.6),u=d(o,new Rn({color:16777215}),i*2,0),_=d(a,new Rn({color:1709088}),i*2,0),m=d(l,gt(16777215),i*2,2);u.castShadow=_.castShadow=!1;let f=[d(h,gt(16777215),i,2),d(p,gt(16777215),i,2),d(g,gt(16777215),i,2)],S=[0,0,0],x=new oe,y=t.map((z,W)=>{let it=z.colour??If[Math.floor(e()*If.length)];c.setColorAt(W,x.set(it)),m.setColorAt(W*2,x),m.setColorAt(W*2+1,x);let D=e()<.3?-1:Math.floor(e()*3),ft=-1;return D>=0&&(ft=S[D]++,f[D].setColorAt(ft,x.set(Pf[Math.floor(e()*Pf.length)]))),{...z,s:z.scale??.85+e()*.35,ph:e()*6.28,sp:5+e()*4,tk:D,ti:ft,wave:e()<.5,ex:.3}});f.forEach((z,W)=>{z.count=S[W]});for(let z of[c,m,...f])z.instanceColor&&(z.instanceColor.needsUpdate=!0);let k=new we().makeScale(0,0,0),w=new we,C=new Fn,R=new Zn,M=new $,v=new $,b=new we,I=new we;function T(z,W,it){let D=y[z];if(D.hidden){for(let J of[c])J.setMatrixAt(z,k);for(let J=0;J<2;J++)u.setMatrixAt(z*2+J,k),_.setMatrixAt(z*2+J,k),m.setMatrixAt(z*2+J,k);D.tk>=0&&f[D.tk].setMatrixAt(D.ti,k);return}let ft=D.ex,Lt=W*D.sp*(.5+ft*.6)+D.ph,O=Math.max(0,Math.sin(Lt))*.32*ft,X=1-Math.cos(Lt*2)*.05*ft;R.set(0,D.yaw+Math.sin(W*.8+D.ph)*.25*(1-ft),Math.sin(Lt*.5)*.08*ft),C.setFromEuler(R),b.compose(M.set(D.x,D.y+O,D.z),C,v.set(D.s/Math.sqrt(X),D.s*X,D.s/Math.sqrt(X))),c.setMatrixAt(z,b);for(let J=0;J<2;J++){let V=J?.19:-.19;I.makeTranslation(V,.86,.5),w.multiplyMatrices(b,I),u.setMatrixAt(z*2+J,w),I.makeTranslation(V*1.02,.84+(ft>.6?.03:0),.565),w.multiplyMatrices(b,I),_.setMatrixAt(z*2+J,w);let st=ft>.55?1:.15+.2*Math.max(0,Math.sin(Lt)),nt=D.wave?Math.sin(Lt*1.5+J*3)*.25*ft:0,St=(J?1:-1)*(.62+st*.05+nt*.3),zt=.45+st*.85+nt;I.makeTranslation(St,zt,.12),w.multiplyMatrices(b,I),m.setMatrixAt(z*2+J,w)}D.tk>=0&&(I.makeTranslation(0,1.22,0),D.tk===0&&I.multiply(new we().makeRotationZ(Math.sin(Lt)*.3)),w.multiplyMatrices(b,I),f[D.tk].setMatrixAt(D.ti,w))}for(let z=0;z<i;z++)T(z,0,!0);let E=()=>{for(let z of[c,u,_,m,...f])z.instanceMatrix.needsUpdate=!0};E();for(let z of[c,u,_,m,...f]){if(!z.count){z.visible=!1;continue}z.computeBoundingSphere(),z.boundingSphere.radius+=2,z.userData.ol&&jn(z,z.userData.ol,void 0,18)}function F(z,W,it=[],D=null){let ft=!1;for(let Lt=0;Lt<i;Lt++){let O=y[Lt];if(W&&(O.x-W.x)**2+(O.z-W.z)**2>260*260)continue;let X=.25;if(D!=null)X=D;else for(let J of it){let V=(J.x-O.x)**2+(J.z-O.z)**2;V<45*45&&(X=Math.max(X,1-Math.sqrt(V)/70))}O.ex+=(X-O.ex)*.05,T(Lt,z),ft=!0}ft&&E()}function U(){for(let z of[r,o,a,l,h,p,g])z.dispose();for(let z of[c,u,_,m,...f])z.dispose();n.remove(s)}function B(z){let W=!1;for(let it=0;it<i;it++)!y[it].hidden&&z(y[it].x,y[it].z)&&(y[it].hidden=!0,T(it,0),W=!0);W&&E()}return{update:F,dispose:U,hideWhere:B,group:s,members:y}}function Lf(n,t,e=5,i=null,s=null){let r=Cn(e),o=[];for(let[a,l]of t.entries())for(let h=l.m0;h<=l.m1;h+=l.spacing??1.35){let p=n.sample(h),g=Math.max(1,Math.round(l.depth/1.25));for(let d=0;d<g;d++){if(r()>l.density)continue;let c=l.off+d*1.25+r()*.35,u=(r()-.5)*.6,_=p.x+p.rx*c*l.side+p.tx*u,m=p.z+p.rz*c*l.side+p.tz*u;i&&i(_,m,1.4)||s&&s(_,m,.6)||o.push({zone:a,x:_,y:n.heightAt(_,m),z:m,yaw:Math.atan2(-p.rx*l.side,-p.rz*l.side)+(r()-.5)*.5})}}return o}var kf={stocky:{torso:[.9,.76,.58],leg:.66,legR:.16,arm:.66,armR:.14,head:.47,hand:.19,shoe:[.34,.25,.6]},lanky:{torso:[.56,.86,.38],leg:1.06,legR:.095,arm:.9,armR:.085,head:.39,hand:.15,shoe:[.27,.21,.62]},compact:{torso:[.68,.6,.5],leg:.52,legR:.13,arm:.52,armR:.11,head:.5,hand:.17,shoe:[.3,.23,.5]},tall:{torso:[.7,.94,.46],leg:.92,legR:.125,arm:.8,armR:.11,head:.43,hand:.17,shoe:[.31,.24,.6]}},Df=["#2b1d14","#5a3a1e","#c8642a","#e8c66a","#1d1d24","#a9a9b3","#3a2a1e","#8a5a2b","#ff5fa2"],nv=3.2,to=new Map,te=(n,t)=>(to.has(n)||to.set(n,t()),to.get(n));function Uf(){for(let n of to.values())n.dispose();to.clear()}function iv(n){let t=2166136261;for(let e of n)t^=e.charCodeAt(0),t=Math.imul(t,16777619);return t>>>0}function sv(n,t,e,i,s,r){n.fillStyle=i,n.fillRect(0,0,t,e);let o=t*.25,a=e*.47,l=e*.64,h=t*.058,p="#1a1420";n.fillStyle="rgba(255,90,90,0.28)";for(let m of[-1,1])n.beginPath(),n.ellipse(o+m*h*1.75,l-e*.03,t*.022,e*.03,0,0,7),n.fill();let g=(m,f)=>{if(f==="heart"){n.fillStyle="#ff2d6f",n.strokeStyle=p,n.lineWidth=5,n.beginPath();let w=t*.03;n.moveTo(m,a+w*1.1),n.bezierCurveTo(m-w*2.2,a-w*.2,m-w*.9,a-w*1.9,m,a-w*.6),n.bezierCurveTo(m+w*.9,a-w*1.9,m+w*2.2,a-w*.2,m,a+w*1.1),n.fill(),n.stroke();return}if(f==="closed"||f==="happy"){n.strokeStyle=p,n.lineWidth=9,n.lineCap="round",n.beginPath(),f==="happy"?n.arc(m,a+e*.02,t*.024,Math.PI*1.1,Math.PI*1.9):(n.moveTo(m-t*.025,a),n.lineTo(m+t*.025,a)),n.stroke();return}if(f==="x"){n.strokeStyle=p,n.lineWidth=8,n.lineCap="round";let w=t*.02;n.beginPath(),n.moveTo(m-w,a-w),n.lineTo(m+w,a+w),n.moveTo(m+w,a-w),n.lineTo(m-w,a+w),n.stroke();return}if(f==="wink"&&m>o&&(f="happy"),f==="wink"&&(f="open"),f==="happy"){n.strokeStyle=p,n.lineWidth=9,n.lineCap="round",n.beginPath(),n.arc(m,a+e*.02,t*.024,Math.PI*1.1,Math.PI*1.9),n.stroke();return}let S=f==="wide"?1.3:1,x=t*.03*S,y=e*.085*S;n.fillStyle="#fff",n.strokeStyle=p,n.lineWidth=6,n.beginPath(),n.ellipse(m,a,x,y,0,0,7),n.fill(),n.stroke();let k=f==="wide"?.38:.55;n.fillStyle=p,n.beginPath(),n.ellipse(m+x*.15,a+y*.12,x*k,y*k*1.1,0,0,7),n.fill(),n.fillStyle="#fff",n.beginPath(),n.arc(m+x*.35,a-y*.2,x*.22,0,7),n.fill(),f==="half"&&(n.fillStyle=i,n.fillRect(m-x-4,a-y-4,x*2+8,y*1.05),n.strokeStyle=p,n.lineWidth=7,n.beginPath(),n.moveTo(m-x-2,a-y*.1),n.lineTo(m+x+2,a-y*.1),n.stroke())},d={sleepy:"half",smug:"half",cheeky:"wink","wide-eyed":"wide"}[s]||"open";r==="happy"&&(d="happy"),r==="love"&&(d="heart"),r==="dead"&&(d="x"),r==="effort"&&s!=="goofy"&&(d="open");for(let m of[-1,1])g(o+m*h,d);n.strokeStyle=p,n.lineWidth=10,n.lineCap="round";let c=r==="effort"||s==="determined"||s==="gritted"?.35:r==="sad"||s==="worried"?-.35:s==="smug"||s==="cheeky"?.15:s==="wide-eyed"?-.2:0;for(let m of[-1,1]){let f=o+m*h,S=a-e*.13,x=t*.026,y=f-m*x,k=f+m*x;n.beginPath(),n.moveTo(k,S-c*18),n.lineTo(y,S+c*18),n.stroke()}n.lineWidth=8,n.strokeStyle=p,n.fillStyle="#7a1e2e";let u=o,_=r||"normal";if(_==="happy"||_==="normal"&&s==="grin")n.beginPath(),n.moveTo(u-t*.04,l-e*.02),n.quadraticCurveTo(u,l+e*.12,u+t*.04,l-e*.02),n.closePath(),n.fill(),n.stroke(),n.fillStyle="#fff",n.fillRect(u-t*.03,l-e*.018,t*.06,e*.03),n.fillStyle="#ff7d8f",n.beginPath(),n.ellipse(u,l+e*.06,t*.015,e*.02,0,0,7),n.fill();else if(_==="effort"){n.fillStyle="#fff",n.beginPath(),Ye(n,u-t*.035,l-e*.03,t*.07,e*.065,10),n.fill(),n.stroke(),n.lineWidth=4,n.beginPath(),n.moveTo(u-t*.035,l),n.lineTo(u+t*.035,l);for(let m=-2;m<=2;m++)n.moveTo(u+m*t*.012,l-e*.03),n.lineTo(u+m*t*.012,l+e*.035);n.stroke()}else if(_==="sad"||_==="dead")n.beginPath(),n.moveTo(u-t*.03,l+e*.04),n.quadraticCurveTo(u,l-e*.04,u+t*.03,l+e*.04),n.stroke(),_==="dead"&&(n.fillStyle="#ff7d8f",n.beginPath(),n.ellipse(u+t*.012,l+e*.07,t*.012,e*.04,.2,0,7),n.fill(),n.stroke());else if(_==="love"||_==="pant")n.beginPath(),n.ellipse(u,l+e*.02,t*.022,e*.05,0,0,7),n.fill(),n.stroke();else if(s==="gritted"){n.fillStyle="#fff",n.beginPath(),Ye(n,u-t*.04,l-e*.03,t*.08,e*.06,10),n.fill(),n.stroke(),n.lineWidth=4,n.beginPath(),n.moveTo(u-t*.04,l),n.lineTo(u+t*.04,l);for(let m=-2;m<=2;m++)n.moveTo(u+m*t*.014,l-e*.03),n.lineTo(u+m*t*.014,l+e*.03);n.stroke()}else if(s==="tongue-out")n.beginPath(),n.moveTo(u-t*.035,l),n.quadraticCurveTo(u,l+e*.05,u+t*.035,l),n.stroke(),n.fillStyle="#ff6f8a",n.beginPath(),n.ellipse(u+t*.008,l+e*.06,t*.016,e*.05,.15,0,7),n.fill(),n.stroke(),n.strokeStyle="rgba(0,0,0,0.35)",n.lineWidth=3,n.beginPath(),n.moveTo(u+t*.008,l+e*.03),n.lineTo(u+t*.01,l+e*.08),n.stroke();else if(s==="wide-eyed")n.beginPath(),n.ellipse(u,l+e*.02,t*.016,e*.04,0,0,7),n.fill(),n.stroke();else if(s==="cheeky")n.beginPath(),n.moveTo(u-t*.04,l-e*.01),n.quadraticCurveTo(u,l+e*.08,u+t*.045,l-e*.035),n.stroke();else if(s==="smug")n.beginPath(),n.moveTo(u-t*.03,l+e*.01),n.quadraticCurveTo(u+t*.01,l+e*.05,u+t*.04,l-e*.03),n.stroke();else if(s==="worried"){n.beginPath(),n.moveTo(u-t*.03,l+e*.02);for(let m=0;m<=6;m++)n.lineTo(u-t*.03+m*t*.01,l+e*.02+(m%2?-1:1)*e*.012);n.stroke()}else s==="goofy"?(n.beginPath(),n.moveTo(u-t*.04,l),n.quadraticCurveTo(u,l+e*.09,u+t*.04,l),n.closePath(),n.fill(),n.stroke(),n.fillStyle="#ff7d8f",n.beginPath(),n.ellipse(u+t*.01,l+e*.07,t*.016,e*.045,0,0,7),n.fill(),n.stroke(),n.fillStyle="#fff",n.fillRect(u-t*.02,l-2,t*.016,e*.03)):s==="determined"?(n.beginPath(),n.moveTo(u-t*.03,l+e*.01),n.lineTo(u+t*.03,l+e*.01),n.stroke()):(n.beginPath(),n.moveTo(u-t*.035,l-e*.01),n.quadraticCurveTo(u,l+e*.07,u+t*.035,l-e*.01),n.stroke());n.strokeStyle="rgba(0,0,0,0.25)",n.lineWidth=6,n.beginPath(),n.arc(o,a+e*.09,t*.012,.2,Math.PI-.2),n.stroke()}function rv(n,t){return an(256,200,(e,i,s)=>{e.fillStyle="#ffffff",Ye(e,0,0,i,s,20),e.fill(),e.fillStyle=t,e.fillRect(0,0,i,44),e.font=`30px ${mh}`,e.fillStyle="#fff",e.textAlign="center",e.textBaseline="middle",e.fillText("MARKRUN",i/2,24),ln(e,String(n),i/2,128,140,"#1a1420","#1a1420",0),e.fillStyle="#c33";for(let[r,o]of[[16,60],[i-16,60],[16,s-16],[i-16,s-16]])e.beginPath(),e.arc(r,o,6,0,7),e.fill()})}function ov(n){return an(128,128,(t,e,i)=>{if(t.fillStyle="#ffffff",t.strokeStyle="#1a1420",t.lineWidth=8,t.beginPath(),t.arc(e/2,i/2-6,48,0,7),t.fill(),t.stroke(),t.beginPath(),t.moveTo(e/2-12,i-26),t.lineTo(e/2,i-4),t.lineTo(e/2+8,i-28),t.fill(),n==="!")ln(t,"!",e/2,i/2-4,84,"#ff3d8b","#1a1420",.12);else if(n==="heart"){t.fillStyle="#ff2d6f";let s=e/2,r=i/2-2,o=16;t.beginPath(),t.moveTo(s,r+o*1.3),t.bezierCurveTo(s-o*2.6,r-o*.3,s-o,r-o*2.2,s,r-o*.7),t.bezierCurveTo(s+o,r-o*2.2,s+o*2.6,r-o*.3,s,r+o*1.3),t.fill(),t.stroke()}else if(n==="floss"){t.fillStyle="#ff9bd2";for(let[s,r,o]of[[54,44,18],[74,46,17],[64,30,16],[62,54,16]])t.beginPath(),t.arc(s,r,o,0,7),t.fill();t.strokeStyle="#c99a5a",t.lineWidth=6,t.beginPath(),t.moveTo(64,62),t.lineTo(64,96),t.stroke()}else if(n==="sweat"){t.fillStyle="#57c7ff";for(let[s,r]of[[50,50],[78,64]])t.beginPath(),t.moveTo(s,r-22),t.quadraticCurveTo(s+14,r,s,r+10),t.quadraticCurveTo(s-14,r,s,r-22),t.fill(),t.stroke()}})}function Nf(n,t={}){let e=n.look||{},i=kf[e.build]||kf.compact,s=iv(n.id+(n.nickname||"")),r=Cn(s),o=n.colour?.primary||"#ff4757",a=n.colour?.secondary||"#ffffff",l=e.skin||"#f1c6a5",h=Df[s%Df.length],p=[],g=gt(o),d=gt(a),c=gt(l),u=gt(h),_=new oe(a).getHSL({}).l>.85?"#ffffff":a,m=gt(_),f=gt("#ffffff"),S=gt("#22202c"),x=(Y,pt,ct=nv)=>ve(Y,pt,{ol:ct,olRef:9}),y=new de;y.name=`runner-${n.id}`;let k=new de;y.add(k);let w=new de;k.add(w);let C=i.leg/2,R=i.leg+i.shoe[1]*.75;w.position.y=R;let M=x(te(`shorts${e.build}`,()=>new be(i.torso[0]*.92,.32,i.torso[2]*.95,3,.12)),d);M.position.y=.02,w.add(M);let v=new de;v.position.y=.12,w.add(v);let b=x(te(`torso${e.build}`,()=>new be(...i.torso,4,Math.min(i.torso[2],i.torso[0])*.42)),g);b.position.y=i.torso[1]/2,v.add(b);for(let Y of[-1,1]){let pt=ve(te(`stripe${e.build}`,()=>new Te(.06,i.torso[1]*.8,i.torso[2]*.7)),gt(a),{cast:!1});pt.position.set(Y*i.torso[0]*.5,i.torso[1]*.5,0),v.add(pt)}let I=rv(n.lane??0,o);p.push(I);let T=new De(te("bib",()=>new dn(1,.78)),gt(16777215,{map:I})),E=Math.min(.42,i.torso[0]*.6);T.scale.setScalar(E),T.position.set(0,i.torso[1]*.45,i.torso[2]/2+.012),v.add(T);let F=new de;F.position.y=i.torso[1]+.02,v.add(F);let U=new de;F.add(U);let B=document.createElement("canvas");B.width=1024,B.height=512;let z=new tr(B);z.colorSpace=hn,z.anisotropy=4,p.push(z);let W=null,it=Y=>{Y!==W&&(W=Y,sv(B.getContext("2d"),1024,512,l,e.face||"grin",Y),z.needsUpdate=!0)};it("normal");let D=i.head,ft=x(te(`head${D}`,()=>new ye(D,32,20).scale(1,.98,.96)),gt(16777215,{map:z}));ft.position.y=D*.92,U.add(ft);for(let Y of[-1,1]){let pt=x(te(`ear${D}`,()=>new ye(D*.2,10,8).scale(.6,1,.8)),c,2.5);pt.position.set(Y*D*.97,D*.9,0),U.add(pt)}let Lt=x(te(`nose${D}`,()=>new ye(D*.14,10,8)),c,2);Lt.position.set(0,D*.84,D*.97),U.add(Lt),yt(e.hair,e.hat),N(e.hat);let O=[];for(let Y of[-1,1]){let pt=new de;pt.position.set(Y*(i.torso[0]/2+i.armR*.55),i.torso[1]-i.armR*1.1,0),v.add(pt);let ct=x(te(`sleeve${e.build}`,()=>new ye(i.armR*1.65,14,10)),g);pt.add(ct);let bt=x(te(`uarm${e.build}`,()=>new Jn(i.armR,i.arm/2-i.armR,4,10).translate(0,-i.arm/4,0)),c);pt.add(bt);let wt=new de;wt.position.y=-i.arm/2+i.armR*.4,pt.add(wt);let Rt=x(te(`farm${e.build}`,()=>new Jn(i.armR*.95,i.arm/2-i.armR,4,10).translate(0,-i.arm/4,0)),c);wt.add(Rt);let Pt=x(te(`hand${e.build}`,()=>new ye(i.hand,14,10).scale(1,1.1,.9)),c);Pt.position.y=-i.arm/2-i.hand*.4,wt.add(Pt),O.push({sh:pt,el:wt,hand:Pt})}let X=[];for(let Y of[-1,1]){let pt=new de;pt.position.set(Y*i.torso[0]*.24,0,0),w.add(pt);let ct=x(te(`thigh${e.build}`,()=>new Jn(i.legR*1.15,C-i.legR,4,10).translate(0,-C/2,0)),c);pt.add(ct);let bt=x(te(`sleg${e.build}`,()=>new ue(i.legR*1.6,i.legR*1.5,C*.5,12).translate(0,-C*.2,0)),d);pt.add(bt);let wt=new de;wt.position.y=-C,pt.add(wt);let Rt=x(te(`shin${e.build}`,()=>new Jn(i.legR,C-i.legR,4,10).translate(0,-C/2,0)),c);wt.add(Rt);let Pt=x(te(`sock${e.build}`,()=>new ue(i.legR*1.12,i.legR*1.12,C*.25,10).translate(0,-C*.86,0)),gt(16777215),2.5);wt.add(Pt);let Xt=new de;Xt.position.y=-C,wt.add(Xt);let Qt=x(te(`shoe${e.build}`,()=>new be(...i.shoe,3,i.shoe[1]*.45).translate(0,-i.shoe[1]*.25,i.shoe[2]*.22)),m);Xt.add(Qt);let Jt=ve(te(`sole${e.build}`,()=>new be(i.shoe[0]*1.04,i.shoe[1]*.3,i.shoe[2]*1.03,2,.05).translate(0,-i.shoe[1]*.62,i.shoe[2]*.22)),f,{ol:2.5,olRef:9});Xt.add(Jt);let pe=ve(te(`swoosh${e.build}`,()=>new Te(i.shoe[0]*1.06,i.shoe[1]*.18,i.shoe[2]*.5).translate(0,-i.shoe[1]*.2,i.shoe[2]*.2)),gt(o),{cast:!1});Xt.add(pe),X.push({hp:pt,kn:wt,an:Xt})}ut(e.accessory);let J=new de;J.visible=!1;{let Y=ve(te("flossStick",()=>new ue(.025,.025,.6,5).rotateX(Math.PI/2).translate(0,0,.3)),gt("#e8d0a0"),{cast:!1}),pt=ve(te("flossFluff",()=>{let ct=Cn(5);return Qe(Array.from({length:7},()=>new sn(.16+ct()*.06,1).translate((ct()-.5)*.22,(ct()-.5)*.22,.72+(ct()-.5)*.2)))}),gt("#ff9bd2"),{ol:2.5,olRef:9});J.add(Y,pt),J.userData.fluff=pt,J.position.y=-i.arm/2-i.hand*.4,O[0].el.add(J)}function V(Y,pt){Y==="floss"&&(J.visible=pt>0,pt>0&&J.userData.fluff.scale.setScalar(Math.max(.15,pt)))}let st={},nt=new fa(new Br({transparent:!0,depthTest:!1}));nt.scale.setScalar(.9),nt.visible=!1,nt.renderOrder=20,y.add(nt);let St=Y=>{if(!Y){nt.visible=!1;return}st[Y]||(st[Y]=ov(Y),p.push(st[Y])),nt.material.map=st[Y],nt.material.needsUpdate=!0,nt.visible=!0},zt=R+.12+i.torso[1]+.02+D*2;nt.position.y=zt+.45;let ht=new Set([b,M,ft,...O.flatMap(Y=>[Y.hand]),...X.map(Y=>Y.an.children[0])]);for(let Y of O)Y.sh.children.forEach(pt=>pt.isMesh&&ht.add(pt));for(let Y of X)Y.hp.children.forEach(pt=>pt.isMesh&&ht.add(pt));y.traverse(Y=>{Y.isMesh&&!Y.userData.isOutline&&(Y.castShadow=ht.has(Y))});function yt(Y,pt){let ct=Y||"short";if(ct==="bald")return;let bt=(wt=1.07,Rt=.48)=>{let Pt=x(te(`hcap${D}${wt}${Rt}`,()=>new ye(D*wt,24,14,0,Math.PI*2,0,Math.PI*Rt)),u);return Pt.position.y=D*.92,Pt.rotation.x=-.32,U.add(Pt),Pt};if(ct==="curly"||ct==="afro"){let wt=te(`curly${D}`,()=>{let Pt=Cn(7),Xt=[];for(let Qt=0;Qt<26;Qt++){let Jt=Pt()*Math.PI*.55,pe=Pt()*Math.PI*2,re=new $(Math.sin(Jt)*Math.cos(pe),Math.cos(Jt),Math.sin(Jt)*Math.sin(pe)).multiplyScalar(D*1.02);re.z>D*.55&&re.y<D*.75||Xt.push(new sn(D*.33,1).translate(re.x,re.y,re.z-D*.08))}return Qe(Xt)}),Rt=x(wt,u);Rt.position.y=D*.98,ct==="afro"&&(Rt.scale.setScalar(1.28),Rt.position.y=D*1.05),U.add(Rt);return}if(pt==="beanie"||pt==="bucket"||pt==="bobble"){if(bt(1.05,.5),ct==="mullet"||ct==="long"||ct==="ponytail"){let wt=x(te(`mul${D}`,()=>new be(D*1.5,D*.9,D*.4,3,D*.15)),u);wt.position.set(0,D*.35,-D*.78),U.add(wt)}return}if(ct==="buzz"){let wt=x(te(`buzz${D}`,()=>new ye(D*1.025,24,14,0,Math.PI*2,0,Math.PI*.45)),u,2);wt.position.y=D*.92,wt.rotation.x=-.32,U.add(wt);return}if(bt(),ct==="quiff"||ct==="swept"){let wt=x(te(`quiff${D}${ct}`,()=>new ye(D*.55,16,10).scale(ct==="quiff"?1.3:1.7,ct==="quiff"?.75:.45,1)),u);wt.position.set(ct==="swept"?D*.25:0,D*1.82,D*.38),wt.rotation.set(-.5,0,ct==="swept"?-.35:0),U.add(wt)}if(ct==="mullet"){let wt=x(te(`mul${D}`,()=>new be(D*1.5,D*.9,D*.4,3,D*.15)),u);wt.position.set(0,D*.35,-D*.78),U.add(wt)}if(ct==="long"){let wt=x(te(`hlong${D}`,()=>new be(D*1.8,D*1.6,D*.5,3,D*.2)),u);wt.position.set(0,D*.4,-D*.62),U.add(wt)}if(ct==="ponytail"){let wt=new de;wt.position.set(0,D*1.35,-D*.85),U.add(wt);for(let Rt=0;Rt<3;Rt++){let Pt=x(te(`pt${D}${Rt}`,()=>new ye(D*(.32-Rt*.05),12,8)),u);Pt.position.set(0,-Rt*D*.32,-Rt*D*.18),wt.add(Pt)}U.userData.pony=wt}if(ct==="bun"){let wt=x(te(`bun${D}`,()=>new ye(D*.38,14,10)),u);wt.position.set(0,D*2,-D*.2),U.add(wt)}if(ct==="mohawk"||ct==="spiky"){let wt=ct==="mohawk"?5:9;for(let Rt=0;Rt<wt;Rt++){let Pt=x(te(`spk${D}`,()=>new qe(D*.2,D*.7,8)),u),Xt=ct==="mohawk"?0:Rt/wt*Math.PI*2,Qt=ct==="mohawk"?-.9+Rt/(wt-1)*1.8:.6;Pt.position.set(Math.sin(Xt)*Math.sin(Qt)*D,D*.92+Math.cos(Qt)*D*1.05,(ct==="mohawk"?Math.sin(Qt):Math.cos(Xt)*Math.sin(Qt))*D),Pt.lookAt(Pt.position.clone().multiplyScalar(3)),Pt.rotateX(Math.PI/2),U.add(Pt)}}}function N(Y){if(!Y)return;let pt=gt(a==="#ffffff"||a==="#f8f8f8"?o:a),ct=gt(o);if(Y==="backwards-cap"){let bt=x(te(`capd${D}`,()=>new ye(D*1.1,24,12,0,Math.PI*2,0,Math.PI*.42)),pt);bt.position.y=D*.98,bt.rotation.x=-.18,U.add(bt);let wt=x(te(`brim${D}`,()=>new ue(D*.75,D*.75,D*.08,20,1,!1,-Math.PI/2,Math.PI).scale(1.2,1,1.15)),ct);wt.position.set(0,D*1.42,-D*.62),wt.rotation.set(-.12,Math.PI,0),U.add(wt)}else if(Y==="bobble"){let bt=x(te(`bean${D}`,()=>new ye(D*1.1,24,14,0,Math.PI*2,0,Math.PI*.5).scale(1,1.15,1)),ct);bt.position.y=D*.96,bt.rotation.x=-.12,U.add(bt);let wt=x(te(`brim2${D}`,()=>new Je(D*1.05,D*.17,8,24)),pt);wt.rotation.x=Math.PI/2-.12,wt.position.y=D*1.12,U.add(wt);let Rt=x(te(`bigbob${D}`,()=>new sn(D*.48,1)),pt);Rt.position.y=D*2.45,U.add(Rt),U.userData.bobble=Rt}else if(Y==="cap"||Y==="visor"){if(Y==="cap"){let wt=x(te(`capd${D}`,()=>new ye(D*1.1,24,12,0,Math.PI*2,0,Math.PI*.42)),pt);wt.position.y=D*.98,wt.rotation.x=-.18,U.add(wt)}else{let wt=x(te(`vband${D}`,()=>new Je(D*1,D*.12,8,24)),pt);wt.rotation.x=Math.PI/2-.25,wt.position.y=D*1.35,U.add(wt)}let bt=x(te(`brim${D}`,()=>new ue(D*.75,D*.75,D*.08,20,1,!1,-Math.PI/2,Math.PI).scale(1.2,1,1.15)),ct);bt.position.set(0,D*1.42,D*.62),bt.rotation.x=.12,U.add(bt)}else if(Y==="beanie"){let bt=x(te(`bean${D}`,()=>new ye(D*1.1,24,14,0,Math.PI*2,0,Math.PI*.5).scale(1,1.15,1)),pt);bt.position.y=D*.96,bt.rotation.x=-.12,U.add(bt);let wt=x(te(`brim2${D}`,()=>new Je(D*1.05,D*.17,8,24)),ct);wt.rotation.x=Math.PI/2-.12,wt.position.y=D*1.12,U.add(wt);let Rt=x(te(`bob${D}`,()=>new sn(D*.3,1)),ct);Rt.position.y=D*2.25,U.add(Rt)}else if(Y==="headband"||Y==="sweatband"){let bt=x(te(`hb${D}`,()=>new Je(D*1,D*.13,8,28)),pt);bt.rotation.x=Math.PI/2-.2,bt.position.y=D*1.3,U.add(bt);let wt=x(te(`hbt${D}`,()=>new be(D*.2,D*.5,D*.08,2,.02)),pt);wt.position.set(.12,D*1.1,-D*1.05),wt.rotation.z=.5,U.add(wt),U.userData.tail=wt}else if(Y==="bucket"){let bt=x(te(`buck${D}`,()=>new ue(D*.8,D*1.02,D*.7,20)),pt);bt.position.y=D*1.75,U.add(bt);let wt=x(te(`buckb${D}`,()=>new ue(D*1.5,D*1.5,D*.06,24)),ct);wt.position.y=D*1.42,wt.rotation.x=.1,U.add(wt)}else if(Y==="crown"||Y==="tiara"){let bt=x(te(`crown${D}`,()=>new ue(D*.7,D*.62,D*.5,8,1,!0)),gt("#ffd23f",{side:je}));bt.position.y=D*2,U.add(bt)}else if(Y==="wizard"||Y==="party"){let bt=x(te(`cone${D}`,()=>new qe(D*.8,D*1.8,16)),pt);bt.position.y=D*2.3,bt.rotation.z=.15,U.add(bt);let wt=x(te(`bob${D}`,()=>new sn(D*.3,1)),ct);wt.position.set(-D*.12,D*3.15,0),U.add(wt)}else if(Y==="helmet"||Y==="bike_helmet"){let bt=x(te(`helm${D}`,()=>new ye(D*1.14,20,12,0,Math.PI*2,0,Math.PI*.46).scale(1,.9,1.15)),pt);bt.position.y=D*1,U.add(bt)}else if(Y==="santa"){let bt=x(te(`santa${D}`,()=>new qe(D*.95,D*1.6,16)),gt("#e8313f"));bt.position.y=D*2.2,bt.rotation.z=.5,U.add(bt);let wt=x(te(`santar${D}`,()=>new Je(D*.95,D*.2,8,24)),gt("#ffffff"));wt.rotation.x=Math.PI/2,wt.position.y=D*1.45,U.add(wt)}else{let bt=x(te(`cone${D}`,()=>new qe(D*.8,D*1.8,16)),pt);bt.position.y=D*2.3,U.add(bt)}}function ut(Y){if(Y){if(Y==="sunglasses"||Y==="glasses"){let pt=Y==="sunglasses";for(let bt of[-1,1]){let wt=x(te(`lens${D}${pt}`,()=>new be(D*.5,D*.32,D*.08,2,D*.06)),pt?gt("#141420"):gt("#cfefff"),2);wt.position.set(bt*D*.3,D*1.02,D*.98),wt.rotation.y=bt*.28,U.add(wt)}let ct=ve(te(`bridge${D}`,()=>new Te(D*.3,D*.06,D*.06)),gt("#141420"),{cast:!1});ct.position.set(0,D*1.06,D*1.04),U.add(ct)}else if(Y==="medal"){let pt=x(te("ribbon",()=>new Je(.2,.03,6,20,Math.PI)),gt("#2e9bff"),2);pt.rotation.z=Math.PI,pt.position.set(0,i.torso[1]+.02,i.torso[2]/2-.05),pt.rotation.x=-.3,v.add(pt);let ct=x(te("medal",()=>new ue(.11,.11,.04,16).rotateX(Math.PI/2)),gt("#ffd23f",{emissive:"#664400",emissiveIntensity:.3}),2.5);ct.position.set(0,i.torso[1]-.22,i.torso[2]/2+.05),v.add(ct),T.position.y-=.1,T.position.x=.12,T.scale.multiplyScalar(.8)}else if(Y==="headphones"){let pt=x(te(`hp${D}`,()=>new Je(D*1.08,D*.07,6,24,Math.PI)),gt("#22202c"),2);pt.position.y=D*.95,U.add(pt);for(let ct of[-1,1]){let bt=x(te(`hpc${D}`,()=>new ue(D*.3,D*.3,D*.2,14).rotateZ(Math.PI/2)),gt(o),2.5);bt.position.set(ct*D*1.02,D*.92,0),U.add(bt)}}else if(Y==="sweatband"||Y==="wristbands"||Y==="watch")for(let pt of O){let ct=x(te(`wb${e.build}`,()=>new ue(i.armR*1.3,i.armR*1.3,.12,10).translate(0,-i.arm/2+.1,0)),gt(Y==="watch"?"#22202c":a),2);if(pt.el.add(ct),Y==="watch")break}else if(Y==="scarf"){let pt=x(te("scarf",()=>new Je(.22,.08,8,18)),gt(a));pt.rotation.x=Math.PI/2,pt.position.y=.02,F.add(pt);let ct=x(te("scarft",()=>new be(.14,.5,.06,2,.03)),gt(a));ct.position.set(.1,-.15,-.25),ct.rotation.x=.5,F.add(ct),U.userData.tail2=ct}else if(Y==="cape"){let pt=x(te(`cape${e.build}`,()=>new dn(i.torso[0]*1.2,i.torso[1]*1.5,1,4).translate(0,-i.torso[1]*.75,0)),gt(a,{side:je}),2),ct=new de;ct.position.set(0,i.torso[1],-i.torso[2]/2-.03),ct.add(pt),v.add(ct),U.userData.cape=ct}else if(Y==="backpack"){let pt=x(te(`bp${e.build}`,()=>new be(i.torso[0]*.7,i.torso[1]*.7,.25,3,.08)),gt(a));pt.position.set(0,i.torso[1]*.5,-i.torso[2]/2-.12),v.add(pt)}else if(Y==="moustache"||Y==="mustache"){let pt=x(te(`mou${D}`,()=>new Jn(D*.09,D*.5,4,8).rotateZ(Math.PI/2)),gt("#3a2616"),2);pt.position.set(0,D*.7,D*.98),U.add(pt)}else if(Y==="beard"){let pt=x(te(`beard${D}`,()=>new ye(D*.78,18,12,0,Math.PI*2,Math.PI*.45,Math.PI*.55).scale(1.05,1,.75)),u,2.5);pt.position.set(0,D*.78,D*.32),U.add(pt);let ct=x(te(`mou${D}`,()=>new Jn(D*.09,D*.5,4,8).rotateZ(Math.PI/2)),u,2);ct.position.set(0,D*.7,D*.98),U.add(ct)}else if(Y==="bumbag"){let pt=x(te(`bum${e.build}`,()=>new be(i.torso[0]*.5,.2,.18,2,.07)),gt(a==="#ffffff"||a==="#f8f8f8"?"#22202c":a));pt.position.set(i.torso[0]*.12,.08,i.torso[2]/2+.08),w.add(pt);let ct=ve(te(`strap${e.build}`,()=>new Je(i.torso[0]*.48,.025,6,24).scale(1,i.torso[2]/i.torso[0]*1.05,1).rotateX(Math.PI/2)),gt("#22202c"),{cast:!1});ct.position.y=.1,w.add(ct)}else if(Y==="bib"){let pt=new De(te("bib",()=>new dn(1,.78)),T.material);pt.scale.copy(T.scale),pt.position.set(0,i.torso[1]*.5,-i.torso[2]/2-.012),pt.rotation.y=Math.PI,v.add(pt),T.scale.multiplyScalar(1.3)}else if(Y==="bowtie")for(let pt of[-1,1]){let ct=x(te("bow",()=>new qe(.08,.16,4).rotateZ(Math.PI/2)),gt(a),2);ct.position.set(pt*.08,i.torso[1]-.06,i.torso[2]/2+.03),ct.rotation.z=pt>0?Math.PI:0,v.add(ct)}else if(Y==="tutu"){let pt=x(te(`tutu${e.build}`,()=>new ue(i.torso[0]*.55,i.torso[0]*.9,.18,16,1,!0)),gt("#ff9bd2",{side:je}),2);pt.position.y=-.05,w.add(pt)}}}let rt={phase:r()*6.28,t:r()*10,lean:0,j:{},look:0,lookPitch:0},_t=rt.j,kt=["hipLx","hipRx","kneeL","kneeR","ankL","ankR","shLx","shRx","shLz","shRz","elL","elR","twist","lean","bob","roll","headY","headX","bodyX","bodyY","bodyZ","hipSpread"];for(let Y of kt)_t[Y]=0;let Z={},Ft="idle",H=null,P=0;function dt(Y,pt=null){(Y!==Ft||pt!==H)&&(Ft=Y,H=pt,P=0)}function At(Y,pt={}){rt.t+=Y,P+=Y;let ct=rt.t;for(let Pt of kt)Z[Pt]=0;let bt="normal",wt=10;if(Ft==="run"||Ft==="jog"||Ft==="trudge"||Ft==="distracted"){let Pt=Math.max(.5,pt.speed??3.5),Xt=Math.max(.2,pt.rate??1),Qt=Ft==="trudge",Jt=Qt?1.7:(2.55+.14*(Pt-3.5))*Math.pow(Xt,.3)*(Ft==="jog"?.8:1);rt.phase+=Y*Math.PI*Jt;let pe=rt.phase,re=Math.sin(pe),Se=Math.cos(pe),ot=Qt?.4:Math.max(.45,Math.min(1,.62+.13*(Pt-3.5)));Z.hipLx=-ot*re,Z.hipRx=ot*re,Z.kneeL=.2+(Qt?.5:1.35)*Math.max(0,Se)*(.7+ot*.3),Z.kneeR=.2+(Qt?.5:1.35)*Math.max(0,-Se)*(.7+ot*.3),Z.ankL=-.2*re,Z.ankR=.2*re;let qt=Qt?.3:.75*ot+.15;Z.shLx=qt*re,Z.shRx=-qt*re,Z.shLz=-.18,Z.shRz=.18,Z.elL=Qt?-.5:-1.5,Z.elR=Qt?-.5:-1.5,Z.twist=.16*re,Z.roll=.05*re,Z.bob=(Qt?.03:.11)*(Math.abs(Se)-.4),Z.lean=(Qt?.05:.16)+Math.max(-.25,Math.min(.45,(pt.slope??0)*1.6)),Z.headX=-Z.lean*.6,Z.headY=-.08*re,wt=18,bt=pt.effort>.6?"effort":pt.effort>.3?"pant":"normal",Qt&&(Z.headX=.35,Z.lean=.25,bt="sad"),Ft==="distracted"&&(Z.headY=pt.lookYaw??.9,Z.headX=-.15,Z.twist+=(pt.lookYaw??.9)*.3,bt="love")}else if(Ft==="ready")Z.hipLx=-.5,Z.hipRx=.35,Z.kneeL=.6,Z.kneeR=.5,Z.lean=.35,Z.bob=-.12,Z.shLx=.5,Z.shRx=-.6,Z.elL=-1.3,Z.elR=-1.3,Z.headX=-.25,Z.bob+=Math.sin(ct*3)*.01,bt="effort";else if(Ft==="wave")Z.shRz=2.7,Z.elR=.2*Math.sin(ct*9)-.25,Z.shRx=Math.sin(ct*9)*.25,Z.shLz=-.3,Z.elL=-.4,Z.bob=Math.abs(Math.sin(ct*4))*.05,Z.headY=.1*Math.sin(ct*2),bt="happy";else if(Ft==="pose"){let Pt=H||"flex";if(Pt==="flex")Z.shLz=-1.5,Z.shRz=1.5,Z.elL=-1.9-Math.sin(ct*6)*.15,Z.elR=-1.9-Math.sin(ct*6+1)*.15,Z.shLx=-0,Z.bob=-.06+Math.abs(Math.sin(ct*3))*.03,Z.hipSpread=.25,Z.kneeL=.3,Z.kneeR=.3,bt="effort";else if(Pt==="point")Z.shRx=-1.5,Z.elR=0,Z.shLz=-.3,Z.elL=-1.6,Z.shLx=-.3,Z.headX=-.1,Z.lean=-.05,bt="happy",Z.bob=Math.sin(ct*5)*.02;else if(Pt==="stretch")Z.hipRx=-.2,Z.kneeR=2.3,Z.shRx=.8,Z.elR=-.6,Z.shLz=-2.6,Z.lean=.08+Math.sin(ct*2)*.04,bt="smug";else if(Pt==="spin"){let Xt=Math.min(1,P/1.1);Z.bodyY=(1-(1-Xt)**2)*Math.PI*4,Z.shLz=Xt<1?-1.3:-2.6,Z.shRz=Xt<1?1.3:2.6,Z.bob=Xt<1?Math.abs(Math.sin(ct*7))*.2:Math.abs(Math.sin(ct*5))*.12,bt="happy"}else Pt==="bow"?(Z.lean=.75+Math.sin(ct*2)*.05,Z.shLx=.4,Z.shRx=-1.2,Z.elR=-1.6,Z.shRz=.4,Z.headX=-.2,bt="happy"):(Z.shLz=-2.5,Z.shRz=2.5,Z.bob=Math.abs(Math.sin(ct*6))*.25,bt="happy");bt==="smug"&&(bt="normal")}else if(Ft==="celebrate"){let Pt=H||"jump";if(Pt==="jump"){let Xt=Math.abs(Math.sin(ct*5.5));Z.bob=Xt*.55,Z.shLz=-2.6-Xt*.3,Z.shRz=2.6+Xt*.3,Z.elL=-.2,Z.elR=-.2,Z.kneeL=Z.kneeR=(1-Xt)*.8,Z.hipLx=Z.hipRx=-(1-Xt)*.4,bt="happy",wt=22}else if(Pt==="fist"){let Xt=Math.sin(ct*7);Z.shRx=-2.6,Z.elR=-.4+Xt*.4,Z.shLx=.4,Z.elL=-1.8,Z.bob=Math.abs(Xt)*.08,Z.lean=-.1,bt="happy"}else Pt==="kneel"?(Z.lean=.85,Z.kneeL=Z.kneeR=.7,Z.hipLx=Z.hipRx=-.6,Z.bob=-.25+Math.sin(ct*7)*.025,Z.shLx=Z.shRx=-.55,Z.elL=Z.elR=-.1,Z.shLz=-.15,Z.shRz=.15,Z.headX=-.6,bt="pant"):Pt==="collapse"?(Z.bodyX=-Math.PI/2+.05,Z.shLz=-2.2,Z.shRz=2.2,Z.hipSpread=.4,Z.kneeL=.3+Math.max(0,Math.sin(ct*9))*.4*(Math.sin(ct*.7)>.6?1:0),Z.kneeR=.2,bt="dead",wt=4):Pt==="shrug"&&(Z.shLz=-.9,Z.shRz=.9,Z.elL=-1.4,Z.elR=-1.4,Z.shLx=-.5,Z.shRx=-.5,Z.headX=.1,Z.headY=Math.sin(ct*1.5)*.3,bt="sad")}else Z.bob=Math.sin(ct*2)*.015,Z.shLz=-.18,Z.shRz=.18,Z.elL=-.25,Z.elR=-.25,Z.headY=Math.sin(ct*.7)*.25,Z.lean=.02,Z.kneeL=Z.kneeR=.05;pt.lookYaw!=null&&Ft!=="distracted"&&(Z.headY+=pt.lookYaw);let Rt=1-Math.exp(-wt*Y);for(let Pt of kt){if(Pt==="bodyY"&&Ft==="pose"&&H==="spin"){_t[Pt]=Z[Pt];continue}_t[Pt]+=(Z[Pt]-_t[Pt])*Rt}if(Ft==="pose"&&H==="spin"||(_t.bodyY=_t.bodyY%(Math.PI*2),_t.bodyY>Math.PI&&(_t.bodyY-=Math.PI*2)),X[0].hp.rotation.set(_t.hipLx,0,-_t.hipSpread),X[1].hp.rotation.set(_t.hipRx,0,_t.hipSpread),X[0].kn.rotation.x=_t.kneeL,X[1].kn.rotation.x=_t.kneeR,X[0].an.rotation.x=_t.ankL-_t.kneeL*.35,X[1].an.rotation.x=_t.ankR-_t.kneeR*.35,O[0].sh.rotation.set(_t.shLx,0,_t.shLz-0),O[1].sh.rotation.set(_t.shRx,0,_t.shRz),O[0].el.rotation.x=_t.elL,O[1].el.rotation.x=_t.elR,v.rotation.set(_t.lean,_t.twist,0),w.rotation.set(0,-_t.twist*.5,_t.roll),w.position.y=R+_t.bob,U.rotation.set(_t.headX,_t.headY,0),k.rotation.set(_t.bodyX,_t.bodyY,_t.bodyZ),k.position.y+=((Ft==="celebrate"&&H==="collapse"?i.torso[2]*.5+.08:0)-k.position.y)*Rt,U.userData.bobble&&(U.userData.bobble.position.y=D*2.45+Math.abs(Math.sin(rt.phase))*.04),U.userData.pony&&(U.userData.pony.rotation.x=.4+Math.sin(rt.phase*2)*.35),U.userData.tail&&(U.userData.tail.rotation.x=.6+Math.sin(rt.phase*2)*.3),U.userData.cape&&(U.userData.cape.rotation.x=-.3-Math.min(1.1,(pt.speed??0)*.15)+Math.sin(ct*8)*.08),pt.expr&&(bt=pt.expr),it(bt),nt.visible){nt.position.y=zt+.45+Math.sin(ct*6)*.08;let Pt=.9+Math.sin(ct*9)*.05;nt.scale.set(Pt,Pt,Pt)}}function It(){for(let Y of p)Y.dispose?.();nt.material.dispose()}return{id:n.id,info:n,root:y,update:At,set:dt,setPop:St,setExpr:it,setProp:V,dispose:It,height:zt,hipH:R,get state(){return Ft},get variant(){return H}}}var av=(n,t,e)=>{let i=Math.max(0,Math.min(1,(e-n)/(t-n)));return i*i*(3-2*i)};function Ff(n,t,e){let i=n.timeMap,s={};e.forEach((M,v)=>s[M.id]=M.lane??v+1);let r=n.runners.length,o=Object.values(s),a=(Math.min(...o)+Math.max(...o))/2,l=Math.min(1.25,(Ve-1.6)/Math.max(1,r-1)),h=n.runners.map((M,v)=>{let b=Ii(i,M.officialS),I=((s[M.id]??v+1)-a)*l;return{...M,finishB:b,base:I,seed:v*1.7+.3}}),p=Object.fromEntries(h.map(M=>[M.id,M])),g=[...h].sort((M,v)=>M.officialS-v.officialS).map(M=>M.id),d=Object.fromEntries(g.map((M,v)=>[M,v+1])),c=p[g[0]],u=g.map(M=>p[M].officialS),_=p[g[0]].finishB,m=p[g.at(-1)].finishB,f=r>1&&u[1]-u[0]<=1.5,S=M=>Math.max(.05,(_s(i,M+.05)-_s(i,M-.05))/.1),x=new Map;function y(M){let v=Math.round(M*1e3);if(x.has(v))return x.get(v);let b=M<=0?0:_s(i,M),I=M<=0?4:S(M),T={b:M,raceS:b,rate:I,byId:{},order:[]};for(let B of h){let z=Gn(B.progress,b),W=b>=B.officialS&&M>=B.finishB-1e-6,it=(Gn(B.progress,b+1)-Gn(B.progress,Math.max(0,b-1)))/(b>1?2:1);T.byId[B.id]={id:B.id,m:z,finished:W,vRace:W?0:it,place:d[B.id]}}for(let B of h){let z=T.byId[B.id],W=z.m,it=B.base;it+=.22*Math.sin(z.m/85+B.seed);for(let Lt of h){if(Lt===B)continue;let O=T.byId[Lt.id],X=z.m-O.m;if(Math.abs(X)<4&&!z.finished&&!O.finished){let J=(1-Math.abs(X)/4)*.32;it+=Math.sign(B.base-Lt.base||B.seed-Lt.seed)*J}}let D=0;if(z.finished){let Lt=M-B.finishB,O=(Gn(B.progress,B.officialS)-Gn(B.progress,B.officialS-2))/2*S(B.finishB),X=Math.min(14,Math.max(4,O)),J=1.6;W=5e3+(Lt<J?X*(Lt-Lt*Lt/(2*J)):X*J/2+Math.min(10+d[B.id]*1.5,(Lt-J)*.9));let st=(d[B.id]-(r+1)/2)*1.6;it=it+(st-it)*av(0,2.5,Lt),D=Lt}let ft=t.sample(W,B.id);it*=1-ft.div,it=Math.max(-Ve/2+.6,Math.min(Ve/2-.6,it)),Object.assign(z,{mVis:W,x:ft.x+ft.rx*it,z:ft.z+ft.rz*it,y:t.heightAt(ft.x+ft.rx*it,ft.z+ft.rz*it)+.16,tx:ft.tx,tz:ft.tz,slope:ft.slope,div:ft.div,divInfo:ft.divInfo,lat:it,post:D,distToFinish:Math.max(0,5e3-z.m)})}let E=h.filter(B=>T.byId[B.id].finished).sort((B,z)=>B.officialS-z.officialS),F=h.filter(B=>!T.byId[B.id].finished).sort((B,z)=>T.byId[z.id].m-T.byId[B.id].m||B.officialS-z.officialS);T.order=[...E,...F].map(B=>B.id),T.leader=T.byId[T.order[0]];let U=p[T.order[0]];for(let[B,z]of T.order.entries()){let W=T.byId[z];if(W.finished)W.gapText=B===0?Ua(p[z].officialS):`+${(p[z].officialS-c.officialS).toFixed(0)}s`;else if(B===0)W.gapText="LEADER";else{let it=T.byId[T.order[0]].finished?c:U;W.gapText=`+${Math.max(0,b-Un(it.progress,W.m)).toFixed(1)}s`}}return x.size>400&&x.clear(),x.set(v,T),T}return{stateAt:y,orderAt:M=>y(M).order,gapM:(M,v,b)=>{let I=y(b);return Math.abs((I.byId[M]?.m??0)-(I.byId[v]?.m??0))},finishedAt:(M,v)=>y(v).byId[M]?.finished,allFinishedAt:M=>M>m,firstFinishB:_,lastFinishB:m,photoFinish:f,finishOrder:g,place:d,byId:p,R:h,rateAt:S,durationS:i.durationS}}function Ua(n){let t=Math.floor(n/60),e=Math.round(n-t*60);return`${t}:${String(e).padStart(2,"0")}`}var lv=1.3,cv=2.4,hv=.2,uv=16/9,Bf=n=>n*180/Math.PI,Of=(n,t=hv)=>Bf(2*Math.atan(cv/(2*t*n)));function yh({plan:n,sim:t,backedIds:e=[],C:i,world:s,funfair:r}){let o=[],a=n.timeMap,l=E=>Ii(a,Math.min(...n.runners.map(F=>Un(F.progress,E)))),h=E=>E<=0?4:t.rateAt(E),p=(E,F)=>{let U=0,B=0;for(let z=E;z<=F;z+=Math.max(.5,(F-E)/12))U+=h(z),B++;return U/Math.max(1,B)},g=t.firstFinishB,d=t.lastFinishB,c=E=>{let F=t.stateAt(Math.max(0,E)),U=F.order.filter(z=>!F.byId[z].finished),B=U[0]??F.order[0];return(U.length?U:F.order).filter(z=>Math.abs(F.byId[z].m-F.byId[B].m)<120)},u=E=>{let F=t.stateAt(Math.max(0,E)),U=F.order.filter(z=>!F.byId[z].finished),B=U[0]??F.order[0];return(U.length?U:F.order).filter(z=>Math.abs(F.byId[z].m-F.byId[B].m)<20)},_=(E,F)=>{let U=t.stateAt(Math.max(0,F));return U.order.filter(B=>!U.byId[B].finished&&Math.abs(U.byId[B].m-U.byId[E].m)<20)},m=.25+8;for(let E=.25;E<30;E+=.25)if(h(E)>7){m=Math.max(m,E);break}let f=g-6;for(let E=g-6;E>m;E-=.25)if(h(E)>6){f=E;break}let S=Math.max(f,Math.min(g-6,l(4700)));o.push({type:"heli",a:-8.5,b:-3.2,hard:!0}),o.push({type:"startgo",a:-3.2,b:.25}),o.push({type:"side",a:.25,b:m,hard:!0,ids:null});let x=[],y=n.runners.find(E=>E.diversions?.length);if(y&&r){let E=y.diversions[0],F=Ii(a,Un(y.progress,E.fromM))-.5,U=Ii(a,Un(y.progress,E.toM))+.8;x.push({type:"side",tag:"fair",a:F,b:Math.max(F+8,U),ids:[y.id],fair:!0,prio:3})}for(let E of Za){let F=l(E);x.push({type:"headon",tag:"hill",a:F-1.5,b:F+8,prio:2})}x.sort((E,F)=>F.prio-E.prio);let k=[];for(let E of x){let F=Math.min(f,E.b),U=Math.max(m,Math.min(E.a,F-8));F-U<6||k.some(B=>U<B.b&&F>B.a)||k.push({...E,a:U,b:F})}k.sort((E,F)=>E.a-F.a);let w=["side","drone","headon"],C=0,R=0,M=(E,F)=>{let U=F-E;if(U<=.01)return;if(U<8&&o.length>=3){o.at(-1).b=F;return}let B=Math.max(1,Math.round(U/11));for(let z=0;z<B;z++){let W=E+U*z/B,it=E+U*(z+1)/B,D=(W+it)/2,ft=w[C++%w.length];ft===o.at(-1)?.type&&(ft=w[C++%w.length]);let Lt=t.stateAt(D),O=Lt.byId[Lt.order[0]],X=e.filter(V=>Lt.byId[V]&&!Lt.byId[V].finished&&O.m-Lt.byId[V].m>40),J=null;X.length&&R++%2===0&&(J=_(X[R%X.length],D),ft=ft==="drone"?"side":ft),o.push({type:ft,a:W,b:it,ids:J})}},v=m;for(let E of k)M(v,E.a),o.push(E),v=E.b;M(v,f);{let E=S-f;if(E>=8){let F=Math.max(1,Math.round(E/11));for(let U=0;U<F;U++)o.push({type:U%2?"headon":"side",a:f+E*U/F,b:f+E*(U+1)/F})}o.at(-1).type==="headon"&&o.at(-1).a>=f?o.at(-1).b=g-6:o.push({type:"headon",a:Math.max(f,o.at(-1).b),b:g-6})}if(o.at(-1).b-o.at(-1).a<6&&o.length>4){let E=o.pop();o.at(-1).b=E.b}o.push({type:"finishcam",a:g-6,b:d+2.5,hard:!0}),o.push({type:"celebrate",a:d+2.5,b:d+90});let b=(n.events||[]).filter(E=>(E.type==="lead_change"||E.type==="overtake"&&(e.includes(E.by)||e.includes(E.on)))&&E.broadcastS>m+2&&E.broadcastS<f-3),I=-1e9;for(let E of b){let F=E.type==="lead_change"?[E.to,E.from]:[E.by,E.on];if(E.broadcastS-I<12)continue;let U=o.findIndex(W=>E.broadcastS>=W.a&&E.broadcastS<W.b);if(U<0)continue;let B=o[U];if(["heli","startgo","finishcam","celebrate","drone"].includes(B.type)||B.interrupt||B.tag||B.hard)continue;let z=B.ids||u((B.a+B.b)/2);if(!F.every(W=>z.includes(W))){if(E.broadcastS-B.a<8||B.b-E.broadcastS<8)Object.assign(B,{type:"side",ids:F,interrupt:E.type});else{let W=E.broadcastS-1.8;o.splice(U,1,{...B,b:W},{type:"side",a:W,b:B.b,ids:F,interrupt:E.type})}I=E.broadcastS}}for(let E of o)if(E.rate=p(Math.max(0,E.a),Math.max(.5,E.b)),E.ids=E.ids||null,E.type==="side"||E.type==="headon"||E.type==="drone"){let F=E.ids||(E.type==="drone"?c((E.a+E.b)/2):u((E.a+E.b)/2));E.type==="drone"&&!E.ids&&(E.pack=!0);let U=0;for(let B=0;B<=6;B++){let z=t.stateAt(Math.max(0,E.a+(E.b-E.a)*B/6)),W=F.map(it=>z.byId[it]).filter(it=>it&&!it.finished).map(it=>it.m);W.length&&(U=Math.max(U,Math.max(...W)-Math.min(...W)))}if(E.spread=U,E.type==="side"){E.dist=Gi.clamp(14+1.7*E.rate,18,48);let B=Of(E.dist),z=U+7,W=Bf(2*Math.atan(z/(2*uv*E.dist)));E.fov=Gi.clamp(Math.max(B,W),10,34),E.side=T(E,F)}else E.type==="headon"?(E.dist=Gi.clamp(16+1.9*E.rate,20,52)+U*.6,E.fov=Gi.clamp(Of(E.dist-U*.3,.2),10,30)):(E.back=30+2.2*E.rate+U*.35,E.height=16+1.9*E.rate+U*.25,E.fov=40,E.side=T(E,F))}return o;function T(E,F){let U=V=>{let st=t.stateAt(Math.max(0,V)),nt=F.map(ht=>st.byId[ht]).filter(Boolean),St=nt.reduce((ht,yt)=>ht+yt.x,0)/nt.length,zt=nt.reduce((ht,yt)=>ht+yt.z,0)/nt.length;return[St,zt]},B=U(E.a),z=U((E.a+E.b)/2),W=U(E.b),it=(z[0]-B[0])*(W[1]-z[1])-(z[1]-B[1])*(W[0]-z[0]),D=E.fair?null:it>0?1:-1;if(E.fair&&r){let V=r.anchors.center,st=[W[0]-B[0],W[1]-B[1]],nt=[-st[1],st[0]];return D=(V.x-z[0])*nt[0]+(V.z-z[1])*nt[1]>0?-1:1,D}let ft=[W[0]-B[0],W[1]-B[1]],Lt=Math.hypot(...ft)||1,O=[-ft[1]/Lt,ft[0]/Lt],X=E.dist||40,J=V=>s.inPark(z[0]+O[0]*X*V,z[1]+O[1]*X*V);return!J(D)&&J(-D)&&(D=-D),D}}function zf({camera:n,C:t,sim:e,world:i,funfair:s}){let r={pos:new $,look:new $},o=new $(0,1,0),a=null,l=null,h=!0,p=null,g=new Fn,d=new we;function c(x,y){let k=e.stateAt(Math.max(0,y)),w=(x||k.order.slice(0,1)).map(M=>k.byId[M]).filter(Boolean),C=w.filter(M=>!M.finished);C.length&&(w=C);let R=new $;for(let M of w)R.add(new $(M.x,M.y,M.z));return R.divideScalar(Math.max(1,w.length))}function u(x,y,k){let w=new $,C=0;for(let b=-2;b<=2;b++)w.add(c(x,y+b*k*.5)),C++;w.divideScalar(C);let R=c(x,y-k*1.5),M=c(x,y+k*1.5),v=new $(M.x-R.x,0,M.z-R.z);if(v.lengthSq()<1e-4){let b=x?.[0]??e.stateAt(Math.max(0,y)).order[0],I=e.stateAt(Math.max(0,y)).byId[b];v.set(I.tx,0,I.tz)}return v.normalize(),{c:w,h:v,r:new $(-v.z,0,v.x)}}let _=(x,y)=>{if(x.ids)return x.ids;if(!x._group){let k=(x.a+x.b)/2,w=e.stateAt(Math.max(0,k)),C=w.order.filter(M=>!w.byId[M].finished),R=C[0]??w.order[0];x._group=(C.length?C:w.order).filter(M=>Math.abs(w.byId[M].m-w.byId[R].m)<(x.pack?120:20)),x._group.length||(x._group=[R])}return x._group};function m(x,y){let k=i.anchors.finish,w=i.anchors.start,C,R,M=40,v=x.rate>8?2.2:1.2;switch(x.type){case"heli":{let b=(y-x.a)/Math.max(.01,x.b-x.a),I=new $(150,0,0),T=new $(w.x,w.y,w.z),E=xh(Math.min(1,b)),F=-1.2+E*1.6,U=420-E*360;C=new $(I.x+Math.cos(F)*U,170-E*140,I.z+Math.sin(F)*U).lerp(new $(T.x-w.tx*40+w.rx*25,T.y+22,T.z-w.tz*40+w.rz*25),E*E),R=I.clone().setY(10).lerp(T,Math.min(1,E*1.3)),M=50;break}case"startgo":{let b=new $(w.x,w.y,w.z),I=new $(w.tx,0,w.tz),T=new $(-I.z,0,I.x);C=b.clone().addScaledVector(I,10.5).addScaledVector(T,2.6).add(o.clone().multiplyScalar(1.9)),R=b.clone().add(o.clone().multiplyScalar(1.3)).addScaledVector(I,-1),M=42;break}case"side":{let{c:b,h:I,r:T}=u(_(x,y),y,v);C=b.clone().addScaledVector(T,x.side*x.dist).addScaledVector(I,x.dist*.18).add(o.clone().multiplyScalar(2.2+x.dist*.08)),R=b.clone().add(o.clone().multiplyScalar(1.1)),M=x.fov;break}case"headon":{let{c:b,h:I,r:T}=u(_(x,y),y,v);C=b.clone().addScaledVector(I,x.dist).addScaledVector(T,1.5).add(o.clone().multiplyScalar(1.6+x.dist*.06)),R=b.clone().add(o.clone().multiplyScalar(1.15)),M=x.fov;break}case"drone":{let{c:b,h:I,r:T}=u(_(x,y),y,v*1.3);C=b.clone().addScaledVector(I,-x.back).addScaledVector(T,x.side*x.back*.5).add(o.clone().multiplyScalar(x.height)),R=b.clone().addScaledVector(I,x.back*.15),M=x.fov;break}case"finishcam":{let b=new $(k.tx,0,k.tz),I=new $(-b.z,0,b.x);C=new $(k.x,k.y,k.z).addScaledVector(b,16).addScaledVector(I,-4).add(o.clone().multiplyScalar(2.6));let T=e.stateAt(Math.max(0,y)),E=T.order.map(U=>T.byId[U]).find(U=>!U.finished),F=new $(k.x,k.y+2.2,k.z);R=E?F.clone().lerp(new $(E.x,E.y+1.3,E.z),Math.min(.8,18/Math.max(18,E.distToFinish))):F,M=34,x.smoothLook=!0;break}case"celebrate":{let b=e.stateAt(Math.max(0,y)),I=new $;for(let U of b.order)I.add(new $(b.byId[U].x,b.byId[U].y,b.byId[U].z));I.divideScalar(b.order.length);let T=new $(k.tx,0,k.tz),E=new $(-T.z,0,T.x),F=Math.sin((y-x.a)*.08)*.5;C=I.clone().addScaledVector(T,-11*Math.cos(F)).addScaledVector(E,11*Math.sin(F)).add(o.clone().multiplyScalar(2.8)),R=I.clone().add(o.clone().multiplyScalar(1.2)),M=44;break}default:{let{c:b,h:I}=u(_(x,y),y,v);C=b.clone().addScaledVector(I,-12).add(o.clone().multiplyScalar(5)),R=b.clone()}}return{pos:C,look:R,fov:M}}function f(x,y,k){let w=k.find(T=>x>=T.a&&x<T.b)||k.at(-1),C=!1;if(w!==a){let T=h||!!w.hard;l=T?null:{from:{pos:n.position.clone(),quat:n.quaternion.clone(),fov:n.fov},t0:x},C=T,h=!1,a=w,p=null}let R=m(w,x),M=t.heightAt(R.pos.x,R.pos.z)+1.2;R.pos.y<M&&(R.pos.y=M),w.smoothLook&&((!p||y<=0)&&(p=p||R.look.clone()),p.lerp(R.look,1-Math.exp(-3*y)),R.look.copy(p)),r.pos.copy(R.pos),r.look.copy(R.look),d.lookAt(R.pos,R.look,o),g.setFromRotationMatrix(d);let v=R.pos,b=g,I=R.fov;if(l){let T=(x-l.t0)/lv;if(T>=1||T<0)l=null;else{let E=T*T*T*(T*(T*6-15)+10),F=Math.sin(Math.PI*E)*Math.min(12,l.from.pos.distanceTo(R.pos)*.12);v=l.from.pos.clone().lerp(R.pos,E).add(o.clone().multiplyScalar(F)),b=l.from.quat.clone().slerp(g,E),I=l.from.fov+(R.fov-l.from.fov)*E}}return n.position.copy(v),n.quaternion.copy(b),Math.abs(n.fov-I)>.001&&(n.fov=I,n.updateProjectionMatrix()),{shot:w,cut:C}}function S(x=!0){a=null,l=null,h=!!x,p=null}return{update:f,reset:S,evaluate:m,get shot(){return a},get gliding(){return!!l},cam:r}}function xh(n){return n<.5?2*n*n:1-Math.pow(-2*n+2,2)/2}var Na=new Set(["drone","heli"]);var fv=`
.mr-hud{position:absolute;inset:0;pointer-events:none;overflow:hidden;font-family:"Lilita One","Arial Black",Impact,sans-serif;color:#fff;
  --ink:#1a1420;--blue:#2e6fe0;--blue2:#1d4fb8;--yellow:#ffd23f;--pink:#ff3d8b;--u:calc(min(1vw,1.78vh));letter-spacing:.02em}
.mr-hud *{box-sizing:border-box}
.mr-num{color:var(--yellow);-webkit-text-stroke:calc(var(--u)*.38) var(--ink);paint-order:stroke fill;text-shadow:0 calc(var(--u)*.3) 0 rgba(0,0,0,.35)}
.mr-panel{background:linear-gradient(180deg,#3d86ff,#2457c8);border:calc(var(--u)*.32) solid var(--ink);border-radius:calc(var(--u)*.9);transform:skewX(-10deg);box-shadow:0 calc(var(--u)*.45) 0 rgba(0,0,0,.35)}
.mr-panel>.mr-unskew{transform:skewX(10deg)}
.mr-top{position:absolute;left:calc(var(--u)*2.2);top:calc(var(--u)*1.8);display:flex}
.mr-pill{display:flex;align-items:center;gap:calc(var(--u)*.7);background:rgba(20,22,48,.78);border-radius:99px;padding:calc(var(--u)*.35) calc(var(--u)*1.1);font-size:calc(var(--u)*1.35);line-height:1.2}
.mr-pill b{font-weight:400;color:var(--yellow)}
.mr-pill .mr-dot{width:calc(var(--u)*.7);height:calc(var(--u)*.7);border-radius:50%;background:#ff3d5a;display:inline-block}
.mr-pill .mr-sep{width:1px;align-self:stretch;background:rgba(255,255,255,.3)}
.mr-pill .mr-clk{font-family:Nunito,sans-serif;font-weight:800;font-size:.8em;opacity:.65}
.mr-live{background:var(--pink);padding:calc(var(--u)*.5) calc(var(--u)*1.2);font-size:calc(var(--u)*1.5);display:flex;align-items:center;gap:calc(var(--u)*.5)}
.mr-live i{width:calc(var(--u)*.9);height:calc(var(--u)*.9);border-radius:50%;background:#fff;display:inline-block;animation:mrblink 1s infinite}
@keyframes mrblink{50%{opacity:.25}}
.mr-clock{padding:calc(var(--u)*.2) calc(var(--u)*1.4);font-size:calc(var(--u)*2.9);line-height:1.1;min-width:calc(var(--u)*12);text-align:center}
.mr-lap{padding:calc(var(--u)*.2) calc(var(--u)*1.2);display:flex;align-items:center;gap:calc(var(--u)*.6);font-size:calc(var(--u)*1.4)}
.mr-lap b{font-size:calc(var(--u)*2.9);font-weight:400}
.mr-dist{padding:calc(var(--u)*.3) calc(var(--u)*1.2);font-size:calc(var(--u)*1.4);display:flex;flex-direction:column;justify-content:center;min-width:calc(var(--u)*11)}
.mr-bar{height:calc(var(--u)*.7);background:rgba(0,0,0,.35);border-radius:9px;margin-top:calc(var(--u)*.3);overflow:hidden;border:2px solid var(--ink)}
.mr-bar>i{display:block;height:100%;background:var(--yellow);width:0}
.mr-tower{position:absolute;left:calc(var(--u)*2.2);top:calc(var(--u)*5.2);width:calc(var(--u)*19)}
.mr-row{position:absolute;left:0;width:100%;height:calc(var(--u)*2.9);display:flex;align-items:center;transition:transform .55s cubic-bezier(.3,1.2,.5,1),opacity .35s}
.mr-row.off{opacity:0}
.mr-row .mr-pos{width:calc(var(--u)*3.8);font-size:calc(var(--u)*2.2);text-align:center;line-height:1}
.mr-row .mr-pos small{font-size:.42em;margin-right:2px;vertical-align:middle;color:#fff}
.mr-row .mr-pos sup{font-size:.45em;vertical-align:top;margin-left:1px}
.mr-row .mr-card{flex:1;min-width:0;height:calc(var(--u)*2.4);display:flex;align-items:center;padding:0 calc(var(--u)*.6) 0 0;background:rgba(20,22,48,.72);border-radius:calc(var(--u)*.45);transform:skewX(-10deg);overflow:hidden}
.mr-row .mr-card>*{transform:skewX(10deg)}
.mr-row .mr-chip{width:calc(var(--u)*.8);align-self:stretch;margin-right:calc(var(--u)*.6)}
.mr-row .mr-name{flex:1;min-width:0;font-size:calc(var(--u)*1.25);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.mr-row .mr-gap{font-family:Nunito,"Arial Rounded MT Bold",sans-serif;font-weight:900;font-size:calc(var(--u)*.95);color:#cfe0ff;margin-left:calc(var(--u)*.5)}
.mr-row.lead .mr-card{background:linear-gradient(90deg,rgba(255,210,63,.95),rgba(255,160,40,.92));color:var(--ink)}
.mr-row.lead .mr-gap{color:var(--ink)}
.mr-row.fin .mr-gap{color:#7dff9a}
.mr-row.lead.fin .mr-gap{color:var(--ink)}
.mr-badge{display:inline-flex;align-items:center;gap:.2em;background:var(--bc,#fff);color:var(--ink);border:calc(var(--u)*.18) solid var(--ink);border-radius:99px;font-size:calc(var(--u)*1.05);padding:.05em .55em;margin-left:calc(var(--u)*.35);line-height:1.2;box-shadow:0 calc(var(--u)*.15) 0 rgba(0,0,0,.35);white-space:nowrap}
.mr-inis{display:inline-flex;gap:calc(var(--u)*.2);margin-left:calc(var(--u)*.4);flex-shrink:0}
.mr-ini{display:inline-flex;align-items:center;justify-content:center;width:calc(var(--u)*1.25);height:calc(var(--u)*1.25);border-radius:50%;background:var(--bc);color:var(--ink);font-family:Nunito,sans-serif;font-weight:900;font-size:calc(var(--u)*.8);line-height:1;border:1px solid rgba(26,20,32,.6)}

.mr-tag .mr-tb{display:inline-flex;gap:calc(var(--u)*.15)}
.mr-title{position:absolute;left:41%;top:9%;width:max-content;max-width:64%;transform:translate(-50%,-30%) scale(.8);opacity:0;text-align:center;transition:all .6s cubic-bezier(.3,1.5,.5,1)}
.mr-title.on{opacity:1;transform:translate(-50%,0) scale(1)}
.mr-title .mr-t0{display:inline-block;font-size:calc(var(--u)*1.7);background:var(--pink);padding:.1em .9em;border:calc(var(--u)*.3) solid var(--ink);border-radius:calc(var(--u)*.8);transform:skewX(-10deg)}
.mr-title .mr-t1{display:block;white-space:normal;margin-top:calc(var(--u)*.6);font-size:calc(var(--u)*5.2);line-height:1.02;color:#fff;-webkit-text-stroke:calc(var(--u)*.45) var(--ink);paint-order:stroke fill;text-shadow:0 calc(var(--u)*.5) 0 rgba(0,0,0,.35)}
.mr-title .mr-t2{display:inline-block;margin-top:calc(var(--u)*.8);font-size:calc(var(--u)*2.1);color:var(--ink);background:var(--yellow);padding:.1em .9em;border:calc(var(--u)*.3) solid var(--ink);border-radius:calc(var(--u)*.8);transform:skewX(-10deg)}
.mr-pcap{position:absolute;left:50%;bottom:19%;transform:translateX(-50%) skewX(-10deg);background:var(--ink);color:#fff;border:calc(var(--u)*.3) solid #fff;padding:calc(var(--u)*.4) calc(var(--u)*2);font-size:calc(var(--u)*2.2);white-space:nowrap}
.mr-market{position:absolute;inset:0;opacity:0;transition:opacity .5s;background:radial-gradient(ellipse at center,rgba(0,0,0,0) 45%,rgba(20,10,40,.55) 100%)}
.mr-market.on{opacity:1}
.mr-market .mr-m1{position:absolute;left:60%;top:15%;transform:translate(-50%,-50%) skewX(-10deg) rotate(-2deg);background:linear-gradient(180deg,#3ddc84,#1f9d5a);border:calc(var(--u)*.45) solid var(--ink);border-radius:calc(var(--u)*1.2);padding:calc(var(--u)*.35) calc(var(--u)*1.8);font-size:calc(var(--u)*3.5);white-space:nowrap;color:#fff;-webkit-text-stroke:calc(var(--u)*.35) var(--ink);paint-order:stroke fill;box-shadow:0 calc(var(--u)*.7) 0 rgba(0,0,0,.35);animation:mrpulse 1.6s ease-in-out infinite}
@keyframes mrpulse{50%{transform:translate(-50%,-50%) skewX(-10deg) rotate(-2deg) scale(1.04)}}
.mr-market .mr-m2{position:absolute;left:60%;top:22%;transform:translateX(-50%);font-size:calc(var(--u)*2.3);-webkit-text-stroke:calc(var(--u)*.3) var(--ink);paint-order:stroke fill;white-space:nowrap}
.mr-market .mr-mt{position:absolute;right:calc(var(--u)*3);top:calc(var(--u)*25);font-size:calc(var(--u)*1.6);background:var(--ink);padding:.2em .8em;border-radius:calc(var(--u)*.6)}
.mr-map{position:absolute;right:calc(var(--u)*2.2);top:calc(var(--u)*1.8);width:calc(var(--u)*11);height:calc(var(--u)*13.5);padding:calc(var(--u)*.4);transition:opacity .5s}
.mr-hud.mr-nomap .mr-map{opacity:0}
.mr-map canvas{position:relative;width:100%;height:100%;display:block}
.mr-mapwrap{position:absolute;inset:0;background:rgba(255,255,255,.72);border-radius:calc(var(--u)*1)}
.mr-banner{position:absolute;left:50%;top:13%;transform:translate(-50%,-50%) scale(0);text-align:center;white-space:nowrap;transition:transform .35s cubic-bezier(.3,1.7,.5,1)}
.mr-banner.on{transform:translate(-50%,-50%) scale(1)}
.mr-banner .mr-b1{display:inline-block;padding:calc(var(--u)*.2) calc(var(--u)*1.6);font-size:calc(var(--u)*2.8);line-height:1.05;background:var(--pink);border:calc(var(--u)*.4) solid var(--ink);border-radius:calc(var(--u)*1.2);transform:skewX(-10deg) rotate(-3deg);box-shadow:0 calc(var(--u)*.6) 0 rgba(0,0,0,.35)}
.mr-banner .mr-b1 span{display:inline-block;transform:skewX(10deg)}
.mr-banner .mr-b2{display:block;margin-top:calc(var(--u)*.6);font-size:calc(var(--u)*1.8);-webkit-text-stroke:calc(var(--u)*.3) var(--ink);paint-order:stroke fill}
.mr-tags{position:absolute;inset:0}
.mr-tag{position:absolute;left:0;top:0;transform:translate(-50%,-100%);white-space:nowrap;display:flex;align-items:center;gap:calc(var(--u)*.3);font-size:calc(var(--u)*1.05);will-change:transform;transition:opacity .25s}
.mr-tag .mr-tp{background:var(--ink);color:var(--yellow);border-radius:calc(var(--u)*.5);padding:0 calc(var(--u)*.45);font-size:calc(var(--u)*1.35)}
.mr-tag .mr-tn{padding:calc(var(--u)*.05) calc(var(--u)*.6);border:calc(var(--u)*.22) solid var(--ink);border-radius:calc(var(--u)*.6);-webkit-text-stroke:calc(var(--u)*.22) var(--ink);paint-order:stroke fill;box-shadow:0 calc(var(--u)*.25) 0 rgba(0,0,0,.3)}
.mr-tag:after{content:"";position:absolute;left:50%;bottom:calc(var(--u)*-.75);border:calc(var(--u)*.45) solid transparent;border-top-color:var(--ink);transform:translateX(-50%)}
.mr-card3{position:absolute;left:calc(var(--u)*5);bottom:19%;display:flex;align-items:stretch;opacity:0;transform:translateX(-30%);transition:all .45s cubic-bezier(.3,1.4,.5,1)}
.mr-card3.on{opacity:1;transform:none}
.mr-card3 .mr-lane{width:calc(var(--u)*8);font-size:calc(var(--u)*6.5);display:flex;align-items:center;justify-content:center;border:calc(var(--u)*.4) solid var(--ink);border-radius:calc(var(--u)*1.2);transform:skewX(-10deg);margin-right:calc(var(--u)*-.6);z-index:1}
.mr-card3 .mr-lane span{transform:skewX(10deg)}
.mr-card3 .mr-info{padding:calc(var(--u)*.8) calc(var(--u)*3) calc(var(--u)*.8) calc(var(--u)*2.4)}
.mr-card3 .mr-nick{font-size:calc(var(--u)*4.4);line-height:1;-webkit-text-stroke:calc(var(--u)*.3) var(--ink);paint-order:stroke fill}
.mr-card3 .mr-tagl{font-family:Nunito,sans-serif;font-weight:900;font-size:calc(var(--u)*1.55);opacity:.95;margin-top:calc(var(--u)*.4)}
.mr-count{position:absolute;left:50%;top:42%;transform:translate(-50%,-50%) scale(1);font-size:calc(var(--u)*16);opacity:0}
.mr-count.pop{animation:mrpop .9s ease-out}
@keyframes mrpop{0%{transform:translate(-50%,-50%) scale(2.2);opacity:0}20%{transform:translate(-50%,-50%) scale(1);opacity:1}80%{opacity:1}100%{transform:translate(-50%,-50%) scale(.8);opacity:0}}
.mr-photo{position:absolute;inset:0;opacity:0;transition:opacity .15s;background:radial-gradient(ellipse at center,rgba(0,0,0,0) 50%,rgba(0,0,0,.55) 100%)}
.mr-photo.on{opacity:1}
.mr-photo .mr-flash{position:absolute;inset:0;background:#fff;opacity:0}
.mr-photo.on .mr-flash{animation:mrflash .6s ease-out}
@keyframes mrflash{0%{opacity:.95}100%{opacity:0}}
.mr-photo .mr-pf{position:absolute;left:50%;top:14%;transform:translateX(-50%) skewX(-10deg);background:#fff;color:var(--ink);border:calc(var(--u)*.4) solid var(--ink);padding:calc(var(--u)*.4) calc(var(--u)*2.5);font-size:calc(var(--u)*4)}
.mr-photo .mr-line{position:absolute;left:0;top:0;height:calc(var(--u)*.35);background:rgba(255,40,80,.9);transform-origin:0 50%;box-shadow:0 0 6px rgba(255,40,80,.8)}
.mr-results{position:absolute;right:calc(var(--u)*3);top:50%;transform:translate(120%,-50%);transition:transform .6s cubic-bezier(.3,1.3,.5,1);width:calc(var(--u)*30)}
.mr-results.on{transform:translate(0,-50%)}
.mr-results .mr-rh{font-size:calc(var(--u)*3);margin-bottom:calc(var(--u)*.8);padding:calc(var(--u)*.3) calc(var(--u)*1.5);display:inline-block}
.mr-results .mr-rr{display:flex;align-items:center;gap:calc(var(--u)*.8);margin:calc(var(--u)*.5) 0;font-size:calc(var(--u)*1.8);background:rgba(20,22,48,.85);border:calc(var(--u)*.25) solid var(--ink);border-radius:calc(var(--u)*.6);padding:calc(var(--u)*.3) calc(var(--u)*1);transform:skewX(-10deg)}
.mr-results .mr-rr>*{transform:skewX(10deg)}
.mr-results .mr-rr .mr-num{font-size:calc(var(--u)*2.6);width:calc(var(--u)*4.2)}
.mr-results .mr-rr .mr-t{margin-left:auto;font-family:Nunito,sans-serif;font-weight:900}
.mr-dim .mr-tower,.mr-dim .mr-top,.mr-dim .mr-map,.mr-dimtop .mr-tower,.mr-dimtop .mr-top{opacity:0}
.mr-tower,.mr-top,.mr-map{transition:opacity .4s}
`,Hf=n=>`${n}<sup>${["th","st","nd","rd"][n%100>10&&n%100<14||n%10>3?0:n%10]}</sup>`,dv=n=>`${n}${["th","st","nd","rd"][n%100>10&&n%100<14||n%10>3?0:n%10]}`,pv=n=>{n=Math.max(0,n);let t=Math.floor(n/60),e=Math.floor(n%60);return`${t}:${String(e).padStart(2,"0")}`},eo=n=>String(n??"").replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t]),mv=n=>{let t=parseInt(n.slice(1),16);return(t>>16&255)*.299+(t>>8&255)*.587+(t&255)*.114>165?"#1a1420":"#ffffff"};function Vf(n,{runners:t,backedBy:e={},course:i,park:s,C:r}){if(!document.getElementById("mr-hud-css")){let N=document.createElement("style");N.id="mr-hud-css",N.textContent=fv,document.head.appendChild(N)}let o=document.createElement("div");o.className="mr-hud mr-dim",o.innerHTML=`
    <div class="mr-top"><div class="mr-pill"><i class="mr-dot"></i><span>LAP <b data-k="lap">1</b>/2</span><span class="mr-sep"></span><span data-k="dist">0.0 KM</span><span class="mr-clk" data-k="clock">0:00</span></div></div>
    <div class="mr-tower"></div>
    <div class="mr-map"><div class="mr-mapwrap"></div><canvas></canvas></div>
    <div class="mr-tags"></div>
    <div class="mr-banner"><div class="mr-b1"><span></span></div><span class="mr-b2"></span></div>
    <div class="mr-card3"><div class="mr-lane mr-num"><span></span></div><div class="mr-panel mr-info"><div class="mr-unskew"><div class="mr-nick"></div><div class="mr-tagl"></div></div></div></div>
    <div class="mr-count mr-num"></div>
    <div class="mr-photo"><div class="mr-flash"></div><div class="mr-line"></div><div class="mr-pf">PHOTO FINISH!</div><div class="mr-pcap"></div></div>
    <div class="mr-market"><div class="mr-m1">MARKET OPEN</div><div class="mr-m2"></div></div>
    <div class="mr-title"><div class="mr-t0"></div><span class="mr-t1"></span><div class="mr-t2"></div></div>
    <div class="mr-results"></div>`,n.appendChild(o);let a=N=>o.querySelector(N),l={};o.querySelectorAll("[data-k]").forEach(N=>l[N.dataset.k]=N);let h=a(".mr-tower"),p={},g={};for(let N of t){let ut=document.createElement("div");ut.className="mr-row",ut.innerHTML=`<div class="mr-pos mr-num">1</div><div class="mr-card"><div class="mr-chip" style="background:${N.colour.primary};border-right:4px solid ${N.colour.secondary}"></div><div class="mr-name">${eo(or(N))}</div><span class="mr-inis"></span><div class="mr-gap"></div></div>`,h.appendChild(ut),p[N.id]={el:ut,pos:ut.querySelector(".mr-pos"),gap:ut.querySelector(".mr-gap"),last:""};let rt=document.createElement("div");rt.className="mr-tag",rt.innerHTML=`<span class="mr-tp mr-num"></span><span class="mr-tb"></span><span class="mr-tn" style="background:${N.colour.primary};color:#fff">${eo(or(N))}</span>`,rt.style.opacity="0",a(".mr-tags").appendChild(rt),g[N.id]={el:rt,pos:rt.querySelector(".mr-tp"),x:0,y:0,vis:!1}}function d(N={}){for(let ut of t){let rt=(N[ut.id]||[]).filter(Z=>Z!=null&&Z!==""),_t=rt.map(Z=>`<span class="mr-ini" style="--bc:${vh(Z)}">${eo(yv(Z))}</span>`).join(""),kt=p[ut.id].el;kt.classList.toggle("backed",rt.length>0),kt.querySelector(".mr-inis").innerHTML=_t,g[ut.id].el.querySelector(".mr-tb").innerHTML=_t}}d(e);let c=a(".mr-map canvas"),u=c.getContext("2d"),_=null,m=340,f=420;c.width=m,c.height=f;let S=i.points,x=1e9,y=1e9,k=-1e9,w=-1e9;for(let N of S)x=Math.min(x,N[0]),k=Math.max(k,N[0]),y=Math.min(y,N[2]),w=Math.max(w,N[2]);if(i.funfair){let[N,ut]=i.funfair.center,rt=i.funfair.radius*.6;x=Math.min(x,N-rt),k=Math.max(k,N+rt),y=Math.min(y,ut-rt),w=Math.max(w,ut+rt)}for(let N in r.diversions)for(let ut of r.diversions[N])for(let rt of ut.path)x=Math.min(x,rt[0]),k=Math.max(k,rt[0]),y=Math.min(y,rt[1]),w=Math.max(w,rt[1]);let C=26,R=Math.min((m-C*2)/(k-x),(f-C*2)/(w-y)),M=(m-(k-x)*R)/2,v=(f-(w-y)*R)/2,b=N=>M+(N-x)*R,I=N=>v+(N-y)*R;function T(){let N=document.createElement("canvas");N.width=m,N.height=f;let ut=N.getContext("2d"),rt=(P,dt,At,It)=>{ut.beginPath(),P.forEach((Y,pt)=>pt?ut.lineTo(b(Y[0]),I(Y[1])):ut.moveTo(b(Y[0]),I(Y[1]))),ut.strokeStyle=dt,ut.lineWidth=At,ut.lineJoin=ut.lineCap="round",ut.setLineDash(It||[]),ut.stroke(),ut.setLineDash([])},_t=(P,dt)=>{for(let At of s.features)At.kind===P&&At.closed&&(ut.beginPath(),At.pts.forEach((It,Y)=>Y?ut.lineTo(b(It[0]),I(It[1])):ut.moveTo(b(It[0]),I(It[1]))),ut.fillStyle=dt,ut.fill())},kt=s.features.filter(P=>P.kind==="park").sort((P,dt)=>dt.pts.length-P.pts.length)[0];ut.save(),ut.beginPath(),kt.pts.forEach((P,dt)=>dt?ut.lineTo(b(P[0]),I(P[1])):ut.moveTo(b(P[0]),I(P[1]))),ut.fillStyle="#9be27a",ut.fill(),ut.restore(),_t("water","#49a6ff"),_t("track","#ff7a5c");for(let P in r.diversions)for(let dt of r.diversions[P])rt(dt.path,"#c79a5a",4,[6,6]);let Z=[];for(let P=0;P<=r.LAP1_END_DRAW;P+=10)Z.push(r.baseXZ(P));rt(Z,"#1a1420",11),rt(Z,"#8fa0c4",6);let Ft=[];for(let P=r.MAP_TO-80;P<=r.finishM;P+=10)Ft.push(r.baseXZ(P));rt(Ft,"#1a1420",11),rt(Ft,"#8fa0c4",6);let H=r.rawExt(r.finishM);return ut.fillStyle="#fff",ut.strokeStyle="#1a1420",ut.lineWidth=3,ut.fillRect(b(H[0])-7,I(H[1])-7,14,14),ut.strokeRect(b(H[0])-7,I(H[1])-7,14,14),ut.fillStyle="#1a1420",ut.fillRect(b(H[0])-7,I(H[1])-7,7,7),ut.fillRect(b(H[0]),I(H[1]),7,7),N}_=T();function E(){_=T()}let F=0,U=0,B=[],z=a(".mr-banner");function W(){for(;B.length&&U-B[0].at>2;)B.shift();let N=B.shift();N&&(z.querySelector(".mr-b1 span").textContent=N.text,z.querySelector(".mr-b1").style.background=N.colour,z.querySelector(".mr-b2").textContent="",z.classList.remove("on"),z.offsetWidth,z.classList.add("on"),F=Math.min(1.5,N.secs))}function it(N,ut="",rt="#ff3d8b",_t=1.4){B.length>=3&&B.shift(),B.push({text:N,colour:rt,secs:_t,at:U}),F<=0&&W()}let D="";function ft(N,ut){if(U+=N,F>0?(F-=N,F<=0&&(z.classList.remove("on"),F=-.25)):F<0&&(F=Math.min(0,F+N),F===0&&W()),!!ut){if(ut.map!=null&&o.classList.toggle("mr-nomap",!ut.map),ut.raceS!=null&&(l.clock.textContent=pv(ut.raceS)),ut.leaderM!=null&&(l.lap.textContent=ut.leaderM>=2500?"2":"1",l.dist.textContent=`${(Math.min(5e3,ut.leaderM)/1e3).toFixed(1)} KM`),ut.order){let rt=h.clientHeight||0,_t=(h.querySelector(".mr-row")?.offsetHeight||40)+6,kt=0;ut.order.forEach((Z,Ft)=>{let H=p[Z.id];if(!H||(H.el.classList.toggle("off",!!Z.hidden),Z.hidden))return;kt===3&&(kt+=.35),H.el.style.transform=`translateY(${kt*_t}px)`,kt++;let dt=`${Ft}|${Z.gapText}|${Z.finished}`+(Z.posHtml||"");dt!==H.last&&(H.last=dt,H.pos.innerHTML=Z.posHtml??Hf(Ft+1),H.gap.textContent=Z.gapText,H.el.classList.toggle("lead",Ft===0&&!Z.posHtml),H.el.classList.toggle("fin",!!Z.finished))})}if(ut.tags)for(let rt of ut.tags){let _t=g[rt.id];_t&&(rt.visible!==_t.vis&&(_t.vis=rt.visible,_t.el.style.opacity=rt.visible?"1":"0"),rt.visible&&(_t.el.style.transform=`translate(${rt.x}px, ${rt.y}px) translate(-50%,-100%) scale(${rt.scale??1})`,_t.p!==rt.pos&&(_t.p=rt.pos,_t.pos.textContent=rt.pos?dv(rt.pos):"",_t.pos.style.display=rt.pos?"":"none")))}if(ut.dots){u.clearRect(0,0,m,f),u.drawImage(_,0,0);for(let rt of[...ut.dots].reverse())u.beginPath(),u.arc(b(rt.x),I(rt.z),rt.lead?11:9,0,7),u.fillStyle=rt.colour,u.fill(),u.lineWidth=3.5,u.strokeStyle="#1a1420",u.stroke(),rt.focus&&(u.beginPath(),u.arc(b(rt.x),I(rt.z),15,0,7),u.strokeStyle="#fff",u.lineWidth=3,u.stroke());ut.camDot&&(u.save(),u.translate(b(ut.camDot.x),I(ut.camDot.z)),u.rotate(ut.camDot.a),u.fillStyle="rgba(26,20,32,.6)",u.beginPath(),u.moveTo(0,0),u.lineTo(-10,-22),u.lineTo(10,-22),u.fill(),u.restore())}}}function Lt(N){o.classList.toggle("mr-dim",!!N)}function O(N){o.classList.toggle("mr-dimtop",!!N)}function X(){F=0,B.length=0,z.classList.remove("on")}function J(N){let ut=a(".mr-card3");if(!N){ut.classList.remove("on");return}ut.querySelector(".mr-lane span").textContent=N.lane??"",ut.querySelector(".mr-lane").style.background=N.colour.primary,ut.querySelector(".mr-info").style.background=`linear-gradient(180deg, ${N.colour.primary}, ${xv(N.colour.primary,-.25)})`,ut.querySelector(".mr-nick").textContent=N.nickname,ut.querySelector(".mr-nick").style.color="#fff",ut.querySelector(".mr-tagl").textContent=N.tagline||"",ut.querySelector(".mr-tagl").style.color=mv(N.colour.primary)==="#ffffff"?"#fff":"#1a1420",ut.classList.remove("on"),ut.offsetWidth,ut.classList.add("on")}function V(N){let ut=a(".mr-count");ut.textContent=N,ut.classList.remove("pop"),ut.offsetWidth,ut.classList.add("pop")}function st(N,ut=""){a(".mr-photo").classList.toggle("on",!!N),a(".mr-pcap").textContent=ut,a(".mr-pcap").style.display=ut?"":"none"}function nt(N,ut="Place your halfway bets!"){a(".mr-market").classList.toggle("on",!!N),a(".mr-market .mr-m2").textContent=ut}function St(N,{title:ut="",kicker:rt="",theme:_t=""}={}){let kt=a(".mr-title");if(N){kt.querySelector(".mr-t0").textContent=rt,kt.querySelector(".mr-t1").textContent=ut;let Z=kt.querySelector(".mr-t2");Z.textContent=_t,Z.style.display=_t?"":"none",kt.querySelector(".mr-t0").style.display=rt?"":"none"}kt.classList.toggle("on",!!N)}function zt(N,ut){let rt=ut[0]-N[0],_t=ut[1]-N[1],kt=Math.hypot(rt,_t)||1,Z=rt/kt,Ft=_t/kt,H=N[0]-Z*kt*.6,P=N[1]-Ft*kt*.6,dt=a(".mr-photo .mr-line");dt.style.width=`${kt*2.2}px`,dt.style.transform=`translate(${H}px, ${P}px) rotate(${Math.atan2(Ft,Z)}rad)`}function ht(N){let ut=a(".mr-results");if(!N){ut.classList.remove("on");return}ut.innerHTML='<div class="mr-panel mr-rh"><div class="mr-unskew">RESULTS</div></div>'+N.map(rt=>`<div class="mr-rr"><span class="mr-num">${Hf(rt.place)}</span><span style="width:calc(var(--u)*1.2);height:calc(var(--u)*2.2);background:${rt.colour};border:2px solid #1a1420;border-radius:4px"></span><span>${eo(rt.nickname)}</span><span class="mr-t">${eo(rt.timeText||"")}</span></div>`).join(""),requestAnimationFrame(()=>ut.classList.add("on"))}function yt(){o.remove()}return{root:o,update:ft,setBackedBy:d,redrawMap:E,showBanner:it,clearBanner:X,setDim:Lt,setDimTop:O,introCard:J,countdown:V,photo:st,photoLine:zt,results:ht,market:nt,titleCard:St,dispose:yt}}function or(n){if(n.shortName)return n.shortName;let t=String(n.nickname||n.id).replace(/^the\s+/i,"");if(t.length<=14)return t;let e=t.split(/\s+/),i=e.slice(-2).join(" ");return i.length<=14?i:e.at(-1).slice(0,14)}var $f=["#ffd23f","#ff8fc8","#7fe0ff","#9dff8a","#ffb067","#c7a6ff"],Fa=new Map;function vh(n){return Fa.has(n)||Fa.set(n,Fa.size),$f[Fa.get(n)%$f.length]}var gv=n=>/\p{Extended_Pictographic}/u.test(String(n));function yv(n){let t=String(n).trim();if(gv(t))return[...t][0];let e=t.split(/\s+/).filter(Boolean);return(e.length>1&&e[0].length<=3?e[0][0]+e[1][0]:t[0]||"?").toUpperCase()}function xv(n,t){let e=parseInt(n.slice(1),16),i=e>>16&255,s=e>>8&255,r=e&255,o=a=>Math.max(0,Math.min(255,Math.round(t<0?a*(1+t):a+(255-a)*t)));return`rgb(${o(i)},${o(s)},${o(r)})`}var Oa=(n,t,e=12,i=!0)=>an(256,256,(s,r,o)=>{for(let a=0;a<e;a++)s.fillStyle=a%2?n:t,i?s.fillRect(a*r/e,0,r/e+1,o):s.fillRect(0,a*o/e,r,o/e+1)});function Gf(n,t,e,i){let s=Cn(42),r=new de;n.add(r);let o=[],a=[],l=(I,T=3)=>(jn(I,T,void 0,30),I),h=(I,T,E=3)=>ve(I,T,{ol:E,olRef:30}),p=[];for(let I=0;I<i.path.length;I++){let T=i.path[I],E=e.anchors.nearestOnRibbon(T[0],T[1]),F=Math.hypot(T[0]-E[0],T[1]-E[1]);p.push({x:(T[0]+E[0])/2,z:(T[1]+E[1])/2,gap:F})}let g=0;p.forEach((I,T)=>{T&&(g+=Math.hypot(I.x-p[T-1].x,I.z-p[T-1].z)),I.s=g});let d=g,c=I=>{let T=0;for(;T<p.length-2&&p[T+1].s<I;)T++;let E=p[T],F=p[T+1],U=Math.max(0,Math.min(1,(I-E.s)/Math.max(1e-6,F.s-E.s))),B=E.x+(F.x-E.x)*U,z=E.z+(F.z-E.z)*U,W=Math.hypot(F.x-E.x,F.z-E.z)||1;return{x:B,z,gap:E.gap+(F.gap-E.gap)*U,tx:(F.x-E.x)/W,tz:(F.z-E.z)/W,y:t.heightAt(B,z)}},u=p.filter(I=>I.gap>26),_=u.length?u[0].s:d*.25,m=u.length?u.at(-1).s:d*.75,f=I=>Array.from({length:I},(T,E)=>c(_+(E+.5)/I*(m-_))),S=(I,T,E=0)=>(I.position.set(T.x,T.y-.1,T.z),I.rotation.y=Math.atan2(T.tx,T.tz)+E,r.add(I),I),x={center:c((_+m)/2),rides:[]},y=f(7);{let I=y.slice(1,6).sort((V,st)=>st.gap-V.gap)[0],T=new de,E=17,F=E+2.6,U=new ue(.35,.5,F/Math.cos(.32)+1,8);for(let V of[-1,1])for(let st of[-1,1]){let nt=h(U,gt("#ffffff"));nt.position.set(V*1.8,F/2,st*Math.tan(.32)*F/2),nt.rotation.x=-st*.32,T.add(nt)}let B=h(new be(6,1,8,2,.3),gt("#2e9bff"));B.position.y=.5,T.add(B);let z=new de;z.position.y=F,T.add(z);let W=h(new Je(E,.45,8,64),gt("#ff3d8b"));W.rotation.y=Math.PI/2,W.position.x=1.2,z.add(W);let it=h(new Je(E,.45,8,64),gt("#ff3d8b"));it.rotation.y=Math.PI/2,it.position.x=-1.2,z.add(it);let D=h(new ue(1.3,1.3,3.2,16).rotateZ(Math.PI/2),gt("#ffd23f"));z.add(D);let ft=16,Lt=[],O=[];for(let V=0;V<ft;V++){let st=V/ft*Math.PI*2,nt=h(new Te(.18,E,.18).translate(0,E/2,0),gt("#ffffff"),2);nt.rotation.x=st,nt.position.x=1.2,z.add(nt);let St=nt.clone();St.position.x=-1.2,z.add(St);let zt=new de;zt.position.set(0,Math.cos(st)*E,Math.sin(st)*E),z.add(zt);let ht=new de;zt.add(ht);let yt=["#ffd23f","#3ddc84","#2e9bff","#ff8a3d","#b07bff"][V%5],N=h(new be(1.7,1.3,1.5,2,.35),gt(yt));N.position.y=-1.3,ht.add(N);let ut=h(new qe(1.2,.7,4).rotateY(Math.PI/4),gt("#ffffff"),2);ut.position.y=-.1,ht.add(ut),Lt.push(zt);for(let rt=0;rt<3;rt++){let _t=st+rt/3*(Math.PI*2/ft);O.push([1.2,Math.cos(_t)*E,Math.sin(_t)*E],[-1.2,Math.cos(_t)*E,Math.sin(_t)*E])}}let X=new nn(new ye(.32,8,6),new Rn({color:16777215}),O.length),J=new Fe;O.forEach((V,st)=>{J.position.set(...V),J.updateMatrix(),X.setMatrixAt(st,J.matrix),X.setColorAt(st,new oe(["#fff27a","#ff7ac8","#7affff"][st%3]))}),z.add(X),S(T,I,0),a.push(V=>{z.rotation.x=V*.18;for(let st of Lt)st.rotation.x=-V*.18}),x.rides.push({kind:"wheel",obj:T,pos:new $(I.x,I.y+F,I.z),r:E}),I.used=!0}{let I=y.filter(O=>!O.used).sort((O,X)=>X.gap-O.gap)[0];I.used=!0;let T=new de,E=Math.min(6.5,I.gap*.28);T.scale.setScalar(1.45);let F=Oa("#ffffff","#ff4f6d",16);o.push(F);let U=h(new ue(E,E+.3,.9,32),gt("#ffffff",{map:F}));U.position.y=.45,T.add(U);let B=new de;T.add(B);let z=h(new ue(.7,.7,5,16),gt("#ffd23f"));z.position.y=3,B.add(z);let W=Oa("#ffd23f","#ff3d8b",16);o.push(W);let it=h(new qe(E+.8,2.8,16),gt("#ffffff",{map:W}));it.position.y=6.6,B.add(it);let D=h(new ue(E+.8,E+.8,.7,16,1,!0),gt("#2e9bff",{side:je}));D.position.y=4.9,B.add(D);let ft=h(new ye(.5,12,8),gt("#ff3d8b"));ft.position.y=8.2,B.add(ft);let Lt=[];for(let O=0;O<8;O++){let X=O/8*Math.PI*2,J=E*.72,V=new de;V.position.set(Math.cos(X)*J,0,Math.sin(X)*J),V.rotation.y=-X,B.add(V);let st=h(new ue(.06,.06,4.2,6),gt("#ffd23f"),1.5);st.position.y=2.9,V.add(st);let nt=new de;V.add(nt);let St=["#ffffff","#ffd6f0","#d6f0ff","#fff2b0"][O%4],zt=h(new be(.7,.7,1.6,2,.3),gt(St));nt.add(zt);let ht=h(new be(.45,.9,.5,2,.2),gt(St));ht.position.set(0,.55,.7),ht.rotation.x=.4,nt.add(ht);let yt=h(new be(.45,.45,.8,2,.2),gt(St));yt.position.set(0,.95,1.05),nt.add(yt);let N=h(new be(.15,.8,.3,1,.06),gt(["#ff3d8b","#2e9bff","#3ddc84","#ff8a3d"][O%4]),2);N.position.set(0,.75,.55),N.rotation.x=.4,nt.add(N);let ut=h(new be(.75,.2,.6,1,.08),gt("#ff3d8b"),2);ut.position.y=.4,nt.add(ut);for(let[rt,_t]of[[-.22,.55],[.22,.55],[-.22,-.55],[.22,-.55]]){let kt=h(new Te(.16,.7,.16),gt(St),1.5);kt.position.set(rt,-.55,_t),kt.rotation.x=_t>0?-.5:.5,nt.add(kt)}nt.rotation.y=Math.PI/2,Lt.push({horse:nt,ph:O*.8})}S(T,I),a.push(O=>{B.rotation.y=O*.6;for(let X of Lt)X.horse.position.y=2+Math.sin(O*2.2+X.ph)*.35}),x.rides.push({kind:"carousel",obj:T,pos:new $(I.x,I.y+6,I.z),r:E*1.45})}{let I=y.filter(O=>!O.used).sort((O,X)=>X.gap-O.gap)[0];I.used=!0;let T=new de,E=15;T.scale.setScalar(1.5);let F=Oa("#ff3d3d","#ffffff",10,!1);o.push(F);let U=h(new ue(1.6,2.6,E,16),gt("#ffffff",{map:F}));U.position.y=E/2,T.add(U);let B=h(new qe(2.6,3.4,16),gt("#2e9bff"));B.position.y=E+1.7,T.add(B);let z=h(new ue(.06,.06,2,6),gt("#ffffff"),1.5);z.position.y=E+4.2,T.add(z);let W=h(new dn(1.2,.7).translate(.6,0,0),gt("#ffd23f",{side:je}),1.5);W.position.y=E+4.8,T.add(W);let it=[],D=3.2;for(let O=0;O<=160;O++){let X=O/160,J=X*D*Math.PI*2,V=2.6+(1-X)*-.8+1.6;it.push(new $(Math.cos(J)*V,E-1-X*(E-2),Math.sin(J)*V))}let ft=h(new Sa(new Vr(it),220,.55,8,!1),gt("#ffd23f"));ft.scale.y=1,T.add(ft);let Lt=h(new be(3,.3,2,2,.1),gt("#3ddc84"),2);Lt.position.set(it.at(-1).x+1,.15,it.at(-1).z),T.add(Lt),S(T,I),a.push(O=>{W.rotation.y=Math.sin(O*3)*.4}),x.rides.push({kind:"helter",obj:T,pos:new $(I.x,I.y+12,I.z),r:6})}let k=[["CANDYFLOSS","#ff9bd2"],["HOOK-A-DUCK","#57c7ff"],["DOUGHNUTS","#ffb347"],["COCONUT SHY","#8ee86b"],["TOFFEE APPLES","#ff5d5d"],["HOOK-A-DUCK","#57c7ff"]],w=[];[...y.filter(I=>!I.used),...f(13).filter((I,T)=>T%2===1)].slice(0,7).forEach((I,T)=>{let[E,F]=k[T%k.length],U=new de,B=T%2?1:-1,z=h(new be(4.2,2.4,3,2,.2),gt("#fff6e0"));z.position.y=1.2,U.add(z);let W=h(new be(4.4,1.1,.8,2,.15),gt(F));W.position.set(0,.55,1.7),U.add(W);let it=Oa("#ffffff",F,10);o.push(it);let D=h(new Te(4.8,.18,2.4),gt("#ffffff",{map:it}));D.position.set(0,2.9,1.4),D.rotation.x=.32,U.add(D);for(let st of[-1,1]){let nt=h(new ue(.09,.09,2.6,6),gt("#ffffff"),1.5);nt.position.set(st*2.2,1.6,2.4),U.add(nt)}let ft=Qn(512,128,(st,nt,St)=>{st.fillStyle="#1a1420",Ye(st,0,0,nt,St,30),st.fill(),st.fillStyle=F,Ye(st,8,8,nt-16,St-16,24),st.fill(),ln(st,E,nt/2,St/2+4,E.length>11?52:64,"#ffffff","#1a1420",.2)},o),Lt=ve(new be(4.2,1.05,.3,2,.1),[gt(F),gt(F),gt(F),gt(F),gt("#ffffff",{map:ft}),gt("#ffffff",{map:ft})],{ol:2.5,olRef:30});if(Lt.position.set(0,3.7,.4),U.add(Lt),E==="CANDYFLOSS")for(let st=0;st<4;st++){let nt=h(new sn(.32,1),gt("#ff9bd2"),1.5);nt.position.set(-1.4+st*.9,1.45,1.75),U.add(nt)}if(E==="HOOK-A-DUCK"){let st=h(new ue(1.6,1.6,.6,20),gt("#57c7ff"),2);st.position.set(0,.3,3.6),U.add(st);let nt=new de;nt.position.set(0,.7,3.6),U.add(nt);for(let St=0;St<6;St++){let zt=St/6*Math.PI*2,ht=h(new ye(.22,10,8),gt("#ffd23f"),1.5);ht.position.set(Math.cos(zt)*1.1,0,Math.sin(zt)*1.1);let yt=h(new ye(.14,8,6),gt("#ffd23f"),1.2);yt.position.set(0,.22,.12),ht.add(yt),nt.add(ht)}w.push(nt)}let O=e.anchors.nearestOnRibbon(I.x,I.z),X=Math.atan2(O[0]-I.x,O[1]-I.z),J=Math.min(I.gap*.3,7)*B,V=S(U,{...I,x:I.x+I.tz*J,z:I.z-I.tx*J,y:t.heightAt(I.x+I.tz*J,I.z-I.tx*J)});V.rotation.y=X+(B>0?0:Math.PI)*0}),a.push(I=>{for(let T of w)T.rotation.y=I*.8});{let I=[],T=[],E=[],F=[],U=[];for(let ft of[-1,1]){let Lt=null;for(let O=_-10;O<=m+10;O+=9){let X=c(O),J=(X.gap/2-6)*ft,V=X.x+X.tz*J,st=X.z-X.tx*J,nt=t.heightAt(V,st),St=new $(V,nt+4.2,st),zt=h(new ue(.08,.1,4.3,6),gt("#ffffff"),1.5);if(zt.position.set(V,nt+2.1,st),r.add(zt),Lt)for(let ht=0;ht<=10;ht++){let yt=ht/10,N=Lt.clone().lerp(St,yt);N.y-=Math.sin(yt*Math.PI)*.7,I.push(N),ht<10&&(ht%2?(T.push(N.clone()),E.push(["#fff27a","#ff7ac8","#7affff","#9dff7a"][(ht+Math.round(O))%4])):(F.push({v:N.clone(),a:Math.atan2(-(St.z-Lt.z),St.x-Lt.x)}),U.push(["#ff3d8b","#ffd23f","#2e9bff","#3ddc84","#ff8a3d"][(ht+Math.round(O/9))%5])))}Lt=St}}let B=new Fe,z=new nn(new ye(.16,8,6),new Rn({color:16777215}),T.length);T.forEach((ft,Lt)=>{B.position.copy(ft),B.updateMatrix(),z.setMatrixAt(Lt,B.matrix),z.setColorAt(Lt,new oe(E[Lt]))}),r.add(z);let W=new Oe;W.setAttribute("position",new me([-.32,0,0,.32,0,0,0,-.65,0],3)),W.setAttribute("normal",new me([0,0,1,0,0,1,0,0,1],3));let it=new nn(W,gt("#ffffff",{side:je}),F.length);F.forEach((ft,Lt)=>{B.position.copy(ft.v),B.rotation.set(0,ft.a,0),B.updateMatrix(),it.setMatrixAt(Lt,B.matrix),it.setColorAt(Lt,new oe(U[Lt]))}),r.add(it);let D=[];for(let ft=0;ft+1<I.length;ft++)I[ft].distanceTo(I[ft+1])<3&&D.push(I[ft],I[ft+1]);r.add(new Qs(new Oe().setFromPoints(D),new ds({color:3355443}))),a.push(ft=>{z.material.color.setScalar(.85+.15*Math.sin(ft*6))})}{let I=c(_-4),T=Qn(1024,256,(F,U,B)=>{F.fillStyle="#1a1420",Ye(F,0,0,U,B,60),F.fill(),F.fillStyle="#ff3d8b",Ye(F,10,10,U-20,B-20,52),F.fill(),ln(F,"\u2605 FUNFAIR \u2605",U/2,B/2+6,120,"#ffe14d","#1a1420",.18)},o),E=ve(new be(10,2.4,.4,2,.15),[gt("#ff3d8b"),gt("#ff3d8b"),gt("#ff3d8b"),gt("#ff3d8b"),gt("#ffffff",{map:T}),gt("#ffffff",{map:T})],{ol:3,olRef:30});E.position.set(I.x,I.y+7.5,I.z),E.rotation.y=Math.atan2(I.tx,I.tz)+Math.PI/2,r.add(E);for(let F of[-1,1]){let U=h(new ue(.25,.3,7.6,8),gt("#ffd23f"));U.position.set(I.x+I.tz*4.5*F,I.y+3.8,I.z-I.tx*4.5*F),r.add(U)}}let R=[];for(let I=0;I<60;I++){let T=_+s()*(m-_),E=c(T),F=(s()-.5)*(E.gap-16),U=E.x+E.tz*F,B=E.z-E.tx*F;R.push({x:U,y:t.heightAt(U,B),z:B,yaw:s()*6.28})}function M(I,T){for(let E of p){if(E.s<_-20||E.s>m+20)continue;let F=Math.max(6,E.gap/2-4);if((I-E.x)**2+(T-E.z)**2<F*F)return!0}return!1}function v(I){for(let T of a)T(I)}function b(){r.traverse(I=>{I.geometry&&I.geometry.dispose()});for(let I of o)I.dispose?.();n.remove(r)}return{group:r,update:v,dispose:b,anchors:x,crowd:R,at:c,s0:_,s1:m,contains:M}}function Wf(n,t,e,i,s,{camera:r,offsetX:o=3.2}){let a=new de;n.add(a);let l=[],h=t.sample(t.finishM+28),p=new $(h.tx,0,h.tz),g=new $(h.rx,0,h.rz),d=new $(h.x,t.heightAt(h.x,h.z),h.z),c=Math.atan2(p.x,p.z);a.position.copy(d),a.rotation.y=c;let u=[{place:2,x:-2.3,hgt:1.3,col:"#c9d3e6"},{place:1,x:0,hgt:1.9,col:"#ffd23f"},{place:3,x:2.3,hgt:.9,col:"#e59a5c"}];for(let T of u){let E=Qn(256,256,(U,B,z)=>{U.fillStyle="#2e6fe0",U.fillRect(0,0,B,z),U.fillStyle=T.col,U.fillRect(0,0,B,26),ln(U,String(T.place),B/2,z/2+14,170,T.col,"#1a1420",.16)},l),F=ve(new be(2.25,T.hgt,2,3,.12),[gt("#2e6fe0"),gt("#2e6fe0"),gt(T.col),gt("#2e6fe0"),gt("#ffffff",{map:E}),gt("#2e6fe0")],{ol:3.5,olRef:12});F.position.set(T.x,T.hgt/2,0),a.add(F),T.top=T.hgt}let _=Qn(1024,256,(T,E,F)=>{T.fillStyle="#1a1420",Ye(T,0,0,E,F,50),T.fill(),T.fillStyle="#ff3d8b",Ye(T,10,10,E-20,F-20,42),T.fill(),ln(T,"MARKRUN CHAMPIONS",E/2,F/2+6,80,"#ffffff","#1a1420",.16)},l),m=ve(new be(9,2.2,.3,2,.1),[gt("#ff3d8b"),gt("#ff3d8b"),gt("#ff3d8b"),gt("#ff3d8b"),gt("#ffffff",{map:_}),gt("#ffffff",{map:_})],{ol:3,olRef:14});m.position.set(0,5.6,-2.4),a.add(m);for(let T of[-1,1]){let E=ve(new ue(.14,.16,5.6,8),gt("#ffffff"),{ol:2,olRef:14});E.position.set(T*4.3,2.8,-2.4),a.add(E)}let f=s.length,S=[];for(let T of s){let E=i[T.runnerId];if(!E)continue;let F=u.find(z=>z.place===T.place),U=F?new $(F.x,F.top,.1):null,B;if(T.place===1?B=["celebrate","jump"]:T.place===2?B=["pose","flex"]:T.place===3?B=["celebrate","fist"]:T.place===f&&f>3?B=["celebrate","collapse"]:B=["celebrate","shrug"],!U){S.push({rr:E,o:T,pose:B});continue}x(E,U,B)}S.forEach((T,E)=>{let F=E%2?1:-1,U=Math.floor(E/2),B=T.pose[1]==="collapse",z=new $(F*(B?4.6:4.2+U*1.6),0,B?1.6:.6+U*.8);x(T.rr,z,T.pose,B?-F*Math.PI/2:0)});function x(T,E,F,U=0){let B=E.clone().applyAxisAngle(new $(0,1,0),c).add(d);E.y===0&&(B.y=t.heightAt(B.x,B.z)+.05),T.root.position.copy(B),T.root.rotation.set(0,c+U,0),T.set(...F),T.setPop(null)}let y=Cn(3),k=420,w=new nn(new dn(.16,.26),new Rn({side:je}),k),C=[],R=["#ff3d8b","#ffd23f","#2e9bff","#3ddc84","#ff8a3d","#ffffff","#b07bff"];for(let T=0;T<k;T++)C.push({x:(y()-.5)*14,y:y()*12,z:(y()-.5)*8,vy:1+y()*1.6,sp:y()*6,ph:y()*6.28}),w.setColorAt(T,new oe(R[T%R.length]));w.frustumCulled=!1,a.add(w);let M=new Fe,v=0;function b(T,E){v+=T;for(let W=0;W<k;W++){let it=C[W];it.y-=it.vy*T,it.y<0&&(it.y+=12),M.position.set(it.x+Math.sin(v*1.3+it.ph)*.5,it.y,it.z+Math.cos(v+it.ph)*.4),M.rotation.set(v*it.sp+it.ph,v*it.sp*.7,it.ph),M.updateMatrix(),w.setMatrixAt(W,M.matrix)}w.instanceMatrix.needsUpdate=!0;let F=Math.sin(v*.18)*.4,U=15-Math.min(2.5,v*.2),B=new $(Math.sin(F)*U,3+Math.sin(v*.3)*.3,Math.cos(F)*U).applyAxisAngle(new $(0,1,0),c);r.position.copy(d).add(B);let z=new $(o,2.2,0).applyAxisAngle(new $(0,1,0),c).add(d);r.lookAt(z),r.fov!==42&&(r.fov=42,r.updateProjectionMatrix())}function I(){a.traverse(T=>{T.geometry&&T.geometry.dispose()}),w.material.dispose();for(let T of l)T.dispose?.();n.remove(a)}return{update:b,dispose:I,center:d}}var Ge=(n,t)=>{n=n.index?n.toNonIndexed():n;let e=new oe(t).convertSRGBToLinear(),i=n.getAttribute("position").count,s=new Float32Array(i*3);for(let r=0;r<i;r++)s[r*3]=e.r,s[r*3+1]=e.g,s[r*3+2]=e.b;return n.setAttribute("color",new $e(s,3)),n.getAttribute("uv")&&n.deleteAttribute("uv"),n},pn=(n,t,e,i,s=0,r=1.6)=>(n.scale(r,r,r),n.rotateY(s),n.translate(t,e,i),n);function Xf(n,t,e,i){let s=Cn(777),r=new de;n.add(r);let o=[],a=[],l=(u,_)=>`lawn:${Math.floor(u/140)},${Math.floor(_/140)}`,h=(u,_,m,f=.8,S)=>a.push({x:u,y:t.heightAt(u,_),z:_,yaw:m,scale:f,colour:S,zone:l(u,_)}),{ribbonSamples:p}=e.anchors;function g(u,_,m){for(let f=0;f<40;f++){let S=p[Math.floor(s()*p.length)],x=s()*Math.PI*2,y=u+s()*(_-u),k=S[0]+Math.cos(x)*y,w=S[1]+Math.sin(x)*y;if(!(!e.inPark(k,w)||e.blocked(k,w,m+1)||!e.clearOf(k,w,m)||e.onPath(k,w,m+2)))return e.reserve(k,w,m),{x:k,z:w,y:t.heightAt(k,w),toPath:Math.atan2(S[0]-k,S[1]-w)}}return null}{let u=[],_=["#ff5d8f","#ffd23f","#2e9bff","#3ddc84","#ff8a3d","#b07bff"],m=(w,C,R,M,v,b)=>{u.push(pn(Ge(new Te(1.6,.2,1.6).translate(0,2,0),v),w,C,R,M));for(let[E,F]of[[-.7,-.7],[.7,-.7],[-.7,.7],[.7,.7]])u.push(pn(Ge(new ue(.08,.08,2,6).translate(E,1,F),"#ffffff"),w,C,R,M));u.push(pn(Ge(new qe(1.25,1,4).rotateY(Math.PI/4).translate(0,2.6,0),b),w,C,R,M));let I=new Te(.9,.12,3.3);I.rotateX(-.62),I.translate(0,1.05,2.1),u.push(pn(Ge(I,b),w,C,R,M));let T=new Te(.8,.08,2.4);T.rotateX(1),T.translate(0,1,-1.3),u.push(pn(Ge(T,"#ffffff"),w,C,R,M))},f=(w,C,R,M,v)=>{for(let b of[-1.8,1.8])for(let I of[-.6,.6]){let T=new ue(.08,.08,2.8,6);T.rotateX(I>0?.22:-.22),T.translate(b,1.35,I*.5),u.push(pn(Ge(T,v),w,C,R,M))}u.push(pn(Ge(new ue(.1,.1,3.8,8).rotateZ(Math.PI/2).translate(0,2.7,0),v),w,C,R,M));for(let b of[-.8,.8]){u.push(pn(Ge(new Te(.6,.08,.35).translate(b,.75,0),"#22202c"),w,C,R,M));for(let I of[-.25,.25])u.push(pn(Ge(new ue(.02,.02,1.9,4).translate(b+I,1.7,0),"#888888"),w,C,R,M))}},S=(w,C,R,M)=>{let v=new ye(1.6,8,5,0,Math.PI*2,0,Math.PI/2);u.push(pn(Ge(v,M),w,C,R)),u.push(pn(Ge(new ue(.4,.4,.5,8).translate(0,1.7,0),"#ffffff"),w,C,R))},x=(w,C,R,M,v)=>{u.push(pn(Ge(new ue(1.5,1.5,.25,16).translate(0,.35,0),M),w,C,R)),u.push(pn(Ge(new ue(.1,.1,1,6).translate(0,.9,0),v),w,C,R)),u.push(pn(Ge(new Je(.9,.06,6,16).rotateX(Math.PI/2).translate(0,1.2,0),v),w,C,R))},y=(w,C,R,M,v)=>{u.push(pn(Ge(new ye(.45,10,8).scale(1,.9,1.4).translate(0,.95,0),v),w,C,R,M)),u.push(pn(Ge(new ye(.3,8,6).translate(0,1.4,.55),v),w,C,R,M)),u.push(pn(Ge(new ue(.12,.12,.6,6).translate(0,.3,0),"#888888"),w,C,R,M))},k=[m,f,S,x,y];for(let w of i.features){if(w.kind!=="playground"||!w.closed)continue;let C=Bn(w.pts),R=(C[2]-C[0])*(C[3]-C[1]),M=Math.max(1,Math.min(9,Math.round(R/380))),v=[];for(let b=0,I=0;b<M&&I<80;I++){let T=C[0]+3+s()*(C[2]-C[0]-6),E=C[1]+3+s()*(C[3]-C[1]-6);if(!rr(w.pts,T,E)||v.some(it=>Math.hypot(it[0]-T,it[1]-E)<8.5))continue;v.push([T,E]),b++;let F=t.heightAt(T,E)-.05,U=s()*6.28,B=_[Math.floor(s()*_.length)],z=_[Math.floor(s()*_.length)],W=k[(b+v.length+Math.floor(s()*5))%k.length];W===m||W===f||W===y?W(T,F,E,U,B,z):W(T,F,E,B,z),s()<.6&&h(T+2.5,E+1.5,s()*6,.55)}}if(u.length){let w=ve(Qe(u),gt("#ffffff",{vertexColors:!0}),{ol:2,olRef:30});r.add(w)}}{let u=an(64,64,(R,M,v)=>{for(let b=0;b<6;b++)for(let I=0;I<6;I++)R.fillStyle=(b+I)%2?"#ffffff":"#c8c8c8",R.fillRect(b*M/6,I*v/6,M/6+1,v/6+1)});o.push(u);let _=new dn(2.8,2.2);_.rotateX(-Math.PI/2);let m=[],f=[],S=[],x=["#ff4f6d","#2e9bff","#3ddc84","#ffd23f","#ff8a3d","#b07bff"];for(let R=0;R<90;R++){let M=g(12,70,3);if(!M)continue;let v=s()*6.28;m.push({x:M.x,y:M.y+.06,z:M.z,ry:v}),f.push(x[R%x.length]),S.push({x:M.x+Math.cos(v)*.7,y:M.y+.05,z:M.z-Math.sin(v)*.7,ry:v});let b=1+Math.floor(s()*3);for(let I=0;I<b;I++){let T=v+I/b*Math.PI*2+.5,E=M.x+Math.cos(T)*.9,F=M.z-Math.sin(T)*.9;h(E,F,M.toPath+(s()-.5),.62+s()*.15)}}let y=new nn(_,gt("#ffffff",{map:u,polygonOffset:!0,polygonOffsetFactor:-1}),m.length),k=new Fe;m.forEach((R,M)=>{k.position.set(R.x,R.y,R.z),k.rotation.set(0,R.ry,0),k.updateMatrix(),y.setMatrixAt(M,k.matrix),y.setColorAt(M,new oe(f[M]))}),y.receiveShadow=!0,y.computeBoundingSphere(),r.add(y),e.registerInstanced(y,m);let w=Qe([Ge(new be(.7,.45,.5,2,.08).translate(0,.22,0),"#c98a4a"),Ge(new Je(.25,.04,6,12,Math.PI).translate(0,.45,0),"#8a5a36")]),C=new nn(w,gt("#ffffff",{vertexColors:!0}),S.length);S.forEach((R,M)=>{k.position.set(R.x,R.y,R.z),k.rotation.set(0,R.ry,0),k.updateMatrix(),C.setMatrixAt(M,k.matrix)}),C.castShadow=!0,C.computeBoundingSphere(),jn(C,1.6,void 0,20),r.add(C),e.registerInstanced(C,S)}{let u=Qe([new Jn(.22,.5,4,8).rotateX(Math.PI/2).translate(0,.45,0),new ye(.22,10,8).translate(0,.72,.42),new ye(.1,6,5).scale(.6,1.4,.6).translate(-.14,.86,.36),new ye(.1,6,5).scale(.6,1.4,.6).translate(.14,.86,.36),new ye(.09,6,5).translate(0,.66,.64),...[[-.13,.25],[.13,.25],[-.13,-.25],[.13,-.25]].map(([R,M])=>new ue(.06,.06,.32,6).translate(R,.16,M)),new ue(.04,.03,.35,5).rotateX(-.9).translate(0,.6,-.42)].map(R=>R.index?R.toNonIndexed():R).map(R=>(R.deleteAttribute("uv"),R))),_=Qe([Ge(new ye(.55,12,8,0,Math.PI*2,Math.PI*.45,Math.PI*.55).scale(1,.8,1.3).translate(0,.95,0),"#ffffff"),Ge(new ye(.56,12,8,Math.PI,Math.PI,0,Math.PI*.5).scale(1,.9,.9).translate(0,.95,-.2),"#ffffff"),...[[-.45,.45],[.45,.45],[-.45,-.45],[.45,-.45]].map(([R,M])=>Ge(new Je(.2,.06,6,12).rotateY(Math.PI/2).translate(R,.22,M),"#22202c")),Ge(new ue(.03,.03,.9,5).rotateX(.6).translate(0,1.15,-.85),"#22202c")]),m=[],f=[],S=[],x=[],y=["#c98a4a","#3b2a20","#f2e6d0","#8a8a8a","#e0b070","#ffffff"];for(let R=0;R<64;R++){let M=g(8,60,1.6);if(!M)continue;let v=s()*6.28;h(M.x,M.z,v,.82);let b=Math.sin(v),I=Math.cos(v);R%4===3?(S.push({x:M.x+b*1.4,y:M.y,z:M.z+I*1.4,ry:v,s:1}),x.push(["#ffb3c7","#b3dcff","#c8f0b0","#fff0a0"][R%4])):(m.push({x:M.x+b*1.6+I*.8,y:M.y,z:M.z+I*1.6-b*.8,ry:v+(s()-.5)*.8,s:.8+s()*.6}),f.push(y[Math.floor(s()*y.length)]))}let k=new Fe,w=(R,M,v,b)=>{let I=new nn(R,M,v.length);return v.forEach((T,E)=>{k.position.set(T.x,T.y,T.z),k.rotation.set(0,T.ry,0),k.scale.setScalar(T.s),k.updateMatrix(),I.setMatrixAt(E,k.matrix),b&&I.setColorAt(E,new oe(b[E]))}),I.castShadow=!0,I.receiveShadow=!0,I.computeBoundingSphere(),jn(I,2,void 0,18),r.add(I),e.registerInstanced(I,v),I},C=m.length?w(u,gt("#ffffff"),m,f):null;S.length&&w(_,gt("#ffffff",{vertexColors:!0}),S,x)}{let u=[],_=[],m=[],f=["#ff5d8f","#ffd23f","#ffffff","#b06bff","#ff8a3d","#ff3d3d"];for(let C=0;C<26;C++){let R=g(9,40,3.2);if(!R)continue;let M=2.2+s()*.8;u.push({x:R.x,y:R.y-.05,z:R.z,s:M});let v=[f[C%f.length],f[(C+2)%f.length]];for(let b=0;b<60;b++){let I=s()*6.28,T=Math.sqrt(s())*(M-.25);_.push({x:R.x+Math.cos(I)*T,y:R.y+.25,z:R.z+Math.sin(I)*T,s:.8+s()*.5}),m.push(v[b%2])}}let S=new Fe,x=Qe([Ge(new ue(1,1.05,.35,20).translate(0,.17,0),"#4f9e3a"),Ge(new Je(1.02,.08,6,24).rotateX(Math.PI/2).translate(0,.35,0),"#ffffff")]),y=new nn(x,gt("#ffffff",{vertexColors:!0}),u.length);u.forEach((C,R)=>{S.position.set(C.x,C.y,C.z),S.scale.set(C.s,1,C.s),S.updateMatrix(),y.setMatrixAt(R,S.matrix)}),y.receiveShadow=!0,y.computeBoundingSphere(),jn(y,1.6,void 0,20),r.add(y),e.registerInstanced(y,u);let k=new sn(.24,0);k.computeVertexNormals();let w=new nn(k,gt("#ffffff"),_.length);S.scale.setScalar(1),_.forEach((C,R)=>{S.position.set(C.x,C.y,C.z),S.scale.setScalar(C.s),S.updateMatrix(),w.setMatrixAt(R,S.matrix),w.setColorAt(R,new oe(m[R]))}),w.computeBoundingSphere(),r.add(w),e.registerInstanced(w,_)}{let u=t.sample(55),_=-1,m=Ve/2+9,f=u.x+u.rx*m*_,S=u.z+u.rz*m*_;e.blocked(f,S,3)&&(f=u.x-u.rx*m*_,S=u.z-u.rz*m*_);let x=new de,y=an(128,16,(E,F,U)=>{for(let B=0;B<8;B++)E.fillStyle=B%2?"#fff":"#3a9d5d",E.fillRect(B*16,0,16,U)});o.push(y),x.add(ve(new be(3.2,1.6,1.8,3,.25),gt("#3a9d5d"),{ol:3,olRef:20})).position.y=1.15;let k=ve(new be(3.4,.15,2,2,.05),gt("#f4e3c0"),{ol:2,olRef:20});k.position.y=2,x.add(k);let w=ve(new Te(3.8,.15,2.4),gt("#ffffff",{map:y}),{ol:2.5,olRef:20});w.position.y=3.2,x.add(w);for(let E of[-1.6,1.6]){let F=ve(new ue(.06,.06,1.2,6),gt("#ffffff"),{ol:1.5});F.position.set(E,2.6,.9),x.add(F)}for(let E of[-1.1,1.1]){let F=ve(new ue(.4,.4,.2,14).rotateZ(Math.PI/2),gt("#22202c"),{ol:2});F.position.set(E,.4,.95),x.add(F);let U=F.clone();U.position.z=-.95,x.add(U)}let C=ve(new ue(.75,.55,1.3,16),gt("#ffffff"),{ol:3,olRef:20});C.position.y=4,x.add(C);let R=ve(new ue(.82,.82,.22,16),gt("#5a3a24"),{ol:2.5,olRef:20});R.position.y=4.75,x.add(R);let M=ve(new ue(.72,.62,.45,16),gt("#c98a4a"),{ol:2,olRef:20});M.position.y=3.95,x.add(M);let v=Qn(512,128,(E,F,U)=>{E.fillStyle="#1a1420",Ye(E,0,0,F,U,28),E.fill(),E.fillStyle="#ffd23f",Ye(E,6,6,F-12,U-12,22),E.fill(),ln(E,"FLAT WHITES",F/2,U/2+4,62,"#ffffff","#1a1420",.2)},o),b=new De(new dn(2.8,.7),gt("#ffffff",{map:v}));b.position.set(0,1.4,.92),x.add(b);let I=b.clone();I.rotation.y=Math.PI,I.position.z=-.92,x.add(I);let T=Math.atan2(u.x-f,u.z-S);x.position.set(f,t.heightAt(f,S),S),x.rotation.y=T,r.add(x);for(let E=0;E<5;E++){let F=f+Math.sin(T)*(2.2+E*1.1)+Math.cos(T)*(E%2?.3:-.3),U=S+Math.cos(T)*(2.2+E*1.1);h(F,U,T+Math.PI,.8)}e.anchors.coffeeCart=x}function d(){}function c(){r.traverse(u=>{u.geometry&&u.geometry.dispose()});for(let u of o)u.dispose?.();n.remove(r)}return{group:r,crowd:a,update:d,dispose:c}}var no=8.5;function vv(n,t={}){let{course:e,park:i,round:s}=t,r=t.plan||null,o=t.backedBy||{},a=Object.keys(o).filter(et=>(o[et]||[]).length),l=[...s?.runners||[]].sort((et,mt)=>(et.lane??0)-(mt.lane??0)),h=!1,p=new la({antialias:!0,powerPreference:"high-performance",preserveDrawingBuffer:!!t.preserveDrawingBuffer});p.setPixelRatio(Math.min(window.devicePixelRatio||1,t.maxPixelRatio??1.5)),p.outputColorSpace=hn,p.toneMapping=ri,p.shadowMap.enabled=!0,p.shadowMap.type=Qc;let g=p.domElement;g.style.cssText="position:absolute;inset:0;width:100%;height:100%;display:block",getComputedStyle(n).position==="static"&&(n.style.position="relative"),n.appendChild(g);let d=new ha;d.fog=new ca(13496063,700,3200);let c=new bn(45,16/9,.3,9e3),u=new Aa(14676223,9420912,1.45);d.add(u);let _=new Ra(16774109,2.3),m=new $(-.45,.82,.38).normalize();_.castShadow=!0,_.shadow.mapSize.set(2048,2048),_.shadow.bias=-4e-4,_.shadow.normalBias=.03,_.shadow.radius=3,d.add(_),d.add(_.target);let f=Ef(e,i,r),S=Cf(d,f,{course:e,park:i}),x=null,y=null,k=Lf(f,S.anchors.crowdZones,5,S.onPath,S.blocked),w=Xf(d,f,S,i);k.push(...w.crowd);let C=new Map;for(let et of k){let mt=et.zone??"x";C.has(mt)||C.set(mt,[]),C.get(mt).push(et)}let R=[...C.values()].map(et=>gh(d,et)),M={update:(...et)=>{R.forEach(mt=>mt.update(...et)),y?.update(...et)},dispose:()=>{R.forEach(et=>et.dispose()),y?.dispose()}},v={};for(let et of l){let mt=Nf(et);v[et.id]=mt,d.add(mt.root)}let b=l.map(et=>et.id),I=Object.fromEntries(l.map(et=>[et.id,et])),T=Vf(n,{runners:l,backedBy:o,course:e,park:i,C:f}),E=null,F=null,U=[],B=null,z=[],W=!1;function it(et){if(r=et||null,f.setPlan(r),h=!!r?.runners?.some(mt=>mt.diversions&&mt.diversions.length),x&&(x.dispose(),x=null),y&&(y.dispose(),y=null),h){let mt=r.runners.find(Yt=>Yt.diversions?.length).id;x=Gf(d,f,S,f.diversions[mt][0]),S.clearArea(x.contains),R.forEach(Yt=>Yt.hideWhere(x.contains)),y=gh(d,x.crowd)}if((h||W)&&(S.redrawGround(),T.redrawMap()),W=h,z=[],r){F=Ff(r,f,l),U=yh({plan:r,sim:F,backedIds:a,hasDiversion:h,C:f,world:S,funfair:x}),B=zf({camera:c,C:f,sim:F,world:S,funfair:x});for(let mt of r.events||[])z.push({at:mt.broadcastS,evt:{...mt,kind:"event"}});for(let mt of r.commentary||[])z.push({at:mt.broadcastS,evt:{...mt,kind:"commentary"}});z.sort((mt,Yt)=>mt.at-Yt.at)}else F=null,U=[],B=null}let D="idle",ft=!1,Lt=!1,O=-no,X=0,J=null,V=null,st=0,nt=!1,St=!1,zt=0,ht=0,yt=!1,N=0,ut=Math.max(.05,Number(t.speed)||1),rt=null,_t=0,kt=new Set;function Z(){let et=n.clientWidth||window.innerWidth,mt=n.clientHeight||window.innerHeight;p.setSize(et,mt,!1),c.aspect=et/mt,c.updateProjectionMatrix(),dh.uRes.value.set(et*p.getPixelRatio(),mt*p.getPixelRatio())}let Ft=typeof ResizeObserver<"u"?new ResizeObserver(Z):null;Ft?.observe(n),window.addEventListener("resize",Z),Z();let H={};{let et=b.length;b.forEach((mt,Yt)=>{let Vt=(Yt-(et-1)/2)*Math.min(1.25,(Ve-1.6)/Math.max(1,et-1)),L=f.sample(0);H[mt]={x:L.x+L.rx*Vt-L.tx*1.2,z:L.z+L.rz*Vt-L.tz*1.2,yaw:Math.atan2(L.tx,L.tz)},H[mt].y=f.heightAt(H[mt].x,H[mt].z)+.16})}function P(et="idle"){for(let mt of b){let Yt=H[mt],Vt=v[mt];Vt.root.position.set(Yt.x,Yt.y,Yt.z),Vt.root.rotation.set(0,Yt.yaw,0),et&&Vt.set(et),Vt.setPop(null)}}P(),it(r);let dt=(et,mt)=>et===1?"jump":et===2||et===3?"fist":et===mt?"collapse":"kneel";function At(et,mt){let Yt=F.stateAt(Math.max(0,et)),Vt=b.length;for(let L of b){let q=Yt.byId[L],Q=v[L];if(et<0)continue;Q.root.position.set(q.x,q.y,q.z);let xt=Math.atan2(q.tx,q.tz)+(q.finished&&q.post>2.4&&!(q.place>3&&q.post<4)?Math.PI*(q.place%2?1:-1)*.92:0),lt=Q.root.rotation.y,Ot=xt-lt;for(;Ot>Math.PI;)Ot-=2*Math.PI;for(;Ot<-Math.PI;)Ot+=2*Math.PI;Q.root.rotation.y=lt+Ot*Math.min(1,mt*10);let Gt={speed:q.vRace,rate:Yt.rate,slope:q.slope},Nt=f.diversions[L]?.[0];if(Nt&&Q.setProp("floss",q.m>Nt.toM-20?Math.max(.25,1-(q.m-Nt.toM)/3500):0),q.finished){let Ht=q.place;q.post<1.6?(Q.set("run"),Gt.speed=3,Gt.rate=1.2):Ht>3&&q.post<4?Q.set("trudge"):Q.set("celebrate",dt(Ht,Vt)),Q.setPop(null)}else if(q.div>.3){Q.set("distracted");let Ht=x?.anchors.rides.reduce((ee,ie)=>!ee||ie.pos.distanceToSquared(Q.root.position)<ee.pos.distanceToSquared(Q.root.position)?ie:ee,null);if(Ht){let ie=Math.atan2(Ht.pos.x-q.x,Ht.pos.z-q.z)-Q.root.rotation.y;for(;ie>Math.PI;)ie-=2*Math.PI;for(;ie<-Math.PI;)ie+=2*Math.PI;Gt.lookYaw=Math.max(-1.3,Math.min(1.3,ie))}Q.setPop(["!","heart","floss"][Math.floor((q.m-q.divInfo.fromM)/120)%3])}else{Q.set("run"),Q.setPop(null);let Ht=f.geoOf(q.m);Gt.effort=q.m>4300?.4+(q.m-4300)/700*.5:Ht>1700&&Ht<2060?.7:.1}Q.update(mt,Gt)}}let It=new $,Y=null,pt=-1,ct=()=>{if(pt!==X||!Y){let et=g.getBoundingClientRect();Y=[...T.root.querySelectorAll(".mr-tower, .mr-map, .mr-top")].filter(mt=>!T.root.classList.contains("mr-dim")&&!(T.root.classList.contains("mr-dimtop")&&!mt.classList.contains("mr-map"))).map(mt=>{let Yt=mt.getBoundingClientRect(),Vt=Yt.right,L=Yt.bottom;if(mt.classList.contains("mr-tower")){L=Yt.top+mt.querySelectorAll(".mr-row").length*((mt.querySelector(".mr-row")?.offsetHeight||40)+6);for(let q of mt.querySelectorAll(".mr-badges")){let Q=q.getBoundingClientRect();Q.width&&(Vt=Math.max(Vt,Q.right))}}return{left:Yt.left-et.left,right:Vt-et.left,top:Yt.top-et.top,bottom:L-et.top}}),pt=X}return Y};function bt(et,mt=!0){let Yt=g.clientWidth,Vt=g.clientHeight,L=[];for(let Nt of b){let Ht=v[Nt];It.set(Ht.root.position.x,Ht.root.position.y+Ht.height+.55,Ht.root.position.z);let ee=It.distanceTo(c.position);It.project(c);let ie=mt&&It.z<1&&It.z>-1&&Math.abs(It.x)<.95&&It.y<.82&&It.y>-.62&&ee>9.5&&ee<150;Ht.height/Math.max(.1,ee)*(Vt/(2*Math.tan(Gi.degToRad(c.fov)/2)))>Vt*.3&&(ie=!1),L.push({id:Nt,x:(It.x*.5+.5)*Yt,y:(-It.y*.5+.5)*Vt,visible:ie,pos:et?et.order.indexOf(Nt)+1:0,scale:Math.max(.7,Math.min(1.15,30/ee)),dist:ee})}let q=D==="race"&&Na.has(B?.shot?.type)&&!B?.gliding,Q=et?et.order:b,xt=new Set([...Q.slice(0,3),...a]);L.sort((Nt,Ht)=>Q.indexOf(Nt.id)-Q.indexOf(Ht.id));let lt=[];for(let Nt of L){if((!q||!xt.has(Nt.id))&&(Nt.visible=!1),!Nt.visible)continue;let Ht=(or(I[Nt.id]).length*10+50+(o[Nt.id]?.length||0)*18)*Nt.scale,ee=26*Nt.scale,ie=10,Kt={l:Nt.x-Ht/2,r:Nt.x+Ht/2,t:Nt.y-ee,b:Nt.y+6};if(lt.some(he=>Kt.l<he.r+4&&Kt.r>he.l-4&&Kt.t<he.b+2&&Kt.b>he.t-2)){Nt.visible=!1;continue}if(ct().some(he=>Kt.l<he.right+ie&&Kt.r>he.left-ie&&Kt.t<he.bottom+ie&&Kt.b>he.top-ie)){Nt.visible=!1;continue}lt.push(Kt)}if(!et)return D!=="race"?{tags:L}:{tags:L,raceS:0,leaderM:0,map:!1,order:b.map(Nt=>({id:Nt,hidden:!0,gapText:""}))};let Ot=et.leader.m>=4e3,Gt=et.order.map((Nt,Ht)=>{let ee=et.byId[Nt],ie=Ht<3||a.includes(Nt),Kt=Ot||ee.finished?ee.gapText:"";if(!Kt&&a.includes(Nt)&&Ht>0&&!ee.finished){let he=et.byId[et.order[Ht-1]],Ie=et.raceS-Un(F.byId[et.order[Ht-1]].progress,ee.m);!he.finished&&Ie>=0&&Ie<=5&&(Kt=`\u2191${Ie.toFixed(1)}s`)}return{id:Nt,gapText:Kt,finished:ee.finished,hidden:!ie}});return{raceS:et.raceS,leaderM:et.leader.m,tags:L,order:Gt,map:Na.has(B?.shot?.type),dots:et.order.map((Nt,Ht)=>({x:et.byId[Nt].x,z:et.byId[Nt].z,colour:I[Nt].colour.primary,lead:Ht===0,focus:B?.shot?.ids?.includes(Nt)}))}}let wt=new er(.78,1,48);wt.rotateX(-Math.PI/2);let Rt={};function Pt(){for(let et of b){let mt=Rt[et]||(Rt[et]=new de);mt.parent||v[et].root.add(mt);for(let Yt of[...mt.children])mt.remove(Yt),Yt.material.dispose();(o[et]||[]).forEach((Yt,Vt)=>{let L=new De(wt,new Rn({color:vh(Yt),transparent:!0,opacity:.9,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-4}));L.scale.setScalar(1+Vt*.32),L.position.y=.06+Vt*.01,L.renderOrder=2,mt.add(L)})}}function Xt(){for(let et of b){let mt=Rt[et];if(!mt||!mt.children.length)continue;let Yt=c.position.distanceTo(v[et].root.position);mt.scale.setScalar(Gi.clamp(Yt*.016,.9,3.2))}}Pt();function Qt(et,mt){let Yt=Math.max(30,Math.min(220,mt)),Vt=_.shadow.camera;Vt.right!==Yt&&(Vt.left=-Yt,Vt.right=Yt,Vt.top=Yt,Vt.bottom=-Yt,Vt.near=1,Vt.far=900,Vt.updateProjectionMatrix());let L=2*Yt/_.shadow.mapSize.x,q=Math.round(et.x/L)*L,Q=Math.round(et.z/L)*L;_.target.position.set(q,et.y,Q),_.position.set(q+m.x*400,et.y+m.y*400,Q+m.z*400)}let Jt=["wave","flex","point","stretch","spin","bow"];function pe(et,mt){let Yt=[...et.personality||et.id].reduce((Vt,L)=>Vt+L.charCodeAt(0),mt);return Jt[Yt%Jt.length]}function re(et,mt={}){D="intro",T.setDim(!0),T.clearBanner(),T.photo(!1),T.results(null),Tt(),T.market(!1),rt=null,ft=!1,g.style.filter="",P("idle");let Yt=mt.perRunnerS??t.introPerRunnerS??4.2,Vt=mt.flyoverS??7;return V={t:0,idx:-1,per:Yt,fly:Vt,onDone:et,waiting:!1,segStart:0,minSeg:2.5,done:!1,group:!1},{flyoverS:Vt,perRunnerS:Yt,runners:b.slice()}}function Se(et){let mt=V;if(!mt)return;mt.t+=et;let Yt=H;if(mt.idx===-1){!mt.title&&mt.t>.8&&(mt.title=!0,ot(!0));let Gt=Math.min(1,mt.t/mt.fly),Nt=xh(Gt),Ht=f.sample(0),ee=new $(170,0,-40),ie=2.2-Nt*2,Kt=520-Nt*470,he=new $(ee.x+Math.cos(ie)*Kt,190-Nt*170,ee.z+Math.sin(ie)*Kt),Ie=new $(Ht.x+Ht.tx*22+Ht.rx*10,Ht.y+9,Ht.z+Ht.tz*22+Ht.rz*10);he.lerp(Ie,Nt*Nt);let Be=ee.clone().setY(15).lerp(new $(Ht.x,Ht.y+1,Ht.z),Math.min(1,Nt*1.2));c.position.copy(he),c.lookAt(Be),Et(50),Gt>=1&&qt();return}if(mt.group){let Gt=f.sample(0),Nt=(mt.t-mt.segStart)/3;if(c.position.set(Gt.x+Gt.tx*(9+Nt*2)+Gt.rx*2,Gt.y+2.2+Nt*.6,Gt.z+Gt.tz*(9+Nt*2)+Gt.rz*2),c.lookAt(Gt.x,Gt.y+1.3,Gt.z),Et(46),Nt>=1&&!mt.done){mt.done=!0,T.introCard(null);let Ht=mt.onDone;V=null,D="idle",Ht?.()}return}let Vt=b[mt.idx],L=Yt[Vt],q=mt.t-mt.segStart,Q=new $(Math.sin(L.yaw),0,Math.cos(L.yaw)),xt=new $(-Q.z,0,Q.x),lt=v[Vt].height,Ot=3.2+lt*.6-Math.min(.6,q*.12);c.position.set(L.x+Q.x*Ot+xt.x*.9,L.y+lt*.62,L.z+Q.z*Ot+xt.z*.9),c.lookAt(L.x-xt.x*1.25,L.y+lt*.55,L.z-xt.z*1.25),Et(40),!mt.waiting&&q>=mt.per&&qt(),mt.waiting==="released"&&q>=mt.minSeg&&qt()}function ot(et){let mt=s||{};T.titleCard(et,{title:mt.title||"MARKRUN",kicker:mt.number?`ROUND ${mt.number}`:"LIVE FROM FINSBURY PARK",theme:mt.theme?typeof mt.theme=="string"?mt.theme:mt.theme.label||mt.theme.name||"":""})}function qt(){let et=V;et.idx===-1&&ot(!1),et.idx++,et.segStart=et.t;for(let L of b)v[L].set("idle");if(et.idx>=b.length){et.group=!0;for(let L of b)v[L].set("pose","point");T.introCard(null),setTimeout(()=>{},0);for(let L of b)v[L].set("wave");return}let mt=b[et.idx];v[mt].set(pe(I[mt],et.idx)==="wave"?"wave":"pose",pe(I[mt],et.idx)),t.introCards!==!1&&T.introCard(I[mt]),et.waiting=!1;let Vt=t.onIntroRunner?.(mt,et.idx);Vt&&typeof Vt.then=="function"&&(et.waiting=!0,Vt.then(()=>{V===et&&(et.waiting="released")},()=>{V===et&&(et.waiting="released")}))}function Ct(et,mt){if(!F)throw new Error("createRaceView: playRace needs a plan (pass opts.plan or call loadPlan(plan) first)");D="race",T.setDim(!1),T.results(null),Tt(),V=null,T.introCard(null),T.titleCard(!1),T.market(!1),rt=null,ft=!1,g.style.filter="",O=-no,zt=0,ht=0,st=0,nt=!1,St=!1,kt.clear(),yt=!!t.skipRaceTitle,T.setDimTop(!1),J={onEvent:et,onDone:mt},P("idle"),B.reset()}let Dt=[[-3,"3"],[-2,"2"],[-1,"1"],[0,"GO!"]];function A(et){switch(et.type){case"lead_change":return["LEAD CHANGE","","#ff3d8b"];case"overtake":return a.includes(et.by)||a.includes(et.on)?["OVERTAKE","","#2e6fe0"]:null;case"hill":return["THE HILL","","#3aa845"];case"lap":return["LAP 2","","#2e6fe0"];case"final_stretch":return["FINAL STRETCH","","#ff8a1f"];case"diversion":return kt.has("div")?null:(kt.add("div"),["DISTRACTED!","","#b04bff"]);case"finish":return et.place===1&&!F.photoFinish?["WINNER","","#ffb000"]:null;default:return null}}function G(et){if(st>0){st-=et,st<=0&&(T.photo(!1),g.style.filter="",S.anchors.finishArch.visible=!0,B.reset(),T.showBanner("WINNER","","#ffb000"));return}let mt=O;for(O+=et,O<-4.2&&!yt&&(yt=!0,ot(!0),T.setDimTop(!0)),O>=-3.6&&yt===!0&&(yt="done",ot(!1),T.setDimTop(!1));ht<Dt.length&&O>=Dt[ht][0];){let[Yt,Vt]=Dt[ht++];if(T.countdown(Vt),J?.onEvent?.({kind:"countdown",n:Vt==="GO!"?0:Number(Vt),text:Vt,broadcastS:Yt}),Yt===-3)for(let L of b)v[L].set("ready")}for(;zt<z.length&&O>=z[zt].at;){let Yt=z[zt++].evt;try{J?.onEvent?.(Yt)}catch(Vt){console.error(Vt)}if(Yt.kind==="event"){let Vt=A(Yt);Vt&&T.showBanner(...Vt)}}if(F.photoFinish&&!nt&&O>=F.firstFinishB){nt=!0,O=F.firstFinishB,st=t.photoFreezeS??2.8;{let[Yt,Vt]=F.finishOrder;T.photo(!0,`${or(I[Yt])} or ${or(I[Vt])}? Checking the camera...`)}g.style.filter="grayscale(0.55) sepia(0.35) contrast(1.12)",J?.onEvent?.({kind:"photo_finish",broadcastS:O,ids:F.finishOrder.slice(0,2)})}!St&&O>=F.lastFinishB+3.5&&(St=!0,J?.onDone?.())}function K(et){o=et||{},a=Object.keys(o).filter(mt=>(o[mt]||[]).length),T.setBackedBy(o),Pt()}function at(et,mt=1.2){if(!F)throw new Error("createRaceView: seek in a race needs a plan");et=Math.max(-no,Math.min(F.lastFinishB+3.5,Number(et)||0)),D="race",V=null,Tt(),J=J||{},T.setDim(!1),T.introCard(null),T.results(null),T.photo(!1),T.market(!1),T.clearBanner(),T.titleCard(!1),T.setDimTop(!1),g.style.filter="",S.anchors.finishArch.visible=!0,rt=null,yt=et>=-3.6?"done":et<-4.2?!1:"done",B.reset();let Yt=Math.round(mt*30);for(let Vt=Yt;Vt>=0;Vt--){if(O=et-Vt/30,O<-3)for(let L of b)v[L].set("idle");else if(O<0)for(let L of b)v[L].set("ready");if(Vt>0)if(B.update(O,1/30,U),O>=0)At(O,1/30);else for(let L of b)v[L].update(1/30,{})}O=et,zt=z.findIndex(Vt=>Vt.at>O),zt<0&&(zt=z.length),ht=Dt.findIndex(Vt=>Vt[0]>O),ht<0&&(ht=Dt.length),nt=O>=F.firstFinishB,St=O>=F.lastFinishB+3.5,st=0}function vt(et){let mt=V;if(!mt)return;et=Math.max(0,Number(et)||0);let Yt=b.length;if(et<mt.fly){mt.t=et;return}ot(!1),mt.title=!0;let Vt=Math.min(Yt,Math.floor((et-mt.fly)/mt.per));mt.idx=Vt-1,mt.t=et,qt(),mt.segStart=mt.fly+Vt*mt.per}function tt(et){return D==="intro"?vt(et):at(et)}function Tt(){E&&(E.dispose(),E=null)}function Wt(et,{card:mt}={}){D="podium",T.setDim(!0),T.clearBanner(),V=null,T.titleCard(!1),T.market(!1),rt=null,ft=!1,g.style.filter="",T.photo(!1),Tt();let Yt=et?.finishOrder?.length?[...et.finishOrder].sort((Vt,L)=>Vt.place-L.place):(F?.finishOrder||b).map((Vt,L)=>({runnerId:Vt,place:L+1,officialS:F?.byId[Vt].officialS??0,timeText:F?Ua(F.byId[Vt].officialS):""}));E=Wf(d,f,S,v,Yt,{camera:c,offsetX:(mt??t.podiumCard)!==!1?3.2:0}),(mt??t.podiumCard)!==!1&&T.results(Yt.map(Vt=>({place:Vt.place,nickname:I[Vt.runnerId]?.nickname||Vt.runnerId,colour:I[Vt.runnerId]?.colour.primary||"#888",timeText:Vt.timeText||Ua(Vt.officialS)})))}let Ut=performance.now(),j=0,Mt={frames:0,acc:0,fps:0};function Et(et){Math.abs(c.fov-et)>.01&&(c.fov=et,c.updateProjectionMatrix())}function Zt(et,mt=!1){X+=et;let Yt=null;ft||(D==="intro"&&Se(et),D==="race"&&G(et));let Vt=ft?0:et;if(D==="race"){if(st>0){let Q=S.anchors.finish;S.anchors.finishArch.visible=!1,c.position.set(Q.x+Q.rx*9-Q.tx*.6,Q.y+6.4,Q.z+Q.rz*9-Q.tz*.6),c.lookAt(Q.x-Q.rx*.6-Q.tx*.6,Q.y+.8,Q.z-Q.rz*.6-Q.tz*.6),Et(42),c.updateMatrixWorld();let xt=new $(Q.x+Q.rx*3,Q.y+.05,Q.z+Q.rz*3).project(c),lt=new $(Q.x-Q.rx*3,Q.y+.05,Q.z-Q.rz*3).project(c);T.photoLine([(xt.x*.5+.5)*g.clientWidth,(-xt.y*.5+.5)*g.clientHeight],[(lt.x*.5+.5)*g.clientWidth,(-lt.y*.5+.5)*g.clientHeight])}else if(ft&&rt!=null){rt+=et;let Q=F.stateAt(Math.max(0,O)),xt=Q.byId[Q.order[0]],lt=Q.order.slice(0,3).map(he=>Q.byId[he]).filter(he=>Math.abs(he.m-xt.m)<25),Ot=new $;for(let he of lt)Ot.add(new $(he.x,he.y,he.z));Ot.divideScalar(Math.max(1,lt.length)),_t||(_t=Math.atan2(c.position.x-Ot.x,c.position.z-Ot.z));let Gt=_t+rt*.12,Nt=10+Math.min(25,xt.m-lt.at(-1).m)*.4,Ht=Math.min(1,rt/1.2),ee=Ht*Ht*(3-2*Ht),ie=Ot.x+Math.sin(Gt)*Nt,Kt=Ot.z+Math.cos(Gt)*Nt;c.position.set(ie,Math.max(Ot.y+3+ee*2,f.heightAt(ie,Kt)+2.5),Kt),c.lookAt(Ot.x,Ot.y+2.3,Ot.z),Et(44)}else B.update(O,Vt,U);if(Yt=O>=0?F.stateAt(O):null,O<0)for(let Q of b)v[Q].update(Vt,{});else At(O,st>0?0:Vt);let q=B.shot?.type;Qt(B.cam.look,Na.has(q)?160:70)}else if(D==="podium"&&E){E.update(Vt,X);for(let q of b)v[q].update(Vt,{});Qt(E.center,40)}else{for(let q of b)v[q].update(Vt,{});if(D==="idle"){let q=f.sample(0),Q=X*.12;c.position.set(q.x+Math.sin(Q)*14,q.y+4.5,q.z+Math.cos(Q)*14),c.lookAt(q.x,q.y+1.2,q.z),Et(45)}Qt(new $(H[b[0]]?.x??0,0,H[b[0]]?.z??0),D==="intro"&&V?.idx===-1?160:40)}if(N+=et,mt)return;Xt(),S.update(X),x?.update(X);let L=b.map(q=>v[q].root.position);M.update(X,c.position,L,D==="podium"?.9:null),T.update(N,D==="race"?bt(Yt,O>-1&&rt==null):bt(null,!1)),N=0,p.render(d,c)}let le=2;function ae(et){if(Lt)return;j=requestAnimationFrame(ae);let mt=Math.max(0,(et-Ut)/1e3);Ut=et,Mt.frames++,Mt.acc+=mt,Mt.acc>1&&(Mt.fps=Mt.frames/Mt.acc,Mt.frames=0,Mt.acc=0),_e(Math.min(le,mt)*ut)}function _e(et){let mt=et;if(mt<=1e-6){Zt(0);return}for(;mt>1e-6;){let Yt=Math.min(mt,.1);mt-=Yt,Zt(Yt,mt>1e-6)}}t.manualLoop||(j=requestAnimationFrame(ae));function Ee(){Lt=!0,cancelAnimationFrame(j),Ft?.disconnect(),window.removeEventListener("resize",Z);for(let et in Rt)for(let mt of Rt[et].children)mt.material.dispose();wt.dispose(),Tt();for(let et of b)d.remove(v[et].root),v[et].dispose();M.dispose(),x?.dispose(),w.dispose(),S.dispose(),T.dispose(),d.traverse(et=>{et.geometry&&et.geometry.dispose()}),Uf(),Af(),p.dispose(),p.forceContextLoss?.(),g.remove()}let Re={seek(et,mt=1.2){at(et,mt),ft=!0,Zt(0)},introAt(et,mt=1.5){if(re(()=>{},{}),ft=!1,et<0){V.t=mt,Se(0),Zt(0),ft=!0;return}for(V.t=V.fly,Se(0);V&&V.idx<et;)V.t=V.segStart+V.per+.01,Se(0);for(let Yt=0;Yt<mt*30;Yt++){Se(1/30);for(let Vt of b)v[Vt].update(1/30,{})}ft=!0,Zt(0)},podiumAt(et=3){T.introCard(null),Wt(null);for(let mt=0;mt<et*30;mt++){E.update(1/30,mt/30);for(let Yt of b)v[Yt].update(1/30,{})}ft=!0,Zt(0)},photoAt(){this.seek(F.firstFinishB-.05),ft=!1,nt=!1;for(let et=0;et<3;et++)Zt(1/30);ft=!0,Zt(0)},render(){Zt(0)},unpause(){ft=!1},lookFrom(et,mt,Yt,Vt,L,q,Q=45){D="debugcam",c.position.set(et,mt,Yt),c.lookAt(Vt,L,q),Et(Q),T.setDim(!0),p.render(d,c)},step(et,mt=!0){Zt(et,!mt)},get mode(){return D},get b(){return O},get shots(){return U},get sim(){return F},C:f,get director(){return B},renderer:p,scene:d,camera:c,info:()=>p.info,fps:()=>Mt.fps};return{playIntro:re,playRace:Ct,showPodium:Wt,setPaused(et,{market:mt=!0,marketText:Yt}={}){et=!!et,et!==ft&&(ft=et,D==="race"&&st<=0&&t.marketOnPause!==!1&&mt&&(et?(rt=0,_t=0,T.market(!0,Yt??t.marketText??"Place your halfway bets!"),g.style.filter="saturate(1.2) contrast(1.06)"):(rt=null,T.market(!1),g.style.filter="",B.reset(!1))))},setSpeed(et){ut=Math.max(.05,Number(et)||1)},seek:tt,loadPlan(et,{backedBy:mt}={}){if(D==="race")throw new Error("createRaceView: loadPlan during a race");mt&&K(mt),it(et)},setBackedBy(et){K(et),F&&D!=="race"&&(U=yh({plan:r,sim:F,backedIds:a,hasDiversion:h,C:f,world:S,funfair:x}))},dispose:Ee,hudRoot:T.root,get broadcastTime(){return D==="intro"?V?.t??0:O},get durationS(){return F?no+F.lastFinishB+3.5:0},preRollS:no,_debug:Re}}function qf(n){let e=Array.from({length:201},(r,o)=>Math.round(o*25/5e3*1500*1e3)/1e3),i=(n?.runners||[]).map(r=>({id:r.id,officialS:1500,progress:e,pacingSource:"intro"})),s=Nh(n?.roundId||"intro",i);return s.events=[],s.commentary=[],s}var ao=new URLSearchParams(location.search),fr=Math.max(.25,Number(ao.get("speed"))||1),Sh=ao.get("race")==="2d",$n=n=>Math.round(n/fr);window.__markrun={events:[],speed:fr};var Hn=n=>{window.__markrun.events.push({at:Date.now(),...n}),window.__markrun.events.length>500&&window.__markrun.events.shift()},lr=xe("#stage"),Ei=xe("#screen"),cr=xe("#hud-bottom"),hr=xe("#subs"),bv=xe("#reactions"),io=xe("#next-hint"),ar=xe("#race-layer"),Ae=null,ur=null,ro=ao.has("autostart"),Yi=ao.has("mute"),fe=Ah(),li=Dh({onLine:Iv,onIdle:()=>{fe.duck(!1)}});function Qf(){let n=Math.min(window.innerWidth/1920,window.innerHeight/1080);lr.style.transform=`translate(-50%, -50%) scale(${n})`,lr.style.transformOrigin="center center",lr.style.left="50%",lr.style.top="50%"}window.addEventListener("resize",Qf);Qf();var bh=null,Sv=Promise.all([fetch("/data/course.json").then(n=>n.json()),fetch("/data/park.json").then(n=>n.json()).catch(()=>null)]).then(([n,t])=>(bh={course:n,park:t},bh)),Ba=ao.get("key");try{Ba&&localStorage.setItem("markrun.tvkey",Ba)}catch{}var wv=()=>{try{return Ba||localStorage.getItem("markrun.tvkey")}catch{return Ba}},Ha=Th({role:"tv",getKey:wv,onWelcome:n=>{if(n.key)try{localStorage.setItem("markrun.tvkey",n.key)}catch{}xe("#tvauth")?.remove()},onStatus:n=>{xe("#conn").classList.toggle("hidden",n==="open"||n==="connecting")},onState:n=>Ev(n),onMessage:n=>{n.t==="react"?Lv(n.playerId,n.emoji):n.t==="refresh"?sd(n.step,n.msg):n.t==="refreshDone"?Ov(n.ok,n.msg):n.t==="claimRequest"?Nv(n):n.t==="claimClosed"?xe("#tvmodal")?.dataset.req===n.reqId&&Ki():n.t==="error"&&n.code==="tv_auth"?Uv(n.msg):n.t==="error"&&Ji(n.msg,"red")}}),vn=n=>Ha.send(n);function dr(){if(!(ro&&fe.ready())){ro=!0,fe.unlock(),xe("#gesture").classList.add("gone");try{window.speechSynthesis?.getVoices()}catch{}$a(),Ae&&ed(Ae,!0)}}ro&&xe("#gesture").classList.add("gone");xe("#gesture").addEventListener("click",dr);window.addEventListener("pointerdown",()=>{fe.ready()||dr()});function $a(){let n=Ae?.settings||{};fe.setVolume(n.volume??.8),fe.setMuted(Yi),fe.setMusicEnabled(n.music!==!1),li.setEnabled(!Yi&&n.voice!==!1&&fr<=1.5),li.setVolume(Math.min(1,(n.volume??.8)+.1)),xe("#btn-mute").textContent=Yi?"\u{1F507}":"\u{1F50A}"}xe("#btn-mute").addEventListener("click",n=>{n.stopPropagation(),Yi=!Yi,$a()});xe("#btn-fs").addEventListener("click",n=>{n.stopPropagation(),td()});function td(){document.fullscreenElement?document.exitFullscreen?.():document.documentElement.requestFullscreen?.().catch(()=>{})}var Yf;window.addEventListener("mousemove",()=>{document.body.classList.remove("hide-cursor"),clearTimeout(Yf),Yf=setTimeout(()=>document.body.classList.add("hide-cursor"),3e3)});window.addEventListener("keydown",n=>{if(n.target.closest?.("input, textarea"))return;if(!ro){dr();return}if(Dv()){if(n.key==="Escape"){let e=xe("#tvmodal [data-cancel]:not([disabled])");e?e.click():Ki()}else n.key==="Enter"&&xe("#tvmodal [data-ok]")?.click();return}fe.ready()||fe.unlock();let t=n.key;if(t==="m"||t==="M"){Yi=!Yi,$a(),Ji(Yi?"Muted":"Sound on");return}if(t==="f"||t==="F"){td();return}if(t==="l"||t==="L"){Ae?.phase==="BETTING"&&!Ae.revealed&&(vn({t:"forceLock"}),Ji("Locking everyone in!"));return}(t===" "||t==="Enter"||t==="ArrowRight"||t==="n"||t==="N")&&(n.preventDefault(),wh())});function wh(){if(Ae){if(Ae.phase==="LOBBY"&&!Ae.players.length){Ji("Scan the QR code to join first!","red");return}if(Ae.phase==="BETTING"&&!Ae.revealed){Ji("Waiting for everyone to lock in (press L to force it)");return}vn({t:"advance",from:Ae.phase,stage:Ae.phase==="RESULTS"?Ae.resultsStage:void 0})}}var Zf=new Map;function Ev(n){let t=Ae;Ae=n,$a();let e=new Map(n.players.map(s=>[s.id,s]));if(t)for(let s of n.players){let r=Zf.get(s.id);r?!r.locked&&s.locked&&n.phase==="BETTING"?(fe.play("lock"),li.say(Pv(s.name),Math.random()<.5?"jeff":"pam",{priority:1})):r.connected&&!s.connected&&setTimeout(()=>{let o=Ae?.players.find(a=>a.id===s.id);o&&!o.connected&&Ji(`${s.name}'s phone dropped out \u2014 it'll reconnect`,"red")},5e3):(fe.play("join"),n.phase==="LOBBY"&&li.say(`${s.name} has entered the paddock!`,"pam",{priority:1}))}Zf=e;let i=Tv(n);!ur||ur.key!==i?Av(i,n,t):ur.update?.(n,t),Rv(n),Cv(n),ed(n)}function Tv(n){let t=n.round?.roundId||"";return n.phase==="BETTING"?`BETTING|${t}|${n.revealed?"reveal":"bet"}`:["INTRO","RACE","RESULTS","SCOREBOARD"].includes(n.phase)?`${n.phase}|${t}`:`${n.phase}|${n.gameNumber}`}function Av(n,t,e){try{ur?.destroy?.()}catch(o){console.warn(o)}Ei.innerHTML="",li.clear(),hr.innerHTML="";let i=t.phase;document.body.className=document.body.className.replace(/\bphase-\w+/g,"").trim()+` phase-${i}`,document.body.classList.toggle("revealed",!!t.revealed),document.body.classList.toggle("racing",i==="RACE"||i==="INTRO"&&!!ze),Hn({type:"screen",key:n});let s={LOBBY:kv,INTRO:Bv,BETTING:t.revealed?Wv:Gv,RACE:Xv,RESULTS:qv,SCOREBOARD:Qv,FINALE:t_}[i];if(ur=s?s(t,e):{},ur.key=n,i==="BETTING"&&ze&&Ga===t.round?.roundId&&rd(ze)){try{ze.setPaused(!0)}catch{}document.body.classList.remove("racing")}else i!=="RACE"&&i!=="RESULTS"&&i!=="INTRO"&&so()}var Jf=null;function ed(n,t=!1){if(!ro)return;let e={LOBBY:"lobby",BETTING:n.revealed?null:"betting",SCOREBOARD:"lobby",RESULTS:null,INTRO:null,RACE:null,FINALE:null}[n.phase];e===Jf&&!t||(Jf=e,e?fe.startMusic(e):fe.stopMusic(1.2))}function nd(n){let t=[...n].sort((i,s)=>s.bankroll-i.bankroll),e=new Map;return t.forEach((i,s)=>e.set(i.id,s>0&&i.bankroll===t[s-1].bankroll?e.get(t[s-1].id):s+1)),e}function Rv(n){let t=n.phase==="BETTING"&&!n.revealed;if(cr.classList.toggle("hidden",!t),document.body.classList.toggle("no-hud",!t),!t){cr.innerHTML="";return}let e=nd(n.players),i=n.phase==="RACE"?n.bets||{}:{};cr.innerHTML=n.players.map(s=>`<span class="pill ${s.connected?s.locked?"locked":"":"off"}" data-pid="${s.id}">${gn(s.avatar,40)}<b>${$t(s.name)}</b><i>${s.connected?s.locked?"\u{1F512} locked":"\u{1F914}":"\u{1F4F5}"}</i></span>`).join("")}function Cv(n){let t={INTRO:"Skip intros \u23ED",RACE:"Skip race \u23ED",RESULTS:"Next \u25B6",SCOREBOARD:n.roundNumber>=n.roundsPerGame?"Final results \u25B6":"Next round \u25B6",FINALE:"Play again \u21BB",BETTING:n.revealed?"Start race \u25B6":null}[n.phase];if(!t){io.innerHTML="";return}io.dataset.label!==t&&(io.dataset.label=t,io.innerHTML=`<button class="btn ${n.phase==="RACE"||n.phase==="INTRO"?"ghost small":"white"}">${t} <span style="opacity:.6;font-size:.7em">SPACE</span></button>`,io.firstElementChild.addEventListener("click",e=>{e.stopPropagation(),dr(),wh()}))}function Ji(n,t=""){let e=Ke(`<div class="t panel ${t==="red"?"red":"yellow"} anim-pop">${$t(n)}</div>`),i=xe("#toast");i.innerHTML="",i.appendChild(e),setTimeout(()=>{e.parentNode&&e.remove()},3200)}function Iv(n){fe.duck(!0);let t=Ke(`<div class="sub"><span class="who ${n.speaker==="pam"?"pam":"jeff"}">${n.speaker==="pam"?"PAM":"JEFF"}</span><span>${$t(n.text)}</span></div>`);hr.appendChild(t);let e=1;for(;hr.children.length>e;)hr.firstElementChild.remove();let i=Math.max(3e3,n.text.split(/\s+/).length*420+1500);setTimeout(()=>{t.classList.add("out"),setTimeout(()=>t.remove(),450)},i),Hn({type:"line",text:n.text,speaker:n.speaker})}var Ue=(n,t="jeff",e=2)=>li.say(n,t,{priority:e});function Pv(n){let t=[`${n} has locked in. No take-backs!`,`And ${n}'s money is down!`,`${n} has committed. Bold. Possibly foolish.`,`Bets are in from ${n}!`];return t[Math.floor(Math.random()*t.length)]}function Lv(n,t){let e=Ae?.players.find(o=>o.id===n),i=cr.querySelector(`[data-pid="${n}"]`),s;if(i&&!cr.classList.contains("hidden")){let o=i.getBoundingClientRect(),a=lr.getBoundingClientRect(),l=a.width/1920;s=(o.left+o.width/2-a.left)/l+(Math.random()-.5)*160}else s=((Ae?.players.findIndex(a=>a.id===n)??0)%2===0?70:1790)+(Math.random()-.5)*80;let r=Ke(`<div class="react" style="left:${Math.round(s-60)}px;--rot:${Math.round((Math.random()-.5)*40)}deg"><span class="e">${$t(t)}</span>${e?gn(e.avatar,46):""}</div>`);bv.appendChild(r),fe.play("pop"),setTimeout(()=>r.remove(),3300)}function En(n,t){return new Promise(e=>{let i=setTimeout(e,$n(n));t?.timers.push(i)})}function Va(){return{cancelled:!1,timers:[]}}function oo(n){n.cancelled=!0,n.timers.forEach(t=>{clearTimeout(t),clearInterval(t)})}async function ti(n,t,e=12e3){let i=Date.now();if(await En(t,n),!(fr>1.5))for(;!n.cancelled&&li.busy&&Date.now()-i<e;)await new Promise(s=>setTimeout(s,150))}var wi=(n,t=120)=>kh(n,{size:t,idSuffix:Math.random().toString(36).slice(2,6)});function id(){return`<div class="clouds">${[0,1,2,3,4].map(n=>`<div class="cloud" style="top:${40+n*70}px;width:${180+n%3*70}px;height:${50+n%2*18}px;animation-duration:${70+n*17}s;animation-delay:-${n*19}s"></div>`).join("")}</div>
  <svg class="hills" viewBox="0 0 1920 260" preserveAspectRatio="none"><path d="M0 150 Q 240 40 520 120 T 1040 110 T 1500 90 T 1920 130 V260 H0Z" fill="#2ec27e" stroke="#14183c" stroke-width="6"/><path d="M0 200 Q 300 140 640 190 T 1280 180 T 1920 190 V260 H0Z" fill="#169c5b" stroke="#14183c" stroke-width="6"/></svg>`}var _h=[100,250,500,1e3,2e3,5e3],Mh=[0,60,90,120,180];function kv(n){let t=Ke(`<div class="lobby">
    ${id()}
    <div class="logo"><div class="word outlined">MARK<span class="r">RUN</span></div><br><div class="ribbon"><span>THE FINSBURY PARK FORM GUIDE</span></div></div>
    <div class="tagline">Real parkruns. Real Mark. Fake money. \u{1F377}</div>
    <div class="qr-card panel white"><div class="qr"></div><div class="scan">\u{1F4F1} SCAN TO JOIN</div><div class="url"></div></div>
    <div class="slots"></div>
    <div class="settings panel cream"></div>
    <div class="start-wrap"></div>
  </div>`);Ei.appendChild(t),xe(".qr",t).innerHTML=n.qrSvg||"",xe(".url",t).textContent=(n.joinUrl||"").replace(/^https?:\/\//,""),Ue(n.players.length?"Welcome back to MARKRUN!":"Welcome to MARKRUN! Grab your phones and scan the code.","jeff",1);let e=(r,o,a,l)=>`<div class="set" data-k="${o}"><div class="lbl">${r}</div><div class="ctl-row">${l.replace("{val}",`<span class="val">${a}</span>`)}</div></div>`;function i(r){let o=[],a=Math.max(2,r.players.length);for(let g=0;g<a;g++){let d=r.players[g];if(d){let c=d.connected?d.ready?'<span class="tag" style="background:var(--grass);color:#fff">\u2713 READY</span>':'<span class="tag">joined</span>':'<span class="tag" style="background:var(--tomato);color:#fff">\u{1F4F5} offline</span>';o.push(`<div class="slot panel slant ${s.has(d.id)?"":"joined"}" style="background:${$t(d.avatar.colour)}"><div class="unslant" style="display:flex;align-items:center;gap:24px;width:100%">${gn(d.avatar,92)}<div><div class="sname">${$t(d.name)}${r.settings.runnerPlayerId===d.id?' <span class="tag markt">\u{1F3C3} THE REAL MARK</span>':""}</div><div class="ssub">${mn(d.bankroll)} to gamble${r.settings.runnerPlayerId&&r.settings.runnerPlayerId!==d.id?" \xB7 gets an extra \u{1F525} hot tip":""}</div></div><span class="slot-badge">${c}</span><button class="btn small white kick" data-kick="${d.id}" title="Remove player">\u2715</button></div></div>`)}else o.push(`<div class="slot panel slant empty"><div class="unslant" style="display:flex;align-items:center;gap:24px"><div class="ghost-av">?</div><div><div class="sname">Player ${g+1}</div><div class="ssub">Scan the code to take this seat</div></div></div></div>`)}s=new Set(r.players.map(g=>g.id)),xe(".slots",t).innerHTML=o.join(""),xe(".slots",t).classList.toggle("many",a>2);let l=r.settings,h=Math.round((l.volume??.8)*10);xe(".settings",t).innerHTML=[e("Starting pot","startingBankroll",mn(l.startingBankroll),'<button class="btn small white" data-d="-1">\u2212</button>{val}<button class="btn small white" data-d="1">+</button>'),e("Rounds","roundsPerGame",l.roundsPerGame,'<button class="btn small white" data-d="-1">\u2212</button>{val}<button class="btn small white" data-d="1">+</button>'),e("Bet timer","betTimer",l.betTimer?`${l.betTimer}s`:"Off",'<button class="btn small white" data-d="-1">\u2212</button>{val}<button class="btn small white" data-d="1">+</button>'),e("Drinking","drinkingMode","",`<button class="btn small toggle ${l.drinkingMode?"on":"off"}" data-toggle>${l.drinkingMode?"\u{1F37A} ON":"OFF"}</button>`),e("Voice","voice","",`<button class="btn small toggle ${l.voice?"on":"off"}" data-toggle>${l.voice?"\u{1F399}\uFE0F ON":"OFF"}</button>`),e("Music","music","",`<button class="btn small toggle ${l.music?"on":"off"}" data-toggle>${l.music?"\u{1F3B5} ON":"OFF"}</button>`),e("Volume","volume",`${h*10}%`,'<button class="btn small white" data-d="-1">\u2212</button>{val}<button class="btn small white" data-d="1">+</button>')].join("");let p=r.players.length&&r.players.every(g=>g.ready);xe(".start-wrap",t).innerHTML=`<button class="btn green ${r.players.length?"pulse":""}" data-start ${r.players.length?"":"disabled"}>${r.players.length?r.players.length===1?"START SOLO \u25B6":"LET'S RACE \u25B6":"Waiting for players\u2026"}</button>
      <div class="hint">${r.refreshing?"\u23F3 Refreshing historical data\u2026":r.players.length?p?"Everyone is ready!":"Press SPACE \u2014 or everyone taps READY on their phone":"Up to 4 players \xB7 best with 2"}</div>
      <button class="btn small white refresh-btn" data-refresh ${r.refreshing?"disabled":""}>\u27F3 Refresh Historical Data</button>`}let s=new Set(n.players.map(r=>r.id));return i(n),t.addEventListener("click",r=>{dr();let o=r.target.closest("button");if(!o)return;if(fe.play("tick"),o.dataset.start!==void 0)return wh();if(o.dataset.refresh!==void 0)return Fv();if(o.dataset.kick)return vn({t:"kick",playerId:o.dataset.kick});let a=o.closest("[data-k]")?.dataset.k;if(!a)return;let l=Ae.settings;if(o.dataset.toggle!==void 0)return vn({t:"settings",settings:{[a]:!l[a]}});let h=Number(o.dataset.d),p;if(a==="startingBankroll"){let g=_h.indexOf(l[a]);p=_h[Math.max(0,Math.min(_h.length-1,(g<0?2:g)+h))]}else if(a==="betTimer"){let g=Mh.indexOf(l[a]);p=Mh[Math.max(0,Math.min(Mh.length-1,(g<0?0:g)+h))]}else a==="volume"?p=Math.round(Math.max(0,Math.min(1,(l.volume??.8)+h*.1))*10)/10:p=l[a]+h;vn({t:"settings",settings:{[a]:p}})}),{update:r=>i(r)}}var Dv=()=>!!xe("#tvmodal");function Ki(){xe("#tvmodal")?.remove()}function za(n){Ki();let t=Ke(`<div id="tvmodal"><div class="tvm panel white anim-pop">${n}</div></div>`);return lr.appendChild(t),t.addEventListener("click",e=>{e.target===t&&Ki()}),t}function Uv(n){xe("#tvauth")||document.body.appendChild(Ke(`<div id="tvauth"><div class="panel white" style="padding:30px 40px;max-width:900px;font-size:26px"><h2 style="font-family:var(--font-display);font-weight:400;margin:0 0 10px">\u{1F4FA} Not the TV</h2><p>${$t(n)}</p></div></div>`))}function Nv(n){dr(),fe.play("bell");let t=za(`<h2 class="outlined white thin">\u{1F4F1} New phone for ${$t(n.name||"a player")}?</h2>
    <p>Someone on a <b>new phone</b> wants to take over <b>${$t(n.name||"")}</b>'s seat (and see their secret clues).</p>
    <p>Only allow it if ${$t(n.name||"they")} really did switch phones. Auto-denied in 30 seconds.</p>
    <div class="row"><button class="btn white" data-cancel>Deny <small>ESC</small></button><button class="btn green" data-ok>Allow <small>ENTER</small></button></div>`);t.dataset.req=n.reqId,xe("[data-cancel]",t).onclick=()=>{vn({t:"claimAnswer",reqId:n.reqId,allow:!1}),Ki()},xe("[data-ok]",t).onclick=()=>{vn({t:"claimAnswer",reqId:n.reqId,allow:!0}),Ki()}}function Fv(){if(Ae?.phase!=="LOBBY")return;let n=za(`<h2 class="outlined white thin">\u27F3 Refresh Historical Data</h2>
    <p><b>This uses the internet.</b> It contacts parkrun, Strava (if set up) and the weather archive to fetch any new runs since the last refresh, then rebuilds the local database.</p>
    <p>It can take a few minutes. The game itself never goes online \u2014 this is the only button that does.</p>
    <div class="row"><button class="btn white" data-cancel>Cancel <small>ESC</small></button><button class="btn green" data-ok>Refresh now <small>ENTER</small></button></div>`);xe("[data-cancel]",n).onclick=Ki,xe("[data-ok]",n).onclick=()=>{vn({t:"refresh"}),za('<h2 class="outlined white thin">\u27F3 Refreshing\u2026</h2><div class="rlog"></div><div class="row"><button class="btn white" data-cancel disabled>Working\u2026</button></div>')}}function sd(n,t){let e=xe("#tvmodal .rlog");for(e||(za('<h2 class="outlined white thin">\u27F3 Refreshing\u2026</h2><div class="rlog"></div><div class="row"><button class="btn white" data-cancel disabled>Working\u2026</button></div>'),e=xe("#tvmodal .rlog")),e.appendChild(Ke(`<div class="rl"><b>${$t(n)}</b> ${$t(t)}</div>`));e.children.length>9;)e.firstElementChild.remove()}function Ov(n,t){t&&sd("error",t);let e=xe("#tvmodal [data-cancel]");e&&(e.disabled=!1,e.textContent=n?"Done \u2713":"Close",e.onclick=Ki),Ji(n?"Historical data refreshed!":"Refresh had problems \u2014 existing data kept",n?"":"red")}var ze=null,Zi=null,Ga=null,rd=n=>Zi==="3d"&&typeof n?.loadPlan=="function"&&(typeof n?.setBackedBy=="function"||n?.loadPlan.length>=2);function so(){if(ze){try{ze.dispose()}catch(n){console.warn(n)}ze=null,Zi=null,Ga=null,ar.innerHTML="",document.body.classList.remove("racing")}}async function od(n,{allow2d:t=!0}={}){so();let e=bh||await Sv,i={course:e.course,park:e.park,speed:fr,...n};if(qi?.createRaceView&&!Sh)try{try{ze=await qi.createRaceView(ar,i)}catch(s){if(i.plan||!i.round)throw s;ar.innerHTML="",ze=await qi.createRaceView(ar,{...i,plan:qf(i.round)})}return Ga=i.round?.roundId||null,Zi="3d",window.__markrun.raceView=ze,Hn({type:"raceview",kind:"3d"}),ze}catch(s){console.error("3D race view failed, using 2D fallback",s),Hn({type:"raceview-error",msg:String(s?.message||s)}),ar.innerHTML=""}return!t||!n.plan?null:(ze=Fh(ar,i),Zi="2d",window.__markrun.raceView=ze,Hn({type:"raceview",kind:"2d"}),ze)}function Kf(n){(n.introLines?.length?n.introLines:[{speaker:"jeff",text:`Welcome to Finsbury Park for round ${n.number}: ${n.title}!`}]).slice(0,2).forEach(e=>Ue(e.text,e.speaker,3))}function Bv(n){let t=Va(),e=n.round,i=[...e.runners].sort((c,u)=>c.lane-u.lane),s=Ke(`<div class="intro">${id()}<div class="tint"></div><div class="stagebox"></div><div class="intro-dots">${i.map(()=>"<i></i>").join("")}</div></div>`);Ei.appendChild(s);let r=xe(".stagebox",s),o=(n.bailouts||[]).map(c=>`${$t(n.players.find(u=>u.id===c.playerId)?.name||"")} got a ${mn(c.amount)} bailout from the Bank of Mum &amp; Dad`).join("<br>"),a=`<div class="title-card"><div class="anim-pop"><div class="rn outlined white">ROUND ${e.number} <span style="opacity:.8">of ${n.roundsPerGame}</span></div><div class="rt outlined" style="font-size:${e.title.length>22?104:150}px">${$t(e.title)}</div><div class="rs">${i.length} runners. All of them Mark. Only one of them is having a good day.</div>${e.theme?.label?`<div class="theme-badge panel slant grape"><div class="unslant"><span class="tk">THEME</span>${$t(e.theme.label)}</div></div>${e.theme.blurb?`<div class="tblurb">${$t(e.theme.blurb)}</div>`:""}`:""}${Number(e.payoutMultiplier)>=2?'<div class="double-badge outlined">DOUBLE PAYOUT FINALE \xD72</div>':""}${e.notice?`<div class="bail panel grape" style="color:#fff">\u{1F0CF} ${$t(e.notice)}</div><br>`:""}${o?`<div class="bail panel yellow">\u{1F4B8} ${o}</div>`:""}</div></div>`,l=c=>`<div class="l3 anim-left" style="--c1:${$t(c.colour.primary)}"><div class="l3p">${wi(c,150)}</div><div class="l3t"><b>${$t(ad(c))}</b><span>${$t(c.tagline||"")}</span></div><div class="l3o"><small>ODDS</small><span class="num">${$t(c.odds?.display||"")}</span></div></div>`;async function h(c){let u=i[c];hi(".intro-dots i",s).forEach((m,f)=>m.classList.toggle("on",f===c)),r.innerHTML=l(u),fe.play("whoosh"),Ue(u.intro||`${u.nickname}. ${u.tagline||""}`,c%2?"pam":"jeff",3);let _=ho(u.publicClue,8);_.kicker&&!/^…/.test(_.kicker)&&Ue(`${_.headline} ${_.kicker}`,c%2?"jeff":"pam",2),await ti(t,4800,14e3)}async function p(){t.cancelled||(hi(".intro-dots i",s).forEach(c=>c.classList.remove("on")),r.innerHTML='<div class="bets-open"><div class="anim-pop"><div class="big outlined">BETS ARE OPEN!</div><div class="sub2 outlined white thin">\u{1F4F1} Grab your phones \u2014 your secret clues are waiting \u{1F92B}</div></div></div>',fe.play("kaching"),Ue("The book is open! Check your phones for your secret clues.","pam",3),await ti(t,3200,6e3),t.cancelled||vn({t:"introDone",roundId:e.roundId}))}let g=Date.now(),d=setInterval(()=>vn({t:"progress",phase:"INTRO",roundId:e.roundId,value:Date.now()-g}),2e3);return t.timers.push(d),(async()=>{if(!Sh&&qi?.createRaceView){let c=new Map(i.map((_,m)=>[_.id,m])),u=await od({round:e,backedBy:{},introCards:!1,onIntroRunner:_=>t.cancelled?void 0:h(c.get(_)??0)},{allow2d:!1}).catch(()=>null);if(u&&!t.cancelled){document.body.classList.add("racing"),s.classList.add("over3d"),s.querySelector(".clouds")?.remove(),s.querySelector(".hills")?.remove(),r.innerHTML=a,fe.play("fanfare"),Kf(e);let _=!1,m=setTimeout(()=>{_||(_=!0,p())},$n(15e4));t.timers.push(m);try{u.playIntro(()=>{_||(_=!0,clearTimeout(m),p())})}catch(f){console.error(f),_=!0,p()}return}}if(!t.cancelled){r.innerHTML=a,fe.play("fanfare"),Kf(e),await ti(t,4200,14e3);for(let c=0;c<i.length&&!t.cancelled;c++)await h(c),t.cancelled||await En(700,t);await p()}})(),{destroy:()=>{oo(t)}}}var ad=n=>n.nickname.length<=18?n.nickname:Ri(n);function zv(n){let{headline:t,kicker:e}=ho(n.publicClue,8);return`<div class="rc panel" data-rid="${n.id}">
    <div class="top stripe" style="--c1:${$t(n.colour.primary)};--c2:${$t(Hv(n.colour.primary))}"><div class="rp">${wi(n,170)}</div></div>
    <div class="odds"><span class="num">${$t(n.odds?.display||"")}</span></div>
    <div class="nick">${$t(ad(n))}</div>
    <div class="clue"><b>${$t(t)}</b>${e?`<small>${$t(e)}</small>`:""}</div>
  </div>`}function Hv(n){let t=parseInt(String(n).replace("#",""),16),e=i=>Math.round(i+(255-i)*.25);return`#${[t>>16&255,t>>8&255,t&255].map(i=>e(i).toString(16).padStart(2,"0")).join("")}`}function $v(n){let t=n?.theme,e=Number(n?.payoutMultiplier)>=2;return`${t?.label?`<div class="theme-badge panel slant grape"><div class="unslant"><span class="tk">THEME</span>${$t(t.label)}</div></div>`:""}${e?'<div class="double-badge outlined">DOUBLE PAYOUT \xD72</div>':""}`}function Vv(n){let t=(n.matchups||[]).map(i=>{let s=tn(n,i.a),r=tn(n,i.b);return!s||!r?"":`<span class="si"><i class="dot" style="background:${$t(s.colour.primary)}"></i>${$t(Ri(s))} <em>${$t(i.odds.displayA||`\xD7${i.odds.a}`)}</em> <span class="vs">v</span> <i class="dot" style="background:${$t(r.colour.primary)}"></i>${$t(Ri(r))} <em>${$t(i.odds.displayB||`\xD7${i.odds.b}`)}</em></span>`}),e=(n.props||[]).map(i=>`<span class="si prop">\u{1F3A1} ${$t(i.text)} <em>${$t(i.odds?.displayYes||"")}</em></span>`);return[...t,...e].filter(Boolean).join('<span class="sep">\xB7</span>')}function Gv(n){let t=n.round,e=[...t.runners].sort((d,c)=>d.lane-c.lane),i=Ke(`<div class="betting">
    <div class="bet-head"><div class="h outlined">PLACE YOUR BETS!</div><div class="rt">Round ${t.number}/${n.roundsPerGame} \xB7 ${$t(t.title)}</div>${$v(t)}<div class="timer num hidden"></div></div>
    <div class="runner-grid n${e.length}">${e.map(d=>zv(d)).join("")}</div>
    <div class="bstrip">${Vv(t)}</div>
    ${t.notice?`<div class="notice panel grape">\u{1F0CF} ${$t(t.notice)}</div>`:""}
  </div>`);Ei.appendChild(i),hi(".rc",i).forEach((d,c)=>{d.style.animation=`slide-up .5s ${c*.08}s cubic-bezier(.2,1.3,.4,1) both`});let s=xe(".timer",i),r=null;function o(){if(!Ae?.deadline||Ae.phase!=="BETTING"||Ae.revealed){s.classList.add("hidden");return}let d=Math.max(0,Math.ceil((Ae.deadline-Ha.serverNow())/1e3));s.classList.remove("hidden"),s.textContent=`${Math.floor(d/60)}:${String(d%60).padStart(2,"0")}`,d<=10&&d!==r&&fe.play("tick"),r=d}let a=setInterval(o,250);o();let l=[["jeff","Each of you has one red-hot insider tip on your phone. Find it. Use it."],["pam","Every one of these runners is Mark. The question is: which Mark turned up?"],["jeff","Head-to-heads are a lovely way to lose money slowly."]];Number(t.payoutMultiplier)>=2?Ue("Final round, and every payout is doubled! Fortunes will be made. Mostly lost.","jeff",3):t.theme?.label&&Ue(`Today's theme: ${t.theme.label}. ${t.theme.blurb||""}`,"pam",2);let h=e.map(d=>({r:d,k:ho(d.publicClue,8).kicker})).filter(d=>d.k&&!/^…/.test(d.k)),p=h[Math.floor(Math.random()*h.length)],g=setTimeout(()=>{if(p)Ue(`${Ri(p.r)}: ${p.k}`,"pam",1);else{let d=l[Math.floor(Math.random()*l.length)];Ue(d[1],d[0],1)}},$n(12e3));return{destroy:()=>{clearInterval(a),clearTimeout(g)}}}function Wv(n){let t=Va(),e=n.round,i=(n.revealSeq||[]).filter(a=>a&&a.bet);if(!i.length){let a=(n.betLines||[]).slice();i=n.players.flatMap(l=>(n.bets?.[l.id]||[]).map(h=>({playerId:l.id,bet:h}))).sort((l,h)=>l.bet.stake-h.bet.stake).map(l=>({...l,line:a.shift()||null}))}let s=Ke(`<div class="reveal">
    <div class="rh outlined">THE BETS ARE IN!</div>
    <div class="spot"></div>
    <div class="tally">${n.players.map(a=>`<div class="tcol panel slant" data-pid="${a.id}" style="background:${$t(a.avatar.colour)}"><div class="unslant"><div class="who">${gn(a.avatar,64)}<span>${$t(a.name)}</span><span class="tot num" data-tot>0pp</span></div><div class="chips"></div></div></div>`).join("")}</div>
  </div>`);Ei.appendChild(s);let r=xe(".spot",s),o={};return(async()=>{fe.play("drumroll",{dur:1.6/fr+.2}),Ue(i.length?"Right then. Let's see the damage, smallest first.":"Nobody has bet a penny. Cowards, the lot of them.","jeff",3),await En(1800,t);for(let a=0;a<i.length&&!t.cancelled;a++){let{playerId:l,bet:h,line:p}=i[a],g=n.players.find(f=>f.id===l),d=tn(e,co(h)),c=gr(e,h),u=Xa(e,h),_=a===i.length-1&&i.length>1;r.innerHTML=`<div class="spotcard"><div class="anim-pop"><div class="sc panel ${_?"yellow":"white"}">
        <div class="scp">${gn(g?.avatar,110)}<div class="scn">${$t(g?.name||"")}</div></div>
        <div class="scr">${d?wi(d,150):'<span class="propicon big">\u{1F3A1}</span>'}</div>
        <div class="scb"><div class="sck">${Ih(h)}${_?" \xB7 THE BIG ONE":""}</div><div class="scl">${$t(lo(e,h))}</div><div class="sco">${$t(u)} \xB7 pays ${mn(h.stake*c)}</div></div>
        <div class="scs num">${mn(h.stake)}</div></div></div></div>`,fe.play(_?"kaching":"pop"),p?.text&&Ue(p.text,p.speaker||(a%2?"pam":"jeff"),3),o[l]=(o[l]||0)+h.stake;let m=s.querySelector(`.tcol[data-pid="${l}"]`);m&&(m.querySelector(".chips").appendChild(Ke(`<div class="tchip anim-pop">${d?`<i style="background:${$t(d.colour.primary)}"></i>`:"\u{1F3A1} "}<span>${$t(h.type==="prop"?"Side bet":Ri(d))}</span><b>${mn(h.stake)}</b></div>`)),m.querySelector("[data-tot]").textContent=mn(o[l])),await ti(t,2600,9e3)}if(!t.cancelled){if(!(n.revealSeq||[]).length){let a=n.players.map(h=>new Set((n.bets?.[h.id]||[]).filter(p=>p.type==="win").map(p=>p.runnerId))),l=null;if(a.length>=2)for(let h of a[0])a.slice(1).every(p=>p.has(h))&&(l=tn(e,h));l&&(r.innerHTML=`<div class="spotcard"><div class="same panel yellow anim-pop">Great minds\u2026 both backing ${$t(l.nickname)}! \u{1F91D}</div></div>`,Ue(`They've both gone for ${l.nickname}. Either genius, or a shared delusion.`,"pam",3),await ti(t,2200,7e3))}if(!t.cancelled){for(let a of qi?.createRaceView&&!Sh?[]:["3","2","1"]){if(t.cancelled)return;let l=Ke(`<div class="countdown outlined anim-pop">${a}</div>`);s.appendChild(l),fe.play("beep"),await En(800,t),l.remove()}t.cancelled||vn({t:"revealDone",roundId:e.roundId})}}})(),{destroy:()=>oo(t)}}function jf(n){let t=n.market,e=n.round;if(!t)return'<div class="mk-wait outlined white thin">Opening the market\u2026</div>';let i=new Set(n.players.filter(r=>(n.bets?.[r.id]||[]).some(o=>o.type==="inplay")).map(r=>r.id));return`<div class="mk panel white"><div class="mkh"><span class="outlined">HALFWAY MARKET</span><span class="mkt num" data-mkt></span></div>
    <div class="mks">One bet each, on your phone. Prices from the standings right now.</div>
    <div class="mkrows">${(t.standings||[]).map(r=>{let o=tn(e,r.runnerId),a=t.odds?.[r.runnerId];return`<div class="mkrow">${Qi(r.place)}<span class="rp">${o?wi(o,64):""}</span><span class="nm">${$t(o?.nickname||r.runnerId)}</span><span class="gp">${r.place===1?"LEADS":`+${Number(r.gapS).toFixed(1)}s`}</span><span class="od num">${$t(a?.display||"")}</span></div>`}).join("")}</div>
    <div class="mkp">${n.players.map(r=>`<span class="mkpl ${i.has(r.id)?"in":""}">${gn(r.avatar,44)}${$t(r.name)} ${i.has(r.id)?"\u2713 IN":"\u2026"}</span>`).join("")}</div></div>`}function Xv(n){let t=Va(),e=n.round,i=Ke(`<div class="race-ov"><div class="live panel slant red"><div class="unslant" style="display:flex;gap:14px;align-items:center"><span class="dot"></span>LIVE \xB7 ${$t(e.title)}</div></div><div class="market-layer"></div></div>`);Ei.appendChild(i),document.body.classList.add("racing");let s=xe(".market-layer",i),r=0,o=0,a="idle",l=!1,h=null,p=null,g=null;async function d(_){a="waiting";try{_.setPaused(!0,{market:!0,marketText:"Bet on your phones \u2014 one bet each!"})}catch{}if(fe.play("bell"),fe.play("crowd",{dur:2,peak:.2}),li.clear(),hr.innerHTML="",Ue("Halfway! The market is open. One bet each \u2014 quick!","jeff",3),vn({t:"marketOpen",roundId:e.roundId}),s.innerHTML=jf(Ae),g=setInterval(()=>{let m=s.querySelector("[data-mkt]");m&&Ae?.market?.closesAt&&(m.textContent=`${Math.max(0,Math.ceil((Ae.market.closesAt-Ha.serverNow())/1e3))}s`)},200),await new Promise(m=>{h=m,setTimeout(m,2e4),t.timers.push(setTimeout(()=>{Ae?.market||m()},3500))}),clearInterval(g),a="done",s.innerHTML="",!t.cancelled){Ue("Market closed! Back to the action!","pam",2);try{_.setPaused(!1)}catch{}}}let c=Date.now(),u=setInterval(()=>vn({t:"raceTime",roundId:e.roundId,b:-1e5+(Date.now()-c)/1e3}),2e3);return t.timers.push(u),(async()=>{let _=null;if(ze&&Ga===e.roundId&&rd(ze))try{typeof ze.setBackedBy=="function"?(ze.setBackedBy(n.backedBy||{}),ze.loadPlan(n.racePlan)):ze.loadPlan(n.racePlan,{backedBy:n.backedBy||{}}),ze.setPaused(!1),_=ze,Hn({type:"raceview",kind:"3d",reused:!0})}catch(f){console.warn("could not re-use the intro view",f)}if(_||(_=await od({round:e,plan:n.racePlan,backedBy:n.backedBy||{}})),clearInterval(u),t.cancelled)return;if(!_){i.appendChild(Ke('<div class="race-err panel red">Race view failed to load</div>'));return}document.body.classList.add("racing"),Zi==="3d"&&i.querySelector(".live")?.remove(),Zi!=="3d"?(fe.play("horn"),setTimeout(()=>fe.play("crowd",{dur:3,peak:.25}),300),Ue("And they're off!","jeff",3)):fe.play("crowd",{dur:4,peak:.2}),Hn({type:"race-start",kind:Zi}),p=setInterval(()=>{let f=_.broadcastTime;Number.isFinite(f)&&vn({t:"raceTime",roundId:e.roundId,b:f})},1e3),_.playRace(f=>{if(!(t.cancelled||!f)){if(Hn({type:"race-event",e:f.type||"line",text:f.text}),f.kind==="countdown"){fe.play(f.n===0?"go":"beep"),f.n===0&&(fe.play("horn"),fe.play("crowd",{dur:3,peak:.28}));return}if(f.kind==="photo_finish"){fe.play("stamp"),Ue("It's a photo finish! Hold your breath!","pam",3);return}if(f.text&&(f.kind==="commentary"||!f.type)){a!=="waiting"&&li.say(f.text,f.speaker||"jeff",{priority:f.priority||2});return}switch(f.type){case"overtake":Date.now()-r>1500&&(r=Date.now(),fe.play("whoosh"));break;case"lead_change":fe.play("whoosh"),fe.play("crowd",{dur:2,peak:.18});break;case"breakaway":fe.play("crowd",{dur:2.5,peak:.2});break;case"lap":a==="idle"&&Ae?.marketAvailable?(Hn({type:"market"}),d(_)):fe.play("bell");break;case"final_stretch":fe.play("crowd",{dur:6,peak:.4});break;case"finish":o++,o===1&&(fe.play("fanfare"),fe.play("crowd",{dur:4,peak:.45}));break;default:break}}},async()=>{t.cancelled||(Hn({type:"race-done"}),await En(2500,t),t.cancelled||vn({t:"raceDone",roundId:e.roundId}))});let m=Number(n.resumeB)||0;if(m>2)try{typeof _.seek=="function"?_.seek(m):_._debug?.seek&&(_._debug.seek(m),_.setPaused(!1)),Hn({type:"race-resume",b:m}),Ji("Back on air! Resuming the race\u2026")}catch(f){console.warn("resume failed",f)}})(),{update(_){if(a==="waiting"){if(_.market&&!_.market.open){h?.();return}if(_.market&&!l){l=!0;let m=_.market.standings?.find(y=>y.place===1)||_.market.standings?.[0],f=_.market.standings?.find(y=>y.place===2),S=tn(_.round,m?.runnerId),x=tn(_.round,f?.runnerId);S&&Ue(`${S.nickname} leads at halfway and is now ${_.market.odds?.[m.runnerId]?.display||"odds-on"}.${x?` ${x.nickname}, ${Number(f.gapS).toFixed(1)} seconds back, is ${_.market.odds?.[f.runnerId]?.display||""}.`:""}`,"jeff",3)}s.innerHTML=jf(_)}},destroy:()=>{oo(t),clearInterval(p),clearInterval(g),h?.()}}}function qv(n){let t=null,e=-1,i=Ke('<div class="results"></div>');Ei.appendChild(i);let s=n.round,r=n.results;function o(m,f){return f.players.filter(S=>(f.bets?.[S.id]||[]).some(x=>co(x)===m)).map(S=>gn(S.avatar,50))}let a=(m,f="")=>`<div class="res-head"><div class="h outlined">${m}</div>${f?`<div class="sh">${f}</div>`:""}</div>`,l=m=>{t.cancelled||vn({t:"stageDone",stage:m})};async function h(m){let f=t,S=r.finishOrder.map(k=>{let w=tn(s,k.runnerId);return`<div class="orow panel slant ${k.place===1?"first":""}" style="${k.place===1?"":`background:${$t(w?.colour?.primary||"#2a62e0")}`}"><div class="unslant" style="display:flex;align-items:center;gap:26px;width:100%">
        ${Qi(k.place)}<div class="rp">${w?wi(w,112):""}</div>
        <div class="nm ${k.place===1?"":"outlined white thin"}">${$t(w?.nickname||k.runnerId)}${r.favouriteId===k.runnerId?' <span class="fav">FAV</span>':""}<small>${$t(w?.tagline||"")}</small></div>
        <div class="bk">${o(k.runnerId,m).join("")}</div>
        <div class="tm"><span class="num">${$t(k.timeText||Ch(k.officialS))}</span>${k.place>1&&k.gapS!=null?`<span class="gap">+${Math.round(k.gapS)}s</span>`:""}</div></div></div>`});i.innerHTML=a("THE RESULT","Official times, as recorded by the volunteers \u{1F4CB}")+`<div class="order">${S.join("")}</div>`;let x=hi(".orow",i);for(let k=x.length-1;k>=0;k--){if(f.cancelled)return;x[k].classList.add("show"),k===0?(fe.play("fanfare"),yr(document.body,{count:90})):fe.play("pop"),await En(k===1?1600:800,f)}(r.commentary||[]).slice(0,2).forEach(k=>Ue(k.text,k.speaker,3)),await ti(f,5500,14e3),l(0)}async function p(){let m=t,f=r.finishOrder.map(y=>y.runnerId),S=new Map((r.reveal||[]).map(y=>[y.runnerId,y]));i.innerHTML=a("WHO WERE THEY REALLY?","Every runner was a real Mark, on a real Saturday \u{1F575}\uFE0F \u2014 details on your phones")+`<div class="reveal-grid">${f.map((y,k)=>{let w=tn(s,y),C=S.get(y)||{},R=r.finishOrder[k];return`<div class="rv" data-i="${k}">
        <div class="face front" style="background:${$t(w?.colour?.primary)}"><div><div class="rp">${w?wi(w,220):""}</div><div class="q outlined">?</div></div></div>
        <div class="face back"><div class="bh" style="background:${$t(w?.colour?.primary)}"><div class="rp">${w?wi(w,74):""}</div><div class="n">${$t(w?.nickname||y)}</div></div>
          <div class="date">${$t(C.dateText||C.date||C.headline||"")}</div>
          <div class="time num">${$t(R?.timeText||"")}</div>
          ${(()=>{let M=(C.funFacts||[]).filter(Boolean),v=!C.stravaTitle||/^(morning|lunch|afternoon|evening|night)\s+(run|jog)$/i.test(String(C.stravaTitle).trim())||/^(run|parkrun)$/i.test(String(C.stravaTitle).trim()),b=v?M[0]?`<div class="strava fact"><span class="k">DID YOU KNOW?</span>${$t(M[0])}</div>`:"":`<div class="strava"><span class="k">STRAVA TITLE</span>\u201C${$t(C.stravaTitle)}\u201D</div>`,I=C.punchline||M[v?1:0];return b+(I?`<div class="ff">${$t(I)}</div>`:"")})()}
          ${C.wasPB||C.pbKind?`<div class="pb">${C.pbKind==="finsbury"?"COURSE PB!":"PB! \u{1F3C5}"}</div>`:""}
          <div class="place">${Qi(R?.place||k+1)}</div>
        </div></div>`}).join("")}</div>`;let x=hi(".rv",i);await En(900,m);for(let y=x.length-1;y>=0;y--){if(m.cancelled)return;x[y].classList.add("flip");let k=S.get(f[y]),w=tn(s,f[y]);fe.play(y===0?"fanfare":"reveal"),(y===0||y===x.length-1)&&Ue(`${y===0?"The winner":"And in last place"}, ${w?.nickname}: ${k?.headline||k?.dateText||""}`,y===0?"jeff":"pam",2),await En(y===0?3200:2600,m)}await ti(m,6e3,12e3),l(1)}async function g(m){let f=t,S=r.clueReview||[],x=S.filter(w=>w.highlight).slice(0,3);if(x.length||(x=S.filter(w=>w.verdict!=="neutral").slice(0,3)),!x.length){i.innerHTML="",await En(300,f),l(2);return}let y=new Map((m.clues||[]).map(w=>[w.id,w]));i.innerHTML=a("THE CLUES THAT MATTERED","Useful\u2026 or a red herring? \u{1F41F}")+`<div class="clue-list big">${x.map(w=>{let C=tn(s,w.runnerId),R=y.get(w.clueId),M=m.players.find(I=>I.id===w.owner),v=w.owner==="public"?`\u{1F4FA} PUBLIC CLUE${R?.label?` \xB7 ${$t(R.label.toUpperCase())}`:""}`:`${R?.tier==="hot"?"\u{1F525}":"\u{1F92B}"} ${$t(M?.name||"Secret")}'S ${R?.tier==="hot"?"HOT TIP":"SECRET CLUE"}`,b={useful:"USEFUL \u2713",red_herring:"RED HERRING \u{1F41F}",neutral:"MEH"}[w.verdict]||$t(w.verdict);return`<div class="cl panel"><div class="rp">${C?wi(C,100):""}</div><div class="txt"><div class="own">${v} \xB7 ${$t(C?.nickname||"")}</div>${$t(w.text||R?.text||"")}${w.quip?`<div class="quip">${$t(w.quip)}</div>`:""}</div><div class="verdict ${$t(w.verdict)}">${b}</div></div>`}).join("")}</div>`;let k=hi(".cl",i);for(let w=0;w<k.length;w++){if(f.cancelled)return;k[w].classList.add("show"),setTimeout(()=>{fe.play("sting"),fe.play("stamp")},$n(250)),x[w].quip&&Ue(x[w].quip,w%2?"jeff":"pam",2),await ti(f,2800,8e3)}await ti(f,3500,9e3),l(2)}async function d(m){let f=t,S=m.settings.drinkingMode;i.innerHTML=a("PAY DAY","The bookie settles up \u{1F4B0}")+`<div class="payouts">${m.players.map(w=>{let C=r.payouts?.[w.id]||{bets:[],net:0,bankroll:w.bankroll},R=(C.bets||[]).map(M=>{let v=Ph(M);return`<div class="pl ${v.kind==="won"?"won":v.kind==="push"?"push":"lost"}"><span class="mark">${v.kind==="won"?"\u2705":v.kind==="push"?"\u21A9\uFE0F":"\u274C"}</span><div class="lb">${$t(lo(s,M))}<small>staked ${mn(M.stake)} \xB7 ${$t(Xa(s,M))}${v.kind==="won"?` \xB7 returned ${mn(M.returned)}`:""}</small></div><div class="r">${v.text}</div></div>`}).join("")||'<div class="pl show"><div class="lb">No bets placed. Sensible. Boring.</div></div>';return`<div class="pay panel slant" data-pid="${w.id}" style="background:${$t(w.avatar.colour)}"><div class="unslant" style="display:flex;flex-direction:column;height:100%">
        <div class="who">${gn(w.avatar,90)}${$t(w.name)}</div>
        <div class="lines">${R}</div>
        <div class="net num" data-net="${C.net}">${ji(0)}</div>
        <div class="bank">Bankroll: <span data-bank>${mn(C.bankroll-C.net)}</span></div>
        ${S?c(C.net,w.id):""}
      </div></div>`}).join("")}</div>`,await En(600,f);for(let w of hi(".pl",i)){if(f.cancelled)return;w.classList.add("show"),fe.play(w.classList.contains("won")?"kaching":"pop"),await En(700,f)}await En(400,f);let x=null,y=null;for(let w of m.players){let C=r.payouts?.[w.id];if(!C)continue;let R=i.querySelector(`.pay[data-pid="${w.id}"]`),M=R.querySelector(".net"),v=R.querySelector("[data-bank]");M.classList.add(C.net>0?"green":C.net<0?"red":"white"),M.classList.add("outlined"),Wa(M,0,C.net,$n(1800),b=>ji(b)),Wa(v,C.bankroll-C.net,C.bankroll,$n(1800),b=>mn(b)),(!x||C.net>x.net)&&(x={...C,p:w,panel:R}),(!y||C.net<y.net)&&(y={...C,p:w,panel:R})}if(await En(1900,f),f.cancelled)return;let k=m.settings.drinkingMode?(r.drinks||[]).filter(w=>!w.playerId):[];k.length&&i.appendChild(Ke(`<div class="drink-all panel yellow anim-pop">\u{1F37B} ${k.map(w=>$t(w.text)).join(" \xB7 ")}</div>`)),x&&x.net>0&&(fe.play("kaching"),yr(document.body,{count:140}),x.panel.classList.add("big-win"),x.panel.appendChild(Ke('<div class="mood">\u{1F911}</div>')),Ue(Yv(x.p.name,x.net),"jeff",3)),y&&y.net<0&&(setTimeout(()=>fe.play("sadtrombone"),$n(900)),y.panel.classList.add("big-loss"),y.panel.appendChild(Ke('<div class="raincloud">\u{1F327}\uFE0F</div>')),Ue(Zv(y.p.name,y.net),"pam",3)),!x?.net&&!y?.net&&Ue("Nobody won, nobody lost. The bookie is furious.","pam",2),await ti(f,7e3,14e3),l(3)}function c(m,f){if(Array.isArray(r.drinks))return r.drinks.filter(x=>x.playerId===f).map(x=>`<div class="drink panel yellow">\u{1F37A} ${$t(x.text)}</div>`).join("");if(m<0){let S=Math.min(5,Math.max(1,Math.ceil(-m/100)));return`<div class="drink panel yellow">\u{1F37A} Take ${S} sip${S>1?"s":""}!</div>`}if(m>0){let S=Math.min(5,Math.max(1,Math.ceil(m/150)));return`<div class="drink panel yellow">\u{1F449} Hand out ${S} sip${S>1?"s":""}</div>`}return'<div class="drink panel yellow">\u{1F964} Water break</div>'}async function u(m){let f=t,S=r.awards||[];if(!S.length&&!r.archetype?.label){await En(200,f),l(4);return}i.innerHTML=a("ROUND AWARDS","\u{1F3C6}")+`<div class="awards">${r.archetype?.label?`<div class="arch panel yellow anim-pop"><div class="al display">${$t(r.archetype.label)}</div><div class="ab">${$t(r.archetype.blurb||"")}</div></div>`:""}${S.map(x=>{let y=m.players.find(k=>k.id===x.playerId);return`<div class="award panel slant ${y?"":"yellow"}" style="${y?`background:${$t(y.avatar.colour)}`:""}"><div class="unslant" style="display:flex;align-items:center;gap:28px"><span class="trophy">\u{1F3C6}</span>${y?gn(y.avatar,84):""}<div><div class="at outlined white thin">${$t(x.title)}</div><div class="ax" style="color:${y?"#fff":"var(--ink)"}">${$t(x.text||"")}</div></div></div></div>`}).join("")}</div>`;for(let x of hi(".award",i)){if(f.cancelled)return;x.classList.add("show"),fe.play("fanfare"),await En(1500,f)}S[0]&&Ue(`${S[0].title}! ${S[0].text||""}`,"jeff",2),await ti(f,6500,12e3),l(4)}function _(m){if(m.resultsStage===e)return;t&&oo(t),t=Va(),e=m.resultsStage,li.clear(),hr.innerHTML="";let f=m.resultStages[m.resultsStage];if(Hn({type:"results-stage",stage:f}),f!=="order"&&ze&&so(),f==="order"&&ze&&Zi==="3d")try{ze.showPodium?.(r,{card:!1})}catch(S){console.warn(S)}else ze&&f==="order"&&so();document.body.classList.toggle("racing",!!ze),({order:h,reveal:p,clues:g,payouts:d,awards:u}[f]||(async()=>l(m.resultsStage)))(m).catch(S=>console.error(S))}return r&&_(n),{update:m=>{m.results&&_(m)},destroy:()=>{t&&oo(t),so()}}}function Yv(n,t){let e=[`${n} cleans up! Up ${Ci(t)}. Insufferable for the rest of the evening.`,`Kerching! ${n} is ${Ci(t)} richer and won't let anyone forget it.`,`${n} read that race like a book.`];return e[Math.floor(Math.random()*e.length)]}function Zv(n,t){let e=[`Oh dear. ${n} is down ${Ci(-t)}. The bank of Mark is not sympathetic.`,`${n} backed the wrong Mark. It happens to the best of us. Mostly to ${n}.`,`That's ${Ci(-t)} gone, ${n}. Thoughts and prayers.`];return e[Math.floor(Math.random()*e.length)]}function Jv(n,{compact:t=!1}={}){let e=nd(n.players),i=n.history.at(-1);return[...n.players].sort((s,r)=>r.bankroll-s.bankroll).map(s=>{let r=e.get(s.id),o=i?.nets?.[s.id]??0;return`<div class="srow panel slant ${r===1&&!t?"lead":""}" style="${r===1&&!t?"":`background:${$t(s.avatar.colour)}`}"><div class="unslant" style="display:flex;align-items:center;gap:26px;width:100%">
      ${Qi(r)}${gn(s.avatar,t?70:96)}<div class="nm">${$t(s.name)}</div>
      ${t?"":`<span class="dl ${o>0?"up":o<0?"down":"flat"}">${ji(o)}</span>`}
      <div class="bk num">${mn(s.bankroll)}</div>
      ${!t&&s.ready?'<span class="tag" style="background:var(--grass);color:#fff">\u2713 READY</span>':""}
    </div></div>`}).join("")}function Kv(n){let t=n.history,e=n.settings.startingBankroll,i=n.players.map(_=>({p:_,pts:[e,...t.map(m=>m.bankrolls?.[_.id]??e)]})),s=Math.max(2,(t.length||0)+1),r=Math.max(e*1.2,...i.flatMap(_=>_.pts)),o=540,a=420,l=36,h=_=>l+_*(o-l*2)/(s-1),p=_=>a-l-_/r*(a-l*2),g=[0,.5,1].map(_=>`<line x1="${l}" x2="${o-l}" y1="${p(r*_)}" y2="${p(r*_)}" stroke="#14183c22" stroke-width="2"/>`).join(""),d=`<line x1="${l}" x2="${o-l}" y1="${p(e)}" y2="${p(e)}" stroke="#14183c55" stroke-width="2" stroke-dasharray="8 8"/>`,c=i.map(({p:_,pts:m})=>`<polyline fill="none" stroke="#14183c" stroke-width="12" stroke-linejoin="round" stroke-linecap="round" points="${m.map((f,S)=>`${h(S)},${p(f)}`).join(" ")}"/><polyline fill="none" stroke="${$t(_.avatar.colour)}" stroke-width="6" stroke-linejoin="round" stroke-linecap="round" points="${m.map((f,S)=>`${h(S)},${p(f)}`).join(" ")}"/>${m.map((f,S)=>`<circle cx="${h(S)}" cy="${p(f)}" r="8" fill="${$t(_.avatar.colour)}" stroke="#14183c" stroke-width="4"/>`).join("")}`).join(""),u=Array.from({length:s},(_,m)=>`<text x="${h(m)}" y="${a-6}" text-anchor="middle" font-family="Lilita One" font-size="20" fill="#14183c">${m===0?"Start":`R${m}`}</text>`).join("");return`<svg viewBox="0 0 ${o} ${a}" width="100%" height="440">${g}${d}${c}${u}</svg>`}function jv(n,t){let e=n.results;if(!e?.finishOrder?.length)return"";let i=tn(n.round,e.finishOrder[0].runnerId),s=n.players.map(o=>{let a=e.payouts?.[o.id],l=(a?.bets||[]).filter(h=>h.won).sort((h,p)=>p.returned-h.returned)[0];return`<div class="rcp">${gn(o.avatar,54)}<span class="rn">${$t(o.name)}</span><span class="rx">${l?`\u2705 ${$t(lo(n.round,l))}`:(a?.bets||[]).length?"\u274C nothing came in":"\u{1F648} no bets"}</span><span class="rnet ${a?.net>0?"up":a?.net<0?"down":""}">${ji(a?.net||0)}</span></div>`}).join(""),r=(e.awards||[]).slice(0,2).map(o=>`<span class="raw">\u{1F3C6} ${$t(o.title)}</span>`).join("");return`<div class="recap panel white ${t?"narrow":""}"><div class="rch"><span class="rp">${i?wi(i,64):""}</span><span>Last race: <b>${$t(i?.nickname||"")}</b> won${e.archetype?.label?` \xB7 ${$t(e.archetype.label)}`:""}</span>${r}</div>${s}</div>`}function Qv(n){let t=Ke('<div class="score"></div>');Ei.appendChild(t);let e=null;function i(r){let a=r.roundNumber>=r.roundsPerGame?"\u{1F3C1} That was the final round! Champion next\u2026":r.roundNumber===r.roundsPerGame-1?"Up next: THE FINAL ROUND \u{1F62C}":`Up next: Round ${r.roundNumber+1} of ${r.roundsPerGame}`,l=r.history.length>=2;t.innerHTML=`<div class="res-head"><div class="h outlined">STANDINGS</div><div class="sh">After round ${r.roundNumber} of ${r.roundsPerGame}</div></div>
      <div class="standings ${l?"":"solo"}">${Jv(r)}</div>
      ${l?`<div class="chart panel white"><div class="ct">The money, round by round</div>${Kv(r)}</div>`:""}
      ${jv(r,l)}
      <div class="upnext panel yellow">${a}<span class="cd"></span></div>`}i(n);let s=[...n.players].sort((r,o)=>o.bankroll-r.bankroll);if(s.length>=2){let r=s[0].bankroll-s[1].bankroll;Ue(r===0?"It's dead level at the top!":`${s[0].name} leads by ${Ci(r)}.`,"jeff",2)}else s[0]&&Ue(`${s[0].name} is on ${Ci(s[0].bankroll)}.`,"jeff",2);return e=setInterval(()=>{let r=t.querySelector(".cd");if(!(!r||!Ae))if(Ae.deadline&&Ae.phase==="SCOREBOARD"){let o=Math.max(0,Math.ceil((Ae.deadline-Ha.serverNow())/1e3));r.textContent=` \u2014 starting in ${o}\u2026`}else r.textContent=Ae.players.length?" \u2014 tap READY on your phones":""},300),{update:i,destroy:()=>clearInterval(e)}}function t_(n){let t=[...n.players].sort((u,_)=>_.bankroll-u.bankroll),e=t[0],i=t.length>1&&t[1].bankroll===e?.bankroll,s=(n.history||[]).flatMap(u=>(u.awards||[]).filter(_=>_.text).map(_=>({title:_.title,text:`${_.text} (round ${u.round})`,playerId:_.playerId}))).slice(0,3),r=[...(n.superlatives||[]).filter(u=>u&&u.title&&u.text),...s].slice(0,7),o=Ke(`<div class="finale"><div class="rays"></div><div class="fconf"></div>
    <div class="champ">${e?`<div class="h outlined">${i?"IT'S A DRAW!":"CHAMPION!"}</div>
      <div class="who"><div class="crown">\u{1F451}</div>${gn(e.avatar,200)}<div class="nm outlined white">${$t(i?t.filter(u=>u.bankroll===e.bankroll).map(u=>u.name).join(" & "):e.name)}</div><div class="bk num">${mn(e.bankroll)}</div></div>`:'<div class="h outlined">GAME OVER</div>'}
      <div class="others">${t.slice(1).map((u,_)=>`<div class="srow panel slant" style="background:${$t(u.avatar.colour)}"><div class="unslant" style="display:flex;align-items:center;gap:20px">${Qi(_+2)}${gn(u.avatar,64)}<div class="nm">${$t(u.name)}</div><div class="bk num">${mn(u.bankroll)}</div></div></div>`).join("")}</div>
    </div>
    <div class="reel">${r.length?'<div class="reel-h outlined white thin">THE NIGHT IN AWARDS</div><div class="reel-card"></div><div class="reel-dots"></div>':""}</div>
  </div>`);Ei.appendChild(o);let a=xe(".fconf",o);fe.play("drumroll",{dur:1.6}),setTimeout(()=>{fe.play("fanfare"),fe.play("crowd",{dur:5,peak:.45}),yr(a,{count:200,duration:4500,contained:!0,zIndex:0})},$n(1700));let l=setInterval(()=>yr(a,{count:50,duration:3500,contained:!0,zIndex:0}),$n(7e3));e&&Ue(i?"We have a dead heat! Nobody wins, which is very British.":`Ladies and gentlemen, your MARKRUN champion: ${e.name}, with ${Ci(e.bankroll)}!`,"jeff",3);let h=0,p=null,g=xe(".reel-card",o);function d(){if(!g||!r.length)return;let u=r[h%r.length],_=n.players.find(m=>m.id===u.playerId);g.innerHTML=`<div class="rc2 panel ${_?"":"yellow"} anim-pop" style="${_?`background:${$t(_.avatar.colour)}`:""}"><div class="tro">\u{1F3C6}</div>${_?gn(_.avatar,84):""}<div class="t outlined ${_?"white":""} thin">${$t(u.title)}</div><div class="x">${$t(u.text||"")}</div></div>`,xe(".reel-dots",o).innerHTML=r.map((m,f)=>`<i class="${f===h%r.length?"on":""}"></i>`).join(""),fe.play("reveal"),h<r.length&&Ue(`${u.title}! ${u.text||""}`,h%2?"pam":"jeff",2),h++}let c=setTimeout(()=>{d(),p=setInterval(d,$n(6500))},$n(6500));return setTimeout(()=>Ue("Press space, or tap ready on your phones, to go again.","pam",1),$n(6500*(r.length+1))),{destroy:()=>{clearInterval(l),clearInterval(p),clearTimeout(c)}}}
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
