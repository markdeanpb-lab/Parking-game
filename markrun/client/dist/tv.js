var Kf=Object.defineProperty;var jf=(n,t)=>{for(var e in t)Kf(n,e,{get:t[e],enumerable:!0})};function gh({role:n,getToken:t,onWelcome:e,onState:i,onMessage:s,onStatus:r}){let o=null,a=0,l=null,h=!1,d=0,y=null,u=0,c=()=>`${location.protocol==="https:"?"wss":"ws"}://${location.host}/ws`;function f(v){r?.(v)}function M(){if(clearTimeout(l),o&&(o.readyState===0||o.readyState===1))return;f(a?"reconnecting":"connecting");try{o=new WebSocket(c())}catch{g();return}let v=o;v.onopen=()=>{a=0,f("open"),u=Date.now(),p({t:"hello",role:n,token:t?.()||void 0}),clearInterval(y),y=setInterval(()=>{if(p({t:"ping",at:Date.now()}),Date.now()-u>25e3&&v.readyState===1)try{v.close()}catch{}},8e3)},v.onmessage=_=>{u=Date.now();let L;try{L=JSON.parse(_.data)}catch{return}if(L.t==="pong"){L.serverNow&&(d=L.serverNow+(Date.now()-L.at)/2-Date.now());return}L.t==="welcome"?e?.(L):L.t==="state"?(L.state?.serverNow&&(d=L.state.serverNow-Date.now()),i?.(L.state)):s?.(L)},v.onclose=()=>{clearInterval(y),v===o&&(f("closed"),h||g())},v.onerror=()=>{try{v.close()}catch{}}}function g(){clearTimeout(l);let v=Math.min(8e3,400*2**a)*(.75+Math.random()*.5);a++,l=setTimeout(M,v)}function p(v){return o&&o.readyState===1?(o.send(JSON.stringify(v)),!0):!1}let S=()=>{document.visibilityState==="visible"&&(!o||o.readyState>1?(a=0,M()):p({t:"ping",at:Date.now()}))};return document.addEventListener("visibilitychange",S),window.addEventListener("online",()=>{a=0,M()}),window.addEventListener("pageshow",S),window.addEventListener("focus",S),M(),{send:p,reconnect(){a=0;try{o?.close()}catch{}M()},close(){h=!0,o?.close()},serverNow:()=>Date.now()+d,get open(){return o?.readyState===1}}}function yh(){let n=null,t=null,e=null,i=null,s=null,r=null,o=.8,a=!1,l=!0,h=null;function d(){if(n)return n;let x=window.AudioContext||window.webkitAudioContext;if(!x)return null;n=new x,r=n.createDynamicsCompressor(),r.threshold.value=-14,r.ratio.value=4,r.attack.value=.005,r.release.value=.2,t=n.createGain(),t.gain.value=a?0:o,e=n.createGain(),e.gain.value=.9,i=n.createGain(),i.gain.value=.32,e.connect(r),i.connect(r),r.connect(t),t.connect(n.destination),s=n.createBuffer(1,n.sampleRate*2,n.sampleRate);let m=s.getChannelData(0);for(let b=0;b<m.length;b++)m[b]=Math.random()*2-1;return n}function y(){let x=d();return x&&x.state==="suspended"&&x.resume(),!!x}let u=()=>n&&n.state==="running";function c(x,m,b,E,T,k){x.gain.cancelScheduledValues(m),x.gain.setValueAtTime(1e-4,m),x.gain.exponentialRampToValueAtTime(E,m+b),x.gain.setValueAtTime(E,m+b+T),x.gain.exponentialRampToValueAtTime(1e-4,m+b+T+k)}function f(x,m,b,E,{gain:T=.2,a:k=.01,rel:H=.2,dest:P=e,detune:z=0,filter:W=null,pan:q=0}={}){let lt=n.createOscillator();lt.type=x,lt.frequency.setValueAtTime(m,b),lt.detune.value=z;let D=n.createGain(),Et=lt;if(W){let $=n.createBiquadFilter();$.type=W.type||"lowpass",$.frequency.value=W.freq,$.Q.value=W.q||.7,Et.connect($),Et=$}Et.connect(D);let K=D;if(q&&n.createStereoPanner){let $=n.createStereoPanner();$.pan.value=q,D.connect($),K=$}return K.connect(P),c(D,b,k,T,Math.max(0,E-k),H),lt.start(b),lt.stop(b+E+H+.05),lt}function M(x,m,{gain:b=.2,a:E=.01,rel:T=.2,type:k="bandpass",freq:H=1e3,q:P=1,dest:z=e}={}){let W=n.createBufferSource();W.buffer=s,W.loop=!0;let q=n.createBiquadFilter();q.type=k,q.frequency.setValueAtTime(H,x),q.Q.value=P;let lt=n.createGain();return W.connect(q),q.connect(lt),lt.connect(z),c(lt,x,E,b,Math.max(0,m-E),T),W.start(x,Math.random()),W.stop(x+m+T+.05),{s:W,f:q,g:lt}}let g=x=>440*2**((x-69)/12),p={horn(x){for(let[m,b]of[[233,0],[293.7,6],[349,-5]])f("sawtooth",m*.92,x,1.1,{gain:.13,a:.03,rel:.25,filter:{freq:2200},detune:b}).frequency.exponentialRampToValueAtTime(m,x+.12);f("square",116.5,x,1.1,{gain:.05,a:.03,rel:.25,filter:{freq:800}})},crowd(x,{dur:m=3.5,peak:b=.32}={}){for(let[E,T,k]of[[700,.8,1],[1800,1.2,.7],[3200,1.5,.35]]){let H=M(x,m*.4,{gain:b*k,a:m*.45,rel:m*.55,freq:E,q:T}),P=n.createOscillator();P.frequency.value=5+Math.random()*4;let z=n.createGain();z.gain.value=b*k*.35,P.connect(z),z.connect(H.g.gain),P.start(x),P.stop(x+m+.2)}for(let E=0;E<4;E++){let T=x+.4+Math.random()*m*.5;f("triangle",500+Math.random()*300,T,.35,{gain:.025,a:.08,rel:.25,filter:{freq:1600},pan:Math.random()*1.6-.8}).frequency.exponentialRampToValueAtTime(800+Math.random()*400,T+.3)}},whoosh(x){let m=M(x,.45,{gain:.35,a:.12,rel:.25,freq:400,q:2.5});m.f.frequency.exponentialRampToValueAtTime(3500,x+.3),m.f.frequency.exponentialRampToValueAtTime(700,x+.7)},bell(x){for(let m of[x,x+.42])[[1,.22,1.6],[2.76,.09,.9],[5.4,.05,.5],[8.93,.03,.3]].forEach(([b,E,T])=>f("sine",830*b,m,.01,{gain:E,a:.003,rel:T}))},fanfare(x){let m=[[67,0,.14],[72,.15,.14],[76,.3,.14],[79,.45,.32],[76,.8,.14],[79,.95,.9]];for(let[b,E,T]of m){for(let k of[-7,7])f("sawtooth",g(b),x+E,T,{gain:.07,a:.02,rel:.18,filter:{freq:2600},detune:k});f("square",g(b-12),x+E,T,{gain:.03,a:.02,rel:.15,filter:{freq:1200}})}for(let b of[60,64,67,72])f("triangle",g(b),x+.95,.9,{gain:.06,a:.03,rel:.6});p.cymbal(x+.95,.12)},cymbal(x,m=.15){M(x,.05,{gain:m,a:.002,rel:1.4,type:"highpass",freq:6e3,q:.5})},kaching(x){M(x,.03,{gain:.3,a:.002,rel:.05,type:"highpass",freq:3e3}),M(x+.05,.02,{gain:.25,a:.002,rel:.06,type:"bandpass",freq:1800,q:3});for(let[m,b]of[[2093,.14],[2637,.1],[3136,.08],[4186,.05]])f("sine",m,x+.12,.02,{gain:b,a:.003,rel:.9});for(let m=0;m<6;m++)f("sine",3e3+Math.random()*2e3,x+.2+m*.05,.01,{gain:.03,a:.002,rel:.12})},sadtrombone(x){let m=[[55,0,.42],[54,.48,.42],[53,.96,.42],[52,1.44,1.3]];for(let[b,E,T]of m){let k=f("sawtooth",g(b),x+E,T,{gain:.11,a:.04,rel:.2,filter:{freq:1100,q:2}});if(E>1){let H=n.createOscillator();H.frequency.value=6;let P=n.createGain();P.gain.value=6,H.connect(P),P.connect(k.frequency),H.start(x+E),H.stop(x+E+T+.3),k.frequency.setValueAtTime(g(b),x+E),k.frequency.linearRampToValueAtTime(g(b-1),x+E+T)}}},drumroll(x,{dur:m=2.2}={}){let b=Math.floor(m*16);for(let E=0;E<b;E++)M(x+E/16,.02,{gain:.04+.16*(E/b),a:.002,rel:.06,freq:1800,q:.8});p.cymbal(x+m,.2),f("sine",70,x+m,.05,{gain:.5,a:.003,rel:.4})},sting(x){for(let m of[48,55,60,63])for(let b of[-8,8])f("sawtooth",g(m),x,.16,{gain:.05,a:.01,rel:.5,filter:{freq:1800},detune:b});p.cymbal(x,.1)},pop(x){f("sine",520,x,.02,{gain:.18,a:.003,rel:.12}).frequency.exponentialRampToValueAtTime(1100,x+.08)},tick(x){f("square",1600,x,.005,{gain:.04,a:.001,rel:.03,filter:{freq:3e3}})},lock(x){f("sine",140,x,.04,{gain:.4,a:.002,rel:.2}),M(x,.02,{gain:.2,a:.002,rel:.05,freq:2500,q:1}),f("triangle",660,x+.06,.05,{gain:.08,a:.005,rel:.2}),f("triangle",990,x+.14,.08,{gain:.08,a:.005,rel:.3})},join(x){[72,76,79,84].forEach((m,b)=>f("triangle",g(m),x+b*.07,.06,{gain:.1,a:.005,rel:.2}))},beep(x){f("square",880,x,.08,{gain:.06,a:.005,rel:.05,filter:{freq:2500}})},go(x){f("square",1320,x,.3,{gain:.07,a:.005,rel:.1,filter:{freq:3e3}})},stamp(x){f("sine",90,x,.05,{gain:.5,a:.002,rel:.25}),M(x,.04,{gain:.25,a:.002,rel:.1,type:"lowpass",freq:1200})},reveal(x){[64,67,71,74].forEach((m,b)=>f("triangle",g(m+12),x+b*.05,.05,{gain:.06,a:.004,rel:.25}))},boo(x){f("sawtooth",160,x,.7,{gain:.06,a:.1,rel:.3,filter:{freq:600}}).frequency.linearRampToValueAtTime(110,x+.8)}};function S(x,m){if(!u()||a)return;let b=p[x];if(b)try{b(n.currentTime+.02,m)}catch(E){console.warn("sfx",x,E)}}let v={lobby:{bpm:92,chords:[[60,64,67,71],[57,60,64,67],[53,57,60,64],[55,59,62,67]],arp:[0,2,1,3,2,1,3,2],swing:.08,shaker:!0,block:!1},betting:{bpm:108,chords:[[57,60,64],[53,57,60],[60,64,67],[55,59,62]],arp:[0,1,2,1,0,2,1,2],swing:.05,shaker:!0,block:!0},results:{bpm:100,chords:[[60,64,67],[65,69,72],[55,59,62],[60,64,67]],arp:[0,1,2,3,2,1,0,1],swing:.06,shaker:!1,block:!1}};function _(){if(!h)return;let x=v[h.kind],m=60/x.bpm/2;for(;h.nextT<n.currentTime+.35;){let b=h.step,E=Math.floor(b/8)%x.chords.length,T=x.chords[E],k=h.nextT+(b%2?x.swing*m:0),H=b%8;if(H===0){for(let z of T.slice(0,3))for(let W of[-6,6])f("triangle",g(z),k,m*7.5,{gain:.022,a:.35,rel:.6,dest:i,detune:W,filter:{freq:1300}});f("sine",g(T[0]-24),k,m*2.5,{gain:.14,a:.01,rel:.25,dest:i})}H===4&&f("sine",g(T[0]-24+7),k,m*2,{gain:.1,a:.01,rel:.25,dest:i});let P=T[x.arp[H]%T.length]+12;b%16<15&&f("sine",g(P),k,.02,{gain:.045,a:.004,rel:m*1.6,dest:i}),f("triangle",g(P+12),k,.01,{gain:.01,a:.002,rel:.15,dest:i}),x.shaker&&b%2===1&&M(k,.01,{gain:.018,a:.003,rel:.05,type:"highpass",freq:7e3,dest:i}),x.block&&(H===2||H===6)&&f("sine",1250,k,.004,{gain:.04,a:.001,rel:.05,dest:i}),h.step++,h.nextT+=m}}function L(x="lobby"){if(!d()||h?.kind===x)return;if(w(.6),!l){h=null,A=x;return}A=x;let m=n.createGain();m.gain.value=1e-4,m.connect(r);let b=i;i=m,m.gain.exponentialRampToValueAtTime(.32,n.currentTime+1.5),h={kind:x,nextT:n.currentTime+.1,step:0,bus:m},h.timer=setInterval(()=>{u()&&_()},90)}let A=null;function w(x=.8){if(!h)return;clearInterval(h.timer);let m=h.bus;n&&m&&(m.gain.cancelScheduledValues(n.currentTime),m.gain.setValueAtTime(m.gain.value,n.currentTime),m.gain.exponentialRampToValueAtTime(1e-4,n.currentTime+x),setTimeout(()=>m.disconnect(),x*1e3+500)),h=null}function R(x){!h||!n||h.bus.gain.setTargetAtTime(x?.14:.32,n.currentTime,.25)}return{unlock:y,play:S,ready:u,get context(){return n},setVolume(x){o=Math.max(0,Math.min(1,x)),t&&t.gain.setTargetAtTime(a?0:o,n.currentTime,.05)},setMuted(x){a=!!x,t&&t.gain.setTargetAtTime(a?0:o,n.currentTime,.05)},get muted(){return a},setMusicEnabled(x){if(l=!!x,l)A&&!h&&L(A);else{let m=h?.kind||A;w(),A=m}},startMusic:L,stopMusic:w,duck:R,get musicKind(){return h?.kind||null}}}var xe=(n,t=document)=>t.querySelector(n),oi=(n,t=document)=>[...t.querySelectorAll(n)];function zt(n){return String(n??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}function qe(n){let t=document.createElement("template");return t.innerHTML=n.trim(),t.content.firstElementChild}var xh="pp";function hn(n){let t=Math.round(Number(n)||0);return`${t<0?"\u2212":""}${Math.abs(t).toLocaleString("en-GB")}${xh}`}function or(n){let t=Math.round(Number(n)||0);return`${t>0?"+":t<0?"\u2212":"\xB1"}${Math.abs(t).toLocaleString("en-GB")}${xh}`}function Ei(n){let t=Math.abs(Math.round(Number(n)||0));return`${t.toLocaleString("en-GB")} Parkpound${t===1?"":"s"}`}var fs=n=>n?.shortName||n?.nickname||"";function Qf(n){let t=n%100;return t>=11&&t<=13?"th":{1:"st",2:"nd",3:"rd"}[n%10]||"th"}function Vi(n,t=""){return`<span class="ordinal p${n} ${t}">${n}<sup>${Qf(n)}</sup></span>`}function pn(n,t=64,e=""){let i=n||{emoji:"\u{1F642}",colour:"#2f8cff"};return`<span class="avatar ${e}" style="width:${t}px;height:${t}px;font-size:${Math.round(t*.58)}px;background:${zt(i.colour)}">${zt(i.emoji)}</span>`}function vh(n){return n=Math.round(Number(n)||0),`${Math.floor(n/60)}:${String(n%60).padStart(2,"0")}`}function Fa(n,t,e,i=1200,s=o=>String(Math.round(o)),r){let o=performance.now(),a,l=Math.round(t),h=d=>{let y=Math.min(1,(d-o)/i),u=1-(1-y)**3,c=t+(e-t)*u;n.textContent=s(c);let f=Math.round(c);r&&f!==l&&(l=f,r(f)),y<1&&(a=requestAnimationFrame(h))};return a=requestAnimationFrame(h),()=>cancelAnimationFrame(a)}function cn(n,t){return n?.runners?.find(e=>e.id===t)}function to(n,t){if(!n||!t)return"";if(t.type==="win")return`${cn(n,t.runnerId)?.nickname||t.runnerId} to WIN`;if(t.type==="inplay")return`${cn(n,t.runnerId)?.nickname||t.runnerId} to WIN (halfway)`;if(t.type==="prop")return`${n.props?.find(o=>o.id===t.propId)?.text||"Side bet"} \u2014 ${String(t.pick).toUpperCase()}`;let e=n.matchups?.find(r=>r.id===t.matchupId);if(!e)return"Head-to-head";let i=fs(cn(n,t.pick))||t.pick,s=fs(cn(n,t.pick===e.a?e.b:e.a));return`${i} to beat ${s}`}function _h(n,t){if(t.type==="win")return cn(n,t.runnerId)?.odds?.win??0;if(t.type==="inplay")return Number(t.odds)||0;if(t.type==="prop"){let i=n?.props?.find(s=>s.id===t.propId);return(t.pick==="yes"?i?.odds?.yes:i?.odds?.no)??0}let e=n?.matchups?.find(i=>i.id===t.matchupId);return e?t.pick===e.a?e.odds.a:e.odds.b:0}function ar(n=document.body,{count:t=120,colours:e=["#ffd23f","#ff4d5a","#2ec27e","#2f8cff","#ff6fb5","#7b4dff"],duration:i=3200,zIndex:s=9e3,contained:r=!1}={}){let o=document.createElement("div");o.style.cssText=`position:${r?"absolute":"fixed"};inset:0;pointer-events:none;overflow:hidden;z-index:${s}`;for(let a=0;a<t;a++){let l=document.createElement("i"),h=8+Math.random()*12,d=Math.random()*100,y=(Math.random()-.5)*30,u=Math.random()*720-360,c=Math.random()*400,f=i*(.6+Math.random()*.5);l.style.cssText=`position:absolute;left:${d}%;top:-30px;width:${h}px;height:${h*(.4+Math.random()*.6)}px;background:${e[a%e.length]};border:2px solid #14183c;border-radius:${Math.random()<.3?"50%":"2px"}`,l.animate([{transform:"translate(0,0) rotate(0deg)",opacity:1},{transform:`translate(${y}vw, 110vh) rotate(${u}deg)`,opacity:1}],{duration:f,delay:c,easing:"cubic-bezier(.2,.6,.4,1)",fill:"forwards"}),o.appendChild(l)}n.appendChild(o),setTimeout(()=>o.remove(),i*1.3+500)}function eo(n){return n?.type==="prop"?null:n?.runnerId||n?.pick||null}function Mh(n){return{win:"WIN",h2h:"HEAD-TO-HEAD",prop:"SIDE BET",inplay:"HALFWAY"}[n?.type]||""}function za(n){let t=String(n?.text||"");if(n?.style==="tipster"){let e=t.indexOf('"');if(e>0){let i=t.slice(0,e).trim(),s=t.slice(e).replace(/^"|"$/g,"").replace(/"/g,""),r=n.voice||(/\bpam\b/i.test(i)?"pam":/\bjeff\b/i.test(i)?"jeff":"");return`<span class="cfact">${zt(i)}</span> <span class="cquote ${r}">${r?`<b>${r==="pam"?"PAM":"JEFF"}</b>`:""}\u201C${zt(s)}\u201D</span>`}}return zt(t)}var qt="#14183c";function tu(n){let t=2166136261;for(let e of String(n))t^=e.charCodeAt(0),t=Math.imul(t,16777619);return t>>>0}var bh=["#2b1a10","#5a3418","#8a5a2b","#d8a24a","#1b1b1b","#b8432a","#9aa0a8"];function us(n,t){let e=parseInt(String(n||"#888888").replace("#","").padEnd(6,"8").slice(0,6),16),i=e>>16&255,s=e>>8&255,r=e&255,o=t<0?0:255,a=Math.abs(t);return i=Math.round((o-i)*a+i),s=Math.round((o-s)*a+s),r=Math.round((o-r)*a+r),`#${(1<<24|i<<16|s<<8|r).toString(16).slice(1)}`}function Sh(n,{size:t=120,idSuffix:e=""}={}){let i=n?.look||{},s=n?.colour?.primary||"#ff4d5a",r=n?.colour?.secondary||"#ffffff",o=i.skin||"#f1c6a5",a=tu(n?.id+(n?.nickname||"")),l=i.hairColour||i.hairColor||bh[a%bh.length],h=i.build||"compact",d={stocky:50,tall:40,lanky:34,compact:42}[h]??42,y={tall:8,lanky:10,stocky:2,compact:4}[h]??4,u={compact:31,stocky:30,lanky:28,tall:29}[h]??30,c=60,f=50-y/2,M=n?.lane??"",g=`pc${a.toString(36)}${e}`,p=[];p.push(`<defs><clipPath id="${g}"><circle cx="60" cy="60" r="56"/></clipPath></defs>`),p.push(`<circle cx="60" cy="60" r="56" fill="${us(s,.55)}"/>`),p.push(`<g clip-path="url(#${g})">`),p.push(`<path d="M0 92 L120 70 L120 120 L0 120Z" fill="${us(s,.35)}" opacity=".6"/>`);let S=f+u+y-4;p.push(`<path d="M${c-d} 124 Q${c-d} ${S+6} ${c-14} ${S} L${c+14} ${S} Q${c+d} ${S+6} ${c+d} 124Z" fill="${s}" stroke="${qt}" stroke-width="5" stroke-linejoin="round"/>`),p.push(`<path d="M${c-18} ${S+1} L${c-2} ${S+1} L${c+26} 124 L${c+8} 124Z" fill="${r}" stroke="${qt}" stroke-width="3" stroke-linejoin="round"/>`),p.push(`<rect x="${c-30}" y="${S+14}" width="22" height="17" rx="3" fill="#fff" stroke="${qt}" stroke-width="3" transform="rotate(-6 ${c-19} ${S+22})"/>`),p.push(`<text x="${c-19}" y="${S+28}" font-family="Lilita One, Arial Black, sans-serif" font-size="14" text-anchor="middle" fill="${qt}" transform="rotate(-6 ${c-19} ${S+22})">${M}</text>`),p.push(`<rect x="${c-9}" y="${f+u-8}" width="18" height="${y+12}" fill="${o}" stroke="${qt}" stroke-width="5"/>`),i.accessory==="medal"&&(p.push(`<path d="M${c-12} ${S} L${c} ${S+22} L${c+12} ${S}" fill="none" stroke="${r}" stroke-width="6"/>`),p.push(`<circle cx="${c}" cy="${S+26}" r="9" fill="#ffcf3a" stroke="${qt}" stroke-width="4"/>`));let v=i.hair||"short";["long","ponytail","bob"].includes(v)&&p.push(`<path d="M${c-u-4} ${f} Q${c-u-6} ${f+u+14} ${c-u+10} ${f+u+10} L${c+u-10} ${f+u+10} Q${c+u+6} ${f+u+14} ${c+u+4} ${f}Z" fill="${l}" stroke="${qt}" stroke-width="5" stroke-linejoin="round"/>`),v==="ponytail"&&p.push(`<ellipse cx="${c+u+6}" cy="${f-6}" rx="9" ry="16" fill="${l}" stroke="${qt}" stroke-width="5" transform="rotate(25 ${c+u+6} ${f-6})"/>`),p.push(`<circle cx="${c-u+1}" cy="${f+4}" r="7" fill="${o}" stroke="${qt}" stroke-width="5"/>`),p.push(`<circle cx="${c+u-1}" cy="${f+4}" r="7" fill="${o}" stroke="${qt}" stroke-width="5"/>`),p.push(`<ellipse cx="${c}" cy="${f}" rx="${u}" ry="${u+2}" fill="${o}" stroke="${qt}" stroke-width="5"/>`),p.push(`<ellipse cx="${c-16}" cy="${f+11}" rx="6" ry="4" fill="#ff8f8f" opacity=".45"/><ellipse cx="${c+16}" cy="${f+11}" rx="6" ry="4" fill="#ff8f8f" opacity=".45"/>`);let _=f-u-2,L={short:`<path d="M${c-u+2} ${f-6} Q${c-u} ${_-4} ${c} ${_-2} Q${c+u} ${_-4} ${c+u-2} ${f-6} Q${c+8} ${f-18} ${c-u+2} ${f-6}Z"/>`,buzz:`<path d="M${c-u+3} ${f-8} Q${c} ${_-6} ${c+u-3} ${f-8} Q${c} ${f-20} ${c-u+3} ${f-8}Z"/>`,curly:`<path d="M${c-u} ${f-2} q-6 -12 4 -18 q0 -12 14 -12 q6 -10 18 -4 q12 -4 16 8 q12 4 8 18 q-14 -8 -30 -6 q-16 0 -30 14z"/>`,afro:`<circle cx="${c}" cy="${f-14}" r="${u+8}"/>`,mohawk:`<path d="M${c-6} ${f-14} L${c-8} ${_-16} L${c+8} ${_-16} L${c+6} ${f-14}Z"/>`,quiff:`<path d="M${c-u+2} ${f-6} Q${c-u} ${_} ${c-4} ${_-2} Q${c+20} ${_-18} ${c+u+4} ${_+2} Q${c+u} ${f-8} ${c+u-2} ${f-6} Q${c+8} ${f-18} ${c-u+2} ${f-6}Z"/>`,bun:`<g><circle cx="${c}" cy="${_-6}" r="10"/><path d="M${c-u+2} ${f-6} Q${c-u} ${_-2} ${c} ${_} Q${c+u} ${_-2} ${c+u-2} ${f-6} Q${c} ${f-16} ${c-u+2} ${f-6}Z"/></g>`,long:`<path d="M${c-u+1} ${f+2} Q${c-u} ${_-4} ${c} ${_-2} Q${c+u} ${_-4} ${c+u-1} ${f+2} Q${c+10} ${f-16} ${c-2} ${f-12} Q${c-14} ${f-16} ${c-u+1} ${f+2}Z"/>`,bald:""};L.ponytail=L.long,L.bob=L.long,L.spiky=`<path d="M${c-u+2} ${f-6} L${c-u+2} ${_+2} L${c-14} ${_-12} L${c-8} ${_-2} L${c} ${_-16} L${c+6} ${_-2} L${c+15} ${_-12} L${c+u-2} ${_+2} L${c+u-2} ${f-6} Q${c} ${f-18} ${c-u+2} ${f-6}Z"/>`,L.mullet=`<g><path d="M${c+u-6} ${f} Q${c+u+10} ${f+22} ${c+u-2} ${f+34} L${c+u-14} ${f+20}Z"/><path d="M${c-u+6} ${f} Q${c-u-10} ${f+22} ${c-u+2} ${f+34} L${c-u+14} ${f+20}Z"/>${L.short}</g>`,L.swept=`<path d="M${c-u+2} ${f-4} Q${c-u-4} ${_-6} ${c+6} ${_-6} Q${c+u+8} ${_} ${c+u-1} ${f-2} Q${c+4} ${f-22} ${c-u+2} ${f-4}Z"/>`;let A=L[v]??L.short;A&&p.push(`<g fill="${l}" stroke="${qt}" stroke-width="5" stroke-linejoin="round">${A}</g>`);let w=i.face||"grin",R=f+1,x=(H,P)=>P?`<path d="M${H-5} ${R} Q${H} ${R+4} ${H+5} ${R}" fill="none" stroke="${qt}" stroke-width="3.5" stroke-linecap="round"/>`:`<ellipse cx="${H}" cy="${R}" rx="4.2" ry="5.6" fill="${qt}"/><circle cx="${H+1.4}" cy="${R-2}" r="1.5" fill="#fff"/>`,m="",b="",E=x(c-11)+x(c+11);switch(w){case"determined":case"focused":case"fierce":m=`<path d="M${c-18} ${R-12} L${c-5} ${R-7} M${c+18} ${R-12} L${c+5} ${R-7}" stroke="${qt}" stroke-width="4" stroke-linecap="round"/>`,b=`<path d="M${c-9} ${f+17} L${c+9} ${f+15}" stroke="${qt}" stroke-width="4" stroke-linecap="round"/>`;break;case"smug":case"cheeky":E=`<path d="M${c-16} ${R} L${c-6} ${R}" stroke="${qt}" stroke-width="4" stroke-linecap="round"/>`+x(c+11),m=`<path d="M${c+5} ${R-10} Q${c+11} ${R-15} ${c+18} ${R-10}" fill="none" stroke="${qt}" stroke-width="3.5" stroke-linecap="round"/>`,b=`<path d="M${c-8} ${f+15} Q${c+4} ${f+19} ${c+11} ${f+11}" fill="none" stroke="${qt}" stroke-width="4" stroke-linecap="round"/>`;break;case"worried":case"nervous":case"anxious":m=`<path d="M${c-17} ${R-8} L${c-6} ${R-13} M${c+17} ${R-8} L${c+6} ${R-13}" stroke="${qt}" stroke-width="3.5" stroke-linecap="round"/>`,b=`<path d="M${c-10} ${f+17} q5 -5 10 0 q5 5 10 0" fill="none" stroke="${qt}" stroke-width="3.5" stroke-linecap="round"/>`;break;case"sleepy":case"tired":case"dozy":E=x(c-11,!0)+x(c+11,!0),b=`<ellipse cx="${c+2}" cy="${f+17}" rx="5" ry="4" fill="${qt}"/>`;break;case"wink":E=x(c-11,!0)+x(c+11),b=`<path d="M${c-11} ${f+12} Q${c} ${f+24} ${c+11} ${f+12}Z" fill="#fff" stroke="${qt}" stroke-width="3.5" stroke-linejoin="round"/>`;break;case"gritted":m=`<path d="M${c-18} ${R-11} L${c-5} ${R-7} M${c+18} ${R-11} L${c+5} ${R-7}" stroke="${qt}" stroke-width="4" stroke-linecap="round"/>`,b=`<rect x="${c-12}" y="${f+11}" width="24" height="10" rx="3" fill="#fff" stroke="${qt}" stroke-width="3.5"/><path d="M${c-4} ${f+11} v10 M${c+4} ${f+11} v10 M${c-12} ${f+16} h24" stroke="${qt}" stroke-width="2"/>`;break;case"tongue-out":E=x(c-11,!0)+x(c+11),b=`<path d="M${c-11} ${f+12} Q${c} ${f+20} ${c+11} ${f+12}" fill="none" stroke="${qt}" stroke-width="3.5" stroke-linecap="round"/><path d="M${c-2} ${f+15} q4 14 10 0z" fill="#ff6b7a" stroke="${qt}" stroke-width="3"/>`;break;case"wide-eyed":E=`<circle cx="${c-11}" cy="${R}" r="7.5" fill="#fff" stroke="${qt}" stroke-width="3"/><circle cx="${c-11}" cy="${R}" r="3.2" fill="${qt}"/><circle cx="${c+11}" cy="${R}" r="7.5" fill="#fff" stroke="${qt}" stroke-width="3"/><circle cx="${c+11}" cy="${R}" r="3.2" fill="${qt}"/>`,b=`<ellipse cx="${c}" cy="${f+17}" rx="5" ry="6" fill="${qt}"/>`;break;case"shocked":case"surprised":b=`<ellipse cx="${c}" cy="${f+17}" rx="6" ry="8" fill="${qt}"/>`,m=`<path d="M${c-17} ${R-13} Q${c-11} ${R-17} ${c-5} ${R-13} M${c+17} ${R-13} Q${c+11} ${R-17} ${c+5} ${R-13}" fill="none" stroke="${qt}" stroke-width="3.5" stroke-linecap="round"/>`;break;default:b=`<path d="M${c-13} ${f+11} Q${c} ${f+27} ${c+13} ${f+11}Z" fill="#fff" stroke="${qt}" stroke-width="3.5" stroke-linejoin="round"/><path d="M${c-6} ${f+19} Q${c} ${f+23} ${c+6} ${f+19}" fill="#ff6b7a"/>`}p.push(E,m,b),p.push(`<path d="M${c-2} ${f+4} Q${c+3} ${f+8} ${c-1} ${f+10}" fill="none" stroke="${us(o,-.35)}" stroke-width="3" stroke-linecap="round"/>`);let T=i.accessory;T==="sunglasses"||T==="shades"?p.push(`<g stroke="${qt}" stroke-width="3.5"><rect x="${c-21}" y="${R-7}" width="17" height="12" rx="4" fill="${qt}"/><rect x="${c+4}" y="${R-7}" width="17" height="12" rx="4" fill="${qt}"/><path d="M${c-4} ${R-3} L${c+4} ${R-3}"/></g><path d="M${c-18} ${R-4} l5 0 M${c+7} ${R-4} l5 0" stroke="#fff" stroke-width="2.5" stroke-linecap="round"/>`):T==="glasses"||T==="specs"?p.push(`<g stroke="${qt}" stroke-width="3.5" fill="rgba(255,255,255,.25)"><circle cx="${c-11}" cy="${R}" r="8"/><circle cx="${c+11}" cy="${R}" r="8"/><path d="M${c-3} ${R} L${c+3} ${R}"/></g>`):T==="moustache"||T==="mustache"||T==="tache"?p.push(`<path d="M${c} ${f+12} q-8 -6 -16 0 q6 6 16 0 q8 -6 16 0 q-6 6 -16 0z" fill="${l}" stroke="${qt}" stroke-width="3" stroke-linejoin="round"/>`):T==="headphones"||T==="earbuds"?p.push(`<path d="M${c-u-2} ${f+2} Q${c} ${_-22} ${c+u+2} ${f+2}" fill="none" stroke="${qt}" stroke-width="7"/><rect x="${c-u-8}" y="${f-6}" width="12" height="20" rx="5" fill="${r}" stroke="${qt}" stroke-width="4"/><rect x="${c+u-4}" y="${f-6}" width="12" height="20" rx="5" fill="${r}" stroke="${qt}" stroke-width="4"/>`):T==="beard"?p.push(`<path d="M${c-u+4} ${f+4} Q${c-u+6} ${f+u+6} ${c} ${f+u+8} Q${c+u-6} ${f+u+6} ${c+u-4} ${f+4} Q${c+14} ${f+18} ${c} ${f+22} Q${c-14} ${f+18} ${c-u+4} ${f+4}Z" fill="${l}" stroke="${qt}" stroke-width="3.5" stroke-linejoin="round"/>`):T==="scarf"?p.push(`<path d="M${c-20} ${S-4} Q${c} ${S+8} ${c+20} ${S-4} L${c+22} ${S+6} Q${c} ${S+18} ${c-22} ${S+6}Z" fill="${r}" stroke="${qt}" stroke-width="3.5"/><rect x="${c+8}" y="${S+6}" width="9" height="22" rx="2" fill="${r}" stroke="${qt}" stroke-width="3"/>`):T==="cape"?p.push(`<path d="M${c-22} ${S} L${c-46} 124 M${c+22} ${S} L${c+46} 124" stroke="${r}" stroke-width="8" stroke-linecap="round"/>`):T==="wristbands"||T==="bumbag"?p.push(`<rect x="${c-26}" y="${S+30}" width="${T==="bumbag"?30:14}" height="${T==="bumbag"?14:10}" rx="5" fill="${r}" stroke="${qt}" stroke-width="3.5"/>`):T==="whistle"&&p.push(`<path d="M${c-10} ${S} Q${c} ${S+18} ${c+10} ${S}" fill="none" stroke="${r}" stroke-width="3"/><rect x="${c-6}" y="${S+12}" width="14" height="8" rx="3" fill="#cfd8e8" stroke="${qt}" stroke-width="3"/>`);let k=i.hat;return k==="backwards-cap"?(p.push(`<path d="M${c-u+1} ${f-8} Q${c-u+2} ${_-10} ${c} ${_-10} Q${c+u-2} ${_-10} ${c+u-1} ${f-8}Z" fill="${s}" stroke="${qt}" stroke-width="5" stroke-linejoin="round"/>`),p.push(`<path d="M${c-u+4} ${f-12} Q${c-u-14} ${f-14} ${c-u-18} ${f-4} L${c-u+2} ${f-4}Z" fill="${us(s,-.2)}" stroke="${qt}" stroke-width="5" stroke-linejoin="round"/>`)):k==="cap"||k==="baseball cap"||k==="trucker"?(p.push(`<path d="M${c-u+1} ${f-8} Q${c-u+2} ${_-10} ${c} ${_-10} Q${c+u-2} ${_-10} ${c+u-1} ${f-8}Z" fill="${s}" stroke="${qt}" stroke-width="5" stroke-linejoin="round"/>`),p.push(`<path d="M${c-6} ${f-10} Q${c+24} ${f-18} ${c+u+16} ${f-6} L${c+u-2} ${f-4}Z" fill="${us(s,-.2)}" stroke="${qt}" stroke-width="5" stroke-linejoin="round"/>`),p.push(`<circle cx="${c}" cy="${_-10}" r="3.5" fill="${r}" stroke="${qt}" stroke-width="2.5"/>`)):k==="beanie"||k==="bobble"||k==="bobble hat"||k==="woolly hat"?(p.push(`<path d="M${c-u} ${f-6} Q${c-u} ${_-14} ${c} ${_-14} Q${c+u} ${_-14} ${c+u} ${f-6}Z" fill="${r}" stroke="${qt}" stroke-width="5" stroke-linejoin="round"/>`),p.push(`<rect x="${c-u-2}" y="${f-12}" width="${u*2+4}" height="11" rx="5" fill="${s}" stroke="${qt}" stroke-width="5"/>`),p.push(`<circle cx="${c}" cy="${_-16}" r="8" fill="${s}" stroke="${qt}" stroke-width="5"/>`)):k==="headband"||k==="sweatband"?(p.push(`<path d="M${c-u} ${f-13} Q${c} ${f-22} ${c+u} ${f-13} L${c+u+1} ${f-4} Q${c} ${f-13} ${c-u-1} ${f-4}Z" fill="${r}" stroke="${qt}" stroke-width="4" stroke-linejoin="round"/>`),p.push(`<path d="M${c+u} ${f-9} l12 -4 l-2 10z" fill="${r}" stroke="${qt}" stroke-width="3.5" stroke-linejoin="round"/>`)):k==="visor"?p.push(`<path d="M${c-u} ${f-12} Q${c} ${f-20} ${c+u} ${f-12} L${c+u} ${f-5} Q${c} ${f-12} ${c-u} ${f-5}Z" fill="${s}" stroke="${qt}" stroke-width="4"/><path d="M${c-18} ${f-10} Q${c+4} ${f-2} ${c+30} ${f-10} L${c+20} ${f-15}Z" fill="${us(s,-.2)}" stroke="${qt}" stroke-width="4" stroke-linejoin="round"/>`):k==="bucket"||k==="bucket hat"||k==="sun hat"?p.push(`<path d="M${c-u-12} ${f-6} L${c-u+4} ${_-8} Q${c} ${_-16} ${c+u-4} ${_-8} L${c+u+12} ${f-6} Q${c} ${f-14} ${c-u-12} ${f-6}Z" fill="${r}" stroke="${qt}" stroke-width="5" stroke-linejoin="round"/>`):k==="party"||k==="party hat"?p.push(`<path d="M${c-14} ${_+4} L${c+4} ${_-30} L${c+16} ${_+2}Z" fill="${s}" stroke="${qt}" stroke-width="5" stroke-linejoin="round"/><circle cx="${c+4}" cy="${_-32}" r="5" fill="${r}" stroke="${qt}" stroke-width="3"/>`):k==="tophat"||k==="top hat"?p.push(`<rect x="${c-18}" y="${_-30}" width="36" height="30" rx="3" fill="${qt}"/><rect x="${c-18}" y="${_-10}" width="36" height="7" fill="${s}"/><rect x="${c-30}" y="${_-2}" width="60" height="8" rx="4" fill="${qt}"/>`):k==="crown"?p.push(`<path d="M${c-20} ${_+2} L${c-22} ${_-20} L${c-10} ${_-8} L${c} ${_-24} L${c+10} ${_-8} L${c+22} ${_-20} L${c+20} ${_+2}Z" fill="#ffcf3a" stroke="${qt}" stroke-width="4" stroke-linejoin="round"/>`):k&&p.push(`<path d="M${c-u+1} ${f-8} Q${c-u+2} ${_-10} ${c} ${_-10} Q${c+u-2} ${_-10} ${c+u-1} ${f-8}Z" fill="${r}" stroke="${qt}" stroke-width="5" stroke-linejoin="round"/>`),p.push("</g>"),p.push(`<circle cx="60" cy="60" r="56" fill="none" stroke="${qt}" stroke-width="6"/>`),`<svg class="portrait" viewBox="0 0 120 120" width="${t}" height="${t}" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">${p.join("")}</svg>`}var eu=/(daniel|george|arthur|ryan|oliver|thomas|male|james|harry|guy|brian|fred|alex|aaron)/i,nu=/(kate|serena|martha|libby|sonia|hazel|susan|female|stephanie|fiona|moira|tessa|karen|emma|amy|samantha|victoria|zira|aria|jenny|catherine)/i;function wh({onLine:n,onIdle:t}={}){let e=typeof window<"u"?window.speechSynthesis:null,i=!0,s=.9,r={jeff:null,pam:null},o=[],a=null,l=null;function h(){if(!e)return;let M=e.getVoices()||[];if(!M.length)return;let g=M.filter(w=>/en[-_]GB/i.test(w.lang)),p=M.filter(w=>/^en/i.test(w.lang)),S=g.length?g:p.length?p:M,_=(w=>[...w.filter(R=>R.localService),...w.filter(R=>!R.localService)])(S),L=_.find(w=>eu.test(w.name))||_[0],A=_.find(w=>nu.test(w.name)&&w!==L)||_.find(w=>w!==L)||L;r={jeff:L,pam:A}}e&&(h(),e.addEventListener?.("voiceschanged",h));let d=M=>Math.max(2200,String(M).split(/\s+/).length*400+600);function y(){clearTimeout(l),a=null;let M=o.shift();if(!M){t?.();return}a=M,n?.(M);let g=()=>{a===M&&y()};if(i&&e&&(r.jeff||r.pam)){let p=new SpeechSynthesisUtterance(M.text),S=M.speaker==="pam"?r.pam:r.jeff;S?(p.voice=S,p.lang=S.lang):p.lang="en-GB";let v=r.jeff===r.pam;p.pitch=M.speaker==="pam"?v?1.35:1.08:v?.8:.95,p.rate=M.rate||1.06,p.volume=s,p.onend=g,p.onerror=g;try{e.speak(p)}catch{}l=setTimeout(()=>{try{e.cancel()}catch{}g()},d(M.text)*2.2+2e3)}else l=setTimeout(g,d(M.text))}function u(M,g="jeff",{priority:p=2,interrupt:S=!1}={}){if(!M)return;let v={text:String(M),speaker:g,priority:p,at:Date.now()};for(S&&(o.length=0,c()),o.push(v);o.length>2;){let _=0;for(let L=1;L<o.length;L++)o[L].priority<o[_].priority&&(_=L);o.splice(_,1)}a||y()}function c(){if(clearTimeout(l),e)try{e.cancel()}catch{}a=null}function f(){o.length=0,c(),t?.()}return{say:u,clear:f,get busy(){return!!a||o.length>0},get available(){return!!e},setEnabled(M){if(i=!!M,!i&&e)try{e.cancel()}catch{}},setVolume(M){s=Math.max(0,Math.min(1,M))},whenIdle(M=15e3){return new Promise(g=>{let p=Date.now(),S=setInterval(()=>{(!a&&!o.length||Date.now()-p>M)&&(clearInterval(S),g())},120)})},get voiceNames(){return{jeff:r.jeff?.name,pam:r.pam?.name}}}}var iu=[1720,4220],Ba=2500;function zn(n,t){if(t<=0)return 0;if(t>=n[200])return 5e3;let e=0,i=200;for(;i-e>1;){let r=e+i>>1;n[r]<=t?e=r:i=r}let s=(t-n[e])/(n[i]-n[e]);return(e+s)*25}function ps(n,t){let e=Math.max(0,Math.min(5e3,t))/25,i=Math.floor(e),s=Math.min(200,i+1);return n[i]+(e-i)*(n[s]-n[i])}function su(n,{dt:t=1,debounceS:e=6}={}){let i=n.map(m=>m.id),s=Math.max(...n.map(m=>m.officialS)),r=[...n].sort((m,b)=>m.officialS-b.officialS).map(m=>m.id),o=[];for(let m=0;m<=Math.ceil(s);m+=t){let b=n.map(E=>zn(E.progress,m));o.push({t:m,d:b})}let a=[],l=n.length,h={},d=(m,b)=>`${m}-${b}`,y=null,u=0,c=null,f=0,M=0,g=0,p=!1,S=null;for(let m of o){if(m.t<15)continue;let b=n.map(k=>m.t>=k.officialS);for(let k=0;k<l;k++)for(let H=k+1;H<l;H++){if(b[k]&&b[H])continue;let P=m.d[k]>m.d[H]?k:H,z=h[d(k,H)];if(!z){h[d(k,H)]={ahead:P,cand:P,since:m.t};continue}if(P!==z.cand&&(z.cand=P,z.since=m.t),z.cand!==z.ahead&&m.t-z.since>=e){let W=z.cand,q=z.cand===k?H:k;z.ahead=z.cand;let lt=z.since;g++,a.push({type:"overtake",raceS:lt,by:i[W],on:i[q],atM:Math.round(zn(n[W].progress,lt))})}}let E=m.d.indexOf(Math.max(...m.d));if(y===null){y=E,u=m.t;continue}E!==y?c!==E?(c=E,f=m.t):m.t-f>=e&&!b[y]&&(a.push({type:"lead_change",raceS:f,from:i[y],to:i[E],atM:Math.round(m.d[E])}),M++,m.d[E]>3500&&(p=!0),y=E,u=f,c=null):c=null;let T=[...m.d].sort((k,H)=>H-k);S===null&&T[0]-T[1]>60&&T[0]<5e3&&(S=m.t,a.push({type:"breakaway",raceS:m.t,who:i[E],gapM:Math.round(T[0]-T[1]),atM:Math.round(T[0])}))}let v=m=>Math.min(...n.map(b=>ps(b.progress,m)));for(let[m,b]of iu.entries())a.push({type:"hill",raceS:v(b),lap:m+1,atM:b});a.push({type:"lap",raceS:v(Ba),atM:Ba,order:Ha(n,v(Ba))}),a.push({type:"final_stretch",raceS:v(4600),atM:4600,order:Ha(n,v(4600))});for(let m of n)a.push({type:"finish",raceS:m.officialS,who:m.id,place:r.indexOf(m.id)+1});a.sort((m,b)=>m.raceS-b.raceS);let _=n.map(m=>m.officialS).sort((m,b)=>m-b),L=m=>Ha(n,v(m)),A=L(2e3)[0],w=L(1e3)[0],R=L(4e3)[0],x=L(2e3).at(-1);return{finishOrder:r,winningMarginS:_[1]-_[0],spreadS:_.at(-1)-_[0],leadChanges:M,overtakes:g,lateLeadChange:p,leaderAt1k:w,leaderAt2k:A,leaderAt4k:R,leaderAt2kFinalPlace:r.indexOf(A)+1,winnerPlaceAt2k:L(2e3).indexOf(r[0])+1,winnerPlaceAt1k:L(1e3).indexOf(r[0])+1,lastAt2kFinalPlace:r.indexOf(x)+1,breakawayAtS:S,events:a}}function Ha(n,t){return n.map(e=>({id:e.id,d:zn(e.progress,t),f:e.officialS})).sort((e,i)=>i.d-e.d||e.f-i.f).map(e=>e.id)}function ru(n,{targetS:t=140}={}){let e=Math.max(...n.map(p=>p.officialS)),i=Math.min(...n.map(p=>ps(p.progress,4500))),s=45,r=i,o=e+3,a=o-r,l=4,h=Math.min(t*.45,Math.max(25,a/1.6)),d=a/h,y=r-s,u=Math.max(30,t-s/l-h),c=y/u,f=p=>{let S=Eh(s-10,s+10,p),v=Eh(r-60,r,p);return l+(c-l)*S+(d-c)*v},M=[[0,0]],g=0;for(let p=1;p<=Math.ceil(o);p++)g+=1/f(p-.5),M.push([p,Math.round(g*1e3)/1e3]);return{map:M,durationS:Math.round(g*10)/10,raceEndS:Math.ceil(o),rates:{start:l,middle:Math.round(c*10)/10,finale:Math.round(d*100)/100}}}function Eh(n,t,e){let i=Math.max(0,Math.min(1,(e-n)/(t-n)));return i*i*(3-2*i)}function no(n,t){let e=n.map;if(t<=0)return 0;if(t>=e.length-1)return e.at(-1)[1];let i=Math.floor(t),s=t-i;return e[i][1]+s*(e[i+1][1]-e[i][1])}function ms(n,t){let e=n.map;if(t<=0)return 0;let i=0,s=e.length-1;if(t>=e[s][1])return e[s][0];for(;s-i>1;){let r=i+s>>1;e[r][1]<=t?i=r:s=r}return e[i][0]+(t-e[i][1])/(e[s][1]-e[i][1])}function Th(n,t,e={}){let i=su(t),s=ru(t,e),r=[...i.events];for(let a of t)for(let[l,h]of(a.diversions||[]).entries())r.push({type:"diversion",who:a.id,lap:l+1,raceS:ps(a.progress,h.fromM),endRaceS:ps(a.progress,h.toM),fromM:h.fromM,toM:h.toM});r.sort((a,l)=>a.raceS-l.raceS);let o=r.map(a=>({...a,broadcastS:Math.round(no(s,a.raceS)*100)/100,...a.endRaceS!=null?{endBroadcastS:Math.round(no(s,a.endRaceS)*100)/100}:{}}));return{roundId:n,courseLengthM:5e3,runners:t.map(a=>({id:a.id,officialS:a.officialS,progress:a.progress,pacingSource:a.pacingSource,diversions:a.diversions||null})),timeMap:s,events:o,finishOrder:i.finishOrder,summary:{winningMarginS:i.winningMarginS,spreadS:i.spreadS,leadChanges:i.leadChanges,overtakes:i.overtakes,lateLeadChange:i.lateLeadChange}}}var gs="#14183c";function Ah(n,{course:t,round:e,plan:i,speed:s=1}){let r=document.createElement("canvas");r.style.cssText="position:absolute;inset:0;width:100%;height:100%;display:block",n.appendChild(r);let o=r.getContext("2d",{alpha:!1}),a=e?.runners||[],l=t?.points||[],h=0,d=!1,y=!1,u=0,c="idle",f=0,M=0,g=-1,p=null,S=null,v=[],_=null,L=1/0,A=-1/0,w=1/0,R=-1/0;for(let z of l)L=Math.min(L,z[0]),A=Math.max(A,z[0]),w=Math.min(w,z[2]),R=Math.max(R,z[2]);function x(){let z=Math.min(1,1100/Math.max(1,n.clientWidth));r.width=Math.round(n.clientWidth*z),r.height=Math.round(n.clientHeight*z)}x();let m=new ResizeObserver(x);m.observe(n);function b(z,W){let q=r.width,lt=r.height,D=lt*.16,Et=lt*.24,K=q*.08,$=Math.min((q-K*2-q*.22)/(A-L||1),(lt-D-Et)/(R-w||1)),j=K+(q-K*2-q*.22-(A-L)*$)/2,st=D+(lt-D-Et-(R-w)*$)/2;return[j+(z-L)*$,st+(W-w)*$,$]}function E(z){if(!l.length)return[0,0];let W=Math.max(0,Math.min(l.length-1,z/5e3*(l.length-1))),q=Math.floor(W),lt=Math.min(l.length-1,q+1),D=W-q;return[l[q][0]+(l[lt][0]-l[q][0])*D,l[q][2]+(l[lt][2]-l[q][2])*D]}let T=null;function k(){let z=r.width,W=r.height;T=document.createElement("canvas"),T.width=z,T.height=W;let q=T.getContext("2d"),lt=q.createLinearGradient(0,0,0,W);lt.addColorStop(0,"#45cf86"),lt.addColorStop(1,"#1f9e5c"),q.fillStyle=lt,q.fillRect(0,0,z,W),q.fillStyle="rgba(255,255,255,.05)";let D=z/1920;for(let Et=-W;Et<z;Et+=160*D)q.beginPath(),q.moveTo(Et,0),q.lineTo(Et+80*D,0),q.lineTo(Et+80*D+W*.5,W),q.lineTo(Et+W*.5,W),q.fill();if(l.length){let Et=new Path2D;l.forEach((st,tt)=>{let[ht,et]=b(st[0],st[2]);tt?Et.lineTo(ht,et):Et.moveTo(ht,et)});let K=b(0,0)[2];q.lineCap="round",q.lineJoin="round",q.strokeStyle=gs,q.lineWidth=Math.max(16,K*14),q.stroke(Et),q.strokeStyle="#fff",q.lineWidth=Math.max(12,K*11),q.stroke(Et),q.strokeStyle="#6f84a8",q.lineWidth=Math.max(8,K*8),q.stroke(Et);let[$,j]=b(...t.finish?[t.finish[0],t.finish[1]]:[l.at(-1)[0],l.at(-1)[2]]);q.save(),q.translate($,j);for(let st=-2;st<2;st++)for(let tt=-1;tt<1;tt++)q.fillStyle=st+tt&1?"#fff":gs,q.fillRect(st*8,tt*8,8,8);q.restore()}}function H(){let z=r.width,W=r.height;(!T||T.width!==z||T.height!==W)&&k(),o.drawImage(T,0,0);let q=i?ms(i.timeMap,u):0,lt=(i?.runners||[]).map(tt=>({id:tt.id,m:zn(tt.progress,q),done:q>=tt.officialS,f:tt.officialS}));lt.sort((tt,ht)=>ht.m-tt.m||tt.f-ht.f);let D=Math.max(14,z/90);for(let tt of[...lt].reverse()){let ht=a.find(gt=>gt.id===tt.id),[et,rt]=b(...E(tt.m));o.beginPath(),o.arc(et,rt+4,D,0,Math.PI*2),o.fillStyle="rgba(0,0,0,.25)",o.fill(),o.beginPath(),o.arc(et,rt,D,0,Math.PI*2),o.fillStyle=ht?.colour?.primary||"#fff",o.fill(),o.lineWidth=D*.28,o.strokeStyle=gs,o.stroke(),o.fillStyle="#fff",o.font=`${Math.round(D*1.15)}px "Lilita One", sans-serif`,o.textAlign="center",o.textBaseline="middle",o.lineWidth=D*.25,o.strokeText(String(ht?.lane??""),et,rt+1),o.fillText(String(ht?.lane??""),et,rt+1)}let Et=z*.77,K=W*.16,$=W*.075;o.font=`${Math.round(W*.035)}px "Lilita One", sans-serif`,o.textAlign="left",o.textBaseline="middle",lt.forEach((tt,ht)=>{let et=a.find(gt=>gt.id===tt.id),rt=K+ht*$;o.save(),o.translate(Et,rt),o.transform(1,0,-.14,1,0,0),o.fillStyle=gs,o.fillRect(4,6,z*.2,$*.82),o.fillStyle=ht===0?"#ffd23f":"#2a62e0",o.fillRect(0,0,z*.2,$*.82),o.fillStyle=et?.colour?.primary||"#fff",o.fillRect(0,0,z*.012,$*.82),o.restore(),o.fillStyle=ht===0?gs:"#fff",o.fillText(`${ht+1}  ${(et?.shortName||et?.nickname||tt.id).slice(0,16)}`,Et+z*.02,rt+$*.41)}),o.font=`${Math.round(W*.04)}px "Lilita One", sans-serif`,o.textAlign="left";let j=Math.floor(q),st=`${Math.floor(j/60)}:${String(j%60).padStart(2,"0")}`;o.lineWidth=8,o.strokeStyle=gs,o.strokeText(st,Et,K-W*.05),o.fillStyle="#ffd23f",o.fillText(st,Et,K-W*.05)}function P(z){if(y)return;let W=f?Math.min(.1,(z-f)/1e3):0;if(f=z,c==="race"&&!d){for(u+=W*s;v.length&&v[0].broadcastS<=u;){let q=v.shift();try{p?.(q)}catch(lt){console.warn(lt)}}if(u>=(i.timeMap.durationS||0)+1.5){c="done";let q=S;S=null,q?.()}}z-M>45&&(u!==g||!T)&&(M=z,g=u,H()),h=requestAnimationFrame(P)}return h=requestAnimationFrame(P),{kind:"2d",playIntro(z){setTimeout(()=>z?.(),10)},playRace(z,W){p=z,S=W,v=[...i.events||[],...i.commentary||[]].sort((q,lt)=>q.broadcastS-lt.broadcastS),u=0,c="race"},showPodium(z){_=z},setPaused(z){d=!!z},get broadcastTime(){return c==="race"||c==="done"?u:-1},dispose(){y=!0,cancelAnimationFrame(h),m.disconnect(),r.remove()}}}var ls={};jf(ls,{createRaceView:()=>sv});var Gc="170";var ou=0,Rh=1,au=2;var $d=1,Wc=2,fi=3,Ni=0,on=1,We=2,Di=0,Fs=1,Ch=2,Ih=3,Ph=4,lu=5,Ki=100,cu=101,hu=102,du=103,fu=104,uu=200,pu=201,mu=202,gu=203,bl=204,Sl=205,yu=206,xu=207,vu=208,_u=209,Mu=210,bu=211,Su=212,wu=213,Eu=214,wl=0,El=1,Tl=2,$s=3,Al=4,Rl=5,Cl=6,Il=7,Vd=0,Tu=1,Au=2,ti=0,Ru=1,Cu=2,Iu=3,Pu=4,Lu=5,ku=6,Du=7;var Gd=300,Vs=301,Gs=302,Pl=303,Ll=304,ba=306,es=1e3,Qi=1001,kl=1002,xn=1003,Uu=1004;var io=1005;var jn=1006,$a=1007;var ts=1008;var gi=1009,Wd=1010,Xd=1011,Er=1012,Xc=1013,ns=1014,Qn=1015,zr=1016,qc=1017,Yc=1018,Ws=1020,qd=35902,Yd=1021,Zd=1022,Rn=1023,Jd=1024,Kd=1025,zs=1026,Xs=1027,Zc=1028,Jc=1029,jd=1030,Kc=1031;var jc=1033,Uo=33776,No=33777,Oo=33778,Fo=33779,Dl=35840,Ul=35841,Nl=35842,Ol=35843,Fl=36196,zl=37492,Bl=37496,Hl=37808,$l=37809,Vl=37810,Gl=37811,Wl=37812,Xl=37813,ql=37814,Yl=37815,Zl=37816,Jl=37817,Kl=37818,jl=37819,Ql=37820,tc=37821,zo=36492,ec=36494,nc=36495,Qd=36283,ic=36284,sc=36285,rc=36286;var Bo=2300,oc=2301,Va=2302,Lh=2400,kh=2401,Dh=2402;var Nu=3200,Ou=3201;var tf=0,Fu=1,Li="",sn="srgb",Ks="srgb-linear",Sa="linear",Re="srgb";var ys=7680;var Uh=519,zu=512,Bu=513,Hu=514,ef=515,$u=516,Vu=517,Gu=518,Wu=519,ac=35044;var Nh="300 es",pi=2e3,Ho=2001,Oi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let i=this._listeners[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},fn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Oh=1234567,_r=Math.PI/180,Tr=180/Math.PI;function ei(){let n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(fn[n&255]+fn[n>>8&255]+fn[n>>16&255]+fn[n>>24&255]+"-"+fn[t&255]+fn[t>>8&255]+"-"+fn[t>>16&15|64]+fn[t>>24&255]+"-"+fn[e&63|128]+fn[e>>8&255]+"-"+fn[e>>16&255]+fn[e>>24&255]+fn[i&255]+fn[i>>8&255]+fn[i>>16&255]+fn[i>>24&255]).toLowerCase()}function rn(n,t,e){return Math.max(t,Math.min(e,n))}function Qc(n,t){return(n%t+t)%t}function Xu(n,t,e,i,s){return i+(n-t)*(s-i)/(e-t)}function qu(n,t,e){return n!==t?(e-n)/(t-n):0}function Mr(n,t,e){return(1-e)*n+e*t}function Yu(n,t,e,i){return Mr(n,t,1-Math.exp(-e*i))}function Zu(n,t=1){return t-Math.abs(Qc(n,t*2)-t)}function Ju(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function Ku(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function ju(n,t){return n+Math.floor(Math.random()*(t-n+1))}function Qu(n,t){return n+Math.random()*(t-n)}function tp(n){return n*(.5-Math.random())}function ep(n){n!==void 0&&(Oh=n);let t=Oh+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function np(n){return n*_r}function ip(n){return n*Tr}function sp(n){return(n&n-1)===0&&n!==0}function rp(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function op(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function ap(n,t,e,i,s){let r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),h=r((t+i)/2),d=o((t+i)/2),y=r((t-i)/2),u=o((t-i)/2),c=r((i-t)/2),f=o((i-t)/2);switch(s){case"XYX":n.set(a*d,l*y,l*u,a*h);break;case"YZY":n.set(l*u,a*d,l*y,a*h);break;case"ZXZ":n.set(l*y,l*u,a*d,a*h);break;case"XZX":n.set(a*d,l*f,l*c,a*h);break;case"YXY":n.set(l*c,a*d,l*f,a*h);break;case"ZYZ":n.set(l*f,l*c,a*d,a*h);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Vn(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Ae(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var nf={DEG2RAD:_r,RAD2DEG:Tr,generateUUID:ei,clamp:rn,euclideanModulo:Qc,mapLinear:Xu,inverseLerp:qu,lerp:Mr,damp:Yu,pingpong:Zu,smoothstep:Ju,smootherstep:Ku,randInt:ju,randFloat:Qu,randFloatSpread:tp,seededRandom:ep,degToRad:np,radToDeg:ip,isPowerOfTwo:sp,ceilPowerOfTwo:rp,floorPowerOfTwo:op,setQuaternionFromProperEuler:ap,normalize:Ae,denormalize:Vn},Nt=class n{constructor(t=0,e=0){n.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(rn(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},me=class n{constructor(t,e,i,s,r,o,a,l,h){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,h)}set(t,e,i,s,r,o,a,l,h){let d=this.elements;return d[0]=t,d[1]=s,d[2]=a,d[3]=e,d[4]=r,d[5]=l,d[6]=i,d[7]=o,d[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[3],l=i[6],h=i[1],d=i[4],y=i[7],u=i[2],c=i[5],f=i[8],M=s[0],g=s[3],p=s[6],S=s[1],v=s[4],_=s[7],L=s[2],A=s[5],w=s[8];return r[0]=o*M+a*S+l*L,r[3]=o*g+a*v+l*A,r[6]=o*p+a*_+l*w,r[1]=h*M+d*S+y*L,r[4]=h*g+d*v+y*A,r[7]=h*p+d*_+y*w,r[2]=u*M+c*S+f*L,r[5]=u*g+c*v+f*A,r[8]=u*p+c*_+f*w,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],h=t[7],d=t[8];return e*o*d-e*a*h-i*r*d+i*a*l+s*r*h-s*o*l}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],h=t[7],d=t[8],y=d*o-a*h,u=a*l-d*r,c=h*r-o*l,f=e*y+i*u+s*c;if(f===0)return this.set(0,0,0,0,0,0,0,0,0);let M=1/f;return t[0]=y*M,t[1]=(s*h-d*i)*M,t[2]=(a*i-s*o)*M,t[3]=u*M,t[4]=(d*e-s*l)*M,t[5]=(s*r-a*e)*M,t[6]=c*M,t[7]=(i*l-h*e)*M,t[8]=(o*e-i*r)*M,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,o,a){let l=Math.cos(r),h=Math.sin(r);return this.set(i*l,i*h,-i*(l*o+h*a)+o+t,-s*h,s*l,-s*(-h*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Ga.makeScale(t,e)),this}rotate(t){return this.premultiply(Ga.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ga.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Ga=new me;function sf(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function $o(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function lp(){let n=$o("canvas");return n.style.display="block",n}var Fh={};function xr(n){n in Fh||(Fh[n]=!0,console.warn(n))}function cp(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}function hp(n){let t=n.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function dp(n){let t=n.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var Me={enabled:!0,workingColorSpace:Ks,spaces:{},convert:function(n,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===Re&&(n.r=mi(n.r),n.g=mi(n.g),n.b=mi(n.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(n.applyMatrix3(this.spaces[t].toXYZ),n.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===Re&&(n.r=Bs(n.r),n.g=Bs(n.g),n.b=Bs(n.b))),n},fromWorkingColorSpace:function(n,t){return this.convert(n,this.workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===Li?Sa:this.spaces[n].transfer},getLuminanceCoefficients:function(n,t=this.workingColorSpace){return n.fromArray(this.spaces[t].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,t,e){return n.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function mi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Bs(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var zh=[.64,.33,.3,.6,.15,.06],Bh=[.2126,.7152,.0722],Hh=[.3127,.329],$h=new me().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Vh=new me().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Me.define({[Ks]:{primaries:zh,whitePoint:Hh,transfer:Sa,toXYZ:$h,fromXYZ:Vh,luminanceCoefficients:Bh,workingColorSpaceConfig:{unpackColorSpace:sn},outputColorSpaceConfig:{drawingBufferColorSpace:sn}},[sn]:{primaries:zh,whitePoint:Hh,transfer:Re,toXYZ:$h,fromXYZ:Vh,luminanceCoefficients:Bh,outputColorSpaceConfig:{drawingBufferColorSpace:sn}}});var xs,lc=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{xs===void 0&&(xs=$o("canvas")),xs.width=t.width,xs.height=t.height;let i=xs.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=xs}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=$o("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=mi(r[o]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(mi(e[i]/255)*255):e[i]=mi(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},fp=0,Vo=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:fp++}),this.uuid=ei(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Wa(s[o].image)):r.push(Wa(s[o]))}else r=Wa(s);i.url=r}return e||(t.images[this.uuid]=i),i}};function Wa(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?lc.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var up=0,Sn=class n extends Oi{constructor(t=n.DEFAULT_IMAGE,e=n.DEFAULT_MAPPING,i=Qi,s=Qi,r=jn,o=ts,a=Rn,l=gi,h=n.DEFAULT_ANISOTROPY,d=Li){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:up++}),this.uuid=ei(),this.name="",this.source=new Vo(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=h,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Nt(0,0),this.repeat=new Nt(1,1),this.center=new Nt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new me,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Gd)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case es:t.x=t.x-Math.floor(t.x);break;case Qi:t.x=t.x<0?0:1;break;case kl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case es:t.y=t.y-Math.floor(t.y);break;case Qi:t.y=t.y<0?0:1;break;case kl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Sn.DEFAULT_IMAGE=null;Sn.DEFAULT_MAPPING=Gd;Sn.DEFAULT_ANISOTROPY=1;var Ve=class n{constructor(t=0,e=0,i=0,s=1){n.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r,l=t.elements,h=l[0],d=l[4],y=l[8],u=l[1],c=l[5],f=l[9],M=l[2],g=l[6],p=l[10];if(Math.abs(d-u)<.01&&Math.abs(y-M)<.01&&Math.abs(f-g)<.01){if(Math.abs(d+u)<.1&&Math.abs(y+M)<.1&&Math.abs(f+g)<.1&&Math.abs(h+c+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let v=(h+1)/2,_=(c+1)/2,L=(p+1)/2,A=(d+u)/4,w=(y+M)/4,R=(f+g)/4;return v>_&&v>L?v<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(v),s=A/i,r=w/i):_>L?_<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),i=A/s,r=R/s):L<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(L),i=w/r,s=R/r),this.set(i,s,r,e),this}let S=Math.sqrt((g-f)*(g-f)+(y-M)*(y-M)+(u-d)*(u-d));return Math.abs(S)<.001&&(S=1),this.x=(g-f)/S,this.y=(y-M)/S,this.z=(u-d)/S,this.w=Math.acos((h+c+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},cc=class extends Oi{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Ve(0,0,t,e),this.scissorTest=!1,this.viewport=new Ve(0,0,t,e);let s={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:jn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);let r=new Sn(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];let o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new Vo(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},yi=class extends cc{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},Go=class extends Sn{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=xn,this.minFilter=xn,this.wrapR=Qi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var hc=class extends Sn{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=xn,this.minFilter=xn,this.wrapR=Qi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ni=class{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,o,a){let l=i[s+0],h=i[s+1],d=i[s+2],y=i[s+3],u=r[o+0],c=r[o+1],f=r[o+2],M=r[o+3];if(a===0){t[e+0]=l,t[e+1]=h,t[e+2]=d,t[e+3]=y;return}if(a===1){t[e+0]=u,t[e+1]=c,t[e+2]=f,t[e+3]=M;return}if(y!==M||l!==u||h!==c||d!==f){let g=1-a,p=l*u+h*c+d*f+y*M,S=p>=0?1:-1,v=1-p*p;if(v>Number.EPSILON){let L=Math.sqrt(v),A=Math.atan2(L,p*S);g=Math.sin(g*A)/L,a=Math.sin(a*A)/L}let _=a*S;if(l=l*g+u*_,h=h*g+c*_,d=d*g+f*_,y=y*g+M*_,g===1-a){let L=1/Math.sqrt(l*l+h*h+d*d+y*y);l*=L,h*=L,d*=L,y*=L}}t[e]=l,t[e+1]=h,t[e+2]=d,t[e+3]=y}static multiplyQuaternionsFlat(t,e,i,s,r,o){let a=i[s],l=i[s+1],h=i[s+2],d=i[s+3],y=r[o],u=r[o+1],c=r[o+2],f=r[o+3];return t[e]=a*f+d*y+l*c-h*u,t[e+1]=l*f+d*u+h*y-a*c,t[e+2]=h*f+d*c+a*u-l*y,t[e+3]=d*f-a*y-l*u-h*c,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,h=a(i/2),d=a(s/2),y=a(r/2),u=l(i/2),c=l(s/2),f=l(r/2);switch(o){case"XYZ":this._x=u*d*y+h*c*f,this._y=h*c*y-u*d*f,this._z=h*d*f+u*c*y,this._w=h*d*y-u*c*f;break;case"YXZ":this._x=u*d*y+h*c*f,this._y=h*c*y-u*d*f,this._z=h*d*f-u*c*y,this._w=h*d*y+u*c*f;break;case"ZXY":this._x=u*d*y-h*c*f,this._y=h*c*y+u*d*f,this._z=h*d*f+u*c*y,this._w=h*d*y-u*c*f;break;case"ZYX":this._x=u*d*y-h*c*f,this._y=h*c*y+u*d*f,this._z=h*d*f-u*c*y,this._w=h*d*y+u*c*f;break;case"YZX":this._x=u*d*y+h*c*f,this._y=h*c*y+u*d*f,this._z=h*d*f-u*c*y,this._w=h*d*y-u*c*f;break;case"XZY":this._x=u*d*y-h*c*f,this._y=h*c*y-u*d*f,this._z=h*d*f+u*c*y,this._w=h*d*y+u*c*f;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],h=e[2],d=e[6],y=e[10],u=i+a+y;if(u>0){let c=.5/Math.sqrt(u+1);this._w=.25/c,this._x=(d-l)*c,this._y=(r-h)*c,this._z=(o-s)*c}else if(i>a&&i>y){let c=2*Math.sqrt(1+i-a-y);this._w=(d-l)/c,this._x=.25*c,this._y=(s+o)/c,this._z=(r+h)/c}else if(a>y){let c=2*Math.sqrt(1+a-i-y);this._w=(r-h)/c,this._x=(s+o)/c,this._y=.25*c,this._z=(l+d)/c}else{let c=2*Math.sqrt(1+y-i-a);this._w=(o-s)/c,this._x=(r+h)/c,this._y=(l+d)/c,this._z=.25*c}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(rn(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,h=e._z,d=e._w;return this._x=i*d+o*a+s*h-r*l,this._y=s*d+o*l+r*a-i*h,this._z=r*d+o*h+i*l-s*a,this._w=o*d-i*a-s*l-r*h,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let i=this._x,s=this._y,r=this._z,o=this._w,a=o*t._w+i*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let c=1-e;return this._w=c*o+e*this._w,this._x=c*i+e*this._x,this._y=c*s+e*this._y,this._z=c*r+e*this._z,this.normalize(),this}let h=Math.sqrt(l),d=Math.atan2(h,a),y=Math.sin((1-e)*d)/h,u=Math.sin(e*d)/h;return this._w=o*y+this._w*u,this._x=i*y+this._x*u,this._y=s*y+this._y*u,this._z=r*y+this._z*u,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},V=class n{constructor(t=0,e=0,i=0){n.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Gh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Gh.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,h=2*(o*s-a*i),d=2*(a*e-r*s),y=2*(r*i-o*e);return this.x=e+l*h+o*y-a*d,this.y=i+l*d+a*h-r*y,this.z=s+l*y+r*d-o*h,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Xa.copy(this).projectOnVector(t),this.sub(Xa)}reflect(t){return this.sub(Xa.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(rn(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Xa=new V,Gh=new ni,xi=class{constructor(t=new V(1/0,1/0,1/0),e=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Bn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Bn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=Bn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Bn):Bn.fromBufferAttribute(r,o),Bn.applyMatrix4(t.matrixWorld),this.expandByPoint(Bn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),so.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),so.copy(i.boundingBox)),so.applyMatrix4(t.matrixWorld),this.union(so)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Bn),Bn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(lr),ro.subVectors(this.max,lr),vs.subVectors(t.a,lr),_s.subVectors(t.b,lr),Ms.subVectors(t.c,lr),Ti.subVectors(_s,vs),Ai.subVectors(Ms,_s),Gi.subVectors(vs,Ms);let e=[0,-Ti.z,Ti.y,0,-Ai.z,Ai.y,0,-Gi.z,Gi.y,Ti.z,0,-Ti.x,Ai.z,0,-Ai.x,Gi.z,0,-Gi.x,-Ti.y,Ti.x,0,-Ai.y,Ai.x,0,-Gi.y,Gi.x,0];return!qa(e,vs,_s,Ms,ro)||(e=[1,0,0,0,1,0,0,0,1],!qa(e,vs,_s,Ms,ro))?!1:(oo.crossVectors(Ti,Ai),e=[oo.x,oo.y,oo.z],qa(e,vs,_s,Ms,ro))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Bn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Bn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ai[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ai[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ai[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ai[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ai[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ai[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ai[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ai[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ai),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},ai=[new V,new V,new V,new V,new V,new V,new V,new V],Bn=new V,so=new xi,vs=new V,_s=new V,Ms=new V,Ti=new V,Ai=new V,Gi=new V,lr=new V,ro=new V,oo=new V,Wi=new V;function qa(n,t,e,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Wi.fromArray(n,r);let a=s.x*Math.abs(Wi.x)+s.y*Math.abs(Wi.y)+s.z*Math.abs(Wi.z),l=t.dot(Wi),h=e.dot(Wi),d=i.dot(Wi);if(Math.max(-Math.max(l,h,d),Math.min(l,h,d))>a)return!1}return!0}var pp=new xi,cr=new V,Ya=new V,Fi=class{constructor(t=new V,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):pp.setFromPoints(t).getCenter(i);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;cr.subVectors(t,this.center);let e=cr.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(cr,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ya.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(cr.copy(t.center).add(Ya)),this.expandByPoint(cr.copy(t.center).sub(Ya))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},li=new V,Za=new V,ao=new V,Ri=new V,Ja=new V,lo=new V,Ka=new V,Wo=class{constructor(t=new V,e=new V(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,li)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=li.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(li.copy(this.origin).addScaledVector(this.direction,e),li.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){Za.copy(t).add(e).multiplyScalar(.5),ao.copy(e).sub(t).normalize(),Ri.copy(this.origin).sub(Za);let r=t.distanceTo(e)*.5,o=-this.direction.dot(ao),a=Ri.dot(this.direction),l=-Ri.dot(ao),h=Ri.lengthSq(),d=Math.abs(1-o*o),y,u,c,f;if(d>0)if(y=o*l-a,u=o*a-l,f=r*d,y>=0)if(u>=-f)if(u<=f){let M=1/d;y*=M,u*=M,c=y*(y+o*u+2*a)+u*(o*y+u+2*l)+h}else u=r,y=Math.max(0,-(o*u+a)),c=-y*y+u*(u+2*l)+h;else u=-r,y=Math.max(0,-(o*u+a)),c=-y*y+u*(u+2*l)+h;else u<=-f?(y=Math.max(0,-(-o*r+a)),u=y>0?-r:Math.min(Math.max(-r,-l),r),c=-y*y+u*(u+2*l)+h):u<=f?(y=0,u=Math.min(Math.max(-r,-l),r),c=u*(u+2*l)+h):(y=Math.max(0,-(o*r+a)),u=y>0?r:Math.min(Math.max(-r,-l),r),c=-y*y+u*(u+2*l)+h);else u=o>0?-r:r,y=Math.max(0,-(o*u+a)),c=-y*y+u*(u+2*l)+h;return i&&i.copy(this.origin).addScaledVector(this.direction,y),s&&s.copy(Za).addScaledVector(ao,u),c}intersectSphere(t,e){li.subVectors(t.center,this.origin);let i=li.dot(this.direction),s=li.dot(li)-i*i,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,o,a,l,h=1/this.direction.x,d=1/this.direction.y,y=1/this.direction.z,u=this.origin;return h>=0?(i=(t.min.x-u.x)*h,s=(t.max.x-u.x)*h):(i=(t.max.x-u.x)*h,s=(t.min.x-u.x)*h),d>=0?(r=(t.min.y-u.y)*d,o=(t.max.y-u.y)*d):(r=(t.max.y-u.y)*d,o=(t.min.y-u.y)*d),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),y>=0?(a=(t.min.z-u.z)*y,l=(t.max.z-u.z)*y):(a=(t.max.z-u.z)*y,l=(t.min.z-u.z)*y),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,li)!==null}intersectTriangle(t,e,i,s,r){Ja.subVectors(e,t),lo.subVectors(i,t),Ka.crossVectors(Ja,lo);let o=this.direction.dot(Ka),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ri.subVectors(this.origin,t);let l=a*this.direction.dot(lo.crossVectors(Ri,lo));if(l<0)return null;let h=a*this.direction.dot(Ja.cross(Ri));if(h<0||l+h>o)return null;let d=-a*Ri.dot(Ka);return d<0?null:this.at(d/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Se=class n{constructor(t,e,i,s,r,o,a,l,h,d,y,u,c,f,M,g){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,h,d,y,u,c,f,M,g)}set(t,e,i,s,r,o,a,l,h,d,y,u,c,f,M,g){let p=this.elements;return p[0]=t,p[4]=e,p[8]=i,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=h,p[6]=d,p[10]=y,p[14]=u,p[3]=c,p[7]=f,p[11]=M,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,i=t.elements,s=1/bs.setFromMatrixColumn(t,0).length(),r=1/bs.setFromMatrixColumn(t,1).length(),o=1/bs.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),h=Math.sin(s),d=Math.cos(r),y=Math.sin(r);if(t.order==="XYZ"){let u=o*d,c=o*y,f=a*d,M=a*y;e[0]=l*d,e[4]=-l*y,e[8]=h,e[1]=c+f*h,e[5]=u-M*h,e[9]=-a*l,e[2]=M-u*h,e[6]=f+c*h,e[10]=o*l}else if(t.order==="YXZ"){let u=l*d,c=l*y,f=h*d,M=h*y;e[0]=u+M*a,e[4]=f*a-c,e[8]=o*h,e[1]=o*y,e[5]=o*d,e[9]=-a,e[2]=c*a-f,e[6]=M+u*a,e[10]=o*l}else if(t.order==="ZXY"){let u=l*d,c=l*y,f=h*d,M=h*y;e[0]=u-M*a,e[4]=-o*y,e[8]=f+c*a,e[1]=c+f*a,e[5]=o*d,e[9]=M-u*a,e[2]=-o*h,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let u=o*d,c=o*y,f=a*d,M=a*y;e[0]=l*d,e[4]=f*h-c,e[8]=u*h+M,e[1]=l*y,e[5]=M*h+u,e[9]=c*h-f,e[2]=-h,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let u=o*l,c=o*h,f=a*l,M=a*h;e[0]=l*d,e[4]=M-u*y,e[8]=f*y+c,e[1]=y,e[5]=o*d,e[9]=-a*d,e[2]=-h*d,e[6]=c*y+f,e[10]=u-M*y}else if(t.order==="XZY"){let u=o*l,c=o*h,f=a*l,M=a*h;e[0]=l*d,e[4]=-y,e[8]=h*d,e[1]=u*y+M,e[5]=o*d,e[9]=c*y-f,e[2]=f*y-c,e[6]=a*d,e[10]=M*y+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(mp,t,gp)}lookAt(t,e,i){let s=this.elements;return Tn.subVectors(t,e),Tn.lengthSq()===0&&(Tn.z=1),Tn.normalize(),Ci.crossVectors(i,Tn),Ci.lengthSq()===0&&(Math.abs(i.z)===1?Tn.x+=1e-4:Tn.z+=1e-4,Tn.normalize(),Ci.crossVectors(i,Tn)),Ci.normalize(),co.crossVectors(Tn,Ci),s[0]=Ci.x,s[4]=co.x,s[8]=Tn.x,s[1]=Ci.y,s[5]=co.y,s[9]=Tn.y,s[2]=Ci.z,s[6]=co.z,s[10]=Tn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[4],l=i[8],h=i[12],d=i[1],y=i[5],u=i[9],c=i[13],f=i[2],M=i[6],g=i[10],p=i[14],S=i[3],v=i[7],_=i[11],L=i[15],A=s[0],w=s[4],R=s[8],x=s[12],m=s[1],b=s[5],E=s[9],T=s[13],k=s[2],H=s[6],P=s[10],z=s[14],W=s[3],q=s[7],lt=s[11],D=s[15];return r[0]=o*A+a*m+l*k+h*W,r[4]=o*w+a*b+l*H+h*q,r[8]=o*R+a*E+l*P+h*lt,r[12]=o*x+a*T+l*z+h*D,r[1]=d*A+y*m+u*k+c*W,r[5]=d*w+y*b+u*H+c*q,r[9]=d*R+y*E+u*P+c*lt,r[13]=d*x+y*T+u*z+c*D,r[2]=f*A+M*m+g*k+p*W,r[6]=f*w+M*b+g*H+p*q,r[10]=f*R+M*E+g*P+p*lt,r[14]=f*x+M*T+g*z+p*D,r[3]=S*A+v*m+_*k+L*W,r[7]=S*w+v*b+_*H+L*q,r[11]=S*R+v*E+_*P+L*lt,r[15]=S*x+v*T+_*z+L*D,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],h=t[13],d=t[2],y=t[6],u=t[10],c=t[14],f=t[3],M=t[7],g=t[11],p=t[15];return f*(+r*l*y-s*h*y-r*a*u+i*h*u+s*a*c-i*l*c)+M*(+e*l*c-e*h*u+r*o*u-s*o*c+s*h*d-r*l*d)+g*(+e*h*y-e*a*c-r*o*y+i*o*c+r*a*d-i*h*d)+p*(-s*a*d-e*l*y+e*a*u+s*o*y-i*o*u+i*l*d)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],h=t[7],d=t[8],y=t[9],u=t[10],c=t[11],f=t[12],M=t[13],g=t[14],p=t[15],S=y*g*h-M*u*h+M*l*c-a*g*c-y*l*p+a*u*p,v=f*u*h-d*g*h-f*l*c+o*g*c+d*l*p-o*u*p,_=d*M*h-f*y*h+f*a*c-o*M*c-d*a*p+o*y*p,L=f*y*l-d*M*l-f*a*u+o*M*u+d*a*g-o*y*g,A=e*S+i*v+s*_+r*L;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let w=1/A;return t[0]=S*w,t[1]=(M*u*r-y*g*r-M*s*c+i*g*c+y*s*p-i*u*p)*w,t[2]=(a*g*r-M*l*r+M*s*h-i*g*h-a*s*p+i*l*p)*w,t[3]=(y*l*r-a*u*r-y*s*h+i*u*h+a*s*c-i*l*c)*w,t[4]=v*w,t[5]=(d*g*r-f*u*r+f*s*c-e*g*c-d*s*p+e*u*p)*w,t[6]=(f*l*r-o*g*r-f*s*h+e*g*h+o*s*p-e*l*p)*w,t[7]=(o*u*r-d*l*r+d*s*h-e*u*h-o*s*c+e*l*c)*w,t[8]=_*w,t[9]=(f*y*r-d*M*r-f*i*c+e*M*c+d*i*p-e*y*p)*w,t[10]=(o*M*r-f*a*r+f*i*h-e*M*h-o*i*p+e*a*p)*w,t[11]=(d*a*r-o*y*r-d*i*h+e*y*h+o*i*c-e*a*c)*w,t[12]=L*w,t[13]=(d*M*s-f*y*s+f*i*u-e*M*u-d*i*g+e*y*g)*w,t[14]=(f*a*s-o*M*s-f*i*l+e*M*l+o*i*g-e*a*g)*w,t[15]=(o*y*s-d*a*s+d*i*l-e*y*l-o*i*u+e*a*u)*w,this}scale(t){let e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),s=Math.sin(e),r=1-i,o=t.x,a=t.y,l=t.z,h=r*o,d=r*a;return this.set(h*o+i,h*a-s*l,h*l+s*a,0,h*a+s*l,d*a+i,d*l-s*o,0,h*l-s*a,d*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,h=r+r,d=o+o,y=a+a,u=r*h,c=r*d,f=r*y,M=o*d,g=o*y,p=a*y,S=l*h,v=l*d,_=l*y,L=i.x,A=i.y,w=i.z;return s[0]=(1-(M+p))*L,s[1]=(c+_)*L,s[2]=(f-v)*L,s[3]=0,s[4]=(c-_)*A,s[5]=(1-(u+p))*A,s[6]=(g+S)*A,s[7]=0,s[8]=(f+v)*w,s[9]=(g-S)*w,s[10]=(1-(u+M))*w,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){let s=this.elements,r=bs.set(s[0],s[1],s[2]).length(),o=bs.set(s[4],s[5],s[6]).length(),a=bs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Hn.copy(this);let h=1/r,d=1/o,y=1/a;return Hn.elements[0]*=h,Hn.elements[1]*=h,Hn.elements[2]*=h,Hn.elements[4]*=d,Hn.elements[5]*=d,Hn.elements[6]*=d,Hn.elements[8]*=y,Hn.elements[9]*=y,Hn.elements[10]*=y,e.setFromRotationMatrix(Hn),i.x=r,i.y=o,i.z=a,this}makePerspective(t,e,i,s,r,o,a=pi){let l=this.elements,h=2*r/(e-t),d=2*r/(i-s),y=(e+t)/(e-t),u=(i+s)/(i-s),c,f;if(a===pi)c=-(o+r)/(o-r),f=-2*o*r/(o-r);else if(a===Ho)c=-o/(o-r),f=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=y,l[12]=0,l[1]=0,l[5]=d,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=c,l[14]=f,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,s,r,o,a=pi){let l=this.elements,h=1/(e-t),d=1/(i-s),y=1/(o-r),u=(e+t)*h,c=(i+s)*d,f,M;if(a===pi)f=(o+r)*y,M=-2*y;else if(a===Ho)f=r*y,M=-1*y;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*h,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*d,l[9]=0,l[13]=-c,l[2]=0,l[6]=0,l[10]=M,l[14]=-f,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}},bs=new V,Hn=new Se,mp=new V(0,0,0),gp=new V(1,1,1),Ci=new V,co=new V,Tn=new V,Wh=new Se,Xh=new ni,Gn=class n{constructor(t=0,e=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],h=s[5],d=s[9],y=s[2],u=s[6],c=s[10];switch(e){case"XYZ":this._y=Math.asin(rn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,c),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,h),this._z=0);break;case"YXZ":this._x=Math.asin(-rn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,c),this._z=Math.atan2(l,h)):(this._y=Math.atan2(-y,r),this._z=0);break;case"ZXY":this._x=Math.asin(rn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-y,c),this._z=Math.atan2(-o,h)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-rn(y,-1,1)),Math.abs(y)<.9999999?(this._x=Math.atan2(u,c),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,h));break;case"YZX":this._z=Math.asin(rn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,h),this._y=Math.atan2(-y,r)):(this._x=0,this._y=Math.atan2(a,c));break;case"XZY":this._z=Math.asin(-rn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,h),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-d,c),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Wh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Wh,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Xh.setFromEuler(this),this.setFromQuaternion(Xh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Gn.DEFAULT_ORDER="XYZ";var Xo=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},yp=0,qh=new V,Ss=new ni,ci=new Se,ho=new V,hr=new V,xp=new V,vp=new ni,Yh=new V(1,0,0),Zh=new V(0,1,0),Jh=new V(0,0,1),Kh={type:"added"},_p={type:"removed"},ws={type:"childadded",child:null},ja={type:"childremoved",child:null},Ce=class n extends Oi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:yp++}),this.uuid=ei(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new V,e=new Gn,i=new ni,s=new V(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Se},normalMatrix:{value:new me}}),this.matrix=new Se,this.matrixWorld=new Se,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Xo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ss.setFromAxisAngle(t,e),this.quaternion.multiply(Ss),this}rotateOnWorldAxis(t,e){return Ss.setFromAxisAngle(t,e),this.quaternion.premultiply(Ss),this}rotateX(t){return this.rotateOnAxis(Yh,t)}rotateY(t){return this.rotateOnAxis(Zh,t)}rotateZ(t){return this.rotateOnAxis(Jh,t)}translateOnAxis(t,e){return qh.copy(t).applyQuaternion(this.quaternion),this.position.add(qh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Yh,t)}translateY(t){return this.translateOnAxis(Zh,t)}translateZ(t){return this.translateOnAxis(Jh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ci.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?ho.copy(t):ho.set(t,e,i);let s=this.parent;this.updateWorldMatrix(!0,!1),hr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ci.lookAt(hr,ho,this.up):ci.lookAt(ho,hr,this.up),this.quaternion.setFromRotationMatrix(ci),s&&(ci.extractRotation(s.matrixWorld),Ss.setFromRotationMatrix(ci),this.quaternion.premultiply(Ss.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Kh),ws.child=t,this.dispatchEvent(ws),ws.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(_p),ja.child=t,this.dispatchEvent(ja),ja.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ci.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ci.multiply(t.parent.matrixWorld)),t.applyMatrix4(ci),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Kh),ws.child=t,this.dispatchEvent(ws),ws.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(hr,t,xp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(hr,vp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let h=0,d=l.length;h<d;h++){let y=l[h];r(t.shapes,y)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,h=this.material.length;l<h;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),h=o(t.textures),d=o(t.images),y=o(t.shapes),u=o(t.skeletons),c=o(t.animations),f=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),h.length>0&&(i.textures=h),d.length>0&&(i.images=d),y.length>0&&(i.shapes=y),u.length>0&&(i.skeletons=u),c.length>0&&(i.animations=c),f.length>0&&(i.nodes=f)}return i.object=s,i;function o(a){let l=[];for(let h in a){let d=a[h];delete d.metadata,l.push(d)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}};Ce.DEFAULT_UP=new V(0,1,0);Ce.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ce.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var $n=new V,hi=new V,Qa=new V,di=new V,Es=new V,Ts=new V,jh=new V,tl=new V,el=new V,nl=new V,il=new Ve,sl=new Ve,rl=new Ve,ki=class n{constructor(t=new V,e=new V,i=new V){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),$n.subVectors(t,e),s.cross($n);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){$n.subVectors(s,e),hi.subVectors(i,e),Qa.subVectors(t,e);let o=$n.dot($n),a=$n.dot(hi),l=$n.dot(Qa),h=hi.dot(hi),d=hi.dot(Qa),y=o*h-a*a;if(y===0)return r.set(0,0,0),null;let u=1/y,c=(h*l-a*d)*u,f=(o*d-a*l)*u;return r.set(1-c-f,f,c)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,di)===null?!1:di.x>=0&&di.y>=0&&di.x+di.y<=1}static getInterpolation(t,e,i,s,r,o,a,l){return this.getBarycoord(t,e,i,s,di)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,di.x),l.addScaledVector(o,di.y),l.addScaledVector(a,di.z),l)}static getInterpolatedAttribute(t,e,i,s,r,o){return il.setScalar(0),sl.setScalar(0),rl.setScalar(0),il.fromBufferAttribute(t,e),sl.fromBufferAttribute(t,i),rl.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(il,r.x),o.addScaledVector(sl,r.y),o.addScaledVector(rl,r.z),o}static isFrontFacing(t,e,i,s){return $n.subVectors(i,e),hi.subVectors(t,e),$n.cross(hi).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return $n.subVectors(this.c,this.b),hi.subVectors(this.a,this.b),$n.cross(hi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return n.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return n.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,s=this.b,r=this.c,o,a;Es.subVectors(s,i),Ts.subVectors(r,i),tl.subVectors(t,i);let l=Es.dot(tl),h=Ts.dot(tl);if(l<=0&&h<=0)return e.copy(i);el.subVectors(t,s);let d=Es.dot(el),y=Ts.dot(el);if(d>=0&&y<=d)return e.copy(s);let u=l*y-d*h;if(u<=0&&l>=0&&d<=0)return o=l/(l-d),e.copy(i).addScaledVector(Es,o);nl.subVectors(t,r);let c=Es.dot(nl),f=Ts.dot(nl);if(f>=0&&c<=f)return e.copy(r);let M=c*h-l*f;if(M<=0&&h>=0&&f<=0)return a=h/(h-f),e.copy(i).addScaledVector(Ts,a);let g=d*f-c*y;if(g<=0&&y-d>=0&&c-f>=0)return jh.subVectors(r,s),a=(y-d)/(y-d+(c-f)),e.copy(s).addScaledVector(jh,a);let p=1/(g+M+u);return o=M*p,a=u*p,e.copy(i).addScaledVector(Es,o).addScaledVector(Ts,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},rf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ii={h:0,s:0,l:0},fo={h:0,s:0,l:0};function ol(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}var Jt=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=sn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Me.toWorkingColorSpace(this,e),this}setRGB(t,e,i,s=Me.workingColorSpace){return this.r=t,this.g=e,this.b=i,Me.toWorkingColorSpace(this,s),this}setHSL(t,e,i,s=Me.workingColorSpace){if(t=Qc(t,1),e=rn(e,0,1),i=rn(i,0,1),e===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=ol(o,r,t+1/3),this.g=ol(o,r,t),this.b=ol(o,r,t-1/3)}return Me.toWorkingColorSpace(this,s),this}setStyle(t,e=sn){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=sn){let i=rf[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=mi(t.r),this.g=mi(t.g),this.b=mi(t.b),this}copyLinearToSRGB(t){return this.r=Bs(t.r),this.g=Bs(t.g),this.b=Bs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=sn){return Me.fromWorkingColorSpace(un.copy(this),t),Math.round(rn(un.r*255,0,255))*65536+Math.round(rn(un.g*255,0,255))*256+Math.round(rn(un.b*255,0,255))}getHexString(t=sn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Me.workingColorSpace){Me.fromWorkingColorSpace(un.copy(this),e);let i=un.r,s=un.g,r=un.b,o=Math.max(i,s,r),a=Math.min(i,s,r),l,h,d=(a+o)/2;if(a===o)l=0,h=0;else{let y=o-a;switch(h=d<=.5?y/(o+a):y/(2-o-a),o){case i:l=(s-r)/y+(s<r?6:0);break;case s:l=(r-i)/y+2;break;case r:l=(i-s)/y+4;break}l/=6}return t.h=l,t.s=h,t.l=d,t}getRGB(t,e=Me.workingColorSpace){return Me.fromWorkingColorSpace(un.copy(this),e),t.r=un.r,t.g=un.g,t.b=un.b,t}getStyle(t=sn){Me.fromWorkingColorSpace(un.copy(this),t);let e=un.r,i=un.g,s=un.b;return t!==sn?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(Ii),this.setHSL(Ii.h+t,Ii.s+e,Ii.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Ii),t.getHSL(fo);let i=Mr(Ii.h,fo.h,e),s=Mr(Ii.s,fo.s,e),r=Mr(Ii.l,fo.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},un=new Jt;Jt.NAMES=rf;var Mp=0,vi=class extends Oi{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Mp++}),this.uuid=ei(),this.name="",this.blending=Fs,this.side=Ni,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=bl,this.blendDst=Sl,this.blendEquation=Ki,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Jt(0,0,0),this.blendAlpha=0,this.depthFunc=$s,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Uh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ys,this.stencilZFail=ys,this.stencilZPass=ys,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Fs&&(i.blending=this.blending),this.side!==Ni&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==bl&&(i.blendSrc=this.blendSrc),this.blendDst!==Sl&&(i.blendDst=this.blendDst),this.blendEquation!==Ki&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==$s&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Uh&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ys&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ys&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ys&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Ln=class extends vi{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Jt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gn,this.combine=Vd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Ye=new V,uo=new Nt,Ne=class{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=ac,this.updateRanges=[],this.gpuType=Qn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)uo.fromBufferAttribute(this,e),uo.applyMatrix3(t),this.setXY(e,uo.x,uo.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Ye.fromBufferAttribute(this,e),Ye.applyMatrix3(t),this.setXYZ(e,Ye.x,Ye.y,Ye.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Ye.fromBufferAttribute(this,e),Ye.applyMatrix4(t),this.setXYZ(e,Ye.x,Ye.y,Ye.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Ye.fromBufferAttribute(this,e),Ye.applyNormalMatrix(t),this.setXYZ(e,Ye.x,Ye.y,Ye.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Ye.fromBufferAttribute(this,e),Ye.transformDirection(t),this.setXYZ(e,Ye.x,Ye.y,Ye.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Vn(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Ae(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Vn(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ae(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Vn(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ae(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Vn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ae(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Vn(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ae(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Ae(e,this.array),i=Ae(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=Ae(e,this.array),i=Ae(i,this.array),s=Ae(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=Ae(e,this.array),i=Ae(i,this.array),s=Ae(s,this.array),r=Ae(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==ac&&(t.usage=this.usage),t}};var qo=class extends Ne{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var Yo=class extends Ne{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var ce=class extends Ne{constructor(t,e,i){super(new Float32Array(t),e,i)}},bp=0,Pn=new Se,al=new Ce,As=new V,An=new xi,dr=new xi,nn=new V,Ie=class n extends Oi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:bp++}),this.uuid=ei(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(sf(t)?Yo:qo)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new me().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Pn.makeRotationFromQuaternion(t),this.applyMatrix4(Pn),this}rotateX(t){return Pn.makeRotationX(t),this.applyMatrix4(Pn),this}rotateY(t){return Pn.makeRotationY(t),this.applyMatrix4(Pn),this}rotateZ(t){return Pn.makeRotationZ(t),this.applyMatrix4(Pn),this}translate(t,e,i){return Pn.makeTranslation(t,e,i),this.applyMatrix4(Pn),this}scale(t,e,i){return Pn.makeScale(t,e,i),this.applyMatrix4(Pn),this}lookAt(t){return al.lookAt(t),al.updateMatrix(),this.applyMatrix4(al.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(As).negate(),this.translate(As.x,As.y,As.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ce(i,3))}else{for(let i=0,s=e.count;i<s;i++){let r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new xi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){let r=e[i];An.setFromBufferAttribute(r),this.morphTargetsRelative?(nn.addVectors(this.boundingBox.min,An.min),this.boundingBox.expandByPoint(nn),nn.addVectors(this.boundingBox.max,An.max),this.boundingBox.expandByPoint(nn)):(this.boundingBox.expandByPoint(An.min),this.boundingBox.expandByPoint(An.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Fi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new V,1/0);return}if(t){let i=this.boundingSphere.center;if(An.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];dr.setFromBufferAttribute(a),this.morphTargetsRelative?(nn.addVectors(An.min,dr.min),An.expandByPoint(nn),nn.addVectors(An.max,dr.max),An.expandByPoint(nn)):(An.expandByPoint(dr.min),An.expandByPoint(dr.max))}An.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)nn.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(nn));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let h=0,d=a.count;h<d;h++)nn.fromBufferAttribute(a,h),l&&(As.fromBufferAttribute(t,h),nn.add(As)),s=Math.max(s,i.distanceToSquared(nn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ne(new Float32Array(4*i.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let R=0;R<i.count;R++)a[R]=new V,l[R]=new V;let h=new V,d=new V,y=new V,u=new Nt,c=new Nt,f=new Nt,M=new V,g=new V;function p(R,x,m){h.fromBufferAttribute(i,R),d.fromBufferAttribute(i,x),y.fromBufferAttribute(i,m),u.fromBufferAttribute(r,R),c.fromBufferAttribute(r,x),f.fromBufferAttribute(r,m),d.sub(h),y.sub(h),c.sub(u),f.sub(u);let b=1/(c.x*f.y-f.x*c.y);isFinite(b)&&(M.copy(d).multiplyScalar(f.y).addScaledVector(y,-c.y).multiplyScalar(b),g.copy(y).multiplyScalar(c.x).addScaledVector(d,-f.x).multiplyScalar(b),a[R].add(M),a[x].add(M),a[m].add(M),l[R].add(g),l[x].add(g),l[m].add(g))}let S=this.groups;S.length===0&&(S=[{start:0,count:t.count}]);for(let R=0,x=S.length;R<x;++R){let m=S[R],b=m.start,E=m.count;for(let T=b,k=b+E;T<k;T+=3)p(t.getX(T+0),t.getX(T+1),t.getX(T+2))}let v=new V,_=new V,L=new V,A=new V;function w(R){L.fromBufferAttribute(s,R),A.copy(L);let x=a[R];v.copy(x),v.sub(L.multiplyScalar(L.dot(x))).normalize(),_.crossVectors(A,x);let b=_.dot(l[R])<0?-1:1;o.setXYZW(R,v.x,v.y,v.z,b)}for(let R=0,x=S.length;R<x;++R){let m=S[R],b=m.start,E=m.count;for(let T=b,k=b+E;T<k;T+=3)w(t.getX(T+0)),w(t.getX(T+1)),w(t.getX(T+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Ne(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let u=0,c=i.count;u<c;u++)i.setXYZ(u,0,0,0);let s=new V,r=new V,o=new V,a=new V,l=new V,h=new V,d=new V,y=new V;if(t)for(let u=0,c=t.count;u<c;u+=3){let f=t.getX(u+0),M=t.getX(u+1),g=t.getX(u+2);s.fromBufferAttribute(e,f),r.fromBufferAttribute(e,M),o.fromBufferAttribute(e,g),d.subVectors(o,r),y.subVectors(s,r),d.cross(y),a.fromBufferAttribute(i,f),l.fromBufferAttribute(i,M),h.fromBufferAttribute(i,g),a.add(d),l.add(d),h.add(d),i.setXYZ(f,a.x,a.y,a.z),i.setXYZ(M,l.x,l.y,l.z),i.setXYZ(g,h.x,h.y,h.z)}else for(let u=0,c=e.count;u<c;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),o.fromBufferAttribute(e,u+2),d.subVectors(o,r),y.subVectors(s,r),d.cross(y),i.setXYZ(u+0,d.x,d.y,d.z),i.setXYZ(u+1,d.x,d.y,d.z),i.setXYZ(u+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)nn.fromBufferAttribute(t,e),nn.normalize(),t.setXYZ(e,nn.x,nn.y,nn.z)}toNonIndexed(){function t(a,l){let h=a.array,d=a.itemSize,y=a.normalized,u=new h.constructor(l.length*d),c=0,f=0;for(let M=0,g=l.length;M<g;M++){a.isInterleavedBufferAttribute?c=l[M]*a.data.stride+a.offset:c=l[M]*d;for(let p=0;p<d;p++)u[f++]=h[c++]}return new Ne(u,d,y)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new n,i=this.index.array,s=this.attributes;for(let a in s){let l=s[a],h=t(l,i);e.setAttribute(a,h)}let r=this.morphAttributes;for(let a in r){let l=[],h=r[a];for(let d=0,y=h.length;d<y;d++){let u=h[d],c=t(u,i);l.push(c)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let h=o[a];e.addGroup(h.start,h.count,h.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let h in l)l[h]!==void 0&&(t[h]=l[h]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let l in i){let h=i[l];t.data.attributes[l]=h.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let h=this.morphAttributes[l],d=[];for(let y=0,u=h.length;y<u;y++){let c=h[y];d.push(c.toJSON(t.data))}d.length>0&&(s[l]=d,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone(e));let s=t.attributes;for(let h in s){let d=s[h];this.setAttribute(h,d.clone(e))}let r=t.morphAttributes;for(let h in r){let d=[],y=r[h];for(let u=0,c=y.length;u<c;u++)d.push(y[u].clone(e));this.morphAttributes[h]=d}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let h=0,d=o.length;h<d;h++){let y=o[h];this.addGroup(y.start,y.count,y.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Qh=new Se,Xi=new Wo,po=new Fi,td=new V,mo=new V,go=new V,yo=new V,ll=new V,xo=new V,ed=new V,vo=new V,Pe=class extends Ce{constructor(t=new Ie,e=new Ln){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){xo.set(0,0,0);for(let l=0,h=r.length;l<h;l++){let d=a[l],y=r[l];d!==0&&(ll.fromBufferAttribute(y,t),o?xo.addScaledVector(ll,d):xo.addScaledVector(ll.sub(e),d))}e.add(xo)}return e}raycast(t,e){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),po.copy(i.boundingSphere),po.applyMatrix4(r),Xi.copy(t.ray).recast(t.near),!(po.containsPoint(Xi.origin)===!1&&(Xi.intersectSphere(po,td)===null||Xi.origin.distanceToSquared(td)>(t.far-t.near)**2))&&(Qh.copy(r).invert(),Xi.copy(t.ray).applyMatrix4(Qh),!(i.boundingBox!==null&&Xi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Xi)))}_computeIntersections(t,e,i){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,h=r.attributes.uv,d=r.attributes.uv1,y=r.attributes.normal,u=r.groups,c=r.drawRange;if(a!==null)if(Array.isArray(o))for(let f=0,M=u.length;f<M;f++){let g=u[f],p=o[g.materialIndex],S=Math.max(g.start,c.start),v=Math.min(a.count,Math.min(g.start+g.count,c.start+c.count));for(let _=S,L=v;_<L;_+=3){let A=a.getX(_),w=a.getX(_+1),R=a.getX(_+2);s=_o(this,p,t,i,h,d,y,A,w,R),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let f=Math.max(0,c.start),M=Math.min(a.count,c.start+c.count);for(let g=f,p=M;g<p;g+=3){let S=a.getX(g),v=a.getX(g+1),_=a.getX(g+2);s=_o(this,o,t,i,h,d,y,S,v,_),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let f=0,M=u.length;f<M;f++){let g=u[f],p=o[g.materialIndex],S=Math.max(g.start,c.start),v=Math.min(l.count,Math.min(g.start+g.count,c.start+c.count));for(let _=S,L=v;_<L;_+=3){let A=_,w=_+1,R=_+2;s=_o(this,p,t,i,h,d,y,A,w,R),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let f=Math.max(0,c.start),M=Math.min(l.count,c.start+c.count);for(let g=f,p=M;g<p;g+=3){let S=g,v=g+1,_=g+2;s=_o(this,o,t,i,h,d,y,S,v,_),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}};function Sp(n,t,e,i,s,r,o,a){let l;if(t.side===on?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,t.side===Ni,a),l===null)return null;vo.copy(a),vo.applyMatrix4(n.matrixWorld);let h=e.ray.origin.distanceTo(vo);return h<e.near||h>e.far?null:{distance:h,point:vo.clone(),object:n}}function _o(n,t,e,i,s,r,o,a,l,h){n.getVertexPosition(a,mo),n.getVertexPosition(l,go),n.getVertexPosition(h,yo);let d=Sp(n,t,e,i,mo,go,yo,ed);if(d){let y=new V;ki.getBarycoord(ed,mo,go,yo,y),s&&(d.uv=ki.getInterpolatedAttribute(s,a,l,h,y,new Nt)),r&&(d.uv1=ki.getInterpolatedAttribute(r,a,l,h,y,new Nt)),o&&(d.normal=ki.getInterpolatedAttribute(o,a,l,h,y,new V),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));let u={a,b:l,c:h,normal:new V,materialIndex:0};ki.getNormal(mo,go,yo,u.normal),d.face=u,d.barycoord=y}return d}var _e=class n extends Ie{constructor(t=1,e=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],h=[],d=[],y=[],u=0,c=0;f("z","y","x",-1,-1,i,e,t,o,r,0),f("z","y","x",1,-1,i,e,-t,o,r,1),f("x","z","y",1,1,t,i,e,s,o,2),f("x","z","y",1,-1,t,i,-e,s,o,3),f("x","y","z",1,-1,t,e,i,s,r,4),f("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new ce(h,3)),this.setAttribute("normal",new ce(d,3)),this.setAttribute("uv",new ce(y,2));function f(M,g,p,S,v,_,L,A,w,R,x){let m=_/w,b=L/R,E=_/2,T=L/2,k=A/2,H=w+1,P=R+1,z=0,W=0,q=new V;for(let lt=0;lt<P;lt++){let D=lt*b-T;for(let Et=0;Et<H;Et++){let K=Et*m-E;q[M]=K*S,q[g]=D*v,q[p]=k,h.push(q.x,q.y,q.z),q[M]=0,q[g]=0,q[p]=A>0?1:-1,d.push(q.x,q.y,q.z),y.push(Et/w),y.push(1-lt/R),z+=1}}for(let lt=0;lt<R;lt++)for(let D=0;D<w;D++){let Et=u+D+H*lt,K=u+D+H*(lt+1),$=u+(D+1)+H*(lt+1),j=u+(D+1)+H*lt;l.push(Et,K,j),l.push(K,$,j),W+=6}a.addGroup(c,W,x),c+=W,u+=z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function qs(n){let t={};for(let e in n){t[e]={};for(let i in n[e]){let s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function gn(n){let t={};for(let e=0;e<n.length;e++){let i=qs(n[e]);for(let s in i)t[s]=i[s]}return t}function wp(n){let t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function of(n){let t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Me.workingColorSpace}var th={clone:qs,merge:gn},Ep=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Tp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,vn=class extends vi{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ep,this.fragmentShader=Tp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=qs(t.uniforms),this.uniformsGroups=wp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}},Zo=class extends Ce{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Se,this.projectionMatrix=new Se,this.projectionMatrixInverse=new Se,this.coordinateSystem=pi}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Pi=new V,nd=new Nt,id=new Nt,yn=class extends Zo{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Tr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(_r*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Tr*2*Math.atan(Math.tan(_r*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Pi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Pi.x,Pi.y).multiplyScalar(-t/Pi.z),Pi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Pi.x,Pi.y).multiplyScalar(-t/Pi.z)}getViewSize(t,e){return this.getViewBounds(t,nd,id),e.subVectors(id,nd)}setViewOffset(t,e,i,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(_r*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,h=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*i/h,s*=o.width/l,i*=o.height/h}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Rs=-90,Cs=1,dc=class extends Ce{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new yn(Rs,Cs,t,e);s.layers=this.layers,this.add(s);let r=new yn(Rs,Cs,t,e);r.layers=this.layers,this.add(r);let o=new yn(Rs,Cs,t,e);o.layers=this.layers,this.add(o);let a=new yn(Rs,Cs,t,e);a.layers=this.layers,this.add(a);let l=new yn(Rs,Cs,t,e);l.layers=this.layers,this.add(l);let h=new yn(Rs,Cs,t,e);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,s,r,o,a,l]=e;for(let h of e)this.remove(h);if(t===pi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ho)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let h of e)this.add(h),h.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,h,d]=this.children,y=t.getRenderTarget(),u=t.getActiveCubeFace(),c=t.getActiveMipmapLevel(),f=t.xr.enabled;t.xr.enabled=!1;let M=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,r),t.setRenderTarget(i,1,s),t.render(e,o),t.setRenderTarget(i,2,s),t.render(e,a),t.setRenderTarget(i,3,s),t.render(e,l),t.setRenderTarget(i,4,s),t.render(e,h),i.texture.generateMipmaps=M,t.setRenderTarget(i,5,s),t.render(e,d),t.setRenderTarget(y,u,c),t.xr.enabled=f,i.texture.needsPMREMUpdate=!0}},Jo=class extends Sn{constructor(t,e,i,s,r,o,a,l,h,d){t=t!==void 0?t:[],e=e!==void 0?e:Vs,super(t,e,i,s,r,o,a,l,h,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},fc=class extends yi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new Jo(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:jn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new _e(5,5,5),r=new vn({name:"CubemapFromEquirect",uniforms:qs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:on,blending:Di});r.uniforms.tEquirect.value=e;let o=new Pe(s,r),a=e.minFilter;return e.minFilter===ts&&(e.minFilter=jn),new dc(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,i,s){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,s);t.setRenderTarget(r)}},cl=new V,Ap=new V,Rp=new me,ui=class{constructor(t=new V(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let s=cl.subVectors(i,e).cross(Ap.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let i=t.delta(cl),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||Rp.getNormalMatrix(t),s=this.coplanarPoint(cl).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},qi=new Fi,Mo=new V,Ar=class{constructor(t=new ui,e=new ui,i=new ui,s=new ui,r=new ui,o=new ui){this.planes=[t,e,i,s,r,o]}set(t,e,i,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=pi){let i=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],h=s[4],d=s[5],y=s[6],u=s[7],c=s[8],f=s[9],M=s[10],g=s[11],p=s[12],S=s[13],v=s[14],_=s[15];if(i[0].setComponents(l-r,u-h,g-c,_-p).normalize(),i[1].setComponents(l+r,u+h,g+c,_+p).normalize(),i[2].setComponents(l+o,u+d,g+f,_+S).normalize(),i[3].setComponents(l-o,u-d,g-f,_-S).normalize(),i[4].setComponents(l-a,u-y,g-M,_-v).normalize(),e===pi)i[5].setComponents(l+a,u+y,g+M,_+v).normalize();else if(e===Ho)i[5].setComponents(a,y,M,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),qi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),qi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(qi)}intersectsSprite(t){return qi.center.set(0,0,0),qi.radius=.7071067811865476,qi.applyMatrix4(t.matrixWorld),this.intersectsSphere(qi)}intersectsSphere(t){let e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let s=e[i];if(Mo.x=s.normal.x>0?t.max.x:t.min.x,Mo.y=s.normal.y>0?t.max.y:t.min.y,Mo.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Mo)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function af(){let n=null,t=!1,e=null,i=null;function s(r,o){e(r,o),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function Cp(n){let t=new WeakMap;function e(a,l){let h=a.array,d=a.usage,y=h.byteLength,u=n.createBuffer();n.bindBuffer(l,u),n.bufferData(l,h,d),a.onUploadCallback();let c;if(h instanceof Float32Array)c=n.FLOAT;else if(h instanceof Uint16Array)a.isFloat16BufferAttribute?c=n.HALF_FLOAT:c=n.UNSIGNED_SHORT;else if(h instanceof Int16Array)c=n.SHORT;else if(h instanceof Uint32Array)c=n.UNSIGNED_INT;else if(h instanceof Int32Array)c=n.INT;else if(h instanceof Int8Array)c=n.BYTE;else if(h instanceof Uint8Array)c=n.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)c=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:u,type:c,bytesPerElement:h.BYTES_PER_ELEMENT,version:a.version,size:y}}function i(a,l,h){let d=l.array,y=l.updateRanges;if(n.bindBuffer(h,a),y.length===0)n.bufferSubData(h,0,d);else{y.sort((c,f)=>c.start-f.start);let u=0;for(let c=1;c<y.length;c++){let f=y[u],M=y[c];M.start<=f.start+f.count+1?f.count=Math.max(f.count,M.start+M.count-f.start):(++u,y[u]=M)}y.length=u+1;for(let c=0,f=y.length;c<f;c++){let M=y[c];n.bufferSubData(h,M.start*d.BYTES_PER_ELEMENT,d,M.start,M.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(n.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let d=t.get(a);(!d||d.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let h=t.get(a);if(h===void 0)t.set(a,e(a,l));else if(h.version<a.version){if(h.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(h.buffer,a,l),h.version=a.version}}return{get:s,remove:r,update:o}}var an=class n extends Ie{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(i),l=Math.floor(s),h=a+1,d=l+1,y=t/a,u=e/l,c=[],f=[],M=[],g=[];for(let p=0;p<d;p++){let S=p*u-o;for(let v=0;v<h;v++){let _=v*y-r;f.push(_,-S,0),M.push(0,0,1),g.push(v/a),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let S=0;S<a;S++){let v=S+h*p,_=S+h*(p+1),L=S+1+h*(p+1),A=S+1+h*p;c.push(v,_,A),c.push(_,L,A)}this.setIndex(c),this.setAttribute("position",new ce(f,3)),this.setAttribute("normal",new ce(M,3)),this.setAttribute("uv",new ce(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.widthSegments,t.heightSegments)}},Ip=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Pp=`#ifdef USE_ALPHAHASH
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
#endif`,Lp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,kp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Dp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Up=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Np=`#ifdef USE_AOMAP
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
#endif`,Op=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Fp=`#ifdef USE_BATCHING
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
#endif`,zp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Bp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Hp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,$p=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Vp=`#ifdef USE_IRIDESCENCE
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
#endif`,Gp=`#ifdef USE_BUMPMAP
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
#endif`,Wp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Xp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,qp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Yp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Zp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Jp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Kp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,jp=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Qp=`#define PI 3.141592653589793
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
} // validated`,tm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,em=`vec3 transformedNormal = objectNormal;
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
#endif`,nm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,im=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,sm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,rm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,om="gl_FragColor = linearToOutputTexel( gl_FragColor );",am=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,lm=`#ifdef USE_ENVMAP
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
#endif`,cm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,hm=`#ifdef USE_ENVMAP
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
#endif`,dm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,fm=`#ifdef USE_ENVMAP
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
#endif`,um=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,pm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,mm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,gm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ym=`#ifdef USE_GRADIENTMAP
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
}`,xm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,vm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,_m=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Mm=`uniform bool receiveShadow;
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
#endif`,bm=`#ifdef USE_ENVMAP
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
#endif`,Sm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,wm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Em=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Tm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Am=`PhysicalMaterial material;
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
#endif`,Rm=`struct PhysicalMaterial {
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
}`,Cm=`
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
#endif`,Im=`#if defined( RE_IndirectDiffuse )
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
#endif`,Pm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Lm=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,km=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Dm=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Um=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Nm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Om=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Fm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,zm=`#if defined( USE_POINTS_UV )
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
#endif`,Bm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Hm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,$m=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Vm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Gm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Wm=`#ifdef USE_MORPHTARGETS
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
#endif`,Xm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,qm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Ym=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Zm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Jm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Km=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,jm=`#ifdef USE_NORMALMAP
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
#endif`,Qm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,t0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,e0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,n0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,i0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,s0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,r0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,o0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,a0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,l0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,c0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,h0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,d0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,f0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,u0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,p0=`float getShadowMask() {
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
}`,m0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,g0=`#ifdef USE_SKINNING
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
#endif`,y0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,x0=`#ifdef USE_SKINNING
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
#endif`,v0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,_0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,M0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,b0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,S0=`#ifdef USE_TRANSMISSION
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
#endif`,w0=`#ifdef USE_TRANSMISSION
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
#endif`,E0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,T0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,A0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,R0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,C0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,I0=`uniform sampler2D t2D;
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
}`,P0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,L0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,k0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,D0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,U0=`#include <common>
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
}`,N0=`#if DEPTH_PACKING == 3200
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
}`,O0=`#define DISTANCE
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
}`,F0=`#define DISTANCE
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
}`,z0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,B0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,H0=`uniform float scale;
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
}`,$0=`uniform vec3 diffuse;
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
}`,V0=`#include <common>
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
}`,G0=`uniform vec3 diffuse;
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
}`,W0=`#define LAMBERT
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
}`,X0=`#define LAMBERT
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
}`,q0=`#define MATCAP
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
}`,Y0=`#define MATCAP
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
}`,Z0=`#define NORMAL
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
}`,J0=`#define NORMAL
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
}`,K0=`#define PHONG
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
}`,j0=`#define PHONG
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
}`,Q0=`#define STANDARD
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
}`,tg=`#define STANDARD
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
}`,eg=`#define TOON
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
}`,ng=`#define TOON
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
}`,ig=`uniform float size;
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
}`,sg=`uniform vec3 diffuse;
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
}`,rg=`#include <common>
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
}`,og=`uniform vec3 color;
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
}`,ag=`uniform float rotation;
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
}`,lg=`uniform vec3 diffuse;
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
}`,he={alphahash_fragment:Ip,alphahash_pars_fragment:Pp,alphamap_fragment:Lp,alphamap_pars_fragment:kp,alphatest_fragment:Dp,alphatest_pars_fragment:Up,aomap_fragment:Np,aomap_pars_fragment:Op,batching_pars_vertex:Fp,batching_vertex:zp,begin_vertex:Bp,beginnormal_vertex:Hp,bsdfs:$p,iridescence_fragment:Vp,bumpmap_pars_fragment:Gp,clipping_planes_fragment:Wp,clipping_planes_pars_fragment:Xp,clipping_planes_pars_vertex:qp,clipping_planes_vertex:Yp,color_fragment:Zp,color_pars_fragment:Jp,color_pars_vertex:Kp,color_vertex:jp,common:Qp,cube_uv_reflection_fragment:tm,defaultnormal_vertex:em,displacementmap_pars_vertex:nm,displacementmap_vertex:im,emissivemap_fragment:sm,emissivemap_pars_fragment:rm,colorspace_fragment:om,colorspace_pars_fragment:am,envmap_fragment:lm,envmap_common_pars_fragment:cm,envmap_pars_fragment:hm,envmap_pars_vertex:dm,envmap_physical_pars_fragment:bm,envmap_vertex:fm,fog_vertex:um,fog_pars_vertex:pm,fog_fragment:mm,fog_pars_fragment:gm,gradientmap_pars_fragment:ym,lightmap_pars_fragment:xm,lights_lambert_fragment:vm,lights_lambert_pars_fragment:_m,lights_pars_begin:Mm,lights_toon_fragment:Sm,lights_toon_pars_fragment:wm,lights_phong_fragment:Em,lights_phong_pars_fragment:Tm,lights_physical_fragment:Am,lights_physical_pars_fragment:Rm,lights_fragment_begin:Cm,lights_fragment_maps:Im,lights_fragment_end:Pm,logdepthbuf_fragment:Lm,logdepthbuf_pars_fragment:km,logdepthbuf_pars_vertex:Dm,logdepthbuf_vertex:Um,map_fragment:Nm,map_pars_fragment:Om,map_particle_fragment:Fm,map_particle_pars_fragment:zm,metalnessmap_fragment:Bm,metalnessmap_pars_fragment:Hm,morphinstance_vertex:$m,morphcolor_vertex:Vm,morphnormal_vertex:Gm,morphtarget_pars_vertex:Wm,morphtarget_vertex:Xm,normal_fragment_begin:qm,normal_fragment_maps:Ym,normal_pars_fragment:Zm,normal_pars_vertex:Jm,normal_vertex:Km,normalmap_pars_fragment:jm,clearcoat_normal_fragment_begin:Qm,clearcoat_normal_fragment_maps:t0,clearcoat_pars_fragment:e0,iridescence_pars_fragment:n0,opaque_fragment:i0,packing:s0,premultiplied_alpha_fragment:r0,project_vertex:o0,dithering_fragment:a0,dithering_pars_fragment:l0,roughnessmap_fragment:c0,roughnessmap_pars_fragment:h0,shadowmap_pars_fragment:d0,shadowmap_pars_vertex:f0,shadowmap_vertex:u0,shadowmask_pars_fragment:p0,skinbase_vertex:m0,skinning_pars_vertex:g0,skinning_vertex:y0,skinnormal_vertex:x0,specularmap_fragment:v0,specularmap_pars_fragment:_0,tonemapping_fragment:M0,tonemapping_pars_fragment:b0,transmission_fragment:S0,transmission_pars_fragment:w0,uv_pars_fragment:E0,uv_pars_vertex:T0,uv_vertex:A0,worldpos_vertex:R0,background_vert:C0,background_frag:I0,backgroundCube_vert:P0,backgroundCube_frag:L0,cube_vert:k0,cube_frag:D0,depth_vert:U0,depth_frag:N0,distanceRGBA_vert:O0,distanceRGBA_frag:F0,equirect_vert:z0,equirect_frag:B0,linedashed_vert:H0,linedashed_frag:$0,meshbasic_vert:V0,meshbasic_frag:G0,meshlambert_vert:W0,meshlambert_frag:X0,meshmatcap_vert:q0,meshmatcap_frag:Y0,meshnormal_vert:Z0,meshnormal_frag:J0,meshphong_vert:K0,meshphong_frag:j0,meshphysical_vert:Q0,meshphysical_frag:tg,meshtoon_vert:eg,meshtoon_frag:ng,points_vert:ig,points_frag:sg,shadow_vert:rg,shadow_frag:og,sprite_vert:ag,sprite_frag:lg},$t={common:{diffuse:{value:new Jt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new me},alphaMap:{value:null},alphaMapTransform:{value:new me},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new me}},envmap:{envMap:{value:null},envMapRotation:{value:new me},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new me}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new me}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new me},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new me},normalScale:{value:new Nt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new me},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new me}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new me}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new me}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Jt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Jt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new me},alphaTest:{value:0},uvTransform:{value:new me}},sprite:{diffuse:{value:new Jt(16777215)},opacity:{value:1},center:{value:new Nt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new me},alphaMap:{value:null},alphaMapTransform:{value:new me},alphaTest:{value:0}}},Kn={basic:{uniforms:gn([$t.common,$t.specularmap,$t.envmap,$t.aomap,$t.lightmap,$t.fog]),vertexShader:he.meshbasic_vert,fragmentShader:he.meshbasic_frag},lambert:{uniforms:gn([$t.common,$t.specularmap,$t.envmap,$t.aomap,$t.lightmap,$t.emissivemap,$t.bumpmap,$t.normalmap,$t.displacementmap,$t.fog,$t.lights,{emissive:{value:new Jt(0)}}]),vertexShader:he.meshlambert_vert,fragmentShader:he.meshlambert_frag},phong:{uniforms:gn([$t.common,$t.specularmap,$t.envmap,$t.aomap,$t.lightmap,$t.emissivemap,$t.bumpmap,$t.normalmap,$t.displacementmap,$t.fog,$t.lights,{emissive:{value:new Jt(0)},specular:{value:new Jt(1118481)},shininess:{value:30}}]),vertexShader:he.meshphong_vert,fragmentShader:he.meshphong_frag},standard:{uniforms:gn([$t.common,$t.envmap,$t.aomap,$t.lightmap,$t.emissivemap,$t.bumpmap,$t.normalmap,$t.displacementmap,$t.roughnessmap,$t.metalnessmap,$t.fog,$t.lights,{emissive:{value:new Jt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:he.meshphysical_vert,fragmentShader:he.meshphysical_frag},toon:{uniforms:gn([$t.common,$t.aomap,$t.lightmap,$t.emissivemap,$t.bumpmap,$t.normalmap,$t.displacementmap,$t.gradientmap,$t.fog,$t.lights,{emissive:{value:new Jt(0)}}]),vertexShader:he.meshtoon_vert,fragmentShader:he.meshtoon_frag},matcap:{uniforms:gn([$t.common,$t.bumpmap,$t.normalmap,$t.displacementmap,$t.fog,{matcap:{value:null}}]),vertexShader:he.meshmatcap_vert,fragmentShader:he.meshmatcap_frag},points:{uniforms:gn([$t.points,$t.fog]),vertexShader:he.points_vert,fragmentShader:he.points_frag},dashed:{uniforms:gn([$t.common,$t.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:he.linedashed_vert,fragmentShader:he.linedashed_frag},depth:{uniforms:gn([$t.common,$t.displacementmap]),vertexShader:he.depth_vert,fragmentShader:he.depth_frag},normal:{uniforms:gn([$t.common,$t.bumpmap,$t.normalmap,$t.displacementmap,{opacity:{value:1}}]),vertexShader:he.meshnormal_vert,fragmentShader:he.meshnormal_frag},sprite:{uniforms:gn([$t.sprite,$t.fog]),vertexShader:he.sprite_vert,fragmentShader:he.sprite_frag},background:{uniforms:{uvTransform:{value:new me},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:he.background_vert,fragmentShader:he.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new me}},vertexShader:he.backgroundCube_vert,fragmentShader:he.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:he.cube_vert,fragmentShader:he.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:he.equirect_vert,fragmentShader:he.equirect_frag},distanceRGBA:{uniforms:gn([$t.common,$t.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:he.distanceRGBA_vert,fragmentShader:he.distanceRGBA_frag},shadow:{uniforms:gn([$t.lights,$t.fog,{color:{value:new Jt(0)},opacity:{value:1}}]),vertexShader:he.shadow_vert,fragmentShader:he.shadow_frag}};Kn.physical={uniforms:gn([Kn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new me},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new me},clearcoatNormalScale:{value:new Nt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new me},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new me},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new me},sheen:{value:0},sheenColor:{value:new Jt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new me},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new me},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new me},transmissionSamplerSize:{value:new Nt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new me},attenuationDistance:{value:0},attenuationColor:{value:new Jt(0)},specularColor:{value:new Jt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new me},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new me},anisotropyVector:{value:new Nt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new me}}]),vertexShader:he.meshphysical_vert,fragmentShader:he.meshphysical_frag};var bo={r:0,b:0,g:0},Yi=new Gn,cg=new Se;function hg(n,t,e,i,s,r,o){let a=new Jt(0),l=r===!0?0:1,h,d,y=null,u=0,c=null;function f(S){let v=S.isScene===!0?S.background:null;return v&&v.isTexture&&(v=(S.backgroundBlurriness>0?e:t).get(v)),v}function M(S){let v=!1,_=f(S);_===null?p(a,l):_&&_.isColor&&(p(_,1),v=!0);let L=n.xr.getEnvironmentBlendMode();L==="additive"?i.buffers.color.setClear(0,0,0,1,o):L==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||v)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function g(S,v){let _=f(v);_&&(_.isCubeTexture||_.mapping===ba)?(d===void 0&&(d=new Pe(new _e(1,1,1),new vn({name:"BackgroundCubeMaterial",uniforms:qs(Kn.backgroundCube.uniforms),vertexShader:Kn.backgroundCube.vertexShader,fragmentShader:Kn.backgroundCube.fragmentShader,side:on,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(L,A,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(d)),Yi.copy(v.backgroundRotation),Yi.x*=-1,Yi.y*=-1,Yi.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Yi.y*=-1,Yi.z*=-1),d.material.uniforms.envMap.value=_,d.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(cg.makeRotationFromEuler(Yi)),d.material.toneMapped=Me.getTransfer(_.colorSpace)!==Re,(y!==_||u!==_.version||c!==n.toneMapping)&&(d.material.needsUpdate=!0,y=_,u=_.version,c=n.toneMapping),d.layers.enableAll(),S.unshift(d,d.geometry,d.material,0,0,null)):_&&_.isTexture&&(h===void 0&&(h=new Pe(new an(2,2),new vn({name:"BackgroundMaterial",uniforms:qs(Kn.background.uniforms),vertexShader:Kn.background.vertexShader,fragmentShader:Kn.background.fragmentShader,side:Ni,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(h)),h.material.uniforms.t2D.value=_,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.toneMapped=Me.getTransfer(_.colorSpace)!==Re,_.matrixAutoUpdate===!0&&_.updateMatrix(),h.material.uniforms.uvTransform.value.copy(_.matrix),(y!==_||u!==_.version||c!==n.toneMapping)&&(h.material.needsUpdate=!0,y=_,u=_.version,c=n.toneMapping),h.layers.enableAll(),S.unshift(h,h.geometry,h.material,0,0,null))}function p(S,v){S.getRGB(bo,of(n)),i.buffers.color.setClear(bo.r,bo.g,bo.b,v,o)}return{getClearColor:function(){return a},setClearColor:function(S,v=1){a.set(S),l=v,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(S){l=S,p(a,l)},render:M,addToRenderList:g}}function dg(n,t){let e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=u(null),r=s,o=!1;function a(m,b,E,T,k){let H=!1,P=y(T,E,b);r!==P&&(r=P,h(r.object)),H=c(m,T,E,k),H&&f(m,T,E,k),k!==null&&t.update(k,n.ELEMENT_ARRAY_BUFFER),(H||o)&&(o=!1,_(m,b,E,T),k!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(k).buffer))}function l(){return n.createVertexArray()}function h(m){return n.bindVertexArray(m)}function d(m){return n.deleteVertexArray(m)}function y(m,b,E){let T=E.wireframe===!0,k=i[m.id];k===void 0&&(k={},i[m.id]=k);let H=k[b.id];H===void 0&&(H={},k[b.id]=H);let P=H[T];return P===void 0&&(P=u(l()),H[T]=P),P}function u(m){let b=[],E=[],T=[];for(let k=0;k<e;k++)b[k]=0,E[k]=0,T[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:b,enabledAttributes:E,attributeDivisors:T,object:m,attributes:{},index:null}}function c(m,b,E,T){let k=r.attributes,H=b.attributes,P=0,z=E.getAttributes();for(let W in z)if(z[W].location>=0){let lt=k[W],D=H[W];if(D===void 0&&(W==="instanceMatrix"&&m.instanceMatrix&&(D=m.instanceMatrix),W==="instanceColor"&&m.instanceColor&&(D=m.instanceColor)),lt===void 0||lt.attribute!==D||D&&lt.data!==D.data)return!0;P++}return r.attributesNum!==P||r.index!==T}function f(m,b,E,T){let k={},H=b.attributes,P=0,z=E.getAttributes();for(let W in z)if(z[W].location>=0){let lt=H[W];lt===void 0&&(W==="instanceMatrix"&&m.instanceMatrix&&(lt=m.instanceMatrix),W==="instanceColor"&&m.instanceColor&&(lt=m.instanceColor));let D={};D.attribute=lt,lt&&lt.data&&(D.data=lt.data),k[W]=D,P++}r.attributes=k,r.attributesNum=P,r.index=T}function M(){let m=r.newAttributes;for(let b=0,E=m.length;b<E;b++)m[b]=0}function g(m){p(m,0)}function p(m,b){let E=r.newAttributes,T=r.enabledAttributes,k=r.attributeDivisors;E[m]=1,T[m]===0&&(n.enableVertexAttribArray(m),T[m]=1),k[m]!==b&&(n.vertexAttribDivisor(m,b),k[m]=b)}function S(){let m=r.newAttributes,b=r.enabledAttributes;for(let E=0,T=b.length;E<T;E++)b[E]!==m[E]&&(n.disableVertexAttribArray(E),b[E]=0)}function v(m,b,E,T,k,H,P){P===!0?n.vertexAttribIPointer(m,b,E,k,H):n.vertexAttribPointer(m,b,E,T,k,H)}function _(m,b,E,T){M();let k=T.attributes,H=E.getAttributes(),P=b.defaultAttributeValues;for(let z in H){let W=H[z];if(W.location>=0){let q=k[z];if(q===void 0&&(z==="instanceMatrix"&&m.instanceMatrix&&(q=m.instanceMatrix),z==="instanceColor"&&m.instanceColor&&(q=m.instanceColor)),q!==void 0){let lt=q.normalized,D=q.itemSize,Et=t.get(q);if(Et===void 0)continue;let K=Et.buffer,$=Et.type,j=Et.bytesPerElement,st=$===n.INT||$===n.UNSIGNED_INT||q.gpuType===Xc;if(q.isInterleavedBufferAttribute){let tt=q.data,ht=tt.stride,et=q.offset;if(tt.isInstancedInterleavedBuffer){for(let rt=0;rt<W.locationSize;rt++)p(W.location+rt,tt.meshPerAttribute);m.isInstancedMesh!==!0&&T._maxInstanceCount===void 0&&(T._maxInstanceCount=tt.meshPerAttribute*tt.count)}else for(let rt=0;rt<W.locationSize;rt++)g(W.location+rt);n.bindBuffer(n.ARRAY_BUFFER,K);for(let rt=0;rt<W.locationSize;rt++)v(W.location+rt,D/W.locationSize,$,lt,ht*j,(et+D/W.locationSize*rt)*j,st)}else{if(q.isInstancedBufferAttribute){for(let tt=0;tt<W.locationSize;tt++)p(W.location+tt,q.meshPerAttribute);m.isInstancedMesh!==!0&&T._maxInstanceCount===void 0&&(T._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let tt=0;tt<W.locationSize;tt++)g(W.location+tt);n.bindBuffer(n.ARRAY_BUFFER,K);for(let tt=0;tt<W.locationSize;tt++)v(W.location+tt,D/W.locationSize,$,lt,D*j,D/W.locationSize*tt*j,st)}}else if(P!==void 0){let lt=P[z];if(lt!==void 0)switch(lt.length){case 2:n.vertexAttrib2fv(W.location,lt);break;case 3:n.vertexAttrib3fv(W.location,lt);break;case 4:n.vertexAttrib4fv(W.location,lt);break;default:n.vertexAttrib1fv(W.location,lt)}}}}S()}function L(){R();for(let m in i){let b=i[m];for(let E in b){let T=b[E];for(let k in T)d(T[k].object),delete T[k];delete b[E]}delete i[m]}}function A(m){if(i[m.id]===void 0)return;let b=i[m.id];for(let E in b){let T=b[E];for(let k in T)d(T[k].object),delete T[k];delete b[E]}delete i[m.id]}function w(m){for(let b in i){let E=i[b];if(E[m.id]===void 0)continue;let T=E[m.id];for(let k in T)d(T[k].object),delete T[k];delete E[m.id]}}function R(){x(),o=!0,r!==s&&(r=s,h(r.object))}function x(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:R,resetDefaultState:x,dispose:L,releaseStatesOfGeometry:A,releaseStatesOfProgram:w,initAttributes:M,enableAttribute:g,disableUnusedAttributes:S}}function fg(n,t,e){let i;function s(h){i=h}function r(h,d){n.drawArrays(i,h,d),e.update(d,i,1)}function o(h,d,y){y!==0&&(n.drawArraysInstanced(i,h,d,y),e.update(d,i,y))}function a(h,d,y){if(y===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,h,0,d,0,y);let c=0;for(let f=0;f<y;f++)c+=d[f];e.update(c,i,1)}function l(h,d,y,u){if(y===0)return;let c=t.get("WEBGL_multi_draw");if(c===null)for(let f=0;f<h.length;f++)o(h[f],d[f],u[f]);else{c.multiDrawArraysInstancedWEBGL(i,h,0,d,0,u,0,y);let f=0;for(let M=0;M<y;M++)f+=d[M]*u[M];e.update(f,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function ug(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let w=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(w){return!(w!==Rn&&i.convert(w)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){let R=w===zr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==gi&&i.convert(w)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==Qn&&!R)}function l(w){if(w==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=e.precision!==void 0?e.precision:"highp",d=l(h);d!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",d,"instead."),h=d);let y=e.logarithmicDepthBuffer===!0,u=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),c=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),f=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),S=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),v=n.getParameter(n.MAX_VARYING_VECTORS),_=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),L=f>0,A=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:h,logarithmicDepthBuffer:y,reverseDepthBuffer:u,maxTextures:c,maxVertexTextures:f,maxTextureSize:M,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:S,maxVaryings:v,maxFragmentUniforms:_,vertexTextures:L,maxSamples:A}}function pg(n){let t=this,e=null,i=0,s=!1,r=!1,o=new ui,a=new me,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(y,u){let c=y.length!==0||u||i!==0||s;return s=u,i=y.length,c},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(y,u){e=d(y,u,0)},this.setState=function(y,u,c){let f=y.clippingPlanes,M=y.clipIntersection,g=y.clipShadows,p=n.get(y);if(!s||f===null||f.length===0||r&&!g)r?d(null):h();else{let S=r?0:i,v=S*4,_=p.clippingState||null;l.value=_,_=d(f,u,v,c);for(let L=0;L!==v;++L)_[L]=e[L];p.clippingState=_,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=S}};function h(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function d(y,u,c,f){let M=y!==null?y.length:0,g=null;if(M!==0){if(g=l.value,f!==!0||g===null){let p=c+M*4,S=u.matrixWorldInverse;a.getNormalMatrix(S),(g===null||g.length<p)&&(g=new Float32Array(p));for(let v=0,_=c;v!==M;++v,_+=4)o.copy(y[v]).applyMatrix4(S,a),o.normal.toArray(g,_),g[_+3]=o.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=M,t.numIntersection=0,g}}function mg(n){let t=new WeakMap;function e(o,a){return a===Pl?o.mapping=Vs:a===Ll&&(o.mapping=Gs),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===Pl||a===Ll)if(t.has(o)){let l=t.get(o).texture;return e(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let h=new fc(l.height);return h.fromEquirectangularTexture(n,o),t.set(o,h),o.addEventListener("dispose",s),e(h.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}var Ko=class extends Zo{constructor(t=-1,e=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-t,o=i+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let h=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=h*this.view.offsetX,o=r+h*this.view.width,a-=d*this.view.offsetY,l=a-d*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Ns=4,sd=[.125,.215,.35,.446,.526,.582],ji=20,hl=new Ko,rd=new Jt,dl=null,fl=0,ul=0,pl=!1,Ji=(1+Math.sqrt(5))/2,Is=1/Ji,od=[new V(-Ji,Is,0),new V(Ji,Is,0),new V(-Is,0,Ji),new V(Is,0,Ji),new V(0,Ji,-Is),new V(0,Ji,Is),new V(-1,1,-1),new V(1,1,-1),new V(-1,1,1),new V(1,1,1)],jo=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100){dl=this._renderer.getRenderTarget(),fl=this._renderer.getActiveCubeFace(),ul=this._renderer.getActiveMipmapLevel(),pl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,i,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=cd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ld(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(dl,fl,ul),this._renderer.xr.enabled=pl,t.scissorTest=!1,So(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Vs||t.mapping===Gs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),dl=this._renderer.getRenderTarget(),fl=this._renderer.getActiveCubeFace(),ul=this._renderer.getActiveMipmapLevel(),pl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:jn,minFilter:jn,generateMipmaps:!1,type:zr,format:Rn,colorSpace:Ks,depthBuffer:!1},s=ad(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ad(t,e,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=gg(r)),this._blurMaterial=yg(r,t,e)}return s}_compileMaterial(t){let e=new Pe(this._lodPlanes[0],t);this._renderer.compile(e,hl)}_sceneToCubeUV(t,e,i,s){let a=new yn(90,1,e,i),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,y=d.autoClear,u=d.toneMapping;d.getClearColor(rd),d.toneMapping=ti,d.autoClear=!1;let c=new Ln({name:"PMREM.Background",side:on,depthWrite:!1,depthTest:!1}),f=new Pe(new _e,c),M=!1,g=t.background;g?g.isColor&&(c.color.copy(g),t.background=null,M=!0):(c.color.copy(rd),M=!0);for(let p=0;p<6;p++){let S=p%3;S===0?(a.up.set(0,l[p],0),a.lookAt(h[p],0,0)):S===1?(a.up.set(0,0,l[p]),a.lookAt(0,h[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,h[p]));let v=this._cubeSize;So(s,S*v,p>2?v:0,v,v),d.setRenderTarget(s),M&&d.render(f,a),d.render(t,a)}f.geometry.dispose(),f.material.dispose(),d.toneMapping=u,d.autoClear=y,t.background=g}_textureToCubeUV(t,e){let i=this._renderer,s=t.mapping===Vs||t.mapping===Gs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=cd()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ld());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new Pe(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;So(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(o,hl)}_applyPMREM(t){let e=this._renderer,i=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=od[(s-r-1)%od.length];this._blur(t,r-1,r,o,a)}e.autoClear=i}_blur(t,e,i,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,s,"latitudinal",r),this._halfBlur(o,t,i,i,s,"longitudinal",r)}_halfBlur(t,e,i,s,r,o,a){let l=this._renderer,h=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let d=3,y=new Pe(this._lodPlanes[s],h),u=h.uniforms,c=this._sizeLods[i]-1,f=isFinite(r)?Math.PI/(2*c):2*Math.PI/(2*ji-1),M=r/f,g=isFinite(r)?1+Math.floor(d*M):ji;g>ji&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${ji}`);let p=[],S=0;for(let w=0;w<ji;++w){let R=w/M,x=Math.exp(-R*R/2);p.push(x),w===0?S+=x:w<g&&(S+=2*x)}for(let w=0;w<p.length;w++)p[w]=p[w]/S;u.envMap.value=t.texture,u.samples.value=g,u.weights.value=p,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);let{_lodMax:v}=this;u.dTheta.value=f,u.mipInt.value=v-i;let _=this._sizeLods[s],L=3*_*(s>v-Ns?s-v+Ns:0),A=4*(this._cubeSize-_);So(e,L,A,3*_,2*_),l.setRenderTarget(e),l.render(y,hl)}};function gg(n){let t=[],e=[],i=[],s=n,r=n-Ns+1+sd.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let l=1/a;o>n-Ns?l=sd[o-n+Ns-1]:o===0&&(l=0),i.push(l);let h=1/(a-2),d=-h,y=1+h,u=[d,d,y,d,y,y,d,d,y,y,d,y],c=6,f=6,M=3,g=2,p=1,S=new Float32Array(M*f*c),v=new Float32Array(g*f*c),_=new Float32Array(p*f*c);for(let A=0;A<c;A++){let w=A%3*2/3-1,R=A>2?0:-1,x=[w,R,0,w+2/3,R,0,w+2/3,R+1,0,w,R,0,w+2/3,R+1,0,w,R+1,0];S.set(x,M*f*A),v.set(u,g*f*A);let m=[A,A,A,A,A,A];_.set(m,p*f*A)}let L=new Ie;L.setAttribute("position",new Ne(S,M)),L.setAttribute("uv",new Ne(v,g)),L.setAttribute("faceIndex",new Ne(_,p)),t.push(L),s>Ns&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function ad(n,t,e){let i=new yi(n,t,e);return i.texture.mapping=ba,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function So(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function yg(n,t,e){let i=new Float32Array(ji),s=new V(0,1,0);return new vn({name:"SphericalGaussianBlur",defines:{n:ji,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:eh(),fragmentShader:`

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
		`,blending:Di,depthTest:!1,depthWrite:!1})}function ld(){return new vn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:eh(),fragmentShader:`

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
		`,blending:Di,depthTest:!1,depthWrite:!1})}function cd(){return new vn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:eh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Di,depthTest:!1,depthWrite:!1})}function eh(){return`

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
	`}function xg(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){let l=a.mapping,h=l===Pl||l===Ll,d=l===Vs||l===Gs;if(h||d){let y=t.get(a),u=y!==void 0?y.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==u)return e===null&&(e=new jo(n)),y=h?e.fromEquirectangular(a,y):e.fromCubemap(a,y),y.texture.pmremVersion=a.pmremVersion,t.set(a,y),y.texture;if(y!==void 0)return y.texture;{let c=a.image;return h&&c&&c.height>0||d&&c&&s(c)?(e===null&&(e=new jo(n)),y=h?e.fromEquirectangular(a):e.fromCubemap(a),y.texture.pmremVersion=a.pmremVersion,t.set(a,y),a.addEventListener("dispose",r),y.texture):null}}}return a}function s(a){let l=0,h=6;for(let d=0;d<h;d++)a[d]!==void 0&&l++;return l===h}function r(a){let l=a.target;l.removeEventListener("dispose",r);let h=t.get(l);h!==void 0&&(t.delete(l),h.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function vg(n){let t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let s=e(i);return s===null&&xr("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function _g(n,t,e,i){let s={},r=new WeakMap;function o(y){let u=y.target;u.index!==null&&t.remove(u.index);for(let f in u.attributes)t.remove(u.attributes[f]);for(let f in u.morphAttributes){let M=u.morphAttributes[f];for(let g=0,p=M.length;g<p;g++)t.remove(M[g])}u.removeEventListener("dispose",o),delete s[u.id];let c=r.get(u);c&&(t.remove(c),r.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function a(y,u){return s[u.id]===!0||(u.addEventListener("dispose",o),s[u.id]=!0,e.memory.geometries++),u}function l(y){let u=y.attributes;for(let f in u)t.update(u[f],n.ARRAY_BUFFER);let c=y.morphAttributes;for(let f in c){let M=c[f];for(let g=0,p=M.length;g<p;g++)t.update(M[g],n.ARRAY_BUFFER)}}function h(y){let u=[],c=y.index,f=y.attributes.position,M=0;if(c!==null){let S=c.array;M=c.version;for(let v=0,_=S.length;v<_;v+=3){let L=S[v+0],A=S[v+1],w=S[v+2];u.push(L,A,A,w,w,L)}}else if(f!==void 0){let S=f.array;M=f.version;for(let v=0,_=S.length/3-1;v<_;v+=3){let L=v+0,A=v+1,w=v+2;u.push(L,A,A,w,w,L)}}else return;let g=new(sf(u)?Yo:qo)(u,1);g.version=M;let p=r.get(y);p&&t.remove(p),r.set(y,g)}function d(y){let u=r.get(y);if(u){let c=y.index;c!==null&&u.version<c.version&&h(y)}else h(y);return r.get(y)}return{get:a,update:l,getWireframeAttribute:d}}function Mg(n,t,e){let i;function s(u){i=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function l(u,c){n.drawElements(i,c,r,u*o),e.update(c,i,1)}function h(u,c,f){f!==0&&(n.drawElementsInstanced(i,c,r,u*o,f),e.update(c,i,f))}function d(u,c,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,c,0,r,u,0,f);let g=0;for(let p=0;p<f;p++)g+=c[p];e.update(g,i,1)}function y(u,c,f,M){if(f===0)return;let g=t.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<u.length;p++)h(u[p]/o,c[p],M[p]);else{g.multiDrawElementsInstancedWEBGL(i,c,0,r,u,0,M,0,f);let p=0;for(let S=0;S<f;S++)p+=c[S]*M[S];e.update(p,i,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=y}function bg(n){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(r/3);break;case n.LINES:e.lines+=a*(r/2);break;case n.LINE_STRIP:e.lines+=a*(r-1);break;case n.LINE_LOOP:e.lines+=a*r;break;case n.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function Sg(n,t,e){let i=new WeakMap,s=new Ve;function r(o,a,l){let h=o.morphTargetInfluences,d=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,y=d!==void 0?d.length:0,u=i.get(a);if(u===void 0||u.count!==y){let x=function(){w.dispose(),i.delete(a),a.removeEventListener("dispose",x)};u!==void 0&&u.texture.dispose();let c=a.morphAttributes.position!==void 0,f=a.morphAttributes.normal!==void 0,M=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],S=a.morphAttributes.color||[],v=0;c===!0&&(v=1),f===!0&&(v=2),M===!0&&(v=3);let _=a.attributes.position.count*v,L=1;_>t.maxTextureSize&&(L=Math.ceil(_/t.maxTextureSize),_=t.maxTextureSize);let A=new Float32Array(_*L*4*y),w=new Go(A,_,L,y);w.type=Qn,w.needsUpdate=!0;let R=v*4;for(let m=0;m<y;m++){let b=g[m],E=p[m],T=S[m],k=_*L*4*m;for(let H=0;H<b.count;H++){let P=H*R;c===!0&&(s.fromBufferAttribute(b,H),A[k+P+0]=s.x,A[k+P+1]=s.y,A[k+P+2]=s.z,A[k+P+3]=0),f===!0&&(s.fromBufferAttribute(E,H),A[k+P+4]=s.x,A[k+P+5]=s.y,A[k+P+6]=s.z,A[k+P+7]=0),M===!0&&(s.fromBufferAttribute(T,H),A[k+P+8]=s.x,A[k+P+9]=s.y,A[k+P+10]=s.z,A[k+P+11]=T.itemSize===4?s.w:1)}}u={count:y,texture:w,size:new Nt(_,L)},i.set(a,u),a.addEventListener("dispose",x)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let c=0;for(let M=0;M<h.length;M++)c+=h[M];let f=a.morphTargetsRelative?1:1-c;l.getUniforms().setValue(n,"morphTargetBaseInfluence",f),l.getUniforms().setValue(n,"morphTargetInfluences",h)}l.getUniforms().setValue(n,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",u.size)}return{update:r}}function wg(n,t,e,i){let s=new WeakMap;function r(l){let h=i.render.frame,d=l.geometry,y=t.get(l,d);if(s.get(y)!==h&&(t.update(y),s.set(y,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==h&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,h))),l.isSkinnedMesh){let u=l.skeleton;s.get(u)!==h&&(u.update(),s.set(u,h))}return y}function o(){s=new WeakMap}function a(l){let h=l.target;h.removeEventListener("dispose",a),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:r,dispose:o}}var Qo=class extends Sn{constructor(t,e,i,s,r,o,a,l,h,d=zs){if(d!==zs&&d!==Xs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&d===zs&&(i=ns),i===void 0&&d===Xs&&(i=Ws),super(null,s,r,o,a,l,d,i,h),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:xn,this.minFilter=l!==void 0?l:xn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},lf=new Sn,hd=new Qo(1,1),cf=new Go,hf=new hc,df=new Jo,dd=[],fd=[],ud=new Float32Array(16),pd=new Float32Array(9),md=new Float32Array(4);function js(n,t,e){let i=n[0];if(i<=0||i>0)return n;let s=t*e,r=dd[s];if(r===void 0&&(r=new Float32Array(s),dd[s]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(r,a)}return r}function Ke(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function je(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function wa(n,t){let e=fd[t];e===void 0&&(e=new Int32Array(t),fd[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function Eg(n,t){let e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function Tg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ke(e,t))return;n.uniform2fv(this.addr,t),je(e,t)}}function Ag(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ke(e,t))return;n.uniform3fv(this.addr,t),je(e,t)}}function Rg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ke(e,t))return;n.uniform4fv(this.addr,t),je(e,t)}}function Cg(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Ke(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),je(e,t)}else{if(Ke(e,i))return;md.set(i),n.uniformMatrix2fv(this.addr,!1,md),je(e,i)}}function Ig(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Ke(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),je(e,t)}else{if(Ke(e,i))return;pd.set(i),n.uniformMatrix3fv(this.addr,!1,pd),je(e,i)}}function Pg(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Ke(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),je(e,t)}else{if(Ke(e,i))return;ud.set(i),n.uniformMatrix4fv(this.addr,!1,ud),je(e,i)}}function Lg(n,t){let e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function kg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ke(e,t))return;n.uniform2iv(this.addr,t),je(e,t)}}function Dg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ke(e,t))return;n.uniform3iv(this.addr,t),je(e,t)}}function Ug(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ke(e,t))return;n.uniform4iv(this.addr,t),je(e,t)}}function Ng(n,t){let e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function Og(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ke(e,t))return;n.uniform2uiv(this.addr,t),je(e,t)}}function Fg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ke(e,t))return;n.uniform3uiv(this.addr,t),je(e,t)}}function zg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ke(e,t))return;n.uniform4uiv(this.addr,t),je(e,t)}}function Bg(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(hd.compareFunction=ef,r=hd):r=lf,e.setTexture2D(t||r,s)}function Hg(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||hf,s)}function $g(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||df,s)}function Vg(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||cf,s)}function Gg(n){switch(n){case 5126:return Eg;case 35664:return Tg;case 35665:return Ag;case 35666:return Rg;case 35674:return Cg;case 35675:return Ig;case 35676:return Pg;case 5124:case 35670:return Lg;case 35667:case 35671:return kg;case 35668:case 35672:return Dg;case 35669:case 35673:return Ug;case 5125:return Ng;case 36294:return Og;case 36295:return Fg;case 36296:return zg;case 35678:case 36198:case 36298:case 36306:case 35682:return Bg;case 35679:case 36299:case 36307:return Hg;case 35680:case 36300:case 36308:case 36293:return $g;case 36289:case 36303:case 36311:case 36292:return Vg}}function Wg(n,t){n.uniform1fv(this.addr,t)}function Xg(n,t){let e=js(t,this.size,2);n.uniform2fv(this.addr,e)}function qg(n,t){let e=js(t,this.size,3);n.uniform3fv(this.addr,e)}function Yg(n,t){let e=js(t,this.size,4);n.uniform4fv(this.addr,e)}function Zg(n,t){let e=js(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function Jg(n,t){let e=js(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function Kg(n,t){let e=js(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function jg(n,t){n.uniform1iv(this.addr,t)}function Qg(n,t){n.uniform2iv(this.addr,t)}function ty(n,t){n.uniform3iv(this.addr,t)}function ey(n,t){n.uniform4iv(this.addr,t)}function ny(n,t){n.uniform1uiv(this.addr,t)}function iy(n,t){n.uniform2uiv(this.addr,t)}function sy(n,t){n.uniform3uiv(this.addr,t)}function ry(n,t){n.uniform4uiv(this.addr,t)}function oy(n,t,e){let i=this.cache,s=t.length,r=wa(e,s);Ke(i,r)||(n.uniform1iv(this.addr,r),je(i,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||lf,r[o])}function ay(n,t,e){let i=this.cache,s=t.length,r=wa(e,s);Ke(i,r)||(n.uniform1iv(this.addr,r),je(i,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||hf,r[o])}function ly(n,t,e){let i=this.cache,s=t.length,r=wa(e,s);Ke(i,r)||(n.uniform1iv(this.addr,r),je(i,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||df,r[o])}function cy(n,t,e){let i=this.cache,s=t.length,r=wa(e,s);Ke(i,r)||(n.uniform1iv(this.addr,r),je(i,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||cf,r[o])}function hy(n){switch(n){case 5126:return Wg;case 35664:return Xg;case 35665:return qg;case 35666:return Yg;case 35674:return Zg;case 35675:return Jg;case 35676:return Kg;case 5124:case 35670:return jg;case 35667:case 35671:return Qg;case 35668:case 35672:return ty;case 35669:case 35673:return ey;case 5125:return ny;case 36294:return iy;case 36295:return sy;case 36296:return ry;case 35678:case 36198:case 36298:case 36306:case 35682:return oy;case 35679:case 36299:case 36307:return ay;case 35680:case 36300:case 36308:case 36293:return ly;case 36289:case 36303:case 36311:case 36292:return cy}}var uc=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=Gg(e.type)}},pc=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=hy(e.type)}},mc=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],i)}}},ml=/(\w+)(\])?(\[|\.)?/g;function gd(n,t){n.seq.push(t),n.map[t.id]=t}function dy(n,t,e){let i=n.name,s=i.length;for(ml.lastIndex=0;;){let r=ml.exec(i),o=ml.lastIndex,a=r[1],l=r[2]==="]",h=r[3];if(l&&(a=a|0),h===void 0||h==="["&&o+2===s){gd(e,h===void 0?new uc(a,n,t):new pc(a,n,t));break}else{let y=e.map[a];y===void 0&&(y=new mc(a),gd(e,y)),e=y}}}var Hs=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);dy(r,o,this)}}setValue(t,e,i,s){let r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){let s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let i=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&i.push(o)}return i}};function yd(n,t,e){let i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}var fy=37297,uy=0;function py(n,t){let e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}var xd=new me;function my(n){Me._getMatrix(xd,Me.workingColorSpace,n);let t=`mat3( ${xd.elements.map(e=>e.toFixed(4))} )`;switch(Me.getTransfer(n)){case Sa:return[t,"LinearTransferOETF"];case Re:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function vd(n,t,e){let i=n.getShaderParameter(t,n.COMPILE_STATUS),s=n.getShaderInfoLog(t).trim();if(i&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+py(n.getShaderSource(t),o)}else return s}function gy(n,t){let e=my(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function yy(n,t){let e;switch(t){case Ru:e="Linear";break;case Cu:e="Reinhard";break;case Iu:e="Cineon";break;case Pu:e="ACESFilmic";break;case ku:e="AgX";break;case Du:e="Neutral";break;case Lu:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var wo=new V;function xy(){Me.getLuminanceCoefficients(wo);let n=wo.x.toFixed(4),t=wo.y.toFixed(4),e=wo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function vy(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(vr).join(`
`)}function _y(n){let t=[];for(let e in n){let i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function My(n,t){let e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(t,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function vr(n){return n!==""}function _d(n,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Md(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var by=/^[ \t]*#include +<([\w\d./]+)>/gm;function gc(n){return n.replace(by,wy)}var Sy=new Map;function wy(n,t){let e=he[t];if(e===void 0){let i=Sy.get(t);if(i!==void 0)e=he[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return gc(e)}var Ey=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function bd(n){return n.replace(Ey,Ty)}function Ty(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Sd(n){let t=`precision ${n.precision} float;
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
#define LOW_PRECISION`),t}function Ay(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===$d?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===Wc?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===fi&&(t="SHADOWMAP_TYPE_VSM"),t}function Ry(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Vs:case Gs:t="ENVMAP_TYPE_CUBE";break;case ba:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Cy(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Gs:t="ENVMAP_MODE_REFRACTION";break}return t}function Iy(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Vd:t="ENVMAP_BLENDING_MULTIPLY";break;case Tu:t="ENVMAP_BLENDING_MIX";break;case Au:t="ENVMAP_BLENDING_ADD";break}return t}function Py(n){let t=n.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function Ly(n,t,e,i){let s=n.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=Ay(e),h=Ry(e),d=Cy(e),y=Iy(e),u=Py(e),c=vy(e),f=_y(r),M=s.createProgram(),g,p,S=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f].filter(vr).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f].filter(vr).join(`
`),p.length>0&&(p+=`
`)):(g=[Sd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+d:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(vr).join(`
`),p=[Sd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",e.envMap?"#define "+y:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ti?"#define TONE_MAPPING":"",e.toneMapping!==ti?he.tonemapping_pars_fragment:"",e.toneMapping!==ti?yy("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",he.colorspace_pars_fragment,gy("linearToOutputTexel",e.outputColorSpace),xy(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(vr).join(`
`)),o=gc(o),o=_d(o,e),o=Md(o,e),a=gc(a),a=_d(a,e),a=Md(a,e),o=bd(o),a=bd(a),e.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,g=[c,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",e.glslVersion===Nh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Nh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let v=S+g+o,_=S+p+a,L=yd(s,s.VERTEX_SHADER,v),A=yd(s,s.FRAGMENT_SHADER,_);s.attachShader(M,L),s.attachShader(M,A),e.index0AttributeName!==void 0?s.bindAttribLocation(M,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(M,0,"position"),s.linkProgram(M);function w(b){if(n.debug.checkShaderErrors){let E=s.getProgramInfoLog(M).trim(),T=s.getShaderInfoLog(L).trim(),k=s.getShaderInfoLog(A).trim(),H=!0,P=!0;if(s.getProgramParameter(M,s.LINK_STATUS)===!1)if(H=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,M,L,A);else{let z=vd(s,L,"vertex"),W=vd(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(M,s.VALIDATE_STATUS)+`

Material Name: `+b.name+`
Material Type: `+b.type+`

Program Info Log: `+E+`
`+z+`
`+W)}else E!==""?console.warn("THREE.WebGLProgram: Program Info Log:",E):(T===""||k==="")&&(P=!1);P&&(b.diagnostics={runnable:H,programLog:E,vertexShader:{log:T,prefix:g},fragmentShader:{log:k,prefix:p}})}s.deleteShader(L),s.deleteShader(A),R=new Hs(s,M),x=My(s,M)}let R;this.getUniforms=function(){return R===void 0&&w(this),R};let x;this.getAttributes=function(){return x===void 0&&w(this),x};let m=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return m===!1&&(m=s.getProgramParameter(M,fy)),m},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(M),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=uy++,this.cacheKey=t,this.usedTimes=1,this.program=M,this.vertexShader=L,this.fragmentShader=A,this}var ky=0,yc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new xc(t),e.set(t,i)),i}},xc=class{constructor(t){this.id=ky++,this.code=t,this.usedTimes=0}};function Dy(n,t,e,i,s,r,o){let a=new Xo,l=new yc,h=new Set,d=[],y=s.logarithmicDepthBuffer,u=s.vertexTextures,c=s.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(x){return h.add(x),x===0?"uv":`uv${x}`}function g(x,m,b,E,T){let k=E.fog,H=T.geometry,P=x.isMeshStandardMaterial?E.environment:null,z=(x.isMeshStandardMaterial?e:t).get(x.envMap||P),W=z&&z.mapping===ba?z.image.height:null,q=f[x.type];x.precision!==null&&(c=s.getMaxPrecision(x.precision),c!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",c,"instead."));let lt=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,D=lt!==void 0?lt.length:0,Et=0;H.morphAttributes.position!==void 0&&(Et=1),H.morphAttributes.normal!==void 0&&(Et=2),H.morphAttributes.color!==void 0&&(Et=3);let K,$,j,st;if(q){let X=Kn[q];K=X.vertexShader,$=X.fragmentShader}else K=x.vertexShader,$=x.fragmentShader,l.update(x),j=l.getVertexShaderID(x),st=l.getFragmentShaderID(x);let tt=n.getRenderTarget(),ht=n.state.buffers.depth.getReversed(),et=T.isInstancedMesh===!0,rt=T.isBatchedMesh===!0,gt=!!x.map,nt=!!x.matcap,yt=!!z,G=!!x.aoMap,Ft=!!x.lightMap,At=!!x.bumpMap,_t=!!x.normalMap,Ut=!!x.displacementMap,ot=!!x.emissiveMap,Ot=!!x.metalnessMap,O=!!x.roughnessMap,N=x.anisotropy>0,pt=x.clearcoat>0,Ct=x.dispersion>0,kt=x.iridescence>0,it=x.sheen>0,dt=x.transmission>0,ct=N&&!!x.anisotropyMap,vt=pt&&!!x.clearcoatMap,St=pt&&!!x.clearcoatNormalMap,Rt=pt&&!!x.clearcoatRoughnessMap,It=kt&&!!x.iridescenceMap,Ht=kt&&!!x.iridescenceThicknessMap,Gt=it&&!!x.sheenColorMap,Vt=it&&!!x.sheenRoughnessMap,le=!!x.specularMap,Zt=!!x.specularColorMap,C=!!x.specularIntensityMap,U=dt&&!!x.transmissionMap,Z=dt&&!!x.thicknessMap,B=!!x.gradientMap,J=!!x.alphaMap,Y=x.alphaTest>0,at=!!x.alphaHash,Pt=!!x.extensions,Tt=ti;x.toneMapped&&(tt===null||tt.isXRRenderTarget===!0)&&(Tt=n.toneMapping);let I={shaderID:q,shaderType:x.type,shaderName:x.name,vertexShader:K,fragmentShader:$,defines:x.defines,customVertexShaderID:j,customFragmentShaderID:st,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:c,batching:rt,batchingColor:rt&&T._colorsTexture!==null,instancing:et,instancingColor:et&&T.instanceColor!==null,instancingMorph:et&&T.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:tt===null?n.outputColorSpace:tt.isXRRenderTarget===!0?tt.texture.colorSpace:Ks,alphaToCoverage:!!x.alphaToCoverage,map:gt,matcap:nt,envMap:yt,envMapMode:yt&&z.mapping,envMapCubeUVHeight:W,aoMap:G,lightMap:Ft,bumpMap:At,normalMap:_t,displacementMap:u&&Ut,emissiveMap:ot,normalMapObjectSpace:_t&&x.normalMapType===Fu,normalMapTangentSpace:_t&&x.normalMapType===tf,metalnessMap:Ot,roughnessMap:O,anisotropy:N,anisotropyMap:ct,clearcoat:pt,clearcoatMap:vt,clearcoatNormalMap:St,clearcoatRoughnessMap:Rt,dispersion:Ct,iridescence:kt,iridescenceMap:It,iridescenceThicknessMap:Ht,sheen:it,sheenColorMap:Gt,sheenRoughnessMap:Vt,specularMap:le,specularColorMap:Zt,specularIntensityMap:C,transmission:dt,transmissionMap:U,thicknessMap:Z,gradientMap:B,opaque:x.transparent===!1&&x.blending===Fs&&x.alphaToCoverage===!1,alphaMap:J,alphaTest:Y,alphaHash:at,combine:x.combine,mapUv:gt&&M(x.map.channel),aoMapUv:G&&M(x.aoMap.channel),lightMapUv:Ft&&M(x.lightMap.channel),bumpMapUv:At&&M(x.bumpMap.channel),normalMapUv:_t&&M(x.normalMap.channel),displacementMapUv:Ut&&M(x.displacementMap.channel),emissiveMapUv:ot&&M(x.emissiveMap.channel),metalnessMapUv:Ot&&M(x.metalnessMap.channel),roughnessMapUv:O&&M(x.roughnessMap.channel),anisotropyMapUv:ct&&M(x.anisotropyMap.channel),clearcoatMapUv:vt&&M(x.clearcoatMap.channel),clearcoatNormalMapUv:St&&M(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Rt&&M(x.clearcoatRoughnessMap.channel),iridescenceMapUv:It&&M(x.iridescenceMap.channel),iridescenceThicknessMapUv:Ht&&M(x.iridescenceThicknessMap.channel),sheenColorMapUv:Gt&&M(x.sheenColorMap.channel),sheenRoughnessMapUv:Vt&&M(x.sheenRoughnessMap.channel),specularMapUv:le&&M(x.specularMap.channel),specularColorMapUv:Zt&&M(x.specularColorMap.channel),specularIntensityMapUv:C&&M(x.specularIntensityMap.channel),transmissionMapUv:U&&M(x.transmissionMap.channel),thicknessMapUv:Z&&M(x.thicknessMap.channel),alphaMapUv:J&&M(x.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(_t||N),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:T.isPoints===!0&&!!H.attributes.uv&&(gt||J),fog:!!k,useFog:x.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:y,reverseDepthBuffer:ht,skinning:T.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:D,morphTextureStride:Et,numDirLights:m.directional.length,numPointLights:m.point.length,numSpotLights:m.spot.length,numSpotLightMaps:m.spotLightMap.length,numRectAreaLights:m.rectArea.length,numHemiLights:m.hemi.length,numDirLightShadows:m.directionalShadowMap.length,numPointLightShadows:m.pointShadowMap.length,numSpotLightShadows:m.spotShadowMap.length,numSpotLightShadowsWithMaps:m.numSpotLightShadowsWithMaps,numLightProbes:m.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:x.dithering,shadowMapEnabled:n.shadowMap.enabled&&b.length>0,shadowMapType:n.shadowMap.type,toneMapping:Tt,decodeVideoTexture:gt&&x.map.isVideoTexture===!0&&Me.getTransfer(x.map.colorSpace)===Re,decodeVideoTextureEmissive:ot&&x.emissiveMap.isVideoTexture===!0&&Me.getTransfer(x.emissiveMap.colorSpace)===Re,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===We,flipSided:x.side===on,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:Pt&&x.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Pt&&x.extensions.multiDraw===!0||rt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return I.vertexUv1s=h.has(1),I.vertexUv2s=h.has(2),I.vertexUv3s=h.has(3),h.clear(),I}function p(x){let m=[];if(x.shaderID?m.push(x.shaderID):(m.push(x.customVertexShaderID),m.push(x.customFragmentShaderID)),x.defines!==void 0)for(let b in x.defines)m.push(b),m.push(x.defines[b]);return x.isRawShaderMaterial===!1&&(S(m,x),v(m,x),m.push(n.outputColorSpace)),m.push(x.customProgramCacheKey),m.join()}function S(x,m){x.push(m.precision),x.push(m.outputColorSpace),x.push(m.envMapMode),x.push(m.envMapCubeUVHeight),x.push(m.mapUv),x.push(m.alphaMapUv),x.push(m.lightMapUv),x.push(m.aoMapUv),x.push(m.bumpMapUv),x.push(m.normalMapUv),x.push(m.displacementMapUv),x.push(m.emissiveMapUv),x.push(m.metalnessMapUv),x.push(m.roughnessMapUv),x.push(m.anisotropyMapUv),x.push(m.clearcoatMapUv),x.push(m.clearcoatNormalMapUv),x.push(m.clearcoatRoughnessMapUv),x.push(m.iridescenceMapUv),x.push(m.iridescenceThicknessMapUv),x.push(m.sheenColorMapUv),x.push(m.sheenRoughnessMapUv),x.push(m.specularMapUv),x.push(m.specularColorMapUv),x.push(m.specularIntensityMapUv),x.push(m.transmissionMapUv),x.push(m.thicknessMapUv),x.push(m.combine),x.push(m.fogExp2),x.push(m.sizeAttenuation),x.push(m.morphTargetsCount),x.push(m.morphAttributeCount),x.push(m.numDirLights),x.push(m.numPointLights),x.push(m.numSpotLights),x.push(m.numSpotLightMaps),x.push(m.numHemiLights),x.push(m.numRectAreaLights),x.push(m.numDirLightShadows),x.push(m.numPointLightShadows),x.push(m.numSpotLightShadows),x.push(m.numSpotLightShadowsWithMaps),x.push(m.numLightProbes),x.push(m.shadowMapType),x.push(m.toneMapping),x.push(m.numClippingPlanes),x.push(m.numClipIntersection),x.push(m.depthPacking)}function v(x,m){a.disableAll(),m.supportsVertexTextures&&a.enable(0),m.instancing&&a.enable(1),m.instancingColor&&a.enable(2),m.instancingMorph&&a.enable(3),m.matcap&&a.enable(4),m.envMap&&a.enable(5),m.normalMapObjectSpace&&a.enable(6),m.normalMapTangentSpace&&a.enable(7),m.clearcoat&&a.enable(8),m.iridescence&&a.enable(9),m.alphaTest&&a.enable(10),m.vertexColors&&a.enable(11),m.vertexAlphas&&a.enable(12),m.vertexUv1s&&a.enable(13),m.vertexUv2s&&a.enable(14),m.vertexUv3s&&a.enable(15),m.vertexTangents&&a.enable(16),m.anisotropy&&a.enable(17),m.alphaHash&&a.enable(18),m.batching&&a.enable(19),m.dispersion&&a.enable(20),m.batchingColor&&a.enable(21),x.push(a.mask),a.disableAll(),m.fog&&a.enable(0),m.useFog&&a.enable(1),m.flatShading&&a.enable(2),m.logarithmicDepthBuffer&&a.enable(3),m.reverseDepthBuffer&&a.enable(4),m.skinning&&a.enable(5),m.morphTargets&&a.enable(6),m.morphNormals&&a.enable(7),m.morphColors&&a.enable(8),m.premultipliedAlpha&&a.enable(9),m.shadowMapEnabled&&a.enable(10),m.doubleSided&&a.enable(11),m.flipSided&&a.enable(12),m.useDepthPacking&&a.enable(13),m.dithering&&a.enable(14),m.transmission&&a.enable(15),m.sheen&&a.enable(16),m.opaque&&a.enable(17),m.pointsUvs&&a.enable(18),m.decodeVideoTexture&&a.enable(19),m.decodeVideoTextureEmissive&&a.enable(20),m.alphaToCoverage&&a.enable(21),x.push(a.mask)}function _(x){let m=f[x.type],b;if(m){let E=Kn[m];b=th.clone(E.uniforms)}else b=x.uniforms;return b}function L(x,m){let b;for(let E=0,T=d.length;E<T;E++){let k=d[E];if(k.cacheKey===m){b=k,++b.usedTimes;break}}return b===void 0&&(b=new Ly(n,m,x,r),d.push(b)),b}function A(x){if(--x.usedTimes===0){let m=d.indexOf(x);d[m]=d[d.length-1],d.pop(),x.destroy()}}function w(x){l.remove(x)}function R(){l.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:_,acquireProgram:L,releaseProgram:A,releaseShaderCache:w,programs:d,dispose:R}}function Uy(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function Ny(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function wd(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Ed(){let n=[],t=0,e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function o(y,u,c,f,M,g){let p=n[t];return p===void 0?(p={id:y.id,object:y,geometry:u,material:c,groupOrder:f,renderOrder:y.renderOrder,z:M,group:g},n[t]=p):(p.id=y.id,p.object=y,p.geometry=u,p.material=c,p.groupOrder=f,p.renderOrder=y.renderOrder,p.z=M,p.group=g),t++,p}function a(y,u,c,f,M,g){let p=o(y,u,c,f,M,g);c.transmission>0?i.push(p):c.transparent===!0?s.push(p):e.push(p)}function l(y,u,c,f,M,g){let p=o(y,u,c,f,M,g);c.transmission>0?i.unshift(p):c.transparent===!0?s.unshift(p):e.unshift(p)}function h(y,u){e.length>1&&e.sort(y||Ny),i.length>1&&i.sort(u||wd),s.length>1&&s.sort(u||wd)}function d(){for(let y=t,u=n.length;y<u;y++){let c=n[y];if(c.id===null)break;c.id=null,c.object=null,c.geometry=null,c.material=null,c.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:d,sort:h}}function Oy(){let n=new WeakMap;function t(i,s){let r=n.get(i),o;return r===void 0?(o=new Ed,n.set(i,[o])):s>=r.length?(o=new Ed,r.push(o)):o=r[s],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function Fy(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new V,color:new Jt};break;case"SpotLight":e={position:new V,direction:new V,color:new Jt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new V,color:new Jt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new V,skyColor:new Jt,groundColor:new Jt};break;case"RectAreaLight":e={color:new Jt,position:new V,halfWidth:new V,halfHeight:new V};break}return n[t.id]=e,e}}}function zy(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}var By=0;function Hy(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function $y(n){let t=new Fy,e=zy(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new V);let s=new V,r=new Se,o=new Se;function a(h){let d=0,y=0,u=0;for(let x=0;x<9;x++)i.probe[x].set(0,0,0);let c=0,f=0,M=0,g=0,p=0,S=0,v=0,_=0,L=0,A=0,w=0;h.sort(Hy);for(let x=0,m=h.length;x<m;x++){let b=h[x],E=b.color,T=b.intensity,k=b.distance,H=b.shadow&&b.shadow.map?b.shadow.map.texture:null;if(b.isAmbientLight)d+=E.r*T,y+=E.g*T,u+=E.b*T;else if(b.isLightProbe){for(let P=0;P<9;P++)i.probe[P].addScaledVector(b.sh.coefficients[P],T);w++}else if(b.isDirectionalLight){let P=t.get(b);if(P.color.copy(b.color).multiplyScalar(b.intensity),b.castShadow){let z=b.shadow,W=e.get(b);W.shadowIntensity=z.intensity,W.shadowBias=z.bias,W.shadowNormalBias=z.normalBias,W.shadowRadius=z.radius,W.shadowMapSize=z.mapSize,i.directionalShadow[c]=W,i.directionalShadowMap[c]=H,i.directionalShadowMatrix[c]=b.shadow.matrix,S++}i.directional[c]=P,c++}else if(b.isSpotLight){let P=t.get(b);P.position.setFromMatrixPosition(b.matrixWorld),P.color.copy(E).multiplyScalar(T),P.distance=k,P.coneCos=Math.cos(b.angle),P.penumbraCos=Math.cos(b.angle*(1-b.penumbra)),P.decay=b.decay,i.spot[M]=P;let z=b.shadow;if(b.map&&(i.spotLightMap[L]=b.map,L++,z.updateMatrices(b),b.castShadow&&A++),i.spotLightMatrix[M]=z.matrix,b.castShadow){let W=e.get(b);W.shadowIntensity=z.intensity,W.shadowBias=z.bias,W.shadowNormalBias=z.normalBias,W.shadowRadius=z.radius,W.shadowMapSize=z.mapSize,i.spotShadow[M]=W,i.spotShadowMap[M]=H,_++}M++}else if(b.isRectAreaLight){let P=t.get(b);P.color.copy(E).multiplyScalar(T),P.halfWidth.set(b.width*.5,0,0),P.halfHeight.set(0,b.height*.5,0),i.rectArea[g]=P,g++}else if(b.isPointLight){let P=t.get(b);if(P.color.copy(b.color).multiplyScalar(b.intensity),P.distance=b.distance,P.decay=b.decay,b.castShadow){let z=b.shadow,W=e.get(b);W.shadowIntensity=z.intensity,W.shadowBias=z.bias,W.shadowNormalBias=z.normalBias,W.shadowRadius=z.radius,W.shadowMapSize=z.mapSize,W.shadowCameraNear=z.camera.near,W.shadowCameraFar=z.camera.far,i.pointShadow[f]=W,i.pointShadowMap[f]=H,i.pointShadowMatrix[f]=b.shadow.matrix,v++}i.point[f]=P,f++}else if(b.isHemisphereLight){let P=t.get(b);P.skyColor.copy(b.color).multiplyScalar(T),P.groundColor.copy(b.groundColor).multiplyScalar(T),i.hemi[p]=P,p++}}g>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=$t.LTC_FLOAT_1,i.rectAreaLTC2=$t.LTC_FLOAT_2):(i.rectAreaLTC1=$t.LTC_HALF_1,i.rectAreaLTC2=$t.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=y,i.ambient[2]=u;let R=i.hash;(R.directionalLength!==c||R.pointLength!==f||R.spotLength!==M||R.rectAreaLength!==g||R.hemiLength!==p||R.numDirectionalShadows!==S||R.numPointShadows!==v||R.numSpotShadows!==_||R.numSpotMaps!==L||R.numLightProbes!==w)&&(i.directional.length=c,i.spot.length=M,i.rectArea.length=g,i.point.length=f,i.hemi.length=p,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.pointShadow.length=v,i.pointShadowMap.length=v,i.spotShadow.length=_,i.spotShadowMap.length=_,i.directionalShadowMatrix.length=S,i.pointShadowMatrix.length=v,i.spotLightMatrix.length=_+L-A,i.spotLightMap.length=L,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=w,R.directionalLength=c,R.pointLength=f,R.spotLength=M,R.rectAreaLength=g,R.hemiLength=p,R.numDirectionalShadows=S,R.numPointShadows=v,R.numSpotShadows=_,R.numSpotMaps=L,R.numLightProbes=w,i.version=By++)}function l(h,d){let y=0,u=0,c=0,f=0,M=0,g=d.matrixWorldInverse;for(let p=0,S=h.length;p<S;p++){let v=h[p];if(v.isDirectionalLight){let _=i.directional[y];_.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(g),y++}else if(v.isSpotLight){let _=i.spot[c];_.position.setFromMatrixPosition(v.matrixWorld),_.position.applyMatrix4(g),_.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(g),c++}else if(v.isRectAreaLight){let _=i.rectArea[f];_.position.setFromMatrixPosition(v.matrixWorld),_.position.applyMatrix4(g),o.identity(),r.copy(v.matrixWorld),r.premultiply(g),o.extractRotation(r),_.halfWidth.set(v.width*.5,0,0),_.halfHeight.set(0,v.height*.5,0),_.halfWidth.applyMatrix4(o),_.halfHeight.applyMatrix4(o),f++}else if(v.isPointLight){let _=i.point[u];_.position.setFromMatrixPosition(v.matrixWorld),_.position.applyMatrix4(g),u++}else if(v.isHemisphereLight){let _=i.hemi[M];_.direction.setFromMatrixPosition(v.matrixWorld),_.direction.transformDirection(g),M++}}}return{setup:a,setupView:l,state:i}}function Td(n){let t=new $y(n),e=[],i=[];function s(d){h.camera=d,e.length=0,i.length=0}function r(d){e.push(d)}function o(d){i.push(d)}function a(){t.setup(e)}function l(d){t.setupView(e,d)}let h={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:h,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function Vy(n){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new Td(n),t.set(s,[a])):r>=o.length?(a=new Td(n),o.push(a)):a=o[r],a}function i(){t=new WeakMap}return{get:e,dispose:i}}var vc=class extends vi{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Nu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},_c=class extends vi{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},Gy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Wy=`uniform sampler2D shadow_pass;
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
}`;function Xy(n,t,e){let i=new Ar,s=new Nt,r=new Nt,o=new Ve,a=new vc({depthPacking:Ou}),l=new _c,h={},d=e.maxTextureSize,y={[Ni]:on,[on]:Ni,[We]:We},u=new vn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Nt},radius:{value:4}},vertexShader:Gy,fragmentShader:Wy}),c=u.clone();c.defines.HORIZONTAL_PASS=1;let f=new Ie;f.setAttribute("position",new Ne(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let M=new Pe(f,u),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=$d;let p=this.type;this.render=function(A,w,R){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||A.length===0)return;let x=n.getRenderTarget(),m=n.getActiveCubeFace(),b=n.getActiveMipmapLevel(),E=n.state;E.setBlending(Di),E.buffers.color.setClear(1,1,1,1),E.buffers.depth.setTest(!0),E.setScissorTest(!1);let T=p!==fi&&this.type===fi,k=p===fi&&this.type!==fi;for(let H=0,P=A.length;H<P;H++){let z=A[H],W=z.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",z,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;s.copy(W.mapSize);let q=W.getFrameExtents();if(s.multiply(q),r.copy(W.mapSize),(s.x>d||s.y>d)&&(s.x>d&&(r.x=Math.floor(d/q.x),s.x=r.x*q.x,W.mapSize.x=r.x),s.y>d&&(r.y=Math.floor(d/q.y),s.y=r.y*q.y,W.mapSize.y=r.y)),W.map===null||T===!0||k===!0){let D=this.type!==fi?{minFilter:xn,magFilter:xn}:{};W.map!==null&&W.map.dispose(),W.map=new yi(s.x,s.y,D),W.map.texture.name=z.name+".shadowMap",W.camera.updateProjectionMatrix()}n.setRenderTarget(W.map),n.clear();let lt=W.getViewportCount();for(let D=0;D<lt;D++){let Et=W.getViewport(D);o.set(r.x*Et.x,r.y*Et.y,r.x*Et.z,r.y*Et.w),E.viewport(o),W.updateMatrices(z,D),i=W.getFrustum(),_(w,R,W.camera,z,this.type)}W.isPointLightShadow!==!0&&this.type===fi&&S(W,R),W.needsUpdate=!1}p=this.type,g.needsUpdate=!1,n.setRenderTarget(x,m,b)};function S(A,w){let R=t.update(M);u.defines.VSM_SAMPLES!==A.blurSamples&&(u.defines.VSM_SAMPLES=A.blurSamples,c.defines.VSM_SAMPLES=A.blurSamples,u.needsUpdate=!0,c.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new yi(s.x,s.y)),u.uniforms.shadow_pass.value=A.map.texture,u.uniforms.resolution.value=A.mapSize,u.uniforms.radius.value=A.radius,n.setRenderTarget(A.mapPass),n.clear(),n.renderBufferDirect(w,null,R,u,M,null),c.uniforms.shadow_pass.value=A.mapPass.texture,c.uniforms.resolution.value=A.mapSize,c.uniforms.radius.value=A.radius,n.setRenderTarget(A.map),n.clear(),n.renderBufferDirect(w,null,R,c,M,null)}function v(A,w,R,x){let m=null,b=R.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(b!==void 0)m=b;else if(m=R.isPointLight===!0?l:a,n.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){let E=m.uuid,T=w.uuid,k=h[E];k===void 0&&(k={},h[E]=k);let H=k[T];H===void 0&&(H=m.clone(),k[T]=H,w.addEventListener("dispose",L)),m=H}if(m.visible=w.visible,m.wireframe=w.wireframe,x===fi?m.side=w.shadowSide!==null?w.shadowSide:w.side:m.side=w.shadowSide!==null?w.shadowSide:y[w.side],m.alphaMap=w.alphaMap,m.alphaTest=w.alphaTest,m.map=w.map,m.clipShadows=w.clipShadows,m.clippingPlanes=w.clippingPlanes,m.clipIntersection=w.clipIntersection,m.displacementMap=w.displacementMap,m.displacementScale=w.displacementScale,m.displacementBias=w.displacementBias,m.wireframeLinewidth=w.wireframeLinewidth,m.linewidth=w.linewidth,R.isPointLight===!0&&m.isMeshDistanceMaterial===!0){let E=n.properties.get(m);E.light=R}return m}function _(A,w,R,x,m){if(A.visible===!1)return;if(A.layers.test(w.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&m===fi)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,A.matrixWorld);let T=t.update(A),k=A.material;if(Array.isArray(k)){let H=T.groups;for(let P=0,z=H.length;P<z;P++){let W=H[P],q=k[W.materialIndex];if(q&&q.visible){let lt=v(A,q,x,m);A.onBeforeShadow(n,A,w,R,T,lt,W),n.renderBufferDirect(R,null,T,lt,A,W),A.onAfterShadow(n,A,w,R,T,lt,W)}}}else if(k.visible){let H=v(A,k,x,m);A.onBeforeShadow(n,A,w,R,T,H,null),n.renderBufferDirect(R,null,T,H,A,null),A.onAfterShadow(n,A,w,R,T,H,null)}}let E=A.children;for(let T=0,k=E.length;T<k;T++)_(E[T],w,R,x,m)}function L(A){A.target.removeEventListener("dispose",L);for(let R in h){let x=h[R],m=A.target.uuid;m in x&&(x[m].dispose(),delete x[m])}}}var qy={[wl]:El,[Tl]:Cl,[Al]:Il,[$s]:Rl,[El]:wl,[Cl]:Tl,[Il]:Al,[Rl]:$s};function Yy(n,t){function e(){let U=!1,Z=new Ve,B=null,J=new Ve(0,0,0,0);return{setMask:function(Y){B!==Y&&!U&&(n.colorMask(Y,Y,Y,Y),B=Y)},setLocked:function(Y){U=Y},setClear:function(Y,at,Pt,Tt,I){I===!0&&(Y*=Tt,at*=Tt,Pt*=Tt),Z.set(Y,at,Pt,Tt),J.equals(Z)===!1&&(n.clearColor(Y,at,Pt,Tt),J.copy(Z))},reset:function(){U=!1,B=null,J.set(-1,0,0,0)}}}function i(){let U=!1,Z=!1,B=null,J=null,Y=null;return{setReversed:function(at){if(Z!==at){let Pt=t.get("EXT_clip_control");Z?Pt.clipControlEXT(Pt.LOWER_LEFT_EXT,Pt.ZERO_TO_ONE_EXT):Pt.clipControlEXT(Pt.LOWER_LEFT_EXT,Pt.NEGATIVE_ONE_TO_ONE_EXT);let Tt=Y;Y=null,this.setClear(Tt)}Z=at},getReversed:function(){return Z},setTest:function(at){at?tt(n.DEPTH_TEST):ht(n.DEPTH_TEST)},setMask:function(at){B!==at&&!U&&(n.depthMask(at),B=at)},setFunc:function(at){if(Z&&(at=qy[at]),J!==at){switch(at){case wl:n.depthFunc(n.NEVER);break;case El:n.depthFunc(n.ALWAYS);break;case Tl:n.depthFunc(n.LESS);break;case $s:n.depthFunc(n.LEQUAL);break;case Al:n.depthFunc(n.EQUAL);break;case Rl:n.depthFunc(n.GEQUAL);break;case Cl:n.depthFunc(n.GREATER);break;case Il:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}J=at}},setLocked:function(at){U=at},setClear:function(at){Y!==at&&(Z&&(at=1-at),n.clearDepth(at),Y=at)},reset:function(){U=!1,B=null,J=null,Y=null,Z=!1}}}function s(){let U=!1,Z=null,B=null,J=null,Y=null,at=null,Pt=null,Tt=null,I=null;return{setTest:function(X){U||(X?tt(n.STENCIL_TEST):ht(n.STENCIL_TEST))},setMask:function(X){Z!==X&&!U&&(n.stencilMask(X),Z=X)},setFunc:function(X,Q,xt){(B!==X||J!==Q||Y!==xt)&&(n.stencilFunc(X,Q,xt),B=X,J=Q,Y=xt)},setOp:function(X,Q,xt){(at!==X||Pt!==Q||Tt!==xt)&&(n.stencilOp(X,Q,xt),at=X,Pt=Q,Tt=xt)},setLocked:function(X){U=X},setClear:function(X){I!==X&&(n.clearStencil(X),I=X)},reset:function(){U=!1,Z=null,B=null,J=null,Y=null,at=null,Pt=null,Tt=null,I=null}}}let r=new e,o=new i,a=new s,l=new WeakMap,h=new WeakMap,d={},y={},u=new WeakMap,c=[],f=null,M=!1,g=null,p=null,S=null,v=null,_=null,L=null,A=null,w=new Jt(0,0,0),R=0,x=!1,m=null,b=null,E=null,T=null,k=null,H=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),P=!1,z=0,W=n.getParameter(n.VERSION);W.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(W)[1]),P=z>=1):W.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),P=z>=2);let q=null,lt={},D=n.getParameter(n.SCISSOR_BOX),Et=n.getParameter(n.VIEWPORT),K=new Ve().fromArray(D),$=new Ve().fromArray(Et);function j(U,Z,B,J){let Y=new Uint8Array(4),at=n.createTexture();n.bindTexture(U,at),n.texParameteri(U,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(U,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Pt=0;Pt<B;Pt++)U===n.TEXTURE_3D||U===n.TEXTURE_2D_ARRAY?n.texImage3D(Z,0,n.RGBA,1,1,J,0,n.RGBA,n.UNSIGNED_BYTE,Y):n.texImage2D(Z+Pt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Y);return at}let st={};st[n.TEXTURE_2D]=j(n.TEXTURE_2D,n.TEXTURE_2D,1),st[n.TEXTURE_CUBE_MAP]=j(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),st[n.TEXTURE_2D_ARRAY]=j(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),st[n.TEXTURE_3D]=j(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),tt(n.DEPTH_TEST),o.setFunc($s),At(!1),_t(Rh),tt(n.CULL_FACE),G(Di);function tt(U){d[U]!==!0&&(n.enable(U),d[U]=!0)}function ht(U){d[U]!==!1&&(n.disable(U),d[U]=!1)}function et(U,Z){return y[U]!==Z?(n.bindFramebuffer(U,Z),y[U]=Z,U===n.DRAW_FRAMEBUFFER&&(y[n.FRAMEBUFFER]=Z),U===n.FRAMEBUFFER&&(y[n.DRAW_FRAMEBUFFER]=Z),!0):!1}function rt(U,Z){let B=c,J=!1;if(U){B=u.get(Z),B===void 0&&(B=[],u.set(Z,B));let Y=U.textures;if(B.length!==Y.length||B[0]!==n.COLOR_ATTACHMENT0){for(let at=0,Pt=Y.length;at<Pt;at++)B[at]=n.COLOR_ATTACHMENT0+at;B.length=Y.length,J=!0}}else B[0]!==n.BACK&&(B[0]=n.BACK,J=!0);J&&n.drawBuffers(B)}function gt(U){return f!==U?(n.useProgram(U),f=U,!0):!1}let nt={[Ki]:n.FUNC_ADD,[cu]:n.FUNC_SUBTRACT,[hu]:n.FUNC_REVERSE_SUBTRACT};nt[du]=n.MIN,nt[fu]=n.MAX;let yt={[uu]:n.ZERO,[pu]:n.ONE,[mu]:n.SRC_COLOR,[bl]:n.SRC_ALPHA,[Mu]:n.SRC_ALPHA_SATURATE,[vu]:n.DST_COLOR,[yu]:n.DST_ALPHA,[gu]:n.ONE_MINUS_SRC_COLOR,[Sl]:n.ONE_MINUS_SRC_ALPHA,[_u]:n.ONE_MINUS_DST_COLOR,[xu]:n.ONE_MINUS_DST_ALPHA,[bu]:n.CONSTANT_COLOR,[Su]:n.ONE_MINUS_CONSTANT_COLOR,[wu]:n.CONSTANT_ALPHA,[Eu]:n.ONE_MINUS_CONSTANT_ALPHA};function G(U,Z,B,J,Y,at,Pt,Tt,I,X){if(U===Di){M===!0&&(ht(n.BLEND),M=!1);return}if(M===!1&&(tt(n.BLEND),M=!0),U!==lu){if(U!==g||X!==x){if((p!==Ki||_!==Ki)&&(n.blendEquation(n.FUNC_ADD),p=Ki,_=Ki),X)switch(U){case Fs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ch:n.blendFunc(n.ONE,n.ONE);break;case Ih:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Ph:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case Fs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ch:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Ih:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Ph:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}S=null,v=null,L=null,A=null,w.set(0,0,0),R=0,g=U,x=X}return}Y=Y||Z,at=at||B,Pt=Pt||J,(Z!==p||Y!==_)&&(n.blendEquationSeparate(nt[Z],nt[Y]),p=Z,_=Y),(B!==S||J!==v||at!==L||Pt!==A)&&(n.blendFuncSeparate(yt[B],yt[J],yt[at],yt[Pt]),S=B,v=J,L=at,A=Pt),(Tt.equals(w)===!1||I!==R)&&(n.blendColor(Tt.r,Tt.g,Tt.b,I),w.copy(Tt),R=I),g=U,x=!1}function Ft(U,Z){U.side===We?ht(n.CULL_FACE):tt(n.CULL_FACE);let B=U.side===on;Z&&(B=!B),At(B),U.blending===Fs&&U.transparent===!1?G(Di):G(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),o.setFunc(U.depthFunc),o.setTest(U.depthTest),o.setMask(U.depthWrite),r.setMask(U.colorWrite);let J=U.stencilWrite;a.setTest(J),J&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),ot(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?tt(n.SAMPLE_ALPHA_TO_COVERAGE):ht(n.SAMPLE_ALPHA_TO_COVERAGE)}function At(U){m!==U&&(U?n.frontFace(n.CW):n.frontFace(n.CCW),m=U)}function _t(U){U!==ou?(tt(n.CULL_FACE),U!==b&&(U===Rh?n.cullFace(n.BACK):U===au?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ht(n.CULL_FACE),b=U}function Ut(U){U!==E&&(P&&n.lineWidth(U),E=U)}function ot(U,Z,B){U?(tt(n.POLYGON_OFFSET_FILL),(T!==Z||k!==B)&&(n.polygonOffset(Z,B),T=Z,k=B)):ht(n.POLYGON_OFFSET_FILL)}function Ot(U){U?tt(n.SCISSOR_TEST):ht(n.SCISSOR_TEST)}function O(U){U===void 0&&(U=n.TEXTURE0+H-1),q!==U&&(n.activeTexture(U),q=U)}function N(U,Z,B){B===void 0&&(q===null?B=n.TEXTURE0+H-1:B=q);let J=lt[B];J===void 0&&(J={type:void 0,texture:void 0},lt[B]=J),(J.type!==U||J.texture!==Z)&&(q!==B&&(n.activeTexture(B),q=B),n.bindTexture(U,Z||st[U]),J.type=U,J.texture=Z)}function pt(){let U=lt[q];U!==void 0&&U.type!==void 0&&(n.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function Ct(){try{n.compressedTexImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function kt(){try{n.compressedTexImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function it(){try{n.texSubImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function dt(){try{n.texSubImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ct(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function vt(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function St(){try{n.texStorage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Rt(){try{n.texStorage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function It(){try{n.texImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ht(){try{n.texImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Gt(U){K.equals(U)===!1&&(n.scissor(U.x,U.y,U.z,U.w),K.copy(U))}function Vt(U){$.equals(U)===!1&&(n.viewport(U.x,U.y,U.z,U.w),$.copy(U))}function le(U,Z){let B=h.get(Z);B===void 0&&(B=new WeakMap,h.set(Z,B));let J=B.get(U);J===void 0&&(J=n.getUniformBlockIndex(Z,U.name),B.set(U,J))}function Zt(U,Z){let J=h.get(Z).get(U);l.get(Z)!==J&&(n.uniformBlockBinding(Z,J,U.__bindingPointIndex),l.set(Z,J))}function C(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),d={},q=null,lt={},y={},u=new WeakMap,c=[],f=null,M=!1,g=null,p=null,S=null,v=null,_=null,L=null,A=null,w=new Jt(0,0,0),R=0,x=!1,m=null,b=null,E=null,T=null,k=null,K.set(0,0,n.canvas.width,n.canvas.height),$.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:tt,disable:ht,bindFramebuffer:et,drawBuffers:rt,useProgram:gt,setBlending:G,setMaterial:Ft,setFlipSided:At,setCullFace:_t,setLineWidth:Ut,setPolygonOffset:ot,setScissorTest:Ot,activeTexture:O,bindTexture:N,unbindTexture:pt,compressedTexImage2D:Ct,compressedTexImage3D:kt,texImage2D:It,texImage3D:Ht,updateUBOMapping:le,uniformBlockBinding:Zt,texStorage2D:St,texStorage3D:Rt,texSubImage2D:it,texSubImage3D:dt,compressedTexSubImage2D:ct,compressedTexSubImage3D:vt,scissor:Gt,viewport:Vt,reset:C}}function Ad(n,t,e,i){let s=Zy(i);switch(e){case Yd:return n*t;case Jd:return n*t;case Kd:return n*t*2;case Zc:return n*t/s.components*s.byteLength;case Jc:return n*t/s.components*s.byteLength;case jd:return n*t*2/s.components*s.byteLength;case Kc:return n*t*2/s.components*s.byteLength;case Zd:return n*t*3/s.components*s.byteLength;case Rn:return n*t*4/s.components*s.byteLength;case jc:return n*t*4/s.components*s.byteLength;case Uo:case No:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Oo:case Fo:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Ul:case Ol:return Math.max(n,16)*Math.max(t,8)/4;case Dl:case Nl:return Math.max(n,8)*Math.max(t,8)/2;case Fl:case zl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Bl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Hl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case $l:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case Vl:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case Gl:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case Wl:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case Xl:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case ql:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case Yl:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case Zl:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case Jl:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case Kl:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case jl:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case Ql:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case tc:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case zo:case ec:case nc:return Math.ceil(n/4)*Math.ceil(t/4)*16;case Qd:case ic:return Math.ceil(n/4)*Math.ceil(t/4)*8;case sc:case rc:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Zy(n){switch(n){case gi:case Wd:return{byteLength:1,components:1};case Er:case Xd:case zr:return{byteLength:2,components:1};case qc:case Yc:return{byteLength:2,components:4};case ns:case Xc:case Qn:return{byteLength:4,components:1};case qd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function Jy(n,t,e,i,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new Nt,d=new WeakMap,y,u=new WeakMap,c=!1;try{c=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function f(O,N){return c?new OffscreenCanvas(O,N):$o("canvas")}function M(O,N,pt){let Ct=1,kt=Ot(O);if((kt.width>pt||kt.height>pt)&&(Ct=pt/Math.max(kt.width,kt.height)),Ct<1)if(typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&O instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&O instanceof ImageBitmap||typeof VideoFrame<"u"&&O instanceof VideoFrame){let it=Math.floor(Ct*kt.width),dt=Math.floor(Ct*kt.height);y===void 0&&(y=f(it,dt));let ct=N?f(it,dt):y;return ct.width=it,ct.height=dt,ct.getContext("2d").drawImage(O,0,0,it,dt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+kt.width+"x"+kt.height+") to ("+it+"x"+dt+")."),ct}else return"data"in O&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+kt.width+"x"+kt.height+")."),O;return O}function g(O){return O.generateMipmaps}function p(O){n.generateMipmap(O)}function S(O){return O.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:O.isWebGL3DRenderTarget?n.TEXTURE_3D:O.isWebGLArrayRenderTarget||O.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function v(O,N,pt,Ct,kt=!1){if(O!==null){if(n[O]!==void 0)return n[O];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+O+"'")}let it=N;if(N===n.RED&&(pt===n.FLOAT&&(it=n.R32F),pt===n.HALF_FLOAT&&(it=n.R16F),pt===n.UNSIGNED_BYTE&&(it=n.R8)),N===n.RED_INTEGER&&(pt===n.UNSIGNED_BYTE&&(it=n.R8UI),pt===n.UNSIGNED_SHORT&&(it=n.R16UI),pt===n.UNSIGNED_INT&&(it=n.R32UI),pt===n.BYTE&&(it=n.R8I),pt===n.SHORT&&(it=n.R16I),pt===n.INT&&(it=n.R32I)),N===n.RG&&(pt===n.FLOAT&&(it=n.RG32F),pt===n.HALF_FLOAT&&(it=n.RG16F),pt===n.UNSIGNED_BYTE&&(it=n.RG8)),N===n.RG_INTEGER&&(pt===n.UNSIGNED_BYTE&&(it=n.RG8UI),pt===n.UNSIGNED_SHORT&&(it=n.RG16UI),pt===n.UNSIGNED_INT&&(it=n.RG32UI),pt===n.BYTE&&(it=n.RG8I),pt===n.SHORT&&(it=n.RG16I),pt===n.INT&&(it=n.RG32I)),N===n.RGB_INTEGER&&(pt===n.UNSIGNED_BYTE&&(it=n.RGB8UI),pt===n.UNSIGNED_SHORT&&(it=n.RGB16UI),pt===n.UNSIGNED_INT&&(it=n.RGB32UI),pt===n.BYTE&&(it=n.RGB8I),pt===n.SHORT&&(it=n.RGB16I),pt===n.INT&&(it=n.RGB32I)),N===n.RGBA_INTEGER&&(pt===n.UNSIGNED_BYTE&&(it=n.RGBA8UI),pt===n.UNSIGNED_SHORT&&(it=n.RGBA16UI),pt===n.UNSIGNED_INT&&(it=n.RGBA32UI),pt===n.BYTE&&(it=n.RGBA8I),pt===n.SHORT&&(it=n.RGBA16I),pt===n.INT&&(it=n.RGBA32I)),N===n.RGB&&pt===n.UNSIGNED_INT_5_9_9_9_REV&&(it=n.RGB9_E5),N===n.RGBA){let dt=kt?Sa:Me.getTransfer(Ct);pt===n.FLOAT&&(it=n.RGBA32F),pt===n.HALF_FLOAT&&(it=n.RGBA16F),pt===n.UNSIGNED_BYTE&&(it=dt===Re?n.SRGB8_ALPHA8:n.RGBA8),pt===n.UNSIGNED_SHORT_4_4_4_4&&(it=n.RGBA4),pt===n.UNSIGNED_SHORT_5_5_5_1&&(it=n.RGB5_A1)}return(it===n.R16F||it===n.R32F||it===n.RG16F||it===n.RG32F||it===n.RGBA16F||it===n.RGBA32F)&&t.get("EXT_color_buffer_float"),it}function _(O,N){let pt;return O?N===null||N===ns||N===Ws?pt=n.DEPTH24_STENCIL8:N===Qn?pt=n.DEPTH32F_STENCIL8:N===Er&&(pt=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):N===null||N===ns||N===Ws?pt=n.DEPTH_COMPONENT24:N===Qn?pt=n.DEPTH_COMPONENT32F:N===Er&&(pt=n.DEPTH_COMPONENT16),pt}function L(O,N){return g(O)===!0||O.isFramebufferTexture&&O.minFilter!==xn&&O.minFilter!==jn?Math.log2(Math.max(N.width,N.height))+1:O.mipmaps!==void 0&&O.mipmaps.length>0?O.mipmaps.length:O.isCompressedTexture&&Array.isArray(O.image)?N.mipmaps.length:1}function A(O){let N=O.target;N.removeEventListener("dispose",A),R(N),N.isVideoTexture&&d.delete(N)}function w(O){let N=O.target;N.removeEventListener("dispose",w),m(N)}function R(O){let N=i.get(O);if(N.__webglInit===void 0)return;let pt=O.source,Ct=u.get(pt);if(Ct){let kt=Ct[N.__cacheKey];kt.usedTimes--,kt.usedTimes===0&&x(O),Object.keys(Ct).length===0&&u.delete(pt)}i.remove(O)}function x(O){let N=i.get(O);n.deleteTexture(N.__webglTexture);let pt=O.source,Ct=u.get(pt);delete Ct[N.__cacheKey],o.memory.textures--}function m(O){let N=i.get(O);if(O.depthTexture&&(O.depthTexture.dispose(),i.remove(O.depthTexture)),O.isWebGLCubeRenderTarget)for(let Ct=0;Ct<6;Ct++){if(Array.isArray(N.__webglFramebuffer[Ct]))for(let kt=0;kt<N.__webglFramebuffer[Ct].length;kt++)n.deleteFramebuffer(N.__webglFramebuffer[Ct][kt]);else n.deleteFramebuffer(N.__webglFramebuffer[Ct]);N.__webglDepthbuffer&&n.deleteRenderbuffer(N.__webglDepthbuffer[Ct])}else{if(Array.isArray(N.__webglFramebuffer))for(let Ct=0;Ct<N.__webglFramebuffer.length;Ct++)n.deleteFramebuffer(N.__webglFramebuffer[Ct]);else n.deleteFramebuffer(N.__webglFramebuffer);if(N.__webglDepthbuffer&&n.deleteRenderbuffer(N.__webglDepthbuffer),N.__webglMultisampledFramebuffer&&n.deleteFramebuffer(N.__webglMultisampledFramebuffer),N.__webglColorRenderbuffer)for(let Ct=0;Ct<N.__webglColorRenderbuffer.length;Ct++)N.__webglColorRenderbuffer[Ct]&&n.deleteRenderbuffer(N.__webglColorRenderbuffer[Ct]);N.__webglDepthRenderbuffer&&n.deleteRenderbuffer(N.__webglDepthRenderbuffer)}let pt=O.textures;for(let Ct=0,kt=pt.length;Ct<kt;Ct++){let it=i.get(pt[Ct]);it.__webglTexture&&(n.deleteTexture(it.__webglTexture),o.memory.textures--),i.remove(pt[Ct])}i.remove(O)}let b=0;function E(){b=0}function T(){let O=b;return O>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+O+" texture units while this GPU supports only "+s.maxTextures),b+=1,O}function k(O){let N=[];return N.push(O.wrapS),N.push(O.wrapT),N.push(O.wrapR||0),N.push(O.magFilter),N.push(O.minFilter),N.push(O.anisotropy),N.push(O.internalFormat),N.push(O.format),N.push(O.type),N.push(O.generateMipmaps),N.push(O.premultiplyAlpha),N.push(O.flipY),N.push(O.unpackAlignment),N.push(O.colorSpace),N.join()}function H(O,N){let pt=i.get(O);if(O.isVideoTexture&&Ut(O),O.isRenderTargetTexture===!1&&O.version>0&&pt.__version!==O.version){let Ct=O.image;if(Ct===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Ct.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{$(pt,O,N);return}}e.bindTexture(n.TEXTURE_2D,pt.__webglTexture,n.TEXTURE0+N)}function P(O,N){let pt=i.get(O);if(O.version>0&&pt.__version!==O.version){$(pt,O,N);return}e.bindTexture(n.TEXTURE_2D_ARRAY,pt.__webglTexture,n.TEXTURE0+N)}function z(O,N){let pt=i.get(O);if(O.version>0&&pt.__version!==O.version){$(pt,O,N);return}e.bindTexture(n.TEXTURE_3D,pt.__webglTexture,n.TEXTURE0+N)}function W(O,N){let pt=i.get(O);if(O.version>0&&pt.__version!==O.version){j(pt,O,N);return}e.bindTexture(n.TEXTURE_CUBE_MAP,pt.__webglTexture,n.TEXTURE0+N)}let q={[es]:n.REPEAT,[Qi]:n.CLAMP_TO_EDGE,[kl]:n.MIRRORED_REPEAT},lt={[xn]:n.NEAREST,[Uu]:n.NEAREST_MIPMAP_NEAREST,[io]:n.NEAREST_MIPMAP_LINEAR,[jn]:n.LINEAR,[$a]:n.LINEAR_MIPMAP_NEAREST,[ts]:n.LINEAR_MIPMAP_LINEAR},D={[zu]:n.NEVER,[Wu]:n.ALWAYS,[Bu]:n.LESS,[ef]:n.LEQUAL,[Hu]:n.EQUAL,[Gu]:n.GEQUAL,[$u]:n.GREATER,[Vu]:n.NOTEQUAL};function Et(O,N){if(N.type===Qn&&t.has("OES_texture_float_linear")===!1&&(N.magFilter===jn||N.magFilter===$a||N.magFilter===io||N.magFilter===ts||N.minFilter===jn||N.minFilter===$a||N.minFilter===io||N.minFilter===ts)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(O,n.TEXTURE_WRAP_S,q[N.wrapS]),n.texParameteri(O,n.TEXTURE_WRAP_T,q[N.wrapT]),(O===n.TEXTURE_3D||O===n.TEXTURE_2D_ARRAY)&&n.texParameteri(O,n.TEXTURE_WRAP_R,q[N.wrapR]),n.texParameteri(O,n.TEXTURE_MAG_FILTER,lt[N.magFilter]),n.texParameteri(O,n.TEXTURE_MIN_FILTER,lt[N.minFilter]),N.compareFunction&&(n.texParameteri(O,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(O,n.TEXTURE_COMPARE_FUNC,D[N.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(N.magFilter===xn||N.minFilter!==io&&N.minFilter!==ts||N.type===Qn&&t.has("OES_texture_float_linear")===!1)return;if(N.anisotropy>1||i.get(N).__currentAnisotropy){let pt=t.get("EXT_texture_filter_anisotropic");n.texParameterf(O,pt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(N.anisotropy,s.getMaxAnisotropy())),i.get(N).__currentAnisotropy=N.anisotropy}}}function K(O,N){let pt=!1;O.__webglInit===void 0&&(O.__webglInit=!0,N.addEventListener("dispose",A));let Ct=N.source,kt=u.get(Ct);kt===void 0&&(kt={},u.set(Ct,kt));let it=k(N);if(it!==O.__cacheKey){kt[it]===void 0&&(kt[it]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,pt=!0),kt[it].usedTimes++;let dt=kt[O.__cacheKey];dt!==void 0&&(kt[O.__cacheKey].usedTimes--,dt.usedTimes===0&&x(N)),O.__cacheKey=it,O.__webglTexture=kt[it].texture}return pt}function $(O,N,pt){let Ct=n.TEXTURE_2D;(N.isDataArrayTexture||N.isCompressedArrayTexture)&&(Ct=n.TEXTURE_2D_ARRAY),N.isData3DTexture&&(Ct=n.TEXTURE_3D);let kt=K(O,N),it=N.source;e.bindTexture(Ct,O.__webglTexture,n.TEXTURE0+pt);let dt=i.get(it);if(it.version!==dt.__version||kt===!0){e.activeTexture(n.TEXTURE0+pt);let ct=Me.getPrimaries(Me.workingColorSpace),vt=N.colorSpace===Li?null:Me.getPrimaries(N.colorSpace),St=N.colorSpace===Li||ct===vt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,N.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,N.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,St);let Rt=M(N.image,!1,s.maxTextureSize);Rt=ot(N,Rt);let It=r.convert(N.format,N.colorSpace),Ht=r.convert(N.type),Gt=v(N.internalFormat,It,Ht,N.colorSpace,N.isVideoTexture);Et(Ct,N);let Vt,le=N.mipmaps,Zt=N.isVideoTexture!==!0,C=dt.__version===void 0||kt===!0,U=it.dataReady,Z=L(N,Rt);if(N.isDepthTexture)Gt=_(N.format===Xs,N.type),C&&(Zt?e.texStorage2D(n.TEXTURE_2D,1,Gt,Rt.width,Rt.height):e.texImage2D(n.TEXTURE_2D,0,Gt,Rt.width,Rt.height,0,It,Ht,null));else if(N.isDataTexture)if(le.length>0){Zt&&C&&e.texStorage2D(n.TEXTURE_2D,Z,Gt,le[0].width,le[0].height);for(let B=0,J=le.length;B<J;B++)Vt=le[B],Zt?U&&e.texSubImage2D(n.TEXTURE_2D,B,0,0,Vt.width,Vt.height,It,Ht,Vt.data):e.texImage2D(n.TEXTURE_2D,B,Gt,Vt.width,Vt.height,0,It,Ht,Vt.data);N.generateMipmaps=!1}else Zt?(C&&e.texStorage2D(n.TEXTURE_2D,Z,Gt,Rt.width,Rt.height),U&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,Rt.width,Rt.height,It,Ht,Rt.data)):e.texImage2D(n.TEXTURE_2D,0,Gt,Rt.width,Rt.height,0,It,Ht,Rt.data);else if(N.isCompressedTexture)if(N.isCompressedArrayTexture){Zt&&C&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Z,Gt,le[0].width,le[0].height,Rt.depth);for(let B=0,J=le.length;B<J;B++)if(Vt=le[B],N.format!==Rn)if(It!==null)if(Zt){if(U)if(N.layerUpdates.size>0){let Y=Ad(Vt.width,Vt.height,N.format,N.type);for(let at of N.layerUpdates){let Pt=Vt.data.subarray(at*Y/Vt.data.BYTES_PER_ELEMENT,(at+1)*Y/Vt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,B,0,0,at,Vt.width,Vt.height,1,It,Pt)}N.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,B,0,0,0,Vt.width,Vt.height,Rt.depth,It,Vt.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,B,Gt,Vt.width,Vt.height,Rt.depth,0,Vt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Zt?U&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,B,0,0,0,Vt.width,Vt.height,Rt.depth,It,Ht,Vt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,B,Gt,Vt.width,Vt.height,Rt.depth,0,It,Ht,Vt.data)}else{Zt&&C&&e.texStorage2D(n.TEXTURE_2D,Z,Gt,le[0].width,le[0].height);for(let B=0,J=le.length;B<J;B++)Vt=le[B],N.format!==Rn?It!==null?Zt?U&&e.compressedTexSubImage2D(n.TEXTURE_2D,B,0,0,Vt.width,Vt.height,It,Vt.data):e.compressedTexImage2D(n.TEXTURE_2D,B,Gt,Vt.width,Vt.height,0,Vt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Zt?U&&e.texSubImage2D(n.TEXTURE_2D,B,0,0,Vt.width,Vt.height,It,Ht,Vt.data):e.texImage2D(n.TEXTURE_2D,B,Gt,Vt.width,Vt.height,0,It,Ht,Vt.data)}else if(N.isDataArrayTexture)if(Zt){if(C&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Z,Gt,Rt.width,Rt.height,Rt.depth),U)if(N.layerUpdates.size>0){let B=Ad(Rt.width,Rt.height,N.format,N.type);for(let J of N.layerUpdates){let Y=Rt.data.subarray(J*B/Rt.data.BYTES_PER_ELEMENT,(J+1)*B/Rt.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,J,Rt.width,Rt.height,1,It,Ht,Y)}N.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Rt.width,Rt.height,Rt.depth,It,Ht,Rt.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Gt,Rt.width,Rt.height,Rt.depth,0,It,Ht,Rt.data);else if(N.isData3DTexture)Zt?(C&&e.texStorage3D(n.TEXTURE_3D,Z,Gt,Rt.width,Rt.height,Rt.depth),U&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Rt.width,Rt.height,Rt.depth,It,Ht,Rt.data)):e.texImage3D(n.TEXTURE_3D,0,Gt,Rt.width,Rt.height,Rt.depth,0,It,Ht,Rt.data);else if(N.isFramebufferTexture){if(C)if(Zt)e.texStorage2D(n.TEXTURE_2D,Z,Gt,Rt.width,Rt.height);else{let B=Rt.width,J=Rt.height;for(let Y=0;Y<Z;Y++)e.texImage2D(n.TEXTURE_2D,Y,Gt,B,J,0,It,Ht,null),B>>=1,J>>=1}}else if(le.length>0){if(Zt&&C){let B=Ot(le[0]);e.texStorage2D(n.TEXTURE_2D,Z,Gt,B.width,B.height)}for(let B=0,J=le.length;B<J;B++)Vt=le[B],Zt?U&&e.texSubImage2D(n.TEXTURE_2D,B,0,0,It,Ht,Vt):e.texImage2D(n.TEXTURE_2D,B,Gt,It,Ht,Vt);N.generateMipmaps=!1}else if(Zt){if(C){let B=Ot(Rt);e.texStorage2D(n.TEXTURE_2D,Z,Gt,B.width,B.height)}U&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,It,Ht,Rt)}else e.texImage2D(n.TEXTURE_2D,0,Gt,It,Ht,Rt);g(N)&&p(Ct),dt.__version=it.version,N.onUpdate&&N.onUpdate(N)}O.__version=N.version}function j(O,N,pt){if(N.image.length!==6)return;let Ct=K(O,N),kt=N.source;e.bindTexture(n.TEXTURE_CUBE_MAP,O.__webglTexture,n.TEXTURE0+pt);let it=i.get(kt);if(kt.version!==it.__version||Ct===!0){e.activeTexture(n.TEXTURE0+pt);let dt=Me.getPrimaries(Me.workingColorSpace),ct=N.colorSpace===Li?null:Me.getPrimaries(N.colorSpace),vt=N.colorSpace===Li||dt===ct?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,N.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,N.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,vt);let St=N.isCompressedTexture||N.image[0].isCompressedTexture,Rt=N.image[0]&&N.image[0].isDataTexture,It=[];for(let J=0;J<6;J++)!St&&!Rt?It[J]=M(N.image[J],!0,s.maxCubemapSize):It[J]=Rt?N.image[J].image:N.image[J],It[J]=ot(N,It[J]);let Ht=It[0],Gt=r.convert(N.format,N.colorSpace),Vt=r.convert(N.type),le=v(N.internalFormat,Gt,Vt,N.colorSpace),Zt=N.isVideoTexture!==!0,C=it.__version===void 0||Ct===!0,U=kt.dataReady,Z=L(N,Ht);Et(n.TEXTURE_CUBE_MAP,N);let B;if(St){Zt&&C&&e.texStorage2D(n.TEXTURE_CUBE_MAP,Z,le,Ht.width,Ht.height);for(let J=0;J<6;J++){B=It[J].mipmaps;for(let Y=0;Y<B.length;Y++){let at=B[Y];N.format!==Rn?Gt!==null?Zt?U&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,Y,0,0,at.width,at.height,Gt,at.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,Y,le,at.width,at.height,0,at.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Zt?U&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,Y,0,0,at.width,at.height,Gt,Vt,at.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,Y,le,at.width,at.height,0,Gt,Vt,at.data)}}}else{if(B=N.mipmaps,Zt&&C){B.length>0&&Z++;let J=Ot(It[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,Z,le,J.width,J.height)}for(let J=0;J<6;J++)if(Rt){Zt?U&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,It[J].width,It[J].height,Gt,Vt,It[J].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,le,It[J].width,It[J].height,0,Gt,Vt,It[J].data);for(let Y=0;Y<B.length;Y++){let Pt=B[Y].image[J].image;Zt?U&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,Y+1,0,0,Pt.width,Pt.height,Gt,Vt,Pt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,Y+1,le,Pt.width,Pt.height,0,Gt,Vt,Pt.data)}}else{Zt?U&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Gt,Vt,It[J]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,le,Gt,Vt,It[J]);for(let Y=0;Y<B.length;Y++){let at=B[Y];Zt?U&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,Y+1,0,0,Gt,Vt,at.image[J]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,Y+1,le,Gt,Vt,at.image[J])}}}g(N)&&p(n.TEXTURE_CUBE_MAP),it.__version=kt.version,N.onUpdate&&N.onUpdate(N)}O.__version=N.version}function st(O,N,pt,Ct,kt,it){let dt=r.convert(pt.format,pt.colorSpace),ct=r.convert(pt.type),vt=v(pt.internalFormat,dt,ct,pt.colorSpace),St=i.get(N),Rt=i.get(pt);if(Rt.__renderTarget=N,!St.__hasExternalTextures){let It=Math.max(1,N.width>>it),Ht=Math.max(1,N.height>>it);kt===n.TEXTURE_3D||kt===n.TEXTURE_2D_ARRAY?e.texImage3D(kt,it,vt,It,Ht,N.depth,0,dt,ct,null):e.texImage2D(kt,it,vt,It,Ht,0,dt,ct,null)}e.bindFramebuffer(n.FRAMEBUFFER,O),_t(N)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Ct,kt,Rt.__webglTexture,0,At(N)):(kt===n.TEXTURE_2D||kt>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&kt<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Ct,kt,Rt.__webglTexture,it),e.bindFramebuffer(n.FRAMEBUFFER,null)}function tt(O,N,pt){if(n.bindRenderbuffer(n.RENDERBUFFER,O),N.depthBuffer){let Ct=N.depthTexture,kt=Ct&&Ct.isDepthTexture?Ct.type:null,it=_(N.stencilBuffer,kt),dt=N.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ct=At(N);_t(N)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ct,it,N.width,N.height):pt?n.renderbufferStorageMultisample(n.RENDERBUFFER,ct,it,N.width,N.height):n.renderbufferStorage(n.RENDERBUFFER,it,N.width,N.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,dt,n.RENDERBUFFER,O)}else{let Ct=N.textures;for(let kt=0;kt<Ct.length;kt++){let it=Ct[kt],dt=r.convert(it.format,it.colorSpace),ct=r.convert(it.type),vt=v(it.internalFormat,dt,ct,it.colorSpace),St=At(N);pt&&_t(N)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,St,vt,N.width,N.height):_t(N)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,St,vt,N.width,N.height):n.renderbufferStorage(n.RENDERBUFFER,vt,N.width,N.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function ht(O,N){if(N&&N.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,O),!(N.depthTexture&&N.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let Ct=i.get(N.depthTexture);Ct.__renderTarget=N,(!Ct.__webglTexture||N.depthTexture.image.width!==N.width||N.depthTexture.image.height!==N.height)&&(N.depthTexture.image.width=N.width,N.depthTexture.image.height=N.height,N.depthTexture.needsUpdate=!0),H(N.depthTexture,0);let kt=Ct.__webglTexture,it=At(N);if(N.depthTexture.format===zs)_t(N)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,kt,0,it):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,kt,0);else if(N.depthTexture.format===Xs)_t(N)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,kt,0,it):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,kt,0);else throw new Error("Unknown depthTexture format")}function et(O){let N=i.get(O),pt=O.isWebGLCubeRenderTarget===!0;if(N.__boundDepthTexture!==O.depthTexture){let Ct=O.depthTexture;if(N.__depthDisposeCallback&&N.__depthDisposeCallback(),Ct){let kt=()=>{delete N.__boundDepthTexture,delete N.__depthDisposeCallback,Ct.removeEventListener("dispose",kt)};Ct.addEventListener("dispose",kt),N.__depthDisposeCallback=kt}N.__boundDepthTexture=Ct}if(O.depthTexture&&!N.__autoAllocateDepthBuffer){if(pt)throw new Error("target.depthTexture not supported in Cube render targets");ht(N.__webglFramebuffer,O)}else if(pt){N.__webglDepthbuffer=[];for(let Ct=0;Ct<6;Ct++)if(e.bindFramebuffer(n.FRAMEBUFFER,N.__webglFramebuffer[Ct]),N.__webglDepthbuffer[Ct]===void 0)N.__webglDepthbuffer[Ct]=n.createRenderbuffer(),tt(N.__webglDepthbuffer[Ct],O,!1);else{let kt=O.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,it=N.__webglDepthbuffer[Ct];n.bindRenderbuffer(n.RENDERBUFFER,it),n.framebufferRenderbuffer(n.FRAMEBUFFER,kt,n.RENDERBUFFER,it)}}else if(e.bindFramebuffer(n.FRAMEBUFFER,N.__webglFramebuffer),N.__webglDepthbuffer===void 0)N.__webglDepthbuffer=n.createRenderbuffer(),tt(N.__webglDepthbuffer,O,!1);else{let Ct=O.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,kt=N.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,kt),n.framebufferRenderbuffer(n.FRAMEBUFFER,Ct,n.RENDERBUFFER,kt)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function rt(O,N,pt){let Ct=i.get(O);N!==void 0&&st(Ct.__webglFramebuffer,O,O.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),pt!==void 0&&et(O)}function gt(O){let N=O.texture,pt=i.get(O),Ct=i.get(N);O.addEventListener("dispose",w);let kt=O.textures,it=O.isWebGLCubeRenderTarget===!0,dt=kt.length>1;if(dt||(Ct.__webglTexture===void 0&&(Ct.__webglTexture=n.createTexture()),Ct.__version=N.version,o.memory.textures++),it){pt.__webglFramebuffer=[];for(let ct=0;ct<6;ct++)if(N.mipmaps&&N.mipmaps.length>0){pt.__webglFramebuffer[ct]=[];for(let vt=0;vt<N.mipmaps.length;vt++)pt.__webglFramebuffer[ct][vt]=n.createFramebuffer()}else pt.__webglFramebuffer[ct]=n.createFramebuffer()}else{if(N.mipmaps&&N.mipmaps.length>0){pt.__webglFramebuffer=[];for(let ct=0;ct<N.mipmaps.length;ct++)pt.__webglFramebuffer[ct]=n.createFramebuffer()}else pt.__webglFramebuffer=n.createFramebuffer();if(dt)for(let ct=0,vt=kt.length;ct<vt;ct++){let St=i.get(kt[ct]);St.__webglTexture===void 0&&(St.__webglTexture=n.createTexture(),o.memory.textures++)}if(O.samples>0&&_t(O)===!1){pt.__webglMultisampledFramebuffer=n.createFramebuffer(),pt.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,pt.__webglMultisampledFramebuffer);for(let ct=0;ct<kt.length;ct++){let vt=kt[ct];pt.__webglColorRenderbuffer[ct]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,pt.__webglColorRenderbuffer[ct]);let St=r.convert(vt.format,vt.colorSpace),Rt=r.convert(vt.type),It=v(vt.internalFormat,St,Rt,vt.colorSpace,O.isXRRenderTarget===!0),Ht=At(O);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ht,It,O.width,O.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ct,n.RENDERBUFFER,pt.__webglColorRenderbuffer[ct])}n.bindRenderbuffer(n.RENDERBUFFER,null),O.depthBuffer&&(pt.__webglDepthRenderbuffer=n.createRenderbuffer(),tt(pt.__webglDepthRenderbuffer,O,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(it){e.bindTexture(n.TEXTURE_CUBE_MAP,Ct.__webglTexture),Et(n.TEXTURE_CUBE_MAP,N);for(let ct=0;ct<6;ct++)if(N.mipmaps&&N.mipmaps.length>0)for(let vt=0;vt<N.mipmaps.length;vt++)st(pt.__webglFramebuffer[ct][vt],O,N,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,vt);else st(pt.__webglFramebuffer[ct],O,N,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0);g(N)&&p(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(dt){for(let ct=0,vt=kt.length;ct<vt;ct++){let St=kt[ct],Rt=i.get(St);e.bindTexture(n.TEXTURE_2D,Rt.__webglTexture),Et(n.TEXTURE_2D,St),st(pt.__webglFramebuffer,O,St,n.COLOR_ATTACHMENT0+ct,n.TEXTURE_2D,0),g(St)&&p(n.TEXTURE_2D)}e.unbindTexture()}else{let ct=n.TEXTURE_2D;if((O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(ct=O.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(ct,Ct.__webglTexture),Et(ct,N),N.mipmaps&&N.mipmaps.length>0)for(let vt=0;vt<N.mipmaps.length;vt++)st(pt.__webglFramebuffer[vt],O,N,n.COLOR_ATTACHMENT0,ct,vt);else st(pt.__webglFramebuffer,O,N,n.COLOR_ATTACHMENT0,ct,0);g(N)&&p(ct),e.unbindTexture()}O.depthBuffer&&et(O)}function nt(O){let N=O.textures;for(let pt=0,Ct=N.length;pt<Ct;pt++){let kt=N[pt];if(g(kt)){let it=S(O),dt=i.get(kt).__webglTexture;e.bindTexture(it,dt),p(it),e.unbindTexture()}}}let yt=[],G=[];function Ft(O){if(O.samples>0){if(_t(O)===!1){let N=O.textures,pt=O.width,Ct=O.height,kt=n.COLOR_BUFFER_BIT,it=O.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,dt=i.get(O),ct=N.length>1;if(ct)for(let vt=0;vt<N.length;vt++)e.bindFramebuffer(n.FRAMEBUFFER,dt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+vt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,dt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+vt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,dt.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,dt.__webglFramebuffer);for(let vt=0;vt<N.length;vt++){if(O.resolveDepthBuffer&&(O.depthBuffer&&(kt|=n.DEPTH_BUFFER_BIT),O.stencilBuffer&&O.resolveStencilBuffer&&(kt|=n.STENCIL_BUFFER_BIT)),ct){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,dt.__webglColorRenderbuffer[vt]);let St=i.get(N[vt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,St,0)}n.blitFramebuffer(0,0,pt,Ct,0,0,pt,Ct,kt,n.NEAREST),l===!0&&(yt.length=0,G.length=0,yt.push(n.COLOR_ATTACHMENT0+vt),O.depthBuffer&&O.resolveDepthBuffer===!1&&(yt.push(it),G.push(it),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,G)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,yt))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ct)for(let vt=0;vt<N.length;vt++){e.bindFramebuffer(n.FRAMEBUFFER,dt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+vt,n.RENDERBUFFER,dt.__webglColorRenderbuffer[vt]);let St=i.get(N[vt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,dt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+vt,n.TEXTURE_2D,St,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,dt.__webglMultisampledFramebuffer)}else if(O.depthBuffer&&O.resolveDepthBuffer===!1&&l){let N=O.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[N])}}}function At(O){return Math.min(s.maxSamples,O.samples)}function _t(O){let N=i.get(O);return O.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&N.__useRenderToTexture!==!1}function Ut(O){let N=o.render.frame;d.get(O)!==N&&(d.set(O,N),O.update())}function ot(O,N){let pt=O.colorSpace,Ct=O.format,kt=O.type;return O.isCompressedTexture===!0||O.isVideoTexture===!0||pt!==Ks&&pt!==Li&&(Me.getTransfer(pt)===Re?(Ct!==Rn||kt!==gi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",pt)),N}function Ot(O){return typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement?(h.width=O.naturalWidth||O.width,h.height=O.naturalHeight||O.height):typeof VideoFrame<"u"&&O instanceof VideoFrame?(h.width=O.displayWidth,h.height=O.displayHeight):(h.width=O.width,h.height=O.height),h}this.allocateTextureUnit=T,this.resetTextureUnits=E,this.setTexture2D=H,this.setTexture2DArray=P,this.setTexture3D=z,this.setTextureCube=W,this.rebindTextures=rt,this.setupRenderTarget=gt,this.updateRenderTargetMipmap=nt,this.updateMultisampleRenderTarget=Ft,this.setupDepthRenderbuffer=et,this.setupFrameBufferTexture=st,this.useMultisampledRTT=_t}function Ky(n,t){function e(i,s=Li){let r,o=Me.getTransfer(s);if(i===gi)return n.UNSIGNED_BYTE;if(i===qc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Yc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===qd)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Wd)return n.BYTE;if(i===Xd)return n.SHORT;if(i===Er)return n.UNSIGNED_SHORT;if(i===Xc)return n.INT;if(i===ns)return n.UNSIGNED_INT;if(i===Qn)return n.FLOAT;if(i===zr)return n.HALF_FLOAT;if(i===Yd)return n.ALPHA;if(i===Zd)return n.RGB;if(i===Rn)return n.RGBA;if(i===Jd)return n.LUMINANCE;if(i===Kd)return n.LUMINANCE_ALPHA;if(i===zs)return n.DEPTH_COMPONENT;if(i===Xs)return n.DEPTH_STENCIL;if(i===Zc)return n.RED;if(i===Jc)return n.RED_INTEGER;if(i===jd)return n.RG;if(i===Kc)return n.RG_INTEGER;if(i===jc)return n.RGBA_INTEGER;if(i===Uo||i===No||i===Oo||i===Fo)if(o===Re)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Uo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===No)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Oo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Fo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Uo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===No)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Oo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Fo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Dl||i===Ul||i===Nl||i===Ol)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Dl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Ul)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Nl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ol)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Fl||i===zl||i===Bl)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Fl||i===zl)return o===Re?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Bl)return o===Re?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Hl||i===$l||i===Vl||i===Gl||i===Wl||i===Xl||i===ql||i===Yl||i===Zl||i===Jl||i===Kl||i===jl||i===Ql||i===tc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Hl)return o===Re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===$l)return o===Re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Vl)return o===Re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Gl)return o===Re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Wl)return o===Re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Xl)return o===Re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===ql)return o===Re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Yl)return o===Re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Zl)return o===Re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Jl)return o===Re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Kl)return o===Re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===jl)return o===Re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Ql)return o===Re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===tc)return o===Re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===zo||i===ec||i===nc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===zo)return o===Re?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===ec)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===nc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Qd||i===ic||i===sc||i===rc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===zo)return r.COMPRESSED_RED_RGTC1_EXT;if(i===ic)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===sc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===rc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ws?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}var Mc=class extends yn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},re=class extends Ce{constructor(){super(),this.isGroup=!0,this.type="Group"}},jy={type:"move"},br=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new re,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new re,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new re,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,h=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(h&&t.hand){o=!0;for(let M of t.hand.values()){let g=e.getJointPose(M,i),p=this._getHandJoint(h,M);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}let d=h.joints["index-finger-tip"],y=h.joints["thumb-tip"],u=d.position.distanceTo(y.position),c=.02,f=.005;h.inputState.pinching&&u>c+f?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!h.inputState.pinching&&u<=c-f&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(jy)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),h!==null&&(h.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new re;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},Qy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,tx=`
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

}`,bc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){let s=new Sn,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new vn({vertexShader:Qy,fragmentShader:tx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Pe(new an(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Sc=class extends Oi{constructor(t,e){super();let i=this,s=null,r=1,o=null,a="local-floor",l=1,h=null,d=null,y=null,u=null,c=null,f=null,M=new bc,g=e.getContextAttributes(),p=null,S=null,v=[],_=[],L=new Nt,A=null,w=new yn;w.viewport=new Ve;let R=new yn;R.viewport=new Ve;let x=[w,R],m=new Mc,b=null,E=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let j=v[$];return j===void 0&&(j=new br,v[$]=j),j.getTargetRaySpace()},this.getControllerGrip=function($){let j=v[$];return j===void 0&&(j=new br,v[$]=j),j.getGripSpace()},this.getHand=function($){let j=v[$];return j===void 0&&(j=new br,v[$]=j),j.getHandSpace()};function T($){let j=_.indexOf($.inputSource);if(j===-1)return;let st=v[j];st!==void 0&&(st.update($.inputSource,$.frame,h||o),st.dispatchEvent({type:$.type,data:$.inputSource}))}function k(){s.removeEventListener("select",T),s.removeEventListener("selectstart",T),s.removeEventListener("selectend",T),s.removeEventListener("squeeze",T),s.removeEventListener("squeezestart",T),s.removeEventListener("squeezeend",T),s.removeEventListener("end",k),s.removeEventListener("inputsourceschange",H);for(let $=0;$<v.length;$++){let j=_[$];j!==null&&(_[$]=null,v[$].disconnect(j))}b=null,E=null,M.reset(),t.setRenderTarget(p),c=null,u=null,y=null,s=null,S=null,K.stop(),i.isPresenting=!1,t.setPixelRatio(A),t.setSize(L.width,L.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){r=$,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||o},this.setReferenceSpace=function($){h=$},this.getBaseLayer=function(){return u!==null?u:c},this.getBinding=function(){return y},this.getFrame=function(){return f},this.getSession=function(){return s},this.setSession=async function($){if(s=$,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",T),s.addEventListener("selectstart",T),s.addEventListener("selectend",T),s.addEventListener("squeeze",T),s.addEventListener("squeezestart",T),s.addEventListener("squeezeend",T),s.addEventListener("end",k),s.addEventListener("inputsourceschange",H),g.xrCompatible!==!0&&await e.makeXRCompatible(),A=t.getPixelRatio(),t.getSize(L),s.renderState.layers===void 0){let j={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};c=new XRWebGLLayer(s,e,j),s.updateRenderState({baseLayer:c}),t.setPixelRatio(1),t.setSize(c.framebufferWidth,c.framebufferHeight,!1),S=new yi(c.framebufferWidth,c.framebufferHeight,{format:Rn,type:gi,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil})}else{let j=null,st=null,tt=null;g.depth&&(tt=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,j=g.stencil?Xs:zs,st=g.stencil?Ws:ns);let ht={colorFormat:e.RGBA8,depthFormat:tt,scaleFactor:r};y=new XRWebGLBinding(s,e),u=y.createProjectionLayer(ht),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),S=new yi(u.textureWidth,u.textureHeight,{format:Rn,type:gi,depthTexture:new Qo(u.textureWidth,u.textureHeight,st,void 0,void 0,void 0,void 0,void 0,void 0,j),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),h=null,o=await s.requestReferenceSpace(a),K.setContext(s),K.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function H($){for(let j=0;j<$.removed.length;j++){let st=$.removed[j],tt=_.indexOf(st);tt>=0&&(_[tt]=null,v[tt].disconnect(st))}for(let j=0;j<$.added.length;j++){let st=$.added[j],tt=_.indexOf(st);if(tt===-1){for(let et=0;et<v.length;et++)if(et>=_.length){_.push(st),tt=et;break}else if(_[et]===null){_[et]=st,tt=et;break}if(tt===-1)break}let ht=v[tt];ht&&ht.connect(st)}}let P=new V,z=new V;function W($,j,st){P.setFromMatrixPosition(j.matrixWorld),z.setFromMatrixPosition(st.matrixWorld);let tt=P.distanceTo(z),ht=j.projectionMatrix.elements,et=st.projectionMatrix.elements,rt=ht[14]/(ht[10]-1),gt=ht[14]/(ht[10]+1),nt=(ht[9]+1)/ht[5],yt=(ht[9]-1)/ht[5],G=(ht[8]-1)/ht[0],Ft=(et[8]+1)/et[0],At=rt*G,_t=rt*Ft,Ut=tt/(-G+Ft),ot=Ut*-G;if(j.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(ot),$.translateZ(Ut),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),ht[10]===-1)$.projectionMatrix.copy(j.projectionMatrix),$.projectionMatrixInverse.copy(j.projectionMatrixInverse);else{let Ot=rt+Ut,O=gt+Ut,N=At-ot,pt=_t+(tt-ot),Ct=nt*gt/O*Ot,kt=yt*gt/O*Ot;$.projectionMatrix.makePerspective(N,pt,Ct,kt,Ot,O),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function q($,j){j===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(j.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(s===null)return;let j=$.near,st=$.far;M.texture!==null&&(M.depthNear>0&&(j=M.depthNear),M.depthFar>0&&(st=M.depthFar)),m.near=R.near=w.near=j,m.far=R.far=w.far=st,(b!==m.near||E!==m.far)&&(s.updateRenderState({depthNear:m.near,depthFar:m.far}),b=m.near,E=m.far),w.layers.mask=$.layers.mask|2,R.layers.mask=$.layers.mask|4,m.layers.mask=w.layers.mask|R.layers.mask;let tt=$.parent,ht=m.cameras;q(m,tt);for(let et=0;et<ht.length;et++)q(ht[et],tt);ht.length===2?W(m,w,R):m.projectionMatrix.copy(w.projectionMatrix),lt($,m,tt)};function lt($,j,st){st===null?$.matrix.copy(j.matrixWorld):($.matrix.copy(st.matrixWorld),$.matrix.invert(),$.matrix.multiply(j.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(j.projectionMatrix),$.projectionMatrixInverse.copy(j.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Tr*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return m},this.getFoveation=function(){if(!(u===null&&c===null))return l},this.setFoveation=function($){l=$,u!==null&&(u.fixedFoveation=$),c!==null&&c.fixedFoveation!==void 0&&(c.fixedFoveation=$)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(m)};let D=null;function Et($,j){if(d=j.getViewerPose(h||o),f=j,d!==null){let st=d.views;c!==null&&(t.setRenderTargetFramebuffer(S,c.framebuffer),t.setRenderTarget(S));let tt=!1;st.length!==m.cameras.length&&(m.cameras.length=0,tt=!0);for(let et=0;et<st.length;et++){let rt=st[et],gt=null;if(c!==null)gt=c.getViewport(rt);else{let yt=y.getViewSubImage(u,rt);gt=yt.viewport,et===0&&(t.setRenderTargetTextures(S,yt.colorTexture,u.ignoreDepthValues?void 0:yt.depthStencilTexture),t.setRenderTarget(S))}let nt=x[et];nt===void 0&&(nt=new yn,nt.layers.enable(et),nt.viewport=new Ve,x[et]=nt),nt.matrix.fromArray(rt.transform.matrix),nt.matrix.decompose(nt.position,nt.quaternion,nt.scale),nt.projectionMatrix.fromArray(rt.projectionMatrix),nt.projectionMatrixInverse.copy(nt.projectionMatrix).invert(),nt.viewport.set(gt.x,gt.y,gt.width,gt.height),et===0&&(m.matrix.copy(nt.matrix),m.matrix.decompose(m.position,m.quaternion,m.scale)),tt===!0&&m.cameras.push(nt)}let ht=s.enabledFeatures;if(ht&&ht.includes("depth-sensing")){let et=y.getDepthInformation(st[0]);et&&et.isValid&&et.texture&&M.init(t,et,s.renderState)}}for(let st=0;st<v.length;st++){let tt=_[st],ht=v[st];tt!==null&&ht!==void 0&&ht.update(tt,j,h||o)}D&&D($,j),j.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:j}),f=null}let K=new af;K.setAnimationLoop(Et),this.setAnimationLoop=function($){D=$},this.dispose=function(){}}},Zi=new Gn,ex=new Se;function nx(n,t){function e(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function i(g,p){p.color.getRGB(g.fogColor.value,of(n)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function s(g,p,S,v,_){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(g,p):p.isMeshToonMaterial?(r(g,p),y(g,p)):p.isMeshPhongMaterial?(r(g,p),d(g,p)):p.isMeshStandardMaterial?(r(g,p),u(g,p),p.isMeshPhysicalMaterial&&c(g,p,_)):p.isMeshMatcapMaterial?(r(g,p),f(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),M(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(o(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?l(g,p,S,v):p.isSpriteMaterial?h(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,e(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===on&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,e(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===on&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,e(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,e(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let S=t.get(p),v=S.envMap,_=S.envMapRotation;v&&(g.envMap.value=v,Zi.copy(_),Zi.x*=-1,Zi.y*=-1,Zi.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Zi.y*=-1,Zi.z*=-1),g.envMapRotation.value.setFromMatrix4(ex.makeRotationFromEuler(Zi)),g.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,g.aoMapTransform))}function o(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,S,v){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*S,g.scale.value=v*.5,p.map&&(g.map.value=p.map,e(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function d(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function y(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function u(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function c(g,p,S){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===on&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=S.texture,g.transmissionSamplerSize.value.set(S.width,S.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,g.specularIntensityMapTransform))}function f(g,p){p.matcap&&(g.matcap.value=p.matcap)}function M(g,p){let S=t.get(p).light;g.referencePosition.value.setFromMatrixPosition(S.matrixWorld),g.nearDistance.value=S.shadow.camera.near,g.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function ix(n,t,e,i){let s={},r={},o=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,v){let _=v.program;i.uniformBlockBinding(S,_)}function h(S,v){let _=s[S.id];_===void 0&&(f(S),_=d(S),s[S.id]=_,S.addEventListener("dispose",g));let L=v.program;i.updateUBOMapping(S,L);let A=t.render.frame;r[S.id]!==A&&(u(S),r[S.id]=A)}function d(S){let v=y();S.__bindingPointIndex=v;let _=n.createBuffer(),L=S.__size,A=S.usage;return n.bindBuffer(n.UNIFORM_BUFFER,_),n.bufferData(n.UNIFORM_BUFFER,L,A),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,v,_),_}function y(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(S){let v=s[S.id],_=S.uniforms,L=S.__cache;n.bindBuffer(n.UNIFORM_BUFFER,v);for(let A=0,w=_.length;A<w;A++){let R=Array.isArray(_[A])?_[A]:[_[A]];for(let x=0,m=R.length;x<m;x++){let b=R[x];if(c(b,A,x,L)===!0){let E=b.__offset,T=Array.isArray(b.value)?b.value:[b.value],k=0;for(let H=0;H<T.length;H++){let P=T[H],z=M(P);typeof P=="number"||typeof P=="boolean"?(b.__data[0]=P,n.bufferSubData(n.UNIFORM_BUFFER,E+k,b.__data)):P.isMatrix3?(b.__data[0]=P.elements[0],b.__data[1]=P.elements[1],b.__data[2]=P.elements[2],b.__data[3]=0,b.__data[4]=P.elements[3],b.__data[5]=P.elements[4],b.__data[6]=P.elements[5],b.__data[7]=0,b.__data[8]=P.elements[6],b.__data[9]=P.elements[7],b.__data[10]=P.elements[8],b.__data[11]=0):(P.toArray(b.__data,k),k+=z.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,E,b.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function c(S,v,_,L){let A=S.value,w=v+"_"+_;if(L[w]===void 0)return typeof A=="number"||typeof A=="boolean"?L[w]=A:L[w]=A.clone(),!0;{let R=L[w];if(typeof A=="number"||typeof A=="boolean"){if(R!==A)return L[w]=A,!0}else if(R.equals(A)===!1)return R.copy(A),!0}return!1}function f(S){let v=S.uniforms,_=0,L=16;for(let w=0,R=v.length;w<R;w++){let x=Array.isArray(v[w])?v[w]:[v[w]];for(let m=0,b=x.length;m<b;m++){let E=x[m],T=Array.isArray(E.value)?E.value:[E.value];for(let k=0,H=T.length;k<H;k++){let P=T[k],z=M(P),W=_%L,q=W%z.boundary,lt=W+q;_+=q,lt!==0&&L-lt<z.storage&&(_+=L-lt),E.__data=new Float32Array(z.storage/Float32Array.BYTES_PER_ELEMENT),E.__offset=_,_+=z.storage}}}let A=_%L;return A>0&&(_+=L-A),S.__size=_,S.__cache={},this}function M(S){let v={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(v.boundary=4,v.storage=4):S.isVector2?(v.boundary=8,v.storage=8):S.isVector3||S.isColor?(v.boundary=16,v.storage=12):S.isVector4?(v.boundary=16,v.storage=16):S.isMatrix3?(v.boundary=48,v.storage=48):S.isMatrix4?(v.boundary=64,v.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),v}function g(S){let v=S.target;v.removeEventListener("dispose",g);let _=o.indexOf(v.__bindingPointIndex);o.splice(_,1),n.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function p(){for(let S in s)n.deleteBuffer(s[S]);o=[],s={},r={}}return{bind:l,update:h,dispose:p}}var ta=class{constructor(t={}){let{canvas:e=lp(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:h=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:y=!1,reverseDepthBuffer:u=!1}=t;this.isWebGLRenderer=!0;let c;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");c=i.getContextAttributes().alpha}else c=o;let f=new Uint32Array(4),M=new Int32Array(4),g=null,p=null,S=[],v=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=sn,this.toneMapping=ti,this.toneMappingExposure=1;let _=this,L=!1,A=0,w=0,R=null,x=-1,m=null,b=new Ve,E=new Ve,T=null,k=new Jt(0),H=0,P=e.width,z=e.height,W=1,q=null,lt=null,D=new Ve(0,0,P,z),Et=new Ve(0,0,P,z),K=!1,$=new Ar,j=!1,st=!1,tt=new Se,ht=new Se,et=new V,rt=new Ve,gt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},nt=!1;function yt(){return R===null?W:1}let G=i;function Ft(F,ft){return e.getContext(F,ft)}try{let F={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:h,powerPreference:d,failIfMajorPerformanceCaveat:y};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Gc}`),e.addEventListener("webglcontextlost",J,!1),e.addEventListener("webglcontextrestored",Y,!1),e.addEventListener("webglcontextcreationerror",at,!1),G===null){let ft="webgl2";if(G=Ft(ft,F),G===null)throw Ft(ft)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(F){throw console.error("THREE.WebGLRenderer: "+F.message),F}let At,_t,Ut,ot,Ot,O,N,pt,Ct,kt,it,dt,ct,vt,St,Rt,It,Ht,Gt,Vt,le,Zt,C,U;function Z(){At=new vg(G),At.init(),Zt=new Ky(G,At),_t=new ug(G,At,t,Zt),Ut=new Yy(G,At),_t.reverseDepthBuffer&&u&&Ut.buffers.depth.setReversed(!0),ot=new bg(G),Ot=new Uy,O=new Jy(G,At,Ut,Ot,_t,Zt,ot),N=new mg(_),pt=new xg(_),Ct=new Cp(G),C=new dg(G,Ct),kt=new _g(G,Ct,ot,C),it=new wg(G,kt,Ct,ot),Gt=new Sg(G,_t,O),Rt=new pg(Ot),dt=new Dy(_,N,pt,At,_t,C,Rt),ct=new nx(_,Ot),vt=new Oy,St=new Vy(At),Ht=new hg(_,N,pt,Ut,it,c,l),It=new Xy(_,it,_t),U=new ix(G,ot,_t,Ut),Vt=new fg(G,At,ot),le=new Mg(G,At,ot),ot.programs=dt.programs,_.capabilities=_t,_.extensions=At,_.properties=Ot,_.renderLists=vt,_.shadowMap=It,_.state=Ut,_.info=ot}Z();let B=new Sc(_,G);this.xr=B,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){let F=At.get("WEBGL_lose_context");F&&F.loseContext()},this.forceContextRestore=function(){let F=At.get("WEBGL_lose_context");F&&F.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(F){F!==void 0&&(W=F,this.setSize(P,z,!1))},this.getSize=function(F){return F.set(P,z)},this.setSize=function(F,ft,Mt=!0){if(B.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}P=F,z=ft,e.width=Math.floor(F*W),e.height=Math.floor(ft*W),Mt===!0&&(e.style.width=F+"px",e.style.height=ft+"px"),this.setViewport(0,0,F,ft)},this.getDrawingBufferSize=function(F){return F.set(P*W,z*W).floor()},this.setDrawingBufferSize=function(F,ft,Mt){P=F,z=ft,W=Mt,e.width=Math.floor(F*Mt),e.height=Math.floor(ft*Mt),this.setViewport(0,0,F,ft)},this.getCurrentViewport=function(F){return F.copy(b)},this.getViewport=function(F){return F.copy(D)},this.setViewport=function(F,ft,Mt,bt){F.isVector4?D.set(F.x,F.y,F.z,F.w):D.set(F,ft,Mt,bt),Ut.viewport(b.copy(D).multiplyScalar(W).round())},this.getScissor=function(F){return F.copy(Et)},this.setScissor=function(F,ft,Mt,bt){F.isVector4?Et.set(F.x,F.y,F.z,F.w):Et.set(F,ft,Mt,bt),Ut.scissor(E.copy(Et).multiplyScalar(W).round())},this.getScissorTest=function(){return K},this.setScissorTest=function(F){Ut.setScissorTest(K=F)},this.setOpaqueSort=function(F){q=F},this.setTransparentSort=function(F){lt=F},this.getClearColor=function(F){return F.copy(Ht.getClearColor())},this.setClearColor=function(){Ht.setClearColor.apply(Ht,arguments)},this.getClearAlpha=function(){return Ht.getClearAlpha()},this.setClearAlpha=function(){Ht.setClearAlpha.apply(Ht,arguments)},this.clear=function(F=!0,ft=!0,Mt=!0){let bt=0;if(F){let ut=!1;if(R!==null){let Bt=R.texture.format;ut=Bt===jc||Bt===Kc||Bt===Jc}if(ut){let Bt=R.texture.type,Xt=Bt===gi||Bt===ns||Bt===Er||Bt===Ws||Bt===qc||Bt===Yc,jt=Ht.getClearColor(),Qt=Ht.getClearAlpha(),de=jt.r,pe=jt.g,te=jt.b;Xt?(f[0]=de,f[1]=pe,f[2]=te,f[3]=Qt,G.clearBufferuiv(G.COLOR,0,f)):(M[0]=de,M[1]=pe,M[2]=te,M[3]=Qt,G.clearBufferiv(G.COLOR,0,M))}else bt|=G.COLOR_BUFFER_BIT}ft&&(bt|=G.DEPTH_BUFFER_BIT),Mt&&(bt|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G.clear(bt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",J,!1),e.removeEventListener("webglcontextrestored",Y,!1),e.removeEventListener("webglcontextcreationerror",at,!1),vt.dispose(),St.dispose(),Ot.dispose(),N.dispose(),pt.dispose(),it.dispose(),C.dispose(),U.dispose(),dt.dispose(),B.dispose(),B.removeEventListener("sessionstart",Lt),B.removeEventListener("sessionend",Dt),wt.stop()};function J(F){F.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function Y(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;let F=ot.autoReset,ft=It.enabled,Mt=It.autoUpdate,bt=It.needsUpdate,ut=It.type;Z(),ot.autoReset=F,It.enabled=ft,It.autoUpdate=Mt,It.needsUpdate=bt,It.type=ut}function at(F){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",F.statusMessage)}function Pt(F){let ft=F.target;ft.removeEventListener("dispose",Pt),Tt(ft)}function Tt(F){I(F),Ot.remove(F)}function I(F){let ft=Ot.get(F).programs;ft!==void 0&&(ft.forEach(function(Mt){dt.releaseProgram(Mt)}),F.isShaderMaterial&&dt.releaseShaderCache(F))}this.renderBufferDirect=function(F,ft,Mt,bt,ut,Bt){ft===null&&(ft=gt);let Xt=ut.isMesh&&ut.matrixWorld.determinant()<0,jt=$i(F,ft,Mt,bt,ut);Ut.setMaterial(bt,Xt);let Qt=Mt.index,de=1;if(bt.wireframe===!0){if(Qt=kt.getWireframeAttribute(Mt),Qt===void 0)return;de=2}let pe=Mt.drawRange,te=Mt.attributes.position,be=pe.start*de,Le=(pe.start+pe.count)*de;Bt!==null&&(be=Math.max(be,Bt.start*de),Le=Math.min(Le,(Bt.start+Bt.count)*de)),Qt!==null?(be=Math.max(be,0),Le=Math.min(Le,Qt.count)):te!=null&&(be=Math.max(be,0),Le=Math.min(Le,te.count));let De=Le-be;if(De<0||De===1/0)return;C.setup(ut,bt,jt,Mt,Qt);let bn,Ee=Vt;if(Qt!==null&&(bn=Ct.get(Qt),Ee=le,Ee.setIndex(bn)),ut.isMesh)bt.wireframe===!0?(Ut.setLineWidth(bt.wireframeLinewidth*yt()),Ee.setMode(G.LINES)):Ee.setMode(G.TRIANGLES);else if(ut.isLine){let ee=bt.linewidth;ee===void 0&&(ee=1),Ut.setLineWidth(ee*yt()),ut.isLineSegments?Ee.setMode(G.LINES):ut.isLineLoop?Ee.setMode(G.LINE_LOOP):Ee.setMode(G.LINE_STRIP)}else ut.isPoints?Ee.setMode(G.POINTS):ut.isSprite&&Ee.setMode(G.TRIANGLES);if(ut.isBatchedMesh)if(ut._multiDrawInstances!==null)Ee.renderMultiDrawInstances(ut._multiDrawStarts,ut._multiDrawCounts,ut._multiDrawCount,ut._multiDrawInstances);else if(At.get("WEBGL_multi_draw"))Ee.renderMultiDraw(ut._multiDrawStarts,ut._multiDrawCounts,ut._multiDrawCount);else{let ee=ut._multiDrawStarts,ri=ut._multiDrawCounts,Te=ut._multiDrawCount,Fn=Qt?Ct.get(Qt).bytesPerElement:1,ds=Ot.get(bt).currentProgram.getUniforms();for(let En=0;En<Te;En++)ds.setValue(G,"_gl_DrawID",En),Ee.render(ee[En]/Fn,ri[En])}else if(ut.isInstancedMesh)Ee.renderInstances(be,De,ut.count);else if(Mt.isInstancedBufferGeometry){let ee=Mt._maxInstanceCount!==void 0?Mt._maxInstanceCount:1/0,ri=Math.min(Mt.instanceCount,ee);Ee.renderInstances(be,De,ri)}else Ee.render(be,De)};function X(F,ft,Mt){F.transparent===!0&&F.side===We&&F.forceSinglePass===!1?(F.side=on,F.needsUpdate=!0,ye(F,ft,Mt),F.side=Ni,F.needsUpdate=!0,ye(F,ft,Mt),F.side=We):ye(F,ft,Mt)}this.compile=function(F,ft,Mt=null){Mt===null&&(Mt=F),p=St.get(Mt),p.init(ft),v.push(p),Mt.traverseVisible(function(ut){ut.isLight&&ut.layers.test(ft.layers)&&(p.pushLight(ut),ut.castShadow&&p.pushShadow(ut))}),F!==Mt&&F.traverseVisible(function(ut){ut.isLight&&ut.layers.test(ft.layers)&&(p.pushLight(ut),ut.castShadow&&p.pushShadow(ut))}),p.setupLights();let bt=new Set;return F.traverse(function(ut){if(!(ut.isMesh||ut.isPoints||ut.isLine||ut.isSprite))return;let Bt=ut.material;if(Bt)if(Array.isArray(Bt))for(let Xt=0;Xt<Bt.length;Xt++){let jt=Bt[Xt];X(jt,Mt,ut),bt.add(jt)}else X(Bt,Mt,ut),bt.add(Bt)}),v.pop(),p=null,bt},this.compileAsync=function(F,ft,Mt=null){let bt=this.compile(F,ft,Mt);return new Promise(ut=>{function Bt(){if(bt.forEach(function(Xt){Ot.get(Xt).currentProgram.isReady()&&bt.delete(Xt)}),bt.size===0){ut(F);return}setTimeout(Bt,10)}At.get("KHR_parallel_shader_compile")!==null?Bt():setTimeout(Bt,10)})};let Q=null;function xt(F){Q&&Q(F)}function Lt(){wt.stop()}function Dt(){wt.start()}let wt=new af;wt.setAnimationLoop(xt),typeof self<"u"&&wt.setContext(self),this.setAnimationLoop=function(F){Q=F,B.setAnimationLoop(F),F===null?wt.stop():wt.start()},B.addEventListener("sessionstart",Lt),B.addEventListener("sessionend",Dt),this.render=function(F,ft){if(ft!==void 0&&ft.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;if(F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),ft.parent===null&&ft.matrixWorldAutoUpdate===!0&&ft.updateMatrixWorld(),B.enabled===!0&&B.isPresenting===!0&&(B.cameraAutoUpdate===!0&&B.updateCamera(ft),ft=B.getCamera()),F.isScene===!0&&F.onBeforeRender(_,F,ft,R),p=St.get(F,v.length),p.init(ft),v.push(p),ht.multiplyMatrices(ft.projectionMatrix,ft.matrixWorldInverse),$.setFromProjectionMatrix(ht),st=this.localClippingEnabled,j=Rt.init(this.clippingPlanes,st),g=vt.get(F,S.length),g.init(),S.push(g),B.enabled===!0&&B.isPresenting===!0){let Bt=_.xr.getDepthSensingMesh();Bt!==null&&Kt(Bt,ft,-1/0,_.sortObjects)}Kt(F,ft,0,_.sortObjects),g.finish(),_.sortObjects===!0&&g.sort(q,lt),nt=B.enabled===!1||B.isPresenting===!1||B.hasDepthSensing()===!1,nt&&Ht.addToRenderList(g,F),this.info.render.frame++,j===!0&&Rt.beginShadows();let Mt=p.state.shadowsArray;It.render(Mt,F,ft),j===!0&&Rt.endShadows(),this.info.autoReset===!0&&this.info.reset();let bt=g.opaque,ut=g.transmissive;if(p.setupLights(),ft.isArrayCamera){let Bt=ft.cameras;if(ut.length>0)for(let Xt=0,jt=Bt.length;Xt<jt;Xt++){let Qt=Bt[Xt];oe(bt,ut,F,Qt)}nt&&Ht.render(F);for(let Xt=0,jt=Bt.length;Xt<jt;Xt++){let Qt=Bt[Xt];se(g,F,Qt,Qt.viewport)}}else ut.length>0&&oe(bt,ut,F,ft),nt&&Ht.render(F),se(g,F,ft);R!==null&&(O.updateMultisampleRenderTarget(R),O.updateRenderTargetMipmap(R)),F.isScene===!0&&F.onAfterRender(_,F,ft),C.resetDefaultState(),x=-1,m=null,v.pop(),v.length>0?(p=v[v.length-1],j===!0&&Rt.setGlobalState(_.clippingPlanes,p.state.camera)):p=null,S.pop(),S.length>0?g=S[S.length-1]:g=null};function Kt(F,ft,Mt,bt){if(F.visible===!1)return;if(F.layers.test(ft.layers)){if(F.isGroup)Mt=F.renderOrder;else if(F.isLOD)F.autoUpdate===!0&&F.update(ft);else if(F.isLight)p.pushLight(F),F.castShadow&&p.pushShadow(F);else if(F.isSprite){if(!F.frustumCulled||$.intersectsSprite(F)){bt&&rt.setFromMatrixPosition(F.matrixWorld).applyMatrix4(ht);let Xt=it.update(F),jt=F.material;jt.visible&&g.push(F,Xt,jt,Mt,rt.z,null)}}else if((F.isMesh||F.isLine||F.isPoints)&&(!F.frustumCulled||$.intersectsObject(F))){let Xt=it.update(F),jt=F.material;if(bt&&(F.boundingSphere!==void 0?(F.boundingSphere===null&&F.computeBoundingSphere(),rt.copy(F.boundingSphere.center)):(Xt.boundingSphere===null&&Xt.computeBoundingSphere(),rt.copy(Xt.boundingSphere.center)),rt.applyMatrix4(F.matrixWorld).applyMatrix4(ht)),Array.isArray(jt)){let Qt=Xt.groups;for(let de=0,pe=Qt.length;de<pe;de++){let te=Qt[de],be=jt[te.materialIndex];be&&be.visible&&g.push(F,Xt,be,Mt,rt.z,te)}}else jt.visible&&g.push(F,Xt,jt,Mt,rt.z,null)}}let Bt=F.children;for(let Xt=0,jt=Bt.length;Xt<jt;Xt++)Kt(Bt[Xt],ft,Mt,bt)}function se(F,ft,Mt,bt){let ut=F.opaque,Bt=F.transmissive,Xt=F.transparent;p.setupLightsView(Mt),j===!0&&Rt.setGlobalState(_.clippingPlanes,Mt),bt&&Ut.viewport(b.copy(bt)),ut.length>0&&ae(ut,ft,Mt),Bt.length>0&&ae(Bt,ft,Mt),Xt.length>0&&ae(Xt,ft,Mt),Ut.buffers.depth.setTest(!0),Ut.buffers.depth.setMask(!0),Ut.buffers.color.setMask(!0),Ut.setPolygonOffset(!1)}function oe(F,ft,Mt,bt){if((Mt.isScene===!0?Mt.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[bt.id]===void 0&&(p.state.transmissionRenderTarget[bt.id]=new yi(1,1,{generateMipmaps:!0,type:At.has("EXT_color_buffer_half_float")||At.has("EXT_color_buffer_float")?zr:gi,minFilter:ts,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Me.workingColorSpace}));let Bt=p.state.transmissionRenderTarget[bt.id],Xt=bt.viewport||b;Bt.setSize(Xt.z,Xt.w);let jt=_.getRenderTarget();_.setRenderTarget(Bt),_.getClearColor(k),H=_.getClearAlpha(),H<1&&_.setClearColor(16777215,.5),_.clear(),nt&&Ht.render(Mt);let Qt=_.toneMapping;_.toneMapping=ti;let de=bt.viewport;if(bt.viewport!==void 0&&(bt.viewport=void 0),p.setupLightsView(bt),j===!0&&Rt.setGlobalState(_.clippingPlanes,bt),ae(F,Mt,bt),O.updateMultisampleRenderTarget(Bt),O.updateRenderTargetMipmap(Bt),At.has("WEBGL_multisampled_render_to_texture")===!1){let pe=!1;for(let te=0,be=ft.length;te<be;te++){let Le=ft[te],De=Le.object,bn=Le.geometry,Ee=Le.material,ee=Le.group;if(Ee.side===We&&De.layers.test(bt.layers)){let ri=Ee.side;Ee.side=on,Ee.needsUpdate=!0,we(De,Mt,bt,bn,Ee,ee),Ee.side=ri,Ee.needsUpdate=!0,pe=!0}}pe===!0&&(O.updateMultisampleRenderTarget(Bt),O.updateRenderTargetMipmap(Bt))}_.setRenderTarget(jt),_.setClearColor(k,H),de!==void 0&&(bt.viewport=de),_.toneMapping=Qt}function ae(F,ft,Mt){let bt=ft.isScene===!0?ft.overrideMaterial:null;for(let ut=0,Bt=F.length;ut<Bt;ut++){let Xt=F[ut],jt=Xt.object,Qt=Xt.geometry,de=bt===null?Xt.material:bt,pe=Xt.group;jt.layers.test(Mt.layers)&&we(jt,ft,Mt,Qt,de,pe)}}function we(F,ft,Mt,bt,ut,Bt){F.onBeforeRender(_,ft,Mt,bt,ut,Bt),F.modelViewMatrix.multiplyMatrices(Mt.matrixWorldInverse,F.matrixWorld),F.normalMatrix.getNormalMatrix(F.modelViewMatrix),ut.onBeforeRender(_,ft,Mt,bt,F,Bt),ut.transparent===!0&&ut.side===We&&ut.forceSinglePass===!1?(ut.side=on,ut.needsUpdate=!0,_.renderBufferDirect(Mt,ft,bt,ut,F,Bt),ut.side=Ni,ut.needsUpdate=!0,_.renderBufferDirect(Mt,ft,bt,ut,F,Bt),ut.side=We):_.renderBufferDirect(Mt,ft,bt,ut,F,Bt),F.onAfterRender(_,ft,Mt,bt,ut,Bt)}function ye(F,ft,Mt){ft.isScene!==!0&&(ft=gt);let bt=Ot.get(F),ut=p.state.lights,Bt=p.state.shadowsArray,Xt=ut.state.version,jt=dt.getParameters(F,ut.state,Bt,ft,Mt),Qt=dt.getProgramCacheKey(jt),de=bt.programs;bt.environment=F.isMeshStandardMaterial?ft.environment:null,bt.fog=ft.fog,bt.envMap=(F.isMeshStandardMaterial?pt:N).get(F.envMap||bt.environment),bt.envMapRotation=bt.environment!==null&&F.envMap===null?ft.environmentRotation:F.envMapRotation,de===void 0&&(F.addEventListener("dispose",Pt),de=new Map,bt.programs=de);let pe=de.get(Qt);if(pe!==void 0){if(bt.currentProgram===pe&&bt.lightsStateVersion===Xt)return en(F,jt),pe}else jt.uniforms=dt.getUniforms(F),F.onBeforeCompile(jt,_),pe=dt.acquireProgram(jt,Qt),de.set(Qt,pe),bt.uniforms=jt.uniforms;let te=bt.uniforms;return(!F.isShaderMaterial&&!F.isRawShaderMaterial||F.clipping===!0)&&(te.clippingPlanes=Rt.uniform),en(F,jt),bt.needsLights=Oa(F),bt.lightsStateVersion=Xt,bt.needsLights&&(te.ambientLightColor.value=ut.state.ambient,te.lightProbe.value=ut.state.probe,te.directionalLights.value=ut.state.directional,te.directionalLightShadows.value=ut.state.directionalShadow,te.spotLights.value=ut.state.spot,te.spotLightShadows.value=ut.state.spotShadow,te.rectAreaLights.value=ut.state.rectArea,te.ltc_1.value=ut.state.rectAreaLTC1,te.ltc_2.value=ut.state.rectAreaLTC2,te.pointLights.value=ut.state.point,te.pointLightShadows.value=ut.state.pointShadow,te.hemisphereLights.value=ut.state.hemi,te.directionalShadowMap.value=ut.state.directionalShadowMap,te.directionalShadowMatrix.value=ut.state.directionalShadowMatrix,te.spotShadowMap.value=ut.state.spotShadowMap,te.spotLightMatrix.value=ut.state.spotLightMatrix,te.spotLightMap.value=ut.state.spotLightMap,te.pointShadowMap.value=ut.state.pointShadowMap,te.pointShadowMatrix.value=ut.state.pointShadowMatrix),bt.currentProgram=pe,bt.uniformsList=null,pe}function ln(F){if(F.uniformsList===null){let ft=F.currentProgram.getUniforms();F.uniformsList=Hs.seqWithValue(ft.seq,F.uniforms)}return F.uniformsList}function en(F,ft){let Mt=Ot.get(F);Mt.outputColorSpace=ft.outputColorSpace,Mt.batching=ft.batching,Mt.batchingColor=ft.batchingColor,Mt.instancing=ft.instancing,Mt.instancingColor=ft.instancingColor,Mt.instancingMorph=ft.instancingMorph,Mt.skinning=ft.skinning,Mt.morphTargets=ft.morphTargets,Mt.morphNormals=ft.morphNormals,Mt.morphColors=ft.morphColors,Mt.morphTargetsCount=ft.morphTargetsCount,Mt.numClippingPlanes=ft.numClippingPlanes,Mt.numIntersection=ft.numClipIntersection,Mt.vertexAlphas=ft.vertexAlphas,Mt.vertexTangents=ft.vertexTangents,Mt.toneMapping=ft.toneMapping}function $i(F,ft,Mt,bt,ut){ft.isScene!==!0&&(ft=gt),O.resetTextureUnits();let Bt=ft.fog,Xt=bt.isMeshStandardMaterial?ft.environment:null,jt=R===null?_.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Ks,Qt=(bt.isMeshStandardMaterial?pt:N).get(bt.envMap||Xt),de=bt.vertexColors===!0&&!!Mt.attributes.color&&Mt.attributes.color.itemSize===4,pe=!!Mt.attributes.tangent&&(!!bt.normalMap||bt.anisotropy>0),te=!!Mt.morphAttributes.position,be=!!Mt.morphAttributes.normal,Le=!!Mt.morphAttributes.color,De=ti;bt.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(De=_.toneMapping);let bn=Mt.morphAttributes.position||Mt.morphAttributes.normal||Mt.morphAttributes.color,Ee=bn!==void 0?bn.length:0,ee=Ot.get(bt),ri=p.state.lights;if(j===!0&&(st===!0||F!==m)){let In=F===m&&bt.id===x;Rt.setState(bt,F,In)}let Te=!1;bt.version===ee.__version?(ee.needsLights&&ee.lightsStateVersion!==ri.state.version||ee.outputColorSpace!==jt||ut.isBatchedMesh&&ee.batching===!1||!ut.isBatchedMesh&&ee.batching===!0||ut.isBatchedMesh&&ee.batchingColor===!0&&ut.colorTexture===null||ut.isBatchedMesh&&ee.batchingColor===!1&&ut.colorTexture!==null||ut.isInstancedMesh&&ee.instancing===!1||!ut.isInstancedMesh&&ee.instancing===!0||ut.isSkinnedMesh&&ee.skinning===!1||!ut.isSkinnedMesh&&ee.skinning===!0||ut.isInstancedMesh&&ee.instancingColor===!0&&ut.instanceColor===null||ut.isInstancedMesh&&ee.instancingColor===!1&&ut.instanceColor!==null||ut.isInstancedMesh&&ee.instancingMorph===!0&&ut.morphTexture===null||ut.isInstancedMesh&&ee.instancingMorph===!1&&ut.morphTexture!==null||ee.envMap!==Qt||bt.fog===!0&&ee.fog!==Bt||ee.numClippingPlanes!==void 0&&(ee.numClippingPlanes!==Rt.numPlanes||ee.numIntersection!==Rt.numIntersection)||ee.vertexAlphas!==de||ee.vertexTangents!==pe||ee.morphTargets!==te||ee.morphNormals!==be||ee.morphColors!==Le||ee.toneMapping!==De||ee.morphTargetsCount!==Ee)&&(Te=!0):(Te=!0,ee.__version=bt.version);let Fn=ee.currentProgram;Te===!0&&(Fn=ye(bt,ft,ut));let ds=!1,En=!1,sr=!1,Ue=Fn.getUniforms(),Jn=ee.uniforms;if(Ut.useProgram(Fn.program)&&(ds=!0,En=!0,sr=!0),bt.id!==x&&(x=bt.id,En=!0),ds||m!==F){Ut.buffers.depth.getReversed()?(tt.copy(F.projectionMatrix),hp(tt),dp(tt),Ue.setValue(G,"projectionMatrix",tt)):Ue.setValue(G,"projectionMatrix",F.projectionMatrix),Ue.setValue(G,"viewMatrix",F.matrixWorldInverse);let Si=Ue.map.cameraPosition;Si!==void 0&&Si.setValue(G,et.setFromMatrixPosition(F.matrixWorld)),_t.logarithmicDepthBuffer&&Ue.setValue(G,"logDepthBufFC",2/(Math.log(F.far+1)/Math.LN2)),(bt.isMeshPhongMaterial||bt.isMeshToonMaterial||bt.isMeshLambertMaterial||bt.isMeshBasicMaterial||bt.isMeshStandardMaterial||bt.isShaderMaterial)&&Ue.setValue(G,"isOrthographic",F.isOrthographicCamera===!0),m!==F&&(m=F,En=!0,sr=!0)}if(ut.isSkinnedMesh){Ue.setOptional(G,ut,"bindMatrix"),Ue.setOptional(G,ut,"bindMatrixInverse");let In=ut.skeleton;In&&(In.boneTexture===null&&In.computeBoneTexture(),Ue.setValue(G,"boneTexture",In.boneTexture,O))}ut.isBatchedMesh&&(Ue.setOptional(G,ut,"batchingTexture"),Ue.setValue(G,"batchingTexture",ut._matricesTexture,O),Ue.setOptional(G,ut,"batchingIdTexture"),Ue.setValue(G,"batchingIdTexture",ut._indirectTexture,O),Ue.setOptional(G,ut,"batchingColorTexture"),ut._colorsTexture!==null&&Ue.setValue(G,"batchingColorTexture",ut._colorsTexture,O));let rr=Mt.morphAttributes;if((rr.position!==void 0||rr.normal!==void 0||rr.color!==void 0)&&Gt.update(ut,Mt,Fn),(En||ee.receiveShadow!==ut.receiveShadow)&&(ee.receiveShadow=ut.receiveShadow,Ue.setValue(G,"receiveShadow",ut.receiveShadow)),bt.isMeshGouraudMaterial&&bt.envMap!==null&&(Jn.envMap.value=Qt,Jn.flipEnvMap.value=Qt.isCubeTexture&&Qt.isRenderTargetTexture===!1?-1:1),bt.isMeshStandardMaterial&&bt.envMap===null&&ft.environment!==null&&(Jn.envMapIntensity.value=ft.environmentIntensity),En&&(Ue.setValue(G,"toneMappingExposure",_.toneMappingExposure),ee.needsLights&&Cn(Jn,sr),Bt&&bt.fog===!0&&ct.refreshFogUniforms(Jn,Bt),ct.refreshMaterialUniforms(Jn,bt,W,z,p.state.transmissionRenderTarget[F.id]),Hs.upload(G,ln(ee),Jn,O)),bt.isShaderMaterial&&bt.uniformsNeedUpdate===!0&&(Hs.upload(G,ln(ee),Jn,O),bt.uniformsNeedUpdate=!1),bt.isSpriteMaterial&&Ue.setValue(G,"center",ut.center),Ue.setValue(G,"modelViewMatrix",ut.modelViewMatrix),Ue.setValue(G,"normalMatrix",ut.normalMatrix),Ue.setValue(G,"modelMatrix",ut.matrixWorld),bt.isShaderMaterial||bt.isRawShaderMaterial){let In=bt.uniformsGroups;for(let Si=0,wi=In.length;Si<wi;Si++){let mh=In[Si];U.update(mh,Fn),U.bind(mh,Fn)}}return Fn}function Cn(F,ft){F.ambientLightColor.needsUpdate=ft,F.lightProbe.needsUpdate=ft,F.directionalLights.needsUpdate=ft,F.directionalLightShadows.needsUpdate=ft,F.pointLights.needsUpdate=ft,F.pointLightShadows.needsUpdate=ft,F.spotLights.needsUpdate=ft,F.spotLightShadows.needsUpdate=ft,F.rectAreaLights.needsUpdate=ft,F.hemisphereLights.needsUpdate=ft}function Oa(F){return F.isMeshLambertMaterial||F.isMeshToonMaterial||F.isMeshPhongMaterial||F.isMeshStandardMaterial||F.isShadowMaterial||F.isShaderMaterial&&F.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(F,ft,Mt){Ot.get(F.texture).__webglTexture=ft,Ot.get(F.depthTexture).__webglTexture=Mt;let bt=Ot.get(F);bt.__hasExternalTextures=!0,bt.__autoAllocateDepthBuffer=Mt===void 0,bt.__autoAllocateDepthBuffer||At.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),bt.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(F,ft){let Mt=Ot.get(F);Mt.__webglFramebuffer=ft,Mt.__useDefaultFramebuffer=ft===void 0},this.setRenderTarget=function(F,ft=0,Mt=0){R=F,A=ft,w=Mt;let bt=!0,ut=null,Bt=!1,Xt=!1;if(F){let Qt=Ot.get(F);if(Qt.__useDefaultFramebuffer!==void 0)Ut.bindFramebuffer(G.FRAMEBUFFER,null),bt=!1;else if(Qt.__webglFramebuffer===void 0)O.setupRenderTarget(F);else if(Qt.__hasExternalTextures)O.rebindTextures(F,Ot.get(F.texture).__webglTexture,Ot.get(F.depthTexture).__webglTexture);else if(F.depthBuffer){let te=F.depthTexture;if(Qt.__boundDepthTexture!==te){if(te!==null&&Ot.has(te)&&(F.width!==te.image.width||F.height!==te.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");O.setupDepthRenderbuffer(F)}}let de=F.texture;(de.isData3DTexture||de.isDataArrayTexture||de.isCompressedArrayTexture)&&(Xt=!0);let pe=Ot.get(F).__webglFramebuffer;F.isWebGLCubeRenderTarget?(Array.isArray(pe[ft])?ut=pe[ft][Mt]:ut=pe[ft],Bt=!0):F.samples>0&&O.useMultisampledRTT(F)===!1?ut=Ot.get(F).__webglMultisampledFramebuffer:Array.isArray(pe)?ut=pe[Mt]:ut=pe,b.copy(F.viewport),E.copy(F.scissor),T=F.scissorTest}else b.copy(D).multiplyScalar(W).floor(),E.copy(Et).multiplyScalar(W).floor(),T=K;if(Ut.bindFramebuffer(G.FRAMEBUFFER,ut)&&bt&&Ut.drawBuffers(F,ut),Ut.viewport(b),Ut.scissor(E),Ut.setScissorTest(T),Bt){let Qt=Ot.get(F.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+ft,Qt.__webglTexture,Mt)}else if(Xt){let Qt=Ot.get(F.texture),de=ft||0;G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,Qt.__webglTexture,Mt||0,de)}x=-1},this.readRenderTargetPixels=function(F,ft,Mt,bt,ut,Bt,Xt){if(!(F&&F.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let jt=Ot.get(F).__webglFramebuffer;if(F.isWebGLCubeRenderTarget&&Xt!==void 0&&(jt=jt[Xt]),jt){Ut.bindFramebuffer(G.FRAMEBUFFER,jt);try{let Qt=F.texture,de=Qt.format,pe=Qt.type;if(!_t.textureFormatReadable(de)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!_t.textureTypeReadable(pe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}ft>=0&&ft<=F.width-bt&&Mt>=0&&Mt<=F.height-ut&&G.readPixels(ft,Mt,bt,ut,Zt.convert(de),Zt.convert(pe),Bt)}finally{let Qt=R!==null?Ot.get(R).__webglFramebuffer:null;Ut.bindFramebuffer(G.FRAMEBUFFER,Qt)}}},this.readRenderTargetPixelsAsync=async function(F,ft,Mt,bt,ut,Bt,Xt){if(!(F&&F.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let jt=Ot.get(F).__webglFramebuffer;if(F.isWebGLCubeRenderTarget&&Xt!==void 0&&(jt=jt[Xt]),jt){let Qt=F.texture,de=Qt.format,pe=Qt.type;if(!_t.textureFormatReadable(de))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!_t.textureTypeReadable(pe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(ft>=0&&ft<=F.width-bt&&Mt>=0&&Mt<=F.height-ut){Ut.bindFramebuffer(G.FRAMEBUFFER,jt);let te=G.createBuffer();G.bindBuffer(G.PIXEL_PACK_BUFFER,te),G.bufferData(G.PIXEL_PACK_BUFFER,Bt.byteLength,G.STREAM_READ),G.readPixels(ft,Mt,bt,ut,Zt.convert(de),Zt.convert(pe),0);let be=R!==null?Ot.get(R).__webglFramebuffer:null;Ut.bindFramebuffer(G.FRAMEBUFFER,be);let Le=G.fenceSync(G.SYNC_GPU_COMMANDS_COMPLETE,0);return G.flush(),await cp(G,Le,4),G.bindBuffer(G.PIXEL_PACK_BUFFER,te),G.getBufferSubData(G.PIXEL_PACK_BUFFER,0,Bt),G.deleteBuffer(te),G.deleteSync(Le),Bt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(F,ft=null,Mt=0){F.isTexture!==!0&&(xr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),ft=arguments[0]||null,F=arguments[1]);let bt=Math.pow(2,-Mt),ut=Math.floor(F.image.width*bt),Bt=Math.floor(F.image.height*bt),Xt=ft!==null?ft.x:0,jt=ft!==null?ft.y:0;O.setTexture2D(F,0),G.copyTexSubImage2D(G.TEXTURE_2D,Mt,0,0,Xt,jt,ut,Bt),Ut.unbindTexture()},this.copyTextureToTexture=function(F,ft,Mt=null,bt=null,ut=0){F.isTexture!==!0&&(xr("WebGLRenderer: copyTextureToTexture function signature has changed."),bt=arguments[0]||null,F=arguments[1],ft=arguments[2],ut=arguments[3]||0,Mt=null);let Bt,Xt,jt,Qt,de,pe,te,be,Le,De=F.isCompressedTexture?F.mipmaps[ut]:F.image;Mt!==null?(Bt=Mt.max.x-Mt.min.x,Xt=Mt.max.y-Mt.min.y,jt=Mt.isBox3?Mt.max.z-Mt.min.z:1,Qt=Mt.min.x,de=Mt.min.y,pe=Mt.isBox3?Mt.min.z:0):(Bt=De.width,Xt=De.height,jt=De.depth||1,Qt=0,de=0,pe=0),bt!==null?(te=bt.x,be=bt.y,Le=bt.z):(te=0,be=0,Le=0);let bn=Zt.convert(ft.format),Ee=Zt.convert(ft.type),ee;ft.isData3DTexture?(O.setTexture3D(ft,0),ee=G.TEXTURE_3D):ft.isDataArrayTexture||ft.isCompressedArrayTexture?(O.setTexture2DArray(ft,0),ee=G.TEXTURE_2D_ARRAY):(O.setTexture2D(ft,0),ee=G.TEXTURE_2D),G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,ft.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ft.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,ft.unpackAlignment);let ri=G.getParameter(G.UNPACK_ROW_LENGTH),Te=G.getParameter(G.UNPACK_IMAGE_HEIGHT),Fn=G.getParameter(G.UNPACK_SKIP_PIXELS),ds=G.getParameter(G.UNPACK_SKIP_ROWS),En=G.getParameter(G.UNPACK_SKIP_IMAGES);G.pixelStorei(G.UNPACK_ROW_LENGTH,De.width),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,De.height),G.pixelStorei(G.UNPACK_SKIP_PIXELS,Qt),G.pixelStorei(G.UNPACK_SKIP_ROWS,de),G.pixelStorei(G.UNPACK_SKIP_IMAGES,pe);let sr=F.isDataArrayTexture||F.isData3DTexture,Ue=ft.isDataArrayTexture||ft.isData3DTexture;if(F.isRenderTargetTexture||F.isDepthTexture){let Jn=Ot.get(F),rr=Ot.get(ft),In=Ot.get(Jn.__renderTarget),Si=Ot.get(rr.__renderTarget);Ut.bindFramebuffer(G.READ_FRAMEBUFFER,In.__webglFramebuffer),Ut.bindFramebuffer(G.DRAW_FRAMEBUFFER,Si.__webglFramebuffer);for(let wi=0;wi<jt;wi++)sr&&G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Ot.get(F).__webglTexture,ut,pe+wi),F.isDepthTexture?(Ue&&G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Ot.get(ft).__webglTexture,ut,Le+wi),G.blitFramebuffer(Qt,de,Bt,Xt,te,be,Bt,Xt,G.DEPTH_BUFFER_BIT,G.NEAREST)):Ue?G.copyTexSubImage3D(ee,ut,te,be,Le+wi,Qt,de,Bt,Xt):G.copyTexSubImage2D(ee,ut,te,be,Le+wi,Qt,de,Bt,Xt);Ut.bindFramebuffer(G.READ_FRAMEBUFFER,null),Ut.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else Ue?F.isDataTexture||F.isData3DTexture?G.texSubImage3D(ee,ut,te,be,Le,Bt,Xt,jt,bn,Ee,De.data):ft.isCompressedArrayTexture?G.compressedTexSubImage3D(ee,ut,te,be,Le,Bt,Xt,jt,bn,De.data):G.texSubImage3D(ee,ut,te,be,Le,Bt,Xt,jt,bn,Ee,De):F.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,ut,te,be,Bt,Xt,bn,Ee,De.data):F.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,ut,te,be,De.width,De.height,bn,De.data):G.texSubImage2D(G.TEXTURE_2D,ut,te,be,Bt,Xt,bn,Ee,De);G.pixelStorei(G.UNPACK_ROW_LENGTH,ri),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,Te),G.pixelStorei(G.UNPACK_SKIP_PIXELS,Fn),G.pixelStorei(G.UNPACK_SKIP_ROWS,ds),G.pixelStorei(G.UNPACK_SKIP_IMAGES,En),ut===0&&ft.generateMipmaps&&G.generateMipmap(ee),Ut.unbindTexture()},this.copyTextureToTexture3D=function(F,ft,Mt=null,bt=null,ut=0){return F.isTexture!==!0&&(xr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),Mt=arguments[0]||null,bt=arguments[1]||null,F=arguments[2],ft=arguments[3],ut=arguments[4]||0),xr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(F,ft,Mt,bt,ut)},this.initRenderTarget=function(F){Ot.get(F).__webglFramebuffer===void 0&&O.setupRenderTarget(F)},this.initTexture=function(F){F.isCubeTexture?O.setTextureCube(F,0):F.isData3DTexture?O.setTexture3D(F,0):F.isDataArrayTexture||F.isCompressedArrayTexture?O.setTexture2DArray(F,0):O.setTexture2D(F,0),Ut.unbindTexture()},this.resetState=function(){A=0,w=0,R=null,Ut.reset(),C.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return pi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=Me._getDrawingBufferColorSpace(t),e.unpackColorSpace=Me._getUnpackColorSpace()}};var ea=class n{constructor(t,e=1,i=1e3){this.isFog=!0,this.name="",this.color=new Jt(t),this.near=e,this.far=i}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},na=class extends Ce{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Gn,this.environmentIntensity=1,this.environmentRotation=new Gn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},ia=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=ac,this.updateRanges=[],this.version=0,this.uuid=ei()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[i+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ei()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ei()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},mn=new V,Rr=class n{constructor(t,e,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)mn.fromBufferAttribute(this,e),mn.applyMatrix4(t),this.setXYZ(e,mn.x,mn.y,mn.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)mn.fromBufferAttribute(this,e),mn.applyNormalMatrix(t),this.setXYZ(e,mn.x,mn.y,mn.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)mn.fromBufferAttribute(this,e),mn.transformDirection(t),this.setXYZ(e,mn.x,mn.y,mn.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=Vn(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Ae(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=Ae(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Ae(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Ae(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Ae(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Vn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Vn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Vn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Vn(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ae(e,this.array),i=Ae(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ae(e,this.array),i=Ae(i,this.array),s=Ae(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ae(e,this.array),i=Ae(i,this.array),s=Ae(s,this.array),r=Ae(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Ne(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new n(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Cr=class extends vi{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new Jt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Ps,fr=new V,Ls=new V,ks=new V,Ds=new Nt,ur=new Nt,ff=new Se,Eo=new V,pr=new V,To=new V,Rd=new Nt,gl=new Nt,Cd=new Nt,sa=class extends Ce{constructor(t=new Cr){if(super(),this.isSprite=!0,this.type="Sprite",Ps===void 0){Ps=new Ie;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new ia(e,5);Ps.setIndex([0,1,2,0,2,3]),Ps.setAttribute("position",new Rr(i,3,0,!1)),Ps.setAttribute("uv",new Rr(i,2,3,!1))}this.geometry=Ps,this.material=t,this.center=new Nt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ls.setFromMatrixScale(this.matrixWorld),ff.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),ks.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ls.multiplyScalar(-ks.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let o=this.center;Ao(Eo.set(-.5,-.5,0),ks,o,Ls,s,r),Ao(pr.set(.5,-.5,0),ks,o,Ls,s,r),Ao(To.set(.5,.5,0),ks,o,Ls,s,r),Rd.set(0,0),gl.set(1,0),Cd.set(1,1);let a=t.ray.intersectTriangle(Eo,pr,To,!1,fr);if(a===null&&(Ao(pr.set(-.5,.5,0),ks,o,Ls,s,r),gl.set(0,1),a=t.ray.intersectTriangle(Eo,To,pr,!1,fr),a===null))return;let l=t.ray.origin.distanceTo(fr);l<t.near||l>t.far||e.push({distance:l,point:fr.clone(),uv:ki.getInterpolation(fr,Eo,pr,To,Rd,gl,Cd,new Nt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function Ao(n,t,e,i,s,r){Ds.subVectors(n,e).addScalar(.5).multiply(i),s!==void 0?(ur.x=r*Ds.x-s*Ds.y,ur.y=s*Ds.x+r*Ds.y):ur.copy(Ds),n.copy(t),n.x+=ur.x,n.y+=ur.y,n.applyMatrix4(ff)}var Ir=class extends Sn{constructor(t=null,e=1,i=1,s,r,o,a,l,h=xn,d=xn,y,u){super(null,o,a,l,h,d,s,r,y,u),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Pr=class extends Ne{constructor(t,e,i,s=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Us=new Se,Id=new Se,Ro=[],Pd=new xi,sx=new Se,mr=new Pe,gr=new Fi,Ze=class extends Pe{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Pr(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,sx)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new xi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Us),Pd.copy(t.boundingBox).applyMatrix4(Us),this.boundingBox.union(Pd)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Fi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Us),gr.copy(t.boundingSphere).applyMatrix4(Us),this.boundingSphere.union(gr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let i=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=t*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(t,e){let i=this.matrixWorld,s=this.count;if(mr.geometry=this.geometry,mr.material=this.material,mr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),gr.copy(this.boundingSphere),gr.applyMatrix4(i),t.ray.intersectsSphere(gr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Us),Id.multiplyMatrices(i,Us),mr.matrixWorld=Id,mr.raycast(t,Ro);for(let o=0,a=Ro.length;o<a;o++){let l=Ro[o];l.instanceId=r,l.object=this,e.push(l)}Ro.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Pr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let i=e.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new Ir(new Float32Array(s*this.count),s,this.count,Zc,Qn));let r=this.morphTexture.source.data.data,o=0;for(let h=0;h<i.length;h++)o+=i[h];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;r[l]=a,r.set(i,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var is=class extends vi{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new Jt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},ra=new V,oa=new V,Ld=new Se,yr=new Wo,Co=new Fi,yl=new V,kd=new V,wc=class extends Ce{constructor(t=new Ie,e=new is){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[0];for(let s=1,r=e.count;s<r;s++)ra.fromBufferAttribute(e,s-1),oa.fromBufferAttribute(e,s),i[s]=i[s-1],i[s]+=ra.distanceTo(oa);t.setAttribute("lineDistance",new ce(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let i=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Co.copy(i.boundingSphere),Co.applyMatrix4(s),Co.radius+=r,t.ray.intersectsSphere(Co)===!1)return;Ld.copy(s).invert(),yr.copy(t.ray).applyMatrix4(Ld);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,h=this.isLineSegments?2:1,d=i.index,u=i.attributes.position;if(d!==null){let c=Math.max(0,o.start),f=Math.min(d.count,o.start+o.count);for(let M=c,g=f-1;M<g;M+=h){let p=d.getX(M),S=d.getX(M+1),v=Io(this,t,yr,l,p,S);v&&e.push(v)}if(this.isLineLoop){let M=d.getX(f-1),g=d.getX(c),p=Io(this,t,yr,l,M,g);p&&e.push(p)}}else{let c=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let M=c,g=f-1;M<g;M+=h){let p=Io(this,t,yr,l,M,M+1);p&&e.push(p)}if(this.isLineLoop){let M=Io(this,t,yr,l,f-1,c);M&&e.push(M)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Io(n,t,e,i,s,r){let o=n.geometry.attributes.position;if(ra.fromBufferAttribute(o,s),oa.fromBufferAttribute(o,r),e.distanceSqToSegment(ra,oa,yl,kd)>i)return;yl.applyMatrix4(n.matrixWorld);let l=t.ray.origin.distanceTo(yl);if(!(l<t.near||l>t.far))return{distance:l,point:kd.clone().applyMatrix4(n.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:n}}var Dd=new V,Ud=new V,Ys=class extends wc{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[];for(let s=0,r=e.count;s<r;s+=2)Dd.fromBufferAttribute(e,s),Ud.fromBufferAttribute(e,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Dd.distanceTo(Ud);t.setAttribute("lineDistance",new ce(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Zs=class extends Sn{constructor(t,e,i,s,r,o,a,l,h){super(t,e,i,s,r,o,a,l,h),this.isCanvasTexture=!0,this.needsUpdate=!0}},kn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],i,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)i=this.getPoint(o/t),r+=i.distanceTo(s),e.push(r),s=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let i=this.getLengths(),s=0,r=i.length,o;e?o=e:o=t*i[r-1];let a=0,l=r-1,h;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),h=i[s]-o,h<0)a=s+1;else if(h>0)l=s-1;else{l=s;break}if(s=l,i[s]===o)return s/(r-1);let d=i[s],u=i[s+1]-d,c=(o-d)/u;return(s+c)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new Nt:new V);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e){let i=new V,s=[],r=[],o=[],a=new V,l=new Se;for(let c=0;c<=t;c++){let f=c/t;s[c]=this.getTangentAt(f,new V)}r[0]=new V,o[0]=new V;let h=Number.MAX_VALUE,d=Math.abs(s[0].x),y=Math.abs(s[0].y),u=Math.abs(s[0].z);d<=h&&(h=d,i.set(1,0,0)),y<=h&&(h=y,i.set(0,1,0)),u<=h&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let c=1;c<=t;c++){if(r[c]=r[c-1].clone(),o[c]=o[c-1].clone(),a.crossVectors(s[c-1],s[c]),a.length()>Number.EPSILON){a.normalize();let f=Math.acos(rn(s[c-1].dot(s[c]),-1,1));r[c].applyMatrix4(l.makeRotationAxis(a,f))}o[c].crossVectors(s[c],r[c])}if(e===!0){let c=Math.acos(rn(r[0].dot(r[t]),-1,1));c/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(c=-c);for(let f=1;f<=t;f++)r[f].applyMatrix4(l.makeRotationAxis(s[f],c*f)),o[f].crossVectors(s[f],r[f])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Lr=class extends kn{constructor(t=0,e=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new Nt){let i=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(a),h=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let d=Math.cos(this.aRotation),y=Math.sin(this.aRotation),u=l-this.aX,c=h-this.aY;l=u*d-c*y+this.aX,h=u*y+c*d+this.aY}return i.set(l,h)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Ec=class extends Lr{constructor(t,e,i,s,r,o){super(t,e,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function nh(){let n=0,t=0,e=0,i=0;function s(r,o,a,l){n=r,t=a,e=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,h){s(o,a,h*(a-r),h*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,h,d,y){let u=(o-r)/h-(a-r)/(h+d)+(a-o)/d,c=(a-o)/d-(l-o)/(d+y)+(l-a)/y;u*=d,c*=d,s(o,a,u,c)},calc:function(r){let o=r*r,a=o*r;return n+t*r+e*o+i*a}}}var Po=new V,xl=new nh,vl=new nh,_l=new nh,kr=class extends kn{constructor(t=[],e=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=s}getPoint(t,e=new V){let i=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let h,d;this.closed||a>0?h=s[(a-1)%r]:(Po.subVectors(s[0],s[1]).add(s[0]),h=Po);let y=s[a%r],u=s[(a+1)%r];if(this.closed||a+2<r?d=s[(a+2)%r]:(Po.subVectors(s[r-1],s[r-2]).add(s[r-1]),d=Po),this.curveType==="centripetal"||this.curveType==="chordal"){let c=this.curveType==="chordal"?.5:.25,f=Math.pow(h.distanceToSquared(y),c),M=Math.pow(y.distanceToSquared(u),c),g=Math.pow(u.distanceToSquared(d),c);M<1e-4&&(M=1),f<1e-4&&(f=M),g<1e-4&&(g=M),xl.initNonuniformCatmullRom(h.x,y.x,u.x,d.x,f,M,g),vl.initNonuniformCatmullRom(h.y,y.y,u.y,d.y,f,M,g),_l.initNonuniformCatmullRom(h.z,y.z,u.z,d.z,f,M,g)}else this.curveType==="catmullrom"&&(xl.initCatmullRom(h.x,y.x,u.x,d.x,this.tension),vl.initCatmullRom(h.y,y.y,u.y,d.y,this.tension),_l.initCatmullRom(h.z,y.z,u.z,d.z,this.tension));return i.set(xl.calc(l),vl.calc(l),_l.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(new V().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Nd(n,t,e,i,s){let r=(i-t)*.5,o=(s-e)*.5,a=n*n,l=n*a;return(2*e-2*i+r+o)*l+(-3*e+3*i-2*r-o)*a+r*n+e}function rx(n,t){let e=1-n;return e*e*t}function ox(n,t){return 2*(1-n)*n*t}function ax(n,t){return n*n*t}function Sr(n,t,e,i){return rx(n,t)+ox(n,e)+ax(n,i)}function lx(n,t){let e=1-n;return e*e*e*t}function cx(n,t){let e=1-n;return 3*e*e*n*t}function hx(n,t){return 3*(1-n)*n*n*t}function dx(n,t){return n*n*n*t}function wr(n,t,e,i,s){return lx(n,t)+cx(n,e)+hx(n,i)+dx(n,s)}var aa=class extends kn{constructor(t=new Nt,e=new Nt,i=new Nt,s=new Nt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new Nt){let i=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(wr(t,s.x,r.x,o.x,a.x),wr(t,s.y,r.y,o.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Tc=class extends kn{constructor(t=new V,e=new V,i=new V,s=new V){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new V){let i=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(wr(t,s.x,r.x,o.x,a.x),wr(t,s.y,r.y,o.y,a.y),wr(t,s.z,r.z,o.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},la=class extends kn{constructor(t=new Nt,e=new Nt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Nt){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Nt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ac=class extends kn{constructor(t=new V,e=new V){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new V){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new V){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ca=class extends kn{constructor(t=new Nt,e=new Nt,i=new Nt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new Nt){let i=e,s=this.v0,r=this.v1,o=this.v2;return i.set(Sr(t,s.x,r.x,o.x),Sr(t,s.y,r.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ha=class extends kn{constructor(t=new V,e=new V,i=new V){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new V){let i=e,s=this.v0,r=this.v1,o=this.v2;return i.set(Sr(t,s.x,r.x,o.x),Sr(t,s.y,r.y,o.y),Sr(t,s.z,r.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},da=class extends kn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Nt){let i=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],h=s[o],d=s[o>s.length-2?s.length-1:o+1],y=s[o>s.length-3?s.length-1:o+2];return i.set(Nd(a,l.x,h.x,d.x,y.x),Nd(a,l.y,h.y,d.y,y.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(new Nt().fromArray(s))}return this}},fa=Object.freeze({__proto__:null,ArcCurve:Ec,CatmullRomCurve3:kr,CubicBezierCurve:aa,CubicBezierCurve3:Tc,EllipseCurve:Lr,LineCurve:la,LineCurve3:Ac,QuadraticBezierCurve:ca,QuadraticBezierCurve3:ha,SplineCurve:da}),Rc=class extends kn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new fa[i](e,t))}return this}getPoint(t,e){let i=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let o=s[r]-i,a=this.curves[r],l=a.getLength(),h=l===0?0:1-o/l;return a.getPointAt(h,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let i=0,s=this.curves.length;i<s;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],i;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let h=0;h<l.length;h++){let d=l[h];i&&i.equals(d)||(e.push(d),i=d)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let s=t.curves[e];this.curves.push(new fa[s.type]().fromJSON(s))}return this}},Dr=class extends Rc{constructor(t){super(),this.type="Path",this.currentPoint=new Nt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let i=new la(this.currentPoint.clone(),new Nt(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,s){let r=new ca(this.currentPoint.clone(),new Nt(t,e),new Nt(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(t,e,i,s,r,o){let a=new aa(this.currentPoint.clone(),new Nt(t,e),new Nt(i,s),new Nt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),i=new da(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,i,s,r,o),this}absarc(t,e,i,s,r,o){return this.absellipse(t,e,i,i,s,r,o),this}ellipse(t,e,i,s,r,o,a,l){let h=this.currentPoint.x,d=this.currentPoint.y;return this.absellipse(t+h,e+d,i,s,r,o,a,l),this}absellipse(t,e,i,s,r,o,a,l){let h=new Lr(t,e,i,s,r,o,a,l);if(this.curves.length>0){let y=h.getPoint(0);y.equals(this.currentPoint)||this.lineTo(y.x,y.y)}this.curves.push(h);let d=h.getPoint(1);return this.currentPoint.copy(d),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Ur=class n extends Ie{constructor(t=[new Nt(0,-.5),new Nt(.5,0),new Nt(0,.5)],e=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:i,phiLength:s},e=Math.floor(e),s=rn(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],h=[],d=1/e,y=new V,u=new Nt,c=new V,f=new V,M=new V,g=0,p=0;for(let S=0;S<=t.length-1;S++)switch(S){case 0:g=t[S+1].x-t[S].x,p=t[S+1].y-t[S].y,c.x=p*1,c.y=-g,c.z=p*0,M.copy(c),c.normalize(),l.push(c.x,c.y,c.z);break;case t.length-1:l.push(M.x,M.y,M.z);break;default:g=t[S+1].x-t[S].x,p=t[S+1].y-t[S].y,c.x=p*1,c.y=-g,c.z=p*0,f.copy(c),c.x+=M.x,c.y+=M.y,c.z+=M.z,c.normalize(),l.push(c.x,c.y,c.z),M.copy(f)}for(let S=0;S<=e;S++){let v=i+S*d*s,_=Math.sin(v),L=Math.cos(v);for(let A=0;A<=t.length-1;A++){y.x=t[A].x*_,y.y=t[A].y,y.z=t[A].x*L,o.push(y.x,y.y,y.z),u.x=S/e,u.y=A/(t.length-1),a.push(u.x,u.y);let w=l[3*A+0]*_,R=l[3*A+1],x=l[3*A+0]*L;h.push(w,R,x)}}for(let S=0;S<e;S++)for(let v=0;v<t.length-1;v++){let _=v+S*t.length,L=_,A=_+t.length,w=_+t.length+1,R=_+1;r.push(L,A,R),r.push(w,R,A)}this.setIndex(r),this.setAttribute("position",new ce(o,3)),this.setAttribute("uv",new ce(a,2)),this.setAttribute("normal",new ce(h,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.points,t.segments,t.phiStart,t.phiLength)}},Wn=class n extends Ur{constructor(t=1,e=1,i=4,s=8){let r=new Dr;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(i),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:i,radialSegments:s}}static fromJSON(t){return new n(t.radius,t.length,t.capSegments,t.radialSegments)}};var ne=class n extends Ie{constructor(t=1,e=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let h=this;s=Math.floor(s),r=Math.floor(r);let d=[],y=[],u=[],c=[],f=0,M=[],g=i/2,p=0;S(),o===!1&&(t>0&&v(!0),e>0&&v(!1)),this.setIndex(d),this.setAttribute("position",new ce(y,3)),this.setAttribute("normal",new ce(u,3)),this.setAttribute("uv",new ce(c,2));function S(){let _=new V,L=new V,A=0,w=(e-t)/i;for(let R=0;R<=r;R++){let x=[],m=R/r,b=m*(e-t)+t;for(let E=0;E<=s;E++){let T=E/s,k=T*l+a,H=Math.sin(k),P=Math.cos(k);L.x=b*H,L.y=-m*i+g,L.z=b*P,y.push(L.x,L.y,L.z),_.set(H,w,P).normalize(),u.push(_.x,_.y,_.z),c.push(T,1-m),x.push(f++)}M.push(x)}for(let R=0;R<s;R++)for(let x=0;x<r;x++){let m=M[x][R],b=M[x+1][R],E=M[x+1][R+1],T=M[x][R+1];(t>0||x!==0)&&(d.push(m,b,T),A+=3),(e>0||x!==r-1)&&(d.push(b,E,T),A+=3)}h.addGroup(p,A,0),p+=A}function v(_){let L=f,A=new Nt,w=new V,R=0,x=_===!0?t:e,m=_===!0?1:-1;for(let E=1;E<=s;E++)y.push(0,g*m,0),u.push(0,m,0),c.push(.5,.5),f++;let b=f;for(let E=0;E<=s;E++){let k=E/s*l+a,H=Math.cos(k),P=Math.sin(k);w.x=x*P,w.y=g*m,w.z=x*H,y.push(w.x,w.y,w.z),u.push(0,m,0),A.x=H*.5+.5,A.y=P*.5*m+.5,c.push(A.x,A.y),f++}for(let E=0;E<s;E++){let T=L+E,k=b+E;_===!0?d.push(k,k+1,T):d.push(k+1,k,T),R+=3}h.addGroup(p,R,_===!0?1:2),p+=R}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},He=class n extends ne{constructor(t=1,e=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new n(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Cc=class n extends Ie{constructor(t=[],e=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:s};let r=[],o=[];a(s),h(i),d(),this.setAttribute("position",new ce(r,3)),this.setAttribute("normal",new ce(r.slice(),3)),this.setAttribute("uv",new ce(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(S){let v=new V,_=new V,L=new V;for(let A=0;A<e.length;A+=3)c(e[A+0],v),c(e[A+1],_),c(e[A+2],L),l(v,_,L,S)}function l(S,v,_,L){let A=L+1,w=[];for(let R=0;R<=A;R++){w[R]=[];let x=S.clone().lerp(_,R/A),m=v.clone().lerp(_,R/A),b=A-R;for(let E=0;E<=b;E++)E===0&&R===A?w[R][E]=x:w[R][E]=x.clone().lerp(m,E/b)}for(let R=0;R<A;R++)for(let x=0;x<2*(A-R)-1;x++){let m=Math.floor(x/2);x%2===0?(u(w[R][m+1]),u(w[R+1][m]),u(w[R][m])):(u(w[R][m+1]),u(w[R+1][m+1]),u(w[R+1][m]))}}function h(S){let v=new V;for(let _=0;_<r.length;_+=3)v.x=r[_+0],v.y=r[_+1],v.z=r[_+2],v.normalize().multiplyScalar(S),r[_+0]=v.x,r[_+1]=v.y,r[_+2]=v.z}function d(){let S=new V;for(let v=0;v<r.length;v+=3){S.x=r[v+0],S.y=r[v+1],S.z=r[v+2];let _=g(S)/2/Math.PI+.5,L=p(S)/Math.PI+.5;o.push(_,1-L)}f(),y()}function y(){for(let S=0;S<o.length;S+=6){let v=o[S+0],_=o[S+2],L=o[S+4],A=Math.max(v,_,L),w=Math.min(v,_,L);A>.9&&w<.1&&(v<.2&&(o[S+0]+=1),_<.2&&(o[S+2]+=1),L<.2&&(o[S+4]+=1))}}function u(S){r.push(S.x,S.y,S.z)}function c(S,v){let _=S*3;v.x=t[_+0],v.y=t[_+1],v.z=t[_+2]}function f(){let S=new V,v=new V,_=new V,L=new V,A=new Nt,w=new Nt,R=new Nt;for(let x=0,m=0;x<r.length;x+=9,m+=6){S.set(r[x+0],r[x+1],r[x+2]),v.set(r[x+3],r[x+4],r[x+5]),_.set(r[x+6],r[x+7],r[x+8]),A.set(o[m+0],o[m+1]),w.set(o[m+2],o[m+3]),R.set(o[m+4],o[m+5]),L.copy(S).add(v).add(_).divideScalar(3);let b=g(L);M(A,m+0,S,b),M(w,m+2,v,b),M(R,m+4,_,b)}}function M(S,v,_,L){L<0&&S.x===1&&(o[v]=S.x-1),_.x===0&&_.z===0&&(o[v]=L/2/Math.PI+.5)}function g(S){return Math.atan2(S.z,-S.x)}function p(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.vertices,t.indices,t.radius,t.details)}};var ss=class extends Dr{constructor(t){super(t),this.uuid=ei(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let i=0,s=this.holes.length;i<s;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let s=t.holes[e];this.holes.push(new Dr().fromJSON(s))}return this}},fx={triangulate:function(n,t,e=2){let i=t&&t.length,s=i?t[0]*e:n.length,r=uf(n,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,h,d,y,u,c;if(i&&(r=yx(n,t,r,e)),n.length>80*e){a=h=n[0],l=d=n[1];for(let f=e;f<s;f+=e)y=n[f],u=n[f+1],y<a&&(a=y),u<l&&(l=u),y>h&&(h=y),u>d&&(d=u);c=Math.max(h-a,d-l),c=c!==0?32767/c:0}return Nr(r,o,e,a,l,c,0),o}};function uf(n,t,e,i,s){let r,o;if(s===Rx(n,t,e,i)>0)for(r=t;r<e;r+=i)o=Od(r,n[r],n[r+1],o);else for(r=e-i;r>=t;r-=i)o=Od(r,n[r],n[r+1],o);return o&&Ea(o,o.next)&&(Fr(o),o=o.next),o}function rs(n,t){if(!n)return n;t||(t=n);let e=n,i;do if(i=!1,!e.steiner&&(Ea(e,e.next)||Be(e.prev,e,e.next)===0)){if(Fr(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function Nr(n,t,e,i,s,r,o){if(!n)return;!o&&r&&bx(n,i,s,r);let a=n,l,h;for(;n.prev!==n.next;){if(l=n.prev,h=n.next,r?px(n,i,s,r):ux(n)){t.push(l.i/e|0),t.push(n.i/e|0),t.push(h.i/e|0),Fr(n),n=h.next,a=h.next;continue}if(n=h,n===a){o?o===1?(n=mx(rs(n),t,e),Nr(n,t,e,i,s,r,2)):o===2&&gx(n,t,e,i,s,r):Nr(rs(n),t,e,i,s,r,1);break}}}function ux(n){let t=n.prev,e=n,i=n.next;if(Be(t,e,i)>=0)return!1;let s=t.x,r=e.x,o=i.x,a=t.y,l=e.y,h=i.y,d=s<r?s<o?s:o:r<o?r:o,y=a<l?a<h?a:h:l<h?l:h,u=s>r?s>o?s:o:r>o?r:o,c=a>l?a>h?a:h:l>h?l:h,f=i.next;for(;f!==t;){if(f.x>=d&&f.x<=u&&f.y>=y&&f.y<=c&&Os(s,a,r,l,o,h,f.x,f.y)&&Be(f.prev,f,f.next)>=0)return!1;f=f.next}return!0}function px(n,t,e,i){let s=n.prev,r=n,o=n.next;if(Be(s,r,o)>=0)return!1;let a=s.x,l=r.x,h=o.x,d=s.y,y=r.y,u=o.y,c=a<l?a<h?a:h:l<h?l:h,f=d<y?d<u?d:u:y<u?y:u,M=a>l?a>h?a:h:l>h?l:h,g=d>y?d>u?d:u:y>u?y:u,p=Ic(c,f,t,e,i),S=Ic(M,g,t,e,i),v=n.prevZ,_=n.nextZ;for(;v&&v.z>=p&&_&&_.z<=S;){if(v.x>=c&&v.x<=M&&v.y>=f&&v.y<=g&&v!==s&&v!==o&&Os(a,d,l,y,h,u,v.x,v.y)&&Be(v.prev,v,v.next)>=0||(v=v.prevZ,_.x>=c&&_.x<=M&&_.y>=f&&_.y<=g&&_!==s&&_!==o&&Os(a,d,l,y,h,u,_.x,_.y)&&Be(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;v&&v.z>=p;){if(v.x>=c&&v.x<=M&&v.y>=f&&v.y<=g&&v!==s&&v!==o&&Os(a,d,l,y,h,u,v.x,v.y)&&Be(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;_&&_.z<=S;){if(_.x>=c&&_.x<=M&&_.y>=f&&_.y<=g&&_!==s&&_!==o&&Os(a,d,l,y,h,u,_.x,_.y)&&Be(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function mx(n,t,e){let i=n;do{let s=i.prev,r=i.next.next;!Ea(s,r)&&pf(s,i,i.next,r)&&Or(s,r)&&Or(r,s)&&(t.push(s.i/e|0),t.push(i.i/e|0),t.push(r.i/e|0),Fr(i),Fr(i.next),i=n=r),i=i.next}while(i!==n);return rs(i)}function gx(n,t,e,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Ex(o,a)){let l=mf(o,a);o=rs(o,o.next),l=rs(l,l.next),Nr(o,t,e,i,s,r,0),Nr(l,t,e,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function yx(n,t,e,i){let s=[],r,o,a,l,h;for(r=0,o=t.length;r<o;r++)a=t[r]*i,l=r<o-1?t[r+1]*i:n.length,h=uf(n,a,l,i,!1),h===h.next&&(h.steiner=!0),s.push(wx(h));for(s.sort(xx),r=0;r<s.length;r++)e=vx(s[r],e);return e}function xx(n,t){return n.x-t.x}function vx(n,t){let e=_x(n,t);if(!e)return t;let i=mf(e,n);return rs(i,i.next),rs(e,e.next)}function _x(n,t){let e=t,i=-1/0,s,r=n.x,o=n.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){let u=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=r&&u>i&&(i=u,s=e.x<e.next.x?e:e.next,u===r))return s}e=e.next}while(e!==t);if(!s)return null;let a=s,l=s.x,h=s.y,d=1/0,y;e=s;do r>=e.x&&e.x>=l&&r!==e.x&&Os(o<h?r:i,o,l,h,o<h?i:r,o,e.x,e.y)&&(y=Math.abs(o-e.y)/(r-e.x),Or(e,n)&&(y<d||y===d&&(e.x>s.x||e.x===s.x&&Mx(s,e)))&&(s=e,d=y)),e=e.next;while(e!==a);return s}function Mx(n,t){return Be(n.prev,n,t.prev)<0&&Be(t.next,n,n.next)<0}function bx(n,t,e,i){let s=n;do s.z===0&&(s.z=Ic(s.x,s.y,t,e,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,Sx(s)}function Sx(n){let t,e,i,s,r,o,a,l,h=1;do{for(e=n,n=null,r=null,o=0;e;){for(o++,i=e,a=0,t=0;t<h&&(a++,i=i.nextZ,!!i);t++);for(l=h;a>0||l>0&&i;)a!==0&&(l===0||!i||e.z<=i.z)?(s=e,e=e.nextZ,a--):(s=i,i=i.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;e=i}r.nextZ=null,h*=2}while(o>1);return n}function Ic(n,t,e,i,s){return n=(n-e)*s|0,t=(t-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,n|t<<1}function wx(n){let t=n,e=n;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==n);return e}function Os(n,t,e,i,s,r,o,a){return(s-o)*(t-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(i-a)}function Ex(n,t){return n.next.i!==t.i&&n.prev.i!==t.i&&!Tx(n,t)&&(Or(n,t)&&Or(t,n)&&Ax(n,t)&&(Be(n.prev,n,t.prev)||Be(n,t.prev,t))||Ea(n,t)&&Be(n.prev,n,n.next)>0&&Be(t.prev,t,t.next)>0)}function Be(n,t,e){return(t.y-n.y)*(e.x-t.x)-(t.x-n.x)*(e.y-t.y)}function Ea(n,t){return n.x===t.x&&n.y===t.y}function pf(n,t,e,i){let s=ko(Be(n,t,e)),r=ko(Be(n,t,i)),o=ko(Be(e,i,n)),a=ko(Be(e,i,t));return!!(s!==r&&o!==a||s===0&&Lo(n,e,t)||r===0&&Lo(n,i,t)||o===0&&Lo(e,n,i)||a===0&&Lo(e,t,i))}function Lo(n,t,e){return t.x<=Math.max(n.x,e.x)&&t.x>=Math.min(n.x,e.x)&&t.y<=Math.max(n.y,e.y)&&t.y>=Math.min(n.y,e.y)}function ko(n){return n>0?1:n<0?-1:0}function Tx(n,t){let e=n;do{if(e.i!==n.i&&e.next.i!==n.i&&e.i!==t.i&&e.next.i!==t.i&&pf(e,e.next,n,t))return!0;e=e.next}while(e!==n);return!1}function Or(n,t){return Be(n.prev,n,n.next)<0?Be(n,t,n.next)>=0&&Be(n,n.prev,t)>=0:Be(n,t,n.prev)<0||Be(n,n.next,t)<0}function Ax(n,t){let e=n,i=!1,s=(n.x+t.x)/2,r=(n.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==n);return i}function mf(n,t){let e=new Pc(n.i,n.x,n.y),i=new Pc(t.i,t.x,t.y),s=n.next,r=t.prev;return n.next=t,t.prev=n,e.next=s,s.prev=e,i.next=e,e.prev=i,r.next=i,i.prev=r,i}function Od(n,t,e,i){let s=new Pc(n,t,e);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function Fr(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Pc(n,t,e){this.i=n,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Rx(n,t,e,i){let s=0;for(let r=t,o=e-i;r<e;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}var Ui=class n{static area(t){let e=t.length,i=0;for(let s=e-1,r=0;r<e;s=r++)i+=t[s].x*t[r].y-t[r].x*t[s].y;return i*.5}static isClockWise(t){return n.area(t)<0}static triangulateShape(t,e){let i=[],s=[],r=[];Fd(t),zd(i,t);let o=t.length;e.forEach(Fd);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,zd(i,e[l]);let a=fx.triangulate(i,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function Fd(n){let t=n.length;t>2&&n[t-1].equals(n[0])&&n.pop()}function zd(n,t){for(let e=0;e<t.length;e++)n.push(t[e].x),n.push(t[e].y)}var ua=class n extends Ie{constructor(t=new ss([new Nt(.5,.5),new Nt(-.5,.5),new Nt(-.5,-.5),new Nt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let i=this,s=[],r=[];for(let a=0,l=t.length;a<l;a++){let h=t[a];o(h)}this.setAttribute("position",new ce(s,3)),this.setAttribute("uv",new ce(r,2)),this.computeVertexNormals();function o(a){let l=[],h=e.curveSegments!==void 0?e.curveSegments:12,d=e.steps!==void 0?e.steps:1,y=e.depth!==void 0?e.depth:1,u=e.bevelEnabled!==void 0?e.bevelEnabled:!0,c=e.bevelThickness!==void 0?e.bevelThickness:.2,f=e.bevelSize!==void 0?e.bevelSize:c-.1,M=e.bevelOffset!==void 0?e.bevelOffset:0,g=e.bevelSegments!==void 0?e.bevelSegments:3,p=e.extrudePath,S=e.UVGenerator!==void 0?e.UVGenerator:Cx,v,_=!1,L,A,w,R;p&&(v=p.getSpacedPoints(d),_=!0,u=!1,L=p.computeFrenetFrames(d,!1),A=new V,w=new V,R=new V),u||(g=0,c=0,f=0,M=0);let x=a.extractPoints(h),m=x.shape,b=x.holes;if(!Ui.isClockWise(m)){m=m.reverse();for(let nt=0,yt=b.length;nt<yt;nt++){let G=b[nt];Ui.isClockWise(G)&&(b[nt]=G.reverse())}}let T=Ui.triangulateShape(m,b),k=m;for(let nt=0,yt=b.length;nt<yt;nt++){let G=b[nt];m=m.concat(G)}function H(nt,yt,G){return yt||console.error("THREE.ExtrudeGeometry: vec does not exist"),nt.clone().addScaledVector(yt,G)}let P=m.length,z=T.length;function W(nt,yt,G){let Ft,At,_t,Ut=nt.x-yt.x,ot=nt.y-yt.y,Ot=G.x-nt.x,O=G.y-nt.y,N=Ut*Ut+ot*ot,pt=Ut*O-ot*Ot;if(Math.abs(pt)>Number.EPSILON){let Ct=Math.sqrt(N),kt=Math.sqrt(Ot*Ot+O*O),it=yt.x-ot/Ct,dt=yt.y+Ut/Ct,ct=G.x-O/kt,vt=G.y+Ot/kt,St=((ct-it)*O-(vt-dt)*Ot)/(Ut*O-ot*Ot);Ft=it+Ut*St-nt.x,At=dt+ot*St-nt.y;let Rt=Ft*Ft+At*At;if(Rt<=2)return new Nt(Ft,At);_t=Math.sqrt(Rt/2)}else{let Ct=!1;Ut>Number.EPSILON?Ot>Number.EPSILON&&(Ct=!0):Ut<-Number.EPSILON?Ot<-Number.EPSILON&&(Ct=!0):Math.sign(ot)===Math.sign(O)&&(Ct=!0),Ct?(Ft=-ot,At=Ut,_t=Math.sqrt(N)):(Ft=Ut,At=ot,_t=Math.sqrt(N/2))}return new Nt(Ft/_t,At/_t)}let q=[];for(let nt=0,yt=k.length,G=yt-1,Ft=nt+1;nt<yt;nt++,G++,Ft++)G===yt&&(G=0),Ft===yt&&(Ft=0),q[nt]=W(k[nt],k[G],k[Ft]);let lt=[],D,Et=q.concat();for(let nt=0,yt=b.length;nt<yt;nt++){let G=b[nt];D=[];for(let Ft=0,At=G.length,_t=At-1,Ut=Ft+1;Ft<At;Ft++,_t++,Ut++)_t===At&&(_t=0),Ut===At&&(Ut=0),D[Ft]=W(G[Ft],G[_t],G[Ut]);lt.push(D),Et=Et.concat(D)}for(let nt=0;nt<g;nt++){let yt=nt/g,G=c*Math.cos(yt*Math.PI/2),Ft=f*Math.sin(yt*Math.PI/2)+M;for(let At=0,_t=k.length;At<_t;At++){let Ut=H(k[At],q[At],Ft);tt(Ut.x,Ut.y,-G)}for(let At=0,_t=b.length;At<_t;At++){let Ut=b[At];D=lt[At];for(let ot=0,Ot=Ut.length;ot<Ot;ot++){let O=H(Ut[ot],D[ot],Ft);tt(O.x,O.y,-G)}}}let K=f+M;for(let nt=0;nt<P;nt++){let yt=u?H(m[nt],Et[nt],K):m[nt];_?(w.copy(L.normals[0]).multiplyScalar(yt.x),A.copy(L.binormals[0]).multiplyScalar(yt.y),R.copy(v[0]).add(w).add(A),tt(R.x,R.y,R.z)):tt(yt.x,yt.y,0)}for(let nt=1;nt<=d;nt++)for(let yt=0;yt<P;yt++){let G=u?H(m[yt],Et[yt],K):m[yt];_?(w.copy(L.normals[nt]).multiplyScalar(G.x),A.copy(L.binormals[nt]).multiplyScalar(G.y),R.copy(v[nt]).add(w).add(A),tt(R.x,R.y,R.z)):tt(G.x,G.y,y/d*nt)}for(let nt=g-1;nt>=0;nt--){let yt=nt/g,G=c*Math.cos(yt*Math.PI/2),Ft=f*Math.sin(yt*Math.PI/2)+M;for(let At=0,_t=k.length;At<_t;At++){let Ut=H(k[At],q[At],Ft);tt(Ut.x,Ut.y,y+G)}for(let At=0,_t=b.length;At<_t;At++){let Ut=b[At];D=lt[At];for(let ot=0,Ot=Ut.length;ot<Ot;ot++){let O=H(Ut[ot],D[ot],Ft);_?tt(O.x,O.y+v[d-1].y,v[d-1].x+G):tt(O.x,O.y,y+G)}}}$(),j();function $(){let nt=s.length/3;if(u){let yt=0,G=P*yt;for(let Ft=0;Ft<z;Ft++){let At=T[Ft];ht(At[2]+G,At[1]+G,At[0]+G)}yt=d+g*2,G=P*yt;for(let Ft=0;Ft<z;Ft++){let At=T[Ft];ht(At[0]+G,At[1]+G,At[2]+G)}}else{for(let yt=0;yt<z;yt++){let G=T[yt];ht(G[2],G[1],G[0])}for(let yt=0;yt<z;yt++){let G=T[yt];ht(G[0]+P*d,G[1]+P*d,G[2]+P*d)}}i.addGroup(nt,s.length/3-nt,0)}function j(){let nt=s.length/3,yt=0;st(k,yt),yt+=k.length;for(let G=0,Ft=b.length;G<Ft;G++){let At=b[G];st(At,yt),yt+=At.length}i.addGroup(nt,s.length/3-nt,1)}function st(nt,yt){let G=nt.length;for(;--G>=0;){let Ft=G,At=G-1;At<0&&(At=nt.length-1);for(let _t=0,Ut=d+g*2;_t<Ut;_t++){let ot=P*_t,Ot=P*(_t+1),O=yt+Ft+ot,N=yt+At+ot,pt=yt+At+Ot,Ct=yt+Ft+Ot;et(O,N,pt,Ct)}}}function tt(nt,yt,G){l.push(nt),l.push(yt),l.push(G)}function ht(nt,yt,G){rt(nt),rt(yt),rt(G);let Ft=s.length/3,At=S.generateTopUV(i,s,Ft-3,Ft-2,Ft-1);gt(At[0]),gt(At[1]),gt(At[2])}function et(nt,yt,G,Ft){rt(nt),rt(yt),rt(Ft),rt(yt),rt(G),rt(Ft);let At=s.length/3,_t=S.generateSideWallUV(i,s,At-6,At-3,At-2,At-1);gt(_t[0]),gt(_t[1]),gt(_t[3]),gt(_t[1]),gt(_t[2]),gt(_t[3])}function rt(nt){s.push(l[nt*3+0]),s.push(l[nt*3+1]),s.push(l[nt*3+2])}function gt(nt){r.push(nt.x),r.push(nt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,i=this.parameters.options;return Ix(e,i,t)}static fromJSON(t,e){let i=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];i.push(a)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new fa[s.type]().fromJSON(s)),new n(i,t.options)}},Cx={generateTopUV:function(n,t,e,i,s){let r=t[e*3],o=t[e*3+1],a=t[i*3],l=t[i*3+1],h=t[s*3],d=t[s*3+1];return[new Nt(r,o),new Nt(a,l),new Nt(h,d)]},generateSideWallUV:function(n,t,e,i,s,r){let o=t[e*3],a=t[e*3+1],l=t[e*3+2],h=t[i*3],d=t[i*3+1],y=t[i*3+2],u=t[s*3],c=t[s*3+1],f=t[s*3+2],M=t[r*3],g=t[r*3+1],p=t[r*3+2];return Math.abs(a-d)<Math.abs(o-h)?[new Nt(o,1-l),new Nt(h,1-y),new Nt(u,1-f),new Nt(M,1-p)]:[new Nt(a,1-l),new Nt(d,1-y),new Nt(c,1-f),new Nt(g,1-p)]}};function Ix(n,t,e){if(e.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){let r=n[i];e.shapes.push(r.uuid)}else e.shapes.push(n.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var Je=class n extends Cc{constructor(t=1,e=0){let i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new n(t.radius,t.detail)}};var pa=class n extends Ie{constructor(t=.5,e=1,i=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:o},i=Math.max(3,i),s=Math.max(1,s);let a=[],l=[],h=[],d=[],y=t,u=(e-t)/s,c=new V,f=new Nt;for(let M=0;M<=s;M++){for(let g=0;g<=i;g++){let p=r+g/i*o;c.x=y*Math.cos(p),c.y=y*Math.sin(p),l.push(c.x,c.y,c.z),h.push(0,0,1),f.x=(c.x/e+1)/2,f.y=(c.y/e+1)/2,d.push(f.x,f.y)}y+=u}for(let M=0;M<s;M++){let g=M*(i+1);for(let p=0;p<i;p++){let S=p+g,v=S,_=S+i+1,L=S+i+2,A=S+1;a.push(v,_,A),a.push(_,L,A)}}this.setIndex(a),this.setAttribute("position",new ce(l,3)),this.setAttribute("normal",new ce(h,3)),this.setAttribute("uv",new ce(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},ma=class n extends Ie{constructor(t=new ss([new Nt(0,.5),new Nt(-.5,-.5),new Nt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let i=[],s=[],r=[],o=[],a=0,l=0;if(Array.isArray(t)===!1)h(t);else for(let d=0;d<t.length;d++)h(t[d]),this.addGroup(a,l,d),a+=l,l=0;this.setIndex(i),this.setAttribute("position",new ce(s,3)),this.setAttribute("normal",new ce(r,3)),this.setAttribute("uv",new ce(o,2));function h(d){let y=s.length/3,u=d.extractPoints(e),c=u.shape,f=u.holes;Ui.isClockWise(c)===!1&&(c=c.reverse());for(let g=0,p=f.length;g<p;g++){let S=f[g];Ui.isClockWise(S)===!0&&(f[g]=S.reverse())}let M=Ui.triangulateShape(c,f);for(let g=0,p=f.length;g<p;g++){let S=f[g];c=c.concat(S)}for(let g=0,p=c.length;g<p;g++){let S=c[g];s.push(S.x,S.y,0),r.push(0,0,1),o.push(S.x,S.y)}for(let g=0,p=M.length;g<p;g++){let S=M[g],v=S[0]+y,_=S[1]+y,L=S[2]+y;i.push(v,_,L),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return Px(e,t)}static fromJSON(t,e){let i=[];for(let s=0,r=t.shapes.length;s<r;s++){let o=e[t.shapes[s]];i.push(o)}return new n(i,t.curveSegments)}};function Px(n,t){if(t.shapes=[],Array.isArray(n))for(let e=0,i=n.length;e<i;e++){let s=n[e];t.shapes.push(s.uuid)}else t.shapes.push(n.uuid);return t}var fe=class n extends Ie{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),h=0,d=[],y=new V,u=new V,c=[],f=[],M=[],g=[];for(let p=0;p<=i;p++){let S=[],v=p/i,_=0;p===0&&o===0?_=.5/e:p===i&&l===Math.PI&&(_=-.5/e);for(let L=0;L<=e;L++){let A=L/e;y.x=-t*Math.cos(s+A*r)*Math.sin(o+v*a),y.y=t*Math.cos(o+v*a),y.z=t*Math.sin(s+A*r)*Math.sin(o+v*a),f.push(y.x,y.y,y.z),u.copy(y).normalize(),M.push(u.x,u.y,u.z),g.push(A+_,1-v),S.push(h++)}d.push(S)}for(let p=0;p<i;p++)for(let S=0;S<e;S++){let v=d[p][S+1],_=d[p][S],L=d[p+1][S],A=d[p+1][S+1];(p!==0||o>0)&&c.push(v,_,A),(p!==i-1||l<Math.PI)&&c.push(_,L,A)}this.setIndex(c),this.setAttribute("position",new ce(f,3)),this.setAttribute("normal",new ce(M,3)),this.setAttribute("uv",new ce(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Ge=class n extends Ie{constructor(t=1,e=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);let o=[],a=[],l=[],h=[],d=new V,y=new V,u=new V;for(let c=0;c<=i;c++)for(let f=0;f<=s;f++){let M=f/s*r,g=c/i*Math.PI*2;y.x=(t+e*Math.cos(g))*Math.cos(M),y.y=(t+e*Math.cos(g))*Math.sin(M),y.z=e*Math.sin(g),a.push(y.x,y.y,y.z),d.x=t*Math.cos(M),d.y=t*Math.sin(M),u.subVectors(y,d).normalize(),l.push(u.x,u.y,u.z),h.push(f/s),h.push(c/i)}for(let c=1;c<=i;c++)for(let f=1;f<=s;f++){let M=(s+1)*c+f-1,g=(s+1)*(c-1)+f-1,p=(s+1)*(c-1)+f,S=(s+1)*c+f;o.push(M,g,S),o.push(g,p,S)}this.setIndex(o),this.setAttribute("position",new ce(a,3)),this.setAttribute("normal",new ce(l,3)),this.setAttribute("uv",new ce(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var ga=class n extends Ie{constructor(t=new ha(new V(-1,-1,0),new V(-1,1,0),new V(1,1,0)),e=64,i=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:i,radialSegments:s,closed:r};let o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new V,l=new V,h=new Nt,d=new V,y=[],u=[],c=[],f=[];M(),this.setIndex(f),this.setAttribute("position",new ce(y,3)),this.setAttribute("normal",new ce(u,3)),this.setAttribute("uv",new ce(c,2));function M(){for(let v=0;v<e;v++)g(v);g(r===!1?e:0),S(),p()}function g(v){d=t.getPointAt(v/e,d);let _=o.normals[v],L=o.binormals[v];for(let A=0;A<=s;A++){let w=A/s*Math.PI*2,R=Math.sin(w),x=-Math.cos(w);l.x=x*_.x+R*L.x,l.y=x*_.y+R*L.y,l.z=x*_.z+R*L.z,l.normalize(),u.push(l.x,l.y,l.z),a.x=d.x+i*l.x,a.y=d.y+i*l.y,a.z=d.z+i*l.z,y.push(a.x,a.y,a.z)}}function p(){for(let v=1;v<=e;v++)for(let _=1;_<=s;_++){let L=(s+1)*(v-1)+(_-1),A=(s+1)*v+(_-1),w=(s+1)*v+_,R=(s+1)*(v-1)+_;f.push(L,A,R),f.push(A,w,R)}}function S(){for(let v=0;v<=e;v++)for(let _=0;_<=s;_++)h.x=v/e,h.y=_/s,c.push(h.x,h.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new n(new fa[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};var ya=class extends vi{static get type(){return"MeshToonMaterial"}constructor(t){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.color=new Jt(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Jt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=tf,this.normalScale=new Nt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};function Do(n,t,e){return!n||!e&&n.constructor===t?n:typeof t.BYTES_PER_ELEMENT=="number"?new t(n):Array.prototype.slice.call(n)}function Lx(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var Js=class{constructor(t,e,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,s=e[i],r=e[i-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=i+2;;){if(s===void 0){if(t<r)break i;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=e[++i],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=e[--i-1],t>=r)break t}o=i,i=0;break e}break n}for(;i<o;){let a=i+o>>>1;t<e[a]?o=a:i=a+1}if(s=e[i],r=e[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=i[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Lc=class extends Js{constructor(t,e,i,s){super(t,e,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Lh,endingEnd:Lh}}intervalChanged_(t,e,i){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case kh:r=t,a=2*e-i;break;case Dh:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case kh:o=t,l=2*i-e;break;case Dh:o=1,l=i+s[1]-s[0];break;default:o=t-1,l=e}let h=(i-e)*.5,d=this.valueSize;this._weightPrev=h/(e-a),this._weightNext=h/(l-i),this._offsetPrev=r*d,this._offsetNext=o*d}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,h=l-a,d=this._offsetPrev,y=this._offsetNext,u=this._weightPrev,c=this._weightNext,f=(i-e)/(s-e),M=f*f,g=M*f,p=-u*g+2*u*M-u*f,S=(1+u)*g+(-1.5-2*u)*M+(-.5+u)*f+1,v=(-1-c)*g+(1.5+c)*M+.5*f,_=c*g-c*M;for(let L=0;L!==a;++L)r[L]=p*o[d+L]+S*o[h+L]+v*o[l+L]+_*o[y+L];return r}},kc=class extends Js{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,h=l-a,d=(i-e)/(s-e),y=1-d;for(let u=0;u!==a;++u)r[u]=o[h+u]*y+o[l+u]*d;return r}},Dc=class extends Js{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Xn=class{constructor(t,e,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Do(e,this.TimeBufferType),this.values=Do(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:Do(t.times,Array),values:Do(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s)}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new Dc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new kc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Lc(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Bo:e=this.InterpolantFactoryMethodDiscrete;break;case oc:e=this.InterpolantFactoryMethodLinear;break;case Va:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Bo;case this.InterpolantFactoryMethodLinear:return oc;case this.InterpolantFactoryMethodSmooth:return Va}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]*=t}return this}trim(t,e){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<t;)++r;for(;o!==-1&&i[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&Lx(s))for(let a=0,l=s.length;a!==l;++a){let h=s[a];if(isNaN(h)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,h),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Va,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,h=t[a],d=t[a+1];if(h!==d&&(a!==1||h!==t[0]))if(s)l=!0;else{let y=a*i,u=y-i,c=y+i;for(let f=0;f!==i;++f){let M=e[y+f];if(M!==e[u+f]||M!==e[c+f]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let y=a*i,u=o*i;for(let c=0;c!==i;++c)e[u+c]=e[y+c]}++o}}if(r>0){t[o]=t[r];for(let a=r*i,l=o*i,h=0;h!==i;++h)e[l+h]=e[a+h];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,s=new i(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};Xn.prototype.TimeBufferType=Float32Array;Xn.prototype.ValueBufferType=Float32Array;Xn.prototype.DefaultInterpolation=oc;var os=class extends Xn{constructor(t,e,i){super(t,e,i)}};os.prototype.ValueTypeName="bool";os.prototype.ValueBufferType=Array;os.prototype.DefaultInterpolation=Bo;os.prototype.InterpolantFactoryMethodLinear=void 0;os.prototype.InterpolantFactoryMethodSmooth=void 0;var Uc=class extends Xn{};Uc.prototype.ValueTypeName="color";var Nc=class extends Xn{};Nc.prototype.ValueTypeName="number";var Oc=class extends Js{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-e)/(s-e),h=t*a;for(let d=h+a;h!==d;h+=4)ni.slerpFlat(r,0,o,h-a,o,h,l);return r}},xa=class extends Xn{InterpolantFactoryMethodLinear(t){return new Oc(this.times,this.values,this.getValueSize(),t)}};xa.prototype.ValueTypeName="quaternion";xa.prototype.InterpolantFactoryMethodSmooth=void 0;var as=class extends Xn{constructor(t,e,i){super(t,e,i)}};as.prototype.ValueTypeName="string";as.prototype.ValueBufferType=Array;as.prototype.DefaultInterpolation=Bo;as.prototype.InterpolantFactoryMethodLinear=void 0;as.prototype.InterpolantFactoryMethodSmooth=void 0;var Fc=class extends Xn{};Fc.prototype.ValueTypeName="vector";var zc=class{constructor(t,e,i){let s=this,r=!1,o=0,a=0,l,h=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this.itemStart=function(d){a++,r===!1&&s.onStart!==void 0&&s.onStart(d,o,a),r=!0},this.itemEnd=function(d){o++,s.onProgress!==void 0&&s.onProgress(d,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(d){s.onError!==void 0&&s.onError(d)},this.resolveURL=function(d){return l?l(d):d},this.setURLModifier=function(d){return l=d,this},this.addHandler=function(d,y){return h.push(d,y),this},this.removeHandler=function(d){let y=h.indexOf(d);return y!==-1&&h.splice(y,2),this},this.getHandler=function(d){for(let y=0,u=h.length;y<u;y+=2){let c=h[y],f=h[y+1];if(c.global&&(c.lastIndex=0),c.test(d))return f}return null}}},kx=new zc,Bc=class{constructor(t){this.manager=t!==void 0?t:kx,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let i=this;return new Promise(function(s,r){i.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};Bc.DEFAULT_MATERIAL_NAME="__DEFAULT";var va=class extends Ce{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Jt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},_a=class extends va{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ce.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Jt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},Ml=new Se,Bd=new V,Hd=new V,Hc=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Nt(512,512),this.map=null,this.mapPass=null,this.matrix=new Se,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ar,this._frameExtents=new Nt(1,1),this._viewportCount=1,this._viewports=[new Ve(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,i=this.matrix;Bd.setFromMatrixPosition(t.matrixWorld),e.position.copy(Bd),Hd.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Hd),e.updateMatrixWorld(),Ml.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ml),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Ml)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var $c=class extends Hc{constructor(){super(new Ko(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ma=class extends va{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ce.DEFAULT_UP),this.updateMatrix(),this.target=new Ce,this.shadow=new $c}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var ih="\\[\\]\\.:\\/",Dx=new RegExp("["+ih+"]","g"),sh="[^"+ih+"]",Ux="[^"+ih.replace("\\.","")+"]",Nx=/((?:WC+[\/:])*)/.source.replace("WC",sh),Ox=/(WCOD+)?/.source.replace("WCOD",Ux),Fx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",sh),zx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",sh),Bx=new RegExp("^"+Nx+Ox+Fx+zx+"$"),Hx=["material","materials","bones","map"],Vc=class{constructor(t,e,i){let s=i||ze.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},ze=class n{constructor(t,e,i){this.path=e,this.parsedPath=i||n.parseTrackName(e),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new n.Composite(t,e,i):new n(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Dx,"")}static parseTrackName(t){let e=Bx.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);Hx.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=i(a.children);if(l)return l}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)t[e++]=i[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=n.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let h=e.objectIndex;switch(i){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let d=0;d<t.length;d++)if(t[d].name===h){h=d;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(h!==void 0){if(t[h]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[h]}}let o=t[s];if(o===void 0){let h=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+h+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ze.Composite=Vc;ze.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ze.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ze.prototype.GetterByBindingType=[ze.prototype._getValue_direct,ze.prototype._getValue_array,ze.prototype._getValue_arrayElement,ze.prototype._getValue_toArray];ze.prototype.SetterByBindingTypeAndVersioning=[[ze.prototype._setValue_direct,ze.prototype._setValue_direct_setNeedsUpdate,ze.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ze.prototype._setValue_array,ze.prototype._setValue_array_setNeedsUpdate,ze.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ze.prototype._setValue_arrayElement,ze.prototype._setValue_arrayElement_setNeedsUpdate,ze.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ze.prototype._setValue_fromArray,ze.prototype._setValue_fromArray_setNeedsUpdate,ze.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var qv=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Gc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Gc);var $x=2.3,Oe=7.2,Ta=.16,zi=(n,t,e)=>{let i=Math.max(0,Math.min(1,(e-n)/(t-n)));return i*i*(3-2*i)};function gf(n,t,e){let i=n.points,s=i.length-1,r=n.lengthM/s,o=K=>{let $=Math.max(0,Math.min(s,K/r)),j=Math.min(s-1,Math.floor($)),st=$-j,tt=i[Math.max(0,j-1)],ht=i[j],et=i[j+1],rt=i[Math.min(s,j+2)],gt=nt=>.5*(2*ht[nt]+(-tt[nt]+et[nt])*st+(2*tt[nt]-5*ht[nt]+4*et[nt]-rt[nt])*st*st+(-tt[nt]+3*ht[nt]-3*et[nt]+rt[nt])*st*st*st);return[gt(0),gt(2),ht[1]+(et[1]-ht[1])*st]},a=K=>{if(K<=n.lengthM)return o(K);let $=o(n.lengthM-20),j=o(n.lengthM),st=(K-n.lengthM)/20;return[j[0]+(j[0]-$[0])*st,j[1]+(j[1]-$[1])*st,j[2]]},l=2700,h=2585,d=n.overlaps.filter(([K,$])=>$>K).sort((K,$)=>K[1]-$[1]),y=K=>{for(let st=0;st<d.length-1;st++){let[tt,ht]=d[st],[et,rt]=d[st+1];if(K<=rt)return tt+(K-ht)*(et-tt)/(rt-ht)}let[$,j]=d.at(-1);return $+(K-j)},u=[];for(let K=0;K<=l;K+=2)u.push([K,...o(K)]);let c=2600,f=4900,M=[];for(let K=c;K<=f;K+=10){let $=o(K),j=y(K),st=j,tt=1e9;for(let ht of u){if(Math.abs(ht[0]-j)>60)continue;let et=(ht[1]-$[0])**2+(ht[2]-$[1])**2;et<tt&&(tt=et,st=ht[0])}M.push(st)}let g=M.map((K,$)=>{let j=0,st=0;for(let tt=-3;tt<=3;tt++){let ht=$+tt;ht>=0&&ht<M.length&&(j+=M[ht],st++)}return j/st});for(let K=1;K<g.length;K++)g[K]=Math.max(g[K],g[K-1]+.5);let p=K=>{let $=(K-c)/10,j=Math.max(0,Math.min(g.length-2,Math.floor($))),st=$-j;return g[j]+(g[j+1]-g[j])*st},S={};for(let K of e?.runners||[])K.diversions&&(S[K.id]=K.diversions.map($=>{let j=$.path,st=[0];for(let tt=1;tt<j.length;tt++)st.push(st[tt-1]+Math.hypot(j[tt][0]-j[tt-1][0],j[tt][1]-j[tt-1][1]));return{...$,cum:st,len:st.at(-1)}}));let v=(K,$)=>{let j=Math.max(0,Math.min(1,($-K.fromM)/(K.toM-K.fromM)))*K.len,st=0;for(;st<K.cum.length-2&&K.cum[st+1]<j;)st++;let tt=(j-K.cum[st])/Math.max(1e-6,K.cum[st+1]-K.cum[st]);return[K.path[st][0]+(K.path[st+1][0]-K.path[st][0])*tt,K.path[st][1]+(K.path[st+1][1]-K.path[st][1])*tt]};function _(K){if(K<c-60){let tt=a(K);return[tt[0],tt[1]]}let $=a(K);if(K>=f+40)return[$[0],$[1]];let j=zi(c-60,c+60,K)*(1-zi(f-60,f,K));if(j<=0)return[$[0],$[1]];let st=o(Math.min(l,p(Math.max(c,Math.min(f,K)))));return[$[0]+(st[0]-$[0])*j,$[1]+(st[1]-$[1])*j]}function L(K,$){let j=_(K),st=$&&S[$];if(st){for(let tt of st)if(K>tt.fromM&&K<tt.toM){let ht=zi(tt.fromM,tt.fromM+30,K)*(1-zi(tt.toM-30,tt.toM,K)),et=v(tt,K);return j=[j[0]+(et[0]-j[0])*ht,j[1]+(et[1]-j[1])*ht],{x:j[0],z:j[1],div:ht,divInfo:tt}}}return{x:j[0],z:j[1],div:0,divInfo:null}}let[A,w,R,x]=t.bounds,m={x0:A-60,z0:w-60,cell:5};m.nx=Math.ceil((R+60-m.x0)/m.cell)+1,m.nz=Math.ceil((x+60-m.z0)/m.cell)+1,m.h=new Float32Array(m.nx*m.nz);let b=[];for(let K=0;K<=s;K+=2)b.push(i[K]);let E=0;for(let K of b)E+=K[1];E/=b.length;let T=(K,$)=>Math.sin(K*.011+1.3)*Math.cos($*.009-.4)*2.2+Math.sin(K*.027+$*.019)*.9;for(let K=0;K<m.nz;K++)for(let $=0;$<m.nx;$++){let j=m.x0+$*m.cell,st=m.z0+K*m.cell,tt=0,ht=0,et=1e9;for(let nt of b){let yt=(nt[0]-j)**2+(nt[2]-st)**2;yt<et&&(et=yt);let G=1/(yt+400),Ft=G*G;tt+=Ft,ht+=Ft*nt[1]}let rt=zi(30,160,Math.sqrt(et)),gt=ht/tt*(1-rt*.4)+E*rt*.4+T(j,st)*rt;m.h[K*m.nx+$]=gt*$x}let k=t.features.filter(K=>K.closed&&["water","track","tennis","pitch"].includes(K.kind)&&K.pts.length>3);for(let K of k){let $=Dn(K.pts),j=[];for(let ht=Math.max(0,Math.floor(($[1]-12-m.z0)/m.cell));ht<=Math.min(m.nz-1,Math.ceil(($[3]+12-m.z0)/m.cell));ht++)for(let et=Math.max(0,Math.floor(($[0]-12-m.x0)/m.cell));et<=Math.min(m.nx-1,Math.ceil(($[2]+12-m.x0)/m.cell));et++){let rt=m.x0+et*m.cell,gt=m.z0+ht*m.cell,nt=Br(K.pts,rt,gt);nt<12&&j.push([ht*m.nx+et,nt])}let st=0,tt=0;for(let[ht,et]of j)et<0&&(st+=m.h[ht],tt++);if(tt){st/=tt,K.kind==="water"&&(st=Math.min(...j.filter(ht=>ht[1]<0).map(ht=>m.h[ht[0]]))-.2),K._level=st;for(let[ht,et]of j){let rt=1-zi(0,12,et);m.h[ht]=m.h[ht]*(1-rt)+st*rt-(K.kind==="water"?1.6*(1-zi(-6,0,et)):0)}}}{for(let gt=0;gt<3;gt++){let nt=new Float32Array(m.h);for(let yt=1;yt<m.nz-1;yt++)for(let G=1;G<m.nx-1;G++){let Ft=yt*m.nx+G;nt[Ft]=(m.h[Ft]*4+m.h[Ft-1]+m.h[Ft+1]+m.h[Ft-m.nx]+m.h[Ft+m.nx])/8}m.h.set(nt)}let K=new Float32Array(m.nx*m.nz).fill(1e9),$=new Float32Array(m.nx*m.nz),j=new Float32Array(m.nx*m.nz),st=(gt,nt)=>m.h[nt*m.nx+gt],tt=(gt,nt)=>{let yt=Math.round((gt-m.x0)/m.cell),G=Math.round((nt-m.z0)/m.cell);return st(Math.max(0,Math.min(m.nx-1,yt)),Math.max(0,Math.min(m.nz-1,G)))},ht=[[0,h],[2540,2690],[f-80,n.lengthM+45]],et=[];for(let[gt,nt]of ht)for(let yt=gt;yt<=nt;yt+=2){let G=_(yt);et.push([G[0],G[1],tt(G[0],G[1])])}for(let gt=0;gt<4;gt++)for(let nt=1;nt<et.length-1;nt++)et[nt][2]=(et[nt-1][2]+et[nt][2]*2+et[nt+1][2])/4;let rt=Oe/2+7;for(let[gt,nt,yt]of et){let G=Math.floor((gt-rt-m.x0)/m.cell),Ft=Math.ceil((gt+rt-m.x0)/m.cell),At=Math.floor((nt-rt-m.z0)/m.cell),_t=Math.ceil((nt+rt-m.z0)/m.cell);for(let Ut=Math.max(0,At);Ut<=Math.min(m.nz-1,_t);Ut++)for(let ot=Math.max(0,G);ot<=Math.min(m.nx-1,Ft);ot++){let Ot=Math.hypot(m.x0+ot*m.cell-gt,m.z0+Ut*m.cell-nt);if(Ot>rt)continue;let O=Ut*m.nx+ot,N=(1-Ot/rt)**2;$[O]+=N,j[O]+=N*yt,Ot<K[O]&&(K[O]=Ot)}}for(let gt=0;gt<K.length;gt++)if(K[gt]<rt&&$[gt]>0){let nt=1-zi(Oe/2+.5,rt,K[gt]);m.h[gt]=m.h[gt]*(1-nt)+j[gt]/$[gt]*nt}m.pathSamples=et}let H=k.filter(K=>K.kind==="water").sort((K,$)=>$.pts.length-K.pts.length)[0];function P(K,$){let j=(K-m.x0)/m.cell,st=($-m.z0)/m.cell,tt=Math.max(0,Math.min(m.nx-2,Math.floor(j))),ht=Math.max(0,Math.min(m.nz-2,Math.floor(st))),et=Math.max(0,Math.min(1,j-tt)),rt=Math.max(0,Math.min(1,st-ht)),gt=m.h[ht*m.nx+tt],nt=m.h[ht*m.nx+tt+1],yt=m.h[(ht+1)*m.nx+tt],G=m.h[(ht+1)*m.nx+tt+1];return et+rt<=1?gt+(nt-gt)*et+(yt-gt)*rt:G+(yt-G)*(1-et)+(nt-G)*(1-rt)}let z=new V;function W(K,$,j={}){let st=L(K,$),tt=Math.max(0,K-4),ht=tt+8,et=L(tt,$),rt=L(ht,$),gt=rt.x-et.x,nt=rt.z-et.z,yt=Math.hypot(gt,nt)||1;return gt/=yt,nt/=yt,j.x=st.x,j.z=st.z,j.y=P(st.x,st.z)+Ta,j.tx=gt,j.tz=nt,j.rx=-nt,j.rz=gt,j.slope=(P(rt.x,rt.z)-P(et.x,et.z))/Math.max(1,yt),j.div=st.div,j.divInfo=st.divInfo,j}function q(K,$=25){let j=Math.max(0,K-$),st=_(j),tt=_(j+2*$),ht=Math.hypot(tt[0]-st[0],tt[1]-st[1])||1;return z.set((tt[0]-st[0])/ht,0,(tt[1]-st[1])/ht).clone()}let lt=[{from:0,to:h,lift:0},{from:2540,to:2690,lift:.02},{from:f-80,to:n.lengthM+45,lift:.035}],D=n.lengthM;return{P:i,raw:o,rawExt:a,baseXZ:_,LAP1_END_DRAW:h,xzAt:L,sample:W,heading:q,heightAt:P,terrain:m,ribbons:lt,finishM:D,lake:H,flat:k,geoOf:K=>K>=c&&K<=f?p(K):K,diversions:S,LAP1_END:l,MAP_FROM:c,MAP_TO:f}}function Dn(n){let t=[1e9,1e9,-1e9,-1e9];for(let e of n)t[0]=Math.min(t[0],e[0]),t[1]=Math.min(t[1],e[1]),t[2]=Math.max(t[2],e[0]),t[3]=Math.max(t[3],e[1]);return t}function Qs(n,t,e){let i=!1;for(let s=0,r=n.length-1;s<n.length;r=s++){let[o,a]=n[s],[l,h]=n[r];a>e!=h>e&&t<(l-o)*(e-a)/(h-a)+o&&(i=!i)}return i}function Br(n,t,e){let i=1e9;for(let s=0,r=n.length-1;s<n.length;r=s++){let[o,a]=n[r],[l,h]=n[s],d=l-o,y=h-a,u=d*d+y*y||1,c=Math.max(0,Math.min(1,((t-o)*d+(e-a)*y)/u));i=Math.min(i,Math.hypot(t-o-d*c,e-a-y*c))}return Qs(n,t,e)?-i:i}function Xe(n,t=!1){let e=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},o={},a=n[0].morphTargetsRelative,l=new Ie,h=0;for(let d=0;d<n.length;++d){let y=n[d],u=0;if(e!==(y.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let c in y.attributes){if(!i.has(c))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+'. All geometries must have compatible attributes; make sure "'+c+'" attribute exists among all geometries, or in none of them.'),null;r[c]===void 0&&(r[c]=[]),r[c].push(y.attributes[c]),u++}if(u!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+". Make sure all geometries have the same number of attributes."),null;if(a!==y.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let c in y.morphAttributes){if(!s.has(c))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+".  .morphAttributes must be consistent throughout all geometries."),null;o[c]===void 0&&(o[c]=[]),o[c].push(y.morphAttributes[c])}if(t){let c;if(e)c=y.index.count;else if(y.attributes.position!==void 0)c=y.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+". The geometry must have either an index or a position attribute"),null;l.addGroup(h,c,d),h+=c}}if(e){let d=0,y=[];for(let u=0;u<n.length;++u){let c=n[u].index;for(let f=0;f<c.count;++f)y.push(c.getX(f)+d);d+=n[u].attributes.position.count}l.setIndex(y)}for(let d in r){let y=yf(r[d]);if(!y)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+d+" attribute."),null;l.setAttribute(d,y)}for(let d in o){let y=o[d][0].length;if(y===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[d]=[];for(let u=0;u<y;++u){let c=[];for(let M=0;M<o[d].length;++M)c.push(o[d][M][u]);let f=yf(c);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+d+" morphAttribute."),null;l.morphAttributes[d].push(f)}}return l}function yf(n){let t,e,i,s=-1,r=0;for(let h=0;h<n.length;++h){let d=n[h];if(t===void 0&&(t=d.array.constructor),t!==d.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=d.itemSize),e!==d.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=d.normalized),i!==d.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=d.gpuType),s!==d.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=d.count*e}let o=new t(r),a=new Ne(o,e,i),l=0;for(let h=0;h<n.length;++h){let d=n[h];if(d.isInterleavedBufferAttribute){let y=l/e;for(let u=0,c=d.count;u<c;u++)for(let f=0;f<e;f++){let M=d.getComponent(u,f);a.setComponent(u+y,f,M)}}else o.set(d.array,l);l+=d.count*e}return s!==void 0&&(a.gpuType=s),a}var Hr=new V;function Un(n,t,e,i,s,r){let o=2*Math.PI*s/4,a=Math.max(r-2*s,0),l=Math.PI/4;Hr.copy(t),Hr[i]=0,Hr.normalize();let h=.5*o/(o+a),d=1-Hr.angleTo(n)/l;return Math.sign(Hr[e])===1?d*h:a/(o+a)+h+h*(1-d)}var ge=class extends _e{constructor(t=1,e=1,i=1,s=2,r=.1){if(s=s*2+1,r=Math.min(t/2,e/2,i/2,r),super(1,1,1,s,s,s),s===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let a=new V,l=new V,h=new V(t,e,i).divideScalar(2).subScalar(r),d=this.attributes.position.array,y=this.attributes.normal.array,u=this.attributes.uv.array,c=d.length/6,f=new V,M=.5/s;for(let g=0,p=0;g<d.length;g+=3,p+=2)switch(a.fromArray(d,g),l.copy(a),l.x-=Math.sign(l.x)*M,l.y-=Math.sign(l.y)*M,l.z-=Math.sign(l.z)*M,l.normalize(),d[g+0]=h.x*Math.sign(a.x)+l.x*r,d[g+1]=h.y*Math.sign(a.y)+l.y*r,d[g+2]=h.z*Math.sign(a.z)+l.z*r,y[g+0]=l.x,y[g+1]=l.y,y[g+2]=l.z,Math.floor(g/c)){case 0:f.set(1,0,0),u[p+0]=Un(f,l,"z","y",r,i),u[p+1]=1-Un(f,l,"y","z",r,e);break;case 1:f.set(-1,0,0),u[p+0]=1-Un(f,l,"z","y",r,i),u[p+1]=1-Un(f,l,"y","z",r,e);break;case 2:f.set(0,1,0),u[p+0]=1-Un(f,l,"x","z",r,t),u[p+1]=Un(f,l,"z","x",r,i);break;case 3:f.set(0,-1,0),u[p+0]=1-Un(f,l,"x","z",r,t),u[p+1]=1-Un(f,l,"z","x",r,i);break;case 4:f.set(0,0,1),u[p+0]=1-Un(f,l,"x","y",r,t),u[p+1]=1-Un(f,l,"y","x",r,e);break;case 5:f.set(0,0,-1),u[p+0]=Un(f,l,"x","y",r,t),u[p+1]=1-Un(f,l,"y","x",r,e);break}}};var Bi=null;function Vx(){if(Bi)return Bi;let n=[118,172,228,255],t=new Uint8Array(n.length*4);return n.forEach((e,i)=>t.set([e,e,e,255],i*4)),Bi=new Ir(t,n.length,1,Rn),Bi.minFilter=Bi.magFilter=xn,Bi.generateMipmaps=!1,Bi.needsUpdate=!0,Bi}var $r=new Map;function mt(n,t={}){let e=typeof n=="number"||typeof n=="string"?`${n}|${JSON.stringify(t)}`:null;if(e&&!t.map&&$r.has(e))return $r.get(e);let i=new ya({color:new Jt(n??16777215),gradientMap:Vx(),...t});return e&&!t.map&&$r.set(e,i),i}function xf(){for(let n of $r.values())n.dispose();$r.clear(),Vr.forEach(n=>n.dispose()),Vr.clear()}var rh={uRes:{value:new Nt(1920,1080)}},Vr=new Map;function Gx(n=3,t=1709088,e=14){let i=`${n}|${t}|${e}`;if(Vr.has(i))return Vr.get(i);let s=new vn({uniforms:{...th.clone($t.fog),uRes:rh.uRes,uWidth:{value:n},uRef:{value:e},uColor:{value:new Jt(t)}},vertexShader:`
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
      }`,side:on,fog:!0});return Vr.set(i,s),s}function oh(n){if(n.getAttribute("onormal"))return n;n.getAttribute("normal")||n.computeVertexNormals();let t=n.getAttribute("position"),e=n.getAttribute("normal"),i=new Map,s=a=>`${Math.round(t.getX(a)*1e3)},${Math.round(t.getY(a)*1e3)},${Math.round(t.getZ(a)*1e3)}`,r=[];for(let a=0;a<t.count;a++){let l=s(a),h=i.get(l);h||(h=[0,0,0],i.set(l,h)),h[0]+=e.getX(a),h[1]+=e.getY(a),h[2]+=e.getZ(a),r.push(h)}let o=new Float32Array(t.count*3);for(let a=0;a<t.count;a++){let l=r[a],h=Math.hypot(l[0],l[1],l[2])||1;o[a*3]=l[0]/h,o[a*3+1]=l[1]/h,o[a*3+2]=l[2]/h}return n.setAttribute("onormal",new Ne(o,3)),n}function qn(n,t=3,e,i){oh(n.geometry);let s=Gx(t,e,i),r;return n.isInstancedMesh?(r=new Ze(n.geometry,s,n.count),r.instanceMatrix=n.instanceMatrix,r.count=n.count,n.frustumCulled&&n.boundingSphere?(r.boundingSphere=n.boundingSphere,r.frustumCulled=!0):(r.frustumCulled=!1,n.frustumCulled=!1),n.userData.outline=r):(r=new Pe(n.geometry,s),r.frustumCulled=n.frustumCulled),r.castShadow=!1,r.receiveShadow=!1,r.userData.isOutline=!0,r.renderOrder=n.renderOrder,n.add(r),r}function ue(n,t,{cast:e=!0,receive:i=!0,ol:s=0,olColor:r,olRef:o}={}){let a=new Pe(n,t);return a.castShadow=e,a.receiveShadow=i,s&&qn(a,s,r,o),a}function Qe(n,t,e,{repeat:i=!1,srgb:s=!0,aniso:r=8}={}){let o=document.createElement("canvas");o.width=n,o.height=t;let a=o.getContext("2d");e(a,n,t);let l=new Zs(o);return s&&(l.colorSpace=sn),i&&(l.wrapS=l.wrapT=es),l.anisotropy=r,l}var ah='"Lilita One", "Arial Black", "Arial Rounded MT Bold", Impact, sans-serif',Yt=wn(20240817);function wn(n){return()=>{n|=0,n=n+1831565813|0;let t=Math.imul(n^n>>>15,1|n);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function Yn(n,t,e,i){let s=Qe(n,t,e);return document.fonts&&document.fonts.load&&document.fonts.load('64px "Lilita One"').then(()=>{let r=s.image.getContext("2d");r.clearRect(0,0,n,t),e(r,n,t),s.needsUpdate=!0}).catch(()=>{}),i?.push(s),s}function tn(n,t,e,i,s,r="#fff",o="#1a1420",a=.16,l="center"){n.font=`${s}px ${ah}`,n.textAlign=l,n.textBaseline="middle",n.lineJoin="round",n.lineWidth=s*a,n.strokeStyle=o,n.strokeText(t,e,i),n.fillStyle=r,n.fillText(t,e,i)}function vf(n,t,e){let{course:i,park:s,hasFunfair:r}=e,o=[],a=new re;n.add(a);let l=C=>(a.add(C),C),h=t.terrain,d=(h.nx-1)*h.cell,y=(h.nz-1)*h.cell,u=new Map,c=6,f=(C,U)=>`${Math.floor(C/c)},${Math.floor(U/c)}`,M=(C,U,Z)=>{let B=f(C,U),J=u.get(B);J||u.set(B,J=[]),J.push([C,U,Z])},g=(C,U,Z)=>{let B=Math.floor(C/c),J=Math.floor(U/c),Y=Math.ceil((Z+30)/c);for(let at=-Y;at<=Y;at++)for(let Pt=-Y;Pt<=Y;Pt++){let Tt=u.get(`${B+at},${J+Pt}`);if(Tt){for(let[I,X,Q]of Tt)if((I-C)**2+(X-U)**2<(Q+Z)**2)return!1}}return!0},p=[];for(let C of t.ribbons)for(let U=C.from;U<=C.to;U+=3){let Z=t.baseXZ(U);p.push(Z),M(Z[0],Z[1],Oe/2+1.5)}for(let C in t.diversions)for(let U of t.diversions[C])for(let Z of U.path)M(Z[0],Z[1],4);let S=s.features.filter(C=>C.kind==="park").sort((C,U)=>U.pts.length-C.pts.length)[0].pts,v=(C,U)=>Qs(S,C,U),L=s.features.filter(C=>C.closed&&["water","track","tennis","pitch","playground","building"].includes(C.kind)).map(C=>[Dn(C.pts),C]),A=(C,U,Z=2)=>L.some(([B,J])=>C>B[0]-Z&&C<B[2]+Z&&U>B[1]-Z&&U<B[3]+Z&&Br(J.pts,C,U)<Z),w=1.7,R=Qe(Math.round(d*w),Math.round(y*w),(C,U,Z)=>x(C,U,Z),{aniso:8});o.push(R);function x(C,U,Z){let B=I=>(I-h.x0)*w,J=I=>(I-h.z0)*w,Y=(I,X=!0)=>{C.beginPath(),I.forEach((Q,xt)=>xt?C.lineTo(B(Q[0]),J(Q[1])):C.moveTo(B(Q[0]),J(Q[1]))),X&&C.closePath()};C.fillStyle="#d8d2c2",C.fillRect(0,0,U,Z);for(let I=0;I<9e3;I++)C.fillStyle=Yt()<.5?"#cfc8b6":"#e2dccd",C.fillRect(Yt()*U,Yt()*Z,3,3);Y(S),C.fillStyle="#66cf45",C.fill(),C.save(),Y(S),C.clip(),C.translate(U/2,Z/2),C.rotate(-.62);for(let I=-2e3;I<2e3;I+=2*14*w)C.fillStyle="rgba(255,255,140,0.10)",C.fillRect(I,-2500,14*w,5e3);C.setTransform(1,0,0,1,0,0);for(let I=0;I<26e3;I++){let X=Yt()*U,Q=Yt()*Z;C.fillStyle=Yt()<.6?"rgba(40,140,40,0.35)":"rgba(190,255,120,0.35)",C.fillRect(X,Q,2+Yt()*2,2+Yt()*3)}C.restore();let at=(I,X,Q)=>{for(let xt of s.features)xt.kind===I&&xt.closed&&(Y(xt.pts),C.fillStyle=X,C.fill(),Q&&(C.strokeStyle=Q,C.lineWidth=2,C.stroke()))};at("grass","#72d64e"),at("garden","#86dc5c"),at("wood","#3f9e3a"),at("scrub","#5cb544");for(let I of s.features)if(I.kind==="pitch"&&I.closed){C.save(),Y(I.pts),C.clip(),C.fillStyle="#5ccc3f",C.fill();let X=Dn(I.pts);for(let Q=X[0];Q<X[2];Q+=8)C.fillStyle="rgba(255,255,255,0.10)",C.fillRect(B(Q),J(X[1]),4*w,(X[3]-X[1])*w);C.restore(),Y(I.pts),C.strokeStyle="#ffffff",C.lineWidth=2.2,C.stroke()}for(let I of s.features)if(I.kind==="playground"&&I.closed){Y(I.pts),C.fillStyle="#7fcfb4",C.fill(),C.save(),Y(I.pts),C.clip();let X=Dn(I.pts);for(let Q=0;Q<260;Q++)C.fillStyle=Yt()<.5?"rgba(20,80,70,0.18)":"rgba(255,255,255,0.22)",C.fillRect(B(X[0]+Yt()*(X[2]-X[0])),J(X[1]+Yt()*(X[3]-X[1])),3,3);for(let Q=0;Q<(X[2]-X[0])*(X[3]-X[1])/400;Q++)C.beginPath(),C.arc(B(X[0]+Yt()*(X[2]-X[0])),J(X[1]+Yt()*(X[3]-X[1])),1.6*w,0,7),C.fillStyle=["#ffd93b","#57c7ff","#ff6f91"][Q%3],C.fill();C.restore(),Y(I.pts),C.strokeStyle="#ffffff",C.lineWidth=.8*w,C.stroke()}let Pt=I=>{let X=0;for(let Q=0,xt=I.pts.length-1;Q<I.pts.length;xt=Q++)X+=(I.pts[xt][0]+I.pts[Q][0])*(I.pts[xt][1]-I.pts[Q][1]);return Math.abs(X/2)};for(let I of s.features)if(I.kind==="track"&&I.closed&&Pt(I)>5e3){C.save(),Y(I.pts),C.clip(),C.fillStyle="#e2523a",C.fill();let X=9*w,Q=Aa(I.pts),xt=Dn(I.pts),Lt=xt[2]-xt[0],Dt=xt[3]-xt[1],wt=se=>I.pts.map(oe=>[Q[0]+(oe[0]-Q[0])*se,Q[1]+(oe[1]-Q[1])*se]),Kt=1-2*9/Math.min(Lt,Dt);for(let se=1;se<=5;se++)Y(wt(1-(1-Kt)*(se/6))),C.strokeStyle="rgba(255,255,255,0.9)",C.lineWidth=1.6,C.stroke();Y(wt(Kt)),C.fillStyle="#5ccc3f",C.fill(),C.strokeStyle="#ffffff",C.lineWidth=3,C.stroke(),C.restore(),Y(I.pts),C.strokeStyle="#ffffff",C.lineWidth=3,C.stroke()}for(let I of s.features)if(I.kind==="track"&&I.closed&&Pt(I)<=5e3){let X=I.tags?.surface==="sand";if(!I.tags?.surface)continue;Y(I.pts),C.fillStyle=X?"#f2d58f":"#e2523a",C.fill(),C.strokeStyle="#ffffff",C.lineWidth=1.5,C.stroke()}for(let I of s.features)if(I.kind==="tennis"&&I.closed){Y(I.pts),C.fillStyle="#3f9fd1",C.fill(),C.strokeStyle="#ffffff",C.lineWidth=2.5,C.stroke();let X=Aa(I.pts),Q=Dn(I.pts);C.save(),Y(I.pts),C.clip(),C.strokeStyle="rgba(255,255,255,0.9)",C.lineWidth=1.5,C.beginPath(),C.moveTo(B(X[0]),J(Q[1])),C.lineTo(B(X[0]),J(Q[3])),C.stroke(),C.restore()}for(let I of s.features)I.kind==="water"&&I.closed&&(Y(I.pts),C.strokeStyle="#f4efe0",C.lineWidth=3.4*w,C.lineJoin="round",C.stroke(),C.fillStyle="#2f8fe0",C.fill());for(let I of s.features)I.kind==="path"&&(Y(I.pts,!1),C.lineCap="round",C.lineJoin="round",C.strokeStyle="#c9ad78",C.lineWidth=3.6*w,C.stroke());for(let I of s.features)I.kind==="path"&&(Y(I.pts,!1),C.strokeStyle="#ecd8a6",C.lineWidth=2.6*w,C.stroke());let Tt=I=>({primary:15,secondary:12,tertiary:11,residential:8,unclassified:8,service:5,trunk:16})[I.tags?.highway]||7;for(let I of s.features)I.kind==="road"&&(Y(I.pts,I.closed),C.lineCap="round",C.lineJoin="round",C.strokeStyle="#ece6d6",C.lineWidth=(Tt(I)+4)*w,C.stroke());for(let I of s.features)I.kind==="road"&&(Y(I.pts,I.closed),C.strokeStyle="#7f8597",C.lineWidth=Tt(I)*w,C.stroke());for(let I of s.features)I.kind==="road"&&Tt(I)>=11&&(Y(I.pts,!1),C.setLineDash([5*w,5*w]),C.strokeStyle="#f4f1e6",C.lineWidth=.5*w,C.stroke(),C.setLineDash([]));for(let I of s.features)I.kind==="rail"&&(Y(I.pts,!1),C.strokeStyle="#9b8f84",C.lineWidth=5*w,C.stroke());for(let I of s.features)I.kind==="rail"&&(Y(I.pts,!1),C.setLineDash([1,2]),C.strokeStyle="#5b4f46",C.lineWidth=3*w,C.stroke(),C.setLineDash([]),Y(I.pts,!1),C.strokeStyle="#c9ccd6",C.lineWidth=.8,C.stroke());for(let I of s.features)I.kind==="building"&&I.closed&&(Y(I.pts),C.fillStyle="#9c968a",C.fill());for(let I in t.diversions)for(let X of t.diversions[I])C.beginPath(),X.path.forEach((Q,xt)=>xt?C.lineTo(B(Q[0]),J(Q[1])):C.moveTo(B(Q[0]),J(Q[1]))),C.lineCap="round",C.lineJoin="round",C.strokeStyle="rgba(196,160,96,0.85)",C.lineWidth=4*w,C.stroke(),C.setLineDash([2*w,3*w]),C.strokeStyle="rgba(255,240,200,0.8)",C.lineWidth=.6*w,C.stroke(),C.setLineDash([])}{let C=h.nx*h.nz,U=new Float32Array(C*3),Z=new Float32Array(C*2);for(let Q=0;Q<h.nz;Q++)for(let xt=0;xt<h.nx;xt++){let Lt=Q*h.nx+xt;U[Lt*3]=h.x0+xt*h.cell,U[Lt*3+1]=h.h[Lt],U[Lt*3+2]=h.z0+Q*h.cell,Z[Lt*2]=xt/(h.nx-1),Z[Lt*2+1]=1-Q/(h.nz-1)}let B=new Uint32Array((h.nx-1)*(h.nz-1)*6),J=0;for(let Q=0;Q<h.nz-1;Q++)for(let xt=0;xt<h.nx-1;xt++){let Lt=Q*h.nx+xt,Dt=Lt+1,wt=Lt+h.nx,Kt=wt+1;B[J++]=Lt,B[J++]=wt,B[J++]=Dt,B[J++]=Dt,B[J++]=wt,B[J++]=Kt}let Y=new Ie;Y.setAttribute("position",new Ne(U,3)),Y.setAttribute("uv",new Ne(Z,2)),Y.setIndex(new Ne(B,1)),Y.computeVertexNormals();let at=mt(16777215,{map:R}),Pt=Qe(256,256,(Q,xt,Lt)=>{Q.fillStyle="#808080",Q.fillRect(0,0,xt,Lt);for(let Dt=0;Dt<1800;Dt++){let wt=100+Math.floor(Yt()*70);Q.fillStyle=`rgb(${wt},${wt},${wt})`;let Kt=Yt()*xt,se=Yt()*Lt;Q.fillRect(Kt,se,2,3+Yt()*5)}for(let Dt=0;Dt<500;Dt++)Q.fillStyle="rgba(255,255,255,0.18)",Q.fillRect(Yt()*xt,Yt()*Lt,2,2)},{repeat:!0,srgb:!1});o.push(Pt),at.onBeforeCompile=Q=>{Q.uniforms.uDetail={value:Pt},Q.vertexShader=Q.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vWPos;`).replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
vWPos = (modelMatrix * vec4(transformed, 1.0)).xyz;`),Q.fragmentShader=Q.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vWPos; uniform sampler2D uDetail;`).replace("#include <map_fragment>",`#include <map_fragment>
          float dd = length(vWPos - cameraPosition);
          float d1 = texture2D(uDetail, vWPos.xz / 3.0).r, d2 = texture2D(uDetail, vWPos.xz / 11.0).r;
          float fade = 1.0 - smoothstep(25.0, 140.0, dd);
          diffuseColor.rgb *= mix(1.0, 0.8 + 0.4 * mix(d2, d1, fade), 0.55);`)},at.customProgramCacheKey=()=>"terrain-detail";let Tt=ue(Y,at,{cast:!1});Tt.name="terrain",l(Tt);let I=new Pe(new pa(700,5200,48,1),mt(13227680));I.rotation.x=-Math.PI/2,I.position.set(h.x0+d/2,-2,h.z0+y/2),I.receiveShadow=!1,l(I);let X=new Pe(new an(d+1800,y+1800),mt(13686197));X.rotation.x=-Math.PI/2,X.position.set(h.x0+d/2,-3,h.z0+y/2),l(X)}let m=Qe(256,256,(C,U,Z)=>{C.fillStyle="#7f8fb0",C.fillRect(0,0,U,Z);for(let B=0;B<1600;B++)C.fillStyle=Yt()<.5?"rgba(255,255,255,0.07)":"rgba(30,40,70,0.08)",C.fillRect(Yt()*U,Yt()*Z,2,2);C.fillStyle="#6b7a9b",C.fillRect(0,0,U*.035,Z),C.fillRect(U*.965,0,U*.035,Z),C.fillStyle="#ffffff",C.fillRect(U*.06,0,U*.045,Z),C.fillRect(U*.895,0,U*.045,Z),C.fillStyle="rgba(255,255,255,0.35)",C.fillRect(U*.49,0,U*.02,Z*.5)},{repeat:!0});o.push(m);{let C=[];for(let Y of t.ribbons)C.push(b(Y));let U=Xe(C),Z=ue(U,mt(16777215,{map:m}),{cast:!1});Z.name="path",l(Z);let B=Xe(t.ribbons.map(Y=>b(Y,!0))),J=ue(B,mt(5924226),{cast:!1});l(J)}function b(C,U=!1){let Z=[];for(let I=C.from;I<=C.to+.01;I+=2)Z.push(t.baseXZ(I));let B=[],J=[],Y=[],at=0;for(let I=0;I<Z.length;I++){let X=Z[Math.max(0,I-1)],Q=Z[Math.min(Z.length-1,I+1)],xt=Q[0]-X[0],Lt=Q[1]-X[1],Dt=Math.hypot(xt,Lt)||1;xt/=Dt,Lt/=Dt;let wt=-Lt,Kt=xt,se=Oe/2,oe=[Z[I][0]-wt*se,Z[I][1]-Kt*se],ae=[Z[I][0]+wt*se,Z[I][1]+Kt*se],we=t.heightAt(Z[I][0],Z[I][1]),ye=Math.max(t.heightAt(oe[0],oe[1]),we-.05)+Ta+C.lift,ln=Math.max(t.heightAt(ae[0],ae[1]),we-.05)+Ta+C.lift;U?(B.push(oe[0]-wt*.15,ye-.45,oe[1]-Kt*.15,oe[0],ye,oe[1],ae[0],ln,ae[1],ae[0]+wt*.15,ln-.45,ae[1]+Kt*.15),J.push(0,0,0,1,0,1,0,0)):(B.push(oe[0],ye,oe[1],ae[0],ln,ae[1]),J.push(0,at/8,1,at/8)),I&&(at+=2)}let Pt=U?4:2;for(let I=0;I<Z.length-1;I++){let X=I*Pt,Q=(I+1)*Pt;U?(Y.push(X,Q,X+1,X+1,Q,Q+1),Y.push(X+2,Q+2,X+3,X+3,Q+2,Q+3)):Y.push(X,Q,X+1,X+1,Q,Q+1)}let Tt=new Ie;if(Tt.setAttribute("position",new ce(B,3)),Tt.setAttribute("uv",new ce(J,2)),Tt.setIndex(Y),Tt.computeVertexNormals(),Tt.getAttribute("normal").getY(0)<0&&!U){let I=Tt.index.array;for(let X=0;X<I.length;X+=3){let Q=I[X+1];I[X+1]=I[X+2],I[X+2]=Q}Tt.computeVertexNormals()}return Tt}let E={uTime:{value:0}},T=s.features.filter(C=>C.kind==="water"&&C.closed);for(let C of T){let U=(C._level??Math.min(...C.pts.map(at=>t.heightAt(at[0],at[1]))))+.05,Z=new ss(C.pts.map(at=>new Nt(at[0],-at[1]))),B=new ma(Z,4);B.rotateX(-Math.PI/2),B.translate(0,U,0);let J=new vn({uniforms:{...E,...$t.fog},vertexShader:`varying vec3 vW;
${he.fog_pars_vertex}
        void main(){ vec4 w = modelMatrix*vec4(position,1.); vW=w.xyz; vec4 mvPosition = viewMatrix*w; gl_Position=projectionMatrix*mvPosition;
${he.fog_vertex}
}`,fragmentShader:`uniform float uTime; varying vec3 vW;
${he.fog_pars_fragment}
        void main(){
          vec2 p = vW.xz*0.09;
          float w1 = sin(p.x*3.1 + uTime*1.3 + sin(p.y*2.3+uTime*0.7)*1.7);
          float w2 = sin(p.y*2.7 - uTime*1.1 + sin(p.x*1.9-uTime*0.5)*1.9);
          float r = smoothstep(0.86,0.9, w1*w2);
          vec3 c = mix(vec3(0.16,0.55,0.93), vec3(0.24,0.70,1.0), smoothstep(-0.6,0.8,w1*0.5+w2*0.5));
          c = mix(c, vec3(0.92,0.98,1.0), r);
          gl_FragColor = vec4(c,1.);
          #include <colorspace_fragment>

${he.fog_fragment}
        }`,fog:!0}),Y=new Pe(B,J);Y.name="water",l(Y),o.push(J),C._waterLevel=U}let k=[];if(t.lake){let C=t.lake,U=Dn(C.pts),Z=[16767291,16735581,5752831,16777215,16748497,8257418],B=new ge(2,.7,3.6,2,.32),J=new ge(1.2,.5,.8,2,.2);for(let Y=0,at=0;Y<9&&at<300;at++){let Pt=U[0]+Yt()*(U[2]-U[0]),Tt=U[1]+Yt()*(U[3]-U[1]);if(Br(C.pts,Pt,Tt)>-7)continue;let I=new re,X=ue(B,mt(Z[Y%Z.length]),{ol:2.5});I.add(X);let Q=ue(J,mt(16777215),{ol:2});Q.position.y=.45,I.add(Q);let xt=ue(new fe(.42,12,8),mt(Z[(Y+2)%Z.length]),{ol:2});xt.position.set(0,.9,.7),I.add(xt),I.position.set(Pt,(C._waterLevel??0)+.1,Tt),I.rotation.y=Yt()*6.28,l(I),k.push({g:I,ph:Yt()*6.28,x:Pt,z:Tt,a:I.rotation.y}),Y++}}{let C=Qe(128,128,(Y,at,Pt)=>{Y.fillStyle="#ffffff",Y.fillRect(0,0,at,Pt),Y.fillStyle="#ffffff",Y.fillRect(0,0,14,14),Y.fillStyle="#3b4a6b",Y.fillRect(34,30,60,58),Y.fillStyle="#9ec9ff",Y.fillRect(38,34,52,50),Y.fillStyle="#ffffff",Y.fillRect(62,34,4,50),Y.fillRect(38,56,52,4),Y.fillStyle="rgba(0,0,0,0.08)",Y.fillRect(0,118,at,10)},{repeat:!0});o.push(C);let U={generateTopUV:(Y,at,Pt,Tt,I)=>[new Nt(.02,.98),new Nt(.02,.98),new Nt(.02,.98)],generateSideWallUV:(Y,at,Pt,Tt,I,X)=>{let Q=at[Pt*3],xt=at[Pt*3+1],Lt=at[Pt*3+2],Dt=at[Tt*3],wt=at[Tt*3+1],Kt=at[Tt*3+2],se=at[I*3+2],oe=at[X*3+2],ae=(Math.abs(xt-wt)<Math.abs(Q-Dt)?Q:xt)/4.2,we=(Math.abs(xt-wt)<Math.abs(Q-Dt)?Dt:wt)/4.2;return[new Nt(ae,Lt/3.2),new Nt(we,Kt/3.2),new Nt(we,se/3.2),new Nt(ae,oe/3.2)]}},Z=["#e98a64","#f3d9a6","#d86f5a","#f6efe0","#a8c8e6","#f2b5a0","#c9b6e4","#f4c46a"],B=["#5d6488","#7a5d6c","#4f6b78"],J=[];for(let Y of s.features){if(Y.kind!=="building"||!Y.closed||Y.pts.length<4)continue;let at=Aa(Y.pts);if(v(at[0],at[1]))continue;let Pt=parseFloat(Y.tags?.["building:levels"])||(Yt()<.7?3:4),Tt=Math.min(30,Pt*3.1),I=new ss(Y.pts.map(se=>new Nt(se[0],-se[1]))),X;try{X=new ua(I,{depth:Tt,bevelEnabled:!1,UVGenerator:U})}catch{continue}X.rotateX(-Math.PI/2);let Q=Math.min(...Y.pts.map(se=>t.heightAt(se[0],se[1])))-1.5;X.translate(0,Q,0);let xt=X.getAttribute("normal"),Lt=xt.count,Dt=new Float32Array(Lt*3),wt=new Jt(Z[Math.floor(Yt()*Z.length)]).convertSRGBToLinear(),Kt=new Jt(B[Math.floor(Yt()*B.length)]).convertSRGBToLinear();for(let se=0;se<Lt;se++){let oe=xt.getY(se)>.5?Kt:wt;Dt[se*3]=oe.r,Dt[se*3+1]=oe.g,Dt[se*3+2]=oe.b}X.setAttribute("color",new Ne(Dt,3)),J.push(X.index?X.toNonIndexed():X)}if(J.length){let Y=Xe(J),at=ue(Y,mt(16777215,{map:C,vertexColors:!0}),{cast:!0,ol:1.6,olRef:60});at.name="buildings",l(at)}}let H=t.sample(t.finishM),P=t.sample(0),z={start:P,finish:H},W=new re;l(W);function q(C,U,Z,B){let J=new re,Y=Oe/2+1.4,at=.85,Pt=Qe(256,32,(Lt,Dt,wt)=>{for(let Kt=0;Kt<16;Kt++)Lt.fillStyle=Kt%2?Z:B,Lt.fillRect(Kt*Dt/16,0,Dt/16+1,wt)},{repeat:!1});o.push(Pt);let Tt=new Ge(Y,at,14,40,Math.PI);Tt.scale(1,1.25,1);let I=ue(Tt,mt(16777215,{map:Pt}),{ol:3.5});J.add(I);let X=new ne(at*1.4,at*1.6,.8,16);for(let Lt of[-1,1]){let Dt=ue(X,mt(B),{ol:3});Dt.position.set(Lt*Y,.3,0),J.add(Dt)}let Q=Yn(1024,256,(Lt,Dt,wt)=>{Lt.fillStyle="#1b1b3a",$e(Lt,0,0,Dt,wt,60),Lt.fill(),Lt.fillStyle=Z,$e(Lt,12,12,Dt-24,wt-24,50),Lt.fill(),tn(Lt,"MARKRUN",Dt/2,wt*.42,150,"#ffffff","#1b1b3a",.18),tn(Lt,U,Dt/2,wt*.83,56,"#ffe14d","#1b1b3a",.2)},o),xt=ue(new ge(Y*1.55,Y*.4,.7,3,.25),[mt(B),mt(B),mt(B),mt(B),mt(16777215,{map:Q}),mt(16777215,{map:Q})],{ol:3.5});return xt.position.y=Y*1.25+at*1.25+Y*.2-.15,J.add(xt),J.position.set(C.x,C.y-.1,C.z),J.rotation.y=Math.atan2(-C.rz,C.rx),W.add(J),J}z.finishArch=q(H,"FINISH","#ff3d8b","#ffd23f"),q(P,"START","#2e9bff","#ffd23f");let lt=Qe(256,64,(C,U,Z)=>{let J=U/16;for(let Y=0;Y<16;Y++)for(let at=0;at<4;at++)C.fillStyle=(Y+at)%2?"#111":"#fff",C.fillRect(Y*J,at*J,J,J)});o.push(lt);function D(C,U,Z,B=.03){let J=new an(Oe,Z);J.rotateX(-Math.PI/2);let Y=new Pe(J,mt(16777215,{map:U,transparent:!0,alphaTest:.3,polygonOffset:!0,polygonOffsetFactor:-2}));return Y.position.set(C.x,C.y+B,C.z),Y.rotation.y=Math.atan2(-C.rz,C.rx),Y.receiveShadow=!0,l(Y),Y}D(H,lt,2.2,.05);let Et=Yn(512,128,(C,U,Z)=>{C.fillStyle="#ffffff",C.fillRect(0,0,U,22),tn(C,"START",U/2,80,72,"#ffffff","rgba(0,0,0,0)",0)},o);{let C=t.sample(2.5);D(C,Et,3,.05).rotation.y+=Math.PI}let K=new Ce;function $(C,U,Z,{ol:B=0,olRef:J,cast:Y=!0,colors:at,chunk:Pt=0}={}){if(!Z.length)return null;if(Pt){let I=new Map;Z.forEach((Q,xt)=>{let Lt=`${Math.floor(Q.x/Pt)},${Math.floor(Q.z/Pt)}`,Dt=I.get(Lt);Dt||I.set(Lt,Dt={l:[],c:[]}),Dt.l.push(Q),at&&Dt.c.push(at[xt])});let X=null;for(let{l:Q,c:xt}of I.values()){let Lt=$(C,U,Q,{ol:B,olRef:J,cast:Y,colors:at?xt:null});X=X||Lt}return X}let Tt=new Ze(C,U,Z.length);return Z.forEach((I,X)=>{K.position.set(I.x,I.y,I.z),K.rotation.set(I.rx||0,I.ry||0,I.rz||0),K.scale.set(I.sx??I.s??1,I.sy??I.s??1,I.sz??I.s??1),K.updateMatrix(),Tt.setMatrixAt(X,K.matrix),at&&Tt.setColorAt(X,new Jt(at[X]))}),Tt.castShadow=Y,Tt.receiveShadow=!0,Tt.computeBoundingSphere(),B&&qn(Tt,B,void 0,J),l(Tt),Tt}let j=[];{let C=Z=>{let B=t.rawExt(Z-12),J=t.rawExt(Z),Y=t.rawExt(Z+12),at=Math.atan2(J[1]-B[1],J[0]-B[0]),Tt=Math.atan2(Y[1]-J[1],Y[0]-J[0])-at;for(;Tt>Math.PI;)Tt-=2*Math.PI;for(;Tt<-Math.PI;)Tt+=2*Math.PI;return Tt},U=[[20,t.LAP1_END_DRAW-20],[t.MAP_TO-40,t.finishM-10]];for(let[Z,B]of U){let J=null;for(let Y=Z;Y<B;Y+=4){let at=C(Y);Math.abs(at)>.45?(!J||Math.abs(at)>Math.abs(J.d))&&(J={m:Y,d:at}):J&&(j.some(Pt=>Math.abs(Pt.m-J.m)<50)||j.push(J),J=null)}}}let st=[],tt=[],ht=[],et=[];for(let C of j){let U=C.d>0;for(let Z=-2;Z<=2;Z++){let B=t.sample(C.m+Z*5),J=U?-1:1,Y=Oe/2+1.6,at=B.x+B.rx*Y*J,Pt=B.z+B.rz*Y*J;g(at,Pt,.3),(U?tt:st).push({x:at,y:t.heightAt(at,Pt),z:Pt,ry:Math.atan2(-B.tz,B.tx)+(J>0?Math.PI:0)})}for(let Z=-3;Z<=3;Z++){let B=t.sample(C.m+Z*3.5),J=U?1:-1,Y=Oe/2+.7;ht.push({x:B.x+B.rx*Y*J,y:t.heightAt(B.x+B.rx*Y*J,B.z+B.rz*Y*J),z:B.z+B.rz*Y*J,ry:Yt()*6});for(let at=0;at<2;at++){let Pt=t.sample(C.m+Z*3.5+at*1.75),Tt=Oe/2+.1;et.push({x:Pt.x+Pt.rx*Tt*J,y:Pt.y-.05,z:Pt.z+Pt.rz*Tt*J,ry:Math.atan2(Pt.tx,Pt.tz),red:(Z*2+at)%2===0})}}}z.corners=j;{let C=Qe(256,96,(Tt,I,X)=>{Tt.fillStyle="#2f6fe0",Tt.fillRect(0,0,I,X),Tt.fillStyle="#ffffff";for(let Q=0;Q<4;Q++){let xt=18+Q*60;Tt.beginPath(),Tt.moveTo(xt,12),Tt.lineTo(xt+26,12),Tt.lineTo(xt+54,X/2),Tt.lineTo(xt+26,X-12),Tt.lineTo(xt,X-12),Tt.lineTo(xt+28,X/2),Tt.closePath(),Tt.fill()}Tt.strokeStyle="#1b3f8f",Tt.lineWidth=8,Tt.strokeRect(0,0,I,X)}),U=C.clone();U.repeat.x=-1,U.offset.x=1,U.wrapS=es,U.needsUpdate=!0,o.push(C,U);let B=(Tt=>{let I=new _e(3.2,1.2,.12);I.rotateX(-.32),I.translate(0,.62,.22);let X=new _e(3.2,1.2,.12);return X.rotateX(.32),X.translate(0,.62,-.22),X.rotateY(Math.PI),Xe([I,X])})();oh(B),$(B,mt(16777215,{map:C}),tt,{ol:2.5}),$(B,mt(16777215,{map:U}),st,{ol:2.5});let J=Qe(16,64,(Tt,I,X)=>{for(let Q=0;Q<4;Q++)Tt.fillStyle=Q%2?"#ffffff":"#ff6a2b",Tt.fillRect(0,Q*X/4,I,X/4)});o.push(J);let Y=new ne(.06,.32,.9,12,1);Y.translate(0,.5,0);let at=new _e(.8,.08,.8);at.translate(0,.04,0),$(Y,mt(16777215,{map:J}),ht,{ol:2}),$(at,mt(16738859),ht,{ol:1.5});let Pt=new _e(.5,.22,1.75);Pt.translate(0,.11,0),$(Pt,mt(16777215),et.map(Tt=>Tt),{ol:1.5,colors:et.map(Tt=>Tt.red?15216959:16777215)})}let rt=new re;l(rt);function gt(C,U,Z,B,J,{postH:Y=1.6,face:at=0,scale:Pt=1}={}){let Tt=Yn(512,Math.round(512*B/Z),J,o),I=new re,X=ue(new ge(Z,B,.25,2,.08),[mt(5978660),mt(5978660),mt(5978660),mt(5978660),mt(16777215,{map:Tt}),mt(16777215,{map:Tt})],{ol:3});X.position.y=Y+B/2,I.add(X);let Q=new _e(.25,Y+B*.5,.25);for(let wt of[-1,1]){let Kt=ue(Q,mt(9067062),{ol:2});Kt.position.set(wt*Z*.35,(Y+B*.5)/2,-.1),I.add(Kt)}let xt=Oe/2+2.2+Z*.15,Lt=C.x+C.rx*xt*U,Dt=C.z+C.rz*xt*U;return I.position.set(Lt,t.heightAt(Lt,Dt)-.1,Dt),I.rotation.y=Math.atan2(-C.tx,-C.tz)+U*.5+at,I.scale.setScalar(Pt),rt.add(I),I}let nt=1720,yt=t.sample(nt-10);z.hillSign=gt(yt,1,6,3.2,(C,U,Z)=>{C.fillStyle="#ffd23f",$e(C,0,0,U,Z,40),C.fill(),C.lineWidth=16,C.strokeStyle="#1b1b3a",$e(C,8,8,U-16,Z-16,34),C.stroke(),C.fillStyle="#3aa845",C.beginPath(),C.moveTo(40,Z-40),C.lineTo(150,70),C.lineTo(260,Z-40),C.closePath(),C.fill(),C.strokeStyle="#1b1b3a",C.lineWidth=8,C.stroke(),C.fillStyle="#fff",C.beginPath(),C.moveTo(118,118),C.lineTo(150,70),C.lineTo(182,118),C.closePath(),C.fill(),tn(C,"THE",380,Z*.3,72,"#ffffff","#1b1b3a",.2),tn(C,"HILL",370,Z*.66,120,"#ff3d8b","#1b1b3a",.16)},{postH:1.4}),z.hillM=nt;for(let C of[1,2,3,4]){let U=C*1e3,Z=t.sample(t.geoOf(U));gt(Z,-1,1.6,1.3,(B,J,Y)=>{B.fillStyle="#ffffff",$e(B,0,0,J,Y,50),B.fill(),B.fillStyle="#ff3d8b",$e(B,20,20,J-40,Y-40,36),B.fill(),tn(B,`${C}K`,J/2,Y/2+8,230,"#ffffff","#1b1b3a",.14)},{postH:.7})}let G=t.sample(2475);z.lapBoard=gt(G,1,4.4,2.6,(C,U,Z)=>{C.fillStyle="#1b1b3a",$e(C,0,0,U,Z,40),C.fill(),C.fillStyle="#2e9bff",$e(C,14,14,U-28,Z-28,30),C.fill(),tn(C,"LAP",U/2,Z*.28,90,"#ffffff","#1b1b3a",.18),tn(C,"2 OF 2",U/2,Z*.66,150,"#ffe14d","#1b1b3a",.14)},{postH:1.2}),z.lapM=2500;let Ft=[],At=[],_t=[],Ut=[];function ot(C,U,Z,B=3.2,J=12){let Y=null;for(let at=C;at<=U;at+=J){let Pt=t.sample(at),Tt=Oe/2+1,I=Pt.x+Pt.rx*Tt*Z,X=Pt.z+Pt.rz*Tt*Z,Q=t.heightAt(I,X);At.push({x:I,y:Q,z:X});let xt=new V(I,Q+B,X);if(Y){let Lt=[];for(let Dt=0;Dt<=12;Dt++){let wt=Dt/12,Kt=Y.clone().lerp(xt,wt);Kt.y-=Math.sin(wt*Math.PI)*.6,Lt.push(Kt)}_t.push(Lt);for(let Dt=1;Dt<12;Dt++){let wt=Lt[Dt],Kt=Lt[Dt+1].clone().sub(Lt[Dt-1]);Ft.push({x:wt.x,y:wt.y,z:wt.z,ry:Math.atan2(-Kt.z,Kt.x)})}}Y=xt}}function Ot(C,U,Z,B=Oe/2+2.2){for(let J=C;J<=U;J+=2.4){let Y=t.sample(J),at=Y.x+Y.rx*B*Z,Pt=Y.z+Y.rz*B*Z;Ut.push({x:at,y:t.heightAt(at,Pt),z:Pt,ry:Math.atan2(Y.tx,Y.tz)})}}let O=t.finishM;ot(O-70,O+10,1),ot(O-70,O+10,-1),ot(-6,50,1),ot(-6,50,-1),Ot(O-60,O+14,1),Ot(O-60,O+14,-1),Ot(-4,40,1),Ot(-4,40,-1);{let C=new Ie;C.setAttribute("position",new ce([-.3,0,0,.3,0,0,0,-.62,0],3)),C.setAttribute("normal",new ce([0,0,1,0,0,1,0,0,1],3));let U=Ft.map((I,X)=>[16727435,16765503,3054591,4054148,16747069,16777215][X%6]);$(C,mt(16777215,{side:We}),Ft,{colors:U,cast:!1});let Z=new ne(.07,.09,3.3,6);Z.translate(0,1.65,0),$(Z,mt(16777215),At,{ol:1.5});let B=new Ie().setFromPoints(_t.flatMap(I=>I.slice(0,-1).flatMap((X,Q)=>[X,I[Q+1]]))),J=new Ys(B,new is({color:3355443}));l(J),o.push(B);let Y=[];for(let I=0;I<4;I++){let X=new _e(.16,1,.06);X.translate(-.9+I*.6,.5,0),Y.push(X)}let at=new _e(2.4,.12,.05);at.translate(0,.65,.05),Y.push(at);let Pt=at.clone();Pt.translate(0,-.35,0),Y.push(Pt);let Tt=Xe(Y);Tt.rotateY(Math.PI/2),$(Tt,mt(16777215),Ut,{ol:1.8})}let N=[],pt=(C,U,Z,B,J,Y=1.35)=>N.push({m0:C,m1:U,side:Z,off:Oe/2+3,depth:B,density:J,spacing:Y});pt(O-58,O+12,1,6,1),pt(O-58,O+12,-1,6,1),pt(-2,38,1,5,.9),pt(-2,38,-1,5,.9),pt(1940,2010,1,4,.7),pt(1960,2010,-1,3,.6),pt(nt-10,nt+40,-1,3,.55),pt(2440,2490,-1,3,.7),pt(nt-70,nt+10,1,3,.5),pt(nt-70,nt-20,-1,3,.45),pt(2080,2160,1,4,.75),pt(2080,2160,-1,4,.75),pt(800,860,1,3,.6),pt(1250,1310,-1,3,.6),z.crowdZones=N;{let C=s.pois.filter(B=>B.kind==="bench"&&v(B.pos[0],B.pos[1])&&g(B.pos[0],B.pos[1],1)).map(B=>({x:B.pos[0],y:t.heightAt(B.pos[0],B.pos[1]),z:B.pos[1],ry:Yt()*6})),U=Xe([new _e(1.8,.12,.5).translate(0,.5,0),new _e(1.8,.4,.1).translate(0,.8,-.22),new _e(.1,.5,.45).translate(-.8,.25,0),new _e(.1,.5,.45).translate(.8,.25,0)]);$(U,mt(11892031),C,{ol:1.5});let Z=s.pois.filter(B=>B.kind==="cafe"&&v(B.pos[0],B.pos[1])&&g(B.pos[0],B.pos[1],4));for(let B of Z){let J=new re;J.add(ue(new ge(5,3,4,2,.2),mt(16774108),{ol:2.5})).position.y=1.5;let Y=Qe(128,16,(Tt,I,X)=>{for(let Q=0;Q<8;Q++)Tt.fillStyle=Q%2?"#fff":"#ff4f6d",Tt.fillRect(Q*16,0,16,X)});o.push(Y);let at=ue(new _e(5.6,.2,2),mt(16777215,{map:Y}),{ol:2});at.position.set(0,2.9,2.3),at.rotation.x=.35,J.add(at);let Pt=ue(new He(4,1.6,4),mt(3054591),{ol:2.5});Pt.position.y=3.8,Pt.rotation.y=Math.PI/4,J.add(Pt),J.position.set(B.pos[0],t.heightAt(B.pos[0],B.pos[1]),B.pos[1]),J.rotation.y=Yt()*6,l(J),M(B.pos[0],B.pos[1],5)}}for(let C of N)for(let U=C.m0-8;U<=C.m1+8;U+=4){let Z=t.sample(U),B=C.off+C.depth/2;M(Z.x+Z.rx*B*C.side,Z.z+Z.rz*B*C.side,C.depth/2+3)}for(let C of[P,H])M(C.x,C.z,14);if(r&&i.funfair){let C=Object.values(t.diversions)[0]?.[0];if(C)for(let U of C.path){let Z=Ct(U[0],U[1]),B=(U[0]+Z[0])/2,J=(U[1]+Z[1])/2;M(B,J,Math.max(6,Math.hypot(U[0]-Z[0],U[1]-Z[1])/2-3))}}function Ct(C,U){let Z=null,B=1e9;for(let J of p){let Y=(J[0]-C)**2+(J[1]-U)**2;Y<B&&(B=Y,Z=J)}return Z}z.nearestOnRibbon=Ct,z.ribbonSamples=p;let kt=new Map;for(let C of p){let U=`${Math.floor(C[0]/10)},${Math.floor(C[1]/10)}`,Z=kt.get(U);Z||kt.set(U,Z=[]),Z.push(C)}let it=(C,U,Z=1)=>{let B=Math.floor(C/10),J=Math.floor(U/10),Y=(Oe/2+Z)**2;for(let at=-1;at<=1;at++)for(let Pt=-1;Pt<=1;Pt++)for(let Tt of kt.get(`${B+at},${J+Pt}`)||[])if((Tt[0]-C)**2+(Tt[1]-U)**2<Y)return!0;return!1};z.reserve=M,z.clearOf=g;let dt=[],ct=(C,U,Z,B)=>!g(C,U,2.5*B)||A(C,U,1.5)?!1:(dt.push({x:C,z:U,kind:Z,s:B}),M(C,U,2.2*B),!0);for(let C of s.pois)C.kind==="tree"&&ct(C.pos[0],C.pos[1],0,.85+Yt()*.35);for(let C of s.features)if(C.kind==="wood"&&C.closed){let U=Dn(C.pts),Z=(U[2]-U[0])*(U[3]-U[1]);for(let B=0;B<Z/90;B++){let J=U[0]+Yt()*(U[2]-U[0]),Y=U[1]+Yt()*(U[3]-U[1]);Qs(C.pts,J,Y)&&ct(J,Y,1,.9+Yt()*.5)}}{let C=Dn(S);for(let U=0;U<2600;U++){let Z=C[0]+Yt()*(C[2]-C[0]),B=C[1]+Yt()*(C[3]-C[1]);!v(Z,B)||-Br(S,Z,B)>45&&Yt()<.75||ct(Z,B,Yt()<.7?1:2,.8+Yt()*.5)}for(let U of s.features)if(U.kind==="road"&&!U.closed)for(let Z=1;Z<U.pts.length;Z++){let B=U.pts[Z-1],J=U.pts[Z],Y=Math.hypot(J[0]-B[0],J[1]-B[1]);for(let at=0;at<Y;at+=22){let Pt=at/Y,Tt=B[0]+(J[0]-B[0])*Pt,I=B[1]+(J[1]-B[1])*Pt,X=-(J[1]-B[1])/Y,Q=(J[0]-B[0])/Y,xt=8+Yt()*2;Yt()<.5&&ct(Tt+X*xt,I+Q*xt,0,.6+Yt()*.2)}}}{let C=[3978315,5031250,3121226,6539594,8376650,3450963],U=new ne(.32,.5,4.2,7);U.translate(0,2.1,0);let Z=new Je(3.2,1);Z.scale(1,1.08,1),Z.translate(0,6.6,0);let B=Xe([new Je(3,1).translate(0,6.2,0),new Je(2.3,0).translate(1.9,5.3,.6),new Je(2.2,0).translate(-1.7,5.5,-.8),new Je(2,0).translate(.2,8.2,.3)].map(Tt=>Tt.toNonIndexed())),J=Xe([new He(3,4.2,8).translate(0,5,0),new He(2.4,3.6,8).translate(0,7.2,0),new He(1.6,3,8).translate(0,9.2,0)].map(Tt=>Tt.index?Tt.toNonIndexed():Tt)),Y=dt.map(Tt=>({x:Tt.x,y:t.heightAt(Tt.x,Tt.z)-.2,z:Tt.z,ry:Yt()*6.28,s:Tt.s}));$(U,mt(9067062),Y,{ol:2,olRef:40,chunk:160});let at=mt(16777215,{flatShading:!0});[Z,B,J].forEach((Tt,I)=>{let X=Y.filter((Q,xt)=>dt[xt].kind===I);$(Tt,at,X,{ol:2.2,olRef:40,colors:X.map(()=>C[Math.floor(Yt()*C.length)]),chunk:160})}),z.treeCount=dt.length}{let C=Xe([0,1,2,3].map(Y=>{let at=new He(.09,.55,3);return at.translate(0,.27,0),at.rotateZ((Y-1.5)*.25),at.rotateY(Y*1.7),at.translate((Y-1.5)*.08,0,Y%2*.06),at.toNonIndexed()})),U=Xe([new ne(.03,.03,.35,4).translate(0,.17,0).toNonIndexed(),new Je(.13,0).translate(0,.38,0)]),Z=[],B=[],J=[];for(let Y=0;Y<9e3;Y++){let at=p[Math.floor(Yt()*p.length)],Pt=Yt()*6.283,Tt=Oe/2+1+Yt()*22,I=at[0]+Math.cos(Pt)*Tt,X=at[1]+Math.sin(Pt)*Tt;if(!v(I,X)||A(I,X,.5)||!g(I,X,.2))continue;let Q=t.heightAt(I,X)-.03;Yt()<.62?Z.push({x:I,y:Q,z:X,ry:Yt()*6,s:.5+Yt()*.6}):(B.push({x:I,y:Q,z:X,ry:Yt()*6,s:.35+Yt()*.25}),J.push(["#ff5d8f","#ffd93b","#ffffff","#b06bff","#ff8a3d","#57c7ff"][Math.floor(Yt()*6)]))}$(C,mt(5226296),Z,{cast:!1,chunk:120}),$(U,mt(16777215),B,{cast:!1,colors:J,chunk:120})}let vt=new vn({side:on,depthWrite:!1,fog:!1,uniforms:{top:{value:new Jt(3116287)},mid:{value:new Jt(9425919)},bot:{value:new Jt(15333631)}},vertexShader:"varying vec3 vP; void main(){ vP = normalize(position); gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.); }",fragmentShader:`uniform vec3 top; uniform vec3 mid; uniform vec3 bot; varying vec3 vP; void main(){ float h=vP.y; vec3 c = h>0.12? mix(mid, top, smoothstep(0.12,0.7,h)) : mix(bot, mid, smoothstep(-0.05,0.12,h)); gl_FragColor=vec4(c,1.);
#include <colorspace_fragment>
}`}),St=new Pe(new fe(5e3,32,16),vt);St.renderOrder=-10,St.frustumCulled=!1,n.add(St),o.push(vt,St.geometry);let Rt=Xe([[0,0,0,14],[13,-3,2,10],[-13,-4,-1,10],[6,6,-2,9],[-6,5,3,8],[22,-6,0,6],[-22,-7,1,6]].map(([C,U,Z,B])=>new Je(B,2).translate(C,U,Z)));Rt.scale(1,.7,.8);let It=[h.x0+d/2,h.z0+y/2],Ht=[];for(let C=0;C<26;C++){let U=Yt()*6.28,Z=300+Yt()*1300;Ht.push({x:It[0]+Math.cos(U)*Z,y:170+Yt()*120,z:It[1]+Math.sin(U)*Z,ry:Yt()*6,s:.8+Yt()*1.4})}let Gt=$(Rt,mt(16777215,{emissive:6981808,emissiveIntensity:.35,fog:!1}),Ht,{ol:1.5,olRef:300,cast:!1}),Vt=[];for(let C=0;C<18;C++){let U=C/18*6.28+Yt()*.2,Z=1900+Yt()*500;Vt.push({x:It[0]+Math.cos(U)*Z,y:-40,z:It[1]+Math.sin(U)*Z,sx:320+Yt()*260,sy:80+Yt()*90,sz:260+Yt()*200,ry:Yt()*6})}$(new fe(1,24,12),mt(7128954),Vt,{cast:!1,colors:Vt.map((C,U)=>[8047487,6273413,9425290][U%3])});function le(C){E.uTime.value=C;for(let U of k)U.g.position.y=(t.lake?._waterLevel??0)+.1+Math.sin(C*1.7+U.ph)*.08,U.g.rotation.z=Math.sin(C*1.3+U.ph)*.06,U.g.rotation.y=U.a+Math.sin(C*.1+U.ph)*.4;Gt&&(Gt.position.x=Math.sin(C*.01)*40)}function Zt(){a.traverse(C=>{C.geometry&&C.geometry.dispose()});for(let C of o)C.dispose?.();n.remove(a),n.remove(St)}return{group:a,anchors:z,update:le,dispose:Zt,inPark:v,clearOf:g,reserve:M,blocked:A,groundTex:R,onPath:it}}function Aa(n){let t=0,e=0;for(let i of n)t+=i[0],e+=i[1];return[t/n.length,e/n.length]}function $e(n,t,e,i,s,r){n.beginPath(),n.moveTo(t+r,e),n.arcTo(t+i,e,t+i,e+s,r),n.arcTo(t+i,e+s,t,e+s,r),n.arcTo(t,e+s,t,e,r),n.arcTo(t,e,t+i,e,r),n.closePath()}var _f=[16735631,16765503,5752831,8248938,16747069,11566079,5234888,16739179,16777215,9414911],Mf=[4054148,16727435,16765503,3054591,16777215];function Wx(){let n=[];for(let i=0;i<=8;i++){let s=i/8,r=s*1.25,o=s<.12?.48+s*1.2:Math.sqrt(Math.max(0,1-Math.pow((s-.12)/.88,2.2)))*.62;n.push(new Nt(Math.max(.001,o),r))}n.unshift(new Nt(.001,0));let e=new Ur(n,12);return e.computeVertexNormals(),e}function bf(n,t){let e=wn(99),i=t.length,s=new re;if(n.add(s),!i)return{update(){},dispose(){n.remove(s)},group:s};let r=Wx(),o=new fe(.15,8,5);o.scale(.8,1.15,.5);let a=new fe(.075,6,4);a.scale(.85,1.2,.5);let l=new fe(.13,6,5),h=new He(.14,.36,6);h.translate(0,.18,0);let d=new He(.26,.55,8);d.translate(0,.27,0);let y=new fe(.2,7,5),u=(P,z,W,q)=>{let lt=new Ze(P,z,W);return lt.castShadow=!0,lt.receiveShadow=!0,lt.userData.ol=q,s.add(lt),lt},c=u(r,mt(16777215),i,2.6),f=u(o,new Ln({color:16777215}),i*2,0),M=u(a,new Ln({color:1709088}),i*2,0),g=u(l,mt(16777215),i*2,2);f.castShadow=M.castShadow=!1;let p=[u(h,mt(16777215),i,2),u(d,mt(16777215),i,2),u(y,mt(16777215),i,2)],S=[0,0,0],v=new Jt,_=t.map((P,z)=>{let W=P.colour??_f[Math.floor(e()*_f.length)];c.setColorAt(z,v.set(W)),g.setColorAt(z*2,v),g.setColorAt(z*2+1,v);let q=e()<.3?-1:Math.floor(e()*3),lt=-1;return q>=0&&(lt=S[q]++,p[q].setColorAt(lt,v.set(Mf[Math.floor(e()*Mf.length)]))),{...P,s:P.scale??.85+e()*.35,ph:e()*6.28,sp:5+e()*4,tk:q,ti:lt,wave:e()<.5,ex:.3}});p.forEach((P,z)=>{P.count=S[z]});for(let P of[c,g,...p])P.instanceColor&&(P.instanceColor.needsUpdate=!0);let L=new Se,A=new ni,w=new Gn,R=new V,x=new V,m=new Se,b=new Se;function E(P,z,W){let q=_[P],lt=q.ex,D=z*q.sp*(.5+lt*.6)+q.ph,Et=Math.max(0,Math.sin(D))*.32*lt,K=1-Math.cos(D*2)*.05*lt;w.set(0,q.yaw+Math.sin(z*.8+q.ph)*.25*(1-lt),Math.sin(D*.5)*.08*lt),A.setFromEuler(w),m.compose(R.set(q.x,q.y+Et,q.z),A,x.set(q.s/Math.sqrt(K),q.s*K,q.s/Math.sqrt(K))),c.setMatrixAt(P,m);for(let $=0;$<2;$++){let j=$?.19:-.19;b.makeTranslation(j,.86,.5),L.multiplyMatrices(m,b),f.setMatrixAt(P*2+$,L),b.makeTranslation(j*1.02,.84+(lt>.6?.03:0),.565),L.multiplyMatrices(m,b),M.setMatrixAt(P*2+$,L);let st=lt>.55?1:.15+.2*Math.max(0,Math.sin(D)),tt=q.wave?Math.sin(D*1.5+$*3)*.25*lt:0,ht=($?1:-1)*(.62+st*.05+tt*.3),et=.45+st*.85+tt;b.makeTranslation(ht,et,.12),L.multiplyMatrices(m,b),g.setMatrixAt(P*2+$,L)}q.tk>=0&&(b.makeTranslation(0,1.22,0),q.tk===0&&b.multiply(new Se().makeRotationZ(Math.sin(D)*.3)),L.multiplyMatrices(m,b),p[q.tk].setMatrixAt(q.ti,L))}for(let P=0;P<i;P++)E(P,0,!0);let T=()=>{for(let P of[c,f,M,g,...p])P.instanceMatrix.needsUpdate=!0};T();for(let P of[c,f,M,g,...p]){if(!P.count){P.visible=!1;continue}P.computeBoundingSphere(),P.boundingSphere.radius+=2,P.userData.ol&&qn(P,P.userData.ol,void 0,18)}function k(P,z,W=[],q=null){let lt=!1;for(let D=0;D<i;D++){let Et=_[D];if(z&&(Et.x-z.x)**2+(Et.z-z.z)**2>260*260)continue;let K=.25;if(q!=null)K=q;else for(let $ of W){let j=($.x-Et.x)**2+($.z-Et.z)**2;j<45*45&&(K=Math.max(K,1-Math.sqrt(j)/70))}Et.ex+=(K-Et.ex)*.05,E(D,P),lt=!0}lt&&T()}function H(){for(let P of[r,o,a,l,h,d,y])P.dispose();for(let P of[c,f,M,g,...p])P.dispose();n.remove(s)}return{update:k,dispose:H,group:s,members:_}}function Sf(n,t,e=5,i=null,s=null){let r=wn(e),o=[];for(let[a,l]of t.entries())for(let h=l.m0;h<=l.m1;h+=l.spacing??1.35){let d=n.sample(h),y=Math.max(1,Math.round(l.depth/1.25));for(let u=0;u<y;u++){if(r()>l.density)continue;let c=l.off+u*1.25+r()*.35,f=(r()-.5)*.6,M=d.x+d.rx*c*l.side+d.tx*f,g=d.z+d.rz*c*l.side+d.tz*f;i&&i(M,g,1.4)||s&&s(M,g,.6)||o.push({zone:a,x:M,y:n.heightAt(M,g),z:g,yaw:Math.atan2(-d.rx*l.side,-d.rz*l.side)+(r()-.5)*.5})}}return o}var wf={stocky:{torso:[.9,.76,.58],leg:.66,legR:.16,arm:.66,armR:.14,head:.47,hand:.19,shoe:[.34,.25,.6]},lanky:{torso:[.56,.86,.38],leg:1.06,legR:.095,arm:.9,armR:.085,head:.39,hand:.15,shoe:[.27,.21,.62]},compact:{torso:[.68,.6,.5],leg:.52,legR:.13,arm:.52,armR:.11,head:.5,hand:.17,shoe:[.3,.23,.5]},tall:{torso:[.7,.94,.46],leg:.92,legR:.125,arm:.8,armR:.11,head:.43,hand:.17,shoe:[.31,.24,.6]}},Ef=["#2b1d14","#5a3a1e","#c8642a","#e8c66a","#1d1d24","#a9a9b3","#3a2a1e","#8a5a2b","#ff5fa2"],Xx=3.2,Gr=new Map,Wt=(n,t)=>(Gr.has(n)||Gr.set(n,t()),Gr.get(n));function Tf(){for(let n of Gr.values())n.dispose();Gr.clear()}function qx(n){let t=2166136261;for(let e of n)t^=e.charCodeAt(0),t=Math.imul(t,16777619);return t>>>0}function Yx(n,t,e,i,s,r){n.fillStyle=i,n.fillRect(0,0,t,e);let o=t*.25,a=e*.47,l=e*.64,h=t*.058,d="#1a1420";n.fillStyle="rgba(255,90,90,0.28)";for(let g of[-1,1])n.beginPath(),n.ellipse(o+g*h*1.75,l-e*.03,t*.022,e*.03,0,0,7),n.fill();let y=(g,p)=>{if(p==="heart"){n.fillStyle="#ff2d6f",n.strokeStyle=d,n.lineWidth=5,n.beginPath();let A=t*.03;n.moveTo(g,a+A*1.1),n.bezierCurveTo(g-A*2.2,a-A*.2,g-A*.9,a-A*1.9,g,a-A*.6),n.bezierCurveTo(g+A*.9,a-A*1.9,g+A*2.2,a-A*.2,g,a+A*1.1),n.fill(),n.stroke();return}if(p==="closed"||p==="happy"){n.strokeStyle=d,n.lineWidth=9,n.lineCap="round",n.beginPath(),p==="happy"?n.arc(g,a+e*.02,t*.024,Math.PI*1.1,Math.PI*1.9):(n.moveTo(g-t*.025,a),n.lineTo(g+t*.025,a)),n.stroke();return}if(p==="x"){n.strokeStyle=d,n.lineWidth=8,n.lineCap="round";let A=t*.02;n.beginPath(),n.moveTo(g-A,a-A),n.lineTo(g+A,a+A),n.moveTo(g+A,a-A),n.lineTo(g-A,a+A),n.stroke();return}if(p==="wink"&&g>o&&(p="happy"),p==="wink"&&(p="open"),p==="happy"){n.strokeStyle=d,n.lineWidth=9,n.lineCap="round",n.beginPath(),n.arc(g,a+e*.02,t*.024,Math.PI*1.1,Math.PI*1.9),n.stroke();return}let S=p==="wide"?1.3:1,v=t*.03*S,_=e*.085*S;n.fillStyle="#fff",n.strokeStyle=d,n.lineWidth=6,n.beginPath(),n.ellipse(g,a,v,_,0,0,7),n.fill(),n.stroke();let L=p==="wide"?.38:.55;n.fillStyle=d,n.beginPath(),n.ellipse(g+v*.15,a+_*.12,v*L,_*L*1.1,0,0,7),n.fill(),n.fillStyle="#fff",n.beginPath(),n.arc(g+v*.35,a-_*.2,v*.22,0,7),n.fill(),p==="half"&&(n.fillStyle=i,n.fillRect(g-v-4,a-_-4,v*2+8,_*1.05),n.strokeStyle=d,n.lineWidth=7,n.beginPath(),n.moveTo(g-v-2,a-_*.1),n.lineTo(g+v+2,a-_*.1),n.stroke())},u={sleepy:"half",smug:"half",cheeky:"wink","wide-eyed":"wide"}[s]||"open";r==="happy"&&(u="happy"),r==="love"&&(u="heart"),r==="dead"&&(u="x"),r==="effort"&&s!=="goofy"&&(u="open");for(let g of[-1,1])y(o+g*h,u);n.strokeStyle=d,n.lineWidth=10,n.lineCap="round";let c=r==="effort"||s==="determined"||s==="gritted"?.35:r==="sad"||s==="worried"?-.35:s==="smug"||s==="cheeky"?.15:s==="wide-eyed"?-.2:0;for(let g of[-1,1]){let p=o+g*h,S=a-e*.13,v=t*.026,_=p-g*v,L=p+g*v;n.beginPath(),n.moveTo(L,S-c*18),n.lineTo(_,S+c*18),n.stroke()}n.lineWidth=8,n.strokeStyle=d,n.fillStyle="#7a1e2e";let f=o,M=r||"normal";if(M==="happy"||M==="normal"&&s==="grin")n.beginPath(),n.moveTo(f-t*.04,l-e*.02),n.quadraticCurveTo(f,l+e*.12,f+t*.04,l-e*.02),n.closePath(),n.fill(),n.stroke(),n.fillStyle="#fff",n.fillRect(f-t*.03,l-e*.018,t*.06,e*.03),n.fillStyle="#ff7d8f",n.beginPath(),n.ellipse(f,l+e*.06,t*.015,e*.02,0,0,7),n.fill();else if(M==="effort"){n.fillStyle="#fff",n.beginPath(),$e(n,f-t*.035,l-e*.03,t*.07,e*.065,10),n.fill(),n.stroke(),n.lineWidth=4,n.beginPath(),n.moveTo(f-t*.035,l),n.lineTo(f+t*.035,l);for(let g=-2;g<=2;g++)n.moveTo(f+g*t*.012,l-e*.03),n.lineTo(f+g*t*.012,l+e*.035);n.stroke()}else if(M==="sad"||M==="dead")n.beginPath(),n.moveTo(f-t*.03,l+e*.04),n.quadraticCurveTo(f,l-e*.04,f+t*.03,l+e*.04),n.stroke(),M==="dead"&&(n.fillStyle="#ff7d8f",n.beginPath(),n.ellipse(f+t*.012,l+e*.07,t*.012,e*.04,.2,0,7),n.fill(),n.stroke());else if(M==="love"||M==="pant")n.beginPath(),n.ellipse(f,l+e*.02,t*.022,e*.05,0,0,7),n.fill(),n.stroke();else if(s==="gritted"){n.fillStyle="#fff",n.beginPath(),$e(n,f-t*.04,l-e*.03,t*.08,e*.06,10),n.fill(),n.stroke(),n.lineWidth=4,n.beginPath(),n.moveTo(f-t*.04,l),n.lineTo(f+t*.04,l);for(let g=-2;g<=2;g++)n.moveTo(f+g*t*.014,l-e*.03),n.lineTo(f+g*t*.014,l+e*.03);n.stroke()}else if(s==="tongue-out")n.beginPath(),n.moveTo(f-t*.035,l),n.quadraticCurveTo(f,l+e*.05,f+t*.035,l),n.stroke(),n.fillStyle="#ff6f8a",n.beginPath(),n.ellipse(f+t*.008,l+e*.06,t*.016,e*.05,.15,0,7),n.fill(),n.stroke(),n.strokeStyle="rgba(0,0,0,0.35)",n.lineWidth=3,n.beginPath(),n.moveTo(f+t*.008,l+e*.03),n.lineTo(f+t*.01,l+e*.08),n.stroke();else if(s==="wide-eyed")n.beginPath(),n.ellipse(f,l+e*.02,t*.016,e*.04,0,0,7),n.fill(),n.stroke();else if(s==="cheeky")n.beginPath(),n.moveTo(f-t*.04,l-e*.01),n.quadraticCurveTo(f,l+e*.08,f+t*.045,l-e*.035),n.stroke();else if(s==="smug")n.beginPath(),n.moveTo(f-t*.03,l+e*.01),n.quadraticCurveTo(f+t*.01,l+e*.05,f+t*.04,l-e*.03),n.stroke();else if(s==="worried"){n.beginPath(),n.moveTo(f-t*.03,l+e*.02);for(let g=0;g<=6;g++)n.lineTo(f-t*.03+g*t*.01,l+e*.02+(g%2?-1:1)*e*.012);n.stroke()}else s==="goofy"?(n.beginPath(),n.moveTo(f-t*.04,l),n.quadraticCurveTo(f,l+e*.09,f+t*.04,l),n.closePath(),n.fill(),n.stroke(),n.fillStyle="#ff7d8f",n.beginPath(),n.ellipse(f+t*.01,l+e*.07,t*.016,e*.045,0,0,7),n.fill(),n.stroke(),n.fillStyle="#fff",n.fillRect(f-t*.02,l-2,t*.016,e*.03)):s==="determined"?(n.beginPath(),n.moveTo(f-t*.03,l+e*.01),n.lineTo(f+t*.03,l+e*.01),n.stroke()):(n.beginPath(),n.moveTo(f-t*.035,l-e*.01),n.quadraticCurveTo(f,l+e*.07,f+t*.035,l-e*.01),n.stroke());n.strokeStyle="rgba(0,0,0,0.25)",n.lineWidth=6,n.beginPath(),n.arc(o,a+e*.09,t*.012,.2,Math.PI-.2),n.stroke()}function Zx(n,t){return Qe(256,200,(e,i,s)=>{e.fillStyle="#ffffff",$e(e,0,0,i,s,20),e.fill(),e.fillStyle=t,e.fillRect(0,0,i,44),e.font=`30px ${ah}`,e.fillStyle="#fff",e.textAlign="center",e.textBaseline="middle",e.fillText("MARKRUN",i/2,24),tn(e,String(n),i/2,128,140,"#1a1420","#1a1420",0),e.fillStyle="#c33";for(let[r,o]of[[16,60],[i-16,60],[16,s-16],[i-16,s-16]])e.beginPath(),e.arc(r,o,6,0,7),e.fill()})}function Jx(n){return Qe(128,128,(t,e,i)=>{if(t.fillStyle="#ffffff",t.strokeStyle="#1a1420",t.lineWidth=8,t.beginPath(),t.arc(e/2,i/2-6,48,0,7),t.fill(),t.stroke(),t.beginPath(),t.moveTo(e/2-12,i-26),t.lineTo(e/2,i-4),t.lineTo(e/2+8,i-28),t.fill(),n==="!")tn(t,"!",e/2,i/2-4,84,"#ff3d8b","#1a1420",.12);else if(n==="heart"){t.fillStyle="#ff2d6f";let s=e/2,r=i/2-2,o=16;t.beginPath(),t.moveTo(s,r+o*1.3),t.bezierCurveTo(s-o*2.6,r-o*.3,s-o,r-o*2.2,s,r-o*.7),t.bezierCurveTo(s+o,r-o*2.2,s+o*2.6,r-o*.3,s,r+o*1.3),t.fill(),t.stroke()}else if(n==="floss"){t.fillStyle="#ff9bd2";for(let[s,r,o]of[[54,44,18],[74,46,17],[64,30,16],[62,54,16]])t.beginPath(),t.arc(s,r,o,0,7),t.fill();t.strokeStyle="#c99a5a",t.lineWidth=6,t.beginPath(),t.moveTo(64,62),t.lineTo(64,96),t.stroke()}else if(n==="sweat"){t.fillStyle="#57c7ff";for(let[s,r]of[[50,50],[78,64]])t.beginPath(),t.moveTo(s,r-22),t.quadraticCurveTo(s+14,r,s,r+10),t.quadraticCurveTo(s-14,r,s,r-22),t.fill(),t.stroke()}})}function Af(n,t={}){let e=n.look||{},i=wf[e.build]||wf.compact,s=qx(n.id+(n.nickname||"")),r=wn(s),o=n.colour?.primary||"#ff4757",a=n.colour?.secondary||"#ffffff",l=e.skin||"#f1c6a5",h=Ef[s%Ef.length],d=[],y=mt(o),u=mt(a),c=mt(l),f=mt(h),M=new Jt(a).getHSL({}).l>.85?"#ffffff":a,g=mt(M),p=mt("#ffffff"),S=mt("#22202c"),v=(it,dt,ct=Xx)=>ue(it,dt,{ol:ct,olRef:9}),_=new re;_.name=`runner-${n.id}`;let L=new re;_.add(L);let A=new re;L.add(A);let w=i.leg/2,R=i.leg+i.shoe[1]*.75;A.position.y=R;let x=v(Wt(`shorts${e.build}`,()=>new ge(i.torso[0]*.92,.32,i.torso[2]*.95,3,.12)),u);x.position.y=.02,A.add(x);let m=new re;m.position.y=.12,A.add(m);let b=v(Wt(`torso${e.build}`,()=>new ge(...i.torso,4,Math.min(i.torso[2],i.torso[0])*.42)),y);b.position.y=i.torso[1]/2,m.add(b);for(let it of[-1,1]){let dt=ue(Wt(`stripe${e.build}`,()=>new _e(.06,i.torso[1]*.8,i.torso[2]*.7)),mt(a),{cast:!1});dt.position.set(it*i.torso[0]*.5,i.torso[1]*.5,0),m.add(dt)}let E=Zx(n.lane??0,o);d.push(E);let T=new Pe(Wt("bib",()=>new an(1,.78)),mt(16777215,{map:E})),k=Math.min(.42,i.torso[0]*.6);T.scale.setScalar(k),T.position.set(0,i.torso[1]*.45,i.torso[2]/2+.012),m.add(T);let H=new re;H.position.y=i.torso[1]+.02,m.add(H);let P=new re;H.add(P);let z=document.createElement("canvas");z.width=1024,z.height=512;let W=new Zs(z);W.colorSpace=sn,W.anisotropy=4,d.push(W);let q=null,lt=it=>{it!==q&&(q=it,Yx(z.getContext("2d"),1024,512,l,e.face||"grin",it),W.needsUpdate=!0)};lt("normal");let D=i.head,Et=v(Wt(`head${D}`,()=>new fe(D,32,20).scale(1,.98,.96)),mt(16777215,{map:W}));Et.position.y=D*.92,P.add(Et);for(let it of[-1,1]){let dt=v(Wt(`ear${D}`,()=>new fe(D*.2,10,8).scale(.6,1,.8)),c,2.5);dt.position.set(it*D*.97,D*.9,0),P.add(dt)}let K=v(Wt(`nose${D}`,()=>new fe(D*.14,10,8)),c,2);K.position.set(0,D*.84,D*.97),P.add(K),yt(e.hair,e.hat),G(e.hat);let $=[];for(let it of[-1,1]){let dt=new re;dt.position.set(it*(i.torso[0]/2+i.armR*.55),i.torso[1]-i.armR*1.1,0),m.add(dt);let ct=v(Wt(`sleeve${e.build}`,()=>new fe(i.armR*1.65,14,10)),y);dt.add(ct);let vt=v(Wt(`uarm${e.build}`,()=>new Wn(i.armR,i.arm/2-i.armR,4,10).translate(0,-i.arm/4,0)),c);dt.add(vt);let St=new re;St.position.y=-i.arm/2+i.armR*.4,dt.add(St);let Rt=v(Wt(`farm${e.build}`,()=>new Wn(i.armR*.95,i.arm/2-i.armR,4,10).translate(0,-i.arm/4,0)),c);St.add(Rt);let It=v(Wt(`hand${e.build}`,()=>new fe(i.hand,14,10).scale(1,1.1,.9)),c);It.position.y=-i.arm/2-i.hand*.4,St.add(It),$.push({sh:dt,el:St,hand:It})}let j=[];for(let it of[-1,1]){let dt=new re;dt.position.set(it*i.torso[0]*.24,0,0),A.add(dt);let ct=v(Wt(`thigh${e.build}`,()=>new Wn(i.legR*1.15,w-i.legR,4,10).translate(0,-w/2,0)),c);dt.add(ct);let vt=v(Wt(`sleg${e.build}`,()=>new ne(i.legR*1.6,i.legR*1.5,w*.5,12).translate(0,-w*.2,0)),u);dt.add(vt);let St=new re;St.position.y=-w,dt.add(St);let Rt=v(Wt(`shin${e.build}`,()=>new Wn(i.legR,w-i.legR,4,10).translate(0,-w/2,0)),c);St.add(Rt);let It=v(Wt(`sock${e.build}`,()=>new ne(i.legR*1.12,i.legR*1.12,w*.25,10).translate(0,-w*.86,0)),mt(16777215),2.5);St.add(It);let Ht=new re;Ht.position.y=-w,St.add(Ht);let Gt=v(Wt(`shoe${e.build}`,()=>new ge(...i.shoe,3,i.shoe[1]*.45).translate(0,-i.shoe[1]*.25,i.shoe[2]*.22)),g);Ht.add(Gt);let Vt=ue(Wt(`sole${e.build}`,()=>new ge(i.shoe[0]*1.04,i.shoe[1]*.3,i.shoe[2]*1.03,2,.05).translate(0,-i.shoe[1]*.62,i.shoe[2]*.22)),p,{ol:2.5,olRef:9});Ht.add(Vt);let le=ue(Wt(`swoosh${e.build}`,()=>new _e(i.shoe[0]*1.06,i.shoe[1]*.18,i.shoe[2]*.5).translate(0,-i.shoe[1]*.2,i.shoe[2]*.2)),mt(o),{cast:!1});Ht.add(le),j.push({hp:dt,kn:St,an:Ht})}Ft(e.accessory);let st=new re;st.visible=!1;{let it=ue(Wt("flossStick",()=>new ne(.025,.025,.6,5).rotateX(Math.PI/2).translate(0,0,.3)),mt("#e8d0a0"),{cast:!1}),dt=ue(Wt("flossFluff",()=>{let ct=wn(5);return Xe(Array.from({length:7},()=>new Je(.16+ct()*.06,1).translate((ct()-.5)*.22,(ct()-.5)*.22,.72+(ct()-.5)*.2)))}),mt("#ff9bd2"),{ol:2.5,olRef:9});st.add(it,dt),st.userData.fluff=dt,st.position.y=-i.arm/2-i.hand*.4,$[0].el.add(st)}function tt(it,dt){it==="floss"&&(st.visible=dt>0,dt>0&&st.userData.fluff.scale.setScalar(Math.max(.15,dt)))}let ht={},et=new sa(new Cr({transparent:!0,depthTest:!1}));et.scale.setScalar(.9),et.visible=!1,et.renderOrder=20,_.add(et);let rt=it=>{if(!it){et.visible=!1;return}ht[it]||(ht[it]=Jx(it),d.push(ht[it])),et.material.map=ht[it],et.material.needsUpdate=!0,et.visible=!0},gt=R+.12+i.torso[1]+.02+D*2;et.position.y=gt+.45;let nt=new Set([b,x,Et,...$.flatMap(it=>[it.hand]),...j.map(it=>it.an.children[0])]);for(let it of $)it.sh.children.forEach(dt=>dt.isMesh&&nt.add(dt));for(let it of j)it.hp.children.forEach(dt=>dt.isMesh&&nt.add(dt));_.traverse(it=>{it.isMesh&&!it.userData.isOutline&&(it.castShadow=nt.has(it))});function yt(it,dt){let ct=it||"short";if(ct==="bald")return;let vt=(St=1.07,Rt=.48)=>{let It=v(Wt(`hcap${D}${St}${Rt}`,()=>new fe(D*St,24,14,0,Math.PI*2,0,Math.PI*Rt)),f);return It.position.y=D*.92,It.rotation.x=-.32,P.add(It),It};if(ct==="curly"||ct==="afro"){let St=Wt(`curly${D}`,()=>{let It=wn(7),Ht=[];for(let Gt=0;Gt<26;Gt++){let Vt=It()*Math.PI*.55,le=It()*Math.PI*2,Zt=new V(Math.sin(Vt)*Math.cos(le),Math.cos(Vt),Math.sin(Vt)*Math.sin(le)).multiplyScalar(D*1.02);Zt.z>D*.55&&Zt.y<D*.75||Ht.push(new Je(D*.33,1).translate(Zt.x,Zt.y,Zt.z-D*.08))}return Xe(Ht)}),Rt=v(St,f);Rt.position.y=D*.98,ct==="afro"&&(Rt.scale.setScalar(1.28),Rt.position.y=D*1.05),P.add(Rt);return}if(dt==="beanie"||dt==="bucket"||dt==="bobble"){if(vt(1.05,.5),ct==="mullet"||ct==="long"||ct==="ponytail"){let St=v(Wt(`mul${D}`,()=>new ge(D*1.5,D*.9,D*.4,3,D*.15)),f);St.position.set(0,D*.35,-D*.78),P.add(St)}return}if(ct==="buzz"){let St=v(Wt(`buzz${D}`,()=>new fe(D*1.025,24,14,0,Math.PI*2,0,Math.PI*.45)),f,2);St.position.y=D*.92,St.rotation.x=-.32,P.add(St);return}if(vt(),ct==="quiff"||ct==="swept"){let St=v(Wt(`quiff${D}${ct}`,()=>new fe(D*.55,16,10).scale(ct==="quiff"?1.3:1.7,ct==="quiff"?.75:.45,1)),f);St.position.set(ct==="swept"?D*.25:0,D*1.82,D*.38),St.rotation.set(-.5,0,ct==="swept"?-.35:0),P.add(St)}if(ct==="mullet"){let St=v(Wt(`mul${D}`,()=>new ge(D*1.5,D*.9,D*.4,3,D*.15)),f);St.position.set(0,D*.35,-D*.78),P.add(St)}if(ct==="long"){let St=v(Wt(`hlong${D}`,()=>new ge(D*1.8,D*1.6,D*.5,3,D*.2)),f);St.position.set(0,D*.4,-D*.62),P.add(St)}if(ct==="ponytail"){let St=new re;St.position.set(0,D*1.35,-D*.85),P.add(St);for(let Rt=0;Rt<3;Rt++){let It=v(Wt(`pt${D}${Rt}`,()=>new fe(D*(.32-Rt*.05),12,8)),f);It.position.set(0,-Rt*D*.32,-Rt*D*.18),St.add(It)}P.userData.pony=St}if(ct==="bun"){let St=v(Wt(`bun${D}`,()=>new fe(D*.38,14,10)),f);St.position.set(0,D*2,-D*.2),P.add(St)}if(ct==="mohawk"||ct==="spiky"){let St=ct==="mohawk"?5:9;for(let Rt=0;Rt<St;Rt++){let It=v(Wt(`spk${D}`,()=>new He(D*.2,D*.7,8)),f),Ht=ct==="mohawk"?0:Rt/St*Math.PI*2,Gt=ct==="mohawk"?-.9+Rt/(St-1)*1.8:.6;It.position.set(Math.sin(Ht)*Math.sin(Gt)*D,D*.92+Math.cos(Gt)*D*1.05,(ct==="mohawk"?Math.sin(Gt):Math.cos(Ht)*Math.sin(Gt))*D),It.lookAt(It.position.clone().multiplyScalar(3)),It.rotateX(Math.PI/2),P.add(It)}}}function G(it){if(!it)return;let dt=mt(a==="#ffffff"||a==="#f8f8f8"?o:a),ct=mt(o);if(it==="backwards-cap"){let vt=v(Wt(`capd${D}`,()=>new fe(D*1.1,24,12,0,Math.PI*2,0,Math.PI*.42)),dt);vt.position.y=D*.98,vt.rotation.x=-.18,P.add(vt);let St=v(Wt(`brim${D}`,()=>new ne(D*.75,D*.75,D*.08,20,1,!1,-Math.PI/2,Math.PI).scale(1.2,1,1.15)),ct);St.position.set(0,D*1.42,-D*.62),St.rotation.set(-.12,Math.PI,0),P.add(St)}else if(it==="bobble"){let vt=v(Wt(`bean${D}`,()=>new fe(D*1.1,24,14,0,Math.PI*2,0,Math.PI*.5).scale(1,1.15,1)),ct);vt.position.y=D*.96,vt.rotation.x=-.12,P.add(vt);let St=v(Wt(`brim2${D}`,()=>new Ge(D*1.05,D*.17,8,24)),dt);St.rotation.x=Math.PI/2-.12,St.position.y=D*1.12,P.add(St);let Rt=v(Wt(`bigbob${D}`,()=>new Je(D*.48,1)),dt);Rt.position.y=D*2.45,P.add(Rt),P.userData.bobble=Rt}else if(it==="cap"||it==="visor"){if(it==="cap"){let St=v(Wt(`capd${D}`,()=>new fe(D*1.1,24,12,0,Math.PI*2,0,Math.PI*.42)),dt);St.position.y=D*.98,St.rotation.x=-.18,P.add(St)}else{let St=v(Wt(`vband${D}`,()=>new Ge(D*1,D*.12,8,24)),dt);St.rotation.x=Math.PI/2-.25,St.position.y=D*1.35,P.add(St)}let vt=v(Wt(`brim${D}`,()=>new ne(D*.75,D*.75,D*.08,20,1,!1,-Math.PI/2,Math.PI).scale(1.2,1,1.15)),ct);vt.position.set(0,D*1.42,D*.62),vt.rotation.x=.12,P.add(vt)}else if(it==="beanie"){let vt=v(Wt(`bean${D}`,()=>new fe(D*1.1,24,14,0,Math.PI*2,0,Math.PI*.5).scale(1,1.15,1)),dt);vt.position.y=D*.96,vt.rotation.x=-.12,P.add(vt);let St=v(Wt(`brim2${D}`,()=>new Ge(D*1.05,D*.17,8,24)),ct);St.rotation.x=Math.PI/2-.12,St.position.y=D*1.12,P.add(St);let Rt=v(Wt(`bob${D}`,()=>new Je(D*.3,1)),ct);Rt.position.y=D*2.25,P.add(Rt)}else if(it==="headband"||it==="sweatband"){let vt=v(Wt(`hb${D}`,()=>new Ge(D*1,D*.13,8,28)),dt);vt.rotation.x=Math.PI/2-.2,vt.position.y=D*1.3,P.add(vt);let St=v(Wt(`hbt${D}`,()=>new ge(D*.2,D*.5,D*.08,2,.02)),dt);St.position.set(.12,D*1.1,-D*1.05),St.rotation.z=.5,P.add(St),P.userData.tail=St}else if(it==="bucket"){let vt=v(Wt(`buck${D}`,()=>new ne(D*.8,D*1.02,D*.7,20)),dt);vt.position.y=D*1.75,P.add(vt);let St=v(Wt(`buckb${D}`,()=>new ne(D*1.5,D*1.5,D*.06,24)),ct);St.position.y=D*1.42,St.rotation.x=.1,P.add(St)}else if(it==="crown"||it==="tiara"){let vt=v(Wt(`crown${D}`,()=>new ne(D*.7,D*.62,D*.5,8,1,!0)),mt("#ffd23f",{side:We}));vt.position.y=D*2,P.add(vt)}else if(it==="wizard"||it==="party"){let vt=v(Wt(`cone${D}`,()=>new He(D*.8,D*1.8,16)),dt);vt.position.y=D*2.3,vt.rotation.z=.15,P.add(vt);let St=v(Wt(`bob${D}`,()=>new Je(D*.3,1)),ct);St.position.set(-D*.12,D*3.15,0),P.add(St)}else if(it==="helmet"||it==="bike_helmet"){let vt=v(Wt(`helm${D}`,()=>new fe(D*1.14,20,12,0,Math.PI*2,0,Math.PI*.46).scale(1,.9,1.15)),dt);vt.position.y=D*1,P.add(vt)}else if(it==="santa"){let vt=v(Wt(`santa${D}`,()=>new He(D*.95,D*1.6,16)),mt("#e8313f"));vt.position.y=D*2.2,vt.rotation.z=.5,P.add(vt);let St=v(Wt(`santar${D}`,()=>new Ge(D*.95,D*.2,8,24)),mt("#ffffff"));St.rotation.x=Math.PI/2,St.position.y=D*1.45,P.add(St)}else{let vt=v(Wt(`cone${D}`,()=>new He(D*.8,D*1.8,16)),dt);vt.position.y=D*2.3,P.add(vt)}}function Ft(it){if(it){if(it==="sunglasses"||it==="glasses"){let dt=it==="sunglasses";for(let vt of[-1,1]){let St=v(Wt(`lens${D}${dt}`,()=>new ge(D*.5,D*.32,D*.08,2,D*.06)),dt?mt("#141420"):mt("#cfefff"),2);St.position.set(vt*D*.3,D*1.02,D*.98),St.rotation.y=vt*.28,P.add(St)}let ct=ue(Wt(`bridge${D}`,()=>new _e(D*.3,D*.06,D*.06)),mt("#141420"),{cast:!1});ct.position.set(0,D*1.06,D*1.04),P.add(ct)}else if(it==="medal"){let dt=v(Wt("ribbon",()=>new Ge(.2,.03,6,20,Math.PI)),mt("#2e9bff"),2);dt.rotation.z=Math.PI,dt.position.set(0,i.torso[1]+.02,i.torso[2]/2-.05),dt.rotation.x=-.3,m.add(dt);let ct=v(Wt("medal",()=>new ne(.11,.11,.04,16).rotateX(Math.PI/2)),mt("#ffd23f",{emissive:"#664400",emissiveIntensity:.3}),2.5);ct.position.set(0,i.torso[1]-.22,i.torso[2]/2+.05),m.add(ct),T.position.y-=.1,T.position.x=.12,T.scale.multiplyScalar(.8)}else if(it==="headphones"){let dt=v(Wt(`hp${D}`,()=>new Ge(D*1.08,D*.07,6,24,Math.PI)),mt("#22202c"),2);dt.position.y=D*.95,P.add(dt);for(let ct of[-1,1]){let vt=v(Wt(`hpc${D}`,()=>new ne(D*.3,D*.3,D*.2,14).rotateZ(Math.PI/2)),mt(o),2.5);vt.position.set(ct*D*1.02,D*.92,0),P.add(vt)}}else if(it==="sweatband"||it==="wristbands"||it==="watch")for(let dt of $){let ct=v(Wt(`wb${e.build}`,()=>new ne(i.armR*1.3,i.armR*1.3,.12,10).translate(0,-i.arm/2+.1,0)),mt(it==="watch"?"#22202c":a),2);if(dt.el.add(ct),it==="watch")break}else if(it==="scarf"){let dt=v(Wt("scarf",()=>new Ge(.22,.08,8,18)),mt(a));dt.rotation.x=Math.PI/2,dt.position.y=.02,H.add(dt);let ct=v(Wt("scarft",()=>new ge(.14,.5,.06,2,.03)),mt(a));ct.position.set(.1,-.15,-.25),ct.rotation.x=.5,H.add(ct),P.userData.tail2=ct}else if(it==="cape"){let dt=v(Wt(`cape${e.build}`,()=>new an(i.torso[0]*1.2,i.torso[1]*1.5,1,4).translate(0,-i.torso[1]*.75,0)),mt(a,{side:We}),2),ct=new re;ct.position.set(0,i.torso[1],-i.torso[2]/2-.03),ct.add(dt),m.add(ct),P.userData.cape=ct}else if(it==="backpack"){let dt=v(Wt(`bp${e.build}`,()=>new ge(i.torso[0]*.7,i.torso[1]*.7,.25,3,.08)),mt(a));dt.position.set(0,i.torso[1]*.5,-i.torso[2]/2-.12),m.add(dt)}else if(it==="moustache"||it==="mustache"){let dt=v(Wt(`mou${D}`,()=>new Wn(D*.09,D*.5,4,8).rotateZ(Math.PI/2)),mt("#3a2616"),2);dt.position.set(0,D*.7,D*.98),P.add(dt)}else if(it==="beard"){let dt=v(Wt(`beard${D}`,()=>new fe(D*.78,18,12,0,Math.PI*2,Math.PI*.45,Math.PI*.55).scale(1.05,1,.75)),f,2.5);dt.position.set(0,D*.78,D*.32),P.add(dt);let ct=v(Wt(`mou${D}`,()=>new Wn(D*.09,D*.5,4,8).rotateZ(Math.PI/2)),f,2);ct.position.set(0,D*.7,D*.98),P.add(ct)}else if(it==="bumbag"){let dt=v(Wt(`bum${e.build}`,()=>new ge(i.torso[0]*.5,.2,.18,2,.07)),mt(a==="#ffffff"||a==="#f8f8f8"?"#22202c":a));dt.position.set(i.torso[0]*.12,.08,i.torso[2]/2+.08),A.add(dt);let ct=ue(Wt(`strap${e.build}`,()=>new Ge(i.torso[0]*.48,.025,6,24).scale(1,i.torso[2]/i.torso[0]*1.05,1).rotateX(Math.PI/2)),mt("#22202c"),{cast:!1});ct.position.y=.1,A.add(ct)}else if(it==="bib"){let dt=new Pe(Wt("bib",()=>new an(1,.78)),T.material);dt.scale.copy(T.scale),dt.position.set(0,i.torso[1]*.5,-i.torso[2]/2-.012),dt.rotation.y=Math.PI,m.add(dt),T.scale.multiplyScalar(1.3)}else if(it==="bowtie")for(let dt of[-1,1]){let ct=v(Wt("bow",()=>new He(.08,.16,4).rotateZ(Math.PI/2)),mt(a),2);ct.position.set(dt*.08,i.torso[1]-.06,i.torso[2]/2+.03),ct.rotation.z=dt>0?Math.PI:0,m.add(ct)}else if(it==="tutu"){let dt=v(Wt(`tutu${e.build}`,()=>new ne(i.torso[0]*.55,i.torso[0]*.9,.18,16,1,!0)),mt("#ff9bd2",{side:We}),2);dt.position.y=-.05,A.add(dt)}}}let At={phase:r()*6.28,t:r()*10,lean:0,j:{},look:0,lookPitch:0},_t=At.j,Ut=["hipLx","hipRx","kneeL","kneeR","ankL","ankR","shLx","shRx","shLz","shRz","elL","elR","twist","lean","bob","roll","headY","headX","bodyX","bodyY","bodyZ","hipSpread"];for(let it of Ut)_t[it]=0;let ot={},Ot="idle",O=null,N=0;function pt(it,dt=null){(it!==Ot||dt!==O)&&(Ot=it,O=dt,N=0)}function Ct(it,dt={}){At.t+=it,N+=it;let ct=At.t;for(let It of Ut)ot[It]=0;let vt="normal",St=10;if(Ot==="run"||Ot==="jog"||Ot==="trudge"||Ot==="distracted"){let It=Math.max(.5,dt.speed??3.5),Ht=Math.max(.2,dt.rate??1),Gt=Ot==="trudge",Vt=Gt?1.7:(2.55+.14*(It-3.5))*Math.pow(Ht,.3)*(Ot==="jog"?.8:1);At.phase+=it*Math.PI*Vt;let le=At.phase,Zt=Math.sin(le),C=Math.cos(le),U=Gt?.4:Math.max(.45,Math.min(1,.62+.13*(It-3.5)));ot.hipLx=-U*Zt,ot.hipRx=U*Zt,ot.kneeL=.2+(Gt?.5:1.35)*Math.max(0,C)*(.7+U*.3),ot.kneeR=.2+(Gt?.5:1.35)*Math.max(0,-C)*(.7+U*.3),ot.ankL=-.2*Zt,ot.ankR=.2*Zt;let Z=Gt?.3:.75*U+.15;ot.shLx=Z*Zt,ot.shRx=-Z*Zt,ot.shLz=-.18,ot.shRz=.18,ot.elL=Gt?-.5:-1.5,ot.elR=Gt?-.5:-1.5,ot.twist=.16*Zt,ot.roll=.05*Zt,ot.bob=(Gt?.03:.11)*(Math.abs(C)-.4),ot.lean=(Gt?.05:.16)+Math.max(-.25,Math.min(.45,(dt.slope??0)*1.6)),ot.headX=-ot.lean*.6,ot.headY=-.08*Zt,St=18,vt=dt.effort>.6?"effort":dt.effort>.3?"pant":"normal",Gt&&(ot.headX=.35,ot.lean=.25,vt="sad"),Ot==="distracted"&&(ot.headY=dt.lookYaw??.9,ot.headX=-.15,ot.twist+=(dt.lookYaw??.9)*.3,vt="love")}else if(Ot==="ready")ot.hipLx=-.5,ot.hipRx=.35,ot.kneeL=.6,ot.kneeR=.5,ot.lean=.35,ot.bob=-.12,ot.shLx=.5,ot.shRx=-.6,ot.elL=-1.3,ot.elR=-1.3,ot.headX=-.25,ot.bob+=Math.sin(ct*3)*.01,vt="effort";else if(Ot==="wave")ot.shRz=2.7,ot.elR=.2*Math.sin(ct*9)-.25,ot.shRx=Math.sin(ct*9)*.25,ot.shLz=-.3,ot.elL=-.4,ot.bob=Math.abs(Math.sin(ct*4))*.05,ot.headY=.1*Math.sin(ct*2),vt="happy";else if(Ot==="pose"){let It=O||"flex";if(It==="flex")ot.shLz=-1.5,ot.shRz=1.5,ot.elL=-1.9-Math.sin(ct*6)*.15,ot.elR=-1.9-Math.sin(ct*6+1)*.15,ot.shLx=-0,ot.bob=-.06+Math.abs(Math.sin(ct*3))*.03,ot.hipSpread=.25,ot.kneeL=.3,ot.kneeR=.3,vt="effort";else if(It==="point")ot.shRx=-1.5,ot.elR=0,ot.shLz=-.3,ot.elL=-1.6,ot.shLx=-.3,ot.headX=-.1,ot.lean=-.05,vt="happy",ot.bob=Math.sin(ct*5)*.02;else if(It==="stretch")ot.hipRx=-.2,ot.kneeR=2.3,ot.shRx=.8,ot.elR=-.6,ot.shLz=-2.6,ot.lean=.08+Math.sin(ct*2)*.04,vt="smug";else if(It==="spin"){let Ht=Math.min(1,N/1.1);ot.bodyY=(1-(1-Ht)**2)*Math.PI*4,ot.shLz=Ht<1?-1.3:-2.6,ot.shRz=Ht<1?1.3:2.6,ot.bob=Ht<1?Math.abs(Math.sin(ct*7))*.2:Math.abs(Math.sin(ct*5))*.12,vt="happy"}else It==="bow"?(ot.lean=.75+Math.sin(ct*2)*.05,ot.shLx=.4,ot.shRx=-1.2,ot.elR=-1.6,ot.shRz=.4,ot.headX=-.2,vt="happy"):(ot.shLz=-2.5,ot.shRz=2.5,ot.bob=Math.abs(Math.sin(ct*6))*.25,vt="happy");vt==="smug"&&(vt="normal")}else if(Ot==="celebrate"){let It=O||"jump";if(It==="jump"){let Ht=Math.abs(Math.sin(ct*5.5));ot.bob=Ht*.55,ot.shLz=-2.6-Ht*.3,ot.shRz=2.6+Ht*.3,ot.elL=-.2,ot.elR=-.2,ot.kneeL=ot.kneeR=(1-Ht)*.8,ot.hipLx=ot.hipRx=-(1-Ht)*.4,vt="happy",St=22}else if(It==="fist"){let Ht=Math.sin(ct*7);ot.shRx=-2.6,ot.elR=-.4+Ht*.4,ot.shLx=.4,ot.elL=-1.8,ot.bob=Math.abs(Ht)*.08,ot.lean=-.1,vt="happy"}else It==="kneel"?(ot.lean=.85,ot.kneeL=ot.kneeR=.7,ot.hipLx=ot.hipRx=-.6,ot.bob=-.25+Math.sin(ct*7)*.025,ot.shLx=ot.shRx=-.55,ot.elL=ot.elR=-.1,ot.shLz=-.15,ot.shRz=.15,ot.headX=-.6,vt="pant"):It==="collapse"?(ot.bodyX=-Math.PI/2+.05,ot.shLz=-2.2,ot.shRz=2.2,ot.hipSpread=.4,ot.kneeL=.3+Math.max(0,Math.sin(ct*9))*.4*(Math.sin(ct*.7)>.6?1:0),ot.kneeR=.2,vt="dead",St=4):It==="shrug"&&(ot.shLz=-.9,ot.shRz=.9,ot.elL=-1.4,ot.elR=-1.4,ot.shLx=-.5,ot.shRx=-.5,ot.headX=.1,ot.headY=Math.sin(ct*1.5)*.3,vt="sad")}else ot.bob=Math.sin(ct*2)*.015,ot.shLz=-.18,ot.shRz=.18,ot.elL=-.25,ot.elR=-.25,ot.headY=Math.sin(ct*.7)*.25,ot.lean=.02,ot.kneeL=ot.kneeR=.05;dt.lookYaw!=null&&Ot!=="distracted"&&(ot.headY+=dt.lookYaw);let Rt=1-Math.exp(-St*it);for(let It of Ut){if(It==="bodyY"&&Ot==="pose"&&O==="spin"){_t[It]=ot[It];continue}_t[It]+=(ot[It]-_t[It])*Rt}if(Ot==="pose"&&O==="spin"||(_t.bodyY=_t.bodyY%(Math.PI*2),_t.bodyY>Math.PI&&(_t.bodyY-=Math.PI*2)),j[0].hp.rotation.set(_t.hipLx,0,-_t.hipSpread),j[1].hp.rotation.set(_t.hipRx,0,_t.hipSpread),j[0].kn.rotation.x=_t.kneeL,j[1].kn.rotation.x=_t.kneeR,j[0].an.rotation.x=_t.ankL-_t.kneeL*.35,j[1].an.rotation.x=_t.ankR-_t.kneeR*.35,$[0].sh.rotation.set(_t.shLx,0,_t.shLz-0),$[1].sh.rotation.set(_t.shRx,0,_t.shRz),$[0].el.rotation.x=_t.elL,$[1].el.rotation.x=_t.elR,m.rotation.set(_t.lean,_t.twist,0),A.rotation.set(0,-_t.twist*.5,_t.roll),A.position.y=R+_t.bob,P.rotation.set(_t.headX,_t.headY,0),L.rotation.set(_t.bodyX,_t.bodyY,_t.bodyZ),L.position.y+=((Ot==="celebrate"&&O==="collapse"?i.torso[2]*.5+.08:0)-L.position.y)*Rt,P.userData.bobble&&(P.userData.bobble.position.y=D*2.45+Math.abs(Math.sin(At.phase))*.04),P.userData.pony&&(P.userData.pony.rotation.x=.4+Math.sin(At.phase*2)*.35),P.userData.tail&&(P.userData.tail.rotation.x=.6+Math.sin(At.phase*2)*.3),P.userData.cape&&(P.userData.cape.rotation.x=-.3-Math.min(1.1,(dt.speed??0)*.15)+Math.sin(ct*8)*.08),dt.expr&&(vt=dt.expr),lt(vt),et.visible){et.position.y=gt+.45+Math.sin(ct*6)*.08;let It=.9+Math.sin(ct*9)*.05;et.scale.set(It,It,It)}}function kt(){for(let it of d)it.dispose?.();et.material.dispose()}return{id:n.id,info:n,root:_,update:Ct,set:pt,setPop:rt,setExpr:lt,setProp:tt,dispose:kt,height:gt,hipH:R,get state(){return Ot},get variant(){return O}}}var Kx=(n,t,e)=>{let i=Math.max(0,Math.min(1,(e-n)/(t-n)));return i*i*(3-2*i)};function Rf(n,t,e){let i=n.timeMap,s={};e.forEach((x,m)=>s[x.id]=x.lane??m+1);let r=n.runners.length,o=Object.values(s),a=(Math.min(...o)+Math.max(...o))/2,l=Math.min(1.25,(Oe-1.6)/Math.max(1,r-1)),h=n.runners.map((x,m)=>{let b=no(i,x.officialS),E=((s[x.id]??m+1)-a)*l;return{...x,finishB:b,base:E,seed:m*1.7+.3}}),d=Object.fromEntries(h.map(x=>[x.id,x])),y=[...h].sort((x,m)=>x.officialS-m.officialS).map(x=>x.id),u=Object.fromEntries(y.map((x,m)=>[x,m+1])),c=d[y[0]],f=y.map(x=>d[x].officialS),M=d[y[0]].finishB,g=d[y.at(-1)].finishB,p=r>1&&f[1]-f[0]<=1.5,S=x=>Math.max(.05,(ms(i,x+.05)-ms(i,x-.05))/.1),v=new Map;function _(x){let m=Math.round(x*1e3);if(v.has(m))return v.get(m);let b=x<=0?0:ms(i,x),E=x<=0?4:S(x),T={b:x,raceS:b,rate:E,byId:{},order:[]};for(let z of h){let W=zn(z.progress,b),q=b>=z.officialS&&x>=z.finishB-1e-6,lt=(zn(z.progress,b+1)-zn(z.progress,Math.max(0,b-1)))/(b>1?2:1);T.byId[z.id]={id:z.id,m:W,finished:q,vRace:q?0:lt,place:u[z.id]}}for(let z of h){let W=T.byId[z.id],q=W.m,lt=z.base;lt+=.22*Math.sin(W.m/85+z.seed);for(let K of h){if(K===z)continue;let $=T.byId[K.id],j=W.m-$.m;if(Math.abs(j)<4&&!W.finished&&!$.finished){let st=(1-Math.abs(j)/4)*.32;lt+=Math.sign(z.base-K.base||z.seed-K.seed)*st}}let D=0;if(W.finished){let K=x-z.finishB,$=(zn(z.progress,z.officialS)-zn(z.progress,z.officialS-2))/2*S(z.finishB),j=Math.min(14,Math.max(4,$)),st=1.6;q=5e3+(K<st?j*(K-K*K/(2*st)):j*st/2+Math.min(10+u[z.id]*1.5,(K-st)*.9));let ht=(u[z.id]-(r+1)/2)*1.6;lt=lt+(ht-lt)*Kx(0,2.5,K),D=K}let Et=t.sample(q,z.id);lt*=1-Et.div,lt=Math.max(-Oe/2+.6,Math.min(Oe/2-.6,lt)),Object.assign(W,{mVis:q,x:Et.x+Et.rx*lt,z:Et.z+Et.rz*lt,y:t.heightAt(Et.x+Et.rx*lt,Et.z+Et.rz*lt)+.16,tx:Et.tx,tz:Et.tz,slope:Et.slope,div:Et.div,divInfo:Et.divInfo,lat:lt,post:D,distToFinish:Math.max(0,5e3-W.m)})}let k=h.filter(z=>T.byId[z.id].finished).sort((z,W)=>z.officialS-W.officialS),H=h.filter(z=>!T.byId[z.id].finished).sort((z,W)=>T.byId[W.id].m-T.byId[z.id].m||z.officialS-W.officialS);T.order=[...k,...H].map(z=>z.id),T.leader=T.byId[T.order[0]];let P=d[T.order[0]];for(let[z,W]of T.order.entries()){let q=T.byId[W];if(q.finished)q.gapText=z===0?Ra(d[W].officialS):`+${(d[W].officialS-c.officialS).toFixed(0)}s`;else if(z===0)q.gapText="LEADER";else{let lt=T.byId[T.order[0]].finished?c:P;q.gapText=`+${Math.max(0,b-ps(lt.progress,q.m)).toFixed(1)}s`}}return v.size>400&&v.clear(),v.set(m,T),T}return{stateAt:_,orderAt:x=>_(x).order,gapM:(x,m,b)=>{let E=_(b);return Math.abs((E.byId[x]?.m??0)-(E.byId[m]?.m??0))},finishedAt:(x,m)=>_(m).byId[x]?.finished,allFinishedAt:x=>x>g,firstFinishB:M,lastFinishB:g,photoFinish:p,finishOrder:y,place:u,byId:d,R:h,rateAt:S,durationS:i.durationS}}function Ra(n){let t=Math.floor(n/60),e=Math.round(n-t*60);return`${t}:${String(e).padStart(2,"0")}`}function Cf({plan:n,sim:t,backedIds:e=[],hasDiversion:i}){let s=n.events||[],r=t.lastFinishB+3.5,o=[],a=(w,R,x,m,b={})=>{x-R>=1.2&&o.push({type:w,a:R,b:x,prio:m,...b})},l=t.firstFinishB,h=t.finishOrder.map(w=>({who:w,broadcastS:t.byId[w].finishB})),d=l-5.5;h.forEach((w,R)=>{let x=h[R-1];x&&w.broadcastS-x.broadcastS>7.5&&(a("front",x.broadcastS+2.2,w.broadcastS-3.2,10,{ids:[w.who],tag:"chaser"}),d=w.broadcastS-3.2),a("finishcam",d,w.broadcastS+2.2,10,{ids:[w.who]}),d=w.broadcastS+2.2}),t.photoFinish&&a("photo",l-.02,l+.02,11);let y=s.find(w=>w.type==="final_stretch");if(y){let w=y.broadcastS,R=l-5.5,x=Math.max(1,Math.round((R-w)/6)),m=["final","track","battle","final","drone","front"];for(let b=0;b<x;b++){let E=w+(R-w)*b/x,T=w+(R-w)*(b+1)/x,k=(E+T)/2,H=t.orderAt(k),P=m[b%m.length],z=[H[0]];P==="battle"&&(z=[H[0],H[1]]);let W=t.gapM(H[0],H[1],k)<12;b===0?(P="final",z=[H[0]]):W&&P!=="final"&&(P="battle",z=[H[0],H[1]]),a(P,E,T,5,{ids:z})}}let u=s.filter(w=>w.type==="diversion").sort((w,R)=>w.broadcastS-R.broadcastS);u[0]&&a("distracted",u[0].broadcastS-.4,Math.max(u[0].broadcastS+6.5,Math.min((u[0].endBroadcastS??u[0].broadcastS+8)+1.2,u[0].broadcastS+9)),9,{ids:[u[0].who],banner:!0});for(let w of s.filter(R=>R.type==="hill")){let R=t.rateAt(w.broadcastS),x=Math.max(2.6,Math.min(6,140/Math.max(1,R*3.4)));a("hill",w.broadcastS-1.4,w.broadcastS+x,7,{lap:w.lap})}let c=s.find(w=>w.type==="lap");c&&a("lapboard",c.broadcastS-2.6,c.broadcastS+2,6);for(let w of s.filter(R=>R.type==="lead_change"))a("battle",w.broadcastS-1.6,w.broadcastS+2.8,6,{ids:[w.to,w.from],tag:"lead"});let f=-1e9,M=s.filter(w=>w.type==="lead_change").map(w=>w.broadcastS);for(let w of s.filter(R=>R.type==="overtake")){let R=e.includes(w.by)||e.includes(w.on),m=t.orderAt(w.broadcastS+.5).indexOf(w.by)<=1;!R&&!m||w.broadcastS-f<11||M.some(b=>Math.abs(b-w.broadcastS)<6)||(f=w.broadcastS,a("battle",w.broadcastS-1.4,w.broadcastS+2.6,R?4:3,{ids:[w.by,w.on]}))}a("startgo",-3.2,2.4,12),a("heli",-8.5,-3.2,12),o.sort((w,R)=>R.prio-w.prio||w.a-R.a);let g=[],p=(w,R)=>!g.some(x=>w<x.b&&R>x.a);for(let w of o){if(p(w.a,w.b)){g.push(w);continue}let R=w.a,x=w.b;for(let m of g)R<m.b&&x>m.a&&(m.a<=R?R=m.b:x=Math.min(x,m.a));x-R>=2.2&&p(R,x)&&g.push({...w,a:R,b:x})}g.sort((w,R)=>w.a-R.a);let S=[],v=-8.5,_=0,L=["track","drone","front","chase","track","blimp","front","side"],A=(w,R)=>{let x=R-w;if(x<=.05)return;if(x<2.2&&S.length){S.at(-1).b=R;return}let m=Math.max(1,Math.round(x/5.2));for(let b=0;b<m;b++){let E=w+x*b/m,T=w+x*(b+1)/m,k=(E+T)/2,H=t.orderAt(k),P=L[_++%L.length],z=[H[0]],W=e.filter(q=>!t.finishedAt(q,k)&&t.gapM(H[0],q,k)>25);W.length&&_%3===0?(P="chase",z=[W[_%W.length]]):P==="track"||P==="side"?z=H.filter(q=>t.gapM(H[0],q,k)<15).slice(0,3):(P==="drone"||P==="blimp")&&(z=H),t.allFinishedAt(k-2)&&(P="celebrate",z=t.finishOrder),S.push({type:P,a:E,b:T,prio:1,ids:z,filler:!0})}};for(let w of g)w.a>v&&A(v,w.a),S.push(w),v=Math.max(v,w.b);return v<r+30&&A(v,r+30),S}function If({camera:n,C:t,sim:e,world:i,funfair:s}){let r={pos:new V,look:new V,fov:45},o={off:new V,lookOff:new V,fov:45,init:!1},a=null,l=new V,h=new V,d=new V(0,1,0),y={};function u(S,v){let _=e.stateAt(v),L=S.map(H=>_.byId[H]).filter(Boolean);if(!L.length)return{p:new V(_.leader.x,_.leader.y,_.leader.z),h:new V(_.leader.tx,0,_.leader.tz),m:_.leader.m,spread:0};let A=new V,w=0;for(let H of L)A.x+=H.x,A.y+=H.y,A.z+=H.z,w+=H.m;A.divideScalar(L.length),w/=L.length;let R=1e9,x=-1e9;for(let H of L)R=Math.min(R,H.m),x=Math.max(x,H.m);let m=L[0],b=Math.max(0,m.mVis-18),E=t.xzAt(b,m.id),T=t.xzAt(b+36,m.id),k=new V(T.x-E.x,0,T.z-E.z).normalize();return isFinite(k.x)||k.set(0,0,1),{p:A,h:k,m:w,spread:x-R,list:L}}let c=S=>new V(-S.z,0,S.x);function f(S,v,_){let L=(v-S.a)/Math.max(.01,S.b-S.a),A=i.anchors.finish,w=i.anchors.start,R,x,m=45,b=!0;switch(S.type){case"heli":{let E=new V(150,0,0),T=new V(w.x,w.y,w.z),k=lh(Math.min(1,L*1.05)),H=-1.2+k*1.6,P=420-k*360;R=new V(E.x+Math.cos(H)*P,170-k*140,E.z+Math.sin(H)*P).lerp(new V(T.x-w.tx*40+w.rx*25,T.y+22,T.z-w.tz*40+w.rz*25),k*k),x=E.clone().setY(10).lerp(T,Math.min(1,k*1.3)),m=50,b=!1;break}case"startgo":{let E=new V(w.x,w.y,w.z),T=new V(w.tx,0,w.tz),k=c(T);if(v<.6)R=E.clone().addScaledVector(T,9.5+(v+3.2)*.25).addScaledVector(k,2.6).add(d.clone().multiplyScalar(1.9)),x=E.clone().add(d.clone().multiplyScalar(1.3)).addScaledVector(T,-1),m=42;else{let H=u(e.orderAt(v).slice(0,3),v);R=H.p.clone().addScaledVector(H.h,11).addScaledVector(c(H.h),3.5).add(d.clone().multiplyScalar(2.2)),x=H.p.clone().add(d.clone().multiplyScalar(1.2)),m=44}b=!1;break}case"track":case"side":{let E=u(S.ids,v),T=c(E.h),k=S.type==="side"?-1:1,H=8+Math.min(14,E.spread*.6);R=E.p.clone().addScaledVector(T,k*(H+2)).addScaledVector(E.h,3+Math.sin(L*3)*.6).add(d.clone().multiplyScalar(2.6)),x=E.p.clone().addScaledVector(E.h,1.5).add(d.clone().multiplyScalar(1.1)),m=42;break}case"front":case"final":{let E=u(S.ids,v),T=c(E.h),k=S.type==="final"?7.5-L*1.5:7;R=E.p.clone().addScaledVector(E.h,k).addScaledVector(T,S.type==="final"?1.4:-2).add(d.clone().multiplyScalar(S.type==="final"?.9:1.8)),x=E.p.clone().add(d.clone().multiplyScalar(1.35)).addScaledVector(E.h,-2),m=S.type==="final"?38:42;break}case"chase":{let E=u(S.ids,v),T=c(E.h);R=E.p.clone().addScaledVector(E.h,-7.5).addScaledVector(T,2.2).add(d.clone().multiplyScalar(3)),x=E.p.clone().addScaledVector(E.h,5).add(d.clone().multiplyScalar(1.2)),m=46;break}case"battle":{let E=u(S.ids,v),T=c(E.h),k=Math.floor(S.a*7)%2?1:-1,H=11+Math.min(10,E.spread*.7);R=E.p.clone().addScaledVector(E.h,H*.7).addScaledVector(T,k*H*.75).add(d.clone().multiplyScalar(2.3)),x=E.p.clone().add(d.clone().multiplyScalar(1.1)),m=42;break}case"drone":case"blimp":{let E=e.stateAt(v),T=E.byId[E.order[0]],k=E.order.map(D=>E.byId[D]).filter(D=>!D.finished),H=new V;for(let D of k.length?k:[T])H.add(new V(D.x,D.y,D.z));H.divideScalar(Math.max(1,k.length));let P=k.length?k[0].m-k.at(-1).m:0,z=u([E.order[0]],v),W=S.type==="blimp"?38+Math.min(50,P*.25):20+Math.min(40,P*.25),q=S.type==="blimp"?48:30+Math.min(40,P*.25),lt=H.clone().lerp(new V(T.x,T.y,T.z),.5);R=lt.clone().addScaledVector(z.h,-q).addScaledVector(c(z.h),q*.6).add(d.clone().multiplyScalar(W)),x=lt,m=46;break}case"hill":{let E=i.anchors.hillM,T=t.sample(E+105),k=new V(T.tx,0,T.tz),H=c(k);R=new V(T.x,T.y,T.z).addScaledVector(H,6.5).add(d.clone().multiplyScalar(2.2));let P=e.stateAt(v),z=P.order.map(D=>P.byId[D]).filter(D=>t.geoOf(D.m)>E-120&&t.geoOf(D.m)<E+200&&!D.finished),W=z.length?z[0]:null,q=W?new V(W.x,W.y+1.1,W.z):new V(T.x,T.y+1,T.z);x=q;let lt=R.distanceTo(q);m=nf.clamp(2*Math.atan(5.5/lt)*180/Math.PI,12,50),b=!0;break}case"lapboard":{let E=i.anchors.lapBoard,T=new V;E.getWorldPosition(T);let k=t.sample(2491),H=new V(k.tx,0,k.tz),P=c(H);R=new V(k.x,k.y,k.z).addScaledVector(P,-(4.6+3)).add(d.clone().multiplyScalar(2.4));let z=e.stateAt(v),W=z.order.map(lt=>z.byId[lt]).filter(lt=>lt.m>2350&&lt.m<2600),q=W.length?new V(W[0].x,W[0].y+1.2,W[0].z):T.clone().add(d.clone().multiplyScalar(2));x=T.clone().add(d.clone().multiplyScalar(1.8)).lerp(q,.45),m=46;break}case"finishcam":{let E=new V(A.tx,0,A.tz),T=c(E),k=e.stateAt(v),H=S.ids?.[0]??k.order[0],P=k.byId[H];R=new V(A.x,A.y,A.z).addScaledVector(E,16).addScaledVector(T,-4).add(d.clone().multiplyScalar(2.6));let z=new V(A.x,A.y+2.5,A.z),W=P&&!P.finished?new V(P.x,P.y+1.3,P.z):z;x=z.clone().lerp(W,P&&!P.finished?Math.min(.85,15/Math.max(15,P.distToFinish)):.3),m=P&&!P.finished&&P.distToFinish>30?30:40;break}case"celebrate":{let E=e.stateAt(v),T=new V;for(let z of E.order)T.add(new V(E.byId[z].x,E.byId[z].y,E.byId[z].z));T.divideScalar(E.order.length);let k=new V(A.tx,0,A.tz),H=c(k),P=Math.sin(v*.15)*.5;R=T.clone().addScaledVector(k,-10*Math.cos(P)).addScaledVector(H,10*Math.sin(P)).add(d.clone().multiplyScalar(2.6)),x=T.clone().add(d.clone().multiplyScalar(1.2)),m=46,b=!1;break}case"photo":{let E=new V(A.tx,0,A.tz),T=c(E);R=new V(A.x,A.y,A.z).addScaledVector(T,8.5).add(d.clone().multiplyScalar(1.3)),x=new V(A.x,A.y+1.1,A.z),m=40,b=!1;break}case"distracted":{let E=u(S.ids,v),T=c(E.h),k=i.anchors.nearestOnRibbon(E.p.x,E.p.z),H=Math.sign((k[0]-E.p.x)*T.x+(k[1]-E.p.z)*T.z)||1,P=T.clone().multiplyScalar(H),z=v-S.a;if(z<2.6&&s){let W=s.anchors.rides[0].pos,q=z/2.6,lt=new V(W.x-E.p.x,0,W.z-E.p.z).normalize();R=E.p.clone().addScaledVector(E.h,-18+q*2).addScaledVector(lt,-4).add(d.clone().multiplyScalar(13-q*2)),x=new V(W.x,E.p.y+8,W.z).lerp(E.p.clone().add(d),.45+q*.2),m=54,b=!1}else if(L<.62){let W=E.h.clone().multiplyScalar(.55).addScaledVector(P,.85).normalize();R=E.p.clone().addScaledVector(W,5.2).add(d.clone().multiplyScalar(2)),x=E.p.clone().add(d.clone().multiplyScalar(1.85)),m=46}else R=E.p.clone().addScaledVector(E.h,-12).addScaledVector(P,-9).add(d.clone().multiplyScalar(7.5)),x=E.p.clone().addScaledVector(P,10).add(d.clone().multiplyScalar(2.5)),m=52;break}default:{let E=u(S.ids||[],v);R=E.p.clone().addScaledVector(E.h,-10).add(d.clone().multiplyScalar(4)),x=E.p.clone()}}return{pos:R,look:x,fov:m,damp:b}}let M=0;function g(S,v,_){let L=_.find(m=>S>=m.a&&S<m.b)||_.at(-1),A=L.type==="distracted"?S-L.a<2.6?0:(S-L.a)/(L.b-L.a)<.62?1:2:0,w=L!==a||A!==M;M=A,a=L;let R=f(L,S,v);if(!R)return{shot:L,cut:w};let x=t.heightAt(R.pos.x,R.pos.z)+.8;if(R.pos.y<x&&(R.pos.y=x),w||!o.init||!R.damp)r.pos.copy(R.pos),r.look.copy(R.look),o.fov=R.fov,o.init=!0;else{let m=1-Math.exp(-4.5*v),b=r.pos.clone().sub(r.look),E=R.pos.clone().sub(R.look);b.lerp(E,m),r.look.copy(R.look),r.pos.copy(r.look).add(b),o.fov+=(R.fov-o.fov)*m}return n.position.copy(r.pos),n.lookAt(r.look),Math.abs(n.fov-o.fov)>.01&&(n.fov=o.fov,n.updateProjectionMatrix()),{shot:L,cut:w}}function p(){o.init=!1,a=null}return{update:g,reset:p,evaluate:f,get shot(){return a},cam:r}}function lh(n){return n<.5?2*n*n:1-Math.pow(-2*n+2,2)/2}var jx=`
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
.mr-title{position:absolute;left:50%;top:9%;width:max-content;max-width:92%;transform:translate(-50%,-30%) scale(.8);opacity:0;text-align:center;transition:all .6s cubic-bezier(.3,1.5,.5,1)}
.mr-title.on{opacity:1;transform:translate(-50%,0) scale(1)}
.mr-title .mr-t0{display:inline-block;font-size:calc(var(--u)*1.7);background:var(--pink);padding:.1em .9em;border:calc(var(--u)*.3) solid var(--ink);border-radius:calc(var(--u)*.8);transform:skewX(-10deg)}
.mr-title .mr-t1{display:block;white-space:nowrap;margin-top:calc(var(--u)*.6);font-size:calc(var(--u)*6);line-height:1;color:#fff;-webkit-text-stroke:calc(var(--u)*.45) var(--ink);paint-order:stroke fill;text-shadow:0 calc(var(--u)*.5) 0 rgba(0,0,0,.35)}
.mr-title .mr-t2{display:inline-block;margin-top:calc(var(--u)*.8);font-size:calc(var(--u)*2.1);color:var(--ink);background:var(--yellow);padding:.1em .9em;border:calc(var(--u)*.3) solid var(--ink);border-radius:calc(var(--u)*.8);transform:skewX(-10deg)}
.mr-pcap{position:absolute;left:50%;bottom:19%;transform:translateX(-50%) skewX(-10deg);background:var(--ink);color:#fff;border:calc(var(--u)*.3) solid #fff;padding:calc(var(--u)*.4) calc(var(--u)*2);font-size:calc(var(--u)*2.2);white-space:nowrap}
.mr-market{position:absolute;inset:0;opacity:0;transition:opacity .5s;background:radial-gradient(ellipse at center,rgba(0,0,0,0) 45%,rgba(20,10,40,.55) 100%)}
.mr-market.on{opacity:1}
.mr-market .mr-m1{position:absolute;left:50%;top:17%;transform:translate(-50%,-50%) skewX(-10deg) rotate(-2deg);background:linear-gradient(180deg,#3ddc84,#1f9d5a);border:calc(var(--u)*.45) solid var(--ink);border-radius:calc(var(--u)*1.2);padding:calc(var(--u)*.5) calc(var(--u)*3);font-size:calc(var(--u)*5.6);white-space:nowrap;color:#fff;-webkit-text-stroke:calc(var(--u)*.35) var(--ink);paint-order:stroke fill;box-shadow:0 calc(var(--u)*.7) 0 rgba(0,0,0,.35);animation:mrpulse 1.6s ease-in-out infinite}
@keyframes mrpulse{50%{transform:translate(-50%,-50%) skewX(-10deg) rotate(-2deg) scale(1.04)}}
.mr-market .mr-m2{position:absolute;left:50%;top:27%;transform:translateX(-50%);font-size:calc(var(--u)*2.3);-webkit-text-stroke:calc(var(--u)*.3) var(--ink);paint-order:stroke fill;white-space:nowrap}
.mr-market .mr-mt{position:absolute;right:calc(var(--u)*3);top:calc(var(--u)*25);font-size:calc(var(--u)*1.6);background:var(--ink);padding:.2em .8em;border-radius:calc(var(--u)*.6)}
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
.mr-dim .mr-tower,.mr-dim .mr-top,.mr-dim .mr-map,.mr-dimtop .mr-tower,.mr-dimtop .mr-top{opacity:0}
.mr-tower,.mr-top,.mr-map{transition:opacity .4s}
`,Pf=n=>`${n}<sup>${["th","st","nd","rd"][n%100>10&&n%100<14||n%10>3?0:n%10]}</sup>`,Qx=n=>`${n}${["th","st","nd","rd"][n%100>10&&n%100<14||n%10>3?0:n%10]}`,tv=n=>{n=Math.max(0,n);let t=Math.floor(n/60),e=Math.floor(n%60);return`${t}:${String(e).padStart(2,"0")}`},Wr=n=>String(n??"").replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t]),ev=n=>{let t=parseInt(n.slice(1),16);return(t>>16&255)*.299+(t>>8&255)*.587+(t&255)*.114>165?"#1a1420":"#ffffff"};function Df(n,{runners:t,backedBy:e={},course:i,park:s,C:r}){if(!document.getElementById("mr-hud-css")){let et=document.createElement("style");et.id="mr-hud-css",et.textContent=jx,document.head.appendChild(et)}let o=document.createElement("div");o.className="mr-hud mr-dim",o.innerHTML=`
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
    <div class="mr-results"></div>`,n.appendChild(o);let a=et=>o.querySelector(et),l={};o.querySelectorAll("[data-k]").forEach(et=>l[et.dataset.k]=et);let h=a(".mr-tower"),d={},y={};for(let et of t){let rt=document.createElement("div");rt.className="mr-row";let gt=e[et.id]||[],nt=gt.map(G=>`<span class="mr-badge" style="--bc:${kf(G)}">${nv(G)?"":"\u2605"}${Wr(String(G)).slice(0,10)}</span>`).join("");gt.length&&(rt.classList.add("backed"),rt.style.setProperty("--bc",kf(gt[0]))),rt.innerHTML=`<div class="mr-pos mr-num">1</div><div class="mr-card"><div class="mr-chip" style="background:${et.colour.primary};border-right:4px solid ${et.colour.secondary}"></div><div class="mr-name">${Wr(tr(et))}</div><div class="mr-gap"></div></div><span class="mr-badges">${nt}</span>`,h.appendChild(rt),d[et.id]={el:rt,pos:rt.querySelector(".mr-pos"),gap:rt.querySelector(".mr-gap"),last:""};let yt=document.createElement("div");yt.className="mr-tag",yt.innerHTML=`<span class="mr-tb">${nt}</span><span class="mr-tp mr-num"></span><span class="mr-tn" style="background:${et.colour.primary};color:#fff">${Wr(tr(et))}</span>`,yt.style.opacity="0",a(".mr-tags").appendChild(yt),y[et.id]={el:yt,pos:yt.querySelector(".mr-tp"),x:0,y:0,vis:!1}}let u=a(".mr-map canvas"),c=u.getContext("2d"),f=null,M=340,g=420;u.width=M,u.height=g;let p=i.points,S=1e9,v=1e9,_=-1e9,L=-1e9;for(let et of p)S=Math.min(S,et[0]),_=Math.max(_,et[0]),v=Math.min(v,et[2]),L=Math.max(L,et[2]);for(let et in r.diversions)for(let rt of r.diversions[et])for(let gt of rt.path)S=Math.min(S,gt[0]),_=Math.max(_,gt[0]),v=Math.min(v,gt[1]),L=Math.max(L,gt[1]);let A=26,w=Math.min((M-A*2)/(_-S),(g-A*2)/(L-v)),R=(M-(_-S)*w)/2,x=(g-(L-v)*w)/2,m=et=>R+(et-S)*w,b=et=>x+(et-v)*w;function E(){let et=document.createElement("canvas");et.width=M,et.height=g;let rt=et.getContext("2d"),gt=(_t,Ut,ot,Ot)=>{rt.beginPath(),_t.forEach((O,N)=>N?rt.lineTo(m(O[0]),b(O[1])):rt.moveTo(m(O[0]),b(O[1]))),rt.strokeStyle=Ut,rt.lineWidth=ot,rt.lineJoin=rt.lineCap="round",rt.setLineDash(Ot||[]),rt.stroke(),rt.setLineDash([])},nt=(_t,Ut)=>{for(let ot of s.features)ot.kind===_t&&ot.closed&&(rt.beginPath(),ot.pts.forEach((Ot,O)=>O?rt.lineTo(m(Ot[0]),b(Ot[1])):rt.moveTo(m(Ot[0]),b(Ot[1]))),rt.fillStyle=Ut,rt.fill())},yt=s.features.filter(_t=>_t.kind==="park").sort((_t,Ut)=>Ut.pts.length-_t.pts.length)[0];rt.save(),rt.beginPath(),yt.pts.forEach((_t,Ut)=>Ut?rt.lineTo(m(_t[0]),b(_t[1])):rt.moveTo(m(_t[0]),b(_t[1]))),rt.fillStyle="#9be27a",rt.fill(),rt.restore(),nt("water","#49a6ff"),nt("track","#ff7a5c");for(let _t in r.diversions)for(let Ut of r.diversions[_t])gt(Ut.path,"#c79a5a",4,[6,6]);let G=[];for(let _t=0;_t<=r.LAP1_END_DRAW;_t+=10)G.push(r.baseXZ(_t));gt(G,"#1a1420",11),gt(G,"#8fa0c4",6);let Ft=[];for(let _t=r.MAP_TO-80;_t<=r.finishM;_t+=10)Ft.push(r.baseXZ(_t));gt(Ft,"#1a1420",11),gt(Ft,"#8fa0c4",6);let At=r.rawExt(r.finishM);return rt.fillStyle="#fff",rt.strokeStyle="#1a1420",rt.lineWidth=3,rt.fillRect(m(At[0])-7,b(At[1])-7,14,14),rt.strokeRect(m(At[0])-7,b(At[1])-7,14,14),rt.fillStyle="#1a1420",rt.fillRect(m(At[0])-7,b(At[1])-7,7,7),rt.fillRect(m(At[0]),b(At[1]),7,7),et}f=E();let T=0,k=a(".mr-banner");function H(et,rt="",gt="#ff3d8b",nt=2.4){k.querySelector(".mr-b1 span").textContent=et,k.querySelector(".mr-b1").style.background=gt,k.querySelector(".mr-b2").textContent=rt,k.classList.remove("on"),k.offsetWidth,k.classList.add("on"),T=nt}let P="";function z(et,rt){if(T>0&&(T-=et,T<=0&&k.classList.remove("on")),!!rt){if(rt.raceS!=null&&(l.clock.textContent=tv(rt.raceS)),rt.leaderM!=null&&(l.lap.textContent=rt.leaderM>=2500?"2":"1",l.dist.textContent=`${(Math.min(5e3,rt.leaderM)/1e3).toFixed(1)} KM`,l.bar.style.width=`${Math.min(100,rt.leaderM/5e3*100)}%`),rt.order){let gt=h.clientHeight||0,nt=(h.querySelector(".mr-row")?.offsetHeight||40)+6;rt.order.forEach((yt,G)=>{let Ft=d[yt.id];if(!Ft)return;Ft.el.style.transform=`translateY(${G*nt}px)`;let At=`${G}|${yt.gapText}|${yt.finished}`;At!==Ft.last&&(Ft.last=At,Ft.pos.innerHTML=Pf(G+1),Ft.gap.textContent=yt.gapText,Ft.el.classList.toggle("lead",G===0),Ft.el.classList.toggle("fin",!!yt.finished))})}if(rt.tags)for(let gt of rt.tags){let nt=y[gt.id];nt&&(gt.visible!==nt.vis&&(nt.vis=gt.visible,nt.el.style.opacity=gt.visible?"1":"0"),gt.visible&&(nt.el.style.transform=`translate(${gt.x}px, ${gt.y}px) translate(-50%,-100%) scale(${gt.scale??1})`,nt.p!==gt.pos&&(nt.p=gt.pos,nt.pos.textContent=gt.pos?Qx(gt.pos):"",nt.pos.style.display=gt.pos?"":"none")))}if(rt.dots){c.clearRect(0,0,M,g),c.drawImage(f,0,0);for(let gt of[...rt.dots].reverse())c.beginPath(),c.arc(m(gt.x),b(gt.z),gt.lead?11:9,0,7),c.fillStyle=gt.colour,c.fill(),c.lineWidth=3.5,c.strokeStyle="#1a1420",c.stroke(),gt.focus&&(c.beginPath(),c.arc(m(gt.x),b(gt.z),15,0,7),c.strokeStyle="#fff",c.lineWidth=3,c.stroke());rt.camDot&&(c.save(),c.translate(m(rt.camDot.x),b(rt.camDot.z)),c.rotate(rt.camDot.a),c.fillStyle="rgba(26,20,32,.6)",c.beginPath(),c.moveTo(0,0),c.lineTo(-10,-22),c.lineTo(10,-22),c.fill(),c.restore())}}}function W(et){o.classList.toggle("mr-dim",!!et)}function q(et){o.classList.toggle("mr-dimtop",!!et)}function lt(){T=0,k.classList.remove("on")}function D(et){let rt=a(".mr-card3");if(!et){rt.classList.remove("on");return}rt.querySelector(".mr-lane span").textContent=et.lane??"",rt.querySelector(".mr-lane").style.background=et.colour.primary,rt.querySelector(".mr-info").style.background=`linear-gradient(180deg, ${et.colour.primary}, ${iv(et.colour.primary,-.25)})`,rt.querySelector(".mr-nick").textContent=et.nickname,rt.querySelector(".mr-nick").style.color="#fff",rt.querySelector(".mr-tagl").textContent=et.tagline||"",rt.querySelector(".mr-tagl").style.color=ev(et.colour.primary)==="#ffffff"?"#fff":"#1a1420",rt.classList.remove("on"),rt.offsetWidth,rt.classList.add("on")}function Et(et){let rt=a(".mr-count");rt.textContent=et,rt.classList.remove("pop"),rt.offsetWidth,rt.classList.add("pop")}function K(et,rt=""){a(".mr-photo").classList.toggle("on",!!et),a(".mr-pcap").textContent=rt,a(".mr-pcap").style.display=rt?"":"none"}function $(et,rt="Place your halfway bets!"){a(".mr-market").classList.toggle("on",!!et),a(".mr-market .mr-m2").textContent=rt}function j(et,{title:rt="",kicker:gt="",theme:nt=""}={}){let yt=a(".mr-title");if(et){yt.querySelector(".mr-t0").textContent=gt,yt.querySelector(".mr-t1").textContent=rt;let G=yt.querySelector(".mr-t2");G.textContent=nt,G.style.display=nt?"":"none",yt.querySelector(".mr-t0").style.display=gt?"":"none"}yt.classList.toggle("on",!!et)}function st(et,rt){let gt=rt[0]-et[0],nt=rt[1]-et[1],yt=Math.hypot(gt,nt)||1,G=gt/yt,Ft=nt/yt,At=et[0]-G*yt*.6,_t=et[1]-Ft*yt*.6,Ut=a(".mr-photo .mr-line");Ut.style.width=`${yt*2.2}px`,Ut.style.transform=`translate(${At}px, ${_t}px) rotate(${Math.atan2(Ft,G)}rad)`}function tt(et){let rt=a(".mr-results");if(!et){rt.classList.remove("on");return}rt.innerHTML='<div class="mr-panel mr-rh"><div class="mr-unskew">RESULTS</div></div>'+et.map(gt=>`<div class="mr-rr"><span class="mr-num">${Pf(gt.place)}</span><span style="width:calc(var(--u)*1.2);height:calc(var(--u)*2.2);background:${gt.colour};border:2px solid #1a1420;border-radius:4px"></span><span>${Wr(gt.nickname)}</span><span class="mr-t">${Wr(gt.timeText||"")}</span></div>`).join(""),requestAnimationFrame(()=>rt.classList.add("on"))}function ht(){o.remove()}return{root:o,update:z,showBanner:H,clearBanner:lt,setDim:W,setDimTop:q,introCard:D,countdown:Et,photo:K,photoLine:st,results:tt,market:$,titleCard:j,dispose:ht}}function tr(n){if(n.shortName)return n.shortName;let t=String(n.nickname||n.id).replace(/^the\s+/i,"");if(t.length<=14)return t;let e=t.split(/\s+/),i=e.slice(-2).join(" ");return i.length<=14?i:e.at(-1).slice(0,14)}var Lf=["#ffd23f","#ff8fc8","#7fe0ff","#9dff8a","#ffb067","#c7a6ff"],Ca=new Map;function kf(n){return Ca.has(n)||Ca.set(n,Ca.size),Lf[Ca.get(n)%Lf.length]}var nv=n=>/\p{Extended_Pictographic}/u.test(String(n));function iv(n,t){let e=parseInt(n.slice(1),16),i=e>>16&255,s=e>>8&255,r=e&255,o=a=>Math.max(0,Math.min(255,Math.round(t<0?a*(1+t):a+(255-a)*t)));return`rgb(${o(i)},${o(s)},${o(r)})`}var Ia=(n,t,e=12,i=!0)=>Qe(256,256,(s,r,o)=>{for(let a=0;a<e;a++)s.fillStyle=a%2?n:t,i?s.fillRect(a*r/e,0,r/e+1,o):s.fillRect(0,a*o/e,r,o/e+1)});function Uf(n,t,e,i){let s=wn(42),r=new re;n.add(r);let o=[],a=[],l=(b,E=3)=>(qn(b,E,void 0,30),b),h=(b,E,T=3)=>ue(b,E,{ol:T,olRef:30}),d=[];for(let b=0;b<i.path.length;b++){let E=i.path[b],T=e.anchors.nearestOnRibbon(E[0],E[1]),k=Math.hypot(E[0]-T[0],E[1]-T[1]);d.push({x:(E[0]+T[0])/2,z:(E[1]+T[1])/2,gap:k})}let y=0;d.forEach((b,E)=>{E&&(y+=Math.hypot(b.x-d[E-1].x,b.z-d[E-1].z)),b.s=y});let u=y,c=b=>{let E=0;for(;E<d.length-2&&d[E+1].s<b;)E++;let T=d[E],k=d[E+1],H=Math.max(0,Math.min(1,(b-T.s)/Math.max(1e-6,k.s-T.s))),P=T.x+(k.x-T.x)*H,z=T.z+(k.z-T.z)*H,W=Math.hypot(k.x-T.x,k.z-T.z)||1;return{x:P,z,gap:T.gap+(k.gap-T.gap)*H,tx:(k.x-T.x)/W,tz:(k.z-T.z)/W,y:t.heightAt(P,z)}},f=d.filter(b=>b.gap>26),M=f.length?f[0].s:u*.25,g=f.length?f.at(-1).s:u*.75,p=b=>Array.from({length:b},(E,T)=>c(M+(T+.5)/b*(g-M))),S=(b,E,T=0)=>(b.position.set(E.x,E.y-.1,E.z),b.rotation.y=Math.atan2(E.tx,E.tz)+T,r.add(b),b),v={center:c((M+g)/2),rides:[]},_=p(7);{let b=_.slice(1,6).sort((st,tt)=>tt.gap-st.gap)[0],E=new re,T=17,k=T+2.6,H=new ne(.35,.5,k/Math.cos(.32)+1,8);for(let st of[-1,1])for(let tt of[-1,1]){let ht=h(H,mt("#ffffff"));ht.position.set(st*1.8,k/2,tt*Math.tan(.32)*k/2),ht.rotation.x=-tt*.32,E.add(ht)}let P=h(new ge(6,1,8,2,.3),mt("#2e9bff"));P.position.y=.5,E.add(P);let z=new re;z.position.y=k,E.add(z);let W=h(new Ge(T,.45,8,64),mt("#ff3d8b"));W.rotation.y=Math.PI/2,W.position.x=1.2,z.add(W);let q=h(new Ge(T,.45,8,64),mt("#ff3d8b"));q.rotation.y=Math.PI/2,q.position.x=-1.2,z.add(q);let lt=h(new ne(1.3,1.3,3.2,16).rotateZ(Math.PI/2),mt("#ffd23f"));z.add(lt);let D=16,Et=[],K=[];for(let st=0;st<D;st++){let tt=st/D*Math.PI*2,ht=h(new _e(.18,T,.18).translate(0,T/2,0),mt("#ffffff"),2);ht.rotation.x=tt,ht.position.x=1.2,z.add(ht);let et=ht.clone();et.position.x=-1.2,z.add(et);let rt=new re;rt.position.set(0,Math.cos(tt)*T,Math.sin(tt)*T),z.add(rt);let gt=new re;rt.add(gt);let nt=["#ffd23f","#3ddc84","#2e9bff","#ff8a3d","#b07bff"][st%5],yt=h(new ge(1.7,1.3,1.5,2,.35),mt(nt));yt.position.y=-1.3,gt.add(yt);let G=h(new He(1.2,.7,4).rotateY(Math.PI/4),mt("#ffffff"),2);G.position.y=-.1,gt.add(G),Et.push(rt);for(let Ft=0;Ft<3;Ft++){let At=tt+Ft/3*(Math.PI*2/D);K.push([1.2,Math.cos(At)*T,Math.sin(At)*T],[-1.2,Math.cos(At)*T,Math.sin(At)*T])}}let $=new Ze(new fe(.32,8,6),new Ln({color:16777215}),K.length),j=new Ce;K.forEach((st,tt)=>{j.position.set(...st),j.updateMatrix(),$.setMatrixAt(tt,j.matrix),$.setColorAt(tt,new Jt(["#fff27a","#ff7ac8","#7affff"][tt%3]))}),z.add($),S(E,b,0),a.push(st=>{z.rotation.x=st*.18;for(let tt of Et)tt.rotation.x=-st*.18}),v.rides.push({kind:"wheel",obj:E,pos:new V(b.x,b.y+k,b.z),r:T}),b.used=!0}{let b=_.filter(K=>!K.used).sort((K,$)=>$.gap-K.gap)[0];b.used=!0;let E=new re,T=Math.min(6.5,b.gap*.28);E.scale.setScalar(1.45);let k=Ia("#ffffff","#ff4f6d",16);o.push(k);let H=h(new ne(T,T+.3,.9,32),mt("#ffffff",{map:k}));H.position.y=.45,E.add(H);let P=new re;E.add(P);let z=h(new ne(.7,.7,5,16),mt("#ffd23f"));z.position.y=3,P.add(z);let W=Ia("#ffd23f","#ff3d8b",16);o.push(W);let q=h(new He(T+.8,2.8,16),mt("#ffffff",{map:W}));q.position.y=6.6,P.add(q);let lt=h(new ne(T+.8,T+.8,.7,16,1,!0),mt("#2e9bff",{side:We}));lt.position.y=4.9,P.add(lt);let D=h(new fe(.5,12,8),mt("#ff3d8b"));D.position.y=8.2,P.add(D);let Et=[];for(let K=0;K<8;K++){let $=K/8*Math.PI*2,j=T*.72,st=new re;st.position.set(Math.cos($)*j,0,Math.sin($)*j),st.rotation.y=-$,P.add(st);let tt=h(new ne(.06,.06,4.2,6),mt("#ffd23f"),1.5);tt.position.y=2.9,st.add(tt);let ht=new re;st.add(ht);let et=["#ffffff","#ffd6f0","#d6f0ff","#fff2b0"][K%4],rt=h(new ge(.7,.7,1.6,2,.3),mt(et));ht.add(rt);let gt=h(new ge(.45,.9,.5,2,.2),mt(et));gt.position.set(0,.55,.7),gt.rotation.x=.4,ht.add(gt);let nt=h(new ge(.45,.45,.8,2,.2),mt(et));nt.position.set(0,.95,1.05),ht.add(nt);let yt=h(new ge(.15,.8,.3,1,.06),mt(["#ff3d8b","#2e9bff","#3ddc84","#ff8a3d"][K%4]),2);yt.position.set(0,.75,.55),yt.rotation.x=.4,ht.add(yt);let G=h(new ge(.75,.2,.6,1,.08),mt("#ff3d8b"),2);G.position.y=.4,ht.add(G);for(let[Ft,At]of[[-.22,.55],[.22,.55],[-.22,-.55],[.22,-.55]]){let _t=h(new _e(.16,.7,.16),mt(et),1.5);_t.position.set(Ft,-.55,At),_t.rotation.x=At>0?-.5:.5,ht.add(_t)}ht.rotation.y=Math.PI/2,Et.push({horse:ht,ph:K*.8})}S(E,b),a.push(K=>{P.rotation.y=K*.6;for(let $ of Et)$.horse.position.y=2+Math.sin(K*2.2+$.ph)*.35}),v.rides.push({kind:"carousel",obj:E,pos:new V(b.x,b.y+6,b.z),r:T*1.45})}{let b=_.filter(K=>!K.used).sort((K,$)=>$.gap-K.gap)[0];b.used=!0;let E=new re,T=15;E.scale.setScalar(1.5);let k=Ia("#ff3d3d","#ffffff",10,!1);o.push(k);let H=h(new ne(1.6,2.6,T,16),mt("#ffffff",{map:k}));H.position.y=T/2,E.add(H);let P=h(new He(2.6,3.4,16),mt("#2e9bff"));P.position.y=T+1.7,E.add(P);let z=h(new ne(.06,.06,2,6),mt("#ffffff"),1.5);z.position.y=T+4.2,E.add(z);let W=h(new an(1.2,.7).translate(.6,0,0),mt("#ffd23f",{side:We}),1.5);W.position.y=T+4.8,E.add(W);let q=[],lt=3.2;for(let K=0;K<=160;K++){let $=K/160,j=$*lt*Math.PI*2,st=2.6+(1-$)*-.8+1.6;q.push(new V(Math.cos(j)*st,T-1-$*(T-2),Math.sin(j)*st))}let D=h(new ga(new kr(q),220,.55,8,!1),mt("#ffd23f"));D.scale.y=1,E.add(D);let Et=h(new ge(3,.3,2,2,.1),mt("#3ddc84"),2);Et.position.set(q.at(-1).x+1,.15,q.at(-1).z),E.add(Et),S(E,b),a.push(K=>{W.rotation.y=Math.sin(K*3)*.4}),v.rides.push({kind:"helter",obj:E,pos:new V(b.x,b.y+12,b.z),r:6})}let L=[["CANDYFLOSS","#ff9bd2"],["HOOK-A-DUCK","#57c7ff"],["DOUGHNUTS","#ffb347"],["COCONUT SHY","#8ee86b"],["TOFFEE APPLES","#ff5d5d"],["HOOK-A-DUCK","#57c7ff"]],A=[];[..._.filter(b=>!b.used),...p(13).filter((b,E)=>E%2===1)].slice(0,7).forEach((b,E)=>{let[T,k]=L[E%L.length],H=new re,P=E%2?1:-1,z=h(new ge(4.2,2.4,3,2,.2),mt("#fff6e0"));z.position.y=1.2,H.add(z);let W=h(new ge(4.4,1.1,.8,2,.15),mt(k));W.position.set(0,.55,1.7),H.add(W);let q=Ia("#ffffff",k,10);o.push(q);let lt=h(new _e(4.8,.18,2.4),mt("#ffffff",{map:q}));lt.position.set(0,2.9,1.4),lt.rotation.x=.32,H.add(lt);for(let tt of[-1,1]){let ht=h(new ne(.09,.09,2.6,6),mt("#ffffff"),1.5);ht.position.set(tt*2.2,1.6,2.4),H.add(ht)}let D=Yn(512,128,(tt,ht,et)=>{tt.fillStyle="#1a1420",$e(tt,0,0,ht,et,30),tt.fill(),tt.fillStyle=k,$e(tt,8,8,ht-16,et-16,24),tt.fill(),tn(tt,T,ht/2,et/2+4,T.length>11?52:64,"#ffffff","#1a1420",.2)},o),Et=ue(new ge(4.2,1.05,.3,2,.1),[mt(k),mt(k),mt(k),mt(k),mt("#ffffff",{map:D}),mt("#ffffff",{map:D})],{ol:2.5,olRef:30});if(Et.position.set(0,3.7,.4),H.add(Et),T==="CANDYFLOSS")for(let tt=0;tt<4;tt++){let ht=h(new Je(.32,1),mt("#ff9bd2"),1.5);ht.position.set(-1.4+tt*.9,1.45,1.75),H.add(ht)}if(T==="HOOK-A-DUCK"){let tt=h(new ne(1.6,1.6,.6,20),mt("#57c7ff"),2);tt.position.set(0,.3,3.6),H.add(tt);let ht=new re;ht.position.set(0,.7,3.6),H.add(ht);for(let et=0;et<6;et++){let rt=et/6*Math.PI*2,gt=h(new fe(.22,10,8),mt("#ffd23f"),1.5);gt.position.set(Math.cos(rt)*1.1,0,Math.sin(rt)*1.1);let nt=h(new fe(.14,8,6),mt("#ffd23f"),1.2);nt.position.set(0,.22,.12),gt.add(nt),ht.add(gt)}A.push(ht)}let K=e.anchors.nearestOnRibbon(b.x,b.z),$=Math.atan2(K[0]-b.x,K[1]-b.z),j=Math.min(b.gap*.3,7)*P,st=S(H,{...b,x:b.x+b.tz*j,z:b.z-b.tx*j,y:t.heightAt(b.x+b.tz*j,b.z-b.tx*j)});st.rotation.y=$+(P>0?0:Math.PI)*0}),a.push(b=>{for(let E of A)E.rotation.y=b*.8});{let b=[],E=[],T=[],k=[],H=[];for(let D of[-1,1]){let Et=null;for(let K=M-10;K<=g+10;K+=9){let $=c(K),j=($.gap/2-6)*D,st=$.x+$.tz*j,tt=$.z-$.tx*j,ht=t.heightAt(st,tt),et=new V(st,ht+4.2,tt),rt=h(new ne(.08,.1,4.3,6),mt("#ffffff"),1.5);if(rt.position.set(st,ht+2.1,tt),r.add(rt),Et)for(let gt=0;gt<=10;gt++){let nt=gt/10,yt=Et.clone().lerp(et,nt);yt.y-=Math.sin(nt*Math.PI)*.7,b.push(yt),gt<10&&(gt%2?(E.push(yt.clone()),T.push(["#fff27a","#ff7ac8","#7affff","#9dff7a"][(gt+Math.round(K))%4])):(k.push({v:yt.clone(),a:Math.atan2(-(et.z-Et.z),et.x-Et.x)}),H.push(["#ff3d8b","#ffd23f","#2e9bff","#3ddc84","#ff8a3d"][(gt+Math.round(K/9))%5])))}Et=et}}let P=new Ce,z=new Ze(new fe(.16,8,6),new Ln({color:16777215}),E.length);E.forEach((D,Et)=>{P.position.copy(D),P.updateMatrix(),z.setMatrixAt(Et,P.matrix),z.setColorAt(Et,new Jt(T[Et]))}),r.add(z);let W=new Ie;W.setAttribute("position",new ce([-.32,0,0,.32,0,0,0,-.65,0],3)),W.setAttribute("normal",new ce([0,0,1,0,0,1,0,0,1],3));let q=new Ze(W,mt("#ffffff",{side:We}),k.length);k.forEach((D,Et)=>{P.position.copy(D.v),P.rotation.set(0,D.a,0),P.updateMatrix(),q.setMatrixAt(Et,P.matrix),q.setColorAt(Et,new Jt(H[Et]))}),r.add(q);let lt=[];for(let D=0;D+1<b.length;D++)b[D].distanceTo(b[D+1])<3&&lt.push(b[D],b[D+1]);r.add(new Ys(new Ie().setFromPoints(lt),new is({color:3355443}))),a.push(D=>{z.material.color.setScalar(.85+.15*Math.sin(D*6))})}{let b=c(M-4),E=Yn(1024,256,(k,H,P)=>{k.fillStyle="#1a1420",$e(k,0,0,H,P,60),k.fill(),k.fillStyle="#ff3d8b",$e(k,10,10,H-20,P-20,52),k.fill(),tn(k,"\u2605 FUNFAIR \u2605",H/2,P/2+6,120,"#ffe14d","#1a1420",.18)},o),T=ue(new ge(10,2.4,.4,2,.15),[mt("#ff3d8b"),mt("#ff3d8b"),mt("#ff3d8b"),mt("#ff3d8b"),mt("#ffffff",{map:E}),mt("#ffffff",{map:E})],{ol:3,olRef:30});T.position.set(b.x,b.y+7.5,b.z),T.rotation.y=Math.atan2(b.tx,b.tz)+Math.PI/2,r.add(T);for(let k of[-1,1]){let H=h(new ne(.25,.3,7.6,8),mt("#ffd23f"));H.position.set(b.x+b.tz*4.5*k,b.y+3.8,b.z-b.tx*4.5*k),r.add(H)}}let R=[];for(let b=0;b<60;b++){let E=M+s()*(g-M),T=c(E),k=(s()-.5)*(T.gap-16),H=T.x+T.tz*k,P=T.z-T.tx*k;R.push({x:H,y:t.heightAt(H,P),z:P,yaw:s()*6.28})}function x(b){for(let E of a)E(b)}function m(){r.traverse(b=>{b.geometry&&b.geometry.dispose()});for(let b of o)b.dispose?.();n.remove(r)}return{group:r,update:x,dispose:m,anchors:v,crowd:R,at:c,s0:M,s1:g}}function Nf(n,t,e,i,s,{camera:r}){let o=new re;n.add(o);let a=[],l=t.sample(t.finishM+28),h=new V(l.tx,0,l.tz),d=new V(l.rx,0,l.rz),y=new V(l.x,t.heightAt(l.x,l.z),l.z),u=Math.atan2(h.x,h.z);o.position.copy(y),o.rotation.y=u;let c=[{place:2,x:-2.3,hgt:1.3,col:"#c9d3e6"},{place:1,x:0,hgt:1.9,col:"#ffd23f"},{place:3,x:2.3,hgt:.9,col:"#e59a5c"}];for(let E of c){let T=Yn(256,256,(H,P,z)=>{H.fillStyle="#2e6fe0",H.fillRect(0,0,P,z),H.fillStyle=E.col,H.fillRect(0,0,P,26),tn(H,String(E.place),P/2,z/2+14,170,E.col,"#1a1420",.16)},a),k=ue(new ge(2.25,E.hgt,2,3,.12),[mt("#2e6fe0"),mt("#2e6fe0"),mt(E.col),mt("#2e6fe0"),mt("#ffffff",{map:T}),mt("#2e6fe0")],{ol:3.5,olRef:12});k.position.set(E.x,E.hgt/2,0),o.add(k),E.top=E.hgt}let f=Yn(1024,256,(E,T,k)=>{E.fillStyle="#1a1420",$e(E,0,0,T,k,50),E.fill(),E.fillStyle="#ff3d8b",$e(E,10,10,T-20,k-20,42),E.fill(),tn(E,"MARKRUN CHAMPIONS",T/2,k/2+6,100,"#ffffff","#1a1420",.16)},a),M=ue(new ge(9,2.2,.3,2,.1),[mt("#ff3d8b"),mt("#ff3d8b"),mt("#ff3d8b"),mt("#ff3d8b"),mt("#ffffff",{map:f}),mt("#ffffff",{map:f})],{ol:3,olRef:14});M.position.set(0,4.6,-2.4),o.add(M);for(let E of[-1,1]){let T=ue(new ne(.14,.16,4.6,8),mt("#ffffff"),{ol:2,olRef:14});T.position.set(E*4.3,2.3,-2.4),o.add(T)}let g=s.length,p=[];for(let E of s){let T=i[E.runnerId];if(!T)continue;let k=c.find(z=>z.place===E.place),H=k?new V(k.x,k.top,.1):null,P;if(E.place===1?P=["celebrate","jump"]:E.place===2?P=["pose","flex"]:E.place===3?P=["celebrate","fist"]:E.place===g&&g>3?P=["celebrate","collapse"]:P=["celebrate","shrug"],!H){p.push({rr:T,o:E,pose:P});continue}S(T,H,P)}p.forEach((E,T)=>{let k=T%2?1:-1,H=Math.floor(T/2),P=E.pose[1]==="collapse",z=new V(k*(P?4.6:4.2+H*1.6),0,P?1.6:.6+H*.8);S(E.rr,z,E.pose,P?-k*Math.PI/2:0)});function S(E,T,k,H=0){let P=T.clone().applyAxisAngle(new V(0,1,0),u).add(y);T.y===0&&(P.y=t.heightAt(P.x,P.z)+.05),E.root.position.copy(P),E.root.rotation.set(0,u+H,0),E.set(...k),E.setPop(null)}let v=wn(3),_=420,L=new Ze(new an(.16,.26),new Ln({side:We}),_),A=[],w=["#ff3d8b","#ffd23f","#2e9bff","#3ddc84","#ff8a3d","#ffffff","#b07bff"];for(let E=0;E<_;E++)A.push({x:(v()-.5)*14,y:v()*12,z:(v()-.5)*8,vy:1+v()*1.6,sp:v()*6,ph:v()*6.28}),L.setColorAt(E,new Jt(w[E%w.length]));L.frustumCulled=!1,o.add(L);let R=new Ce,x=0;function m(E,T){x+=E;for(let W=0;W<_;W++){let q=A[W];q.y-=q.vy*E,q.y<0&&(q.y+=12),R.position.set(q.x+Math.sin(x*1.3+q.ph)*.5,q.y,q.z+Math.cos(x+q.ph)*.4),R.rotation.set(x*q.sp+q.ph,x*q.sp*.7,q.ph),R.updateMatrix(),L.setMatrixAt(W,R.matrix)}L.instanceMatrix.needsUpdate=!0;let k=Math.sin(x*.18)*.4,H=15-Math.min(2.5,x*.2),P=new V(Math.sin(k)*H,3+Math.sin(x*.3)*.3,Math.cos(k)*H).applyAxisAngle(new V(0,1,0),u);r.position.copy(y).add(P);let z=new V(3.2,2.2,0).applyAxisAngle(new V(0,1,0),u).add(y);r.lookAt(z),r.fov!==42&&(r.fov=42,r.updateProjectionMatrix())}function b(){o.traverse(E=>{E.geometry&&E.geometry.dispose()}),L.material.dispose();for(let E of a)E.dispose?.();n.remove(o)}return{update:m,dispose:b,center:y}}var Fe=(n,t)=>{n=n.index?n.toNonIndexed():n;let e=new Jt(t).convertSRGBToLinear(),i=n.getAttribute("position").count,s=new Float32Array(i*3);for(let r=0;r<i;r++)s[r*3]=e.r,s[r*3+1]=e.g,s[r*3+2]=e.b;return n.setAttribute("color",new Ne(s,3)),n.getAttribute("uv")&&n.deleteAttribute("uv"),n},dn=(n,t,e,i,s=0,r=1.6)=>(n.scale(r,r,r),n.rotateY(s),n.translate(t,e,i),n);function Of(n,t,e,i){let s=wn(777),r=new re;n.add(r);let o=[],a=[],l=(f,M)=>`lawn:${Math.floor(f/140)},${Math.floor(M/140)}`,h=(f,M,g,p=.8,S)=>a.push({x:f,y:t.heightAt(f,M),z:M,yaw:g,scale:p,colour:S,zone:l(f,M)}),{ribbonSamples:d}=e.anchors;function y(f,M,g){for(let p=0;p<40;p++){let S=d[Math.floor(s()*d.length)],v=s()*Math.PI*2,_=f+s()*(M-f),L=S[0]+Math.cos(v)*_,A=S[1]+Math.sin(v)*_;if(!(!e.inPark(L,A)||e.blocked(L,A,g+1)||!e.clearOf(L,A,g)||e.onPath(L,A,g+2)))return e.reserve(L,A,g),{x:L,z:A,y:t.heightAt(L,A),toPath:Math.atan2(S[0]-L,S[1]-A)}}return null}{let f=[],M=["#ff5d8f","#ffd23f","#2e9bff","#3ddc84","#ff8a3d","#b07bff"],g=(A,w,R,x,m,b)=>{f.push(dn(Fe(new _e(1.6,.2,1.6).translate(0,2,0),m),A,w,R,x));for(let[k,H]of[[-.7,-.7],[.7,-.7],[-.7,.7],[.7,.7]])f.push(dn(Fe(new ne(.08,.08,2,6).translate(k,1,H),"#ffffff"),A,w,R,x));f.push(dn(Fe(new He(1.25,1,4).rotateY(Math.PI/4).translate(0,2.6,0),b),A,w,R,x));let E=new _e(.9,.12,3.3);E.rotateX(-.62),E.translate(0,1.05,2.1),f.push(dn(Fe(E,b),A,w,R,x));let T=new _e(.8,.08,2.4);T.rotateX(1),T.translate(0,1,-1.3),f.push(dn(Fe(T,"#ffffff"),A,w,R,x))},p=(A,w,R,x,m)=>{for(let b of[-1.8,1.8])for(let E of[-.6,.6]){let T=new ne(.08,.08,2.8,6);T.rotateX(E>0?.22:-.22),T.translate(b,1.35,E*.5),f.push(dn(Fe(T,m),A,w,R,x))}f.push(dn(Fe(new ne(.1,.1,3.8,8).rotateZ(Math.PI/2).translate(0,2.7,0),m),A,w,R,x));for(let b of[-.8,.8]){f.push(dn(Fe(new _e(.6,.08,.35).translate(b,.75,0),"#22202c"),A,w,R,x));for(let E of[-.25,.25])f.push(dn(Fe(new ne(.02,.02,1.9,4).translate(b+E,1.7,0),"#888888"),A,w,R,x))}},S=(A,w,R,x)=>{let m=new fe(1.6,8,5,0,Math.PI*2,0,Math.PI/2);f.push(dn(Fe(m,x),A,w,R)),f.push(dn(Fe(new ne(.4,.4,.5,8).translate(0,1.7,0),"#ffffff"),A,w,R))},v=(A,w,R,x,m)=>{f.push(dn(Fe(new ne(1.5,1.5,.25,16).translate(0,.35,0),x),A,w,R)),f.push(dn(Fe(new ne(.1,.1,1,6).translate(0,.9,0),m),A,w,R)),f.push(dn(Fe(new Ge(.9,.06,6,16).rotateX(Math.PI/2).translate(0,1.2,0),m),A,w,R))},_=(A,w,R,x,m)=>{f.push(dn(Fe(new fe(.45,10,8).scale(1,.9,1.4).translate(0,.95,0),m),A,w,R,x)),f.push(dn(Fe(new fe(.3,8,6).translate(0,1.4,.55),m),A,w,R,x)),f.push(dn(Fe(new ne(.12,.12,.6,6).translate(0,.3,0),"#888888"),A,w,R,x))},L=[g,p,S,v,_];for(let A of i.features){if(A.kind!=="playground"||!A.closed)continue;let w=Dn(A.pts),R=(w[2]-w[0])*(w[3]-w[1]),x=Math.max(1,Math.min(9,Math.round(R/380))),m=[];for(let b=0,E=0;b<x&&E<80;E++){let T=w[0]+3+s()*(w[2]-w[0]-6),k=w[1]+3+s()*(w[3]-w[1]-6);if(!Qs(A.pts,T,k)||m.some(lt=>Math.hypot(lt[0]-T,lt[1]-k)<8.5))continue;m.push([T,k]),b++;let H=t.heightAt(T,k)-.05,P=s()*6.28,z=M[Math.floor(s()*M.length)],W=M[Math.floor(s()*M.length)],q=L[(b+m.length+Math.floor(s()*5))%L.length];q===g||q===p||q===_?q(T,H,k,P,z,W):q(T,H,k,z,W),s()<.6&&h(T+2.5,k+1.5,s()*6,.55)}}if(f.length){let A=ue(Xe(f),mt("#ffffff",{vertexColors:!0}),{ol:2,olRef:30});r.add(A)}}{let f=Qe(64,64,(R,x,m)=>{for(let b=0;b<6;b++)for(let E=0;E<6;E++)R.fillStyle=(b+E)%2?"#ffffff":"#c8c8c8",R.fillRect(b*x/6,E*m/6,x/6+1,m/6+1)});o.push(f);let M=new an(2.8,2.2);M.rotateX(-Math.PI/2);let g=[],p=[],S=[],v=["#ff4f6d","#2e9bff","#3ddc84","#ffd23f","#ff8a3d","#b07bff"];for(let R=0;R<90;R++){let x=y(12,70,3);if(!x)continue;let m=s()*6.28;g.push({x:x.x,y:x.y+.06,z:x.z,ry:m}),p.push(v[R%v.length]),S.push({x:x.x+Math.cos(m)*.7,y:x.y+.05,z:x.z-Math.sin(m)*.7,ry:m});let b=1+Math.floor(s()*3);for(let E=0;E<b;E++){let T=m+E/b*Math.PI*2+.5,k=x.x+Math.cos(T)*.9,H=x.z-Math.sin(T)*.9;h(k,H,x.toPath+(s()-.5),.62+s()*.15)}}let _=new Ze(M,mt("#ffffff",{map:f,polygonOffset:!0,polygonOffsetFactor:-1}),g.length),L=new Ce;g.forEach((R,x)=>{L.position.set(R.x,R.y,R.z),L.rotation.set(0,R.ry,0),L.updateMatrix(),_.setMatrixAt(x,L.matrix),_.setColorAt(x,new Jt(p[x]))}),_.receiveShadow=!0,_.computeBoundingSphere(),r.add(_);let A=Xe([Fe(new ge(.7,.45,.5,2,.08).translate(0,.22,0),"#c98a4a"),Fe(new Ge(.25,.04,6,12,Math.PI).translate(0,.45,0),"#8a5a36")]),w=new Ze(A,mt("#ffffff",{vertexColors:!0}),S.length);S.forEach((R,x)=>{L.position.set(R.x,R.y,R.z),L.rotation.set(0,R.ry,0),L.updateMatrix(),w.setMatrixAt(x,L.matrix)}),w.castShadow=!0,w.computeBoundingSphere(),qn(w,1.6,void 0,20),r.add(w)}{let f=Xe([new Wn(.22,.5,4,8).rotateX(Math.PI/2).translate(0,.45,0),new fe(.22,10,8).translate(0,.72,.42),new fe(.1,6,5).scale(.6,1.4,.6).translate(-.14,.86,.36),new fe(.1,6,5).scale(.6,1.4,.6).translate(.14,.86,.36),new fe(.09,6,5).translate(0,.66,.64),...[[-.13,.25],[.13,.25],[-.13,-.25],[.13,-.25]].map(([R,x])=>new ne(.06,.06,.32,6).translate(R,.16,x)),new ne(.04,.03,.35,5).rotateX(-.9).translate(0,.6,-.42)].map(R=>R.index?R.toNonIndexed():R).map(R=>(R.deleteAttribute("uv"),R))),M=Xe([Fe(new fe(.55,12,8,0,Math.PI*2,Math.PI*.45,Math.PI*.55).scale(1,.8,1.3).translate(0,.95,0),"#ffffff"),Fe(new fe(.56,12,8,Math.PI,Math.PI,0,Math.PI*.5).scale(1,.9,.9).translate(0,.95,-.2),"#ffffff"),...[[-.45,.45],[.45,.45],[-.45,-.45],[.45,-.45]].map(([R,x])=>Fe(new Ge(.2,.06,6,12).rotateY(Math.PI/2).translate(R,.22,x),"#22202c")),Fe(new ne(.03,.03,.9,5).rotateX(.6).translate(0,1.15,-.85),"#22202c")]),g=[],p=[],S=[],v=[],_=["#c98a4a","#3b2a20","#f2e6d0","#8a8a8a","#e0b070","#ffffff"];for(let R=0;R<64;R++){let x=y(8,60,1.6);if(!x)continue;let m=s()*6.28;h(x.x,x.z,m,.82);let b=Math.sin(m),E=Math.cos(m);R%4===3?(S.push({x:x.x+b*1.4,y:x.y,z:x.z+E*1.4,ry:m,s:1}),v.push(["#ffb3c7","#b3dcff","#c8f0b0","#fff0a0"][R%4])):(g.push({x:x.x+b*1.6+E*.8,y:x.y,z:x.z+E*1.6-b*.8,ry:m+(s()-.5)*.8,s:.8+s()*.6}),p.push(_[Math.floor(s()*_.length)]))}let L=new Ce,A=(R,x,m,b)=>{let E=new Ze(R,x,m.length);return m.forEach((T,k)=>{L.position.set(T.x,T.y,T.z),L.rotation.set(0,T.ry,0),L.scale.setScalar(T.s),L.updateMatrix(),E.setMatrixAt(k,L.matrix),b&&E.setColorAt(k,new Jt(b[k]))}),E.castShadow=!0,E.receiveShadow=!0,E.computeBoundingSphere(),qn(E,2,void 0,18),r.add(E),E},w=g.length?A(f,mt("#ffffff"),g,p):null;S.length&&A(M,mt("#ffffff",{vertexColors:!0}),S,v)}{let f=[],M=[],g=[],p=["#ff5d8f","#ffd23f","#ffffff","#b06bff","#ff8a3d","#ff3d3d"];for(let w=0;w<26;w++){let R=y(9,40,3.2);if(!R)continue;let x=2.2+s()*.8;f.push({x:R.x,y:R.y-.05,z:R.z,s:x});let m=[p[w%p.length],p[(w+2)%p.length]];for(let b=0;b<60;b++){let E=s()*6.28,T=Math.sqrt(s())*(x-.25);M.push({x:R.x+Math.cos(E)*T,y:R.y+.25,z:R.z+Math.sin(E)*T,s:.8+s()*.5}),g.push(m[b%2])}}let S=new Ce,v=Xe([Fe(new ne(1,1.05,.35,20).translate(0,.17,0),"#4f9e3a"),Fe(new Ge(1.02,.08,6,24).rotateX(Math.PI/2).translate(0,.35,0),"#ffffff")]),_=new Ze(v,mt("#ffffff",{vertexColors:!0}),f.length);f.forEach((w,R)=>{S.position.set(w.x,w.y,w.z),S.scale.set(w.s,1,w.s),S.updateMatrix(),_.setMatrixAt(R,S.matrix)}),_.receiveShadow=!0,_.computeBoundingSphere(),qn(_,1.6,void 0,20),r.add(_);let L=new Je(.24,0),A=new Ze(L,mt("#ffffff",{flatShading:!0}),M.length);S.scale.setScalar(1),M.forEach((w,R)=>{S.position.set(w.x,w.y,w.z),S.scale.setScalar(w.s),S.updateMatrix(),A.setMatrixAt(R,S.matrix),A.setColorAt(R,new Jt(g[R]))}),A.computeBoundingSphere(),r.add(A)}{let f=t.sample(55),M=-1,g=Oe/2+9,p=f.x+f.rx*g*M,S=f.z+f.rz*g*M;e.blocked(p,S,3)&&(p=f.x-f.rx*g*M,S=f.z-f.rz*g*M);let v=new re,_=Qe(128,16,(k,H,P)=>{for(let z=0;z<8;z++)k.fillStyle=z%2?"#fff":"#3a9d5d",k.fillRect(z*16,0,16,P)});o.push(_),v.add(ue(new ge(3.2,1.6,1.8,3,.25),mt("#3a9d5d"),{ol:3,olRef:20})).position.y=1.15;let L=ue(new ge(3.4,.15,2,2,.05),mt("#f4e3c0"),{ol:2,olRef:20});L.position.y=2,v.add(L);let A=ue(new _e(3.8,.15,2.4),mt("#ffffff",{map:_}),{ol:2.5,olRef:20});A.position.y=3.2,v.add(A);for(let k of[-1.6,1.6]){let H=ue(new ne(.06,.06,1.2,6),mt("#ffffff"),{ol:1.5});H.position.set(k,2.6,.9),v.add(H)}for(let k of[-1.1,1.1]){let H=ue(new ne(.4,.4,.2,14).rotateZ(Math.PI/2),mt("#22202c"),{ol:2});H.position.set(k,.4,.95),v.add(H);let P=H.clone();P.position.z=-.95,v.add(P)}let w=ue(new ne(.75,.55,1.3,16),mt("#ffffff"),{ol:3,olRef:20});w.position.y=4,v.add(w);let R=ue(new ne(.82,.82,.22,16),mt("#5a3a24"),{ol:2.5,olRef:20});R.position.y=4.75,v.add(R);let x=ue(new ne(.72,.62,.45,16),mt("#c98a4a"),{ol:2,olRef:20});x.position.y=3.95,v.add(x);let m=Yn(512,128,(k,H,P)=>{k.fillStyle="#1a1420",$e(k,0,0,H,P,28),k.fill(),k.fillStyle="#ffd23f",$e(k,6,6,H-12,P-12,22),k.fill(),tn(k,"FLAT WHITES",H/2,P/2+4,62,"#ffffff","#1a1420",.2)},o),b=new Pe(new an(2.8,.7),mt("#ffffff",{map:m}));b.position.set(0,1.4,.92),v.add(b);let E=b.clone();E.rotation.y=Math.PI,E.position.z=-.92,v.add(E);let T=Math.atan2(f.x-p,f.z-S);v.position.set(p,t.heightAt(p,S),S),v.rotation.y=T,r.add(v);for(let k=0;k<5;k++){let H=p+Math.sin(T)*(2.2+k*1.1)+Math.cos(T)*(k%2?.3:-.3),P=S+Math.cos(T)*(2.2+k*1.1);h(H,P,T+Math.PI,.8)}e.anchors.coffeeCart=v}function u(){}function c(){r.traverse(f=>{f.geometry&&f.geometry.dispose()});for(let f of o)f.dispose?.();n.remove(r)}return{group:r,crowd:a,update:u,dispose:c}}var Pa=8.5;function sv(n,t={}){let{course:e,park:i,round:s,plan:r}=t,o=t.backedBy||{},a=Object.keys(o).filter(I=>(o[I]||[]).length),l=[...s?.runners||[]].sort((I,X)=>(I.lane??0)-(X.lane??0)),h=!!r?.runners?.some(I=>I.diversions&&I.diversions.length),d=new ta({antialias:!0,powerPreference:"high-performance",preserveDrawingBuffer:!!t.preserveDrawingBuffer});d.setPixelRatio(Math.min(window.devicePixelRatio||1,t.maxPixelRatio??1.5)),d.outputColorSpace=sn,d.toneMapping=ti,d.shadowMap.enabled=!0,d.shadowMap.type=Wc;let y=d.domElement;y.style.cssText="position:absolute;inset:0;width:100%;height:100%;display:block",getComputedStyle(n).position==="static"&&(n.style.position="relative"),n.appendChild(y);let u=new na;u.fog=new ea(13496063,700,3200);let c=new yn(45,16/9,.3,9e3),f=new _a(14676223,9420912,1.45);u.add(f);let M=new Ma(16774109,2.3),g=new V(-.45,.82,.38).normalize();M.castShadow=!0,M.shadow.mapSize.set(2048,2048),M.shadow.bias=-4e-4,M.shadow.normalBias=.03,M.shadow.radius=3,u.add(M),u.add(M.target);let p=gf(e,i,r),S=vf(u,p,{course:e,park:i,hasFunfair:h}),v=null;if(h){let I=r.runners.find(Q=>Q.diversions?.length).diversions[0],X=p.diversions[r.runners.find(Q=>Q.diversions?.length).id][0];v=Uf(u,p,S,X||I)}let _=Sf(p,S.anchors.crowdZones,5,S.onPath,S.blocked),L=Of(u,p,S,i);_.push(...L.crowd),v&&_.push(...v.crowd.map(I=>({...I,zone:"fair"})));let A=new Map;for(let I of _){let X=I.zone??"x";A.has(X)||A.set(X,[]),A.get(X).push(I)}let w=[...A.values()].map(I=>bf(u,I)),R={update:(...I)=>w.forEach(X=>X.update(...I)),dispose:()=>w.forEach(I=>I.dispose())},x=Rf(r,p,l),m={};for(let I of l){let X=Af(I);m[I.id]=X,u.add(X.root)}let b=l.map(I=>I.id),E=Object.fromEntries(l.map(I=>[I.id,I])),T=Df(n,{runners:l,backedBy:o,course:e,park:i,C:p}),k=Cf({plan:r,sim:x,backedIds:a,hasDiversion:h}),H=If({camera:c,C:p,sim:x,world:S,funfair:v}),P=null,z=[];for(let I of r.events||[])z.push({at:I.broadcastS,evt:{...I,kind:"event"}});for(let I of r.commentary||[])z.push({at:I.broadcastS,evt:{...I,kind:"commentary"}});z.sort((I,X)=>I.at-X.at);let W="idle",q=!1,lt=!1,D=-Pa,Et=0,K=null,$=null,j=0,st=!1,tt=!1,ht=0,et=0,rt=!1,gt=Math.max(.05,Number(t.speed)||1),nt=null,yt=0,G=new Set;function Ft(){let I=n.clientWidth||window.innerWidth,X=n.clientHeight||window.innerHeight;d.setSize(I,X,!1),c.aspect=I/X,c.updateProjectionMatrix(),rh.uRes.value.set(I*d.getPixelRatio(),X*d.getPixelRatio())}let At=typeof ResizeObserver<"u"?new ResizeObserver(Ft):null;At?.observe(n),window.addEventListener("resize",Ft),Ft();let _t={};{let I=b.length;b.forEach((X,Q)=>{let xt=(Q-(I-1)/2)*Math.min(1.25,(Oe-1.6)/Math.max(1,I-1)),Lt=p.sample(0);_t[X]={x:Lt.x+Lt.rx*xt-Lt.tx*1.2,z:Lt.z+Lt.rz*xt-Lt.tz*1.2,yaw:Math.atan2(Lt.tx,Lt.tz)},_t[X].y=p.heightAt(_t[X].x,_t[X].z)+.16})}function Ut(I="idle"){for(let X of b){let Q=_t[X],xt=m[X];xt.root.position.set(Q.x,Q.y,Q.z),xt.root.rotation.set(0,Q.yaw,0),I&&xt.set(I),xt.setPop(null)}}Ut();let ot=(I,X)=>I===1?"jump":I===2||I===3?"fist":I===X?"collapse":"kneel";function Ot(I,X){let Q=x.stateAt(Math.max(0,I)),xt=b.length;for(let Lt of b){let Dt=Q.byId[Lt],wt=m[Lt];if(I<0)continue;wt.root.position.set(Dt.x,Dt.y,Dt.z);let Kt=Math.atan2(Dt.tx,Dt.tz)+(Dt.finished&&Dt.post>2.4&&!(Dt.place>3&&Dt.post<4)?Math.PI*(Dt.place%2?1:-1)*.92:0),se=wt.root.rotation.y,oe=Kt-se;for(;oe>Math.PI;)oe-=2*Math.PI;for(;oe<-Math.PI;)oe+=2*Math.PI;wt.root.rotation.y=se+oe*Math.min(1,X*10);let ae={speed:Dt.vRace,rate:Q.rate,slope:Dt.slope},we=p.diversions[Lt]?.[0];if(we&&wt.setProp("floss",Dt.m>we.toM-20?Math.max(.25,1-(Dt.m-we.toM)/3500):0),Dt.finished){let ye=Dt.place;Dt.post<1.6?(wt.set("run"),ae.speed=3,ae.rate=1.2):ye>3&&Dt.post<4?wt.set("trudge"):wt.set("celebrate",ot(ye,xt)),wt.setPop(null)}else if(Dt.div>.3){wt.set("distracted");let ye=v?.anchors.rides.reduce((ln,en)=>!ln||en.pos.distanceToSquared(wt.root.position)<ln.pos.distanceToSquared(wt.root.position)?en:ln,null);if(ye){let en=Math.atan2(ye.pos.x-Dt.x,ye.pos.z-Dt.z)-wt.root.rotation.y;for(;en>Math.PI;)en-=2*Math.PI;for(;en<-Math.PI;)en+=2*Math.PI;ae.lookYaw=Math.max(-1.3,Math.min(1.3,en))}wt.setPop(["!","heart","floss"][Math.floor((Dt.m-Dt.divInfo.fromM)/120)%3])}else{wt.set("run"),wt.setPop(null);let ye=p.geoOf(Dt.m);ae.effort=Dt.m>4300?.4+(Dt.m-4300)/700*.5:ye>1700&&ye<2060?.7:.1}wt.update(X,ae)}}let O=new V,N=null,pt=-1,Ct=()=>{if(pt!==Et||!N){let I=y.getBoundingClientRect();N=[...T.root.querySelectorAll(".mr-tower, .mr-map, .mr-top")].map(X=>{let Q=X.getBoundingClientRect();return{left:Q.left-I.left,right:Q.right-I.left,top:Q.top-I.top,bottom:(X.classList.contains("mr-tower")?Q.top+X.querySelectorAll(".mr-row").length*((X.querySelector(".mr-row")?.offsetHeight||40)+6):Q.bottom)-I.top}}),pt=Et}return N};function kt(I,X=!0){let Q=y.clientWidth,xt=y.clientHeight,Lt=[];for(let wt of b){let Kt=m[wt];O.set(Kt.root.position.x,Kt.root.position.y+Kt.height+.55,Kt.root.position.z);let se=O.distanceTo(c.position);O.project(c);let oe=X&&O.z<1&&O.z>-1&&Math.abs(O.x)<.95&&O.y<.82&&O.y>-.62&&se>9.5&&se<150,ae=(O.x*.5+.5)*Q,we=(-O.y*.5+.5)*xt;oe&&Ct().some(ye=>ae>ye.left-40&&ae<ye.right+40&&we>ye.top-10&&we<ye.bottom+40)&&(oe=!1),Lt.push({id:wt,x:(O.x*.5+.5)*Q,y:(-O.y*.5+.5)*xt,visible:oe,pos:I?I.order.indexOf(wt)+1:0,scale:Math.max(.7,Math.min(1.15,30/se)),dist:se})}Lt.sort((wt,Kt)=>wt.dist-Kt.dist);let Dt=[];for(let wt of Lt){if(!wt.visible)continue;let Kt=(tr(E[wt.id]).length*12+60)*wt.scale;for(let se=0;se<8;se++){let oe=Dt.find(ae=>Math.abs(ae.x-wt.x)<(ae.tw+Kt)/2&&Math.abs(ae.y-wt.y)<30*Math.max(ae.scale,wt.scale));if(!oe)break;wt.y=oe.y-31*Math.max(oe.scale,wt.scale)}wt.tw=Kt,Dt.push(wt)}return I?{raceS:I.raceS,leaderM:I.leader.m,tags:Lt,order:I.order.map(wt=>({id:wt,gapText:I.byId[wt].gapText,finished:I.byId[wt].finished})),dots:I.order.map((wt,Kt)=>({x:I.byId[wt].x,z:I.byId[wt].z,colour:E[wt].colour.primary,lead:Kt===0,focus:H.shot?.ids?.includes(wt)}))}:W!=="race"?{tags:Lt}:{tags:Lt,raceS:0,leaderM:0,order:b.map(wt=>({id:wt,gapText:"",finished:!1})),dots:b.map(wt=>({x:_t[wt].x,z:_t[wt].z,colour:E[wt].colour.primary}))}}function it(I,X){let Q=Math.max(30,Math.min(220,X)),xt=M.shadow.camera;xt.right!==Q&&(xt.left=-Q,xt.right=Q,xt.top=Q,xt.bottom=-Q,xt.near=1,xt.far=900,xt.updateProjectionMatrix());let Lt=2*Q/M.shadow.mapSize.x,Dt=Math.round(I.x/Lt)*Lt,wt=Math.round(I.z/Lt)*Lt;M.target.position.set(Dt,I.y,wt),M.position.set(Dt+g.x*400,I.y+g.y*400,wt+g.z*400)}let dt=["wave","flex","point","stretch","spin","bow"];function ct(I,X){let Q=[...I.personality||I.id].reduce((xt,Lt)=>xt+Lt.charCodeAt(0),X);return dt[Q%dt.length]}function vt(I,X={}){W="intro",T.setDim(!0),T.clearBanner(),T.photo(!1),T.results(null),Zt(),T.market(!1),nt=null,q=!1,y.style.filter="",Ut("idle");let Q=X.perRunnerS??t.introPerRunnerS??4.2,xt=X.flyoverS??7;return $={t:0,idx:-1,per:Q,fly:xt,onDone:I,waiting:!1,segStart:0,minSeg:2.5,done:!1,group:!1},{flyoverS:xt,perRunnerS:Q,runners:b.slice()}}function St(I){let X=$;if(!X)return;X.t+=I;let Q=_t;if(X.idx===-1){!X.title&&X.t>.8&&(X.title=!0,Rt(!0));let ae=Math.min(1,X.t/X.fly),we=lh(ae),ye=p.sample(0),ln=new V(170,0,-40),en=2.2-we*2,$i=520-we*470,Cn=new V(ln.x+Math.cos(en)*$i,190-we*170,ln.z+Math.sin(en)*$i),Oa=new V(ye.x+ye.tx*22+ye.rx*10,ye.y+9,ye.z+ye.tz*22+ye.rz*10);Cn.lerp(Oa,we*we);let F=ln.clone().setY(15).lerp(new V(ye.x,ye.y+1,ye.z),Math.min(1,we*1.2));c.position.copy(Cn),c.lookAt(F),J(50),ae>=1&&It();return}if(X.group){let ae=p.sample(0),we=(X.t-X.segStart)/3;if(c.position.set(ae.x+ae.tx*(9+we*2)+ae.rx*2,ae.y+2.2+we*.6,ae.z+ae.tz*(9+we*2)+ae.rz*2),c.lookAt(ae.x,ae.y+1.3,ae.z),J(46),we>=1&&!X.done){X.done=!0,T.introCard(null);let ye=X.onDone;$=null,W="idle",ye?.()}return}let xt=b[X.idx],Lt=Q[xt],Dt=X.t-X.segStart,wt=new V(Math.sin(Lt.yaw),0,Math.cos(Lt.yaw)),Kt=new V(-wt.z,0,wt.x),se=m[xt].height,oe=3.2+se*.6-Math.min(.6,Dt*.12);c.position.set(Lt.x+wt.x*oe+Kt.x*.9,Lt.y+se*.62,Lt.z+wt.z*oe+Kt.z*.9),c.lookAt(Lt.x-Kt.x*1.25,Lt.y+se*.55,Lt.z-Kt.z*1.25),J(40),!X.waiting&&Dt>=X.per&&It(),X.waiting==="released"&&Dt>=X.minSeg&&It()}function Rt(I){let X=s||{};T.titleCard(I,{title:X.title||"MARKRUN",kicker:X.number?`ROUND ${X.number}`:"LIVE FROM FINSBURY PARK",theme:X.theme?typeof X.theme=="string"?X.theme:X.theme.label||X.theme.name||"":""})}function It(){let I=$;I.idx===-1&&Rt(!1),I.idx++,I.segStart=I.t;for(let Lt of b)m[Lt].set("idle");if(I.idx>=b.length){I.group=!0;for(let Lt of b)m[Lt].set("pose","point");T.introCard(null),setTimeout(()=>{},0);for(let Lt of b)m[Lt].set("wave");return}let X=b[I.idx];m[X].set(ct(E[X],I.idx)==="wave"?"wave":"pose",ct(E[X],I.idx)),t.introCards!==!1&&T.introCard(E[X]),I.waiting=!1;let xt=t.onIntroRunner?.(X,I.idx);xt&&typeof xt.then=="function"&&(I.waiting=!0,xt.then(()=>{$===I&&(I.waiting="released")},()=>{$===I&&(I.waiting="released")}))}function Ht(I,X){W="race",T.setDim(!1),T.results(null),Zt(),$=null,T.introCard(null),T.titleCard(!1),T.market(!1),nt=null,q=!1,y.style.filter="",D=-Pa,ht=0,et=0,j=0,st=!1,tt=!1,G.clear(),rt=!!t.skipRaceTitle,T.setDimTop(!1),K={onEvent:I,onDone:X},Ut("idle"),H.reset()}let Gt=[[-3,"3"],[-2,"2"],[-1,"1"],[0,"GO!"]];function Vt(I){let X=Q=>E[Q]?.nickname||Q;switch(I.type){case"lead_change":return["LEAD CHANGE!",`${X(I.to)} hits the front`,"#ff3d8b"];case"overtake":return!a.includes(I.by)&&!a.includes(I.on)&&x.stateAt(I.broadcastS).order.indexOf(I.by)>1?null:["OVERTAKE!",`${X(I.by)} passes ${X(I.on)}`,"#2e6fe0"];case"hill":return[I.lap===1?"THE HILL!":"THE HILL AGAIN!","Legs of jelly incoming","#3aa845"];case"lap":return["LAP 2 OF 2","One more time round!","#2e6fe0"];case"final_stretch":return["FINAL STRETCH!","Here comes the finish","#ff8a1f"];case"diversion":return G.has("div")?null:(G.add("div"),["DISTRACTED!",`${X(I.who)} has spotted the funfair`,"#b04bff"]);case"finish":return I.place===1&&!x.photoFinish?["WINNER!",X(I.who),"#ffb000"]:null;case"breakaway":return["BREAKAWAY!",`${X(I.who)} makes a break`,"#ff3d8b"];default:return null}}function le(I){if(j>0){if(j-=I,j<=0){T.photo(!1),y.style.filter="",S.anchors.finishArch.visible=!0,H.reset();let Q=x.finishOrder[0];T.showBanner("WINNER!",E[Q]?.nickname||Q,"#ffb000",2.6)}return}let X=D;for(D+=I,D<-4.2&&!rt&&(rt=!0,Rt(!0),T.setDimTop(!0)),D>=-3.6&&rt===!0&&(rt="done",Rt(!1),T.setDimTop(!1));et<Gt.length&&D>=Gt[et][0];){let[Q,xt]=Gt[et++];if(T.countdown(xt),K?.onEvent?.({kind:"countdown",n:xt==="GO!"?0:Number(xt),text:xt,broadcastS:Q}),Q===-3)for(let Lt of b)m[Lt].set("ready")}for(;ht<z.length&&D>=z[ht].at;){let Q=z[ht++].evt;try{K?.onEvent?.(Q)}catch(xt){console.error(xt)}if(Q.kind==="event"){let xt=Vt(Q);xt&&T.showBanner(...xt)}}if(x.photoFinish&&!st&&D>=x.firstFinishB){st=!0,D=x.firstFinishB,j=t.photoFreezeS??2.8;{let[Q,xt]=x.finishOrder;T.photo(!0,`${tr(E[Q])} or ${tr(E[xt])}? Checking the camera...`)}y.style.filter="grayscale(0.55) sepia(0.35) contrast(1.12)",K?.onEvent?.({kind:"photo_finish",broadcastS:D,ids:x.finishOrder.slice(0,2)})}!tt&&D>=x.lastFinishB+3.5&&(tt=!0,K?.onDone?.())}function Zt(){P&&(P.dispose(),P=null)}function C(I){W="podium",T.setDim(!0),T.clearBanner(),$=null,T.titleCard(!1),T.market(!1),nt=null,q=!1,y.style.filter="",T.photo(!1),Zt();let X=I?.finishOrder?.length?[...I.finishOrder].sort((Q,xt)=>Q.place-xt.place):x.finishOrder.map((Q,xt)=>({runnerId:Q,place:xt+1,officialS:x.byId[Q].officialS,timeText:Ra(x.byId[Q].officialS)}));P=Nf(u,p,S,m,X,{camera:c}),t.podiumCard!==!1&&T.results(X.map(Q=>({place:Q.place,nickname:E[Q.runnerId]?.nickname||Q.runnerId,colour:E[Q.runnerId]?.colour.primary||"#888",timeText:Q.timeText||Ra(Q.officialS)})))}let U=performance.now(),Z=0,B={frames:0,acc:0,fps:0};function J(I){Math.abs(c.fov-I)>.01&&(c.fov=I,c.updateProjectionMatrix())}function Y(I,X=!1){Et+=I;let Q=null;q||(W==="intro"&&St(I),W==="race"&&le(I));let xt=q?0:I;if(W==="race"){if(j>0){let wt=S.anchors.finish;S.anchors.finishArch.visible=!1,c.position.set(wt.x+wt.rx*9-wt.tx*.6,wt.y+6.4,wt.z+wt.rz*9-wt.tz*.6),c.lookAt(wt.x-wt.rx*.6-wt.tx*.6,wt.y+.8,wt.z-wt.rz*.6-wt.tz*.6),J(42),c.updateMatrixWorld();let Kt=new V(wt.x+wt.rx*3,wt.y+.05,wt.z+wt.rz*3).project(c),se=new V(wt.x-wt.rx*3,wt.y+.05,wt.z-wt.rz*3).project(c);T.photoLine([(Kt.x*.5+.5)*y.clientWidth,(-Kt.y*.5+.5)*y.clientHeight],[(se.x*.5+.5)*y.clientWidth,(-se.y*.5+.5)*y.clientHeight])}else if(q&&nt!=null){nt+=I;let wt=x.stateAt(Math.max(0,D)),Kt=wt.byId[wt.order[0]],se=wt.order.slice(0,3).map(Cn=>wt.byId[Cn]).filter(Cn=>Math.abs(Cn.m-Kt.m)<25),oe=new V;for(let Cn of se)oe.add(new V(Cn.x,Cn.y,Cn.z));oe.divideScalar(Math.max(1,se.length)),yt||(yt=Math.atan2(c.position.x-oe.x,c.position.z-oe.z));let ae=yt+nt*.12,we=10+Math.min(25,Kt.m-se.at(-1).m)*.4,ye=Math.min(1,nt/1.2),ln=ye*ye*(3-2*ye),en=oe.x+Math.sin(ae)*we,$i=oe.z+Math.cos(ae)*we;c.position.set(en,Math.max(oe.y+3+ln*2,p.heightAt(en,$i)+2.5),$i),c.lookAt(oe.x,oe.y+2.3,oe.z),J(44)}else H.update(D,xt,k);if(Q=D>=0?x.stateAt(D):null,D<0)for(let wt of b)m[wt].update(xt,{});else Ot(D,j>0?0:xt);let Dt=H.shot?.type;it(H.cam.look,Dt==="drone"||Dt==="blimp"||Dt==="heli"?160:45)}else if(W==="podium"&&P){P.update(xt,Et);for(let Dt of b)m[Dt].update(xt,{});it(P.center,40)}else{for(let Dt of b)m[Dt].update(xt,{});if(W==="idle"){let Dt=p.sample(0),wt=Et*.12;c.position.set(Dt.x+Math.sin(wt)*14,Dt.y+4.5,Dt.z+Math.cos(wt)*14),c.lookAt(Dt.x,Dt.y+1.2,Dt.z),J(45)}it(new V(_t[b[0]]?.x??0,0,_t[b[0]]?.z??0),W==="intro"&&$?.idx===-1?160:40)}S.update(Et),v?.update(Et);let Lt=b.map(Dt=>m[Dt].root.position);R.update(Et,c.position,Lt,W==="podium"?.9:null),T.update(I,W==="race"?kt(Q,D>-1&&nt==null):kt(null,!1)),X||d.render(u,c)}function at(I){if(lt)return;Z=requestAnimationFrame(at);let X=Math.min(gt>1?.25:.1,(I-U)/1e3);U=I,B.frames++,B.acc+=X,B.acc>1&&(B.fps=B.frames/B.acc,B.frames=0,B.acc=0);let Q=X*gt;for(;Q>1e-6;){let xt=Math.min(Q,.1);Y(xt,Q-xt>1e-6),Q-=xt}}t.manualLoop||(Z=requestAnimationFrame(at));function Pt(){lt=!0,cancelAnimationFrame(Z),At?.disconnect(),window.removeEventListener("resize",Ft),Zt();for(let I of b)u.remove(m[I].root),m[I].dispose();R.dispose(),v?.dispose(),L.dispose(),S.dispose(),T.dispose(),u.traverse(I=>{I.geometry&&I.geometry.dispose()}),Tf(),xf(),d.dispose(),d.forceContextLoss?.(),y.remove()}let Tt={seek(I,X=1.2){W="race",T.setDim(!1),$=null,Zt(),K=K||{},T.introCard(null),T.results(null),T.photo(!1),y.style.filter="",H.reset();let Q=Math.round(X*30);for(let xt=Q;xt>=0;xt--){if(D=I-xt/30,ht=z.findIndex(Lt=>Lt.at>D),ht<0&&(ht=z.length),et=Gt.findIndex(Lt=>Lt[0]>D),et<0&&(et=Gt.length),st=D>=x.firstFinishB,tt=D>=x.lastFinishB+3.5,j=0,D<-3)for(let Lt of b)m[Lt].set("idle");else if(D<0)for(let Lt of b)m[Lt].set("ready");if(xt>0)if(H.update(D,1/30,k),D>=0)Ot(D,1/30);else for(let Lt of b)m[Lt].update(1/30,{})}q=!0,Y(0)},introAt(I,X=1.5){if(vt(()=>{},{}),q=!1,I<0){$.t=X,St(0),Y(0),q=!0;return}for($.t=$.fly,St(0);$&&$.idx<I;)$.t=$.segStart+$.per+.01,St(0);for(let Q=0;Q<X*30;Q++){St(1/30);for(let xt of b)m[xt].update(1/30,{})}q=!0,Y(0)},podiumAt(I=3){T.introCard(null),C(null);for(let X=0;X<I*30;X++){P.update(1/30,X/30);for(let Q of b)m[Q].update(1/30,{})}q=!0,Y(0)},photoAt(){this.seek(x.firstFinishB-.05),q=!1,st=!1;for(let I=0;I<3;I++)Y(1/30);q=!0,Y(0)},render(){Y(0)},unpause(){q=!1},lookFrom(I,X,Q,xt,Lt,Dt,wt=45){W="debugcam",c.position.set(I,X,Q),c.lookAt(xt,Lt,Dt),J(wt),T.setDim(!0),d.render(u,c)},step(I,X=!0){Y(I,!X)},get mode(){return W},get b(){return D},shots:k,sim:x,C:p,director:H,renderer:d,scene:u,camera:c,info:()=>d.info,fps:()=>B.fps};return{playIntro:vt,playRace:Ht,showPodium:C,setPaused(I,{market:X=!0,marketText:Q}={}){I=!!I,I!==q&&(q=I,W==="race"&&j<=0&&t.marketOnPause!==!1&&X&&(I?(nt=0,yt=0,T.market(!0,Q??t.marketText??"Place your halfway bets!"),y.style.filter="saturate(1.2) contrast(1.06)"):(nt=null,T.market(!1),y.style.filter="",H.reset())))},setSpeed(I){gt=Math.max(.05,Number(I)||1)},dispose:Pt,hudRoot:T.root,get broadcastTime(){return D},get durationS(){return Pa+x.lastFinishB+3.5},preRollS:Pa,_debug:Tt}}function Ff(n){let e=Array.from({length:201},(r,o)=>Math.round(o*25/5e3*1500*1e3)/1e3),i=(n?.runners||[]).map(r=>({id:r.id,officialS:1500,progress:e,pacingSource:"intro"})),s=Th(n?.roundId||"intro",i);return s.events=[],s.commentary=[],s}var ka=new URLSearchParams(location.search),ir=Math.max(.25,Number(ka.get("speed"))||1),uh=ka.get("race")==="2d",Nn=n=>Math.round(n/ir);window.__markrun={events:[],speed:ir};var si=n=>{window.__markrun.events.push({at:Date.now(),...n}),window.__markrun.events.length>500&&window.__markrun.events.shift()},er=xe("#stage"),bi=xe("#screen"),qr=xe("#hud-bottom"),Yr=xe("#subs"),av=xe("#reactions"),Xr=xe("#next-hint"),La=xe("#race-layer"),ve=null,nr=null,Jr=ka.has("autostart"),Hi=ka.has("mute"),ie=yh(),Mi=wh({onLine:pv,onIdle:()=>{ie.duck(!1)}});function Gf(){let n=Math.min(window.innerWidth/1920,window.innerHeight/1080);er.style.transform=`translate(-50%, -50%) scale(${n})`,er.style.transformOrigin="center center",er.style.left="50%",er.style.top="50%"}window.addEventListener("resize",Gf);Gf();var dh=null,lv=Promise.all([fetch("/data/course.json").then(n=>n.json()),fetch("/data/park.json").then(n=>n.json()).catch(()=>null)]).then(([n,t])=>(dh={course:n,park:t},dh)),Da=gh({role:"tv",onStatus:n=>{xe("#conn").classList.toggle("hidden",n==="open"||n==="connecting")},onState:n=>cv(n),onMessage:n=>{n.t==="react"?gv(n.playerId,n.emoji):n.t==="refresh"?Zf(n.step,n.msg):n.t==="refreshDone"?_v(n.ok,n.msg):n.t==="error"&&hs(n.msg,"red")}}),On=n=>Da.send(n);function Qr(){if(!(Jr&&ie.ready())){Jr=!0,ie.unlock(),xe("#gesture").classList.add("gone");try{window.speechSynthesis?.getVoices()}catch{}Ua(),ve&&Xf(ve,!0)}}Jr&&xe("#gesture").classList.add("gone");xe("#gesture").addEventListener("click",Qr);window.addEventListener("pointerdown",()=>{ie.ready()||Qr()});function Ua(){let n=ve?.settings||{};ie.setVolume(n.volume??.8),ie.setMuted(Hi),ie.setMusicEnabled(n.music!==!1),Mi.setEnabled(!Hi&&n.voice!==!1&&ir<=1.5),Mi.setVolume(Math.min(1,(n.volume??.8)+.1)),xe("#btn-mute").textContent=Hi?"\u{1F507}":"\u{1F50A}"}xe("#btn-mute").addEventListener("click",n=>{n.stopPropagation(),Hi=!Hi,Ua()});xe("#btn-fs").addEventListener("click",n=>{n.stopPropagation(),Wf()});function Wf(){document.fullscreenElement?document.exitFullscreen?.():document.documentElement.requestFullscreen?.().catch(()=>{})}var zf;window.addEventListener("mousemove",()=>{document.body.classList.remove("hide-cursor"),clearTimeout(zf),zf=setTimeout(()=>document.body.classList.add("hide-cursor"),3e3)});window.addEventListener("keydown",n=>{if(n.target.closest?.("input, textarea"))return;if(!Jr){Qr();return}if(xv()){n.key==="Escape"?jr():n.key==="Enter"&&xe("#tvmodal [data-ok]")?.click();return}ie.ready()||ie.unlock();let t=n.key;if(t==="m"||t==="M"){Hi=!Hi,Ua(),hs(Hi?"Muted":"Sound on");return}if(t==="f"||t==="F"){Wf();return}if(t==="l"||t==="L"){ve?.phase==="BETTING"&&!ve.revealed&&(On({t:"forceLock"}),hs("Locking everyone in!"));return}(t===" "||t==="Enter"||t==="ArrowRight"||t==="n"||t==="N")&&(n.preventDefault(),ph())});function ph(){if(ve){if(ve.phase==="LOBBY"&&!ve.players.length){hs("Scan the QR code to join first!","red");return}if(ve.phase==="BETTING"&&!ve.revealed){hs("Waiting for everyone to lock in (press L to force it)");return}On({t:"advance",from:ve.phase,stage:ve.phase==="RESULTS"?ve.resultsStage:void 0})}}var Bf=new Map;function cv(n){let t=ve;ve=n,Ua();let e=new Map(n.players.map(s=>[s.id,s]));if(t)for(let s of n.players){let r=Bf.get(s.id);r?!r.locked&&s.locked&&n.phase==="BETTING"?(ie.play("lock"),Mi.say(mv(s.name),Math.random()<.5?"jeff":"pam",{priority:1})):r.connected&&!s.connected&&setTimeout(()=>{let o=ve?.players.find(a=>a.id===s.id);o&&!o.connected&&hs(`${s.name}'s phone dropped out \u2014 it'll reconnect`,"red")},5e3):(ie.play("join"),n.phase==="LOBBY"&&Mi.say(`${s.name} has entered the paddock!`,"pam",{priority:1}))}Bf=e;let i=hv(n);!nr||nr.key!==i?dv(i,n,t):nr.update?.(n,t),fv(n),uv(n),Xf(n)}function hv(n){let t=n.round?.roundId||"";return n.phase==="BETTING"?`BETTING|${t}|${n.revealed?"reveal":"bet"}`:["INTRO","RACE","RESULTS","SCOREBOARD"].includes(n.phase)?`${n.phase}|${t}`:`${n.phase}|${n.gameNumber}`}function dv(n,t,e){try{nr?.destroy?.()}catch(r){console.warn(r)}bi.innerHTML="",Mi.clear(),Yr.innerHTML="";let i=t.phase;document.body.className=document.body.className.replace(/\bphase-\w+/g,"").trim()+` phase-${i}`,document.body.classList.toggle("racing",i==="RACE"||i==="INTRO"&&!!Mn),si({type:"screen",key:n});let s={LOBBY:yv,INTRO:Mv,BETTING:t.revealed?Rv:Av,RACE:Cv,RESULTS:Iv,SCOREBOARD:Nv,FINALE:Ov}[i];nr=s?s(t,e):{},nr.key=n,i!=="RACE"&&i!=="RESULTS"&&i!=="INTRO"&&Zr()}var Hf=null;function Xf(n,t=!1){if(!Jr)return;let e={LOBBY:"lobby",BETTING:n.revealed?null:"betting",SCOREBOARD:"lobby",RESULTS:null,INTRO:null,RACE:null,FINALE:null}[n.phase];e===Hf&&!t||(Hf=e,e?ie.startMusic(e):ie.stopMusic(1.2))}function qf(n){let t=[...n].sort((i,s)=>s.bankroll-i.bankroll),e=new Map;return t.forEach((i,s)=>e.set(i.id,s>0&&i.bankroll===t[s-1].bankroll?e.get(t[s-1].id):s+1)),e}function fv(n){let t=["INTRO","BETTING","RACE"].includes(n.phase)&&!(n.phase==="BETTING"&&n.revealed);if(qr.classList.toggle("hidden",!t),document.body.classList.toggle("no-hud",!t),!t){qr.innerHTML="";return}let e=qf(n.players),i=n.phase==="RACE"?n.bets||{}:{};qr.innerHTML=n.players.map(s=>{let r="";s.connected?n.phase==="BETTING"&&(r=s.locked?'<span class="pp-status locked">\u{1F512} LOCKED IN</span>':'<span class="pp-status think">\u{1F914} Thinking\u2026</span>'):r='<span class="pp-status off">\u{1F4F5} Offline</span>';let o=(i[s.id]||[]).map(a=>cn(n.round,eo(a))).filter(Boolean).map(a=>`<i title="${zt(a.nickname)}" style="background:${zt(a.colour.primary)}"></i>`).join("");return`<div class="pp ${s.connected?"":"disconnected"}" data-pid="${s.id}">
      ${n.history?.length?Vi(e.get(s.id),"pp-ord"):""}
      ${pn(s.avatar,70)}
      <div><div class="pp-name">${zt(s.name)}</div><div class="pp-bank"><span class="coin"></span> ${hn(s.bankroll)}</div>${o?`<div class="pp-backs">${o}</div>`:""}</div>
      ${r}
    </div>`}).join("")}function uv(n){let t={INTRO:"Skip intros \u23ED",RACE:"Skip race \u23ED",RESULTS:"Next \u25B6",SCOREBOARD:n.roundNumber>=n.roundsPerGame?"Final results \u25B6":"Next round \u25B6",FINALE:"Play again \u21BB",BETTING:n.revealed?"Start race \u25B6":null}[n.phase];if(!t){Xr.innerHTML="";return}Xr.dataset.label!==t&&(Xr.dataset.label=t,Xr.innerHTML=`<button class="btn ${n.phase==="RACE"||n.phase==="INTRO"?"ghost small":"white"}">${t} <span style="opacity:.6;font-size:.7em">SPACE</span></button>`,Xr.firstElementChild.addEventListener("click",e=>{e.stopPropagation(),Qr(),ph()}))}function hs(n,t=""){let e=qe(`<div class="t panel ${t==="red"?"red":"yellow"} anim-pop">${zt(n)}</div>`),i=xe("#toast");i.innerHTML="",i.appendChild(e),setTimeout(()=>{e.parentNode&&e.remove()},3200)}function pv(n){ie.duck(!0);let t=qe(`<div class="sub"><span class="who ${n.speaker==="pam"?"pam":"jeff"}">${n.speaker==="pam"?"PAM":"JEFF"}</span><span>${zt(n.text)}</span></div>`);Yr.appendChild(t);let e=["RESULTS","SCOREBOARD","FINALE","LOBBY"].includes(ve?.phase)?1:2;for(;Yr.children.length>e;)Yr.firstElementChild.remove();let i=Math.max(3e3,n.text.split(/\s+/).length*420+1500);setTimeout(()=>{t.classList.add("out"),setTimeout(()=>t.remove(),450)},i),si({type:"line",text:n.text,speaker:n.speaker})}var ke=(n,t="jeff",e=2)=>Mi.say(n,t,{priority:e});function mv(n){let t=[`${n} has locked in. No take-backs!`,`And ${n}'s money is down!`,`${n} has committed. Bold. Possibly foolish.`,`Bets are in from ${n}!`];return t[Math.floor(Math.random()*t.length)]}function gv(n,t){let e=ve?.players.find(o=>o.id===n),i=qr.querySelector(`[data-pid="${n}"]`),s;if(i&&!qr.classList.contains("hidden")){let o=i.getBoundingClientRect(),a=er.getBoundingClientRect(),l=a.width/1920;s=(o.left+o.width/2-a.left)/l+(Math.random()-.5)*160}else s=1920*(((ve?.players.findIndex(a=>a.id===n)??0)+1)/((ve?.players.length||1)+1))+(Math.random()-.5)*220;let r=qe(`<div class="react" style="left:${Math.round(s-60)}px;--rot:${Math.round((Math.random()-.5)*40)}deg"><span class="e">${zt(t)}</span>${e?pn(e.avatar,46):""}</div>`);av.appendChild(r),ie.play("pop"),setTimeout(()=>r.remove(),3300)}function _n(n,t){return new Promise(e=>{let i=setTimeout(e,Nn(n));t?.timers.push(i)})}function Na(){return{cancelled:!1,timers:[]}}function Kr(n){n.cancelled=!0,n.timers.forEach(clearTimeout)}async function Zn(n,t,e=12e3){let i=Date.now();if(await _n(t,n),!(ir>1.5))for(;!n.cancelled&&Mi.busy&&Date.now()-i<e;)await new Promise(s=>setTimeout(s,150))}var _i=(n,t=120)=>Sh(n,{size:t,idSuffix:Math.random().toString(36).slice(2,6)});function Yf(){return`<div class="clouds">${[0,1,2,3,4].map(n=>`<div class="cloud" style="top:${40+n*70}px;width:${180+n%3*70}px;height:${50+n%2*18}px;animation-duration:${70+n*17}s;animation-delay:-${n*19}s"></div>`).join("")}</div>
  <svg class="hills" viewBox="0 0 1920 260" preserveAspectRatio="none"><path d="M0 150 Q 240 40 520 120 T 1040 110 T 1500 90 T 1920 130 V260 H0Z" fill="#2ec27e" stroke="#14183c" stroke-width="6"/><path d="M0 200 Q 300 140 640 190 T 1280 180 T 1920 190 V260 H0Z" fill="#169c5b" stroke="#14183c" stroke-width="6"/></svg>`}var ch=[100,250,500,1e3,2e3,5e3],hh=[0,60,90,120,180];function yv(n){let t=qe(`<div class="lobby">
    ${Yf()}
    <div class="logo"><div class="word outlined">MARK<span class="r">RUN</span></div><br><div class="ribbon"><span>THE FINSBURY PARK FORM GUIDE</span></div></div>
    <div class="tagline">Real parkruns. Real Mark. Fake money. \u{1F377}</div>
    <div class="qr-card panel white"><div class="qr"></div><div class="scan">\u{1F4F1} SCAN TO JOIN</div><div class="url"></div></div>
    <div class="slots"></div>
    <div class="settings panel cream"></div>
    <div class="start-wrap"></div>
  </div>`);bi.appendChild(t),xe(".qr",t).innerHTML=n.qrSvg||"",xe(".url",t).textContent=(n.joinUrl||"").replace(/^https?:\/\//,""),ke(n.players.length?"Welcome back to MARKRUN!":"Welcome to MARKRUN! Grab your phones and scan the code.","jeff",1);let e=(r,o,a,l)=>`<div class="set" data-k="${o}"><div class="lbl">${r}</div><div class="ctl-row">${l.replace("{val}",`<span class="val">${a}</span>`)}</div></div>`;function i(r){let o=[],a=Math.max(2,r.players.length);for(let y=0;y<a;y++){let u=r.players[y];if(u){let c=u.connected?u.ready?'<span class="tag" style="background:var(--grass);color:#fff">\u2713 READY</span>':'<span class="tag">joined</span>':'<span class="tag" style="background:var(--tomato);color:#fff">\u{1F4F5} offline</span>';o.push(`<div class="slot panel slant ${s.has(u.id)?"":"joined"}" style="background:${zt(u.avatar.colour)}"><div class="unslant" style="display:flex;align-items:center;gap:24px;width:100%">${pn(u.avatar,92)}<div><div class="sname">${zt(u.name)}${r.settings.runnerPlayerId===u.id?' <span class="tag markt">\u{1F3C3} THE REAL MARK</span>':""}</div><div class="ssub">${hn(u.bankroll)} to gamble${r.settings.runnerPlayerId&&r.settings.runnerPlayerId!==u.id?" \xB7 gets an extra \u{1F525} hot tip":""}</div></div><span class="slot-badge">${c}</span><button class="btn small white kick" data-kick="${u.id}" title="Remove player">\u2715</button></div></div>`)}else o.push(`<div class="slot panel slant empty"><div class="unslant" style="display:flex;align-items:center;gap:24px"><div class="ghost-av">?</div><div><div class="sname">Player ${y+1}</div><div class="ssub">Scan the code to take this seat</div></div></div></div>`)}s=new Set(r.players.map(y=>y.id)),xe(".slots",t).innerHTML=o.join(""),xe(".slots",t).classList.toggle("many",a>2);let l=r.settings,h=Math.round((l.volume??.8)*10);xe(".settings",t).innerHTML=[e("Starting pot","startingBankroll",hn(l.startingBankroll),'<button class="btn small white" data-d="-1">\u2212</button>{val}<button class="btn small white" data-d="1">+</button>'),e("Rounds","roundsPerGame",l.roundsPerGame,'<button class="btn small white" data-d="-1">\u2212</button>{val}<button class="btn small white" data-d="1">+</button>'),e("Bet timer","betTimer",l.betTimer?`${l.betTimer}s`:"Off",'<button class="btn small white" data-d="-1">\u2212</button>{val}<button class="btn small white" data-d="1">+</button>'),e("Drinking","drinkingMode","",`<button class="btn small toggle ${l.drinkingMode?"on":"off"}" data-toggle>${l.drinkingMode?"\u{1F37A} ON":"OFF"}</button>`),e("Voice","voice","",`<button class="btn small toggle ${l.voice?"on":"off"}" data-toggle>${l.voice?"\u{1F399}\uFE0F ON":"OFF"}</button>`),e("Music","music","",`<button class="btn small toggle ${l.music?"on":"off"}" data-toggle>${l.music?"\u{1F3B5} ON":"OFF"}</button>`),e("Volume","volume",`${h*10}%`,'<button class="btn small white" data-d="-1">\u2212</button>{val}<button class="btn small white" data-d="1">+</button>')].join("");let d=r.players.length&&r.players.every(y=>y.ready);xe(".start-wrap",t).innerHTML=`<button class="btn green ${r.players.length?"pulse":""}" data-start ${r.players.length?"":"disabled"}>${r.players.length?r.players.length===1?"START SOLO \u25B6":"LET'S RACE \u25B6":"Waiting for players\u2026"}</button>
      <div class="hint">${r.refreshing?"\u23F3 Refreshing historical data\u2026":r.players.length?d?"Everyone is ready!":"Press SPACE \u2014 or everyone taps READY on their phone":"Up to 4 players \xB7 best with 2"}</div>
      <button class="btn small white refresh-btn" data-refresh ${r.refreshing?"disabled":""}>\u27F3 Refresh Historical Data</button>`}let s=new Set(n.players.map(r=>r.id));return i(n),t.addEventListener("click",r=>{Qr();let o=r.target.closest("button");if(!o)return;if(ie.play("tick"),o.dataset.start!==void 0)return ph();if(o.dataset.refresh!==void 0)return vv();if(o.dataset.kick)return On({t:"kick",playerId:o.dataset.kick});let a=o.closest("[data-k]")?.dataset.k;if(!a)return;let l=ve.settings;if(o.dataset.toggle!==void 0)return On({t:"settings",settings:{[a]:!l[a]}});let h=Number(o.dataset.d),d;if(a==="startingBankroll"){let y=ch.indexOf(l[a]);d=ch[Math.max(0,Math.min(ch.length-1,(y<0?2:y)+h))]}else if(a==="betTimer"){let y=hh.indexOf(l[a]);d=hh[Math.max(0,Math.min(hh.length-1,(y<0?0:y)+h))]}else a==="volume"?d=Math.round(Math.max(0,Math.min(1,(l.volume??.8)+h*.1))*10)/10:d=l[a]+h;On({t:"settings",settings:{[a]:d}})}),{update:r=>i(r)}}var xv=()=>!!xe("#tvmodal");function jr(){xe("#tvmodal")?.remove()}function fh(n){jr();let t=qe(`<div id="tvmodal"><div class="tvm panel white anim-pop">${n}</div></div>`);return er.appendChild(t),t.addEventListener("click",e=>{e.target===t&&jr()}),t}function vv(){if(ve?.phase!=="LOBBY")return;let n=fh(`<h2 class="outlined white thin">\u27F3 Refresh Historical Data</h2>
    <p><b>This uses the internet.</b> It contacts parkrun, Strava (if set up) and the weather archive to fetch any new runs since the last refresh, then rebuilds the local database.</p>
    <p>It can take a few minutes. The game itself never goes online \u2014 this is the only button that does.</p>
    <div class="row"><button class="btn white" data-cancel>Cancel <small>ESC</small></button><button class="btn green" data-ok>Refresh now <small>ENTER</small></button></div>`);xe("[data-cancel]",n).onclick=jr,xe("[data-ok]",n).onclick=()=>{On({t:"refresh"}),fh('<h2 class="outlined white thin">\u27F3 Refreshing\u2026</h2><div class="rlog"></div><div class="row"><button class="btn white" data-cancel disabled>Working\u2026</button></div>')}}function Zf(n,t){let e=xe("#tvmodal .rlog");for(e||(fh('<h2 class="outlined white thin">\u27F3 Refreshing\u2026</h2><div class="rlog"></div><div class="row"><button class="btn white" data-cancel disabled>Working\u2026</button></div>'),e=xe("#tvmodal .rlog")),e.appendChild(qe(`<div class="rl"><b>${zt(n)}</b> ${zt(t)}</div>`));e.children.length>9;)e.firstElementChild.remove()}function _v(n,t){t&&Zf("error",t);let e=xe("#tvmodal [data-cancel]");e&&(e.disabled=!1,e.textContent=n?"Done \u2713":"Close",e.onclick=jr),hs(n?"Historical data refreshed!":"Refresh had problems \u2014 existing data kept",n?"":"red")}var Mn=null,cs=null;function Zr(){if(Mn){try{Mn.dispose()}catch(n){console.warn(n)}Mn=null,cs=null,La.innerHTML="",document.body.classList.remove("racing")}}async function Jf(n,{allow2d:t=!0}={}){Zr();let e=dh||await lv,i={course:e.course,park:e.park,speed:ir,...n};if(ls?.createRaceView&&!uh)try{return Mn=await ls.createRaceView(La,i),cs="3d",window.__markrun.raceView=Mn,si({type:"raceview",kind:"3d"}),Mn}catch(s){console.error("3D race view failed, using 2D fallback",s),si({type:"raceview-error",msg:String(s?.message||s)}),La.innerHTML=""}return!t||!n.plan?null:(Mn=Ah(La,i),cs="2d",window.__markrun.raceView=Mn,si({type:"raceview",kind:"2d"}),Mn)}function $f(n){(n.introLines?.length?n.introLines:[{speaker:"jeff",text:`Welcome to Finsbury Park for round ${n.number}: ${n.title}!`}]).slice(0,2).forEach(e=>ke(e.text,e.speaker,3))}function Mv(n){let t=Na(),e=n.round,i=[...e.runners].sort((y,u)=>y.lane-u.lane),s=qe(`<div class="intro">${Yf()}<div class="tint"></div><div class="stagebox"></div><div class="intro-dots">${i.map(()=>"<i></i>").join("")}</div></div>`);bi.appendChild(s);let r=xe(".stagebox",s),o=(n.bailouts||[]).map(y=>`${zt(n.players.find(u=>u.id===y.playerId)?.name||"")} got a ${hn(y.amount)} bailout from the Bank of Mum &amp; Dad`).join("<br>"),a=`<div class="title-card"><div class="anim-pop"><div class="rn outlined white">ROUND ${e.number} <span style="opacity:.8">of ${n.roundsPerGame}</span></div><div class="rt outlined" style="font-size:${e.title.length>22?104:150}px">${zt(e.title)}</div><div class="rs">${i.length} runners. All of them Mark. Only one of them is having a good day.</div>${e.theme?.label?`<div class="theme-badge panel slant grape"><div class="unslant"><span class="tk">THEME</span>${zt(e.theme.label)}</div></div>${e.theme.blurb?`<div class="tblurb">${zt(e.theme.blurb)}</div>`:""}`:""}${Number(e.payoutMultiplier)>=2?'<div class="double-badge outlined">DOUBLE PAYOUT FINALE \xD72</div>':""}${e.notice?`<div class="bail panel grape" style="color:#fff">\u{1F0CF} ${zt(e.notice)}</div><br>`:""}${o?`<div class="bail panel yellow">\u{1F4B8} ${o}</div>`:""}</div></div>`,l=y=>`<div class="rcard-wrap anim-left"><div class="rcard panel slant" style="background:${zt(y.colour.primary)}"><div class="rp">${_i(y,300)}</div><div class="unslant">
        <div class="nick outlined">${zt(y.nickname)}</div>
        <div class="tagl">${zt(y.tagline||"")}</div>
        ${y.intro?`<div class="introline">\u201C${zt(y.intro)}\u201D</div>`:""}
        ${y.publicClue?`<div class="clue"><span class="k">CLUE</span><span>${za(y.publicClue)}</span></div>`:""}
      </div><div class="lane">LANE ${y.lane}</div><div class="odds-badge"><div class="ol">ODDS</div><div class="ov outlined">${zt(y.odds?.display||"")}</div></div></div></div>`;async function h(y){let u=i[y];oi(".intro-dots i",s).forEach((c,f)=>c.classList.toggle("on",f===y)),r.innerHTML=l(u),ie.play("whoosh"),ke(u.intro||`${u.nickname}. ${u.tagline||""}`,y%2?"pam":"jeff",3),await Zn(t,4800,12e3)}async function d(){t.cancelled||(oi(".intro-dots i",s).forEach(y=>y.classList.remove("on")),r.innerHTML='<div class="bets-open"><div class="anim-pop"><div class="big outlined">BETS ARE OPEN!</div><div class="sub2 outlined white thin">\u{1F4F1} Grab your phones \u2014 your secret clues are waiting \u{1F92B}</div></div></div>',ie.play("kaching"),ke("The book is open! Check your phones for your secret clues.","pam",3),await Zn(t,3200,6e3),t.cancelled||On({t:"introDone",roundId:e.roundId}))}return(async()=>{if(!uh&&ls?.createRaceView){let y=new Map(i.map((c,f)=>[c.id,f])),u=await Jf({round:e,plan:Ff(e),backedBy:{},introCards:!1,onIntroRunner:c=>t.cancelled?void 0:h(y.get(c)??0)},{allow2d:!1}).catch(()=>null);if(u&&!t.cancelled){document.body.classList.add("racing"),s.classList.add("over3d"),s.querySelector(".clouds")?.remove(),s.querySelector(".hills")?.remove(),r.innerHTML=a,ie.play("fanfare"),$f(e);let c=!1,f=setTimeout(()=>{c||(c=!0,d())},Nn(15e4));t.timers.push(f);try{u.playIntro(()=>{c||(c=!0,clearTimeout(f),d())})}catch(M){console.error(M),c=!0,d()}return}}if(!t.cancelled){r.innerHTML=a,ie.play("fanfare"),$f(e),await Zn(t,4200,14e3);for(let y=0;y<i.length&&!t.cancelled;y++)await h(y),t.cancelled||await _n(700,t);await d()}})(),{destroy:()=>{Kr(t)}}}function bv(n,t=[]){return`<div class="rc panel" data-rid="${n.id}">
    <div class="top stripe" style="--c1:${zt(n.colour.primary)};--c2:${zt(Sv(n.colour.primary))}"><div class="lane">${n.lane}</div><div class="rp">${_i(n,170)}</div></div>
    <div class="odds"><span class="num">${zt(n.odds?.display||"")}</span>${n.odds?.decimalText?`<small>pays \xD7${zt(n.odds.decimalText)}</small>`:""}</div>
    <div class="nick">${zt(n.nickname)}</div>
    <div class="tagl">${zt(n.tagline||"")}</div>
    <div class="clue"><span class="k">${zt((n.publicClue?.label||"Public clue").toUpperCase())} \xB7 PUBLIC CLUE</span>${za(n.publicClue)}</div>
    ${t.length?`<div class="backers">${t.join("")}</div>`:""}
  </div>`}function Sv(n){let t=parseInt(String(n).replace("#",""),16),e=i=>Math.round(i+(255-i)*.25);return`#${[t>>16&255,t>>8&255,t&255].map(i=>e(i).toString(16).padStart(2,"0")).join("")}`}function wv(n){return(n.matchups||[]).map(t=>{let e=cn(n,t.a),i=cn(n,t.b);return!e||!i?"":`<div class="mu panel slant dark"><div class="unslant" style="display:flex;align-items:center;gap:18px"><span class="lbl">HEAD-TO-HEAD</span>
      <span class="side"><i class="dot" style="background:${zt(e.colour.primary)}"></i>${zt(fs(e))} <span class="od">${zt(t.odds.displayA||`\xD7${t.odds.a}`)}</span></span>
      <span class="vs">VS</span>
      <span class="side"><i class="dot" style="background:${zt(i.colour.primary)}"></i>${zt(fs(i))} <span class="od">${zt(t.odds.displayB||`\xD7${t.odds.b}`)}</span></span></div></div>`}).join("")}function Ev(n){let t=n?.theme,e=Number(n?.payoutMultiplier)>=2;return`${t?.label?`<div class="theme-badge panel slant grape"><div class="unslant"><span class="tk">THEME</span>${zt(t.label)}</div></div>`:""}${e?'<div class="double-badge outlined">DOUBLE PAYOUT FINALE \xD72</div>':""}`}function Tv(n){return(n.props||[]).map(t=>`<div class="mu prop panel slant"><div class="unslant" style="display:flex;align-items:center;gap:16px"><span class="lbl">\u{1F3A1} SIDE BET</span><span class="ptxt">${zt(t.text)}</span>
    <span class="od yes">YES ${zt(t.odds?.displayYes||`\xD7${t.odds?.yes}`)}</span><span class="od no">NO ${zt(t.odds?.displayNo||`\xD7${t.odds?.no}`)}</span></div></div>`).join("")}function Av(n){let t=n.round,e=[...t.runners].sort((d,y)=>d.lane-y.lane),i=qe(`<div class="betting">
    <div class="bet-head"><div class="h outlined">PLACE YOUR BETS!</div><div class="rt">Round ${t.number}/${n.roundsPerGame} \xB7 ${zt(t.title)}</div>${Ev(t)}<div class="timer num hidden"></div></div>
    <div class="runner-grid n${e.length}">${e.map(d=>bv(d)).join("")}</div>
    <div class="matchups">${wv(t)}</div>
    <div class="props-row">${Tv(t)}</div>
    ${t.notice?`<div class="notice panel grape">\u{1F0CF} ${zt(t.notice)}</div>`:""}
  </div>`);bi.appendChild(i),oi(".rc",i).forEach((d,y)=>{d.style.animation=`slide-up .5s ${y*.08}s cubic-bezier(.2,1.3,.4,1) both`});let s=xe(".timer",i),r=null;function o(){if(!ve?.deadline||ve.phase!=="BETTING"||ve.revealed){s.classList.add("hidden");return}let d=Math.max(0,Math.ceil((ve.deadline-Da.serverNow())/1e3));s.classList.remove("hidden"),s.textContent=`${Math.floor(d/60)}:${String(d%60).padStart(2,"0")}`,d<=10&&d!==r&&ie.play("tick"),r=d}let a=setInterval(o,250);o();let l=[["jeff","Each of you has one red-hot insider tip on your phone. Find it. Use it."],["pam","Every one of these runners is Mark. The question is: which Mark turned up?"],["jeff","Head-to-heads are a lovely way to lose money slowly."]];Number(t.payoutMultiplier)>=2?ke("Final round, and every payout is doubled! Fortunes will be made. Mostly lost.","jeff",3):t.theme?.label&&ke(`Today's theme: ${t.theme.label}. ${t.theme.blurb||""}`,"pam",2);let h=setTimeout(()=>{let d=l[Math.floor(Math.random()*l.length)];ke(d[1],d[0],1)},Nn(12e3));return{destroy:()=>{clearInterval(a),clearTimeout(h)}}}function Rv(n){let t=Na(),e=n.round,i=(n.revealSeq||[]).filter(a=>a&&a.bet);if(!i.length){let a=(n.betLines||[]).slice();i=n.players.flatMap(l=>(n.bets?.[l.id]||[]).map(h=>({playerId:l.id,bet:h}))).sort((l,h)=>l.bet.stake-h.bet.stake).map(l=>({...l,line:a.shift()||null}))}let s=qe(`<div class="reveal">
    <div class="rh outlined">THE BETS ARE IN!</div>
    <div class="spot"></div>
    <div class="tally">${n.players.map(a=>`<div class="tcol panel slant" data-pid="${a.id}" style="background:${zt(a.avatar.colour)}"><div class="unslant"><div class="who">${pn(a.avatar,64)}<span>${zt(a.name)}</span><span class="tot num" data-tot>0pp</span></div><div class="chips"></div></div></div>`).join("")}</div>
  </div>`);bi.appendChild(s);let r=xe(".spot",s),o={};return(async()=>{ie.play("drumroll",{dur:1.6/ir+.2}),ke(i.length?"Right then. Let's see the damage, smallest first.":"Nobody has bet a penny. Cowards, the lot of them.","jeff",3),await _n(1800,t);for(let a=0;a<i.length&&!t.cancelled;a++){let{playerId:l,bet:h,line:d}=i[a],y=n.players.find(p=>p.id===l),u=cn(e,eo(h)),c=_h(e,h),f=h.type==="win"?u?.odds?.display||"":h.type==="h2h"?(()=>{let p=e.matchups?.find(S=>S.id===h.matchupId);return(h.pick===p?.a?p?.odds?.displayA:p?.odds?.displayB)||`\xD7${c}`})():h.type==="prop"?(()=>{let p=e.props?.find(S=>S.id===h.propId);return(h.pick==="yes"?p?.odds?.displayYes:p?.odds?.displayNo)||`\xD7${c}`})():`\xD7${c}`,M=a===i.length-1&&i.length>1;r.innerHTML=`<div class="spotcard"><div class="anim-pop"><div class="sc panel ${M?"yellow":"white"}">
        <div class="scp">${pn(y?.avatar,110)}<div class="scn">${zt(y?.name||"")}</div></div>
        <div class="scr">${u?_i(u,150):'<span class="propicon big">\u{1F3A1}</span>'}</div>
        <div class="scb"><div class="sck">${Mh(h)}${M?" \xB7 THE BIG ONE":""}</div><div class="scl">${zt(to(e,h))}</div><div class="sco">${zt(f)} \xB7 pays ${hn(h.stake*c)}</div></div>
        <div class="scs num">${hn(h.stake)}</div></div></div></div>`,ie.play(M?"kaching":"pop"),d?.text&&ke(d.text,d.speaker||(a%2?"pam":"jeff"),3),o[l]=(o[l]||0)+h.stake;let g=s.querySelector(`.tcol[data-pid="${l}"]`);g&&(g.querySelector(".chips").appendChild(qe(`<div class="tchip anim-pop">${u?`<i style="background:${zt(u.colour.primary)}"></i>`:"\u{1F3A1} "}<span>${zt(h.type==="prop"?"Side bet":fs(u))}</span><b>${hn(h.stake)}</b></div>`)),g.querySelector("[data-tot]").textContent=hn(o[l])),await Zn(t,2600,9e3)}if(!t.cancelled){if(!(n.revealSeq||[]).length){let a=n.players.map(h=>new Set((n.bets?.[h.id]||[]).filter(d=>d.type==="win").map(d=>d.runnerId))),l=null;if(a.length>=2)for(let h of a[0])a.slice(1).every(d=>d.has(h))&&(l=cn(e,h));l&&(r.innerHTML=`<div class="spotcard"><div class="same panel yellow anim-pop">Great minds\u2026 both backing ${zt(l.nickname)}! \u{1F91D}</div></div>`,ke(`They've both gone for ${l.nickname}. Either genius, or a shared delusion.`,"pam",3),await Zn(t,2200,7e3))}if(!t.cancelled){for(let a of ls?.createRaceView&&!uh?[]:["3","2","1"]){if(t.cancelled)return;let l=qe(`<div class="countdown outlined anim-pop">${a}</div>`);s.appendChild(l),ie.play("beep"),await _n(800,t),l.remove()}t.cancelled||On({t:"revealDone",roundId:e.roundId})}}})(),{destroy:()=>Kr(t)}}function Vf(n){let t=n.market,e=n.round;if(!t)return'<div class="mk-wait outlined white thin">Opening the market\u2026</div>';let i=new Set(n.players.filter(r=>(n.bets?.[r.id]||[]).some(o=>o.type==="inplay")).map(r=>r.id));return`<div class="mk panel white"><div class="mkh"><span class="outlined">HALFWAY MARKET</span><span class="mkt num" data-mkt></span></div>
    <div class="mks">One bet each, on your phone. Prices from the standings right now.</div>
    <div class="mkrows">${(t.standings||[]).map(r=>{let o=cn(e,r.runnerId),a=t.odds?.[r.runnerId];return`<div class="mkrow">${Vi(r.place)}<span class="rp">${o?_i(o,64):""}</span><span class="nm">${zt(o?.nickname||r.runnerId)}</span><span class="gp">${r.place===1?"LEADS":`+${Number(r.gapS).toFixed(1)}s`}</span><span class="od num">${zt(a?.display||"")}</span></div>`}).join("")}</div>
    <div class="mkp">${n.players.map(r=>`<span class="mkpl ${i.has(r.id)?"in":""}">${pn(r.avatar,44)}${zt(r.name)} ${i.has(r.id)?"\u2713 IN":"\u2026"}</span>`).join("")}</div></div>`}function Cv(n){let t=Na(),e=n.round,i=qe(`<div class="race-ov"><div class="live panel slant red"><div class="unslant" style="display:flex;gap:14px;align-items:center"><span class="dot"></span>LIVE \xB7 ${zt(e.title)}</div></div><div class="market-layer"></div></div>`);bi.appendChild(i),document.body.classList.add("racing");let s=xe(".market-layer",i),r=0,o=0,a="idle",l=null,h=null,d=null;async function y(u){a="waiting";try{u.setPaused(!0)}catch{}if(ie.play("bell"),ie.play("crowd",{dur:2,peak:.2}),ke("Halfway! The market is open. One bet each \u2014 quick!","jeff",3),On({t:"marketOpen",roundId:e.roundId}),s.innerHTML=Vf(ve),d=setInterval(()=>{let c=s.querySelector("[data-mkt]");c&&ve?.market?.closesAt&&(c.textContent=`${Math.max(0,Math.ceil((ve.market.closesAt-Da.serverNow())/1e3))}s`)},200),await new Promise(c=>{l=c,setTimeout(c,2e4),t.timers.push(setTimeout(()=>{ve?.market||c()},3500))}),clearInterval(d),a="done",s.innerHTML="",!t.cancelled){ke("Market closed! Back to the action!","pam",2);try{u.setPaused(!1)}catch{}}}return(async()=>{let u=await Jf({round:e,plan:n.racePlan,backedBy:n.backedBy||{}});if(!t.cancelled){if(!u){i.appendChild(qe('<div class="race-err panel red">Race view failed to load</div>'));return}document.body.classList.add("racing"),cs==="3d"&&i.querySelector(".live")?.remove(),cs!=="3d"?(ie.play("horn"),setTimeout(()=>ie.play("crowd",{dur:3,peak:.25}),300),ke("And they're off!","jeff",3)):ie.play("crowd",{dur:4,peak:.2}),si({type:"race-start",kind:cs}),h=setInterval(()=>{let c=u.broadcastTime;Number.isFinite(c)&&c>=0&&On({t:"raceTime",roundId:e.roundId,b:c})},1e3),u.playRace(c=>{if(!(t.cancelled||!c)){if(si({type:"race-event",e:c.type||"line",text:c.text}),c.kind==="countdown"){ie.play(c.n===0?"go":"beep"),c.n===0&&(ie.play("horn"),ie.play("crowd",{dur:3,peak:.28}));return}if(c.kind==="photo_finish"){ie.play("stamp"),ke("It's a photo finish! Hold your breath!","pam",3);return}if(c.text&&(c.kind==="commentary"||!c.type)){a!=="waiting"&&Mi.say(c.text,c.speaker||"jeff",{priority:c.priority||2});return}switch(c.type){case"overtake":Date.now()-r>1500&&(r=Date.now(),ie.play("whoosh"));break;case"lead_change":ie.play("whoosh"),ie.play("crowd",{dur:2,peak:.18});break;case"breakaway":ie.play("crowd",{dur:2.5,peak:.2});break;case"lap":a==="idle"&&ve?.marketAvailable?(si({type:"market"}),y(u)):ie.play("bell");break;case"final_stretch":ie.play("crowd",{dur:6,peak:.4});break;case"finish":o++,o===1&&(ie.play("fanfare"),ie.play("crowd",{dur:4,peak:.45}));break;default:break}}},async()=>{t.cancelled||(si({type:"race-done"}),await _n(2500,t),t.cancelled||On({t:"raceDone",roundId:e.roundId}))})}})(),{update(u){if(a==="waiting"){if(u.market&&!u.market.open){l?.();return}s.innerHTML=Vf(u)}},destroy:()=>{Kr(t),clearInterval(h),clearInterval(d),l?.()}}}function Iv(n){let t=null,e=-1,i=qe('<div class="results"></div>');bi.appendChild(i);let s=n.round,r=n.results;function o(g,p){return p.players.filter(S=>(p.bets?.[S.id]||[]).some(v=>eo(v)===g)).map(S=>pn(S.avatar,50))}let a=(g,p="")=>`<div class="res-head"><div class="h outlined">${g}</div>${p?`<div class="sh">${p}</div>`:""}</div>`,l=g=>{t.cancelled||On({t:"stageDone",stage:g})};async function h(g){let p=t,S=r.finishOrder.map(L=>{let A=cn(s,L.runnerId);return`<div class="orow panel slant ${L.place===1?"first":""}" style="${L.place===1?"":`background:${zt(A?.colour?.primary||"#2a62e0")}`}"><div class="unslant" style="display:flex;align-items:center;gap:26px;width:100%">
        ${Vi(L.place)}<div class="rp">${A?_i(A,112):""}</div>
        <div class="nm ${L.place===1?"":"outlined white thin"}">${zt(A?.nickname||L.runnerId)}${r.favouriteId===L.runnerId?' <span class="fav">FAV</span>':""}<small>${zt(A?.tagline||"")}</small></div>
        <div class="bk">${o(L.runnerId,g).join("")}</div>
        <div class="tm"><span class="num">${zt(L.timeText||vh(L.officialS))}</span>${L.place>1&&L.gapS!=null?`<span class="gap">+${Math.round(L.gapS)}s</span>`:""}</div></div></div>`});i.innerHTML=a("THE RESULT","Official times, as recorded by the volunteers \u{1F4CB}")+`<div class="order">${S.join("")}</div>`;let v=oi(".orow",i);for(let L=v.length-1;L>=0;L--){if(p.cancelled)return;v[L].classList.add("show"),L===0?(ie.play("fanfare"),ar(document.body,{count:90})):ie.play("pop"),await _n(L===1?1600:800,p)}(r.commentary||[]).slice(0,2).forEach(L=>ke(L.text,L.speaker,3)),await Zn(p,5500,14e3),l(0)}async function d(){let g=t,p=r.finishOrder.map(_=>_.runnerId),S=new Map((r.reveal||[]).map(_=>[_.runnerId,_]));i.innerHTML=a("WHO WERE THEY REALLY?","Every runner was a real Mark, on a real Saturday \u{1F575}\uFE0F \u2014 details on your phones")+`<div class="reveal-grid">${p.map((_,L)=>{let A=cn(s,_),w=S.get(_)||{},R=r.finishOrder[L];return`<div class="rv" data-i="${L}">
        <div class="face front" style="background:${zt(A?.colour?.primary)}"><div><div class="rp">${A?_i(A,220):""}</div><div class="q outlined">?</div></div></div>
        <div class="face back"><div class="bh" style="background:${zt(A?.colour?.primary)}"><div class="rp">${A?_i(A,74):""}</div><div class="n">${zt(A?.nickname||_)}</div></div>
          <div class="date">${zt(w.dateText||w.date||w.headline||"")}</div>
          <div class="time num">${zt(R?.timeText||"")}</div>
          ${w.stravaTitle?`<div class="strava"><span class="k">STRAVA TITLE</span>\u201C${zt(w.stravaTitle)}\u201D</div>`:""}
          ${w.wasPB||w.pbKind?`<div class="pb">${w.pbKind==="finsbury"?"COURSE PB!":"PB! \u{1F3C5}"}</div>`:""}
          <div class="place">${Vi(R?.place||L+1)}</div>
        </div></div>`}).join("")}</div>`;let v=oi(".rv",i);await _n(900,g);for(let _=v.length-1;_>=0;_--){if(g.cancelled)return;v[_].classList.add("flip");let L=S.get(p[_]),A=cn(s,p[_]);ie.play(_===0?"fanfare":"reveal"),(_===0||_===v.length-1)&&ke(`${_===0?"The winner":"And in last place"}, ${A?.nickname}: ${L?.headline||L?.dateText||""}`,_===0?"jeff":"pam",2),await _n(_===0?3200:2600,g)}await Zn(g,6e3,12e3),l(1)}async function y(g){let p=t,S=r.clueReview||[],v=S.filter(A=>A.highlight).slice(0,3);if(v.length||(v=S.filter(A=>A.verdict!=="neutral").slice(0,3)),!v.length){i.innerHTML="",await _n(300,p),l(2);return}let _=new Map((g.clues||[]).map(A=>[A.id,A]));i.innerHTML=a("THE CLUES THAT MATTERED","Useful\u2026 or a red herring? \u{1F41F}")+`<div class="clue-list big">${v.map(A=>{let w=cn(s,A.runnerId),R=_.get(A.clueId),x=g.players.find(E=>E.id===A.owner),m=A.owner==="public"?`\u{1F4FA} PUBLIC CLUE${R?.label?` \xB7 ${zt(R.label.toUpperCase())}`:""}`:`${R?.tier==="hot"?"\u{1F525}":"\u{1F92B}"} ${zt(x?.name||"Secret")}'S ${R?.tier==="hot"?"HOT TIP":"SECRET CLUE"}`,b={useful:"USEFUL \u2713",red_herring:"RED HERRING \u{1F41F}",neutral:"MEH"}[A.verdict]||zt(A.verdict);return`<div class="cl panel"><div class="rp">${w?_i(w,100):""}</div><div class="txt"><div class="own">${m} \xB7 ${zt(w?.nickname||"")}</div>${zt(A.text||R?.text||"")}${A.quip?`<div class="quip">${zt(A.quip)}</div>`:""}</div><div class="verdict ${zt(A.verdict)}">${b}</div></div>`}).join("")}</div>`;let L=oi(".cl",i);for(let A=0;A<L.length;A++){if(p.cancelled)return;L[A].classList.add("show"),setTimeout(()=>{ie.play("sting"),ie.play("stamp")},Nn(250)),v[A].quip&&ke(v[A].quip,A%2?"jeff":"pam",2),await Zn(p,2800,8e3)}await Zn(p,3500,9e3),l(2)}async function u(g){let p=t,S=g.settings.drinkingMode;i.innerHTML=a("PAY DAY","The bookie settles up \u{1F4B0}")+`<div class="payouts">${g.players.map(A=>{let w=r.payouts?.[A.id]||{bets:[],net:0,bankroll:A.bankroll},R=(w.bets||[]).map(x=>`<div class="pl ${x.won?"won":"lost"}"><span class="mark">${x.won?"\u2705":"\u274C"}</span><div class="lb">${zt(to(s,x))}<small>staked ${hn(x.stake)}</small></div><div class="r">${x.won?`+${hn(x.returned)}`:`\u2212${hn(x.stake)}`}</div></div>`).join("")||'<div class="pl show"><div class="lb">No bets placed. Sensible. Boring.</div></div>';return`<div class="pay panel slant" data-pid="${A.id}" style="background:${zt(A.avatar.colour)}"><div class="unslant" style="display:flex;flex-direction:column;height:100%">
        <div class="who">${pn(A.avatar,90)}${zt(A.name)}</div>
        <div class="lines">${R}</div>
        <div class="net num" data-net="${w.net}">${or(0)}</div>
        <div class="bank">Bankroll: <span data-bank>${hn(w.bankroll-w.net)}</span></div>
        ${S?c(w.net,A.id):""}
      </div></div>`}).join("")}</div>`,await _n(600,p);for(let A of oi(".pl",i)){if(p.cancelled)return;A.classList.add("show"),ie.play(A.classList.contains("won")?"kaching":"pop"),await _n(700,p)}await _n(400,p);let v=null,_=null;for(let A of g.players){let w=r.payouts?.[A.id];if(!w)continue;let R=i.querySelector(`.pay[data-pid="${A.id}"]`),x=R.querySelector(".net"),m=R.querySelector("[data-bank]");x.classList.add(w.net>0?"green":w.net<0?"red":"white"),x.classList.add("outlined"),Fa(x,0,w.net,Nn(1800),b=>or(b)),Fa(m,w.bankroll-w.net,w.bankroll,Nn(1800),b=>hn(b)),(!v||w.net>v.net)&&(v={...w,p:A,panel:R}),(!_||w.net<_.net)&&(_={...w,p:A,panel:R})}if(await _n(1900,p),p.cancelled)return;let L=g.settings.drinkingMode?(r.drinks||[]).filter(A=>!A.playerId):[];L.length&&i.appendChild(qe(`<div class="drink-all panel yellow anim-pop">\u{1F37B} ${L.map(A=>zt(A.text)).join(" \xB7 ")}</div>`)),v&&v.net>0&&(ie.play("kaching"),ar(document.body,{count:140}),v.panel.classList.add("big-win"),v.panel.appendChild(qe('<div class="mood">\u{1F911}</div>')),ke(Pv(v.p.name,v.net),"jeff",3)),_&&_.net<0&&(setTimeout(()=>ie.play("sadtrombone"),Nn(900)),_.panel.classList.add("big-loss"),_.panel.appendChild(qe('<div class="raincloud">\u{1F327}\uFE0F</div>')),ke(Lv(_.p.name,_.net),"pam",3)),!v?.net&&!_?.net&&ke("Nobody won, nobody lost. The bookie is furious.","pam",2),await Zn(p,7e3,14e3),l(3)}function c(g,p){if(Array.isArray(r.drinks))return r.drinks.filter(v=>v.playerId===p).map(v=>`<div class="drink panel yellow">\u{1F37A} ${zt(v.text)}</div>`).join("");if(g<0){let S=Math.min(5,Math.max(1,Math.ceil(-g/100)));return`<div class="drink panel yellow">\u{1F37A} Take ${S} sip${S>1?"s":""}!</div>`}if(g>0){let S=Math.min(5,Math.max(1,Math.ceil(g/150)));return`<div class="drink panel yellow">\u{1F449} Hand out ${S} sip${S>1?"s":""}</div>`}return'<div class="drink panel yellow">\u{1F964} Water break</div>'}async function f(g){let p=t,S=r.awards||[];if(!S.length&&!r.archetype?.label){await _n(200,p),l(4);return}i.innerHTML=a("ROUND AWARDS","\u{1F3C6}")+`<div class="awards">${r.archetype?.label?`<div class="arch panel yellow anim-pop"><div class="al display">${zt(r.archetype.label)}</div><div class="ab">${zt(r.archetype.blurb||"")}</div></div>`:""}${S.map(v=>{let _=g.players.find(L=>L.id===v.playerId);return`<div class="award panel slant ${_?"":"yellow"}" style="${_?`background:${zt(_.avatar.colour)}`:""}"><div class="unslant" style="display:flex;align-items:center;gap:28px"><span class="trophy">\u{1F3C6}</span>${_?pn(_.avatar,84):""}<div><div class="at outlined white thin">${zt(v.title)}</div><div class="ax" style="color:${_?"#fff":"var(--ink)"}">${zt(v.text||"")}</div></div></div></div>`}).join("")}</div>`;for(let v of oi(".award",i)){if(p.cancelled)return;v.classList.add("show"),ie.play("fanfare"),await _n(1500,p)}S[0]&&ke(`${S[0].title}! ${S[0].text||""}`,"jeff",2),await Zn(p,6500,12e3),l(4)}function M(g){if(g.resultsStage===e)return;t&&Kr(t),t=Na(),e=g.resultsStage,Mi.clear(),Yr.innerHTML="";let p=g.resultStages[g.resultsStage];if(si({type:"results-stage",stage:p}),p!=="order"&&Mn&&Zr(),p==="order"&&Mn&&cs==="3d")try{Mn.showPodium?.(r)}catch(S){console.warn(S)}else Mn&&p==="order"&&Zr();document.body.classList.toggle("racing",!!Mn),({order:h,reveal:d,clues:y,payouts:u,awards:f}[p]||(async()=>l(g.resultsStage)))(g).catch(S=>console.error(S))}return r&&M(n),{update:g=>{g.results&&M(g)},destroy:()=>{t&&Kr(t),Zr()}}}function Pv(n,t){let e=[`${n} cleans up! Up ${Ei(t)}. Insufferable for the rest of the evening.`,`Kerching! ${n} is ${Ei(t)} richer and won't let anyone forget it.`,`${n} read that race like a book.`];return e[Math.floor(Math.random()*e.length)]}function Lv(n,t){let e=[`Oh dear. ${n} is down ${Ei(-t)}. The bank of Mark is not sympathetic.`,`${n} backed the wrong Mark. It happens to the best of us. Mostly to ${n}.`,`That's ${Ei(-t)} gone, ${n}. Thoughts and prayers.`];return e[Math.floor(Math.random()*e.length)]}function kv(n,{compact:t=!1}={}){let e=qf(n.players),i=n.history.at(-1);return[...n.players].sort((s,r)=>r.bankroll-s.bankroll).map(s=>{let r=e.get(s.id),o=i?.nets?.[s.id]??0;return`<div class="srow panel slant ${r===1&&!t?"lead":""}" style="${r===1&&!t?"":`background:${zt(s.avatar.colour)}`}"><div class="unslant" style="display:flex;align-items:center;gap:26px;width:100%">
      ${Vi(r)}${pn(s.avatar,t?70:96)}<div class="nm">${zt(s.name)}</div>
      ${t?"":`<span class="dl ${o>0?"up":o<0?"down":"flat"}">${or(o)}</span>`}
      <div class="bk num">${hn(s.bankroll)}</div>
      ${!t&&s.ready?'<span class="tag" style="background:var(--grass);color:#fff">\u2713 READY</span>':""}
    </div></div>`}).join("")}function Dv(n){let t=n.history,e=n.settings.startingBankroll,i=n.players.map(M=>({p:M,pts:[e,...t.map(g=>g.bankrolls?.[M.id]??e)]})),s=Math.max(2,(t.length||0)+1),r=Math.max(e*1.2,...i.flatMap(M=>M.pts)),o=540,a=420,l=36,h=M=>l+M*(o-l*2)/(s-1),d=M=>a-l-M/r*(a-l*2),y=[0,.5,1].map(M=>`<line x1="${l}" x2="${o-l}" y1="${d(r*M)}" y2="${d(r*M)}" stroke="#14183c22" stroke-width="2"/>`).join(""),u=`<line x1="${l}" x2="${o-l}" y1="${d(e)}" y2="${d(e)}" stroke="#14183c55" stroke-width="2" stroke-dasharray="8 8"/>`,c=i.map(({p:M,pts:g})=>`<polyline fill="none" stroke="#14183c" stroke-width="12" stroke-linejoin="round" stroke-linecap="round" points="${g.map((p,S)=>`${h(S)},${d(p)}`).join(" ")}"/><polyline fill="none" stroke="${zt(M.avatar.colour)}" stroke-width="6" stroke-linejoin="round" stroke-linecap="round" points="${g.map((p,S)=>`${h(S)},${d(p)}`).join(" ")}"/>${g.map((p,S)=>`<circle cx="${h(S)}" cy="${d(p)}" r="8" fill="${zt(M.avatar.colour)}" stroke="#14183c" stroke-width="4"/>`).join("")}`).join(""),f=Array.from({length:s},(M,g)=>`<text x="${h(g)}" y="${a-6}" text-anchor="middle" font-family="Lilita One" font-size="20" fill="#14183c">${g===0?"Start":`R${g}`}</text>`).join("");return`<svg viewBox="0 0 ${o} ${a}" width="100%" height="440">${y}${u}${c}${f}</svg>`}function Uv(n,t){let e=n.results;if(!e?.finishOrder?.length)return"";let i=cn(n.round,e.finishOrder[0].runnerId),s=n.players.map(o=>{let a=e.payouts?.[o.id],l=(a?.bets||[]).filter(h=>h.won).sort((h,d)=>d.returned-h.returned)[0];return`<div class="rcp">${pn(o.avatar,54)}<span class="rn">${zt(o.name)}</span><span class="rx">${l?`\u2705 ${zt(to(n.round,l))}`:(a?.bets||[]).length?"\u274C nothing came in":"\u{1F648} no bets"}</span><span class="rnet ${a?.net>0?"up":a?.net<0?"down":""}">${or(a?.net||0)}</span></div>`}).join(""),r=(e.awards||[]).slice(0,2).map(o=>`<span class="raw">\u{1F3C6} ${zt(o.title)}</span>`).join("");return`<div class="recap panel white ${t?"narrow":""}"><div class="rch"><span class="rp">${i?_i(i,64):""}</span><span>Last race: <b>${zt(i?.nickname||"")}</b> won${e.archetype?.label?` \xB7 ${zt(e.archetype.label)}`:""}</span>${r}</div>${s}</div>`}function Nv(n){let t=qe('<div class="score"></div>');bi.appendChild(t);let e=null;function i(r){let a=r.roundNumber>=r.roundsPerGame?"\u{1F3C1} That was the final round! Champion next\u2026":r.roundNumber===r.roundsPerGame-1?"Up next: THE FINAL ROUND \u{1F62C}":`Up next: Round ${r.roundNumber+1} of ${r.roundsPerGame}`,l=r.history.length>=2;t.innerHTML=`<div class="res-head"><div class="h outlined">STANDINGS</div><div class="sh">After round ${r.roundNumber} of ${r.roundsPerGame}</div></div>
      <div class="standings ${l?"":"solo"}">${kv(r)}</div>
      ${l?`<div class="chart panel white"><div class="ct">The money, round by round</div>${Dv(r)}</div>`:""}
      ${Uv(r,l)}
      <div class="upnext panel yellow">${a}<span class="cd"></span></div>`}i(n);let s=[...n.players].sort((r,o)=>o.bankroll-r.bankroll);if(s.length>=2){let r=s[0].bankroll-s[1].bankroll;ke(r===0?"It's dead level at the top!":`${s[0].name} leads by ${Ei(r)}.`,"jeff",2)}else s[0]&&ke(`${s[0].name} is on ${Ei(s[0].bankroll)}.`,"jeff",2);return e=setInterval(()=>{let r=t.querySelector(".cd");if(!(!r||!ve))if(ve.deadline&&ve.phase==="SCOREBOARD"){let o=Math.max(0,Math.ceil((ve.deadline-Da.serverNow())/1e3));r.textContent=` \u2014 starting in ${o}\u2026`}else r.textContent=ve.players.length?" \u2014 tap READY on your phones":""},300),{update:i,destroy:()=>clearInterval(e)}}function Ov(n){let t=[...n.players].sort((f,M)=>M.bankroll-f.bankroll),e=t[0],i=t.length>1&&t[1].bankroll===e?.bankroll,s=(n.history||[]).flatMap(f=>(f.awards||[]).map(M=>({title:M.title,text:`Round ${f.round}`,playerId:M.playerId}))),r=[...n.superlatives||[],...s].filter(f=>f&&f.title),o=qe(`<div class="finale"><div class="rays"></div><div class="fconf"></div>
    <div class="champ">${e?`<div class="h outlined">${i?"IT'S A DRAW!":"CHAMPION!"}</div>
      <div class="who"><div class="crown">\u{1F451}</div>${pn(e.avatar,200)}<div class="nm outlined white">${zt(i?t.filter(f=>f.bankroll===e.bankroll).map(f=>f.name).join(" & "):e.name)}</div><div class="bk num">${hn(e.bankroll)}</div></div>`:'<div class="h outlined">GAME OVER</div>'}
      <div class="others">${t.slice(1).map((f,M)=>`<div class="srow panel slant" style="background:${zt(f.avatar.colour)}"><div class="unslant" style="display:flex;align-items:center;gap:20px">${Vi(M+2)}${pn(f.avatar,64)}<div class="nm">${zt(f.name)}</div><div class="bk num">${hn(f.bankroll)}</div></div></div>`).join("")}</div>
    </div>
    <div class="reel">${r.length?'<div class="reel-h outlined white thin">THE NIGHT IN AWARDS</div><div class="reel-card"></div><div class="reel-dots"></div>':""}</div>
  </div>`);bi.appendChild(o);let a=xe(".fconf",o);ie.play("drumroll",{dur:1.6}),setTimeout(()=>{ie.play("fanfare"),ie.play("crowd",{dur:5,peak:.45}),ar(a,{count:200,duration:4500,contained:!0,zIndex:0})},Nn(1700));let l=setInterval(()=>ar(a,{count:50,duration:3500,contained:!0,zIndex:0}),Nn(7e3));e&&ke(i?"We have a dead heat! Nobody wins, which is very British.":`Ladies and gentlemen, your MARKRUN champion: ${e.name}, with ${Ei(e.bankroll)}!`,"jeff",3);let h=0,d=null,y=xe(".reel-card",o);function u(){if(!y||!r.length)return;let f=r[h%r.length],M=n.players.find(g=>g.id===f.playerId);y.innerHTML=`<div class="rc2 panel ${M?"":"yellow"} anim-pop" style="${M?`background:${zt(M.avatar.colour)}`:""}"><div class="tro">\u{1F3C6}</div>${M?pn(M.avatar,84):""}<div class="t outlined ${M?"white":""} thin">${zt(f.title)}</div><div class="x">${zt(f.text||"")}</div></div>`,xe(".reel-dots",o).innerHTML=r.map((g,p)=>`<i class="${p===h%r.length?"on":""}"></i>`).join(""),ie.play("reveal"),h<r.length&&ke(`${f.title}! ${f.text||""}`,h%2?"pam":"jeff",2),h++}let c=setTimeout(()=>{u(),d=setInterval(u,Nn(6500))},Nn(6500));return setTimeout(()=>ke("Press space, or tap ready on your phones, to go again.","pam",1),Nn(6500*(r.length+1))),{destroy:()=>{clearInterval(l),clearInterval(d),clearTimeout(c)}}}
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
