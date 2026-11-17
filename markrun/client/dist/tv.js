var zd=Object.defineProperty;var Bd=(n,t)=>{for(var e in t)zd(n,e,{get:t[e],enumerable:!0})};function ah({role:n,getToken:t,onWelcome:e,onState:i,onMessage:s,onStatus:r}){let o=null,a=0,l=null,h=!1,u=0,m=null,d=0,c=()=>`${location.protocol==="https:"?"wss":"ws"}://${location.host}/ws`;function p(v){r?.(v)}function M(){if(clearTimeout(l),o&&(o.readyState===0||o.readyState===1))return;p(a?"reconnecting":"connecting");try{o=new WebSocket(c())}catch{x();return}let v=o;v.onopen=()=>{a=0,p("open"),d=Date.now(),f({t:"hello",role:n,token:t?.()||void 0}),clearInterval(m),m=setInterval(()=>{if(f({t:"ping",at:Date.now()}),Date.now()-d>25e3&&v.readyState===1)try{v.close()}catch{}},8e3)},v.onmessage=_=>{d=Date.now();let U;try{U=JSON.parse(_.data)}catch{return}if(U.t==="pong"){U.serverNow&&(u=U.serverNow+(Date.now()-U.at)/2-Date.now());return}U.t==="welcome"?e?.(U):U.t==="state"?(U.state?.serverNow&&(u=U.state.serverNow-Date.now()),i?.(U.state)):s?.(U)},v.onclose=()=>{clearInterval(m),v===o&&(p("closed"),h||x())},v.onerror=()=>{try{v.close()}catch{}}}function x(){clearTimeout(l);let v=Math.min(8e3,400*2**a)*(.75+Math.random()*.5);a++,l=setTimeout(M,v)}function f(v){return o&&o.readyState===1?(o.send(JSON.stringify(v)),!0):!1}let b=()=>{document.visibilityState==="visible"&&(!o||o.readyState>1?(a=0,M()):f({t:"ping",at:Date.now()}))};return document.addEventListener("visibilitychange",b),window.addEventListener("online",()=>{a=0,M()}),window.addEventListener("pageshow",b),window.addEventListener("focus",b),M(),{send:f,reconnect(){a=0;try{o?.close()}catch{}M()},close(){h=!0,o?.close()},serverNow:()=>Date.now()+u,get open(){return o?.readyState===1}}}function lh(){let n=null,t=null,e=null,i=null,s=null,r=null,o=.8,a=!1,l=!0,h=null;function u(){if(n)return n;let y=window.AudioContext||window.webkitAudioContext;if(!y)return null;n=new y,r=n.createDynamicsCompressor(),r.threshold.value=-14,r.ratio.value=4,r.attack.value=.005,r.release.value=.2,t=n.createGain(),t.gain.value=a?0:o,e=n.createGain(),e.gain.value=.9,i=n.createGain(),i.gain.value=.32,e.connect(r),i.connect(r),r.connect(t),t.connect(n.destination),s=n.createBuffer(1,n.sampleRate*2,n.sampleRate);let g=s.getChannelData(0);for(let S=0;S<g.length;S++)g[S]=Math.random()*2-1;return n}function m(){let y=u();return y&&y.state==="suspended"&&y.resume(),!!y}let d=()=>n&&n.state==="running";function c(y,g,S,T,C,N){y.gain.cancelScheduledValues(g),y.gain.setValueAtTime(1e-4,g),y.gain.exponentialRampToValueAtTime(T,g+S),y.gain.setValueAtTime(T,g+S+C),y.gain.exponentialRampToValueAtTime(1e-4,g+S+C+N)}function p(y,g,S,T,{gain:C=.2,a:N=.01,rel:q=.2,dest:A=e,detune:H=0,filter:V=null,pan:rt=0}={}){let ot=n.createOscillator();ot.type=y,ot.frequency.setValueAtTime(g,S),ot.detune.value=H;let D=n.createGain(),St=ot;if(V){let Y=n.createBiquadFilter();Y.type=V.type||"lowpass",Y.frequency.value=V.freq,Y.Q.value=V.q||.7,St.connect(Y),St=Y}St.connect(D);let K=D;if(rt&&n.createStereoPanner){let Y=n.createStereoPanner();Y.pan.value=rt,D.connect(Y),K=Y}return K.connect(A),c(D,S,N,C,Math.max(0,T-N),q),ot.start(S),ot.stop(S+T+q+.05),ot}function M(y,g,{gain:S=.2,a:T=.01,rel:C=.2,type:N="bandpass",freq:q=1e3,q:A=1,dest:H=e}={}){let V=n.createBufferSource();V.buffer=s,V.loop=!0;let rt=n.createBiquadFilter();rt.type=N,rt.frequency.setValueAtTime(q,y),rt.Q.value=A;let ot=n.createGain();return V.connect(rt),rt.connect(ot),ot.connect(H),c(ot,y,T,S,Math.max(0,g-T),C),V.start(y,Math.random()),V.stop(y+g+C+.05),{s:V,f:rt,g:ot}}let x=y=>440*2**((y-69)/12),f={horn(y){for(let[g,S]of[[233,0],[293.7,6],[349,-5]])p("sawtooth",g*.92,y,1.1,{gain:.13,a:.03,rel:.25,filter:{freq:2200},detune:S}).frequency.exponentialRampToValueAtTime(g,y+.12);p("square",116.5,y,1.1,{gain:.05,a:.03,rel:.25,filter:{freq:800}})},crowd(y,{dur:g=3.5,peak:S=.32}={}){for(let[T,C,N]of[[700,.8,1],[1800,1.2,.7],[3200,1.5,.35]]){let q=M(y,g*.4,{gain:S*N,a:g*.45,rel:g*.55,freq:T,q:C}),A=n.createOscillator();A.frequency.value=5+Math.random()*4;let H=n.createGain();H.gain.value=S*N*.35,A.connect(H),H.connect(q.g.gain),A.start(y),A.stop(y+g+.2)}for(let T=0;T<4;T++){let C=y+.4+Math.random()*g*.5;p("triangle",500+Math.random()*300,C,.35,{gain:.025,a:.08,rel:.25,filter:{freq:1600},pan:Math.random()*1.6-.8}).frequency.exponentialRampToValueAtTime(800+Math.random()*400,C+.3)}},whoosh(y){let g=M(y,.45,{gain:.35,a:.12,rel:.25,freq:400,q:2.5});g.f.frequency.exponentialRampToValueAtTime(3500,y+.3),g.f.frequency.exponentialRampToValueAtTime(700,y+.7)},bell(y){for(let g of[y,y+.42])[[1,.22,1.6],[2.76,.09,.9],[5.4,.05,.5],[8.93,.03,.3]].forEach(([S,T,C])=>p("sine",830*S,g,.01,{gain:T,a:.003,rel:C}))},fanfare(y){let g=[[67,0,.14],[72,.15,.14],[76,.3,.14],[79,.45,.32],[76,.8,.14],[79,.95,.9]];for(let[S,T,C]of g){for(let N of[-7,7])p("sawtooth",x(S),y+T,C,{gain:.07,a:.02,rel:.18,filter:{freq:2600},detune:N});p("square",x(S-12),y+T,C,{gain:.03,a:.02,rel:.15,filter:{freq:1200}})}for(let S of[60,64,67,72])p("triangle",x(S),y+.95,.9,{gain:.06,a:.03,rel:.6});f.cymbal(y+.95,.12)},cymbal(y,g=.15){M(y,.05,{gain:g,a:.002,rel:1.4,type:"highpass",freq:6e3,q:.5})},kaching(y){M(y,.03,{gain:.3,a:.002,rel:.05,type:"highpass",freq:3e3}),M(y+.05,.02,{gain:.25,a:.002,rel:.06,type:"bandpass",freq:1800,q:3});for(let[g,S]of[[2093,.14],[2637,.1],[3136,.08],[4186,.05]])p("sine",g,y+.12,.02,{gain:S,a:.003,rel:.9});for(let g=0;g<6;g++)p("sine",3e3+Math.random()*2e3,y+.2+g*.05,.01,{gain:.03,a:.002,rel:.12})},sadtrombone(y){let g=[[55,0,.42],[54,.48,.42],[53,.96,.42],[52,1.44,1.3]];for(let[S,T,C]of g){let N=p("sawtooth",x(S),y+T,C,{gain:.11,a:.04,rel:.2,filter:{freq:1100,q:2}});if(T>1){let q=n.createOscillator();q.frequency.value=6;let A=n.createGain();A.gain.value=6,q.connect(A),A.connect(N.frequency),q.start(y+T),q.stop(y+T+C+.3),N.frequency.setValueAtTime(x(S),y+T),N.frequency.linearRampToValueAtTime(x(S-1),y+T+C)}}},drumroll(y,{dur:g=2.2}={}){let S=Math.floor(g*16);for(let T=0;T<S;T++)M(y+T/16,.02,{gain:.04+.16*(T/S),a:.002,rel:.06,freq:1800,q:.8});f.cymbal(y+g,.2),p("sine",70,y+g,.05,{gain:.5,a:.003,rel:.4})},pop(y){p("sine",520,y,.02,{gain:.18,a:.003,rel:.12}).frequency.exponentialRampToValueAtTime(1100,y+.08)},tick(y){p("square",1600,y,.005,{gain:.04,a:.001,rel:.03,filter:{freq:3e3}})},lock(y){p("sine",140,y,.04,{gain:.4,a:.002,rel:.2}),M(y,.02,{gain:.2,a:.002,rel:.05,freq:2500,q:1}),p("triangle",660,y+.06,.05,{gain:.08,a:.005,rel:.2}),p("triangle",990,y+.14,.08,{gain:.08,a:.005,rel:.3})},join(y){[72,76,79,84].forEach((g,S)=>p("triangle",x(g),y+S*.07,.06,{gain:.1,a:.005,rel:.2}))},beep(y){p("square",880,y,.08,{gain:.06,a:.005,rel:.05,filter:{freq:2500}})},go(y){p("square",1320,y,.3,{gain:.07,a:.005,rel:.1,filter:{freq:3e3}})},stamp(y){p("sine",90,y,.05,{gain:.5,a:.002,rel:.25}),M(y,.04,{gain:.25,a:.002,rel:.1,type:"lowpass",freq:1200})},reveal(y){[64,67,71,74].forEach((g,S)=>p("triangle",x(g+12),y+S*.05,.05,{gain:.06,a:.004,rel:.25}))},boo(y){p("sawtooth",160,y,.7,{gain:.06,a:.1,rel:.3,filter:{freq:600}}).frequency.linearRampToValueAtTime(110,y+.8)}};function b(y,g){if(!d()||a)return;let S=f[y];if(S)try{S(n.currentTime+.02,g)}catch(T){console.warn("sfx",y,T)}}let v={lobby:{bpm:92,chords:[[60,64,67,71],[57,60,64,67],[53,57,60,64],[55,59,62,67]],arp:[0,2,1,3,2,1,3,2],swing:.08,shaker:!0,block:!1},betting:{bpm:108,chords:[[57,60,64],[53,57,60],[60,64,67],[55,59,62]],arp:[0,1,2,1,0,2,1,2],swing:.05,shaker:!0,block:!0},results:{bpm:100,chords:[[60,64,67],[65,69,72],[55,59,62],[60,64,67]],arp:[0,1,2,3,2,1,0,1],swing:.06,shaker:!1,block:!1}};function _(){if(!h)return;let y=v[h.kind],g=60/y.bpm/2;for(;h.nextT<n.currentTime+.35;){let S=h.step,T=Math.floor(S/8)%y.chords.length,C=y.chords[T],N=h.nextT+(S%2?y.swing*g:0),q=S%8;if(q===0){for(let H of C.slice(0,3))for(let V of[-6,6])p("triangle",x(H),N,g*7.5,{gain:.022,a:.35,rel:.6,dest:i,detune:V,filter:{freq:1300}});p("sine",x(C[0]-24),N,g*2.5,{gain:.14,a:.01,rel:.25,dest:i})}q===4&&p("sine",x(C[0]-24+7),N,g*2,{gain:.1,a:.01,rel:.25,dest:i});let A=C[y.arp[q]%C.length]+12;S%16<15&&p("sine",x(A),N,.02,{gain:.045,a:.004,rel:g*1.6,dest:i}),p("triangle",x(A+12),N,.01,{gain:.01,a:.002,rel:.15,dest:i}),y.shaker&&S%2===1&&M(N,.01,{gain:.018,a:.003,rel:.05,type:"highpass",freq:7e3,dest:i}),y.block&&(q===2||q===6)&&p("sine",1250,N,.004,{gain:.04,a:.001,rel:.05,dest:i}),h.step++,h.nextT+=g}}function U(y="lobby"){if(!u()||h?.kind===y)return;if(w(.6),!l){h=null,I=y;return}I=y;let g=n.createGain();g.gain.value=1e-4,g.connect(r);let S=i;i=g,g.gain.exponentialRampToValueAtTime(.32,n.currentTime+1.5),h={kind:y,nextT:n.currentTime+.1,step:0,bus:g},h.timer=setInterval(()=>{d()&&_()},90)}let I=null;function w(y=.8){if(!h)return;clearInterval(h.timer);let g=h.bus;n&&g&&(g.gain.cancelScheduledValues(n.currentTime),g.gain.setValueAtTime(g.gain.value,n.currentTime),g.gain.exponentialRampToValueAtTime(1e-4,n.currentTime+y),setTimeout(()=>g.disconnect(),y*1e3+500)),h=null}function R(y){!h||!n||h.bus.gain.setTargetAtTime(y?.14:.32,n.currentTime,.25)}return{unlock:m,play:b,ready:d,get context(){return n},setVolume(y){o=Math.max(0,Math.min(1,y)),t&&t.gain.setTargetAtTime(a?0:o,n.currentTime,.05)},setMuted(y){a=!!y,t&&t.gain.setTargetAtTime(a?0:o,n.currentTime,.05)},get muted(){return a},setMusicEnabled(y){if(l=!!y,l)I&&!h&&U(I);else{let g=h?.kind||I;w(),I=g}},startMusic:U,stopMusic:w,duck:R,get musicKind(){return h?.kind||null}}}var fe=(n,t=document)=>t.querySelector(n),zn=(n,t=document)=>[...t.querySelectorAll(n)];function Ft(n){return String(n??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}function Be(n){let t=document.createElement("template");return t.innerHTML=n.trim(),t.content.firstElementChild}var ch="pp";function sn(n){let t=Math.round(Number(n)||0);return`${t<0?"\u2212":""}${Math.abs(t).toLocaleString("en-GB")}${ch}`}function Xr(n){let t=Math.round(Number(n)||0);return`${t>0?"+":t<0?"\u2212":"\xB1"}${Math.abs(t).toLocaleString("en-GB")}${ch}`}function Zn(n){let t=Math.abs(Math.round(Number(n)||0));return`${t.toLocaleString("en-GB")} Parkpound${t===1?"":"s"}`}var js=n=>n?.shortName||n?.nickname||"";function Hd(n){let t=n%100;return t>=11&&t<=13?"th":{1:"st",2:"nd",3:"rd"}[n%10]||"th"}function os(n,t=""){return`<span class="ordinal p${n} ${t}">${n}<sup>${Hd(n)}</sup></span>`}function An(n,t=64,e=""){let i=n||{emoji:"\u{1F642}",colour:"#2f8cff"};return`<span class="avatar ${e}" style="width:${t}px;height:${t}px;font-size:${Math.round(t*.58)}px;background:${Ft(i.colour)}">${Ft(i.emoji)}</span>`}function hh(n){return n=Math.round(Number(n)||0),`${Math.floor(n/60)}:${String(n%60).padStart(2,"0")}`}function Aa(n,t,e,i=1200,s=o=>String(Math.round(o)),r){let o=performance.now(),a,l=Math.round(t),h=u=>{let m=Math.min(1,(u-o)/i),d=1-(1-m)**3,c=t+(e-t)*d;n.textContent=s(c);let p=Math.round(c);r&&p!==l&&(l=p,r(p)),m<1&&(a=requestAnimationFrame(h))};return a=requestAnimationFrame(h),()=>cancelAnimationFrame(a)}function fn(n,t){return n?.runners?.find(e=>e.id===t)}function Ra(n,t){if(!n||!t)return"";if(t.type==="win")return`${fn(n,t.runnerId)?.nickname||t.runnerId} to WIN`;let e=n.matchups?.find(r=>r.id===t.matchupId);if(!e)return"Head-to-head";let i=js(fn(n,t.pick))||t.pick,s=js(fn(n,t.pick===e.a?e.b:e.a));return`${i} to beat ${s}`}function Ca(n,t){if(t.type==="win")return fn(n,t.runnerId)?.odds?.win??0;let e=n?.matchups?.find(i=>i.id===t.matchupId);return e?t.pick===e.a?e.odds.a:e.odds.b:0}function Qs(n=document.body,{count:t=120,colours:e=["#ffd23f","#ff4d5a","#2ec27e","#2f8cff","#ff6fb5","#7b4dff"],duration:i=3200}={}){let s=document.createElement("div");s.style.cssText="position:fixed;inset:0;pointer-events:none;overflow:hidden;z-index:9000";for(let r=0;r<t;r++){let o=document.createElement("i"),a=8+Math.random()*12,l=Math.random()*100,h=(Math.random()-.5)*30,u=Math.random()*720-360,m=Math.random()*400,d=i*(.6+Math.random()*.5);o.style.cssText=`position:absolute;left:${l}%;top:-30px;width:${a}px;height:${a*(.4+Math.random()*.6)}px;background:${e[r%e.length]};border:2px solid #14183c;border-radius:${Math.random()<.3?"50%":"2px"}`,o.animate([{transform:"translate(0,0) rotate(0deg)",opacity:1},{transform:`translate(${h}vw, 110vh) rotate(${u}deg)`,opacity:1}],{duration:d,delay:m,easing:"cubic-bezier(.2,.6,.4,1)",fill:"forwards"}),s.appendChild(o)}n.appendChild(s),setTimeout(()=>s.remove(),i*1.3+500)}var Vt="#14183c";function $d(n){let t=2166136261;for(let e of String(n))t^=e.charCodeAt(0),t=Math.imul(t,16777619);return t>>>0}var uh=["#2b1a10","#5a3418","#8a5a2b","#d8a24a","#1b1b1b","#b8432a","#9aa0a8"];function as(n,t){let e=parseInt(String(n||"#888888").replace("#","").padEnd(6,"8").slice(0,6),16),i=e>>16&255,s=e>>8&255,r=e&255,o=t<0?0:255,a=Math.abs(t);return i=Math.round((o-i)*a+i),s=Math.round((o-s)*a+s),r=Math.round((o-r)*a+r),`#${(1<<24|i<<16|s<<8|r).toString(16).slice(1)}`}function dh(n,{size:t=120,idSuffix:e=""}={}){let i=n?.look||{},s=n?.colour?.primary||"#ff4d5a",r=n?.colour?.secondary||"#ffffff",o=i.skin||"#f1c6a5",a=$d(n?.id+(n?.nickname||"")),l=i.hairColour||i.hairColor||uh[a%uh.length],h=i.build||"compact",u={stocky:50,tall:40,lanky:34,compact:42}[h]??42,m={tall:8,lanky:10,stocky:2,compact:4}[h]??4,d={compact:31,stocky:30,lanky:28,tall:29}[h]??30,c=60,p=50-m/2,M=n?.lane??"",x=`pc${a.toString(36)}${e}`,f=[];f.push(`<defs><clipPath id="${x}"><circle cx="60" cy="60" r="56"/></clipPath></defs>`),f.push(`<circle cx="60" cy="60" r="56" fill="${as(s,.55)}"/>`),f.push(`<g clip-path="url(#${x})">`),f.push(`<path d="M0 92 L120 70 L120 120 L0 120Z" fill="${as(s,.35)}" opacity=".6"/>`);let b=p+d+m-4;f.push(`<path d="M${c-u} 124 Q${c-u} ${b+6} ${c-14} ${b} L${c+14} ${b} Q${c+u} ${b+6} ${c+u} 124Z" fill="${s}" stroke="${Vt}" stroke-width="5" stroke-linejoin="round"/>`),f.push(`<path d="M${c-18} ${b+1} L${c-2} ${b+1} L${c+26} 124 L${c+8} 124Z" fill="${r}" stroke="${Vt}" stroke-width="3" stroke-linejoin="round"/>`),f.push(`<rect x="${c-30}" y="${b+14}" width="22" height="17" rx="3" fill="#fff" stroke="${Vt}" stroke-width="3" transform="rotate(-6 ${c-19} ${b+22})"/>`),f.push(`<text x="${c-19}" y="${b+28}" font-family="Lilita One, Arial Black, sans-serif" font-size="14" text-anchor="middle" fill="${Vt}" transform="rotate(-6 ${c-19} ${b+22})">${M}</text>`),f.push(`<rect x="${c-9}" y="${p+d-8}" width="18" height="${m+12}" fill="${o}" stroke="${Vt}" stroke-width="5"/>`),i.accessory==="medal"&&(f.push(`<path d="M${c-12} ${b} L${c} ${b+22} L${c+12} ${b}" fill="none" stroke="${r}" stroke-width="6"/>`),f.push(`<circle cx="${c}" cy="${b+26}" r="9" fill="#ffcf3a" stroke="${Vt}" stroke-width="4"/>`));let v=i.hair||"short";["long","ponytail","bob"].includes(v)&&f.push(`<path d="M${c-d-4} ${p} Q${c-d-6} ${p+d+14} ${c-d+10} ${p+d+10} L${c+d-10} ${p+d+10} Q${c+d+6} ${p+d+14} ${c+d+4} ${p}Z" fill="${l}" stroke="${Vt}" stroke-width="5" stroke-linejoin="round"/>`),v==="ponytail"&&f.push(`<ellipse cx="${c+d+6}" cy="${p-6}" rx="9" ry="16" fill="${l}" stroke="${Vt}" stroke-width="5" transform="rotate(25 ${c+d+6} ${p-6})"/>`),f.push(`<circle cx="${c-d+1}" cy="${p+4}" r="7" fill="${o}" stroke="${Vt}" stroke-width="5"/>`),f.push(`<circle cx="${c+d-1}" cy="${p+4}" r="7" fill="${o}" stroke="${Vt}" stroke-width="5"/>`),f.push(`<ellipse cx="${c}" cy="${p}" rx="${d}" ry="${d+2}" fill="${o}" stroke="${Vt}" stroke-width="5"/>`),f.push(`<ellipse cx="${c-16}" cy="${p+11}" rx="6" ry="4" fill="#ff8f8f" opacity=".45"/><ellipse cx="${c+16}" cy="${p+11}" rx="6" ry="4" fill="#ff8f8f" opacity=".45"/>`);let _=p-d-2,U={short:`<path d="M${c-d+2} ${p-6} Q${c-d} ${_-4} ${c} ${_-2} Q${c+d} ${_-4} ${c+d-2} ${p-6} Q${c+8} ${p-18} ${c-d+2} ${p-6}Z"/>`,buzz:`<path d="M${c-d+3} ${p-8} Q${c} ${_-6} ${c+d-3} ${p-8} Q${c} ${p-20} ${c-d+3} ${p-8}Z"/>`,curly:`<path d="M${c-d} ${p-2} q-6 -12 4 -18 q0 -12 14 -12 q6 -10 18 -4 q12 -4 16 8 q12 4 8 18 q-14 -8 -30 -6 q-16 0 -30 14z"/>`,afro:`<circle cx="${c}" cy="${p-14}" r="${d+8}"/>`,mohawk:`<path d="M${c-6} ${p-14} L${c-8} ${_-16} L${c+8} ${_-16} L${c+6} ${p-14}Z"/>`,quiff:`<path d="M${c-d+2} ${p-6} Q${c-d} ${_} ${c-4} ${_-2} Q${c+20} ${_-18} ${c+d+4} ${_+2} Q${c+d} ${p-8} ${c+d-2} ${p-6} Q${c+8} ${p-18} ${c-d+2} ${p-6}Z"/>`,bun:`<g><circle cx="${c}" cy="${_-6}" r="10"/><path d="M${c-d+2} ${p-6} Q${c-d} ${_-2} ${c} ${_} Q${c+d} ${_-2} ${c+d-2} ${p-6} Q${c} ${p-16} ${c-d+2} ${p-6}Z"/></g>`,long:`<path d="M${c-d+1} ${p+2} Q${c-d} ${_-4} ${c} ${_-2} Q${c+d} ${_-4} ${c+d-1} ${p+2} Q${c+10} ${p-16} ${c-2} ${p-12} Q${c-14} ${p-16} ${c-d+1} ${p+2}Z"/>`,bald:""};U.ponytail=U.long,U.bob=U.long,U.spiky=`<path d="M${c-d+2} ${p-6} L${c-d+2} ${_+2} L${c-14} ${_-12} L${c-8} ${_-2} L${c} ${_-16} L${c+6} ${_-2} L${c+15} ${_-12} L${c+d-2} ${_+2} L${c+d-2} ${p-6} Q${c} ${p-18} ${c-d+2} ${p-6}Z"/>`,U.mullet=`<g><path d="M${c+d-6} ${p} Q${c+d+10} ${p+22} ${c+d-2} ${p+34} L${c+d-14} ${p+20}Z"/><path d="M${c-d+6} ${p} Q${c-d-10} ${p+22} ${c-d+2} ${p+34} L${c-d+14} ${p+20}Z"/>${U.short}</g>`,U.swept=`<path d="M${c-d+2} ${p-4} Q${c-d-4} ${_-6} ${c+6} ${_-6} Q${c+d+8} ${_} ${c+d-1} ${p-2} Q${c+4} ${p-22} ${c-d+2} ${p-4}Z"/>`;let I=U[v]??U.short;I&&f.push(`<g fill="${l}" stroke="${Vt}" stroke-width="5" stroke-linejoin="round">${I}</g>`);let w=i.face||"grin",R=p+1,y=(q,A)=>A?`<path d="M${q-5} ${R} Q${q} ${R+4} ${q+5} ${R}" fill="none" stroke="${Vt}" stroke-width="3.5" stroke-linecap="round"/>`:`<ellipse cx="${q}" cy="${R}" rx="4.2" ry="5.6" fill="${Vt}"/><circle cx="${q+1.4}" cy="${R-2}" r="1.5" fill="#fff"/>`,g="",S="",T=y(c-11)+y(c+11);switch(w){case"determined":case"focused":case"fierce":g=`<path d="M${c-18} ${R-12} L${c-5} ${R-7} M${c+18} ${R-12} L${c+5} ${R-7}" stroke="${Vt}" stroke-width="4" stroke-linecap="round"/>`,S=`<path d="M${c-9} ${p+17} L${c+9} ${p+15}" stroke="${Vt}" stroke-width="4" stroke-linecap="round"/>`;break;case"smug":case"cheeky":T=`<path d="M${c-16} ${R} L${c-6} ${R}" stroke="${Vt}" stroke-width="4" stroke-linecap="round"/>`+y(c+11),g=`<path d="M${c+5} ${R-10} Q${c+11} ${R-15} ${c+18} ${R-10}" fill="none" stroke="${Vt}" stroke-width="3.5" stroke-linecap="round"/>`,S=`<path d="M${c-8} ${p+15} Q${c+4} ${p+19} ${c+11} ${p+11}" fill="none" stroke="${Vt}" stroke-width="4" stroke-linecap="round"/>`;break;case"worried":case"nervous":case"anxious":g=`<path d="M${c-17} ${R-8} L${c-6} ${R-13} M${c+17} ${R-8} L${c+6} ${R-13}" stroke="${Vt}" stroke-width="3.5" stroke-linecap="round"/>`,S=`<path d="M${c-10} ${p+17} q5 -5 10 0 q5 5 10 0" fill="none" stroke="${Vt}" stroke-width="3.5" stroke-linecap="round"/>`;break;case"sleepy":case"tired":case"dozy":T=y(c-11,!0)+y(c+11,!0),S=`<ellipse cx="${c+2}" cy="${p+17}" rx="5" ry="4" fill="${Vt}"/>`;break;case"wink":T=y(c-11,!0)+y(c+11),S=`<path d="M${c-11} ${p+12} Q${c} ${p+24} ${c+11} ${p+12}Z" fill="#fff" stroke="${Vt}" stroke-width="3.5" stroke-linejoin="round"/>`;break;case"gritted":g=`<path d="M${c-18} ${R-11} L${c-5} ${R-7} M${c+18} ${R-11} L${c+5} ${R-7}" stroke="${Vt}" stroke-width="4" stroke-linecap="round"/>`,S=`<rect x="${c-12}" y="${p+11}" width="24" height="10" rx="3" fill="#fff" stroke="${Vt}" stroke-width="3.5"/><path d="M${c-4} ${p+11} v10 M${c+4} ${p+11} v10 M${c-12} ${p+16} h24" stroke="${Vt}" stroke-width="2"/>`;break;case"tongue-out":T=y(c-11,!0)+y(c+11),S=`<path d="M${c-11} ${p+12} Q${c} ${p+20} ${c+11} ${p+12}" fill="none" stroke="${Vt}" stroke-width="3.5" stroke-linecap="round"/><path d="M${c-2} ${p+15} q4 14 10 0z" fill="#ff6b7a" stroke="${Vt}" stroke-width="3"/>`;break;case"wide-eyed":T=`<circle cx="${c-11}" cy="${R}" r="7.5" fill="#fff" stroke="${Vt}" stroke-width="3"/><circle cx="${c-11}" cy="${R}" r="3.2" fill="${Vt}"/><circle cx="${c+11}" cy="${R}" r="7.5" fill="#fff" stroke="${Vt}" stroke-width="3"/><circle cx="${c+11}" cy="${R}" r="3.2" fill="${Vt}"/>`,S=`<ellipse cx="${c}" cy="${p+17}" rx="5" ry="6" fill="${Vt}"/>`;break;case"shocked":case"surprised":S=`<ellipse cx="${c}" cy="${p+17}" rx="6" ry="8" fill="${Vt}"/>`,g=`<path d="M${c-17} ${R-13} Q${c-11} ${R-17} ${c-5} ${R-13} M${c+17} ${R-13} Q${c+11} ${R-17} ${c+5} ${R-13}" fill="none" stroke="${Vt}" stroke-width="3.5" stroke-linecap="round"/>`;break;default:S=`<path d="M${c-13} ${p+11} Q${c} ${p+27} ${c+13} ${p+11}Z" fill="#fff" stroke="${Vt}" stroke-width="3.5" stroke-linejoin="round"/><path d="M${c-6} ${p+19} Q${c} ${p+23} ${c+6} ${p+19}" fill="#ff6b7a"/>`}f.push(T,g,S),f.push(`<path d="M${c-2} ${p+4} Q${c+3} ${p+8} ${c-1} ${p+10}" fill="none" stroke="${as(o,-.35)}" stroke-width="3" stroke-linecap="round"/>`);let C=i.accessory;C==="sunglasses"||C==="shades"?f.push(`<g stroke="${Vt}" stroke-width="3.5"><rect x="${c-21}" y="${R-7}" width="17" height="12" rx="4" fill="${Vt}"/><rect x="${c+4}" y="${R-7}" width="17" height="12" rx="4" fill="${Vt}"/><path d="M${c-4} ${R-3} L${c+4} ${R-3}"/></g><path d="M${c-18} ${R-4} l5 0 M${c+7} ${R-4} l5 0" stroke="#fff" stroke-width="2.5" stroke-linecap="round"/>`):C==="glasses"||C==="specs"?f.push(`<g stroke="${Vt}" stroke-width="3.5" fill="rgba(255,255,255,.25)"><circle cx="${c-11}" cy="${R}" r="8"/><circle cx="${c+11}" cy="${R}" r="8"/><path d="M${c-3} ${R} L${c+3} ${R}"/></g>`):C==="moustache"||C==="mustache"||C==="tache"?f.push(`<path d="M${c} ${p+12} q-8 -6 -16 0 q6 6 16 0 q8 -6 16 0 q-6 6 -16 0z" fill="${l}" stroke="${Vt}" stroke-width="3" stroke-linejoin="round"/>`):C==="headphones"||C==="earbuds"?f.push(`<path d="M${c-d-2} ${p+2} Q${c} ${_-22} ${c+d+2} ${p+2}" fill="none" stroke="${Vt}" stroke-width="7"/><rect x="${c-d-8}" y="${p-6}" width="12" height="20" rx="5" fill="${r}" stroke="${Vt}" stroke-width="4"/><rect x="${c+d-4}" y="${p-6}" width="12" height="20" rx="5" fill="${r}" stroke="${Vt}" stroke-width="4"/>`):C==="beard"?f.push(`<path d="M${c-d+4} ${p+4} Q${c-d+6} ${p+d+6} ${c} ${p+d+8} Q${c+d-6} ${p+d+6} ${c+d-4} ${p+4} Q${c+14} ${p+18} ${c} ${p+22} Q${c-14} ${p+18} ${c-d+4} ${p+4}Z" fill="${l}" stroke="${Vt}" stroke-width="3.5" stroke-linejoin="round"/>`):C==="scarf"?f.push(`<path d="M${c-20} ${b-4} Q${c} ${b+8} ${c+20} ${b-4} L${c+22} ${b+6} Q${c} ${b+18} ${c-22} ${b+6}Z" fill="${r}" stroke="${Vt}" stroke-width="3.5"/><rect x="${c+8}" y="${b+6}" width="9" height="22" rx="2" fill="${r}" stroke="${Vt}" stroke-width="3"/>`):C==="cape"?f.push(`<path d="M${c-22} ${b} L${c-46} 124 M${c+22} ${b} L${c+46} 124" stroke="${r}" stroke-width="8" stroke-linecap="round"/>`):C==="wristbands"||C==="bumbag"?f.push(`<rect x="${c-26}" y="${b+30}" width="${C==="bumbag"?30:14}" height="${C==="bumbag"?14:10}" rx="5" fill="${r}" stroke="${Vt}" stroke-width="3.5"/>`):C==="whistle"&&f.push(`<path d="M${c-10} ${b} Q${c} ${b+18} ${c+10} ${b}" fill="none" stroke="${r}" stroke-width="3"/><rect x="${c-6}" y="${b+12}" width="14" height="8" rx="3" fill="#cfd8e8" stroke="${Vt}" stroke-width="3"/>`);let N=i.hat;return N==="backwards-cap"?(f.push(`<path d="M${c-d+1} ${p-8} Q${c-d+2} ${_-10} ${c} ${_-10} Q${c+d-2} ${_-10} ${c+d-1} ${p-8}Z" fill="${s}" stroke="${Vt}" stroke-width="5" stroke-linejoin="round"/>`),f.push(`<path d="M${c-d+4} ${p-12} Q${c-d-14} ${p-14} ${c-d-18} ${p-4} L${c-d+2} ${p-4}Z" fill="${as(s,-.2)}" stroke="${Vt}" stroke-width="5" stroke-linejoin="round"/>`)):N==="cap"||N==="baseball cap"||N==="trucker"?(f.push(`<path d="M${c-d+1} ${p-8} Q${c-d+2} ${_-10} ${c} ${_-10} Q${c+d-2} ${_-10} ${c+d-1} ${p-8}Z" fill="${s}" stroke="${Vt}" stroke-width="5" stroke-linejoin="round"/>`),f.push(`<path d="M${c-6} ${p-10} Q${c+24} ${p-18} ${c+d+16} ${p-6} L${c+d-2} ${p-4}Z" fill="${as(s,-.2)}" stroke="${Vt}" stroke-width="5" stroke-linejoin="round"/>`),f.push(`<circle cx="${c}" cy="${_-10}" r="3.5" fill="${r}" stroke="${Vt}" stroke-width="2.5"/>`)):N==="beanie"||N==="bobble"||N==="bobble hat"||N==="woolly hat"?(f.push(`<path d="M${c-d} ${p-6} Q${c-d} ${_-14} ${c} ${_-14} Q${c+d} ${_-14} ${c+d} ${p-6}Z" fill="${r}" stroke="${Vt}" stroke-width="5" stroke-linejoin="round"/>`),f.push(`<rect x="${c-d-2}" y="${p-12}" width="${d*2+4}" height="11" rx="5" fill="${s}" stroke="${Vt}" stroke-width="5"/>`),f.push(`<circle cx="${c}" cy="${_-16}" r="8" fill="${s}" stroke="${Vt}" stroke-width="5"/>`)):N==="headband"||N==="sweatband"?(f.push(`<path d="M${c-d} ${p-13} Q${c} ${p-22} ${c+d} ${p-13} L${c+d+1} ${p-4} Q${c} ${p-13} ${c-d-1} ${p-4}Z" fill="${r}" stroke="${Vt}" stroke-width="4" stroke-linejoin="round"/>`),f.push(`<path d="M${c+d} ${p-9} l12 -4 l-2 10z" fill="${r}" stroke="${Vt}" stroke-width="3.5" stroke-linejoin="round"/>`)):N==="visor"?f.push(`<path d="M${c-d} ${p-12} Q${c} ${p-20} ${c+d} ${p-12} L${c+d} ${p-5} Q${c} ${p-12} ${c-d} ${p-5}Z" fill="${s}" stroke="${Vt}" stroke-width="4"/><path d="M${c-18} ${p-10} Q${c+4} ${p-2} ${c+30} ${p-10} L${c+20} ${p-15}Z" fill="${as(s,-.2)}" stroke="${Vt}" stroke-width="4" stroke-linejoin="round"/>`):N==="bucket"||N==="bucket hat"||N==="sun hat"?f.push(`<path d="M${c-d-12} ${p-6} L${c-d+4} ${_-8} Q${c} ${_-16} ${c+d-4} ${_-8} L${c+d+12} ${p-6} Q${c} ${p-14} ${c-d-12} ${p-6}Z" fill="${r}" stroke="${Vt}" stroke-width="5" stroke-linejoin="round"/>`):N==="party"||N==="party hat"?f.push(`<path d="M${c-14} ${_+4} L${c+4} ${_-30} L${c+16} ${_+2}Z" fill="${s}" stroke="${Vt}" stroke-width="5" stroke-linejoin="round"/><circle cx="${c+4}" cy="${_-32}" r="5" fill="${r}" stroke="${Vt}" stroke-width="3"/>`):N==="tophat"||N==="top hat"?f.push(`<rect x="${c-18}" y="${_-30}" width="36" height="30" rx="3" fill="${Vt}"/><rect x="${c-18}" y="${_-10}" width="36" height="7" fill="${s}"/><rect x="${c-30}" y="${_-2}" width="60" height="8" rx="4" fill="${Vt}"/>`):N==="crown"?f.push(`<path d="M${c-20} ${_+2} L${c-22} ${_-20} L${c-10} ${_-8} L${c} ${_-24} L${c+10} ${_-8} L${c+22} ${_-20} L${c+20} ${_+2}Z" fill="#ffcf3a" stroke="${Vt}" stroke-width="4" stroke-linejoin="round"/>`):N&&f.push(`<path d="M${c-d+1} ${p-8} Q${c-d+2} ${_-10} ${c} ${_-10} Q${c+d-2} ${_-10} ${c+d-1} ${p-8}Z" fill="${r}" stroke="${Vt}" stroke-width="5" stroke-linejoin="round"/>`),f.push("</g>"),f.push(`<circle cx="60" cy="60" r="56" fill="none" stroke="${Vt}" stroke-width="6"/>`),`<svg class="portrait" viewBox="0 0 120 120" width="${t}" height="${t}" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">${f.join("")}</svg>`}var Vd=/(daniel|george|arthur|ryan|oliver|thomas|male|james|harry|guy|brian|fred|alex|aaron)/i,Gd=/(kate|serena|martha|libby|sonia|hazel|susan|female|stephanie|fiona|moira|tessa|karen|emma|amy|samantha|victoria|zira|aria|jenny|catherine)/i;function fh({onLine:n,onIdle:t}={}){let e=typeof window<"u"?window.speechSynthesis:null,i=!0,s=.9,r={jeff:null,pam:null},o=[],a=null,l=null;function h(){if(!e)return;let M=e.getVoices()||[];if(!M.length)return;let x=M.filter(w=>/en[-_]GB/i.test(w.lang)),f=M.filter(w=>/^en/i.test(w.lang)),b=x.length?x:f.length?f:M,_=(w=>[...w.filter(R=>R.localService),...w.filter(R=>!R.localService)])(b),U=_.find(w=>Vd.test(w.name))||_[0],I=_.find(w=>Gd.test(w.name)&&w!==U)||_.find(w=>w!==U)||U;r={jeff:U,pam:I}}e&&(h(),e.addEventListener?.("voiceschanged",h));let u=M=>Math.max(2200,String(M).split(/\s+/).length*400+600);function m(){clearTimeout(l),a=null;let M=o.shift();if(!M){t?.();return}a=M,n?.(M);let x=()=>{a===M&&m()};if(i&&e&&(r.jeff||r.pam)){let f=new SpeechSynthesisUtterance(M.text),b=M.speaker==="pam"?r.pam:r.jeff;b?(f.voice=b,f.lang=b.lang):f.lang="en-GB";let v=r.jeff===r.pam;f.pitch=M.speaker==="pam"?v?1.35:1.08:v?.8:.95,f.rate=M.rate||1.06,f.volume=s,f.onend=x,f.onerror=x;try{e.speak(f)}catch{}l=setTimeout(()=>{try{e.cancel()}catch{}x()},u(M.text)*2.2+2e3)}else l=setTimeout(x,u(M.text))}function d(M,x="jeff",{priority:f=2,interrupt:b=!1}={}){if(!M)return;let v={text:String(M),speaker:x,priority:f,at:Date.now()};for(b&&(o.length=0,c()),o.push(v);o.length>2;){let _=0;for(let U=1;U<o.length;U++)o[U].priority<o[_].priority&&(_=U);o.splice(_,1)}a||m()}function c(){if(clearTimeout(l),e)try{e.cancel()}catch{}a=null}function p(){o.length=0,c(),t?.()}return{say:d,clear:p,get busy(){return!!a||o.length>0},get available(){return!!e},setEnabled(M){if(i=!!M,!i&&e)try{e.cancel()}catch{}},setVolume(M){s=Math.max(0,Math.min(1,M))},whenIdle(M=15e3){return new Promise(x=>{let f=Date.now(),b=setInterval(()=>{(!a&&!o.length||Date.now()-f>M)&&(clearInterval(b),x())},120)})},get voiceNames(){return{jeff:r.jeff?.name,pam:r.pam?.name}}}}var Wd=[1720,4220],Ia=2500;function Rn(n,t){if(t<=0)return 0;if(t>=n[200])return 5e3;let e=0,i=200;for(;i-e>1;){let r=e+i>>1;n[r]<=t?e=r:i=r}let s=(t-n[e])/(n[i]-n[e]);return(e+s)*25}function ls(n,t){let e=Math.max(0,Math.min(5e3,t))/25,i=Math.floor(e),s=Math.min(200,i+1);return n[i]+(e-i)*(n[s]-n[i])}function Xd(n,{dt:t=1,debounceS:e=6}={}){let i=n.map(g=>g.id),s=Math.max(...n.map(g=>g.officialS)),r=[...n].sort((g,S)=>g.officialS-S.officialS).map(g=>g.id),o=[];for(let g=0;g<=Math.ceil(s);g+=t){let S=n.map(T=>Rn(T.progress,g));o.push({t:g,d:S})}let a=[],l=n.length,h={},u=(g,S)=>`${g}-${S}`,m=null,d=0,c=null,p=0,M=0,x=0,f=!1,b=null;for(let g of o){if(g.t<15)continue;let S=n.map(N=>g.t>=N.officialS);for(let N=0;N<l;N++)for(let q=N+1;q<l;q++){if(S[N]&&S[q])continue;let A=g.d[N]>g.d[q]?N:q,H=h[u(N,q)];if(!H){h[u(N,q)]={ahead:A,cand:A,since:g.t};continue}if(A!==H.cand&&(H.cand=A,H.since=g.t),H.cand!==H.ahead&&g.t-H.since>=e){let V=H.cand,rt=H.cand===N?q:N;H.ahead=H.cand;let ot=H.since;x++,a.push({type:"overtake",raceS:ot,by:i[V],on:i[rt],atM:Math.round(Rn(n[V].progress,ot))})}}let T=g.d.indexOf(Math.max(...g.d));if(m===null){m=T,d=g.t;continue}T!==m?c!==T?(c=T,p=g.t):g.t-p>=e&&!S[m]&&(a.push({type:"lead_change",raceS:p,from:i[m],to:i[T],atM:Math.round(g.d[T])}),M++,g.d[T]>3500&&(f=!0),m=T,d=p,c=null):c=null;let C=[...g.d].sort((N,q)=>q-N);b===null&&C[0]-C[1]>60&&C[0]<5e3&&(b=g.t,a.push({type:"breakaway",raceS:g.t,who:i[T],gapM:Math.round(C[0]-C[1]),atM:Math.round(C[0])}))}let v=g=>Math.min(...n.map(S=>ls(S.progress,g)));for(let[g,S]of Wd.entries())a.push({type:"hill",raceS:v(S),lap:g+1,atM:S});a.push({type:"lap",raceS:v(Ia),atM:Ia,order:Pa(n,v(Ia))}),a.push({type:"final_stretch",raceS:v(4600),atM:4600,order:Pa(n,v(4600))});for(let g of n)a.push({type:"finish",raceS:g.officialS,who:g.id,place:r.indexOf(g.id)+1});a.sort((g,S)=>g.raceS-S.raceS);let _=n.map(g=>g.officialS).sort((g,S)=>g-S),U=g=>Pa(n,v(g)),I=U(2e3)[0],w=U(1e3)[0],R=U(4e3)[0],y=U(2e3).at(-1);return{finishOrder:r,winningMarginS:_[1]-_[0],spreadS:_.at(-1)-_[0],leadChanges:M,overtakes:x,lateLeadChange:f,leaderAt1k:w,leaderAt2k:I,leaderAt4k:R,leaderAt2kFinalPlace:r.indexOf(I)+1,winnerPlaceAt2k:U(2e3).indexOf(r[0])+1,winnerPlaceAt1k:U(1e3).indexOf(r[0])+1,lastAt2kFinalPlace:r.indexOf(y)+1,breakawayAtS:b,events:a}}function Pa(n,t){return n.map(e=>({id:e.id,d:Rn(e.progress,t),f:e.officialS})).sort((e,i)=>i.d-e.d||e.f-i.f).map(e=>e.id)}function qd(n,{targetS:t=140}={}){let e=Math.max(...n.map(f=>f.officialS)),i=Math.min(...n.map(f=>ls(f.progress,4500))),s=45,r=i,o=e+3,a=o-r,l=4,h=Math.min(t*.45,Math.max(25,a/1.6)),u=a/h,m=r-s,d=Math.max(30,t-s/l-h),c=m/d,p=f=>{let b=ph(s-10,s+10,f),v=ph(r-60,r,f);return l+(c-l)*b+(u-c)*v},M=[[0,0]],x=0;for(let f=1;f<=Math.ceil(o);f++)x+=1/p(f-.5),M.push([f,Math.round(x*1e3)/1e3]);return{map:M,durationS:Math.round(x*10)/10,raceEndS:Math.ceil(o),rates:{start:l,middle:Math.round(c*10)/10,finale:Math.round(u*100)/100}}}function ph(n,t,e){let i=Math.max(0,Math.min(1,(e-n)/(t-n)));return i*i*(3-2*i)}function qr(n,t){let e=n.map;if(t<=0)return 0;if(t>=e.length-1)return e.at(-1)[1];let i=Math.floor(t),s=t-i;return e[i][1]+s*(e[i+1][1]-e[i][1])}function cs(n,t){let e=n.map;if(t<=0)return 0;let i=0,s=e.length-1;if(t>=e[s][1])return e[s][0];for(;s-i>1;){let r=i+s>>1;e[r][1]<=t?i=r:s=r}return e[i][0]+(t-e[i][1])/(e[s][1]-e[i][1])}function mh(n,t,e={}){let i=Xd(t),s=qd(t,e),r=[...i.events];for(let a of t)for(let[l,h]of(a.diversions||[]).entries())r.push({type:"diversion",who:a.id,lap:l+1,raceS:ls(a.progress,h.fromM),endRaceS:ls(a.progress,h.toM),fromM:h.fromM,toM:h.toM});r.sort((a,l)=>a.raceS-l.raceS);let o=r.map(a=>({...a,broadcastS:Math.round(qr(s,a.raceS)*100)/100,...a.endRaceS!=null?{endBroadcastS:Math.round(qr(s,a.endRaceS)*100)/100}:{}}));return{roundId:n,courseLengthM:5e3,runners:t.map(a=>({id:a.id,officialS:a.officialS,progress:a.progress,pacingSource:a.pacingSource,diversions:a.diversions||null})),timeMap:s,events:o,finishOrder:i.finishOrder,summary:{winningMarginS:i.winningMarginS,spreadS:i.spreadS,leadChanges:i.leadChanges,overtakes:i.overtakes,lateLeadChange:i.lateLeadChange}}}var hs="#14183c";function gh(n,{course:t,round:e,plan:i,speed:s=1}){let r=document.createElement("canvas");r.style.cssText="position:absolute;inset:0;width:100%;height:100%;display:block",n.appendChild(r);let o=r.getContext("2d",{alpha:!1}),a=e?.runners||[],l=t?.points||[],h=0,u=!1,m=!1,d=0,c="idle",p=0,M=0,x=null,f=null,b=[],v=null,_=1/0,U=-1/0,I=1/0,w=-1/0;for(let A of l)_=Math.min(_,A[0]),U=Math.max(U,A[0]),I=Math.min(I,A[2]),w=Math.max(w,A[2]);function R(){let A=Math.min(1,1280/Math.max(1,n.clientWidth));r.width=Math.round(n.clientWidth*A),r.height=Math.round(n.clientHeight*A)}R();let y=new ResizeObserver(R);y.observe(n);function g(A,H){let V=r.width,rt=r.height,ot=rt*.16,D=rt*.24,St=V*.08,K=Math.min((V-St*2-V*.22)/(U-_||1),(rt-ot-D)/(w-I||1)),Y=St+(V-St*2-V*.22-(U-_)*K)/2,X=ot+(rt-ot-D-(w-I)*K)/2;return[Y+(A-_)*K,X+(H-I)*K,K]}function S(A){if(!l.length)return[0,0];let H=Math.max(0,Math.min(l.length-1,A/5e3*(l.length-1))),V=Math.floor(H),rt=Math.min(l.length-1,V+1),ot=H-V;return[l[V][0]+(l[rt][0]-l[V][0])*ot,l[V][2]+(l[rt][2]-l[V][2])*ot]}let T=null;function C(){let A=r.width,H=r.height;T=document.createElement("canvas"),T.width=A,T.height=H;let V=T.getContext("2d"),rt=V.createLinearGradient(0,0,0,H);rt.addColorStop(0,"#45cf86"),rt.addColorStop(1,"#1f9e5c"),V.fillStyle=rt,V.fillRect(0,0,A,H),V.fillStyle="rgba(255,255,255,.05)";let ot=A/1920;for(let D=-H;D<A;D+=160*ot)V.beginPath(),V.moveTo(D,0),V.lineTo(D+80*ot,0),V.lineTo(D+80*ot+H*.5,H),V.lineTo(D+H*.5,H),V.fill();if(l.length){let D=new Path2D;l.forEach((X,$)=>{let[Z,at]=g(X[0],X[2]);$?D.lineTo(Z,at):D.moveTo(Z,at)});let St=g(0,0)[2];V.lineCap="round",V.lineJoin="round",V.strokeStyle=hs,V.lineWidth=Math.max(16,St*14),V.stroke(D),V.strokeStyle="#fff",V.lineWidth=Math.max(12,St*11),V.stroke(D),V.strokeStyle="#6f84a8",V.lineWidth=Math.max(8,St*8),V.stroke(D);let[K,Y]=g(...t.finish?[t.finish[0],t.finish[1]]:[l.at(-1)[0],l.at(-1)[2]]);V.save(),V.translate(K,Y);for(let X=-2;X<2;X++)for(let $=-1;$<1;$++)V.fillStyle=X+$&1?"#fff":hs,V.fillRect(X*8,$*8,8,8);V.restore()}}function N(){let A=r.width,H=r.height;(!T||T.width!==A||T.height!==H)&&C(),o.drawImage(T,0,0);let V=i?cs(i.timeMap,d):0,rt=(i?.runners||[]).map($=>({id:$.id,m:Rn($.progress,V),done:V>=$.officialS,f:$.officialS}));rt.sort(($,Z)=>Z.m-$.m||$.f-Z.f);let ot=Math.max(14,A/90);for(let $ of[...rt].reverse()){let Z=a.find(Tt=>Tt.id===$.id),[at,xt]=g(...S($.m));o.beginPath(),o.arc(at,xt+4,ot,0,Math.PI*2),o.fillStyle="rgba(0,0,0,.25)",o.fill(),o.beginPath(),o.arc(at,xt,ot,0,Math.PI*2),o.fillStyle=Z?.colour?.primary||"#fff",o.fill(),o.lineWidth=ot*.28,o.strokeStyle=hs,o.stroke(),o.fillStyle="#fff",o.font=`${Math.round(ot*1.15)}px "Lilita One", sans-serif`,o.textAlign="center",o.textBaseline="middle",o.lineWidth=ot*.25,o.strokeText(String(Z?.lane??""),at,xt+1),o.fillText(String(Z?.lane??""),at,xt+1)}let D=A*.77,St=H*.16,K=H*.075;o.font=`${Math.round(H*.035)}px "Lilita One", sans-serif`,o.textAlign="left",o.textBaseline="middle",rt.forEach(($,Z)=>{let at=a.find(Tt=>Tt.id===$.id),xt=St+Z*K;o.save(),o.translate(D,xt),o.transform(1,0,-.14,1,0,0),o.fillStyle=hs,o.fillRect(4,6,A*.2,K*.82),o.fillStyle=Z===0?"#ffd23f":"#2a62e0",o.fillRect(0,0,A*.2,K*.82),o.fillStyle=at?.colour?.primary||"#fff",o.fillRect(0,0,A*.012,K*.82),o.restore(),o.fillStyle=Z===0?hs:"#fff",o.fillText(`${Z+1}  ${(at?.shortName||at?.nickname||$.id).slice(0,16)}`,D+A*.02,xt+K*.41)}),o.font=`${Math.round(H*.04)}px "Lilita One", sans-serif`,o.textAlign="left";let Y=Math.floor(V),X=`${Math.floor(Y/60)}:${String(Y%60).padStart(2,"0")}`;o.lineWidth=8,o.strokeStyle=hs,o.strokeText(X,D,St-H*.05),o.fillStyle="#ffd23f",o.fillText(X,D,St-H*.05)}function q(A){if(m)return;let H=p?Math.min(.1,(A-p)/1e3):0;if(p=A,c==="race"&&!u){for(d+=H*s;b.length&&b[0].broadcastS<=d;){let V=b.shift();try{x?.(V)}catch(rt){console.warn(rt)}}if(d>=(i.timeMap.durationS||0)+1.5){c="done";let V=f;f=null,V?.()}}A-M>30&&(M=A,N()),h=requestAnimationFrame(q)}return h=requestAnimationFrame(q),{kind:"2d",playIntro(A){setTimeout(()=>A?.(),10)},playRace(A,H){x=A,f=H,b=[...i.events||[],...i.commentary||[]].sort((V,rt)=>V.broadcastS-rt.broadcastS),d=0,c="race"},showPodium(A){v=A},setPaused(A){u=!!A},dispose(){m=!0,cancelAnimationFrame(h),y.disconnect(),r.remove()}}}var ts={};Bd(ts,{createRaceView:()=>Xy});var kc="170";var Yd=0,xh=1,Zd=2;var Pu=1,Uc=2,ei=3,Ci=0,Ze=1,Fe=2,Ai=0,Ls=1,yh=2,vh=3,_h=4,Jd=5,$i=100,Kd=101,jd=102,Qd=103,tf=104,ef=200,nf=201,sf=202,rf=203,dl=204,fl=205,of=206,af=207,lf=208,cf=209,hf=210,uf=211,df=212,ff=213,pf=214,pl=0,ml=1,gl=2,Ns=3,xl=4,yl=5,vl=6,_l=7,Lu=0,mf=1,gf=2,Vn=0,xf=1,yf=2,vf=3,_f=4,Mf=5,bf=6,Sf=7;var Du=300,Fs=301,Os=302,Ml=303,bl=304,fa=306,Xi=1e3,Gi=1001,Sl=1002,ln=1003,wf=1004;var Yr=1005;var Hn=1006,La=1007;var Wi=1008;var ri=1009,ku=1010,Uu=1011,xr=1012,Nc=1013,qi=1014,$n=1015,Pr=1016,Fc=1017,Oc=1018,zs=1020,Nu=35902,Fu=1021,Ou=1022,_n=1023,zu=1024,Bu=1025,Ds=1026,Bs=1027,zc=1028,Bc=1029,Hu=1030,Hc=1031;var $c=1033,To=33776,Ao=33777,Ro=33778,Co=33779,wl=35840,El=35841,Tl=35842,Al=35843,Rl=36196,Cl=37492,Il=37496,Pl=37808,Ll=37809,Dl=37810,kl=37811,Ul=37812,Nl=37813,Fl=37814,Ol=37815,zl=37816,Bl=37817,Hl=37818,$l=37819,Vl=37820,Gl=37821,Io=36492,Wl=36494,Xl=36495,$u=36283,ql=36284,Yl=36285,Zl=36286;var Po=2300,Jl=2301,Da=2302,Mh=2400,bh=2401,Sh=2402;var Ef=3200,Tf=3201;var Vu=0,Af=1,Ei="",qe="srgb",Ws="srgb-linear",pa="linear",be="srgb";var us=7680;var wh=519,Rf=512,Cf=513,If=514,Gu=515,Pf=516,Lf=517,Df=518,kf=519,Kl=35044;var Eh="300 es",ii=2e3,Lo=2001,Ii=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let i=this._listeners[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},tn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Th=1234567,dr=Math.PI/180,yr=180/Math.PI;function Gn(){let n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(tn[n&255]+tn[n>>8&255]+tn[n>>16&255]+tn[n>>24&255]+"-"+tn[t&255]+tn[t>>8&255]+"-"+tn[t>>16&15|64]+tn[t>>24&255]+"-"+tn[e&63|128]+tn[e>>8&255]+"-"+tn[e>>16&255]+tn[e>>24&255]+tn[i&255]+tn[i>>8&255]+tn[i>>16&255]+tn[i>>24&255]).toLowerCase()}function Ye(n,t,e){return Math.max(t,Math.min(e,n))}function Vc(n,t){return(n%t+t)%t}function Uf(n,t,e,i,s){return i+(n-t)*(s-i)/(e-t)}function Nf(n,t,e){return n!==t?(e-n)/(t-n):0}function fr(n,t,e){return(1-e)*n+e*t}function Ff(n,t,e,i){return fr(n,t,1-Math.exp(-e*i))}function Of(n,t=1){return t-Math.abs(Vc(n,t*2)-t)}function zf(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function Bf(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function Hf(n,t){return n+Math.floor(Math.random()*(t-n+1))}function $f(n,t){return n+Math.random()*(t-n)}function Vf(n){return n*(.5-Math.random())}function Gf(n){n!==void 0&&(Th=n);let t=Th+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Wf(n){return n*dr}function Xf(n){return n*yr}function qf(n){return(n&n-1)===0&&n!==0}function Yf(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Zf(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Jf(n,t,e,i,s){let r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),h=r((t+i)/2),u=o((t+i)/2),m=r((t-i)/2),d=o((t-i)/2),c=r((i-t)/2),p=o((i-t)/2);switch(s){case"XYX":n.set(a*u,l*m,l*d,a*h);break;case"YZY":n.set(l*d,a*u,l*m,a*h);break;case"ZXZ":n.set(l*m,l*d,a*u,a*h);break;case"XZX":n.set(a*u,l*p,l*c,a*h);break;case"YXY":n.set(l*c,a*u,l*p,a*h);break;case"ZYZ":n.set(l*p,l*c,a*u,a*h);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Ln(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Me(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var Wu={DEG2RAD:dr,RAD2DEG:yr,generateUUID:Gn,clamp:Ye,euclideanModulo:Vc,mapLinear:Uf,inverseLerp:Nf,lerp:fr,damp:Ff,pingpong:Of,smoothstep:zf,smootherstep:Bf,randInt:Hf,randFloat:$f,randFloatSpread:Vf,seededRandom:Gf,degToRad:Wf,radToDeg:Xf,isPowerOfTwo:qf,ceilPowerOfTwo:Yf,floorPowerOfTwo:Zf,setQuaternionFromProperEuler:Jf,normalize:Me,denormalize:Ln},Ct=class n{constructor(t=0,e=0){n.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(Ye(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ce=class n{constructor(t,e,i,s,r,o,a,l,h){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,h)}set(t,e,i,s,r,o,a,l,h){let u=this.elements;return u[0]=t,u[1]=s,u[2]=a,u[3]=e,u[4]=r,u[5]=l,u[6]=i,u[7]=o,u[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[3],l=i[6],h=i[1],u=i[4],m=i[7],d=i[2],c=i[5],p=i[8],M=s[0],x=s[3],f=s[6],b=s[1],v=s[4],_=s[7],U=s[2],I=s[5],w=s[8];return r[0]=o*M+a*b+l*U,r[3]=o*x+a*v+l*I,r[6]=o*f+a*_+l*w,r[1]=h*M+u*b+m*U,r[4]=h*x+u*v+m*I,r[7]=h*f+u*_+m*w,r[2]=d*M+c*b+p*U,r[5]=d*x+c*v+p*I,r[8]=d*f+c*_+p*w,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],h=t[7],u=t[8];return e*o*u-e*a*h-i*r*u+i*a*l+s*r*h-s*o*l}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],h=t[7],u=t[8],m=u*o-a*h,d=a*l-u*r,c=h*r-o*l,p=e*m+i*d+s*c;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let M=1/p;return t[0]=m*M,t[1]=(s*h-u*i)*M,t[2]=(a*i-s*o)*M,t[3]=d*M,t[4]=(u*e-s*l)*M,t[5]=(s*r-a*e)*M,t[6]=c*M,t[7]=(i*l-h*e)*M,t[8]=(o*e-i*r)*M,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,o,a){let l=Math.cos(r),h=Math.sin(r);return this.set(i*l,i*h,-i*(l*o+h*a)+o+t,-s*h,s*l,-s*(-h*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(ka.makeScale(t,e)),this}rotate(t){return this.premultiply(ka.makeRotation(-t)),this}translate(t,e){return this.premultiply(ka.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},ka=new ce;function Xu(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function Do(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Kf(){let n=Do("canvas");return n.style.display="block",n}var Ah={};function hr(n){n in Ah||(Ah[n]=!0,console.warn(n))}function jf(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}function Qf(n){let t=n.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function tp(n){let t=n.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var pe={enabled:!0,workingColorSpace:Ws,spaces:{},convert:function(n,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===be&&(n.r=si(n.r),n.g=si(n.g),n.b=si(n.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(n.applyMatrix3(this.spaces[t].toXYZ),n.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===be&&(n.r=ks(n.r),n.g=ks(n.g),n.b=ks(n.b))),n},fromWorkingColorSpace:function(n,t){return this.convert(n,this.workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===Ei?pa:this.spaces[n].transfer},getLuminanceCoefficients:function(n,t=this.workingColorSpace){return n.fromArray(this.spaces[t].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,t,e){return n.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function si(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ks(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Rh=[.64,.33,.3,.6,.15,.06],Ch=[.2126,.7152,.0722],Ih=[.3127,.329],Ph=new ce().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Lh=new ce().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);pe.define({[Ws]:{primaries:Rh,whitePoint:Ih,transfer:pa,toXYZ:Ph,fromXYZ:Lh,luminanceCoefficients:Ch,workingColorSpaceConfig:{unpackColorSpace:qe},outputColorSpaceConfig:{drawingBufferColorSpace:qe}},[qe]:{primaries:Rh,whitePoint:Ih,transfer:be,toXYZ:Ph,fromXYZ:Lh,luminanceCoefficients:Ch,outputColorSpaceConfig:{drawingBufferColorSpace:qe}}});var ds,jl=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ds===void 0&&(ds=Do("canvas")),ds.width=t.width,ds.height=t.height;let i=ds.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=ds}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Do("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=si(r[o]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(si(e[i]/255)*255):e[i]=si(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},ep=0,ko=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ep++}),this.uuid=Gn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Ua(s[o].image)):r.push(Ua(s[o]))}else r=Ua(s);i.url=r}return e||(t.images[this.uuid]=i),i}};function Ua(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?jl.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var np=0,pn=class n extends Ii{constructor(t=n.DEFAULT_IMAGE,e=n.DEFAULT_MAPPING,i=Gi,s=Gi,r=Hn,o=Wi,a=_n,l=ri,h=n.DEFAULT_ANISOTROPY,u=Ei){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:np++}),this.uuid=Gn(),this.name="",this.source=new ko(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=h,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ct(0,0),this.repeat=new Ct(1,1),this.center=new Ct(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ce,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Du)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Xi:t.x=t.x-Math.floor(t.x);break;case Gi:t.x=t.x<0?0:1;break;case Sl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Xi:t.y=t.y-Math.floor(t.y);break;case Gi:t.y=t.y<0?0:1;break;case Sl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};pn.DEFAULT_IMAGE=null;pn.DEFAULT_MAPPING=Du;pn.DEFAULT_ANISOTROPY=1;var Ne=class n{constructor(t=0,e=0,i=0,s=1){n.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r,l=t.elements,h=l[0],u=l[4],m=l[8],d=l[1],c=l[5],p=l[9],M=l[2],x=l[6],f=l[10];if(Math.abs(u-d)<.01&&Math.abs(m-M)<.01&&Math.abs(p-x)<.01){if(Math.abs(u+d)<.1&&Math.abs(m+M)<.1&&Math.abs(p+x)<.1&&Math.abs(h+c+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let v=(h+1)/2,_=(c+1)/2,U=(f+1)/2,I=(u+d)/4,w=(m+M)/4,R=(p+x)/4;return v>_&&v>U?v<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(v),s=I/i,r=w/i):_>U?_<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),i=I/s,r=R/s):U<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(U),i=w/r,s=R/r),this.set(i,s,r,e),this}let b=Math.sqrt((x-p)*(x-p)+(m-M)*(m-M)+(d-u)*(d-u));return Math.abs(b)<.001&&(b=1),this.x=(x-p)/b,this.y=(m-M)/b,this.z=(d-u)/b,this.w=Math.acos((h+c+f-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Ql=class extends Ii{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Ne(0,0,t,e),this.scissorTest=!1,this.viewport=new Ne(0,0,t,e);let s={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Hn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);let r=new pn(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];let o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new ko(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},oi=class extends Ql{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},Uo=class extends pn{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=ln,this.minFilter=ln,this.wrapR=Gi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var tc=class extends pn{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=ln,this.minFilter=ln,this.wrapR=Gi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Wn=class{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,o,a){let l=i[s+0],h=i[s+1],u=i[s+2],m=i[s+3],d=r[o+0],c=r[o+1],p=r[o+2],M=r[o+3];if(a===0){t[e+0]=l,t[e+1]=h,t[e+2]=u,t[e+3]=m;return}if(a===1){t[e+0]=d,t[e+1]=c,t[e+2]=p,t[e+3]=M;return}if(m!==M||l!==d||h!==c||u!==p){let x=1-a,f=l*d+h*c+u*p+m*M,b=f>=0?1:-1,v=1-f*f;if(v>Number.EPSILON){let U=Math.sqrt(v),I=Math.atan2(U,f*b);x=Math.sin(x*I)/U,a=Math.sin(a*I)/U}let _=a*b;if(l=l*x+d*_,h=h*x+c*_,u=u*x+p*_,m=m*x+M*_,x===1-a){let U=1/Math.sqrt(l*l+h*h+u*u+m*m);l*=U,h*=U,u*=U,m*=U}}t[e]=l,t[e+1]=h,t[e+2]=u,t[e+3]=m}static multiplyQuaternionsFlat(t,e,i,s,r,o){let a=i[s],l=i[s+1],h=i[s+2],u=i[s+3],m=r[o],d=r[o+1],c=r[o+2],p=r[o+3];return t[e]=a*p+u*m+l*c-h*d,t[e+1]=l*p+u*d+h*m-a*c,t[e+2]=h*p+u*c+a*d-l*m,t[e+3]=u*p-a*m-l*d-h*c,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,h=a(i/2),u=a(s/2),m=a(r/2),d=l(i/2),c=l(s/2),p=l(r/2);switch(o){case"XYZ":this._x=d*u*m+h*c*p,this._y=h*c*m-d*u*p,this._z=h*u*p+d*c*m,this._w=h*u*m-d*c*p;break;case"YXZ":this._x=d*u*m+h*c*p,this._y=h*c*m-d*u*p,this._z=h*u*p-d*c*m,this._w=h*u*m+d*c*p;break;case"ZXY":this._x=d*u*m-h*c*p,this._y=h*c*m+d*u*p,this._z=h*u*p+d*c*m,this._w=h*u*m-d*c*p;break;case"ZYX":this._x=d*u*m-h*c*p,this._y=h*c*m+d*u*p,this._z=h*u*p-d*c*m,this._w=h*u*m+d*c*p;break;case"YZX":this._x=d*u*m+h*c*p,this._y=h*c*m+d*u*p,this._z=h*u*p-d*c*m,this._w=h*u*m-d*c*p;break;case"XZY":this._x=d*u*m-h*c*p,this._y=h*c*m-d*u*p,this._z=h*u*p+d*c*m,this._w=h*u*m+d*c*p;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],h=e[2],u=e[6],m=e[10],d=i+a+m;if(d>0){let c=.5/Math.sqrt(d+1);this._w=.25/c,this._x=(u-l)*c,this._y=(r-h)*c,this._z=(o-s)*c}else if(i>a&&i>m){let c=2*Math.sqrt(1+i-a-m);this._w=(u-l)/c,this._x=.25*c,this._y=(s+o)/c,this._z=(r+h)/c}else if(a>m){let c=2*Math.sqrt(1+a-i-m);this._w=(r-h)/c,this._x=(s+o)/c,this._y=.25*c,this._z=(l+u)/c}else{let c=2*Math.sqrt(1+m-i-a);this._w=(o-s)/c,this._x=(r+h)/c,this._y=(l+u)/c,this._z=.25*c}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ye(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,h=e._z,u=e._w;return this._x=i*u+o*a+s*h-r*l,this._y=s*u+o*l+r*a-i*h,this._z=r*u+o*h+i*l-s*a,this._w=o*u-i*a-s*l-r*h,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let i=this._x,s=this._y,r=this._z,o=this._w,a=o*t._w+i*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let c=1-e;return this._w=c*o+e*this._w,this._x=c*i+e*this._x,this._y=c*s+e*this._y,this._z=c*r+e*this._z,this.normalize(),this}let h=Math.sqrt(l),u=Math.atan2(h,a),m=Math.sin((1-e)*u)/h,d=Math.sin(e*u)/h;return this._w=o*m+this._w*d,this._x=i*m+this._x*d,this._y=s*m+this._y*d,this._z=r*m+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},G=class n{constructor(t=0,e=0,i=0){n.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Dh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Dh.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,h=2*(o*s-a*i),u=2*(a*e-r*s),m=2*(r*i-o*e);return this.x=e+l*h+o*m-a*u,this.y=i+l*u+a*h-r*m,this.z=s+l*m+r*u-o*h,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Na.copy(this).projectOnVector(t),this.sub(Na)}reflect(t){return this.sub(Na.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(Ye(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Na=new G,Dh=new Wn,ai=class{constructor(t=new G(1/0,1/0,1/0),e=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Cn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Cn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=Cn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Cn):Cn.fromBufferAttribute(r,o),Cn.applyMatrix4(t.matrixWorld),this.expandByPoint(Cn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Zr.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Zr.copy(i.boundingBox)),Zr.applyMatrix4(t.matrixWorld),this.union(Zr)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Cn),Cn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(tr),Jr.subVectors(this.max,tr),fs.subVectors(t.a,tr),ps.subVectors(t.b,tr),ms.subVectors(t.c,tr),vi.subVectors(ps,fs),_i.subVectors(ms,ps),Ui.subVectors(fs,ms);let e=[0,-vi.z,vi.y,0,-_i.z,_i.y,0,-Ui.z,Ui.y,vi.z,0,-vi.x,_i.z,0,-_i.x,Ui.z,0,-Ui.x,-vi.y,vi.x,0,-_i.y,_i.x,0,-Ui.y,Ui.x,0];return!Fa(e,fs,ps,ms,Jr)||(e=[1,0,0,0,1,0,0,0,1],!Fa(e,fs,ps,ms,Jr))?!1:(Kr.crossVectors(vi,_i),e=[Kr.x,Kr.y,Kr.z],Fa(e,fs,ps,ms,Jr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Cn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Cn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Jn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Jn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Jn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Jn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Jn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Jn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Jn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Jn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Jn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},Jn=[new G,new G,new G,new G,new G,new G,new G,new G],Cn=new G,Zr=new ai,fs=new G,ps=new G,ms=new G,vi=new G,_i=new G,Ui=new G,tr=new G,Jr=new G,Kr=new G,Ni=new G;function Fa(n,t,e,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Ni.fromArray(n,r);let a=s.x*Math.abs(Ni.x)+s.y*Math.abs(Ni.y)+s.z*Math.abs(Ni.z),l=t.dot(Ni),h=e.dot(Ni),u=i.dot(Ni);if(Math.max(-Math.max(l,h,u),Math.min(l,h,u))>a)return!1}return!0}var ip=new ai,er=new G,Oa=new G,Pi=class{constructor(t=new G,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):ip.setFromPoints(t).getCenter(i);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;er.subVectors(t,this.center);let e=er.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(er,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Oa.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(er.copy(t.center).add(Oa)),this.expandByPoint(er.copy(t.center).sub(Oa))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},Kn=new G,za=new G,jr=new G,Mi=new G,Ba=new G,Qr=new G,Ha=new G,No=class{constructor(t=new G,e=new G(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Kn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Kn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Kn.copy(this.origin).addScaledVector(this.direction,e),Kn.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){za.copy(t).add(e).multiplyScalar(.5),jr.copy(e).sub(t).normalize(),Mi.copy(this.origin).sub(za);let r=t.distanceTo(e)*.5,o=-this.direction.dot(jr),a=Mi.dot(this.direction),l=-Mi.dot(jr),h=Mi.lengthSq(),u=Math.abs(1-o*o),m,d,c,p;if(u>0)if(m=o*l-a,d=o*a-l,p=r*u,m>=0)if(d>=-p)if(d<=p){let M=1/u;m*=M,d*=M,c=m*(m+o*d+2*a)+d*(o*m+d+2*l)+h}else d=r,m=Math.max(0,-(o*d+a)),c=-m*m+d*(d+2*l)+h;else d=-r,m=Math.max(0,-(o*d+a)),c=-m*m+d*(d+2*l)+h;else d<=-p?(m=Math.max(0,-(-o*r+a)),d=m>0?-r:Math.min(Math.max(-r,-l),r),c=-m*m+d*(d+2*l)+h):d<=p?(m=0,d=Math.min(Math.max(-r,-l),r),c=d*(d+2*l)+h):(m=Math.max(0,-(o*r+a)),d=m>0?r:Math.min(Math.max(-r,-l),r),c=-m*m+d*(d+2*l)+h);else d=o>0?-r:r,m=Math.max(0,-(o*d+a)),c=-m*m+d*(d+2*l)+h;return i&&i.copy(this.origin).addScaledVector(this.direction,m),s&&s.copy(za).addScaledVector(jr,d),c}intersectSphere(t,e){Kn.subVectors(t.center,this.origin);let i=Kn.dot(this.direction),s=Kn.dot(Kn)-i*i,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,o,a,l,h=1/this.direction.x,u=1/this.direction.y,m=1/this.direction.z,d=this.origin;return h>=0?(i=(t.min.x-d.x)*h,s=(t.max.x-d.x)*h):(i=(t.max.x-d.x)*h,s=(t.min.x-d.x)*h),u>=0?(r=(t.min.y-d.y)*u,o=(t.max.y-d.y)*u):(r=(t.max.y-d.y)*u,o=(t.min.y-d.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),m>=0?(a=(t.min.z-d.z)*m,l=(t.max.z-d.z)*m):(a=(t.max.z-d.z)*m,l=(t.min.z-d.z)*m),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,Kn)!==null}intersectTriangle(t,e,i,s,r){Ba.subVectors(e,t),Qr.subVectors(i,t),Ha.crossVectors(Ba,Qr);let o=this.direction.dot(Ha),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Mi.subVectors(this.origin,t);let l=a*this.direction.dot(Qr.crossVectors(Mi,Qr));if(l<0)return null;let h=a*this.direction.dot(Ba.cross(Mi));if(h<0||l+h>o)return null;let u=-a*Mi.dot(Ha);return u<0?null:this.at(u/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ge=class n{constructor(t,e,i,s,r,o,a,l,h,u,m,d,c,p,M,x){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,h,u,m,d,c,p,M,x)}set(t,e,i,s,r,o,a,l,h,u,m,d,c,p,M,x){let f=this.elements;return f[0]=t,f[4]=e,f[8]=i,f[12]=s,f[1]=r,f[5]=o,f[9]=a,f[13]=l,f[2]=h,f[6]=u,f[10]=m,f[14]=d,f[3]=c,f[7]=p,f[11]=M,f[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,i=t.elements,s=1/gs.setFromMatrixColumn(t,0).length(),r=1/gs.setFromMatrixColumn(t,1).length(),o=1/gs.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),h=Math.sin(s),u=Math.cos(r),m=Math.sin(r);if(t.order==="XYZ"){let d=o*u,c=o*m,p=a*u,M=a*m;e[0]=l*u,e[4]=-l*m,e[8]=h,e[1]=c+p*h,e[5]=d-M*h,e[9]=-a*l,e[2]=M-d*h,e[6]=p+c*h,e[10]=o*l}else if(t.order==="YXZ"){let d=l*u,c=l*m,p=h*u,M=h*m;e[0]=d+M*a,e[4]=p*a-c,e[8]=o*h,e[1]=o*m,e[5]=o*u,e[9]=-a,e[2]=c*a-p,e[6]=M+d*a,e[10]=o*l}else if(t.order==="ZXY"){let d=l*u,c=l*m,p=h*u,M=h*m;e[0]=d-M*a,e[4]=-o*m,e[8]=p+c*a,e[1]=c+p*a,e[5]=o*u,e[9]=M-d*a,e[2]=-o*h,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let d=o*u,c=o*m,p=a*u,M=a*m;e[0]=l*u,e[4]=p*h-c,e[8]=d*h+M,e[1]=l*m,e[5]=M*h+d,e[9]=c*h-p,e[2]=-h,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let d=o*l,c=o*h,p=a*l,M=a*h;e[0]=l*u,e[4]=M-d*m,e[8]=p*m+c,e[1]=m,e[5]=o*u,e[9]=-a*u,e[2]=-h*u,e[6]=c*m+p,e[10]=d-M*m}else if(t.order==="XZY"){let d=o*l,c=o*h,p=a*l,M=a*h;e[0]=l*u,e[4]=-m,e[8]=h*u,e[1]=d*m+M,e[5]=o*u,e[9]=c*m-p,e[2]=p*m-c,e[6]=a*u,e[10]=M*m+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(sp,t,rp)}lookAt(t,e,i){let s=this.elements;return yn.subVectors(t,e),yn.lengthSq()===0&&(yn.z=1),yn.normalize(),bi.crossVectors(i,yn),bi.lengthSq()===0&&(Math.abs(i.z)===1?yn.x+=1e-4:yn.z+=1e-4,yn.normalize(),bi.crossVectors(i,yn)),bi.normalize(),to.crossVectors(yn,bi),s[0]=bi.x,s[4]=to.x,s[8]=yn.x,s[1]=bi.y,s[5]=to.y,s[9]=yn.y,s[2]=bi.z,s[6]=to.z,s[10]=yn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[4],l=i[8],h=i[12],u=i[1],m=i[5],d=i[9],c=i[13],p=i[2],M=i[6],x=i[10],f=i[14],b=i[3],v=i[7],_=i[11],U=i[15],I=s[0],w=s[4],R=s[8],y=s[12],g=s[1],S=s[5],T=s[9],C=s[13],N=s[2],q=s[6],A=s[10],H=s[14],V=s[3],rt=s[7],ot=s[11],D=s[15];return r[0]=o*I+a*g+l*N+h*V,r[4]=o*w+a*S+l*q+h*rt,r[8]=o*R+a*T+l*A+h*ot,r[12]=o*y+a*C+l*H+h*D,r[1]=u*I+m*g+d*N+c*V,r[5]=u*w+m*S+d*q+c*rt,r[9]=u*R+m*T+d*A+c*ot,r[13]=u*y+m*C+d*H+c*D,r[2]=p*I+M*g+x*N+f*V,r[6]=p*w+M*S+x*q+f*rt,r[10]=p*R+M*T+x*A+f*ot,r[14]=p*y+M*C+x*H+f*D,r[3]=b*I+v*g+_*N+U*V,r[7]=b*w+v*S+_*q+U*rt,r[11]=b*R+v*T+_*A+U*ot,r[15]=b*y+v*C+_*H+U*D,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],h=t[13],u=t[2],m=t[6],d=t[10],c=t[14],p=t[3],M=t[7],x=t[11],f=t[15];return p*(+r*l*m-s*h*m-r*a*d+i*h*d+s*a*c-i*l*c)+M*(+e*l*c-e*h*d+r*o*d-s*o*c+s*h*u-r*l*u)+x*(+e*h*m-e*a*c-r*o*m+i*o*c+r*a*u-i*h*u)+f*(-s*a*u-e*l*m+e*a*d+s*o*m-i*o*d+i*l*u)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],h=t[7],u=t[8],m=t[9],d=t[10],c=t[11],p=t[12],M=t[13],x=t[14],f=t[15],b=m*x*h-M*d*h+M*l*c-a*x*c-m*l*f+a*d*f,v=p*d*h-u*x*h-p*l*c+o*x*c+u*l*f-o*d*f,_=u*M*h-p*m*h+p*a*c-o*M*c-u*a*f+o*m*f,U=p*m*l-u*M*l-p*a*d+o*M*d+u*a*x-o*m*x,I=e*b+i*v+s*_+r*U;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let w=1/I;return t[0]=b*w,t[1]=(M*d*r-m*x*r-M*s*c+i*x*c+m*s*f-i*d*f)*w,t[2]=(a*x*r-M*l*r+M*s*h-i*x*h-a*s*f+i*l*f)*w,t[3]=(m*l*r-a*d*r-m*s*h+i*d*h+a*s*c-i*l*c)*w,t[4]=v*w,t[5]=(u*x*r-p*d*r+p*s*c-e*x*c-u*s*f+e*d*f)*w,t[6]=(p*l*r-o*x*r-p*s*h+e*x*h+o*s*f-e*l*f)*w,t[7]=(o*d*r-u*l*r+u*s*h-e*d*h-o*s*c+e*l*c)*w,t[8]=_*w,t[9]=(p*m*r-u*M*r-p*i*c+e*M*c+u*i*f-e*m*f)*w,t[10]=(o*M*r-p*a*r+p*i*h-e*M*h-o*i*f+e*a*f)*w,t[11]=(u*a*r-o*m*r-u*i*h+e*m*h+o*i*c-e*a*c)*w,t[12]=U*w,t[13]=(u*M*s-p*m*s+p*i*d-e*M*d-u*i*x+e*m*x)*w,t[14]=(p*a*s-o*M*s-p*i*l+e*M*l+o*i*x-e*a*x)*w,t[15]=(o*m*s-u*a*s+u*i*l-e*m*l-o*i*d+e*a*d)*w,this}scale(t){let e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),s=Math.sin(e),r=1-i,o=t.x,a=t.y,l=t.z,h=r*o,u=r*a;return this.set(h*o+i,h*a-s*l,h*l+s*a,0,h*a+s*l,u*a+i,u*l-s*o,0,h*l-s*a,u*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,h=r+r,u=o+o,m=a+a,d=r*h,c=r*u,p=r*m,M=o*u,x=o*m,f=a*m,b=l*h,v=l*u,_=l*m,U=i.x,I=i.y,w=i.z;return s[0]=(1-(M+f))*U,s[1]=(c+_)*U,s[2]=(p-v)*U,s[3]=0,s[4]=(c-_)*I,s[5]=(1-(d+f))*I,s[6]=(x+b)*I,s[7]=0,s[8]=(p+v)*w,s[9]=(x-b)*w,s[10]=(1-(d+M))*w,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){let s=this.elements,r=gs.set(s[0],s[1],s[2]).length(),o=gs.set(s[4],s[5],s[6]).length(),a=gs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],In.copy(this);let h=1/r,u=1/o,m=1/a;return In.elements[0]*=h,In.elements[1]*=h,In.elements[2]*=h,In.elements[4]*=u,In.elements[5]*=u,In.elements[6]*=u,In.elements[8]*=m,In.elements[9]*=m,In.elements[10]*=m,e.setFromRotationMatrix(In),i.x=r,i.y=o,i.z=a,this}makePerspective(t,e,i,s,r,o,a=ii){let l=this.elements,h=2*r/(e-t),u=2*r/(i-s),m=(e+t)/(e-t),d=(i+s)/(i-s),c,p;if(a===ii)c=-(o+r)/(o-r),p=-2*o*r/(o-r);else if(a===Lo)c=-o/(o-r),p=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=m,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=c,l[14]=p,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,s,r,o,a=ii){let l=this.elements,h=1/(e-t),u=1/(i-s),m=1/(o-r),d=(e+t)*h,c=(i+s)*u,p,M;if(a===ii)p=(o+r)*m,M=-2*m;else if(a===Lo)p=r*m,M=-1*m;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*h,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-c,l[2]=0,l[6]=0,l[10]=M,l[14]=-p,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}},gs=new G,In=new ge,sp=new G(0,0,0),rp=new G(1,1,1),bi=new G,to=new G,yn=new G,kh=new ge,Uh=new Wn,Dn=class n{constructor(t=0,e=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],h=s[5],u=s[9],m=s[2],d=s[6],c=s[10];switch(e){case"XYZ":this._y=Math.asin(Ye(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,c),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Ye(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,c),this._z=Math.atan2(l,h)):(this._y=Math.atan2(-m,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ye(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-m,c),this._z=Math.atan2(-o,h)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ye(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(d,c),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,h));break;case"YZX":this._z=Math.asin(Ye(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,h),this._y=Math.atan2(-m,r)):(this._x=0,this._y=Math.atan2(a,c));break;case"XZY":this._z=Math.asin(-Ye(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,h),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,c),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return kh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(kh,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Uh.setFromEuler(this),this.setFromQuaternion(Uh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Dn.DEFAULT_ORDER="XYZ";var Fo=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},op=0,Nh=new G,xs=new Wn,jn=new ge,eo=new G,nr=new G,ap=new G,lp=new Wn,Fh=new G(1,0,0),Oh=new G(0,1,0),zh=new G(0,0,1),Bh={type:"added"},cp={type:"removed"},ys={type:"childadded",child:null},$a={type:"childremoved",child:null},Pe=class n extends Ii{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:op++}),this.uuid=Gn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new G,e=new Dn,i=new Wn,s=new G(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ge},normalMatrix:{value:new ce}}),this.matrix=new ge,this.matrixWorld=new ge,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Fo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return xs.setFromAxisAngle(t,e),this.quaternion.multiply(xs),this}rotateOnWorldAxis(t,e){return xs.setFromAxisAngle(t,e),this.quaternion.premultiply(xs),this}rotateX(t){return this.rotateOnAxis(Fh,t)}rotateY(t){return this.rotateOnAxis(Oh,t)}rotateZ(t){return this.rotateOnAxis(zh,t)}translateOnAxis(t,e){return Nh.copy(t).applyQuaternion(this.quaternion),this.position.add(Nh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Fh,t)}translateY(t){return this.translateOnAxis(Oh,t)}translateZ(t){return this.translateOnAxis(zh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(jn.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?eo.copy(t):eo.set(t,e,i);let s=this.parent;this.updateWorldMatrix(!0,!1),nr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?jn.lookAt(nr,eo,this.up):jn.lookAt(eo,nr,this.up),this.quaternion.setFromRotationMatrix(jn),s&&(jn.extractRotation(s.matrixWorld),xs.setFromRotationMatrix(jn),this.quaternion.premultiply(xs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Bh),ys.child=t,this.dispatchEvent(ys),ys.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(cp),$a.child=t,this.dispatchEvent($a),$a.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),jn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),jn.multiply(t.parent.matrixWorld)),t.applyMatrix4(jn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Bh),ys.child=t,this.dispatchEvent(ys),ys.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(nr,t,ap),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(nr,lp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let h=0,u=l.length;h<u;h++){let m=l[h];r(t.shapes,m)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,h=this.material.length;l<h;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),h=o(t.textures),u=o(t.images),m=o(t.shapes),d=o(t.skeletons),c=o(t.animations),p=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),h.length>0&&(i.textures=h),u.length>0&&(i.images=u),m.length>0&&(i.shapes=m),d.length>0&&(i.skeletons=d),c.length>0&&(i.animations=c),p.length>0&&(i.nodes=p)}return i.object=s,i;function o(a){let l=[];for(let h in a){let u=a[h];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}};Pe.DEFAULT_UP=new G(0,1,0);Pe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Pe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Pn=new G,Qn=new G,Va=new G,ti=new G,vs=new G,_s=new G,Hh=new G,Ga=new G,Wa=new G,Xa=new G,qa=new Ne,Ya=new Ne,Za=new Ne,Ti=class n{constructor(t=new G,e=new G,i=new G){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),Pn.subVectors(t,e),s.cross(Pn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){Pn.subVectors(s,e),Qn.subVectors(i,e),Va.subVectors(t,e);let o=Pn.dot(Pn),a=Pn.dot(Qn),l=Pn.dot(Va),h=Qn.dot(Qn),u=Qn.dot(Va),m=o*h-a*a;if(m===0)return r.set(0,0,0),null;let d=1/m,c=(h*l-a*u)*d,p=(o*u-a*l)*d;return r.set(1-c-p,p,c)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,ti)===null?!1:ti.x>=0&&ti.y>=0&&ti.x+ti.y<=1}static getInterpolation(t,e,i,s,r,o,a,l){return this.getBarycoord(t,e,i,s,ti)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ti.x),l.addScaledVector(o,ti.y),l.addScaledVector(a,ti.z),l)}static getInterpolatedAttribute(t,e,i,s,r,o){return qa.setScalar(0),Ya.setScalar(0),Za.setScalar(0),qa.fromBufferAttribute(t,e),Ya.fromBufferAttribute(t,i),Za.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(qa,r.x),o.addScaledVector(Ya,r.y),o.addScaledVector(Za,r.z),o}static isFrontFacing(t,e,i,s){return Pn.subVectors(i,e),Qn.subVectors(t,e),Pn.cross(Qn).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Pn.subVectors(this.c,this.b),Qn.subVectors(this.a,this.b),Pn.cross(Qn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return n.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return n.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,s=this.b,r=this.c,o,a;vs.subVectors(s,i),_s.subVectors(r,i),Ga.subVectors(t,i);let l=vs.dot(Ga),h=_s.dot(Ga);if(l<=0&&h<=0)return e.copy(i);Wa.subVectors(t,s);let u=vs.dot(Wa),m=_s.dot(Wa);if(u>=0&&m<=u)return e.copy(s);let d=l*m-u*h;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),e.copy(i).addScaledVector(vs,o);Xa.subVectors(t,r);let c=vs.dot(Xa),p=_s.dot(Xa);if(p>=0&&c<=p)return e.copy(r);let M=c*h-l*p;if(M<=0&&h>=0&&p<=0)return a=h/(h-p),e.copy(i).addScaledVector(_s,a);let x=u*p-c*m;if(x<=0&&m-u>=0&&c-p>=0)return Hh.subVectors(r,s),a=(m-u)/(m-u+(c-p)),e.copy(s).addScaledVector(Hh,a);let f=1/(x+M+d);return o=M*f,a=d*f,e.copy(i).addScaledVector(vs,o).addScaledVector(_s,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},qu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Si={h:0,s:0,l:0},no={h:0,s:0,l:0};function Ja(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}var Qt=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=qe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,pe.toWorkingColorSpace(this,e),this}setRGB(t,e,i,s=pe.workingColorSpace){return this.r=t,this.g=e,this.b=i,pe.toWorkingColorSpace(this,s),this}setHSL(t,e,i,s=pe.workingColorSpace){if(t=Vc(t,1),e=Ye(e,0,1),i=Ye(i,0,1),e===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=Ja(o,r,t+1/3),this.g=Ja(o,r,t),this.b=Ja(o,r,t-1/3)}return pe.toWorkingColorSpace(this,s),this}setStyle(t,e=qe){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=qe){let i=qu[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=si(t.r),this.g=si(t.g),this.b=si(t.b),this}copyLinearToSRGB(t){return this.r=ks(t.r),this.g=ks(t.g),this.b=ks(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=qe){return pe.fromWorkingColorSpace(en.copy(this),t),Math.round(Ye(en.r*255,0,255))*65536+Math.round(Ye(en.g*255,0,255))*256+Math.round(Ye(en.b*255,0,255))}getHexString(t=qe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=pe.workingColorSpace){pe.fromWorkingColorSpace(en.copy(this),e);let i=en.r,s=en.g,r=en.b,o=Math.max(i,s,r),a=Math.min(i,s,r),l,h,u=(a+o)/2;if(a===o)l=0,h=0;else{let m=o-a;switch(h=u<=.5?m/(o+a):m/(2-o-a),o){case i:l=(s-r)/m+(s<r?6:0);break;case s:l=(r-i)/m+2;break;case r:l=(i-s)/m+4;break}l/=6}return t.h=l,t.s=h,t.l=u,t}getRGB(t,e=pe.workingColorSpace){return pe.fromWorkingColorSpace(en.copy(this),e),t.r=en.r,t.g=en.g,t.b=en.b,t}getStyle(t=qe){pe.fromWorkingColorSpace(en.copy(this),t);let e=en.r,i=en.g,s=en.b;return t!==qe?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(Si),this.setHSL(Si.h+t,Si.s+e,Si.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Si),t.getHSL(no);let i=fr(Si.h,no.h,e),s=fr(Si.s,no.s,e),r=fr(Si.l,no.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},en=new Qt;Qt.NAMES=qu;var hp=0,li=class extends Ii{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:hp++}),this.uuid=Gn(),this.name="",this.blending=Ls,this.side=Ci,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=dl,this.blendDst=fl,this.blendEquation=$i,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Qt(0,0,0),this.blendAlpha=0,this.depthFunc=Ns,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=wh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=us,this.stencilZFail=us,this.stencilZPass=us,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ls&&(i.blending=this.blending),this.side!==Ci&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==dl&&(i.blendSrc=this.blendSrc),this.blendDst!==fl&&(i.blendDst=this.blendDst),this.blendEquation!==$i&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ns&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==wh&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==us&&(i.stencilFail=this.stencilFail),this.stencilZFail!==us&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==us&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Sn=class extends li{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Qt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Dn,this.combine=Lu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var He=new G,io=new Ct,De=class{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Kl,this.updateRanges=[],this.gpuType=$n,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)io.fromBufferAttribute(this,e),io.applyMatrix3(t),this.setXY(e,io.x,io.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)He.fromBufferAttribute(this,e),He.applyMatrix3(t),this.setXYZ(e,He.x,He.y,He.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)He.fromBufferAttribute(this,e),He.applyMatrix4(t),this.setXYZ(e,He.x,He.y,He.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)He.fromBufferAttribute(this,e),He.applyNormalMatrix(t),this.setXYZ(e,He.x,He.y,He.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)He.fromBufferAttribute(this,e),He.transformDirection(t),this.setXYZ(e,He.x,He.y,He.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Ln(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Me(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ln(e,this.array)),e}setX(t,e){return this.normalized&&(e=Me(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ln(e,this.array)),e}setY(t,e){return this.normalized&&(e=Me(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ln(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Me(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ln(e,this.array)),e}setW(t,e){return this.normalized&&(e=Me(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Me(e,this.array),i=Me(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=Me(e,this.array),i=Me(i,this.array),s=Me(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=Me(e,this.array),i=Me(i,this.array),s=Me(s,this.array),r=Me(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Kl&&(t.usage=this.usage),t}};var Oo=class extends De{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var zo=class extends De{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var ie=class extends De{constructor(t,e,i){super(new Float32Array(t),e,i)}},up=0,bn=new ge,Ka=new Pe,Ms=new G,vn=new ai,ir=new ai,Xe=new G,Se=class n extends Ii{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:up++}),this.uuid=Gn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Xu(t)?zo:Oo)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new ce().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return bn.makeRotationFromQuaternion(t),this.applyMatrix4(bn),this}rotateX(t){return bn.makeRotationX(t),this.applyMatrix4(bn),this}rotateY(t){return bn.makeRotationY(t),this.applyMatrix4(bn),this}rotateZ(t){return bn.makeRotationZ(t),this.applyMatrix4(bn),this}translate(t,e,i){return bn.makeTranslation(t,e,i),this.applyMatrix4(bn),this}scale(t,e,i){return bn.makeScale(t,e,i),this.applyMatrix4(bn),this}lookAt(t){return Ka.lookAt(t),Ka.updateMatrix(),this.applyMatrix4(Ka.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ms).negate(),this.translate(Ms.x,Ms.y,Ms.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ie(i,3))}else{for(let i=0,s=e.count;i<s;i++){let r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ai);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){let r=e[i];vn.setFromBufferAttribute(r),this.morphTargetsRelative?(Xe.addVectors(this.boundingBox.min,vn.min),this.boundingBox.expandByPoint(Xe),Xe.addVectors(this.boundingBox.max,vn.max),this.boundingBox.expandByPoint(Xe)):(this.boundingBox.expandByPoint(vn.min),this.boundingBox.expandByPoint(vn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Pi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new G,1/0);return}if(t){let i=this.boundingSphere.center;if(vn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];ir.setFromBufferAttribute(a),this.morphTargetsRelative?(Xe.addVectors(vn.min,ir.min),vn.expandByPoint(Xe),Xe.addVectors(vn.max,ir.max),vn.expandByPoint(Xe)):(vn.expandByPoint(ir.min),vn.expandByPoint(ir.max))}vn.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)Xe.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(Xe));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let h=0,u=a.count;h<u;h++)Xe.fromBufferAttribute(a,h),l&&(Ms.fromBufferAttribute(t,h),Xe.add(Ms)),s=Math.max(s,i.distanceToSquared(Xe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new De(new Float32Array(4*i.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let R=0;R<i.count;R++)a[R]=new G,l[R]=new G;let h=new G,u=new G,m=new G,d=new Ct,c=new Ct,p=new Ct,M=new G,x=new G;function f(R,y,g){h.fromBufferAttribute(i,R),u.fromBufferAttribute(i,y),m.fromBufferAttribute(i,g),d.fromBufferAttribute(r,R),c.fromBufferAttribute(r,y),p.fromBufferAttribute(r,g),u.sub(h),m.sub(h),c.sub(d),p.sub(d);let S=1/(c.x*p.y-p.x*c.y);isFinite(S)&&(M.copy(u).multiplyScalar(p.y).addScaledVector(m,-c.y).multiplyScalar(S),x.copy(m).multiplyScalar(c.x).addScaledVector(u,-p.x).multiplyScalar(S),a[R].add(M),a[y].add(M),a[g].add(M),l[R].add(x),l[y].add(x),l[g].add(x))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let R=0,y=b.length;R<y;++R){let g=b[R],S=g.start,T=g.count;for(let C=S,N=S+T;C<N;C+=3)f(t.getX(C+0),t.getX(C+1),t.getX(C+2))}let v=new G,_=new G,U=new G,I=new G;function w(R){U.fromBufferAttribute(s,R),I.copy(U);let y=a[R];v.copy(y),v.sub(U.multiplyScalar(U.dot(y))).normalize(),_.crossVectors(I,y);let S=_.dot(l[R])<0?-1:1;o.setXYZW(R,v.x,v.y,v.z,S)}for(let R=0,y=b.length;R<y;++R){let g=b[R],S=g.start,T=g.count;for(let C=S,N=S+T;C<N;C+=3)w(t.getX(C+0)),w(t.getX(C+1)),w(t.getX(C+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new De(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let d=0,c=i.count;d<c;d++)i.setXYZ(d,0,0,0);let s=new G,r=new G,o=new G,a=new G,l=new G,h=new G,u=new G,m=new G;if(t)for(let d=0,c=t.count;d<c;d+=3){let p=t.getX(d+0),M=t.getX(d+1),x=t.getX(d+2);s.fromBufferAttribute(e,p),r.fromBufferAttribute(e,M),o.fromBufferAttribute(e,x),u.subVectors(o,r),m.subVectors(s,r),u.cross(m),a.fromBufferAttribute(i,p),l.fromBufferAttribute(i,M),h.fromBufferAttribute(i,x),a.add(u),l.add(u),h.add(u),i.setXYZ(p,a.x,a.y,a.z),i.setXYZ(M,l.x,l.y,l.z),i.setXYZ(x,h.x,h.y,h.z)}else for(let d=0,c=e.count;d<c;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),u.subVectors(o,r),m.subVectors(s,r),u.cross(m),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Xe.fromBufferAttribute(t,e),Xe.normalize(),t.setXYZ(e,Xe.x,Xe.y,Xe.z)}toNonIndexed(){function t(a,l){let h=a.array,u=a.itemSize,m=a.normalized,d=new h.constructor(l.length*u),c=0,p=0;for(let M=0,x=l.length;M<x;M++){a.isInterleavedBufferAttribute?c=l[M]*a.data.stride+a.offset:c=l[M]*u;for(let f=0;f<u;f++)d[p++]=h[c++]}return new De(d,u,m)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new n,i=this.index.array,s=this.attributes;for(let a in s){let l=s[a],h=t(l,i);e.setAttribute(a,h)}let r=this.morphAttributes;for(let a in r){let l=[],h=r[a];for(let u=0,m=h.length;u<m;u++){let d=h[u],c=t(d,i);l.push(c)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let h=o[a];e.addGroup(h.start,h.count,h.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let h in l)l[h]!==void 0&&(t[h]=l[h]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let l in i){let h=i[l];t.data.attributes[l]=h.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let h=this.morphAttributes[l],u=[];for(let m=0,d=h.length;m<d;m++){let c=h[m];u.push(c.toJSON(t.data))}u.length>0&&(s[l]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone(e));let s=t.attributes;for(let h in s){let u=s[h];this.setAttribute(h,u.clone(e))}let r=t.morphAttributes;for(let h in r){let u=[],m=r[h];for(let d=0,c=m.length;d<c;d++)u.push(m[d].clone(e));this.morphAttributes[h]=u}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let h=0,u=o.length;h<u;h++){let m=o[h];this.addGroup(m.start,m.count,m.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},$h=new ge,Fi=new No,so=new Pi,Vh=new G,ro=new G,oo=new G,ao=new G,ja=new G,lo=new G,Gh=new G,co=new G,Ce=class extends Pe{constructor(t=new Se,e=new Sn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){lo.set(0,0,0);for(let l=0,h=r.length;l<h;l++){let u=a[l],m=r[l];u!==0&&(ja.fromBufferAttribute(m,t),o?lo.addScaledVector(ja,u):lo.addScaledVector(ja.sub(e),u))}e.add(lo)}return e}raycast(t,e){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),so.copy(i.boundingSphere),so.applyMatrix4(r),Fi.copy(t.ray).recast(t.near),!(so.containsPoint(Fi.origin)===!1&&(Fi.intersectSphere(so,Vh)===null||Fi.origin.distanceToSquared(Vh)>(t.far-t.near)**2))&&($h.copy(r).invert(),Fi.copy(t.ray).applyMatrix4($h),!(i.boundingBox!==null&&Fi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Fi)))}_computeIntersections(t,e,i){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,h=r.attributes.uv,u=r.attributes.uv1,m=r.attributes.normal,d=r.groups,c=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,M=d.length;p<M;p++){let x=d[p],f=o[x.materialIndex],b=Math.max(x.start,c.start),v=Math.min(a.count,Math.min(x.start+x.count,c.start+c.count));for(let _=b,U=v;_<U;_+=3){let I=a.getX(_),w=a.getX(_+1),R=a.getX(_+2);s=ho(this,f,t,i,h,u,m,I,w,R),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=x.materialIndex,e.push(s))}}else{let p=Math.max(0,c.start),M=Math.min(a.count,c.start+c.count);for(let x=p,f=M;x<f;x+=3){let b=a.getX(x),v=a.getX(x+1),_=a.getX(x+2);s=ho(this,o,t,i,h,u,m,b,v,_),s&&(s.faceIndex=Math.floor(x/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,M=d.length;p<M;p++){let x=d[p],f=o[x.materialIndex],b=Math.max(x.start,c.start),v=Math.min(l.count,Math.min(x.start+x.count,c.start+c.count));for(let _=b,U=v;_<U;_+=3){let I=_,w=_+1,R=_+2;s=ho(this,f,t,i,h,u,m,I,w,R),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=x.materialIndex,e.push(s))}}else{let p=Math.max(0,c.start),M=Math.min(l.count,c.start+c.count);for(let x=p,f=M;x<f;x+=3){let b=x,v=x+1,_=x+2;s=ho(this,o,t,i,h,u,m,b,v,_),s&&(s.faceIndex=Math.floor(x/3),e.push(s))}}}};function dp(n,t,e,i,s,r,o,a){let l;if(t.side===Ze?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,t.side===Ci,a),l===null)return null;co.copy(a),co.applyMatrix4(n.matrixWorld);let h=e.ray.origin.distanceTo(co);return h<e.near||h>e.far?null:{distance:h,point:co.clone(),object:n}}function ho(n,t,e,i,s,r,o,a,l,h){n.getVertexPosition(a,ro),n.getVertexPosition(l,oo),n.getVertexPosition(h,ao);let u=dp(n,t,e,i,ro,oo,ao,Gh);if(u){let m=new G;Ti.getBarycoord(Gh,ro,oo,ao,m),s&&(u.uv=Ti.getInterpolatedAttribute(s,a,l,h,m,new Ct)),r&&(u.uv1=Ti.getInterpolatedAttribute(r,a,l,h,m,new Ct)),o&&(u.normal=Ti.getInterpolatedAttribute(o,a,l,h,m,new G),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));let d={a,b:l,c:h,normal:new G,materialIndex:0};Ti.getNormal(ro,oo,ao,d.normal),u.face=d,u.barycoord=m}return u}var we=class n extends Se{constructor(t=1,e=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],h=[],u=[],m=[],d=0,c=0;p("z","y","x",-1,-1,i,e,t,o,r,0),p("z","y","x",1,-1,i,e,-t,o,r,1),p("x","z","y",1,1,t,i,e,s,o,2),p("x","z","y",1,-1,t,i,-e,s,o,3),p("x","y","z",1,-1,t,e,i,s,r,4),p("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new ie(h,3)),this.setAttribute("normal",new ie(u,3)),this.setAttribute("uv",new ie(m,2));function p(M,x,f,b,v,_,U,I,w,R,y){let g=_/w,S=U/R,T=_/2,C=U/2,N=I/2,q=w+1,A=R+1,H=0,V=0,rt=new G;for(let ot=0;ot<A;ot++){let D=ot*S-C;for(let St=0;St<q;St++){let K=St*g-T;rt[M]=K*b,rt[x]=D*v,rt[f]=N,h.push(rt.x,rt.y,rt.z),rt[M]=0,rt[x]=0,rt[f]=I>0?1:-1,u.push(rt.x,rt.y,rt.z),m.push(St/w),m.push(1-ot/R),H+=1}}for(let ot=0;ot<R;ot++)for(let D=0;D<w;D++){let St=d+D+q*ot,K=d+D+q*(ot+1),Y=d+(D+1)+q*(ot+1),X=d+(D+1)+q*ot;l.push(St,K,X),l.push(K,Y,X),V+=6}a.addGroup(c,V,y),c+=V,d+=H}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Hs(n){let t={};for(let e in n){t[e]={};for(let i in n[e]){let s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function on(n){let t={};for(let e=0;e<n.length;e++){let i=Hs(n[e]);for(let s in i)t[s]=i[s]}return t}function fp(n){let t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Yu(n){let t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:pe.workingColorSpace}var Gc={clone:Hs,merge:on},pp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,mp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,cn=class extends li{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=pp,this.fragmentShader=mp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Hs(t.uniforms),this.uniformsGroups=fp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}},Bo=class extends Pe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ge,this.projectionMatrix=new ge,this.projectionMatrixInverse=new ge,this.coordinateSystem=ii}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},wi=new G,Wh=new Ct,Xh=new Ct,an=class extends Bo{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=yr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(dr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return yr*2*Math.atan(Math.tan(dr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){wi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(wi.x,wi.y).multiplyScalar(-t/wi.z),wi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(wi.x,wi.y).multiplyScalar(-t/wi.z)}getViewSize(t,e){return this.getViewBounds(t,Wh,Xh),e.subVectors(Xh,Wh)}setViewOffset(t,e,i,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(dr*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,h=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*i/h,s*=o.width/l,i*=o.height/h}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},bs=-90,Ss=1,ec=class extends Pe{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new an(bs,Ss,t,e);s.layers=this.layers,this.add(s);let r=new an(bs,Ss,t,e);r.layers=this.layers,this.add(r);let o=new an(bs,Ss,t,e);o.layers=this.layers,this.add(o);let a=new an(bs,Ss,t,e);a.layers=this.layers,this.add(a);let l=new an(bs,Ss,t,e);l.layers=this.layers,this.add(l);let h=new an(bs,Ss,t,e);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,s,r,o,a,l]=e;for(let h of e)this.remove(h);if(t===ii)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Lo)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let h of e)this.add(h),h.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,h,u]=this.children,m=t.getRenderTarget(),d=t.getActiveCubeFace(),c=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;let M=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,r),t.setRenderTarget(i,1,s),t.render(e,o),t.setRenderTarget(i,2,s),t.render(e,a),t.setRenderTarget(i,3,s),t.render(e,l),t.setRenderTarget(i,4,s),t.render(e,h),i.texture.generateMipmaps=M,t.setRenderTarget(i,5,s),t.render(e,u),t.setRenderTarget(m,d,c),t.xr.enabled=p,i.texture.needsPMREMUpdate=!0}},Ho=class extends pn{constructor(t,e,i,s,r,o,a,l,h,u){t=t!==void 0?t:[],e=e!==void 0?e:Fs,super(t,e,i,s,r,o,a,l,h,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},nc=class extends oi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new Ho(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Hn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new we(5,5,5),r=new cn({name:"CubemapFromEquirect",uniforms:Hs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ze,blending:Ai});r.uniforms.tEquirect.value=e;let o=new Ce(s,r),a=e.minFilter;return e.minFilter===Wi&&(e.minFilter=Hn),new ec(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,i,s){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,s);t.setRenderTarget(r)}},Qa=new G,gp=new G,xp=new ce,ni=class{constructor(t=new G(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let s=Qa.subVectors(i,e).cross(gp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let i=t.delta(Qa),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||xp.getNormalMatrix(t),s=this.coplanarPoint(Qa).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Oi=new Pi,uo=new G,vr=class{constructor(t=new ni,e=new ni,i=new ni,s=new ni,r=new ni,o=new ni){this.planes=[t,e,i,s,r,o]}set(t,e,i,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=ii){let i=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],h=s[4],u=s[5],m=s[6],d=s[7],c=s[8],p=s[9],M=s[10],x=s[11],f=s[12],b=s[13],v=s[14],_=s[15];if(i[0].setComponents(l-r,d-h,x-c,_-f).normalize(),i[1].setComponents(l+r,d+h,x+c,_+f).normalize(),i[2].setComponents(l+o,d+u,x+p,_+b).normalize(),i[3].setComponents(l-o,d-u,x-p,_-b).normalize(),i[4].setComponents(l-a,d-m,x-M,_-v).normalize(),e===ii)i[5].setComponents(l+a,d+m,x+M,_+v).normalize();else if(e===Lo)i[5].setComponents(a,m,M,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Oi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Oi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Oi)}intersectsSprite(t){return Oi.center.set(0,0,0),Oi.radius=.7071067811865476,Oi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Oi)}intersectsSphere(t){let e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let s=e[i];if(uo.x=s.normal.x>0?t.max.x:t.min.x,uo.y=s.normal.y>0?t.max.y:t.min.y,uo.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(uo)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Zu(){let n=null,t=!1,e=null,i=null;function s(r,o){e(r,o),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function yp(n){let t=new WeakMap;function e(a,l){let h=a.array,u=a.usage,m=h.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,h,u),a.onUploadCallback();let c;if(h instanceof Float32Array)c=n.FLOAT;else if(h instanceof Uint16Array)a.isFloat16BufferAttribute?c=n.HALF_FLOAT:c=n.UNSIGNED_SHORT;else if(h instanceof Int16Array)c=n.SHORT;else if(h instanceof Uint32Array)c=n.UNSIGNED_INT;else if(h instanceof Int32Array)c=n.INT;else if(h instanceof Int8Array)c=n.BYTE;else if(h instanceof Uint8Array)c=n.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)c=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:d,type:c,bytesPerElement:h.BYTES_PER_ELEMENT,version:a.version,size:m}}function i(a,l,h){let u=l.array,m=l.updateRanges;if(n.bindBuffer(h,a),m.length===0)n.bufferSubData(h,0,u);else{m.sort((c,p)=>c.start-p.start);let d=0;for(let c=1;c<m.length;c++){let p=m[d],M=m[c];M.start<=p.start+p.count+1?p.count=Math.max(p.count,M.start+M.count-p.start):(++d,m[d]=M)}m.length=d+1;for(let c=0,p=m.length;c<p;c++){let M=m[c];n.bufferSubData(h,M.start*u.BYTES_PER_ELEMENT,u,M.start,M.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(n.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let h=t.get(a);if(h===void 0)t.set(a,e(a,l));else if(h.version<a.version){if(h.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(h.buffer,a,l),h.version=a.version}}return{get:s,remove:r,update:o}}var hn=class n extends Se{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(i),l=Math.floor(s),h=a+1,u=l+1,m=t/a,d=e/l,c=[],p=[],M=[],x=[];for(let f=0;f<u;f++){let b=f*d-o;for(let v=0;v<h;v++){let _=v*m-r;p.push(_,-b,0),M.push(0,0,1),x.push(v/a),x.push(1-f/l)}}for(let f=0;f<l;f++)for(let b=0;b<a;b++){let v=b+h*f,_=b+h*(f+1),U=b+1+h*(f+1),I=b+1+h*f;c.push(v,_,I),c.push(_,U,I)}this.setIndex(c),this.setAttribute("position",new ie(p,3)),this.setAttribute("normal",new ie(M,3)),this.setAttribute("uv",new ie(x,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.widthSegments,t.heightSegments)}},vp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,_p=`#ifdef USE_ALPHAHASH
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
#endif`,Mp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,bp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Sp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,wp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ep=`#ifdef USE_AOMAP
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
#endif`,Tp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ap=`#ifdef USE_BATCHING
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
#endif`,Rp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Cp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ip=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Pp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Lp=`#ifdef USE_IRIDESCENCE
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
#endif`,Dp=`#ifdef USE_BUMPMAP
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
#endif`,kp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Up=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Np=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Fp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Op=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,zp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Bp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Hp=`#if defined( USE_COLOR_ALPHA )
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
#endif`,$p=`#define PI 3.141592653589793
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
} // validated`,Vp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Gp=`vec3 transformedNormal = objectNormal;
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
#endif`,Wp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Xp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,qp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Yp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Zp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Jp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Kp=`#ifdef USE_ENVMAP
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
#endif`,jp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Qp=`#ifdef USE_ENVMAP
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
#endif`,tm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,em=`#ifdef USE_ENVMAP
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
#endif`,nm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,im=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,sm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,rm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,om=`#ifdef USE_GRADIENTMAP
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
}`,am=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,cm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,hm=`uniform bool receiveShadow;
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
#endif`,um=`#ifdef USE_ENVMAP
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
#endif`,dm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,fm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,pm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,mm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,gm=`PhysicalMaterial material;
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
#endif`,xm=`struct PhysicalMaterial {
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
}`,ym=`
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
#endif`,vm=`#if defined( RE_IndirectDiffuse )
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
#endif`,_m=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Mm=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,bm=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Sm=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wm=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Em=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Tm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Am=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Rm=`#if defined( USE_POINTS_UV )
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
#endif`,Cm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Im=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Pm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Lm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Dm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,km=`#ifdef USE_MORPHTARGETS
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
#endif`,Um=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Nm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Fm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Om=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Bm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Hm=`#ifdef USE_NORMALMAP
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
#endif`,$m=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Vm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Gm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Wm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Xm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,qm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Ym=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Zm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Jm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Km=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,jm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Qm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,t0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,e0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,n0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,i0=`float getShadowMask() {
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
}`,s0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,r0=`#ifdef USE_SKINNING
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
#endif`,o0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,a0=`#ifdef USE_SKINNING
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
#endif`,l0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,c0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,h0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,u0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,d0=`#ifdef USE_TRANSMISSION
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
#endif`,f0=`#ifdef USE_TRANSMISSION
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
#endif`,p0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,m0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,g0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,x0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,y0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,v0=`uniform sampler2D t2D;
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
}`,_0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,M0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,b0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,S0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,w0=`#include <common>
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
}`,E0=`#if DEPTH_PACKING == 3200
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
}`,T0=`#define DISTANCE
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
}`,A0=`#define DISTANCE
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
}`,R0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,C0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,I0=`uniform float scale;
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
}`,P0=`uniform vec3 diffuse;
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
}`,L0=`#include <common>
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
}`,D0=`uniform vec3 diffuse;
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
}`,k0=`#define LAMBERT
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
}`,U0=`#define LAMBERT
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
}`,N0=`#define MATCAP
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
}`,F0=`#define MATCAP
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
}`,O0=`#define NORMAL
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
}`,z0=`#define NORMAL
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
}`,B0=`#define PHONG
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
}`,H0=`#define PHONG
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
}`,$0=`#define STANDARD
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
}`,V0=`#define STANDARD
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
}`,G0=`#define TOON
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
}`,W0=`#define TOON
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
}`,X0=`uniform float size;
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
}`,q0=`uniform vec3 diffuse;
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
}`,Y0=`#include <common>
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
}`,Z0=`uniform vec3 color;
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
}`,J0=`uniform float rotation;
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
}`,K0=`uniform vec3 diffuse;
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
}`,se={alphahash_fragment:vp,alphahash_pars_fragment:_p,alphamap_fragment:Mp,alphamap_pars_fragment:bp,alphatest_fragment:Sp,alphatest_pars_fragment:wp,aomap_fragment:Ep,aomap_pars_fragment:Tp,batching_pars_vertex:Ap,batching_vertex:Rp,begin_vertex:Cp,beginnormal_vertex:Ip,bsdfs:Pp,iridescence_fragment:Lp,bumpmap_pars_fragment:Dp,clipping_planes_fragment:kp,clipping_planes_pars_fragment:Up,clipping_planes_pars_vertex:Np,clipping_planes_vertex:Fp,color_fragment:Op,color_pars_fragment:zp,color_pars_vertex:Bp,color_vertex:Hp,common:$p,cube_uv_reflection_fragment:Vp,defaultnormal_vertex:Gp,displacementmap_pars_vertex:Wp,displacementmap_vertex:Xp,emissivemap_fragment:qp,emissivemap_pars_fragment:Yp,colorspace_fragment:Zp,colorspace_pars_fragment:Jp,envmap_fragment:Kp,envmap_common_pars_fragment:jp,envmap_pars_fragment:Qp,envmap_pars_vertex:tm,envmap_physical_pars_fragment:um,envmap_vertex:em,fog_vertex:nm,fog_pars_vertex:im,fog_fragment:sm,fog_pars_fragment:rm,gradientmap_pars_fragment:om,lightmap_pars_fragment:am,lights_lambert_fragment:lm,lights_lambert_pars_fragment:cm,lights_pars_begin:hm,lights_toon_fragment:dm,lights_toon_pars_fragment:fm,lights_phong_fragment:pm,lights_phong_pars_fragment:mm,lights_physical_fragment:gm,lights_physical_pars_fragment:xm,lights_fragment_begin:ym,lights_fragment_maps:vm,lights_fragment_end:_m,logdepthbuf_fragment:Mm,logdepthbuf_pars_fragment:bm,logdepthbuf_pars_vertex:Sm,logdepthbuf_vertex:wm,map_fragment:Em,map_pars_fragment:Tm,map_particle_fragment:Am,map_particle_pars_fragment:Rm,metalnessmap_fragment:Cm,metalnessmap_pars_fragment:Im,morphinstance_vertex:Pm,morphcolor_vertex:Lm,morphnormal_vertex:Dm,morphtarget_pars_vertex:km,morphtarget_vertex:Um,normal_fragment_begin:Nm,normal_fragment_maps:Fm,normal_pars_fragment:Om,normal_pars_vertex:zm,normal_vertex:Bm,normalmap_pars_fragment:Hm,clearcoat_normal_fragment_begin:$m,clearcoat_normal_fragment_maps:Vm,clearcoat_pars_fragment:Gm,iridescence_pars_fragment:Wm,opaque_fragment:Xm,packing:qm,premultiplied_alpha_fragment:Ym,project_vertex:Zm,dithering_fragment:Jm,dithering_pars_fragment:Km,roughnessmap_fragment:jm,roughnessmap_pars_fragment:Qm,shadowmap_pars_fragment:t0,shadowmap_pars_vertex:e0,shadowmap_vertex:n0,shadowmask_pars_fragment:i0,skinbase_vertex:s0,skinning_pars_vertex:r0,skinning_vertex:o0,skinnormal_vertex:a0,specularmap_fragment:l0,specularmap_pars_fragment:c0,tonemapping_fragment:h0,tonemapping_pars_fragment:u0,transmission_fragment:d0,transmission_pars_fragment:f0,uv_pars_fragment:p0,uv_pars_vertex:m0,uv_vertex:g0,worldpos_vertex:x0,background_vert:y0,background_frag:v0,backgroundCube_vert:_0,backgroundCube_frag:M0,cube_vert:b0,cube_frag:S0,depth_vert:w0,depth_frag:E0,distanceRGBA_vert:T0,distanceRGBA_frag:A0,equirect_vert:R0,equirect_frag:C0,linedashed_vert:I0,linedashed_frag:P0,meshbasic_vert:L0,meshbasic_frag:D0,meshlambert_vert:k0,meshlambert_frag:U0,meshmatcap_vert:N0,meshmatcap_frag:F0,meshnormal_vert:O0,meshnormal_frag:z0,meshphong_vert:B0,meshphong_frag:H0,meshphysical_vert:$0,meshphysical_frag:V0,meshtoon_vert:G0,meshtoon_frag:W0,points_vert:X0,points_frag:q0,shadow_vert:Y0,shadow_frag:Z0,sprite_vert:J0,sprite_frag:K0},zt={common:{diffuse:{value:new Qt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ce},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ce}},envmap:{envMap:{value:null},envMapRotation:{value:new ce},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ce}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ce}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ce},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ce},normalScale:{value:new Ct(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ce},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ce}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ce}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ce}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Qt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Qt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0},uvTransform:{value:new ce}},sprite:{diffuse:{value:new Qt(16777215)},opacity:{value:1},center:{value:new Ct(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ce},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0}}},Bn={basic:{uniforms:on([zt.common,zt.specularmap,zt.envmap,zt.aomap,zt.lightmap,zt.fog]),vertexShader:se.meshbasic_vert,fragmentShader:se.meshbasic_frag},lambert:{uniforms:on([zt.common,zt.specularmap,zt.envmap,zt.aomap,zt.lightmap,zt.emissivemap,zt.bumpmap,zt.normalmap,zt.displacementmap,zt.fog,zt.lights,{emissive:{value:new Qt(0)}}]),vertexShader:se.meshlambert_vert,fragmentShader:se.meshlambert_frag},phong:{uniforms:on([zt.common,zt.specularmap,zt.envmap,zt.aomap,zt.lightmap,zt.emissivemap,zt.bumpmap,zt.normalmap,zt.displacementmap,zt.fog,zt.lights,{emissive:{value:new Qt(0)},specular:{value:new Qt(1118481)},shininess:{value:30}}]),vertexShader:se.meshphong_vert,fragmentShader:se.meshphong_frag},standard:{uniforms:on([zt.common,zt.envmap,zt.aomap,zt.lightmap,zt.emissivemap,zt.bumpmap,zt.normalmap,zt.displacementmap,zt.roughnessmap,zt.metalnessmap,zt.fog,zt.lights,{emissive:{value:new Qt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:se.meshphysical_vert,fragmentShader:se.meshphysical_frag},toon:{uniforms:on([zt.common,zt.aomap,zt.lightmap,zt.emissivemap,zt.bumpmap,zt.normalmap,zt.displacementmap,zt.gradientmap,zt.fog,zt.lights,{emissive:{value:new Qt(0)}}]),vertexShader:se.meshtoon_vert,fragmentShader:se.meshtoon_frag},matcap:{uniforms:on([zt.common,zt.bumpmap,zt.normalmap,zt.displacementmap,zt.fog,{matcap:{value:null}}]),vertexShader:se.meshmatcap_vert,fragmentShader:se.meshmatcap_frag},points:{uniforms:on([zt.points,zt.fog]),vertexShader:se.points_vert,fragmentShader:se.points_frag},dashed:{uniforms:on([zt.common,zt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:se.linedashed_vert,fragmentShader:se.linedashed_frag},depth:{uniforms:on([zt.common,zt.displacementmap]),vertexShader:se.depth_vert,fragmentShader:se.depth_frag},normal:{uniforms:on([zt.common,zt.bumpmap,zt.normalmap,zt.displacementmap,{opacity:{value:1}}]),vertexShader:se.meshnormal_vert,fragmentShader:se.meshnormal_frag},sprite:{uniforms:on([zt.sprite,zt.fog]),vertexShader:se.sprite_vert,fragmentShader:se.sprite_frag},background:{uniforms:{uvTransform:{value:new ce},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:se.background_vert,fragmentShader:se.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ce}},vertexShader:se.backgroundCube_vert,fragmentShader:se.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:se.cube_vert,fragmentShader:se.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:se.equirect_vert,fragmentShader:se.equirect_frag},distanceRGBA:{uniforms:on([zt.common,zt.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:se.distanceRGBA_vert,fragmentShader:se.distanceRGBA_frag},shadow:{uniforms:on([zt.lights,zt.fog,{color:{value:new Qt(0)},opacity:{value:1}}]),vertexShader:se.shadow_vert,fragmentShader:se.shadow_frag}};Bn.physical={uniforms:on([Bn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ce},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ce},clearcoatNormalScale:{value:new Ct(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ce},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ce},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ce},sheen:{value:0},sheenColor:{value:new Qt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ce},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ce},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ce},transmissionSamplerSize:{value:new Ct},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ce},attenuationDistance:{value:0},attenuationColor:{value:new Qt(0)},specularColor:{value:new Qt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ce},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ce},anisotropyVector:{value:new Ct},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ce}}]),vertexShader:se.meshphysical_vert,fragmentShader:se.meshphysical_frag};var fo={r:0,b:0,g:0},zi=new Dn,j0=new ge;function Q0(n,t,e,i,s,r,o){let a=new Qt(0),l=r===!0?0:1,h,u,m=null,d=0,c=null;function p(b){let v=b.isScene===!0?b.background:null;return v&&v.isTexture&&(v=(b.backgroundBlurriness>0?e:t).get(v)),v}function M(b){let v=!1,_=p(b);_===null?f(a,l):_&&_.isColor&&(f(_,1),v=!0);let U=n.xr.getEnvironmentBlendMode();U==="additive"?i.buffers.color.setClear(0,0,0,1,o):U==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||v)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function x(b,v){let _=p(v);_&&(_.isCubeTexture||_.mapping===fa)?(u===void 0&&(u=new Ce(new we(1,1,1),new cn({name:"BackgroundCubeMaterial",uniforms:Hs(Bn.backgroundCube.uniforms),vertexShader:Bn.backgroundCube.vertexShader,fragmentShader:Bn.backgroundCube.fragmentShader,side:Ze,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(U,I,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),zi.copy(v.backgroundRotation),zi.x*=-1,zi.y*=-1,zi.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(zi.y*=-1,zi.z*=-1),u.material.uniforms.envMap.value=_,u.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(j0.makeRotationFromEuler(zi)),u.material.toneMapped=pe.getTransfer(_.colorSpace)!==be,(m!==_||d!==_.version||c!==n.toneMapping)&&(u.material.needsUpdate=!0,m=_,d=_.version,c=n.toneMapping),u.layers.enableAll(),b.unshift(u,u.geometry,u.material,0,0,null)):_&&_.isTexture&&(h===void 0&&(h=new Ce(new hn(2,2),new cn({name:"BackgroundMaterial",uniforms:Hs(Bn.background.uniforms),vertexShader:Bn.background.vertexShader,fragmentShader:Bn.background.fragmentShader,side:Ci,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(h)),h.material.uniforms.t2D.value=_,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.toneMapped=pe.getTransfer(_.colorSpace)!==be,_.matrixAutoUpdate===!0&&_.updateMatrix(),h.material.uniforms.uvTransform.value.copy(_.matrix),(m!==_||d!==_.version||c!==n.toneMapping)&&(h.material.needsUpdate=!0,m=_,d=_.version,c=n.toneMapping),h.layers.enableAll(),b.unshift(h,h.geometry,h.material,0,0,null))}function f(b,v){b.getRGB(fo,Yu(n)),i.buffers.color.setClear(fo.r,fo.g,fo.b,v,o)}return{getClearColor:function(){return a},setClearColor:function(b,v=1){a.set(b),l=v,f(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,f(a,l)},render:M,addToRenderList:x}}function tg(n,t){let e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=d(null),r=s,o=!1;function a(g,S,T,C,N){let q=!1,A=m(C,T,S);r!==A&&(r=A,h(r.object)),q=c(g,C,T,N),q&&p(g,C,T,N),N!==null&&t.update(N,n.ELEMENT_ARRAY_BUFFER),(q||o)&&(o=!1,_(g,S,T,C),N!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(N).buffer))}function l(){return n.createVertexArray()}function h(g){return n.bindVertexArray(g)}function u(g){return n.deleteVertexArray(g)}function m(g,S,T){let C=T.wireframe===!0,N=i[g.id];N===void 0&&(N={},i[g.id]=N);let q=N[S.id];q===void 0&&(q={},N[S.id]=q);let A=q[C];return A===void 0&&(A=d(l()),q[C]=A),A}function d(g){let S=[],T=[],C=[];for(let N=0;N<e;N++)S[N]=0,T[N]=0,C[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:S,enabledAttributes:T,attributeDivisors:C,object:g,attributes:{},index:null}}function c(g,S,T,C){let N=r.attributes,q=S.attributes,A=0,H=T.getAttributes();for(let V in H)if(H[V].location>=0){let ot=N[V],D=q[V];if(D===void 0&&(V==="instanceMatrix"&&g.instanceMatrix&&(D=g.instanceMatrix),V==="instanceColor"&&g.instanceColor&&(D=g.instanceColor)),ot===void 0||ot.attribute!==D||D&&ot.data!==D.data)return!0;A++}return r.attributesNum!==A||r.index!==C}function p(g,S,T,C){let N={},q=S.attributes,A=0,H=T.getAttributes();for(let V in H)if(H[V].location>=0){let ot=q[V];ot===void 0&&(V==="instanceMatrix"&&g.instanceMatrix&&(ot=g.instanceMatrix),V==="instanceColor"&&g.instanceColor&&(ot=g.instanceColor));let D={};D.attribute=ot,ot&&ot.data&&(D.data=ot.data),N[V]=D,A++}r.attributes=N,r.attributesNum=A,r.index=C}function M(){let g=r.newAttributes;for(let S=0,T=g.length;S<T;S++)g[S]=0}function x(g){f(g,0)}function f(g,S){let T=r.newAttributes,C=r.enabledAttributes,N=r.attributeDivisors;T[g]=1,C[g]===0&&(n.enableVertexAttribArray(g),C[g]=1),N[g]!==S&&(n.vertexAttribDivisor(g,S),N[g]=S)}function b(){let g=r.newAttributes,S=r.enabledAttributes;for(let T=0,C=S.length;T<C;T++)S[T]!==g[T]&&(n.disableVertexAttribArray(T),S[T]=0)}function v(g,S,T,C,N,q,A){A===!0?n.vertexAttribIPointer(g,S,T,N,q):n.vertexAttribPointer(g,S,T,C,N,q)}function _(g,S,T,C){M();let N=C.attributes,q=T.getAttributes(),A=S.defaultAttributeValues;for(let H in q){let V=q[H];if(V.location>=0){let rt=N[H];if(rt===void 0&&(H==="instanceMatrix"&&g.instanceMatrix&&(rt=g.instanceMatrix),H==="instanceColor"&&g.instanceColor&&(rt=g.instanceColor)),rt!==void 0){let ot=rt.normalized,D=rt.itemSize,St=t.get(rt);if(St===void 0)continue;let K=St.buffer,Y=St.type,X=St.bytesPerElement,$=Y===n.INT||Y===n.UNSIGNED_INT||rt.gpuType===Nc;if(rt.isInterleavedBufferAttribute){let Z=rt.data,at=Z.stride,xt=rt.offset;if(Z.isInstancedInterleavedBuffer){for(let Tt=0;Tt<V.locationSize;Tt++)f(V.location+Tt,Z.meshPerAttribute);g.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let Tt=0;Tt<V.locationSize;Tt++)x(V.location+Tt);n.bindBuffer(n.ARRAY_BUFFER,K);for(let Tt=0;Tt<V.locationSize;Tt++)v(V.location+Tt,D/V.locationSize,Y,ot,at*X,(xt+D/V.locationSize*Tt)*X,$)}else{if(rt.isInstancedBufferAttribute){for(let Z=0;Z<V.locationSize;Z++)f(V.location+Z,rt.meshPerAttribute);g.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let Z=0;Z<V.locationSize;Z++)x(V.location+Z);n.bindBuffer(n.ARRAY_BUFFER,K);for(let Z=0;Z<V.locationSize;Z++)v(V.location+Z,D/V.locationSize,Y,ot,D*X,D/V.locationSize*Z*X,$)}}else if(A!==void 0){let ot=A[H];if(ot!==void 0)switch(ot.length){case 2:n.vertexAttrib2fv(V.location,ot);break;case 3:n.vertexAttrib3fv(V.location,ot);break;case 4:n.vertexAttrib4fv(V.location,ot);break;default:n.vertexAttrib1fv(V.location,ot)}}}}b()}function U(){R();for(let g in i){let S=i[g];for(let T in S){let C=S[T];for(let N in C)u(C[N].object),delete C[N];delete S[T]}delete i[g]}}function I(g){if(i[g.id]===void 0)return;let S=i[g.id];for(let T in S){let C=S[T];for(let N in C)u(C[N].object),delete C[N];delete S[T]}delete i[g.id]}function w(g){for(let S in i){let T=i[S];if(T[g.id]===void 0)continue;let C=T[g.id];for(let N in C)u(C[N].object),delete C[N];delete T[g.id]}}function R(){y(),o=!0,r!==s&&(r=s,h(r.object))}function y(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:R,resetDefaultState:y,dispose:U,releaseStatesOfGeometry:I,releaseStatesOfProgram:w,initAttributes:M,enableAttribute:x,disableUnusedAttributes:b}}function eg(n,t,e){let i;function s(h){i=h}function r(h,u){n.drawArrays(i,h,u),e.update(u,i,1)}function o(h,u,m){m!==0&&(n.drawArraysInstanced(i,h,u,m),e.update(u,i,m))}function a(h,u,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,h,0,u,0,m);let c=0;for(let p=0;p<m;p++)c+=u[p];e.update(c,i,1)}function l(h,u,m,d){if(m===0)return;let c=t.get("WEBGL_multi_draw");if(c===null)for(let p=0;p<h.length;p++)o(h[p],u[p],d[p]);else{c.multiDrawArraysInstancedWEBGL(i,h,0,u,0,d,0,m);let p=0;for(let M=0;M<m;M++)p+=u[M]*d[M];e.update(p,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function ng(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let w=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(w){return!(w!==_n&&i.convert(w)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){let R=w===Pr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==ri&&i.convert(w)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==$n&&!R)}function l(w){if(w==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=e.precision!==void 0?e.precision:"highp",u=l(h);u!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",u,"instead."),h=u);let m=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),c=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=n.getParameter(n.MAX_TEXTURE_SIZE),x=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),f=n.getParameter(n.MAX_VERTEX_ATTRIBS),b=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),v=n.getParameter(n.MAX_VARYING_VECTORS),_=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),U=p>0,I=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:h,logarithmicDepthBuffer:m,reverseDepthBuffer:d,maxTextures:c,maxVertexTextures:p,maxTextureSize:M,maxCubemapSize:x,maxAttributes:f,maxVertexUniforms:b,maxVaryings:v,maxFragmentUniforms:_,vertexTextures:U,maxSamples:I}}function ig(n){let t=this,e=null,i=0,s=!1,r=!1,o=new ni,a=new ce,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(m,d){let c=m.length!==0||d||i!==0||s;return s=d,i=m.length,c},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(m,d){e=u(m,d,0)},this.setState=function(m,d,c){let p=m.clippingPlanes,M=m.clipIntersection,x=m.clipShadows,f=n.get(m);if(!s||p===null||p.length===0||r&&!x)r?u(null):h();else{let b=r?0:i,v=b*4,_=f.clippingState||null;l.value=_,_=u(p,d,v,c);for(let U=0;U!==v;++U)_[U]=e[U];f.clippingState=_,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=b}};function h(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(m,d,c,p){let M=m!==null?m.length:0,x=null;if(M!==0){if(x=l.value,p!==!0||x===null){let f=c+M*4,b=d.matrixWorldInverse;a.getNormalMatrix(b),(x===null||x.length<f)&&(x=new Float32Array(f));for(let v=0,_=c;v!==M;++v,_+=4)o.copy(m[v]).applyMatrix4(b,a),o.normal.toArray(x,_),x[_+3]=o.constant}l.value=x,l.needsUpdate=!0}return t.numPlanes=M,t.numIntersection=0,x}}function sg(n){let t=new WeakMap;function e(o,a){return a===Ml?o.mapping=Fs:a===bl&&(o.mapping=Os),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===Ml||a===bl)if(t.has(o)){let l=t.get(o).texture;return e(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let h=new nc(l.height);return h.fromEquirectangularTexture(n,o),t.set(o,h),o.addEventListener("dispose",s),e(h.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}var $o=class extends Bo{constructor(t=-1,e=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-t,o=i+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let h=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=h*this.view.offsetX,o=r+h*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Is=4,qh=[.125,.215,.35,.446,.526,.582],Vi=20,tl=new $o,Yh=new Qt,el=null,nl=0,il=0,sl=!1,Hi=(1+Math.sqrt(5))/2,ws=1/Hi,Zh=[new G(-Hi,ws,0),new G(Hi,ws,0),new G(-ws,0,Hi),new G(ws,0,Hi),new G(0,Hi,-ws),new G(0,Hi,ws),new G(-1,1,-1),new G(1,1,-1),new G(-1,1,1),new G(1,1,1)],Vo=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100){el=this._renderer.getRenderTarget(),nl=this._renderer.getActiveCubeFace(),il=this._renderer.getActiveMipmapLevel(),sl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,i,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=jh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Kh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(el,nl,il),this._renderer.xr.enabled=sl,t.scissorTest=!1,po(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Fs||t.mapping===Os?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),el=this._renderer.getRenderTarget(),nl=this._renderer.getActiveCubeFace(),il=this._renderer.getActiveMipmapLevel(),sl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Hn,minFilter:Hn,generateMipmaps:!1,type:Pr,format:_n,colorSpace:Ws,depthBuffer:!1},s=Jh(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Jh(t,e,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=rg(r)),this._blurMaterial=og(r,t,e)}return s}_compileMaterial(t){let e=new Ce(this._lodPlanes[0],t);this._renderer.compile(e,tl)}_sceneToCubeUV(t,e,i,s){let a=new an(90,1,e,i),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,m=u.autoClear,d=u.toneMapping;u.getClearColor(Yh),u.toneMapping=Vn,u.autoClear=!1;let c=new Sn({name:"PMREM.Background",side:Ze,depthWrite:!1,depthTest:!1}),p=new Ce(new we,c),M=!1,x=t.background;x?x.isColor&&(c.color.copy(x),t.background=null,M=!0):(c.color.copy(Yh),M=!0);for(let f=0;f<6;f++){let b=f%3;b===0?(a.up.set(0,l[f],0),a.lookAt(h[f],0,0)):b===1?(a.up.set(0,0,l[f]),a.lookAt(0,h[f],0)):(a.up.set(0,l[f],0),a.lookAt(0,0,h[f]));let v=this._cubeSize;po(s,b*v,f>2?v:0,v,v),u.setRenderTarget(s),M&&u.render(p,a),u.render(t,a)}p.geometry.dispose(),p.material.dispose(),u.toneMapping=d,u.autoClear=m,t.background=x}_textureToCubeUV(t,e){let i=this._renderer,s=t.mapping===Fs||t.mapping===Os;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=jh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Kh());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new Ce(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;po(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(o,tl)}_applyPMREM(t){let e=this._renderer,i=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Zh[(s-r-1)%Zh.length];this._blur(t,r-1,r,o,a)}e.autoClear=i}_blur(t,e,i,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,s,"latitudinal",r),this._halfBlur(o,t,i,i,s,"longitudinal",r)}_halfBlur(t,e,i,s,r,o,a){let l=this._renderer,h=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,m=new Ce(this._lodPlanes[s],h),d=h.uniforms,c=this._sizeLods[i]-1,p=isFinite(r)?Math.PI/(2*c):2*Math.PI/(2*Vi-1),M=r/p,x=isFinite(r)?1+Math.floor(u*M):Vi;x>Vi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${Vi}`);let f=[],b=0;for(let w=0;w<Vi;++w){let R=w/M,y=Math.exp(-R*R/2);f.push(y),w===0?b+=y:w<x&&(b+=2*y)}for(let w=0;w<f.length;w++)f[w]=f[w]/b;d.envMap.value=t.texture,d.samples.value=x,d.weights.value=f,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:v}=this;d.dTheta.value=p,d.mipInt.value=v-i;let _=this._sizeLods[s],U=3*_*(s>v-Is?s-v+Is:0),I=4*(this._cubeSize-_);po(e,U,I,3*_,2*_),l.setRenderTarget(e),l.render(m,tl)}};function rg(n){let t=[],e=[],i=[],s=n,r=n-Is+1+qh.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let l=1/a;o>n-Is?l=qh[o-n+Is-1]:o===0&&(l=0),i.push(l);let h=1/(a-2),u=-h,m=1+h,d=[u,u,m,u,m,m,u,u,m,m,u,m],c=6,p=6,M=3,x=2,f=1,b=new Float32Array(M*p*c),v=new Float32Array(x*p*c),_=new Float32Array(f*p*c);for(let I=0;I<c;I++){let w=I%3*2/3-1,R=I>2?0:-1,y=[w,R,0,w+2/3,R,0,w+2/3,R+1,0,w,R,0,w+2/3,R+1,0,w,R+1,0];b.set(y,M*p*I),v.set(d,x*p*I);let g=[I,I,I,I,I,I];_.set(g,f*p*I)}let U=new Se;U.setAttribute("position",new De(b,M)),U.setAttribute("uv",new De(v,x)),U.setAttribute("faceIndex",new De(_,f)),t.push(U),s>Is&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function Jh(n,t,e){let i=new oi(n,t,e);return i.texture.mapping=fa,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function po(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function og(n,t,e){let i=new Float32Array(Vi),s=new G(0,1,0);return new cn({name:"SphericalGaussianBlur",defines:{n:Vi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Wc(),fragmentShader:`

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
		`,blending:Ai,depthTest:!1,depthWrite:!1})}function Kh(){return new cn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Wc(),fragmentShader:`

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
		`,blending:Ai,depthTest:!1,depthWrite:!1})}function jh(){return new cn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Wc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ai,depthTest:!1,depthWrite:!1})}function Wc(){return`

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
	`}function ag(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){let l=a.mapping,h=l===Ml||l===bl,u=l===Fs||l===Os;if(h||u){let m=t.get(a),d=m!==void 0?m.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new Vo(n)),m=h?e.fromEquirectangular(a,m):e.fromCubemap(a,m),m.texture.pmremVersion=a.pmremVersion,t.set(a,m),m.texture;if(m!==void 0)return m.texture;{let c=a.image;return h&&c&&c.height>0||u&&c&&s(c)?(e===null&&(e=new Vo(n)),m=h?e.fromEquirectangular(a):e.fromCubemap(a),m.texture.pmremVersion=a.pmremVersion,t.set(a,m),a.addEventListener("dispose",r),m.texture):null}}}return a}function s(a){let l=0,h=6;for(let u=0;u<h;u++)a[u]!==void 0&&l++;return l===h}function r(a){let l=a.target;l.removeEventListener("dispose",r);let h=t.get(l);h!==void 0&&(t.delete(l),h.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function lg(n){let t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let s=e(i);return s===null&&hr("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function cg(n,t,e,i){let s={},r=new WeakMap;function o(m){let d=m.target;d.index!==null&&t.remove(d.index);for(let p in d.attributes)t.remove(d.attributes[p]);for(let p in d.morphAttributes){let M=d.morphAttributes[p];for(let x=0,f=M.length;x<f;x++)t.remove(M[x])}d.removeEventListener("dispose",o),delete s[d.id];let c=r.get(d);c&&(t.remove(c),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(m,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,e.memory.geometries++),d}function l(m){let d=m.attributes;for(let p in d)t.update(d[p],n.ARRAY_BUFFER);let c=m.morphAttributes;for(let p in c){let M=c[p];for(let x=0,f=M.length;x<f;x++)t.update(M[x],n.ARRAY_BUFFER)}}function h(m){let d=[],c=m.index,p=m.attributes.position,M=0;if(c!==null){let b=c.array;M=c.version;for(let v=0,_=b.length;v<_;v+=3){let U=b[v+0],I=b[v+1],w=b[v+2];d.push(U,I,I,w,w,U)}}else if(p!==void 0){let b=p.array;M=p.version;for(let v=0,_=b.length/3-1;v<_;v+=3){let U=v+0,I=v+1,w=v+2;d.push(U,I,I,w,w,U)}}else return;let x=new(Xu(d)?zo:Oo)(d,1);x.version=M;let f=r.get(m);f&&t.remove(f),r.set(m,x)}function u(m){let d=r.get(m);if(d){let c=m.index;c!==null&&d.version<c.version&&h(m)}else h(m);return r.get(m)}return{get:a,update:l,getWireframeAttribute:u}}function hg(n,t,e){let i;function s(d){i=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,c){n.drawElements(i,c,r,d*o),e.update(c,i,1)}function h(d,c,p){p!==0&&(n.drawElementsInstanced(i,c,r,d*o,p),e.update(c,i,p))}function u(d,c,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,c,0,r,d,0,p);let x=0;for(let f=0;f<p;f++)x+=c[f];e.update(x,i,1)}function m(d,c,p,M){if(p===0)return;let x=t.get("WEBGL_multi_draw");if(x===null)for(let f=0;f<d.length;f++)h(d[f]/o,c[f],M[f]);else{x.multiDrawElementsInstancedWEBGL(i,c,0,r,d,0,M,0,p);let f=0;for(let b=0;b<p;b++)f+=c[b]*M[b];e.update(f,i,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=h,this.renderMultiDraw=u,this.renderMultiDrawInstances=m}function ug(n){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(r/3);break;case n.LINES:e.lines+=a*(r/2);break;case n.LINE_STRIP:e.lines+=a*(r-1);break;case n.LINE_LOOP:e.lines+=a*r;break;case n.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function dg(n,t,e){let i=new WeakMap,s=new Ne;function r(o,a,l){let h=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,m=u!==void 0?u.length:0,d=i.get(a);if(d===void 0||d.count!==m){let y=function(){w.dispose(),i.delete(a),a.removeEventListener("dispose",y)};d!==void 0&&d.texture.dispose();let c=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,M=a.morphAttributes.color!==void 0,x=a.morphAttributes.position||[],f=a.morphAttributes.normal||[],b=a.morphAttributes.color||[],v=0;c===!0&&(v=1),p===!0&&(v=2),M===!0&&(v=3);let _=a.attributes.position.count*v,U=1;_>t.maxTextureSize&&(U=Math.ceil(_/t.maxTextureSize),_=t.maxTextureSize);let I=new Float32Array(_*U*4*m),w=new Uo(I,_,U,m);w.type=$n,w.needsUpdate=!0;let R=v*4;for(let g=0;g<m;g++){let S=x[g],T=f[g],C=b[g],N=_*U*4*g;for(let q=0;q<S.count;q++){let A=q*R;c===!0&&(s.fromBufferAttribute(S,q),I[N+A+0]=s.x,I[N+A+1]=s.y,I[N+A+2]=s.z,I[N+A+3]=0),p===!0&&(s.fromBufferAttribute(T,q),I[N+A+4]=s.x,I[N+A+5]=s.y,I[N+A+6]=s.z,I[N+A+7]=0),M===!0&&(s.fromBufferAttribute(C,q),I[N+A+8]=s.x,I[N+A+9]=s.y,I[N+A+10]=s.z,I[N+A+11]=C.itemSize===4?s.w:1)}}d={count:m,texture:w,size:new Ct(_,U)},i.set(a,d),a.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let c=0;for(let M=0;M<h.length;M++)c+=h[M];let p=a.morphTargetsRelative?1:1-c;l.getUniforms().setValue(n,"morphTargetBaseInfluence",p),l.getUniforms().setValue(n,"morphTargetInfluences",h)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:r}}function fg(n,t,e,i){let s=new WeakMap;function r(l){let h=i.render.frame,u=l.geometry,m=t.get(l,u);if(s.get(m)!==h&&(t.update(m),s.set(m,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==h&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,h))),l.isSkinnedMesh){let d=l.skeleton;s.get(d)!==h&&(d.update(),s.set(d,h))}return m}function o(){s=new WeakMap}function a(l){let h=l.target;h.removeEventListener("dispose",a),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:r,dispose:o}}var Go=class extends pn{constructor(t,e,i,s,r,o,a,l,h,u=Ds){if(u!==Ds&&u!==Bs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Ds&&(i=qi),i===void 0&&u===Bs&&(i=zs),super(null,s,r,o,a,l,u,i,h),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:ln,this.minFilter=l!==void 0?l:ln,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Ju=new pn,Qh=new Go(1,1),Ku=new Uo,ju=new tc,Qu=new Ho,tu=[],eu=[],nu=new Float32Array(16),iu=new Float32Array(9),su=new Float32Array(4);function Xs(n,t,e){let i=n[0];if(i<=0||i>0)return n;let s=t*e,r=tu[s];if(r===void 0&&(r=new Float32Array(s),tu[s]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(r,a)}return r}function Ge(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function We(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function ma(n,t){let e=eu[t];e===void 0&&(e=new Int32Array(t),eu[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function pg(n,t){let e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function mg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ge(e,t))return;n.uniform2fv(this.addr,t),We(e,t)}}function gg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ge(e,t))return;n.uniform3fv(this.addr,t),We(e,t)}}function xg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ge(e,t))return;n.uniform4fv(this.addr,t),We(e,t)}}function yg(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Ge(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),We(e,t)}else{if(Ge(e,i))return;su.set(i),n.uniformMatrix2fv(this.addr,!1,su),We(e,i)}}function vg(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Ge(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),We(e,t)}else{if(Ge(e,i))return;iu.set(i),n.uniformMatrix3fv(this.addr,!1,iu),We(e,i)}}function _g(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Ge(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),We(e,t)}else{if(Ge(e,i))return;nu.set(i),n.uniformMatrix4fv(this.addr,!1,nu),We(e,i)}}function Mg(n,t){let e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function bg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ge(e,t))return;n.uniform2iv(this.addr,t),We(e,t)}}function Sg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ge(e,t))return;n.uniform3iv(this.addr,t),We(e,t)}}function wg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ge(e,t))return;n.uniform4iv(this.addr,t),We(e,t)}}function Eg(n,t){let e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function Tg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ge(e,t))return;n.uniform2uiv(this.addr,t),We(e,t)}}function Ag(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ge(e,t))return;n.uniform3uiv(this.addr,t),We(e,t)}}function Rg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ge(e,t))return;n.uniform4uiv(this.addr,t),We(e,t)}}function Cg(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Qh.compareFunction=Gu,r=Qh):r=Ju,e.setTexture2D(t||r,s)}function Ig(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||ju,s)}function Pg(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||Qu,s)}function Lg(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||Ku,s)}function Dg(n){switch(n){case 5126:return pg;case 35664:return mg;case 35665:return gg;case 35666:return xg;case 35674:return yg;case 35675:return vg;case 35676:return _g;case 5124:case 35670:return Mg;case 35667:case 35671:return bg;case 35668:case 35672:return Sg;case 35669:case 35673:return wg;case 5125:return Eg;case 36294:return Tg;case 36295:return Ag;case 36296:return Rg;case 35678:case 36198:case 36298:case 36306:case 35682:return Cg;case 35679:case 36299:case 36307:return Ig;case 35680:case 36300:case 36308:case 36293:return Pg;case 36289:case 36303:case 36311:case 36292:return Lg}}function kg(n,t){n.uniform1fv(this.addr,t)}function Ug(n,t){let e=Xs(t,this.size,2);n.uniform2fv(this.addr,e)}function Ng(n,t){let e=Xs(t,this.size,3);n.uniform3fv(this.addr,e)}function Fg(n,t){let e=Xs(t,this.size,4);n.uniform4fv(this.addr,e)}function Og(n,t){let e=Xs(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function zg(n,t){let e=Xs(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function Bg(n,t){let e=Xs(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function Hg(n,t){n.uniform1iv(this.addr,t)}function $g(n,t){n.uniform2iv(this.addr,t)}function Vg(n,t){n.uniform3iv(this.addr,t)}function Gg(n,t){n.uniform4iv(this.addr,t)}function Wg(n,t){n.uniform1uiv(this.addr,t)}function Xg(n,t){n.uniform2uiv(this.addr,t)}function qg(n,t){n.uniform3uiv(this.addr,t)}function Yg(n,t){n.uniform4uiv(this.addr,t)}function Zg(n,t,e){let i=this.cache,s=t.length,r=ma(e,s);Ge(i,r)||(n.uniform1iv(this.addr,r),We(i,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Ju,r[o])}function Jg(n,t,e){let i=this.cache,s=t.length,r=ma(e,s);Ge(i,r)||(n.uniform1iv(this.addr,r),We(i,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||ju,r[o])}function Kg(n,t,e){let i=this.cache,s=t.length,r=ma(e,s);Ge(i,r)||(n.uniform1iv(this.addr,r),We(i,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Qu,r[o])}function jg(n,t,e){let i=this.cache,s=t.length,r=ma(e,s);Ge(i,r)||(n.uniform1iv(this.addr,r),We(i,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Ku,r[o])}function Qg(n){switch(n){case 5126:return kg;case 35664:return Ug;case 35665:return Ng;case 35666:return Fg;case 35674:return Og;case 35675:return zg;case 35676:return Bg;case 5124:case 35670:return Hg;case 35667:case 35671:return $g;case 35668:case 35672:return Vg;case 35669:case 35673:return Gg;case 5125:return Wg;case 36294:return Xg;case 36295:return qg;case 36296:return Yg;case 35678:case 36198:case 36298:case 36306:case 35682:return Zg;case 35679:case 36299:case 36307:return Jg;case 35680:case 36300:case 36308:case 36293:return Kg;case 36289:case 36303:case 36311:case 36292:return jg}}var ic=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=Dg(e.type)}},sc=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Qg(e.type)}},rc=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],i)}}},rl=/(\w+)(\])?(\[|\.)?/g;function ru(n,t){n.seq.push(t),n.map[t.id]=t}function tx(n,t,e){let i=n.name,s=i.length;for(rl.lastIndex=0;;){let r=rl.exec(i),o=rl.lastIndex,a=r[1],l=r[2]==="]",h=r[3];if(l&&(a=a|0),h===void 0||h==="["&&o+2===s){ru(e,h===void 0?new ic(a,n,t):new sc(a,n,t));break}else{let m=e.map[a];m===void 0&&(m=new rc(a),ru(e,m)),e=m}}}var Us=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);tx(r,o,this)}}setValue(t,e,i,s){let r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){let s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let i=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&i.push(o)}return i}};function ou(n,t,e){let i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}var ex=37297,nx=0;function ix(n,t){let e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}var au=new ce;function sx(n){pe._getMatrix(au,pe.workingColorSpace,n);let t=`mat3( ${au.elements.map(e=>e.toFixed(4))} )`;switch(pe.getTransfer(n)){case pa:return[t,"LinearTransferOETF"];case be:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function lu(n,t,e){let i=n.getShaderParameter(t,n.COMPILE_STATUS),s=n.getShaderInfoLog(t).trim();if(i&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+ix(n.getShaderSource(t),o)}else return s}function rx(n,t){let e=sx(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function ox(n,t){let e;switch(t){case xf:e="Linear";break;case yf:e="Reinhard";break;case vf:e="Cineon";break;case _f:e="ACESFilmic";break;case bf:e="AgX";break;case Sf:e="Neutral";break;case Mf:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var mo=new G;function ax(){pe.getLuminanceCoefficients(mo);let n=mo.x.toFixed(4),t=mo.y.toFixed(4),e=mo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function lx(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ur).join(`
`)}function cx(n){let t=[];for(let e in n){let i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function hx(n,t){let e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(t,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function ur(n){return n!==""}function cu(n,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function hu(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var ux=/^[ \t]*#include +<([\w\d./]+)>/gm;function oc(n){return n.replace(ux,fx)}var dx=new Map;function fx(n,t){let e=se[t];if(e===void 0){let i=dx.get(t);if(i!==void 0)e=se[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return oc(e)}var px=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function uu(n){return n.replace(px,mx)}function mx(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function du(n){let t=`precision ${n.precision} float;
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
#define LOW_PRECISION`),t}function gx(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Pu?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===Uc?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===ei&&(t="SHADOWMAP_TYPE_VSM"),t}function xx(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Fs:case Os:t="ENVMAP_TYPE_CUBE";break;case fa:t="ENVMAP_TYPE_CUBE_UV";break}return t}function yx(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Os:t="ENVMAP_MODE_REFRACTION";break}return t}function vx(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Lu:t="ENVMAP_BLENDING_MULTIPLY";break;case mf:t="ENVMAP_BLENDING_MIX";break;case gf:t="ENVMAP_BLENDING_ADD";break}return t}function _x(n){let t=n.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function Mx(n,t,e,i){let s=n.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=gx(e),h=xx(e),u=yx(e),m=vx(e),d=_x(e),c=lx(e),p=cx(r),M=s.createProgram(),x,f,b=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(x=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(ur).join(`
`),x.length>0&&(x+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(ur).join(`
`),f.length>0&&(f+=`
`)):(x=[du(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ur).join(`
`),f=[du(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",e.envMap?"#define "+m:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Vn?"#define TONE_MAPPING":"",e.toneMapping!==Vn?se.tonemapping_pars_fragment:"",e.toneMapping!==Vn?ox("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",se.colorspace_pars_fragment,rx("linearToOutputTexel",e.outputColorSpace),ax(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ur).join(`
`)),o=oc(o),o=cu(o,e),o=hu(o,e),a=oc(a),a=cu(a,e),a=hu(a,e),o=uu(o),a=uu(a),e.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,x=[c,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,f=["#define varying in",e.glslVersion===Eh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Eh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let v=b+x+o,_=b+f+a,U=ou(s,s.VERTEX_SHADER,v),I=ou(s,s.FRAGMENT_SHADER,_);s.attachShader(M,U),s.attachShader(M,I),e.index0AttributeName!==void 0?s.bindAttribLocation(M,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(M,0,"position"),s.linkProgram(M);function w(S){if(n.debug.checkShaderErrors){let T=s.getProgramInfoLog(M).trim(),C=s.getShaderInfoLog(U).trim(),N=s.getShaderInfoLog(I).trim(),q=!0,A=!0;if(s.getProgramParameter(M,s.LINK_STATUS)===!1)if(q=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,M,U,I);else{let H=lu(s,U,"vertex"),V=lu(s,I,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(M,s.VALIDATE_STATUS)+`

Material Name: `+S.name+`
Material Type: `+S.type+`

Program Info Log: `+T+`
`+H+`
`+V)}else T!==""?console.warn("THREE.WebGLProgram: Program Info Log:",T):(C===""||N==="")&&(A=!1);A&&(S.diagnostics={runnable:q,programLog:T,vertexShader:{log:C,prefix:x},fragmentShader:{log:N,prefix:f}})}s.deleteShader(U),s.deleteShader(I),R=new Us(s,M),y=hx(s,M)}let R;this.getUniforms=function(){return R===void 0&&w(this),R};let y;this.getAttributes=function(){return y===void 0&&w(this),y};let g=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return g===!1&&(g=s.getProgramParameter(M,ex)),g},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(M),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=nx++,this.cacheKey=t,this.usedTimes=1,this.program=M,this.vertexShader=U,this.fragmentShader=I,this}var bx=0,ac=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new lc(t),e.set(t,i)),i}},lc=class{constructor(t){this.id=bx++,this.code=t,this.usedTimes=0}};function Sx(n,t,e,i,s,r,o){let a=new Fo,l=new ac,h=new Set,u=[],m=s.logarithmicDepthBuffer,d=s.vertexTextures,c=s.precision,p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(y){return h.add(y),y===0?"uv":`uv${y}`}function x(y,g,S,T,C){let N=T.fog,q=C.geometry,A=y.isMeshStandardMaterial?T.environment:null,H=(y.isMeshStandardMaterial?e:t).get(y.envMap||A),V=H&&H.mapping===fa?H.image.height:null,rt=p[y.type];y.precision!==null&&(c=s.getMaxPrecision(y.precision),c!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",c,"instead."));let ot=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,D=ot!==void 0?ot.length:0,St=0;q.morphAttributes.position!==void 0&&(St=1),q.morphAttributes.normal!==void 0&&(St=2),q.morphAttributes.color!==void 0&&(St=3);let K,Y,X,$;if(rt){let ft=Bn[rt];K=ft.vertexShader,Y=ft.fragmentShader}else K=y.vertexShader,Y=y.fragmentShader,l.update(y),X=l.getVertexShaderID(y),$=l.getFragmentShaderID(y);let Z=n.getRenderTarget(),at=n.state.buffers.depth.getReversed(),xt=C.isInstancedMesh===!0,Tt=C.isBatchedMesh===!0,At=!!y.map,lt=!!y.matcap,mt=!!H,W=!!y.aoMap,Et=!!y.lightMap,Mt=!!y.bumpMap,et=!!y.normalMap,Rt=!!y.displacementMap,$t=!!y.emissiveMap,Ut=!!y.metalnessMap,B=!!y.roughnessMap,k=y.anisotropy>0,pt=y.clearcoat>0,st=y.dispersion>0,it=y.iridescence>0,nt=y.sheen>0,_t=y.transmission>0,ht=k&&!!y.anisotropyMap,It=pt&&!!y.clearcoatMap,Pt=pt&&!!y.clearcoatNormalMap,bt=pt&&!!y.clearcoatRoughnessMap,Dt=it&&!!y.iridescenceMap,qt=it&&!!y.iridescenceThicknessMap,Yt=nt&&!!y.sheenColorMap,Lt=nt&&!!y.sheenRoughnessMap,ne=!!y.specularMap,Zt=!!y.specularColorMap,P=!!y.specularIntensityMap,L=_t&&!!y.transmissionMap,Q=_t&&!!y.thicknessMap,E=!!y.gradientMap,F=!!y.alphaMap,z=y.alphaTest>0,j=!!y.alphaHash,ct=!!y.extensions,J=Vn;y.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(J=n.toneMapping);let tt={shaderID:rt,shaderType:y.type,shaderName:y.name,vertexShader:K,fragmentShader:Y,defines:y.defines,customVertexShaderID:X,customFragmentShaderID:$,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:c,batching:Tt,batchingColor:Tt&&C._colorsTexture!==null,instancing:xt,instancingColor:xt&&C.instanceColor!==null,instancingMorph:xt&&C.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:Z===null?n.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:Ws,alphaToCoverage:!!y.alphaToCoverage,map:At,matcap:lt,envMap:mt,envMapMode:mt&&H.mapping,envMapCubeUVHeight:V,aoMap:W,lightMap:Et,bumpMap:Mt,normalMap:et,displacementMap:d&&Rt,emissiveMap:$t,normalMapObjectSpace:et&&y.normalMapType===Af,normalMapTangentSpace:et&&y.normalMapType===Vu,metalnessMap:Ut,roughnessMap:B,anisotropy:k,anisotropyMap:ht,clearcoat:pt,clearcoatMap:It,clearcoatNormalMap:Pt,clearcoatRoughnessMap:bt,dispersion:st,iridescence:it,iridescenceMap:Dt,iridescenceThicknessMap:qt,sheen:nt,sheenColorMap:Yt,sheenRoughnessMap:Lt,specularMap:ne,specularColorMap:Zt,specularIntensityMap:P,transmission:_t,transmissionMap:L,thicknessMap:Q,gradientMap:E,opaque:y.transparent===!1&&y.blending===Ls&&y.alphaToCoverage===!1,alphaMap:F,alphaTest:z,alphaHash:j,combine:y.combine,mapUv:At&&M(y.map.channel),aoMapUv:W&&M(y.aoMap.channel),lightMapUv:Et&&M(y.lightMap.channel),bumpMapUv:Mt&&M(y.bumpMap.channel),normalMapUv:et&&M(y.normalMap.channel),displacementMapUv:Rt&&M(y.displacementMap.channel),emissiveMapUv:$t&&M(y.emissiveMap.channel),metalnessMapUv:Ut&&M(y.metalnessMap.channel),roughnessMapUv:B&&M(y.roughnessMap.channel),anisotropyMapUv:ht&&M(y.anisotropyMap.channel),clearcoatMapUv:It&&M(y.clearcoatMap.channel),clearcoatNormalMapUv:Pt&&M(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:bt&&M(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Dt&&M(y.iridescenceMap.channel),iridescenceThicknessMapUv:qt&&M(y.iridescenceThicknessMap.channel),sheenColorMapUv:Yt&&M(y.sheenColorMap.channel),sheenRoughnessMapUv:Lt&&M(y.sheenRoughnessMap.channel),specularMapUv:ne&&M(y.specularMap.channel),specularColorMapUv:Zt&&M(y.specularColorMap.channel),specularIntensityMapUv:P&&M(y.specularIntensityMap.channel),transmissionMapUv:L&&M(y.transmissionMap.channel),thicknessMapUv:Q&&M(y.thicknessMap.channel),alphaMapUv:F&&M(y.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(et||k),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:C.isPoints===!0&&!!q.attributes.uv&&(At||F),fog:!!N,useFog:y.fog===!0,fogExp2:!!N&&N.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:m,reverseDepthBuffer:at,skinning:C.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:D,morphTextureStride:St,numDirLights:g.directional.length,numPointLights:g.point.length,numSpotLights:g.spot.length,numSpotLightMaps:g.spotLightMap.length,numRectAreaLights:g.rectArea.length,numHemiLights:g.hemi.length,numDirLightShadows:g.directionalShadowMap.length,numPointLightShadows:g.pointShadowMap.length,numSpotLightShadows:g.spotShadowMap.length,numSpotLightShadowsWithMaps:g.numSpotLightShadowsWithMaps,numLightProbes:g.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:n.shadowMap.enabled&&S.length>0,shadowMapType:n.shadowMap.type,toneMapping:J,decodeVideoTexture:At&&y.map.isVideoTexture===!0&&pe.getTransfer(y.map.colorSpace)===be,decodeVideoTextureEmissive:$t&&y.emissiveMap.isVideoTexture===!0&&pe.getTransfer(y.emissiveMap.colorSpace)===be,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Fe,flipSided:y.side===Ze,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:ct&&y.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ct&&y.extensions.multiDraw===!0||Tt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return tt.vertexUv1s=h.has(1),tt.vertexUv2s=h.has(2),tt.vertexUv3s=h.has(3),h.clear(),tt}function f(y){let g=[];if(y.shaderID?g.push(y.shaderID):(g.push(y.customVertexShaderID),g.push(y.customFragmentShaderID)),y.defines!==void 0)for(let S in y.defines)g.push(S),g.push(y.defines[S]);return y.isRawShaderMaterial===!1&&(b(g,y),v(g,y),g.push(n.outputColorSpace)),g.push(y.customProgramCacheKey),g.join()}function b(y,g){y.push(g.precision),y.push(g.outputColorSpace),y.push(g.envMapMode),y.push(g.envMapCubeUVHeight),y.push(g.mapUv),y.push(g.alphaMapUv),y.push(g.lightMapUv),y.push(g.aoMapUv),y.push(g.bumpMapUv),y.push(g.normalMapUv),y.push(g.displacementMapUv),y.push(g.emissiveMapUv),y.push(g.metalnessMapUv),y.push(g.roughnessMapUv),y.push(g.anisotropyMapUv),y.push(g.clearcoatMapUv),y.push(g.clearcoatNormalMapUv),y.push(g.clearcoatRoughnessMapUv),y.push(g.iridescenceMapUv),y.push(g.iridescenceThicknessMapUv),y.push(g.sheenColorMapUv),y.push(g.sheenRoughnessMapUv),y.push(g.specularMapUv),y.push(g.specularColorMapUv),y.push(g.specularIntensityMapUv),y.push(g.transmissionMapUv),y.push(g.thicknessMapUv),y.push(g.combine),y.push(g.fogExp2),y.push(g.sizeAttenuation),y.push(g.morphTargetsCount),y.push(g.morphAttributeCount),y.push(g.numDirLights),y.push(g.numPointLights),y.push(g.numSpotLights),y.push(g.numSpotLightMaps),y.push(g.numHemiLights),y.push(g.numRectAreaLights),y.push(g.numDirLightShadows),y.push(g.numPointLightShadows),y.push(g.numSpotLightShadows),y.push(g.numSpotLightShadowsWithMaps),y.push(g.numLightProbes),y.push(g.shadowMapType),y.push(g.toneMapping),y.push(g.numClippingPlanes),y.push(g.numClipIntersection),y.push(g.depthPacking)}function v(y,g){a.disableAll(),g.supportsVertexTextures&&a.enable(0),g.instancing&&a.enable(1),g.instancingColor&&a.enable(2),g.instancingMorph&&a.enable(3),g.matcap&&a.enable(4),g.envMap&&a.enable(5),g.normalMapObjectSpace&&a.enable(6),g.normalMapTangentSpace&&a.enable(7),g.clearcoat&&a.enable(8),g.iridescence&&a.enable(9),g.alphaTest&&a.enable(10),g.vertexColors&&a.enable(11),g.vertexAlphas&&a.enable(12),g.vertexUv1s&&a.enable(13),g.vertexUv2s&&a.enable(14),g.vertexUv3s&&a.enable(15),g.vertexTangents&&a.enable(16),g.anisotropy&&a.enable(17),g.alphaHash&&a.enable(18),g.batching&&a.enable(19),g.dispersion&&a.enable(20),g.batchingColor&&a.enable(21),y.push(a.mask),a.disableAll(),g.fog&&a.enable(0),g.useFog&&a.enable(1),g.flatShading&&a.enable(2),g.logarithmicDepthBuffer&&a.enable(3),g.reverseDepthBuffer&&a.enable(4),g.skinning&&a.enable(5),g.morphTargets&&a.enable(6),g.morphNormals&&a.enable(7),g.morphColors&&a.enable(8),g.premultipliedAlpha&&a.enable(9),g.shadowMapEnabled&&a.enable(10),g.doubleSided&&a.enable(11),g.flipSided&&a.enable(12),g.useDepthPacking&&a.enable(13),g.dithering&&a.enable(14),g.transmission&&a.enable(15),g.sheen&&a.enable(16),g.opaque&&a.enable(17),g.pointsUvs&&a.enable(18),g.decodeVideoTexture&&a.enable(19),g.decodeVideoTextureEmissive&&a.enable(20),g.alphaToCoverage&&a.enable(21),y.push(a.mask)}function _(y){let g=p[y.type],S;if(g){let T=Bn[g];S=Gc.clone(T.uniforms)}else S=y.uniforms;return S}function U(y,g){let S;for(let T=0,C=u.length;T<C;T++){let N=u[T];if(N.cacheKey===g){S=N,++S.usedTimes;break}}return S===void 0&&(S=new Mx(n,g,y,r),u.push(S)),S}function I(y){if(--y.usedTimes===0){let g=u.indexOf(y);u[g]=u[u.length-1],u.pop(),y.destroy()}}function w(y){l.remove(y)}function R(){l.dispose()}return{getParameters:x,getProgramCacheKey:f,getUniforms:_,acquireProgram:U,releaseProgram:I,releaseShaderCache:w,programs:u,dispose:R}}function wx(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function Ex(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function fu(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function pu(){let n=[],t=0,e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function o(m,d,c,p,M,x){let f=n[t];return f===void 0?(f={id:m.id,object:m,geometry:d,material:c,groupOrder:p,renderOrder:m.renderOrder,z:M,group:x},n[t]=f):(f.id=m.id,f.object=m,f.geometry=d,f.material=c,f.groupOrder=p,f.renderOrder=m.renderOrder,f.z=M,f.group=x),t++,f}function a(m,d,c,p,M,x){let f=o(m,d,c,p,M,x);c.transmission>0?i.push(f):c.transparent===!0?s.push(f):e.push(f)}function l(m,d,c,p,M,x){let f=o(m,d,c,p,M,x);c.transmission>0?i.unshift(f):c.transparent===!0?s.unshift(f):e.unshift(f)}function h(m,d){e.length>1&&e.sort(m||Ex),i.length>1&&i.sort(d||fu),s.length>1&&s.sort(d||fu)}function u(){for(let m=t,d=n.length;m<d;m++){let c=n[m];if(c.id===null)break;c.id=null,c.object=null,c.geometry=null,c.material=null,c.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:u,sort:h}}function Tx(){let n=new WeakMap;function t(i,s){let r=n.get(i),o;return r===void 0?(o=new pu,n.set(i,[o])):s>=r.length?(o=new pu,r.push(o)):o=r[s],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function Ax(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new G,color:new Qt};break;case"SpotLight":e={position:new G,direction:new G,color:new Qt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new G,color:new Qt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new G,skyColor:new Qt,groundColor:new Qt};break;case"RectAreaLight":e={color:new Qt,position:new G,halfWidth:new G,halfHeight:new G};break}return n[t.id]=e,e}}}function Rx(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}var Cx=0;function Ix(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function Px(n){let t=new Ax,e=Rx(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new G);let s=new G,r=new ge,o=new ge;function a(h){let u=0,m=0,d=0;for(let y=0;y<9;y++)i.probe[y].set(0,0,0);let c=0,p=0,M=0,x=0,f=0,b=0,v=0,_=0,U=0,I=0,w=0;h.sort(Ix);for(let y=0,g=h.length;y<g;y++){let S=h[y],T=S.color,C=S.intensity,N=S.distance,q=S.shadow&&S.shadow.map?S.shadow.map.texture:null;if(S.isAmbientLight)u+=T.r*C,m+=T.g*C,d+=T.b*C;else if(S.isLightProbe){for(let A=0;A<9;A++)i.probe[A].addScaledVector(S.sh.coefficients[A],C);w++}else if(S.isDirectionalLight){let A=t.get(S);if(A.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let H=S.shadow,V=e.get(S);V.shadowIntensity=H.intensity,V.shadowBias=H.bias,V.shadowNormalBias=H.normalBias,V.shadowRadius=H.radius,V.shadowMapSize=H.mapSize,i.directionalShadow[c]=V,i.directionalShadowMap[c]=q,i.directionalShadowMatrix[c]=S.shadow.matrix,b++}i.directional[c]=A,c++}else if(S.isSpotLight){let A=t.get(S);A.position.setFromMatrixPosition(S.matrixWorld),A.color.copy(T).multiplyScalar(C),A.distance=N,A.coneCos=Math.cos(S.angle),A.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),A.decay=S.decay,i.spot[M]=A;let H=S.shadow;if(S.map&&(i.spotLightMap[U]=S.map,U++,H.updateMatrices(S),S.castShadow&&I++),i.spotLightMatrix[M]=H.matrix,S.castShadow){let V=e.get(S);V.shadowIntensity=H.intensity,V.shadowBias=H.bias,V.shadowNormalBias=H.normalBias,V.shadowRadius=H.radius,V.shadowMapSize=H.mapSize,i.spotShadow[M]=V,i.spotShadowMap[M]=q,_++}M++}else if(S.isRectAreaLight){let A=t.get(S);A.color.copy(T).multiplyScalar(C),A.halfWidth.set(S.width*.5,0,0),A.halfHeight.set(0,S.height*.5,0),i.rectArea[x]=A,x++}else if(S.isPointLight){let A=t.get(S);if(A.color.copy(S.color).multiplyScalar(S.intensity),A.distance=S.distance,A.decay=S.decay,S.castShadow){let H=S.shadow,V=e.get(S);V.shadowIntensity=H.intensity,V.shadowBias=H.bias,V.shadowNormalBias=H.normalBias,V.shadowRadius=H.radius,V.shadowMapSize=H.mapSize,V.shadowCameraNear=H.camera.near,V.shadowCameraFar=H.camera.far,i.pointShadow[p]=V,i.pointShadowMap[p]=q,i.pointShadowMatrix[p]=S.shadow.matrix,v++}i.point[p]=A,p++}else if(S.isHemisphereLight){let A=t.get(S);A.skyColor.copy(S.color).multiplyScalar(C),A.groundColor.copy(S.groundColor).multiplyScalar(C),i.hemi[f]=A,f++}}x>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=zt.LTC_FLOAT_1,i.rectAreaLTC2=zt.LTC_FLOAT_2):(i.rectAreaLTC1=zt.LTC_HALF_1,i.rectAreaLTC2=zt.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=m,i.ambient[2]=d;let R=i.hash;(R.directionalLength!==c||R.pointLength!==p||R.spotLength!==M||R.rectAreaLength!==x||R.hemiLength!==f||R.numDirectionalShadows!==b||R.numPointShadows!==v||R.numSpotShadows!==_||R.numSpotMaps!==U||R.numLightProbes!==w)&&(i.directional.length=c,i.spot.length=M,i.rectArea.length=x,i.point.length=p,i.hemi.length=f,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=v,i.pointShadowMap.length=v,i.spotShadow.length=_,i.spotShadowMap.length=_,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=v,i.spotLightMatrix.length=_+U-I,i.spotLightMap.length=U,i.numSpotLightShadowsWithMaps=I,i.numLightProbes=w,R.directionalLength=c,R.pointLength=p,R.spotLength=M,R.rectAreaLength=x,R.hemiLength=f,R.numDirectionalShadows=b,R.numPointShadows=v,R.numSpotShadows=_,R.numSpotMaps=U,R.numLightProbes=w,i.version=Cx++)}function l(h,u){let m=0,d=0,c=0,p=0,M=0,x=u.matrixWorldInverse;for(let f=0,b=h.length;f<b;f++){let v=h[f];if(v.isDirectionalLight){let _=i.directional[m];_.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(x),m++}else if(v.isSpotLight){let _=i.spot[c];_.position.setFromMatrixPosition(v.matrixWorld),_.position.applyMatrix4(x),_.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(x),c++}else if(v.isRectAreaLight){let _=i.rectArea[p];_.position.setFromMatrixPosition(v.matrixWorld),_.position.applyMatrix4(x),o.identity(),r.copy(v.matrixWorld),r.premultiply(x),o.extractRotation(r),_.halfWidth.set(v.width*.5,0,0),_.halfHeight.set(0,v.height*.5,0),_.halfWidth.applyMatrix4(o),_.halfHeight.applyMatrix4(o),p++}else if(v.isPointLight){let _=i.point[d];_.position.setFromMatrixPosition(v.matrixWorld),_.position.applyMatrix4(x),d++}else if(v.isHemisphereLight){let _=i.hemi[M];_.direction.setFromMatrixPosition(v.matrixWorld),_.direction.transformDirection(x),M++}}}return{setup:a,setupView:l,state:i}}function mu(n){let t=new Px(n),e=[],i=[];function s(u){h.camera=u,e.length=0,i.length=0}function r(u){e.push(u)}function o(u){i.push(u)}function a(){t.setup(e)}function l(u){t.setupView(e,u)}let h={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:h,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function Lx(n){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new mu(n),t.set(s,[a])):r>=o.length?(a=new mu(n),o.push(a)):a=o[r],a}function i(){t=new WeakMap}return{get:e,dispose:i}}var cc=class extends li{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Ef,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},hc=class extends li{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},Dx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,kx=`uniform sampler2D shadow_pass;
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
}`;function Ux(n,t,e){let i=new vr,s=new Ct,r=new Ct,o=new Ne,a=new cc({depthPacking:Tf}),l=new hc,h={},u=e.maxTextureSize,m={[Ci]:Ze,[Ze]:Ci,[Fe]:Fe},d=new cn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ct},radius:{value:4}},vertexShader:Dx,fragmentShader:kx}),c=d.clone();c.defines.HORIZONTAL_PASS=1;let p=new Se;p.setAttribute("position",new De(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let M=new Ce(p,d),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Pu;let f=this.type;this.render=function(I,w,R){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||I.length===0)return;let y=n.getRenderTarget(),g=n.getActiveCubeFace(),S=n.getActiveMipmapLevel(),T=n.state;T.setBlending(Ai),T.buffers.color.setClear(1,1,1,1),T.buffers.depth.setTest(!0),T.setScissorTest(!1);let C=f!==ei&&this.type===ei,N=f===ei&&this.type!==ei;for(let q=0,A=I.length;q<A;q++){let H=I[q],V=H.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",H,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);let rt=V.getFrameExtents();if(s.multiply(rt),r.copy(V.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/rt.x),s.x=r.x*rt.x,V.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/rt.y),s.y=r.y*rt.y,V.mapSize.y=r.y)),V.map===null||C===!0||N===!0){let D=this.type!==ei?{minFilter:ln,magFilter:ln}:{};V.map!==null&&V.map.dispose(),V.map=new oi(s.x,s.y,D),V.map.texture.name=H.name+".shadowMap",V.camera.updateProjectionMatrix()}n.setRenderTarget(V.map),n.clear();let ot=V.getViewportCount();for(let D=0;D<ot;D++){let St=V.getViewport(D);o.set(r.x*St.x,r.y*St.y,r.x*St.z,r.y*St.w),T.viewport(o),V.updateMatrices(H,D),i=V.getFrustum(),_(w,R,V.camera,H,this.type)}V.isPointLightShadow!==!0&&this.type===ei&&b(V,R),V.needsUpdate=!1}f=this.type,x.needsUpdate=!1,n.setRenderTarget(y,g,S)};function b(I,w){let R=t.update(M);d.defines.VSM_SAMPLES!==I.blurSamples&&(d.defines.VSM_SAMPLES=I.blurSamples,c.defines.VSM_SAMPLES=I.blurSamples,d.needsUpdate=!0,c.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new oi(s.x,s.y)),d.uniforms.shadow_pass.value=I.map.texture,d.uniforms.resolution.value=I.mapSize,d.uniforms.radius.value=I.radius,n.setRenderTarget(I.mapPass),n.clear(),n.renderBufferDirect(w,null,R,d,M,null),c.uniforms.shadow_pass.value=I.mapPass.texture,c.uniforms.resolution.value=I.mapSize,c.uniforms.radius.value=I.radius,n.setRenderTarget(I.map),n.clear(),n.renderBufferDirect(w,null,R,c,M,null)}function v(I,w,R,y){let g=null,S=R.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(S!==void 0)g=S;else if(g=R.isPointLight===!0?l:a,n.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){let T=g.uuid,C=w.uuid,N=h[T];N===void 0&&(N={},h[T]=N);let q=N[C];q===void 0&&(q=g.clone(),N[C]=q,w.addEventListener("dispose",U)),g=q}if(g.visible=w.visible,g.wireframe=w.wireframe,y===ei?g.side=w.shadowSide!==null?w.shadowSide:w.side:g.side=w.shadowSide!==null?w.shadowSide:m[w.side],g.alphaMap=w.alphaMap,g.alphaTest=w.alphaTest,g.map=w.map,g.clipShadows=w.clipShadows,g.clippingPlanes=w.clippingPlanes,g.clipIntersection=w.clipIntersection,g.displacementMap=w.displacementMap,g.displacementScale=w.displacementScale,g.displacementBias=w.displacementBias,g.wireframeLinewidth=w.wireframeLinewidth,g.linewidth=w.linewidth,R.isPointLight===!0&&g.isMeshDistanceMaterial===!0){let T=n.properties.get(g);T.light=R}return g}function _(I,w,R,y,g){if(I.visible===!1)return;if(I.layers.test(w.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&g===ei)&&(!I.frustumCulled||i.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,I.matrixWorld);let C=t.update(I),N=I.material;if(Array.isArray(N)){let q=C.groups;for(let A=0,H=q.length;A<H;A++){let V=q[A],rt=N[V.materialIndex];if(rt&&rt.visible){let ot=v(I,rt,y,g);I.onBeforeShadow(n,I,w,R,C,ot,V),n.renderBufferDirect(R,null,C,ot,I,V),I.onAfterShadow(n,I,w,R,C,ot,V)}}}else if(N.visible){let q=v(I,N,y,g);I.onBeforeShadow(n,I,w,R,C,q,null),n.renderBufferDirect(R,null,C,q,I,null),I.onAfterShadow(n,I,w,R,C,q,null)}}let T=I.children;for(let C=0,N=T.length;C<N;C++)_(T[C],w,R,y,g)}function U(I){I.target.removeEventListener("dispose",U);for(let R in h){let y=h[R],g=I.target.uuid;g in y&&(y[g].dispose(),delete y[g])}}}var Nx={[pl]:ml,[gl]:vl,[xl]:_l,[Ns]:yl,[ml]:pl,[vl]:gl,[_l]:xl,[yl]:Ns};function Fx(n,t){function e(){let L=!1,Q=new Ne,E=null,F=new Ne(0,0,0,0);return{setMask:function(z){E!==z&&!L&&(n.colorMask(z,z,z,z),E=z)},setLocked:function(z){L=z},setClear:function(z,j,ct,J,tt){tt===!0&&(z*=J,j*=J,ct*=J),Q.set(z,j,ct,J),F.equals(Q)===!1&&(n.clearColor(z,j,ct,J),F.copy(Q))},reset:function(){L=!1,E=null,F.set(-1,0,0,0)}}}function i(){let L=!1,Q=!1,E=null,F=null,z=null;return{setReversed:function(j){if(Q!==j){let ct=t.get("EXT_clip_control");Q?ct.clipControlEXT(ct.LOWER_LEFT_EXT,ct.ZERO_TO_ONE_EXT):ct.clipControlEXT(ct.LOWER_LEFT_EXT,ct.NEGATIVE_ONE_TO_ONE_EXT);let J=z;z=null,this.setClear(J)}Q=j},getReversed:function(){return Q},setTest:function(j){j?Z(n.DEPTH_TEST):at(n.DEPTH_TEST)},setMask:function(j){E!==j&&!L&&(n.depthMask(j),E=j)},setFunc:function(j){if(Q&&(j=Nx[j]),F!==j){switch(j){case pl:n.depthFunc(n.NEVER);break;case ml:n.depthFunc(n.ALWAYS);break;case gl:n.depthFunc(n.LESS);break;case Ns:n.depthFunc(n.LEQUAL);break;case xl:n.depthFunc(n.EQUAL);break;case yl:n.depthFunc(n.GEQUAL);break;case vl:n.depthFunc(n.GREATER);break;case _l:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}F=j}},setLocked:function(j){L=j},setClear:function(j){z!==j&&(Q&&(j=1-j),n.clearDepth(j),z=j)},reset:function(){L=!1,E=null,F=null,z=null,Q=!1}}}function s(){let L=!1,Q=null,E=null,F=null,z=null,j=null,ct=null,J=null,tt=null;return{setTest:function(ft){L||(ft?Z(n.STENCIL_TEST):at(n.STENCIL_TEST))},setMask:function(ft){Q!==ft&&!L&&(n.stencilMask(ft),Q=ft)},setFunc:function(ft,wt,Ot){(E!==ft||F!==wt||z!==Ot)&&(n.stencilFunc(ft,wt,Ot),E=ft,F=wt,z=Ot)},setOp:function(ft,wt,Ot){(j!==ft||ct!==wt||J!==Ot)&&(n.stencilOp(ft,wt,Ot),j=ft,ct=wt,J=Ot)},setLocked:function(ft){L=ft},setClear:function(ft){tt!==ft&&(n.clearStencil(ft),tt=ft)},reset:function(){L=!1,Q=null,E=null,F=null,z=null,j=null,ct=null,J=null,tt=null}}}let r=new e,o=new i,a=new s,l=new WeakMap,h=new WeakMap,u={},m={},d=new WeakMap,c=[],p=null,M=!1,x=null,f=null,b=null,v=null,_=null,U=null,I=null,w=new Qt(0,0,0),R=0,y=!1,g=null,S=null,T=null,C=null,N=null,q=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),A=!1,H=0,V=n.getParameter(n.VERSION);V.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(V)[1]),A=H>=1):V.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),A=H>=2);let rt=null,ot={},D=n.getParameter(n.SCISSOR_BOX),St=n.getParameter(n.VIEWPORT),K=new Ne().fromArray(D),Y=new Ne().fromArray(St);function X(L,Q,E,F){let z=new Uint8Array(4),j=n.createTexture();n.bindTexture(L,j),n.texParameteri(L,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(L,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let ct=0;ct<E;ct++)L===n.TEXTURE_3D||L===n.TEXTURE_2D_ARRAY?n.texImage3D(Q,0,n.RGBA,1,1,F,0,n.RGBA,n.UNSIGNED_BYTE,z):n.texImage2D(Q+ct,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,z);return j}let $={};$[n.TEXTURE_2D]=X(n.TEXTURE_2D,n.TEXTURE_2D,1),$[n.TEXTURE_CUBE_MAP]=X(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),$[n.TEXTURE_2D_ARRAY]=X(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),$[n.TEXTURE_3D]=X(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),Z(n.DEPTH_TEST),o.setFunc(Ns),Mt(!1),et(xh),Z(n.CULL_FACE),W(Ai);function Z(L){u[L]!==!0&&(n.enable(L),u[L]=!0)}function at(L){u[L]!==!1&&(n.disable(L),u[L]=!1)}function xt(L,Q){return m[L]!==Q?(n.bindFramebuffer(L,Q),m[L]=Q,L===n.DRAW_FRAMEBUFFER&&(m[n.FRAMEBUFFER]=Q),L===n.FRAMEBUFFER&&(m[n.DRAW_FRAMEBUFFER]=Q),!0):!1}function Tt(L,Q){let E=c,F=!1;if(L){E=d.get(Q),E===void 0&&(E=[],d.set(Q,E));let z=L.textures;if(E.length!==z.length||E[0]!==n.COLOR_ATTACHMENT0){for(let j=0,ct=z.length;j<ct;j++)E[j]=n.COLOR_ATTACHMENT0+j;E.length=z.length,F=!0}}else E[0]!==n.BACK&&(E[0]=n.BACK,F=!0);F&&n.drawBuffers(E)}function At(L){return p!==L?(n.useProgram(L),p=L,!0):!1}let lt={[$i]:n.FUNC_ADD,[Kd]:n.FUNC_SUBTRACT,[jd]:n.FUNC_REVERSE_SUBTRACT};lt[Qd]=n.MIN,lt[tf]=n.MAX;let mt={[ef]:n.ZERO,[nf]:n.ONE,[sf]:n.SRC_COLOR,[dl]:n.SRC_ALPHA,[hf]:n.SRC_ALPHA_SATURATE,[lf]:n.DST_COLOR,[of]:n.DST_ALPHA,[rf]:n.ONE_MINUS_SRC_COLOR,[fl]:n.ONE_MINUS_SRC_ALPHA,[cf]:n.ONE_MINUS_DST_COLOR,[af]:n.ONE_MINUS_DST_ALPHA,[uf]:n.CONSTANT_COLOR,[df]:n.ONE_MINUS_CONSTANT_COLOR,[ff]:n.CONSTANT_ALPHA,[pf]:n.ONE_MINUS_CONSTANT_ALPHA};function W(L,Q,E,F,z,j,ct,J,tt,ft){if(L===Ai){M===!0&&(at(n.BLEND),M=!1);return}if(M===!1&&(Z(n.BLEND),M=!0),L!==Jd){if(L!==x||ft!==y){if((f!==$i||_!==$i)&&(n.blendEquation(n.FUNC_ADD),f=$i,_=$i),ft)switch(L){case Ls:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case yh:n.blendFunc(n.ONE,n.ONE);break;case vh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case _h:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case Ls:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case yh:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case vh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case _h:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}b=null,v=null,U=null,I=null,w.set(0,0,0),R=0,x=L,y=ft}return}z=z||Q,j=j||E,ct=ct||F,(Q!==f||z!==_)&&(n.blendEquationSeparate(lt[Q],lt[z]),f=Q,_=z),(E!==b||F!==v||j!==U||ct!==I)&&(n.blendFuncSeparate(mt[E],mt[F],mt[j],mt[ct]),b=E,v=F,U=j,I=ct),(J.equals(w)===!1||tt!==R)&&(n.blendColor(J.r,J.g,J.b,tt),w.copy(J),R=tt),x=L,y=!1}function Et(L,Q){L.side===Fe?at(n.CULL_FACE):Z(n.CULL_FACE);let E=L.side===Ze;Q&&(E=!E),Mt(E),L.blending===Ls&&L.transparent===!1?W(Ai):W(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),o.setFunc(L.depthFunc),o.setTest(L.depthTest),o.setMask(L.depthWrite),r.setMask(L.colorWrite);let F=L.stencilWrite;a.setTest(F),F&&(a.setMask(L.stencilWriteMask),a.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),a.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),$t(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?Z(n.SAMPLE_ALPHA_TO_COVERAGE):at(n.SAMPLE_ALPHA_TO_COVERAGE)}function Mt(L){g!==L&&(L?n.frontFace(n.CW):n.frontFace(n.CCW),g=L)}function et(L){L!==Yd?(Z(n.CULL_FACE),L!==S&&(L===xh?n.cullFace(n.BACK):L===Zd?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):at(n.CULL_FACE),S=L}function Rt(L){L!==T&&(A&&n.lineWidth(L),T=L)}function $t(L,Q,E){L?(Z(n.POLYGON_OFFSET_FILL),(C!==Q||N!==E)&&(n.polygonOffset(Q,E),C=Q,N=E)):at(n.POLYGON_OFFSET_FILL)}function Ut(L){L?Z(n.SCISSOR_TEST):at(n.SCISSOR_TEST)}function B(L){L===void 0&&(L=n.TEXTURE0+q-1),rt!==L&&(n.activeTexture(L),rt=L)}function k(L,Q,E){E===void 0&&(rt===null?E=n.TEXTURE0+q-1:E=rt);let F=ot[E];F===void 0&&(F={type:void 0,texture:void 0},ot[E]=F),(F.type!==L||F.texture!==Q)&&(rt!==E&&(n.activeTexture(E),rt=E),n.bindTexture(L,Q||$[L]),F.type=L,F.texture=Q)}function pt(){let L=ot[rt];L!==void 0&&L.type!==void 0&&(n.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function st(){try{n.compressedTexImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function it(){try{n.compressedTexImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function nt(){try{n.texSubImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function _t(){try{n.texSubImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ht(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function It(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Pt(){try{n.texStorage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function bt(){try{n.texStorage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Dt(){try{n.texImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function qt(){try{n.texImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Yt(L){K.equals(L)===!1&&(n.scissor(L.x,L.y,L.z,L.w),K.copy(L))}function Lt(L){Y.equals(L)===!1&&(n.viewport(L.x,L.y,L.z,L.w),Y.copy(L))}function ne(L,Q){let E=h.get(Q);E===void 0&&(E=new WeakMap,h.set(Q,E));let F=E.get(L);F===void 0&&(F=n.getUniformBlockIndex(Q,L.name),E.set(L,F))}function Zt(L,Q){let F=h.get(Q).get(L);l.get(Q)!==F&&(n.uniformBlockBinding(Q,F,L.__bindingPointIndex),l.set(Q,F))}function P(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},rt=null,ot={},m={},d=new WeakMap,c=[],p=null,M=!1,x=null,f=null,b=null,v=null,_=null,U=null,I=null,w=new Qt(0,0,0),R=0,y=!1,g=null,S=null,T=null,C=null,N=null,K.set(0,0,n.canvas.width,n.canvas.height),Y.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:Z,disable:at,bindFramebuffer:xt,drawBuffers:Tt,useProgram:At,setBlending:W,setMaterial:Et,setFlipSided:Mt,setCullFace:et,setLineWidth:Rt,setPolygonOffset:$t,setScissorTest:Ut,activeTexture:B,bindTexture:k,unbindTexture:pt,compressedTexImage2D:st,compressedTexImage3D:it,texImage2D:Dt,texImage3D:qt,updateUBOMapping:ne,uniformBlockBinding:Zt,texStorage2D:Pt,texStorage3D:bt,texSubImage2D:nt,texSubImage3D:_t,compressedTexSubImage2D:ht,compressedTexSubImage3D:It,scissor:Yt,viewport:Lt,reset:P}}function gu(n,t,e,i){let s=Ox(i);switch(e){case Fu:return n*t;case zu:return n*t;case Bu:return n*t*2;case zc:return n*t/s.components*s.byteLength;case Bc:return n*t/s.components*s.byteLength;case Hu:return n*t*2/s.components*s.byteLength;case Hc:return n*t*2/s.components*s.byteLength;case Ou:return n*t*3/s.components*s.byteLength;case _n:return n*t*4/s.components*s.byteLength;case $c:return n*t*4/s.components*s.byteLength;case To:case Ao:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Ro:case Co:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case El:case Al:return Math.max(n,16)*Math.max(t,8)/4;case wl:case Tl:return Math.max(n,8)*Math.max(t,8)/2;case Rl:case Cl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Il:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Pl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Ll:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case Dl:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case kl:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case Ul:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case Nl:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case Fl:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case Ol:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case zl:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case Bl:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case Hl:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case $l:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case Vl:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case Gl:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case Io:case Wl:case Xl:return Math.ceil(n/4)*Math.ceil(t/4)*16;case $u:case ql:return Math.ceil(n/4)*Math.ceil(t/4)*8;case Yl:case Zl:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Ox(n){switch(n){case ri:case ku:return{byteLength:1,components:1};case xr:case Uu:case Pr:return{byteLength:2,components:1};case Fc:case Oc:return{byteLength:2,components:4};case qi:case Nc:case $n:return{byteLength:4,components:1};case Nu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function zx(n,t,e,i,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new Ct,u=new WeakMap,m,d=new WeakMap,c=!1;try{c=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(B,k){return c?new OffscreenCanvas(B,k):Do("canvas")}function M(B,k,pt){let st=1,it=Ut(B);if((it.width>pt||it.height>pt)&&(st=pt/Math.max(it.width,it.height)),st<1)if(typeof HTMLImageElement<"u"&&B instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&B instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&B instanceof ImageBitmap||typeof VideoFrame<"u"&&B instanceof VideoFrame){let nt=Math.floor(st*it.width),_t=Math.floor(st*it.height);m===void 0&&(m=p(nt,_t));let ht=k?p(nt,_t):m;return ht.width=nt,ht.height=_t,ht.getContext("2d").drawImage(B,0,0,nt,_t),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+it.width+"x"+it.height+") to ("+nt+"x"+_t+")."),ht}else return"data"in B&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+it.width+"x"+it.height+")."),B;return B}function x(B){return B.generateMipmaps}function f(B){n.generateMipmap(B)}function b(B){return B.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:B.isWebGL3DRenderTarget?n.TEXTURE_3D:B.isWebGLArrayRenderTarget||B.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function v(B,k,pt,st,it=!1){if(B!==null){if(n[B]!==void 0)return n[B];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+B+"'")}let nt=k;if(k===n.RED&&(pt===n.FLOAT&&(nt=n.R32F),pt===n.HALF_FLOAT&&(nt=n.R16F),pt===n.UNSIGNED_BYTE&&(nt=n.R8)),k===n.RED_INTEGER&&(pt===n.UNSIGNED_BYTE&&(nt=n.R8UI),pt===n.UNSIGNED_SHORT&&(nt=n.R16UI),pt===n.UNSIGNED_INT&&(nt=n.R32UI),pt===n.BYTE&&(nt=n.R8I),pt===n.SHORT&&(nt=n.R16I),pt===n.INT&&(nt=n.R32I)),k===n.RG&&(pt===n.FLOAT&&(nt=n.RG32F),pt===n.HALF_FLOAT&&(nt=n.RG16F),pt===n.UNSIGNED_BYTE&&(nt=n.RG8)),k===n.RG_INTEGER&&(pt===n.UNSIGNED_BYTE&&(nt=n.RG8UI),pt===n.UNSIGNED_SHORT&&(nt=n.RG16UI),pt===n.UNSIGNED_INT&&(nt=n.RG32UI),pt===n.BYTE&&(nt=n.RG8I),pt===n.SHORT&&(nt=n.RG16I),pt===n.INT&&(nt=n.RG32I)),k===n.RGB_INTEGER&&(pt===n.UNSIGNED_BYTE&&(nt=n.RGB8UI),pt===n.UNSIGNED_SHORT&&(nt=n.RGB16UI),pt===n.UNSIGNED_INT&&(nt=n.RGB32UI),pt===n.BYTE&&(nt=n.RGB8I),pt===n.SHORT&&(nt=n.RGB16I),pt===n.INT&&(nt=n.RGB32I)),k===n.RGBA_INTEGER&&(pt===n.UNSIGNED_BYTE&&(nt=n.RGBA8UI),pt===n.UNSIGNED_SHORT&&(nt=n.RGBA16UI),pt===n.UNSIGNED_INT&&(nt=n.RGBA32UI),pt===n.BYTE&&(nt=n.RGBA8I),pt===n.SHORT&&(nt=n.RGBA16I),pt===n.INT&&(nt=n.RGBA32I)),k===n.RGB&&pt===n.UNSIGNED_INT_5_9_9_9_REV&&(nt=n.RGB9_E5),k===n.RGBA){let _t=it?pa:pe.getTransfer(st);pt===n.FLOAT&&(nt=n.RGBA32F),pt===n.HALF_FLOAT&&(nt=n.RGBA16F),pt===n.UNSIGNED_BYTE&&(nt=_t===be?n.SRGB8_ALPHA8:n.RGBA8),pt===n.UNSIGNED_SHORT_4_4_4_4&&(nt=n.RGBA4),pt===n.UNSIGNED_SHORT_5_5_5_1&&(nt=n.RGB5_A1)}return(nt===n.R16F||nt===n.R32F||nt===n.RG16F||nt===n.RG32F||nt===n.RGBA16F||nt===n.RGBA32F)&&t.get("EXT_color_buffer_float"),nt}function _(B,k){let pt;return B?k===null||k===qi||k===zs?pt=n.DEPTH24_STENCIL8:k===$n?pt=n.DEPTH32F_STENCIL8:k===xr&&(pt=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):k===null||k===qi||k===zs?pt=n.DEPTH_COMPONENT24:k===$n?pt=n.DEPTH_COMPONENT32F:k===xr&&(pt=n.DEPTH_COMPONENT16),pt}function U(B,k){return x(B)===!0||B.isFramebufferTexture&&B.minFilter!==ln&&B.minFilter!==Hn?Math.log2(Math.max(k.width,k.height))+1:B.mipmaps!==void 0&&B.mipmaps.length>0?B.mipmaps.length:B.isCompressedTexture&&Array.isArray(B.image)?k.mipmaps.length:1}function I(B){let k=B.target;k.removeEventListener("dispose",I),R(k),k.isVideoTexture&&u.delete(k)}function w(B){let k=B.target;k.removeEventListener("dispose",w),g(k)}function R(B){let k=i.get(B);if(k.__webglInit===void 0)return;let pt=B.source,st=d.get(pt);if(st){let it=st[k.__cacheKey];it.usedTimes--,it.usedTimes===0&&y(B),Object.keys(st).length===0&&d.delete(pt)}i.remove(B)}function y(B){let k=i.get(B);n.deleteTexture(k.__webglTexture);let pt=B.source,st=d.get(pt);delete st[k.__cacheKey],o.memory.textures--}function g(B){let k=i.get(B);if(B.depthTexture&&(B.depthTexture.dispose(),i.remove(B.depthTexture)),B.isWebGLCubeRenderTarget)for(let st=0;st<6;st++){if(Array.isArray(k.__webglFramebuffer[st]))for(let it=0;it<k.__webglFramebuffer[st].length;it++)n.deleteFramebuffer(k.__webglFramebuffer[st][it]);else n.deleteFramebuffer(k.__webglFramebuffer[st]);k.__webglDepthbuffer&&n.deleteRenderbuffer(k.__webglDepthbuffer[st])}else{if(Array.isArray(k.__webglFramebuffer))for(let st=0;st<k.__webglFramebuffer.length;st++)n.deleteFramebuffer(k.__webglFramebuffer[st]);else n.deleteFramebuffer(k.__webglFramebuffer);if(k.__webglDepthbuffer&&n.deleteRenderbuffer(k.__webglDepthbuffer),k.__webglMultisampledFramebuffer&&n.deleteFramebuffer(k.__webglMultisampledFramebuffer),k.__webglColorRenderbuffer)for(let st=0;st<k.__webglColorRenderbuffer.length;st++)k.__webglColorRenderbuffer[st]&&n.deleteRenderbuffer(k.__webglColorRenderbuffer[st]);k.__webglDepthRenderbuffer&&n.deleteRenderbuffer(k.__webglDepthRenderbuffer)}let pt=B.textures;for(let st=0,it=pt.length;st<it;st++){let nt=i.get(pt[st]);nt.__webglTexture&&(n.deleteTexture(nt.__webglTexture),o.memory.textures--),i.remove(pt[st])}i.remove(B)}let S=0;function T(){S=0}function C(){let B=S;return B>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+B+" texture units while this GPU supports only "+s.maxTextures),S+=1,B}function N(B){let k=[];return k.push(B.wrapS),k.push(B.wrapT),k.push(B.wrapR||0),k.push(B.magFilter),k.push(B.minFilter),k.push(B.anisotropy),k.push(B.internalFormat),k.push(B.format),k.push(B.type),k.push(B.generateMipmaps),k.push(B.premultiplyAlpha),k.push(B.flipY),k.push(B.unpackAlignment),k.push(B.colorSpace),k.join()}function q(B,k){let pt=i.get(B);if(B.isVideoTexture&&Rt(B),B.isRenderTargetTexture===!1&&B.version>0&&pt.__version!==B.version){let st=B.image;if(st===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(st.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(pt,B,k);return}}e.bindTexture(n.TEXTURE_2D,pt.__webglTexture,n.TEXTURE0+k)}function A(B,k){let pt=i.get(B);if(B.version>0&&pt.__version!==B.version){Y(pt,B,k);return}e.bindTexture(n.TEXTURE_2D_ARRAY,pt.__webglTexture,n.TEXTURE0+k)}function H(B,k){let pt=i.get(B);if(B.version>0&&pt.__version!==B.version){Y(pt,B,k);return}e.bindTexture(n.TEXTURE_3D,pt.__webglTexture,n.TEXTURE0+k)}function V(B,k){let pt=i.get(B);if(B.version>0&&pt.__version!==B.version){X(pt,B,k);return}e.bindTexture(n.TEXTURE_CUBE_MAP,pt.__webglTexture,n.TEXTURE0+k)}let rt={[Xi]:n.REPEAT,[Gi]:n.CLAMP_TO_EDGE,[Sl]:n.MIRRORED_REPEAT},ot={[ln]:n.NEAREST,[wf]:n.NEAREST_MIPMAP_NEAREST,[Yr]:n.NEAREST_MIPMAP_LINEAR,[Hn]:n.LINEAR,[La]:n.LINEAR_MIPMAP_NEAREST,[Wi]:n.LINEAR_MIPMAP_LINEAR},D={[Rf]:n.NEVER,[kf]:n.ALWAYS,[Cf]:n.LESS,[Gu]:n.LEQUAL,[If]:n.EQUAL,[Df]:n.GEQUAL,[Pf]:n.GREATER,[Lf]:n.NOTEQUAL};function St(B,k){if(k.type===$n&&t.has("OES_texture_float_linear")===!1&&(k.magFilter===Hn||k.magFilter===La||k.magFilter===Yr||k.magFilter===Wi||k.minFilter===Hn||k.minFilter===La||k.minFilter===Yr||k.minFilter===Wi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(B,n.TEXTURE_WRAP_S,rt[k.wrapS]),n.texParameteri(B,n.TEXTURE_WRAP_T,rt[k.wrapT]),(B===n.TEXTURE_3D||B===n.TEXTURE_2D_ARRAY)&&n.texParameteri(B,n.TEXTURE_WRAP_R,rt[k.wrapR]),n.texParameteri(B,n.TEXTURE_MAG_FILTER,ot[k.magFilter]),n.texParameteri(B,n.TEXTURE_MIN_FILTER,ot[k.minFilter]),k.compareFunction&&(n.texParameteri(B,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(B,n.TEXTURE_COMPARE_FUNC,D[k.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(k.magFilter===ln||k.minFilter!==Yr&&k.minFilter!==Wi||k.type===$n&&t.has("OES_texture_float_linear")===!1)return;if(k.anisotropy>1||i.get(k).__currentAnisotropy){let pt=t.get("EXT_texture_filter_anisotropic");n.texParameterf(B,pt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(k.anisotropy,s.getMaxAnisotropy())),i.get(k).__currentAnisotropy=k.anisotropy}}}function K(B,k){let pt=!1;B.__webglInit===void 0&&(B.__webglInit=!0,k.addEventListener("dispose",I));let st=k.source,it=d.get(st);it===void 0&&(it={},d.set(st,it));let nt=N(k);if(nt!==B.__cacheKey){it[nt]===void 0&&(it[nt]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,pt=!0),it[nt].usedTimes++;let _t=it[B.__cacheKey];_t!==void 0&&(it[B.__cacheKey].usedTimes--,_t.usedTimes===0&&y(k)),B.__cacheKey=nt,B.__webglTexture=it[nt].texture}return pt}function Y(B,k,pt){let st=n.TEXTURE_2D;(k.isDataArrayTexture||k.isCompressedArrayTexture)&&(st=n.TEXTURE_2D_ARRAY),k.isData3DTexture&&(st=n.TEXTURE_3D);let it=K(B,k),nt=k.source;e.bindTexture(st,B.__webglTexture,n.TEXTURE0+pt);let _t=i.get(nt);if(nt.version!==_t.__version||it===!0){e.activeTexture(n.TEXTURE0+pt);let ht=pe.getPrimaries(pe.workingColorSpace),It=k.colorSpace===Ei?null:pe.getPrimaries(k.colorSpace),Pt=k.colorSpace===Ei||ht===It?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,k.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,k.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pt);let bt=M(k.image,!1,s.maxTextureSize);bt=$t(k,bt);let Dt=r.convert(k.format,k.colorSpace),qt=r.convert(k.type),Yt=v(k.internalFormat,Dt,qt,k.colorSpace,k.isVideoTexture);St(st,k);let Lt,ne=k.mipmaps,Zt=k.isVideoTexture!==!0,P=_t.__version===void 0||it===!0,L=nt.dataReady,Q=U(k,bt);if(k.isDepthTexture)Yt=_(k.format===Bs,k.type),P&&(Zt?e.texStorage2D(n.TEXTURE_2D,1,Yt,bt.width,bt.height):e.texImage2D(n.TEXTURE_2D,0,Yt,bt.width,bt.height,0,Dt,qt,null));else if(k.isDataTexture)if(ne.length>0){Zt&&P&&e.texStorage2D(n.TEXTURE_2D,Q,Yt,ne[0].width,ne[0].height);for(let E=0,F=ne.length;E<F;E++)Lt=ne[E],Zt?L&&e.texSubImage2D(n.TEXTURE_2D,E,0,0,Lt.width,Lt.height,Dt,qt,Lt.data):e.texImage2D(n.TEXTURE_2D,E,Yt,Lt.width,Lt.height,0,Dt,qt,Lt.data);k.generateMipmaps=!1}else Zt?(P&&e.texStorage2D(n.TEXTURE_2D,Q,Yt,bt.width,bt.height),L&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,bt.width,bt.height,Dt,qt,bt.data)):e.texImage2D(n.TEXTURE_2D,0,Yt,bt.width,bt.height,0,Dt,qt,bt.data);else if(k.isCompressedTexture)if(k.isCompressedArrayTexture){Zt&&P&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Q,Yt,ne[0].width,ne[0].height,bt.depth);for(let E=0,F=ne.length;E<F;E++)if(Lt=ne[E],k.format!==_n)if(Dt!==null)if(Zt){if(L)if(k.layerUpdates.size>0){let z=gu(Lt.width,Lt.height,k.format,k.type);for(let j of k.layerUpdates){let ct=Lt.data.subarray(j*z/Lt.data.BYTES_PER_ELEMENT,(j+1)*z/Lt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,E,0,0,j,Lt.width,Lt.height,1,Dt,ct)}k.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,E,0,0,0,Lt.width,Lt.height,bt.depth,Dt,Lt.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,E,Yt,Lt.width,Lt.height,bt.depth,0,Lt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Zt?L&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,E,0,0,0,Lt.width,Lt.height,bt.depth,Dt,qt,Lt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,E,Yt,Lt.width,Lt.height,bt.depth,0,Dt,qt,Lt.data)}else{Zt&&P&&e.texStorage2D(n.TEXTURE_2D,Q,Yt,ne[0].width,ne[0].height);for(let E=0,F=ne.length;E<F;E++)Lt=ne[E],k.format!==_n?Dt!==null?Zt?L&&e.compressedTexSubImage2D(n.TEXTURE_2D,E,0,0,Lt.width,Lt.height,Dt,Lt.data):e.compressedTexImage2D(n.TEXTURE_2D,E,Yt,Lt.width,Lt.height,0,Lt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Zt?L&&e.texSubImage2D(n.TEXTURE_2D,E,0,0,Lt.width,Lt.height,Dt,qt,Lt.data):e.texImage2D(n.TEXTURE_2D,E,Yt,Lt.width,Lt.height,0,Dt,qt,Lt.data)}else if(k.isDataArrayTexture)if(Zt){if(P&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Q,Yt,bt.width,bt.height,bt.depth),L)if(k.layerUpdates.size>0){let E=gu(bt.width,bt.height,k.format,k.type);for(let F of k.layerUpdates){let z=bt.data.subarray(F*E/bt.data.BYTES_PER_ELEMENT,(F+1)*E/bt.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,F,bt.width,bt.height,1,Dt,qt,z)}k.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,bt.width,bt.height,bt.depth,Dt,qt,bt.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Yt,bt.width,bt.height,bt.depth,0,Dt,qt,bt.data);else if(k.isData3DTexture)Zt?(P&&e.texStorage3D(n.TEXTURE_3D,Q,Yt,bt.width,bt.height,bt.depth),L&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,bt.width,bt.height,bt.depth,Dt,qt,bt.data)):e.texImage3D(n.TEXTURE_3D,0,Yt,bt.width,bt.height,bt.depth,0,Dt,qt,bt.data);else if(k.isFramebufferTexture){if(P)if(Zt)e.texStorage2D(n.TEXTURE_2D,Q,Yt,bt.width,bt.height);else{let E=bt.width,F=bt.height;for(let z=0;z<Q;z++)e.texImage2D(n.TEXTURE_2D,z,Yt,E,F,0,Dt,qt,null),E>>=1,F>>=1}}else if(ne.length>0){if(Zt&&P){let E=Ut(ne[0]);e.texStorage2D(n.TEXTURE_2D,Q,Yt,E.width,E.height)}for(let E=0,F=ne.length;E<F;E++)Lt=ne[E],Zt?L&&e.texSubImage2D(n.TEXTURE_2D,E,0,0,Dt,qt,Lt):e.texImage2D(n.TEXTURE_2D,E,Yt,Dt,qt,Lt);k.generateMipmaps=!1}else if(Zt){if(P){let E=Ut(bt);e.texStorage2D(n.TEXTURE_2D,Q,Yt,E.width,E.height)}L&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,Dt,qt,bt)}else e.texImage2D(n.TEXTURE_2D,0,Yt,Dt,qt,bt);x(k)&&f(st),_t.__version=nt.version,k.onUpdate&&k.onUpdate(k)}B.__version=k.version}function X(B,k,pt){if(k.image.length!==6)return;let st=K(B,k),it=k.source;e.bindTexture(n.TEXTURE_CUBE_MAP,B.__webglTexture,n.TEXTURE0+pt);let nt=i.get(it);if(it.version!==nt.__version||st===!0){e.activeTexture(n.TEXTURE0+pt);let _t=pe.getPrimaries(pe.workingColorSpace),ht=k.colorSpace===Ei?null:pe.getPrimaries(k.colorSpace),It=k.colorSpace===Ei||_t===ht?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,k.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,k.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,It);let Pt=k.isCompressedTexture||k.image[0].isCompressedTexture,bt=k.image[0]&&k.image[0].isDataTexture,Dt=[];for(let F=0;F<6;F++)!Pt&&!bt?Dt[F]=M(k.image[F],!0,s.maxCubemapSize):Dt[F]=bt?k.image[F].image:k.image[F],Dt[F]=$t(k,Dt[F]);let qt=Dt[0],Yt=r.convert(k.format,k.colorSpace),Lt=r.convert(k.type),ne=v(k.internalFormat,Yt,Lt,k.colorSpace),Zt=k.isVideoTexture!==!0,P=nt.__version===void 0||st===!0,L=it.dataReady,Q=U(k,qt);St(n.TEXTURE_CUBE_MAP,k);let E;if(Pt){Zt&&P&&e.texStorage2D(n.TEXTURE_CUBE_MAP,Q,ne,qt.width,qt.height);for(let F=0;F<6;F++){E=Dt[F].mipmaps;for(let z=0;z<E.length;z++){let j=E[z];k.format!==_n?Yt!==null?Zt?L&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+F,z,0,0,j.width,j.height,Yt,j.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+F,z,ne,j.width,j.height,0,j.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Zt?L&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+F,z,0,0,j.width,j.height,Yt,Lt,j.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+F,z,ne,j.width,j.height,0,Yt,Lt,j.data)}}}else{if(E=k.mipmaps,Zt&&P){E.length>0&&Q++;let F=Ut(Dt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,Q,ne,F.width,F.height)}for(let F=0;F<6;F++)if(bt){Zt?L&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+F,0,0,0,Dt[F].width,Dt[F].height,Yt,Lt,Dt[F].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+F,0,ne,Dt[F].width,Dt[F].height,0,Yt,Lt,Dt[F].data);for(let z=0;z<E.length;z++){let ct=E[z].image[F].image;Zt?L&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+F,z+1,0,0,ct.width,ct.height,Yt,Lt,ct.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+F,z+1,ne,ct.width,ct.height,0,Yt,Lt,ct.data)}}else{Zt?L&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+F,0,0,0,Yt,Lt,Dt[F]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+F,0,ne,Yt,Lt,Dt[F]);for(let z=0;z<E.length;z++){let j=E[z];Zt?L&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+F,z+1,0,0,Yt,Lt,j.image[F]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+F,z+1,ne,Yt,Lt,j.image[F])}}}x(k)&&f(n.TEXTURE_CUBE_MAP),nt.__version=it.version,k.onUpdate&&k.onUpdate(k)}B.__version=k.version}function $(B,k,pt,st,it,nt){let _t=r.convert(pt.format,pt.colorSpace),ht=r.convert(pt.type),It=v(pt.internalFormat,_t,ht,pt.colorSpace),Pt=i.get(k),bt=i.get(pt);if(bt.__renderTarget=k,!Pt.__hasExternalTextures){let Dt=Math.max(1,k.width>>nt),qt=Math.max(1,k.height>>nt);it===n.TEXTURE_3D||it===n.TEXTURE_2D_ARRAY?e.texImage3D(it,nt,It,Dt,qt,k.depth,0,_t,ht,null):e.texImage2D(it,nt,It,Dt,qt,0,_t,ht,null)}e.bindFramebuffer(n.FRAMEBUFFER,B),et(k)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,st,it,bt.__webglTexture,0,Mt(k)):(it===n.TEXTURE_2D||it>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&it<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,st,it,bt.__webglTexture,nt),e.bindFramebuffer(n.FRAMEBUFFER,null)}function Z(B,k,pt){if(n.bindRenderbuffer(n.RENDERBUFFER,B),k.depthBuffer){let st=k.depthTexture,it=st&&st.isDepthTexture?st.type:null,nt=_(k.stencilBuffer,it),_t=k.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ht=Mt(k);et(k)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ht,nt,k.width,k.height):pt?n.renderbufferStorageMultisample(n.RENDERBUFFER,ht,nt,k.width,k.height):n.renderbufferStorage(n.RENDERBUFFER,nt,k.width,k.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,_t,n.RENDERBUFFER,B)}else{let st=k.textures;for(let it=0;it<st.length;it++){let nt=st[it],_t=r.convert(nt.format,nt.colorSpace),ht=r.convert(nt.type),It=v(nt.internalFormat,_t,ht,nt.colorSpace),Pt=Mt(k);pt&&et(k)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Pt,It,k.width,k.height):et(k)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Pt,It,k.width,k.height):n.renderbufferStorage(n.RENDERBUFFER,It,k.width,k.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function at(B,k){if(k&&k.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,B),!(k.depthTexture&&k.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let st=i.get(k.depthTexture);st.__renderTarget=k,(!st.__webglTexture||k.depthTexture.image.width!==k.width||k.depthTexture.image.height!==k.height)&&(k.depthTexture.image.width=k.width,k.depthTexture.image.height=k.height,k.depthTexture.needsUpdate=!0),q(k.depthTexture,0);let it=st.__webglTexture,nt=Mt(k);if(k.depthTexture.format===Ds)et(k)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,it,0,nt):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,it,0);else if(k.depthTexture.format===Bs)et(k)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,it,0,nt):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,it,0);else throw new Error("Unknown depthTexture format")}function xt(B){let k=i.get(B),pt=B.isWebGLCubeRenderTarget===!0;if(k.__boundDepthTexture!==B.depthTexture){let st=B.depthTexture;if(k.__depthDisposeCallback&&k.__depthDisposeCallback(),st){let it=()=>{delete k.__boundDepthTexture,delete k.__depthDisposeCallback,st.removeEventListener("dispose",it)};st.addEventListener("dispose",it),k.__depthDisposeCallback=it}k.__boundDepthTexture=st}if(B.depthTexture&&!k.__autoAllocateDepthBuffer){if(pt)throw new Error("target.depthTexture not supported in Cube render targets");at(k.__webglFramebuffer,B)}else if(pt){k.__webglDepthbuffer=[];for(let st=0;st<6;st++)if(e.bindFramebuffer(n.FRAMEBUFFER,k.__webglFramebuffer[st]),k.__webglDepthbuffer[st]===void 0)k.__webglDepthbuffer[st]=n.createRenderbuffer(),Z(k.__webglDepthbuffer[st],B,!1);else{let it=B.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,nt=k.__webglDepthbuffer[st];n.bindRenderbuffer(n.RENDERBUFFER,nt),n.framebufferRenderbuffer(n.FRAMEBUFFER,it,n.RENDERBUFFER,nt)}}else if(e.bindFramebuffer(n.FRAMEBUFFER,k.__webglFramebuffer),k.__webglDepthbuffer===void 0)k.__webglDepthbuffer=n.createRenderbuffer(),Z(k.__webglDepthbuffer,B,!1);else{let st=B.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,it=k.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,it),n.framebufferRenderbuffer(n.FRAMEBUFFER,st,n.RENDERBUFFER,it)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function Tt(B,k,pt){let st=i.get(B);k!==void 0&&$(st.__webglFramebuffer,B,B.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),pt!==void 0&&xt(B)}function At(B){let k=B.texture,pt=i.get(B),st=i.get(k);B.addEventListener("dispose",w);let it=B.textures,nt=B.isWebGLCubeRenderTarget===!0,_t=it.length>1;if(_t||(st.__webglTexture===void 0&&(st.__webglTexture=n.createTexture()),st.__version=k.version,o.memory.textures++),nt){pt.__webglFramebuffer=[];for(let ht=0;ht<6;ht++)if(k.mipmaps&&k.mipmaps.length>0){pt.__webglFramebuffer[ht]=[];for(let It=0;It<k.mipmaps.length;It++)pt.__webglFramebuffer[ht][It]=n.createFramebuffer()}else pt.__webglFramebuffer[ht]=n.createFramebuffer()}else{if(k.mipmaps&&k.mipmaps.length>0){pt.__webglFramebuffer=[];for(let ht=0;ht<k.mipmaps.length;ht++)pt.__webglFramebuffer[ht]=n.createFramebuffer()}else pt.__webglFramebuffer=n.createFramebuffer();if(_t)for(let ht=0,It=it.length;ht<It;ht++){let Pt=i.get(it[ht]);Pt.__webglTexture===void 0&&(Pt.__webglTexture=n.createTexture(),o.memory.textures++)}if(B.samples>0&&et(B)===!1){pt.__webglMultisampledFramebuffer=n.createFramebuffer(),pt.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,pt.__webglMultisampledFramebuffer);for(let ht=0;ht<it.length;ht++){let It=it[ht];pt.__webglColorRenderbuffer[ht]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,pt.__webglColorRenderbuffer[ht]);let Pt=r.convert(It.format,It.colorSpace),bt=r.convert(It.type),Dt=v(It.internalFormat,Pt,bt,It.colorSpace,B.isXRRenderTarget===!0),qt=Mt(B);n.renderbufferStorageMultisample(n.RENDERBUFFER,qt,Dt,B.width,B.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ht,n.RENDERBUFFER,pt.__webglColorRenderbuffer[ht])}n.bindRenderbuffer(n.RENDERBUFFER,null),B.depthBuffer&&(pt.__webglDepthRenderbuffer=n.createRenderbuffer(),Z(pt.__webglDepthRenderbuffer,B,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(nt){e.bindTexture(n.TEXTURE_CUBE_MAP,st.__webglTexture),St(n.TEXTURE_CUBE_MAP,k);for(let ht=0;ht<6;ht++)if(k.mipmaps&&k.mipmaps.length>0)for(let It=0;It<k.mipmaps.length;It++)$(pt.__webglFramebuffer[ht][It],B,k,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ht,It);else $(pt.__webglFramebuffer[ht],B,k,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0);x(k)&&f(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(_t){for(let ht=0,It=it.length;ht<It;ht++){let Pt=it[ht],bt=i.get(Pt);e.bindTexture(n.TEXTURE_2D,bt.__webglTexture),St(n.TEXTURE_2D,Pt),$(pt.__webglFramebuffer,B,Pt,n.COLOR_ATTACHMENT0+ht,n.TEXTURE_2D,0),x(Pt)&&f(n.TEXTURE_2D)}e.unbindTexture()}else{let ht=n.TEXTURE_2D;if((B.isWebGL3DRenderTarget||B.isWebGLArrayRenderTarget)&&(ht=B.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(ht,st.__webglTexture),St(ht,k),k.mipmaps&&k.mipmaps.length>0)for(let It=0;It<k.mipmaps.length;It++)$(pt.__webglFramebuffer[It],B,k,n.COLOR_ATTACHMENT0,ht,It);else $(pt.__webglFramebuffer,B,k,n.COLOR_ATTACHMENT0,ht,0);x(k)&&f(ht),e.unbindTexture()}B.depthBuffer&&xt(B)}function lt(B){let k=B.textures;for(let pt=0,st=k.length;pt<st;pt++){let it=k[pt];if(x(it)){let nt=b(B),_t=i.get(it).__webglTexture;e.bindTexture(nt,_t),f(nt),e.unbindTexture()}}}let mt=[],W=[];function Et(B){if(B.samples>0){if(et(B)===!1){let k=B.textures,pt=B.width,st=B.height,it=n.COLOR_BUFFER_BIT,nt=B.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,_t=i.get(B),ht=k.length>1;if(ht)for(let It=0;It<k.length;It++)e.bindFramebuffer(n.FRAMEBUFFER,_t.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+It,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,_t.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+It,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,_t.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,_t.__webglFramebuffer);for(let It=0;It<k.length;It++){if(B.resolveDepthBuffer&&(B.depthBuffer&&(it|=n.DEPTH_BUFFER_BIT),B.stencilBuffer&&B.resolveStencilBuffer&&(it|=n.STENCIL_BUFFER_BIT)),ht){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,_t.__webglColorRenderbuffer[It]);let Pt=i.get(k[It]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Pt,0)}n.blitFramebuffer(0,0,pt,st,0,0,pt,st,it,n.NEAREST),l===!0&&(mt.length=0,W.length=0,mt.push(n.COLOR_ATTACHMENT0+It),B.depthBuffer&&B.resolveDepthBuffer===!1&&(mt.push(nt),W.push(nt),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,W)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,mt))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ht)for(let It=0;It<k.length;It++){e.bindFramebuffer(n.FRAMEBUFFER,_t.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+It,n.RENDERBUFFER,_t.__webglColorRenderbuffer[It]);let Pt=i.get(k[It]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,_t.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+It,n.TEXTURE_2D,Pt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,_t.__webglMultisampledFramebuffer)}else if(B.depthBuffer&&B.resolveDepthBuffer===!1&&l){let k=B.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[k])}}}function Mt(B){return Math.min(s.maxSamples,B.samples)}function et(B){let k=i.get(B);return B.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&k.__useRenderToTexture!==!1}function Rt(B){let k=o.render.frame;u.get(B)!==k&&(u.set(B,k),B.update())}function $t(B,k){let pt=B.colorSpace,st=B.format,it=B.type;return B.isCompressedTexture===!0||B.isVideoTexture===!0||pt!==Ws&&pt!==Ei&&(pe.getTransfer(pt)===be?(st!==_n||it!==ri)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",pt)),k}function Ut(B){return typeof HTMLImageElement<"u"&&B instanceof HTMLImageElement?(h.width=B.naturalWidth||B.width,h.height=B.naturalHeight||B.height):typeof VideoFrame<"u"&&B instanceof VideoFrame?(h.width=B.displayWidth,h.height=B.displayHeight):(h.width=B.width,h.height=B.height),h}this.allocateTextureUnit=C,this.resetTextureUnits=T,this.setTexture2D=q,this.setTexture2DArray=A,this.setTexture3D=H,this.setTextureCube=V,this.rebindTextures=Tt,this.setupRenderTarget=At,this.updateRenderTargetMipmap=lt,this.updateMultisampleRenderTarget=Et,this.setupDepthRenderbuffer=xt,this.setupFrameBufferTexture=$,this.useMultisampledRTT=et}function Bx(n,t){function e(i,s=Ei){let r,o=pe.getTransfer(s);if(i===ri)return n.UNSIGNED_BYTE;if(i===Fc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Oc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Nu)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===ku)return n.BYTE;if(i===Uu)return n.SHORT;if(i===xr)return n.UNSIGNED_SHORT;if(i===Nc)return n.INT;if(i===qi)return n.UNSIGNED_INT;if(i===$n)return n.FLOAT;if(i===Pr)return n.HALF_FLOAT;if(i===Fu)return n.ALPHA;if(i===Ou)return n.RGB;if(i===_n)return n.RGBA;if(i===zu)return n.LUMINANCE;if(i===Bu)return n.LUMINANCE_ALPHA;if(i===Ds)return n.DEPTH_COMPONENT;if(i===Bs)return n.DEPTH_STENCIL;if(i===zc)return n.RED;if(i===Bc)return n.RED_INTEGER;if(i===Hu)return n.RG;if(i===Hc)return n.RG_INTEGER;if(i===$c)return n.RGBA_INTEGER;if(i===To||i===Ao||i===Ro||i===Co)if(o===be)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===To)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ao)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ro)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Co)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===To)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ao)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ro)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Co)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===wl||i===El||i===Tl||i===Al)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===wl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===El)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Tl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Al)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Rl||i===Cl||i===Il)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Rl||i===Cl)return o===be?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Il)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Pl||i===Ll||i===Dl||i===kl||i===Ul||i===Nl||i===Fl||i===Ol||i===zl||i===Bl||i===Hl||i===$l||i===Vl||i===Gl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Pl)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Ll)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Dl)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===kl)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ul)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Nl)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Fl)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Ol)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===zl)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Bl)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Hl)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===$l)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Vl)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Gl)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Io||i===Wl||i===Xl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===Io)return o===be?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Wl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Xl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===$u||i===ql||i===Yl||i===Zl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===Io)return r.COMPRESSED_RED_RGTC1_EXT;if(i===ql)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Yl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Zl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===zs?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}var uc=class extends an{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},re=class extends Pe{constructor(){super(),this.isGroup=!0,this.type="Group"}},Hx={type:"move"},pr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new re,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new re,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new re,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,h=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(h&&t.hand){o=!0;for(let M of t.hand.values()){let x=e.getJointPose(M,i),f=this._getHandJoint(h,M);x!==null&&(f.matrix.fromArray(x.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=x.radius),f.visible=x!==null}let u=h.joints["index-finger-tip"],m=h.joints["thumb-tip"],d=u.position.distanceTo(m.position),c=.02,p=.005;h.inputState.pinching&&d>c+p?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!h.inputState.pinching&&d<=c-p&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Hx)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),h!==null&&(h.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new re;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},$x=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Vx=`
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

}`,dc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){let s=new pn,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new cn({vertexShader:$x,fragmentShader:Vx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ce(new hn(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},fc=class extends Ii{constructor(t,e){super();let i=this,s=null,r=1,o=null,a="local-floor",l=1,h=null,u=null,m=null,d=null,c=null,p=null,M=new dc,x=e.getContextAttributes(),f=null,b=null,v=[],_=[],U=new Ct,I=null,w=new an;w.viewport=new Ne;let R=new an;R.viewport=new Ne;let y=[w,R],g=new uc,S=null,T=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let X=v[Y];return X===void 0&&(X=new pr,v[Y]=X),X.getTargetRaySpace()},this.getControllerGrip=function(Y){let X=v[Y];return X===void 0&&(X=new pr,v[Y]=X),X.getGripSpace()},this.getHand=function(Y){let X=v[Y];return X===void 0&&(X=new pr,v[Y]=X),X.getHandSpace()};function C(Y){let X=_.indexOf(Y.inputSource);if(X===-1)return;let $=v[X];$!==void 0&&($.update(Y.inputSource,Y.frame,h||o),$.dispatchEvent({type:Y.type,data:Y.inputSource}))}function N(){s.removeEventListener("select",C),s.removeEventListener("selectstart",C),s.removeEventListener("selectend",C),s.removeEventListener("squeeze",C),s.removeEventListener("squeezestart",C),s.removeEventListener("squeezeend",C),s.removeEventListener("end",N),s.removeEventListener("inputsourceschange",q);for(let Y=0;Y<v.length;Y++){let X=_[Y];X!==null&&(_[Y]=null,v[Y].disconnect(X))}S=null,T=null,M.reset(),t.setRenderTarget(f),c=null,d=null,m=null,s=null,b=null,K.stop(),i.isPresenting=!1,t.setPixelRatio(I),t.setSize(U.width,U.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||o},this.setReferenceSpace=function(Y){h=Y},this.getBaseLayer=function(){return d!==null?d:c},this.getBinding=function(){return m},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(Y){if(s=Y,s!==null){if(f=t.getRenderTarget(),s.addEventListener("select",C),s.addEventListener("selectstart",C),s.addEventListener("selectend",C),s.addEventListener("squeeze",C),s.addEventListener("squeezestart",C),s.addEventListener("squeezeend",C),s.addEventListener("end",N),s.addEventListener("inputsourceschange",q),x.xrCompatible!==!0&&await e.makeXRCompatible(),I=t.getPixelRatio(),t.getSize(U),s.renderState.layers===void 0){let X={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};c=new XRWebGLLayer(s,e,X),s.updateRenderState({baseLayer:c}),t.setPixelRatio(1),t.setSize(c.framebufferWidth,c.framebufferHeight,!1),b=new oi(c.framebufferWidth,c.framebufferHeight,{format:_n,type:ri,colorSpace:t.outputColorSpace,stencilBuffer:x.stencil})}else{let X=null,$=null,Z=null;x.depth&&(Z=x.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,X=x.stencil?Bs:Ds,$=x.stencil?zs:qi);let at={colorFormat:e.RGBA8,depthFormat:Z,scaleFactor:r};m=new XRWebGLBinding(s,e),d=m.createProjectionLayer(at),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),b=new oi(d.textureWidth,d.textureHeight,{format:_n,type:ri,depthTexture:new Go(d.textureWidth,d.textureHeight,$,void 0,void 0,void 0,void 0,void 0,void 0,X),stencilBuffer:x.stencil,colorSpace:t.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),h=null,o=await s.requestReferenceSpace(a),K.setContext(s),K.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function q(Y){for(let X=0;X<Y.removed.length;X++){let $=Y.removed[X],Z=_.indexOf($);Z>=0&&(_[Z]=null,v[Z].disconnect($))}for(let X=0;X<Y.added.length;X++){let $=Y.added[X],Z=_.indexOf($);if(Z===-1){for(let xt=0;xt<v.length;xt++)if(xt>=_.length){_.push($),Z=xt;break}else if(_[xt]===null){_[xt]=$,Z=xt;break}if(Z===-1)break}let at=v[Z];at&&at.connect($)}}let A=new G,H=new G;function V(Y,X,$){A.setFromMatrixPosition(X.matrixWorld),H.setFromMatrixPosition($.matrixWorld);let Z=A.distanceTo(H),at=X.projectionMatrix.elements,xt=$.projectionMatrix.elements,Tt=at[14]/(at[10]-1),At=at[14]/(at[10]+1),lt=(at[9]+1)/at[5],mt=(at[9]-1)/at[5],W=(at[8]-1)/at[0],Et=(xt[8]+1)/xt[0],Mt=Tt*W,et=Tt*Et,Rt=Z/(-W+Et),$t=Rt*-W;if(X.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX($t),Y.translateZ(Rt),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),at[10]===-1)Y.projectionMatrix.copy(X.projectionMatrix),Y.projectionMatrixInverse.copy(X.projectionMatrixInverse);else{let Ut=Tt+Rt,B=At+Rt,k=Mt-$t,pt=et+(Z-$t),st=lt*At/B*Ut,it=mt*At/B*Ut;Y.projectionMatrix.makePerspective(k,pt,st,it,Ut,B),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function rt(Y,X){X===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(X.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(s===null)return;let X=Y.near,$=Y.far;M.texture!==null&&(M.depthNear>0&&(X=M.depthNear),M.depthFar>0&&($=M.depthFar)),g.near=R.near=w.near=X,g.far=R.far=w.far=$,(S!==g.near||T!==g.far)&&(s.updateRenderState({depthNear:g.near,depthFar:g.far}),S=g.near,T=g.far),w.layers.mask=Y.layers.mask|2,R.layers.mask=Y.layers.mask|4,g.layers.mask=w.layers.mask|R.layers.mask;let Z=Y.parent,at=g.cameras;rt(g,Z);for(let xt=0;xt<at.length;xt++)rt(at[xt],Z);at.length===2?V(g,w,R):g.projectionMatrix.copy(w.projectionMatrix),ot(Y,g,Z)};function ot(Y,X,$){$===null?Y.matrix.copy(X.matrixWorld):(Y.matrix.copy($.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(X.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(X.projectionMatrix),Y.projectionMatrixInverse.copy(X.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=yr*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return g},this.getFoveation=function(){if(!(d===null&&c===null))return l},this.setFoveation=function(Y){l=Y,d!==null&&(d.fixedFoveation=Y),c!==null&&c.fixedFoveation!==void 0&&(c.fixedFoveation=Y)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(g)};let D=null;function St(Y,X){if(u=X.getViewerPose(h||o),p=X,u!==null){let $=u.views;c!==null&&(t.setRenderTargetFramebuffer(b,c.framebuffer),t.setRenderTarget(b));let Z=!1;$.length!==g.cameras.length&&(g.cameras.length=0,Z=!0);for(let xt=0;xt<$.length;xt++){let Tt=$[xt],At=null;if(c!==null)At=c.getViewport(Tt);else{let mt=m.getViewSubImage(d,Tt);At=mt.viewport,xt===0&&(t.setRenderTargetTextures(b,mt.colorTexture,d.ignoreDepthValues?void 0:mt.depthStencilTexture),t.setRenderTarget(b))}let lt=y[xt];lt===void 0&&(lt=new an,lt.layers.enable(xt),lt.viewport=new Ne,y[xt]=lt),lt.matrix.fromArray(Tt.transform.matrix),lt.matrix.decompose(lt.position,lt.quaternion,lt.scale),lt.projectionMatrix.fromArray(Tt.projectionMatrix),lt.projectionMatrixInverse.copy(lt.projectionMatrix).invert(),lt.viewport.set(At.x,At.y,At.width,At.height),xt===0&&(g.matrix.copy(lt.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale)),Z===!0&&g.cameras.push(lt)}let at=s.enabledFeatures;if(at&&at.includes("depth-sensing")){let xt=m.getDepthInformation($[0]);xt&&xt.isValid&&xt.texture&&M.init(t,xt,s.renderState)}}for(let $=0;$<v.length;$++){let Z=_[$],at=v[$];Z!==null&&at!==void 0&&at.update(Z,X,h||o)}D&&D(Y,X),X.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:X}),p=null}let K=new Zu;K.setAnimationLoop(St),this.setAnimationLoop=function(Y){D=Y},this.dispose=function(){}}},Bi=new Dn,Gx=new ge;function Wx(n,t){function e(x,f){x.matrixAutoUpdate===!0&&x.updateMatrix(),f.value.copy(x.matrix)}function i(x,f){f.color.getRGB(x.fogColor.value,Yu(n)),f.isFog?(x.fogNear.value=f.near,x.fogFar.value=f.far):f.isFogExp2&&(x.fogDensity.value=f.density)}function s(x,f,b,v,_){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(x,f):f.isMeshToonMaterial?(r(x,f),m(x,f)):f.isMeshPhongMaterial?(r(x,f),u(x,f)):f.isMeshStandardMaterial?(r(x,f),d(x,f),f.isMeshPhysicalMaterial&&c(x,f,_)):f.isMeshMatcapMaterial?(r(x,f),p(x,f)):f.isMeshDepthMaterial?r(x,f):f.isMeshDistanceMaterial?(r(x,f),M(x,f)):f.isMeshNormalMaterial?r(x,f):f.isLineBasicMaterial?(o(x,f),f.isLineDashedMaterial&&a(x,f)):f.isPointsMaterial?l(x,f,b,v):f.isSpriteMaterial?h(x,f):f.isShadowMaterial?(x.color.value.copy(f.color),x.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(x,f){x.opacity.value=f.opacity,f.color&&x.diffuse.value.copy(f.color),f.emissive&&x.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(x.map.value=f.map,e(f.map,x.mapTransform)),f.alphaMap&&(x.alphaMap.value=f.alphaMap,e(f.alphaMap,x.alphaMapTransform)),f.bumpMap&&(x.bumpMap.value=f.bumpMap,e(f.bumpMap,x.bumpMapTransform),x.bumpScale.value=f.bumpScale,f.side===Ze&&(x.bumpScale.value*=-1)),f.normalMap&&(x.normalMap.value=f.normalMap,e(f.normalMap,x.normalMapTransform),x.normalScale.value.copy(f.normalScale),f.side===Ze&&x.normalScale.value.negate()),f.displacementMap&&(x.displacementMap.value=f.displacementMap,e(f.displacementMap,x.displacementMapTransform),x.displacementScale.value=f.displacementScale,x.displacementBias.value=f.displacementBias),f.emissiveMap&&(x.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,x.emissiveMapTransform)),f.specularMap&&(x.specularMap.value=f.specularMap,e(f.specularMap,x.specularMapTransform)),f.alphaTest>0&&(x.alphaTest.value=f.alphaTest);let b=t.get(f),v=b.envMap,_=b.envMapRotation;v&&(x.envMap.value=v,Bi.copy(_),Bi.x*=-1,Bi.y*=-1,Bi.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Bi.y*=-1,Bi.z*=-1),x.envMapRotation.value.setFromMatrix4(Gx.makeRotationFromEuler(Bi)),x.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=f.reflectivity,x.ior.value=f.ior,x.refractionRatio.value=f.refractionRatio),f.lightMap&&(x.lightMap.value=f.lightMap,x.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,x.lightMapTransform)),f.aoMap&&(x.aoMap.value=f.aoMap,x.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,x.aoMapTransform))}function o(x,f){x.diffuse.value.copy(f.color),x.opacity.value=f.opacity,f.map&&(x.map.value=f.map,e(f.map,x.mapTransform))}function a(x,f){x.dashSize.value=f.dashSize,x.totalSize.value=f.dashSize+f.gapSize,x.scale.value=f.scale}function l(x,f,b,v){x.diffuse.value.copy(f.color),x.opacity.value=f.opacity,x.size.value=f.size*b,x.scale.value=v*.5,f.map&&(x.map.value=f.map,e(f.map,x.uvTransform)),f.alphaMap&&(x.alphaMap.value=f.alphaMap,e(f.alphaMap,x.alphaMapTransform)),f.alphaTest>0&&(x.alphaTest.value=f.alphaTest)}function h(x,f){x.diffuse.value.copy(f.color),x.opacity.value=f.opacity,x.rotation.value=f.rotation,f.map&&(x.map.value=f.map,e(f.map,x.mapTransform)),f.alphaMap&&(x.alphaMap.value=f.alphaMap,e(f.alphaMap,x.alphaMapTransform)),f.alphaTest>0&&(x.alphaTest.value=f.alphaTest)}function u(x,f){x.specular.value.copy(f.specular),x.shininess.value=Math.max(f.shininess,1e-4)}function m(x,f){f.gradientMap&&(x.gradientMap.value=f.gradientMap)}function d(x,f){x.metalness.value=f.metalness,f.metalnessMap&&(x.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,x.metalnessMapTransform)),x.roughness.value=f.roughness,f.roughnessMap&&(x.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,x.roughnessMapTransform)),f.envMap&&(x.envMapIntensity.value=f.envMapIntensity)}function c(x,f,b){x.ior.value=f.ior,f.sheen>0&&(x.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),x.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(x.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,x.sheenColorMapTransform)),f.sheenRoughnessMap&&(x.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,x.sheenRoughnessMapTransform))),f.clearcoat>0&&(x.clearcoat.value=f.clearcoat,x.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(x.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,x.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(x.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Ze&&x.clearcoatNormalScale.value.negate())),f.dispersion>0&&(x.dispersion.value=f.dispersion),f.iridescence>0&&(x.iridescence.value=f.iridescence,x.iridescenceIOR.value=f.iridescenceIOR,x.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(x.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,x.iridescenceMapTransform)),f.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),f.transmission>0&&(x.transmission.value=f.transmission,x.transmissionSamplerMap.value=b.texture,x.transmissionSamplerSize.value.set(b.width,b.height),f.transmissionMap&&(x.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,x.transmissionMapTransform)),x.thickness.value=f.thickness,f.thicknessMap&&(x.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=f.attenuationDistance,x.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(x.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(x.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=f.specularIntensity,x.specularColor.value.copy(f.specularColor),f.specularColorMap&&(x.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,x.specularColorMapTransform)),f.specularIntensityMap&&(x.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,x.specularIntensityMapTransform))}function p(x,f){f.matcap&&(x.matcap.value=f.matcap)}function M(x,f){let b=t.get(f).light;x.referencePosition.value.setFromMatrixPosition(b.matrixWorld),x.nearDistance.value=b.shadow.camera.near,x.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Xx(n,t,e,i){let s={},r={},o=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,v){let _=v.program;i.uniformBlockBinding(b,_)}function h(b,v){let _=s[b.id];_===void 0&&(p(b),_=u(b),s[b.id]=_,b.addEventListener("dispose",x));let U=v.program;i.updateUBOMapping(b,U);let I=t.render.frame;r[b.id]!==I&&(d(b),r[b.id]=I)}function u(b){let v=m();b.__bindingPointIndex=v;let _=n.createBuffer(),U=b.__size,I=b.usage;return n.bindBuffer(n.UNIFORM_BUFFER,_),n.bufferData(n.UNIFORM_BUFFER,U,I),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,v,_),_}function m(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(b){let v=s[b.id],_=b.uniforms,U=b.__cache;n.bindBuffer(n.UNIFORM_BUFFER,v);for(let I=0,w=_.length;I<w;I++){let R=Array.isArray(_[I])?_[I]:[_[I]];for(let y=0,g=R.length;y<g;y++){let S=R[y];if(c(S,I,y,U)===!0){let T=S.__offset,C=Array.isArray(S.value)?S.value:[S.value],N=0;for(let q=0;q<C.length;q++){let A=C[q],H=M(A);typeof A=="number"||typeof A=="boolean"?(S.__data[0]=A,n.bufferSubData(n.UNIFORM_BUFFER,T+N,S.__data)):A.isMatrix3?(S.__data[0]=A.elements[0],S.__data[1]=A.elements[1],S.__data[2]=A.elements[2],S.__data[3]=0,S.__data[4]=A.elements[3],S.__data[5]=A.elements[4],S.__data[6]=A.elements[5],S.__data[7]=0,S.__data[8]=A.elements[6],S.__data[9]=A.elements[7],S.__data[10]=A.elements[8],S.__data[11]=0):(A.toArray(S.__data,N),N+=H.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,T,S.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function c(b,v,_,U){let I=b.value,w=v+"_"+_;if(U[w]===void 0)return typeof I=="number"||typeof I=="boolean"?U[w]=I:U[w]=I.clone(),!0;{let R=U[w];if(typeof I=="number"||typeof I=="boolean"){if(R!==I)return U[w]=I,!0}else if(R.equals(I)===!1)return R.copy(I),!0}return!1}function p(b){let v=b.uniforms,_=0,U=16;for(let w=0,R=v.length;w<R;w++){let y=Array.isArray(v[w])?v[w]:[v[w]];for(let g=0,S=y.length;g<S;g++){let T=y[g],C=Array.isArray(T.value)?T.value:[T.value];for(let N=0,q=C.length;N<q;N++){let A=C[N],H=M(A),V=_%U,rt=V%H.boundary,ot=V+rt;_+=rt,ot!==0&&U-ot<H.storage&&(_+=U-ot),T.__data=new Float32Array(H.storage/Float32Array.BYTES_PER_ELEMENT),T.__offset=_,_+=H.storage}}}let I=_%U;return I>0&&(_+=U-I),b.__size=_,b.__cache={},this}function M(b){let v={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(v.boundary=4,v.storage=4):b.isVector2?(v.boundary=8,v.storage=8):b.isVector3||b.isColor?(v.boundary=16,v.storage=12):b.isVector4?(v.boundary=16,v.storage=16):b.isMatrix3?(v.boundary=48,v.storage=48):b.isMatrix4?(v.boundary=64,v.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),v}function x(b){let v=b.target;v.removeEventListener("dispose",x);let _=o.indexOf(v.__bindingPointIndex);o.splice(_,1),n.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function f(){for(let b in s)n.deleteBuffer(s[b]);o=[],s={},r={}}return{bind:l,update:h,dispose:f}}var Wo=class{constructor(t={}){let{canvas:e=Kf(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:h=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:m=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let c;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");c=i.getContextAttributes().alpha}else c=o;let p=new Uint32Array(4),M=new Int32Array(4),x=null,f=null,b=[],v=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=qe,this.toneMapping=Vn,this.toneMappingExposure=1;let _=this,U=!1,I=0,w=0,R=null,y=-1,g=null,S=new Ne,T=new Ne,C=null,N=new Qt(0),q=0,A=e.width,H=e.height,V=1,rt=null,ot=null,D=new Ne(0,0,A,H),St=new Ne(0,0,A,H),K=!1,Y=new vr,X=!1,$=!1,Z=new ge,at=new ge,xt=new G,Tt=new Ne,At={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},lt=!1;function mt(){return R===null?V:1}let W=i;function Et(O,ut){return e.getContext(O,ut)}try{let O={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:h,powerPreference:u,failIfMajorPerformanceCaveat:m};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${kc}`),e.addEventListener("webglcontextlost",F,!1),e.addEventListener("webglcontextrestored",z,!1),e.addEventListener("webglcontextcreationerror",j,!1),W===null){let ut="webgl2";if(W=Et(ut,O),W===null)throw Et(ut)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(O){throw console.error("THREE.WebGLRenderer: "+O.message),O}let Mt,et,Rt,$t,Ut,B,k,pt,st,it,nt,_t,ht,It,Pt,bt,Dt,qt,Yt,Lt,ne,Zt,P,L;function Q(){Mt=new lg(W),Mt.init(),Zt=new Bx(W,Mt),et=new ng(W,Mt,t,Zt),Rt=new Fx(W,Mt),et.reverseDepthBuffer&&d&&Rt.buffers.depth.setReversed(!0),$t=new ug(W),Ut=new wx,B=new zx(W,Mt,Rt,Ut,et,Zt,$t),k=new sg(_),pt=new ag(_),st=new yp(W),P=new tg(W,st),it=new cg(W,st,$t,P),nt=new fg(W,it,st,$t),Yt=new dg(W,et,B),bt=new ig(Ut),_t=new Sx(_,k,pt,Mt,et,P,bt),ht=new Wx(_,Ut),It=new Tx,Pt=new Lx(Mt),qt=new Q0(_,k,pt,Rt,nt,c,l),Dt=new Ux(_,nt,et),L=new Xx(W,$t,et,Rt),Lt=new eg(W,Mt,$t),ne=new hg(W,Mt,$t),$t.programs=_t.programs,_.capabilities=et,_.extensions=Mt,_.properties=Ut,_.renderLists=It,_.shadowMap=Dt,_.state=Rt,_.info=$t}Q();let E=new fc(_,W);this.xr=E,this.getContext=function(){return W},this.getContextAttributes=function(){return W.getContextAttributes()},this.forceContextLoss=function(){let O=Mt.get("WEBGL_lose_context");O&&O.loseContext()},this.forceContextRestore=function(){let O=Mt.get("WEBGL_lose_context");O&&O.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(O){O!==void 0&&(V=O,this.setSize(A,H,!1))},this.getSize=function(O){return O.set(A,H)},this.setSize=function(O,ut,yt=!0){if(E.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}A=O,H=ut,e.width=Math.floor(O*V),e.height=Math.floor(ut*V),yt===!0&&(e.style.width=O+"px",e.style.height=ut+"px"),this.setViewport(0,0,O,ut)},this.getDrawingBufferSize=function(O){return O.set(A*V,H*V).floor()},this.setDrawingBufferSize=function(O,ut,yt){A=O,H=ut,V=yt,e.width=Math.floor(O*yt),e.height=Math.floor(ut*yt),this.setViewport(0,0,O,ut)},this.getCurrentViewport=function(O){return O.copy(S)},this.getViewport=function(O){return O.copy(D)},this.setViewport=function(O,ut,yt,vt){O.isVector4?D.set(O.x,O.y,O.z,O.w):D.set(O,ut,yt,vt),Rt.viewport(S.copy(D).multiplyScalar(V).round())},this.getScissor=function(O){return O.copy(St)},this.setScissor=function(O,ut,yt,vt){O.isVector4?St.set(O.x,O.y,O.z,O.w):St.set(O,ut,yt,vt),Rt.scissor(T.copy(St).multiplyScalar(V).round())},this.getScissorTest=function(){return K},this.setScissorTest=function(O){Rt.setScissorTest(K=O)},this.setOpaqueSort=function(O){rt=O},this.setTransparentSort=function(O){ot=O},this.getClearColor=function(O){return O.copy(qt.getClearColor())},this.setClearColor=function(){qt.setClearColor.apply(qt,arguments)},this.getClearAlpha=function(){return qt.getClearAlpha()},this.setClearAlpha=function(){qt.setClearAlpha.apply(qt,arguments)},this.clear=function(O=!0,ut=!0,yt=!0){let vt=0;if(O){let dt=!1;if(R!==null){let kt=R.texture.format;dt=kt===$c||kt===Hc||kt===Bc}if(dt){let kt=R.texture.type,Ht=kt===ri||kt===qi||kt===xr||kt===zs||kt===Fc||kt===Oc,Jt=qt.getClearColor(),Kt=qt.getClearAlpha(),oe=Jt.r,le=Jt.g,jt=Jt.b;Ht?(p[0]=oe,p[1]=le,p[2]=jt,p[3]=Kt,W.clearBufferuiv(W.COLOR,0,p)):(M[0]=oe,M[1]=le,M[2]=jt,M[3]=Kt,W.clearBufferiv(W.COLOR,0,M))}else vt|=W.COLOR_BUFFER_BIT}ut&&(vt|=W.DEPTH_BUFFER_BIT),yt&&(vt|=W.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),W.clear(vt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",F,!1),e.removeEventListener("webglcontextrestored",z,!1),e.removeEventListener("webglcontextcreationerror",j,!1),It.dispose(),Pt.dispose(),Ut.dispose(),k.dispose(),pt.dispose(),nt.dispose(),P.dispose(),L.dispose(),_t.dispose(),E.dispose(),E.removeEventListener("sessionstart",Nt),E.removeEventListener("sessionend",Bt),Wt.stop()};function F(O){O.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),U=!0}function z(){console.log("THREE.WebGLRenderer: Context Restored."),U=!1;let O=$t.autoReset,ut=Dt.enabled,yt=Dt.autoUpdate,vt=Dt.needsUpdate,dt=Dt.type;Q(),$t.autoReset=O,Dt.enabled=ut,Dt.autoUpdate=yt,Dt.needsUpdate=vt,Dt.type=dt}function j(O){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",O.statusMessage)}function ct(O){let ut=O.target;ut.removeEventListener("dispose",ct),J(ut)}function J(O){tt(O),Ut.remove(O)}function tt(O){let ut=Ut.get(O).programs;ut!==void 0&&(ut.forEach(function(yt){_t.releaseProgram(yt)}),O.isShaderMaterial&&_t.releaseShaderCache(O))}this.renderBufferDirect=function(O,ut,yt,vt,dt,kt){ut===null&&(ut=At);let Ht=dt.isMesh&&dt.matrixWorld.determinant()<0,Jt=Nd(O,ut,yt,vt,dt);Rt.setMaterial(vt,Ht);let Kt=yt.index,oe=1;if(vt.wireframe===!0){if(Kt=it.getWireframeAttribute(yt),Kt===void 0)return;oe=2}let le=yt.drawRange,jt=yt.attributes.position,me=le.start*oe,Te=(le.start+le.count)*oe;kt!==null&&(me=Math.max(me,kt.start*oe),Te=Math.min(Te,(kt.start+kt.count)*oe)),Kt!==null?(me=Math.max(me,0),Te=Math.min(Te,Kt.count)):jt!=null&&(me=Math.max(me,0),Te=Math.min(Te,jt.count));let Ae=Te-me;if(Ae<0||Ae===1/0)return;P.setup(dt,vt,Jt,yt,Kt);let dn,ve=Lt;if(Kt!==null&&(dn=st.get(Kt),ve=ne,ve.setIndex(dn)),dt.isMesh)vt.wireframe===!0?(Rt.setLineWidth(vt.wireframeLinewidth*mt()),ve.setMode(W.LINES)):ve.setMode(W.TRIANGLES);else if(dt.isLine){let te=vt.linewidth;te===void 0&&(te=1),Rt.setLineWidth(te*mt()),dt.isLineSegments?ve.setMode(W.LINES):dt.isLineLoop?ve.setMode(W.LINE_LOOP):ve.setMode(W.LINE_STRIP)}else dt.isPoints?ve.setMode(W.POINTS):dt.isSprite&&ve.setMode(W.TRIANGLES);if(dt.isBatchedMesh)if(dt._multiDrawInstances!==null)ve.renderMultiDrawInstances(dt._multiDrawStarts,dt._multiDrawCounts,dt._multiDrawCount,dt._multiDrawInstances);else if(Mt.get("WEBGL_multi_draw"))ve.renderMultiDraw(dt._multiDrawStarts,dt._multiDrawCounts,dt._multiDrawCount);else{let te=dt._multiDrawStarts,Yn=dt._multiDrawCounts,_e=dt._multiDrawCount,Tn=Kt?st.get(Kt).bytesPerElement:1,rs=Ut.get(vt).currentProgram.getUniforms();for(let xn=0;xn<_e;xn++)rs.setValue(W,"_gl_DrawID",xn),ve.render(te[xn]/Tn,Yn[xn])}else if(dt.isInstancedMesh)ve.renderInstances(me,Ae,dt.count);else if(yt.isInstancedBufferGeometry){let te=yt._maxInstanceCount!==void 0?yt._maxInstanceCount:1/0,Yn=Math.min(yt.instanceCount,te);ve.renderInstances(me,Ae,Yn)}else ve.render(me,Ae)};function ft(O,ut,yt){O.transparent===!0&&O.side===Fe&&O.forceSinglePass===!1?(O.side=Ze,O.needsUpdate=!0,Fn(O,ut,yt),O.side=Ci,O.needsUpdate=!0,Fn(O,ut,yt),O.side=Fe):Fn(O,ut,yt)}this.compile=function(O,ut,yt=null){yt===null&&(yt=O),f=Pt.get(yt),f.init(ut),v.push(f),yt.traverseVisible(function(dt){dt.isLight&&dt.layers.test(ut.layers)&&(f.pushLight(dt),dt.castShadow&&f.pushShadow(dt))}),O!==yt&&O.traverseVisible(function(dt){dt.isLight&&dt.layers.test(ut.layers)&&(f.pushLight(dt),dt.castShadow&&f.pushShadow(dt))}),f.setupLights();let vt=new Set;return O.traverse(function(dt){if(!(dt.isMesh||dt.isPoints||dt.isLine||dt.isSprite))return;let kt=dt.material;if(kt)if(Array.isArray(kt))for(let Ht=0;Ht<kt.length;Ht++){let Jt=kt[Ht];ft(Jt,yt,dt),vt.add(Jt)}else ft(kt,yt,dt),vt.add(kt)}),v.pop(),f=null,vt},this.compileAsync=function(O,ut,yt=null){let vt=this.compile(O,ut,yt);return new Promise(dt=>{function kt(){if(vt.forEach(function(Ht){Ut.get(Ht).currentProgram.isReady()&&vt.delete(Ht)}),vt.size===0){dt(O);return}setTimeout(kt,10)}Mt.get("KHR_parallel_shader_compile")!==null?kt():setTimeout(kt,10)})};let wt=null;function Ot(O){wt&&wt(O)}function Nt(){Wt.stop()}function Bt(){Wt.start()}let Wt=new Zu;Wt.setAnimationLoop(Ot),typeof self<"u"&&Wt.setContext(self),this.setAnimationLoop=function(O){wt=O,E.setAnimationLoop(O),O===null?Wt.stop():Wt.start()},E.addEventListener("sessionstart",Nt),E.addEventListener("sessionend",Bt),this.render=function(O,ut){if(ut!==void 0&&ut.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;if(O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),ut.parent===null&&ut.matrixWorldAutoUpdate===!0&&ut.updateMatrixWorld(),E.enabled===!0&&E.isPresenting===!0&&(E.cameraAutoUpdate===!0&&E.updateCamera(ut),ut=E.getCamera()),O.isScene===!0&&O.onBeforeRender(_,O,ut,R),f=Pt.get(O,v.length),f.init(ut),v.push(f),at.multiplyMatrices(ut.projectionMatrix,ut.matrixWorldInverse),Y.setFromProjectionMatrix(at),$=this.localClippingEnabled,X=bt.init(this.clippingPlanes,$),x=It.get(O,b.length),x.init(),b.push(x),E.enabled===!0&&E.isPresenting===!0){let kt=_.xr.getDepthSensingMesh();kt!==null&&ae(kt,ut,-1/0,_.sortObjects)}ae(O,ut,0,_.sortObjects),x.finish(),_.sortObjects===!0&&x.sort(rt,ot),lt=E.enabled===!1||E.isPresenting===!1||E.hasDepthSensing()===!1,lt&&qt.addToRenderList(x,O),this.info.render.frame++,X===!0&&bt.beginShadows();let yt=f.state.shadowsArray;Dt.render(yt,O,ut),X===!0&&bt.endShadows(),this.info.autoReset===!0&&this.info.reset();let vt=x.opaque,dt=x.transmissive;if(f.setupLights(),ut.isArrayCamera){let kt=ut.cameras;if(dt.length>0)for(let Ht=0,Jt=kt.length;Ht<Jt;Ht++){let Kt=kt[Ht];ze(vt,dt,O,Kt)}lt&&qt.render(O);for(let Ht=0,Jt=kt.length;Ht<Jt;Ht++){let Kt=kt[Ht];Ee(x,O,Kt,Kt.viewport)}}else dt.length>0&&ze(vt,dt,O,ut),lt&&qt.render(O),Ee(x,O,ut);R!==null&&(B.updateMultisampleRenderTarget(R),B.updateRenderTargetMipmap(R)),O.isScene===!0&&O.onAfterRender(_,O,ut),P.resetDefaultState(),y=-1,g=null,v.pop(),v.length>0?(f=v[v.length-1],X===!0&&bt.setGlobalState(_.clippingPlanes,f.state.camera)):f=null,b.pop(),b.length>0?x=b[b.length-1]:x=null};function ae(O,ut,yt,vt){if(O.visible===!1)return;if(O.layers.test(ut.layers)){if(O.isGroup)yt=O.renderOrder;else if(O.isLOD)O.autoUpdate===!0&&O.update(ut);else if(O.isLight)f.pushLight(O),O.castShadow&&f.pushShadow(O);else if(O.isSprite){if(!O.frustumCulled||Y.intersectsSprite(O)){vt&&Tt.setFromMatrixPosition(O.matrixWorld).applyMatrix4(at);let Ht=nt.update(O),Jt=O.material;Jt.visible&&x.push(O,Ht,Jt,yt,Tt.z,null)}}else if((O.isMesh||O.isLine||O.isPoints)&&(!O.frustumCulled||Y.intersectsObject(O))){let Ht=nt.update(O),Jt=O.material;if(vt&&(O.boundingSphere!==void 0?(O.boundingSphere===null&&O.computeBoundingSphere(),Tt.copy(O.boundingSphere.center)):(Ht.boundingSphere===null&&Ht.computeBoundingSphere(),Tt.copy(Ht.boundingSphere.center)),Tt.applyMatrix4(O.matrixWorld).applyMatrix4(at)),Array.isArray(Jt)){let Kt=Ht.groups;for(let oe=0,le=Kt.length;oe<le;oe++){let jt=Kt[oe],me=Jt[jt.materialIndex];me&&me.visible&&x.push(O,Ht,me,yt,Tt.z,jt)}}else Jt.visible&&x.push(O,Ht,Jt,yt,Tt.z,null)}}let kt=O.children;for(let Ht=0,Jt=kt.length;Ht<Jt;Ht++)ae(kt[Ht],ut,yt,vt)}function Ee(O,ut,yt,vt){let dt=O.opaque,kt=O.transmissive,Ht=O.transparent;f.setupLightsView(yt),X===!0&&bt.setGlobalState(_.clippingPlanes,yt),vt&&Rt.viewport(S.copy(vt)),dt.length>0&&Ve(dt,ut,yt),kt.length>0&&Ve(kt,ut,yt),Ht.length>0&&Ve(Ht,ut,yt),Rt.buffers.depth.setTest(!0),Rt.buffers.depth.setMask(!0),Rt.buffers.color.setMask(!0),Rt.setPolygonOffset(!1)}function ze(O,ut,yt,vt){if((yt.isScene===!0?yt.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[vt.id]===void 0&&(f.state.transmissionRenderTarget[vt.id]=new oi(1,1,{generateMipmaps:!0,type:Mt.has("EXT_color_buffer_half_float")||Mt.has("EXT_color_buffer_float")?Pr:ri,minFilter:Wi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:pe.workingColorSpace}));let kt=f.state.transmissionRenderTarget[vt.id],Ht=vt.viewport||S;kt.setSize(Ht.z,Ht.w);let Jt=_.getRenderTarget();_.setRenderTarget(kt),_.getClearColor(N),q=_.getClearAlpha(),q<1&&_.setClearColor(16777215,.5),_.clear(),lt&&qt.render(yt);let Kt=_.toneMapping;_.toneMapping=Vn;let oe=vt.viewport;if(vt.viewport!==void 0&&(vt.viewport=void 0),f.setupLightsView(vt),X===!0&&bt.setGlobalState(_.clippingPlanes,vt),Ve(O,yt,vt),B.updateMultisampleRenderTarget(kt),B.updateRenderTargetMipmap(kt),Mt.has("WEBGL_multisampled_render_to_texture")===!1){let le=!1;for(let jt=0,me=ut.length;jt<me;jt++){let Te=ut[jt],Ae=Te.object,dn=Te.geometry,ve=Te.material,te=Te.group;if(ve.side===Fe&&Ae.layers.test(vt.layers)){let Yn=ve.side;ve.side=Ze,ve.needsUpdate=!0,Nn(Ae,yt,vt,dn,ve,te),ve.side=Yn,ve.needsUpdate=!0,le=!0}}le===!0&&(B.updateMultisampleRenderTarget(kt),B.updateRenderTargetMipmap(kt))}_.setRenderTarget(Jt),_.setClearColor(N,q),oe!==void 0&&(vt.viewport=oe),_.toneMapping=Kt}function Ve(O,ut,yt){let vt=ut.isScene===!0?ut.overrideMaterial:null;for(let dt=0,kt=O.length;dt<kt;dt++){let Ht=O[dt],Jt=Ht.object,Kt=Ht.geometry,oe=vt===null?Ht.material:vt,le=Ht.group;Jt.layers.test(yt.layers)&&Nn(Jt,ut,yt,Kt,oe,le)}}function Nn(O,ut,yt,vt,dt,kt){O.onBeforeRender(_,ut,yt,vt,dt,kt),O.modelViewMatrix.multiplyMatrices(yt.matrixWorldInverse,O.matrixWorld),O.normalMatrix.getNormalMatrix(O.modelViewMatrix),dt.onBeforeRender(_,ut,yt,vt,O,kt),dt.transparent===!0&&dt.side===Fe&&dt.forceSinglePass===!1?(dt.side=Ze,dt.needsUpdate=!0,_.renderBufferDirect(yt,ut,vt,dt,O,kt),dt.side=Ci,dt.needsUpdate=!0,_.renderBufferDirect(yt,ut,vt,dt,O,kt),dt.side=Fe):_.renderBufferDirect(yt,ut,vt,dt,O,kt),O.onAfterRender(_,ut,yt,vt,dt,kt)}function Fn(O,ut,yt){ut.isScene!==!0&&(ut=At);let vt=Ut.get(O),dt=f.state.lights,kt=f.state.shadowsArray,Ht=dt.state.version,Jt=_t.getParameters(O,dt.state,kt,ut,yt),Kt=_t.getProgramCacheKey(Jt),oe=vt.programs;vt.environment=O.isMeshStandardMaterial?ut.environment:null,vt.fog=ut.fog,vt.envMap=(O.isMeshStandardMaterial?pt:k).get(O.envMap||vt.environment),vt.envMapRotation=vt.environment!==null&&O.envMap===null?ut.environmentRotation:O.envMapRotation,oe===void 0&&(O.addEventListener("dispose",ct),oe=new Map,vt.programs=oe);let le=oe.get(Kt);if(le!==void 0){if(vt.currentProgram===le&&vt.lightsStateVersion===Ht)return Ta(O,Jt),le}else Jt.uniforms=_t.getUniforms(O),O.onBeforeCompile(Jt,_),le=_t.acquireProgram(Jt,Kt),oe.set(Kt,le),vt.uniforms=Jt.uniforms;let jt=vt.uniforms;return(!O.isShaderMaterial&&!O.isRawShaderMaterial||O.clipping===!0)&&(jt.clippingPlanes=bt.uniform),Ta(O,Jt),vt.needsLights=Od(O),vt.lightsStateVersion=Ht,vt.needsLights&&(jt.ambientLightColor.value=dt.state.ambient,jt.lightProbe.value=dt.state.probe,jt.directionalLights.value=dt.state.directional,jt.directionalLightShadows.value=dt.state.directionalShadow,jt.spotLights.value=dt.state.spot,jt.spotLightShadows.value=dt.state.spotShadow,jt.rectAreaLights.value=dt.state.rectArea,jt.ltc_1.value=dt.state.rectAreaLTC1,jt.ltc_2.value=dt.state.rectAreaLTC2,jt.pointLights.value=dt.state.point,jt.pointLightShadows.value=dt.state.pointShadow,jt.hemisphereLights.value=dt.state.hemi,jt.directionalShadowMap.value=dt.state.directionalShadowMap,jt.directionalShadowMatrix.value=dt.state.directionalShadowMatrix,jt.spotShadowMap.value=dt.state.spotShadowMap,jt.spotLightMatrix.value=dt.state.spotLightMatrix,jt.spotLightMap.value=dt.state.spotLightMap,jt.pointShadowMap.value=dt.state.pointShadowMap,jt.pointShadowMatrix.value=dt.state.pointShadowMatrix),vt.currentProgram=le,vt.uniformsList=null,le}function ss(O){if(O.uniformsList===null){let ut=O.currentProgram.getUniforms();O.uniformsList=Us.seqWithValue(ut.seq,O.uniforms)}return O.uniformsList}function Ta(O,ut){let yt=Ut.get(O);yt.outputColorSpace=ut.outputColorSpace,yt.batching=ut.batching,yt.batchingColor=ut.batchingColor,yt.instancing=ut.instancing,yt.instancingColor=ut.instancingColor,yt.instancingMorph=ut.instancingMorph,yt.skinning=ut.skinning,yt.morphTargets=ut.morphTargets,yt.morphNormals=ut.morphNormals,yt.morphColors=ut.morphColors,yt.morphTargetsCount=ut.morphTargetsCount,yt.numClippingPlanes=ut.numClippingPlanes,yt.numIntersection=ut.numClipIntersection,yt.vertexAlphas=ut.vertexAlphas,yt.vertexTangents=ut.vertexTangents,yt.toneMapping=ut.toneMapping}function Nd(O,ut,yt,vt,dt){ut.isScene!==!0&&(ut=At),B.resetTextureUnits();let kt=ut.fog,Ht=vt.isMeshStandardMaterial?ut.environment:null,Jt=R===null?_.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Ws,Kt=(vt.isMeshStandardMaterial?pt:k).get(vt.envMap||Ht),oe=vt.vertexColors===!0&&!!yt.attributes.color&&yt.attributes.color.itemSize===4,le=!!yt.attributes.tangent&&(!!vt.normalMap||vt.anisotropy>0),jt=!!yt.morphAttributes.position,me=!!yt.morphAttributes.normal,Te=!!yt.morphAttributes.color,Ae=Vn;vt.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(Ae=_.toneMapping);let dn=yt.morphAttributes.position||yt.morphAttributes.normal||yt.morphAttributes.color,ve=dn!==void 0?dn.length:0,te=Ut.get(vt),Yn=f.state.lights;if(X===!0&&($===!0||O!==g)){let Mn=O===g&&vt.id===y;bt.setState(vt,O,Mn)}let _e=!1;vt.version===te.__version?(te.needsLights&&te.lightsStateVersion!==Yn.state.version||te.outputColorSpace!==Jt||dt.isBatchedMesh&&te.batching===!1||!dt.isBatchedMesh&&te.batching===!0||dt.isBatchedMesh&&te.batchingColor===!0&&dt.colorTexture===null||dt.isBatchedMesh&&te.batchingColor===!1&&dt.colorTexture!==null||dt.isInstancedMesh&&te.instancing===!1||!dt.isInstancedMesh&&te.instancing===!0||dt.isSkinnedMesh&&te.skinning===!1||!dt.isSkinnedMesh&&te.skinning===!0||dt.isInstancedMesh&&te.instancingColor===!0&&dt.instanceColor===null||dt.isInstancedMesh&&te.instancingColor===!1&&dt.instanceColor!==null||dt.isInstancedMesh&&te.instancingMorph===!0&&dt.morphTexture===null||dt.isInstancedMesh&&te.instancingMorph===!1&&dt.morphTexture!==null||te.envMap!==Kt||vt.fog===!0&&te.fog!==kt||te.numClippingPlanes!==void 0&&(te.numClippingPlanes!==bt.numPlanes||te.numIntersection!==bt.numIntersection)||te.vertexAlphas!==oe||te.vertexTangents!==le||te.morphTargets!==jt||te.morphNormals!==me||te.morphColors!==Te||te.toneMapping!==Ae||te.morphTargetsCount!==ve)&&(_e=!0):(_e=!0,te.__version=vt.version);let Tn=te.currentProgram;_e===!0&&(Tn=Fn(vt,ut,dt));let rs=!1,xn=!1,Js=!1,Re=Tn.getUniforms(),On=te.uniforms;if(Rt.useProgram(Tn.program)&&(rs=!0,xn=!0,Js=!0),vt.id!==y&&(y=vt.id,xn=!0),rs||g!==O){Rt.buffers.depth.getReversed()?(Z.copy(O.projectionMatrix),Qf(Z),tp(Z),Re.setValue(W,"projectionMatrix",Z)):Re.setValue(W,"projectionMatrix",O.projectionMatrix),Re.setValue(W,"viewMatrix",O.matrixWorldInverse);let xi=Re.map.cameraPosition;xi!==void 0&&xi.setValue(W,xt.setFromMatrixPosition(O.matrixWorld)),et.logarithmicDepthBuffer&&Re.setValue(W,"logDepthBufFC",2/(Math.log(O.far+1)/Math.LN2)),(vt.isMeshPhongMaterial||vt.isMeshToonMaterial||vt.isMeshLambertMaterial||vt.isMeshBasicMaterial||vt.isMeshStandardMaterial||vt.isShaderMaterial)&&Re.setValue(W,"isOrthographic",O.isOrthographicCamera===!0),g!==O&&(g=O,xn=!0,Js=!0)}if(dt.isSkinnedMesh){Re.setOptional(W,dt,"bindMatrix"),Re.setOptional(W,dt,"bindMatrixInverse");let Mn=dt.skeleton;Mn&&(Mn.boneTexture===null&&Mn.computeBoneTexture(),Re.setValue(W,"boneTexture",Mn.boneTexture,B))}dt.isBatchedMesh&&(Re.setOptional(W,dt,"batchingTexture"),Re.setValue(W,"batchingTexture",dt._matricesTexture,B),Re.setOptional(W,dt,"batchingIdTexture"),Re.setValue(W,"batchingIdTexture",dt._indirectTexture,B),Re.setOptional(W,dt,"batchingColorTexture"),dt._colorsTexture!==null&&Re.setValue(W,"batchingColorTexture",dt._colorsTexture,B));let Ks=yt.morphAttributes;if((Ks.position!==void 0||Ks.normal!==void 0||Ks.color!==void 0)&&Yt.update(dt,yt,Tn),(xn||te.receiveShadow!==dt.receiveShadow)&&(te.receiveShadow=dt.receiveShadow,Re.setValue(W,"receiveShadow",dt.receiveShadow)),vt.isMeshGouraudMaterial&&vt.envMap!==null&&(On.envMap.value=Kt,On.flipEnvMap.value=Kt.isCubeTexture&&Kt.isRenderTargetTexture===!1?-1:1),vt.isMeshStandardMaterial&&vt.envMap===null&&ut.environment!==null&&(On.envMapIntensity.value=ut.environmentIntensity),xn&&(Re.setValue(W,"toneMappingExposure",_.toneMappingExposure),te.needsLights&&Fd(On,Js),kt&&vt.fog===!0&&ht.refreshFogUniforms(On,kt),ht.refreshMaterialUniforms(On,vt,V,H,f.state.transmissionRenderTarget[O.id]),Us.upload(W,ss(te),On,B)),vt.isShaderMaterial&&vt.uniformsNeedUpdate===!0&&(Us.upload(W,ss(te),On,B),vt.uniformsNeedUpdate=!1),vt.isSpriteMaterial&&Re.setValue(W,"center",dt.center),Re.setValue(W,"modelViewMatrix",dt.modelViewMatrix),Re.setValue(W,"normalMatrix",dt.normalMatrix),Re.setValue(W,"modelMatrix",dt.matrixWorld),vt.isShaderMaterial||vt.isRawShaderMaterial){let Mn=vt.uniformsGroups;for(let xi=0,yi=Mn.length;xi<yi;xi++){let oh=Mn[xi];L.update(oh,Tn),L.bind(oh,Tn)}}return Tn}function Fd(O,ut){O.ambientLightColor.needsUpdate=ut,O.lightProbe.needsUpdate=ut,O.directionalLights.needsUpdate=ut,O.directionalLightShadows.needsUpdate=ut,O.pointLights.needsUpdate=ut,O.pointLightShadows.needsUpdate=ut,O.spotLights.needsUpdate=ut,O.spotLightShadows.needsUpdate=ut,O.rectAreaLights.needsUpdate=ut,O.hemisphereLights.needsUpdate=ut}function Od(O){return O.isMeshLambertMaterial||O.isMeshToonMaterial||O.isMeshPhongMaterial||O.isMeshStandardMaterial||O.isShadowMaterial||O.isShaderMaterial&&O.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(O,ut,yt){Ut.get(O.texture).__webglTexture=ut,Ut.get(O.depthTexture).__webglTexture=yt;let vt=Ut.get(O);vt.__hasExternalTextures=!0,vt.__autoAllocateDepthBuffer=yt===void 0,vt.__autoAllocateDepthBuffer||Mt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),vt.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(O,ut){let yt=Ut.get(O);yt.__webglFramebuffer=ut,yt.__useDefaultFramebuffer=ut===void 0},this.setRenderTarget=function(O,ut=0,yt=0){R=O,I=ut,w=yt;let vt=!0,dt=null,kt=!1,Ht=!1;if(O){let Kt=Ut.get(O);if(Kt.__useDefaultFramebuffer!==void 0)Rt.bindFramebuffer(W.FRAMEBUFFER,null),vt=!1;else if(Kt.__webglFramebuffer===void 0)B.setupRenderTarget(O);else if(Kt.__hasExternalTextures)B.rebindTextures(O,Ut.get(O.texture).__webglTexture,Ut.get(O.depthTexture).__webglTexture);else if(O.depthBuffer){let jt=O.depthTexture;if(Kt.__boundDepthTexture!==jt){if(jt!==null&&Ut.has(jt)&&(O.width!==jt.image.width||O.height!==jt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");B.setupDepthRenderbuffer(O)}}let oe=O.texture;(oe.isData3DTexture||oe.isDataArrayTexture||oe.isCompressedArrayTexture)&&(Ht=!0);let le=Ut.get(O).__webglFramebuffer;O.isWebGLCubeRenderTarget?(Array.isArray(le[ut])?dt=le[ut][yt]:dt=le[ut],kt=!0):O.samples>0&&B.useMultisampledRTT(O)===!1?dt=Ut.get(O).__webglMultisampledFramebuffer:Array.isArray(le)?dt=le[yt]:dt=le,S.copy(O.viewport),T.copy(O.scissor),C=O.scissorTest}else S.copy(D).multiplyScalar(V).floor(),T.copy(St).multiplyScalar(V).floor(),C=K;if(Rt.bindFramebuffer(W.FRAMEBUFFER,dt)&&vt&&Rt.drawBuffers(O,dt),Rt.viewport(S),Rt.scissor(T),Rt.setScissorTest(C),kt){let Kt=Ut.get(O.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Kt.__webglTexture,yt)}else if(Ht){let Kt=Ut.get(O.texture),oe=ut||0;W.framebufferTextureLayer(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,Kt.__webglTexture,yt||0,oe)}y=-1},this.readRenderTargetPixels=function(O,ut,yt,vt,dt,kt,Ht){if(!(O&&O.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Jt=Ut.get(O).__webglFramebuffer;if(O.isWebGLCubeRenderTarget&&Ht!==void 0&&(Jt=Jt[Ht]),Jt){Rt.bindFramebuffer(W.FRAMEBUFFER,Jt);try{let Kt=O.texture,oe=Kt.format,le=Kt.type;if(!et.textureFormatReadable(oe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!et.textureTypeReadable(le)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}ut>=0&&ut<=O.width-vt&&yt>=0&&yt<=O.height-dt&&W.readPixels(ut,yt,vt,dt,Zt.convert(oe),Zt.convert(le),kt)}finally{let Kt=R!==null?Ut.get(R).__webglFramebuffer:null;Rt.bindFramebuffer(W.FRAMEBUFFER,Kt)}}},this.readRenderTargetPixelsAsync=async function(O,ut,yt,vt,dt,kt,Ht){if(!(O&&O.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Jt=Ut.get(O).__webglFramebuffer;if(O.isWebGLCubeRenderTarget&&Ht!==void 0&&(Jt=Jt[Ht]),Jt){let Kt=O.texture,oe=Kt.format,le=Kt.type;if(!et.textureFormatReadable(oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!et.textureTypeReadable(le))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(ut>=0&&ut<=O.width-vt&&yt>=0&&yt<=O.height-dt){Rt.bindFramebuffer(W.FRAMEBUFFER,Jt);let jt=W.createBuffer();W.bindBuffer(W.PIXEL_PACK_BUFFER,jt),W.bufferData(W.PIXEL_PACK_BUFFER,kt.byteLength,W.STREAM_READ),W.readPixels(ut,yt,vt,dt,Zt.convert(oe),Zt.convert(le),0);let me=R!==null?Ut.get(R).__webglFramebuffer:null;Rt.bindFramebuffer(W.FRAMEBUFFER,me);let Te=W.fenceSync(W.SYNC_GPU_COMMANDS_COMPLETE,0);return W.flush(),await jf(W,Te,4),W.bindBuffer(W.PIXEL_PACK_BUFFER,jt),W.getBufferSubData(W.PIXEL_PACK_BUFFER,0,kt),W.deleteBuffer(jt),W.deleteSync(Te),kt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(O,ut=null,yt=0){O.isTexture!==!0&&(hr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),ut=arguments[0]||null,O=arguments[1]);let vt=Math.pow(2,-yt),dt=Math.floor(O.image.width*vt),kt=Math.floor(O.image.height*vt),Ht=ut!==null?ut.x:0,Jt=ut!==null?ut.y:0;B.setTexture2D(O,0),W.copyTexSubImage2D(W.TEXTURE_2D,yt,0,0,Ht,Jt,dt,kt),Rt.unbindTexture()},this.copyTextureToTexture=function(O,ut,yt=null,vt=null,dt=0){O.isTexture!==!0&&(hr("WebGLRenderer: copyTextureToTexture function signature has changed."),vt=arguments[0]||null,O=arguments[1],ut=arguments[2],dt=arguments[3]||0,yt=null);let kt,Ht,Jt,Kt,oe,le,jt,me,Te,Ae=O.isCompressedTexture?O.mipmaps[dt]:O.image;yt!==null?(kt=yt.max.x-yt.min.x,Ht=yt.max.y-yt.min.y,Jt=yt.isBox3?yt.max.z-yt.min.z:1,Kt=yt.min.x,oe=yt.min.y,le=yt.isBox3?yt.min.z:0):(kt=Ae.width,Ht=Ae.height,Jt=Ae.depth||1,Kt=0,oe=0,le=0),vt!==null?(jt=vt.x,me=vt.y,Te=vt.z):(jt=0,me=0,Te=0);let dn=Zt.convert(ut.format),ve=Zt.convert(ut.type),te;ut.isData3DTexture?(B.setTexture3D(ut,0),te=W.TEXTURE_3D):ut.isDataArrayTexture||ut.isCompressedArrayTexture?(B.setTexture2DArray(ut,0),te=W.TEXTURE_2D_ARRAY):(B.setTexture2D(ut,0),te=W.TEXTURE_2D),W.pixelStorei(W.UNPACK_FLIP_Y_WEBGL,ut.flipY),W.pixelStorei(W.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ut.premultiplyAlpha),W.pixelStorei(W.UNPACK_ALIGNMENT,ut.unpackAlignment);let Yn=W.getParameter(W.UNPACK_ROW_LENGTH),_e=W.getParameter(W.UNPACK_IMAGE_HEIGHT),Tn=W.getParameter(W.UNPACK_SKIP_PIXELS),rs=W.getParameter(W.UNPACK_SKIP_ROWS),xn=W.getParameter(W.UNPACK_SKIP_IMAGES);W.pixelStorei(W.UNPACK_ROW_LENGTH,Ae.width),W.pixelStorei(W.UNPACK_IMAGE_HEIGHT,Ae.height),W.pixelStorei(W.UNPACK_SKIP_PIXELS,Kt),W.pixelStorei(W.UNPACK_SKIP_ROWS,oe),W.pixelStorei(W.UNPACK_SKIP_IMAGES,le);let Js=O.isDataArrayTexture||O.isData3DTexture,Re=ut.isDataArrayTexture||ut.isData3DTexture;if(O.isRenderTargetTexture||O.isDepthTexture){let On=Ut.get(O),Ks=Ut.get(ut),Mn=Ut.get(On.__renderTarget),xi=Ut.get(Ks.__renderTarget);Rt.bindFramebuffer(W.READ_FRAMEBUFFER,Mn.__webglFramebuffer),Rt.bindFramebuffer(W.DRAW_FRAMEBUFFER,xi.__webglFramebuffer);for(let yi=0;yi<Jt;yi++)Js&&W.framebufferTextureLayer(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,Ut.get(O).__webglTexture,dt,le+yi),O.isDepthTexture?(Re&&W.framebufferTextureLayer(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,Ut.get(ut).__webglTexture,dt,Te+yi),W.blitFramebuffer(Kt,oe,kt,Ht,jt,me,kt,Ht,W.DEPTH_BUFFER_BIT,W.NEAREST)):Re?W.copyTexSubImage3D(te,dt,jt,me,Te+yi,Kt,oe,kt,Ht):W.copyTexSubImage2D(te,dt,jt,me,Te+yi,Kt,oe,kt,Ht);Rt.bindFramebuffer(W.READ_FRAMEBUFFER,null),Rt.bindFramebuffer(W.DRAW_FRAMEBUFFER,null)}else Re?O.isDataTexture||O.isData3DTexture?W.texSubImage3D(te,dt,jt,me,Te,kt,Ht,Jt,dn,ve,Ae.data):ut.isCompressedArrayTexture?W.compressedTexSubImage3D(te,dt,jt,me,Te,kt,Ht,Jt,dn,Ae.data):W.texSubImage3D(te,dt,jt,me,Te,kt,Ht,Jt,dn,ve,Ae):O.isDataTexture?W.texSubImage2D(W.TEXTURE_2D,dt,jt,me,kt,Ht,dn,ve,Ae.data):O.isCompressedTexture?W.compressedTexSubImage2D(W.TEXTURE_2D,dt,jt,me,Ae.width,Ae.height,dn,Ae.data):W.texSubImage2D(W.TEXTURE_2D,dt,jt,me,kt,Ht,dn,ve,Ae);W.pixelStorei(W.UNPACK_ROW_LENGTH,Yn),W.pixelStorei(W.UNPACK_IMAGE_HEIGHT,_e),W.pixelStorei(W.UNPACK_SKIP_PIXELS,Tn),W.pixelStorei(W.UNPACK_SKIP_ROWS,rs),W.pixelStorei(W.UNPACK_SKIP_IMAGES,xn),dt===0&&ut.generateMipmaps&&W.generateMipmap(te),Rt.unbindTexture()},this.copyTextureToTexture3D=function(O,ut,yt=null,vt=null,dt=0){return O.isTexture!==!0&&(hr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),yt=arguments[0]||null,vt=arguments[1]||null,O=arguments[2],ut=arguments[3],dt=arguments[4]||0),hr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(O,ut,yt,vt,dt)},this.initRenderTarget=function(O){Ut.get(O).__webglFramebuffer===void 0&&B.setupRenderTarget(O)},this.initTexture=function(O){O.isCubeTexture?B.setTextureCube(O,0):O.isData3DTexture?B.setTexture3D(O,0):O.isDataArrayTexture||O.isCompressedArrayTexture?B.setTexture2DArray(O,0):B.setTexture2D(O,0),Rt.unbindTexture()},this.resetState=function(){I=0,w=0,R=null,Rt.reset(),P.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ii}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=pe._getDrawingBufferColorSpace(t),e.unpackColorSpace=pe._getUnpackColorSpace()}};var Xo=class n{constructor(t,e=1,i=1e3){this.isFog=!0,this.name="",this.color=new Qt(t),this.near=e,this.far=i}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},qo=class extends Pe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Dn,this.environmentIntensity=1,this.environmentRotation=new Dn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},Yo=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Kl,this.updateRanges=[],this.version=0,this.uuid=Gn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[i+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Gn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Gn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},rn=new G,_r=class n{constructor(t,e,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)rn.fromBufferAttribute(this,e),rn.applyMatrix4(t),this.setXYZ(e,rn.x,rn.y,rn.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)rn.fromBufferAttribute(this,e),rn.applyNormalMatrix(t),this.setXYZ(e,rn.x,rn.y,rn.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)rn.fromBufferAttribute(this,e),rn.transformDirection(t),this.setXYZ(e,rn.x,rn.y,rn.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=Ln(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Me(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=Me(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Me(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Me(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Me(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Ln(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Ln(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Ln(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Ln(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=Me(e,this.array),i=Me(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Me(e,this.array),i=Me(i,this.array),s=Me(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Me(e,this.array),i=Me(i,this.array),s=Me(s,this.array),r=Me(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new De(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new n(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Mr=class extends li{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new Qt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Es,sr=new G,Ts=new G,As=new G,Rs=new Ct,rr=new Ct,td=new ge,go=new G,or=new G,xo=new G,xu=new Ct,ol=new Ct,yu=new Ct,Zo=class extends Pe{constructor(t=new Mr){if(super(),this.isSprite=!0,this.type="Sprite",Es===void 0){Es=new Se;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Yo(e,5);Es.setIndex([0,1,2,0,2,3]),Es.setAttribute("position",new _r(i,3,0,!1)),Es.setAttribute("uv",new _r(i,2,3,!1))}this.geometry=Es,this.material=t,this.center=new Ct(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ts.setFromMatrixScale(this.matrixWorld),td.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),As.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ts.multiplyScalar(-As.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let o=this.center;yo(go.set(-.5,-.5,0),As,o,Ts,s,r),yo(or.set(.5,-.5,0),As,o,Ts,s,r),yo(xo.set(.5,.5,0),As,o,Ts,s,r),xu.set(0,0),ol.set(1,0),yu.set(1,1);let a=t.ray.intersectTriangle(go,or,xo,!1,sr);if(a===null&&(yo(or.set(-.5,.5,0),As,o,Ts,s,r),ol.set(0,1),a=t.ray.intersectTriangle(go,xo,or,!1,sr),a===null))return;let l=t.ray.origin.distanceTo(sr);l<t.near||l>t.far||e.push({distance:l,point:sr.clone(),uv:Ti.getInterpolation(sr,go,or,xo,xu,ol,yu,new Ct),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function yo(n,t,e,i,s,r){Rs.subVectors(n,e).addScalar(.5).multiply(i),s!==void 0?(rr.x=r*Rs.x-s*Rs.y,rr.y=s*Rs.x+r*Rs.y):rr.copy(Rs),n.copy(t),n.x+=rr.x,n.y+=rr.y,n.applyMatrix4(td)}var br=class extends pn{constructor(t=null,e=1,i=1,s,r,o,a,l,h=ln,u=ln,m,d){super(null,o,a,l,h,u,s,r,m,d),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Sr=class extends De{constructor(t,e,i,s=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Cs=new ge,vu=new ge,vo=[],_u=new ai,qx=new ge,ar=new Ce,lr=new Pi,mn=class extends Ce{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Sr(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,qx)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new ai),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Cs),_u.copy(t.boundingBox).applyMatrix4(Cs),this.boundingBox.union(_u)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Pi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Cs),lr.copy(t.boundingSphere).applyMatrix4(Cs),this.boundingSphere.union(lr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let i=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=t*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(t,e){let i=this.matrixWorld,s=this.count;if(ar.geometry=this.geometry,ar.material=this.material,ar.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),lr.copy(this.boundingSphere),lr.applyMatrix4(i),t.ray.intersectsSphere(lr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Cs),vu.multiplyMatrices(i,Cs),ar.matrixWorld=vu,ar.raycast(t,vo);for(let o=0,a=vo.length;o<a;o++){let l=vo[o];l.instanceId=r,l.object=this,e.push(l)}vo.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Sr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let i=e.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new br(new Float32Array(s*this.count),s,this.count,zc,$n));let r=this.morphTexture.source.data.data,o=0;for(let h=0;h<i.length;h++)o+=i[h];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;r[l]=a,r.set(i,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var Yi=class extends li{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new Qt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Jo=new G,Ko=new G,Mu=new ge,cr=new No,_o=new Pi,al=new G,bu=new G,pc=class extends Pe{constructor(t=new Se,e=new Yi){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[0];for(let s=1,r=e.count;s<r;s++)Jo.fromBufferAttribute(e,s-1),Ko.fromBufferAttribute(e,s),i[s]=i[s-1],i[s]+=Jo.distanceTo(Ko);t.setAttribute("lineDistance",new ie(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let i=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),_o.copy(i.boundingSphere),_o.applyMatrix4(s),_o.radius+=r,t.ray.intersectsSphere(_o)===!1)return;Mu.copy(s).invert(),cr.copy(t.ray).applyMatrix4(Mu);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,h=this.isLineSegments?2:1,u=i.index,d=i.attributes.position;if(u!==null){let c=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let M=c,x=p-1;M<x;M+=h){let f=u.getX(M),b=u.getX(M+1),v=Mo(this,t,cr,l,f,b);v&&e.push(v)}if(this.isLineLoop){let M=u.getX(p-1),x=u.getX(c),f=Mo(this,t,cr,l,M,x);f&&e.push(f)}}else{let c=Math.max(0,o.start),p=Math.min(d.count,o.start+o.count);for(let M=c,x=p-1;M<x;M+=h){let f=Mo(this,t,cr,l,M,M+1);f&&e.push(f)}if(this.isLineLoop){let M=Mo(this,t,cr,l,p-1,c);M&&e.push(M)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Mo(n,t,e,i,s,r){let o=n.geometry.attributes.position;if(Jo.fromBufferAttribute(o,s),Ko.fromBufferAttribute(o,r),e.distanceSqToSegment(Jo,Ko,al,bu)>i)return;al.applyMatrix4(n.matrixWorld);let l=t.ray.origin.distanceTo(al);if(!(l<t.near||l>t.far))return{distance:l,point:bu.clone().applyMatrix4(n.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:n}}var Su=new G,wu=new G,$s=class extends pc{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[];for(let s=0,r=e.count;s<r;s+=2)Su.fromBufferAttribute(e,s),wu.fromBufferAttribute(e,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Su.distanceTo(wu);t.setAttribute("lineDistance",new ie(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Vs=class extends pn{constructor(t,e,i,s,r,o,a,l,h){super(t,e,i,s,r,o,a,l,h),this.isCanvasTexture=!0,this.needsUpdate=!0}},wn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],i,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)i=this.getPoint(o/t),r+=i.distanceTo(s),e.push(r),s=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let i=this.getLengths(),s=0,r=i.length,o;e?o=e:o=t*i[r-1];let a=0,l=r-1,h;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),h=i[s]-o,h<0)a=s+1;else if(h>0)l=s-1;else{l=s;break}if(s=l,i[s]===o)return s/(r-1);let u=i[s],d=i[s+1]-u,c=(o-u)/d;return(s+c)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new Ct:new G);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e){let i=new G,s=[],r=[],o=[],a=new G,l=new ge;for(let c=0;c<=t;c++){let p=c/t;s[c]=this.getTangentAt(p,new G)}r[0]=new G,o[0]=new G;let h=Number.MAX_VALUE,u=Math.abs(s[0].x),m=Math.abs(s[0].y),d=Math.abs(s[0].z);u<=h&&(h=u,i.set(1,0,0)),m<=h&&(h=m,i.set(0,1,0)),d<=h&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let c=1;c<=t;c++){if(r[c]=r[c-1].clone(),o[c]=o[c-1].clone(),a.crossVectors(s[c-1],s[c]),a.length()>Number.EPSILON){a.normalize();let p=Math.acos(Ye(s[c-1].dot(s[c]),-1,1));r[c].applyMatrix4(l.makeRotationAxis(a,p))}o[c].crossVectors(s[c],r[c])}if(e===!0){let c=Math.acos(Ye(r[0].dot(r[t]),-1,1));c/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(c=-c);for(let p=1;p<=t;p++)r[p].applyMatrix4(l.makeRotationAxis(s[p],c*p)),o[p].crossVectors(s[p],r[p])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},wr=class extends wn{constructor(t=0,e=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new Ct){let i=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(a),h=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let u=Math.cos(this.aRotation),m=Math.sin(this.aRotation),d=l-this.aX,c=h-this.aY;l=d*u-c*m+this.aX,h=d*m+c*u+this.aY}return i.set(l,h)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},mc=class extends wr{constructor(t,e,i,s,r,o){super(t,e,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Xc(){let n=0,t=0,e=0,i=0;function s(r,o,a,l){n=r,t=a,e=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,h){s(o,a,h*(a-r),h*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,h,u,m){let d=(o-r)/h-(a-r)/(h+u)+(a-o)/u,c=(a-o)/u-(l-o)/(u+m)+(l-a)/m;d*=u,c*=u,s(o,a,d,c)},calc:function(r){let o=r*r,a=o*r;return n+t*r+e*o+i*a}}}var bo=new G,ll=new Xc,cl=new Xc,hl=new Xc,Er=class extends wn{constructor(t=[],e=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=s}getPoint(t,e=new G){let i=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let h,u;this.closed||a>0?h=s[(a-1)%r]:(bo.subVectors(s[0],s[1]).add(s[0]),h=bo);let m=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(bo.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=bo),this.curveType==="centripetal"||this.curveType==="chordal"){let c=this.curveType==="chordal"?.5:.25,p=Math.pow(h.distanceToSquared(m),c),M=Math.pow(m.distanceToSquared(d),c),x=Math.pow(d.distanceToSquared(u),c);M<1e-4&&(M=1),p<1e-4&&(p=M),x<1e-4&&(x=M),ll.initNonuniformCatmullRom(h.x,m.x,d.x,u.x,p,M,x),cl.initNonuniformCatmullRom(h.y,m.y,d.y,u.y,p,M,x),hl.initNonuniformCatmullRom(h.z,m.z,d.z,u.z,p,M,x)}else this.curveType==="catmullrom"&&(ll.initCatmullRom(h.x,m.x,d.x,u.x,this.tension),cl.initCatmullRom(h.y,m.y,d.y,u.y,this.tension),hl.initCatmullRom(h.z,m.z,d.z,u.z,this.tension));return i.set(ll.calc(l),cl.calc(l),hl.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(new G().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Eu(n,t,e,i,s){let r=(i-t)*.5,o=(s-e)*.5,a=n*n,l=n*a;return(2*e-2*i+r+o)*l+(-3*e+3*i-2*r-o)*a+r*n+e}function Yx(n,t){let e=1-n;return e*e*t}function Zx(n,t){return 2*(1-n)*n*t}function Jx(n,t){return n*n*t}function mr(n,t,e,i){return Yx(n,t)+Zx(n,e)+Jx(n,i)}function Kx(n,t){let e=1-n;return e*e*e*t}function jx(n,t){let e=1-n;return 3*e*e*n*t}function Qx(n,t){return 3*(1-n)*n*n*t}function ty(n,t){return n*n*n*t}function gr(n,t,e,i,s){return Kx(n,t)+jx(n,e)+Qx(n,i)+ty(n,s)}var jo=class extends wn{constructor(t=new Ct,e=new Ct,i=new Ct,s=new Ct){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new Ct){let i=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(gr(t,s.x,r.x,o.x,a.x),gr(t,s.y,r.y,o.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},gc=class extends wn{constructor(t=new G,e=new G,i=new G,s=new G){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new G){let i=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(gr(t,s.x,r.x,o.x,a.x),gr(t,s.y,r.y,o.y,a.y),gr(t,s.z,r.z,o.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Qo=class extends wn{constructor(t=new Ct,e=new Ct){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Ct){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Ct){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},xc=class extends wn{constructor(t=new G,e=new G){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new G){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new G){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ta=class extends wn{constructor(t=new Ct,e=new Ct,i=new Ct){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new Ct){let i=e,s=this.v0,r=this.v1,o=this.v2;return i.set(mr(t,s.x,r.x,o.x),mr(t,s.y,r.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ea=class extends wn{constructor(t=new G,e=new G,i=new G){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new G){let i=e,s=this.v0,r=this.v1,o=this.v2;return i.set(mr(t,s.x,r.x,o.x),mr(t,s.y,r.y,o.y),mr(t,s.z,r.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},na=class extends wn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Ct){let i=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],h=s[o],u=s[o>s.length-2?s.length-1:o+1],m=s[o>s.length-3?s.length-1:o+2];return i.set(Eu(a,l.x,h.x,u.x,m.x),Eu(a,l.y,h.y,u.y,m.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(new Ct().fromArray(s))}return this}},ia=Object.freeze({__proto__:null,ArcCurve:mc,CatmullRomCurve3:Er,CubicBezierCurve:jo,CubicBezierCurve3:gc,EllipseCurve:wr,LineCurve:Qo,LineCurve3:xc,QuadraticBezierCurve:ta,QuadraticBezierCurve3:ea,SplineCurve:na}),yc=class extends wn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ia[i](e,t))}return this}getPoint(t,e){let i=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let o=s[r]-i,a=this.curves[r],l=a.getLength(),h=l===0?0:1-o/l;return a.getPointAt(h,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let i=0,s=this.curves.length;i<s;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],i;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let h=0;h<l.length;h++){let u=l[h];i&&i.equals(u)||(e.push(u),i=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let s=t.curves[e];this.curves.push(new ia[s.type]().fromJSON(s))}return this}},Tr=class extends yc{constructor(t){super(),this.type="Path",this.currentPoint=new Ct,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let i=new Qo(this.currentPoint.clone(),new Ct(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,s){let r=new ta(this.currentPoint.clone(),new Ct(t,e),new Ct(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(t,e,i,s,r,o){let a=new jo(this.currentPoint.clone(),new Ct(t,e),new Ct(i,s),new Ct(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),i=new na(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,i,s,r,o),this}absarc(t,e,i,s,r,o){return this.absellipse(t,e,i,i,s,r,o),this}ellipse(t,e,i,s,r,o,a,l){let h=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+h,e+u,i,s,r,o,a,l),this}absellipse(t,e,i,s,r,o,a,l){let h=new wr(t,e,i,s,r,o,a,l);if(this.curves.length>0){let m=h.getPoint(0);m.equals(this.currentPoint)||this.lineTo(m.x,m.y)}this.curves.push(h);let u=h.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Ar=class n extends Se{constructor(t=[new Ct(0,-.5),new Ct(.5,0),new Ct(0,.5)],e=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:i,phiLength:s},e=Math.floor(e),s=Ye(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],h=[],u=1/e,m=new G,d=new Ct,c=new G,p=new G,M=new G,x=0,f=0;for(let b=0;b<=t.length-1;b++)switch(b){case 0:x=t[b+1].x-t[b].x,f=t[b+1].y-t[b].y,c.x=f*1,c.y=-x,c.z=f*0,M.copy(c),c.normalize(),l.push(c.x,c.y,c.z);break;case t.length-1:l.push(M.x,M.y,M.z);break;default:x=t[b+1].x-t[b].x,f=t[b+1].y-t[b].y,c.x=f*1,c.y=-x,c.z=f*0,p.copy(c),c.x+=M.x,c.y+=M.y,c.z+=M.z,c.normalize(),l.push(c.x,c.y,c.z),M.copy(p)}for(let b=0;b<=e;b++){let v=i+b*u*s,_=Math.sin(v),U=Math.cos(v);for(let I=0;I<=t.length-1;I++){m.x=t[I].x*_,m.y=t[I].y,m.z=t[I].x*U,o.push(m.x,m.y,m.z),d.x=b/e,d.y=I/(t.length-1),a.push(d.x,d.y);let w=l[3*I+0]*_,R=l[3*I+1],y=l[3*I+0]*U;h.push(w,R,y)}}for(let b=0;b<e;b++)for(let v=0;v<t.length-1;v++){let _=v+b*t.length,U=_,I=_+t.length,w=_+t.length+1,R=_+1;r.push(U,I,R),r.push(w,R,I)}this.setIndex(r),this.setAttribute("position",new ie(o,3)),this.setAttribute("uv",new ie(a,2)),this.setAttribute("normal",new ie(h,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.points,t.segments,t.phiStart,t.phiLength)}},ci=class n extends Ar{constructor(t=1,e=1,i=4,s=8){let r=new Tr;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(i),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:i,radialSegments:s}}static fromJSON(t){return new n(t.radius,t.length,t.capSegments,t.radialSegments)}};var ue=class n extends Se{constructor(t=1,e=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let h=this;s=Math.floor(s),r=Math.floor(r);let u=[],m=[],d=[],c=[],p=0,M=[],x=i/2,f=0;b(),o===!1&&(t>0&&v(!0),e>0&&v(!1)),this.setIndex(u),this.setAttribute("position",new ie(m,3)),this.setAttribute("normal",new ie(d,3)),this.setAttribute("uv",new ie(c,2));function b(){let _=new G,U=new G,I=0,w=(e-t)/i;for(let R=0;R<=r;R++){let y=[],g=R/r,S=g*(e-t)+t;for(let T=0;T<=s;T++){let C=T/s,N=C*l+a,q=Math.sin(N),A=Math.cos(N);U.x=S*q,U.y=-g*i+x,U.z=S*A,m.push(U.x,U.y,U.z),_.set(q,w,A).normalize(),d.push(_.x,_.y,_.z),c.push(C,1-g),y.push(p++)}M.push(y)}for(let R=0;R<s;R++)for(let y=0;y<r;y++){let g=M[y][R],S=M[y+1][R],T=M[y+1][R+1],C=M[y][R+1];(t>0||y!==0)&&(u.push(g,S,C),I+=3),(e>0||y!==r-1)&&(u.push(S,T,C),I+=3)}h.addGroup(f,I,0),f+=I}function v(_){let U=p,I=new Ct,w=new G,R=0,y=_===!0?t:e,g=_===!0?1:-1;for(let T=1;T<=s;T++)m.push(0,x*g,0),d.push(0,g,0),c.push(.5,.5),p++;let S=p;for(let T=0;T<=s;T++){let N=T/s*l+a,q=Math.cos(N),A=Math.sin(N);w.x=y*A,w.y=x*g,w.z=y*q,m.push(w.x,w.y,w.z),d.push(0,g,0),I.x=q*.5+.5,I.y=A*.5*g+.5,c.push(I.x,I.y),p++}for(let T=0;T<s;T++){let C=U+T,N=S+T;_===!0?u.push(N,N+1,C):u.push(N+1,N,C),R+=3}h.addGroup(f,R,_===!0?1:2),f+=R}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Oe=class n extends ue{constructor(t=1,e=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new n(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},vc=class n extends Se{constructor(t=[],e=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:s};let r=[],o=[];a(s),h(i),u(),this.setAttribute("position",new ie(r,3)),this.setAttribute("normal",new ie(r.slice(),3)),this.setAttribute("uv",new ie(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(b){let v=new G,_=new G,U=new G;for(let I=0;I<e.length;I+=3)c(e[I+0],v),c(e[I+1],_),c(e[I+2],U),l(v,_,U,b)}function l(b,v,_,U){let I=U+1,w=[];for(let R=0;R<=I;R++){w[R]=[];let y=b.clone().lerp(_,R/I),g=v.clone().lerp(_,R/I),S=I-R;for(let T=0;T<=S;T++)T===0&&R===I?w[R][T]=y:w[R][T]=y.clone().lerp(g,T/S)}for(let R=0;R<I;R++)for(let y=0;y<2*(I-R)-1;y++){let g=Math.floor(y/2);y%2===0?(d(w[R][g+1]),d(w[R+1][g]),d(w[R][g])):(d(w[R][g+1]),d(w[R+1][g+1]),d(w[R+1][g]))}}function h(b){let v=new G;for(let _=0;_<r.length;_+=3)v.x=r[_+0],v.y=r[_+1],v.z=r[_+2],v.normalize().multiplyScalar(b),r[_+0]=v.x,r[_+1]=v.y,r[_+2]=v.z}function u(){let b=new G;for(let v=0;v<r.length;v+=3){b.x=r[v+0],b.y=r[v+1],b.z=r[v+2];let _=x(b)/2/Math.PI+.5,U=f(b)/Math.PI+.5;o.push(_,1-U)}p(),m()}function m(){for(let b=0;b<o.length;b+=6){let v=o[b+0],_=o[b+2],U=o[b+4],I=Math.max(v,_,U),w=Math.min(v,_,U);I>.9&&w<.1&&(v<.2&&(o[b+0]+=1),_<.2&&(o[b+2]+=1),U<.2&&(o[b+4]+=1))}}function d(b){r.push(b.x,b.y,b.z)}function c(b,v){let _=b*3;v.x=t[_+0],v.y=t[_+1],v.z=t[_+2]}function p(){let b=new G,v=new G,_=new G,U=new G,I=new Ct,w=new Ct,R=new Ct;for(let y=0,g=0;y<r.length;y+=9,g+=6){b.set(r[y+0],r[y+1],r[y+2]),v.set(r[y+3],r[y+4],r[y+5]),_.set(r[y+6],r[y+7],r[y+8]),I.set(o[g+0],o[g+1]),w.set(o[g+2],o[g+3]),R.set(o[g+4],o[g+5]),U.copy(b).add(v).add(_).divideScalar(3);let S=x(U);M(I,g+0,b,S),M(w,g+2,v,S),M(R,g+4,_,S)}}function M(b,v,_,U){U<0&&b.x===1&&(o[v]=b.x-1),_.x===0&&_.z===0&&(o[v]=U/2/Math.PI+.5)}function x(b){return Math.atan2(b.z,-b.x)}function f(b){return Math.atan2(-b.y,Math.sqrt(b.x*b.x+b.z*b.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.vertices,t.indices,t.radius,t.details)}};var Zi=class extends Tr{constructor(t){super(t),this.uuid=Gn(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let i=0,s=this.holes.length;i<s;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let s=t.holes[e];this.holes.push(new Tr().fromJSON(s))}return this}},ey={triangulate:function(n,t,e=2){let i=t&&t.length,s=i?t[0]*e:n.length,r=ed(n,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,h,u,m,d,c;if(i&&(r=oy(n,t,r,e)),n.length>80*e){a=h=n[0],l=u=n[1];for(let p=e;p<s;p+=e)m=n[p],d=n[p+1],m<a&&(a=m),d<l&&(l=d),m>h&&(h=m),d>u&&(u=d);c=Math.max(h-a,u-l),c=c!==0?32767/c:0}return Rr(r,o,e,a,l,c,0),o}};function ed(n,t,e,i,s){let r,o;if(s===xy(n,t,e,i)>0)for(r=t;r<e;r+=i)o=Tu(r,n[r],n[r+1],o);else for(r=e-i;r>=t;r-=i)o=Tu(r,n[r],n[r+1],o);return o&&ga(o,o.next)&&(Ir(o),o=o.next),o}function Ji(n,t){if(!n)return n;t||(t=n);let e=n,i;do if(i=!1,!e.steiner&&(ga(e,e.next)||Le(e.prev,e,e.next)===0)){if(Ir(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function Rr(n,t,e,i,s,r,o){if(!n)return;!o&&r&&uy(n,i,s,r);let a=n,l,h;for(;n.prev!==n.next;){if(l=n.prev,h=n.next,r?iy(n,i,s,r):ny(n)){t.push(l.i/e|0),t.push(n.i/e|0),t.push(h.i/e|0),Ir(n),n=h.next,a=h.next;continue}if(n=h,n===a){o?o===1?(n=sy(Ji(n),t,e),Rr(n,t,e,i,s,r,2)):o===2&&ry(n,t,e,i,s,r):Rr(Ji(n),t,e,i,s,r,1);break}}}function ny(n){let t=n.prev,e=n,i=n.next;if(Le(t,e,i)>=0)return!1;let s=t.x,r=e.x,o=i.x,a=t.y,l=e.y,h=i.y,u=s<r?s<o?s:o:r<o?r:o,m=a<l?a<h?a:h:l<h?l:h,d=s>r?s>o?s:o:r>o?r:o,c=a>l?a>h?a:h:l>h?l:h,p=i.next;for(;p!==t;){if(p.x>=u&&p.x<=d&&p.y>=m&&p.y<=c&&Ps(s,a,r,l,o,h,p.x,p.y)&&Le(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function iy(n,t,e,i){let s=n.prev,r=n,o=n.next;if(Le(s,r,o)>=0)return!1;let a=s.x,l=r.x,h=o.x,u=s.y,m=r.y,d=o.y,c=a<l?a<h?a:h:l<h?l:h,p=u<m?u<d?u:d:m<d?m:d,M=a>l?a>h?a:h:l>h?l:h,x=u>m?u>d?u:d:m>d?m:d,f=_c(c,p,t,e,i),b=_c(M,x,t,e,i),v=n.prevZ,_=n.nextZ;for(;v&&v.z>=f&&_&&_.z<=b;){if(v.x>=c&&v.x<=M&&v.y>=p&&v.y<=x&&v!==s&&v!==o&&Ps(a,u,l,m,h,d,v.x,v.y)&&Le(v.prev,v,v.next)>=0||(v=v.prevZ,_.x>=c&&_.x<=M&&_.y>=p&&_.y<=x&&_!==s&&_!==o&&Ps(a,u,l,m,h,d,_.x,_.y)&&Le(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;v&&v.z>=f;){if(v.x>=c&&v.x<=M&&v.y>=p&&v.y<=x&&v!==s&&v!==o&&Ps(a,u,l,m,h,d,v.x,v.y)&&Le(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;_&&_.z<=b;){if(_.x>=c&&_.x<=M&&_.y>=p&&_.y<=x&&_!==s&&_!==o&&Ps(a,u,l,m,h,d,_.x,_.y)&&Le(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function sy(n,t,e){let i=n;do{let s=i.prev,r=i.next.next;!ga(s,r)&&nd(s,i,i.next,r)&&Cr(s,r)&&Cr(r,s)&&(t.push(s.i/e|0),t.push(i.i/e|0),t.push(r.i/e|0),Ir(i),Ir(i.next),i=n=r),i=i.next}while(i!==n);return Ji(i)}function ry(n,t,e,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&py(o,a)){let l=id(o,a);o=Ji(o,o.next),l=Ji(l,l.next),Rr(o,t,e,i,s,r,0),Rr(l,t,e,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function oy(n,t,e,i){let s=[],r,o,a,l,h;for(r=0,o=t.length;r<o;r++)a=t[r]*i,l=r<o-1?t[r+1]*i:n.length,h=ed(n,a,l,i,!1),h===h.next&&(h.steiner=!0),s.push(fy(h));for(s.sort(ay),r=0;r<s.length;r++)e=ly(s[r],e);return e}function ay(n,t){return n.x-t.x}function ly(n,t){let e=cy(n,t);if(!e)return t;let i=id(e,n);return Ji(i,i.next),Ji(e,e.next)}function cy(n,t){let e=t,i=-1/0,s,r=n.x,o=n.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){let d=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=r&&d>i&&(i=d,s=e.x<e.next.x?e:e.next,d===r))return s}e=e.next}while(e!==t);if(!s)return null;let a=s,l=s.x,h=s.y,u=1/0,m;e=s;do r>=e.x&&e.x>=l&&r!==e.x&&Ps(o<h?r:i,o,l,h,o<h?i:r,o,e.x,e.y)&&(m=Math.abs(o-e.y)/(r-e.x),Cr(e,n)&&(m<u||m===u&&(e.x>s.x||e.x===s.x&&hy(s,e)))&&(s=e,u=m)),e=e.next;while(e!==a);return s}function hy(n,t){return Le(n.prev,n,t.prev)<0&&Le(t.next,n,n.next)<0}function uy(n,t,e,i){let s=n;do s.z===0&&(s.z=_c(s.x,s.y,t,e,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,dy(s)}function dy(n){let t,e,i,s,r,o,a,l,h=1;do{for(e=n,n=null,r=null,o=0;e;){for(o++,i=e,a=0,t=0;t<h&&(a++,i=i.nextZ,!!i);t++);for(l=h;a>0||l>0&&i;)a!==0&&(l===0||!i||e.z<=i.z)?(s=e,e=e.nextZ,a--):(s=i,i=i.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;e=i}r.nextZ=null,h*=2}while(o>1);return n}function _c(n,t,e,i,s){return n=(n-e)*s|0,t=(t-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,n|t<<1}function fy(n){let t=n,e=n;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==n);return e}function Ps(n,t,e,i,s,r,o,a){return(s-o)*(t-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(i-a)}function py(n,t){return n.next.i!==t.i&&n.prev.i!==t.i&&!my(n,t)&&(Cr(n,t)&&Cr(t,n)&&gy(n,t)&&(Le(n.prev,n,t.prev)||Le(n,t.prev,t))||ga(n,t)&&Le(n.prev,n,n.next)>0&&Le(t.prev,t,t.next)>0)}function Le(n,t,e){return(t.y-n.y)*(e.x-t.x)-(t.x-n.x)*(e.y-t.y)}function ga(n,t){return n.x===t.x&&n.y===t.y}function nd(n,t,e,i){let s=wo(Le(n,t,e)),r=wo(Le(n,t,i)),o=wo(Le(e,i,n)),a=wo(Le(e,i,t));return!!(s!==r&&o!==a||s===0&&So(n,e,t)||r===0&&So(n,i,t)||o===0&&So(e,n,i)||a===0&&So(e,t,i))}function So(n,t,e){return t.x<=Math.max(n.x,e.x)&&t.x>=Math.min(n.x,e.x)&&t.y<=Math.max(n.y,e.y)&&t.y>=Math.min(n.y,e.y)}function wo(n){return n>0?1:n<0?-1:0}function my(n,t){let e=n;do{if(e.i!==n.i&&e.next.i!==n.i&&e.i!==t.i&&e.next.i!==t.i&&nd(e,e.next,n,t))return!0;e=e.next}while(e!==n);return!1}function Cr(n,t){return Le(n.prev,n,n.next)<0?Le(n,t,n.next)>=0&&Le(n,n.prev,t)>=0:Le(n,t,n.prev)<0||Le(n,n.next,t)<0}function gy(n,t){let e=n,i=!1,s=(n.x+t.x)/2,r=(n.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==n);return i}function id(n,t){let e=new Mc(n.i,n.x,n.y),i=new Mc(t.i,t.x,t.y),s=n.next,r=t.prev;return n.next=t,t.prev=n,e.next=s,s.prev=e,i.next=e,e.prev=i,r.next=i,i.prev=r,i}function Tu(n,t,e,i){let s=new Mc(n,t,e);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function Ir(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Mc(n,t,e){this.i=n,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function xy(n,t,e,i){let s=0;for(let r=t,o=e-i;r<e;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}var Ri=class n{static area(t){let e=t.length,i=0;for(let s=e-1,r=0;r<e;s=r++)i+=t[s].x*t[r].y-t[r].x*t[s].y;return i*.5}static isClockWise(t){return n.area(t)<0}static triangulateShape(t,e){let i=[],s=[],r=[];Au(t),Ru(i,t);let o=t.length;e.forEach(Au);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,Ru(i,e[l]);let a=ey.triangulate(i,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function Au(n){let t=n.length;t>2&&n[t-1].equals(n[0])&&n.pop()}function Ru(n,t){for(let e=0;e<t.length;e++)n.push(t[e].x),n.push(t[e].y)}var sa=class n extends Se{constructor(t=new Zi([new Ct(.5,.5),new Ct(-.5,.5),new Ct(-.5,-.5),new Ct(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let i=this,s=[],r=[];for(let a=0,l=t.length;a<l;a++){let h=t[a];o(h)}this.setAttribute("position",new ie(s,3)),this.setAttribute("uv",new ie(r,2)),this.computeVertexNormals();function o(a){let l=[],h=e.curveSegments!==void 0?e.curveSegments:12,u=e.steps!==void 0?e.steps:1,m=e.depth!==void 0?e.depth:1,d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,c=e.bevelThickness!==void 0?e.bevelThickness:.2,p=e.bevelSize!==void 0?e.bevelSize:c-.1,M=e.bevelOffset!==void 0?e.bevelOffset:0,x=e.bevelSegments!==void 0?e.bevelSegments:3,f=e.extrudePath,b=e.UVGenerator!==void 0?e.UVGenerator:yy,v,_=!1,U,I,w,R;f&&(v=f.getSpacedPoints(u),_=!0,d=!1,U=f.computeFrenetFrames(u,!1),I=new G,w=new G,R=new G),d||(x=0,c=0,p=0,M=0);let y=a.extractPoints(h),g=y.shape,S=y.holes;if(!Ri.isClockWise(g)){g=g.reverse();for(let lt=0,mt=S.length;lt<mt;lt++){let W=S[lt];Ri.isClockWise(W)&&(S[lt]=W.reverse())}}let C=Ri.triangulateShape(g,S),N=g;for(let lt=0,mt=S.length;lt<mt;lt++){let W=S[lt];g=g.concat(W)}function q(lt,mt,W){return mt||console.error("THREE.ExtrudeGeometry: vec does not exist"),lt.clone().addScaledVector(mt,W)}let A=g.length,H=C.length;function V(lt,mt,W){let Et,Mt,et,Rt=lt.x-mt.x,$t=lt.y-mt.y,Ut=W.x-lt.x,B=W.y-lt.y,k=Rt*Rt+$t*$t,pt=Rt*B-$t*Ut;if(Math.abs(pt)>Number.EPSILON){let st=Math.sqrt(k),it=Math.sqrt(Ut*Ut+B*B),nt=mt.x-$t/st,_t=mt.y+Rt/st,ht=W.x-B/it,It=W.y+Ut/it,Pt=((ht-nt)*B-(It-_t)*Ut)/(Rt*B-$t*Ut);Et=nt+Rt*Pt-lt.x,Mt=_t+$t*Pt-lt.y;let bt=Et*Et+Mt*Mt;if(bt<=2)return new Ct(Et,Mt);et=Math.sqrt(bt/2)}else{let st=!1;Rt>Number.EPSILON?Ut>Number.EPSILON&&(st=!0):Rt<-Number.EPSILON?Ut<-Number.EPSILON&&(st=!0):Math.sign($t)===Math.sign(B)&&(st=!0),st?(Et=-$t,Mt=Rt,et=Math.sqrt(k)):(Et=Rt,Mt=$t,et=Math.sqrt(k/2))}return new Ct(Et/et,Mt/et)}let rt=[];for(let lt=0,mt=N.length,W=mt-1,Et=lt+1;lt<mt;lt++,W++,Et++)W===mt&&(W=0),Et===mt&&(Et=0),rt[lt]=V(N[lt],N[W],N[Et]);let ot=[],D,St=rt.concat();for(let lt=0,mt=S.length;lt<mt;lt++){let W=S[lt];D=[];for(let Et=0,Mt=W.length,et=Mt-1,Rt=Et+1;Et<Mt;Et++,et++,Rt++)et===Mt&&(et=0),Rt===Mt&&(Rt=0),D[Et]=V(W[Et],W[et],W[Rt]);ot.push(D),St=St.concat(D)}for(let lt=0;lt<x;lt++){let mt=lt/x,W=c*Math.cos(mt*Math.PI/2),Et=p*Math.sin(mt*Math.PI/2)+M;for(let Mt=0,et=N.length;Mt<et;Mt++){let Rt=q(N[Mt],rt[Mt],Et);Z(Rt.x,Rt.y,-W)}for(let Mt=0,et=S.length;Mt<et;Mt++){let Rt=S[Mt];D=ot[Mt];for(let $t=0,Ut=Rt.length;$t<Ut;$t++){let B=q(Rt[$t],D[$t],Et);Z(B.x,B.y,-W)}}}let K=p+M;for(let lt=0;lt<A;lt++){let mt=d?q(g[lt],St[lt],K):g[lt];_?(w.copy(U.normals[0]).multiplyScalar(mt.x),I.copy(U.binormals[0]).multiplyScalar(mt.y),R.copy(v[0]).add(w).add(I),Z(R.x,R.y,R.z)):Z(mt.x,mt.y,0)}for(let lt=1;lt<=u;lt++)for(let mt=0;mt<A;mt++){let W=d?q(g[mt],St[mt],K):g[mt];_?(w.copy(U.normals[lt]).multiplyScalar(W.x),I.copy(U.binormals[lt]).multiplyScalar(W.y),R.copy(v[lt]).add(w).add(I),Z(R.x,R.y,R.z)):Z(W.x,W.y,m/u*lt)}for(let lt=x-1;lt>=0;lt--){let mt=lt/x,W=c*Math.cos(mt*Math.PI/2),Et=p*Math.sin(mt*Math.PI/2)+M;for(let Mt=0,et=N.length;Mt<et;Mt++){let Rt=q(N[Mt],rt[Mt],Et);Z(Rt.x,Rt.y,m+W)}for(let Mt=0,et=S.length;Mt<et;Mt++){let Rt=S[Mt];D=ot[Mt];for(let $t=0,Ut=Rt.length;$t<Ut;$t++){let B=q(Rt[$t],D[$t],Et);_?Z(B.x,B.y+v[u-1].y,v[u-1].x+W):Z(B.x,B.y,m+W)}}}Y(),X();function Y(){let lt=s.length/3;if(d){let mt=0,W=A*mt;for(let Et=0;Et<H;Et++){let Mt=C[Et];at(Mt[2]+W,Mt[1]+W,Mt[0]+W)}mt=u+x*2,W=A*mt;for(let Et=0;Et<H;Et++){let Mt=C[Et];at(Mt[0]+W,Mt[1]+W,Mt[2]+W)}}else{for(let mt=0;mt<H;mt++){let W=C[mt];at(W[2],W[1],W[0])}for(let mt=0;mt<H;mt++){let W=C[mt];at(W[0]+A*u,W[1]+A*u,W[2]+A*u)}}i.addGroup(lt,s.length/3-lt,0)}function X(){let lt=s.length/3,mt=0;$(N,mt),mt+=N.length;for(let W=0,Et=S.length;W<Et;W++){let Mt=S[W];$(Mt,mt),mt+=Mt.length}i.addGroup(lt,s.length/3-lt,1)}function $(lt,mt){let W=lt.length;for(;--W>=0;){let Et=W,Mt=W-1;Mt<0&&(Mt=lt.length-1);for(let et=0,Rt=u+x*2;et<Rt;et++){let $t=A*et,Ut=A*(et+1),B=mt+Et+$t,k=mt+Mt+$t,pt=mt+Mt+Ut,st=mt+Et+Ut;xt(B,k,pt,st)}}}function Z(lt,mt,W){l.push(lt),l.push(mt),l.push(W)}function at(lt,mt,W){Tt(lt),Tt(mt),Tt(W);let Et=s.length/3,Mt=b.generateTopUV(i,s,Et-3,Et-2,Et-1);At(Mt[0]),At(Mt[1]),At(Mt[2])}function xt(lt,mt,W,Et){Tt(lt),Tt(mt),Tt(Et),Tt(mt),Tt(W),Tt(Et);let Mt=s.length/3,et=b.generateSideWallUV(i,s,Mt-6,Mt-3,Mt-2,Mt-1);At(et[0]),At(et[1]),At(et[3]),At(et[1]),At(et[2]),At(et[3])}function Tt(lt){s.push(l[lt*3+0]),s.push(l[lt*3+1]),s.push(l[lt*3+2])}function At(lt){r.push(lt.x),r.push(lt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,i=this.parameters.options;return vy(e,i,t)}static fromJSON(t,e){let i=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];i.push(a)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new ia[s.type]().fromJSON(s)),new n(i,t.options)}},yy={generateTopUV:function(n,t,e,i,s){let r=t[e*3],o=t[e*3+1],a=t[i*3],l=t[i*3+1],h=t[s*3],u=t[s*3+1];return[new Ct(r,o),new Ct(a,l),new Ct(h,u)]},generateSideWallUV:function(n,t,e,i,s,r){let o=t[e*3],a=t[e*3+1],l=t[e*3+2],h=t[i*3],u=t[i*3+1],m=t[i*3+2],d=t[s*3],c=t[s*3+1],p=t[s*3+2],M=t[r*3],x=t[r*3+1],f=t[r*3+2];return Math.abs(a-u)<Math.abs(o-h)?[new Ct(o,1-l),new Ct(h,1-m),new Ct(d,1-p),new Ct(M,1-f)]:[new Ct(a,1-l),new Ct(u,1-m),new Ct(c,1-p),new Ct(x,1-f)]}};function vy(n,t,e){if(e.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){let r=n[i];e.shapes.push(r.uuid)}else e.shapes.push(n.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var Je=class n extends vc{constructor(t=1,e=0){let i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new n(t.radius,t.detail)}};var ra=class n extends Se{constructor(t=.5,e=1,i=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:o},i=Math.max(3,i),s=Math.max(1,s);let a=[],l=[],h=[],u=[],m=t,d=(e-t)/s,c=new G,p=new Ct;for(let M=0;M<=s;M++){for(let x=0;x<=i;x++){let f=r+x/i*o;c.x=m*Math.cos(f),c.y=m*Math.sin(f),l.push(c.x,c.y,c.z),h.push(0,0,1),p.x=(c.x/e+1)/2,p.y=(c.y/e+1)/2,u.push(p.x,p.y)}m+=d}for(let M=0;M<s;M++){let x=M*(i+1);for(let f=0;f<i;f++){let b=f+x,v=b,_=b+i+1,U=b+i+2,I=b+1;a.push(v,_,I),a.push(_,U,I)}}this.setIndex(a),this.setAttribute("position",new ie(l,3)),this.setAttribute("normal",new ie(h,3)),this.setAttribute("uv",new ie(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},oa=class n extends Se{constructor(t=new Zi([new Ct(0,.5),new Ct(-.5,-.5),new Ct(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let i=[],s=[],r=[],o=[],a=0,l=0;if(Array.isArray(t)===!1)h(t);else for(let u=0;u<t.length;u++)h(t[u]),this.addGroup(a,l,u),a+=l,l=0;this.setIndex(i),this.setAttribute("position",new ie(s,3)),this.setAttribute("normal",new ie(r,3)),this.setAttribute("uv",new ie(o,2));function h(u){let m=s.length/3,d=u.extractPoints(e),c=d.shape,p=d.holes;Ri.isClockWise(c)===!1&&(c=c.reverse());for(let x=0,f=p.length;x<f;x++){let b=p[x];Ri.isClockWise(b)===!0&&(p[x]=b.reverse())}let M=Ri.triangulateShape(c,p);for(let x=0,f=p.length;x<f;x++){let b=p[x];c=c.concat(b)}for(let x=0,f=c.length;x<f;x++){let b=c[x];s.push(b.x,b.y,0),r.push(0,0,1),o.push(b.x,b.y)}for(let x=0,f=M.length;x<f;x++){let b=M[x],v=b[0]+m,_=b[1]+m,U=b[2]+m;i.push(v,_,U),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return _y(e,t)}static fromJSON(t,e){let i=[];for(let s=0,r=t.shapes.length;s<r;s++){let o=e[t.shapes[s]];i.push(o)}return new n(i,t.curveSegments)}};function _y(n,t){if(t.shapes=[],Array.isArray(n))for(let e=0,i=n.length;e<i;e++){let s=n[e];t.shapes.push(s.uuid)}else t.shapes.push(n.uuid);return t}var de=class n extends Se{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),h=0,u=[],m=new G,d=new G,c=[],p=[],M=[],x=[];for(let f=0;f<=i;f++){let b=[],v=f/i,_=0;f===0&&o===0?_=.5/e:f===i&&l===Math.PI&&(_=-.5/e);for(let U=0;U<=e;U++){let I=U/e;m.x=-t*Math.cos(s+I*r)*Math.sin(o+v*a),m.y=t*Math.cos(o+v*a),m.z=t*Math.sin(s+I*r)*Math.sin(o+v*a),p.push(m.x,m.y,m.z),d.copy(m).normalize(),M.push(d.x,d.y,d.z),x.push(I+_,1-v),b.push(h++)}u.push(b)}for(let f=0;f<i;f++)for(let b=0;b<e;b++){let v=u[f][b+1],_=u[f][b],U=u[f+1][b],I=u[f+1][b+1];(f!==0||o>0)&&c.push(v,_,I),(f!==i-1||l<Math.PI)&&c.push(_,U,I)}this.setIndex(c),this.setAttribute("position",new ie(p,3)),this.setAttribute("normal",new ie(M,3)),this.setAttribute("uv",new ie(x,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Ke=class n extends Se{constructor(t=1,e=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);let o=[],a=[],l=[],h=[],u=new G,m=new G,d=new G;for(let c=0;c<=i;c++)for(let p=0;p<=s;p++){let M=p/s*r,x=c/i*Math.PI*2;m.x=(t+e*Math.cos(x))*Math.cos(M),m.y=(t+e*Math.cos(x))*Math.sin(M),m.z=e*Math.sin(x),a.push(m.x,m.y,m.z),u.x=t*Math.cos(M),u.y=t*Math.sin(M),d.subVectors(m,u).normalize(),l.push(d.x,d.y,d.z),h.push(p/s),h.push(c/i)}for(let c=1;c<=i;c++)for(let p=1;p<=s;p++){let M=(s+1)*c+p-1,x=(s+1)*(c-1)+p-1,f=(s+1)*(c-1)+p,b=(s+1)*c+p;o.push(M,x,b),o.push(x,f,b)}this.setIndex(o),this.setAttribute("position",new ie(a,3)),this.setAttribute("normal",new ie(l,3)),this.setAttribute("uv",new ie(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var aa=class n extends Se{constructor(t=new ea(new G(-1,-1,0),new G(-1,1,0),new G(1,1,0)),e=64,i=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:i,radialSegments:s,closed:r};let o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new G,l=new G,h=new Ct,u=new G,m=[],d=[],c=[],p=[];M(),this.setIndex(p),this.setAttribute("position",new ie(m,3)),this.setAttribute("normal",new ie(d,3)),this.setAttribute("uv",new ie(c,2));function M(){for(let v=0;v<e;v++)x(v);x(r===!1?e:0),b(),f()}function x(v){u=t.getPointAt(v/e,u);let _=o.normals[v],U=o.binormals[v];for(let I=0;I<=s;I++){let w=I/s*Math.PI*2,R=Math.sin(w),y=-Math.cos(w);l.x=y*_.x+R*U.x,l.y=y*_.y+R*U.y,l.z=y*_.z+R*U.z,l.normalize(),d.push(l.x,l.y,l.z),a.x=u.x+i*l.x,a.y=u.y+i*l.y,a.z=u.z+i*l.z,m.push(a.x,a.y,a.z)}}function f(){for(let v=1;v<=e;v++)for(let _=1;_<=s;_++){let U=(s+1)*(v-1)+(_-1),I=(s+1)*v+(_-1),w=(s+1)*v+_,R=(s+1)*(v-1)+_;p.push(U,I,R),p.push(I,w,R)}}function b(){for(let v=0;v<=e;v++)for(let _=0;_<=s;_++)h.x=v/e,h.y=_/s,c.push(h.x,h.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new n(new ia[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};var la=class extends li{static get type(){return"MeshToonMaterial"}constructor(t){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.color=new Qt(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Qt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Vu,this.normalScale=new Ct(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};function Eo(n,t,e){return!n||!e&&n.constructor===t?n:typeof t.BYTES_PER_ELEMENT=="number"?new t(n):Array.prototype.slice.call(n)}function My(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var Gs=class{constructor(t,e,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,s=e[i],r=e[i-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=i+2;;){if(s===void 0){if(t<r)break i;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=e[++i],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=e[--i-1],t>=r)break t}o=i,i=0;break e}break n}for(;i<o;){let a=i+o>>>1;t<e[a]?o=a:i=a+1}if(s=e[i],r=e[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=i[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},bc=class extends Gs{constructor(t,e,i,s){super(t,e,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Mh,endingEnd:Mh}}intervalChanged_(t,e,i){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case bh:r=t,a=2*e-i;break;case Sh:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case bh:o=t,l=2*i-e;break;case Sh:o=1,l=i+s[1]-s[0];break;default:o=t-1,l=e}let h=(i-e)*.5,u=this.valueSize;this._weightPrev=h/(e-a),this._weightNext=h/(l-i),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,h=l-a,u=this._offsetPrev,m=this._offsetNext,d=this._weightPrev,c=this._weightNext,p=(i-e)/(s-e),M=p*p,x=M*p,f=-d*x+2*d*M-d*p,b=(1+d)*x+(-1.5-2*d)*M+(-.5+d)*p+1,v=(-1-c)*x+(1.5+c)*M+.5*p,_=c*x-c*M;for(let U=0;U!==a;++U)r[U]=f*o[u+U]+b*o[h+U]+v*o[l+U]+_*o[m+U];return r}},Sc=class extends Gs{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,h=l-a,u=(i-e)/(s-e),m=1-u;for(let d=0;d!==a;++d)r[d]=o[h+d]*m+o[l+d]*u;return r}},wc=class extends Gs{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},kn=class{constructor(t,e,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Eo(e,this.TimeBufferType),this.values=Eo(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:Eo(t.times,Array),values:Eo(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s)}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new wc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Sc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new bc(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Po:e=this.InterpolantFactoryMethodDiscrete;break;case Jl:e=this.InterpolantFactoryMethodLinear;break;case Da:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Po;case this.InterpolantFactoryMethodLinear:return Jl;case this.InterpolantFactoryMethodSmooth:return Da}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]*=t}return this}trim(t,e){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<t;)++r;for(;o!==-1&&i[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&My(s))for(let a=0,l=s.length;a!==l;++a){let h=s[a];if(isNaN(h)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,h),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Da,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,h=t[a],u=t[a+1];if(h!==u&&(a!==1||h!==t[0]))if(s)l=!0;else{let m=a*i,d=m-i,c=m+i;for(let p=0;p!==i;++p){let M=e[m+p];if(M!==e[d+p]||M!==e[c+p]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let m=a*i,d=o*i;for(let c=0;c!==i;++c)e[d+c]=e[m+c]}++o}}if(r>0){t[o]=t[r];for(let a=r*i,l=o*i,h=0;h!==i;++h)e[l+h]=e[a+h];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,s=new i(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};kn.prototype.TimeBufferType=Float32Array;kn.prototype.ValueBufferType=Float32Array;kn.prototype.DefaultInterpolation=Jl;var Ki=class extends kn{constructor(t,e,i){super(t,e,i)}};Ki.prototype.ValueTypeName="bool";Ki.prototype.ValueBufferType=Array;Ki.prototype.DefaultInterpolation=Po;Ki.prototype.InterpolantFactoryMethodLinear=void 0;Ki.prototype.InterpolantFactoryMethodSmooth=void 0;var Ec=class extends kn{};Ec.prototype.ValueTypeName="color";var Tc=class extends kn{};Tc.prototype.ValueTypeName="number";var Ac=class extends Gs{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-e)/(s-e),h=t*a;for(let u=h+a;h!==u;h+=4)Wn.slerpFlat(r,0,o,h-a,o,h,l);return r}},ca=class extends kn{InterpolantFactoryMethodLinear(t){return new Ac(this.times,this.values,this.getValueSize(),t)}};ca.prototype.ValueTypeName="quaternion";ca.prototype.InterpolantFactoryMethodSmooth=void 0;var ji=class extends kn{constructor(t,e,i){super(t,e,i)}};ji.prototype.ValueTypeName="string";ji.prototype.ValueBufferType=Array;ji.prototype.DefaultInterpolation=Po;ji.prototype.InterpolantFactoryMethodLinear=void 0;ji.prototype.InterpolantFactoryMethodSmooth=void 0;var Rc=class extends kn{};Rc.prototype.ValueTypeName="vector";var Cc=class{constructor(t,e,i){let s=this,r=!1,o=0,a=0,l,h=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,m){return h.push(u,m),this},this.removeHandler=function(u){let m=h.indexOf(u);return m!==-1&&h.splice(m,2),this},this.getHandler=function(u){for(let m=0,d=h.length;m<d;m+=2){let c=h[m],p=h[m+1];if(c.global&&(c.lastIndex=0),c.test(u))return p}return null}}},by=new Cc,Ic=class{constructor(t){this.manager=t!==void 0?t:by,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let i=this;return new Promise(function(s,r){i.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};Ic.DEFAULT_MATERIAL_NAME="__DEFAULT";var ha=class extends Pe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Qt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},ua=class extends ha{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Pe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Qt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},ul=new ge,Cu=new G,Iu=new G,Pc=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ct(512,512),this.map=null,this.mapPass=null,this.matrix=new ge,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new vr,this._frameExtents=new Ct(1,1),this._viewportCount=1,this._viewports=[new Ne(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,i=this.matrix;Cu.setFromMatrixPosition(t.matrixWorld),e.position.copy(Cu),Iu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Iu),e.updateMatrixWorld(),ul.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ul),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(ul)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var Lc=class extends Pc{constructor(){super(new $o(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},da=class extends ha{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Pe.DEFAULT_UP),this.updateMatrix(),this.target=new Pe,this.shadow=new Lc}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var qc="\\[\\]\\.:\\/",Sy=new RegExp("["+qc+"]","g"),Yc="[^"+qc+"]",wy="[^"+qc.replace("\\.","")+"]",Ey=/((?:WC+[\/:])*)/.source.replace("WC",Yc),Ty=/(WCOD+)?/.source.replace("WCOD",wy),Ay=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Yc),Ry=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Yc),Cy=new RegExp("^"+Ey+Ty+Ay+Ry+"$"),Iy=["material","materials","bones","map"],Dc=class{constructor(t,e,i){let s=i||Ie.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},Ie=class n{constructor(t,e,i){this.path=e,this.parsedPath=i||n.parseTrackName(e),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new n.Composite(t,e,i):new n(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Sy,"")}static parseTrackName(t){let e=Cy.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);Iy.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=i(a.children);if(l)return l}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)t[e++]=i[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=n.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let h=e.objectIndex;switch(i){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===h){h=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(h!==void 0){if(t[h]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[h]}}let o=t[s];if(o===void 0){let h=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+h+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ie.Composite=Dc;Ie.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ie.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ie.prototype.GetterByBindingType=[Ie.prototype._getValue_direct,Ie.prototype._getValue_array,Ie.prototype._getValue_arrayElement,Ie.prototype._getValue_toArray];Ie.prototype.SetterByBindingTypeAndVersioning=[[Ie.prototype._setValue_direct,Ie.prototype._setValue_direct_setNeedsUpdate,Ie.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ie.prototype._setValue_array,Ie.prototype._setValue_array_setNeedsUpdate,Ie.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ie.prototype._setValue_arrayElement,Ie.prototype._setValue_arrayElement_setNeedsUpdate,Ie.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ie.prototype._setValue_fromArray,Ie.prototype._setValue_fromArray_setNeedsUpdate,Ie.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Lv=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:kc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=kc);var Py=2.3,ke=7.2,xa=.16,Li=(n,t,e)=>{let i=Math.max(0,Math.min(1,(e-n)/(t-n)));return i*i*(3-2*i)};function sd(n,t,e){let i=n.points,s=i.length-1,r=n.lengthM/s,o=K=>{let Y=Math.max(0,Math.min(s,K/r)),X=Math.min(s-1,Math.floor(Y)),$=Y-X,Z=i[Math.max(0,X-1)],at=i[X],xt=i[X+1],Tt=i[Math.min(s,X+2)],At=lt=>.5*(2*at[lt]+(-Z[lt]+xt[lt])*$+(2*Z[lt]-5*at[lt]+4*xt[lt]-Tt[lt])*$*$+(-Z[lt]+3*at[lt]-3*xt[lt]+Tt[lt])*$*$*$);return[At(0),At(2),at[1]+(xt[1]-at[1])*$]},a=K=>{if(K<=n.lengthM)return o(K);let Y=o(n.lengthM-20),X=o(n.lengthM),$=(K-n.lengthM)/20;return[X[0]+(X[0]-Y[0])*$,X[1]+(X[1]-Y[1])*$,X[2]]},l=2700,h=2585,u=n.overlaps.filter(([K,Y])=>Y>K).sort((K,Y)=>K[1]-Y[1]),m=K=>{for(let $=0;$<u.length-1;$++){let[Z,at]=u[$],[xt,Tt]=u[$+1];if(K<=Tt)return Z+(K-at)*(xt-Z)/(Tt-at)}let[Y,X]=u.at(-1);return Y+(K-X)},d=[];for(let K=0;K<=l;K+=2)d.push([K,...o(K)]);let c=2600,p=4900,M=[];for(let K=c;K<=p;K+=10){let Y=o(K),X=m(K),$=X,Z=1e9;for(let at of d){if(Math.abs(at[0]-X)>60)continue;let xt=(at[1]-Y[0])**2+(at[2]-Y[1])**2;xt<Z&&(Z=xt,$=at[0])}M.push($)}let x=M.map((K,Y)=>{let X=0,$=0;for(let Z=-3;Z<=3;Z++){let at=Y+Z;at>=0&&at<M.length&&(X+=M[at],$++)}return X/$});for(let K=1;K<x.length;K++)x[K]=Math.max(x[K],x[K-1]+.5);let f=K=>{let Y=(K-c)/10,X=Math.max(0,Math.min(x.length-2,Math.floor(Y))),$=Y-X;return x[X]+(x[X+1]-x[X])*$},b={};for(let K of e?.runners||[])K.diversions&&(b[K.id]=K.diversions.map(Y=>{let X=Y.path,$=[0];for(let Z=1;Z<X.length;Z++)$.push($[Z-1]+Math.hypot(X[Z][0]-X[Z-1][0],X[Z][1]-X[Z-1][1]));return{...Y,cum:$,len:$.at(-1)}}));let v=(K,Y)=>{let X=Math.max(0,Math.min(1,(Y-K.fromM)/(K.toM-K.fromM)))*K.len,$=0;for(;$<K.cum.length-2&&K.cum[$+1]<X;)$++;let Z=(X-K.cum[$])/Math.max(1e-6,K.cum[$+1]-K.cum[$]);return[K.path[$][0]+(K.path[$+1][0]-K.path[$][0])*Z,K.path[$][1]+(K.path[$+1][1]-K.path[$][1])*Z]};function _(K){if(K<c-60){let Z=a(K);return[Z[0],Z[1]]}let Y=a(K);if(K>=p+40)return[Y[0],Y[1]];let X=Li(c-60,c+60,K)*(1-Li(p-60,p,K));if(X<=0)return[Y[0],Y[1]];let $=o(Math.min(l,f(Math.max(c,Math.min(p,K)))));return[Y[0]+($[0]-Y[0])*X,Y[1]+($[1]-Y[1])*X]}function U(K,Y){let X=_(K),$=Y&&b[Y];if($){for(let Z of $)if(K>Z.fromM&&K<Z.toM){let at=Li(Z.fromM,Z.fromM+30,K)*(1-Li(Z.toM-30,Z.toM,K)),xt=v(Z,K);return X=[X[0]+(xt[0]-X[0])*at,X[1]+(xt[1]-X[1])*at],{x:X[0],z:X[1],div:at,divInfo:Z}}}return{x:X[0],z:X[1],div:0,divInfo:null}}let[I,w,R,y]=t.bounds,g={x0:I-60,z0:w-60,cell:5};g.nx=Math.ceil((R+60-g.x0)/g.cell)+1,g.nz=Math.ceil((y+60-g.z0)/g.cell)+1,g.h=new Float32Array(g.nx*g.nz);let S=[];for(let K=0;K<=s;K+=2)S.push(i[K]);let T=0;for(let K of S)T+=K[1];T/=S.length;let C=(K,Y)=>Math.sin(K*.011+1.3)*Math.cos(Y*.009-.4)*2.2+Math.sin(K*.027+Y*.019)*.9;for(let K=0;K<g.nz;K++)for(let Y=0;Y<g.nx;Y++){let X=g.x0+Y*g.cell,$=g.z0+K*g.cell,Z=0,at=0,xt=1e9;for(let lt of S){let mt=(lt[0]-X)**2+(lt[2]-$)**2;mt<xt&&(xt=mt);let W=1/(mt+400),Et=W*W;Z+=Et,at+=Et*lt[1]}let Tt=Li(30,160,Math.sqrt(xt)),At=at/Z*(1-Tt*.4)+T*Tt*.4+C(X,$)*Tt;g.h[K*g.nx+Y]=At*Py}let N=t.features.filter(K=>K.closed&&["water","track","tennis","pitch"].includes(K.kind)&&K.pts.length>3);for(let K of N){let Y=ui(K.pts),X=[];for(let at=Math.max(0,Math.floor((Y[1]-12-g.z0)/g.cell));at<=Math.min(g.nz-1,Math.ceil((Y[3]+12-g.z0)/g.cell));at++)for(let xt=Math.max(0,Math.floor((Y[0]-12-g.x0)/g.cell));xt<=Math.min(g.nx-1,Math.ceil((Y[2]+12-g.x0)/g.cell));xt++){let Tt=g.x0+xt*g.cell,At=g.z0+at*g.cell,lt=Lr(K.pts,Tt,At);lt<12&&X.push([at*g.nx+xt,lt])}let $=0,Z=0;for(let[at,xt]of X)xt<0&&($+=g.h[at],Z++);if(Z){$/=Z,K.kind==="water"&&($=Math.min(...X.filter(at=>at[1]<0).map(at=>g.h[at[0]]))-.2),K._level=$;for(let[at,xt]of X){let Tt=1-Li(0,12,xt);g.h[at]=g.h[at]*(1-Tt)+$*Tt-(K.kind==="water"?1.6*(1-Li(-6,0,xt)):0)}}}{for(let At=0;At<3;At++){let lt=new Float32Array(g.h);for(let mt=1;mt<g.nz-1;mt++)for(let W=1;W<g.nx-1;W++){let Et=mt*g.nx+W;lt[Et]=(g.h[Et]*4+g.h[Et-1]+g.h[Et+1]+g.h[Et-g.nx]+g.h[Et+g.nx])/8}g.h.set(lt)}let K=new Float32Array(g.nx*g.nz).fill(1e9),Y=new Float32Array(g.nx*g.nz),X=new Float32Array(g.nx*g.nz),$=(At,lt)=>g.h[lt*g.nx+At],Z=(At,lt)=>{let mt=Math.round((At-g.x0)/g.cell),W=Math.round((lt-g.z0)/g.cell);return $(Math.max(0,Math.min(g.nx-1,mt)),Math.max(0,Math.min(g.nz-1,W)))},at=[[0,h],[2540,2690],[p-80,n.lengthM+45]],xt=[];for(let[At,lt]of at)for(let mt=At;mt<=lt;mt+=2){let W=_(mt);xt.push([W[0],W[1],Z(W[0],W[1])])}for(let At=0;At<4;At++)for(let lt=1;lt<xt.length-1;lt++)xt[lt][2]=(xt[lt-1][2]+xt[lt][2]*2+xt[lt+1][2])/4;let Tt=ke/2+7;for(let[At,lt,mt]of xt){let W=Math.floor((At-Tt-g.x0)/g.cell),Et=Math.ceil((At+Tt-g.x0)/g.cell),Mt=Math.floor((lt-Tt-g.z0)/g.cell),et=Math.ceil((lt+Tt-g.z0)/g.cell);for(let Rt=Math.max(0,Mt);Rt<=Math.min(g.nz-1,et);Rt++)for(let $t=Math.max(0,W);$t<=Math.min(g.nx-1,Et);$t++){let Ut=Math.hypot(g.x0+$t*g.cell-At,g.z0+Rt*g.cell-lt);if(Ut>Tt)continue;let B=Rt*g.nx+$t,k=(1-Ut/Tt)**2;Y[B]+=k,X[B]+=k*mt,Ut<K[B]&&(K[B]=Ut)}}for(let At=0;At<K.length;At++)if(K[At]<Tt&&Y[At]>0){let lt=1-Li(ke/2+.5,Tt,K[At]);g.h[At]=g.h[At]*(1-lt)+X[At]/Y[At]*lt}g.pathSamples=xt}let q=N.filter(K=>K.kind==="water").sort((K,Y)=>Y.pts.length-K.pts.length)[0];function A(K,Y){let X=(K-g.x0)/g.cell,$=(Y-g.z0)/g.cell,Z=Math.max(0,Math.min(g.nx-2,Math.floor(X))),at=Math.max(0,Math.min(g.nz-2,Math.floor($))),xt=Math.max(0,Math.min(1,X-Z)),Tt=Math.max(0,Math.min(1,$-at)),At=g.h[at*g.nx+Z],lt=g.h[at*g.nx+Z+1],mt=g.h[(at+1)*g.nx+Z],W=g.h[(at+1)*g.nx+Z+1];return xt+Tt<=1?At+(lt-At)*xt+(mt-At)*Tt:W+(mt-W)*(1-xt)+(lt-W)*(1-Tt)}let H=new G;function V(K,Y,X={}){let $=U(K,Y),Z=Math.max(0,K-4),at=Z+8,xt=U(Z,Y),Tt=U(at,Y),At=Tt.x-xt.x,lt=Tt.z-xt.z,mt=Math.hypot(At,lt)||1;return At/=mt,lt/=mt,X.x=$.x,X.z=$.z,X.y=A($.x,$.z)+xa,X.tx=At,X.tz=lt,X.rx=-lt,X.rz=At,X.slope=(A(Tt.x,Tt.z)-A(xt.x,xt.z))/Math.max(1,mt),X.div=$.div,X.divInfo=$.divInfo,X}function rt(K,Y=25){let X=Math.max(0,K-Y),$=_(X),Z=_(X+2*Y),at=Math.hypot(Z[0]-$[0],Z[1]-$[1])||1;return H.set((Z[0]-$[0])/at,0,(Z[1]-$[1])/at).clone()}let ot=[{from:0,to:h,lift:0},{from:2540,to:2690,lift:.02},{from:p-80,to:n.lengthM+45,lift:.035}],D=n.lengthM;return{P:i,raw:o,rawExt:a,baseXZ:_,LAP1_END_DRAW:h,xzAt:U,sample:V,heading:rt,heightAt:A,terrain:g,ribbons:ot,finishM:D,lake:q,flat:N,geoOf:K=>K>=c&&K<=p?f(K):K,diversions:b,LAP1_END:l,MAP_FROM:c,MAP_TO:p}}function ui(n){let t=[1e9,1e9,-1e9,-1e9];for(let e of n)t[0]=Math.min(t[0],e[0]),t[1]=Math.min(t[1],e[1]),t[2]=Math.max(t[2],e[0]),t[3]=Math.max(t[3],e[1]);return t}function ya(n,t,e){let i=!1;for(let s=0,r=n.length-1;s<n.length;r=s++){let[o,a]=n[s],[l,h]=n[r];a>e!=h>e&&t<(l-o)*(e-a)/(h-a)+o&&(i=!i)}return i}function Lr(n,t,e){let i=1e9;for(let s=0,r=n.length-1;s<n.length;r=s++){let[o,a]=n[r],[l,h]=n[s],u=l-o,m=h-a,d=u*u+m*m||1,c=Math.max(0,Math.min(1,((t-o)*u+(e-a)*m)/d));i=Math.min(i,Math.hypot(t-o-u*c,e-a-m*c))}return ya(n,t,e)?-i:i}function gn(n,t=!1){let e=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},o={},a=n[0].morphTargetsRelative,l=new Se,h=0;for(let u=0;u<n.length;++u){let m=n[u],d=0;if(e!==(m.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let c in m.attributes){if(!i.has(c))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+c+'" attribute exists among all geometries, or in none of them.'),null;r[c]===void 0&&(r[c]=[]),r[c].push(m.attributes[c]),d++}if(d!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==m.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let c in m.morphAttributes){if(!s.has(c))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[c]===void 0&&(o[c]=[]),o[c].push(m.morphAttributes[c])}if(t){let c;if(e)c=m.index.count;else if(m.attributes.position!==void 0)c=m.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(h,c,u),h+=c}}if(e){let u=0,m=[];for(let d=0;d<n.length;++d){let c=n[d].index;for(let p=0;p<c.count;++p)m.push(c.getX(p)+u);u+=n[d].attributes.position.count}l.setIndex(m)}for(let u in r){let m=rd(r[u]);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,m)}for(let u in o){let m=o[u][0].length;if(m===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let d=0;d<m;++d){let c=[];for(let M=0;M<o[u].length;++M)c.push(o[u][M][d]);let p=rd(c);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(p)}}return l}function rd(n){let t,e,i,s=-1,r=0;for(let h=0;h<n.length;++h){let u=n[h];if(t===void 0&&(t=u.array.constructor),t!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=u.itemSize),e!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=u.normalized),i!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*e}let o=new t(r),a=new De(o,e,i),l=0;for(let h=0;h<n.length;++h){let u=n[h];if(u.isInterleavedBufferAttribute){let m=l/e;for(let d=0,c=u.count;d<c;d++)for(let p=0;p<e;p++){let M=u.getComponent(d,p);a.setComponent(d+m,p,M)}}else o.set(u.array,l);l+=u.count*e}return s!==void 0&&(a.gpuType=s),a}var Dr=new G;function En(n,t,e,i,s,r){let o=2*Math.PI*s/4,a=Math.max(r-2*s,0),l=Math.PI/4;Dr.copy(t),Dr[i]=0,Dr.normalize();let h=.5*o/(o+a),u=1-Dr.angleTo(n)/l;return Math.sign(Dr[e])===1?u*h:a/(o+a)+h+h*(1-u)}var he=class extends we{constructor(t=1,e=1,i=1,s=2,r=.1){if(s=s*2+1,r=Math.min(t/2,e/2,i/2,r),super(1,1,1,s,s,s),s===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let a=new G,l=new G,h=new G(t,e,i).divideScalar(2).subScalar(r),u=this.attributes.position.array,m=this.attributes.normal.array,d=this.attributes.uv.array,c=u.length/6,p=new G,M=.5/s;for(let x=0,f=0;x<u.length;x+=3,f+=2)switch(a.fromArray(u,x),l.copy(a),l.x-=Math.sign(l.x)*M,l.y-=Math.sign(l.y)*M,l.z-=Math.sign(l.z)*M,l.normalize(),u[x+0]=h.x*Math.sign(a.x)+l.x*r,u[x+1]=h.y*Math.sign(a.y)+l.y*r,u[x+2]=h.z*Math.sign(a.z)+l.z*r,m[x+0]=l.x,m[x+1]=l.y,m[x+2]=l.z,Math.floor(x/c)){case 0:p.set(1,0,0),d[f+0]=En(p,l,"z","y",r,i),d[f+1]=1-En(p,l,"y","z",r,e);break;case 1:p.set(-1,0,0),d[f+0]=1-En(p,l,"z","y",r,i),d[f+1]=1-En(p,l,"y","z",r,e);break;case 2:p.set(0,1,0),d[f+0]=1-En(p,l,"x","z",r,t),d[f+1]=En(p,l,"z","x",r,i);break;case 3:p.set(0,-1,0),d[f+0]=1-En(p,l,"x","z",r,t),d[f+1]=1-En(p,l,"z","x",r,i);break;case 4:p.set(0,0,1),d[f+0]=1-En(p,l,"x","y",r,t),d[f+1]=1-En(p,l,"y","x",r,e);break;case 5:p.set(0,0,-1),d[f+0]=En(p,l,"x","y",r,t),d[f+1]=1-En(p,l,"y","x",r,e);break}}};var Di=null;function Ly(){if(Di)return Di;let n=[118,172,228,255],t=new Uint8Array(n.length*4);return n.forEach((e,i)=>t.set([e,e,e,255],i*4)),Di=new br(t,n.length,1,_n),Di.minFilter=Di.magFilter=ln,Di.generateMipmaps=!1,Di.needsUpdate=!0,Di}var kr=new Map;function gt(n,t={}){let e=typeof n=="number"||typeof n=="string"?`${n}|${JSON.stringify(t)}`:null;if(e&&!t.map&&kr.has(e))return kr.get(e);let i=new la({color:new Qt(n??16777215),gradientMap:Ly(),...t});return e&&!t.map&&kr.set(e,i),i}function od(){for(let n of kr.values())n.dispose();kr.clear(),Ur.forEach(n=>n.dispose()),Ur.clear()}var Zc={uRes:{value:new Ct(1920,1080)}},Ur=new Map;function Dy(n=3,t=1709088,e=14){let i=`${n}|${t}|${e}`;if(Ur.has(i))return Ur.get(i);let s=new cn({uniforms:{...Gc.clone(zt.fog),uRes:Zc.uRes,uWidth:{value:n},uRef:{value:e},uColor:{value:new Qt(t)}},vertexShader:`
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
      }`,side:Ze,fog:!0});return Ur.set(i,s),s}function Jc(n){if(n.getAttribute("onormal"))return n;n.getAttribute("normal")||n.computeVertexNormals();let t=n.getAttribute("position"),e=n.getAttribute("normal"),i=new Map,s=a=>`${Math.round(t.getX(a)*1e3)},${Math.round(t.getY(a)*1e3)},${Math.round(t.getZ(a)*1e3)}`,r=[];for(let a=0;a<t.count;a++){let l=s(a),h=i.get(l);h||(h=[0,0,0],i.set(l,h)),h[0]+=e.getX(a),h[1]+=e.getY(a),h[2]+=e.getZ(a),r.push(h)}let o=new Float32Array(t.count*3);for(let a=0;a<t.count;a++){let l=r[a],h=Math.hypot(l[0],l[1],l[2])||1;o[a*3]=l[0]/h,o[a*3+1]=l[1]/h,o[a*3+2]=l[2]/h}return n.setAttribute("onormal",new De(o,3)),n}function Qi(n,t=3,e,i){Jc(n.geometry);let s=Dy(t,e,i),r;return n.isInstancedMesh?(r=new mn(n.geometry,s,n.count),r.instanceMatrix=n.instanceMatrix,r.count=n.count,n.frustumCulled&&n.boundingSphere?(r.boundingSphere=n.boundingSphere,r.frustumCulled=!0):(r.frustumCulled=!1,n.frustumCulled=!1),n.userData.outline=r):(r=new Ce(n.geometry,s),r.frustumCulled=n.frustumCulled),r.castShadow=!1,r.receiveShadow=!1,r.userData.isOutline=!0,r.renderOrder=n.renderOrder,n.add(r),r}function xe(n,t,{cast:e=!0,receive:i=!0,ol:s=0,olColor:r,olRef:o}={}){let a=new Ce(n,t);return a.castShadow=e,a.receiveShadow=i,s&&Qi(a,s,r,o),a}function nn(n,t,e,{repeat:i=!1,srgb:s=!0,aniso:r=8}={}){let o=document.createElement("canvas");o.width=n,o.height=t;let a=o.getContext("2d");e(a,n,t);let l=new Vs(o);return s&&(l.colorSpace=qe),i&&(l.wrapS=l.wrapT=Xi),l.anisotropy=r,l}var Kc='"Lilita One", "Arial Black", "Arial Rounded MT Bold", Impact, sans-serif',Xt=Un(20240817);function Un(n){return()=>{n|=0,n=n+1831565813|0;let t=Math.imul(n^n>>>15,1|n);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function di(n,t,e,i){let s=nn(n,t,e);return document.fonts&&document.fonts.load&&document.fonts.load('64px "Lilita One"').then(()=>{let r=s.image.getContext("2d");r.clearRect(0,0,n,t),e(r,n,t),s.needsUpdate=!0}).catch(()=>{}),i?.push(s),s}function je(n,t,e,i,s,r="#fff",o="#1a1420",a=.16,l="center"){n.font=`${s}px ${Kc}`,n.textAlign=l,n.textBaseline="middle",n.lineJoin="round",n.lineWidth=s*a,n.strokeStyle=o,n.strokeText(t,e,i),n.fillStyle=r,n.fillText(t,e,i)}function ld(n,t,e){let{course:i,park:s,hasFunfair:r}=e,o=[],a=new re;n.add(a);let l=P=>(a.add(P),P),h=t.terrain,u=(h.nx-1)*h.cell,m=(h.nz-1)*h.cell,d=new Map,c=6,p=(P,L)=>`${Math.floor(P/c)},${Math.floor(L/c)}`,M=(P,L,Q)=>{let E=p(P,L),F=d.get(E);F||d.set(E,F=[]),F.push([P,L,Q])},x=(P,L,Q)=>{let E=Math.floor(P/c),F=Math.floor(L/c),z=Math.ceil((Q+30)/c);for(let j=-z;j<=z;j++)for(let ct=-z;ct<=z;ct++){let J=d.get(`${E+j},${F+ct}`);if(J){for(let[tt,ft,wt]of J)if((tt-P)**2+(ft-L)**2<(wt+Q)**2)return!1}}return!0},f=[];for(let P of t.ribbons)for(let L=P.from;L<=P.to;L+=3){let Q=t.baseXZ(L);f.push(Q),M(Q[0],Q[1],ke/2+1.5)}for(let P in t.diversions)for(let L of t.diversions[P])for(let Q of L.path)M(Q[0],Q[1],4);let b=s.features.filter(P=>P.kind==="park").sort((P,L)=>L.pts.length-P.pts.length)[0].pts,v=(P,L)=>ya(b,P,L),U=s.features.filter(P=>P.closed&&["water","track","tennis","pitch","playground","building"].includes(P.kind)).map(P=>[ui(P.pts),P]),I=(P,L,Q=2)=>U.some(([E,F])=>P>E[0]-Q&&P<E[2]+Q&&L>E[1]-Q&&L<E[3]+Q&&Lr(F.pts,P,L)<Q),w=1.7,R=nn(Math.round(u*w),Math.round(m*w),(P,L,Q)=>y(P,L,Q),{aniso:8});o.push(R);function y(P,L,Q){let E=J=>(J-h.x0)*w,F=J=>(J-h.z0)*w,z=(J,tt=!0)=>{P.beginPath(),J.forEach((ft,wt)=>wt?P.lineTo(E(ft[0]),F(ft[1])):P.moveTo(E(ft[0]),F(ft[1]))),tt&&P.closePath()};P.fillStyle="#d8d2c2",P.fillRect(0,0,L,Q);for(let J=0;J<9e3;J++)P.fillStyle=Xt()<.5?"#cfc8b6":"#e2dccd",P.fillRect(Xt()*L,Xt()*Q,3,3);z(b),P.fillStyle="#66cf45",P.fill(),P.save(),z(b),P.clip(),P.translate(L/2,Q/2),P.rotate(-.62);for(let J=-2e3;J<2e3;J+=2*14*w)P.fillStyle="rgba(255,255,140,0.10)",P.fillRect(J,-2500,14*w,5e3);P.setTransform(1,0,0,1,0,0);for(let J=0;J<26e3;J++){let tt=Xt()*L,ft=Xt()*Q;P.fillStyle=Xt()<.6?"rgba(40,140,40,0.35)":"rgba(190,255,120,0.35)",P.fillRect(tt,ft,2+Xt()*2,2+Xt()*3)}P.restore();let j=(J,tt,ft)=>{for(let wt of s.features)wt.kind===J&&wt.closed&&(z(wt.pts),P.fillStyle=tt,P.fill(),ft&&(P.strokeStyle=ft,P.lineWidth=2,P.stroke()))};j("grass","#72d64e"),j("garden","#86dc5c"),j("wood","#3f9e3a"),j("scrub","#5cb544");for(let J of s.features)if(J.kind==="pitch"&&J.closed){P.save(),z(J.pts),P.clip(),P.fillStyle="#5ccc3f",P.fill();let tt=ui(J.pts);for(let ft=tt[0];ft<tt[2];ft+=8)P.fillStyle="rgba(255,255,255,0.10)",P.fillRect(E(ft),F(tt[1]),4*w,(tt[3]-tt[1])*w);P.restore(),z(J.pts),P.strokeStyle="#ffffff",P.lineWidth=2.2,P.stroke()}j("playground","#ffa25a","#e07a35");for(let J of s.features)if(J.kind==="playground"&&J.closed){let tt=ui(J.pts);for(let ft=0;ft<6;ft++)P.beginPath(),P.arc(E(tt[0]+Xt()*(tt[2]-tt[0])),F(tt[1]+Xt()*(tt[3]-tt[1])),3*w,0,7),P.fillStyle=["#ffd93b","#57c7ff","#ff6f91"][ft%3],P.fill()}for(let J of s.features)if(J.kind==="track"&&J.closed){P.save(),z(J.pts),P.clip(),P.fillStyle="#5ccc3f",P.fill();let tt=11*w;for(let ft=6;ft>=0;ft--){let wt=ft/6*tt;z(J.pts),P.lineJoin="round",P.strokeStyle="#ffffff",P.lineWidth=2*wt+2.4,P.stroke(),P.strokeStyle="#e2523a",P.lineWidth=Math.max(0,2*wt-2.4),ft>0&&P.stroke()}P.restore(),z(J.pts),P.strokeStyle="#ffffff",P.lineWidth=3,P.stroke()}for(let J of s.features)if(J.kind==="tennis"&&J.closed){z(J.pts),P.fillStyle="#3f9fd1",P.fill(),P.strokeStyle="#ffffff",P.lineWidth=2.5,P.stroke();let tt=ad(J.pts),ft=ui(J.pts);P.save(),z(J.pts),P.clip(),P.strokeStyle="rgba(255,255,255,0.9)",P.lineWidth=1.5,P.beginPath(),P.moveTo(E(tt[0]),F(ft[1])),P.lineTo(E(tt[0]),F(ft[3])),P.stroke(),P.restore()}for(let J of s.features)J.kind==="water"&&J.closed&&(z(J.pts),P.strokeStyle="#f4efe0",P.lineWidth=3.4*w,P.lineJoin="round",P.stroke(),P.fillStyle="#2f8fe0",P.fill());for(let J of s.features)J.kind==="path"&&(z(J.pts,!1),P.lineCap="round",P.lineJoin="round",P.strokeStyle="#c9ad78",P.lineWidth=3.6*w,P.stroke());for(let J of s.features)J.kind==="path"&&(z(J.pts,!1),P.strokeStyle="#ecd8a6",P.lineWidth=2.6*w,P.stroke());let ct=J=>({primary:15,secondary:12,tertiary:11,residential:8,unclassified:8,service:5,trunk:16})[J.tags?.highway]||7;for(let J of s.features)J.kind==="road"&&(z(J.pts,J.closed),P.lineCap="round",P.lineJoin="round",P.strokeStyle="#ece6d6",P.lineWidth=(ct(J)+4)*w,P.stroke());for(let J of s.features)J.kind==="road"&&(z(J.pts,J.closed),P.strokeStyle="#7f8597",P.lineWidth=ct(J)*w,P.stroke());for(let J of s.features)J.kind==="road"&&ct(J)>=11&&(z(J.pts,!1),P.setLineDash([5*w,5*w]),P.strokeStyle="#f4f1e6",P.lineWidth=.5*w,P.stroke(),P.setLineDash([]));for(let J of s.features)J.kind==="rail"&&(z(J.pts,!1),P.strokeStyle="#9b8f84",P.lineWidth=5*w,P.stroke());for(let J of s.features)J.kind==="rail"&&(z(J.pts,!1),P.setLineDash([1,2]),P.strokeStyle="#5b4f46",P.lineWidth=3*w,P.stroke(),P.setLineDash([]),z(J.pts,!1),P.strokeStyle="#c9ccd6",P.lineWidth=.8,P.stroke());for(let J of s.features)J.kind==="building"&&J.closed&&(z(J.pts),P.fillStyle="#9c968a",P.fill());for(let J in t.diversions)for(let tt of t.diversions[J])P.beginPath(),tt.path.forEach((ft,wt)=>wt?P.lineTo(E(ft[0]),F(ft[1])):P.moveTo(E(ft[0]),F(ft[1]))),P.lineCap="round",P.lineJoin="round",P.strokeStyle="rgba(196,160,96,0.85)",P.lineWidth=4*w,P.stroke(),P.setLineDash([2*w,3*w]),P.strokeStyle="rgba(255,240,200,0.8)",P.lineWidth=.6*w,P.stroke(),P.setLineDash([])}{let P=h.nx*h.nz,L=new Float32Array(P*3),Q=new Float32Array(P*2);for(let wt=0;wt<h.nz;wt++)for(let Ot=0;Ot<h.nx;Ot++){let Nt=wt*h.nx+Ot;L[Nt*3]=h.x0+Ot*h.cell,L[Nt*3+1]=h.h[Nt],L[Nt*3+2]=h.z0+wt*h.cell,Q[Nt*2]=Ot/(h.nx-1),Q[Nt*2+1]=1-wt/(h.nz-1)}let E=new Uint32Array((h.nx-1)*(h.nz-1)*6),F=0;for(let wt=0;wt<h.nz-1;wt++)for(let Ot=0;Ot<h.nx-1;Ot++){let Nt=wt*h.nx+Ot,Bt=Nt+1,Wt=Nt+h.nx,ae=Wt+1;E[F++]=Nt,E[F++]=Wt,E[F++]=Bt,E[F++]=Bt,E[F++]=Wt,E[F++]=ae}let z=new Se;z.setAttribute("position",new De(L,3)),z.setAttribute("uv",new De(Q,2)),z.setIndex(new De(E,1)),z.computeVertexNormals();let j=gt(16777215,{map:R}),ct=nn(256,256,(wt,Ot,Nt)=>{wt.fillStyle="#808080",wt.fillRect(0,0,Ot,Nt);for(let Bt=0;Bt<1800;Bt++){let Wt=100+Math.floor(Xt()*70);wt.fillStyle=`rgb(${Wt},${Wt},${Wt})`;let ae=Xt()*Ot,Ee=Xt()*Nt;wt.fillRect(ae,Ee,2,3+Xt()*5)}for(let Bt=0;Bt<500;Bt++)wt.fillStyle="rgba(255,255,255,0.18)",wt.fillRect(Xt()*Ot,Xt()*Nt,2,2)},{repeat:!0,srgb:!1});o.push(ct),j.onBeforeCompile=wt=>{wt.uniforms.uDetail={value:ct},wt.vertexShader=wt.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vWPos;`).replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
vWPos = (modelMatrix * vec4(transformed, 1.0)).xyz;`),wt.fragmentShader=wt.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vWPos; uniform sampler2D uDetail;`).replace("#include <map_fragment>",`#include <map_fragment>
          float dd = length(vWPos - cameraPosition);
          float d1 = texture2D(uDetail, vWPos.xz / 3.0).r, d2 = texture2D(uDetail, vWPos.xz / 11.0).r;
          float fade = 1.0 - smoothstep(25.0, 140.0, dd);
          diffuseColor.rgb *= mix(1.0, 0.8 + 0.4 * mix(d2, d1, fade), 0.55);`)},j.customProgramCacheKey=()=>"terrain-detail";let J=xe(z,j,{cast:!1});J.name="terrain",l(J);let tt=new Ce(new ra(700,5200,48,1),gt(13227680));tt.rotation.x=-Math.PI/2,tt.position.set(h.x0+u/2,-2,h.z0+m/2),tt.receiveShadow=!1,l(tt);let ft=new Ce(new hn(u+1800,m+1800),gt(13686197));ft.rotation.x=-Math.PI/2,ft.position.set(h.x0+u/2,-3,h.z0+m/2),l(ft)}let g=nn(256,256,(P,L,Q)=>{P.fillStyle="#7f8fb0",P.fillRect(0,0,L,Q);for(let E=0;E<1600;E++)P.fillStyle=Xt()<.5?"rgba(255,255,255,0.07)":"rgba(30,40,70,0.08)",P.fillRect(Xt()*L,Xt()*Q,2,2);P.fillStyle="#6b7a9b",P.fillRect(0,0,L*.035,Q),P.fillRect(L*.965,0,L*.035,Q),P.fillStyle="#ffffff",P.fillRect(L*.06,0,L*.045,Q),P.fillRect(L*.895,0,L*.045,Q),P.fillStyle="rgba(255,255,255,0.35)",P.fillRect(L*.49,0,L*.02,Q*.5)},{repeat:!0});o.push(g);{let P=[];for(let z of t.ribbons)P.push(S(z));let L=gn(P),Q=xe(L,gt(16777215,{map:g}),{cast:!1});Q.name="path",l(Q);let E=gn(t.ribbons.map(z=>S(z,!0))),F=xe(E,gt(5924226),{cast:!1});l(F)}function S(P,L=!1){let Q=[];for(let tt=P.from;tt<=P.to+.01;tt+=2)Q.push(t.baseXZ(tt));let E=[],F=[],z=[],j=0;for(let tt=0;tt<Q.length;tt++){let ft=Q[Math.max(0,tt-1)],wt=Q[Math.min(Q.length-1,tt+1)],Ot=wt[0]-ft[0],Nt=wt[1]-ft[1],Bt=Math.hypot(Ot,Nt)||1;Ot/=Bt,Nt/=Bt;let Wt=-Nt,ae=Ot,Ee=ke/2,ze=[Q[tt][0]-Wt*Ee,Q[tt][1]-ae*Ee],Ve=[Q[tt][0]+Wt*Ee,Q[tt][1]+ae*Ee],Nn=t.heightAt(Q[tt][0],Q[tt][1]),Fn=Math.max(t.heightAt(ze[0],ze[1]),Nn-.05)+xa+P.lift,ss=Math.max(t.heightAt(Ve[0],Ve[1]),Nn-.05)+xa+P.lift;L?(E.push(ze[0]-Wt*.15,Fn-.45,ze[1]-ae*.15,ze[0],Fn,ze[1],Ve[0],ss,Ve[1],Ve[0]+Wt*.15,ss-.45,Ve[1]+ae*.15),F.push(0,0,0,1,0,1,0,0)):(E.push(ze[0],Fn,ze[1],Ve[0],ss,Ve[1]),F.push(0,j/8,1,j/8)),tt&&(j+=2)}let ct=L?4:2;for(let tt=0;tt<Q.length-1;tt++){let ft=tt*ct,wt=(tt+1)*ct;L?(z.push(ft,wt,ft+1,ft+1,wt,wt+1),z.push(ft+2,wt+2,ft+3,ft+3,wt+2,wt+3)):z.push(ft,wt,ft+1,ft+1,wt,wt+1)}let J=new Se;if(J.setAttribute("position",new ie(E,3)),J.setAttribute("uv",new ie(F,2)),J.setIndex(z),J.computeVertexNormals(),J.getAttribute("normal").getY(0)<0&&!L){let tt=J.index.array;for(let ft=0;ft<tt.length;ft+=3){let wt=tt[ft+1];tt[ft+1]=tt[ft+2],tt[ft+2]=wt}J.computeVertexNormals()}return J}let T={uTime:{value:0}},C=s.features.filter(P=>P.kind==="water"&&P.closed);for(let P of C){let L=(P._level??Math.min(...P.pts.map(j=>t.heightAt(j[0],j[1]))))+.05,Q=new Zi(P.pts.map(j=>new Ct(j[0],-j[1]))),E=new oa(Q,4);E.rotateX(-Math.PI/2),E.translate(0,L,0);let F=new cn({uniforms:{...T,...zt.fog},vertexShader:`varying vec3 vW;
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
        }`,fog:!0}),z=new Ce(E,F);z.name="water",l(z),o.push(F),P._waterLevel=L}let N=[];if(t.lake){let P=t.lake,L=ui(P.pts),Q=[16767291,16735581,5752831,16777215,16748497,8257418],E=new he(2,.7,3.6,2,.32),F=new he(1.2,.5,.8,2,.2);for(let z=0,j=0;z<9&&j<300;j++){let ct=L[0]+Xt()*(L[2]-L[0]),J=L[1]+Xt()*(L[3]-L[1]);if(Lr(P.pts,ct,J)>-7)continue;let tt=new re,ft=xe(E,gt(Q[z%Q.length]),{ol:2.5});tt.add(ft);let wt=xe(F,gt(16777215),{ol:2});wt.position.y=.45,tt.add(wt);let Ot=xe(new de(.42,12,8),gt(Q[(z+2)%Q.length]),{ol:2});Ot.position.set(0,.9,.7),tt.add(Ot),tt.position.set(ct,(P._waterLevel??0)+.1,J),tt.rotation.y=Xt()*6.28,l(tt),N.push({g:tt,ph:Xt()*6.28,x:ct,z:J,a:tt.rotation.y}),z++}}{let P=nn(128,128,(z,j,ct)=>{z.fillStyle="#ffffff",z.fillRect(0,0,j,ct),z.fillStyle="#ffffff",z.fillRect(0,0,14,14),z.fillStyle="#3b4a6b",z.fillRect(34,30,60,58),z.fillStyle="#9ec9ff",z.fillRect(38,34,52,50),z.fillStyle="#ffffff",z.fillRect(62,34,4,50),z.fillRect(38,56,52,4),z.fillStyle="rgba(0,0,0,0.08)",z.fillRect(0,118,j,10)},{repeat:!0});o.push(P);let L={generateTopUV:(z,j,ct,J,tt)=>[new Ct(.02,.98),new Ct(.02,.98),new Ct(.02,.98)],generateSideWallUV:(z,j,ct,J,tt,ft)=>{let wt=j[ct*3],Ot=j[ct*3+1],Nt=j[ct*3+2],Bt=j[J*3],Wt=j[J*3+1],ae=j[J*3+2],Ee=j[tt*3+2],ze=j[ft*3+2],Ve=(Math.abs(Ot-Wt)<Math.abs(wt-Bt)?wt:Ot)/4.2,Nn=(Math.abs(Ot-Wt)<Math.abs(wt-Bt)?Bt:Wt)/4.2;return[new Ct(Ve,Nt/3.2),new Ct(Nn,ae/3.2),new Ct(Nn,Ee/3.2),new Ct(Ve,ze/3.2)]}},Q=["#e98a64","#f3d9a6","#d86f5a","#f6efe0","#a8c8e6","#f2b5a0","#c9b6e4","#f4c46a"],E=["#5d6488","#7a5d6c","#4f6b78"],F=[];for(let z of s.features){if(z.kind!=="building"||!z.closed||z.pts.length<4)continue;let j=ad(z.pts);if(v(j[0],j[1]))continue;let ct=parseFloat(z.tags?.["building:levels"])||(Xt()<.7?3:4),J=Math.min(30,ct*3.1),tt=new Zi(z.pts.map(Ee=>new Ct(Ee[0],-Ee[1]))),ft;try{ft=new sa(tt,{depth:J,bevelEnabled:!1,UVGenerator:L})}catch{continue}ft.rotateX(-Math.PI/2);let wt=Math.min(...z.pts.map(Ee=>t.heightAt(Ee[0],Ee[1])))-1.5;ft.translate(0,wt,0);let Ot=ft.getAttribute("normal"),Nt=Ot.count,Bt=new Float32Array(Nt*3),Wt=new Qt(Q[Math.floor(Xt()*Q.length)]).convertSRGBToLinear(),ae=new Qt(E[Math.floor(Xt()*E.length)]).convertSRGBToLinear();for(let Ee=0;Ee<Nt;Ee++){let ze=Ot.getY(Ee)>.5?ae:Wt;Bt[Ee*3]=ze.r,Bt[Ee*3+1]=ze.g,Bt[Ee*3+2]=ze.b}ft.setAttribute("color",new De(Bt,3)),F.push(ft.index?ft.toNonIndexed():ft)}if(F.length){let z=gn(F),j=xe(z,gt(16777215,{map:P,vertexColors:!0}),{cast:!0,ol:1.6,olRef:60});j.name="buildings",l(j)}}let q=t.sample(t.finishM),A=t.sample(0),H={start:A,finish:q},V=new re;l(V);function rt(P,L,Q,E){let F=new re,z=ke/2+1.4,j=.85,ct=nn(256,32,(Nt,Bt,Wt)=>{for(let ae=0;ae<16;ae++)Nt.fillStyle=ae%2?Q:E,Nt.fillRect(ae*Bt/16,0,Bt/16+1,Wt)},{repeat:!1});o.push(ct);let J=new Ke(z,j,14,40,Math.PI);J.scale(1,1.25,1);let tt=xe(J,gt(16777215,{map:ct}),{ol:3.5});F.add(tt);let ft=new ue(j*1.4,j*1.6,.8,16);for(let Nt of[-1,1]){let Bt=xe(ft,gt(E),{ol:3});Bt.position.set(Nt*z,.3,0),F.add(Bt)}let wt=di(1024,256,(Nt,Bt,Wt)=>{Nt.fillStyle="#1b1b3a",$e(Nt,0,0,Bt,Wt,60),Nt.fill(),Nt.fillStyle=Q,$e(Nt,12,12,Bt-24,Wt-24,50),Nt.fill(),je(Nt,"MARKRUN",Bt/2,Wt*.42,150,"#ffffff","#1b1b3a",.18),je(Nt,L,Bt/2,Wt*.83,56,"#ffe14d","#1b1b3a",.2)},o),Ot=xe(new he(z*1.55,z*.4,.7,3,.25),[gt(E),gt(E),gt(E),gt(E),gt(16777215,{map:wt}),gt(16777215,{map:wt})],{ol:3.5});return Ot.position.y=z*1.25+j*1.25+z*.2-.15,F.add(Ot),F.position.set(P.x,P.y-.1,P.z),F.rotation.y=Math.atan2(-P.rz,P.rx),V.add(F),F}H.finishArch=rt(q,"FINISH","#ff3d8b","#ffd23f"),rt(A,"START","#2e9bff","#ffd23f");let ot=nn(256,64,(P,L,Q)=>{let F=L/16;for(let z=0;z<16;z++)for(let j=0;j<4;j++)P.fillStyle=(z+j)%2?"#111":"#fff",P.fillRect(z*F,j*F,F,F)});o.push(ot);function D(P,L,Q,E=.03){let F=new hn(ke,Q);F.rotateX(-Math.PI/2);let z=new Ce(F,gt(16777215,{map:L,transparent:!0,alphaTest:.3,polygonOffset:!0,polygonOffsetFactor:-2}));return z.position.set(P.x,P.y+E,P.z),z.rotation.y=Math.atan2(-P.rz,P.rx),z.receiveShadow=!0,l(z),z}D(q,ot,2.2,.05);let St=di(512,128,(P,L,Q)=>{P.fillStyle="#ffffff",P.fillRect(0,0,L,22),je(P,"START",L/2,80,72,"#ffffff","rgba(0,0,0,0)",0)},o);{let P=t.sample(2.5);D(P,St,3,.05).rotation.y+=Math.PI}let K=new Pe;function Y(P,L,Q,{ol:E=0,olRef:F,cast:z=!0,colors:j,chunk:ct=0}={}){if(!Q.length)return null;if(ct){let tt=new Map;Q.forEach((wt,Ot)=>{let Nt=`${Math.floor(wt.x/ct)},${Math.floor(wt.z/ct)}`,Bt=tt.get(Nt);Bt||tt.set(Nt,Bt={l:[],c:[]}),Bt.l.push(wt),j&&Bt.c.push(j[Ot])});let ft=null;for(let{l:wt,c:Ot}of tt.values()){let Nt=Y(P,L,wt,{ol:E,olRef:F,cast:z,colors:j?Ot:null});ft=ft||Nt}return ft}let J=new mn(P,L,Q.length);return Q.forEach((tt,ft)=>{K.position.set(tt.x,tt.y,tt.z),K.rotation.set(tt.rx||0,tt.ry||0,tt.rz||0),K.scale.set(tt.sx??tt.s??1,tt.sy??tt.s??1,tt.sz??tt.s??1),K.updateMatrix(),J.setMatrixAt(ft,K.matrix),j&&J.setColorAt(ft,new Qt(j[ft]))}),J.castShadow=z,J.receiveShadow=!0,J.computeBoundingSphere(),E&&Qi(J,E,void 0,F),l(J),J}let X=[];{let P=Q=>{let E=t.rawExt(Q-12),F=t.rawExt(Q),z=t.rawExt(Q+12),j=Math.atan2(F[1]-E[1],F[0]-E[0]),J=Math.atan2(z[1]-F[1],z[0]-F[0])-j;for(;J>Math.PI;)J-=2*Math.PI;for(;J<-Math.PI;)J+=2*Math.PI;return J},L=[[20,t.LAP1_END_DRAW-20],[t.MAP_TO-40,t.finishM-10]];for(let[Q,E]of L){let F=null;for(let z=Q;z<E;z+=4){let j=P(z);Math.abs(j)>.45?(!F||Math.abs(j)>Math.abs(F.d))&&(F={m:z,d:j}):F&&(X.some(ct=>Math.abs(ct.m-F.m)<50)||X.push(F),F=null)}}}let $=[],Z=[],at=[],xt=[];for(let P of X){let L=P.d>0;for(let Q=-2;Q<=2;Q++){let E=t.sample(P.m+Q*5),F=L?-1:1,z=ke/2+1.6,j=E.x+E.rx*z*F,ct=E.z+E.rz*z*F;x(j,ct,.3),(L?Z:$).push({x:j,y:t.heightAt(j,ct),z:ct,ry:Math.atan2(-E.tz,E.tx)+(F>0?Math.PI:0)})}for(let Q=-3;Q<=3;Q++){let E=t.sample(P.m+Q*3.5),F=L?1:-1,z=ke/2+.7;at.push({x:E.x+E.rx*z*F,y:t.heightAt(E.x+E.rx*z*F,E.z+E.rz*z*F),z:E.z+E.rz*z*F,ry:Xt()*6});for(let j=0;j<2;j++){let ct=t.sample(P.m+Q*3.5+j*1.75),J=ke/2+.1;xt.push({x:ct.x+ct.rx*J*F,y:ct.y-.05,z:ct.z+ct.rz*J*F,ry:Math.atan2(ct.tx,ct.tz),red:(Q*2+j)%2===0})}}}H.corners=X;{let P=nn(256,96,(J,tt,ft)=>{J.fillStyle="#2f6fe0",J.fillRect(0,0,tt,ft),J.fillStyle="#ffffff";for(let wt=0;wt<4;wt++){let Ot=18+wt*60;J.beginPath(),J.moveTo(Ot,12),J.lineTo(Ot+26,12),J.lineTo(Ot+54,ft/2),J.lineTo(Ot+26,ft-12),J.lineTo(Ot,ft-12),J.lineTo(Ot+28,ft/2),J.closePath(),J.fill()}J.strokeStyle="#1b3f8f",J.lineWidth=8,J.strokeRect(0,0,tt,ft)}),L=P.clone();L.repeat.x=-1,L.offset.x=1,L.wrapS=Xi,L.needsUpdate=!0,o.push(P,L);let E=(J=>{let tt=new we(3.2,1.2,.12);tt.rotateX(-.32),tt.translate(0,.62,.22);let ft=new we(3.2,1.2,.12);return ft.rotateX(.32),ft.translate(0,.62,-.22),ft.rotateY(Math.PI),gn([tt,ft])})();Jc(E),Y(E,gt(16777215,{map:P}),Z,{ol:2.5}),Y(E,gt(16777215,{map:L}),$,{ol:2.5});let F=nn(16,64,(J,tt,ft)=>{for(let wt=0;wt<4;wt++)J.fillStyle=wt%2?"#ffffff":"#ff6a2b",J.fillRect(0,wt*ft/4,tt,ft/4)});o.push(F);let z=new ue(.06,.32,.9,12,1);z.translate(0,.5,0);let j=new we(.8,.08,.8);j.translate(0,.04,0),Y(z,gt(16777215,{map:F}),at,{ol:2}),Y(j,gt(16738859),at,{ol:1.5});let ct=new we(.5,.22,1.75);ct.translate(0,.11,0),Y(ct,gt(16777215),xt.map(J=>J),{ol:1.5,colors:xt.map(J=>J.red?15216959:16777215)})}let Tt=new re;l(Tt);function At(P,L,Q,E,F,{postH:z=1.6,face:j=0,scale:ct=1}={}){let J=di(512,Math.round(512*E/Q),F,o),tt=new re,ft=xe(new he(Q,E,.25,2,.08),[gt(5978660),gt(5978660),gt(5978660),gt(5978660),gt(16777215,{map:J}),gt(16777215,{map:J})],{ol:3});ft.position.y=z+E/2,tt.add(ft);let wt=new we(.25,z+E*.5,.25);for(let Wt of[-1,1]){let ae=xe(wt,gt(9067062),{ol:2});ae.position.set(Wt*Q*.35,(z+E*.5)/2,-.1),tt.add(ae)}let Ot=ke/2+2.2+Q*.15,Nt=P.x+P.rx*Ot*L,Bt=P.z+P.rz*Ot*L;return tt.position.set(Nt,t.heightAt(Nt,Bt)-.1,Bt),tt.rotation.y=Math.atan2(-P.tx,-P.tz)+L*.5+j,tt.scale.setScalar(ct),Tt.add(tt),tt}let lt=1720,mt=t.sample(lt-10);H.hillSign=At(mt,1,6,3.2,(P,L,Q)=>{P.fillStyle="#ffd23f",$e(P,0,0,L,Q,40),P.fill(),P.lineWidth=16,P.strokeStyle="#1b1b3a",$e(P,8,8,L-16,Q-16,34),P.stroke(),P.fillStyle="#3aa845",P.beginPath(),P.moveTo(40,Q-40),P.lineTo(150,70),P.lineTo(260,Q-40),P.closePath(),P.fill(),P.strokeStyle="#1b1b3a",P.lineWidth=8,P.stroke(),P.fillStyle="#fff",P.beginPath(),P.moveTo(118,118),P.lineTo(150,70),P.lineTo(182,118),P.closePath(),P.fill(),je(P,"THE",380,Q*.3,72,"#ffffff","#1b1b3a",.2),je(P,"HILL",370,Q*.66,120,"#ff3d8b","#1b1b3a",.16)},{postH:1.4}),H.hillM=lt;for(let P of[1,2,3,4]){let L=P*1e3,Q=t.sample(t.geoOf(L));At(Q,-1,1.6,1.3,(E,F,z)=>{E.fillStyle="#ffffff",$e(E,0,0,F,z,50),E.fill(),E.fillStyle="#ff3d8b",$e(E,20,20,F-40,z-40,36),E.fill(),je(E,`${P}K`,F/2,z/2+8,230,"#ffffff","#1b1b3a",.14)},{postH:.7})}let W=t.sample(2475);H.lapBoard=At(W,1,4.4,2.6,(P,L,Q)=>{P.fillStyle="#1b1b3a",$e(P,0,0,L,Q,40),P.fill(),P.fillStyle="#2e9bff",$e(P,14,14,L-28,Q-28,30),P.fill(),je(P,"LAP",L/2,Q*.28,90,"#ffffff","#1b1b3a",.18),je(P,"2 OF 2",L/2,Q*.66,150,"#ffe14d","#1b1b3a",.14)},{postH:1.2}),H.lapM=2500;let Et=[],Mt=[],et=[],Rt=[];function $t(P,L,Q,E=3.2,F=12){let z=null;for(let j=P;j<=L;j+=F){let ct=t.sample(j),J=ke/2+1,tt=ct.x+ct.rx*J*Q,ft=ct.z+ct.rz*J*Q,wt=t.heightAt(tt,ft);Mt.push({x:tt,y:wt,z:ft});let Ot=new G(tt,wt+E,ft);if(z){let Nt=[];for(let Bt=0;Bt<=12;Bt++){let Wt=Bt/12,ae=z.clone().lerp(Ot,Wt);ae.y-=Math.sin(Wt*Math.PI)*.6,Nt.push(ae)}et.push(Nt);for(let Bt=1;Bt<12;Bt++){let Wt=Nt[Bt],ae=Nt[Bt+1].clone().sub(Nt[Bt-1]);Et.push({x:Wt.x,y:Wt.y,z:Wt.z,ry:Math.atan2(-ae.z,ae.x)})}}z=Ot}}function Ut(P,L,Q,E=ke/2+2.2){for(let F=P;F<=L;F+=2.4){let z=t.sample(F),j=z.x+z.rx*E*Q,ct=z.z+z.rz*E*Q;Rt.push({x:j,y:t.heightAt(j,ct),z:ct,ry:Math.atan2(z.tx,z.tz)})}}let B=t.finishM;$t(B-70,B+10,1),$t(B-70,B+10,-1),$t(-6,50,1),$t(-6,50,-1),Ut(B-60,B+14,1),Ut(B-60,B+14,-1),Ut(-4,40,1),Ut(-4,40,-1);{let P=new Se;P.setAttribute("position",new ie([-.3,0,0,.3,0,0,0,-.62,0],3)),P.setAttribute("normal",new ie([0,0,1,0,0,1,0,0,1],3));let L=Et.map((tt,ft)=>[16727435,16765503,3054591,4054148,16747069,16777215][ft%6]);Y(P,gt(16777215,{side:Fe}),Et,{colors:L,cast:!1});let Q=new ue(.07,.09,3.3,6);Q.translate(0,1.65,0),Y(Q,gt(16777215),Mt,{ol:1.5});let E=new Se().setFromPoints(et.flatMap(tt=>tt.slice(0,-1).flatMap((ft,wt)=>[ft,tt[wt+1]]))),F=new $s(E,new Yi({color:3355443}));l(F),o.push(E);let z=[];for(let tt=0;tt<4;tt++){let ft=new we(.16,1,.06);ft.translate(-.9+tt*.6,.5,0),z.push(ft)}let j=new we(2.4,.12,.05);j.translate(0,.65,.05),z.push(j);let ct=j.clone();ct.translate(0,-.35,0),z.push(ct);let J=gn(z);J.rotateY(Math.PI/2),Y(J,gt(16777215),Rt,{ol:1.8})}let k=[],pt=(P,L,Q,E,F,z=1.35)=>k.push({m0:P,m1:L,side:Q,off:ke/2+3,depth:E,density:F,spacing:z});pt(B-58,B+12,1,6,1),pt(B-58,B+12,-1,6,1),pt(-2,38,1,5,.9),pt(-2,38,-1,5,.9),pt(1940,2010,1,4,.7),pt(1960,2010,-1,3,.6),pt(lt-10,lt+40,-1,3,.55),pt(2440,2490,-1,3,.7),H.crowdZones=k;{let P=s.pois.filter(E=>E.kind==="bench"&&v(E.pos[0],E.pos[1])&&x(E.pos[0],E.pos[1],1)).map(E=>({x:E.pos[0],y:t.heightAt(E.pos[0],E.pos[1]),z:E.pos[1],ry:Xt()*6})),L=gn([new we(1.8,.12,.5).translate(0,.5,0),new we(1.8,.4,.1).translate(0,.8,-.22),new we(.1,.5,.45).translate(-.8,.25,0),new we(.1,.5,.45).translate(.8,.25,0)]);Y(L,gt(11892031),P,{ol:1.5});let Q=s.pois.filter(E=>E.kind==="cafe"&&v(E.pos[0],E.pos[1])&&x(E.pos[0],E.pos[1],4));for(let E of Q){let F=new re;F.add(xe(new he(5,3,4,2,.2),gt(16774108),{ol:2.5})).position.y=1.5;let z=nn(128,16,(J,tt,ft)=>{for(let wt=0;wt<8;wt++)J.fillStyle=wt%2?"#fff":"#ff4f6d",J.fillRect(wt*16,0,16,ft)});o.push(z);let j=xe(new we(5.6,.2,2),gt(16777215,{map:z}),{ol:2});j.position.set(0,2.9,2.3),j.rotation.x=.35,F.add(j);let ct=xe(new Oe(4,1.6,4),gt(3054591),{ol:2.5});ct.position.y=3.8,ct.rotation.y=Math.PI/4,F.add(ct),F.position.set(E.pos[0],t.heightAt(E.pos[0],E.pos[1]),E.pos[1]),F.rotation.y=Xt()*6,l(F),M(E.pos[0],E.pos[1],5)}}for(let P of k)for(let L=P.m0-8;L<=P.m1+8;L+=4){let Q=t.sample(L),E=P.off+P.depth/2;M(Q.x+Q.rx*E*P.side,Q.z+Q.rz*E*P.side,P.depth/2+3)}for(let P of[A,q])M(P.x,P.z,14);if(r&&i.funfair){let P=Object.values(t.diversions)[0]?.[0];if(P)for(let L of P.path){let Q=st(L[0],L[1]),E=(L[0]+Q[0])/2,F=(L[1]+Q[1])/2;M(E,F,Math.max(6,Math.hypot(L[0]-Q[0],L[1]-Q[1])/2-3))}}function st(P,L){let Q=null,E=1e9;for(let F of f){let z=(F[0]-P)**2+(F[1]-L)**2;z<E&&(E=z,Q=F)}return Q}H.nearestOnRibbon=st;let it=new Map;for(let P of f){let L=`${Math.floor(P[0]/10)},${Math.floor(P[1]/10)}`,Q=it.get(L);Q||it.set(L,Q=[]),Q.push(P)}let nt=(P,L,Q=1)=>{let E=Math.floor(P/10),F=Math.floor(L/10),z=(ke/2+Q)**2;for(let j=-1;j<=1;j++)for(let ct=-1;ct<=1;ct++)for(let J of it.get(`${E+j},${F+ct}`)||[])if((J[0]-P)**2+(J[1]-L)**2<z)return!0;return!1};H.reserve=M,H.clearOf=x;let _t=[],ht=(P,L,Q,E)=>!x(P,L,2.5*E)||I(P,L,1.5)?!1:(_t.push({x:P,z:L,kind:Q,s:E}),M(P,L,2.2*E),!0);for(let P of s.pois)P.kind==="tree"&&ht(P.pos[0],P.pos[1],0,.85+Xt()*.35);for(let P of s.features)if(P.kind==="wood"&&P.closed){let L=ui(P.pts),Q=(L[2]-L[0])*(L[3]-L[1]);for(let E=0;E<Q/90;E++){let F=L[0]+Xt()*(L[2]-L[0]),z=L[1]+Xt()*(L[3]-L[1]);ya(P.pts,F,z)&&ht(F,z,1,.9+Xt()*.5)}}{let P=ui(b);for(let L=0;L<2600;L++){let Q=P[0]+Xt()*(P[2]-P[0]),E=P[1]+Xt()*(P[3]-P[1]);!v(Q,E)||-Lr(b,Q,E)>45&&Xt()<.75||ht(Q,E,Xt()<.7?1:2,.8+Xt()*.5)}for(let L of s.features)if(L.kind==="road"&&!L.closed)for(let Q=1;Q<L.pts.length;Q++){let E=L.pts[Q-1],F=L.pts[Q],z=Math.hypot(F[0]-E[0],F[1]-E[1]);for(let j=0;j<z;j+=22){let ct=j/z,J=E[0]+(F[0]-E[0])*ct,tt=E[1]+(F[1]-E[1])*ct,ft=-(F[1]-E[1])/z,wt=(F[0]-E[0])/z,Ot=8+Xt()*2;Xt()<.5&&ht(J+ft*Ot,tt+wt*Ot,0,.6+Xt()*.2)}}}{let P=[3978315,5031250,3121226,6539594,8376650,3450963],L=new ue(.32,.5,4.2,7);L.translate(0,2.1,0);let Q=new Je(3.2,1);Q.scale(1,1.08,1),Q.translate(0,6.6,0);let E=gn([new Je(3,1).translate(0,6.2,0),new Je(2.3,0).translate(1.9,5.3,.6),new Je(2.2,0).translate(-1.7,5.5,-.8),new Je(2,0).translate(.2,8.2,.3)].map(J=>J.toNonIndexed())),F=gn([new Oe(3,4.2,8).translate(0,5,0),new Oe(2.4,3.6,8).translate(0,7.2,0),new Oe(1.6,3,8).translate(0,9.2,0)].map(J=>J.index?J.toNonIndexed():J)),z=_t.map(J=>({x:J.x,y:t.heightAt(J.x,J.z)-.2,z:J.z,ry:Xt()*6.28,s:J.s}));Y(L,gt(9067062),z,{ol:2,olRef:40,chunk:160});let j=gt(16777215,{flatShading:!0});[Q,E,F].forEach((J,tt)=>{let ft=z.filter((wt,Ot)=>_t[Ot].kind===tt);Y(J,j,ft,{ol:2.2,olRef:40,colors:ft.map(()=>P[Math.floor(Xt()*P.length)]),chunk:160})}),H.treeCount=_t.length}{let P=gn([0,1,2,3].map(z=>{let j=new Oe(.09,.55,3);return j.translate(0,.27,0),j.rotateZ((z-1.5)*.25),j.rotateY(z*1.7),j.translate((z-1.5)*.08,0,z%2*.06),j.toNonIndexed()})),L=gn([new ue(.03,.03,.35,4).translate(0,.17,0).toNonIndexed(),new Je(.13,0).translate(0,.38,0)]),Q=[],E=[],F=[];for(let z=0;z<9e3;z++){let j=f[Math.floor(Xt()*f.length)],ct=Xt()*6.283,J=ke/2+1+Xt()*22,tt=j[0]+Math.cos(ct)*J,ft=j[1]+Math.sin(ct)*J;if(!v(tt,ft)||I(tt,ft,.5)||!x(tt,ft,.2))continue;let wt=t.heightAt(tt,ft)-.03;Xt()<.62?Q.push({x:tt,y:wt,z:ft,ry:Xt()*6,s:.5+Xt()*.6}):(E.push({x:tt,y:wt,z:ft,ry:Xt()*6,s:.35+Xt()*.25}),F.push(["#ff5d8f","#ffd93b","#ffffff","#b06bff","#ff8a3d","#57c7ff"][Math.floor(Xt()*6)]))}Y(P,gt(5226296),Q,{cast:!1,chunk:120}),Y(L,gt(16777215),E,{cast:!1,colors:F,chunk:120})}let It=new cn({side:Ze,depthWrite:!1,fog:!1,uniforms:{top:{value:new Qt(3116287)},mid:{value:new Qt(9425919)},bot:{value:new Qt(15333631)}},vertexShader:"varying vec3 vP; void main(){ vP = normalize(position); gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.); }",fragmentShader:`uniform vec3 top; uniform vec3 mid; uniform vec3 bot; varying vec3 vP; void main(){ float h=vP.y; vec3 c = h>0.12? mix(mid, top, smoothstep(0.12,0.7,h)) : mix(bot, mid, smoothstep(-0.05,0.12,h)); gl_FragColor=vec4(c,1.);
#include <colorspace_fragment>
}`}),Pt=new Ce(new de(5e3,32,16),It);Pt.renderOrder=-10,Pt.frustumCulled=!1,n.add(Pt),o.push(It,Pt.geometry);let bt=gn([[0,0,0,14],[13,-3,2,10],[-13,-4,-1,10],[6,6,-2,9],[-6,5,3,8],[22,-6,0,6],[-22,-7,1,6]].map(([P,L,Q,E])=>new Je(E,2).translate(P,L,Q)));bt.scale(1,.7,.8);let Dt=[h.x0+u/2,h.z0+m/2],qt=[];for(let P=0;P<26;P++){let L=Xt()*6.28,Q=300+Xt()*1300;qt.push({x:Dt[0]+Math.cos(L)*Q,y:170+Xt()*120,z:Dt[1]+Math.sin(L)*Q,ry:Xt()*6,s:.8+Xt()*1.4})}let Yt=Y(bt,gt(16777215,{emissive:6981808,emissiveIntensity:.35,fog:!1}),qt,{ol:1.5,olRef:300,cast:!1}),Lt=[];for(let P=0;P<18;P++){let L=P/18*6.28+Xt()*.2,Q=1900+Xt()*500;Lt.push({x:Dt[0]+Math.cos(L)*Q,y:-40,z:Dt[1]+Math.sin(L)*Q,sx:320+Xt()*260,sy:80+Xt()*90,sz:260+Xt()*200,ry:Xt()*6})}Y(new de(1,24,12),gt(7128954),Lt,{cast:!1,colors:Lt.map((P,L)=>[8047487,6273413,9425290][L%3])});function ne(P){T.uTime.value=P;for(let L of N)L.g.position.y=(t.lake?._waterLevel??0)+.1+Math.sin(P*1.7+L.ph)*.08,L.g.rotation.z=Math.sin(P*1.3+L.ph)*.06,L.g.rotation.y=L.a+Math.sin(P*.1+L.ph)*.4;Yt&&(Yt.position.x=Math.sin(P*.01)*40)}function Zt(){a.traverse(P=>{P.geometry&&P.geometry.dispose()});for(let P of o)P.dispose?.();n.remove(a),n.remove(Pt)}return{group:a,anchors:H,update:ne,dispose:Zt,inPark:v,clearOf:x,reserve:M,blocked:I,groundTex:R,onPath:nt}}function ad(n){let t=0,e=0;for(let i of n)t+=i[0],e+=i[1];return[t/n.length,e/n.length]}function $e(n,t,e,i,s,r){n.beginPath(),n.moveTo(t+r,e),n.arcTo(t+i,e,t+i,e+s,r),n.arcTo(t+i,e+s,t,e+s,r),n.arcTo(t,e+s,t,e,r),n.arcTo(t,e,t+i,e,r),n.closePath()}var cd=[16735631,16765503,5752831,8248938,16747069,11566079,5234888,16739179,16777215,9414911],hd=[4054148,16727435,16765503,3054591,16777215];function ky(){let n=[];for(let i=0;i<=8;i++){let s=i/8,r=s*1.25,o=s<.12?.48+s*1.2:Math.sqrt(Math.max(0,1-Math.pow((s-.12)/.88,2.2)))*.62;n.push(new Ct(Math.max(.001,o),r))}n.unshift(new Ct(.001,0));let e=new Ar(n,12);return e.computeVertexNormals(),e}function ud(n,t){let e=Un(99),i=t.length,s=new re;if(n.add(s),!i)return{update(){},dispose(){n.remove(s)},group:s};let r=ky(),o=new de(.15,8,5);o.scale(.8,1.15,.5);let a=new de(.075,6,4);a.scale(.85,1.2,.5);let l=new de(.13,6,5),h=new Oe(.14,.36,6);h.translate(0,.18,0);let u=new Oe(.26,.55,8);u.translate(0,.27,0);let m=new de(.2,7,5),d=(A,H,V,rt)=>{let ot=new mn(A,H,V);return ot.castShadow=!0,ot.receiveShadow=!0,ot.userData.ol=rt,s.add(ot),ot},c=d(r,gt(16777215),i,2.6),p=d(o,new Sn({color:16777215}),i*2,0),M=d(a,new Sn({color:1709088}),i*2,0),x=d(l,gt(16777215),i*2,2);p.castShadow=M.castShadow=!1;let f=[d(h,gt(16777215),i,2),d(u,gt(16777215),i,2),d(m,gt(16777215),i,2)],b=[0,0,0],v=new Qt,_=t.map((A,H)=>{let V=A.colour??cd[Math.floor(e()*cd.length)];c.setColorAt(H,v.set(V)),x.setColorAt(H*2,v),x.setColorAt(H*2+1,v);let rt=e()<.3?-1:Math.floor(e()*3),ot=-1;return rt>=0&&(ot=b[rt]++,f[rt].setColorAt(ot,v.set(hd[Math.floor(e()*hd.length)]))),{...A,s:A.scale??.85+e()*.35,ph:e()*6.28,sp:5+e()*4,tk:rt,ti:ot,wave:e()<.5,ex:.3}});f.forEach((A,H)=>{A.count=b[H]});for(let A of[c,x,...f])A.instanceColor&&(A.instanceColor.needsUpdate=!0);let U=new ge,I=new Wn,w=new Dn,R=new G,y=new G,g=new ge,S=new ge;function T(A,H,V){let rt=_[A],ot=rt.ex,D=H*rt.sp*(.5+ot*.6)+rt.ph,St=Math.max(0,Math.sin(D))*.32*ot,K=1-Math.cos(D*2)*.05*ot;w.set(0,rt.yaw+Math.sin(H*.8+rt.ph)*.25*(1-ot),Math.sin(D*.5)*.08*ot),I.setFromEuler(w),g.compose(R.set(rt.x,rt.y+St,rt.z),I,y.set(rt.s/Math.sqrt(K),rt.s*K,rt.s/Math.sqrt(K))),c.setMatrixAt(A,g);for(let Y=0;Y<2;Y++){let X=Y?.19:-.19;S.makeTranslation(X,.86,.5),U.multiplyMatrices(g,S),p.setMatrixAt(A*2+Y,U),S.makeTranslation(X*1.02,.84+(ot>.6?.03:0),.565),U.multiplyMatrices(g,S),M.setMatrixAt(A*2+Y,U);let $=ot>.55?1:.15+.2*Math.max(0,Math.sin(D)),Z=rt.wave?Math.sin(D*1.5+Y*3)*.25*ot:0,at=(Y?1:-1)*(.62+$*.05+Z*.3),xt=.45+$*.85+Z;S.makeTranslation(at,xt,.12),U.multiplyMatrices(g,S),x.setMatrixAt(A*2+Y,U)}rt.tk>=0&&(S.makeTranslation(0,1.22,0),rt.tk===0&&S.multiply(new ge().makeRotationZ(Math.sin(D)*.3)),U.multiplyMatrices(g,S),f[rt.tk].setMatrixAt(rt.ti,U))}for(let A=0;A<i;A++)T(A,0,!0);let C=()=>{for(let A of[c,p,M,x,...f])A.instanceMatrix.needsUpdate=!0};C();for(let A of[c,p,M,x,...f]){if(!A.count){A.visible=!1;continue}A.computeBoundingSphere(),A.boundingSphere.radius+=2,A.userData.ol&&Qi(A,A.userData.ol,void 0,18)}function N(A,H,V=[],rt=null){let ot=!1;for(let D=0;D<i;D++){let St=_[D];if(H&&(St.x-H.x)**2+(St.z-H.z)**2>260*260)continue;let K=.25;if(rt!=null)K=rt;else for(let Y of V){let X=(Y.x-St.x)**2+(Y.z-St.z)**2;X<45*45&&(K=Math.max(K,1-Math.sqrt(X)/70))}St.ex+=(K-St.ex)*.05,T(D,A),ot=!0}ot&&C()}function q(){for(let A of[r,o,a,l,h,u,m])A.dispose();for(let A of[c,p,M,x,...f])A.dispose();n.remove(s)}return{update:N,dispose:q,group:s,members:_}}function dd(n,t,e=5,i=null){let s=Un(e),r=[];for(let[o,a]of t.entries())for(let l=a.m0;l<=a.m1;l+=a.spacing??1.35){let h=n.sample(l),u=Math.max(1,Math.round(a.depth/1.25));for(let m=0;m<u;m++){if(s()>a.density)continue;let d=a.off+m*1.25+s()*.35,c=(s()-.5)*.6,p=h.x+h.rx*d*a.side+h.tx*c,M=h.z+h.rz*d*a.side+h.tz*c;i&&i(p,M,1.4)||r.push({zone:o,x:p,y:n.heightAt(p,M),z:M,yaw:Math.atan2(-h.rx*a.side,-h.rz*a.side)+(s()-.5)*.5})}}return r}var fd={stocky:{torso:[.9,.76,.58],leg:.66,legR:.16,arm:.66,armR:.14,head:.47,hand:.19,shoe:[.34,.25,.6]},lanky:{torso:[.56,.86,.38],leg:1.06,legR:.095,arm:.9,armR:.085,head:.39,hand:.15,shoe:[.27,.21,.62]},compact:{torso:[.68,.6,.5],leg:.52,legR:.13,arm:.52,armR:.11,head:.5,hand:.17,shoe:[.3,.23,.5]},tall:{torso:[.7,.94,.46],leg:.92,legR:.125,arm:.8,armR:.11,head:.43,hand:.17,shoe:[.31,.24,.6]}},pd=["#2b1d14","#5a3a1e","#c8642a","#e8c66a","#1d1d24","#a9a9b3","#3a2a1e","#8a5a2b","#ff5fa2"],Uy=3.2,Nr=new Map,Gt=(n,t)=>(Nr.has(n)||Nr.set(n,t()),Nr.get(n));function md(){for(let n of Nr.values())n.dispose();Nr.clear()}function Ny(n){let t=2166136261;for(let e of n)t^=e.charCodeAt(0),t=Math.imul(t,16777619);return t>>>0}function Fy(n,t,e,i,s,r){n.fillStyle=i,n.fillRect(0,0,t,e);let o=t*.25,a=e*.47,l=e*.64,h=t*.058,u="#1a1420";n.fillStyle="rgba(255,90,90,0.28)";for(let x of[-1,1])n.beginPath(),n.ellipse(o+x*h*1.75,l-e*.03,t*.022,e*.03,0,0,7),n.fill();let m=(x,f)=>{if(f==="heart"){n.fillStyle="#ff2d6f",n.strokeStyle=u,n.lineWidth=5,n.beginPath();let I=t*.03;n.moveTo(x,a+I*1.1),n.bezierCurveTo(x-I*2.2,a-I*.2,x-I*.9,a-I*1.9,x,a-I*.6),n.bezierCurveTo(x+I*.9,a-I*1.9,x+I*2.2,a-I*.2,x,a+I*1.1),n.fill(),n.stroke();return}if(f==="closed"||f==="happy"){n.strokeStyle=u,n.lineWidth=9,n.lineCap="round",n.beginPath(),f==="happy"?n.arc(x,a+e*.02,t*.024,Math.PI*1.1,Math.PI*1.9):(n.moveTo(x-t*.025,a),n.lineTo(x+t*.025,a)),n.stroke();return}if(f==="x"){n.strokeStyle=u,n.lineWidth=8,n.lineCap="round";let I=t*.02;n.beginPath(),n.moveTo(x-I,a-I),n.lineTo(x+I,a+I),n.moveTo(x+I,a-I),n.lineTo(x-I,a+I),n.stroke();return}if(f==="wink"&&x>o&&(f="happy"),f==="wink"&&(f="open"),f==="happy"){n.strokeStyle=u,n.lineWidth=9,n.lineCap="round",n.beginPath(),n.arc(x,a+e*.02,t*.024,Math.PI*1.1,Math.PI*1.9),n.stroke();return}let b=f==="wide"?1.3:1,v=t*.03*b,_=e*.085*b;n.fillStyle="#fff",n.strokeStyle=u,n.lineWidth=6,n.beginPath(),n.ellipse(x,a,v,_,0,0,7),n.fill(),n.stroke();let U=f==="wide"?.38:.55;n.fillStyle=u,n.beginPath(),n.ellipse(x+v*.15,a+_*.12,v*U,_*U*1.1,0,0,7),n.fill(),n.fillStyle="#fff",n.beginPath(),n.arc(x+v*.35,a-_*.2,v*.22,0,7),n.fill(),f==="half"&&(n.fillStyle=i,n.fillRect(x-v-4,a-_-4,v*2+8,_*1.05),n.strokeStyle=u,n.lineWidth=7,n.beginPath(),n.moveTo(x-v-2,a-_*.1),n.lineTo(x+v+2,a-_*.1),n.stroke())},d={sleepy:"half",smug:"half",cheeky:"wink","wide-eyed":"wide"}[s]||"open";r==="happy"&&(d="happy"),r==="love"&&(d="heart"),r==="dead"&&(d="x"),r==="effort"&&s!=="goofy"&&(d="open");for(let x of[-1,1])m(o+x*h,d);n.strokeStyle=u,n.lineWidth=10,n.lineCap="round";let c=r==="effort"||s==="determined"||s==="gritted"?.35:r==="sad"||s==="worried"?-.35:s==="smug"||s==="cheeky"?.15:s==="wide-eyed"?-.2:0;for(let x of[-1,1]){let f=o+x*h,b=a-e*.13,v=t*.026,_=f-x*v,U=f+x*v;n.beginPath(),n.moveTo(U,b-c*18),n.lineTo(_,b+c*18),n.stroke()}n.lineWidth=8,n.strokeStyle=u,n.fillStyle="#7a1e2e";let p=o,M=r||"normal";if(M==="happy"||M==="normal"&&s==="grin")n.beginPath(),n.moveTo(p-t*.04,l-e*.02),n.quadraticCurveTo(p,l+e*.12,p+t*.04,l-e*.02),n.closePath(),n.fill(),n.stroke(),n.fillStyle="#fff",n.fillRect(p-t*.03,l-e*.018,t*.06,e*.03),n.fillStyle="#ff7d8f",n.beginPath(),n.ellipse(p,l+e*.06,t*.015,e*.02,0,0,7),n.fill();else if(M==="effort"){n.fillStyle="#fff",n.beginPath(),$e(n,p-t*.035,l-e*.03,t*.07,e*.065,10),n.fill(),n.stroke(),n.lineWidth=4,n.beginPath(),n.moveTo(p-t*.035,l),n.lineTo(p+t*.035,l);for(let x=-2;x<=2;x++)n.moveTo(p+x*t*.012,l-e*.03),n.lineTo(p+x*t*.012,l+e*.035);n.stroke()}else if(M==="sad"||M==="dead")n.beginPath(),n.moveTo(p-t*.03,l+e*.04),n.quadraticCurveTo(p,l-e*.04,p+t*.03,l+e*.04),n.stroke(),M==="dead"&&(n.fillStyle="#ff7d8f",n.beginPath(),n.ellipse(p+t*.012,l+e*.07,t*.012,e*.04,.2,0,7),n.fill(),n.stroke());else if(M==="love"||M==="pant")n.beginPath(),n.ellipse(p,l+e*.02,t*.022,e*.05,0,0,7),n.fill(),n.stroke();else if(s==="gritted"){n.fillStyle="#fff",n.beginPath(),$e(n,p-t*.04,l-e*.03,t*.08,e*.06,10),n.fill(),n.stroke(),n.lineWidth=4,n.beginPath(),n.moveTo(p-t*.04,l),n.lineTo(p+t*.04,l);for(let x=-2;x<=2;x++)n.moveTo(p+x*t*.014,l-e*.03),n.lineTo(p+x*t*.014,l+e*.03);n.stroke()}else if(s==="tongue-out")n.beginPath(),n.moveTo(p-t*.035,l),n.quadraticCurveTo(p,l+e*.05,p+t*.035,l),n.stroke(),n.fillStyle="#ff6f8a",n.beginPath(),n.ellipse(p+t*.008,l+e*.06,t*.016,e*.05,.15,0,7),n.fill(),n.stroke(),n.strokeStyle="rgba(0,0,0,0.35)",n.lineWidth=3,n.beginPath(),n.moveTo(p+t*.008,l+e*.03),n.lineTo(p+t*.01,l+e*.08),n.stroke();else if(s==="wide-eyed")n.beginPath(),n.ellipse(p,l+e*.02,t*.016,e*.04,0,0,7),n.fill(),n.stroke();else if(s==="cheeky")n.beginPath(),n.moveTo(p-t*.04,l-e*.01),n.quadraticCurveTo(p,l+e*.08,p+t*.045,l-e*.035),n.stroke();else if(s==="smug")n.beginPath(),n.moveTo(p-t*.03,l+e*.01),n.quadraticCurveTo(p+t*.01,l+e*.05,p+t*.04,l-e*.03),n.stroke();else if(s==="worried"){n.beginPath(),n.moveTo(p-t*.03,l+e*.02);for(let x=0;x<=6;x++)n.lineTo(p-t*.03+x*t*.01,l+e*.02+(x%2?-1:1)*e*.012);n.stroke()}else s==="goofy"?(n.beginPath(),n.moveTo(p-t*.04,l),n.quadraticCurveTo(p,l+e*.09,p+t*.04,l),n.closePath(),n.fill(),n.stroke(),n.fillStyle="#ff7d8f",n.beginPath(),n.ellipse(p+t*.01,l+e*.07,t*.016,e*.045,0,0,7),n.fill(),n.stroke(),n.fillStyle="#fff",n.fillRect(p-t*.02,l-2,t*.016,e*.03)):s==="determined"?(n.beginPath(),n.moveTo(p-t*.03,l+e*.01),n.lineTo(p+t*.03,l+e*.01),n.stroke()):(n.beginPath(),n.moveTo(p-t*.035,l-e*.01),n.quadraticCurveTo(p,l+e*.07,p+t*.035,l-e*.01),n.stroke());n.strokeStyle="rgba(0,0,0,0.25)",n.lineWidth=6,n.beginPath(),n.arc(o,a+e*.09,t*.012,.2,Math.PI-.2),n.stroke()}function Oy(n,t){return nn(256,200,(e,i,s)=>{e.fillStyle="#ffffff",$e(e,0,0,i,s,20),e.fill(),e.fillStyle=t,e.fillRect(0,0,i,44),e.font=`30px ${Kc}`,e.fillStyle="#fff",e.textAlign="center",e.textBaseline="middle",e.fillText("MARKRUN",i/2,24),je(e,String(n),i/2,128,140,"#1a1420","#1a1420",0),e.fillStyle="#c33";for(let[r,o]of[[16,60],[i-16,60],[16,s-16],[i-16,s-16]])e.beginPath(),e.arc(r,o,6,0,7),e.fill()})}function zy(n){return nn(128,128,(t,e,i)=>{if(t.fillStyle="#ffffff",t.strokeStyle="#1a1420",t.lineWidth=8,t.beginPath(),t.arc(e/2,i/2-6,48,0,7),t.fill(),t.stroke(),t.beginPath(),t.moveTo(e/2-12,i-26),t.lineTo(e/2,i-4),t.lineTo(e/2+8,i-28),t.fill(),n==="!")je(t,"!",e/2,i/2-4,84,"#ff3d8b","#1a1420",.12);else if(n==="heart"){t.fillStyle="#ff2d6f";let s=e/2,r=i/2-2,o=16;t.beginPath(),t.moveTo(s,r+o*1.3),t.bezierCurveTo(s-o*2.6,r-o*.3,s-o,r-o*2.2,s,r-o*.7),t.bezierCurveTo(s+o,r-o*2.2,s+o*2.6,r-o*.3,s,r+o*1.3),t.fill(),t.stroke()}else if(n==="floss"){t.fillStyle="#ff9bd2";for(let[s,r,o]of[[54,44,18],[74,46,17],[64,30,16],[62,54,16]])t.beginPath(),t.arc(s,r,o,0,7),t.fill();t.strokeStyle="#c99a5a",t.lineWidth=6,t.beginPath(),t.moveTo(64,62),t.lineTo(64,96),t.stroke()}else if(n==="sweat"){t.fillStyle="#57c7ff";for(let[s,r]of[[50,50],[78,64]])t.beginPath(),t.moveTo(s,r-22),t.quadraticCurveTo(s+14,r,s,r+10),t.quadraticCurveTo(s-14,r,s,r-22),t.fill(),t.stroke()}})}function gd(n,t={}){let e=n.look||{},i=fd[e.build]||fd.compact,s=Ny(n.id+(n.nickname||"")),r=Un(s),o=n.colour?.primary||"#ff4757",a=n.colour?.secondary||"#ffffff",l=e.skin||"#f1c6a5",h=pd[s%pd.length],u=[],m=gt(o),d=gt(a),c=gt(l),p=gt(h),M=new Qt(a).getHSL({}).l>.85?"#ffffff":a,x=gt(M),f=gt("#ffffff"),b=gt("#22202c"),v=(st,it,nt=Uy)=>xe(st,it,{ol:nt,olRef:9}),_=new re;_.name=`runner-${n.id}`;let U=new re;_.add(U);let I=new re;U.add(I);let w=i.leg/2,R=i.leg+i.shoe[1]*.75;I.position.y=R;let y=v(Gt(`shorts${e.build}`,()=>new he(i.torso[0]*.92,.32,i.torso[2]*.95,3,.12)),d);y.position.y=.02,I.add(y);let g=new re;g.position.y=.12,I.add(g);let S=v(Gt(`torso${e.build}`,()=>new he(...i.torso,4,Math.min(i.torso[2],i.torso[0])*.42)),m);S.position.y=i.torso[1]/2,g.add(S);for(let st of[-1,1]){let it=xe(Gt(`stripe${e.build}`,()=>new we(.06,i.torso[1]*.8,i.torso[2]*.7)),gt(a),{cast:!1});it.position.set(st*i.torso[0]*.5,i.torso[1]*.5,0),g.add(it)}let T=Oy(n.lane??0,o);u.push(T);let C=new Ce(Gt("bib",()=>new hn(1,.78)),gt(16777215,{map:T})),N=Math.min(.42,i.torso[0]*.6);C.scale.setScalar(N),C.position.set(0,i.torso[1]*.45,i.torso[2]/2+.012),g.add(C);let q=new re;q.position.y=i.torso[1]+.02,g.add(q);let A=new re;q.add(A);let H=document.createElement("canvas");H.width=1024,H.height=512;let V=new Vs(H);V.colorSpace=qe,V.anisotropy=4,u.push(V);let rt=null,ot=st=>{st!==rt&&(rt=st,Fy(H.getContext("2d"),1024,512,l,e.face||"grin",st),V.needsUpdate=!0)};ot("normal");let D=i.head,St=v(Gt(`head${D}`,()=>new de(D,32,20).scale(1,.98,.96)),gt(16777215,{map:V}));St.position.y=D*.92,A.add(St);for(let st of[-1,1]){let it=v(Gt(`ear${D}`,()=>new de(D*.2,10,8).scale(.6,1,.8)),c,2.5);it.position.set(st*D*.97,D*.9,0),A.add(it)}let K=v(Gt(`nose${D}`,()=>new de(D*.14,10,8)),c,2);K.position.set(0,D*.84,D*.97),A.add(K),At(e.hair,e.hat),lt(e.hat);let Y=[];for(let st of[-1,1]){let it=new re;it.position.set(st*(i.torso[0]/2+i.armR*.55),i.torso[1]-i.armR*1.1,0),g.add(it);let nt=v(Gt(`sleeve${e.build}`,()=>new de(i.armR*1.65,14,10)),m);it.add(nt);let _t=v(Gt(`uarm${e.build}`,()=>new ci(i.armR,i.arm/2-i.armR,4,10).translate(0,-i.arm/4,0)),c);it.add(_t);let ht=new re;ht.position.y=-i.arm/2+i.armR*.4,it.add(ht);let It=v(Gt(`farm${e.build}`,()=>new ci(i.armR*.95,i.arm/2-i.armR,4,10).translate(0,-i.arm/4,0)),c);ht.add(It);let Pt=v(Gt(`hand${e.build}`,()=>new de(i.hand,14,10).scale(1,1.1,.9)),c);Pt.position.y=-i.arm/2-i.hand*.4,ht.add(Pt),Y.push({sh:it,el:ht,hand:Pt})}let X=[];for(let st of[-1,1]){let it=new re;it.position.set(st*i.torso[0]*.24,0,0),I.add(it);let nt=v(Gt(`thigh${e.build}`,()=>new ci(i.legR*1.15,w-i.legR,4,10).translate(0,-w/2,0)),c);it.add(nt);let _t=v(Gt(`sleg${e.build}`,()=>new ue(i.legR*1.6,i.legR*1.5,w*.5,12).translate(0,-w*.2,0)),d);it.add(_t);let ht=new re;ht.position.y=-w,it.add(ht);let It=v(Gt(`shin${e.build}`,()=>new ci(i.legR,w-i.legR,4,10).translate(0,-w/2,0)),c);ht.add(It);let Pt=v(Gt(`sock${e.build}`,()=>new ue(i.legR*1.12,i.legR*1.12,w*.25,10).translate(0,-w*.86,0)),gt(16777215),2.5);ht.add(Pt);let bt=new re;bt.position.y=-w,ht.add(bt);let Dt=v(Gt(`shoe${e.build}`,()=>new he(...i.shoe,3,i.shoe[1]*.45).translate(0,-i.shoe[1]*.25,i.shoe[2]*.22)),x);bt.add(Dt);let qt=xe(Gt(`sole${e.build}`,()=>new he(i.shoe[0]*1.04,i.shoe[1]*.3,i.shoe[2]*1.03,2,.05).translate(0,-i.shoe[1]*.62,i.shoe[2]*.22)),f,{ol:2.5,olRef:9});bt.add(qt);let Yt=xe(Gt(`swoosh${e.build}`,()=>new we(i.shoe[0]*1.06,i.shoe[1]*.18,i.shoe[2]*.5).translate(0,-i.shoe[1]*.2,i.shoe[2]*.2)),gt(o),{cast:!1});bt.add(Yt),X.push({hp:it,kn:ht,an:bt})}mt(e.accessory);let $={},Z=new Zo(new Mr({transparent:!0,depthTest:!1}));Z.scale.setScalar(.9),Z.visible=!1,Z.renderOrder=20,_.add(Z);let at=st=>{if(!st){Z.visible=!1;return}$[st]||($[st]=zy(st),u.push($[st])),Z.material.map=$[st],Z.material.needsUpdate=!0,Z.visible=!0},xt=R+.12+i.torso[1]+.02+D*2;Z.position.y=xt+.45;let Tt=new Set([S,y,St,...Y.flatMap(st=>[st.hand]),...X.map(st=>st.an.children[0])]);for(let st of Y)st.sh.children.forEach(it=>it.isMesh&&Tt.add(it));for(let st of X)st.hp.children.forEach(it=>it.isMesh&&Tt.add(it));_.traverse(st=>{st.isMesh&&!st.userData.isOutline&&(st.castShadow=Tt.has(st))});function At(st,it){let nt=st||"short";if(nt==="bald")return;let _t=(ht=1.07,It=.48)=>{let Pt=v(Gt(`hcap${D}${ht}${It}`,()=>new de(D*ht,24,14,0,Math.PI*2,0,Math.PI*It)),p);return Pt.position.y=D*.92,Pt.rotation.x=-.32,A.add(Pt),Pt};if(nt==="curly"||nt==="afro"){let ht=Gt(`curly${D}`,()=>{let Pt=Un(7),bt=[];for(let Dt=0;Dt<26;Dt++){let qt=Pt()*Math.PI*.55,Yt=Pt()*Math.PI*2,Lt=new G(Math.sin(qt)*Math.cos(Yt),Math.cos(qt),Math.sin(qt)*Math.sin(Yt)).multiplyScalar(D*1.02);Lt.z>D*.55&&Lt.y<D*.75||bt.push(new Je(D*.33,1).translate(Lt.x,Lt.y,Lt.z-D*.08))}return gn(bt)}),It=v(ht,p);It.position.y=D*.98,nt==="afro"&&(It.scale.setScalar(1.28),It.position.y=D*1.05),A.add(It);return}if(it==="beanie"||it==="bucket"||it==="bobble"){if(_t(1.05,.5),nt==="mullet"||nt==="long"||nt==="ponytail"){let ht=v(Gt(`mul${D}`,()=>new he(D*1.5,D*.9,D*.4,3,D*.15)),p);ht.position.set(0,D*.35,-D*.78),A.add(ht)}return}if(nt==="buzz"){let ht=v(Gt(`buzz${D}`,()=>new de(D*1.025,24,14,0,Math.PI*2,0,Math.PI*.45)),p,2);ht.position.y=D*.92,ht.rotation.x=-.32,A.add(ht);return}if(_t(),nt==="quiff"||nt==="swept"){let ht=v(Gt(`quiff${D}${nt}`,()=>new de(D*.55,16,10).scale(nt==="quiff"?1.3:1.7,nt==="quiff"?.75:.45,1)),p);ht.position.set(nt==="swept"?D*.25:0,D*1.82,D*.38),ht.rotation.set(-.5,0,nt==="swept"?-.35:0),A.add(ht)}if(nt==="mullet"){let ht=v(Gt(`mul${D}`,()=>new he(D*1.5,D*.9,D*.4,3,D*.15)),p);ht.position.set(0,D*.35,-D*.78),A.add(ht)}if(nt==="long"){let ht=v(Gt(`hlong${D}`,()=>new he(D*1.8,D*1.6,D*.5,3,D*.2)),p);ht.position.set(0,D*.4,-D*.62),A.add(ht)}if(nt==="ponytail"){let ht=new re;ht.position.set(0,D*1.35,-D*.85),A.add(ht);for(let It=0;It<3;It++){let Pt=v(Gt(`pt${D}${It}`,()=>new de(D*(.32-It*.05),12,8)),p);Pt.position.set(0,-It*D*.32,-It*D*.18),ht.add(Pt)}A.userData.pony=ht}if(nt==="bun"){let ht=v(Gt(`bun${D}`,()=>new de(D*.38,14,10)),p);ht.position.set(0,D*2,-D*.2),A.add(ht)}if(nt==="mohawk"||nt==="spiky"){let ht=nt==="mohawk"?5:9;for(let It=0;It<ht;It++){let Pt=v(Gt(`spk${D}`,()=>new Oe(D*.2,D*.7,8)),p),bt=nt==="mohawk"?0:It/ht*Math.PI*2,Dt=nt==="mohawk"?-.9+It/(ht-1)*1.8:.6;Pt.position.set(Math.sin(bt)*Math.sin(Dt)*D,D*.92+Math.cos(Dt)*D*1.05,(nt==="mohawk"?Math.sin(Dt):Math.cos(bt)*Math.sin(Dt))*D),Pt.lookAt(Pt.position.clone().multiplyScalar(3)),Pt.rotateX(Math.PI/2),A.add(Pt)}}}function lt(st){if(!st)return;let it=gt(a==="#ffffff"||a==="#f8f8f8"?o:a),nt=gt(o);if(st==="backwards-cap"){let _t=v(Gt(`capd${D}`,()=>new de(D*1.1,24,12,0,Math.PI*2,0,Math.PI*.42)),it);_t.position.y=D*.98,_t.rotation.x=-.18,A.add(_t);let ht=v(Gt(`brim${D}`,()=>new ue(D*.75,D*.75,D*.08,20,1,!1,-Math.PI/2,Math.PI).scale(1.2,1,1.15)),nt);ht.position.set(0,D*1.42,-D*.62),ht.rotation.set(-.12,Math.PI,0),A.add(ht)}else if(st==="bobble"){let _t=v(Gt(`bean${D}`,()=>new de(D*1.1,24,14,0,Math.PI*2,0,Math.PI*.5).scale(1,1.15,1)),nt);_t.position.y=D*.96,_t.rotation.x=-.12,A.add(_t);let ht=v(Gt(`brim2${D}`,()=>new Ke(D*1.05,D*.17,8,24)),it);ht.rotation.x=Math.PI/2-.12,ht.position.y=D*1.12,A.add(ht);let It=v(Gt(`bigbob${D}`,()=>new Je(D*.48,1)),it);It.position.y=D*2.45,A.add(It),A.userData.bobble=It}else if(st==="cap"||st==="visor"){if(st==="cap"){let ht=v(Gt(`capd${D}`,()=>new de(D*1.1,24,12,0,Math.PI*2,0,Math.PI*.42)),it);ht.position.y=D*.98,ht.rotation.x=-.18,A.add(ht)}else{let ht=v(Gt(`vband${D}`,()=>new Ke(D*1,D*.12,8,24)),it);ht.rotation.x=Math.PI/2-.25,ht.position.y=D*1.35,A.add(ht)}let _t=v(Gt(`brim${D}`,()=>new ue(D*.75,D*.75,D*.08,20,1,!1,-Math.PI/2,Math.PI).scale(1.2,1,1.15)),nt);_t.position.set(0,D*1.42,D*.62),_t.rotation.x=.12,A.add(_t)}else if(st==="beanie"){let _t=v(Gt(`bean${D}`,()=>new de(D*1.1,24,14,0,Math.PI*2,0,Math.PI*.5).scale(1,1.15,1)),it);_t.position.y=D*.96,_t.rotation.x=-.12,A.add(_t);let ht=v(Gt(`brim2${D}`,()=>new Ke(D*1.05,D*.17,8,24)),nt);ht.rotation.x=Math.PI/2-.12,ht.position.y=D*1.12,A.add(ht);let It=v(Gt(`bob${D}`,()=>new Je(D*.3,1)),nt);It.position.y=D*2.25,A.add(It)}else if(st==="headband"||st==="sweatband"){let _t=v(Gt(`hb${D}`,()=>new Ke(D*1,D*.13,8,28)),it);_t.rotation.x=Math.PI/2-.2,_t.position.y=D*1.3,A.add(_t);let ht=v(Gt(`hbt${D}`,()=>new he(D*.2,D*.5,D*.08,2,.02)),it);ht.position.set(.12,D*1.1,-D*1.05),ht.rotation.z=.5,A.add(ht),A.userData.tail=ht}else if(st==="bucket"){let _t=v(Gt(`buck${D}`,()=>new ue(D*.8,D*1.02,D*.7,20)),it);_t.position.y=D*1.75,A.add(_t);let ht=v(Gt(`buckb${D}`,()=>new ue(D*1.5,D*1.5,D*.06,24)),nt);ht.position.y=D*1.42,ht.rotation.x=.1,A.add(ht)}else if(st==="crown"||st==="tiara"){let _t=v(Gt(`crown${D}`,()=>new ue(D*.7,D*.62,D*.5,8,1,!0)),gt("#ffd23f",{side:Fe}));_t.position.y=D*2,A.add(_t)}else if(st==="wizard"||st==="party"){let _t=v(Gt(`cone${D}`,()=>new Oe(D*.8,D*1.8,16)),it);_t.position.y=D*2.3,_t.rotation.z=.15,A.add(_t);let ht=v(Gt(`bob${D}`,()=>new Je(D*.3,1)),nt);ht.position.set(-D*.12,D*3.15,0),A.add(ht)}else if(st==="helmet"||st==="bike_helmet"){let _t=v(Gt(`helm${D}`,()=>new de(D*1.14,20,12,0,Math.PI*2,0,Math.PI*.46).scale(1,.9,1.15)),it);_t.position.y=D*1,A.add(_t)}else if(st==="santa"){let _t=v(Gt(`santa${D}`,()=>new Oe(D*.95,D*1.6,16)),gt("#e8313f"));_t.position.y=D*2.2,_t.rotation.z=.5,A.add(_t);let ht=v(Gt(`santar${D}`,()=>new Ke(D*.95,D*.2,8,24)),gt("#ffffff"));ht.rotation.x=Math.PI/2,ht.position.y=D*1.45,A.add(ht)}else{let _t=v(Gt(`cone${D}`,()=>new Oe(D*.8,D*1.8,16)),it);_t.position.y=D*2.3,A.add(_t)}}function mt(st){if(st){if(st==="sunglasses"||st==="glasses"){let it=st==="sunglasses";for(let _t of[-1,1]){let ht=v(Gt(`lens${D}${it}`,()=>new he(D*.5,D*.32,D*.08,2,D*.06)),it?gt("#141420"):gt("#cfefff"),2);ht.position.set(_t*D*.3,D*1.02,D*.98),ht.rotation.y=_t*.28,A.add(ht)}let nt=xe(Gt(`bridge${D}`,()=>new we(D*.3,D*.06,D*.06)),gt("#141420"),{cast:!1});nt.position.set(0,D*1.06,D*1.04),A.add(nt)}else if(st==="medal"){let it=v(Gt("ribbon",()=>new Ke(.2,.03,6,20,Math.PI)),gt("#2e9bff"),2);it.rotation.z=Math.PI,it.position.set(0,i.torso[1]+.02,i.torso[2]/2-.05),it.rotation.x=-.3,g.add(it);let nt=v(Gt("medal",()=>new ue(.11,.11,.04,16).rotateX(Math.PI/2)),gt("#ffd23f",{emissive:"#664400",emissiveIntensity:.3}),2.5);nt.position.set(0,i.torso[1]-.22,i.torso[2]/2+.05),g.add(nt),C.position.y-=.1,C.position.x=.12,C.scale.multiplyScalar(.8)}else if(st==="headphones"){let it=v(Gt(`hp${D}`,()=>new Ke(D*1.08,D*.07,6,24,Math.PI)),gt("#22202c"),2);it.position.y=D*.95,A.add(it);for(let nt of[-1,1]){let _t=v(Gt(`hpc${D}`,()=>new ue(D*.3,D*.3,D*.2,14).rotateZ(Math.PI/2)),gt(o),2.5);_t.position.set(nt*D*1.02,D*.92,0),A.add(_t)}}else if(st==="sweatband"||st==="wristbands"||st==="watch")for(let it of Y){let nt=v(Gt(`wb${e.build}`,()=>new ue(i.armR*1.3,i.armR*1.3,.12,10).translate(0,-i.arm/2+.1,0)),gt(st==="watch"?"#22202c":a),2);if(it.el.add(nt),st==="watch")break}else if(st==="scarf"){let it=v(Gt("scarf",()=>new Ke(.22,.08,8,18)),gt(a));it.rotation.x=Math.PI/2,it.position.y=.02,q.add(it);let nt=v(Gt("scarft",()=>new he(.14,.5,.06,2,.03)),gt(a));nt.position.set(.1,-.15,-.25),nt.rotation.x=.5,q.add(nt),A.userData.tail2=nt}else if(st==="cape"){let it=v(Gt(`cape${e.build}`,()=>new hn(i.torso[0]*1.2,i.torso[1]*1.5,1,4).translate(0,-i.torso[1]*.75,0)),gt(a,{side:Fe}),2),nt=new re;nt.position.set(0,i.torso[1],-i.torso[2]/2-.03),nt.add(it),g.add(nt),A.userData.cape=nt}else if(st==="backpack"){let it=v(Gt(`bp${e.build}`,()=>new he(i.torso[0]*.7,i.torso[1]*.7,.25,3,.08)),gt(a));it.position.set(0,i.torso[1]*.5,-i.torso[2]/2-.12),g.add(it)}else if(st==="moustache"||st==="mustache"){let it=v(Gt(`mou${D}`,()=>new ci(D*.09,D*.5,4,8).rotateZ(Math.PI/2)),gt("#3a2616"),2);it.position.set(0,D*.7,D*.98),A.add(it)}else if(st==="beard"){let it=v(Gt(`beard${D}`,()=>new de(D*.78,18,12,0,Math.PI*2,Math.PI*.45,Math.PI*.55).scale(1.05,1,.75)),p,2.5);it.position.set(0,D*.78,D*.32),A.add(it);let nt=v(Gt(`mou${D}`,()=>new ci(D*.09,D*.5,4,8).rotateZ(Math.PI/2)),p,2);nt.position.set(0,D*.7,D*.98),A.add(nt)}else if(st==="bumbag"){let it=v(Gt(`bum${e.build}`,()=>new he(i.torso[0]*.5,.2,.18,2,.07)),gt(a==="#ffffff"||a==="#f8f8f8"?"#22202c":a));it.position.set(i.torso[0]*.12,.08,i.torso[2]/2+.08),I.add(it);let nt=xe(Gt(`strap${e.build}`,()=>new Ke(i.torso[0]*.48,.025,6,24).scale(1,i.torso[2]/i.torso[0]*1.05,1).rotateX(Math.PI/2)),gt("#22202c"),{cast:!1});nt.position.y=.1,I.add(nt)}else if(st==="bib"){let it=new Ce(Gt("bib",()=>new hn(1,.78)),C.material);it.scale.copy(C.scale),it.position.set(0,i.torso[1]*.5,-i.torso[2]/2-.012),it.rotation.y=Math.PI,g.add(it),C.scale.multiplyScalar(1.3)}else if(st==="bowtie")for(let it of[-1,1]){let nt=v(Gt("bow",()=>new Oe(.08,.16,4).rotateZ(Math.PI/2)),gt(a),2);nt.position.set(it*.08,i.torso[1]-.06,i.torso[2]/2+.03),nt.rotation.z=it>0?Math.PI:0,g.add(nt)}else if(st==="tutu"){let it=v(Gt(`tutu${e.build}`,()=>new ue(i.torso[0]*.55,i.torso[0]*.9,.18,16,1,!0)),gt("#ff9bd2",{side:Fe}),2);it.position.y=-.05,I.add(it)}}}let W={phase:r()*6.28,t:r()*10,lean:0,j:{},look:0,lookPitch:0},Et=W.j,Mt=["hipLx","hipRx","kneeL","kneeR","ankL","ankR","shLx","shRx","shLz","shRz","elL","elR","twist","lean","bob","roll","headY","headX","bodyX","bodyY","bodyZ","hipSpread"];for(let st of Mt)Et[st]=0;let et={},Rt="idle",$t=null,Ut=0;function B(st,it=null){(st!==Rt||it!==$t)&&(Rt=st,$t=it,Ut=0)}function k(st,it={}){W.t+=st,Ut+=st;let nt=W.t;for(let Pt of Mt)et[Pt]=0;let _t="normal",ht=10;if(Rt==="run"||Rt==="jog"||Rt==="trudge"||Rt==="distracted"){let Pt=Math.max(.5,it.speed??3.5),bt=Math.max(.2,it.rate??1),Dt=Rt==="trudge",qt=Dt?1.7:(2.55+.14*(Pt-3.5))*Math.pow(bt,.3)*(Rt==="jog"?.8:1);W.phase+=st*Math.PI*qt;let Yt=W.phase,Lt=Math.sin(Yt),ne=Math.cos(Yt),Zt=Dt?.4:Math.max(.45,Math.min(1,.62+.13*(Pt-3.5)));et.hipLx=-Zt*Lt,et.hipRx=Zt*Lt,et.kneeL=.2+(Dt?.5:1.35)*Math.max(0,ne)*(.7+Zt*.3),et.kneeR=.2+(Dt?.5:1.35)*Math.max(0,-ne)*(.7+Zt*.3),et.ankL=-.2*Lt,et.ankR=.2*Lt;let P=Dt?.3:.75*Zt+.15;et.shLx=P*Lt,et.shRx=-P*Lt,et.shLz=-.18,et.shRz=.18,et.elL=Dt?-.5:-1.5,et.elR=Dt?-.5:-1.5,et.twist=.16*Lt,et.roll=.05*Lt,et.bob=(Dt?.03:.11)*(Math.abs(ne)-.4),et.lean=(Dt?.05:.16)+Math.max(-.25,Math.min(.45,(it.slope??0)*1.6)),et.headX=-et.lean*.6,et.headY=-.08*Lt,ht=18,_t=it.effort>.6?"effort":it.effort>.3?"pant":"normal",Dt&&(et.headX=.35,et.lean=.25,_t="sad"),Rt==="distracted"&&(et.headY=it.lookYaw??.9,et.headX=-.15,et.twist+=(it.lookYaw??.9)*.3,_t="love")}else if(Rt==="ready")et.hipLx=-.5,et.hipRx=.35,et.kneeL=.6,et.kneeR=.5,et.lean=.35,et.bob=-.12,et.shLx=.5,et.shRx=-.6,et.elL=-1.3,et.elR=-1.3,et.headX=-.25,et.bob+=Math.sin(nt*3)*.01,_t="effort";else if(Rt==="wave")et.shRz=2.7,et.elR=.2*Math.sin(nt*9)-.25,et.shRx=Math.sin(nt*9)*.25,et.shLz=-.3,et.elL=-.4,et.bob=Math.abs(Math.sin(nt*4))*.05,et.headY=.1*Math.sin(nt*2),_t="happy";else if(Rt==="pose"){let Pt=$t||"flex";if(Pt==="flex")et.shLz=-1.5,et.shRz=1.5,et.elL=-1.9-Math.sin(nt*6)*.15,et.elR=-1.9-Math.sin(nt*6+1)*.15,et.shLx=-0,et.bob=-.06+Math.abs(Math.sin(nt*3))*.03,et.hipSpread=.25,et.kneeL=.3,et.kneeR=.3,_t="effort";else if(Pt==="point")et.shRx=-1.5,et.elR=0,et.shLz=-.3,et.elL=-1.6,et.shLx=-.3,et.headX=-.1,et.lean=-.05,_t="happy",et.bob=Math.sin(nt*5)*.02;else if(Pt==="stretch")et.hipRx=-.2,et.kneeR=2.3,et.shRx=.8,et.elR=-.6,et.shLz=-2.6,et.lean=.08+Math.sin(nt*2)*.04,_t="smug";else if(Pt==="spin"){let bt=Math.min(1,Ut/1.1);et.bodyY=(1-(1-bt)**2)*Math.PI*4,et.shLz=bt<1?-1.3:-2.6,et.shRz=bt<1?1.3:2.6,et.bob=bt<1?Math.abs(Math.sin(nt*7))*.2:Math.abs(Math.sin(nt*5))*.12,_t="happy"}else Pt==="bow"?(et.lean=.75+Math.sin(nt*2)*.05,et.shLx=.4,et.shRx=-1.2,et.elR=-1.6,et.shRz=.4,et.headX=-.2,_t="happy"):(et.shLz=-2.5,et.shRz=2.5,et.bob=Math.abs(Math.sin(nt*6))*.25,_t="happy");_t==="smug"&&(_t="normal")}else if(Rt==="celebrate"){let Pt=$t||"jump";if(Pt==="jump"){let bt=Math.abs(Math.sin(nt*5.5));et.bob=bt*.55,et.shLz=-2.6-bt*.3,et.shRz=2.6+bt*.3,et.elL=-.2,et.elR=-.2,et.kneeL=et.kneeR=(1-bt)*.8,et.hipLx=et.hipRx=-(1-bt)*.4,_t="happy",ht=22}else if(Pt==="fist"){let bt=Math.sin(nt*7);et.shRx=-2.6,et.elR=-.4+bt*.4,et.shLx=.4,et.elL=-1.8,et.bob=Math.abs(bt)*.08,et.lean=-.1,_t="happy"}else Pt==="kneel"?(et.lean=.85,et.kneeL=et.kneeR=.7,et.hipLx=et.hipRx=-.6,et.bob=-.25+Math.sin(nt*7)*.025,et.shLx=et.shRx=-.55,et.elL=et.elR=-.1,et.shLz=-.15,et.shRz=.15,et.headX=-.6,_t="pant"):Pt==="collapse"?(et.bodyX=-Math.PI/2+.05,et.shLz=-2.2,et.shRz=2.2,et.hipSpread=.4,et.kneeL=.3+Math.max(0,Math.sin(nt*9))*.4*(Math.sin(nt*.7)>.6?1:0),et.kneeR=.2,_t="dead",ht=4):Pt==="shrug"&&(et.shLz=-.9,et.shRz=.9,et.elL=-1.4,et.elR=-1.4,et.shLx=-.5,et.shRx=-.5,et.headX=.1,et.headY=Math.sin(nt*1.5)*.3,_t="sad")}else et.bob=Math.sin(nt*2)*.015,et.shLz=-.18,et.shRz=.18,et.elL=-.25,et.elR=-.25,et.headY=Math.sin(nt*.7)*.25,et.lean=.02,et.kneeL=et.kneeR=.05;it.lookYaw!=null&&Rt!=="distracted"&&(et.headY+=it.lookYaw);let It=1-Math.exp(-ht*st);for(let Pt of Mt){if(Pt==="bodyY"&&Rt==="pose"&&$t==="spin"){Et[Pt]=et[Pt];continue}Et[Pt]+=(et[Pt]-Et[Pt])*It}if(Rt==="pose"&&$t==="spin"||(Et.bodyY=Et.bodyY%(Math.PI*2),Et.bodyY>Math.PI&&(Et.bodyY-=Math.PI*2)),X[0].hp.rotation.set(Et.hipLx,0,-Et.hipSpread),X[1].hp.rotation.set(Et.hipRx,0,Et.hipSpread),X[0].kn.rotation.x=Et.kneeL,X[1].kn.rotation.x=Et.kneeR,X[0].an.rotation.x=Et.ankL-Et.kneeL*.35,X[1].an.rotation.x=Et.ankR-Et.kneeR*.35,Y[0].sh.rotation.set(Et.shLx,0,Et.shLz-0),Y[1].sh.rotation.set(Et.shRx,0,Et.shRz),Y[0].el.rotation.x=Et.elL,Y[1].el.rotation.x=Et.elR,g.rotation.set(Et.lean,Et.twist,0),I.rotation.set(0,-Et.twist*.5,Et.roll),I.position.y=R+Et.bob,A.rotation.set(Et.headX,Et.headY,0),U.rotation.set(Et.bodyX,Et.bodyY,Et.bodyZ),U.position.y+=((Rt==="celebrate"&&$t==="collapse"?i.torso[2]*.5+.08:0)-U.position.y)*It,A.userData.bobble&&(A.userData.bobble.position.y=D*2.45+Math.abs(Math.sin(W.phase))*.04),A.userData.pony&&(A.userData.pony.rotation.x=.4+Math.sin(W.phase*2)*.35),A.userData.tail&&(A.userData.tail.rotation.x=.6+Math.sin(W.phase*2)*.3),A.userData.cape&&(A.userData.cape.rotation.x=-.3-Math.min(1.1,(it.speed??0)*.15)+Math.sin(nt*8)*.08),it.expr&&(_t=it.expr),ot(_t),Z.visible){Z.position.y=xt+.45+Math.sin(nt*6)*.08;let Pt=.9+Math.sin(nt*9)*.05;Z.scale.set(Pt,Pt,Pt)}}function pt(){for(let st of u)st.dispose?.();Z.material.dispose()}return{id:n.id,info:n,root:_,update:k,set:B,setPop:at,setExpr:ot,dispose:pt,height:xt,hipH:R,get state(){return Rt},get variant(){return $t}}}var By=(n,t,e)=>{let i=Math.max(0,Math.min(1,(e-n)/(t-n)));return i*i*(3-2*i)};function xd(n,t,e){let i=n.timeMap,s={};e.forEach((y,g)=>s[y.id]=y.lane??g+1);let r=n.runners.length,o=Object.values(s),a=(Math.min(...o)+Math.max(...o))/2,l=Math.min(1.25,(ke-1.6)/Math.max(1,r-1)),h=n.runners.map((y,g)=>{let S=qr(i,y.officialS),T=((s[y.id]??g+1)-a)*l;return{...y,finishB:S,base:T,seed:g*1.7+.3}}),u=Object.fromEntries(h.map(y=>[y.id,y])),m=[...h].sort((y,g)=>y.officialS-g.officialS).map(y=>y.id),d=Object.fromEntries(m.map((y,g)=>[y,g+1])),c=u[m[0]],p=m.map(y=>u[y].officialS),M=u[m[0]].finishB,x=u[m.at(-1)].finishB,f=r>1&&p[1]-p[0]<=1.5,b=y=>Math.max(.05,(cs(i,y+.05)-cs(i,y-.05))/.1),v=new Map;function _(y){let g=Math.round(y*1e3);if(v.has(g))return v.get(g);let S=y<=0?0:cs(i,y),T=y<=0?4:b(y),C={b:y,raceS:S,rate:T,byId:{},order:[]};for(let H of h){let V=Rn(H.progress,S),rt=S>=H.officialS&&y>=H.finishB-1e-6,ot=(Rn(H.progress,S+1)-Rn(H.progress,Math.max(0,S-1)))/(S>1?2:1);C.byId[H.id]={id:H.id,m:V,finished:rt,vRace:rt?0:ot,place:d[H.id]}}for(let H of h){let V=C.byId[H.id],rt=V.m,ot=H.base;ot+=.22*Math.sin(V.m/85+H.seed);for(let K of h){if(K===H)continue;let Y=C.byId[K.id],X=V.m-Y.m;if(Math.abs(X)<4&&!V.finished&&!Y.finished){let $=(1-Math.abs(X)/4)*.32;ot+=Math.sign(H.base-K.base||H.seed-K.seed)*$}}let D=0;if(V.finished){let K=y-H.finishB,Y=(Rn(H.progress,H.officialS)-Rn(H.progress,H.officialS-2))/2*b(H.finishB),X=Math.min(14,Math.max(4,Y)),$=1.6;rt=5e3+(K<$?X*(K-K*K/(2*$)):X*$/2+Math.min(10+d[H.id]*1.5,(K-$)*.9));let at=(d[H.id]-(r+1)/2)*1.6;ot=ot+(at-ot)*By(0,2.5,K),D=K}let St=t.sample(rt,H.id);ot*=1-St.div,ot=Math.max(-ke/2+.6,Math.min(ke/2-.6,ot)),Object.assign(V,{mVis:rt,x:St.x+St.rx*ot,z:St.z+St.rz*ot,y:t.heightAt(St.x+St.rx*ot,St.z+St.rz*ot)+.16,tx:St.tx,tz:St.tz,slope:St.slope,div:St.div,divInfo:St.divInfo,lat:ot,post:D,distToFinish:Math.max(0,5e3-V.m)})}let N=h.filter(H=>C.byId[H.id].finished).sort((H,V)=>H.officialS-V.officialS),q=h.filter(H=>!C.byId[H.id].finished).sort((H,V)=>C.byId[V.id].m-C.byId[H.id].m||H.officialS-V.officialS);C.order=[...N,...q].map(H=>H.id),C.leader=C.byId[C.order[0]];let A=u[C.order[0]];for(let[H,V]of C.order.entries()){let rt=C.byId[V];if(rt.finished)rt.gapText=H===0?va(u[V].officialS):`+${(u[V].officialS-c.officialS).toFixed(0)}s`;else if(H===0)rt.gapText="LEADER";else{let ot=C.byId[C.order[0]].finished?c:A;rt.gapText=`+${Math.max(0,S-ls(ot.progress,rt.m)).toFixed(1)}s`}}return v.size>400&&v.clear(),v.set(g,C),C}return{stateAt:_,orderAt:y=>_(y).order,gapM:(y,g,S)=>{let T=_(S);return Math.abs((T.byId[y]?.m??0)-(T.byId[g]?.m??0))},finishedAt:(y,g)=>_(g).byId[y]?.finished,allFinishedAt:y=>y>x,firstFinishB:M,lastFinishB:x,photoFinish:f,finishOrder:m,place:d,byId:u,R:h,rateAt:b,durationS:i.durationS}}function va(n){let t=Math.floor(n/60),e=Math.round(n-t*60);return`${t}:${String(e).padStart(2,"0")}`}function yd({plan:n,sim:t,backedIds:e=[],hasDiversion:i}){let s=n.events,r=t.lastFinishB+3.5,o=[],a=(w,R,y,g,S={})=>{y-R>=1.2&&o.push({type:w,a:R,b:y,prio:g,...S})},l=t.firstFinishB,h=s.filter(w=>w.type==="finish").sort((w,R)=>w.broadcastS-R.broadcastS),u=l-5.5;h.forEach((w,R)=>{let y=h[R-1];y&&w.broadcastS-y.broadcastS>7.5&&(a("front",y.broadcastS+2.2,w.broadcastS-3.2,10,{ids:[w.who],tag:"chaser"}),u=w.broadcastS-3.2),a("finishcam",u,w.broadcastS+2.2,10,{ids:[w.who]}),u=w.broadcastS+2.2}),t.photoFinish&&a("photo",l-.02,l+.02,11);let m=s.find(w=>w.type==="final_stretch");if(m){let w=m.broadcastS,R=l-5.5,y=Math.max(1,Math.round((R-w)/6)),g=["final","track","battle","final","drone","front"];for(let S=0;S<y;S++){let T=w+(R-w)*S/y,C=w+(R-w)*(S+1)/y,N=(T+C)/2,q=t.orderAt(N),A=g[S%g.length],H=[q[0]];A==="battle"&&(H=[q[0],q[1]]);let V=t.gapM(q[0],q[1],N)<12;S===0?(A="final",H=[q[0]]):V&&A!=="final"&&(A="battle",H=[q[0],q[1]]),a(A,T,C,5,{ids:H})}}let d=s.filter(w=>w.type==="diversion").sort((w,R)=>w.broadcastS-R.broadcastS);d[0]&&a("distracted",d[0].broadcastS+.6,Math.min(d[0].endBroadcastS-.4,d[0].broadcastS+6),9,{ids:[d[0].who],banner:!0});for(let w of s.filter(R=>R.type==="hill")){let R=t.rateAt(w.broadcastS),y=Math.max(2.6,Math.min(6,140/Math.max(1,R*3.4)));a("hill",w.broadcastS-1.4,w.broadcastS+y,7,{lap:w.lap})}let c=s.find(w=>w.type==="lap");c&&a("lapboard",c.broadcastS-2.6,c.broadcastS+2,6);for(let w of s.filter(R=>R.type==="lead_change"))a("battle",w.broadcastS-1.6,w.broadcastS+2.8,6,{ids:[w.to,w.from],tag:"lead"});let p=-1e9,M=s.filter(w=>w.type==="lead_change").map(w=>w.broadcastS);for(let w of s.filter(R=>R.type==="overtake")){let R=e.includes(w.by)||e.includes(w.on),g=t.orderAt(w.broadcastS+.5).indexOf(w.by)<=1;!R&&!g||w.broadcastS-p<11||M.some(S=>Math.abs(S-w.broadcastS)<6)||(p=w.broadcastS,a("battle",w.broadcastS-1.4,w.broadcastS+2.6,R?4:3,{ids:[w.by,w.on]}))}a("startgo",-3.2,2.4,12),a("heli",-8.5,-3.2,12),o.sort((w,R)=>R.prio-w.prio||w.a-R.a);let x=[],f=(w,R)=>!x.some(y=>w<y.b&&R>y.a);for(let w of o){if(f(w.a,w.b)){x.push(w);continue}let R=w.a,y=w.b;for(let g of x)R<g.b&&y>g.a&&(g.a<=R?R=g.b:y=Math.min(y,g.a));y-R>=2.2&&f(R,y)&&x.push({...w,a:R,b:y})}x.sort((w,R)=>w.a-R.a);let b=[],v=-8.5,_=0,U=["track","drone","front","chase","track","blimp","front","side"],I=(w,R)=>{let y=R-w;if(y<=.05)return;if(y<2.2&&b.length){b.at(-1).b=R;return}let g=Math.max(1,Math.round(y/5.2));for(let S=0;S<g;S++){let T=w+y*S/g,C=w+y*(S+1)/g,N=(T+C)/2,q=t.orderAt(N),A=U[_++%U.length],H=[q[0]],V=e.filter(rt=>!t.finishedAt(rt,N)&&t.gapM(q[0],rt,N)>25);V.length&&_%3===0?(A="chase",H=[V[_%V.length]]):A==="track"||A==="side"?H=q.filter(rt=>t.gapM(q[0],rt,N)<15).slice(0,3):(A==="drone"||A==="blimp")&&(H=q),t.allFinishedAt(N-2)&&(A="celebrate",H=t.finishOrder),b.push({type:A,a:T,b:C,prio:1,ids:H,filler:!0})}};for(let w of x)w.a>v&&I(v,w.a),b.push(w),v=Math.max(v,w.b);return v<r+30&&I(v,r+30),b}function vd({camera:n,C:t,sim:e,world:i,funfair:s}){let r={pos:new G,look:new G,fov:45},o={off:new G,lookOff:new G,fov:45,init:!1},a=null,l=new G,h=new G,u=new G(0,1,0),m={};function d(b,v){let _=e.stateAt(v),U=b.map(q=>_.byId[q]).filter(Boolean);if(!U.length)return{p:new G(_.leader.x,_.leader.y,_.leader.z),h:new G(_.leader.tx,0,_.leader.tz),m:_.leader.m,spread:0};let I=new G,w=0;for(let q of U)I.x+=q.x,I.y+=q.y,I.z+=q.z,w+=q.m;I.divideScalar(U.length),w/=U.length;let R=1e9,y=-1e9;for(let q of U)R=Math.min(R,q.m),y=Math.max(y,q.m);let g=U[0],S=Math.max(0,g.mVis-18),T=t.xzAt(S,g.id),C=t.xzAt(S+36,g.id),N=new G(C.x-T.x,0,C.z-T.z).normalize();return isFinite(N.x)||N.set(0,0,1),{p:I,h:N,m:w,spread:y-R,list:U}}let c=b=>new G(-b.z,0,b.x);function p(b,v,_){let U=(v-b.a)/Math.max(.01,b.b-b.a),I=i.anchors.finish,w=i.anchors.start,R,y,g=45,S=!0;switch(b.type){case"heli":{let T=new G(150,0,0),C=new G(w.x,w.y,w.z),N=jc(Math.min(1,U*1.05)),q=-1.2+N*1.6,A=420-N*360;R=new G(T.x+Math.cos(q)*A,170-N*140,T.z+Math.sin(q)*A).lerp(new G(C.x-w.tx*40+w.rx*25,C.y+22,C.z-w.tz*40+w.rz*25),N*N),y=T.clone().setY(10).lerp(C,Math.min(1,N*1.3)),g=50,S=!1;break}case"startgo":{let T=new G(w.x,w.y,w.z),C=new G(w.tx,0,w.tz),N=c(C);if(v<.6)R=T.clone().addScaledVector(C,9.5+(v+3.2)*.25).addScaledVector(N,2.6).add(u.clone().multiplyScalar(1.9)),y=T.clone().add(u.clone().multiplyScalar(1.3)).addScaledVector(C,-1),g=42;else{let q=d(e.orderAt(v).slice(0,3),v);R=q.p.clone().addScaledVector(q.h,11).addScaledVector(c(q.h),3.5).add(u.clone().multiplyScalar(2.2)),y=q.p.clone().add(u.clone().multiplyScalar(1.2)),g=44}S=!1;break}case"track":case"side":{let T=d(b.ids,v),C=c(T.h),N=b.type==="side"?-1:1,q=8+Math.min(14,T.spread*.6);R=T.p.clone().addScaledVector(C,N*(q+2)).addScaledVector(T.h,3+Math.sin(U*3)*.6).add(u.clone().multiplyScalar(2.6)),y=T.p.clone().addScaledVector(T.h,1.5).add(u.clone().multiplyScalar(1.1)),g=42;break}case"front":case"final":{let T=d(b.ids,v),C=c(T.h),N=b.type==="final"?7.5-U*1.5:7;R=T.p.clone().addScaledVector(T.h,N).addScaledVector(C,b.type==="final"?1.4:-2).add(u.clone().multiplyScalar(b.type==="final"?.9:1.8)),y=T.p.clone().add(u.clone().multiplyScalar(1.35)).addScaledVector(T.h,-2),g=b.type==="final"?38:42;break}case"chase":{let T=d(b.ids,v),C=c(T.h);R=T.p.clone().addScaledVector(T.h,-7.5).addScaledVector(C,2.2).add(u.clone().multiplyScalar(3)),y=T.p.clone().addScaledVector(T.h,5).add(u.clone().multiplyScalar(1.2)),g=46;break}case"battle":{let T=d(b.ids,v),C=c(T.h),N=Math.floor(b.a*7)%2?1:-1,q=11+Math.min(10,T.spread*.7);R=T.p.clone().addScaledVector(T.h,q*.7).addScaledVector(C,N*q*.75).add(u.clone().multiplyScalar(2.3)),y=T.p.clone().add(u.clone().multiplyScalar(1.1)),g=42;break}case"drone":case"blimp":{let T=e.stateAt(v),C=T.byId[T.order[0]],N=T.order.map(D=>T.byId[D]).filter(D=>!D.finished),q=new G;for(let D of N.length?N:[C])q.add(new G(D.x,D.y,D.z));q.divideScalar(Math.max(1,N.length));let A=N.length?N[0].m-N.at(-1).m:0,H=d([T.order[0]],v),V=b.type==="blimp"?38+Math.min(50,A*.25):20+Math.min(40,A*.25),rt=b.type==="blimp"?48:30+Math.min(40,A*.25),ot=q.clone().lerp(new G(C.x,C.y,C.z),.5);R=ot.clone().addScaledVector(H.h,-rt).addScaledVector(c(H.h),rt*.6).add(u.clone().multiplyScalar(V)),y=ot,g=46;break}case"hill":{let T=i.anchors.hillM,C=t.sample(T+105),N=new G(C.tx,0,C.tz),q=c(N);R=new G(C.x,C.y,C.z).addScaledVector(q,6.5).add(u.clone().multiplyScalar(2.2));let A=e.stateAt(v),H=A.order.map(D=>A.byId[D]).filter(D=>t.geoOf(D.m)>T-120&&t.geoOf(D.m)<T+200&&!D.finished),V=H.length?H[0]:null,rt=V?new G(V.x,V.y+1.1,V.z):new G(C.x,C.y+1,C.z);y=rt;let ot=R.distanceTo(rt);g=Wu.clamp(2*Math.atan(5.5/ot)*180/Math.PI,12,50),S=!0;break}case"lapboard":{let T=i.anchors.lapBoard,C=new G;T.getWorldPosition(C);let N=t.sample(2491),q=new G(N.tx,0,N.tz),A=c(q);R=new G(N.x,N.y,N.z).addScaledVector(A,-(4.6+3)).add(u.clone().multiplyScalar(2.4));let H=e.stateAt(v),V=H.order.map(ot=>H.byId[ot]).filter(ot=>ot.m>2350&&ot.m<2600),rt=V.length?new G(V[0].x,V[0].y+1.2,V[0].z):C.clone().add(u.clone().multiplyScalar(2));y=C.clone().add(u.clone().multiplyScalar(1.8)).lerp(rt,.45),g=46;break}case"finishcam":{let T=new G(I.tx,0,I.tz),C=c(T),N=e.stateAt(v),q=b.ids?.[0]??N.order[0],A=N.byId[q];R=new G(I.x,I.y,I.z).addScaledVector(T,16).addScaledVector(C,-4).add(u.clone().multiplyScalar(2.6));let H=new G(I.x,I.y+2.5,I.z),V=A&&!A.finished?new G(A.x,A.y+1.3,A.z):H;y=H.clone().lerp(V,A&&!A.finished?Math.min(.85,15/Math.max(15,A.distToFinish)):.3),g=A&&!A.finished&&A.distToFinish>30?30:40;break}case"celebrate":{let T=e.stateAt(v),C=new G;for(let H of T.order)C.add(new G(T.byId[H].x,T.byId[H].y,T.byId[H].z));C.divideScalar(T.order.length);let N=new G(I.tx,0,I.tz),q=c(N),A=Math.sin(v*.15)*.5;R=C.clone().addScaledVector(N,-10*Math.cos(A)).addScaledVector(q,10*Math.sin(A)).add(u.clone().multiplyScalar(2.6)),y=C.clone().add(u.clone().multiplyScalar(1.2)),g=46,S=!1;break}case"photo":{let T=new G(I.tx,0,I.tz),C=c(T);R=new G(I.x,I.y,I.z).addScaledVector(C,8.5).add(u.clone().multiplyScalar(1.3)),y=new G(I.x,I.y+1.1,I.z),g=40,S=!1;break}case"distracted":{let T=d(b.ids,v),C=c(T.h),N=i.anchors.nearestOnRibbon(T.p.x,T.p.z),q=Math.sign((N[0]-T.p.x)*C.x+(N[1]-T.p.z)*C.z)||1,A=C.clone().multiplyScalar(q);if(U<.55){let H=T.h.clone().multiplyScalar(.55).addScaledVector(A,.85).normalize();R=T.p.clone().addScaledVector(H,5.2).add(u.clone().multiplyScalar(2)),y=T.p.clone().add(u.clone().multiplyScalar(1.85)),g=46}else R=T.p.clone().addScaledVector(T.h,-12).addScaledVector(A,-9).add(u.clone().multiplyScalar(7.5)),y=T.p.clone().addScaledVector(A,10).add(u.clone().multiplyScalar(2.5)),g=52;break}default:{let T=d(b.ids||[],v);R=T.p.clone().addScaledVector(T.h,-10).add(u.clone().multiplyScalar(4)),y=T.p.clone()}}return{pos:R,look:y,fov:g,damp:S}}let M=0;function x(b,v,_){let U=_.find(g=>b>=g.a&&b<g.b)||_.at(-1),I=U.type==="distracted"&&(b-U.a)/(U.b-U.a)>=.55?1:0,w=U!==a||I!==M;M=I,a=U;let R=p(U,b,v);if(!R)return{shot:U,cut:w};let y=t.heightAt(R.pos.x,R.pos.z)+.8;if(R.pos.y<y&&(R.pos.y=y),w||!o.init||!R.damp)r.pos.copy(R.pos),r.look.copy(R.look),o.fov=R.fov,o.init=!0;else{let g=1-Math.exp(-4.5*v),S=r.pos.clone().sub(r.look),T=R.pos.clone().sub(R.look);S.lerp(T,g),r.look.copy(R.look),r.pos.copy(r.look).add(S),o.fov+=(R.fov-o.fov)*g}return n.position.copy(r.pos),n.lookAt(r.look),Math.abs(n.fov-o.fov)>.01&&(n.fov=o.fov,n.updateProjectionMatrix()),{shot:U,cut:w}}function f(){o.init=!1,a=null}return{update:x,reset:f,evaluate:p,get shot(){return a},cam:r}}function jc(n){return n<.5?2*n*n:1-Math.pow(-2*n+2,2)/2}var Hy=`
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
`,_d=n=>`${n}<sup>${["th","st","nd","rd"][n%100>10&&n%100<14||n%10>3?0:n%10]}</sup>`,$y=n=>`${n}${["th","st","nd","rd"][n%100>10&&n%100<14||n%10>3?0:n%10]}`,Vy=n=>{n=Math.max(0,n);let t=Math.floor(n/60),e=Math.floor(n%60);return`${t}:${String(e).padStart(2,"0")}`},Fr=n=>String(n??"").replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t]),Gy=n=>{let t=parseInt(n.slice(1),16);return(t>>16&255)*.299+(t>>8&255)*.587+(t&255)*.114>165?"#1a1420":"#ffffff"};function Md(n,{runners:t,backedBy:e={},course:i,park:s,C:r}){if(!document.getElementById("mr-hud-css")){let X=document.createElement("style");X.id="mr-hud-css",X.textContent=Hy,document.head.appendChild(X)}let o=document.createElement("div");o.className="mr-hud mr-dim",o.innerHTML=`
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
    <div class="mr-results"></div>`,n.appendChild(o);let a=X=>o.querySelector(X),l={};o.querySelectorAll("[data-k]").forEach(X=>l[X.dataset.k]=X);let h=a(".mr-tower"),u={},m={};for(let X of t){let $=document.createElement("div");$.className="mr-row";let Z=(e[X.id]||[]).map(xt=>`<span class="mr-badge">${Fr(String(xt)).slice(0,10)}</span>`).join("");$.innerHTML=`<div class="mr-pos mr-num">1</div><div class="mr-card"><div class="mr-chip" style="background:${X.colour.primary};border-right:4px solid ${X.colour.secondary}"></div><div class="mr-name">${Fr(X.nickname)}${Z}</div><div class="mr-gap"></div></div>`,h.appendChild($),u[X.id]={el:$,pos:$.querySelector(".mr-pos"),gap:$.querySelector(".mr-gap"),last:""};let at=document.createElement("div");at.className="mr-tag",at.innerHTML=`<span class="mr-tp mr-num"></span><span class="mr-tn" style="background:${X.colour.primary};color:#fff">${Fr(X.nickname)}</span>`,at.style.opacity="0",a(".mr-tags").appendChild(at),m[X.id]={el:at,pos:at.querySelector(".mr-tp"),x:0,y:0,vis:!1}}let d=a(".mr-map canvas"),c=d.getContext("2d"),p=null,M=340,x=420;d.width=M,d.height=x;let f=i.points,b=1e9,v=1e9,_=-1e9,U=-1e9;for(let X of f)b=Math.min(b,X[0]),_=Math.max(_,X[0]),v=Math.min(v,X[2]),U=Math.max(U,X[2]);for(let X in r.diversions)for(let $ of r.diversions[X])for(let Z of $.path)b=Math.min(b,Z[0]),_=Math.max(_,Z[0]),v=Math.min(v,Z[1]),U=Math.max(U,Z[1]);let I=26,w=Math.min((M-I*2)/(_-b),(x-I*2)/(U-v)),R=(M-(_-b)*w)/2,y=(x-(U-v)*w)/2,g=X=>R+(X-b)*w,S=X=>y+(X-v)*w;function T(){let X=document.createElement("canvas");X.width=M,X.height=x;let $=X.getContext("2d"),Z=(mt,W,Et,Mt)=>{$.beginPath(),mt.forEach((et,Rt)=>Rt?$.lineTo(g(et[0]),S(et[1])):$.moveTo(g(et[0]),S(et[1]))),$.strokeStyle=W,$.lineWidth=Et,$.lineJoin=$.lineCap="round",$.setLineDash(Mt||[]),$.stroke(),$.setLineDash([])},at=(mt,W)=>{for(let Et of s.features)Et.kind===mt&&Et.closed&&($.beginPath(),Et.pts.forEach((Mt,et)=>et?$.lineTo(g(Mt[0]),S(Mt[1])):$.moveTo(g(Mt[0]),S(Mt[1]))),$.fillStyle=W,$.fill())},xt=s.features.filter(mt=>mt.kind==="park").sort((mt,W)=>W.pts.length-mt.pts.length)[0];$.save(),$.beginPath(),xt.pts.forEach((mt,W)=>W?$.lineTo(g(mt[0]),S(mt[1])):$.moveTo(g(mt[0]),S(mt[1]))),$.fillStyle="#9be27a",$.fill(),$.restore(),at("water","#49a6ff"),at("track","#ff7a5c");for(let mt in r.diversions)for(let W of r.diversions[mt])Z(W.path,"#c79a5a",4,[6,6]);let Tt=[];for(let mt=0;mt<=r.LAP1_END_DRAW;mt+=10)Tt.push(r.baseXZ(mt));Z(Tt,"#1a1420",11),Z(Tt,"#8fa0c4",6);let At=[];for(let mt=r.MAP_TO-80;mt<=r.finishM;mt+=10)At.push(r.baseXZ(mt));Z(At,"#1a1420",11),Z(At,"#8fa0c4",6);let lt=r.rawExt(r.finishM);return $.fillStyle="#fff",$.strokeStyle="#1a1420",$.lineWidth=3,$.fillRect(g(lt[0])-7,S(lt[1])-7,14,14),$.strokeRect(g(lt[0])-7,S(lt[1])-7,14,14),$.fillStyle="#1a1420",$.fillRect(g(lt[0])-7,S(lt[1])-7,7,7),$.fillRect(g(lt[0]),S(lt[1]),7,7),X}p=T();let C=0,N=a(".mr-banner");function q(X,$="",Z="#ff3d8b",at=2.4){N.querySelector(".mr-b1 span").textContent=X,N.querySelector(".mr-b1").style.background=Z,N.querySelector(".mr-b2").textContent=$,N.classList.remove("on"),N.offsetWidth,N.classList.add("on"),C=at}let A="";function H(X,$){if(C>0&&(C-=X,C<=0&&N.classList.remove("on")),!!$){if($.raceS!=null&&(l.clock.textContent=Vy($.raceS)),$.leaderM!=null&&(l.lap.textContent=$.leaderM>=2500?"2":"1",l.dist.textContent=`${(Math.min(5e3,$.leaderM)/1e3).toFixed(1)} KM`,l.bar.style.width=`${Math.min(100,$.leaderM/5e3*100)}%`),$.order){let Z=h.clientHeight||0,at=(h.querySelector(".mr-row")?.offsetHeight||40)+6;$.order.forEach((xt,Tt)=>{let At=u[xt.id];if(!At)return;At.el.style.transform=`translateY(${Tt*at}px)`;let lt=`${Tt}|${xt.gapText}|${xt.finished}`;lt!==At.last&&(At.last=lt,At.pos.innerHTML=_d(Tt+1),At.gap.textContent=xt.gapText,At.el.classList.toggle("lead",Tt===0),At.el.classList.toggle("fin",!!xt.finished))})}if($.tags)for(let Z of $.tags){let at=m[Z.id];at&&(Z.visible!==at.vis&&(at.vis=Z.visible,at.el.style.opacity=Z.visible?"1":"0"),Z.visible&&(at.el.style.transform=`translate(${Z.x}px, ${Z.y}px) translate(-50%,-100%) scale(${Z.scale??1})`,at.p!==Z.pos&&(at.p=Z.pos,at.pos.textContent=Z.pos?$y(Z.pos):"",at.pos.style.display=Z.pos?"":"none")))}if($.dots){c.clearRect(0,0,M,x),c.drawImage(p,0,0);for(let Z of[...$.dots].reverse())c.beginPath(),c.arc(g(Z.x),S(Z.z),Z.lead?11:9,0,7),c.fillStyle=Z.colour,c.fill(),c.lineWidth=3.5,c.strokeStyle="#1a1420",c.stroke(),Z.focus&&(c.beginPath(),c.arc(g(Z.x),S(Z.z),15,0,7),c.strokeStyle="#fff",c.lineWidth=3,c.stroke());$.camDot&&(c.save(),c.translate(g($.camDot.x),S($.camDot.z)),c.rotate($.camDot.a),c.fillStyle="rgba(26,20,32,.6)",c.beginPath(),c.moveTo(0,0),c.lineTo(-10,-22),c.lineTo(10,-22),c.fill(),c.restore())}}}function V(X){o.classList.toggle("mr-dim",!!X)}function rt(X){let $=a(".mr-card3");if(!X){$.classList.remove("on");return}$.querySelector(".mr-lane span").textContent=X.lane??"",$.querySelector(".mr-lane").style.background=X.colour.primary,$.querySelector(".mr-info").style.background=`linear-gradient(180deg, ${X.colour.primary}, ${Wy(X.colour.primary,-.25)})`,$.querySelector(".mr-nick").textContent=X.nickname,$.querySelector(".mr-nick").style.color="#fff",$.querySelector(".mr-tagl").textContent=X.tagline||"",$.querySelector(".mr-tagl").style.color=Gy(X.colour.primary)==="#ffffff"?"#fff":"#1a1420",$.classList.remove("on"),$.offsetWidth,$.classList.add("on")}function ot(X){let $=a(".mr-count");$.textContent=X,$.classList.remove("pop"),$.offsetWidth,$.classList.add("pop")}function D(X){a(".mr-photo").classList.toggle("on",!!X)}function St(X,$){let Z=$[0]-X[0],at=$[1]-X[1],xt=Math.hypot(Z,at)||1,Tt=Z/xt,At=at/xt,lt=X[0]-Tt*xt*.6,mt=X[1]-At*xt*.6,W=a(".mr-photo .mr-line");W.style.width=`${xt*2.2}px`,W.style.transform=`translate(${lt}px, ${mt}px) rotate(${Math.atan2(At,Tt)}rad)`}function K(X){let $=a(".mr-results");if(!X){$.classList.remove("on");return}$.innerHTML='<div class="mr-panel mr-rh"><div class="mr-unskew">RESULTS</div></div>'+X.map(Z=>`<div class="mr-rr"><span class="mr-num">${_d(Z.place)}</span><span style="width:calc(var(--u)*1.2);height:calc(var(--u)*2.2);background:${Z.colour};border:2px solid #1a1420;border-radius:4px"></span><span>${Fr(Z.nickname)}</span><span class="mr-t">${Fr(Z.timeText||"")}</span></div>`).join(""),requestAnimationFrame(()=>$.classList.add("on"))}function Y(){o.remove()}return{root:o,update:H,showBanner:q,setDim:V,introCard:rt,countdown:ot,photo:D,photoLine:St,results:K,dispose:Y}}function Wy(n,t){let e=parseInt(n.slice(1),16),i=e>>16&255,s=e>>8&255,r=e&255,o=a=>Math.max(0,Math.min(255,Math.round(t<0?a*(1+t):a+(255-a)*t)));return`rgb(${o(i)},${o(s)},${o(r)})`}var _a=(n,t,e=12,i=!0)=>nn(256,256,(s,r,o)=>{for(let a=0;a<e;a++)s.fillStyle=a%2?n:t,i?s.fillRect(a*r/e,0,r/e+1,o):s.fillRect(0,a*o/e,r,o/e+1)});function bd(n,t,e,i){let s=Un(42),r=new re;n.add(r);let o=[],a=[],l=(S,T=3)=>(Qi(S,T,void 0,30),S),h=(S,T,C=3)=>xe(S,T,{ol:C,olRef:30}),u=[];for(let S=0;S<i.path.length;S++){let T=i.path[S],C=e.anchors.nearestOnRibbon(T[0],T[1]),N=Math.hypot(T[0]-C[0],T[1]-C[1]);u.push({x:(T[0]+C[0])/2,z:(T[1]+C[1])/2,gap:N})}let m=0;u.forEach((S,T)=>{T&&(m+=Math.hypot(S.x-u[T-1].x,S.z-u[T-1].z)),S.s=m});let d=m,c=S=>{let T=0;for(;T<u.length-2&&u[T+1].s<S;)T++;let C=u[T],N=u[T+1],q=Math.max(0,Math.min(1,(S-C.s)/Math.max(1e-6,N.s-C.s))),A=C.x+(N.x-C.x)*q,H=C.z+(N.z-C.z)*q,V=Math.hypot(N.x-C.x,N.z-C.z)||1;return{x:A,z:H,gap:C.gap+(N.gap-C.gap)*q,tx:(N.x-C.x)/V,tz:(N.z-C.z)/V,y:t.heightAt(A,H)}},p=u.filter(S=>S.gap>26),M=p.length?p[0].s:d*.25,x=p.length?p.at(-1).s:d*.75,f=S=>Array.from({length:S},(T,C)=>c(M+(C+.5)/S*(x-M))),b=(S,T,C=0)=>(S.position.set(T.x,T.y-.1,T.z),S.rotation.y=Math.atan2(T.tx,T.tz)+C,r.add(S),S),v={center:c((M+x)/2),rides:[]},_=f(7);{let S=_.slice(1,6).sort(($,Z)=>Z.gap-$.gap)[0],T=new re,C=Math.min(12,S.gap*.42),N=C+2.6,q=new ue(.35,.5,N/Math.cos(.32)+1,8);for(let $ of[-1,1])for(let Z of[-1,1]){let at=h(q,gt("#ffffff"));at.position.set($*1.3,N/2,Z*Math.tan(.32)*N/2),at.rotation.x=-Z*.32,T.add(at)}let A=h(new he(6,1,8,2,.3),gt("#2e9bff"));A.position.y=.5,T.add(A);let H=new re;H.position.y=N,T.add(H);let V=h(new Ke(C,.32,8,48),gt("#ff3d8b"));V.rotation.y=Math.PI/2,V.position.x=.9,H.add(V);let rt=h(new Ke(C,.32,8,48),gt("#ff3d8b"));rt.rotation.y=Math.PI/2,rt.position.x=-.9,H.add(rt);let ot=h(new ue(1,1,2.6,16).rotateZ(Math.PI/2),gt("#ffd23f"));H.add(ot);let D=10,St=[],K=[];for(let $=0;$<D;$++){let Z=$/D*Math.PI*2,at=h(new we(.18,C,.18).translate(0,C/2,0),gt("#ffffff"),2);at.rotation.x=Z,at.position.x=.9,H.add(at);let xt=at.clone();xt.position.x=-.9,H.add(xt);let Tt=new re;Tt.position.set(0,Math.cos(Z)*C,Math.sin(Z)*C),H.add(Tt);let At=new re;Tt.add(At);let lt=["#ffd23f","#3ddc84","#2e9bff","#ff8a3d","#b07bff"][$%5],mt=h(new he(1.7,1.3,1.5,2,.35),gt(lt));mt.position.y=-1.3,At.add(mt);let W=h(new Oe(1.2,.7,4).rotateY(Math.PI/4),gt("#ffffff"),2);W.position.y=-.1,At.add(W),St.push(Tt);for(let Et=0;Et<3;Et++){let Mt=Z+Et/3*(Math.PI*2/D);K.push([.9,Math.cos(Mt)*C,Math.sin(Mt)*C],[-.9,Math.cos(Mt)*C,Math.sin(Mt)*C])}}let Y=new mn(new de(.22,8,6),new Sn({color:16777215}),K.length),X=new Pe;K.forEach(($,Z)=>{X.position.set(...$),X.updateMatrix(),Y.setMatrixAt(Z,X.matrix),Y.setColorAt(Z,new Qt(["#fff27a","#ff7ac8","#7affff"][Z%3]))}),H.add(Y),b(T,S,Math.PI/2),a.push($=>{H.rotation.x=$*.25;for(let Z of St)Z.rotation.x=-$*.25}),v.rides.push({kind:"wheel",obj:T,pos:new G(S.x,S.y+N,S.z),r:C}),S.used=!0}{let S=_.filter(K=>!K.used).sort((K,Y)=>Y.gap-K.gap)[0];S.used=!0;let T=new re,C=Math.min(6.5,S.gap*.28),N=_a("#ffffff","#ff4f6d",16);o.push(N);let q=h(new ue(C,C+.3,.9,32),gt("#ffffff",{map:N}));q.position.y=.45,T.add(q);let A=new re;T.add(A);let H=h(new ue(.7,.7,5,16),gt("#ffd23f"));H.position.y=3,A.add(H);let V=_a("#ffd23f","#ff3d8b",16);o.push(V);let rt=h(new Oe(C+.8,2.8,16),gt("#ffffff",{map:V}));rt.position.y=6.6,A.add(rt);let ot=h(new ue(C+.8,C+.8,.7,16,1,!0),gt("#2e9bff",{side:Fe}));ot.position.y=4.9,A.add(ot);let D=h(new de(.5,12,8),gt("#ff3d8b"));D.position.y=8.2,A.add(D);let St=[];for(let K=0;K<8;K++){let Y=K/8*Math.PI*2,X=C*.72,$=new re;$.position.set(Math.cos(Y)*X,0,Math.sin(Y)*X),$.rotation.y=-Y,A.add($);let Z=h(new ue(.06,.06,4.2,6),gt("#ffd23f"),1.5);Z.position.y=2.9,$.add(Z);let at=new re;$.add(at);let xt=["#ffffff","#ffd6f0","#d6f0ff","#fff2b0"][K%4],Tt=h(new he(.7,.7,1.6,2,.3),gt(xt));at.add(Tt);let At=h(new he(.45,.9,.5,2,.2),gt(xt));At.position.set(0,.55,.7),At.rotation.x=.4,at.add(At);let lt=h(new he(.45,.45,.8,2,.2),gt(xt));lt.position.set(0,.95,1.05),at.add(lt);let mt=h(new he(.15,.8,.3,1,.06),gt(["#ff3d8b","#2e9bff","#3ddc84","#ff8a3d"][K%4]),2);mt.position.set(0,.75,.55),mt.rotation.x=.4,at.add(mt);let W=h(new he(.75,.2,.6,1,.08),gt("#ff3d8b"),2);W.position.y=.4,at.add(W);for(let[Et,Mt]of[[-.22,.55],[.22,.55],[-.22,-.55],[.22,-.55]]){let et=h(new we(.16,.7,.16),gt(xt),1.5);et.position.set(Et,-.55,Mt),et.rotation.x=Mt>0?-.5:.5,at.add(et)}at.rotation.y=Math.PI/2,St.push({horse:at,ph:K*.8})}b(T,S),a.push(K=>{A.rotation.y=K*.6;for(let Y of St)Y.horse.position.y=2+Math.sin(K*2.2+Y.ph)*.35}),v.rides.push({kind:"carousel",obj:T,pos:new G(S.x,S.y+4,S.z),r:C})}{let S=_.filter(K=>!K.used).sort((K,Y)=>Y.gap-K.gap)[0];S.used=!0;let T=new re,C=15,N=_a("#ff3d3d","#ffffff",10,!1);o.push(N);let q=h(new ue(1.6,2.6,C,16),gt("#ffffff",{map:N}));q.position.y=C/2,T.add(q);let A=h(new Oe(2.6,3.4,16),gt("#2e9bff"));A.position.y=C+1.7,T.add(A);let H=h(new ue(.06,.06,2,6),gt("#ffffff"),1.5);H.position.y=C+4.2,T.add(H);let V=h(new hn(1.2,.7).translate(.6,0,0),gt("#ffd23f",{side:Fe}),1.5);V.position.y=C+4.8,T.add(V);let rt=[],ot=3.2;for(let K=0;K<=160;K++){let Y=K/160,X=Y*ot*Math.PI*2,$=2.6+(1-Y)*-.8+1.6;rt.push(new G(Math.cos(X)*$,C-1-Y*(C-2),Math.sin(X)*$))}let D=h(new aa(new Er(rt),220,.55,8,!1),gt("#ffd23f"));D.scale.y=1,T.add(D);let St=h(new he(3,.3,2,2,.1),gt("#3ddc84"),2);St.position.set(rt.at(-1).x+1,.15,rt.at(-1).z),T.add(St),b(T,S),a.push(K=>{V.rotation.y=Math.sin(K*3)*.4}),v.rides.push({kind:"helter",obj:T,pos:new G(S.x,S.y+8,S.z),r:4})}let U=[["CANDYFLOSS","#ff9bd2"],["HOOK-A-DUCK","#57c7ff"],["DOUGHNUTS","#ffb347"],["COCONUT SHY","#8ee86b"],["TOFFEE APPLES","#ff5d5d"],["HOOK-A-DUCK","#57c7ff"]],I=[];[..._.filter(S=>!S.used),...f(13).filter((S,T)=>T%2===1)].slice(0,7).forEach((S,T)=>{let[C,N]=U[T%U.length],q=new re,A=T%2?1:-1,H=h(new he(4.2,2.4,3,2,.2),gt("#fff6e0"));H.position.y=1.2,q.add(H);let V=h(new he(4.4,1.1,.8,2,.15),gt(N));V.position.set(0,.55,1.7),q.add(V);let rt=_a("#ffffff",N,10);o.push(rt);let ot=h(new we(4.8,.18,2.4),gt("#ffffff",{map:rt}));ot.position.set(0,2.9,1.4),ot.rotation.x=.32,q.add(ot);for(let Z of[-1,1]){let at=h(new ue(.09,.09,2.6,6),gt("#ffffff"),1.5);at.position.set(Z*2.2,1.6,2.4),q.add(at)}let D=di(512,128,(Z,at,xt)=>{Z.fillStyle="#1a1420",$e(Z,0,0,at,xt,30),Z.fill(),Z.fillStyle=N,$e(Z,8,8,at-16,xt-16,24),Z.fill(),je(Z,C,at/2,xt/2+4,C.length>11?52:64,"#ffffff","#1a1420",.2)},o),St=xe(new he(4.2,1.05,.3,2,.1),[gt(N),gt(N),gt(N),gt(N),gt("#ffffff",{map:D}),gt("#ffffff",{map:D})],{ol:2.5,olRef:30});if(St.position.set(0,3.7,.4),q.add(St),C==="CANDYFLOSS")for(let Z=0;Z<4;Z++){let at=h(new Je(.32,1),gt("#ff9bd2"),1.5);at.position.set(-1.4+Z*.9,1.45,1.75),q.add(at)}if(C==="HOOK-A-DUCK"){let Z=h(new ue(1.6,1.6,.6,20),gt("#57c7ff"),2);Z.position.set(0,.3,3.6),q.add(Z);let at=new re;at.position.set(0,.7,3.6),q.add(at);for(let xt=0;xt<6;xt++){let Tt=xt/6*Math.PI*2,At=h(new de(.22,10,8),gt("#ffd23f"),1.5);At.position.set(Math.cos(Tt)*1.1,0,Math.sin(Tt)*1.1);let lt=h(new de(.14,8,6),gt("#ffd23f"),1.2);lt.position.set(0,.22,.12),At.add(lt),at.add(At)}I.push(at)}let K=e.anchors.nearestOnRibbon(S.x,S.z),Y=Math.atan2(K[0]-S.x,K[1]-S.z),X=Math.min(S.gap*.3,7)*A,$=b(q,{...S,x:S.x+S.tz*X,z:S.z-S.tx*X,y:t.heightAt(S.x+S.tz*X,S.z-S.tx*X)});$.rotation.y=Y+(A>0?0:Math.PI)*0}),a.push(S=>{for(let T of I)T.rotation.y=S*.8});{let S=[],T=[],C=[],N=[],q=[];for(let D of[-1,1]){let St=null;for(let K=M-10;K<=x+10;K+=9){let Y=c(K),X=(Y.gap/2-6)*D,$=Y.x+Y.tz*X,Z=Y.z-Y.tx*X,at=t.heightAt($,Z),xt=new G($,at+4.2,Z),Tt=h(new ue(.08,.1,4.3,6),gt("#ffffff"),1.5);if(Tt.position.set($,at+2.1,Z),r.add(Tt),St)for(let At=0;At<=10;At++){let lt=At/10,mt=St.clone().lerp(xt,lt);mt.y-=Math.sin(lt*Math.PI)*.7,S.push(mt),At<10&&(At%2?(T.push(mt.clone()),C.push(["#fff27a","#ff7ac8","#7affff","#9dff7a"][(At+Math.round(K))%4])):(N.push({v:mt.clone(),a:Math.atan2(-(xt.z-St.z),xt.x-St.x)}),q.push(["#ff3d8b","#ffd23f","#2e9bff","#3ddc84","#ff8a3d"][(At+Math.round(K/9))%5])))}St=xt}}let A=new Pe,H=new mn(new de(.16,8,6),new Sn({color:16777215}),T.length);T.forEach((D,St)=>{A.position.copy(D),A.updateMatrix(),H.setMatrixAt(St,A.matrix),H.setColorAt(St,new Qt(C[St]))}),r.add(H);let V=new Se;V.setAttribute("position",new ie([-.32,0,0,.32,0,0,0,-.65,0],3)),V.setAttribute("normal",new ie([0,0,1,0,0,1,0,0,1],3));let rt=new mn(V,gt("#ffffff",{side:Fe}),N.length);N.forEach((D,St)=>{A.position.copy(D.v),A.rotation.set(0,D.a,0),A.updateMatrix(),rt.setMatrixAt(St,A.matrix),rt.setColorAt(St,new Qt(q[St]))}),r.add(rt);let ot=[];for(let D=0;D+1<S.length;D++)S[D].distanceTo(S[D+1])<3&&ot.push(S[D],S[D+1]);r.add(new $s(new Se().setFromPoints(ot),new Yi({color:3355443}))),a.push(D=>{H.material.color.setScalar(.85+.15*Math.sin(D*6))})}{let S=c(M-4),T=di(1024,256,(N,q,A)=>{N.fillStyle="#1a1420",$e(N,0,0,q,A,60),N.fill(),N.fillStyle="#ff3d8b",$e(N,10,10,q-20,A-20,52),N.fill(),je(N,"\u2605 FUNFAIR \u2605",q/2,A/2+6,120,"#ffe14d","#1a1420",.18)},o),C=xe(new he(10,2.4,.4,2,.15),[gt("#ff3d8b"),gt("#ff3d8b"),gt("#ff3d8b"),gt("#ff3d8b"),gt("#ffffff",{map:T}),gt("#ffffff",{map:T})],{ol:3,olRef:30});C.position.set(S.x,S.y+7.5,S.z),C.rotation.y=Math.atan2(S.tx,S.tz)+Math.PI/2,r.add(C);for(let N of[-1,1]){let q=h(new ue(.25,.3,7.6,8),gt("#ffd23f"));q.position.set(S.x+S.tz*4.5*N,S.y+3.8,S.z-S.tx*4.5*N),r.add(q)}}let R=[];for(let S=0;S<60;S++){let T=M+s()*(x-M),C=c(T),N=(s()-.5)*(C.gap-16),q=C.x+C.tz*N,A=C.z-C.tx*N;R.push({x:q,y:t.heightAt(q,A),z:A,yaw:s()*6.28})}function y(S){for(let T of a)T(S)}function g(){r.traverse(S=>{S.geometry&&S.geometry.dispose()});for(let S of o)S.dispose?.();n.remove(r)}return{group:r,update:y,dispose:g,anchors:v,crowd:R,at:c,s0:M,s1:x}}function Sd(n,t,e,i,s,{camera:r}){let o=new re;n.add(o);let a=[],l=t.sample(t.finishM+28),h=new G(l.tx,0,l.tz),u=new G(l.rx,0,l.rz),m=new G(l.x,t.heightAt(l.x,l.z),l.z),d=Math.atan2(h.x,h.z);o.position.copy(m),o.rotation.y=d;let c=[{place:2,x:-2.3,hgt:1.3,col:"#c9d3e6"},{place:1,x:0,hgt:1.9,col:"#ffd23f"},{place:3,x:2.3,hgt:.9,col:"#e59a5c"}];for(let T of c){let C=di(256,256,(q,A,H)=>{q.fillStyle="#2e6fe0",q.fillRect(0,0,A,H),q.fillStyle=T.col,q.fillRect(0,0,A,26),je(q,String(T.place),A/2,H/2+14,170,T.col,"#1a1420",.16)},a),N=xe(new he(2.25,T.hgt,2,3,.12),[gt("#2e6fe0"),gt("#2e6fe0"),gt(T.col),gt("#2e6fe0"),gt("#ffffff",{map:C}),gt("#2e6fe0")],{ol:3.5,olRef:12});N.position.set(T.x,T.hgt/2,0),o.add(N),T.top=T.hgt}let p=di(1024,256,(T,C,N)=>{T.fillStyle="#1a1420",$e(T,0,0,C,N,50),T.fill(),T.fillStyle="#ff3d8b",$e(T,10,10,C-20,N-20,42),T.fill(),je(T,"MARKRUN CHAMPIONS",C/2,N/2+6,100,"#ffffff","#1a1420",.16)},a),M=xe(new he(9,2.2,.3,2,.1),[gt("#ff3d8b"),gt("#ff3d8b"),gt("#ff3d8b"),gt("#ff3d8b"),gt("#ffffff",{map:p}),gt("#ffffff",{map:p})],{ol:3,olRef:14});M.position.set(0,4.6,-2.4),o.add(M);for(let T of[-1,1]){let C=xe(new ue(.14,.16,4.6,8),gt("#ffffff"),{ol:2,olRef:14});C.position.set(T*4.3,2.3,-2.4),o.add(C)}let x=s.length,f=[];for(let T of s){let C=i[T.runnerId];if(!C)continue;let N=c.find(H=>H.place===T.place),q=N?new G(N.x,N.top,.1):null,A;if(T.place===1?A=["celebrate","jump"]:T.place===2?A=["pose","flex"]:T.place===3?A=["celebrate","fist"]:T.place===x&&x>3?A=["celebrate","collapse"]:A=["celebrate","shrug"],!q){f.push({rr:C,o:T,pose:A});continue}b(C,q,A)}f.forEach((T,C)=>{let N=C%2?1:-1,q=Math.floor(C/2),A=T.pose[1]==="collapse",H=new G(N*(A?4.6:4.2+q*1.6),0,A?1.6:.6+q*.8);b(T.rr,H,T.pose,A?-N*Math.PI/2:0)});function b(T,C,N,q=0){let A=C.clone().applyAxisAngle(new G(0,1,0),d).add(m);C.y===0&&(A.y=t.heightAt(A.x,A.z)+.05),T.root.position.copy(A),T.root.rotation.set(0,d+q,0),T.set(...N),T.setPop(null)}let v=Un(3),_=420,U=new mn(new hn(.16,.26),new Sn({side:Fe}),_),I=[],w=["#ff3d8b","#ffd23f","#2e9bff","#3ddc84","#ff8a3d","#ffffff","#b07bff"];for(let T=0;T<_;T++)I.push({x:(v()-.5)*14,y:v()*12,z:(v()-.5)*8,vy:1+v()*1.6,sp:v()*6,ph:v()*6.28}),U.setColorAt(T,new Qt(w[T%w.length]));U.frustumCulled=!1,o.add(U);let R=new Pe,y=0;function g(T,C){y+=T;for(let V=0;V<_;V++){let rt=I[V];rt.y-=rt.vy*T,rt.y<0&&(rt.y+=12),R.position.set(rt.x+Math.sin(y*1.3+rt.ph)*.5,rt.y,rt.z+Math.cos(y+rt.ph)*.4),R.rotation.set(y*rt.sp+rt.ph,y*rt.sp*.7,rt.ph),R.updateMatrix(),U.setMatrixAt(V,R.matrix)}U.instanceMatrix.needsUpdate=!0;let N=Math.sin(y*.18)*.4,q=15-Math.min(2.5,y*.2),A=new G(Math.sin(N)*q,3+Math.sin(y*.3)*.3,Math.cos(N)*q).applyAxisAngle(new G(0,1,0),d);r.position.copy(m).add(A);let H=new G(3.2,2.2,0).applyAxisAngle(new G(0,1,0),d).add(m);r.lookAt(H),r.fov!==42&&(r.fov=42,r.updateProjectionMatrix())}function S(){o.traverse(T=>{T.geometry&&T.geometry.dispose()}),U.material.dispose();for(let T of a)T.dispose?.();n.remove(o)}return{update:g,dispose:S,center:m}}var Ma=8.5;function Xy(n,t={}){let{course:e,park:i,round:s,plan:r}=t,o=t.backedBy||{},a=Object.keys(o).filter(E=>(o[E]||[]).length),l=[...s?.runners||[]].sort((E,F)=>(E.lane??0)-(F.lane??0)),h=!!r?.runners?.some(E=>E.diversions&&E.diversions.length),u=new Wo({antialias:!0,powerPreference:"high-performance",preserveDrawingBuffer:!!t.preserveDrawingBuffer});u.setPixelRatio(Math.min(window.devicePixelRatio||1,t.maxPixelRatio??1.5)),u.outputColorSpace=qe,u.toneMapping=Vn,u.shadowMap.enabled=!0,u.shadowMap.type=Uc;let m=u.domElement;m.style.cssText="position:absolute;inset:0;width:100%;height:100%;display:block",getComputedStyle(n).position==="static"&&(n.style.position="relative"),n.appendChild(m);let d=new qo;d.fog=new Xo(13496063,700,3200);let c=new an(45,16/9,.3,9e3),p=new ua(14676223,9420912,1.45);d.add(p);let M=new da(16774109,2.3),x=new G(-.45,.82,.38).normalize();M.castShadow=!0,M.shadow.mapSize.set(2048,2048),M.shadow.bias=-4e-4,M.shadow.normalBias=.03,M.shadow.radius=3,d.add(M),d.add(M.target);let f=sd(e,i,r),b=ld(d,f,{course:e,park:i,hasFunfair:h}),v=null;if(h){let E=r.runners.find(z=>z.diversions?.length).diversions[0],F=f.diversions[r.runners.find(z=>z.diversions?.length).id][0];v=bd(d,f,b,F||E)}let _=dd(f,b.anchors.crowdZones,5,b.onPath);v&&_.push(...v.crowd.map(E=>({...E,zone:"fair"})));let U=new Map;for(let E of _){let F=E.zone??"x";U.has(F)||U.set(F,[]),U.get(F).push(E)}let I=[...U.values()].map(E=>ud(d,E)),w={update:(...E)=>I.forEach(F=>F.update(...E)),dispose:()=>I.forEach(E=>E.dispose())},R=xd(r,f,l),y={};for(let E of l){let F=gd(E);y[E.id]=F,d.add(F.root)}let g=l.map(E=>E.id),S=Object.fromEntries(l.map(E=>[E.id,E])),T=Md(n,{runners:l,backedBy:o,course:e,park:i,C:f}),C=yd({plan:r,sim:R,backedIds:a,hasDiversion:h}),N=vd({camera:c,C:f,sim:R,world:b,funfair:v}),q=null,A=[];for(let E of r.events||[])A.push({at:E.broadcastS,evt:{...E,kind:"event"}});for(let E of r.commentary||[])A.push({at:E.broadcastS,evt:{...E,kind:"commentary"}});A.sort((E,F)=>E.at-F.at);let H="idle",V=!1,rt=!1,ot=-Ma,D=0,St=null,K=null,Y=0,X=!1,$=!1,Z=0,at=0,xt=new Set;function Tt(){let E=n.clientWidth||window.innerWidth,F=n.clientHeight||window.innerHeight;u.setSize(E,F,!1),c.aspect=E/F,c.updateProjectionMatrix(),Zc.uRes.value.set(E*u.getPixelRatio(),F*u.getPixelRatio())}let At=typeof ResizeObserver<"u"?new ResizeObserver(Tt):null;At?.observe(n),window.addEventListener("resize",Tt),Tt();let lt={};{let E=g.length;g.forEach((F,z)=>{let j=(z-(E-1)/2)*Math.min(1.25,(ke-1.6)/Math.max(1,E-1)),ct=f.sample(0);lt[F]={x:ct.x+ct.rx*j-ct.tx*1.2,z:ct.z+ct.rz*j-ct.tz*1.2,yaw:Math.atan2(ct.tx,ct.tz)},lt[F].y=f.heightAt(lt[F].x,lt[F].z)+.16})}function mt(E="idle"){for(let F of g){let z=lt[F],j=y[F];j.root.position.set(z.x,z.y,z.z),j.root.rotation.set(0,z.yaw,0),E&&j.set(E),j.setPop(null)}}mt();let W=(E,F)=>E===1?"jump":E===2||E===3?"fist":E===F?"collapse":"kneel";function Et(E,F){let z=R.stateAt(Math.max(0,E)),j=g.length;for(let ct of g){let J=z.byId[ct],tt=y[ct];if(E<0)continue;tt.root.position.set(J.x,J.y,J.z);let ft=Math.atan2(J.tx,J.tz)+(J.finished&&J.post>2.4&&!(J.place>3&&J.post<4)?Math.PI*(J.place%2?1:-1)*.92:0),wt=tt.root.rotation.y,Ot=ft-wt;for(;Ot>Math.PI;)Ot-=2*Math.PI;for(;Ot<-Math.PI;)Ot+=2*Math.PI;tt.root.rotation.y=wt+Ot*Math.min(1,F*10);let Nt={speed:J.vRace,rate:z.rate,slope:J.slope};if(J.finished){let Bt=J.place;J.post<1.6?(tt.set("run"),Nt.speed=3,Nt.rate=1.2):Bt>3&&J.post<4?tt.set("trudge"):tt.set("celebrate",W(Bt,j)),tt.setPop(null)}else if(J.div>.3){tt.set("distracted");let Bt=v?.anchors.rides.reduce((Wt,ae)=>!Wt||ae.pos.distanceToSquared(tt.root.position)<Wt.pos.distanceToSquared(tt.root.position)?ae:Wt,null);if(Bt){let ae=Math.atan2(Bt.pos.x-J.x,Bt.pos.z-J.z)-tt.root.rotation.y;for(;ae>Math.PI;)ae-=2*Math.PI;for(;ae<-Math.PI;)ae+=2*Math.PI;Nt.lookYaw=Math.max(-1.3,Math.min(1.3,ae))}tt.setPop(["!","heart","floss"][Math.floor((J.m-J.divInfo.fromM)/120)%3])}else{tt.set("run"),tt.setPop(null);let Bt=f.geoOf(J.m);Nt.effort=J.m>4300?.4+(J.m-4300)/700*.5:Bt>1700&&Bt<2060?.7:.1}tt.update(F,Nt)}}let Mt=new G,et=null,Rt=-1,$t=()=>{if(Rt!==D||!et){let E=m.getBoundingClientRect();et=[...T.root.querySelectorAll(".mr-tower, .mr-map, .mr-top")].map(F=>{let z=F.getBoundingClientRect();return{left:z.left-E.left,right:z.right-E.left,top:z.top-E.top,bottom:(F.classList.contains("mr-tower")?z.top+F.querySelectorAll(".mr-row").length*((F.querySelector(".mr-row")?.offsetHeight||40)+6):z.bottom)-E.top}}),Rt=D}return et};function Ut(E,F=!0){let z=m.clientWidth,j=m.clientHeight,ct=[];for(let tt of g){let ft=y[tt];Mt.set(ft.root.position.x,ft.root.position.y+ft.height+.55,ft.root.position.z);let wt=Mt.distanceTo(c.position);Mt.project(c);let Ot=F&&Mt.z<1&&Mt.z>-1&&Math.abs(Mt.x)<.95&&Mt.y<.82&&Mt.y>-.62&&wt>9.5&&wt<150,Nt=(Mt.x*.5+.5)*z,Bt=(-Mt.y*.5+.5)*j;Ot&&$t().some(Wt=>Nt>Wt.left-40&&Nt<Wt.right+40&&Bt>Wt.top-10&&Bt<Wt.bottom+40)&&(Ot=!1),ct.push({id:tt,x:(Mt.x*.5+.5)*z,y:(-Mt.y*.5+.5)*j,visible:Ot,pos:E?E.order.indexOf(tt)+1:0,scale:Math.max(.7,Math.min(1.15,30/wt)),dist:wt})}ct.sort((tt,ft)=>tt.dist-ft.dist);let J=[];for(let tt of ct){if(!tt.visible)continue;let ft=(S[tt.id].nickname.length*11+60)*tt.scale;for(let wt=0;wt<8;wt++){let Ot=J.find(Nt=>Math.abs(Nt.x-tt.x)<(Nt.tw+ft)/2&&Math.abs(Nt.y-tt.y)<30*Math.max(Nt.scale,tt.scale));if(!Ot)break;tt.y=Ot.y-31*Math.max(Ot.scale,tt.scale)}tt.tw=ft,J.push(tt)}return E?{raceS:E.raceS,leaderM:E.leader.m,tags:ct,order:E.order.map(tt=>({id:tt,gapText:E.byId[tt].gapText,finished:E.byId[tt].finished})),dots:E.order.map((tt,ft)=>({x:E.byId[tt].x,z:E.byId[tt].z,colour:S[tt].colour.primary,lead:ft===0,focus:N.shot?.ids?.includes(tt)}))}:H!=="race"?{tags:ct}:{tags:ct,raceS:0,leaderM:0,order:g.map(tt=>({id:tt,gapText:"",finished:!1})),dots:g.map(tt=>({x:lt[tt].x,z:lt[tt].z,colour:S[tt].colour.primary}))}}function B(E,F){let z=Math.max(30,Math.min(220,F)),j=M.shadow.camera;j.right!==z&&(j.left=-z,j.right=z,j.top=z,j.bottom=-z,j.near=1,j.far=900,j.updateProjectionMatrix());let ct=2*z/M.shadow.mapSize.x,J=Math.round(E.x/ct)*ct,tt=Math.round(E.z/ct)*ct;M.target.position.set(J,E.y,tt),M.position.set(J+x.x*400,E.y+x.y*400,tt+x.z*400)}let k=["wave","flex","point","stretch","spin","bow"];function pt(E,F){let z=[...E.personality||E.id].reduce((j,ct)=>j+ct.charCodeAt(0),F);return k[z%k.length]}function st(E,F={}){H="intro",T.setDim(!0),T.results(null),bt(),mt("idle");let z=F.perRunnerS??t.introPerRunnerS??4.2,j=F.flyoverS??7;return K={t:0,idx:-1,per:z,fly:j,onDone:E,waiting:!1,segStart:0,minSeg:2.5,done:!1,group:!1},{flyoverS:j,perRunnerS:z,runners:g.slice()}}function it(E){let F=K;if(!F)return;F.t+=E;let z=lt;if(F.idx===-1){let Nt=Math.min(1,F.t/F.fly),Bt=jc(Nt),Wt=f.sample(0),ae=new G(170,0,-40),Ee=2.2-Bt*2,ze=520-Bt*470,Ve=new G(ae.x+Math.cos(Ee)*ze,190-Bt*170,ae.z+Math.sin(Ee)*ze),Nn=new G(Wt.x+Wt.tx*22+Wt.rx*10,Wt.y+9,Wt.z+Wt.tz*22+Wt.rz*10);Ve.lerp(Nn,Bt*Bt);let Fn=ae.clone().setY(15).lerp(new G(Wt.x,Wt.y+1,Wt.z),Math.min(1,Bt*1.2));c.position.copy(Ve),c.lookAt(Fn),ne(50),Nt>=1&&nt();return}if(F.group){let Nt=f.sample(0),Bt=(F.t-F.segStart)/3;if(c.position.set(Nt.x+Nt.tx*(9+Bt*2)+Nt.rx*2,Nt.y+2.2+Bt*.6,Nt.z+Nt.tz*(9+Bt*2)+Nt.rz*2),c.lookAt(Nt.x,Nt.y+1.3,Nt.z),ne(46),Bt>=1&&!F.done){F.done=!0,T.introCard(null);let Wt=F.onDone;K=null,H="idle",Wt?.()}return}let j=g[F.idx],ct=z[j],J=F.t-F.segStart,tt=new G(Math.sin(ct.yaw),0,Math.cos(ct.yaw)),ft=new G(-tt.z,0,tt.x),wt=y[j].height,Ot=3.2+wt*.6-Math.min(.6,J*.12);c.position.set(ct.x+tt.x*Ot+ft.x*.9,ct.y+wt*.62,ct.z+tt.z*Ot+ft.z*.9),c.lookAt(ct.x-ft.x*1.25,ct.y+wt*.55,ct.z-ft.z*1.25),ne(40),!F.waiting&&J>=F.per&&nt(),F.waiting==="released"&&J>=F.minSeg&&nt()}function nt(){let E=K;E.idx++,E.segStart=E.t;for(let ct of g)y[ct].set("idle");if(E.idx>=g.length){E.group=!0;for(let ct of g)y[ct].set("pose","point");T.introCard(null),setTimeout(()=>{},0);for(let ct of g)y[ct].set("wave");return}let F=g[E.idx];y[F].set(pt(S[F],E.idx)==="wave"?"wave":"pose",pt(S[F],E.idx)),t.introCards!==!1&&T.introCard(S[F]),E.waiting=!1;let j=t.onIntroRunner?.(F,E.idx);j&&typeof j.then=="function"&&(E.waiting=!0,j.then(()=>{K===E&&(E.waiting="released")},()=>{K===E&&(E.waiting="released")}))}function _t(E,F){H="race",T.setDim(!1),T.results(null),bt(),K=null,T.introCard(null),ot=-Ma,Z=0,at=0,Y=0,X=!1,$=!1,xt.clear(),St={onEvent:E,onDone:F},mt("idle"),N.reset()}let ht=[[-3,"3"],[-2,"2"],[-1,"1"],[0,"GO!"]];function It(E){let F=z=>S[z]?.nickname||z;switch(E.type){case"lead_change":return["LEAD CHANGE!",`${F(E.to)} hits the front`,"#ff3d8b"];case"overtake":return!a.includes(E.by)&&!a.includes(E.on)&&R.stateAt(E.broadcastS).order.indexOf(E.by)>1?null:["OVERTAKE!",`${F(E.by)} passes ${F(E.on)}`,"#2e6fe0"];case"hill":return[E.lap===1?"THE HILL!":"THE HILL AGAIN!","Legs of jelly incoming","#3aa845"];case"lap":return["LAP 2 OF 2","One more time round!","#2e6fe0"];case"final_stretch":return["FINAL STRETCH!","Here comes the finish","#ff8a1f"];case"diversion":return xt.has("div")?null:(xt.add("div"),["DISTRACTED!",`${F(E.who)} has spotted the funfair`,"#b04bff"]);case"finish":return E.place===1&&!R.photoFinish?["WINNER!",F(E.who),"#ffb000"]:null;case"breakaway":return["BREAKAWAY!",`${F(E.who)} makes a break`,"#ff3d8b"];default:return null}}function Pt(E){if(Y>0){if(Y-=E,Y<=0){T.photo(!1),m.style.filter="",b.anchors.finishArch.visible=!0,N.reset();let z=R.finishOrder[0];T.showBanner("WINNER!",S[z]?.nickname||z,"#ffb000",2.6)}return}let F=ot;for(ot+=E;at<ht.length&&ot>=ht[at][0];){let[z,j]=ht[at++];if(T.countdown(j),St?.onEvent?.({kind:"countdown",n:j==="GO!"?0:Number(j),text:j,broadcastS:z}),z===-3)for(let ct of g)y[ct].set("ready")}for(;Z<A.length&&ot>=A[Z].at;){let z=A[Z++].evt;try{St?.onEvent?.(z)}catch(j){console.error(j)}if(z.kind==="event"){let j=It(z);j&&T.showBanner(...j)}}R.photoFinish&&!X&&ot>=R.firstFinishB&&(X=!0,ot=R.firstFinishB,Y=t.photoFreezeS??2.8,T.photo(!0),m.style.filter="grayscale(0.55) sepia(0.35) contrast(1.12)",St?.onEvent?.({kind:"photo_finish",broadcastS:ot,ids:R.finishOrder.slice(0,2)})),!$&&ot>=R.lastFinishB+3.5&&($=!0,St?.onDone?.())}function bt(){q&&(q.dispose(),q=null)}function Dt(E){H="podium",T.setDim(!0),K=null,bt();let F=E?.finishOrder?.length?[...E.finishOrder].sort((z,j)=>z.place-j.place):R.finishOrder.map((z,j)=>({runnerId:z,place:j+1,officialS:R.byId[z].officialS,timeText:va(R.byId[z].officialS)}));q=Sd(d,f,b,y,F,{camera:c}),t.podiumCard!==!1&&T.results(F.map(z=>({place:z.place,nickname:S[z.runnerId]?.nickname||z.runnerId,colour:S[z.runnerId]?.colour.primary||"#888",timeText:z.timeText||va(z.officialS)})))}let qt=performance.now(),Yt=0,Lt={frames:0,acc:0,fps:0};function ne(E){Math.abs(c.fov-E)>.01&&(c.fov=E,c.updateProjectionMatrix())}function Zt(E,F=!1){D+=E;let z=null;V||(H==="intro"&&it(E),H==="race"&&Pt(E));let j=V?0:E;if(H==="race"){if(Y>0){let tt=b.anchors.finish;b.anchors.finishArch.visible=!1,c.position.set(tt.x+tt.rx*9-tt.tx*.6,tt.y+6.4,tt.z+tt.rz*9-tt.tz*.6),c.lookAt(tt.x-tt.rx*.6-tt.tx*.6,tt.y+.8,tt.z-tt.rz*.6-tt.tz*.6),ne(42),c.updateMatrixWorld();let ft=new G(tt.x+tt.rx*3,tt.y+.05,tt.z+tt.rz*3).project(c),wt=new G(tt.x-tt.rx*3,tt.y+.05,tt.z-tt.rz*3).project(c);T.photoLine([(ft.x*.5+.5)*m.clientWidth,(-ft.y*.5+.5)*m.clientHeight],[(wt.x*.5+.5)*m.clientWidth,(-wt.y*.5+.5)*m.clientHeight])}else N.update(ot,j,C);if(z=ot>=0?R.stateAt(ot):null,ot<0)for(let tt of g)y[tt].update(j,{});else Et(ot,Y>0?0:j);let J=N.shot?.type;B(N.cam.look,J==="drone"||J==="blimp"||J==="heli"?160:45)}else if(H==="podium"&&q){q.update(j,D);for(let J of g)y[J].update(j,{});B(q.center,40)}else{for(let J of g)y[J].update(j,{});if(H==="idle"){let J=f.sample(0),tt=D*.12;c.position.set(J.x+Math.sin(tt)*14,J.y+4.5,J.z+Math.cos(tt)*14),c.lookAt(J.x,J.y+1.2,J.z),ne(45)}B(new G(lt[g[0]]?.x??0,0,lt[g[0]]?.z??0),H==="intro"&&K?.idx===-1?160:40)}b.update(D),v?.update(D);let ct=g.map(J=>y[J].root.position);w.update(D,c.position,ct,H==="podium"?.9:null),T.update(E,H==="race"?Ut(z,ot>-1):H==="intro"?{tags:[]}:Ut(null,!1)),F||u.render(d,c)}function P(E){if(rt)return;Yt=requestAnimationFrame(P);let F=Math.min(.1,(E-qt)/1e3);qt=E,Lt.frames++,Lt.acc+=F,Lt.acc>1&&(Lt.fps=Lt.frames/Lt.acc,Lt.frames=0,Lt.acc=0),Zt(F)}t.manualLoop||(Yt=requestAnimationFrame(P));function L(){rt=!0,cancelAnimationFrame(Yt),At?.disconnect(),window.removeEventListener("resize",Tt),bt();for(let E of g)d.remove(y[E].root),y[E].dispose();w.dispose(),v?.dispose(),b.dispose(),T.dispose(),d.traverse(E=>{E.geometry&&E.geometry.dispose()}),md(),od(),u.dispose(),u.forceContextLoss?.(),m.remove()}let Q={seek(E,F=1.2){H="race",T.setDim(!1),K=null,bt(),St=St||{},T.introCard(null),T.results(null),T.photo(!1),m.style.filter="",N.reset();let z=Math.round(F*30);for(let j=z;j>=0;j--){if(ot=E-j/30,Z=A.findIndex(ct=>ct.at>ot),Z<0&&(Z=A.length),at=ht.findIndex(ct=>ct[0]>ot),at<0&&(at=ht.length),X=ot>=R.firstFinishB,$=ot>=R.lastFinishB+3.5,Y=0,ot<-3)for(let ct of g)y[ct].set("idle");else if(ot<0)for(let ct of g)y[ct].set("ready");if(j>0)if(N.update(ot,1/30,C),ot>=0)Et(ot,1/30);else for(let ct of g)y[ct].update(1/30,{})}V=!0,Zt(0)},introAt(E,F=1.5){if(st(()=>{},{}),V=!1,E<0){K.t=F,it(0),Zt(0),V=!0;return}for(K.t=K.fly,it(0);K&&K.idx<E;)K.t=K.segStart+K.per+.01,it(0);for(let z=0;z<F*30;z++){it(1/30);for(let j of g)y[j].update(1/30,{})}V=!0,Zt(0)},podiumAt(E=3){T.introCard(null),Dt(null);for(let F=0;F<E*30;F++){q.update(1/30,F/30);for(let z of g)y[z].update(1/30,{})}V=!0,Zt(0)},photoAt(){this.seek(R.firstFinishB-.05),V=!1,X=!1;for(let E=0;E<3;E++)Zt(1/30);V=!0,Zt(0)},render(){Zt(0)},lookFrom(E,F,z,j,ct,J,tt=45){H="debugcam",c.position.set(E,F,z),c.lookAt(j,ct,J),ne(tt),T.setDim(!0),u.render(d,c)},step(E,F=!0){Zt(E,!F)},get mode(){return H},get b(){return ot},shots:C,sim:R,C:f,director:N,renderer:u,scene:d,camera:c,info:()=>u.info,fps:()=>Lt.fps};return{playIntro:st,playRace:_t,showPodium:Dt,setPaused(E){V=!!E},dispose:L,hudRoot:T.root,get broadcastTime(){return ot},get durationS(){return Ma+R.lastFinishB+3.5},preRollS:Ma,_debug:Q}}function wd(n){let e=Array.from({length:201},(r,o)=>Math.round(o*25/5e3*1500*1e3)/1e3),i=(n?.runners||[]).map(r=>({id:r.id,officialS:1500,progress:e,pacingSource:"intro"})),s=mh(n?.roundId||"intro",i);return s.events=[],s.commentary=[],s}var Sa=new URLSearchParams(location.search),Zs=Math.max(.25,Number(Sa.get("speed"))||1),ih=Sa.get("race")==="2d",Xn=n=>Math.round(n/Zs);window.__markrun={events:[],speed:Zs};var pi=n=>{window.__markrun.events.push({at:Date.now(),...n}),window.__markrun.events.length>500&&window.__markrun.events.shift()},qs=fe("#stage"),gi=fe("#screen"),zr=fe("#hud-bottom"),Br=fe("#subs"),Zy=fe("#reactions"),Or=fe("#next-hint"),ba=fe("#race-layer"),ye=null,Ys=null,$r=Sa.has("autostart"),ki=Sa.has("mute"),ee=lh(),mi=fh({onLine:nv,onIdle:()=>{ee.duck(!1)}});function Cd(){let n=Math.min(window.innerWidth/1920,window.innerHeight/1080);qs.style.transform=`translate(-50%, -50%) scale(${n})`,qs.style.transformOrigin="center center",qs.style.left="50%",qs.style.top="50%"}window.addEventListener("resize",Cd);Cd();var eh=null,Jy=Promise.all([fetch("/data/course.json").then(n=>n.json()),fetch("/data/park.json").then(n=>n.json()).catch(()=>null)]).then(([n,t])=>(eh={course:n,park:t},eh)),sh=ah({role:"tv",onStatus:n=>{fe("#conn").classList.toggle("hidden",n==="open"||n==="connecting")},onState:n=>Ky(n),onMessage:n=>{n.t==="react"?sv(n.playerId,n.emoji):n.t==="refresh"?kd(n.step,n.msg):n.t==="refreshDone"?lv(n.ok,n.msg):n.t==="error"&&is(n.msg,"red")}}),qn=n=>sh.send(n);function Wr(){if(!($r&&ee.ready())){$r=!0,ee.unlock(),fe("#gesture").classList.add("gone");try{window.speechSynthesis?.getVoices()}catch{}wa(),ye&&Pd(ye,!0)}}$r&&fe("#gesture").classList.add("gone");fe("#gesture").addEventListener("click",Wr);window.addEventListener("pointerdown",()=>{ee.ready()||Wr()});function wa(){let n=ye?.settings||{};ee.setVolume(n.volume??.8),ee.setMuted(ki),ee.setMusicEnabled(n.music!==!1),mi.setEnabled(!ki&&n.voice!==!1&&Zs<=1.5),mi.setVolume(Math.min(1,(n.volume??.8)+.1)),fe("#btn-mute").textContent=ki?"\u{1F507}":"\u{1F50A}"}fe("#btn-mute").addEventListener("click",n=>{n.stopPropagation(),ki=!ki,wa()});fe("#btn-fs").addEventListener("click",n=>{n.stopPropagation(),Id()});function Id(){document.fullscreenElement?document.exitFullscreen?.():document.documentElement.requestFullscreen?.().catch(()=>{})}var Ed;window.addEventListener("mousemove",()=>{document.body.classList.remove("hide-cursor"),clearTimeout(Ed),Ed=setTimeout(()=>document.body.classList.add("hide-cursor"),3e3)});window.addEventListener("keydown",n=>{if(n.target.closest?.("input, textarea"))return;if(!$r){Wr();return}if(ov()){n.key==="Escape"?Gr():n.key==="Enter"&&fe("#tvmodal [data-ok]")?.click();return}ee.ready()||ee.unlock();let t=n.key;if(t==="m"||t==="M"){ki=!ki,wa(),is(ki?"Muted":"Sound on");return}if(t==="f"||t==="F"){Id();return}if(t==="l"||t==="L"){ye?.phase==="BETTING"&&!ye.revealed&&(qn({t:"forceLock"}),is("Locking everyone in!"));return}(t===" "||t==="Enter"||t==="ArrowRight"||t==="n"||t==="N")&&(n.preventDefault(),rh())});function rh(){if(ye){if(ye.phase==="LOBBY"&&!ye.players.length){is("Scan the QR code to join first!","red");return}if(ye.phase==="BETTING"&&!ye.revealed){is("Waiting for everyone to lock in (press L to force it)");return}qn({t:"advance",from:ye.phase,stage:ye.phase==="RESULTS"?ye.resultsStage:void 0})}}var Td=new Map;function Ky(n){let t=ye;ye=n,wa();let e=new Map(n.players.map(s=>[s.id,s]));if(t)for(let s of n.players){let r=Td.get(s.id);r?!r.locked&&s.locked&&n.phase==="BETTING"?(ee.play("lock"),mi.say(iv(s.name),Math.random()<.5?"jeff":"pam",{priority:1})):r.connected&&!s.connected&&setTimeout(()=>{let o=ye?.players.find(a=>a.id===s.id);o&&!o.connected&&is(`${s.name}'s phone dropped out \u2014 it'll reconnect`,"red")},5e3):(ee.play("join"),n.phase==="LOBBY"&&mi.say(`${s.name} has entered the paddock!`,"pam",{priority:1}))}Td=e;let i=jy(n);!Ys||Ys.key!==i?Qy(i,n,t):Ys.update?.(n,t),tv(n),ev(n),Pd(n)}function jy(n){let t=n.round?.roundId||"";return n.phase==="BETTING"?`BETTING|${t}|${n.revealed?"reveal":"bet"}`:["INTRO","RACE","RESULTS","SCOREBOARD"].includes(n.phase)?`${n.phase}|${t}`:`${n.phase}|${n.gameNumber}`}function Qy(n,t,e){try{Ys?.destroy?.()}catch(r){console.warn(r)}gi.innerHTML="",mi.clear(),Br.innerHTML="";let i=t.phase;document.body.className=document.body.className.replace(/\bphase-\w+/g,"").trim()+` phase-${i}`,document.body.classList.toggle("racing",i==="RACE"||i==="INTRO"&&!!un),pi({type:"screen",key:n});let s={LOBBY:rv,INTRO:cv,BETTING:t.revealed?pv:fv,RACE:mv,RESULTS:gv,SCOREBOARD:Mv,FINALE:bv}[i];Ys=s?s(t,e):{},Ys.key=n,i!=="RACE"&&i!=="RESULTS"&&i!=="INTRO"&&Hr()}var Ad=null;function Pd(n,t=!1){if(!$r)return;let e={LOBBY:"lobby",BETTING:n.revealed?null:"betting",SCOREBOARD:"lobby",RESULTS:null,INTRO:null,RACE:null,FINALE:null}[n.phase];e===Ad&&!t||(Ad=e,e?ee.startMusic(e):ee.stopMusic(1.2))}function Ld(n){let t=[...n].sort((i,s)=>s.bankroll-i.bankroll),e=new Map;return t.forEach((i,s)=>e.set(i.id,s>0&&i.bankroll===t[s-1].bankroll?e.get(t[s-1].id):s+1)),e}function tv(n){let t=["INTRO","BETTING","RACE"].includes(n.phase)&&!(n.phase==="BETTING"&&n.revealed);if(zr.classList.toggle("hidden",!t),document.body.classList.toggle("no-hud",!t),!t){zr.innerHTML="";return}let e=Ld(n.players),i=n.phase==="RACE"?n.bets||{}:{};zr.innerHTML=n.players.map(s=>{let r="";s.connected?n.phase==="BETTING"&&(r=s.locked?'<span class="pp-status locked">\u{1F512} LOCKED IN</span>':'<span class="pp-status think">\u{1F914} Thinking\u2026</span>'):r='<span class="pp-status off">\u{1F4F5} Offline</span>';let o=(i[s.id]||[]).map(a=>fn(n.round,a.type==="win"?a.runnerId:a.pick)).filter(Boolean).map(a=>`<i title="${Ft(a.nickname)}" style="background:${Ft(a.colour.primary)}"></i>`).join("");return`<div class="pp ${s.connected?"":"disconnected"}" data-pid="${s.id}">
      ${os(e.get(s.id),"pp-ord")}
      ${An(s.avatar,70)}
      <div><div class="pp-name">${Ft(s.name)}</div><div class="pp-bank"><span class="coin"></span> ${sn(s.bankroll)}</div>${o?`<div class="pp-backs">${o}</div>`:""}</div>
      ${r}
    </div>`}).join("")}function ev(n){let t={INTRO:"Skip intros \u23ED",RACE:"Skip race \u23ED",RESULTS:"Next \u25B6",SCOREBOARD:n.roundNumber>=n.roundsPerGame?"Final results \u25B6":"Next round \u25B6",FINALE:"Play again \u21BB",BETTING:n.revealed?"Start race \u25B6":null}[n.phase];if(!t){Or.innerHTML="";return}Or.dataset.label!==t&&(Or.dataset.label=t,Or.innerHTML=`<button class="btn ${n.phase==="RACE"||n.phase==="INTRO"?"ghost small":"white"}">${t} <span style="opacity:.6;font-size:.7em">SPACE</span></button>`,Or.firstElementChild.addEventListener("click",e=>{e.stopPropagation(),Wr(),rh()}))}function is(n,t=""){let e=Be(`<div class="t panel ${t==="red"?"red":"yellow"} anim-pop">${Ft(n)}</div>`),i=fe("#toast");i.innerHTML="",i.appendChild(e),setTimeout(()=>{e.parentNode&&e.remove()},3200)}function nv(n){ee.duck(!0);let t=Be(`<div class="sub"><span class="who ${n.speaker==="pam"?"pam":"jeff"}">${n.speaker==="pam"?"PAM":"JEFF"}</span><span>${Ft(n.text)}</span></div>`);Br.appendChild(t);let e=["RESULTS","SCOREBOARD","FINALE","LOBBY"].includes(ye?.phase)?1:2;for(;Br.children.length>e;)Br.firstElementChild.remove();let i=Math.max(3e3,n.text.split(/\s+/).length*420+1500);setTimeout(()=>{t.classList.add("out"),setTimeout(()=>t.remove(),450)},i),pi({type:"line",text:n.text,speaker:n.speaker})}var Ue=(n,t="jeff",e=2)=>mi.say(n,t,{priority:e});function iv(n){let t=[`${n} has locked in. No take-backs!`,`And ${n}'s money is down!`,`${n} has committed. Bold. Possibly foolish.`,`Bets are in from ${n}!`];return t[Math.floor(Math.random()*t.length)]}function sv(n,t){let e=ye?.players.find(o=>o.id===n),i=zr.querySelector(`[data-pid="${n}"]`),s;if(i&&!zr.classList.contains("hidden")){let o=i.getBoundingClientRect(),a=qs.getBoundingClientRect(),l=a.width/1920;s=(o.left+o.width/2-a.left)/l+(Math.random()-.5)*160}else s=1920*(((ye?.players.findIndex(a=>a.id===n)??0)+1)/((ye?.players.length||1)+1))+(Math.random()-.5)*220;let r=Be(`<div class="react" style="left:${Math.round(s-60)}px;--rot:${Math.round((Math.random()-.5)*40)}deg"><span class="e">${Ft(t)}</span>${e?An(e.avatar,46):""}</div>`);Zy.appendChild(r),ee.play("pop"),setTimeout(()=>r.remove(),3300)}function Qe(n,t){return new Promise(e=>{let i=setTimeout(e,Xn(n));t?.timers.push(i)})}function Ea(){return{cancelled:!1,timers:[]}}function Vr(n){n.cancelled=!0,n.timers.forEach(clearTimeout)}async function fi(n,t,e=12e3){let i=Date.now();if(await Qe(t,n),!(Zs>1.5))for(;!n.cancelled&&mi.busy&&Date.now()-i<e;)await new Promise(s=>setTimeout(s,150))}var es=(n,t=120)=>dh(n,{size:t,idSuffix:Math.random().toString(36).slice(2,6)});function Dd(){return`<div class="clouds">${[0,1,2,3,4].map(n=>`<div class="cloud" style="top:${40+n*70}px;width:${180+n%3*70}px;height:${50+n%2*18}px;animation-duration:${70+n*17}s;animation-delay:-${n*19}s"></div>`).join("")}</div>
  <svg class="hills" viewBox="0 0 1920 260" preserveAspectRatio="none"><path d="M0 150 Q 240 40 520 120 T 1040 110 T 1500 90 T 1920 130 V260 H0Z" fill="#2ec27e" stroke="#14183c" stroke-width="6"/><path d="M0 200 Q 300 140 640 190 T 1280 180 T 1920 190 V260 H0Z" fill="#169c5b" stroke="#14183c" stroke-width="6"/></svg>`}var Qc=[100,250,500,1e3,2e3,5e3],th=[0,60,90,120,180];function rv(n){let t=Be(`<div class="lobby">
    ${Dd()}
    <div class="logo"><div class="word outlined">MARK<span class="r">RUN</span></div><br><div class="ribbon"><span>THE FINSBURY PARK FORM GUIDE</span></div></div>
    <div class="tagline">Real parkruns. Real Mark. Fake money. \u{1F377}</div>
    <div class="qr-card panel white"><div class="qr"></div><div class="scan">\u{1F4F1} SCAN TO JOIN</div><div class="url"></div></div>
    <div class="slots"></div>
    <div class="settings panel cream"></div>
    <div class="start-wrap"></div>
  </div>`);gi.appendChild(t),fe(".qr",t).innerHTML=n.qrSvg||"",fe(".url",t).textContent=(n.joinUrl||"").replace(/^https?:\/\//,""),Ue(n.players.length?"Welcome back to MARKRUN!":"Welcome to MARKRUN! Grab your phones and scan the code.","jeff",1);let e=(r,o,a,l)=>`<div class="set" data-k="${o}"><div class="lbl">${r}</div><div class="ctl-row">${l.replace("{val}",`<span class="val">${a}</span>`)}</div></div>`;function i(r){let o=[],a=Math.max(2,r.players.length);for(let m=0;m<a;m++){let d=r.players[m];if(d){let c=d.connected?d.ready?'<span class="tag" style="background:var(--grass);color:#fff">\u2713 READY</span>':'<span class="tag">joined</span>':'<span class="tag" style="background:var(--tomato);color:#fff">\u{1F4F5} offline</span>';o.push(`<div class="slot panel slant ${s.has(d.id)?"":"joined"}" style="background:${Ft(d.avatar.colour)}"><div class="unslant" style="display:flex;align-items:center;gap:24px;width:100%">${An(d.avatar,92)}<div><div class="sname">${Ft(d.name)}</div><div class="ssub">${sn(d.bankroll)} to gamble</div></div><span class="slot-badge">${c}</span><button class="btn small white kick" data-kick="${d.id}" title="Remove player">\u2715</button></div></div>`)}else o.push(`<div class="slot panel slant empty"><div class="unslant" style="display:flex;align-items:center;gap:24px"><div class="ghost-av">?</div><div><div class="sname">Player ${m+1}</div><div class="ssub">Scan the code to take this seat</div></div></div></div>`)}s=new Set(r.players.map(m=>m.id)),fe(".slots",t).innerHTML=o.join(""),fe(".slots",t).classList.toggle("many",a>2);let l=r.settings,h=Math.round((l.volume??.8)*10);fe(".settings",t).innerHTML=[e("Starting pot","startingBankroll",sn(l.startingBankroll),'<button class="btn small white" data-d="-1">\u2212</button>{val}<button class="btn small white" data-d="1">+</button>'),e("Rounds","roundsPerGame",l.roundsPerGame,'<button class="btn small white" data-d="-1">\u2212</button>{val}<button class="btn small white" data-d="1">+</button>'),e("Bet timer","betTimer",l.betTimer?`${l.betTimer}s`:"Off",'<button class="btn small white" data-d="-1">\u2212</button>{val}<button class="btn small white" data-d="1">+</button>'),e("Drinking","drinkingMode","",`<button class="btn small toggle ${l.drinkingMode?"on":"off"}" data-toggle>${l.drinkingMode?"\u{1F37A} ON":"OFF"}</button>`),e("Voice","voice","",`<button class="btn small toggle ${l.voice?"on":"off"}" data-toggle>${l.voice?"\u{1F399}\uFE0F ON":"OFF"}</button>`),e("Music","music","",`<button class="btn small toggle ${l.music?"on":"off"}" data-toggle>${l.music?"\u{1F3B5} ON":"OFF"}</button>`),e("Volume","volume",`${h*10}%`,'<button class="btn small white" data-d="-1">\u2212</button>{val}<button class="btn small white" data-d="1">+</button>')].join("");let u=r.players.length&&r.players.every(m=>m.ready);fe(".start-wrap",t).innerHTML=`<button class="btn green ${r.players.length?"pulse":""}" data-start ${r.players.length?"":"disabled"}>${r.players.length?r.players.length===1?"START SOLO \u25B6":"LET'S RACE \u25B6":"Waiting for players\u2026"}</button>
      <div class="hint">${r.refreshing?"\u23F3 Refreshing historical data\u2026":r.players.length?u?"Everyone is ready!":"Press SPACE \u2014 or everyone taps READY on their phone":"Up to 4 players \xB7 best with 2"}</div>
      <button class="btn small white refresh-btn" data-refresh ${r.refreshing?"disabled":""}>\u27F3 Refresh Historical Data</button>`}let s=new Set(n.players.map(r=>r.id));return i(n),t.addEventListener("click",r=>{Wr();let o=r.target.closest("button");if(!o)return;if(ee.play("tick"),o.dataset.start!==void 0)return rh();if(o.dataset.refresh!==void 0)return av();if(o.dataset.kick)return qn({t:"kick",playerId:o.dataset.kick});let a=o.closest("[data-k]")?.dataset.k;if(!a)return;let l=ye.settings;if(o.dataset.toggle!==void 0)return qn({t:"settings",settings:{[a]:!l[a]}});let h=Number(o.dataset.d),u;if(a==="startingBankroll"){let m=Qc.indexOf(l[a]);u=Qc[Math.max(0,Math.min(Qc.length-1,(m<0?2:m)+h))]}else if(a==="betTimer"){let m=th.indexOf(l[a]);u=th[Math.max(0,Math.min(th.length-1,(m<0?0:m)+h))]}else a==="volume"?u=Math.round(Math.max(0,Math.min(1,(l.volume??.8)+h*.1))*10)/10:u=l[a]+h;qn({t:"settings",settings:{[a]:u}})}),{update:r=>i(r)}}var ov=()=>!!fe("#tvmodal");function Gr(){fe("#tvmodal")?.remove()}function nh(n){Gr();let t=Be(`<div id="tvmodal"><div class="tvm panel white anim-pop">${n}</div></div>`);return qs.appendChild(t),t.addEventListener("click",e=>{e.target===t&&Gr()}),t}function av(){if(ye?.phase!=="LOBBY")return;let n=nh(`<h2 class="outlined white thin">\u27F3 Refresh Historical Data</h2>
    <p><b>This uses the internet.</b> It contacts parkrun, Strava (if set up) and the weather archive to fetch any new runs since the last refresh, then rebuilds the local database.</p>
    <p>It can take a few minutes. The game itself never goes online \u2014 this is the only button that does.</p>
    <div class="row"><button class="btn white" data-cancel>Cancel <small>ESC</small></button><button class="btn green" data-ok>Refresh now <small>ENTER</small></button></div>`);fe("[data-cancel]",n).onclick=Gr,fe("[data-ok]",n).onclick=()=>{qn({t:"refresh"}),nh('<h2 class="outlined white thin">\u27F3 Refreshing\u2026</h2><div class="rlog"></div><div class="row"><button class="btn white" data-cancel disabled>Working\u2026</button></div>')}}function kd(n,t){let e=fe("#tvmodal .rlog");for(e||(nh('<h2 class="outlined white thin">\u27F3 Refreshing\u2026</h2><div class="rlog"></div><div class="row"><button class="btn white" data-cancel disabled>Working\u2026</button></div>'),e=fe("#tvmodal .rlog")),e.appendChild(Be(`<div class="rl"><b>${Ft(n)}</b> ${Ft(t)}</div>`));e.children.length>9;)e.firstElementChild.remove()}function lv(n,t){t&&kd("error",t);let e=fe("#tvmodal [data-cancel]");e&&(e.disabled=!1,e.textContent=n?"Done \u2713":"Close",e.onclick=Gr),is(n?"Historical data refreshed!":"Refresh had problems \u2014 existing data kept",n?"":"red")}var un=null,ns=null;function Hr(){if(un){try{un.dispose()}catch(n){console.warn(n)}un=null,ns=null,ba.innerHTML="",document.body.classList.remove("racing")}}async function Ud(n,{allow2d:t=!0}={}){Hr();let e=eh||await Jy,i={course:e.course,park:e.park,speed:Zs,...n};if(ts?.createRaceView&&!ih)try{return un=await ts.createRaceView(ba,i),ns="3d",window.__markrun.raceView=un,pi({type:"raceview",kind:"3d"}),un}catch(s){console.error("3D race view failed, using 2D fallback",s),pi({type:"raceview-error",msg:String(s?.message||s)}),ba.innerHTML=""}return!t||!n.plan?null:(un=gh(ba,i),ns="2d",window.__markrun.raceView=un,pi({type:"raceview",kind:"2d"}),un)}function Rd(n){(n.introLines?.length?n.introLines:[{speaker:"jeff",text:`Welcome to Finsbury Park for round ${n.number}: ${n.title}!`}]).slice(0,2).forEach(e=>Ue(e.text,e.speaker,3))}function cv(n){let t=Ea(),e=n.round,i=[...e.runners].sort((m,d)=>m.lane-d.lane),s=Be(`<div class="intro">${Dd()}<div class="tint"></div><div class="stagebox"></div><div class="intro-dots">${i.map(()=>"<i></i>").join("")}</div></div>`);gi.appendChild(s);let r=fe(".stagebox",s),o=(n.bailouts||[]).map(m=>`${Ft(n.players.find(d=>d.id===m.playerId)?.name||"")} got a ${sn(m.amount)} bailout from the Bank of Mum &amp; Dad`).join("<br>"),a=`<div class="title-card"><div class="anim-pop"><div class="rn outlined white">ROUND ${e.number} <span style="opacity:.8">of ${n.roundsPerGame}</span></div><div class="rt outlined" style="font-size:${e.title.length>22?104:150}px">${Ft(e.title)}</div><div class="rs">${i.length} runners. All of them Mark. Only one of them is having a good day.</div>${e.notice?`<div class="bail panel grape" style="color:#fff">\u{1F0CF} ${Ft(e.notice)}</div><br>`:""}${o?`<div class="bail panel yellow">\u{1F4B8} ${o}</div>`:""}</div></div>`,l=m=>`<div class="rcard-wrap anim-left"><div class="rcard panel slant" style="background:${Ft(m.colour.primary)}"><div class="rp">${es(m,300)}</div><div class="unslant">
        <div class="nick outlined">${Ft(m.nickname)}</div>
        <div class="tagl">${Ft(m.tagline||"")}</div>
        ${m.intro?`<div class="introline">\u201C${Ft(m.intro)}\u201D</div>`:""}
        ${m.publicClue?`<div class="clue"><span class="k">CLUE</span><span>${Ft(m.publicClue.text)}</span></div>`:""}
      </div><div class="lane">LANE ${m.lane}</div><div class="odds-badge"><div class="ol">ODDS</div><div class="ov outlined">${Ft(m.odds?.display||"")}</div></div></div></div>`;async function h(m){let d=i[m];zn(".intro-dots i",s).forEach((c,p)=>c.classList.toggle("on",p===m)),r.innerHTML=l(d),ee.play("whoosh"),Ue(d.intro||`${d.nickname}. ${d.tagline||""}`,m%2?"pam":"jeff",3),await fi(t,4800,12e3)}async function u(){t.cancelled||(zn(".intro-dots i",s).forEach(m=>m.classList.remove("on")),r.innerHTML='<div class="bets-open"><div class="anim-pop"><div class="big outlined">BETS ARE OPEN!</div><div class="sub2 outlined white thin">\u{1F4F1} Grab your phones \u2014 your secret clues are waiting \u{1F92B}</div></div></div>',ee.play("kaching"),Ue("The book is open! Check your phones for your secret clues.","pam",3),await fi(t,3200,6e3),t.cancelled||qn({t:"introDone",roundId:e.roundId}))}return(async()=>{if(!ih&&ts?.createRaceView){let m=new Map(i.map((c,p)=>[c.id,p])),d=await Ud({round:e,plan:wd(e),backedBy:{},introCards:!1,onIntroRunner:c=>t.cancelled?void 0:h(m.get(c)??0)},{allow2d:!1}).catch(()=>null);if(d&&!t.cancelled){document.body.classList.add("racing"),s.classList.add("over3d"),s.querySelector(".clouds")?.remove(),s.querySelector(".hills")?.remove(),r.innerHTML=a,ee.play("fanfare"),Rd(e);let c=!1,p=setTimeout(()=>{c||(c=!0,u())},Xn(15e4));t.timers.push(p);try{d.playIntro(()=>{c||(c=!0,clearTimeout(p),u())})}catch(M){console.error(M),c=!0,u()}return}}if(!t.cancelled){r.innerHTML=a,ee.play("fanfare"),Rd(e),await fi(t,4200,14e3);for(let m=0;m<i.length&&!t.cancelled;m++)await h(m),t.cancelled||await Qe(700,t);await u()}})(),{destroy:()=>{Vr(t)}}}function hv(n,t=[]){return`<div class="rc panel" data-rid="${n.id}">
    <div class="top stripe" style="--c1:${Ft(n.colour.primary)};--c2:${Ft(uv(n.colour.primary))}"><div class="lane">${n.lane}</div><div class="rp">${es(n,170)}</div></div>
    <div class="odds"><span class="num">${Ft(n.odds?.display||"")}</span>${n.odds?.decimalText?`<small>pays \xD7${Ft(n.odds.decimalText)}</small>`:""}</div>
    <div class="nick">${Ft(n.nickname)}</div>
    <div class="tagl">${Ft(n.tagline||"")}</div>
    <div class="clue"><span class="k">${Ft((n.publicClue?.label||"Public clue").toUpperCase())} \xB7 PUBLIC CLUE</span>${Ft(n.publicClue?.text||"")}</div>
    ${t.length?`<div class="backers">${t.join("")}</div>`:""}
  </div>`}function uv(n){let t=parseInt(String(n).replace("#",""),16),e=i=>Math.round(i+(255-i)*.25);return`#${[t>>16&255,t>>8&255,t&255].map(i=>e(i).toString(16).padStart(2,"0")).join("")}`}function dv(n){return(n.matchups||[]).map(t=>{let e=fn(n,t.a),i=fn(n,t.b);return!e||!i?"":`<div class="mu panel slant dark"><div class="unslant" style="display:flex;align-items:center;gap:18px"><span class="lbl">HEAD-TO-HEAD</span>
      <span class="side"><i class="dot" style="background:${Ft(e.colour.primary)}"></i>${Ft(js(e))} <span class="od">${Ft(t.odds.displayA||`\xD7${t.odds.a}`)}</span></span>
      <span class="vs">VS</span>
      <span class="side"><i class="dot" style="background:${Ft(i.colour.primary)}"></i>${Ft(js(i))} <span class="od">${Ft(t.odds.displayB||`\xD7${t.odds.b}`)}</span></span></div></div>`}).join("")}function fv(n){let t=n.round,e=[...t.runners].sort((u,m)=>u.lane-m.lane),i=Be(`<div class="betting">
    <div class="bet-head"><div class="h outlined">PLACE YOUR BETS!</div><div class="rt">Round ${t.number}/${n.roundsPerGame} \xB7 ${Ft(t.title)}</div><div class="timer num hidden"></div></div>
    <div class="runner-grid n${e.length}">${e.map(u=>hv(u)).join("")}</div>
    <div class="matchups">${dv(t)}</div>
    ${t.notice?`<div class="notice panel grape">\u{1F0CF} ${Ft(t.notice)}</div>`:""}
  </div>`);gi.appendChild(i),zn(".rc",i).forEach((u,m)=>{u.style.animation=`slide-up .5s ${m*.08}s cubic-bezier(.2,1.3,.4,1) both`});let s=fe(".timer",i),r=null,o=null;function a(){if(!ye?.deadline||ye.phase!=="BETTING"||ye.revealed){s.classList.add("hidden");return}let u=Math.max(0,Math.ceil((ye.deadline-sh.serverNow())/1e3));s.classList.remove("hidden"),s.textContent=`${Math.floor(u/60)}:${String(u%60).padStart(2,"0")}`,u<=10&&u!==o&&ee.play("tick"),o=u}r=setInterval(a,250),a();let l=[["jeff","Remember: the odds are set on public information only. Your secret clue might know better."],["pam","Every one of these runners is Mark. The question is: which Mark turned up?"],["jeff","Head-to-heads are a lovely way to lose money slowly."]],h=setTimeout(()=>{let u=l[Math.floor(Math.random()*l.length)];Ue(u[1],u[0],1)},Xn(9e3));return{destroy:()=>{clearInterval(r),clearTimeout(h)}}}function pv(n){let t=Ea(),e=n.round,i=Be('<div class="reveal"><div class="rh outlined">THE BETS ARE IN!</div><div class="cols"></div></div>');gi.appendChild(i);let s=fe(".cols",i);return s.innerHTML=n.players.map(r=>{let a=(n.bets?.[r.id]||[]).map(l=>{let h=l.type==="win"?l.runnerId:l.pick,u=fn(e,h),m=l.type==="win"?u?.odds?.display||"":`\xD7${Ca(e,l)}`;return`<div class="betline"><div class="rp">${u?es(u,76):""}</div><div class="bl">${Ft(Ra(e,l))}<div class="bt">${l.type==="win"?"WIN":"HEAD-TO-HEAD"} \xB7 ${Ft(m)} \xB7 pays ${sn(l.stake*Ca(e,l))}</div></div><div class="st num">${sn(l.stake)}</div></div>`}).join("");return`<div class="col panel slant" style="background:${Ft(r.avatar.colour)}"><div class="unslant"><div class="who">${An(r.avatar,80)}${Ft(r.name)}</div>${a||'<div class="nobets">Kept their wallet shut. \u{1F648}</div>'}</div></div>`}).join(""),(async()=>{ee.play("drumroll",{dur:1.8/Zs+.2});let r=(n.betLines||[]).slice();r.length||Ue("Right then. Let's see who's backed what!","jeff",3),await Qe(2e3,t);let o=zn(".betline",i);for(let h of o){if(t.cancelled)return;if(h.classList.add("show"),ee.play("pop"),r.length){let u=r.shift();Ue(u.text,u.speaker,3)}await Qe(1100,t)}for(let h of r.splice(0,3))Ue(h.text,h.speaker,2);let a=n.players.map(h=>new Set((n.bets?.[h.id]||[]).filter(u=>u.type==="win").map(u=>u.runnerId))),l=null;if(a.length>=2)for(let h of a[0])a.slice(1).every(u=>u.has(h))&&(l=fn(e,h));if(l)i.appendChild(Be(`<div class="same panel yellow anim-pop">Great minds\u2026 both backing ${Ft(l.nickname)}! \u{1F91D}</div>`)),Ue(`They've both gone for ${l.nickname}. Either genius, or a shared delusion.`,"pam",3);else if(!(n.betLines||[]).length){let h=n.players.reduce((u,m)=>u+(n.bets?.[m.id]||[]).reduce((d,c)=>d+c.stake,0),0);Ue(h?`That's ${Zn(h)} riding on this one. Pressure!`:"Nobody has bet a penny. Cowards, the lot of them.","pam",2)}if(await fi(t,2600,14e3),!t.cancelled){for(let h of ts?.createRaceView&&!ih?[]:["3","2","1"]){if(t.cancelled)return;let u=Be(`<div class="countdown outlined anim-pop">${h}</div>`);i.appendChild(u),ee.play("beep"),await Qe(800,t),u.remove()}t.cancelled||qn({t:"revealDone",roundId:e.roundId})}})(),{destroy:()=>Vr(t)}}function mv(n){let t=Ea(),e=n.round,i=Be(`<div class="race-ov"><div class="live panel slant red"><div class="unslant" style="display:flex;gap:14px;align-items:center"><span class="dot"></span>LIVE \xB7 ${Ft(e.title)}</div></div></div>`);gi.appendChild(i),document.body.classList.add("racing");let s=0,r=0;return(async()=>{let o=await Ud({round:e,plan:n.racePlan,backedBy:n.backedBy||{}});if(!t.cancelled){if(!o){i.appendChild(Be('<div class="race-err panel red">Race view failed to load</div>'));return}document.body.classList.add("racing"),ns==="3d"&&i.querySelector(".live")?.remove(),ns!=="3d"?(ee.play("horn"),setTimeout(()=>ee.play("crowd",{dur:3,peak:.25}),300),Ue("And they're off!","jeff",3)):ee.play("crowd",{dur:4,peak:.2}),pi({type:"race-start",kind:ns}),o.playRace(a=>{if(!(t.cancelled||!a)){if(pi({type:"race-event",e:a.type||"line",text:a.text}),a.kind==="countdown"){ee.play(a.n===0?"go":"beep"),a.n===0&&(ee.play("horn"),ee.play("crowd",{dur:3,peak:.28}));return}if(a.kind==="photo_finish"){ee.play("stamp"),Ue("It's a photo finish! Hold your breath!","pam",3);return}if(a.text&&(a.kind==="commentary"||!a.type)){mi.say(a.text,a.speaker||"jeff",{priority:a.priority||2});return}switch(a.type){case"overtake":Date.now()-s>1500&&(s=Date.now(),ee.play("whoosh"));break;case"lead_change":ee.play("whoosh"),ee.play("crowd",{dur:2,peak:.18});break;case"breakaway":ee.play("crowd",{dur:2.5,peak:.2});break;case"lap":ee.play("bell");break;case"final_stretch":ee.play("crowd",{dur:6,peak:.4});break;case"finish":r++,r===1&&(ee.play("fanfare"),ee.play("crowd",{dur:4,peak:.45}));break;default:break}}},async()=>{t.cancelled||(pi({type:"race-done"}),await Qe(2500,t),t.cancelled||qn({t:"raceDone",roundId:e.roundId}))})}})(),{destroy:()=>{Vr(t)}}}function gv(n){let t=null,e=-1,i=Be('<div class="results"></div>');gi.appendChild(i);let s=n.round,r=n.results;function o(x,f){return f.players.filter(b=>(f.bets?.[b.id]||[]).some(v=>(v.type==="win"?v.runnerId:v.pick)===x)).map(b=>An(b.avatar,50))}let a=(x,f="")=>`<div class="res-head"><div class="h outlined">${x}</div>${f?`<div class="sh">${f}</div>`:""}</div>`,l=x=>{t.cancelled||qn({t:"stageDone",stage:x})};async function h(x){let f=t,b=r.finishOrder.map(U=>{let I=fn(s,U.runnerId);return`<div class="orow panel slant ${U.place===1?"first":""}" style="${U.place===1?"":`background:${Ft(I?.colour?.primary||"#2a62e0")}`}"><div class="unslant" style="display:flex;align-items:center;gap:26px;width:100%">
        ${os(U.place)}<div class="rp">${I?es(I,112):""}</div>
        <div class="nm ${U.place===1?"":"outlined white thin"}">${Ft(I?.nickname||U.runnerId)}${r.favouriteId===U.runnerId?' <span class="fav">FAV</span>':""}<small>${Ft(I?.tagline||"")}</small></div>
        <div class="bk">${o(U.runnerId,x).join("")}</div>
        <div class="tm"><span class="num">${Ft(U.timeText||hh(U.officialS))}</span>${U.place>1&&U.gapS!=null?`<span class="gap">+${Math.round(U.gapS)}s</span>`:""}</div></div></div>`});i.innerHTML=a("THE RESULT","Official times, as recorded by the volunteers \u{1F4CB}")+`<div class="order">${b.join("")}</div>`;let v=zn(".orow",i);for(let U=v.length-1;U>=0;U--){if(f.cancelled)return;v[U].classList.add("show"),U===0?(ee.play("fanfare"),Qs(document.body,{count:90})):ee.play("pop"),await Qe(U===1?1600:800,f)}(r.commentary||[]).slice(0,2).forEach(U=>Ue(U.text,U.speaker,3)),await fi(f,5500,14e3),l(0)}async function u(){let x=t,f=r.finishOrder.map(_=>_.runnerId),b=new Map((r.reveal||[]).map(_=>[_.runnerId,_]));i.innerHTML=a("WHO WERE THEY REALLY?","Every runner was a real Mark, on a real Saturday \u{1F575}\uFE0F")+`<div class="reveal-grid">${f.map((_,U)=>{let I=fn(s,_),w=b.get(_)||{},R=r.finishOrder[U],y=(w.funFacts||[]).slice(0,2).map(S=>`<div>\u2022 ${Ft(S)}</div>`).join(""),g=[w.eventNumber?`Event #${w.eventNumber}`:"",w.overallPosition?`${w.overallPosition}${["th","st","nd","rd"][w.overallPosition%10>3||[11,12,13].includes(w.overallPosition%100)?0:w.overallPosition%10]} overall`:"",w.ageGrade?`${w.ageGrade}% AG`:""].filter(Boolean).join(" \xB7 ");return`<div class="rv" data-i="${U}">
        <div class="face front" style="background:${Ft(I?.colour?.primary)}"><div><div class="rp">${I?es(I,220):""}</div><div class="q outlined">?</div></div></div>
        <div class="face back"><div class="bh" style="background:${Ft(I?.colour?.primary)}"><div class="rp">${I?es(I,74):""}</div><div class="n">${Ft(I?.nickname||_)}</div></div>
          <div class="date">${Ft(w.dateText||w.date||"")}</div>
          <div class="time num">${Ft(R?.timeText||"")}</div>
          <div class="meta">${Ft(g)}${w.finsburyNumber?` \xB7 Finsbury run #${w.finsburyNumber}`:""}</div>
          ${w.stravaTitle?`<div class="strava"><span class="k">STRAVA TITLE</span>\u201C${Ft(w.stravaTitle)}\u201D</div>`:""}
          <div class="facts">${y}</div>
          ${w.wasPB||w.pbKind?`<div class="pb">${w.pbKind==="finsbury"?"COURSE PB!":"PB! \u{1F3C5}"}</div>`:""}
          <div class="place">${os(R?.place||U+1)}</div>
        </div></div>`}).join("")}</div>`;let v=zn(".rv",i);await Qe(900,x);for(let _=0;_<v.length;_++){if(x.cancelled)return;v[_].classList.add("flip"),ee.play("reveal");let U=b.get(f[_]),I=fn(s,f[_]);_===0&&U?.dateText&&Ue(`The winner, ${I?.nickname}, was Mark on ${U.dateText}.`,"jeff",2),await Qe(1900,x)}await fi(x,9e3,15e3),l(1)}async function m(x){let f=t,b=r.clueReview||[],v=[...b.filter(w=>w.verdict!=="neutral"),...b.filter(w=>w.verdict==="neutral")].slice(0,8);if(!v.length){i.innerHTML="",await Qe(300,f),l(2);return}let _=new Map((x.clues||[]).map(w=>[w.id,w]));i.innerHTML=a("CLUE POST-MORTEM","Useful\u2026 or a red herring? \u{1F41F}")+`<div class="clue-list">${v.map(w=>{let R=fn(s,w.runnerId),y=_.get(w.clueId),g=w.owner==="public"?`PUBLIC CLUE${y?.label?` \xB7 ${Ft(y.label.toUpperCase())}`:""}`:`${Ft(x.players.find(T=>T.id===w.owner)?.name||"Secret")}'S SECRET CLUE \u{1F92B}`,S={useful:"USEFUL \u2713",red_herring:"RED HERRING \u{1F41F}",neutral:"MEH"}[w.verdict]||Ft(w.verdict);return`<div class="cl panel"><div class="rp">${R?es(R,74):""}</div><div class="txt"><div class="own">${g} \xB7 ${Ft(R?.nickname||"")}</div>${Ft(w.text||y?.text||"")}${w.quip?`<div class="quip">${Ft(w.quip)}</div>`:""}</div><div class="verdict ${Ft(w.verdict)}">${S}</div></div>`}).join("")}</div>`;let U=zn(".cl",i);for(let w of U){if(f.cancelled)return;w.classList.add("show"),setTimeout(()=>ee.play("stamp"),Xn(250)),await Qe(1300,f)}let I=v.find(w=>w.verdict==="red_herring"&&w.quip);I&&Ue(I.quip,"pam",2),await fi(f,7e3,12e3),l(2)}async function d(x){let f=t,b=x.settings.drinkingMode;i.innerHTML=a("PAY DAY","The bookie settles up \u{1F4B0}")+`<div class="payouts">${x.players.map(I=>{let w=r.payouts?.[I.id]||{bets:[],net:0,bankroll:I.bankroll},R=(w.bets||[]).map(y=>`<div class="pl ${y.won?"won":"lost"}"><span class="mark">${y.won?"\u2705":"\u274C"}</span><div class="lb">${Ft(Ra(s,y))}<small>staked ${sn(y.stake)}</small></div><div class="r">${y.won?`+${sn(y.returned)}`:`\u2212${sn(y.stake)}`}</div></div>`).join("")||'<div class="pl show"><div class="lb">No bets placed. Sensible. Boring.</div></div>';return`<div class="pay panel slant" data-pid="${I.id}" style="background:${Ft(I.avatar.colour)}"><div class="unslant" style="display:flex;flex-direction:column;height:100%">
        <div class="who">${An(I.avatar,90)}${Ft(I.name)}</div>
        <div class="lines">${R}</div>
        <div class="net num" data-net="${w.net}">${Xr(0)}</div>
        <div class="bank">Bankroll: <span data-bank>${sn(w.bankroll-w.net)}</span></div>
        ${b?c(w.net,I.id):""}
      </div></div>`}).join("")}</div>`,await Qe(600,f);for(let I of zn(".pl",i)){if(f.cancelled)return;I.classList.add("show"),ee.play(I.classList.contains("won")?"kaching":"pop"),await Qe(700,f)}await Qe(400,f);let v=null,_=null;for(let I of x.players){let w=r.payouts?.[I.id];if(!w)continue;let R=i.querySelector(`.pay[data-pid="${I.id}"]`),y=R.querySelector(".net"),g=R.querySelector("[data-bank]");y.classList.add(w.net>0?"green":w.net<0?"red":"white"),y.classList.add("outlined"),Aa(y,0,w.net,Xn(1800),S=>Xr(S)),Aa(g,w.bankroll-w.net,w.bankroll,Xn(1800),S=>sn(S)),(!v||w.net>v.net)&&(v={...w,p:I,panel:R}),(!_||w.net<_.net)&&(_={...w,p:I,panel:R})}if(await Qe(1900,f),f.cancelled)return;let U=x.settings.drinkingMode?(r.drinks||[]).filter(I=>!I.playerId):[];U.length&&i.appendChild(Be(`<div class="drink-all panel yellow anim-pop">\u{1F37B} ${U.map(I=>Ft(I.text)).join(" \xB7 ")}</div>`)),v&&v.net>0&&(ee.play("kaching"),Qs(document.body,{count:140}),v.panel.classList.add("big-win"),v.panel.appendChild(Be('<div class="mood">\u{1F911}</div>')),Ue(xv(v.p.name,v.net),"jeff",3)),_&&_.net<0&&(setTimeout(()=>ee.play("sadtrombone"),Xn(900)),_.panel.classList.add("big-loss"),_.panel.appendChild(Be('<div class="raincloud">\u{1F327}\uFE0F</div>')),Ue(yv(_.p.name,_.net),"pam",3)),!v?.net&&!_?.net&&Ue("Nobody won, nobody lost. The bookie is furious.","pam",2),await fi(f,7e3,14e3),l(3)}function c(x,f){if(Array.isArray(r.drinks))return r.drinks.filter(v=>v.playerId===f).map(v=>`<div class="drink panel yellow">\u{1F37A} ${Ft(v.text)}</div>`).join("");if(x<0){let b=Math.min(5,Math.max(1,Math.ceil(-x/100)));return`<div class="drink panel yellow">\u{1F37A} Take ${b} sip${b>1?"s":""}!</div>`}if(x>0){let b=Math.min(5,Math.max(1,Math.ceil(x/150)));return`<div class="drink panel yellow">\u{1F449} Hand out ${b} sip${b>1?"s":""}</div>`}return'<div class="drink panel yellow">\u{1F964} Water break</div>'}async function p(x){let f=t,b=r.awards||[];if(!b.length&&!r.archetype?.label){await Qe(200,f),l(4);return}i.innerHTML=a("ROUND AWARDS","\u{1F3C6}")+`<div class="awards">${r.archetype?.label?`<div class="arch panel yellow anim-pop"><div class="al display">${Ft(r.archetype.label)}</div><div class="ab">${Ft(r.archetype.blurb||"")}</div></div>`:""}${b.map(v=>{let _=x.players.find(U=>U.id===v.playerId);return`<div class="award panel slant ${_?"":"yellow"}" style="${_?`background:${Ft(_.avatar.colour)}`:""}"><div class="unslant" style="display:flex;align-items:center;gap:28px"><span class="trophy">\u{1F3C6}</span>${_?An(_.avatar,84):""}<div><div class="at outlined white thin">${Ft(v.title)}</div><div class="ax" style="color:${_?"#fff":"var(--ink)"}">${Ft(v.text||"")}</div></div></div></div>`}).join("")}</div>`;for(let v of zn(".award",i)){if(f.cancelled)return;v.classList.add("show"),ee.play("fanfare"),await Qe(1500,f)}b[0]&&Ue(`${b[0].title}! ${b[0].text||""}`,"jeff",2),await fi(f,6500,12e3),l(4)}function M(x){if(x.resultsStage===e)return;t&&Vr(t),t=Ea(),e=x.resultsStage,mi.clear(),Br.innerHTML="";let f=x.resultStages[x.resultsStage];if(pi({type:"results-stage",stage:f}),f!=="order"&&un&&Hr(),f==="order"&&un&&ns==="3d")try{un.showPodium?.(r)}catch(b){console.warn(b)}else un&&f==="order"&&Hr();document.body.classList.toggle("racing",!!un),({order:h,reveal:u,clues:m,payouts:d,awards:p}[f]||(async()=>l(x.resultsStage)))(x).catch(b=>console.error(b))}return r&&M(n),{update:x=>{x.results&&M(x)},destroy:()=>{t&&Vr(t),Hr()}}}function xv(n,t){let e=[`${n} cleans up! Up ${Zn(t)}. Insufferable for the rest of the evening.`,`Kerching! ${n} is ${Zn(t)} richer and won't let anyone forget it.`,`${n} read that race like a book.`];return e[Math.floor(Math.random()*e.length)]}function yv(n,t){let e=[`Oh dear. ${n} is down ${Zn(-t)}. The bank of Mark is not sympathetic.`,`${n} backed the wrong Mark. It happens to the best of us. Mostly to ${n}.`,`That's ${Zn(-t)} gone, ${n}. Thoughts and prayers.`];return e[Math.floor(Math.random()*e.length)]}function vv(n,{compact:t=!1}={}){let e=Ld(n.players),i=n.history.at(-1);return[...n.players].sort((s,r)=>r.bankroll-s.bankroll).map(s=>{let r=e.get(s.id),o=i?.nets?.[s.id]??0;return`<div class="srow panel slant ${r===1&&!t?"lead":""}" style="${r===1&&!t?"":`background:${Ft(s.avatar.colour)}`}"><div class="unslant" style="display:flex;align-items:center;gap:26px;width:100%">
      ${os(r)}${An(s.avatar,t?70:96)}<div class="nm">${Ft(s.name)}</div>
      ${t?"":`<span class="dl ${o>0?"up":o<0?"down":"flat"}">${Xr(o)}</span>`}
      <div class="bk num">${sn(s.bankroll)}</div>
      ${!t&&s.ready?'<span class="tag" style="background:var(--grass);color:#fff">\u2713 READY</span>':""}
    </div></div>`}).join("")}function _v(n){let t=n.history,e=n.settings.startingBankroll,i=n.players.map(M=>({p:M,pts:[e,...t.map(x=>x.bankrolls?.[M.id]??e)]})),s=Math.max(2,(t.length||0)+1),r=Math.max(e*1.2,...i.flatMap(M=>M.pts)),o=540,a=420,l=36,h=M=>l+M*(o-l*2)/(s-1),u=M=>a-l-M/r*(a-l*2),m=[0,.5,1].map(M=>`<line x1="${l}" x2="${o-l}" y1="${u(r*M)}" y2="${u(r*M)}" stroke="#14183c22" stroke-width="2"/>`).join(""),d=`<line x1="${l}" x2="${o-l}" y1="${u(e)}" y2="${u(e)}" stroke="#14183c55" stroke-width="2" stroke-dasharray="8 8"/>`,c=i.map(({p:M,pts:x})=>`<polyline fill="none" stroke="#14183c" stroke-width="12" stroke-linejoin="round" stroke-linecap="round" points="${x.map((f,b)=>`${h(b)},${u(f)}`).join(" ")}"/><polyline fill="none" stroke="${Ft(M.avatar.colour)}" stroke-width="6" stroke-linejoin="round" stroke-linecap="round" points="${x.map((f,b)=>`${h(b)},${u(f)}`).join(" ")}"/>${x.map((f,b)=>`<circle cx="${h(b)}" cy="${u(f)}" r="8" fill="${Ft(M.avatar.colour)}" stroke="#14183c" stroke-width="4"/>`).join("")}`).join(""),p=Array.from({length:s},(M,x)=>`<text x="${h(x)}" y="${a-6}" text-anchor="middle" font-family="Lilita One" font-size="20" fill="#14183c">${x===0?"Start":`R${x}`}</text>`).join("");return`<svg viewBox="0 0 ${o} ${a}" width="100%" height="440">${m}${d}${c}${p}</svg>`}function Mv(n){let t=Be('<div class="score"></div>');gi.appendChild(t);let e=null;function i(r){let a=r.roundNumber>=r.roundsPerGame?"\u{1F3C1} That was the final round! Champion next\u2026":r.roundNumber===r.roundsPerGame-1?"Up next: THE FINAL ROUND \u{1F62C}":`Up next: Round ${r.roundNumber+1} of ${r.roundsPerGame}`;t.innerHTML=`<div class="res-head"><div class="h outlined">STANDINGS</div><div class="sh">After round ${r.roundNumber} of ${r.roundsPerGame}</div></div>
      <div class="standings">${vv(r)}</div>
      <div class="chart panel white"><div class="ct">The money, round by round</div>${_v(r)}</div>
      <div class="upnext panel yellow">${a}<span class="cd"></span></div>`}i(n);let s=[...n.players].sort((r,o)=>o.bankroll-r.bankroll);if(s.length>=2){let r=s[0].bankroll-s[1].bankroll;Ue(r===0?"It's dead level at the top!":`${s[0].name} leads by ${Zn(r)}.`,"jeff",2)}else s[0]&&Ue(`${s[0].name} is on ${Zn(s[0].bankroll)}.`,"jeff",2);return e=setInterval(()=>{let r=t.querySelector(".cd");if(!(!r||!ye))if(ye.deadline&&ye.phase==="SCOREBOARD"){let o=Math.max(0,Math.ceil((ye.deadline-sh.serverNow())/1e3));r.textContent=` \u2014 starting in ${o}\u2026`}else r.textContent=ye.players.length?" \u2014 tap READY on your phones":""},300),{update:i,destroy:()=>clearInterval(e)}}function bv(n){let t=[...n.players].sort((o,a)=>a.bankroll-o.bankroll),e=t[0],i=t.length>1&&t[1].bankroll===e?.bankroll,s=Be(`<div class="finale"><div class="rays"></div>
    <div class="champ">${e?`<div class="h outlined">${i?"IT'S A DRAW!":"CHAMPION!"}</div>
      <div class="who"><div class="crown">\u{1F451}</div>${An(e.avatar,220)}<div class="nm outlined white">${Ft(i?t.filter(o=>o.bankroll===e.bankroll).map(o=>o.name).join(" & "):e.name)}</div><div class="bk num">${sn(e.bankroll)}</div></div>`:'<div class="h outlined">GAME OVER</div>'}
    </div>
    <div class="others">${t.slice(1).map((o,a)=>`<div class="srow panel slant" style="background:${Ft(o.avatar.colour)}"><div class="unslant" style="display:flex;align-items:center;gap:20px">${os(a+2)}${An(o.avatar,70)}<div class="nm">${Ft(o.name)}</div><div class="bk num">${sn(o.bankroll)}</div></div></div>`).join("")}</div>
  </div>`);gi.appendChild(s),ee.play("drumroll",{dur:1.6}),setTimeout(()=>{ee.play("fanfare"),ee.play("crowd",{dur:5,peak:.45}),Qs(document.body,{count:200,duration:4500})},Xn(1700));let r=setInterval(()=>Qs(document.body,{count:60,duration:3500}),Xn(6e3));return e&&Ue(i?"We have a dead heat! Nobody wins, which is very British.":`Ladies and gentlemen, your MARKRUN champion: ${e.name}, with ${Zn(e.bankroll)}!`,"jeff",3),setTimeout(()=>Ue("Press space, or tap ready on your phones, to go again.","pam",1),Xn(7e3)),{destroy:()=>clearInterval(r)}}
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
