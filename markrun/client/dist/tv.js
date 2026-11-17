var Dd=Object.defineProperty;var Ud=(i,t)=>{for(var e in t)Dd(i,e,{get:t[e],enumerable:!0})};function nh({role:i,getToken:t,onWelcome:e,onState:n,onMessage:s,onStatus:r}){let o=null,a=0,l=null,h=!1,u=0,p=null,d=0,c=()=>`${location.protocol==="https:"?"wss":"ws"}://${location.host}/ws`;function g(_){r?.(_)}function M(){if(clearTimeout(l),o&&(o.readyState===0||o.readyState===1))return;g(a?"reconnecting":"connecting");try{o=new WebSocket(c())}catch{x();return}let _=o;_.onopen=()=>{a=0,g("open"),d=Date.now(),f({t:"hello",role:i,token:t?.()||void 0}),clearInterval(p),p=setInterval(()=>{if(f({t:"ping",at:Date.now()}),Date.now()-d>25e3&&_.readyState===1)try{_.close()}catch{}},8e3)},_.onmessage=v=>{d=Date.now();let U;try{U=JSON.parse(v.data)}catch{return}if(U.t==="pong"){U.serverNow&&(u=U.serverNow+(Date.now()-U.at)/2-Date.now());return}U.t==="welcome"?e?.(U):U.t==="state"?(U.state?.serverNow&&(u=U.state.serverNow-Date.now()),n?.(U.state)):s?.(U)},_.onclose=()=>{clearInterval(p),_===o&&(g("closed"),h||x())},_.onerror=()=>{try{_.close()}catch{}}}function x(){clearTimeout(l);let _=Math.min(8e3,400*2**a)*(.75+Math.random()*.5);a++,l=setTimeout(M,_)}function f(_){return o&&o.readyState===1?(o.send(JSON.stringify(_)),!0):!1}let b=()=>{document.visibilityState==="visible"&&(!o||o.readyState>1?(a=0,M()):f({t:"ping",at:Date.now()}))};return document.addEventListener("visibilitychange",b),window.addEventListener("online",()=>{a=0,M()}),window.addEventListener("pageshow",b),window.addEventListener("focus",b),M(),{send:f,reconnect(){a=0;try{o?.close()}catch{}M()},close(){h=!0,o?.close()},serverNow:()=>Date.now()+u,get open(){return o?.readyState===1}}}function ih(){let i=null,t=null,e=null,n=null,s=null,r=null,o=.8,a=!1,l=!0,h=null;function u(){if(i)return i;let y=window.AudioContext||window.webkitAudioContext;if(!y)return null;i=new y,r=i.createDynamicsCompressor(),r.threshold.value=-14,r.ratio.value=4,r.attack.value=.005,r.release.value=.2,t=i.createGain(),t.gain.value=a?0:o,e=i.createGain(),e.gain.value=.9,n=i.createGain(),n.gain.value=.32,e.connect(r),n.connect(r),r.connect(t),t.connect(i.destination),s=i.createBuffer(1,i.sampleRate*2,i.sampleRate);let m=s.getChannelData(0);for(let S=0;S<m.length;S++)m[S]=Math.random()*2-1;return i}function p(){let y=u();return y&&y.state==="suspended"&&y.resume(),!!y}let d=()=>i&&i.state==="running";function c(y,m,S,E,I,N){y.gain.cancelScheduledValues(m),y.gain.setValueAtTime(1e-4,m),y.gain.exponentialRampToValueAtTime(E,m+S),y.gain.setValueAtTime(E,m+S+I),y.gain.exponentialRampToValueAtTime(1e-4,m+S+I+N)}function g(y,m,S,E,{gain:I=.2,a:N=.01,rel:q=.2,dest:R=e,detune:H=0,filter:G=null,pan:nt=0}={}){let st=i.createOscillator();st.type=y,st.frequency.setValueAtTime(m,S),st.detune.value=H;let z=i.createGain(),St=st;if(G){let Y=i.createBiquadFilter();Y.type=G.type||"lowpass",Y.frequency.value=G.freq,Y.Q.value=G.q||.7,St.connect(Y),St=Y}St.connect(z);let K=z;if(nt&&i.createStereoPanner){let Y=i.createStereoPanner();Y.pan.value=nt,z.connect(Y),K=Y}return K.connect(R),c(z,S,N,I,Math.max(0,E-N),q),st.start(S),st.stop(S+E+q+.05),st}function M(y,m,{gain:S=.2,a:E=.01,rel:I=.2,type:N="bandpass",freq:q=1e3,q:R=1,dest:H=e}={}){let G=i.createBufferSource();G.buffer=s,G.loop=!0;let nt=i.createBiquadFilter();nt.type=N,nt.frequency.setValueAtTime(q,y),nt.Q.value=R;let st=i.createGain();return G.connect(nt),nt.connect(st),st.connect(H),c(st,y,E,S,Math.max(0,m-E),I),G.start(y,Math.random()),G.stop(y+m+I+.05),{s:G,f:nt,g:st}}let x=y=>440*2**((y-69)/12),f={horn(y){for(let[m,S]of[[233,0],[293.7,6],[349,-5]])g("sawtooth",m*.92,y,1.1,{gain:.13,a:.03,rel:.25,filter:{freq:2200},detune:S}).frequency.exponentialRampToValueAtTime(m,y+.12);g("square",116.5,y,1.1,{gain:.05,a:.03,rel:.25,filter:{freq:800}})},crowd(y,{dur:m=3.5,peak:S=.32}={}){for(let[E,I,N]of[[700,.8,1],[1800,1.2,.7],[3200,1.5,.35]]){let q=M(y,m*.4,{gain:S*N,a:m*.45,rel:m*.55,freq:E,q:I}),R=i.createOscillator();R.frequency.value=5+Math.random()*4;let H=i.createGain();H.gain.value=S*N*.35,R.connect(H),H.connect(q.g.gain),R.start(y),R.stop(y+m+.2)}for(let E=0;E<4;E++){let I=y+.4+Math.random()*m*.5;g("triangle",500+Math.random()*300,I,.35,{gain:.025,a:.08,rel:.25,filter:{freq:1600},pan:Math.random()*1.6-.8}).frequency.exponentialRampToValueAtTime(800+Math.random()*400,I+.3)}},whoosh(y){let m=M(y,.45,{gain:.35,a:.12,rel:.25,freq:400,q:2.5});m.f.frequency.exponentialRampToValueAtTime(3500,y+.3),m.f.frequency.exponentialRampToValueAtTime(700,y+.7)},bell(y){for(let m of[y,y+.42])[[1,.22,1.6],[2.76,.09,.9],[5.4,.05,.5],[8.93,.03,.3]].forEach(([S,E,I])=>g("sine",830*S,m,.01,{gain:E,a:.003,rel:I}))},fanfare(y){let m=[[67,0,.14],[72,.15,.14],[76,.3,.14],[79,.45,.32],[76,.8,.14],[79,.95,.9]];for(let[S,E,I]of m){for(let N of[-7,7])g("sawtooth",x(S),y+E,I,{gain:.07,a:.02,rel:.18,filter:{freq:2600},detune:N});g("square",x(S-12),y+E,I,{gain:.03,a:.02,rel:.15,filter:{freq:1200}})}for(let S of[60,64,67,72])g("triangle",x(S),y+.95,.9,{gain:.06,a:.03,rel:.6});f.cymbal(y+.95,.12)},cymbal(y,m=.15){M(y,.05,{gain:m,a:.002,rel:1.4,type:"highpass",freq:6e3,q:.5})},kaching(y){M(y,.03,{gain:.3,a:.002,rel:.05,type:"highpass",freq:3e3}),M(y+.05,.02,{gain:.25,a:.002,rel:.06,type:"bandpass",freq:1800,q:3});for(let[m,S]of[[2093,.14],[2637,.1],[3136,.08],[4186,.05]])g("sine",m,y+.12,.02,{gain:S,a:.003,rel:.9});for(let m=0;m<6;m++)g("sine",3e3+Math.random()*2e3,y+.2+m*.05,.01,{gain:.03,a:.002,rel:.12})},sadtrombone(y){let m=[[55,0,.42],[54,.48,.42],[53,.96,.42],[52,1.44,1.3]];for(let[S,E,I]of m){let N=g("sawtooth",x(S),y+E,I,{gain:.11,a:.04,rel:.2,filter:{freq:1100,q:2}});if(E>1){let q=i.createOscillator();q.frequency.value=6;let R=i.createGain();R.gain.value=6,q.connect(R),R.connect(N.frequency),q.start(y+E),q.stop(y+E+I+.3),N.frequency.setValueAtTime(x(S),y+E),N.frequency.linearRampToValueAtTime(x(S-1),y+E+I)}}},drumroll(y,{dur:m=2.2}={}){let S=Math.floor(m*16);for(let E=0;E<S;E++)M(y+E/16,.02,{gain:.04+.16*(E/S),a:.002,rel:.06,freq:1800,q:.8});f.cymbal(y+m,.2),g("sine",70,y+m,.05,{gain:.5,a:.003,rel:.4})},pop(y){g("sine",520,y,.02,{gain:.18,a:.003,rel:.12}).frequency.exponentialRampToValueAtTime(1100,y+.08)},tick(y){g("square",1600,y,.005,{gain:.04,a:.001,rel:.03,filter:{freq:3e3}})},lock(y){g("sine",140,y,.04,{gain:.4,a:.002,rel:.2}),M(y,.02,{gain:.2,a:.002,rel:.05,freq:2500,q:1}),g("triangle",660,y+.06,.05,{gain:.08,a:.005,rel:.2}),g("triangle",990,y+.14,.08,{gain:.08,a:.005,rel:.3})},join(y){[72,76,79,84].forEach((m,S)=>g("triangle",x(m),y+S*.07,.06,{gain:.1,a:.005,rel:.2}))},beep(y){g("square",880,y,.08,{gain:.06,a:.005,rel:.05,filter:{freq:2500}})},go(y){g("square",1320,y,.3,{gain:.07,a:.005,rel:.1,filter:{freq:3e3}})},stamp(y){g("sine",90,y,.05,{gain:.5,a:.002,rel:.25}),M(y,.04,{gain:.25,a:.002,rel:.1,type:"lowpass",freq:1200})},reveal(y){[64,67,71,74].forEach((m,S)=>g("triangle",x(m+12),y+S*.05,.05,{gain:.06,a:.004,rel:.25}))},boo(y){g("sawtooth",160,y,.7,{gain:.06,a:.1,rel:.3,filter:{freq:600}}).frequency.linearRampToValueAtTime(110,y+.8)}};function b(y,m){if(!d()||a)return;let S=f[y];if(S)try{S(i.currentTime+.02,m)}catch(E){console.warn("sfx",y,E)}}let _={lobby:{bpm:92,chords:[[60,64,67,71],[57,60,64,67],[53,57,60,64],[55,59,62,67]],arp:[0,2,1,3,2,1,3,2],swing:.08,shaker:!0,block:!1},betting:{bpm:108,chords:[[57,60,64],[53,57,60],[60,64,67],[55,59,62]],arp:[0,1,2,1,0,2,1,2],swing:.05,shaker:!0,block:!0},results:{bpm:100,chords:[[60,64,67],[65,69,72],[55,59,62],[60,64,67]],arp:[0,1,2,3,2,1,0,1],swing:.06,shaker:!1,block:!1}};function v(){if(!h)return;let y=_[h.kind],m=60/y.bpm/2;for(;h.nextT<i.currentTime+.35;){let S=h.step,E=Math.floor(S/8)%y.chords.length,I=y.chords[E],N=h.nextT+(S%2?y.swing*m:0),q=S%8;if(q===0){for(let H of I.slice(0,3))for(let G of[-6,6])g("triangle",x(H),N,m*7.5,{gain:.022,a:.35,rel:.6,dest:n,detune:G,filter:{freq:1300}});g("sine",x(I[0]-24),N,m*2.5,{gain:.14,a:.01,rel:.25,dest:n})}q===4&&g("sine",x(I[0]-24+7),N,m*2,{gain:.1,a:.01,rel:.25,dest:n});let R=I[y.arp[q]%I.length]+12;S%16<15&&g("sine",x(R),N,.02,{gain:.045,a:.004,rel:m*1.6,dest:n}),g("triangle",x(R+12),N,.01,{gain:.01,a:.002,rel:.15,dest:n}),y.shaker&&S%2===1&&M(N,.01,{gain:.018,a:.003,rel:.05,type:"highpass",freq:7e3,dest:n}),y.block&&(q===2||q===6)&&g("sine",1250,N,.004,{gain:.04,a:.001,rel:.05,dest:n}),h.step++,h.nextT+=m}}function U(y="lobby"){if(!u()||h?.kind===y)return;if(T(.6),!l){h=null,P=y;return}P=y;let m=i.createGain();m.gain.value=1e-4,m.connect(r);let S=n;n=m,m.gain.exponentialRampToValueAtTime(.32,i.currentTime+1.5),h={kind:y,nextT:i.currentTime+.1,step:0,bus:m},h.timer=setInterval(()=>{d()&&v()},90)}let P=null;function T(y=.8){if(!h)return;clearInterval(h.timer);let m=h.bus;i&&m&&(m.gain.cancelScheduledValues(i.currentTime),m.gain.setValueAtTime(m.gain.value,i.currentTime),m.gain.exponentialRampToValueAtTime(1e-4,i.currentTime+y),setTimeout(()=>m.disconnect(),y*1e3+500)),h=null}function A(y){!h||!i||h.bus.gain.setTargetAtTime(y?.14:.32,i.currentTime,.25)}return{unlock:p,play:b,ready:d,get context(){return i},setVolume(y){o=Math.max(0,Math.min(1,y)),t&&t.gain.setTargetAtTime(a?0:o,i.currentTime,.05)},setMuted(y){a=!!y,t&&t.gain.setTargetAtTime(a?0:o,i.currentTime,.05)},get muted(){return a},setMusicEnabled(y){if(l=!!y,l)P&&!h&&U(P);else{let m=h?.kind||P;T(),P=m}},startMusic:U,stopMusic:T,duck:A,get musicKind(){return h?.kind||null}}}var Re=(i,t=document)=>t.querySelector(i),zn=(i,t=document)=>[...t.querySelectorAll(i)];function Bt(i){return String(i??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}function Xe(i){let t=document.createElement("template");return t.innerHTML=i.trim(),t.content.firstElementChild}var sh="\xA3";function Ne(i){let t=Math.round(Number(i)||0);return`${t<0?"\u2212":""}${sh}${Math.abs(t).toLocaleString("en-GB")}`}function Zs(i){let t=Math.round(Number(i)||0);return`${t>0?"+":t<0?"\u2212":"\xB1"}${sh}${Math.abs(t).toLocaleString("en-GB")}`}function Nd(i){let t=i%100;return t>=11&&t<=13?"th":{1:"st",2:"nd",3:"rd"}[i%10]||"th"}function ns(i,t=""){return`<span class="ordinal p${i} ${t}">${i}<sup>${Nd(i)}</sup></span>`}function An(i,t=64,e=""){let n=i||{emoji:"\u{1F642}",colour:"#2f8cff"};return`<span class="avatar ${e}" style="width:${t}px;height:${t}px;font-size:${Math.round(t*.58)}px;background:${Bt(n.colour)}">${Bt(n.emoji)}</span>`}function rh(i){return i=Math.round(Number(i)||0),`${Math.floor(i/60)}:${String(i%60).padStart(2,"0")}`}function wa(i,t,e,n=1200,s=o=>String(Math.round(o)),r){let o=performance.now(),a,l=Math.round(t),h=u=>{let p=Math.min(1,(u-o)/n),d=1-(1-p)**3,c=t+(e-t)*d;i.textContent=s(c);let g=Math.round(c);r&&g!==l&&(l=g,r(g)),p<1&&(a=requestAnimationFrame(h))};return a=requestAnimationFrame(h),()=>cancelAnimationFrame(a)}function dn(i,t){return i?.runners?.find(e=>e.id===t)}function Ea(i,t){if(!i||!t)return"";if(t.type==="win")return`${dn(i,t.runnerId)?.nickname||t.runnerId} to WIN`;let e=i.matchups?.find(r=>r.id===t.matchupId);if(!e)return"Head-to-head";let n=dn(i,t.pick)?.nickname||t.pick,s=dn(i,t.pick===e.a?e.b:e.a)?.nickname||"";return`${n} to beat ${s}`}function Ta(i,t){if(t.type==="win")return dn(i,t.runnerId)?.odds?.win??0;let e=i?.matchups?.find(n=>n.id===t.matchupId);return e?t.pick===e.a?e.odds.a:e.odds.b:0}function Js(i=document.body,{count:t=120,colours:e=["#ffd23f","#ff4d5a","#2ec27e","#2f8cff","#ff6fb5","#7b4dff"],duration:n=3200}={}){let s=document.createElement("div");s.style.cssText="position:fixed;inset:0;pointer-events:none;overflow:hidden;z-index:9000";for(let r=0;r<t;r++){let o=document.createElement("i"),a=8+Math.random()*12,l=Math.random()*100,h=(Math.random()-.5)*30,u=Math.random()*720-360,p=Math.random()*400,d=n*(.6+Math.random()*.5);o.style.cssText=`position:absolute;left:${l}%;top:-30px;width:${a}px;height:${a*(.4+Math.random()*.6)}px;background:${e[r%e.length]};border:2px solid #14183c;border-radius:${Math.random()<.3?"50%":"2px"}`,o.animate([{transform:"translate(0,0) rotate(0deg)",opacity:1},{transform:`translate(${h}vw, 110vh) rotate(${u}deg)`,opacity:1}],{duration:d,delay:p,easing:"cubic-bezier(.2,.6,.4,1)",fill:"forwards"}),s.appendChild(o)}i.appendChild(s),setTimeout(()=>s.remove(),n*1.3+500)}var te="#14183c";function kd(i){let t=2166136261;for(let e of String(i))t^=e.charCodeAt(0),t=Math.imul(t,16777619);return t>>>0}var oh=["#2b1a10","#5a3418","#8a5a2b","#d8a24a","#1b1b1b","#b8432a","#9aa0a8"];function Ks(i,t){let e=parseInt(String(i||"#888888").replace("#","").padEnd(6,"8").slice(0,6),16),n=e>>16&255,s=e>>8&255,r=e&255,o=t<0?0:255,a=Math.abs(t);return n=Math.round((o-n)*a+n),s=Math.round((o-s)*a+s),r=Math.round((o-r)*a+r),`#${(1<<24|n<<16|s<<8|r).toString(16).slice(1)}`}function ah(i,{size:t=120,idSuffix:e=""}={}){let n=i?.look||{},s=i?.colour?.primary||"#ff4d5a",r=i?.colour?.secondary||"#ffffff",o=n.skin||"#f1c6a5",a=kd(i?.id+(i?.nickname||"")),l=n.hairColour||n.hairColor||oh[a%oh.length],h=n.build||"compact",u={stocky:50,tall:40,lanky:34,compact:42}[h]??42,p={tall:8,lanky:10,stocky:2,compact:4}[h]??4,d={compact:31,stocky:30,lanky:28,tall:29}[h]??30,c=60,g=50-p/2,M=i?.lane??"",x=`pc${a.toString(36)}${e}`,f=[];f.push(`<defs><clipPath id="${x}"><circle cx="60" cy="60" r="56"/></clipPath></defs>`),f.push(`<circle cx="60" cy="60" r="56" fill="${Ks(s,.55)}"/>`),f.push(`<g clip-path="url(#${x})">`),f.push(`<path d="M0 92 L120 70 L120 120 L0 120Z" fill="${Ks(s,.35)}" opacity=".6"/>`);let b=g+d+p-4;f.push(`<path d="M${c-u} 124 Q${c-u} ${b+6} ${c-14} ${b} L${c+14} ${b} Q${c+u} ${b+6} ${c+u} 124Z" fill="${s}" stroke="${te}" stroke-width="5" stroke-linejoin="round"/>`),f.push(`<path d="M${c-18} ${b+1} L${c-2} ${b+1} L${c+26} 124 L${c+8} 124Z" fill="${r}" stroke="${te}" stroke-width="3" stroke-linejoin="round"/>`),f.push(`<rect x="${c-30}" y="${b+14}" width="22" height="17" rx="3" fill="#fff" stroke="${te}" stroke-width="3" transform="rotate(-6 ${c-19} ${b+22})"/>`),f.push(`<text x="${c-19}" y="${b+28}" font-family="Lilita One, Arial Black, sans-serif" font-size="14" text-anchor="middle" fill="${te}" transform="rotate(-6 ${c-19} ${b+22})">${M}</text>`),f.push(`<rect x="${c-9}" y="${g+d-8}" width="18" height="${p+12}" fill="${o}" stroke="${te}" stroke-width="5"/>`),n.accessory==="medal"&&(f.push(`<path d="M${c-12} ${b} L${c} ${b+22} L${c+12} ${b}" fill="none" stroke="${r}" stroke-width="6"/>`),f.push(`<circle cx="${c}" cy="${b+26}" r="9" fill="#ffcf3a" stroke="${te}" stroke-width="4"/>`));let _=n.hair||"short";["long","ponytail","bob"].includes(_)&&f.push(`<path d="M${c-d-4} ${g} Q${c-d-6} ${g+d+14} ${c-d+10} ${g+d+10} L${c+d-10} ${g+d+10} Q${c+d+6} ${g+d+14} ${c+d+4} ${g}Z" fill="${l}" stroke="${te}" stroke-width="5" stroke-linejoin="round"/>`),_==="ponytail"&&f.push(`<ellipse cx="${c+d+6}" cy="${g-6}" rx="9" ry="16" fill="${l}" stroke="${te}" stroke-width="5" transform="rotate(25 ${c+d+6} ${g-6})"/>`),f.push(`<circle cx="${c-d+1}" cy="${g+4}" r="7" fill="${o}" stroke="${te}" stroke-width="5"/>`),f.push(`<circle cx="${c+d-1}" cy="${g+4}" r="7" fill="${o}" stroke="${te}" stroke-width="5"/>`),f.push(`<ellipse cx="${c}" cy="${g}" rx="${d}" ry="${d+2}" fill="${o}" stroke="${te}" stroke-width="5"/>`),f.push(`<ellipse cx="${c-16}" cy="${g+11}" rx="6" ry="4" fill="#ff8f8f" opacity=".45"/><ellipse cx="${c+16}" cy="${g+11}" rx="6" ry="4" fill="#ff8f8f" opacity=".45"/>`);let v=g-d-2,U={short:`<path d="M${c-d+2} ${g-6} Q${c-d} ${v-4} ${c} ${v-2} Q${c+d} ${v-4} ${c+d-2} ${g-6} Q${c+8} ${g-18} ${c-d+2} ${g-6}Z"/>`,buzz:`<path d="M${c-d+3} ${g-8} Q${c} ${v-6} ${c+d-3} ${g-8} Q${c} ${g-20} ${c-d+3} ${g-8}Z"/>`,curly:`<path d="M${c-d} ${g-2} q-6 -12 4 -18 q0 -12 14 -12 q6 -10 18 -4 q12 -4 16 8 q12 4 8 18 q-14 -8 -30 -6 q-16 0 -30 14z"/>`,afro:`<circle cx="${c}" cy="${g-14}" r="${d+8}"/>`,mohawk:`<path d="M${c-6} ${g-14} L${c-8} ${v-16} L${c+8} ${v-16} L${c+6} ${g-14}Z"/>`,quiff:`<path d="M${c-d+2} ${g-6} Q${c-d} ${v} ${c-4} ${v-2} Q${c+20} ${v-18} ${c+d+4} ${v+2} Q${c+d} ${g-8} ${c+d-2} ${g-6} Q${c+8} ${g-18} ${c-d+2} ${g-6}Z"/>`,bun:`<g><circle cx="${c}" cy="${v-6}" r="10"/><path d="M${c-d+2} ${g-6} Q${c-d} ${v-2} ${c} ${v} Q${c+d} ${v-2} ${c+d-2} ${g-6} Q${c} ${g-16} ${c-d+2} ${g-6}Z"/></g>`,long:`<path d="M${c-d+1} ${g+2} Q${c-d} ${v-4} ${c} ${v-2} Q${c+d} ${v-4} ${c+d-1} ${g+2} Q${c+10} ${g-16} ${c-2} ${g-12} Q${c-14} ${g-16} ${c-d+1} ${g+2}Z"/>`,bald:""};U.ponytail=U.long,U.bob=U.long;let P=U[_]??U.short;P&&f.push(`<g fill="${l}" stroke="${te}" stroke-width="5" stroke-linejoin="round">${P}</g>`);let T=n.face||"grin",A=g+1,y=(q,R)=>R?`<path d="M${q-5} ${A} Q${q} ${A+4} ${q+5} ${A}" fill="none" stroke="${te}" stroke-width="3.5" stroke-linecap="round"/>`:`<ellipse cx="${q}" cy="${A}" rx="4.2" ry="5.6" fill="${te}"/><circle cx="${q+1.4}" cy="${A-2}" r="1.5" fill="#fff"/>`,m="",S="",E=y(c-11)+y(c+11);switch(T){case"determined":case"focused":case"fierce":m=`<path d="M${c-18} ${A-12} L${c-5} ${A-7} M${c+18} ${A-12} L${c+5} ${A-7}" stroke="${te}" stroke-width="4" stroke-linecap="round"/>`,S=`<path d="M${c-9} ${g+17} L${c+9} ${g+15}" stroke="${te}" stroke-width="4" stroke-linecap="round"/>`;break;case"smug":case"cheeky":E=`<path d="M${c-16} ${A} L${c-6} ${A}" stroke="${te}" stroke-width="4" stroke-linecap="round"/>`+y(c+11),m=`<path d="M${c+5} ${A-10} Q${c+11} ${A-15} ${c+18} ${A-10}" fill="none" stroke="${te}" stroke-width="3.5" stroke-linecap="round"/>`,S=`<path d="M${c-8} ${g+15} Q${c+4} ${g+19} ${c+11} ${g+11}" fill="none" stroke="${te}" stroke-width="4" stroke-linecap="round"/>`;break;case"worried":case"nervous":case"anxious":m=`<path d="M${c-17} ${A-8} L${c-6} ${A-13} M${c+17} ${A-8} L${c+6} ${A-13}" stroke="${te}" stroke-width="3.5" stroke-linecap="round"/>`,S=`<path d="M${c-10} ${g+17} q5 -5 10 0 q5 5 10 0" fill="none" stroke="${te}" stroke-width="3.5" stroke-linecap="round"/>`;break;case"sleepy":case"tired":case"dozy":E=y(c-11,!0)+y(c+11,!0),S=`<ellipse cx="${c+2}" cy="${g+17}" rx="5" ry="4" fill="${te}"/>`;break;case"wink":E=y(c-11,!0)+y(c+11),S=`<path d="M${c-11} ${g+12} Q${c} ${g+24} ${c+11} ${g+12}Z" fill="#fff" stroke="${te}" stroke-width="3.5" stroke-linejoin="round"/>`;break;case"shocked":case"surprised":S=`<ellipse cx="${c}" cy="${g+17}" rx="6" ry="8" fill="${te}"/>`,m=`<path d="M${c-17} ${A-13} Q${c-11} ${A-17} ${c-5} ${A-13} M${c+17} ${A-13} Q${c+11} ${A-17} ${c+5} ${A-13}" fill="none" stroke="${te}" stroke-width="3.5" stroke-linecap="round"/>`;break;default:S=`<path d="M${c-13} ${g+11} Q${c} ${g+27} ${c+13} ${g+11}Z" fill="#fff" stroke="${te}" stroke-width="3.5" stroke-linejoin="round"/><path d="M${c-6} ${g+19} Q${c} ${g+23} ${c+6} ${g+19}" fill="#ff6b7a"/>`}f.push(E,m,S),f.push(`<path d="M${c-2} ${g+4} Q${c+3} ${g+8} ${c-1} ${g+10}" fill="none" stroke="${Ks(o,-.35)}" stroke-width="3" stroke-linecap="round"/>`);let I=n.accessory;I==="sunglasses"||I==="shades"?f.push(`<g stroke="${te}" stroke-width="3.5"><rect x="${c-21}" y="${A-7}" width="17" height="12" rx="4" fill="${te}"/><rect x="${c+4}" y="${A-7}" width="17" height="12" rx="4" fill="${te}"/><path d="M${c-4} ${A-3} L${c+4} ${A-3}"/></g><path d="M${c-18} ${A-4} l5 0 M${c+7} ${A-4} l5 0" stroke="#fff" stroke-width="2.5" stroke-linecap="round"/>`):I==="glasses"||I==="specs"?f.push(`<g stroke="${te}" stroke-width="3.5" fill="rgba(255,255,255,.25)"><circle cx="${c-11}" cy="${A}" r="8"/><circle cx="${c+11}" cy="${A}" r="8"/><path d="M${c-3} ${A} L${c+3} ${A}"/></g>`):I==="moustache"||I==="mustache"||I==="tache"?f.push(`<path d="M${c} ${g+12} q-8 -6 -16 0 q6 6 16 0 q8 -6 16 0 q-6 6 -16 0z" fill="${l}" stroke="${te}" stroke-width="3" stroke-linejoin="round"/>`):I==="headphones"||I==="earbuds"?f.push(`<path d="M${c-d-2} ${g+2} Q${c} ${v-22} ${c+d+2} ${g+2}" fill="none" stroke="${te}" stroke-width="7"/><rect x="${c-d-8}" y="${g-6}" width="12" height="20" rx="5" fill="${r}" stroke="${te}" stroke-width="4"/><rect x="${c+d-4}" y="${g-6}" width="12" height="20" rx="5" fill="${r}" stroke="${te}" stroke-width="4"/>`):I==="whistle"&&f.push(`<path d="M${c-10} ${b} Q${c} ${b+18} ${c+10} ${b}" fill="none" stroke="${r}" stroke-width="3"/><rect x="${c-6}" y="${b+12}" width="14" height="8" rx="3" fill="#cfd8e8" stroke="${te}" stroke-width="3"/>`);let N=n.hat;return N==="cap"||N==="baseball cap"||N==="trucker"?(f.push(`<path d="M${c-d+1} ${g-8} Q${c-d+2} ${v-10} ${c} ${v-10} Q${c+d-2} ${v-10} ${c+d-1} ${g-8}Z" fill="${s}" stroke="${te}" stroke-width="5" stroke-linejoin="round"/>`),f.push(`<path d="M${c-6} ${g-10} Q${c+24} ${g-18} ${c+d+16} ${g-6} L${c+d-2} ${g-4}Z" fill="${Ks(s,-.2)}" stroke="${te}" stroke-width="5" stroke-linejoin="round"/>`),f.push(`<circle cx="${c}" cy="${v-10}" r="3.5" fill="${r}" stroke="${te}" stroke-width="2.5"/>`)):N==="beanie"||N==="bobble"||N==="bobble hat"||N==="woolly hat"?(f.push(`<path d="M${c-d} ${g-6} Q${c-d} ${v-14} ${c} ${v-14} Q${c+d} ${v-14} ${c+d} ${g-6}Z" fill="${r}" stroke="${te}" stroke-width="5" stroke-linejoin="round"/>`),f.push(`<rect x="${c-d-2}" y="${g-12}" width="${d*2+4}" height="11" rx="5" fill="${s}" stroke="${te}" stroke-width="5"/>`),f.push(`<circle cx="${c}" cy="${v-16}" r="8" fill="${s}" stroke="${te}" stroke-width="5"/>`)):N==="headband"||N==="sweatband"?(f.push(`<path d="M${c-d} ${g-13} Q${c} ${g-22} ${c+d} ${g-13} L${c+d+1} ${g-4} Q${c} ${g-13} ${c-d-1} ${g-4}Z" fill="${r}" stroke="${te}" stroke-width="4" stroke-linejoin="round"/>`),f.push(`<path d="M${c+d} ${g-9} l12 -4 l-2 10z" fill="${r}" stroke="${te}" stroke-width="3.5" stroke-linejoin="round"/>`)):N==="visor"?f.push(`<path d="M${c-d} ${g-12} Q${c} ${g-20} ${c+d} ${g-12} L${c+d} ${g-5} Q${c} ${g-12} ${c-d} ${g-5}Z" fill="${s}" stroke="${te}" stroke-width="4"/><path d="M${c-18} ${g-10} Q${c+4} ${g-2} ${c+30} ${g-10} L${c+20} ${g-15}Z" fill="${Ks(s,-.2)}" stroke="${te}" stroke-width="4" stroke-linejoin="round"/>`):N==="bucket"||N==="bucket hat"||N==="sun hat"?f.push(`<path d="M${c-d-12} ${g-6} L${c-d+4} ${v-8} Q${c} ${v-16} ${c+d-4} ${v-8} L${c+d+12} ${g-6} Q${c} ${g-14} ${c-d-12} ${g-6}Z" fill="${r}" stroke="${te}" stroke-width="5" stroke-linejoin="round"/>`):N==="party"||N==="party hat"?f.push(`<path d="M${c-14} ${v+4} L${c+4} ${v-30} L${c+16} ${v+2}Z" fill="${s}" stroke="${te}" stroke-width="5" stroke-linejoin="round"/><circle cx="${c+4}" cy="${v-32}" r="5" fill="${r}" stroke="${te}" stroke-width="3"/>`):N==="tophat"||N==="top hat"?f.push(`<rect x="${c-18}" y="${v-30}" width="36" height="30" rx="3" fill="${te}"/><rect x="${c-18}" y="${v-10}" width="36" height="7" fill="${s}"/><rect x="${c-30}" y="${v-2}" width="60" height="8" rx="4" fill="${te}"/>`):N==="crown"?f.push(`<path d="M${c-20} ${v+2} L${c-22} ${v-20} L${c-10} ${v-8} L${c} ${v-24} L${c+10} ${v-8} L${c+22} ${v-20} L${c+20} ${v+2}Z" fill="#ffcf3a" stroke="${te}" stroke-width="4" stroke-linejoin="round"/>`):N&&f.push(`<path d="M${c-d+1} ${g-8} Q${c-d+2} ${v-10} ${c} ${v-10} Q${c+d-2} ${v-10} ${c+d-1} ${g-8}Z" fill="${r}" stroke="${te}" stroke-width="5" stroke-linejoin="round"/>`),f.push("</g>"),f.push(`<circle cx="60" cy="60" r="56" fill="none" stroke="${te}" stroke-width="6"/>`),`<svg class="portrait" viewBox="0 0 120 120" width="${t}" height="${t}" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">${f.join("")}</svg>`}var Fd=/(daniel|george|arthur|ryan|oliver|thomas|male|james|harry|guy|brian|fred|alex|aaron)/i,Od=/(kate|serena|martha|libby|sonia|hazel|susan|female|stephanie|fiona|moira|tessa|karen|emma|amy|samantha|victoria|zira|aria|jenny|catherine)/i;function lh({onLine:i,onIdle:t}={}){let e=typeof window<"u"?window.speechSynthesis:null,n=!0,s=.9,r={jeff:null,pam:null},o=[],a=null,l=null;function h(){if(!e)return;let M=e.getVoices()||[];if(!M.length)return;let x=M.filter(T=>/en[-_]GB/i.test(T.lang)),f=M.filter(T=>/^en/i.test(T.lang)),b=x.length?x:f.length?f:M,v=(T=>[...T.filter(A=>A.localService),...T.filter(A=>!A.localService)])(b),U=v.find(T=>Fd.test(T.name))||v[0],P=v.find(T=>Od.test(T.name)&&T!==U)||v.find(T=>T!==U)||U;r={jeff:U,pam:P}}e&&(h(),e.addEventListener?.("voiceschanged",h));let u=M=>Math.max(2200,String(M).split(/\s+/).length*400+600);function p(){clearTimeout(l),a=null;let M=o.shift();if(!M){t?.();return}a=M,i?.(M);let x=()=>{a===M&&p()};if(n&&e&&(r.jeff||r.pam)){let f=new SpeechSynthesisUtterance(M.text),b=M.speaker==="pam"?r.pam:r.jeff;b?(f.voice=b,f.lang=b.lang):f.lang="en-GB";let _=r.jeff===r.pam;f.pitch=M.speaker==="pam"?_?1.35:1.08:_?.8:.95,f.rate=M.rate||1.06,f.volume=s,f.onend=x,f.onerror=x;try{e.speak(f)}catch{}l=setTimeout(()=>{try{e.cancel()}catch{}x()},u(M.text)*2.2+2e3)}else l=setTimeout(x,u(M.text))}function d(M,x="jeff",{priority:f=2,interrupt:b=!1}={}){if(!M)return;let _={text:String(M),speaker:x,priority:f,at:Date.now()};for(b&&(o.length=0,c()),o.push(_);o.length>2;){let v=0;for(let U=1;U<o.length;U++)o[U].priority<o[v].priority&&(v=U);o.splice(v,1)}a||p()}function c(){if(clearTimeout(l),e)try{e.cancel()}catch{}a=null}function g(){o.length=0,c(),t?.()}return{say:d,clear:g,get busy(){return!!a||o.length>0},get available(){return!!e},setEnabled(M){if(n=!!M,!n&&e)try{e.cancel()}catch{}},setVolume(M){s=Math.max(0,Math.min(1,M))},whenIdle(M=15e3){return new Promise(x=>{let f=Date.now(),b=setInterval(()=>{(!a&&!o.length||Date.now()-f>M)&&(clearInterval(b),x())},120)})},get voiceNames(){return{jeff:r.jeff?.name,pam:r.pam?.name}}}}var zd=[1720,4220],Aa=2500;function Rn(i,t){if(t<=0)return 0;if(t>=i[200])return 5e3;let e=0,n=200;for(;n-e>1;){let r=e+n>>1;i[r]<=t?e=r:n=r}let s=(t-i[e])/(i[n]-i[e]);return(e+s)*25}function is(i,t){let e=Math.max(0,Math.min(5e3,t))/25,n=Math.floor(e),s=Math.min(200,n+1);return i[n]+(e-n)*(i[s]-i[n])}function Bd(i,{dt:t=1,debounceS:e=6}={}){let n=i.map(m=>m.id),s=Math.max(...i.map(m=>m.officialS)),r=[...i].sort((m,S)=>m.officialS-S.officialS).map(m=>m.id),o=[];for(let m=0;m<=Math.ceil(s);m+=t){let S=i.map(E=>Rn(E.progress,m));o.push({t:m,d:S})}let a=[],l=i.length,h={},u=(m,S)=>`${m}-${S}`,p=null,d=0,c=null,g=0,M=0,x=0,f=!1,b=null;for(let m of o){if(m.t<15)continue;let S=i.map(N=>m.t>=N.officialS);for(let N=0;N<l;N++)for(let q=N+1;q<l;q++){if(S[N]&&S[q])continue;let R=m.d[N]>m.d[q]?N:q,H=h[u(N,q)];if(!H){h[u(N,q)]={ahead:R,cand:R,since:m.t};continue}if(R!==H.cand&&(H.cand=R,H.since=m.t),H.cand!==H.ahead&&m.t-H.since>=e){let G=H.cand,nt=H.cand===N?q:N;H.ahead=H.cand;let st=H.since;x++,a.push({type:"overtake",raceS:st,by:n[G],on:n[nt],atM:Math.round(Rn(i[G].progress,st))})}}let E=m.d.indexOf(Math.max(...m.d));if(p===null){p=E,d=m.t;continue}E!==p?c!==E?(c=E,g=m.t):m.t-g>=e&&!S[p]&&(a.push({type:"lead_change",raceS:g,from:n[p],to:n[E],atM:Math.round(m.d[E])}),M++,m.d[E]>3500&&(f=!0),p=E,d=g,c=null):c=null;let I=[...m.d].sort((N,q)=>q-N);b===null&&I[0]-I[1]>60&&I[0]<5e3&&(b=m.t,a.push({type:"breakaway",raceS:m.t,who:n[E],gapM:Math.round(I[0]-I[1]),atM:Math.round(I[0])}))}let _=m=>Math.min(...i.map(S=>is(S.progress,m)));for(let[m,S]of zd.entries())a.push({type:"hill",raceS:_(S),lap:m+1,atM:S});a.push({type:"lap",raceS:_(Aa),atM:Aa,order:Ra(i,_(Aa))}),a.push({type:"final_stretch",raceS:_(4600),atM:4600,order:Ra(i,_(4600))});for(let m of i)a.push({type:"finish",raceS:m.officialS,who:m.id,place:r.indexOf(m.id)+1});a.sort((m,S)=>m.raceS-S.raceS);let v=i.map(m=>m.officialS).sort((m,S)=>m-S),U=m=>Ra(i,_(m)),P=U(2e3)[0],T=U(1e3)[0],A=U(4e3)[0],y=U(2e3).at(-1);return{finishOrder:r,winningMarginS:v[1]-v[0],spreadS:v.at(-1)-v[0],leadChanges:M,overtakes:x,lateLeadChange:f,leaderAt1k:T,leaderAt2k:P,leaderAt4k:A,leaderAt2kFinalPlace:r.indexOf(P)+1,winnerPlaceAt2k:U(2e3).indexOf(r[0])+1,winnerPlaceAt1k:U(1e3).indexOf(r[0])+1,lastAt2kFinalPlace:r.indexOf(y)+1,breakawayAtS:b,events:a}}function Ra(i,t){return i.map(e=>({id:e.id,d:Rn(e.progress,t),f:e.officialS})).sort((e,n)=>n.d-e.d||e.f-n.f).map(e=>e.id)}function Hd(i,{targetS:t=140}={}){let e=Math.max(...i.map(f=>f.officialS)),n=Math.min(...i.map(f=>is(f.progress,4500))),s=45,r=n,o=e+3,a=o-r,l=4,h=Math.min(t*.45,Math.max(25,a/1.6)),u=a/h,p=r-s,d=Math.max(30,t-s/l-h),c=p/d,g=f=>{let b=ch(s-10,s+10,f),_=ch(r-60,r,f);return l+(c-l)*b+(u-c)*_},M=[[0,0]],x=0;for(let f=1;f<=Math.ceil(o);f++)x+=1/g(f-.5),M.push([f,Math.round(x*1e3)/1e3]);return{map:M,durationS:Math.round(x*10)/10,raceEndS:Math.ceil(o),rates:{start:l,middle:Math.round(c*10)/10,finale:Math.round(u*100)/100}}}function ch(i,t,e){let n=Math.max(0,Math.min(1,(e-i)/(t-i)));return n*n*(3-2*n)}function Gr(i,t){let e=i.map;if(t<=0)return 0;if(t>=e.length-1)return e.at(-1)[1];let n=Math.floor(t),s=t-n;return e[n][1]+s*(e[n+1][1]-e[n][1])}function ss(i,t){let e=i.map;if(t<=0)return 0;let n=0,s=e.length-1;if(t>=e[s][1])return e[s][0];for(;s-n>1;){let r=n+s>>1;e[r][1]<=t?n=r:s=r}return e[n][0]+(t-e[n][1])/(e[s][1]-e[n][1])}function hh(i,t,e={}){let n=Bd(t),s=Hd(t,e),r=[...n.events];for(let a of t)for(let[l,h]of(a.diversions||[]).entries())r.push({type:"diversion",who:a.id,lap:l+1,raceS:is(a.progress,h.fromM),endRaceS:is(a.progress,h.toM),fromM:h.fromM,toM:h.toM});r.sort((a,l)=>a.raceS-l.raceS);let o=r.map(a=>({...a,broadcastS:Math.round(Gr(s,a.raceS)*100)/100,...a.endRaceS!=null?{endBroadcastS:Math.round(Gr(s,a.endRaceS)*100)/100}:{}}));return{roundId:i,courseLengthM:5e3,runners:t.map(a=>({id:a.id,officialS:a.officialS,progress:a.progress,pacingSource:a.pacingSource,diversions:a.diversions||null})),timeMap:s,events:o,finishOrder:n.finishOrder,summary:{winningMarginS:n.winningMarginS,spreadS:n.spreadS,leadChanges:n.leadChanges,overtakes:n.overtakes,lateLeadChange:n.lateLeadChange}}}var rs="#14183c";function uh(i,{course:t,round:e,plan:n,speed:s=1}){let r=document.createElement("canvas");r.style.cssText="position:absolute;inset:0;width:100%;height:100%;display:block",i.appendChild(r);let o=r.getContext("2d",{alpha:!1}),a=e?.runners||[],l=t?.points||[],h=0,u=!1,p=!1,d=0,c="idle",g=0,M=0,x=null,f=null,b=[],_=null,v=1/0,U=-1/0,P=1/0,T=-1/0;for(let R of l)v=Math.min(v,R[0]),U=Math.max(U,R[0]),P=Math.min(P,R[2]),T=Math.max(T,R[2]);function A(){let R=Math.min(1,1280/Math.max(1,i.clientWidth));r.width=Math.round(i.clientWidth*R),r.height=Math.round(i.clientHeight*R)}A();let y=new ResizeObserver(A);y.observe(i);function m(R,H){let G=r.width,nt=r.height,st=nt*.16,z=nt*.24,St=G*.08,K=Math.min((G-St*2-G*.22)/(U-v||1),(nt-st-z)/(T-P||1)),Y=St+(G-St*2-G*.22-(U-v)*K)/2,W=st+(nt-st-z-(T-P)*K)/2;return[Y+(R-v)*K,W+(H-P)*K,K]}function S(R){if(!l.length)return[0,0];let H=Math.max(0,Math.min(l.length-1,R/5e3*(l.length-1))),G=Math.floor(H),nt=Math.min(l.length-1,G+1),st=H-G;return[l[G][0]+(l[nt][0]-l[G][0])*st,l[G][2]+(l[nt][2]-l[G][2])*st]}let E=null;function I(){let R=r.width,H=r.height;E=document.createElement("canvas"),E.width=R,E.height=H;let G=E.getContext("2d"),nt=G.createLinearGradient(0,0,0,H);nt.addColorStop(0,"#45cf86"),nt.addColorStop(1,"#1f9e5c"),G.fillStyle=nt,G.fillRect(0,0,R,H),G.fillStyle="rgba(255,255,255,.05)";let st=R/1920;for(let z=-H;z<R;z+=160*st)G.beginPath(),G.moveTo(z,0),G.lineTo(z+80*st,0),G.lineTo(z+80*st+H*.5,H),G.lineTo(z+H*.5,H),G.fill();if(l.length){let z=new Path2D;l.forEach((W,V)=>{let[Z,ot]=m(W[0],W[2]);V?z.lineTo(Z,ot):z.moveTo(Z,ot)});let St=m(0,0)[2];G.lineCap="round",G.lineJoin="round",G.strokeStyle=rs,G.lineWidth=Math.max(16,St*14),G.stroke(z),G.strokeStyle="#fff",G.lineWidth=Math.max(12,St*11),G.stroke(z),G.strokeStyle="#6f84a8",G.lineWidth=Math.max(8,St*8),G.stroke(z);let[K,Y]=m(...t.finish?[t.finish[0],t.finish[1]]:[l.at(-1)[0],l.at(-1)[2]]);G.save(),G.translate(K,Y);for(let W=-2;W<2;W++)for(let V=-1;V<1;V++)G.fillStyle=W+V&1?"#fff":rs,G.fillRect(W*8,V*8,8,8);G.restore()}}function N(){let R=r.width,H=r.height;(!E||E.width!==R||E.height!==H)&&I(),o.drawImage(E,0,0);let G=n?ss(n.timeMap,d):0,nt=(n?.runners||[]).map(V=>({id:V.id,m:Rn(V.progress,G),done:G>=V.officialS,f:V.officialS}));nt.sort((V,Z)=>Z.m-V.m||V.f-Z.f);let st=Math.max(14,R/90);for(let V of[...nt].reverse()){let Z=a.find(Tt=>Tt.id===V.id),[ot,gt]=m(...S(V.m));o.beginPath(),o.arc(ot,gt+4,st,0,Math.PI*2),o.fillStyle="rgba(0,0,0,.25)",o.fill(),o.beginPath(),o.arc(ot,gt,st,0,Math.PI*2),o.fillStyle=Z?.colour?.primary||"#fff",o.fill(),o.lineWidth=st*.28,o.strokeStyle=rs,o.stroke(),o.fillStyle="#fff",o.font=`${Math.round(st*1.15)}px "Lilita One", sans-serif`,o.textAlign="center",o.textBaseline="middle",o.lineWidth=st*.25,o.strokeText(String(Z?.lane??""),ot,gt+1),o.fillText(String(Z?.lane??""),ot,gt+1)}let z=R*.77,St=H*.16,K=H*.075;o.font=`${Math.round(H*.035)}px "Lilita One", sans-serif`,o.textAlign="left",o.textBaseline="middle",nt.forEach((V,Z)=>{let ot=a.find(Tt=>Tt.id===V.id),gt=St+Z*K;o.save(),o.translate(z,gt),o.transform(1,0,-.14,1,0,0),o.fillStyle=rs,o.fillRect(4,6,R*.2,K*.82),o.fillStyle=Z===0?"#ffd23f":"#2a62e0",o.fillRect(0,0,R*.2,K*.82),o.fillStyle=ot?.colour?.primary||"#fff",o.fillRect(0,0,R*.012,K*.82),o.restore(),o.fillStyle=Z===0?rs:"#fff",o.fillText(`${Z+1}  ${(ot?.nickname||V.id).slice(0,18)}`,z+R*.02,gt+K*.41)}),o.font=`${Math.round(H*.04)}px "Lilita One", sans-serif`,o.textAlign="left";let Y=Math.floor(G),W=`${Math.floor(Y/60)}:${String(Y%60).padStart(2,"0")}`;o.lineWidth=8,o.strokeStyle=rs,o.strokeText(W,z,St-H*.05),o.fillStyle="#ffd23f",o.fillText(W,z,St-H*.05)}function q(R){if(p)return;let H=g?Math.min(.1,(R-g)/1e3):0;if(g=R,c==="race"&&!u){for(d+=H*s;b.length&&b[0].broadcastS<=d;){let G=b.shift();try{x?.(G)}catch(nt){console.warn(nt)}}if(d>=(n.timeMap.durationS||0)+1.5){c="done";let G=f;f=null,G?.()}}R-M>30&&(M=R,N()),h=requestAnimationFrame(q)}return h=requestAnimationFrame(q),{kind:"2d",playIntro(R){setTimeout(()=>R?.(),10)},playRace(R,H){x=R,f=H,b=[...n.events||[],...n.commentary||[]].sort((G,nt)=>G.broadcastS-nt.broadcastS),d=0,c="race"},showPodium(R){_=R},setPaused(R){u=!!R},dispose(){p=!0,cancelAnimationFrame(h),y.disconnect(),r.remove()}}}var Vs={};Ud(Vs,{createRaceView:()=>By});var Pc="170";var Vd=0,dh=1,Gd=2;var Tu=1,Lc=2,Qn=3,Ai=0,Je=1,Oe=2,Ei=0,As=1,fh=2,ph=3,mh=4,$d=5,Hi=100,Wd=101,Xd=102,qd=103,Yd=104,Zd=200,Jd=201,Kd=202,jd=203,cl=204,hl=205,Qd=206,tf=207,ef=208,nf=209,sf=210,rf=211,of=212,af=213,lf=214,ul=0,dl=1,fl=2,Ps=3,pl=4,ml=5,gl=6,xl=7,Au=0,cf=1,hf=2,Gn=0,uf=1,df=2,ff=3,pf=4,mf=5,gf=6,xf=7;var Ru=300,Ls=301,Ds=302,yl=303,vl=304,ca=306,Wi=1e3,Gi=1001,_l=1002,an=1003,yf=1004;var $r=1005;var Hn=1006,Ca=1007;var $i=1008;var ii=1009,Cu=1010,Iu=1011,mr=1012,Dc=1013,Xi=1014,Vn=1015,Cr=1016,Uc=1017,Nc=1018,Us=1020,Pu=35902,Lu=1021,Du=1022,_n=1023,Uu=1024,Nu=1025,Rs=1026,Ns=1027,kc=1028,Fc=1029,ku=1030,Oc=1031;var zc=1033,bo=33776,So=33777,wo=33778,Eo=33779,Ml=35840,bl=35841,Sl=35842,wl=35843,El=36196,Tl=37492,Al=37496,Rl=37808,Cl=37809,Il=37810,Pl=37811,Ll=37812,Dl=37813,Ul=37814,Nl=37815,kl=37816,Fl=37817,Ol=37818,zl=37819,Bl=37820,Hl=37821,To=36492,Vl=36494,Gl=36495,Fu=36283,$l=36284,Wl=36285,Xl=36286;var Ao=2300,ql=2301,Ia=2302,gh=2400,xh=2401,yh=2402;var vf=3200,_f=3201;var Ou=0,Mf=1,Si="",Ye="srgb",Bs="srgb-linear",ha="linear",Me="srgb";var os=7680;var vh=519,bf=512,Sf=513,wf=514,zu=515,Ef=516,Tf=517,Af=518,Rf=519,Yl=35044;var _h="300 es",ei=2e3,Ro=2001,Ri=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},Qe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Mh=1234567,hr=Math.PI/180,gr=180/Math.PI;function $n(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Qe[i&255]+Qe[i>>8&255]+Qe[i>>16&255]+Qe[i>>24&255]+"-"+Qe[t&255]+Qe[t>>8&255]+"-"+Qe[t>>16&15|64]+Qe[t>>24&255]+"-"+Qe[e&63|128]+Qe[e>>8&255]+"-"+Qe[e>>16&255]+Qe[e>>24&255]+Qe[n&255]+Qe[n>>8&255]+Qe[n>>16&255]+Qe[n>>24&255]).toLowerCase()}function Ze(i,t,e){return Math.max(t,Math.min(e,i))}function Bc(i,t){return(i%t+t)%t}function Cf(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function If(i,t,e){return i!==t?(e-i)/(t-i):0}function ur(i,t,e){return(1-e)*i+e*t}function Pf(i,t,e,n){return ur(i,t,1-Math.exp(-e*n))}function Lf(i,t=1){return t-Math.abs(Bc(i,t*2)-t)}function Df(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Uf(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Nf(i,t){return i+Math.floor(Math.random()*(t-i+1))}function kf(i,t){return i+Math.random()*(t-i)}function Ff(i){return i*(.5-Math.random())}function Of(i){i!==void 0&&(Mh=i);let t=Mh+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function zf(i){return i*hr}function Bf(i){return i*gr}function Hf(i){return(i&i-1)===0&&i!==0}function Vf(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Gf(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function $f(i,t,e,n,s){let r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),h=r((t+n)/2),u=o((t+n)/2),p=r((t-n)/2),d=o((t-n)/2),c=r((n-t)/2),g=o((n-t)/2);switch(s){case"XYX":i.set(a*u,l*p,l*d,a*h);break;case"YZY":i.set(l*d,a*u,l*p,a*h);break;case"ZXZ":i.set(l*p,l*d,a*u,a*h);break;case"XZX":i.set(a*u,l*g,l*c,a*h);break;case"YXY":i.set(l*c,a*u,l*g,a*h);break;case"ZYZ":i.set(l*g,l*c,a*u,a*h);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Ln(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ye(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Bu={DEG2RAD:hr,RAD2DEG:gr,generateUUID:$n,clamp:Ze,euclideanModulo:Bc,mapLinear:Cf,inverseLerp:If,lerp:ur,damp:Pf,pingpong:Lf,smoothstep:Df,smootherstep:Uf,randInt:Nf,randFloat:kf,randFloatSpread:Ff,seededRandom:Of,degToRad:zf,radToDeg:Bf,isPowerOfTwo:Hf,ceilPowerOfTwo:Vf,floorPowerOfTwo:Gf,setQuaternionFromProperEuler:$f,normalize:ye,denormalize:Ln},Ct=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Ze(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ce=class i{constructor(t,e,n,s,r,o,a,l,h){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,h)}set(t,e,n,s,r,o,a,l,h){let u=this.elements;return u[0]=t,u[1]=s,u[2]=a,u[3]=e,u[4]=r,u[5]=l,u[6]=n,u[7]=o,u[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],h=n[1],u=n[4],p=n[7],d=n[2],c=n[5],g=n[8],M=s[0],x=s[3],f=s[6],b=s[1],_=s[4],v=s[7],U=s[2],P=s[5],T=s[8];return r[0]=o*M+a*b+l*U,r[3]=o*x+a*_+l*P,r[6]=o*f+a*v+l*T,r[1]=h*M+u*b+p*U,r[4]=h*x+u*_+p*P,r[7]=h*f+u*v+p*T,r[2]=d*M+c*b+g*U,r[5]=d*x+c*_+g*P,r[8]=d*f+c*v+g*T,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],h=t[7],u=t[8];return e*o*u-e*a*h-n*r*u+n*a*l+s*r*h-s*o*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],h=t[7],u=t[8],p=u*o-a*h,d=a*l-u*r,c=h*r-o*l,g=e*p+n*d+s*c;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let M=1/g;return t[0]=p*M,t[1]=(s*h-u*n)*M,t[2]=(a*n-s*o)*M,t[3]=d*M,t[4]=(u*e-s*l)*M,t[5]=(s*r-a*e)*M,t[6]=c*M,t[7]=(n*l-h*e)*M,t[8]=(o*e-n*r)*M,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let l=Math.cos(r),h=Math.sin(r);return this.set(n*l,n*h,-n*(l*o+h*a)+o+t,-s*h,s*l,-s*(-h*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Pa.makeScale(t,e)),this}rotate(t){return this.premultiply(Pa.makeRotation(-t)),this}translate(t,e){return this.premultiply(Pa.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Pa=new ce;function Hu(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Co(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Wf(){let i=Co("canvas");return i.style.display="block",i}var bh={};function lr(i){i in bh||(bh[i]=!0,console.warn(i))}function Xf(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function qf(i){let t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Yf(i){let t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var de={enabled:!0,workingColorSpace:Bs,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===Me&&(i.r=ni(i.r),i.g=ni(i.g),i.b=ni(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===Me&&(i.r=Cs(i.r),i.g=Cs(i.g),i.b=Cs(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Si?ha:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function ni(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Cs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Sh=[.64,.33,.3,.6,.15,.06],wh=[.2126,.7152,.0722],Eh=[.3127,.329],Th=new ce().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ah=new ce().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);de.define({[Bs]:{primaries:Sh,whitePoint:Eh,transfer:ha,toXYZ:Th,fromXYZ:Ah,luminanceCoefficients:wh,workingColorSpaceConfig:{unpackColorSpace:Ye},outputColorSpaceConfig:{drawingBufferColorSpace:Ye}},[Ye]:{primaries:Sh,whitePoint:Eh,transfer:Me,toXYZ:Th,fromXYZ:Ah,luminanceCoefficients:wh,outputColorSpaceConfig:{drawingBufferColorSpace:Ye}}});var as,Zl=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{as===void 0&&(as=Co("canvas")),as.width=t.width,as.height=t.height;let n=as.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=as}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Co("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=ni(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ni(e[n]/255)*255):e[n]=ni(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Zf=0,Io=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Zf++}),this.uuid=$n(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(La(s[o].image)):r.push(La(s[o]))}else r=La(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function La(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Zl.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Jf=0,fn=class i extends Ri{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Gi,s=Gi,r=Hn,o=$i,a=_n,l=ii,h=i.DEFAULT_ANISOTROPY,u=Si){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Jf++}),this.uuid=$n(),this.name="",this.source=new Io(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=h,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ct(0,0),this.repeat=new Ct(1,1),this.center=new Ct(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ce,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Ru)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Wi:t.x=t.x-Math.floor(t.x);break;case Gi:t.x=t.x<0?0:1;break;case _l:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Wi:t.y=t.y-Math.floor(t.y);break;case Gi:t.y=t.y<0?0:1;break;case _l:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};fn.DEFAULT_IMAGE=null;fn.DEFAULT_MAPPING=Ru;fn.DEFAULT_ANISOTROPY=1;var ke=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,h=l[0],u=l[4],p=l[8],d=l[1],c=l[5],g=l[9],M=l[2],x=l[6],f=l[10];if(Math.abs(u-d)<.01&&Math.abs(p-M)<.01&&Math.abs(g-x)<.01){if(Math.abs(u+d)<.1&&Math.abs(p+M)<.1&&Math.abs(g+x)<.1&&Math.abs(h+c+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let _=(h+1)/2,v=(c+1)/2,U=(f+1)/2,P=(u+d)/4,T=(p+M)/4,A=(g+x)/4;return _>v&&_>U?_<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(_),s=P/n,r=T/n):v>U?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=P/s,r=A/s):U<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(U),n=T/r,s=A/r),this.set(n,s,r,e),this}let b=Math.sqrt((x-g)*(x-g)+(p-M)*(p-M)+(d-u)*(d-u));return Math.abs(b)<.001&&(b=1),this.x=(x-g)/b,this.y=(p-M)/b,this.z=(d-u)/b,this.w=Math.acos((h+c+f-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Jl=class extends Ri{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ke(0,0,t,e),this.scissorTest=!1,this.viewport=new ke(0,0,t,e);let s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Hn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new fn(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new Io(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},si=class extends Jl{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Po=class extends fn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=an,this.minFilter=an,this.wrapR=Gi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Kl=class extends fn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=an,this.minFilter=an,this.wrapR=Gi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Wn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],h=n[s+1],u=n[s+2],p=n[s+3],d=r[o+0],c=r[o+1],g=r[o+2],M=r[o+3];if(a===0){t[e+0]=l,t[e+1]=h,t[e+2]=u,t[e+3]=p;return}if(a===1){t[e+0]=d,t[e+1]=c,t[e+2]=g,t[e+3]=M;return}if(p!==M||l!==d||h!==c||u!==g){let x=1-a,f=l*d+h*c+u*g+p*M,b=f>=0?1:-1,_=1-f*f;if(_>Number.EPSILON){let U=Math.sqrt(_),P=Math.atan2(U,f*b);x=Math.sin(x*P)/U,a=Math.sin(a*P)/U}let v=a*b;if(l=l*x+d*v,h=h*x+c*v,u=u*x+g*v,p=p*x+M*v,x===1-a){let U=1/Math.sqrt(l*l+h*h+u*u+p*p);l*=U,h*=U,u*=U,p*=U}}t[e]=l,t[e+1]=h,t[e+2]=u,t[e+3]=p}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],l=n[s+1],h=n[s+2],u=n[s+3],p=r[o],d=r[o+1],c=r[o+2],g=r[o+3];return t[e]=a*g+u*p+l*c-h*d,t[e+1]=l*g+u*d+h*p-a*c,t[e+2]=h*g+u*c+a*d-l*p,t[e+3]=u*g-a*p-l*d-h*c,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,h=a(n/2),u=a(s/2),p=a(r/2),d=l(n/2),c=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=d*u*p+h*c*g,this._y=h*c*p-d*u*g,this._z=h*u*g+d*c*p,this._w=h*u*p-d*c*g;break;case"YXZ":this._x=d*u*p+h*c*g,this._y=h*c*p-d*u*g,this._z=h*u*g-d*c*p,this._w=h*u*p+d*c*g;break;case"ZXY":this._x=d*u*p-h*c*g,this._y=h*c*p+d*u*g,this._z=h*u*g+d*c*p,this._w=h*u*p-d*c*g;break;case"ZYX":this._x=d*u*p-h*c*g,this._y=h*c*p+d*u*g,this._z=h*u*g-d*c*p,this._w=h*u*p+d*c*g;break;case"YZX":this._x=d*u*p+h*c*g,this._y=h*c*p+d*u*g,this._z=h*u*g-d*c*p,this._w=h*u*p-d*c*g;break;case"XZY":this._x=d*u*p-h*c*g,this._y=h*c*p-d*u*g,this._z=h*u*g+d*c*p,this._w=h*u*p+d*c*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],h=e[2],u=e[6],p=e[10],d=n+a+p;if(d>0){let c=.5/Math.sqrt(d+1);this._w=.25/c,this._x=(u-l)*c,this._y=(r-h)*c,this._z=(o-s)*c}else if(n>a&&n>p){let c=2*Math.sqrt(1+n-a-p);this._w=(u-l)/c,this._x=.25*c,this._y=(s+o)/c,this._z=(r+h)/c}else if(a>p){let c=2*Math.sqrt(1+a-n-p);this._w=(r-h)/c,this._x=(s+o)/c,this._y=.25*c,this._z=(l+u)/c}else{let c=2*Math.sqrt(1+p-n-a);this._w=(o-s)/c,this._x=(r+h)/c,this._y=(l+u)/c,this._z=.25*c}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ze(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,h=e._z,u=e._w;return this._x=n*u+o*a+s*h-r*l,this._y=s*u+o*l+r*a-n*h,this._z=r*u+o*h+n*l-s*a,this._w=o*u-n*a-s*l-r*h,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let c=1-e;return this._w=c*o+e*this._w,this._x=c*n+e*this._x,this._y=c*s+e*this._y,this._z=c*r+e*this._z,this.normalize(),this}let h=Math.sqrt(l),u=Math.atan2(h,a),p=Math.sin((1-e)*u)/h,d=Math.sin(e*u)/h;return this._w=o*p+this._w*d,this._x=n*p+this._x*d,this._y=s*p+this._y*d,this._z=r*p+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},$=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Rh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Rh.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,h=2*(o*s-a*n),u=2*(a*e-r*s),p=2*(r*n-o*e);return this.x=e+l*h+o*p-a*u,this.y=n+l*u+a*h-r*p,this.z=s+l*p+r*u-o*h,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Da.copy(this).projectOnVector(t),this.sub(Da)}reflect(t){return this.sub(Da.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Ze(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Da=new $,Rh=new Wn,ri=class{constructor(t=new $(1/0,1/0,1/0),e=new $(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Cn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Cn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Cn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Cn):Cn.fromBufferAttribute(r,o),Cn.applyMatrix4(t.matrixWorld),this.expandByPoint(Cn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Wr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Wr.copy(n.boundingBox)),Wr.applyMatrix4(t.matrixWorld),this.union(Wr)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Cn),Cn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(js),Xr.subVectors(this.max,js),ls.subVectors(t.a,js),cs.subVectors(t.b,js),hs.subVectors(t.c,js),xi.subVectors(cs,ls),yi.subVectors(hs,cs),Ui.subVectors(ls,hs);let e=[0,-xi.z,xi.y,0,-yi.z,yi.y,0,-Ui.z,Ui.y,xi.z,0,-xi.x,yi.z,0,-yi.x,Ui.z,0,-Ui.x,-xi.y,xi.x,0,-yi.y,yi.x,0,-Ui.y,Ui.x,0];return!Ua(e,ls,cs,hs,Xr)||(e=[1,0,0,0,1,0,0,0,1],!Ua(e,ls,cs,hs,Xr))?!1:(qr.crossVectors(xi,yi),e=[qr.x,qr.y,qr.z],Ua(e,ls,cs,hs,Xr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Cn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Cn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Yn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Yn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Yn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Yn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Yn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Yn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Yn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Yn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Yn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},Yn=[new $,new $,new $,new $,new $,new $,new $,new $],Cn=new $,Wr=new ri,ls=new $,cs=new $,hs=new $,xi=new $,yi=new $,Ui=new $,js=new $,Xr=new $,qr=new $,Ni=new $;function Ua(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Ni.fromArray(i,r);let a=s.x*Math.abs(Ni.x)+s.y*Math.abs(Ni.y)+s.z*Math.abs(Ni.z),l=t.dot(Ni),h=e.dot(Ni),u=n.dot(Ni);if(Math.max(-Math.max(l,h,u),Math.min(l,h,u))>a)return!1}return!0}var Kf=new ri,Qs=new $,Na=new $,Ci=class{constructor(t=new $,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Kf.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Qs.subVectors(t,this.center);let e=Qs.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Qs,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Na.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Qs.copy(t.center).add(Na)),this.expandByPoint(Qs.copy(t.center).sub(Na))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},Zn=new $,ka=new $,Yr=new $,vi=new $,Fa=new $,Zr=new $,Oa=new $,Lo=class{constructor(t=new $,e=new $(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Zn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Zn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Zn.copy(this.origin).addScaledVector(this.direction,e),Zn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){ka.copy(t).add(e).multiplyScalar(.5),Yr.copy(e).sub(t).normalize(),vi.copy(this.origin).sub(ka);let r=t.distanceTo(e)*.5,o=-this.direction.dot(Yr),a=vi.dot(this.direction),l=-vi.dot(Yr),h=vi.lengthSq(),u=Math.abs(1-o*o),p,d,c,g;if(u>0)if(p=o*l-a,d=o*a-l,g=r*u,p>=0)if(d>=-g)if(d<=g){let M=1/u;p*=M,d*=M,c=p*(p+o*d+2*a)+d*(o*p+d+2*l)+h}else d=r,p=Math.max(0,-(o*d+a)),c=-p*p+d*(d+2*l)+h;else d=-r,p=Math.max(0,-(o*d+a)),c=-p*p+d*(d+2*l)+h;else d<=-g?(p=Math.max(0,-(-o*r+a)),d=p>0?-r:Math.min(Math.max(-r,-l),r),c=-p*p+d*(d+2*l)+h):d<=g?(p=0,d=Math.min(Math.max(-r,-l),r),c=d*(d+2*l)+h):(p=Math.max(0,-(o*r+a)),d=p>0?r:Math.min(Math.max(-r,-l),r),c=-p*p+d*(d+2*l)+h);else d=o>0?-r:r,p=Math.max(0,-(o*d+a)),c=-p*p+d*(d+2*l)+h;return n&&n.copy(this.origin).addScaledVector(this.direction,p),s&&s.copy(ka).addScaledVector(Yr,d),c}intersectSphere(t,e){Zn.subVectors(t.center,this.origin);let n=Zn.dot(this.direction),s=Zn.dot(Zn)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l,h=1/this.direction.x,u=1/this.direction.y,p=1/this.direction.z,d=this.origin;return h>=0?(n=(t.min.x-d.x)*h,s=(t.max.x-d.x)*h):(n=(t.max.x-d.x)*h,s=(t.min.x-d.x)*h),u>=0?(r=(t.min.y-d.y)*u,o=(t.max.y-d.y)*u):(r=(t.max.y-d.y)*u,o=(t.min.y-d.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),p>=0?(a=(t.min.z-d.z)*p,l=(t.max.z-d.z)*p):(a=(t.max.z-d.z)*p,l=(t.min.z-d.z)*p),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Zn)!==null}intersectTriangle(t,e,n,s,r){Fa.subVectors(e,t),Zr.subVectors(n,t),Oa.crossVectors(Fa,Zr);let o=this.direction.dot(Oa),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;vi.subVectors(this.origin,t);let l=a*this.direction.dot(Zr.crossVectors(vi,Zr));if(l<0)return null;let h=a*this.direction.dot(Fa.cross(vi));if(h<0||l+h>o)return null;let u=-a*vi.dot(Oa);return u<0?null:this.at(u/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},pe=class i{constructor(t,e,n,s,r,o,a,l,h,u,p,d,c,g,M,x){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,h,u,p,d,c,g,M,x)}set(t,e,n,s,r,o,a,l,h,u,p,d,c,g,M,x){let f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=s,f[1]=r,f[5]=o,f[9]=a,f[13]=l,f[2]=h,f[6]=u,f[10]=p,f[14]=d,f[3]=c,f[7]=g,f[11]=M,f[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/us.setFromMatrixColumn(t,0).length(),r=1/us.setFromMatrixColumn(t,1).length(),o=1/us.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),h=Math.sin(s),u=Math.cos(r),p=Math.sin(r);if(t.order==="XYZ"){let d=o*u,c=o*p,g=a*u,M=a*p;e[0]=l*u,e[4]=-l*p,e[8]=h,e[1]=c+g*h,e[5]=d-M*h,e[9]=-a*l,e[2]=M-d*h,e[6]=g+c*h,e[10]=o*l}else if(t.order==="YXZ"){let d=l*u,c=l*p,g=h*u,M=h*p;e[0]=d+M*a,e[4]=g*a-c,e[8]=o*h,e[1]=o*p,e[5]=o*u,e[9]=-a,e[2]=c*a-g,e[6]=M+d*a,e[10]=o*l}else if(t.order==="ZXY"){let d=l*u,c=l*p,g=h*u,M=h*p;e[0]=d-M*a,e[4]=-o*p,e[8]=g+c*a,e[1]=c+g*a,e[5]=o*u,e[9]=M-d*a,e[2]=-o*h,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let d=o*u,c=o*p,g=a*u,M=a*p;e[0]=l*u,e[4]=g*h-c,e[8]=d*h+M,e[1]=l*p,e[5]=M*h+d,e[9]=c*h-g,e[2]=-h,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let d=o*l,c=o*h,g=a*l,M=a*h;e[0]=l*u,e[4]=M-d*p,e[8]=g*p+c,e[1]=p,e[5]=o*u,e[9]=-a*u,e[2]=-h*u,e[6]=c*p+g,e[10]=d-M*p}else if(t.order==="XZY"){let d=o*l,c=o*h,g=a*l,M=a*h;e[0]=l*u,e[4]=-p,e[8]=h*u,e[1]=d*p+M,e[5]=o*u,e[9]=c*p-g,e[2]=g*p-c,e[6]=a*u,e[10]=M*p+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(jf,t,Qf)}lookAt(t,e,n){let s=this.elements;return yn.subVectors(t,e),yn.lengthSq()===0&&(yn.z=1),yn.normalize(),_i.crossVectors(n,yn),_i.lengthSq()===0&&(Math.abs(n.z)===1?yn.x+=1e-4:yn.z+=1e-4,yn.normalize(),_i.crossVectors(n,yn)),_i.normalize(),Jr.crossVectors(yn,_i),s[0]=_i.x,s[4]=Jr.x,s[8]=yn.x,s[1]=_i.y,s[5]=Jr.y,s[9]=yn.y,s[2]=_i.z,s[6]=Jr.z,s[10]=yn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],h=n[12],u=n[1],p=n[5],d=n[9],c=n[13],g=n[2],M=n[6],x=n[10],f=n[14],b=n[3],_=n[7],v=n[11],U=n[15],P=s[0],T=s[4],A=s[8],y=s[12],m=s[1],S=s[5],E=s[9],I=s[13],N=s[2],q=s[6],R=s[10],H=s[14],G=s[3],nt=s[7],st=s[11],z=s[15];return r[0]=o*P+a*m+l*N+h*G,r[4]=o*T+a*S+l*q+h*nt,r[8]=o*A+a*E+l*R+h*st,r[12]=o*y+a*I+l*H+h*z,r[1]=u*P+p*m+d*N+c*G,r[5]=u*T+p*S+d*q+c*nt,r[9]=u*A+p*E+d*R+c*st,r[13]=u*y+p*I+d*H+c*z,r[2]=g*P+M*m+x*N+f*G,r[6]=g*T+M*S+x*q+f*nt,r[10]=g*A+M*E+x*R+f*st,r[14]=g*y+M*I+x*H+f*z,r[3]=b*P+_*m+v*N+U*G,r[7]=b*T+_*S+v*q+U*nt,r[11]=b*A+_*E+v*R+U*st,r[15]=b*y+_*I+v*H+U*z,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],h=t[13],u=t[2],p=t[6],d=t[10],c=t[14],g=t[3],M=t[7],x=t[11],f=t[15];return g*(+r*l*p-s*h*p-r*a*d+n*h*d+s*a*c-n*l*c)+M*(+e*l*c-e*h*d+r*o*d-s*o*c+s*h*u-r*l*u)+x*(+e*h*p-e*a*c-r*o*p+n*o*c+r*a*u-n*h*u)+f*(-s*a*u-e*l*p+e*a*d+s*o*p-n*o*d+n*l*u)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],h=t[7],u=t[8],p=t[9],d=t[10],c=t[11],g=t[12],M=t[13],x=t[14],f=t[15],b=p*x*h-M*d*h+M*l*c-a*x*c-p*l*f+a*d*f,_=g*d*h-u*x*h-g*l*c+o*x*c+u*l*f-o*d*f,v=u*M*h-g*p*h+g*a*c-o*M*c-u*a*f+o*p*f,U=g*p*l-u*M*l-g*a*d+o*M*d+u*a*x-o*p*x,P=e*b+n*_+s*v+r*U;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let T=1/P;return t[0]=b*T,t[1]=(M*d*r-p*x*r-M*s*c+n*x*c+p*s*f-n*d*f)*T,t[2]=(a*x*r-M*l*r+M*s*h-n*x*h-a*s*f+n*l*f)*T,t[3]=(p*l*r-a*d*r-p*s*h+n*d*h+a*s*c-n*l*c)*T,t[4]=_*T,t[5]=(u*x*r-g*d*r+g*s*c-e*x*c-u*s*f+e*d*f)*T,t[6]=(g*l*r-o*x*r-g*s*h+e*x*h+o*s*f-e*l*f)*T,t[7]=(o*d*r-u*l*r+u*s*h-e*d*h-o*s*c+e*l*c)*T,t[8]=v*T,t[9]=(g*p*r-u*M*r-g*n*c+e*M*c+u*n*f-e*p*f)*T,t[10]=(o*M*r-g*a*r+g*n*h-e*M*h-o*n*f+e*a*f)*T,t[11]=(u*a*r-o*p*r-u*n*h+e*p*h+o*n*c-e*a*c)*T,t[12]=U*T,t[13]=(u*M*s-g*p*s+g*n*d-e*M*d-u*n*x+e*p*x)*T,t[14]=(g*a*s-o*M*s-g*n*l+e*M*l+o*n*x-e*a*x)*T,t[15]=(o*p*s-u*a*s+u*n*l-e*p*l-o*n*d+e*a*d)*T,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,h=r*o,u=r*a;return this.set(h*o+n,h*a-s*l,h*l+s*a,0,h*a+s*l,u*a+n,u*l-s*o,0,h*l-s*a,u*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,h=r+r,u=o+o,p=a+a,d=r*h,c=r*u,g=r*p,M=o*u,x=o*p,f=a*p,b=l*h,_=l*u,v=l*p,U=n.x,P=n.y,T=n.z;return s[0]=(1-(M+f))*U,s[1]=(c+v)*U,s[2]=(g-_)*U,s[3]=0,s[4]=(c-v)*P,s[5]=(1-(d+f))*P,s[6]=(x+b)*P,s[7]=0,s[8]=(g+_)*T,s[9]=(x-b)*T,s[10]=(1-(d+M))*T,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=us.set(s[0],s[1],s[2]).length(),o=us.set(s[4],s[5],s[6]).length(),a=us.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],In.copy(this);let h=1/r,u=1/o,p=1/a;return In.elements[0]*=h,In.elements[1]*=h,In.elements[2]*=h,In.elements[4]*=u,In.elements[5]*=u,In.elements[6]*=u,In.elements[8]*=p,In.elements[9]*=p,In.elements[10]*=p,e.setFromRotationMatrix(In),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=ei){let l=this.elements,h=2*r/(e-t),u=2*r/(n-s),p=(e+t)/(e-t),d=(n+s)/(n-s),c,g;if(a===ei)c=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Ro)c=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=p,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=c,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=ei){let l=this.elements,h=1/(e-t),u=1/(n-s),p=1/(o-r),d=(e+t)*h,c=(n+s)*u,g,M;if(a===ei)g=(o+r)*p,M=-2*p;else if(a===Ro)g=r*p,M=-1*p;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*h,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-c,l[2]=0,l[6]=0,l[10]=M,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},us=new $,In=new pe,jf=new $(0,0,0),Qf=new $(1,1,1),_i=new $,Jr=new $,yn=new $,Ch=new pe,Ih=new Wn,Dn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],h=s[5],u=s[9],p=s[2],d=s[6],c=s[10];switch(e){case"XYZ":this._y=Math.asin(Ze(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,c),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Ze(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,c),this._z=Math.atan2(l,h)):(this._y=Math.atan2(-p,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ze(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-p,c),this._z=Math.atan2(-o,h)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ze(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(d,c),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,h));break;case"YZX":this._z=Math.asin(Ze(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,h),this._y=Math.atan2(-p,r)):(this._x=0,this._y=Math.atan2(a,c));break;case"XZY":this._z=Math.asin(-Ze(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,h),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,c),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Ch.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ch,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ih.setFromEuler(this),this.setFromQuaternion(Ih,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Dn.DEFAULT_ORDER="XYZ";var Do=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},tp=0,Ph=new $,ds=new Wn,Jn=new pe,Kr=new $,tr=new $,ep=new $,np=new Wn,Lh=new $(1,0,0),Dh=new $(0,1,0),Uh=new $(0,0,1),Nh={type:"added"},ip={type:"removed"},fs={type:"childadded",child:null},za={type:"childremoved",child:null},Pe=class i extends Ri{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:tp++}),this.uuid=$n(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new $,e=new Dn,n=new Wn,s=new $(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new pe},normalMatrix:{value:new ce}}),this.matrix=new pe,this.matrixWorld=new pe,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Do,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ds.setFromAxisAngle(t,e),this.quaternion.multiply(ds),this}rotateOnWorldAxis(t,e){return ds.setFromAxisAngle(t,e),this.quaternion.premultiply(ds),this}rotateX(t){return this.rotateOnAxis(Lh,t)}rotateY(t){return this.rotateOnAxis(Dh,t)}rotateZ(t){return this.rotateOnAxis(Uh,t)}translateOnAxis(t,e){return Ph.copy(t).applyQuaternion(this.quaternion),this.position.add(Ph.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Lh,t)}translateY(t){return this.translateOnAxis(Dh,t)}translateZ(t){return this.translateOnAxis(Uh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Jn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Kr.copy(t):Kr.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),tr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Jn.lookAt(tr,Kr,this.up):Jn.lookAt(Kr,tr,this.up),this.quaternion.setFromRotationMatrix(Jn),s&&(Jn.extractRotation(s.matrixWorld),ds.setFromRotationMatrix(Jn),this.quaternion.premultiply(ds.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Nh),fs.child=t,this.dispatchEvent(fs),fs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(ip),za.child=t,this.dispatchEvent(za),za.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Jn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Jn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Jn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Nh),fs.child=t,this.dispatchEvent(fs),fs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(tr,t,ep),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(tr,np,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let h=0,u=l.length;h<u;h++){let p=l[h];r(t.shapes,p)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,h=this.material.length;l<h;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),h=o(t.textures),u=o(t.images),p=o(t.shapes),d=o(t.skeletons),c=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),h.length>0&&(n.textures=h),u.length>0&&(n.images=u),p.length>0&&(n.shapes=p),d.length>0&&(n.skeletons=d),c.length>0&&(n.animations=c),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){let l=[];for(let h in a){let u=a[h];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};Pe.DEFAULT_UP=new $(0,1,0);Pe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Pe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Pn=new $,Kn=new $,Ba=new $,jn=new $,ps=new $,ms=new $,kh=new $,Ha=new $,Va=new $,Ga=new $,$a=new ke,Wa=new ke,Xa=new ke,wi=class i{constructor(t=new $,e=new $,n=new $){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Pn.subVectors(t,e),s.cross(Pn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Pn.subVectors(s,e),Kn.subVectors(n,e),Ba.subVectors(t,e);let o=Pn.dot(Pn),a=Pn.dot(Kn),l=Pn.dot(Ba),h=Kn.dot(Kn),u=Kn.dot(Ba),p=o*h-a*a;if(p===0)return r.set(0,0,0),null;let d=1/p,c=(h*l-a*u)*d,g=(o*u-a*l)*d;return r.set(1-c-g,g,c)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,jn)===null?!1:jn.x>=0&&jn.y>=0&&jn.x+jn.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,jn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,jn.x),l.addScaledVector(o,jn.y),l.addScaledVector(a,jn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return $a.setScalar(0),Wa.setScalar(0),Xa.setScalar(0),$a.fromBufferAttribute(t,e),Wa.fromBufferAttribute(t,n),Xa.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector($a,r.x),o.addScaledVector(Wa,r.y),o.addScaledVector(Xa,r.z),o}static isFrontFacing(t,e,n,s){return Pn.subVectors(n,e),Kn.subVectors(t,e),Pn.cross(Kn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Pn.subVectors(this.c,this.b),Kn.subVectors(this.a,this.b),Pn.cross(Kn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;ps.subVectors(s,n),ms.subVectors(r,n),Ha.subVectors(t,n);let l=ps.dot(Ha),h=ms.dot(Ha);if(l<=0&&h<=0)return e.copy(n);Va.subVectors(t,s);let u=ps.dot(Va),p=ms.dot(Va);if(u>=0&&p<=u)return e.copy(s);let d=l*p-u*h;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),e.copy(n).addScaledVector(ps,o);Ga.subVectors(t,r);let c=ps.dot(Ga),g=ms.dot(Ga);if(g>=0&&c<=g)return e.copy(r);let M=c*h-l*g;if(M<=0&&h>=0&&g<=0)return a=h/(h-g),e.copy(n).addScaledVector(ms,a);let x=u*g-c*p;if(x<=0&&p-u>=0&&c-g>=0)return kh.subVectors(r,s),a=(p-u)/(p-u+(c-g)),e.copy(s).addScaledVector(kh,a);let f=1/(x+M+d);return o=M*f,a=d*f,e.copy(n).addScaledVector(ps,o).addScaledVector(ms,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Vu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Mi={h:0,s:0,l:0},jr={h:0,s:0,l:0};function qa(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Kt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ye){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,de.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=de.workingColorSpace){return this.r=t,this.g=e,this.b=n,de.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=de.workingColorSpace){if(t=Bc(t,1),e=Ze(e,0,1),n=Ze(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=qa(o,r,t+1/3),this.g=qa(o,r,t),this.b=qa(o,r,t-1/3)}return de.toWorkingColorSpace(this,s),this}setStyle(t,e=Ye){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ye){let n=Vu[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ni(t.r),this.g=ni(t.g),this.b=ni(t.b),this}copyLinearToSRGB(t){return this.r=Cs(t.r),this.g=Cs(t.g),this.b=Cs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ye){return de.fromWorkingColorSpace(tn.copy(this),t),Math.round(Ze(tn.r*255,0,255))*65536+Math.round(Ze(tn.g*255,0,255))*256+Math.round(Ze(tn.b*255,0,255))}getHexString(t=Ye){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=de.workingColorSpace){de.fromWorkingColorSpace(tn.copy(this),e);let n=tn.r,s=tn.g,r=tn.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,h,u=(a+o)/2;if(a===o)l=0,h=0;else{let p=o-a;switch(h=u<=.5?p/(o+a):p/(2-o-a),o){case n:l=(s-r)/p+(s<r?6:0);break;case s:l=(r-n)/p+2;break;case r:l=(n-s)/p+4;break}l/=6}return t.h=l,t.s=h,t.l=u,t}getRGB(t,e=de.workingColorSpace){return de.fromWorkingColorSpace(tn.copy(this),e),t.r=tn.r,t.g=tn.g,t.b=tn.b,t}getStyle(t=Ye){de.fromWorkingColorSpace(tn.copy(this),t);let e=tn.r,n=tn.g,s=tn.b;return t!==Ye?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Mi),this.setHSL(Mi.h+t,Mi.s+e,Mi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Mi),t.getHSL(jr);let n=ur(Mi.h,jr.h,e),s=ur(Mi.s,jr.s,e),r=ur(Mi.l,jr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},tn=new Kt;Kt.NAMES=Vu;var sp=0,oi=class extends Ri{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:sp++}),this.uuid=$n(),this.name="",this.blending=As,this.side=Ai,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=cl,this.blendDst=hl,this.blendEquation=Hi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Kt(0,0,0),this.blendAlpha=0,this.depthFunc=Ps,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=vh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=os,this.stencilZFail=os,this.stencilZPass=os,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==As&&(n.blending=this.blending),this.side!==Ai&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==cl&&(n.blendSrc=this.blendSrc),this.blendDst!==hl&&(n.blendDst=this.blendDst),this.blendEquation!==Hi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ps&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==vh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==os&&(n.stencilFail=this.stencilFail),this.stencilZFail!==os&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==os&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Sn=class extends oi{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Kt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Dn,this.combine=Au,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var He=new $,Qr=new Ct,De=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Yl,this.updateRanges=[],this.gpuType=Vn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Qr.fromBufferAttribute(this,e),Qr.applyMatrix3(t),this.setXY(e,Qr.x,Qr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)He.fromBufferAttribute(this,e),He.applyMatrix3(t),this.setXYZ(e,He.x,He.y,He.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)He.fromBufferAttribute(this,e),He.applyMatrix4(t),this.setXYZ(e,He.x,He.y,He.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)He.fromBufferAttribute(this,e),He.applyNormalMatrix(t),this.setXYZ(e,He.x,He.y,He.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)He.fromBufferAttribute(this,e),He.transformDirection(t),this.setXYZ(e,He.x,He.y,He.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Ln(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ye(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ln(e,this.array)),e}setX(t,e){return this.normalized&&(e=ye(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ln(e,this.array)),e}setY(t,e){return this.normalized&&(e=ye(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ln(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ye(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ln(e,this.array)),e}setW(t,e){return this.normalized&&(e=ye(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ye(e,this.array),n=ye(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=ye(e,this.array),n=ye(n,this.array),s=ye(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=ye(e,this.array),n=ye(n,this.array),s=ye(s,this.array),r=ye(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Yl&&(t.usage=this.usage),t}};var Uo=class extends De{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var No=class extends De{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var ie=class extends De{constructor(t,e,n){super(new Float32Array(t),e,n)}},rp=0,bn=new pe,Ya=new Pe,gs=new $,vn=new ri,er=new ri,qe=new $,be=class i extends Ri{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:rp++}),this.uuid=$n(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Hu(t)?No:Uo)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new ce().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return bn.makeRotationFromQuaternion(t),this.applyMatrix4(bn),this}rotateX(t){return bn.makeRotationX(t),this.applyMatrix4(bn),this}rotateY(t){return bn.makeRotationY(t),this.applyMatrix4(bn),this}rotateZ(t){return bn.makeRotationZ(t),this.applyMatrix4(bn),this}translate(t,e,n){return bn.makeTranslation(t,e,n),this.applyMatrix4(bn),this}scale(t,e,n){return bn.makeScale(t,e,n),this.applyMatrix4(bn),this}lookAt(t){return Ya.lookAt(t),Ya.updateMatrix(),this.applyMatrix4(Ya.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(gs).negate(),this.translate(gs.x,gs.y,gs.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ie(n,3))}else{for(let n=0,s=e.count;n<s;n++){let r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ri);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new $(-1/0,-1/0,-1/0),new $(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];vn.setFromBufferAttribute(r),this.morphTargetsRelative?(qe.addVectors(this.boundingBox.min,vn.min),this.boundingBox.expandByPoint(qe),qe.addVectors(this.boundingBox.max,vn.max),this.boundingBox.expandByPoint(qe)):(this.boundingBox.expandByPoint(vn.min),this.boundingBox.expandByPoint(vn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ci);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new $,1/0);return}if(t){let n=this.boundingSphere.center;if(vn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];er.setFromBufferAttribute(a),this.morphTargetsRelative?(qe.addVectors(vn.min,er.min),vn.expandByPoint(qe),qe.addVectors(vn.max,er.max),vn.expandByPoint(qe)):(vn.expandByPoint(er.min),vn.expandByPoint(er.max))}vn.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)qe.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(qe));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let h=0,u=a.count;h<u;h++)qe.fromBufferAttribute(a,h),l&&(gs.fromBufferAttribute(t,h),qe.add(gs)),s=Math.max(s,n.distanceToSquared(qe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new De(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let A=0;A<n.count;A++)a[A]=new $,l[A]=new $;let h=new $,u=new $,p=new $,d=new Ct,c=new Ct,g=new Ct,M=new $,x=new $;function f(A,y,m){h.fromBufferAttribute(n,A),u.fromBufferAttribute(n,y),p.fromBufferAttribute(n,m),d.fromBufferAttribute(r,A),c.fromBufferAttribute(r,y),g.fromBufferAttribute(r,m),u.sub(h),p.sub(h),c.sub(d),g.sub(d);let S=1/(c.x*g.y-g.x*c.y);isFinite(S)&&(M.copy(u).multiplyScalar(g.y).addScaledVector(p,-c.y).multiplyScalar(S),x.copy(p).multiplyScalar(c.x).addScaledVector(u,-g.x).multiplyScalar(S),a[A].add(M),a[y].add(M),a[m].add(M),l[A].add(x),l[y].add(x),l[m].add(x))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let A=0,y=b.length;A<y;++A){let m=b[A],S=m.start,E=m.count;for(let I=S,N=S+E;I<N;I+=3)f(t.getX(I+0),t.getX(I+1),t.getX(I+2))}let _=new $,v=new $,U=new $,P=new $;function T(A){U.fromBufferAttribute(s,A),P.copy(U);let y=a[A];_.copy(y),_.sub(U.multiplyScalar(U.dot(y))).normalize(),v.crossVectors(P,y);let S=v.dot(l[A])<0?-1:1;o.setXYZW(A,_.x,_.y,_.z,S)}for(let A=0,y=b.length;A<y;++A){let m=b[A],S=m.start,E=m.count;for(let I=S,N=S+E;I<N;I+=3)T(t.getX(I+0)),T(t.getX(I+1)),T(t.getX(I+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new De(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,c=n.count;d<c;d++)n.setXYZ(d,0,0,0);let s=new $,r=new $,o=new $,a=new $,l=new $,h=new $,u=new $,p=new $;if(t)for(let d=0,c=t.count;d<c;d+=3){let g=t.getX(d+0),M=t.getX(d+1),x=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,M),o.fromBufferAttribute(e,x),u.subVectors(o,r),p.subVectors(s,r),u.cross(p),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,M),h.fromBufferAttribute(n,x),a.add(u),l.add(u),h.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(M,l.x,l.y,l.z),n.setXYZ(x,h.x,h.y,h.z)}else for(let d=0,c=e.count;d<c;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),u.subVectors(o,r),p.subVectors(s,r),u.cross(p),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)qe.fromBufferAttribute(t,e),qe.normalize(),t.setXYZ(e,qe.x,qe.y,qe.z)}toNonIndexed(){function t(a,l){let h=a.array,u=a.itemSize,p=a.normalized,d=new h.constructor(l.length*u),c=0,g=0;for(let M=0,x=l.length;M<x;M++){a.isInterleavedBufferAttribute?c=l[M]*a.data.stride+a.offset:c=l[M]*u;for(let f=0;f<u;f++)d[g++]=h[c++]}return new De(d,u,p)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],h=t(l,n);e.setAttribute(a,h)}let r=this.morphAttributes;for(let a in r){let l=[],h=r[a];for(let u=0,p=h.length;u<p;u++){let d=h[u],c=t(d,n);l.push(c)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let h=o[a];e.addGroup(h.start,h.count,h.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let h in l)l[h]!==void 0&&(t[h]=l[h]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let h=n[l];t.data.attributes[l]=h.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let h=this.morphAttributes[l],u=[];for(let p=0,d=h.length;p<d;p++){let c=h[p];u.push(c.toJSON(t.data))}u.length>0&&(s[l]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let h in s){let u=s[h];this.setAttribute(h,u.clone(e))}let r=t.morphAttributes;for(let h in r){let u=[],p=r[h];for(let d=0,c=p.length;d<c;d++)u.push(p[d].clone(e));this.morphAttributes[h]=u}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let h=0,u=o.length;h<u;h++){let p=o[h];this.addGroup(p.start,p.count,p.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Fh=new pe,ki=new Lo,to=new Ci,Oh=new $,eo=new $,no=new $,io=new $,Za=new $,so=new $,zh=new $,ro=new $,Ie=class extends Pe{constructor(t=new be,e=new Sn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){so.set(0,0,0);for(let l=0,h=r.length;l<h;l++){let u=a[l],p=r[l];u!==0&&(Za.fromBufferAttribute(p,t),o?so.addScaledVector(Za,u):so.addScaledVector(Za.sub(e),u))}e.add(so)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),to.copy(n.boundingSphere),to.applyMatrix4(r),ki.copy(t.ray).recast(t.near),!(to.containsPoint(ki.origin)===!1&&(ki.intersectSphere(to,Oh)===null||ki.origin.distanceToSquared(Oh)>(t.far-t.near)**2))&&(Fh.copy(r).invert(),ki.copy(t.ray).applyMatrix4(Fh),!(n.boundingBox!==null&&ki.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ki)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,h=r.attributes.uv,u=r.attributes.uv1,p=r.attributes.normal,d=r.groups,c=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,M=d.length;g<M;g++){let x=d[g],f=o[x.materialIndex],b=Math.max(x.start,c.start),_=Math.min(a.count,Math.min(x.start+x.count,c.start+c.count));for(let v=b,U=_;v<U;v+=3){let P=a.getX(v),T=a.getX(v+1),A=a.getX(v+2);s=oo(this,f,t,n,h,u,p,P,T,A),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=x.materialIndex,e.push(s))}}else{let g=Math.max(0,c.start),M=Math.min(a.count,c.start+c.count);for(let x=g,f=M;x<f;x+=3){let b=a.getX(x),_=a.getX(x+1),v=a.getX(x+2);s=oo(this,o,t,n,h,u,p,b,_,v),s&&(s.faceIndex=Math.floor(x/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,M=d.length;g<M;g++){let x=d[g],f=o[x.materialIndex],b=Math.max(x.start,c.start),_=Math.min(l.count,Math.min(x.start+x.count,c.start+c.count));for(let v=b,U=_;v<U;v+=3){let P=v,T=v+1,A=v+2;s=oo(this,f,t,n,h,u,p,P,T,A),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=x.materialIndex,e.push(s))}}else{let g=Math.max(0,c.start),M=Math.min(l.count,c.start+c.count);for(let x=g,f=M;x<f;x+=3){let b=x,_=x+1,v=x+2;s=oo(this,o,t,n,h,u,p,b,_,v),s&&(s.faceIndex=Math.floor(x/3),e.push(s))}}}};function op(i,t,e,n,s,r,o,a){let l;if(t.side===Je?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===Ai,a),l===null)return null;ro.copy(a),ro.applyMatrix4(i.matrixWorld);let h=e.ray.origin.distanceTo(ro);return h<e.near||h>e.far?null:{distance:h,point:ro.clone(),object:i}}function oo(i,t,e,n,s,r,o,a,l,h){i.getVertexPosition(a,eo),i.getVertexPosition(l,no),i.getVertexPosition(h,io);let u=op(i,t,e,n,eo,no,io,zh);if(u){let p=new $;wi.getBarycoord(zh,eo,no,io,p),s&&(u.uv=wi.getInterpolatedAttribute(s,a,l,h,p,new Ct)),r&&(u.uv1=wi.getInterpolatedAttribute(r,a,l,h,p,new Ct)),o&&(u.normal=wi.getInterpolatedAttribute(o,a,l,h,p,new $),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let d={a,b:l,c:h,normal:new $,materialIndex:0};wi.getNormal(eo,no,io,d.normal),u.face=d,u.barycoord=p}return u}var Se=class i extends be{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],h=[],u=[],p=[],d=0,c=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new ie(h,3)),this.setAttribute("normal",new ie(u,3)),this.setAttribute("uv",new ie(p,2));function g(M,x,f,b,_,v,U,P,T,A,y){let m=v/T,S=U/A,E=v/2,I=U/2,N=P/2,q=T+1,R=A+1,H=0,G=0,nt=new $;for(let st=0;st<R;st++){let z=st*S-I;for(let St=0;St<q;St++){let K=St*m-E;nt[M]=K*b,nt[x]=z*_,nt[f]=N,h.push(nt.x,nt.y,nt.z),nt[M]=0,nt[x]=0,nt[f]=P>0?1:-1,u.push(nt.x,nt.y,nt.z),p.push(St/T),p.push(1-st/A),H+=1}}for(let st=0;st<A;st++)for(let z=0;z<T;z++){let St=d+z+q*st,K=d+z+q*(st+1),Y=d+(z+1)+q*(st+1),W=d+(z+1)+q*st;l.push(St,K,W),l.push(K,Y,W),G+=6}a.addGroup(c,G,y),c+=G,d+=H}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function ks(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function rn(i){let t={};for(let e=0;e<i.length;e++){let n=ks(i[e]);for(let s in n)t[s]=n[s]}return t}function ap(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Gu(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:de.workingColorSpace}var Hc={clone:ks,merge:rn},lp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,cp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ln=class extends oi{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=lp,this.fragmentShader=cp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ks(t.uniforms),this.uniformsGroups=ap(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},ko=class extends Pe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new pe,this.projectionMatrix=new pe,this.projectionMatrixInverse=new pe,this.coordinateSystem=ei}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},bi=new $,Bh=new Ct,Hh=new Ct,on=class extends ko{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=gr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(hr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return gr*2*Math.atan(Math.tan(hr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){bi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(bi.x,bi.y).multiplyScalar(-t/bi.z),bi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(bi.x,bi.y).multiplyScalar(-t/bi.z)}getViewSize(t,e){return this.getViewBounds(t,Bh,Hh),e.subVectors(Hh,Bh)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(hr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,h=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/h,s*=o.width/l,n*=o.height/h}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},xs=-90,ys=1,jl=class extends Pe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new on(xs,ys,t,e);s.layers=this.layers,this.add(s);let r=new on(xs,ys,t,e);r.layers=this.layers,this.add(r);let o=new on(xs,ys,t,e);o.layers=this.layers,this.add(o);let a=new on(xs,ys,t,e);a.layers=this.layers,this.add(a);let l=new on(xs,ys,t,e);l.layers=this.layers,this.add(l);let h=new on(xs,ys,t,e);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(let h of e)this.remove(h);if(t===ei)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ro)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let h of e)this.add(h),h.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,h,u]=this.children,p=t.getRenderTarget(),d=t.getActiveCubeFace(),c=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let M=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,h),n.texture.generateMipmaps=M,t.setRenderTarget(n,5,s),t.render(e,u),t.setRenderTarget(p,d,c),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Fo=class extends fn{constructor(t,e,n,s,r,o,a,l,h,u){t=t!==void 0?t:[],e=e!==void 0?e:Ls,super(t,e,n,s,r,o,a,l,h,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Ql=class extends si{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Fo(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Hn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Se(5,5,5),r=new ln({name:"CubemapFromEquirect",uniforms:ks(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Je,blending:Ei});r.uniforms.tEquirect.value=e;let o=new Ie(s,r),a=e.minFilter;return e.minFilter===$i&&(e.minFilter=Hn),new jl(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}},Ja=new $,hp=new $,up=new ce,ti=class{constructor(t=new $(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Ja.subVectors(n,e).cross(hp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(Ja),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||up.getNormalMatrix(t),s=this.coplanarPoint(Ja).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Fi=new Ci,ao=new $,xr=class{constructor(t=new ti,e=new ti,n=new ti,s=new ti,r=new ti,o=new ti){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=ei){let n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],h=s[4],u=s[5],p=s[6],d=s[7],c=s[8],g=s[9],M=s[10],x=s[11],f=s[12],b=s[13],_=s[14],v=s[15];if(n[0].setComponents(l-r,d-h,x-c,v-f).normalize(),n[1].setComponents(l+r,d+h,x+c,v+f).normalize(),n[2].setComponents(l+o,d+u,x+g,v+b).normalize(),n[3].setComponents(l-o,d-u,x-g,v-b).normalize(),n[4].setComponents(l-a,d-p,x-M,v-_).normalize(),e===ei)n[5].setComponents(l+a,d+p,x+M,v+_).normalize();else if(e===Ro)n[5].setComponents(a,p,M,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Fi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Fi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Fi)}intersectsSprite(t){return Fi.center.set(0,0,0),Fi.radius=.7071067811865476,Fi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Fi)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(ao.x=s.normal.x>0?t.max.x:t.min.x,ao.y=s.normal.y>0?t.max.y:t.min.y,ao.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(ao)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function $u(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function dp(i){let t=new WeakMap;function e(a,l){let h=a.array,u=a.usage,p=h.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,h,u),a.onUploadCallback();let c;if(h instanceof Float32Array)c=i.FLOAT;else if(h instanceof Uint16Array)a.isFloat16BufferAttribute?c=i.HALF_FLOAT:c=i.UNSIGNED_SHORT;else if(h instanceof Int16Array)c=i.SHORT;else if(h instanceof Uint32Array)c=i.UNSIGNED_INT;else if(h instanceof Int32Array)c=i.INT;else if(h instanceof Int8Array)c=i.BYTE;else if(h instanceof Uint8Array)c=i.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)c=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:d,type:c,bytesPerElement:h.BYTES_PER_ELEMENT,version:a.version,size:p}}function n(a,l,h){let u=l.array,p=l.updateRanges;if(i.bindBuffer(h,a),p.length===0)i.bufferSubData(h,0,u);else{p.sort((c,g)=>c.start-g.start);let d=0;for(let c=1;c<p.length;c++){let g=p[d],M=p[c];M.start<=g.start+g.count+1?g.count=Math.max(g.count,M.start+M.count-g.start):(++d,p[d]=M)}p.length=d+1;for(let c=0,g=p.length;c<g;c++){let M=p[c];i.bufferSubData(h,M.start*u.BYTES_PER_ELEMENT,u,M.start,M.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let h=t.get(a);if(h===void 0)t.set(a,e(a,l));else if(h.version<a.version){if(h.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(h.buffer,a,l),h.version=a.version}}return{get:s,remove:r,update:o}}var pn=class i extends be{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),h=a+1,u=l+1,p=t/a,d=e/l,c=[],g=[],M=[],x=[];for(let f=0;f<u;f++){let b=f*d-o;for(let _=0;_<h;_++){let v=_*p-r;g.push(v,-b,0),M.push(0,0,1),x.push(_/a),x.push(1-f/l)}}for(let f=0;f<l;f++)for(let b=0;b<a;b++){let _=b+h*f,v=b+h*(f+1),U=b+1+h*(f+1),P=b+1+h*f;c.push(_,v,P),c.push(v,U,P)}this.setIndex(c),this.setAttribute("position",new ie(g,3)),this.setAttribute("normal",new ie(M,3)),this.setAttribute("uv",new ie(x,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},fp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,pp=`#ifdef USE_ALPHAHASH
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
#endif`,mp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,gp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,xp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,yp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,vp=`#ifdef USE_AOMAP
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
#endif`,_p=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Mp=`#ifdef USE_BATCHING
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
#endif`,bp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Sp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,wp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ep=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Tp=`#ifdef USE_IRIDESCENCE
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
#endif`,Ap=`#ifdef USE_BUMPMAP
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
#endif`,Rp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Cp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ip=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Pp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Lp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Dp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Up=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Np=`#if defined( USE_COLOR_ALPHA )
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
#endif`,kp=`#define PI 3.141592653589793
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
} // validated`,Fp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Op=`vec3 transformedNormal = objectNormal;
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
#endif`,zp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Bp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Hp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Vp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Gp="gl_FragColor = linearToOutputTexel( gl_FragColor );",$p=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Wp=`#ifdef USE_ENVMAP
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
#endif`,Xp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,qp=`#ifdef USE_ENVMAP
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
#endif`,Yp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Zp=`#ifdef USE_ENVMAP
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
#endif`,Jp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Kp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,jp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Qp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,tm=`#ifdef USE_GRADIENTMAP
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
}`,em=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,nm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,im=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,sm=`uniform bool receiveShadow;
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
#endif`,rm=`#ifdef USE_ENVMAP
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
#endif`,om=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,am=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,cm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,hm=`PhysicalMaterial material;
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
#endif`,um=`struct PhysicalMaterial {
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
}`,dm=`
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
#endif`,fm=`#if defined( RE_IndirectDiffuse )
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
#endif`,pm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,mm=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,gm=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xm=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ym=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,vm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,_m=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Mm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,bm=`#if defined( USE_POINTS_UV )
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
#endif`,Sm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,wm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Em=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Tm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Am=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Rm=`#ifdef USE_MORPHTARGETS
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
#endif`,Cm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Im=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Pm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Lm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Dm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Um=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Nm=`#ifdef USE_NORMALMAP
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
#endif`,km=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Fm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Om=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,zm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Bm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Hm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Vm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Gm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,$m=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Wm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Xm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,qm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ym=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Zm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Jm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Km=`float getShadowMask() {
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
}`,jm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Qm=`#ifdef USE_SKINNING
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
#endif`,t0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,e0=`#ifdef USE_SKINNING
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
#endif`,n0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,i0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,s0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,r0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,o0=`#ifdef USE_TRANSMISSION
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
#endif`,a0=`#ifdef USE_TRANSMISSION
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
#endif`,l0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,c0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,h0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,u0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,d0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,f0=`uniform sampler2D t2D;
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
}`,p0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,m0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,g0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,x0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,y0=`#include <common>
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
}`,v0=`#if DEPTH_PACKING == 3200
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
}`,_0=`#define DISTANCE
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
}`,M0=`#define DISTANCE
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
}`,b0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,S0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,w0=`uniform float scale;
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
}`,E0=`uniform vec3 diffuse;
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
}`,T0=`#include <common>
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
}`,A0=`uniform vec3 diffuse;
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
}`,R0=`#define LAMBERT
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
}`,C0=`#define LAMBERT
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
}`,I0=`#define MATCAP
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
}`,P0=`#define MATCAP
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
}`,L0=`#define NORMAL
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
}`,D0=`#define NORMAL
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
}`,U0=`#define PHONG
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
}`,N0=`#define PHONG
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
}`,k0=`#define STANDARD
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
}`,F0=`#define STANDARD
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
}`,O0=`#define TOON
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
}`,z0=`#define TOON
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
}`,B0=`uniform float size;
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
}`,H0=`uniform vec3 diffuse;
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
}`,V0=`#include <common>
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
}`,G0=`uniform vec3 color;
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
}`,$0=`uniform float rotation;
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
}`,W0=`uniform vec3 diffuse;
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
}`,se={alphahash_fragment:fp,alphahash_pars_fragment:pp,alphamap_fragment:mp,alphamap_pars_fragment:gp,alphatest_fragment:xp,alphatest_pars_fragment:yp,aomap_fragment:vp,aomap_pars_fragment:_p,batching_pars_vertex:Mp,batching_vertex:bp,begin_vertex:Sp,beginnormal_vertex:wp,bsdfs:Ep,iridescence_fragment:Tp,bumpmap_pars_fragment:Ap,clipping_planes_fragment:Rp,clipping_planes_pars_fragment:Cp,clipping_planes_pars_vertex:Ip,clipping_planes_vertex:Pp,color_fragment:Lp,color_pars_fragment:Dp,color_pars_vertex:Up,color_vertex:Np,common:kp,cube_uv_reflection_fragment:Fp,defaultnormal_vertex:Op,displacementmap_pars_vertex:zp,displacementmap_vertex:Bp,emissivemap_fragment:Hp,emissivemap_pars_fragment:Vp,colorspace_fragment:Gp,colorspace_pars_fragment:$p,envmap_fragment:Wp,envmap_common_pars_fragment:Xp,envmap_pars_fragment:qp,envmap_pars_vertex:Yp,envmap_physical_pars_fragment:rm,envmap_vertex:Zp,fog_vertex:Jp,fog_pars_vertex:Kp,fog_fragment:jp,fog_pars_fragment:Qp,gradientmap_pars_fragment:tm,lightmap_pars_fragment:em,lights_lambert_fragment:nm,lights_lambert_pars_fragment:im,lights_pars_begin:sm,lights_toon_fragment:om,lights_toon_pars_fragment:am,lights_phong_fragment:lm,lights_phong_pars_fragment:cm,lights_physical_fragment:hm,lights_physical_pars_fragment:um,lights_fragment_begin:dm,lights_fragment_maps:fm,lights_fragment_end:pm,logdepthbuf_fragment:mm,logdepthbuf_pars_fragment:gm,logdepthbuf_pars_vertex:xm,logdepthbuf_vertex:ym,map_fragment:vm,map_pars_fragment:_m,map_particle_fragment:Mm,map_particle_pars_fragment:bm,metalnessmap_fragment:Sm,metalnessmap_pars_fragment:wm,morphinstance_vertex:Em,morphcolor_vertex:Tm,morphnormal_vertex:Am,morphtarget_pars_vertex:Rm,morphtarget_vertex:Cm,normal_fragment_begin:Im,normal_fragment_maps:Pm,normal_pars_fragment:Lm,normal_pars_vertex:Dm,normal_vertex:Um,normalmap_pars_fragment:Nm,clearcoat_normal_fragment_begin:km,clearcoat_normal_fragment_maps:Fm,clearcoat_pars_fragment:Om,iridescence_pars_fragment:zm,opaque_fragment:Bm,packing:Hm,premultiplied_alpha_fragment:Vm,project_vertex:Gm,dithering_fragment:$m,dithering_pars_fragment:Wm,roughnessmap_fragment:Xm,roughnessmap_pars_fragment:qm,shadowmap_pars_fragment:Ym,shadowmap_pars_vertex:Zm,shadowmap_vertex:Jm,shadowmask_pars_fragment:Km,skinbase_vertex:jm,skinning_pars_vertex:Qm,skinning_vertex:t0,skinnormal_vertex:e0,specularmap_fragment:n0,specularmap_pars_fragment:i0,tonemapping_fragment:s0,tonemapping_pars_fragment:r0,transmission_fragment:o0,transmission_pars_fragment:a0,uv_pars_fragment:l0,uv_pars_vertex:c0,uv_vertex:h0,worldpos_vertex:u0,background_vert:d0,background_frag:f0,backgroundCube_vert:p0,backgroundCube_frag:m0,cube_vert:g0,cube_frag:x0,depth_vert:y0,depth_frag:v0,distanceRGBA_vert:_0,distanceRGBA_frag:M0,equirect_vert:b0,equirect_frag:S0,linedashed_vert:w0,linedashed_frag:E0,meshbasic_vert:T0,meshbasic_frag:A0,meshlambert_vert:R0,meshlambert_frag:C0,meshmatcap_vert:I0,meshmatcap_frag:P0,meshnormal_vert:L0,meshnormal_frag:D0,meshphong_vert:U0,meshphong_frag:N0,meshphysical_vert:k0,meshphysical_frag:F0,meshtoon_vert:O0,meshtoon_frag:z0,points_vert:B0,points_frag:H0,shadow_vert:V0,shadow_frag:G0,sprite_vert:$0,sprite_frag:W0},Ot={common:{diffuse:{value:new Kt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ce},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ce}},envmap:{envMap:{value:null},envMapRotation:{value:new ce},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ce}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ce}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ce},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ce},normalScale:{value:new Ct(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ce},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ce}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ce}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ce}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Kt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Kt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0},uvTransform:{value:new ce}},sprite:{diffuse:{value:new Kt(16777215)},opacity:{value:1},center:{value:new Ct(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ce},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0}}},Bn={basic:{uniforms:rn([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.fog]),vertexShader:se.meshbasic_vert,fragmentShader:se.meshbasic_frag},lambert:{uniforms:rn([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,Ot.lights,{emissive:{value:new Kt(0)}}]),vertexShader:se.meshlambert_vert,fragmentShader:se.meshlambert_frag},phong:{uniforms:rn([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,Ot.lights,{emissive:{value:new Kt(0)},specular:{value:new Kt(1118481)},shininess:{value:30}}]),vertexShader:se.meshphong_vert,fragmentShader:se.meshphong_frag},standard:{uniforms:rn([Ot.common,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.roughnessmap,Ot.metalnessmap,Ot.fog,Ot.lights,{emissive:{value:new Kt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:se.meshphysical_vert,fragmentShader:se.meshphysical_frag},toon:{uniforms:rn([Ot.common,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.gradientmap,Ot.fog,Ot.lights,{emissive:{value:new Kt(0)}}]),vertexShader:se.meshtoon_vert,fragmentShader:se.meshtoon_frag},matcap:{uniforms:rn([Ot.common,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,{matcap:{value:null}}]),vertexShader:se.meshmatcap_vert,fragmentShader:se.meshmatcap_frag},points:{uniforms:rn([Ot.points,Ot.fog]),vertexShader:se.points_vert,fragmentShader:se.points_frag},dashed:{uniforms:rn([Ot.common,Ot.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:se.linedashed_vert,fragmentShader:se.linedashed_frag},depth:{uniforms:rn([Ot.common,Ot.displacementmap]),vertexShader:se.depth_vert,fragmentShader:se.depth_frag},normal:{uniforms:rn([Ot.common,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,{opacity:{value:1}}]),vertexShader:se.meshnormal_vert,fragmentShader:se.meshnormal_frag},sprite:{uniforms:rn([Ot.sprite,Ot.fog]),vertexShader:se.sprite_vert,fragmentShader:se.sprite_frag},background:{uniforms:{uvTransform:{value:new ce},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:se.background_vert,fragmentShader:se.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ce}},vertexShader:se.backgroundCube_vert,fragmentShader:se.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:se.cube_vert,fragmentShader:se.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:se.equirect_vert,fragmentShader:se.equirect_frag},distanceRGBA:{uniforms:rn([Ot.common,Ot.displacementmap,{referencePosition:{value:new $},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:se.distanceRGBA_vert,fragmentShader:se.distanceRGBA_frag},shadow:{uniforms:rn([Ot.lights,Ot.fog,{color:{value:new Kt(0)},opacity:{value:1}}]),vertexShader:se.shadow_vert,fragmentShader:se.shadow_frag}};Bn.physical={uniforms:rn([Bn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ce},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ce},clearcoatNormalScale:{value:new Ct(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ce},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ce},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ce},sheen:{value:0},sheenColor:{value:new Kt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ce},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ce},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ce},transmissionSamplerSize:{value:new Ct},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ce},attenuationDistance:{value:0},attenuationColor:{value:new Kt(0)},specularColor:{value:new Kt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ce},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ce},anisotropyVector:{value:new Ct},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ce}}]),vertexShader:se.meshphysical_vert,fragmentShader:se.meshphysical_frag};var lo={r:0,b:0,g:0},Oi=new Dn,X0=new pe;function q0(i,t,e,n,s,r,o){let a=new Kt(0),l=r===!0?0:1,h,u,p=null,d=0,c=null;function g(b){let _=b.isScene===!0?b.background:null;return _&&_.isTexture&&(_=(b.backgroundBlurriness>0?e:t).get(_)),_}function M(b){let _=!1,v=g(b);v===null?f(a,l):v&&v.isColor&&(f(v,1),_=!0);let U=i.xr.getEnvironmentBlendMode();U==="additive"?n.buffers.color.setClear(0,0,0,1,o):U==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||_)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function x(b,_){let v=g(_);v&&(v.isCubeTexture||v.mapping===ca)?(u===void 0&&(u=new Ie(new Se(1,1,1),new ln({name:"BackgroundCubeMaterial",uniforms:ks(Bn.backgroundCube.uniforms),vertexShader:Bn.backgroundCube.vertexShader,fragmentShader:Bn.backgroundCube.fragmentShader,side:Je,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(U,P,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),Oi.copy(_.backgroundRotation),Oi.x*=-1,Oi.y*=-1,Oi.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Oi.y*=-1,Oi.z*=-1),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(X0.makeRotationFromEuler(Oi)),u.material.toneMapped=de.getTransfer(v.colorSpace)!==Me,(p!==v||d!==v.version||c!==i.toneMapping)&&(u.material.needsUpdate=!0,p=v,d=v.version,c=i.toneMapping),u.layers.enableAll(),b.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(h===void 0&&(h=new Ie(new pn(2,2),new ln({name:"BackgroundMaterial",uniforms:ks(Bn.background.uniforms),vertexShader:Bn.background.vertexShader,fragmentShader:Bn.background.fragmentShader,side:Ai,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(h)),h.material.uniforms.t2D.value=v,h.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,h.material.toneMapped=de.getTransfer(v.colorSpace)!==Me,v.matrixAutoUpdate===!0&&v.updateMatrix(),h.material.uniforms.uvTransform.value.copy(v.matrix),(p!==v||d!==v.version||c!==i.toneMapping)&&(h.material.needsUpdate=!0,p=v,d=v.version,c=i.toneMapping),h.layers.enableAll(),b.unshift(h,h.geometry,h.material,0,0,null))}function f(b,_){b.getRGB(lo,Gu(i)),n.buffers.color.setClear(lo.r,lo.g,lo.b,_,o)}return{getClearColor:function(){return a},setClearColor:function(b,_=1){a.set(b),l=_,f(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,f(a,l)},render:M,addToRenderList:x}}function Y0(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,o=!1;function a(m,S,E,I,N){let q=!1,R=p(I,E,S);r!==R&&(r=R,h(r.object)),q=c(m,I,E,N),q&&g(m,I,E,N),N!==null&&t.update(N,i.ELEMENT_ARRAY_BUFFER),(q||o)&&(o=!1,v(m,S,E,I),N!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(N).buffer))}function l(){return i.createVertexArray()}function h(m){return i.bindVertexArray(m)}function u(m){return i.deleteVertexArray(m)}function p(m,S,E){let I=E.wireframe===!0,N=n[m.id];N===void 0&&(N={},n[m.id]=N);let q=N[S.id];q===void 0&&(q={},N[S.id]=q);let R=q[I];return R===void 0&&(R=d(l()),q[I]=R),R}function d(m){let S=[],E=[],I=[];for(let N=0;N<e;N++)S[N]=0,E[N]=0,I[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:S,enabledAttributes:E,attributeDivisors:I,object:m,attributes:{},index:null}}function c(m,S,E,I){let N=r.attributes,q=S.attributes,R=0,H=E.getAttributes();for(let G in H)if(H[G].location>=0){let st=N[G],z=q[G];if(z===void 0&&(G==="instanceMatrix"&&m.instanceMatrix&&(z=m.instanceMatrix),G==="instanceColor"&&m.instanceColor&&(z=m.instanceColor)),st===void 0||st.attribute!==z||z&&st.data!==z.data)return!0;R++}return r.attributesNum!==R||r.index!==I}function g(m,S,E,I){let N={},q=S.attributes,R=0,H=E.getAttributes();for(let G in H)if(H[G].location>=0){let st=q[G];st===void 0&&(G==="instanceMatrix"&&m.instanceMatrix&&(st=m.instanceMatrix),G==="instanceColor"&&m.instanceColor&&(st=m.instanceColor));let z={};z.attribute=st,st&&st.data&&(z.data=st.data),N[G]=z,R++}r.attributes=N,r.attributesNum=R,r.index=I}function M(){let m=r.newAttributes;for(let S=0,E=m.length;S<E;S++)m[S]=0}function x(m){f(m,0)}function f(m,S){let E=r.newAttributes,I=r.enabledAttributes,N=r.attributeDivisors;E[m]=1,I[m]===0&&(i.enableVertexAttribArray(m),I[m]=1),N[m]!==S&&(i.vertexAttribDivisor(m,S),N[m]=S)}function b(){let m=r.newAttributes,S=r.enabledAttributes;for(let E=0,I=S.length;E<I;E++)S[E]!==m[E]&&(i.disableVertexAttribArray(E),S[E]=0)}function _(m,S,E,I,N,q,R){R===!0?i.vertexAttribIPointer(m,S,E,N,q):i.vertexAttribPointer(m,S,E,I,N,q)}function v(m,S,E,I){M();let N=I.attributes,q=E.getAttributes(),R=S.defaultAttributeValues;for(let H in q){let G=q[H];if(G.location>=0){let nt=N[H];if(nt===void 0&&(H==="instanceMatrix"&&m.instanceMatrix&&(nt=m.instanceMatrix),H==="instanceColor"&&m.instanceColor&&(nt=m.instanceColor)),nt!==void 0){let st=nt.normalized,z=nt.itemSize,St=t.get(nt);if(St===void 0)continue;let K=St.buffer,Y=St.type,W=St.bytesPerElement,V=Y===i.INT||Y===i.UNSIGNED_INT||nt.gpuType===Dc;if(nt.isInterleavedBufferAttribute){let Z=nt.data,ot=Z.stride,gt=nt.offset;if(Z.isInstancedInterleavedBuffer){for(let Tt=0;Tt<G.locationSize;Tt++)f(G.location+Tt,Z.meshPerAttribute);m.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let Tt=0;Tt<G.locationSize;Tt++)x(G.location+Tt);i.bindBuffer(i.ARRAY_BUFFER,K);for(let Tt=0;Tt<G.locationSize;Tt++)_(G.location+Tt,z/G.locationSize,Y,st,ot*W,(gt+z/G.locationSize*Tt)*W,V)}else{if(nt.isInstancedBufferAttribute){for(let Z=0;Z<G.locationSize;Z++)f(G.location+Z,nt.meshPerAttribute);m.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=nt.meshPerAttribute*nt.count)}else for(let Z=0;Z<G.locationSize;Z++)x(G.location+Z);i.bindBuffer(i.ARRAY_BUFFER,K);for(let Z=0;Z<G.locationSize;Z++)_(G.location+Z,z/G.locationSize,Y,st,z*W,z/G.locationSize*Z*W,V)}}else if(R!==void 0){let st=R[H];if(st!==void 0)switch(st.length){case 2:i.vertexAttrib2fv(G.location,st);break;case 3:i.vertexAttrib3fv(G.location,st);break;case 4:i.vertexAttrib4fv(G.location,st);break;default:i.vertexAttrib1fv(G.location,st)}}}}b()}function U(){A();for(let m in n){let S=n[m];for(let E in S){let I=S[E];for(let N in I)u(I[N].object),delete I[N];delete S[E]}delete n[m]}}function P(m){if(n[m.id]===void 0)return;let S=n[m.id];for(let E in S){let I=S[E];for(let N in I)u(I[N].object),delete I[N];delete S[E]}delete n[m.id]}function T(m){for(let S in n){let E=n[S];if(E[m.id]===void 0)continue;let I=E[m.id];for(let N in I)u(I[N].object),delete I[N];delete E[m.id]}}function A(){y(),o=!0,r!==s&&(r=s,h(r.object))}function y(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:A,resetDefaultState:y,dispose:U,releaseStatesOfGeometry:P,releaseStatesOfProgram:T,initAttributes:M,enableAttribute:x,disableUnusedAttributes:b}}function Z0(i,t,e){let n;function s(h){n=h}function r(h,u){i.drawArrays(n,h,u),e.update(u,n,1)}function o(h,u,p){p!==0&&(i.drawArraysInstanced(n,h,u,p),e.update(u,n,p))}function a(h,u,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,h,0,u,0,p);let c=0;for(let g=0;g<p;g++)c+=u[g];e.update(c,n,1)}function l(h,u,p,d){if(p===0)return;let c=t.get("WEBGL_multi_draw");if(c===null)for(let g=0;g<h.length;g++)o(h[g],u[g],d[g]);else{c.multiDrawArraysInstancedWEBGL(n,h,0,u,0,d,0,p);let g=0;for(let M=0;M<p;M++)g+=u[M]*d[M];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function J0(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let T=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(T){return!(T!==_n&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){let A=T===Cr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(T!==ii&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==Vn&&!A)}function l(T){if(T==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=e.precision!==void 0?e.precision:"highp",u=l(h);u!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",u,"instead."),h=u);let p=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),c=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=i.getParameter(i.MAX_TEXTURE_SIZE),x=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),b=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),_=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),U=g>0,P=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:h,logarithmicDepthBuffer:p,reverseDepthBuffer:d,maxTextures:c,maxVertexTextures:g,maxTextureSize:M,maxCubemapSize:x,maxAttributes:f,maxVertexUniforms:b,maxVaryings:_,maxFragmentUniforms:v,vertexTextures:U,maxSamples:P}}function K0(i){let t=this,e=null,n=0,s=!1,r=!1,o=new ti,a=new ce,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,d){let c=p.length!==0||d||n!==0||s;return s=d,n=p.length,c},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(p,d){e=u(p,d,0)},this.setState=function(p,d,c){let g=p.clippingPlanes,M=p.clipIntersection,x=p.clipShadows,f=i.get(p);if(!s||g===null||g.length===0||r&&!x)r?u(null):h();else{let b=r?0:n,_=b*4,v=f.clippingState||null;l.value=v,v=u(g,d,_,c);for(let U=0;U!==_;++U)v[U]=e[U];f.clippingState=v,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=b}};function h(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(p,d,c,g){let M=p!==null?p.length:0,x=null;if(M!==0){if(x=l.value,g!==!0||x===null){let f=c+M*4,b=d.matrixWorldInverse;a.getNormalMatrix(b),(x===null||x.length<f)&&(x=new Float32Array(f));for(let _=0,v=c;_!==M;++_,v+=4)o.copy(p[_]).applyMatrix4(b,a),o.normal.toArray(x,v),x[v+3]=o.constant}l.value=x,l.needsUpdate=!0}return t.numPlanes=M,t.numIntersection=0,x}}function j0(i){let t=new WeakMap;function e(o,a){return a===yl?o.mapping=Ls:a===vl&&(o.mapping=Ds),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===yl||a===vl)if(t.has(o)){let l=t.get(o).texture;return e(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let h=new Ql(l.height);return h.fromEquirectangularTexture(i,o),t.set(o,h),o.addEventListener("dispose",s),e(h.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var Oo=class extends ko{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let h=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=h*this.view.offsetX,o=r+h*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Es=4,Vh=[.125,.215,.35,.446,.526,.582],Vi=20,Ka=new Oo,Gh=new Kt,ja=null,Qa=0,tl=0,el=!1,Bi=(1+Math.sqrt(5))/2,vs=1/Bi,$h=[new $(-Bi,vs,0),new $(Bi,vs,0),new $(-vs,0,Bi),new $(vs,0,Bi),new $(0,Bi,-vs),new $(0,Bi,vs),new $(-1,1,-1),new $(1,1,-1),new $(-1,1,1),new $(1,1,1)],zo=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){ja=this._renderer.getRenderTarget(),Qa=this._renderer.getActiveCubeFace(),tl=this._renderer.getActiveMipmapLevel(),el=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=qh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Xh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ja,Qa,tl),this._renderer.xr.enabled=el,t.scissorTest=!1,co(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ls||t.mapping===Ds?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ja=this._renderer.getRenderTarget(),Qa=this._renderer.getActiveCubeFace(),tl=this._renderer.getActiveMipmapLevel(),el=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Hn,minFilter:Hn,generateMipmaps:!1,type:Cr,format:_n,colorSpace:Bs,depthBuffer:!1},s=Wh(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Wh(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Q0(r)),this._blurMaterial=tg(r,t,e)}return s}_compileMaterial(t){let e=new Ie(this._lodPlanes[0],t);this._renderer.compile(e,Ka)}_sceneToCubeUV(t,e,n,s){let a=new on(90,1,e,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,p=u.autoClear,d=u.toneMapping;u.getClearColor(Gh),u.toneMapping=Gn,u.autoClear=!1;let c=new Sn({name:"PMREM.Background",side:Je,depthWrite:!1,depthTest:!1}),g=new Ie(new Se,c),M=!1,x=t.background;x?x.isColor&&(c.color.copy(x),t.background=null,M=!0):(c.color.copy(Gh),M=!0);for(let f=0;f<6;f++){let b=f%3;b===0?(a.up.set(0,l[f],0),a.lookAt(h[f],0,0)):b===1?(a.up.set(0,0,l[f]),a.lookAt(0,h[f],0)):(a.up.set(0,l[f],0),a.lookAt(0,0,h[f]));let _=this._cubeSize;co(s,b*_,f>2?_:0,_,_),u.setRenderTarget(s),M&&u.render(g,a),u.render(t,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=p,t.background=x}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===Ls||t.mapping===Ds;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=qh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Xh());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new Ie(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;co(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Ka)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=$h[(s-r-1)%$h.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){let l=this._renderer,h=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,p=new Ie(this._lodPlanes[s],h),d=h.uniforms,c=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*c):2*Math.PI/(2*Vi-1),M=r/g,x=isFinite(r)?1+Math.floor(u*M):Vi;x>Vi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${Vi}`);let f=[],b=0;for(let T=0;T<Vi;++T){let A=T/M,y=Math.exp(-A*A/2);f.push(y),T===0?b+=y:T<x&&(b+=2*y)}for(let T=0;T<f.length;T++)f[T]=f[T]/b;d.envMap.value=t.texture,d.samples.value=x,d.weights.value=f,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:_}=this;d.dTheta.value=g,d.mipInt.value=_-n;let v=this._sizeLods[s],U=3*v*(s>_-Es?s-_+Es:0),P=4*(this._cubeSize-v);co(e,U,P,3*v,2*v),l.setRenderTarget(e),l.render(p,Ka)}};function Q0(i){let t=[],e=[],n=[],s=i,r=i-Es+1+Vh.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let l=1/a;o>i-Es?l=Vh[o-i+Es-1]:o===0&&(l=0),n.push(l);let h=1/(a-2),u=-h,p=1+h,d=[u,u,p,u,p,p,u,u,p,p,u,p],c=6,g=6,M=3,x=2,f=1,b=new Float32Array(M*g*c),_=new Float32Array(x*g*c),v=new Float32Array(f*g*c);for(let P=0;P<c;P++){let T=P%3*2/3-1,A=P>2?0:-1,y=[T,A,0,T+2/3,A,0,T+2/3,A+1,0,T,A,0,T+2/3,A+1,0,T,A+1,0];b.set(y,M*g*P),_.set(d,x*g*P);let m=[P,P,P,P,P,P];v.set(m,f*g*P)}let U=new be;U.setAttribute("position",new De(b,M)),U.setAttribute("uv",new De(_,x)),U.setAttribute("faceIndex",new De(v,f)),t.push(U),s>Es&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Wh(i,t,e){let n=new si(i,t,e);return n.texture.mapping=ca,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function co(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function tg(i,t,e){let n=new Float32Array(Vi),s=new $(0,1,0);return new ln({name:"SphericalGaussianBlur",defines:{n:Vi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Vc(),fragmentShader:`

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
		`,blending:Ei,depthTest:!1,depthWrite:!1})}function Xh(){return new ln({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Vc(),fragmentShader:`

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
		`,blending:Ei,depthTest:!1,depthWrite:!1})}function qh(){return new ln({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Vc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ei,depthTest:!1,depthWrite:!1})}function Vc(){return`

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
	`}function eg(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let l=a.mapping,h=l===yl||l===vl,u=l===Ls||l===Ds;if(h||u){let p=t.get(a),d=p!==void 0?p.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new zo(i)),p=h?e.fromEquirectangular(a,p):e.fromCubemap(a,p),p.texture.pmremVersion=a.pmremVersion,t.set(a,p),p.texture;if(p!==void 0)return p.texture;{let c=a.image;return h&&c&&c.height>0||u&&c&&s(c)?(e===null&&(e=new zo(i)),p=h?e.fromEquirectangular(a):e.fromCubemap(a),p.texture.pmremVersion=a.pmremVersion,t.set(a,p),a.addEventListener("dispose",r),p.texture):null}}}return a}function s(a){let l=0,h=6;for(let u=0;u<h;u++)a[u]!==void 0&&l++;return l===h}function r(a){let l=a.target;l.removeEventListener("dispose",r);let h=t.get(l);h!==void 0&&(t.delete(l),h.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function ng(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&lr("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function ig(i,t,e,n){let s={},r=new WeakMap;function o(p){let d=p.target;d.index!==null&&t.remove(d.index);for(let g in d.attributes)t.remove(d.attributes[g]);for(let g in d.morphAttributes){let M=d.morphAttributes[g];for(let x=0,f=M.length;x<f;x++)t.remove(M[x])}d.removeEventListener("dispose",o),delete s[d.id];let c=r.get(d);c&&(t.remove(c),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(p,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,e.memory.geometries++),d}function l(p){let d=p.attributes;for(let g in d)t.update(d[g],i.ARRAY_BUFFER);let c=p.morphAttributes;for(let g in c){let M=c[g];for(let x=0,f=M.length;x<f;x++)t.update(M[x],i.ARRAY_BUFFER)}}function h(p){let d=[],c=p.index,g=p.attributes.position,M=0;if(c!==null){let b=c.array;M=c.version;for(let _=0,v=b.length;_<v;_+=3){let U=b[_+0],P=b[_+1],T=b[_+2];d.push(U,P,P,T,T,U)}}else if(g!==void 0){let b=g.array;M=g.version;for(let _=0,v=b.length/3-1;_<v;_+=3){let U=_+0,P=_+1,T=_+2;d.push(U,P,P,T,T,U)}}else return;let x=new(Hu(d)?No:Uo)(d,1);x.version=M;let f=r.get(p);f&&t.remove(f),r.set(p,x)}function u(p){let d=r.get(p);if(d){let c=p.index;c!==null&&d.version<c.version&&h(p)}else h(p);return r.get(p)}return{get:a,update:l,getWireframeAttribute:u}}function sg(i,t,e){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,c){i.drawElements(n,c,r,d*o),e.update(c,n,1)}function h(d,c,g){g!==0&&(i.drawElementsInstanced(n,c,r,d*o,g),e.update(c,n,g))}function u(d,c,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,c,0,r,d,0,g);let x=0;for(let f=0;f<g;f++)x+=c[f];e.update(x,n,1)}function p(d,c,g,M){if(g===0)return;let x=t.get("WEBGL_multi_draw");if(x===null)for(let f=0;f<d.length;f++)h(d[f]/o,c[f],M[f]);else{x.multiDrawElementsInstancedWEBGL(n,c,0,r,d,0,M,0,g);let f=0;for(let b=0;b<g;b++)f+=c[b]*M[b];e.update(f,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=h,this.renderMultiDraw=u,this.renderMultiDrawInstances=p}function rg(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function og(i,t,e){let n=new WeakMap,s=new ke;function r(o,a,l){let h=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,p=u!==void 0?u.length:0,d=n.get(a);if(d===void 0||d.count!==p){let y=function(){T.dispose(),n.delete(a),a.removeEventListener("dispose",y)};d!==void 0&&d.texture.dispose();let c=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,M=a.morphAttributes.color!==void 0,x=a.morphAttributes.position||[],f=a.morphAttributes.normal||[],b=a.morphAttributes.color||[],_=0;c===!0&&(_=1),g===!0&&(_=2),M===!0&&(_=3);let v=a.attributes.position.count*_,U=1;v>t.maxTextureSize&&(U=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);let P=new Float32Array(v*U*4*p),T=new Po(P,v,U,p);T.type=Vn,T.needsUpdate=!0;let A=_*4;for(let m=0;m<p;m++){let S=x[m],E=f[m],I=b[m],N=v*U*4*m;for(let q=0;q<S.count;q++){let R=q*A;c===!0&&(s.fromBufferAttribute(S,q),P[N+R+0]=s.x,P[N+R+1]=s.y,P[N+R+2]=s.z,P[N+R+3]=0),g===!0&&(s.fromBufferAttribute(E,q),P[N+R+4]=s.x,P[N+R+5]=s.y,P[N+R+6]=s.z,P[N+R+7]=0),M===!0&&(s.fromBufferAttribute(I,q),P[N+R+8]=s.x,P[N+R+9]=s.y,P[N+R+10]=s.z,P[N+R+11]=I.itemSize===4?s.w:1)}}d={count:p,texture:T,size:new Ct(v,U)},n.set(a,d),a.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let c=0;for(let M=0;M<h.length;M++)c+=h[M];let g=a.morphTargetsRelative?1:1-c;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",h)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function ag(i,t,e,n){let s=new WeakMap;function r(l){let h=n.render.frame,u=l.geometry,p=t.get(l,u);if(s.get(p)!==h&&(t.update(p),s.set(p,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==h&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,h))),l.isSkinnedMesh){let d=l.skeleton;s.get(d)!==h&&(d.update(),s.set(d,h))}return p}function o(){s=new WeakMap}function a(l){let h=l.target;h.removeEventListener("dispose",a),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:r,dispose:o}}var Bo=class extends fn{constructor(t,e,n,s,r,o,a,l,h,u=Rs){if(u!==Rs&&u!==Ns)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Rs&&(n=Xi),n===void 0&&u===Ns&&(n=Us),super(null,s,r,o,a,l,u,n,h),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:an,this.minFilter=l!==void 0?l:an,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Wu=new fn,Yh=new Bo(1,1),Xu=new Po,qu=new Kl,Yu=new Fo,Zh=[],Jh=[],Kh=new Float32Array(16),jh=new Float32Array(9),Qh=new Float32Array(4);function Hs(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Zh[s];if(r===void 0&&(r=new Float32Array(s),Zh[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Ge(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function $e(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function ua(i,t){let e=Jh[t];e===void 0&&(e=new Int32Array(t),Jh[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function lg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function cg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ge(e,t))return;i.uniform2fv(this.addr,t),$e(e,t)}}function hg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ge(e,t))return;i.uniform3fv(this.addr,t),$e(e,t)}}function ug(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ge(e,t))return;i.uniform4fv(this.addr,t),$e(e,t)}}function dg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ge(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),$e(e,t)}else{if(Ge(e,n))return;Qh.set(n),i.uniformMatrix2fv(this.addr,!1,Qh),$e(e,n)}}function fg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ge(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),$e(e,t)}else{if(Ge(e,n))return;jh.set(n),i.uniformMatrix3fv(this.addr,!1,jh),$e(e,n)}}function pg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ge(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),$e(e,t)}else{if(Ge(e,n))return;Kh.set(n),i.uniformMatrix4fv(this.addr,!1,Kh),$e(e,n)}}function mg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function gg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ge(e,t))return;i.uniform2iv(this.addr,t),$e(e,t)}}function xg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ge(e,t))return;i.uniform3iv(this.addr,t),$e(e,t)}}function yg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ge(e,t))return;i.uniform4iv(this.addr,t),$e(e,t)}}function vg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function _g(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ge(e,t))return;i.uniform2uiv(this.addr,t),$e(e,t)}}function Mg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ge(e,t))return;i.uniform3uiv(this.addr,t),$e(e,t)}}function bg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ge(e,t))return;i.uniform4uiv(this.addr,t),$e(e,t)}}function Sg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Yh.compareFunction=zu,r=Yh):r=Wu,e.setTexture2D(t||r,s)}function wg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||qu,s)}function Eg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Yu,s)}function Tg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Xu,s)}function Ag(i){switch(i){case 5126:return lg;case 35664:return cg;case 35665:return hg;case 35666:return ug;case 35674:return dg;case 35675:return fg;case 35676:return pg;case 5124:case 35670:return mg;case 35667:case 35671:return gg;case 35668:case 35672:return xg;case 35669:case 35673:return yg;case 5125:return vg;case 36294:return _g;case 36295:return Mg;case 36296:return bg;case 35678:case 36198:case 36298:case 36306:case 35682:return Sg;case 35679:case 36299:case 36307:return wg;case 35680:case 36300:case 36308:case 36293:return Eg;case 36289:case 36303:case 36311:case 36292:return Tg}}function Rg(i,t){i.uniform1fv(this.addr,t)}function Cg(i,t){let e=Hs(t,this.size,2);i.uniform2fv(this.addr,e)}function Ig(i,t){let e=Hs(t,this.size,3);i.uniform3fv(this.addr,e)}function Pg(i,t){let e=Hs(t,this.size,4);i.uniform4fv(this.addr,e)}function Lg(i,t){let e=Hs(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Dg(i,t){let e=Hs(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Ug(i,t){let e=Hs(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Ng(i,t){i.uniform1iv(this.addr,t)}function kg(i,t){i.uniform2iv(this.addr,t)}function Fg(i,t){i.uniform3iv(this.addr,t)}function Og(i,t){i.uniform4iv(this.addr,t)}function zg(i,t){i.uniform1uiv(this.addr,t)}function Bg(i,t){i.uniform2uiv(this.addr,t)}function Hg(i,t){i.uniform3uiv(this.addr,t)}function Vg(i,t){i.uniform4uiv(this.addr,t)}function Gg(i,t,e){let n=this.cache,s=t.length,r=ua(e,s);Ge(n,r)||(i.uniform1iv(this.addr,r),$e(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Wu,r[o])}function $g(i,t,e){let n=this.cache,s=t.length,r=ua(e,s);Ge(n,r)||(i.uniform1iv(this.addr,r),$e(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||qu,r[o])}function Wg(i,t,e){let n=this.cache,s=t.length,r=ua(e,s);Ge(n,r)||(i.uniform1iv(this.addr,r),$e(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Yu,r[o])}function Xg(i,t,e){let n=this.cache,s=t.length,r=ua(e,s);Ge(n,r)||(i.uniform1iv(this.addr,r),$e(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Xu,r[o])}function qg(i){switch(i){case 5126:return Rg;case 35664:return Cg;case 35665:return Ig;case 35666:return Pg;case 35674:return Lg;case 35675:return Dg;case 35676:return Ug;case 5124:case 35670:return Ng;case 35667:case 35671:return kg;case 35668:case 35672:return Fg;case 35669:case 35673:return Og;case 5125:return zg;case 36294:return Bg;case 36295:return Hg;case 36296:return Vg;case 35678:case 36198:case 36298:case 36306:case 35682:return Gg;case 35679:case 36299:case 36307:return $g;case 35680:case 36300:case 36308:case 36293:return Wg;case 36289:case 36303:case 36311:case 36292:return Xg}}var tc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Ag(e.type)}},ec=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=qg(e.type)}},nc=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},nl=/(\w+)(\])?(\[|\.)?/g;function tu(i,t){i.seq.push(t),i.map[t.id]=t}function Yg(i,t,e){let n=i.name,s=n.length;for(nl.lastIndex=0;;){let r=nl.exec(n),o=nl.lastIndex,a=r[1],l=r[2]==="]",h=r[3];if(l&&(a=a|0),h===void 0||h==="["&&o+2===s){tu(e,h===void 0?new tc(a,i,t):new ec(a,i,t));break}else{let p=e.map[a];p===void 0&&(p=new nc(a),tu(e,p)),e=p}}}var Is=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);Yg(r,o,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function eu(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var Zg=37297,Jg=0;function Kg(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var nu=new ce;function jg(i){de._getMatrix(nu,de.workingColorSpace,i);let t=`mat3( ${nu.elements.map(e=>e.toFixed(4))} )`;switch(de.getTransfer(i)){case ha:return[t,"LinearTransferOETF"];case Me:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function iu(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Kg(i.getShaderSource(t),o)}else return s}function Qg(i,t){let e=jg(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function tx(i,t){let e;switch(t){case uf:e="Linear";break;case df:e="Reinhard";break;case ff:e="Cineon";break;case pf:e="ACESFilmic";break;case gf:e="AgX";break;case xf:e="Neutral";break;case mf:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var ho=new $;function ex(){de.getLuminanceCoefficients(ho);let i=ho.x.toFixed(4),t=ho.y.toFixed(4),e=ho.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function nx(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(cr).join(`
`)}function ix(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function sx(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function cr(i){return i!==""}function su(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function ru(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var rx=/^[ \t]*#include +<([\w\d./]+)>/gm;function ic(i){return i.replace(rx,ax)}var ox=new Map;function ax(i,t){let e=se[t];if(e===void 0){let n=ox.get(t);if(n!==void 0)e=se[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return ic(e)}var lx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ou(i){return i.replace(lx,cx)}function cx(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function au(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function hx(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Tu?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Lc?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Qn&&(t="SHADOWMAP_TYPE_VSM"),t}function ux(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ls:case Ds:t="ENVMAP_TYPE_CUBE";break;case ca:t="ENVMAP_TYPE_CUBE_UV";break}return t}function dx(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Ds:t="ENVMAP_MODE_REFRACTION";break}return t}function fx(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Au:t="ENVMAP_BLENDING_MULTIPLY";break;case cf:t="ENVMAP_BLENDING_MIX";break;case hf:t="ENVMAP_BLENDING_ADD";break}return t}function px(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function mx(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=hx(e),h=ux(e),u=dx(e),p=fx(e),d=px(e),c=nx(e),g=ix(r),M=s.createProgram(),x,f,b=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(x=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(cr).join(`
`),x.length>0&&(x+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(cr).join(`
`),f.length>0&&(f+=`
`)):(x=[au(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(cr).join(`
`),f=[au(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",e.envMap?"#define "+p:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Gn?"#define TONE_MAPPING":"",e.toneMapping!==Gn?se.tonemapping_pars_fragment:"",e.toneMapping!==Gn?tx("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",se.colorspace_pars_fragment,Qg("linearToOutputTexel",e.outputColorSpace),ex(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(cr).join(`
`)),o=ic(o),o=su(o,e),o=ru(o,e),a=ic(a),a=su(a,e),a=ru(a,e),o=ou(o),a=ou(a),e.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,x=[c,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,f=["#define varying in",e.glslVersion===_h?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===_h?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let _=b+x+o,v=b+f+a,U=eu(s,s.VERTEX_SHADER,_),P=eu(s,s.FRAGMENT_SHADER,v);s.attachShader(M,U),s.attachShader(M,P),e.index0AttributeName!==void 0?s.bindAttribLocation(M,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(M,0,"position"),s.linkProgram(M);function T(S){if(i.debug.checkShaderErrors){let E=s.getProgramInfoLog(M).trim(),I=s.getShaderInfoLog(U).trim(),N=s.getShaderInfoLog(P).trim(),q=!0,R=!0;if(s.getProgramParameter(M,s.LINK_STATUS)===!1)if(q=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,M,U,P);else{let H=iu(s,U,"vertex"),G=iu(s,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(M,s.VALIDATE_STATUS)+`

Material Name: `+S.name+`
Material Type: `+S.type+`

Program Info Log: `+E+`
`+H+`
`+G)}else E!==""?console.warn("THREE.WebGLProgram: Program Info Log:",E):(I===""||N==="")&&(R=!1);R&&(S.diagnostics={runnable:q,programLog:E,vertexShader:{log:I,prefix:x},fragmentShader:{log:N,prefix:f}})}s.deleteShader(U),s.deleteShader(P),A=new Is(s,M),y=sx(s,M)}let A;this.getUniforms=function(){return A===void 0&&T(this),A};let y;this.getAttributes=function(){return y===void 0&&T(this),y};let m=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return m===!1&&(m=s.getProgramParameter(M,Zg)),m},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(M),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Jg++,this.cacheKey=t,this.usedTimes=1,this.program=M,this.vertexShader=U,this.fragmentShader=P,this}var gx=0,sc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new rc(t),e.set(t,n)),n}},rc=class{constructor(t){this.id=gx++,this.code=t,this.usedTimes=0}};function xx(i,t,e,n,s,r,o){let a=new Do,l=new sc,h=new Set,u=[],p=s.logarithmicDepthBuffer,d=s.vertexTextures,c=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(y){return h.add(y),y===0?"uv":`uv${y}`}function x(y,m,S,E,I){let N=E.fog,q=I.geometry,R=y.isMeshStandardMaterial?E.environment:null,H=(y.isMeshStandardMaterial?e:t).get(y.envMap||R),G=H&&H.mapping===ca?H.image.height:null,nt=g[y.type];y.precision!==null&&(c=s.getMaxPrecision(y.precision),c!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",c,"instead."));let st=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,z=st!==void 0?st.length:0,St=0;q.morphAttributes.position!==void 0&&(St=1),q.morphAttributes.normal!==void 0&&(St=2),q.morphAttributes.color!==void 0&&(St=3);let K,Y,W,V;if(nt){let dt=Bn[nt];K=dt.vertexShader,Y=dt.fragmentShader}else K=y.vertexShader,Y=y.fragmentShader,l.update(y),W=l.getVertexShaderID(y),V=l.getFragmentShaderID(y);let Z=i.getRenderTarget(),ot=i.state.buffers.depth.getReversed(),gt=I.isInstancedMesh===!0,Tt=I.isBatchedMesh===!0,At=!!y.map,lt=!!y.matcap,pt=!!H,X=!!y.aoMap,Et=!!y.lightMap,Mt=!!y.bumpMap,et=!!y.normalMap,Rt=!!y.displacementMap,Vt=!!y.emissiveMap,Nt=!!y.metalnessMap,B=!!y.roughnessMap,D=y.anisotropy>0,ft=y.clearcoat>0,it=y.dispersion>0,rt=y.iridescence>0,at=y.sheen>0,_t=y.transmission>0,mt=D&&!!y.anisotropyMap,It=ft&&!!y.clearcoatMap,Pt=ft&&!!y.clearcoatNormalMap,bt=ft&&!!y.clearcoatRoughnessMap,Dt=rt&&!!y.iridescenceMap,Wt=rt&&!!y.iridescenceThicknessMap,Xt=at&&!!y.sheenColorMap,Lt=at&&!!y.sheenRoughnessMap,ne=!!y.specularMap,qt=!!y.specularColorMap,C=!!y.specularIntensityMap,L=_t&&!!y.transmissionMap,Q=_t&&!!y.thicknessMap,w=!!y.gradientMap,k=!!y.alphaMap,O=y.alphaTest>0,j=!!y.alphaHash,ct=!!y.extensions,J=Gn;y.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(J=i.toneMapping);let tt={shaderID:nt,shaderType:y.type,shaderName:y.name,vertexShader:K,fragmentShader:Y,defines:y.defines,customVertexShaderID:W,customFragmentShaderID:V,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:c,batching:Tt,batchingColor:Tt&&I._colorsTexture!==null,instancing:gt,instancingColor:gt&&I.instanceColor!==null,instancingMorph:gt&&I.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:Z===null?i.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:Bs,alphaToCoverage:!!y.alphaToCoverage,map:At,matcap:lt,envMap:pt,envMapMode:pt&&H.mapping,envMapCubeUVHeight:G,aoMap:X,lightMap:Et,bumpMap:Mt,normalMap:et,displacementMap:d&&Rt,emissiveMap:Vt,normalMapObjectSpace:et&&y.normalMapType===Mf,normalMapTangentSpace:et&&y.normalMapType===Ou,metalnessMap:Nt,roughnessMap:B,anisotropy:D,anisotropyMap:mt,clearcoat:ft,clearcoatMap:It,clearcoatNormalMap:Pt,clearcoatRoughnessMap:bt,dispersion:it,iridescence:rt,iridescenceMap:Dt,iridescenceThicknessMap:Wt,sheen:at,sheenColorMap:Xt,sheenRoughnessMap:Lt,specularMap:ne,specularColorMap:qt,specularIntensityMap:C,transmission:_t,transmissionMap:L,thicknessMap:Q,gradientMap:w,opaque:y.transparent===!1&&y.blending===As&&y.alphaToCoverage===!1,alphaMap:k,alphaTest:O,alphaHash:j,combine:y.combine,mapUv:At&&M(y.map.channel),aoMapUv:X&&M(y.aoMap.channel),lightMapUv:Et&&M(y.lightMap.channel),bumpMapUv:Mt&&M(y.bumpMap.channel),normalMapUv:et&&M(y.normalMap.channel),displacementMapUv:Rt&&M(y.displacementMap.channel),emissiveMapUv:Vt&&M(y.emissiveMap.channel),metalnessMapUv:Nt&&M(y.metalnessMap.channel),roughnessMapUv:B&&M(y.roughnessMap.channel),anisotropyMapUv:mt&&M(y.anisotropyMap.channel),clearcoatMapUv:It&&M(y.clearcoatMap.channel),clearcoatNormalMapUv:Pt&&M(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:bt&&M(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Dt&&M(y.iridescenceMap.channel),iridescenceThicknessMapUv:Wt&&M(y.iridescenceThicknessMap.channel),sheenColorMapUv:Xt&&M(y.sheenColorMap.channel),sheenRoughnessMapUv:Lt&&M(y.sheenRoughnessMap.channel),specularMapUv:ne&&M(y.specularMap.channel),specularColorMapUv:qt&&M(y.specularColorMap.channel),specularIntensityMapUv:C&&M(y.specularIntensityMap.channel),transmissionMapUv:L&&M(y.transmissionMap.channel),thicknessMapUv:Q&&M(y.thicknessMap.channel),alphaMapUv:k&&M(y.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(et||D),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!q.attributes.uv&&(At||k),fog:!!N,useFog:y.fog===!0,fogExp2:!!N&&N.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:p,reverseDepthBuffer:ot,skinning:I.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:z,morphTextureStride:St,numDirLights:m.directional.length,numPointLights:m.point.length,numSpotLights:m.spot.length,numSpotLightMaps:m.spotLightMap.length,numRectAreaLights:m.rectArea.length,numHemiLights:m.hemi.length,numDirLightShadows:m.directionalShadowMap.length,numPointLightShadows:m.pointShadowMap.length,numSpotLightShadows:m.spotShadowMap.length,numSpotLightShadowsWithMaps:m.numSpotLightShadowsWithMaps,numLightProbes:m.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&S.length>0,shadowMapType:i.shadowMap.type,toneMapping:J,decodeVideoTexture:At&&y.map.isVideoTexture===!0&&de.getTransfer(y.map.colorSpace)===Me,decodeVideoTextureEmissive:Vt&&y.emissiveMap.isVideoTexture===!0&&de.getTransfer(y.emissiveMap.colorSpace)===Me,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Oe,flipSided:y.side===Je,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:ct&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ct&&y.extensions.multiDraw===!0||Tt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return tt.vertexUv1s=h.has(1),tt.vertexUv2s=h.has(2),tt.vertexUv3s=h.has(3),h.clear(),tt}function f(y){let m=[];if(y.shaderID?m.push(y.shaderID):(m.push(y.customVertexShaderID),m.push(y.customFragmentShaderID)),y.defines!==void 0)for(let S in y.defines)m.push(S),m.push(y.defines[S]);return y.isRawShaderMaterial===!1&&(b(m,y),_(m,y),m.push(i.outputColorSpace)),m.push(y.customProgramCacheKey),m.join()}function b(y,m){y.push(m.precision),y.push(m.outputColorSpace),y.push(m.envMapMode),y.push(m.envMapCubeUVHeight),y.push(m.mapUv),y.push(m.alphaMapUv),y.push(m.lightMapUv),y.push(m.aoMapUv),y.push(m.bumpMapUv),y.push(m.normalMapUv),y.push(m.displacementMapUv),y.push(m.emissiveMapUv),y.push(m.metalnessMapUv),y.push(m.roughnessMapUv),y.push(m.anisotropyMapUv),y.push(m.clearcoatMapUv),y.push(m.clearcoatNormalMapUv),y.push(m.clearcoatRoughnessMapUv),y.push(m.iridescenceMapUv),y.push(m.iridescenceThicknessMapUv),y.push(m.sheenColorMapUv),y.push(m.sheenRoughnessMapUv),y.push(m.specularMapUv),y.push(m.specularColorMapUv),y.push(m.specularIntensityMapUv),y.push(m.transmissionMapUv),y.push(m.thicknessMapUv),y.push(m.combine),y.push(m.fogExp2),y.push(m.sizeAttenuation),y.push(m.morphTargetsCount),y.push(m.morphAttributeCount),y.push(m.numDirLights),y.push(m.numPointLights),y.push(m.numSpotLights),y.push(m.numSpotLightMaps),y.push(m.numHemiLights),y.push(m.numRectAreaLights),y.push(m.numDirLightShadows),y.push(m.numPointLightShadows),y.push(m.numSpotLightShadows),y.push(m.numSpotLightShadowsWithMaps),y.push(m.numLightProbes),y.push(m.shadowMapType),y.push(m.toneMapping),y.push(m.numClippingPlanes),y.push(m.numClipIntersection),y.push(m.depthPacking)}function _(y,m){a.disableAll(),m.supportsVertexTextures&&a.enable(0),m.instancing&&a.enable(1),m.instancingColor&&a.enable(2),m.instancingMorph&&a.enable(3),m.matcap&&a.enable(4),m.envMap&&a.enable(5),m.normalMapObjectSpace&&a.enable(6),m.normalMapTangentSpace&&a.enable(7),m.clearcoat&&a.enable(8),m.iridescence&&a.enable(9),m.alphaTest&&a.enable(10),m.vertexColors&&a.enable(11),m.vertexAlphas&&a.enable(12),m.vertexUv1s&&a.enable(13),m.vertexUv2s&&a.enable(14),m.vertexUv3s&&a.enable(15),m.vertexTangents&&a.enable(16),m.anisotropy&&a.enable(17),m.alphaHash&&a.enable(18),m.batching&&a.enable(19),m.dispersion&&a.enable(20),m.batchingColor&&a.enable(21),y.push(a.mask),a.disableAll(),m.fog&&a.enable(0),m.useFog&&a.enable(1),m.flatShading&&a.enable(2),m.logarithmicDepthBuffer&&a.enable(3),m.reverseDepthBuffer&&a.enable(4),m.skinning&&a.enable(5),m.morphTargets&&a.enable(6),m.morphNormals&&a.enable(7),m.morphColors&&a.enable(8),m.premultipliedAlpha&&a.enable(9),m.shadowMapEnabled&&a.enable(10),m.doubleSided&&a.enable(11),m.flipSided&&a.enable(12),m.useDepthPacking&&a.enable(13),m.dithering&&a.enable(14),m.transmission&&a.enable(15),m.sheen&&a.enable(16),m.opaque&&a.enable(17),m.pointsUvs&&a.enable(18),m.decodeVideoTexture&&a.enable(19),m.decodeVideoTextureEmissive&&a.enable(20),m.alphaToCoverage&&a.enable(21),y.push(a.mask)}function v(y){let m=g[y.type],S;if(m){let E=Bn[m];S=Hc.clone(E.uniforms)}else S=y.uniforms;return S}function U(y,m){let S;for(let E=0,I=u.length;E<I;E++){let N=u[E];if(N.cacheKey===m){S=N,++S.usedTimes;break}}return S===void 0&&(S=new mx(i,m,y,r),u.push(S)),S}function P(y){if(--y.usedTimes===0){let m=u.indexOf(y);u[m]=u[u.length-1],u.pop(),y.destroy()}}function T(y){l.remove(y)}function A(){l.dispose()}return{getParameters:x,getProgramCacheKey:f,getUniforms:v,acquireProgram:U,releaseProgram:P,releaseShaderCache:T,programs:u,dispose:A}}function yx(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function vx(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function lu(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function cu(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(p,d,c,g,M,x){let f=i[t];return f===void 0?(f={id:p.id,object:p,geometry:d,material:c,groupOrder:g,renderOrder:p.renderOrder,z:M,group:x},i[t]=f):(f.id=p.id,f.object=p,f.geometry=d,f.material=c,f.groupOrder=g,f.renderOrder=p.renderOrder,f.z=M,f.group=x),t++,f}function a(p,d,c,g,M,x){let f=o(p,d,c,g,M,x);c.transmission>0?n.push(f):c.transparent===!0?s.push(f):e.push(f)}function l(p,d,c,g,M,x){let f=o(p,d,c,g,M,x);c.transmission>0?n.unshift(f):c.transparent===!0?s.unshift(f):e.unshift(f)}function h(p,d){e.length>1&&e.sort(p||vx),n.length>1&&n.sort(d||lu),s.length>1&&s.sort(d||lu)}function u(){for(let p=t,d=i.length;p<d;p++){let c=i[p];if(c.id===null)break;c.id=null,c.object=null,c.geometry=null,c.material=null,c.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:u,sort:h}}function _x(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new cu,i.set(n,[o])):s>=r.length?(o=new cu,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function Mx(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new $,color:new Kt};break;case"SpotLight":e={position:new $,direction:new $,color:new Kt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new $,color:new Kt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new $,skyColor:new Kt,groundColor:new Kt};break;case"RectAreaLight":e={color:new Kt,position:new $,halfWidth:new $,halfHeight:new $};break}return i[t.id]=e,e}}}function bx(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var Sx=0;function wx(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Ex(i){let t=new Mx,e=bx(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)n.probe.push(new $);let s=new $,r=new pe,o=new pe;function a(h){let u=0,p=0,d=0;for(let y=0;y<9;y++)n.probe[y].set(0,0,0);let c=0,g=0,M=0,x=0,f=0,b=0,_=0,v=0,U=0,P=0,T=0;h.sort(wx);for(let y=0,m=h.length;y<m;y++){let S=h[y],E=S.color,I=S.intensity,N=S.distance,q=S.shadow&&S.shadow.map?S.shadow.map.texture:null;if(S.isAmbientLight)u+=E.r*I,p+=E.g*I,d+=E.b*I;else if(S.isLightProbe){for(let R=0;R<9;R++)n.probe[R].addScaledVector(S.sh.coefficients[R],I);T++}else if(S.isDirectionalLight){let R=t.get(S);if(R.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let H=S.shadow,G=e.get(S);G.shadowIntensity=H.intensity,G.shadowBias=H.bias,G.shadowNormalBias=H.normalBias,G.shadowRadius=H.radius,G.shadowMapSize=H.mapSize,n.directionalShadow[c]=G,n.directionalShadowMap[c]=q,n.directionalShadowMatrix[c]=S.shadow.matrix,b++}n.directional[c]=R,c++}else if(S.isSpotLight){let R=t.get(S);R.position.setFromMatrixPosition(S.matrixWorld),R.color.copy(E).multiplyScalar(I),R.distance=N,R.coneCos=Math.cos(S.angle),R.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),R.decay=S.decay,n.spot[M]=R;let H=S.shadow;if(S.map&&(n.spotLightMap[U]=S.map,U++,H.updateMatrices(S),S.castShadow&&P++),n.spotLightMatrix[M]=H.matrix,S.castShadow){let G=e.get(S);G.shadowIntensity=H.intensity,G.shadowBias=H.bias,G.shadowNormalBias=H.normalBias,G.shadowRadius=H.radius,G.shadowMapSize=H.mapSize,n.spotShadow[M]=G,n.spotShadowMap[M]=q,v++}M++}else if(S.isRectAreaLight){let R=t.get(S);R.color.copy(E).multiplyScalar(I),R.halfWidth.set(S.width*.5,0,0),R.halfHeight.set(0,S.height*.5,0),n.rectArea[x]=R,x++}else if(S.isPointLight){let R=t.get(S);if(R.color.copy(S.color).multiplyScalar(S.intensity),R.distance=S.distance,R.decay=S.decay,S.castShadow){let H=S.shadow,G=e.get(S);G.shadowIntensity=H.intensity,G.shadowBias=H.bias,G.shadowNormalBias=H.normalBias,G.shadowRadius=H.radius,G.shadowMapSize=H.mapSize,G.shadowCameraNear=H.camera.near,G.shadowCameraFar=H.camera.far,n.pointShadow[g]=G,n.pointShadowMap[g]=q,n.pointShadowMatrix[g]=S.shadow.matrix,_++}n.point[g]=R,g++}else if(S.isHemisphereLight){let R=t.get(S);R.skyColor.copy(S.color).multiplyScalar(I),R.groundColor.copy(S.groundColor).multiplyScalar(I),n.hemi[f]=R,f++}}x>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ot.LTC_FLOAT_1,n.rectAreaLTC2=Ot.LTC_FLOAT_2):(n.rectAreaLTC1=Ot.LTC_HALF_1,n.rectAreaLTC2=Ot.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=p,n.ambient[2]=d;let A=n.hash;(A.directionalLength!==c||A.pointLength!==g||A.spotLength!==M||A.rectAreaLength!==x||A.hemiLength!==f||A.numDirectionalShadows!==b||A.numPointShadows!==_||A.numSpotShadows!==v||A.numSpotMaps!==U||A.numLightProbes!==T)&&(n.directional.length=c,n.spot.length=M,n.rectArea.length=x,n.point.length=g,n.hemi.length=f,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.pointShadow.length=_,n.pointShadowMap.length=_,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=b,n.pointShadowMatrix.length=_,n.spotLightMatrix.length=v+U-P,n.spotLightMap.length=U,n.numSpotLightShadowsWithMaps=P,n.numLightProbes=T,A.directionalLength=c,A.pointLength=g,A.spotLength=M,A.rectAreaLength=x,A.hemiLength=f,A.numDirectionalShadows=b,A.numPointShadows=_,A.numSpotShadows=v,A.numSpotMaps=U,A.numLightProbes=T,n.version=Sx++)}function l(h,u){let p=0,d=0,c=0,g=0,M=0,x=u.matrixWorldInverse;for(let f=0,b=h.length;f<b;f++){let _=h[f];if(_.isDirectionalLight){let v=n.directional[p];v.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(x),p++}else if(_.isSpotLight){let v=n.spot[c];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(x),v.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(x),c++}else if(_.isRectAreaLight){let v=n.rectArea[g];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(x),o.identity(),r.copy(_.matrixWorld),r.premultiply(x),o.extractRotation(r),v.halfWidth.set(_.width*.5,0,0),v.halfHeight.set(0,_.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),g++}else if(_.isPointLight){let v=n.point[d];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(x),d++}else if(_.isHemisphereLight){let v=n.hemi[M];v.direction.setFromMatrixPosition(_.matrixWorld),v.direction.transformDirection(x),M++}}}return{setup:a,setupView:l,state:n}}function hu(i){let t=new Ex(i),e=[],n=[];function s(u){h.camera=u,e.length=0,n.length=0}function r(u){e.push(u)}function o(u){n.push(u)}function a(){t.setup(e)}function l(u){t.setupView(e,u)}let h={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:h,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function Tx(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new hu(i),t.set(s,[a])):r>=o.length?(a=new hu(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var oc=class extends oi{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=vf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},ac=class extends oi{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},Ax=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Rx=`uniform sampler2D shadow_pass;
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
}`;function Cx(i,t,e){let n=new xr,s=new Ct,r=new Ct,o=new ke,a=new oc({depthPacking:_f}),l=new ac,h={},u=e.maxTextureSize,p={[Ai]:Je,[Je]:Ai,[Oe]:Oe},d=new ln({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ct},radius:{value:4}},vertexShader:Ax,fragmentShader:Rx}),c=d.clone();c.defines.HORIZONTAL_PASS=1;let g=new be;g.setAttribute("position",new De(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let M=new Ie(g,d),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Tu;let f=this.type;this.render=function(P,T,A){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||P.length===0)return;let y=i.getRenderTarget(),m=i.getActiveCubeFace(),S=i.getActiveMipmapLevel(),E=i.state;E.setBlending(Ei),E.buffers.color.setClear(1,1,1,1),E.buffers.depth.setTest(!0),E.setScissorTest(!1);let I=f!==Qn&&this.type===Qn,N=f===Qn&&this.type!==Qn;for(let q=0,R=P.length;q<R;q++){let H=P[q],G=H.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",H,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);let nt=G.getFrameExtents();if(s.multiply(nt),r.copy(G.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/nt.x),s.x=r.x*nt.x,G.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/nt.y),s.y=r.y*nt.y,G.mapSize.y=r.y)),G.map===null||I===!0||N===!0){let z=this.type!==Qn?{minFilter:an,magFilter:an}:{};G.map!==null&&G.map.dispose(),G.map=new si(s.x,s.y,z),G.map.texture.name=H.name+".shadowMap",G.camera.updateProjectionMatrix()}i.setRenderTarget(G.map),i.clear();let st=G.getViewportCount();for(let z=0;z<st;z++){let St=G.getViewport(z);o.set(r.x*St.x,r.y*St.y,r.x*St.z,r.y*St.w),E.viewport(o),G.updateMatrices(H,z),n=G.getFrustum(),v(T,A,G.camera,H,this.type)}G.isPointLightShadow!==!0&&this.type===Qn&&b(G,A),G.needsUpdate=!1}f=this.type,x.needsUpdate=!1,i.setRenderTarget(y,m,S)};function b(P,T){let A=t.update(M);d.defines.VSM_SAMPLES!==P.blurSamples&&(d.defines.VSM_SAMPLES=P.blurSamples,c.defines.VSM_SAMPLES=P.blurSamples,d.needsUpdate=!0,c.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new si(s.x,s.y)),d.uniforms.shadow_pass.value=P.map.texture,d.uniforms.resolution.value=P.mapSize,d.uniforms.radius.value=P.radius,i.setRenderTarget(P.mapPass),i.clear(),i.renderBufferDirect(T,null,A,d,M,null),c.uniforms.shadow_pass.value=P.mapPass.texture,c.uniforms.resolution.value=P.mapSize,c.uniforms.radius.value=P.radius,i.setRenderTarget(P.map),i.clear(),i.renderBufferDirect(T,null,A,c,M,null)}function _(P,T,A,y){let m=null,S=A.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(S!==void 0)m=S;else if(m=A.isPointLight===!0?l:a,i.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){let E=m.uuid,I=T.uuid,N=h[E];N===void 0&&(N={},h[E]=N);let q=N[I];q===void 0&&(q=m.clone(),N[I]=q,T.addEventListener("dispose",U)),m=q}if(m.visible=T.visible,m.wireframe=T.wireframe,y===Qn?m.side=T.shadowSide!==null?T.shadowSide:T.side:m.side=T.shadowSide!==null?T.shadowSide:p[T.side],m.alphaMap=T.alphaMap,m.alphaTest=T.alphaTest,m.map=T.map,m.clipShadows=T.clipShadows,m.clippingPlanes=T.clippingPlanes,m.clipIntersection=T.clipIntersection,m.displacementMap=T.displacementMap,m.displacementScale=T.displacementScale,m.displacementBias=T.displacementBias,m.wireframeLinewidth=T.wireframeLinewidth,m.linewidth=T.linewidth,A.isPointLight===!0&&m.isMeshDistanceMaterial===!0){let E=i.properties.get(m);E.light=A}return m}function v(P,T,A,y,m){if(P.visible===!1)return;if(P.layers.test(T.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&m===Qn)&&(!P.frustumCulled||n.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,P.matrixWorld);let I=t.update(P),N=P.material;if(Array.isArray(N)){let q=I.groups;for(let R=0,H=q.length;R<H;R++){let G=q[R],nt=N[G.materialIndex];if(nt&&nt.visible){let st=_(P,nt,y,m);P.onBeforeShadow(i,P,T,A,I,st,G),i.renderBufferDirect(A,null,I,st,P,G),P.onAfterShadow(i,P,T,A,I,st,G)}}}else if(N.visible){let q=_(P,N,y,m);P.onBeforeShadow(i,P,T,A,I,q,null),i.renderBufferDirect(A,null,I,q,P,null),P.onAfterShadow(i,P,T,A,I,q,null)}}let E=P.children;for(let I=0,N=E.length;I<N;I++)v(E[I],T,A,y,m)}function U(P){P.target.removeEventListener("dispose",U);for(let A in h){let y=h[A],m=P.target.uuid;m in y&&(y[m].dispose(),delete y[m])}}}var Ix={[ul]:dl,[fl]:gl,[pl]:xl,[Ps]:ml,[dl]:ul,[gl]:fl,[xl]:pl,[ml]:Ps};function Px(i,t){function e(){let L=!1,Q=new ke,w=null,k=new ke(0,0,0,0);return{setMask:function(O){w!==O&&!L&&(i.colorMask(O,O,O,O),w=O)},setLocked:function(O){L=O},setClear:function(O,j,ct,J,tt){tt===!0&&(O*=J,j*=J,ct*=J),Q.set(O,j,ct,J),k.equals(Q)===!1&&(i.clearColor(O,j,ct,J),k.copy(Q))},reset:function(){L=!1,w=null,k.set(-1,0,0,0)}}}function n(){let L=!1,Q=!1,w=null,k=null,O=null;return{setReversed:function(j){if(Q!==j){let ct=t.get("EXT_clip_control");Q?ct.clipControlEXT(ct.LOWER_LEFT_EXT,ct.ZERO_TO_ONE_EXT):ct.clipControlEXT(ct.LOWER_LEFT_EXT,ct.NEGATIVE_ONE_TO_ONE_EXT);let J=O;O=null,this.setClear(J)}Q=j},getReversed:function(){return Q},setTest:function(j){j?Z(i.DEPTH_TEST):ot(i.DEPTH_TEST)},setMask:function(j){w!==j&&!L&&(i.depthMask(j),w=j)},setFunc:function(j){if(Q&&(j=Ix[j]),k!==j){switch(j){case ul:i.depthFunc(i.NEVER);break;case dl:i.depthFunc(i.ALWAYS);break;case fl:i.depthFunc(i.LESS);break;case Ps:i.depthFunc(i.LEQUAL);break;case pl:i.depthFunc(i.EQUAL);break;case ml:i.depthFunc(i.GEQUAL);break;case gl:i.depthFunc(i.GREATER);break;case xl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}k=j}},setLocked:function(j){L=j},setClear:function(j){O!==j&&(Q&&(j=1-j),i.clearDepth(j),O=j)},reset:function(){L=!1,w=null,k=null,O=null,Q=!1}}}function s(){let L=!1,Q=null,w=null,k=null,O=null,j=null,ct=null,J=null,tt=null;return{setTest:function(dt){L||(dt?Z(i.STENCIL_TEST):ot(i.STENCIL_TEST))},setMask:function(dt){Q!==dt&&!L&&(i.stencilMask(dt),Q=dt)},setFunc:function(dt,wt,Ft){(w!==dt||k!==wt||O!==Ft)&&(i.stencilFunc(dt,wt,Ft),w=dt,k=wt,O=Ft)},setOp:function(dt,wt,Ft){(j!==dt||ct!==wt||J!==Ft)&&(i.stencilOp(dt,wt,Ft),j=dt,ct=wt,J=Ft)},setLocked:function(dt){L=dt},setClear:function(dt){tt!==dt&&(i.clearStencil(dt),tt=dt)},reset:function(){L=!1,Q=null,w=null,k=null,O=null,j=null,ct=null,J=null,tt=null}}}let r=new e,o=new n,a=new s,l=new WeakMap,h=new WeakMap,u={},p={},d=new WeakMap,c=[],g=null,M=!1,x=null,f=null,b=null,_=null,v=null,U=null,P=null,T=new Kt(0,0,0),A=0,y=!1,m=null,S=null,E=null,I=null,N=null,q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),R=!1,H=0,G=i.getParameter(i.VERSION);G.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(G)[1]),R=H>=1):G.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),R=H>=2);let nt=null,st={},z=i.getParameter(i.SCISSOR_BOX),St=i.getParameter(i.VIEWPORT),K=new ke().fromArray(z),Y=new ke().fromArray(St);function W(L,Q,w,k){let O=new Uint8Array(4),j=i.createTexture();i.bindTexture(L,j),i.texParameteri(L,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(L,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ct=0;ct<w;ct++)L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY?i.texImage3D(Q,0,i.RGBA,1,1,k,0,i.RGBA,i.UNSIGNED_BYTE,O):i.texImage2D(Q+ct,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,O);return j}let V={};V[i.TEXTURE_2D]=W(i.TEXTURE_2D,i.TEXTURE_2D,1),V[i.TEXTURE_CUBE_MAP]=W(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),V[i.TEXTURE_2D_ARRAY]=W(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),V[i.TEXTURE_3D]=W(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),Z(i.DEPTH_TEST),o.setFunc(Ps),Mt(!1),et(dh),Z(i.CULL_FACE),X(Ei);function Z(L){u[L]!==!0&&(i.enable(L),u[L]=!0)}function ot(L){u[L]!==!1&&(i.disable(L),u[L]=!1)}function gt(L,Q){return p[L]!==Q?(i.bindFramebuffer(L,Q),p[L]=Q,L===i.DRAW_FRAMEBUFFER&&(p[i.FRAMEBUFFER]=Q),L===i.FRAMEBUFFER&&(p[i.DRAW_FRAMEBUFFER]=Q),!0):!1}function Tt(L,Q){let w=c,k=!1;if(L){w=d.get(Q),w===void 0&&(w=[],d.set(Q,w));let O=L.textures;if(w.length!==O.length||w[0]!==i.COLOR_ATTACHMENT0){for(let j=0,ct=O.length;j<ct;j++)w[j]=i.COLOR_ATTACHMENT0+j;w.length=O.length,k=!0}}else w[0]!==i.BACK&&(w[0]=i.BACK,k=!0);k&&i.drawBuffers(w)}function At(L){return g!==L?(i.useProgram(L),g=L,!0):!1}let lt={[Hi]:i.FUNC_ADD,[Wd]:i.FUNC_SUBTRACT,[Xd]:i.FUNC_REVERSE_SUBTRACT};lt[qd]=i.MIN,lt[Yd]=i.MAX;let pt={[Zd]:i.ZERO,[Jd]:i.ONE,[Kd]:i.SRC_COLOR,[cl]:i.SRC_ALPHA,[sf]:i.SRC_ALPHA_SATURATE,[ef]:i.DST_COLOR,[Qd]:i.DST_ALPHA,[jd]:i.ONE_MINUS_SRC_COLOR,[hl]:i.ONE_MINUS_SRC_ALPHA,[nf]:i.ONE_MINUS_DST_COLOR,[tf]:i.ONE_MINUS_DST_ALPHA,[rf]:i.CONSTANT_COLOR,[of]:i.ONE_MINUS_CONSTANT_COLOR,[af]:i.CONSTANT_ALPHA,[lf]:i.ONE_MINUS_CONSTANT_ALPHA};function X(L,Q,w,k,O,j,ct,J,tt,dt){if(L===Ei){M===!0&&(ot(i.BLEND),M=!1);return}if(M===!1&&(Z(i.BLEND),M=!0),L!==$d){if(L!==x||dt!==y){if((f!==Hi||v!==Hi)&&(i.blendEquation(i.FUNC_ADD),f=Hi,v=Hi),dt)switch(L){case As:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case fh:i.blendFunc(i.ONE,i.ONE);break;case ph:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case mh:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case As:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case fh:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case ph:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case mh:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}b=null,_=null,U=null,P=null,T.set(0,0,0),A=0,x=L,y=dt}return}O=O||Q,j=j||w,ct=ct||k,(Q!==f||O!==v)&&(i.blendEquationSeparate(lt[Q],lt[O]),f=Q,v=O),(w!==b||k!==_||j!==U||ct!==P)&&(i.blendFuncSeparate(pt[w],pt[k],pt[j],pt[ct]),b=w,_=k,U=j,P=ct),(J.equals(T)===!1||tt!==A)&&(i.blendColor(J.r,J.g,J.b,tt),T.copy(J),A=tt),x=L,y=!1}function Et(L,Q){L.side===Oe?ot(i.CULL_FACE):Z(i.CULL_FACE);let w=L.side===Je;Q&&(w=!w),Mt(w),L.blending===As&&L.transparent===!1?X(Ei):X(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),o.setFunc(L.depthFunc),o.setTest(L.depthTest),o.setMask(L.depthWrite),r.setMask(L.colorWrite);let k=L.stencilWrite;a.setTest(k),k&&(a.setMask(L.stencilWriteMask),a.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),a.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),Vt(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?Z(i.SAMPLE_ALPHA_TO_COVERAGE):ot(i.SAMPLE_ALPHA_TO_COVERAGE)}function Mt(L){m!==L&&(L?i.frontFace(i.CW):i.frontFace(i.CCW),m=L)}function et(L){L!==Vd?(Z(i.CULL_FACE),L!==S&&(L===dh?i.cullFace(i.BACK):L===Gd?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ot(i.CULL_FACE),S=L}function Rt(L){L!==E&&(R&&i.lineWidth(L),E=L)}function Vt(L,Q,w){L?(Z(i.POLYGON_OFFSET_FILL),(I!==Q||N!==w)&&(i.polygonOffset(Q,w),I=Q,N=w)):ot(i.POLYGON_OFFSET_FILL)}function Nt(L){L?Z(i.SCISSOR_TEST):ot(i.SCISSOR_TEST)}function B(L){L===void 0&&(L=i.TEXTURE0+q-1),nt!==L&&(i.activeTexture(L),nt=L)}function D(L,Q,w){w===void 0&&(nt===null?w=i.TEXTURE0+q-1:w=nt);let k=st[w];k===void 0&&(k={type:void 0,texture:void 0},st[w]=k),(k.type!==L||k.texture!==Q)&&(nt!==w&&(i.activeTexture(w),nt=w),i.bindTexture(L,Q||V[L]),k.type=L,k.texture=Q)}function ft(){let L=st[nt];L!==void 0&&L.type!==void 0&&(i.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function it(){try{i.compressedTexImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function rt(){try{i.compressedTexImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function at(){try{i.texSubImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function _t(){try{i.texSubImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function mt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function It(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Pt(){try{i.texStorage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function bt(){try{i.texStorage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Dt(){try{i.texImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Wt(){try{i.texImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Xt(L){K.equals(L)===!1&&(i.scissor(L.x,L.y,L.z,L.w),K.copy(L))}function Lt(L){Y.equals(L)===!1&&(i.viewport(L.x,L.y,L.z,L.w),Y.copy(L))}function ne(L,Q){let w=h.get(Q);w===void 0&&(w=new WeakMap,h.set(Q,w));let k=w.get(L);k===void 0&&(k=i.getUniformBlockIndex(Q,L.name),w.set(L,k))}function qt(L,Q){let k=h.get(Q).get(L);l.get(Q)!==k&&(i.uniformBlockBinding(Q,k,L.__bindingPointIndex),l.set(Q,k))}function C(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},nt=null,st={},p={},d=new WeakMap,c=[],g=null,M=!1,x=null,f=null,b=null,_=null,v=null,U=null,P=null,T=new Kt(0,0,0),A=0,y=!1,m=null,S=null,E=null,I=null,N=null,K.set(0,0,i.canvas.width,i.canvas.height),Y.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:Z,disable:ot,bindFramebuffer:gt,drawBuffers:Tt,useProgram:At,setBlending:X,setMaterial:Et,setFlipSided:Mt,setCullFace:et,setLineWidth:Rt,setPolygonOffset:Vt,setScissorTest:Nt,activeTexture:B,bindTexture:D,unbindTexture:ft,compressedTexImage2D:it,compressedTexImage3D:rt,texImage2D:Dt,texImage3D:Wt,updateUBOMapping:ne,uniformBlockBinding:qt,texStorage2D:Pt,texStorage3D:bt,texSubImage2D:at,texSubImage3D:_t,compressedTexSubImage2D:mt,compressedTexSubImage3D:It,scissor:Xt,viewport:Lt,reset:C}}function uu(i,t,e,n){let s=Lx(n);switch(e){case Lu:return i*t;case Uu:return i*t;case Nu:return i*t*2;case kc:return i*t/s.components*s.byteLength;case Fc:return i*t/s.components*s.byteLength;case ku:return i*t*2/s.components*s.byteLength;case Oc:return i*t*2/s.components*s.byteLength;case Du:return i*t*3/s.components*s.byteLength;case _n:return i*t*4/s.components*s.byteLength;case zc:return i*t*4/s.components*s.byteLength;case bo:case So:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case wo:case Eo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case bl:case wl:return Math.max(i,16)*Math.max(t,8)/4;case Ml:case Sl:return Math.max(i,8)*Math.max(t,8)/2;case El:case Tl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Al:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Rl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Cl:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Il:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Pl:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Ll:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Dl:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Ul:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Nl:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case kl:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Fl:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Ol:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case zl:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Bl:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Hl:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case To:case Vl:case Gl:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Fu:case $l:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Wl:case Xl:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Lx(i){switch(i){case ii:case Cu:return{byteLength:1,components:1};case mr:case Iu:case Cr:return{byteLength:2,components:1};case Uc:case Nc:return{byteLength:2,components:4};case Xi:case Dc:case Vn:return{byteLength:4,components:1};case Pu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function Dx(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new Ct,u=new WeakMap,p,d=new WeakMap,c=!1;try{c=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(B,D){return c?new OffscreenCanvas(B,D):Co("canvas")}function M(B,D,ft){let it=1,rt=Nt(B);if((rt.width>ft||rt.height>ft)&&(it=ft/Math.max(rt.width,rt.height)),it<1)if(typeof HTMLImageElement<"u"&&B instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&B instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&B instanceof ImageBitmap||typeof VideoFrame<"u"&&B instanceof VideoFrame){let at=Math.floor(it*rt.width),_t=Math.floor(it*rt.height);p===void 0&&(p=g(at,_t));let mt=D?g(at,_t):p;return mt.width=at,mt.height=_t,mt.getContext("2d").drawImage(B,0,0,at,_t),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+rt.width+"x"+rt.height+") to ("+at+"x"+_t+")."),mt}else return"data"in B&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+rt.width+"x"+rt.height+")."),B;return B}function x(B){return B.generateMipmaps}function f(B){i.generateMipmap(B)}function b(B){return B.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:B.isWebGL3DRenderTarget?i.TEXTURE_3D:B.isWebGLArrayRenderTarget||B.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function _(B,D,ft,it,rt=!1){if(B!==null){if(i[B]!==void 0)return i[B];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+B+"'")}let at=D;if(D===i.RED&&(ft===i.FLOAT&&(at=i.R32F),ft===i.HALF_FLOAT&&(at=i.R16F),ft===i.UNSIGNED_BYTE&&(at=i.R8)),D===i.RED_INTEGER&&(ft===i.UNSIGNED_BYTE&&(at=i.R8UI),ft===i.UNSIGNED_SHORT&&(at=i.R16UI),ft===i.UNSIGNED_INT&&(at=i.R32UI),ft===i.BYTE&&(at=i.R8I),ft===i.SHORT&&(at=i.R16I),ft===i.INT&&(at=i.R32I)),D===i.RG&&(ft===i.FLOAT&&(at=i.RG32F),ft===i.HALF_FLOAT&&(at=i.RG16F),ft===i.UNSIGNED_BYTE&&(at=i.RG8)),D===i.RG_INTEGER&&(ft===i.UNSIGNED_BYTE&&(at=i.RG8UI),ft===i.UNSIGNED_SHORT&&(at=i.RG16UI),ft===i.UNSIGNED_INT&&(at=i.RG32UI),ft===i.BYTE&&(at=i.RG8I),ft===i.SHORT&&(at=i.RG16I),ft===i.INT&&(at=i.RG32I)),D===i.RGB_INTEGER&&(ft===i.UNSIGNED_BYTE&&(at=i.RGB8UI),ft===i.UNSIGNED_SHORT&&(at=i.RGB16UI),ft===i.UNSIGNED_INT&&(at=i.RGB32UI),ft===i.BYTE&&(at=i.RGB8I),ft===i.SHORT&&(at=i.RGB16I),ft===i.INT&&(at=i.RGB32I)),D===i.RGBA_INTEGER&&(ft===i.UNSIGNED_BYTE&&(at=i.RGBA8UI),ft===i.UNSIGNED_SHORT&&(at=i.RGBA16UI),ft===i.UNSIGNED_INT&&(at=i.RGBA32UI),ft===i.BYTE&&(at=i.RGBA8I),ft===i.SHORT&&(at=i.RGBA16I),ft===i.INT&&(at=i.RGBA32I)),D===i.RGB&&ft===i.UNSIGNED_INT_5_9_9_9_REV&&(at=i.RGB9_E5),D===i.RGBA){let _t=rt?ha:de.getTransfer(it);ft===i.FLOAT&&(at=i.RGBA32F),ft===i.HALF_FLOAT&&(at=i.RGBA16F),ft===i.UNSIGNED_BYTE&&(at=_t===Me?i.SRGB8_ALPHA8:i.RGBA8),ft===i.UNSIGNED_SHORT_4_4_4_4&&(at=i.RGBA4),ft===i.UNSIGNED_SHORT_5_5_5_1&&(at=i.RGB5_A1)}return(at===i.R16F||at===i.R32F||at===i.RG16F||at===i.RG32F||at===i.RGBA16F||at===i.RGBA32F)&&t.get("EXT_color_buffer_float"),at}function v(B,D){let ft;return B?D===null||D===Xi||D===Us?ft=i.DEPTH24_STENCIL8:D===Vn?ft=i.DEPTH32F_STENCIL8:D===mr&&(ft=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):D===null||D===Xi||D===Us?ft=i.DEPTH_COMPONENT24:D===Vn?ft=i.DEPTH_COMPONENT32F:D===mr&&(ft=i.DEPTH_COMPONENT16),ft}function U(B,D){return x(B)===!0||B.isFramebufferTexture&&B.minFilter!==an&&B.minFilter!==Hn?Math.log2(Math.max(D.width,D.height))+1:B.mipmaps!==void 0&&B.mipmaps.length>0?B.mipmaps.length:B.isCompressedTexture&&Array.isArray(B.image)?D.mipmaps.length:1}function P(B){let D=B.target;D.removeEventListener("dispose",P),A(D),D.isVideoTexture&&u.delete(D)}function T(B){let D=B.target;D.removeEventListener("dispose",T),m(D)}function A(B){let D=n.get(B);if(D.__webglInit===void 0)return;let ft=B.source,it=d.get(ft);if(it){let rt=it[D.__cacheKey];rt.usedTimes--,rt.usedTimes===0&&y(B),Object.keys(it).length===0&&d.delete(ft)}n.remove(B)}function y(B){let D=n.get(B);i.deleteTexture(D.__webglTexture);let ft=B.source,it=d.get(ft);delete it[D.__cacheKey],o.memory.textures--}function m(B){let D=n.get(B);if(B.depthTexture&&(B.depthTexture.dispose(),n.remove(B.depthTexture)),B.isWebGLCubeRenderTarget)for(let it=0;it<6;it++){if(Array.isArray(D.__webglFramebuffer[it]))for(let rt=0;rt<D.__webglFramebuffer[it].length;rt++)i.deleteFramebuffer(D.__webglFramebuffer[it][rt]);else i.deleteFramebuffer(D.__webglFramebuffer[it]);D.__webglDepthbuffer&&i.deleteRenderbuffer(D.__webglDepthbuffer[it])}else{if(Array.isArray(D.__webglFramebuffer))for(let it=0;it<D.__webglFramebuffer.length;it++)i.deleteFramebuffer(D.__webglFramebuffer[it]);else i.deleteFramebuffer(D.__webglFramebuffer);if(D.__webglDepthbuffer&&i.deleteRenderbuffer(D.__webglDepthbuffer),D.__webglMultisampledFramebuffer&&i.deleteFramebuffer(D.__webglMultisampledFramebuffer),D.__webglColorRenderbuffer)for(let it=0;it<D.__webglColorRenderbuffer.length;it++)D.__webglColorRenderbuffer[it]&&i.deleteRenderbuffer(D.__webglColorRenderbuffer[it]);D.__webglDepthRenderbuffer&&i.deleteRenderbuffer(D.__webglDepthRenderbuffer)}let ft=B.textures;for(let it=0,rt=ft.length;it<rt;it++){let at=n.get(ft[it]);at.__webglTexture&&(i.deleteTexture(at.__webglTexture),o.memory.textures--),n.remove(ft[it])}n.remove(B)}let S=0;function E(){S=0}function I(){let B=S;return B>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+B+" texture units while this GPU supports only "+s.maxTextures),S+=1,B}function N(B){let D=[];return D.push(B.wrapS),D.push(B.wrapT),D.push(B.wrapR||0),D.push(B.magFilter),D.push(B.minFilter),D.push(B.anisotropy),D.push(B.internalFormat),D.push(B.format),D.push(B.type),D.push(B.generateMipmaps),D.push(B.premultiplyAlpha),D.push(B.flipY),D.push(B.unpackAlignment),D.push(B.colorSpace),D.join()}function q(B,D){let ft=n.get(B);if(B.isVideoTexture&&Rt(B),B.isRenderTargetTexture===!1&&B.version>0&&ft.__version!==B.version){let it=B.image;if(it===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(it.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(ft,B,D);return}}e.bindTexture(i.TEXTURE_2D,ft.__webglTexture,i.TEXTURE0+D)}function R(B,D){let ft=n.get(B);if(B.version>0&&ft.__version!==B.version){Y(ft,B,D);return}e.bindTexture(i.TEXTURE_2D_ARRAY,ft.__webglTexture,i.TEXTURE0+D)}function H(B,D){let ft=n.get(B);if(B.version>0&&ft.__version!==B.version){Y(ft,B,D);return}e.bindTexture(i.TEXTURE_3D,ft.__webglTexture,i.TEXTURE0+D)}function G(B,D){let ft=n.get(B);if(B.version>0&&ft.__version!==B.version){W(ft,B,D);return}e.bindTexture(i.TEXTURE_CUBE_MAP,ft.__webglTexture,i.TEXTURE0+D)}let nt={[Wi]:i.REPEAT,[Gi]:i.CLAMP_TO_EDGE,[_l]:i.MIRRORED_REPEAT},st={[an]:i.NEAREST,[yf]:i.NEAREST_MIPMAP_NEAREST,[$r]:i.NEAREST_MIPMAP_LINEAR,[Hn]:i.LINEAR,[Ca]:i.LINEAR_MIPMAP_NEAREST,[$i]:i.LINEAR_MIPMAP_LINEAR},z={[bf]:i.NEVER,[Rf]:i.ALWAYS,[Sf]:i.LESS,[zu]:i.LEQUAL,[wf]:i.EQUAL,[Af]:i.GEQUAL,[Ef]:i.GREATER,[Tf]:i.NOTEQUAL};function St(B,D){if(D.type===Vn&&t.has("OES_texture_float_linear")===!1&&(D.magFilter===Hn||D.magFilter===Ca||D.magFilter===$r||D.magFilter===$i||D.minFilter===Hn||D.minFilter===Ca||D.minFilter===$r||D.minFilter===$i)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(B,i.TEXTURE_WRAP_S,nt[D.wrapS]),i.texParameteri(B,i.TEXTURE_WRAP_T,nt[D.wrapT]),(B===i.TEXTURE_3D||B===i.TEXTURE_2D_ARRAY)&&i.texParameteri(B,i.TEXTURE_WRAP_R,nt[D.wrapR]),i.texParameteri(B,i.TEXTURE_MAG_FILTER,st[D.magFilter]),i.texParameteri(B,i.TEXTURE_MIN_FILTER,st[D.minFilter]),D.compareFunction&&(i.texParameteri(B,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(B,i.TEXTURE_COMPARE_FUNC,z[D.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(D.magFilter===an||D.minFilter!==$r&&D.minFilter!==$i||D.type===Vn&&t.has("OES_texture_float_linear")===!1)return;if(D.anisotropy>1||n.get(D).__currentAnisotropy){let ft=t.get("EXT_texture_filter_anisotropic");i.texParameterf(B,ft.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(D.anisotropy,s.getMaxAnisotropy())),n.get(D).__currentAnisotropy=D.anisotropy}}}function K(B,D){let ft=!1;B.__webglInit===void 0&&(B.__webglInit=!0,D.addEventListener("dispose",P));let it=D.source,rt=d.get(it);rt===void 0&&(rt={},d.set(it,rt));let at=N(D);if(at!==B.__cacheKey){rt[at]===void 0&&(rt[at]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,ft=!0),rt[at].usedTimes++;let _t=rt[B.__cacheKey];_t!==void 0&&(rt[B.__cacheKey].usedTimes--,_t.usedTimes===0&&y(D)),B.__cacheKey=at,B.__webglTexture=rt[at].texture}return ft}function Y(B,D,ft){let it=i.TEXTURE_2D;(D.isDataArrayTexture||D.isCompressedArrayTexture)&&(it=i.TEXTURE_2D_ARRAY),D.isData3DTexture&&(it=i.TEXTURE_3D);let rt=K(B,D),at=D.source;e.bindTexture(it,B.__webglTexture,i.TEXTURE0+ft);let _t=n.get(at);if(at.version!==_t.__version||rt===!0){e.activeTexture(i.TEXTURE0+ft);let mt=de.getPrimaries(de.workingColorSpace),It=D.colorSpace===Si?null:de.getPrimaries(D.colorSpace),Pt=D.colorSpace===Si||mt===It?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,D.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,D.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pt);let bt=M(D.image,!1,s.maxTextureSize);bt=Vt(D,bt);let Dt=r.convert(D.format,D.colorSpace),Wt=r.convert(D.type),Xt=_(D.internalFormat,Dt,Wt,D.colorSpace,D.isVideoTexture);St(it,D);let Lt,ne=D.mipmaps,qt=D.isVideoTexture!==!0,C=_t.__version===void 0||rt===!0,L=at.dataReady,Q=U(D,bt);if(D.isDepthTexture)Xt=v(D.format===Ns,D.type),C&&(qt?e.texStorage2D(i.TEXTURE_2D,1,Xt,bt.width,bt.height):e.texImage2D(i.TEXTURE_2D,0,Xt,bt.width,bt.height,0,Dt,Wt,null));else if(D.isDataTexture)if(ne.length>0){qt&&C&&e.texStorage2D(i.TEXTURE_2D,Q,Xt,ne[0].width,ne[0].height);for(let w=0,k=ne.length;w<k;w++)Lt=ne[w],qt?L&&e.texSubImage2D(i.TEXTURE_2D,w,0,0,Lt.width,Lt.height,Dt,Wt,Lt.data):e.texImage2D(i.TEXTURE_2D,w,Xt,Lt.width,Lt.height,0,Dt,Wt,Lt.data);D.generateMipmaps=!1}else qt?(C&&e.texStorage2D(i.TEXTURE_2D,Q,Xt,bt.width,bt.height),L&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,bt.width,bt.height,Dt,Wt,bt.data)):e.texImage2D(i.TEXTURE_2D,0,Xt,bt.width,bt.height,0,Dt,Wt,bt.data);else if(D.isCompressedTexture)if(D.isCompressedArrayTexture){qt&&C&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Q,Xt,ne[0].width,ne[0].height,bt.depth);for(let w=0,k=ne.length;w<k;w++)if(Lt=ne[w],D.format!==_n)if(Dt!==null)if(qt){if(L)if(D.layerUpdates.size>0){let O=uu(Lt.width,Lt.height,D.format,D.type);for(let j of D.layerUpdates){let ct=Lt.data.subarray(j*O/Lt.data.BYTES_PER_ELEMENT,(j+1)*O/Lt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,w,0,0,j,Lt.width,Lt.height,1,Dt,ct)}D.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,w,0,0,0,Lt.width,Lt.height,bt.depth,Dt,Lt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,w,Xt,Lt.width,Lt.height,bt.depth,0,Lt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else qt?L&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,w,0,0,0,Lt.width,Lt.height,bt.depth,Dt,Wt,Lt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,w,Xt,Lt.width,Lt.height,bt.depth,0,Dt,Wt,Lt.data)}else{qt&&C&&e.texStorage2D(i.TEXTURE_2D,Q,Xt,ne[0].width,ne[0].height);for(let w=0,k=ne.length;w<k;w++)Lt=ne[w],D.format!==_n?Dt!==null?qt?L&&e.compressedTexSubImage2D(i.TEXTURE_2D,w,0,0,Lt.width,Lt.height,Dt,Lt.data):e.compressedTexImage2D(i.TEXTURE_2D,w,Xt,Lt.width,Lt.height,0,Lt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qt?L&&e.texSubImage2D(i.TEXTURE_2D,w,0,0,Lt.width,Lt.height,Dt,Wt,Lt.data):e.texImage2D(i.TEXTURE_2D,w,Xt,Lt.width,Lt.height,0,Dt,Wt,Lt.data)}else if(D.isDataArrayTexture)if(qt){if(C&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Q,Xt,bt.width,bt.height,bt.depth),L)if(D.layerUpdates.size>0){let w=uu(bt.width,bt.height,D.format,D.type);for(let k of D.layerUpdates){let O=bt.data.subarray(k*w/bt.data.BYTES_PER_ELEMENT,(k+1)*w/bt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,k,bt.width,bt.height,1,Dt,Wt,O)}D.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,bt.width,bt.height,bt.depth,Dt,Wt,bt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Xt,bt.width,bt.height,bt.depth,0,Dt,Wt,bt.data);else if(D.isData3DTexture)qt?(C&&e.texStorage3D(i.TEXTURE_3D,Q,Xt,bt.width,bt.height,bt.depth),L&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,bt.width,bt.height,bt.depth,Dt,Wt,bt.data)):e.texImage3D(i.TEXTURE_3D,0,Xt,bt.width,bt.height,bt.depth,0,Dt,Wt,bt.data);else if(D.isFramebufferTexture){if(C)if(qt)e.texStorage2D(i.TEXTURE_2D,Q,Xt,bt.width,bt.height);else{let w=bt.width,k=bt.height;for(let O=0;O<Q;O++)e.texImage2D(i.TEXTURE_2D,O,Xt,w,k,0,Dt,Wt,null),w>>=1,k>>=1}}else if(ne.length>0){if(qt&&C){let w=Nt(ne[0]);e.texStorage2D(i.TEXTURE_2D,Q,Xt,w.width,w.height)}for(let w=0,k=ne.length;w<k;w++)Lt=ne[w],qt?L&&e.texSubImage2D(i.TEXTURE_2D,w,0,0,Dt,Wt,Lt):e.texImage2D(i.TEXTURE_2D,w,Xt,Dt,Wt,Lt);D.generateMipmaps=!1}else if(qt){if(C){let w=Nt(bt);e.texStorage2D(i.TEXTURE_2D,Q,Xt,w.width,w.height)}L&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Dt,Wt,bt)}else e.texImage2D(i.TEXTURE_2D,0,Xt,Dt,Wt,bt);x(D)&&f(it),_t.__version=at.version,D.onUpdate&&D.onUpdate(D)}B.__version=D.version}function W(B,D,ft){if(D.image.length!==6)return;let it=K(B,D),rt=D.source;e.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+ft);let at=n.get(rt);if(rt.version!==at.__version||it===!0){e.activeTexture(i.TEXTURE0+ft);let _t=de.getPrimaries(de.workingColorSpace),mt=D.colorSpace===Si?null:de.getPrimaries(D.colorSpace),It=D.colorSpace===Si||_t===mt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,D.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,D.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,It);let Pt=D.isCompressedTexture||D.image[0].isCompressedTexture,bt=D.image[0]&&D.image[0].isDataTexture,Dt=[];for(let k=0;k<6;k++)!Pt&&!bt?Dt[k]=M(D.image[k],!0,s.maxCubemapSize):Dt[k]=bt?D.image[k].image:D.image[k],Dt[k]=Vt(D,Dt[k]);let Wt=Dt[0],Xt=r.convert(D.format,D.colorSpace),Lt=r.convert(D.type),ne=_(D.internalFormat,Xt,Lt,D.colorSpace),qt=D.isVideoTexture!==!0,C=at.__version===void 0||it===!0,L=rt.dataReady,Q=U(D,Wt);St(i.TEXTURE_CUBE_MAP,D);let w;if(Pt){qt&&C&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Q,ne,Wt.width,Wt.height);for(let k=0;k<6;k++){w=Dt[k].mipmaps;for(let O=0;O<w.length;O++){let j=w[O];D.format!==_n?Xt!==null?qt?L&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+k,O,0,0,j.width,j.height,Xt,j.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+k,O,ne,j.width,j.height,0,j.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):qt?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+k,O,0,0,j.width,j.height,Xt,Lt,j.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+k,O,ne,j.width,j.height,0,Xt,Lt,j.data)}}}else{if(w=D.mipmaps,qt&&C){w.length>0&&Q++;let k=Nt(Dt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Q,ne,k.width,k.height)}for(let k=0;k<6;k++)if(bt){qt?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+k,0,0,0,Dt[k].width,Dt[k].height,Xt,Lt,Dt[k].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+k,0,ne,Dt[k].width,Dt[k].height,0,Xt,Lt,Dt[k].data);for(let O=0;O<w.length;O++){let ct=w[O].image[k].image;qt?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+k,O+1,0,0,ct.width,ct.height,Xt,Lt,ct.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+k,O+1,ne,ct.width,ct.height,0,Xt,Lt,ct.data)}}else{qt?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+k,0,0,0,Xt,Lt,Dt[k]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+k,0,ne,Xt,Lt,Dt[k]);for(let O=0;O<w.length;O++){let j=w[O];qt?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+k,O+1,0,0,Xt,Lt,j.image[k]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+k,O+1,ne,Xt,Lt,j.image[k])}}}x(D)&&f(i.TEXTURE_CUBE_MAP),at.__version=rt.version,D.onUpdate&&D.onUpdate(D)}B.__version=D.version}function V(B,D,ft,it,rt,at){let _t=r.convert(ft.format,ft.colorSpace),mt=r.convert(ft.type),It=_(ft.internalFormat,_t,mt,ft.colorSpace),Pt=n.get(D),bt=n.get(ft);if(bt.__renderTarget=D,!Pt.__hasExternalTextures){let Dt=Math.max(1,D.width>>at),Wt=Math.max(1,D.height>>at);rt===i.TEXTURE_3D||rt===i.TEXTURE_2D_ARRAY?e.texImage3D(rt,at,It,Dt,Wt,D.depth,0,_t,mt,null):e.texImage2D(rt,at,It,Dt,Wt,0,_t,mt,null)}e.bindFramebuffer(i.FRAMEBUFFER,B),et(D)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,it,rt,bt.__webglTexture,0,Mt(D)):(rt===i.TEXTURE_2D||rt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&rt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,it,rt,bt.__webglTexture,at),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Z(B,D,ft){if(i.bindRenderbuffer(i.RENDERBUFFER,B),D.depthBuffer){let it=D.depthTexture,rt=it&&it.isDepthTexture?it.type:null,at=v(D.stencilBuffer,rt),_t=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,mt=Mt(D);et(D)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,mt,at,D.width,D.height):ft?i.renderbufferStorageMultisample(i.RENDERBUFFER,mt,at,D.width,D.height):i.renderbufferStorage(i.RENDERBUFFER,at,D.width,D.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,_t,i.RENDERBUFFER,B)}else{let it=D.textures;for(let rt=0;rt<it.length;rt++){let at=it[rt],_t=r.convert(at.format,at.colorSpace),mt=r.convert(at.type),It=_(at.internalFormat,_t,mt,at.colorSpace),Pt=Mt(D);ft&&et(D)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Pt,It,D.width,D.height):et(D)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Pt,It,D.width,D.height):i.renderbufferStorage(i.RENDERBUFFER,It,D.width,D.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ot(B,D){if(D&&D.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,B),!(D.depthTexture&&D.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let it=n.get(D.depthTexture);it.__renderTarget=D,(!it.__webglTexture||D.depthTexture.image.width!==D.width||D.depthTexture.image.height!==D.height)&&(D.depthTexture.image.width=D.width,D.depthTexture.image.height=D.height,D.depthTexture.needsUpdate=!0),q(D.depthTexture,0);let rt=it.__webglTexture,at=Mt(D);if(D.depthTexture.format===Rs)et(D)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,rt,0,at):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,rt,0);else if(D.depthTexture.format===Ns)et(D)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,rt,0,at):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,rt,0);else throw new Error("Unknown depthTexture format")}function gt(B){let D=n.get(B),ft=B.isWebGLCubeRenderTarget===!0;if(D.__boundDepthTexture!==B.depthTexture){let it=B.depthTexture;if(D.__depthDisposeCallback&&D.__depthDisposeCallback(),it){let rt=()=>{delete D.__boundDepthTexture,delete D.__depthDisposeCallback,it.removeEventListener("dispose",rt)};it.addEventListener("dispose",rt),D.__depthDisposeCallback=rt}D.__boundDepthTexture=it}if(B.depthTexture&&!D.__autoAllocateDepthBuffer){if(ft)throw new Error("target.depthTexture not supported in Cube render targets");ot(D.__webglFramebuffer,B)}else if(ft){D.__webglDepthbuffer=[];for(let it=0;it<6;it++)if(e.bindFramebuffer(i.FRAMEBUFFER,D.__webglFramebuffer[it]),D.__webglDepthbuffer[it]===void 0)D.__webglDepthbuffer[it]=i.createRenderbuffer(),Z(D.__webglDepthbuffer[it],B,!1);else{let rt=B.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,at=D.__webglDepthbuffer[it];i.bindRenderbuffer(i.RENDERBUFFER,at),i.framebufferRenderbuffer(i.FRAMEBUFFER,rt,i.RENDERBUFFER,at)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,D.__webglFramebuffer),D.__webglDepthbuffer===void 0)D.__webglDepthbuffer=i.createRenderbuffer(),Z(D.__webglDepthbuffer,B,!1);else{let it=B.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,rt=D.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,rt),i.framebufferRenderbuffer(i.FRAMEBUFFER,it,i.RENDERBUFFER,rt)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Tt(B,D,ft){let it=n.get(B);D!==void 0&&V(it.__webglFramebuffer,B,B.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),ft!==void 0&&gt(B)}function At(B){let D=B.texture,ft=n.get(B),it=n.get(D);B.addEventListener("dispose",T);let rt=B.textures,at=B.isWebGLCubeRenderTarget===!0,_t=rt.length>1;if(_t||(it.__webglTexture===void 0&&(it.__webglTexture=i.createTexture()),it.__version=D.version,o.memory.textures++),at){ft.__webglFramebuffer=[];for(let mt=0;mt<6;mt++)if(D.mipmaps&&D.mipmaps.length>0){ft.__webglFramebuffer[mt]=[];for(let It=0;It<D.mipmaps.length;It++)ft.__webglFramebuffer[mt][It]=i.createFramebuffer()}else ft.__webglFramebuffer[mt]=i.createFramebuffer()}else{if(D.mipmaps&&D.mipmaps.length>0){ft.__webglFramebuffer=[];for(let mt=0;mt<D.mipmaps.length;mt++)ft.__webglFramebuffer[mt]=i.createFramebuffer()}else ft.__webglFramebuffer=i.createFramebuffer();if(_t)for(let mt=0,It=rt.length;mt<It;mt++){let Pt=n.get(rt[mt]);Pt.__webglTexture===void 0&&(Pt.__webglTexture=i.createTexture(),o.memory.textures++)}if(B.samples>0&&et(B)===!1){ft.__webglMultisampledFramebuffer=i.createFramebuffer(),ft.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,ft.__webglMultisampledFramebuffer);for(let mt=0;mt<rt.length;mt++){let It=rt[mt];ft.__webglColorRenderbuffer[mt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,ft.__webglColorRenderbuffer[mt]);let Pt=r.convert(It.format,It.colorSpace),bt=r.convert(It.type),Dt=_(It.internalFormat,Pt,bt,It.colorSpace,B.isXRRenderTarget===!0),Wt=Mt(B);i.renderbufferStorageMultisample(i.RENDERBUFFER,Wt,Dt,B.width,B.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+mt,i.RENDERBUFFER,ft.__webglColorRenderbuffer[mt])}i.bindRenderbuffer(i.RENDERBUFFER,null),B.depthBuffer&&(ft.__webglDepthRenderbuffer=i.createRenderbuffer(),Z(ft.__webglDepthRenderbuffer,B,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(at){e.bindTexture(i.TEXTURE_CUBE_MAP,it.__webglTexture),St(i.TEXTURE_CUBE_MAP,D);for(let mt=0;mt<6;mt++)if(D.mipmaps&&D.mipmaps.length>0)for(let It=0;It<D.mipmaps.length;It++)V(ft.__webglFramebuffer[mt][It],B,D,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,It);else V(ft.__webglFramebuffer[mt],B,D,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0);x(D)&&f(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(_t){for(let mt=0,It=rt.length;mt<It;mt++){let Pt=rt[mt],bt=n.get(Pt);e.bindTexture(i.TEXTURE_2D,bt.__webglTexture),St(i.TEXTURE_2D,Pt),V(ft.__webglFramebuffer,B,Pt,i.COLOR_ATTACHMENT0+mt,i.TEXTURE_2D,0),x(Pt)&&f(i.TEXTURE_2D)}e.unbindTexture()}else{let mt=i.TEXTURE_2D;if((B.isWebGL3DRenderTarget||B.isWebGLArrayRenderTarget)&&(mt=B.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(mt,it.__webglTexture),St(mt,D),D.mipmaps&&D.mipmaps.length>0)for(let It=0;It<D.mipmaps.length;It++)V(ft.__webglFramebuffer[It],B,D,i.COLOR_ATTACHMENT0,mt,It);else V(ft.__webglFramebuffer,B,D,i.COLOR_ATTACHMENT0,mt,0);x(D)&&f(mt),e.unbindTexture()}B.depthBuffer&&gt(B)}function lt(B){let D=B.textures;for(let ft=0,it=D.length;ft<it;ft++){let rt=D[ft];if(x(rt)){let at=b(B),_t=n.get(rt).__webglTexture;e.bindTexture(at,_t),f(at),e.unbindTexture()}}}let pt=[],X=[];function Et(B){if(B.samples>0){if(et(B)===!1){let D=B.textures,ft=B.width,it=B.height,rt=i.COLOR_BUFFER_BIT,at=B.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,_t=n.get(B),mt=D.length>1;if(mt)for(let It=0;It<D.length;It++)e.bindFramebuffer(i.FRAMEBUFFER,_t.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+It,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,_t.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+It,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,_t.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,_t.__webglFramebuffer);for(let It=0;It<D.length;It++){if(B.resolveDepthBuffer&&(B.depthBuffer&&(rt|=i.DEPTH_BUFFER_BIT),B.stencilBuffer&&B.resolveStencilBuffer&&(rt|=i.STENCIL_BUFFER_BIT)),mt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,_t.__webglColorRenderbuffer[It]);let Pt=n.get(D[It]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Pt,0)}i.blitFramebuffer(0,0,ft,it,0,0,ft,it,rt,i.NEAREST),l===!0&&(pt.length=0,X.length=0,pt.push(i.COLOR_ATTACHMENT0+It),B.depthBuffer&&B.resolveDepthBuffer===!1&&(pt.push(at),X.push(at),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,X)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,pt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),mt)for(let It=0;It<D.length;It++){e.bindFramebuffer(i.FRAMEBUFFER,_t.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+It,i.RENDERBUFFER,_t.__webglColorRenderbuffer[It]);let Pt=n.get(D[It]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,_t.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+It,i.TEXTURE_2D,Pt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,_t.__webglMultisampledFramebuffer)}else if(B.depthBuffer&&B.resolveDepthBuffer===!1&&l){let D=B.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[D])}}}function Mt(B){return Math.min(s.maxSamples,B.samples)}function et(B){let D=n.get(B);return B.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&D.__useRenderToTexture!==!1}function Rt(B){let D=o.render.frame;u.get(B)!==D&&(u.set(B,D),B.update())}function Vt(B,D){let ft=B.colorSpace,it=B.format,rt=B.type;return B.isCompressedTexture===!0||B.isVideoTexture===!0||ft!==Bs&&ft!==Si&&(de.getTransfer(ft)===Me?(it!==_n||rt!==ii)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",ft)),D}function Nt(B){return typeof HTMLImageElement<"u"&&B instanceof HTMLImageElement?(h.width=B.naturalWidth||B.width,h.height=B.naturalHeight||B.height):typeof VideoFrame<"u"&&B instanceof VideoFrame?(h.width=B.displayWidth,h.height=B.displayHeight):(h.width=B.width,h.height=B.height),h}this.allocateTextureUnit=I,this.resetTextureUnits=E,this.setTexture2D=q,this.setTexture2DArray=R,this.setTexture3D=H,this.setTextureCube=G,this.rebindTextures=Tt,this.setupRenderTarget=At,this.updateRenderTargetMipmap=lt,this.updateMultisampleRenderTarget=Et,this.setupDepthRenderbuffer=gt,this.setupFrameBufferTexture=V,this.useMultisampledRTT=et}function Ux(i,t){function e(n,s=Si){let r,o=de.getTransfer(s);if(n===ii)return i.UNSIGNED_BYTE;if(n===Uc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Nc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Pu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Cu)return i.BYTE;if(n===Iu)return i.SHORT;if(n===mr)return i.UNSIGNED_SHORT;if(n===Dc)return i.INT;if(n===Xi)return i.UNSIGNED_INT;if(n===Vn)return i.FLOAT;if(n===Cr)return i.HALF_FLOAT;if(n===Lu)return i.ALPHA;if(n===Du)return i.RGB;if(n===_n)return i.RGBA;if(n===Uu)return i.LUMINANCE;if(n===Nu)return i.LUMINANCE_ALPHA;if(n===Rs)return i.DEPTH_COMPONENT;if(n===Ns)return i.DEPTH_STENCIL;if(n===kc)return i.RED;if(n===Fc)return i.RED_INTEGER;if(n===ku)return i.RG;if(n===Oc)return i.RG_INTEGER;if(n===zc)return i.RGBA_INTEGER;if(n===bo||n===So||n===wo||n===Eo)if(o===Me)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===bo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===So)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===wo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Eo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===bo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===So)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===wo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Eo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ml||n===bl||n===Sl||n===wl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ml)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===bl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Sl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===wl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===El||n===Tl||n===Al)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===El||n===Tl)return o===Me?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Al)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Rl||n===Cl||n===Il||n===Pl||n===Ll||n===Dl||n===Ul||n===Nl||n===kl||n===Fl||n===Ol||n===zl||n===Bl||n===Hl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Rl)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Cl)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Il)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Pl)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ll)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Dl)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ul)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Nl)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===kl)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Fl)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ol)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===zl)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Bl)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Hl)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===To||n===Vl||n===Gl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===To)return o===Me?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Vl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Gl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Fu||n===$l||n===Wl||n===Xl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===To)return r.COMPRESSED_RED_RGTC1_EXT;if(n===$l)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Wl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Xl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Us?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var lc=class extends on{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},re=class extends Pe{constructor(){super(),this.isGroup=!0,this.type="Group"}},Nx={type:"move"},dr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new re,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new re,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new $,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new $),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new re,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new $,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new $),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,h=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(h&&t.hand){o=!0;for(let M of t.hand.values()){let x=e.getJointPose(M,n),f=this._getHandJoint(h,M);x!==null&&(f.matrix.fromArray(x.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=x.radius),f.visible=x!==null}let u=h.joints["index-finger-tip"],p=h.joints["thumb-tip"],d=u.position.distanceTo(p.position),c=.02,g=.005;h.inputState.pinching&&d>c+g?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!h.inputState.pinching&&d<=c-g&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Nx)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),h!==null&&(h.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new re;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},kx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Fx=`
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

}`,cc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let s=new fn,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new ln({vertexShader:kx,fragmentShader:Fx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ie(new pn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},hc=class extends Ri{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,h=null,u=null,p=null,d=null,c=null,g=null,M=new cc,x=e.getContextAttributes(),f=null,b=null,_=[],v=[],U=new Ct,P=null,T=new on;T.viewport=new ke;let A=new on;A.viewport=new ke;let y=[T,A],m=new lc,S=null,E=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let W=_[Y];return W===void 0&&(W=new dr,_[Y]=W),W.getTargetRaySpace()},this.getControllerGrip=function(Y){let W=_[Y];return W===void 0&&(W=new dr,_[Y]=W),W.getGripSpace()},this.getHand=function(Y){let W=_[Y];return W===void 0&&(W=new dr,_[Y]=W),W.getHandSpace()};function I(Y){let W=v.indexOf(Y.inputSource);if(W===-1)return;let V=_[W];V!==void 0&&(V.update(Y.inputSource,Y.frame,h||o),V.dispatchEvent({type:Y.type,data:Y.inputSource}))}function N(){s.removeEventListener("select",I),s.removeEventListener("selectstart",I),s.removeEventListener("selectend",I),s.removeEventListener("squeeze",I),s.removeEventListener("squeezestart",I),s.removeEventListener("squeezeend",I),s.removeEventListener("end",N),s.removeEventListener("inputsourceschange",q);for(let Y=0;Y<_.length;Y++){let W=v[Y];W!==null&&(v[Y]=null,_[Y].disconnect(W))}S=null,E=null,M.reset(),t.setRenderTarget(f),c=null,d=null,p=null,s=null,b=null,K.stop(),n.isPresenting=!1,t.setPixelRatio(P),t.setSize(U.width,U.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||o},this.setReferenceSpace=function(Y){h=Y},this.getBaseLayer=function(){return d!==null?d:c},this.getBinding=function(){return p},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Y){if(s=Y,s!==null){if(f=t.getRenderTarget(),s.addEventListener("select",I),s.addEventListener("selectstart",I),s.addEventListener("selectend",I),s.addEventListener("squeeze",I),s.addEventListener("squeezestart",I),s.addEventListener("squeezeend",I),s.addEventListener("end",N),s.addEventListener("inputsourceschange",q),x.xrCompatible!==!0&&await e.makeXRCompatible(),P=t.getPixelRatio(),t.getSize(U),s.renderState.layers===void 0){let W={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};c=new XRWebGLLayer(s,e,W),s.updateRenderState({baseLayer:c}),t.setPixelRatio(1),t.setSize(c.framebufferWidth,c.framebufferHeight,!1),b=new si(c.framebufferWidth,c.framebufferHeight,{format:_n,type:ii,colorSpace:t.outputColorSpace,stencilBuffer:x.stencil})}else{let W=null,V=null,Z=null;x.depth&&(Z=x.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,W=x.stencil?Ns:Rs,V=x.stencil?Us:Xi);let ot={colorFormat:e.RGBA8,depthFormat:Z,scaleFactor:r};p=new XRWebGLBinding(s,e),d=p.createProjectionLayer(ot),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),b=new si(d.textureWidth,d.textureHeight,{format:_n,type:ii,depthTexture:new Bo(d.textureWidth,d.textureHeight,V,void 0,void 0,void 0,void 0,void 0,void 0,W),stencilBuffer:x.stencil,colorSpace:t.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),h=null,o=await s.requestReferenceSpace(a),K.setContext(s),K.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function q(Y){for(let W=0;W<Y.removed.length;W++){let V=Y.removed[W],Z=v.indexOf(V);Z>=0&&(v[Z]=null,_[Z].disconnect(V))}for(let W=0;W<Y.added.length;W++){let V=Y.added[W],Z=v.indexOf(V);if(Z===-1){for(let gt=0;gt<_.length;gt++)if(gt>=v.length){v.push(V),Z=gt;break}else if(v[gt]===null){v[gt]=V,Z=gt;break}if(Z===-1)break}let ot=_[Z];ot&&ot.connect(V)}}let R=new $,H=new $;function G(Y,W,V){R.setFromMatrixPosition(W.matrixWorld),H.setFromMatrixPosition(V.matrixWorld);let Z=R.distanceTo(H),ot=W.projectionMatrix.elements,gt=V.projectionMatrix.elements,Tt=ot[14]/(ot[10]-1),At=ot[14]/(ot[10]+1),lt=(ot[9]+1)/ot[5],pt=(ot[9]-1)/ot[5],X=(ot[8]-1)/ot[0],Et=(gt[8]+1)/gt[0],Mt=Tt*X,et=Tt*Et,Rt=Z/(-X+Et),Vt=Rt*-X;if(W.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(Vt),Y.translateZ(Rt),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),ot[10]===-1)Y.projectionMatrix.copy(W.projectionMatrix),Y.projectionMatrixInverse.copy(W.projectionMatrixInverse);else{let Nt=Tt+Rt,B=At+Rt,D=Mt-Vt,ft=et+(Z-Vt),it=lt*At/B*Nt,rt=pt*At/B*Nt;Y.projectionMatrix.makePerspective(D,ft,it,rt,Nt,B),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function nt(Y,W){W===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(W.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(s===null)return;let W=Y.near,V=Y.far;M.texture!==null&&(M.depthNear>0&&(W=M.depthNear),M.depthFar>0&&(V=M.depthFar)),m.near=A.near=T.near=W,m.far=A.far=T.far=V,(S!==m.near||E!==m.far)&&(s.updateRenderState({depthNear:m.near,depthFar:m.far}),S=m.near,E=m.far),T.layers.mask=Y.layers.mask|2,A.layers.mask=Y.layers.mask|4,m.layers.mask=T.layers.mask|A.layers.mask;let Z=Y.parent,ot=m.cameras;nt(m,Z);for(let gt=0;gt<ot.length;gt++)nt(ot[gt],Z);ot.length===2?G(m,T,A):m.projectionMatrix.copy(T.projectionMatrix),st(Y,m,Z)};function st(Y,W,V){V===null?Y.matrix.copy(W.matrixWorld):(Y.matrix.copy(V.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(W.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(W.projectionMatrix),Y.projectionMatrixInverse.copy(W.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=gr*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return m},this.getFoveation=function(){if(!(d===null&&c===null))return l},this.setFoveation=function(Y){l=Y,d!==null&&(d.fixedFoveation=Y),c!==null&&c.fixedFoveation!==void 0&&(c.fixedFoveation=Y)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(m)};let z=null;function St(Y,W){if(u=W.getViewerPose(h||o),g=W,u!==null){let V=u.views;c!==null&&(t.setRenderTargetFramebuffer(b,c.framebuffer),t.setRenderTarget(b));let Z=!1;V.length!==m.cameras.length&&(m.cameras.length=0,Z=!0);for(let gt=0;gt<V.length;gt++){let Tt=V[gt],At=null;if(c!==null)At=c.getViewport(Tt);else{let pt=p.getViewSubImage(d,Tt);At=pt.viewport,gt===0&&(t.setRenderTargetTextures(b,pt.colorTexture,d.ignoreDepthValues?void 0:pt.depthStencilTexture),t.setRenderTarget(b))}let lt=y[gt];lt===void 0&&(lt=new on,lt.layers.enable(gt),lt.viewport=new ke,y[gt]=lt),lt.matrix.fromArray(Tt.transform.matrix),lt.matrix.decompose(lt.position,lt.quaternion,lt.scale),lt.projectionMatrix.fromArray(Tt.projectionMatrix),lt.projectionMatrixInverse.copy(lt.projectionMatrix).invert(),lt.viewport.set(At.x,At.y,At.width,At.height),gt===0&&(m.matrix.copy(lt.matrix),m.matrix.decompose(m.position,m.quaternion,m.scale)),Z===!0&&m.cameras.push(lt)}let ot=s.enabledFeatures;if(ot&&ot.includes("depth-sensing")){let gt=p.getDepthInformation(V[0]);gt&&gt.isValid&&gt.texture&&M.init(t,gt,s.renderState)}}for(let V=0;V<_.length;V++){let Z=v[V],ot=_[V];Z!==null&&ot!==void 0&&ot.update(Z,W,h||o)}z&&z(Y,W),W.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:W}),g=null}let K=new $u;K.setAnimationLoop(St),this.setAnimationLoop=function(Y){z=Y},this.dispose=function(){}}},zi=new Dn,Ox=new pe;function zx(i,t){function e(x,f){x.matrixAutoUpdate===!0&&x.updateMatrix(),f.value.copy(x.matrix)}function n(x,f){f.color.getRGB(x.fogColor.value,Gu(i)),f.isFog?(x.fogNear.value=f.near,x.fogFar.value=f.far):f.isFogExp2&&(x.fogDensity.value=f.density)}function s(x,f,b,_,v){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(x,f):f.isMeshToonMaterial?(r(x,f),p(x,f)):f.isMeshPhongMaterial?(r(x,f),u(x,f)):f.isMeshStandardMaterial?(r(x,f),d(x,f),f.isMeshPhysicalMaterial&&c(x,f,v)):f.isMeshMatcapMaterial?(r(x,f),g(x,f)):f.isMeshDepthMaterial?r(x,f):f.isMeshDistanceMaterial?(r(x,f),M(x,f)):f.isMeshNormalMaterial?r(x,f):f.isLineBasicMaterial?(o(x,f),f.isLineDashedMaterial&&a(x,f)):f.isPointsMaterial?l(x,f,b,_):f.isSpriteMaterial?h(x,f):f.isShadowMaterial?(x.color.value.copy(f.color),x.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(x,f){x.opacity.value=f.opacity,f.color&&x.diffuse.value.copy(f.color),f.emissive&&x.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(x.map.value=f.map,e(f.map,x.mapTransform)),f.alphaMap&&(x.alphaMap.value=f.alphaMap,e(f.alphaMap,x.alphaMapTransform)),f.bumpMap&&(x.bumpMap.value=f.bumpMap,e(f.bumpMap,x.bumpMapTransform),x.bumpScale.value=f.bumpScale,f.side===Je&&(x.bumpScale.value*=-1)),f.normalMap&&(x.normalMap.value=f.normalMap,e(f.normalMap,x.normalMapTransform),x.normalScale.value.copy(f.normalScale),f.side===Je&&x.normalScale.value.negate()),f.displacementMap&&(x.displacementMap.value=f.displacementMap,e(f.displacementMap,x.displacementMapTransform),x.displacementScale.value=f.displacementScale,x.displacementBias.value=f.displacementBias),f.emissiveMap&&(x.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,x.emissiveMapTransform)),f.specularMap&&(x.specularMap.value=f.specularMap,e(f.specularMap,x.specularMapTransform)),f.alphaTest>0&&(x.alphaTest.value=f.alphaTest);let b=t.get(f),_=b.envMap,v=b.envMapRotation;_&&(x.envMap.value=_,zi.copy(v),zi.x*=-1,zi.y*=-1,zi.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(zi.y*=-1,zi.z*=-1),x.envMapRotation.value.setFromMatrix4(Ox.makeRotationFromEuler(zi)),x.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=f.reflectivity,x.ior.value=f.ior,x.refractionRatio.value=f.refractionRatio),f.lightMap&&(x.lightMap.value=f.lightMap,x.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,x.lightMapTransform)),f.aoMap&&(x.aoMap.value=f.aoMap,x.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,x.aoMapTransform))}function o(x,f){x.diffuse.value.copy(f.color),x.opacity.value=f.opacity,f.map&&(x.map.value=f.map,e(f.map,x.mapTransform))}function a(x,f){x.dashSize.value=f.dashSize,x.totalSize.value=f.dashSize+f.gapSize,x.scale.value=f.scale}function l(x,f,b,_){x.diffuse.value.copy(f.color),x.opacity.value=f.opacity,x.size.value=f.size*b,x.scale.value=_*.5,f.map&&(x.map.value=f.map,e(f.map,x.uvTransform)),f.alphaMap&&(x.alphaMap.value=f.alphaMap,e(f.alphaMap,x.alphaMapTransform)),f.alphaTest>0&&(x.alphaTest.value=f.alphaTest)}function h(x,f){x.diffuse.value.copy(f.color),x.opacity.value=f.opacity,x.rotation.value=f.rotation,f.map&&(x.map.value=f.map,e(f.map,x.mapTransform)),f.alphaMap&&(x.alphaMap.value=f.alphaMap,e(f.alphaMap,x.alphaMapTransform)),f.alphaTest>0&&(x.alphaTest.value=f.alphaTest)}function u(x,f){x.specular.value.copy(f.specular),x.shininess.value=Math.max(f.shininess,1e-4)}function p(x,f){f.gradientMap&&(x.gradientMap.value=f.gradientMap)}function d(x,f){x.metalness.value=f.metalness,f.metalnessMap&&(x.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,x.metalnessMapTransform)),x.roughness.value=f.roughness,f.roughnessMap&&(x.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,x.roughnessMapTransform)),f.envMap&&(x.envMapIntensity.value=f.envMapIntensity)}function c(x,f,b){x.ior.value=f.ior,f.sheen>0&&(x.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),x.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(x.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,x.sheenColorMapTransform)),f.sheenRoughnessMap&&(x.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,x.sheenRoughnessMapTransform))),f.clearcoat>0&&(x.clearcoat.value=f.clearcoat,x.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(x.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,x.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(x.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Je&&x.clearcoatNormalScale.value.negate())),f.dispersion>0&&(x.dispersion.value=f.dispersion),f.iridescence>0&&(x.iridescence.value=f.iridescence,x.iridescenceIOR.value=f.iridescenceIOR,x.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(x.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,x.iridescenceMapTransform)),f.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),f.transmission>0&&(x.transmission.value=f.transmission,x.transmissionSamplerMap.value=b.texture,x.transmissionSamplerSize.value.set(b.width,b.height),f.transmissionMap&&(x.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,x.transmissionMapTransform)),x.thickness.value=f.thickness,f.thicknessMap&&(x.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=f.attenuationDistance,x.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(x.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(x.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=f.specularIntensity,x.specularColor.value.copy(f.specularColor),f.specularColorMap&&(x.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,x.specularColorMapTransform)),f.specularIntensityMap&&(x.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,x.specularIntensityMapTransform))}function g(x,f){f.matcap&&(x.matcap.value=f.matcap)}function M(x,f){let b=t.get(f).light;x.referencePosition.value.setFromMatrixPosition(b.matrixWorld),x.nearDistance.value=b.shadow.camera.near,x.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Bx(i,t,e,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,_){let v=_.program;n.uniformBlockBinding(b,v)}function h(b,_){let v=s[b.id];v===void 0&&(g(b),v=u(b),s[b.id]=v,b.addEventListener("dispose",x));let U=_.program;n.updateUBOMapping(b,U);let P=t.render.frame;r[b.id]!==P&&(d(b),r[b.id]=P)}function u(b){let _=p();b.__bindingPointIndex=_;let v=i.createBuffer(),U=b.__size,P=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,U,P),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,_,v),v}function p(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(b){let _=s[b.id],v=b.uniforms,U=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,_);for(let P=0,T=v.length;P<T;P++){let A=Array.isArray(v[P])?v[P]:[v[P]];for(let y=0,m=A.length;y<m;y++){let S=A[y];if(c(S,P,y,U)===!0){let E=S.__offset,I=Array.isArray(S.value)?S.value:[S.value],N=0;for(let q=0;q<I.length;q++){let R=I[q],H=M(R);typeof R=="number"||typeof R=="boolean"?(S.__data[0]=R,i.bufferSubData(i.UNIFORM_BUFFER,E+N,S.__data)):R.isMatrix3?(S.__data[0]=R.elements[0],S.__data[1]=R.elements[1],S.__data[2]=R.elements[2],S.__data[3]=0,S.__data[4]=R.elements[3],S.__data[5]=R.elements[4],S.__data[6]=R.elements[5],S.__data[7]=0,S.__data[8]=R.elements[6],S.__data[9]=R.elements[7],S.__data[10]=R.elements[8],S.__data[11]=0):(R.toArray(S.__data,N),N+=H.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,E,S.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function c(b,_,v,U){let P=b.value,T=_+"_"+v;if(U[T]===void 0)return typeof P=="number"||typeof P=="boolean"?U[T]=P:U[T]=P.clone(),!0;{let A=U[T];if(typeof P=="number"||typeof P=="boolean"){if(A!==P)return U[T]=P,!0}else if(A.equals(P)===!1)return A.copy(P),!0}return!1}function g(b){let _=b.uniforms,v=0,U=16;for(let T=0,A=_.length;T<A;T++){let y=Array.isArray(_[T])?_[T]:[_[T]];for(let m=0,S=y.length;m<S;m++){let E=y[m],I=Array.isArray(E.value)?E.value:[E.value];for(let N=0,q=I.length;N<q;N++){let R=I[N],H=M(R),G=v%U,nt=G%H.boundary,st=G+nt;v+=nt,st!==0&&U-st<H.storage&&(v+=U-st),E.__data=new Float32Array(H.storage/Float32Array.BYTES_PER_ELEMENT),E.__offset=v,v+=H.storage}}}let P=v%U;return P>0&&(v+=U-P),b.__size=v,b.__cache={},this}function M(b){let _={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(_.boundary=4,_.storage=4):b.isVector2?(_.boundary=8,_.storage=8):b.isVector3||b.isColor?(_.boundary=16,_.storage=12):b.isVector4?(_.boundary=16,_.storage=16):b.isMatrix3?(_.boundary=48,_.storage=48):b.isMatrix4?(_.boundary=64,_.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),_}function x(b){let _=b.target;_.removeEventListener("dispose",x);let v=o.indexOf(_.__bindingPointIndex);o.splice(v,1),i.deleteBuffer(s[_.id]),delete s[_.id],delete r[_.id]}function f(){for(let b in s)i.deleteBuffer(s[b]);o=[],s={},r={}}return{bind:l,update:h,dispose:f}}var Ho=class{constructor(t={}){let{canvas:e=Wf(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:h=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:p=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let c;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");c=n.getContextAttributes().alpha}else c=o;let g=new Uint32Array(4),M=new Int32Array(4),x=null,f=null,b=[],_=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ye,this.toneMapping=Gn,this.toneMappingExposure=1;let v=this,U=!1,P=0,T=0,A=null,y=-1,m=null,S=new ke,E=new ke,I=null,N=new Kt(0),q=0,R=e.width,H=e.height,G=1,nt=null,st=null,z=new ke(0,0,R,H),St=new ke(0,0,R,H),K=!1,Y=new xr,W=!1,V=!1,Z=new pe,ot=new pe,gt=new $,Tt=new ke,At={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},lt=!1;function pt(){return A===null?G:1}let X=n;function Et(F,ht){return e.getContext(F,ht)}try{let F={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:h,powerPreference:u,failIfMajorPerformanceCaveat:p};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Pc}`),e.addEventListener("webglcontextlost",k,!1),e.addEventListener("webglcontextrestored",O,!1),e.addEventListener("webglcontextcreationerror",j,!1),X===null){let ht="webgl2";if(X=Et(ht,F),X===null)throw Et(ht)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(F){throw console.error("THREE.WebGLRenderer: "+F.message),F}let Mt,et,Rt,Vt,Nt,B,D,ft,it,rt,at,_t,mt,It,Pt,bt,Dt,Wt,Xt,Lt,ne,qt,C,L;function Q(){Mt=new ng(X),Mt.init(),qt=new Ux(X,Mt),et=new J0(X,Mt,t,qt),Rt=new Px(X,Mt),et.reverseDepthBuffer&&d&&Rt.buffers.depth.setReversed(!0),Vt=new rg(X),Nt=new yx,B=new Dx(X,Mt,Rt,Nt,et,qt,Vt),D=new j0(v),ft=new eg(v),it=new dp(X),C=new Y0(X,it),rt=new ig(X,it,Vt,C),at=new ag(X,rt,it,Vt),Xt=new og(X,et,B),bt=new K0(Nt),_t=new xx(v,D,ft,Mt,et,C,bt),mt=new zx(v,Nt),It=new _x,Pt=new Tx(Mt),Wt=new q0(v,D,ft,Rt,at,c,l),Dt=new Cx(v,at,et),L=new Bx(X,Vt,et,Rt),Lt=new Z0(X,Mt,Vt),ne=new sg(X,Mt,Vt),Vt.programs=_t.programs,v.capabilities=et,v.extensions=Mt,v.properties=Nt,v.renderLists=It,v.shadowMap=Dt,v.state=Rt,v.info=Vt}Q();let w=new hc(v,X);this.xr=w,this.getContext=function(){return X},this.getContextAttributes=function(){return X.getContextAttributes()},this.forceContextLoss=function(){let F=Mt.get("WEBGL_lose_context");F&&F.loseContext()},this.forceContextRestore=function(){let F=Mt.get("WEBGL_lose_context");F&&F.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(F){F!==void 0&&(G=F,this.setSize(R,H,!1))},this.getSize=function(F){return F.set(R,H)},this.setSize=function(F,ht,yt=!0){if(w.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}R=F,H=ht,e.width=Math.floor(F*G),e.height=Math.floor(ht*G),yt===!0&&(e.style.width=F+"px",e.style.height=ht+"px"),this.setViewport(0,0,F,ht)},this.getDrawingBufferSize=function(F){return F.set(R*G,H*G).floor()},this.setDrawingBufferSize=function(F,ht,yt){R=F,H=ht,G=yt,e.width=Math.floor(F*yt),e.height=Math.floor(ht*yt),this.setViewport(0,0,F,ht)},this.getCurrentViewport=function(F){return F.copy(S)},this.getViewport=function(F){return F.copy(z)},this.setViewport=function(F,ht,yt,vt){F.isVector4?z.set(F.x,F.y,F.z,F.w):z.set(F,ht,yt,vt),Rt.viewport(S.copy(z).multiplyScalar(G).round())},this.getScissor=function(F){return F.copy(St)},this.setScissor=function(F,ht,yt,vt){F.isVector4?St.set(F.x,F.y,F.z,F.w):St.set(F,ht,yt,vt),Rt.scissor(E.copy(St).multiplyScalar(G).round())},this.getScissorTest=function(){return K},this.setScissorTest=function(F){Rt.setScissorTest(K=F)},this.setOpaqueSort=function(F){nt=F},this.setTransparentSort=function(F){st=F},this.getClearColor=function(F){return F.copy(Wt.getClearColor())},this.setClearColor=function(){Wt.setClearColor.apply(Wt,arguments)},this.getClearAlpha=function(){return Wt.getClearAlpha()},this.setClearAlpha=function(){Wt.setClearAlpha.apply(Wt,arguments)},this.clear=function(F=!0,ht=!0,yt=!0){let vt=0;if(F){let ut=!1;if(A!==null){let Ut=A.texture.format;ut=Ut===zc||Ut===Oc||Ut===Fc}if(ut){let Ut=A.texture.type,Ht=Ut===ii||Ut===Xi||Ut===mr||Ut===Us||Ut===Uc||Ut===Nc,Yt=Wt.getClearColor(),Zt=Wt.getClearAlpha(),oe=Yt.r,le=Yt.g,Jt=Yt.b;Ht?(g[0]=oe,g[1]=le,g[2]=Jt,g[3]=Zt,X.clearBufferuiv(X.COLOR,0,g)):(M[0]=oe,M[1]=le,M[2]=Jt,M[3]=Zt,X.clearBufferiv(X.COLOR,0,M))}else vt|=X.COLOR_BUFFER_BIT}ht&&(vt|=X.DEPTH_BUFFER_BIT),yt&&(vt|=X.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),X.clear(vt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",k,!1),e.removeEventListener("webglcontextrestored",O,!1),e.removeEventListener("webglcontextcreationerror",j,!1),It.dispose(),Pt.dispose(),Nt.dispose(),D.dispose(),ft.dispose(),at.dispose(),C.dispose(),L.dispose(),_t.dispose(),w.dispose(),w.removeEventListener("sessionstart",kt),w.removeEventListener("sessionend",zt),Gt.stop()};function k(F){F.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),U=!0}function O(){console.log("THREE.WebGLRenderer: Context Restored."),U=!1;let F=Vt.autoReset,ht=Dt.enabled,yt=Dt.autoUpdate,vt=Dt.needsUpdate,ut=Dt.type;Q(),Vt.autoReset=F,Dt.enabled=ht,Dt.autoUpdate=yt,Dt.needsUpdate=vt,Dt.type=ut}function j(F){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",F.statusMessage)}function ct(F){let ht=F.target;ht.removeEventListener("dispose",ct),J(ht)}function J(F){tt(F),Nt.remove(F)}function tt(F){let ht=Nt.get(F).programs;ht!==void 0&&(ht.forEach(function(yt){_t.releaseProgram(yt)}),F.isShaderMaterial&&_t.releaseShaderCache(F))}this.renderBufferDirect=function(F,ht,yt,vt,ut,Ut){ht===null&&(ht=At);let Ht=ut.isMesh&&ut.matrixWorld.determinant()<0,Yt=Id(F,ht,yt,vt,ut);Rt.setMaterial(vt,Ht);let Zt=yt.index,oe=1;if(vt.wireframe===!0){if(Zt=rt.getWireframeAttribute(yt),Zt===void 0)return;oe=2}let le=yt.drawRange,Jt=yt.attributes.position,fe=le.start*oe,Ee=(le.start+le.count)*oe;Ut!==null&&(fe=Math.max(fe,Ut.start*oe),Ee=Math.min(Ee,(Ut.start+Ut.count)*oe)),Zt!==null?(fe=Math.max(fe,0),Ee=Math.min(Ee,Zt.count)):Jt!=null&&(fe=Math.max(fe,0),Ee=Math.min(Ee,Jt.count));let Te=Ee-fe;if(Te<0||Te===1/0)return;C.setup(ut,vt,Yt,yt,Zt);let un,me=Lt;if(Zt!==null&&(un=it.get(Zt),me=ne,me.setIndex(un)),ut.isMesh)vt.wireframe===!0?(Rt.setLineWidth(vt.wireframeLinewidth*pt()),me.setMode(X.LINES)):me.setMode(X.TRIANGLES);else if(ut.isLine){let jt=vt.linewidth;jt===void 0&&(jt=1),Rt.setLineWidth(jt*pt()),ut.isLineSegments?me.setMode(X.LINES):ut.isLineLoop?me.setMode(X.LINE_LOOP):me.setMode(X.LINE_STRIP)}else ut.isPoints?me.setMode(X.POINTS):ut.isSprite&&me.setMode(X.TRIANGLES);if(ut.isBatchedMesh)if(ut._multiDrawInstances!==null)me.renderMultiDrawInstances(ut._multiDrawStarts,ut._multiDrawCounts,ut._multiDrawCount,ut._multiDrawInstances);else if(Mt.get("WEBGL_multi_draw"))me.renderMultiDraw(ut._multiDrawStarts,ut._multiDrawCounts,ut._multiDrawCount);else{let jt=ut._multiDrawStarts,qn=ut._multiDrawCounts,ge=ut._multiDrawCount,Tn=Zt?it.get(Zt).bytesPerElement:1,es=Nt.get(vt).currentProgram.getUniforms();for(let xn=0;xn<ge;xn++)es.setValue(X,"_gl_DrawID",xn),me.render(jt[xn]/Tn,qn[xn])}else if(ut.isInstancedMesh)me.renderInstances(fe,Te,ut.count);else if(yt.isInstancedBufferGeometry){let jt=yt._maxInstanceCount!==void 0?yt._maxInstanceCount:1/0,qn=Math.min(yt.instanceCount,jt);me.renderInstances(fe,Te,qn)}else me.render(fe,Te)};function dt(F,ht,yt){F.transparent===!0&&F.side===Oe&&F.forceSinglePass===!1?(F.side=Je,F.needsUpdate=!0,Fn(F,ht,yt),F.side=Ai,F.needsUpdate=!0,Fn(F,ht,yt),F.side=Oe):Fn(F,ht,yt)}this.compile=function(F,ht,yt=null){yt===null&&(yt=F),f=Pt.get(yt),f.init(ht),_.push(f),yt.traverseVisible(function(ut){ut.isLight&&ut.layers.test(ht.layers)&&(f.pushLight(ut),ut.castShadow&&f.pushShadow(ut))}),F!==yt&&F.traverseVisible(function(ut){ut.isLight&&ut.layers.test(ht.layers)&&(f.pushLight(ut),ut.castShadow&&f.pushShadow(ut))}),f.setupLights();let vt=new Set;return F.traverse(function(ut){if(!(ut.isMesh||ut.isPoints||ut.isLine||ut.isSprite))return;let Ut=ut.material;if(Ut)if(Array.isArray(Ut))for(let Ht=0;Ht<Ut.length;Ht++){let Yt=Ut[Ht];dt(Yt,yt,ut),vt.add(Yt)}else dt(Ut,yt,ut),vt.add(Ut)}),_.pop(),f=null,vt},this.compileAsync=function(F,ht,yt=null){let vt=this.compile(F,ht,yt);return new Promise(ut=>{function Ut(){if(vt.forEach(function(Ht){Nt.get(Ht).currentProgram.isReady()&&vt.delete(Ht)}),vt.size===0){ut(F);return}setTimeout(Ut,10)}Mt.get("KHR_parallel_shader_compile")!==null?Ut():setTimeout(Ut,10)})};let wt=null;function Ft(F){wt&&wt(F)}function kt(){Gt.stop()}function zt(){Gt.start()}let Gt=new $u;Gt.setAnimationLoop(Ft),typeof self<"u"&&Gt.setContext(self),this.setAnimationLoop=function(F){wt=F,w.setAnimationLoop(F),F===null?Gt.stop():Gt.start()},w.addEventListener("sessionstart",kt),w.addEventListener("sessionend",zt),this.render=function(F,ht){if(ht!==void 0&&ht.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;if(F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),ht.parent===null&&ht.matrixWorldAutoUpdate===!0&&ht.updateMatrixWorld(),w.enabled===!0&&w.isPresenting===!0&&(w.cameraAutoUpdate===!0&&w.updateCamera(ht),ht=w.getCamera()),F.isScene===!0&&F.onBeforeRender(v,F,ht,A),f=Pt.get(F,_.length),f.init(ht),_.push(f),ot.multiplyMatrices(ht.projectionMatrix,ht.matrixWorldInverse),Y.setFromProjectionMatrix(ot),V=this.localClippingEnabled,W=bt.init(this.clippingPlanes,V),x=It.get(F,b.length),x.init(),b.push(x),w.enabled===!0&&w.isPresenting===!0){let Ut=v.xr.getDepthSensingMesh();Ut!==null&&ae(Ut,ht,-1/0,v.sortObjects)}ae(F,ht,0,v.sortObjects),x.finish(),v.sortObjects===!0&&x.sort(nt,st),lt=w.enabled===!1||w.isPresenting===!1||w.hasDepthSensing()===!1,lt&&Wt.addToRenderList(x,F),this.info.render.frame++,W===!0&&bt.beginShadows();let yt=f.state.shadowsArray;Dt.render(yt,F,ht),W===!0&&bt.endShadows(),this.info.autoReset===!0&&this.info.reset();let vt=x.opaque,ut=x.transmissive;if(f.setupLights(),ht.isArrayCamera){let Ut=ht.cameras;if(ut.length>0)for(let Ht=0,Yt=Ut.length;Ht<Yt;Ht++){let Zt=Ut[Ht];Be(vt,ut,F,Zt)}lt&&Wt.render(F);for(let Ht=0,Yt=Ut.length;Ht<Yt;Ht++){let Zt=Ut[Ht];we(x,F,Zt,Zt.viewport)}}else ut.length>0&&Be(vt,ut,F,ht),lt&&Wt.render(F),we(x,F,ht);A!==null&&(B.updateMultisampleRenderTarget(A),B.updateRenderTargetMipmap(A)),F.isScene===!0&&F.onAfterRender(v,F,ht),C.resetDefaultState(),y=-1,m=null,_.pop(),_.length>0?(f=_[_.length-1],W===!0&&bt.setGlobalState(v.clippingPlanes,f.state.camera)):f=null,b.pop(),b.length>0?x=b[b.length-1]:x=null};function ae(F,ht,yt,vt){if(F.visible===!1)return;if(F.layers.test(ht.layers)){if(F.isGroup)yt=F.renderOrder;else if(F.isLOD)F.autoUpdate===!0&&F.update(ht);else if(F.isLight)f.pushLight(F),F.castShadow&&f.pushShadow(F);else if(F.isSprite){if(!F.frustumCulled||Y.intersectsSprite(F)){vt&&Tt.setFromMatrixPosition(F.matrixWorld).applyMatrix4(ot);let Ht=at.update(F),Yt=F.material;Yt.visible&&x.push(F,Ht,Yt,yt,Tt.z,null)}}else if((F.isMesh||F.isLine||F.isPoints)&&(!F.frustumCulled||Y.intersectsObject(F))){let Ht=at.update(F),Yt=F.material;if(vt&&(F.boundingSphere!==void 0?(F.boundingSphere===null&&F.computeBoundingSphere(),Tt.copy(F.boundingSphere.center)):(Ht.boundingSphere===null&&Ht.computeBoundingSphere(),Tt.copy(Ht.boundingSphere.center)),Tt.applyMatrix4(F.matrixWorld).applyMatrix4(ot)),Array.isArray(Yt)){let Zt=Ht.groups;for(let oe=0,le=Zt.length;oe<le;oe++){let Jt=Zt[oe],fe=Yt[Jt.materialIndex];fe&&fe.visible&&x.push(F,Ht,fe,yt,Tt.z,Jt)}}else Yt.visible&&x.push(F,Ht,Yt,yt,Tt.z,null)}}let Ut=F.children;for(let Ht=0,Yt=Ut.length;Ht<Yt;Ht++)ae(Ut[Ht],ht,yt,vt)}function we(F,ht,yt,vt){let ut=F.opaque,Ut=F.transmissive,Ht=F.transparent;f.setupLightsView(yt),W===!0&&bt.setGlobalState(v.clippingPlanes,yt),vt&&Rt.viewport(S.copy(vt)),ut.length>0&&Ve(ut,ht,yt),Ut.length>0&&Ve(Ut,ht,yt),Ht.length>0&&Ve(Ht,ht,yt),Rt.buffers.depth.setTest(!0),Rt.buffers.depth.setMask(!0),Rt.buffers.color.setMask(!0),Rt.setPolygonOffset(!1)}function Be(F,ht,yt,vt){if((yt.isScene===!0?yt.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[vt.id]===void 0&&(f.state.transmissionRenderTarget[vt.id]=new si(1,1,{generateMipmaps:!0,type:Mt.has("EXT_color_buffer_half_float")||Mt.has("EXT_color_buffer_float")?Cr:ii,minFilter:$i,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:de.workingColorSpace}));let Ut=f.state.transmissionRenderTarget[vt.id],Ht=vt.viewport||S;Ut.setSize(Ht.z,Ht.w);let Yt=v.getRenderTarget();v.setRenderTarget(Ut),v.getClearColor(N),q=v.getClearAlpha(),q<1&&v.setClearColor(16777215,.5),v.clear(),lt&&Wt.render(yt);let Zt=v.toneMapping;v.toneMapping=Gn;let oe=vt.viewport;if(vt.viewport!==void 0&&(vt.viewport=void 0),f.setupLightsView(vt),W===!0&&bt.setGlobalState(v.clippingPlanes,vt),Ve(F,yt,vt),B.updateMultisampleRenderTarget(Ut),B.updateRenderTargetMipmap(Ut),Mt.has("WEBGL_multisampled_render_to_texture")===!1){let le=!1;for(let Jt=0,fe=ht.length;Jt<fe;Jt++){let Ee=ht[Jt],Te=Ee.object,un=Ee.geometry,me=Ee.material,jt=Ee.group;if(me.side===Oe&&Te.layers.test(vt.layers)){let qn=me.side;me.side=Je,me.needsUpdate=!0,kn(Te,yt,vt,un,me,jt),me.side=qn,me.needsUpdate=!0,le=!0}}le===!0&&(B.updateMultisampleRenderTarget(Ut),B.updateRenderTargetMipmap(Ut))}v.setRenderTarget(Yt),v.setClearColor(N,q),oe!==void 0&&(vt.viewport=oe),v.toneMapping=Zt}function Ve(F,ht,yt){let vt=ht.isScene===!0?ht.overrideMaterial:null;for(let ut=0,Ut=F.length;ut<Ut;ut++){let Ht=F[ut],Yt=Ht.object,Zt=Ht.geometry,oe=vt===null?Ht.material:vt,le=Ht.group;Yt.layers.test(yt.layers)&&kn(Yt,ht,yt,Zt,oe,le)}}function kn(F,ht,yt,vt,ut,Ut){F.onBeforeRender(v,ht,yt,vt,ut,Ut),F.modelViewMatrix.multiplyMatrices(yt.matrixWorldInverse,F.matrixWorld),F.normalMatrix.getNormalMatrix(F.modelViewMatrix),ut.onBeforeRender(v,ht,yt,vt,F,Ut),ut.transparent===!0&&ut.side===Oe&&ut.forceSinglePass===!1?(ut.side=Je,ut.needsUpdate=!0,v.renderBufferDirect(yt,ht,vt,ut,F,Ut),ut.side=Ai,ut.needsUpdate=!0,v.renderBufferDirect(yt,ht,vt,ut,F,Ut),ut.side=Oe):v.renderBufferDirect(yt,ht,vt,ut,F,Ut),F.onAfterRender(v,ht,yt,vt,ut,Ut)}function Fn(F,ht,yt){ht.isScene!==!0&&(ht=At);let vt=Nt.get(F),ut=f.state.lights,Ut=f.state.shadowsArray,Ht=ut.state.version,Yt=_t.getParameters(F,ut.state,Ut,ht,yt),Zt=_t.getProgramCacheKey(Yt),oe=vt.programs;vt.environment=F.isMeshStandardMaterial?ht.environment:null,vt.fog=ht.fog,vt.envMap=(F.isMeshStandardMaterial?ft:D).get(F.envMap||vt.environment),vt.envMapRotation=vt.environment!==null&&F.envMap===null?ht.environmentRotation:F.envMapRotation,oe===void 0&&(F.addEventListener("dispose",ct),oe=new Map,vt.programs=oe);let le=oe.get(Zt);if(le!==void 0){if(vt.currentProgram===le&&vt.lightsStateVersion===Ht)return Sa(F,Yt),le}else Yt.uniforms=_t.getUniforms(F),F.onBeforeCompile(Yt,v),le=_t.acquireProgram(Yt,Zt),oe.set(Zt,le),vt.uniforms=Yt.uniforms;let Jt=vt.uniforms;return(!F.isShaderMaterial&&!F.isRawShaderMaterial||F.clipping===!0)&&(Jt.clippingPlanes=bt.uniform),Sa(F,Yt),vt.needsLights=Ld(F),vt.lightsStateVersion=Ht,vt.needsLights&&(Jt.ambientLightColor.value=ut.state.ambient,Jt.lightProbe.value=ut.state.probe,Jt.directionalLights.value=ut.state.directional,Jt.directionalLightShadows.value=ut.state.directionalShadow,Jt.spotLights.value=ut.state.spot,Jt.spotLightShadows.value=ut.state.spotShadow,Jt.rectAreaLights.value=ut.state.rectArea,Jt.ltc_1.value=ut.state.rectAreaLTC1,Jt.ltc_2.value=ut.state.rectAreaLTC2,Jt.pointLights.value=ut.state.point,Jt.pointLightShadows.value=ut.state.pointShadow,Jt.hemisphereLights.value=ut.state.hemi,Jt.directionalShadowMap.value=ut.state.directionalShadowMap,Jt.directionalShadowMatrix.value=ut.state.directionalShadowMatrix,Jt.spotShadowMap.value=ut.state.spotShadowMap,Jt.spotLightMatrix.value=ut.state.spotLightMatrix,Jt.spotLightMap.value=ut.state.spotLightMap,Jt.pointShadowMap.value=ut.state.pointShadowMap,Jt.pointShadowMatrix.value=ut.state.pointShadowMatrix),vt.currentProgram=le,vt.uniformsList=null,le}function ts(F){if(F.uniformsList===null){let ht=F.currentProgram.getUniforms();F.uniformsList=Is.seqWithValue(ht.seq,F.uniforms)}return F.uniformsList}function Sa(F,ht){let yt=Nt.get(F);yt.outputColorSpace=ht.outputColorSpace,yt.batching=ht.batching,yt.batchingColor=ht.batchingColor,yt.instancing=ht.instancing,yt.instancingColor=ht.instancingColor,yt.instancingMorph=ht.instancingMorph,yt.skinning=ht.skinning,yt.morphTargets=ht.morphTargets,yt.morphNormals=ht.morphNormals,yt.morphColors=ht.morphColors,yt.morphTargetsCount=ht.morphTargetsCount,yt.numClippingPlanes=ht.numClippingPlanes,yt.numIntersection=ht.numClipIntersection,yt.vertexAlphas=ht.vertexAlphas,yt.vertexTangents=ht.vertexTangents,yt.toneMapping=ht.toneMapping}function Id(F,ht,yt,vt,ut){ht.isScene!==!0&&(ht=At),B.resetTextureUnits();let Ut=ht.fog,Ht=vt.isMeshStandardMaterial?ht.environment:null,Yt=A===null?v.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Bs,Zt=(vt.isMeshStandardMaterial?ft:D).get(vt.envMap||Ht),oe=vt.vertexColors===!0&&!!yt.attributes.color&&yt.attributes.color.itemSize===4,le=!!yt.attributes.tangent&&(!!vt.normalMap||vt.anisotropy>0),Jt=!!yt.morphAttributes.position,fe=!!yt.morphAttributes.normal,Ee=!!yt.morphAttributes.color,Te=Gn;vt.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(Te=v.toneMapping);let un=yt.morphAttributes.position||yt.morphAttributes.normal||yt.morphAttributes.color,me=un!==void 0?un.length:0,jt=Nt.get(vt),qn=f.state.lights;if(W===!0&&(V===!0||F!==m)){let Mn=F===m&&vt.id===y;bt.setState(vt,F,Mn)}let ge=!1;vt.version===jt.__version?(jt.needsLights&&jt.lightsStateVersion!==qn.state.version||jt.outputColorSpace!==Yt||ut.isBatchedMesh&&jt.batching===!1||!ut.isBatchedMesh&&jt.batching===!0||ut.isBatchedMesh&&jt.batchingColor===!0&&ut.colorTexture===null||ut.isBatchedMesh&&jt.batchingColor===!1&&ut.colorTexture!==null||ut.isInstancedMesh&&jt.instancing===!1||!ut.isInstancedMesh&&jt.instancing===!0||ut.isSkinnedMesh&&jt.skinning===!1||!ut.isSkinnedMesh&&jt.skinning===!0||ut.isInstancedMesh&&jt.instancingColor===!0&&ut.instanceColor===null||ut.isInstancedMesh&&jt.instancingColor===!1&&ut.instanceColor!==null||ut.isInstancedMesh&&jt.instancingMorph===!0&&ut.morphTexture===null||ut.isInstancedMesh&&jt.instancingMorph===!1&&ut.morphTexture!==null||jt.envMap!==Zt||vt.fog===!0&&jt.fog!==Ut||jt.numClippingPlanes!==void 0&&(jt.numClippingPlanes!==bt.numPlanes||jt.numIntersection!==bt.numIntersection)||jt.vertexAlphas!==oe||jt.vertexTangents!==le||jt.morphTargets!==Jt||jt.morphNormals!==fe||jt.morphColors!==Ee||jt.toneMapping!==Te||jt.morphTargetsCount!==me)&&(ge=!0):(ge=!0,jt.__version=vt.version);let Tn=jt.currentProgram;ge===!0&&(Tn=Fn(vt,ht,ut));let es=!1,xn=!1,qs=!1,Ae=Tn.getUniforms(),On=jt.uniforms;if(Rt.useProgram(Tn.program)&&(es=!0,xn=!0,qs=!0),vt.id!==y&&(y=vt.id,xn=!0),es||m!==F){Rt.buffers.depth.getReversed()?(Z.copy(F.projectionMatrix),qf(Z),Yf(Z),Ae.setValue(X,"projectionMatrix",Z)):Ae.setValue(X,"projectionMatrix",F.projectionMatrix),Ae.setValue(X,"viewMatrix",F.matrixWorldInverse);let mi=Ae.map.cameraPosition;mi!==void 0&&mi.setValue(X,gt.setFromMatrixPosition(F.matrixWorld)),et.logarithmicDepthBuffer&&Ae.setValue(X,"logDepthBufFC",2/(Math.log(F.far+1)/Math.LN2)),(vt.isMeshPhongMaterial||vt.isMeshToonMaterial||vt.isMeshLambertMaterial||vt.isMeshBasicMaterial||vt.isMeshStandardMaterial||vt.isShaderMaterial)&&Ae.setValue(X,"isOrthographic",F.isOrthographicCamera===!0),m!==F&&(m=F,xn=!0,qs=!0)}if(ut.isSkinnedMesh){Ae.setOptional(X,ut,"bindMatrix"),Ae.setOptional(X,ut,"bindMatrixInverse");let Mn=ut.skeleton;Mn&&(Mn.boneTexture===null&&Mn.computeBoneTexture(),Ae.setValue(X,"boneTexture",Mn.boneTexture,B))}ut.isBatchedMesh&&(Ae.setOptional(X,ut,"batchingTexture"),Ae.setValue(X,"batchingTexture",ut._matricesTexture,B),Ae.setOptional(X,ut,"batchingIdTexture"),Ae.setValue(X,"batchingIdTexture",ut._indirectTexture,B),Ae.setOptional(X,ut,"batchingColorTexture"),ut._colorsTexture!==null&&Ae.setValue(X,"batchingColorTexture",ut._colorsTexture,B));let Ys=yt.morphAttributes;if((Ys.position!==void 0||Ys.normal!==void 0||Ys.color!==void 0)&&Xt.update(ut,yt,Tn),(xn||jt.receiveShadow!==ut.receiveShadow)&&(jt.receiveShadow=ut.receiveShadow,Ae.setValue(X,"receiveShadow",ut.receiveShadow)),vt.isMeshGouraudMaterial&&vt.envMap!==null&&(On.envMap.value=Zt,On.flipEnvMap.value=Zt.isCubeTexture&&Zt.isRenderTargetTexture===!1?-1:1),vt.isMeshStandardMaterial&&vt.envMap===null&&ht.environment!==null&&(On.envMapIntensity.value=ht.environmentIntensity),xn&&(Ae.setValue(X,"toneMappingExposure",v.toneMappingExposure),jt.needsLights&&Pd(On,qs),Ut&&vt.fog===!0&&mt.refreshFogUniforms(On,Ut),mt.refreshMaterialUniforms(On,vt,G,H,f.state.transmissionRenderTarget[F.id]),Is.upload(X,ts(jt),On,B)),vt.isShaderMaterial&&vt.uniformsNeedUpdate===!0&&(Is.upload(X,ts(jt),On,B),vt.uniformsNeedUpdate=!1),vt.isSpriteMaterial&&Ae.setValue(X,"center",ut.center),Ae.setValue(X,"modelViewMatrix",ut.modelViewMatrix),Ae.setValue(X,"normalMatrix",ut.normalMatrix),Ae.setValue(X,"modelMatrix",ut.matrixWorld),vt.isShaderMaterial||vt.isRawShaderMaterial){let Mn=vt.uniformsGroups;for(let mi=0,gi=Mn.length;mi<gi;mi++){let eh=Mn[mi];L.update(eh,Tn),L.bind(eh,Tn)}}return Tn}function Pd(F,ht){F.ambientLightColor.needsUpdate=ht,F.lightProbe.needsUpdate=ht,F.directionalLights.needsUpdate=ht,F.directionalLightShadows.needsUpdate=ht,F.pointLights.needsUpdate=ht,F.pointLightShadows.needsUpdate=ht,F.spotLights.needsUpdate=ht,F.spotLightShadows.needsUpdate=ht,F.rectAreaLights.needsUpdate=ht,F.hemisphereLights.needsUpdate=ht}function Ld(F){return F.isMeshLambertMaterial||F.isMeshToonMaterial||F.isMeshPhongMaterial||F.isMeshStandardMaterial||F.isShadowMaterial||F.isShaderMaterial&&F.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(F,ht,yt){Nt.get(F.texture).__webglTexture=ht,Nt.get(F.depthTexture).__webglTexture=yt;let vt=Nt.get(F);vt.__hasExternalTextures=!0,vt.__autoAllocateDepthBuffer=yt===void 0,vt.__autoAllocateDepthBuffer||Mt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),vt.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(F,ht){let yt=Nt.get(F);yt.__webglFramebuffer=ht,yt.__useDefaultFramebuffer=ht===void 0},this.setRenderTarget=function(F,ht=0,yt=0){A=F,P=ht,T=yt;let vt=!0,ut=null,Ut=!1,Ht=!1;if(F){let Zt=Nt.get(F);if(Zt.__useDefaultFramebuffer!==void 0)Rt.bindFramebuffer(X.FRAMEBUFFER,null),vt=!1;else if(Zt.__webglFramebuffer===void 0)B.setupRenderTarget(F);else if(Zt.__hasExternalTextures)B.rebindTextures(F,Nt.get(F.texture).__webglTexture,Nt.get(F.depthTexture).__webglTexture);else if(F.depthBuffer){let Jt=F.depthTexture;if(Zt.__boundDepthTexture!==Jt){if(Jt!==null&&Nt.has(Jt)&&(F.width!==Jt.image.width||F.height!==Jt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");B.setupDepthRenderbuffer(F)}}let oe=F.texture;(oe.isData3DTexture||oe.isDataArrayTexture||oe.isCompressedArrayTexture)&&(Ht=!0);let le=Nt.get(F).__webglFramebuffer;F.isWebGLCubeRenderTarget?(Array.isArray(le[ht])?ut=le[ht][yt]:ut=le[ht],Ut=!0):F.samples>0&&B.useMultisampledRTT(F)===!1?ut=Nt.get(F).__webglMultisampledFramebuffer:Array.isArray(le)?ut=le[yt]:ut=le,S.copy(F.viewport),E.copy(F.scissor),I=F.scissorTest}else S.copy(z).multiplyScalar(G).floor(),E.copy(St).multiplyScalar(G).floor(),I=K;if(Rt.bindFramebuffer(X.FRAMEBUFFER,ut)&&vt&&Rt.drawBuffers(F,ut),Rt.viewport(S),Rt.scissor(E),Rt.setScissorTest(I),Ut){let Zt=Nt.get(F.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Zt.__webglTexture,yt)}else if(Ht){let Zt=Nt.get(F.texture),oe=ht||0;X.framebufferTextureLayer(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,Zt.__webglTexture,yt||0,oe)}y=-1},this.readRenderTargetPixels=function(F,ht,yt,vt,ut,Ut,Ht){if(!(F&&F.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Yt=Nt.get(F).__webglFramebuffer;if(F.isWebGLCubeRenderTarget&&Ht!==void 0&&(Yt=Yt[Ht]),Yt){Rt.bindFramebuffer(X.FRAMEBUFFER,Yt);try{let Zt=F.texture,oe=Zt.format,le=Zt.type;if(!et.textureFormatReadable(oe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!et.textureTypeReadable(le)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}ht>=0&&ht<=F.width-vt&&yt>=0&&yt<=F.height-ut&&X.readPixels(ht,yt,vt,ut,qt.convert(oe),qt.convert(le),Ut)}finally{let Zt=A!==null?Nt.get(A).__webglFramebuffer:null;Rt.bindFramebuffer(X.FRAMEBUFFER,Zt)}}},this.readRenderTargetPixelsAsync=async function(F,ht,yt,vt,ut,Ut,Ht){if(!(F&&F.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Yt=Nt.get(F).__webglFramebuffer;if(F.isWebGLCubeRenderTarget&&Ht!==void 0&&(Yt=Yt[Ht]),Yt){let Zt=F.texture,oe=Zt.format,le=Zt.type;if(!et.textureFormatReadable(oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!et.textureTypeReadable(le))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(ht>=0&&ht<=F.width-vt&&yt>=0&&yt<=F.height-ut){Rt.bindFramebuffer(X.FRAMEBUFFER,Yt);let Jt=X.createBuffer();X.bindBuffer(X.PIXEL_PACK_BUFFER,Jt),X.bufferData(X.PIXEL_PACK_BUFFER,Ut.byteLength,X.STREAM_READ),X.readPixels(ht,yt,vt,ut,qt.convert(oe),qt.convert(le),0);let fe=A!==null?Nt.get(A).__webglFramebuffer:null;Rt.bindFramebuffer(X.FRAMEBUFFER,fe);let Ee=X.fenceSync(X.SYNC_GPU_COMMANDS_COMPLETE,0);return X.flush(),await Xf(X,Ee,4),X.bindBuffer(X.PIXEL_PACK_BUFFER,Jt),X.getBufferSubData(X.PIXEL_PACK_BUFFER,0,Ut),X.deleteBuffer(Jt),X.deleteSync(Ee),Ut}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(F,ht=null,yt=0){F.isTexture!==!0&&(lr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),ht=arguments[0]||null,F=arguments[1]);let vt=Math.pow(2,-yt),ut=Math.floor(F.image.width*vt),Ut=Math.floor(F.image.height*vt),Ht=ht!==null?ht.x:0,Yt=ht!==null?ht.y:0;B.setTexture2D(F,0),X.copyTexSubImage2D(X.TEXTURE_2D,yt,0,0,Ht,Yt,ut,Ut),Rt.unbindTexture()},this.copyTextureToTexture=function(F,ht,yt=null,vt=null,ut=0){F.isTexture!==!0&&(lr("WebGLRenderer: copyTextureToTexture function signature has changed."),vt=arguments[0]||null,F=arguments[1],ht=arguments[2],ut=arguments[3]||0,yt=null);let Ut,Ht,Yt,Zt,oe,le,Jt,fe,Ee,Te=F.isCompressedTexture?F.mipmaps[ut]:F.image;yt!==null?(Ut=yt.max.x-yt.min.x,Ht=yt.max.y-yt.min.y,Yt=yt.isBox3?yt.max.z-yt.min.z:1,Zt=yt.min.x,oe=yt.min.y,le=yt.isBox3?yt.min.z:0):(Ut=Te.width,Ht=Te.height,Yt=Te.depth||1,Zt=0,oe=0,le=0),vt!==null?(Jt=vt.x,fe=vt.y,Ee=vt.z):(Jt=0,fe=0,Ee=0);let un=qt.convert(ht.format),me=qt.convert(ht.type),jt;ht.isData3DTexture?(B.setTexture3D(ht,0),jt=X.TEXTURE_3D):ht.isDataArrayTexture||ht.isCompressedArrayTexture?(B.setTexture2DArray(ht,0),jt=X.TEXTURE_2D_ARRAY):(B.setTexture2D(ht,0),jt=X.TEXTURE_2D),X.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,ht.flipY),X.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ht.premultiplyAlpha),X.pixelStorei(X.UNPACK_ALIGNMENT,ht.unpackAlignment);let qn=X.getParameter(X.UNPACK_ROW_LENGTH),ge=X.getParameter(X.UNPACK_IMAGE_HEIGHT),Tn=X.getParameter(X.UNPACK_SKIP_PIXELS),es=X.getParameter(X.UNPACK_SKIP_ROWS),xn=X.getParameter(X.UNPACK_SKIP_IMAGES);X.pixelStorei(X.UNPACK_ROW_LENGTH,Te.width),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,Te.height),X.pixelStorei(X.UNPACK_SKIP_PIXELS,Zt),X.pixelStorei(X.UNPACK_SKIP_ROWS,oe),X.pixelStorei(X.UNPACK_SKIP_IMAGES,le);let qs=F.isDataArrayTexture||F.isData3DTexture,Ae=ht.isDataArrayTexture||ht.isData3DTexture;if(F.isRenderTargetTexture||F.isDepthTexture){let On=Nt.get(F),Ys=Nt.get(ht),Mn=Nt.get(On.__renderTarget),mi=Nt.get(Ys.__renderTarget);Rt.bindFramebuffer(X.READ_FRAMEBUFFER,Mn.__webglFramebuffer),Rt.bindFramebuffer(X.DRAW_FRAMEBUFFER,mi.__webglFramebuffer);for(let gi=0;gi<Yt;gi++)qs&&X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,Nt.get(F).__webglTexture,ut,le+gi),F.isDepthTexture?(Ae&&X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,Nt.get(ht).__webglTexture,ut,Ee+gi),X.blitFramebuffer(Zt,oe,Ut,Ht,Jt,fe,Ut,Ht,X.DEPTH_BUFFER_BIT,X.NEAREST)):Ae?X.copyTexSubImage3D(jt,ut,Jt,fe,Ee+gi,Zt,oe,Ut,Ht):X.copyTexSubImage2D(jt,ut,Jt,fe,Ee+gi,Zt,oe,Ut,Ht);Rt.bindFramebuffer(X.READ_FRAMEBUFFER,null),Rt.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else Ae?F.isDataTexture||F.isData3DTexture?X.texSubImage3D(jt,ut,Jt,fe,Ee,Ut,Ht,Yt,un,me,Te.data):ht.isCompressedArrayTexture?X.compressedTexSubImage3D(jt,ut,Jt,fe,Ee,Ut,Ht,Yt,un,Te.data):X.texSubImage3D(jt,ut,Jt,fe,Ee,Ut,Ht,Yt,un,me,Te):F.isDataTexture?X.texSubImage2D(X.TEXTURE_2D,ut,Jt,fe,Ut,Ht,un,me,Te.data):F.isCompressedTexture?X.compressedTexSubImage2D(X.TEXTURE_2D,ut,Jt,fe,Te.width,Te.height,un,Te.data):X.texSubImage2D(X.TEXTURE_2D,ut,Jt,fe,Ut,Ht,un,me,Te);X.pixelStorei(X.UNPACK_ROW_LENGTH,qn),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,ge),X.pixelStorei(X.UNPACK_SKIP_PIXELS,Tn),X.pixelStorei(X.UNPACK_SKIP_ROWS,es),X.pixelStorei(X.UNPACK_SKIP_IMAGES,xn),ut===0&&ht.generateMipmaps&&X.generateMipmap(jt),Rt.unbindTexture()},this.copyTextureToTexture3D=function(F,ht,yt=null,vt=null,ut=0){return F.isTexture!==!0&&(lr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),yt=arguments[0]||null,vt=arguments[1]||null,F=arguments[2],ht=arguments[3],ut=arguments[4]||0),lr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(F,ht,yt,vt,ut)},this.initRenderTarget=function(F){Nt.get(F).__webglFramebuffer===void 0&&B.setupRenderTarget(F)},this.initTexture=function(F){F.isCubeTexture?B.setTextureCube(F,0):F.isData3DTexture?B.setTexture3D(F,0):F.isDataArrayTexture||F.isCompressedArrayTexture?B.setTexture2DArray(F,0):B.setTexture2D(F,0),Rt.unbindTexture()},this.resetState=function(){P=0,T=0,A=null,Rt.reset(),C.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ei}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=de._getDrawingBufferColorSpace(t),e.unpackColorSpace=de._getUnpackColorSpace()}};var Vo=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Kt(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Go=class extends Pe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Dn,this.environmentIntensity=1,this.environmentRotation=new Dn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},$o=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Yl,this.updateRanges=[],this.version=0,this.uuid=$n()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=$n()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=$n()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},sn=new $,yr=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)sn.fromBufferAttribute(this,e),sn.applyMatrix4(t),this.setXYZ(e,sn.x,sn.y,sn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)sn.fromBufferAttribute(this,e),sn.applyNormalMatrix(t),this.setXYZ(e,sn.x,sn.y,sn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)sn.fromBufferAttribute(this,e),sn.transformDirection(t),this.setXYZ(e,sn.x,sn.y,sn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Ln(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ye(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=ye(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ye(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ye(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ye(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Ln(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Ln(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Ln(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Ln(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=ye(e,this.array),n=ye(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=ye(e,this.array),n=ye(n,this.array),s=ye(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=ye(e,this.array),n=ye(n,this.array),s=ye(s,this.array),r=ye(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new De(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},vr=class extends oi{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new Kt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},_s,nr=new $,Ms=new $,bs=new $,Ss=new Ct,ir=new Ct,Zu=new pe,uo=new $,sr=new $,fo=new $,du=new Ct,il=new Ct,fu=new Ct,Wo=class extends Pe{constructor(t=new vr){if(super(),this.isSprite=!0,this.type="Sprite",_s===void 0){_s=new be;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new $o(e,5);_s.setIndex([0,1,2,0,2,3]),_s.setAttribute("position",new yr(n,3,0,!1)),_s.setAttribute("uv",new yr(n,2,3,!1))}this.geometry=_s,this.material=t,this.center=new Ct(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ms.setFromMatrixScale(this.matrixWorld),Zu.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),bs.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ms.multiplyScalar(-bs.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let o=this.center;po(uo.set(-.5,-.5,0),bs,o,Ms,s,r),po(sr.set(.5,-.5,0),bs,o,Ms,s,r),po(fo.set(.5,.5,0),bs,o,Ms,s,r),du.set(0,0),il.set(1,0),fu.set(1,1);let a=t.ray.intersectTriangle(uo,sr,fo,!1,nr);if(a===null&&(po(sr.set(-.5,.5,0),bs,o,Ms,s,r),il.set(0,1),a=t.ray.intersectTriangle(uo,fo,sr,!1,nr),a===null))return;let l=t.ray.origin.distanceTo(nr);l<t.near||l>t.far||e.push({distance:l,point:nr.clone(),uv:wi.getInterpolation(nr,uo,sr,fo,du,il,fu,new Ct),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function po(i,t,e,n,s,r){Ss.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(ir.x=r*Ss.x-s*Ss.y,ir.y=s*Ss.x+r*Ss.y):ir.copy(Ss),i.copy(t),i.x+=ir.x,i.y+=ir.y,i.applyMatrix4(Zu)}var _r=class extends fn{constructor(t=null,e=1,n=1,s,r,o,a,l,h=an,u=an,p,d){super(null,o,a,l,h,u,s,r,p,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Mr=class extends De{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},ws=new pe,pu=new pe,mo=[],mu=new ri,Hx=new pe,rr=new Ie,or=new Ci,mn=class extends Ie{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Mr(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Hx)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new ri),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ws),mu.copy(t.boundingBox).applyMatrix4(ws),this.boundingBox.union(mu)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ci),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ws),or.copy(t.boundingSphere).applyMatrix4(ws),this.boundingSphere.union(or)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(rr.geometry=this.geometry,rr.material=this.material,rr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),or.copy(this.boundingSphere),or.applyMatrix4(n),t.ray.intersectsSphere(or)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ws),pu.multiplyMatrices(n,ws),rr.matrixWorld=pu,rr.raycast(t,mo);for(let o=0,a=mo.length;o<a;o++){let l=mo[o];l.instanceId=r,l.object=this,e.push(l)}mo.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Mr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new _r(new Float32Array(s*this.count),s,this.count,kc,Vn));let r=this.morphTexture.source.data.data,o=0;for(let h=0;h<n.length;h++)o+=n[h];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var qi=class extends oi{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new Kt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Xo=new $,qo=new $,gu=new pe,ar=new Lo,go=new Ci,sl=new $,xu=new $,uc=class extends Pe{constructor(t=new be,e=new qi){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)Xo.fromBufferAttribute(e,s-1),qo.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Xo.distanceTo(qo);t.setAttribute("lineDistance",new ie(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),go.copy(n.boundingSphere),go.applyMatrix4(s),go.radius+=r,t.ray.intersectsSphere(go)===!1)return;gu.copy(s).invert(),ar.copy(t.ray).applyMatrix4(gu);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,h=this.isLineSegments?2:1,u=n.index,d=n.attributes.position;if(u!==null){let c=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let M=c,x=g-1;M<x;M+=h){let f=u.getX(M),b=u.getX(M+1),_=xo(this,t,ar,l,f,b);_&&e.push(_)}if(this.isLineLoop){let M=u.getX(g-1),x=u.getX(c),f=xo(this,t,ar,l,M,x);f&&e.push(f)}}else{let c=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let M=c,x=g-1;M<x;M+=h){let f=xo(this,t,ar,l,M,M+1);f&&e.push(f)}if(this.isLineLoop){let M=xo(this,t,ar,l,g-1,c);M&&e.push(M)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function xo(i,t,e,n,s,r){let o=i.geometry.attributes.position;if(Xo.fromBufferAttribute(o,s),qo.fromBufferAttribute(o,r),e.distanceSqToSegment(Xo,qo,sl,xu)>n)return;sl.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(sl);if(!(l<t.near||l>t.far))return{distance:l,point:xu.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}var yu=new $,vu=new $,Fs=class extends uc{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)yu.fromBufferAttribute(e,s),vu.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+yu.distanceTo(vu);t.setAttribute("lineDistance",new ie(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Os=class extends fn{constructor(t,e,n,s,r,o,a,l,h){super(t,e,n,s,r,o,a,l,h),this.isCanvasTexture=!0,this.needsUpdate=!0}},wn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),s=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,l=r-1,h;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),h=n[s]-o,h<0)a=s+1;else if(h>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);let u=n[s],d=n[s+1]-u,c=(o-u)/d;return(s+c)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new Ct:new $);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new $,s=[],r=[],o=[],a=new $,l=new pe;for(let c=0;c<=t;c++){let g=c/t;s[c]=this.getTangentAt(g,new $)}r[0]=new $,o[0]=new $;let h=Number.MAX_VALUE,u=Math.abs(s[0].x),p=Math.abs(s[0].y),d=Math.abs(s[0].z);u<=h&&(h=u,n.set(1,0,0)),p<=h&&(h=p,n.set(0,1,0)),d<=h&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let c=1;c<=t;c++){if(r[c]=r[c-1].clone(),o[c]=o[c-1].clone(),a.crossVectors(s[c-1],s[c]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(Ze(s[c-1].dot(s[c]),-1,1));r[c].applyMatrix4(l.makeRotationAxis(a,g))}o[c].crossVectors(s[c],r[c])}if(e===!0){let c=Math.acos(Ze(r[0].dot(r[t]),-1,1));c/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(c=-c);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],c*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},br=class extends wn{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new Ct){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(a),h=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let u=Math.cos(this.aRotation),p=Math.sin(this.aRotation),d=l-this.aX,c=h-this.aY;l=d*u-c*p+this.aX,h=d*p+c*u+this.aY}return n.set(l,h)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},dc=class extends br{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Gc(){let i=0,t=0,e=0,n=0;function s(r,o,a,l){i=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,h){s(o,a,h*(a-r),h*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,h,u,p){let d=(o-r)/h-(a-r)/(h+u)+(a-o)/u,c=(a-o)/u-(l-o)/(u+p)+(l-a)/p;d*=u,c*=u,s(o,a,d,c)},calc:function(r){let o=r*r,a=o*r;return i+t*r+e*o+n*a}}}var yo=new $,rl=new Gc,ol=new Gc,al=new Gc,Sr=class extends wn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new $){let n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let h,u;this.closed||a>0?h=s[(a-1)%r]:(yo.subVectors(s[0],s[1]).add(s[0]),h=yo);let p=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(yo.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=yo),this.curveType==="centripetal"||this.curveType==="chordal"){let c=this.curveType==="chordal"?.5:.25,g=Math.pow(h.distanceToSquared(p),c),M=Math.pow(p.distanceToSquared(d),c),x=Math.pow(d.distanceToSquared(u),c);M<1e-4&&(M=1),g<1e-4&&(g=M),x<1e-4&&(x=M),rl.initNonuniformCatmullRom(h.x,p.x,d.x,u.x,g,M,x),ol.initNonuniformCatmullRom(h.y,p.y,d.y,u.y,g,M,x),al.initNonuniformCatmullRom(h.z,p.z,d.z,u.z,g,M,x)}else this.curveType==="catmullrom"&&(rl.initCatmullRom(h.x,p.x,d.x,u.x,this.tension),ol.initCatmullRom(h.y,p.y,d.y,u.y,this.tension),al.initCatmullRom(h.z,p.z,d.z,u.z,this.tension));return n.set(rl.calc(l),ol.calc(l),al.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new $().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function _u(i,t,e,n,s){let r=(n-t)*.5,o=(s-e)*.5,a=i*i,l=i*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*i+e}function Vx(i,t){let e=1-i;return e*e*t}function Gx(i,t){return 2*(1-i)*i*t}function $x(i,t){return i*i*t}function fr(i,t,e,n){return Vx(i,t)+Gx(i,e)+$x(i,n)}function Wx(i,t){let e=1-i;return e*e*e*t}function Xx(i,t){let e=1-i;return 3*e*e*i*t}function qx(i,t){return 3*(1-i)*i*i*t}function Yx(i,t){return i*i*i*t}function pr(i,t,e,n,s){return Wx(i,t)+Xx(i,e)+qx(i,n)+Yx(i,s)}var Yo=class extends wn{constructor(t=new Ct,e=new Ct,n=new Ct,s=new Ct){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new Ct){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(pr(t,s.x,r.x,o.x,a.x),pr(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},fc=class extends wn{constructor(t=new $,e=new $,n=new $,s=new $){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new $){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(pr(t,s.x,r.x,o.x,a.x),pr(t,s.y,r.y,o.y,a.y),pr(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Zo=class extends wn{constructor(t=new Ct,e=new Ct){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Ct){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Ct){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},pc=class extends wn{constructor(t=new $,e=new $){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new $){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new $){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Jo=class extends wn{constructor(t=new Ct,e=new Ct,n=new Ct){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Ct){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(fr(t,s.x,r.x,o.x),fr(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ko=class extends wn{constructor(t=new $,e=new $,n=new $){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new $){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(fr(t,s.x,r.x,o.x),fr(t,s.y,r.y,o.y),fr(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},jo=class extends wn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Ct){let n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],h=s[o],u=s[o>s.length-2?s.length-1:o+1],p=s[o>s.length-3?s.length-1:o+2];return n.set(_u(a,l.x,h.x,u.x,p.x),_u(a,l.y,h.y,u.y,p.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new Ct().fromArray(s))}return this}},Qo=Object.freeze({__proto__:null,ArcCurve:dc,CatmullRomCurve3:Sr,CubicBezierCurve:Yo,CubicBezierCurve3:fc,EllipseCurve:br,LineCurve:Zo,LineCurve3:pc,QuadraticBezierCurve:Jo,QuadraticBezierCurve3:Ko,SplineCurve:jo}),mc=class extends wn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Qo[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],l=a.getLength(),h=l===0?0:1-o/l;return a.getPointAt(h,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let h=0;h<l.length;h++){let u=l[h];n&&n.equals(u)||(e.push(u),n=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new Qo[s.type]().fromJSON(s))}return this}},wr=class extends mc{constructor(t){super(),this.type="Path",this.currentPoint=new Ct,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Zo(this.currentPoint.clone(),new Ct(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new Jo(this.currentPoint.clone(),new Ct(t,e),new Ct(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){let a=new Yo(this.currentPoint.clone(),new Ct(t,e),new Ct(n,s),new Ct(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new jo(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,l){let h=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+h,e+u,n,s,r,o,a,l),this}absellipse(t,e,n,s,r,o,a,l){let h=new br(t,e,n,s,r,o,a,l);if(this.curves.length>0){let p=h.getPoint(0);p.equals(this.currentPoint)||this.lineTo(p.x,p.y)}this.curves.push(h);let u=h.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Er=class i extends be{constructor(t=[new Ct(0,-.5),new Ct(.5,0),new Ct(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=Ze(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],h=[],u=1/e,p=new $,d=new Ct,c=new $,g=new $,M=new $,x=0,f=0;for(let b=0;b<=t.length-1;b++)switch(b){case 0:x=t[b+1].x-t[b].x,f=t[b+1].y-t[b].y,c.x=f*1,c.y=-x,c.z=f*0,M.copy(c),c.normalize(),l.push(c.x,c.y,c.z);break;case t.length-1:l.push(M.x,M.y,M.z);break;default:x=t[b+1].x-t[b].x,f=t[b+1].y-t[b].y,c.x=f*1,c.y=-x,c.z=f*0,g.copy(c),c.x+=M.x,c.y+=M.y,c.z+=M.z,c.normalize(),l.push(c.x,c.y,c.z),M.copy(g)}for(let b=0;b<=e;b++){let _=n+b*u*s,v=Math.sin(_),U=Math.cos(_);for(let P=0;P<=t.length-1;P++){p.x=t[P].x*v,p.y=t[P].y,p.z=t[P].x*U,o.push(p.x,p.y,p.z),d.x=b/e,d.y=P/(t.length-1),a.push(d.x,d.y);let T=l[3*P+0]*v,A=l[3*P+1],y=l[3*P+0]*U;h.push(T,A,y)}}for(let b=0;b<e;b++)for(let _=0;_<t.length-1;_++){let v=_+b*t.length,U=v,P=v+t.length,T=v+t.length+1,A=v+1;r.push(U,P,A),r.push(T,A,P)}this.setIndex(r),this.setAttribute("position",new ie(o,3)),this.setAttribute("uv",new ie(a,2)),this.setAttribute("normal",new ie(h,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}},Ii=class i extends Er{constructor(t=1,e=1,n=4,s=8){let r=new wr;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:s}}static fromJSON(t){return new i(t.radius,t.length,t.capSegments,t.radialSegments)}};var he=class i extends be{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let h=this;s=Math.floor(s),r=Math.floor(r);let u=[],p=[],d=[],c=[],g=0,M=[],x=n/2,f=0;b(),o===!1&&(t>0&&_(!0),e>0&&_(!1)),this.setIndex(u),this.setAttribute("position",new ie(p,3)),this.setAttribute("normal",new ie(d,3)),this.setAttribute("uv",new ie(c,2));function b(){let v=new $,U=new $,P=0,T=(e-t)/n;for(let A=0;A<=r;A++){let y=[],m=A/r,S=m*(e-t)+t;for(let E=0;E<=s;E++){let I=E/s,N=I*l+a,q=Math.sin(N),R=Math.cos(N);U.x=S*q,U.y=-m*n+x,U.z=S*R,p.push(U.x,U.y,U.z),v.set(q,T,R).normalize(),d.push(v.x,v.y,v.z),c.push(I,1-m),y.push(g++)}M.push(y)}for(let A=0;A<s;A++)for(let y=0;y<r;y++){let m=M[y][A],S=M[y+1][A],E=M[y+1][A+1],I=M[y][A+1];(t>0||y!==0)&&(u.push(m,S,I),P+=3),(e>0||y!==r-1)&&(u.push(S,E,I),P+=3)}h.addGroup(f,P,0),f+=P}function _(v){let U=g,P=new Ct,T=new $,A=0,y=v===!0?t:e,m=v===!0?1:-1;for(let E=1;E<=s;E++)p.push(0,x*m,0),d.push(0,m,0),c.push(.5,.5),g++;let S=g;for(let E=0;E<=s;E++){let N=E/s*l+a,q=Math.cos(N),R=Math.sin(N);T.x=y*R,T.y=x*m,T.z=y*q,p.push(T.x,T.y,T.z),d.push(0,m,0),P.x=q*.5+.5,P.y=R*.5*m+.5,c.push(P.x,P.y),g++}for(let E=0;E<s;E++){let I=U+E,N=S+E;v===!0?u.push(N,N+1,I):u.push(N+1,N,I),A+=3}h.addGroup(f,A,v===!0?1:2),f+=A}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},ze=class i extends he{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},gc=class i extends be{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],o=[];a(s),h(n),u(),this.setAttribute("position",new ie(r,3)),this.setAttribute("normal",new ie(r.slice(),3)),this.setAttribute("uv",new ie(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(b){let _=new $,v=new $,U=new $;for(let P=0;P<e.length;P+=3)c(e[P+0],_),c(e[P+1],v),c(e[P+2],U),l(_,v,U,b)}function l(b,_,v,U){let P=U+1,T=[];for(let A=0;A<=P;A++){T[A]=[];let y=b.clone().lerp(v,A/P),m=_.clone().lerp(v,A/P),S=P-A;for(let E=0;E<=S;E++)E===0&&A===P?T[A][E]=y:T[A][E]=y.clone().lerp(m,E/S)}for(let A=0;A<P;A++)for(let y=0;y<2*(P-A)-1;y++){let m=Math.floor(y/2);y%2===0?(d(T[A][m+1]),d(T[A+1][m]),d(T[A][m])):(d(T[A][m+1]),d(T[A+1][m+1]),d(T[A+1][m]))}}function h(b){let _=new $;for(let v=0;v<r.length;v+=3)_.x=r[v+0],_.y=r[v+1],_.z=r[v+2],_.normalize().multiplyScalar(b),r[v+0]=_.x,r[v+1]=_.y,r[v+2]=_.z}function u(){let b=new $;for(let _=0;_<r.length;_+=3){b.x=r[_+0],b.y=r[_+1],b.z=r[_+2];let v=x(b)/2/Math.PI+.5,U=f(b)/Math.PI+.5;o.push(v,1-U)}g(),p()}function p(){for(let b=0;b<o.length;b+=6){let _=o[b+0],v=o[b+2],U=o[b+4],P=Math.max(_,v,U),T=Math.min(_,v,U);P>.9&&T<.1&&(_<.2&&(o[b+0]+=1),v<.2&&(o[b+2]+=1),U<.2&&(o[b+4]+=1))}}function d(b){r.push(b.x,b.y,b.z)}function c(b,_){let v=b*3;_.x=t[v+0],_.y=t[v+1],_.z=t[v+2]}function g(){let b=new $,_=new $,v=new $,U=new $,P=new Ct,T=new Ct,A=new Ct;for(let y=0,m=0;y<r.length;y+=9,m+=6){b.set(r[y+0],r[y+1],r[y+2]),_.set(r[y+3],r[y+4],r[y+5]),v.set(r[y+6],r[y+7],r[y+8]),P.set(o[m+0],o[m+1]),T.set(o[m+2],o[m+3]),A.set(o[m+4],o[m+5]),U.copy(b).add(_).add(v).divideScalar(3);let S=x(U);M(P,m+0,b,S),M(T,m+2,_,S),M(A,m+4,v,S)}}function M(b,_,v,U){U<0&&b.x===1&&(o[_]=b.x-1),v.x===0&&v.z===0&&(o[_]=U/2/Math.PI+.5)}function x(b){return Math.atan2(b.z,-b.x)}function f(b){return Math.atan2(-b.y,Math.sqrt(b.x*b.x+b.z*b.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.details)}};var Yi=class extends wr{constructor(t){super(t),this.uuid=$n(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new wr().fromJSON(s))}return this}},Zx={triangulate:function(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=Ju(i,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,h,u,p,d,c;if(n&&(r=ty(i,t,r,e)),i.length>80*e){a=h=i[0],l=u=i[1];for(let g=e;g<s;g+=e)p=i[g],d=i[g+1],p<a&&(a=p),d<l&&(l=d),p>h&&(h=p),d>u&&(u=d);c=Math.max(h-a,u-l),c=c!==0?32767/c:0}return Tr(r,o,e,a,l,c,0),o}};function Ju(i,t,e,n,s){let r,o;if(s===uy(i,t,e,n)>0)for(r=t;r<e;r+=n)o=Mu(r,i[r],i[r+1],o);else for(r=e-n;r>=t;r-=n)o=Mu(r,i[r],i[r+1],o);return o&&da(o,o.next)&&(Rr(o),o=o.next),o}function Zi(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(da(e,e.next)||Le(e.prev,e,e.next)===0)){if(Rr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Tr(i,t,e,n,s,r,o){if(!i)return;!o&&r&&ry(i,n,s,r);let a=i,l,h;for(;i.prev!==i.next;){if(l=i.prev,h=i.next,r?Kx(i,n,s,r):Jx(i)){t.push(l.i/e|0),t.push(i.i/e|0),t.push(h.i/e|0),Rr(i),i=h.next,a=h.next;continue}if(i=h,i===a){o?o===1?(i=jx(Zi(i),t,e),Tr(i,t,e,n,s,r,2)):o===2&&Qx(i,t,e,n,s,r):Tr(Zi(i),t,e,n,s,r,1);break}}}function Jx(i){let t=i.prev,e=i,n=i.next;if(Le(t,e,n)>=0)return!1;let s=t.x,r=e.x,o=n.x,a=t.y,l=e.y,h=n.y,u=s<r?s<o?s:o:r<o?r:o,p=a<l?a<h?a:h:l<h?l:h,d=s>r?s>o?s:o:r>o?r:o,c=a>l?a>h?a:h:l>h?l:h,g=n.next;for(;g!==t;){if(g.x>=u&&g.x<=d&&g.y>=p&&g.y<=c&&Ts(s,a,r,l,o,h,g.x,g.y)&&Le(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Kx(i,t,e,n){let s=i.prev,r=i,o=i.next;if(Le(s,r,o)>=0)return!1;let a=s.x,l=r.x,h=o.x,u=s.y,p=r.y,d=o.y,c=a<l?a<h?a:h:l<h?l:h,g=u<p?u<d?u:d:p<d?p:d,M=a>l?a>h?a:h:l>h?l:h,x=u>p?u>d?u:d:p>d?p:d,f=xc(c,g,t,e,n),b=xc(M,x,t,e,n),_=i.prevZ,v=i.nextZ;for(;_&&_.z>=f&&v&&v.z<=b;){if(_.x>=c&&_.x<=M&&_.y>=g&&_.y<=x&&_!==s&&_!==o&&Ts(a,u,l,p,h,d,_.x,_.y)&&Le(_.prev,_,_.next)>=0||(_=_.prevZ,v.x>=c&&v.x<=M&&v.y>=g&&v.y<=x&&v!==s&&v!==o&&Ts(a,u,l,p,h,d,v.x,v.y)&&Le(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;_&&_.z>=f;){if(_.x>=c&&_.x<=M&&_.y>=g&&_.y<=x&&_!==s&&_!==o&&Ts(a,u,l,p,h,d,_.x,_.y)&&Le(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;v&&v.z<=b;){if(v.x>=c&&v.x<=M&&v.y>=g&&v.y<=x&&v!==s&&v!==o&&Ts(a,u,l,p,h,d,v.x,v.y)&&Le(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function jx(i,t,e){let n=i;do{let s=n.prev,r=n.next.next;!da(s,r)&&Ku(s,n,n.next,r)&&Ar(s,r)&&Ar(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),Rr(n),Rr(n.next),n=i=r),n=n.next}while(n!==i);return Zi(n)}function Qx(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&ly(o,a)){let l=ju(o,a);o=Zi(o,o.next),l=Zi(l,l.next),Tr(o,t,e,n,s,r,0),Tr(l,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function ty(i,t,e,n){let s=[],r,o,a,l,h;for(r=0,o=t.length;r<o;r++)a=t[r]*n,l=r<o-1?t[r+1]*n:i.length,h=Ju(i,a,l,n,!1),h===h.next&&(h.steiner=!0),s.push(ay(h));for(s.sort(ey),r=0;r<s.length;r++)e=ny(s[r],e);return e}function ey(i,t){return i.x-t.x}function ny(i,t){let e=iy(i,t);if(!e)return t;let n=ju(e,i);return Zi(n,n.next),Zi(e,e.next)}function iy(i,t){let e=t,n=-1/0,s,r=i.x,o=i.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){let d=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=r&&d>n&&(n=d,s=e.x<e.next.x?e:e.next,d===r))return s}e=e.next}while(e!==t);if(!s)return null;let a=s,l=s.x,h=s.y,u=1/0,p;e=s;do r>=e.x&&e.x>=l&&r!==e.x&&Ts(o<h?r:n,o,l,h,o<h?n:r,o,e.x,e.y)&&(p=Math.abs(o-e.y)/(r-e.x),Ar(e,i)&&(p<u||p===u&&(e.x>s.x||e.x===s.x&&sy(s,e)))&&(s=e,u=p)),e=e.next;while(e!==a);return s}function sy(i,t){return Le(i.prev,i,t.prev)<0&&Le(t.next,i,i.next)<0}function ry(i,t,e,n){let s=i;do s.z===0&&(s.z=xc(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,oy(s)}function oy(i){let t,e,n,s,r,o,a,l,h=1;do{for(e=i,i=null,r=null,o=0;e;){for(o++,n=e,a=0,t=0;t<h&&(a++,n=n.nextZ,!!n);t++);for(l=h;a>0||l>0&&n;)a!==0&&(l===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,a--):(s=n,n=n.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,h*=2}while(o>1);return i}function xc(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function ay(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Ts(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function ly(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!cy(i,t)&&(Ar(i,t)&&Ar(t,i)&&hy(i,t)&&(Le(i.prev,i,t.prev)||Le(i,t.prev,t))||da(i,t)&&Le(i.prev,i,i.next)>0&&Le(t.prev,t,t.next)>0)}function Le(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function da(i,t){return i.x===t.x&&i.y===t.y}function Ku(i,t,e,n){let s=_o(Le(i,t,e)),r=_o(Le(i,t,n)),o=_o(Le(e,n,i)),a=_o(Le(e,n,t));return!!(s!==r&&o!==a||s===0&&vo(i,e,t)||r===0&&vo(i,n,t)||o===0&&vo(e,i,n)||a===0&&vo(e,t,n))}function vo(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function _o(i){return i>0?1:i<0?-1:0}function cy(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Ku(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Ar(i,t){return Le(i.prev,i,i.next)<0?Le(i,t,i.next)>=0&&Le(i,i.prev,t)>=0:Le(i,t,i.prev)<0||Le(i,i.next,t)<0}function hy(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function ju(i,t){let e=new yc(i.i,i.x,i.y),n=new yc(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Mu(i,t,e,n){let s=new yc(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Rr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function yc(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function uy(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var Ti=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];bu(t),Su(n,t);let o=t.length;e.forEach(bu);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,Su(n,e[l]);let a=Zx.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function bu(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Su(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var ta=class i extends be{constructor(t=new Yi([new Ct(.5,.5),new Ct(-.5,.5),new Ct(-.5,-.5),new Ct(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let a=0,l=t.length;a<l;a++){let h=t[a];o(h)}this.setAttribute("position",new ie(s,3)),this.setAttribute("uv",new ie(r,2)),this.computeVertexNormals();function o(a){let l=[],h=e.curveSegments!==void 0?e.curveSegments:12,u=e.steps!==void 0?e.steps:1,p=e.depth!==void 0?e.depth:1,d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,c=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:c-.1,M=e.bevelOffset!==void 0?e.bevelOffset:0,x=e.bevelSegments!==void 0?e.bevelSegments:3,f=e.extrudePath,b=e.UVGenerator!==void 0?e.UVGenerator:dy,_,v=!1,U,P,T,A;f&&(_=f.getSpacedPoints(u),v=!0,d=!1,U=f.computeFrenetFrames(u,!1),P=new $,T=new $,A=new $),d||(x=0,c=0,g=0,M=0);let y=a.extractPoints(h),m=y.shape,S=y.holes;if(!Ti.isClockWise(m)){m=m.reverse();for(let lt=0,pt=S.length;lt<pt;lt++){let X=S[lt];Ti.isClockWise(X)&&(S[lt]=X.reverse())}}let I=Ti.triangulateShape(m,S),N=m;for(let lt=0,pt=S.length;lt<pt;lt++){let X=S[lt];m=m.concat(X)}function q(lt,pt,X){return pt||console.error("THREE.ExtrudeGeometry: vec does not exist"),lt.clone().addScaledVector(pt,X)}let R=m.length,H=I.length;function G(lt,pt,X){let Et,Mt,et,Rt=lt.x-pt.x,Vt=lt.y-pt.y,Nt=X.x-lt.x,B=X.y-lt.y,D=Rt*Rt+Vt*Vt,ft=Rt*B-Vt*Nt;if(Math.abs(ft)>Number.EPSILON){let it=Math.sqrt(D),rt=Math.sqrt(Nt*Nt+B*B),at=pt.x-Vt/it,_t=pt.y+Rt/it,mt=X.x-B/rt,It=X.y+Nt/rt,Pt=((mt-at)*B-(It-_t)*Nt)/(Rt*B-Vt*Nt);Et=at+Rt*Pt-lt.x,Mt=_t+Vt*Pt-lt.y;let bt=Et*Et+Mt*Mt;if(bt<=2)return new Ct(Et,Mt);et=Math.sqrt(bt/2)}else{let it=!1;Rt>Number.EPSILON?Nt>Number.EPSILON&&(it=!0):Rt<-Number.EPSILON?Nt<-Number.EPSILON&&(it=!0):Math.sign(Vt)===Math.sign(B)&&(it=!0),it?(Et=-Vt,Mt=Rt,et=Math.sqrt(D)):(Et=Rt,Mt=Vt,et=Math.sqrt(D/2))}return new Ct(Et/et,Mt/et)}let nt=[];for(let lt=0,pt=N.length,X=pt-1,Et=lt+1;lt<pt;lt++,X++,Et++)X===pt&&(X=0),Et===pt&&(Et=0),nt[lt]=G(N[lt],N[X],N[Et]);let st=[],z,St=nt.concat();for(let lt=0,pt=S.length;lt<pt;lt++){let X=S[lt];z=[];for(let Et=0,Mt=X.length,et=Mt-1,Rt=Et+1;Et<Mt;Et++,et++,Rt++)et===Mt&&(et=0),Rt===Mt&&(Rt=0),z[Et]=G(X[Et],X[et],X[Rt]);st.push(z),St=St.concat(z)}for(let lt=0;lt<x;lt++){let pt=lt/x,X=c*Math.cos(pt*Math.PI/2),Et=g*Math.sin(pt*Math.PI/2)+M;for(let Mt=0,et=N.length;Mt<et;Mt++){let Rt=q(N[Mt],nt[Mt],Et);Z(Rt.x,Rt.y,-X)}for(let Mt=0,et=S.length;Mt<et;Mt++){let Rt=S[Mt];z=st[Mt];for(let Vt=0,Nt=Rt.length;Vt<Nt;Vt++){let B=q(Rt[Vt],z[Vt],Et);Z(B.x,B.y,-X)}}}let K=g+M;for(let lt=0;lt<R;lt++){let pt=d?q(m[lt],St[lt],K):m[lt];v?(T.copy(U.normals[0]).multiplyScalar(pt.x),P.copy(U.binormals[0]).multiplyScalar(pt.y),A.copy(_[0]).add(T).add(P),Z(A.x,A.y,A.z)):Z(pt.x,pt.y,0)}for(let lt=1;lt<=u;lt++)for(let pt=0;pt<R;pt++){let X=d?q(m[pt],St[pt],K):m[pt];v?(T.copy(U.normals[lt]).multiplyScalar(X.x),P.copy(U.binormals[lt]).multiplyScalar(X.y),A.copy(_[lt]).add(T).add(P),Z(A.x,A.y,A.z)):Z(X.x,X.y,p/u*lt)}for(let lt=x-1;lt>=0;lt--){let pt=lt/x,X=c*Math.cos(pt*Math.PI/2),Et=g*Math.sin(pt*Math.PI/2)+M;for(let Mt=0,et=N.length;Mt<et;Mt++){let Rt=q(N[Mt],nt[Mt],Et);Z(Rt.x,Rt.y,p+X)}for(let Mt=0,et=S.length;Mt<et;Mt++){let Rt=S[Mt];z=st[Mt];for(let Vt=0,Nt=Rt.length;Vt<Nt;Vt++){let B=q(Rt[Vt],z[Vt],Et);v?Z(B.x,B.y+_[u-1].y,_[u-1].x+X):Z(B.x,B.y,p+X)}}}Y(),W();function Y(){let lt=s.length/3;if(d){let pt=0,X=R*pt;for(let Et=0;Et<H;Et++){let Mt=I[Et];ot(Mt[2]+X,Mt[1]+X,Mt[0]+X)}pt=u+x*2,X=R*pt;for(let Et=0;Et<H;Et++){let Mt=I[Et];ot(Mt[0]+X,Mt[1]+X,Mt[2]+X)}}else{for(let pt=0;pt<H;pt++){let X=I[pt];ot(X[2],X[1],X[0])}for(let pt=0;pt<H;pt++){let X=I[pt];ot(X[0]+R*u,X[1]+R*u,X[2]+R*u)}}n.addGroup(lt,s.length/3-lt,0)}function W(){let lt=s.length/3,pt=0;V(N,pt),pt+=N.length;for(let X=0,Et=S.length;X<Et;X++){let Mt=S[X];V(Mt,pt),pt+=Mt.length}n.addGroup(lt,s.length/3-lt,1)}function V(lt,pt){let X=lt.length;for(;--X>=0;){let Et=X,Mt=X-1;Mt<0&&(Mt=lt.length-1);for(let et=0,Rt=u+x*2;et<Rt;et++){let Vt=R*et,Nt=R*(et+1),B=pt+Et+Vt,D=pt+Mt+Vt,ft=pt+Mt+Nt,it=pt+Et+Nt;gt(B,D,ft,it)}}}function Z(lt,pt,X){l.push(lt),l.push(pt),l.push(X)}function ot(lt,pt,X){Tt(lt),Tt(pt),Tt(X);let Et=s.length/3,Mt=b.generateTopUV(n,s,Et-3,Et-2,Et-1);At(Mt[0]),At(Mt[1]),At(Mt[2])}function gt(lt,pt,X,Et){Tt(lt),Tt(pt),Tt(Et),Tt(pt),Tt(X),Tt(Et);let Mt=s.length/3,et=b.generateSideWallUV(n,s,Mt-6,Mt-3,Mt-2,Mt-1);At(et[0]),At(et[1]),At(et[3]),At(et[1]),At(et[2]),At(et[3])}function Tt(lt){s.push(l[lt*3+0]),s.push(l[lt*3+1]),s.push(l[lt*3+2])}function At(lt){r.push(lt.x),r.push(lt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return fy(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];n.push(a)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Qo[s.type]().fromJSON(s)),new i(n,t.options)}},dy={generateTopUV:function(i,t,e,n,s){let r=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],h=t[s*3],u=t[s*3+1];return[new Ct(r,o),new Ct(a,l),new Ct(h,u)]},generateSideWallUV:function(i,t,e,n,s,r){let o=t[e*3],a=t[e*3+1],l=t[e*3+2],h=t[n*3],u=t[n*3+1],p=t[n*3+2],d=t[s*3],c=t[s*3+1],g=t[s*3+2],M=t[r*3],x=t[r*3+1],f=t[r*3+2];return Math.abs(a-u)<Math.abs(o-h)?[new Ct(o,1-l),new Ct(h,1-p),new Ct(d,1-g),new Ct(M,1-f)]:[new Ct(a,1-l),new Ct(u,1-p),new Ct(c,1-g),new Ct(x,1-f)]}};function fy(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var en=class i extends gc{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var ea=class i extends be{constructor(t=.5,e=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);let a=[],l=[],h=[],u=[],p=t,d=(e-t)/s,c=new $,g=new Ct;for(let M=0;M<=s;M++){for(let x=0;x<=n;x++){let f=r+x/n*o;c.x=p*Math.cos(f),c.y=p*Math.sin(f),l.push(c.x,c.y,c.z),h.push(0,0,1),g.x=(c.x/e+1)/2,g.y=(c.y/e+1)/2,u.push(g.x,g.y)}p+=d}for(let M=0;M<s;M++){let x=M*(n+1);for(let f=0;f<n;f++){let b=f+x,_=b,v=b+n+1,U=b+n+2,P=b+1;a.push(_,v,P),a.push(v,U,P)}}this.setIndex(a),this.setAttribute("position",new ie(l,3)),this.setAttribute("normal",new ie(h,3)),this.setAttribute("uv",new ie(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},na=class i extends be{constructor(t=new Yi([new Ct(0,.5),new Ct(-.5,-.5),new Ct(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let n=[],s=[],r=[],o=[],a=0,l=0;if(Array.isArray(t)===!1)h(t);else for(let u=0;u<t.length;u++)h(t[u]),this.addGroup(a,l,u),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new ie(s,3)),this.setAttribute("normal",new ie(r,3)),this.setAttribute("uv",new ie(o,2));function h(u){let p=s.length/3,d=u.extractPoints(e),c=d.shape,g=d.holes;Ti.isClockWise(c)===!1&&(c=c.reverse());for(let x=0,f=g.length;x<f;x++){let b=g[x];Ti.isClockWise(b)===!0&&(g[x]=b.reverse())}let M=Ti.triangulateShape(c,g);for(let x=0,f=g.length;x<f;x++){let b=g[x];c=c.concat(b)}for(let x=0,f=c.length;x<f;x++){let b=c[x];s.push(b.x,b.y,0),r.push(0,0,1),o.push(b.x,b.y)}for(let x=0,f=M.length;x<f;x++){let b=M[x],_=b[0]+p,v=b[1]+p,U=b[2]+p;n.push(_,v,U),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return py(e,t)}static fromJSON(t,e){let n=[];for(let s=0,r=t.shapes.length;s<r;s++){let o=e[t.shapes[s]];n.push(o)}return new i(n,t.curveSegments)}};function py(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){let s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}var ve=class i extends be{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),h=0,u=[],p=new $,d=new $,c=[],g=[],M=[],x=[];for(let f=0;f<=n;f++){let b=[],_=f/n,v=0;f===0&&o===0?v=.5/e:f===n&&l===Math.PI&&(v=-.5/e);for(let U=0;U<=e;U++){let P=U/e;p.x=-t*Math.cos(s+P*r)*Math.sin(o+_*a),p.y=t*Math.cos(o+_*a),p.z=t*Math.sin(s+P*r)*Math.sin(o+_*a),g.push(p.x,p.y,p.z),d.copy(p).normalize(),M.push(d.x,d.y,d.z),x.push(P+v,1-_),b.push(h++)}u.push(b)}for(let f=0;f<n;f++)for(let b=0;b<e;b++){let _=u[f][b+1],v=u[f][b],U=u[f+1][b],P=u[f+1][b+1];(f!==0||o>0)&&c.push(_,v,P),(f!==n-1||l<Math.PI)&&c.push(v,U,P)}this.setIndex(c),this.setAttribute("position",new ie(g,3)),this.setAttribute("normal",new ie(M,3)),this.setAttribute("uv",new ie(x,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var cn=class i extends be{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let o=[],a=[],l=[],h=[],u=new $,p=new $,d=new $;for(let c=0;c<=n;c++)for(let g=0;g<=s;g++){let M=g/s*r,x=c/n*Math.PI*2;p.x=(t+e*Math.cos(x))*Math.cos(M),p.y=(t+e*Math.cos(x))*Math.sin(M),p.z=e*Math.sin(x),a.push(p.x,p.y,p.z),u.x=t*Math.cos(M),u.y=t*Math.sin(M),d.subVectors(p,u).normalize(),l.push(d.x,d.y,d.z),h.push(g/s),h.push(c/n)}for(let c=1;c<=n;c++)for(let g=1;g<=s;g++){let M=(s+1)*c+g-1,x=(s+1)*(c-1)+g-1,f=(s+1)*(c-1)+g,b=(s+1)*c+g;o.push(M,x,b),o.push(x,f,b)}this.setIndex(o),this.setAttribute("position",new ie(a,3)),this.setAttribute("normal",new ie(l,3)),this.setAttribute("uv",new ie(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var ia=class i extends be{constructor(t=new Ko(new $(-1,-1,0),new $(-1,1,0),new $(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};let o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new $,l=new $,h=new Ct,u=new $,p=[],d=[],c=[],g=[];M(),this.setIndex(g),this.setAttribute("position",new ie(p,3)),this.setAttribute("normal",new ie(d,3)),this.setAttribute("uv",new ie(c,2));function M(){for(let _=0;_<e;_++)x(_);x(r===!1?e:0),b(),f()}function x(_){u=t.getPointAt(_/e,u);let v=o.normals[_],U=o.binormals[_];for(let P=0;P<=s;P++){let T=P/s*Math.PI*2,A=Math.sin(T),y=-Math.cos(T);l.x=y*v.x+A*U.x,l.y=y*v.y+A*U.y,l.z=y*v.z+A*U.z,l.normalize(),d.push(l.x,l.y,l.z),a.x=u.x+n*l.x,a.y=u.y+n*l.y,a.z=u.z+n*l.z,p.push(a.x,a.y,a.z)}}function f(){for(let _=1;_<=e;_++)for(let v=1;v<=s;v++){let U=(s+1)*(_-1)+(v-1),P=(s+1)*_+(v-1),T=(s+1)*_+v,A=(s+1)*(_-1)+v;g.push(U,P,A),g.push(P,T,A)}}function b(){for(let _=0;_<=e;_++)for(let v=0;v<=s;v++)h.x=_/e,h.y=v/s,c.push(h.x,h.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new i(new Qo[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};var sa=class extends oi{static get type(){return"MeshToonMaterial"}constructor(t){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.color=new Kt(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Kt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ou,this.normalScale=new Ct(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};function Mo(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function my(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var zs=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},vc=class extends zs{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:gh,endingEnd:gh}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case xh:r=t,a=2*e-n;break;case yh:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case xh:o=t,l=2*n-e;break;case yh:o=1,l=n+s[1]-s[0];break;default:o=t-1,l=e}let h=(n-e)*.5,u=this.valueSize;this._weightPrev=h/(e-a),this._weightNext=h/(l-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,h=l-a,u=this._offsetPrev,p=this._offsetNext,d=this._weightPrev,c=this._weightNext,g=(n-e)/(s-e),M=g*g,x=M*g,f=-d*x+2*d*M-d*g,b=(1+d)*x+(-1.5-2*d)*M+(-.5+d)*g+1,_=(-1-c)*x+(1.5+c)*M+.5*g,v=c*x-c*M;for(let U=0;U!==a;++U)r[U]=f*o[u+U]+b*o[h+U]+_*o[l+U]+v*o[p+U];return r}},_c=class extends zs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,h=l-a,u=(n-e)/(s-e),p=1-u;for(let d=0;d!==a;++d)r[d]=o[h+d]*p+o[l+d]*u;return r}},Mc=class extends zs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Un=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Mo(e,this.TimeBufferType),this.values=Mo(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Mo(t.times,Array),values:Mo(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Mc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new _c(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new vc(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Ao:e=this.InterpolantFactoryMethodDiscrete;break;case ql:e=this.InterpolantFactoryMethodLinear;break;case Ia:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ao;case this.InterpolantFactoryMethodLinear:return ql;case this.InterpolantFactoryMethodSmooth:return Ia}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&my(s))for(let a=0,l=s.length;a!==l;++a){let h=s[a];if(isNaN(h)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,h),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Ia,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,h=t[a],u=t[a+1];if(h!==u&&(a!==1||h!==t[0]))if(s)l=!0;else{let p=a*n,d=p-n,c=p+n;for(let g=0;g!==n;++g){let M=e[p+g];if(M!==e[d+g]||M!==e[c+g]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let p=a*n,d=o*n;for(let c=0;c!==n;++c)e[d+c]=e[p+c]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,h=0;h!==n;++h)e[l+h]=e[a+h];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};Un.prototype.TimeBufferType=Float32Array;Un.prototype.ValueBufferType=Float32Array;Un.prototype.DefaultInterpolation=ql;var Ji=class extends Un{constructor(t,e,n){super(t,e,n)}};Ji.prototype.ValueTypeName="bool";Ji.prototype.ValueBufferType=Array;Ji.prototype.DefaultInterpolation=Ao;Ji.prototype.InterpolantFactoryMethodLinear=void 0;Ji.prototype.InterpolantFactoryMethodSmooth=void 0;var bc=class extends Un{};bc.prototype.ValueTypeName="color";var Sc=class extends Un{};Sc.prototype.ValueTypeName="number";var wc=class extends zs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(s-e),h=t*a;for(let u=h+a;h!==u;h+=4)Wn.slerpFlat(r,0,o,h-a,o,h,l);return r}},ra=class extends Un{InterpolantFactoryMethodLinear(t){return new wc(this.times,this.values,this.getValueSize(),t)}};ra.prototype.ValueTypeName="quaternion";ra.prototype.InterpolantFactoryMethodSmooth=void 0;var Ki=class extends Un{constructor(t,e,n){super(t,e,n)}};Ki.prototype.ValueTypeName="string";Ki.prototype.ValueBufferType=Array;Ki.prototype.DefaultInterpolation=Ao;Ki.prototype.InterpolantFactoryMethodLinear=void 0;Ki.prototype.InterpolantFactoryMethodSmooth=void 0;var Ec=class extends Un{};Ec.prototype.ValueTypeName="vector";var Tc=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,l,h=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,p){return h.push(u,p),this},this.removeHandler=function(u){let p=h.indexOf(u);return p!==-1&&h.splice(p,2),this},this.getHandler=function(u){for(let p=0,d=h.length;p<d;p+=2){let c=h[p],g=h[p+1];if(c.global&&(c.lastIndex=0),c.test(u))return g}return null}}},gy=new Tc,Ac=class{constructor(t){this.manager=t!==void 0?t:gy,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};Ac.DEFAULT_MATERIAL_NAME="__DEFAULT";var oa=class extends Pe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Kt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},aa=class extends oa{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Pe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Kt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},ll=new pe,wu=new $,Eu=new $,Rc=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ct(512,512),this.map=null,this.mapPass=null,this.matrix=new pe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new xr,this._frameExtents=new Ct(1,1),this._viewportCount=1,this._viewports=[new ke(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;wu.setFromMatrixPosition(t.matrixWorld),e.position.copy(wu),Eu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Eu),e.updateMatrixWorld(),ll.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ll),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ll)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var Cc=class extends Rc{constructor(){super(new Oo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},la=class extends oa{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Pe.DEFAULT_UP),this.updateMatrix(),this.target=new Pe,this.shadow=new Cc}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var $c="\\[\\]\\.:\\/",xy=new RegExp("["+$c+"]","g"),Wc="[^"+$c+"]",yy="[^"+$c.replace("\\.","")+"]",vy=/((?:WC+[\/:])*)/.source.replace("WC",Wc),_y=/(WCOD+)?/.source.replace("WCOD",yy),My=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Wc),by=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Wc),Sy=new RegExp("^"+vy+_y+My+by+"$"),wy=["material","materials","bones","map"],Ic=class{constructor(t,e,n){let s=n||Ce.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Ce=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(xy,"")}static parseTrackName(t){let e=Sy.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);wy.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let h=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===h){h=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(h!==void 0){if(t[h]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[h]}}let o=t[s];if(o===void 0){let h=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+h+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ce.Composite=Ic;Ce.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ce.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ce.prototype.GetterByBindingType=[Ce.prototype._getValue_direct,Ce.prototype._getValue_array,Ce.prototype._getValue_arrayElement,Ce.prototype._getValue_toArray];Ce.prototype.SetterByBindingTypeAndVersioning=[[Ce.prototype._setValue_direct,Ce.prototype._setValue_direct_setNeedsUpdate,Ce.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ce.prototype._setValue_array,Ce.prototype._setValue_array_setNeedsUpdate,Ce.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ce.prototype._setValue_arrayElement,Ce.prototype._setValue_arrayElement_setNeedsUpdate,Ce.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ce.prototype._setValue_fromArray,Ce.prototype._setValue_fromArray_setNeedsUpdate,Ce.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Sv=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Pc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Pc);var Ey=2.3,Ue=7.2,fa=.16,Pi=(i,t,e)=>{let n=Math.max(0,Math.min(1,(e-i)/(t-i)));return n*n*(3-2*n)};function Qu(i,t,e){let n=i.points,s=n.length-1,r=i.lengthM/s,o=K=>{let Y=Math.max(0,Math.min(s,K/r)),W=Math.min(s-1,Math.floor(Y)),V=Y-W,Z=n[Math.max(0,W-1)],ot=n[W],gt=n[W+1],Tt=n[Math.min(s,W+2)],At=lt=>.5*(2*ot[lt]+(-Z[lt]+gt[lt])*V+(2*Z[lt]-5*ot[lt]+4*gt[lt]-Tt[lt])*V*V+(-Z[lt]+3*ot[lt]-3*gt[lt]+Tt[lt])*V*V*V);return[At(0),At(2),ot[1]+(gt[1]-ot[1])*V]},a=K=>{if(K<=i.lengthM)return o(K);let Y=o(i.lengthM-20),W=o(i.lengthM),V=(K-i.lengthM)/20;return[W[0]+(W[0]-Y[0])*V,W[1]+(W[1]-Y[1])*V,W[2]]},l=2700,h=2585,u=i.overlaps.filter(([K,Y])=>Y>K).sort((K,Y)=>K[1]-Y[1]),p=K=>{for(let V=0;V<u.length-1;V++){let[Z,ot]=u[V],[gt,Tt]=u[V+1];if(K<=Tt)return Z+(K-ot)*(gt-Z)/(Tt-ot)}let[Y,W]=u.at(-1);return Y+(K-W)},d=[];for(let K=0;K<=l;K+=2)d.push([K,...o(K)]);let c=2600,g=4900,M=[];for(let K=c;K<=g;K+=10){let Y=o(K),W=p(K),V=W,Z=1e9;for(let ot of d){if(Math.abs(ot[0]-W)>60)continue;let gt=(ot[1]-Y[0])**2+(ot[2]-Y[1])**2;gt<Z&&(Z=gt,V=ot[0])}M.push(V)}let x=M.map((K,Y)=>{let W=0,V=0;for(let Z=-3;Z<=3;Z++){let ot=Y+Z;ot>=0&&ot<M.length&&(W+=M[ot],V++)}return W/V});for(let K=1;K<x.length;K++)x[K]=Math.max(x[K],x[K-1]+.5);let f=K=>{let Y=(K-c)/10,W=Math.max(0,Math.min(x.length-2,Math.floor(Y))),V=Y-W;return x[W]+(x[W+1]-x[W])*V},b={};for(let K of e?.runners||[])K.diversions&&(b[K.id]=K.diversions.map(Y=>{let W=Y.path,V=[0];for(let Z=1;Z<W.length;Z++)V.push(V[Z-1]+Math.hypot(W[Z][0]-W[Z-1][0],W[Z][1]-W[Z-1][1]));return{...Y,cum:V,len:V.at(-1)}}));let _=(K,Y)=>{let W=Math.max(0,Math.min(1,(Y-K.fromM)/(K.toM-K.fromM)))*K.len,V=0;for(;V<K.cum.length-2&&K.cum[V+1]<W;)V++;let Z=(W-K.cum[V])/Math.max(1e-6,K.cum[V+1]-K.cum[V]);return[K.path[V][0]+(K.path[V+1][0]-K.path[V][0])*Z,K.path[V][1]+(K.path[V+1][1]-K.path[V][1])*Z]};function v(K){if(K<c-60){let Z=a(K);return[Z[0],Z[1]]}let Y=a(K);if(K>=g+40)return[Y[0],Y[1]];let W=Pi(c-60,c+60,K)*(1-Pi(g-60,g,K));if(W<=0)return[Y[0],Y[1]];let V=o(Math.min(l,f(Math.max(c,Math.min(g,K)))));return[Y[0]+(V[0]-Y[0])*W,Y[1]+(V[1]-Y[1])*W]}function U(K,Y){let W=v(K),V=Y&&b[Y];if(V){for(let Z of V)if(K>Z.fromM&&K<Z.toM){let ot=Pi(Z.fromM,Z.fromM+30,K)*(1-Pi(Z.toM-30,Z.toM,K)),gt=_(Z,K);return W=[W[0]+(gt[0]-W[0])*ot,W[1]+(gt[1]-W[1])*ot],{x:W[0],z:W[1],div:ot,divInfo:Z}}}return{x:W[0],z:W[1],div:0,divInfo:null}}let[P,T,A,y]=t.bounds,m={x0:P-60,z0:T-60,cell:5};m.nx=Math.ceil((A+60-m.x0)/m.cell)+1,m.nz=Math.ceil((y+60-m.z0)/m.cell)+1,m.h=new Float32Array(m.nx*m.nz);let S=[];for(let K=0;K<=s;K+=2)S.push(n[K]);let E=0;for(let K of S)E+=K[1];E/=S.length;let I=(K,Y)=>Math.sin(K*.011+1.3)*Math.cos(Y*.009-.4)*2.2+Math.sin(K*.027+Y*.019)*.9;for(let K=0;K<m.nz;K++)for(let Y=0;Y<m.nx;Y++){let W=m.x0+Y*m.cell,V=m.z0+K*m.cell,Z=0,ot=0,gt=1e9;for(let lt of S){let pt=(lt[0]-W)**2+(lt[2]-V)**2;pt<gt&&(gt=pt);let X=1/(pt+400),Et=X*X;Z+=Et,ot+=Et*lt[1]}let Tt=Pi(30,160,Math.sqrt(gt)),At=ot/Z*(1-Tt*.4)+E*Tt*.4+I(W,V)*Tt;m.h[K*m.nx+Y]=At*Ey}let N=t.features.filter(K=>K.closed&&["water","track","tennis","pitch"].includes(K.kind)&&K.pts.length>3);for(let K of N){let Y=li(K.pts),W=[];for(let ot=Math.max(0,Math.floor((Y[1]-12-m.z0)/m.cell));ot<=Math.min(m.nz-1,Math.ceil((Y[3]+12-m.z0)/m.cell));ot++)for(let gt=Math.max(0,Math.floor((Y[0]-12-m.x0)/m.cell));gt<=Math.min(m.nx-1,Math.ceil((Y[2]+12-m.x0)/m.cell));gt++){let Tt=m.x0+gt*m.cell,At=m.z0+ot*m.cell,lt=Ir(K.pts,Tt,At);lt<12&&W.push([ot*m.nx+gt,lt])}let V=0,Z=0;for(let[ot,gt]of W)gt<0&&(V+=m.h[ot],Z++);if(Z){V/=Z,K.kind==="water"&&(V=Math.min(...W.filter(ot=>ot[1]<0).map(ot=>m.h[ot[0]]))-.2),K._level=V;for(let[ot,gt]of W){let Tt=1-Pi(0,12,gt);m.h[ot]=m.h[ot]*(1-Tt)+V*Tt-(K.kind==="water"?1.6*(1-Pi(-6,0,gt)):0)}}}{for(let At=0;At<3;At++){let lt=new Float32Array(m.h);for(let pt=1;pt<m.nz-1;pt++)for(let X=1;X<m.nx-1;X++){let Et=pt*m.nx+X;lt[Et]=(m.h[Et]*4+m.h[Et-1]+m.h[Et+1]+m.h[Et-m.nx]+m.h[Et+m.nx])/8}m.h.set(lt)}let K=new Float32Array(m.nx*m.nz).fill(1e9),Y=new Float32Array(m.nx*m.nz),W=new Float32Array(m.nx*m.nz),V=(At,lt)=>m.h[lt*m.nx+At],Z=(At,lt)=>{let pt=Math.round((At-m.x0)/m.cell),X=Math.round((lt-m.z0)/m.cell);return V(Math.max(0,Math.min(m.nx-1,pt)),Math.max(0,Math.min(m.nz-1,X)))},ot=[[0,h],[2540,2690],[g-80,i.lengthM+45]],gt=[];for(let[At,lt]of ot)for(let pt=At;pt<=lt;pt+=2){let X=v(pt);gt.push([X[0],X[1],Z(X[0],X[1])])}for(let At=0;At<4;At++)for(let lt=1;lt<gt.length-1;lt++)gt[lt][2]=(gt[lt-1][2]+gt[lt][2]*2+gt[lt+1][2])/4;let Tt=Ue/2+7;for(let[At,lt,pt]of gt){let X=Math.floor((At-Tt-m.x0)/m.cell),Et=Math.ceil((At+Tt-m.x0)/m.cell),Mt=Math.floor((lt-Tt-m.z0)/m.cell),et=Math.ceil((lt+Tt-m.z0)/m.cell);for(let Rt=Math.max(0,Mt);Rt<=Math.min(m.nz-1,et);Rt++)for(let Vt=Math.max(0,X);Vt<=Math.min(m.nx-1,Et);Vt++){let Nt=Math.hypot(m.x0+Vt*m.cell-At,m.z0+Rt*m.cell-lt);if(Nt>Tt)continue;let B=Rt*m.nx+Vt,D=(1-Nt/Tt)**2;Y[B]+=D,W[B]+=D*pt,Nt<K[B]&&(K[B]=Nt)}}for(let At=0;At<K.length;At++)if(K[At]<Tt&&Y[At]>0){let lt=1-Pi(Ue/2+.5,Tt,K[At]);m.h[At]=m.h[At]*(1-lt)+W[At]/Y[At]*lt}m.pathSamples=gt}let q=N.filter(K=>K.kind==="water").sort((K,Y)=>Y.pts.length-K.pts.length)[0];function R(K,Y){let W=(K-m.x0)/m.cell,V=(Y-m.z0)/m.cell,Z=Math.max(0,Math.min(m.nx-2,Math.floor(W))),ot=Math.max(0,Math.min(m.nz-2,Math.floor(V))),gt=Math.max(0,Math.min(1,W-Z)),Tt=Math.max(0,Math.min(1,V-ot)),At=m.h[ot*m.nx+Z],lt=m.h[ot*m.nx+Z+1],pt=m.h[(ot+1)*m.nx+Z],X=m.h[(ot+1)*m.nx+Z+1];return gt+Tt<=1?At+(lt-At)*gt+(pt-At)*Tt:X+(pt-X)*(1-gt)+(lt-X)*(1-Tt)}let H=new $;function G(K,Y,W={}){let V=U(K,Y),Z=Math.max(0,K-4),ot=Z+8,gt=U(Z,Y),Tt=U(ot,Y),At=Tt.x-gt.x,lt=Tt.z-gt.z,pt=Math.hypot(At,lt)||1;return At/=pt,lt/=pt,W.x=V.x,W.z=V.z,W.y=R(V.x,V.z)+fa,W.tx=At,W.tz=lt,W.rx=-lt,W.rz=At,W.slope=(R(Tt.x,Tt.z)-R(gt.x,gt.z))/Math.max(1,pt),W.div=V.div,W.divInfo=V.divInfo,W}function nt(K,Y=25){let W=Math.max(0,K-Y),V=v(W),Z=v(W+2*Y),ot=Math.hypot(Z[0]-V[0],Z[1]-V[1])||1;return H.set((Z[0]-V[0])/ot,0,(Z[1]-V[1])/ot).clone()}let st=[{from:0,to:h,lift:0},{from:2540,to:2690,lift:.02},{from:g-80,to:i.lengthM+45,lift:.035}],z=i.lengthM;return{P:n,raw:o,rawExt:a,baseXZ:v,LAP1_END_DRAW:h,xzAt:U,sample:G,heading:nt,heightAt:R,terrain:m,ribbons:st,finishM:z,lake:q,flat:N,geoOf:K=>K>=c&&K<=g?f(K):K,diversions:b,LAP1_END:l,MAP_FROM:c,MAP_TO:g}}function li(i){let t=[1e9,1e9,-1e9,-1e9];for(let e of i)t[0]=Math.min(t[0],e[0]),t[1]=Math.min(t[1],e[1]),t[2]=Math.max(t[2],e[0]),t[3]=Math.max(t[3],e[1]);return t}function pa(i,t,e){let n=!1;for(let s=0,r=i.length-1;s<i.length;r=s++){let[o,a]=i[s],[l,h]=i[r];a>e!=h>e&&t<(l-o)*(e-a)/(h-a)+o&&(n=!n)}return n}function Ir(i,t,e){let n=1e9;for(let s=0,r=i.length-1;s<i.length;r=s++){let[o,a]=i[r],[l,h]=i[s],u=l-o,p=h-a,d=u*u+p*p||1,c=Math.max(0,Math.min(1,((t-o)*u+(e-a)*p)/d));n=Math.min(n,Math.hypot(t-o-u*c,e-a-p*c))}return pa(i,t,e)?-n:n}function gn(i,t=!1){let e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,l=new be,h=0;for(let u=0;u<i.length;++u){let p=i[u],d=0;if(e!==(p.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let c in p.attributes){if(!n.has(c))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+c+'" attribute exists among all geometries, or in none of them.'),null;r[c]===void 0&&(r[c]=[]),r[c].push(p.attributes[c]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==p.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let c in p.morphAttributes){if(!s.has(c))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[c]===void 0&&(o[c]=[]),o[c].push(p.morphAttributes[c])}if(t){let c;if(e)c=p.index.count;else if(p.attributes.position!==void 0)c=p.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(h,c,u),h+=c}}if(e){let u=0,p=[];for(let d=0;d<i.length;++d){let c=i[d].index;for(let g=0;g<c.count;++g)p.push(c.getX(g)+u);u+=i[d].attributes.position.count}l.setIndex(p)}for(let u in r){let p=td(r[u]);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,p)}for(let u in o){let p=o[u][0].length;if(p===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let d=0;d<p;++d){let c=[];for(let M=0;M<o[u].length;++M)c.push(o[u][M][d]);let g=td(c);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(g)}}return l}function td(i){let t,e,n,s=-1,r=0;for(let h=0;h<i.length;++h){let u=i[h];if(t===void 0&&(t=u.array.constructor),t!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=u.itemSize),e!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*e}let o=new t(r),a=new De(o,e,n),l=0;for(let h=0;h<i.length;++h){let u=i[h];if(u.isInterleavedBufferAttribute){let p=l/e;for(let d=0,c=u.count;d<c;d++)for(let g=0;g<e;g++){let M=u.getComponent(d,g);a.setComponent(d+p,g,M)}}else o.set(u.array,l);l+=u.count*e}return s!==void 0&&(a.gpuType=s),a}var Pr=new $;function En(i,t,e,n,s,r){let o=2*Math.PI*s/4,a=Math.max(r-2*s,0),l=Math.PI/4;Pr.copy(t),Pr[n]=0,Pr.normalize();let h=.5*o/(o+a),u=1-Pr.angleTo(i)/l;return Math.sign(Pr[e])===1?u*h:a/(o+a)+h+h*(1-u)}var ue=class extends Se{constructor(t=1,e=1,n=1,s=2,r=.1){if(s=s*2+1,r=Math.min(t/2,e/2,n/2,r),super(1,1,1,s,s,s),s===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let a=new $,l=new $,h=new $(t,e,n).divideScalar(2).subScalar(r),u=this.attributes.position.array,p=this.attributes.normal.array,d=this.attributes.uv.array,c=u.length/6,g=new $,M=.5/s;for(let x=0,f=0;x<u.length;x+=3,f+=2)switch(a.fromArray(u,x),l.copy(a),l.x-=Math.sign(l.x)*M,l.y-=Math.sign(l.y)*M,l.z-=Math.sign(l.z)*M,l.normalize(),u[x+0]=h.x*Math.sign(a.x)+l.x*r,u[x+1]=h.y*Math.sign(a.y)+l.y*r,u[x+2]=h.z*Math.sign(a.z)+l.z*r,p[x+0]=l.x,p[x+1]=l.y,p[x+2]=l.z,Math.floor(x/c)){case 0:g.set(1,0,0),d[f+0]=En(g,l,"z","y",r,n),d[f+1]=1-En(g,l,"y","z",r,e);break;case 1:g.set(-1,0,0),d[f+0]=1-En(g,l,"z","y",r,n),d[f+1]=1-En(g,l,"y","z",r,e);break;case 2:g.set(0,1,0),d[f+0]=1-En(g,l,"x","z",r,t),d[f+1]=En(g,l,"z","x",r,n);break;case 3:g.set(0,-1,0),d[f+0]=1-En(g,l,"x","z",r,t),d[f+1]=1-En(g,l,"z","x",r,n);break;case 4:g.set(0,0,1),d[f+0]=1-En(g,l,"x","y",r,t),d[f+1]=1-En(g,l,"y","x",r,e);break;case 5:g.set(0,0,-1),d[f+0]=En(g,l,"x","y",r,t),d[f+1]=1-En(g,l,"y","x",r,e);break}}};var Li=null;function Ty(){if(Li)return Li;let i=[118,172,228,255],t=new Uint8Array(i.length*4);return i.forEach((e,n)=>t.set([e,e,e,255],n*4)),Li=new _r(t,i.length,1,_n),Li.minFilter=Li.magFilter=an,Li.generateMipmaps=!1,Li.needsUpdate=!0,Li}var Lr=new Map;function xt(i,t={}){let e=typeof i=="number"||typeof i=="string"?`${i}|${JSON.stringify(t)}`:null;if(e&&!t.map&&Lr.has(e))return Lr.get(e);let n=new sa({color:new Kt(i??16777215),gradientMap:Ty(),...t});return e&&!t.map&&Lr.set(e,n),n}function ed(){for(let i of Lr.values())i.dispose();Lr.clear(),Dr.forEach(i=>i.dispose()),Dr.clear()}var Xc={uRes:{value:new Ct(1920,1080)}},Dr=new Map;function Ay(i=3,t=1709088,e=14){let n=`${i}|${t}|${e}`;if(Dr.has(n))return Dr.get(n);let s=new ln({uniforms:{...Hc.clone(Ot.fog),uRes:Xc.uRes,uWidth:{value:i},uRef:{value:e},uColor:{value:new Kt(t)}},vertexShader:`
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
      }`,side:Je,fog:!0});return Dr.set(n,s),s}function qc(i){if(i.getAttribute("onormal"))return i;i.getAttribute("normal")||i.computeVertexNormals();let t=i.getAttribute("position"),e=i.getAttribute("normal"),n=new Map,s=a=>`${Math.round(t.getX(a)*1e3)},${Math.round(t.getY(a)*1e3)},${Math.round(t.getZ(a)*1e3)}`,r=[];for(let a=0;a<t.count;a++){let l=s(a),h=n.get(l);h||(h=[0,0,0],n.set(l,h)),h[0]+=e.getX(a),h[1]+=e.getY(a),h[2]+=e.getZ(a),r.push(h)}let o=new Float32Array(t.count*3);for(let a=0;a<t.count;a++){let l=r[a],h=Math.hypot(l[0],l[1],l[2])||1;o[a*3]=l[0]/h,o[a*3+1]=l[1]/h,o[a*3+2]=l[2]/h}return i.setAttribute("onormal",new De(o,3)),i}function ji(i,t=3,e,n){qc(i.geometry);let s=Ay(t,e,n),r;return i.isInstancedMesh?(r=new mn(i.geometry,s,i.count),r.instanceMatrix=i.instanceMatrix,r.count=i.count,i.frustumCulled&&i.boundingSphere?(r.boundingSphere=i.boundingSphere,r.frustumCulled=!0):(r.frustumCulled=!1,i.frustumCulled=!1),i.userData.outline=r):(r=new Ie(i.geometry,s),r.frustumCulled=i.frustumCulled),r.castShadow=!1,r.receiveShadow=!1,r.userData.isOutline=!0,r.renderOrder=i.renderOrder,i.add(r),r}function xe(i,t,{cast:e=!0,receive:n=!0,ol:s=0,olColor:r,olRef:o}={}){let a=new Ie(i,t);return a.castShadow=e,a.receiveShadow=n,s&&ji(a,s,r,o),a}function nn(i,t,e,{repeat:n=!1,srgb:s=!0,aniso:r=8}={}){let o=document.createElement("canvas");o.width=i,o.height=t;let a=o.getContext("2d");e(a,i,t);let l=new Os(o);return s&&(l.colorSpace=Ye),n&&(l.wrapS=l.wrapT=Wi),l.anisotropy=r,l}var Yc='"Lilita One", "Arial Black", "Arial Rounded MT Bold", Impact, sans-serif',$t=Nn(20240817);function Nn(i){return()=>{i|=0,i=i+1831565813|0;let t=Math.imul(i^i>>>15,1|i);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function ci(i,t,e,n){let s=nn(i,t,e);return document.fonts&&document.fonts.load&&document.fonts.load('64px "Lilita One"').then(()=>{let r=s.image.getContext("2d");r.clearRect(0,0,i,t),e(r,i,t),s.needsUpdate=!0}).catch(()=>{}),n?.push(s),s}function Ke(i,t,e,n,s,r="#fff",o="#1a1420",a=.16,l="center"){i.font=`${s}px ${Yc}`,i.textAlign=l,i.textBaseline="middle",i.lineJoin="round",i.lineWidth=s*a,i.strokeStyle=o,i.strokeText(t,e,n),i.fillStyle=r,i.fillText(t,e,n)}function id(i,t,e){let{course:n,park:s,hasFunfair:r}=e,o=[],a=new re;i.add(a);let l=C=>(a.add(C),C),h=t.terrain,u=(h.nx-1)*h.cell,p=(h.nz-1)*h.cell,d=new Map,c=6,g=(C,L)=>`${Math.floor(C/c)},${Math.floor(L/c)}`,M=(C,L,Q)=>{let w=g(C,L),k=d.get(w);k||d.set(w,k=[]),k.push([C,L,Q])},x=(C,L,Q)=>{let w=Math.floor(C/c),k=Math.floor(L/c),O=Math.ceil((Q+30)/c);for(let j=-O;j<=O;j++)for(let ct=-O;ct<=O;ct++){let J=d.get(`${w+j},${k+ct}`);if(J){for(let[tt,dt,wt]of J)if((tt-C)**2+(dt-L)**2<(wt+Q)**2)return!1}}return!0},f=[];for(let C of t.ribbons)for(let L=C.from;L<=C.to;L+=3){let Q=t.baseXZ(L);f.push(Q),M(Q[0],Q[1],Ue/2+1.5)}for(let C in t.diversions)for(let L of t.diversions[C])for(let Q of L.path)M(Q[0],Q[1],4);let b=s.features.filter(C=>C.kind==="park").sort((C,L)=>L.pts.length-C.pts.length)[0].pts,_=(C,L)=>pa(b,C,L),U=s.features.filter(C=>C.closed&&["water","track","tennis","pitch","playground","building"].includes(C.kind)).map(C=>[li(C.pts),C]),P=(C,L,Q=2)=>U.some(([w,k])=>C>w[0]-Q&&C<w[2]+Q&&L>w[1]-Q&&L<w[3]+Q&&Ir(k.pts,C,L)<Q),T=1.7,A=nn(Math.round(u*T),Math.round(p*T),(C,L,Q)=>y(C,L,Q),{aniso:8});o.push(A);function y(C,L,Q){let w=J=>(J-h.x0)*T,k=J=>(J-h.z0)*T,O=(J,tt=!0)=>{C.beginPath(),J.forEach((dt,wt)=>wt?C.lineTo(w(dt[0]),k(dt[1])):C.moveTo(w(dt[0]),k(dt[1]))),tt&&C.closePath()};C.fillStyle="#d8d2c2",C.fillRect(0,0,L,Q);for(let J=0;J<9e3;J++)C.fillStyle=$t()<.5?"#cfc8b6":"#e2dccd",C.fillRect($t()*L,$t()*Q,3,3);O(b),C.fillStyle="#66cf45",C.fill(),C.save(),O(b),C.clip(),C.translate(L/2,Q/2),C.rotate(-.62);for(let J=-2e3;J<2e3;J+=2*14*T)C.fillStyle="rgba(255,255,140,0.10)",C.fillRect(J,-2500,14*T,5e3);C.setTransform(1,0,0,1,0,0);for(let J=0;J<26e3;J++){let tt=$t()*L,dt=$t()*Q;C.fillStyle=$t()<.6?"rgba(40,140,40,0.35)":"rgba(190,255,120,0.35)",C.fillRect(tt,dt,2+$t()*2,2+$t()*3)}C.restore();let j=(J,tt,dt)=>{for(let wt of s.features)wt.kind===J&&wt.closed&&(O(wt.pts),C.fillStyle=tt,C.fill(),dt&&(C.strokeStyle=dt,C.lineWidth=2,C.stroke()))};j("grass","#72d64e"),j("garden","#86dc5c"),j("wood","#3f9e3a"),j("scrub","#5cb544");for(let J of s.features)if(J.kind==="pitch"&&J.closed){C.save(),O(J.pts),C.clip(),C.fillStyle="#5ccc3f",C.fill();let tt=li(J.pts);for(let dt=tt[0];dt<tt[2];dt+=8)C.fillStyle="rgba(255,255,255,0.10)",C.fillRect(w(dt),k(tt[1]),4*T,(tt[3]-tt[1])*T);C.restore(),O(J.pts),C.strokeStyle="#ffffff",C.lineWidth=2.2,C.stroke()}j("playground","#ffa25a","#e07a35");for(let J of s.features)if(J.kind==="playground"&&J.closed){let tt=li(J.pts);for(let dt=0;dt<6;dt++)C.beginPath(),C.arc(w(tt[0]+$t()*(tt[2]-tt[0])),k(tt[1]+$t()*(tt[3]-tt[1])),3*T,0,7),C.fillStyle=["#ffd93b","#57c7ff","#ff6f91"][dt%3],C.fill()}for(let J of s.features)if(J.kind==="track"&&J.closed){C.save(),O(J.pts),C.clip(),C.fillStyle="#5ccc3f",C.fill();let tt=11*T;for(let dt=6;dt>=0;dt--){let wt=dt/6*tt;O(J.pts),C.lineJoin="round",C.strokeStyle="#ffffff",C.lineWidth=2*wt+2.4,C.stroke(),C.strokeStyle="#e2523a",C.lineWidth=Math.max(0,2*wt-2.4),dt>0&&C.stroke()}C.restore(),O(J.pts),C.strokeStyle="#ffffff",C.lineWidth=3,C.stroke()}for(let J of s.features)if(J.kind==="tennis"&&J.closed){O(J.pts),C.fillStyle="#3f9fd1",C.fill(),C.strokeStyle="#ffffff",C.lineWidth=2.5,C.stroke();let tt=nd(J.pts),dt=li(J.pts);C.save(),O(J.pts),C.clip(),C.strokeStyle="rgba(255,255,255,0.9)",C.lineWidth=1.5,C.beginPath(),C.moveTo(w(tt[0]),k(dt[1])),C.lineTo(w(tt[0]),k(dt[3])),C.stroke(),C.restore()}for(let J of s.features)J.kind==="water"&&J.closed&&(O(J.pts),C.strokeStyle="#f4efe0",C.lineWidth=3.4*T,C.lineJoin="round",C.stroke(),C.fillStyle="#2f8fe0",C.fill());for(let J of s.features)J.kind==="path"&&(O(J.pts,!1),C.lineCap="round",C.lineJoin="round",C.strokeStyle="#c9ad78",C.lineWidth=3.6*T,C.stroke());for(let J of s.features)J.kind==="path"&&(O(J.pts,!1),C.strokeStyle="#ecd8a6",C.lineWidth=2.6*T,C.stroke());let ct=J=>({primary:15,secondary:12,tertiary:11,residential:8,unclassified:8,service:5,trunk:16})[J.tags?.highway]||7;for(let J of s.features)J.kind==="road"&&(O(J.pts,J.closed),C.lineCap="round",C.lineJoin="round",C.strokeStyle="#ece6d6",C.lineWidth=(ct(J)+4)*T,C.stroke());for(let J of s.features)J.kind==="road"&&(O(J.pts,J.closed),C.strokeStyle="#7f8597",C.lineWidth=ct(J)*T,C.stroke());for(let J of s.features)J.kind==="road"&&ct(J)>=11&&(O(J.pts,!1),C.setLineDash([5*T,5*T]),C.strokeStyle="#f4f1e6",C.lineWidth=.5*T,C.stroke(),C.setLineDash([]));for(let J of s.features)J.kind==="rail"&&(O(J.pts,!1),C.strokeStyle="#9b8f84",C.lineWidth=5*T,C.stroke());for(let J of s.features)J.kind==="rail"&&(O(J.pts,!1),C.setLineDash([1,2]),C.strokeStyle="#5b4f46",C.lineWidth=3*T,C.stroke(),C.setLineDash([]),O(J.pts,!1),C.strokeStyle="#c9ccd6",C.lineWidth=.8,C.stroke());for(let J of s.features)J.kind==="building"&&J.closed&&(O(J.pts),C.fillStyle="#9c968a",C.fill());for(let J in t.diversions)for(let tt of t.diversions[J])C.beginPath(),tt.path.forEach((dt,wt)=>wt?C.lineTo(w(dt[0]),k(dt[1])):C.moveTo(w(dt[0]),k(dt[1]))),C.lineCap="round",C.lineJoin="round",C.strokeStyle="rgba(196,160,96,0.85)",C.lineWidth=4*T,C.stroke(),C.setLineDash([2*T,3*T]),C.strokeStyle="rgba(255,240,200,0.8)",C.lineWidth=.6*T,C.stroke(),C.setLineDash([])}{let C=h.nx*h.nz,L=new Float32Array(C*3),Q=new Float32Array(C*2);for(let wt=0;wt<h.nz;wt++)for(let Ft=0;Ft<h.nx;Ft++){let kt=wt*h.nx+Ft;L[kt*3]=h.x0+Ft*h.cell,L[kt*3+1]=h.h[kt],L[kt*3+2]=h.z0+wt*h.cell,Q[kt*2]=Ft/(h.nx-1),Q[kt*2+1]=1-wt/(h.nz-1)}let w=new Uint32Array((h.nx-1)*(h.nz-1)*6),k=0;for(let wt=0;wt<h.nz-1;wt++)for(let Ft=0;Ft<h.nx-1;Ft++){let kt=wt*h.nx+Ft,zt=kt+1,Gt=kt+h.nx,ae=Gt+1;w[k++]=kt,w[k++]=Gt,w[k++]=zt,w[k++]=zt,w[k++]=Gt,w[k++]=ae}let O=new be;O.setAttribute("position",new De(L,3)),O.setAttribute("uv",new De(Q,2)),O.setIndex(new De(w,1)),O.computeVertexNormals();let j=xt(16777215,{map:A}),ct=nn(256,256,(wt,Ft,kt)=>{wt.fillStyle="#808080",wt.fillRect(0,0,Ft,kt);for(let zt=0;zt<1800;zt++){let Gt=100+Math.floor($t()*70);wt.fillStyle=`rgb(${Gt},${Gt},${Gt})`;let ae=$t()*Ft,we=$t()*kt;wt.fillRect(ae,we,2,3+$t()*5)}for(let zt=0;zt<500;zt++)wt.fillStyle="rgba(255,255,255,0.18)",wt.fillRect($t()*Ft,$t()*kt,2,2)},{repeat:!0,srgb:!1});o.push(ct),j.onBeforeCompile=wt=>{wt.uniforms.uDetail={value:ct},wt.vertexShader=wt.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vWPos;`).replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
vWPos = (modelMatrix * vec4(transformed, 1.0)).xyz;`),wt.fragmentShader=wt.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vWPos; uniform sampler2D uDetail;`).replace("#include <map_fragment>",`#include <map_fragment>
          float dd = length(vWPos - cameraPosition);
          float d1 = texture2D(uDetail, vWPos.xz / 3.0).r, d2 = texture2D(uDetail, vWPos.xz / 11.0).r;
          float fade = 1.0 - smoothstep(25.0, 140.0, dd);
          diffuseColor.rgb *= mix(1.0, 0.8 + 0.4 * mix(d2, d1, fade), 0.55);`)},j.customProgramCacheKey=()=>"terrain-detail";let J=xe(O,j,{cast:!1});J.name="terrain",l(J);let tt=new Ie(new ea(700,5200,48,1),xt(13227680));tt.rotation.x=-Math.PI/2,tt.position.set(h.x0+u/2,-2,h.z0+p/2),tt.receiveShadow=!1,l(tt);let dt=new Ie(new pn(u+1800,p+1800),xt(13686197));dt.rotation.x=-Math.PI/2,dt.position.set(h.x0+u/2,-3,h.z0+p/2),l(dt)}let m=nn(256,256,(C,L,Q)=>{C.fillStyle="#7f8fb0",C.fillRect(0,0,L,Q);for(let w=0;w<1600;w++)C.fillStyle=$t()<.5?"rgba(255,255,255,0.07)":"rgba(30,40,70,0.08)",C.fillRect($t()*L,$t()*Q,2,2);C.fillStyle="#6b7a9b",C.fillRect(0,0,L*.035,Q),C.fillRect(L*.965,0,L*.035,Q),C.fillStyle="#ffffff",C.fillRect(L*.06,0,L*.045,Q),C.fillRect(L*.895,0,L*.045,Q),C.fillStyle="rgba(255,255,255,0.35)",C.fillRect(L*.49,0,L*.02,Q*.5)},{repeat:!0});o.push(m);{let C=[];for(let O of t.ribbons)C.push(S(O));let L=gn(C),Q=xe(L,xt(16777215,{map:m}),{cast:!1});Q.name="path",l(Q);let w=gn(t.ribbons.map(O=>S(O,!0))),k=xe(w,xt(5924226),{cast:!1});l(k)}function S(C,L=!1){let Q=[];for(let tt=C.from;tt<=C.to+.01;tt+=2)Q.push(t.baseXZ(tt));let w=[],k=[],O=[],j=0;for(let tt=0;tt<Q.length;tt++){let dt=Q[Math.max(0,tt-1)],wt=Q[Math.min(Q.length-1,tt+1)],Ft=wt[0]-dt[0],kt=wt[1]-dt[1],zt=Math.hypot(Ft,kt)||1;Ft/=zt,kt/=zt;let Gt=-kt,ae=Ft,we=Ue/2,Be=[Q[tt][0]-Gt*we,Q[tt][1]-ae*we],Ve=[Q[tt][0]+Gt*we,Q[tt][1]+ae*we],kn=t.heightAt(Q[tt][0],Q[tt][1]),Fn=Math.max(t.heightAt(Be[0],Be[1]),kn-.05)+fa+C.lift,ts=Math.max(t.heightAt(Ve[0],Ve[1]),kn-.05)+fa+C.lift;L?(w.push(Be[0]-Gt*.15,Fn-.45,Be[1]-ae*.15,Be[0],Fn,Be[1],Ve[0],ts,Ve[1],Ve[0]+Gt*.15,ts-.45,Ve[1]+ae*.15),k.push(0,0,0,1,0,1,0,0)):(w.push(Be[0],Fn,Be[1],Ve[0],ts,Ve[1]),k.push(0,j/8,1,j/8)),tt&&(j+=2)}let ct=L?4:2;for(let tt=0;tt<Q.length-1;tt++){let dt=tt*ct,wt=(tt+1)*ct;L?(O.push(dt,wt,dt+1,dt+1,wt,wt+1),O.push(dt+2,wt+2,dt+3,dt+3,wt+2,wt+3)):O.push(dt,wt,dt+1,dt+1,wt,wt+1)}let J=new be;if(J.setAttribute("position",new ie(w,3)),J.setAttribute("uv",new ie(k,2)),J.setIndex(O),J.computeVertexNormals(),J.getAttribute("normal").getY(0)<0&&!L){let tt=J.index.array;for(let dt=0;dt<tt.length;dt+=3){let wt=tt[dt+1];tt[dt+1]=tt[dt+2],tt[dt+2]=wt}J.computeVertexNormals()}return J}let E={uTime:{value:0}},I=s.features.filter(C=>C.kind==="water"&&C.closed);for(let C of I){let L=(C._level??Math.min(...C.pts.map(j=>t.heightAt(j[0],j[1]))))+.05,Q=new Yi(C.pts.map(j=>new Ct(j[0],-j[1]))),w=new na(Q,4);w.rotateX(-Math.PI/2),w.translate(0,L,0);let k=new ln({uniforms:{...E,...Ot.fog},vertexShader:`varying vec3 vW;
${se.fog_pars_vertex}
        void main(){ vec4 w = modelMatrix*vec4(position,1.); vW=w.xyz; vec4 mvPosition = viewMatrix*w; gl_Position=projectionMatrix*mvPosition;
${se.fog_vertex}
}`,fragmentShader:`uniform float uTime; varying vec3 vW;
${se.fog_pars_fragment}
        void main(){
          vec2 p = vW.xz*0.09;
          float w1 = sin(p.x*3.1 + uTime*1.3 + sin(p.y*2.3+uTime*0.7)*1.7);
          float w2 = sin(p.y*2.7 - uTime*1.1 + sin(p.x*1.9-uTime*0.5)*1.9);
          float r = smoothstep(0.86,0.9, w1*w2);
          vec3 c = mix(vec3(0.16,0.55,0.93), vec3(0.24,0.70,1.0), smoothstep(-0.6,0.8,w1*0.5+w2*0.5));
          c = mix(c, vec3(0.92,0.98,1.0), r);
          gl_FragColor = vec4(c,1.);
          #include <colorspace_fragment>

${se.fog_fragment}
        }`,fog:!0}),O=new Ie(w,k);O.name="water",l(O),o.push(k),C._waterLevel=L}let N=[];if(t.lake){let C=t.lake,L=li(C.pts),Q=[16767291,16735581,5752831,16777215,16748497,8257418],w=new ue(2,.7,3.6,2,.32),k=new ue(1.2,.5,.8,2,.2);for(let O=0,j=0;O<9&&j<300;j++){let ct=L[0]+$t()*(L[2]-L[0]),J=L[1]+$t()*(L[3]-L[1]);if(Ir(C.pts,ct,J)>-7)continue;let tt=new re,dt=xe(w,xt(Q[O%Q.length]),{ol:2.5});tt.add(dt);let wt=xe(k,xt(16777215),{ol:2});wt.position.y=.45,tt.add(wt);let Ft=xe(new ve(.42,12,8),xt(Q[(O+2)%Q.length]),{ol:2});Ft.position.set(0,.9,.7),tt.add(Ft),tt.position.set(ct,(C._waterLevel??0)+.1,J),tt.rotation.y=$t()*6.28,l(tt),N.push({g:tt,ph:$t()*6.28,x:ct,z:J,a:tt.rotation.y}),O++}}{let C=nn(128,128,(O,j,ct)=>{O.fillStyle="#ffffff",O.fillRect(0,0,j,ct),O.fillStyle="#ffffff",O.fillRect(0,0,14,14),O.fillStyle="#3b4a6b",O.fillRect(34,30,60,58),O.fillStyle="#9ec9ff",O.fillRect(38,34,52,50),O.fillStyle="#ffffff",O.fillRect(62,34,4,50),O.fillRect(38,56,52,4),O.fillStyle="rgba(0,0,0,0.08)",O.fillRect(0,118,j,10)},{repeat:!0});o.push(C);let L={generateTopUV:(O,j,ct,J,tt)=>[new Ct(.02,.98),new Ct(.02,.98),new Ct(.02,.98)],generateSideWallUV:(O,j,ct,J,tt,dt)=>{let wt=j[ct*3],Ft=j[ct*3+1],kt=j[ct*3+2],zt=j[J*3],Gt=j[J*3+1],ae=j[J*3+2],we=j[tt*3+2],Be=j[dt*3+2],Ve=(Math.abs(Ft-Gt)<Math.abs(wt-zt)?wt:Ft)/4.2,kn=(Math.abs(Ft-Gt)<Math.abs(wt-zt)?zt:Gt)/4.2;return[new Ct(Ve,kt/3.2),new Ct(kn,ae/3.2),new Ct(kn,we/3.2),new Ct(Ve,Be/3.2)]}},Q=["#e98a64","#f3d9a6","#d86f5a","#f6efe0","#a8c8e6","#f2b5a0","#c9b6e4","#f4c46a"],w=["#5d6488","#7a5d6c","#4f6b78"],k=[];for(let O of s.features){if(O.kind!=="building"||!O.closed||O.pts.length<4)continue;let j=nd(O.pts);if(_(j[0],j[1]))continue;let ct=parseFloat(O.tags?.["building:levels"])||($t()<.7?3:4),J=Math.min(30,ct*3.1),tt=new Yi(O.pts.map(we=>new Ct(we[0],-we[1]))),dt;try{dt=new ta(tt,{depth:J,bevelEnabled:!1,UVGenerator:L})}catch{continue}dt.rotateX(-Math.PI/2);let wt=Math.min(...O.pts.map(we=>t.heightAt(we[0],we[1])))-1.5;dt.translate(0,wt,0);let Ft=dt.getAttribute("normal"),kt=Ft.count,zt=new Float32Array(kt*3),Gt=new Kt(Q[Math.floor($t()*Q.length)]).convertSRGBToLinear(),ae=new Kt(w[Math.floor($t()*w.length)]).convertSRGBToLinear();for(let we=0;we<kt;we++){let Be=Ft.getY(we)>.5?ae:Gt;zt[we*3]=Be.r,zt[we*3+1]=Be.g,zt[we*3+2]=Be.b}dt.setAttribute("color",new De(zt,3)),k.push(dt.index?dt.toNonIndexed():dt)}if(k.length){let O=gn(k),j=xe(O,xt(16777215,{map:C,vertexColors:!0}),{cast:!0,ol:1.6,olRef:60});j.name="buildings",l(j)}}let q=t.sample(t.finishM),R=t.sample(0),H={start:R,finish:q},G=new re;l(G);function nt(C,L,Q,w){let k=new re,O=Ue/2+1.4,j=.85,ct=nn(256,32,(kt,zt,Gt)=>{for(let ae=0;ae<16;ae++)kt.fillStyle=ae%2?Q:w,kt.fillRect(ae*zt/16,0,zt/16+1,Gt)},{repeat:!1});o.push(ct);let J=new cn(O,j,14,40,Math.PI);J.scale(1,1.25,1);let tt=xe(J,xt(16777215,{map:ct}),{ol:3.5});k.add(tt);let dt=new he(j*1.4,j*1.6,.8,16);for(let kt of[-1,1]){let zt=xe(dt,xt(w),{ol:3});zt.position.set(kt*O,.3,0),k.add(zt)}let wt=ci(1024,256,(kt,zt,Gt)=>{kt.fillStyle="#1b1b3a",We(kt,0,0,zt,Gt,60),kt.fill(),kt.fillStyle=Q,We(kt,12,12,zt-24,Gt-24,50),kt.fill(),Ke(kt,"MARKRUN",zt/2,Gt*.42,150,"#ffffff","#1b1b3a",.18),Ke(kt,L,zt/2,Gt*.83,56,"#ffe14d","#1b1b3a",.2)},o),Ft=xe(new ue(O*1.55,O*.4,.7,3,.25),[xt(w),xt(w),xt(w),xt(w),xt(16777215,{map:wt}),xt(16777215,{map:wt})],{ol:3.5});return Ft.position.y=O*1.25+j*1.25+O*.2-.15,k.add(Ft),k.position.set(C.x,C.y-.1,C.z),k.rotation.y=Math.atan2(-C.rz,C.rx),G.add(k),k}H.finishArch=nt(q,"FINISH","#ff3d8b","#ffd23f"),nt(R,"START","#2e9bff","#ffd23f");let st=nn(256,64,(C,L,Q)=>{let k=L/16;for(let O=0;O<16;O++)for(let j=0;j<4;j++)C.fillStyle=(O+j)%2?"#111":"#fff",C.fillRect(O*k,j*k,k,k)});o.push(st);function z(C,L,Q,w=.03){let k=new pn(Ue,Q);k.rotateX(-Math.PI/2);let O=new Ie(k,xt(16777215,{map:L,transparent:!0,alphaTest:.3,polygonOffset:!0,polygonOffsetFactor:-2}));return O.position.set(C.x,C.y+w,C.z),O.rotation.y=Math.atan2(-C.rz,C.rx),O.receiveShadow=!0,l(O),O}z(q,st,2.2,.05);let St=ci(512,128,(C,L,Q)=>{C.fillStyle="#ffffff",C.fillRect(0,0,L,22),Ke(C,"START",L/2,80,72,"#ffffff","rgba(0,0,0,0)",0)},o);{let C=t.sample(2.5);z(C,St,3,.05).rotation.y+=Math.PI}let K=new Pe;function Y(C,L,Q,{ol:w=0,olRef:k,cast:O=!0,colors:j,chunk:ct=0}={}){if(!Q.length)return null;if(ct){let tt=new Map;Q.forEach((wt,Ft)=>{let kt=`${Math.floor(wt.x/ct)},${Math.floor(wt.z/ct)}`,zt=tt.get(kt);zt||tt.set(kt,zt={l:[],c:[]}),zt.l.push(wt),j&&zt.c.push(j[Ft])});let dt=null;for(let{l:wt,c:Ft}of tt.values()){let kt=Y(C,L,wt,{ol:w,olRef:k,cast:O,colors:j?Ft:null});dt=dt||kt}return dt}let J=new mn(C,L,Q.length);return Q.forEach((tt,dt)=>{K.position.set(tt.x,tt.y,tt.z),K.rotation.set(tt.rx||0,tt.ry||0,tt.rz||0),K.scale.set(tt.sx??tt.s??1,tt.sy??tt.s??1,tt.sz??tt.s??1),K.updateMatrix(),J.setMatrixAt(dt,K.matrix),j&&J.setColorAt(dt,new Kt(j[dt]))}),J.castShadow=O,J.receiveShadow=!0,J.computeBoundingSphere(),w&&ji(J,w,void 0,k),l(J),J}let W=[];{let C=Q=>{let w=t.rawExt(Q-12),k=t.rawExt(Q),O=t.rawExt(Q+12),j=Math.atan2(k[1]-w[1],k[0]-w[0]),J=Math.atan2(O[1]-k[1],O[0]-k[0])-j;for(;J>Math.PI;)J-=2*Math.PI;for(;J<-Math.PI;)J+=2*Math.PI;return J},L=[[20,t.LAP1_END_DRAW-20],[t.MAP_TO-40,t.finishM-10]];for(let[Q,w]of L){let k=null;for(let O=Q;O<w;O+=4){let j=C(O);Math.abs(j)>.45?(!k||Math.abs(j)>Math.abs(k.d))&&(k={m:O,d:j}):k&&(W.some(ct=>Math.abs(ct.m-k.m)<50)||W.push(k),k=null)}}}let V=[],Z=[],ot=[],gt=[];for(let C of W){let L=C.d>0;for(let Q=-2;Q<=2;Q++){let w=t.sample(C.m+Q*5),k=L?-1:1,O=Ue/2+1.6,j=w.x+w.rx*O*k,ct=w.z+w.rz*O*k;x(j,ct,.3),(L?Z:V).push({x:j,y:t.heightAt(j,ct),z:ct,ry:Math.atan2(-w.tz,w.tx)+(k>0?Math.PI:0)})}for(let Q=-3;Q<=3;Q++){let w=t.sample(C.m+Q*3.5),k=L?1:-1,O=Ue/2+.7;ot.push({x:w.x+w.rx*O*k,y:t.heightAt(w.x+w.rx*O*k,w.z+w.rz*O*k),z:w.z+w.rz*O*k,ry:$t()*6});for(let j=0;j<2;j++){let ct=t.sample(C.m+Q*3.5+j*1.75),J=Ue/2+.1;gt.push({x:ct.x+ct.rx*J*k,y:ct.y-.05,z:ct.z+ct.rz*J*k,ry:Math.atan2(ct.tx,ct.tz),red:(Q*2+j)%2===0})}}}H.corners=W;{let C=nn(256,96,(J,tt,dt)=>{J.fillStyle="#2f6fe0",J.fillRect(0,0,tt,dt),J.fillStyle="#ffffff";for(let wt=0;wt<4;wt++){let Ft=18+wt*60;J.beginPath(),J.moveTo(Ft,12),J.lineTo(Ft+26,12),J.lineTo(Ft+54,dt/2),J.lineTo(Ft+26,dt-12),J.lineTo(Ft,dt-12),J.lineTo(Ft+28,dt/2),J.closePath(),J.fill()}J.strokeStyle="#1b3f8f",J.lineWidth=8,J.strokeRect(0,0,tt,dt)}),L=C.clone();L.repeat.x=-1,L.offset.x=1,L.wrapS=Wi,L.needsUpdate=!0,o.push(C,L);let w=(J=>{let tt=new Se(3.2,1.2,.12);tt.rotateX(-.32),tt.translate(0,.62,.22);let dt=new Se(3.2,1.2,.12);return dt.rotateX(.32),dt.translate(0,.62,-.22),dt.rotateY(Math.PI),gn([tt,dt])})();qc(w),Y(w,xt(16777215,{map:C}),Z,{ol:2.5}),Y(w,xt(16777215,{map:L}),V,{ol:2.5});let k=nn(16,64,(J,tt,dt)=>{for(let wt=0;wt<4;wt++)J.fillStyle=wt%2?"#ffffff":"#ff6a2b",J.fillRect(0,wt*dt/4,tt,dt/4)});o.push(k);let O=new he(.06,.32,.9,12,1);O.translate(0,.5,0);let j=new Se(.8,.08,.8);j.translate(0,.04,0),Y(O,xt(16777215,{map:k}),ot,{ol:2}),Y(j,xt(16738859),ot,{ol:1.5});let ct=new Se(.5,.22,1.75);ct.translate(0,.11,0),Y(ct,xt(16777215),gt.map(J=>J),{ol:1.5,colors:gt.map(J=>J.red?15216959:16777215)})}let Tt=new re;l(Tt);function At(C,L,Q,w,k,{postH:O=1.6,face:j=0,scale:ct=1}={}){let J=ci(512,Math.round(512*w/Q),k,o),tt=new re,dt=xe(new ue(Q,w,.25,2,.08),[xt(5978660),xt(5978660),xt(5978660),xt(5978660),xt(16777215,{map:J}),xt(16777215,{map:J})],{ol:3});dt.position.y=O+w/2,tt.add(dt);let wt=new Se(.25,O+w*.5,.25);for(let Gt of[-1,1]){let ae=xe(wt,xt(9067062),{ol:2});ae.position.set(Gt*Q*.35,(O+w*.5)/2,-.1),tt.add(ae)}let Ft=Ue/2+2.2+Q*.15,kt=C.x+C.rx*Ft*L,zt=C.z+C.rz*Ft*L;return tt.position.set(kt,t.heightAt(kt,zt)-.1,zt),tt.rotation.y=Math.atan2(-C.tx,-C.tz)+L*.5+j,tt.scale.setScalar(ct),Tt.add(tt),tt}let lt=1720,pt=t.sample(lt-10);H.hillSign=At(pt,1,6,3.2,(C,L,Q)=>{C.fillStyle="#ffd23f",We(C,0,0,L,Q,40),C.fill(),C.lineWidth=16,C.strokeStyle="#1b1b3a",We(C,8,8,L-16,Q-16,34),C.stroke(),C.fillStyle="#3aa845",C.beginPath(),C.moveTo(40,Q-40),C.lineTo(150,70),C.lineTo(260,Q-40),C.closePath(),C.fill(),C.strokeStyle="#1b1b3a",C.lineWidth=8,C.stroke(),C.fillStyle="#fff",C.beginPath(),C.moveTo(118,118),C.lineTo(150,70),C.lineTo(182,118),C.closePath(),C.fill(),Ke(C,"THE",380,Q*.3,72,"#ffffff","#1b1b3a",.2),Ke(C,"HILL",370,Q*.66,120,"#ff3d8b","#1b1b3a",.16)},{postH:1.4}),H.hillM=lt;for(let C of[1,2,3,4]){let L=C*1e3,Q=t.sample(t.geoOf(L));At(Q,-1,1.6,1.3,(w,k,O)=>{w.fillStyle="#ffffff",We(w,0,0,k,O,50),w.fill(),w.fillStyle="#ff3d8b",We(w,20,20,k-40,O-40,36),w.fill(),Ke(w,`${C}K`,k/2,O/2+8,230,"#ffffff","#1b1b3a",.14)},{postH:.7})}let X=t.sample(2475);H.lapBoard=At(X,1,4.4,2.6,(C,L,Q)=>{C.fillStyle="#1b1b3a",We(C,0,0,L,Q,40),C.fill(),C.fillStyle="#2e9bff",We(C,14,14,L-28,Q-28,30),C.fill(),Ke(C,"LAP",L/2,Q*.28,90,"#ffffff","#1b1b3a",.18),Ke(C,"2 OF 2",L/2,Q*.66,150,"#ffe14d","#1b1b3a",.14)},{postH:1.2}),H.lapM=2500;let Et=[],Mt=[],et=[],Rt=[];function Vt(C,L,Q,w=3.2,k=12){let O=null;for(let j=C;j<=L;j+=k){let ct=t.sample(j),J=Ue/2+1,tt=ct.x+ct.rx*J*Q,dt=ct.z+ct.rz*J*Q,wt=t.heightAt(tt,dt);Mt.push({x:tt,y:wt,z:dt});let Ft=new $(tt,wt+w,dt);if(O){let kt=[];for(let zt=0;zt<=12;zt++){let Gt=zt/12,ae=O.clone().lerp(Ft,Gt);ae.y-=Math.sin(Gt*Math.PI)*.6,kt.push(ae)}et.push(kt);for(let zt=1;zt<12;zt++){let Gt=kt[zt],ae=kt[zt+1].clone().sub(kt[zt-1]);Et.push({x:Gt.x,y:Gt.y,z:Gt.z,ry:Math.atan2(-ae.z,ae.x)})}}O=Ft}}function Nt(C,L,Q,w=Ue/2+2.2){for(let k=C;k<=L;k+=2.4){let O=t.sample(k),j=O.x+O.rx*w*Q,ct=O.z+O.rz*w*Q;Rt.push({x:j,y:t.heightAt(j,ct),z:ct,ry:Math.atan2(O.tx,O.tz)})}}let B=t.finishM;Vt(B-70,B+10,1),Vt(B-70,B+10,-1),Vt(-6,50,1),Vt(-6,50,-1),Nt(B-60,B+14,1),Nt(B-60,B+14,-1),Nt(-4,40,1),Nt(-4,40,-1);{let C=new be;C.setAttribute("position",new ie([-.3,0,0,.3,0,0,0,-.62,0],3)),C.setAttribute("normal",new ie([0,0,1,0,0,1,0,0,1],3));let L=Et.map((tt,dt)=>[16727435,16765503,3054591,4054148,16747069,16777215][dt%6]);Y(C,xt(16777215,{side:Oe}),Et,{colors:L,cast:!1});let Q=new he(.07,.09,3.3,6);Q.translate(0,1.65,0),Y(Q,xt(16777215),Mt,{ol:1.5});let w=new be().setFromPoints(et.flatMap(tt=>tt.slice(0,-1).flatMap((dt,wt)=>[dt,tt[wt+1]]))),k=new Fs(w,new qi({color:3355443}));l(k),o.push(w);let O=[];for(let tt=0;tt<4;tt++){let dt=new Se(.16,1,.06);dt.translate(-.9+tt*.6,.5,0),O.push(dt)}let j=new Se(2.4,.12,.05);j.translate(0,.65,.05),O.push(j);let ct=j.clone();ct.translate(0,-.35,0),O.push(ct);let J=gn(O);J.rotateY(Math.PI/2),Y(J,xt(16777215),Rt,{ol:1.8})}let D=[],ft=(C,L,Q,w,k,O=1.35)=>D.push({m0:C,m1:L,side:Q,off:Ue/2+3,depth:w,density:k,spacing:O});ft(B-58,B+12,1,6,1),ft(B-58,B+12,-1,6,1),ft(-2,38,1,5,.9),ft(-2,38,-1,5,.9),ft(1940,2010,1,4,.7),ft(1960,2010,-1,3,.6),ft(lt-10,lt+40,-1,3,.55),ft(2440,2490,-1,3,.7),H.crowdZones=D;{let C=s.pois.filter(w=>w.kind==="bench"&&_(w.pos[0],w.pos[1])&&x(w.pos[0],w.pos[1],1)).map(w=>({x:w.pos[0],y:t.heightAt(w.pos[0],w.pos[1]),z:w.pos[1],ry:$t()*6})),L=gn([new Se(1.8,.12,.5).translate(0,.5,0),new Se(1.8,.4,.1).translate(0,.8,-.22),new Se(.1,.5,.45).translate(-.8,.25,0),new Se(.1,.5,.45).translate(.8,.25,0)]);Y(L,xt(11892031),C,{ol:1.5});let Q=s.pois.filter(w=>w.kind==="cafe"&&_(w.pos[0],w.pos[1])&&x(w.pos[0],w.pos[1],4));for(let w of Q){let k=new re;k.add(xe(new ue(5,3,4,2,.2),xt(16774108),{ol:2.5})).position.y=1.5;let O=nn(128,16,(J,tt,dt)=>{for(let wt=0;wt<8;wt++)J.fillStyle=wt%2?"#fff":"#ff4f6d",J.fillRect(wt*16,0,16,dt)});o.push(O);let j=xe(new Se(5.6,.2,2),xt(16777215,{map:O}),{ol:2});j.position.set(0,2.9,2.3),j.rotation.x=.35,k.add(j);let ct=xe(new ze(4,1.6,4),xt(3054591),{ol:2.5});ct.position.y=3.8,ct.rotation.y=Math.PI/4,k.add(ct),k.position.set(w.pos[0],t.heightAt(w.pos[0],w.pos[1]),w.pos[1]),k.rotation.y=$t()*6,l(k),M(w.pos[0],w.pos[1],5)}}for(let C of D)for(let L=C.m0-8;L<=C.m1+8;L+=4){let Q=t.sample(L),w=C.off+C.depth/2;M(Q.x+Q.rx*w*C.side,Q.z+Q.rz*w*C.side,C.depth/2+3)}for(let C of[R,q])M(C.x,C.z,14);if(r&&n.funfair){let C=Object.values(t.diversions)[0]?.[0];if(C)for(let L of C.path){let Q=it(L[0],L[1]),w=(L[0]+Q[0])/2,k=(L[1]+Q[1])/2;M(w,k,Math.max(6,Math.hypot(L[0]-Q[0],L[1]-Q[1])/2-3))}}function it(C,L){let Q=null,w=1e9;for(let k of f){let O=(k[0]-C)**2+(k[1]-L)**2;O<w&&(w=O,Q=k)}return Q}H.nearestOnRibbon=it;let rt=new Map;for(let C of f){let L=`${Math.floor(C[0]/10)},${Math.floor(C[1]/10)}`,Q=rt.get(L);Q||rt.set(L,Q=[]),Q.push(C)}let at=(C,L,Q=1)=>{let w=Math.floor(C/10),k=Math.floor(L/10),O=(Ue/2+Q)**2;for(let j=-1;j<=1;j++)for(let ct=-1;ct<=1;ct++)for(let J of rt.get(`${w+j},${k+ct}`)||[])if((J[0]-C)**2+(J[1]-L)**2<O)return!0;return!1};H.reserve=M,H.clearOf=x;let _t=[],mt=(C,L,Q,w)=>!x(C,L,2.5*w)||P(C,L,1.5)?!1:(_t.push({x:C,z:L,kind:Q,s:w}),M(C,L,2.2*w),!0);for(let C of s.pois)C.kind==="tree"&&mt(C.pos[0],C.pos[1],0,.85+$t()*.35);for(let C of s.features)if(C.kind==="wood"&&C.closed){let L=li(C.pts),Q=(L[2]-L[0])*(L[3]-L[1]);for(let w=0;w<Q/90;w++){let k=L[0]+$t()*(L[2]-L[0]),O=L[1]+$t()*(L[3]-L[1]);pa(C.pts,k,O)&&mt(k,O,1,.9+$t()*.5)}}{let C=li(b);for(let L=0;L<2600;L++){let Q=C[0]+$t()*(C[2]-C[0]),w=C[1]+$t()*(C[3]-C[1]);!_(Q,w)||-Ir(b,Q,w)>45&&$t()<.75||mt(Q,w,$t()<.7?1:2,.8+$t()*.5)}for(let L of s.features)if(L.kind==="road"&&!L.closed)for(let Q=1;Q<L.pts.length;Q++){let w=L.pts[Q-1],k=L.pts[Q],O=Math.hypot(k[0]-w[0],k[1]-w[1]);for(let j=0;j<O;j+=22){let ct=j/O,J=w[0]+(k[0]-w[0])*ct,tt=w[1]+(k[1]-w[1])*ct,dt=-(k[1]-w[1])/O,wt=(k[0]-w[0])/O,Ft=8+$t()*2;$t()<.5&&mt(J+dt*Ft,tt+wt*Ft,0,.6+$t()*.2)}}}{let C=[3978315,5031250,3121226,6539594,8376650,3450963],L=new he(.32,.5,4.2,7);L.translate(0,2.1,0);let Q=new en(3.2,1);Q.scale(1,1.08,1),Q.translate(0,6.6,0);let w=gn([new en(3,1).translate(0,6.2,0),new en(2.3,0).translate(1.9,5.3,.6),new en(2.2,0).translate(-1.7,5.5,-.8),new en(2,0).translate(.2,8.2,.3)].map(J=>J.toNonIndexed())),k=gn([new ze(3,4.2,8).translate(0,5,0),new ze(2.4,3.6,8).translate(0,7.2,0),new ze(1.6,3,8).translate(0,9.2,0)].map(J=>J.index?J.toNonIndexed():J)),O=_t.map(J=>({x:J.x,y:t.heightAt(J.x,J.z)-.2,z:J.z,ry:$t()*6.28,s:J.s}));Y(L,xt(9067062),O,{ol:2,olRef:40,chunk:160});let j=xt(16777215,{flatShading:!0});[Q,w,k].forEach((J,tt)=>{let dt=O.filter((wt,Ft)=>_t[Ft].kind===tt);Y(J,j,dt,{ol:2.2,olRef:40,colors:dt.map(()=>C[Math.floor($t()*C.length)]),chunk:160})}),H.treeCount=_t.length}{let C=gn([0,1,2,3].map(O=>{let j=new ze(.09,.55,3);return j.translate(0,.27,0),j.rotateZ((O-1.5)*.25),j.rotateY(O*1.7),j.translate((O-1.5)*.08,0,O%2*.06),j.toNonIndexed()})),L=gn([new he(.03,.03,.35,4).translate(0,.17,0).toNonIndexed(),new en(.13,0).translate(0,.38,0)]),Q=[],w=[],k=[];for(let O=0;O<9e3;O++){let j=f[Math.floor($t()*f.length)],ct=$t()*6.283,J=Ue/2+1+$t()*22,tt=j[0]+Math.cos(ct)*J,dt=j[1]+Math.sin(ct)*J;if(!_(tt,dt)||P(tt,dt,.5)||!x(tt,dt,.2))continue;let wt=t.heightAt(tt,dt)-.03;$t()<.62?Q.push({x:tt,y:wt,z:dt,ry:$t()*6,s:.5+$t()*.6}):(w.push({x:tt,y:wt,z:dt,ry:$t()*6,s:.35+$t()*.25}),k.push(["#ff5d8f","#ffd93b","#ffffff","#b06bff","#ff8a3d","#57c7ff"][Math.floor($t()*6)]))}Y(C,xt(5226296),Q,{cast:!1,chunk:120}),Y(L,xt(16777215),w,{cast:!1,colors:k,chunk:120})}let It=new ln({side:Je,depthWrite:!1,fog:!1,uniforms:{top:{value:new Kt(3116287)},mid:{value:new Kt(9425919)},bot:{value:new Kt(15333631)}},vertexShader:"varying vec3 vP; void main(){ vP = normalize(position); gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.); }",fragmentShader:`uniform vec3 top; uniform vec3 mid; uniform vec3 bot; varying vec3 vP; void main(){ float h=vP.y; vec3 c = h>0.12? mix(mid, top, smoothstep(0.12,0.7,h)) : mix(bot, mid, smoothstep(-0.05,0.12,h)); gl_FragColor=vec4(c,1.);
#include <colorspace_fragment>
}`}),Pt=new Ie(new ve(5e3,32,16),It);Pt.renderOrder=-10,Pt.frustumCulled=!1,i.add(Pt),o.push(It,Pt.geometry);let bt=gn([[0,0,0,14],[13,-3,2,10],[-13,-4,-1,10],[6,6,-2,9],[-6,5,3,8],[22,-6,0,6],[-22,-7,1,6]].map(([C,L,Q,w])=>new en(w,2).translate(C,L,Q)));bt.scale(1,.7,.8);let Dt=[h.x0+u/2,h.z0+p/2],Wt=[];for(let C=0;C<26;C++){let L=$t()*6.28,Q=300+$t()*1300;Wt.push({x:Dt[0]+Math.cos(L)*Q,y:170+$t()*120,z:Dt[1]+Math.sin(L)*Q,ry:$t()*6,s:.8+$t()*1.4})}let Xt=Y(bt,xt(16777215,{emissive:6981808,emissiveIntensity:.35,fog:!1}),Wt,{ol:1.5,olRef:300,cast:!1}),Lt=[];for(let C=0;C<18;C++){let L=C/18*6.28+$t()*.2,Q=1900+$t()*500;Lt.push({x:Dt[0]+Math.cos(L)*Q,y:-40,z:Dt[1]+Math.sin(L)*Q,sx:320+$t()*260,sy:80+$t()*90,sz:260+$t()*200,ry:$t()*6})}Y(new ve(1,24,12),xt(7128954),Lt,{cast:!1,colors:Lt.map((C,L)=>[8047487,6273413,9425290][L%3])});function ne(C){E.uTime.value=C;for(let L of N)L.g.position.y=(t.lake?._waterLevel??0)+.1+Math.sin(C*1.7+L.ph)*.08,L.g.rotation.z=Math.sin(C*1.3+L.ph)*.06,L.g.rotation.y=L.a+Math.sin(C*.1+L.ph)*.4;Xt&&(Xt.position.x=Math.sin(C*.01)*40)}function qt(){a.traverse(C=>{C.geometry&&C.geometry.dispose()});for(let C of o)C.dispose?.();i.remove(a),i.remove(Pt)}return{group:a,anchors:H,update:ne,dispose:qt,inPark:_,clearOf:x,reserve:M,blocked:P,groundTex:A,onPath:at}}function nd(i){let t=0,e=0;for(let n of i)t+=n[0],e+=n[1];return[t/i.length,e/i.length]}function We(i,t,e,n,s,r){i.beginPath(),i.moveTo(t+r,e),i.arcTo(t+n,e,t+n,e+s,r),i.arcTo(t+n,e+s,t,e+s,r),i.arcTo(t,e+s,t,e,r),i.arcTo(t,e,t+n,e,r),i.closePath()}var sd=[16735631,16765503,5752831,8248938,16747069,11566079,5234888,16739179,16777215,9414911],rd=[4054148,16727435,16765503,3054591,16777215];function Ry(){let i=[];for(let n=0;n<=8;n++){let s=n/8,r=s*1.25,o=s<.12?.48+s*1.2:Math.sqrt(Math.max(0,1-Math.pow((s-.12)/.88,2.2)))*.62;i.push(new Ct(Math.max(.001,o),r))}i.unshift(new Ct(.001,0));let e=new Er(i,12);return e.computeVertexNormals(),e}function od(i,t){let e=Nn(99),n=t.length,s=new re;if(i.add(s),!n)return{update(){},dispose(){i.remove(s)},group:s};let r=Ry(),o=new ve(.15,8,5);o.scale(.8,1.15,.5);let a=new ve(.075,6,4);a.scale(.85,1.2,.5);let l=new ve(.13,6,5),h=new ze(.14,.36,6);h.translate(0,.18,0);let u=new ze(.26,.55,8);u.translate(0,.27,0);let p=new ve(.2,7,5),d=(R,H,G,nt)=>{let st=new mn(R,H,G);return st.castShadow=!0,st.receiveShadow=!0,st.userData.ol=nt,s.add(st),st},c=d(r,xt(16777215),n,2.6),g=d(o,new Sn({color:16777215}),n*2,0),M=d(a,new Sn({color:1709088}),n*2,0),x=d(l,xt(16777215),n*2,2);g.castShadow=M.castShadow=!1;let f=[d(h,xt(16777215),n,2),d(u,xt(16777215),n,2),d(p,xt(16777215),n,2)],b=[0,0,0],_=new Kt,v=t.map((R,H)=>{let G=R.colour??sd[Math.floor(e()*sd.length)];c.setColorAt(H,_.set(G)),x.setColorAt(H*2,_),x.setColorAt(H*2+1,_);let nt=e()<.3?-1:Math.floor(e()*3),st=-1;return nt>=0&&(st=b[nt]++,f[nt].setColorAt(st,_.set(rd[Math.floor(e()*rd.length)]))),{...R,s:R.scale??.85+e()*.35,ph:e()*6.28,sp:5+e()*4,tk:nt,ti:st,wave:e()<.5,ex:.3}});f.forEach((R,H)=>{R.count=b[H]});for(let R of[c,x,...f])R.instanceColor&&(R.instanceColor.needsUpdate=!0);let U=new pe,P=new Wn,T=new Dn,A=new $,y=new $,m=new pe,S=new pe;function E(R,H,G){let nt=v[R],st=nt.ex,z=H*nt.sp*(.5+st*.6)+nt.ph,St=Math.max(0,Math.sin(z))*.32*st,K=1-Math.cos(z*2)*.05*st;T.set(0,nt.yaw+Math.sin(H*.8+nt.ph)*.25*(1-st),Math.sin(z*.5)*.08*st),P.setFromEuler(T),m.compose(A.set(nt.x,nt.y+St,nt.z),P,y.set(nt.s/Math.sqrt(K),nt.s*K,nt.s/Math.sqrt(K))),c.setMatrixAt(R,m);for(let Y=0;Y<2;Y++){let W=Y?.19:-.19;S.makeTranslation(W,.86,.5),U.multiplyMatrices(m,S),g.setMatrixAt(R*2+Y,U),S.makeTranslation(W*1.02,.84+(st>.6?.03:0),.565),U.multiplyMatrices(m,S),M.setMatrixAt(R*2+Y,U);let V=st>.55?1:.15+.2*Math.max(0,Math.sin(z)),Z=nt.wave?Math.sin(z*1.5+Y*3)*.25*st:0,ot=(Y?1:-1)*(.62+V*.05+Z*.3),gt=.45+V*.85+Z;S.makeTranslation(ot,gt,.12),U.multiplyMatrices(m,S),x.setMatrixAt(R*2+Y,U)}nt.tk>=0&&(S.makeTranslation(0,1.22,0),nt.tk===0&&S.multiply(new pe().makeRotationZ(Math.sin(z)*.3)),U.multiplyMatrices(m,S),f[nt.tk].setMatrixAt(nt.ti,U))}for(let R=0;R<n;R++)E(R,0,!0);let I=()=>{for(let R of[c,g,M,x,...f])R.instanceMatrix.needsUpdate=!0};I();for(let R of[c,g,M,x,...f]){if(!R.count){R.visible=!1;continue}R.computeBoundingSphere(),R.boundingSphere.radius+=2,R.userData.ol&&ji(R,R.userData.ol,void 0,18)}function N(R,H,G=[],nt=null){let st=!1;for(let z=0;z<n;z++){let St=v[z];if(H&&(St.x-H.x)**2+(St.z-H.z)**2>260*260)continue;let K=.25;if(nt!=null)K=nt;else for(let Y of G){let W=(Y.x-St.x)**2+(Y.z-St.z)**2;W<45*45&&(K=Math.max(K,1-Math.sqrt(W)/70))}St.ex+=(K-St.ex)*.05,E(z,R),st=!0}st&&I()}function q(){for(let R of[r,o,a,l,h,u,p])R.dispose();for(let R of[c,g,M,x,...f])R.dispose();i.remove(s)}return{update:N,dispose:q,group:s,members:v}}function ad(i,t,e=5,n=null){let s=Nn(e),r=[];for(let[o,a]of t.entries())for(let l=a.m0;l<=a.m1;l+=a.spacing??1.35){let h=i.sample(l),u=Math.max(1,Math.round(a.depth/1.25));for(let p=0;p<u;p++){if(s()>a.density)continue;let d=a.off+p*1.25+s()*.35,c=(s()-.5)*.6,g=h.x+h.rx*d*a.side+h.tx*c,M=h.z+h.rz*d*a.side+h.tz*c;n&&n(g,M,1.4)||r.push({zone:o,x:g,y:i.heightAt(g,M),z:M,yaw:Math.atan2(-h.rx*a.side,-h.rz*a.side)+(s()-.5)*.5})}}return r}var ld={stocky:{torso:[.9,.76,.58],leg:.66,legR:.16,arm:.66,armR:.14,head:.47,hand:.19,shoe:[.34,.25,.6]},lanky:{torso:[.56,.86,.38],leg:1.06,legR:.095,arm:.9,armR:.085,head:.39,hand:.15,shoe:[.27,.21,.62]},compact:{torso:[.68,.6,.5],leg:.52,legR:.13,arm:.52,armR:.11,head:.5,hand:.17,shoe:[.3,.23,.5]},tall:{torso:[.7,.94,.46],leg:.92,legR:.125,arm:.8,armR:.11,head:.43,hand:.17,shoe:[.31,.24,.6]}},cd=["#2b1d14","#5a3a1e","#c8642a","#e8c66a","#1d1d24","#a9a9b3","#3a2a1e","#8a5a2b","#ff5fa2"],Cy=3.2,Ur=new Map,Qt=(i,t)=>(Ur.has(i)||Ur.set(i,t()),Ur.get(i));function hd(){for(let i of Ur.values())i.dispose();Ur.clear()}function Iy(i){let t=2166136261;for(let e of i)t^=e.charCodeAt(0),t=Math.imul(t,16777619);return t>>>0}function Py(i,t,e,n,s,r){i.fillStyle=n,i.fillRect(0,0,t,e);let o=t*.25,a=e*.47,l=e*.64,h=t*.058,u="#1a1420";i.fillStyle="rgba(255,90,90,0.28)";for(let x of[-1,1])i.beginPath(),i.ellipse(o+x*h*1.75,l-e*.03,t*.022,e*.03,0,0,7),i.fill();let p=(x,f)=>{if(f==="heart"){i.fillStyle="#ff2d6f",i.strokeStyle=u,i.lineWidth=5,i.beginPath();let v=t*.03;i.moveTo(x,a+v*1.1),i.bezierCurveTo(x-v*2.2,a-v*.2,x-v*.9,a-v*1.9,x,a-v*.6),i.bezierCurveTo(x+v*.9,a-v*1.9,x+v*2.2,a-v*.2,x,a+v*1.1),i.fill(),i.stroke();return}if(f==="closed"||f==="happy"){i.strokeStyle=u,i.lineWidth=9,i.lineCap="round",i.beginPath(),f==="happy"?i.arc(x,a+e*.02,t*.024,Math.PI*1.1,Math.PI*1.9):(i.moveTo(x-t*.025,a),i.lineTo(x+t*.025,a)),i.stroke();return}if(f==="x"){i.strokeStyle=u,i.lineWidth=8,i.lineCap="round";let v=t*.02;i.beginPath(),i.moveTo(x-v,a-v),i.lineTo(x+v,a+v),i.moveTo(x+v,a-v),i.lineTo(x-v,a+v),i.stroke();return}let b=t*.03,_=e*.085;i.fillStyle="#fff",i.strokeStyle=u,i.lineWidth=6,i.beginPath(),i.ellipse(x,a,b,_,0,0,7),i.fill(),i.stroke(),i.fillStyle=u,i.beginPath(),i.ellipse(x+b*.15,a+_*.12,b*.55,_*.6,0,0,7),i.fill(),i.fillStyle="#fff",i.beginPath(),i.arc(x+b*.35,a-_*.2,b*.22,0,7),i.fill(),f==="half"&&(i.fillStyle=n,i.fillRect(x-b-4,a-_-4,b*2+8,_*1.05),i.strokeStyle=u,i.lineWidth=7,i.beginPath(),i.moveTo(x-b-2,a-_*.1),i.lineTo(x+b+2,a-_*.1),i.stroke())},d={sleepy:"half",smug:"half"}[s]||"open";r==="happy"&&(d="happy"),r==="love"&&(d="heart"),r==="dead"&&(d="x"),r==="effort"&&s!=="goofy"&&(d="open");for(let x of[-1,1])p(o+x*h,d);i.strokeStyle=u,i.lineWidth=10,i.lineCap="round";let c=r==="effort"||s==="determined"?.35:r==="sad"||s==="worried"?-.35:s==="smug"?.15:0;for(let x of[-1,1]){let f=o+x*h,b=a-e*.13,_=t*.026,v=f-x*_,U=f+x*_;i.beginPath(),i.moveTo(U,b-c*18),i.lineTo(v,b+c*18),i.stroke()}i.lineWidth=8,i.strokeStyle=u,i.fillStyle="#7a1e2e";let g=o,M=r||"normal";if(M==="happy"||M==="normal"&&s==="grin")i.beginPath(),i.moveTo(g-t*.04,l-e*.02),i.quadraticCurveTo(g,l+e*.12,g+t*.04,l-e*.02),i.closePath(),i.fill(),i.stroke(),i.fillStyle="#fff",i.fillRect(g-t*.03,l-e*.018,t*.06,e*.03),i.fillStyle="#ff7d8f",i.beginPath(),i.ellipse(g,l+e*.06,t*.015,e*.02,0,0,7),i.fill();else if(M==="effort"){i.fillStyle="#fff",i.beginPath(),We(i,g-t*.035,l-e*.03,t*.07,e*.065,10),i.fill(),i.stroke(),i.lineWidth=4,i.beginPath(),i.moveTo(g-t*.035,l),i.lineTo(g+t*.035,l);for(let x=-2;x<=2;x++)i.moveTo(g+x*t*.012,l-e*.03),i.lineTo(g+x*t*.012,l+e*.035);i.stroke()}else if(M==="sad"||M==="dead")i.beginPath(),i.moveTo(g-t*.03,l+e*.04),i.quadraticCurveTo(g,l-e*.04,g+t*.03,l+e*.04),i.stroke(),M==="dead"&&(i.fillStyle="#ff7d8f",i.beginPath(),i.ellipse(g+t*.012,l+e*.07,t*.012,e*.04,.2,0,7),i.fill(),i.stroke());else if(M==="love"||M==="pant")i.beginPath(),i.ellipse(g,l+e*.02,t*.022,e*.05,0,0,7),i.fill(),i.stroke();else if(s==="smug")i.beginPath(),i.moveTo(g-t*.03,l+e*.01),i.quadraticCurveTo(g+t*.01,l+e*.05,g+t*.04,l-e*.03),i.stroke();else if(s==="worried"){i.beginPath(),i.moveTo(g-t*.03,l+e*.02);for(let x=0;x<=6;x++)i.lineTo(g-t*.03+x*t*.01,l+e*.02+(x%2?-1:1)*e*.012);i.stroke()}else s==="goofy"?(i.beginPath(),i.moveTo(g-t*.04,l),i.quadraticCurveTo(g,l+e*.09,g+t*.04,l),i.closePath(),i.fill(),i.stroke(),i.fillStyle="#ff7d8f",i.beginPath(),i.ellipse(g+t*.01,l+e*.07,t*.016,e*.045,0,0,7),i.fill(),i.stroke(),i.fillStyle="#fff",i.fillRect(g-t*.02,l-2,t*.016,e*.03)):s==="determined"?(i.beginPath(),i.moveTo(g-t*.03,l+e*.01),i.lineTo(g+t*.03,l+e*.01),i.stroke()):(i.beginPath(),i.moveTo(g-t*.035,l-e*.01),i.quadraticCurveTo(g,l+e*.07,g+t*.035,l-e*.01),i.stroke());i.strokeStyle="rgba(0,0,0,0.25)",i.lineWidth=6,i.beginPath(),i.arc(o,a+e*.09,t*.012,.2,Math.PI-.2),i.stroke()}function Ly(i,t){return nn(256,200,(e,n,s)=>{e.fillStyle="#ffffff",We(e,0,0,n,s,20),e.fill(),e.fillStyle=t,e.fillRect(0,0,n,44),e.font=`30px ${Yc}`,e.fillStyle="#fff",e.textAlign="center",e.textBaseline="middle",e.fillText("MARKRUN",n/2,24),Ke(e,String(i),n/2,128,140,"#1a1420","#1a1420",0),e.fillStyle="#c33";for(let[r,o]of[[16,60],[n-16,60],[16,s-16],[n-16,s-16]])e.beginPath(),e.arc(r,o,6,0,7),e.fill()})}function Dy(i){return nn(128,128,(t,e,n)=>{if(t.fillStyle="#ffffff",t.strokeStyle="#1a1420",t.lineWidth=8,t.beginPath(),t.arc(e/2,n/2-6,48,0,7),t.fill(),t.stroke(),t.beginPath(),t.moveTo(e/2-12,n-26),t.lineTo(e/2,n-4),t.lineTo(e/2+8,n-28),t.fill(),i==="!")Ke(t,"!",e/2,n/2-4,84,"#ff3d8b","#1a1420",.12);else if(i==="heart"){t.fillStyle="#ff2d6f";let s=e/2,r=n/2-2,o=16;t.beginPath(),t.moveTo(s,r+o*1.3),t.bezierCurveTo(s-o*2.6,r-o*.3,s-o,r-o*2.2,s,r-o*.7),t.bezierCurveTo(s+o,r-o*2.2,s+o*2.6,r-o*.3,s,r+o*1.3),t.fill(),t.stroke()}else if(i==="floss"){t.fillStyle="#ff9bd2";for(let[s,r,o]of[[54,44,18],[74,46,17],[64,30,16],[62,54,16]])t.beginPath(),t.arc(s,r,o,0,7),t.fill();t.strokeStyle="#c99a5a",t.lineWidth=6,t.beginPath(),t.moveTo(64,62),t.lineTo(64,96),t.stroke()}else if(i==="sweat"){t.fillStyle="#57c7ff";for(let[s,r]of[[50,50],[78,64]])t.beginPath(),t.moveTo(s,r-22),t.quadraticCurveTo(s+14,r,s,r+10),t.quadraticCurveTo(s-14,r,s,r-22),t.fill(),t.stroke()}})}function ud(i,t={}){let e=i.look||{},n=ld[e.build]||ld.compact,s=Iy(i.id+(i.nickname||"")),r=Nn(s),o=i.colour?.primary||"#ff4757",a=i.colour?.secondary||"#ffffff",l=e.skin||"#f1c6a5",h=cd[s%cd.length],u=[],p=xt(o),d=xt(a),c=xt(l),g=xt(h),M=new Kt(a).getHSL({}).l>.85?"#ffffff":a,x=xt(M),f=xt("#ffffff"),b=xt("#22202c"),_=(it,rt,at=Cy)=>xe(it,rt,{ol:at,olRef:9}),v=new re;v.name=`runner-${i.id}`;let U=new re;v.add(U);let P=new re;U.add(P);let T=n.leg/2,A=n.leg+n.shoe[1]*.75;P.position.y=A;let y=_(Qt(`shorts${e.build}`,()=>new ue(n.torso[0]*.92,.32,n.torso[2]*.95,3,.12)),d);y.position.y=.02,P.add(y);let m=new re;m.position.y=.12,P.add(m);let S=_(Qt(`torso${e.build}`,()=>new ue(...n.torso,4,Math.min(n.torso[2],n.torso[0])*.42)),p);S.position.y=n.torso[1]/2,m.add(S);for(let it of[-1,1]){let rt=xe(Qt(`stripe${e.build}`,()=>new Se(.06,n.torso[1]*.8,n.torso[2]*.7)),xt(a),{cast:!1});rt.position.set(it*n.torso[0]*.5,n.torso[1]*.5,0),m.add(rt)}let E=Ly(i.lane??0,o);u.push(E);let I=new Ie(Qt("bib",()=>new pn(1,.78)),xt(16777215,{map:E})),N=Math.min(.42,n.torso[0]*.6);I.scale.setScalar(N),I.position.set(0,n.torso[1]*.45,n.torso[2]/2+.012),m.add(I);let q=new re;q.position.y=n.torso[1]+.02,m.add(q);let R=new re;q.add(R);let H=document.createElement("canvas");H.width=1024,H.height=512;let G=new Os(H);G.colorSpace=Ye,G.anisotropy=4,u.push(G);let nt=null,st=it=>{it!==nt&&(nt=it,Py(H.getContext("2d"),1024,512,l,e.face||"grin",it),G.needsUpdate=!0)};st("normal");let z=n.head,St=_(Qt(`head${z}`,()=>new ve(z,32,20).scale(1,.98,.96)),xt(16777215,{map:G}));St.position.y=z*.92,R.add(St);for(let it of[-1,1]){let rt=_(Qt(`ear${z}`,()=>new ve(z*.2,10,8).scale(.6,1,.8)),c,2.5);rt.position.set(it*z*.97,z*.9,0),R.add(rt)}let K=_(Qt(`nose${z}`,()=>new ve(z*.14,10,8)),c,2);K.position.set(0,z*.84,z*.97),R.add(K),At(e.hair,e.hat),lt(e.hat);let Y=[];for(let it of[-1,1]){let rt=new re;rt.position.set(it*(n.torso[0]/2+n.armR*.55),n.torso[1]-n.armR*1.1,0),m.add(rt);let at=_(Qt(`sleeve${e.build}`,()=>new ve(n.armR*1.65,14,10)),p);rt.add(at);let _t=_(Qt(`uarm${e.build}`,()=>new Ii(n.armR,n.arm/2-n.armR,4,10).translate(0,-n.arm/4,0)),c);rt.add(_t);let mt=new re;mt.position.y=-n.arm/2+n.armR*.4,rt.add(mt);let It=_(Qt(`farm${e.build}`,()=>new Ii(n.armR*.95,n.arm/2-n.armR,4,10).translate(0,-n.arm/4,0)),c);mt.add(It);let Pt=_(Qt(`hand${e.build}`,()=>new ve(n.hand,14,10).scale(1,1.1,.9)),c);Pt.position.y=-n.arm/2-n.hand*.4,mt.add(Pt),Y.push({sh:rt,el:mt,hand:Pt})}let W=[];for(let it of[-1,1]){let rt=new re;rt.position.set(it*n.torso[0]*.24,0,0),P.add(rt);let at=_(Qt(`thigh${e.build}`,()=>new Ii(n.legR*1.15,T-n.legR,4,10).translate(0,-T/2,0)),c);rt.add(at);let _t=_(Qt(`sleg${e.build}`,()=>new he(n.legR*1.6,n.legR*1.5,T*.5,12).translate(0,-T*.2,0)),d);rt.add(_t);let mt=new re;mt.position.y=-T,rt.add(mt);let It=_(Qt(`shin${e.build}`,()=>new Ii(n.legR,T-n.legR,4,10).translate(0,-T/2,0)),c);mt.add(It);let Pt=_(Qt(`sock${e.build}`,()=>new he(n.legR*1.12,n.legR*1.12,T*.25,10).translate(0,-T*.86,0)),xt(16777215),2.5);mt.add(Pt);let bt=new re;bt.position.y=-T,mt.add(bt);let Dt=_(Qt(`shoe${e.build}`,()=>new ue(...n.shoe,3,n.shoe[1]*.45).translate(0,-n.shoe[1]*.25,n.shoe[2]*.22)),x);bt.add(Dt);let Wt=xe(Qt(`sole${e.build}`,()=>new ue(n.shoe[0]*1.04,n.shoe[1]*.3,n.shoe[2]*1.03,2,.05).translate(0,-n.shoe[1]*.62,n.shoe[2]*.22)),f,{ol:2.5,olRef:9});bt.add(Wt);let Xt=xe(Qt(`swoosh${e.build}`,()=>new Se(n.shoe[0]*1.06,n.shoe[1]*.18,n.shoe[2]*.5).translate(0,-n.shoe[1]*.2,n.shoe[2]*.2)),xt(o),{cast:!1});bt.add(Xt),W.push({hp:rt,kn:mt,an:bt})}pt(e.accessory);let V={},Z=new Wo(new vr({transparent:!0,depthTest:!1}));Z.scale.setScalar(.9),Z.visible=!1,Z.renderOrder=20,v.add(Z);let ot=it=>{if(!it){Z.visible=!1;return}V[it]||(V[it]=Dy(it),u.push(V[it])),Z.material.map=V[it],Z.material.needsUpdate=!0,Z.visible=!0},gt=A+.12+n.torso[1]+.02+z*2;Z.position.y=gt+.45;let Tt=new Set([S,y,St,...Y.flatMap(it=>[it.hand]),...W.map(it=>it.an.children[0])]);for(let it of Y)it.sh.children.forEach(rt=>rt.isMesh&&Tt.add(rt));for(let it of W)it.hp.children.forEach(rt=>rt.isMesh&&Tt.add(rt));v.traverse(it=>{it.isMesh&&!it.userData.isOutline&&(it.castShadow=Tt.has(it))});function At(it,rt){let at=it||"short";if(at==="bald")return;let _t=(mt=1.07,It=.48)=>{let Pt=_(Qt(`hcap${z}${mt}${It}`,()=>new ve(z*mt,24,14,0,Math.PI*2,0,Math.PI*It)),g);return Pt.position.y=z*.92,Pt.rotation.x=-.32,R.add(Pt),Pt};if(at==="curly"||at==="afro"){let mt=Qt(`curly${z}`,()=>{let Pt=Nn(7),bt=[];for(let Dt=0;Dt<26;Dt++){let Wt=Pt()*Math.PI*.55,Xt=Pt()*Math.PI*2,Lt=new $(Math.sin(Wt)*Math.cos(Xt),Math.cos(Wt),Math.sin(Wt)*Math.sin(Xt)).multiplyScalar(z*1.02);Lt.z>z*.55&&Lt.y<z*.75||bt.push(new en(z*.33,1).translate(Lt.x,Lt.y,Lt.z-z*.08))}return gn(bt)}),It=_(mt,g);It.position.y=z*.98,R.add(It);return}if(rt==="beanie"||rt==="bucket"){_t(1.05,.5);return}if(_t(),at==="long"){let mt=_(Qt(`hlong${z}`,()=>new ue(z*1.8,z*1.6,z*.5,3,z*.2)),g);mt.position.set(0,z*.4,-z*.62),R.add(mt)}if(at==="ponytail"){let mt=new re;mt.position.set(0,z*1.35,-z*.85),R.add(mt);for(let It=0;It<3;It++){let Pt=_(Qt(`pt${z}${It}`,()=>new ve(z*(.32-It*.05),12,8)),g);Pt.position.set(0,-It*z*.32,-It*z*.18),mt.add(Pt)}R.userData.pony=mt}if(at==="bun"){let mt=_(Qt(`bun${z}`,()=>new ve(z*.38,14,10)),g);mt.position.set(0,z*2,-z*.2),R.add(mt)}if(at==="mohawk"||at==="spiky"){let mt=at==="mohawk"?5:9;for(let It=0;It<mt;It++){let Pt=_(Qt(`spk${z}`,()=>new ze(z*.2,z*.7,8)),g),bt=at==="mohawk"?0:It/mt*Math.PI*2,Dt=at==="mohawk"?-.9+It/(mt-1)*1.8:.6;Pt.position.set(Math.sin(bt)*Math.sin(Dt)*z,z*.92+Math.cos(Dt)*z*1.05,(at==="mohawk"?Math.sin(Dt):Math.cos(bt)*Math.sin(Dt))*z),Pt.lookAt(Pt.position.clone().multiplyScalar(3)),Pt.rotateX(Math.PI/2),R.add(Pt)}}}function lt(it){if(!it)return;let rt=xt(a==="#ffffff"||a==="#f8f8f8"?o:a),at=xt(o);if(it==="cap"||it==="visor"){if(it==="cap"){let mt=_(Qt(`capd${z}`,()=>new ve(z*1.1,24,12,0,Math.PI*2,0,Math.PI*.42)),rt);mt.position.y=z*.98,mt.rotation.x=-.18,R.add(mt)}else{let mt=_(Qt(`vband${z}`,()=>new cn(z*1,z*.12,8,24)),rt);mt.rotation.x=Math.PI/2-.25,mt.position.y=z*1.35,R.add(mt)}let _t=_(Qt(`brim${z}`,()=>new he(z*.75,z*.75,z*.08,20,1,!1,-Math.PI/2,Math.PI).scale(1.2,1,1.15)),at);_t.position.set(0,z*1.42,z*.62),_t.rotation.x=.12,R.add(_t)}else if(it==="beanie"){let _t=_(Qt(`bean${z}`,()=>new ve(z*1.1,24,14,0,Math.PI*2,0,Math.PI*.5).scale(1,1.15,1)),rt);_t.position.y=z*.96,_t.rotation.x=-.12,R.add(_t);let mt=_(Qt(`brim2${z}`,()=>new cn(z*1.05,z*.17,8,24)),at);mt.rotation.x=Math.PI/2-.12,mt.position.y=z*1.12,R.add(mt);let It=_(Qt(`bob${z}`,()=>new en(z*.3,1)),at);It.position.y=z*2.25,R.add(It)}else if(it==="headband"||it==="sweatband"){let _t=_(Qt(`hb${z}`,()=>new cn(z*1,z*.13,8,28)),rt);_t.rotation.x=Math.PI/2-.2,_t.position.y=z*1.3,R.add(_t);let mt=_(Qt(`hbt${z}`,()=>new ue(z*.2,z*.5,z*.08,2,.02)),rt);mt.position.set(.12,z*1.1,-z*1.05),mt.rotation.z=.5,R.add(mt),R.userData.tail=mt}else if(it==="bucket"){let _t=_(Qt(`buck${z}`,()=>new he(z*.8,z*1.02,z*.7,20)),rt);_t.position.y=z*1.75,R.add(_t);let mt=_(Qt(`buckb${z}`,()=>new he(z*1.5,z*1.5,z*.06,24)),at);mt.position.y=z*1.42,mt.rotation.x=.1,R.add(mt)}else if(it==="crown"||it==="tiara"){let _t=_(Qt(`crown${z}`,()=>new he(z*.7,z*.62,z*.5,8,1,!0)),xt("#ffd23f",{side:Oe}));_t.position.y=z*2,R.add(_t)}else if(it==="wizard"||it==="party"){let _t=_(Qt(`cone${z}`,()=>new ze(z*.8,z*1.8,16)),rt);_t.position.y=z*2.3,_t.rotation.z=.15,R.add(_t);let mt=_(Qt(`bob${z}`,()=>new en(z*.3,1)),at);mt.position.set(-z*.12,z*3.15,0),R.add(mt)}else if(it==="helmet"||it==="bike_helmet"){let _t=_(Qt(`helm${z}`,()=>new ve(z*1.14,20,12,0,Math.PI*2,0,Math.PI*.46).scale(1,.9,1.15)),rt);_t.position.y=z*1,R.add(_t)}else if(it==="santa"){let _t=_(Qt(`santa${z}`,()=>new ze(z*.95,z*1.6,16)),xt("#e8313f"));_t.position.y=z*2.2,_t.rotation.z=.5,R.add(_t);let mt=_(Qt(`santar${z}`,()=>new cn(z*.95,z*.2,8,24)),xt("#ffffff"));mt.rotation.x=Math.PI/2,mt.position.y=z*1.45,R.add(mt)}else{let _t=_(Qt(`cone${z}`,()=>new ze(z*.8,z*1.8,16)),rt);_t.position.y=z*2.3,R.add(_t)}}function pt(it){if(it){if(it==="sunglasses"||it==="glasses"){let rt=it==="sunglasses";for(let _t of[-1,1]){let mt=_(Qt(`lens${z}${rt}`,()=>new ue(z*.5,z*.32,z*.08,2,z*.06)),rt?xt("#141420"):xt("#cfefff"),2);mt.position.set(_t*z*.3,z*1.02,z*.98),mt.rotation.y=_t*.28,R.add(mt)}let at=xe(Qt(`bridge${z}`,()=>new Se(z*.3,z*.06,z*.06)),xt("#141420"),{cast:!1});at.position.set(0,z*1.06,z*1.04),R.add(at)}else if(it==="medal"){let rt=_(Qt("ribbon",()=>new cn(.2,.03,6,20,Math.PI)),xt("#2e9bff"),2);rt.rotation.z=Math.PI,rt.position.set(0,n.torso[1]+.02,n.torso[2]/2-.05),rt.rotation.x=-.3,m.add(rt);let at=_(Qt("medal",()=>new he(.11,.11,.04,16).rotateX(Math.PI/2)),xt("#ffd23f",{emissive:"#664400",emissiveIntensity:.3}),2.5);at.position.set(0,n.torso[1]-.22,n.torso[2]/2+.05),m.add(at),I.position.y-=.1,I.position.x=.12,I.scale.multiplyScalar(.8)}else if(it==="headphones"){let rt=_(Qt(`hp${z}`,()=>new cn(z*1.08,z*.07,6,24,Math.PI)),xt("#22202c"),2);rt.position.y=z*.95,R.add(rt);for(let at of[-1,1]){let _t=_(Qt(`hpc${z}`,()=>new he(z*.3,z*.3,z*.2,14).rotateZ(Math.PI/2)),xt(o),2.5);_t.position.set(at*z*1.02,z*.92,0),R.add(_t)}}else if(it==="sweatband"||it==="wristbands"||it==="watch")for(let rt of Y){let at=_(Qt(`wb${e.build}`,()=>new he(n.armR*1.3,n.armR*1.3,.12,10).translate(0,-n.arm/2+.1,0)),xt(it==="watch"?"#22202c":a),2);if(rt.el.add(at),it==="watch")break}else if(it==="scarf"){let rt=_(Qt("scarf",()=>new cn(.22,.08,8,18)),xt(a));rt.rotation.x=Math.PI/2,rt.position.y=.02,q.add(rt);let at=_(Qt("scarft",()=>new ue(.14,.5,.06,2,.03)),xt(a));at.position.set(.1,-.15,-.25),at.rotation.x=.5,q.add(at),R.userData.tail2=at}else if(it==="cape"){let rt=_(Qt(`cape${e.build}`,()=>new pn(n.torso[0]*1.2,n.torso[1]*1.5,1,4).translate(0,-n.torso[1]*.75,0)),xt(a,{side:Oe}),2),at=new re;at.position.set(0,n.torso[1],-n.torso[2]/2-.03),at.add(rt),m.add(at),R.userData.cape=at}else if(it==="backpack"){let rt=_(Qt(`bp${e.build}`,()=>new ue(n.torso[0]*.7,n.torso[1]*.7,.25,3,.08)),xt(a));rt.position.set(0,n.torso[1]*.5,-n.torso[2]/2-.12),m.add(rt)}else if(it==="moustache"||it==="mustache"){let rt=_(Qt(`mou${z}`,()=>new Ii(z*.09,z*.5,4,8).rotateZ(Math.PI/2)),xt("#3a2616"),2);rt.position.set(0,z*.7,z*.98),R.add(rt)}else if(it==="bowtie")for(let rt of[-1,1]){let at=_(Qt("bow",()=>new ze(.08,.16,4).rotateZ(Math.PI/2)),xt(a),2);at.position.set(rt*.08,n.torso[1]-.06,n.torso[2]/2+.03),at.rotation.z=rt>0?Math.PI:0,m.add(at)}else if(it==="tutu"){let rt=_(Qt(`tutu${e.build}`,()=>new he(n.torso[0]*.55,n.torso[0]*.9,.18,16,1,!0)),xt("#ff9bd2",{side:Oe}),2);rt.position.y=-.05,P.add(rt)}}}let X={phase:r()*6.28,t:r()*10,lean:0,j:{},look:0,lookPitch:0},Et=X.j,Mt=["hipLx","hipRx","kneeL","kneeR","ankL","ankR","shLx","shRx","shLz","shRz","elL","elR","twist","lean","bob","roll","headY","headX","bodyX","bodyY","bodyZ","hipSpread"];for(let it of Mt)Et[it]=0;let et={},Rt="idle",Vt=null,Nt=0;function B(it,rt=null){(it!==Rt||rt!==Vt)&&(Rt=it,Vt=rt,Nt=0)}function D(it,rt={}){X.t+=it,Nt+=it;let at=X.t;for(let Pt of Mt)et[Pt]=0;let _t="normal",mt=10;if(Rt==="run"||Rt==="jog"||Rt==="trudge"||Rt==="distracted"){let Pt=Math.max(.5,rt.speed??3.5),bt=Math.max(.2,rt.rate??1),Dt=Rt==="trudge",Wt=Dt?1.7:(2.55+.14*(Pt-3.5))*Math.pow(bt,.3)*(Rt==="jog"?.8:1);X.phase+=it*Math.PI*Wt;let Xt=X.phase,Lt=Math.sin(Xt),ne=Math.cos(Xt),qt=Dt?.4:Math.max(.45,Math.min(1,.62+.13*(Pt-3.5)));et.hipLx=-qt*Lt,et.hipRx=qt*Lt,et.kneeL=.2+(Dt?.5:1.35)*Math.max(0,ne)*(.7+qt*.3),et.kneeR=.2+(Dt?.5:1.35)*Math.max(0,-ne)*(.7+qt*.3),et.ankL=-.2*Lt,et.ankR=.2*Lt;let C=Dt?.3:.75*qt+.15;et.shLx=C*Lt,et.shRx=-C*Lt,et.shLz=-.18,et.shRz=.18,et.elL=Dt?-.5:-1.5,et.elR=Dt?-.5:-1.5,et.twist=.16*Lt,et.roll=.05*Lt,et.bob=(Dt?.03:.11)*(Math.abs(ne)-.4),et.lean=(Dt?.05:.16)+Math.max(-.25,Math.min(.45,(rt.slope??0)*1.6)),et.headX=-et.lean*.6,et.headY=-.08*Lt,mt=18,_t=rt.effort>.6?"effort":rt.effort>.3?"pant":"normal",Dt&&(et.headX=.35,et.lean=.25,_t="sad"),Rt==="distracted"&&(et.headY=rt.lookYaw??.9,et.headX=-.15,et.twist+=(rt.lookYaw??.9)*.3,_t="love")}else if(Rt==="ready")et.hipLx=-.5,et.hipRx=.35,et.kneeL=.6,et.kneeR=.5,et.lean=.35,et.bob=-.12,et.shLx=.5,et.shRx=-.6,et.elL=-1.3,et.elR=-1.3,et.headX=-.25,et.bob+=Math.sin(at*3)*.01,_t="effort";else if(Rt==="wave")et.shRz=2.7,et.elR=.2*Math.sin(at*9)-.25,et.shRx=Math.sin(at*9)*.25,et.shLz=-.3,et.elL=-.4,et.bob=Math.abs(Math.sin(at*4))*.05,et.headY=.1*Math.sin(at*2),_t="happy";else if(Rt==="pose"){let Pt=Vt||"flex";if(Pt==="flex")et.shLz=-1.5,et.shRz=1.5,et.elL=-1.9-Math.sin(at*6)*.15,et.elR=-1.9-Math.sin(at*6+1)*.15,et.shLx=-0,et.bob=-.06+Math.abs(Math.sin(at*3))*.03,et.hipSpread=.25,et.kneeL=.3,et.kneeR=.3,_t="effort";else if(Pt==="point")et.shRx=-1.5,et.elR=0,et.shLz=-.3,et.elL=-1.6,et.shLx=-.3,et.headX=-.1,et.lean=-.05,_t="happy",et.bob=Math.sin(at*5)*.02;else if(Pt==="stretch")et.hipRx=-.2,et.kneeR=2.3,et.shRx=.8,et.elR=-.6,et.shLz=-2.6,et.lean=.08+Math.sin(at*2)*.04,_t="smug";else if(Pt==="spin"){let bt=Math.min(1,Nt/1.1);et.bodyY=(1-(1-bt)**2)*Math.PI*4,et.shLz=bt<1?-1.3:-2.6,et.shRz=bt<1?1.3:2.6,et.bob=bt<1?Math.abs(Math.sin(at*7))*.2:Math.abs(Math.sin(at*5))*.12,_t="happy"}else Pt==="bow"?(et.lean=.75+Math.sin(at*2)*.05,et.shLx=.4,et.shRx=-1.2,et.elR=-1.6,et.shRz=.4,et.headX=-.2,_t="happy"):(et.shLz=-2.5,et.shRz=2.5,et.bob=Math.abs(Math.sin(at*6))*.25,_t="happy");_t==="smug"&&(_t="normal")}else if(Rt==="celebrate"){let Pt=Vt||"jump";if(Pt==="jump"){let bt=Math.abs(Math.sin(at*5.5));et.bob=bt*.55,et.shLz=-2.6-bt*.3,et.shRz=2.6+bt*.3,et.elL=-.2,et.elR=-.2,et.kneeL=et.kneeR=(1-bt)*.8,et.hipLx=et.hipRx=-(1-bt)*.4,_t="happy",mt=22}else if(Pt==="fist"){let bt=Math.sin(at*7);et.shRx=-2.6,et.elR=-.4+bt*.4,et.shLx=.4,et.elL=-1.8,et.bob=Math.abs(bt)*.08,et.lean=-.1,_t="happy"}else Pt==="kneel"?(et.lean=.85,et.kneeL=et.kneeR=.7,et.hipLx=et.hipRx=-.6,et.bob=-.25+Math.sin(at*7)*.025,et.shLx=et.shRx=-.55,et.elL=et.elR=-.1,et.shLz=-.15,et.shRz=.15,et.headX=-.6,_t="pant"):Pt==="collapse"?(et.bodyX=-Math.PI/2+.05,et.shLz=-2.2,et.shRz=2.2,et.hipSpread=.4,et.kneeL=.3+Math.max(0,Math.sin(at*9))*.4*(Math.sin(at*.7)>.6?1:0),et.kneeR=.2,_t="dead",mt=4):Pt==="shrug"&&(et.shLz=-.9,et.shRz=.9,et.elL=-1.4,et.elR=-1.4,et.shLx=-.5,et.shRx=-.5,et.headX=.1,et.headY=Math.sin(at*1.5)*.3,_t="sad")}else et.bob=Math.sin(at*2)*.015,et.shLz=-.18,et.shRz=.18,et.elL=-.25,et.elR=-.25,et.headY=Math.sin(at*.7)*.25,et.lean=.02,et.kneeL=et.kneeR=.05;rt.lookYaw!=null&&Rt!=="distracted"&&(et.headY+=rt.lookYaw);let It=1-Math.exp(-mt*it);for(let Pt of Mt){if(Pt==="bodyY"&&Rt==="pose"&&Vt==="spin"){Et[Pt]=et[Pt];continue}Et[Pt]+=(et[Pt]-Et[Pt])*It}if(Rt==="pose"&&Vt==="spin"||(Et.bodyY=Et.bodyY%(Math.PI*2),Et.bodyY>Math.PI&&(Et.bodyY-=Math.PI*2)),W[0].hp.rotation.set(Et.hipLx,0,-Et.hipSpread),W[1].hp.rotation.set(Et.hipRx,0,Et.hipSpread),W[0].kn.rotation.x=Et.kneeL,W[1].kn.rotation.x=Et.kneeR,W[0].an.rotation.x=Et.ankL-Et.kneeL*.35,W[1].an.rotation.x=Et.ankR-Et.kneeR*.35,Y[0].sh.rotation.set(Et.shLx,0,Et.shLz-0),Y[1].sh.rotation.set(Et.shRx,0,Et.shRz),Y[0].el.rotation.x=Et.elL,Y[1].el.rotation.x=Et.elR,m.rotation.set(Et.lean,Et.twist,0),P.rotation.set(0,-Et.twist*.5,Et.roll),P.position.y=A+Et.bob,R.rotation.set(Et.headX,Et.headY,0),U.rotation.set(Et.bodyX,Et.bodyY,Et.bodyZ),U.position.y+=((Rt==="celebrate"&&Vt==="collapse"?n.torso[2]*.5+.08:0)-U.position.y)*It,R.userData.pony&&(R.userData.pony.rotation.x=.4+Math.sin(X.phase*2)*.35),R.userData.tail&&(R.userData.tail.rotation.x=.6+Math.sin(X.phase*2)*.3),R.userData.cape&&(R.userData.cape.rotation.x=-.3-Math.min(1.1,(rt.speed??0)*.15)+Math.sin(at*8)*.08),rt.expr&&(_t=rt.expr),st(_t),Z.visible){Z.position.y=gt+.45+Math.sin(at*6)*.08;let Pt=.9+Math.sin(at*9)*.05;Z.scale.set(Pt,Pt,Pt)}}function ft(){for(let it of u)it.dispose?.();Z.material.dispose()}return{id:i.id,info:i,root:v,update:D,set:B,setPop:ot,setExpr:st,dispose:ft,height:gt,hipH:A,get state(){return Rt},get variant(){return Vt}}}var Uy=(i,t,e)=>{let n=Math.max(0,Math.min(1,(e-i)/(t-i)));return n*n*(3-2*n)};function dd(i,t,e){let n=i.timeMap,s={};e.forEach((y,m)=>s[y.id]=y.lane??m+1);let r=i.runners.length,o=Object.values(s),a=(Math.min(...o)+Math.max(...o))/2,l=Math.min(1.25,(Ue-1.6)/Math.max(1,r-1)),h=i.runners.map((y,m)=>{let S=Gr(n,y.officialS),E=((s[y.id]??m+1)-a)*l;return{...y,finishB:S,base:E,seed:m*1.7+.3}}),u=Object.fromEntries(h.map(y=>[y.id,y])),p=[...h].sort((y,m)=>y.officialS-m.officialS).map(y=>y.id),d=Object.fromEntries(p.map((y,m)=>[y,m+1])),c=u[p[0]],g=p.map(y=>u[y].officialS),M=u[p[0]].finishB,x=u[p.at(-1)].finishB,f=r>1&&g[1]-g[0]<=1.5,b=y=>Math.max(.05,(ss(n,y+.05)-ss(n,y-.05))/.1),_=new Map;function v(y){let m=Math.round(y*1e3);if(_.has(m))return _.get(m);let S=y<=0?0:ss(n,y),E=y<=0?4:b(y),I={b:y,raceS:S,rate:E,byId:{},order:[]};for(let H of h){let G=Rn(H.progress,S),nt=S>=H.officialS&&y>=H.finishB-1e-6,st=(Rn(H.progress,S+1)-Rn(H.progress,Math.max(0,S-1)))/(S>1?2:1);I.byId[H.id]={id:H.id,m:G,finished:nt,vRace:nt?0:st,place:d[H.id]}}for(let H of h){let G=I.byId[H.id],nt=G.m,st=H.base;st+=.22*Math.sin(G.m/85+H.seed);for(let K of h){if(K===H)continue;let Y=I.byId[K.id],W=G.m-Y.m;if(Math.abs(W)<4&&!G.finished&&!Y.finished){let V=(1-Math.abs(W)/4)*.32;st+=Math.sign(H.base-K.base||H.seed-K.seed)*V}}let z=0;if(G.finished){let K=y-H.finishB,Y=(Rn(H.progress,H.officialS)-Rn(H.progress,H.officialS-2))/2*b(H.finishB),W=Math.min(14,Math.max(4,Y)),V=1.6;nt=5e3+(K<V?W*(K-K*K/(2*V)):W*V/2+Math.min(10+d[H.id]*1.5,(K-V)*.9));let ot=(d[H.id]-(r+1)/2)*1.6;st=st+(ot-st)*Uy(0,2.5,K),z=K}let St=t.sample(nt,H.id);st*=1-St.div,st=Math.max(-Ue/2+.6,Math.min(Ue/2-.6,st)),Object.assign(G,{mVis:nt,x:St.x+St.rx*st,z:St.z+St.rz*st,y:t.heightAt(St.x+St.rx*st,St.z+St.rz*st)+.16,tx:St.tx,tz:St.tz,slope:St.slope,div:St.div,divInfo:St.divInfo,lat:st,post:z,distToFinish:Math.max(0,5e3-G.m)})}let N=h.filter(H=>I.byId[H.id].finished).sort((H,G)=>H.officialS-G.officialS),q=h.filter(H=>!I.byId[H.id].finished).sort((H,G)=>I.byId[G.id].m-I.byId[H.id].m||H.officialS-G.officialS);I.order=[...N,...q].map(H=>H.id),I.leader=I.byId[I.order[0]];let R=u[I.order[0]];for(let[H,G]of I.order.entries()){let nt=I.byId[G];if(nt.finished)nt.gapText=H===0?ma(u[G].officialS):`+${(u[G].officialS-c.officialS).toFixed(0)}s`;else if(H===0)nt.gapText="LEADER";else{let st=I.byId[I.order[0]].finished?c:R;nt.gapText=`+${Math.max(0,S-is(st.progress,nt.m)).toFixed(1)}s`}}return _.size>400&&_.clear(),_.set(m,I),I}return{stateAt:v,orderAt:y=>v(y).order,gapM:(y,m,S)=>{let E=v(S);return Math.abs((E.byId[y]?.m??0)-(E.byId[m]?.m??0))},finishedAt:(y,m)=>v(m).byId[y]?.finished,allFinishedAt:y=>y>x,firstFinishB:M,lastFinishB:x,photoFinish:f,finishOrder:p,place:d,byId:u,R:h,rateAt:b,durationS:n.durationS}}function ma(i){let t=Math.floor(i/60),e=Math.round(i-t*60);return`${t}:${String(e).padStart(2,"0")}`}function fd({plan:i,sim:t,backedIds:e=[],hasDiversion:n}){let s=i.events,r=t.lastFinishB+3.5,o=[],a=(T,A,y,m,S={})=>{y-A>=1.2&&o.push({type:T,a:A,b:y,prio:m,...S})},l=t.firstFinishB,h=s.filter(T=>T.type==="finish").sort((T,A)=>T.broadcastS-A.broadcastS),u=l-5.5;h.forEach((T,A)=>{let y=h[A-1];y&&T.broadcastS-y.broadcastS>7.5&&(a("front",y.broadcastS+2.2,T.broadcastS-3.2,10,{ids:[T.who],tag:"chaser"}),u=T.broadcastS-3.2),a("finishcam",u,T.broadcastS+2.2,10,{ids:[T.who]}),u=T.broadcastS+2.2}),t.photoFinish&&a("photo",l-.02,l+.02,11);let p=s.find(T=>T.type==="final_stretch");if(p){let T=p.broadcastS,A=l-5.5,y=Math.max(1,Math.round((A-T)/6)),m=["final","track","battle","final","drone","front"];for(let S=0;S<y;S++){let E=T+(A-T)*S/y,I=T+(A-T)*(S+1)/y,N=(E+I)/2,q=t.orderAt(N),R=m[S%m.length],H=[q[0]];R==="battle"&&(H=[q[0],q[1]]);let G=t.gapM(q[0],q[1],N)<12;S===0?(R="final",H=[q[0]]):G&&R!=="final"&&(R="battle",H=[q[0],q[1]]),a(R,E,I,5,{ids:H})}}let d=s.filter(T=>T.type==="diversion").sort((T,A)=>T.broadcastS-A.broadcastS);d[0]&&a("distracted",d[0].broadcastS+.6,Math.min(d[0].endBroadcastS-.4,d[0].broadcastS+6),9,{ids:[d[0].who],banner:!0});for(let T of s.filter(A=>A.type==="hill")){let A=t.rateAt(T.broadcastS),y=Math.max(2.6,Math.min(6,140/Math.max(1,A*3.4)));a("hill",T.broadcastS-1.4,T.broadcastS+y,7,{lap:T.lap})}let c=s.find(T=>T.type==="lap");c&&a("lapboard",c.broadcastS-2.6,c.broadcastS+2,6);for(let T of s.filter(A=>A.type==="lead_change"))a("battle",T.broadcastS-1.6,T.broadcastS+2.8,6,{ids:[T.to,T.from],tag:"lead"});let g=-1e9,M=s.filter(T=>T.type==="lead_change").map(T=>T.broadcastS);for(let T of s.filter(A=>A.type==="overtake")){let A=e.includes(T.by)||e.includes(T.on),m=t.orderAt(T.broadcastS+.5).indexOf(T.by)<=1;!A&&!m||T.broadcastS-g<11||M.some(S=>Math.abs(S-T.broadcastS)<6)||(g=T.broadcastS,a("battle",T.broadcastS-1.4,T.broadcastS+2.6,A?4:3,{ids:[T.by,T.on]}))}a("startgo",-3.2,2.4,12),a("heli",-8.5,-3.2,12),o.sort((T,A)=>A.prio-T.prio||T.a-A.a);let x=[],f=(T,A)=>!x.some(y=>T<y.b&&A>y.a);for(let T of o){if(f(T.a,T.b)){x.push(T);continue}let A=T.a,y=T.b;for(let m of x)A<m.b&&y>m.a&&(m.a<=A?A=m.b:y=Math.min(y,m.a));y-A>=2.2&&f(A,y)&&x.push({...T,a:A,b:y})}x.sort((T,A)=>T.a-A.a);let b=[],_=-8.5,v=0,U=["track","drone","front","chase","track","blimp","front","side"],P=(T,A)=>{let y=A-T;if(y<=.05)return;if(y<2.2&&b.length){b.at(-1).b=A;return}let m=Math.max(1,Math.round(y/5.2));for(let S=0;S<m;S++){let E=T+y*S/m,I=T+y*(S+1)/m,N=(E+I)/2,q=t.orderAt(N),R=U[v++%U.length],H=[q[0]],G=e.filter(nt=>!t.finishedAt(nt,N)&&t.gapM(q[0],nt,N)>25);G.length&&v%3===0?(R="chase",H=[G[v%G.length]]):R==="track"||R==="side"?H=q.filter(nt=>t.gapM(q[0],nt,N)<15).slice(0,3):(R==="drone"||R==="blimp")&&(H=q),t.allFinishedAt(N-2)&&(R="celebrate",H=t.finishOrder),b.push({type:R,a:E,b:I,prio:1,ids:H,filler:!0})}};for(let T of x)T.a>_&&P(_,T.a),b.push(T),_=Math.max(_,T.b);return _<r+30&&P(_,r+30),b}function pd({camera:i,C:t,sim:e,world:n,funfair:s}){let r={pos:new $,look:new $,fov:45},o={off:new $,lookOff:new $,fov:45,init:!1},a=null,l=new $,h=new $,u=new $(0,1,0),p={};function d(b,_){let v=e.stateAt(_),U=b.map(q=>v.byId[q]).filter(Boolean);if(!U.length)return{p:new $(v.leader.x,v.leader.y,v.leader.z),h:new $(v.leader.tx,0,v.leader.tz),m:v.leader.m,spread:0};let P=new $,T=0;for(let q of U)P.x+=q.x,P.y+=q.y,P.z+=q.z,T+=q.m;P.divideScalar(U.length),T/=U.length;let A=1e9,y=-1e9;for(let q of U)A=Math.min(A,q.m),y=Math.max(y,q.m);let m=U[0],S=Math.max(0,m.mVis-18),E=t.xzAt(S,m.id),I=t.xzAt(S+36,m.id),N=new $(I.x-E.x,0,I.z-E.z).normalize();return isFinite(N.x)||N.set(0,0,1),{p:P,h:N,m:T,spread:y-A,list:U}}let c=b=>new $(-b.z,0,b.x);function g(b,_,v){let U=(_-b.a)/Math.max(.01,b.b-b.a),P=n.anchors.finish,T=n.anchors.start,A,y,m=45,S=!0;switch(b.type){case"heli":{let E=new $(150,0,0),I=new $(T.x,T.y,T.z),N=Zc(Math.min(1,U*1.05)),q=-1.2+N*1.6,R=420-N*360;A=new $(E.x+Math.cos(q)*R,170-N*140,E.z+Math.sin(q)*R).lerp(new $(I.x-T.tx*40+T.rx*25,I.y+22,I.z-T.tz*40+T.rz*25),N*N),y=E.clone().setY(10).lerp(I,Math.min(1,N*1.3)),m=50,S=!1;break}case"startgo":{let E=new $(T.x,T.y,T.z),I=new $(T.tx,0,T.tz),N=c(I);if(_<.6)A=E.clone().addScaledVector(I,9.5+(_+3.2)*.25).addScaledVector(N,2.6).add(u.clone().multiplyScalar(1.9)),y=E.clone().add(u.clone().multiplyScalar(1.3)).addScaledVector(I,-1),m=42;else{let q=d(e.orderAt(_).slice(0,3),_);A=q.p.clone().addScaledVector(q.h,11).addScaledVector(c(q.h),3.5).add(u.clone().multiplyScalar(2.2)),y=q.p.clone().add(u.clone().multiplyScalar(1.2)),m=44}S=!1;break}case"track":case"side":{let E=d(b.ids,_),I=c(E.h),N=b.type==="side"?-1:1,q=8+Math.min(14,E.spread*.6);A=E.p.clone().addScaledVector(I,N*(q+2)).addScaledVector(E.h,3+Math.sin(U*3)*.6).add(u.clone().multiplyScalar(2.6)),y=E.p.clone().addScaledVector(E.h,1.5).add(u.clone().multiplyScalar(1.1)),m=42;break}case"front":case"final":{let E=d(b.ids,_),I=c(E.h),N=b.type==="final"?7.5-U*1.5:7;A=E.p.clone().addScaledVector(E.h,N).addScaledVector(I,b.type==="final"?1.4:-2).add(u.clone().multiplyScalar(b.type==="final"?.9:1.8)),y=E.p.clone().add(u.clone().multiplyScalar(1.35)).addScaledVector(E.h,-2),m=b.type==="final"?38:42;break}case"chase":{let E=d(b.ids,_),I=c(E.h);A=E.p.clone().addScaledVector(E.h,-7.5).addScaledVector(I,2.2).add(u.clone().multiplyScalar(3)),y=E.p.clone().addScaledVector(E.h,5).add(u.clone().multiplyScalar(1.2)),m=46;break}case"battle":{let E=d(b.ids,_),I=c(E.h),N=Math.floor(b.a*7)%2?1:-1,q=11+Math.min(10,E.spread*.7);A=E.p.clone().addScaledVector(E.h,q*.7).addScaledVector(I,N*q*.75).add(u.clone().multiplyScalar(2.3)),y=E.p.clone().add(u.clone().multiplyScalar(1.1)),m=42;break}case"drone":case"blimp":{let E=e.stateAt(_),I=E.byId[E.order[0]],N=E.order.map(z=>E.byId[z]).filter(z=>!z.finished),q=new $;for(let z of N.length?N:[I])q.add(new $(z.x,z.y,z.z));q.divideScalar(Math.max(1,N.length));let R=N.length?N[0].m-N.at(-1).m:0,H=d([E.order[0]],_),G=b.type==="blimp"?60+Math.min(110,R*.5):22+Math.min(60,R*.35),nt=b.type==="blimp"?70:32+Math.min(50,R*.3),st=q.clone().lerp(new $(I.x,I.y,I.z),.5);A=st.clone().addScaledVector(H.h,-nt).addScaledVector(c(H.h),nt*.6).add(u.clone().multiplyScalar(G)),y=st,m=46;break}case"hill":{let E=n.anchors.hillM,I=t.sample(E+105),N=new $(I.tx,0,I.tz),q=c(N);A=new $(I.x,I.y,I.z).addScaledVector(q,6.5).add(u.clone().multiplyScalar(2.2));let R=e.stateAt(_),H=R.order.map(z=>R.byId[z]).filter(z=>t.geoOf(z.m)>E-120&&t.geoOf(z.m)<E+200&&!z.finished),G=H.length?H[0]:null,nt=G?new $(G.x,G.y+1.1,G.z):new $(I.x,I.y+1,I.z);y=nt;let st=A.distanceTo(nt);m=Bu.clamp(2*Math.atan(5.5/st)*180/Math.PI,12,50),S=!0;break}case"lapboard":{let E=n.anchors.lapBoard,I=new $;E.getWorldPosition(I);let N=t.sample(2491),q=new $(N.tx,0,N.tz),R=c(q);A=new $(N.x,N.y,N.z).addScaledVector(R,-(4.6+3)).add(u.clone().multiplyScalar(2.4));let H=e.stateAt(_),G=H.order.map(st=>H.byId[st]).filter(st=>st.m>2350&&st.m<2600),nt=G.length?new $(G[0].x,G[0].y+1.2,G[0].z):I.clone().add(u.clone().multiplyScalar(2));y=I.clone().add(u.clone().multiplyScalar(1.8)).lerp(nt,.45),m=46;break}case"finishcam":{let E=new $(P.tx,0,P.tz),I=c(E),N=e.stateAt(_),q=b.ids?.[0]??N.order[0],R=N.byId[q];A=new $(P.x,P.y,P.z).addScaledVector(E,16).addScaledVector(I,-4).add(u.clone().multiplyScalar(2.6));let H=new $(P.x,P.y+2.5,P.z),G=R&&!R.finished?new $(R.x,R.y+1.3,R.z):H;y=H.clone().lerp(G,R&&!R.finished?Math.min(.85,15/Math.max(15,R.distToFinish)):.3),m=R&&!R.finished&&R.distToFinish>30?30:40;break}case"celebrate":{let E=e.stateAt(_),I=new $;for(let H of E.order)I.add(new $(E.byId[H].x,E.byId[H].y,E.byId[H].z));I.divideScalar(E.order.length);let N=new $(P.tx,0,P.tz),q=c(N),R=Math.sin(_*.15)*.5;A=I.clone().addScaledVector(N,-10*Math.cos(R)).addScaledVector(q,10*Math.sin(R)).add(u.clone().multiplyScalar(2.6)),y=I.clone().add(u.clone().multiplyScalar(1.2)),m=46,S=!1;break}case"photo":{let E=new $(P.tx,0,P.tz),I=c(E);A=new $(P.x,P.y,P.z).addScaledVector(I,8.5).add(u.clone().multiplyScalar(1.3)),y=new $(P.x,P.y+1.1,P.z),m=40,S=!1;break}case"distracted":{let E=d(b.ids,_),I=c(E.h),N=n.anchors.nearestOnRibbon(E.p.x,E.p.z),q=Math.sign((N[0]-E.p.x)*I.x+(N[1]-E.p.z)*I.z)||1,R=I.clone().multiplyScalar(q);if(U<.55){let H=E.h.clone().multiplyScalar(.55).addScaledVector(R,.85).normalize();A=E.p.clone().addScaledVector(H,5.2).add(u.clone().multiplyScalar(2)),y=E.p.clone().add(u.clone().multiplyScalar(1.85)),m=46}else A=E.p.clone().addScaledVector(E.h,-12).addScaledVector(R,-9).add(u.clone().multiplyScalar(7.5)),y=E.p.clone().addScaledVector(R,10).add(u.clone().multiplyScalar(2.5)),m=52;break}default:{let E=d(b.ids||[],_);A=E.p.clone().addScaledVector(E.h,-10).add(u.clone().multiplyScalar(4)),y=E.p.clone()}}return{pos:A,look:y,fov:m,damp:S}}let M=0;function x(b,_,v){let U=v.find(m=>b>=m.a&&b<m.b)||v.at(-1),P=U.type==="distracted"&&(b-U.a)/(U.b-U.a)>=.55?1:0,T=U!==a||P!==M;M=P,a=U;let A=g(U,b,_);if(!A)return{shot:U,cut:T};let y=t.heightAt(A.pos.x,A.pos.z)+.8;if(A.pos.y<y&&(A.pos.y=y),T||!o.init||!A.damp)r.pos.copy(A.pos),r.look.copy(A.look),o.fov=A.fov,o.init=!0;else{let m=1-Math.exp(-4.5*_),S=r.pos.clone().sub(r.look),E=A.pos.clone().sub(A.look);S.lerp(E,m),r.look.copy(A.look),r.pos.copy(r.look).add(S),o.fov+=(A.fov-o.fov)*m}return i.position.copy(r.pos),i.lookAt(r.look),Math.abs(i.fov-o.fov)>.01&&(i.fov=o.fov,i.updateProjectionMatrix()),{shot:U,cut:T}}function f(){o.init=!1,a=null}return{update:x,reset:f,evaluate:g,get shot(){return a},cam:r}}function Zc(i){return i<.5?2*i*i:1-Math.pow(-2*i+2,2)/2}var Ny=`
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
.mr-row .mr-pos sup{font-size:.45em;vertical-align:top;margin-left:1px}
.mr-row .mr-card{flex:1;height:calc(var(--u)*3.4);display:flex;align-items:center;padding:0 calc(var(--u)*.8) 0 0;background:rgba(20,22,48,.82);border:calc(var(--u)*.25) solid var(--ink);border-radius:calc(var(--u)*.6);transform:skewX(-10deg);overflow:hidden}
.mr-row .mr-card>*{transform:skewX(10deg)}
.mr-row .mr-chip{width:calc(var(--u)*1.6);align-self:stretch;margin-right:calc(var(--u)*.8)}
.mr-row .mr-name{flex:1;font-size:calc(var(--u)*1.45);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.mr-row .mr-gap{font-family:Nunito,"Arial Rounded MT Bold",sans-serif;font-weight:900;font-size:calc(var(--u)*1.2);color:#cfe0ff;margin-left:calc(var(--u)*.5)}
.mr-row.lead .mr-card{background:linear-gradient(90deg,rgba(255,210,63,.95),rgba(255,160,40,.92));color:var(--ink)}
.mr-row.lead .mr-gap{color:var(--ink)}
.mr-row.fin .mr-gap{color:#7dff9a}
.mr-row.lead.fin .mr-gap{color:var(--ink)}
.mr-badge{display:inline-block;background:#fff;color:var(--ink);border:2px solid var(--ink);border-radius:99px;font-size:calc(var(--u)*.95);padding:0 calc(var(--u)*.45);margin-left:calc(var(--u)*.35);transform:skewX(10deg);line-height:1.35}
.mr-map{position:absolute;right:calc(var(--u)*2.2);top:calc(var(--u)*1.8);width:calc(var(--u)*17);height:calc(var(--u)*21);padding:calc(var(--u)*.5)}
.mr-map canvas{position:relative;width:100%;height:100%;display:block}
.mr-mapwrap{position:absolute;inset:0;background:rgba(255,255,255,.88);border:calc(var(--u)*.32) solid var(--ink);border-radius:calc(var(--u)*1.2);box-shadow:0 calc(var(--u)*.45) 0 rgba(0,0,0,.3)}
.mr-banner{position:absolute;left:50%;top:22%;transform:translate(-50%,-50%) scale(0);text-align:center;white-space:nowrap;transition:transform .35s cubic-bezier(.3,1.7,.5,1)}
.mr-banner.on{transform:translate(-50%,-50%) scale(1)}
.mr-banner .mr-b1{display:inline-block;padding:calc(var(--u)*.4) calc(var(--u)*3);font-size:calc(var(--u)*5.6);line-height:1.05;background:var(--pink);border:calc(var(--u)*.4) solid var(--ink);border-radius:calc(var(--u)*1.2);transform:skewX(-10deg) rotate(-3deg);box-shadow:0 calc(var(--u)*.6) 0 rgba(0,0,0,.35)}
.mr-banner .mr-b1 span{display:inline-block;transform:skewX(10deg)}
.mr-banner .mr-b2{display:block;margin-top:calc(var(--u)*1);font-size:calc(var(--u)*2.1);-webkit-text-stroke:calc(var(--u)*.3) var(--ink);paint-order:stroke fill}
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
.mr-dim .mr-tower,.mr-dim .mr-top,.mr-dim .mr-map{opacity:0}
.mr-tower,.mr-top,.mr-map{transition:opacity .4s}
`,md=i=>`${i}<sup>${["th","st","nd","rd"][i%100>10&&i%100<14||i%10>3?0:i%10]}</sup>`,ky=i=>`${i}${["th","st","nd","rd"][i%100>10&&i%100<14||i%10>3?0:i%10]}`,Fy=i=>{i=Math.max(0,i);let t=Math.floor(i/60),e=Math.floor(i%60);return`${t}:${String(e).padStart(2,"0")}`},Nr=i=>String(i??"").replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t]),Oy=i=>{let t=parseInt(i.slice(1),16);return(t>>16&255)*.299+(t>>8&255)*.587+(t&255)*.114>165?"#1a1420":"#ffffff"};function gd(i,{runners:t,backedBy:e={},course:n,park:s,C:r}){if(!document.getElementById("mr-hud-css")){let W=document.createElement("style");W.id="mr-hud-css",W.textContent=Ny,document.head.appendChild(W)}let o=document.createElement("div");o.className="mr-hud mr-dim",o.innerHTML=`
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
    <div class="mr-photo"><div class="mr-flash"></div><div class="mr-line"></div><div class="mr-pf">PHOTO FINISH!</div></div>
    <div class="mr-results"></div>`,i.appendChild(o);let a=W=>o.querySelector(W),l={};o.querySelectorAll("[data-k]").forEach(W=>l[W.dataset.k]=W);let h=a(".mr-tower"),u={},p={};for(let W of t){let V=document.createElement("div");V.className="mr-row";let Z=(e[W.id]||[]).map(gt=>`<span class="mr-badge">${Nr(String(gt)).slice(0,10)}</span>`).join("");V.innerHTML=`<div class="mr-pos mr-num">1</div><div class="mr-card"><div class="mr-chip" style="background:${W.colour.primary};border-right:4px solid ${W.colour.secondary}"></div><div class="mr-name">${Nr(W.nickname)}${Z}</div><div class="mr-gap"></div></div>`,h.appendChild(V),u[W.id]={el:V,pos:V.querySelector(".mr-pos"),gap:V.querySelector(".mr-gap"),last:""};let ot=document.createElement("div");ot.className="mr-tag",ot.innerHTML=`<span class="mr-tp mr-num"></span><span class="mr-tn" style="background:${W.colour.primary};color:#fff">${Nr(W.nickname)}</span>`,ot.style.opacity="0",a(".mr-tags").appendChild(ot),p[W.id]={el:ot,pos:ot.querySelector(".mr-tp"),x:0,y:0,vis:!1}}let d=a(".mr-map canvas"),c=d.getContext("2d"),g=null,M=340,x=420;d.width=M,d.height=x;let f=n.points,b=1e9,_=1e9,v=-1e9,U=-1e9;for(let W of f)b=Math.min(b,W[0]),v=Math.max(v,W[0]),_=Math.min(_,W[2]),U=Math.max(U,W[2]);for(let W in r.diversions)for(let V of r.diversions[W])for(let Z of V.path)b=Math.min(b,Z[0]),v=Math.max(v,Z[0]),_=Math.min(_,Z[1]),U=Math.max(U,Z[1]);let P=26,T=Math.min((M-P*2)/(v-b),(x-P*2)/(U-_)),A=(M-(v-b)*T)/2,y=(x-(U-_)*T)/2,m=W=>A+(W-b)*T,S=W=>y+(W-_)*T;function E(){let W=document.createElement("canvas");W.width=M,W.height=x;let V=W.getContext("2d"),Z=(pt,X,Et,Mt)=>{V.beginPath(),pt.forEach((et,Rt)=>Rt?V.lineTo(m(et[0]),S(et[1])):V.moveTo(m(et[0]),S(et[1]))),V.strokeStyle=X,V.lineWidth=Et,V.lineJoin=V.lineCap="round",V.setLineDash(Mt||[]),V.stroke(),V.setLineDash([])},ot=(pt,X)=>{for(let Et of s.features)Et.kind===pt&&Et.closed&&(V.beginPath(),Et.pts.forEach((Mt,et)=>et?V.lineTo(m(Mt[0]),S(Mt[1])):V.moveTo(m(Mt[0]),S(Mt[1]))),V.fillStyle=X,V.fill())},gt=s.features.filter(pt=>pt.kind==="park").sort((pt,X)=>X.pts.length-pt.pts.length)[0];V.save(),V.beginPath(),gt.pts.forEach((pt,X)=>X?V.lineTo(m(pt[0]),S(pt[1])):V.moveTo(m(pt[0]),S(pt[1]))),V.fillStyle="#9be27a",V.fill(),V.restore(),ot("water","#49a6ff"),ot("track","#ff7a5c");for(let pt in r.diversions)for(let X of r.diversions[pt])Z(X.path,"#c79a5a",4,[6,6]);let Tt=[];for(let pt=0;pt<=r.LAP1_END_DRAW;pt+=10)Tt.push(r.baseXZ(pt));Z(Tt,"#1a1420",11),Z(Tt,"#8fa0c4",6);let At=[];for(let pt=r.MAP_TO-80;pt<=r.finishM;pt+=10)At.push(r.baseXZ(pt));Z(At,"#1a1420",11),Z(At,"#8fa0c4",6);let lt=r.rawExt(r.finishM);return V.fillStyle="#fff",V.strokeStyle="#1a1420",V.lineWidth=3,V.fillRect(m(lt[0])-7,S(lt[1])-7,14,14),V.strokeRect(m(lt[0])-7,S(lt[1])-7,14,14),V.fillStyle="#1a1420",V.fillRect(m(lt[0])-7,S(lt[1])-7,7,7),V.fillRect(m(lt[0]),S(lt[1]),7,7),W}g=E();let I=0,N=a(".mr-banner");function q(W,V="",Z="#ff3d8b",ot=2.4){N.querySelector(".mr-b1 span").textContent=W,N.querySelector(".mr-b1").style.background=Z,N.querySelector(".mr-b2").textContent=V,N.classList.remove("on"),N.offsetWidth,N.classList.add("on"),I=ot}let R="";function H(W,V){if(I>0&&(I-=W,I<=0&&N.classList.remove("on")),!!V){if(V.raceS!=null&&(l.clock.textContent=Fy(V.raceS)),V.leaderM!=null&&(l.lap.textContent=V.leaderM>=2500?"2":"1",l.dist.textContent=`${(Math.min(5e3,V.leaderM)/1e3).toFixed(1)} KM`,l.bar.style.width=`${Math.min(100,V.leaderM/5e3*100)}%`),V.order){let Z=h.clientHeight||0,ot=(h.querySelector(".mr-row")?.offsetHeight||40)+6;V.order.forEach((gt,Tt)=>{let At=u[gt.id];if(!At)return;At.el.style.transform=`translateY(${Tt*ot}px)`;let lt=`${Tt}|${gt.gapText}|${gt.finished}`;lt!==At.last&&(At.last=lt,At.pos.innerHTML=md(Tt+1),At.gap.textContent=gt.gapText,At.el.classList.toggle("lead",Tt===0),At.el.classList.toggle("fin",!!gt.finished))})}if(V.tags)for(let Z of V.tags){let ot=p[Z.id];ot&&(Z.visible!==ot.vis&&(ot.vis=Z.visible,ot.el.style.opacity=Z.visible?"1":"0"),Z.visible&&(ot.el.style.transform=`translate(${Z.x}px, ${Z.y}px) translate(-50%,-100%) scale(${Z.scale??1})`,ot.p!==Z.pos&&(ot.p=Z.pos,ot.pos.textContent=Z.pos?ky(Z.pos):"",ot.pos.style.display=Z.pos?"":"none")))}if(V.dots){c.clearRect(0,0,M,x),c.drawImage(g,0,0);for(let Z of[...V.dots].reverse())c.beginPath(),c.arc(m(Z.x),S(Z.z),Z.lead?11:9,0,7),c.fillStyle=Z.colour,c.fill(),c.lineWidth=3.5,c.strokeStyle="#1a1420",c.stroke(),Z.focus&&(c.beginPath(),c.arc(m(Z.x),S(Z.z),15,0,7),c.strokeStyle="#fff",c.lineWidth=3,c.stroke());V.camDot&&(c.save(),c.translate(m(V.camDot.x),S(V.camDot.z)),c.rotate(V.camDot.a),c.fillStyle="rgba(26,20,32,.6)",c.beginPath(),c.moveTo(0,0),c.lineTo(-10,-22),c.lineTo(10,-22),c.fill(),c.restore())}}}function G(W){o.classList.toggle("mr-dim",!!W)}function nt(W){let V=a(".mr-card3");if(!W){V.classList.remove("on");return}V.querySelector(".mr-lane span").textContent=W.lane??"",V.querySelector(".mr-lane").style.background=W.colour.primary,V.querySelector(".mr-info").style.background=`linear-gradient(180deg, ${W.colour.primary}, ${zy(W.colour.primary,-.25)})`,V.querySelector(".mr-nick").textContent=W.nickname,V.querySelector(".mr-nick").style.color="#fff",V.querySelector(".mr-tagl").textContent=W.tagline||"",V.querySelector(".mr-tagl").style.color=Oy(W.colour.primary)==="#ffffff"?"#fff":"#1a1420",V.classList.remove("on"),V.offsetWidth,V.classList.add("on")}function st(W){let V=a(".mr-count");V.textContent=W,V.classList.remove("pop"),V.offsetWidth,V.classList.add("pop")}function z(W){a(".mr-photo").classList.toggle("on",!!W)}function St(W,V){let Z=V[0]-W[0],ot=V[1]-W[1],gt=Math.hypot(Z,ot)||1,Tt=Z/gt,At=ot/gt,lt=W[0]-Tt*gt*.6,pt=W[1]-At*gt*.6,X=a(".mr-photo .mr-line");X.style.width=`${gt*2.2}px`,X.style.transform=`translate(${lt}px, ${pt}px) rotate(${Math.atan2(At,Tt)}rad)`}function K(W){let V=a(".mr-results");if(!W){V.classList.remove("on");return}V.innerHTML='<div class="mr-panel mr-rh"><div class="mr-unskew">RESULTS</div></div>'+W.map(Z=>`<div class="mr-rr"><span class="mr-num">${md(Z.place)}</span><span style="width:calc(var(--u)*1.2);height:calc(var(--u)*2.2);background:${Z.colour};border:2px solid #1a1420;border-radius:4px"></span><span>${Nr(Z.nickname)}</span><span class="mr-t">${Nr(Z.timeText||"")}</span></div>`).join(""),requestAnimationFrame(()=>V.classList.add("on"))}function Y(){o.remove()}return{root:o,update:H,showBanner:q,setDim:G,introCard:nt,countdown:st,photo:z,photoLine:St,results:K,dispose:Y}}function zy(i,t){let e=parseInt(i.slice(1),16),n=e>>16&255,s=e>>8&255,r=e&255,o=a=>Math.max(0,Math.min(255,Math.round(t<0?a*(1+t):a+(255-a)*t)));return`rgb(${o(n)},${o(s)},${o(r)})`}var ga=(i,t,e=12,n=!0)=>nn(256,256,(s,r,o)=>{for(let a=0;a<e;a++)s.fillStyle=a%2?i:t,n?s.fillRect(a*r/e,0,r/e+1,o):s.fillRect(0,a*o/e,r,o/e+1)});function xd(i,t,e,n){let s=Nn(42),r=new re;i.add(r);let o=[],a=[],l=(S,E=3)=>(ji(S,E,void 0,30),S),h=(S,E,I=3)=>xe(S,E,{ol:I,olRef:30}),u=[];for(let S=0;S<n.path.length;S++){let E=n.path[S],I=e.anchors.nearestOnRibbon(E[0],E[1]),N=Math.hypot(E[0]-I[0],E[1]-I[1]);u.push({x:(E[0]+I[0])/2,z:(E[1]+I[1])/2,gap:N})}let p=0;u.forEach((S,E)=>{E&&(p+=Math.hypot(S.x-u[E-1].x,S.z-u[E-1].z)),S.s=p});let d=p,c=S=>{let E=0;for(;E<u.length-2&&u[E+1].s<S;)E++;let I=u[E],N=u[E+1],q=Math.max(0,Math.min(1,(S-I.s)/Math.max(1e-6,N.s-I.s))),R=I.x+(N.x-I.x)*q,H=I.z+(N.z-I.z)*q,G=Math.hypot(N.x-I.x,N.z-I.z)||1;return{x:R,z:H,gap:I.gap+(N.gap-I.gap)*q,tx:(N.x-I.x)/G,tz:(N.z-I.z)/G,y:t.heightAt(R,H)}},g=u.filter(S=>S.gap>26),M=g.length?g[0].s:d*.25,x=g.length?g.at(-1).s:d*.75,f=S=>Array.from({length:S},(E,I)=>c(M+(I+.5)/S*(x-M))),b=(S,E,I=0)=>(S.position.set(E.x,E.y-.1,E.z),S.rotation.y=Math.atan2(E.tx,E.tz)+I,r.add(S),S),_={center:c((M+x)/2),rides:[]},v=f(7);{let S=v.slice(1,6).sort((V,Z)=>Z.gap-V.gap)[0],E=new re,I=Math.min(12,S.gap*.42),N=I+2.6,q=new he(.35,.5,N/Math.cos(.32)+1,8);for(let V of[-1,1])for(let Z of[-1,1]){let ot=h(q,xt("#ffffff"));ot.position.set(V*1.3,N/2,Z*Math.tan(.32)*N/2),ot.rotation.x=-Z*.32,E.add(ot)}let R=h(new ue(6,1,8,2,.3),xt("#2e9bff"));R.position.y=.5,E.add(R);let H=new re;H.position.y=N,E.add(H);let G=h(new cn(I,.32,8,48),xt("#ff3d8b"));G.rotation.y=Math.PI/2,G.position.x=.9,H.add(G);let nt=h(new cn(I,.32,8,48),xt("#ff3d8b"));nt.rotation.y=Math.PI/2,nt.position.x=-.9,H.add(nt);let st=h(new he(1,1,2.6,16).rotateZ(Math.PI/2),xt("#ffd23f"));H.add(st);let z=10,St=[],K=[];for(let V=0;V<z;V++){let Z=V/z*Math.PI*2,ot=h(new Se(.18,I,.18).translate(0,I/2,0),xt("#ffffff"),2);ot.rotation.x=Z,ot.position.x=.9,H.add(ot);let gt=ot.clone();gt.position.x=-.9,H.add(gt);let Tt=new re;Tt.position.set(0,Math.cos(Z)*I,Math.sin(Z)*I),H.add(Tt);let At=new re;Tt.add(At);let lt=["#ffd23f","#3ddc84","#2e9bff","#ff8a3d","#b07bff"][V%5],pt=h(new ue(1.7,1.3,1.5,2,.35),xt(lt));pt.position.y=-1.3,At.add(pt);let X=h(new ze(1.2,.7,4).rotateY(Math.PI/4),xt("#ffffff"),2);X.position.y=-.1,At.add(X),St.push(Tt);for(let Et=0;Et<3;Et++){let Mt=Z+Et/3*(Math.PI*2/z);K.push([.9,Math.cos(Mt)*I,Math.sin(Mt)*I],[-.9,Math.cos(Mt)*I,Math.sin(Mt)*I])}}let Y=new mn(new ve(.22,8,6),new Sn({color:16777215}),K.length),W=new Pe;K.forEach((V,Z)=>{W.position.set(...V),W.updateMatrix(),Y.setMatrixAt(Z,W.matrix),Y.setColorAt(Z,new Kt(["#fff27a","#ff7ac8","#7affff"][Z%3]))}),H.add(Y),b(E,S,Math.PI/2),a.push(V=>{H.rotation.x=V*.25;for(let Z of St)Z.rotation.x=-V*.25}),_.rides.push({kind:"wheel",obj:E,pos:new $(S.x,S.y+N,S.z),r:I}),S.used=!0}{let S=v.filter(K=>!K.used).sort((K,Y)=>Y.gap-K.gap)[0];S.used=!0;let E=new re,I=Math.min(6.5,S.gap*.28),N=ga("#ffffff","#ff4f6d",16);o.push(N);let q=h(new he(I,I+.3,.9,32),xt("#ffffff",{map:N}));q.position.y=.45,E.add(q);let R=new re;E.add(R);let H=h(new he(.7,.7,5,16),xt("#ffd23f"));H.position.y=3,R.add(H);let G=ga("#ffd23f","#ff3d8b",16);o.push(G);let nt=h(new ze(I+.8,2.8,16),xt("#ffffff",{map:G}));nt.position.y=6.6,R.add(nt);let st=h(new he(I+.8,I+.8,.7,16,1,!0),xt("#2e9bff",{side:Oe}));st.position.y=4.9,R.add(st);let z=h(new ve(.5,12,8),xt("#ff3d8b"));z.position.y=8.2,R.add(z);let St=[];for(let K=0;K<8;K++){let Y=K/8*Math.PI*2,W=I*.72,V=new re;V.position.set(Math.cos(Y)*W,0,Math.sin(Y)*W),V.rotation.y=-Y,R.add(V);let Z=h(new he(.06,.06,4.2,6),xt("#ffd23f"),1.5);Z.position.y=2.9,V.add(Z);let ot=new re;V.add(ot);let gt=["#ffffff","#ffd6f0","#d6f0ff","#fff2b0"][K%4],Tt=h(new ue(.7,.7,1.6,2,.3),xt(gt));ot.add(Tt);let At=h(new ue(.45,.9,.5,2,.2),xt(gt));At.position.set(0,.55,.7),At.rotation.x=.4,ot.add(At);let lt=h(new ue(.45,.45,.8,2,.2),xt(gt));lt.position.set(0,.95,1.05),ot.add(lt);let pt=h(new ue(.15,.8,.3,1,.06),xt(["#ff3d8b","#2e9bff","#3ddc84","#ff8a3d"][K%4]),2);pt.position.set(0,.75,.55),pt.rotation.x=.4,ot.add(pt);let X=h(new ue(.75,.2,.6,1,.08),xt("#ff3d8b"),2);X.position.y=.4,ot.add(X);for(let[Et,Mt]of[[-.22,.55],[.22,.55],[-.22,-.55],[.22,-.55]]){let et=h(new Se(.16,.7,.16),xt(gt),1.5);et.position.set(Et,-.55,Mt),et.rotation.x=Mt>0?-.5:.5,ot.add(et)}ot.rotation.y=Math.PI/2,St.push({horse:ot,ph:K*.8})}b(E,S),a.push(K=>{R.rotation.y=K*.6;for(let Y of St)Y.horse.position.y=2+Math.sin(K*2.2+Y.ph)*.35}),_.rides.push({kind:"carousel",obj:E,pos:new $(S.x,S.y+4,S.z),r:I})}{let S=v.filter(K=>!K.used).sort((K,Y)=>Y.gap-K.gap)[0];S.used=!0;let E=new re,I=15,N=ga("#ff3d3d","#ffffff",10,!1);o.push(N);let q=h(new he(1.6,2.6,I,16),xt("#ffffff",{map:N}));q.position.y=I/2,E.add(q);let R=h(new ze(2.6,3.4,16),xt("#2e9bff"));R.position.y=I+1.7,E.add(R);let H=h(new he(.06,.06,2,6),xt("#ffffff"),1.5);H.position.y=I+4.2,E.add(H);let G=h(new pn(1.2,.7).translate(.6,0,0),xt("#ffd23f",{side:Oe}),1.5);G.position.y=I+4.8,E.add(G);let nt=[],st=3.2;for(let K=0;K<=160;K++){let Y=K/160,W=Y*st*Math.PI*2,V=2.6+(1-Y)*-.8+1.6;nt.push(new $(Math.cos(W)*V,I-1-Y*(I-2),Math.sin(W)*V))}let z=h(new ia(new Sr(nt),220,.55,8,!1),xt("#ffd23f"));z.scale.y=1,E.add(z);let St=h(new ue(3,.3,2,2,.1),xt("#3ddc84"),2);St.position.set(nt.at(-1).x+1,.15,nt.at(-1).z),E.add(St),b(E,S),a.push(K=>{G.rotation.y=Math.sin(K*3)*.4}),_.rides.push({kind:"helter",obj:E,pos:new $(S.x,S.y+8,S.z),r:4})}let U=[["CANDYFLOSS","#ff9bd2"],["HOOK-A-DUCK","#57c7ff"],["DOUGHNUTS","#ffb347"],["COCONUT SHY","#8ee86b"],["TOFFEE APPLES","#ff5d5d"],["HOOK-A-DUCK","#57c7ff"]],P=[];[...v.filter(S=>!S.used),...f(13).filter((S,E)=>E%2===1)].slice(0,7).forEach((S,E)=>{let[I,N]=U[E%U.length],q=new re,R=E%2?1:-1,H=h(new ue(4.2,2.4,3,2,.2),xt("#fff6e0"));H.position.y=1.2,q.add(H);let G=h(new ue(4.4,1.1,.8,2,.15),xt(N));G.position.set(0,.55,1.7),q.add(G);let nt=ga("#ffffff",N,10);o.push(nt);let st=h(new Se(4.8,.18,2.4),xt("#ffffff",{map:nt}));st.position.set(0,2.9,1.4),st.rotation.x=.32,q.add(st);for(let Z of[-1,1]){let ot=h(new he(.09,.09,2.6,6),xt("#ffffff"),1.5);ot.position.set(Z*2.2,1.6,2.4),q.add(ot)}let z=ci(512,128,(Z,ot,gt)=>{Z.fillStyle="#1a1420",We(Z,0,0,ot,gt,30),Z.fill(),Z.fillStyle=N,We(Z,8,8,ot-16,gt-16,24),Z.fill(),Ke(Z,I,ot/2,gt/2+4,I.length>11?52:64,"#ffffff","#1a1420",.2)},o),St=xe(new ue(4.2,1.05,.3,2,.1),[xt(N),xt(N),xt(N),xt(N),xt("#ffffff",{map:z}),xt("#ffffff",{map:z})],{ol:2.5,olRef:30});if(St.position.set(0,3.7,.4),q.add(St),I==="CANDYFLOSS")for(let Z=0;Z<4;Z++){let ot=h(new en(.32,1),xt("#ff9bd2"),1.5);ot.position.set(-1.4+Z*.9,1.45,1.75),q.add(ot)}if(I==="HOOK-A-DUCK"){let Z=h(new he(1.6,1.6,.6,20),xt("#57c7ff"),2);Z.position.set(0,.3,3.6),q.add(Z);let ot=new re;ot.position.set(0,.7,3.6),q.add(ot);for(let gt=0;gt<6;gt++){let Tt=gt/6*Math.PI*2,At=h(new ve(.22,10,8),xt("#ffd23f"),1.5);At.position.set(Math.cos(Tt)*1.1,0,Math.sin(Tt)*1.1);let lt=h(new ve(.14,8,6),xt("#ffd23f"),1.2);lt.position.set(0,.22,.12),At.add(lt),ot.add(At)}P.push(ot)}let K=e.anchors.nearestOnRibbon(S.x,S.z),Y=Math.atan2(K[0]-S.x,K[1]-S.z),W=Math.min(S.gap*.3,7)*R,V=b(q,{...S,x:S.x+S.tz*W,z:S.z-S.tx*W,y:t.heightAt(S.x+S.tz*W,S.z-S.tx*W)});V.rotation.y=Y+(R>0?0:Math.PI)*0}),a.push(S=>{for(let E of P)E.rotation.y=S*.8});{let S=[],E=[],I=[],N=[],q=[];for(let z of[-1,1]){let St=null;for(let K=M-10;K<=x+10;K+=9){let Y=c(K),W=(Y.gap/2-6)*z,V=Y.x+Y.tz*W,Z=Y.z-Y.tx*W,ot=t.heightAt(V,Z),gt=new $(V,ot+4.2,Z),Tt=h(new he(.08,.1,4.3,6),xt("#ffffff"),1.5);if(Tt.position.set(V,ot+2.1,Z),r.add(Tt),St)for(let At=0;At<=10;At++){let lt=At/10,pt=St.clone().lerp(gt,lt);pt.y-=Math.sin(lt*Math.PI)*.7,S.push(pt),At<10&&(At%2?(E.push(pt.clone()),I.push(["#fff27a","#ff7ac8","#7affff","#9dff7a"][(At+Math.round(K))%4])):(N.push({v:pt.clone(),a:Math.atan2(-(gt.z-St.z),gt.x-St.x)}),q.push(["#ff3d8b","#ffd23f","#2e9bff","#3ddc84","#ff8a3d"][(At+Math.round(K/9))%5])))}St=gt}}let R=new Pe,H=new mn(new ve(.16,8,6),new Sn({color:16777215}),E.length);E.forEach((z,St)=>{R.position.copy(z),R.updateMatrix(),H.setMatrixAt(St,R.matrix),H.setColorAt(St,new Kt(I[St]))}),r.add(H);let G=new be;G.setAttribute("position",new ie([-.32,0,0,.32,0,0,0,-.65,0],3)),G.setAttribute("normal",new ie([0,0,1,0,0,1,0,0,1],3));let nt=new mn(G,xt("#ffffff",{side:Oe}),N.length);N.forEach((z,St)=>{R.position.copy(z.v),R.rotation.set(0,z.a,0),R.updateMatrix(),nt.setMatrixAt(St,R.matrix),nt.setColorAt(St,new Kt(q[St]))}),r.add(nt);let st=[];for(let z=0;z+1<S.length;z++)S[z].distanceTo(S[z+1])<3&&st.push(S[z],S[z+1]);r.add(new Fs(new be().setFromPoints(st),new qi({color:3355443}))),a.push(z=>{H.material.color.setScalar(.85+.15*Math.sin(z*6))})}{let S=c(M-4),E=ci(1024,256,(N,q,R)=>{N.fillStyle="#1a1420",We(N,0,0,q,R,60),N.fill(),N.fillStyle="#ff3d8b",We(N,10,10,q-20,R-20,52),N.fill(),Ke(N,"\u2605 FUNFAIR \u2605",q/2,R/2+6,120,"#ffe14d","#1a1420",.18)},o),I=xe(new ue(10,2.4,.4,2,.15),[xt("#ff3d8b"),xt("#ff3d8b"),xt("#ff3d8b"),xt("#ff3d8b"),xt("#ffffff",{map:E}),xt("#ffffff",{map:E})],{ol:3,olRef:30});I.position.set(S.x,S.y+7.5,S.z),I.rotation.y=Math.atan2(S.tx,S.tz)+Math.PI/2,r.add(I);for(let N of[-1,1]){let q=h(new he(.25,.3,7.6,8),xt("#ffd23f"));q.position.set(S.x+S.tz*4.5*N,S.y+3.8,S.z-S.tx*4.5*N),r.add(q)}}let A=[];for(let S=0;S<60;S++){let E=M+s()*(x-M),I=c(E),N=(s()-.5)*(I.gap-16),q=I.x+I.tz*N,R=I.z-I.tx*N;A.push({x:q,y:t.heightAt(q,R),z:R,yaw:s()*6.28})}function y(S){for(let E of a)E(S)}function m(){r.traverse(S=>{S.geometry&&S.geometry.dispose()});for(let S of o)S.dispose?.();i.remove(r)}return{group:r,update:y,dispose:m,anchors:_,crowd:A,at:c,s0:M,s1:x}}function yd(i,t,e,n,s,{camera:r}){let o=new re;i.add(o);let a=[],l=t.sample(t.finishM+28),h=new $(l.tx,0,l.tz),u=new $(l.rx,0,l.rz),p=new $(l.x,t.heightAt(l.x,l.z),l.z),d=Math.atan2(h.x,h.z);o.position.copy(p),o.rotation.y=d;let c=[{place:2,x:-2.3,hgt:1.3,col:"#c9d3e6"},{place:1,x:0,hgt:1.9,col:"#ffd23f"},{place:3,x:2.3,hgt:.9,col:"#e59a5c"}];for(let E of c){let I=ci(256,256,(q,R,H)=>{q.fillStyle="#2e6fe0",q.fillRect(0,0,R,H),q.fillStyle=E.col,q.fillRect(0,0,R,26),Ke(q,String(E.place),R/2,H/2+14,170,E.col,"#1a1420",.16)},a),N=xe(new ue(2.25,E.hgt,2,3,.12),[xt("#2e6fe0"),xt("#2e6fe0"),xt(E.col),xt("#2e6fe0"),xt("#ffffff",{map:I}),xt("#2e6fe0")],{ol:3.5,olRef:12});N.position.set(E.x,E.hgt/2,0),o.add(N),E.top=E.hgt}let g=ci(1024,256,(E,I,N)=>{E.fillStyle="#1a1420",We(E,0,0,I,N,50),E.fill(),E.fillStyle="#ff3d8b",We(E,10,10,I-20,N-20,42),E.fill(),Ke(E,"MARKRUN CHAMPIONS",I/2,N/2+6,100,"#ffffff","#1a1420",.16)},a),M=xe(new ue(9,2.2,.3,2,.1),[xt("#ff3d8b"),xt("#ff3d8b"),xt("#ff3d8b"),xt("#ff3d8b"),xt("#ffffff",{map:g}),xt("#ffffff",{map:g})],{ol:3,olRef:14});M.position.set(0,4.6,-2.4),o.add(M);for(let E of[-1,1]){let I=xe(new he(.14,.16,4.6,8),xt("#ffffff"),{ol:2,olRef:14});I.position.set(E*4.3,2.3,-2.4),o.add(I)}let x=s.length,f=[];for(let E of s){let I=n[E.runnerId];if(!I)continue;let N=c.find(H=>H.place===E.place),q=N?new $(N.x,N.top,.1):null,R;if(E.place===1?R=["celebrate","jump"]:E.place===2?R=["pose","flex"]:E.place===3?R=["celebrate","fist"]:E.place===x&&x>3?R=["celebrate","collapse"]:R=["celebrate","shrug"],!q){f.push({rr:I,o:E,pose:R});continue}b(I,q,R)}f.forEach((E,I)=>{let N=I%2?1:-1,q=Math.floor(I/2),R=E.pose[1]==="collapse",H=new $(N*(R?4.6:4.2+q*1.6),0,R?1.6:.6+q*.8);b(E.rr,H,E.pose,R?-N*Math.PI/2:0)});function b(E,I,N,q=0){let R=I.clone().applyAxisAngle(new $(0,1,0),d).add(p);I.y===0&&(R.y=t.heightAt(R.x,R.z)+.05),E.root.position.copy(R),E.root.rotation.set(0,d+q,0),E.set(...N),E.setPop(null)}let _=Nn(3),v=420,U=new mn(new pn(.16,.26),new Sn({side:Oe}),v),P=[],T=["#ff3d8b","#ffd23f","#2e9bff","#3ddc84","#ff8a3d","#ffffff","#b07bff"];for(let E=0;E<v;E++)P.push({x:(_()-.5)*14,y:_()*12,z:(_()-.5)*8,vy:1+_()*1.6,sp:_()*6,ph:_()*6.28}),U.setColorAt(E,new Kt(T[E%T.length]));U.frustumCulled=!1,o.add(U);let A=new Pe,y=0;function m(E,I){y+=E;for(let G=0;G<v;G++){let nt=P[G];nt.y-=nt.vy*E,nt.y<0&&(nt.y+=12),A.position.set(nt.x+Math.sin(y*1.3+nt.ph)*.5,nt.y,nt.z+Math.cos(y+nt.ph)*.4),A.rotation.set(y*nt.sp+nt.ph,y*nt.sp*.7,nt.ph),A.updateMatrix(),U.setMatrixAt(G,A.matrix)}U.instanceMatrix.needsUpdate=!0;let N=Math.sin(y*.18)*.4,q=15-Math.min(2.5,y*.2),R=new $(Math.sin(N)*q,3+Math.sin(y*.3)*.3,Math.cos(N)*q).applyAxisAngle(new $(0,1,0),d);r.position.copy(p).add(R);let H=new $(3.2,2.2,0).applyAxisAngle(new $(0,1,0),d).add(p);r.lookAt(H),r.fov!==42&&(r.fov=42,r.updateProjectionMatrix())}function S(){o.traverse(E=>{E.geometry&&E.geometry.dispose()}),U.material.dispose();for(let E of a)E.dispose?.();i.remove(o)}return{update:m,dispose:S,center:p}}var xa=8.5;function By(i,t={}){let{course:e,park:n,round:s,plan:r}=t,o=t.backedBy||{},a=Object.keys(o).filter(w=>(o[w]||[]).length),l=[...s?.runners||[]].sort((w,k)=>(w.lane??0)-(k.lane??0)),h=!!r?.runners?.some(w=>w.diversions&&w.diversions.length),u=new Ho({antialias:!0,powerPreference:"high-performance",preserveDrawingBuffer:!!t.preserveDrawingBuffer});u.setPixelRatio(Math.min(window.devicePixelRatio||1,t.maxPixelRatio??1.5)),u.outputColorSpace=Ye,u.toneMapping=Gn,u.shadowMap.enabled=!0,u.shadowMap.type=Lc;let p=u.domElement;p.style.cssText="position:absolute;inset:0;width:100%;height:100%;display:block",getComputedStyle(i).position==="static"&&(i.style.position="relative"),i.appendChild(p);let d=new Go;d.fog=new Vo(13496063,700,3200);let c=new on(45,16/9,.3,9e3),g=new aa(14676223,9420912,1.45);d.add(g);let M=new la(16774109,2.3),x=new $(-.45,.82,.38).normalize();M.castShadow=!0,M.shadow.mapSize.set(2048,2048),M.shadow.bias=-4e-4,M.shadow.normalBias=.03,M.shadow.radius=3,d.add(M),d.add(M.target);let f=Qu(e,n,r),b=id(d,f,{course:e,park:n,hasFunfair:h}),_=null;if(h){let w=r.runners.find(O=>O.diversions?.length).diversions[0],k=f.diversions[r.runners.find(O=>O.diversions?.length).id][0];_=xd(d,f,b,k||w)}let v=ad(f,b.anchors.crowdZones,5,b.onPath);_&&v.push(..._.crowd.map(w=>({...w,zone:"fair"})));let U=new Map;for(let w of v){let k=w.zone??"x";U.has(k)||U.set(k,[]),U.get(k).push(w)}let P=[...U.values()].map(w=>od(d,w)),T={update:(...w)=>P.forEach(k=>k.update(...w)),dispose:()=>P.forEach(w=>w.dispose())},A=dd(r,f,l),y={};for(let w of l){let k=ud(w);y[w.id]=k,d.add(k.root)}let m=l.map(w=>w.id),S=Object.fromEntries(l.map(w=>[w.id,w])),E=gd(i,{runners:l,backedBy:o,course:e,park:n,C:f}),I=fd({plan:r,sim:A,backedIds:a,hasDiversion:h}),N=pd({camera:c,C:f,sim:A,world:b,funfair:_}),q=null,R=[];for(let w of r.events||[])R.push({at:w.broadcastS,evt:{...w,kind:"event"}});for(let w of r.commentary||[])R.push({at:w.broadcastS,evt:{...w,kind:"commentary"}});R.sort((w,k)=>w.at-k.at);let H="idle",G=!1,nt=!1,st=-xa,z=0,St=null,K=null,Y=0,W=!1,V=!1,Z=0,ot=0,gt=new Set;function Tt(){let w=i.clientWidth||window.innerWidth,k=i.clientHeight||window.innerHeight;u.setSize(w,k,!1),c.aspect=w/k,c.updateProjectionMatrix(),Xc.uRes.value.set(w*u.getPixelRatio(),k*u.getPixelRatio())}let At=typeof ResizeObserver<"u"?new ResizeObserver(Tt):null;At?.observe(i),window.addEventListener("resize",Tt),Tt();let lt={};{let w=m.length;m.forEach((k,O)=>{let j=(O-(w-1)/2)*Math.min(1.25,(Ue-1.6)/Math.max(1,w-1)),ct=f.sample(0);lt[k]={x:ct.x+ct.rx*j-ct.tx*1.2,z:ct.z+ct.rz*j-ct.tz*1.2,yaw:Math.atan2(ct.tx,ct.tz)},lt[k].y=f.heightAt(lt[k].x,lt[k].z)+.16})}function pt(w="idle"){for(let k of m){let O=lt[k],j=y[k];j.root.position.set(O.x,O.y,O.z),j.root.rotation.set(0,O.yaw,0),w&&j.set(w),j.setPop(null)}}pt();let X=(w,k)=>w===1?"jump":w===2||w===3?"fist":w===k?"collapse":"kneel";function Et(w,k){let O=A.stateAt(Math.max(0,w)),j=m.length;for(let ct of m){let J=O.byId[ct],tt=y[ct];if(w<0)continue;tt.root.position.set(J.x,J.y,J.z);let dt=Math.atan2(J.tx,J.tz)+(J.finished&&J.post>2.4&&!(J.place>3&&J.post<4)?Math.PI*(J.place%2?1:-1)*.92:0),wt=tt.root.rotation.y,Ft=dt-wt;for(;Ft>Math.PI;)Ft-=2*Math.PI;for(;Ft<-Math.PI;)Ft+=2*Math.PI;tt.root.rotation.y=wt+Ft*Math.min(1,k*10);let kt={speed:J.vRace,rate:O.rate,slope:J.slope};if(J.finished){let zt=J.place;J.post<1.6?(tt.set("run"),kt.speed=3,kt.rate=1.2):zt>3&&J.post<4?tt.set("trudge"):tt.set("celebrate",X(zt,j)),tt.setPop(null)}else if(J.div>.3){tt.set("distracted");let zt=_?.anchors.rides.reduce((Gt,ae)=>!Gt||ae.pos.distanceToSquared(tt.root.position)<Gt.pos.distanceToSquared(tt.root.position)?ae:Gt,null);if(zt){let ae=Math.atan2(zt.pos.x-J.x,zt.pos.z-J.z)-tt.root.rotation.y;for(;ae>Math.PI;)ae-=2*Math.PI;for(;ae<-Math.PI;)ae+=2*Math.PI;kt.lookYaw=Math.max(-1.3,Math.min(1.3,ae))}tt.setPop(["!","heart","floss"][Math.floor((J.m-J.divInfo.fromM)/120)%3])}else{tt.set("run"),tt.setPop(null);let zt=f.geoOf(J.m);kt.effort=J.m>4300?.4+(J.m-4300)/700*.5:zt>1700&&zt<2060?.7:.1}tt.update(k,kt)}}let Mt=new $,et=null,Rt=-1,Vt=()=>{if(Rt!==z||!et){let w=p.getBoundingClientRect();et=[...E.root.querySelectorAll(".mr-tower, .mr-map, .mr-top")].map(k=>{let O=k.getBoundingClientRect();return{left:O.left-w.left,right:O.right-w.left,top:O.top-w.top,bottom:(k.classList.contains("mr-tower")?O.top+k.querySelectorAll(".mr-row").length*((k.querySelector(".mr-row")?.offsetHeight||40)+6):O.bottom)-w.top}}),Rt=z}return et};function Nt(w,k=!0){let O=p.clientWidth,j=p.clientHeight,ct=[];for(let tt of m){let dt=y[tt];Mt.set(dt.root.position.x,dt.root.position.y+dt.height+.55,dt.root.position.z);let wt=Mt.distanceTo(c.position);Mt.project(c);let Ft=k&&Mt.z<1&&Mt.z>-1&&Math.abs(Mt.x)<.95&&Mt.y<.82&&Mt.y>-.62&&wt>9.5&&wt<150,kt=(Mt.x*.5+.5)*O,zt=(-Mt.y*.5+.5)*j;Ft&&Vt().some(Gt=>kt>Gt.left-40&&kt<Gt.right+40&&zt>Gt.top-10&&zt<Gt.bottom+40)&&(Ft=!1),ct.push({id:tt,x:(Mt.x*.5+.5)*O,y:(-Mt.y*.5+.5)*j,visible:Ft,pos:w?w.order.indexOf(tt)+1:0,scale:Math.max(.7,Math.min(1.15,30/wt)),dist:wt})}ct.sort((tt,dt)=>tt.dist-dt.dist);let J=[];for(let tt of ct){if(!tt.visible)continue;let dt=(S[tt.id].nickname.length*11+60)*tt.scale;for(let wt=0;wt<8;wt++){let Ft=J.find(kt=>Math.abs(kt.x-tt.x)<(kt.tw+dt)/2&&Math.abs(kt.y-tt.y)<30*Math.max(kt.scale,tt.scale));if(!Ft)break;tt.y=Ft.y-31*Math.max(Ft.scale,tt.scale)}tt.tw=dt,J.push(tt)}return w?{raceS:w.raceS,leaderM:w.leader.m,tags:ct,order:w.order.map(tt=>({id:tt,gapText:w.byId[tt].gapText,finished:w.byId[tt].finished})),dots:w.order.map((tt,dt)=>({x:w.byId[tt].x,z:w.byId[tt].z,colour:S[tt].colour.primary,lead:dt===0,focus:N.shot?.ids?.includes(tt)}))}:{tags:ct}}function B(w,k){let O=Math.max(30,Math.min(220,k)),j=M.shadow.camera;j.right!==O&&(j.left=-O,j.right=O,j.top=O,j.bottom=-O,j.near=1,j.far=900,j.updateProjectionMatrix());let ct=2*O/M.shadow.mapSize.x,J=Math.round(w.x/ct)*ct,tt=Math.round(w.z/ct)*ct;M.target.position.set(J,w.y,tt),M.position.set(J+x.x*400,w.y+x.y*400,tt+x.z*400)}let D=["wave","flex","point","stretch","spin","bow"];function ft(w,k){let O=[...w.personality||w.id].reduce((j,ct)=>j+ct.charCodeAt(0),k);return D[O%D.length]}function it(w,k={}){H="intro",E.setDim(!0),E.results(null),bt(),pt("idle");let O=k.perRunnerS??t.introPerRunnerS??4.2,j=k.flyoverS??7;return K={t:0,idx:-1,per:O,fly:j,onDone:w,waiting:!1,segStart:0,minSeg:2.5,done:!1,group:!1},{flyoverS:j,perRunnerS:O,runners:m.slice()}}function rt(w){let k=K;if(!k)return;k.t+=w;let O=lt;if(k.idx===-1){let kt=Math.min(1,k.t/k.fly),zt=Zc(kt),Gt=f.sample(0),ae=new $(170,0,-40),we=2.2-zt*2,Be=520-zt*470,Ve=new $(ae.x+Math.cos(we)*Be,190-zt*170,ae.z+Math.sin(we)*Be),kn=new $(Gt.x+Gt.tx*22+Gt.rx*10,Gt.y+9,Gt.z+Gt.tz*22+Gt.rz*10);Ve.lerp(kn,zt*zt);let Fn=ae.clone().setY(15).lerp(new $(Gt.x,Gt.y+1,Gt.z),Math.min(1,zt*1.2));c.position.copy(Ve),c.lookAt(Fn),ne(50),kt>=1&&at();return}if(k.group){let kt=f.sample(0),zt=(k.t-k.segStart)/3;if(c.position.set(kt.x+kt.tx*(9+zt*2)+kt.rx*2,kt.y+2.2+zt*.6,kt.z+kt.tz*(9+zt*2)+kt.rz*2),c.lookAt(kt.x,kt.y+1.3,kt.z),ne(46),zt>=1&&!k.done){k.done=!0,E.introCard(null);let Gt=k.onDone;K=null,H="idle",Gt?.()}return}let j=m[k.idx],ct=O[j],J=k.t-k.segStart,tt=new $(Math.sin(ct.yaw),0,Math.cos(ct.yaw)),dt=new $(-tt.z,0,tt.x),wt=y[j].height,Ft=3.2+wt*.6-Math.min(.6,J*.12);c.position.set(ct.x+tt.x*Ft+dt.x*.9,ct.y+wt*.62,ct.z+tt.z*Ft+dt.z*.9),c.lookAt(ct.x-dt.x*1.25,ct.y+wt*.55,ct.z-dt.z*1.25),ne(40),!k.waiting&&J>=k.per&&at(),k.waiting==="released"&&J>=k.minSeg&&at()}function at(){let w=K;w.idx++,w.segStart=w.t;for(let ct of m)y[ct].set("idle");if(w.idx>=m.length){w.group=!0;for(let ct of m)y[ct].set("pose","point");E.introCard(null),setTimeout(()=>{},0);for(let ct of m)y[ct].set("wave");return}let k=m[w.idx];y[k].set(ft(S[k],w.idx)==="wave"?"wave":"pose",ft(S[k],w.idx)),t.introCards!==!1&&E.introCard(S[k]),w.waiting=!1;let j=t.onIntroRunner?.(k,w.idx);j&&typeof j.then=="function"&&(w.waiting=!0,j.then(()=>{K===w&&(w.waiting="released")},()=>{K===w&&(w.waiting="released")}))}function _t(w,k){H="race",E.setDim(!1),E.results(null),bt(),K=null,E.introCard(null),st=-xa,Z=0,ot=0,Y=0,W=!1,V=!1,gt.clear(),St={onEvent:w,onDone:k},pt("idle"),N.reset()}let mt=[[-3,"3"],[-2,"2"],[-1,"1"],[0,"GO!"]];function It(w){let k=O=>S[O]?.nickname||O;switch(w.type){case"lead_change":return["LEAD CHANGE!",`${k(w.to)} hits the front`,"#ff3d8b"];case"overtake":return!a.includes(w.by)&&!a.includes(w.on)&&A.stateAt(w.broadcastS).order.indexOf(w.by)>1?null:["OVERTAKE!",`${k(w.by)} passes ${k(w.on)}`,"#2e6fe0"];case"hill":return[w.lap===1?"THE HILL!":"THE HILL AGAIN!","Legs of jelly incoming","#3aa845"];case"lap":return["LAP 2 OF 2","One more time round!","#2e6fe0"];case"final_stretch":return["FINAL STRETCH!","Here comes the finish","#ff8a1f"];case"diversion":return gt.has("div")?null:(gt.add("div"),["DISTRACTED!",`${k(w.who)} has spotted the funfair`,"#b04bff"]);case"finish":return w.place===1&&!A.photoFinish?["WINNER!",k(w.who),"#ffb000"]:null;case"breakaway":return["BREAKAWAY!",`${k(w.who)} makes a break`,"#ff3d8b"];default:return null}}function Pt(w){if(Y>0){if(Y-=w,Y<=0){E.photo(!1),p.style.filter="",b.anchors.finishArch.visible=!0,N.reset();let O=A.finishOrder[0];E.showBanner("WINNER!",S[O]?.nickname||O,"#ffb000",2.6)}return}let k=st;for(st+=w;ot<mt.length&&st>=mt[ot][0];){let[O,j]=mt[ot++];if(E.countdown(j),St?.onEvent?.({kind:"countdown",n:j==="GO!"?0:Number(j),text:j,broadcastS:O}),O===-3)for(let ct of m)y[ct].set("ready")}for(;Z<R.length&&st>=R[Z].at;){let O=R[Z++].evt;try{St?.onEvent?.(O)}catch(j){console.error(j)}if(O.kind==="event"){let j=It(O);j&&E.showBanner(...j)}}A.photoFinish&&!W&&st>=A.firstFinishB&&(W=!0,st=A.firstFinishB,Y=t.photoFreezeS??2.8,E.photo(!0),p.style.filter="grayscale(0.55) sepia(0.35) contrast(1.12)",St?.onEvent?.({kind:"photo_finish",broadcastS:st,ids:A.finishOrder.slice(0,2)})),!V&&st>=A.lastFinishB+3.5&&(V=!0,St?.onDone?.())}function bt(){q&&(q.dispose(),q=null)}function Dt(w){H="podium",E.setDim(!0),K=null,bt();let k=w?.finishOrder?.length?[...w.finishOrder].sort((O,j)=>O.place-j.place):A.finishOrder.map((O,j)=>({runnerId:O,place:j+1,officialS:A.byId[O].officialS,timeText:ma(A.byId[O].officialS)}));q=yd(d,f,b,y,k,{camera:c}),t.podiumCard!==!1&&E.results(k.map(O=>({place:O.place,nickname:S[O.runnerId]?.nickname||O.runnerId,colour:S[O.runnerId]?.colour.primary||"#888",timeText:O.timeText||ma(O.officialS)})))}let Wt=performance.now(),Xt=0,Lt={frames:0,acc:0,fps:0};function ne(w){Math.abs(c.fov-w)>.01&&(c.fov=w,c.updateProjectionMatrix())}function qt(w,k=!1){z+=w;let O=null;G||(H==="intro"&&rt(w),H==="race"&&Pt(w));let j=G?0:w;if(H==="race"){if(Y>0){let tt=b.anchors.finish;b.anchors.finishArch.visible=!1,c.position.set(tt.x+tt.rx*9-tt.tx*.6,tt.y+6.4,tt.z+tt.rz*9-tt.tz*.6),c.lookAt(tt.x-tt.rx*.6-tt.tx*.6,tt.y+.8,tt.z-tt.rz*.6-tt.tz*.6),ne(42),c.updateMatrixWorld();let dt=new $(tt.x+tt.rx*3,tt.y+.05,tt.z+tt.rz*3).project(c),wt=new $(tt.x-tt.rx*3,tt.y+.05,tt.z-tt.rz*3).project(c);E.photoLine([(dt.x*.5+.5)*p.clientWidth,(-dt.y*.5+.5)*p.clientHeight],[(wt.x*.5+.5)*p.clientWidth,(-wt.y*.5+.5)*p.clientHeight])}else N.update(st,j,I);if(O=st>=0?A.stateAt(st):null,st<0)for(let tt of m)y[tt].update(j,{});else Et(st,Y>0?0:j);let J=N.shot?.type;B(N.cam.look,J==="drone"||J==="blimp"||J==="heli"?160:45)}else if(H==="podium"&&q){q.update(j,z);for(let J of m)y[J].update(j,{});B(q.center,40)}else{for(let J of m)y[J].update(j,{});if(H==="idle"){let J=f.sample(0),tt=z*.12;c.position.set(J.x+Math.sin(tt)*14,J.y+4.5,J.z+Math.cos(tt)*14),c.lookAt(J.x,J.y+1.2,J.z),ne(45)}B(new $(lt[m[0]]?.x??0,0,lt[m[0]]?.z??0),H==="intro"&&K?.idx===-1?160:40)}b.update(z),_?.update(z);let ct=m.map(J=>y[J].root.position);T.update(z,c.position,ct,H==="podium"?.9:null),E.update(w,H==="race"?Nt(O,st>-1):H==="intro"?{tags:[]}:Nt(null,!1)),k||u.render(d,c)}function C(w){if(nt)return;Xt=requestAnimationFrame(C);let k=Math.min(.1,(w-Wt)/1e3);Wt=w,Lt.frames++,Lt.acc+=k,Lt.acc>1&&(Lt.fps=Lt.frames/Lt.acc,Lt.frames=0,Lt.acc=0),qt(k)}t.manualLoop||(Xt=requestAnimationFrame(C));function L(){nt=!0,cancelAnimationFrame(Xt),At?.disconnect(),window.removeEventListener("resize",Tt),bt();for(let w of m)d.remove(y[w].root),y[w].dispose();T.dispose(),_?.dispose(),b.dispose(),E.dispose(),d.traverse(w=>{w.geometry&&w.geometry.dispose()}),hd(),ed(),u.dispose(),u.forceContextLoss?.(),p.remove()}let Q={seek(w,k=1.2){H="race",E.setDim(!1),K=null,bt(),St=St||{},E.introCard(null),E.results(null),E.photo(!1),p.style.filter="",N.reset();let O=Math.round(k*30);for(let j=O;j>=0;j--){if(st=w-j/30,Z=R.findIndex(ct=>ct.at>st),Z<0&&(Z=R.length),ot=mt.findIndex(ct=>ct[0]>st),ot<0&&(ot=mt.length),W=st>=A.firstFinishB,V=st>=A.lastFinishB+3.5,Y=0,st<-3)for(let ct of m)y[ct].set("idle");else if(st<0)for(let ct of m)y[ct].set("ready");if(j>0)if(N.update(st,1/30,I),st>=0)Et(st,1/30);else for(let ct of m)y[ct].update(1/30,{})}G=!0,qt(0)},introAt(w,k=1.5){if(it(()=>{},{}),G=!1,w<0){K.t=k,rt(0),qt(0),G=!0;return}for(K.t=K.fly,rt(0);K&&K.idx<w;)K.t=K.segStart+K.per+.01,rt(0);for(let O=0;O<k*30;O++){rt(1/30);for(let j of m)y[j].update(1/30,{})}G=!0,qt(0)},podiumAt(w=3){E.introCard(null),Dt(null);for(let k=0;k<w*30;k++){q.update(1/30,k/30);for(let O of m)y[O].update(1/30,{})}G=!0,qt(0)},photoAt(){this.seek(A.firstFinishB-.05),G=!1,W=!1;for(let w=0;w<3;w++)qt(1/30);G=!0,qt(0)},render(){qt(0)},lookFrom(w,k,O,j,ct,J,tt=45){H="debugcam",c.position.set(w,k,O),c.lookAt(j,ct,J),ne(tt),E.setDim(!0),u.render(d,c)},step(w,k=!0){qt(w,!k)},get mode(){return H},get b(){return st},shots:I,sim:A,C:f,director:N,renderer:u,scene:d,camera:c,info:()=>u.info,fps:()=>Lt.fps};return{playIntro:it,playRace:_t,showPodium:Dt,setPaused(w){G=!!w},dispose:L,hudRoot:E.root,get broadcastTime(){return st},get durationS(){return xa+A.lastFinishB+3.5},preRollS:xa,_debug:Q}}function vd(i){let e=Array.from({length:201},(r,o)=>Math.round(o*25/5e3*1500*1e3)/1e3),n=(i?.runners||[]).map(r=>({id:r.id,officialS:1500,progress:e,pacingSource:"intro"})),s=hh(i?.roundId||"intro",n);return s.events=[],s.commentary=[],s}var _a=new URLSearchParams(location.search),Xs=Math.max(.25,Number(_a.get("speed"))||1),Sd=_a.get("race")==="2d",Xn=i=>Math.round(i/Xs);window.__markrun={events:[],speed:Xs};var ui=i=>{window.__markrun.events.push({at:Date.now(),...i}),window.__markrun.events.length>500&&window.__markrun.events.shift()},Fr=Re("#stage"),pi=Re("#screen"),Or=Re("#hud-bottom"),ya=Re("#subs"),Gy=Re("#reactions"),kr=Re("#next-hint"),va=Re("#race-layer"),_e=null,Gs=null,Br=_a.has("autostart"),Di=_a.has("mute"),ee=ih(),fi=lh({onLine:Jy,onIdle:()=>{ee.duck(!1)}});function wd(){let i=Math.min(window.innerWidth/1920,window.innerHeight/1080);Fr.style.transform=`translate(-50%, -50%) scale(${i})`,Fr.style.transformOrigin="center center",Fr.style.left="50%",Fr.style.top="50%"}window.addEventListener("resize",wd);wd();var jc=null,$y=Promise.all([fetch("/data/course.json").then(i=>i.json()),fetch("/data/park.json").then(i=>i.json()).catch(()=>null)]).then(([i,t])=>(jc={course:i,park:t},jc)),Qc=nh({role:"tv",onStatus:i=>{Re("#conn").classList.toggle("hidden",i==="open"||i==="connecting")},onState:i=>Wy(i),onMessage:i=>{i.t==="react"?jy(i.playerId,i.emoji):i.t==="error"&&$s(i.msg,"red")}}),di=i=>Qc.send(i);function Vr(){if(!(Br&&ee.ready())){Br=!0,ee.unlock(),Re("#gesture").classList.add("gone");try{window.speechSynthesis?.getVoices()}catch{}Ma(),_e&&Td(_e,!0)}}Br&&Re("#gesture").classList.add("gone");Re("#gesture").addEventListener("click",Vr);window.addEventListener("pointerdown",()=>{ee.ready()||Vr()});function Ma(){let i=_e?.settings||{};ee.setVolume(i.volume??.8),ee.setMuted(Di),ee.setMusicEnabled(i.music!==!1),fi.setEnabled(!Di&&i.voice!==!1&&Xs<=1.5),fi.setVolume(Math.min(1,(i.volume??.8)+.1)),Re("#btn-mute").textContent=Di?"\u{1F507}":"\u{1F50A}"}Re("#btn-mute").addEventListener("click",i=>{i.stopPropagation(),Di=!Di,Ma()});Re("#btn-fs").addEventListener("click",i=>{i.stopPropagation(),Ed()});function Ed(){document.fullscreenElement?document.exitFullscreen?.():document.documentElement.requestFullscreen?.().catch(()=>{})}var _d;window.addEventListener("mousemove",()=>{document.body.classList.remove("hide-cursor"),clearTimeout(_d),_d=setTimeout(()=>document.body.classList.add("hide-cursor"),3e3)});window.addEventListener("keydown",i=>{if(i.target.closest?.("input, textarea"))return;if(!Br){Vr();return}ee.ready()||ee.unlock();let t=i.key;if(t==="m"||t==="M"){Di=!Di,Ma(),$s(Di?"Muted":"Sound on");return}if(t==="f"||t==="F"){Ed();return}if(t==="l"||t==="L"){_e?.phase==="BETTING"&&!_e.revealed&&(di({t:"forceLock"}),$s("Locking everyone in!"));return}(t===" "||t==="Enter"||t==="ArrowRight"||t==="n"||t==="N")&&(i.preventDefault(),th())});function th(){if(_e){if(_e.phase==="LOBBY"&&!_e.players.length){$s("Scan the QR code to join first!","red");return}if(_e.phase==="BETTING"&&!_e.revealed){$s("Waiting for everyone to lock in (press L to force it)");return}di({t:"advance",from:_e.phase,stage:_e.phase==="RESULTS"?_e.resultsStage:void 0})}}var Md=new Map;function Wy(i){let t=_e;_e=i,Ma();let e=new Map(i.players.map(s=>[s.id,s]));if(t)for(let s of i.players){let r=Md.get(s.id);r?!r.locked&&s.locked&&i.phase==="BETTING"?(ee.play("lock"),fi.say(Ky(s.name),Math.random()<.5?"jeff":"pam",{priority:1})):r.connected&&!s.connected&&setTimeout(()=>{let o=_e?.players.find(a=>a.id===s.id);o&&!o.connected&&$s(`${s.name}'s phone dropped out \u2014 it'll reconnect`,"red")},5e3):(ee.play("join"),i.phase==="LOBBY"&&fi.say(`${s.name} has entered the paddock!`,"pam",{priority:1}))}Md=e;let n=Xy(i);!Gs||Gs.key!==n?qy(n,i,t):Gs.update?.(i,t),Yy(i),Zy(i),Td(i)}function Xy(i){let t=i.round?.roundId||"";return i.phase==="BETTING"?`BETTING|${t}|${i.revealed?"reveal":"bet"}`:["INTRO","RACE","RESULTS","SCOREBOARD"].includes(i.phase)?`${i.phase}|${t}`:`${i.phase}|${i.gameNumber}`}function qy(i,t,e){try{Gs?.destroy?.()}catch(r){console.warn(r)}pi.innerHTML="",fi.clear(),ya.innerHTML="";let n=t.phase;document.body.className=document.body.className.replace(/\bphase-\w+/g,"").trim()+` phase-${n}`,document.body.classList.toggle("racing",n==="RACE"||n==="INTRO"&&!!hn),ui({type:"screen",key:i});let s={LOBBY:Qy,INTRO:tv,BETTING:t.revealed?rv:sv,RACE:ov,RESULTS:av,SCOREBOARD:dv,FINALE:fv}[n];Gs=s?s(t,e):{},Gs.key=i,n!=="RACE"&&n!=="RESULTS"&&n!=="INTRO"&&zr()}var bd=null;function Td(i,t=!1){if(!Br)return;let e={LOBBY:"lobby",BETTING:i.revealed?null:"betting",SCOREBOARD:"lobby",RESULTS:null,INTRO:null,RACE:null,FINALE:null}[i.phase];e===bd&&!t||(bd=e,e?ee.startMusic(e):ee.stopMusic(1.2))}function Ad(i){let t=[...i].sort((n,s)=>s.bankroll-n.bankroll),e=new Map;return t.forEach((n,s)=>e.set(n.id,s>0&&n.bankroll===t[s-1].bankroll?e.get(t[s-1].id):s+1)),e}function Yy(i){let t=["INTRO","BETTING","RACE"].includes(i.phase)&&!(i.phase==="BETTING"&&i.revealed);if(Or.classList.toggle("hidden",!t),document.body.classList.toggle("no-hud",!t),!t){Or.innerHTML="";return}let e=Ad(i.players),n=i.phase==="RACE"?i.bets||{}:{};Or.innerHTML=i.players.map(s=>{let r="";s.connected?i.phase==="BETTING"&&(r=s.locked?'<span class="pp-status locked">\u{1F512} LOCKED IN</span>':'<span class="pp-status think">\u{1F914} Thinking\u2026</span>'):r='<span class="pp-status off">\u{1F4F5} Offline</span>';let o=(n[s.id]||[]).map(a=>dn(i.round,a.type==="win"?a.runnerId:a.pick)).filter(Boolean).map(a=>`<i title="${Bt(a.nickname)}" style="background:${Bt(a.colour.primary)}"></i>`).join("");return`<div class="pp ${s.connected?"":"disconnected"}" data-pid="${s.id}">
      ${ns(e.get(s.id),"pp-ord")}
      ${An(s.avatar,70)}
      <div><div class="pp-name">${Bt(s.name)}</div><div class="pp-bank"><span class="coin"></span> ${Ne(s.bankroll)}</div>${o?`<div class="pp-backs">${o}</div>`:""}</div>
      ${r}
    </div>`}).join("")}function Zy(i){let t={INTRO:"Skip intros \u23ED",RACE:"Skip race \u23ED",RESULTS:"Next \u25B6",SCOREBOARD:i.roundNumber>=i.roundsPerGame?"Final results \u25B6":"Next round \u25B6",FINALE:"Play again \u21BB",BETTING:i.revealed?"Start race \u25B6":null}[i.phase];if(!t){kr.innerHTML="";return}kr.dataset.label!==t&&(kr.dataset.label=t,kr.innerHTML=`<button class="btn ${i.phase==="RACE"||i.phase==="INTRO"?"ghost small":"white"}">${t} <span style="opacity:.6;font-size:.7em">SPACE</span></button>`,kr.firstElementChild.addEventListener("click",e=>{e.stopPropagation(),Vr(),th()}))}function $s(i,t=""){let e=Xe(`<div class="t panel ${t==="red"?"red":"yellow"} anim-pop">${Bt(i)}</div>`),n=Re("#toast");n.innerHTML="",n.appendChild(e),setTimeout(()=>{e.parentNode&&e.remove()},3200)}function Jy(i){ee.duck(!0);let t=Xe(`<div class="sub"><span class="who ${i.speaker==="pam"?"pam":"jeff"}">${i.speaker==="pam"?"PAM":"JEFF"}</span><span>${Bt(i.text)}</span></div>`);for(ya.appendChild(t);ya.children.length>2;)ya.firstElementChild.remove();let e=Math.max(3e3,i.text.split(/\s+/).length*420+1500);setTimeout(()=>{t.classList.add("out"),setTimeout(()=>t.remove(),450)},e),ui({type:"line",text:i.text,speaker:i.speaker})}var Fe=(i,t="jeff",e=2)=>fi.say(i,t,{priority:e});function Ky(i){let t=[`${i} has locked in. No take-backs!`,`And ${i}'s money is down!`,`${i} has committed. Bold. Possibly foolish.`,`Bets are in from ${i}!`];return t[Math.floor(Math.random()*t.length)]}function jy(i,t){let e=_e?.players.find(o=>o.id===i),n=Or.querySelector(`[data-pid="${i}"]`),s;if(n&&!Or.classList.contains("hidden")){let o=n.getBoundingClientRect(),a=Fr.getBoundingClientRect(),l=a.width/1920;s=(o.left+o.width/2-a.left)/l+(Math.random()-.5)*160}else s=1920*(((_e?.players.findIndex(a=>a.id===i)??0)+1)/((_e?.players.length||1)+1))+(Math.random()-.5)*220;let r=Xe(`<div class="react" style="left:${Math.round(s-60)}px;--rot:${Math.round((Math.random()-.5)*40)}deg"><span class="e">${Bt(t)}</span>${e?An(e.avatar,46):""}</div>`);Gy.appendChild(r),ee.play("pop"),setTimeout(()=>r.remove(),3300)}function je(i,t){return new Promise(e=>{let n=setTimeout(e,Xn(i));t?.timers.push(n)})}function ba(){return{cancelled:!1,timers:[]}}function Hr(i){i.cancelled=!0,i.timers.forEach(clearTimeout)}async function hi(i,t,e=12e3){let n=Date.now();if(await je(t,i),!(Xs>1.5))for(;!i.cancelled&&fi.busy&&Date.now()-n<e;)await new Promise(s=>setTimeout(s,150))}var Qi=(i,t=120)=>ah(i,{size:t,idSuffix:Math.random().toString(36).slice(2,6)});function Rd(){return`<div class="clouds">${[0,1,2,3,4].map(i=>`<div class="cloud" style="top:${40+i*70}px;width:${180+i%3*70}px;height:${50+i%2*18}px;animation-duration:${70+i*17}s;animation-delay:-${i*19}s"></div>`).join("")}</div>
  <svg class="hills" viewBox="0 0 1920 260" preserveAspectRatio="none"><path d="M0 150 Q 240 40 520 120 T 1040 110 T 1500 90 T 1920 130 V260 H0Z" fill="#2ec27e" stroke="#14183c" stroke-width="6"/><path d="M0 200 Q 300 140 640 190 T 1280 180 T 1920 190 V260 H0Z" fill="#169c5b" stroke="#14183c" stroke-width="6"/></svg>`}var Jc=[100,250,500,1e3,2e3,5e3],Kc=[0,60,90,120,180];function Qy(i){let t=Xe(`<div class="lobby">
    ${Rd()}
    <div class="logo"><div class="word outlined">MARK<span class="r">RUN</span></div><br><div class="ribbon"><span>THE FINSBURY PARK FORM GUIDE</span></div></div>
    <div class="tagline">Real parkruns. Real Mark. Fake money. \u{1F377}</div>
    <div class="qr-card panel white"><div class="qr"></div><div class="scan">\u{1F4F1} SCAN TO JOIN</div><div class="url"></div></div>
    <div class="slots"></div>
    <div class="settings panel cream"></div>
    <div class="start-wrap"></div>
  </div>`);pi.appendChild(t),Re(".qr",t).innerHTML=i.qrSvg||"",Re(".url",t).textContent=(i.joinUrl||"").replace(/^https?:\/\//,""),Fe(i.players.length?"Welcome back to MARKRUN!":"Welcome to MARKRUN! Grab your phones and scan the code.","jeff",1);let e=(r,o,a,l)=>`<div class="set" data-k="${o}"><div class="lbl">${r}</div><div class="ctl-row">${l.replace("{val}",`<span class="val">${a}</span>`)}</div></div>`;function n(r){let o=[],a=Math.max(2,r.players.length);for(let p=0;p<a;p++){let d=r.players[p];if(d){let c=d.connected?d.ready?'<span class="tag" style="background:var(--grass);color:#fff">\u2713 READY</span>':'<span class="tag">joined</span>':'<span class="tag" style="background:var(--tomato);color:#fff">\u{1F4F5} offline</span>';o.push(`<div class="slot panel slant ${s.has(d.id)?"":"joined"}" style="background:${Bt(d.avatar.colour)}"><div class="unslant" style="display:flex;align-items:center;gap:24px;width:100%">${An(d.avatar,92)}<div><div class="sname">${Bt(d.name)}</div><div class="ssub">${Ne(d.bankroll)} to gamble</div></div><span class="slot-badge">${c}</span><button class="btn small white kick" data-kick="${d.id}" title="Remove player">\u2715</button></div></div>`)}else o.push(`<div class="slot panel slant empty"><div class="unslant" style="display:flex;align-items:center;gap:24px"><div class="ghost-av">?</div><div><div class="sname">Player ${p+1}</div><div class="ssub">Scan the code to take this seat</div></div></div></div>`)}s=new Set(r.players.map(p=>p.id)),Re(".slots",t).innerHTML=o.join(""),Re(".slots",t).classList.toggle("many",a>2);let l=r.settings,h=Math.round((l.volume??.8)*10);Re(".settings",t).innerHTML=[e("Starting pot","startingBankroll",Ne(l.startingBankroll),'<button class="btn small white" data-d="-1">\u2212</button>{val}<button class="btn small white" data-d="1">+</button>'),e("Rounds","roundsPerGame",l.roundsPerGame,'<button class="btn small white" data-d="-1">\u2212</button>{val}<button class="btn small white" data-d="1">+</button>'),e("Bet timer","betTimer",l.betTimer?`${l.betTimer}s`:"Off",'<button class="btn small white" data-d="-1">\u2212</button>{val}<button class="btn small white" data-d="1">+</button>'),e("Drinking","drinkingMode","",`<button class="btn small toggle ${l.drinkingMode?"on":"off"}" data-toggle>${l.drinkingMode?"\u{1F37A} ON":"OFF"}</button>`),e("Voice","voice","",`<button class="btn small toggle ${l.voice?"on":"off"}" data-toggle>${l.voice?"\u{1F399}\uFE0F ON":"OFF"}</button>`),e("Music","music","",`<button class="btn small toggle ${l.music?"on":"off"}" data-toggle>${l.music?"\u{1F3B5} ON":"OFF"}</button>`),e("Volume","volume",`${h*10}%`,'<button class="btn small white" data-d="-1">\u2212</button>{val}<button class="btn small white" data-d="1">+</button>')].join("");let u=r.players.length&&r.players.every(p=>p.ready);Re(".start-wrap",t).innerHTML=`<button class="btn green ${r.players.length?"pulse":""}" data-start ${r.players.length?"":"disabled"}>${r.players.length?r.players.length===1?"START SOLO \u25B6":"LET'S RACE \u25B6":"Waiting for players\u2026"}</button>
      <div class="hint">${r.players.length?u?"Everyone is ready!":"Press SPACE \u2014 or everyone taps READY on their phone":"Up to 4 players \xB7 best with 2"}</div>`}let s=new Set(i.players.map(r=>r.id));return n(i),t.addEventListener("click",r=>{Vr();let o=r.target.closest("button");if(!o)return;if(ee.play("tick"),o.dataset.start!==void 0)return th();if(o.dataset.kick)return di({t:"kick",playerId:o.dataset.kick});let a=o.closest("[data-k]")?.dataset.k;if(!a)return;let l=_e.settings;if(o.dataset.toggle!==void 0)return di({t:"settings",settings:{[a]:!l[a]}});let h=Number(o.dataset.d),u;if(a==="startingBankroll"){let p=Jc.indexOf(l[a]);u=Jc[Math.max(0,Math.min(Jc.length-1,(p<0?2:p)+h))]}else if(a==="betTimer"){let p=Kc.indexOf(l[a]);u=Kc[Math.max(0,Math.min(Kc.length-1,(p<0?0:p)+h))]}else a==="volume"?u=Math.round(Math.max(0,Math.min(1,(l.volume??.8)+h*.1))*10)/10:u=l[a]+h;di({t:"settings",settings:{[a]:u}})}),{update:r=>n(r)}}var hn=null,Ws=null;function zr(){if(hn){try{hn.dispose()}catch(i){console.warn(i)}hn=null,Ws=null,va.innerHTML="",document.body.classList.remove("racing")}}async function Cd(i,{allow2d:t=!0}={}){zr();let e=jc||await $y,n={course:e.course,park:e.park,speed:Xs,...i};if(Vs?.createRaceView&&!Sd)try{return hn=await Vs.createRaceView(va,n),Ws="3d",window.__markrun.raceView=hn,ui({type:"raceview",kind:"3d"}),hn}catch(s){console.error("3D race view failed, using 2D fallback",s),ui({type:"raceview-error",msg:String(s?.message||s)}),va.innerHTML=""}return!t||!i.plan?null:(hn=uh(va,n),Ws="2d",window.__markrun.raceView=hn,ui({type:"raceview",kind:"2d"}),hn)}function tv(i){let t=ba(),e=i.round,n=[...e.runners].sort((p,d)=>p.lane-d.lane),s=Xe(`<div class="intro">${Rd()}<div class="tint"></div><div class="stagebox"></div><div class="intro-dots">${n.map(()=>"<i></i>").join("")}</div></div>`);pi.appendChild(s);let r=Re(".stagebox",s),o=(i.bailouts||[]).map(p=>`${Bt(i.players.find(d=>d.id===p.playerId)?.name||"")} got a ${Ne(p.amount)} bailout from the Bank of Mum &amp; Dad`).join("<br>"),a=`<div class="title-card"><div class="anim-pop"><div class="rn outlined white">ROUND ${e.number} <span style="opacity:.8">of ${i.roundsPerGame}</span></div><div class="rt outlined" style="font-size:${e.title.length>22?104:150}px">${Bt(e.title)}</div><div class="rs">${n.length} runners. All of them Mark. Only one of them is having a good day.</div>${o?`<div class="bail panel yellow">\u{1F4B8} ${o}</div>`:""}</div></div>`,l=p=>`<div class="rcard-wrap anim-left"><div class="rcard panel slant" style="background:${Bt(p.colour.primary)}"><div class="rp">${Qi(p,300)}</div><div class="unslant">
        <div class="nick outlined">${Bt(p.nickname)}</div>
        <div class="tagl">${Bt(p.tagline||"")}</div>
        ${p.intro?`<div class="introline">\u201C${Bt(p.intro)}\u201D</div>`:""}
        ${p.publicClue?`<div class="clue"><span class="k">CLUE</span><span>${Bt(p.publicClue.text)}</span></div>`:""}
      </div><div class="lane">LANE ${p.lane}</div><div class="odds-badge"><div class="ol">ODDS</div><div class="ov outlined">${Bt(p.odds?.display||"")}</div></div></div></div>`;async function h(p){let d=n[p];zn(".intro-dots i",s).forEach((c,g)=>c.classList.toggle("on",g===p)),r.innerHTML=l(d),ee.play("whoosh"),Fe(d.intro||`${d.nickname}. ${d.tagline||""}`,p%2?"pam":"jeff",3),await hi(t,4800,12e3)}async function u(){t.cancelled||(zn(".intro-dots i",s).forEach(p=>p.classList.remove("on")),r.innerHTML='<div class="bets-open"><div class="anim-pop"><div class="big outlined">BETS ARE OPEN!</div><div class="sub2 outlined white thin">\u{1F4F1} Grab your phones \u2014 your secret clues are waiting \u{1F92B}</div></div></div>',ee.play("kaching"),Fe("The book is open! Check your phones for your secret clues.","pam",3),await hi(t,3200,6e3),t.cancelled||di({t:"introDone",roundId:e.roundId}))}return(async()=>{if(!Sd&&Vs?.createRaceView){let p=new Map(n.map((c,g)=>[c.id,g])),d=await Cd({round:e,plan:vd(e),backedBy:{},introCards:!1,onIntroRunner:c=>t.cancelled?void 0:h(p.get(c)??0)},{allow2d:!1}).catch(()=>null);if(d&&!t.cancelled){document.body.classList.add("racing"),s.classList.add("over3d"),s.querySelector(".clouds")?.remove(),s.querySelector(".hills")?.remove(),r.innerHTML=a,ee.play("fanfare"),Fe(`Welcome to Finsbury Park for round ${e.number}: ${e.title}!`,"jeff",3);let c=!1,g=setTimeout(()=>{c||(c=!0,u())},Xn(15e4));t.timers.push(g);try{d.playIntro(()=>{c||(c=!0,clearTimeout(g),u())})}catch(M){console.error(M),c=!0,u()}return}}if(!t.cancelled){r.innerHTML=a,ee.play("fanfare"),Fe(`Welcome to Finsbury Park for round ${e.number}: ${e.title}!`,"jeff",3),await hi(t,4200,7e3);for(let p=0;p<n.length&&!t.cancelled;p++)await h(p),t.cancelled||await je(700,t);await u()}})(),{destroy:()=>{Hr(t)}}}function ev(i,t=[]){return`<div class="rc panel" data-rid="${i.id}">
    <div class="top stripe" style="--c1:${Bt(i.colour.primary)};--c2:${Bt(nv(i.colour.primary))}"><div class="lane">${i.lane}</div><div class="rp">${Qi(i,170)}</div></div>
    <div class="odds"><span class="num">${Bt(i.odds?.display||"")}</span></div>
    <div class="nick">${Bt(i.nickname)}</div>
    <div class="tagl">${Bt(i.tagline||"")}</div>
    <div class="clue"><span class="k">PUBLIC CLUE</span>${Bt(i.publicClue?.text||"")}</div>
    ${t.length?`<div class="backers">${t.join("")}</div>`:""}
  </div>`}function nv(i){let t=parseInt(String(i).replace("#",""),16),e=n=>Math.round(n+(255-n)*.25);return`#${[t>>16&255,t>>8&255,t&255].map(n=>e(n).toString(16).padStart(2,"0")).join("")}`}function iv(i){return(i.matchups||[]).map(t=>{let e=dn(i,t.a),n=dn(i,t.b);return!e||!n?"":`<div class="mu panel slant dark"><div class="unslant" style="display:flex;align-items:center;gap:18px"><span class="lbl">HEAD-TO-HEAD</span>
      <span class="side"><i class="dot" style="background:${Bt(e.colour.primary)}"></i>${Bt(e.nickname)} <span class="od">\xD7${t.odds.a}</span></span>
      <span class="vs">VS</span>
      <span class="side"><i class="dot" style="background:${Bt(n.colour.primary)}"></i>${Bt(n.nickname)} <span class="od">\xD7${t.odds.b}</span></span></div></div>`}).join("")}function sv(i){let t=i.round,e=[...t.runners].sort((u,p)=>u.lane-p.lane),n=Xe(`<div class="betting">
    <div class="bet-head"><div class="h outlined">PLACE YOUR BETS!</div><div class="rt">Round ${t.number}/${i.roundsPerGame} \xB7 ${Bt(t.title)}</div><div class="timer num hidden"></div></div>
    <div class="runner-grid n${e.length}">${e.map(u=>ev(u)).join("")}</div>
    <div class="matchups">${iv(t)}</div>
  </div>`);pi.appendChild(n),zn(".rc",n).forEach((u,p)=>{u.style.animation=`slide-up .5s ${p*.08}s cubic-bezier(.2,1.3,.4,1) both`});let s=Re(".timer",n),r=null,o=null;function a(){if(!_e?.deadline||_e.phase!=="BETTING"||_e.revealed){s.classList.add("hidden");return}let u=Math.max(0,Math.ceil((_e.deadline-Qc.serverNow())/1e3));s.classList.remove("hidden"),s.textContent=`${Math.floor(u/60)}:${String(u%60).padStart(2,"0")}`,u<=10&&u!==o&&ee.play("tick"),o=u}r=setInterval(a,250),a();let l=[["jeff","Remember: the odds are set on public information only. Your secret clue might know better."],["pam","Every one of these runners is Mark. The question is: which Mark turned up?"],["jeff","Head-to-heads are a lovely way to lose money slowly."]],h=setTimeout(()=>{let u=l[Math.floor(Math.random()*l.length)];Fe(u[1],u[0],1)},Xn(9e3));return{destroy:()=>{clearInterval(r),clearTimeout(h)}}}function rv(i){let t=ba(),e=i.round,n=Xe('<div class="reveal"><div class="rh outlined">THE BETS ARE IN!</div><div class="cols"></div></div>');pi.appendChild(n);let s=Re(".cols",n);return s.innerHTML=i.players.map(r=>{let a=(i.bets?.[r.id]||[]).map(l=>{let h=l.type==="win"?l.runnerId:l.pick,u=dn(e,h),p=l.type==="win"?u?.odds?.display||"":`\xD7${Ta(e,l)}`;return`<div class="betline"><div class="rp">${u?Qi(u,76):""}</div><div class="bl">${Bt(Ea(e,l))}<div class="bt">${l.type==="win"?"WIN":"HEAD-TO-HEAD"} \xB7 ${Bt(p)} \xB7 pays ${Ne(l.stake*Ta(e,l))}</div></div><div class="st num">${Ne(l.stake)}</div></div>`}).join("");return`<div class="col panel slant" style="background:${Bt(r.avatar.colour)}"><div class="unslant"><div class="who">${An(r.avatar,80)}${Bt(r.name)}</div>${a||'<div class="nobets">Kept their wallet shut. \u{1F648}</div>'}</div></div>`}).join(""),(async()=>{ee.play("drumroll",{dur:1.8/Xs+.2}),Fe("Right then. Let's see who's backed what!","jeff",3),await je(2e3,t);let r=zn(".betline",n);for(let l of r){if(t.cancelled)return;l.classList.add("show"),ee.play("pop"),await je(1100,t)}let o=i.players.map(l=>new Set((i.bets?.[l.id]||[]).filter(h=>h.type==="win").map(h=>h.runnerId))),a=null;if(o.length>=2)for(let l of o[0])o.slice(1).every(h=>h.has(l))&&(a=dn(e,l));if(a)n.appendChild(Xe(`<div class="same panel yellow anim-pop">Great minds\u2026 both backing ${Bt(a.nickname)}! \u{1F91D}</div>`)),Fe(`They've both gone for ${a.nickname}. Either genius, or a shared delusion.`,"pam",3);else{let l=i.players.reduce((h,u)=>h+(i.bets?.[u.id]||[]).reduce((p,d)=>p+d.stake,0),0);Fe(l?`That's ${Ne(l)} riding on this one. Pressure!`:"Nobody has bet a penny. Cowards, the lot of them.","pam",2)}if(await hi(t,2600,7e3),!t.cancelled){for(let l of["3","2","1"]){if(t.cancelled)return;let h=Xe(`<div class="countdown outlined anim-pop">${l}</div>`);n.appendChild(h),ee.play("beep"),await je(800,t),h.remove()}t.cancelled||di({t:"revealDone",roundId:e.roundId})}})(),{destroy:()=>Hr(t)}}function ov(i){let t=ba(),e=i.round,n=Xe(`<div class="race-ov"><div class="live panel slant red"><div class="unslant" style="display:flex;gap:14px;align-items:center"><span class="dot"></span>LIVE \xB7 ${Bt(e.title)}</div></div></div>`);pi.appendChild(n),document.body.classList.add("racing");let s=0,r=0;return(async()=>{let o=await Cd({round:e,plan:i.racePlan,backedBy:i.backedBy||{}});if(!t.cancelled){if(!o){n.appendChild(Xe('<div class="race-err panel red">Race view failed to load</div>'));return}document.body.classList.add("racing"),Ws!=="3d"?(ee.play("horn"),setTimeout(()=>ee.play("crowd",{dur:3,peak:.25}),300),Fe("And they're off!","jeff",3)):ee.play("crowd",{dur:4,peak:.2}),ui({type:"race-start",kind:Ws}),o.playRace(a=>{if(!(t.cancelled||!a)){if(ui({type:"race-event",e:a.type||"line",text:a.text}),a.kind==="countdown"){ee.play(a.n===0?"go":"beep"),a.n===0&&(ee.play("horn"),ee.play("crowd",{dur:3,peak:.28}));return}if(a.kind==="photo_finish"){ee.play("stamp"),Fe("It's a photo finish! Hold your breath!","pam",3);return}if(a.text&&(a.kind==="commentary"||!a.type)){fi.say(a.text,a.speaker||"jeff",{priority:a.priority||2});return}switch(a.type){case"overtake":Date.now()-s>1500&&(s=Date.now(),ee.play("whoosh"));break;case"lead_change":ee.play("whoosh"),ee.play("crowd",{dur:2,peak:.18});break;case"breakaway":ee.play("crowd",{dur:2.5,peak:.2});break;case"lap":ee.play("bell");break;case"final_stretch":ee.play("crowd",{dur:6,peak:.4});break;case"finish":r++,r===1&&(ee.play("fanfare"),ee.play("crowd",{dur:4,peak:.45}));break;default:break}}},async()=>{t.cancelled||(ui({type:"race-done"}),await je(2500,t),t.cancelled||di({t:"raceDone",roundId:e.roundId}))})}})(),{destroy:()=>{Hr(t)}}}function av(i){let t=null,e=-1,n=Xe('<div class="results"></div>');pi.appendChild(n);let s=i.round,r=i.results;function o(x,f){return f.players.filter(b=>(f.bets?.[b.id]||[]).some(_=>(_.type==="win"?_.runnerId:_.pick)===x)).map(b=>An(b.avatar,50))}let a=(x,f="")=>`<div class="res-head"><div class="h outlined">${x}</div>${f?`<div class="sh">${f}</div>`:""}</div>`,l=x=>{t.cancelled||di({t:"stageDone",stage:x})};async function h(x){let f=t,b=r.finishOrder.map(U=>{let P=dn(s,U.runnerId);return`<div class="orow panel slant ${U.place===1?"first":""}" style="${U.place===1?"":`background:${Bt(P?.colour?.primary||"#2a62e0")}`}"><div class="unslant" style="display:flex;align-items:center;gap:26px;width:100%">
        ${ns(U.place)}<div class="rp">${P?Qi(P,112):""}</div>
        <div class="nm ${U.place===1?"":"outlined white thin"}">${Bt(P?.nickname||U.runnerId)}<small>${Bt(P?.tagline||"")}</small></div>
        <div class="bk">${o(U.runnerId,x).join("")}</div>
        <div class="tm num">${Bt(U.timeText||rh(U.officialS))}</div></div></div>`});n.innerHTML=a("THE RESULT","Official times, as recorded by the volunteers \u{1F4CB}")+`<div class="order">${b.join("")}</div>`;let _=zn(".orow",n);for(let U=_.length-1;U>=0;U--){if(f.cancelled)return;_[U].classList.add("show"),U===0?(ee.play("fanfare"),Js(document.body,{count:90})):ee.play("pop"),await je(U===1?1600:800,f)}(r.commentary||[]).slice(0,2).forEach(U=>Fe(U.text,U.speaker,3)),await hi(f,5500,14e3),l(0)}async function u(){let x=t,f=r.finishOrder.map(v=>v.runnerId),b=new Map((r.reveal||[]).map(v=>[v.runnerId,v]));n.innerHTML=a("WHO WERE THEY REALLY?","Every runner was a real Mark, on a real Saturday \u{1F575}\uFE0F")+`<div class="reveal-grid">${f.map((v,U)=>{let P=dn(s,v),T=b.get(v)||{},A=r.finishOrder[U],y=(T.funFacts||[]).slice(0,2).map(S=>`<div>\u2022 ${Bt(S)}</div>`).join(""),m=[T.eventNumber?`Event #${T.eventNumber}`:"",T.overallPosition?`${T.overallPosition}${["th","st","nd","rd"][T.overallPosition%10>3||[11,12,13].includes(T.overallPosition%100)?0:T.overallPosition%10]} overall`:"",T.ageGrade?`${T.ageGrade}% AG`:""].filter(Boolean).join(" \xB7 ");return`<div class="rv" data-i="${U}">
        <div class="face front" style="background:${Bt(P?.colour?.primary)}"><div><div class="rp">${P?Qi(P,220):""}</div><div class="q outlined">?</div></div></div>
        <div class="face back"><div class="bh" style="background:${Bt(P?.colour?.primary)}"><div class="rp">${P?Qi(P,74):""}</div><div class="n">${Bt(P?.nickname||v)}</div></div>
          <div class="date">${Bt(T.dateText||T.date||"")}</div>
          <div class="time num">${Bt(A?.timeText||"")}</div>
          <div class="meta">${Bt(m)}${T.finsburyNumber?` \xB7 Finsbury run #${T.finsburyNumber}`:""}</div>
          ${T.stravaTitle?`<div class="strava"><span class="k">STRAVA TITLE</span>\u201C${Bt(T.stravaTitle)}\u201D</div>`:""}
          <div class="facts">${y}</div>
          ${T.wasPB?'<div class="pb">PB! \u{1F3C5}</div>':""}
          <div class="place">${ns(A?.place||U+1)}</div>
        </div></div>`}).join("")}</div>`;let _=zn(".rv",n);await je(900,x);for(let v=0;v<_.length;v++){if(x.cancelled)return;_[v].classList.add("flip"),ee.play("reveal");let U=b.get(f[v]),P=dn(s,f[v]);v===0&&U?.dateText&&Fe(`The winner, ${P?.nickname}, was Mark on ${U.dateText}.`,"jeff",2),await je(1900,x)}r.archetype?.label&&n.appendChild(Xe(`<div class="archetype"><div class="arch panel yellow anim-pop" style="padding:12px 30px"><span class="display" style="font-size:34px">${Bt(r.archetype.label)}</span>${r.archetype.blurb?` <span style="font-size:24px">\u2014 ${Bt(r.archetype.blurb)}</span>`:""}</div></div>`)),await hi(x,9e3,15e3),l(1)}async function p(x){let f=t,b=(r.clueReview||[]).filter(P=>P.verdict!=="neutral"||P.quip).slice(0,10);if(!b.length){n.innerHTML="",await je(300,f),l(2);return}let _=new Map((x.clues||[]).map(P=>[P.id,P]));n.innerHTML=a("CLUE POST-MORTEM","Useful\u2026 or a red herring? \u{1F41F}")+`<div class="clue-list">${b.map(P=>{let T=dn(s,P.runnerId),A=_.get(P.clueId),y=P.owner==="public"?"PUBLIC CLUE":`${Bt(x.players.find(S=>S.id===P.owner)?.name||"Secret")}'S SECRET CLUE \u{1F92B}`,m={useful:"USEFUL \u2713",red_herring:"RED HERRING \u{1F41F}",neutral:"MEH"}[P.verdict]||Bt(P.verdict);return`<div class="cl panel"><div class="rp">${T?Qi(T,74):""}</div><div class="txt"><div class="own">${y} \xB7 ${Bt(T?.nickname||"")}</div>${Bt(A?.text||"")}${P.quip?`<div class="quip">${Bt(P.quip)}</div>`:""}</div><div class="verdict ${Bt(P.verdict)}">${m}</div></div>`}).join("")}</div>`;let v=zn(".cl",n);for(let P of v){if(f.cancelled)return;P.classList.add("show"),setTimeout(()=>ee.play("stamp"),Xn(250)),await je(1300,f)}let U=b.find(P=>P.verdict==="red_herring"&&P.quip);U&&Fe(U.quip,"pam",2),await hi(f,7e3,12e3),l(2)}async function d(x){let f=t,b=x.settings.drinkingMode;n.innerHTML=a("PAY DAY","The bookie settles up \u{1F4B0}")+`<div class="payouts">${x.players.map(U=>{let P=r.payouts?.[U.id]||{bets:[],net:0,bankroll:U.bankroll},T=(P.bets||[]).map(A=>`<div class="pl ${A.won?"won":"lost"}"><span class="mark">${A.won?"\u2705":"\u274C"}</span><div class="lb">${Bt(Ea(s,A))}<small>staked ${Ne(A.stake)}</small></div><div class="r">${A.won?`+${Ne(A.returned)}`:`\u2212${Ne(A.stake)}`}</div></div>`).join("")||'<div class="pl show"><div class="lb">No bets placed. Sensible. Boring.</div></div>';return`<div class="pay panel slant" data-pid="${U.id}" style="background:${Bt(U.avatar.colour)}"><div class="unslant" style="display:flex;flex-direction:column;height:100%">
        <div class="who">${An(U.avatar,90)}${Bt(U.name)}</div>
        <div class="lines">${T}</div>
        <div class="net num" data-net="${P.net}">${Zs(0)}</div>
        <div class="bank">Bankroll: <span data-bank>${Ne(P.bankroll-P.net)}</span></div>
        ${b?c(P.net):""}
      </div></div>`}).join("")}</div>`,await je(600,f);for(let U of zn(".pl",n)){if(f.cancelled)return;U.classList.add("show"),ee.play(U.classList.contains("won")?"kaching":"pop"),await je(700,f)}await je(400,f);let _=null,v=null;for(let U of x.players){let P=r.payouts?.[U.id];if(!P)continue;let T=n.querySelector(`.pay[data-pid="${U.id}"]`),A=T.querySelector(".net"),y=T.querySelector("[data-bank]");A.classList.add(P.net>0?"green":P.net<0?"red":"white"),A.classList.add("outlined"),wa(A,0,P.net,Xn(1800),m=>Zs(m)),wa(y,P.bankroll-P.net,P.bankroll,Xn(1800),m=>Ne(m)),(!_||P.net>_.net)&&(_={...P,p:U,panel:T}),(!v||P.net<v.net)&&(v={...P,p:U,panel:T})}await je(1900,f),!f.cancelled&&(_&&_.net>0&&(ee.play("kaching"),Js(document.body,{count:140}),_.panel.classList.add("big-win"),_.panel.appendChild(Xe('<div class="mood">\u{1F911}</div>')),Fe(lv(_.p.name,_.net),"jeff",3)),v&&v.net<0&&(setTimeout(()=>ee.play("sadtrombone"),Xn(900)),v.panel.classList.add("big-loss"),v.panel.appendChild(Xe('<div class="raincloud">\u{1F327}\uFE0F</div>')),Fe(cv(v.p.name,v.net),"pam",3)),!_?.net&&!v?.net&&Fe("Nobody won, nobody lost. The bookie is furious.","pam",2),await hi(f,7e3,14e3),l(3))}function c(x){if(x<0){let f=Math.min(5,Math.max(1,Math.ceil(-x/100)));return`<div class="drink panel yellow">\u{1F37A} Take ${f} sip${f>1?"s":""}!</div>`}if(x>0){let f=Math.min(5,Math.max(1,Math.ceil(x/150)));return`<div class="drink panel yellow">\u{1F449} Hand out ${f} sip${f>1?"s":""}</div>`}return'<div class="drink panel yellow">\u{1F964} Water break</div>'}async function g(x){let f=t,b=r.awards||[];if(!b.length&&!r.archetype?.label){await je(200,f),l(4);return}n.innerHTML=a("ROUND AWARDS","\u{1F3C6}")+`<div class="awards">${b.map(_=>{let v=x.players.find(U=>U.id===_.playerId);return`<div class="award panel slant ${v?"":"yellow"}" style="${v?`background:${Bt(v.avatar.colour)}`:""}"><div class="unslant" style="display:flex;align-items:center;gap:28px"><span class="trophy">\u{1F3C6}</span>${v?An(v.avatar,84):""}<div><div class="at outlined white thin">${Bt(_.title)}</div><div class="ax" style="color:${v?"#fff":"var(--ink)"}">${Bt(_.text||"")}</div></div></div></div>`}).join("")}${r.archetype?.label?`<div class="arch panel yellow anim-pop" style="margin-top:20px"><div class="al display">${Bt(r.archetype.label)}</div><div class="ab">${Bt(r.archetype.blurb||"")}</div></div>`:""}</div>`;for(let _ of zn(".award",n)){if(f.cancelled)return;_.classList.add("show"),ee.play("fanfare"),await je(1500,f)}b[0]&&Fe(`${b[0].title}! ${b[0].text||""}`,"jeff",2),await hi(f,6500,12e3),l(4)}function M(x){if(x.resultsStage===e)return;t&&Hr(t),t=ba(),e=x.resultsStage,fi.clear();let f=x.resultStages[x.resultsStage];if(ui({type:"results-stage",stage:f}),f!=="order"&&hn&&zr(),f==="order"&&hn&&Ws==="3d")try{hn.showPodium?.(r)}catch(b){console.warn(b)}else hn&&f==="order"&&zr();document.body.classList.toggle("racing",!!hn),({order:h,reveal:u,clues:p,payouts:d,awards:g}[f]||(async()=>l(x.resultsStage)))(x).catch(b=>console.error(b))}return r&&M(i),{update:x=>{x.results&&M(x)},destroy:()=>{t&&Hr(t),zr()}}}function lv(i,t){let e=[`${i} cleans up! ${Zs(t)}. Insufferable for the rest of the evening.`,`Kerching! ${i} is ${Ne(t)} richer and won't let anyone forget it.`,`${i} read that race like a book.`];return e[Math.floor(Math.random()*e.length)]}function cv(i,t){let e=[`Oh dear. ${i} is down ${Ne(-t)}. The bank of Mark is not sympathetic.`,`${i} backed the wrong Mark. It happens to the best of us. Mostly to ${i}.`,`That's ${Ne(-t)} gone, ${i}. Thoughts and prayers.`];return e[Math.floor(Math.random()*e.length)]}function hv(i,{compact:t=!1}={}){let e=Ad(i.players),n=i.history.at(-1);return[...i.players].sort((s,r)=>r.bankroll-s.bankroll).map(s=>{let r=e.get(s.id),o=n?.nets?.[s.id]??0;return`<div class="srow panel slant ${r===1&&!t?"lead":""}" style="${r===1&&!t?"":`background:${Bt(s.avatar.colour)}`}"><div class="unslant" style="display:flex;align-items:center;gap:26px;width:100%">
      ${ns(r)}${An(s.avatar,t?70:96)}<div class="nm">${Bt(s.name)}</div>
      ${t?"":`<span class="dl ${o>0?"up":o<0?"down":"flat"}">${Zs(o)}</span>`}
      <div class="bk num">${Ne(s.bankroll)}</div>
      ${!t&&s.ready?'<span class="tag" style="background:var(--grass);color:#fff">\u2713 READY</span>':""}
    </div></div>`}).join("")}function uv(i){let t=i.history,e=i.settings.startingBankroll,n=i.players.map(M=>({p:M,pts:[e,...t.map(x=>x.bankrolls?.[M.id]??e)]})),s=Math.max(2,(t.length||0)+1),r=Math.max(e*1.2,...n.flatMap(M=>M.pts)),o=540,a=420,l=36,h=M=>l+M*(o-l*2)/(s-1),u=M=>a-l-M/r*(a-l*2),p=[0,.5,1].map(M=>`<line x1="${l}" x2="${o-l}" y1="${u(r*M)}" y2="${u(r*M)}" stroke="#14183c22" stroke-width="2"/>`).join(""),d=`<line x1="${l}" x2="${o-l}" y1="${u(e)}" y2="${u(e)}" stroke="#14183c55" stroke-width="2" stroke-dasharray="8 8"/>`,c=n.map(({p:M,pts:x})=>`<polyline fill="none" stroke="#14183c" stroke-width="12" stroke-linejoin="round" stroke-linecap="round" points="${x.map((f,b)=>`${h(b)},${u(f)}`).join(" ")}"/><polyline fill="none" stroke="${Bt(M.avatar.colour)}" stroke-width="6" stroke-linejoin="round" stroke-linecap="round" points="${x.map((f,b)=>`${h(b)},${u(f)}`).join(" ")}"/>${x.map((f,b)=>`<circle cx="${h(b)}" cy="${u(f)}" r="8" fill="${Bt(M.avatar.colour)}" stroke="#14183c" stroke-width="4"/>`).join("")}`).join(""),g=Array.from({length:s},(M,x)=>`<text x="${h(x)}" y="${a-6}" text-anchor="middle" font-family="Lilita One" font-size="20" fill="#14183c">${x===0?"Start":`R${x}`}</text>`).join("");return`<svg viewBox="0 0 ${o} ${a}" width="100%" height="440">${p}${d}${c}${g}</svg>`}function dv(i){let t=Xe('<div class="score"></div>');pi.appendChild(t);let e=null;function n(r){let a=r.roundNumber>=r.roundsPerGame?"\u{1F3C1} That was the final round! Champion next\u2026":r.roundNumber===r.roundsPerGame-1?"Up next: THE FINAL ROUND \u{1F62C}":`Up next: Round ${r.roundNumber+1} of ${r.roundsPerGame}`;t.innerHTML=`<div class="res-head"><div class="h outlined">STANDINGS</div><div class="sh">After round ${r.roundNumber} of ${r.roundsPerGame}</div></div>
      <div class="standings">${hv(r)}</div>
      <div class="chart panel white"><div class="ct">The money, round by round</div>${uv(r)}</div>
      <div class="upnext panel yellow">${a}<span class="cd"></span></div>`}n(i);let s=[...i.players].sort((r,o)=>o.bankroll-r.bankroll);if(s.length>=2){let r=s[0].bankroll-s[1].bankroll;Fe(r===0?"It's dead level at the top!":`${s[0].name} leads by ${Ne(r)}.`,"jeff",2)}else s[0]&&Fe(`${s[0].name} is on ${Ne(s[0].bankroll)}.`,"jeff",2);return e=setInterval(()=>{let r=t.querySelector(".cd");if(!(!r||!_e))if(_e.deadline&&_e.phase==="SCOREBOARD"){let o=Math.max(0,Math.ceil((_e.deadline-Qc.serverNow())/1e3));r.textContent=` \u2014 starting in ${o}\u2026`}else r.textContent=_e.players.length?" \u2014 tap READY on your phones":""},300),{update:n,destroy:()=>clearInterval(e)}}function fv(i){let t=[...i.players].sort((o,a)=>a.bankroll-o.bankroll),e=t[0],n=t.length>1&&t[1].bankroll===e?.bankroll,s=Xe(`<div class="finale"><div class="rays"></div>
    <div class="champ">${e?`<div class="h outlined">${n?"IT'S A DRAW!":"CHAMPION!"}</div>
      <div class="who"><div class="crown">\u{1F451}</div>${An(e.avatar,220)}<div class="nm outlined white">${Bt(n?t.filter(o=>o.bankroll===e.bankroll).map(o=>o.name).join(" & "):e.name)}</div><div class="bk num">${Ne(e.bankroll)}</div></div>`:'<div class="h outlined">GAME OVER</div>'}
    </div>
    <div class="others">${t.slice(1).map((o,a)=>`<div class="srow panel slant" style="background:${Bt(o.avatar.colour)}"><div class="unslant" style="display:flex;align-items:center;gap:20px">${ns(a+2)}${An(o.avatar,70)}<div class="nm">${Bt(o.name)}</div><div class="bk num">${Ne(o.bankroll)}</div></div></div>`).join("")}</div>
  </div>`);pi.appendChild(s),ee.play("drumroll",{dur:1.6}),setTimeout(()=>{ee.play("fanfare"),ee.play("crowd",{dur:5,peak:.45}),Js(document.body,{count:200,duration:4500})},Xn(1700));let r=setInterval(()=>Js(document.body,{count:60,duration:3500}),Xn(6e3));return e&&Fe(n?"We have a dead heat! Nobody wins, which is very British.":`Ladies and gentlemen, your MARKRUN champion: ${e.name}, with ${Ne(e.bankroll)}!`,"jeff",3),setTimeout(()=>Fe("Press space, or tap ready on your phones, to go again.","pam",1),Xn(7e3)),{destroy:()=>clearInterval(r)}}
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
