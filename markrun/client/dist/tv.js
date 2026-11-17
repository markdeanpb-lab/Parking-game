var nf=Object.defineProperty;var sf=(n,t)=>{for(var e in t)nf(n,e,{get:t[e],enumerable:!0})};function Mh({role:n,getToken:t,getKey:e,onWelcome:i,onState:s,onMessage:r,onStatus:o}){let a=null,l=0,h=null,u=!1,g=0,f=null,c=0,d=()=>`${location.protocol==="https:"?"wss":"ws"}://${location.host}/ws`;function M(v){o?.(v)}function m(){if(clearTimeout(h),a&&(a.readyState===0||a.readyState===1))return;M(l?"reconnecting":"connecting");try{a=new WebSocket(d())}catch{p();return}let v=a;v.onopen=()=>{l=0,M("open"),c=Date.now(),b({t:"hello",role:n,token:t?.()||void 0,key:e?.()||void 0}),clearInterval(f),f=setInterval(()=>{if(b({t:"ping",at:Date.now()}),Date.now()-c>25e3&&v.readyState===1)try{v.close()}catch{}},8e3)},v.onmessage=L=>{c=Date.now();let T;try{T=JSON.parse(L.data)}catch{return}if(T.t==="pong"){T.serverNow&&(g=T.serverNow+(Date.now()-T.at)/2-Date.now());return}T.t==="welcome"?i?.(T):T.t==="state"?(T.state?.serverNow&&(g=T.state.serverNow-Date.now()),s?.(T.state)):r?.(T)},v.onclose=()=>{clearInterval(f),v===a&&(M("closed"),u||p())},v.onerror=()=>{try{v.close()}catch{}}}function p(){clearTimeout(h);let v=Math.min(8e3,400*2**l)*(.75+Math.random()*.5);l++,h=setTimeout(m,v)}function b(v){return a&&a.readyState===1?(a.send(JSON.stringify(v)),!0):!1}let _=()=>{document.visibilityState==="visible"&&(!a||a.readyState>1?(l=0,m()):b({t:"ping",at:Date.now()}))};return document.addEventListener("visibilitychange",_),window.addEventListener("online",()=>{l=0,m()}),window.addEventListener("pageshow",_),window.addEventListener("focus",_),m(),{send:b,reconnect(){l=0;try{a?.close()}catch{}m()},close(){u=!0,a?.close()},serverNow:()=>Date.now()+g,get open(){return a?.readyState===1}}}function bh(){let n=null,t=null,e=null,i=null,s=null,r=null,o=.8,a=!1,l=!0,h=null;function u(){if(n)return n;let x=window.AudioContext||window.webkitAudioContext;if(!x)return null;n=new x,r=n.createDynamicsCompressor(),r.threshold.value=-14,r.ratio.value=4,r.attack.value=.005,r.release.value=.2,t=n.createGain(),t.gain.value=a?0:o,e=n.createGain(),e.gain.value=.9,i=n.createGain(),i.gain.value=.32,e.connect(r),i.connect(r),r.connect(t),t.connect(n.destination),s=n.createBuffer(1,n.sampleRate*2,n.sampleRate);let y=s.getChannelData(0);for(let S=0;S<y.length;S++)y[S]=Math.random()*2-1;return n}function g(){let x=u();return x&&x.state==="suspended"&&x.resume(),!!x}let f=()=>n&&n.state==="running";function c(x,y,S,A,w,I){x.gain.cancelScheduledValues(y),x.gain.setValueAtTime(1e-4,y),x.gain.exponentialRampToValueAtTime(A,y+S),x.gain.setValueAtTime(A,y+S+w),x.gain.exponentialRampToValueAtTime(1e-4,y+S+w+I)}function d(x,y,S,A,{gain:w=.2,a:I=.01,rel:N=.2,dest:O=e,detune:z=0,filter:F=null,pan:X=0}={}){let it=n.createOscillator();it.type=x,it.frequency.setValueAtTime(y,S),it.detune.value=z;let P=n.createGain(),mt=it;if(F){let U=n.createBiquadFilter();U.type=F.type||"lowpass",U.frequency.value=F.freq,U.Q.value=F.q||.7,mt.connect(U),mt=U}mt.connect(P);let Ot=P;if(X&&n.createStereoPanner){let U=n.createStereoPanner();U.pan.value=X,P.connect(U),Ot=U}return Ot.connect(O),c(P,S,I,w,Math.max(0,A-I),N),it.start(S),it.stop(S+A+N+.05),it}function M(x,y,{gain:S=.2,a:A=.01,rel:w=.2,type:I="bandpass",freq:N=1e3,q:O=1,dest:z=e}={}){let F=n.createBufferSource();F.buffer=s,F.loop=!0;let X=n.createBiquadFilter();X.type=I,X.frequency.setValueAtTime(N,x),X.Q.value=O;let it=n.createGain();return F.connect(X),X.connect(it),it.connect(z),c(it,x,A,S,Math.max(0,y-A),w),F.start(x,Math.random()),F.stop(x+y+w+.05),{s:F,f:X,g:it}}let m=x=>440*2**((x-69)/12),p={horn(x){for(let[y,S]of[[233,0],[293.7,6],[349,-5]])d("sawtooth",y*.92,x,1.1,{gain:.13,a:.03,rel:.25,filter:{freq:2200},detune:S}).frequency.exponentialRampToValueAtTime(y,x+.12);d("square",116.5,x,1.1,{gain:.05,a:.03,rel:.25,filter:{freq:800}})},crowd(x,{dur:y=3.5,peak:S=.32}={}){for(let[A,w,I]of[[700,.8,1],[1800,1.2,.7],[3200,1.5,.35]]){let N=M(x,y*.4,{gain:S*I,a:y*.45,rel:y*.55,freq:A,q:w}),O=n.createOscillator();O.frequency.value=5+Math.random()*4;let z=n.createGain();z.gain.value=S*I*.35,O.connect(z),z.connect(N.g.gain),O.start(x),O.stop(x+y+.2)}for(let A=0;A<4;A++){let w=x+.4+Math.random()*y*.5;d("triangle",500+Math.random()*300,w,.35,{gain:.025,a:.08,rel:.25,filter:{freq:1600},pan:Math.random()*1.6-.8}).frequency.exponentialRampToValueAtTime(800+Math.random()*400,w+.3)}},whoosh(x){let y=M(x,.45,{gain:.35,a:.12,rel:.25,freq:400,q:2.5});y.f.frequency.exponentialRampToValueAtTime(3500,x+.3),y.f.frequency.exponentialRampToValueAtTime(700,x+.7)},bell(x){for(let y of[x,x+.42])[[1,.22,1.6],[2.76,.09,.9],[5.4,.05,.5],[8.93,.03,.3]].forEach(([S,A,w])=>d("sine",830*S,y,.01,{gain:A,a:.003,rel:w}))},fanfare(x){let y=[[67,0,.14],[72,.15,.14],[76,.3,.14],[79,.45,.32],[76,.8,.14],[79,.95,.9]];for(let[S,A,w]of y){for(let I of[-7,7])d("sawtooth",m(S),x+A,w,{gain:.07,a:.02,rel:.18,filter:{freq:2600},detune:I});d("square",m(S-12),x+A,w,{gain:.03,a:.02,rel:.15,filter:{freq:1200}})}for(let S of[60,64,67,72])d("triangle",m(S),x+.95,.9,{gain:.06,a:.03,rel:.6});p.cymbal(x+.95,.12)},cymbal(x,y=.15){M(x,.05,{gain:y,a:.002,rel:1.4,type:"highpass",freq:6e3,q:.5})},kaching(x){M(x,.03,{gain:.3,a:.002,rel:.05,type:"highpass",freq:3e3}),M(x+.05,.02,{gain:.25,a:.002,rel:.06,type:"bandpass",freq:1800,q:3});for(let[y,S]of[[2093,.14],[2637,.1],[3136,.08],[4186,.05]])d("sine",y,x+.12,.02,{gain:S,a:.003,rel:.9});for(let y=0;y<6;y++)d("sine",3e3+Math.random()*2e3,x+.2+y*.05,.01,{gain:.03,a:.002,rel:.12})},sadtrombone(x){let y=[[55,0,.42],[54,.48,.42],[53,.96,.42],[52,1.44,1.3]];for(let[S,A,w]of y){let I=d("sawtooth",m(S),x+A,w,{gain:.11,a:.04,rel:.2,filter:{freq:1100,q:2}});if(A>1){let N=n.createOscillator();N.frequency.value=6;let O=n.createGain();O.gain.value=6,N.connect(O),O.connect(I.frequency),N.start(x+A),N.stop(x+A+w+.3),I.frequency.setValueAtTime(m(S),x+A),I.frequency.linearRampToValueAtTime(m(S-1),x+A+w)}}},drumroll(x,{dur:y=2.2}={}){let S=Math.floor(y*16);for(let A=0;A<S;A++)M(x+A/16,.02,{gain:.04+.16*(A/S),a:.002,rel:.06,freq:1800,q:.8});p.cymbal(x+y,.2),d("sine",70,x+y,.05,{gain:.5,a:.003,rel:.4})},sting(x){for(let y of[48,55,60,63])for(let S of[-8,8])d("sawtooth",m(y),x,.16,{gain:.05,a:.01,rel:.5,filter:{freq:1800},detune:S});p.cymbal(x,.1)},pop(x){d("sine",520,x,.02,{gain:.18,a:.003,rel:.12}).frequency.exponentialRampToValueAtTime(1100,x+.08)},tick(x){d("square",1600,x,.005,{gain:.04,a:.001,rel:.03,filter:{freq:3e3}})},lock(x){d("sine",140,x,.04,{gain:.4,a:.002,rel:.2}),M(x,.02,{gain:.2,a:.002,rel:.05,freq:2500,q:1}),d("triangle",660,x+.06,.05,{gain:.08,a:.005,rel:.2}),d("triangle",990,x+.14,.08,{gain:.08,a:.005,rel:.3})},join(x){[72,76,79,84].forEach((y,S)=>d("triangle",m(y),x+S*.07,.06,{gain:.1,a:.005,rel:.2}))},beep(x){d("square",880,x,.08,{gain:.06,a:.005,rel:.05,filter:{freq:2500}})},go(x){d("square",1320,x,.3,{gain:.07,a:.005,rel:.1,filter:{freq:3e3}})},stamp(x){d("sine",90,x,.05,{gain:.5,a:.002,rel:.25}),M(x,.04,{gain:.25,a:.002,rel:.1,type:"lowpass",freq:1200})},reveal(x){[64,67,71,74].forEach((y,S)=>d("triangle",m(y+12),x+S*.05,.05,{gain:.06,a:.004,rel:.25}))},boo(x){d("sawtooth",160,x,.7,{gain:.06,a:.1,rel:.3,filter:{freq:600}}).frequency.linearRampToValueAtTime(110,x+.8)}};function b(x,y){if(!f()||a)return;let S=p[x];if(S)try{S(n.currentTime+.02,y)}catch(A){console.warn("sfx",x,A)}}let _={lobby:{bpm:92,chords:[[60,64,67,71],[57,60,64,67],[53,57,60,64],[55,59,62,67]],arp:[0,2,1,3,2,1,3,2],swing:.08,shaker:!0,block:!1},betting:{bpm:108,chords:[[57,60,64],[53,57,60],[60,64,67],[55,59,62]],arp:[0,1,2,1,0,2,1,2],swing:.05,shaker:!0,block:!0},results:{bpm:100,chords:[[60,64,67],[65,69,72],[55,59,62],[60,64,67]],arp:[0,1,2,3,2,1,0,1],swing:.06,shaker:!1,block:!1}};function v(){if(!h)return;let x=_[h.kind],y=60/x.bpm/2;for(;h.nextT<n.currentTime+.35;){let S=h.step,A=Math.floor(S/8)%x.chords.length,w=x.chords[A],I=h.nextT+(S%2?x.swing*y:0),N=S%8;if(N===0){for(let z of w.slice(0,3))for(let F of[-6,6])d("triangle",m(z),I,y*7.5,{gain:.022,a:.35,rel:.6,dest:i,detune:F,filter:{freq:1300}});d("sine",m(w[0]-24),I,y*2.5,{gain:.14,a:.01,rel:.25,dest:i})}N===4&&d("sine",m(w[0]-24+7),I,y*2,{gain:.1,a:.01,rel:.25,dest:i});let O=w[x.arp[N]%w.length]+12;S%16<15&&d("sine",m(O),I,.02,{gain:.045,a:.004,rel:y*1.6,dest:i}),d("triangle",m(O+12),I,.01,{gain:.01,a:.002,rel:.15,dest:i}),x.shaker&&S%2===1&&M(I,.01,{gain:.018,a:.003,rel:.05,type:"highpass",freq:7e3,dest:i}),x.block&&(N===2||N===6)&&d("sine",1250,I,.004,{gain:.04,a:.001,rel:.05,dest:i}),h.step++,h.nextT+=y}}function L(x="lobby"){if(!u()||h?.kind===x)return;if(E(.6),!l){h=null,T=x;return}T=x;let y=n.createGain();y.gain.value=1e-4,y.connect(r);let S=i;i=y,y.gain.exponentialRampToValueAtTime(.32,n.currentTime+1.5),h={kind:x,nextT:n.currentTime+.1,step:0,bus:y},h.timer=setInterval(()=>{f()&&v()},90)}let T=null;function E(x=.8){if(!h)return;clearInterval(h.timer);let y=h.bus;n&&y&&(y.gain.cancelScheduledValues(n.currentTime),y.gain.setValueAtTime(y.gain.value,n.currentTime),y.gain.exponentialRampToValueAtTime(1e-4,n.currentTime+x),setTimeout(()=>y.disconnect(),x*1e3+500)),h=null}function R(x){!h||!n||h.bus.gain.setTargetAtTime(x?.14:.32,n.currentTime,.25)}return{unlock:g,play:b,ready:f,get context(){return n},setVolume(x){o=Math.max(0,Math.min(1,x)),t&&t.gain.setTargetAtTime(a?0:o,n.currentTime,.05)},setMuted(x){a=!!x,t&&t.gain.setTargetAtTime(a?0:o,n.currentTime,.05)},get muted(){return a},setMusicEnabled(x){if(l=!!x,l)T&&!h&&L(T);else{let y=h?.kind||T;E(),T=y}},startMusic:L,stopMusic:E,duck:R,get musicKind(){return h?.kind||null}}}var ye=(n,t=document)=>t.querySelector(n),li=(n,t=document)=>[...t.querySelectorAll(n)];function Ht(n){return String(n??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}function Ke(n){let t=document.createElement("template");return t.innerHTML=n.trim(),t.content.firstElementChild}var Sh="pp";function mn(n){let t=Math.round(Number(n)||0);return`${t<0?"\u2212":""}${Math.abs(t).toLocaleString("en-GB")}${Sh}`}function Yi(n){let t=Math.round(Number(n)||0);return`${t>0?"+":t<0?"\u2212":"\xB1"}${Math.abs(t).toLocaleString("en-GB")}${Sh}`}function Ai(n){let t=Math.abs(Math.round(Number(n)||0));return`${t.toLocaleString("en-GB")} Parkpound${t===1?"":"s"}`}var ms=n=>n?.shortName||n?.nickname||"";function rf(n){let t=n%100;return t>=11&&t<=13?"th":{1:"st",2:"nd",3:"rd"}[n%10]||"th"}function Zi(n,t=""){return`<span class="ordinal p${n} ${t}">${n}<sup>${rf(n)}</sup></span>`}function vn(n,t=64,e=""){let i=n||{emoji:"\u{1F642}",colour:"#2f8cff"};return`<span class="avatar ${e}" style="width:${t}px;height:${t}px;font-size:${Math.round(t*.58)}px;background:${Ht(i.colour)}">${Ht(i.emoji)}</span>`}function wh(n){return n=Math.round(Number(n)||0),`${Math.floor(n/60)}:${String(n%60).padStart(2,"0")}`}function $a(n,t,e,i=1200,s=o=>String(Math.round(o)),r){let o=performance.now(),a,l=Math.round(t),h=u=>{let g=Math.min(1,(u-o)/i),f=1-(1-g)**3,c=t+(e-t)*f;n.textContent=s(c);let d=Math.round(c);r&&d!==l&&(l=d,r(d)),g<1&&(a=requestAnimationFrame(h))};return a=requestAnimationFrame(h),()=>cancelAnimationFrame(a)}function ln(n,t){return n?.runners?.find(e=>e.id===t)}function ro(n,t){if(!n||!t)return"";if(t.type==="win")return`${ln(n,t.runnerId)?.nickname||t.runnerId} to WIN`;if(t.type==="inplay")return`${ln(n,t.runnerId)?.nickname||t.runnerId} to WIN (halfway)`;if(t.type==="prop")return`${n.props?.find(o=>o.id===t.propId)?.text||"Side bet"} \u2014 ${String(t.pick).toUpperCase()}`;let e=n.matchups?.find(r=>r.id===t.matchupId);if(!e)return"Head-to-head";let i=ms(ln(n,t.pick))||t.pick,s=ms(ln(n,t.pick===e.a?e.b:e.a));return`${i} to beat ${s}`}function dr(n,t){if(t.type==="win")return ln(n,t.runnerId)?.odds?.win??0;if(t.type==="inplay")return Number(t.odds)||0;if(t.type==="prop"){let i=n?.props?.find(s=>s.id===t.propId);return(t.pick==="yes"?i?.odds?.yes:i?.odds?.no)??0}let e=n?.matchups?.find(i=>i.id===t.matchupId);return e?t.pick===e.a?e.odds.a:e.odds.b:0}function ur(n=document.body,{count:t=120,colours:e=["#ffd23f","#ff4d5a","#2ec27e","#2f8cff","#ff6fb5","#7b4dff"],duration:i=3200,zIndex:s=9e3,contained:r=!1}={}){let o=document.createElement("div");o.style.cssText=`position:${r?"absolute":"fixed"};inset:0;pointer-events:none;overflow:hidden;z-index:${s}`;for(let a=0;a<t;a++){let l=document.createElement("i"),h=8+Math.random()*12,u=Math.random()*100,g=(Math.random()-.5)*30,f=Math.random()*720-360,c=Math.random()*400,d=i*(.6+Math.random()*.5);l.style.cssText=`position:absolute;left:${u}%;top:-30px;width:${h}px;height:${h*(.4+Math.random()*.6)}px;background:${e[a%e.length]};border:2px solid #14183c;border-radius:${Math.random()<.3?"50%":"2px"}`,l.animate([{transform:"translate(0,0) rotate(0deg)",opacity:1},{transform:`translate(${g}vw, 110vh) rotate(${f}deg)`,opacity:1}],{duration:d,delay:c,easing:"cubic-bezier(.2,.6,.4,1)",fill:"forwards"}),o.appendChild(l)}n.appendChild(o),setTimeout(()=>o.remove(),i*1.3+500)}function oo(n){return n?.type==="prop"?null:n?.runnerId||n?.pick||null}function Eh(n){return{win:"WIN",h2h:"HEAD-TO-HEAD",prop:"SIDE BET",inplay:"HALFWAY"}[n?.type]||""}function Va(n){let t=String(n?.text||"");if(n?.style==="tipster"){let e=t.indexOf('"');if(e>0){let i=t.slice(0,e).trim(),s=t.slice(e).replace(/^"|"$/g,"").replace(/"/g,""),r=n.voice||(/\bpam\b/i.test(i)?"pam":/\bjeff\b/i.test(i)?"jeff":"");return`<span class="cfact">${Ht(i)}</span> <span class="cquote ${r}">${r?`<b>${r==="pam"?"PAM":"JEFF"}</b>`:""}\u201C${Ht(s)}\u201D</span>`}}return Ht(t)}function Ga(n,t){if(!t)return"";if(t.type==="win")return ln(n,t.runnerId)?.odds?.display||`\xD7${dr(n,t)}`;if(t.type==="inplay")return t.display||`\xD7${Number(t.lockedOdds??t.odds)||""}`;if(t.type==="prop"){let i=n?.props?.find(s=>s.id===t.propId);return(t.pick==="yes"?i?.odds?.displayYes:i?.odds?.displayNo)||`\xD7${dr(n,t)}`}let e=n?.matchups?.find(i=>i.id===t.matchupId);return(t.pick===e?.a?e?.odds?.displayA:e?.odds?.displayB)||`\xD7${dr(n,t)}`}function Th(n){let t=Math.round(Number(n?.returned)||0),e=Math.round(Number(n?.stake)||0);return n?.void||n?.push||!n?.won&&t===e&&e>0?{kind:"push",net:0,text:"refunded \xB10"}:n?.won?{kind:"won",net:t-e,text:Yi(t-e)}:{kind:"lost",net:-e,text:Yi(-e)}}var ne="#14183c";function of(n){let t=2166136261;for(let e of String(n))t^=e.charCodeAt(0),t=Math.imul(t,16777619);return t>>>0}var Ah=["#2b1a10","#5a3418","#8a5a2b","#d8a24a","#1b1b1b","#b8432a","#9aa0a8"];function gs(n,t){let e=parseInt(String(n||"#888888").replace("#","").padEnd(6,"8").slice(0,6),16),i=e>>16&255,s=e>>8&255,r=e&255,o=t<0?0:255,a=Math.abs(t);return i=Math.round((o-i)*a+i),s=Math.round((o-s)*a+s),r=Math.round((o-r)*a+r),`#${(1<<24|i<<16|s<<8|r).toString(16).slice(1)}`}function Rh(n,{size:t=120,idSuffix:e=""}={}){let i=n?.look||{},s=n?.colour?.primary||"#ff4d5a",r=n?.colour?.secondary||"#ffffff",o=i.skin||"#f1c6a5",a=of(n?.id+(n?.nickname||"")),l=i.hairColour||i.hairColor||Ah[a%Ah.length],h=i.build||"compact",u={stocky:50,tall:40,lanky:34,compact:42}[h]??42,g={tall:8,lanky:10,stocky:2,compact:4}[h]??4,f={compact:31,stocky:30,lanky:28,tall:29}[h]??30,c=60,d=50-g/2,M=n?.lane??"",m=`pc${a.toString(36)}${e}`,p=[];p.push(`<defs><clipPath id="${m}"><circle cx="60" cy="60" r="56"/></clipPath></defs>`),p.push(`<circle cx="60" cy="60" r="56" fill="${gs(s,.55)}"/>`),p.push(`<g clip-path="url(#${m})">`),p.push(`<path d="M0 92 L120 70 L120 120 L0 120Z" fill="${gs(s,.35)}" opacity=".6"/>`);let b=d+f+g-4;p.push(`<path d="M${c-u} 124 Q${c-u} ${b+6} ${c-14} ${b} L${c+14} ${b} Q${c+u} ${b+6} ${c+u} 124Z" fill="${s}" stroke="${ne}" stroke-width="5" stroke-linejoin="round"/>`),p.push(`<path d="M${c-18} ${b+1} L${c-2} ${b+1} L${c+26} 124 L${c+8} 124Z" fill="${r}" stroke="${ne}" stroke-width="3" stroke-linejoin="round"/>`),p.push(`<rect x="${c-30}" y="${b+14}" width="22" height="17" rx="3" fill="#fff" stroke="${ne}" stroke-width="3" transform="rotate(-6 ${c-19} ${b+22})"/>`),p.push(`<text x="${c-19}" y="${b+28}" font-family="Lilita One, Arial Black, sans-serif" font-size="14" text-anchor="middle" fill="${ne}" transform="rotate(-6 ${c-19} ${b+22})">${M}</text>`),p.push(`<rect x="${c-9}" y="${d+f-8}" width="18" height="${g+12}" fill="${o}" stroke="${ne}" stroke-width="5"/>`),i.accessory==="medal"&&(p.push(`<path d="M${c-12} ${b} L${c} ${b+22} L${c+12} ${b}" fill="none" stroke="${r}" stroke-width="6"/>`),p.push(`<circle cx="${c}" cy="${b+26}" r="9" fill="#ffcf3a" stroke="${ne}" stroke-width="4"/>`));let _=i.hair||"short";["long","ponytail","bob"].includes(_)&&p.push(`<path d="M${c-f-4} ${d} Q${c-f-6} ${d+f+14} ${c-f+10} ${d+f+10} L${c+f-10} ${d+f+10} Q${c+f+6} ${d+f+14} ${c+f+4} ${d}Z" fill="${l}" stroke="${ne}" stroke-width="5" stroke-linejoin="round"/>`),_==="ponytail"&&p.push(`<ellipse cx="${c+f+6}" cy="${d-6}" rx="9" ry="16" fill="${l}" stroke="${ne}" stroke-width="5" transform="rotate(25 ${c+f+6} ${d-6})"/>`),p.push(`<circle cx="${c-f+1}" cy="${d+4}" r="7" fill="${o}" stroke="${ne}" stroke-width="5"/>`),p.push(`<circle cx="${c+f-1}" cy="${d+4}" r="7" fill="${o}" stroke="${ne}" stroke-width="5"/>`),p.push(`<ellipse cx="${c}" cy="${d}" rx="${f}" ry="${f+2}" fill="${o}" stroke="${ne}" stroke-width="5"/>`),p.push(`<ellipse cx="${c-16}" cy="${d+11}" rx="6" ry="4" fill="#ff8f8f" opacity=".45"/><ellipse cx="${c+16}" cy="${d+11}" rx="6" ry="4" fill="#ff8f8f" opacity=".45"/>`);let v=d-f-2,L={short:`<path d="M${c-f+2} ${d-6} Q${c-f} ${v-4} ${c} ${v-2} Q${c+f} ${v-4} ${c+f-2} ${d-6} Q${c+8} ${d-18} ${c-f+2} ${d-6}Z"/>`,buzz:`<path d="M${c-f+3} ${d-8} Q${c} ${v-6} ${c+f-3} ${d-8} Q${c} ${d-20} ${c-f+3} ${d-8}Z"/>`,curly:`<path d="M${c-f} ${d-2} q-6 -12 4 -18 q0 -12 14 -12 q6 -10 18 -4 q12 -4 16 8 q12 4 8 18 q-14 -8 -30 -6 q-16 0 -30 14z"/>`,afro:`<circle cx="${c}" cy="${d-14}" r="${f+8}"/>`,mohawk:`<path d="M${c-6} ${d-14} L${c-8} ${v-16} L${c+8} ${v-16} L${c+6} ${d-14}Z"/>`,quiff:`<path d="M${c-f+2} ${d-6} Q${c-f} ${v} ${c-4} ${v-2} Q${c+20} ${v-18} ${c+f+4} ${v+2} Q${c+f} ${d-8} ${c+f-2} ${d-6} Q${c+8} ${d-18} ${c-f+2} ${d-6}Z"/>`,bun:`<g><circle cx="${c}" cy="${v-6}" r="10"/><path d="M${c-f+2} ${d-6} Q${c-f} ${v-2} ${c} ${v} Q${c+f} ${v-2} ${c+f-2} ${d-6} Q${c} ${d-16} ${c-f+2} ${d-6}Z"/></g>`,long:`<path d="M${c-f+1} ${d+2} Q${c-f} ${v-4} ${c} ${v-2} Q${c+f} ${v-4} ${c+f-1} ${d+2} Q${c+10} ${d-16} ${c-2} ${d-12} Q${c-14} ${d-16} ${c-f+1} ${d+2}Z"/>`,bald:""};L.ponytail=L.long,L.bob=L.long,L.spiky=`<path d="M${c-f+2} ${d-6} L${c-f+2} ${v+2} L${c-14} ${v-12} L${c-8} ${v-2} L${c} ${v-16} L${c+6} ${v-2} L${c+15} ${v-12} L${c+f-2} ${v+2} L${c+f-2} ${d-6} Q${c} ${d-18} ${c-f+2} ${d-6}Z"/>`,L.mullet=`<g><path d="M${c+f-6} ${d} Q${c+f+10} ${d+22} ${c+f-2} ${d+34} L${c+f-14} ${d+20}Z"/><path d="M${c-f+6} ${d} Q${c-f-10} ${d+22} ${c-f+2} ${d+34} L${c-f+14} ${d+20}Z"/>${L.short}</g>`,L.swept=`<path d="M${c-f+2} ${d-4} Q${c-f-4} ${v-6} ${c+6} ${v-6} Q${c+f+8} ${v} ${c+f-1} ${d-2} Q${c+4} ${d-22} ${c-f+2} ${d-4}Z"/>`;let T=L[_]??L.short;T&&p.push(`<g fill="${l}" stroke="${ne}" stroke-width="5" stroke-linejoin="round">${T}</g>`);let E=i.face||"grin",R=d+1,x=(N,O)=>O?`<path d="M${N-5} ${R} Q${N} ${R+4} ${N+5} ${R}" fill="none" stroke="${ne}" stroke-width="3.5" stroke-linecap="round"/>`:`<ellipse cx="${N}" cy="${R}" rx="4.2" ry="5.6" fill="${ne}"/><circle cx="${N+1.4}" cy="${R-2}" r="1.5" fill="#fff"/>`,y="",S="",A=x(c-11)+x(c+11);switch(E){case"determined":case"focused":case"fierce":y=`<path d="M${c-18} ${R-12} L${c-5} ${R-7} M${c+18} ${R-12} L${c+5} ${R-7}" stroke="${ne}" stroke-width="4" stroke-linecap="round"/>`,S=`<path d="M${c-9} ${d+17} L${c+9} ${d+15}" stroke="${ne}" stroke-width="4" stroke-linecap="round"/>`;break;case"smug":case"cheeky":A=`<path d="M${c-16} ${R} L${c-6} ${R}" stroke="${ne}" stroke-width="4" stroke-linecap="round"/>`+x(c+11),y=`<path d="M${c+5} ${R-10} Q${c+11} ${R-15} ${c+18} ${R-10}" fill="none" stroke="${ne}" stroke-width="3.5" stroke-linecap="round"/>`,S=`<path d="M${c-8} ${d+15} Q${c+4} ${d+19} ${c+11} ${d+11}" fill="none" stroke="${ne}" stroke-width="4" stroke-linecap="round"/>`;break;case"worried":case"nervous":case"anxious":y=`<path d="M${c-17} ${R-8} L${c-6} ${R-13} M${c+17} ${R-8} L${c+6} ${R-13}" stroke="${ne}" stroke-width="3.5" stroke-linecap="round"/>`,S=`<path d="M${c-10} ${d+17} q5 -5 10 0 q5 5 10 0" fill="none" stroke="${ne}" stroke-width="3.5" stroke-linecap="round"/>`;break;case"sleepy":case"tired":case"dozy":A=x(c-11,!0)+x(c+11,!0),S=`<ellipse cx="${c+2}" cy="${d+17}" rx="5" ry="4" fill="${ne}"/>`;break;case"wink":A=x(c-11,!0)+x(c+11),S=`<path d="M${c-11} ${d+12} Q${c} ${d+24} ${c+11} ${d+12}Z" fill="#fff" stroke="${ne}" stroke-width="3.5" stroke-linejoin="round"/>`;break;case"gritted":y=`<path d="M${c-18} ${R-11} L${c-5} ${R-7} M${c+18} ${R-11} L${c+5} ${R-7}" stroke="${ne}" stroke-width="4" stroke-linecap="round"/>`,S=`<rect x="${c-12}" y="${d+11}" width="24" height="10" rx="3" fill="#fff" stroke="${ne}" stroke-width="3.5"/><path d="M${c-4} ${d+11} v10 M${c+4} ${d+11} v10 M${c-12} ${d+16} h24" stroke="${ne}" stroke-width="2"/>`;break;case"tongue-out":A=x(c-11,!0)+x(c+11),S=`<path d="M${c-11} ${d+12} Q${c} ${d+20} ${c+11} ${d+12}" fill="none" stroke="${ne}" stroke-width="3.5" stroke-linecap="round"/><path d="M${c-2} ${d+15} q4 14 10 0z" fill="#ff6b7a" stroke="${ne}" stroke-width="3"/>`;break;case"wide-eyed":A=`<circle cx="${c-11}" cy="${R}" r="7.5" fill="#fff" stroke="${ne}" stroke-width="3"/><circle cx="${c-11}" cy="${R}" r="3.2" fill="${ne}"/><circle cx="${c+11}" cy="${R}" r="7.5" fill="#fff" stroke="${ne}" stroke-width="3"/><circle cx="${c+11}" cy="${R}" r="3.2" fill="${ne}"/>`,S=`<ellipse cx="${c}" cy="${d+17}" rx="5" ry="6" fill="${ne}"/>`;break;case"shocked":case"surprised":S=`<ellipse cx="${c}" cy="${d+17}" rx="6" ry="8" fill="${ne}"/>`,y=`<path d="M${c-17} ${R-13} Q${c-11} ${R-17} ${c-5} ${R-13} M${c+17} ${R-13} Q${c+11} ${R-17} ${c+5} ${R-13}" fill="none" stroke="${ne}" stroke-width="3.5" stroke-linecap="round"/>`;break;default:S=`<path d="M${c-13} ${d+11} Q${c} ${d+27} ${c+13} ${d+11}Z" fill="#fff" stroke="${ne}" stroke-width="3.5" stroke-linejoin="round"/><path d="M${c-6} ${d+19} Q${c} ${d+23} ${c+6} ${d+19}" fill="#ff6b7a"/>`}p.push(A,y,S),p.push(`<path d="M${c-2} ${d+4} Q${c+3} ${d+8} ${c-1} ${d+10}" fill="none" stroke="${gs(o,-.35)}" stroke-width="3" stroke-linecap="round"/>`);let w=i.accessory;w==="sunglasses"||w==="shades"?p.push(`<g stroke="${ne}" stroke-width="3.5"><rect x="${c-21}" y="${R-7}" width="17" height="12" rx="4" fill="${ne}"/><rect x="${c+4}" y="${R-7}" width="17" height="12" rx="4" fill="${ne}"/><path d="M${c-4} ${R-3} L${c+4} ${R-3}"/></g><path d="M${c-18} ${R-4} l5 0 M${c+7} ${R-4} l5 0" stroke="#fff" stroke-width="2.5" stroke-linecap="round"/>`):w==="glasses"||w==="specs"?p.push(`<g stroke="${ne}" stroke-width="3.5" fill="rgba(255,255,255,.25)"><circle cx="${c-11}" cy="${R}" r="8"/><circle cx="${c+11}" cy="${R}" r="8"/><path d="M${c-3} ${R} L${c+3} ${R}"/></g>`):w==="moustache"||w==="mustache"||w==="tache"?p.push(`<path d="M${c} ${d+12} q-8 -6 -16 0 q6 6 16 0 q8 -6 16 0 q-6 6 -16 0z" fill="${l}" stroke="${ne}" stroke-width="3" stroke-linejoin="round"/>`):w==="headphones"||w==="earbuds"?p.push(`<path d="M${c-f-2} ${d+2} Q${c} ${v-22} ${c+f+2} ${d+2}" fill="none" stroke="${ne}" stroke-width="7"/><rect x="${c-f-8}" y="${d-6}" width="12" height="20" rx="5" fill="${r}" stroke="${ne}" stroke-width="4"/><rect x="${c+f-4}" y="${d-6}" width="12" height="20" rx="5" fill="${r}" stroke="${ne}" stroke-width="4"/>`):w==="beard"?p.push(`<path d="M${c-f+4} ${d+4} Q${c-f+6} ${d+f+6} ${c} ${d+f+8} Q${c+f-6} ${d+f+6} ${c+f-4} ${d+4} Q${c+14} ${d+18} ${c} ${d+22} Q${c-14} ${d+18} ${c-f+4} ${d+4}Z" fill="${l}" stroke="${ne}" stroke-width="3.5" stroke-linejoin="round"/>`):w==="scarf"?p.push(`<path d="M${c-20} ${b-4} Q${c} ${b+8} ${c+20} ${b-4} L${c+22} ${b+6} Q${c} ${b+18} ${c-22} ${b+6}Z" fill="${r}" stroke="${ne}" stroke-width="3.5"/><rect x="${c+8}" y="${b+6}" width="9" height="22" rx="2" fill="${r}" stroke="${ne}" stroke-width="3"/>`):w==="cape"?p.push(`<path d="M${c-22} ${b} L${c-46} 124 M${c+22} ${b} L${c+46} 124" stroke="${r}" stroke-width="8" stroke-linecap="round"/>`):w==="wristbands"||w==="bumbag"?p.push(`<rect x="${c-26}" y="${b+30}" width="${w==="bumbag"?30:14}" height="${w==="bumbag"?14:10}" rx="5" fill="${r}" stroke="${ne}" stroke-width="3.5"/>`):w==="whistle"&&p.push(`<path d="M${c-10} ${b} Q${c} ${b+18} ${c+10} ${b}" fill="none" stroke="${r}" stroke-width="3"/><rect x="${c-6}" y="${b+12}" width="14" height="8" rx="3" fill="#cfd8e8" stroke="${ne}" stroke-width="3"/>`);let I=i.hat;return I==="backwards-cap"?(p.push(`<path d="M${c-f+1} ${d-8} Q${c-f+2} ${v-10} ${c} ${v-10} Q${c+f-2} ${v-10} ${c+f-1} ${d-8}Z" fill="${s}" stroke="${ne}" stroke-width="5" stroke-linejoin="round"/>`),p.push(`<path d="M${c-f+4} ${d-12} Q${c-f-14} ${d-14} ${c-f-18} ${d-4} L${c-f+2} ${d-4}Z" fill="${gs(s,-.2)}" stroke="${ne}" stroke-width="5" stroke-linejoin="round"/>`)):I==="cap"||I==="baseball cap"||I==="trucker"?(p.push(`<path d="M${c-f+1} ${d-8} Q${c-f+2} ${v-10} ${c} ${v-10} Q${c+f-2} ${v-10} ${c+f-1} ${d-8}Z" fill="${s}" stroke="${ne}" stroke-width="5" stroke-linejoin="round"/>`),p.push(`<path d="M${c-6} ${d-10} Q${c+24} ${d-18} ${c+f+16} ${d-6} L${c+f-2} ${d-4}Z" fill="${gs(s,-.2)}" stroke="${ne}" stroke-width="5" stroke-linejoin="round"/>`),p.push(`<circle cx="${c}" cy="${v-10}" r="3.5" fill="${r}" stroke="${ne}" stroke-width="2.5"/>`)):I==="beanie"||I==="bobble"||I==="bobble hat"||I==="woolly hat"?(p.push(`<path d="M${c-f} ${d-6} Q${c-f} ${v-14} ${c} ${v-14} Q${c+f} ${v-14} ${c+f} ${d-6}Z" fill="${r}" stroke="${ne}" stroke-width="5" stroke-linejoin="round"/>`),p.push(`<rect x="${c-f-2}" y="${d-12}" width="${f*2+4}" height="11" rx="5" fill="${s}" stroke="${ne}" stroke-width="5"/>`),p.push(`<circle cx="${c}" cy="${v-16}" r="8" fill="${s}" stroke="${ne}" stroke-width="5"/>`)):I==="headband"||I==="sweatband"?(p.push(`<path d="M${c-f} ${d-13} Q${c} ${d-22} ${c+f} ${d-13} L${c+f+1} ${d-4} Q${c} ${d-13} ${c-f-1} ${d-4}Z" fill="${r}" stroke="${ne}" stroke-width="4" stroke-linejoin="round"/>`),p.push(`<path d="M${c+f} ${d-9} l12 -4 l-2 10z" fill="${r}" stroke="${ne}" stroke-width="3.5" stroke-linejoin="round"/>`)):I==="visor"?p.push(`<path d="M${c-f} ${d-12} Q${c} ${d-20} ${c+f} ${d-12} L${c+f} ${d-5} Q${c} ${d-12} ${c-f} ${d-5}Z" fill="${s}" stroke="${ne}" stroke-width="4"/><path d="M${c-18} ${d-10} Q${c+4} ${d-2} ${c+30} ${d-10} L${c+20} ${d-15}Z" fill="${gs(s,-.2)}" stroke="${ne}" stroke-width="4" stroke-linejoin="round"/>`):I==="bucket"||I==="bucket hat"||I==="sun hat"?p.push(`<path d="M${c-f-12} ${d-6} L${c-f+4} ${v-8} Q${c} ${v-16} ${c+f-4} ${v-8} L${c+f+12} ${d-6} Q${c} ${d-14} ${c-f-12} ${d-6}Z" fill="${r}" stroke="${ne}" stroke-width="5" stroke-linejoin="round"/>`):I==="party"||I==="party hat"?p.push(`<path d="M${c-14} ${v+4} L${c+4} ${v-30} L${c+16} ${v+2}Z" fill="${s}" stroke="${ne}" stroke-width="5" stroke-linejoin="round"/><circle cx="${c+4}" cy="${v-32}" r="5" fill="${r}" stroke="${ne}" stroke-width="3"/>`):I==="tophat"||I==="top hat"?p.push(`<rect x="${c-18}" y="${v-30}" width="36" height="30" rx="3" fill="${ne}"/><rect x="${c-18}" y="${v-10}" width="36" height="7" fill="${s}"/><rect x="${c-30}" y="${v-2}" width="60" height="8" rx="4" fill="${ne}"/>`):I==="crown"?p.push(`<path d="M${c-20} ${v+2} L${c-22} ${v-20} L${c-10} ${v-8} L${c} ${v-24} L${c+10} ${v-8} L${c+22} ${v-20} L${c+20} ${v+2}Z" fill="#ffcf3a" stroke="${ne}" stroke-width="4" stroke-linejoin="round"/>`):I&&p.push(`<path d="M${c-f+1} ${d-8} Q${c-f+2} ${v-10} ${c} ${v-10} Q${c+f-2} ${v-10} ${c+f-1} ${d-8}Z" fill="${r}" stroke="${ne}" stroke-width="5" stroke-linejoin="round"/>`),p.push("</g>"),p.push(`<circle cx="60" cy="60" r="56" fill="none" stroke="${ne}" stroke-width="6"/>`),`<svg class="portrait" viewBox="0 0 120 120" width="${t}" height="${t}" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">${p.join("")}</svg>`}var af=/(daniel|george|arthur|ryan|oliver|thomas|male|james|harry|guy|brian|fred|alex|aaron)/i,lf=/(kate|serena|martha|libby|sonia|hazel|susan|female|stephanie|fiona|moira|tessa|karen|emma|amy|samantha|victoria|zira|aria|jenny|catherine)/i;function Ch({onLine:n,onIdle:t}={}){let e=typeof window<"u"?window.speechSynthesis:null,i=!0,s=.9,r={jeff:null,pam:null},o=[],a=null,l=null;function h(){if(!e)return;let M=e.getVoices()||[];if(!M.length)return;let m=M.filter(E=>/en[-_]GB/i.test(E.lang)),p=M.filter(E=>/^en/i.test(E.lang)),b=m.length?m:p.length?p:M,v=(E=>[...E.filter(R=>R.localService),...E.filter(R=>!R.localService)])(b),L=v.find(E=>af.test(E.name))||v[0],T=v.find(E=>lf.test(E.name)&&E!==L)||v.find(E=>E!==L)||L;r={jeff:L,pam:T}}e&&(h(),e.addEventListener?.("voiceschanged",h));let u=M=>Math.max(2200,String(M).split(/\s+/).length*400+600);function g(){clearTimeout(l),a=null;let M=o.shift();if(!M){t?.();return}a=M,n?.(M);let m=()=>{a===M&&g()};if(i&&e&&(r.jeff||r.pam)){let p=new SpeechSynthesisUtterance(M.text),b=M.speaker==="pam"?r.pam:r.jeff;b?(p.voice=b,p.lang=b.lang):p.lang="en-GB";let _=r.jeff===r.pam;p.pitch=M.speaker==="pam"?_?1.35:1.08:_?.8:.95,p.rate=M.rate||1.06,p.volume=s,p.onend=m,p.onerror=m;try{e.speak(p)}catch{}l=setTimeout(()=>{try{e.cancel()}catch{}m()},u(M.text)*2.2+2e3)}else l=setTimeout(m,u(M.text))}function f(M,m="jeff",{priority:p=2,interrupt:b=!1}={}){if(!M)return;let _={text:String(M),speaker:m,priority:p,at:Date.now()};for(b&&(o.length=0,c()),o.push(_);o.length>2;){let v=0;for(let L=1;L<o.length;L++)o[L].priority<o[v].priority&&(v=L);o.splice(v,1)}a||g()}function c(){if(clearTimeout(l),e)try{e.cancel()}catch{}a=null}function d(){o.length=0,c(),t?.()}return{say:f,clear:d,get busy(){return!!a||o.length>0},get available(){return!!e},setEnabled(M){if(i=!!M,!i&&e)try{e.cancel()}catch{}},setVolume(M){s=Math.max(0,Math.min(1,M))},whenIdle(M=15e3){return new Promise(m=>{let p=Date.now(),b=setInterval(()=>{(!a&&!o.length||Date.now()-p>M)&&(clearInterval(b),m())},120)})},get voiceNames(){return{jeff:r.jeff?.name,pam:r.pam?.name}}}}var cf=[1720,4220],Wa=2500;function $n(n,t){if(t<=0)return 0;if(t>=n[200])return 5e3;let e=0,i=200;for(;i-e>1;){let r=e+i>>1;n[r]<=t?e=r:i=r}let s=(t-n[e])/(n[i]-n[e]);return(e+s)*25}function ys(n,t){let e=Math.max(0,Math.min(5e3,t))/25,i=Math.floor(e),s=Math.min(200,i+1);return n[i]+(e-i)*(n[s]-n[i])}function hf(n,{dt:t=1,debounceS:e=6}={}){let i=n.map(y=>y.id),s=Math.max(...n.map(y=>y.officialS)),r=[...n].sort((y,S)=>y.officialS-S.officialS).map(y=>y.id),o=[];for(let y=0;y<=Math.ceil(s);y+=t){let S=n.map(A=>$n(A.progress,y));o.push({t:y,d:S})}let a=[],l=n.length,h={},u=(y,S)=>`${y}-${S}`,g=null,f=0,c=null,d=0,M=0,m=0,p=!1,b=null;for(let y of o){if(y.t<15)continue;let S=n.map(I=>y.t>=I.officialS);for(let I=0;I<l;I++)for(let N=I+1;N<l;N++){if(S[I]&&S[N])continue;let O=y.d[I]>y.d[N]?I:N,z=h[u(I,N)];if(!z){h[u(I,N)]={ahead:O,cand:O,since:y.t};continue}if(O!==z.cand&&(z.cand=O,z.since=y.t),z.cand!==z.ahead&&y.t-z.since>=e){let F=z.cand,X=z.cand===I?N:I;z.ahead=z.cand;let it=z.since;m++,a.push({type:"overtake",raceS:it,by:i[F],on:i[X],atM:Math.round($n(n[F].progress,it))})}}let A=y.d.indexOf(Math.max(...y.d));if(g===null){g=A,f=y.t;continue}A!==g?c!==A?(c=A,d=y.t):y.t-d>=e&&!S[g]&&(a.push({type:"lead_change",raceS:d,from:i[g],to:i[A],atM:Math.round(y.d[A])}),M++,y.d[A]>3500&&(p=!0),g=A,f=d,c=null):c=null;let w=[...y.d].sort((I,N)=>N-I);b===null&&w[0]-w[1]>60&&w[0]<5e3&&(b=y.t,a.push({type:"breakaway",raceS:y.t,who:i[A],gapM:Math.round(w[0]-w[1]),atM:Math.round(w[0])}))}let _=y=>Math.min(...n.map(S=>ys(S.progress,y)));for(let[y,S]of cf.entries())a.push({type:"hill",raceS:_(S),lap:y+1,atM:S});a.push({type:"lap",raceS:_(Wa),atM:Wa,order:Xa(n,_(Wa))}),a.push({type:"final_stretch",raceS:_(4600),atM:4600,order:Xa(n,_(4600))});for(let y of n)a.push({type:"finish",raceS:y.officialS,who:y.id,place:r.indexOf(y.id)+1});a.sort((y,S)=>y.raceS-S.raceS);let v=n.map(y=>y.officialS).sort((y,S)=>y-S),L=y=>Xa(n,_(y)),T=L(2e3)[0],E=L(1e3)[0],R=L(4e3)[0],x=L(2e3).at(-1);return{finishOrder:r,winningMarginS:v[1]-v[0],spreadS:v.at(-1)-v[0],leadChanges:M,overtakes:m,lateLeadChange:p,leaderAt1k:E,leaderAt2k:T,leaderAt4k:R,leaderAt2kFinalPlace:r.indexOf(T)+1,winnerPlaceAt2k:L(2e3).indexOf(r[0])+1,winnerPlaceAt1k:L(1e3).indexOf(r[0])+1,lastAt2kFinalPlace:r.indexOf(x)+1,breakawayAtS:b,events:a}}function Xa(n,t){return n.map(e=>({id:e.id,d:$n(e.progress,t),f:e.officialS})).sort((e,i)=>i.d-e.d||e.f-i.f).map(e=>e.id)}function df(n,{targetS:t=140}={}){let e=Math.max(...n.map(p=>p.officialS)),i=Math.min(...n.map(p=>ys(p.progress,4500))),s=45,r=i,o=e+3,a=o-r,l=4,h=Math.min(t*.45,Math.max(25,a/1.6)),u=a/h,g=r-s,f=Math.max(30,t-s/l-h),c=g/f,d=p=>{let b=Ih(s-10,s+10,p),_=Ih(r-60,r,p);return l+(c-l)*b+(u-c)*_},M=[[0,0]],m=0;for(let p=1;p<=Math.ceil(o);p++)m+=1/d(p-.5),M.push([p,Math.round(m*1e3)/1e3]);return{map:M,durationS:Math.round(m*10)/10,raceEndS:Math.ceil(o),rates:{start:l,middle:Math.round(c*10)/10,finale:Math.round(u*100)/100}}}function Ih(n,t,e){let i=Math.max(0,Math.min(1,(e-n)/(t-n)));return i*i*(3-2*i)}function ao(n,t){let e=n.map;if(t<=0)return 0;if(t>=e.length-1)return e.at(-1)[1];let i=Math.floor(t),s=t-i;return e[i][1]+s*(e[i+1][1]-e[i][1])}function xs(n,t){let e=n.map;if(t<=0)return 0;let i=0,s=e.length-1;if(t>=e[s][1])return e[s][0];for(;s-i>1;){let r=i+s>>1;e[r][1]<=t?i=r:s=r}return e[i][0]+(t-e[i][1])/(e[s][1]-e[i][1])}function Ph(n,t,e={}){let i=hf(t),s=df(t,e),r=[...i.events];for(let a of t)for(let[l,h]of(a.diversions||[]).entries())r.push({type:"diversion",who:a.id,lap:l+1,raceS:ys(a.progress,h.fromM),endRaceS:ys(a.progress,h.toM),fromM:h.fromM,toM:h.toM});r.sort((a,l)=>a.raceS-l.raceS);let o=r.map(a=>({...a,broadcastS:Math.round(ao(s,a.raceS)*100)/100,...a.endRaceS!=null?{endBroadcastS:Math.round(ao(s,a.endRaceS)*100)/100}:{}}));return{roundId:n,courseLengthM:5e3,runners:t.map(a=>({id:a.id,officialS:a.officialS,progress:a.progress,pacingSource:a.pacingSource,diversions:a.diversions||null})),timeMap:s,events:o,finishOrder:i.finishOrder,summary:{winningMarginS:i.winningMarginS,spreadS:i.spreadS,leadChanges:i.leadChanges,overtakes:i.overtakes,lateLeadChange:i.lateLeadChange}}}var vs="#14183c";function Lh(n,{course:t,round:e,plan:i,speed:s=1}){let r=document.createElement("canvas");r.style.cssText="position:absolute;inset:0;width:100%;height:100%;display:block",n.appendChild(r);let o=r.getContext("2d",{alpha:!1}),a=e?.runners||[],l=t?.points||[],h=0,u=!1,g=!1,f=0,c="idle",d=0,M=0,m=-1,p=null,b=null,_=[],v=null,L=1/0,T=-1/0,E=1/0,R=-1/0;for(let z of l)L=Math.min(L,z[0]),T=Math.max(T,z[0]),E=Math.min(E,z[2]),R=Math.max(R,z[2]);function x(){let z=Math.min(1,1100/Math.max(1,n.clientWidth));r.width=Math.round(n.clientWidth*z),r.height=Math.round(n.clientHeight*z)}x();let y=new ResizeObserver(x);y.observe(n);function S(z,F){let X=r.width,it=r.height,P=it*.16,mt=it*.24,Ot=X*.08,U=Math.min((X-Ot*2-X*.22)/(T-L||1),(it-P-mt)/(R-E||1)),Y=Ot+(X-Ot*2-X*.22-(T-L)*U)/2,j=P+(it-P-mt-(R-E)*U)/2;return[Y+(z-L)*U,j+(F-E)*U,U]}function A(z){if(!l.length)return[0,0];let F=Math.max(0,Math.min(l.length-1,z/5e3*(l.length-1))),X=Math.floor(F),it=Math.min(l.length-1,X+1),P=F-X;return[l[X][0]+(l[it][0]-l[X][0])*P,l[X][2]+(l[it][2]-l[X][2])*P]}let w=null;function I(){let z=r.width,F=r.height;w=document.createElement("canvas"),w.width=z,w.height=F;let X=w.getContext("2d"),it=X.createLinearGradient(0,0,0,F);it.addColorStop(0,"#45cf86"),it.addColorStop(1,"#1f9e5c"),X.fillStyle=it,X.fillRect(0,0,z,F),X.fillStyle="rgba(255,255,255,.05)";let P=z/1920;for(let mt=-F;mt<z;mt+=160*P)X.beginPath(),X.moveTo(mt,0),X.lineTo(mt+80*P,0),X.lineTo(mt+80*P+F*.5,F),X.lineTo(mt+F*.5,F),X.fill();if(l.length){let mt=new Path2D;l.forEach((j,G)=>{let[ct,at]=S(j[0],j[2]);G?mt.lineTo(ct,at):mt.moveTo(ct,at)});let Ot=S(0,0)[2];X.lineCap="round",X.lineJoin="round",X.strokeStyle=vs,X.lineWidth=Math.max(16,Ot*14),X.stroke(mt),X.strokeStyle="#fff",X.lineWidth=Math.max(12,Ot*11),X.stroke(mt),X.strokeStyle="#6f84a8",X.lineWidth=Math.max(8,Ot*8),X.stroke(mt);let[U,Y]=S(...t.finish?[t.finish[0],t.finish[1]]:[l.at(-1)[0],l.at(-1)[2]]);X.save(),X.translate(U,Y);for(let j=-2;j<2;j++)for(let G=-1;G<1;G++)X.fillStyle=j+G&1?"#fff":vs,X.fillRect(j*8,G*8,8,8);X.restore()}}function N(){let z=r.width,F=r.height;(!w||w.width!==z||w.height!==F)&&I(),o.drawImage(w,0,0);let X=i?xs(i.timeMap,f):0,it=(i?.runners||[]).map(G=>({id:G.id,m:$n(G.progress,X),done:X>=G.officialS,f:G.officialS}));it.sort((G,ct)=>ct.m-G.m||G.f-ct.f);let P=Math.max(14,z/90);for(let G of[...it].reverse()){let ct=a.find(rt=>rt.id===G.id),[at,nt]=S(...A(G.m));o.beginPath(),o.arc(at,nt+4,P,0,Math.PI*2),o.fillStyle="rgba(0,0,0,.25)",o.fill(),o.beginPath(),o.arc(at,nt,P,0,Math.PI*2),o.fillStyle=ct?.colour?.primary||"#fff",o.fill(),o.lineWidth=P*.28,o.strokeStyle=vs,o.stroke(),o.fillStyle="#fff",o.font=`${Math.round(P*1.15)}px "Lilita One", sans-serif`,o.textAlign="center",o.textBaseline="middle",o.lineWidth=P*.25,o.strokeText(String(ct?.lane??""),at,nt+1),o.fillText(String(ct?.lane??""),at,nt+1)}let mt=z*.77,Ot=F*.16,U=F*.075;o.font=`${Math.round(F*.035)}px "Lilita One", sans-serif`,o.textAlign="left",o.textBaseline="middle",it.forEach((G,ct)=>{let at=a.find(rt=>rt.id===G.id),nt=Ot+ct*U;o.save(),o.translate(mt,nt),o.transform(1,0,-.14,1,0,0),o.fillStyle=vs,o.fillRect(4,6,z*.2,U*.82),o.fillStyle=ct===0?"#ffd23f":"#2a62e0",o.fillRect(0,0,z*.2,U*.82),o.fillStyle=at?.colour?.primary||"#fff",o.fillRect(0,0,z*.012,U*.82),o.restore(),o.fillStyle=ct===0?vs:"#fff",o.fillText(`${ct+1}  ${(at?.shortName||at?.nickname||G.id).slice(0,16)}`,mt+z*.02,nt+U*.41)}),o.font=`${Math.round(F*.04)}px "Lilita One", sans-serif`,o.textAlign="left";let Y=Math.floor(X),j=`${Math.floor(Y/60)}:${String(Y%60).padStart(2,"0")}`;o.lineWidth=8,o.strokeStyle=vs,o.strokeText(j,mt,Ot-F*.05),o.fillStyle="#ffd23f",o.fillText(j,mt,Ot-F*.05)}function O(z){if(g)return;let F=d?Math.min(.1,(z-d)/1e3):0;if(d=z,c==="race"&&!u){for(f+=F*s;_.length&&_[0].broadcastS<=f;){let X=_.shift();try{p?.(X)}catch(it){console.warn(it)}}if(f>=(i.timeMap.durationS||0)+1.5){c="done";let X=b;b=null,X?.()}}z-M>45&&(f!==m||!w)&&(M=z,m=f,N()),h=requestAnimationFrame(O)}return h=requestAnimationFrame(O),{kind:"2d",playIntro(z){setTimeout(()=>z?.(),10)},playRace(z,F){p=z,b=F,_=[...i.events||[],...i.commentary||[]].sort((X,it)=>X.broadcastS-it.broadcastS),f=0,c="race"},showPodium(z){v=z},setPaused(z){u=!!z},seek(z){for(f=Math.max(0,Number(z)||0);_.length&&_[0].broadcastS<=f;)_.shift();c="race"},get broadcastTime(){return c==="race"||c==="done"?f:-1},dispose(){g=!0,cancelAnimationFrame(h),y.disconnect(),r.remove()}}}var Vi={};sf(Vi,{createRaceView:()=>hv});var Zc="170";var uf=0,kh=1,ff=2;var qd=1,Jc=2,pi=3,Fi=0,un=1,je=2,Ni=0,Hs=1,Dh=2,Uh=3,Nh=4,pf=5,is=100,mf=101,gf=102,yf=103,xf=104,vf=200,_f=201,Mf=202,bf=203,Al=204,Rl=205,Sf=206,wf=207,Ef=208,Tf=209,Af=210,Rf=211,Cf=212,If=213,Pf=214,Cl=0,Il=1,Pl=2,Ws=3,Ll=4,kl=5,Dl=6,Ul=7,Yd=0,Lf=1,kf=2,ii=0,Df=1,Uf=2,Nf=3,Of=4,Ff=5,zf=6,Bf=7;var Zd=300,Xs=301,qs=302,Nl=303,Ol=304,Aa=306,as=1e3,rs=1001,Fl=1002,Sn=1003,Hf=1004;var lo=1005;var ei=1006,qa=1007;var os=1008;var xi=1009,Jd=1010,Kd=1011,Ir=1012,Kc=1013,ls=1014,ni=1015,Gr=1016,jc=1017,Qc=1018,Ys=1020,jd=35902,Qd=1021,tu=1022,Ln=1023,eu=1024,nu=1025,$s=1026,Zs=1027,th=1028,eh=1029,iu=1030,nh=1031;var ih=1033,Bo=33776,Ho=33777,$o=33778,Vo=33779,zl=35840,Bl=35841,Hl=35842,$l=35843,Vl=36196,Gl=37492,Wl=37496,Xl=37808,ql=37809,Yl=37810,Zl=37811,Jl=37812,Kl=37813,jl=37814,Ql=37815,tc=37816,ec=37817,nc=37818,ic=37819,sc=37820,rc=37821,Go=36492,oc=36494,ac=36495,su=36283,lc=36284,cc=36285,hc=36286;var Wo=2300,dc=2301,Ya=2302,Oh=2400,Fh=2401,zh=2402;var $f=3200,Vf=3201;var ru=0,Gf=1,Di="",hn="srgb",tr="srgb-linear",Ra="linear",Le="srgb";var _s=7680;var Bh=519,Wf=512,Xf=513,qf=514,ou=515,Yf=516,Zf=517,Jf=518,Kf=519,uc=35044;var Hh="300 es",gi=2e3,Xo=2001,zi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let i=this._listeners[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},gn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],$h=1234567,Er=Math.PI/180,Pr=180/Math.PI;function si(){let n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(gn[n&255]+gn[n>>8&255]+gn[n>>16&255]+gn[n>>24&255]+"-"+gn[t&255]+gn[t>>8&255]+"-"+gn[t>>16&15|64]+gn[t>>24&255]+"-"+gn[e&63|128]+gn[e>>8&255]+"-"+gn[e>>16&255]+gn[e>>24&255]+gn[i&255]+gn[i>>8&255]+gn[i>>16&255]+gn[i>>24&255]).toLowerCase()}function dn(n,t,e){return Math.max(t,Math.min(e,n))}function sh(n,t){return(n%t+t)%t}function jf(n,t,e,i,s){return i+(n-t)*(s-i)/(e-t)}function Qf(n,t,e){return n!==t?(e-n)/(t-n):0}function Tr(n,t,e){return(1-e)*n+e*t}function tp(n,t,e,i){return Tr(n,t,1-Math.exp(-e*i))}function ep(n,t=1){return t-Math.abs(sh(n,t*2)-t)}function np(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function ip(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function sp(n,t){return n+Math.floor(Math.random()*(t-n+1))}function rp(n,t){return n+Math.random()*(t-n)}function op(n){return n*(.5-Math.random())}function ap(n){n!==void 0&&($h=n);let t=$h+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function lp(n){return n*Er}function cp(n){return n*Pr}function hp(n){return(n&n-1)===0&&n!==0}function dp(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function up(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function fp(n,t,e,i,s){let r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),h=r((t+i)/2),u=o((t+i)/2),g=r((t-i)/2),f=o((t-i)/2),c=r((i-t)/2),d=o((i-t)/2);switch(s){case"XYX":n.set(a*u,l*g,l*f,a*h);break;case"YZY":n.set(l*f,a*u,l*g,a*h);break;case"ZXZ":n.set(l*g,l*f,a*u,a*h);break;case"XZX":n.set(a*u,l*d,l*c,a*h);break;case"YXY":n.set(l*c,a*u,l*d,a*h);break;case"ZYZ":n.set(l*d,l*c,a*u,a*h);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Xn(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Pe(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var au={DEG2RAD:Er,RAD2DEG:Pr,generateUUID:si,clamp:dn,euclideanModulo:sh,mapLinear:jf,inverseLerp:Qf,lerp:Tr,damp:tp,pingpong:ep,smoothstep:np,smootherstep:ip,randInt:sp,randFloat:rp,randFloatSpread:op,seededRandom:ap,degToRad:lp,radToDeg:cp,isPowerOfTwo:hp,ceilPowerOfTwo:dp,floorPowerOfTwo:up,setQuaternionFromProperEuler:fp,normalize:Pe,denormalize:Xn},Bt=class n{constructor(t=0,e=0){n.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(dn(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},_e=class n{constructor(t,e,i,s,r,o,a,l,h){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,h)}set(t,e,i,s,r,o,a,l,h){let u=this.elements;return u[0]=t,u[1]=s,u[2]=a,u[3]=e,u[4]=r,u[5]=l,u[6]=i,u[7]=o,u[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[3],l=i[6],h=i[1],u=i[4],g=i[7],f=i[2],c=i[5],d=i[8],M=s[0],m=s[3],p=s[6],b=s[1],_=s[4],v=s[7],L=s[2],T=s[5],E=s[8];return r[0]=o*M+a*b+l*L,r[3]=o*m+a*_+l*T,r[6]=o*p+a*v+l*E,r[1]=h*M+u*b+g*L,r[4]=h*m+u*_+g*T,r[7]=h*p+u*v+g*E,r[2]=f*M+c*b+d*L,r[5]=f*m+c*_+d*T,r[8]=f*p+c*v+d*E,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],h=t[7],u=t[8];return e*o*u-e*a*h-i*r*u+i*a*l+s*r*h-s*o*l}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],h=t[7],u=t[8],g=u*o-a*h,f=a*l-u*r,c=h*r-o*l,d=e*g+i*f+s*c;if(d===0)return this.set(0,0,0,0,0,0,0,0,0);let M=1/d;return t[0]=g*M,t[1]=(s*h-u*i)*M,t[2]=(a*i-s*o)*M,t[3]=f*M,t[4]=(u*e-s*l)*M,t[5]=(s*r-a*e)*M,t[6]=c*M,t[7]=(i*l-h*e)*M,t[8]=(o*e-i*r)*M,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,o,a){let l=Math.cos(r),h=Math.sin(r);return this.set(i*l,i*h,-i*(l*o+h*a)+o+t,-s*h,s*l,-s*(-h*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Za.makeScale(t,e)),this}rotate(t){return this.premultiply(Za.makeRotation(-t)),this}translate(t,e){return this.premultiply(Za.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Za=new _e;function lu(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function qo(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function pp(){let n=qo("canvas");return n.style.display="block",n}var Vh={};function Sr(n){n in Vh||(Vh[n]=!0,console.warn(n))}function mp(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}function gp(n){let t=n.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function yp(n){let t=n.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var Te={enabled:!0,workingColorSpace:tr,spaces:{},convert:function(n,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===Le&&(n.r=yi(n.r),n.g=yi(n.g),n.b=yi(n.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(n.applyMatrix3(this.spaces[t].toXYZ),n.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===Le&&(n.r=Vs(n.r),n.g=Vs(n.g),n.b=Vs(n.b))),n},fromWorkingColorSpace:function(n,t){return this.convert(n,this.workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===Di?Ra:this.spaces[n].transfer},getLuminanceCoefficients:function(n,t=this.workingColorSpace){return n.fromArray(this.spaces[t].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,t,e){return n.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function yi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Vs(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Gh=[.64,.33,.3,.6,.15,.06],Wh=[.2126,.7152,.0722],Xh=[.3127,.329],qh=new _e().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Yh=new _e().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Te.define({[tr]:{primaries:Gh,whitePoint:Xh,transfer:Ra,toXYZ:qh,fromXYZ:Yh,luminanceCoefficients:Wh,workingColorSpaceConfig:{unpackColorSpace:hn},outputColorSpaceConfig:{drawingBufferColorSpace:hn}},[hn]:{primaries:Gh,whitePoint:Xh,transfer:Le,toXYZ:qh,fromXYZ:Yh,luminanceCoefficients:Wh,outputColorSpaceConfig:{drawingBufferColorSpace:hn}}});var Ms,fc=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Ms===void 0&&(Ms=qo("canvas")),Ms.width=t.width,Ms.height=t.height;let i=Ms.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=Ms}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=qo("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=yi(r[o]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(yi(e[i]/255)*255):e[i]=yi(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},xp=0,Yo=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:xp++}),this.uuid=si(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Ja(s[o].image)):r.push(Ja(s[o]))}else r=Ja(s);i.url=r}return e||(t.images[this.uuid]=i),i}};function Ja(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?fc.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var vp=0,An=class n extends zi{constructor(t=n.DEFAULT_IMAGE,e=n.DEFAULT_MAPPING,i=rs,s=rs,r=ei,o=os,a=Ln,l=xi,h=n.DEFAULT_ANISOTROPY,u=Di){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:vp++}),this.uuid=si(),this.name="",this.source=new Yo(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=h,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Bt(0,0),this.repeat=new Bt(1,1),this.center=new Bt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new _e,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Zd)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case as:t.x=t.x-Math.floor(t.x);break;case rs:t.x=t.x<0?0:1;break;case Fl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case as:t.y=t.y-Math.floor(t.y);break;case rs:t.y=t.y<0?0:1;break;case Fl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};An.DEFAULT_IMAGE=null;An.DEFAULT_MAPPING=Zd;An.DEFAULT_ANISOTROPY=1;var Ze=class n{constructor(t=0,e=0,i=0,s=1){n.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r,l=t.elements,h=l[0],u=l[4],g=l[8],f=l[1],c=l[5],d=l[9],M=l[2],m=l[6],p=l[10];if(Math.abs(u-f)<.01&&Math.abs(g-M)<.01&&Math.abs(d-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(g+M)<.1&&Math.abs(d+m)<.1&&Math.abs(h+c+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let _=(h+1)/2,v=(c+1)/2,L=(p+1)/2,T=(u+f)/4,E=(g+M)/4,R=(d+m)/4;return _>v&&_>L?_<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(_),s=T/i,r=E/i):v>L?v<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),i=T/s,r=R/s):L<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(L),i=E/r,s=R/r),this.set(i,s,r,e),this}let b=Math.sqrt((m-d)*(m-d)+(g-M)*(g-M)+(f-u)*(f-u));return Math.abs(b)<.001&&(b=1),this.x=(m-d)/b,this.y=(g-M)/b,this.z=(f-u)/b,this.w=Math.acos((h+c+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},pc=class extends zi{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Ze(0,0,t,e),this.scissorTest=!1,this.viewport=new Ze(0,0,t,e);let s={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ei,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);let r=new An(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];let o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new Yo(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},vi=class extends pc{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},Zo=class extends An{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Sn,this.minFilter=Sn,this.wrapR=rs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var mc=class extends An{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Sn,this.minFilter=Sn,this.wrapR=rs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ri=class{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,o,a){let l=i[s+0],h=i[s+1],u=i[s+2],g=i[s+3],f=r[o+0],c=r[o+1],d=r[o+2],M=r[o+3];if(a===0){t[e+0]=l,t[e+1]=h,t[e+2]=u,t[e+3]=g;return}if(a===1){t[e+0]=f,t[e+1]=c,t[e+2]=d,t[e+3]=M;return}if(g!==M||l!==f||h!==c||u!==d){let m=1-a,p=l*f+h*c+u*d+g*M,b=p>=0?1:-1,_=1-p*p;if(_>Number.EPSILON){let L=Math.sqrt(_),T=Math.atan2(L,p*b);m=Math.sin(m*T)/L,a=Math.sin(a*T)/L}let v=a*b;if(l=l*m+f*v,h=h*m+c*v,u=u*m+d*v,g=g*m+M*v,m===1-a){let L=1/Math.sqrt(l*l+h*h+u*u+g*g);l*=L,h*=L,u*=L,g*=L}}t[e]=l,t[e+1]=h,t[e+2]=u,t[e+3]=g}static multiplyQuaternionsFlat(t,e,i,s,r,o){let a=i[s],l=i[s+1],h=i[s+2],u=i[s+3],g=r[o],f=r[o+1],c=r[o+2],d=r[o+3];return t[e]=a*d+u*g+l*c-h*f,t[e+1]=l*d+u*f+h*g-a*c,t[e+2]=h*d+u*c+a*f-l*g,t[e+3]=u*d-a*g-l*f-h*c,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,h=a(i/2),u=a(s/2),g=a(r/2),f=l(i/2),c=l(s/2),d=l(r/2);switch(o){case"XYZ":this._x=f*u*g+h*c*d,this._y=h*c*g-f*u*d,this._z=h*u*d+f*c*g,this._w=h*u*g-f*c*d;break;case"YXZ":this._x=f*u*g+h*c*d,this._y=h*c*g-f*u*d,this._z=h*u*d-f*c*g,this._w=h*u*g+f*c*d;break;case"ZXY":this._x=f*u*g-h*c*d,this._y=h*c*g+f*u*d,this._z=h*u*d+f*c*g,this._w=h*u*g-f*c*d;break;case"ZYX":this._x=f*u*g-h*c*d,this._y=h*c*g+f*u*d,this._z=h*u*d-f*c*g,this._w=h*u*g+f*c*d;break;case"YZX":this._x=f*u*g+h*c*d,this._y=h*c*g+f*u*d,this._z=h*u*d-f*c*g,this._w=h*u*g-f*c*d;break;case"XZY":this._x=f*u*g-h*c*d,this._y=h*c*g-f*u*d,this._z=h*u*d+f*c*g,this._w=h*u*g+f*c*d;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],h=e[2],u=e[6],g=e[10],f=i+a+g;if(f>0){let c=.5/Math.sqrt(f+1);this._w=.25/c,this._x=(u-l)*c,this._y=(r-h)*c,this._z=(o-s)*c}else if(i>a&&i>g){let c=2*Math.sqrt(1+i-a-g);this._w=(u-l)/c,this._x=.25*c,this._y=(s+o)/c,this._z=(r+h)/c}else if(a>g){let c=2*Math.sqrt(1+a-i-g);this._w=(r-h)/c,this._x=(s+o)/c,this._y=.25*c,this._z=(l+u)/c}else{let c=2*Math.sqrt(1+g-i-a);this._w=(o-s)/c,this._x=(r+h)/c,this._y=(l+u)/c,this._z=.25*c}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(dn(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,h=e._z,u=e._w;return this._x=i*u+o*a+s*h-r*l,this._y=s*u+o*l+r*a-i*h,this._z=r*u+o*h+i*l-s*a,this._w=o*u-i*a-s*l-r*h,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let i=this._x,s=this._y,r=this._z,o=this._w,a=o*t._w+i*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let c=1-e;return this._w=c*o+e*this._w,this._x=c*i+e*this._x,this._y=c*s+e*this._y,this._z=c*r+e*this._z,this.normalize(),this}let h=Math.sqrt(l),u=Math.atan2(h,a),g=Math.sin((1-e)*u)/h,f=Math.sin(e*u)/h;return this._w=o*g+this._w*f,this._x=i*g+this._x*f,this._y=s*g+this._y*f,this._z=r*g+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},$=class n{constructor(t=0,e=0,i=0){n.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Zh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Zh.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,h=2*(o*s-a*i),u=2*(a*e-r*s),g=2*(r*i-o*e);return this.x=e+l*h+o*g-a*u,this.y=i+l*u+a*h-r*g,this.z=s+l*g+r*u-o*h,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Ka.copy(this).projectOnVector(t),this.sub(Ka)}reflect(t){return this.sub(Ka.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(dn(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Ka=new $,Zh=new ri,_i=class{constructor(t=new $(1/0,1/0,1/0),e=new $(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Vn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Vn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=Vn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Vn):Vn.fromBufferAttribute(r,o),Vn.applyMatrix4(t.matrixWorld),this.expandByPoint(Vn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),co.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),co.copy(i.boundingBox)),co.applyMatrix4(t.matrixWorld),this.union(co)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Vn),Vn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(fr),ho.subVectors(this.max,fr),bs.subVectors(t.a,fr),Ss.subVectors(t.b,fr),ws.subVectors(t.c,fr),Ri.subVectors(Ss,bs),Ci.subVectors(ws,Ss),Ji.subVectors(bs,ws);let e=[0,-Ri.z,Ri.y,0,-Ci.z,Ci.y,0,-Ji.z,Ji.y,Ri.z,0,-Ri.x,Ci.z,0,-Ci.x,Ji.z,0,-Ji.x,-Ri.y,Ri.x,0,-Ci.y,Ci.x,0,-Ji.y,Ji.x,0];return!ja(e,bs,Ss,ws,ho)||(e=[1,0,0,0,1,0,0,0,1],!ja(e,bs,Ss,ws,ho))?!1:(uo.crossVectors(Ri,Ci),e=[uo.x,uo.y,uo.z],ja(e,bs,Ss,ws,ho))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Vn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Vn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ci[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ci[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ci[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ci[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ci[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ci[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ci[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ci[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ci),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},ci=[new $,new $,new $,new $,new $,new $,new $,new $],Vn=new $,co=new _i,bs=new $,Ss=new $,ws=new $,Ri=new $,Ci=new $,Ji=new $,fr=new $,ho=new $,uo=new $,Ki=new $;function ja(n,t,e,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Ki.fromArray(n,r);let a=s.x*Math.abs(Ki.x)+s.y*Math.abs(Ki.y)+s.z*Math.abs(Ki.z),l=t.dot(Ki),h=e.dot(Ki),u=i.dot(Ki);if(Math.max(-Math.max(l,h,u),Math.min(l,h,u))>a)return!1}return!0}var _p=new _i,pr=new $,Qa=new $,Bi=class{constructor(t=new $,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):_p.setFromPoints(t).getCenter(i);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;pr.subVectors(t,this.center);let e=pr.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(pr,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Qa.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(pr.copy(t.center).add(Qa)),this.expandByPoint(pr.copy(t.center).sub(Qa))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},hi=new $,tl=new $,fo=new $,Ii=new $,el=new $,po=new $,nl=new $,Jo=class{constructor(t=new $,e=new $(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,hi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=hi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(hi.copy(this.origin).addScaledVector(this.direction,e),hi.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){tl.copy(t).add(e).multiplyScalar(.5),fo.copy(e).sub(t).normalize(),Ii.copy(this.origin).sub(tl);let r=t.distanceTo(e)*.5,o=-this.direction.dot(fo),a=Ii.dot(this.direction),l=-Ii.dot(fo),h=Ii.lengthSq(),u=Math.abs(1-o*o),g,f,c,d;if(u>0)if(g=o*l-a,f=o*a-l,d=r*u,g>=0)if(f>=-d)if(f<=d){let M=1/u;g*=M,f*=M,c=g*(g+o*f+2*a)+f*(o*g+f+2*l)+h}else f=r,g=Math.max(0,-(o*f+a)),c=-g*g+f*(f+2*l)+h;else f=-r,g=Math.max(0,-(o*f+a)),c=-g*g+f*(f+2*l)+h;else f<=-d?(g=Math.max(0,-(-o*r+a)),f=g>0?-r:Math.min(Math.max(-r,-l),r),c=-g*g+f*(f+2*l)+h):f<=d?(g=0,f=Math.min(Math.max(-r,-l),r),c=f*(f+2*l)+h):(g=Math.max(0,-(o*r+a)),f=g>0?r:Math.min(Math.max(-r,-l),r),c=-g*g+f*(f+2*l)+h);else f=o>0?-r:r,g=Math.max(0,-(o*f+a)),c=-g*g+f*(f+2*l)+h;return i&&i.copy(this.origin).addScaledVector(this.direction,g),s&&s.copy(tl).addScaledVector(fo,f),c}intersectSphere(t,e){hi.subVectors(t.center,this.origin);let i=hi.dot(this.direction),s=hi.dot(hi)-i*i,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,o,a,l,h=1/this.direction.x,u=1/this.direction.y,g=1/this.direction.z,f=this.origin;return h>=0?(i=(t.min.x-f.x)*h,s=(t.max.x-f.x)*h):(i=(t.max.x-f.x)*h,s=(t.min.x-f.x)*h),u>=0?(r=(t.min.y-f.y)*u,o=(t.max.y-f.y)*u):(r=(t.max.y-f.y)*u,o=(t.min.y-f.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),g>=0?(a=(t.min.z-f.z)*g,l=(t.max.z-f.z)*g):(a=(t.max.z-f.z)*g,l=(t.min.z-f.z)*g),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,hi)!==null}intersectTriangle(t,e,i,s,r){el.subVectors(e,t),po.subVectors(i,t),nl.crossVectors(el,po);let o=this.direction.dot(nl),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ii.subVectors(this.origin,t);let l=a*this.direction.dot(po.crossVectors(Ii,po));if(l<0)return null;let h=a*this.direction.dot(el.cross(Ii));if(h<0||l+h>o)return null;let u=-a*Ii.dot(nl);return u<0?null:this.at(u/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},we=class n{constructor(t,e,i,s,r,o,a,l,h,u,g,f,c,d,M,m){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,h,u,g,f,c,d,M,m)}set(t,e,i,s,r,o,a,l,h,u,g,f,c,d,M,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=i,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=h,p[6]=u,p[10]=g,p[14]=f,p[3]=c,p[7]=d,p[11]=M,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,i=t.elements,s=1/Es.setFromMatrixColumn(t,0).length(),r=1/Es.setFromMatrixColumn(t,1).length(),o=1/Es.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),h=Math.sin(s),u=Math.cos(r),g=Math.sin(r);if(t.order==="XYZ"){let f=o*u,c=o*g,d=a*u,M=a*g;e[0]=l*u,e[4]=-l*g,e[8]=h,e[1]=c+d*h,e[5]=f-M*h,e[9]=-a*l,e[2]=M-f*h,e[6]=d+c*h,e[10]=o*l}else if(t.order==="YXZ"){let f=l*u,c=l*g,d=h*u,M=h*g;e[0]=f+M*a,e[4]=d*a-c,e[8]=o*h,e[1]=o*g,e[5]=o*u,e[9]=-a,e[2]=c*a-d,e[6]=M+f*a,e[10]=o*l}else if(t.order==="ZXY"){let f=l*u,c=l*g,d=h*u,M=h*g;e[0]=f-M*a,e[4]=-o*g,e[8]=d+c*a,e[1]=c+d*a,e[5]=o*u,e[9]=M-f*a,e[2]=-o*h,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let f=o*u,c=o*g,d=a*u,M=a*g;e[0]=l*u,e[4]=d*h-c,e[8]=f*h+M,e[1]=l*g,e[5]=M*h+f,e[9]=c*h-d,e[2]=-h,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let f=o*l,c=o*h,d=a*l,M=a*h;e[0]=l*u,e[4]=M-f*g,e[8]=d*g+c,e[1]=g,e[5]=o*u,e[9]=-a*u,e[2]=-h*u,e[6]=c*g+d,e[10]=f-M*g}else if(t.order==="XZY"){let f=o*l,c=o*h,d=a*l,M=a*h;e[0]=l*u,e[4]=-g,e[8]=h*u,e[1]=f*g+M,e[5]=o*u,e[9]=c*g-d,e[2]=d*g-c,e[6]=a*u,e[10]=M*g+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Mp,t,bp)}lookAt(t,e,i){let s=this.elements;return In.subVectors(t,e),In.lengthSq()===0&&(In.z=1),In.normalize(),Pi.crossVectors(i,In),Pi.lengthSq()===0&&(Math.abs(i.z)===1?In.x+=1e-4:In.z+=1e-4,In.normalize(),Pi.crossVectors(i,In)),Pi.normalize(),mo.crossVectors(In,Pi),s[0]=Pi.x,s[4]=mo.x,s[8]=In.x,s[1]=Pi.y,s[5]=mo.y,s[9]=In.y,s[2]=Pi.z,s[6]=mo.z,s[10]=In.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[4],l=i[8],h=i[12],u=i[1],g=i[5],f=i[9],c=i[13],d=i[2],M=i[6],m=i[10],p=i[14],b=i[3],_=i[7],v=i[11],L=i[15],T=s[0],E=s[4],R=s[8],x=s[12],y=s[1],S=s[5],A=s[9],w=s[13],I=s[2],N=s[6],O=s[10],z=s[14],F=s[3],X=s[7],it=s[11],P=s[15];return r[0]=o*T+a*y+l*I+h*F,r[4]=o*E+a*S+l*N+h*X,r[8]=o*R+a*A+l*O+h*it,r[12]=o*x+a*w+l*z+h*P,r[1]=u*T+g*y+f*I+c*F,r[5]=u*E+g*S+f*N+c*X,r[9]=u*R+g*A+f*O+c*it,r[13]=u*x+g*w+f*z+c*P,r[2]=d*T+M*y+m*I+p*F,r[6]=d*E+M*S+m*N+p*X,r[10]=d*R+M*A+m*O+p*it,r[14]=d*x+M*w+m*z+p*P,r[3]=b*T+_*y+v*I+L*F,r[7]=b*E+_*S+v*N+L*X,r[11]=b*R+_*A+v*O+L*it,r[15]=b*x+_*w+v*z+L*P,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],h=t[13],u=t[2],g=t[6],f=t[10],c=t[14],d=t[3],M=t[7],m=t[11],p=t[15];return d*(+r*l*g-s*h*g-r*a*f+i*h*f+s*a*c-i*l*c)+M*(+e*l*c-e*h*f+r*o*f-s*o*c+s*h*u-r*l*u)+m*(+e*h*g-e*a*c-r*o*g+i*o*c+r*a*u-i*h*u)+p*(-s*a*u-e*l*g+e*a*f+s*o*g-i*o*f+i*l*u)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],h=t[7],u=t[8],g=t[9],f=t[10],c=t[11],d=t[12],M=t[13],m=t[14],p=t[15],b=g*m*h-M*f*h+M*l*c-a*m*c-g*l*p+a*f*p,_=d*f*h-u*m*h-d*l*c+o*m*c+u*l*p-o*f*p,v=u*M*h-d*g*h+d*a*c-o*M*c-u*a*p+o*g*p,L=d*g*l-u*M*l-d*a*f+o*M*f+u*a*m-o*g*m,T=e*b+i*_+s*v+r*L;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let E=1/T;return t[0]=b*E,t[1]=(M*f*r-g*m*r-M*s*c+i*m*c+g*s*p-i*f*p)*E,t[2]=(a*m*r-M*l*r+M*s*h-i*m*h-a*s*p+i*l*p)*E,t[3]=(g*l*r-a*f*r-g*s*h+i*f*h+a*s*c-i*l*c)*E,t[4]=_*E,t[5]=(u*m*r-d*f*r+d*s*c-e*m*c-u*s*p+e*f*p)*E,t[6]=(d*l*r-o*m*r-d*s*h+e*m*h+o*s*p-e*l*p)*E,t[7]=(o*f*r-u*l*r+u*s*h-e*f*h-o*s*c+e*l*c)*E,t[8]=v*E,t[9]=(d*g*r-u*M*r-d*i*c+e*M*c+u*i*p-e*g*p)*E,t[10]=(o*M*r-d*a*r+d*i*h-e*M*h-o*i*p+e*a*p)*E,t[11]=(u*a*r-o*g*r-u*i*h+e*g*h+o*i*c-e*a*c)*E,t[12]=L*E,t[13]=(u*M*s-d*g*s+d*i*f-e*M*f-u*i*m+e*g*m)*E,t[14]=(d*a*s-o*M*s-d*i*l+e*M*l+o*i*m-e*a*m)*E,t[15]=(o*g*s-u*a*s+u*i*l-e*g*l-o*i*f+e*a*f)*E,this}scale(t){let e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),s=Math.sin(e),r=1-i,o=t.x,a=t.y,l=t.z,h=r*o,u=r*a;return this.set(h*o+i,h*a-s*l,h*l+s*a,0,h*a+s*l,u*a+i,u*l-s*o,0,h*l-s*a,u*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,h=r+r,u=o+o,g=a+a,f=r*h,c=r*u,d=r*g,M=o*u,m=o*g,p=a*g,b=l*h,_=l*u,v=l*g,L=i.x,T=i.y,E=i.z;return s[0]=(1-(M+p))*L,s[1]=(c+v)*L,s[2]=(d-_)*L,s[3]=0,s[4]=(c-v)*T,s[5]=(1-(f+p))*T,s[6]=(m+b)*T,s[7]=0,s[8]=(d+_)*E,s[9]=(m-b)*E,s[10]=(1-(f+M))*E,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){let s=this.elements,r=Es.set(s[0],s[1],s[2]).length(),o=Es.set(s[4],s[5],s[6]).length(),a=Es.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Gn.copy(this);let h=1/r,u=1/o,g=1/a;return Gn.elements[0]*=h,Gn.elements[1]*=h,Gn.elements[2]*=h,Gn.elements[4]*=u,Gn.elements[5]*=u,Gn.elements[6]*=u,Gn.elements[8]*=g,Gn.elements[9]*=g,Gn.elements[10]*=g,e.setFromRotationMatrix(Gn),i.x=r,i.y=o,i.z=a,this}makePerspective(t,e,i,s,r,o,a=gi){let l=this.elements,h=2*r/(e-t),u=2*r/(i-s),g=(e+t)/(e-t),f=(i+s)/(i-s),c,d;if(a===gi)c=-(o+r)/(o-r),d=-2*o*r/(o-r);else if(a===Xo)c=-o/(o-r),d=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=g,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=c,l[14]=d,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,s,r,o,a=gi){let l=this.elements,h=1/(e-t),u=1/(i-s),g=1/(o-r),f=(e+t)*h,c=(i+s)*u,d,M;if(a===gi)d=(o+r)*g,M=-2*g;else if(a===Xo)d=r*g,M=-1*g;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*h,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-c,l[2]=0,l[6]=0,l[10]=M,l[14]=-d,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}},Es=new $,Gn=new we,Mp=new $(0,0,0),bp=new $(1,1,1),Pi=new $,mo=new $,In=new $,Jh=new we,Kh=new ri,qn=class n{constructor(t=0,e=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],h=s[5],u=s[9],g=s[2],f=s[6],c=s[10];switch(e){case"XYZ":this._y=Math.asin(dn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,c),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,h),this._z=0);break;case"YXZ":this._x=Math.asin(-dn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,c),this._z=Math.atan2(l,h)):(this._y=Math.atan2(-g,r),this._z=0);break;case"ZXY":this._x=Math.asin(dn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-g,c),this._z=Math.atan2(-o,h)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-dn(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(f,c),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,h));break;case"YZX":this._z=Math.asin(dn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,h),this._y=Math.atan2(-g,r)):(this._x=0,this._y=Math.atan2(a,c));break;case"XZY":this._z=Math.asin(-dn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,h),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,c),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Jh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Jh,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Kh.setFromEuler(this),this.setFromQuaternion(Kh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};qn.DEFAULT_ORDER="XYZ";var Ko=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Sp=0,jh=new $,Ts=new ri,di=new we,go=new $,mr=new $,wp=new $,Ep=new ri,Qh=new $(1,0,0),td=new $(0,1,0),ed=new $(0,0,1),nd={type:"added"},Tp={type:"removed"},As={type:"childadded",child:null},il={type:"childremoved",child:null},ke=class n extends zi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Sp++}),this.uuid=si(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new $,e=new qn,i=new ri,s=new $(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new we},normalMatrix:{value:new _e}}),this.matrix=new we,this.matrixWorld=new we,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ko,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ts.setFromAxisAngle(t,e),this.quaternion.multiply(Ts),this}rotateOnWorldAxis(t,e){return Ts.setFromAxisAngle(t,e),this.quaternion.premultiply(Ts),this}rotateX(t){return this.rotateOnAxis(Qh,t)}rotateY(t){return this.rotateOnAxis(td,t)}rotateZ(t){return this.rotateOnAxis(ed,t)}translateOnAxis(t,e){return jh.copy(t).applyQuaternion(this.quaternion),this.position.add(jh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Qh,t)}translateY(t){return this.translateOnAxis(td,t)}translateZ(t){return this.translateOnAxis(ed,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(di.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?go.copy(t):go.set(t,e,i);let s=this.parent;this.updateWorldMatrix(!0,!1),mr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?di.lookAt(mr,go,this.up):di.lookAt(go,mr,this.up),this.quaternion.setFromRotationMatrix(di),s&&(di.extractRotation(s.matrixWorld),Ts.setFromRotationMatrix(di),this.quaternion.premultiply(Ts.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(nd),As.child=t,this.dispatchEvent(As),As.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Tp),il.child=t,this.dispatchEvent(il),il.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),di.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),di.multiply(t.parent.matrixWorld)),t.applyMatrix4(di),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(nd),As.child=t,this.dispatchEvent(As),As.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(mr,t,wp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(mr,Ep,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let h=0,u=l.length;h<u;h++){let g=l[h];r(t.shapes,g)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,h=this.material.length;l<h;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),h=o(t.textures),u=o(t.images),g=o(t.shapes),f=o(t.skeletons),c=o(t.animations),d=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),h.length>0&&(i.textures=h),u.length>0&&(i.images=u),g.length>0&&(i.shapes=g),f.length>0&&(i.skeletons=f),c.length>0&&(i.animations=c),d.length>0&&(i.nodes=d)}return i.object=s,i;function o(a){let l=[];for(let h in a){let u=a[h];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}};ke.DEFAULT_UP=new $(0,1,0);ke.DEFAULT_MATRIX_AUTO_UPDATE=!0;ke.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Wn=new $,ui=new $,sl=new $,fi=new $,Rs=new $,Cs=new $,id=new $,rl=new $,ol=new $,al=new $,ll=new Ze,cl=new Ze,hl=new Ze,Ui=class n{constructor(t=new $,e=new $,i=new $){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),Wn.subVectors(t,e),s.cross(Wn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){Wn.subVectors(s,e),ui.subVectors(i,e),sl.subVectors(t,e);let o=Wn.dot(Wn),a=Wn.dot(ui),l=Wn.dot(sl),h=ui.dot(ui),u=ui.dot(sl),g=o*h-a*a;if(g===0)return r.set(0,0,0),null;let f=1/g,c=(h*l-a*u)*f,d=(o*u-a*l)*f;return r.set(1-c-d,d,c)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,fi)===null?!1:fi.x>=0&&fi.y>=0&&fi.x+fi.y<=1}static getInterpolation(t,e,i,s,r,o,a,l){return this.getBarycoord(t,e,i,s,fi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,fi.x),l.addScaledVector(o,fi.y),l.addScaledVector(a,fi.z),l)}static getInterpolatedAttribute(t,e,i,s,r,o){return ll.setScalar(0),cl.setScalar(0),hl.setScalar(0),ll.fromBufferAttribute(t,e),cl.fromBufferAttribute(t,i),hl.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(ll,r.x),o.addScaledVector(cl,r.y),o.addScaledVector(hl,r.z),o}static isFrontFacing(t,e,i,s){return Wn.subVectors(i,e),ui.subVectors(t,e),Wn.cross(ui).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Wn.subVectors(this.c,this.b),ui.subVectors(this.a,this.b),Wn.cross(ui).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return n.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return n.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,s=this.b,r=this.c,o,a;Rs.subVectors(s,i),Cs.subVectors(r,i),rl.subVectors(t,i);let l=Rs.dot(rl),h=Cs.dot(rl);if(l<=0&&h<=0)return e.copy(i);ol.subVectors(t,s);let u=Rs.dot(ol),g=Cs.dot(ol);if(u>=0&&g<=u)return e.copy(s);let f=l*g-u*h;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),e.copy(i).addScaledVector(Rs,o);al.subVectors(t,r);let c=Rs.dot(al),d=Cs.dot(al);if(d>=0&&c<=d)return e.copy(r);let M=c*h-l*d;if(M<=0&&h>=0&&d<=0)return a=h/(h-d),e.copy(i).addScaledVector(Cs,a);let m=u*d-c*g;if(m<=0&&g-u>=0&&c-d>=0)return id.subVectors(r,s),a=(g-u)/(g-u+(c-d)),e.copy(s).addScaledVector(id,a);let p=1/(m+M+f);return o=M*p,a=f*p,e.copy(i).addScaledVector(Rs,o).addScaledVector(Cs,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},cu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Li={h:0,s:0,l:0},yo={h:0,s:0,l:0};function dl(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}var re=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=hn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Te.toWorkingColorSpace(this,e),this}setRGB(t,e,i,s=Te.workingColorSpace){return this.r=t,this.g=e,this.b=i,Te.toWorkingColorSpace(this,s),this}setHSL(t,e,i,s=Te.workingColorSpace){if(t=sh(t,1),e=dn(e,0,1),i=dn(i,0,1),e===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=dl(o,r,t+1/3),this.g=dl(o,r,t),this.b=dl(o,r,t-1/3)}return Te.toWorkingColorSpace(this,s),this}setStyle(t,e=hn){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=hn){let i=cu[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=yi(t.r),this.g=yi(t.g),this.b=yi(t.b),this}copyLinearToSRGB(t){return this.r=Vs(t.r),this.g=Vs(t.g),this.b=Vs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=hn){return Te.fromWorkingColorSpace(yn.copy(this),t),Math.round(dn(yn.r*255,0,255))*65536+Math.round(dn(yn.g*255,0,255))*256+Math.round(dn(yn.b*255,0,255))}getHexString(t=hn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Te.workingColorSpace){Te.fromWorkingColorSpace(yn.copy(this),e);let i=yn.r,s=yn.g,r=yn.b,o=Math.max(i,s,r),a=Math.min(i,s,r),l,h,u=(a+o)/2;if(a===o)l=0,h=0;else{let g=o-a;switch(h=u<=.5?g/(o+a):g/(2-o-a),o){case i:l=(s-r)/g+(s<r?6:0);break;case s:l=(r-i)/g+2;break;case r:l=(i-s)/g+4;break}l/=6}return t.h=l,t.s=h,t.l=u,t}getRGB(t,e=Te.workingColorSpace){return Te.fromWorkingColorSpace(yn.copy(this),e),t.r=yn.r,t.g=yn.g,t.b=yn.b,t}getStyle(t=hn){Te.fromWorkingColorSpace(yn.copy(this),t);let e=yn.r,i=yn.g,s=yn.b;return t!==hn?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(Li),this.setHSL(Li.h+t,Li.s+e,Li.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Li),t.getHSL(yo);let i=Tr(Li.h,yo.h,e),s=Tr(Li.s,yo.s,e),r=Tr(Li.l,yo.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},yn=new re;re.NAMES=cu;var Ap=0,Mi=class extends zi{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ap++}),this.uuid=si(),this.name="",this.blending=Hs,this.side=Fi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Al,this.blendDst=Rl,this.blendEquation=is,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new re(0,0,0),this.blendAlpha=0,this.depthFunc=Ws,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Bh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=_s,this.stencilZFail=_s,this.stencilZPass=_s,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Hs&&(i.blending=this.blending),this.side!==Fi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Al&&(i.blendSrc=this.blendSrc),this.blendDst!==Rl&&(i.blendDst=this.blendDst),this.blendEquation!==is&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ws&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Bh&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==_s&&(i.stencilFail=this.stencilFail),this.stencilZFail!==_s&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==_s&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Un=class extends Mi{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new re(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qn,this.combine=Yd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var tn=new $,xo=new Bt,$e=class{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=uc,this.updateRanges=[],this.gpuType=ni,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)xo.fromBufferAttribute(this,e),xo.applyMatrix3(t),this.setXY(e,xo.x,xo.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)tn.fromBufferAttribute(this,e),tn.applyMatrix3(t),this.setXYZ(e,tn.x,tn.y,tn.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)tn.fromBufferAttribute(this,e),tn.applyMatrix4(t),this.setXYZ(e,tn.x,tn.y,tn.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)tn.fromBufferAttribute(this,e),tn.applyNormalMatrix(t),this.setXYZ(e,tn.x,tn.y,tn.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)tn.fromBufferAttribute(this,e),tn.transformDirection(t),this.setXYZ(e,tn.x,tn.y,tn.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Xn(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Pe(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Xn(e,this.array)),e}setX(t,e){return this.normalized&&(e=Pe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Xn(e,this.array)),e}setY(t,e){return this.normalized&&(e=Pe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Xn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Pe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Xn(e,this.array)),e}setW(t,e){return this.normalized&&(e=Pe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Pe(e,this.array),i=Pe(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=Pe(e,this.array),i=Pe(i,this.array),s=Pe(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=Pe(e,this.array),i=Pe(i,this.array),s=Pe(s,this.array),r=Pe(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==uc&&(t.usage=this.usage),t}};var jo=class extends $e{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var Qo=class extends $e{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var pe=class extends $e{constructor(t,e,i){super(new Float32Array(t),e,i)}},Rp=0,Dn=new we,ul=new ke,Is=new $,Pn=new _i,gr=new _i,cn=new $,De=class n extends zi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Rp++}),this.uuid=si(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(lu(t)?Qo:jo)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new _e().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Dn.makeRotationFromQuaternion(t),this.applyMatrix4(Dn),this}rotateX(t){return Dn.makeRotationX(t),this.applyMatrix4(Dn),this}rotateY(t){return Dn.makeRotationY(t),this.applyMatrix4(Dn),this}rotateZ(t){return Dn.makeRotationZ(t),this.applyMatrix4(Dn),this}translate(t,e,i){return Dn.makeTranslation(t,e,i),this.applyMatrix4(Dn),this}scale(t,e,i){return Dn.makeScale(t,e,i),this.applyMatrix4(Dn),this}lookAt(t){return ul.lookAt(t),ul.updateMatrix(),this.applyMatrix4(ul.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Is).negate(),this.translate(Is.x,Is.y,Is.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new pe(i,3))}else{for(let i=0,s=e.count;i<s;i++){let r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new _i);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new $(-1/0,-1/0,-1/0),new $(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){let r=e[i];Pn.setFromBufferAttribute(r),this.morphTargetsRelative?(cn.addVectors(this.boundingBox.min,Pn.min),this.boundingBox.expandByPoint(cn),cn.addVectors(this.boundingBox.max,Pn.max),this.boundingBox.expandByPoint(cn)):(this.boundingBox.expandByPoint(Pn.min),this.boundingBox.expandByPoint(Pn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Bi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new $,1/0);return}if(t){let i=this.boundingSphere.center;if(Pn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];gr.setFromBufferAttribute(a),this.morphTargetsRelative?(cn.addVectors(Pn.min,gr.min),Pn.expandByPoint(cn),cn.addVectors(Pn.max,gr.max),Pn.expandByPoint(cn)):(Pn.expandByPoint(gr.min),Pn.expandByPoint(gr.max))}Pn.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)cn.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(cn));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let h=0,u=a.count;h<u;h++)cn.fromBufferAttribute(a,h),l&&(Is.fromBufferAttribute(t,h),cn.add(Is)),s=Math.max(s,i.distanceToSquared(cn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new $e(new Float32Array(4*i.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let R=0;R<i.count;R++)a[R]=new $,l[R]=new $;let h=new $,u=new $,g=new $,f=new Bt,c=new Bt,d=new Bt,M=new $,m=new $;function p(R,x,y){h.fromBufferAttribute(i,R),u.fromBufferAttribute(i,x),g.fromBufferAttribute(i,y),f.fromBufferAttribute(r,R),c.fromBufferAttribute(r,x),d.fromBufferAttribute(r,y),u.sub(h),g.sub(h),c.sub(f),d.sub(f);let S=1/(c.x*d.y-d.x*c.y);isFinite(S)&&(M.copy(u).multiplyScalar(d.y).addScaledVector(g,-c.y).multiplyScalar(S),m.copy(g).multiplyScalar(c.x).addScaledVector(u,-d.x).multiplyScalar(S),a[R].add(M),a[x].add(M),a[y].add(M),l[R].add(m),l[x].add(m),l[y].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let R=0,x=b.length;R<x;++R){let y=b[R],S=y.start,A=y.count;for(let w=S,I=S+A;w<I;w+=3)p(t.getX(w+0),t.getX(w+1),t.getX(w+2))}let _=new $,v=new $,L=new $,T=new $;function E(R){L.fromBufferAttribute(s,R),T.copy(L);let x=a[R];_.copy(x),_.sub(L.multiplyScalar(L.dot(x))).normalize(),v.crossVectors(T,x);let S=v.dot(l[R])<0?-1:1;o.setXYZW(R,_.x,_.y,_.z,S)}for(let R=0,x=b.length;R<x;++R){let y=b[R],S=y.start,A=y.count;for(let w=S,I=S+A;w<I;w+=3)E(t.getX(w+0)),E(t.getX(w+1)),E(t.getX(w+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new $e(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let f=0,c=i.count;f<c;f++)i.setXYZ(f,0,0,0);let s=new $,r=new $,o=new $,a=new $,l=new $,h=new $,u=new $,g=new $;if(t)for(let f=0,c=t.count;f<c;f+=3){let d=t.getX(f+0),M=t.getX(f+1),m=t.getX(f+2);s.fromBufferAttribute(e,d),r.fromBufferAttribute(e,M),o.fromBufferAttribute(e,m),u.subVectors(o,r),g.subVectors(s,r),u.cross(g),a.fromBufferAttribute(i,d),l.fromBufferAttribute(i,M),h.fromBufferAttribute(i,m),a.add(u),l.add(u),h.add(u),i.setXYZ(d,a.x,a.y,a.z),i.setXYZ(M,l.x,l.y,l.z),i.setXYZ(m,h.x,h.y,h.z)}else for(let f=0,c=e.count;f<c;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),u.subVectors(o,r),g.subVectors(s,r),u.cross(g),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)cn.fromBufferAttribute(t,e),cn.normalize(),t.setXYZ(e,cn.x,cn.y,cn.z)}toNonIndexed(){function t(a,l){let h=a.array,u=a.itemSize,g=a.normalized,f=new h.constructor(l.length*u),c=0,d=0;for(let M=0,m=l.length;M<m;M++){a.isInterleavedBufferAttribute?c=l[M]*a.data.stride+a.offset:c=l[M]*u;for(let p=0;p<u;p++)f[d++]=h[c++]}return new $e(f,u,g)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new n,i=this.index.array,s=this.attributes;for(let a in s){let l=s[a],h=t(l,i);e.setAttribute(a,h)}let r=this.morphAttributes;for(let a in r){let l=[],h=r[a];for(let u=0,g=h.length;u<g;u++){let f=h[u],c=t(f,i);l.push(c)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let h=o[a];e.addGroup(h.start,h.count,h.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let h in l)l[h]!==void 0&&(t[h]=l[h]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let l in i){let h=i[l];t.data.attributes[l]=h.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let h=this.morphAttributes[l],u=[];for(let g=0,f=h.length;g<f;g++){let c=h[g];u.push(c.toJSON(t.data))}u.length>0&&(s[l]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone(e));let s=t.attributes;for(let h in s){let u=s[h];this.setAttribute(h,u.clone(e))}let r=t.morphAttributes;for(let h in r){let u=[],g=r[h];for(let f=0,c=g.length;f<c;f++)u.push(g[f].clone(e));this.morphAttributes[h]=u}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let h=0,u=o.length;h<u;h++){let g=o[h];this.addGroup(g.start,g.count,g.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},sd=new we,ji=new Jo,vo=new Bi,rd=new $,_o=new $,Mo=new $,bo=new $,fl=new $,So=new $,od=new $,wo=new $,Ne=class extends ke{constructor(t=new De,e=new Un){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){So.set(0,0,0);for(let l=0,h=r.length;l<h;l++){let u=a[l],g=r[l];u!==0&&(fl.fromBufferAttribute(g,t),o?So.addScaledVector(fl,u):So.addScaledVector(fl.sub(e),u))}e.add(So)}return e}raycast(t,e){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),vo.copy(i.boundingSphere),vo.applyMatrix4(r),ji.copy(t.ray).recast(t.near),!(vo.containsPoint(ji.origin)===!1&&(ji.intersectSphere(vo,rd)===null||ji.origin.distanceToSquared(rd)>(t.far-t.near)**2))&&(sd.copy(r).invert(),ji.copy(t.ray).applyMatrix4(sd),!(i.boundingBox!==null&&ji.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,ji)))}_computeIntersections(t,e,i){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,h=r.attributes.uv,u=r.attributes.uv1,g=r.attributes.normal,f=r.groups,c=r.drawRange;if(a!==null)if(Array.isArray(o))for(let d=0,M=f.length;d<M;d++){let m=f[d],p=o[m.materialIndex],b=Math.max(m.start,c.start),_=Math.min(a.count,Math.min(m.start+m.count,c.start+c.count));for(let v=b,L=_;v<L;v+=3){let T=a.getX(v),E=a.getX(v+1),R=a.getX(v+2);s=Eo(this,p,t,i,h,u,g,T,E,R),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let d=Math.max(0,c.start),M=Math.min(a.count,c.start+c.count);for(let m=d,p=M;m<p;m+=3){let b=a.getX(m),_=a.getX(m+1),v=a.getX(m+2);s=Eo(this,o,t,i,h,u,g,b,_,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let d=0,M=f.length;d<M;d++){let m=f[d],p=o[m.materialIndex],b=Math.max(m.start,c.start),_=Math.min(l.count,Math.min(m.start+m.count,c.start+c.count));for(let v=b,L=_;v<L;v+=3){let T=v,E=v+1,R=v+2;s=Eo(this,p,t,i,h,u,g,T,E,R),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let d=Math.max(0,c.start),M=Math.min(l.count,c.start+c.count);for(let m=d,p=M;m<p;m+=3){let b=m,_=m+1,v=m+2;s=Eo(this,o,t,i,h,u,g,b,_,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function Cp(n,t,e,i,s,r,o,a){let l;if(t.side===un?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,t.side===Fi,a),l===null)return null;wo.copy(a),wo.applyMatrix4(n.matrixWorld);let h=e.ray.origin.distanceTo(wo);return h<e.near||h>e.far?null:{distance:h,point:wo.clone(),object:n}}function Eo(n,t,e,i,s,r,o,a,l,h){n.getVertexPosition(a,_o),n.getVertexPosition(l,Mo),n.getVertexPosition(h,bo);let u=Cp(n,t,e,i,_o,Mo,bo,od);if(u){let g=new $;Ui.getBarycoord(od,_o,Mo,bo,g),s&&(u.uv=Ui.getInterpolatedAttribute(s,a,l,h,g,new Bt)),r&&(u.uv1=Ui.getInterpolatedAttribute(r,a,l,h,g,new Bt)),o&&(u.normal=Ui.getInterpolatedAttribute(o,a,l,h,g,new $),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));let f={a,b:l,c:h,normal:new $,materialIndex:0};Ui.getNormal(_o,Mo,bo,f.normal),u.face=f,u.barycoord=g}return u}var Ee=class n extends De{constructor(t=1,e=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],h=[],u=[],g=[],f=0,c=0;d("z","y","x",-1,-1,i,e,t,o,r,0),d("z","y","x",1,-1,i,e,-t,o,r,1),d("x","z","y",1,1,t,i,e,s,o,2),d("x","z","y",1,-1,t,i,-e,s,o,3),d("x","y","z",1,-1,t,e,i,s,r,4),d("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new pe(h,3)),this.setAttribute("normal",new pe(u,3)),this.setAttribute("uv",new pe(g,2));function d(M,m,p,b,_,v,L,T,E,R,x){let y=v/E,S=L/R,A=v/2,w=L/2,I=T/2,N=E+1,O=R+1,z=0,F=0,X=new $;for(let it=0;it<O;it++){let P=it*S-w;for(let mt=0;mt<N;mt++){let Ot=mt*y-A;X[M]=Ot*b,X[m]=P*_,X[p]=I,h.push(X.x,X.y,X.z),X[M]=0,X[m]=0,X[p]=T>0?1:-1,u.push(X.x,X.y,X.z),g.push(mt/E),g.push(1-it/R),z+=1}}for(let it=0;it<R;it++)for(let P=0;P<E;P++){let mt=f+P+N*it,Ot=f+P+N*(it+1),U=f+(P+1)+N*(it+1),Y=f+(P+1)+N*it;l.push(mt,Ot,Y),l.push(Ot,U,Y),F+=6}a.addGroup(c,F,x),c+=F,f+=z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Js(n){let t={};for(let e in n){t[e]={};for(let i in n[e]){let s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function Mn(n){let t={};for(let e=0;e<n.length;e++){let i=Js(n[e]);for(let s in i)t[s]=i[s]}return t}function Ip(n){let t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function hu(n){let t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Te.workingColorSpace}var rh={clone:Js,merge:Mn},Pp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Lp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,wn=class extends Mi{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Pp,this.fragmentShader=Lp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Js(t.uniforms),this.uniformsGroups=Ip(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}},ta=class extends ke{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new we,this.projectionMatrix=new we,this.projectionMatrixInverse=new we,this.coordinateSystem=gi}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},ki=new $,ad=new Bt,ld=new Bt,bn=class extends ta{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Pr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Er*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Pr*2*Math.atan(Math.tan(Er*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){ki.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ki.x,ki.y).multiplyScalar(-t/ki.z),ki.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ki.x,ki.y).multiplyScalar(-t/ki.z)}getViewSize(t,e){return this.getViewBounds(t,ad,ld),e.subVectors(ld,ad)}setViewOffset(t,e,i,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Er*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,h=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*i/h,s*=o.width/l,i*=o.height/h}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Ps=-90,Ls=1,gc=class extends ke{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new bn(Ps,Ls,t,e);s.layers=this.layers,this.add(s);let r=new bn(Ps,Ls,t,e);r.layers=this.layers,this.add(r);let o=new bn(Ps,Ls,t,e);o.layers=this.layers,this.add(o);let a=new bn(Ps,Ls,t,e);a.layers=this.layers,this.add(a);let l=new bn(Ps,Ls,t,e);l.layers=this.layers,this.add(l);let h=new bn(Ps,Ls,t,e);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,s,r,o,a,l]=e;for(let h of e)this.remove(h);if(t===gi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Xo)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let h of e)this.add(h),h.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,h,u]=this.children,g=t.getRenderTarget(),f=t.getActiveCubeFace(),c=t.getActiveMipmapLevel(),d=t.xr.enabled;t.xr.enabled=!1;let M=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,r),t.setRenderTarget(i,1,s),t.render(e,o),t.setRenderTarget(i,2,s),t.render(e,a),t.setRenderTarget(i,3,s),t.render(e,l),t.setRenderTarget(i,4,s),t.render(e,h),i.texture.generateMipmaps=M,t.setRenderTarget(i,5,s),t.render(e,u),t.setRenderTarget(g,f,c),t.xr.enabled=d,i.texture.needsPMREMUpdate=!0}},ea=class extends An{constructor(t,e,i,s,r,o,a,l,h,u){t=t!==void 0?t:[],e=e!==void 0?e:Xs,super(t,e,i,s,r,o,a,l,h,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},yc=class extends vi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new ea(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:ei}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ee(5,5,5),r=new wn({name:"CubemapFromEquirect",uniforms:Js(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:un,blending:Ni});r.uniforms.tEquirect.value=e;let o=new Ne(s,r),a=e.minFilter;return e.minFilter===os&&(e.minFilter=ei),new gc(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,i,s){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,s);t.setRenderTarget(r)}},pl=new $,kp=new $,Dp=new _e,mi=class{constructor(t=new $(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let s=pl.subVectors(i,e).cross(kp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let i=t.delta(pl),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||Dp.getNormalMatrix(t),s=this.coplanarPoint(pl).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Qi=new Bi,To=new $,Lr=class{constructor(t=new mi,e=new mi,i=new mi,s=new mi,r=new mi,o=new mi){this.planes=[t,e,i,s,r,o]}set(t,e,i,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=gi){let i=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],h=s[4],u=s[5],g=s[6],f=s[7],c=s[8],d=s[9],M=s[10],m=s[11],p=s[12],b=s[13],_=s[14],v=s[15];if(i[0].setComponents(l-r,f-h,m-c,v-p).normalize(),i[1].setComponents(l+r,f+h,m+c,v+p).normalize(),i[2].setComponents(l+o,f+u,m+d,v+b).normalize(),i[3].setComponents(l-o,f-u,m-d,v-b).normalize(),i[4].setComponents(l-a,f-g,m-M,v-_).normalize(),e===gi)i[5].setComponents(l+a,f+g,m+M,v+_).normalize();else if(e===Xo)i[5].setComponents(a,g,M,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Qi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Qi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Qi)}intersectsSprite(t){return Qi.center.set(0,0,0),Qi.radius=.7071067811865476,Qi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Qi)}intersectsSphere(t){let e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let s=e[i];if(To.x=s.normal.x>0?t.max.x:t.min.x,To.y=s.normal.y>0?t.max.y:t.min.y,To.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(To)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function du(){let n=null,t=!1,e=null,i=null;function s(r,o){e(r,o),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function Up(n){let t=new WeakMap;function e(a,l){let h=a.array,u=a.usage,g=h.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,h,u),a.onUploadCallback();let c;if(h instanceof Float32Array)c=n.FLOAT;else if(h instanceof Uint16Array)a.isFloat16BufferAttribute?c=n.HALF_FLOAT:c=n.UNSIGNED_SHORT;else if(h instanceof Int16Array)c=n.SHORT;else if(h instanceof Uint32Array)c=n.UNSIGNED_INT;else if(h instanceof Int32Array)c=n.INT;else if(h instanceof Int8Array)c=n.BYTE;else if(h instanceof Uint8Array)c=n.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)c=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:f,type:c,bytesPerElement:h.BYTES_PER_ELEMENT,version:a.version,size:g}}function i(a,l,h){let u=l.array,g=l.updateRanges;if(n.bindBuffer(h,a),g.length===0)n.bufferSubData(h,0,u);else{g.sort((c,d)=>c.start-d.start);let f=0;for(let c=1;c<g.length;c++){let d=g[f],M=g[c];M.start<=d.start+d.count+1?d.count=Math.max(d.count,M.start+M.count-d.start):(++f,g[f]=M)}g.length=f+1;for(let c=0,d=g.length;c<d;c++){let M=g[c];n.bufferSubData(h,M.start*u.BYTES_PER_ELEMENT,u,M.start,M.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(n.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let h=t.get(a);if(h===void 0)t.set(a,e(a,l));else if(h.version<a.version){if(h.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(h.buffer,a,l),h.version=a.version}}return{get:s,remove:r,update:o}}var fn=class n extends De{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(i),l=Math.floor(s),h=a+1,u=l+1,g=t/a,f=e/l,c=[],d=[],M=[],m=[];for(let p=0;p<u;p++){let b=p*f-o;for(let _=0;_<h;_++){let v=_*g-r;d.push(v,-b,0),M.push(0,0,1),m.push(_/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let b=0;b<a;b++){let _=b+h*p,v=b+h*(p+1),L=b+1+h*(p+1),T=b+1+h*p;c.push(_,v,T),c.push(v,L,T)}this.setIndex(c),this.setAttribute("position",new pe(d,3)),this.setAttribute("normal",new pe(M,3)),this.setAttribute("uv",new pe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.widthSegments,t.heightSegments)}},Np=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Op=`#ifdef USE_ALPHAHASH
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
#endif`,Fp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,zp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Bp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Hp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,$p=`#ifdef USE_AOMAP
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
#endif`,Vp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Gp=`#ifdef USE_BATCHING
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
#endif`,Wp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Xp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,qp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Yp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Zp=`#ifdef USE_IRIDESCENCE
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
#endif`,Jp=`#ifdef USE_BUMPMAP
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
#endif`,Kp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,jp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Qp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,tm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,em=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,nm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,im=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,sm=`#if defined( USE_COLOR_ALPHA )
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
#endif`,rm=`#define PI 3.141592653589793
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
} // validated`,om=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,am=`vec3 transformedNormal = objectNormal;
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
#endif`,lm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,cm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,hm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,dm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,um="gl_FragColor = linearToOutputTexel( gl_FragColor );",fm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,pm=`#ifdef USE_ENVMAP
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
#endif`,mm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,gm=`#ifdef USE_ENVMAP
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
#endif`,ym=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,xm=`#ifdef USE_ENVMAP
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
#endif`,vm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,_m=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Mm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,bm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Sm=`#ifdef USE_GRADIENTMAP
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
}`,wm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Em=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Tm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Am=`uniform bool receiveShadow;
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
#endif`,Rm=`#ifdef USE_ENVMAP
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
#endif`,Cm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Im=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Pm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Lm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,km=`PhysicalMaterial material;
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
#endif`,Dm=`struct PhysicalMaterial {
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
}`,Um=`
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
#endif`,Nm=`#if defined( RE_IndirectDiffuse )
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
#endif`,Om=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Fm=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,zm=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Bm=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Hm=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,$m=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Vm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Gm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Wm=`#if defined( USE_POINTS_UV )
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
#endif`,Xm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,qm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ym=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Zm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Jm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Km=`#ifdef USE_MORPHTARGETS
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
#endif`,jm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Qm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,t0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,e0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,n0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,i0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,s0=`#ifdef USE_NORMALMAP
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
#endif`,r0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,o0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,a0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,l0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,c0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,h0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,d0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,u0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,f0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,p0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,m0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,g0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,y0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,x0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,v0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,_0=`float getShadowMask() {
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
}`,M0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,b0=`#ifdef USE_SKINNING
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
#endif`,S0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,w0=`#ifdef USE_SKINNING
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
#endif`,E0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,T0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,A0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,R0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,C0=`#ifdef USE_TRANSMISSION
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
#endif`,I0=`#ifdef USE_TRANSMISSION
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
#endif`,P0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,L0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,k0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,D0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,U0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,N0=`uniform sampler2D t2D;
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
}`,O0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,F0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,z0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,B0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,H0=`#include <common>
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
}`,$0=`#if DEPTH_PACKING == 3200
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
}`,V0=`#define DISTANCE
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
}`,G0=`#define DISTANCE
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
}`,W0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,X0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,q0=`uniform float scale;
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
}`,Y0=`uniform vec3 diffuse;
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
}`,Z0=`#include <common>
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
}`,J0=`uniform vec3 diffuse;
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
}`,K0=`#define LAMBERT
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
}`,j0=`#define LAMBERT
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
}`,Q0=`#define MATCAP
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
}`,tg=`#define MATCAP
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
}`,eg=`#define NORMAL
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
}`,ng=`#define NORMAL
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
}`,ig=`#define PHONG
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
}`,sg=`#define PHONG
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
}`,rg=`#define STANDARD
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
}`,og=`#define STANDARD
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
}`,ag=`#define TOON
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
}`,lg=`#define TOON
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
}`,cg=`uniform float size;
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
}`,hg=`uniform vec3 diffuse;
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
}`,dg=`#include <common>
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
}`,ug=`uniform vec3 color;
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
}`,fg=`uniform float rotation;
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
}`,pg=`uniform vec3 diffuse;
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
}`,me={alphahash_fragment:Np,alphahash_pars_fragment:Op,alphamap_fragment:Fp,alphamap_pars_fragment:zp,alphatest_fragment:Bp,alphatest_pars_fragment:Hp,aomap_fragment:$p,aomap_pars_fragment:Vp,batching_pars_vertex:Gp,batching_vertex:Wp,begin_vertex:Xp,beginnormal_vertex:qp,bsdfs:Yp,iridescence_fragment:Zp,bumpmap_pars_fragment:Jp,clipping_planes_fragment:Kp,clipping_planes_pars_fragment:jp,clipping_planes_pars_vertex:Qp,clipping_planes_vertex:tm,color_fragment:em,color_pars_fragment:nm,color_pars_vertex:im,color_vertex:sm,common:rm,cube_uv_reflection_fragment:om,defaultnormal_vertex:am,displacementmap_pars_vertex:lm,displacementmap_vertex:cm,emissivemap_fragment:hm,emissivemap_pars_fragment:dm,colorspace_fragment:um,colorspace_pars_fragment:fm,envmap_fragment:pm,envmap_common_pars_fragment:mm,envmap_pars_fragment:gm,envmap_pars_vertex:ym,envmap_physical_pars_fragment:Rm,envmap_vertex:xm,fog_vertex:vm,fog_pars_vertex:_m,fog_fragment:Mm,fog_pars_fragment:bm,gradientmap_pars_fragment:Sm,lightmap_pars_fragment:wm,lights_lambert_fragment:Em,lights_lambert_pars_fragment:Tm,lights_pars_begin:Am,lights_toon_fragment:Cm,lights_toon_pars_fragment:Im,lights_phong_fragment:Pm,lights_phong_pars_fragment:Lm,lights_physical_fragment:km,lights_physical_pars_fragment:Dm,lights_fragment_begin:Um,lights_fragment_maps:Nm,lights_fragment_end:Om,logdepthbuf_fragment:Fm,logdepthbuf_pars_fragment:zm,logdepthbuf_pars_vertex:Bm,logdepthbuf_vertex:Hm,map_fragment:$m,map_pars_fragment:Vm,map_particle_fragment:Gm,map_particle_pars_fragment:Wm,metalnessmap_fragment:Xm,metalnessmap_pars_fragment:qm,morphinstance_vertex:Ym,morphcolor_vertex:Zm,morphnormal_vertex:Jm,morphtarget_pars_vertex:Km,morphtarget_vertex:jm,normal_fragment_begin:Qm,normal_fragment_maps:t0,normal_pars_fragment:e0,normal_pars_vertex:n0,normal_vertex:i0,normalmap_pars_fragment:s0,clearcoat_normal_fragment_begin:r0,clearcoat_normal_fragment_maps:o0,clearcoat_pars_fragment:a0,iridescence_pars_fragment:l0,opaque_fragment:c0,packing:h0,premultiplied_alpha_fragment:d0,project_vertex:u0,dithering_fragment:f0,dithering_pars_fragment:p0,roughnessmap_fragment:m0,roughnessmap_pars_fragment:g0,shadowmap_pars_fragment:y0,shadowmap_pars_vertex:x0,shadowmap_vertex:v0,shadowmask_pars_fragment:_0,skinbase_vertex:M0,skinning_pars_vertex:b0,skinning_vertex:S0,skinnormal_vertex:w0,specularmap_fragment:E0,specularmap_pars_fragment:T0,tonemapping_fragment:A0,tonemapping_pars_fragment:R0,transmission_fragment:C0,transmission_pars_fragment:I0,uv_pars_fragment:P0,uv_pars_vertex:L0,uv_vertex:k0,worldpos_vertex:D0,background_vert:U0,background_frag:N0,backgroundCube_vert:O0,backgroundCube_frag:F0,cube_vert:z0,cube_frag:B0,depth_vert:H0,depth_frag:$0,distanceRGBA_vert:V0,distanceRGBA_frag:G0,equirect_vert:W0,equirect_frag:X0,linedashed_vert:q0,linedashed_frag:Y0,meshbasic_vert:Z0,meshbasic_frag:J0,meshlambert_vert:K0,meshlambert_frag:j0,meshmatcap_vert:Q0,meshmatcap_frag:tg,meshnormal_vert:eg,meshnormal_frag:ng,meshphong_vert:ig,meshphong_frag:sg,meshphysical_vert:rg,meshphysical_frag:og,meshtoon_vert:ag,meshtoon_frag:lg,points_vert:cg,points_frag:hg,shadow_vert:dg,shadow_frag:ug,sprite_vert:fg,sprite_frag:pg},Zt={common:{diffuse:{value:new re(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new _e},alphaMap:{value:null},alphaMapTransform:{value:new _e},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new _e}},envmap:{envMap:{value:null},envMapRotation:{value:new _e},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new _e}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new _e}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new _e},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new _e},normalScale:{value:new Bt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new _e},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new _e}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new _e}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new _e}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new re(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new re(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new _e},alphaTest:{value:0},uvTransform:{value:new _e}},sprite:{diffuse:{value:new re(16777215)},opacity:{value:1},center:{value:new Bt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new _e},alphaMap:{value:null},alphaMapTransform:{value:new _e},alphaTest:{value:0}}},ti={basic:{uniforms:Mn([Zt.common,Zt.specularmap,Zt.envmap,Zt.aomap,Zt.lightmap,Zt.fog]),vertexShader:me.meshbasic_vert,fragmentShader:me.meshbasic_frag},lambert:{uniforms:Mn([Zt.common,Zt.specularmap,Zt.envmap,Zt.aomap,Zt.lightmap,Zt.emissivemap,Zt.bumpmap,Zt.normalmap,Zt.displacementmap,Zt.fog,Zt.lights,{emissive:{value:new re(0)}}]),vertexShader:me.meshlambert_vert,fragmentShader:me.meshlambert_frag},phong:{uniforms:Mn([Zt.common,Zt.specularmap,Zt.envmap,Zt.aomap,Zt.lightmap,Zt.emissivemap,Zt.bumpmap,Zt.normalmap,Zt.displacementmap,Zt.fog,Zt.lights,{emissive:{value:new re(0)},specular:{value:new re(1118481)},shininess:{value:30}}]),vertexShader:me.meshphong_vert,fragmentShader:me.meshphong_frag},standard:{uniforms:Mn([Zt.common,Zt.envmap,Zt.aomap,Zt.lightmap,Zt.emissivemap,Zt.bumpmap,Zt.normalmap,Zt.displacementmap,Zt.roughnessmap,Zt.metalnessmap,Zt.fog,Zt.lights,{emissive:{value:new re(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:me.meshphysical_vert,fragmentShader:me.meshphysical_frag},toon:{uniforms:Mn([Zt.common,Zt.aomap,Zt.lightmap,Zt.emissivemap,Zt.bumpmap,Zt.normalmap,Zt.displacementmap,Zt.gradientmap,Zt.fog,Zt.lights,{emissive:{value:new re(0)}}]),vertexShader:me.meshtoon_vert,fragmentShader:me.meshtoon_frag},matcap:{uniforms:Mn([Zt.common,Zt.bumpmap,Zt.normalmap,Zt.displacementmap,Zt.fog,{matcap:{value:null}}]),vertexShader:me.meshmatcap_vert,fragmentShader:me.meshmatcap_frag},points:{uniforms:Mn([Zt.points,Zt.fog]),vertexShader:me.points_vert,fragmentShader:me.points_frag},dashed:{uniforms:Mn([Zt.common,Zt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:me.linedashed_vert,fragmentShader:me.linedashed_frag},depth:{uniforms:Mn([Zt.common,Zt.displacementmap]),vertexShader:me.depth_vert,fragmentShader:me.depth_frag},normal:{uniforms:Mn([Zt.common,Zt.bumpmap,Zt.normalmap,Zt.displacementmap,{opacity:{value:1}}]),vertexShader:me.meshnormal_vert,fragmentShader:me.meshnormal_frag},sprite:{uniforms:Mn([Zt.sprite,Zt.fog]),vertexShader:me.sprite_vert,fragmentShader:me.sprite_frag},background:{uniforms:{uvTransform:{value:new _e},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:me.background_vert,fragmentShader:me.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new _e}},vertexShader:me.backgroundCube_vert,fragmentShader:me.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:me.cube_vert,fragmentShader:me.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:me.equirect_vert,fragmentShader:me.equirect_frag},distanceRGBA:{uniforms:Mn([Zt.common,Zt.displacementmap,{referencePosition:{value:new $},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:me.distanceRGBA_vert,fragmentShader:me.distanceRGBA_frag},shadow:{uniforms:Mn([Zt.lights,Zt.fog,{color:{value:new re(0)},opacity:{value:1}}]),vertexShader:me.shadow_vert,fragmentShader:me.shadow_frag}};ti.physical={uniforms:Mn([ti.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new _e},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new _e},clearcoatNormalScale:{value:new Bt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new _e},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new _e},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new _e},sheen:{value:0},sheenColor:{value:new re(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new _e},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new _e},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new _e},transmissionSamplerSize:{value:new Bt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new _e},attenuationDistance:{value:0},attenuationColor:{value:new re(0)},specularColor:{value:new re(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new _e},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new _e},anisotropyVector:{value:new Bt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new _e}}]),vertexShader:me.meshphysical_vert,fragmentShader:me.meshphysical_frag};var Ao={r:0,b:0,g:0},ts=new qn,mg=new we;function gg(n,t,e,i,s,r,o){let a=new re(0),l=r===!0?0:1,h,u,g=null,f=0,c=null;function d(b){let _=b.isScene===!0?b.background:null;return _&&_.isTexture&&(_=(b.backgroundBlurriness>0?e:t).get(_)),_}function M(b){let _=!1,v=d(b);v===null?p(a,l):v&&v.isColor&&(p(v,1),_=!0);let L=n.xr.getEnvironmentBlendMode();L==="additive"?i.buffers.color.setClear(0,0,0,1,o):L==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||_)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(b,_){let v=d(_);v&&(v.isCubeTexture||v.mapping===Aa)?(u===void 0&&(u=new Ne(new Ee(1,1,1),new wn({name:"BackgroundCubeMaterial",uniforms:Js(ti.backgroundCube.uniforms),vertexShader:ti.backgroundCube.vertexShader,fragmentShader:ti.backgroundCube.fragmentShader,side:un,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(L,T,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),ts.copy(_.backgroundRotation),ts.x*=-1,ts.y*=-1,ts.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(ts.y*=-1,ts.z*=-1),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(mg.makeRotationFromEuler(ts)),u.material.toneMapped=Te.getTransfer(v.colorSpace)!==Le,(g!==v||f!==v.version||c!==n.toneMapping)&&(u.material.needsUpdate=!0,g=v,f=v.version,c=n.toneMapping),u.layers.enableAll(),b.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(h===void 0&&(h=new Ne(new fn(2,2),new wn({name:"BackgroundMaterial",uniforms:Js(ti.background.uniforms),vertexShader:ti.background.vertexShader,fragmentShader:ti.background.fragmentShader,side:Fi,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(h)),h.material.uniforms.t2D.value=v,h.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,h.material.toneMapped=Te.getTransfer(v.colorSpace)!==Le,v.matrixAutoUpdate===!0&&v.updateMatrix(),h.material.uniforms.uvTransform.value.copy(v.matrix),(g!==v||f!==v.version||c!==n.toneMapping)&&(h.material.needsUpdate=!0,g=v,f=v.version,c=n.toneMapping),h.layers.enableAll(),b.unshift(h,h.geometry,h.material,0,0,null))}function p(b,_){b.getRGB(Ao,hu(n)),i.buffers.color.setClear(Ao.r,Ao.g,Ao.b,_,o)}return{getClearColor:function(){return a},setClearColor:function(b,_=1){a.set(b),l=_,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,p(a,l)},render:M,addToRenderList:m}}function yg(n,t){let e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=f(null),r=s,o=!1;function a(y,S,A,w,I){let N=!1,O=g(w,A,S);r!==O&&(r=O,h(r.object)),N=c(y,w,A,I),N&&d(y,w,A,I),I!==null&&t.update(I,n.ELEMENT_ARRAY_BUFFER),(N||o)&&(o=!1,v(y,S,A,w),I!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(I).buffer))}function l(){return n.createVertexArray()}function h(y){return n.bindVertexArray(y)}function u(y){return n.deleteVertexArray(y)}function g(y,S,A){let w=A.wireframe===!0,I=i[y.id];I===void 0&&(I={},i[y.id]=I);let N=I[S.id];N===void 0&&(N={},I[S.id]=N);let O=N[w];return O===void 0&&(O=f(l()),N[w]=O),O}function f(y){let S=[],A=[],w=[];for(let I=0;I<e;I++)S[I]=0,A[I]=0,w[I]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:S,enabledAttributes:A,attributeDivisors:w,object:y,attributes:{},index:null}}function c(y,S,A,w){let I=r.attributes,N=S.attributes,O=0,z=A.getAttributes();for(let F in z)if(z[F].location>=0){let it=I[F],P=N[F];if(P===void 0&&(F==="instanceMatrix"&&y.instanceMatrix&&(P=y.instanceMatrix),F==="instanceColor"&&y.instanceColor&&(P=y.instanceColor)),it===void 0||it.attribute!==P||P&&it.data!==P.data)return!0;O++}return r.attributesNum!==O||r.index!==w}function d(y,S,A,w){let I={},N=S.attributes,O=0,z=A.getAttributes();for(let F in z)if(z[F].location>=0){let it=N[F];it===void 0&&(F==="instanceMatrix"&&y.instanceMatrix&&(it=y.instanceMatrix),F==="instanceColor"&&y.instanceColor&&(it=y.instanceColor));let P={};P.attribute=it,it&&it.data&&(P.data=it.data),I[F]=P,O++}r.attributes=I,r.attributesNum=O,r.index=w}function M(){let y=r.newAttributes;for(let S=0,A=y.length;S<A;S++)y[S]=0}function m(y){p(y,0)}function p(y,S){let A=r.newAttributes,w=r.enabledAttributes,I=r.attributeDivisors;A[y]=1,w[y]===0&&(n.enableVertexAttribArray(y),w[y]=1),I[y]!==S&&(n.vertexAttribDivisor(y,S),I[y]=S)}function b(){let y=r.newAttributes,S=r.enabledAttributes;for(let A=0,w=S.length;A<w;A++)S[A]!==y[A]&&(n.disableVertexAttribArray(A),S[A]=0)}function _(y,S,A,w,I,N,O){O===!0?n.vertexAttribIPointer(y,S,A,I,N):n.vertexAttribPointer(y,S,A,w,I,N)}function v(y,S,A,w){M();let I=w.attributes,N=A.getAttributes(),O=S.defaultAttributeValues;for(let z in N){let F=N[z];if(F.location>=0){let X=I[z];if(X===void 0&&(z==="instanceMatrix"&&y.instanceMatrix&&(X=y.instanceMatrix),z==="instanceColor"&&y.instanceColor&&(X=y.instanceColor)),X!==void 0){let it=X.normalized,P=X.itemSize,mt=t.get(X);if(mt===void 0)continue;let Ot=mt.buffer,U=mt.type,Y=mt.bytesPerElement,j=U===n.INT||U===n.UNSIGNED_INT||X.gpuType===Kc;if(X.isInterleavedBufferAttribute){let G=X.data,ct=G.stride,at=X.offset;if(G.isInstancedInterleavedBuffer){for(let nt=0;nt<F.locationSize;nt++)p(F.location+nt,G.meshPerAttribute);y.isInstancedMesh!==!0&&w._maxInstanceCount===void 0&&(w._maxInstanceCount=G.meshPerAttribute*G.count)}else for(let nt=0;nt<F.locationSize;nt++)m(F.location+nt);n.bindBuffer(n.ARRAY_BUFFER,Ot);for(let nt=0;nt<F.locationSize;nt++)_(F.location+nt,P/F.locationSize,U,it,ct*Y,(at+P/F.locationSize*nt)*Y,j)}else{if(X.isInstancedBufferAttribute){for(let G=0;G<F.locationSize;G++)p(F.location+G,X.meshPerAttribute);y.isInstancedMesh!==!0&&w._maxInstanceCount===void 0&&(w._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let G=0;G<F.locationSize;G++)m(F.location+G);n.bindBuffer(n.ARRAY_BUFFER,Ot);for(let G=0;G<F.locationSize;G++)_(F.location+G,P/F.locationSize,U,it,P*Y,P/F.locationSize*G*Y,j)}}else if(O!==void 0){let it=O[z];if(it!==void 0)switch(it.length){case 2:n.vertexAttrib2fv(F.location,it);break;case 3:n.vertexAttrib3fv(F.location,it);break;case 4:n.vertexAttrib4fv(F.location,it);break;default:n.vertexAttrib1fv(F.location,it)}}}}b()}function L(){R();for(let y in i){let S=i[y];for(let A in S){let w=S[A];for(let I in w)u(w[I].object),delete w[I];delete S[A]}delete i[y]}}function T(y){if(i[y.id]===void 0)return;let S=i[y.id];for(let A in S){let w=S[A];for(let I in w)u(w[I].object),delete w[I];delete S[A]}delete i[y.id]}function E(y){for(let S in i){let A=i[S];if(A[y.id]===void 0)continue;let w=A[y.id];for(let I in w)u(w[I].object),delete w[I];delete A[y.id]}}function R(){x(),o=!0,r!==s&&(r=s,h(r.object))}function x(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:R,resetDefaultState:x,dispose:L,releaseStatesOfGeometry:T,releaseStatesOfProgram:E,initAttributes:M,enableAttribute:m,disableUnusedAttributes:b}}function xg(n,t,e){let i;function s(h){i=h}function r(h,u){n.drawArrays(i,h,u),e.update(u,i,1)}function o(h,u,g){g!==0&&(n.drawArraysInstanced(i,h,u,g),e.update(u,i,g))}function a(h,u,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,h,0,u,0,g);let c=0;for(let d=0;d<g;d++)c+=u[d];e.update(c,i,1)}function l(h,u,g,f){if(g===0)return;let c=t.get("WEBGL_multi_draw");if(c===null)for(let d=0;d<h.length;d++)o(h[d],u[d],f[d]);else{c.multiDrawArraysInstancedWEBGL(i,h,0,u,0,f,0,g);let d=0;for(let M=0;M<g;M++)d+=u[M]*f[M];e.update(d,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function vg(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let E=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(E){return!(E!==Ln&&i.convert(E)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(E){let R=E===Gr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(E!==xi&&i.convert(E)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==ni&&!R)}function l(E){if(E==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=e.precision!==void 0?e.precision:"highp",u=l(h);u!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",u,"instead."),h=u);let g=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),c=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),d=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),b=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),_=n.getParameter(n.MAX_VARYING_VECTORS),v=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),L=d>0,T=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:h,logarithmicDepthBuffer:g,reverseDepthBuffer:f,maxTextures:c,maxVertexTextures:d,maxTextureSize:M,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:b,maxVaryings:_,maxFragmentUniforms:v,vertexTextures:L,maxSamples:T}}function _g(n){let t=this,e=null,i=0,s=!1,r=!1,o=new mi,a=new _e,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(g,f){let c=g.length!==0||f||i!==0||s;return s=f,i=g.length,c},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(g,f){e=u(g,f,0)},this.setState=function(g,f,c){let d=g.clippingPlanes,M=g.clipIntersection,m=g.clipShadows,p=n.get(g);if(!s||d===null||d.length===0||r&&!m)r?u(null):h();else{let b=r?0:i,_=b*4,v=p.clippingState||null;l.value=v,v=u(d,f,_,c);for(let L=0;L!==_;++L)v[L]=e[L];p.clippingState=v,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=b}};function h(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(g,f,c,d){let M=g!==null?g.length:0,m=null;if(M!==0){if(m=l.value,d!==!0||m===null){let p=c+M*4,b=f.matrixWorldInverse;a.getNormalMatrix(b),(m===null||m.length<p)&&(m=new Float32Array(p));for(let _=0,v=c;_!==M;++_,v+=4)o.copy(g[_]).applyMatrix4(b,a),o.normal.toArray(m,v),m[v+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=M,t.numIntersection=0,m}}function Mg(n){let t=new WeakMap;function e(o,a){return a===Nl?o.mapping=Xs:a===Ol&&(o.mapping=qs),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===Nl||a===Ol)if(t.has(o)){let l=t.get(o).texture;return e(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let h=new yc(l.height);return h.fromEquirectangularTexture(n,o),t.set(o,h),o.addEventListener("dispose",s),e(h.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}var na=class extends ta{constructor(t=-1,e=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-t,o=i+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let h=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=h*this.view.offsetX,o=r+h*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},zs=4,cd=[.125,.215,.35,.446,.526,.582],ss=20,ml=new na,hd=new re,gl=null,yl=0,xl=0,vl=!1,ns=(1+Math.sqrt(5))/2,ks=1/ns,dd=[new $(-ns,ks,0),new $(ns,ks,0),new $(-ks,0,ns),new $(ks,0,ns),new $(0,ns,-ks),new $(0,ns,ks),new $(-1,1,-1),new $(1,1,-1),new $(-1,1,1),new $(1,1,1)],ia=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100){gl=this._renderer.getRenderTarget(),yl=this._renderer.getActiveCubeFace(),xl=this._renderer.getActiveMipmapLevel(),vl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,i,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=pd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=fd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(gl,yl,xl),this._renderer.xr.enabled=vl,t.scissorTest=!1,Ro(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Xs||t.mapping===qs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),gl=this._renderer.getRenderTarget(),yl=this._renderer.getActiveCubeFace(),xl=this._renderer.getActiveMipmapLevel(),vl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:ei,minFilter:ei,generateMipmaps:!1,type:Gr,format:Ln,colorSpace:tr,depthBuffer:!1},s=ud(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ud(t,e,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=bg(r)),this._blurMaterial=Sg(r,t,e)}return s}_compileMaterial(t){let e=new Ne(this._lodPlanes[0],t);this._renderer.compile(e,ml)}_sceneToCubeUV(t,e,i,s){let a=new bn(90,1,e,i),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,g=u.autoClear,f=u.toneMapping;u.getClearColor(hd),u.toneMapping=ii,u.autoClear=!1;let c=new Un({name:"PMREM.Background",side:un,depthWrite:!1,depthTest:!1}),d=new Ne(new Ee,c),M=!1,m=t.background;m?m.isColor&&(c.color.copy(m),t.background=null,M=!0):(c.color.copy(hd),M=!0);for(let p=0;p<6;p++){let b=p%3;b===0?(a.up.set(0,l[p],0),a.lookAt(h[p],0,0)):b===1?(a.up.set(0,0,l[p]),a.lookAt(0,h[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,h[p]));let _=this._cubeSize;Ro(s,b*_,p>2?_:0,_,_),u.setRenderTarget(s),M&&u.render(d,a),u.render(t,a)}d.geometry.dispose(),d.material.dispose(),u.toneMapping=f,u.autoClear=g,t.background=m}_textureToCubeUV(t,e){let i=this._renderer,s=t.mapping===Xs||t.mapping===qs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=pd()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=fd());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new Ne(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;Ro(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(o,ml)}_applyPMREM(t){let e=this._renderer,i=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=dd[(s-r-1)%dd.length];this._blur(t,r-1,r,o,a)}e.autoClear=i}_blur(t,e,i,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,s,"latitudinal",r),this._halfBlur(o,t,i,i,s,"longitudinal",r)}_halfBlur(t,e,i,s,r,o,a){let l=this._renderer,h=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,g=new Ne(this._lodPlanes[s],h),f=h.uniforms,c=this._sizeLods[i]-1,d=isFinite(r)?Math.PI/(2*c):2*Math.PI/(2*ss-1),M=r/d,m=isFinite(r)?1+Math.floor(u*M):ss;m>ss&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ss}`);let p=[],b=0;for(let E=0;E<ss;++E){let R=E/M,x=Math.exp(-R*R/2);p.push(x),E===0?b+=x:E<m&&(b+=2*x)}for(let E=0;E<p.length;E++)p[E]=p[E]/b;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:_}=this;f.dTheta.value=d,f.mipInt.value=_-i;let v=this._sizeLods[s],L=3*v*(s>_-zs?s-_+zs:0),T=4*(this._cubeSize-v);Ro(e,L,T,3*v,2*v),l.setRenderTarget(e),l.render(g,ml)}};function bg(n){let t=[],e=[],i=[],s=n,r=n-zs+1+cd.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let l=1/a;o>n-zs?l=cd[o-n+zs-1]:o===0&&(l=0),i.push(l);let h=1/(a-2),u=-h,g=1+h,f=[u,u,g,u,g,g,u,u,g,g,u,g],c=6,d=6,M=3,m=2,p=1,b=new Float32Array(M*d*c),_=new Float32Array(m*d*c),v=new Float32Array(p*d*c);for(let T=0;T<c;T++){let E=T%3*2/3-1,R=T>2?0:-1,x=[E,R,0,E+2/3,R,0,E+2/3,R+1,0,E,R,0,E+2/3,R+1,0,E,R+1,0];b.set(x,M*d*T),_.set(f,m*d*T);let y=[T,T,T,T,T,T];v.set(y,p*d*T)}let L=new De;L.setAttribute("position",new $e(b,M)),L.setAttribute("uv",new $e(_,m)),L.setAttribute("faceIndex",new $e(v,p)),t.push(L),s>zs&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function ud(n,t,e){let i=new vi(n,t,e);return i.texture.mapping=Aa,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ro(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function Sg(n,t,e){let i=new Float32Array(ss),s=new $(0,1,0);return new wn({name:"SphericalGaussianBlur",defines:{n:ss,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:oh(),fragmentShader:`

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
		`,blending:Ni,depthTest:!1,depthWrite:!1})}function fd(){return new wn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:oh(),fragmentShader:`

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
		`,blending:Ni,depthTest:!1,depthWrite:!1})}function pd(){return new wn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:oh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ni,depthTest:!1,depthWrite:!1})}function oh(){return`

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
	`}function wg(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){let l=a.mapping,h=l===Nl||l===Ol,u=l===Xs||l===qs;if(h||u){let g=t.get(a),f=g!==void 0?g.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new ia(n)),g=h?e.fromEquirectangular(a,g):e.fromCubemap(a,g),g.texture.pmremVersion=a.pmremVersion,t.set(a,g),g.texture;if(g!==void 0)return g.texture;{let c=a.image;return h&&c&&c.height>0||u&&c&&s(c)?(e===null&&(e=new ia(n)),g=h?e.fromEquirectangular(a):e.fromCubemap(a),g.texture.pmremVersion=a.pmremVersion,t.set(a,g),a.addEventListener("dispose",r),g.texture):null}}}return a}function s(a){let l=0,h=6;for(let u=0;u<h;u++)a[u]!==void 0&&l++;return l===h}function r(a){let l=a.target;l.removeEventListener("dispose",r);let h=t.get(l);h!==void 0&&(t.delete(l),h.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function Eg(n){let t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let s=e(i);return s===null&&Sr("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function Tg(n,t,e,i){let s={},r=new WeakMap;function o(g){let f=g.target;f.index!==null&&t.remove(f.index);for(let d in f.attributes)t.remove(f.attributes[d]);for(let d in f.morphAttributes){let M=f.morphAttributes[d];for(let m=0,p=M.length;m<p;m++)t.remove(M[m])}f.removeEventListener("dispose",o),delete s[f.id];let c=r.get(f);c&&(t.remove(c),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(g,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,e.memory.geometries++),f}function l(g){let f=g.attributes;for(let d in f)t.update(f[d],n.ARRAY_BUFFER);let c=g.morphAttributes;for(let d in c){let M=c[d];for(let m=0,p=M.length;m<p;m++)t.update(M[m],n.ARRAY_BUFFER)}}function h(g){let f=[],c=g.index,d=g.attributes.position,M=0;if(c!==null){let b=c.array;M=c.version;for(let _=0,v=b.length;_<v;_+=3){let L=b[_+0],T=b[_+1],E=b[_+2];f.push(L,T,T,E,E,L)}}else if(d!==void 0){let b=d.array;M=d.version;for(let _=0,v=b.length/3-1;_<v;_+=3){let L=_+0,T=_+1,E=_+2;f.push(L,T,T,E,E,L)}}else return;let m=new(lu(f)?Qo:jo)(f,1);m.version=M;let p=r.get(g);p&&t.remove(p),r.set(g,m)}function u(g){let f=r.get(g);if(f){let c=g.index;c!==null&&f.version<c.version&&h(g)}else h(g);return r.get(g)}return{get:a,update:l,getWireframeAttribute:u}}function Ag(n,t,e){let i;function s(f){i=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,c){n.drawElements(i,c,r,f*o),e.update(c,i,1)}function h(f,c,d){d!==0&&(n.drawElementsInstanced(i,c,r,f*o,d),e.update(c,i,d))}function u(f,c,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,c,0,r,f,0,d);let m=0;for(let p=0;p<d;p++)m+=c[p];e.update(m,i,1)}function g(f,c,d,M){if(d===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)h(f[p]/o,c[p],M[p]);else{m.multiDrawElementsInstancedWEBGL(i,c,0,r,f,0,M,0,d);let p=0;for(let b=0;b<d;b++)p+=c[b]*M[b];e.update(p,i,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=h,this.renderMultiDraw=u,this.renderMultiDrawInstances=g}function Rg(n){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(r/3);break;case n.LINES:e.lines+=a*(r/2);break;case n.LINE_STRIP:e.lines+=a*(r-1);break;case n.LINE_LOOP:e.lines+=a*r;break;case n.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function Cg(n,t,e){let i=new WeakMap,s=new Ze;function r(o,a,l){let h=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,g=u!==void 0?u.length:0,f=i.get(a);if(f===void 0||f.count!==g){let x=function(){E.dispose(),i.delete(a),a.removeEventListener("dispose",x)};f!==void 0&&f.texture.dispose();let c=a.morphAttributes.position!==void 0,d=a.morphAttributes.normal!==void 0,M=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],b=a.morphAttributes.color||[],_=0;c===!0&&(_=1),d===!0&&(_=2),M===!0&&(_=3);let v=a.attributes.position.count*_,L=1;v>t.maxTextureSize&&(L=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);let T=new Float32Array(v*L*4*g),E=new Zo(T,v,L,g);E.type=ni,E.needsUpdate=!0;let R=_*4;for(let y=0;y<g;y++){let S=m[y],A=p[y],w=b[y],I=v*L*4*y;for(let N=0;N<S.count;N++){let O=N*R;c===!0&&(s.fromBufferAttribute(S,N),T[I+O+0]=s.x,T[I+O+1]=s.y,T[I+O+2]=s.z,T[I+O+3]=0),d===!0&&(s.fromBufferAttribute(A,N),T[I+O+4]=s.x,T[I+O+5]=s.y,T[I+O+6]=s.z,T[I+O+7]=0),M===!0&&(s.fromBufferAttribute(w,N),T[I+O+8]=s.x,T[I+O+9]=s.y,T[I+O+10]=s.z,T[I+O+11]=w.itemSize===4?s.w:1)}}f={count:g,texture:E,size:new Bt(v,L)},i.set(a,f),a.addEventListener("dispose",x)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let c=0;for(let M=0;M<h.length;M++)c+=h[M];let d=a.morphTargetsRelative?1:1-c;l.getUniforms().setValue(n,"morphTargetBaseInfluence",d),l.getUniforms().setValue(n,"morphTargetInfluences",h)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:r}}function Ig(n,t,e,i){let s=new WeakMap;function r(l){let h=i.render.frame,u=l.geometry,g=t.get(l,u);if(s.get(g)!==h&&(t.update(g),s.set(g,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==h&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,h))),l.isSkinnedMesh){let f=l.skeleton;s.get(f)!==h&&(f.update(),s.set(f,h))}return g}function o(){s=new WeakMap}function a(l){let h=l.target;h.removeEventListener("dispose",a),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:r,dispose:o}}var sa=class extends An{constructor(t,e,i,s,r,o,a,l,h,u=$s){if(u!==$s&&u!==Zs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===$s&&(i=ls),i===void 0&&u===Zs&&(i=Ys),super(null,s,r,o,a,l,u,i,h),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Sn,this.minFilter=l!==void 0?l:Sn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},uu=new An,md=new sa(1,1),fu=new Zo,pu=new mc,mu=new ea,gd=[],yd=[],xd=new Float32Array(16),vd=new Float32Array(9),_d=new Float32Array(4);function er(n,t,e){let i=n[0];if(i<=0||i>0)return n;let s=t*e,r=gd[s];if(r===void 0&&(r=new Float32Array(s),gd[s]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(r,a)}return r}function sn(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function rn(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Ca(n,t){let e=yd[t];e===void 0&&(e=new Int32Array(t),yd[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function Pg(n,t){let e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function Lg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(sn(e,t))return;n.uniform2fv(this.addr,t),rn(e,t)}}function kg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(sn(e,t))return;n.uniform3fv(this.addr,t),rn(e,t)}}function Dg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(sn(e,t))return;n.uniform4fv(this.addr,t),rn(e,t)}}function Ug(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(sn(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),rn(e,t)}else{if(sn(e,i))return;_d.set(i),n.uniformMatrix2fv(this.addr,!1,_d),rn(e,i)}}function Ng(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(sn(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),rn(e,t)}else{if(sn(e,i))return;vd.set(i),n.uniformMatrix3fv(this.addr,!1,vd),rn(e,i)}}function Og(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(sn(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),rn(e,t)}else{if(sn(e,i))return;xd.set(i),n.uniformMatrix4fv(this.addr,!1,xd),rn(e,i)}}function Fg(n,t){let e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function zg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(sn(e,t))return;n.uniform2iv(this.addr,t),rn(e,t)}}function Bg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(sn(e,t))return;n.uniform3iv(this.addr,t),rn(e,t)}}function Hg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(sn(e,t))return;n.uniform4iv(this.addr,t),rn(e,t)}}function $g(n,t){let e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function Vg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(sn(e,t))return;n.uniform2uiv(this.addr,t),rn(e,t)}}function Gg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(sn(e,t))return;n.uniform3uiv(this.addr,t),rn(e,t)}}function Wg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(sn(e,t))return;n.uniform4uiv(this.addr,t),rn(e,t)}}function Xg(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(md.compareFunction=ou,r=md):r=uu,e.setTexture2D(t||r,s)}function qg(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||pu,s)}function Yg(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||mu,s)}function Zg(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||fu,s)}function Jg(n){switch(n){case 5126:return Pg;case 35664:return Lg;case 35665:return kg;case 35666:return Dg;case 35674:return Ug;case 35675:return Ng;case 35676:return Og;case 5124:case 35670:return Fg;case 35667:case 35671:return zg;case 35668:case 35672:return Bg;case 35669:case 35673:return Hg;case 5125:return $g;case 36294:return Vg;case 36295:return Gg;case 36296:return Wg;case 35678:case 36198:case 36298:case 36306:case 35682:return Xg;case 35679:case 36299:case 36307:return qg;case 35680:case 36300:case 36308:case 36293:return Yg;case 36289:case 36303:case 36311:case 36292:return Zg}}function Kg(n,t){n.uniform1fv(this.addr,t)}function jg(n,t){let e=er(t,this.size,2);n.uniform2fv(this.addr,e)}function Qg(n,t){let e=er(t,this.size,3);n.uniform3fv(this.addr,e)}function ty(n,t){let e=er(t,this.size,4);n.uniform4fv(this.addr,e)}function ey(n,t){let e=er(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function ny(n,t){let e=er(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function iy(n,t){let e=er(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function sy(n,t){n.uniform1iv(this.addr,t)}function ry(n,t){n.uniform2iv(this.addr,t)}function oy(n,t){n.uniform3iv(this.addr,t)}function ay(n,t){n.uniform4iv(this.addr,t)}function ly(n,t){n.uniform1uiv(this.addr,t)}function cy(n,t){n.uniform2uiv(this.addr,t)}function hy(n,t){n.uniform3uiv(this.addr,t)}function dy(n,t){n.uniform4uiv(this.addr,t)}function uy(n,t,e){let i=this.cache,s=t.length,r=Ca(e,s);sn(i,r)||(n.uniform1iv(this.addr,r),rn(i,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||uu,r[o])}function fy(n,t,e){let i=this.cache,s=t.length,r=Ca(e,s);sn(i,r)||(n.uniform1iv(this.addr,r),rn(i,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||pu,r[o])}function py(n,t,e){let i=this.cache,s=t.length,r=Ca(e,s);sn(i,r)||(n.uniform1iv(this.addr,r),rn(i,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||mu,r[o])}function my(n,t,e){let i=this.cache,s=t.length,r=Ca(e,s);sn(i,r)||(n.uniform1iv(this.addr,r),rn(i,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||fu,r[o])}function gy(n){switch(n){case 5126:return Kg;case 35664:return jg;case 35665:return Qg;case 35666:return ty;case 35674:return ey;case 35675:return ny;case 35676:return iy;case 5124:case 35670:return sy;case 35667:case 35671:return ry;case 35668:case 35672:return oy;case 35669:case 35673:return ay;case 5125:return ly;case 36294:return cy;case 36295:return hy;case 36296:return dy;case 35678:case 36198:case 36298:case 36306:case 35682:return uy;case 35679:case 36299:case 36307:return fy;case 35680:case 36300:case 36308:case 36293:return py;case 36289:case 36303:case 36311:case 36292:return my}}var xc=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=Jg(e.type)}},vc=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=gy(e.type)}},_c=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],i)}}},_l=/(\w+)(\])?(\[|\.)?/g;function Md(n,t){n.seq.push(t),n.map[t.id]=t}function yy(n,t,e){let i=n.name,s=i.length;for(_l.lastIndex=0;;){let r=_l.exec(i),o=_l.lastIndex,a=r[1],l=r[2]==="]",h=r[3];if(l&&(a=a|0),h===void 0||h==="["&&o+2===s){Md(e,h===void 0?new xc(a,n,t):new vc(a,n,t));break}else{let g=e.map[a];g===void 0&&(g=new _c(a),Md(e,g)),e=g}}}var Gs=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);yy(r,o,this)}}setValue(t,e,i,s){let r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){let s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let i=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&i.push(o)}return i}};function bd(n,t,e){let i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}var xy=37297,vy=0;function _y(n,t){let e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}var Sd=new _e;function My(n){Te._getMatrix(Sd,Te.workingColorSpace,n);let t=`mat3( ${Sd.elements.map(e=>e.toFixed(4))} )`;switch(Te.getTransfer(n)){case Ra:return[t,"LinearTransferOETF"];case Le:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function wd(n,t,e){let i=n.getShaderParameter(t,n.COMPILE_STATUS),s=n.getShaderInfoLog(t).trim();if(i&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+_y(n.getShaderSource(t),o)}else return s}function by(n,t){let e=My(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Sy(n,t){let e;switch(t){case Df:e="Linear";break;case Uf:e="Reinhard";break;case Nf:e="Cineon";break;case Of:e="ACESFilmic";break;case zf:e="AgX";break;case Bf:e="Neutral";break;case Ff:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Co=new $;function wy(){Te.getLuminanceCoefficients(Co);let n=Co.x.toFixed(4),t=Co.y.toFixed(4),e=Co.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ey(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(wr).join(`
`)}function Ty(n){let t=[];for(let e in n){let i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function Ay(n,t){let e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(t,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function wr(n){return n!==""}function Ed(n,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Td(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Ry=/^[ \t]*#include +<([\w\d./]+)>/gm;function Mc(n){return n.replace(Ry,Iy)}var Cy=new Map;function Iy(n,t){let e=me[t];if(e===void 0){let i=Cy.get(t);if(i!==void 0)e=me[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Mc(e)}var Py=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ad(n){return n.replace(Py,Ly)}function Ly(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Rd(n){let t=`precision ${n.precision} float;
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
#define LOW_PRECISION`),t}function ky(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===qd?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===Jc?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===pi&&(t="SHADOWMAP_TYPE_VSM"),t}function Dy(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Xs:case qs:t="ENVMAP_TYPE_CUBE";break;case Aa:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Uy(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case qs:t="ENVMAP_MODE_REFRACTION";break}return t}function Ny(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Yd:t="ENVMAP_BLENDING_MULTIPLY";break;case Lf:t="ENVMAP_BLENDING_MIX";break;case kf:t="ENVMAP_BLENDING_ADD";break}return t}function Oy(n){let t=n.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function Fy(n,t,e,i){let s=n.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=ky(e),h=Dy(e),u=Uy(e),g=Ny(e),f=Oy(e),c=Ey(e),d=Ty(r),M=s.createProgram(),m,p,b=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d].filter(wr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d].filter(wr).join(`
`),p.length>0&&(p+=`
`)):(m=[Rd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(wr).join(`
`),p=[Rd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",e.envMap?"#define "+g:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ii?"#define TONE_MAPPING":"",e.toneMapping!==ii?me.tonemapping_pars_fragment:"",e.toneMapping!==ii?Sy("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",me.colorspace_pars_fragment,by("linearToOutputTexel",e.outputColorSpace),wy(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(wr).join(`
`)),o=Mc(o),o=Ed(o,e),o=Td(o,e),a=Mc(a),a=Ed(a,e),a=Td(a,e),o=Ad(o),a=Ad(a),e.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[c,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Hh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Hh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let _=b+m+o,v=b+p+a,L=bd(s,s.VERTEX_SHADER,_),T=bd(s,s.FRAGMENT_SHADER,v);s.attachShader(M,L),s.attachShader(M,T),e.index0AttributeName!==void 0?s.bindAttribLocation(M,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(M,0,"position"),s.linkProgram(M);function E(S){if(n.debug.checkShaderErrors){let A=s.getProgramInfoLog(M).trim(),w=s.getShaderInfoLog(L).trim(),I=s.getShaderInfoLog(T).trim(),N=!0,O=!0;if(s.getProgramParameter(M,s.LINK_STATUS)===!1)if(N=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,M,L,T);else{let z=wd(s,L,"vertex"),F=wd(s,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(M,s.VALIDATE_STATUS)+`

Material Name: `+S.name+`
Material Type: `+S.type+`

Program Info Log: `+A+`
`+z+`
`+F)}else A!==""?console.warn("THREE.WebGLProgram: Program Info Log:",A):(w===""||I==="")&&(O=!1);O&&(S.diagnostics={runnable:N,programLog:A,vertexShader:{log:w,prefix:m},fragmentShader:{log:I,prefix:p}})}s.deleteShader(L),s.deleteShader(T),R=new Gs(s,M),x=Ay(s,M)}let R;this.getUniforms=function(){return R===void 0&&E(this),R};let x;this.getAttributes=function(){return x===void 0&&E(this),x};let y=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=s.getProgramParameter(M,xy)),y},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(M),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=vy++,this.cacheKey=t,this.usedTimes=1,this.program=M,this.vertexShader=L,this.fragmentShader=T,this}var zy=0,bc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new Sc(t),e.set(t,i)),i}},Sc=class{constructor(t){this.id=zy++,this.code=t,this.usedTimes=0}};function By(n,t,e,i,s,r,o){let a=new Ko,l=new bc,h=new Set,u=[],g=s.logarithmicDepthBuffer,f=s.vertexTextures,c=s.precision,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(x){return h.add(x),x===0?"uv":`uv${x}`}function m(x,y,S,A,w){let I=A.fog,N=w.geometry,O=x.isMeshStandardMaterial?A.environment:null,z=(x.isMeshStandardMaterial?e:t).get(x.envMap||O),F=z&&z.mapping===Aa?z.image.height:null,X=d[x.type];x.precision!==null&&(c=s.getMaxPrecision(x.precision),c!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",c,"instead."));let it=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,P=it!==void 0?it.length:0,mt=0;N.morphAttributes.position!==void 0&&(mt=1),N.morphAttributes.normal!==void 0&&(mt=2),N.morphAttributes.color!==void 0&&(mt=3);let Ot,U,Y,j;if(X){let K=ti[X];Ot=K.vertexShader,U=K.fragmentShader}else Ot=x.vertexShader,U=x.fragmentShader,l.update(x),Y=l.getVertexShaderID(x),j=l.getFragmentShaderID(x);let G=n.getRenderTarget(),ct=n.state.buffers.depth.getReversed(),at=w.isInstancedMesh===!0,nt=w.isBatchedMesh===!0,rt=!!x.map,W=!!x.matcap,dt=!!z,H=!!x.aoMap,Ut=!!x.lightMap,_t=!!x.bumpMap,St=!!x.normalMap,It=!!x.displacementMap,tt=!!x.emissiveMap,$t=!!x.metalnessMap,B=!!x.roughnessMap,k=x.anisotropy>0,yt=x.clearcoat>0,Ct=x.dispersion>0,Lt=x.iridescence>0,Z=x.sheen>0,ft=x.transmission>0,ht=k&&!!x.anisotropyMap,Mt=yt&&!!x.clearcoatMap,wt=yt&&!!x.clearcoatNormalMap,Rt=yt&&!!x.clearcoatRoughnessMap,Pt=Lt&&!!x.iridescenceMap,Xt=Lt&&!!x.iridescenceThicknessMap,jt=Z&&!!x.sheenColorMap,qt=Z&&!!x.sheenRoughnessMap,de=!!x.specularMap,se=!!x.specularColorMap,be=!!x.specularIntensityMap,lt=ft&&!!x.transmissionMap,Yt=ft&&!!x.thicknessMap,Tt=!!x.gradientMap,Nt=!!x.alphaMap,C=x.alphaTest>0,V=!!x.alphaHash,J=!!x.extensions,ot=ii;x.toneMapped&&(G===null||G.isXRRenderTarget===!0)&&(ot=n.toneMapping);let vt={shaderID:X,shaderType:x.type,shaderName:x.name,vertexShader:Ot,fragmentShader:U,defines:x.defines,customVertexShaderID:Y,customFragmentShaderID:j,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:c,batching:nt,batchingColor:nt&&w._colorsTexture!==null,instancing:at,instancingColor:at&&w.instanceColor!==null,instancingMorph:at&&w.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:G===null?n.outputColorSpace:G.isXRRenderTarget===!0?G.texture.colorSpace:tr,alphaToCoverage:!!x.alphaToCoverage,map:rt,matcap:W,envMap:dt,envMapMode:dt&&z.mapping,envMapCubeUVHeight:F,aoMap:H,lightMap:Ut,bumpMap:_t,normalMap:St,displacementMap:f&&It,emissiveMap:tt,normalMapObjectSpace:St&&x.normalMapType===Gf,normalMapTangentSpace:St&&x.normalMapType===ru,metalnessMap:$t,roughnessMap:B,anisotropy:k,anisotropyMap:ht,clearcoat:yt,clearcoatMap:Mt,clearcoatNormalMap:wt,clearcoatRoughnessMap:Rt,dispersion:Ct,iridescence:Lt,iridescenceMap:Pt,iridescenceThicknessMap:Xt,sheen:Z,sheenColorMap:jt,sheenRoughnessMap:qt,specularMap:de,specularColorMap:se,specularIntensityMap:be,transmission:ft,transmissionMap:lt,thicknessMap:Yt,gradientMap:Tt,opaque:x.transparent===!1&&x.blending===Hs&&x.alphaToCoverage===!1,alphaMap:Nt,alphaTest:C,alphaHash:V,combine:x.combine,mapUv:rt&&M(x.map.channel),aoMapUv:H&&M(x.aoMap.channel),lightMapUv:Ut&&M(x.lightMap.channel),bumpMapUv:_t&&M(x.bumpMap.channel),normalMapUv:St&&M(x.normalMap.channel),displacementMapUv:It&&M(x.displacementMap.channel),emissiveMapUv:tt&&M(x.emissiveMap.channel),metalnessMapUv:$t&&M(x.metalnessMap.channel),roughnessMapUv:B&&M(x.roughnessMap.channel),anisotropyMapUv:ht&&M(x.anisotropyMap.channel),clearcoatMapUv:Mt&&M(x.clearcoatMap.channel),clearcoatNormalMapUv:wt&&M(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Rt&&M(x.clearcoatRoughnessMap.channel),iridescenceMapUv:Pt&&M(x.iridescenceMap.channel),iridescenceThicknessMapUv:Xt&&M(x.iridescenceThicknessMap.channel),sheenColorMapUv:jt&&M(x.sheenColorMap.channel),sheenRoughnessMapUv:qt&&M(x.sheenRoughnessMap.channel),specularMapUv:de&&M(x.specularMap.channel),specularColorMapUv:se&&M(x.specularColorMap.channel),specularIntensityMapUv:be&&M(x.specularIntensityMap.channel),transmissionMapUv:lt&&M(x.transmissionMap.channel),thicknessMapUv:Yt&&M(x.thicknessMap.channel),alphaMapUv:Nt&&M(x.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(St||k),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,pointsUvs:w.isPoints===!0&&!!N.attributes.uv&&(rt||Nt),fog:!!I,useFog:x.fog===!0,fogExp2:!!I&&I.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:g,reverseDepthBuffer:ct,skinning:w.isSkinnedMesh===!0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:P,morphTextureStride:mt,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:x.dithering,shadowMapEnabled:n.shadowMap.enabled&&S.length>0,shadowMapType:n.shadowMap.type,toneMapping:ot,decodeVideoTexture:rt&&x.map.isVideoTexture===!0&&Te.getTransfer(x.map.colorSpace)===Le,decodeVideoTextureEmissive:tt&&x.emissiveMap.isVideoTexture===!0&&Te.getTransfer(x.emissiveMap.colorSpace)===Le,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===je,flipSided:x.side===un,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:J&&x.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(J&&x.extensions.multiDraw===!0||nt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return vt.vertexUv1s=h.has(1),vt.vertexUv2s=h.has(2),vt.vertexUv3s=h.has(3),h.clear(),vt}function p(x){let y=[];if(x.shaderID?y.push(x.shaderID):(y.push(x.customVertexShaderID),y.push(x.customFragmentShaderID)),x.defines!==void 0)for(let S in x.defines)y.push(S),y.push(x.defines[S]);return x.isRawShaderMaterial===!1&&(b(y,x),_(y,x),y.push(n.outputColorSpace)),y.push(x.customProgramCacheKey),y.join()}function b(x,y){x.push(y.precision),x.push(y.outputColorSpace),x.push(y.envMapMode),x.push(y.envMapCubeUVHeight),x.push(y.mapUv),x.push(y.alphaMapUv),x.push(y.lightMapUv),x.push(y.aoMapUv),x.push(y.bumpMapUv),x.push(y.normalMapUv),x.push(y.displacementMapUv),x.push(y.emissiveMapUv),x.push(y.metalnessMapUv),x.push(y.roughnessMapUv),x.push(y.anisotropyMapUv),x.push(y.clearcoatMapUv),x.push(y.clearcoatNormalMapUv),x.push(y.clearcoatRoughnessMapUv),x.push(y.iridescenceMapUv),x.push(y.iridescenceThicknessMapUv),x.push(y.sheenColorMapUv),x.push(y.sheenRoughnessMapUv),x.push(y.specularMapUv),x.push(y.specularColorMapUv),x.push(y.specularIntensityMapUv),x.push(y.transmissionMapUv),x.push(y.thicknessMapUv),x.push(y.combine),x.push(y.fogExp2),x.push(y.sizeAttenuation),x.push(y.morphTargetsCount),x.push(y.morphAttributeCount),x.push(y.numDirLights),x.push(y.numPointLights),x.push(y.numSpotLights),x.push(y.numSpotLightMaps),x.push(y.numHemiLights),x.push(y.numRectAreaLights),x.push(y.numDirLightShadows),x.push(y.numPointLightShadows),x.push(y.numSpotLightShadows),x.push(y.numSpotLightShadowsWithMaps),x.push(y.numLightProbes),x.push(y.shadowMapType),x.push(y.toneMapping),x.push(y.numClippingPlanes),x.push(y.numClipIntersection),x.push(y.depthPacking)}function _(x,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),y.dispersion&&a.enable(20),y.batchingColor&&a.enable(21),x.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reverseDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),x.push(a.mask)}function v(x){let y=d[x.type],S;if(y){let A=ti[y];S=rh.clone(A.uniforms)}else S=x.uniforms;return S}function L(x,y){let S;for(let A=0,w=u.length;A<w;A++){let I=u[A];if(I.cacheKey===y){S=I,++S.usedTimes;break}}return S===void 0&&(S=new Fy(n,y,x,r),u.push(S)),S}function T(x){if(--x.usedTimes===0){let y=u.indexOf(x);u[y]=u[u.length-1],u.pop(),x.destroy()}}function E(x){l.remove(x)}function R(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:v,acquireProgram:L,releaseProgram:T,releaseShaderCache:E,programs:u,dispose:R}}function Hy(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function $y(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function Cd(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Id(){let n=[],t=0,e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function o(g,f,c,d,M,m){let p=n[t];return p===void 0?(p={id:g.id,object:g,geometry:f,material:c,groupOrder:d,renderOrder:g.renderOrder,z:M,group:m},n[t]=p):(p.id=g.id,p.object=g,p.geometry=f,p.material=c,p.groupOrder=d,p.renderOrder=g.renderOrder,p.z=M,p.group=m),t++,p}function a(g,f,c,d,M,m){let p=o(g,f,c,d,M,m);c.transmission>0?i.push(p):c.transparent===!0?s.push(p):e.push(p)}function l(g,f,c,d,M,m){let p=o(g,f,c,d,M,m);c.transmission>0?i.unshift(p):c.transparent===!0?s.unshift(p):e.unshift(p)}function h(g,f){e.length>1&&e.sort(g||$y),i.length>1&&i.sort(f||Cd),s.length>1&&s.sort(f||Cd)}function u(){for(let g=t,f=n.length;g<f;g++){let c=n[g];if(c.id===null)break;c.id=null,c.object=null,c.geometry=null,c.material=null,c.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:u,sort:h}}function Vy(){let n=new WeakMap;function t(i,s){let r=n.get(i),o;return r===void 0?(o=new Id,n.set(i,[o])):s>=r.length?(o=new Id,r.push(o)):o=r[s],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function Gy(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new $,color:new re};break;case"SpotLight":e={position:new $,direction:new $,color:new re,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new $,color:new re,distance:0,decay:0};break;case"HemisphereLight":e={direction:new $,skyColor:new re,groundColor:new re};break;case"RectAreaLight":e={color:new re,position:new $,halfWidth:new $,halfHeight:new $};break}return n[t.id]=e,e}}}function Wy(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Bt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Bt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Bt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}var Xy=0;function qy(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function Yy(n){let t=new Gy,e=Wy(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new $);let s=new $,r=new we,o=new we;function a(h){let u=0,g=0,f=0;for(let x=0;x<9;x++)i.probe[x].set(0,0,0);let c=0,d=0,M=0,m=0,p=0,b=0,_=0,v=0,L=0,T=0,E=0;h.sort(qy);for(let x=0,y=h.length;x<y;x++){let S=h[x],A=S.color,w=S.intensity,I=S.distance,N=S.shadow&&S.shadow.map?S.shadow.map.texture:null;if(S.isAmbientLight)u+=A.r*w,g+=A.g*w,f+=A.b*w;else if(S.isLightProbe){for(let O=0;O<9;O++)i.probe[O].addScaledVector(S.sh.coefficients[O],w);E++}else if(S.isDirectionalLight){let O=t.get(S);if(O.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let z=S.shadow,F=e.get(S);F.shadowIntensity=z.intensity,F.shadowBias=z.bias,F.shadowNormalBias=z.normalBias,F.shadowRadius=z.radius,F.shadowMapSize=z.mapSize,i.directionalShadow[c]=F,i.directionalShadowMap[c]=N,i.directionalShadowMatrix[c]=S.shadow.matrix,b++}i.directional[c]=O,c++}else if(S.isSpotLight){let O=t.get(S);O.position.setFromMatrixPosition(S.matrixWorld),O.color.copy(A).multiplyScalar(w),O.distance=I,O.coneCos=Math.cos(S.angle),O.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),O.decay=S.decay,i.spot[M]=O;let z=S.shadow;if(S.map&&(i.spotLightMap[L]=S.map,L++,z.updateMatrices(S),S.castShadow&&T++),i.spotLightMatrix[M]=z.matrix,S.castShadow){let F=e.get(S);F.shadowIntensity=z.intensity,F.shadowBias=z.bias,F.shadowNormalBias=z.normalBias,F.shadowRadius=z.radius,F.shadowMapSize=z.mapSize,i.spotShadow[M]=F,i.spotShadowMap[M]=N,v++}M++}else if(S.isRectAreaLight){let O=t.get(S);O.color.copy(A).multiplyScalar(w),O.halfWidth.set(S.width*.5,0,0),O.halfHeight.set(0,S.height*.5,0),i.rectArea[m]=O,m++}else if(S.isPointLight){let O=t.get(S);if(O.color.copy(S.color).multiplyScalar(S.intensity),O.distance=S.distance,O.decay=S.decay,S.castShadow){let z=S.shadow,F=e.get(S);F.shadowIntensity=z.intensity,F.shadowBias=z.bias,F.shadowNormalBias=z.normalBias,F.shadowRadius=z.radius,F.shadowMapSize=z.mapSize,F.shadowCameraNear=z.camera.near,F.shadowCameraFar=z.camera.far,i.pointShadow[d]=F,i.pointShadowMap[d]=N,i.pointShadowMatrix[d]=S.shadow.matrix,_++}i.point[d]=O,d++}else if(S.isHemisphereLight){let O=t.get(S);O.skyColor.copy(S.color).multiplyScalar(w),O.groundColor.copy(S.groundColor).multiplyScalar(w),i.hemi[p]=O,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Zt.LTC_FLOAT_1,i.rectAreaLTC2=Zt.LTC_FLOAT_2):(i.rectAreaLTC1=Zt.LTC_HALF_1,i.rectAreaLTC2=Zt.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=g,i.ambient[2]=f;let R=i.hash;(R.directionalLength!==c||R.pointLength!==d||R.spotLength!==M||R.rectAreaLength!==m||R.hemiLength!==p||R.numDirectionalShadows!==b||R.numPointShadows!==_||R.numSpotShadows!==v||R.numSpotMaps!==L||R.numLightProbes!==E)&&(i.directional.length=c,i.spot.length=M,i.rectArea.length=m,i.point.length=d,i.hemi.length=p,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=_,i.pointShadowMap.length=_,i.spotShadow.length=v,i.spotShadowMap.length=v,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=_,i.spotLightMatrix.length=v+L-T,i.spotLightMap.length=L,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=E,R.directionalLength=c,R.pointLength=d,R.spotLength=M,R.rectAreaLength=m,R.hemiLength=p,R.numDirectionalShadows=b,R.numPointShadows=_,R.numSpotShadows=v,R.numSpotMaps=L,R.numLightProbes=E,i.version=Xy++)}function l(h,u){let g=0,f=0,c=0,d=0,M=0,m=u.matrixWorldInverse;for(let p=0,b=h.length;p<b;p++){let _=h[p];if(_.isDirectionalLight){let v=i.directional[g];v.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),g++}else if(_.isSpotLight){let v=i.spot[c];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),c++}else if(_.isRectAreaLight){let v=i.rectArea[d];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(m),o.identity(),r.copy(_.matrixWorld),r.premultiply(m),o.extractRotation(r),v.halfWidth.set(_.width*.5,0,0),v.halfHeight.set(0,_.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),d++}else if(_.isPointLight){let v=i.point[f];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(m),f++}else if(_.isHemisphereLight){let v=i.hemi[M];v.direction.setFromMatrixPosition(_.matrixWorld),v.direction.transformDirection(m),M++}}}return{setup:a,setupView:l,state:i}}function Pd(n){let t=new Yy(n),e=[],i=[];function s(u){h.camera=u,e.length=0,i.length=0}function r(u){e.push(u)}function o(u){i.push(u)}function a(){t.setup(e)}function l(u){t.setupView(e,u)}let h={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:h,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function Zy(n){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new Pd(n),t.set(s,[a])):r>=o.length?(a=new Pd(n),o.push(a)):a=o[r],a}function i(){t=new WeakMap}return{get:e,dispose:i}}var wc=class extends Mi{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=$f,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Ec=class extends Mi{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},Jy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ky=`uniform sampler2D shadow_pass;
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
}`;function jy(n,t,e){let i=new Lr,s=new Bt,r=new Bt,o=new Ze,a=new wc({depthPacking:Vf}),l=new Ec,h={},u=e.maxTextureSize,g={[Fi]:un,[un]:Fi,[je]:je},f=new wn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Bt},radius:{value:4}},vertexShader:Jy,fragmentShader:Ky}),c=f.clone();c.defines.HORIZONTAL_PASS=1;let d=new De;d.setAttribute("position",new $e(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let M=new Ne(d,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=qd;let p=this.type;this.render=function(T,E,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;let x=n.getRenderTarget(),y=n.getActiveCubeFace(),S=n.getActiveMipmapLevel(),A=n.state;A.setBlending(Ni),A.buffers.color.setClear(1,1,1,1),A.buffers.depth.setTest(!0),A.setScissorTest(!1);let w=p!==pi&&this.type===pi,I=p===pi&&this.type!==pi;for(let N=0,O=T.length;N<O;N++){let z=T[N],F=z.shadow;if(F===void 0){console.warn("THREE.WebGLShadowMap:",z,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;s.copy(F.mapSize);let X=F.getFrameExtents();if(s.multiply(X),r.copy(F.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/X.x),s.x=r.x*X.x,F.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/X.y),s.y=r.y*X.y,F.mapSize.y=r.y)),F.map===null||w===!0||I===!0){let P=this.type!==pi?{minFilter:Sn,magFilter:Sn}:{};F.map!==null&&F.map.dispose(),F.map=new vi(s.x,s.y,P),F.map.texture.name=z.name+".shadowMap",F.camera.updateProjectionMatrix()}n.setRenderTarget(F.map),n.clear();let it=F.getViewportCount();for(let P=0;P<it;P++){let mt=F.getViewport(P);o.set(r.x*mt.x,r.y*mt.y,r.x*mt.z,r.y*mt.w),A.viewport(o),F.updateMatrices(z,P),i=F.getFrustum(),v(E,R,F.camera,z,this.type)}F.isPointLightShadow!==!0&&this.type===pi&&b(F,R),F.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(x,y,S)};function b(T,E){let R=t.update(M);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,c.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,c.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new vi(s.x,s.y)),f.uniforms.shadow_pass.value=T.map.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,n.setRenderTarget(T.mapPass),n.clear(),n.renderBufferDirect(E,null,R,f,M,null),c.uniforms.shadow_pass.value=T.mapPass.texture,c.uniforms.resolution.value=T.mapSize,c.uniforms.radius.value=T.radius,n.setRenderTarget(T.map),n.clear(),n.renderBufferDirect(E,null,R,c,M,null)}function _(T,E,R,x){let y=null,S=R.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(S!==void 0)y=S;else if(y=R.isPointLight===!0?l:a,n.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){let A=y.uuid,w=E.uuid,I=h[A];I===void 0&&(I={},h[A]=I);let N=I[w];N===void 0&&(N=y.clone(),I[w]=N,E.addEventListener("dispose",L)),y=N}if(y.visible=E.visible,y.wireframe=E.wireframe,x===pi?y.side=E.shadowSide!==null?E.shadowSide:E.side:y.side=E.shadowSide!==null?E.shadowSide:g[E.side],y.alphaMap=E.alphaMap,y.alphaTest=E.alphaTest,y.map=E.map,y.clipShadows=E.clipShadows,y.clippingPlanes=E.clippingPlanes,y.clipIntersection=E.clipIntersection,y.displacementMap=E.displacementMap,y.displacementScale=E.displacementScale,y.displacementBias=E.displacementBias,y.wireframeLinewidth=E.wireframeLinewidth,y.linewidth=E.linewidth,R.isPointLight===!0&&y.isMeshDistanceMaterial===!0){let A=n.properties.get(y);A.light=R}return y}function v(T,E,R,x,y){if(T.visible===!1)return;if(T.layers.test(E.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&y===pi)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,T.matrixWorld);let w=t.update(T),I=T.material;if(Array.isArray(I)){let N=w.groups;for(let O=0,z=N.length;O<z;O++){let F=N[O],X=I[F.materialIndex];if(X&&X.visible){let it=_(T,X,x,y);T.onBeforeShadow(n,T,E,R,w,it,F),n.renderBufferDirect(R,null,w,it,T,F),T.onAfterShadow(n,T,E,R,w,it,F)}}}else if(I.visible){let N=_(T,I,x,y);T.onBeforeShadow(n,T,E,R,w,N,null),n.renderBufferDirect(R,null,w,N,T,null),T.onAfterShadow(n,T,E,R,w,N,null)}}let A=T.children;for(let w=0,I=A.length;w<I;w++)v(A[w],E,R,x,y)}function L(T){T.target.removeEventListener("dispose",L);for(let R in h){let x=h[R],y=T.target.uuid;y in x&&(x[y].dispose(),delete x[y])}}}var Qy={[Cl]:Il,[Pl]:Dl,[Ll]:Ul,[Ws]:kl,[Il]:Cl,[Dl]:Pl,[Ul]:Ll,[kl]:Ws};function tx(n,t){function e(){let lt=!1,Yt=new Ze,Tt=null,Nt=new Ze(0,0,0,0);return{setMask:function(C){Tt!==C&&!lt&&(n.colorMask(C,C,C,C),Tt=C)},setLocked:function(C){lt=C},setClear:function(C,V,J,ot,vt){vt===!0&&(C*=ot,V*=ot,J*=ot),Yt.set(C,V,J,ot),Nt.equals(Yt)===!1&&(n.clearColor(C,V,J,ot),Nt.copy(Yt))},reset:function(){lt=!1,Tt=null,Nt.set(-1,0,0,0)}}}function i(){let lt=!1,Yt=!1,Tt=null,Nt=null,C=null;return{setReversed:function(V){if(Yt!==V){let J=t.get("EXT_clip_control");Yt?J.clipControlEXT(J.LOWER_LEFT_EXT,J.ZERO_TO_ONE_EXT):J.clipControlEXT(J.LOWER_LEFT_EXT,J.NEGATIVE_ONE_TO_ONE_EXT);let ot=C;C=null,this.setClear(ot)}Yt=V},getReversed:function(){return Yt},setTest:function(V){V?G(n.DEPTH_TEST):ct(n.DEPTH_TEST)},setMask:function(V){Tt!==V&&!lt&&(n.depthMask(V),Tt=V)},setFunc:function(V){if(Yt&&(V=Qy[V]),Nt!==V){switch(V){case Cl:n.depthFunc(n.NEVER);break;case Il:n.depthFunc(n.ALWAYS);break;case Pl:n.depthFunc(n.LESS);break;case Ws:n.depthFunc(n.LEQUAL);break;case Ll:n.depthFunc(n.EQUAL);break;case kl:n.depthFunc(n.GEQUAL);break;case Dl:n.depthFunc(n.GREATER);break;case Ul:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Nt=V}},setLocked:function(V){lt=V},setClear:function(V){C!==V&&(Yt&&(V=1-V),n.clearDepth(V),C=V)},reset:function(){lt=!1,Tt=null,Nt=null,C=null,Yt=!1}}}function s(){let lt=!1,Yt=null,Tt=null,Nt=null,C=null,V=null,J=null,ot=null,vt=null;return{setTest:function(K){lt||(K?G(n.STENCIL_TEST):ct(n.STENCIL_TEST))},setMask:function(K){Yt!==K&&!lt&&(n.stencilMask(K),Yt=K)},setFunc:function(K,Et,Gt){(Tt!==K||Nt!==Et||C!==Gt)&&(n.stencilFunc(K,Et,Gt),Tt=K,Nt=Et,C=Gt)},setOp:function(K,Et,Gt){(V!==K||J!==Et||ot!==Gt)&&(n.stencilOp(K,Et,Gt),V=K,J=Et,ot=Gt)},setLocked:function(K){lt=K},setClear:function(K){vt!==K&&(n.clearStencil(K),vt=K)},reset:function(){lt=!1,Yt=null,Tt=null,Nt=null,C=null,V=null,J=null,ot=null,vt=null}}}let r=new e,o=new i,a=new s,l=new WeakMap,h=new WeakMap,u={},g={},f=new WeakMap,c=[],d=null,M=!1,m=null,p=null,b=null,_=null,v=null,L=null,T=null,E=new re(0,0,0),R=0,x=!1,y=null,S=null,A=null,w=null,I=null,N=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),O=!1,z=0,F=n.getParameter(n.VERSION);F.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(F)[1]),O=z>=1):F.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(F)[1]),O=z>=2);let X=null,it={},P=n.getParameter(n.SCISSOR_BOX),mt=n.getParameter(n.VIEWPORT),Ot=new Ze().fromArray(P),U=new Ze().fromArray(mt);function Y(lt,Yt,Tt,Nt){let C=new Uint8Array(4),V=n.createTexture();n.bindTexture(lt,V),n.texParameteri(lt,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(lt,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let J=0;J<Tt;J++)lt===n.TEXTURE_3D||lt===n.TEXTURE_2D_ARRAY?n.texImage3D(Yt,0,n.RGBA,1,1,Nt,0,n.RGBA,n.UNSIGNED_BYTE,C):n.texImage2D(Yt+J,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,C);return V}let j={};j[n.TEXTURE_2D]=Y(n.TEXTURE_2D,n.TEXTURE_2D,1),j[n.TEXTURE_CUBE_MAP]=Y(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),j[n.TEXTURE_2D_ARRAY]=Y(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),j[n.TEXTURE_3D]=Y(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),G(n.DEPTH_TEST),o.setFunc(Ws),_t(!1),St(kh),G(n.CULL_FACE),H(Ni);function G(lt){u[lt]!==!0&&(n.enable(lt),u[lt]=!0)}function ct(lt){u[lt]!==!1&&(n.disable(lt),u[lt]=!1)}function at(lt,Yt){return g[lt]!==Yt?(n.bindFramebuffer(lt,Yt),g[lt]=Yt,lt===n.DRAW_FRAMEBUFFER&&(g[n.FRAMEBUFFER]=Yt),lt===n.FRAMEBUFFER&&(g[n.DRAW_FRAMEBUFFER]=Yt),!0):!1}function nt(lt,Yt){let Tt=c,Nt=!1;if(lt){Tt=f.get(Yt),Tt===void 0&&(Tt=[],f.set(Yt,Tt));let C=lt.textures;if(Tt.length!==C.length||Tt[0]!==n.COLOR_ATTACHMENT0){for(let V=0,J=C.length;V<J;V++)Tt[V]=n.COLOR_ATTACHMENT0+V;Tt.length=C.length,Nt=!0}}else Tt[0]!==n.BACK&&(Tt[0]=n.BACK,Nt=!0);Nt&&n.drawBuffers(Tt)}function rt(lt){return d!==lt?(n.useProgram(lt),d=lt,!0):!1}let W={[is]:n.FUNC_ADD,[mf]:n.FUNC_SUBTRACT,[gf]:n.FUNC_REVERSE_SUBTRACT};W[yf]=n.MIN,W[xf]=n.MAX;let dt={[vf]:n.ZERO,[_f]:n.ONE,[Mf]:n.SRC_COLOR,[Al]:n.SRC_ALPHA,[Af]:n.SRC_ALPHA_SATURATE,[Ef]:n.DST_COLOR,[Sf]:n.DST_ALPHA,[bf]:n.ONE_MINUS_SRC_COLOR,[Rl]:n.ONE_MINUS_SRC_ALPHA,[Tf]:n.ONE_MINUS_DST_COLOR,[wf]:n.ONE_MINUS_DST_ALPHA,[Rf]:n.CONSTANT_COLOR,[Cf]:n.ONE_MINUS_CONSTANT_COLOR,[If]:n.CONSTANT_ALPHA,[Pf]:n.ONE_MINUS_CONSTANT_ALPHA};function H(lt,Yt,Tt,Nt,C,V,J,ot,vt,K){if(lt===Ni){M===!0&&(ct(n.BLEND),M=!1);return}if(M===!1&&(G(n.BLEND),M=!0),lt!==pf){if(lt!==m||K!==x){if((p!==is||v!==is)&&(n.blendEquation(n.FUNC_ADD),p=is,v=is),K)switch(lt){case Hs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Dh:n.blendFunc(n.ONE,n.ONE);break;case Uh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Nh:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",lt);break}else switch(lt){case Hs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Dh:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Uh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Nh:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",lt);break}b=null,_=null,L=null,T=null,E.set(0,0,0),R=0,m=lt,x=K}return}C=C||Yt,V=V||Tt,J=J||Nt,(Yt!==p||C!==v)&&(n.blendEquationSeparate(W[Yt],W[C]),p=Yt,v=C),(Tt!==b||Nt!==_||V!==L||J!==T)&&(n.blendFuncSeparate(dt[Tt],dt[Nt],dt[V],dt[J]),b=Tt,_=Nt,L=V,T=J),(ot.equals(E)===!1||vt!==R)&&(n.blendColor(ot.r,ot.g,ot.b,vt),E.copy(ot),R=vt),m=lt,x=!1}function Ut(lt,Yt){lt.side===je?ct(n.CULL_FACE):G(n.CULL_FACE);let Tt=lt.side===un;Yt&&(Tt=!Tt),_t(Tt),lt.blending===Hs&&lt.transparent===!1?H(Ni):H(lt.blending,lt.blendEquation,lt.blendSrc,lt.blendDst,lt.blendEquationAlpha,lt.blendSrcAlpha,lt.blendDstAlpha,lt.blendColor,lt.blendAlpha,lt.premultipliedAlpha),o.setFunc(lt.depthFunc),o.setTest(lt.depthTest),o.setMask(lt.depthWrite),r.setMask(lt.colorWrite);let Nt=lt.stencilWrite;a.setTest(Nt),Nt&&(a.setMask(lt.stencilWriteMask),a.setFunc(lt.stencilFunc,lt.stencilRef,lt.stencilFuncMask),a.setOp(lt.stencilFail,lt.stencilZFail,lt.stencilZPass)),tt(lt.polygonOffset,lt.polygonOffsetFactor,lt.polygonOffsetUnits),lt.alphaToCoverage===!0?G(n.SAMPLE_ALPHA_TO_COVERAGE):ct(n.SAMPLE_ALPHA_TO_COVERAGE)}function _t(lt){y!==lt&&(lt?n.frontFace(n.CW):n.frontFace(n.CCW),y=lt)}function St(lt){lt!==uf?(G(n.CULL_FACE),lt!==S&&(lt===kh?n.cullFace(n.BACK):lt===ff?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ct(n.CULL_FACE),S=lt}function It(lt){lt!==A&&(O&&n.lineWidth(lt),A=lt)}function tt(lt,Yt,Tt){lt?(G(n.POLYGON_OFFSET_FILL),(w!==Yt||I!==Tt)&&(n.polygonOffset(Yt,Tt),w=Yt,I=Tt)):ct(n.POLYGON_OFFSET_FILL)}function $t(lt){lt?G(n.SCISSOR_TEST):ct(n.SCISSOR_TEST)}function B(lt){lt===void 0&&(lt=n.TEXTURE0+N-1),X!==lt&&(n.activeTexture(lt),X=lt)}function k(lt,Yt,Tt){Tt===void 0&&(X===null?Tt=n.TEXTURE0+N-1:Tt=X);let Nt=it[Tt];Nt===void 0&&(Nt={type:void 0,texture:void 0},it[Tt]=Nt),(Nt.type!==lt||Nt.texture!==Yt)&&(X!==Tt&&(n.activeTexture(Tt),X=Tt),n.bindTexture(lt,Yt||j[lt]),Nt.type=lt,Nt.texture=Yt)}function yt(){let lt=it[X];lt!==void 0&&lt.type!==void 0&&(n.bindTexture(lt.type,null),lt.type=void 0,lt.texture=void 0)}function Ct(){try{n.compressedTexImage2D.apply(n,arguments)}catch(lt){console.error("THREE.WebGLState:",lt)}}function Lt(){try{n.compressedTexImage3D.apply(n,arguments)}catch(lt){console.error("THREE.WebGLState:",lt)}}function Z(){try{n.texSubImage2D.apply(n,arguments)}catch(lt){console.error("THREE.WebGLState:",lt)}}function ft(){try{n.texSubImage3D.apply(n,arguments)}catch(lt){console.error("THREE.WebGLState:",lt)}}function ht(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(lt){console.error("THREE.WebGLState:",lt)}}function Mt(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(lt){console.error("THREE.WebGLState:",lt)}}function wt(){try{n.texStorage2D.apply(n,arguments)}catch(lt){console.error("THREE.WebGLState:",lt)}}function Rt(){try{n.texStorage3D.apply(n,arguments)}catch(lt){console.error("THREE.WebGLState:",lt)}}function Pt(){try{n.texImage2D.apply(n,arguments)}catch(lt){console.error("THREE.WebGLState:",lt)}}function Xt(){try{n.texImage3D.apply(n,arguments)}catch(lt){console.error("THREE.WebGLState:",lt)}}function jt(lt){Ot.equals(lt)===!1&&(n.scissor(lt.x,lt.y,lt.z,lt.w),Ot.copy(lt))}function qt(lt){U.equals(lt)===!1&&(n.viewport(lt.x,lt.y,lt.z,lt.w),U.copy(lt))}function de(lt,Yt){let Tt=h.get(Yt);Tt===void 0&&(Tt=new WeakMap,h.set(Yt,Tt));let Nt=Tt.get(lt);Nt===void 0&&(Nt=n.getUniformBlockIndex(Yt,lt.name),Tt.set(lt,Nt))}function se(lt,Yt){let Nt=h.get(Yt).get(lt);l.get(Yt)!==Nt&&(n.uniformBlockBinding(Yt,Nt,lt.__bindingPointIndex),l.set(Yt,Nt))}function be(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},X=null,it={},g={},f=new WeakMap,c=[],d=null,M=!1,m=null,p=null,b=null,_=null,v=null,L=null,T=null,E=new re(0,0,0),R=0,x=!1,y=null,S=null,A=null,w=null,I=null,Ot.set(0,0,n.canvas.width,n.canvas.height),U.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:G,disable:ct,bindFramebuffer:at,drawBuffers:nt,useProgram:rt,setBlending:H,setMaterial:Ut,setFlipSided:_t,setCullFace:St,setLineWidth:It,setPolygonOffset:tt,setScissorTest:$t,activeTexture:B,bindTexture:k,unbindTexture:yt,compressedTexImage2D:Ct,compressedTexImage3D:Lt,texImage2D:Pt,texImage3D:Xt,updateUBOMapping:de,uniformBlockBinding:se,texStorage2D:wt,texStorage3D:Rt,texSubImage2D:Z,texSubImage3D:ft,compressedTexSubImage2D:ht,compressedTexSubImage3D:Mt,scissor:jt,viewport:qt,reset:be}}function Ld(n,t,e,i){let s=ex(i);switch(e){case Qd:return n*t;case eu:return n*t;case nu:return n*t*2;case th:return n*t/s.components*s.byteLength;case eh:return n*t/s.components*s.byteLength;case iu:return n*t*2/s.components*s.byteLength;case nh:return n*t*2/s.components*s.byteLength;case tu:return n*t*3/s.components*s.byteLength;case Ln:return n*t*4/s.components*s.byteLength;case ih:return n*t*4/s.components*s.byteLength;case Bo:case Ho:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case $o:case Vo:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Bl:case $l:return Math.max(n,16)*Math.max(t,8)/4;case zl:case Hl:return Math.max(n,8)*Math.max(t,8)/2;case Vl:case Gl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Wl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Xl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case ql:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case Yl:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case Zl:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case Jl:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case Kl:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case jl:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case Ql:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case tc:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case ec:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case nc:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case ic:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case sc:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case rc:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case Go:case oc:case ac:return Math.ceil(n/4)*Math.ceil(t/4)*16;case su:case lc:return Math.ceil(n/4)*Math.ceil(t/4)*8;case cc:case hc:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function ex(n){switch(n){case xi:case Jd:return{byteLength:1,components:1};case Ir:case Kd:case Gr:return{byteLength:2,components:1};case jc:case Qc:return{byteLength:2,components:4};case ls:case Kc:case ni:return{byteLength:4,components:1};case jd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function nx(n,t,e,i,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new Bt,u=new WeakMap,g,f=new WeakMap,c=!1;try{c=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function d(B,k){return c?new OffscreenCanvas(B,k):qo("canvas")}function M(B,k,yt){let Ct=1,Lt=$t(B);if((Lt.width>yt||Lt.height>yt)&&(Ct=yt/Math.max(Lt.width,Lt.height)),Ct<1)if(typeof HTMLImageElement<"u"&&B instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&B instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&B instanceof ImageBitmap||typeof VideoFrame<"u"&&B instanceof VideoFrame){let Z=Math.floor(Ct*Lt.width),ft=Math.floor(Ct*Lt.height);g===void 0&&(g=d(Z,ft));let ht=k?d(Z,ft):g;return ht.width=Z,ht.height=ft,ht.getContext("2d").drawImage(B,0,0,Z,ft),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Lt.width+"x"+Lt.height+") to ("+Z+"x"+ft+")."),ht}else return"data"in B&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Lt.width+"x"+Lt.height+")."),B;return B}function m(B){return B.generateMipmaps}function p(B){n.generateMipmap(B)}function b(B){return B.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:B.isWebGL3DRenderTarget?n.TEXTURE_3D:B.isWebGLArrayRenderTarget||B.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function _(B,k,yt,Ct,Lt=!1){if(B!==null){if(n[B]!==void 0)return n[B];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+B+"'")}let Z=k;if(k===n.RED&&(yt===n.FLOAT&&(Z=n.R32F),yt===n.HALF_FLOAT&&(Z=n.R16F),yt===n.UNSIGNED_BYTE&&(Z=n.R8)),k===n.RED_INTEGER&&(yt===n.UNSIGNED_BYTE&&(Z=n.R8UI),yt===n.UNSIGNED_SHORT&&(Z=n.R16UI),yt===n.UNSIGNED_INT&&(Z=n.R32UI),yt===n.BYTE&&(Z=n.R8I),yt===n.SHORT&&(Z=n.R16I),yt===n.INT&&(Z=n.R32I)),k===n.RG&&(yt===n.FLOAT&&(Z=n.RG32F),yt===n.HALF_FLOAT&&(Z=n.RG16F),yt===n.UNSIGNED_BYTE&&(Z=n.RG8)),k===n.RG_INTEGER&&(yt===n.UNSIGNED_BYTE&&(Z=n.RG8UI),yt===n.UNSIGNED_SHORT&&(Z=n.RG16UI),yt===n.UNSIGNED_INT&&(Z=n.RG32UI),yt===n.BYTE&&(Z=n.RG8I),yt===n.SHORT&&(Z=n.RG16I),yt===n.INT&&(Z=n.RG32I)),k===n.RGB_INTEGER&&(yt===n.UNSIGNED_BYTE&&(Z=n.RGB8UI),yt===n.UNSIGNED_SHORT&&(Z=n.RGB16UI),yt===n.UNSIGNED_INT&&(Z=n.RGB32UI),yt===n.BYTE&&(Z=n.RGB8I),yt===n.SHORT&&(Z=n.RGB16I),yt===n.INT&&(Z=n.RGB32I)),k===n.RGBA_INTEGER&&(yt===n.UNSIGNED_BYTE&&(Z=n.RGBA8UI),yt===n.UNSIGNED_SHORT&&(Z=n.RGBA16UI),yt===n.UNSIGNED_INT&&(Z=n.RGBA32UI),yt===n.BYTE&&(Z=n.RGBA8I),yt===n.SHORT&&(Z=n.RGBA16I),yt===n.INT&&(Z=n.RGBA32I)),k===n.RGB&&yt===n.UNSIGNED_INT_5_9_9_9_REV&&(Z=n.RGB9_E5),k===n.RGBA){let ft=Lt?Ra:Te.getTransfer(Ct);yt===n.FLOAT&&(Z=n.RGBA32F),yt===n.HALF_FLOAT&&(Z=n.RGBA16F),yt===n.UNSIGNED_BYTE&&(Z=ft===Le?n.SRGB8_ALPHA8:n.RGBA8),yt===n.UNSIGNED_SHORT_4_4_4_4&&(Z=n.RGBA4),yt===n.UNSIGNED_SHORT_5_5_5_1&&(Z=n.RGB5_A1)}return(Z===n.R16F||Z===n.R32F||Z===n.RG16F||Z===n.RG32F||Z===n.RGBA16F||Z===n.RGBA32F)&&t.get("EXT_color_buffer_float"),Z}function v(B,k){let yt;return B?k===null||k===ls||k===Ys?yt=n.DEPTH24_STENCIL8:k===ni?yt=n.DEPTH32F_STENCIL8:k===Ir&&(yt=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):k===null||k===ls||k===Ys?yt=n.DEPTH_COMPONENT24:k===ni?yt=n.DEPTH_COMPONENT32F:k===Ir&&(yt=n.DEPTH_COMPONENT16),yt}function L(B,k){return m(B)===!0||B.isFramebufferTexture&&B.minFilter!==Sn&&B.minFilter!==ei?Math.log2(Math.max(k.width,k.height))+1:B.mipmaps!==void 0&&B.mipmaps.length>0?B.mipmaps.length:B.isCompressedTexture&&Array.isArray(B.image)?k.mipmaps.length:1}function T(B){let k=B.target;k.removeEventListener("dispose",T),R(k),k.isVideoTexture&&u.delete(k)}function E(B){let k=B.target;k.removeEventListener("dispose",E),y(k)}function R(B){let k=i.get(B);if(k.__webglInit===void 0)return;let yt=B.source,Ct=f.get(yt);if(Ct){let Lt=Ct[k.__cacheKey];Lt.usedTimes--,Lt.usedTimes===0&&x(B),Object.keys(Ct).length===0&&f.delete(yt)}i.remove(B)}function x(B){let k=i.get(B);n.deleteTexture(k.__webglTexture);let yt=B.source,Ct=f.get(yt);delete Ct[k.__cacheKey],o.memory.textures--}function y(B){let k=i.get(B);if(B.depthTexture&&(B.depthTexture.dispose(),i.remove(B.depthTexture)),B.isWebGLCubeRenderTarget)for(let Ct=0;Ct<6;Ct++){if(Array.isArray(k.__webglFramebuffer[Ct]))for(let Lt=0;Lt<k.__webglFramebuffer[Ct].length;Lt++)n.deleteFramebuffer(k.__webglFramebuffer[Ct][Lt]);else n.deleteFramebuffer(k.__webglFramebuffer[Ct]);k.__webglDepthbuffer&&n.deleteRenderbuffer(k.__webglDepthbuffer[Ct])}else{if(Array.isArray(k.__webglFramebuffer))for(let Ct=0;Ct<k.__webglFramebuffer.length;Ct++)n.deleteFramebuffer(k.__webglFramebuffer[Ct]);else n.deleteFramebuffer(k.__webglFramebuffer);if(k.__webglDepthbuffer&&n.deleteRenderbuffer(k.__webglDepthbuffer),k.__webglMultisampledFramebuffer&&n.deleteFramebuffer(k.__webglMultisampledFramebuffer),k.__webglColorRenderbuffer)for(let Ct=0;Ct<k.__webglColorRenderbuffer.length;Ct++)k.__webglColorRenderbuffer[Ct]&&n.deleteRenderbuffer(k.__webglColorRenderbuffer[Ct]);k.__webglDepthRenderbuffer&&n.deleteRenderbuffer(k.__webglDepthRenderbuffer)}let yt=B.textures;for(let Ct=0,Lt=yt.length;Ct<Lt;Ct++){let Z=i.get(yt[Ct]);Z.__webglTexture&&(n.deleteTexture(Z.__webglTexture),o.memory.textures--),i.remove(yt[Ct])}i.remove(B)}let S=0;function A(){S=0}function w(){let B=S;return B>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+B+" texture units while this GPU supports only "+s.maxTextures),S+=1,B}function I(B){let k=[];return k.push(B.wrapS),k.push(B.wrapT),k.push(B.wrapR||0),k.push(B.magFilter),k.push(B.minFilter),k.push(B.anisotropy),k.push(B.internalFormat),k.push(B.format),k.push(B.type),k.push(B.generateMipmaps),k.push(B.premultiplyAlpha),k.push(B.flipY),k.push(B.unpackAlignment),k.push(B.colorSpace),k.join()}function N(B,k){let yt=i.get(B);if(B.isVideoTexture&&It(B),B.isRenderTargetTexture===!1&&B.version>0&&yt.__version!==B.version){let Ct=B.image;if(Ct===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Ct.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{U(yt,B,k);return}}e.bindTexture(n.TEXTURE_2D,yt.__webglTexture,n.TEXTURE0+k)}function O(B,k){let yt=i.get(B);if(B.version>0&&yt.__version!==B.version){U(yt,B,k);return}e.bindTexture(n.TEXTURE_2D_ARRAY,yt.__webglTexture,n.TEXTURE0+k)}function z(B,k){let yt=i.get(B);if(B.version>0&&yt.__version!==B.version){U(yt,B,k);return}e.bindTexture(n.TEXTURE_3D,yt.__webglTexture,n.TEXTURE0+k)}function F(B,k){let yt=i.get(B);if(B.version>0&&yt.__version!==B.version){Y(yt,B,k);return}e.bindTexture(n.TEXTURE_CUBE_MAP,yt.__webglTexture,n.TEXTURE0+k)}let X={[as]:n.REPEAT,[rs]:n.CLAMP_TO_EDGE,[Fl]:n.MIRRORED_REPEAT},it={[Sn]:n.NEAREST,[Hf]:n.NEAREST_MIPMAP_NEAREST,[lo]:n.NEAREST_MIPMAP_LINEAR,[ei]:n.LINEAR,[qa]:n.LINEAR_MIPMAP_NEAREST,[os]:n.LINEAR_MIPMAP_LINEAR},P={[Wf]:n.NEVER,[Kf]:n.ALWAYS,[Xf]:n.LESS,[ou]:n.LEQUAL,[qf]:n.EQUAL,[Jf]:n.GEQUAL,[Yf]:n.GREATER,[Zf]:n.NOTEQUAL};function mt(B,k){if(k.type===ni&&t.has("OES_texture_float_linear")===!1&&(k.magFilter===ei||k.magFilter===qa||k.magFilter===lo||k.magFilter===os||k.minFilter===ei||k.minFilter===qa||k.minFilter===lo||k.minFilter===os)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(B,n.TEXTURE_WRAP_S,X[k.wrapS]),n.texParameteri(B,n.TEXTURE_WRAP_T,X[k.wrapT]),(B===n.TEXTURE_3D||B===n.TEXTURE_2D_ARRAY)&&n.texParameteri(B,n.TEXTURE_WRAP_R,X[k.wrapR]),n.texParameteri(B,n.TEXTURE_MAG_FILTER,it[k.magFilter]),n.texParameteri(B,n.TEXTURE_MIN_FILTER,it[k.minFilter]),k.compareFunction&&(n.texParameteri(B,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(B,n.TEXTURE_COMPARE_FUNC,P[k.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(k.magFilter===Sn||k.minFilter!==lo&&k.minFilter!==os||k.type===ni&&t.has("OES_texture_float_linear")===!1)return;if(k.anisotropy>1||i.get(k).__currentAnisotropy){let yt=t.get("EXT_texture_filter_anisotropic");n.texParameterf(B,yt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(k.anisotropy,s.getMaxAnisotropy())),i.get(k).__currentAnisotropy=k.anisotropy}}}function Ot(B,k){let yt=!1;B.__webglInit===void 0&&(B.__webglInit=!0,k.addEventListener("dispose",T));let Ct=k.source,Lt=f.get(Ct);Lt===void 0&&(Lt={},f.set(Ct,Lt));let Z=I(k);if(Z!==B.__cacheKey){Lt[Z]===void 0&&(Lt[Z]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,yt=!0),Lt[Z].usedTimes++;let ft=Lt[B.__cacheKey];ft!==void 0&&(Lt[B.__cacheKey].usedTimes--,ft.usedTimes===0&&x(k)),B.__cacheKey=Z,B.__webglTexture=Lt[Z].texture}return yt}function U(B,k,yt){let Ct=n.TEXTURE_2D;(k.isDataArrayTexture||k.isCompressedArrayTexture)&&(Ct=n.TEXTURE_2D_ARRAY),k.isData3DTexture&&(Ct=n.TEXTURE_3D);let Lt=Ot(B,k),Z=k.source;e.bindTexture(Ct,B.__webglTexture,n.TEXTURE0+yt);let ft=i.get(Z);if(Z.version!==ft.__version||Lt===!0){e.activeTexture(n.TEXTURE0+yt);let ht=Te.getPrimaries(Te.workingColorSpace),Mt=k.colorSpace===Di?null:Te.getPrimaries(k.colorSpace),wt=k.colorSpace===Di||ht===Mt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,k.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,k.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,wt);let Rt=M(k.image,!1,s.maxTextureSize);Rt=tt(k,Rt);let Pt=r.convert(k.format,k.colorSpace),Xt=r.convert(k.type),jt=_(k.internalFormat,Pt,Xt,k.colorSpace,k.isVideoTexture);mt(Ct,k);let qt,de=k.mipmaps,se=k.isVideoTexture!==!0,be=ft.__version===void 0||Lt===!0,lt=Z.dataReady,Yt=L(k,Rt);if(k.isDepthTexture)jt=v(k.format===Zs,k.type),be&&(se?e.texStorage2D(n.TEXTURE_2D,1,jt,Rt.width,Rt.height):e.texImage2D(n.TEXTURE_2D,0,jt,Rt.width,Rt.height,0,Pt,Xt,null));else if(k.isDataTexture)if(de.length>0){se&&be&&e.texStorage2D(n.TEXTURE_2D,Yt,jt,de[0].width,de[0].height);for(let Tt=0,Nt=de.length;Tt<Nt;Tt++)qt=de[Tt],se?lt&&e.texSubImage2D(n.TEXTURE_2D,Tt,0,0,qt.width,qt.height,Pt,Xt,qt.data):e.texImage2D(n.TEXTURE_2D,Tt,jt,qt.width,qt.height,0,Pt,Xt,qt.data);k.generateMipmaps=!1}else se?(be&&e.texStorage2D(n.TEXTURE_2D,Yt,jt,Rt.width,Rt.height),lt&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,Rt.width,Rt.height,Pt,Xt,Rt.data)):e.texImage2D(n.TEXTURE_2D,0,jt,Rt.width,Rt.height,0,Pt,Xt,Rt.data);else if(k.isCompressedTexture)if(k.isCompressedArrayTexture){se&&be&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Yt,jt,de[0].width,de[0].height,Rt.depth);for(let Tt=0,Nt=de.length;Tt<Nt;Tt++)if(qt=de[Tt],k.format!==Ln)if(Pt!==null)if(se){if(lt)if(k.layerUpdates.size>0){let C=Ld(qt.width,qt.height,k.format,k.type);for(let V of k.layerUpdates){let J=qt.data.subarray(V*C/qt.data.BYTES_PER_ELEMENT,(V+1)*C/qt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Tt,0,0,V,qt.width,qt.height,1,Pt,J)}k.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Tt,0,0,0,qt.width,qt.height,Rt.depth,Pt,qt.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Tt,jt,qt.width,qt.height,Rt.depth,0,qt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else se?lt&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,Tt,0,0,0,qt.width,qt.height,Rt.depth,Pt,Xt,qt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,Tt,jt,qt.width,qt.height,Rt.depth,0,Pt,Xt,qt.data)}else{se&&be&&e.texStorage2D(n.TEXTURE_2D,Yt,jt,de[0].width,de[0].height);for(let Tt=0,Nt=de.length;Tt<Nt;Tt++)qt=de[Tt],k.format!==Ln?Pt!==null?se?lt&&e.compressedTexSubImage2D(n.TEXTURE_2D,Tt,0,0,qt.width,qt.height,Pt,qt.data):e.compressedTexImage2D(n.TEXTURE_2D,Tt,jt,qt.width,qt.height,0,qt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):se?lt&&e.texSubImage2D(n.TEXTURE_2D,Tt,0,0,qt.width,qt.height,Pt,Xt,qt.data):e.texImage2D(n.TEXTURE_2D,Tt,jt,qt.width,qt.height,0,Pt,Xt,qt.data)}else if(k.isDataArrayTexture)if(se){if(be&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Yt,jt,Rt.width,Rt.height,Rt.depth),lt)if(k.layerUpdates.size>0){let Tt=Ld(Rt.width,Rt.height,k.format,k.type);for(let Nt of k.layerUpdates){let C=Rt.data.subarray(Nt*Tt/Rt.data.BYTES_PER_ELEMENT,(Nt+1)*Tt/Rt.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Nt,Rt.width,Rt.height,1,Pt,Xt,C)}k.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Rt.width,Rt.height,Rt.depth,Pt,Xt,Rt.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,jt,Rt.width,Rt.height,Rt.depth,0,Pt,Xt,Rt.data);else if(k.isData3DTexture)se?(be&&e.texStorage3D(n.TEXTURE_3D,Yt,jt,Rt.width,Rt.height,Rt.depth),lt&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Rt.width,Rt.height,Rt.depth,Pt,Xt,Rt.data)):e.texImage3D(n.TEXTURE_3D,0,jt,Rt.width,Rt.height,Rt.depth,0,Pt,Xt,Rt.data);else if(k.isFramebufferTexture){if(be)if(se)e.texStorage2D(n.TEXTURE_2D,Yt,jt,Rt.width,Rt.height);else{let Tt=Rt.width,Nt=Rt.height;for(let C=0;C<Yt;C++)e.texImage2D(n.TEXTURE_2D,C,jt,Tt,Nt,0,Pt,Xt,null),Tt>>=1,Nt>>=1}}else if(de.length>0){if(se&&be){let Tt=$t(de[0]);e.texStorage2D(n.TEXTURE_2D,Yt,jt,Tt.width,Tt.height)}for(let Tt=0,Nt=de.length;Tt<Nt;Tt++)qt=de[Tt],se?lt&&e.texSubImage2D(n.TEXTURE_2D,Tt,0,0,Pt,Xt,qt):e.texImage2D(n.TEXTURE_2D,Tt,jt,Pt,Xt,qt);k.generateMipmaps=!1}else if(se){if(be){let Tt=$t(Rt);e.texStorage2D(n.TEXTURE_2D,Yt,jt,Tt.width,Tt.height)}lt&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,Pt,Xt,Rt)}else e.texImage2D(n.TEXTURE_2D,0,jt,Pt,Xt,Rt);m(k)&&p(Ct),ft.__version=Z.version,k.onUpdate&&k.onUpdate(k)}B.__version=k.version}function Y(B,k,yt){if(k.image.length!==6)return;let Ct=Ot(B,k),Lt=k.source;e.bindTexture(n.TEXTURE_CUBE_MAP,B.__webglTexture,n.TEXTURE0+yt);let Z=i.get(Lt);if(Lt.version!==Z.__version||Ct===!0){e.activeTexture(n.TEXTURE0+yt);let ft=Te.getPrimaries(Te.workingColorSpace),ht=k.colorSpace===Di?null:Te.getPrimaries(k.colorSpace),Mt=k.colorSpace===Di||ft===ht?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,k.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,k.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Mt);let wt=k.isCompressedTexture||k.image[0].isCompressedTexture,Rt=k.image[0]&&k.image[0].isDataTexture,Pt=[];for(let Nt=0;Nt<6;Nt++)!wt&&!Rt?Pt[Nt]=M(k.image[Nt],!0,s.maxCubemapSize):Pt[Nt]=Rt?k.image[Nt].image:k.image[Nt],Pt[Nt]=tt(k,Pt[Nt]);let Xt=Pt[0],jt=r.convert(k.format,k.colorSpace),qt=r.convert(k.type),de=_(k.internalFormat,jt,qt,k.colorSpace),se=k.isVideoTexture!==!0,be=Z.__version===void 0||Ct===!0,lt=Lt.dataReady,Yt=L(k,Xt);mt(n.TEXTURE_CUBE_MAP,k);let Tt;if(wt){se&&be&&e.texStorage2D(n.TEXTURE_CUBE_MAP,Yt,de,Xt.width,Xt.height);for(let Nt=0;Nt<6;Nt++){Tt=Pt[Nt].mipmaps;for(let C=0;C<Tt.length;C++){let V=Tt[C];k.format!==Ln?jt!==null?se?lt&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Nt,C,0,0,V.width,V.height,jt,V.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Nt,C,de,V.width,V.height,0,V.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):se?lt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Nt,C,0,0,V.width,V.height,jt,qt,V.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Nt,C,de,V.width,V.height,0,jt,qt,V.data)}}}else{if(Tt=k.mipmaps,se&&be){Tt.length>0&&Yt++;let Nt=$t(Pt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,Yt,de,Nt.width,Nt.height)}for(let Nt=0;Nt<6;Nt++)if(Rt){se?lt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Nt,0,0,0,Pt[Nt].width,Pt[Nt].height,jt,qt,Pt[Nt].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Nt,0,de,Pt[Nt].width,Pt[Nt].height,0,jt,qt,Pt[Nt].data);for(let C=0;C<Tt.length;C++){let J=Tt[C].image[Nt].image;se?lt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Nt,C+1,0,0,J.width,J.height,jt,qt,J.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Nt,C+1,de,J.width,J.height,0,jt,qt,J.data)}}else{se?lt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Nt,0,0,0,jt,qt,Pt[Nt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Nt,0,de,jt,qt,Pt[Nt]);for(let C=0;C<Tt.length;C++){let V=Tt[C];se?lt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Nt,C+1,0,0,jt,qt,V.image[Nt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Nt,C+1,de,jt,qt,V.image[Nt])}}}m(k)&&p(n.TEXTURE_CUBE_MAP),Z.__version=Lt.version,k.onUpdate&&k.onUpdate(k)}B.__version=k.version}function j(B,k,yt,Ct,Lt,Z){let ft=r.convert(yt.format,yt.colorSpace),ht=r.convert(yt.type),Mt=_(yt.internalFormat,ft,ht,yt.colorSpace),wt=i.get(k),Rt=i.get(yt);if(Rt.__renderTarget=k,!wt.__hasExternalTextures){let Pt=Math.max(1,k.width>>Z),Xt=Math.max(1,k.height>>Z);Lt===n.TEXTURE_3D||Lt===n.TEXTURE_2D_ARRAY?e.texImage3D(Lt,Z,Mt,Pt,Xt,k.depth,0,ft,ht,null):e.texImage2D(Lt,Z,Mt,Pt,Xt,0,ft,ht,null)}e.bindFramebuffer(n.FRAMEBUFFER,B),St(k)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Ct,Lt,Rt.__webglTexture,0,_t(k)):(Lt===n.TEXTURE_2D||Lt>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Lt<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Ct,Lt,Rt.__webglTexture,Z),e.bindFramebuffer(n.FRAMEBUFFER,null)}function G(B,k,yt){if(n.bindRenderbuffer(n.RENDERBUFFER,B),k.depthBuffer){let Ct=k.depthTexture,Lt=Ct&&Ct.isDepthTexture?Ct.type:null,Z=v(k.stencilBuffer,Lt),ft=k.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ht=_t(k);St(k)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ht,Z,k.width,k.height):yt?n.renderbufferStorageMultisample(n.RENDERBUFFER,ht,Z,k.width,k.height):n.renderbufferStorage(n.RENDERBUFFER,Z,k.width,k.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,ft,n.RENDERBUFFER,B)}else{let Ct=k.textures;for(let Lt=0;Lt<Ct.length;Lt++){let Z=Ct[Lt],ft=r.convert(Z.format,Z.colorSpace),ht=r.convert(Z.type),Mt=_(Z.internalFormat,ft,ht,Z.colorSpace),wt=_t(k);yt&&St(k)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,wt,Mt,k.width,k.height):St(k)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,wt,Mt,k.width,k.height):n.renderbufferStorage(n.RENDERBUFFER,Mt,k.width,k.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function ct(B,k){if(k&&k.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,B),!(k.depthTexture&&k.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let Ct=i.get(k.depthTexture);Ct.__renderTarget=k,(!Ct.__webglTexture||k.depthTexture.image.width!==k.width||k.depthTexture.image.height!==k.height)&&(k.depthTexture.image.width=k.width,k.depthTexture.image.height=k.height,k.depthTexture.needsUpdate=!0),N(k.depthTexture,0);let Lt=Ct.__webglTexture,Z=_t(k);if(k.depthTexture.format===$s)St(k)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Lt,0,Z):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Lt,0);else if(k.depthTexture.format===Zs)St(k)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Lt,0,Z):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Lt,0);else throw new Error("Unknown depthTexture format")}function at(B){let k=i.get(B),yt=B.isWebGLCubeRenderTarget===!0;if(k.__boundDepthTexture!==B.depthTexture){let Ct=B.depthTexture;if(k.__depthDisposeCallback&&k.__depthDisposeCallback(),Ct){let Lt=()=>{delete k.__boundDepthTexture,delete k.__depthDisposeCallback,Ct.removeEventListener("dispose",Lt)};Ct.addEventListener("dispose",Lt),k.__depthDisposeCallback=Lt}k.__boundDepthTexture=Ct}if(B.depthTexture&&!k.__autoAllocateDepthBuffer){if(yt)throw new Error("target.depthTexture not supported in Cube render targets");ct(k.__webglFramebuffer,B)}else if(yt){k.__webglDepthbuffer=[];for(let Ct=0;Ct<6;Ct++)if(e.bindFramebuffer(n.FRAMEBUFFER,k.__webglFramebuffer[Ct]),k.__webglDepthbuffer[Ct]===void 0)k.__webglDepthbuffer[Ct]=n.createRenderbuffer(),G(k.__webglDepthbuffer[Ct],B,!1);else{let Lt=B.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Z=k.__webglDepthbuffer[Ct];n.bindRenderbuffer(n.RENDERBUFFER,Z),n.framebufferRenderbuffer(n.FRAMEBUFFER,Lt,n.RENDERBUFFER,Z)}}else if(e.bindFramebuffer(n.FRAMEBUFFER,k.__webglFramebuffer),k.__webglDepthbuffer===void 0)k.__webglDepthbuffer=n.createRenderbuffer(),G(k.__webglDepthbuffer,B,!1);else{let Ct=B.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Lt=k.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,Lt),n.framebufferRenderbuffer(n.FRAMEBUFFER,Ct,n.RENDERBUFFER,Lt)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function nt(B,k,yt){let Ct=i.get(B);k!==void 0&&j(Ct.__webglFramebuffer,B,B.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),yt!==void 0&&at(B)}function rt(B){let k=B.texture,yt=i.get(B),Ct=i.get(k);B.addEventListener("dispose",E);let Lt=B.textures,Z=B.isWebGLCubeRenderTarget===!0,ft=Lt.length>1;if(ft||(Ct.__webglTexture===void 0&&(Ct.__webglTexture=n.createTexture()),Ct.__version=k.version,o.memory.textures++),Z){yt.__webglFramebuffer=[];for(let ht=0;ht<6;ht++)if(k.mipmaps&&k.mipmaps.length>0){yt.__webglFramebuffer[ht]=[];for(let Mt=0;Mt<k.mipmaps.length;Mt++)yt.__webglFramebuffer[ht][Mt]=n.createFramebuffer()}else yt.__webglFramebuffer[ht]=n.createFramebuffer()}else{if(k.mipmaps&&k.mipmaps.length>0){yt.__webglFramebuffer=[];for(let ht=0;ht<k.mipmaps.length;ht++)yt.__webglFramebuffer[ht]=n.createFramebuffer()}else yt.__webglFramebuffer=n.createFramebuffer();if(ft)for(let ht=0,Mt=Lt.length;ht<Mt;ht++){let wt=i.get(Lt[ht]);wt.__webglTexture===void 0&&(wt.__webglTexture=n.createTexture(),o.memory.textures++)}if(B.samples>0&&St(B)===!1){yt.__webglMultisampledFramebuffer=n.createFramebuffer(),yt.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,yt.__webglMultisampledFramebuffer);for(let ht=0;ht<Lt.length;ht++){let Mt=Lt[ht];yt.__webglColorRenderbuffer[ht]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,yt.__webglColorRenderbuffer[ht]);let wt=r.convert(Mt.format,Mt.colorSpace),Rt=r.convert(Mt.type),Pt=_(Mt.internalFormat,wt,Rt,Mt.colorSpace,B.isXRRenderTarget===!0),Xt=_t(B);n.renderbufferStorageMultisample(n.RENDERBUFFER,Xt,Pt,B.width,B.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ht,n.RENDERBUFFER,yt.__webglColorRenderbuffer[ht])}n.bindRenderbuffer(n.RENDERBUFFER,null),B.depthBuffer&&(yt.__webglDepthRenderbuffer=n.createRenderbuffer(),G(yt.__webglDepthRenderbuffer,B,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Z){e.bindTexture(n.TEXTURE_CUBE_MAP,Ct.__webglTexture),mt(n.TEXTURE_CUBE_MAP,k);for(let ht=0;ht<6;ht++)if(k.mipmaps&&k.mipmaps.length>0)for(let Mt=0;Mt<k.mipmaps.length;Mt++)j(yt.__webglFramebuffer[ht][Mt],B,k,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Mt);else j(yt.__webglFramebuffer[ht],B,k,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0);m(k)&&p(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(ft){for(let ht=0,Mt=Lt.length;ht<Mt;ht++){let wt=Lt[ht],Rt=i.get(wt);e.bindTexture(n.TEXTURE_2D,Rt.__webglTexture),mt(n.TEXTURE_2D,wt),j(yt.__webglFramebuffer,B,wt,n.COLOR_ATTACHMENT0+ht,n.TEXTURE_2D,0),m(wt)&&p(n.TEXTURE_2D)}e.unbindTexture()}else{let ht=n.TEXTURE_2D;if((B.isWebGL3DRenderTarget||B.isWebGLArrayRenderTarget)&&(ht=B.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(ht,Ct.__webglTexture),mt(ht,k),k.mipmaps&&k.mipmaps.length>0)for(let Mt=0;Mt<k.mipmaps.length;Mt++)j(yt.__webglFramebuffer[Mt],B,k,n.COLOR_ATTACHMENT0,ht,Mt);else j(yt.__webglFramebuffer,B,k,n.COLOR_ATTACHMENT0,ht,0);m(k)&&p(ht),e.unbindTexture()}B.depthBuffer&&at(B)}function W(B){let k=B.textures;for(let yt=0,Ct=k.length;yt<Ct;yt++){let Lt=k[yt];if(m(Lt)){let Z=b(B),ft=i.get(Lt).__webglTexture;e.bindTexture(Z,ft),p(Z),e.unbindTexture()}}}let dt=[],H=[];function Ut(B){if(B.samples>0){if(St(B)===!1){let k=B.textures,yt=B.width,Ct=B.height,Lt=n.COLOR_BUFFER_BIT,Z=B.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ft=i.get(B),ht=k.length>1;if(ht)for(let Mt=0;Mt<k.length;Mt++)e.bindFramebuffer(n.FRAMEBUFFER,ft.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Mt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,ft.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Mt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,ft.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,ft.__webglFramebuffer);for(let Mt=0;Mt<k.length;Mt++){if(B.resolveDepthBuffer&&(B.depthBuffer&&(Lt|=n.DEPTH_BUFFER_BIT),B.stencilBuffer&&B.resolveStencilBuffer&&(Lt|=n.STENCIL_BUFFER_BIT)),ht){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ft.__webglColorRenderbuffer[Mt]);let wt=i.get(k[Mt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,wt,0)}n.blitFramebuffer(0,0,yt,Ct,0,0,yt,Ct,Lt,n.NEAREST),l===!0&&(dt.length=0,H.length=0,dt.push(n.COLOR_ATTACHMENT0+Mt),B.depthBuffer&&B.resolveDepthBuffer===!1&&(dt.push(Z),H.push(Z),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,H)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,dt))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ht)for(let Mt=0;Mt<k.length;Mt++){e.bindFramebuffer(n.FRAMEBUFFER,ft.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Mt,n.RENDERBUFFER,ft.__webglColorRenderbuffer[Mt]);let wt=i.get(k[Mt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,ft.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Mt,n.TEXTURE_2D,wt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,ft.__webglMultisampledFramebuffer)}else if(B.depthBuffer&&B.resolveDepthBuffer===!1&&l){let k=B.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[k])}}}function _t(B){return Math.min(s.maxSamples,B.samples)}function St(B){let k=i.get(B);return B.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&k.__useRenderToTexture!==!1}function It(B){let k=o.render.frame;u.get(B)!==k&&(u.set(B,k),B.update())}function tt(B,k){let yt=B.colorSpace,Ct=B.format,Lt=B.type;return B.isCompressedTexture===!0||B.isVideoTexture===!0||yt!==tr&&yt!==Di&&(Te.getTransfer(yt)===Le?(Ct!==Ln||Lt!==xi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",yt)),k}function $t(B){return typeof HTMLImageElement<"u"&&B instanceof HTMLImageElement?(h.width=B.naturalWidth||B.width,h.height=B.naturalHeight||B.height):typeof VideoFrame<"u"&&B instanceof VideoFrame?(h.width=B.displayWidth,h.height=B.displayHeight):(h.width=B.width,h.height=B.height),h}this.allocateTextureUnit=w,this.resetTextureUnits=A,this.setTexture2D=N,this.setTexture2DArray=O,this.setTexture3D=z,this.setTextureCube=F,this.rebindTextures=nt,this.setupRenderTarget=rt,this.updateRenderTargetMipmap=W,this.updateMultisampleRenderTarget=Ut,this.setupDepthRenderbuffer=at,this.setupFrameBufferTexture=j,this.useMultisampledRTT=St}function ix(n,t){function e(i,s=Di){let r,o=Te.getTransfer(s);if(i===xi)return n.UNSIGNED_BYTE;if(i===jc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Qc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===jd)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Jd)return n.BYTE;if(i===Kd)return n.SHORT;if(i===Ir)return n.UNSIGNED_SHORT;if(i===Kc)return n.INT;if(i===ls)return n.UNSIGNED_INT;if(i===ni)return n.FLOAT;if(i===Gr)return n.HALF_FLOAT;if(i===Qd)return n.ALPHA;if(i===tu)return n.RGB;if(i===Ln)return n.RGBA;if(i===eu)return n.LUMINANCE;if(i===nu)return n.LUMINANCE_ALPHA;if(i===$s)return n.DEPTH_COMPONENT;if(i===Zs)return n.DEPTH_STENCIL;if(i===th)return n.RED;if(i===eh)return n.RED_INTEGER;if(i===iu)return n.RG;if(i===nh)return n.RG_INTEGER;if(i===ih)return n.RGBA_INTEGER;if(i===Bo||i===Ho||i===$o||i===Vo)if(o===Le)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Bo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ho)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===$o)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Vo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Bo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ho)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===$o)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Vo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===zl||i===Bl||i===Hl||i===$l)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===zl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Bl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Hl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===$l)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Vl||i===Gl||i===Wl)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Vl||i===Gl)return o===Le?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Wl)return o===Le?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Xl||i===ql||i===Yl||i===Zl||i===Jl||i===Kl||i===jl||i===Ql||i===tc||i===ec||i===nc||i===ic||i===sc||i===rc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Xl)return o===Le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===ql)return o===Le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Yl)return o===Le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Zl)return o===Le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Jl)return o===Le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Kl)return o===Le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===jl)return o===Le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Ql)return o===Le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===tc)return o===Le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===ec)return o===Le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===nc)return o===Le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===ic)return o===Le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===sc)return o===Le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===rc)return o===Le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Go||i===oc||i===ac)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===Go)return o===Le?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===oc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===ac)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===su||i===lc||i===cc||i===hc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===Go)return r.COMPRESSED_RED_RGTC1_EXT;if(i===lc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===cc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===hc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ys?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}var Tc=class extends bn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},ue=class extends ke{constructor(){super(),this.isGroup=!0,this.type="Group"}},sx={type:"move"},Ar=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ue,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ue,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new $,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new $),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ue,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new $,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new $),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,h=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(h&&t.hand){o=!0;for(let M of t.hand.values()){let m=e.getJointPose(M,i),p=this._getHandJoint(h,M);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let u=h.joints["index-finger-tip"],g=h.joints["thumb-tip"],f=u.position.distanceTo(g.position),c=.02,d=.005;h.inputState.pinching&&f>c+d?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!h.inputState.pinching&&f<=c-d&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(sx)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),h!==null&&(h.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new ue;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},rx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ox=`
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

}`,Ac=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){let s=new An,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new wn({vertexShader:rx,fragmentShader:ox,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ne(new fn(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Rc=class extends zi{constructor(t,e){super();let i=this,s=null,r=1,o=null,a="local-floor",l=1,h=null,u=null,g=null,f=null,c=null,d=null,M=new Ac,m=e.getContextAttributes(),p=null,b=null,_=[],v=[],L=new Bt,T=null,E=new bn;E.viewport=new Ze;let R=new bn;R.viewport=new Ze;let x=[E,R],y=new Tc,S=null,A=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(U){let Y=_[U];return Y===void 0&&(Y=new Ar,_[U]=Y),Y.getTargetRaySpace()},this.getControllerGrip=function(U){let Y=_[U];return Y===void 0&&(Y=new Ar,_[U]=Y),Y.getGripSpace()},this.getHand=function(U){let Y=_[U];return Y===void 0&&(Y=new Ar,_[U]=Y),Y.getHandSpace()};function w(U){let Y=v.indexOf(U.inputSource);if(Y===-1)return;let j=_[Y];j!==void 0&&(j.update(U.inputSource,U.frame,h||o),j.dispatchEvent({type:U.type,data:U.inputSource}))}function I(){s.removeEventListener("select",w),s.removeEventListener("selectstart",w),s.removeEventListener("selectend",w),s.removeEventListener("squeeze",w),s.removeEventListener("squeezestart",w),s.removeEventListener("squeezeend",w),s.removeEventListener("end",I),s.removeEventListener("inputsourceschange",N);for(let U=0;U<_.length;U++){let Y=v[U];Y!==null&&(v[U]=null,_[U].disconnect(Y))}S=null,A=null,M.reset(),t.setRenderTarget(p),c=null,f=null,g=null,s=null,b=null,Ot.stop(),i.isPresenting=!1,t.setPixelRatio(T),t.setSize(L.width,L.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(U){r=U,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(U){a=U,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||o},this.setReferenceSpace=function(U){h=U},this.getBaseLayer=function(){return f!==null?f:c},this.getBinding=function(){return g},this.getFrame=function(){return d},this.getSession=function(){return s},this.setSession=async function(U){if(s=U,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",w),s.addEventListener("selectstart",w),s.addEventListener("selectend",w),s.addEventListener("squeeze",w),s.addEventListener("squeezestart",w),s.addEventListener("squeezeend",w),s.addEventListener("end",I),s.addEventListener("inputsourceschange",N),m.xrCompatible!==!0&&await e.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(L),s.renderState.layers===void 0){let Y={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};c=new XRWebGLLayer(s,e,Y),s.updateRenderState({baseLayer:c}),t.setPixelRatio(1),t.setSize(c.framebufferWidth,c.framebufferHeight,!1),b=new vi(c.framebufferWidth,c.framebufferHeight,{format:Ln,type:xi,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let Y=null,j=null,G=null;m.depth&&(G=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Y=m.stencil?Zs:$s,j=m.stencil?Ys:ls);let ct={colorFormat:e.RGBA8,depthFormat:G,scaleFactor:r};g=new XRWebGLBinding(s,e),f=g.createProjectionLayer(ct),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),b=new vi(f.textureWidth,f.textureHeight,{format:Ln,type:xi,depthTexture:new sa(f.textureWidth,f.textureHeight,j,void 0,void 0,void 0,void 0,void 0,void 0,Y),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),h=null,o=await s.requestReferenceSpace(a),Ot.setContext(s),Ot.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function N(U){for(let Y=0;Y<U.removed.length;Y++){let j=U.removed[Y],G=v.indexOf(j);G>=0&&(v[G]=null,_[G].disconnect(j))}for(let Y=0;Y<U.added.length;Y++){let j=U.added[Y],G=v.indexOf(j);if(G===-1){for(let at=0;at<_.length;at++)if(at>=v.length){v.push(j),G=at;break}else if(v[at]===null){v[at]=j,G=at;break}if(G===-1)break}let ct=_[G];ct&&ct.connect(j)}}let O=new $,z=new $;function F(U,Y,j){O.setFromMatrixPosition(Y.matrixWorld),z.setFromMatrixPosition(j.matrixWorld);let G=O.distanceTo(z),ct=Y.projectionMatrix.elements,at=j.projectionMatrix.elements,nt=ct[14]/(ct[10]-1),rt=ct[14]/(ct[10]+1),W=(ct[9]+1)/ct[5],dt=(ct[9]-1)/ct[5],H=(ct[8]-1)/ct[0],Ut=(at[8]+1)/at[0],_t=nt*H,St=nt*Ut,It=G/(-H+Ut),tt=It*-H;if(Y.matrixWorld.decompose(U.position,U.quaternion,U.scale),U.translateX(tt),U.translateZ(It),U.matrixWorld.compose(U.position,U.quaternion,U.scale),U.matrixWorldInverse.copy(U.matrixWorld).invert(),ct[10]===-1)U.projectionMatrix.copy(Y.projectionMatrix),U.projectionMatrixInverse.copy(Y.projectionMatrixInverse);else{let $t=nt+It,B=rt+It,k=_t-tt,yt=St+(G-tt),Ct=W*rt/B*$t,Lt=dt*rt/B*$t;U.projectionMatrix.makePerspective(k,yt,Ct,Lt,$t,B),U.projectionMatrixInverse.copy(U.projectionMatrix).invert()}}function X(U,Y){Y===null?U.matrixWorld.copy(U.matrix):U.matrixWorld.multiplyMatrices(Y.matrixWorld,U.matrix),U.matrixWorldInverse.copy(U.matrixWorld).invert()}this.updateCamera=function(U){if(s===null)return;let Y=U.near,j=U.far;M.texture!==null&&(M.depthNear>0&&(Y=M.depthNear),M.depthFar>0&&(j=M.depthFar)),y.near=R.near=E.near=Y,y.far=R.far=E.far=j,(S!==y.near||A!==y.far)&&(s.updateRenderState({depthNear:y.near,depthFar:y.far}),S=y.near,A=y.far),E.layers.mask=U.layers.mask|2,R.layers.mask=U.layers.mask|4,y.layers.mask=E.layers.mask|R.layers.mask;let G=U.parent,ct=y.cameras;X(y,G);for(let at=0;at<ct.length;at++)X(ct[at],G);ct.length===2?F(y,E,R):y.projectionMatrix.copy(E.projectionMatrix),it(U,y,G)};function it(U,Y,j){j===null?U.matrix.copy(Y.matrixWorld):(U.matrix.copy(j.matrixWorld),U.matrix.invert(),U.matrix.multiply(Y.matrixWorld)),U.matrix.decompose(U.position,U.quaternion,U.scale),U.updateMatrixWorld(!0),U.projectionMatrix.copy(Y.projectionMatrix),U.projectionMatrixInverse.copy(Y.projectionMatrixInverse),U.isPerspectiveCamera&&(U.fov=Pr*2*Math.atan(1/U.projectionMatrix.elements[5]),U.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(f===null&&c===null))return l},this.setFoveation=function(U){l=U,f!==null&&(f.fixedFoveation=U),c!==null&&c.fixedFoveation!==void 0&&(c.fixedFoveation=U)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(y)};let P=null;function mt(U,Y){if(u=Y.getViewerPose(h||o),d=Y,u!==null){let j=u.views;c!==null&&(t.setRenderTargetFramebuffer(b,c.framebuffer),t.setRenderTarget(b));let G=!1;j.length!==y.cameras.length&&(y.cameras.length=0,G=!0);for(let at=0;at<j.length;at++){let nt=j[at],rt=null;if(c!==null)rt=c.getViewport(nt);else{let dt=g.getViewSubImage(f,nt);rt=dt.viewport,at===0&&(t.setRenderTargetTextures(b,dt.colorTexture,f.ignoreDepthValues?void 0:dt.depthStencilTexture),t.setRenderTarget(b))}let W=x[at];W===void 0&&(W=new bn,W.layers.enable(at),W.viewport=new Ze,x[at]=W),W.matrix.fromArray(nt.transform.matrix),W.matrix.decompose(W.position,W.quaternion,W.scale),W.projectionMatrix.fromArray(nt.projectionMatrix),W.projectionMatrixInverse.copy(W.projectionMatrix).invert(),W.viewport.set(rt.x,rt.y,rt.width,rt.height),at===0&&(y.matrix.copy(W.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),G===!0&&y.cameras.push(W)}let ct=s.enabledFeatures;if(ct&&ct.includes("depth-sensing")){let at=g.getDepthInformation(j[0]);at&&at.isValid&&at.texture&&M.init(t,at,s.renderState)}}for(let j=0;j<_.length;j++){let G=v[j],ct=_[j];G!==null&&ct!==void 0&&ct.update(G,Y,h||o)}P&&P(U,Y),Y.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Y}),d=null}let Ot=new du;Ot.setAnimationLoop(mt),this.setAnimationLoop=function(U){P=U},this.dispose=function(){}}},es=new qn,ax=new we;function lx(n,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,hu(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,b,_,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),g(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&c(m,p,v)):p.isMeshMatcapMaterial?(r(m,p),d(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),M(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,b,_):p.isSpriteMaterial?h(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===un&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===un&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let b=t.get(p),_=b.envMap,v=b.envMapRotation;_&&(m.envMap.value=_,es.copy(v),es.x*=-1,es.y*=-1,es.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(es.y*=-1,es.z*=-1),m.envMapRotation.value.setFromMatrix4(ax.makeRotationFromEuler(es)),m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,b,_){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*b,m.scale.value=_*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function g(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function c(m,p,b){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===un&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function d(m,p){p.matcap&&(m.matcap.value=p.matcap)}function M(m,p){let b=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function cx(n,t,e,i){let s={},r={},o=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,_){let v=_.program;i.uniformBlockBinding(b,v)}function h(b,_){let v=s[b.id];v===void 0&&(d(b),v=u(b),s[b.id]=v,b.addEventListener("dispose",m));let L=_.program;i.updateUBOMapping(b,L);let T=t.render.frame;r[b.id]!==T&&(f(b),r[b.id]=T)}function u(b){let _=g();b.__bindingPointIndex=_;let v=n.createBuffer(),L=b.__size,T=b.usage;return n.bindBuffer(n.UNIFORM_BUFFER,v),n.bufferData(n.UNIFORM_BUFFER,L,T),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,_,v),v}function g(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(b){let _=s[b.id],v=b.uniforms,L=b.__cache;n.bindBuffer(n.UNIFORM_BUFFER,_);for(let T=0,E=v.length;T<E;T++){let R=Array.isArray(v[T])?v[T]:[v[T]];for(let x=0,y=R.length;x<y;x++){let S=R[x];if(c(S,T,x,L)===!0){let A=S.__offset,w=Array.isArray(S.value)?S.value:[S.value],I=0;for(let N=0;N<w.length;N++){let O=w[N],z=M(O);typeof O=="number"||typeof O=="boolean"?(S.__data[0]=O,n.bufferSubData(n.UNIFORM_BUFFER,A+I,S.__data)):O.isMatrix3?(S.__data[0]=O.elements[0],S.__data[1]=O.elements[1],S.__data[2]=O.elements[2],S.__data[3]=0,S.__data[4]=O.elements[3],S.__data[5]=O.elements[4],S.__data[6]=O.elements[5],S.__data[7]=0,S.__data[8]=O.elements[6],S.__data[9]=O.elements[7],S.__data[10]=O.elements[8],S.__data[11]=0):(O.toArray(S.__data,I),I+=z.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,A,S.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function c(b,_,v,L){let T=b.value,E=_+"_"+v;if(L[E]===void 0)return typeof T=="number"||typeof T=="boolean"?L[E]=T:L[E]=T.clone(),!0;{let R=L[E];if(typeof T=="number"||typeof T=="boolean"){if(R!==T)return L[E]=T,!0}else if(R.equals(T)===!1)return R.copy(T),!0}return!1}function d(b){let _=b.uniforms,v=0,L=16;for(let E=0,R=_.length;E<R;E++){let x=Array.isArray(_[E])?_[E]:[_[E]];for(let y=0,S=x.length;y<S;y++){let A=x[y],w=Array.isArray(A.value)?A.value:[A.value];for(let I=0,N=w.length;I<N;I++){let O=w[I],z=M(O),F=v%L,X=F%z.boundary,it=F+X;v+=X,it!==0&&L-it<z.storage&&(v+=L-it),A.__data=new Float32Array(z.storage/Float32Array.BYTES_PER_ELEMENT),A.__offset=v,v+=z.storage}}}let T=v%L;return T>0&&(v+=L-T),b.__size=v,b.__cache={},this}function M(b){let _={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(_.boundary=4,_.storage=4):b.isVector2?(_.boundary=8,_.storage=8):b.isVector3||b.isColor?(_.boundary=16,_.storage=12):b.isVector4?(_.boundary=16,_.storage=16):b.isMatrix3?(_.boundary=48,_.storage=48):b.isMatrix4?(_.boundary=64,_.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),_}function m(b){let _=b.target;_.removeEventListener("dispose",m);let v=o.indexOf(_.__bindingPointIndex);o.splice(v,1),n.deleteBuffer(s[_.id]),delete s[_.id],delete r[_.id]}function p(){for(let b in s)n.deleteBuffer(s[b]);o=[],s={},r={}}return{bind:l,update:h,dispose:p}}var ra=class{constructor(t={}){let{canvas:e=pp(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:h=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:g=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let c;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");c=i.getContextAttributes().alpha}else c=o;let d=new Uint32Array(4),M=new Int32Array(4),m=null,p=null,b=[],_=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=hn,this.toneMapping=ii,this.toneMappingExposure=1;let v=this,L=!1,T=0,E=0,R=null,x=-1,y=null,S=new Ze,A=new Ze,w=null,I=new re(0),N=0,O=e.width,z=e.height,F=1,X=null,it=null,P=new Ze(0,0,O,z),mt=new Ze(0,0,O,z),Ot=!1,U=new Lr,Y=!1,j=!1,G=new we,ct=new we,at=new $,nt=new Ze,rt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},W=!1;function dt(){return R===null?F:1}let H=i;function Ut(D,et){return e.getContext(D,et)}try{let D={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:h,powerPreference:u,failIfMajorPerformanceCaveat:g};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Zc}`),e.addEventListener("webglcontextlost",Nt,!1),e.addEventListener("webglcontextrestored",C,!1),e.addEventListener("webglcontextcreationerror",V,!1),H===null){let et="webgl2";if(H=Ut(et,D),H===null)throw Ut(et)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(D){throw console.error("THREE.WebGLRenderer: "+D.message),D}let _t,St,It,tt,$t,B,k,yt,Ct,Lt,Z,ft,ht,Mt,wt,Rt,Pt,Xt,jt,qt,de,se,be,lt;function Yt(){_t=new Eg(H),_t.init(),se=new ix(H,_t),St=new vg(H,_t,t,se),It=new tx(H,_t),St.reverseDepthBuffer&&f&&It.buffers.depth.setReversed(!0),tt=new Rg(H),$t=new Hy,B=new nx(H,_t,It,$t,St,se,tt),k=new Mg(v),yt=new wg(v),Ct=new Up(H),be=new yg(H,Ct),Lt=new Tg(H,Ct,tt,be),Z=new Ig(H,Lt,Ct,tt),jt=new Cg(H,St,B),Rt=new _g($t),ft=new By(v,k,yt,_t,St,be,Rt),ht=new lx(v,$t),Mt=new Vy,wt=new Zy(_t),Xt=new gg(v,k,yt,It,Z,c,l),Pt=new jy(v,Z,St),lt=new cx(H,tt,St,It),qt=new xg(H,_t,tt),de=new Ag(H,_t,tt),tt.programs=ft.programs,v.capabilities=St,v.extensions=_t,v.properties=$t,v.renderLists=Mt,v.shadowMap=Pt,v.state=It,v.info=tt}Yt();let Tt=new Rc(v,H);this.xr=Tt,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){let D=_t.get("WEBGL_lose_context");D&&D.loseContext()},this.forceContextRestore=function(){let D=_t.get("WEBGL_lose_context");D&&D.restoreContext()},this.getPixelRatio=function(){return F},this.setPixelRatio=function(D){D!==void 0&&(F=D,this.setSize(O,z,!1))},this.getSize=function(D){return D.set(O,z)},this.setSize=function(D,et,xt=!0){if(Tt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}O=D,z=et,e.width=Math.floor(D*F),e.height=Math.floor(et*F),xt===!0&&(e.style.width=D+"px",e.style.height=et+"px"),this.setViewport(0,0,D,et)},this.getDrawingBufferSize=function(D){return D.set(O*F,z*F).floor()},this.setDrawingBufferSize=function(D,et,xt){O=D,z=et,F=xt,e.width=Math.floor(D*xt),e.height=Math.floor(et*xt),this.setViewport(0,0,D,et)},this.getCurrentViewport=function(D){return D.copy(S)},this.getViewport=function(D){return D.copy(P)},this.setViewport=function(D,et,xt,pt){D.isVector4?P.set(D.x,D.y,D.z,D.w):P.set(D,et,xt,pt),It.viewport(S.copy(P).multiplyScalar(F).round())},this.getScissor=function(D){return D.copy(mt)},this.setScissor=function(D,et,xt,pt){D.isVector4?mt.set(D.x,D.y,D.z,D.w):mt.set(D,et,xt,pt),It.scissor(A.copy(mt).multiplyScalar(F).round())},this.getScissorTest=function(){return Ot},this.setScissorTest=function(D){It.setScissorTest(Ot=D)},this.setOpaqueSort=function(D){X=D},this.setTransparentSort=function(D){it=D},this.getClearColor=function(D){return D.copy(Xt.getClearColor())},this.setClearColor=function(){Xt.setClearColor.apply(Xt,arguments)},this.getClearAlpha=function(){return Xt.getClearAlpha()},this.setClearAlpha=function(){Xt.setClearAlpha.apply(Xt,arguments)},this.clear=function(D=!0,et=!0,xt=!0){let pt=0;if(D){let ut=!1;if(R!==null){let Vt=R.texture.format;ut=Vt===ih||Vt===nh||Vt===eh}if(ut){let Vt=R.texture.type,Kt=Vt===xi||Vt===ls||Vt===Ir||Vt===Ys||Vt===jc||Vt===Qc,ee=Xt.getClearColor(),oe=Xt.getClearAlpha(),fe=ee.r,ve=ee.g,ae=ee.b;Kt?(d[0]=fe,d[1]=ve,d[2]=ae,d[3]=oe,H.clearBufferuiv(H.COLOR,0,d)):(M[0]=fe,M[1]=ve,M[2]=ae,M[3]=oe,H.clearBufferiv(H.COLOR,0,M))}else pt|=H.COLOR_BUFFER_BIT}et&&(pt|=H.DEPTH_BUFFER_BIT),xt&&(pt|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H.clear(pt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Nt,!1),e.removeEventListener("webglcontextrestored",C,!1),e.removeEventListener("webglcontextcreationerror",V,!1),Mt.dispose(),wt.dispose(),$t.dispose(),k.dispose(),yt.dispose(),Z.dispose(),be.dispose(),lt.dispose(),ft.dispose(),Tt.dispose(),Tt.removeEventListener("sessionstart",Ft),Tt.removeEventListener("sessionend",Q),bt.stop()};function Nt(D){D.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function C(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;let D=tt.autoReset,et=Pt.enabled,xt=Pt.autoUpdate,pt=Pt.needsUpdate,ut=Pt.type;Yt(),tt.autoReset=D,Pt.enabled=et,Pt.autoUpdate=xt,Pt.needsUpdate=pt,Pt.type=ut}function V(D){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",D.statusMessage)}function J(D){let et=D.target;et.removeEventListener("dispose",J),ot(et)}function ot(D){vt(D),$t.remove(D)}function vt(D){let et=$t.get(D).programs;et!==void 0&&(et.forEach(function(xt){ft.releaseProgram(xt)}),D.isShaderMaterial&&ft.releaseShaderCache(D))}this.renderBufferDirect=function(D,et,xt,pt,ut,Vt){et===null&&(et=rt);let Kt=ut.isMesh&&ut.matrixWorld.determinant()<0,ee=zt(D,et,xt,pt,ut);It.setMaterial(pt,Kt);let oe=xt.index,fe=1;if(pt.wireframe===!0){if(oe=Lt.getWireframeAttribute(xt),oe===void 0)return;fe=2}let ve=xt.drawRange,ae=xt.attributes.position,Re=ve.start*fe,Fe=(ve.start+ve.count)*fe;Vt!==null&&(Re=Math.max(Re,Vt.start*fe),Fe=Math.min(Fe,(Vt.start+Vt.count)*fe)),oe!==null?(Re=Math.max(Re,0),Fe=Math.min(Fe,oe.count)):ae!=null&&(Re=Math.max(Re,0),Fe=Math.min(Fe,ae.count));let Be=Fe-Re;if(Be<0||Be===1/0)return;be.setup(ut,pt,ee,xt,oe);let Tn,Ce=qt;if(oe!==null&&(Tn=Ct.get(oe),Ce=de,Ce.setIndex(Tn)),ut.isMesh)pt.wireframe===!0?(It.setLineWidth(pt.wireframeLinewidth*dt()),Ce.setMode(H.LINES)):Ce.setMode(H.TRIANGLES);else if(ut.isLine){let le=pt.linewidth;le===void 0&&(le=1),It.setLineWidth(le*dt()),ut.isLineSegments?Ce.setMode(H.LINES):ut.isLineLoop?Ce.setMode(H.LINE_LOOP):Ce.setMode(H.LINE_STRIP)}else ut.isPoints?Ce.setMode(H.POINTS):ut.isSprite&&Ce.setMode(H.TRIANGLES);if(ut.isBatchedMesh)if(ut._multiDrawInstances!==null)Ce.renderMultiDrawInstances(ut._multiDrawStarts,ut._multiDrawCounts,ut._multiDrawCount,ut._multiDrawInstances);else if(_t.get("WEBGL_multi_draw"))Ce.renderMultiDraw(ut._multiDrawStarts,ut._multiDrawCounts,ut._multiDrawCount);else{let le=ut._multiDrawStarts,ai=ut._multiDrawCounts,Ie=ut._multiDrawCount,Hn=oe?Ct.get(oe).bytesPerElement:1,ps=$t.get(pt).currentProgram.getUniforms();for(let Cn=0;Cn<Ie;Cn++)ps.setValue(H,"_gl_DrawID",Cn),Ce.render(le[Cn]/Hn,ai[Cn])}else if(ut.isInstancedMesh)Ce.renderInstances(Re,Be,ut.count);else if(xt.isInstancedBufferGeometry){let le=xt._maxInstanceCount!==void 0?xt._maxInstanceCount:1/0,ai=Math.min(xt.instanceCount,le);Ce.renderInstances(Re,Be,ai)}else Ce.render(Re,Be)};function K(D,et,xt){D.transparent===!0&&D.side===je&&D.forceSinglePass===!1?(D.side=un,D.needsUpdate=!0,Dt(D,et,xt),D.side=Fi,D.needsUpdate=!0,Dt(D,et,xt),D.side=je):Dt(D,et,xt)}this.compile=function(D,et,xt=null){xt===null&&(xt=D),p=wt.get(xt),p.init(et),_.push(p),xt.traverseVisible(function(ut){ut.isLight&&ut.layers.test(et.layers)&&(p.pushLight(ut),ut.castShadow&&p.pushShadow(ut))}),D!==xt&&D.traverseVisible(function(ut){ut.isLight&&ut.layers.test(et.layers)&&(p.pushLight(ut),ut.castShadow&&p.pushShadow(ut))}),p.setupLights();let pt=new Set;return D.traverse(function(ut){if(!(ut.isMesh||ut.isPoints||ut.isLine||ut.isSprite))return;let Vt=ut.material;if(Vt)if(Array.isArray(Vt))for(let Kt=0;Kt<Vt.length;Kt++){let ee=Vt[Kt];K(ee,xt,ut),pt.add(ee)}else K(Vt,xt,ut),pt.add(Vt)}),_.pop(),p=null,pt},this.compileAsync=function(D,et,xt=null){let pt=this.compile(D,et,xt);return new Promise(ut=>{function Vt(){if(pt.forEach(function(Kt){$t.get(Kt).currentProgram.isReady()&&pt.delete(Kt)}),pt.size===0){ut(D);return}setTimeout(Vt,10)}_t.get("KHR_parallel_shader_compile")!==null?Vt():setTimeout(Vt,10)})};let Et=null;function Gt(D){Et&&Et(D)}function Ft(){bt.stop()}function Q(){bt.start()}let bt=new du;bt.setAnimationLoop(Gt),typeof self<"u"&&bt.setContext(self),this.setAnimationLoop=function(D){Et=D,Tt.setAnimationLoop(D),D===null?bt.stop():bt.start()},Tt.addEventListener("sessionstart",Ft),Tt.addEventListener("sessionend",Q),this.render=function(D,et){if(et!==void 0&&et.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;if(D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),et.parent===null&&et.matrixWorldAutoUpdate===!0&&et.updateMatrixWorld(),Tt.enabled===!0&&Tt.isPresenting===!0&&(Tt.cameraAutoUpdate===!0&&Tt.updateCamera(et),et=Tt.getCamera()),D.isScene===!0&&D.onBeforeRender(v,D,et,R),p=wt.get(D,_.length),p.init(et),_.push(p),ct.multiplyMatrices(et.projectionMatrix,et.matrixWorldInverse),U.setFromProjectionMatrix(ct),j=this.localClippingEnabled,Y=Rt.init(this.clippingPlanes,j),m=Mt.get(D,b.length),m.init(),b.push(m),Tt.enabled===!0&&Tt.isPresenting===!0){let Vt=v.xr.getDepthSensingMesh();Vt!==null&&At(Vt,et,-1/0,v.sortObjects)}At(D,et,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(X,it),W=Tt.enabled===!1||Tt.isPresenting===!1||Tt.hasDepthSensing()===!1,W&&Xt.addToRenderList(m,D),this.info.render.frame++,Y===!0&&Rt.beginShadows();let xt=p.state.shadowsArray;Pt.render(xt,D,et),Y===!0&&Rt.endShadows(),this.info.autoReset===!0&&this.info.reset();let pt=m.opaque,ut=m.transmissive;if(p.setupLights(),et.isArrayCamera){let Vt=et.cameras;if(ut.length>0)for(let Kt=0,ee=Vt.length;Kt<ee;Kt++){let oe=Vt[Kt];q(pt,ut,D,oe)}W&&Xt.render(D);for(let Kt=0,ee=Vt.length;Kt<ee;Kt++){let oe=Vt[Kt];Qt(m,D,oe,oe.viewport)}}else ut.length>0&&q(pt,ut,D,et),W&&Xt.render(D),Qt(m,D,et);R!==null&&(B.updateMultisampleRenderTarget(R),B.updateRenderTargetMipmap(R)),D.isScene===!0&&D.onAfterRender(v,D,et),be.resetDefaultState(),x=-1,y=null,_.pop(),_.length>0?(p=_[_.length-1],Y===!0&&Rt.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,b.pop(),b.length>0?m=b[b.length-1]:m=null};function At(D,et,xt,pt){if(D.visible===!1)return;if(D.layers.test(et.layers)){if(D.isGroup)xt=D.renderOrder;else if(D.isLOD)D.autoUpdate===!0&&D.update(et);else if(D.isLight)p.pushLight(D),D.castShadow&&p.pushShadow(D);else if(D.isSprite){if(!D.frustumCulled||U.intersectsSprite(D)){pt&&nt.setFromMatrixPosition(D.matrixWorld).applyMatrix4(ct);let Kt=Z.update(D),ee=D.material;ee.visible&&m.push(D,Kt,ee,xt,nt.z,null)}}else if((D.isMesh||D.isLine||D.isPoints)&&(!D.frustumCulled||U.intersectsObject(D))){let Kt=Z.update(D),ee=D.material;if(pt&&(D.boundingSphere!==void 0?(D.boundingSphere===null&&D.computeBoundingSphere(),nt.copy(D.boundingSphere.center)):(Kt.boundingSphere===null&&Kt.computeBoundingSphere(),nt.copy(Kt.boundingSphere.center)),nt.applyMatrix4(D.matrixWorld).applyMatrix4(ct)),Array.isArray(ee)){let oe=Kt.groups;for(let fe=0,ve=oe.length;fe<ve;fe++){let ae=oe[fe],Re=ee[ae.materialIndex];Re&&Re.visible&&m.push(D,Kt,Re,xt,nt.z,ae)}}else ee.visible&&m.push(D,Kt,ee,xt,nt.z,null)}}let Vt=D.children;for(let Kt=0,ee=Vt.length;Kt<ee;Kt++)At(Vt[Kt],et,xt,pt)}function Qt(D,et,xt,pt){let ut=D.opaque,Vt=D.transmissive,Kt=D.transparent;p.setupLightsView(xt),Y===!0&&Rt.setGlobalState(v.clippingPlanes,xt),pt&&It.viewport(S.copy(pt)),ut.length>0&&st(ut,et,xt),Vt.length>0&&st(Vt,et,xt),Kt.length>0&&st(Kt,et,xt),It.buffers.depth.setTest(!0),It.buffers.depth.setMask(!0),It.buffers.color.setMask(!0),It.setPolygonOffset(!1)}function q(D,et,xt,pt){if((xt.isScene===!0?xt.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[pt.id]===void 0&&(p.state.transmissionRenderTarget[pt.id]=new vi(1,1,{generateMipmaps:!0,type:_t.has("EXT_color_buffer_half_float")||_t.has("EXT_color_buffer_float")?Gr:xi,minFilter:os,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Te.workingColorSpace}));let Vt=p.state.transmissionRenderTarget[pt.id],Kt=pt.viewport||S;Vt.setSize(Kt.z,Kt.w);let ee=v.getRenderTarget();v.setRenderTarget(Vt),v.getClearColor(I),N=v.getClearAlpha(),N<1&&v.setClearColor(16777215,.5),v.clear(),W&&Xt.render(xt);let oe=v.toneMapping;v.toneMapping=ii;let fe=pt.viewport;if(pt.viewport!==void 0&&(pt.viewport=void 0),p.setupLightsView(pt),Y===!0&&Rt.setGlobalState(v.clippingPlanes,pt),st(D,xt,pt),B.updateMultisampleRenderTarget(Vt),B.updateRenderTargetMipmap(Vt),_t.has("WEBGL_multisampled_render_to_texture")===!1){let ve=!1;for(let ae=0,Re=et.length;ae<Re;ae++){let Fe=et[ae],Be=Fe.object,Tn=Fe.geometry,Ce=Fe.material,le=Fe.group;if(Ce.side===je&&Be.layers.test(pt.layers)){let ai=Ce.side;Ce.side=un,Ce.needsUpdate=!0,kt(Be,xt,pt,Tn,Ce,le),Ce.side=ai,Ce.needsUpdate=!0,ve=!0}}ve===!0&&(B.updateMultisampleRenderTarget(Vt),B.updateRenderTargetMipmap(Vt))}v.setRenderTarget(ee),v.setClearColor(I,N),fe!==void 0&&(pt.viewport=fe),v.toneMapping=oe}function st(D,et,xt){let pt=et.isScene===!0?et.overrideMaterial:null;for(let ut=0,Vt=D.length;ut<Vt;ut++){let Kt=D[ut],ee=Kt.object,oe=Kt.geometry,fe=pt===null?Kt.material:pt,ve=Kt.group;ee.layers.test(xt.layers)&&kt(ee,et,xt,oe,fe,ve)}}function kt(D,et,xt,pt,ut,Vt){D.onBeforeRender(v,et,xt,pt,ut,Vt),D.modelViewMatrix.multiplyMatrices(xt.matrixWorldInverse,D.matrixWorld),D.normalMatrix.getNormalMatrix(D.modelViewMatrix),ut.onBeforeRender(v,et,xt,pt,D,Vt),ut.transparent===!0&&ut.side===je&&ut.forceSinglePass===!1?(ut.side=un,ut.needsUpdate=!0,v.renderBufferDirect(xt,et,pt,ut,D,Vt),ut.side=Fi,ut.needsUpdate=!0,v.renderBufferDirect(xt,et,pt,ut,D,Vt),ut.side=je):v.renderBufferDirect(xt,et,pt,ut,D,Vt),D.onAfterRender(v,et,xt,pt,ut,Vt)}function Dt(D,et,xt){et.isScene!==!0&&(et=rt);let pt=$t.get(D),ut=p.state.lights,Vt=p.state.shadowsArray,Kt=ut.state.version,ee=ft.getParameters(D,ut.state,Vt,et,xt),oe=ft.getProgramCacheKey(ee),fe=pt.programs;pt.environment=D.isMeshStandardMaterial?et.environment:null,pt.fog=et.fog,pt.envMap=(D.isMeshStandardMaterial?yt:k).get(D.envMap||pt.environment),pt.envMapRotation=pt.environment!==null&&D.envMap===null?et.environmentRotation:D.envMapRotation,fe===void 0&&(D.addEventListener("dispose",J),fe=new Map,pt.programs=fe);let ve=fe.get(oe);if(ve!==void 0){if(pt.currentProgram===ve&&pt.lightsStateVersion===Kt)return Jt(D,ee),ve}else ee.uniforms=ft.getUniforms(D),D.onBeforeCompile(ee,v),ve=ft.acquireProgram(ee,oe),fe.set(oe,ve),pt.uniforms=ee.uniforms;let ae=pt.uniforms;return(!D.isShaderMaterial&&!D.isRawShaderMaterial||D.clipping===!0)&&(ae.clippingPlanes=Rt.uniform),Jt(D,ee),pt.needsLights=Ue(D),pt.lightsStateVersion=Kt,pt.needsLights&&(ae.ambientLightColor.value=ut.state.ambient,ae.lightProbe.value=ut.state.probe,ae.directionalLights.value=ut.state.directional,ae.directionalLightShadows.value=ut.state.directionalShadow,ae.spotLights.value=ut.state.spot,ae.spotLightShadows.value=ut.state.spotShadow,ae.rectAreaLights.value=ut.state.rectArea,ae.ltc_1.value=ut.state.rectAreaLTC1,ae.ltc_2.value=ut.state.rectAreaLTC2,ae.pointLights.value=ut.state.point,ae.pointLightShadows.value=ut.state.pointShadow,ae.hemisphereLights.value=ut.state.hemi,ae.directionalShadowMap.value=ut.state.directionalShadowMap,ae.directionalShadowMatrix.value=ut.state.directionalShadowMatrix,ae.spotShadowMap.value=ut.state.spotShadowMap,ae.spotLightMatrix.value=ut.state.spotLightMatrix,ae.spotLightMap.value=ut.state.spotLightMap,ae.pointShadowMap.value=ut.state.pointShadowMap,ae.pointShadowMatrix.value=ut.state.pointShadowMatrix),pt.currentProgram=ve,pt.uniformsList=null,ve}function Wt(D){if(D.uniformsList===null){let et=D.currentProgram.getUniforms();D.uniformsList=Gs.seqWithValue(et.seq,D.uniforms)}return D.uniformsList}function Jt(D,et){let xt=$t.get(D);xt.outputColorSpace=et.outputColorSpace,xt.batching=et.batching,xt.batchingColor=et.batchingColor,xt.instancing=et.instancing,xt.instancingColor=et.instancingColor,xt.instancingMorph=et.instancingMorph,xt.skinning=et.skinning,xt.morphTargets=et.morphTargets,xt.morphNormals=et.morphNormals,xt.morphColors=et.morphColors,xt.morphTargetsCount=et.morphTargetsCount,xt.numClippingPlanes=et.numClippingPlanes,xt.numIntersection=et.numClipIntersection,xt.vertexAlphas=et.vertexAlphas,xt.vertexTangents=et.vertexTangents,xt.toneMapping=et.toneMapping}function zt(D,et,xt,pt,ut){et.isScene!==!0&&(et=rt),B.resetTextureUnits();let Vt=et.fog,Kt=pt.isMeshStandardMaterial?et.environment:null,ee=R===null?v.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:tr,oe=(pt.isMeshStandardMaterial?yt:k).get(pt.envMap||Kt),fe=pt.vertexColors===!0&&!!xt.attributes.color&&xt.attributes.color.itemSize===4,ve=!!xt.attributes.tangent&&(!!pt.normalMap||pt.anisotropy>0),ae=!!xt.morphAttributes.position,Re=!!xt.morphAttributes.normal,Fe=!!xt.morphAttributes.color,Be=ii;pt.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(Be=v.toneMapping);let Tn=xt.morphAttributes.position||xt.morphAttributes.normal||xt.morphAttributes.color,Ce=Tn!==void 0?Tn.length:0,le=$t.get(pt),ai=p.state.lights;if(Y===!0&&(j===!0||D!==y)){let kn=D===y&&pt.id===x;Rt.setState(pt,D,kn)}let Ie=!1;pt.version===le.__version?(le.needsLights&&le.lightsStateVersion!==ai.state.version||le.outputColorSpace!==ee||ut.isBatchedMesh&&le.batching===!1||!ut.isBatchedMesh&&le.batching===!0||ut.isBatchedMesh&&le.batchingColor===!0&&ut.colorTexture===null||ut.isBatchedMesh&&le.batchingColor===!1&&ut.colorTexture!==null||ut.isInstancedMesh&&le.instancing===!1||!ut.isInstancedMesh&&le.instancing===!0||ut.isSkinnedMesh&&le.skinning===!1||!ut.isSkinnedMesh&&le.skinning===!0||ut.isInstancedMesh&&le.instancingColor===!0&&ut.instanceColor===null||ut.isInstancedMesh&&le.instancingColor===!1&&ut.instanceColor!==null||ut.isInstancedMesh&&le.instancingMorph===!0&&ut.morphTexture===null||ut.isInstancedMesh&&le.instancingMorph===!1&&ut.morphTexture!==null||le.envMap!==oe||pt.fog===!0&&le.fog!==Vt||le.numClippingPlanes!==void 0&&(le.numClippingPlanes!==Rt.numPlanes||le.numIntersection!==Rt.numIntersection)||le.vertexAlphas!==fe||le.vertexTangents!==ve||le.morphTargets!==ae||le.morphNormals!==Re||le.morphColors!==Fe||le.toneMapping!==Be||le.morphTargetsCount!==Ce)&&(Ie=!0):(Ie=!0,le.__version=pt.version);let Hn=le.currentProgram;Ie===!0&&(Hn=Dt(pt,et,ut));let ps=!1,Cn=!1,cr=!1,He=Hn.getUniforms(),Qn=le.uniforms;if(It.useProgram(Hn.program)&&(ps=!0,Cn=!0,cr=!0),pt.id!==x&&(x=pt.id,Cn=!0),ps||y!==D){It.buffers.depth.getReversed()?(G.copy(D.projectionMatrix),gp(G),yp(G),He.setValue(H,"projectionMatrix",G)):He.setValue(H,"projectionMatrix",D.projectionMatrix),He.setValue(H,"viewMatrix",D.matrixWorldInverse);let Ei=He.map.cameraPosition;Ei!==void 0&&Ei.setValue(H,at.setFromMatrixPosition(D.matrixWorld)),St.logarithmicDepthBuffer&&He.setValue(H,"logDepthBufFC",2/(Math.log(D.far+1)/Math.LN2)),(pt.isMeshPhongMaterial||pt.isMeshToonMaterial||pt.isMeshLambertMaterial||pt.isMeshBasicMaterial||pt.isMeshStandardMaterial||pt.isShaderMaterial)&&He.setValue(H,"isOrthographic",D.isOrthographicCamera===!0),y!==D&&(y=D,Cn=!0,cr=!0)}if(ut.isSkinnedMesh){He.setOptional(H,ut,"bindMatrix"),He.setOptional(H,ut,"bindMatrixInverse");let kn=ut.skeleton;kn&&(kn.boneTexture===null&&kn.computeBoneTexture(),He.setValue(H,"boneTexture",kn.boneTexture,B))}ut.isBatchedMesh&&(He.setOptional(H,ut,"batchingTexture"),He.setValue(H,"batchingTexture",ut._matricesTexture,B),He.setOptional(H,ut,"batchingIdTexture"),He.setValue(H,"batchingIdTexture",ut._indirectTexture,B),He.setOptional(H,ut,"batchingColorTexture"),ut._colorsTexture!==null&&He.setValue(H,"batchingColorTexture",ut._colorsTexture,B));let hr=xt.morphAttributes;if((hr.position!==void 0||hr.normal!==void 0||hr.color!==void 0)&&jt.update(ut,xt,Hn),(Cn||le.receiveShadow!==ut.receiveShadow)&&(le.receiveShadow=ut.receiveShadow,He.setValue(H,"receiveShadow",ut.receiveShadow)),pt.isMeshGouraudMaterial&&pt.envMap!==null&&(Qn.envMap.value=oe,Qn.flipEnvMap.value=oe.isCubeTexture&&oe.isRenderTargetTexture===!1?-1:1),pt.isMeshStandardMaterial&&pt.envMap===null&&et.environment!==null&&(Qn.envMapIntensity.value=et.environmentIntensity),Cn&&(He.setValue(H,"toneMappingExposure",v.toneMappingExposure),le.needsLights&&Ae(Qn,cr),Vt&&pt.fog===!0&&ht.refreshFogUniforms(Qn,Vt),ht.refreshMaterialUniforms(Qn,pt,F,z,p.state.transmissionRenderTarget[D.id]),Gs.upload(H,Wt(le),Qn,B)),pt.isShaderMaterial&&pt.uniformsNeedUpdate===!0&&(Gs.upload(H,Wt(le),Qn,B),pt.uniformsNeedUpdate=!1),pt.isSpriteMaterial&&He.setValue(H,"center",ut.center),He.setValue(H,"modelViewMatrix",ut.modelViewMatrix),He.setValue(H,"normalMatrix",ut.normalMatrix),He.setValue(H,"modelMatrix",ut.matrixWorld),pt.isShaderMaterial||pt.isRawShaderMaterial){let kn=pt.uniformsGroups;for(let Ei=0,Ti=kn.length;Ei<Ti;Ei++){let _h=kn[Ei];lt.update(_h,Hn),lt.bind(_h,Hn)}}return Hn}function Ae(D,et){D.ambientLightColor.needsUpdate=et,D.lightProbe.needsUpdate=et,D.directionalLights.needsUpdate=et,D.directionalLightShadows.needsUpdate=et,D.pointLights.needsUpdate=et,D.pointLightShadows.needsUpdate=et,D.spotLights.needsUpdate=et,D.spotLightShadows.needsUpdate=et,D.rectAreaLights.needsUpdate=et,D.hemisphereLights.needsUpdate=et}function Ue(D){return D.isMeshLambertMaterial||D.isMeshToonMaterial||D.isMeshPhongMaterial||D.isMeshStandardMaterial||D.isShadowMaterial||D.isShaderMaterial&&D.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(D,et,xt){$t.get(D.texture).__webglTexture=et,$t.get(D.depthTexture).__webglTexture=xt;let pt=$t.get(D);pt.__hasExternalTextures=!0,pt.__autoAllocateDepthBuffer=xt===void 0,pt.__autoAllocateDepthBuffer||_t.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),pt.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(D,et){let xt=$t.get(D);xt.__webglFramebuffer=et,xt.__useDefaultFramebuffer=et===void 0},this.setRenderTarget=function(D,et=0,xt=0){R=D,T=et,E=xt;let pt=!0,ut=null,Vt=!1,Kt=!1;if(D){let oe=$t.get(D);if(oe.__useDefaultFramebuffer!==void 0)It.bindFramebuffer(H.FRAMEBUFFER,null),pt=!1;else if(oe.__webglFramebuffer===void 0)B.setupRenderTarget(D);else if(oe.__hasExternalTextures)B.rebindTextures(D,$t.get(D.texture).__webglTexture,$t.get(D.depthTexture).__webglTexture);else if(D.depthBuffer){let ae=D.depthTexture;if(oe.__boundDepthTexture!==ae){if(ae!==null&&$t.has(ae)&&(D.width!==ae.image.width||D.height!==ae.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");B.setupDepthRenderbuffer(D)}}let fe=D.texture;(fe.isData3DTexture||fe.isDataArrayTexture||fe.isCompressedArrayTexture)&&(Kt=!0);let ve=$t.get(D).__webglFramebuffer;D.isWebGLCubeRenderTarget?(Array.isArray(ve[et])?ut=ve[et][xt]:ut=ve[et],Vt=!0):D.samples>0&&B.useMultisampledRTT(D)===!1?ut=$t.get(D).__webglMultisampledFramebuffer:Array.isArray(ve)?ut=ve[xt]:ut=ve,S.copy(D.viewport),A.copy(D.scissor),w=D.scissorTest}else S.copy(P).multiplyScalar(F).floor(),A.copy(mt).multiplyScalar(F).floor(),w=Ot;if(It.bindFramebuffer(H.FRAMEBUFFER,ut)&&pt&&It.drawBuffers(D,ut),It.viewport(S),It.scissor(A),It.setScissorTest(w),Vt){let oe=$t.get(D.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+et,oe.__webglTexture,xt)}else if(Kt){let oe=$t.get(D.texture),fe=et||0;H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,oe.__webglTexture,xt||0,fe)}x=-1},this.readRenderTargetPixels=function(D,et,xt,pt,ut,Vt,Kt){if(!(D&&D.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ee=$t.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&Kt!==void 0&&(ee=ee[Kt]),ee){It.bindFramebuffer(H.FRAMEBUFFER,ee);try{let oe=D.texture,fe=oe.format,ve=oe.type;if(!St.textureFormatReadable(fe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!St.textureTypeReadable(ve)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}et>=0&&et<=D.width-pt&&xt>=0&&xt<=D.height-ut&&H.readPixels(et,xt,pt,ut,se.convert(fe),se.convert(ve),Vt)}finally{let oe=R!==null?$t.get(R).__webglFramebuffer:null;It.bindFramebuffer(H.FRAMEBUFFER,oe)}}},this.readRenderTargetPixelsAsync=async function(D,et,xt,pt,ut,Vt,Kt){if(!(D&&D.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ee=$t.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&Kt!==void 0&&(ee=ee[Kt]),ee){let oe=D.texture,fe=oe.format,ve=oe.type;if(!St.textureFormatReadable(fe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!St.textureTypeReadable(ve))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(et>=0&&et<=D.width-pt&&xt>=0&&xt<=D.height-ut){It.bindFramebuffer(H.FRAMEBUFFER,ee);let ae=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,ae),H.bufferData(H.PIXEL_PACK_BUFFER,Vt.byteLength,H.STREAM_READ),H.readPixels(et,xt,pt,ut,se.convert(fe),se.convert(ve),0);let Re=R!==null?$t.get(R).__webglFramebuffer:null;It.bindFramebuffer(H.FRAMEBUFFER,Re);let Fe=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await mp(H,Fe,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,ae),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,Vt),H.deleteBuffer(ae),H.deleteSync(Fe),Vt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(D,et=null,xt=0){D.isTexture!==!0&&(Sr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),et=arguments[0]||null,D=arguments[1]);let pt=Math.pow(2,-xt),ut=Math.floor(D.image.width*pt),Vt=Math.floor(D.image.height*pt),Kt=et!==null?et.x:0,ee=et!==null?et.y:0;B.setTexture2D(D,0),H.copyTexSubImage2D(H.TEXTURE_2D,xt,0,0,Kt,ee,ut,Vt),It.unbindTexture()},this.copyTextureToTexture=function(D,et,xt=null,pt=null,ut=0){D.isTexture!==!0&&(Sr("WebGLRenderer: copyTextureToTexture function signature has changed."),pt=arguments[0]||null,D=arguments[1],et=arguments[2],ut=arguments[3]||0,xt=null);let Vt,Kt,ee,oe,fe,ve,ae,Re,Fe,Be=D.isCompressedTexture?D.mipmaps[ut]:D.image;xt!==null?(Vt=xt.max.x-xt.min.x,Kt=xt.max.y-xt.min.y,ee=xt.isBox3?xt.max.z-xt.min.z:1,oe=xt.min.x,fe=xt.min.y,ve=xt.isBox3?xt.min.z:0):(Vt=Be.width,Kt=Be.height,ee=Be.depth||1,oe=0,fe=0,ve=0),pt!==null?(ae=pt.x,Re=pt.y,Fe=pt.z):(ae=0,Re=0,Fe=0);let Tn=se.convert(et.format),Ce=se.convert(et.type),le;et.isData3DTexture?(B.setTexture3D(et,0),le=H.TEXTURE_3D):et.isDataArrayTexture||et.isCompressedArrayTexture?(B.setTexture2DArray(et,0),le=H.TEXTURE_2D_ARRAY):(B.setTexture2D(et,0),le=H.TEXTURE_2D),H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,et.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,et.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,et.unpackAlignment);let ai=H.getParameter(H.UNPACK_ROW_LENGTH),Ie=H.getParameter(H.UNPACK_IMAGE_HEIGHT),Hn=H.getParameter(H.UNPACK_SKIP_PIXELS),ps=H.getParameter(H.UNPACK_SKIP_ROWS),Cn=H.getParameter(H.UNPACK_SKIP_IMAGES);H.pixelStorei(H.UNPACK_ROW_LENGTH,Be.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Be.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,oe),H.pixelStorei(H.UNPACK_SKIP_ROWS,fe),H.pixelStorei(H.UNPACK_SKIP_IMAGES,ve);let cr=D.isDataArrayTexture||D.isData3DTexture,He=et.isDataArrayTexture||et.isData3DTexture;if(D.isRenderTargetTexture||D.isDepthTexture){let Qn=$t.get(D),hr=$t.get(et),kn=$t.get(Qn.__renderTarget),Ei=$t.get(hr.__renderTarget);It.bindFramebuffer(H.READ_FRAMEBUFFER,kn.__webglFramebuffer),It.bindFramebuffer(H.DRAW_FRAMEBUFFER,Ei.__webglFramebuffer);for(let Ti=0;Ti<ee;Ti++)cr&&H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,$t.get(D).__webglTexture,ut,ve+Ti),D.isDepthTexture?(He&&H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,$t.get(et).__webglTexture,ut,Fe+Ti),H.blitFramebuffer(oe,fe,Vt,Kt,ae,Re,Vt,Kt,H.DEPTH_BUFFER_BIT,H.NEAREST)):He?H.copyTexSubImage3D(le,ut,ae,Re,Fe+Ti,oe,fe,Vt,Kt):H.copyTexSubImage2D(le,ut,ae,Re,Fe+Ti,oe,fe,Vt,Kt);It.bindFramebuffer(H.READ_FRAMEBUFFER,null),It.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else He?D.isDataTexture||D.isData3DTexture?H.texSubImage3D(le,ut,ae,Re,Fe,Vt,Kt,ee,Tn,Ce,Be.data):et.isCompressedArrayTexture?H.compressedTexSubImage3D(le,ut,ae,Re,Fe,Vt,Kt,ee,Tn,Be.data):H.texSubImage3D(le,ut,ae,Re,Fe,Vt,Kt,ee,Tn,Ce,Be):D.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,ut,ae,Re,Vt,Kt,Tn,Ce,Be.data):D.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,ut,ae,Re,Be.width,Be.height,Tn,Be.data):H.texSubImage2D(H.TEXTURE_2D,ut,ae,Re,Vt,Kt,Tn,Ce,Be);H.pixelStorei(H.UNPACK_ROW_LENGTH,ai),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Ie),H.pixelStorei(H.UNPACK_SKIP_PIXELS,Hn),H.pixelStorei(H.UNPACK_SKIP_ROWS,ps),H.pixelStorei(H.UNPACK_SKIP_IMAGES,Cn),ut===0&&et.generateMipmaps&&H.generateMipmap(le),It.unbindTexture()},this.copyTextureToTexture3D=function(D,et,xt=null,pt=null,ut=0){return D.isTexture!==!0&&(Sr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),xt=arguments[0]||null,pt=arguments[1]||null,D=arguments[2],et=arguments[3],ut=arguments[4]||0),Sr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(D,et,xt,pt,ut)},this.initRenderTarget=function(D){$t.get(D).__webglFramebuffer===void 0&&B.setupRenderTarget(D)},this.initTexture=function(D){D.isCubeTexture?B.setTextureCube(D,0):D.isData3DTexture?B.setTexture3D(D,0):D.isDataArrayTexture||D.isCompressedArrayTexture?B.setTexture2DArray(D,0):B.setTexture2D(D,0),It.unbindTexture()},this.resetState=function(){T=0,E=0,R=null,It.reset(),be.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return gi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=Te._getDrawingBufferColorSpace(t),e.unpackColorSpace=Te._getUnpackColorSpace()}};var oa=class n{constructor(t,e=1,i=1e3){this.isFog=!0,this.name="",this.color=new re(t),this.near=e,this.far=i}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},aa=class extends ke{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new qn,this.environmentIntensity=1,this.environmentRotation=new qn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},la=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=uc,this.updateRanges=[],this.version=0,this.uuid=si()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[i+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=si()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=si()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},_n=new $,kr=class n{constructor(t,e,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)_n.fromBufferAttribute(this,e),_n.applyMatrix4(t),this.setXYZ(e,_n.x,_n.y,_n.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)_n.fromBufferAttribute(this,e),_n.applyNormalMatrix(t),this.setXYZ(e,_n.x,_n.y,_n.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)_n.fromBufferAttribute(this,e),_n.transformDirection(t),this.setXYZ(e,_n.x,_n.y,_n.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=Xn(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Pe(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=Pe(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Pe(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Pe(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Pe(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Xn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Xn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Xn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Xn(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=Pe(e,this.array),i=Pe(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Pe(e,this.array),i=Pe(i,this.array),s=Pe(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Pe(e,this.array),i=Pe(i,this.array),s=Pe(s,this.array),r=Pe(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new $e(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new n(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Dr=class extends Mi{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new re(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Ds,yr=new $,Us=new $,Ns=new $,Os=new Bt,xr=new Bt,gu=new we,Io=new $,vr=new $,Po=new $,kd=new Bt,Ml=new Bt,Dd=new Bt,ca=class extends ke{constructor(t=new Dr){if(super(),this.isSprite=!0,this.type="Sprite",Ds===void 0){Ds=new De;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new la(e,5);Ds.setIndex([0,1,2,0,2,3]),Ds.setAttribute("position",new kr(i,3,0,!1)),Ds.setAttribute("uv",new kr(i,2,3,!1))}this.geometry=Ds,this.material=t,this.center=new Bt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Us.setFromMatrixScale(this.matrixWorld),gu.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Ns.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Us.multiplyScalar(-Ns.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let o=this.center;Lo(Io.set(-.5,-.5,0),Ns,o,Us,s,r),Lo(vr.set(.5,-.5,0),Ns,o,Us,s,r),Lo(Po.set(.5,.5,0),Ns,o,Us,s,r),kd.set(0,0),Ml.set(1,0),Dd.set(1,1);let a=t.ray.intersectTriangle(Io,vr,Po,!1,yr);if(a===null&&(Lo(vr.set(-.5,.5,0),Ns,o,Us,s,r),Ml.set(0,1),a=t.ray.intersectTriangle(Io,Po,vr,!1,yr),a===null))return;let l=t.ray.origin.distanceTo(yr);l<t.near||l>t.far||e.push({distance:l,point:yr.clone(),uv:Ui.getInterpolation(yr,Io,vr,Po,kd,Ml,Dd,new Bt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function Lo(n,t,e,i,s,r){Os.subVectors(n,e).addScalar(.5).multiply(i),s!==void 0?(xr.x=r*Os.x-s*Os.y,xr.y=s*Os.x+r*Os.y):xr.copy(Os),n.copy(t),n.x+=xr.x,n.y+=xr.y,n.applyMatrix4(gu)}var Ur=class extends An{constructor(t=null,e=1,i=1,s,r,o,a,l,h=Sn,u=Sn,g,f){super(null,o,a,l,h,u,s,r,g,f),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Nr=class extends $e{constructor(t,e,i,s=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Fs=new we,Ud=new we,ko=[],Nd=new _i,hx=new we,_r=new Ne,Mr=new Bi,en=class extends Ne{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Nr(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,hx)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new _i),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Fs),Nd.copy(t.boundingBox).applyMatrix4(Fs),this.boundingBox.union(Nd)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Bi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Fs),Mr.copy(t.boundingSphere).applyMatrix4(Fs),this.boundingSphere.union(Mr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let i=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=t*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(t,e){let i=this.matrixWorld,s=this.count;if(_r.geometry=this.geometry,_r.material=this.material,_r.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Mr.copy(this.boundingSphere),Mr.applyMatrix4(i),t.ray.intersectsSphere(Mr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Fs),Ud.multiplyMatrices(i,Fs),_r.matrixWorld=Ud,_r.raycast(t,ko);for(let o=0,a=ko.length;o<a;o++){let l=ko[o];l.instanceId=r,l.object=this,e.push(l)}ko.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Nr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let i=e.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new Ur(new Float32Array(s*this.count),s,this.count,th,ni));let r=this.morphTexture.source.data.data,o=0;for(let h=0;h<i.length;h++)o+=i[h];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;r[l]=a,r.set(i,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var cs=class extends Mi{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new re(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},ha=new $,da=new $,Od=new we,br=new Jo,Do=new Bi,bl=new $,Fd=new $,Cc=class extends ke{constructor(t=new De,e=new cs){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[0];for(let s=1,r=e.count;s<r;s++)ha.fromBufferAttribute(e,s-1),da.fromBufferAttribute(e,s),i[s]=i[s-1],i[s]+=ha.distanceTo(da);t.setAttribute("lineDistance",new pe(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let i=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Do.copy(i.boundingSphere),Do.applyMatrix4(s),Do.radius+=r,t.ray.intersectsSphere(Do)===!1)return;Od.copy(s).invert(),br.copy(t.ray).applyMatrix4(Od);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,h=this.isLineSegments?2:1,u=i.index,f=i.attributes.position;if(u!==null){let c=Math.max(0,o.start),d=Math.min(u.count,o.start+o.count);for(let M=c,m=d-1;M<m;M+=h){let p=u.getX(M),b=u.getX(M+1),_=Uo(this,t,br,l,p,b);_&&e.push(_)}if(this.isLineLoop){let M=u.getX(d-1),m=u.getX(c),p=Uo(this,t,br,l,M,m);p&&e.push(p)}}else{let c=Math.max(0,o.start),d=Math.min(f.count,o.start+o.count);for(let M=c,m=d-1;M<m;M+=h){let p=Uo(this,t,br,l,M,M+1);p&&e.push(p)}if(this.isLineLoop){let M=Uo(this,t,br,l,d-1,c);M&&e.push(M)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Uo(n,t,e,i,s,r){let o=n.geometry.attributes.position;if(ha.fromBufferAttribute(o,s),da.fromBufferAttribute(o,r),e.distanceSqToSegment(ha,da,bl,Fd)>i)return;bl.applyMatrix4(n.matrixWorld);let l=t.ray.origin.distanceTo(bl);if(!(l<t.near||l>t.far))return{distance:l,point:Fd.clone().applyMatrix4(n.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:n}}var zd=new $,Bd=new $,Ks=class extends Cc{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[];for(let s=0,r=e.count;s<r;s+=2)zd.fromBufferAttribute(e,s),Bd.fromBufferAttribute(e,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+zd.distanceTo(Bd);t.setAttribute("lineDistance",new pe(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var js=class extends An{constructor(t,e,i,s,r,o,a,l,h){super(t,e,i,s,r,o,a,l,h),this.isCanvasTexture=!0,this.needsUpdate=!0}},Nn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],i,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)i=this.getPoint(o/t),r+=i.distanceTo(s),e.push(r),s=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let i=this.getLengths(),s=0,r=i.length,o;e?o=e:o=t*i[r-1];let a=0,l=r-1,h;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),h=i[s]-o,h<0)a=s+1;else if(h>0)l=s-1;else{l=s;break}if(s=l,i[s]===o)return s/(r-1);let u=i[s],f=i[s+1]-u,c=(o-u)/f;return(s+c)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new Bt:new $);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e){let i=new $,s=[],r=[],o=[],a=new $,l=new we;for(let c=0;c<=t;c++){let d=c/t;s[c]=this.getTangentAt(d,new $)}r[0]=new $,o[0]=new $;let h=Number.MAX_VALUE,u=Math.abs(s[0].x),g=Math.abs(s[0].y),f=Math.abs(s[0].z);u<=h&&(h=u,i.set(1,0,0)),g<=h&&(h=g,i.set(0,1,0)),f<=h&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let c=1;c<=t;c++){if(r[c]=r[c-1].clone(),o[c]=o[c-1].clone(),a.crossVectors(s[c-1],s[c]),a.length()>Number.EPSILON){a.normalize();let d=Math.acos(dn(s[c-1].dot(s[c]),-1,1));r[c].applyMatrix4(l.makeRotationAxis(a,d))}o[c].crossVectors(s[c],r[c])}if(e===!0){let c=Math.acos(dn(r[0].dot(r[t]),-1,1));c/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(c=-c);for(let d=1;d<=t;d++)r[d].applyMatrix4(l.makeRotationAxis(s[d],c*d)),o[d].crossVectors(s[d],r[d])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Or=class extends Nn{constructor(t=0,e=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new Bt){let i=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(a),h=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let u=Math.cos(this.aRotation),g=Math.sin(this.aRotation),f=l-this.aX,c=h-this.aY;l=f*u-c*g+this.aX,h=f*g+c*u+this.aY}return i.set(l,h)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Ic=class extends Or{constructor(t,e,i,s,r,o){super(t,e,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function ah(){let n=0,t=0,e=0,i=0;function s(r,o,a,l){n=r,t=a,e=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,h){s(o,a,h*(a-r),h*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,h,u,g){let f=(o-r)/h-(a-r)/(h+u)+(a-o)/u,c=(a-o)/u-(l-o)/(u+g)+(l-a)/g;f*=u,c*=u,s(o,a,f,c)},calc:function(r){let o=r*r,a=o*r;return n+t*r+e*o+i*a}}}var No=new $,Sl=new ah,wl=new ah,El=new ah,Fr=class extends Nn{constructor(t=[],e=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=s}getPoint(t,e=new $){let i=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let h,u;this.closed||a>0?h=s[(a-1)%r]:(No.subVectors(s[0],s[1]).add(s[0]),h=No);let g=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(No.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=No),this.curveType==="centripetal"||this.curveType==="chordal"){let c=this.curveType==="chordal"?.5:.25,d=Math.pow(h.distanceToSquared(g),c),M=Math.pow(g.distanceToSquared(f),c),m=Math.pow(f.distanceToSquared(u),c);M<1e-4&&(M=1),d<1e-4&&(d=M),m<1e-4&&(m=M),Sl.initNonuniformCatmullRom(h.x,g.x,f.x,u.x,d,M,m),wl.initNonuniformCatmullRom(h.y,g.y,f.y,u.y,d,M,m),El.initNonuniformCatmullRom(h.z,g.z,f.z,u.z,d,M,m)}else this.curveType==="catmullrom"&&(Sl.initCatmullRom(h.x,g.x,f.x,u.x,this.tension),wl.initCatmullRom(h.y,g.y,f.y,u.y,this.tension),El.initCatmullRom(h.z,g.z,f.z,u.z,this.tension));return i.set(Sl.calc(l),wl.calc(l),El.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(new $().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Hd(n,t,e,i,s){let r=(i-t)*.5,o=(s-e)*.5,a=n*n,l=n*a;return(2*e-2*i+r+o)*l+(-3*e+3*i-2*r-o)*a+r*n+e}function dx(n,t){let e=1-n;return e*e*t}function ux(n,t){return 2*(1-n)*n*t}function fx(n,t){return n*n*t}function Rr(n,t,e,i){return dx(n,t)+ux(n,e)+fx(n,i)}function px(n,t){let e=1-n;return e*e*e*t}function mx(n,t){let e=1-n;return 3*e*e*n*t}function gx(n,t){return 3*(1-n)*n*n*t}function yx(n,t){return n*n*n*t}function Cr(n,t,e,i,s){return px(n,t)+mx(n,e)+gx(n,i)+yx(n,s)}var ua=class extends Nn{constructor(t=new Bt,e=new Bt,i=new Bt,s=new Bt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new Bt){let i=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Cr(t,s.x,r.x,o.x,a.x),Cr(t,s.y,r.y,o.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Pc=class extends Nn{constructor(t=new $,e=new $,i=new $,s=new $){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new $){let i=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Cr(t,s.x,r.x,o.x,a.x),Cr(t,s.y,r.y,o.y,a.y),Cr(t,s.z,r.z,o.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},fa=class extends Nn{constructor(t=new Bt,e=new Bt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Bt){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Bt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Lc=class extends Nn{constructor(t=new $,e=new $){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new $){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new $){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},pa=class extends Nn{constructor(t=new Bt,e=new Bt,i=new Bt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new Bt){let i=e,s=this.v0,r=this.v1,o=this.v2;return i.set(Rr(t,s.x,r.x,o.x),Rr(t,s.y,r.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ma=class extends Nn{constructor(t=new $,e=new $,i=new $){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new $){let i=e,s=this.v0,r=this.v1,o=this.v2;return i.set(Rr(t,s.x,r.x,o.x),Rr(t,s.y,r.y,o.y),Rr(t,s.z,r.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ga=class extends Nn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Bt){let i=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],h=s[o],u=s[o>s.length-2?s.length-1:o+1],g=s[o>s.length-3?s.length-1:o+2];return i.set(Hd(a,l.x,h.x,u.x,g.x),Hd(a,l.y,h.y,u.y,g.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(new Bt().fromArray(s))}return this}},ya=Object.freeze({__proto__:null,ArcCurve:Ic,CatmullRomCurve3:Fr,CubicBezierCurve:ua,CubicBezierCurve3:Pc,EllipseCurve:Or,LineCurve:fa,LineCurve3:Lc,QuadraticBezierCurve:pa,QuadraticBezierCurve3:ma,SplineCurve:ga}),kc=class extends Nn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ya[i](e,t))}return this}getPoint(t,e){let i=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let o=s[r]-i,a=this.curves[r],l=a.getLength(),h=l===0?0:1-o/l;return a.getPointAt(h,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let i=0,s=this.curves.length;i<s;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],i;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let h=0;h<l.length;h++){let u=l[h];i&&i.equals(u)||(e.push(u),i=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let s=t.curves[e];this.curves.push(new ya[s.type]().fromJSON(s))}return this}},zr=class extends kc{constructor(t){super(),this.type="Path",this.currentPoint=new Bt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let i=new fa(this.currentPoint.clone(),new Bt(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,s){let r=new pa(this.currentPoint.clone(),new Bt(t,e),new Bt(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(t,e,i,s,r,o){let a=new ua(this.currentPoint.clone(),new Bt(t,e),new Bt(i,s),new Bt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),i=new ga(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,i,s,r,o),this}absarc(t,e,i,s,r,o){return this.absellipse(t,e,i,i,s,r,o),this}ellipse(t,e,i,s,r,o,a,l){let h=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+h,e+u,i,s,r,o,a,l),this}absellipse(t,e,i,s,r,o,a,l){let h=new Or(t,e,i,s,r,o,a,l);if(this.curves.length>0){let g=h.getPoint(0);g.equals(this.currentPoint)||this.lineTo(g.x,g.y)}this.curves.push(h);let u=h.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Br=class n extends De{constructor(t=[new Bt(0,-.5),new Bt(.5,0),new Bt(0,.5)],e=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:i,phiLength:s},e=Math.floor(e),s=dn(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],h=[],u=1/e,g=new $,f=new Bt,c=new $,d=new $,M=new $,m=0,p=0;for(let b=0;b<=t.length-1;b++)switch(b){case 0:m=t[b+1].x-t[b].x,p=t[b+1].y-t[b].y,c.x=p*1,c.y=-m,c.z=p*0,M.copy(c),c.normalize(),l.push(c.x,c.y,c.z);break;case t.length-1:l.push(M.x,M.y,M.z);break;default:m=t[b+1].x-t[b].x,p=t[b+1].y-t[b].y,c.x=p*1,c.y=-m,c.z=p*0,d.copy(c),c.x+=M.x,c.y+=M.y,c.z+=M.z,c.normalize(),l.push(c.x,c.y,c.z),M.copy(d)}for(let b=0;b<=e;b++){let _=i+b*u*s,v=Math.sin(_),L=Math.cos(_);for(let T=0;T<=t.length-1;T++){g.x=t[T].x*v,g.y=t[T].y,g.z=t[T].x*L,o.push(g.x,g.y,g.z),f.x=b/e,f.y=T/(t.length-1),a.push(f.x,f.y);let E=l[3*T+0]*v,R=l[3*T+1],x=l[3*T+0]*L;h.push(E,R,x)}}for(let b=0;b<e;b++)for(let _=0;_<t.length-1;_++){let v=_+b*t.length,L=v,T=v+t.length,E=v+t.length+1,R=v+1;r.push(L,T,R),r.push(E,R,T)}this.setIndex(r),this.setAttribute("position",new pe(o,3)),this.setAttribute("uv",new pe(a,2)),this.setAttribute("normal",new pe(h,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.points,t.segments,t.phiStart,t.phiLength)}},Yn=class n extends Br{constructor(t=1,e=1,i=4,s=8){let r=new zr;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(i),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:i,radialSegments:s}}static fromJSON(t){return new n(t.radius,t.length,t.capSegments,t.radialSegments)}};var ce=class n extends De{constructor(t=1,e=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let h=this;s=Math.floor(s),r=Math.floor(r);let u=[],g=[],f=[],c=[],d=0,M=[],m=i/2,p=0;b(),o===!1&&(t>0&&_(!0),e>0&&_(!1)),this.setIndex(u),this.setAttribute("position",new pe(g,3)),this.setAttribute("normal",new pe(f,3)),this.setAttribute("uv",new pe(c,2));function b(){let v=new $,L=new $,T=0,E=(e-t)/i;for(let R=0;R<=r;R++){let x=[],y=R/r,S=y*(e-t)+t;for(let A=0;A<=s;A++){let w=A/s,I=w*l+a,N=Math.sin(I),O=Math.cos(I);L.x=S*N,L.y=-y*i+m,L.z=S*O,g.push(L.x,L.y,L.z),v.set(N,E,O).normalize(),f.push(v.x,v.y,v.z),c.push(w,1-y),x.push(d++)}M.push(x)}for(let R=0;R<s;R++)for(let x=0;x<r;x++){let y=M[x][R],S=M[x+1][R],A=M[x+1][R+1],w=M[x][R+1];(t>0||x!==0)&&(u.push(y,S,w),T+=3),(e>0||x!==r-1)&&(u.push(S,A,w),T+=3)}h.addGroup(p,T,0),p+=T}function _(v){let L=d,T=new Bt,E=new $,R=0,x=v===!0?t:e,y=v===!0?1:-1;for(let A=1;A<=s;A++)g.push(0,m*y,0),f.push(0,y,0),c.push(.5,.5),d++;let S=d;for(let A=0;A<=s;A++){let I=A/s*l+a,N=Math.cos(I),O=Math.sin(I);E.x=x*O,E.y=m*y,E.z=x*N,g.push(E.x,E.y,E.z),f.push(0,y,0),T.x=N*.5+.5,T.y=O*.5*y+.5,c.push(T.x,T.y),d++}for(let A=0;A<s;A++){let w=L+A,I=S+A;v===!0?u.push(I,I+1,w):u.push(I+1,I,w),R+=3}h.addGroup(p,R,v===!0?1:2),p+=R}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},qe=class n extends ce{constructor(t=1,e=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new n(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Dc=class n extends De{constructor(t=[],e=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:s};let r=[],o=[];a(s),h(i),u(),this.setAttribute("position",new pe(r,3)),this.setAttribute("normal",new pe(r.slice(),3)),this.setAttribute("uv",new pe(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(b){let _=new $,v=new $,L=new $;for(let T=0;T<e.length;T+=3)c(e[T+0],_),c(e[T+1],v),c(e[T+2],L),l(_,v,L,b)}function l(b,_,v,L){let T=L+1,E=[];for(let R=0;R<=T;R++){E[R]=[];let x=b.clone().lerp(v,R/T),y=_.clone().lerp(v,R/T),S=T-R;for(let A=0;A<=S;A++)A===0&&R===T?E[R][A]=x:E[R][A]=x.clone().lerp(y,A/S)}for(let R=0;R<T;R++)for(let x=0;x<2*(T-R)-1;x++){let y=Math.floor(x/2);x%2===0?(f(E[R][y+1]),f(E[R+1][y]),f(E[R][y])):(f(E[R][y+1]),f(E[R+1][y+1]),f(E[R+1][y]))}}function h(b){let _=new $;for(let v=0;v<r.length;v+=3)_.x=r[v+0],_.y=r[v+1],_.z=r[v+2],_.normalize().multiplyScalar(b),r[v+0]=_.x,r[v+1]=_.y,r[v+2]=_.z}function u(){let b=new $;for(let _=0;_<r.length;_+=3){b.x=r[_+0],b.y=r[_+1],b.z=r[_+2];let v=m(b)/2/Math.PI+.5,L=p(b)/Math.PI+.5;o.push(v,1-L)}d(),g()}function g(){for(let b=0;b<o.length;b+=6){let _=o[b+0],v=o[b+2],L=o[b+4],T=Math.max(_,v,L),E=Math.min(_,v,L);T>.9&&E<.1&&(_<.2&&(o[b+0]+=1),v<.2&&(o[b+2]+=1),L<.2&&(o[b+4]+=1))}}function f(b){r.push(b.x,b.y,b.z)}function c(b,_){let v=b*3;_.x=t[v+0],_.y=t[v+1],_.z=t[v+2]}function d(){let b=new $,_=new $,v=new $,L=new $,T=new Bt,E=new Bt,R=new Bt;for(let x=0,y=0;x<r.length;x+=9,y+=6){b.set(r[x+0],r[x+1],r[x+2]),_.set(r[x+3],r[x+4],r[x+5]),v.set(r[x+6],r[x+7],r[x+8]),T.set(o[y+0],o[y+1]),E.set(o[y+2],o[y+3]),R.set(o[y+4],o[y+5]),L.copy(b).add(_).add(v).divideScalar(3);let S=m(L);M(T,y+0,b,S),M(E,y+2,_,S),M(R,y+4,v,S)}}function M(b,_,v,L){L<0&&b.x===1&&(o[_]=b.x-1),v.x===0&&v.z===0&&(o[_]=L/2/Math.PI+.5)}function m(b){return Math.atan2(b.z,-b.x)}function p(b){return Math.atan2(-b.y,Math.sqrt(b.x*b.x+b.z*b.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.vertices,t.indices,t.radius,t.details)}};var hs=class extends zr{constructor(t){super(t),this.uuid=si(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let i=0,s=this.holes.length;i<s;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let s=t.holes[e];this.holes.push(new zr().fromJSON(s))}return this}},xx={triangulate:function(n,t,e=2){let i=t&&t.length,s=i?t[0]*e:n.length,r=yu(n,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,h,u,g,f,c;if(i&&(r=Sx(n,t,r,e)),n.length>80*e){a=h=n[0],l=u=n[1];for(let d=e;d<s;d+=e)g=n[d],f=n[d+1],g<a&&(a=g),f<l&&(l=f),g>h&&(h=g),f>u&&(u=f);c=Math.max(h-a,u-l),c=c!==0?32767/c:0}return Hr(r,o,e,a,l,c,0),o}};function yu(n,t,e,i,s){let r,o;if(s===Dx(n,t,e,i)>0)for(r=t;r<e;r+=i)o=$d(r,n[r],n[r+1],o);else for(r=e-i;r>=t;r-=i)o=$d(r,n[r],n[r+1],o);return o&&Ia(o,o.next)&&(Vr(o),o=o.next),o}function ds(n,t){if(!n)return n;t||(t=n);let e=n,i;do if(i=!1,!e.steiner&&(Ia(e,e.next)||Xe(e.prev,e,e.next)===0)){if(Vr(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function Hr(n,t,e,i,s,r,o){if(!n)return;!o&&r&&Rx(n,i,s,r);let a=n,l,h;for(;n.prev!==n.next;){if(l=n.prev,h=n.next,r?_x(n,i,s,r):vx(n)){t.push(l.i/e|0),t.push(n.i/e|0),t.push(h.i/e|0),Vr(n),n=h.next,a=h.next;continue}if(n=h,n===a){o?o===1?(n=Mx(ds(n),t,e),Hr(n,t,e,i,s,r,2)):o===2&&bx(n,t,e,i,s,r):Hr(ds(n),t,e,i,s,r,1);break}}}function vx(n){let t=n.prev,e=n,i=n.next;if(Xe(t,e,i)>=0)return!1;let s=t.x,r=e.x,o=i.x,a=t.y,l=e.y,h=i.y,u=s<r?s<o?s:o:r<o?r:o,g=a<l?a<h?a:h:l<h?l:h,f=s>r?s>o?s:o:r>o?r:o,c=a>l?a>h?a:h:l>h?l:h,d=i.next;for(;d!==t;){if(d.x>=u&&d.x<=f&&d.y>=g&&d.y<=c&&Bs(s,a,r,l,o,h,d.x,d.y)&&Xe(d.prev,d,d.next)>=0)return!1;d=d.next}return!0}function _x(n,t,e,i){let s=n.prev,r=n,o=n.next;if(Xe(s,r,o)>=0)return!1;let a=s.x,l=r.x,h=o.x,u=s.y,g=r.y,f=o.y,c=a<l?a<h?a:h:l<h?l:h,d=u<g?u<f?u:f:g<f?g:f,M=a>l?a>h?a:h:l>h?l:h,m=u>g?u>f?u:f:g>f?g:f,p=Uc(c,d,t,e,i),b=Uc(M,m,t,e,i),_=n.prevZ,v=n.nextZ;for(;_&&_.z>=p&&v&&v.z<=b;){if(_.x>=c&&_.x<=M&&_.y>=d&&_.y<=m&&_!==s&&_!==o&&Bs(a,u,l,g,h,f,_.x,_.y)&&Xe(_.prev,_,_.next)>=0||(_=_.prevZ,v.x>=c&&v.x<=M&&v.y>=d&&v.y<=m&&v!==s&&v!==o&&Bs(a,u,l,g,h,f,v.x,v.y)&&Xe(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;_&&_.z>=p;){if(_.x>=c&&_.x<=M&&_.y>=d&&_.y<=m&&_!==s&&_!==o&&Bs(a,u,l,g,h,f,_.x,_.y)&&Xe(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;v&&v.z<=b;){if(v.x>=c&&v.x<=M&&v.y>=d&&v.y<=m&&v!==s&&v!==o&&Bs(a,u,l,g,h,f,v.x,v.y)&&Xe(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function Mx(n,t,e){let i=n;do{let s=i.prev,r=i.next.next;!Ia(s,r)&&xu(s,i,i.next,r)&&$r(s,r)&&$r(r,s)&&(t.push(s.i/e|0),t.push(i.i/e|0),t.push(r.i/e|0),Vr(i),Vr(i.next),i=n=r),i=i.next}while(i!==n);return ds(i)}function bx(n,t,e,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Px(o,a)){let l=vu(o,a);o=ds(o,o.next),l=ds(l,l.next),Hr(o,t,e,i,s,r,0),Hr(l,t,e,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function Sx(n,t,e,i){let s=[],r,o,a,l,h;for(r=0,o=t.length;r<o;r++)a=t[r]*i,l=r<o-1?t[r+1]*i:n.length,h=yu(n,a,l,i,!1),h===h.next&&(h.steiner=!0),s.push(Ix(h));for(s.sort(wx),r=0;r<s.length;r++)e=Ex(s[r],e);return e}function wx(n,t){return n.x-t.x}function Ex(n,t){let e=Tx(n,t);if(!e)return t;let i=vu(e,n);return ds(i,i.next),ds(e,e.next)}function Tx(n,t){let e=t,i=-1/0,s,r=n.x,o=n.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){let f=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=r&&f>i&&(i=f,s=e.x<e.next.x?e:e.next,f===r))return s}e=e.next}while(e!==t);if(!s)return null;let a=s,l=s.x,h=s.y,u=1/0,g;e=s;do r>=e.x&&e.x>=l&&r!==e.x&&Bs(o<h?r:i,o,l,h,o<h?i:r,o,e.x,e.y)&&(g=Math.abs(o-e.y)/(r-e.x),$r(e,n)&&(g<u||g===u&&(e.x>s.x||e.x===s.x&&Ax(s,e)))&&(s=e,u=g)),e=e.next;while(e!==a);return s}function Ax(n,t){return Xe(n.prev,n,t.prev)<0&&Xe(t.next,n,n.next)<0}function Rx(n,t,e,i){let s=n;do s.z===0&&(s.z=Uc(s.x,s.y,t,e,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,Cx(s)}function Cx(n){let t,e,i,s,r,o,a,l,h=1;do{for(e=n,n=null,r=null,o=0;e;){for(o++,i=e,a=0,t=0;t<h&&(a++,i=i.nextZ,!!i);t++);for(l=h;a>0||l>0&&i;)a!==0&&(l===0||!i||e.z<=i.z)?(s=e,e=e.nextZ,a--):(s=i,i=i.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;e=i}r.nextZ=null,h*=2}while(o>1);return n}function Uc(n,t,e,i,s){return n=(n-e)*s|0,t=(t-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,n|t<<1}function Ix(n){let t=n,e=n;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==n);return e}function Bs(n,t,e,i,s,r,o,a){return(s-o)*(t-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(i-a)}function Px(n,t){return n.next.i!==t.i&&n.prev.i!==t.i&&!Lx(n,t)&&($r(n,t)&&$r(t,n)&&kx(n,t)&&(Xe(n.prev,n,t.prev)||Xe(n,t.prev,t))||Ia(n,t)&&Xe(n.prev,n,n.next)>0&&Xe(t.prev,t,t.next)>0)}function Xe(n,t,e){return(t.y-n.y)*(e.x-t.x)-(t.x-n.x)*(e.y-t.y)}function Ia(n,t){return n.x===t.x&&n.y===t.y}function xu(n,t,e,i){let s=Fo(Xe(n,t,e)),r=Fo(Xe(n,t,i)),o=Fo(Xe(e,i,n)),a=Fo(Xe(e,i,t));return!!(s!==r&&o!==a||s===0&&Oo(n,e,t)||r===0&&Oo(n,i,t)||o===0&&Oo(e,n,i)||a===0&&Oo(e,t,i))}function Oo(n,t,e){return t.x<=Math.max(n.x,e.x)&&t.x>=Math.min(n.x,e.x)&&t.y<=Math.max(n.y,e.y)&&t.y>=Math.min(n.y,e.y)}function Fo(n){return n>0?1:n<0?-1:0}function Lx(n,t){let e=n;do{if(e.i!==n.i&&e.next.i!==n.i&&e.i!==t.i&&e.next.i!==t.i&&xu(e,e.next,n,t))return!0;e=e.next}while(e!==n);return!1}function $r(n,t){return Xe(n.prev,n,n.next)<0?Xe(n,t,n.next)>=0&&Xe(n,n.prev,t)>=0:Xe(n,t,n.prev)<0||Xe(n,n.next,t)<0}function kx(n,t){let e=n,i=!1,s=(n.x+t.x)/2,r=(n.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==n);return i}function vu(n,t){let e=new Nc(n.i,n.x,n.y),i=new Nc(t.i,t.x,t.y),s=n.next,r=t.prev;return n.next=t,t.prev=n,e.next=s,s.prev=e,i.next=e,e.prev=i,r.next=i,i.prev=r,i}function $d(n,t,e,i){let s=new Nc(n,t,e);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function Vr(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Nc(n,t,e){this.i=n,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Dx(n,t,e,i){let s=0;for(let r=t,o=e-i;r<e;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}var Oi=class n{static area(t){let e=t.length,i=0;for(let s=e-1,r=0;r<e;s=r++)i+=t[s].x*t[r].y-t[r].x*t[s].y;return i*.5}static isClockWise(t){return n.area(t)<0}static triangulateShape(t,e){let i=[],s=[],r=[];Vd(t),Gd(i,t);let o=t.length;e.forEach(Vd);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,Gd(i,e[l]);let a=xx.triangulate(i,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function Vd(n){let t=n.length;t>2&&n[t-1].equals(n[0])&&n.pop()}function Gd(n,t){for(let e=0;e<t.length;e++)n.push(t[e].x),n.push(t[e].y)}var xa=class n extends De{constructor(t=new hs([new Bt(.5,.5),new Bt(-.5,.5),new Bt(-.5,-.5),new Bt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let i=this,s=[],r=[];for(let a=0,l=t.length;a<l;a++){let h=t[a];o(h)}this.setAttribute("position",new pe(s,3)),this.setAttribute("uv",new pe(r,2)),this.computeVertexNormals();function o(a){let l=[],h=e.curveSegments!==void 0?e.curveSegments:12,u=e.steps!==void 0?e.steps:1,g=e.depth!==void 0?e.depth:1,f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,c=e.bevelThickness!==void 0?e.bevelThickness:.2,d=e.bevelSize!==void 0?e.bevelSize:c-.1,M=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3,p=e.extrudePath,b=e.UVGenerator!==void 0?e.UVGenerator:Ux,_,v=!1,L,T,E,R;p&&(_=p.getSpacedPoints(u),v=!0,f=!1,L=p.computeFrenetFrames(u,!1),T=new $,E=new $,R=new $),f||(m=0,c=0,d=0,M=0);let x=a.extractPoints(h),y=x.shape,S=x.holes;if(!Oi.isClockWise(y)){y=y.reverse();for(let W=0,dt=S.length;W<dt;W++){let H=S[W];Oi.isClockWise(H)&&(S[W]=H.reverse())}}let w=Oi.triangulateShape(y,S),I=y;for(let W=0,dt=S.length;W<dt;W++){let H=S[W];y=y.concat(H)}function N(W,dt,H){return dt||console.error("THREE.ExtrudeGeometry: vec does not exist"),W.clone().addScaledVector(dt,H)}let O=y.length,z=w.length;function F(W,dt,H){let Ut,_t,St,It=W.x-dt.x,tt=W.y-dt.y,$t=H.x-W.x,B=H.y-W.y,k=It*It+tt*tt,yt=It*B-tt*$t;if(Math.abs(yt)>Number.EPSILON){let Ct=Math.sqrt(k),Lt=Math.sqrt($t*$t+B*B),Z=dt.x-tt/Ct,ft=dt.y+It/Ct,ht=H.x-B/Lt,Mt=H.y+$t/Lt,wt=((ht-Z)*B-(Mt-ft)*$t)/(It*B-tt*$t);Ut=Z+It*wt-W.x,_t=ft+tt*wt-W.y;let Rt=Ut*Ut+_t*_t;if(Rt<=2)return new Bt(Ut,_t);St=Math.sqrt(Rt/2)}else{let Ct=!1;It>Number.EPSILON?$t>Number.EPSILON&&(Ct=!0):It<-Number.EPSILON?$t<-Number.EPSILON&&(Ct=!0):Math.sign(tt)===Math.sign(B)&&(Ct=!0),Ct?(Ut=-tt,_t=It,St=Math.sqrt(k)):(Ut=It,_t=tt,St=Math.sqrt(k/2))}return new Bt(Ut/St,_t/St)}let X=[];for(let W=0,dt=I.length,H=dt-1,Ut=W+1;W<dt;W++,H++,Ut++)H===dt&&(H=0),Ut===dt&&(Ut=0),X[W]=F(I[W],I[H],I[Ut]);let it=[],P,mt=X.concat();for(let W=0,dt=S.length;W<dt;W++){let H=S[W];P=[];for(let Ut=0,_t=H.length,St=_t-1,It=Ut+1;Ut<_t;Ut++,St++,It++)St===_t&&(St=0),It===_t&&(It=0),P[Ut]=F(H[Ut],H[St],H[It]);it.push(P),mt=mt.concat(P)}for(let W=0;W<m;W++){let dt=W/m,H=c*Math.cos(dt*Math.PI/2),Ut=d*Math.sin(dt*Math.PI/2)+M;for(let _t=0,St=I.length;_t<St;_t++){let It=N(I[_t],X[_t],Ut);G(It.x,It.y,-H)}for(let _t=0,St=S.length;_t<St;_t++){let It=S[_t];P=it[_t];for(let tt=0,$t=It.length;tt<$t;tt++){let B=N(It[tt],P[tt],Ut);G(B.x,B.y,-H)}}}let Ot=d+M;for(let W=0;W<O;W++){let dt=f?N(y[W],mt[W],Ot):y[W];v?(E.copy(L.normals[0]).multiplyScalar(dt.x),T.copy(L.binormals[0]).multiplyScalar(dt.y),R.copy(_[0]).add(E).add(T),G(R.x,R.y,R.z)):G(dt.x,dt.y,0)}for(let W=1;W<=u;W++)for(let dt=0;dt<O;dt++){let H=f?N(y[dt],mt[dt],Ot):y[dt];v?(E.copy(L.normals[W]).multiplyScalar(H.x),T.copy(L.binormals[W]).multiplyScalar(H.y),R.copy(_[W]).add(E).add(T),G(R.x,R.y,R.z)):G(H.x,H.y,g/u*W)}for(let W=m-1;W>=0;W--){let dt=W/m,H=c*Math.cos(dt*Math.PI/2),Ut=d*Math.sin(dt*Math.PI/2)+M;for(let _t=0,St=I.length;_t<St;_t++){let It=N(I[_t],X[_t],Ut);G(It.x,It.y,g+H)}for(let _t=0,St=S.length;_t<St;_t++){let It=S[_t];P=it[_t];for(let tt=0,$t=It.length;tt<$t;tt++){let B=N(It[tt],P[tt],Ut);v?G(B.x,B.y+_[u-1].y,_[u-1].x+H):G(B.x,B.y,g+H)}}}U(),Y();function U(){let W=s.length/3;if(f){let dt=0,H=O*dt;for(let Ut=0;Ut<z;Ut++){let _t=w[Ut];ct(_t[2]+H,_t[1]+H,_t[0]+H)}dt=u+m*2,H=O*dt;for(let Ut=0;Ut<z;Ut++){let _t=w[Ut];ct(_t[0]+H,_t[1]+H,_t[2]+H)}}else{for(let dt=0;dt<z;dt++){let H=w[dt];ct(H[2],H[1],H[0])}for(let dt=0;dt<z;dt++){let H=w[dt];ct(H[0]+O*u,H[1]+O*u,H[2]+O*u)}}i.addGroup(W,s.length/3-W,0)}function Y(){let W=s.length/3,dt=0;j(I,dt),dt+=I.length;for(let H=0,Ut=S.length;H<Ut;H++){let _t=S[H];j(_t,dt),dt+=_t.length}i.addGroup(W,s.length/3-W,1)}function j(W,dt){let H=W.length;for(;--H>=0;){let Ut=H,_t=H-1;_t<0&&(_t=W.length-1);for(let St=0,It=u+m*2;St<It;St++){let tt=O*St,$t=O*(St+1),B=dt+Ut+tt,k=dt+_t+tt,yt=dt+_t+$t,Ct=dt+Ut+$t;at(B,k,yt,Ct)}}}function G(W,dt,H){l.push(W),l.push(dt),l.push(H)}function ct(W,dt,H){nt(W),nt(dt),nt(H);let Ut=s.length/3,_t=b.generateTopUV(i,s,Ut-3,Ut-2,Ut-1);rt(_t[0]),rt(_t[1]),rt(_t[2])}function at(W,dt,H,Ut){nt(W),nt(dt),nt(Ut),nt(dt),nt(H),nt(Ut);let _t=s.length/3,St=b.generateSideWallUV(i,s,_t-6,_t-3,_t-2,_t-1);rt(St[0]),rt(St[1]),rt(St[3]),rt(St[1]),rt(St[2]),rt(St[3])}function nt(W){s.push(l[W*3+0]),s.push(l[W*3+1]),s.push(l[W*3+2])}function rt(W){r.push(W.x),r.push(W.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,i=this.parameters.options;return Nx(e,i,t)}static fromJSON(t,e){let i=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];i.push(a)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new ya[s.type]().fromJSON(s)),new n(i,t.options)}},Ux={generateTopUV:function(n,t,e,i,s){let r=t[e*3],o=t[e*3+1],a=t[i*3],l=t[i*3+1],h=t[s*3],u=t[s*3+1];return[new Bt(r,o),new Bt(a,l),new Bt(h,u)]},generateSideWallUV:function(n,t,e,i,s,r){let o=t[e*3],a=t[e*3+1],l=t[e*3+2],h=t[i*3],u=t[i*3+1],g=t[i*3+2],f=t[s*3],c=t[s*3+1],d=t[s*3+2],M=t[r*3],m=t[r*3+1],p=t[r*3+2];return Math.abs(a-u)<Math.abs(o-h)?[new Bt(o,1-l),new Bt(h,1-g),new Bt(f,1-d),new Bt(M,1-p)]:[new Bt(a,1-l),new Bt(u,1-g),new Bt(c,1-d),new Bt(m,1-p)]}};function Nx(n,t,e){if(e.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){let r=n[i];e.shapes.push(r.uuid)}else e.shapes.push(n.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var nn=class n extends Dc{constructor(t=1,e=0){let i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new n(t.radius,t.detail)}};var va=class n extends De{constructor(t=.5,e=1,i=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:o},i=Math.max(3,i),s=Math.max(1,s);let a=[],l=[],h=[],u=[],g=t,f=(e-t)/s,c=new $,d=new Bt;for(let M=0;M<=s;M++){for(let m=0;m<=i;m++){let p=r+m/i*o;c.x=g*Math.cos(p),c.y=g*Math.sin(p),l.push(c.x,c.y,c.z),h.push(0,0,1),d.x=(c.x/e+1)/2,d.y=(c.y/e+1)/2,u.push(d.x,d.y)}g+=f}for(let M=0;M<s;M++){let m=M*(i+1);for(let p=0;p<i;p++){let b=p+m,_=b,v=b+i+1,L=b+i+2,T=b+1;a.push(_,v,T),a.push(v,L,T)}}this.setIndex(a),this.setAttribute("position",new pe(l,3)),this.setAttribute("normal",new pe(h,3)),this.setAttribute("uv",new pe(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},_a=class n extends De{constructor(t=new hs([new Bt(0,.5),new Bt(-.5,-.5),new Bt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let i=[],s=[],r=[],o=[],a=0,l=0;if(Array.isArray(t)===!1)h(t);else for(let u=0;u<t.length;u++)h(t[u]),this.addGroup(a,l,u),a+=l,l=0;this.setIndex(i),this.setAttribute("position",new pe(s,3)),this.setAttribute("normal",new pe(r,3)),this.setAttribute("uv",new pe(o,2));function h(u){let g=s.length/3,f=u.extractPoints(e),c=f.shape,d=f.holes;Oi.isClockWise(c)===!1&&(c=c.reverse());for(let m=0,p=d.length;m<p;m++){let b=d[m];Oi.isClockWise(b)===!0&&(d[m]=b.reverse())}let M=Oi.triangulateShape(c,d);for(let m=0,p=d.length;m<p;m++){let b=d[m];c=c.concat(b)}for(let m=0,p=c.length;m<p;m++){let b=c[m];s.push(b.x,b.y,0),r.push(0,0,1),o.push(b.x,b.y)}for(let m=0,p=M.length;m<p;m++){let b=M[m],_=b[0]+g,v=b[1]+g,L=b[2]+g;i.push(_,v,L),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return Ox(e,t)}static fromJSON(t,e){let i=[];for(let s=0,r=t.shapes.length;s<r;s++){let o=e[t.shapes[s]];i.push(o)}return new n(i,t.curveSegments)}};function Ox(n,t){if(t.shapes=[],Array.isArray(n))for(let e=0,i=n.length;e<i;e++){let s=n[e];t.shapes.push(s.uuid)}else t.shapes.push(n.uuid);return t}var ge=class n extends De{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),h=0,u=[],g=new $,f=new $,c=[],d=[],M=[],m=[];for(let p=0;p<=i;p++){let b=[],_=p/i,v=0;p===0&&o===0?v=.5/e:p===i&&l===Math.PI&&(v=-.5/e);for(let L=0;L<=e;L++){let T=L/e;g.x=-t*Math.cos(s+T*r)*Math.sin(o+_*a),g.y=t*Math.cos(o+_*a),g.z=t*Math.sin(s+T*r)*Math.sin(o+_*a),d.push(g.x,g.y,g.z),f.copy(g).normalize(),M.push(f.x,f.y,f.z),m.push(T+v,1-_),b.push(h++)}u.push(b)}for(let p=0;p<i;p++)for(let b=0;b<e;b++){let _=u[p][b+1],v=u[p][b],L=u[p+1][b],T=u[p+1][b+1];(p!==0||o>0)&&c.push(_,v,T),(p!==i-1||l<Math.PI)&&c.push(v,L,T)}this.setIndex(c),this.setAttribute("position",new pe(d,3)),this.setAttribute("normal",new pe(M,3)),this.setAttribute("uv",new pe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Je=class n extends De{constructor(t=1,e=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);let o=[],a=[],l=[],h=[],u=new $,g=new $,f=new $;for(let c=0;c<=i;c++)for(let d=0;d<=s;d++){let M=d/s*r,m=c/i*Math.PI*2;g.x=(t+e*Math.cos(m))*Math.cos(M),g.y=(t+e*Math.cos(m))*Math.sin(M),g.z=e*Math.sin(m),a.push(g.x,g.y,g.z),u.x=t*Math.cos(M),u.y=t*Math.sin(M),f.subVectors(g,u).normalize(),l.push(f.x,f.y,f.z),h.push(d/s),h.push(c/i)}for(let c=1;c<=i;c++)for(let d=1;d<=s;d++){let M=(s+1)*c+d-1,m=(s+1)*(c-1)+d-1,p=(s+1)*(c-1)+d,b=(s+1)*c+d;o.push(M,m,b),o.push(m,p,b)}this.setIndex(o),this.setAttribute("position",new pe(a,3)),this.setAttribute("normal",new pe(l,3)),this.setAttribute("uv",new pe(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var Ma=class n extends De{constructor(t=new ma(new $(-1,-1,0),new $(-1,1,0),new $(1,1,0)),e=64,i=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:i,radialSegments:s,closed:r};let o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new $,l=new $,h=new Bt,u=new $,g=[],f=[],c=[],d=[];M(),this.setIndex(d),this.setAttribute("position",new pe(g,3)),this.setAttribute("normal",new pe(f,3)),this.setAttribute("uv",new pe(c,2));function M(){for(let _=0;_<e;_++)m(_);m(r===!1?e:0),b(),p()}function m(_){u=t.getPointAt(_/e,u);let v=o.normals[_],L=o.binormals[_];for(let T=0;T<=s;T++){let E=T/s*Math.PI*2,R=Math.sin(E),x=-Math.cos(E);l.x=x*v.x+R*L.x,l.y=x*v.y+R*L.y,l.z=x*v.z+R*L.z,l.normalize(),f.push(l.x,l.y,l.z),a.x=u.x+i*l.x,a.y=u.y+i*l.y,a.z=u.z+i*l.z,g.push(a.x,a.y,a.z)}}function p(){for(let _=1;_<=e;_++)for(let v=1;v<=s;v++){let L=(s+1)*(_-1)+(v-1),T=(s+1)*_+(v-1),E=(s+1)*_+v,R=(s+1)*(_-1)+v;d.push(L,T,R),d.push(T,E,R)}}function b(){for(let _=0;_<=e;_++)for(let v=0;v<=s;v++)h.x=_/e,h.y=v/s,c.push(h.x,h.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new n(new ya[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};var ba=class extends Mi{static get type(){return"MeshToonMaterial"}constructor(t){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.color=new re(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new re(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ru,this.normalScale=new Bt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};function zo(n,t,e){return!n||!e&&n.constructor===t?n:typeof t.BYTES_PER_ELEMENT=="number"?new t(n):Array.prototype.slice.call(n)}function Fx(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var Qs=class{constructor(t,e,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,s=e[i],r=e[i-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=i+2;;){if(s===void 0){if(t<r)break i;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=e[++i],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=e[--i-1],t>=r)break t}o=i,i=0;break e}break n}for(;i<o;){let a=i+o>>>1;t<e[a]?o=a:i=a+1}if(s=e[i],r=e[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=i[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Oc=class extends Qs{constructor(t,e,i,s){super(t,e,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Oh,endingEnd:Oh}}intervalChanged_(t,e,i){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Fh:r=t,a=2*e-i;break;case zh:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Fh:o=t,l=2*i-e;break;case zh:o=1,l=i+s[1]-s[0];break;default:o=t-1,l=e}let h=(i-e)*.5,u=this.valueSize;this._weightPrev=h/(e-a),this._weightNext=h/(l-i),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,h=l-a,u=this._offsetPrev,g=this._offsetNext,f=this._weightPrev,c=this._weightNext,d=(i-e)/(s-e),M=d*d,m=M*d,p=-f*m+2*f*M-f*d,b=(1+f)*m+(-1.5-2*f)*M+(-.5+f)*d+1,_=(-1-c)*m+(1.5+c)*M+.5*d,v=c*m-c*M;for(let L=0;L!==a;++L)r[L]=p*o[u+L]+b*o[h+L]+_*o[l+L]+v*o[g+L];return r}},Fc=class extends Qs{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,h=l-a,u=(i-e)/(s-e),g=1-u;for(let f=0;f!==a;++f)r[f]=o[h+f]*g+o[l+f]*u;return r}},zc=class extends Qs{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Zn=class{constructor(t,e,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=zo(e,this.TimeBufferType),this.values=zo(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:zo(t.times,Array),values:zo(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s)}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new zc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Fc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Oc(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Wo:e=this.InterpolantFactoryMethodDiscrete;break;case dc:e=this.InterpolantFactoryMethodLinear;break;case Ya:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Wo;case this.InterpolantFactoryMethodLinear:return dc;case this.InterpolantFactoryMethodSmooth:return Ya}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]*=t}return this}trim(t,e){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<t;)++r;for(;o!==-1&&i[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&Fx(s))for(let a=0,l=s.length;a!==l;++a){let h=s[a];if(isNaN(h)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,h),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Ya,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,h=t[a],u=t[a+1];if(h!==u&&(a!==1||h!==t[0]))if(s)l=!0;else{let g=a*i,f=g-i,c=g+i;for(let d=0;d!==i;++d){let M=e[g+d];if(M!==e[f+d]||M!==e[c+d]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let g=a*i,f=o*i;for(let c=0;c!==i;++c)e[f+c]=e[g+c]}++o}}if(r>0){t[o]=t[r];for(let a=r*i,l=o*i,h=0;h!==i;++h)e[l+h]=e[a+h];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,s=new i(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};Zn.prototype.TimeBufferType=Float32Array;Zn.prototype.ValueBufferType=Float32Array;Zn.prototype.DefaultInterpolation=dc;var us=class extends Zn{constructor(t,e,i){super(t,e,i)}};us.prototype.ValueTypeName="bool";us.prototype.ValueBufferType=Array;us.prototype.DefaultInterpolation=Wo;us.prototype.InterpolantFactoryMethodLinear=void 0;us.prototype.InterpolantFactoryMethodSmooth=void 0;var Bc=class extends Zn{};Bc.prototype.ValueTypeName="color";var Hc=class extends Zn{};Hc.prototype.ValueTypeName="number";var $c=class extends Qs{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-e)/(s-e),h=t*a;for(let u=h+a;h!==u;h+=4)ri.slerpFlat(r,0,o,h-a,o,h,l);return r}},Sa=class extends Zn{InterpolantFactoryMethodLinear(t){return new $c(this.times,this.values,this.getValueSize(),t)}};Sa.prototype.ValueTypeName="quaternion";Sa.prototype.InterpolantFactoryMethodSmooth=void 0;var fs=class extends Zn{constructor(t,e,i){super(t,e,i)}};fs.prototype.ValueTypeName="string";fs.prototype.ValueBufferType=Array;fs.prototype.DefaultInterpolation=Wo;fs.prototype.InterpolantFactoryMethodLinear=void 0;fs.prototype.InterpolantFactoryMethodSmooth=void 0;var Vc=class extends Zn{};Vc.prototype.ValueTypeName="vector";var Gc=class{constructor(t,e,i){let s=this,r=!1,o=0,a=0,l,h=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,g){return h.push(u,g),this},this.removeHandler=function(u){let g=h.indexOf(u);return g!==-1&&h.splice(g,2),this},this.getHandler=function(u){for(let g=0,f=h.length;g<f;g+=2){let c=h[g],d=h[g+1];if(c.global&&(c.lastIndex=0),c.test(u))return d}return null}}},zx=new Gc,Wc=class{constructor(t){this.manager=t!==void 0?t:zx,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let i=this;return new Promise(function(s,r){i.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};Wc.DEFAULT_MATERIAL_NAME="__DEFAULT";var wa=class extends ke{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new re(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},Ea=class extends wa{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ke.DEFAULT_UP),this.updateMatrix(),this.groundColor=new re(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},Tl=new we,Wd=new $,Xd=new $,Xc=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Bt(512,512),this.map=null,this.mapPass=null,this.matrix=new we,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Lr,this._frameExtents=new Bt(1,1),this._viewportCount=1,this._viewports=[new Ze(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,i=this.matrix;Wd.setFromMatrixPosition(t.matrixWorld),e.position.copy(Wd),Xd.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Xd),e.updateMatrixWorld(),Tl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Tl),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Tl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var qc=class extends Xc{constructor(){super(new na(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ta=class extends wa{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ke.DEFAULT_UP),this.updateMatrix(),this.target=new ke,this.shadow=new qc}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var lh="\\[\\]\\.:\\/",Bx=new RegExp("["+lh+"]","g"),ch="[^"+lh+"]",Hx="[^"+lh.replace("\\.","")+"]",$x=/((?:WC+[\/:])*)/.source.replace("WC",ch),Vx=/(WCOD+)?/.source.replace("WCOD",Hx),Gx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ch),Wx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ch),Xx=new RegExp("^"+$x+Vx+Gx+Wx+"$"),qx=["material","materials","bones","map"],Yc=class{constructor(t,e,i){let s=i||We.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},We=class n{constructor(t,e,i){this.path=e,this.parsedPath=i||n.parseTrackName(e),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new n.Composite(t,e,i):new n(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Bx,"")}static parseTrackName(t){let e=Xx.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);qx.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=i(a.children);if(l)return l}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)t[e++]=i[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=n.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let h=e.objectIndex;switch(i){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===h){h=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(h!==void 0){if(t[h]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[h]}}let o=t[s];if(o===void 0){let h=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+h+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};We.Composite=Yc;We.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};We.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};We.prototype.GetterByBindingType=[We.prototype._getValue_direct,We.prototype._getValue_array,We.prototype._getValue_arrayElement,We.prototype._getValue_toArray];We.prototype.SetterByBindingTypeAndVersioning=[[We.prototype._setValue_direct,We.prototype._setValue_direct_setNeedsUpdate,We.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[We.prototype._setValue_array,We.prototype._setValue_array_setNeedsUpdate,We.prototype._setValue_array_setMatrixWorldNeedsUpdate],[We.prototype._setValue_arrayElement,We.prototype._setValue_arrayElement_setNeedsUpdate,We.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[We.prototype._setValue_fromArray,We.prototype._setValue_fromArray_setNeedsUpdate,We.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var n_=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Zc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Zc);var Yx=2.3,Ve=7.2,Pa=.16,Hi=(n,t,e)=>{let i=Math.max(0,Math.min(1,(e-n)/(t-n)));return i*i*(3-2*i)};function _u(n,t,e){let i=n.points,s=i.length-1,r=n.lengthM/s,o=U=>{let Y=Math.max(0,Math.min(s,U/r)),j=Math.min(s-1,Math.floor(Y)),G=Y-j,ct=i[Math.max(0,j-1)],at=i[j],nt=i[j+1],rt=i[Math.min(s,j+2)],W=dt=>.5*(2*at[dt]+(-ct[dt]+nt[dt])*G+(2*ct[dt]-5*at[dt]+4*nt[dt]-rt[dt])*G*G+(-ct[dt]+3*at[dt]-3*nt[dt]+rt[dt])*G*G*G);return[W(0),W(2),at[1]+(nt[1]-at[1])*G]},a=U=>{if(U<=n.lengthM)return o(U);let Y=o(n.lengthM-20),j=o(n.lengthM),G=(U-n.lengthM)/20;return[j[0]+(j[0]-Y[0])*G,j[1]+(j[1]-Y[1])*G,j[2]]},l=2700,h=2585,u=n.overlaps.filter(([U,Y])=>Y>U).sort((U,Y)=>U[1]-Y[1]),g=U=>{for(let G=0;G<u.length-1;G++){let[ct,at]=u[G],[nt,rt]=u[G+1];if(U<=rt)return ct+(U-at)*(nt-ct)/(rt-at)}let[Y,j]=u.at(-1);return Y+(U-j)},f=[];for(let U=0;U<=l;U+=2)f.push([U,...o(U)]);let c=2600,d=4900,M=[];for(let U=c;U<=d;U+=10){let Y=o(U),j=g(U),G=j,ct=1e9;for(let at of f){if(Math.abs(at[0]-j)>60)continue;let nt=(at[1]-Y[0])**2+(at[2]-Y[1])**2;nt<ct&&(ct=nt,G=at[0])}M.push(G)}let m=M.map((U,Y)=>{let j=0,G=0;for(let ct=-3;ct<=3;ct++){let at=Y+ct;at>=0&&at<M.length&&(j+=M[at],G++)}return j/G});for(let U=1;U<m.length;U++)m[U]=Math.max(m[U],m[U-1]+.5);let p=U=>{let Y=(U-c)/10,j=Math.max(0,Math.min(m.length-2,Math.floor(Y))),G=Y-j;return m[j]+(m[j+1]-m[j])*G},b={};function _(U){for(let Y of Object.keys(b))delete b[Y];for(let Y of U?.runners||[])!Y.diversions||!Y.diversions.length||(b[Y.id]=Y.diversions.map(j=>{let G=j.path,ct=[0];for(let at=1;at<G.length;at++)ct.push(ct[at-1]+Math.hypot(G[at][0]-G[at-1][0],G[at][1]-G[at-1][1]));return{...j,cum:ct,len:ct.at(-1)}}))}_(e);let v=(U,Y)=>{let j=Math.max(0,Math.min(1,(Y-U.fromM)/(U.toM-U.fromM)))*U.len,G=0;for(;G<U.cum.length-2&&U.cum[G+1]<j;)G++;let ct=(j-U.cum[G])/Math.max(1e-6,U.cum[G+1]-U.cum[G]);return[U.path[G][0]+(U.path[G+1][0]-U.path[G][0])*ct,U.path[G][1]+(U.path[G+1][1]-U.path[G][1])*ct]};function L(U){if(U<c-60){let ct=a(U);return[ct[0],ct[1]]}let Y=a(U);if(U>=d+40)return[Y[0],Y[1]];let j=Hi(c-60,c+60,U)*(1-Hi(d-60,d,U));if(j<=0)return[Y[0],Y[1]];let G=o(Math.min(l,p(Math.max(c,Math.min(d,U)))));return[Y[0]+(G[0]-Y[0])*j,Y[1]+(G[1]-Y[1])*j]}function T(U,Y){let j=L(U),G=Y&&b[Y];if(G){for(let ct of G)if(U>ct.fromM&&U<ct.toM){let at=Hi(ct.fromM,ct.fromM+30,U)*(1-Hi(ct.toM-30,ct.toM,U)),nt=v(ct,U);return j=[j[0]+(nt[0]-j[0])*at,j[1]+(nt[1]-j[1])*at],{x:j[0],z:j[1],div:at,divInfo:ct}}}return{x:j[0],z:j[1],div:0,divInfo:null}}let[E,R,x,y]=t.bounds,S={x0:E-60,z0:R-60,cell:5};S.nx=Math.ceil((x+60-S.x0)/S.cell)+1,S.nz=Math.ceil((y+60-S.z0)/S.cell)+1,S.h=new Float32Array(S.nx*S.nz);let A=[];for(let U=0;U<=s;U+=2)A.push(i[U]);let w=0;for(let U of A)w+=U[1];w/=A.length;let I=(U,Y)=>Math.sin(U*.011+1.3)*Math.cos(Y*.009-.4)*2.2+Math.sin(U*.027+Y*.019)*.9;for(let U=0;U<S.nz;U++)for(let Y=0;Y<S.nx;Y++){let j=S.x0+Y*S.cell,G=S.z0+U*S.cell,ct=0,at=0,nt=1e9;for(let dt of A){let H=(dt[0]-j)**2+(dt[2]-G)**2;H<nt&&(nt=H);let Ut=1/(H+400),_t=Ut*Ut;ct+=_t,at+=_t*dt[1]}let rt=Hi(30,160,Math.sqrt(nt)),W=at/ct*(1-rt*.4)+w*rt*.4+I(j,G)*rt;S.h[U*S.nx+Y]=W*Yx}let N=t.features.filter(U=>U.closed&&["water","track","tennis","pitch"].includes(U.kind)&&U.pts.length>3);for(let U of N){let Y=On(U.pts),j=[];for(let at=Math.max(0,Math.floor((Y[1]-12-S.z0)/S.cell));at<=Math.min(S.nz-1,Math.ceil((Y[3]+12-S.z0)/S.cell));at++)for(let nt=Math.max(0,Math.floor((Y[0]-12-S.x0)/S.cell));nt<=Math.min(S.nx-1,Math.ceil((Y[2]+12-S.x0)/S.cell));nt++){let rt=S.x0+nt*S.cell,W=S.z0+at*S.cell,dt=Wr(U.pts,rt,W);dt<12&&j.push([at*S.nx+nt,dt])}let G=0,ct=0;for(let[at,nt]of j)nt<0&&(G+=S.h[at],ct++);if(ct){G/=ct,U.kind==="water"&&(G=Math.min(...j.filter(at=>at[1]<0).map(at=>S.h[at[0]]))-.2),U._level=G;for(let[at,nt]of j){let rt=1-Hi(0,12,nt);S.h[at]=S.h[at]*(1-rt)+G*rt-(U.kind==="water"?1.6*(1-Hi(-6,0,nt)):0)}}}{for(let W=0;W<3;W++){let dt=new Float32Array(S.h);for(let H=1;H<S.nz-1;H++)for(let Ut=1;Ut<S.nx-1;Ut++){let _t=H*S.nx+Ut;dt[_t]=(S.h[_t]*4+S.h[_t-1]+S.h[_t+1]+S.h[_t-S.nx]+S.h[_t+S.nx])/8}S.h.set(dt)}let U=new Float32Array(S.nx*S.nz).fill(1e9),Y=new Float32Array(S.nx*S.nz),j=new Float32Array(S.nx*S.nz),G=(W,dt)=>S.h[dt*S.nx+W],ct=(W,dt)=>{let H=Math.round((W-S.x0)/S.cell),Ut=Math.round((dt-S.z0)/S.cell);return G(Math.max(0,Math.min(S.nx-1,H)),Math.max(0,Math.min(S.nz-1,Ut)))},at=[[0,h],[2540,2690],[d-80,n.lengthM+45]],nt=[];for(let[W,dt]of at)for(let H=W;H<=dt;H+=2){let Ut=L(H);nt.push([Ut[0],Ut[1],ct(Ut[0],Ut[1])])}for(let W=0;W<4;W++)for(let dt=1;dt<nt.length-1;dt++)nt[dt][2]=(nt[dt-1][2]+nt[dt][2]*2+nt[dt+1][2])/4;let rt=Ve/2+7;for(let[W,dt,H]of nt){let Ut=Math.floor((W-rt-S.x0)/S.cell),_t=Math.ceil((W+rt-S.x0)/S.cell),St=Math.floor((dt-rt-S.z0)/S.cell),It=Math.ceil((dt+rt-S.z0)/S.cell);for(let tt=Math.max(0,St);tt<=Math.min(S.nz-1,It);tt++)for(let $t=Math.max(0,Ut);$t<=Math.min(S.nx-1,_t);$t++){let B=Math.hypot(S.x0+$t*S.cell-W,S.z0+tt*S.cell-dt);if(B>rt)continue;let k=tt*S.nx+$t,yt=(1-B/rt)**2;Y[k]+=yt,j[k]+=yt*H,B<U[k]&&(U[k]=B)}}for(let W=0;W<U.length;W++)if(U[W]<rt&&Y[W]>0){let dt=1-Hi(Ve/2+.5,rt,U[W]);S.h[W]=S.h[W]*(1-dt)+j[W]/Y[W]*dt}S.pathSamples=nt}let O=N.filter(U=>U.kind==="water").sort((U,Y)=>Y.pts.length-U.pts.length)[0];function z(U,Y){let j=(U-S.x0)/S.cell,G=(Y-S.z0)/S.cell,ct=Math.max(0,Math.min(S.nx-2,Math.floor(j))),at=Math.max(0,Math.min(S.nz-2,Math.floor(G))),nt=Math.max(0,Math.min(1,j-ct)),rt=Math.max(0,Math.min(1,G-at)),W=S.h[at*S.nx+ct],dt=S.h[at*S.nx+ct+1],H=S.h[(at+1)*S.nx+ct],Ut=S.h[(at+1)*S.nx+ct+1];return nt+rt<=1?W+(dt-W)*nt+(H-W)*rt:Ut+(H-Ut)*(1-nt)+(dt-Ut)*(1-rt)}let F=new $;function X(U,Y,j={}){let G=T(U,Y),ct=Math.max(0,U-4),at=ct+8,nt=T(ct,Y),rt=T(at,Y),W=rt.x-nt.x,dt=rt.z-nt.z,H=Math.hypot(W,dt)||1;return W/=H,dt/=H,j.x=G.x,j.z=G.z,j.y=z(G.x,G.z)+Pa,j.tx=W,j.tz=dt,j.rx=-dt,j.rz=W,j.slope=(z(rt.x,rt.z)-z(nt.x,nt.z))/Math.max(1,H),j.div=G.div,j.divInfo=G.divInfo,j}function it(U,Y=25){let j=Math.max(0,U-Y),G=L(j),ct=L(j+2*Y),at=Math.hypot(ct[0]-G[0],ct[1]-G[1])||1;return F.set((ct[0]-G[0])/at,0,(ct[1]-G[1])/at).clone()}let P=[{from:0,to:h,lift:0},{from:2540,to:2690,lift:.02},{from:d-80,to:n.lengthM+45,lift:.035}],mt=n.lengthM;return{P:i,raw:o,rawExt:a,baseXZ:L,LAP1_END_DRAW:h,xzAt:T,sample:X,heading:it,heightAt:z,terrain:S,ribbons:P,finishM:mt,lake:O,flat:N,geoOf:U=>U>=c&&U<=d?p(U):U,diversions:b,setPlan:_,LAP1_END:l,MAP_FROM:c,MAP_TO:d}}function On(n){let t=[1e9,1e9,-1e9,-1e9];for(let e of n)t[0]=Math.min(t[0],e[0]),t[1]=Math.min(t[1],e[1]),t[2]=Math.max(t[2],e[0]),t[3]=Math.max(t[3],e[1]);return t}function nr(n,t,e){let i=!1;for(let s=0,r=n.length-1;s<n.length;r=s++){let[o,a]=n[s],[l,h]=n[r];a>e!=h>e&&t<(l-o)*(e-a)/(h-a)+o&&(i=!i)}return i}function Wr(n,t,e){let i=1e9;for(let s=0,r=n.length-1;s<n.length;r=s++){let[o,a]=n[r],[l,h]=n[s],u=l-o,g=h-a,f=u*u+g*g||1,c=Math.max(0,Math.min(1,((t-o)*u+(e-a)*g)/f));i=Math.min(i,Math.hypot(t-o-u*c,e-a-g*c))}return nr(n,t,e)?-i:i}function Qe(n,t=!1){let e=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},o={},a=n[0].morphTargetsRelative,l=new De,h=0;for(let u=0;u<n.length;++u){let g=n[u],f=0;if(e!==(g.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let c in g.attributes){if(!i.has(c))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+c+'" attribute exists among all geometries, or in none of them.'),null;r[c]===void 0&&(r[c]=[]),r[c].push(g.attributes[c]),f++}if(f!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==g.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let c in g.morphAttributes){if(!s.has(c))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[c]===void 0&&(o[c]=[]),o[c].push(g.morphAttributes[c])}if(t){let c;if(e)c=g.index.count;else if(g.attributes.position!==void 0)c=g.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(h,c,u),h+=c}}if(e){let u=0,g=[];for(let f=0;f<n.length;++f){let c=n[f].index;for(let d=0;d<c.count;++d)g.push(c.getX(d)+u);u+=n[f].attributes.position.count}l.setIndex(g)}for(let u in r){let g=Mu(r[u]);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,g)}for(let u in o){let g=o[u][0].length;if(g===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let f=0;f<g;++f){let c=[];for(let M=0;M<o[u].length;++M)c.push(o[u][M][f]);let d=Mu(c);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(d)}}return l}function Mu(n){let t,e,i,s=-1,r=0;for(let h=0;h<n.length;++h){let u=n[h];if(t===void 0&&(t=u.array.constructor),t!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=u.itemSize),e!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=u.normalized),i!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*e}let o=new t(r),a=new $e(o,e,i),l=0;for(let h=0;h<n.length;++h){let u=n[h];if(u.isInterleavedBufferAttribute){let g=l/e;for(let f=0,c=u.count;f<c;f++)for(let d=0;d<e;d++){let M=u.getComponent(f,d);a.setComponent(f+g,d,M)}}else o.set(u.array,l);l+=u.count*e}return s!==void 0&&(a.gpuType=s),a}var Xr=new $;function Fn(n,t,e,i,s,r){let o=2*Math.PI*s/4,a=Math.max(r-2*s,0),l=Math.PI/4;Xr.copy(t),Xr[i]=0,Xr.normalize();let h=.5*o/(o+a),u=1-Xr.angleTo(n)/l;return Math.sign(Xr[e])===1?u*h:a/(o+a)+h+h*(1-u)}var Me=class extends Ee{constructor(t=1,e=1,i=1,s=2,r=.1){if(s=s*2+1,r=Math.min(t/2,e/2,i/2,r),super(1,1,1,s,s,s),s===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let a=new $,l=new $,h=new $(t,e,i).divideScalar(2).subScalar(r),u=this.attributes.position.array,g=this.attributes.normal.array,f=this.attributes.uv.array,c=u.length/6,d=new $,M=.5/s;for(let m=0,p=0;m<u.length;m+=3,p+=2)switch(a.fromArray(u,m),l.copy(a),l.x-=Math.sign(l.x)*M,l.y-=Math.sign(l.y)*M,l.z-=Math.sign(l.z)*M,l.normalize(),u[m+0]=h.x*Math.sign(a.x)+l.x*r,u[m+1]=h.y*Math.sign(a.y)+l.y*r,u[m+2]=h.z*Math.sign(a.z)+l.z*r,g[m+0]=l.x,g[m+1]=l.y,g[m+2]=l.z,Math.floor(m/c)){case 0:d.set(1,0,0),f[p+0]=Fn(d,l,"z","y",r,i),f[p+1]=1-Fn(d,l,"y","z",r,e);break;case 1:d.set(-1,0,0),f[p+0]=1-Fn(d,l,"z","y",r,i),f[p+1]=1-Fn(d,l,"y","z",r,e);break;case 2:d.set(0,1,0),f[p+0]=1-Fn(d,l,"x","z",r,t),f[p+1]=Fn(d,l,"z","x",r,i);break;case 3:d.set(0,-1,0),f[p+0]=1-Fn(d,l,"x","z",r,t),f[p+1]=1-Fn(d,l,"z","x",r,i);break;case 4:d.set(0,0,1),f[p+0]=1-Fn(d,l,"x","y",r,t),f[p+1]=1-Fn(d,l,"y","x",r,e);break;case 5:d.set(0,0,-1),f[p+0]=Fn(d,l,"x","y",r,t),f[p+1]=1-Fn(d,l,"y","x",r,e);break}}};var $i=null;function Zx(){if($i)return $i;let n=[118,172,228,255],t=new Uint8Array(n.length*4);return n.forEach((e,i)=>t.set([e,e,e,255],i*4)),$i=new Ur(t,n.length,1,Ln),$i.minFilter=$i.magFilter=Sn,$i.generateMipmaps=!1,$i.needsUpdate=!0,$i}var qr=new Map;function gt(n,t={}){let e=!t.map&&(typeof n=="number"||typeof n=="string")?`${n}|${JSON.stringify(t)}`:null;if(e&&!t.map&&qr.has(e))return qr.get(e);let i=new ba({color:new re(n??16777215),gradientMap:Zx(),...t});return e&&!t.map&&qr.set(e,i),i}function bu(){for(let n of qr.values())n.dispose();qr.clear(),Yr.forEach(n=>n.dispose()),Yr.clear()}var hh={uRes:{value:new Bt(1920,1080)}},Yr=new Map;function Jx(n=3,t=1709088,e=14){let i=`${n}|${t}|${e}`;if(Yr.has(i))return Yr.get(i);let s=new wn({uniforms:{...rh.clone(Zt.fog),uRes:hh.uRes,uWidth:{value:n},uRef:{value:e},uColor:{value:new re(t)}},vertexShader:`
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
      }`,side:un,fog:!0});return Yr.set(i,s),s}function dh(n){if(n.getAttribute("onormal"))return n;n.getAttribute("normal")||n.computeVertexNormals();let t=n.getAttribute("position"),e=n.getAttribute("normal"),i=new Map,s=a=>`${Math.round(t.getX(a)*1e3)},${Math.round(t.getY(a)*1e3)},${Math.round(t.getZ(a)*1e3)}`,r=[];for(let a=0;a<t.count;a++){let l=s(a),h=i.get(l);h||(h=[0,0,0],i.set(l,h)),h[0]+=e.getX(a),h[1]+=e.getY(a),h[2]+=e.getZ(a),r.push(h)}let o=new Float32Array(t.count*3);for(let a=0;a<t.count;a++){let l=r[a],h=Math.hypot(l[0],l[1],l[2])||1;o[a*3]=l[0]/h,o[a*3+1]=l[1]/h,o[a*3+2]=l[2]/h}return n.setAttribute("onormal",new $e(o,3)),n}function Jn(n,t=3,e,i){dh(n.geometry);let s=Jx(t,e,i),r;return n.isInstancedMesh?(r=new en(n.geometry,s,n.count),r.instanceMatrix=n.instanceMatrix,r.count=n.count,n.frustumCulled&&n.boundingSphere?(r.boundingSphere=n.boundingSphere,r.frustumCulled=!0):(r.frustumCulled=!1,n.frustumCulled=!1),n.userData.outline=r):(r=new Ne(n.geometry,s),r.frustumCulled=n.frustumCulled),r.castShadow=!1,r.receiveShadow=!1,r.userData.isOutline=!0,r.renderOrder=n.renderOrder,n.add(r),r}function xe(n,t,{cast:e=!0,receive:i=!0,ol:s=0,olColor:r,olRef:o}={}){let a=new Ne(n,t);return a.castShadow=e,a.receiveShadow=i,s&&Jn(a,s,r,o),a}function on(n,t,e,{repeat:i=!1,srgb:s=!0,aniso:r=8}={}){let o=document.createElement("canvas");o.width=n,o.height=t;let a=o.getContext("2d");e(a,n,t);let l=new js(o);return s&&(l.colorSpace=hn),i&&(l.wrapS=l.wrapT=as),l.anisotropy=r,l}var uh='"Lilita One", "Arial Black", "Arial Rounded MT Bold", Impact, sans-serif',ie=Rn(20240817);function Rn(n){return()=>{n|=0,n=n+1831565813|0;let t=Math.imul(n^n>>>15,1|n);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function Kn(n,t,e,i){let s=on(n,t,e);return document.fonts&&document.fonts.load&&document.fonts.load('64px "Lilita One"').then(()=>{let r=s.image.getContext("2d");r.clearRect(0,0,n,t),e(r,n,t),s.needsUpdate=!0}).catch(()=>{}),i?.push(s),s}function an(n,t,e,i,s,r="#fff",o="#1a1420",a=.16,l="center"){n.font=`${s}px ${uh}`,n.textAlign=l,n.textBaseline="middle",n.lineJoin="round",n.lineWidth=s*a,n.strokeStyle=o,n.strokeText(t,e,i),n.fillStyle=r,n.fillText(t,e,i)}function wu(n,t,e){let{course:i,park:s,hasFunfair:r}=e,o=[],a=new ue;n.add(a);let l=C=>(a.add(C),C),h=t.terrain,u=(h.nx-1)*h.cell,g=(h.nz-1)*h.cell,f=new Map,c=6,d=(C,V)=>`${Math.floor(C/c)},${Math.floor(V/c)}`,M=(C,V,J)=>{let ot=d(C,V),vt=f.get(ot);vt||f.set(ot,vt=[]),vt.push([C,V,J])},m=(C,V,J)=>{let ot=Math.floor(C/c),vt=Math.floor(V/c),K=Math.ceil((J+30)/c);for(let Et=-K;Et<=K;Et++)for(let Gt=-K;Gt<=K;Gt++){let Ft=f.get(`${ot+Et},${vt+Gt}`);if(Ft){for(let[Q,bt,At]of Ft)if((Q-C)**2+(bt-V)**2<(At+J)**2)return!1}}return!0},p=[];for(let C of t.ribbons)for(let V=C.from;V<=C.to;V+=3){let J=t.baseXZ(V);p.push(J),M(J[0],J[1],Ve/2+1.5)}for(let C in t.diversions)for(let V of t.diversions[C])for(let J of V.path)M(J[0],J[1],4);let b=s.features.filter(C=>C.kind==="park").sort((C,V)=>V.pts.length-C.pts.length)[0].pts,_=(C,V)=>nr(b,C,V),L=s.features.filter(C=>C.closed&&["water","track","tennis","pitch","playground","building"].includes(C.kind)).map(C=>[On(C.pts),C]),T=(C,V,J=2)=>L.some(([ot,vt])=>C>ot[0]-J&&C<ot[2]+J&&V>ot[1]-J&&V<ot[3]+J&&Wr(vt.pts,C,V)<J),E=1.7,R=[];function x(C,V){R.push({im:C,list:V})}let y=new we().makeScale(0,0,0);function S(C){for(let{im:V,list:J}of R){let ot=!1;J.forEach((vt,K)=>{!vt.cleared&&C(vt.x,vt.z)&&(vt.cleared=!0,V.setMatrixAt(K,y),ot=!0)}),ot&&(V.instanceMatrix.needsUpdate=!0)}}function A(){let C=w.image.getContext("2d");I(C,w.image.width,w.image.height),w.needsUpdate=!0}let w=on(Math.round(u*E),Math.round(g*E),(C,V,J)=>I(C,V,J),{aniso:8});o.push(w);function I(C,V,J){let ot=Q=>(Q-h.x0)*E,vt=Q=>(Q-h.z0)*E,K=(Q,bt=!0)=>{C.beginPath(),Q.forEach((At,Qt)=>Qt?C.lineTo(ot(At[0]),vt(At[1])):C.moveTo(ot(At[0]),vt(At[1]))),bt&&C.closePath()};C.fillStyle="#d8d2c2",C.fillRect(0,0,V,J);for(let Q=0;Q<9e3;Q++)C.fillStyle=ie()<.5?"#cfc8b6":"#e2dccd",C.fillRect(ie()*V,ie()*J,3,3);K(b),C.fillStyle="#66cf45",C.fill(),C.save(),K(b),C.clip(),C.translate(V/2,J/2),C.rotate(-.62);for(let Q=-2e3;Q<2e3;Q+=2*14*E)C.fillStyle="rgba(255,255,140,0.10)",C.fillRect(Q,-2500,14*E,5e3);C.setTransform(1,0,0,1,0,0);for(let Q=0;Q<26e3;Q++){let bt=ie()*V,At=ie()*J;C.fillStyle=ie()<.6?"rgba(40,140,40,0.35)":"rgba(190,255,120,0.35)",C.fillRect(bt,At,2+ie()*2,2+ie()*3)}C.restore();let Et=(Q,bt,At)=>{for(let Qt of s.features)Qt.kind===Q&&Qt.closed&&(K(Qt.pts),C.fillStyle=bt,C.fill(),At&&(C.strokeStyle=At,C.lineWidth=2,C.stroke()))};Et("grass","#72d64e"),Et("garden","#86dc5c"),Et("wood","#3f9e3a"),Et("scrub","#5cb544");for(let Q of s.features)if(Q.kind==="pitch"&&Q.closed){C.save(),K(Q.pts),C.clip(),C.fillStyle="#5ccc3f",C.fill();let bt=On(Q.pts);for(let At=bt[0];At<bt[2];At+=8)C.fillStyle="rgba(255,255,255,0.10)",C.fillRect(ot(At),vt(bt[1]),4*E,(bt[3]-bt[1])*E);C.restore(),K(Q.pts),C.strokeStyle="#ffffff",C.lineWidth=2.2,C.stroke()}for(let Q of s.features)if(Q.kind==="playground"&&Q.closed){K(Q.pts),C.fillStyle="#7fcfb4",C.fill(),C.save(),K(Q.pts),C.clip();let bt=On(Q.pts);for(let At=0;At<260;At++)C.fillStyle=ie()<.5?"rgba(20,80,70,0.18)":"rgba(255,255,255,0.22)",C.fillRect(ot(bt[0]+ie()*(bt[2]-bt[0])),vt(bt[1]+ie()*(bt[3]-bt[1])),3,3);for(let At=0;At<(bt[2]-bt[0])*(bt[3]-bt[1])/400;At++)C.beginPath(),C.arc(ot(bt[0]+ie()*(bt[2]-bt[0])),vt(bt[1]+ie()*(bt[3]-bt[1])),1.6*E,0,7),C.fillStyle=["#ffd93b","#57c7ff","#ff6f91"][At%3],C.fill();C.restore(),K(Q.pts),C.strokeStyle="#ffffff",C.lineWidth=.8*E,C.stroke()}let Gt=Q=>{let bt=0;for(let At=0,Qt=Q.pts.length-1;At<Q.pts.length;Qt=At++)bt+=(Q.pts[Qt][0]+Q.pts[At][0])*(Q.pts[Qt][1]-Q.pts[At][1]);return Math.abs(bt/2)};for(let Q of s.features)if(Q.kind==="track"&&Q.closed&&Gt(Q)>5e3){C.save(),K(Q.pts),C.clip(),C.fillStyle="#e2523a",C.fill();let bt=9*E,At=La(Q.pts),Qt=On(Q.pts),q=Qt[2]-Qt[0],st=Qt[3]-Qt[1],kt=Wt=>Q.pts.map(Jt=>[At[0]+(Jt[0]-At[0])*Wt,At[1]+(Jt[1]-At[1])*Wt]),Dt=1-2*9/Math.min(q,st);for(let Wt=1;Wt<=5;Wt++)K(kt(1-(1-Dt)*(Wt/6))),C.strokeStyle="rgba(255,255,255,0.9)",C.lineWidth=1.6,C.stroke();K(kt(Dt)),C.fillStyle="#5ccc3f",C.fill(),C.strokeStyle="#ffffff",C.lineWidth=3,C.stroke(),C.restore(),K(Q.pts),C.strokeStyle="#ffffff",C.lineWidth=3,C.stroke()}for(let Q of s.features)if(Q.kind==="track"&&Q.closed&&Gt(Q)<=5e3){let bt=Q.tags?.surface==="sand";if(!Q.tags?.surface)continue;K(Q.pts),C.fillStyle=bt?"#f2d58f":"#e2523a",C.fill(),C.strokeStyle="#ffffff",C.lineWidth=1.5,C.stroke()}for(let Q of s.features)if(Q.kind==="tennis"&&Q.closed){K(Q.pts),C.fillStyle="#3f9fd1",C.fill(),C.strokeStyle="#ffffff",C.lineWidth=2.5,C.stroke();let bt=La(Q.pts),At=On(Q.pts);C.save(),K(Q.pts),C.clip(),C.strokeStyle="rgba(255,255,255,0.9)",C.lineWidth=1.5,C.beginPath(),C.moveTo(ot(bt[0]),vt(At[1])),C.lineTo(ot(bt[0]),vt(At[3])),C.stroke(),C.restore()}for(let Q of s.features)Q.kind==="water"&&Q.closed&&(K(Q.pts),C.strokeStyle="#f4efe0",C.lineWidth=3.4*E,C.lineJoin="round",C.stroke(),C.fillStyle="#2f8fe0",C.fill());for(let Q of s.features)Q.kind==="path"&&(K(Q.pts,!1),C.lineCap="round",C.lineJoin="round",C.strokeStyle="#c9ad78",C.lineWidth=3.6*E,C.stroke());for(let Q of s.features)Q.kind==="path"&&(K(Q.pts,!1),C.strokeStyle="#ecd8a6",C.lineWidth=2.6*E,C.stroke());let Ft=Q=>({primary:15,secondary:12,tertiary:11,residential:8,unclassified:8,service:5,trunk:16})[Q.tags?.highway]||7;for(let Q of s.features)Q.kind==="road"&&(K(Q.pts,Q.closed),C.lineCap="round",C.lineJoin="round",C.strokeStyle="#ece6d6",C.lineWidth=(Ft(Q)+4)*E,C.stroke());for(let Q of s.features)Q.kind==="road"&&(K(Q.pts,Q.closed),C.strokeStyle="#7f8597",C.lineWidth=Ft(Q)*E,C.stroke());for(let Q of s.features)Q.kind==="road"&&Ft(Q)>=11&&(K(Q.pts,!1),C.setLineDash([5*E,5*E]),C.strokeStyle="#f4f1e6",C.lineWidth=.5*E,C.stroke(),C.setLineDash([]));for(let Q of s.features)Q.kind==="rail"&&(K(Q.pts,!1),C.strokeStyle="#9b8f84",C.lineWidth=5*E,C.stroke());for(let Q of s.features)Q.kind==="rail"&&(K(Q.pts,!1),C.setLineDash([1,2]),C.strokeStyle="#5b4f46",C.lineWidth=3*E,C.stroke(),C.setLineDash([]),K(Q.pts,!1),C.strokeStyle="#c9ccd6",C.lineWidth=.8,C.stroke());for(let Q of s.features)Q.kind==="building"&&Q.closed&&(K(Q.pts),C.fillStyle="#9c968a",C.fill());for(let Q in t.diversions)for(let bt of t.diversions[Q])C.beginPath(),bt.path.forEach((At,Qt)=>Qt?C.lineTo(ot(At[0]),vt(At[1])):C.moveTo(ot(At[0]),vt(At[1]))),C.lineCap="round",C.lineJoin="round",C.strokeStyle="rgba(196,160,96,0.85)",C.lineWidth=4*E,C.stroke(),C.setLineDash([2*E,3*E]),C.strokeStyle="rgba(255,240,200,0.8)",C.lineWidth=.6*E,C.stroke(),C.setLineDash([])}{let C=h.nx*h.nz,V=new Float32Array(C*3),J=new Float32Array(C*2);for(let At=0;At<h.nz;At++)for(let Qt=0;Qt<h.nx;Qt++){let q=At*h.nx+Qt;V[q*3]=h.x0+Qt*h.cell,V[q*3+1]=h.h[q],V[q*3+2]=h.z0+At*h.cell,J[q*2]=Qt/(h.nx-1),J[q*2+1]=1-At/(h.nz-1)}let ot=new Uint32Array((h.nx-1)*(h.nz-1)*6),vt=0;for(let At=0;At<h.nz-1;At++)for(let Qt=0;Qt<h.nx-1;Qt++){let q=At*h.nx+Qt,st=q+1,kt=q+h.nx,Dt=kt+1;ot[vt++]=q,ot[vt++]=kt,ot[vt++]=st,ot[vt++]=st,ot[vt++]=kt,ot[vt++]=Dt}let K=new De;K.setAttribute("position",new $e(V,3)),K.setAttribute("uv",new $e(J,2)),K.setIndex(new $e(ot,1)),K.computeVertexNormals();let Et=gt(16777215,{map:w}),Gt=on(256,256,(At,Qt,q)=>{At.fillStyle="#808080",At.fillRect(0,0,Qt,q);for(let st=0;st<1800;st++){let kt=100+Math.floor(ie()*70);At.fillStyle=`rgb(${kt},${kt},${kt})`;let Dt=ie()*Qt,Wt=ie()*q;At.fillRect(Dt,Wt,2,3+ie()*5)}for(let st=0;st<500;st++)At.fillStyle="rgba(255,255,255,0.18)",At.fillRect(ie()*Qt,ie()*q,2,2)},{repeat:!0,srgb:!1});o.push(Gt),Et.onBeforeCompile=At=>{At.uniforms.uDetail={value:Gt},At.vertexShader=At.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vWPos;`).replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
vWPos = (modelMatrix * vec4(transformed, 1.0)).xyz;`),At.fragmentShader=At.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vWPos; uniform sampler2D uDetail;`).replace("#include <map_fragment>",`#include <map_fragment>
          float dd = length(vWPos - cameraPosition);
          float d1 = texture2D(uDetail, vWPos.xz / 3.0).r, d2 = texture2D(uDetail, vWPos.xz / 11.0).r;
          float fade = 1.0 - smoothstep(25.0, 140.0, dd);
          diffuseColor.rgb *= mix(1.0, 0.8 + 0.4 * mix(d2, d1, fade), 0.55);`)},Et.customProgramCacheKey=()=>"terrain-detail";let Ft=xe(K,Et,{cast:!1});Ft.name="terrain",l(Ft);let Q=new Ne(new va(700,5200,48,1),gt(13227680));Q.rotation.x=-Math.PI/2,Q.position.set(h.x0+u/2,-2,h.z0+g/2),Q.receiveShadow=!1,l(Q);let bt=new Ne(new fn(u+1800,g+1800),gt(13686197));bt.rotation.x=-Math.PI/2,bt.position.set(h.x0+u/2,-3,h.z0+g/2),l(bt)}let N=on(256,256,(C,V,J)=>{C.fillStyle="#7f8fb0",C.fillRect(0,0,V,J);for(let ot=0;ot<1600;ot++)C.fillStyle=ie()<.5?"rgba(255,255,255,0.07)":"rgba(30,40,70,0.08)",C.fillRect(ie()*V,ie()*J,2,2);C.fillStyle="#6b7a9b",C.fillRect(0,0,V*.035,J),C.fillRect(V*.965,0,V*.035,J),C.fillStyle="#ffffff",C.fillRect(V*.06,0,V*.045,J),C.fillRect(V*.895,0,V*.045,J),C.fillStyle="rgba(255,255,255,0.35)",C.fillRect(V*.49,0,V*.02,J*.5)},{repeat:!0});o.push(N);{let C=[];for(let K of t.ribbons)C.push(O(K));let V=Qe(C),J=xe(V,gt(16777215,{map:N}),{cast:!1});J.name="path",l(J);let ot=Qe(t.ribbons.map(K=>O(K,!0))),vt=xe(ot,gt(5924226),{cast:!1});l(vt)}function O(C,V=!1){let J=[];for(let Q=C.from;Q<=C.to+.01;Q+=2)J.push(t.baseXZ(Q));let ot=[],vt=[],K=[],Et=0;for(let Q=0;Q<J.length;Q++){let bt=J[Math.max(0,Q-1)],At=J[Math.min(J.length-1,Q+1)],Qt=At[0]-bt[0],q=At[1]-bt[1],st=Math.hypot(Qt,q)||1;Qt/=st,q/=st;let kt=-q,Dt=Qt,Wt=Ve/2,Jt=[J[Q][0]-kt*Wt,J[Q][1]-Dt*Wt],zt=[J[Q][0]+kt*Wt,J[Q][1]+Dt*Wt],Ae=t.heightAt(J[Q][0],J[Q][1]),Ue=Math.max(t.heightAt(Jt[0],Jt[1]),Ae-.05)+Pa+C.lift,D=Math.max(t.heightAt(zt[0],zt[1]),Ae-.05)+Pa+C.lift;V?(ot.push(Jt[0]-kt*.15,Ue-.45,Jt[1]-Dt*.15,Jt[0],Ue,Jt[1],zt[0],D,zt[1],zt[0]+kt*.15,D-.45,zt[1]+Dt*.15),vt.push(0,0,0,1,0,1,0,0)):(ot.push(Jt[0],Ue,Jt[1],zt[0],D,zt[1]),vt.push(0,Et/8,1,Et/8)),Q&&(Et+=2)}let Gt=V?4:2;for(let Q=0;Q<J.length-1;Q++){let bt=Q*Gt,At=(Q+1)*Gt;V?(K.push(bt,At,bt+1,bt+1,At,At+1),K.push(bt+2,At+2,bt+3,bt+3,At+2,At+3)):K.push(bt,At,bt+1,bt+1,At,At+1)}let Ft=new De;if(Ft.setAttribute("position",new pe(ot,3)),Ft.setAttribute("uv",new pe(vt,2)),Ft.setIndex(K),Ft.computeVertexNormals(),Ft.getAttribute("normal").getY(0)<0&&!V){let Q=Ft.index.array;for(let bt=0;bt<Q.length;bt+=3){let At=Q[bt+1];Q[bt+1]=Q[bt+2],Q[bt+2]=At}Ft.computeVertexNormals()}return Ft}let z={uTime:{value:0}},F=s.features.filter(C=>C.kind==="water"&&C.closed);for(let C of F){let V=(C._level??Math.min(...C.pts.map(Et=>t.heightAt(Et[0],Et[1]))))+.05,J=new hs(C.pts.map(Et=>new Bt(Et[0],-Et[1]))),ot=new _a(J,4);ot.rotateX(-Math.PI/2),ot.translate(0,V,0);let vt=new wn({uniforms:{...z,...Zt.fog},vertexShader:`varying vec3 vW;
${me.fog_pars_vertex}
        void main(){ vec4 w = modelMatrix*vec4(position,1.); vW=w.xyz; vec4 mvPosition = viewMatrix*w; gl_Position=projectionMatrix*mvPosition;
${me.fog_vertex}
}`,fragmentShader:`uniform float uTime; varying vec3 vW;
${me.fog_pars_fragment}
        void main(){
          vec2 p = vW.xz*0.09;
          float w1 = sin(p.x*3.1 + uTime*1.3 + sin(p.y*2.3+uTime*0.7)*1.7);
          float w2 = sin(p.y*2.7 - uTime*1.1 + sin(p.x*1.9-uTime*0.5)*1.9);
          float r = smoothstep(0.86,0.9, w1*w2);
          vec3 c = mix(vec3(0.16,0.55,0.93), vec3(0.24,0.70,1.0), smoothstep(-0.6,0.8,w1*0.5+w2*0.5));
          c = mix(c, vec3(0.92,0.98,1.0), r);
          gl_FragColor = vec4(c,1.);
          #include <colorspace_fragment>

${me.fog_fragment}
        }`,fog:!0}),K=new Ne(ot,vt);K.name="water",l(K),o.push(vt),C._waterLevel=V}let X=[];if(t.lake){let C=t.lake,V=On(C.pts),J=[16767291,16735581,5752831,16777215,16748497,8257418],ot=new Me(2,.7,3.6,2,.32),vt=new Me(1.2,.5,.8,2,.2);for(let K=0,Et=0;K<9&&Et<300;Et++){let Gt=V[0]+ie()*(V[2]-V[0]),Ft=V[1]+ie()*(V[3]-V[1]);if(Wr(C.pts,Gt,Ft)>-7)continue;let Q=new ue,bt=xe(ot,gt(J[K%J.length]),{ol:2.5});Q.add(bt);let At=xe(vt,gt(16777215),{ol:2});At.position.y=.45,Q.add(At);let Qt=xe(new ge(.42,12,8),gt(J[(K+2)%J.length]),{ol:2});Qt.position.set(0,.9,.7),Q.add(Qt),Q.position.set(Gt,(C._waterLevel??0)+.1,Ft),Q.rotation.y=ie()*6.28,l(Q),X.push({g:Q,ph:ie()*6.28,x:Gt,z:Ft,a:Q.rotation.y}),K++}}{let C=on(128,128,(K,Et,Gt)=>{K.fillStyle="#ffffff",K.fillRect(0,0,Et,Gt),K.fillStyle="#ffffff",K.fillRect(0,0,14,14),K.fillStyle="#3b4a6b",K.fillRect(34,30,60,58),K.fillStyle="#9ec9ff",K.fillRect(38,34,52,50),K.fillStyle="#ffffff",K.fillRect(62,34,4,50),K.fillRect(38,56,52,4),K.fillStyle="rgba(0,0,0,0.08)",K.fillRect(0,118,Et,10)},{repeat:!0});o.push(C);let V={generateTopUV:(K,Et,Gt,Ft,Q)=>[new Bt(.02,.98),new Bt(.02,.98),new Bt(.02,.98)],generateSideWallUV:(K,Et,Gt,Ft,Q,bt)=>{let At=Et[Gt*3],Qt=Et[Gt*3+1],q=Et[Gt*3+2],st=Et[Ft*3],kt=Et[Ft*3+1],Dt=Et[Ft*3+2],Wt=Et[Q*3+2],Jt=Et[bt*3+2],zt=(Math.abs(Qt-kt)<Math.abs(At-st)?At:Qt)/4.2,Ae=(Math.abs(Qt-kt)<Math.abs(At-st)?st:kt)/4.2;return[new Bt(zt,q/3.2),new Bt(Ae,Dt/3.2),new Bt(Ae,Wt/3.2),new Bt(zt,Jt/3.2)]}},J=["#e98a64","#f3d9a6","#d86f5a","#f6efe0","#a8c8e6","#f2b5a0","#c9b6e4","#f4c46a"],ot=["#5d6488","#7a5d6c","#4f6b78"],vt=[];for(let K of s.features){if(K.kind!=="building"||!K.closed||K.pts.length<4)continue;let Et=La(K.pts);if(_(Et[0],Et[1]))continue;let Gt=parseFloat(K.tags?.["building:levels"])||(ie()<.7?3:4),Ft=Math.min(30,Gt*3.1),Q=new hs(K.pts.map(Wt=>new Bt(Wt[0],-Wt[1]))),bt;try{bt=new xa(Q,{depth:Ft,bevelEnabled:!1,UVGenerator:V})}catch{continue}bt.rotateX(-Math.PI/2);let At=Math.min(...K.pts.map(Wt=>t.heightAt(Wt[0],Wt[1])))-1.5;bt.translate(0,At,0);let Qt=bt.getAttribute("normal"),q=Qt.count,st=new Float32Array(q*3),kt=new re(J[Math.floor(ie()*J.length)]).convertSRGBToLinear(),Dt=new re(ot[Math.floor(ie()*ot.length)]).convertSRGBToLinear();for(let Wt=0;Wt<q;Wt++){let Jt=Qt.getY(Wt)>.5?Dt:kt;st[Wt*3]=Jt.r,st[Wt*3+1]=Jt.g,st[Wt*3+2]=Jt.b}bt.setAttribute("color",new $e(st,3)),vt.push(bt.index?bt.toNonIndexed():bt)}if(vt.length){let K=Qe(vt),Et=xe(K,gt(16777215,{map:C,vertexColors:!0}),{cast:!0,ol:1.6,olRef:60});Et.name="buildings",l(Et)}}let it=t.sample(t.finishM),P=t.sample(0),mt={start:P,finish:it},Ot=new ue;l(Ot);function U(C,V,J,ot){let vt=new ue,K=Ve/2+1.4,Et=.85,Gt=on(256,32,(q,st,kt)=>{for(let Dt=0;Dt<16;Dt++)q.fillStyle=Dt%2?J:ot,q.fillRect(Dt*st/16,0,st/16+1,kt)},{repeat:!1});o.push(Gt);let Ft=new Je(K,Et,14,40,Math.PI);Ft.scale(1,1.25,1);let Q=xe(Ft,gt(16777215,{map:Gt}),{ol:3.5});vt.add(Q);let bt=new ce(Et*1.4,Et*1.6,.8,16);for(let q of[-1,1]){let st=xe(bt,gt(ot),{ol:3});st.position.set(q*K,.3,0),vt.add(st)}let At=Kn(1024,256,(q,st,kt)=>{q.fillStyle="#1b1b3a",Ye(q,0,0,st,kt,60),q.fill(),q.fillStyle=J,Ye(q,12,12,st-24,kt-24,50),q.fill(),an(q,"MARKRUN",st/2,kt*.42,150,"#ffffff","#1b1b3a",.18),an(q,V,st/2,kt*.83,56,"#ffe14d","#1b1b3a",.2)},o),Qt=xe(new Me(K*1.55,K*.4,.7,3,.25),[gt(ot),gt(ot),gt(ot),gt(ot),gt(16777215,{map:At}),gt(16777215,{map:At})],{ol:3.5});return Qt.position.y=K*1.25+Et*1.25+K*.2-.15,vt.add(Qt),vt.position.set(C.x,C.y-.1,C.z),vt.rotation.y=Math.atan2(-C.rz,C.rx),Ot.add(vt),vt}mt.finishArch=U(it,"FINISH","#ff3d8b","#ffd23f"),U(P,"START","#2e9bff","#ffd23f");let Y=on(256,64,(C,V,J)=>{let vt=V/16;for(let K=0;K<16;K++)for(let Et=0;Et<4;Et++)C.fillStyle=(K+Et)%2?"#111":"#fff",C.fillRect(K*vt,Et*vt,vt,vt)});o.push(Y);function j(C,V,J,ot=.03){let vt=new fn(Ve,J);vt.rotateX(-Math.PI/2);let K=new Ne(vt,gt(16777215,{map:V,transparent:!0,alphaTest:.3,polygonOffset:!0,polygonOffsetFactor:-2}));return K.position.set(C.x,C.y+ot,C.z),K.rotation.y=Math.atan2(-C.rz,C.rx),K.receiveShadow=!0,l(K),K}j(it,Y,2.2,.05);let G=Kn(512,128,(C,V,J)=>{C.fillStyle="#ffffff",C.fillRect(0,0,V,22),an(C,"START",V/2,80,72,"#ffffff","rgba(0,0,0,0)",0)},o);{let C=t.sample(2.5);j(C,G,3,.05).rotation.y+=Math.PI}let ct=new ke;function at(C,V,J,{ol:ot=0,olRef:vt,cast:K=!0,colors:Et,chunk:Gt=0}={}){if(!J.length)return null;if(Gt){let Q=new Map;J.forEach((At,Qt)=>{let q=`${Math.floor(At.x/Gt)},${Math.floor(At.z/Gt)}`,st=Q.get(q);st||Q.set(q,st={l:[],c:[]}),st.l.push(At),Et&&st.c.push(Et[Qt])});let bt=null;for(let{l:At,c:Qt}of Q.values()){let q=at(C,V,At,{ol:ot,olRef:vt,cast:K,colors:Et?Qt:null});bt=bt||q}return bt}let Ft=new en(C,V,J.length);return J.forEach((Q,bt)=>{ct.position.set(Q.x,Q.y,Q.z),ct.rotation.set(Q.rx||0,Q.ry||0,Q.rz||0),ct.scale.set(Q.sx??Q.s??1,Q.sy??Q.s??1,Q.sz??Q.s??1),ct.updateMatrix(),Ft.setMatrixAt(bt,ct.matrix),Et&&Ft.setColorAt(bt,new re(Et[bt]))}),Ft.castShadow=K,Ft.receiveShadow=!0,Ft.computeBoundingSphere(),ot&&Jn(Ft,ot,void 0,vt),x(Ft,J),l(Ft),Ft}let nt=[];{let C=J=>{let ot=t.rawExt(J-12),vt=t.rawExt(J),K=t.rawExt(J+12),Et=Math.atan2(vt[1]-ot[1],vt[0]-ot[0]),Ft=Math.atan2(K[1]-vt[1],K[0]-vt[0])-Et;for(;Ft>Math.PI;)Ft-=2*Math.PI;for(;Ft<-Math.PI;)Ft+=2*Math.PI;return Ft},V=[[20,t.LAP1_END_DRAW-20],[t.MAP_TO-40,t.finishM-10]];for(let[J,ot]of V){let vt=null;for(let K=J;K<ot;K+=4){let Et=C(K);Math.abs(Et)>.45?(!vt||Math.abs(Et)>Math.abs(vt.d))&&(vt={m:K,d:Et}):vt&&(nt.some(Gt=>Math.abs(Gt.m-vt.m)<50)||nt.push(vt),vt=null)}}}let rt=[],W=[],dt=[],H=[];for(let C of nt){let V=C.d>0;for(let J=-2;J<=2;J++){let ot=t.sample(C.m+J*5),vt=V?-1:1,K=Ve/2+1.6,Et=ot.x+ot.rx*K*vt,Gt=ot.z+ot.rz*K*vt;m(Et,Gt,.3),(V?W:rt).push({x:Et,y:t.heightAt(Et,Gt),z:Gt,ry:Math.atan2(-ot.tz,ot.tx)+(vt>0?Math.PI:0)})}for(let J=-3;J<=3;J++){let ot=t.sample(C.m+J*3.5),vt=V?1:-1,K=Ve/2+.7;dt.push({x:ot.x+ot.rx*K*vt,y:t.heightAt(ot.x+ot.rx*K*vt,ot.z+ot.rz*K*vt),z:ot.z+ot.rz*K*vt,ry:ie()*6});for(let Et=0;Et<2;Et++){let Gt=t.sample(C.m+J*3.5+Et*1.75),Ft=Ve/2+.1;H.push({x:Gt.x+Gt.rx*Ft*vt,y:Gt.y-.05,z:Gt.z+Gt.rz*Ft*vt,ry:Math.atan2(Gt.tx,Gt.tz),red:(J*2+Et)%2===0})}}}mt.corners=nt;{let C=on(256,96,(Ft,Q,bt)=>{Ft.fillStyle="#2f6fe0",Ft.fillRect(0,0,Q,bt),Ft.fillStyle="#ffffff";for(let At=0;At<4;At++){let Qt=18+At*60;Ft.beginPath(),Ft.moveTo(Qt,12),Ft.lineTo(Qt+26,12),Ft.lineTo(Qt+54,bt/2),Ft.lineTo(Qt+26,bt-12),Ft.lineTo(Qt,bt-12),Ft.lineTo(Qt+28,bt/2),Ft.closePath(),Ft.fill()}Ft.strokeStyle="#1b3f8f",Ft.lineWidth=8,Ft.strokeRect(0,0,Q,bt)}),V=C.clone();V.repeat.x=-1,V.offset.x=1,V.wrapS=as,V.needsUpdate=!0,o.push(C,V);let ot=(Ft=>{let Q=new Ee(3.2,1.2,.12);Q.rotateX(-.32),Q.translate(0,.62,.22);let bt=new Ee(3.2,1.2,.12);return bt.rotateX(.32),bt.translate(0,.62,-.22),bt.rotateY(Math.PI),Qe([Q,bt])})();dh(ot),at(ot,gt(16777215,{map:C}),W,{ol:2.5}),at(ot,gt(16777215,{map:V}),rt,{ol:2.5});let vt=on(16,64,(Ft,Q,bt)=>{for(let At=0;At<4;At++)Ft.fillStyle=At%2?"#ffffff":"#ff6a2b",Ft.fillRect(0,At*bt/4,Q,bt/4)});o.push(vt);let K=new ce(.06,.32,.9,12,1);K.translate(0,.5,0);let Et=new Ee(.8,.08,.8);Et.translate(0,.04,0),at(K,gt(16777215,{map:vt}),dt,{ol:2}),at(Et,gt(16738859),dt,{ol:1.5});let Gt=new Ee(.5,.22,1.75);Gt.translate(0,.11,0),at(Gt,gt(16777215),H.map(Ft=>Ft),{ol:1.5,colors:H.map(Ft=>Ft.red?15216959:16777215)})}let Ut=new ue;l(Ut);function _t(C,V,J,ot,vt,{postH:K=1.6,face:Et=0,scale:Gt=1}={}){let Ft=Kn(512,Math.round(512*ot/J),vt,o),Q=new ue,bt=xe(new Me(J,ot,.25,2,.08),[gt(5978660),gt(5978660),gt(5978660),gt(5978660),gt(16777215,{map:Ft}),gt(16777215,{map:Ft})],{ol:3});bt.position.y=K+ot/2,Q.add(bt);let At=new Ee(.25,K+ot*.5,.25);for(let kt of[-1,1]){let Dt=xe(At,gt(9067062),{ol:2});Dt.position.set(kt*J*.35,(K+ot*.5)/2,-.1),Q.add(Dt)}let Qt=Ve/2+2.2+J*.15,q=C.x+C.rx*Qt*V,st=C.z+C.rz*Qt*V;return Q.position.set(q,t.heightAt(q,st)-.1,st),Q.rotation.y=Math.atan2(-C.tx,-C.tz)+V*.5+Et,Q.scale.setScalar(Gt),Ut.add(Q),Q}let St=1720,It=t.sample(St-10);mt.hillSign=_t(It,1,6,3.2,(C,V,J)=>{C.fillStyle="#ffd23f",Ye(C,0,0,V,J,40),C.fill(),C.lineWidth=16,C.strokeStyle="#1b1b3a",Ye(C,8,8,V-16,J-16,34),C.stroke(),C.fillStyle="#3aa845",C.beginPath(),C.moveTo(40,J-40),C.lineTo(150,70),C.lineTo(260,J-40),C.closePath(),C.fill(),C.strokeStyle="#1b1b3a",C.lineWidth=8,C.stroke(),C.fillStyle="#fff",C.beginPath(),C.moveTo(118,118),C.lineTo(150,70),C.lineTo(182,118),C.closePath(),C.fill(),an(C,"THE",380,J*.3,72,"#ffffff","#1b1b3a",.2),an(C,"HILL",370,J*.66,120,"#ff3d8b","#1b1b3a",.16)},{postH:1.4}),mt.hillM=St;for(let C of[1,2,3,4]){let V=C*1e3,J=t.sample(t.geoOf(V));_t(J,-1,1.6,1.3,(ot,vt,K)=>{ot.fillStyle="#ffffff",Ye(ot,0,0,vt,K,50),ot.fill(),ot.fillStyle="#ff3d8b",Ye(ot,20,20,vt-40,K-40,36),ot.fill(),an(ot,`${C}K`,vt/2,K/2+8,230,"#ffffff","#1b1b3a",.14)},{postH:.7})}let tt=t.sample(2475);mt.lapBoard=_t(tt,1,4.4,2.6,(C,V,J)=>{C.fillStyle="#1b1b3a",Ye(C,0,0,V,J,40),C.fill(),C.fillStyle="#2e9bff",Ye(C,14,14,V-28,J-28,30),C.fill(),an(C,"LAP",V/2,J*.28,90,"#ffffff","#1b1b3a",.18),an(C,"2 OF 2",V/2,J*.66,150,"#ffe14d","#1b1b3a",.14)},{postH:1.2}),mt.lapM=2500;let $t=[],B=[],k=[],yt=[];function Ct(C,V,J,ot=3.2,vt=12){let K=null;for(let Et=C;Et<=V;Et+=vt){let Gt=t.sample(Et),Ft=Ve/2+1,Q=Gt.x+Gt.rx*Ft*J,bt=Gt.z+Gt.rz*Ft*J,At=t.heightAt(Q,bt);B.push({x:Q,y:At,z:bt});let Qt=new $(Q,At+ot,bt);if(K){let q=[];for(let st=0;st<=12;st++){let kt=st/12,Dt=K.clone().lerp(Qt,kt);Dt.y-=Math.sin(kt*Math.PI)*.6,q.push(Dt)}k.push(q);for(let st=1;st<12;st++){let kt=q[st],Dt=q[st+1].clone().sub(q[st-1]);$t.push({x:kt.x,y:kt.y,z:kt.z,ry:Math.atan2(-Dt.z,Dt.x)})}}K=Qt}}function Lt(C,V,J,ot=Ve/2+2.2){for(let vt=C;vt<=V;vt+=2.4){let K=t.sample(vt),Et=K.x+K.rx*ot*J,Gt=K.z+K.rz*ot*J;yt.push({x:Et,y:t.heightAt(Et,Gt),z:Gt,ry:Math.atan2(K.tx,K.tz)})}}let Z=t.finishM;Ct(Z-70,Z+10,1),Ct(Z-70,Z+10,-1),Ct(-6,50,1),Ct(-6,50,-1),Lt(Z-60,Z+14,1),Lt(Z-60,Z+14,-1),Lt(-4,40,1),Lt(-4,40,-1);{let C=new De;C.setAttribute("position",new pe([-.3,0,0,.3,0,0,0,-.62,0],3)),C.setAttribute("normal",new pe([0,0,1,0,0,1,0,0,1],3));let V=$t.map((Q,bt)=>[16727435,16765503,3054591,4054148,16747069,16777215][bt%6]);at(C,gt(16777215,{side:je}),$t,{colors:V,cast:!1});let J=new ce(.07,.09,3.3,6);J.translate(0,1.65,0),at(J,gt(16777215),B,{ol:1.5});let ot=new De().setFromPoints(k.flatMap(Q=>Q.slice(0,-1).flatMap((bt,At)=>[bt,Q[At+1]]))),vt=new Ks(ot,new cs({color:3355443}));l(vt),o.push(ot);let K=[];for(let Q=0;Q<4;Q++){let bt=new Ee(.16,1,.06);bt.translate(-.9+Q*.6,.5,0),K.push(bt)}let Et=new Ee(2.4,.12,.05);Et.translate(0,.65,.05),K.push(Et);let Gt=Et.clone();Gt.translate(0,-.35,0),K.push(Gt);let Ft=Qe(K);Ft.rotateY(Math.PI/2),at(Ft,gt(16777215),yt,{ol:1.8})}let ft=[],ht=(C,V,J,ot,vt,K=1.35)=>ft.push({m0:C,m1:V,side:J,off:Ve/2+3,depth:ot,density:vt,spacing:K});ht(Z-58,Z+12,1,6,1),ht(Z-58,Z+12,-1,6,1),ht(-2,38,1,5,.9),ht(-2,38,-1,5,.9),ht(1940,2010,1,4,.7),ht(1960,2010,-1,3,.6),ht(St-10,St+40,-1,3,.55),ht(2440,2490,-1,3,.7),ht(St-70,St+10,1,3,.5),ht(St-70,St-20,-1,3,.45),ht(2080,2160,1,4,.75),ht(2080,2160,-1,4,.75),ht(800,860,1,3,.6),ht(1250,1310,-1,3,.6),mt.crowdZones=ft;{let C=s.pois.filter(ot=>ot.kind==="bench"&&_(ot.pos[0],ot.pos[1])&&m(ot.pos[0],ot.pos[1],1)).map(ot=>({x:ot.pos[0],y:t.heightAt(ot.pos[0],ot.pos[1]),z:ot.pos[1],ry:ie()*6})),V=Qe([new Ee(1.8,.12,.5).translate(0,.5,0),new Ee(1.8,.4,.1).translate(0,.8,-.22),new Ee(.1,.5,.45).translate(-.8,.25,0),new Ee(.1,.5,.45).translate(.8,.25,0)]);at(V,gt(11892031),C,{ol:1.5});let J=s.pois.filter(ot=>ot.kind==="cafe"&&_(ot.pos[0],ot.pos[1])&&m(ot.pos[0],ot.pos[1],4));for(let ot of J){let vt=new ue;vt.add(xe(new Me(5,3,4,2,.2),gt(16774108),{ol:2.5})).position.y=1.5;let K=on(128,16,(Ft,Q,bt)=>{for(let At=0;At<8;At++)Ft.fillStyle=At%2?"#fff":"#ff4f6d",Ft.fillRect(At*16,0,16,bt)});o.push(K);let Et=xe(new Ee(5.6,.2,2),gt(16777215,{map:K}),{ol:2});Et.position.set(0,2.9,2.3),Et.rotation.x=.35,vt.add(Et);let Gt=xe(new qe(4,1.6,4),gt(3054591),{ol:2.5});Gt.position.y=3.8,Gt.rotation.y=Math.PI/4,vt.add(Gt),vt.position.set(ot.pos[0],t.heightAt(ot.pos[0],ot.pos[1]),ot.pos[1]),vt.rotation.y=ie()*6,l(vt),M(ot.pos[0],ot.pos[1],5)}}for(let C of ft)for(let V=C.m0-8;V<=C.m1+8;V+=4){let J=t.sample(V),ot=C.off+C.depth/2;M(J.x+J.rx*ot*C.side,J.z+J.rz*ot*C.side,C.depth/2+3)}for(let C of[P,it])M(C.x,C.z,14);function Mt(C,V){let J=null,ot=1e9;for(let vt of p){let K=(vt[0]-C)**2+(vt[1]-V)**2;K<ot&&(ot=K,J=vt)}return J}mt.nearestOnRibbon=Mt,mt.ribbonSamples=p;let wt=new Map;for(let C of p){let V=`${Math.floor(C[0]/10)},${Math.floor(C[1]/10)}`,J=wt.get(V);J||wt.set(V,J=[]),J.push(C)}let Rt=(C,V,J=1)=>{let ot=Math.floor(C/10),vt=Math.floor(V/10),K=(Ve/2+J)**2;for(let Et=-1;Et<=1;Et++)for(let Gt=-1;Gt<=1;Gt++)for(let Ft of wt.get(`${ot+Et},${vt+Gt}`)||[])if((Ft[0]-C)**2+(Ft[1]-V)**2<K)return!0;return!1};mt.reserve=M,mt.clearOf=m;let Pt=[],Xt=(C,V,J,ot)=>!m(C,V,2.5*ot)||T(C,V,1.5)?!1:(Pt.push({x:C,z:V,kind:J,s:ot}),M(C,V,2.2*ot),!0);for(let C of s.pois)C.kind==="tree"&&Xt(C.pos[0],C.pos[1],0,.85+ie()*.35);for(let C of s.features)if(C.kind==="wood"&&C.closed){let V=On(C.pts),J=(V[2]-V[0])*(V[3]-V[1]);for(let ot=0;ot<J/90;ot++){let vt=V[0]+ie()*(V[2]-V[0]),K=V[1]+ie()*(V[3]-V[1]);nr(C.pts,vt,K)&&Xt(vt,K,1,.9+ie()*.5)}}{let C=On(b);for(let V=0;V<2600;V++){let J=C[0]+ie()*(C[2]-C[0]),ot=C[1]+ie()*(C[3]-C[1]);!_(J,ot)||-Wr(b,J,ot)>45&&ie()<.75||Xt(J,ot,ie()<.7?1:2,.8+ie()*.5)}for(let V of s.features)if(V.kind==="road"&&!V.closed)for(let J=1;J<V.pts.length;J++){let ot=V.pts[J-1],vt=V.pts[J],K=Math.hypot(vt[0]-ot[0],vt[1]-ot[1]);for(let Et=0;Et<K;Et+=22){let Gt=Et/K,Ft=ot[0]+(vt[0]-ot[0])*Gt,Q=ot[1]+(vt[1]-ot[1])*Gt,bt=-(vt[1]-ot[1])/K,At=(vt[0]-ot[0])/K,Qt=8+ie()*2;ie()<.5&&Xt(Ft+bt*Qt,Q+At*Qt,0,.6+ie()*.2)}}}{let C=[3978315,5031250,3121226,6539594,8376650,3450963],V=new ce(.32,.5,4.2,7);V.translate(0,2.1,0);let J=new nn(3.2,1);J.scale(1,1.08,1),J.translate(0,6.6,0);let ot=Qe([new nn(3,1).translate(0,6.2,0),new nn(2.3,0).translate(1.9,5.3,.6),new nn(2.2,0).translate(-1.7,5.5,-.8),new nn(2,0).translate(.2,8.2,.3)].map(Su)),vt=Qe([new qe(3,4.2,8).translate(0,5,0),new qe(2.4,3.6,8).translate(0,7.2,0),new qe(1.6,3,8).translate(0,9.2,0)].map(Su)),K=Pt.map(Ft=>({x:Ft.x,y:t.heightAt(Ft.x,Ft.z)-.2,z:Ft.z,ry:ie()*6.28,s:Ft.s}));at(V,gt(9067062),K,{ol:2,olRef:40,chunk:160});let Et=gt(16777215);J.computeVertexNormals(),[J,ot,vt].forEach((Ft,Q)=>{let bt=K.filter((At,Qt)=>Pt[Qt].kind===Q);at(Ft,Et,bt,{ol:2.2,olRef:40,colors:bt.map(()=>C[Math.floor(ie()*C.length)]),chunk:160})}),mt.treeCount=Pt.length}{let C=Qe([0,1,2,3].map(K=>{let Et=new qe(.09,.55,3);return Et.translate(0,.27,0),Et.rotateZ((K-1.5)*.25),Et.rotateY(K*1.7),Et.translate((K-1.5)*.08,0,K%2*.06),Et.index?Et.toNonIndexed():Et})),V=Qe([new ce(.03,.03,.35,4).translate(0,.17,0).toNonIndexed(),new nn(.13,0).translate(0,.38,0)]),J=[],ot=[],vt=[];for(let K=0;K<9e3;K++){let Et=p[Math.floor(ie()*p.length)],Gt=ie()*6.283,Ft=Ve/2+1+ie()*22,Q=Et[0]+Math.cos(Gt)*Ft,bt=Et[1]+Math.sin(Gt)*Ft;if(!_(Q,bt)||T(Q,bt,.5)||!m(Q,bt,.2))continue;let At=t.heightAt(Q,bt)-.03;ie()<.62?J.push({x:Q,y:At,z:bt,ry:ie()*6,s:.5+ie()*.6}):(ot.push({x:Q,y:At,z:bt,ry:ie()*6,s:.35+ie()*.25}),vt.push(["#ff5d8f","#ffd93b","#ffffff","#b06bff","#ff8a3d","#57c7ff"][Math.floor(ie()*6)]))}at(C,gt(5226296),J,{cast:!1,chunk:120}),at(V,gt(16777215),ot,{cast:!1,colors:vt,chunk:120})}let jt=new wn({side:un,depthWrite:!1,fog:!1,uniforms:{top:{value:new re(3116287)},mid:{value:new re(9425919)},bot:{value:new re(15333631)}},vertexShader:"varying vec3 vP; void main(){ vP = normalize(position); gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.); }",fragmentShader:`uniform vec3 top; uniform vec3 mid; uniform vec3 bot; varying vec3 vP; void main(){ float h=vP.y; vec3 c = h>0.12? mix(mid, top, smoothstep(0.12,0.7,h)) : mix(bot, mid, smoothstep(-0.05,0.12,h)); gl_FragColor=vec4(c,1.);
#include <colorspace_fragment>
}`}),qt=new Ne(new ge(5e3,32,16),jt);qt.renderOrder=-10,qt.frustumCulled=!1,n.add(qt),o.push(jt,qt.geometry);let de=Qe([[0,0,0,14],[13,-3,2,10],[-13,-4,-1,10],[6,6,-2,9],[-6,5,3,8],[22,-6,0,6],[-22,-7,1,6]].map(([C,V,J,ot])=>new nn(ot,2).translate(C,V,J)));de.scale(1,.7,.8);let se=[h.x0+u/2,h.z0+g/2],be=[];for(let C=0;C<26;C++){let V=ie()*6.28,J=300+ie()*1300;be.push({x:se[0]+Math.cos(V)*J,y:170+ie()*120,z:se[1]+Math.sin(V)*J,ry:ie()*6,s:.8+ie()*1.4})}let lt=at(de,gt(16777215,{emissive:6981808,emissiveIntensity:.35,fog:!1}),be,{ol:1.5,olRef:300,cast:!1}),Yt=[];for(let C=0;C<18;C++){let V=C/18*6.28+ie()*.2,J=1900+ie()*500;Yt.push({x:se[0]+Math.cos(V)*J,y:-40,z:se[1]+Math.sin(V)*J,sx:320+ie()*260,sy:80+ie()*90,sz:260+ie()*200,ry:ie()*6})}at(new ge(1,24,12),gt(7128954),Yt,{cast:!1,colors:Yt.map((C,V)=>[8047487,6273413,9425290][V%3])});function Tt(C){z.uTime.value=C;for(let V of X)V.g.position.y=(t.lake?._waterLevel??0)+.1+Math.sin(C*1.7+V.ph)*.08,V.g.rotation.z=Math.sin(C*1.3+V.ph)*.06,V.g.rotation.y=V.a+Math.sin(C*.1+V.ph)*.4;lt&&(lt.position.x=Math.sin(C*.01)*40)}function Nt(){a.traverse(C=>{C.geometry&&C.geometry.dispose()});for(let C of o)C.dispose?.();n.remove(a),n.remove(qt)}return{group:a,anchors:mt,update:Tt,dispose:Nt,inPark:_,clearOf:m,reserve:M,blocked:T,groundTex:w,onPath:Rt,registerInstanced:x,clearArea:S,redrawGround:A}}function Su(n){let t=n.index?n.toNonIndexed():n;return t.computeVertexNormals(),t}function La(n){let t=0,e=0;for(let i of n)t+=i[0],e+=i[1];return[t/n.length,e/n.length]}function Ye(n,t,e,i,s,r){n.beginPath(),n.moveTo(t+r,e),n.arcTo(t+i,e,t+i,e+s,r),n.arcTo(t+i,e+s,t,e+s,r),n.arcTo(t,e+s,t,e,r),n.arcTo(t,e,t+i,e,r),n.closePath()}var Eu=[16735631,16765503,5752831,8248938,16747069,11566079,5234888,16739179,16777215,9414911],Tu=[4054148,16727435,16765503,3054591,16777215];function Kx(){let n=[];for(let i=0;i<=8;i++){let s=i/8,r=s*1.25,o=s<.12?.48+s*1.2:Math.sqrt(Math.max(0,1-Math.pow((s-.12)/.88,2.2)))*.62;n.push(new Bt(Math.max(.001,o),r))}n.unshift(new Bt(.001,0));let e=new Br(n,12);return e.computeVertexNormals(),e}function fh(n,t){let e=Rn(99),i=t.length,s=new ue;if(n.add(s),!i)return{update(){},hideWhere(){},dispose(){n.remove(s)},group:s};let r=Kx(),o=new ge(.15,8,5);o.scale(.8,1.15,.5);let a=new ge(.075,6,4);a.scale(.85,1.2,.5);let l=new ge(.13,6,5),h=new qe(.14,.36,6);h.translate(0,.18,0);let u=new qe(.26,.55,8);u.translate(0,.27,0);let g=new ge(.2,7,5),f=(F,X,it,P)=>{let mt=new en(F,X,it);return mt.castShadow=!0,mt.receiveShadow=!0,mt.userData.ol=P,s.add(mt),mt},c=f(r,gt(16777215),i,2.6),d=f(o,new Un({color:16777215}),i*2,0),M=f(a,new Un({color:1709088}),i*2,0),m=f(l,gt(16777215),i*2,2);d.castShadow=M.castShadow=!1;let p=[f(h,gt(16777215),i,2),f(u,gt(16777215),i,2),f(g,gt(16777215),i,2)],b=[0,0,0],_=new re,v=t.map((F,X)=>{let it=F.colour??Eu[Math.floor(e()*Eu.length)];c.setColorAt(X,_.set(it)),m.setColorAt(X*2,_),m.setColorAt(X*2+1,_);let P=e()<.3?-1:Math.floor(e()*3),mt=-1;return P>=0&&(mt=b[P]++,p[P].setColorAt(mt,_.set(Tu[Math.floor(e()*Tu.length)]))),{...F,s:F.scale??.85+e()*.35,ph:e()*6.28,sp:5+e()*4,tk:P,ti:mt,wave:e()<.5,ex:.3}});p.forEach((F,X)=>{F.count=b[X]});for(let F of[c,m,...p])F.instanceColor&&(F.instanceColor.needsUpdate=!0);let L=new we().makeScale(0,0,0),T=new we,E=new ri,R=new qn,x=new $,y=new $,S=new we,A=new we;function w(F,X,it){let P=v[F];if(P.hidden){for(let j of[c])j.setMatrixAt(F,L);for(let j=0;j<2;j++)d.setMatrixAt(F*2+j,L),M.setMatrixAt(F*2+j,L),m.setMatrixAt(F*2+j,L);P.tk>=0&&p[P.tk].setMatrixAt(P.ti,L);return}let mt=P.ex,Ot=X*P.sp*(.5+mt*.6)+P.ph,U=Math.max(0,Math.sin(Ot))*.32*mt,Y=1-Math.cos(Ot*2)*.05*mt;R.set(0,P.yaw+Math.sin(X*.8+P.ph)*.25*(1-mt),Math.sin(Ot*.5)*.08*mt),E.setFromEuler(R),S.compose(x.set(P.x,P.y+U,P.z),E,y.set(P.s/Math.sqrt(Y),P.s*Y,P.s/Math.sqrt(Y))),c.setMatrixAt(F,S);for(let j=0;j<2;j++){let G=j?.19:-.19;A.makeTranslation(G,.86,.5),T.multiplyMatrices(S,A),d.setMatrixAt(F*2+j,T),A.makeTranslation(G*1.02,.84+(mt>.6?.03:0),.565),T.multiplyMatrices(S,A),M.setMatrixAt(F*2+j,T);let ct=mt>.55?1:.15+.2*Math.max(0,Math.sin(Ot)),at=P.wave?Math.sin(Ot*1.5+j*3)*.25*mt:0,nt=(j?1:-1)*(.62+ct*.05+at*.3),rt=.45+ct*.85+at;A.makeTranslation(nt,rt,.12),T.multiplyMatrices(S,A),m.setMatrixAt(F*2+j,T)}P.tk>=0&&(A.makeTranslation(0,1.22,0),P.tk===0&&A.multiply(new we().makeRotationZ(Math.sin(Ot)*.3)),T.multiplyMatrices(S,A),p[P.tk].setMatrixAt(P.ti,T))}for(let F=0;F<i;F++)w(F,0,!0);let I=()=>{for(let F of[c,d,M,m,...p])F.instanceMatrix.needsUpdate=!0};I();for(let F of[c,d,M,m,...p]){if(!F.count){F.visible=!1;continue}F.computeBoundingSphere(),F.boundingSphere.radius+=2,F.userData.ol&&Jn(F,F.userData.ol,void 0,18)}function N(F,X,it=[],P=null){let mt=!1;for(let Ot=0;Ot<i;Ot++){let U=v[Ot];if(X&&(U.x-X.x)**2+(U.z-X.z)**2>260*260)continue;let Y=.25;if(P!=null)Y=P;else for(let j of it){let G=(j.x-U.x)**2+(j.z-U.z)**2;G<45*45&&(Y=Math.max(Y,1-Math.sqrt(G)/70))}U.ex+=(Y-U.ex)*.05,w(Ot,F),mt=!0}mt&&I()}function O(){for(let F of[r,o,a,l,h,u,g])F.dispose();for(let F of[c,d,M,m,...p])F.dispose();n.remove(s)}function z(F){let X=!1;for(let it=0;it<i;it++)!v[it].hidden&&F(v[it].x,v[it].z)&&(v[it].hidden=!0,w(it,0),X=!0);X&&I()}return{update:N,dispose:O,hideWhere:z,group:s,members:v}}function Au(n,t,e=5,i=null,s=null){let r=Rn(e),o=[];for(let[a,l]of t.entries())for(let h=l.m0;h<=l.m1;h+=l.spacing??1.35){let u=n.sample(h),g=Math.max(1,Math.round(l.depth/1.25));for(let f=0;f<g;f++){if(r()>l.density)continue;let c=l.off+f*1.25+r()*.35,d=(r()-.5)*.6,M=u.x+u.rx*c*l.side+u.tx*d,m=u.z+u.rz*c*l.side+u.tz*d;i&&i(M,m,1.4)||s&&s(M,m,.6)||o.push({zone:a,x:M,y:n.heightAt(M,m),z:m,yaw:Math.atan2(-u.rx*l.side,-u.rz*l.side)+(r()-.5)*.5})}}return o}var Ru={stocky:{torso:[.9,.76,.58],leg:.66,legR:.16,arm:.66,armR:.14,head:.47,hand:.19,shoe:[.34,.25,.6]},lanky:{torso:[.56,.86,.38],leg:1.06,legR:.095,arm:.9,armR:.085,head:.39,hand:.15,shoe:[.27,.21,.62]},compact:{torso:[.68,.6,.5],leg:.52,legR:.13,arm:.52,armR:.11,head:.5,hand:.17,shoe:[.3,.23,.5]},tall:{torso:[.7,.94,.46],leg:.92,legR:.125,arm:.8,armR:.11,head:.43,hand:.17,shoe:[.31,.24,.6]}},Cu=["#2b1d14","#5a3a1e","#c8642a","#e8c66a","#1d1d24","#a9a9b3","#3a2a1e","#8a5a2b","#ff5fa2"],jx=3.2,Zr=new Map,te=(n,t)=>(Zr.has(n)||Zr.set(n,t()),Zr.get(n));function Iu(){for(let n of Zr.values())n.dispose();Zr.clear()}function Qx(n){let t=2166136261;for(let e of n)t^=e.charCodeAt(0),t=Math.imul(t,16777619);return t>>>0}function tv(n,t,e,i,s,r){n.fillStyle=i,n.fillRect(0,0,t,e);let o=t*.25,a=e*.47,l=e*.64,h=t*.058,u="#1a1420";n.fillStyle="rgba(255,90,90,0.28)";for(let m of[-1,1])n.beginPath(),n.ellipse(o+m*h*1.75,l-e*.03,t*.022,e*.03,0,0,7),n.fill();let g=(m,p)=>{if(p==="heart"){n.fillStyle="#ff2d6f",n.strokeStyle=u,n.lineWidth=5,n.beginPath();let T=t*.03;n.moveTo(m,a+T*1.1),n.bezierCurveTo(m-T*2.2,a-T*.2,m-T*.9,a-T*1.9,m,a-T*.6),n.bezierCurveTo(m+T*.9,a-T*1.9,m+T*2.2,a-T*.2,m,a+T*1.1),n.fill(),n.stroke();return}if(p==="closed"||p==="happy"){n.strokeStyle=u,n.lineWidth=9,n.lineCap="round",n.beginPath(),p==="happy"?n.arc(m,a+e*.02,t*.024,Math.PI*1.1,Math.PI*1.9):(n.moveTo(m-t*.025,a),n.lineTo(m+t*.025,a)),n.stroke();return}if(p==="x"){n.strokeStyle=u,n.lineWidth=8,n.lineCap="round";let T=t*.02;n.beginPath(),n.moveTo(m-T,a-T),n.lineTo(m+T,a+T),n.moveTo(m+T,a-T),n.lineTo(m-T,a+T),n.stroke();return}if(p==="wink"&&m>o&&(p="happy"),p==="wink"&&(p="open"),p==="happy"){n.strokeStyle=u,n.lineWidth=9,n.lineCap="round",n.beginPath(),n.arc(m,a+e*.02,t*.024,Math.PI*1.1,Math.PI*1.9),n.stroke();return}let b=p==="wide"?1.3:1,_=t*.03*b,v=e*.085*b;n.fillStyle="#fff",n.strokeStyle=u,n.lineWidth=6,n.beginPath(),n.ellipse(m,a,_,v,0,0,7),n.fill(),n.stroke();let L=p==="wide"?.38:.55;n.fillStyle=u,n.beginPath(),n.ellipse(m+_*.15,a+v*.12,_*L,v*L*1.1,0,0,7),n.fill(),n.fillStyle="#fff",n.beginPath(),n.arc(m+_*.35,a-v*.2,_*.22,0,7),n.fill(),p==="half"&&(n.fillStyle=i,n.fillRect(m-_-4,a-v-4,_*2+8,v*1.05),n.strokeStyle=u,n.lineWidth=7,n.beginPath(),n.moveTo(m-_-2,a-v*.1),n.lineTo(m+_+2,a-v*.1),n.stroke())},f={sleepy:"half",smug:"half",cheeky:"wink","wide-eyed":"wide"}[s]||"open";r==="happy"&&(f="happy"),r==="love"&&(f="heart"),r==="dead"&&(f="x"),r==="effort"&&s!=="goofy"&&(f="open");for(let m of[-1,1])g(o+m*h,f);n.strokeStyle=u,n.lineWidth=10,n.lineCap="round";let c=r==="effort"||s==="determined"||s==="gritted"?.35:r==="sad"||s==="worried"?-.35:s==="smug"||s==="cheeky"?.15:s==="wide-eyed"?-.2:0;for(let m of[-1,1]){let p=o+m*h,b=a-e*.13,_=t*.026,v=p-m*_,L=p+m*_;n.beginPath(),n.moveTo(L,b-c*18),n.lineTo(v,b+c*18),n.stroke()}n.lineWidth=8,n.strokeStyle=u,n.fillStyle="#7a1e2e";let d=o,M=r||"normal";if(M==="happy"||M==="normal"&&s==="grin")n.beginPath(),n.moveTo(d-t*.04,l-e*.02),n.quadraticCurveTo(d,l+e*.12,d+t*.04,l-e*.02),n.closePath(),n.fill(),n.stroke(),n.fillStyle="#fff",n.fillRect(d-t*.03,l-e*.018,t*.06,e*.03),n.fillStyle="#ff7d8f",n.beginPath(),n.ellipse(d,l+e*.06,t*.015,e*.02,0,0,7),n.fill();else if(M==="effort"){n.fillStyle="#fff",n.beginPath(),Ye(n,d-t*.035,l-e*.03,t*.07,e*.065,10),n.fill(),n.stroke(),n.lineWidth=4,n.beginPath(),n.moveTo(d-t*.035,l),n.lineTo(d+t*.035,l);for(let m=-2;m<=2;m++)n.moveTo(d+m*t*.012,l-e*.03),n.lineTo(d+m*t*.012,l+e*.035);n.stroke()}else if(M==="sad"||M==="dead")n.beginPath(),n.moveTo(d-t*.03,l+e*.04),n.quadraticCurveTo(d,l-e*.04,d+t*.03,l+e*.04),n.stroke(),M==="dead"&&(n.fillStyle="#ff7d8f",n.beginPath(),n.ellipse(d+t*.012,l+e*.07,t*.012,e*.04,.2,0,7),n.fill(),n.stroke());else if(M==="love"||M==="pant")n.beginPath(),n.ellipse(d,l+e*.02,t*.022,e*.05,0,0,7),n.fill(),n.stroke();else if(s==="gritted"){n.fillStyle="#fff",n.beginPath(),Ye(n,d-t*.04,l-e*.03,t*.08,e*.06,10),n.fill(),n.stroke(),n.lineWidth=4,n.beginPath(),n.moveTo(d-t*.04,l),n.lineTo(d+t*.04,l);for(let m=-2;m<=2;m++)n.moveTo(d+m*t*.014,l-e*.03),n.lineTo(d+m*t*.014,l+e*.03);n.stroke()}else if(s==="tongue-out")n.beginPath(),n.moveTo(d-t*.035,l),n.quadraticCurveTo(d,l+e*.05,d+t*.035,l),n.stroke(),n.fillStyle="#ff6f8a",n.beginPath(),n.ellipse(d+t*.008,l+e*.06,t*.016,e*.05,.15,0,7),n.fill(),n.stroke(),n.strokeStyle="rgba(0,0,0,0.35)",n.lineWidth=3,n.beginPath(),n.moveTo(d+t*.008,l+e*.03),n.lineTo(d+t*.01,l+e*.08),n.stroke();else if(s==="wide-eyed")n.beginPath(),n.ellipse(d,l+e*.02,t*.016,e*.04,0,0,7),n.fill(),n.stroke();else if(s==="cheeky")n.beginPath(),n.moveTo(d-t*.04,l-e*.01),n.quadraticCurveTo(d,l+e*.08,d+t*.045,l-e*.035),n.stroke();else if(s==="smug")n.beginPath(),n.moveTo(d-t*.03,l+e*.01),n.quadraticCurveTo(d+t*.01,l+e*.05,d+t*.04,l-e*.03),n.stroke();else if(s==="worried"){n.beginPath(),n.moveTo(d-t*.03,l+e*.02);for(let m=0;m<=6;m++)n.lineTo(d-t*.03+m*t*.01,l+e*.02+(m%2?-1:1)*e*.012);n.stroke()}else s==="goofy"?(n.beginPath(),n.moveTo(d-t*.04,l),n.quadraticCurveTo(d,l+e*.09,d+t*.04,l),n.closePath(),n.fill(),n.stroke(),n.fillStyle="#ff7d8f",n.beginPath(),n.ellipse(d+t*.01,l+e*.07,t*.016,e*.045,0,0,7),n.fill(),n.stroke(),n.fillStyle="#fff",n.fillRect(d-t*.02,l-2,t*.016,e*.03)):s==="determined"?(n.beginPath(),n.moveTo(d-t*.03,l+e*.01),n.lineTo(d+t*.03,l+e*.01),n.stroke()):(n.beginPath(),n.moveTo(d-t*.035,l-e*.01),n.quadraticCurveTo(d,l+e*.07,d+t*.035,l-e*.01),n.stroke());n.strokeStyle="rgba(0,0,0,0.25)",n.lineWidth=6,n.beginPath(),n.arc(o,a+e*.09,t*.012,.2,Math.PI-.2),n.stroke()}function ev(n,t){return on(256,200,(e,i,s)=>{e.fillStyle="#ffffff",Ye(e,0,0,i,s,20),e.fill(),e.fillStyle=t,e.fillRect(0,0,i,44),e.font=`30px ${uh}`,e.fillStyle="#fff",e.textAlign="center",e.textBaseline="middle",e.fillText("MARKRUN",i/2,24),an(e,String(n),i/2,128,140,"#1a1420","#1a1420",0),e.fillStyle="#c33";for(let[r,o]of[[16,60],[i-16,60],[16,s-16],[i-16,s-16]])e.beginPath(),e.arc(r,o,6,0,7),e.fill()})}function nv(n){return on(128,128,(t,e,i)=>{if(t.fillStyle="#ffffff",t.strokeStyle="#1a1420",t.lineWidth=8,t.beginPath(),t.arc(e/2,i/2-6,48,0,7),t.fill(),t.stroke(),t.beginPath(),t.moveTo(e/2-12,i-26),t.lineTo(e/2,i-4),t.lineTo(e/2+8,i-28),t.fill(),n==="!")an(t,"!",e/2,i/2-4,84,"#ff3d8b","#1a1420",.12);else if(n==="heart"){t.fillStyle="#ff2d6f";let s=e/2,r=i/2-2,o=16;t.beginPath(),t.moveTo(s,r+o*1.3),t.bezierCurveTo(s-o*2.6,r-o*.3,s-o,r-o*2.2,s,r-o*.7),t.bezierCurveTo(s+o,r-o*2.2,s+o*2.6,r-o*.3,s,r+o*1.3),t.fill(),t.stroke()}else if(n==="floss"){t.fillStyle="#ff9bd2";for(let[s,r,o]of[[54,44,18],[74,46,17],[64,30,16],[62,54,16]])t.beginPath(),t.arc(s,r,o,0,7),t.fill();t.strokeStyle="#c99a5a",t.lineWidth=6,t.beginPath(),t.moveTo(64,62),t.lineTo(64,96),t.stroke()}else if(n==="sweat"){t.fillStyle="#57c7ff";for(let[s,r]of[[50,50],[78,64]])t.beginPath(),t.moveTo(s,r-22),t.quadraticCurveTo(s+14,r,s,r+10),t.quadraticCurveTo(s-14,r,s,r-22),t.fill(),t.stroke()}})}function Pu(n,t={}){let e=n.look||{},i=Ru[e.build]||Ru.compact,s=Qx(n.id+(n.nickname||"")),r=Rn(s),o=n.colour?.primary||"#ff4757",a=n.colour?.secondary||"#ffffff",l=e.skin||"#f1c6a5",h=Cu[s%Cu.length],u=[],g=gt(o),f=gt(a),c=gt(l),d=gt(h),M=new re(a).getHSL({}).l>.85?"#ffffff":a,m=gt(M),p=gt("#ffffff"),b=gt("#22202c"),_=(Z,ft,ht=jx)=>xe(Z,ft,{ol:ht,olRef:9}),v=new ue;v.name=`runner-${n.id}`;let L=new ue;v.add(L);let T=new ue;L.add(T);let E=i.leg/2,R=i.leg+i.shoe[1]*.75;T.position.y=R;let x=_(te(`shorts${e.build}`,()=>new Me(i.torso[0]*.92,.32,i.torso[2]*.95,3,.12)),f);x.position.y=.02,T.add(x);let y=new ue;y.position.y=.12,T.add(y);let S=_(te(`torso${e.build}`,()=>new Me(...i.torso,4,Math.min(i.torso[2],i.torso[0])*.42)),g);S.position.y=i.torso[1]/2,y.add(S);for(let Z of[-1,1]){let ft=xe(te(`stripe${e.build}`,()=>new Ee(.06,i.torso[1]*.8,i.torso[2]*.7)),gt(a),{cast:!1});ft.position.set(Z*i.torso[0]*.5,i.torso[1]*.5,0),y.add(ft)}let A=ev(n.lane??0,o);u.push(A);let w=new Ne(te("bib",()=>new fn(1,.78)),gt(16777215,{map:A})),I=Math.min(.42,i.torso[0]*.6);w.scale.setScalar(I),w.position.set(0,i.torso[1]*.45,i.torso[2]/2+.012),y.add(w);let N=new ue;N.position.y=i.torso[1]+.02,y.add(N);let O=new ue;N.add(O);let z=document.createElement("canvas");z.width=1024,z.height=512;let F=new js(z);F.colorSpace=hn,F.anisotropy=4,u.push(F);let X=null,it=Z=>{Z!==X&&(X=Z,tv(z.getContext("2d"),1024,512,l,e.face||"grin",Z),F.needsUpdate=!0)};it("normal");let P=i.head,mt=_(te(`head${P}`,()=>new ge(P,32,20).scale(1,.98,.96)),gt(16777215,{map:F}));mt.position.y=P*.92,O.add(mt);for(let Z of[-1,1]){let ft=_(te(`ear${P}`,()=>new ge(P*.2,10,8).scale(.6,1,.8)),c,2.5);ft.position.set(Z*P*.97,P*.9,0),O.add(ft)}let Ot=_(te(`nose${P}`,()=>new ge(P*.14,10,8)),c,2);Ot.position.set(0,P*.84,P*.97),O.add(Ot),dt(e.hair,e.hat),H(e.hat);let U=[];for(let Z of[-1,1]){let ft=new ue;ft.position.set(Z*(i.torso[0]/2+i.armR*.55),i.torso[1]-i.armR*1.1,0),y.add(ft);let ht=_(te(`sleeve${e.build}`,()=>new ge(i.armR*1.65,14,10)),g);ft.add(ht);let Mt=_(te(`uarm${e.build}`,()=>new Yn(i.armR,i.arm/2-i.armR,4,10).translate(0,-i.arm/4,0)),c);ft.add(Mt);let wt=new ue;wt.position.y=-i.arm/2+i.armR*.4,ft.add(wt);let Rt=_(te(`farm${e.build}`,()=>new Yn(i.armR*.95,i.arm/2-i.armR,4,10).translate(0,-i.arm/4,0)),c);wt.add(Rt);let Pt=_(te(`hand${e.build}`,()=>new ge(i.hand,14,10).scale(1,1.1,.9)),c);Pt.position.y=-i.arm/2-i.hand*.4,wt.add(Pt),U.push({sh:ft,el:wt,hand:Pt})}let Y=[];for(let Z of[-1,1]){let ft=new ue;ft.position.set(Z*i.torso[0]*.24,0,0),T.add(ft);let ht=_(te(`thigh${e.build}`,()=>new Yn(i.legR*1.15,E-i.legR,4,10).translate(0,-E/2,0)),c);ft.add(ht);let Mt=_(te(`sleg${e.build}`,()=>new ce(i.legR*1.6,i.legR*1.5,E*.5,12).translate(0,-E*.2,0)),f);ft.add(Mt);let wt=new ue;wt.position.y=-E,ft.add(wt);let Rt=_(te(`shin${e.build}`,()=>new Yn(i.legR,E-i.legR,4,10).translate(0,-E/2,0)),c);wt.add(Rt);let Pt=_(te(`sock${e.build}`,()=>new ce(i.legR*1.12,i.legR*1.12,E*.25,10).translate(0,-E*.86,0)),gt(16777215),2.5);wt.add(Pt);let Xt=new ue;Xt.position.y=-E,wt.add(Xt);let jt=_(te(`shoe${e.build}`,()=>new Me(...i.shoe,3,i.shoe[1]*.45).translate(0,-i.shoe[1]*.25,i.shoe[2]*.22)),m);Xt.add(jt);let qt=xe(te(`sole${e.build}`,()=>new Me(i.shoe[0]*1.04,i.shoe[1]*.3,i.shoe[2]*1.03,2,.05).translate(0,-i.shoe[1]*.62,i.shoe[2]*.22)),p,{ol:2.5,olRef:9});Xt.add(qt);let de=xe(te(`swoosh${e.build}`,()=>new Ee(i.shoe[0]*1.06,i.shoe[1]*.18,i.shoe[2]*.5).translate(0,-i.shoe[1]*.2,i.shoe[2]*.2)),gt(o),{cast:!1});Xt.add(de),Y.push({hp:ft,kn:wt,an:Xt})}Ut(e.accessory);let j=new ue;j.visible=!1;{let Z=xe(te("flossStick",()=>new ce(.025,.025,.6,5).rotateX(Math.PI/2).translate(0,0,.3)),gt("#e8d0a0"),{cast:!1}),ft=xe(te("flossFluff",()=>{let ht=Rn(5);return Qe(Array.from({length:7},()=>new nn(.16+ht()*.06,1).translate((ht()-.5)*.22,(ht()-.5)*.22,.72+(ht()-.5)*.2)))}),gt("#ff9bd2"),{ol:2.5,olRef:9});j.add(Z,ft),j.userData.fluff=ft,j.position.y=-i.arm/2-i.hand*.4,U[0].el.add(j)}function G(Z,ft){Z==="floss"&&(j.visible=ft>0,ft>0&&j.userData.fluff.scale.setScalar(Math.max(.15,ft)))}let ct={},at=new ca(new Dr({transparent:!0,depthTest:!1}));at.scale.setScalar(.9),at.visible=!1,at.renderOrder=20,v.add(at);let nt=Z=>{if(!Z){at.visible=!1;return}ct[Z]||(ct[Z]=nv(Z),u.push(ct[Z])),at.material.map=ct[Z],at.material.needsUpdate=!0,at.visible=!0},rt=R+.12+i.torso[1]+.02+P*2;at.position.y=rt+.45;let W=new Set([S,x,mt,...U.flatMap(Z=>[Z.hand]),...Y.map(Z=>Z.an.children[0])]);for(let Z of U)Z.sh.children.forEach(ft=>ft.isMesh&&W.add(ft));for(let Z of Y)Z.hp.children.forEach(ft=>ft.isMesh&&W.add(ft));v.traverse(Z=>{Z.isMesh&&!Z.userData.isOutline&&(Z.castShadow=W.has(Z))});function dt(Z,ft){let ht=Z||"short";if(ht==="bald")return;let Mt=(wt=1.07,Rt=.48)=>{let Pt=_(te(`hcap${P}${wt}${Rt}`,()=>new ge(P*wt,24,14,0,Math.PI*2,0,Math.PI*Rt)),d);return Pt.position.y=P*.92,Pt.rotation.x=-.32,O.add(Pt),Pt};if(ht==="curly"||ht==="afro"){let wt=te(`curly${P}`,()=>{let Pt=Rn(7),Xt=[];for(let jt=0;jt<26;jt++){let qt=Pt()*Math.PI*.55,de=Pt()*Math.PI*2,se=new $(Math.sin(qt)*Math.cos(de),Math.cos(qt),Math.sin(qt)*Math.sin(de)).multiplyScalar(P*1.02);se.z>P*.55&&se.y<P*.75||Xt.push(new nn(P*.33,1).translate(se.x,se.y,se.z-P*.08))}return Qe(Xt)}),Rt=_(wt,d);Rt.position.y=P*.98,ht==="afro"&&(Rt.scale.setScalar(1.28),Rt.position.y=P*1.05),O.add(Rt);return}if(ft==="beanie"||ft==="bucket"||ft==="bobble"){if(Mt(1.05,.5),ht==="mullet"||ht==="long"||ht==="ponytail"){let wt=_(te(`mul${P}`,()=>new Me(P*1.5,P*.9,P*.4,3,P*.15)),d);wt.position.set(0,P*.35,-P*.78),O.add(wt)}return}if(ht==="buzz"){let wt=_(te(`buzz${P}`,()=>new ge(P*1.025,24,14,0,Math.PI*2,0,Math.PI*.45)),d,2);wt.position.y=P*.92,wt.rotation.x=-.32,O.add(wt);return}if(Mt(),ht==="quiff"||ht==="swept"){let wt=_(te(`quiff${P}${ht}`,()=>new ge(P*.55,16,10).scale(ht==="quiff"?1.3:1.7,ht==="quiff"?.75:.45,1)),d);wt.position.set(ht==="swept"?P*.25:0,P*1.82,P*.38),wt.rotation.set(-.5,0,ht==="swept"?-.35:0),O.add(wt)}if(ht==="mullet"){let wt=_(te(`mul${P}`,()=>new Me(P*1.5,P*.9,P*.4,3,P*.15)),d);wt.position.set(0,P*.35,-P*.78),O.add(wt)}if(ht==="long"){let wt=_(te(`hlong${P}`,()=>new Me(P*1.8,P*1.6,P*.5,3,P*.2)),d);wt.position.set(0,P*.4,-P*.62),O.add(wt)}if(ht==="ponytail"){let wt=new ue;wt.position.set(0,P*1.35,-P*.85),O.add(wt);for(let Rt=0;Rt<3;Rt++){let Pt=_(te(`pt${P}${Rt}`,()=>new ge(P*(.32-Rt*.05),12,8)),d);Pt.position.set(0,-Rt*P*.32,-Rt*P*.18),wt.add(Pt)}O.userData.pony=wt}if(ht==="bun"){let wt=_(te(`bun${P}`,()=>new ge(P*.38,14,10)),d);wt.position.set(0,P*2,-P*.2),O.add(wt)}if(ht==="mohawk"||ht==="spiky"){let wt=ht==="mohawk"?5:9;for(let Rt=0;Rt<wt;Rt++){let Pt=_(te(`spk${P}`,()=>new qe(P*.2,P*.7,8)),d),Xt=ht==="mohawk"?0:Rt/wt*Math.PI*2,jt=ht==="mohawk"?-.9+Rt/(wt-1)*1.8:.6;Pt.position.set(Math.sin(Xt)*Math.sin(jt)*P,P*.92+Math.cos(jt)*P*1.05,(ht==="mohawk"?Math.sin(jt):Math.cos(Xt)*Math.sin(jt))*P),Pt.lookAt(Pt.position.clone().multiplyScalar(3)),Pt.rotateX(Math.PI/2),O.add(Pt)}}}function H(Z){if(!Z)return;let ft=gt(a==="#ffffff"||a==="#f8f8f8"?o:a),ht=gt(o);if(Z==="backwards-cap"){let Mt=_(te(`capd${P}`,()=>new ge(P*1.1,24,12,0,Math.PI*2,0,Math.PI*.42)),ft);Mt.position.y=P*.98,Mt.rotation.x=-.18,O.add(Mt);let wt=_(te(`brim${P}`,()=>new ce(P*.75,P*.75,P*.08,20,1,!1,-Math.PI/2,Math.PI).scale(1.2,1,1.15)),ht);wt.position.set(0,P*1.42,-P*.62),wt.rotation.set(-.12,Math.PI,0),O.add(wt)}else if(Z==="bobble"){let Mt=_(te(`bean${P}`,()=>new ge(P*1.1,24,14,0,Math.PI*2,0,Math.PI*.5).scale(1,1.15,1)),ht);Mt.position.y=P*.96,Mt.rotation.x=-.12,O.add(Mt);let wt=_(te(`brim2${P}`,()=>new Je(P*1.05,P*.17,8,24)),ft);wt.rotation.x=Math.PI/2-.12,wt.position.y=P*1.12,O.add(wt);let Rt=_(te(`bigbob${P}`,()=>new nn(P*.48,1)),ft);Rt.position.y=P*2.45,O.add(Rt),O.userData.bobble=Rt}else if(Z==="cap"||Z==="visor"){if(Z==="cap"){let wt=_(te(`capd${P}`,()=>new ge(P*1.1,24,12,0,Math.PI*2,0,Math.PI*.42)),ft);wt.position.y=P*.98,wt.rotation.x=-.18,O.add(wt)}else{let wt=_(te(`vband${P}`,()=>new Je(P*1,P*.12,8,24)),ft);wt.rotation.x=Math.PI/2-.25,wt.position.y=P*1.35,O.add(wt)}let Mt=_(te(`brim${P}`,()=>new ce(P*.75,P*.75,P*.08,20,1,!1,-Math.PI/2,Math.PI).scale(1.2,1,1.15)),ht);Mt.position.set(0,P*1.42,P*.62),Mt.rotation.x=.12,O.add(Mt)}else if(Z==="beanie"){let Mt=_(te(`bean${P}`,()=>new ge(P*1.1,24,14,0,Math.PI*2,0,Math.PI*.5).scale(1,1.15,1)),ft);Mt.position.y=P*.96,Mt.rotation.x=-.12,O.add(Mt);let wt=_(te(`brim2${P}`,()=>new Je(P*1.05,P*.17,8,24)),ht);wt.rotation.x=Math.PI/2-.12,wt.position.y=P*1.12,O.add(wt);let Rt=_(te(`bob${P}`,()=>new nn(P*.3,1)),ht);Rt.position.y=P*2.25,O.add(Rt)}else if(Z==="headband"||Z==="sweatband"){let Mt=_(te(`hb${P}`,()=>new Je(P*1,P*.13,8,28)),ft);Mt.rotation.x=Math.PI/2-.2,Mt.position.y=P*1.3,O.add(Mt);let wt=_(te(`hbt${P}`,()=>new Me(P*.2,P*.5,P*.08,2,.02)),ft);wt.position.set(.12,P*1.1,-P*1.05),wt.rotation.z=.5,O.add(wt),O.userData.tail=wt}else if(Z==="bucket"){let Mt=_(te(`buck${P}`,()=>new ce(P*.8,P*1.02,P*.7,20)),ft);Mt.position.y=P*1.75,O.add(Mt);let wt=_(te(`buckb${P}`,()=>new ce(P*1.5,P*1.5,P*.06,24)),ht);wt.position.y=P*1.42,wt.rotation.x=.1,O.add(wt)}else if(Z==="crown"||Z==="tiara"){let Mt=_(te(`crown${P}`,()=>new ce(P*.7,P*.62,P*.5,8,1,!0)),gt("#ffd23f",{side:je}));Mt.position.y=P*2,O.add(Mt)}else if(Z==="wizard"||Z==="party"){let Mt=_(te(`cone${P}`,()=>new qe(P*.8,P*1.8,16)),ft);Mt.position.y=P*2.3,Mt.rotation.z=.15,O.add(Mt);let wt=_(te(`bob${P}`,()=>new nn(P*.3,1)),ht);wt.position.set(-P*.12,P*3.15,0),O.add(wt)}else if(Z==="helmet"||Z==="bike_helmet"){let Mt=_(te(`helm${P}`,()=>new ge(P*1.14,20,12,0,Math.PI*2,0,Math.PI*.46).scale(1,.9,1.15)),ft);Mt.position.y=P*1,O.add(Mt)}else if(Z==="santa"){let Mt=_(te(`santa${P}`,()=>new qe(P*.95,P*1.6,16)),gt("#e8313f"));Mt.position.y=P*2.2,Mt.rotation.z=.5,O.add(Mt);let wt=_(te(`santar${P}`,()=>new Je(P*.95,P*.2,8,24)),gt("#ffffff"));wt.rotation.x=Math.PI/2,wt.position.y=P*1.45,O.add(wt)}else{let Mt=_(te(`cone${P}`,()=>new qe(P*.8,P*1.8,16)),ft);Mt.position.y=P*2.3,O.add(Mt)}}function Ut(Z){if(Z){if(Z==="sunglasses"||Z==="glasses"){let ft=Z==="sunglasses";for(let Mt of[-1,1]){let wt=_(te(`lens${P}${ft}`,()=>new Me(P*.5,P*.32,P*.08,2,P*.06)),ft?gt("#141420"):gt("#cfefff"),2);wt.position.set(Mt*P*.3,P*1.02,P*.98),wt.rotation.y=Mt*.28,O.add(wt)}let ht=xe(te(`bridge${P}`,()=>new Ee(P*.3,P*.06,P*.06)),gt("#141420"),{cast:!1});ht.position.set(0,P*1.06,P*1.04),O.add(ht)}else if(Z==="medal"){let ft=_(te("ribbon",()=>new Je(.2,.03,6,20,Math.PI)),gt("#2e9bff"),2);ft.rotation.z=Math.PI,ft.position.set(0,i.torso[1]+.02,i.torso[2]/2-.05),ft.rotation.x=-.3,y.add(ft);let ht=_(te("medal",()=>new ce(.11,.11,.04,16).rotateX(Math.PI/2)),gt("#ffd23f",{emissive:"#664400",emissiveIntensity:.3}),2.5);ht.position.set(0,i.torso[1]-.22,i.torso[2]/2+.05),y.add(ht),w.position.y-=.1,w.position.x=.12,w.scale.multiplyScalar(.8)}else if(Z==="headphones"){let ft=_(te(`hp${P}`,()=>new Je(P*1.08,P*.07,6,24,Math.PI)),gt("#22202c"),2);ft.position.y=P*.95,O.add(ft);for(let ht of[-1,1]){let Mt=_(te(`hpc${P}`,()=>new ce(P*.3,P*.3,P*.2,14).rotateZ(Math.PI/2)),gt(o),2.5);Mt.position.set(ht*P*1.02,P*.92,0),O.add(Mt)}}else if(Z==="sweatband"||Z==="wristbands"||Z==="watch")for(let ft of U){let ht=_(te(`wb${e.build}`,()=>new ce(i.armR*1.3,i.armR*1.3,.12,10).translate(0,-i.arm/2+.1,0)),gt(Z==="watch"?"#22202c":a),2);if(ft.el.add(ht),Z==="watch")break}else if(Z==="scarf"){let ft=_(te("scarf",()=>new Je(.22,.08,8,18)),gt(a));ft.rotation.x=Math.PI/2,ft.position.y=.02,N.add(ft);let ht=_(te("scarft",()=>new Me(.14,.5,.06,2,.03)),gt(a));ht.position.set(.1,-.15,-.25),ht.rotation.x=.5,N.add(ht),O.userData.tail2=ht}else if(Z==="cape"){let ft=_(te(`cape${e.build}`,()=>new fn(i.torso[0]*1.2,i.torso[1]*1.5,1,4).translate(0,-i.torso[1]*.75,0)),gt(a,{side:je}),2),ht=new ue;ht.position.set(0,i.torso[1],-i.torso[2]/2-.03),ht.add(ft),y.add(ht),O.userData.cape=ht}else if(Z==="backpack"){let ft=_(te(`bp${e.build}`,()=>new Me(i.torso[0]*.7,i.torso[1]*.7,.25,3,.08)),gt(a));ft.position.set(0,i.torso[1]*.5,-i.torso[2]/2-.12),y.add(ft)}else if(Z==="moustache"||Z==="mustache"){let ft=_(te(`mou${P}`,()=>new Yn(P*.09,P*.5,4,8).rotateZ(Math.PI/2)),gt("#3a2616"),2);ft.position.set(0,P*.7,P*.98),O.add(ft)}else if(Z==="beard"){let ft=_(te(`beard${P}`,()=>new ge(P*.78,18,12,0,Math.PI*2,Math.PI*.45,Math.PI*.55).scale(1.05,1,.75)),d,2.5);ft.position.set(0,P*.78,P*.32),O.add(ft);let ht=_(te(`mou${P}`,()=>new Yn(P*.09,P*.5,4,8).rotateZ(Math.PI/2)),d,2);ht.position.set(0,P*.7,P*.98),O.add(ht)}else if(Z==="bumbag"){let ft=_(te(`bum${e.build}`,()=>new Me(i.torso[0]*.5,.2,.18,2,.07)),gt(a==="#ffffff"||a==="#f8f8f8"?"#22202c":a));ft.position.set(i.torso[0]*.12,.08,i.torso[2]/2+.08),T.add(ft);let ht=xe(te(`strap${e.build}`,()=>new Je(i.torso[0]*.48,.025,6,24).scale(1,i.torso[2]/i.torso[0]*1.05,1).rotateX(Math.PI/2)),gt("#22202c"),{cast:!1});ht.position.y=.1,T.add(ht)}else if(Z==="bib"){let ft=new Ne(te("bib",()=>new fn(1,.78)),w.material);ft.scale.copy(w.scale),ft.position.set(0,i.torso[1]*.5,-i.torso[2]/2-.012),ft.rotation.y=Math.PI,y.add(ft),w.scale.multiplyScalar(1.3)}else if(Z==="bowtie")for(let ft of[-1,1]){let ht=_(te("bow",()=>new qe(.08,.16,4).rotateZ(Math.PI/2)),gt(a),2);ht.position.set(ft*.08,i.torso[1]-.06,i.torso[2]/2+.03),ht.rotation.z=ft>0?Math.PI:0,y.add(ht)}else if(Z==="tutu"){let ft=_(te(`tutu${e.build}`,()=>new ce(i.torso[0]*.55,i.torso[0]*.9,.18,16,1,!0)),gt("#ff9bd2",{side:je}),2);ft.position.y=-.05,T.add(ft)}}}let _t={phase:r()*6.28,t:r()*10,lean:0,j:{},look:0,lookPitch:0},St=_t.j,It=["hipLx","hipRx","kneeL","kneeR","ankL","ankR","shLx","shRx","shLz","shRz","elL","elR","twist","lean","bob","roll","headY","headX","bodyX","bodyY","bodyZ","hipSpread"];for(let Z of It)St[Z]=0;let tt={},$t="idle",B=null,k=0;function yt(Z,ft=null){(Z!==$t||ft!==B)&&($t=Z,B=ft,k=0)}function Ct(Z,ft={}){_t.t+=Z,k+=Z;let ht=_t.t;for(let Pt of It)tt[Pt]=0;let Mt="normal",wt=10;if($t==="run"||$t==="jog"||$t==="trudge"||$t==="distracted"){let Pt=Math.max(.5,ft.speed??3.5),Xt=Math.max(.2,ft.rate??1),jt=$t==="trudge",qt=jt?1.7:(2.55+.14*(Pt-3.5))*Math.pow(Xt,.3)*($t==="jog"?.8:1);_t.phase+=Z*Math.PI*qt;let de=_t.phase,se=Math.sin(de),be=Math.cos(de),lt=jt?.4:Math.max(.45,Math.min(1,.62+.13*(Pt-3.5)));tt.hipLx=-lt*se,tt.hipRx=lt*se,tt.kneeL=.2+(jt?.5:1.35)*Math.max(0,be)*(.7+lt*.3),tt.kneeR=.2+(jt?.5:1.35)*Math.max(0,-be)*(.7+lt*.3),tt.ankL=-.2*se,tt.ankR=.2*se;let Yt=jt?.3:.75*lt+.15;tt.shLx=Yt*se,tt.shRx=-Yt*se,tt.shLz=-.18,tt.shRz=.18,tt.elL=jt?-.5:-1.5,tt.elR=jt?-.5:-1.5,tt.twist=.16*se,tt.roll=.05*se,tt.bob=(jt?.03:.11)*(Math.abs(be)-.4),tt.lean=(jt?.05:.16)+Math.max(-.25,Math.min(.45,(ft.slope??0)*1.6)),tt.headX=-tt.lean*.6,tt.headY=-.08*se,wt=18,Mt=ft.effort>.6?"effort":ft.effort>.3?"pant":"normal",jt&&(tt.headX=.35,tt.lean=.25,Mt="sad"),$t==="distracted"&&(tt.headY=ft.lookYaw??.9,tt.headX=-.15,tt.twist+=(ft.lookYaw??.9)*.3,Mt="love")}else if($t==="ready")tt.hipLx=-.5,tt.hipRx=.35,tt.kneeL=.6,tt.kneeR=.5,tt.lean=.35,tt.bob=-.12,tt.shLx=.5,tt.shRx=-.6,tt.elL=-1.3,tt.elR=-1.3,tt.headX=-.25,tt.bob+=Math.sin(ht*3)*.01,Mt="effort";else if($t==="wave")tt.shRz=2.7,tt.elR=.2*Math.sin(ht*9)-.25,tt.shRx=Math.sin(ht*9)*.25,tt.shLz=-.3,tt.elL=-.4,tt.bob=Math.abs(Math.sin(ht*4))*.05,tt.headY=.1*Math.sin(ht*2),Mt="happy";else if($t==="pose"){let Pt=B||"flex";if(Pt==="flex")tt.shLz=-1.5,tt.shRz=1.5,tt.elL=-1.9-Math.sin(ht*6)*.15,tt.elR=-1.9-Math.sin(ht*6+1)*.15,tt.shLx=-0,tt.bob=-.06+Math.abs(Math.sin(ht*3))*.03,tt.hipSpread=.25,tt.kneeL=.3,tt.kneeR=.3,Mt="effort";else if(Pt==="point")tt.shRx=-1.5,tt.elR=0,tt.shLz=-.3,tt.elL=-1.6,tt.shLx=-.3,tt.headX=-.1,tt.lean=-.05,Mt="happy",tt.bob=Math.sin(ht*5)*.02;else if(Pt==="stretch")tt.hipRx=-.2,tt.kneeR=2.3,tt.shRx=.8,tt.elR=-.6,tt.shLz=-2.6,tt.lean=.08+Math.sin(ht*2)*.04,Mt="smug";else if(Pt==="spin"){let Xt=Math.min(1,k/1.1);tt.bodyY=(1-(1-Xt)**2)*Math.PI*4,tt.shLz=Xt<1?-1.3:-2.6,tt.shRz=Xt<1?1.3:2.6,tt.bob=Xt<1?Math.abs(Math.sin(ht*7))*.2:Math.abs(Math.sin(ht*5))*.12,Mt="happy"}else Pt==="bow"?(tt.lean=.75+Math.sin(ht*2)*.05,tt.shLx=.4,tt.shRx=-1.2,tt.elR=-1.6,tt.shRz=.4,tt.headX=-.2,Mt="happy"):(tt.shLz=-2.5,tt.shRz=2.5,tt.bob=Math.abs(Math.sin(ht*6))*.25,Mt="happy");Mt==="smug"&&(Mt="normal")}else if($t==="celebrate"){let Pt=B||"jump";if(Pt==="jump"){let Xt=Math.abs(Math.sin(ht*5.5));tt.bob=Xt*.55,tt.shLz=-2.6-Xt*.3,tt.shRz=2.6+Xt*.3,tt.elL=-.2,tt.elR=-.2,tt.kneeL=tt.kneeR=(1-Xt)*.8,tt.hipLx=tt.hipRx=-(1-Xt)*.4,Mt="happy",wt=22}else if(Pt==="fist"){let Xt=Math.sin(ht*7);tt.shRx=-2.6,tt.elR=-.4+Xt*.4,tt.shLx=.4,tt.elL=-1.8,tt.bob=Math.abs(Xt)*.08,tt.lean=-.1,Mt="happy"}else Pt==="kneel"?(tt.lean=.85,tt.kneeL=tt.kneeR=.7,tt.hipLx=tt.hipRx=-.6,tt.bob=-.25+Math.sin(ht*7)*.025,tt.shLx=tt.shRx=-.55,tt.elL=tt.elR=-.1,tt.shLz=-.15,tt.shRz=.15,tt.headX=-.6,Mt="pant"):Pt==="collapse"?(tt.bodyX=-Math.PI/2+.05,tt.shLz=-2.2,tt.shRz=2.2,tt.hipSpread=.4,tt.kneeL=.3+Math.max(0,Math.sin(ht*9))*.4*(Math.sin(ht*.7)>.6?1:0),tt.kneeR=.2,Mt="dead",wt=4):Pt==="shrug"&&(tt.shLz=-.9,tt.shRz=.9,tt.elL=-1.4,tt.elR=-1.4,tt.shLx=-.5,tt.shRx=-.5,tt.headX=.1,tt.headY=Math.sin(ht*1.5)*.3,Mt="sad")}else tt.bob=Math.sin(ht*2)*.015,tt.shLz=-.18,tt.shRz=.18,tt.elL=-.25,tt.elR=-.25,tt.headY=Math.sin(ht*.7)*.25,tt.lean=.02,tt.kneeL=tt.kneeR=.05;ft.lookYaw!=null&&$t!=="distracted"&&(tt.headY+=ft.lookYaw);let Rt=1-Math.exp(-wt*Z);for(let Pt of It){if(Pt==="bodyY"&&$t==="pose"&&B==="spin"){St[Pt]=tt[Pt];continue}St[Pt]+=(tt[Pt]-St[Pt])*Rt}if($t==="pose"&&B==="spin"||(St.bodyY=St.bodyY%(Math.PI*2),St.bodyY>Math.PI&&(St.bodyY-=Math.PI*2)),Y[0].hp.rotation.set(St.hipLx,0,-St.hipSpread),Y[1].hp.rotation.set(St.hipRx,0,St.hipSpread),Y[0].kn.rotation.x=St.kneeL,Y[1].kn.rotation.x=St.kneeR,Y[0].an.rotation.x=St.ankL-St.kneeL*.35,Y[1].an.rotation.x=St.ankR-St.kneeR*.35,U[0].sh.rotation.set(St.shLx,0,St.shLz-0),U[1].sh.rotation.set(St.shRx,0,St.shRz),U[0].el.rotation.x=St.elL,U[1].el.rotation.x=St.elR,y.rotation.set(St.lean,St.twist,0),T.rotation.set(0,-St.twist*.5,St.roll),T.position.y=R+St.bob,O.rotation.set(St.headX,St.headY,0),L.rotation.set(St.bodyX,St.bodyY,St.bodyZ),L.position.y+=(($t==="celebrate"&&B==="collapse"?i.torso[2]*.5+.08:0)-L.position.y)*Rt,O.userData.bobble&&(O.userData.bobble.position.y=P*2.45+Math.abs(Math.sin(_t.phase))*.04),O.userData.pony&&(O.userData.pony.rotation.x=.4+Math.sin(_t.phase*2)*.35),O.userData.tail&&(O.userData.tail.rotation.x=.6+Math.sin(_t.phase*2)*.3),O.userData.cape&&(O.userData.cape.rotation.x=-.3-Math.min(1.1,(ft.speed??0)*.15)+Math.sin(ht*8)*.08),ft.expr&&(Mt=ft.expr),it(Mt),at.visible){at.position.y=rt+.45+Math.sin(ht*6)*.08;let Pt=.9+Math.sin(ht*9)*.05;at.scale.set(Pt,Pt,Pt)}}function Lt(){for(let Z of u)Z.dispose?.();at.material.dispose()}return{id:n.id,info:n,root:v,update:Ct,set:yt,setPop:nt,setExpr:it,setProp:G,dispose:Lt,height:rt,hipH:R,get state(){return $t},get variant(){return B}}}var iv=(n,t,e)=>{let i=Math.max(0,Math.min(1,(e-n)/(t-n)));return i*i*(3-2*i)};function Lu(n,t,e){let i=n.timeMap,s={};e.forEach((x,y)=>s[x.id]=x.lane??y+1);let r=n.runners.length,o=Object.values(s),a=(Math.min(...o)+Math.max(...o))/2,l=Math.min(1.25,(Ve-1.6)/Math.max(1,r-1)),h=n.runners.map((x,y)=>{let S=ao(i,x.officialS),A=((s[x.id]??y+1)-a)*l;return{...x,finishB:S,base:A,seed:y*1.7+.3}}),u=Object.fromEntries(h.map(x=>[x.id,x])),g=[...h].sort((x,y)=>x.officialS-y.officialS).map(x=>x.id),f=Object.fromEntries(g.map((x,y)=>[x,y+1])),c=u[g[0]],d=g.map(x=>u[x].officialS),M=u[g[0]].finishB,m=u[g.at(-1)].finishB,p=r>1&&d[1]-d[0]<=1.5,b=x=>Math.max(.05,(xs(i,x+.05)-xs(i,x-.05))/.1),_=new Map;function v(x){let y=Math.round(x*1e3);if(_.has(y))return _.get(y);let S=x<=0?0:xs(i,x),A=x<=0?4:b(x),w={b:x,raceS:S,rate:A,byId:{},order:[]};for(let z of h){let F=$n(z.progress,S),X=S>=z.officialS&&x>=z.finishB-1e-6,it=($n(z.progress,S+1)-$n(z.progress,Math.max(0,S-1)))/(S>1?2:1);w.byId[z.id]={id:z.id,m:F,finished:X,vRace:X?0:it,place:f[z.id]}}for(let z of h){let F=w.byId[z.id],X=F.m,it=z.base;it+=.22*Math.sin(F.m/85+z.seed);for(let Ot of h){if(Ot===z)continue;let U=w.byId[Ot.id],Y=F.m-U.m;if(Math.abs(Y)<4&&!F.finished&&!U.finished){let j=(1-Math.abs(Y)/4)*.32;it+=Math.sign(z.base-Ot.base||z.seed-Ot.seed)*j}}let P=0;if(F.finished){let Ot=x-z.finishB,U=($n(z.progress,z.officialS)-$n(z.progress,z.officialS-2))/2*b(z.finishB),Y=Math.min(14,Math.max(4,U)),j=1.6;X=5e3+(Ot<j?Y*(Ot-Ot*Ot/(2*j)):Y*j/2+Math.min(10+f[z.id]*1.5,(Ot-j)*.9));let ct=(f[z.id]-(r+1)/2)*1.6;it=it+(ct-it)*iv(0,2.5,Ot),P=Ot}let mt=t.sample(X,z.id);it*=1-mt.div,it=Math.max(-Ve/2+.6,Math.min(Ve/2-.6,it)),Object.assign(F,{mVis:X,x:mt.x+mt.rx*it,z:mt.z+mt.rz*it,y:t.heightAt(mt.x+mt.rx*it,mt.z+mt.rz*it)+.16,tx:mt.tx,tz:mt.tz,slope:mt.slope,div:mt.div,divInfo:mt.divInfo,lat:it,post:P,distToFinish:Math.max(0,5e3-F.m)})}let I=h.filter(z=>w.byId[z.id].finished).sort((z,F)=>z.officialS-F.officialS),N=h.filter(z=>!w.byId[z.id].finished).sort((z,F)=>w.byId[F.id].m-w.byId[z.id].m||z.officialS-F.officialS);w.order=[...I,...N].map(z=>z.id),w.leader=w.byId[w.order[0]];let O=u[w.order[0]];for(let[z,F]of w.order.entries()){let X=w.byId[F];if(X.finished)X.gapText=z===0?ka(u[F].officialS):`+${(u[F].officialS-c.officialS).toFixed(0)}s`;else if(z===0)X.gapText="LEADER";else{let it=w.byId[w.order[0]].finished?c:O;X.gapText=`+${Math.max(0,S-ys(it.progress,X.m)).toFixed(1)}s`}}return _.size>400&&_.clear(),_.set(y,w),w}return{stateAt:v,orderAt:x=>v(x).order,gapM:(x,y,S)=>{let A=v(S);return Math.abs((A.byId[x]?.m??0)-(A.byId[y]?.m??0))},finishedAt:(x,y)=>v(y).byId[x]?.finished,allFinishedAt:x=>x>m,firstFinishB:M,lastFinishB:m,photoFinish:p,finishOrder:g,place:f,byId:u,R:h,rateAt:b,durationS:i.durationS}}function ka(n){let t=Math.floor(n/60),e=Math.round(n-t*60);return`${t}:${String(e).padStart(2,"0")}`}function ku({plan:n,sim:t,backedIds:e=[],hasDiversion:i}){let s=n.events||[],r=t.lastFinishB+3.5,o=[],a=(E,R,x,y,S={})=>{x-R>=1.2&&o.push({type:E,a:R,b:x,prio:y,...S})},l=t.firstFinishB,h=t.finishOrder.map(E=>({who:E,broadcastS:t.byId[E].finishB})),u=l-5.5;h.forEach((E,R)=>{let x=h[R-1];x&&E.broadcastS-x.broadcastS>7.5&&(a("front",x.broadcastS+2.2,E.broadcastS-3.2,10,{ids:[E.who],tag:"chaser"}),u=E.broadcastS-3.2),a("finishcam",u,E.broadcastS+2.2,10,{ids:[E.who]}),u=E.broadcastS+2.2}),t.photoFinish&&a("photo",l-.02,l+.02,11);let g=s.find(E=>E.type==="final_stretch");if(g){let E=g.broadcastS,R=l-5.5,x=Math.max(1,Math.round((R-E)/6)),y=["final","track","battle","final","drone","front"];for(let S=0;S<x;S++){let A=E+(R-E)*S/x,w=E+(R-E)*(S+1)/x,I=(A+w)/2,N=t.orderAt(I),O=y[S%y.length],z=[N[0]];O==="battle"&&(z=[N[0],N[1]]);let F=t.gapM(N[0],N[1],I)<12;S===0?(O="final",z=[N[0]]):F&&O!=="final"&&(O="battle",z=[N[0],N[1]]),a(O,A,w,5,{ids:z})}}let f=s.filter(E=>E.type==="diversion").sort((E,R)=>E.broadcastS-R.broadcastS);f[0]&&a("distracted",f[0].broadcastS-.4,Math.max(f[0].broadcastS+6.5,Math.min((f[0].endBroadcastS??f[0].broadcastS+8)+1.2,f[0].broadcastS+9)),9,{ids:[f[0].who],banner:!0});for(let E of s.filter(R=>R.type==="hill")){let R=t.rateAt(E.broadcastS),x=Math.max(2.6,Math.min(6,140/Math.max(1,R*3.4)));a("hill",E.broadcastS-1.4,E.broadcastS+x,7,{lap:E.lap})}let c=s.find(E=>E.type==="lap");c&&a("lapboard",c.broadcastS-2.6,c.broadcastS+2,6);for(let E of s.filter(R=>R.type==="lead_change"))a("battle",E.broadcastS-1.6,E.broadcastS+2.8,6,{ids:[E.to,E.from],tag:"lead"});let d=-1e9,M=s.filter(E=>E.type==="lead_change").map(E=>E.broadcastS);for(let E of s.filter(R=>R.type==="overtake")){let R=e.includes(E.by)||e.includes(E.on),y=t.orderAt(E.broadcastS+.5).indexOf(E.by)<=1;!R&&!y||E.broadcastS-d<11||M.some(S=>Math.abs(S-E.broadcastS)<6)||(d=E.broadcastS,a("battle",E.broadcastS-1.4,E.broadcastS+2.6,R?4:3,{ids:[E.by,E.on]}))}a("startgo",-3.2,2.4,12),a("heli",-8.5,-3.2,12),o.sort((E,R)=>R.prio-E.prio||E.a-R.a);let m=[],p=(E,R)=>!m.some(x=>E<x.b&&R>x.a);for(let E of o){if(p(E.a,E.b)){m.push(E);continue}let R=E.a,x=E.b;for(let y of m)R<y.b&&x>y.a&&(y.a<=R?R=y.b:x=Math.min(x,y.a));x-R>=2.2&&p(R,x)&&m.push({...E,a:R,b:x})}m.sort((E,R)=>E.a-R.a);let b=[],_=-8.5,v=0,L=["track","drone","front","chase","track","blimp","front","side"],T=(E,R)=>{let x=R-E;if(x<=.05)return;if(x<2.2&&b.length){b.at(-1).b=R;return}let y=Math.max(1,Math.round(x/5.2));for(let S=0;S<y;S++){let A=E+x*S/y,w=E+x*(S+1)/y,I=(A+w)/2,N=t.orderAt(I),O=L[v++%L.length],z=[N[0]],F=e.filter(X=>!t.finishedAt(X,I)&&t.gapM(N[0],X,I)>25);F.length&&v%3===0?(O="chase",z=[F[v%F.length]]):O==="track"||O==="side"?z=N.filter(X=>t.gapM(N[0],X,I)<15).slice(0,3):(O==="drone"||O==="blimp")&&(z=N),t.allFinishedAt(I-2)&&(O="celebrate",z=t.finishOrder),b.push({type:O,a:A,b:w,prio:1,ids:z,filler:!0})}};for(let E of m)E.a>_&&T(_,E.a),b.push(E),_=Math.max(_,E.b);return _<r+30&&T(_,r+30),b}function Du({camera:n,C:t,sim:e,world:i,funfair:s}){let r={pos:new $,look:new $,fov:45},o={off:new $,lookOff:new $,fov:45,init:!1},a=null,l=new $,h=new $,u=new $(0,1,0),g={};function f(b,_){let v=e.stateAt(_),L=b.map(N=>v.byId[N]).filter(Boolean);if(!L.length)return{p:new $(v.leader.x,v.leader.y,v.leader.z),h:new $(v.leader.tx,0,v.leader.tz),m:v.leader.m,spread:0};let T=new $,E=0;for(let N of L)T.x+=N.x,T.y+=N.y,T.z+=N.z,E+=N.m;T.divideScalar(L.length),E/=L.length;let R=1e9,x=-1e9;for(let N of L)R=Math.min(R,N.m),x=Math.max(x,N.m);let y=L[0],S=Math.max(0,y.mVis-18),A=t.xzAt(S,y.id),w=t.xzAt(S+36,y.id),I=new $(w.x-A.x,0,w.z-A.z).normalize();return isFinite(I.x)||I.set(0,0,1),{p:T,h:I,m:E,spread:x-R,list:L}}let c=b=>new $(-b.z,0,b.x);function d(b,_,v){let L=(_-b.a)/Math.max(.01,b.b-b.a),T=i.anchors.finish,E=i.anchors.start,R,x,y=45,S=!0;switch(b.type){case"heli":{let A=new $(150,0,0),w=new $(E.x,E.y,E.z),I=ph(Math.min(1,L*1.05)),N=-1.2+I*1.6,O=420-I*360;R=new $(A.x+Math.cos(N)*O,170-I*140,A.z+Math.sin(N)*O).lerp(new $(w.x-E.tx*40+E.rx*25,w.y+22,w.z-E.tz*40+E.rz*25),I*I),x=A.clone().setY(10).lerp(w,Math.min(1,I*1.3)),y=50,S=!1;break}case"startgo":{let A=new $(E.x,E.y,E.z),w=new $(E.tx,0,E.tz),I=c(w);if(_<.6)R=A.clone().addScaledVector(w,9.5+(_+3.2)*.25).addScaledVector(I,2.6).add(u.clone().multiplyScalar(1.9)),x=A.clone().add(u.clone().multiplyScalar(1.3)).addScaledVector(w,-1),y=42;else{let N=f(e.orderAt(_).slice(0,3),_);R=N.p.clone().addScaledVector(N.h,11).addScaledVector(c(N.h),3.5).add(u.clone().multiplyScalar(2.2)),x=N.p.clone().add(u.clone().multiplyScalar(1.2)),y=44}S=!1;break}case"track":case"side":{let A=f(b.ids,_),w=c(A.h),I=b.type==="side"?-1:1,N=8+Math.min(14,A.spread*.6);R=A.p.clone().addScaledVector(w,I*(N+2)).addScaledVector(A.h,3+Math.sin(L*3)*.6).add(u.clone().multiplyScalar(2.6)),x=A.p.clone().addScaledVector(A.h,1.5).add(u.clone().multiplyScalar(1.1)),y=42;break}case"front":case"final":{let A=f(b.ids,_),w=c(A.h),I=b.type==="final"?7.5-L*1.5:7;R=A.p.clone().addScaledVector(A.h,I).addScaledVector(w,b.type==="final"?1.4:-2).add(u.clone().multiplyScalar(b.type==="final"?.9:1.8)),x=A.p.clone().add(u.clone().multiplyScalar(1.35)).addScaledVector(A.h,-2),y=b.type==="final"?38:42;break}case"chase":{let A=f(b.ids,_),w=c(A.h);R=A.p.clone().addScaledVector(A.h,-7.5).addScaledVector(w,2.2).add(u.clone().multiplyScalar(3)),x=A.p.clone().addScaledVector(A.h,5).add(u.clone().multiplyScalar(1.2)),y=46;break}case"battle":{let A=f(b.ids,_),w=c(A.h),I=Math.floor(b.a*7)%2?1:-1,N=11+Math.min(10,A.spread*.7);R=A.p.clone().addScaledVector(A.h,N*.7).addScaledVector(w,I*N*.75).add(u.clone().multiplyScalar(2.3)),x=A.p.clone().add(u.clone().multiplyScalar(1.1)),y=42;break}case"drone":case"blimp":{let A=e.stateAt(_),w=A.byId[A.order[0]],I=A.order.map(P=>A.byId[P]).filter(P=>!P.finished),N=new $;for(let P of I.length?I:[w])N.add(new $(P.x,P.y,P.z));N.divideScalar(Math.max(1,I.length));let O=I.length?I[0].m-I.at(-1).m:0,z=f([A.order[0]],_),F=b.type==="blimp"?38+Math.min(50,O*.25):20+Math.min(40,O*.25),X=b.type==="blimp"?48:30+Math.min(40,O*.25),it=N.clone().lerp(new $(w.x,w.y,w.z),.5);R=it.clone().addScaledVector(z.h,-X).addScaledVector(c(z.h),X*.6).add(u.clone().multiplyScalar(F)),x=it,y=46;break}case"hill":{let A=i.anchors.hillM,w=t.sample(A+105),I=new $(w.tx,0,w.tz),N=c(I);R=new $(w.x,w.y,w.z).addScaledVector(N,6.5).add(u.clone().multiplyScalar(2.2));let O=e.stateAt(_),z=O.order.map(P=>O.byId[P]).filter(P=>t.geoOf(P.m)>A-120&&t.geoOf(P.m)<A+200&&!P.finished),F=z.length?z[0]:null,X=F?new $(F.x,F.y+1.1,F.z):new $(w.x,w.y+1,w.z);x=X;let it=R.distanceTo(X);y=au.clamp(2*Math.atan(5.5/it)*180/Math.PI,12,50),S=!0;break}case"lapboard":{let A=i.anchors.lapBoard,w=new $;A.getWorldPosition(w);let I=t.sample(2491),N=new $(I.tx,0,I.tz),O=c(N);R=new $(I.x,I.y,I.z).addScaledVector(O,-(4.6+3)).add(u.clone().multiplyScalar(2.4));let z=e.stateAt(_),F=z.order.map(it=>z.byId[it]).filter(it=>it.m>2350&&it.m<2600),X=F.length?new $(F[0].x,F[0].y+1.2,F[0].z):w.clone().add(u.clone().multiplyScalar(2));x=w.clone().add(u.clone().multiplyScalar(1.8)).lerp(X,.45),y=46;break}case"finishcam":{let A=new $(T.tx,0,T.tz),w=c(A),I=e.stateAt(_),N=b.ids?.[0]??I.order[0],O=I.byId[N];R=new $(T.x,T.y,T.z).addScaledVector(A,16).addScaledVector(w,-4).add(u.clone().multiplyScalar(2.6));let z=new $(T.x,T.y+2.5,T.z),F=O&&!O.finished?new $(O.x,O.y+1.3,O.z):z;x=z.clone().lerp(F,O&&!O.finished?Math.min(.85,15/Math.max(15,O.distToFinish)):.3),y=O&&!O.finished&&O.distToFinish>30?30:40;break}case"celebrate":{let A=e.stateAt(_),w=new $;for(let z of A.order)w.add(new $(A.byId[z].x,A.byId[z].y,A.byId[z].z));w.divideScalar(A.order.length);let I=new $(T.tx,0,T.tz),N=c(I),O=Math.sin(_*.15)*.5;R=w.clone().addScaledVector(I,-10*Math.cos(O)).addScaledVector(N,10*Math.sin(O)).add(u.clone().multiplyScalar(2.6)),x=w.clone().add(u.clone().multiplyScalar(1.2)),y=46,S=!1;break}case"photo":{let A=new $(T.tx,0,T.tz),w=c(A);R=new $(T.x,T.y,T.z).addScaledVector(w,8.5).add(u.clone().multiplyScalar(1.3)),x=new $(T.x,T.y+1.1,T.z),y=40,S=!1;break}case"distracted":{let A=f(b.ids,_),w=c(A.h),I=i.anchors.nearestOnRibbon(A.p.x,A.p.z),N=Math.sign((I[0]-A.p.x)*w.x+(I[1]-A.p.z)*w.z)||1,O=w.clone().multiplyScalar(N),z=_-b.a;if(z<2.6&&s){let F=s.anchors.rides[0].pos,X=z/2.6,it=new $(F.x-A.p.x,0,F.z-A.p.z).normalize();R=A.p.clone().addScaledVector(A.h,-18+X*2).addScaledVector(it,-4).add(u.clone().multiplyScalar(13-X*2)),x=new $(F.x,A.p.y+8,F.z).lerp(A.p.clone().add(u),.45+X*.2),y=54,S=!1}else if(L<.62){let F=A.h.clone().multiplyScalar(.55).addScaledVector(O,.85).normalize();R=A.p.clone().addScaledVector(F,5.2).add(u.clone().multiplyScalar(2)),x=A.p.clone().add(u.clone().multiplyScalar(1.85)),y=46}else R=A.p.clone().addScaledVector(A.h,-12).addScaledVector(O,-9).add(u.clone().multiplyScalar(7.5)),x=A.p.clone().addScaledVector(O,10).add(u.clone().multiplyScalar(2.5)),y=52;break}default:{let A=f(b.ids||[],_);R=A.p.clone().addScaledVector(A.h,-10).add(u.clone().multiplyScalar(4)),x=A.p.clone()}}return{pos:R,look:x,fov:y,damp:S}}let M=0;function m(b,_,v){let L=v.find(y=>b>=y.a&&b<y.b)||v.at(-1),T=L.type==="distracted"?b-L.a<2.6?0:(b-L.a)/(L.b-L.a)<.62?1:2:0,E=L!==a||T!==M;M=T,a=L;let R=d(L,b,_);if(!R)return{shot:L,cut:E};let x=t.heightAt(R.pos.x,R.pos.z)+.8;if(R.pos.y<x&&(R.pos.y=x),E||!o.init||!R.damp)r.pos.copy(R.pos),r.look.copy(R.look),o.fov=R.fov,o.init=!0;else{let y=1-Math.exp(-4.5*_),S=r.pos.clone().sub(r.look),A=R.pos.clone().sub(R.look);S.lerp(A,y),r.look.copy(R.look),r.pos.copy(r.look).add(S),o.fov+=(R.fov-o.fov)*y}return n.position.copy(r.pos),n.lookAt(r.look),Math.abs(n.fov-o.fov)>.01&&(n.fov=o.fov,n.updateProjectionMatrix()),{shot:L,cut:E}}function p(){o.init=!1,a=null}return{update:m,reset:p,evaluate:d,get shot(){return a},cam:r}}function ph(n){return n<.5?2*n*n:1-Math.pow(-2*n+2,2)/2}var sv=`
.mr-hud{position:absolute;inset:0;pointer-events:none;overflow:hidden;font-family:"Lilita One","Arial Black",Impact,sans-serif;color:#fff;
  --ink:#1a1420;--blue:#2e6fe0;--blue2:#1d4fb8;--yellow:#ffd23f;--pink:#ff3d8b;--u:calc(min(1vw,1.78vh));letter-spacing:.02em}
.mr-hud *{box-sizing:border-box}
.mr-num{color:var(--yellow);-webkit-text-stroke:calc(var(--u)*.38) var(--ink);paint-order:stroke fill;text-shadow:0 calc(var(--u)*.3) 0 rgba(0,0,0,.35)}
.mr-panel{background:linear-gradient(180deg,#3d86ff,#2457c8);border:calc(var(--u)*.32) solid var(--ink);border-radius:calc(var(--u)*.9);transform:skewX(-10deg);box-shadow:0 calc(var(--u)*.45) 0 rgba(0,0,0,.35)}
.mr-panel>.mr-unskew{transform:skewX(10deg)}
.mr-top{position:absolute;left:calc(var(--u)*2.2);top:calc(var(--u)*1.8);display:flex;gap:calc(var(--u)*1);align-items:stretch}
.mr-live{background:var(--pink);padding:calc(var(--u)*.5) calc(var(--u)*1.2);font-size:calc(var(--u)*1.5);display:flex;align-items:center;gap:calc(var(--u)*.5)}
.mr-live i{width:calc(var(--u)*.9);height:calc(var(--u)*.9);border-radius:50%;background:#fff;display:inline-block;animation:mrblink 1s infinite}
@keyframes mrblink{50%{opacity:.25}}
.mr-clock{padding:calc(var(--u)*.2) calc(var(--u)*1.4);font-size:calc(var(--u)*2.9);line-height:1.1;min-width:calc(var(--u)*12);text-align:center}
.mr-lap{padding:calc(var(--u)*.2) calc(var(--u)*1.2);display:flex;align-items:center;gap:calc(var(--u)*.6);font-size:calc(var(--u)*1.4)}
.mr-lap b{font-size:calc(var(--u)*2.9);font-weight:400}
.mr-dist{padding:calc(var(--u)*.3) calc(var(--u)*1.2);font-size:calc(var(--u)*1.4);display:flex;flex-direction:column;justify-content:center;min-width:calc(var(--u)*11)}
.mr-bar{height:calc(var(--u)*.7);background:rgba(0,0,0,.35);border-radius:9px;margin-top:calc(var(--u)*.3);overflow:hidden;border:2px solid var(--ink)}
.mr-bar>i{display:block;height:100%;background:var(--yellow);width:0}
.mr-tower{position:absolute;left:calc(var(--u)*2.2);top:calc(var(--u)*8.2);width:calc(var(--u)*28)}
.mr-row{position:absolute;left:0;width:100%;height:calc(var(--u)*4.1);display:flex;align-items:center;transition:transform .55s cubic-bezier(.3,1.4,.5,1),opacity .3s}
.mr-row .mr-pos{width:calc(var(--u)*5.2);font-size:calc(var(--u)*3.3);text-align:center;line-height:1}
.mr-row .mr-pos small{font-size:.42em;margin-right:2px;vertical-align:middle;color:#fff}
.mr-row .mr-pos sup{font-size:.45em;vertical-align:top;margin-left:1px}
.mr-row .mr-card{flex:1;height:calc(var(--u)*3.4);display:flex;align-items:center;padding:0 calc(var(--u)*.8) 0 0;background:rgba(20,22,48,.82);border:calc(var(--u)*.25) solid var(--ink);border-radius:calc(var(--u)*.6);transform:skewX(-10deg);overflow:hidden}
.mr-row .mr-card>*{transform:skewX(10deg)}
.mr-row .mr-chip{width:calc(var(--u)*1.6);align-self:stretch;margin-right:calc(var(--u)*.8)}
.mr-row .mr-name{flex:1;min-width:0;font-size:calc(var(--u)*1.6);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.mr-row .mr-gap{font-family:Nunito,"Arial Rounded MT Bold",sans-serif;font-weight:900;font-size:calc(var(--u)*1.2);color:#cfe0ff;margin-left:calc(var(--u)*.5)}
.mr-row.lead .mr-card{background:linear-gradient(90deg,rgba(255,210,63,.95),rgba(255,160,40,.92));color:var(--ink)}
.mr-row.lead .mr-gap{color:var(--ink)}
.mr-row.fin .mr-gap{color:#7dff9a}
.mr-row.lead.fin .mr-gap{color:var(--ink)}
.mr-badge{display:inline-flex;align-items:center;gap:.2em;background:var(--bc,#fff);color:var(--ink);border:calc(var(--u)*.18) solid var(--ink);border-radius:99px;font-size:calc(var(--u)*1.05);padding:.05em .55em;margin-left:calc(var(--u)*.35);line-height:1.2;box-shadow:0 calc(var(--u)*.15) 0 rgba(0,0,0,.35);white-space:nowrap}
.mr-row .mr-badges{position:absolute;left:100%;top:50%;transform:translateY(-50%);display:flex;gap:calc(var(--u)*.25);margin-left:calc(var(--u)*.6)}
.mr-row .mr-badges .mr-badge{margin:0;font-size:calc(var(--u)*1.25)}
.mr-row.backed .mr-card{box-shadow:0 0 0 calc(var(--u)*.22) var(--bc,#ffd23f),0 0 calc(var(--u)*1.2) var(--bc,#ffd23f)}
.mr-tag .mr-tb{position:absolute;left:50%;bottom:100%;transform:translateX(-50%);display:flex;gap:calc(var(--u)*.2);margin-bottom:calc(var(--u)*.3)}
.mr-tag .mr-tb .mr-badge{margin:0;font-size:calc(var(--u)*1.15)}
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
.mr-map{position:absolute;right:calc(var(--u)*2.2);top:calc(var(--u)*1.8);width:calc(var(--u)*17);height:calc(var(--u)*21);padding:calc(var(--u)*.5)}
.mr-map canvas{position:relative;width:100%;height:100%;display:block}
.mr-mapwrap{position:absolute;inset:0;background:rgba(255,255,255,.88);border:calc(var(--u)*.32) solid var(--ink);border-radius:calc(var(--u)*1.2);box-shadow:0 calc(var(--u)*.45) 0 rgba(0,0,0,.3)}
.mr-banner{position:absolute;left:50%;top:74%;transform:translate(-50%,-50%) scale(0);text-align:center;white-space:nowrap;transition:transform .35s cubic-bezier(.3,1.7,.5,1)}
.mr-banner.on{transform:translate(-50%,-50%) scale(1)}
.mr-banner .mr-b1{display:inline-block;padding:calc(var(--u)*.3) calc(var(--u)*2.4);font-size:calc(var(--u)*4.2);line-height:1.05;background:var(--pink);border:calc(var(--u)*.4) solid var(--ink);border-radius:calc(var(--u)*1.2);transform:skewX(-10deg) rotate(-3deg);box-shadow:0 calc(var(--u)*.6) 0 rgba(0,0,0,.35)}
.mr-banner .mr-b1 span{display:inline-block;transform:skewX(10deg)}
.mr-banner .mr-b2{display:block;margin-top:calc(var(--u)*.6);font-size:calc(var(--u)*1.8);-webkit-text-stroke:calc(var(--u)*.3) var(--ink);paint-order:stroke fill}
.mr-tags{position:absolute;inset:0}
.mr-tag{position:absolute;left:0;top:0;transform:translate(-50%,-100%);white-space:nowrap;display:flex;align-items:center;gap:calc(var(--u)*.35);font-size:calc(var(--u)*1.25);will-change:transform;transition:opacity .25s}
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
`,Uu=n=>`${n}<sup>${["th","st","nd","rd"][n%100>10&&n%100<14||n%10>3?0:n%10]}</sup>`,rv=n=>`${n}${["th","st","nd","rd"][n%100>10&&n%100<14||n%10>3?0:n%10]}`,ov=n=>{n=Math.max(0,n);let t=Math.floor(n/60),e=Math.floor(n%60);return`${t}:${String(e).padStart(2,"0")}`},Jr=n=>String(n??"").replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t]),av=n=>{let t=parseInt(n.slice(1),16);return(t>>16&255)*.299+(t>>8&255)*.587+(t&255)*.114>165?"#1a1420":"#ffffff"};function Fu(n,{runners:t,backedBy:e={},course:i,park:s,C:r}){if(!document.getElementById("mr-hud-css")){let nt=document.createElement("style");nt.id="mr-hud-css",nt.textContent=sv,document.head.appendChild(nt)}let o=document.createElement("div");o.className="mr-hud mr-dim",o.innerHTML=`
    <div class="mr-top">
      <div class="mr-panel mr-live"><div class="mr-unskew"><i></i> LIVE</div></div>
      <div class="mr-panel mr-clock"><div class="mr-unskew mr-num" data-k="clock">0:00</div></div>
      <div class="mr-panel mr-lap"><div class="mr-unskew">LAP <b class="mr-num" data-k="lap">1</b>/2</div></div>
      <div class="mr-panel mr-dist"><div class="mr-unskew"><span data-k="dist">0.0 KM</span><div class="mr-bar"><i data-k="bar"></i></div></div></div>
    </div>
    <div class="mr-tower"></div>
    <div class="mr-map"><div class="mr-mapwrap"></div><canvas></canvas></div>
    <div class="mr-tags"></div>
    <div class="mr-banner"><div class="mr-b1"><span></span></div><span class="mr-b2"></span></div>
    <div class="mr-card3"><div class="mr-lane mr-num"><span></span></div><div class="mr-panel mr-info"><div class="mr-unskew"><div class="mr-nick"></div><div class="mr-tagl"></div></div></div></div>
    <div class="mr-count mr-num"></div>
    <div class="mr-photo"><div class="mr-flash"></div><div class="mr-line"></div><div class="mr-pf">PHOTO FINISH!</div><div class="mr-pcap"></div></div>
    <div class="mr-market"><div class="mr-m1">MARKET OPEN</div><div class="mr-m2"></div></div>
    <div class="mr-title"><div class="mr-t0"></div><span class="mr-t1"></span><div class="mr-t2"></div></div>
    <div class="mr-results"></div>`,n.appendChild(o);let a=nt=>o.querySelector(nt),l={};o.querySelectorAll("[data-k]").forEach(nt=>l[nt.dataset.k]=nt);let h=a(".mr-tower"),u={},g={};for(let nt of t){let rt=document.createElement("div");rt.className="mr-row";let W=e[nt.id]||[],dt=W.map(Ut=>`<span class="mr-badge" style="--bc:${Ou(Ut)}">${lv(Ut)?"":"\u2605"}${Jr(String(Ut)).slice(0,10)}</span>`).join("");W.length&&(rt.classList.add("backed"),rt.style.setProperty("--bc",Ou(W[0]))),rt.innerHTML=`<div class="mr-pos mr-num">1</div><div class="mr-card"><div class="mr-chip" style="background:${nt.colour.primary};border-right:4px solid ${nt.colour.secondary}"></div><div class="mr-name">${Jr(ir(nt))}</div><div class="mr-gap"></div></div><span class="mr-badges">${dt}</span>`,h.appendChild(rt),u[nt.id]={el:rt,pos:rt.querySelector(".mr-pos"),gap:rt.querySelector(".mr-gap"),last:""};let H=document.createElement("div");H.className="mr-tag",H.innerHTML=`<span class="mr-tb">${dt}</span><span class="mr-tp mr-num"></span><span class="mr-tn" style="background:${nt.colour.primary};color:#fff">${Jr(ir(nt))}</span>`,H.style.opacity="0",a(".mr-tags").appendChild(H),g[nt.id]={el:H,pos:H.querySelector(".mr-tp"),x:0,y:0,vis:!1}}let f=a(".mr-map canvas"),c=f.getContext("2d"),d=null,M=340,m=420;f.width=M,f.height=m;let p=i.points,b=1e9,_=1e9,v=-1e9,L=-1e9;for(let nt of p)b=Math.min(b,nt[0]),v=Math.max(v,nt[0]),_=Math.min(_,nt[2]),L=Math.max(L,nt[2]);if(i.funfair){let[nt,rt]=i.funfair.center,W=i.funfair.radius*.6;b=Math.min(b,nt-W),v=Math.max(v,nt+W),_=Math.min(_,rt-W),L=Math.max(L,rt+W)}for(let nt in r.diversions)for(let rt of r.diversions[nt])for(let W of rt.path)b=Math.min(b,W[0]),v=Math.max(v,W[0]),_=Math.min(_,W[1]),L=Math.max(L,W[1]);let T=26,E=Math.min((M-T*2)/(v-b),(m-T*2)/(L-_)),R=(M-(v-b)*E)/2,x=(m-(L-_)*E)/2,y=nt=>R+(nt-b)*E,S=nt=>x+(nt-_)*E;function A(){let nt=document.createElement("canvas");nt.width=M,nt.height=m;let rt=nt.getContext("2d"),W=(It,tt,$t,B)=>{rt.beginPath(),It.forEach((k,yt)=>yt?rt.lineTo(y(k[0]),S(k[1])):rt.moveTo(y(k[0]),S(k[1]))),rt.strokeStyle=tt,rt.lineWidth=$t,rt.lineJoin=rt.lineCap="round",rt.setLineDash(B||[]),rt.stroke(),rt.setLineDash([])},dt=(It,tt)=>{for(let $t of s.features)$t.kind===It&&$t.closed&&(rt.beginPath(),$t.pts.forEach((B,k)=>k?rt.lineTo(y(B[0]),S(B[1])):rt.moveTo(y(B[0]),S(B[1]))),rt.fillStyle=tt,rt.fill())},H=s.features.filter(It=>It.kind==="park").sort((It,tt)=>tt.pts.length-It.pts.length)[0];rt.save(),rt.beginPath(),H.pts.forEach((It,tt)=>tt?rt.lineTo(y(It[0]),S(It[1])):rt.moveTo(y(It[0]),S(It[1]))),rt.fillStyle="#9be27a",rt.fill(),rt.restore(),dt("water","#49a6ff"),dt("track","#ff7a5c");for(let It in r.diversions)for(let tt of r.diversions[It])W(tt.path,"#c79a5a",4,[6,6]);let Ut=[];for(let It=0;It<=r.LAP1_END_DRAW;It+=10)Ut.push(r.baseXZ(It));W(Ut,"#1a1420",11),W(Ut,"#8fa0c4",6);let _t=[];for(let It=r.MAP_TO-80;It<=r.finishM;It+=10)_t.push(r.baseXZ(It));W(_t,"#1a1420",11),W(_t,"#8fa0c4",6);let St=r.rawExt(r.finishM);return rt.fillStyle="#fff",rt.strokeStyle="#1a1420",rt.lineWidth=3,rt.fillRect(y(St[0])-7,S(St[1])-7,14,14),rt.strokeRect(y(St[0])-7,S(St[1])-7,14,14),rt.fillStyle="#1a1420",rt.fillRect(y(St[0])-7,S(St[1])-7,7,7),rt.fillRect(y(St[0]),S(St[1]),7,7),nt}d=A();function w(){d=A()}let I=0,N=a(".mr-banner");function O(nt,rt="",W="#ff3d8b",dt=2.4){N.querySelector(".mr-b1 span").textContent=nt,N.querySelector(".mr-b1").style.background=W,N.querySelector(".mr-b2").textContent=rt,N.classList.remove("on"),N.offsetWidth,N.classList.add("on"),I=dt}let z="";function F(nt,rt){if(I>0&&(I-=nt,I<=0&&N.classList.remove("on")),!!rt){if(rt.raceS!=null&&(l.clock.textContent=ov(rt.raceS)),rt.leaderM!=null&&(l.lap.textContent=rt.leaderM>=2500?"2":"1",l.dist.textContent=`${(Math.min(5e3,rt.leaderM)/1e3).toFixed(1)} KM`,l.bar.style.width=`${Math.min(100,rt.leaderM/5e3*100)}%`),rt.order){let W=h.clientHeight||0,dt=(h.querySelector(".mr-row")?.offsetHeight||40)+6;rt.order.forEach((H,Ut)=>{let _t=u[H.id];if(!_t)return;_t.el.style.transform=`translateY(${Ut*dt}px)`;let It=`${Ut}|${H.gapText}|${H.finished}`+(H.posHtml||"");It!==_t.last&&(_t.last=It,_t.pos.innerHTML=H.posHtml??Uu(Ut+1),_t.gap.textContent=H.gapText,_t.el.classList.toggle("lead",Ut===0&&!H.posHtml),_t.el.classList.toggle("fin",!!H.finished))})}if(rt.tags)for(let W of rt.tags){let dt=g[W.id];dt&&(W.visible!==dt.vis&&(dt.vis=W.visible,dt.el.style.opacity=W.visible?"1":"0"),W.visible&&(dt.el.style.transform=`translate(${W.x}px, ${W.y}px) translate(-50%,-100%) scale(${W.scale??1})`,dt.p!==W.pos&&(dt.p=W.pos,dt.pos.textContent=W.pos?rv(W.pos):"",dt.pos.style.display=W.pos?"":"none")))}if(rt.dots){c.clearRect(0,0,M,m),c.drawImage(d,0,0);for(let W of[...rt.dots].reverse())c.beginPath(),c.arc(y(W.x),S(W.z),W.lead?11:9,0,7),c.fillStyle=W.colour,c.fill(),c.lineWidth=3.5,c.strokeStyle="#1a1420",c.stroke(),W.focus&&(c.beginPath(),c.arc(y(W.x),S(W.z),15,0,7),c.strokeStyle="#fff",c.lineWidth=3,c.stroke());rt.camDot&&(c.save(),c.translate(y(rt.camDot.x),S(rt.camDot.z)),c.rotate(rt.camDot.a),c.fillStyle="rgba(26,20,32,.6)",c.beginPath(),c.moveTo(0,0),c.lineTo(-10,-22),c.lineTo(10,-22),c.fill(),c.restore())}}}function X(nt){o.classList.toggle("mr-dim",!!nt)}function it(nt){o.classList.toggle("mr-dimtop",!!nt)}function P(){I=0,N.classList.remove("on")}function mt(nt){let rt=a(".mr-card3");if(!nt){rt.classList.remove("on");return}rt.querySelector(".mr-lane span").textContent=nt.lane??"",rt.querySelector(".mr-lane").style.background=nt.colour.primary,rt.querySelector(".mr-info").style.background=`linear-gradient(180deg, ${nt.colour.primary}, ${cv(nt.colour.primary,-.25)})`,rt.querySelector(".mr-nick").textContent=nt.nickname,rt.querySelector(".mr-nick").style.color="#fff",rt.querySelector(".mr-tagl").textContent=nt.tagline||"",rt.querySelector(".mr-tagl").style.color=av(nt.colour.primary)==="#ffffff"?"#fff":"#1a1420",rt.classList.remove("on"),rt.offsetWidth,rt.classList.add("on")}function Ot(nt){let rt=a(".mr-count");rt.textContent=nt,rt.classList.remove("pop"),rt.offsetWidth,rt.classList.add("pop")}function U(nt,rt=""){a(".mr-photo").classList.toggle("on",!!nt),a(".mr-pcap").textContent=rt,a(".mr-pcap").style.display=rt?"":"none"}function Y(nt,rt="Place your halfway bets!"){a(".mr-market").classList.toggle("on",!!nt),a(".mr-market .mr-m2").textContent=rt}function j(nt,{title:rt="",kicker:W="",theme:dt=""}={}){let H=a(".mr-title");if(nt){H.querySelector(".mr-t0").textContent=W,H.querySelector(".mr-t1").textContent=rt;let Ut=H.querySelector(".mr-t2");Ut.textContent=dt,Ut.style.display=dt?"":"none",H.querySelector(".mr-t0").style.display=W?"":"none"}H.classList.toggle("on",!!nt)}function G(nt,rt){let W=rt[0]-nt[0],dt=rt[1]-nt[1],H=Math.hypot(W,dt)||1,Ut=W/H,_t=dt/H,St=nt[0]-Ut*H*.6,It=nt[1]-_t*H*.6,tt=a(".mr-photo .mr-line");tt.style.width=`${H*2.2}px`,tt.style.transform=`translate(${St}px, ${It}px) rotate(${Math.atan2(_t,Ut)}rad)`}function ct(nt){let rt=a(".mr-results");if(!nt){rt.classList.remove("on");return}rt.innerHTML='<div class="mr-panel mr-rh"><div class="mr-unskew">RESULTS</div></div>'+nt.map(W=>`<div class="mr-rr"><span class="mr-num">${Uu(W.place)}</span><span style="width:calc(var(--u)*1.2);height:calc(var(--u)*2.2);background:${W.colour};border:2px solid #1a1420;border-radius:4px"></span><span>${Jr(W.nickname)}</span><span class="mr-t">${Jr(W.timeText||"")}</span></div>`).join(""),requestAnimationFrame(()=>rt.classList.add("on"))}function at(){o.remove()}return{root:o,update:F,redrawMap:w,showBanner:O,clearBanner:P,setDim:X,setDimTop:it,introCard:mt,countdown:Ot,photo:U,photoLine:G,results:ct,market:Y,titleCard:j,dispose:at}}function ir(n){if(n.shortName)return n.shortName;let t=String(n.nickname||n.id).replace(/^the\s+/i,"");if(t.length<=14)return t;let e=t.split(/\s+/),i=e.slice(-2).join(" ");return i.length<=14?i:e.at(-1).slice(0,14)}var Nu=["#ffd23f","#ff8fc8","#7fe0ff","#9dff8a","#ffb067","#c7a6ff"],Da=new Map;function Ou(n){return Da.has(n)||Da.set(n,Da.size),Nu[Da.get(n)%Nu.length]}var lv=n=>/\p{Extended_Pictographic}/u.test(String(n));function cv(n,t){let e=parseInt(n.slice(1),16),i=e>>16&255,s=e>>8&255,r=e&255,o=a=>Math.max(0,Math.min(255,Math.round(t<0?a*(1+t):a+(255-a)*t)));return`rgb(${o(i)},${o(s)},${o(r)})`}var Ua=(n,t,e=12,i=!0)=>on(256,256,(s,r,o)=>{for(let a=0;a<e;a++)s.fillStyle=a%2?n:t,i?s.fillRect(a*r/e,0,r/e+1,o):s.fillRect(0,a*o/e,r,o/e+1)});function zu(n,t,e,i){let s=Rn(42),r=new ue;n.add(r);let o=[],a=[],l=(A,w=3)=>(Jn(A,w,void 0,30),A),h=(A,w,I=3)=>xe(A,w,{ol:I,olRef:30}),u=[];for(let A=0;A<i.path.length;A++){let w=i.path[A],I=e.anchors.nearestOnRibbon(w[0],w[1]),N=Math.hypot(w[0]-I[0],w[1]-I[1]);u.push({x:(w[0]+I[0])/2,z:(w[1]+I[1])/2,gap:N})}let g=0;u.forEach((A,w)=>{w&&(g+=Math.hypot(A.x-u[w-1].x,A.z-u[w-1].z)),A.s=g});let f=g,c=A=>{let w=0;for(;w<u.length-2&&u[w+1].s<A;)w++;let I=u[w],N=u[w+1],O=Math.max(0,Math.min(1,(A-I.s)/Math.max(1e-6,N.s-I.s))),z=I.x+(N.x-I.x)*O,F=I.z+(N.z-I.z)*O,X=Math.hypot(N.x-I.x,N.z-I.z)||1;return{x:z,z:F,gap:I.gap+(N.gap-I.gap)*O,tx:(N.x-I.x)/X,tz:(N.z-I.z)/X,y:t.heightAt(z,F)}},d=u.filter(A=>A.gap>26),M=d.length?d[0].s:f*.25,m=d.length?d.at(-1).s:f*.75,p=A=>Array.from({length:A},(w,I)=>c(M+(I+.5)/A*(m-M))),b=(A,w,I=0)=>(A.position.set(w.x,w.y-.1,w.z),A.rotation.y=Math.atan2(w.tx,w.tz)+I,r.add(A),A),_={center:c((M+m)/2),rides:[]},v=p(7);{let A=v.slice(1,6).sort((G,ct)=>ct.gap-G.gap)[0],w=new ue,I=17,N=I+2.6,O=new ce(.35,.5,N/Math.cos(.32)+1,8);for(let G of[-1,1])for(let ct of[-1,1]){let at=h(O,gt("#ffffff"));at.position.set(G*1.8,N/2,ct*Math.tan(.32)*N/2),at.rotation.x=-ct*.32,w.add(at)}let z=h(new Me(6,1,8,2,.3),gt("#2e9bff"));z.position.y=.5,w.add(z);let F=new ue;F.position.y=N,w.add(F);let X=h(new Je(I,.45,8,64),gt("#ff3d8b"));X.rotation.y=Math.PI/2,X.position.x=1.2,F.add(X);let it=h(new Je(I,.45,8,64),gt("#ff3d8b"));it.rotation.y=Math.PI/2,it.position.x=-1.2,F.add(it);let P=h(new ce(1.3,1.3,3.2,16).rotateZ(Math.PI/2),gt("#ffd23f"));F.add(P);let mt=16,Ot=[],U=[];for(let G=0;G<mt;G++){let ct=G/mt*Math.PI*2,at=h(new Ee(.18,I,.18).translate(0,I/2,0),gt("#ffffff"),2);at.rotation.x=ct,at.position.x=1.2,F.add(at);let nt=at.clone();nt.position.x=-1.2,F.add(nt);let rt=new ue;rt.position.set(0,Math.cos(ct)*I,Math.sin(ct)*I),F.add(rt);let W=new ue;rt.add(W);let dt=["#ffd23f","#3ddc84","#2e9bff","#ff8a3d","#b07bff"][G%5],H=h(new Me(1.7,1.3,1.5,2,.35),gt(dt));H.position.y=-1.3,W.add(H);let Ut=h(new qe(1.2,.7,4).rotateY(Math.PI/4),gt("#ffffff"),2);Ut.position.y=-.1,W.add(Ut),Ot.push(rt);for(let _t=0;_t<3;_t++){let St=ct+_t/3*(Math.PI*2/mt);U.push([1.2,Math.cos(St)*I,Math.sin(St)*I],[-1.2,Math.cos(St)*I,Math.sin(St)*I])}}let Y=new en(new ge(.32,8,6),new Un({color:16777215}),U.length),j=new ke;U.forEach((G,ct)=>{j.position.set(...G),j.updateMatrix(),Y.setMatrixAt(ct,j.matrix),Y.setColorAt(ct,new re(["#fff27a","#ff7ac8","#7affff"][ct%3]))}),F.add(Y),b(w,A,0),a.push(G=>{F.rotation.x=G*.18;for(let ct of Ot)ct.rotation.x=-G*.18}),_.rides.push({kind:"wheel",obj:w,pos:new $(A.x,A.y+N,A.z),r:I}),A.used=!0}{let A=v.filter(U=>!U.used).sort((U,Y)=>Y.gap-U.gap)[0];A.used=!0;let w=new ue,I=Math.min(6.5,A.gap*.28);w.scale.setScalar(1.45);let N=Ua("#ffffff","#ff4f6d",16);o.push(N);let O=h(new ce(I,I+.3,.9,32),gt("#ffffff",{map:N}));O.position.y=.45,w.add(O);let z=new ue;w.add(z);let F=h(new ce(.7,.7,5,16),gt("#ffd23f"));F.position.y=3,z.add(F);let X=Ua("#ffd23f","#ff3d8b",16);o.push(X);let it=h(new qe(I+.8,2.8,16),gt("#ffffff",{map:X}));it.position.y=6.6,z.add(it);let P=h(new ce(I+.8,I+.8,.7,16,1,!0),gt("#2e9bff",{side:je}));P.position.y=4.9,z.add(P);let mt=h(new ge(.5,12,8),gt("#ff3d8b"));mt.position.y=8.2,z.add(mt);let Ot=[];for(let U=0;U<8;U++){let Y=U/8*Math.PI*2,j=I*.72,G=new ue;G.position.set(Math.cos(Y)*j,0,Math.sin(Y)*j),G.rotation.y=-Y,z.add(G);let ct=h(new ce(.06,.06,4.2,6),gt("#ffd23f"),1.5);ct.position.y=2.9,G.add(ct);let at=new ue;G.add(at);let nt=["#ffffff","#ffd6f0","#d6f0ff","#fff2b0"][U%4],rt=h(new Me(.7,.7,1.6,2,.3),gt(nt));at.add(rt);let W=h(new Me(.45,.9,.5,2,.2),gt(nt));W.position.set(0,.55,.7),W.rotation.x=.4,at.add(W);let dt=h(new Me(.45,.45,.8,2,.2),gt(nt));dt.position.set(0,.95,1.05),at.add(dt);let H=h(new Me(.15,.8,.3,1,.06),gt(["#ff3d8b","#2e9bff","#3ddc84","#ff8a3d"][U%4]),2);H.position.set(0,.75,.55),H.rotation.x=.4,at.add(H);let Ut=h(new Me(.75,.2,.6,1,.08),gt("#ff3d8b"),2);Ut.position.y=.4,at.add(Ut);for(let[_t,St]of[[-.22,.55],[.22,.55],[-.22,-.55],[.22,-.55]]){let It=h(new Ee(.16,.7,.16),gt(nt),1.5);It.position.set(_t,-.55,St),It.rotation.x=St>0?-.5:.5,at.add(It)}at.rotation.y=Math.PI/2,Ot.push({horse:at,ph:U*.8})}b(w,A),a.push(U=>{z.rotation.y=U*.6;for(let Y of Ot)Y.horse.position.y=2+Math.sin(U*2.2+Y.ph)*.35}),_.rides.push({kind:"carousel",obj:w,pos:new $(A.x,A.y+6,A.z),r:I*1.45})}{let A=v.filter(U=>!U.used).sort((U,Y)=>Y.gap-U.gap)[0];A.used=!0;let w=new ue,I=15;w.scale.setScalar(1.5);let N=Ua("#ff3d3d","#ffffff",10,!1);o.push(N);let O=h(new ce(1.6,2.6,I,16),gt("#ffffff",{map:N}));O.position.y=I/2,w.add(O);let z=h(new qe(2.6,3.4,16),gt("#2e9bff"));z.position.y=I+1.7,w.add(z);let F=h(new ce(.06,.06,2,6),gt("#ffffff"),1.5);F.position.y=I+4.2,w.add(F);let X=h(new fn(1.2,.7).translate(.6,0,0),gt("#ffd23f",{side:je}),1.5);X.position.y=I+4.8,w.add(X);let it=[],P=3.2;for(let U=0;U<=160;U++){let Y=U/160,j=Y*P*Math.PI*2,G=2.6+(1-Y)*-.8+1.6;it.push(new $(Math.cos(j)*G,I-1-Y*(I-2),Math.sin(j)*G))}let mt=h(new Ma(new Fr(it),220,.55,8,!1),gt("#ffd23f"));mt.scale.y=1,w.add(mt);let Ot=h(new Me(3,.3,2,2,.1),gt("#3ddc84"),2);Ot.position.set(it.at(-1).x+1,.15,it.at(-1).z),w.add(Ot),b(w,A),a.push(U=>{X.rotation.y=Math.sin(U*3)*.4}),_.rides.push({kind:"helter",obj:w,pos:new $(A.x,A.y+12,A.z),r:6})}let L=[["CANDYFLOSS","#ff9bd2"],["HOOK-A-DUCK","#57c7ff"],["DOUGHNUTS","#ffb347"],["COCONUT SHY","#8ee86b"],["TOFFEE APPLES","#ff5d5d"],["HOOK-A-DUCK","#57c7ff"]],T=[];[...v.filter(A=>!A.used),...p(13).filter((A,w)=>w%2===1)].slice(0,7).forEach((A,w)=>{let[I,N]=L[w%L.length],O=new ue,z=w%2?1:-1,F=h(new Me(4.2,2.4,3,2,.2),gt("#fff6e0"));F.position.y=1.2,O.add(F);let X=h(new Me(4.4,1.1,.8,2,.15),gt(N));X.position.set(0,.55,1.7),O.add(X);let it=Ua("#ffffff",N,10);o.push(it);let P=h(new Ee(4.8,.18,2.4),gt("#ffffff",{map:it}));P.position.set(0,2.9,1.4),P.rotation.x=.32,O.add(P);for(let ct of[-1,1]){let at=h(new ce(.09,.09,2.6,6),gt("#ffffff"),1.5);at.position.set(ct*2.2,1.6,2.4),O.add(at)}let mt=Kn(512,128,(ct,at,nt)=>{ct.fillStyle="#1a1420",Ye(ct,0,0,at,nt,30),ct.fill(),ct.fillStyle=N,Ye(ct,8,8,at-16,nt-16,24),ct.fill(),an(ct,I,at/2,nt/2+4,I.length>11?52:64,"#ffffff","#1a1420",.2)},o),Ot=xe(new Me(4.2,1.05,.3,2,.1),[gt(N),gt(N),gt(N),gt(N),gt("#ffffff",{map:mt}),gt("#ffffff",{map:mt})],{ol:2.5,olRef:30});if(Ot.position.set(0,3.7,.4),O.add(Ot),I==="CANDYFLOSS")for(let ct=0;ct<4;ct++){let at=h(new nn(.32,1),gt("#ff9bd2"),1.5);at.position.set(-1.4+ct*.9,1.45,1.75),O.add(at)}if(I==="HOOK-A-DUCK"){let ct=h(new ce(1.6,1.6,.6,20),gt("#57c7ff"),2);ct.position.set(0,.3,3.6),O.add(ct);let at=new ue;at.position.set(0,.7,3.6),O.add(at);for(let nt=0;nt<6;nt++){let rt=nt/6*Math.PI*2,W=h(new ge(.22,10,8),gt("#ffd23f"),1.5);W.position.set(Math.cos(rt)*1.1,0,Math.sin(rt)*1.1);let dt=h(new ge(.14,8,6),gt("#ffd23f"),1.2);dt.position.set(0,.22,.12),W.add(dt),at.add(W)}T.push(at)}let U=e.anchors.nearestOnRibbon(A.x,A.z),Y=Math.atan2(U[0]-A.x,U[1]-A.z),j=Math.min(A.gap*.3,7)*z,G=b(O,{...A,x:A.x+A.tz*j,z:A.z-A.tx*j,y:t.heightAt(A.x+A.tz*j,A.z-A.tx*j)});G.rotation.y=Y+(z>0?0:Math.PI)*0}),a.push(A=>{for(let w of T)w.rotation.y=A*.8});{let A=[],w=[],I=[],N=[],O=[];for(let mt of[-1,1]){let Ot=null;for(let U=M-10;U<=m+10;U+=9){let Y=c(U),j=(Y.gap/2-6)*mt,G=Y.x+Y.tz*j,ct=Y.z-Y.tx*j,at=t.heightAt(G,ct),nt=new $(G,at+4.2,ct),rt=h(new ce(.08,.1,4.3,6),gt("#ffffff"),1.5);if(rt.position.set(G,at+2.1,ct),r.add(rt),Ot)for(let W=0;W<=10;W++){let dt=W/10,H=Ot.clone().lerp(nt,dt);H.y-=Math.sin(dt*Math.PI)*.7,A.push(H),W<10&&(W%2?(w.push(H.clone()),I.push(["#fff27a","#ff7ac8","#7affff","#9dff7a"][(W+Math.round(U))%4])):(N.push({v:H.clone(),a:Math.atan2(-(nt.z-Ot.z),nt.x-Ot.x)}),O.push(["#ff3d8b","#ffd23f","#2e9bff","#3ddc84","#ff8a3d"][(W+Math.round(U/9))%5])))}Ot=nt}}let z=new ke,F=new en(new ge(.16,8,6),new Un({color:16777215}),w.length);w.forEach((mt,Ot)=>{z.position.copy(mt),z.updateMatrix(),F.setMatrixAt(Ot,z.matrix),F.setColorAt(Ot,new re(I[Ot]))}),r.add(F);let X=new De;X.setAttribute("position",new pe([-.32,0,0,.32,0,0,0,-.65,0],3)),X.setAttribute("normal",new pe([0,0,1,0,0,1,0,0,1],3));let it=new en(X,gt("#ffffff",{side:je}),N.length);N.forEach((mt,Ot)=>{z.position.copy(mt.v),z.rotation.set(0,mt.a,0),z.updateMatrix(),it.setMatrixAt(Ot,z.matrix),it.setColorAt(Ot,new re(O[Ot]))}),r.add(it);let P=[];for(let mt=0;mt+1<A.length;mt++)A[mt].distanceTo(A[mt+1])<3&&P.push(A[mt],A[mt+1]);r.add(new Ks(new De().setFromPoints(P),new cs({color:3355443}))),a.push(mt=>{F.material.color.setScalar(.85+.15*Math.sin(mt*6))})}{let A=c(M-4),w=Kn(1024,256,(N,O,z)=>{N.fillStyle="#1a1420",Ye(N,0,0,O,z,60),N.fill(),N.fillStyle="#ff3d8b",Ye(N,10,10,O-20,z-20,52),N.fill(),an(N,"\u2605 FUNFAIR \u2605",O/2,z/2+6,120,"#ffe14d","#1a1420",.18)},o),I=xe(new Me(10,2.4,.4,2,.15),[gt("#ff3d8b"),gt("#ff3d8b"),gt("#ff3d8b"),gt("#ff3d8b"),gt("#ffffff",{map:w}),gt("#ffffff",{map:w})],{ol:3,olRef:30});I.position.set(A.x,A.y+7.5,A.z),I.rotation.y=Math.atan2(A.tx,A.tz)+Math.PI/2,r.add(I);for(let N of[-1,1]){let O=h(new ce(.25,.3,7.6,8),gt("#ffd23f"));O.position.set(A.x+A.tz*4.5*N,A.y+3.8,A.z-A.tx*4.5*N),r.add(O)}}let R=[];for(let A=0;A<60;A++){let w=M+s()*(m-M),I=c(w),N=(s()-.5)*(I.gap-16),O=I.x+I.tz*N,z=I.z-I.tx*N;R.push({x:O,y:t.heightAt(O,z),z,yaw:s()*6.28})}function x(A,w){for(let I of u){if(I.s<M-20||I.s>m+20)continue;let N=Math.max(6,I.gap/2-4);if((A-I.x)**2+(w-I.z)**2<N*N)return!0}return!1}function y(A){for(let w of a)w(A)}function S(){r.traverse(A=>{A.geometry&&A.geometry.dispose()});for(let A of o)A.dispose?.();n.remove(r)}return{group:r,update:y,dispose:S,anchors:_,crowd:R,at:c,s0:M,s1:m,contains:x}}function Bu(n,t,e,i,s,{camera:r,offsetX:o=3.2}){let a=new ue;n.add(a);let l=[],h=t.sample(t.finishM+28),u=new $(h.tx,0,h.tz),g=new $(h.rx,0,h.rz),f=new $(h.x,t.heightAt(h.x,h.z),h.z),c=Math.atan2(u.x,u.z);a.position.copy(f),a.rotation.y=c;let d=[{place:2,x:-2.3,hgt:1.3,col:"#c9d3e6"},{place:1,x:0,hgt:1.9,col:"#ffd23f"},{place:3,x:2.3,hgt:.9,col:"#e59a5c"}];for(let w of d){let I=Kn(256,256,(O,z,F)=>{O.fillStyle="#2e6fe0",O.fillRect(0,0,z,F),O.fillStyle=w.col,O.fillRect(0,0,z,26),an(O,String(w.place),z/2,F/2+14,170,w.col,"#1a1420",.16)},l),N=xe(new Me(2.25,w.hgt,2,3,.12),[gt("#2e6fe0"),gt("#2e6fe0"),gt(w.col),gt("#2e6fe0"),gt("#ffffff",{map:I}),gt("#2e6fe0")],{ol:3.5,olRef:12});N.position.set(w.x,w.hgt/2,0),a.add(N),w.top=w.hgt}let M=Kn(1024,256,(w,I,N)=>{w.fillStyle="#1a1420",Ye(w,0,0,I,N,50),w.fill(),w.fillStyle="#ff3d8b",Ye(w,10,10,I-20,N-20,42),w.fill(),an(w,"MARKRUN CHAMPIONS",I/2,N/2+6,80,"#ffffff","#1a1420",.16)},l),m=xe(new Me(9,2.2,.3,2,.1),[gt("#ff3d8b"),gt("#ff3d8b"),gt("#ff3d8b"),gt("#ff3d8b"),gt("#ffffff",{map:M}),gt("#ffffff",{map:M})],{ol:3,olRef:14});m.position.set(0,5.6,-2.4),a.add(m);for(let w of[-1,1]){let I=xe(new ce(.14,.16,5.6,8),gt("#ffffff"),{ol:2,olRef:14});I.position.set(w*4.3,2.8,-2.4),a.add(I)}let p=s.length,b=[];for(let w of s){let I=i[w.runnerId];if(!I)continue;let N=d.find(F=>F.place===w.place),O=N?new $(N.x,N.top,.1):null,z;if(w.place===1?z=["celebrate","jump"]:w.place===2?z=["pose","flex"]:w.place===3?z=["celebrate","fist"]:w.place===p&&p>3?z=["celebrate","collapse"]:z=["celebrate","shrug"],!O){b.push({rr:I,o:w,pose:z});continue}_(I,O,z)}b.forEach((w,I)=>{let N=I%2?1:-1,O=Math.floor(I/2),z=w.pose[1]==="collapse",F=new $(N*(z?4.6:4.2+O*1.6),0,z?1.6:.6+O*.8);_(w.rr,F,w.pose,z?-N*Math.PI/2:0)});function _(w,I,N,O=0){let z=I.clone().applyAxisAngle(new $(0,1,0),c).add(f);I.y===0&&(z.y=t.heightAt(z.x,z.z)+.05),w.root.position.copy(z),w.root.rotation.set(0,c+O,0),w.set(...N),w.setPop(null)}let v=Rn(3),L=420,T=new en(new fn(.16,.26),new Un({side:je}),L),E=[],R=["#ff3d8b","#ffd23f","#2e9bff","#3ddc84","#ff8a3d","#ffffff","#b07bff"];for(let w=0;w<L;w++)E.push({x:(v()-.5)*14,y:v()*12,z:(v()-.5)*8,vy:1+v()*1.6,sp:v()*6,ph:v()*6.28}),T.setColorAt(w,new re(R[w%R.length]));T.frustumCulled=!1,a.add(T);let x=new ke,y=0;function S(w,I){y+=w;for(let X=0;X<L;X++){let it=E[X];it.y-=it.vy*w,it.y<0&&(it.y+=12),x.position.set(it.x+Math.sin(y*1.3+it.ph)*.5,it.y,it.z+Math.cos(y+it.ph)*.4),x.rotation.set(y*it.sp+it.ph,y*it.sp*.7,it.ph),x.updateMatrix(),T.setMatrixAt(X,x.matrix)}T.instanceMatrix.needsUpdate=!0;let N=Math.sin(y*.18)*.4,O=15-Math.min(2.5,y*.2),z=new $(Math.sin(N)*O,3+Math.sin(y*.3)*.3,Math.cos(N)*O).applyAxisAngle(new $(0,1,0),c);r.position.copy(f).add(z);let F=new $(o,2.2,0).applyAxisAngle(new $(0,1,0),c).add(f);r.lookAt(F),r.fov!==42&&(r.fov=42,r.updateProjectionMatrix())}function A(){a.traverse(w=>{w.geometry&&w.geometry.dispose()}),T.material.dispose();for(let w of l)w.dispose?.();n.remove(a)}return{update:S,dispose:A,center:f}}var Ge=(n,t)=>{n=n.index?n.toNonIndexed():n;let e=new re(t).convertSRGBToLinear(),i=n.getAttribute("position").count,s=new Float32Array(i*3);for(let r=0;r<i;r++)s[r*3]=e.r,s[r*3+1]=e.g,s[r*3+2]=e.b;return n.setAttribute("color",new $e(s,3)),n.getAttribute("uv")&&n.deleteAttribute("uv"),n},pn=(n,t,e,i,s=0,r=1.6)=>(n.scale(r,r,r),n.rotateY(s),n.translate(t,e,i),n);function Hu(n,t,e,i){let s=Rn(777),r=new ue;n.add(r);let o=[],a=[],l=(d,M)=>`lawn:${Math.floor(d/140)},${Math.floor(M/140)}`,h=(d,M,m,p=.8,b)=>a.push({x:d,y:t.heightAt(d,M),z:M,yaw:m,scale:p,colour:b,zone:l(d,M)}),{ribbonSamples:u}=e.anchors;function g(d,M,m){for(let p=0;p<40;p++){let b=u[Math.floor(s()*u.length)],_=s()*Math.PI*2,v=d+s()*(M-d),L=b[0]+Math.cos(_)*v,T=b[1]+Math.sin(_)*v;if(!(!e.inPark(L,T)||e.blocked(L,T,m+1)||!e.clearOf(L,T,m)||e.onPath(L,T,m+2)))return e.reserve(L,T,m),{x:L,z:T,y:t.heightAt(L,T),toPath:Math.atan2(b[0]-L,b[1]-T)}}return null}{let d=[],M=["#ff5d8f","#ffd23f","#2e9bff","#3ddc84","#ff8a3d","#b07bff"],m=(T,E,R,x,y,S)=>{d.push(pn(Ge(new Ee(1.6,.2,1.6).translate(0,2,0),y),T,E,R,x));for(let[I,N]of[[-.7,-.7],[.7,-.7],[-.7,.7],[.7,.7]])d.push(pn(Ge(new ce(.08,.08,2,6).translate(I,1,N),"#ffffff"),T,E,R,x));d.push(pn(Ge(new qe(1.25,1,4).rotateY(Math.PI/4).translate(0,2.6,0),S),T,E,R,x));let A=new Ee(.9,.12,3.3);A.rotateX(-.62),A.translate(0,1.05,2.1),d.push(pn(Ge(A,S),T,E,R,x));let w=new Ee(.8,.08,2.4);w.rotateX(1),w.translate(0,1,-1.3),d.push(pn(Ge(w,"#ffffff"),T,E,R,x))},p=(T,E,R,x,y)=>{for(let S of[-1.8,1.8])for(let A of[-.6,.6]){let w=new ce(.08,.08,2.8,6);w.rotateX(A>0?.22:-.22),w.translate(S,1.35,A*.5),d.push(pn(Ge(w,y),T,E,R,x))}d.push(pn(Ge(new ce(.1,.1,3.8,8).rotateZ(Math.PI/2).translate(0,2.7,0),y),T,E,R,x));for(let S of[-.8,.8]){d.push(pn(Ge(new Ee(.6,.08,.35).translate(S,.75,0),"#22202c"),T,E,R,x));for(let A of[-.25,.25])d.push(pn(Ge(new ce(.02,.02,1.9,4).translate(S+A,1.7,0),"#888888"),T,E,R,x))}},b=(T,E,R,x)=>{let y=new ge(1.6,8,5,0,Math.PI*2,0,Math.PI/2);d.push(pn(Ge(y,x),T,E,R)),d.push(pn(Ge(new ce(.4,.4,.5,8).translate(0,1.7,0),"#ffffff"),T,E,R))},_=(T,E,R,x,y)=>{d.push(pn(Ge(new ce(1.5,1.5,.25,16).translate(0,.35,0),x),T,E,R)),d.push(pn(Ge(new ce(.1,.1,1,6).translate(0,.9,0),y),T,E,R)),d.push(pn(Ge(new Je(.9,.06,6,16).rotateX(Math.PI/2).translate(0,1.2,0),y),T,E,R))},v=(T,E,R,x,y)=>{d.push(pn(Ge(new ge(.45,10,8).scale(1,.9,1.4).translate(0,.95,0),y),T,E,R,x)),d.push(pn(Ge(new ge(.3,8,6).translate(0,1.4,.55),y),T,E,R,x)),d.push(pn(Ge(new ce(.12,.12,.6,6).translate(0,.3,0),"#888888"),T,E,R,x))},L=[m,p,b,_,v];for(let T of i.features){if(T.kind!=="playground"||!T.closed)continue;let E=On(T.pts),R=(E[2]-E[0])*(E[3]-E[1]),x=Math.max(1,Math.min(9,Math.round(R/380))),y=[];for(let S=0,A=0;S<x&&A<80;A++){let w=E[0]+3+s()*(E[2]-E[0]-6),I=E[1]+3+s()*(E[3]-E[1]-6);if(!nr(T.pts,w,I)||y.some(it=>Math.hypot(it[0]-w,it[1]-I)<8.5))continue;y.push([w,I]),S++;let N=t.heightAt(w,I)-.05,O=s()*6.28,z=M[Math.floor(s()*M.length)],F=M[Math.floor(s()*M.length)],X=L[(S+y.length+Math.floor(s()*5))%L.length];X===m||X===p||X===v?X(w,N,I,O,z,F):X(w,N,I,z,F),s()<.6&&h(w+2.5,I+1.5,s()*6,.55)}}if(d.length){let T=xe(Qe(d),gt("#ffffff",{vertexColors:!0}),{ol:2,olRef:30});r.add(T)}}{let d=on(64,64,(R,x,y)=>{for(let S=0;S<6;S++)for(let A=0;A<6;A++)R.fillStyle=(S+A)%2?"#ffffff":"#c8c8c8",R.fillRect(S*x/6,A*y/6,x/6+1,y/6+1)});o.push(d);let M=new fn(2.8,2.2);M.rotateX(-Math.PI/2);let m=[],p=[],b=[],_=["#ff4f6d","#2e9bff","#3ddc84","#ffd23f","#ff8a3d","#b07bff"];for(let R=0;R<90;R++){let x=g(12,70,3);if(!x)continue;let y=s()*6.28;m.push({x:x.x,y:x.y+.06,z:x.z,ry:y}),p.push(_[R%_.length]),b.push({x:x.x+Math.cos(y)*.7,y:x.y+.05,z:x.z-Math.sin(y)*.7,ry:y});let S=1+Math.floor(s()*3);for(let A=0;A<S;A++){let w=y+A/S*Math.PI*2+.5,I=x.x+Math.cos(w)*.9,N=x.z-Math.sin(w)*.9;h(I,N,x.toPath+(s()-.5),.62+s()*.15)}}let v=new en(M,gt("#ffffff",{map:d,polygonOffset:!0,polygonOffsetFactor:-1}),m.length),L=new ke;m.forEach((R,x)=>{L.position.set(R.x,R.y,R.z),L.rotation.set(0,R.ry,0),L.updateMatrix(),v.setMatrixAt(x,L.matrix),v.setColorAt(x,new re(p[x]))}),v.receiveShadow=!0,v.computeBoundingSphere(),r.add(v),e.registerInstanced(v,m);let T=Qe([Ge(new Me(.7,.45,.5,2,.08).translate(0,.22,0),"#c98a4a"),Ge(new Je(.25,.04,6,12,Math.PI).translate(0,.45,0),"#8a5a36")]),E=new en(T,gt("#ffffff",{vertexColors:!0}),b.length);b.forEach((R,x)=>{L.position.set(R.x,R.y,R.z),L.rotation.set(0,R.ry,0),L.updateMatrix(),E.setMatrixAt(x,L.matrix)}),E.castShadow=!0,E.computeBoundingSphere(),Jn(E,1.6,void 0,20),r.add(E),e.registerInstanced(E,b)}{let d=Qe([new Yn(.22,.5,4,8).rotateX(Math.PI/2).translate(0,.45,0),new ge(.22,10,8).translate(0,.72,.42),new ge(.1,6,5).scale(.6,1.4,.6).translate(-.14,.86,.36),new ge(.1,6,5).scale(.6,1.4,.6).translate(.14,.86,.36),new ge(.09,6,5).translate(0,.66,.64),...[[-.13,.25],[.13,.25],[-.13,-.25],[.13,-.25]].map(([R,x])=>new ce(.06,.06,.32,6).translate(R,.16,x)),new ce(.04,.03,.35,5).rotateX(-.9).translate(0,.6,-.42)].map(R=>R.index?R.toNonIndexed():R).map(R=>(R.deleteAttribute("uv"),R))),M=Qe([Ge(new ge(.55,12,8,0,Math.PI*2,Math.PI*.45,Math.PI*.55).scale(1,.8,1.3).translate(0,.95,0),"#ffffff"),Ge(new ge(.56,12,8,Math.PI,Math.PI,0,Math.PI*.5).scale(1,.9,.9).translate(0,.95,-.2),"#ffffff"),...[[-.45,.45],[.45,.45],[-.45,-.45],[.45,-.45]].map(([R,x])=>Ge(new Je(.2,.06,6,12).rotateY(Math.PI/2).translate(R,.22,x),"#22202c")),Ge(new ce(.03,.03,.9,5).rotateX(.6).translate(0,1.15,-.85),"#22202c")]),m=[],p=[],b=[],_=[],v=["#c98a4a","#3b2a20","#f2e6d0","#8a8a8a","#e0b070","#ffffff"];for(let R=0;R<64;R++){let x=g(8,60,1.6);if(!x)continue;let y=s()*6.28;h(x.x,x.z,y,.82);let S=Math.sin(y),A=Math.cos(y);R%4===3?(b.push({x:x.x+S*1.4,y:x.y,z:x.z+A*1.4,ry:y,s:1}),_.push(["#ffb3c7","#b3dcff","#c8f0b0","#fff0a0"][R%4])):(m.push({x:x.x+S*1.6+A*.8,y:x.y,z:x.z+A*1.6-S*.8,ry:y+(s()-.5)*.8,s:.8+s()*.6}),p.push(v[Math.floor(s()*v.length)]))}let L=new ke,T=(R,x,y,S)=>{let A=new en(R,x,y.length);return y.forEach((w,I)=>{L.position.set(w.x,w.y,w.z),L.rotation.set(0,w.ry,0),L.scale.setScalar(w.s),L.updateMatrix(),A.setMatrixAt(I,L.matrix),S&&A.setColorAt(I,new re(S[I]))}),A.castShadow=!0,A.receiveShadow=!0,A.computeBoundingSphere(),Jn(A,2,void 0,18),r.add(A),e.registerInstanced(A,y),A},E=m.length?T(d,gt("#ffffff"),m,p):null;b.length&&T(M,gt("#ffffff",{vertexColors:!0}),b,_)}{let d=[],M=[],m=[],p=["#ff5d8f","#ffd23f","#ffffff","#b06bff","#ff8a3d","#ff3d3d"];for(let E=0;E<26;E++){let R=g(9,40,3.2);if(!R)continue;let x=2.2+s()*.8;d.push({x:R.x,y:R.y-.05,z:R.z,s:x});let y=[p[E%p.length],p[(E+2)%p.length]];for(let S=0;S<60;S++){let A=s()*6.28,w=Math.sqrt(s())*(x-.25);M.push({x:R.x+Math.cos(A)*w,y:R.y+.25,z:R.z+Math.sin(A)*w,s:.8+s()*.5}),m.push(y[S%2])}}let b=new ke,_=Qe([Ge(new ce(1,1.05,.35,20).translate(0,.17,0),"#4f9e3a"),Ge(new Je(1.02,.08,6,24).rotateX(Math.PI/2).translate(0,.35,0),"#ffffff")]),v=new en(_,gt("#ffffff",{vertexColors:!0}),d.length);d.forEach((E,R)=>{b.position.set(E.x,E.y,E.z),b.scale.set(E.s,1,E.s),b.updateMatrix(),v.setMatrixAt(R,b.matrix)}),v.receiveShadow=!0,v.computeBoundingSphere(),Jn(v,1.6,void 0,20),r.add(v),e.registerInstanced(v,d);let L=new nn(.24,0);L.computeVertexNormals();let T=new en(L,gt("#ffffff"),M.length);b.scale.setScalar(1),M.forEach((E,R)=>{b.position.set(E.x,E.y,E.z),b.scale.setScalar(E.s),b.updateMatrix(),T.setMatrixAt(R,b.matrix),T.setColorAt(R,new re(m[R]))}),T.computeBoundingSphere(),r.add(T),e.registerInstanced(T,M)}{let d=t.sample(55),M=-1,m=Ve/2+9,p=d.x+d.rx*m*M,b=d.z+d.rz*m*M;e.blocked(p,b,3)&&(p=d.x-d.rx*m*M,b=d.z-d.rz*m*M);let _=new ue,v=on(128,16,(I,N,O)=>{for(let z=0;z<8;z++)I.fillStyle=z%2?"#fff":"#3a9d5d",I.fillRect(z*16,0,16,O)});o.push(v),_.add(xe(new Me(3.2,1.6,1.8,3,.25),gt("#3a9d5d"),{ol:3,olRef:20})).position.y=1.15;let L=xe(new Me(3.4,.15,2,2,.05),gt("#f4e3c0"),{ol:2,olRef:20});L.position.y=2,_.add(L);let T=xe(new Ee(3.8,.15,2.4),gt("#ffffff",{map:v}),{ol:2.5,olRef:20});T.position.y=3.2,_.add(T);for(let I of[-1.6,1.6]){let N=xe(new ce(.06,.06,1.2,6),gt("#ffffff"),{ol:1.5});N.position.set(I,2.6,.9),_.add(N)}for(let I of[-1.1,1.1]){let N=xe(new ce(.4,.4,.2,14).rotateZ(Math.PI/2),gt("#22202c"),{ol:2});N.position.set(I,.4,.95),_.add(N);let O=N.clone();O.position.z=-.95,_.add(O)}let E=xe(new ce(.75,.55,1.3,16),gt("#ffffff"),{ol:3,olRef:20});E.position.y=4,_.add(E);let R=xe(new ce(.82,.82,.22,16),gt("#5a3a24"),{ol:2.5,olRef:20});R.position.y=4.75,_.add(R);let x=xe(new ce(.72,.62,.45,16),gt("#c98a4a"),{ol:2,olRef:20});x.position.y=3.95,_.add(x);let y=Kn(512,128,(I,N,O)=>{I.fillStyle="#1a1420",Ye(I,0,0,N,O,28),I.fill(),I.fillStyle="#ffd23f",Ye(I,6,6,N-12,O-12,22),I.fill(),an(I,"FLAT WHITES",N/2,O/2+4,62,"#ffffff","#1a1420",.2)},o),S=new Ne(new fn(2.8,.7),gt("#ffffff",{map:y}));S.position.set(0,1.4,.92),_.add(S);let A=S.clone();A.rotation.y=Math.PI,A.position.z=-.92,_.add(A);let w=Math.atan2(d.x-p,d.z-b);_.position.set(p,t.heightAt(p,b),b),_.rotation.y=w,r.add(_);for(let I=0;I<5;I++){let N=p+Math.sin(w)*(2.2+I*1.1)+Math.cos(w)*(I%2?.3:-.3),O=b+Math.cos(w)*(2.2+I*1.1);h(N,O,w+Math.PI,.8)}e.anchors.coffeeCart=_}function f(){}function c(){r.traverse(d=>{d.geometry&&d.geometry.dispose()});for(let d of o)d.dispose?.();n.remove(r)}return{group:r,crowd:a,update:f,dispose:c}}var Kr=8.5;function hv(n,t={}){let{course:e,park:i,round:s}=t,r=t.plan||null,o=t.backedBy||{},a=Object.keys(o).filter(q=>(o[q]||[]).length),l=[...s?.runners||[]].sort((q,st)=>(q.lane??0)-(st.lane??0)),h=!1,u=new ra({antialias:!0,powerPreference:"high-performance",preserveDrawingBuffer:!!t.preserveDrawingBuffer});u.setPixelRatio(Math.min(window.devicePixelRatio||1,t.maxPixelRatio??1.5)),u.outputColorSpace=hn,u.toneMapping=ii,u.shadowMap.enabled=!0,u.shadowMap.type=Jc;let g=u.domElement;g.style.cssText="position:absolute;inset:0;width:100%;height:100%;display:block",getComputedStyle(n).position==="static"&&(n.style.position="relative"),n.appendChild(g);let f=new aa;f.fog=new oa(13496063,700,3200);let c=new bn(45,16/9,.3,9e3),d=new Ea(14676223,9420912,1.45);f.add(d);let M=new Ta(16774109,2.3),m=new $(-.45,.82,.38).normalize();M.castShadow=!0,M.shadow.mapSize.set(2048,2048),M.shadow.bias=-4e-4,M.shadow.normalBias=.03,M.shadow.radius=3,f.add(M),f.add(M.target);let p=_u(e,i,r),b=wu(f,p,{course:e,park:i}),_=null,v=null,L=Au(p,b.anchors.crowdZones,5,b.onPath,b.blocked),T=Hu(f,p,b,i);L.push(...T.crowd);let E=new Map;for(let q of L){let st=q.zone??"x";E.has(st)||E.set(st,[]),E.get(st).push(q)}let R=[...E.values()].map(q=>fh(f,q)),x={update:(...q)=>{R.forEach(st=>st.update(...q)),v?.update(...q)},dispose:()=>{R.forEach(q=>q.dispose()),v?.dispose()}},y={};for(let q of l){let st=Pu(q);y[q.id]=st,f.add(st.root)}let S=l.map(q=>q.id),A=Object.fromEntries(l.map(q=>[q.id,q])),w=Fu(n,{runners:l,backedBy:o,course:e,park:i,C:p}),I=null,N=null,O=[],z=null,F=[],X=!1;function it(q){if(r=q||null,p.setPlan(r),h=!!r?.runners?.some(st=>st.diversions&&st.diversions.length),_&&(_.dispose(),_=null),v&&(v.dispose(),v=null),h){let st=r.runners.find(kt=>kt.diversions?.length).id;_=zu(f,p,b,p.diversions[st][0]),b.clearArea(_.contains),R.forEach(kt=>kt.hideWhere(_.contains)),v=fh(f,_.crowd)}if((h||X)&&(b.redrawGround(),w.redrawMap()),X=h,F=[],r){N=Lu(r,p,l),O=ku({plan:r,sim:N,backedIds:a,hasDiversion:h}),z=Du({camera:c,C:p,sim:N,world:b,funfair:_});for(let st of r.events||[])F.push({at:st.broadcastS,evt:{...st,kind:"event"}});for(let st of r.commentary||[])F.push({at:st.broadcastS,evt:{...st,kind:"commentary"}});F.sort((st,kt)=>st.at-kt.at)}else N=null,O=[],z=null}let P="idle",mt=!1,Ot=!1,U=-Kr,Y=0,j=null,G=null,ct=0,at=!1,nt=!1,rt=0,W=0,dt=!1,H=0,Ut=Math.max(.05,Number(t.speed)||1),_t=null,St=0,It=new Set;function tt(){let q=n.clientWidth||window.innerWidth,st=n.clientHeight||window.innerHeight;u.setSize(q,st,!1),c.aspect=q/st,c.updateProjectionMatrix(),hh.uRes.value.set(q*u.getPixelRatio(),st*u.getPixelRatio())}let $t=typeof ResizeObserver<"u"?new ResizeObserver(tt):null;$t?.observe(n),window.addEventListener("resize",tt),tt();let B={};{let q=S.length;S.forEach((st,kt)=>{let Dt=(kt-(q-1)/2)*Math.min(1.25,(Ve-1.6)/Math.max(1,q-1)),Wt=p.sample(0);B[st]={x:Wt.x+Wt.rx*Dt-Wt.tx*1.2,z:Wt.z+Wt.rz*Dt-Wt.tz*1.2,yaw:Math.atan2(Wt.tx,Wt.tz)},B[st].y=p.heightAt(B[st].x,B[st].z)+.16})}function k(q="idle"){for(let st of S){let kt=B[st],Dt=y[st];Dt.root.position.set(kt.x,kt.y,kt.z),Dt.root.rotation.set(0,kt.yaw,0),q&&Dt.set(q),Dt.setPop(null)}}k(),it(r);let yt=(q,st)=>q===1?"jump":q===2||q===3?"fist":q===st?"collapse":"kneel";function Ct(q,st){let kt=N.stateAt(Math.max(0,q)),Dt=S.length;for(let Wt of S){let Jt=kt.byId[Wt],zt=y[Wt];if(q<0)continue;zt.root.position.set(Jt.x,Jt.y,Jt.z);let Ae=Math.atan2(Jt.tx,Jt.tz)+(Jt.finished&&Jt.post>2.4&&!(Jt.place>3&&Jt.post<4)?Math.PI*(Jt.place%2?1:-1)*.92:0),Ue=zt.root.rotation.y,D=Ae-Ue;for(;D>Math.PI;)D-=2*Math.PI;for(;D<-Math.PI;)D+=2*Math.PI;zt.root.rotation.y=Ue+D*Math.min(1,st*10);let et={speed:Jt.vRace,rate:kt.rate,slope:Jt.slope},xt=p.diversions[Wt]?.[0];if(xt&&zt.setProp("floss",Jt.m>xt.toM-20?Math.max(.25,1-(Jt.m-xt.toM)/3500):0),Jt.finished){let pt=Jt.place;Jt.post<1.6?(zt.set("run"),et.speed=3,et.rate=1.2):pt>3&&Jt.post<4?zt.set("trudge"):zt.set("celebrate",yt(pt,Dt)),zt.setPop(null)}else if(Jt.div>.3){zt.set("distracted");let pt=_?.anchors.rides.reduce((ut,Vt)=>!ut||Vt.pos.distanceToSquared(zt.root.position)<ut.pos.distanceToSquared(zt.root.position)?Vt:ut,null);if(pt){let Vt=Math.atan2(pt.pos.x-Jt.x,pt.pos.z-Jt.z)-zt.root.rotation.y;for(;Vt>Math.PI;)Vt-=2*Math.PI;for(;Vt<-Math.PI;)Vt+=2*Math.PI;et.lookYaw=Math.max(-1.3,Math.min(1.3,Vt))}zt.setPop(["!","heart","floss"][Math.floor((Jt.m-Jt.divInfo.fromM)/120)%3])}else{zt.set("run"),zt.setPop(null);let pt=p.geoOf(Jt.m);et.effort=Jt.m>4300?.4+(Jt.m-4300)/700*.5:pt>1700&&pt<2060?.7:.1}zt.update(st,et)}}let Lt=new $,Z=null,ft=-1,ht=()=>{if(ft!==Y||!Z){let q=g.getBoundingClientRect();Z=[...w.root.querySelectorAll(".mr-tower, .mr-map, .mr-top")].map(st=>{let kt=st.getBoundingClientRect();return{left:kt.left-q.left,right:kt.right-q.left,top:kt.top-q.top,bottom:(st.classList.contains("mr-tower")?kt.top+st.querySelectorAll(".mr-row").length*((st.querySelector(".mr-row")?.offsetHeight||40)+6):kt.bottom)-q.top}}),ft=Y}return Z};function Mt(q,st=!0){let kt=g.clientWidth,Dt=g.clientHeight,Wt=[];for(let zt of S){let Ae=y[zt];Lt.set(Ae.root.position.x,Ae.root.position.y+Ae.height+.55,Ae.root.position.z);let Ue=Lt.distanceTo(c.position);Lt.project(c);let D=st&&Lt.z<1&&Lt.z>-1&&Math.abs(Lt.x)<.95&&Lt.y<.82&&Lt.y>-.62&&Ue>9.5&&Ue<150,et=(Lt.x*.5+.5)*kt,xt=(-Lt.y*.5+.5)*Dt;D&&ht().some(pt=>et>pt.left-40&&et<pt.right+40&&xt>pt.top-10&&xt<pt.bottom+40)&&(D=!1),Wt.push({id:zt,x:(Lt.x*.5+.5)*kt,y:(-Lt.y*.5+.5)*Dt,visible:D,pos:q?q.order.indexOf(zt)+1:0,scale:Math.max(.7,Math.min(1.15,30/Ue)),dist:Ue})}Wt.sort((zt,Ae)=>zt.dist-Ae.dist);let Jt=[];for(let zt of Wt){if(!zt.visible)continue;let Ae=(ir(A[zt.id]).length*12+60)*zt.scale;for(let Ue=0;Ue<8;Ue++){let D=Jt.find(et=>Math.abs(et.x-zt.x)<(et.tw+Ae)/2&&Math.abs(et.y-zt.y)<30*Math.max(et.scale,zt.scale));if(!D)break;zt.y=D.y-31*Math.max(D.scale,zt.scale)}zt.tw=Ae,Jt.push(zt)}return q?{raceS:q.raceS,leaderM:q.leader.m,tags:Wt,order:q.order.map(zt=>({id:zt,gapText:q.byId[zt].gapText,finished:q.byId[zt].finished})),dots:q.order.map((zt,Ae)=>({x:q.byId[zt].x,z:q.byId[zt].z,colour:A[zt].colour.primary,lead:Ae===0,focus:z?.shot?.ids?.includes(zt)}))}:P!=="race"?{tags:Wt}:{tags:Wt,raceS:0,leaderM:0,order:S.map(zt=>({id:zt,gapText:"",finished:!1,posHtml:`<small>L</small>${A[zt].lane??"\u2014"}`})),dots:S.map(zt=>({x:B[zt].x,z:B[zt].z,colour:A[zt].colour.primary}))}}function wt(q,st){let kt=Math.max(30,Math.min(220,st)),Dt=M.shadow.camera;Dt.right!==kt&&(Dt.left=-kt,Dt.right=kt,Dt.top=kt,Dt.bottom=-kt,Dt.near=1,Dt.far=900,Dt.updateProjectionMatrix());let Wt=2*kt/M.shadow.mapSize.x,Jt=Math.round(q.x/Wt)*Wt,zt=Math.round(q.z/Wt)*Wt;M.target.position.set(Jt,q.y,zt),M.position.set(Jt+m.x*400,q.y+m.y*400,zt+m.z*400)}let Rt=["wave","flex","point","stretch","spin","bow"];function Pt(q,st){let kt=[...q.personality||q.id].reduce((Dt,Wt)=>Dt+Wt.charCodeAt(0),st);return Rt[kt%Rt.length]}function Xt(q,st={}){P="intro",w.setDim(!0),w.clearBanner(),w.photo(!1),w.results(null),V(),w.market(!1),_t=null,mt=!1,g.style.filter="",k("idle");let kt=st.perRunnerS??t.introPerRunnerS??4.2,Dt=st.flyoverS??7;return G={t:0,idx:-1,per:kt,fly:Dt,onDone:q,waiting:!1,segStart:0,minSeg:2.5,done:!1,group:!1},{flyoverS:Dt,perRunnerS:kt,runners:S.slice()}}function jt(q){let st=G;if(!st)return;st.t+=q;let kt=B;if(st.idx===-1){!st.title&&st.t>.8&&(st.title=!0,qt(!0));let et=Math.min(1,st.t/st.fly),xt=ph(et),pt=p.sample(0),ut=new $(170,0,-40),Vt=2.2-xt*2,Kt=520-xt*470,ee=new $(ut.x+Math.cos(Vt)*Kt,190-xt*170,ut.z+Math.sin(Vt)*Kt),oe=new $(pt.x+pt.tx*22+pt.rx*10,pt.y+9,pt.z+pt.tz*22+pt.rz*10);ee.lerp(oe,xt*xt);let fe=ut.clone().setY(15).lerp(new $(pt.x,pt.y+1,pt.z),Math.min(1,xt*1.2));c.position.copy(ee),c.lookAt(fe),Et(50),et>=1&&de();return}if(st.group){let et=p.sample(0),xt=(st.t-st.segStart)/3;if(c.position.set(et.x+et.tx*(9+xt*2)+et.rx*2,et.y+2.2+xt*.6,et.z+et.tz*(9+xt*2)+et.rz*2),c.lookAt(et.x,et.y+1.3,et.z),Et(46),xt>=1&&!st.done){st.done=!0,w.introCard(null);let pt=st.onDone;G=null,P="idle",pt?.()}return}let Dt=S[st.idx],Wt=kt[Dt],Jt=st.t-st.segStart,zt=new $(Math.sin(Wt.yaw),0,Math.cos(Wt.yaw)),Ae=new $(-zt.z,0,zt.x),Ue=y[Dt].height,D=3.2+Ue*.6-Math.min(.6,Jt*.12);c.position.set(Wt.x+zt.x*D+Ae.x*.9,Wt.y+Ue*.62,Wt.z+zt.z*D+Ae.z*.9),c.lookAt(Wt.x-Ae.x*1.25,Wt.y+Ue*.55,Wt.z-Ae.z*1.25),Et(40),!st.waiting&&Jt>=st.per&&de(),st.waiting==="released"&&Jt>=st.minSeg&&de()}function qt(q){let st=s||{};w.titleCard(q,{title:st.title||"MARKRUN",kicker:st.number?`ROUND ${st.number}`:"LIVE FROM FINSBURY PARK",theme:st.theme?typeof st.theme=="string"?st.theme:st.theme.label||st.theme.name||"":""})}function de(){let q=G;q.idx===-1&&qt(!1),q.idx++,q.segStart=q.t;for(let Wt of S)y[Wt].set("idle");if(q.idx>=S.length){q.group=!0;for(let Wt of S)y[Wt].set("pose","point");w.introCard(null),setTimeout(()=>{},0);for(let Wt of S)y[Wt].set("wave");return}let st=S[q.idx];y[st].set(Pt(A[st],q.idx)==="wave"?"wave":"pose",Pt(A[st],q.idx)),t.introCards!==!1&&w.introCard(A[st]),q.waiting=!1;let Dt=t.onIntroRunner?.(st,q.idx);Dt&&typeof Dt.then=="function"&&(q.waiting=!0,Dt.then(()=>{G===q&&(q.waiting="released")},()=>{G===q&&(q.waiting="released")}))}function se(q,st){if(!N)throw new Error("createRaceView: playRace needs a plan (pass opts.plan or call loadPlan(plan) first)");P="race",w.setDim(!1),w.results(null),V(),G=null,w.introCard(null),w.titleCard(!1),w.market(!1),_t=null,mt=!1,g.style.filter="",U=-Kr,rt=0,W=0,ct=0,at=!1,nt=!1,It.clear(),dt=!!t.skipRaceTitle,w.setDimTop(!1),j={onEvent:q,onDone:st},k("idle"),z.reset()}let be=[[-3,"3"],[-2,"2"],[-1,"1"],[0,"GO!"]];function lt(q){let st=kt=>A[kt]?.nickname||kt;switch(q.type){case"lead_change":return["LEAD CHANGE!",`${st(q.to)} hits the front`,"#ff3d8b"];case"overtake":return!a.includes(q.by)&&!a.includes(q.on)&&N.stateAt(q.broadcastS).order.indexOf(q.by)>1?null:["OVERTAKE!",`${st(q.by)} passes ${st(q.on)}`,"#2e6fe0"];case"hill":return[q.lap===1?"THE HILL!":"THE HILL AGAIN!","Legs of jelly incoming","#3aa845"];case"lap":return["LAP 2 OF 2","One more time round!","#2e6fe0"];case"final_stretch":return["FINAL STRETCH!","Here comes the finish","#ff8a1f"];case"diversion":return It.has("div")?null:(It.add("div"),["DISTRACTED!",`${st(q.who)} has spotted the funfair`,"#b04bff"]);case"finish":return q.place===1&&!N.photoFinish?["WINNER!",st(q.who),"#ffb000"]:null;case"breakaway":return["BREAKAWAY!",`${st(q.who)} makes a break`,"#ff3d8b"];default:return null}}function Yt(q){if(ct>0){if(ct-=q,ct<=0){w.photo(!1),g.style.filter="",b.anchors.finishArch.visible=!0,z.reset();let kt=N.finishOrder[0];w.showBanner("WINNER!",A[kt]?.nickname||kt,"#ffb000",2.6)}return}let st=U;for(U+=q,U<-4.2&&!dt&&(dt=!0,qt(!0),w.setDimTop(!0)),U>=-3.6&&dt===!0&&(dt="done",qt(!1),w.setDimTop(!1));W<be.length&&U>=be[W][0];){let[kt,Dt]=be[W++];if(w.countdown(Dt),j?.onEvent?.({kind:"countdown",n:Dt==="GO!"?0:Number(Dt),text:Dt,broadcastS:kt}),kt===-3)for(let Wt of S)y[Wt].set("ready")}for(;rt<F.length&&U>=F[rt].at;){let kt=F[rt++].evt;try{j?.onEvent?.(kt)}catch(Dt){console.error(Dt)}if(kt.kind==="event"){let Dt=lt(kt);Dt&&w.showBanner(...Dt)}}if(N.photoFinish&&!at&&U>=N.firstFinishB){at=!0,U=N.firstFinishB,ct=t.photoFreezeS??2.8;{let[kt,Dt]=N.finishOrder;w.photo(!0,`${ir(A[kt])} or ${ir(A[Dt])}? Checking the camera...`)}g.style.filter="grayscale(0.55) sepia(0.35) contrast(1.12)",j?.onEvent?.({kind:"photo_finish",broadcastS:U,ids:N.finishOrder.slice(0,2)})}!nt&&U>=N.lastFinishB+3.5&&(nt=!0,j?.onDone?.())}function Tt(q,st=1.2){if(!N)throw new Error("createRaceView: seek in a race needs a plan");q=Math.max(-Kr,Math.min(N.lastFinishB+3.5,Number(q)||0)),P="race",G=null,V(),j=j||{},w.setDim(!1),w.introCard(null),w.results(null),w.photo(!1),w.market(!1),w.clearBanner(),w.titleCard(!1),w.setDimTop(!1),g.style.filter="",b.anchors.finishArch.visible=!0,_t=null,dt=q>=-3.6?"done":q<-4.2?!1:"done",z.reset();let kt=Math.round(st*30);for(let Dt=kt;Dt>=0;Dt--){if(U=q-Dt/30,U<-3)for(let Wt of S)y[Wt].set("idle");else if(U<0)for(let Wt of S)y[Wt].set("ready");if(Dt>0)if(z.update(U,1/30,O),U>=0)Ct(U,1/30);else for(let Wt of S)y[Wt].update(1/30,{})}U=q,rt=F.findIndex(Dt=>Dt.at>U),rt<0&&(rt=F.length),W=be.findIndex(Dt=>Dt[0]>U),W<0&&(W=be.length),at=U>=N.firstFinishB,nt=U>=N.lastFinishB+3.5,ct=0}function Nt(q){let st=G;if(!st)return;q=Math.max(0,Number(q)||0);let kt=S.length;if(q<st.fly){st.t=q;return}qt(!1),st.title=!0;let Dt=Math.min(kt,Math.floor((q-st.fly)/st.per));st.idx=Dt-1,st.t=q,de(),st.segStart=st.fly+Dt*st.per}function C(q){return P==="intro"?Nt(q):Tt(q)}function V(){I&&(I.dispose(),I=null)}function J(q,{card:st}={}){P="podium",w.setDim(!0),w.clearBanner(),G=null,w.titleCard(!1),w.market(!1),_t=null,mt=!1,g.style.filter="",w.photo(!1),V();let kt=q?.finishOrder?.length?[...q.finishOrder].sort((Dt,Wt)=>Dt.place-Wt.place):(N?.finishOrder||S).map((Dt,Wt)=>({runnerId:Dt,place:Wt+1,officialS:N?.byId[Dt].officialS??0,timeText:N?ka(N.byId[Dt].officialS):""}));I=Bu(f,p,b,y,kt,{camera:c,offsetX:(st??t.podiumCard)!==!1?3.2:0}),(st??t.podiumCard)!==!1&&w.results(kt.map(Dt=>({place:Dt.place,nickname:A[Dt.runnerId]?.nickname||Dt.runnerId,colour:A[Dt.runnerId]?.colour.primary||"#888",timeText:Dt.timeText||ka(Dt.officialS)})))}let ot=performance.now(),vt=0,K={frames:0,acc:0,fps:0};function Et(q){Math.abs(c.fov-q)>.01&&(c.fov=q,c.updateProjectionMatrix())}function Gt(q,st=!1){Y+=q;let kt=null;mt||(P==="intro"&&jt(q),P==="race"&&Yt(q));let Dt=mt?0:q;if(P==="race"){if(ct>0){let zt=b.anchors.finish;b.anchors.finishArch.visible=!1,c.position.set(zt.x+zt.rx*9-zt.tx*.6,zt.y+6.4,zt.z+zt.rz*9-zt.tz*.6),c.lookAt(zt.x-zt.rx*.6-zt.tx*.6,zt.y+.8,zt.z-zt.rz*.6-zt.tz*.6),Et(42),c.updateMatrixWorld();let Ae=new $(zt.x+zt.rx*3,zt.y+.05,zt.z+zt.rz*3).project(c),Ue=new $(zt.x-zt.rx*3,zt.y+.05,zt.z-zt.rz*3).project(c);w.photoLine([(Ae.x*.5+.5)*g.clientWidth,(-Ae.y*.5+.5)*g.clientHeight],[(Ue.x*.5+.5)*g.clientWidth,(-Ue.y*.5+.5)*g.clientHeight])}else if(mt&&_t!=null){_t+=q;let zt=N.stateAt(Math.max(0,U)),Ae=zt.byId[zt.order[0]],Ue=zt.order.slice(0,3).map(ee=>zt.byId[ee]).filter(ee=>Math.abs(ee.m-Ae.m)<25),D=new $;for(let ee of Ue)D.add(new $(ee.x,ee.y,ee.z));D.divideScalar(Math.max(1,Ue.length)),St||(St=Math.atan2(c.position.x-D.x,c.position.z-D.z));let et=St+_t*.12,xt=10+Math.min(25,Ae.m-Ue.at(-1).m)*.4,pt=Math.min(1,_t/1.2),ut=pt*pt*(3-2*pt),Vt=D.x+Math.sin(et)*xt,Kt=D.z+Math.cos(et)*xt;c.position.set(Vt,Math.max(D.y+3+ut*2,p.heightAt(Vt,Kt)+2.5),Kt),c.lookAt(D.x,D.y+2.3,D.z),Et(44)}else z.update(U,Dt,O);if(kt=U>=0?N.stateAt(U):null,U<0)for(let zt of S)y[zt].update(Dt,{});else Ct(U,ct>0?0:Dt);let Jt=z.shot?.type;wt(z.cam.look,Jt==="drone"||Jt==="blimp"||Jt==="heli"?160:45)}else if(P==="podium"&&I){I.update(Dt,Y);for(let Jt of S)y[Jt].update(Dt,{});wt(I.center,40)}else{for(let Jt of S)y[Jt].update(Dt,{});if(P==="idle"){let Jt=p.sample(0),zt=Y*.12;c.position.set(Jt.x+Math.sin(zt)*14,Jt.y+4.5,Jt.z+Math.cos(zt)*14),c.lookAt(Jt.x,Jt.y+1.2,Jt.z),Et(45)}wt(new $(B[S[0]]?.x??0,0,B[S[0]]?.z??0),P==="intro"&&G?.idx===-1?160:40)}if(H+=q,st)return;b.update(Y),_?.update(Y);let Wt=S.map(Jt=>y[Jt].root.position);x.update(Y,c.position,Wt,P==="podium"?.9:null),w.update(H,P==="race"?Mt(kt,U>-1&&_t==null):Mt(null,!1)),H=0,u.render(f,c)}let Ft=2;function Q(q){if(Ot)return;vt=requestAnimationFrame(Q);let st=Math.max(0,(q-ot)/1e3);ot=q,K.frames++,K.acc+=st,K.acc>1&&(K.fps=K.frames/K.acc,K.frames=0,K.acc=0),bt(Math.min(Ft,st)*Ut)}function bt(q){let st=q;if(st<=1e-6){Gt(0);return}for(;st>1e-6;){let kt=Math.min(st,.1);st-=kt,Gt(kt,st>1e-6)}}t.manualLoop||(vt=requestAnimationFrame(Q));function At(){Ot=!0,cancelAnimationFrame(vt),$t?.disconnect(),window.removeEventListener("resize",tt),V();for(let q of S)f.remove(y[q].root),y[q].dispose();x.dispose(),_?.dispose(),T.dispose(),b.dispose(),w.dispose(),f.traverse(q=>{q.geometry&&q.geometry.dispose()}),Iu(),bu(),u.dispose(),u.forceContextLoss?.(),g.remove()}let Qt={seek(q,st=1.2){Tt(q,st),mt=!0,Gt(0)},introAt(q,st=1.5){if(Xt(()=>{},{}),mt=!1,q<0){G.t=st,jt(0),Gt(0),mt=!0;return}for(G.t=G.fly,jt(0);G&&G.idx<q;)G.t=G.segStart+G.per+.01,jt(0);for(let kt=0;kt<st*30;kt++){jt(1/30);for(let Dt of S)y[Dt].update(1/30,{})}mt=!0,Gt(0)},podiumAt(q=3){w.introCard(null),J(null);for(let st=0;st<q*30;st++){I.update(1/30,st/30);for(let kt of S)y[kt].update(1/30,{})}mt=!0,Gt(0)},photoAt(){this.seek(N.firstFinishB-.05),mt=!1,at=!1;for(let q=0;q<3;q++)Gt(1/30);mt=!0,Gt(0)},render(){Gt(0)},unpause(){mt=!1},lookFrom(q,st,kt,Dt,Wt,Jt,zt=45){P="debugcam",c.position.set(q,st,kt),c.lookAt(Dt,Wt,Jt),Et(zt),w.setDim(!0),u.render(f,c)},step(q,st=!0){Gt(q,!st)},get mode(){return P},get b(){return U},get shots(){return O},get sim(){return N},C:p,get director(){return z},renderer:u,scene:f,camera:c,info:()=>u.info,fps:()=>K.fps};return{playIntro:Xt,playRace:se,showPodium:J,setPaused(q,{market:st=!0,marketText:kt}={}){q=!!q,q!==mt&&(mt=q,P==="race"&&ct<=0&&t.marketOnPause!==!1&&st&&(q?(_t=0,St=0,w.market(!0,kt??t.marketText??"Place your halfway bets!"),g.style.filter="saturate(1.2) contrast(1.06)"):(_t=null,w.market(!1),g.style.filter="",z.reset())))},setSpeed(q){Ut=Math.max(.05,Number(q)||1)},seek:C,loadPlan(q){if(P==="race")throw new Error("createRaceView: loadPlan during a race");it(q)},dispose:At,hudRoot:w.root,get broadcastTime(){return P==="intro"?G?.t??0:U},get durationS(){return N?Kr+N.lastFinishB+3.5:0},preRollS:Kr,_debug:Qt}}function $u(n){let e=Array.from({length:201},(r,o)=>Math.round(o*25/5e3*1500*1e3)/1e3),i=(n?.runners||[]).map(r=>({id:r.id,officialS:1500,progress:e,pacingSource:"intro"})),s=Ph(n?.roundId||"intro",i);return s.events=[],s.commentary=[],s}var so=new URLSearchParams(location.search),ar=Math.max(.25,Number(so.get("speed"))||1),xh=so.get("race")==="2d",Bn=n=>Math.round(n/ar);window.__markrun={events:[],speed:ar};var zn=n=>{window.__markrun.events.push({at:Date.now(),...n}),window.__markrun.events.length>500&&window.__markrun.events.shift()},rr=ye("#stage"),wi=ye("#screen"),Qr=ye("#hud-bottom"),to=ye("#subs"),fv=ye("#reactions"),jr=ye("#next-hint"),sr=ye("#race-layer"),Se=null,or=null,no=so.has("autostart"),Gi=so.has("mute"),he=bh(),Si=Ch({onLine:Mv,onIdle:()=>{he.duck(!1)}});function Yu(){let n=Math.min(window.innerWidth/1920,window.innerHeight/1080);rr.style.transform=`translate(-50%, -50%) scale(${n})`,rr.style.transformOrigin="center center",rr.style.left="50%",rr.style.top="50%"}window.addEventListener("resize",Yu);Yu();var yh=null,pv=Promise.all([fetch("/data/course.json").then(n=>n.json()),fetch("/data/park.json").then(n=>n.json()).catch(()=>null)]).then(([n,t])=>(yh={course:n,park:t},yh)),Na=so.get("key");try{Na&&localStorage.setItem("markrun.tvkey",Na)}catch{}var mv=()=>{try{return Na||localStorage.getItem("markrun.tvkey")}catch{return Na}},Fa=Mh({role:"tv",getKey:mv,onWelcome:n=>{if(n.key)try{localStorage.setItem("markrun.tvkey",n.key)}catch{}ye("#tvauth")?.remove()},onStatus:n=>{ye("#conn").classList.toggle("hidden",n==="open"||n==="connecting")},onState:n=>gv(n),onMessage:n=>{n.t==="react"?Sv(n.playerId,n.emoji):n.t==="refresh"?Qu(n.step,n.msg):n.t==="refreshDone"?Cv(n.ok,n.msg):n.t==="claimRequest"?Av(n):n.t==="claimClosed"?ye("#tvmodal")?.dataset.req===n.reqId&&qi():n.t==="error"&&n.code==="tv_auth"?Tv(n.msg):n.t==="error"&&Xi(n.msg,"red")}}),xn=n=>Fa.send(n);function lr(){if(!(no&&he.ready())){no=!0,he.unlock(),ye("#gesture").classList.add("gone");try{window.speechSynthesis?.getVoices()}catch{}za(),Se&&Ju(Se,!0)}}no&&ye("#gesture").classList.add("gone");ye("#gesture").addEventListener("click",lr);window.addEventListener("pointerdown",()=>{he.ready()||lr()});function za(){let n=Se?.settings||{};he.setVolume(n.volume??.8),he.setMuted(Gi),he.setMusicEnabled(n.music!==!1),Si.setEnabled(!Gi&&n.voice!==!1&&ar<=1.5),Si.setVolume(Math.min(1,(n.volume??.8)+.1)),ye("#btn-mute").textContent=Gi?"\u{1F507}":"\u{1F50A}"}ye("#btn-mute").addEventListener("click",n=>{n.stopPropagation(),Gi=!Gi,za()});ye("#btn-fs").addEventListener("click",n=>{n.stopPropagation(),Zu()});function Zu(){document.fullscreenElement?document.exitFullscreen?.():document.documentElement.requestFullscreen?.().catch(()=>{})}var Vu;window.addEventListener("mousemove",()=>{document.body.classList.remove("hide-cursor"),clearTimeout(Vu),Vu=setTimeout(()=>document.body.classList.add("hide-cursor"),3e3)});window.addEventListener("keydown",n=>{if(n.target.closest?.("input, textarea"))return;if(!no){lr();return}if(Ev()){if(n.key==="Escape"){let e=ye("#tvmodal [data-cancel]:not([disabled])");e?e.click():qi()}else n.key==="Enter"&&ye("#tvmodal [data-ok]")?.click();return}he.ready()||he.unlock();let t=n.key;if(t==="m"||t==="M"){Gi=!Gi,za(),Xi(Gi?"Muted":"Sound on");return}if(t==="f"||t==="F"){Zu();return}if(t==="l"||t==="L"){Se?.phase==="BETTING"&&!Se.revealed&&(xn({t:"forceLock"}),Xi("Locking everyone in!"));return}(t===" "||t==="Enter"||t==="ArrowRight"||t==="n"||t==="N")&&(n.preventDefault(),vh())});function vh(){if(Se){if(Se.phase==="LOBBY"&&!Se.players.length){Xi("Scan the QR code to join first!","red");return}if(Se.phase==="BETTING"&&!Se.revealed){Xi("Waiting for everyone to lock in (press L to force it)");return}xn({t:"advance",from:Se.phase,stage:Se.phase==="RESULTS"?Se.resultsStage:void 0})}}var Gu=new Map;function gv(n){let t=Se;Se=n,za();let e=new Map(n.players.map(s=>[s.id,s]));if(t)for(let s of n.players){let r=Gu.get(s.id);r?!r.locked&&s.locked&&n.phase==="BETTING"?(he.play("lock"),Si.say(bv(s.name),Math.random()<.5?"jeff":"pam",{priority:1})):r.connected&&!s.connected&&setTimeout(()=>{let o=Se?.players.find(a=>a.id===s.id);o&&!o.connected&&Xi(`${s.name}'s phone dropped out \u2014 it'll reconnect`,"red")},5e3):(he.play("join"),n.phase==="LOBBY"&&Si.say(`${s.name} has entered the paddock!`,"pam",{priority:1}))}Gu=e;let i=yv(n);!or||or.key!==i?xv(i,n,t):or.update?.(n,t),vv(n),_v(n),Ju(n)}function yv(n){let t=n.round?.roundId||"";return n.phase==="BETTING"?`BETTING|${t}|${n.revealed?"reveal":"bet"}`:["INTRO","RACE","RESULTS","SCOREBOARD"].includes(n.phase)?`${n.phase}|${t}`:`${n.phase}|${n.gameNumber}`}function xv(n,t,e){try{or?.destroy?.()}catch(o){console.warn(o)}wi.innerHTML="",Si.clear(),to.innerHTML="";let i=t.phase;document.body.className=document.body.className.replace(/\bphase-\w+/g,"").trim()+` phase-${i}`,document.body.classList.toggle("revealed",!!t.revealed),document.body.classList.toggle("racing",i==="RACE"||i==="INTRO"&&!!Oe),zn({type:"screen",key:n});let s={LOBBY:wv,INTRO:Iv,BETTING:t.revealed?Ov:Nv,RACE:Fv,RESULTS:zv,SCOREBOARD:Wv,FINALE:Xv}[i];if(or=s?s(t,e):{},or.key=n,i==="BETTING"&&Oe&&Ha===t.round?.roundId&&tf(Oe)){try{Oe.setPaused(!0)}catch{}document.body.classList.remove("racing")}else i!=="RACE"&&i!=="RESULTS"&&i!=="INTRO"&&eo()}var Wu=null;function Ju(n,t=!1){if(!no)return;let e={LOBBY:"lobby",BETTING:n.revealed?null:"betting",SCOREBOARD:"lobby",RESULTS:null,INTRO:null,RACE:null,FINALE:null}[n.phase];e===Wu&&!t||(Wu=e,e?he.startMusic(e):he.stopMusic(1.2))}function Ku(n){let t=[...n].sort((i,s)=>s.bankroll-i.bankroll),e=new Map;return t.forEach((i,s)=>e.set(i.id,s>0&&i.bankroll===t[s-1].bankroll?e.get(t[s-1].id):s+1)),e}function vv(n){let t=["INTRO","BETTING","RACE"].includes(n.phase)&&!(n.phase==="BETTING"&&n.revealed);if(Qr.classList.toggle("hidden",!t),document.body.classList.toggle("no-hud",!t),!t){Qr.innerHTML="";return}let e=Ku(n.players),i=n.phase==="RACE"?n.bets||{}:{};Qr.innerHTML=n.players.map(s=>{let r="";s.connected?n.phase==="BETTING"&&(r=s.locked?'<span class="pp-status locked">\u{1F512} LOCKED IN</span>':'<span class="pp-status think">\u{1F914} Thinking\u2026</span>'):r='<span class="pp-status off">\u{1F4F5} Offline</span>';let o=(i[s.id]||[]).map(a=>ln(n.round,oo(a))).filter(Boolean).map(a=>`<i title="${Ht(a.nickname)}" style="background:${Ht(a.colour.primary)}"></i>`).join("");return`<div class="pp ${s.connected?"":"disconnected"}" data-pid="${s.id}">
      ${n.history?.length?Zi(e.get(s.id),"pp-ord"):""}
      ${vn(s.avatar,70)}
      <div><div class="pp-name">${Ht(s.name)}</div><div class="pp-bank"><span class="coin"></span> ${mn(s.bankroll)}</div>${o?`<div class="pp-backs">${o}</div>`:""}</div>
      ${r}
    </div>`}).join("")}function _v(n){let t={INTRO:"Skip intros \u23ED",RACE:"Skip race \u23ED",RESULTS:"Next \u25B6",SCOREBOARD:n.roundNumber>=n.roundsPerGame?"Final results \u25B6":"Next round \u25B6",FINALE:"Play again \u21BB",BETTING:n.revealed?"Start race \u25B6":null}[n.phase];if(!t){jr.innerHTML="";return}jr.dataset.label!==t&&(jr.dataset.label=t,jr.innerHTML=`<button class="btn ${n.phase==="RACE"||n.phase==="INTRO"?"ghost small":"white"}">${t} <span style="opacity:.6;font-size:.7em">SPACE</span></button>`,jr.firstElementChild.addEventListener("click",e=>{e.stopPropagation(),lr(),vh()}))}function Xi(n,t=""){let e=Ke(`<div class="t panel ${t==="red"?"red":"yellow"} anim-pop">${Ht(n)}</div>`),i=ye("#toast");i.innerHTML="",i.appendChild(e),setTimeout(()=>{e.parentNode&&e.remove()},3200)}function Mv(n){he.duck(!0);let t=Ke(`<div class="sub"><span class="who ${n.speaker==="pam"?"pam":"jeff"}">${n.speaker==="pam"?"PAM":"JEFF"}</span><span>${Ht(n.text)}</span></div>`);to.appendChild(t);let e=["RESULTS","SCOREBOARD","FINALE","LOBBY"].includes(Se?.phase)?1:2;for(;to.children.length>e;)to.firstElementChild.remove();let i=Math.max(3e3,n.text.split(/\s+/).length*420+1500);setTimeout(()=>{t.classList.add("out"),setTimeout(()=>t.remove(),450)},i),zn({type:"line",text:n.text,speaker:n.speaker})}var ze=(n,t="jeff",e=2)=>Si.say(n,t,{priority:e});function bv(n){let t=[`${n} has locked in. No take-backs!`,`And ${n}'s money is down!`,`${n} has committed. Bold. Possibly foolish.`,`Bets are in from ${n}!`];return t[Math.floor(Math.random()*t.length)]}function Sv(n,t){let e=Se?.players.find(o=>o.id===n),i=Qr.querySelector(`[data-pid="${n}"]`),s;if(i&&!Qr.classList.contains("hidden")){let o=i.getBoundingClientRect(),a=rr.getBoundingClientRect(),l=a.width/1920;s=(o.left+o.width/2-a.left)/l+(Math.random()-.5)*160}else s=1920*(((Se?.players.findIndex(a=>a.id===n)??0)+1)/((Se?.players.length||1)+1))+(Math.random()-.5)*220;let r=Ke(`<div class="react" style="left:${Math.round(s-60)}px;--rot:${Math.round((Math.random()-.5)*40)}deg"><span class="e">${Ht(t)}</span>${e?vn(e.avatar,46):""}</div>`);fv.appendChild(r),he.play("pop"),setTimeout(()=>r.remove(),3300)}function En(n,t){return new Promise(e=>{let i=setTimeout(e,Bn(n));t?.timers.push(i)})}function Ba(){return{cancelled:!1,timers:[]}}function io(n){n.cancelled=!0,n.timers.forEach(t=>{clearTimeout(t),clearInterval(t)})}async function jn(n,t,e=12e3){let i=Date.now();if(await En(t,n),!(ar>1.5))for(;!n.cancelled&&Si.busy&&Date.now()-i<e;)await new Promise(s=>setTimeout(s,150))}var bi=(n,t=120)=>Rh(n,{size:t,idSuffix:Math.random().toString(36).slice(2,6)});function ju(){return`<div class="clouds">${[0,1,2,3,4].map(n=>`<div class="cloud" style="top:${40+n*70}px;width:${180+n%3*70}px;height:${50+n%2*18}px;animation-duration:${70+n*17}s;animation-delay:-${n*19}s"></div>`).join("")}</div>
  <svg class="hills" viewBox="0 0 1920 260" preserveAspectRatio="none"><path d="M0 150 Q 240 40 520 120 T 1040 110 T 1500 90 T 1920 130 V260 H0Z" fill="#2ec27e" stroke="#14183c" stroke-width="6"/><path d="M0 200 Q 300 140 640 190 T 1280 180 T 1920 190 V260 H0Z" fill="#169c5b" stroke="#14183c" stroke-width="6"/></svg>`}var mh=[100,250,500,1e3,2e3,5e3],gh=[0,60,90,120,180];function wv(n){let t=Ke(`<div class="lobby">
    ${ju()}
    <div class="logo"><div class="word outlined">MARK<span class="r">RUN</span></div><br><div class="ribbon"><span>THE FINSBURY PARK FORM GUIDE</span></div></div>
    <div class="tagline">Real parkruns. Real Mark. Fake money. \u{1F377}</div>
    <div class="qr-card panel white"><div class="qr"></div><div class="scan">\u{1F4F1} SCAN TO JOIN</div><div class="url"></div></div>
    <div class="slots"></div>
    <div class="settings panel cream"></div>
    <div class="start-wrap"></div>
  </div>`);wi.appendChild(t),ye(".qr",t).innerHTML=n.qrSvg||"",ye(".url",t).textContent=(n.joinUrl||"").replace(/^https?:\/\//,""),ze(n.players.length?"Welcome back to MARKRUN!":"Welcome to MARKRUN! Grab your phones and scan the code.","jeff",1);let e=(r,o,a,l)=>`<div class="set" data-k="${o}"><div class="lbl">${r}</div><div class="ctl-row">${l.replace("{val}",`<span class="val">${a}</span>`)}</div></div>`;function i(r){let o=[],a=Math.max(2,r.players.length);for(let g=0;g<a;g++){let f=r.players[g];if(f){let c=f.connected?f.ready?'<span class="tag" style="background:var(--grass);color:#fff">\u2713 READY</span>':'<span class="tag">joined</span>':'<span class="tag" style="background:var(--tomato);color:#fff">\u{1F4F5} offline</span>';o.push(`<div class="slot panel slant ${s.has(f.id)?"":"joined"}" style="background:${Ht(f.avatar.colour)}"><div class="unslant" style="display:flex;align-items:center;gap:24px;width:100%">${vn(f.avatar,92)}<div><div class="sname">${Ht(f.name)}${r.settings.runnerPlayerId===f.id?' <span class="tag markt">\u{1F3C3} THE REAL MARK</span>':""}</div><div class="ssub">${mn(f.bankroll)} to gamble${r.settings.runnerPlayerId&&r.settings.runnerPlayerId!==f.id?" \xB7 gets an extra \u{1F525} hot tip":""}</div></div><span class="slot-badge">${c}</span><button class="btn small white kick" data-kick="${f.id}" title="Remove player">\u2715</button></div></div>`)}else o.push(`<div class="slot panel slant empty"><div class="unslant" style="display:flex;align-items:center;gap:24px"><div class="ghost-av">?</div><div><div class="sname">Player ${g+1}</div><div class="ssub">Scan the code to take this seat</div></div></div></div>`)}s=new Set(r.players.map(g=>g.id)),ye(".slots",t).innerHTML=o.join(""),ye(".slots",t).classList.toggle("many",a>2);let l=r.settings,h=Math.round((l.volume??.8)*10);ye(".settings",t).innerHTML=[e("Starting pot","startingBankroll",mn(l.startingBankroll),'<button class="btn small white" data-d="-1">\u2212</button>{val}<button class="btn small white" data-d="1">+</button>'),e("Rounds","roundsPerGame",l.roundsPerGame,'<button class="btn small white" data-d="-1">\u2212</button>{val}<button class="btn small white" data-d="1">+</button>'),e("Bet timer","betTimer",l.betTimer?`${l.betTimer}s`:"Off",'<button class="btn small white" data-d="-1">\u2212</button>{val}<button class="btn small white" data-d="1">+</button>'),e("Drinking","drinkingMode","",`<button class="btn small toggle ${l.drinkingMode?"on":"off"}" data-toggle>${l.drinkingMode?"\u{1F37A} ON":"OFF"}</button>`),e("Voice","voice","",`<button class="btn small toggle ${l.voice?"on":"off"}" data-toggle>${l.voice?"\u{1F399}\uFE0F ON":"OFF"}</button>`),e("Music","music","",`<button class="btn small toggle ${l.music?"on":"off"}" data-toggle>${l.music?"\u{1F3B5} ON":"OFF"}</button>`),e("Volume","volume",`${h*10}%`,'<button class="btn small white" data-d="-1">\u2212</button>{val}<button class="btn small white" data-d="1">+</button>')].join("");let u=r.players.length&&r.players.every(g=>g.ready);ye(".start-wrap",t).innerHTML=`<button class="btn green ${r.players.length?"pulse":""}" data-start ${r.players.length?"":"disabled"}>${r.players.length?r.players.length===1?"START SOLO \u25B6":"LET'S RACE \u25B6":"Waiting for players\u2026"}</button>
      <div class="hint">${r.refreshing?"\u23F3 Refreshing historical data\u2026":r.players.length?u?"Everyone is ready!":"Press SPACE \u2014 or everyone taps READY on their phone":"Up to 4 players \xB7 best with 2"}</div>
      <button class="btn small white refresh-btn" data-refresh ${r.refreshing?"disabled":""}>\u27F3 Refresh Historical Data</button>`}let s=new Set(n.players.map(r=>r.id));return i(n),t.addEventListener("click",r=>{lr();let o=r.target.closest("button");if(!o)return;if(he.play("tick"),o.dataset.start!==void 0)return vh();if(o.dataset.refresh!==void 0)return Rv();if(o.dataset.kick)return xn({t:"kick",playerId:o.dataset.kick});let a=o.closest("[data-k]")?.dataset.k;if(!a)return;let l=Se.settings;if(o.dataset.toggle!==void 0)return xn({t:"settings",settings:{[a]:!l[a]}});let h=Number(o.dataset.d),u;if(a==="startingBankroll"){let g=mh.indexOf(l[a]);u=mh[Math.max(0,Math.min(mh.length-1,(g<0?2:g)+h))]}else if(a==="betTimer"){let g=gh.indexOf(l[a]);u=gh[Math.max(0,Math.min(gh.length-1,(g<0?0:g)+h))]}else a==="volume"?u=Math.round(Math.max(0,Math.min(1,(l.volume??.8)+h*.1))*10)/10:u=l[a]+h;xn({t:"settings",settings:{[a]:u}})}),{update:r=>i(r)}}var Ev=()=>!!ye("#tvmodal");function qi(){ye("#tvmodal")?.remove()}function Oa(n){qi();let t=Ke(`<div id="tvmodal"><div class="tvm panel white anim-pop">${n}</div></div>`);return rr.appendChild(t),t.addEventListener("click",e=>{e.target===t&&qi()}),t}function Tv(n){ye("#tvauth")||document.body.appendChild(Ke(`<div id="tvauth"><div class="panel white" style="padding:30px 40px;max-width:900px;font-size:26px"><h2 style="font-family:var(--font-display);font-weight:400;margin:0 0 10px">\u{1F4FA} Not the TV</h2><p>${Ht(n)}</p></div></div>`))}function Av(n){lr(),he.play("bell");let t=Oa(`<h2 class="outlined white thin">\u{1F4F1} New phone for ${Ht(n.name||"a player")}?</h2>
    <p>Someone on a <b>new phone</b> wants to take over <b>${Ht(n.name||"")}</b>'s seat (and see their secret clues).</p>
    <p>Only allow it if ${Ht(n.name||"they")} really did switch phones. Auto-denied in 30 seconds.</p>
    <div class="row"><button class="btn white" data-cancel>Deny <small>ESC</small></button><button class="btn green" data-ok>Allow <small>ENTER</small></button></div>`);t.dataset.req=n.reqId,ye("[data-cancel]",t).onclick=()=>{xn({t:"claimAnswer",reqId:n.reqId,allow:!1}),qi()},ye("[data-ok]",t).onclick=()=>{xn({t:"claimAnswer",reqId:n.reqId,allow:!0}),qi()}}function Rv(){if(Se?.phase!=="LOBBY")return;let n=Oa(`<h2 class="outlined white thin">\u27F3 Refresh Historical Data</h2>
    <p><b>This uses the internet.</b> It contacts parkrun, Strava (if set up) and the weather archive to fetch any new runs since the last refresh, then rebuilds the local database.</p>
    <p>It can take a few minutes. The game itself never goes online \u2014 this is the only button that does.</p>
    <div class="row"><button class="btn white" data-cancel>Cancel <small>ESC</small></button><button class="btn green" data-ok>Refresh now <small>ENTER</small></button></div>`);ye("[data-cancel]",n).onclick=qi,ye("[data-ok]",n).onclick=()=>{xn({t:"refresh"}),Oa('<h2 class="outlined white thin">\u27F3 Refreshing\u2026</h2><div class="rlog"></div><div class="row"><button class="btn white" data-cancel disabled>Working\u2026</button></div>')}}function Qu(n,t){let e=ye("#tvmodal .rlog");for(e||(Oa('<h2 class="outlined white thin">\u27F3 Refreshing\u2026</h2><div class="rlog"></div><div class="row"><button class="btn white" data-cancel disabled>Working\u2026</button></div>'),e=ye("#tvmodal .rlog")),e.appendChild(Ke(`<div class="rl"><b>${Ht(n)}</b> ${Ht(t)}</div>`));e.children.length>9;)e.firstElementChild.remove()}function Cv(n,t){t&&Qu("error",t);let e=ye("#tvmodal [data-cancel]");e&&(e.disabled=!1,e.textContent=n?"Done \u2713":"Close",e.onclick=qi),Xi(n?"Historical data refreshed!":"Refresh had problems \u2014 existing data kept",n?"":"red")}var Oe=null,Wi=null,Ha=null,tf=n=>Wi==="3d"&&typeof n?.loadPlan=="function"&&(typeof n?.setBackedBy=="function"||n?.loadPlan.length>=2);function eo(){if(Oe){try{Oe.dispose()}catch(n){console.warn(n)}Oe=null,Wi=null,Ha=null,sr.innerHTML="",document.body.classList.remove("racing")}}async function ef(n,{allow2d:t=!0}={}){eo();let e=yh||await pv,i={course:e.course,park:e.park,speed:ar,...n};if(Vi?.createRaceView&&!xh)try{try{Oe=await Vi.createRaceView(sr,i)}catch(s){if(i.plan||!i.round)throw s;sr.innerHTML="",Oe=await Vi.createRaceView(sr,{...i,plan:$u(i.round)})}return Ha=i.round?.roundId||null,Wi="3d",window.__markrun.raceView=Oe,zn({type:"raceview",kind:"3d"}),Oe}catch(s){console.error("3D race view failed, using 2D fallback",s),zn({type:"raceview-error",msg:String(s?.message||s)}),sr.innerHTML=""}return!t||!n.plan?null:(Oe=Lh(sr,i),Wi="2d",window.__markrun.raceView=Oe,zn({type:"raceview",kind:"2d"}),Oe)}function Xu(n){(n.introLines?.length?n.introLines:[{speaker:"jeff",text:`Welcome to Finsbury Park for round ${n.number}: ${n.title}!`}]).slice(0,2).forEach(e=>ze(e.text,e.speaker,3))}function Iv(n){let t=Ba(),e=n.round,i=[...e.runners].sort((c,d)=>c.lane-d.lane),s=Ke(`<div class="intro">${ju()}<div class="tint"></div><div class="stagebox"></div><div class="intro-dots">${i.map(()=>"<i></i>").join("")}</div></div>`);wi.appendChild(s);let r=ye(".stagebox",s),o=(n.bailouts||[]).map(c=>`${Ht(n.players.find(d=>d.id===c.playerId)?.name||"")} got a ${mn(c.amount)} bailout from the Bank of Mum &amp; Dad`).join("<br>"),a=`<div class="title-card"><div class="anim-pop"><div class="rn outlined white">ROUND ${e.number} <span style="opacity:.8">of ${n.roundsPerGame}</span></div><div class="rt outlined" style="font-size:${e.title.length>22?104:150}px">${Ht(e.title)}</div><div class="rs">${i.length} runners. All of them Mark. Only one of them is having a good day.</div>${e.theme?.label?`<div class="theme-badge panel slant grape"><div class="unslant"><span class="tk">THEME</span>${Ht(e.theme.label)}</div></div>${e.theme.blurb?`<div class="tblurb">${Ht(e.theme.blurb)}</div>`:""}`:""}${Number(e.payoutMultiplier)>=2?'<div class="double-badge outlined">DOUBLE PAYOUT FINALE \xD72</div>':""}${e.notice?`<div class="bail panel grape" style="color:#fff">\u{1F0CF} ${Ht(e.notice)}</div><br>`:""}${o?`<div class="bail panel yellow">\u{1F4B8} ${o}</div>`:""}</div></div>`,l=c=>`<div class="rcard-wrap anim-left"><div class="rcard panel slant" style="background:${Ht(c.colour.primary)}"><div class="rp">${bi(c,300)}</div><div class="unslant">
        <div class="nick outlined">${Ht(c.nickname)}</div>
        <div class="tagl">${Ht(c.tagline||"")}</div>
        ${c.intro?`<div class="introline">\u201C${Ht(c.intro)}\u201D</div>`:""}
        ${c.publicClue?`<div class="clue"><span class="k">CLUE</span><span>${Va(c.publicClue)}</span></div>`:""}
      </div><div class="lane">LANE ${c.lane}</div><div class="odds-badge"><div class="ol">ODDS</div><div class="ov outlined">${Ht(c.odds?.display||"")}</div></div></div></div>`;async function h(c){let d=i[c];li(".intro-dots i",s).forEach((M,m)=>M.classList.toggle("on",m===c)),r.innerHTML=l(d),he.play("whoosh"),ze(d.intro||`${d.nickname}. ${d.tagline||""}`,c%2?"pam":"jeff",3),await jn(t,4800,12e3)}async function u(){t.cancelled||(li(".intro-dots i",s).forEach(c=>c.classList.remove("on")),r.innerHTML='<div class="bets-open"><div class="anim-pop"><div class="big outlined">BETS ARE OPEN!</div><div class="sub2 outlined white thin">\u{1F4F1} Grab your phones \u2014 your secret clues are waiting \u{1F92B}</div></div></div>',he.play("kaching"),ze("The book is open! Check your phones for your secret clues.","pam",3),await jn(t,3200,6e3),t.cancelled||xn({t:"introDone",roundId:e.roundId}))}let g=Date.now(),f=setInterval(()=>xn({t:"progress",phase:"INTRO",roundId:e.roundId,value:Date.now()-g}),2e3);return t.timers.push(f),(async()=>{if(!xh&&Vi?.createRaceView){let c=new Map(i.map((M,m)=>[M.id,m])),d=await ef({round:e,backedBy:{},introCards:!1,onIntroRunner:M=>t.cancelled?void 0:h(c.get(M)??0)},{allow2d:!1}).catch(()=>null);if(d&&!t.cancelled){document.body.classList.add("racing"),s.classList.add("over3d"),s.querySelector(".clouds")?.remove(),s.querySelector(".hills")?.remove(),r.innerHTML=a,he.play("fanfare"),Xu(e);let M=!1,m=setTimeout(()=>{M||(M=!0,u())},Bn(15e4));t.timers.push(m);try{d.playIntro(()=>{M||(M=!0,clearTimeout(m),u())})}catch(p){console.error(p),M=!0,u()}return}}if(!t.cancelled){r.innerHTML=a,he.play("fanfare"),Xu(e),await jn(t,4200,14e3);for(let c=0;c<i.length&&!t.cancelled;c++)await h(c),t.cancelled||await En(700,t);await u()}})(),{destroy:()=>{io(t)}}}function Pv(n,t=[]){return`<div class="rc panel" data-rid="${n.id}">
    <div class="top stripe" style="--c1:${Ht(n.colour.primary)};--c2:${Ht(Lv(n.colour.primary))}"><div class="lane">${n.lane}</div><div class="rp">${bi(n,170)}</div></div>
    <div class="odds"><span class="num">${Ht(n.odds?.display||"")}</span>${n.odds?.decimalText?`<small>pays \xD7${Ht(n.odds.decimalText)}</small>`:""}</div>
    <div class="nick">${Ht(n.nickname)}</div>
    <div class="tagl">${Ht(n.tagline||"")}</div>
    <div class="clue"><span class="k">${Ht((n.publicClue?.label||"Public clue").toUpperCase())} \xB7 PUBLIC CLUE</span>${Va(n.publicClue)}</div>
    ${t.length?`<div class="backers">${t.join("")}</div>`:""}
  </div>`}function Lv(n){let t=parseInt(String(n).replace("#",""),16),e=i=>Math.round(i+(255-i)*.25);return`#${[t>>16&255,t>>8&255,t&255].map(i=>e(i).toString(16).padStart(2,"0")).join("")}`}function kv(n){return(n.matchups||[]).map(t=>{let e=ln(n,t.a),i=ln(n,t.b);return!e||!i?"":`<div class="mu panel slant dark"><div class="unslant" style="display:flex;align-items:center;gap:18px"><span class="lbl">HEAD-TO-HEAD</span>
      <span class="side"><i class="dot" style="background:${Ht(e.colour.primary)}"></i>${Ht(ms(e))} <span class="od">${Ht(t.odds.displayA||`\xD7${t.odds.a}`)}</span></span>
      <span class="vs">VS</span>
      <span class="side"><i class="dot" style="background:${Ht(i.colour.primary)}"></i>${Ht(ms(i))} <span class="od">${Ht(t.odds.displayB||`\xD7${t.odds.b}`)}</span></span></div></div>`}).join("")}function Dv(n){let t=n?.theme,e=Number(n?.payoutMultiplier)>=2;return`${t?.label?`<div class="theme-badge panel slant grape"><div class="unslant"><span class="tk">THEME</span>${Ht(t.label)}</div></div>`:""}${e?'<div class="double-badge outlined">DOUBLE PAYOUT FINALE \xD72</div>':""}`}function Uv(n){return(n.props||[]).map(t=>`<div class="mu prop panel slant"><div class="unslant" style="display:flex;align-items:center;gap:16px"><span class="lbl">\u{1F3A1} SIDE BET</span><span class="ptxt">${Ht(t.text)}</span>
    <span class="od yes">YES ${Ht(t.odds?.displayYes||`\xD7${t.odds?.yes}`)}</span><span class="od no">NO ${Ht(t.odds?.displayNo||`\xD7${t.odds?.no}`)}</span></div></div>`).join("")}function Nv(n){let t=n.round,e=[...t.runners].sort((u,g)=>u.lane-g.lane),i=Ke(`<div class="betting">
    <div class="bet-head"><div class="h outlined">PLACE YOUR BETS!</div><div class="rt">Round ${t.number}/${n.roundsPerGame} \xB7 ${Ht(t.title)}</div>${Dv(t)}<div class="timer num hidden"></div></div>
    <div class="runner-grid n${e.length}">${e.map(u=>Pv(u)).join("")}</div>
    <div class="matchups">${kv(t)}</div>
    <div class="props-row">${Uv(t)}</div>
    ${t.notice?`<div class="notice panel grape">\u{1F0CF} ${Ht(t.notice)}</div>`:""}
  </div>`);wi.appendChild(i),li(".rc",i).forEach((u,g)=>{u.style.animation=`slide-up .5s ${g*.08}s cubic-bezier(.2,1.3,.4,1) both`});let s=ye(".timer",i),r=null;function o(){if(!Se?.deadline||Se.phase!=="BETTING"||Se.revealed){s.classList.add("hidden");return}let u=Math.max(0,Math.ceil((Se.deadline-Fa.serverNow())/1e3));s.classList.remove("hidden"),s.textContent=`${Math.floor(u/60)}:${String(u%60).padStart(2,"0")}`,u<=10&&u!==r&&he.play("tick"),r=u}let a=setInterval(o,250);o();let l=[["jeff","Each of you has one red-hot insider tip on your phone. Find it. Use it."],["pam","Every one of these runners is Mark. The question is: which Mark turned up?"],["jeff","Head-to-heads are a lovely way to lose money slowly."]];Number(t.payoutMultiplier)>=2?ze("Final round, and every payout is doubled! Fortunes will be made. Mostly lost.","jeff",3):t.theme?.label&&ze(`Today's theme: ${t.theme.label}. ${t.theme.blurb||""}`,"pam",2);let h=setTimeout(()=>{let u=l[Math.floor(Math.random()*l.length)];ze(u[1],u[0],1)},Bn(12e3));return{destroy:()=>{clearInterval(a),clearTimeout(h)}}}function Ov(n){let t=Ba(),e=n.round,i=(n.revealSeq||[]).filter(a=>a&&a.bet);if(!i.length){let a=(n.betLines||[]).slice();i=n.players.flatMap(l=>(n.bets?.[l.id]||[]).map(h=>({playerId:l.id,bet:h}))).sort((l,h)=>l.bet.stake-h.bet.stake).map(l=>({...l,line:a.shift()||null}))}let s=Ke(`<div class="reveal">
    <div class="rh outlined">THE BETS ARE IN!</div>
    <div class="spot"></div>
    <div class="tally">${n.players.map(a=>`<div class="tcol panel slant" data-pid="${a.id}" style="background:${Ht(a.avatar.colour)}"><div class="unslant"><div class="who">${vn(a.avatar,64)}<span>${Ht(a.name)}</span><span class="tot num" data-tot>0pp</span></div><div class="chips"></div></div></div>`).join("")}</div>
  </div>`);wi.appendChild(s);let r=ye(".spot",s),o={};return(async()=>{he.play("drumroll",{dur:1.6/ar+.2}),ze(i.length?"Right then. Let's see the damage, smallest first.":"Nobody has bet a penny. Cowards, the lot of them.","jeff",3),await En(1800,t);for(let a=0;a<i.length&&!t.cancelled;a++){let{playerId:l,bet:h,line:u}=i[a],g=n.players.find(p=>p.id===l),f=ln(e,oo(h)),c=dr(e,h),d=Ga(e,h),M=a===i.length-1&&i.length>1;r.innerHTML=`<div class="spotcard"><div class="anim-pop"><div class="sc panel ${M?"yellow":"white"}">
        <div class="scp">${vn(g?.avatar,110)}<div class="scn">${Ht(g?.name||"")}</div></div>
        <div class="scr">${f?bi(f,150):'<span class="propicon big">\u{1F3A1}</span>'}</div>
        <div class="scb"><div class="sck">${Eh(h)}${M?" \xB7 THE BIG ONE":""}</div><div class="scl">${Ht(ro(e,h))}</div><div class="sco">${Ht(d)} \xB7 pays ${mn(h.stake*c)}</div></div>
        <div class="scs num">${mn(h.stake)}</div></div></div></div>`,he.play(M?"kaching":"pop"),u?.text&&ze(u.text,u.speaker||(a%2?"pam":"jeff"),3),o[l]=(o[l]||0)+h.stake;let m=s.querySelector(`.tcol[data-pid="${l}"]`);m&&(m.querySelector(".chips").appendChild(Ke(`<div class="tchip anim-pop">${f?`<i style="background:${Ht(f.colour.primary)}"></i>`:"\u{1F3A1} "}<span>${Ht(h.type==="prop"?"Side bet":ms(f))}</span><b>${mn(h.stake)}</b></div>`)),m.querySelector("[data-tot]").textContent=mn(o[l])),await jn(t,2600,9e3)}if(!t.cancelled){if(!(n.revealSeq||[]).length){let a=n.players.map(h=>new Set((n.bets?.[h.id]||[]).filter(u=>u.type==="win").map(u=>u.runnerId))),l=null;if(a.length>=2)for(let h of a[0])a.slice(1).every(u=>u.has(h))&&(l=ln(e,h));l&&(r.innerHTML=`<div class="spotcard"><div class="same panel yellow anim-pop">Great minds\u2026 both backing ${Ht(l.nickname)}! \u{1F91D}</div></div>`,ze(`They've both gone for ${l.nickname}. Either genius, or a shared delusion.`,"pam",3),await jn(t,2200,7e3))}if(!t.cancelled){for(let a of Vi?.createRaceView&&!xh?[]:["3","2","1"]){if(t.cancelled)return;let l=Ke(`<div class="countdown outlined anim-pop">${a}</div>`);s.appendChild(l),he.play("beep"),await En(800,t),l.remove()}t.cancelled||xn({t:"revealDone",roundId:e.roundId})}}})(),{destroy:()=>io(t)}}function qu(n){let t=n.market,e=n.round;if(!t)return'<div class="mk-wait outlined white thin">Opening the market\u2026</div>';let i=new Set(n.players.filter(r=>(n.bets?.[r.id]||[]).some(o=>o.type==="inplay")).map(r=>r.id));return`<div class="mk panel white"><div class="mkh"><span class="outlined">HALFWAY MARKET</span><span class="mkt num" data-mkt></span></div>
    <div class="mks">One bet each, on your phone. Prices from the standings right now.</div>
    <div class="mkrows">${(t.standings||[]).map(r=>{let o=ln(e,r.runnerId),a=t.odds?.[r.runnerId];return`<div class="mkrow">${Zi(r.place)}<span class="rp">${o?bi(o,64):""}</span><span class="nm">${Ht(o?.nickname||r.runnerId)}</span><span class="gp">${r.place===1?"LEADS":`+${Number(r.gapS).toFixed(1)}s`}</span><span class="od num">${Ht(a?.display||"")}</span></div>`}).join("")}</div>
    <div class="mkp">${n.players.map(r=>`<span class="mkpl ${i.has(r.id)?"in":""}">${vn(r.avatar,44)}${Ht(r.name)} ${i.has(r.id)?"\u2713 IN":"\u2026"}</span>`).join("")}</div></div>`}function Fv(n){let t=Ba(),e=n.round,i=Ke(`<div class="race-ov"><div class="live panel slant red"><div class="unslant" style="display:flex;gap:14px;align-items:center"><span class="dot"></span>LIVE \xB7 ${Ht(e.title)}</div></div><div class="market-layer"></div></div>`);wi.appendChild(i),document.body.classList.add("racing");let s=ye(".market-layer",i),r=0,o=0,a="idle",l=null,h=null,u=null;async function g(d){a="waiting";try{d.setPaused(!0,{market:!0,marketText:"Bet on your phones \u2014 one bet each!"})}catch{}if(he.play("bell"),he.play("crowd",{dur:2,peak:.2}),ze("Halfway! The market is open. One bet each \u2014 quick!","jeff",3),xn({t:"marketOpen",roundId:e.roundId}),s.innerHTML=qu(Se),u=setInterval(()=>{let M=s.querySelector("[data-mkt]");M&&Se?.market?.closesAt&&(M.textContent=`${Math.max(0,Math.ceil((Se.market.closesAt-Fa.serverNow())/1e3))}s`)},200),await new Promise(M=>{l=M,setTimeout(M,2e4),t.timers.push(setTimeout(()=>{Se?.market||M()},3500))}),clearInterval(u),a="done",s.innerHTML="",!t.cancelled){ze("Market closed! Back to the action!","pam",2);try{d.setPaused(!1)}catch{}}}let f=Date.now(),c=setInterval(()=>xn({t:"raceTime",roundId:e.roundId,b:-1e5+(Date.now()-f)/1e3}),2e3);return t.timers.push(c),(async()=>{let d=null;if(Oe&&Ha===e.roundId&&tf(Oe))try{typeof Oe.setBackedBy=="function"?(Oe.setBackedBy(n.backedBy||{}),Oe.loadPlan(n.racePlan)):Oe.loadPlan(n.racePlan,{backedBy:n.backedBy||{}}),Oe.setPaused(!1),d=Oe,zn({type:"raceview",kind:"3d",reused:!0})}catch(m){console.warn("could not re-use the intro view",m)}if(d||(d=await ef({round:e,plan:n.racePlan,backedBy:n.backedBy||{}})),clearInterval(c),t.cancelled)return;if(!d){i.appendChild(Ke('<div class="race-err panel red">Race view failed to load</div>'));return}document.body.classList.add("racing"),Wi==="3d"&&i.querySelector(".live")?.remove(),Wi!=="3d"?(he.play("horn"),setTimeout(()=>he.play("crowd",{dur:3,peak:.25}),300),ze("And they're off!","jeff",3)):he.play("crowd",{dur:4,peak:.2}),zn({type:"race-start",kind:Wi}),h=setInterval(()=>{let m=d.broadcastTime;Number.isFinite(m)&&xn({t:"raceTime",roundId:e.roundId,b:m})},1e3),d.playRace(m=>{if(!(t.cancelled||!m)){if(zn({type:"race-event",e:m.type||"line",text:m.text}),m.kind==="countdown"){he.play(m.n===0?"go":"beep"),m.n===0&&(he.play("horn"),he.play("crowd",{dur:3,peak:.28}));return}if(m.kind==="photo_finish"){he.play("stamp"),ze("It's a photo finish! Hold your breath!","pam",3);return}if(m.text&&(m.kind==="commentary"||!m.type)){a!=="waiting"&&Si.say(m.text,m.speaker||"jeff",{priority:m.priority||2});return}switch(m.type){case"overtake":Date.now()-r>1500&&(r=Date.now(),he.play("whoosh"));break;case"lead_change":he.play("whoosh"),he.play("crowd",{dur:2,peak:.18});break;case"breakaway":he.play("crowd",{dur:2.5,peak:.2});break;case"lap":a==="idle"&&Se?.marketAvailable?(zn({type:"market"}),g(d)):he.play("bell");break;case"final_stretch":he.play("crowd",{dur:6,peak:.4});break;case"finish":o++,o===1&&(he.play("fanfare"),he.play("crowd",{dur:4,peak:.45}));break;default:break}}},async()=>{t.cancelled||(zn({type:"race-done"}),await En(2500,t),t.cancelled||xn({t:"raceDone",roundId:e.roundId}))});let M=Number(n.resumeB)||0;if(M>2)try{typeof d.seek=="function"?d.seek(M):d._debug?.seek&&(d._debug.seek(M),d.setPaused(!1)),zn({type:"race-resume",b:M}),Xi("Back on air! Resuming the race\u2026")}catch(m){console.warn("resume failed",m)}})(),{update(d){if(a==="waiting"){if(d.market&&!d.market.open){l?.();return}s.innerHTML=qu(d)}},destroy:()=>{io(t),clearInterval(h),clearInterval(u),l?.()}}}function zv(n){let t=null,e=-1,i=Ke('<div class="results"></div>');wi.appendChild(i);let s=n.round,r=n.results;function o(m,p){return p.players.filter(b=>(p.bets?.[b.id]||[]).some(_=>oo(_)===m)).map(b=>vn(b.avatar,50))}let a=(m,p="")=>`<div class="res-head"><div class="h outlined">${m}</div>${p?`<div class="sh">${p}</div>`:""}</div>`,l=m=>{t.cancelled||xn({t:"stageDone",stage:m})};async function h(m){let p=t,b=r.finishOrder.map(L=>{let T=ln(s,L.runnerId);return`<div class="orow panel slant ${L.place===1?"first":""}" style="${L.place===1?"":`background:${Ht(T?.colour?.primary||"#2a62e0")}`}"><div class="unslant" style="display:flex;align-items:center;gap:26px;width:100%">
        ${Zi(L.place)}<div class="rp">${T?bi(T,112):""}</div>
        <div class="nm ${L.place===1?"":"outlined white thin"}">${Ht(T?.nickname||L.runnerId)}${r.favouriteId===L.runnerId?' <span class="fav">FAV</span>':""}<small>${Ht(T?.tagline||"")}</small></div>
        <div class="bk">${o(L.runnerId,m).join("")}</div>
        <div class="tm"><span class="num">${Ht(L.timeText||wh(L.officialS))}</span>${L.place>1&&L.gapS!=null?`<span class="gap">+${Math.round(L.gapS)}s</span>`:""}</div></div></div>`});i.innerHTML=a("THE RESULT","Official times, as recorded by the volunteers \u{1F4CB}")+`<div class="order">${b.join("")}</div>`;let _=li(".orow",i);for(let L=_.length-1;L>=0;L--){if(p.cancelled)return;_[L].classList.add("show"),L===0?(he.play("fanfare"),ur(document.body,{count:90})):he.play("pop"),await En(L===1?1600:800,p)}(r.commentary||[]).slice(0,2).forEach(L=>ze(L.text,L.speaker,3)),await jn(p,5500,14e3),l(0)}async function u(){let m=t,p=r.finishOrder.map(v=>v.runnerId),b=new Map((r.reveal||[]).map(v=>[v.runnerId,v]));i.innerHTML=a("WHO WERE THEY REALLY?","Every runner was a real Mark, on a real Saturday \u{1F575}\uFE0F \u2014 details on your phones")+`<div class="reveal-grid">${p.map((v,L)=>{let T=ln(s,v),E=b.get(v)||{},R=r.finishOrder[L];return`<div class="rv" data-i="${L}">
        <div class="face front" style="background:${Ht(T?.colour?.primary)}"><div><div class="rp">${T?bi(T,220):""}</div><div class="q outlined">?</div></div></div>
        <div class="face back"><div class="bh" style="background:${Ht(T?.colour?.primary)}"><div class="rp">${T?bi(T,74):""}</div><div class="n">${Ht(T?.nickname||v)}</div></div>
          <div class="date">${Ht(E.dateText||E.date||E.headline||"")}</div>
          <div class="time num">${Ht(R?.timeText||"")}</div>
          ${E.stravaTitle?`<div class="strava"><span class="k">STRAVA TITLE</span>\u201C${Ht(E.stravaTitle)}\u201D</div>`:""}
          ${E.wasPB||E.pbKind?`<div class="pb">${E.pbKind==="finsbury"?"COURSE PB!":"PB! \u{1F3C5}"}</div>`:""}
          <div class="place">${Zi(R?.place||L+1)}</div>
        </div></div>`}).join("")}</div>`;let _=li(".rv",i);await En(900,m);for(let v=_.length-1;v>=0;v--){if(m.cancelled)return;_[v].classList.add("flip");let L=b.get(p[v]),T=ln(s,p[v]);he.play(v===0?"fanfare":"reveal"),(v===0||v===_.length-1)&&ze(`${v===0?"The winner":"And in last place"}, ${T?.nickname}: ${L?.headline||L?.dateText||""}`,v===0?"jeff":"pam",2),await En(v===0?3200:2600,m)}await jn(m,6e3,12e3),l(1)}async function g(m){let p=t,b=r.clueReview||[],_=b.filter(T=>T.highlight).slice(0,3);if(_.length||(_=b.filter(T=>T.verdict!=="neutral").slice(0,3)),!_.length){i.innerHTML="",await En(300,p),l(2);return}let v=new Map((m.clues||[]).map(T=>[T.id,T]));i.innerHTML=a("THE CLUES THAT MATTERED","Useful\u2026 or a red herring? \u{1F41F}")+`<div class="clue-list big">${_.map(T=>{let E=ln(s,T.runnerId),R=v.get(T.clueId),x=m.players.find(A=>A.id===T.owner),y=T.owner==="public"?`\u{1F4FA} PUBLIC CLUE${R?.label?` \xB7 ${Ht(R.label.toUpperCase())}`:""}`:`${R?.tier==="hot"?"\u{1F525}":"\u{1F92B}"} ${Ht(x?.name||"Secret")}'S ${R?.tier==="hot"?"HOT TIP":"SECRET CLUE"}`,S={useful:"USEFUL \u2713",red_herring:"RED HERRING \u{1F41F}",neutral:"MEH"}[T.verdict]||Ht(T.verdict);return`<div class="cl panel"><div class="rp">${E?bi(E,100):""}</div><div class="txt"><div class="own">${y} \xB7 ${Ht(E?.nickname||"")}</div>${Ht(T.text||R?.text||"")}${T.quip?`<div class="quip">${Ht(T.quip)}</div>`:""}</div><div class="verdict ${Ht(T.verdict)}">${S}</div></div>`}).join("")}</div>`;let L=li(".cl",i);for(let T=0;T<L.length;T++){if(p.cancelled)return;L[T].classList.add("show"),setTimeout(()=>{he.play("sting"),he.play("stamp")},Bn(250)),_[T].quip&&ze(_[T].quip,T%2?"jeff":"pam",2),await jn(p,2800,8e3)}await jn(p,3500,9e3),l(2)}async function f(m){let p=t,b=m.settings.drinkingMode;i.innerHTML=a("PAY DAY","The bookie settles up \u{1F4B0}")+`<div class="payouts">${m.players.map(T=>{let E=r.payouts?.[T.id]||{bets:[],net:0,bankroll:T.bankroll},R=(E.bets||[]).map(x=>{let y=Th(x);return`<div class="pl ${y.kind==="won"?"won":y.kind==="push"?"push":"lost"}"><span class="mark">${y.kind==="won"?"\u2705":y.kind==="push"?"\u21A9\uFE0F":"\u274C"}</span><div class="lb">${Ht(ro(s,x))}<small>staked ${mn(x.stake)} \xB7 ${Ht(Ga(s,x))}${y.kind==="won"?` \xB7 returned ${mn(x.returned)}`:""}</small></div><div class="r">${y.text}</div></div>`}).join("")||'<div class="pl show"><div class="lb">No bets placed. Sensible. Boring.</div></div>';return`<div class="pay panel slant" data-pid="${T.id}" style="background:${Ht(T.avatar.colour)}"><div class="unslant" style="display:flex;flex-direction:column;height:100%">
        <div class="who">${vn(T.avatar,90)}${Ht(T.name)}</div>
        <div class="lines">${R}</div>
        <div class="net num" data-net="${E.net}">${Yi(0)}</div>
        <div class="bank">Bankroll: <span data-bank>${mn(E.bankroll-E.net)}</span></div>
        ${b?c(E.net,T.id):""}
      </div></div>`}).join("")}</div>`,await En(600,p);for(let T of li(".pl",i)){if(p.cancelled)return;T.classList.add("show"),he.play(T.classList.contains("won")?"kaching":"pop"),await En(700,p)}await En(400,p);let _=null,v=null;for(let T of m.players){let E=r.payouts?.[T.id];if(!E)continue;let R=i.querySelector(`.pay[data-pid="${T.id}"]`),x=R.querySelector(".net"),y=R.querySelector("[data-bank]");x.classList.add(E.net>0?"green":E.net<0?"red":"white"),x.classList.add("outlined"),$a(x,0,E.net,Bn(1800),S=>Yi(S)),$a(y,E.bankroll-E.net,E.bankroll,Bn(1800),S=>mn(S)),(!_||E.net>_.net)&&(_={...E,p:T,panel:R}),(!v||E.net<v.net)&&(v={...E,p:T,panel:R})}if(await En(1900,p),p.cancelled)return;let L=m.settings.drinkingMode?(r.drinks||[]).filter(T=>!T.playerId):[];L.length&&i.appendChild(Ke(`<div class="drink-all panel yellow anim-pop">\u{1F37B} ${L.map(T=>Ht(T.text)).join(" \xB7 ")}</div>`)),_&&_.net>0&&(he.play("kaching"),ur(document.body,{count:140}),_.panel.classList.add("big-win"),_.panel.appendChild(Ke('<div class="mood">\u{1F911}</div>')),ze(Bv(_.p.name,_.net),"jeff",3)),v&&v.net<0&&(setTimeout(()=>he.play("sadtrombone"),Bn(900)),v.panel.classList.add("big-loss"),v.panel.appendChild(Ke('<div class="raincloud">\u{1F327}\uFE0F</div>')),ze(Hv(v.p.name,v.net),"pam",3)),!_?.net&&!v?.net&&ze("Nobody won, nobody lost. The bookie is furious.","pam",2),await jn(p,7e3,14e3),l(3)}function c(m,p){if(Array.isArray(r.drinks))return r.drinks.filter(_=>_.playerId===p).map(_=>`<div class="drink panel yellow">\u{1F37A} ${Ht(_.text)}</div>`).join("");if(m<0){let b=Math.min(5,Math.max(1,Math.ceil(-m/100)));return`<div class="drink panel yellow">\u{1F37A} Take ${b} sip${b>1?"s":""}!</div>`}if(m>0){let b=Math.min(5,Math.max(1,Math.ceil(m/150)));return`<div class="drink panel yellow">\u{1F449} Hand out ${b} sip${b>1?"s":""}</div>`}return'<div class="drink panel yellow">\u{1F964} Water break</div>'}async function d(m){let p=t,b=r.awards||[];if(!b.length&&!r.archetype?.label){await En(200,p),l(4);return}i.innerHTML=a("ROUND AWARDS","\u{1F3C6}")+`<div class="awards">${r.archetype?.label?`<div class="arch panel yellow anim-pop"><div class="al display">${Ht(r.archetype.label)}</div><div class="ab">${Ht(r.archetype.blurb||"")}</div></div>`:""}${b.map(_=>{let v=m.players.find(L=>L.id===_.playerId);return`<div class="award panel slant ${v?"":"yellow"}" style="${v?`background:${Ht(v.avatar.colour)}`:""}"><div class="unslant" style="display:flex;align-items:center;gap:28px"><span class="trophy">\u{1F3C6}</span>${v?vn(v.avatar,84):""}<div><div class="at outlined white thin">${Ht(_.title)}</div><div class="ax" style="color:${v?"#fff":"var(--ink)"}">${Ht(_.text||"")}</div></div></div></div>`}).join("")}</div>`;for(let _ of li(".award",i)){if(p.cancelled)return;_.classList.add("show"),he.play("fanfare"),await En(1500,p)}b[0]&&ze(`${b[0].title}! ${b[0].text||""}`,"jeff",2),await jn(p,6500,12e3),l(4)}function M(m){if(m.resultsStage===e)return;t&&io(t),t=Ba(),e=m.resultsStage,Si.clear(),to.innerHTML="";let p=m.resultStages[m.resultsStage];if(zn({type:"results-stage",stage:p}),p!=="order"&&Oe&&eo(),p==="order"&&Oe&&Wi==="3d")try{Oe.showPodium?.(r,{card:!1})}catch(b){console.warn(b)}else Oe&&p==="order"&&eo();document.body.classList.toggle("racing",!!Oe),({order:h,reveal:u,clues:g,payouts:f,awards:d}[p]||(async()=>l(m.resultsStage)))(m).catch(b=>console.error(b))}return r&&M(n),{update:m=>{m.results&&M(m)},destroy:()=>{t&&io(t),eo()}}}function Bv(n,t){let e=[`${n} cleans up! Up ${Ai(t)}. Insufferable for the rest of the evening.`,`Kerching! ${n} is ${Ai(t)} richer and won't let anyone forget it.`,`${n} read that race like a book.`];return e[Math.floor(Math.random()*e.length)]}function Hv(n,t){let e=[`Oh dear. ${n} is down ${Ai(-t)}. The bank of Mark is not sympathetic.`,`${n} backed the wrong Mark. It happens to the best of us. Mostly to ${n}.`,`That's ${Ai(-t)} gone, ${n}. Thoughts and prayers.`];return e[Math.floor(Math.random()*e.length)]}function $v(n,{compact:t=!1}={}){let e=Ku(n.players),i=n.history.at(-1);return[...n.players].sort((s,r)=>r.bankroll-s.bankroll).map(s=>{let r=e.get(s.id),o=i?.nets?.[s.id]??0;return`<div class="srow panel slant ${r===1&&!t?"lead":""}" style="${r===1&&!t?"":`background:${Ht(s.avatar.colour)}`}"><div class="unslant" style="display:flex;align-items:center;gap:26px;width:100%">
      ${Zi(r)}${vn(s.avatar,t?70:96)}<div class="nm">${Ht(s.name)}</div>
      ${t?"":`<span class="dl ${o>0?"up":o<0?"down":"flat"}">${Yi(o)}</span>`}
      <div class="bk num">${mn(s.bankroll)}</div>
      ${!t&&s.ready?'<span class="tag" style="background:var(--grass);color:#fff">\u2713 READY</span>':""}
    </div></div>`}).join("")}function Vv(n){let t=n.history,e=n.settings.startingBankroll,i=n.players.map(M=>({p:M,pts:[e,...t.map(m=>m.bankrolls?.[M.id]??e)]})),s=Math.max(2,(t.length||0)+1),r=Math.max(e*1.2,...i.flatMap(M=>M.pts)),o=540,a=420,l=36,h=M=>l+M*(o-l*2)/(s-1),u=M=>a-l-M/r*(a-l*2),g=[0,.5,1].map(M=>`<line x1="${l}" x2="${o-l}" y1="${u(r*M)}" y2="${u(r*M)}" stroke="#14183c22" stroke-width="2"/>`).join(""),f=`<line x1="${l}" x2="${o-l}" y1="${u(e)}" y2="${u(e)}" stroke="#14183c55" stroke-width="2" stroke-dasharray="8 8"/>`,c=i.map(({p:M,pts:m})=>`<polyline fill="none" stroke="#14183c" stroke-width="12" stroke-linejoin="round" stroke-linecap="round" points="${m.map((p,b)=>`${h(b)},${u(p)}`).join(" ")}"/><polyline fill="none" stroke="${Ht(M.avatar.colour)}" stroke-width="6" stroke-linejoin="round" stroke-linecap="round" points="${m.map((p,b)=>`${h(b)},${u(p)}`).join(" ")}"/>${m.map((p,b)=>`<circle cx="${h(b)}" cy="${u(p)}" r="8" fill="${Ht(M.avatar.colour)}" stroke="#14183c" stroke-width="4"/>`).join("")}`).join(""),d=Array.from({length:s},(M,m)=>`<text x="${h(m)}" y="${a-6}" text-anchor="middle" font-family="Lilita One" font-size="20" fill="#14183c">${m===0?"Start":`R${m}`}</text>`).join("");return`<svg viewBox="0 0 ${o} ${a}" width="100%" height="440">${g}${f}${c}${d}</svg>`}function Gv(n,t){let e=n.results;if(!e?.finishOrder?.length)return"";let i=ln(n.round,e.finishOrder[0].runnerId),s=n.players.map(o=>{let a=e.payouts?.[o.id],l=(a?.bets||[]).filter(h=>h.won).sort((h,u)=>u.returned-h.returned)[0];return`<div class="rcp">${vn(o.avatar,54)}<span class="rn">${Ht(o.name)}</span><span class="rx">${l?`\u2705 ${Ht(ro(n.round,l))}`:(a?.bets||[]).length?"\u274C nothing came in":"\u{1F648} no bets"}</span><span class="rnet ${a?.net>0?"up":a?.net<0?"down":""}">${Yi(a?.net||0)}</span></div>`}).join(""),r=(e.awards||[]).slice(0,2).map(o=>`<span class="raw">\u{1F3C6} ${Ht(o.title)}</span>`).join("");return`<div class="recap panel white ${t?"narrow":""}"><div class="rch"><span class="rp">${i?bi(i,64):""}</span><span>Last race: <b>${Ht(i?.nickname||"")}</b> won${e.archetype?.label?` \xB7 ${Ht(e.archetype.label)}`:""}</span>${r}</div>${s}</div>`}function Wv(n){let t=Ke('<div class="score"></div>');wi.appendChild(t);let e=null;function i(r){let a=r.roundNumber>=r.roundsPerGame?"\u{1F3C1} That was the final round! Champion next\u2026":r.roundNumber===r.roundsPerGame-1?"Up next: THE FINAL ROUND \u{1F62C}":`Up next: Round ${r.roundNumber+1} of ${r.roundsPerGame}`,l=r.history.length>=2;t.innerHTML=`<div class="res-head"><div class="h outlined">STANDINGS</div><div class="sh">After round ${r.roundNumber} of ${r.roundsPerGame}</div></div>
      <div class="standings ${l?"":"solo"}">${$v(r)}</div>
      ${l?`<div class="chart panel white"><div class="ct">The money, round by round</div>${Vv(r)}</div>`:""}
      ${Gv(r,l)}
      <div class="upnext panel yellow">${a}<span class="cd"></span></div>`}i(n);let s=[...n.players].sort((r,o)=>o.bankroll-r.bankroll);if(s.length>=2){let r=s[0].bankroll-s[1].bankroll;ze(r===0?"It's dead level at the top!":`${s[0].name} leads by ${Ai(r)}.`,"jeff",2)}else s[0]&&ze(`${s[0].name} is on ${Ai(s[0].bankroll)}.`,"jeff",2);return e=setInterval(()=>{let r=t.querySelector(".cd");if(!(!r||!Se))if(Se.deadline&&Se.phase==="SCOREBOARD"){let o=Math.max(0,Math.ceil((Se.deadline-Fa.serverNow())/1e3));r.textContent=` \u2014 starting in ${o}\u2026`}else r.textContent=Se.players.length?" \u2014 tap READY on your phones":""},300),{update:i,destroy:()=>clearInterval(e)}}function Xv(n){let t=[...n.players].sort((d,M)=>M.bankroll-d.bankroll),e=t[0],i=t.length>1&&t[1].bankroll===e?.bankroll,s=(n.history||[]).flatMap(d=>(d.awards||[]).map(M=>({title:M.title,text:`Round ${d.round}`,playerId:M.playerId}))),r=[...n.superlatives||[],...s].filter(d=>d&&d.title),o=Ke(`<div class="finale"><div class="rays"></div><div class="fconf"></div>
    <div class="champ">${e?`<div class="h outlined">${i?"IT'S A DRAW!":"CHAMPION!"}</div>
      <div class="who"><div class="crown">\u{1F451}</div>${vn(e.avatar,200)}<div class="nm outlined white">${Ht(i?t.filter(d=>d.bankroll===e.bankroll).map(d=>d.name).join(" & "):e.name)}</div><div class="bk num">${mn(e.bankroll)}</div></div>`:'<div class="h outlined">GAME OVER</div>'}
      <div class="others">${t.slice(1).map((d,M)=>`<div class="srow panel slant" style="background:${Ht(d.avatar.colour)}"><div class="unslant" style="display:flex;align-items:center;gap:20px">${Zi(M+2)}${vn(d.avatar,64)}<div class="nm">${Ht(d.name)}</div><div class="bk num">${mn(d.bankroll)}</div></div></div>`).join("")}</div>
    </div>
    <div class="reel">${r.length?'<div class="reel-h outlined white thin">THE NIGHT IN AWARDS</div><div class="reel-card"></div><div class="reel-dots"></div>':""}</div>
  </div>`);wi.appendChild(o);let a=ye(".fconf",o);he.play("drumroll",{dur:1.6}),setTimeout(()=>{he.play("fanfare"),he.play("crowd",{dur:5,peak:.45}),ur(a,{count:200,duration:4500,contained:!0,zIndex:0})},Bn(1700));let l=setInterval(()=>ur(a,{count:50,duration:3500,contained:!0,zIndex:0}),Bn(7e3));e&&ze(i?"We have a dead heat! Nobody wins, which is very British.":`Ladies and gentlemen, your MARKRUN champion: ${e.name}, with ${Ai(e.bankroll)}!`,"jeff",3);let h=0,u=null,g=ye(".reel-card",o);function f(){if(!g||!r.length)return;let d=r[h%r.length],M=n.players.find(m=>m.id===d.playerId);g.innerHTML=`<div class="rc2 panel ${M?"":"yellow"} anim-pop" style="${M?`background:${Ht(M.avatar.colour)}`:""}"><div class="tro">\u{1F3C6}</div>${M?vn(M.avatar,84):""}<div class="t outlined ${M?"white":""} thin">${Ht(d.title)}</div><div class="x">${Ht(d.text||"")}</div></div>`,ye(".reel-dots",o).innerHTML=r.map((m,p)=>`<i class="${p===h%r.length?"on":""}"></i>`).join(""),he.play("reveal"),h<r.length&&ze(`${d.title}! ${d.text||""}`,h%2?"pam":"jeff",2),h++}let c=setTimeout(()=>{f(),u=setInterval(f,Bn(6500))},Bn(6500));return setTimeout(()=>ze("Press space, or tap ready on your phones, to go again.","pam",1),Bn(6500*(r.length+1))),{destroy:()=>{clearInterval(l),clearInterval(u),clearTimeout(c)}}}
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
