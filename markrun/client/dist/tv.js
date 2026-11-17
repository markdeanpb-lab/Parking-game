var nf=Object.defineProperty;var sf=(n,t)=>{for(var e in t)nf(n,e,{get:t[e],enumerable:!0})};function bh({role:n,getToken:t,getKey:e,onWelcome:i,onState:s,onMessage:r,onStatus:o}){let a=null,l=0,h=null,u=!1,g=0,f=null,c=0,d=()=>`${location.protocol==="https:"?"wss":"ws"}://${location.host}/ws`;function M(v){o?.(v)}function m(){if(clearTimeout(h),a&&(a.readyState===0||a.readyState===1))return;M(l?"reconnecting":"connecting");try{a=new WebSocket(d())}catch{p();return}let v=a;v.onopen=()=>{l=0,M("open"),c=Date.now(),S({t:"hello",role:n,token:t?.()||void 0,key:e?.()||void 0}),clearInterval(f),f=setInterval(()=>{if(S({t:"ping",at:Date.now()}),Date.now()-c>25e3&&v.readyState===1)try{v.close()}catch{}},8e3)},v.onmessage=L=>{c=Date.now();let E;try{E=JSON.parse(L.data)}catch{return}if(E.t==="pong"){E.serverNow&&(g=E.serverNow+(Date.now()-E.at)/2-Date.now());return}E.t==="welcome"?i?.(E):E.t==="state"?(E.state?.serverNow&&(g=E.state.serverNow-Date.now()),s?.(E.state)):r?.(E)},v.onclose=()=>{clearInterval(f),v===a&&(M("closed"),u||p())},v.onerror=()=>{try{v.close()}catch{}}}function p(){clearTimeout(h);let v=Math.min(8e3,400*2**l)*(.75+Math.random()*.5);l++,h=setTimeout(m,v)}function S(v){return a&&a.readyState===1?(a.send(JSON.stringify(v)),!0):!1}let _=()=>{document.visibilityState==="visible"&&(!a||a.readyState>1?(l=0,m()):S({t:"ping",at:Date.now()}))};return document.addEventListener("visibilitychange",_),window.addEventListener("online",()=>{l=0,m()}),window.addEventListener("pageshow",_),window.addEventListener("focus",_),m(),{send:S,reconnect(){l=0;try{a?.close()}catch{}m()},close(){u=!0,a?.close()},serverNow:()=>Date.now()+g,get open(){return a?.readyState===1}}}function Sh(){let n=null,t=null,e=null,i=null,s=null,r=null,o=.8,a=!1,l=!0,h=null;function u(){if(n)return n;let x=window.AudioContext||window.webkitAudioContext;if(!x)return null;n=new x,r=n.createDynamicsCompressor(),r.threshold.value=-14,r.ratio.value=4,r.attack.value=.005,r.release.value=.2,t=n.createGain(),t.gain.value=a?0:o,e=n.createGain(),e.gain.value=.9,i=n.createGain(),i.gain.value=.32,e.connect(r),i.connect(r),r.connect(t),t.connect(n.destination),s=n.createBuffer(1,n.sampleRate*2,n.sampleRate);let y=s.getChannelData(0);for(let b=0;b<y.length;b++)y[b]=Math.random()*2-1;return n}function g(){let x=u();return x&&x.state==="suspended"&&x.resume(),!!x}let f=()=>n&&n.state==="running";function c(x,y,b,A,w,I){x.gain.cancelScheduledValues(y),x.gain.setValueAtTime(1e-4,y),x.gain.exponentialRampToValueAtTime(A,y+b),x.gain.setValueAtTime(A,y+b+w),x.gain.exponentialRampToValueAtTime(1e-4,y+b+w+I)}function d(x,y,b,A,{gain:w=.2,a:I=.01,rel:O=.2,dest:D=e,detune:B=0,filter:F=null,pan:q=0}={}){let st=n.createOscillator();st.type=x,st.frequency.setValueAtTime(y,b),st.detune.value=B;let P=n.createGain(),ft=st;if(F){let U=n.createBiquadFilter();U.type=F.type||"lowpass",U.frequency.value=F.freq,U.Q.value=F.q||.7,ft.connect(U),ft=U}ft.connect(P);let Ft=P;if(q&&n.createStereoPanner){let U=n.createStereoPanner();U.pan.value=q,P.connect(U),Ft=U}return Ft.connect(D),c(P,b,I,w,Math.max(0,A-I),O),st.start(b),st.stop(b+A+O+.05),st}function M(x,y,{gain:b=.2,a:A=.01,rel:w=.2,type:I="bandpass",freq:O=1e3,q:D=1,dest:B=e}={}){let F=n.createBufferSource();F.buffer=s,F.loop=!0;let q=n.createBiquadFilter();q.type=I,q.frequency.setValueAtTime(O,x),q.Q.value=D;let st=n.createGain();return F.connect(q),q.connect(st),st.connect(B),c(st,x,A,b,Math.max(0,y-A),w),F.start(x,Math.random()),F.stop(x+y+w+.05),{s:F,f:q,g:st}}let m=x=>440*2**((x-69)/12),p={horn(x){for(let[y,b]of[[233,0],[293.7,6],[349,-5]])d("sawtooth",y*.92,x,1.1,{gain:.13,a:.03,rel:.25,filter:{freq:2200},detune:b}).frequency.exponentialRampToValueAtTime(y,x+.12);d("square",116.5,x,1.1,{gain:.05,a:.03,rel:.25,filter:{freq:800}})},crowd(x,{dur:y=3.5,peak:b=.32}={}){for(let[A,w,I]of[[700,.8,1],[1800,1.2,.7],[3200,1.5,.35]]){let O=M(x,y*.4,{gain:b*I,a:y*.45,rel:y*.55,freq:A,q:w}),D=n.createOscillator();D.frequency.value=5+Math.random()*4;let B=n.createGain();B.gain.value=b*I*.35,D.connect(B),B.connect(O.g.gain),D.start(x),D.stop(x+y+.2)}for(let A=0;A<4;A++){let w=x+.4+Math.random()*y*.5;d("triangle",500+Math.random()*300,w,.35,{gain:.025,a:.08,rel:.25,filter:{freq:1600},pan:Math.random()*1.6-.8}).frequency.exponentialRampToValueAtTime(800+Math.random()*400,w+.3)}},whoosh(x){let y=M(x,.45,{gain:.35,a:.12,rel:.25,freq:400,q:2.5});y.f.frequency.exponentialRampToValueAtTime(3500,x+.3),y.f.frequency.exponentialRampToValueAtTime(700,x+.7)},bell(x){for(let y of[x,x+.42])[[1,.22,1.6],[2.76,.09,.9],[5.4,.05,.5],[8.93,.03,.3]].forEach(([b,A,w])=>d("sine",830*b,y,.01,{gain:A,a:.003,rel:w}))},fanfare(x){let y=[[67,0,.14],[72,.15,.14],[76,.3,.14],[79,.45,.32],[76,.8,.14],[79,.95,.9]];for(let[b,A,w]of y){for(let I of[-7,7])d("sawtooth",m(b),x+A,w,{gain:.07,a:.02,rel:.18,filter:{freq:2600},detune:I});d("square",m(b-12),x+A,w,{gain:.03,a:.02,rel:.15,filter:{freq:1200}})}for(let b of[60,64,67,72])d("triangle",m(b),x+.95,.9,{gain:.06,a:.03,rel:.6});p.cymbal(x+.95,.12)},cymbal(x,y=.15){M(x,.05,{gain:y,a:.002,rel:1.4,type:"highpass",freq:6e3,q:.5})},kaching(x){M(x,.03,{gain:.3,a:.002,rel:.05,type:"highpass",freq:3e3}),M(x+.05,.02,{gain:.25,a:.002,rel:.06,type:"bandpass",freq:1800,q:3});for(let[y,b]of[[2093,.14],[2637,.1],[3136,.08],[4186,.05]])d("sine",y,x+.12,.02,{gain:b,a:.003,rel:.9});for(let y=0;y<6;y++)d("sine",3e3+Math.random()*2e3,x+.2+y*.05,.01,{gain:.03,a:.002,rel:.12})},sadtrombone(x){let y=[[55,0,.42],[54,.48,.42],[53,.96,.42],[52,1.44,1.3]];for(let[b,A,w]of y){let I=d("sawtooth",m(b),x+A,w,{gain:.11,a:.04,rel:.2,filter:{freq:1100,q:2}});if(A>1){let O=n.createOscillator();O.frequency.value=6;let D=n.createGain();D.gain.value=6,O.connect(D),D.connect(I.frequency),O.start(x+A),O.stop(x+A+w+.3),I.frequency.setValueAtTime(m(b),x+A),I.frequency.linearRampToValueAtTime(m(b-1),x+A+w)}}},drumroll(x,{dur:y=2.2}={}){let b=Math.floor(y*16);for(let A=0;A<b;A++)M(x+A/16,.02,{gain:.04+.16*(A/b),a:.002,rel:.06,freq:1800,q:.8});p.cymbal(x+y,.2),d("sine",70,x+y,.05,{gain:.5,a:.003,rel:.4})},sting(x){for(let y of[48,55,60,63])for(let b of[-8,8])d("sawtooth",m(y),x,.16,{gain:.05,a:.01,rel:.5,filter:{freq:1800},detune:b});p.cymbal(x,.1)},pop(x){d("sine",520,x,.02,{gain:.18,a:.003,rel:.12}).frequency.exponentialRampToValueAtTime(1100,x+.08)},tick(x){d("square",1600,x,.005,{gain:.04,a:.001,rel:.03,filter:{freq:3e3}})},lock(x){d("sine",140,x,.04,{gain:.4,a:.002,rel:.2}),M(x,.02,{gain:.2,a:.002,rel:.05,freq:2500,q:1}),d("triangle",660,x+.06,.05,{gain:.08,a:.005,rel:.2}),d("triangle",990,x+.14,.08,{gain:.08,a:.005,rel:.3})},join(x){[72,76,79,84].forEach((y,b)=>d("triangle",m(y),x+b*.07,.06,{gain:.1,a:.005,rel:.2}))},beep(x){d("square",880,x,.08,{gain:.06,a:.005,rel:.05,filter:{freq:2500}})},go(x){d("square",1320,x,.3,{gain:.07,a:.005,rel:.1,filter:{freq:3e3}})},stamp(x){d("sine",90,x,.05,{gain:.5,a:.002,rel:.25}),M(x,.04,{gain:.25,a:.002,rel:.1,type:"lowpass",freq:1200})},reveal(x){[64,67,71,74].forEach((y,b)=>d("triangle",m(y+12),x+b*.05,.05,{gain:.06,a:.004,rel:.25}))},boo(x){d("sawtooth",160,x,.7,{gain:.06,a:.1,rel:.3,filter:{freq:600}}).frequency.linearRampToValueAtTime(110,x+.8)}};function S(x,y){if(!f()||a)return;let b=p[x];if(b)try{b(n.currentTime+.02,y)}catch(A){console.warn("sfx",x,A)}}let _={lobby:{bpm:92,chords:[[60,64,67,71],[57,60,64,67],[53,57,60,64],[55,59,62,67]],arp:[0,2,1,3,2,1,3,2],swing:.08,shaker:!0,block:!1},betting:{bpm:108,chords:[[57,60,64],[53,57,60],[60,64,67],[55,59,62]],arp:[0,1,2,1,0,2,1,2],swing:.05,shaker:!0,block:!0},results:{bpm:100,chords:[[60,64,67],[65,69,72],[55,59,62],[60,64,67]],arp:[0,1,2,3,2,1,0,1],swing:.06,shaker:!1,block:!1}};function v(){if(!h)return;let x=_[h.kind],y=60/x.bpm/2;for(;h.nextT<n.currentTime+.35;){let b=h.step,A=Math.floor(b/8)%x.chords.length,w=x.chords[A],I=h.nextT+(b%2?x.swing*y:0),O=b%8;if(O===0){for(let B of w.slice(0,3))for(let F of[-6,6])d("triangle",m(B),I,y*7.5,{gain:.022,a:.35,rel:.6,dest:i,detune:F,filter:{freq:1300}});d("sine",m(w[0]-24),I,y*2.5,{gain:.14,a:.01,rel:.25,dest:i})}O===4&&d("sine",m(w[0]-24+7),I,y*2,{gain:.1,a:.01,rel:.25,dest:i});let D=w[x.arp[O]%w.length]+12;b%16<15&&d("sine",m(D),I,.02,{gain:.045,a:.004,rel:y*1.6,dest:i}),d("triangle",m(D+12),I,.01,{gain:.01,a:.002,rel:.15,dest:i}),x.shaker&&b%2===1&&M(I,.01,{gain:.018,a:.003,rel:.05,type:"highpass",freq:7e3,dest:i}),x.block&&(O===2||O===6)&&d("sine",1250,I,.004,{gain:.04,a:.001,rel:.05,dest:i}),h.step++,h.nextT+=y}}function L(x="lobby"){if(!u()||h?.kind===x)return;if(T(.6),!l){h=null,E=x;return}E=x;let y=n.createGain();y.gain.value=1e-4,y.connect(r);let b=i;i=y,y.gain.exponentialRampToValueAtTime(.32,n.currentTime+1.5),h={kind:x,nextT:n.currentTime+.1,step:0,bus:y},h.timer=setInterval(()=>{f()&&v()},90)}let E=null;function T(x=.8){if(!h)return;clearInterval(h.timer);let y=h.bus;n&&y&&(y.gain.cancelScheduledValues(n.currentTime),y.gain.setValueAtTime(y.gain.value,n.currentTime),y.gain.exponentialRampToValueAtTime(1e-4,n.currentTime+x),setTimeout(()=>y.disconnect(),x*1e3+500)),h=null}function R(x){!h||!n||h.bus.gain.setTargetAtTime(x?.14:.32,n.currentTime,.25)}return{unlock:g,play:S,ready:f,get context(){return n},setVolume(x){o=Math.max(0,Math.min(1,x)),t&&t.gain.setTargetAtTime(a?0:o,n.currentTime,.05)},setMuted(x){a=!!x,t&&t.gain.setTargetAtTime(a?0:o,n.currentTime,.05)},get muted(){return a},setMusicEnabled(x){if(l=!!x,l)E&&!h&&L(E);else{let y=h?.kind||E;T(),E=y}},startMusic:L,stopMusic:T,duck:R,get musicKind(){return h?.kind||null}}}var ve=(n,t=document)=>t.querySelector(n),li=(n,t=document)=>[...t.querySelectorAll(n)];function Ht(n){return String(n??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}function Ke(n){let t=document.createElement("template");return t.innerHTML=n.trim(),t.content.firstElementChild}var wh="pp";function mn(n){let t=Math.round(Number(n)||0);return`${t<0?"\u2212":""}${Math.abs(t).toLocaleString("en-GB")}${wh}`}function Yi(n){let t=Math.round(Number(n)||0);return`${t>0?"+":t<0?"\u2212":"\xB1"}${Math.abs(t).toLocaleString("en-GB")}${wh}`}function Ai(n){let t=Math.abs(Math.round(Number(n)||0));return`${t.toLocaleString("en-GB")} Parkpound${t===1?"":"s"}`}var ms=n=>n?.shortName||n?.nickname||"";function rf(n){let t=n%100;return t>=11&&t<=13?"th":{1:"st",2:"nd",3:"rd"}[n%10]||"th"}function Zi(n,t=""){return`<span class="ordinal p${n} ${t}">${n}<sup>${rf(n)}</sup></span>`}function vn(n,t=64,e=""){let i=n||{emoji:"\u{1F642}",colour:"#2f8cff"};return`<span class="avatar ${e}" style="width:${t}px;height:${t}px;font-size:${Math.round(t*.58)}px;background:${Ht(i.colour)}">${Ht(i.emoji)}</span>`}function Eh(n){return n=Math.round(Number(n)||0),`${Math.floor(n/60)}:${String(n%60).padStart(2,"0")}`}function $a(n,t,e,i=1200,s=o=>String(Math.round(o)),r){let o=performance.now(),a,l=Math.round(t),h=u=>{let g=Math.min(1,(u-o)/i),f=1-(1-g)**3,c=t+(e-t)*f;n.textContent=s(c);let d=Math.round(c);r&&d!==l&&(l=d,r(d)),g<1&&(a=requestAnimationFrame(h))};return a=requestAnimationFrame(h),()=>cancelAnimationFrame(a)}function ln(n,t){return n?.runners?.find(e=>e.id===t)}function ro(n,t){if(!n||!t)return"";if(t.type==="win")return`${ln(n,t.runnerId)?.nickname||t.runnerId} to WIN`;if(t.type==="inplay")return`${ln(n,t.runnerId)?.nickname||t.runnerId} to WIN (halfway)`;if(t.type==="prop")return`${n.props?.find(o=>o.id===t.propId)?.text||"Side bet"} \u2014 ${String(t.pick).toUpperCase()}`;let e=n.matchups?.find(r=>r.id===t.matchupId);if(!e)return"Head-to-head";let i=ms(ln(n,t.pick))||t.pick,s=ms(ln(n,t.pick===e.a?e.b:e.a));return`${i} to beat ${s}`}function dr(n,t){if(t.type==="win")return ln(n,t.runnerId)?.odds?.win??0;if(t.type==="inplay")return Number(t.odds)||0;if(t.type==="prop"){let i=n?.props?.find(s=>s.id===t.propId);return(t.pick==="yes"?i?.odds?.yes:i?.odds?.no)??0}let e=n?.matchups?.find(i=>i.id===t.matchupId);return e?t.pick===e.a?e.odds.a:e.odds.b:0}function ur(n=document.body,{count:t=120,colours:e=["#ffd23f","#ff4d5a","#2ec27e","#2f8cff","#ff6fb5","#7b4dff"],duration:i=3200,zIndex:s=9e3,contained:r=!1}={}){let o=document.createElement("div");o.style.cssText=`position:${r?"absolute":"fixed"};inset:0;pointer-events:none;overflow:hidden;z-index:${s}`;for(let a=0;a<t;a++){let l=document.createElement("i"),h=8+Math.random()*12,u=Math.random()*100,g=(Math.random()-.5)*30,f=Math.random()*720-360,c=Math.random()*400,d=i*(.6+Math.random()*.5);l.style.cssText=`position:absolute;left:${u}%;top:-30px;width:${h}px;height:${h*(.4+Math.random()*.6)}px;background:${e[a%e.length]};border:2px solid #14183c;border-radius:${Math.random()<.3?"50%":"2px"}`,l.animate([{transform:"translate(0,0) rotate(0deg)",opacity:1},{transform:`translate(${g}vw, 110vh) rotate(${f}deg)`,opacity:1}],{duration:d,delay:c,easing:"cubic-bezier(.2,.6,.4,1)",fill:"forwards"}),o.appendChild(l)}n.appendChild(o),setTimeout(()=>o.remove(),i*1.3+500)}function oo(n){return n?.type==="prop"?null:n?.runnerId||n?.pick||null}function Th(n){return{win:"WIN",h2h:"HEAD-TO-HEAD",prop:"SIDE BET",inplay:"HALFWAY"}[n?.type]||""}function Va(n){let t=String(n?.text||"");if(n?.style==="tipster"){let e=t.indexOf('"');if(e>0){let i=t.slice(0,e).trim(),s=t.slice(e).replace(/^"|"$/g,"").replace(/"/g,""),r=n.voice||(/\bpam\b/i.test(i)?"pam":/\bjeff\b/i.test(i)?"jeff":"");return`<span class="cfact">${Ht(i)}</span> <span class="cquote ${r}">${r?`<b>${r==="pam"?"PAM":"JEFF"}</b>`:""}\u201C${Ht(s)}\u201D</span>`}}return Ht(t)}function Ga(n,t){if(!t)return"";if(t.type==="win")return ln(n,t.runnerId)?.odds?.display||`\xD7${dr(n,t)}`;if(t.type==="inplay")return t.display||`\xD7${Number(t.lockedOdds??t.odds)||""}`;if(t.type==="prop"){let i=n?.props?.find(s=>s.id===t.propId);return(t.pick==="yes"?i?.odds?.displayYes:i?.odds?.displayNo)||`\xD7${dr(n,t)}`}let e=n?.matchups?.find(i=>i.id===t.matchupId);return(t.pick===e?.a?e?.odds?.displayA:e?.odds?.displayB)||`\xD7${dr(n,t)}`}function Ah(n){let t=Math.round(Number(n?.returned)||0),e=Math.round(Number(n?.stake)||0);return n?.void||n?.push||!n?.won&&t===e&&e>0?{kind:"push",net:0,text:"refunded \xB10"}:n?.won?{kind:"won",net:t-e,text:Yi(t-e)}:{kind:"lost",net:-e,text:Yi(-e)}}var ne="#14183c";function of(n){let t=2166136261;for(let e of String(n))t^=e.charCodeAt(0),t=Math.imul(t,16777619);return t>>>0}var Rh=["#2b1a10","#5a3418","#8a5a2b","#d8a24a","#1b1b1b","#b8432a","#9aa0a8"];function gs(n,t){let e=parseInt(String(n||"#888888").replace("#","").padEnd(6,"8").slice(0,6),16),i=e>>16&255,s=e>>8&255,r=e&255,o=t<0?0:255,a=Math.abs(t);return i=Math.round((o-i)*a+i),s=Math.round((o-s)*a+s),r=Math.round((o-r)*a+r),`#${(1<<24|i<<16|s<<8|r).toString(16).slice(1)}`}function Ch(n,{size:t=120,idSuffix:e=""}={}){let i=n?.look||{},s=n?.colour?.primary||"#ff4d5a",r=n?.colour?.secondary||"#ffffff",o=i.skin||"#f1c6a5",a=of(n?.id+(n?.nickname||"")),l=i.hairColour||i.hairColor||Rh[a%Rh.length],h=i.build||"compact",u={stocky:50,tall:40,lanky:34,compact:42}[h]??42,g={tall:8,lanky:10,stocky:2,compact:4}[h]??4,f={compact:31,stocky:30,lanky:28,tall:29}[h]??30,c=60,d=50-g/2,M=n?.lane??"",m=`pc${a.toString(36)}${e}`,p=[];p.push(`<defs><clipPath id="${m}"><circle cx="60" cy="60" r="56"/></clipPath></defs>`),p.push(`<circle cx="60" cy="60" r="56" fill="${gs(s,.55)}"/>`),p.push(`<g clip-path="url(#${m})">`),p.push(`<path d="M0 92 L120 70 L120 120 L0 120Z" fill="${gs(s,.35)}" opacity=".6"/>`);let S=d+f+g-4;p.push(`<path d="M${c-u} 124 Q${c-u} ${S+6} ${c-14} ${S} L${c+14} ${S} Q${c+u} ${S+6} ${c+u} 124Z" fill="${s}" stroke="${ne}" stroke-width="5" stroke-linejoin="round"/>`),p.push(`<path d="M${c-18} ${S+1} L${c-2} ${S+1} L${c+26} 124 L${c+8} 124Z" fill="${r}" stroke="${ne}" stroke-width="3" stroke-linejoin="round"/>`),p.push(`<rect x="${c-30}" y="${S+14}" width="22" height="17" rx="3" fill="#fff" stroke="${ne}" stroke-width="3" transform="rotate(-6 ${c-19} ${S+22})"/>`),p.push(`<text x="${c-19}" y="${S+28}" font-family="Lilita One, Arial Black, sans-serif" font-size="14" text-anchor="middle" fill="${ne}" transform="rotate(-6 ${c-19} ${S+22})">${M}</text>`),p.push(`<rect x="${c-9}" y="${d+f-8}" width="18" height="${g+12}" fill="${o}" stroke="${ne}" stroke-width="5"/>`),i.accessory==="medal"&&(p.push(`<path d="M${c-12} ${S} L${c} ${S+22} L${c+12} ${S}" fill="none" stroke="${r}" stroke-width="6"/>`),p.push(`<circle cx="${c}" cy="${S+26}" r="9" fill="#ffcf3a" stroke="${ne}" stroke-width="4"/>`));let _=i.hair||"short";["long","ponytail","bob"].includes(_)&&p.push(`<path d="M${c-f-4} ${d} Q${c-f-6} ${d+f+14} ${c-f+10} ${d+f+10} L${c+f-10} ${d+f+10} Q${c+f+6} ${d+f+14} ${c+f+4} ${d}Z" fill="${l}" stroke="${ne}" stroke-width="5" stroke-linejoin="round"/>`),_==="ponytail"&&p.push(`<ellipse cx="${c+f+6}" cy="${d-6}" rx="9" ry="16" fill="${l}" stroke="${ne}" stroke-width="5" transform="rotate(25 ${c+f+6} ${d-6})"/>`),p.push(`<circle cx="${c-f+1}" cy="${d+4}" r="7" fill="${o}" stroke="${ne}" stroke-width="5"/>`),p.push(`<circle cx="${c+f-1}" cy="${d+4}" r="7" fill="${o}" stroke="${ne}" stroke-width="5"/>`),p.push(`<ellipse cx="${c}" cy="${d}" rx="${f}" ry="${f+2}" fill="${o}" stroke="${ne}" stroke-width="5"/>`),p.push(`<ellipse cx="${c-16}" cy="${d+11}" rx="6" ry="4" fill="#ff8f8f" opacity=".45"/><ellipse cx="${c+16}" cy="${d+11}" rx="6" ry="4" fill="#ff8f8f" opacity=".45"/>`);let v=d-f-2,L={short:`<path d="M${c-f+2} ${d-6} Q${c-f} ${v-4} ${c} ${v-2} Q${c+f} ${v-4} ${c+f-2} ${d-6} Q${c+8} ${d-18} ${c-f+2} ${d-6}Z"/>`,buzz:`<path d="M${c-f+3} ${d-8} Q${c} ${v-6} ${c+f-3} ${d-8} Q${c} ${d-20} ${c-f+3} ${d-8}Z"/>`,curly:`<path d="M${c-f} ${d-2} q-6 -12 4 -18 q0 -12 14 -12 q6 -10 18 -4 q12 -4 16 8 q12 4 8 18 q-14 -8 -30 -6 q-16 0 -30 14z"/>`,afro:`<circle cx="${c}" cy="${d-14}" r="${f+8}"/>`,mohawk:`<path d="M${c-6} ${d-14} L${c-8} ${v-16} L${c+8} ${v-16} L${c+6} ${d-14}Z"/>`,quiff:`<path d="M${c-f+2} ${d-6} Q${c-f} ${v} ${c-4} ${v-2} Q${c+20} ${v-18} ${c+f+4} ${v+2} Q${c+f} ${d-8} ${c+f-2} ${d-6} Q${c+8} ${d-18} ${c-f+2} ${d-6}Z"/>`,bun:`<g><circle cx="${c}" cy="${v-6}" r="10"/><path d="M${c-f+2} ${d-6} Q${c-f} ${v-2} ${c} ${v} Q${c+f} ${v-2} ${c+f-2} ${d-6} Q${c} ${d-16} ${c-f+2} ${d-6}Z"/></g>`,long:`<path d="M${c-f+1} ${d+2} Q${c-f} ${v-4} ${c} ${v-2} Q${c+f} ${v-4} ${c+f-1} ${d+2} Q${c+10} ${d-16} ${c-2} ${d-12} Q${c-14} ${d-16} ${c-f+1} ${d+2}Z"/>`,bald:""};L.ponytail=L.long,L.bob=L.long,L.spiky=`<path d="M${c-f+2} ${d-6} L${c-f+2} ${v+2} L${c-14} ${v-12} L${c-8} ${v-2} L${c} ${v-16} L${c+6} ${v-2} L${c+15} ${v-12} L${c+f-2} ${v+2} L${c+f-2} ${d-6} Q${c} ${d-18} ${c-f+2} ${d-6}Z"/>`,L.mullet=`<g><path d="M${c+f-6} ${d} Q${c+f+10} ${d+22} ${c+f-2} ${d+34} L${c+f-14} ${d+20}Z"/><path d="M${c-f+6} ${d} Q${c-f-10} ${d+22} ${c-f+2} ${d+34} L${c-f+14} ${d+20}Z"/>${L.short}</g>`,L.swept=`<path d="M${c-f+2} ${d-4} Q${c-f-4} ${v-6} ${c+6} ${v-6} Q${c+f+8} ${v} ${c+f-1} ${d-2} Q${c+4} ${d-22} ${c-f+2} ${d-4}Z"/>`;let E=L[_]??L.short;E&&p.push(`<g fill="${l}" stroke="${ne}" stroke-width="5" stroke-linejoin="round">${E}</g>`);let T=i.face||"grin",R=d+1,x=(O,D)=>D?`<path d="M${O-5} ${R} Q${O} ${R+4} ${O+5} ${R}" fill="none" stroke="${ne}" stroke-width="3.5" stroke-linecap="round"/>`:`<ellipse cx="${O}" cy="${R}" rx="4.2" ry="5.6" fill="${ne}"/><circle cx="${O+1.4}" cy="${R-2}" r="1.5" fill="#fff"/>`,y="",b="",A=x(c-11)+x(c+11);switch(T){case"determined":case"focused":case"fierce":y=`<path d="M${c-18} ${R-12} L${c-5} ${R-7} M${c+18} ${R-12} L${c+5} ${R-7}" stroke="${ne}" stroke-width="4" stroke-linecap="round"/>`,b=`<path d="M${c-9} ${d+17} L${c+9} ${d+15}" stroke="${ne}" stroke-width="4" stroke-linecap="round"/>`;break;case"smug":case"cheeky":A=`<path d="M${c-16} ${R} L${c-6} ${R}" stroke="${ne}" stroke-width="4" stroke-linecap="round"/>`+x(c+11),y=`<path d="M${c+5} ${R-10} Q${c+11} ${R-15} ${c+18} ${R-10}" fill="none" stroke="${ne}" stroke-width="3.5" stroke-linecap="round"/>`,b=`<path d="M${c-8} ${d+15} Q${c+4} ${d+19} ${c+11} ${d+11}" fill="none" stroke="${ne}" stroke-width="4" stroke-linecap="round"/>`;break;case"worried":case"nervous":case"anxious":y=`<path d="M${c-17} ${R-8} L${c-6} ${R-13} M${c+17} ${R-8} L${c+6} ${R-13}" stroke="${ne}" stroke-width="3.5" stroke-linecap="round"/>`,b=`<path d="M${c-10} ${d+17} q5 -5 10 0 q5 5 10 0" fill="none" stroke="${ne}" stroke-width="3.5" stroke-linecap="round"/>`;break;case"sleepy":case"tired":case"dozy":A=x(c-11,!0)+x(c+11,!0),b=`<ellipse cx="${c+2}" cy="${d+17}" rx="5" ry="4" fill="${ne}"/>`;break;case"wink":A=x(c-11,!0)+x(c+11),b=`<path d="M${c-11} ${d+12} Q${c} ${d+24} ${c+11} ${d+12}Z" fill="#fff" stroke="${ne}" stroke-width="3.5" stroke-linejoin="round"/>`;break;case"gritted":y=`<path d="M${c-18} ${R-11} L${c-5} ${R-7} M${c+18} ${R-11} L${c+5} ${R-7}" stroke="${ne}" stroke-width="4" stroke-linecap="round"/>`,b=`<rect x="${c-12}" y="${d+11}" width="24" height="10" rx="3" fill="#fff" stroke="${ne}" stroke-width="3.5"/><path d="M${c-4} ${d+11} v10 M${c+4} ${d+11} v10 M${c-12} ${d+16} h24" stroke="${ne}" stroke-width="2"/>`;break;case"tongue-out":A=x(c-11,!0)+x(c+11),b=`<path d="M${c-11} ${d+12} Q${c} ${d+20} ${c+11} ${d+12}" fill="none" stroke="${ne}" stroke-width="3.5" stroke-linecap="round"/><path d="M${c-2} ${d+15} q4 14 10 0z" fill="#ff6b7a" stroke="${ne}" stroke-width="3"/>`;break;case"wide-eyed":A=`<circle cx="${c-11}" cy="${R}" r="7.5" fill="#fff" stroke="${ne}" stroke-width="3"/><circle cx="${c-11}" cy="${R}" r="3.2" fill="${ne}"/><circle cx="${c+11}" cy="${R}" r="7.5" fill="#fff" stroke="${ne}" stroke-width="3"/><circle cx="${c+11}" cy="${R}" r="3.2" fill="${ne}"/>`,b=`<ellipse cx="${c}" cy="${d+17}" rx="5" ry="6" fill="${ne}"/>`;break;case"shocked":case"surprised":b=`<ellipse cx="${c}" cy="${d+17}" rx="6" ry="8" fill="${ne}"/>`,y=`<path d="M${c-17} ${R-13} Q${c-11} ${R-17} ${c-5} ${R-13} M${c+17} ${R-13} Q${c+11} ${R-17} ${c+5} ${R-13}" fill="none" stroke="${ne}" stroke-width="3.5" stroke-linecap="round"/>`;break;default:b=`<path d="M${c-13} ${d+11} Q${c} ${d+27} ${c+13} ${d+11}Z" fill="#fff" stroke="${ne}" stroke-width="3.5" stroke-linejoin="round"/><path d="M${c-6} ${d+19} Q${c} ${d+23} ${c+6} ${d+19}" fill="#ff6b7a"/>`}p.push(A,y,b),p.push(`<path d="M${c-2} ${d+4} Q${c+3} ${d+8} ${c-1} ${d+10}" fill="none" stroke="${gs(o,-.35)}" stroke-width="3" stroke-linecap="round"/>`);let w=i.accessory;w==="sunglasses"||w==="shades"?p.push(`<g stroke="${ne}" stroke-width="3.5"><rect x="${c-21}" y="${R-7}" width="17" height="12" rx="4" fill="${ne}"/><rect x="${c+4}" y="${R-7}" width="17" height="12" rx="4" fill="${ne}"/><path d="M${c-4} ${R-3} L${c+4} ${R-3}"/></g><path d="M${c-18} ${R-4} l5 0 M${c+7} ${R-4} l5 0" stroke="#fff" stroke-width="2.5" stroke-linecap="round"/>`):w==="glasses"||w==="specs"?p.push(`<g stroke="${ne}" stroke-width="3.5" fill="rgba(255,255,255,.25)"><circle cx="${c-11}" cy="${R}" r="8"/><circle cx="${c+11}" cy="${R}" r="8"/><path d="M${c-3} ${R} L${c+3} ${R}"/></g>`):w==="moustache"||w==="mustache"||w==="tache"?p.push(`<path d="M${c} ${d+12} q-8 -6 -16 0 q6 6 16 0 q8 -6 16 0 q-6 6 -16 0z" fill="${l}" stroke="${ne}" stroke-width="3" stroke-linejoin="round"/>`):w==="headphones"||w==="earbuds"?p.push(`<path d="M${c-f-2} ${d+2} Q${c} ${v-22} ${c+f+2} ${d+2}" fill="none" stroke="${ne}" stroke-width="7"/><rect x="${c-f-8}" y="${d-6}" width="12" height="20" rx="5" fill="${r}" stroke="${ne}" stroke-width="4"/><rect x="${c+f-4}" y="${d-6}" width="12" height="20" rx="5" fill="${r}" stroke="${ne}" stroke-width="4"/>`):w==="beard"?p.push(`<path d="M${c-f+4} ${d+4} Q${c-f+6} ${d+f+6} ${c} ${d+f+8} Q${c+f-6} ${d+f+6} ${c+f-4} ${d+4} Q${c+14} ${d+18} ${c} ${d+22} Q${c-14} ${d+18} ${c-f+4} ${d+4}Z" fill="${l}" stroke="${ne}" stroke-width="3.5" stroke-linejoin="round"/>`):w==="scarf"?p.push(`<path d="M${c-20} ${S-4} Q${c} ${S+8} ${c+20} ${S-4} L${c+22} ${S+6} Q${c} ${S+18} ${c-22} ${S+6}Z" fill="${r}" stroke="${ne}" stroke-width="3.5"/><rect x="${c+8}" y="${S+6}" width="9" height="22" rx="2" fill="${r}" stroke="${ne}" stroke-width="3"/>`):w==="cape"?p.push(`<path d="M${c-22} ${S} L${c-46} 124 M${c+22} ${S} L${c+46} 124" stroke="${r}" stroke-width="8" stroke-linecap="round"/>`):w==="wristbands"||w==="bumbag"?p.push(`<rect x="${c-26}" y="${S+30}" width="${w==="bumbag"?30:14}" height="${w==="bumbag"?14:10}" rx="5" fill="${r}" stroke="${ne}" stroke-width="3.5"/>`):w==="whistle"&&p.push(`<path d="M${c-10} ${S} Q${c} ${S+18} ${c+10} ${S}" fill="none" stroke="${r}" stroke-width="3"/><rect x="${c-6}" y="${S+12}" width="14" height="8" rx="3" fill="#cfd8e8" stroke="${ne}" stroke-width="3"/>`);let I=i.hat;return I==="backwards-cap"?(p.push(`<path d="M${c-f+1} ${d-8} Q${c-f+2} ${v-10} ${c} ${v-10} Q${c+f-2} ${v-10} ${c+f-1} ${d-8}Z" fill="${s}" stroke="${ne}" stroke-width="5" stroke-linejoin="round"/>`),p.push(`<path d="M${c-f+4} ${d-12} Q${c-f-14} ${d-14} ${c-f-18} ${d-4} L${c-f+2} ${d-4}Z" fill="${gs(s,-.2)}" stroke="${ne}" stroke-width="5" stroke-linejoin="round"/>`)):I==="cap"||I==="baseball cap"||I==="trucker"?(p.push(`<path d="M${c-f+1} ${d-8} Q${c-f+2} ${v-10} ${c} ${v-10} Q${c+f-2} ${v-10} ${c+f-1} ${d-8}Z" fill="${s}" stroke="${ne}" stroke-width="5" stroke-linejoin="round"/>`),p.push(`<path d="M${c-6} ${d-10} Q${c+24} ${d-18} ${c+f+16} ${d-6} L${c+f-2} ${d-4}Z" fill="${gs(s,-.2)}" stroke="${ne}" stroke-width="5" stroke-linejoin="round"/>`),p.push(`<circle cx="${c}" cy="${v-10}" r="3.5" fill="${r}" stroke="${ne}" stroke-width="2.5"/>`)):I==="beanie"||I==="bobble"||I==="bobble hat"||I==="woolly hat"?(p.push(`<path d="M${c-f} ${d-6} Q${c-f} ${v-14} ${c} ${v-14} Q${c+f} ${v-14} ${c+f} ${d-6}Z" fill="${r}" stroke="${ne}" stroke-width="5" stroke-linejoin="round"/>`),p.push(`<rect x="${c-f-2}" y="${d-12}" width="${f*2+4}" height="11" rx="5" fill="${s}" stroke="${ne}" stroke-width="5"/>`),p.push(`<circle cx="${c}" cy="${v-16}" r="8" fill="${s}" stroke="${ne}" stroke-width="5"/>`)):I==="headband"||I==="sweatband"?(p.push(`<path d="M${c-f} ${d-13} Q${c} ${d-22} ${c+f} ${d-13} L${c+f+1} ${d-4} Q${c} ${d-13} ${c-f-1} ${d-4}Z" fill="${r}" stroke="${ne}" stroke-width="4" stroke-linejoin="round"/>`),p.push(`<path d="M${c+f} ${d-9} l12 -4 l-2 10z" fill="${r}" stroke="${ne}" stroke-width="3.5" stroke-linejoin="round"/>`)):I==="visor"?p.push(`<path d="M${c-f} ${d-12} Q${c} ${d-20} ${c+f} ${d-12} L${c+f} ${d-5} Q${c} ${d-12} ${c-f} ${d-5}Z" fill="${s}" stroke="${ne}" stroke-width="4"/><path d="M${c-18} ${d-10} Q${c+4} ${d-2} ${c+30} ${d-10} L${c+20} ${d-15}Z" fill="${gs(s,-.2)}" stroke="${ne}" stroke-width="4" stroke-linejoin="round"/>`):I==="bucket"||I==="bucket hat"||I==="sun hat"?p.push(`<path d="M${c-f-12} ${d-6} L${c-f+4} ${v-8} Q${c} ${v-16} ${c+f-4} ${v-8} L${c+f+12} ${d-6} Q${c} ${d-14} ${c-f-12} ${d-6}Z" fill="${r}" stroke="${ne}" stroke-width="5" stroke-linejoin="round"/>`):I==="party"||I==="party hat"?p.push(`<path d="M${c-14} ${v+4} L${c+4} ${v-30} L${c+16} ${v+2}Z" fill="${s}" stroke="${ne}" stroke-width="5" stroke-linejoin="round"/><circle cx="${c+4}" cy="${v-32}" r="5" fill="${r}" stroke="${ne}" stroke-width="3"/>`):I==="tophat"||I==="top hat"?p.push(`<rect x="${c-18}" y="${v-30}" width="36" height="30" rx="3" fill="${ne}"/><rect x="${c-18}" y="${v-10}" width="36" height="7" fill="${s}"/><rect x="${c-30}" y="${v-2}" width="60" height="8" rx="4" fill="${ne}"/>`):I==="crown"?p.push(`<path d="M${c-20} ${v+2} L${c-22} ${v-20} L${c-10} ${v-8} L${c} ${v-24} L${c+10} ${v-8} L${c+22} ${v-20} L${c+20} ${v+2}Z" fill="#ffcf3a" stroke="${ne}" stroke-width="4" stroke-linejoin="round"/>`):I&&p.push(`<path d="M${c-f+1} ${d-8} Q${c-f+2} ${v-10} ${c} ${v-10} Q${c+f-2} ${v-10} ${c+f-1} ${d-8}Z" fill="${r}" stroke="${ne}" stroke-width="5" stroke-linejoin="round"/>`),p.push("</g>"),p.push(`<circle cx="60" cy="60" r="56" fill="none" stroke="${ne}" stroke-width="6"/>`),`<svg class="portrait" viewBox="0 0 120 120" width="${t}" height="${t}" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">${p.join("")}</svg>`}var af=/(daniel|george|arthur|ryan|oliver|thomas|male|james|harry|guy|brian|fred|alex|aaron)/i,lf=/(kate|serena|martha|libby|sonia|hazel|susan|female|stephanie|fiona|moira|tessa|karen|emma|amy|samantha|victoria|zira|aria|jenny|catherine)/i;function Ih({onLine:n,onIdle:t}={}){let e=typeof window<"u"?window.speechSynthesis:null,i=!0,s=.9,r={jeff:null,pam:null},o=[],a=null,l=null;function h(){if(!e)return;let M=e.getVoices()||[];if(!M.length)return;let m=M.filter(T=>/en[-_]GB/i.test(T.lang)),p=M.filter(T=>/^en/i.test(T.lang)),S=m.length?m:p.length?p:M,v=(T=>[...T.filter(R=>R.localService),...T.filter(R=>!R.localService)])(S),L=v.find(T=>af.test(T.name))||v[0],E=v.find(T=>lf.test(T.name)&&T!==L)||v.find(T=>T!==L)||L;r={jeff:L,pam:E}}e&&(h(),e.addEventListener?.("voiceschanged",h));let u=M=>Math.max(2200,String(M).split(/\s+/).length*400+600);function g(){clearTimeout(l),a=null;let M=o.shift();if(!M){t?.();return}a=M,n?.(M);let m=()=>{a===M&&g()};if(i&&e&&(r.jeff||r.pam)){let p=new SpeechSynthesisUtterance(M.text),S=M.speaker==="pam"?r.pam:r.jeff;S?(p.voice=S,p.lang=S.lang):p.lang="en-GB";let _=r.jeff===r.pam;p.pitch=M.speaker==="pam"?_?1.35:1.08:_?.8:.95,p.rate=M.rate||1.06,p.volume=s,p.onend=m,p.onerror=m;try{e.speak(p)}catch{}l=setTimeout(()=>{try{e.cancel()}catch{}m()},u(M.text)*2.2+2e3)}else l=setTimeout(m,u(M.text))}function f(M,m="jeff",{priority:p=2,interrupt:S=!1}={}){if(!M)return;let _={text:String(M),speaker:m,priority:p,at:Date.now()};for(S&&(o.length=0,c()),o.push(_);o.length>2;){let v=0;for(let L=1;L<o.length;L++)o[L].priority<o[v].priority&&(v=L);o.splice(v,1)}a||g()}function c(){if(clearTimeout(l),e)try{e.cancel()}catch{}a=null}function d(){o.length=0,c(),t?.()}return{say:f,clear:d,get busy(){return!!a||o.length>0},get available(){return!!e},setEnabled(M){if(i=!!M,!i&&e)try{e.cancel()}catch{}},setVolume(M){s=Math.max(0,Math.min(1,M))},whenIdle(M=15e3){return new Promise(m=>{let p=Date.now(),S=setInterval(()=>{(!a&&!o.length||Date.now()-p>M)&&(clearInterval(S),m())},120)})},get voiceNames(){return{jeff:r.jeff?.name,pam:r.pam?.name}}}}var cf=[1720,4220],Wa=2500;function $n(n,t){if(t<=0)return 0;if(t>=n[200])return 5e3;let e=0,i=200;for(;i-e>1;){let r=e+i>>1;n[r]<=t?e=r:i=r}let s=(t-n[e])/(n[i]-n[e]);return(e+s)*25}function ys(n,t){let e=Math.max(0,Math.min(5e3,t))/25,i=Math.floor(e),s=Math.min(200,i+1);return n[i]+(e-i)*(n[s]-n[i])}function hf(n,{dt:t=1,debounceS:e=6}={}){let i=n.map(y=>y.id),s=Math.max(...n.map(y=>y.officialS)),r=[...n].sort((y,b)=>y.officialS-b.officialS).map(y=>y.id),o=[];for(let y=0;y<=Math.ceil(s);y+=t){let b=n.map(A=>$n(A.progress,y));o.push({t:y,d:b})}let a=[],l=n.length,h={},u=(y,b)=>`${y}-${b}`,g=null,f=0,c=null,d=0,M=0,m=0,p=!1,S=null;for(let y of o){if(y.t<15)continue;let b=n.map(I=>y.t>=I.officialS);for(let I=0;I<l;I++)for(let O=I+1;O<l;O++){if(b[I]&&b[O])continue;let D=y.d[I]>y.d[O]?I:O,B=h[u(I,O)];if(!B){h[u(I,O)]={ahead:D,cand:D,since:y.t};continue}if(D!==B.cand&&(B.cand=D,B.since=y.t),B.cand!==B.ahead&&y.t-B.since>=e){let F=B.cand,q=B.cand===I?O:I;B.ahead=B.cand;let st=B.since;m++,a.push({type:"overtake",raceS:st,by:i[F],on:i[q],atM:Math.round($n(n[F].progress,st))})}}let A=y.d.indexOf(Math.max(...y.d));if(g===null){g=A,f=y.t;continue}A!==g?c!==A?(c=A,d=y.t):y.t-d>=e&&!b[g]&&(a.push({type:"lead_change",raceS:d,from:i[g],to:i[A],atM:Math.round(y.d[A])}),M++,y.d[A]>3500&&(p=!0),g=A,f=d,c=null):c=null;let w=[...y.d].sort((I,O)=>O-I);S===null&&w[0]-w[1]>60&&w[0]<5e3&&(S=y.t,a.push({type:"breakaway",raceS:y.t,who:i[A],gapM:Math.round(w[0]-w[1]),atM:Math.round(w[0])}))}let _=y=>Math.min(...n.map(b=>ys(b.progress,y)));for(let[y,b]of cf.entries())a.push({type:"hill",raceS:_(b),lap:y+1,atM:b});a.push({type:"lap",raceS:_(Wa),atM:Wa,order:Xa(n,_(Wa))}),a.push({type:"final_stretch",raceS:_(4600),atM:4600,order:Xa(n,_(4600))});for(let y of n)a.push({type:"finish",raceS:y.officialS,who:y.id,place:r.indexOf(y.id)+1});a.sort((y,b)=>y.raceS-b.raceS);let v=n.map(y=>y.officialS).sort((y,b)=>y-b),L=y=>Xa(n,_(y)),E=L(2e3)[0],T=L(1e3)[0],R=L(4e3)[0],x=L(2e3).at(-1);return{finishOrder:r,winningMarginS:v[1]-v[0],spreadS:v.at(-1)-v[0],leadChanges:M,overtakes:m,lateLeadChange:p,leaderAt1k:T,leaderAt2k:E,leaderAt4k:R,leaderAt2kFinalPlace:r.indexOf(E)+1,winnerPlaceAt2k:L(2e3).indexOf(r[0])+1,winnerPlaceAt1k:L(1e3).indexOf(r[0])+1,lastAt2kFinalPlace:r.indexOf(x)+1,breakawayAtS:S,events:a}}function Xa(n,t){return n.map(e=>({id:e.id,d:$n(e.progress,t),f:e.officialS})).sort((e,i)=>i.d-e.d||e.f-i.f).map(e=>e.id)}function df(n,{targetS:t=140}={}){let e=Math.max(...n.map(p=>p.officialS)),i=Math.min(...n.map(p=>ys(p.progress,4500))),s=45,r=i,o=e+3,a=o-r,l=4,h=Math.min(t*.45,Math.max(25,a/1.6)),u=a/h,g=r-s,f=Math.max(30,t-s/l-h),c=g/f,d=p=>{let S=Ph(s-10,s+10,p),_=Ph(r-60,r,p);return l+(c-l)*S+(u-c)*_},M=[[0,0]],m=0;for(let p=1;p<=Math.ceil(o);p++)m+=1/d(p-.5),M.push([p,Math.round(m*1e3)/1e3]);return{map:M,durationS:Math.round(m*10)/10,raceEndS:Math.ceil(o),rates:{start:l,middle:Math.round(c*10)/10,finale:Math.round(u*100)/100}}}function Ph(n,t,e){let i=Math.max(0,Math.min(1,(e-n)/(t-n)));return i*i*(3-2*i)}function ao(n,t){let e=n.map;if(t<=0)return 0;if(t>=e.length-1)return e.at(-1)[1];let i=Math.floor(t),s=t-i;return e[i][1]+s*(e[i+1][1]-e[i][1])}function xs(n,t){let e=n.map;if(t<=0)return 0;let i=0,s=e.length-1;if(t>=e[s][1])return e[s][0];for(;s-i>1;){let r=i+s>>1;e[r][1]<=t?i=r:s=r}return e[i][0]+(t-e[i][1])/(e[s][1]-e[i][1])}function Lh(n,t,e={}){let i=hf(t),s=df(t,e),r=[...i.events];for(let a of t)for(let[l,h]of(a.diversions||[]).entries())r.push({type:"diversion",who:a.id,lap:l+1,raceS:ys(a.progress,h.fromM),endRaceS:ys(a.progress,h.toM),fromM:h.fromM,toM:h.toM});r.sort((a,l)=>a.raceS-l.raceS);let o=r.map(a=>({...a,broadcastS:Math.round(ao(s,a.raceS)*100)/100,...a.endRaceS!=null?{endBroadcastS:Math.round(ao(s,a.endRaceS)*100)/100}:{}}));return{roundId:n,courseLengthM:5e3,runners:t.map(a=>({id:a.id,officialS:a.officialS,progress:a.progress,pacingSource:a.pacingSource,diversions:a.diversions||null})),timeMap:s,events:o,finishOrder:i.finishOrder,summary:{winningMarginS:i.winningMarginS,spreadS:i.spreadS,leadChanges:i.leadChanges,overtakes:i.overtakes,lateLeadChange:i.lateLeadChange}}}var vs="#14183c";function kh(n,{course:t,round:e,plan:i,speed:s=1}){let r=document.createElement("canvas");r.style.cssText="position:absolute;inset:0;width:100%;height:100%;display:block",n.appendChild(r);let o=r.getContext("2d",{alpha:!1}),a=e?.runners||[],l=t?.points||[],h=0,u=!1,g=!1,f=0,c="idle",d=0,M=0,m=-1,p=null,S=null,_=[],v=null,L=1/0,E=-1/0,T=1/0,R=-1/0;for(let B of l)L=Math.min(L,B[0]),E=Math.max(E,B[0]),T=Math.min(T,B[2]),R=Math.max(R,B[2]);function x(){let B=Math.min(1,1100/Math.max(1,n.clientWidth));r.width=Math.round(n.clientWidth*B),r.height=Math.round(n.clientHeight*B)}x();let y=new ResizeObserver(x);y.observe(n);function b(B,F){let q=r.width,st=r.height,P=st*.16,ft=st*.24,Ft=q*.08,U=Math.min((q-Ft*2-q*.22)/(E-L||1),(st-P-ft)/(R-T||1)),Y=Ft+(q-Ft*2-q*.22-(E-L)*U)/2,Q=P+(st-P-ft-(R-T)*U)/2;return[Y+(B-L)*U,Q+(F-T)*U,U]}function A(B){if(!l.length)return[0,0];let F=Math.max(0,Math.min(l.length-1,B/5e3*(l.length-1))),q=Math.floor(F),st=Math.min(l.length-1,q+1),P=F-q;return[l[q][0]+(l[st][0]-l[q][0])*P,l[q][2]+(l[st][2]-l[q][2])*P]}let w=null;function I(){let B=r.width,F=r.height;w=document.createElement("canvas"),w.width=B,w.height=F;let q=w.getContext("2d"),st=q.createLinearGradient(0,0,0,F);st.addColorStop(0,"#45cf86"),st.addColorStop(1,"#1f9e5c"),q.fillStyle=st,q.fillRect(0,0,B,F),q.fillStyle="rgba(255,255,255,.05)";let P=B/1920;for(let ft=-F;ft<B;ft+=160*P)q.beginPath(),q.moveTo(ft,0),q.lineTo(ft+80*P,0),q.lineTo(ft+80*P+F*.5,F),q.lineTo(ft+F*.5,F),q.fill();if(l.length){let ft=new Path2D;l.forEach((Q,W)=>{let[lt,ot]=b(Q[0],Q[2]);W?ft.lineTo(lt,ot):ft.moveTo(lt,ot)});let Ft=b(0,0)[2];q.lineCap="round",q.lineJoin="round",q.strokeStyle=vs,q.lineWidth=Math.max(16,Ft*14),q.stroke(ft),q.strokeStyle="#fff",q.lineWidth=Math.max(12,Ft*11),q.stroke(ft),q.strokeStyle="#6f84a8",q.lineWidth=Math.max(8,Ft*8),q.stroke(ft);let[U,Y]=b(...t.finish?[t.finish[0],t.finish[1]]:[l.at(-1)[0],l.at(-1)[2]]);q.save(),q.translate(U,Y);for(let Q=-2;Q<2;Q++)for(let W=-1;W<1;W++)q.fillStyle=Q+W&1?"#fff":vs,q.fillRect(Q*8,W*8,8,8);q.restore()}}function O(){let B=r.width,F=r.height;(!w||w.width!==B||w.height!==F)&&I(),o.drawImage(w,0,0);let q=i?xs(i.timeMap,f):0,st=(i?.runners||[]).map(W=>({id:W.id,m:$n(W.progress,q),done:q>=W.officialS,f:W.officialS}));st.sort((W,lt)=>lt.m-W.m||W.f-lt.f);let P=Math.max(14,B/90);for(let W of[...st].reverse()){let lt=a.find(pt=>pt.id===W.id),[ot,wt]=b(...A(W.m));o.beginPath(),o.arc(ot,wt+4,P,0,Math.PI*2),o.fillStyle="rgba(0,0,0,.25)",o.fill(),o.beginPath(),o.arc(ot,wt,P,0,Math.PI*2),o.fillStyle=lt?.colour?.primary||"#fff",o.fill(),o.lineWidth=P*.28,o.strokeStyle=vs,o.stroke(),o.fillStyle="#fff",o.font=`${Math.round(P*1.15)}px "Lilita One", sans-serif`,o.textAlign="center",o.textBaseline="middle",o.lineWidth=P*.25,o.strokeText(String(lt?.lane??""),ot,wt+1),o.fillText(String(lt?.lane??""),ot,wt+1)}let ft=B*.77,Ft=F*.16,U=F*.075;o.font=`${Math.round(F*.035)}px "Lilita One", sans-serif`,o.textAlign="left",o.textBaseline="middle",st.forEach((W,lt)=>{let ot=a.find(pt=>pt.id===W.id),wt=Ft+lt*U;o.save(),o.translate(ft,wt),o.transform(1,0,-.14,1,0,0),o.fillStyle=vs,o.fillRect(4,6,B*.2,U*.82),o.fillStyle=lt===0?"#ffd23f":"#2a62e0",o.fillRect(0,0,B*.2,U*.82),o.fillStyle=ot?.colour?.primary||"#fff",o.fillRect(0,0,B*.012,U*.82),o.restore(),o.fillStyle=lt===0?vs:"#fff",o.fillText(`${lt+1}  ${(ot?.shortName||ot?.nickname||W.id).slice(0,16)}`,ft+B*.02,wt+U*.41)}),o.font=`${Math.round(F*.04)}px "Lilita One", sans-serif`,o.textAlign="left";let Y=Math.floor(q),Q=`${Math.floor(Y/60)}:${String(Y%60).padStart(2,"0")}`;o.lineWidth=8,o.strokeStyle=vs,o.strokeText(Q,ft,Ft-F*.05),o.fillStyle="#ffd23f",o.fillText(Q,ft,Ft-F*.05)}function D(B){if(g)return;let F=d?Math.min(.1,(B-d)/1e3):0;if(d=B,c==="race"&&!u){for(f+=F*s;_.length&&_[0].broadcastS<=f;){let q=_.shift();try{p?.(q)}catch(st){console.warn(st)}}if(f>=(i.timeMap.durationS||0)+1.5){c="done";let q=S;S=null,q?.()}}B-M>45&&(f!==m||!w)&&(M=B,m=f,O()),h=requestAnimationFrame(D)}return h=requestAnimationFrame(D),{kind:"2d",playIntro(B){setTimeout(()=>B?.(),10)},playRace(B,F){p=B,S=F,_=[...i.events||[],...i.commentary||[]].sort((q,st)=>q.broadcastS-st.broadcastS),f=0,c="race"},showPodium(B){v=B},setPaused(B){u=!!B},seek(B){for(f=Math.max(0,Number(B)||0);_.length&&_[0].broadcastS<=f;)_.shift();c="race"},get broadcastTime(){return c==="race"||c==="done"?f:-1},dispose(){g=!0,cancelAnimationFrame(h),y.disconnect(),r.remove()}}}var Vi={};sf(Vi,{createRaceView:()=>hv});var Zc="170";var uf=0,Dh=1,ff=2;var Yd=1,Jc=2,pi=3,Fi=0,un=1,je=2,Ni=0,Hs=1,Uh=2,Nh=3,Oh=4,pf=5,is=100,mf=101,gf=102,yf=103,xf=104,vf=200,_f=201,Mf=202,bf=203,Al=204,Rl=205,Sf=206,wf=207,Ef=208,Tf=209,Af=210,Rf=211,Cf=212,If=213,Pf=214,Cl=0,Il=1,Pl=2,Ws=3,Ll=4,kl=5,Dl=6,Ul=7,Zd=0,Lf=1,kf=2,ii=0,Df=1,Uf=2,Nf=3,Of=4,Ff=5,Bf=6,zf=7;var Jd=300,Xs=301,qs=302,Nl=303,Ol=304,Aa=306,as=1e3,rs=1001,Fl=1002,Sn=1003,Hf=1004;var lo=1005;var ei=1006,qa=1007;var os=1008;var xi=1009,Kd=1010,jd=1011,Ir=1012,Kc=1013,ls=1014,ni=1015,Gr=1016,jc=1017,Qc=1018,Ys=1020,Qd=35902,tu=1021,eu=1022,Ln=1023,nu=1024,iu=1025,$s=1026,Zs=1027,th=1028,eh=1029,su=1030,nh=1031;var ih=1033,zo=33776,Ho=33777,$o=33778,Vo=33779,Bl=35840,zl=35841,Hl=35842,$l=35843,Vl=36196,Gl=37492,Wl=37496,Xl=37808,ql=37809,Yl=37810,Zl=37811,Jl=37812,Kl=37813,jl=37814,Ql=37815,tc=37816,ec=37817,nc=37818,ic=37819,sc=37820,rc=37821,Go=36492,oc=36494,ac=36495,ru=36283,lc=36284,cc=36285,hc=36286;var Wo=2300,dc=2301,Ya=2302,Fh=2400,Bh=2401,zh=2402;var $f=3200,Vf=3201;var ou=0,Gf=1,Di="",hn="srgb",tr="srgb-linear",Ra="linear",ke="srgb";var _s=7680;var Hh=519,Wf=512,Xf=513,qf=514,au=515,Yf=516,Zf=517,Jf=518,Kf=519,uc=35044;var $h="300 es",gi=2e3,Xo=2001,Bi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let i=this._listeners[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},gn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Vh=1234567,Er=Math.PI/180,Pr=180/Math.PI;function si(){let n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(gn[n&255]+gn[n>>8&255]+gn[n>>16&255]+gn[n>>24&255]+"-"+gn[t&255]+gn[t>>8&255]+"-"+gn[t>>16&15|64]+gn[t>>24&255]+"-"+gn[e&63|128]+gn[e>>8&255]+"-"+gn[e>>16&255]+gn[e>>24&255]+gn[i&255]+gn[i>>8&255]+gn[i>>16&255]+gn[i>>24&255]).toLowerCase()}function dn(n,t,e){return Math.max(t,Math.min(e,n))}function sh(n,t){return(n%t+t)%t}function jf(n,t,e,i,s){return i+(n-t)*(s-i)/(e-t)}function Qf(n,t,e){return n!==t?(e-n)/(t-n):0}function Tr(n,t,e){return(1-e)*n+e*t}function tp(n,t,e,i){return Tr(n,t,1-Math.exp(-e*i))}function ep(n,t=1){return t-Math.abs(sh(n,t*2)-t)}function np(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function ip(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function sp(n,t){return n+Math.floor(Math.random()*(t-n+1))}function rp(n,t){return n+Math.random()*(t-n)}function op(n){return n*(.5-Math.random())}function ap(n){n!==void 0&&(Vh=n);let t=Vh+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function lp(n){return n*Er}function cp(n){return n*Pr}function hp(n){return(n&n-1)===0&&n!==0}function dp(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function up(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function fp(n,t,e,i,s){let r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),h=r((t+i)/2),u=o((t+i)/2),g=r((t-i)/2),f=o((t-i)/2),c=r((i-t)/2),d=o((i-t)/2);switch(s){case"XYX":n.set(a*u,l*g,l*f,a*h);break;case"YZY":n.set(l*f,a*u,l*g,a*h);break;case"ZXZ":n.set(l*g,l*f,a*u,a*h);break;case"XZX":n.set(a*u,l*d,l*c,a*h);break;case"YXY":n.set(l*c,a*u,l*d,a*h);break;case"ZYZ":n.set(l*d,l*c,a*u,a*h);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Xn(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Le(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var lu={DEG2RAD:Er,RAD2DEG:Pr,generateUUID:si,clamp:dn,euclideanModulo:sh,mapLinear:jf,inverseLerp:Qf,lerp:Tr,damp:tp,pingpong:ep,smoothstep:np,smootherstep:ip,randInt:sp,randFloat:rp,randFloatSpread:op,seededRandom:ap,degToRad:lp,radToDeg:cp,isPowerOfTwo:hp,ceilPowerOfTwo:dp,floorPowerOfTwo:up,setQuaternionFromProperEuler:fp,normalize:Le,denormalize:Xn},zt=class n{constructor(t=0,e=0){n.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(dn(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Me=class n{constructor(t,e,i,s,r,o,a,l,h){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,h)}set(t,e,i,s,r,o,a,l,h){let u=this.elements;return u[0]=t,u[1]=s,u[2]=a,u[3]=e,u[4]=r,u[5]=l,u[6]=i,u[7]=o,u[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[3],l=i[6],h=i[1],u=i[4],g=i[7],f=i[2],c=i[5],d=i[8],M=s[0],m=s[3],p=s[6],S=s[1],_=s[4],v=s[7],L=s[2],E=s[5],T=s[8];return r[0]=o*M+a*S+l*L,r[3]=o*m+a*_+l*E,r[6]=o*p+a*v+l*T,r[1]=h*M+u*S+g*L,r[4]=h*m+u*_+g*E,r[7]=h*p+u*v+g*T,r[2]=f*M+c*S+d*L,r[5]=f*m+c*_+d*E,r[8]=f*p+c*v+d*T,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],h=t[7],u=t[8];return e*o*u-e*a*h-i*r*u+i*a*l+s*r*h-s*o*l}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],h=t[7],u=t[8],g=u*o-a*h,f=a*l-u*r,c=h*r-o*l,d=e*g+i*f+s*c;if(d===0)return this.set(0,0,0,0,0,0,0,0,0);let M=1/d;return t[0]=g*M,t[1]=(s*h-u*i)*M,t[2]=(a*i-s*o)*M,t[3]=f*M,t[4]=(u*e-s*l)*M,t[5]=(s*r-a*e)*M,t[6]=c*M,t[7]=(i*l-h*e)*M,t[8]=(o*e-i*r)*M,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,o,a){let l=Math.cos(r),h=Math.sin(r);return this.set(i*l,i*h,-i*(l*o+h*a)+o+t,-s*h,s*l,-s*(-h*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Za.makeScale(t,e)),this}rotate(t){return this.premultiply(Za.makeRotation(-t)),this}translate(t,e){return this.premultiply(Za.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Za=new Me;function cu(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function qo(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function pp(){let n=qo("canvas");return n.style.display="block",n}var Gh={};function Sr(n){n in Gh||(Gh[n]=!0,console.warn(n))}function mp(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}function gp(n){let t=n.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function yp(n){let t=n.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var Ae={enabled:!0,workingColorSpace:tr,spaces:{},convert:function(n,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===ke&&(n.r=yi(n.r),n.g=yi(n.g),n.b=yi(n.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(n.applyMatrix3(this.spaces[t].toXYZ),n.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===ke&&(n.r=Vs(n.r),n.g=Vs(n.g),n.b=Vs(n.b))),n},fromWorkingColorSpace:function(n,t){return this.convert(n,this.workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===Di?Ra:this.spaces[n].transfer},getLuminanceCoefficients:function(n,t=this.workingColorSpace){return n.fromArray(this.spaces[t].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,t,e){return n.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function yi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Vs(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Wh=[.64,.33,.3,.6,.15,.06],Xh=[.2126,.7152,.0722],qh=[.3127,.329],Yh=new Me().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Zh=new Me().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Ae.define({[tr]:{primaries:Wh,whitePoint:qh,transfer:Ra,toXYZ:Yh,fromXYZ:Zh,luminanceCoefficients:Xh,workingColorSpaceConfig:{unpackColorSpace:hn},outputColorSpaceConfig:{drawingBufferColorSpace:hn}},[hn]:{primaries:Wh,whitePoint:qh,transfer:ke,toXYZ:Yh,fromXYZ:Zh,luminanceCoefficients:Xh,outputColorSpaceConfig:{drawingBufferColorSpace:hn}}});var Ms,fc=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Ms===void 0&&(Ms=qo("canvas")),Ms.width=t.width,Ms.height=t.height;let i=Ms.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=Ms}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=qo("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=yi(r[o]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(yi(e[i]/255)*255):e[i]=yi(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},xp=0,Yo=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:xp++}),this.uuid=si(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Ja(s[o].image)):r.push(Ja(s[o]))}else r=Ja(s);i.url=r}return e||(t.images[this.uuid]=i),i}};function Ja(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?fc.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var vp=0,An=class n extends Bi{constructor(t=n.DEFAULT_IMAGE,e=n.DEFAULT_MAPPING,i=rs,s=rs,r=ei,o=os,a=Ln,l=xi,h=n.DEFAULT_ANISOTROPY,u=Di){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:vp++}),this.uuid=si(),this.name="",this.source=new Yo(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=h,this.format=a,this.internalFormat=null,this.type=l,this.offset=new zt(0,0),this.repeat=new zt(1,1),this.center=new zt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Me,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Jd)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case as:t.x=t.x-Math.floor(t.x);break;case rs:t.x=t.x<0?0:1;break;case Fl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case as:t.y=t.y-Math.floor(t.y);break;case rs:t.y=t.y<0?0:1;break;case Fl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};An.DEFAULT_IMAGE=null;An.DEFAULT_MAPPING=Jd;An.DEFAULT_ANISOTROPY=1;var Ze=class n{constructor(t=0,e=0,i=0,s=1){n.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r,l=t.elements,h=l[0],u=l[4],g=l[8],f=l[1],c=l[5],d=l[9],M=l[2],m=l[6],p=l[10];if(Math.abs(u-f)<.01&&Math.abs(g-M)<.01&&Math.abs(d-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(g+M)<.1&&Math.abs(d+m)<.1&&Math.abs(h+c+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let _=(h+1)/2,v=(c+1)/2,L=(p+1)/2,E=(u+f)/4,T=(g+M)/4,R=(d+m)/4;return _>v&&_>L?_<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(_),s=E/i,r=T/i):v>L?v<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),i=E/s,r=R/s):L<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(L),i=T/r,s=R/r),this.set(i,s,r,e),this}let S=Math.sqrt((m-d)*(m-d)+(g-M)*(g-M)+(f-u)*(f-u));return Math.abs(S)<.001&&(S=1),this.x=(m-d)/S,this.y=(g-M)/S,this.z=(f-u)/S,this.w=Math.acos((h+c+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},pc=class extends Bi{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Ze(0,0,t,e),this.scissorTest=!1,this.viewport=new Ze(0,0,t,e);let s={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ei,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);let r=new An(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];let o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new Yo(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},vi=class extends pc{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},Zo=class extends An{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Sn,this.minFilter=Sn,this.wrapR=rs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var mc=class extends An{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Sn,this.minFilter=Sn,this.wrapR=rs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ri=class{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,o,a){let l=i[s+0],h=i[s+1],u=i[s+2],g=i[s+3],f=r[o+0],c=r[o+1],d=r[o+2],M=r[o+3];if(a===0){t[e+0]=l,t[e+1]=h,t[e+2]=u,t[e+3]=g;return}if(a===1){t[e+0]=f,t[e+1]=c,t[e+2]=d,t[e+3]=M;return}if(g!==M||l!==f||h!==c||u!==d){let m=1-a,p=l*f+h*c+u*d+g*M,S=p>=0?1:-1,_=1-p*p;if(_>Number.EPSILON){let L=Math.sqrt(_),E=Math.atan2(L,p*S);m=Math.sin(m*E)/L,a=Math.sin(a*E)/L}let v=a*S;if(l=l*m+f*v,h=h*m+c*v,u=u*m+d*v,g=g*m+M*v,m===1-a){let L=1/Math.sqrt(l*l+h*h+u*u+g*g);l*=L,h*=L,u*=L,g*=L}}t[e]=l,t[e+1]=h,t[e+2]=u,t[e+3]=g}static multiplyQuaternionsFlat(t,e,i,s,r,o){let a=i[s],l=i[s+1],h=i[s+2],u=i[s+3],g=r[o],f=r[o+1],c=r[o+2],d=r[o+3];return t[e]=a*d+u*g+l*c-h*f,t[e+1]=l*d+u*f+h*g-a*c,t[e+2]=h*d+u*c+a*f-l*g,t[e+3]=u*d-a*g-l*f-h*c,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,h=a(i/2),u=a(s/2),g=a(r/2),f=l(i/2),c=l(s/2),d=l(r/2);switch(o){case"XYZ":this._x=f*u*g+h*c*d,this._y=h*c*g-f*u*d,this._z=h*u*d+f*c*g,this._w=h*u*g-f*c*d;break;case"YXZ":this._x=f*u*g+h*c*d,this._y=h*c*g-f*u*d,this._z=h*u*d-f*c*g,this._w=h*u*g+f*c*d;break;case"ZXY":this._x=f*u*g-h*c*d,this._y=h*c*g+f*u*d,this._z=h*u*d+f*c*g,this._w=h*u*g-f*c*d;break;case"ZYX":this._x=f*u*g-h*c*d,this._y=h*c*g+f*u*d,this._z=h*u*d-f*c*g,this._w=h*u*g+f*c*d;break;case"YZX":this._x=f*u*g+h*c*d,this._y=h*c*g+f*u*d,this._z=h*u*d-f*c*g,this._w=h*u*g-f*c*d;break;case"XZY":this._x=f*u*g-h*c*d,this._y=h*c*g-f*u*d,this._z=h*u*d+f*c*g,this._w=h*u*g+f*c*d;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],h=e[2],u=e[6],g=e[10],f=i+a+g;if(f>0){let c=.5/Math.sqrt(f+1);this._w=.25/c,this._x=(u-l)*c,this._y=(r-h)*c,this._z=(o-s)*c}else if(i>a&&i>g){let c=2*Math.sqrt(1+i-a-g);this._w=(u-l)/c,this._x=.25*c,this._y=(s+o)/c,this._z=(r+h)/c}else if(a>g){let c=2*Math.sqrt(1+a-i-g);this._w=(r-h)/c,this._x=(s+o)/c,this._y=.25*c,this._z=(l+u)/c}else{let c=2*Math.sqrt(1+g-i-a);this._w=(o-s)/c,this._x=(r+h)/c,this._y=(l+u)/c,this._z=.25*c}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(dn(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,h=e._z,u=e._w;return this._x=i*u+o*a+s*h-r*l,this._y=s*u+o*l+r*a-i*h,this._z=r*u+o*h+i*l-s*a,this._w=o*u-i*a-s*l-r*h,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let i=this._x,s=this._y,r=this._z,o=this._w,a=o*t._w+i*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let c=1-e;return this._w=c*o+e*this._w,this._x=c*i+e*this._x,this._y=c*s+e*this._y,this._z=c*r+e*this._z,this.normalize(),this}let h=Math.sqrt(l),u=Math.atan2(h,a),g=Math.sin((1-e)*u)/h,f=Math.sin(e*u)/h;return this._w=o*g+this._w*f,this._x=i*g+this._x*f,this._y=s*g+this._y*f,this._z=r*g+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},$=class n{constructor(t=0,e=0,i=0){n.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Jh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Jh.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,h=2*(o*s-a*i),u=2*(a*e-r*s),g=2*(r*i-o*e);return this.x=e+l*h+o*g-a*u,this.y=i+l*u+a*h-r*g,this.z=s+l*g+r*u-o*h,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Ka.copy(this).projectOnVector(t),this.sub(Ka)}reflect(t){return this.sub(Ka.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(dn(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Ka=new $,Jh=new ri,_i=class{constructor(t=new $(1/0,1/0,1/0),e=new $(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Vn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Vn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=Vn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Vn):Vn.fromBufferAttribute(r,o),Vn.applyMatrix4(t.matrixWorld),this.expandByPoint(Vn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),co.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),co.copy(i.boundingBox)),co.applyMatrix4(t.matrixWorld),this.union(co)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Vn),Vn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(fr),ho.subVectors(this.max,fr),bs.subVectors(t.a,fr),Ss.subVectors(t.b,fr),ws.subVectors(t.c,fr),Ri.subVectors(Ss,bs),Ci.subVectors(ws,Ss),Ji.subVectors(bs,ws);let e=[0,-Ri.z,Ri.y,0,-Ci.z,Ci.y,0,-Ji.z,Ji.y,Ri.z,0,-Ri.x,Ci.z,0,-Ci.x,Ji.z,0,-Ji.x,-Ri.y,Ri.x,0,-Ci.y,Ci.x,0,-Ji.y,Ji.x,0];return!ja(e,bs,Ss,ws,ho)||(e=[1,0,0,0,1,0,0,0,1],!ja(e,bs,Ss,ws,ho))?!1:(uo.crossVectors(Ri,Ci),e=[uo.x,uo.y,uo.z],ja(e,bs,Ss,ws,ho))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Vn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Vn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ci[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ci[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ci[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ci[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ci[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ci[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ci[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ci[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ci),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},ci=[new $,new $,new $,new $,new $,new $,new $,new $],Vn=new $,co=new _i,bs=new $,Ss=new $,ws=new $,Ri=new $,Ci=new $,Ji=new $,fr=new $,ho=new $,uo=new $,Ki=new $;function ja(n,t,e,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Ki.fromArray(n,r);let a=s.x*Math.abs(Ki.x)+s.y*Math.abs(Ki.y)+s.z*Math.abs(Ki.z),l=t.dot(Ki),h=e.dot(Ki),u=i.dot(Ki);if(Math.max(-Math.max(l,h,u),Math.min(l,h,u))>a)return!1}return!0}var _p=new _i,pr=new $,Qa=new $,zi=class{constructor(t=new $,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):_p.setFromPoints(t).getCenter(i);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;pr.subVectors(t,this.center);let e=pr.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(pr,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Qa.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(pr.copy(t.center).add(Qa)),this.expandByPoint(pr.copy(t.center).sub(Qa))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},hi=new $,tl=new $,fo=new $,Ii=new $,el=new $,po=new $,nl=new $,Jo=class{constructor(t=new $,e=new $(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,hi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=hi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(hi.copy(this.origin).addScaledVector(this.direction,e),hi.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){tl.copy(t).add(e).multiplyScalar(.5),fo.copy(e).sub(t).normalize(),Ii.copy(this.origin).sub(tl);let r=t.distanceTo(e)*.5,o=-this.direction.dot(fo),a=Ii.dot(this.direction),l=-Ii.dot(fo),h=Ii.lengthSq(),u=Math.abs(1-o*o),g,f,c,d;if(u>0)if(g=o*l-a,f=o*a-l,d=r*u,g>=0)if(f>=-d)if(f<=d){let M=1/u;g*=M,f*=M,c=g*(g+o*f+2*a)+f*(o*g+f+2*l)+h}else f=r,g=Math.max(0,-(o*f+a)),c=-g*g+f*(f+2*l)+h;else f=-r,g=Math.max(0,-(o*f+a)),c=-g*g+f*(f+2*l)+h;else f<=-d?(g=Math.max(0,-(-o*r+a)),f=g>0?-r:Math.min(Math.max(-r,-l),r),c=-g*g+f*(f+2*l)+h):f<=d?(g=0,f=Math.min(Math.max(-r,-l),r),c=f*(f+2*l)+h):(g=Math.max(0,-(o*r+a)),f=g>0?r:Math.min(Math.max(-r,-l),r),c=-g*g+f*(f+2*l)+h);else f=o>0?-r:r,g=Math.max(0,-(o*f+a)),c=-g*g+f*(f+2*l)+h;return i&&i.copy(this.origin).addScaledVector(this.direction,g),s&&s.copy(tl).addScaledVector(fo,f),c}intersectSphere(t,e){hi.subVectors(t.center,this.origin);let i=hi.dot(this.direction),s=hi.dot(hi)-i*i,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,o,a,l,h=1/this.direction.x,u=1/this.direction.y,g=1/this.direction.z,f=this.origin;return h>=0?(i=(t.min.x-f.x)*h,s=(t.max.x-f.x)*h):(i=(t.max.x-f.x)*h,s=(t.min.x-f.x)*h),u>=0?(r=(t.min.y-f.y)*u,o=(t.max.y-f.y)*u):(r=(t.max.y-f.y)*u,o=(t.min.y-f.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),g>=0?(a=(t.min.z-f.z)*g,l=(t.max.z-f.z)*g):(a=(t.max.z-f.z)*g,l=(t.min.z-f.z)*g),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,hi)!==null}intersectTriangle(t,e,i,s,r){el.subVectors(e,t),po.subVectors(i,t),nl.crossVectors(el,po);let o=this.direction.dot(nl),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ii.subVectors(this.origin,t);let l=a*this.direction.dot(po.crossVectors(Ii,po));if(l<0)return null;let h=a*this.direction.dot(el.cross(Ii));if(h<0||l+h>o)return null;let u=-a*Ii.dot(nl);return u<0?null:this.at(u/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ee=class n{constructor(t,e,i,s,r,o,a,l,h,u,g,f,c,d,M,m){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,h,u,g,f,c,d,M,m)}set(t,e,i,s,r,o,a,l,h,u,g,f,c,d,M,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=i,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=h,p[6]=u,p[10]=g,p[14]=f,p[3]=c,p[7]=d,p[11]=M,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,i=t.elements,s=1/Es.setFromMatrixColumn(t,0).length(),r=1/Es.setFromMatrixColumn(t,1).length(),o=1/Es.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),h=Math.sin(s),u=Math.cos(r),g=Math.sin(r);if(t.order==="XYZ"){let f=o*u,c=o*g,d=a*u,M=a*g;e[0]=l*u,e[4]=-l*g,e[8]=h,e[1]=c+d*h,e[5]=f-M*h,e[9]=-a*l,e[2]=M-f*h,e[6]=d+c*h,e[10]=o*l}else if(t.order==="YXZ"){let f=l*u,c=l*g,d=h*u,M=h*g;e[0]=f+M*a,e[4]=d*a-c,e[8]=o*h,e[1]=o*g,e[5]=o*u,e[9]=-a,e[2]=c*a-d,e[6]=M+f*a,e[10]=o*l}else if(t.order==="ZXY"){let f=l*u,c=l*g,d=h*u,M=h*g;e[0]=f-M*a,e[4]=-o*g,e[8]=d+c*a,e[1]=c+d*a,e[5]=o*u,e[9]=M-f*a,e[2]=-o*h,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let f=o*u,c=o*g,d=a*u,M=a*g;e[0]=l*u,e[4]=d*h-c,e[8]=f*h+M,e[1]=l*g,e[5]=M*h+f,e[9]=c*h-d,e[2]=-h,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let f=o*l,c=o*h,d=a*l,M=a*h;e[0]=l*u,e[4]=M-f*g,e[8]=d*g+c,e[1]=g,e[5]=o*u,e[9]=-a*u,e[2]=-h*u,e[6]=c*g+d,e[10]=f-M*g}else if(t.order==="XZY"){let f=o*l,c=o*h,d=a*l,M=a*h;e[0]=l*u,e[4]=-g,e[8]=h*u,e[1]=f*g+M,e[5]=o*u,e[9]=c*g-d,e[2]=d*g-c,e[6]=a*u,e[10]=M*g+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Mp,t,bp)}lookAt(t,e,i){let s=this.elements;return In.subVectors(t,e),In.lengthSq()===0&&(In.z=1),In.normalize(),Pi.crossVectors(i,In),Pi.lengthSq()===0&&(Math.abs(i.z)===1?In.x+=1e-4:In.z+=1e-4,In.normalize(),Pi.crossVectors(i,In)),Pi.normalize(),mo.crossVectors(In,Pi),s[0]=Pi.x,s[4]=mo.x,s[8]=In.x,s[1]=Pi.y,s[5]=mo.y,s[9]=In.y,s[2]=Pi.z,s[6]=mo.z,s[10]=In.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[4],l=i[8],h=i[12],u=i[1],g=i[5],f=i[9],c=i[13],d=i[2],M=i[6],m=i[10],p=i[14],S=i[3],_=i[7],v=i[11],L=i[15],E=s[0],T=s[4],R=s[8],x=s[12],y=s[1],b=s[5],A=s[9],w=s[13],I=s[2],O=s[6],D=s[10],B=s[14],F=s[3],q=s[7],st=s[11],P=s[15];return r[0]=o*E+a*y+l*I+h*F,r[4]=o*T+a*b+l*O+h*q,r[8]=o*R+a*A+l*D+h*st,r[12]=o*x+a*w+l*B+h*P,r[1]=u*E+g*y+f*I+c*F,r[5]=u*T+g*b+f*O+c*q,r[9]=u*R+g*A+f*D+c*st,r[13]=u*x+g*w+f*B+c*P,r[2]=d*E+M*y+m*I+p*F,r[6]=d*T+M*b+m*O+p*q,r[10]=d*R+M*A+m*D+p*st,r[14]=d*x+M*w+m*B+p*P,r[3]=S*E+_*y+v*I+L*F,r[7]=S*T+_*b+v*O+L*q,r[11]=S*R+_*A+v*D+L*st,r[15]=S*x+_*w+v*B+L*P,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],h=t[13],u=t[2],g=t[6],f=t[10],c=t[14],d=t[3],M=t[7],m=t[11],p=t[15];return d*(+r*l*g-s*h*g-r*a*f+i*h*f+s*a*c-i*l*c)+M*(+e*l*c-e*h*f+r*o*f-s*o*c+s*h*u-r*l*u)+m*(+e*h*g-e*a*c-r*o*g+i*o*c+r*a*u-i*h*u)+p*(-s*a*u-e*l*g+e*a*f+s*o*g-i*o*f+i*l*u)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],h=t[7],u=t[8],g=t[9],f=t[10],c=t[11],d=t[12],M=t[13],m=t[14],p=t[15],S=g*m*h-M*f*h+M*l*c-a*m*c-g*l*p+a*f*p,_=d*f*h-u*m*h-d*l*c+o*m*c+u*l*p-o*f*p,v=u*M*h-d*g*h+d*a*c-o*M*c-u*a*p+o*g*p,L=d*g*l-u*M*l-d*a*f+o*M*f+u*a*m-o*g*m,E=e*S+i*_+s*v+r*L;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let T=1/E;return t[0]=S*T,t[1]=(M*f*r-g*m*r-M*s*c+i*m*c+g*s*p-i*f*p)*T,t[2]=(a*m*r-M*l*r+M*s*h-i*m*h-a*s*p+i*l*p)*T,t[3]=(g*l*r-a*f*r-g*s*h+i*f*h+a*s*c-i*l*c)*T,t[4]=_*T,t[5]=(u*m*r-d*f*r+d*s*c-e*m*c-u*s*p+e*f*p)*T,t[6]=(d*l*r-o*m*r-d*s*h+e*m*h+o*s*p-e*l*p)*T,t[7]=(o*f*r-u*l*r+u*s*h-e*f*h-o*s*c+e*l*c)*T,t[8]=v*T,t[9]=(d*g*r-u*M*r-d*i*c+e*M*c+u*i*p-e*g*p)*T,t[10]=(o*M*r-d*a*r+d*i*h-e*M*h-o*i*p+e*a*p)*T,t[11]=(u*a*r-o*g*r-u*i*h+e*g*h+o*i*c-e*a*c)*T,t[12]=L*T,t[13]=(u*M*s-d*g*s+d*i*f-e*M*f-u*i*m+e*g*m)*T,t[14]=(d*a*s-o*M*s-d*i*l+e*M*l+o*i*m-e*a*m)*T,t[15]=(o*g*s-u*a*s+u*i*l-e*g*l-o*i*f+e*a*f)*T,this}scale(t){let e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),s=Math.sin(e),r=1-i,o=t.x,a=t.y,l=t.z,h=r*o,u=r*a;return this.set(h*o+i,h*a-s*l,h*l+s*a,0,h*a+s*l,u*a+i,u*l-s*o,0,h*l-s*a,u*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,h=r+r,u=o+o,g=a+a,f=r*h,c=r*u,d=r*g,M=o*u,m=o*g,p=a*g,S=l*h,_=l*u,v=l*g,L=i.x,E=i.y,T=i.z;return s[0]=(1-(M+p))*L,s[1]=(c+v)*L,s[2]=(d-_)*L,s[3]=0,s[4]=(c-v)*E,s[5]=(1-(f+p))*E,s[6]=(m+S)*E,s[7]=0,s[8]=(d+_)*T,s[9]=(m-S)*T,s[10]=(1-(f+M))*T,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){let s=this.elements,r=Es.set(s[0],s[1],s[2]).length(),o=Es.set(s[4],s[5],s[6]).length(),a=Es.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Gn.copy(this);let h=1/r,u=1/o,g=1/a;return Gn.elements[0]*=h,Gn.elements[1]*=h,Gn.elements[2]*=h,Gn.elements[4]*=u,Gn.elements[5]*=u,Gn.elements[6]*=u,Gn.elements[8]*=g,Gn.elements[9]*=g,Gn.elements[10]*=g,e.setFromRotationMatrix(Gn),i.x=r,i.y=o,i.z=a,this}makePerspective(t,e,i,s,r,o,a=gi){let l=this.elements,h=2*r/(e-t),u=2*r/(i-s),g=(e+t)/(e-t),f=(i+s)/(i-s),c,d;if(a===gi)c=-(o+r)/(o-r),d=-2*o*r/(o-r);else if(a===Xo)c=-o/(o-r),d=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=g,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=c,l[14]=d,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,s,r,o,a=gi){let l=this.elements,h=1/(e-t),u=1/(i-s),g=1/(o-r),f=(e+t)*h,c=(i+s)*u,d,M;if(a===gi)d=(o+r)*g,M=-2*g;else if(a===Xo)d=r*g,M=-1*g;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*h,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-c,l[2]=0,l[6]=0,l[10]=M,l[14]=-d,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}},Es=new $,Gn=new Ee,Mp=new $(0,0,0),bp=new $(1,1,1),Pi=new $,mo=new $,In=new $,Kh=new Ee,jh=new ri,qn=class n{constructor(t=0,e=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],h=s[5],u=s[9],g=s[2],f=s[6],c=s[10];switch(e){case"XYZ":this._y=Math.asin(dn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,c),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,h),this._z=0);break;case"YXZ":this._x=Math.asin(-dn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,c),this._z=Math.atan2(l,h)):(this._y=Math.atan2(-g,r),this._z=0);break;case"ZXY":this._x=Math.asin(dn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-g,c),this._z=Math.atan2(-o,h)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-dn(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(f,c),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,h));break;case"YZX":this._z=Math.asin(dn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,h),this._y=Math.atan2(-g,r)):(this._x=0,this._y=Math.atan2(a,c));break;case"XZY":this._z=Math.asin(-dn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,h),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,c),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Kh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Kh,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return jh.setFromEuler(this),this.setFromQuaternion(jh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};qn.DEFAULT_ORDER="XYZ";var Ko=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Sp=0,Qh=new $,Ts=new ri,di=new Ee,go=new $,mr=new $,wp=new $,Ep=new ri,td=new $(1,0,0),ed=new $(0,1,0),nd=new $(0,0,1),id={type:"added"},Tp={type:"removed"},As={type:"childadded",child:null},il={type:"childremoved",child:null},De=class n extends Bi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Sp++}),this.uuid=si(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new $,e=new qn,i=new ri,s=new $(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ee},normalMatrix:{value:new Me}}),this.matrix=new Ee,this.matrixWorld=new Ee,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ko,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ts.setFromAxisAngle(t,e),this.quaternion.multiply(Ts),this}rotateOnWorldAxis(t,e){return Ts.setFromAxisAngle(t,e),this.quaternion.premultiply(Ts),this}rotateX(t){return this.rotateOnAxis(td,t)}rotateY(t){return this.rotateOnAxis(ed,t)}rotateZ(t){return this.rotateOnAxis(nd,t)}translateOnAxis(t,e){return Qh.copy(t).applyQuaternion(this.quaternion),this.position.add(Qh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(td,t)}translateY(t){return this.translateOnAxis(ed,t)}translateZ(t){return this.translateOnAxis(nd,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(di.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?go.copy(t):go.set(t,e,i);let s=this.parent;this.updateWorldMatrix(!0,!1),mr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?di.lookAt(mr,go,this.up):di.lookAt(go,mr,this.up),this.quaternion.setFromRotationMatrix(di),s&&(di.extractRotation(s.matrixWorld),Ts.setFromRotationMatrix(di),this.quaternion.premultiply(Ts.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(id),As.child=t,this.dispatchEvent(As),As.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Tp),il.child=t,this.dispatchEvent(il),il.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),di.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),di.multiply(t.parent.matrixWorld)),t.applyMatrix4(di),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(id),As.child=t,this.dispatchEvent(As),As.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(mr,t,wp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(mr,Ep,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let h=0,u=l.length;h<u;h++){let g=l[h];r(t.shapes,g)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,h=this.material.length;l<h;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),h=o(t.textures),u=o(t.images),g=o(t.shapes),f=o(t.skeletons),c=o(t.animations),d=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),h.length>0&&(i.textures=h),u.length>0&&(i.images=u),g.length>0&&(i.shapes=g),f.length>0&&(i.skeletons=f),c.length>0&&(i.animations=c),d.length>0&&(i.nodes=d)}return i.object=s,i;function o(a){let l=[];for(let h in a){let u=a[h];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}};De.DEFAULT_UP=new $(0,1,0);De.DEFAULT_MATRIX_AUTO_UPDATE=!0;De.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Wn=new $,ui=new $,sl=new $,fi=new $,Rs=new $,Cs=new $,sd=new $,rl=new $,ol=new $,al=new $,ll=new Ze,cl=new Ze,hl=new Ze,Ui=class n{constructor(t=new $,e=new $,i=new $){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),Wn.subVectors(t,e),s.cross(Wn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){Wn.subVectors(s,e),ui.subVectors(i,e),sl.subVectors(t,e);let o=Wn.dot(Wn),a=Wn.dot(ui),l=Wn.dot(sl),h=ui.dot(ui),u=ui.dot(sl),g=o*h-a*a;if(g===0)return r.set(0,0,0),null;let f=1/g,c=(h*l-a*u)*f,d=(o*u-a*l)*f;return r.set(1-c-d,d,c)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,fi)===null?!1:fi.x>=0&&fi.y>=0&&fi.x+fi.y<=1}static getInterpolation(t,e,i,s,r,o,a,l){return this.getBarycoord(t,e,i,s,fi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,fi.x),l.addScaledVector(o,fi.y),l.addScaledVector(a,fi.z),l)}static getInterpolatedAttribute(t,e,i,s,r,o){return ll.setScalar(0),cl.setScalar(0),hl.setScalar(0),ll.fromBufferAttribute(t,e),cl.fromBufferAttribute(t,i),hl.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(ll,r.x),o.addScaledVector(cl,r.y),o.addScaledVector(hl,r.z),o}static isFrontFacing(t,e,i,s){return Wn.subVectors(i,e),ui.subVectors(t,e),Wn.cross(ui).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Wn.subVectors(this.c,this.b),ui.subVectors(this.a,this.b),Wn.cross(ui).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return n.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return n.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,s=this.b,r=this.c,o,a;Rs.subVectors(s,i),Cs.subVectors(r,i),rl.subVectors(t,i);let l=Rs.dot(rl),h=Cs.dot(rl);if(l<=0&&h<=0)return e.copy(i);ol.subVectors(t,s);let u=Rs.dot(ol),g=Cs.dot(ol);if(u>=0&&g<=u)return e.copy(s);let f=l*g-u*h;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),e.copy(i).addScaledVector(Rs,o);al.subVectors(t,r);let c=Rs.dot(al),d=Cs.dot(al);if(d>=0&&c<=d)return e.copy(r);let M=c*h-l*d;if(M<=0&&h>=0&&d<=0)return a=h/(h-d),e.copy(i).addScaledVector(Cs,a);let m=u*d-c*g;if(m<=0&&g-u>=0&&c-d>=0)return sd.subVectors(r,s),a=(g-u)/(g-u+(c-d)),e.copy(s).addScaledVector(sd,a);let p=1/(m+M+f);return o=M*p,a=f*p,e.copy(i).addScaledVector(Rs,o).addScaledVector(Cs,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},hu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Li={h:0,s:0,l:0},yo={h:0,s:0,l:0};function dl(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}var oe=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=hn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ae.toWorkingColorSpace(this,e),this}setRGB(t,e,i,s=Ae.workingColorSpace){return this.r=t,this.g=e,this.b=i,Ae.toWorkingColorSpace(this,s),this}setHSL(t,e,i,s=Ae.workingColorSpace){if(t=sh(t,1),e=dn(e,0,1),i=dn(i,0,1),e===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=dl(o,r,t+1/3),this.g=dl(o,r,t),this.b=dl(o,r,t-1/3)}return Ae.toWorkingColorSpace(this,s),this}setStyle(t,e=hn){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=hn){let i=hu[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=yi(t.r),this.g=yi(t.g),this.b=yi(t.b),this}copyLinearToSRGB(t){return this.r=Vs(t.r),this.g=Vs(t.g),this.b=Vs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=hn){return Ae.fromWorkingColorSpace(yn.copy(this),t),Math.round(dn(yn.r*255,0,255))*65536+Math.round(dn(yn.g*255,0,255))*256+Math.round(dn(yn.b*255,0,255))}getHexString(t=hn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Ae.workingColorSpace){Ae.fromWorkingColorSpace(yn.copy(this),e);let i=yn.r,s=yn.g,r=yn.b,o=Math.max(i,s,r),a=Math.min(i,s,r),l,h,u=(a+o)/2;if(a===o)l=0,h=0;else{let g=o-a;switch(h=u<=.5?g/(o+a):g/(2-o-a),o){case i:l=(s-r)/g+(s<r?6:0);break;case s:l=(r-i)/g+2;break;case r:l=(i-s)/g+4;break}l/=6}return t.h=l,t.s=h,t.l=u,t}getRGB(t,e=Ae.workingColorSpace){return Ae.fromWorkingColorSpace(yn.copy(this),e),t.r=yn.r,t.g=yn.g,t.b=yn.b,t}getStyle(t=hn){Ae.fromWorkingColorSpace(yn.copy(this),t);let e=yn.r,i=yn.g,s=yn.b;return t!==hn?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(Li),this.setHSL(Li.h+t,Li.s+e,Li.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Li),t.getHSL(yo);let i=Tr(Li.h,yo.h,e),s=Tr(Li.s,yo.s,e),r=Tr(Li.l,yo.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},yn=new oe;oe.NAMES=hu;var Ap=0,Mi=class extends Bi{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ap++}),this.uuid=si(),this.name="",this.blending=Hs,this.side=Fi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Al,this.blendDst=Rl,this.blendEquation=is,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new oe(0,0,0),this.blendAlpha=0,this.depthFunc=Ws,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Hh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=_s,this.stencilZFail=_s,this.stencilZPass=_s,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Hs&&(i.blending=this.blending),this.side!==Fi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Al&&(i.blendSrc=this.blendSrc),this.blendDst!==Rl&&(i.blendDst=this.blendDst),this.blendEquation!==is&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ws&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Hh&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==_s&&(i.stencilFail=this.stencilFail),this.stencilZFail!==_s&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==_s&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Un=class extends Mi{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new oe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qn,this.combine=Zd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var tn=new $,xo=new zt,$e=class{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=uc,this.updateRanges=[],this.gpuType=ni,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)xo.fromBufferAttribute(this,e),xo.applyMatrix3(t),this.setXY(e,xo.x,xo.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)tn.fromBufferAttribute(this,e),tn.applyMatrix3(t),this.setXYZ(e,tn.x,tn.y,tn.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)tn.fromBufferAttribute(this,e),tn.applyMatrix4(t),this.setXYZ(e,tn.x,tn.y,tn.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)tn.fromBufferAttribute(this,e),tn.applyNormalMatrix(t),this.setXYZ(e,tn.x,tn.y,tn.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)tn.fromBufferAttribute(this,e),tn.transformDirection(t),this.setXYZ(e,tn.x,tn.y,tn.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Xn(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Le(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Xn(e,this.array)),e}setX(t,e){return this.normalized&&(e=Le(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Xn(e,this.array)),e}setY(t,e){return this.normalized&&(e=Le(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Xn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Le(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Xn(e,this.array)),e}setW(t,e){return this.normalized&&(e=Le(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Le(e,this.array),i=Le(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=Le(e,this.array),i=Le(i,this.array),s=Le(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=Le(e,this.array),i=Le(i,this.array),s=Le(s,this.array),r=Le(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==uc&&(t.usage=this.usage),t}};var jo=class extends $e{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var Qo=class extends $e{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var me=class extends $e{constructor(t,e,i){super(new Float32Array(t),e,i)}},Rp=0,Dn=new Ee,ul=new De,Is=new $,Pn=new _i,gr=new _i,cn=new $,Ue=class n extends Bi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Rp++}),this.uuid=si(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(cu(t)?Qo:jo)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Me().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Dn.makeRotationFromQuaternion(t),this.applyMatrix4(Dn),this}rotateX(t){return Dn.makeRotationX(t),this.applyMatrix4(Dn),this}rotateY(t){return Dn.makeRotationY(t),this.applyMatrix4(Dn),this}rotateZ(t){return Dn.makeRotationZ(t),this.applyMatrix4(Dn),this}translate(t,e,i){return Dn.makeTranslation(t,e,i),this.applyMatrix4(Dn),this}scale(t,e,i){return Dn.makeScale(t,e,i),this.applyMatrix4(Dn),this}lookAt(t){return ul.lookAt(t),ul.updateMatrix(),this.applyMatrix4(ul.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Is).negate(),this.translate(Is.x,Is.y,Is.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new me(i,3))}else{for(let i=0,s=e.count;i<s;i++){let r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new _i);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new $(-1/0,-1/0,-1/0),new $(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){let r=e[i];Pn.setFromBufferAttribute(r),this.morphTargetsRelative?(cn.addVectors(this.boundingBox.min,Pn.min),this.boundingBox.expandByPoint(cn),cn.addVectors(this.boundingBox.max,Pn.max),this.boundingBox.expandByPoint(cn)):(this.boundingBox.expandByPoint(Pn.min),this.boundingBox.expandByPoint(Pn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new zi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new $,1/0);return}if(t){let i=this.boundingSphere.center;if(Pn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];gr.setFromBufferAttribute(a),this.morphTargetsRelative?(cn.addVectors(Pn.min,gr.min),Pn.expandByPoint(cn),cn.addVectors(Pn.max,gr.max),Pn.expandByPoint(cn)):(Pn.expandByPoint(gr.min),Pn.expandByPoint(gr.max))}Pn.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)cn.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(cn));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let h=0,u=a.count;h<u;h++)cn.fromBufferAttribute(a,h),l&&(Is.fromBufferAttribute(t,h),cn.add(Is)),s=Math.max(s,i.distanceToSquared(cn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new $e(new Float32Array(4*i.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let R=0;R<i.count;R++)a[R]=new $,l[R]=new $;let h=new $,u=new $,g=new $,f=new zt,c=new zt,d=new zt,M=new $,m=new $;function p(R,x,y){h.fromBufferAttribute(i,R),u.fromBufferAttribute(i,x),g.fromBufferAttribute(i,y),f.fromBufferAttribute(r,R),c.fromBufferAttribute(r,x),d.fromBufferAttribute(r,y),u.sub(h),g.sub(h),c.sub(f),d.sub(f);let b=1/(c.x*d.y-d.x*c.y);isFinite(b)&&(M.copy(u).multiplyScalar(d.y).addScaledVector(g,-c.y).multiplyScalar(b),m.copy(g).multiplyScalar(c.x).addScaledVector(u,-d.x).multiplyScalar(b),a[R].add(M),a[x].add(M),a[y].add(M),l[R].add(m),l[x].add(m),l[y].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:t.count}]);for(let R=0,x=S.length;R<x;++R){let y=S[R],b=y.start,A=y.count;for(let w=b,I=b+A;w<I;w+=3)p(t.getX(w+0),t.getX(w+1),t.getX(w+2))}let _=new $,v=new $,L=new $,E=new $;function T(R){L.fromBufferAttribute(s,R),E.copy(L);let x=a[R];_.copy(x),_.sub(L.multiplyScalar(L.dot(x))).normalize(),v.crossVectors(E,x);let b=v.dot(l[R])<0?-1:1;o.setXYZW(R,_.x,_.y,_.z,b)}for(let R=0,x=S.length;R<x;++R){let y=S[R],b=y.start,A=y.count;for(let w=b,I=b+A;w<I;w+=3)T(t.getX(w+0)),T(t.getX(w+1)),T(t.getX(w+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new $e(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let f=0,c=i.count;f<c;f++)i.setXYZ(f,0,0,0);let s=new $,r=new $,o=new $,a=new $,l=new $,h=new $,u=new $,g=new $;if(t)for(let f=0,c=t.count;f<c;f+=3){let d=t.getX(f+0),M=t.getX(f+1),m=t.getX(f+2);s.fromBufferAttribute(e,d),r.fromBufferAttribute(e,M),o.fromBufferAttribute(e,m),u.subVectors(o,r),g.subVectors(s,r),u.cross(g),a.fromBufferAttribute(i,d),l.fromBufferAttribute(i,M),h.fromBufferAttribute(i,m),a.add(u),l.add(u),h.add(u),i.setXYZ(d,a.x,a.y,a.z),i.setXYZ(M,l.x,l.y,l.z),i.setXYZ(m,h.x,h.y,h.z)}else for(let f=0,c=e.count;f<c;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),u.subVectors(o,r),g.subVectors(s,r),u.cross(g),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)cn.fromBufferAttribute(t,e),cn.normalize(),t.setXYZ(e,cn.x,cn.y,cn.z)}toNonIndexed(){function t(a,l){let h=a.array,u=a.itemSize,g=a.normalized,f=new h.constructor(l.length*u),c=0,d=0;for(let M=0,m=l.length;M<m;M++){a.isInterleavedBufferAttribute?c=l[M]*a.data.stride+a.offset:c=l[M]*u;for(let p=0;p<u;p++)f[d++]=h[c++]}return new $e(f,u,g)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new n,i=this.index.array,s=this.attributes;for(let a in s){let l=s[a],h=t(l,i);e.setAttribute(a,h)}let r=this.morphAttributes;for(let a in r){let l=[],h=r[a];for(let u=0,g=h.length;u<g;u++){let f=h[u],c=t(f,i);l.push(c)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let h=o[a];e.addGroup(h.start,h.count,h.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let h in l)l[h]!==void 0&&(t[h]=l[h]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let l in i){let h=i[l];t.data.attributes[l]=h.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let h=this.morphAttributes[l],u=[];for(let g=0,f=h.length;g<f;g++){let c=h[g];u.push(c.toJSON(t.data))}u.length>0&&(s[l]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone(e));let s=t.attributes;for(let h in s){let u=s[h];this.setAttribute(h,u.clone(e))}let r=t.morphAttributes;for(let h in r){let u=[],g=r[h];for(let f=0,c=g.length;f<c;f++)u.push(g[f].clone(e));this.morphAttributes[h]=u}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let h=0,u=o.length;h<u;h++){let g=o[h];this.addGroup(g.start,g.count,g.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},rd=new Ee,ji=new Jo,vo=new zi,od=new $,_o=new $,Mo=new $,bo=new $,fl=new $,So=new $,ad=new $,wo=new $,Ne=class extends De{constructor(t=new Ue,e=new Un){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){So.set(0,0,0);for(let l=0,h=r.length;l<h;l++){let u=a[l],g=r[l];u!==0&&(fl.fromBufferAttribute(g,t),o?So.addScaledVector(fl,u):So.addScaledVector(fl.sub(e),u))}e.add(So)}return e}raycast(t,e){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),vo.copy(i.boundingSphere),vo.applyMatrix4(r),ji.copy(t.ray).recast(t.near),!(vo.containsPoint(ji.origin)===!1&&(ji.intersectSphere(vo,od)===null||ji.origin.distanceToSquared(od)>(t.far-t.near)**2))&&(rd.copy(r).invert(),ji.copy(t.ray).applyMatrix4(rd),!(i.boundingBox!==null&&ji.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,ji)))}_computeIntersections(t,e,i){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,h=r.attributes.uv,u=r.attributes.uv1,g=r.attributes.normal,f=r.groups,c=r.drawRange;if(a!==null)if(Array.isArray(o))for(let d=0,M=f.length;d<M;d++){let m=f[d],p=o[m.materialIndex],S=Math.max(m.start,c.start),_=Math.min(a.count,Math.min(m.start+m.count,c.start+c.count));for(let v=S,L=_;v<L;v+=3){let E=a.getX(v),T=a.getX(v+1),R=a.getX(v+2);s=Eo(this,p,t,i,h,u,g,E,T,R),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let d=Math.max(0,c.start),M=Math.min(a.count,c.start+c.count);for(let m=d,p=M;m<p;m+=3){let S=a.getX(m),_=a.getX(m+1),v=a.getX(m+2);s=Eo(this,o,t,i,h,u,g,S,_,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let d=0,M=f.length;d<M;d++){let m=f[d],p=o[m.materialIndex],S=Math.max(m.start,c.start),_=Math.min(l.count,Math.min(m.start+m.count,c.start+c.count));for(let v=S,L=_;v<L;v+=3){let E=v,T=v+1,R=v+2;s=Eo(this,p,t,i,h,u,g,E,T,R),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let d=Math.max(0,c.start),M=Math.min(l.count,c.start+c.count);for(let m=d,p=M;m<p;m+=3){let S=m,_=m+1,v=m+2;s=Eo(this,o,t,i,h,u,g,S,_,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function Cp(n,t,e,i,s,r,o,a){let l;if(t.side===un?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,t.side===Fi,a),l===null)return null;wo.copy(a),wo.applyMatrix4(n.matrixWorld);let h=e.ray.origin.distanceTo(wo);return h<e.near||h>e.far?null:{distance:h,point:wo.clone(),object:n}}function Eo(n,t,e,i,s,r,o,a,l,h){n.getVertexPosition(a,_o),n.getVertexPosition(l,Mo),n.getVertexPosition(h,bo);let u=Cp(n,t,e,i,_o,Mo,bo,ad);if(u){let g=new $;Ui.getBarycoord(ad,_o,Mo,bo,g),s&&(u.uv=Ui.getInterpolatedAttribute(s,a,l,h,g,new zt)),r&&(u.uv1=Ui.getInterpolatedAttribute(r,a,l,h,g,new zt)),o&&(u.normal=Ui.getInterpolatedAttribute(o,a,l,h,g,new $),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));let f={a,b:l,c:h,normal:new $,materialIndex:0};Ui.getNormal(_o,Mo,bo,f.normal),u.face=f,u.barycoord=g}return u}var Te=class n extends Ue{constructor(t=1,e=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],h=[],u=[],g=[],f=0,c=0;d("z","y","x",-1,-1,i,e,t,o,r,0),d("z","y","x",1,-1,i,e,-t,o,r,1),d("x","z","y",1,1,t,i,e,s,o,2),d("x","z","y",1,-1,t,i,-e,s,o,3),d("x","y","z",1,-1,t,e,i,s,r,4),d("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new me(h,3)),this.setAttribute("normal",new me(u,3)),this.setAttribute("uv",new me(g,2));function d(M,m,p,S,_,v,L,E,T,R,x){let y=v/T,b=L/R,A=v/2,w=L/2,I=E/2,O=T+1,D=R+1,B=0,F=0,q=new $;for(let st=0;st<D;st++){let P=st*b-w;for(let ft=0;ft<O;ft++){let Ft=ft*y-A;q[M]=Ft*S,q[m]=P*_,q[p]=I,h.push(q.x,q.y,q.z),q[M]=0,q[m]=0,q[p]=E>0?1:-1,u.push(q.x,q.y,q.z),g.push(ft/T),g.push(1-st/R),B+=1}}for(let st=0;st<R;st++)for(let P=0;P<T;P++){let ft=f+P+O*st,Ft=f+P+O*(st+1),U=f+(P+1)+O*(st+1),Y=f+(P+1)+O*st;l.push(ft,Ft,Y),l.push(Ft,U,Y),F+=6}a.addGroup(c,F,x),c+=F,f+=B}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Js(n){let t={};for(let e in n){t[e]={};for(let i in n[e]){let s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function Mn(n){let t={};for(let e=0;e<n.length;e++){let i=Js(n[e]);for(let s in i)t[s]=i[s]}return t}function Ip(n){let t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function du(n){let t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ae.workingColorSpace}var rh={clone:Js,merge:Mn},Pp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Lp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,wn=class extends Mi{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Pp,this.fragmentShader=Lp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Js(t.uniforms),this.uniformsGroups=Ip(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}},ta=class extends De{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ee,this.projectionMatrix=new Ee,this.projectionMatrixInverse=new Ee,this.coordinateSystem=gi}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},ki=new $,ld=new zt,cd=new zt,bn=class extends ta{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Pr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Er*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Pr*2*Math.atan(Math.tan(Er*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){ki.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ki.x,ki.y).multiplyScalar(-t/ki.z),ki.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ki.x,ki.y).multiplyScalar(-t/ki.z)}getViewSize(t,e){return this.getViewBounds(t,ld,cd),e.subVectors(cd,ld)}setViewOffset(t,e,i,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Er*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,h=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*i/h,s*=o.width/l,i*=o.height/h}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Ps=-90,Ls=1,gc=class extends De{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new bn(Ps,Ls,t,e);s.layers=this.layers,this.add(s);let r=new bn(Ps,Ls,t,e);r.layers=this.layers,this.add(r);let o=new bn(Ps,Ls,t,e);o.layers=this.layers,this.add(o);let a=new bn(Ps,Ls,t,e);a.layers=this.layers,this.add(a);let l=new bn(Ps,Ls,t,e);l.layers=this.layers,this.add(l);let h=new bn(Ps,Ls,t,e);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,s,r,o,a,l]=e;for(let h of e)this.remove(h);if(t===gi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Xo)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let h of e)this.add(h),h.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,h,u]=this.children,g=t.getRenderTarget(),f=t.getActiveCubeFace(),c=t.getActiveMipmapLevel(),d=t.xr.enabled;t.xr.enabled=!1;let M=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,r),t.setRenderTarget(i,1,s),t.render(e,o),t.setRenderTarget(i,2,s),t.render(e,a),t.setRenderTarget(i,3,s),t.render(e,l),t.setRenderTarget(i,4,s),t.render(e,h),i.texture.generateMipmaps=M,t.setRenderTarget(i,5,s),t.render(e,u),t.setRenderTarget(g,f,c),t.xr.enabled=d,i.texture.needsPMREMUpdate=!0}},ea=class extends An{constructor(t,e,i,s,r,o,a,l,h,u){t=t!==void 0?t:[],e=e!==void 0?e:Xs,super(t,e,i,s,r,o,a,l,h,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},yc=class extends vi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new ea(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:ei}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Te(5,5,5),r=new wn({name:"CubemapFromEquirect",uniforms:Js(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:un,blending:Ni});r.uniforms.tEquirect.value=e;let o=new Ne(s,r),a=e.minFilter;return e.minFilter===os&&(e.minFilter=ei),new gc(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,i,s){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,s);t.setRenderTarget(r)}},pl=new $,kp=new $,Dp=new Me,mi=class{constructor(t=new $(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let s=pl.subVectors(i,e).cross(kp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let i=t.delta(pl),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||Dp.getNormalMatrix(t),s=this.coplanarPoint(pl).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Qi=new zi,To=new $,Lr=class{constructor(t=new mi,e=new mi,i=new mi,s=new mi,r=new mi,o=new mi){this.planes=[t,e,i,s,r,o]}set(t,e,i,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=gi){let i=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],h=s[4],u=s[5],g=s[6],f=s[7],c=s[8],d=s[9],M=s[10],m=s[11],p=s[12],S=s[13],_=s[14],v=s[15];if(i[0].setComponents(l-r,f-h,m-c,v-p).normalize(),i[1].setComponents(l+r,f+h,m+c,v+p).normalize(),i[2].setComponents(l+o,f+u,m+d,v+S).normalize(),i[3].setComponents(l-o,f-u,m-d,v-S).normalize(),i[4].setComponents(l-a,f-g,m-M,v-_).normalize(),e===gi)i[5].setComponents(l+a,f+g,m+M,v+_).normalize();else if(e===Xo)i[5].setComponents(a,g,M,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Qi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Qi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Qi)}intersectsSprite(t){return Qi.center.set(0,0,0),Qi.radius=.7071067811865476,Qi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Qi)}intersectsSphere(t){let e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let s=e[i];if(To.x=s.normal.x>0?t.max.x:t.min.x,To.y=s.normal.y>0?t.max.y:t.min.y,To.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(To)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function uu(){let n=null,t=!1,e=null,i=null;function s(r,o){e(r,o),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function Up(n){let t=new WeakMap;function e(a,l){let h=a.array,u=a.usage,g=h.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,h,u),a.onUploadCallback();let c;if(h instanceof Float32Array)c=n.FLOAT;else if(h instanceof Uint16Array)a.isFloat16BufferAttribute?c=n.HALF_FLOAT:c=n.UNSIGNED_SHORT;else if(h instanceof Int16Array)c=n.SHORT;else if(h instanceof Uint32Array)c=n.UNSIGNED_INT;else if(h instanceof Int32Array)c=n.INT;else if(h instanceof Int8Array)c=n.BYTE;else if(h instanceof Uint8Array)c=n.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)c=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:f,type:c,bytesPerElement:h.BYTES_PER_ELEMENT,version:a.version,size:g}}function i(a,l,h){let u=l.array,g=l.updateRanges;if(n.bindBuffer(h,a),g.length===0)n.bufferSubData(h,0,u);else{g.sort((c,d)=>c.start-d.start);let f=0;for(let c=1;c<g.length;c++){let d=g[f],M=g[c];M.start<=d.start+d.count+1?d.count=Math.max(d.count,M.start+M.count-d.start):(++f,g[f]=M)}g.length=f+1;for(let c=0,d=g.length;c<d;c++){let M=g[c];n.bufferSubData(h,M.start*u.BYTES_PER_ELEMENT,u,M.start,M.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(n.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let h=t.get(a);if(h===void 0)t.set(a,e(a,l));else if(h.version<a.version){if(h.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(h.buffer,a,l),h.version=a.version}}return{get:s,remove:r,update:o}}var fn=class n extends Ue{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(i),l=Math.floor(s),h=a+1,u=l+1,g=t/a,f=e/l,c=[],d=[],M=[],m=[];for(let p=0;p<u;p++){let S=p*f-o;for(let _=0;_<h;_++){let v=_*g-r;d.push(v,-S,0),M.push(0,0,1),m.push(_/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let S=0;S<a;S++){let _=S+h*p,v=S+h*(p+1),L=S+1+h*(p+1),E=S+1+h*p;c.push(_,v,E),c.push(v,L,E)}this.setIndex(c),this.setAttribute("position",new me(d,3)),this.setAttribute("normal",new me(M,3)),this.setAttribute("uv",new me(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.widthSegments,t.heightSegments)}},Np=`#ifdef USE_ALPHAHASH
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
#endif`,Bp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,zp=`#ifdef USE_ALPHATEST
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
#endif`,Bm=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zm=`#ifdef USE_LOGDEPTHBUF
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
}`,B0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,z0=`uniform samplerCube tCube;
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
}`,ge={alphahash_fragment:Np,alphahash_pars_fragment:Op,alphamap_fragment:Fp,alphamap_pars_fragment:Bp,alphatest_fragment:zp,alphatest_pars_fragment:Hp,aomap_fragment:$p,aomap_pars_fragment:Vp,batching_pars_vertex:Gp,batching_vertex:Wp,begin_vertex:Xp,beginnormal_vertex:qp,bsdfs:Yp,iridescence_fragment:Zp,bumpmap_pars_fragment:Jp,clipping_planes_fragment:Kp,clipping_planes_pars_fragment:jp,clipping_planes_pars_vertex:Qp,clipping_planes_vertex:tm,color_fragment:em,color_pars_fragment:nm,color_pars_vertex:im,color_vertex:sm,common:rm,cube_uv_reflection_fragment:om,defaultnormal_vertex:am,displacementmap_pars_vertex:lm,displacementmap_vertex:cm,emissivemap_fragment:hm,emissivemap_pars_fragment:dm,colorspace_fragment:um,colorspace_pars_fragment:fm,envmap_fragment:pm,envmap_common_pars_fragment:mm,envmap_pars_fragment:gm,envmap_pars_vertex:ym,envmap_physical_pars_fragment:Rm,envmap_vertex:xm,fog_vertex:vm,fog_pars_vertex:_m,fog_fragment:Mm,fog_pars_fragment:bm,gradientmap_pars_fragment:Sm,lightmap_pars_fragment:wm,lights_lambert_fragment:Em,lights_lambert_pars_fragment:Tm,lights_pars_begin:Am,lights_toon_fragment:Cm,lights_toon_pars_fragment:Im,lights_phong_fragment:Pm,lights_phong_pars_fragment:Lm,lights_physical_fragment:km,lights_physical_pars_fragment:Dm,lights_fragment_begin:Um,lights_fragment_maps:Nm,lights_fragment_end:Om,logdepthbuf_fragment:Fm,logdepthbuf_pars_fragment:Bm,logdepthbuf_pars_vertex:zm,logdepthbuf_vertex:Hm,map_fragment:$m,map_pars_fragment:Vm,map_particle_fragment:Gm,map_particle_pars_fragment:Wm,metalnessmap_fragment:Xm,metalnessmap_pars_fragment:qm,morphinstance_vertex:Ym,morphcolor_vertex:Zm,morphnormal_vertex:Jm,morphtarget_pars_vertex:Km,morphtarget_vertex:jm,normal_fragment_begin:Qm,normal_fragment_maps:t0,normal_pars_fragment:e0,normal_pars_vertex:n0,normal_vertex:i0,normalmap_pars_fragment:s0,clearcoat_normal_fragment_begin:r0,clearcoat_normal_fragment_maps:o0,clearcoat_pars_fragment:a0,iridescence_pars_fragment:l0,opaque_fragment:c0,packing:h0,premultiplied_alpha_fragment:d0,project_vertex:u0,dithering_fragment:f0,dithering_pars_fragment:p0,roughnessmap_fragment:m0,roughnessmap_pars_fragment:g0,shadowmap_pars_fragment:y0,shadowmap_pars_vertex:x0,shadowmap_vertex:v0,shadowmask_pars_fragment:_0,skinbase_vertex:M0,skinning_pars_vertex:b0,skinning_vertex:S0,skinnormal_vertex:w0,specularmap_fragment:E0,specularmap_pars_fragment:T0,tonemapping_fragment:A0,tonemapping_pars_fragment:R0,transmission_fragment:C0,transmission_pars_fragment:I0,uv_pars_fragment:P0,uv_pars_vertex:L0,uv_vertex:k0,worldpos_vertex:D0,background_vert:U0,background_frag:N0,backgroundCube_vert:O0,backgroundCube_frag:F0,cube_vert:B0,cube_frag:z0,depth_vert:H0,depth_frag:$0,distanceRGBA_vert:V0,distanceRGBA_frag:G0,equirect_vert:W0,equirect_frag:X0,linedashed_vert:q0,linedashed_frag:Y0,meshbasic_vert:Z0,meshbasic_frag:J0,meshlambert_vert:K0,meshlambert_frag:j0,meshmatcap_vert:Q0,meshmatcap_frag:tg,meshnormal_vert:eg,meshnormal_frag:ng,meshphong_vert:ig,meshphong_frag:sg,meshphysical_vert:rg,meshphysical_frag:og,meshtoon_vert:ag,meshtoon_frag:lg,points_vert:cg,points_frag:hg,shadow_vert:dg,shadow_frag:ug,sprite_vert:fg,sprite_frag:pg},Zt={common:{diffuse:{value:new oe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Me},alphaMap:{value:null},alphaMapTransform:{value:new Me},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Me}},envmap:{envMap:{value:null},envMapRotation:{value:new Me},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Me}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Me}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Me},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Me},normalScale:{value:new zt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Me},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Me}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Me}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Me}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new oe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new oe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Me},alphaTest:{value:0},uvTransform:{value:new Me}},sprite:{diffuse:{value:new oe(16777215)},opacity:{value:1},center:{value:new zt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Me},alphaMap:{value:null},alphaMapTransform:{value:new Me},alphaTest:{value:0}}},ti={basic:{uniforms:Mn([Zt.common,Zt.specularmap,Zt.envmap,Zt.aomap,Zt.lightmap,Zt.fog]),vertexShader:ge.meshbasic_vert,fragmentShader:ge.meshbasic_frag},lambert:{uniforms:Mn([Zt.common,Zt.specularmap,Zt.envmap,Zt.aomap,Zt.lightmap,Zt.emissivemap,Zt.bumpmap,Zt.normalmap,Zt.displacementmap,Zt.fog,Zt.lights,{emissive:{value:new oe(0)}}]),vertexShader:ge.meshlambert_vert,fragmentShader:ge.meshlambert_frag},phong:{uniforms:Mn([Zt.common,Zt.specularmap,Zt.envmap,Zt.aomap,Zt.lightmap,Zt.emissivemap,Zt.bumpmap,Zt.normalmap,Zt.displacementmap,Zt.fog,Zt.lights,{emissive:{value:new oe(0)},specular:{value:new oe(1118481)},shininess:{value:30}}]),vertexShader:ge.meshphong_vert,fragmentShader:ge.meshphong_frag},standard:{uniforms:Mn([Zt.common,Zt.envmap,Zt.aomap,Zt.lightmap,Zt.emissivemap,Zt.bumpmap,Zt.normalmap,Zt.displacementmap,Zt.roughnessmap,Zt.metalnessmap,Zt.fog,Zt.lights,{emissive:{value:new oe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ge.meshphysical_vert,fragmentShader:ge.meshphysical_frag},toon:{uniforms:Mn([Zt.common,Zt.aomap,Zt.lightmap,Zt.emissivemap,Zt.bumpmap,Zt.normalmap,Zt.displacementmap,Zt.gradientmap,Zt.fog,Zt.lights,{emissive:{value:new oe(0)}}]),vertexShader:ge.meshtoon_vert,fragmentShader:ge.meshtoon_frag},matcap:{uniforms:Mn([Zt.common,Zt.bumpmap,Zt.normalmap,Zt.displacementmap,Zt.fog,{matcap:{value:null}}]),vertexShader:ge.meshmatcap_vert,fragmentShader:ge.meshmatcap_frag},points:{uniforms:Mn([Zt.points,Zt.fog]),vertexShader:ge.points_vert,fragmentShader:ge.points_frag},dashed:{uniforms:Mn([Zt.common,Zt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ge.linedashed_vert,fragmentShader:ge.linedashed_frag},depth:{uniforms:Mn([Zt.common,Zt.displacementmap]),vertexShader:ge.depth_vert,fragmentShader:ge.depth_frag},normal:{uniforms:Mn([Zt.common,Zt.bumpmap,Zt.normalmap,Zt.displacementmap,{opacity:{value:1}}]),vertexShader:ge.meshnormal_vert,fragmentShader:ge.meshnormal_frag},sprite:{uniforms:Mn([Zt.sprite,Zt.fog]),vertexShader:ge.sprite_vert,fragmentShader:ge.sprite_frag},background:{uniforms:{uvTransform:{value:new Me},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ge.background_vert,fragmentShader:ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Me}},vertexShader:ge.backgroundCube_vert,fragmentShader:ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ge.cube_vert,fragmentShader:ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ge.equirect_vert,fragmentShader:ge.equirect_frag},distanceRGBA:{uniforms:Mn([Zt.common,Zt.displacementmap,{referencePosition:{value:new $},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ge.distanceRGBA_vert,fragmentShader:ge.distanceRGBA_frag},shadow:{uniforms:Mn([Zt.lights,Zt.fog,{color:{value:new oe(0)},opacity:{value:1}}]),vertexShader:ge.shadow_vert,fragmentShader:ge.shadow_frag}};ti.physical={uniforms:Mn([ti.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Me},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Me},clearcoatNormalScale:{value:new zt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Me},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Me},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Me},sheen:{value:0},sheenColor:{value:new oe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Me},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Me},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Me},transmissionSamplerSize:{value:new zt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Me},attenuationDistance:{value:0},attenuationColor:{value:new oe(0)},specularColor:{value:new oe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Me},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Me},anisotropyVector:{value:new zt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Me}}]),vertexShader:ge.meshphysical_vert,fragmentShader:ge.meshphysical_frag};var Ao={r:0,b:0,g:0},ts=new qn,mg=new Ee;function gg(n,t,e,i,s,r,o){let a=new oe(0),l=r===!0?0:1,h,u,g=null,f=0,c=null;function d(S){let _=S.isScene===!0?S.background:null;return _&&_.isTexture&&(_=(S.backgroundBlurriness>0?e:t).get(_)),_}function M(S){let _=!1,v=d(S);v===null?p(a,l):v&&v.isColor&&(p(v,1),_=!0);let L=n.xr.getEnvironmentBlendMode();L==="additive"?i.buffers.color.setClear(0,0,0,1,o):L==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||_)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(S,_){let v=d(_);v&&(v.isCubeTexture||v.mapping===Aa)?(u===void 0&&(u=new Ne(new Te(1,1,1),new wn({name:"BackgroundCubeMaterial",uniforms:Js(ti.backgroundCube.uniforms),vertexShader:ti.backgroundCube.vertexShader,fragmentShader:ti.backgroundCube.fragmentShader,side:un,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(L,E,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),ts.copy(_.backgroundRotation),ts.x*=-1,ts.y*=-1,ts.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(ts.y*=-1,ts.z*=-1),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(mg.makeRotationFromEuler(ts)),u.material.toneMapped=Ae.getTransfer(v.colorSpace)!==ke,(g!==v||f!==v.version||c!==n.toneMapping)&&(u.material.needsUpdate=!0,g=v,f=v.version,c=n.toneMapping),u.layers.enableAll(),S.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(h===void 0&&(h=new Ne(new fn(2,2),new wn({name:"BackgroundMaterial",uniforms:Js(ti.background.uniforms),vertexShader:ti.background.vertexShader,fragmentShader:ti.background.fragmentShader,side:Fi,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(h)),h.material.uniforms.t2D.value=v,h.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,h.material.toneMapped=Ae.getTransfer(v.colorSpace)!==ke,v.matrixAutoUpdate===!0&&v.updateMatrix(),h.material.uniforms.uvTransform.value.copy(v.matrix),(g!==v||f!==v.version||c!==n.toneMapping)&&(h.material.needsUpdate=!0,g=v,f=v.version,c=n.toneMapping),h.layers.enableAll(),S.unshift(h,h.geometry,h.material,0,0,null))}function p(S,_){S.getRGB(Ao,du(n)),i.buffers.color.setClear(Ao.r,Ao.g,Ao.b,_,o)}return{getClearColor:function(){return a},setClearColor:function(S,_=1){a.set(S),l=_,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(S){l=S,p(a,l)},render:M,addToRenderList:m}}function yg(n,t){let e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=f(null),r=s,o=!1;function a(y,b,A,w,I){let O=!1,D=g(w,A,b);r!==D&&(r=D,h(r.object)),O=c(y,w,A,I),O&&d(y,w,A,I),I!==null&&t.update(I,n.ELEMENT_ARRAY_BUFFER),(O||o)&&(o=!1,v(y,b,A,w),I!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(I).buffer))}function l(){return n.createVertexArray()}function h(y){return n.bindVertexArray(y)}function u(y){return n.deleteVertexArray(y)}function g(y,b,A){let w=A.wireframe===!0,I=i[y.id];I===void 0&&(I={},i[y.id]=I);let O=I[b.id];O===void 0&&(O={},I[b.id]=O);let D=O[w];return D===void 0&&(D=f(l()),O[w]=D),D}function f(y){let b=[],A=[],w=[];for(let I=0;I<e;I++)b[I]=0,A[I]=0,w[I]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:b,enabledAttributes:A,attributeDivisors:w,object:y,attributes:{},index:null}}function c(y,b,A,w){let I=r.attributes,O=b.attributes,D=0,B=A.getAttributes();for(let F in B)if(B[F].location>=0){let st=I[F],P=O[F];if(P===void 0&&(F==="instanceMatrix"&&y.instanceMatrix&&(P=y.instanceMatrix),F==="instanceColor"&&y.instanceColor&&(P=y.instanceColor)),st===void 0||st.attribute!==P||P&&st.data!==P.data)return!0;D++}return r.attributesNum!==D||r.index!==w}function d(y,b,A,w){let I={},O=b.attributes,D=0,B=A.getAttributes();for(let F in B)if(B[F].location>=0){let st=O[F];st===void 0&&(F==="instanceMatrix"&&y.instanceMatrix&&(st=y.instanceMatrix),F==="instanceColor"&&y.instanceColor&&(st=y.instanceColor));let P={};P.attribute=st,st&&st.data&&(P.data=st.data),I[F]=P,D++}r.attributes=I,r.attributesNum=D,r.index=w}function M(){let y=r.newAttributes;for(let b=0,A=y.length;b<A;b++)y[b]=0}function m(y){p(y,0)}function p(y,b){let A=r.newAttributes,w=r.enabledAttributes,I=r.attributeDivisors;A[y]=1,w[y]===0&&(n.enableVertexAttribArray(y),w[y]=1),I[y]!==b&&(n.vertexAttribDivisor(y,b),I[y]=b)}function S(){let y=r.newAttributes,b=r.enabledAttributes;for(let A=0,w=b.length;A<w;A++)b[A]!==y[A]&&(n.disableVertexAttribArray(A),b[A]=0)}function _(y,b,A,w,I,O,D){D===!0?n.vertexAttribIPointer(y,b,A,I,O):n.vertexAttribPointer(y,b,A,w,I,O)}function v(y,b,A,w){M();let I=w.attributes,O=A.getAttributes(),D=b.defaultAttributeValues;for(let B in O){let F=O[B];if(F.location>=0){let q=I[B];if(q===void 0&&(B==="instanceMatrix"&&y.instanceMatrix&&(q=y.instanceMatrix),B==="instanceColor"&&y.instanceColor&&(q=y.instanceColor)),q!==void 0){let st=q.normalized,P=q.itemSize,ft=t.get(q);if(ft===void 0)continue;let Ft=ft.buffer,U=ft.type,Y=ft.bytesPerElement,Q=U===n.INT||U===n.UNSIGNED_INT||q.gpuType===Kc;if(q.isInterleavedBufferAttribute){let W=q.data,lt=W.stride,ot=q.offset;if(W.isInstancedInterleavedBuffer){for(let wt=0;wt<F.locationSize;wt++)p(F.location+wt,W.meshPerAttribute);y.isInstancedMesh!==!0&&w._maxInstanceCount===void 0&&(w._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let wt=0;wt<F.locationSize;wt++)m(F.location+wt);n.bindBuffer(n.ARRAY_BUFFER,Ft);for(let wt=0;wt<F.locationSize;wt++)_(F.location+wt,P/F.locationSize,U,st,lt*Y,(ot+P/F.locationSize*wt)*Y,Q)}else{if(q.isInstancedBufferAttribute){for(let W=0;W<F.locationSize;W++)p(F.location+W,q.meshPerAttribute);y.isInstancedMesh!==!0&&w._maxInstanceCount===void 0&&(w._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let W=0;W<F.locationSize;W++)m(F.location+W);n.bindBuffer(n.ARRAY_BUFFER,Ft);for(let W=0;W<F.locationSize;W++)_(F.location+W,P/F.locationSize,U,st,P*Y,P/F.locationSize*W*Y,Q)}}else if(D!==void 0){let st=D[B];if(st!==void 0)switch(st.length){case 2:n.vertexAttrib2fv(F.location,st);break;case 3:n.vertexAttrib3fv(F.location,st);break;case 4:n.vertexAttrib4fv(F.location,st);break;default:n.vertexAttrib1fv(F.location,st)}}}}S()}function L(){R();for(let y in i){let b=i[y];for(let A in b){let w=b[A];for(let I in w)u(w[I].object),delete w[I];delete b[A]}delete i[y]}}function E(y){if(i[y.id]===void 0)return;let b=i[y.id];for(let A in b){let w=b[A];for(let I in w)u(w[I].object),delete w[I];delete b[A]}delete i[y.id]}function T(y){for(let b in i){let A=i[b];if(A[y.id]===void 0)continue;let w=A[y.id];for(let I in w)u(w[I].object),delete w[I];delete A[y.id]}}function R(){x(),o=!0,r!==s&&(r=s,h(r.object))}function x(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:R,resetDefaultState:x,dispose:L,releaseStatesOfGeometry:E,releaseStatesOfProgram:T,initAttributes:M,enableAttribute:m,disableUnusedAttributes:S}}function xg(n,t,e){let i;function s(h){i=h}function r(h,u){n.drawArrays(i,h,u),e.update(u,i,1)}function o(h,u,g){g!==0&&(n.drawArraysInstanced(i,h,u,g),e.update(u,i,g))}function a(h,u,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,h,0,u,0,g);let c=0;for(let d=0;d<g;d++)c+=u[d];e.update(c,i,1)}function l(h,u,g,f){if(g===0)return;let c=t.get("WEBGL_multi_draw");if(c===null)for(let d=0;d<h.length;d++)o(h[d],u[d],f[d]);else{c.multiDrawArraysInstancedWEBGL(i,h,0,u,0,f,0,g);let d=0;for(let M=0;M<g;M++)d+=u[M]*f[M];e.update(d,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function vg(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let T=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(T){return!(T!==Ln&&i.convert(T)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){let R=T===Gr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(T!==xi&&i.convert(T)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==ni&&!R)}function l(T){if(T==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=e.precision!==void 0?e.precision:"highp",u=l(h);u!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",u,"instead."),h=u);let g=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),c=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),d=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),S=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),_=n.getParameter(n.MAX_VARYING_VECTORS),v=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),L=d>0,E=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:h,logarithmicDepthBuffer:g,reverseDepthBuffer:f,maxTextures:c,maxVertexTextures:d,maxTextureSize:M,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:S,maxVaryings:_,maxFragmentUniforms:v,vertexTextures:L,maxSamples:E}}function _g(n){let t=this,e=null,i=0,s=!1,r=!1,o=new mi,a=new Me,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(g,f){let c=g.length!==0||f||i!==0||s;return s=f,i=g.length,c},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(g,f){e=u(g,f,0)},this.setState=function(g,f,c){let d=g.clippingPlanes,M=g.clipIntersection,m=g.clipShadows,p=n.get(g);if(!s||d===null||d.length===0||r&&!m)r?u(null):h();else{let S=r?0:i,_=S*4,v=p.clippingState||null;l.value=v,v=u(d,f,_,c);for(let L=0;L!==_;++L)v[L]=e[L];p.clippingState=v,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=S}};function h(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(g,f,c,d){let M=g!==null?g.length:0,m=null;if(M!==0){if(m=l.value,d!==!0||m===null){let p=c+M*4,S=f.matrixWorldInverse;a.getNormalMatrix(S),(m===null||m.length<p)&&(m=new Float32Array(p));for(let _=0,v=c;_!==M;++_,v+=4)o.copy(g[_]).applyMatrix4(S,a),o.normal.toArray(m,v),m[v+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=M,t.numIntersection=0,m}}function Mg(n){let t=new WeakMap;function e(o,a){return a===Nl?o.mapping=Xs:a===Ol&&(o.mapping=qs),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===Nl||a===Ol)if(t.has(o)){let l=t.get(o).texture;return e(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let h=new yc(l.height);return h.fromEquirectangularTexture(n,o),t.set(o,h),o.addEventListener("dispose",s),e(h.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}var na=class extends ta{constructor(t=-1,e=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-t,o=i+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let h=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=h*this.view.offsetX,o=r+h*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Bs=4,hd=[.125,.215,.35,.446,.526,.582],ss=20,ml=new na,dd=new oe,gl=null,yl=0,xl=0,vl=!1,ns=(1+Math.sqrt(5))/2,ks=1/ns,ud=[new $(-ns,ks,0),new $(ns,ks,0),new $(-ks,0,ns),new $(ks,0,ns),new $(0,ns,-ks),new $(0,ns,ks),new $(-1,1,-1),new $(1,1,-1),new $(-1,1,1),new $(1,1,1)],ia=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100){gl=this._renderer.getRenderTarget(),yl=this._renderer.getActiveCubeFace(),xl=this._renderer.getActiveMipmapLevel(),vl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,i,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=md(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=pd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(gl,yl,xl),this._renderer.xr.enabled=vl,t.scissorTest=!1,Ro(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Xs||t.mapping===qs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),gl=this._renderer.getRenderTarget(),yl=this._renderer.getActiveCubeFace(),xl=this._renderer.getActiveMipmapLevel(),vl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:ei,minFilter:ei,generateMipmaps:!1,type:Gr,format:Ln,colorSpace:tr,depthBuffer:!1},s=fd(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=fd(t,e,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=bg(r)),this._blurMaterial=Sg(r,t,e)}return s}_compileMaterial(t){let e=new Ne(this._lodPlanes[0],t);this._renderer.compile(e,ml)}_sceneToCubeUV(t,e,i,s){let a=new bn(90,1,e,i),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,g=u.autoClear,f=u.toneMapping;u.getClearColor(dd),u.toneMapping=ii,u.autoClear=!1;let c=new Un({name:"PMREM.Background",side:un,depthWrite:!1,depthTest:!1}),d=new Ne(new Te,c),M=!1,m=t.background;m?m.isColor&&(c.color.copy(m),t.background=null,M=!0):(c.color.copy(dd),M=!0);for(let p=0;p<6;p++){let S=p%3;S===0?(a.up.set(0,l[p],0),a.lookAt(h[p],0,0)):S===1?(a.up.set(0,0,l[p]),a.lookAt(0,h[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,h[p]));let _=this._cubeSize;Ro(s,S*_,p>2?_:0,_,_),u.setRenderTarget(s),M&&u.render(d,a),u.render(t,a)}d.geometry.dispose(),d.material.dispose(),u.toneMapping=f,u.autoClear=g,t.background=m}_textureToCubeUV(t,e){let i=this._renderer,s=t.mapping===Xs||t.mapping===qs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=md()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=pd());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new Ne(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;Ro(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(o,ml)}_applyPMREM(t){let e=this._renderer,i=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=ud[(s-r-1)%ud.length];this._blur(t,r-1,r,o,a)}e.autoClear=i}_blur(t,e,i,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,s,"latitudinal",r),this._halfBlur(o,t,i,i,s,"longitudinal",r)}_halfBlur(t,e,i,s,r,o,a){let l=this._renderer,h=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,g=new Ne(this._lodPlanes[s],h),f=h.uniforms,c=this._sizeLods[i]-1,d=isFinite(r)?Math.PI/(2*c):2*Math.PI/(2*ss-1),M=r/d,m=isFinite(r)?1+Math.floor(u*M):ss;m>ss&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ss}`);let p=[],S=0;for(let T=0;T<ss;++T){let R=T/M,x=Math.exp(-R*R/2);p.push(x),T===0?S+=x:T<m&&(S+=2*x)}for(let T=0;T<p.length;T++)p[T]=p[T]/S;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:_}=this;f.dTheta.value=d,f.mipInt.value=_-i;let v=this._sizeLods[s],L=3*v*(s>_-Bs?s-_+Bs:0),E=4*(this._cubeSize-v);Ro(e,L,E,3*v,2*v),l.setRenderTarget(e),l.render(g,ml)}};function bg(n){let t=[],e=[],i=[],s=n,r=n-Bs+1+hd.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let l=1/a;o>n-Bs?l=hd[o-n+Bs-1]:o===0&&(l=0),i.push(l);let h=1/(a-2),u=-h,g=1+h,f=[u,u,g,u,g,g,u,u,g,g,u,g],c=6,d=6,M=3,m=2,p=1,S=new Float32Array(M*d*c),_=new Float32Array(m*d*c),v=new Float32Array(p*d*c);for(let E=0;E<c;E++){let T=E%3*2/3-1,R=E>2?0:-1,x=[T,R,0,T+2/3,R,0,T+2/3,R+1,0,T,R,0,T+2/3,R+1,0,T,R+1,0];S.set(x,M*d*E),_.set(f,m*d*E);let y=[E,E,E,E,E,E];v.set(y,p*d*E)}let L=new Ue;L.setAttribute("position",new $e(S,M)),L.setAttribute("uv",new $e(_,m)),L.setAttribute("faceIndex",new $e(v,p)),t.push(L),s>Bs&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function fd(n,t,e){let i=new vi(n,t,e);return i.texture.mapping=Aa,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ro(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function Sg(n,t,e){let i=new Float32Array(ss),s=new $(0,1,0);return new wn({name:"SphericalGaussianBlur",defines:{n:ss,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:oh(),fragmentShader:`

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
		`,blending:Ni,depthTest:!1,depthWrite:!1})}function pd(){return new wn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:oh(),fragmentShader:`

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
		`,blending:Ni,depthTest:!1,depthWrite:!1})}function md(){return new wn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:oh(),fragmentShader:`

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
	`}function wg(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){let l=a.mapping,h=l===Nl||l===Ol,u=l===Xs||l===qs;if(h||u){let g=t.get(a),f=g!==void 0?g.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new ia(n)),g=h?e.fromEquirectangular(a,g):e.fromCubemap(a,g),g.texture.pmremVersion=a.pmremVersion,t.set(a,g),g.texture;if(g!==void 0)return g.texture;{let c=a.image;return h&&c&&c.height>0||u&&c&&s(c)?(e===null&&(e=new ia(n)),g=h?e.fromEquirectangular(a):e.fromCubemap(a),g.texture.pmremVersion=a.pmremVersion,t.set(a,g),a.addEventListener("dispose",r),g.texture):null}}}return a}function s(a){let l=0,h=6;for(let u=0;u<h;u++)a[u]!==void 0&&l++;return l===h}function r(a){let l=a.target;l.removeEventListener("dispose",r);let h=t.get(l);h!==void 0&&(t.delete(l),h.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function Eg(n){let t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let s=e(i);return s===null&&Sr("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function Tg(n,t,e,i){let s={},r=new WeakMap;function o(g){let f=g.target;f.index!==null&&t.remove(f.index);for(let d in f.attributes)t.remove(f.attributes[d]);for(let d in f.morphAttributes){let M=f.morphAttributes[d];for(let m=0,p=M.length;m<p;m++)t.remove(M[m])}f.removeEventListener("dispose",o),delete s[f.id];let c=r.get(f);c&&(t.remove(c),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(g,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,e.memory.geometries++),f}function l(g){let f=g.attributes;for(let d in f)t.update(f[d],n.ARRAY_BUFFER);let c=g.morphAttributes;for(let d in c){let M=c[d];for(let m=0,p=M.length;m<p;m++)t.update(M[m],n.ARRAY_BUFFER)}}function h(g){let f=[],c=g.index,d=g.attributes.position,M=0;if(c!==null){let S=c.array;M=c.version;for(let _=0,v=S.length;_<v;_+=3){let L=S[_+0],E=S[_+1],T=S[_+2];f.push(L,E,E,T,T,L)}}else if(d!==void 0){let S=d.array;M=d.version;for(let _=0,v=S.length/3-1;_<v;_+=3){let L=_+0,E=_+1,T=_+2;f.push(L,E,E,T,T,L)}}else return;let m=new(cu(f)?Qo:jo)(f,1);m.version=M;let p=r.get(g);p&&t.remove(p),r.set(g,m)}function u(g){let f=r.get(g);if(f){let c=g.index;c!==null&&f.version<c.version&&h(g)}else h(g);return r.get(g)}return{get:a,update:l,getWireframeAttribute:u}}function Ag(n,t,e){let i;function s(f){i=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,c){n.drawElements(i,c,r,f*o),e.update(c,i,1)}function h(f,c,d){d!==0&&(n.drawElementsInstanced(i,c,r,f*o,d),e.update(c,i,d))}function u(f,c,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,c,0,r,f,0,d);let m=0;for(let p=0;p<d;p++)m+=c[p];e.update(m,i,1)}function g(f,c,d,M){if(d===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)h(f[p]/o,c[p],M[p]);else{m.multiDrawElementsInstancedWEBGL(i,c,0,r,f,0,M,0,d);let p=0;for(let S=0;S<d;S++)p+=c[S]*M[S];e.update(p,i,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=h,this.renderMultiDraw=u,this.renderMultiDrawInstances=g}function Rg(n){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(r/3);break;case n.LINES:e.lines+=a*(r/2);break;case n.LINE_STRIP:e.lines+=a*(r-1);break;case n.LINE_LOOP:e.lines+=a*r;break;case n.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function Cg(n,t,e){let i=new WeakMap,s=new Ze;function r(o,a,l){let h=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,g=u!==void 0?u.length:0,f=i.get(a);if(f===void 0||f.count!==g){let x=function(){T.dispose(),i.delete(a),a.removeEventListener("dispose",x)};f!==void 0&&f.texture.dispose();let c=a.morphAttributes.position!==void 0,d=a.morphAttributes.normal!==void 0,M=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],S=a.morphAttributes.color||[],_=0;c===!0&&(_=1),d===!0&&(_=2),M===!0&&(_=3);let v=a.attributes.position.count*_,L=1;v>t.maxTextureSize&&(L=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);let E=new Float32Array(v*L*4*g),T=new Zo(E,v,L,g);T.type=ni,T.needsUpdate=!0;let R=_*4;for(let y=0;y<g;y++){let b=m[y],A=p[y],w=S[y],I=v*L*4*y;for(let O=0;O<b.count;O++){let D=O*R;c===!0&&(s.fromBufferAttribute(b,O),E[I+D+0]=s.x,E[I+D+1]=s.y,E[I+D+2]=s.z,E[I+D+3]=0),d===!0&&(s.fromBufferAttribute(A,O),E[I+D+4]=s.x,E[I+D+5]=s.y,E[I+D+6]=s.z,E[I+D+7]=0),M===!0&&(s.fromBufferAttribute(w,O),E[I+D+8]=s.x,E[I+D+9]=s.y,E[I+D+10]=s.z,E[I+D+11]=w.itemSize===4?s.w:1)}}f={count:g,texture:T,size:new zt(v,L)},i.set(a,f),a.addEventListener("dispose",x)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let c=0;for(let M=0;M<h.length;M++)c+=h[M];let d=a.morphTargetsRelative?1:1-c;l.getUniforms().setValue(n,"morphTargetBaseInfluence",d),l.getUniforms().setValue(n,"morphTargetInfluences",h)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:r}}function Ig(n,t,e,i){let s=new WeakMap;function r(l){let h=i.render.frame,u=l.geometry,g=t.get(l,u);if(s.get(g)!==h&&(t.update(g),s.set(g,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==h&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,h))),l.isSkinnedMesh){let f=l.skeleton;s.get(f)!==h&&(f.update(),s.set(f,h))}return g}function o(){s=new WeakMap}function a(l){let h=l.target;h.removeEventListener("dispose",a),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:r,dispose:o}}var sa=class extends An{constructor(t,e,i,s,r,o,a,l,h,u=$s){if(u!==$s&&u!==Zs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===$s&&(i=ls),i===void 0&&u===Zs&&(i=Ys),super(null,s,r,o,a,l,u,i,h),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Sn,this.minFilter=l!==void 0?l:Sn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},fu=new An,gd=new sa(1,1),pu=new Zo,mu=new mc,gu=new ea,yd=[],xd=[],vd=new Float32Array(16),_d=new Float32Array(9),Md=new Float32Array(4);function er(n,t,e){let i=n[0];if(i<=0||i>0)return n;let s=t*e,r=yd[s];if(r===void 0&&(r=new Float32Array(s),yd[s]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(r,a)}return r}function sn(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function rn(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Ca(n,t){let e=xd[t];e===void 0&&(e=new Int32Array(t),xd[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function Pg(n,t){let e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function Lg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(sn(e,t))return;n.uniform2fv(this.addr,t),rn(e,t)}}function kg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(sn(e,t))return;n.uniform3fv(this.addr,t),rn(e,t)}}function Dg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(sn(e,t))return;n.uniform4fv(this.addr,t),rn(e,t)}}function Ug(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(sn(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),rn(e,t)}else{if(sn(e,i))return;Md.set(i),n.uniformMatrix2fv(this.addr,!1,Md),rn(e,i)}}function Ng(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(sn(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),rn(e,t)}else{if(sn(e,i))return;_d.set(i),n.uniformMatrix3fv(this.addr,!1,_d),rn(e,i)}}function Og(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(sn(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),rn(e,t)}else{if(sn(e,i))return;vd.set(i),n.uniformMatrix4fv(this.addr,!1,vd),rn(e,i)}}function Fg(n,t){let e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function Bg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(sn(e,t))return;n.uniform2iv(this.addr,t),rn(e,t)}}function zg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(sn(e,t))return;n.uniform3iv(this.addr,t),rn(e,t)}}function Hg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(sn(e,t))return;n.uniform4iv(this.addr,t),rn(e,t)}}function $g(n,t){let e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function Vg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(sn(e,t))return;n.uniform2uiv(this.addr,t),rn(e,t)}}function Gg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(sn(e,t))return;n.uniform3uiv(this.addr,t),rn(e,t)}}function Wg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(sn(e,t))return;n.uniform4uiv(this.addr,t),rn(e,t)}}function Xg(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(gd.compareFunction=au,r=gd):r=fu,e.setTexture2D(t||r,s)}function qg(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||mu,s)}function Yg(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||gu,s)}function Zg(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||pu,s)}function Jg(n){switch(n){case 5126:return Pg;case 35664:return Lg;case 35665:return kg;case 35666:return Dg;case 35674:return Ug;case 35675:return Ng;case 35676:return Og;case 5124:case 35670:return Fg;case 35667:case 35671:return Bg;case 35668:case 35672:return zg;case 35669:case 35673:return Hg;case 5125:return $g;case 36294:return Vg;case 36295:return Gg;case 36296:return Wg;case 35678:case 36198:case 36298:case 36306:case 35682:return Xg;case 35679:case 36299:case 36307:return qg;case 35680:case 36300:case 36308:case 36293:return Yg;case 36289:case 36303:case 36311:case 36292:return Zg}}function Kg(n,t){n.uniform1fv(this.addr,t)}function jg(n,t){let e=er(t,this.size,2);n.uniform2fv(this.addr,e)}function Qg(n,t){let e=er(t,this.size,3);n.uniform3fv(this.addr,e)}function ty(n,t){let e=er(t,this.size,4);n.uniform4fv(this.addr,e)}function ey(n,t){let e=er(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function ny(n,t){let e=er(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function iy(n,t){let e=er(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function sy(n,t){n.uniform1iv(this.addr,t)}function ry(n,t){n.uniform2iv(this.addr,t)}function oy(n,t){n.uniform3iv(this.addr,t)}function ay(n,t){n.uniform4iv(this.addr,t)}function ly(n,t){n.uniform1uiv(this.addr,t)}function cy(n,t){n.uniform2uiv(this.addr,t)}function hy(n,t){n.uniform3uiv(this.addr,t)}function dy(n,t){n.uniform4uiv(this.addr,t)}function uy(n,t,e){let i=this.cache,s=t.length,r=Ca(e,s);sn(i,r)||(n.uniform1iv(this.addr,r),rn(i,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||fu,r[o])}function fy(n,t,e){let i=this.cache,s=t.length,r=Ca(e,s);sn(i,r)||(n.uniform1iv(this.addr,r),rn(i,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||mu,r[o])}function py(n,t,e){let i=this.cache,s=t.length,r=Ca(e,s);sn(i,r)||(n.uniform1iv(this.addr,r),rn(i,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||gu,r[o])}function my(n,t,e){let i=this.cache,s=t.length,r=Ca(e,s);sn(i,r)||(n.uniform1iv(this.addr,r),rn(i,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||pu,r[o])}function gy(n){switch(n){case 5126:return Kg;case 35664:return jg;case 35665:return Qg;case 35666:return ty;case 35674:return ey;case 35675:return ny;case 35676:return iy;case 5124:case 35670:return sy;case 35667:case 35671:return ry;case 35668:case 35672:return oy;case 35669:case 35673:return ay;case 5125:return ly;case 36294:return cy;case 36295:return hy;case 36296:return dy;case 35678:case 36198:case 36298:case 36306:case 35682:return uy;case 35679:case 36299:case 36307:return fy;case 35680:case 36300:case 36308:case 36293:return py;case 36289:case 36303:case 36311:case 36292:return my}}var xc=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=Jg(e.type)}},vc=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=gy(e.type)}},_c=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],i)}}},_l=/(\w+)(\])?(\[|\.)?/g;function bd(n,t){n.seq.push(t),n.map[t.id]=t}function yy(n,t,e){let i=n.name,s=i.length;for(_l.lastIndex=0;;){let r=_l.exec(i),o=_l.lastIndex,a=r[1],l=r[2]==="]",h=r[3];if(l&&(a=a|0),h===void 0||h==="["&&o+2===s){bd(e,h===void 0?new xc(a,n,t):new vc(a,n,t));break}else{let g=e.map[a];g===void 0&&(g=new _c(a),bd(e,g)),e=g}}}var Gs=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);yy(r,o,this)}}setValue(t,e,i,s){let r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){let s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let i=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&i.push(o)}return i}};function Sd(n,t,e){let i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}var xy=37297,vy=0;function _y(n,t){let e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}var wd=new Me;function My(n){Ae._getMatrix(wd,Ae.workingColorSpace,n);let t=`mat3( ${wd.elements.map(e=>e.toFixed(4))} )`;switch(Ae.getTransfer(n)){case Ra:return[t,"LinearTransferOETF"];case ke:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function Ed(n,t,e){let i=n.getShaderParameter(t,n.COMPILE_STATUS),s=n.getShaderInfoLog(t).trim();if(i&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+_y(n.getShaderSource(t),o)}else return s}function by(n,t){let e=My(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Sy(n,t){let e;switch(t){case Df:e="Linear";break;case Uf:e="Reinhard";break;case Nf:e="Cineon";break;case Of:e="ACESFilmic";break;case Bf:e="AgX";break;case zf:e="Neutral";break;case Ff:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Co=new $;function wy(){Ae.getLuminanceCoefficients(Co);let n=Co.x.toFixed(4),t=Co.y.toFixed(4),e=Co.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ey(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(wr).join(`
`)}function Ty(n){let t=[];for(let e in n){let i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function Ay(n,t){let e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(t,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function wr(n){return n!==""}function Td(n,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Ad(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Ry=/^[ \t]*#include +<([\w\d./]+)>/gm;function Mc(n){return n.replace(Ry,Iy)}var Cy=new Map;function Iy(n,t){let e=ge[t];if(e===void 0){let i=Cy.get(t);if(i!==void 0)e=ge[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Mc(e)}var Py=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Rd(n){return n.replace(Py,Ly)}function Ly(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Cd(n){let t=`precision ${n.precision} float;
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
#define LOW_PRECISION`),t}function ky(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Yd?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===Jc?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===pi&&(t="SHADOWMAP_TYPE_VSM"),t}function Dy(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Xs:case qs:t="ENVMAP_TYPE_CUBE";break;case Aa:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Uy(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case qs:t="ENVMAP_MODE_REFRACTION";break}return t}function Ny(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Zd:t="ENVMAP_BLENDING_MULTIPLY";break;case Lf:t="ENVMAP_BLENDING_MIX";break;case kf:t="ENVMAP_BLENDING_ADD";break}return t}function Oy(n){let t=n.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function Fy(n,t,e,i){let s=n.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=ky(e),h=Dy(e),u=Uy(e),g=Ny(e),f=Oy(e),c=Ey(e),d=Ty(r),M=s.createProgram(),m,p,S=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d].filter(wr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d].filter(wr).join(`
`),p.length>0&&(p+=`
`)):(m=[Cd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(wr).join(`
`),p=[Cd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",e.envMap?"#define "+g:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ii?"#define TONE_MAPPING":"",e.toneMapping!==ii?ge.tonemapping_pars_fragment:"",e.toneMapping!==ii?Sy("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ge.colorspace_pars_fragment,by("linearToOutputTexel",e.outputColorSpace),wy(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(wr).join(`
`)),o=Mc(o),o=Td(o,e),o=Ad(o,e),a=Mc(a),a=Td(a,e),a=Ad(a,e),o=Rd(o),a=Rd(a),e.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[c,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===$h?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===$h?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let _=S+m+o,v=S+p+a,L=Sd(s,s.VERTEX_SHADER,_),E=Sd(s,s.FRAGMENT_SHADER,v);s.attachShader(M,L),s.attachShader(M,E),e.index0AttributeName!==void 0?s.bindAttribLocation(M,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(M,0,"position"),s.linkProgram(M);function T(b){if(n.debug.checkShaderErrors){let A=s.getProgramInfoLog(M).trim(),w=s.getShaderInfoLog(L).trim(),I=s.getShaderInfoLog(E).trim(),O=!0,D=!0;if(s.getProgramParameter(M,s.LINK_STATUS)===!1)if(O=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,M,L,E);else{let B=Ed(s,L,"vertex"),F=Ed(s,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(M,s.VALIDATE_STATUS)+`

Material Name: `+b.name+`
Material Type: `+b.type+`

Program Info Log: `+A+`
`+B+`
`+F)}else A!==""?console.warn("THREE.WebGLProgram: Program Info Log:",A):(w===""||I==="")&&(D=!1);D&&(b.diagnostics={runnable:O,programLog:A,vertexShader:{log:w,prefix:m},fragmentShader:{log:I,prefix:p}})}s.deleteShader(L),s.deleteShader(E),R=new Gs(s,M),x=Ay(s,M)}let R;this.getUniforms=function(){return R===void 0&&T(this),R};let x;this.getAttributes=function(){return x===void 0&&T(this),x};let y=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=s.getProgramParameter(M,xy)),y},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(M),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=vy++,this.cacheKey=t,this.usedTimes=1,this.program=M,this.vertexShader=L,this.fragmentShader=E,this}var By=0,bc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new Sc(t),e.set(t,i)),i}},Sc=class{constructor(t){this.id=By++,this.code=t,this.usedTimes=0}};function zy(n,t,e,i,s,r,o){let a=new Ko,l=new bc,h=new Set,u=[],g=s.logarithmicDepthBuffer,f=s.vertexTextures,c=s.precision,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(x){return h.add(x),x===0?"uv":`uv${x}`}function m(x,y,b,A,w){let I=A.fog,O=w.geometry,D=x.isMeshStandardMaterial?A.environment:null,B=(x.isMeshStandardMaterial?e:t).get(x.envMap||D),F=B&&B.mapping===Aa?B.image.height:null,q=d[x.type];x.precision!==null&&(c=s.getMaxPrecision(x.precision),c!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",c,"instead."));let st=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,P=st!==void 0?st.length:0,ft=0;O.morphAttributes.position!==void 0&&(ft=1),O.morphAttributes.normal!==void 0&&(ft=2),O.morphAttributes.color!==void 0&&(ft=3);let Ft,U,Y,Q;if(q){let et=ti[q];Ft=et.vertexShader,U=et.fragmentShader}else Ft=x.vertexShader,U=x.fragmentShader,l.update(x),Y=l.getVertexShaderID(x),Q=l.getFragmentShaderID(x);let W=n.getRenderTarget(),lt=n.state.buffers.depth.getReversed(),ot=w.isInstancedMesh===!0,wt=w.isBatchedMesh===!0,pt=!!x.map,V=!!x.matcap,Z=!!B,H=!!x.aoMap,Lt=!!x.lightMap,xt=!!x.bumpMap,bt=!!x.normalMap,Bt=!!x.displacementMap,K=!!x.emissiveMap,Ot=!!x.metalnessMap,z=!!x.roughnessMap,k=x.anisotropy>0,mt=x.clearcoat>0,Rt=x.dispersion>0,Pt=x.iridescence>0,J=x.sheen>0,dt=x.transmission>0,ct=k&&!!x.anisotropyMap,_t=mt&&!!x.clearcoatMap,Et=mt&&!!x.clearcoatNormalMap,Ct=mt&&!!x.clearcoatRoughnessMap,It=Pt&&!!x.iridescenceMap,Wt=Pt&&!!x.iridescenceThicknessMap,Kt=J&&!!x.sheenColorMap,qt=J&&!!x.sheenRoughnessMap,ue=!!x.specularMap,re=!!x.specularColorMap,Se=!!x.specularIntensityMap,at=dt&&!!x.transmissionMap,Yt=dt&&!!x.thicknessMap,Tt=!!x.gradientMap,Ut=!!x.alphaMap,C=x.alphaTest>0,G=!!x.alphaHash,j=!!x.extensions,rt=ii;x.toneMapped&&(W===null||W.isXRRenderTarget===!0)&&(rt=n.toneMapping);let vt={shaderID:q,shaderType:x.type,shaderName:x.name,vertexShader:Ft,fragmentShader:U,defines:x.defines,customVertexShaderID:Y,customFragmentShaderID:Q,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:c,batching:wt,batchingColor:wt&&w._colorsTexture!==null,instancing:ot,instancingColor:ot&&w.instanceColor!==null,instancingMorph:ot&&w.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:W===null?n.outputColorSpace:W.isXRRenderTarget===!0?W.texture.colorSpace:tr,alphaToCoverage:!!x.alphaToCoverage,map:pt,matcap:V,envMap:Z,envMapMode:Z&&B.mapping,envMapCubeUVHeight:F,aoMap:H,lightMap:Lt,bumpMap:xt,normalMap:bt,displacementMap:f&&Bt,emissiveMap:K,normalMapObjectSpace:bt&&x.normalMapType===Gf,normalMapTangentSpace:bt&&x.normalMapType===ou,metalnessMap:Ot,roughnessMap:z,anisotropy:k,anisotropyMap:ct,clearcoat:mt,clearcoatMap:_t,clearcoatNormalMap:Et,clearcoatRoughnessMap:Ct,dispersion:Rt,iridescence:Pt,iridescenceMap:It,iridescenceThicknessMap:Wt,sheen:J,sheenColorMap:Kt,sheenRoughnessMap:qt,specularMap:ue,specularColorMap:re,specularIntensityMap:Se,transmission:dt,transmissionMap:at,thicknessMap:Yt,gradientMap:Tt,opaque:x.transparent===!1&&x.blending===Hs&&x.alphaToCoverage===!1,alphaMap:Ut,alphaTest:C,alphaHash:G,combine:x.combine,mapUv:pt&&M(x.map.channel),aoMapUv:H&&M(x.aoMap.channel),lightMapUv:Lt&&M(x.lightMap.channel),bumpMapUv:xt&&M(x.bumpMap.channel),normalMapUv:bt&&M(x.normalMap.channel),displacementMapUv:Bt&&M(x.displacementMap.channel),emissiveMapUv:K&&M(x.emissiveMap.channel),metalnessMapUv:Ot&&M(x.metalnessMap.channel),roughnessMapUv:z&&M(x.roughnessMap.channel),anisotropyMapUv:ct&&M(x.anisotropyMap.channel),clearcoatMapUv:_t&&M(x.clearcoatMap.channel),clearcoatNormalMapUv:Et&&M(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ct&&M(x.clearcoatRoughnessMap.channel),iridescenceMapUv:It&&M(x.iridescenceMap.channel),iridescenceThicknessMapUv:Wt&&M(x.iridescenceThicknessMap.channel),sheenColorMapUv:Kt&&M(x.sheenColorMap.channel),sheenRoughnessMapUv:qt&&M(x.sheenRoughnessMap.channel),specularMapUv:ue&&M(x.specularMap.channel),specularColorMapUv:re&&M(x.specularColorMap.channel),specularIntensityMapUv:Se&&M(x.specularIntensityMap.channel),transmissionMapUv:at&&M(x.transmissionMap.channel),thicknessMapUv:Yt&&M(x.thicknessMap.channel),alphaMapUv:Ut&&M(x.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(bt||k),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,pointsUvs:w.isPoints===!0&&!!O.attributes.uv&&(pt||Ut),fog:!!I,useFog:x.fog===!0,fogExp2:!!I&&I.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:g,reverseDepthBuffer:lt,skinning:w.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:P,morphTextureStride:ft,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:x.dithering,shadowMapEnabled:n.shadowMap.enabled&&b.length>0,shadowMapType:n.shadowMap.type,toneMapping:rt,decodeVideoTexture:pt&&x.map.isVideoTexture===!0&&Ae.getTransfer(x.map.colorSpace)===ke,decodeVideoTextureEmissive:K&&x.emissiveMap.isVideoTexture===!0&&Ae.getTransfer(x.emissiveMap.colorSpace)===ke,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===je,flipSided:x.side===un,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:j&&x.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(j&&x.extensions.multiDraw===!0||wt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return vt.vertexUv1s=h.has(1),vt.vertexUv2s=h.has(2),vt.vertexUv3s=h.has(3),h.clear(),vt}function p(x){let y=[];if(x.shaderID?y.push(x.shaderID):(y.push(x.customVertexShaderID),y.push(x.customFragmentShaderID)),x.defines!==void 0)for(let b in x.defines)y.push(b),y.push(x.defines[b]);return x.isRawShaderMaterial===!1&&(S(y,x),_(y,x),y.push(n.outputColorSpace)),y.push(x.customProgramCacheKey),y.join()}function S(x,y){x.push(y.precision),x.push(y.outputColorSpace),x.push(y.envMapMode),x.push(y.envMapCubeUVHeight),x.push(y.mapUv),x.push(y.alphaMapUv),x.push(y.lightMapUv),x.push(y.aoMapUv),x.push(y.bumpMapUv),x.push(y.normalMapUv),x.push(y.displacementMapUv),x.push(y.emissiveMapUv),x.push(y.metalnessMapUv),x.push(y.roughnessMapUv),x.push(y.anisotropyMapUv),x.push(y.clearcoatMapUv),x.push(y.clearcoatNormalMapUv),x.push(y.clearcoatRoughnessMapUv),x.push(y.iridescenceMapUv),x.push(y.iridescenceThicknessMapUv),x.push(y.sheenColorMapUv),x.push(y.sheenRoughnessMapUv),x.push(y.specularMapUv),x.push(y.specularColorMapUv),x.push(y.specularIntensityMapUv),x.push(y.transmissionMapUv),x.push(y.thicknessMapUv),x.push(y.combine),x.push(y.fogExp2),x.push(y.sizeAttenuation),x.push(y.morphTargetsCount),x.push(y.morphAttributeCount),x.push(y.numDirLights),x.push(y.numPointLights),x.push(y.numSpotLights),x.push(y.numSpotLightMaps),x.push(y.numHemiLights),x.push(y.numRectAreaLights),x.push(y.numDirLightShadows),x.push(y.numPointLightShadows),x.push(y.numSpotLightShadows),x.push(y.numSpotLightShadowsWithMaps),x.push(y.numLightProbes),x.push(y.shadowMapType),x.push(y.toneMapping),x.push(y.numClippingPlanes),x.push(y.numClipIntersection),x.push(y.depthPacking)}function _(x,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),y.dispersion&&a.enable(20),y.batchingColor&&a.enable(21),x.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reverseDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),x.push(a.mask)}function v(x){let y=d[x.type],b;if(y){let A=ti[y];b=rh.clone(A.uniforms)}else b=x.uniforms;return b}function L(x,y){let b;for(let A=0,w=u.length;A<w;A++){let I=u[A];if(I.cacheKey===y){b=I,++b.usedTimes;break}}return b===void 0&&(b=new Fy(n,y,x,r),u.push(b)),b}function E(x){if(--x.usedTimes===0){let y=u.indexOf(x);u[y]=u[u.length-1],u.pop(),x.destroy()}}function T(x){l.remove(x)}function R(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:v,acquireProgram:L,releaseProgram:E,releaseShaderCache:T,programs:u,dispose:R}}function Hy(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function $y(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function Id(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Pd(){let n=[],t=0,e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function o(g,f,c,d,M,m){let p=n[t];return p===void 0?(p={id:g.id,object:g,geometry:f,material:c,groupOrder:d,renderOrder:g.renderOrder,z:M,group:m},n[t]=p):(p.id=g.id,p.object=g,p.geometry=f,p.material=c,p.groupOrder=d,p.renderOrder=g.renderOrder,p.z=M,p.group=m),t++,p}function a(g,f,c,d,M,m){let p=o(g,f,c,d,M,m);c.transmission>0?i.push(p):c.transparent===!0?s.push(p):e.push(p)}function l(g,f,c,d,M,m){let p=o(g,f,c,d,M,m);c.transmission>0?i.unshift(p):c.transparent===!0?s.unshift(p):e.unshift(p)}function h(g,f){e.length>1&&e.sort(g||$y),i.length>1&&i.sort(f||Id),s.length>1&&s.sort(f||Id)}function u(){for(let g=t,f=n.length;g<f;g++){let c=n[g];if(c.id===null)break;c.id=null,c.object=null,c.geometry=null,c.material=null,c.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:u,sort:h}}function Vy(){let n=new WeakMap;function t(i,s){let r=n.get(i),o;return r===void 0?(o=new Pd,n.set(i,[o])):s>=r.length?(o=new Pd,r.push(o)):o=r[s],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function Gy(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new $,color:new oe};break;case"SpotLight":e={position:new $,direction:new $,color:new oe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new $,color:new oe,distance:0,decay:0};break;case"HemisphereLight":e={direction:new $,skyColor:new oe,groundColor:new oe};break;case"RectAreaLight":e={color:new oe,position:new $,halfWidth:new $,halfHeight:new $};break}return n[t.id]=e,e}}}function Wy(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new zt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new zt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new zt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}var Xy=0;function qy(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function Yy(n){let t=new Gy,e=Wy(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new $);let s=new $,r=new Ee,o=new Ee;function a(h){let u=0,g=0,f=0;for(let x=0;x<9;x++)i.probe[x].set(0,0,0);let c=0,d=0,M=0,m=0,p=0,S=0,_=0,v=0,L=0,E=0,T=0;h.sort(qy);for(let x=0,y=h.length;x<y;x++){let b=h[x],A=b.color,w=b.intensity,I=b.distance,O=b.shadow&&b.shadow.map?b.shadow.map.texture:null;if(b.isAmbientLight)u+=A.r*w,g+=A.g*w,f+=A.b*w;else if(b.isLightProbe){for(let D=0;D<9;D++)i.probe[D].addScaledVector(b.sh.coefficients[D],w);T++}else if(b.isDirectionalLight){let D=t.get(b);if(D.color.copy(b.color).multiplyScalar(b.intensity),b.castShadow){let B=b.shadow,F=e.get(b);F.shadowIntensity=B.intensity,F.shadowBias=B.bias,F.shadowNormalBias=B.normalBias,F.shadowRadius=B.radius,F.shadowMapSize=B.mapSize,i.directionalShadow[c]=F,i.directionalShadowMap[c]=O,i.directionalShadowMatrix[c]=b.shadow.matrix,S++}i.directional[c]=D,c++}else if(b.isSpotLight){let D=t.get(b);D.position.setFromMatrixPosition(b.matrixWorld),D.color.copy(A).multiplyScalar(w),D.distance=I,D.coneCos=Math.cos(b.angle),D.penumbraCos=Math.cos(b.angle*(1-b.penumbra)),D.decay=b.decay,i.spot[M]=D;let B=b.shadow;if(b.map&&(i.spotLightMap[L]=b.map,L++,B.updateMatrices(b),b.castShadow&&E++),i.spotLightMatrix[M]=B.matrix,b.castShadow){let F=e.get(b);F.shadowIntensity=B.intensity,F.shadowBias=B.bias,F.shadowNormalBias=B.normalBias,F.shadowRadius=B.radius,F.shadowMapSize=B.mapSize,i.spotShadow[M]=F,i.spotShadowMap[M]=O,v++}M++}else if(b.isRectAreaLight){let D=t.get(b);D.color.copy(A).multiplyScalar(w),D.halfWidth.set(b.width*.5,0,0),D.halfHeight.set(0,b.height*.5,0),i.rectArea[m]=D,m++}else if(b.isPointLight){let D=t.get(b);if(D.color.copy(b.color).multiplyScalar(b.intensity),D.distance=b.distance,D.decay=b.decay,b.castShadow){let B=b.shadow,F=e.get(b);F.shadowIntensity=B.intensity,F.shadowBias=B.bias,F.shadowNormalBias=B.normalBias,F.shadowRadius=B.radius,F.shadowMapSize=B.mapSize,F.shadowCameraNear=B.camera.near,F.shadowCameraFar=B.camera.far,i.pointShadow[d]=F,i.pointShadowMap[d]=O,i.pointShadowMatrix[d]=b.shadow.matrix,_++}i.point[d]=D,d++}else if(b.isHemisphereLight){let D=t.get(b);D.skyColor.copy(b.color).multiplyScalar(w),D.groundColor.copy(b.groundColor).multiplyScalar(w),i.hemi[p]=D,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Zt.LTC_FLOAT_1,i.rectAreaLTC2=Zt.LTC_FLOAT_2):(i.rectAreaLTC1=Zt.LTC_HALF_1,i.rectAreaLTC2=Zt.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=g,i.ambient[2]=f;let R=i.hash;(R.directionalLength!==c||R.pointLength!==d||R.spotLength!==M||R.rectAreaLength!==m||R.hemiLength!==p||R.numDirectionalShadows!==S||R.numPointShadows!==_||R.numSpotShadows!==v||R.numSpotMaps!==L||R.numLightProbes!==T)&&(i.directional.length=c,i.spot.length=M,i.rectArea.length=m,i.point.length=d,i.hemi.length=p,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.pointShadow.length=_,i.pointShadowMap.length=_,i.spotShadow.length=v,i.spotShadowMap.length=v,i.directionalShadowMatrix.length=S,i.pointShadowMatrix.length=_,i.spotLightMatrix.length=v+L-E,i.spotLightMap.length=L,i.numSpotLightShadowsWithMaps=E,i.numLightProbes=T,R.directionalLength=c,R.pointLength=d,R.spotLength=M,R.rectAreaLength=m,R.hemiLength=p,R.numDirectionalShadows=S,R.numPointShadows=_,R.numSpotShadows=v,R.numSpotMaps=L,R.numLightProbes=T,i.version=Xy++)}function l(h,u){let g=0,f=0,c=0,d=0,M=0,m=u.matrixWorldInverse;for(let p=0,S=h.length;p<S;p++){let _=h[p];if(_.isDirectionalLight){let v=i.directional[g];v.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),g++}else if(_.isSpotLight){let v=i.spot[c];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),c++}else if(_.isRectAreaLight){let v=i.rectArea[d];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(m),o.identity(),r.copy(_.matrixWorld),r.premultiply(m),o.extractRotation(r),v.halfWidth.set(_.width*.5,0,0),v.halfHeight.set(0,_.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),d++}else if(_.isPointLight){let v=i.point[f];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(m),f++}else if(_.isHemisphereLight){let v=i.hemi[M];v.direction.setFromMatrixPosition(_.matrixWorld),v.direction.transformDirection(m),M++}}}return{setup:a,setupView:l,state:i}}function Ld(n){let t=new Yy(n),e=[],i=[];function s(u){h.camera=u,e.length=0,i.length=0}function r(u){e.push(u)}function o(u){i.push(u)}function a(){t.setup(e)}function l(u){t.setupView(e,u)}let h={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:h,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function Zy(n){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new Ld(n),t.set(s,[a])):r>=o.length?(a=new Ld(n),o.push(a)):a=o[r],a}function i(){t=new WeakMap}return{get:e,dispose:i}}var wc=class extends Mi{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=$f,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Ec=class extends Mi{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},Jy=`void main() {
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
}`;function jy(n,t,e){let i=new Lr,s=new zt,r=new zt,o=new Ze,a=new wc({depthPacking:Vf}),l=new Ec,h={},u=e.maxTextureSize,g={[Fi]:un,[un]:Fi,[je]:je},f=new wn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new zt},radius:{value:4}},vertexShader:Jy,fragmentShader:Ky}),c=f.clone();c.defines.HORIZONTAL_PASS=1;let d=new Ue;d.setAttribute("position",new $e(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let M=new Ne(d,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Yd;let p=this.type;this.render=function(E,T,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;let x=n.getRenderTarget(),y=n.getActiveCubeFace(),b=n.getActiveMipmapLevel(),A=n.state;A.setBlending(Ni),A.buffers.color.setClear(1,1,1,1),A.buffers.depth.setTest(!0),A.setScissorTest(!1);let w=p!==pi&&this.type===pi,I=p===pi&&this.type!==pi;for(let O=0,D=E.length;O<D;O++){let B=E[O],F=B.shadow;if(F===void 0){console.warn("THREE.WebGLShadowMap:",B,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;s.copy(F.mapSize);let q=F.getFrameExtents();if(s.multiply(q),r.copy(F.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/q.x),s.x=r.x*q.x,F.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/q.y),s.y=r.y*q.y,F.mapSize.y=r.y)),F.map===null||w===!0||I===!0){let P=this.type!==pi?{minFilter:Sn,magFilter:Sn}:{};F.map!==null&&F.map.dispose(),F.map=new vi(s.x,s.y,P),F.map.texture.name=B.name+".shadowMap",F.camera.updateProjectionMatrix()}n.setRenderTarget(F.map),n.clear();let st=F.getViewportCount();for(let P=0;P<st;P++){let ft=F.getViewport(P);o.set(r.x*ft.x,r.y*ft.y,r.x*ft.z,r.y*ft.w),A.viewport(o),F.updateMatrices(B,P),i=F.getFrustum(),v(T,R,F.camera,B,this.type)}F.isPointLightShadow!==!0&&this.type===pi&&S(F,R),F.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(x,y,b)};function S(E,T){let R=t.update(M);f.defines.VSM_SAMPLES!==E.blurSamples&&(f.defines.VSM_SAMPLES=E.blurSamples,c.defines.VSM_SAMPLES=E.blurSamples,f.needsUpdate=!0,c.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new vi(s.x,s.y)),f.uniforms.shadow_pass.value=E.map.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,n.setRenderTarget(E.mapPass),n.clear(),n.renderBufferDirect(T,null,R,f,M,null),c.uniforms.shadow_pass.value=E.mapPass.texture,c.uniforms.resolution.value=E.mapSize,c.uniforms.radius.value=E.radius,n.setRenderTarget(E.map),n.clear(),n.renderBufferDirect(T,null,R,c,M,null)}function _(E,T,R,x){let y=null,b=R.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(b!==void 0)y=b;else if(y=R.isPointLight===!0?l:a,n.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){let A=y.uuid,w=T.uuid,I=h[A];I===void 0&&(I={},h[A]=I);let O=I[w];O===void 0&&(O=y.clone(),I[w]=O,T.addEventListener("dispose",L)),y=O}if(y.visible=T.visible,y.wireframe=T.wireframe,x===pi?y.side=T.shadowSide!==null?T.shadowSide:T.side:y.side=T.shadowSide!==null?T.shadowSide:g[T.side],y.alphaMap=T.alphaMap,y.alphaTest=T.alphaTest,y.map=T.map,y.clipShadows=T.clipShadows,y.clippingPlanes=T.clippingPlanes,y.clipIntersection=T.clipIntersection,y.displacementMap=T.displacementMap,y.displacementScale=T.displacementScale,y.displacementBias=T.displacementBias,y.wireframeLinewidth=T.wireframeLinewidth,y.linewidth=T.linewidth,R.isPointLight===!0&&y.isMeshDistanceMaterial===!0){let A=n.properties.get(y);A.light=R}return y}function v(E,T,R,x,y){if(E.visible===!1)return;if(E.layers.test(T.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&y===pi)&&(!E.frustumCulled||i.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,E.matrixWorld);let w=t.update(E),I=E.material;if(Array.isArray(I)){let O=w.groups;for(let D=0,B=O.length;D<B;D++){let F=O[D],q=I[F.materialIndex];if(q&&q.visible){let st=_(E,q,x,y);E.onBeforeShadow(n,E,T,R,w,st,F),n.renderBufferDirect(R,null,w,st,E,F),E.onAfterShadow(n,E,T,R,w,st,F)}}}else if(I.visible){let O=_(E,I,x,y);E.onBeforeShadow(n,E,T,R,w,O,null),n.renderBufferDirect(R,null,w,O,E,null),E.onAfterShadow(n,E,T,R,w,O,null)}}let A=E.children;for(let w=0,I=A.length;w<I;w++)v(A[w],T,R,x,y)}function L(E){E.target.removeEventListener("dispose",L);for(let R in h){let x=h[R],y=E.target.uuid;y in x&&(x[y].dispose(),delete x[y])}}}var Qy={[Cl]:Il,[Pl]:Dl,[Ll]:Ul,[Ws]:kl,[Il]:Cl,[Dl]:Pl,[Ul]:Ll,[kl]:Ws};function tx(n,t){function e(){let at=!1,Yt=new Ze,Tt=null,Ut=new Ze(0,0,0,0);return{setMask:function(C){Tt!==C&&!at&&(n.colorMask(C,C,C,C),Tt=C)},setLocked:function(C){at=C},setClear:function(C,G,j,rt,vt){vt===!0&&(C*=rt,G*=rt,j*=rt),Yt.set(C,G,j,rt),Ut.equals(Yt)===!1&&(n.clearColor(C,G,j,rt),Ut.copy(Yt))},reset:function(){at=!1,Tt=null,Ut.set(-1,0,0,0)}}}function i(){let at=!1,Yt=!1,Tt=null,Ut=null,C=null;return{setReversed:function(G){if(Yt!==G){let j=t.get("EXT_clip_control");Yt?j.clipControlEXT(j.LOWER_LEFT_EXT,j.ZERO_TO_ONE_EXT):j.clipControlEXT(j.LOWER_LEFT_EXT,j.NEGATIVE_ONE_TO_ONE_EXT);let rt=C;C=null,this.setClear(rt)}Yt=G},getReversed:function(){return Yt},setTest:function(G){G?W(n.DEPTH_TEST):lt(n.DEPTH_TEST)},setMask:function(G){Tt!==G&&!at&&(n.depthMask(G),Tt=G)},setFunc:function(G){if(Yt&&(G=Qy[G]),Ut!==G){switch(G){case Cl:n.depthFunc(n.NEVER);break;case Il:n.depthFunc(n.ALWAYS);break;case Pl:n.depthFunc(n.LESS);break;case Ws:n.depthFunc(n.LEQUAL);break;case Ll:n.depthFunc(n.EQUAL);break;case kl:n.depthFunc(n.GEQUAL);break;case Dl:n.depthFunc(n.GREATER);break;case Ul:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Ut=G}},setLocked:function(G){at=G},setClear:function(G){C!==G&&(Yt&&(G=1-G),n.clearDepth(G),C=G)},reset:function(){at=!1,Tt=null,Ut=null,C=null,Yt=!1}}}function s(){let at=!1,Yt=null,Tt=null,Ut=null,C=null,G=null,j=null,rt=null,vt=null;return{setTest:function(et){at||(et?W(n.STENCIL_TEST):lt(n.STENCIL_TEST))},setMask:function(et){Yt!==et&&!at&&(n.stencilMask(et),Yt=et)},setFunc:function(et,St,Vt){(Tt!==et||Ut!==St||C!==Vt)&&(n.stencilFunc(et,St,Vt),Tt=et,Ut=St,C=Vt)},setOp:function(et,St,Vt){(G!==et||j!==St||rt!==Vt)&&(n.stencilOp(et,St,Vt),G=et,j=St,rt=Vt)},setLocked:function(et){at=et},setClear:function(et){vt!==et&&(n.clearStencil(et),vt=et)},reset:function(){at=!1,Yt=null,Tt=null,Ut=null,C=null,G=null,j=null,rt=null,vt=null}}}let r=new e,o=new i,a=new s,l=new WeakMap,h=new WeakMap,u={},g={},f=new WeakMap,c=[],d=null,M=!1,m=null,p=null,S=null,_=null,v=null,L=null,E=null,T=new oe(0,0,0),R=0,x=!1,y=null,b=null,A=null,w=null,I=null,O=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),D=!1,B=0,F=n.getParameter(n.VERSION);F.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec(F)[1]),D=B>=1):F.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec(F)[1]),D=B>=2);let q=null,st={},P=n.getParameter(n.SCISSOR_BOX),ft=n.getParameter(n.VIEWPORT),Ft=new Ze().fromArray(P),U=new Ze().fromArray(ft);function Y(at,Yt,Tt,Ut){let C=new Uint8Array(4),G=n.createTexture();n.bindTexture(at,G),n.texParameteri(at,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(at,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let j=0;j<Tt;j++)at===n.TEXTURE_3D||at===n.TEXTURE_2D_ARRAY?n.texImage3D(Yt,0,n.RGBA,1,1,Ut,0,n.RGBA,n.UNSIGNED_BYTE,C):n.texImage2D(Yt+j,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,C);return G}let Q={};Q[n.TEXTURE_2D]=Y(n.TEXTURE_2D,n.TEXTURE_2D,1),Q[n.TEXTURE_CUBE_MAP]=Y(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Q[n.TEXTURE_2D_ARRAY]=Y(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Q[n.TEXTURE_3D]=Y(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),W(n.DEPTH_TEST),o.setFunc(Ws),xt(!1),bt(Dh),W(n.CULL_FACE),H(Ni);function W(at){u[at]!==!0&&(n.enable(at),u[at]=!0)}function lt(at){u[at]!==!1&&(n.disable(at),u[at]=!1)}function ot(at,Yt){return g[at]!==Yt?(n.bindFramebuffer(at,Yt),g[at]=Yt,at===n.DRAW_FRAMEBUFFER&&(g[n.FRAMEBUFFER]=Yt),at===n.FRAMEBUFFER&&(g[n.DRAW_FRAMEBUFFER]=Yt),!0):!1}function wt(at,Yt){let Tt=c,Ut=!1;if(at){Tt=f.get(Yt),Tt===void 0&&(Tt=[],f.set(Yt,Tt));let C=at.textures;if(Tt.length!==C.length||Tt[0]!==n.COLOR_ATTACHMENT0){for(let G=0,j=C.length;G<j;G++)Tt[G]=n.COLOR_ATTACHMENT0+G;Tt.length=C.length,Ut=!0}}else Tt[0]!==n.BACK&&(Tt[0]=n.BACK,Ut=!0);Ut&&n.drawBuffers(Tt)}function pt(at){return d!==at?(n.useProgram(at),d=at,!0):!1}let V={[is]:n.FUNC_ADD,[mf]:n.FUNC_SUBTRACT,[gf]:n.FUNC_REVERSE_SUBTRACT};V[yf]=n.MIN,V[xf]=n.MAX;let Z={[vf]:n.ZERO,[_f]:n.ONE,[Mf]:n.SRC_COLOR,[Al]:n.SRC_ALPHA,[Af]:n.SRC_ALPHA_SATURATE,[Ef]:n.DST_COLOR,[Sf]:n.DST_ALPHA,[bf]:n.ONE_MINUS_SRC_COLOR,[Rl]:n.ONE_MINUS_SRC_ALPHA,[Tf]:n.ONE_MINUS_DST_COLOR,[wf]:n.ONE_MINUS_DST_ALPHA,[Rf]:n.CONSTANT_COLOR,[Cf]:n.ONE_MINUS_CONSTANT_COLOR,[If]:n.CONSTANT_ALPHA,[Pf]:n.ONE_MINUS_CONSTANT_ALPHA};function H(at,Yt,Tt,Ut,C,G,j,rt,vt,et){if(at===Ni){M===!0&&(lt(n.BLEND),M=!1);return}if(M===!1&&(W(n.BLEND),M=!0),at!==pf){if(at!==m||et!==x){if((p!==is||v!==is)&&(n.blendEquation(n.FUNC_ADD),p=is,v=is),et)switch(at){case Hs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Uh:n.blendFunc(n.ONE,n.ONE);break;case Nh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Oh:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",at);break}else switch(at){case Hs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Uh:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Nh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Oh:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",at);break}S=null,_=null,L=null,E=null,T.set(0,0,0),R=0,m=at,x=et}return}C=C||Yt,G=G||Tt,j=j||Ut,(Yt!==p||C!==v)&&(n.blendEquationSeparate(V[Yt],V[C]),p=Yt,v=C),(Tt!==S||Ut!==_||G!==L||j!==E)&&(n.blendFuncSeparate(Z[Tt],Z[Ut],Z[G],Z[j]),S=Tt,_=Ut,L=G,E=j),(rt.equals(T)===!1||vt!==R)&&(n.blendColor(rt.r,rt.g,rt.b,vt),T.copy(rt),R=vt),m=at,x=!1}function Lt(at,Yt){at.side===je?lt(n.CULL_FACE):W(n.CULL_FACE);let Tt=at.side===un;Yt&&(Tt=!Tt),xt(Tt),at.blending===Hs&&at.transparent===!1?H(Ni):H(at.blending,at.blendEquation,at.blendSrc,at.blendDst,at.blendEquationAlpha,at.blendSrcAlpha,at.blendDstAlpha,at.blendColor,at.blendAlpha,at.premultipliedAlpha),o.setFunc(at.depthFunc),o.setTest(at.depthTest),o.setMask(at.depthWrite),r.setMask(at.colorWrite);let Ut=at.stencilWrite;a.setTest(Ut),Ut&&(a.setMask(at.stencilWriteMask),a.setFunc(at.stencilFunc,at.stencilRef,at.stencilFuncMask),a.setOp(at.stencilFail,at.stencilZFail,at.stencilZPass)),K(at.polygonOffset,at.polygonOffsetFactor,at.polygonOffsetUnits),at.alphaToCoverage===!0?W(n.SAMPLE_ALPHA_TO_COVERAGE):lt(n.SAMPLE_ALPHA_TO_COVERAGE)}function xt(at){y!==at&&(at?n.frontFace(n.CW):n.frontFace(n.CCW),y=at)}function bt(at){at!==uf?(W(n.CULL_FACE),at!==b&&(at===Dh?n.cullFace(n.BACK):at===ff?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):lt(n.CULL_FACE),b=at}function Bt(at){at!==A&&(D&&n.lineWidth(at),A=at)}function K(at,Yt,Tt){at?(W(n.POLYGON_OFFSET_FILL),(w!==Yt||I!==Tt)&&(n.polygonOffset(Yt,Tt),w=Yt,I=Tt)):lt(n.POLYGON_OFFSET_FILL)}function Ot(at){at?W(n.SCISSOR_TEST):lt(n.SCISSOR_TEST)}function z(at){at===void 0&&(at=n.TEXTURE0+O-1),q!==at&&(n.activeTexture(at),q=at)}function k(at,Yt,Tt){Tt===void 0&&(q===null?Tt=n.TEXTURE0+O-1:Tt=q);let Ut=st[Tt];Ut===void 0&&(Ut={type:void 0,texture:void 0},st[Tt]=Ut),(Ut.type!==at||Ut.texture!==Yt)&&(q!==Tt&&(n.activeTexture(Tt),q=Tt),n.bindTexture(at,Yt||Q[at]),Ut.type=at,Ut.texture=Yt)}function mt(){let at=st[q];at!==void 0&&at.type!==void 0&&(n.bindTexture(at.type,null),at.type=void 0,at.texture=void 0)}function Rt(){try{n.compressedTexImage2D.apply(n,arguments)}catch(at){console.error("THREE.WebGLState:",at)}}function Pt(){try{n.compressedTexImage3D.apply(n,arguments)}catch(at){console.error("THREE.WebGLState:",at)}}function J(){try{n.texSubImage2D.apply(n,arguments)}catch(at){console.error("THREE.WebGLState:",at)}}function dt(){try{n.texSubImage3D.apply(n,arguments)}catch(at){console.error("THREE.WebGLState:",at)}}function ct(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(at){console.error("THREE.WebGLState:",at)}}function _t(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(at){console.error("THREE.WebGLState:",at)}}function Et(){try{n.texStorage2D.apply(n,arguments)}catch(at){console.error("THREE.WebGLState:",at)}}function Ct(){try{n.texStorage3D.apply(n,arguments)}catch(at){console.error("THREE.WebGLState:",at)}}function It(){try{n.texImage2D.apply(n,arguments)}catch(at){console.error("THREE.WebGLState:",at)}}function Wt(){try{n.texImage3D.apply(n,arguments)}catch(at){console.error("THREE.WebGLState:",at)}}function Kt(at){Ft.equals(at)===!1&&(n.scissor(at.x,at.y,at.z,at.w),Ft.copy(at))}function qt(at){U.equals(at)===!1&&(n.viewport(at.x,at.y,at.z,at.w),U.copy(at))}function ue(at,Yt){let Tt=h.get(Yt);Tt===void 0&&(Tt=new WeakMap,h.set(Yt,Tt));let Ut=Tt.get(at);Ut===void 0&&(Ut=n.getUniformBlockIndex(Yt,at.name),Tt.set(at,Ut))}function re(at,Yt){let Ut=h.get(Yt).get(at);l.get(Yt)!==Ut&&(n.uniformBlockBinding(Yt,Ut,at.__bindingPointIndex),l.set(Yt,Ut))}function Se(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},q=null,st={},g={},f=new WeakMap,c=[],d=null,M=!1,m=null,p=null,S=null,_=null,v=null,L=null,E=null,T=new oe(0,0,0),R=0,x=!1,y=null,b=null,A=null,w=null,I=null,Ft.set(0,0,n.canvas.width,n.canvas.height),U.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:W,disable:lt,bindFramebuffer:ot,drawBuffers:wt,useProgram:pt,setBlending:H,setMaterial:Lt,setFlipSided:xt,setCullFace:bt,setLineWidth:Bt,setPolygonOffset:K,setScissorTest:Ot,activeTexture:z,bindTexture:k,unbindTexture:mt,compressedTexImage2D:Rt,compressedTexImage3D:Pt,texImage2D:It,texImage3D:Wt,updateUBOMapping:ue,uniformBlockBinding:re,texStorage2D:Et,texStorage3D:Ct,texSubImage2D:J,texSubImage3D:dt,compressedTexSubImage2D:ct,compressedTexSubImage3D:_t,scissor:Kt,viewport:qt,reset:Se}}function kd(n,t,e,i){let s=ex(i);switch(e){case tu:return n*t;case nu:return n*t;case iu:return n*t*2;case th:return n*t/s.components*s.byteLength;case eh:return n*t/s.components*s.byteLength;case su:return n*t*2/s.components*s.byteLength;case nh:return n*t*2/s.components*s.byteLength;case eu:return n*t*3/s.components*s.byteLength;case Ln:return n*t*4/s.components*s.byteLength;case ih:return n*t*4/s.components*s.byteLength;case zo:case Ho:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case $o:case Vo:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case zl:case $l:return Math.max(n,16)*Math.max(t,8)/4;case Bl:case Hl:return Math.max(n,8)*Math.max(t,8)/2;case Vl:case Gl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Wl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Xl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case ql:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case Yl:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case Zl:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case Jl:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case Kl:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case jl:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case Ql:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case tc:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case ec:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case nc:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case ic:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case sc:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case rc:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case Go:case oc:case ac:return Math.ceil(n/4)*Math.ceil(t/4)*16;case ru:case lc:return Math.ceil(n/4)*Math.ceil(t/4)*8;case cc:case hc:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function ex(n){switch(n){case xi:case Kd:return{byteLength:1,components:1};case Ir:case jd:case Gr:return{byteLength:2,components:1};case jc:case Qc:return{byteLength:2,components:4};case ls:case Kc:case ni:return{byteLength:4,components:1};case Qd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function nx(n,t,e,i,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new zt,u=new WeakMap,g,f=new WeakMap,c=!1;try{c=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function d(z,k){return c?new OffscreenCanvas(z,k):qo("canvas")}function M(z,k,mt){let Rt=1,Pt=Ot(z);if((Pt.width>mt||Pt.height>mt)&&(Rt=mt/Math.max(Pt.width,Pt.height)),Rt<1)if(typeof HTMLImageElement<"u"&&z instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&z instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&z instanceof ImageBitmap||typeof VideoFrame<"u"&&z instanceof VideoFrame){let J=Math.floor(Rt*Pt.width),dt=Math.floor(Rt*Pt.height);g===void 0&&(g=d(J,dt));let ct=k?d(J,dt):g;return ct.width=J,ct.height=dt,ct.getContext("2d").drawImage(z,0,0,J,dt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Pt.width+"x"+Pt.height+") to ("+J+"x"+dt+")."),ct}else return"data"in z&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Pt.width+"x"+Pt.height+")."),z;return z}function m(z){return z.generateMipmaps}function p(z){n.generateMipmap(z)}function S(z){return z.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:z.isWebGL3DRenderTarget?n.TEXTURE_3D:z.isWebGLArrayRenderTarget||z.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function _(z,k,mt,Rt,Pt=!1){if(z!==null){if(n[z]!==void 0)return n[z];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+z+"'")}let J=k;if(k===n.RED&&(mt===n.FLOAT&&(J=n.R32F),mt===n.HALF_FLOAT&&(J=n.R16F),mt===n.UNSIGNED_BYTE&&(J=n.R8)),k===n.RED_INTEGER&&(mt===n.UNSIGNED_BYTE&&(J=n.R8UI),mt===n.UNSIGNED_SHORT&&(J=n.R16UI),mt===n.UNSIGNED_INT&&(J=n.R32UI),mt===n.BYTE&&(J=n.R8I),mt===n.SHORT&&(J=n.R16I),mt===n.INT&&(J=n.R32I)),k===n.RG&&(mt===n.FLOAT&&(J=n.RG32F),mt===n.HALF_FLOAT&&(J=n.RG16F),mt===n.UNSIGNED_BYTE&&(J=n.RG8)),k===n.RG_INTEGER&&(mt===n.UNSIGNED_BYTE&&(J=n.RG8UI),mt===n.UNSIGNED_SHORT&&(J=n.RG16UI),mt===n.UNSIGNED_INT&&(J=n.RG32UI),mt===n.BYTE&&(J=n.RG8I),mt===n.SHORT&&(J=n.RG16I),mt===n.INT&&(J=n.RG32I)),k===n.RGB_INTEGER&&(mt===n.UNSIGNED_BYTE&&(J=n.RGB8UI),mt===n.UNSIGNED_SHORT&&(J=n.RGB16UI),mt===n.UNSIGNED_INT&&(J=n.RGB32UI),mt===n.BYTE&&(J=n.RGB8I),mt===n.SHORT&&(J=n.RGB16I),mt===n.INT&&(J=n.RGB32I)),k===n.RGBA_INTEGER&&(mt===n.UNSIGNED_BYTE&&(J=n.RGBA8UI),mt===n.UNSIGNED_SHORT&&(J=n.RGBA16UI),mt===n.UNSIGNED_INT&&(J=n.RGBA32UI),mt===n.BYTE&&(J=n.RGBA8I),mt===n.SHORT&&(J=n.RGBA16I),mt===n.INT&&(J=n.RGBA32I)),k===n.RGB&&mt===n.UNSIGNED_INT_5_9_9_9_REV&&(J=n.RGB9_E5),k===n.RGBA){let dt=Pt?Ra:Ae.getTransfer(Rt);mt===n.FLOAT&&(J=n.RGBA32F),mt===n.HALF_FLOAT&&(J=n.RGBA16F),mt===n.UNSIGNED_BYTE&&(J=dt===ke?n.SRGB8_ALPHA8:n.RGBA8),mt===n.UNSIGNED_SHORT_4_4_4_4&&(J=n.RGBA4),mt===n.UNSIGNED_SHORT_5_5_5_1&&(J=n.RGB5_A1)}return(J===n.R16F||J===n.R32F||J===n.RG16F||J===n.RG32F||J===n.RGBA16F||J===n.RGBA32F)&&t.get("EXT_color_buffer_float"),J}function v(z,k){let mt;return z?k===null||k===ls||k===Ys?mt=n.DEPTH24_STENCIL8:k===ni?mt=n.DEPTH32F_STENCIL8:k===Ir&&(mt=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):k===null||k===ls||k===Ys?mt=n.DEPTH_COMPONENT24:k===ni?mt=n.DEPTH_COMPONENT32F:k===Ir&&(mt=n.DEPTH_COMPONENT16),mt}function L(z,k){return m(z)===!0||z.isFramebufferTexture&&z.minFilter!==Sn&&z.minFilter!==ei?Math.log2(Math.max(k.width,k.height))+1:z.mipmaps!==void 0&&z.mipmaps.length>0?z.mipmaps.length:z.isCompressedTexture&&Array.isArray(z.image)?k.mipmaps.length:1}function E(z){let k=z.target;k.removeEventListener("dispose",E),R(k),k.isVideoTexture&&u.delete(k)}function T(z){let k=z.target;k.removeEventListener("dispose",T),y(k)}function R(z){let k=i.get(z);if(k.__webglInit===void 0)return;let mt=z.source,Rt=f.get(mt);if(Rt){let Pt=Rt[k.__cacheKey];Pt.usedTimes--,Pt.usedTimes===0&&x(z),Object.keys(Rt).length===0&&f.delete(mt)}i.remove(z)}function x(z){let k=i.get(z);n.deleteTexture(k.__webglTexture);let mt=z.source,Rt=f.get(mt);delete Rt[k.__cacheKey],o.memory.textures--}function y(z){let k=i.get(z);if(z.depthTexture&&(z.depthTexture.dispose(),i.remove(z.depthTexture)),z.isWebGLCubeRenderTarget)for(let Rt=0;Rt<6;Rt++){if(Array.isArray(k.__webglFramebuffer[Rt]))for(let Pt=0;Pt<k.__webglFramebuffer[Rt].length;Pt++)n.deleteFramebuffer(k.__webglFramebuffer[Rt][Pt]);else n.deleteFramebuffer(k.__webglFramebuffer[Rt]);k.__webglDepthbuffer&&n.deleteRenderbuffer(k.__webglDepthbuffer[Rt])}else{if(Array.isArray(k.__webglFramebuffer))for(let Rt=0;Rt<k.__webglFramebuffer.length;Rt++)n.deleteFramebuffer(k.__webglFramebuffer[Rt]);else n.deleteFramebuffer(k.__webglFramebuffer);if(k.__webglDepthbuffer&&n.deleteRenderbuffer(k.__webglDepthbuffer),k.__webglMultisampledFramebuffer&&n.deleteFramebuffer(k.__webglMultisampledFramebuffer),k.__webglColorRenderbuffer)for(let Rt=0;Rt<k.__webglColorRenderbuffer.length;Rt++)k.__webglColorRenderbuffer[Rt]&&n.deleteRenderbuffer(k.__webglColorRenderbuffer[Rt]);k.__webglDepthRenderbuffer&&n.deleteRenderbuffer(k.__webglDepthRenderbuffer)}let mt=z.textures;for(let Rt=0,Pt=mt.length;Rt<Pt;Rt++){let J=i.get(mt[Rt]);J.__webglTexture&&(n.deleteTexture(J.__webglTexture),o.memory.textures--),i.remove(mt[Rt])}i.remove(z)}let b=0;function A(){b=0}function w(){let z=b;return z>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+z+" texture units while this GPU supports only "+s.maxTextures),b+=1,z}function I(z){let k=[];return k.push(z.wrapS),k.push(z.wrapT),k.push(z.wrapR||0),k.push(z.magFilter),k.push(z.minFilter),k.push(z.anisotropy),k.push(z.internalFormat),k.push(z.format),k.push(z.type),k.push(z.generateMipmaps),k.push(z.premultiplyAlpha),k.push(z.flipY),k.push(z.unpackAlignment),k.push(z.colorSpace),k.join()}function O(z,k){let mt=i.get(z);if(z.isVideoTexture&&Bt(z),z.isRenderTargetTexture===!1&&z.version>0&&mt.__version!==z.version){let Rt=z.image;if(Rt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Rt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{U(mt,z,k);return}}e.bindTexture(n.TEXTURE_2D,mt.__webglTexture,n.TEXTURE0+k)}function D(z,k){let mt=i.get(z);if(z.version>0&&mt.__version!==z.version){U(mt,z,k);return}e.bindTexture(n.TEXTURE_2D_ARRAY,mt.__webglTexture,n.TEXTURE0+k)}function B(z,k){let mt=i.get(z);if(z.version>0&&mt.__version!==z.version){U(mt,z,k);return}e.bindTexture(n.TEXTURE_3D,mt.__webglTexture,n.TEXTURE0+k)}function F(z,k){let mt=i.get(z);if(z.version>0&&mt.__version!==z.version){Y(mt,z,k);return}e.bindTexture(n.TEXTURE_CUBE_MAP,mt.__webglTexture,n.TEXTURE0+k)}let q={[as]:n.REPEAT,[rs]:n.CLAMP_TO_EDGE,[Fl]:n.MIRRORED_REPEAT},st={[Sn]:n.NEAREST,[Hf]:n.NEAREST_MIPMAP_NEAREST,[lo]:n.NEAREST_MIPMAP_LINEAR,[ei]:n.LINEAR,[qa]:n.LINEAR_MIPMAP_NEAREST,[os]:n.LINEAR_MIPMAP_LINEAR},P={[Wf]:n.NEVER,[Kf]:n.ALWAYS,[Xf]:n.LESS,[au]:n.LEQUAL,[qf]:n.EQUAL,[Jf]:n.GEQUAL,[Yf]:n.GREATER,[Zf]:n.NOTEQUAL};function ft(z,k){if(k.type===ni&&t.has("OES_texture_float_linear")===!1&&(k.magFilter===ei||k.magFilter===qa||k.magFilter===lo||k.magFilter===os||k.minFilter===ei||k.minFilter===qa||k.minFilter===lo||k.minFilter===os)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(z,n.TEXTURE_WRAP_S,q[k.wrapS]),n.texParameteri(z,n.TEXTURE_WRAP_T,q[k.wrapT]),(z===n.TEXTURE_3D||z===n.TEXTURE_2D_ARRAY)&&n.texParameteri(z,n.TEXTURE_WRAP_R,q[k.wrapR]),n.texParameteri(z,n.TEXTURE_MAG_FILTER,st[k.magFilter]),n.texParameteri(z,n.TEXTURE_MIN_FILTER,st[k.minFilter]),k.compareFunction&&(n.texParameteri(z,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(z,n.TEXTURE_COMPARE_FUNC,P[k.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(k.magFilter===Sn||k.minFilter!==lo&&k.minFilter!==os||k.type===ni&&t.has("OES_texture_float_linear")===!1)return;if(k.anisotropy>1||i.get(k).__currentAnisotropy){let mt=t.get("EXT_texture_filter_anisotropic");n.texParameterf(z,mt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(k.anisotropy,s.getMaxAnisotropy())),i.get(k).__currentAnisotropy=k.anisotropy}}}function Ft(z,k){let mt=!1;z.__webglInit===void 0&&(z.__webglInit=!0,k.addEventListener("dispose",E));let Rt=k.source,Pt=f.get(Rt);Pt===void 0&&(Pt={},f.set(Rt,Pt));let J=I(k);if(J!==z.__cacheKey){Pt[J]===void 0&&(Pt[J]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,mt=!0),Pt[J].usedTimes++;let dt=Pt[z.__cacheKey];dt!==void 0&&(Pt[z.__cacheKey].usedTimes--,dt.usedTimes===0&&x(k)),z.__cacheKey=J,z.__webglTexture=Pt[J].texture}return mt}function U(z,k,mt){let Rt=n.TEXTURE_2D;(k.isDataArrayTexture||k.isCompressedArrayTexture)&&(Rt=n.TEXTURE_2D_ARRAY),k.isData3DTexture&&(Rt=n.TEXTURE_3D);let Pt=Ft(z,k),J=k.source;e.bindTexture(Rt,z.__webglTexture,n.TEXTURE0+mt);let dt=i.get(J);if(J.version!==dt.__version||Pt===!0){e.activeTexture(n.TEXTURE0+mt);let ct=Ae.getPrimaries(Ae.workingColorSpace),_t=k.colorSpace===Di?null:Ae.getPrimaries(k.colorSpace),Et=k.colorSpace===Di||ct===_t?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,k.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,k.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Et);let Ct=M(k.image,!1,s.maxTextureSize);Ct=K(k,Ct);let It=r.convert(k.format,k.colorSpace),Wt=r.convert(k.type),Kt=_(k.internalFormat,It,Wt,k.colorSpace,k.isVideoTexture);ft(Rt,k);let qt,ue=k.mipmaps,re=k.isVideoTexture!==!0,Se=dt.__version===void 0||Pt===!0,at=J.dataReady,Yt=L(k,Ct);if(k.isDepthTexture)Kt=v(k.format===Zs,k.type),Se&&(re?e.texStorage2D(n.TEXTURE_2D,1,Kt,Ct.width,Ct.height):e.texImage2D(n.TEXTURE_2D,0,Kt,Ct.width,Ct.height,0,It,Wt,null));else if(k.isDataTexture)if(ue.length>0){re&&Se&&e.texStorage2D(n.TEXTURE_2D,Yt,Kt,ue[0].width,ue[0].height);for(let Tt=0,Ut=ue.length;Tt<Ut;Tt++)qt=ue[Tt],re?at&&e.texSubImage2D(n.TEXTURE_2D,Tt,0,0,qt.width,qt.height,It,Wt,qt.data):e.texImage2D(n.TEXTURE_2D,Tt,Kt,qt.width,qt.height,0,It,Wt,qt.data);k.generateMipmaps=!1}else re?(Se&&e.texStorage2D(n.TEXTURE_2D,Yt,Kt,Ct.width,Ct.height),at&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,Ct.width,Ct.height,It,Wt,Ct.data)):e.texImage2D(n.TEXTURE_2D,0,Kt,Ct.width,Ct.height,0,It,Wt,Ct.data);else if(k.isCompressedTexture)if(k.isCompressedArrayTexture){re&&Se&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Yt,Kt,ue[0].width,ue[0].height,Ct.depth);for(let Tt=0,Ut=ue.length;Tt<Ut;Tt++)if(qt=ue[Tt],k.format!==Ln)if(It!==null)if(re){if(at)if(k.layerUpdates.size>0){let C=kd(qt.width,qt.height,k.format,k.type);for(let G of k.layerUpdates){let j=qt.data.subarray(G*C/qt.data.BYTES_PER_ELEMENT,(G+1)*C/qt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Tt,0,0,G,qt.width,qt.height,1,It,j)}k.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Tt,0,0,0,qt.width,qt.height,Ct.depth,It,qt.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Tt,Kt,qt.width,qt.height,Ct.depth,0,qt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else re?at&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,Tt,0,0,0,qt.width,qt.height,Ct.depth,It,Wt,qt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,Tt,Kt,qt.width,qt.height,Ct.depth,0,It,Wt,qt.data)}else{re&&Se&&e.texStorage2D(n.TEXTURE_2D,Yt,Kt,ue[0].width,ue[0].height);for(let Tt=0,Ut=ue.length;Tt<Ut;Tt++)qt=ue[Tt],k.format!==Ln?It!==null?re?at&&e.compressedTexSubImage2D(n.TEXTURE_2D,Tt,0,0,qt.width,qt.height,It,qt.data):e.compressedTexImage2D(n.TEXTURE_2D,Tt,Kt,qt.width,qt.height,0,qt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):re?at&&e.texSubImage2D(n.TEXTURE_2D,Tt,0,0,qt.width,qt.height,It,Wt,qt.data):e.texImage2D(n.TEXTURE_2D,Tt,Kt,qt.width,qt.height,0,It,Wt,qt.data)}else if(k.isDataArrayTexture)if(re){if(Se&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Yt,Kt,Ct.width,Ct.height,Ct.depth),at)if(k.layerUpdates.size>0){let Tt=kd(Ct.width,Ct.height,k.format,k.type);for(let Ut of k.layerUpdates){let C=Ct.data.subarray(Ut*Tt/Ct.data.BYTES_PER_ELEMENT,(Ut+1)*Tt/Ct.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Ut,Ct.width,Ct.height,1,It,Wt,C)}k.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Ct.width,Ct.height,Ct.depth,It,Wt,Ct.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Kt,Ct.width,Ct.height,Ct.depth,0,It,Wt,Ct.data);else if(k.isData3DTexture)re?(Se&&e.texStorage3D(n.TEXTURE_3D,Yt,Kt,Ct.width,Ct.height,Ct.depth),at&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Ct.width,Ct.height,Ct.depth,It,Wt,Ct.data)):e.texImage3D(n.TEXTURE_3D,0,Kt,Ct.width,Ct.height,Ct.depth,0,It,Wt,Ct.data);else if(k.isFramebufferTexture){if(Se)if(re)e.texStorage2D(n.TEXTURE_2D,Yt,Kt,Ct.width,Ct.height);else{let Tt=Ct.width,Ut=Ct.height;for(let C=0;C<Yt;C++)e.texImage2D(n.TEXTURE_2D,C,Kt,Tt,Ut,0,It,Wt,null),Tt>>=1,Ut>>=1}}else if(ue.length>0){if(re&&Se){let Tt=Ot(ue[0]);e.texStorage2D(n.TEXTURE_2D,Yt,Kt,Tt.width,Tt.height)}for(let Tt=0,Ut=ue.length;Tt<Ut;Tt++)qt=ue[Tt],re?at&&e.texSubImage2D(n.TEXTURE_2D,Tt,0,0,It,Wt,qt):e.texImage2D(n.TEXTURE_2D,Tt,Kt,It,Wt,qt);k.generateMipmaps=!1}else if(re){if(Se){let Tt=Ot(Ct);e.texStorage2D(n.TEXTURE_2D,Yt,Kt,Tt.width,Tt.height)}at&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,It,Wt,Ct)}else e.texImage2D(n.TEXTURE_2D,0,Kt,It,Wt,Ct);m(k)&&p(Rt),dt.__version=J.version,k.onUpdate&&k.onUpdate(k)}z.__version=k.version}function Y(z,k,mt){if(k.image.length!==6)return;let Rt=Ft(z,k),Pt=k.source;e.bindTexture(n.TEXTURE_CUBE_MAP,z.__webglTexture,n.TEXTURE0+mt);let J=i.get(Pt);if(Pt.version!==J.__version||Rt===!0){e.activeTexture(n.TEXTURE0+mt);let dt=Ae.getPrimaries(Ae.workingColorSpace),ct=k.colorSpace===Di?null:Ae.getPrimaries(k.colorSpace),_t=k.colorSpace===Di||dt===ct?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,k.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,k.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,_t);let Et=k.isCompressedTexture||k.image[0].isCompressedTexture,Ct=k.image[0]&&k.image[0].isDataTexture,It=[];for(let Ut=0;Ut<6;Ut++)!Et&&!Ct?It[Ut]=M(k.image[Ut],!0,s.maxCubemapSize):It[Ut]=Ct?k.image[Ut].image:k.image[Ut],It[Ut]=K(k,It[Ut]);let Wt=It[0],Kt=r.convert(k.format,k.colorSpace),qt=r.convert(k.type),ue=_(k.internalFormat,Kt,qt,k.colorSpace),re=k.isVideoTexture!==!0,Se=J.__version===void 0||Rt===!0,at=Pt.dataReady,Yt=L(k,Wt);ft(n.TEXTURE_CUBE_MAP,k);let Tt;if(Et){re&&Se&&e.texStorage2D(n.TEXTURE_CUBE_MAP,Yt,ue,Wt.width,Wt.height);for(let Ut=0;Ut<6;Ut++){Tt=It[Ut].mipmaps;for(let C=0;C<Tt.length;C++){let G=Tt[C];k.format!==Ln?Kt!==null?re?at&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ut,C,0,0,G.width,G.height,Kt,G.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ut,C,ue,G.width,G.height,0,G.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):re?at&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ut,C,0,0,G.width,G.height,Kt,qt,G.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ut,C,ue,G.width,G.height,0,Kt,qt,G.data)}}}else{if(Tt=k.mipmaps,re&&Se){Tt.length>0&&Yt++;let Ut=Ot(It[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,Yt,ue,Ut.width,Ut.height)}for(let Ut=0;Ut<6;Ut++)if(Ct){re?at&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ut,0,0,0,It[Ut].width,It[Ut].height,Kt,qt,It[Ut].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ut,0,ue,It[Ut].width,It[Ut].height,0,Kt,qt,It[Ut].data);for(let C=0;C<Tt.length;C++){let j=Tt[C].image[Ut].image;re?at&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ut,C+1,0,0,j.width,j.height,Kt,qt,j.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ut,C+1,ue,j.width,j.height,0,Kt,qt,j.data)}}else{re?at&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ut,0,0,0,Kt,qt,It[Ut]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ut,0,ue,Kt,qt,It[Ut]);for(let C=0;C<Tt.length;C++){let G=Tt[C];re?at&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ut,C+1,0,0,Kt,qt,G.image[Ut]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ut,C+1,ue,Kt,qt,G.image[Ut])}}}m(k)&&p(n.TEXTURE_CUBE_MAP),J.__version=Pt.version,k.onUpdate&&k.onUpdate(k)}z.__version=k.version}function Q(z,k,mt,Rt,Pt,J){let dt=r.convert(mt.format,mt.colorSpace),ct=r.convert(mt.type),_t=_(mt.internalFormat,dt,ct,mt.colorSpace),Et=i.get(k),Ct=i.get(mt);if(Ct.__renderTarget=k,!Et.__hasExternalTextures){let It=Math.max(1,k.width>>J),Wt=Math.max(1,k.height>>J);Pt===n.TEXTURE_3D||Pt===n.TEXTURE_2D_ARRAY?e.texImage3D(Pt,J,_t,It,Wt,k.depth,0,dt,ct,null):e.texImage2D(Pt,J,_t,It,Wt,0,dt,ct,null)}e.bindFramebuffer(n.FRAMEBUFFER,z),bt(k)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Rt,Pt,Ct.__webglTexture,0,xt(k)):(Pt===n.TEXTURE_2D||Pt>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Pt<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Rt,Pt,Ct.__webglTexture,J),e.bindFramebuffer(n.FRAMEBUFFER,null)}function W(z,k,mt){if(n.bindRenderbuffer(n.RENDERBUFFER,z),k.depthBuffer){let Rt=k.depthTexture,Pt=Rt&&Rt.isDepthTexture?Rt.type:null,J=v(k.stencilBuffer,Pt),dt=k.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ct=xt(k);bt(k)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ct,J,k.width,k.height):mt?n.renderbufferStorageMultisample(n.RENDERBUFFER,ct,J,k.width,k.height):n.renderbufferStorage(n.RENDERBUFFER,J,k.width,k.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,dt,n.RENDERBUFFER,z)}else{let Rt=k.textures;for(let Pt=0;Pt<Rt.length;Pt++){let J=Rt[Pt],dt=r.convert(J.format,J.colorSpace),ct=r.convert(J.type),_t=_(J.internalFormat,dt,ct,J.colorSpace),Et=xt(k);mt&&bt(k)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Et,_t,k.width,k.height):bt(k)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Et,_t,k.width,k.height):n.renderbufferStorage(n.RENDERBUFFER,_t,k.width,k.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function lt(z,k){if(k&&k.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,z),!(k.depthTexture&&k.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let Rt=i.get(k.depthTexture);Rt.__renderTarget=k,(!Rt.__webglTexture||k.depthTexture.image.width!==k.width||k.depthTexture.image.height!==k.height)&&(k.depthTexture.image.width=k.width,k.depthTexture.image.height=k.height,k.depthTexture.needsUpdate=!0),O(k.depthTexture,0);let Pt=Rt.__webglTexture,J=xt(k);if(k.depthTexture.format===$s)bt(k)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Pt,0,J):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Pt,0);else if(k.depthTexture.format===Zs)bt(k)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Pt,0,J):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Pt,0);else throw new Error("Unknown depthTexture format")}function ot(z){let k=i.get(z),mt=z.isWebGLCubeRenderTarget===!0;if(k.__boundDepthTexture!==z.depthTexture){let Rt=z.depthTexture;if(k.__depthDisposeCallback&&k.__depthDisposeCallback(),Rt){let Pt=()=>{delete k.__boundDepthTexture,delete k.__depthDisposeCallback,Rt.removeEventListener("dispose",Pt)};Rt.addEventListener("dispose",Pt),k.__depthDisposeCallback=Pt}k.__boundDepthTexture=Rt}if(z.depthTexture&&!k.__autoAllocateDepthBuffer){if(mt)throw new Error("target.depthTexture not supported in Cube render targets");lt(k.__webglFramebuffer,z)}else if(mt){k.__webglDepthbuffer=[];for(let Rt=0;Rt<6;Rt++)if(e.bindFramebuffer(n.FRAMEBUFFER,k.__webglFramebuffer[Rt]),k.__webglDepthbuffer[Rt]===void 0)k.__webglDepthbuffer[Rt]=n.createRenderbuffer(),W(k.__webglDepthbuffer[Rt],z,!1);else{let Pt=z.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,J=k.__webglDepthbuffer[Rt];n.bindRenderbuffer(n.RENDERBUFFER,J),n.framebufferRenderbuffer(n.FRAMEBUFFER,Pt,n.RENDERBUFFER,J)}}else if(e.bindFramebuffer(n.FRAMEBUFFER,k.__webglFramebuffer),k.__webglDepthbuffer===void 0)k.__webglDepthbuffer=n.createRenderbuffer(),W(k.__webglDepthbuffer,z,!1);else{let Rt=z.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Pt=k.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,Pt),n.framebufferRenderbuffer(n.FRAMEBUFFER,Rt,n.RENDERBUFFER,Pt)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function wt(z,k,mt){let Rt=i.get(z);k!==void 0&&Q(Rt.__webglFramebuffer,z,z.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),mt!==void 0&&ot(z)}function pt(z){let k=z.texture,mt=i.get(z),Rt=i.get(k);z.addEventListener("dispose",T);let Pt=z.textures,J=z.isWebGLCubeRenderTarget===!0,dt=Pt.length>1;if(dt||(Rt.__webglTexture===void 0&&(Rt.__webglTexture=n.createTexture()),Rt.__version=k.version,o.memory.textures++),J){mt.__webglFramebuffer=[];for(let ct=0;ct<6;ct++)if(k.mipmaps&&k.mipmaps.length>0){mt.__webglFramebuffer[ct]=[];for(let _t=0;_t<k.mipmaps.length;_t++)mt.__webglFramebuffer[ct][_t]=n.createFramebuffer()}else mt.__webglFramebuffer[ct]=n.createFramebuffer()}else{if(k.mipmaps&&k.mipmaps.length>0){mt.__webglFramebuffer=[];for(let ct=0;ct<k.mipmaps.length;ct++)mt.__webglFramebuffer[ct]=n.createFramebuffer()}else mt.__webglFramebuffer=n.createFramebuffer();if(dt)for(let ct=0,_t=Pt.length;ct<_t;ct++){let Et=i.get(Pt[ct]);Et.__webglTexture===void 0&&(Et.__webglTexture=n.createTexture(),o.memory.textures++)}if(z.samples>0&&bt(z)===!1){mt.__webglMultisampledFramebuffer=n.createFramebuffer(),mt.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,mt.__webglMultisampledFramebuffer);for(let ct=0;ct<Pt.length;ct++){let _t=Pt[ct];mt.__webglColorRenderbuffer[ct]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,mt.__webglColorRenderbuffer[ct]);let Et=r.convert(_t.format,_t.colorSpace),Ct=r.convert(_t.type),It=_(_t.internalFormat,Et,Ct,_t.colorSpace,z.isXRRenderTarget===!0),Wt=xt(z);n.renderbufferStorageMultisample(n.RENDERBUFFER,Wt,It,z.width,z.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ct,n.RENDERBUFFER,mt.__webglColorRenderbuffer[ct])}n.bindRenderbuffer(n.RENDERBUFFER,null),z.depthBuffer&&(mt.__webglDepthRenderbuffer=n.createRenderbuffer(),W(mt.__webglDepthRenderbuffer,z,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(J){e.bindTexture(n.TEXTURE_CUBE_MAP,Rt.__webglTexture),ft(n.TEXTURE_CUBE_MAP,k);for(let ct=0;ct<6;ct++)if(k.mipmaps&&k.mipmaps.length>0)for(let _t=0;_t<k.mipmaps.length;_t++)Q(mt.__webglFramebuffer[ct][_t],z,k,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,_t);else Q(mt.__webglFramebuffer[ct],z,k,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0);m(k)&&p(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(dt){for(let ct=0,_t=Pt.length;ct<_t;ct++){let Et=Pt[ct],Ct=i.get(Et);e.bindTexture(n.TEXTURE_2D,Ct.__webglTexture),ft(n.TEXTURE_2D,Et),Q(mt.__webglFramebuffer,z,Et,n.COLOR_ATTACHMENT0+ct,n.TEXTURE_2D,0),m(Et)&&p(n.TEXTURE_2D)}e.unbindTexture()}else{let ct=n.TEXTURE_2D;if((z.isWebGL3DRenderTarget||z.isWebGLArrayRenderTarget)&&(ct=z.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(ct,Rt.__webglTexture),ft(ct,k),k.mipmaps&&k.mipmaps.length>0)for(let _t=0;_t<k.mipmaps.length;_t++)Q(mt.__webglFramebuffer[_t],z,k,n.COLOR_ATTACHMENT0,ct,_t);else Q(mt.__webglFramebuffer,z,k,n.COLOR_ATTACHMENT0,ct,0);m(k)&&p(ct),e.unbindTexture()}z.depthBuffer&&ot(z)}function V(z){let k=z.textures;for(let mt=0,Rt=k.length;mt<Rt;mt++){let Pt=k[mt];if(m(Pt)){let J=S(z),dt=i.get(Pt).__webglTexture;e.bindTexture(J,dt),p(J),e.unbindTexture()}}}let Z=[],H=[];function Lt(z){if(z.samples>0){if(bt(z)===!1){let k=z.textures,mt=z.width,Rt=z.height,Pt=n.COLOR_BUFFER_BIT,J=z.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,dt=i.get(z),ct=k.length>1;if(ct)for(let _t=0;_t<k.length;_t++)e.bindFramebuffer(n.FRAMEBUFFER,dt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+_t,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,dt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+_t,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,dt.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,dt.__webglFramebuffer);for(let _t=0;_t<k.length;_t++){if(z.resolveDepthBuffer&&(z.depthBuffer&&(Pt|=n.DEPTH_BUFFER_BIT),z.stencilBuffer&&z.resolveStencilBuffer&&(Pt|=n.STENCIL_BUFFER_BIT)),ct){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,dt.__webglColorRenderbuffer[_t]);let Et=i.get(k[_t]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Et,0)}n.blitFramebuffer(0,0,mt,Rt,0,0,mt,Rt,Pt,n.NEAREST),l===!0&&(Z.length=0,H.length=0,Z.push(n.COLOR_ATTACHMENT0+_t),z.depthBuffer&&z.resolveDepthBuffer===!1&&(Z.push(J),H.push(J),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,H)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Z))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ct)for(let _t=0;_t<k.length;_t++){e.bindFramebuffer(n.FRAMEBUFFER,dt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+_t,n.RENDERBUFFER,dt.__webglColorRenderbuffer[_t]);let Et=i.get(k[_t]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,dt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+_t,n.TEXTURE_2D,Et,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,dt.__webglMultisampledFramebuffer)}else if(z.depthBuffer&&z.resolveDepthBuffer===!1&&l){let k=z.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[k])}}}function xt(z){return Math.min(s.maxSamples,z.samples)}function bt(z){let k=i.get(z);return z.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&k.__useRenderToTexture!==!1}function Bt(z){let k=o.render.frame;u.get(z)!==k&&(u.set(z,k),z.update())}function K(z,k){let mt=z.colorSpace,Rt=z.format,Pt=z.type;return z.isCompressedTexture===!0||z.isVideoTexture===!0||mt!==tr&&mt!==Di&&(Ae.getTransfer(mt)===ke?(Rt!==Ln||Pt!==xi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",mt)),k}function Ot(z){return typeof HTMLImageElement<"u"&&z instanceof HTMLImageElement?(h.width=z.naturalWidth||z.width,h.height=z.naturalHeight||z.height):typeof VideoFrame<"u"&&z instanceof VideoFrame?(h.width=z.displayWidth,h.height=z.displayHeight):(h.width=z.width,h.height=z.height),h}this.allocateTextureUnit=w,this.resetTextureUnits=A,this.setTexture2D=O,this.setTexture2DArray=D,this.setTexture3D=B,this.setTextureCube=F,this.rebindTextures=wt,this.setupRenderTarget=pt,this.updateRenderTargetMipmap=V,this.updateMultisampleRenderTarget=Lt,this.setupDepthRenderbuffer=ot,this.setupFrameBufferTexture=Q,this.useMultisampledRTT=bt}function ix(n,t){function e(i,s=Di){let r,o=Ae.getTransfer(s);if(i===xi)return n.UNSIGNED_BYTE;if(i===jc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Qc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Qd)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Kd)return n.BYTE;if(i===jd)return n.SHORT;if(i===Ir)return n.UNSIGNED_SHORT;if(i===Kc)return n.INT;if(i===ls)return n.UNSIGNED_INT;if(i===ni)return n.FLOAT;if(i===Gr)return n.HALF_FLOAT;if(i===tu)return n.ALPHA;if(i===eu)return n.RGB;if(i===Ln)return n.RGBA;if(i===nu)return n.LUMINANCE;if(i===iu)return n.LUMINANCE_ALPHA;if(i===$s)return n.DEPTH_COMPONENT;if(i===Zs)return n.DEPTH_STENCIL;if(i===th)return n.RED;if(i===eh)return n.RED_INTEGER;if(i===su)return n.RG;if(i===nh)return n.RG_INTEGER;if(i===ih)return n.RGBA_INTEGER;if(i===zo||i===Ho||i===$o||i===Vo)if(o===ke)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===zo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ho)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===$o)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Vo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===zo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ho)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===$o)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Vo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Bl||i===zl||i===Hl||i===$l)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Bl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===zl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Hl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===$l)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Vl||i===Gl||i===Wl)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Vl||i===Gl)return o===ke?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Wl)return o===ke?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Xl||i===ql||i===Yl||i===Zl||i===Jl||i===Kl||i===jl||i===Ql||i===tc||i===ec||i===nc||i===ic||i===sc||i===rc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Xl)return o===ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===ql)return o===ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Yl)return o===ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Zl)return o===ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Jl)return o===ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Kl)return o===ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===jl)return o===ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Ql)return o===ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===tc)return o===ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===ec)return o===ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===nc)return o===ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===ic)return o===ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===sc)return o===ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===rc)return o===ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Go||i===oc||i===ac)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===Go)return o===ke?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===oc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===ac)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===ru||i===lc||i===cc||i===hc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===Go)return r.COMPRESSED_RED_RGTC1_EXT;if(i===lc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===cc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===hc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ys?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}var Tc=class extends bn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},fe=class extends De{constructor(){super(),this.isGroup=!0,this.type="Group"}},sx={type:"move"},Ar=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new fe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new fe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new $,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new $),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new fe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new $,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new $),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,h=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(h&&t.hand){o=!0;for(let M of t.hand.values()){let m=e.getJointPose(M,i),p=this._getHandJoint(h,M);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let u=h.joints["index-finger-tip"],g=h.joints["thumb-tip"],f=u.position.distanceTo(g.position),c=.02,d=.005;h.inputState.pinching&&f>c+d?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!h.inputState.pinching&&f<=c-d&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(sx)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),h!==null&&(h.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new fe;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},rx=`
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

}`,Ac=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){let s=new An,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new wn({vertexShader:rx,fragmentShader:ox,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ne(new fn(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Rc=class extends Bi{constructor(t,e){super();let i=this,s=null,r=1,o=null,a="local-floor",l=1,h=null,u=null,g=null,f=null,c=null,d=null,M=new Ac,m=e.getContextAttributes(),p=null,S=null,_=[],v=[],L=new zt,E=null,T=new bn;T.viewport=new Ze;let R=new bn;R.viewport=new Ze;let x=[T,R],y=new Tc,b=null,A=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(U){let Y=_[U];return Y===void 0&&(Y=new Ar,_[U]=Y),Y.getTargetRaySpace()},this.getControllerGrip=function(U){let Y=_[U];return Y===void 0&&(Y=new Ar,_[U]=Y),Y.getGripSpace()},this.getHand=function(U){let Y=_[U];return Y===void 0&&(Y=new Ar,_[U]=Y),Y.getHandSpace()};function w(U){let Y=v.indexOf(U.inputSource);if(Y===-1)return;let Q=_[Y];Q!==void 0&&(Q.update(U.inputSource,U.frame,h||o),Q.dispatchEvent({type:U.type,data:U.inputSource}))}function I(){s.removeEventListener("select",w),s.removeEventListener("selectstart",w),s.removeEventListener("selectend",w),s.removeEventListener("squeeze",w),s.removeEventListener("squeezestart",w),s.removeEventListener("squeezeend",w),s.removeEventListener("end",I),s.removeEventListener("inputsourceschange",O);for(let U=0;U<_.length;U++){let Y=v[U];Y!==null&&(v[U]=null,_[U].disconnect(Y))}b=null,A=null,M.reset(),t.setRenderTarget(p),c=null,f=null,g=null,s=null,S=null,Ft.stop(),i.isPresenting=!1,t.setPixelRatio(E),t.setSize(L.width,L.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(U){r=U,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(U){a=U,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||o},this.setReferenceSpace=function(U){h=U},this.getBaseLayer=function(){return f!==null?f:c},this.getBinding=function(){return g},this.getFrame=function(){return d},this.getSession=function(){return s},this.setSession=async function(U){if(s=U,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",w),s.addEventListener("selectstart",w),s.addEventListener("selectend",w),s.addEventListener("squeeze",w),s.addEventListener("squeezestart",w),s.addEventListener("squeezeend",w),s.addEventListener("end",I),s.addEventListener("inputsourceschange",O),m.xrCompatible!==!0&&await e.makeXRCompatible(),E=t.getPixelRatio(),t.getSize(L),s.renderState.layers===void 0){let Y={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};c=new XRWebGLLayer(s,e,Y),s.updateRenderState({baseLayer:c}),t.setPixelRatio(1),t.setSize(c.framebufferWidth,c.framebufferHeight,!1),S=new vi(c.framebufferWidth,c.framebufferHeight,{format:Ln,type:xi,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let Y=null,Q=null,W=null;m.depth&&(W=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Y=m.stencil?Zs:$s,Q=m.stencil?Ys:ls);let lt={colorFormat:e.RGBA8,depthFormat:W,scaleFactor:r};g=new XRWebGLBinding(s,e),f=g.createProjectionLayer(lt),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),S=new vi(f.textureWidth,f.textureHeight,{format:Ln,type:xi,depthTexture:new sa(f.textureWidth,f.textureHeight,Q,void 0,void 0,void 0,void 0,void 0,void 0,Y),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),h=null,o=await s.requestReferenceSpace(a),Ft.setContext(s),Ft.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function O(U){for(let Y=0;Y<U.removed.length;Y++){let Q=U.removed[Y],W=v.indexOf(Q);W>=0&&(v[W]=null,_[W].disconnect(Q))}for(let Y=0;Y<U.added.length;Y++){let Q=U.added[Y],W=v.indexOf(Q);if(W===-1){for(let ot=0;ot<_.length;ot++)if(ot>=v.length){v.push(Q),W=ot;break}else if(v[ot]===null){v[ot]=Q,W=ot;break}if(W===-1)break}let lt=_[W];lt&&lt.connect(Q)}}let D=new $,B=new $;function F(U,Y,Q){D.setFromMatrixPosition(Y.matrixWorld),B.setFromMatrixPosition(Q.matrixWorld);let W=D.distanceTo(B),lt=Y.projectionMatrix.elements,ot=Q.projectionMatrix.elements,wt=lt[14]/(lt[10]-1),pt=lt[14]/(lt[10]+1),V=(lt[9]+1)/lt[5],Z=(lt[9]-1)/lt[5],H=(lt[8]-1)/lt[0],Lt=(ot[8]+1)/ot[0],xt=wt*H,bt=wt*Lt,Bt=W/(-H+Lt),K=Bt*-H;if(Y.matrixWorld.decompose(U.position,U.quaternion,U.scale),U.translateX(K),U.translateZ(Bt),U.matrixWorld.compose(U.position,U.quaternion,U.scale),U.matrixWorldInverse.copy(U.matrixWorld).invert(),lt[10]===-1)U.projectionMatrix.copy(Y.projectionMatrix),U.projectionMatrixInverse.copy(Y.projectionMatrixInverse);else{let Ot=wt+Bt,z=pt+Bt,k=xt-K,mt=bt+(W-K),Rt=V*pt/z*Ot,Pt=Z*pt/z*Ot;U.projectionMatrix.makePerspective(k,mt,Rt,Pt,Ot,z),U.projectionMatrixInverse.copy(U.projectionMatrix).invert()}}function q(U,Y){Y===null?U.matrixWorld.copy(U.matrix):U.matrixWorld.multiplyMatrices(Y.matrixWorld,U.matrix),U.matrixWorldInverse.copy(U.matrixWorld).invert()}this.updateCamera=function(U){if(s===null)return;let Y=U.near,Q=U.far;M.texture!==null&&(M.depthNear>0&&(Y=M.depthNear),M.depthFar>0&&(Q=M.depthFar)),y.near=R.near=T.near=Y,y.far=R.far=T.far=Q,(b!==y.near||A!==y.far)&&(s.updateRenderState({depthNear:y.near,depthFar:y.far}),b=y.near,A=y.far),T.layers.mask=U.layers.mask|2,R.layers.mask=U.layers.mask|4,y.layers.mask=T.layers.mask|R.layers.mask;let W=U.parent,lt=y.cameras;q(y,W);for(let ot=0;ot<lt.length;ot++)q(lt[ot],W);lt.length===2?F(y,T,R):y.projectionMatrix.copy(T.projectionMatrix),st(U,y,W)};function st(U,Y,Q){Q===null?U.matrix.copy(Y.matrixWorld):(U.matrix.copy(Q.matrixWorld),U.matrix.invert(),U.matrix.multiply(Y.matrixWorld)),U.matrix.decompose(U.position,U.quaternion,U.scale),U.updateMatrixWorld(!0),U.projectionMatrix.copy(Y.projectionMatrix),U.projectionMatrixInverse.copy(Y.projectionMatrixInverse),U.isPerspectiveCamera&&(U.fov=Pr*2*Math.atan(1/U.projectionMatrix.elements[5]),U.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(f===null&&c===null))return l},this.setFoveation=function(U){l=U,f!==null&&(f.fixedFoveation=U),c!==null&&c.fixedFoveation!==void 0&&(c.fixedFoveation=U)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(y)};let P=null;function ft(U,Y){if(u=Y.getViewerPose(h||o),d=Y,u!==null){let Q=u.views;c!==null&&(t.setRenderTargetFramebuffer(S,c.framebuffer),t.setRenderTarget(S));let W=!1;Q.length!==y.cameras.length&&(y.cameras.length=0,W=!0);for(let ot=0;ot<Q.length;ot++){let wt=Q[ot],pt=null;if(c!==null)pt=c.getViewport(wt);else{let Z=g.getViewSubImage(f,wt);pt=Z.viewport,ot===0&&(t.setRenderTargetTextures(S,Z.colorTexture,f.ignoreDepthValues?void 0:Z.depthStencilTexture),t.setRenderTarget(S))}let V=x[ot];V===void 0&&(V=new bn,V.layers.enable(ot),V.viewport=new Ze,x[ot]=V),V.matrix.fromArray(wt.transform.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale),V.projectionMatrix.fromArray(wt.projectionMatrix),V.projectionMatrixInverse.copy(V.projectionMatrix).invert(),V.viewport.set(pt.x,pt.y,pt.width,pt.height),ot===0&&(y.matrix.copy(V.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),W===!0&&y.cameras.push(V)}let lt=s.enabledFeatures;if(lt&&lt.includes("depth-sensing")){let ot=g.getDepthInformation(Q[0]);ot&&ot.isValid&&ot.texture&&M.init(t,ot,s.renderState)}}for(let Q=0;Q<_.length;Q++){let W=v[Q],lt=_[Q];W!==null&&lt!==void 0&&lt.update(W,Y,h||o)}P&&P(U,Y),Y.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Y}),d=null}let Ft=new uu;Ft.setAnimationLoop(ft),this.setAnimationLoop=function(U){P=U},this.dispose=function(){}}},es=new qn,ax=new Ee;function lx(n,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,du(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,S,_,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),g(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&c(m,p,v)):p.isMeshMatcapMaterial?(r(m,p),d(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),M(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,S,_):p.isSpriteMaterial?h(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===un&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===un&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let S=t.get(p),_=S.envMap,v=S.envMapRotation;_&&(m.envMap.value=_,es.copy(v),es.x*=-1,es.y*=-1,es.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(es.y*=-1,es.z*=-1),m.envMapRotation.value.setFromMatrix4(ax.makeRotationFromEuler(es)),m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,S,_){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*S,m.scale.value=_*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function g(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function c(m,p,S){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===un&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function d(m,p){p.matcap&&(m.matcap.value=p.matcap)}function M(m,p){let S=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function cx(n,t,e,i){let s={},r={},o=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,_){let v=_.program;i.uniformBlockBinding(S,v)}function h(S,_){let v=s[S.id];v===void 0&&(d(S),v=u(S),s[S.id]=v,S.addEventListener("dispose",m));let L=_.program;i.updateUBOMapping(S,L);let E=t.render.frame;r[S.id]!==E&&(f(S),r[S.id]=E)}function u(S){let _=g();S.__bindingPointIndex=_;let v=n.createBuffer(),L=S.__size,E=S.usage;return n.bindBuffer(n.UNIFORM_BUFFER,v),n.bufferData(n.UNIFORM_BUFFER,L,E),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,_,v),v}function g(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(S){let _=s[S.id],v=S.uniforms,L=S.__cache;n.bindBuffer(n.UNIFORM_BUFFER,_);for(let E=0,T=v.length;E<T;E++){let R=Array.isArray(v[E])?v[E]:[v[E]];for(let x=0,y=R.length;x<y;x++){let b=R[x];if(c(b,E,x,L)===!0){let A=b.__offset,w=Array.isArray(b.value)?b.value:[b.value],I=0;for(let O=0;O<w.length;O++){let D=w[O],B=M(D);typeof D=="number"||typeof D=="boolean"?(b.__data[0]=D,n.bufferSubData(n.UNIFORM_BUFFER,A+I,b.__data)):D.isMatrix3?(b.__data[0]=D.elements[0],b.__data[1]=D.elements[1],b.__data[2]=D.elements[2],b.__data[3]=0,b.__data[4]=D.elements[3],b.__data[5]=D.elements[4],b.__data[6]=D.elements[5],b.__data[7]=0,b.__data[8]=D.elements[6],b.__data[9]=D.elements[7],b.__data[10]=D.elements[8],b.__data[11]=0):(D.toArray(b.__data,I),I+=B.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,A,b.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function c(S,_,v,L){let E=S.value,T=_+"_"+v;if(L[T]===void 0)return typeof E=="number"||typeof E=="boolean"?L[T]=E:L[T]=E.clone(),!0;{let R=L[T];if(typeof E=="number"||typeof E=="boolean"){if(R!==E)return L[T]=E,!0}else if(R.equals(E)===!1)return R.copy(E),!0}return!1}function d(S){let _=S.uniforms,v=0,L=16;for(let T=0,R=_.length;T<R;T++){let x=Array.isArray(_[T])?_[T]:[_[T]];for(let y=0,b=x.length;y<b;y++){let A=x[y],w=Array.isArray(A.value)?A.value:[A.value];for(let I=0,O=w.length;I<O;I++){let D=w[I],B=M(D),F=v%L,q=F%B.boundary,st=F+q;v+=q,st!==0&&L-st<B.storage&&(v+=L-st),A.__data=new Float32Array(B.storage/Float32Array.BYTES_PER_ELEMENT),A.__offset=v,v+=B.storage}}}let E=v%L;return E>0&&(v+=L-E),S.__size=v,S.__cache={},this}function M(S){let _={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(_.boundary=4,_.storage=4):S.isVector2?(_.boundary=8,_.storage=8):S.isVector3||S.isColor?(_.boundary=16,_.storage=12):S.isVector4?(_.boundary=16,_.storage=16):S.isMatrix3?(_.boundary=48,_.storage=48):S.isMatrix4?(_.boundary=64,_.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),_}function m(S){let _=S.target;_.removeEventListener("dispose",m);let v=o.indexOf(_.__bindingPointIndex);o.splice(v,1),n.deleteBuffer(s[_.id]),delete s[_.id],delete r[_.id]}function p(){for(let S in s)n.deleteBuffer(s[S]);o=[],s={},r={}}return{bind:l,update:h,dispose:p}}var ra=class{constructor(t={}){let{canvas:e=pp(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:h=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:g=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let c;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");c=i.getContextAttributes().alpha}else c=o;let d=new Uint32Array(4),M=new Int32Array(4),m=null,p=null,S=[],_=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=hn,this.toneMapping=ii,this.toneMappingExposure=1;let v=this,L=!1,E=0,T=0,R=null,x=-1,y=null,b=new Ze,A=new Ze,w=null,I=new oe(0),O=0,D=e.width,B=e.height,F=1,q=null,st=null,P=new Ze(0,0,D,B),ft=new Ze(0,0,D,B),Ft=!1,U=new Lr,Y=!1,Q=!1,W=new Ee,lt=new Ee,ot=new $,wt=new Ze,pt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},V=!1;function Z(){return R===null?F:1}let H=i;function Lt(N,it){return e.getContext(N,it)}try{let N={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:h,powerPreference:u,failIfMajorPerformanceCaveat:g};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Zc}`),e.addEventListener("webglcontextlost",Ut,!1),e.addEventListener("webglcontextrestored",C,!1),e.addEventListener("webglcontextcreationerror",G,!1),H===null){let it="webgl2";if(H=Lt(it,N),H===null)throw Lt(it)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(N){throw console.error("THREE.WebGLRenderer: "+N.message),N}let xt,bt,Bt,K,Ot,z,k,mt,Rt,Pt,J,dt,ct,_t,Et,Ct,It,Wt,Kt,qt,ue,re,Se,at;function Yt(){xt=new Eg(H),xt.init(),re=new ix(H,xt),bt=new vg(H,xt,t,re),Bt=new tx(H,xt),bt.reverseDepthBuffer&&f&&Bt.buffers.depth.setReversed(!0),K=new Rg(H),Ot=new Hy,z=new nx(H,xt,Bt,Ot,bt,re,K),k=new Mg(v),mt=new wg(v),Rt=new Up(H),Se=new yg(H,Rt),Pt=new Tg(H,Rt,K,Se),J=new Ig(H,Pt,Rt,K),Kt=new Cg(H,bt,z),Ct=new _g(Ot),dt=new zy(v,k,mt,xt,bt,Se,Ct),ct=new lx(v,Ot),_t=new Vy,Et=new Zy(xt),Wt=new gg(v,k,mt,Bt,J,c,l),It=new jy(v,J,bt),at=new cx(H,K,bt,Bt),qt=new xg(H,xt,K),ue=new Ag(H,xt,K),K.programs=dt.programs,v.capabilities=bt,v.extensions=xt,v.properties=Ot,v.renderLists=_t,v.shadowMap=It,v.state=Bt,v.info=K}Yt();let Tt=new Rc(v,H);this.xr=Tt,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){let N=xt.get("WEBGL_lose_context");N&&N.loseContext()},this.forceContextRestore=function(){let N=xt.get("WEBGL_lose_context");N&&N.restoreContext()},this.getPixelRatio=function(){return F},this.setPixelRatio=function(N){N!==void 0&&(F=N,this.setSize(D,B,!1))},this.getSize=function(N){return N.set(D,B)},this.setSize=function(N,it,ut=!0){if(Tt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}D=N,B=it,e.width=Math.floor(N*F),e.height=Math.floor(it*F),ut===!0&&(e.style.width=N+"px",e.style.height=it+"px"),this.setViewport(0,0,N,it)},this.getDrawingBufferSize=function(N){return N.set(D*F,B*F).floor()},this.setDrawingBufferSize=function(N,it,ut){D=N,B=it,F=ut,e.width=Math.floor(N*ut),e.height=Math.floor(it*ut),this.setViewport(0,0,N,it)},this.getCurrentViewport=function(N){return N.copy(b)},this.getViewport=function(N){return N.copy(P)},this.setViewport=function(N,it,ut,yt){N.isVector4?P.set(N.x,N.y,N.z,N.w):P.set(N,it,ut,yt),Bt.viewport(b.copy(P).multiplyScalar(F).round())},this.getScissor=function(N){return N.copy(ft)},this.setScissor=function(N,it,ut,yt){N.isVector4?ft.set(N.x,N.y,N.z,N.w):ft.set(N,it,ut,yt),Bt.scissor(A.copy(ft).multiplyScalar(F).round())},this.getScissorTest=function(){return Ft},this.setScissorTest=function(N){Bt.setScissorTest(Ft=N)},this.setOpaqueSort=function(N){q=N},this.setTransparentSort=function(N){st=N},this.getClearColor=function(N){return N.copy(Wt.getClearColor())},this.setClearColor=function(){Wt.setClearColor.apply(Wt,arguments)},this.getClearAlpha=function(){return Wt.getClearAlpha()},this.setClearAlpha=function(){Wt.setClearAlpha.apply(Wt,arguments)},this.clear=function(N=!0,it=!0,ut=!0){let yt=0;if(N){let nt=!1;if(R!==null){let Gt=R.texture.format;nt=Gt===ih||Gt===nh||Gt===eh}if(nt){let Gt=R.texture.type,Xt=Gt===xi||Gt===ls||Gt===Ir||Gt===Ys||Gt===jc||Gt===Qc,se=Wt.getClearColor(),ee=Wt.getClearAlpha(),pe=se.r,xe=se.g,le=se.b;Xt?(d[0]=pe,d[1]=xe,d[2]=le,d[3]=ee,H.clearBufferuiv(H.COLOR,0,d)):(M[0]=pe,M[1]=xe,M[2]=le,M[3]=ee,H.clearBufferiv(H.COLOR,0,M))}else yt|=H.COLOR_BUFFER_BIT}it&&(yt|=H.DEPTH_BUFFER_BIT),ut&&(yt|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H.clear(yt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Ut,!1),e.removeEventListener("webglcontextrestored",C,!1),e.removeEventListener("webglcontextcreationerror",G,!1),_t.dispose(),Et.dispose(),Ot.dispose(),k.dispose(),mt.dispose(),J.dispose(),Se.dispose(),at.dispose(),dt.dispose(),Tt.dispose(),Tt.removeEventListener("sessionstart",kt),Tt.removeEventListener("sessionend",tt),Mt.stop()};function Ut(N){N.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function C(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;let N=K.autoReset,it=It.enabled,ut=It.autoUpdate,yt=It.needsUpdate,nt=It.type;Yt(),K.autoReset=N,It.enabled=it,It.autoUpdate=ut,It.needsUpdate=yt,It.type=nt}function G(N){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",N.statusMessage)}function j(N){let it=N.target;it.removeEventListener("dispose",j),rt(it)}function rt(N){vt(N),Ot.remove(N)}function vt(N){let it=Ot.get(N).programs;it!==void 0&&(it.forEach(function(ut){dt.releaseProgram(ut)}),N.isShaderMaterial&&dt.releaseShaderCache(N))}this.renderBufferDirect=function(N,it,ut,yt,nt,Gt){it===null&&(it=pt);let Xt=nt.isMesh&&nt.matrixWorld.determinant()<0,se=te(N,it,ut,yt,nt);Bt.setMaterial(yt,Xt);let ee=ut.index,pe=1;if(yt.wireframe===!0){if(ee=Pt.getWireframeAttribute(ut),ee===void 0)return;pe=2}let xe=ut.drawRange,le=ut.attributes.position,Re=xe.start*pe,Fe=(xe.start+xe.count)*pe;Gt!==null&&(Re=Math.max(Re,Gt.start*pe),Fe=Math.min(Fe,(Gt.start+Gt.count)*pe)),ee!==null?(Re=Math.max(Re,0),Fe=Math.min(Fe,ee.count)):le!=null&&(Re=Math.max(Re,0),Fe=Math.min(Fe,le.count));let ze=Fe-Re;if(ze<0||ze===1/0)return;Se.setup(nt,yt,se,ut,ee);let Tn,Ie=qt;if(ee!==null&&(Tn=Rt.get(ee),Ie=ue,Ie.setIndex(Tn)),nt.isMesh)yt.wireframe===!0?(Bt.setLineWidth(yt.wireframeLinewidth*Z()),Ie.setMode(H.LINES)):Ie.setMode(H.TRIANGLES);else if(nt.isLine){let ce=yt.linewidth;ce===void 0&&(ce=1),Bt.setLineWidth(ce*Z()),nt.isLineSegments?Ie.setMode(H.LINES):nt.isLineLoop?Ie.setMode(H.LINE_LOOP):Ie.setMode(H.LINE_STRIP)}else nt.isPoints?Ie.setMode(H.POINTS):nt.isSprite&&Ie.setMode(H.TRIANGLES);if(nt.isBatchedMesh)if(nt._multiDrawInstances!==null)Ie.renderMultiDrawInstances(nt._multiDrawStarts,nt._multiDrawCounts,nt._multiDrawCount,nt._multiDrawInstances);else if(xt.get("WEBGL_multi_draw"))Ie.renderMultiDraw(nt._multiDrawStarts,nt._multiDrawCounts,nt._multiDrawCount);else{let ce=nt._multiDrawStarts,ai=nt._multiDrawCounts,Pe=nt._multiDrawCount,Hn=ee?Rt.get(ee).bytesPerElement:1,ps=Ot.get(yt).currentProgram.getUniforms();for(let Cn=0;Cn<Pe;Cn++)ps.setValue(H,"_gl_DrawID",Cn),Ie.render(ce[Cn]/Hn,ai[Cn])}else if(nt.isInstancedMesh)Ie.renderInstances(Re,ze,nt.count);else if(ut.isInstancedBufferGeometry){let ce=ut._maxInstanceCount!==void 0?ut._maxInstanceCount:1/0,ai=Math.min(ut.instanceCount,ce);Ie.renderInstances(Re,ze,ai)}else Ie.render(Re,ze)};function et(N,it,ut){N.transparent===!0&&N.side===je&&N.forceSinglePass===!1?(N.side=un,N.needsUpdate=!0,Nt(N,it,ut),N.side=Fi,N.needsUpdate=!0,Nt(N,it,ut),N.side=je):Nt(N,it,ut)}this.compile=function(N,it,ut=null){ut===null&&(ut=N),p=Et.get(ut),p.init(it),_.push(p),ut.traverseVisible(function(nt){nt.isLight&&nt.layers.test(it.layers)&&(p.pushLight(nt),nt.castShadow&&p.pushShadow(nt))}),N!==ut&&N.traverseVisible(function(nt){nt.isLight&&nt.layers.test(it.layers)&&(p.pushLight(nt),nt.castShadow&&p.pushShadow(nt))}),p.setupLights();let yt=new Set;return N.traverse(function(nt){if(!(nt.isMesh||nt.isPoints||nt.isLine||nt.isSprite))return;let Gt=nt.material;if(Gt)if(Array.isArray(Gt))for(let Xt=0;Xt<Gt.length;Xt++){let se=Gt[Xt];et(se,ut,nt),yt.add(se)}else et(Gt,ut,nt),yt.add(Gt)}),_.pop(),p=null,yt},this.compileAsync=function(N,it,ut=null){let yt=this.compile(N,it,ut);return new Promise(nt=>{function Gt(){if(yt.forEach(function(Xt){Ot.get(Xt).currentProgram.isReady()&&yt.delete(Xt)}),yt.size===0){nt(N);return}setTimeout(Gt,10)}xt.get("KHR_parallel_shader_compile")!==null?Gt():setTimeout(Gt,10)})};let St=null;function Vt(N){St&&St(N)}function kt(){Mt.stop()}function tt(){Mt.start()}let Mt=new uu;Mt.setAnimationLoop(Vt),typeof self<"u"&&Mt.setContext(self),this.setAnimationLoop=function(N){St=N,Tt.setAnimationLoop(N),N===null?Mt.stop():Mt.start()},Tt.addEventListener("sessionstart",kt),Tt.addEventListener("sessionend",tt),this.render=function(N,it){if(it!==void 0&&it.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;if(N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),it.parent===null&&it.matrixWorldAutoUpdate===!0&&it.updateMatrixWorld(),Tt.enabled===!0&&Tt.isPresenting===!0&&(Tt.cameraAutoUpdate===!0&&Tt.updateCamera(it),it=Tt.getCamera()),N.isScene===!0&&N.onBeforeRender(v,N,it,R),p=Et.get(N,_.length),p.init(it),_.push(p),lt.multiplyMatrices(it.projectionMatrix,it.matrixWorldInverse),U.setFromProjectionMatrix(lt),Q=this.localClippingEnabled,Y=Ct.init(this.clippingPlanes,Q),m=_t.get(N,S.length),m.init(),S.push(m),Tt.enabled===!0&&Tt.isPresenting===!0){let Gt=v.xr.getDepthSensingMesh();Gt!==null&&At(Gt,it,-1/0,v.sortObjects)}At(N,it,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(q,st),V=Tt.enabled===!1||Tt.isPresenting===!1||Tt.hasDepthSensing()===!1,V&&Wt.addToRenderList(m,N),this.info.render.frame++,Y===!0&&Ct.beginShadows();let ut=p.state.shadowsArray;It.render(ut,N,it),Y===!0&&Ct.endShadows(),this.info.autoReset===!0&&this.info.reset();let yt=m.opaque,nt=m.transmissive;if(p.setupLights(),it.isArrayCamera){let Gt=it.cameras;if(nt.length>0)for(let Xt=0,se=Gt.length;Xt<se;Xt++){let ee=Gt[Xt];ae(yt,nt,N,ee)}V&&Wt.render(N);for(let Xt=0,se=Gt.length;Xt<se;Xt++){let ee=Gt[Xt];jt(m,N,ee,ee.viewport)}}else nt.length>0&&ae(yt,nt,N,it),V&&Wt.render(N),jt(m,N,it);R!==null&&(z.updateMultisampleRenderTarget(R),z.updateRenderTargetMipmap(R)),N.isScene===!0&&N.onAfterRender(v,N,it),Se.resetDefaultState(),x=-1,y=null,_.pop(),_.length>0?(p=_[_.length-1],Y===!0&&Ct.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,S.pop(),S.length>0?m=S[S.length-1]:m=null};function At(N,it,ut,yt){if(N.visible===!1)return;if(N.layers.test(it.layers)){if(N.isGroup)ut=N.renderOrder;else if(N.isLOD)N.autoUpdate===!0&&N.update(it);else if(N.isLight)p.pushLight(N),N.castShadow&&p.pushShadow(N);else if(N.isSprite){if(!N.frustumCulled||U.intersectsSprite(N)){yt&&wt.setFromMatrixPosition(N.matrixWorld).applyMatrix4(lt);let Xt=J.update(N),se=N.material;se.visible&&m.push(N,Xt,se,ut,wt.z,null)}}else if((N.isMesh||N.isLine||N.isPoints)&&(!N.frustumCulled||U.intersectsObject(N))){let Xt=J.update(N),se=N.material;if(yt&&(N.boundingSphere!==void 0?(N.boundingSphere===null&&N.computeBoundingSphere(),wt.copy(N.boundingSphere.center)):(Xt.boundingSphere===null&&Xt.computeBoundingSphere(),wt.copy(Xt.boundingSphere.center)),wt.applyMatrix4(N.matrixWorld).applyMatrix4(lt)),Array.isArray(se)){let ee=Xt.groups;for(let pe=0,xe=ee.length;pe<xe;pe++){let le=ee[pe],Re=se[le.materialIndex];Re&&Re.visible&&m.push(N,Xt,Re,ut,wt.z,le)}}else se.visible&&m.push(N,Xt,se,ut,wt.z,null)}}let Gt=N.children;for(let Xt=0,se=Gt.length;Xt<se;Xt++)At(Gt[Xt],it,ut,yt)}function jt(N,it,ut,yt){let nt=N.opaque,Gt=N.transmissive,Xt=N.transparent;p.setupLightsView(ut),Y===!0&&Ct.setGlobalState(v.clippingPlanes,ut),yt&&Bt.viewport(b.copy(yt)),nt.length>0&&X(nt,it,ut),Gt.length>0&&X(Gt,it,ut),Xt.length>0&&X(Xt,it,ut),Bt.buffers.depth.setTest(!0),Bt.buffers.depth.setMask(!0),Bt.buffers.color.setMask(!0),Bt.setPolygonOffset(!1)}function ae(N,it,ut,yt){if((ut.isScene===!0?ut.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[yt.id]===void 0&&(p.state.transmissionRenderTarget[yt.id]=new vi(1,1,{generateMipmaps:!0,type:xt.has("EXT_color_buffer_half_float")||xt.has("EXT_color_buffer_float")?Gr:xi,minFilter:os,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ae.workingColorSpace}));let Gt=p.state.transmissionRenderTarget[yt.id],Xt=yt.viewport||b;Gt.setSize(Xt.z,Xt.w);let se=v.getRenderTarget();v.setRenderTarget(Gt),v.getClearColor(I),O=v.getClearAlpha(),O<1&&v.setClearColor(16777215,.5),v.clear(),V&&Wt.render(ut);let ee=v.toneMapping;v.toneMapping=ii;let pe=yt.viewport;if(yt.viewport!==void 0&&(yt.viewport=void 0),p.setupLightsView(yt),Y===!0&&Ct.setGlobalState(v.clippingPlanes,yt),X(N,ut,yt),z.updateMultisampleRenderTarget(Gt),z.updateRenderTargetMipmap(Gt),xt.has("WEBGL_multisampled_render_to_texture")===!1){let xe=!1;for(let le=0,Re=it.length;le<Re;le++){let Fe=it[le],ze=Fe.object,Tn=Fe.geometry,Ie=Fe.material,ce=Fe.group;if(Ie.side===je&&ze.layers.test(yt.layers)){let ai=Ie.side;Ie.side=un,Ie.needsUpdate=!0,ht(ze,ut,yt,Tn,Ie,ce),Ie.side=ai,Ie.needsUpdate=!0,xe=!0}}xe===!0&&(z.updateMultisampleRenderTarget(Gt),z.updateRenderTargetMipmap(Gt))}v.setRenderTarget(se),v.setClearColor(I,O),pe!==void 0&&(yt.viewport=pe),v.toneMapping=ee}function X(N,it,ut){let yt=it.isScene===!0?it.overrideMaterial:null;for(let nt=0,Gt=N.length;nt<Gt;nt++){let Xt=N[nt],se=Xt.object,ee=Xt.geometry,pe=yt===null?Xt.material:yt,xe=Xt.group;se.layers.test(ut.layers)&&ht(se,it,ut,ee,pe,xe)}}function ht(N,it,ut,yt,nt,Gt){N.onBeforeRender(v,it,ut,yt,nt,Gt),N.modelViewMatrix.multiplyMatrices(ut.matrixWorldInverse,N.matrixWorld),N.normalMatrix.getNormalMatrix(N.modelViewMatrix),nt.onBeforeRender(v,it,ut,yt,N,Gt),nt.transparent===!0&&nt.side===je&&nt.forceSinglePass===!1?(nt.side=un,nt.needsUpdate=!0,v.renderBufferDirect(ut,it,yt,nt,N,Gt),nt.side=Fi,nt.needsUpdate=!0,v.renderBufferDirect(ut,it,yt,nt,N,Gt),nt.side=je):v.renderBufferDirect(ut,it,yt,nt,N,Gt),N.onAfterRender(v,it,ut,yt,nt,Gt)}function Nt(N,it,ut){it.isScene!==!0&&(it=pt);let yt=Ot.get(N),nt=p.state.lights,Gt=p.state.shadowsArray,Xt=nt.state.version,se=dt.getParameters(N,nt.state,Gt,it,ut),ee=dt.getProgramCacheKey(se),pe=yt.programs;yt.environment=N.isMeshStandardMaterial?it.environment:null,yt.fog=it.fog,yt.envMap=(N.isMeshStandardMaterial?mt:k).get(N.envMap||yt.environment),yt.envMapRotation=yt.environment!==null&&N.envMap===null?it.environmentRotation:N.envMapRotation,pe===void 0&&(N.addEventListener("dispose",j),pe=new Map,yt.programs=pe);let xe=pe.get(ee);if(xe!==void 0){if(yt.currentProgram===xe&&yt.lightsStateVersion===Xt)return Jt(N,se),xe}else se.uniforms=dt.getUniforms(N),N.onBeforeCompile(se,v),xe=dt.acquireProgram(se,ee),pe.set(ee,xe),yt.uniforms=se.uniforms;let le=yt.uniforms;return(!N.isShaderMaterial&&!N.isRawShaderMaterial||N.clipping===!0)&&(le.clippingPlanes=Ct.uniform),Jt(N,se),yt.needsLights=Ce(N),yt.lightsStateVersion=Xt,yt.needsLights&&(le.ambientLightColor.value=nt.state.ambient,le.lightProbe.value=nt.state.probe,le.directionalLights.value=nt.state.directional,le.directionalLightShadows.value=nt.state.directionalShadow,le.spotLights.value=nt.state.spot,le.spotLightShadows.value=nt.state.spotShadow,le.rectAreaLights.value=nt.state.rectArea,le.ltc_1.value=nt.state.rectAreaLTC1,le.ltc_2.value=nt.state.rectAreaLTC2,le.pointLights.value=nt.state.point,le.pointLightShadows.value=nt.state.pointShadow,le.hemisphereLights.value=nt.state.hemi,le.directionalShadowMap.value=nt.state.directionalShadowMap,le.directionalShadowMatrix.value=nt.state.directionalShadowMatrix,le.spotShadowMap.value=nt.state.spotShadowMap,le.spotLightMatrix.value=nt.state.spotLightMatrix,le.spotLightMap.value=nt.state.spotLightMap,le.pointShadowMap.value=nt.state.pointShadowMap,le.pointShadowMatrix.value=nt.state.pointShadowMatrix),yt.currentProgram=xe,yt.uniformsList=null,xe}function Dt(N){if(N.uniformsList===null){let it=N.currentProgram.getUniforms();N.uniformsList=Gs.seqWithValue(it.seq,N.uniforms)}return N.uniformsList}function Jt(N,it){let ut=Ot.get(N);ut.outputColorSpace=it.outputColorSpace,ut.batching=it.batching,ut.batchingColor=it.batchingColor,ut.instancing=it.instancing,ut.instancingColor=it.instancingColor,ut.instancingMorph=it.instancingMorph,ut.skinning=it.skinning,ut.morphTargets=it.morphTargets,ut.morphNormals=it.morphNormals,ut.morphColors=it.morphColors,ut.morphTargetsCount=it.morphTargetsCount,ut.numClippingPlanes=it.numClippingPlanes,ut.numIntersection=it.numClipIntersection,ut.vertexAlphas=it.vertexAlphas,ut.vertexTangents=it.vertexTangents,ut.toneMapping=it.toneMapping}function te(N,it,ut,yt,nt){it.isScene!==!0&&(it=pt),z.resetTextureUnits();let Gt=it.fog,Xt=yt.isMeshStandardMaterial?it.environment:null,se=R===null?v.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:tr,ee=(yt.isMeshStandardMaterial?mt:k).get(yt.envMap||Xt),pe=yt.vertexColors===!0&&!!ut.attributes.color&&ut.attributes.color.itemSize===4,xe=!!ut.attributes.tangent&&(!!yt.normalMap||yt.anisotropy>0),le=!!ut.morphAttributes.position,Re=!!ut.morphAttributes.normal,Fe=!!ut.morphAttributes.color,ze=ii;yt.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(ze=v.toneMapping);let Tn=ut.morphAttributes.position||ut.morphAttributes.normal||ut.morphAttributes.color,Ie=Tn!==void 0?Tn.length:0,ce=Ot.get(yt),ai=p.state.lights;if(Y===!0&&(Q===!0||N!==y)){let kn=N===y&&yt.id===x;Ct.setState(yt,N,kn)}let Pe=!1;yt.version===ce.__version?(ce.needsLights&&ce.lightsStateVersion!==ai.state.version||ce.outputColorSpace!==se||nt.isBatchedMesh&&ce.batching===!1||!nt.isBatchedMesh&&ce.batching===!0||nt.isBatchedMesh&&ce.batchingColor===!0&&nt.colorTexture===null||nt.isBatchedMesh&&ce.batchingColor===!1&&nt.colorTexture!==null||nt.isInstancedMesh&&ce.instancing===!1||!nt.isInstancedMesh&&ce.instancing===!0||nt.isSkinnedMesh&&ce.skinning===!1||!nt.isSkinnedMesh&&ce.skinning===!0||nt.isInstancedMesh&&ce.instancingColor===!0&&nt.instanceColor===null||nt.isInstancedMesh&&ce.instancingColor===!1&&nt.instanceColor!==null||nt.isInstancedMesh&&ce.instancingMorph===!0&&nt.morphTexture===null||nt.isInstancedMesh&&ce.instancingMorph===!1&&nt.morphTexture!==null||ce.envMap!==ee||yt.fog===!0&&ce.fog!==Gt||ce.numClippingPlanes!==void 0&&(ce.numClippingPlanes!==Ct.numPlanes||ce.numIntersection!==Ct.numIntersection)||ce.vertexAlphas!==pe||ce.vertexTangents!==xe||ce.morphTargets!==le||ce.morphNormals!==Re||ce.morphColors!==Fe||ce.toneMapping!==ze||ce.morphTargetsCount!==Ie)&&(Pe=!0):(Pe=!0,ce.__version=yt.version);let Hn=ce.currentProgram;Pe===!0&&(Hn=Nt(yt,it,nt));let ps=!1,Cn=!1,cr=!1,He=Hn.getUniforms(),Qn=ce.uniforms;if(Bt.useProgram(Hn.program)&&(ps=!0,Cn=!0,cr=!0),yt.id!==x&&(x=yt.id,Cn=!0),ps||y!==N){Bt.buffers.depth.getReversed()?(W.copy(N.projectionMatrix),gp(W),yp(W),He.setValue(H,"projectionMatrix",W)):He.setValue(H,"projectionMatrix",N.projectionMatrix),He.setValue(H,"viewMatrix",N.matrixWorldInverse);let Ei=He.map.cameraPosition;Ei!==void 0&&Ei.setValue(H,ot.setFromMatrixPosition(N.matrixWorld)),bt.logarithmicDepthBuffer&&He.setValue(H,"logDepthBufFC",2/(Math.log(N.far+1)/Math.LN2)),(yt.isMeshPhongMaterial||yt.isMeshToonMaterial||yt.isMeshLambertMaterial||yt.isMeshBasicMaterial||yt.isMeshStandardMaterial||yt.isShaderMaterial)&&He.setValue(H,"isOrthographic",N.isOrthographicCamera===!0),y!==N&&(y=N,Cn=!0,cr=!0)}if(nt.isSkinnedMesh){He.setOptional(H,nt,"bindMatrix"),He.setOptional(H,nt,"bindMatrixInverse");let kn=nt.skeleton;kn&&(kn.boneTexture===null&&kn.computeBoneTexture(),He.setValue(H,"boneTexture",kn.boneTexture,z))}nt.isBatchedMesh&&(He.setOptional(H,nt,"batchingTexture"),He.setValue(H,"batchingTexture",nt._matricesTexture,z),He.setOptional(H,nt,"batchingIdTexture"),He.setValue(H,"batchingIdTexture",nt._indirectTexture,z),He.setOptional(H,nt,"batchingColorTexture"),nt._colorsTexture!==null&&He.setValue(H,"batchingColorTexture",nt._colorsTexture,z));let hr=ut.morphAttributes;if((hr.position!==void 0||hr.normal!==void 0||hr.color!==void 0)&&Kt.update(nt,ut,Hn),(Cn||ce.receiveShadow!==nt.receiveShadow)&&(ce.receiveShadow=nt.receiveShadow,He.setValue(H,"receiveShadow",nt.receiveShadow)),yt.isMeshGouraudMaterial&&yt.envMap!==null&&(Qn.envMap.value=ee,Qn.flipEnvMap.value=ee.isCubeTexture&&ee.isRenderTargetTexture===!1?-1:1),yt.isMeshStandardMaterial&&yt.envMap===null&&it.environment!==null&&(Qn.envMapIntensity.value=it.environmentIntensity),Cn&&(He.setValue(H,"toneMappingExposure",v.toneMappingExposure),ce.needsLights&&$t(Qn,cr),Gt&&yt.fog===!0&&ct.refreshFogUniforms(Qn,Gt),ct.refreshMaterialUniforms(Qn,yt,F,B,p.state.transmissionRenderTarget[N.id]),Gs.upload(H,Dt(ce),Qn,z)),yt.isShaderMaterial&&yt.uniformsNeedUpdate===!0&&(Gs.upload(H,Dt(ce),Qn,z),yt.uniformsNeedUpdate=!1),yt.isSpriteMaterial&&He.setValue(H,"center",nt.center),He.setValue(H,"modelViewMatrix",nt.modelViewMatrix),He.setValue(H,"normalMatrix",nt.normalMatrix),He.setValue(H,"modelMatrix",nt.matrixWorld),yt.isShaderMaterial||yt.isRawShaderMaterial){let kn=yt.uniformsGroups;for(let Ei=0,Ti=kn.length;Ei<Ti;Ei++){let Mh=kn[Ei];at.update(Mh,Hn),at.bind(Mh,Hn)}}return Hn}function $t(N,it){N.ambientLightColor.needsUpdate=it,N.lightProbe.needsUpdate=it,N.directionalLights.needsUpdate=it,N.directionalLightShadows.needsUpdate=it,N.pointLights.needsUpdate=it,N.pointLightShadows.needsUpdate=it,N.spotLights.needsUpdate=it,N.spotLightShadows.needsUpdate=it,N.rectAreaLights.needsUpdate=it,N.hemisphereLights.needsUpdate=it}function Ce(N){return N.isMeshLambertMaterial||N.isMeshToonMaterial||N.isMeshPhongMaterial||N.isMeshStandardMaterial||N.isShadowMaterial||N.isShaderMaterial&&N.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(N,it,ut){Ot.get(N.texture).__webglTexture=it,Ot.get(N.depthTexture).__webglTexture=ut;let yt=Ot.get(N);yt.__hasExternalTextures=!0,yt.__autoAllocateDepthBuffer=ut===void 0,yt.__autoAllocateDepthBuffer||xt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),yt.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(N,it){let ut=Ot.get(N);ut.__webglFramebuffer=it,ut.__useDefaultFramebuffer=it===void 0},this.setRenderTarget=function(N,it=0,ut=0){R=N,E=it,T=ut;let yt=!0,nt=null,Gt=!1,Xt=!1;if(N){let ee=Ot.get(N);if(ee.__useDefaultFramebuffer!==void 0)Bt.bindFramebuffer(H.FRAMEBUFFER,null),yt=!1;else if(ee.__webglFramebuffer===void 0)z.setupRenderTarget(N);else if(ee.__hasExternalTextures)z.rebindTextures(N,Ot.get(N.texture).__webglTexture,Ot.get(N.depthTexture).__webglTexture);else if(N.depthBuffer){let le=N.depthTexture;if(ee.__boundDepthTexture!==le){if(le!==null&&Ot.has(le)&&(N.width!==le.image.width||N.height!==le.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");z.setupDepthRenderbuffer(N)}}let pe=N.texture;(pe.isData3DTexture||pe.isDataArrayTexture||pe.isCompressedArrayTexture)&&(Xt=!0);let xe=Ot.get(N).__webglFramebuffer;N.isWebGLCubeRenderTarget?(Array.isArray(xe[it])?nt=xe[it][ut]:nt=xe[it],Gt=!0):N.samples>0&&z.useMultisampledRTT(N)===!1?nt=Ot.get(N).__webglMultisampledFramebuffer:Array.isArray(xe)?nt=xe[ut]:nt=xe,b.copy(N.viewport),A.copy(N.scissor),w=N.scissorTest}else b.copy(P).multiplyScalar(F).floor(),A.copy(ft).multiplyScalar(F).floor(),w=Ft;if(Bt.bindFramebuffer(H.FRAMEBUFFER,nt)&&yt&&Bt.drawBuffers(N,nt),Bt.viewport(b),Bt.scissor(A),Bt.setScissorTest(w),Gt){let ee=Ot.get(N.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+it,ee.__webglTexture,ut)}else if(Xt){let ee=Ot.get(N.texture),pe=it||0;H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,ee.__webglTexture,ut||0,pe)}x=-1},this.readRenderTargetPixels=function(N,it,ut,yt,nt,Gt,Xt){if(!(N&&N.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let se=Ot.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&Xt!==void 0&&(se=se[Xt]),se){Bt.bindFramebuffer(H.FRAMEBUFFER,se);try{let ee=N.texture,pe=ee.format,xe=ee.type;if(!bt.textureFormatReadable(pe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!bt.textureTypeReadable(xe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}it>=0&&it<=N.width-yt&&ut>=0&&ut<=N.height-nt&&H.readPixels(it,ut,yt,nt,re.convert(pe),re.convert(xe),Gt)}finally{let ee=R!==null?Ot.get(R).__webglFramebuffer:null;Bt.bindFramebuffer(H.FRAMEBUFFER,ee)}}},this.readRenderTargetPixelsAsync=async function(N,it,ut,yt,nt,Gt,Xt){if(!(N&&N.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let se=Ot.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&Xt!==void 0&&(se=se[Xt]),se){let ee=N.texture,pe=ee.format,xe=ee.type;if(!bt.textureFormatReadable(pe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!bt.textureTypeReadable(xe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(it>=0&&it<=N.width-yt&&ut>=0&&ut<=N.height-nt){Bt.bindFramebuffer(H.FRAMEBUFFER,se);let le=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,le),H.bufferData(H.PIXEL_PACK_BUFFER,Gt.byteLength,H.STREAM_READ),H.readPixels(it,ut,yt,nt,re.convert(pe),re.convert(xe),0);let Re=R!==null?Ot.get(R).__webglFramebuffer:null;Bt.bindFramebuffer(H.FRAMEBUFFER,Re);let Fe=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await mp(H,Fe,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,le),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,Gt),H.deleteBuffer(le),H.deleteSync(Fe),Gt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(N,it=null,ut=0){N.isTexture!==!0&&(Sr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),it=arguments[0]||null,N=arguments[1]);let yt=Math.pow(2,-ut),nt=Math.floor(N.image.width*yt),Gt=Math.floor(N.image.height*yt),Xt=it!==null?it.x:0,se=it!==null?it.y:0;z.setTexture2D(N,0),H.copyTexSubImage2D(H.TEXTURE_2D,ut,0,0,Xt,se,nt,Gt),Bt.unbindTexture()},this.copyTextureToTexture=function(N,it,ut=null,yt=null,nt=0){N.isTexture!==!0&&(Sr("WebGLRenderer: copyTextureToTexture function signature has changed."),yt=arguments[0]||null,N=arguments[1],it=arguments[2],nt=arguments[3]||0,ut=null);let Gt,Xt,se,ee,pe,xe,le,Re,Fe,ze=N.isCompressedTexture?N.mipmaps[nt]:N.image;ut!==null?(Gt=ut.max.x-ut.min.x,Xt=ut.max.y-ut.min.y,se=ut.isBox3?ut.max.z-ut.min.z:1,ee=ut.min.x,pe=ut.min.y,xe=ut.isBox3?ut.min.z:0):(Gt=ze.width,Xt=ze.height,se=ze.depth||1,ee=0,pe=0,xe=0),yt!==null?(le=yt.x,Re=yt.y,Fe=yt.z):(le=0,Re=0,Fe=0);let Tn=re.convert(it.format),Ie=re.convert(it.type),ce;it.isData3DTexture?(z.setTexture3D(it,0),ce=H.TEXTURE_3D):it.isDataArrayTexture||it.isCompressedArrayTexture?(z.setTexture2DArray(it,0),ce=H.TEXTURE_2D_ARRAY):(z.setTexture2D(it,0),ce=H.TEXTURE_2D),H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,it.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,it.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,it.unpackAlignment);let ai=H.getParameter(H.UNPACK_ROW_LENGTH),Pe=H.getParameter(H.UNPACK_IMAGE_HEIGHT),Hn=H.getParameter(H.UNPACK_SKIP_PIXELS),ps=H.getParameter(H.UNPACK_SKIP_ROWS),Cn=H.getParameter(H.UNPACK_SKIP_IMAGES);H.pixelStorei(H.UNPACK_ROW_LENGTH,ze.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,ze.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,ee),H.pixelStorei(H.UNPACK_SKIP_ROWS,pe),H.pixelStorei(H.UNPACK_SKIP_IMAGES,xe);let cr=N.isDataArrayTexture||N.isData3DTexture,He=it.isDataArrayTexture||it.isData3DTexture;if(N.isRenderTargetTexture||N.isDepthTexture){let Qn=Ot.get(N),hr=Ot.get(it),kn=Ot.get(Qn.__renderTarget),Ei=Ot.get(hr.__renderTarget);Bt.bindFramebuffer(H.READ_FRAMEBUFFER,kn.__webglFramebuffer),Bt.bindFramebuffer(H.DRAW_FRAMEBUFFER,Ei.__webglFramebuffer);for(let Ti=0;Ti<se;Ti++)cr&&H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Ot.get(N).__webglTexture,nt,xe+Ti),N.isDepthTexture?(He&&H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Ot.get(it).__webglTexture,nt,Fe+Ti),H.blitFramebuffer(ee,pe,Gt,Xt,le,Re,Gt,Xt,H.DEPTH_BUFFER_BIT,H.NEAREST)):He?H.copyTexSubImage3D(ce,nt,le,Re,Fe+Ti,ee,pe,Gt,Xt):H.copyTexSubImage2D(ce,nt,le,Re,Fe+Ti,ee,pe,Gt,Xt);Bt.bindFramebuffer(H.READ_FRAMEBUFFER,null),Bt.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else He?N.isDataTexture||N.isData3DTexture?H.texSubImage3D(ce,nt,le,Re,Fe,Gt,Xt,se,Tn,Ie,ze.data):it.isCompressedArrayTexture?H.compressedTexSubImage3D(ce,nt,le,Re,Fe,Gt,Xt,se,Tn,ze.data):H.texSubImage3D(ce,nt,le,Re,Fe,Gt,Xt,se,Tn,Ie,ze):N.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,nt,le,Re,Gt,Xt,Tn,Ie,ze.data):N.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,nt,le,Re,ze.width,ze.height,Tn,ze.data):H.texSubImage2D(H.TEXTURE_2D,nt,le,Re,Gt,Xt,Tn,Ie,ze);H.pixelStorei(H.UNPACK_ROW_LENGTH,ai),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Pe),H.pixelStorei(H.UNPACK_SKIP_PIXELS,Hn),H.pixelStorei(H.UNPACK_SKIP_ROWS,ps),H.pixelStorei(H.UNPACK_SKIP_IMAGES,Cn),nt===0&&it.generateMipmaps&&H.generateMipmap(ce),Bt.unbindTexture()},this.copyTextureToTexture3D=function(N,it,ut=null,yt=null,nt=0){return N.isTexture!==!0&&(Sr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),ut=arguments[0]||null,yt=arguments[1]||null,N=arguments[2],it=arguments[3],nt=arguments[4]||0),Sr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(N,it,ut,yt,nt)},this.initRenderTarget=function(N){Ot.get(N).__webglFramebuffer===void 0&&z.setupRenderTarget(N)},this.initTexture=function(N){N.isCubeTexture?z.setTextureCube(N,0):N.isData3DTexture?z.setTexture3D(N,0):N.isDataArrayTexture||N.isCompressedArrayTexture?z.setTexture2DArray(N,0):z.setTexture2D(N,0),Bt.unbindTexture()},this.resetState=function(){E=0,T=0,R=null,Bt.reset(),Se.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return gi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=Ae._getDrawingBufferColorSpace(t),e.unpackColorSpace=Ae._getUnpackColorSpace()}};var oa=class n{constructor(t,e=1,i=1e3){this.isFog=!0,this.name="",this.color=new oe(t),this.near=e,this.far=i}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},aa=class extends De{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new qn,this.environmentIntensity=1,this.environmentRotation=new qn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},la=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=uc,this.updateRanges=[],this.version=0,this.uuid=si()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[i+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=si()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=si()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},_n=new $,kr=class n{constructor(t,e,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)_n.fromBufferAttribute(this,e),_n.applyMatrix4(t),this.setXYZ(e,_n.x,_n.y,_n.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)_n.fromBufferAttribute(this,e),_n.applyNormalMatrix(t),this.setXYZ(e,_n.x,_n.y,_n.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)_n.fromBufferAttribute(this,e),_n.transformDirection(t),this.setXYZ(e,_n.x,_n.y,_n.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=Xn(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Le(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=Le(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Le(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Le(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Le(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Xn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Xn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Xn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Xn(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=Le(e,this.array),i=Le(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Le(e,this.array),i=Le(i,this.array),s=Le(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Le(e,this.array),i=Le(i,this.array),s=Le(s,this.array),r=Le(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new $e(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new n(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Dr=class extends Mi{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new oe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Ds,yr=new $,Us=new $,Ns=new $,Os=new zt,xr=new zt,yu=new Ee,Io=new $,vr=new $,Po=new $,Dd=new zt,Ml=new zt,Ud=new zt,ca=class extends De{constructor(t=new Dr){if(super(),this.isSprite=!0,this.type="Sprite",Ds===void 0){Ds=new Ue;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new la(e,5);Ds.setIndex([0,1,2,0,2,3]),Ds.setAttribute("position",new kr(i,3,0,!1)),Ds.setAttribute("uv",new kr(i,2,3,!1))}this.geometry=Ds,this.material=t,this.center=new zt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Us.setFromMatrixScale(this.matrixWorld),yu.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Ns.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Us.multiplyScalar(-Ns.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let o=this.center;Lo(Io.set(-.5,-.5,0),Ns,o,Us,s,r),Lo(vr.set(.5,-.5,0),Ns,o,Us,s,r),Lo(Po.set(.5,.5,0),Ns,o,Us,s,r),Dd.set(0,0),Ml.set(1,0),Ud.set(1,1);let a=t.ray.intersectTriangle(Io,vr,Po,!1,yr);if(a===null&&(Lo(vr.set(-.5,.5,0),Ns,o,Us,s,r),Ml.set(0,1),a=t.ray.intersectTriangle(Io,Po,vr,!1,yr),a===null))return;let l=t.ray.origin.distanceTo(yr);l<t.near||l>t.far||e.push({distance:l,point:yr.clone(),uv:Ui.getInterpolation(yr,Io,vr,Po,Dd,Ml,Ud,new zt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function Lo(n,t,e,i,s,r){Os.subVectors(n,e).addScalar(.5).multiply(i),s!==void 0?(xr.x=r*Os.x-s*Os.y,xr.y=s*Os.x+r*Os.y):xr.copy(Os),n.copy(t),n.x+=xr.x,n.y+=xr.y,n.applyMatrix4(yu)}var Ur=class extends An{constructor(t=null,e=1,i=1,s,r,o,a,l,h=Sn,u=Sn,g,f){super(null,o,a,l,h,u,s,r,g,f),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Nr=class extends $e{constructor(t,e,i,s=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Fs=new Ee,Nd=new Ee,ko=[],Od=new _i,hx=new Ee,_r=new Ne,Mr=new zi,en=class extends Ne{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Nr(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,hx)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new _i),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Fs),Od.copy(t.boundingBox).applyMatrix4(Fs),this.boundingBox.union(Od)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new zi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Fs),Mr.copy(t.boundingSphere).applyMatrix4(Fs),this.boundingSphere.union(Mr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let i=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=t*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(t,e){let i=this.matrixWorld,s=this.count;if(_r.geometry=this.geometry,_r.material=this.material,_r.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Mr.copy(this.boundingSphere),Mr.applyMatrix4(i),t.ray.intersectsSphere(Mr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Fs),Nd.multiplyMatrices(i,Fs),_r.matrixWorld=Nd,_r.raycast(t,ko);for(let o=0,a=ko.length;o<a;o++){let l=ko[o];l.instanceId=r,l.object=this,e.push(l)}ko.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Nr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let i=e.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new Ur(new Float32Array(s*this.count),s,this.count,th,ni));let r=this.morphTexture.source.data.data,o=0;for(let h=0;h<i.length;h++)o+=i[h];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;r[l]=a,r.set(i,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var cs=class extends Mi{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new oe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},ha=new $,da=new $,Fd=new Ee,br=new Jo,Do=new zi,bl=new $,Bd=new $,Cc=class extends De{constructor(t=new Ue,e=new cs){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[0];for(let s=1,r=e.count;s<r;s++)ha.fromBufferAttribute(e,s-1),da.fromBufferAttribute(e,s),i[s]=i[s-1],i[s]+=ha.distanceTo(da);t.setAttribute("lineDistance",new me(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let i=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Do.copy(i.boundingSphere),Do.applyMatrix4(s),Do.radius+=r,t.ray.intersectsSphere(Do)===!1)return;Fd.copy(s).invert(),br.copy(t.ray).applyMatrix4(Fd);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,h=this.isLineSegments?2:1,u=i.index,f=i.attributes.position;if(u!==null){let c=Math.max(0,o.start),d=Math.min(u.count,o.start+o.count);for(let M=c,m=d-1;M<m;M+=h){let p=u.getX(M),S=u.getX(M+1),_=Uo(this,t,br,l,p,S);_&&e.push(_)}if(this.isLineLoop){let M=u.getX(d-1),m=u.getX(c),p=Uo(this,t,br,l,M,m);p&&e.push(p)}}else{let c=Math.max(0,o.start),d=Math.min(f.count,o.start+o.count);for(let M=c,m=d-1;M<m;M+=h){let p=Uo(this,t,br,l,M,M+1);p&&e.push(p)}if(this.isLineLoop){let M=Uo(this,t,br,l,d-1,c);M&&e.push(M)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Uo(n,t,e,i,s,r){let o=n.geometry.attributes.position;if(ha.fromBufferAttribute(o,s),da.fromBufferAttribute(o,r),e.distanceSqToSegment(ha,da,bl,Bd)>i)return;bl.applyMatrix4(n.matrixWorld);let l=t.ray.origin.distanceTo(bl);if(!(l<t.near||l>t.far))return{distance:l,point:Bd.clone().applyMatrix4(n.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:n}}var zd=new $,Hd=new $,Ks=class extends Cc{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[];for(let s=0,r=e.count;s<r;s+=2)zd.fromBufferAttribute(e,s),Hd.fromBufferAttribute(e,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+zd.distanceTo(Hd);t.setAttribute("lineDistance",new me(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var js=class extends An{constructor(t,e,i,s,r,o,a,l,h){super(t,e,i,s,r,o,a,l,h),this.isCanvasTexture=!0,this.needsUpdate=!0}},Nn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],i,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)i=this.getPoint(o/t),r+=i.distanceTo(s),e.push(r),s=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let i=this.getLengths(),s=0,r=i.length,o;e?o=e:o=t*i[r-1];let a=0,l=r-1,h;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),h=i[s]-o,h<0)a=s+1;else if(h>0)l=s-1;else{l=s;break}if(s=l,i[s]===o)return s/(r-1);let u=i[s],f=i[s+1]-u,c=(o-u)/f;return(s+c)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new zt:new $);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e){let i=new $,s=[],r=[],o=[],a=new $,l=new Ee;for(let c=0;c<=t;c++){let d=c/t;s[c]=this.getTangentAt(d,new $)}r[0]=new $,o[0]=new $;let h=Number.MAX_VALUE,u=Math.abs(s[0].x),g=Math.abs(s[0].y),f=Math.abs(s[0].z);u<=h&&(h=u,i.set(1,0,0)),g<=h&&(h=g,i.set(0,1,0)),f<=h&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let c=1;c<=t;c++){if(r[c]=r[c-1].clone(),o[c]=o[c-1].clone(),a.crossVectors(s[c-1],s[c]),a.length()>Number.EPSILON){a.normalize();let d=Math.acos(dn(s[c-1].dot(s[c]),-1,1));r[c].applyMatrix4(l.makeRotationAxis(a,d))}o[c].crossVectors(s[c],r[c])}if(e===!0){let c=Math.acos(dn(r[0].dot(r[t]),-1,1));c/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(c=-c);for(let d=1;d<=t;d++)r[d].applyMatrix4(l.makeRotationAxis(s[d],c*d)),o[d].crossVectors(s[d],r[d])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Or=class extends Nn{constructor(t=0,e=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new zt){let i=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(a),h=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let u=Math.cos(this.aRotation),g=Math.sin(this.aRotation),f=l-this.aX,c=h-this.aY;l=f*u-c*g+this.aX,h=f*g+c*u+this.aY}return i.set(l,h)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Ic=class extends Or{constructor(t,e,i,s,r,o){super(t,e,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function ah(){let n=0,t=0,e=0,i=0;function s(r,o,a,l){n=r,t=a,e=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,h){s(o,a,h*(a-r),h*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,h,u,g){let f=(o-r)/h-(a-r)/(h+u)+(a-o)/u,c=(a-o)/u-(l-o)/(u+g)+(l-a)/g;f*=u,c*=u,s(o,a,f,c)},calc:function(r){let o=r*r,a=o*r;return n+t*r+e*o+i*a}}}var No=new $,Sl=new ah,wl=new ah,El=new ah,Fr=class extends Nn{constructor(t=[],e=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=s}getPoint(t,e=new $){let i=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let h,u;this.closed||a>0?h=s[(a-1)%r]:(No.subVectors(s[0],s[1]).add(s[0]),h=No);let g=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(No.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=No),this.curveType==="centripetal"||this.curveType==="chordal"){let c=this.curveType==="chordal"?.5:.25,d=Math.pow(h.distanceToSquared(g),c),M=Math.pow(g.distanceToSquared(f),c),m=Math.pow(f.distanceToSquared(u),c);M<1e-4&&(M=1),d<1e-4&&(d=M),m<1e-4&&(m=M),Sl.initNonuniformCatmullRom(h.x,g.x,f.x,u.x,d,M,m),wl.initNonuniformCatmullRom(h.y,g.y,f.y,u.y,d,M,m),El.initNonuniformCatmullRom(h.z,g.z,f.z,u.z,d,M,m)}else this.curveType==="catmullrom"&&(Sl.initCatmullRom(h.x,g.x,f.x,u.x,this.tension),wl.initCatmullRom(h.y,g.y,f.y,u.y,this.tension),El.initCatmullRom(h.z,g.z,f.z,u.z,this.tension));return i.set(Sl.calc(l),wl.calc(l),El.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(new $().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function $d(n,t,e,i,s){let r=(i-t)*.5,o=(s-e)*.5,a=n*n,l=n*a;return(2*e-2*i+r+o)*l+(-3*e+3*i-2*r-o)*a+r*n+e}function dx(n,t){let e=1-n;return e*e*t}function ux(n,t){return 2*(1-n)*n*t}function fx(n,t){return n*n*t}function Rr(n,t,e,i){return dx(n,t)+ux(n,e)+fx(n,i)}function px(n,t){let e=1-n;return e*e*e*t}function mx(n,t){let e=1-n;return 3*e*e*n*t}function gx(n,t){return 3*(1-n)*n*n*t}function yx(n,t){return n*n*n*t}function Cr(n,t,e,i,s){return px(n,t)+mx(n,e)+gx(n,i)+yx(n,s)}var ua=class extends Nn{constructor(t=new zt,e=new zt,i=new zt,s=new zt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new zt){let i=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Cr(t,s.x,r.x,o.x,a.x),Cr(t,s.y,r.y,o.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Pc=class extends Nn{constructor(t=new $,e=new $,i=new $,s=new $){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new $){let i=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Cr(t,s.x,r.x,o.x,a.x),Cr(t,s.y,r.y,o.y,a.y),Cr(t,s.z,r.z,o.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},fa=class extends Nn{constructor(t=new zt,e=new zt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new zt){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new zt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Lc=class extends Nn{constructor(t=new $,e=new $){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new $){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new $){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},pa=class extends Nn{constructor(t=new zt,e=new zt,i=new zt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new zt){let i=e,s=this.v0,r=this.v1,o=this.v2;return i.set(Rr(t,s.x,r.x,o.x),Rr(t,s.y,r.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ma=class extends Nn{constructor(t=new $,e=new $,i=new $){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new $){let i=e,s=this.v0,r=this.v1,o=this.v2;return i.set(Rr(t,s.x,r.x,o.x),Rr(t,s.y,r.y,o.y),Rr(t,s.z,r.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ga=class extends Nn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new zt){let i=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],h=s[o],u=s[o>s.length-2?s.length-1:o+1],g=s[o>s.length-3?s.length-1:o+2];return i.set($d(a,l.x,h.x,u.x,g.x),$d(a,l.y,h.y,u.y,g.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(new zt().fromArray(s))}return this}},ya=Object.freeze({__proto__:null,ArcCurve:Ic,CatmullRomCurve3:Fr,CubicBezierCurve:ua,CubicBezierCurve3:Pc,EllipseCurve:Or,LineCurve:fa,LineCurve3:Lc,QuadraticBezierCurve:pa,QuadraticBezierCurve3:ma,SplineCurve:ga}),kc=class extends Nn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ya[i](e,t))}return this}getPoint(t,e){let i=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let o=s[r]-i,a=this.curves[r],l=a.getLength(),h=l===0?0:1-o/l;return a.getPointAt(h,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let i=0,s=this.curves.length;i<s;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],i;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let h=0;h<l.length;h++){let u=l[h];i&&i.equals(u)||(e.push(u),i=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let s=t.curves[e];this.curves.push(new ya[s.type]().fromJSON(s))}return this}},Br=class extends kc{constructor(t){super(),this.type="Path",this.currentPoint=new zt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let i=new fa(this.currentPoint.clone(),new zt(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,s){let r=new pa(this.currentPoint.clone(),new zt(t,e),new zt(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(t,e,i,s,r,o){let a=new ua(this.currentPoint.clone(),new zt(t,e),new zt(i,s),new zt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),i=new ga(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,i,s,r,o),this}absarc(t,e,i,s,r,o){return this.absellipse(t,e,i,i,s,r,o),this}ellipse(t,e,i,s,r,o,a,l){let h=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+h,e+u,i,s,r,o,a,l),this}absellipse(t,e,i,s,r,o,a,l){let h=new Or(t,e,i,s,r,o,a,l);if(this.curves.length>0){let g=h.getPoint(0);g.equals(this.currentPoint)||this.lineTo(g.x,g.y)}this.curves.push(h);let u=h.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},zr=class n extends Ue{constructor(t=[new zt(0,-.5),new zt(.5,0),new zt(0,.5)],e=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:i,phiLength:s},e=Math.floor(e),s=dn(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],h=[],u=1/e,g=new $,f=new zt,c=new $,d=new $,M=new $,m=0,p=0;for(let S=0;S<=t.length-1;S++)switch(S){case 0:m=t[S+1].x-t[S].x,p=t[S+1].y-t[S].y,c.x=p*1,c.y=-m,c.z=p*0,M.copy(c),c.normalize(),l.push(c.x,c.y,c.z);break;case t.length-1:l.push(M.x,M.y,M.z);break;default:m=t[S+1].x-t[S].x,p=t[S+1].y-t[S].y,c.x=p*1,c.y=-m,c.z=p*0,d.copy(c),c.x+=M.x,c.y+=M.y,c.z+=M.z,c.normalize(),l.push(c.x,c.y,c.z),M.copy(d)}for(let S=0;S<=e;S++){let _=i+S*u*s,v=Math.sin(_),L=Math.cos(_);for(let E=0;E<=t.length-1;E++){g.x=t[E].x*v,g.y=t[E].y,g.z=t[E].x*L,o.push(g.x,g.y,g.z),f.x=S/e,f.y=E/(t.length-1),a.push(f.x,f.y);let T=l[3*E+0]*v,R=l[3*E+1],x=l[3*E+0]*L;h.push(T,R,x)}}for(let S=0;S<e;S++)for(let _=0;_<t.length-1;_++){let v=_+S*t.length,L=v,E=v+t.length,T=v+t.length+1,R=v+1;r.push(L,E,R),r.push(T,R,E)}this.setIndex(r),this.setAttribute("position",new me(o,3)),this.setAttribute("uv",new me(a,2)),this.setAttribute("normal",new me(h,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.points,t.segments,t.phiStart,t.phiLength)}},Yn=class n extends zr{constructor(t=1,e=1,i=4,s=8){let r=new Br;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(i),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:i,radialSegments:s}}static fromJSON(t){return new n(t.radius,t.length,t.capSegments,t.radialSegments)}};var he=class n extends Ue{constructor(t=1,e=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let h=this;s=Math.floor(s),r=Math.floor(r);let u=[],g=[],f=[],c=[],d=0,M=[],m=i/2,p=0;S(),o===!1&&(t>0&&_(!0),e>0&&_(!1)),this.setIndex(u),this.setAttribute("position",new me(g,3)),this.setAttribute("normal",new me(f,3)),this.setAttribute("uv",new me(c,2));function S(){let v=new $,L=new $,E=0,T=(e-t)/i;for(let R=0;R<=r;R++){let x=[],y=R/r,b=y*(e-t)+t;for(let A=0;A<=s;A++){let w=A/s,I=w*l+a,O=Math.sin(I),D=Math.cos(I);L.x=b*O,L.y=-y*i+m,L.z=b*D,g.push(L.x,L.y,L.z),v.set(O,T,D).normalize(),f.push(v.x,v.y,v.z),c.push(w,1-y),x.push(d++)}M.push(x)}for(let R=0;R<s;R++)for(let x=0;x<r;x++){let y=M[x][R],b=M[x+1][R],A=M[x+1][R+1],w=M[x][R+1];(t>0||x!==0)&&(u.push(y,b,w),E+=3),(e>0||x!==r-1)&&(u.push(b,A,w),E+=3)}h.addGroup(p,E,0),p+=E}function _(v){let L=d,E=new zt,T=new $,R=0,x=v===!0?t:e,y=v===!0?1:-1;for(let A=1;A<=s;A++)g.push(0,m*y,0),f.push(0,y,0),c.push(.5,.5),d++;let b=d;for(let A=0;A<=s;A++){let I=A/s*l+a,O=Math.cos(I),D=Math.sin(I);T.x=x*D,T.y=m*y,T.z=x*O,g.push(T.x,T.y,T.z),f.push(0,y,0),E.x=O*.5+.5,E.y=D*.5*y+.5,c.push(E.x,E.y),d++}for(let A=0;A<s;A++){let w=L+A,I=b+A;v===!0?u.push(I,I+1,w):u.push(I+1,I,w),R+=3}h.addGroup(p,R,v===!0?1:2),p+=R}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},qe=class n extends he{constructor(t=1,e=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new n(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Dc=class n extends Ue{constructor(t=[],e=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:s};let r=[],o=[];a(s),h(i),u(),this.setAttribute("position",new me(r,3)),this.setAttribute("normal",new me(r.slice(),3)),this.setAttribute("uv",new me(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(S){let _=new $,v=new $,L=new $;for(let E=0;E<e.length;E+=3)c(e[E+0],_),c(e[E+1],v),c(e[E+2],L),l(_,v,L,S)}function l(S,_,v,L){let E=L+1,T=[];for(let R=0;R<=E;R++){T[R]=[];let x=S.clone().lerp(v,R/E),y=_.clone().lerp(v,R/E),b=E-R;for(let A=0;A<=b;A++)A===0&&R===E?T[R][A]=x:T[R][A]=x.clone().lerp(y,A/b)}for(let R=0;R<E;R++)for(let x=0;x<2*(E-R)-1;x++){let y=Math.floor(x/2);x%2===0?(f(T[R][y+1]),f(T[R+1][y]),f(T[R][y])):(f(T[R][y+1]),f(T[R+1][y+1]),f(T[R+1][y]))}}function h(S){let _=new $;for(let v=0;v<r.length;v+=3)_.x=r[v+0],_.y=r[v+1],_.z=r[v+2],_.normalize().multiplyScalar(S),r[v+0]=_.x,r[v+1]=_.y,r[v+2]=_.z}function u(){let S=new $;for(let _=0;_<r.length;_+=3){S.x=r[_+0],S.y=r[_+1],S.z=r[_+2];let v=m(S)/2/Math.PI+.5,L=p(S)/Math.PI+.5;o.push(v,1-L)}d(),g()}function g(){for(let S=0;S<o.length;S+=6){let _=o[S+0],v=o[S+2],L=o[S+4],E=Math.max(_,v,L),T=Math.min(_,v,L);E>.9&&T<.1&&(_<.2&&(o[S+0]+=1),v<.2&&(o[S+2]+=1),L<.2&&(o[S+4]+=1))}}function f(S){r.push(S.x,S.y,S.z)}function c(S,_){let v=S*3;_.x=t[v+0],_.y=t[v+1],_.z=t[v+2]}function d(){let S=new $,_=new $,v=new $,L=new $,E=new zt,T=new zt,R=new zt;for(let x=0,y=0;x<r.length;x+=9,y+=6){S.set(r[x+0],r[x+1],r[x+2]),_.set(r[x+3],r[x+4],r[x+5]),v.set(r[x+6],r[x+7],r[x+8]),E.set(o[y+0],o[y+1]),T.set(o[y+2],o[y+3]),R.set(o[y+4],o[y+5]),L.copy(S).add(_).add(v).divideScalar(3);let b=m(L);M(E,y+0,S,b),M(T,y+2,_,b),M(R,y+4,v,b)}}function M(S,_,v,L){L<0&&S.x===1&&(o[_]=S.x-1),v.x===0&&v.z===0&&(o[_]=L/2/Math.PI+.5)}function m(S){return Math.atan2(S.z,-S.x)}function p(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.vertices,t.indices,t.radius,t.details)}};var hs=class extends Br{constructor(t){super(t),this.uuid=si(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let i=0,s=this.holes.length;i<s;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let s=t.holes[e];this.holes.push(new Br().fromJSON(s))}return this}},xx={triangulate:function(n,t,e=2){let i=t&&t.length,s=i?t[0]*e:n.length,r=xu(n,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,h,u,g,f,c;if(i&&(r=Sx(n,t,r,e)),n.length>80*e){a=h=n[0],l=u=n[1];for(let d=e;d<s;d+=e)g=n[d],f=n[d+1],g<a&&(a=g),f<l&&(l=f),g>h&&(h=g),f>u&&(u=f);c=Math.max(h-a,u-l),c=c!==0?32767/c:0}return Hr(r,o,e,a,l,c,0),o}};function xu(n,t,e,i,s){let r,o;if(s===Dx(n,t,e,i)>0)for(r=t;r<e;r+=i)o=Vd(r,n[r],n[r+1],o);else for(r=e-i;r>=t;r-=i)o=Vd(r,n[r],n[r+1],o);return o&&Ia(o,o.next)&&(Vr(o),o=o.next),o}function ds(n,t){if(!n)return n;t||(t=n);let e=n,i;do if(i=!1,!e.steiner&&(Ia(e,e.next)||Xe(e.prev,e,e.next)===0)){if(Vr(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function Hr(n,t,e,i,s,r,o){if(!n)return;!o&&r&&Rx(n,i,s,r);let a=n,l,h;for(;n.prev!==n.next;){if(l=n.prev,h=n.next,r?_x(n,i,s,r):vx(n)){t.push(l.i/e|0),t.push(n.i/e|0),t.push(h.i/e|0),Vr(n),n=h.next,a=h.next;continue}if(n=h,n===a){o?o===1?(n=Mx(ds(n),t,e),Hr(n,t,e,i,s,r,2)):o===2&&bx(n,t,e,i,s,r):Hr(ds(n),t,e,i,s,r,1);break}}}function vx(n){let t=n.prev,e=n,i=n.next;if(Xe(t,e,i)>=0)return!1;let s=t.x,r=e.x,o=i.x,a=t.y,l=e.y,h=i.y,u=s<r?s<o?s:o:r<o?r:o,g=a<l?a<h?a:h:l<h?l:h,f=s>r?s>o?s:o:r>o?r:o,c=a>l?a>h?a:h:l>h?l:h,d=i.next;for(;d!==t;){if(d.x>=u&&d.x<=f&&d.y>=g&&d.y<=c&&zs(s,a,r,l,o,h,d.x,d.y)&&Xe(d.prev,d,d.next)>=0)return!1;d=d.next}return!0}function _x(n,t,e,i){let s=n.prev,r=n,o=n.next;if(Xe(s,r,o)>=0)return!1;let a=s.x,l=r.x,h=o.x,u=s.y,g=r.y,f=o.y,c=a<l?a<h?a:h:l<h?l:h,d=u<g?u<f?u:f:g<f?g:f,M=a>l?a>h?a:h:l>h?l:h,m=u>g?u>f?u:f:g>f?g:f,p=Uc(c,d,t,e,i),S=Uc(M,m,t,e,i),_=n.prevZ,v=n.nextZ;for(;_&&_.z>=p&&v&&v.z<=S;){if(_.x>=c&&_.x<=M&&_.y>=d&&_.y<=m&&_!==s&&_!==o&&zs(a,u,l,g,h,f,_.x,_.y)&&Xe(_.prev,_,_.next)>=0||(_=_.prevZ,v.x>=c&&v.x<=M&&v.y>=d&&v.y<=m&&v!==s&&v!==o&&zs(a,u,l,g,h,f,v.x,v.y)&&Xe(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;_&&_.z>=p;){if(_.x>=c&&_.x<=M&&_.y>=d&&_.y<=m&&_!==s&&_!==o&&zs(a,u,l,g,h,f,_.x,_.y)&&Xe(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;v&&v.z<=S;){if(v.x>=c&&v.x<=M&&v.y>=d&&v.y<=m&&v!==s&&v!==o&&zs(a,u,l,g,h,f,v.x,v.y)&&Xe(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function Mx(n,t,e){let i=n;do{let s=i.prev,r=i.next.next;!Ia(s,r)&&vu(s,i,i.next,r)&&$r(s,r)&&$r(r,s)&&(t.push(s.i/e|0),t.push(i.i/e|0),t.push(r.i/e|0),Vr(i),Vr(i.next),i=n=r),i=i.next}while(i!==n);return ds(i)}function bx(n,t,e,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Px(o,a)){let l=_u(o,a);o=ds(o,o.next),l=ds(l,l.next),Hr(o,t,e,i,s,r,0),Hr(l,t,e,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function Sx(n,t,e,i){let s=[],r,o,a,l,h;for(r=0,o=t.length;r<o;r++)a=t[r]*i,l=r<o-1?t[r+1]*i:n.length,h=xu(n,a,l,i,!1),h===h.next&&(h.steiner=!0),s.push(Ix(h));for(s.sort(wx),r=0;r<s.length;r++)e=Ex(s[r],e);return e}function wx(n,t){return n.x-t.x}function Ex(n,t){let e=Tx(n,t);if(!e)return t;let i=_u(e,n);return ds(i,i.next),ds(e,e.next)}function Tx(n,t){let e=t,i=-1/0,s,r=n.x,o=n.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){let f=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=r&&f>i&&(i=f,s=e.x<e.next.x?e:e.next,f===r))return s}e=e.next}while(e!==t);if(!s)return null;let a=s,l=s.x,h=s.y,u=1/0,g;e=s;do r>=e.x&&e.x>=l&&r!==e.x&&zs(o<h?r:i,o,l,h,o<h?i:r,o,e.x,e.y)&&(g=Math.abs(o-e.y)/(r-e.x),$r(e,n)&&(g<u||g===u&&(e.x>s.x||e.x===s.x&&Ax(s,e)))&&(s=e,u=g)),e=e.next;while(e!==a);return s}function Ax(n,t){return Xe(n.prev,n,t.prev)<0&&Xe(t.next,n,n.next)<0}function Rx(n,t,e,i){let s=n;do s.z===0&&(s.z=Uc(s.x,s.y,t,e,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,Cx(s)}function Cx(n){let t,e,i,s,r,o,a,l,h=1;do{for(e=n,n=null,r=null,o=0;e;){for(o++,i=e,a=0,t=0;t<h&&(a++,i=i.nextZ,!!i);t++);for(l=h;a>0||l>0&&i;)a!==0&&(l===0||!i||e.z<=i.z)?(s=e,e=e.nextZ,a--):(s=i,i=i.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;e=i}r.nextZ=null,h*=2}while(o>1);return n}function Uc(n,t,e,i,s){return n=(n-e)*s|0,t=(t-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,n|t<<1}function Ix(n){let t=n,e=n;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==n);return e}function zs(n,t,e,i,s,r,o,a){return(s-o)*(t-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(i-a)}function Px(n,t){return n.next.i!==t.i&&n.prev.i!==t.i&&!Lx(n,t)&&($r(n,t)&&$r(t,n)&&kx(n,t)&&(Xe(n.prev,n,t.prev)||Xe(n,t.prev,t))||Ia(n,t)&&Xe(n.prev,n,n.next)>0&&Xe(t.prev,t,t.next)>0)}function Xe(n,t,e){return(t.y-n.y)*(e.x-t.x)-(t.x-n.x)*(e.y-t.y)}function Ia(n,t){return n.x===t.x&&n.y===t.y}function vu(n,t,e,i){let s=Fo(Xe(n,t,e)),r=Fo(Xe(n,t,i)),o=Fo(Xe(e,i,n)),a=Fo(Xe(e,i,t));return!!(s!==r&&o!==a||s===0&&Oo(n,e,t)||r===0&&Oo(n,i,t)||o===0&&Oo(e,n,i)||a===0&&Oo(e,t,i))}function Oo(n,t,e){return t.x<=Math.max(n.x,e.x)&&t.x>=Math.min(n.x,e.x)&&t.y<=Math.max(n.y,e.y)&&t.y>=Math.min(n.y,e.y)}function Fo(n){return n>0?1:n<0?-1:0}function Lx(n,t){let e=n;do{if(e.i!==n.i&&e.next.i!==n.i&&e.i!==t.i&&e.next.i!==t.i&&vu(e,e.next,n,t))return!0;e=e.next}while(e!==n);return!1}function $r(n,t){return Xe(n.prev,n,n.next)<0?Xe(n,t,n.next)>=0&&Xe(n,n.prev,t)>=0:Xe(n,t,n.prev)<0||Xe(n,n.next,t)<0}function kx(n,t){let e=n,i=!1,s=(n.x+t.x)/2,r=(n.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==n);return i}function _u(n,t){let e=new Nc(n.i,n.x,n.y),i=new Nc(t.i,t.x,t.y),s=n.next,r=t.prev;return n.next=t,t.prev=n,e.next=s,s.prev=e,i.next=e,e.prev=i,r.next=i,i.prev=r,i}function Vd(n,t,e,i){let s=new Nc(n,t,e);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function Vr(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Nc(n,t,e){this.i=n,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Dx(n,t,e,i){let s=0;for(let r=t,o=e-i;r<e;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}var Oi=class n{static area(t){let e=t.length,i=0;for(let s=e-1,r=0;r<e;s=r++)i+=t[s].x*t[r].y-t[r].x*t[s].y;return i*.5}static isClockWise(t){return n.area(t)<0}static triangulateShape(t,e){let i=[],s=[],r=[];Gd(t),Wd(i,t);let o=t.length;e.forEach(Gd);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,Wd(i,e[l]);let a=xx.triangulate(i,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function Gd(n){let t=n.length;t>2&&n[t-1].equals(n[0])&&n.pop()}function Wd(n,t){for(let e=0;e<t.length;e++)n.push(t[e].x),n.push(t[e].y)}var xa=class n extends Ue{constructor(t=new hs([new zt(.5,.5),new zt(-.5,.5),new zt(-.5,-.5),new zt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let i=this,s=[],r=[];for(let a=0,l=t.length;a<l;a++){let h=t[a];o(h)}this.setAttribute("position",new me(s,3)),this.setAttribute("uv",new me(r,2)),this.computeVertexNormals();function o(a){let l=[],h=e.curveSegments!==void 0?e.curveSegments:12,u=e.steps!==void 0?e.steps:1,g=e.depth!==void 0?e.depth:1,f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,c=e.bevelThickness!==void 0?e.bevelThickness:.2,d=e.bevelSize!==void 0?e.bevelSize:c-.1,M=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3,p=e.extrudePath,S=e.UVGenerator!==void 0?e.UVGenerator:Ux,_,v=!1,L,E,T,R;p&&(_=p.getSpacedPoints(u),v=!0,f=!1,L=p.computeFrenetFrames(u,!1),E=new $,T=new $,R=new $),f||(m=0,c=0,d=0,M=0);let x=a.extractPoints(h),y=x.shape,b=x.holes;if(!Oi.isClockWise(y)){y=y.reverse();for(let V=0,Z=b.length;V<Z;V++){let H=b[V];Oi.isClockWise(H)&&(b[V]=H.reverse())}}let w=Oi.triangulateShape(y,b),I=y;for(let V=0,Z=b.length;V<Z;V++){let H=b[V];y=y.concat(H)}function O(V,Z,H){return Z||console.error("THREE.ExtrudeGeometry: vec does not exist"),V.clone().addScaledVector(Z,H)}let D=y.length,B=w.length;function F(V,Z,H){let Lt,xt,bt,Bt=V.x-Z.x,K=V.y-Z.y,Ot=H.x-V.x,z=H.y-V.y,k=Bt*Bt+K*K,mt=Bt*z-K*Ot;if(Math.abs(mt)>Number.EPSILON){let Rt=Math.sqrt(k),Pt=Math.sqrt(Ot*Ot+z*z),J=Z.x-K/Rt,dt=Z.y+Bt/Rt,ct=H.x-z/Pt,_t=H.y+Ot/Pt,Et=((ct-J)*z-(_t-dt)*Ot)/(Bt*z-K*Ot);Lt=J+Bt*Et-V.x,xt=dt+K*Et-V.y;let Ct=Lt*Lt+xt*xt;if(Ct<=2)return new zt(Lt,xt);bt=Math.sqrt(Ct/2)}else{let Rt=!1;Bt>Number.EPSILON?Ot>Number.EPSILON&&(Rt=!0):Bt<-Number.EPSILON?Ot<-Number.EPSILON&&(Rt=!0):Math.sign(K)===Math.sign(z)&&(Rt=!0),Rt?(Lt=-K,xt=Bt,bt=Math.sqrt(k)):(Lt=Bt,xt=K,bt=Math.sqrt(k/2))}return new zt(Lt/bt,xt/bt)}let q=[];for(let V=0,Z=I.length,H=Z-1,Lt=V+1;V<Z;V++,H++,Lt++)H===Z&&(H=0),Lt===Z&&(Lt=0),q[V]=F(I[V],I[H],I[Lt]);let st=[],P,ft=q.concat();for(let V=0,Z=b.length;V<Z;V++){let H=b[V];P=[];for(let Lt=0,xt=H.length,bt=xt-1,Bt=Lt+1;Lt<xt;Lt++,bt++,Bt++)bt===xt&&(bt=0),Bt===xt&&(Bt=0),P[Lt]=F(H[Lt],H[bt],H[Bt]);st.push(P),ft=ft.concat(P)}for(let V=0;V<m;V++){let Z=V/m,H=c*Math.cos(Z*Math.PI/2),Lt=d*Math.sin(Z*Math.PI/2)+M;for(let xt=0,bt=I.length;xt<bt;xt++){let Bt=O(I[xt],q[xt],Lt);W(Bt.x,Bt.y,-H)}for(let xt=0,bt=b.length;xt<bt;xt++){let Bt=b[xt];P=st[xt];for(let K=0,Ot=Bt.length;K<Ot;K++){let z=O(Bt[K],P[K],Lt);W(z.x,z.y,-H)}}}let Ft=d+M;for(let V=0;V<D;V++){let Z=f?O(y[V],ft[V],Ft):y[V];v?(T.copy(L.normals[0]).multiplyScalar(Z.x),E.copy(L.binormals[0]).multiplyScalar(Z.y),R.copy(_[0]).add(T).add(E),W(R.x,R.y,R.z)):W(Z.x,Z.y,0)}for(let V=1;V<=u;V++)for(let Z=0;Z<D;Z++){let H=f?O(y[Z],ft[Z],Ft):y[Z];v?(T.copy(L.normals[V]).multiplyScalar(H.x),E.copy(L.binormals[V]).multiplyScalar(H.y),R.copy(_[V]).add(T).add(E),W(R.x,R.y,R.z)):W(H.x,H.y,g/u*V)}for(let V=m-1;V>=0;V--){let Z=V/m,H=c*Math.cos(Z*Math.PI/2),Lt=d*Math.sin(Z*Math.PI/2)+M;for(let xt=0,bt=I.length;xt<bt;xt++){let Bt=O(I[xt],q[xt],Lt);W(Bt.x,Bt.y,g+H)}for(let xt=0,bt=b.length;xt<bt;xt++){let Bt=b[xt];P=st[xt];for(let K=0,Ot=Bt.length;K<Ot;K++){let z=O(Bt[K],P[K],Lt);v?W(z.x,z.y+_[u-1].y,_[u-1].x+H):W(z.x,z.y,g+H)}}}U(),Y();function U(){let V=s.length/3;if(f){let Z=0,H=D*Z;for(let Lt=0;Lt<B;Lt++){let xt=w[Lt];lt(xt[2]+H,xt[1]+H,xt[0]+H)}Z=u+m*2,H=D*Z;for(let Lt=0;Lt<B;Lt++){let xt=w[Lt];lt(xt[0]+H,xt[1]+H,xt[2]+H)}}else{for(let Z=0;Z<B;Z++){let H=w[Z];lt(H[2],H[1],H[0])}for(let Z=0;Z<B;Z++){let H=w[Z];lt(H[0]+D*u,H[1]+D*u,H[2]+D*u)}}i.addGroup(V,s.length/3-V,0)}function Y(){let V=s.length/3,Z=0;Q(I,Z),Z+=I.length;for(let H=0,Lt=b.length;H<Lt;H++){let xt=b[H];Q(xt,Z),Z+=xt.length}i.addGroup(V,s.length/3-V,1)}function Q(V,Z){let H=V.length;for(;--H>=0;){let Lt=H,xt=H-1;xt<0&&(xt=V.length-1);for(let bt=0,Bt=u+m*2;bt<Bt;bt++){let K=D*bt,Ot=D*(bt+1),z=Z+Lt+K,k=Z+xt+K,mt=Z+xt+Ot,Rt=Z+Lt+Ot;ot(z,k,mt,Rt)}}}function W(V,Z,H){l.push(V),l.push(Z),l.push(H)}function lt(V,Z,H){wt(V),wt(Z),wt(H);let Lt=s.length/3,xt=S.generateTopUV(i,s,Lt-3,Lt-2,Lt-1);pt(xt[0]),pt(xt[1]),pt(xt[2])}function ot(V,Z,H,Lt){wt(V),wt(Z),wt(Lt),wt(Z),wt(H),wt(Lt);let xt=s.length/3,bt=S.generateSideWallUV(i,s,xt-6,xt-3,xt-2,xt-1);pt(bt[0]),pt(bt[1]),pt(bt[3]),pt(bt[1]),pt(bt[2]),pt(bt[3])}function wt(V){s.push(l[V*3+0]),s.push(l[V*3+1]),s.push(l[V*3+2])}function pt(V){r.push(V.x),r.push(V.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,i=this.parameters.options;return Nx(e,i,t)}static fromJSON(t,e){let i=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];i.push(a)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new ya[s.type]().fromJSON(s)),new n(i,t.options)}},Ux={generateTopUV:function(n,t,e,i,s){let r=t[e*3],o=t[e*3+1],a=t[i*3],l=t[i*3+1],h=t[s*3],u=t[s*3+1];return[new zt(r,o),new zt(a,l),new zt(h,u)]},generateSideWallUV:function(n,t,e,i,s,r){let o=t[e*3],a=t[e*3+1],l=t[e*3+2],h=t[i*3],u=t[i*3+1],g=t[i*3+2],f=t[s*3],c=t[s*3+1],d=t[s*3+2],M=t[r*3],m=t[r*3+1],p=t[r*3+2];return Math.abs(a-u)<Math.abs(o-h)?[new zt(o,1-l),new zt(h,1-g),new zt(f,1-d),new zt(M,1-p)]:[new zt(a,1-l),new zt(u,1-g),new zt(c,1-d),new zt(m,1-p)]}};function Nx(n,t,e){if(e.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){let r=n[i];e.shapes.push(r.uuid)}else e.shapes.push(n.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var nn=class n extends Dc{constructor(t=1,e=0){let i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new n(t.radius,t.detail)}};var va=class n extends Ue{constructor(t=.5,e=1,i=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:o},i=Math.max(3,i),s=Math.max(1,s);let a=[],l=[],h=[],u=[],g=t,f=(e-t)/s,c=new $,d=new zt;for(let M=0;M<=s;M++){for(let m=0;m<=i;m++){let p=r+m/i*o;c.x=g*Math.cos(p),c.y=g*Math.sin(p),l.push(c.x,c.y,c.z),h.push(0,0,1),d.x=(c.x/e+1)/2,d.y=(c.y/e+1)/2,u.push(d.x,d.y)}g+=f}for(let M=0;M<s;M++){let m=M*(i+1);for(let p=0;p<i;p++){let S=p+m,_=S,v=S+i+1,L=S+i+2,E=S+1;a.push(_,v,E),a.push(v,L,E)}}this.setIndex(a),this.setAttribute("position",new me(l,3)),this.setAttribute("normal",new me(h,3)),this.setAttribute("uv",new me(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},_a=class n extends Ue{constructor(t=new hs([new zt(0,.5),new zt(-.5,-.5),new zt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let i=[],s=[],r=[],o=[],a=0,l=0;if(Array.isArray(t)===!1)h(t);else for(let u=0;u<t.length;u++)h(t[u]),this.addGroup(a,l,u),a+=l,l=0;this.setIndex(i),this.setAttribute("position",new me(s,3)),this.setAttribute("normal",new me(r,3)),this.setAttribute("uv",new me(o,2));function h(u){let g=s.length/3,f=u.extractPoints(e),c=f.shape,d=f.holes;Oi.isClockWise(c)===!1&&(c=c.reverse());for(let m=0,p=d.length;m<p;m++){let S=d[m];Oi.isClockWise(S)===!0&&(d[m]=S.reverse())}let M=Oi.triangulateShape(c,d);for(let m=0,p=d.length;m<p;m++){let S=d[m];c=c.concat(S)}for(let m=0,p=c.length;m<p;m++){let S=c[m];s.push(S.x,S.y,0),r.push(0,0,1),o.push(S.x,S.y)}for(let m=0,p=M.length;m<p;m++){let S=M[m],_=S[0]+g,v=S[1]+g,L=S[2]+g;i.push(_,v,L),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return Ox(e,t)}static fromJSON(t,e){let i=[];for(let s=0,r=t.shapes.length;s<r;s++){let o=e[t.shapes[s]];i.push(o)}return new n(i,t.curveSegments)}};function Ox(n,t){if(t.shapes=[],Array.isArray(n))for(let e=0,i=n.length;e<i;e++){let s=n[e];t.shapes.push(s.uuid)}else t.shapes.push(n.uuid);return t}var ye=class n extends Ue{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),h=0,u=[],g=new $,f=new $,c=[],d=[],M=[],m=[];for(let p=0;p<=i;p++){let S=[],_=p/i,v=0;p===0&&o===0?v=.5/e:p===i&&l===Math.PI&&(v=-.5/e);for(let L=0;L<=e;L++){let E=L/e;g.x=-t*Math.cos(s+E*r)*Math.sin(o+_*a),g.y=t*Math.cos(o+_*a),g.z=t*Math.sin(s+E*r)*Math.sin(o+_*a),d.push(g.x,g.y,g.z),f.copy(g).normalize(),M.push(f.x,f.y,f.z),m.push(E+v,1-_),S.push(h++)}u.push(S)}for(let p=0;p<i;p++)for(let S=0;S<e;S++){let _=u[p][S+1],v=u[p][S],L=u[p+1][S],E=u[p+1][S+1];(p!==0||o>0)&&c.push(_,v,E),(p!==i-1||l<Math.PI)&&c.push(v,L,E)}this.setIndex(c),this.setAttribute("position",new me(d,3)),this.setAttribute("normal",new me(M,3)),this.setAttribute("uv",new me(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Je=class n extends Ue{constructor(t=1,e=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);let o=[],a=[],l=[],h=[],u=new $,g=new $,f=new $;for(let c=0;c<=i;c++)for(let d=0;d<=s;d++){let M=d/s*r,m=c/i*Math.PI*2;g.x=(t+e*Math.cos(m))*Math.cos(M),g.y=(t+e*Math.cos(m))*Math.sin(M),g.z=e*Math.sin(m),a.push(g.x,g.y,g.z),u.x=t*Math.cos(M),u.y=t*Math.sin(M),f.subVectors(g,u).normalize(),l.push(f.x,f.y,f.z),h.push(d/s),h.push(c/i)}for(let c=1;c<=i;c++)for(let d=1;d<=s;d++){let M=(s+1)*c+d-1,m=(s+1)*(c-1)+d-1,p=(s+1)*(c-1)+d,S=(s+1)*c+d;o.push(M,m,S),o.push(m,p,S)}this.setIndex(o),this.setAttribute("position",new me(a,3)),this.setAttribute("normal",new me(l,3)),this.setAttribute("uv",new me(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var Ma=class n extends Ue{constructor(t=new ma(new $(-1,-1,0),new $(-1,1,0),new $(1,1,0)),e=64,i=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:i,radialSegments:s,closed:r};let o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new $,l=new $,h=new zt,u=new $,g=[],f=[],c=[],d=[];M(),this.setIndex(d),this.setAttribute("position",new me(g,3)),this.setAttribute("normal",new me(f,3)),this.setAttribute("uv",new me(c,2));function M(){for(let _=0;_<e;_++)m(_);m(r===!1?e:0),S(),p()}function m(_){u=t.getPointAt(_/e,u);let v=o.normals[_],L=o.binormals[_];for(let E=0;E<=s;E++){let T=E/s*Math.PI*2,R=Math.sin(T),x=-Math.cos(T);l.x=x*v.x+R*L.x,l.y=x*v.y+R*L.y,l.z=x*v.z+R*L.z,l.normalize(),f.push(l.x,l.y,l.z),a.x=u.x+i*l.x,a.y=u.y+i*l.y,a.z=u.z+i*l.z,g.push(a.x,a.y,a.z)}}function p(){for(let _=1;_<=e;_++)for(let v=1;v<=s;v++){let L=(s+1)*(_-1)+(v-1),E=(s+1)*_+(v-1),T=(s+1)*_+v,R=(s+1)*(_-1)+v;d.push(L,E,R),d.push(E,T,R)}}function S(){for(let _=0;_<=e;_++)for(let v=0;v<=s;v++)h.x=_/e,h.y=v/s,c.push(h.x,h.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new n(new ya[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};var ba=class extends Mi{static get type(){return"MeshToonMaterial"}constructor(t){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.color=new oe(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new oe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ou,this.normalScale=new zt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};function Bo(n,t,e){return!n||!e&&n.constructor===t?n:typeof t.BYTES_PER_ELEMENT=="number"?new t(n):Array.prototype.slice.call(n)}function Fx(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var Qs=class{constructor(t,e,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,s=e[i],r=e[i-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=i+2;;){if(s===void 0){if(t<r)break i;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=e[++i],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=e[--i-1],t>=r)break t}o=i,i=0;break e}break n}for(;i<o;){let a=i+o>>>1;t<e[a]?o=a:i=a+1}if(s=e[i],r=e[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=i[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Oc=class extends Qs{constructor(t,e,i,s){super(t,e,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Fh,endingEnd:Fh}}intervalChanged_(t,e,i){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Bh:r=t,a=2*e-i;break;case zh:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Bh:o=t,l=2*i-e;break;case zh:o=1,l=i+s[1]-s[0];break;default:o=t-1,l=e}let h=(i-e)*.5,u=this.valueSize;this._weightPrev=h/(e-a),this._weightNext=h/(l-i),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,h=l-a,u=this._offsetPrev,g=this._offsetNext,f=this._weightPrev,c=this._weightNext,d=(i-e)/(s-e),M=d*d,m=M*d,p=-f*m+2*f*M-f*d,S=(1+f)*m+(-1.5-2*f)*M+(-.5+f)*d+1,_=(-1-c)*m+(1.5+c)*M+.5*d,v=c*m-c*M;for(let L=0;L!==a;++L)r[L]=p*o[u+L]+S*o[h+L]+_*o[l+L]+v*o[g+L];return r}},Fc=class extends Qs{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,h=l-a,u=(i-e)/(s-e),g=1-u;for(let f=0;f!==a;++f)r[f]=o[h+f]*g+o[l+f]*u;return r}},Bc=class extends Qs{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Zn=class{constructor(t,e,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Bo(e,this.TimeBufferType),this.values=Bo(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:Bo(t.times,Array),values:Bo(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s)}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new Bc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Fc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Oc(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Wo:e=this.InterpolantFactoryMethodDiscrete;break;case dc:e=this.InterpolantFactoryMethodLinear;break;case Ya:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Wo;case this.InterpolantFactoryMethodLinear:return dc;case this.InterpolantFactoryMethodSmooth:return Ya}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]*=t}return this}trim(t,e){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<t;)++r;for(;o!==-1&&i[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&Fx(s))for(let a=0,l=s.length;a!==l;++a){let h=s[a];if(isNaN(h)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,h),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Ya,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,h=t[a],u=t[a+1];if(h!==u&&(a!==1||h!==t[0]))if(s)l=!0;else{let g=a*i,f=g-i,c=g+i;for(let d=0;d!==i;++d){let M=e[g+d];if(M!==e[f+d]||M!==e[c+d]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let g=a*i,f=o*i;for(let c=0;c!==i;++c)e[f+c]=e[g+c]}++o}}if(r>0){t[o]=t[r];for(let a=r*i,l=o*i,h=0;h!==i;++h)e[l+h]=e[a+h];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,s=new i(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};Zn.prototype.TimeBufferType=Float32Array;Zn.prototype.ValueBufferType=Float32Array;Zn.prototype.DefaultInterpolation=dc;var us=class extends Zn{constructor(t,e,i){super(t,e,i)}};us.prototype.ValueTypeName="bool";us.prototype.ValueBufferType=Array;us.prototype.DefaultInterpolation=Wo;us.prototype.InterpolantFactoryMethodLinear=void 0;us.prototype.InterpolantFactoryMethodSmooth=void 0;var zc=class extends Zn{};zc.prototype.ValueTypeName="color";var Hc=class extends Zn{};Hc.prototype.ValueTypeName="number";var $c=class extends Qs{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-e)/(s-e),h=t*a;for(let u=h+a;h!==u;h+=4)ri.slerpFlat(r,0,o,h-a,o,h,l);return r}},Sa=class extends Zn{InterpolantFactoryMethodLinear(t){return new $c(this.times,this.values,this.getValueSize(),t)}};Sa.prototype.ValueTypeName="quaternion";Sa.prototype.InterpolantFactoryMethodSmooth=void 0;var fs=class extends Zn{constructor(t,e,i){super(t,e,i)}};fs.prototype.ValueTypeName="string";fs.prototype.ValueBufferType=Array;fs.prototype.DefaultInterpolation=Wo;fs.prototype.InterpolantFactoryMethodLinear=void 0;fs.prototype.InterpolantFactoryMethodSmooth=void 0;var Vc=class extends Zn{};Vc.prototype.ValueTypeName="vector";var Gc=class{constructor(t,e,i){let s=this,r=!1,o=0,a=0,l,h=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,g){return h.push(u,g),this},this.removeHandler=function(u){let g=h.indexOf(u);return g!==-1&&h.splice(g,2),this},this.getHandler=function(u){for(let g=0,f=h.length;g<f;g+=2){let c=h[g],d=h[g+1];if(c.global&&(c.lastIndex=0),c.test(u))return d}return null}}},Bx=new Gc,Wc=class{constructor(t){this.manager=t!==void 0?t:Bx,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let i=this;return new Promise(function(s,r){i.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};Wc.DEFAULT_MATERIAL_NAME="__DEFAULT";var wa=class extends De{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new oe(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},Ea=class extends wa{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(De.DEFAULT_UP),this.updateMatrix(),this.groundColor=new oe(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},Tl=new Ee,Xd=new $,qd=new $,Xc=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new zt(512,512),this.map=null,this.mapPass=null,this.matrix=new Ee,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Lr,this._frameExtents=new zt(1,1),this._viewportCount=1,this._viewports=[new Ze(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,i=this.matrix;Xd.setFromMatrixPosition(t.matrixWorld),e.position.copy(Xd),qd.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(qd),e.updateMatrixWorld(),Tl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Tl),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Tl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var qc=class extends Xc{constructor(){super(new na(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ta=class extends wa{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(De.DEFAULT_UP),this.updateMatrix(),this.target=new De,this.shadow=new qc}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var lh="\\[\\]\\.:\\/",zx=new RegExp("["+lh+"]","g"),ch="[^"+lh+"]",Hx="[^"+lh.replace("\\.","")+"]",$x=/((?:WC+[\/:])*)/.source.replace("WC",ch),Vx=/(WCOD+)?/.source.replace("WCOD",Hx),Gx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ch),Wx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ch),Xx=new RegExp("^"+$x+Vx+Gx+Wx+"$"),qx=["material","materials","bones","map"],Yc=class{constructor(t,e,i){let s=i||We.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},We=class n{constructor(t,e,i){this.path=e,this.parsedPath=i||n.parseTrackName(e),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new n.Composite(t,e,i):new n(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(zx,"")}static parseTrackName(t){let e=Xx.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);qx.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=i(a.children);if(l)return l}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)t[e++]=i[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=n.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let h=e.objectIndex;switch(i){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===h){h=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(h!==void 0){if(t[h]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[h]}}let o=t[s];if(o===void 0){let h=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+h+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};We.Composite=Yc;We.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};We.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};We.prototype.GetterByBindingType=[We.prototype._getValue_direct,We.prototype._getValue_array,We.prototype._getValue_arrayElement,We.prototype._getValue_toArray];We.prototype.SetterByBindingTypeAndVersioning=[[We.prototype._setValue_direct,We.prototype._setValue_direct_setNeedsUpdate,We.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[We.prototype._setValue_array,We.prototype._setValue_array_setNeedsUpdate,We.prototype._setValue_array_setMatrixWorldNeedsUpdate],[We.prototype._setValue_arrayElement,We.prototype._setValue_arrayElement_setNeedsUpdate,We.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[We.prototype._setValue_fromArray,We.prototype._setValue_fromArray_setNeedsUpdate,We.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var n_=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Zc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Zc);var Yx=2.3,Ve=7.2,Pa=.16,Hi=(n,t,e)=>{let i=Math.max(0,Math.min(1,(e-n)/(t-n)));return i*i*(3-2*i)};function Mu(n,t,e){let i=n.points,s=i.length-1,r=n.lengthM/s,o=U=>{let Y=Math.max(0,Math.min(s,U/r)),Q=Math.min(s-1,Math.floor(Y)),W=Y-Q,lt=i[Math.max(0,Q-1)],ot=i[Q],wt=i[Q+1],pt=i[Math.min(s,Q+2)],V=Z=>.5*(2*ot[Z]+(-lt[Z]+wt[Z])*W+(2*lt[Z]-5*ot[Z]+4*wt[Z]-pt[Z])*W*W+(-lt[Z]+3*ot[Z]-3*wt[Z]+pt[Z])*W*W*W);return[V(0),V(2),ot[1]+(wt[1]-ot[1])*W]},a=U=>{if(U<=n.lengthM)return o(U);let Y=o(n.lengthM-20),Q=o(n.lengthM),W=(U-n.lengthM)/20;return[Q[0]+(Q[0]-Y[0])*W,Q[1]+(Q[1]-Y[1])*W,Q[2]]},l=2700,h=2585,u=n.overlaps.filter(([U,Y])=>Y>U).sort((U,Y)=>U[1]-Y[1]),g=U=>{for(let W=0;W<u.length-1;W++){let[lt,ot]=u[W],[wt,pt]=u[W+1];if(U<=pt)return lt+(U-ot)*(wt-lt)/(pt-ot)}let[Y,Q]=u.at(-1);return Y+(U-Q)},f=[];for(let U=0;U<=l;U+=2)f.push([U,...o(U)]);let c=2600,d=4900,M=[];for(let U=c;U<=d;U+=10){let Y=o(U),Q=g(U),W=Q,lt=1e9;for(let ot of f){if(Math.abs(ot[0]-Q)>60)continue;let wt=(ot[1]-Y[0])**2+(ot[2]-Y[1])**2;wt<lt&&(lt=wt,W=ot[0])}M.push(W)}let m=M.map((U,Y)=>{let Q=0,W=0;for(let lt=-3;lt<=3;lt++){let ot=Y+lt;ot>=0&&ot<M.length&&(Q+=M[ot],W++)}return Q/W});for(let U=1;U<m.length;U++)m[U]=Math.max(m[U],m[U-1]+.5);let p=U=>{let Y=(U-c)/10,Q=Math.max(0,Math.min(m.length-2,Math.floor(Y))),W=Y-Q;return m[Q]+(m[Q+1]-m[Q])*W},S={};function _(U){for(let Y of Object.keys(S))delete S[Y];for(let Y of U?.runners||[])!Y.diversions||!Y.diversions.length||(S[Y.id]=Y.diversions.map(Q=>{let W=Q.path,lt=[0];for(let ot=1;ot<W.length;ot++)lt.push(lt[ot-1]+Math.hypot(W[ot][0]-W[ot-1][0],W[ot][1]-W[ot-1][1]));return{...Q,cum:lt,len:lt.at(-1)}}))}_(e);let v=(U,Y)=>{let Q=Math.max(0,Math.min(1,(Y-U.fromM)/(U.toM-U.fromM)))*U.len,W=0;for(;W<U.cum.length-2&&U.cum[W+1]<Q;)W++;let lt=(Q-U.cum[W])/Math.max(1e-6,U.cum[W+1]-U.cum[W]);return[U.path[W][0]+(U.path[W+1][0]-U.path[W][0])*lt,U.path[W][1]+(U.path[W+1][1]-U.path[W][1])*lt]};function L(U){if(U<c-60){let lt=a(U);return[lt[0],lt[1]]}let Y=a(U);if(U>=d+40)return[Y[0],Y[1]];let Q=Hi(c-60,c+60,U)*(1-Hi(d-60,d,U));if(Q<=0)return[Y[0],Y[1]];let W=o(Math.min(l,p(Math.max(c,Math.min(d,U)))));return[Y[0]+(W[0]-Y[0])*Q,Y[1]+(W[1]-Y[1])*Q]}function E(U,Y){let Q=L(U),W=Y&&S[Y];if(W){for(let lt of W)if(U>lt.fromM&&U<lt.toM){let ot=Hi(lt.fromM,lt.fromM+30,U)*(1-Hi(lt.toM-30,lt.toM,U)),wt=v(lt,U);return Q=[Q[0]+(wt[0]-Q[0])*ot,Q[1]+(wt[1]-Q[1])*ot],{x:Q[0],z:Q[1],div:ot,divInfo:lt}}}return{x:Q[0],z:Q[1],div:0,divInfo:null}}let[T,R,x,y]=t.bounds,b={x0:T-60,z0:R-60,cell:5};b.nx=Math.ceil((x+60-b.x0)/b.cell)+1,b.nz=Math.ceil((y+60-b.z0)/b.cell)+1,b.h=new Float32Array(b.nx*b.nz);let A=[];for(let U=0;U<=s;U+=2)A.push(i[U]);let w=0;for(let U of A)w+=U[1];w/=A.length;let I=(U,Y)=>Math.sin(U*.011+1.3)*Math.cos(Y*.009-.4)*2.2+Math.sin(U*.027+Y*.019)*.9;for(let U=0;U<b.nz;U++)for(let Y=0;Y<b.nx;Y++){let Q=b.x0+Y*b.cell,W=b.z0+U*b.cell,lt=0,ot=0,wt=1e9;for(let Z of A){let H=(Z[0]-Q)**2+(Z[2]-W)**2;H<wt&&(wt=H);let Lt=1/(H+400),xt=Lt*Lt;lt+=xt,ot+=xt*Z[1]}let pt=Hi(30,160,Math.sqrt(wt)),V=ot/lt*(1-pt*.4)+w*pt*.4+I(Q,W)*pt;b.h[U*b.nx+Y]=V*Yx}let O=t.features.filter(U=>U.closed&&["water","track","tennis","pitch"].includes(U.kind)&&U.pts.length>3);for(let U of O){let Y=On(U.pts),Q=[];for(let ot=Math.max(0,Math.floor((Y[1]-12-b.z0)/b.cell));ot<=Math.min(b.nz-1,Math.ceil((Y[3]+12-b.z0)/b.cell));ot++)for(let wt=Math.max(0,Math.floor((Y[0]-12-b.x0)/b.cell));wt<=Math.min(b.nx-1,Math.ceil((Y[2]+12-b.x0)/b.cell));wt++){let pt=b.x0+wt*b.cell,V=b.z0+ot*b.cell,Z=Wr(U.pts,pt,V);Z<12&&Q.push([ot*b.nx+wt,Z])}let W=0,lt=0;for(let[ot,wt]of Q)wt<0&&(W+=b.h[ot],lt++);if(lt){W/=lt,U.kind==="water"&&(W=Math.min(...Q.filter(ot=>ot[1]<0).map(ot=>b.h[ot[0]]))-.2),U._level=W;for(let[ot,wt]of Q){let pt=1-Hi(0,12,wt);b.h[ot]=b.h[ot]*(1-pt)+W*pt-(U.kind==="water"?1.6*(1-Hi(-6,0,wt)):0)}}}{for(let V=0;V<3;V++){let Z=new Float32Array(b.h);for(let H=1;H<b.nz-1;H++)for(let Lt=1;Lt<b.nx-1;Lt++){let xt=H*b.nx+Lt;Z[xt]=(b.h[xt]*4+b.h[xt-1]+b.h[xt+1]+b.h[xt-b.nx]+b.h[xt+b.nx])/8}b.h.set(Z)}let U=new Float32Array(b.nx*b.nz).fill(1e9),Y=new Float32Array(b.nx*b.nz),Q=new Float32Array(b.nx*b.nz),W=(V,Z)=>b.h[Z*b.nx+V],lt=(V,Z)=>{let H=Math.round((V-b.x0)/b.cell),Lt=Math.round((Z-b.z0)/b.cell);return W(Math.max(0,Math.min(b.nx-1,H)),Math.max(0,Math.min(b.nz-1,Lt)))},ot=[[0,h],[2540,2690],[d-80,n.lengthM+45]],wt=[];for(let[V,Z]of ot)for(let H=V;H<=Z;H+=2){let Lt=L(H);wt.push([Lt[0],Lt[1],lt(Lt[0],Lt[1])])}for(let V=0;V<4;V++)for(let Z=1;Z<wt.length-1;Z++)wt[Z][2]=(wt[Z-1][2]+wt[Z][2]*2+wt[Z+1][2])/4;let pt=Ve/2+7;for(let[V,Z,H]of wt){let Lt=Math.floor((V-pt-b.x0)/b.cell),xt=Math.ceil((V+pt-b.x0)/b.cell),bt=Math.floor((Z-pt-b.z0)/b.cell),Bt=Math.ceil((Z+pt-b.z0)/b.cell);for(let K=Math.max(0,bt);K<=Math.min(b.nz-1,Bt);K++)for(let Ot=Math.max(0,Lt);Ot<=Math.min(b.nx-1,xt);Ot++){let z=Math.hypot(b.x0+Ot*b.cell-V,b.z0+K*b.cell-Z);if(z>pt)continue;let k=K*b.nx+Ot,mt=(1-z/pt)**2;Y[k]+=mt,Q[k]+=mt*H,z<U[k]&&(U[k]=z)}}for(let V=0;V<U.length;V++)if(U[V]<pt&&Y[V]>0){let Z=1-Hi(Ve/2+.5,pt,U[V]);b.h[V]=b.h[V]*(1-Z)+Q[V]/Y[V]*Z}b.pathSamples=wt}let D=O.filter(U=>U.kind==="water").sort((U,Y)=>Y.pts.length-U.pts.length)[0];function B(U,Y){let Q=(U-b.x0)/b.cell,W=(Y-b.z0)/b.cell,lt=Math.max(0,Math.min(b.nx-2,Math.floor(Q))),ot=Math.max(0,Math.min(b.nz-2,Math.floor(W))),wt=Math.max(0,Math.min(1,Q-lt)),pt=Math.max(0,Math.min(1,W-ot)),V=b.h[ot*b.nx+lt],Z=b.h[ot*b.nx+lt+1],H=b.h[(ot+1)*b.nx+lt],Lt=b.h[(ot+1)*b.nx+lt+1];return wt+pt<=1?V+(Z-V)*wt+(H-V)*pt:Lt+(H-Lt)*(1-wt)+(Z-Lt)*(1-pt)}let F=new $;function q(U,Y,Q={}){let W=E(U,Y),lt=Math.max(0,U-4),ot=lt+8,wt=E(lt,Y),pt=E(ot,Y),V=pt.x-wt.x,Z=pt.z-wt.z,H=Math.hypot(V,Z)||1;return V/=H,Z/=H,Q.x=W.x,Q.z=W.z,Q.y=B(W.x,W.z)+Pa,Q.tx=V,Q.tz=Z,Q.rx=-Z,Q.rz=V,Q.slope=(B(pt.x,pt.z)-B(wt.x,wt.z))/Math.max(1,H),Q.div=W.div,Q.divInfo=W.divInfo,Q}function st(U,Y=25){let Q=Math.max(0,U-Y),W=L(Q),lt=L(Q+2*Y),ot=Math.hypot(lt[0]-W[0],lt[1]-W[1])||1;return F.set((lt[0]-W[0])/ot,0,(lt[1]-W[1])/ot).clone()}let P=[{from:0,to:h,lift:0},{from:2540,to:2690,lift:.02},{from:d-80,to:n.lengthM+45,lift:.035}],ft=n.lengthM;return{P:i,raw:o,rawExt:a,baseXZ:L,LAP1_END_DRAW:h,xzAt:E,sample:q,heading:st,heightAt:B,terrain:b,ribbons:P,finishM:ft,lake:D,flat:O,geoOf:U=>U>=c&&U<=d?p(U):U,diversions:S,setPlan:_,LAP1_END:l,MAP_FROM:c,MAP_TO:d}}function On(n){let t=[1e9,1e9,-1e9,-1e9];for(let e of n)t[0]=Math.min(t[0],e[0]),t[1]=Math.min(t[1],e[1]),t[2]=Math.max(t[2],e[0]),t[3]=Math.max(t[3],e[1]);return t}function nr(n,t,e){let i=!1;for(let s=0,r=n.length-1;s<n.length;r=s++){let[o,a]=n[s],[l,h]=n[r];a>e!=h>e&&t<(l-o)*(e-a)/(h-a)+o&&(i=!i)}return i}function Wr(n,t,e){let i=1e9;for(let s=0,r=n.length-1;s<n.length;r=s++){let[o,a]=n[r],[l,h]=n[s],u=l-o,g=h-a,f=u*u+g*g||1,c=Math.max(0,Math.min(1,((t-o)*u+(e-a)*g)/f));i=Math.min(i,Math.hypot(t-o-u*c,e-a-g*c))}return nr(n,t,e)?-i:i}function Qe(n,t=!1){let e=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},o={},a=n[0].morphTargetsRelative,l=new Ue,h=0;for(let u=0;u<n.length;++u){let g=n[u],f=0;if(e!==(g.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let c in g.attributes){if(!i.has(c))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+c+'" attribute exists among all geometries, or in none of them.'),null;r[c]===void 0&&(r[c]=[]),r[c].push(g.attributes[c]),f++}if(f!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==g.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let c in g.morphAttributes){if(!s.has(c))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[c]===void 0&&(o[c]=[]),o[c].push(g.morphAttributes[c])}if(t){let c;if(e)c=g.index.count;else if(g.attributes.position!==void 0)c=g.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(h,c,u),h+=c}}if(e){let u=0,g=[];for(let f=0;f<n.length;++f){let c=n[f].index;for(let d=0;d<c.count;++d)g.push(c.getX(d)+u);u+=n[f].attributes.position.count}l.setIndex(g)}for(let u in r){let g=bu(r[u]);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,g)}for(let u in o){let g=o[u][0].length;if(g===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let f=0;f<g;++f){let c=[];for(let M=0;M<o[u].length;++M)c.push(o[u][M][f]);let d=bu(c);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(d)}}return l}function bu(n){let t,e,i,s=-1,r=0;for(let h=0;h<n.length;++h){let u=n[h];if(t===void 0&&(t=u.array.constructor),t!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=u.itemSize),e!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=u.normalized),i!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*e}let o=new t(r),a=new $e(o,e,i),l=0;for(let h=0;h<n.length;++h){let u=n[h];if(u.isInterleavedBufferAttribute){let g=l/e;for(let f=0,c=u.count;f<c;f++)for(let d=0;d<e;d++){let M=u.getComponent(f,d);a.setComponent(f+g,d,M)}}else o.set(u.array,l);l+=u.count*e}return s!==void 0&&(a.gpuType=s),a}var Xr=new $;function Fn(n,t,e,i,s,r){let o=2*Math.PI*s/4,a=Math.max(r-2*s,0),l=Math.PI/4;Xr.copy(t),Xr[i]=0,Xr.normalize();let h=.5*o/(o+a),u=1-Xr.angleTo(n)/l;return Math.sign(Xr[e])===1?u*h:a/(o+a)+h+h*(1-u)}var be=class extends Te{constructor(t=1,e=1,i=1,s=2,r=.1){if(s=s*2+1,r=Math.min(t/2,e/2,i/2,r),super(1,1,1,s,s,s),s===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let a=new $,l=new $,h=new $(t,e,i).divideScalar(2).subScalar(r),u=this.attributes.position.array,g=this.attributes.normal.array,f=this.attributes.uv.array,c=u.length/6,d=new $,M=.5/s;for(let m=0,p=0;m<u.length;m+=3,p+=2)switch(a.fromArray(u,m),l.copy(a),l.x-=Math.sign(l.x)*M,l.y-=Math.sign(l.y)*M,l.z-=Math.sign(l.z)*M,l.normalize(),u[m+0]=h.x*Math.sign(a.x)+l.x*r,u[m+1]=h.y*Math.sign(a.y)+l.y*r,u[m+2]=h.z*Math.sign(a.z)+l.z*r,g[m+0]=l.x,g[m+1]=l.y,g[m+2]=l.z,Math.floor(m/c)){case 0:d.set(1,0,0),f[p+0]=Fn(d,l,"z","y",r,i),f[p+1]=1-Fn(d,l,"y","z",r,e);break;case 1:d.set(-1,0,0),f[p+0]=1-Fn(d,l,"z","y",r,i),f[p+1]=1-Fn(d,l,"y","z",r,e);break;case 2:d.set(0,1,0),f[p+0]=1-Fn(d,l,"x","z",r,t),f[p+1]=Fn(d,l,"z","x",r,i);break;case 3:d.set(0,-1,0),f[p+0]=1-Fn(d,l,"x","z",r,t),f[p+1]=1-Fn(d,l,"z","x",r,i);break;case 4:d.set(0,0,1),f[p+0]=1-Fn(d,l,"x","y",r,t),f[p+1]=1-Fn(d,l,"y","x",r,e);break;case 5:d.set(0,0,-1),f[p+0]=Fn(d,l,"x","y",r,t),f[p+1]=1-Fn(d,l,"y","x",r,e);break}}};var $i=null;function Zx(){if($i)return $i;let n=[118,172,228,255],t=new Uint8Array(n.length*4);return n.forEach((e,i)=>t.set([e,e,e,255],i*4)),$i=new Ur(t,n.length,1,Ln),$i.minFilter=$i.magFilter=Sn,$i.generateMipmaps=!1,$i.needsUpdate=!0,$i}var qr=new Map;function gt(n,t={}){let e=!t.map&&(typeof n=="number"||typeof n=="string")?`${n}|${JSON.stringify(t)}`:null;if(e&&!t.map&&qr.has(e))return qr.get(e);let i=new ba({color:new oe(n??16777215),gradientMap:Zx(),...t});return e&&!t.map&&qr.set(e,i),i}function Su(){for(let n of qr.values())n.dispose();qr.clear(),Yr.forEach(n=>n.dispose()),Yr.clear()}var hh={uRes:{value:new zt(1920,1080)}},Yr=new Map;function Jx(n=3,t=1709088,e=14){let i=`${n}|${t}|${e}`;if(Yr.has(i))return Yr.get(i);let s=new wn({uniforms:{...rh.clone(Zt.fog),uRes:hh.uRes,uWidth:{value:n},uRef:{value:e},uColor:{value:new oe(t)}},vertexShader:`
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
      }`,side:un,fog:!0});return Yr.set(i,s),s}function dh(n){if(n.getAttribute("onormal"))return n;n.getAttribute("normal")||n.computeVertexNormals();let t=n.getAttribute("position"),e=n.getAttribute("normal"),i=new Map,s=a=>`${Math.round(t.getX(a)*1e3)},${Math.round(t.getY(a)*1e3)},${Math.round(t.getZ(a)*1e3)}`,r=[];for(let a=0;a<t.count;a++){let l=s(a),h=i.get(l);h||(h=[0,0,0],i.set(l,h)),h[0]+=e.getX(a),h[1]+=e.getY(a),h[2]+=e.getZ(a),r.push(h)}let o=new Float32Array(t.count*3);for(let a=0;a<t.count;a++){let l=r[a],h=Math.hypot(l[0],l[1],l[2])||1;o[a*3]=l[0]/h,o[a*3+1]=l[1]/h,o[a*3+2]=l[2]/h}return n.setAttribute("onormal",new $e(o,3)),n}function Jn(n,t=3,e,i){dh(n.geometry);let s=Jx(t,e,i),r;return n.isInstancedMesh?(r=new en(n.geometry,s,n.count),r.instanceMatrix=n.instanceMatrix,r.count=n.count,n.frustumCulled&&n.boundingSphere?(r.boundingSphere=n.boundingSphere,r.frustumCulled=!0):(r.frustumCulled=!1,n.frustumCulled=!1),n.userData.outline=r):(r=new Ne(n.geometry,s),r.frustumCulled=n.frustumCulled),r.castShadow=!1,r.receiveShadow=!1,r.userData.isOutline=!0,r.renderOrder=n.renderOrder,n.add(r),r}function _e(n,t,{cast:e=!0,receive:i=!0,ol:s=0,olColor:r,olRef:o}={}){let a=new Ne(n,t);return a.castShadow=e,a.receiveShadow=i,s&&Jn(a,s,r,o),a}function on(n,t,e,{repeat:i=!1,srgb:s=!0,aniso:r=8}={}){let o=document.createElement("canvas");o.width=n,o.height=t;let a=o.getContext("2d");e(a,n,t);let l=new js(o);return s&&(l.colorSpace=hn),i&&(l.wrapS=l.wrapT=as),l.anisotropy=r,l}var uh='"Lilita One", "Arial Black", "Arial Rounded MT Bold", Impact, sans-serif',ie=Rn(20240817);function Rn(n){return()=>{n|=0,n=n+1831565813|0;let t=Math.imul(n^n>>>15,1|n);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function Kn(n,t,e,i){let s=on(n,t,e);return document.fonts&&document.fonts.load&&document.fonts.load('64px "Lilita One"').then(()=>{let r=s.image.getContext("2d");r.clearRect(0,0,n,t),e(r,n,t),s.needsUpdate=!0}).catch(()=>{}),i?.push(s),s}function an(n,t,e,i,s,r="#fff",o="#1a1420",a=.16,l="center"){n.font=`${s}px ${uh}`,n.textAlign=l,n.textBaseline="middle",n.lineJoin="round",n.lineWidth=s*a,n.strokeStyle=o,n.strokeText(t,e,i),n.fillStyle=r,n.fillText(t,e,i)}function Eu(n,t,e){let{course:i,park:s,hasFunfair:r}=e,o=[],a=new fe;n.add(a);let l=C=>(a.add(C),C),h=t.terrain,u=(h.nx-1)*h.cell,g=(h.nz-1)*h.cell,f=new Map,c=6,d=(C,G)=>`${Math.floor(C/c)},${Math.floor(G/c)}`,M=(C,G,j)=>{let rt=d(C,G),vt=f.get(rt);vt||f.set(rt,vt=[]),vt.push([C,G,j])},m=(C,G,j)=>{let rt=Math.floor(C/c),vt=Math.floor(G/c),et=Math.ceil((j+30)/c);for(let St=-et;St<=et;St++)for(let Vt=-et;Vt<=et;Vt++){let kt=f.get(`${rt+St},${vt+Vt}`);if(kt){for(let[tt,Mt,At]of kt)if((tt-C)**2+(Mt-G)**2<(At+j)**2)return!1}}return!0},p=[];for(let C of t.ribbons)for(let G=C.from;G<=C.to;G+=3){let j=t.baseXZ(G);p.push(j),M(j[0],j[1],Ve/2+1.5)}for(let C in t.diversions)for(let G of t.diversions[C])for(let j of G.path)M(j[0],j[1],4);let S=s.features.filter(C=>C.kind==="park").sort((C,G)=>G.pts.length-C.pts.length)[0].pts,_=(C,G)=>nr(S,C,G),L=s.features.filter(C=>C.closed&&["water","track","tennis","pitch","playground","building"].includes(C.kind)).map(C=>[On(C.pts),C]),E=(C,G,j=2)=>L.some(([rt,vt])=>C>rt[0]-j&&C<rt[2]+j&&G>rt[1]-j&&G<rt[3]+j&&Wr(vt.pts,C,G)<j),T=1.7,R=[];function x(C,G){R.push({im:C,list:G})}let y=new Ee().makeScale(0,0,0);function b(C){for(let{im:G,list:j}of R){let rt=!1;j.forEach((vt,et)=>{!vt.cleared&&C(vt.x,vt.z)&&(vt.cleared=!0,G.setMatrixAt(et,y),rt=!0)}),rt&&(G.instanceMatrix.needsUpdate=!0)}}function A(){let C=w.image.getContext("2d");I(C,w.image.width,w.image.height),w.needsUpdate=!0}let w=on(Math.round(u*T),Math.round(g*T),(C,G,j)=>I(C,G,j),{aniso:8});o.push(w);function I(C,G,j){let rt=tt=>(tt-h.x0)*T,vt=tt=>(tt-h.z0)*T,et=(tt,Mt=!0)=>{C.beginPath(),tt.forEach((At,jt)=>jt?C.lineTo(rt(At[0]),vt(At[1])):C.moveTo(rt(At[0]),vt(At[1]))),Mt&&C.closePath()};C.fillStyle="#d8d2c2",C.fillRect(0,0,G,j);for(let tt=0;tt<9e3;tt++)C.fillStyle=ie()<.5?"#cfc8b6":"#e2dccd",C.fillRect(ie()*G,ie()*j,3,3);et(S),C.fillStyle="#66cf45",C.fill(),C.save(),et(S),C.clip(),C.translate(G/2,j/2),C.rotate(-.62);for(let tt=-2e3;tt<2e3;tt+=2*14*T)C.fillStyle="rgba(255,255,140,0.10)",C.fillRect(tt,-2500,14*T,5e3);C.setTransform(1,0,0,1,0,0);for(let tt=0;tt<26e3;tt++){let Mt=ie()*G,At=ie()*j;C.fillStyle=ie()<.6?"rgba(40,140,40,0.35)":"rgba(190,255,120,0.35)",C.fillRect(Mt,At,2+ie()*2,2+ie()*3)}C.restore();let St=(tt,Mt,At)=>{for(let jt of s.features)jt.kind===tt&&jt.closed&&(et(jt.pts),C.fillStyle=Mt,C.fill(),At&&(C.strokeStyle=At,C.lineWidth=2,C.stroke()))};St("grass","#72d64e"),St("garden","#86dc5c"),St("wood","#3f9e3a"),St("scrub","#5cb544");for(let tt of s.features)if(tt.kind==="pitch"&&tt.closed){C.save(),et(tt.pts),C.clip(),C.fillStyle="#5ccc3f",C.fill();let Mt=On(tt.pts);for(let At=Mt[0];At<Mt[2];At+=8)C.fillStyle="rgba(255,255,255,0.10)",C.fillRect(rt(At),vt(Mt[1]),4*T,(Mt[3]-Mt[1])*T);C.restore(),et(tt.pts),C.strokeStyle="#ffffff",C.lineWidth=2.2,C.stroke()}for(let tt of s.features)if(tt.kind==="playground"&&tt.closed){et(tt.pts),C.fillStyle="#7fcfb4",C.fill(),C.save(),et(tt.pts),C.clip();let Mt=On(tt.pts);for(let At=0;At<260;At++)C.fillStyle=ie()<.5?"rgba(20,80,70,0.18)":"rgba(255,255,255,0.22)",C.fillRect(rt(Mt[0]+ie()*(Mt[2]-Mt[0])),vt(Mt[1]+ie()*(Mt[3]-Mt[1])),3,3);for(let At=0;At<(Mt[2]-Mt[0])*(Mt[3]-Mt[1])/400;At++)C.beginPath(),C.arc(rt(Mt[0]+ie()*(Mt[2]-Mt[0])),vt(Mt[1]+ie()*(Mt[3]-Mt[1])),1.6*T,0,7),C.fillStyle=["#ffd93b","#57c7ff","#ff6f91"][At%3],C.fill();C.restore(),et(tt.pts),C.strokeStyle="#ffffff",C.lineWidth=.8*T,C.stroke()}let Vt=tt=>{let Mt=0;for(let At=0,jt=tt.pts.length-1;At<tt.pts.length;jt=At++)Mt+=(tt.pts[jt][0]+tt.pts[At][0])*(tt.pts[jt][1]-tt.pts[At][1]);return Math.abs(Mt/2)};for(let tt of s.features)if(tt.kind==="track"&&tt.closed&&Vt(tt)>5e3){C.save(),et(tt.pts),C.clip(),C.fillStyle="#e2523a",C.fill();let Mt=9*T,At=La(tt.pts),jt=On(tt.pts),ae=jt[2]-jt[0],X=jt[3]-jt[1],ht=Dt=>tt.pts.map(Jt=>[At[0]+(Jt[0]-At[0])*Dt,At[1]+(Jt[1]-At[1])*Dt]),Nt=1-2*9/Math.min(ae,X);for(let Dt=1;Dt<=5;Dt++)et(ht(1-(1-Nt)*(Dt/6))),C.strokeStyle="rgba(255,255,255,0.9)",C.lineWidth=1.6,C.stroke();et(ht(Nt)),C.fillStyle="#5ccc3f",C.fill(),C.strokeStyle="#ffffff",C.lineWidth=3,C.stroke(),C.restore(),et(tt.pts),C.strokeStyle="#ffffff",C.lineWidth=3,C.stroke()}for(let tt of s.features)if(tt.kind==="track"&&tt.closed&&Vt(tt)<=5e3){let Mt=tt.tags?.surface==="sand";if(!tt.tags?.surface)continue;et(tt.pts),C.fillStyle=Mt?"#f2d58f":"#e2523a",C.fill(),C.strokeStyle="#ffffff",C.lineWidth=1.5,C.stroke()}for(let tt of s.features)if(tt.kind==="tennis"&&tt.closed){et(tt.pts),C.fillStyle="#3f9fd1",C.fill(),C.strokeStyle="#ffffff",C.lineWidth=2.5,C.stroke();let Mt=La(tt.pts),At=On(tt.pts);C.save(),et(tt.pts),C.clip(),C.strokeStyle="rgba(255,255,255,0.9)",C.lineWidth=1.5,C.beginPath(),C.moveTo(rt(Mt[0]),vt(At[1])),C.lineTo(rt(Mt[0]),vt(At[3])),C.stroke(),C.restore()}for(let tt of s.features)tt.kind==="water"&&tt.closed&&(et(tt.pts),C.strokeStyle="#f4efe0",C.lineWidth=3.4*T,C.lineJoin="round",C.stroke(),C.fillStyle="#2f8fe0",C.fill());for(let tt of s.features)tt.kind==="path"&&(et(tt.pts,!1),C.lineCap="round",C.lineJoin="round",C.strokeStyle="#c9ad78",C.lineWidth=3.6*T,C.stroke());for(let tt of s.features)tt.kind==="path"&&(et(tt.pts,!1),C.strokeStyle="#ecd8a6",C.lineWidth=2.6*T,C.stroke());let kt=tt=>({primary:15,secondary:12,tertiary:11,residential:8,unclassified:8,service:5,trunk:16})[tt.tags?.highway]||7;for(let tt of s.features)tt.kind==="road"&&(et(tt.pts,tt.closed),C.lineCap="round",C.lineJoin="round",C.strokeStyle="#ece6d6",C.lineWidth=(kt(tt)+4)*T,C.stroke());for(let tt of s.features)tt.kind==="road"&&(et(tt.pts,tt.closed),C.strokeStyle="#7f8597",C.lineWidth=kt(tt)*T,C.stroke());for(let tt of s.features)tt.kind==="road"&&kt(tt)>=11&&(et(tt.pts,!1),C.setLineDash([5*T,5*T]),C.strokeStyle="#f4f1e6",C.lineWidth=.5*T,C.stroke(),C.setLineDash([]));for(let tt of s.features)tt.kind==="rail"&&(et(tt.pts,!1),C.strokeStyle="#9b8f84",C.lineWidth=5*T,C.stroke());for(let tt of s.features)tt.kind==="rail"&&(et(tt.pts,!1),C.setLineDash([1,2]),C.strokeStyle="#5b4f46",C.lineWidth=3*T,C.stroke(),C.setLineDash([]),et(tt.pts,!1),C.strokeStyle="#c9ccd6",C.lineWidth=.8,C.stroke());for(let tt of s.features)tt.kind==="building"&&tt.closed&&(et(tt.pts),C.fillStyle="#9c968a",C.fill());for(let tt in t.diversions)for(let Mt of t.diversions[tt])C.beginPath(),Mt.path.forEach((At,jt)=>jt?C.lineTo(rt(At[0]),vt(At[1])):C.moveTo(rt(At[0]),vt(At[1]))),C.lineCap="round",C.lineJoin="round",C.strokeStyle="rgba(196,160,96,0.85)",C.lineWidth=4*T,C.stroke(),C.setLineDash([2*T,3*T]),C.strokeStyle="rgba(255,240,200,0.8)",C.lineWidth=.6*T,C.stroke(),C.setLineDash([])}{let C=h.nx*h.nz,G=new Float32Array(C*3),j=new Float32Array(C*2);for(let At=0;At<h.nz;At++)for(let jt=0;jt<h.nx;jt++){let ae=At*h.nx+jt;G[ae*3]=h.x0+jt*h.cell,G[ae*3+1]=h.h[ae],G[ae*3+2]=h.z0+At*h.cell,j[ae*2]=jt/(h.nx-1),j[ae*2+1]=1-At/(h.nz-1)}let rt=new Uint32Array((h.nx-1)*(h.nz-1)*6),vt=0;for(let At=0;At<h.nz-1;At++)for(let jt=0;jt<h.nx-1;jt++){let ae=At*h.nx+jt,X=ae+1,ht=ae+h.nx,Nt=ht+1;rt[vt++]=ae,rt[vt++]=ht,rt[vt++]=X,rt[vt++]=X,rt[vt++]=ht,rt[vt++]=Nt}let et=new Ue;et.setAttribute("position",new $e(G,3)),et.setAttribute("uv",new $e(j,2)),et.setIndex(new $e(rt,1)),et.computeVertexNormals();let St=gt(16777215,{map:w}),Vt=on(256,256,(At,jt,ae)=>{At.fillStyle="#808080",At.fillRect(0,0,jt,ae);for(let X=0;X<1800;X++){let ht=100+Math.floor(ie()*70);At.fillStyle=`rgb(${ht},${ht},${ht})`;let Nt=ie()*jt,Dt=ie()*ae;At.fillRect(Nt,Dt,2,3+ie()*5)}for(let X=0;X<500;X++)At.fillStyle="rgba(255,255,255,0.18)",At.fillRect(ie()*jt,ie()*ae,2,2)},{repeat:!0,srgb:!1});o.push(Vt),St.onBeforeCompile=At=>{At.uniforms.uDetail={value:Vt},At.vertexShader=At.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vWPos;`).replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
vWPos = (modelMatrix * vec4(transformed, 1.0)).xyz;`),At.fragmentShader=At.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vWPos; uniform sampler2D uDetail;`).replace("#include <map_fragment>",`#include <map_fragment>
          float dd = length(vWPos - cameraPosition);
          float d1 = texture2D(uDetail, vWPos.xz / 3.0).r, d2 = texture2D(uDetail, vWPos.xz / 11.0).r;
          float fade = 1.0 - smoothstep(25.0, 140.0, dd);
          diffuseColor.rgb *= mix(1.0, 0.8 + 0.4 * mix(d2, d1, fade), 0.55);`)},St.customProgramCacheKey=()=>"terrain-detail";let kt=_e(et,St,{cast:!1});kt.name="terrain",l(kt);let tt=new Ne(new va(700,5200,48,1),gt(13227680));tt.rotation.x=-Math.PI/2,tt.position.set(h.x0+u/2,-2,h.z0+g/2),tt.receiveShadow=!1,l(tt);let Mt=new Ne(new fn(u+1800,g+1800),gt(13686197));Mt.rotation.x=-Math.PI/2,Mt.position.set(h.x0+u/2,-3,h.z0+g/2),l(Mt)}let O=on(256,256,(C,G,j)=>{C.fillStyle="#7f8fb0",C.fillRect(0,0,G,j);for(let rt=0;rt<1600;rt++)C.fillStyle=ie()<.5?"rgba(255,255,255,0.07)":"rgba(30,40,70,0.08)",C.fillRect(ie()*G,ie()*j,2,2);C.fillStyle="#6b7a9b",C.fillRect(0,0,G*.035,j),C.fillRect(G*.965,0,G*.035,j),C.fillStyle="#ffffff",C.fillRect(G*.06,0,G*.045,j),C.fillRect(G*.895,0,G*.045,j),C.fillStyle="rgba(255,255,255,0.35)",C.fillRect(G*.49,0,G*.02,j*.5)},{repeat:!0});o.push(O);{let C=[];for(let et of t.ribbons)C.push(D(et));let G=Qe(C),j=_e(G,gt(16777215,{map:O}),{cast:!1});j.name="path",l(j);let rt=Qe(t.ribbons.map(et=>D(et,!0))),vt=_e(rt,gt(5924226),{cast:!1});l(vt)}function D(C,G=!1){let j=[];for(let tt=C.from;tt<=C.to+.01;tt+=2)j.push(t.baseXZ(tt));let rt=[],vt=[],et=[],St=0;for(let tt=0;tt<j.length;tt++){let Mt=j[Math.max(0,tt-1)],At=j[Math.min(j.length-1,tt+1)],jt=At[0]-Mt[0],ae=At[1]-Mt[1],X=Math.hypot(jt,ae)||1;jt/=X,ae/=X;let ht=-ae,Nt=jt,Dt=Ve/2,Jt=[j[tt][0]-ht*Dt,j[tt][1]-Nt*Dt],te=[j[tt][0]+ht*Dt,j[tt][1]+Nt*Dt],$t=t.heightAt(j[tt][0],j[tt][1]),Ce=Math.max(t.heightAt(Jt[0],Jt[1]),$t-.05)+Pa+C.lift,N=Math.max(t.heightAt(te[0],te[1]),$t-.05)+Pa+C.lift;G?(rt.push(Jt[0]-ht*.15,Ce-.45,Jt[1]-Nt*.15,Jt[0],Ce,Jt[1],te[0],N,te[1],te[0]+ht*.15,N-.45,te[1]+Nt*.15),vt.push(0,0,0,1,0,1,0,0)):(rt.push(Jt[0],Ce,Jt[1],te[0],N,te[1]),vt.push(0,St/8,1,St/8)),tt&&(St+=2)}let Vt=G?4:2;for(let tt=0;tt<j.length-1;tt++){let Mt=tt*Vt,At=(tt+1)*Vt;G?(et.push(Mt,At,Mt+1,Mt+1,At,At+1),et.push(Mt+2,At+2,Mt+3,Mt+3,At+2,At+3)):et.push(Mt,At,Mt+1,Mt+1,At,At+1)}let kt=new Ue;if(kt.setAttribute("position",new me(rt,3)),kt.setAttribute("uv",new me(vt,2)),kt.setIndex(et),kt.computeVertexNormals(),kt.getAttribute("normal").getY(0)<0&&!G){let tt=kt.index.array;for(let Mt=0;Mt<tt.length;Mt+=3){let At=tt[Mt+1];tt[Mt+1]=tt[Mt+2],tt[Mt+2]=At}kt.computeVertexNormals()}return kt}let B={uTime:{value:0}},F=s.features.filter(C=>C.kind==="water"&&C.closed);for(let C of F){let G=(C._level??Math.min(...C.pts.map(St=>t.heightAt(St[0],St[1]))))+.05,j=new hs(C.pts.map(St=>new zt(St[0],-St[1]))),rt=new _a(j,4);rt.rotateX(-Math.PI/2),rt.translate(0,G,0);let vt=new wn({uniforms:{...B,...Zt.fog},vertexShader:`varying vec3 vW;
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
        }`,fog:!0}),et=new Ne(rt,vt);et.name="water",l(et),o.push(vt),C._waterLevel=G}let q=[];if(t.lake){let C=t.lake,G=On(C.pts),j=[16767291,16735581,5752831,16777215,16748497,8257418],rt=new be(2,.7,3.6,2,.32),vt=new be(1.2,.5,.8,2,.2);for(let et=0,St=0;et<9&&St<300;St++){let Vt=G[0]+ie()*(G[2]-G[0]),kt=G[1]+ie()*(G[3]-G[1]);if(Wr(C.pts,Vt,kt)>-7)continue;let tt=new fe,Mt=_e(rt,gt(j[et%j.length]),{ol:2.5});tt.add(Mt);let At=_e(vt,gt(16777215),{ol:2});At.position.y=.45,tt.add(At);let jt=_e(new ye(.42,12,8),gt(j[(et+2)%j.length]),{ol:2});jt.position.set(0,.9,.7),tt.add(jt),tt.position.set(Vt,(C._waterLevel??0)+.1,kt),tt.rotation.y=ie()*6.28,l(tt),q.push({g:tt,ph:ie()*6.28,x:Vt,z:kt,a:tt.rotation.y}),et++}}{let C=on(128,128,(et,St,Vt)=>{et.fillStyle="#ffffff",et.fillRect(0,0,St,Vt),et.fillStyle="#ffffff",et.fillRect(0,0,14,14),et.fillStyle="#3b4a6b",et.fillRect(34,30,60,58),et.fillStyle="#9ec9ff",et.fillRect(38,34,52,50),et.fillStyle="#ffffff",et.fillRect(62,34,4,50),et.fillRect(38,56,52,4),et.fillStyle="rgba(0,0,0,0.08)",et.fillRect(0,118,St,10)},{repeat:!0});o.push(C);let G={generateTopUV:(et,St,Vt,kt,tt)=>[new zt(.02,.98),new zt(.02,.98),new zt(.02,.98)],generateSideWallUV:(et,St,Vt,kt,tt,Mt)=>{let At=St[Vt*3],jt=St[Vt*3+1],ae=St[Vt*3+2],X=St[kt*3],ht=St[kt*3+1],Nt=St[kt*3+2],Dt=St[tt*3+2],Jt=St[Mt*3+2],te=(Math.abs(jt-ht)<Math.abs(At-X)?At:jt)/4.2,$t=(Math.abs(jt-ht)<Math.abs(At-X)?X:ht)/4.2;return[new zt(te,ae/3.2),new zt($t,Nt/3.2),new zt($t,Dt/3.2),new zt(te,Jt/3.2)]}},j=["#e98a64","#f3d9a6","#d86f5a","#f6efe0","#a8c8e6","#f2b5a0","#c9b6e4","#f4c46a"],rt=["#5d6488","#7a5d6c","#4f6b78"],vt=[];for(let et of s.features){if(et.kind!=="building"||!et.closed||et.pts.length<4)continue;let St=La(et.pts);if(_(St[0],St[1]))continue;let Vt=parseFloat(et.tags?.["building:levels"])||(ie()<.7?3:4),kt=Math.min(30,Vt*3.1),tt=new hs(et.pts.map(Dt=>new zt(Dt[0],-Dt[1]))),Mt;try{Mt=new xa(tt,{depth:kt,bevelEnabled:!1,UVGenerator:G})}catch{continue}Mt.rotateX(-Math.PI/2);let At=Math.min(...et.pts.map(Dt=>t.heightAt(Dt[0],Dt[1])))-1.5;Mt.translate(0,At,0);let jt=Mt.getAttribute("normal"),ae=jt.count,X=new Float32Array(ae*3),ht=new oe(j[Math.floor(ie()*j.length)]).convertSRGBToLinear(),Nt=new oe(rt[Math.floor(ie()*rt.length)]).convertSRGBToLinear();for(let Dt=0;Dt<ae;Dt++){let Jt=jt.getY(Dt)>.5?Nt:ht;X[Dt*3]=Jt.r,X[Dt*3+1]=Jt.g,X[Dt*3+2]=Jt.b}Mt.setAttribute("color",new $e(X,3)),vt.push(Mt.index?Mt.toNonIndexed():Mt)}if(vt.length){let et=Qe(vt),St=_e(et,gt(16777215,{map:C,vertexColors:!0}),{cast:!0,ol:1.6,olRef:60});St.name="buildings",l(St)}}let st=t.sample(t.finishM),P=t.sample(0),ft={start:P,finish:st},Ft=new fe;l(Ft);function U(C,G,j,rt){let vt=new fe,et=Ve/2+1.4,St=.85,Vt=on(256,32,(ae,X,ht)=>{for(let Nt=0;Nt<16;Nt++)ae.fillStyle=Nt%2?j:rt,ae.fillRect(Nt*X/16,0,X/16+1,ht)},{repeat:!1});o.push(Vt);let kt=new Je(et,St,14,40,Math.PI);kt.scale(1,1.25,1);let tt=_e(kt,gt(16777215,{map:Vt}),{ol:3.5});vt.add(tt);let Mt=new he(St*1.4,St*1.6,.8,16);for(let ae of[-1,1]){let X=_e(Mt,gt(rt),{ol:3});X.position.set(ae*et,.3,0),vt.add(X)}let At=Kn(1024,256,(ae,X,ht)=>{ae.fillStyle="#1b1b3a",Ye(ae,0,0,X,ht,60),ae.fill(),ae.fillStyle=j,Ye(ae,12,12,X-24,ht-24,50),ae.fill(),an(ae,"MARKRUN",X/2,ht*.42,150,"#ffffff","#1b1b3a",.18),an(ae,G,X/2,ht*.83,56,"#ffe14d","#1b1b3a",.2)},o),jt=_e(new be(et*1.55,et*.4,.7,3,.25),[gt(rt),gt(rt),gt(rt),gt(rt),gt(16777215,{map:At}),gt(16777215,{map:At})],{ol:3.5});return jt.position.y=et*1.25+St*1.25+et*.2-.15,vt.add(jt),vt.position.set(C.x,C.y-.1,C.z),vt.rotation.y=Math.atan2(-C.rz,C.rx),Ft.add(vt),vt}ft.finishArch=U(st,"FINISH","#ff3d8b","#ffd23f"),U(P,"START","#2e9bff","#ffd23f");let Y=on(256,64,(C,G,j)=>{let vt=G/16;for(let et=0;et<16;et++)for(let St=0;St<4;St++)C.fillStyle=(et+St)%2?"#111":"#fff",C.fillRect(et*vt,St*vt,vt,vt)});o.push(Y);function Q(C,G,j,rt=.03){let vt=new fn(Ve,j);vt.rotateX(-Math.PI/2);let et=new Ne(vt,gt(16777215,{map:G,transparent:!0,alphaTest:.3,polygonOffset:!0,polygonOffsetFactor:-2}));return et.position.set(C.x,C.y+rt,C.z),et.rotation.y=Math.atan2(-C.rz,C.rx),et.receiveShadow=!0,l(et),et}Q(st,Y,2.2,.05);let W=Kn(512,128,(C,G,j)=>{C.fillStyle="#ffffff",C.fillRect(0,0,G,22),an(C,"START",G/2,80,72,"#ffffff","rgba(0,0,0,0)",0)},o);{let C=t.sample(2.5);Q(C,W,3,.05).rotation.y+=Math.PI}let lt=new De;function ot(C,G,j,{ol:rt=0,olRef:vt,cast:et=!0,colors:St,chunk:Vt=0}={}){if(!j.length)return null;if(Vt){let tt=new Map;j.forEach((At,jt)=>{let ae=`${Math.floor(At.x/Vt)},${Math.floor(At.z/Vt)}`,X=tt.get(ae);X||tt.set(ae,X={l:[],c:[]}),X.l.push(At),St&&X.c.push(St[jt])});let Mt=null;for(let{l:At,c:jt}of tt.values()){let ae=ot(C,G,At,{ol:rt,olRef:vt,cast:et,colors:St?jt:null});Mt=Mt||ae}return Mt}let kt=new en(C,G,j.length);return j.forEach((tt,Mt)=>{lt.position.set(tt.x,tt.y,tt.z),lt.rotation.set(tt.rx||0,tt.ry||0,tt.rz||0),lt.scale.set(tt.sx??tt.s??1,tt.sy??tt.s??1,tt.sz??tt.s??1),lt.updateMatrix(),kt.setMatrixAt(Mt,lt.matrix),St&&kt.setColorAt(Mt,new oe(St[Mt]))}),kt.castShadow=et,kt.receiveShadow=!0,kt.computeBoundingSphere(),rt&&Jn(kt,rt,void 0,vt),x(kt,j),l(kt),kt}let wt=[];{let C=j=>{let rt=t.rawExt(j-12),vt=t.rawExt(j),et=t.rawExt(j+12),St=Math.atan2(vt[1]-rt[1],vt[0]-rt[0]),kt=Math.atan2(et[1]-vt[1],et[0]-vt[0])-St;for(;kt>Math.PI;)kt-=2*Math.PI;for(;kt<-Math.PI;)kt+=2*Math.PI;return kt},G=[[20,t.LAP1_END_DRAW-20],[t.MAP_TO-40,t.finishM-10]];for(let[j,rt]of G){let vt=null;for(let et=j;et<rt;et+=4){let St=C(et);Math.abs(St)>.45?(!vt||Math.abs(St)>Math.abs(vt.d))&&(vt={m:et,d:St}):vt&&(wt.some(Vt=>Math.abs(Vt.m-vt.m)<50)||wt.push(vt),vt=null)}}}let pt=[],V=[],Z=[],H=[];for(let C of wt){let G=C.d>0;for(let j=-2;j<=2;j++){let rt=t.sample(C.m+j*5),vt=G?-1:1,et=Ve/2+1.6,St=rt.x+rt.rx*et*vt,Vt=rt.z+rt.rz*et*vt;m(St,Vt,.3),(G?V:pt).push({x:St,y:t.heightAt(St,Vt),z:Vt,ry:Math.atan2(-rt.tz,rt.tx)+(vt>0?Math.PI:0)})}for(let j=-3;j<=3;j++){let rt=t.sample(C.m+j*3.5),vt=G?1:-1,et=Ve/2+.7;Z.push({x:rt.x+rt.rx*et*vt,y:t.heightAt(rt.x+rt.rx*et*vt,rt.z+rt.rz*et*vt),z:rt.z+rt.rz*et*vt,ry:ie()*6});for(let St=0;St<2;St++){let Vt=t.sample(C.m+j*3.5+St*1.75),kt=Ve/2+.1;H.push({x:Vt.x+Vt.rx*kt*vt,y:Vt.y-.05,z:Vt.z+Vt.rz*kt*vt,ry:Math.atan2(Vt.tx,Vt.tz),red:(j*2+St)%2===0})}}}ft.corners=wt;{let C=on(256,96,(kt,tt,Mt)=>{kt.fillStyle="#2f6fe0",kt.fillRect(0,0,tt,Mt),kt.fillStyle="#ffffff";for(let At=0;At<4;At++){let jt=18+At*60;kt.beginPath(),kt.moveTo(jt,12),kt.lineTo(jt+26,12),kt.lineTo(jt+54,Mt/2),kt.lineTo(jt+26,Mt-12),kt.lineTo(jt,Mt-12),kt.lineTo(jt+28,Mt/2),kt.closePath(),kt.fill()}kt.strokeStyle="#1b3f8f",kt.lineWidth=8,kt.strokeRect(0,0,tt,Mt)}),G=C.clone();G.repeat.x=-1,G.offset.x=1,G.wrapS=as,G.needsUpdate=!0,o.push(C,G);let rt=(kt=>{let tt=new Te(3.2,1.2,.12);tt.rotateX(-.32),tt.translate(0,.62,.22);let Mt=new Te(3.2,1.2,.12);return Mt.rotateX(.32),Mt.translate(0,.62,-.22),Mt.rotateY(Math.PI),Qe([tt,Mt])})();dh(rt),ot(rt,gt(16777215,{map:C}),V,{ol:2.5}),ot(rt,gt(16777215,{map:G}),pt,{ol:2.5});let vt=on(16,64,(kt,tt,Mt)=>{for(let At=0;At<4;At++)kt.fillStyle=At%2?"#ffffff":"#ff6a2b",kt.fillRect(0,At*Mt/4,tt,Mt/4)});o.push(vt);let et=new he(.06,.32,.9,12,1);et.translate(0,.5,0);let St=new Te(.8,.08,.8);St.translate(0,.04,0),ot(et,gt(16777215,{map:vt}),Z,{ol:2}),ot(St,gt(16738859),Z,{ol:1.5});let Vt=new Te(.5,.22,1.75);Vt.translate(0,.11,0),ot(Vt,gt(16777215),H.map(kt=>kt),{ol:1.5,colors:H.map(kt=>kt.red?15216959:16777215)})}let Lt=new fe;l(Lt);function xt(C,G,j,rt,vt,{postH:et=1.6,face:St=0,scale:Vt=1}={}){let kt=Kn(512,Math.round(512*rt/j),vt,o),tt=new fe,Mt=_e(new be(j,rt,.25,2,.08),[gt(5978660),gt(5978660),gt(5978660),gt(5978660),gt(16777215,{map:kt}),gt(16777215,{map:kt})],{ol:3});Mt.position.y=et+rt/2,tt.add(Mt);let At=new Te(.25,et+rt*.5,.25);for(let ht of[-1,1]){let Nt=_e(At,gt(9067062),{ol:2});Nt.position.set(ht*j*.35,(et+rt*.5)/2,-.1),tt.add(Nt)}let jt=Ve/2+2.2+j*.15,ae=C.x+C.rx*jt*G,X=C.z+C.rz*jt*G;return tt.position.set(ae,t.heightAt(ae,X)-.1,X),tt.rotation.y=Math.atan2(-C.tx,-C.tz)+G*.5+St,tt.scale.setScalar(Vt),Lt.add(tt),tt}let bt=1720,Bt=t.sample(bt-10);ft.hillSign=xt(Bt,1,6,3.2,(C,G,j)=>{C.fillStyle="#ffd23f",Ye(C,0,0,G,j,40),C.fill(),C.lineWidth=16,C.strokeStyle="#1b1b3a",Ye(C,8,8,G-16,j-16,34),C.stroke(),C.fillStyle="#3aa845",C.beginPath(),C.moveTo(40,j-40),C.lineTo(150,70),C.lineTo(260,j-40),C.closePath(),C.fill(),C.strokeStyle="#1b1b3a",C.lineWidth=8,C.stroke(),C.fillStyle="#fff",C.beginPath(),C.moveTo(118,118),C.lineTo(150,70),C.lineTo(182,118),C.closePath(),C.fill(),an(C,"THE",380,j*.3,72,"#ffffff","#1b1b3a",.2),an(C,"HILL",370,j*.66,120,"#ff3d8b","#1b1b3a",.16)},{postH:1.4}),ft.hillM=bt;for(let C of[1,2,3,4]){let G=C*1e3,j=t.sample(t.geoOf(G));xt(j,-1,1.6,1.3,(rt,vt,et)=>{rt.fillStyle="#ffffff",Ye(rt,0,0,vt,et,50),rt.fill(),rt.fillStyle="#ff3d8b",Ye(rt,20,20,vt-40,et-40,36),rt.fill(),an(rt,`${C}K`,vt/2,et/2+8,230,"#ffffff","#1b1b3a",.14)},{postH:.7})}let K=t.sample(2475);ft.lapBoard=xt(K,1,4.4,2.6,(C,G,j)=>{C.fillStyle="#1b1b3a",Ye(C,0,0,G,j,40),C.fill(),C.fillStyle="#2e9bff",Ye(C,14,14,G-28,j-28,30),C.fill(),an(C,"LAP",G/2,j*.28,90,"#ffffff","#1b1b3a",.18),an(C,"2 OF 2",G/2,j*.66,150,"#ffe14d","#1b1b3a",.14)},{postH:1.2}),ft.lapM=2500;let Ot=[],z=[],k=[],mt=[];function Rt(C,G,j,rt=3.2,vt=12){let et=null;for(let St=C;St<=G;St+=vt){let Vt=t.sample(St),kt=Ve/2+1,tt=Vt.x+Vt.rx*kt*j,Mt=Vt.z+Vt.rz*kt*j,At=t.heightAt(tt,Mt);z.push({x:tt,y:At,z:Mt});let jt=new $(tt,At+rt,Mt);if(et){let ae=[];for(let X=0;X<=12;X++){let ht=X/12,Nt=et.clone().lerp(jt,ht);Nt.y-=Math.sin(ht*Math.PI)*.6,ae.push(Nt)}k.push(ae);for(let X=1;X<12;X++){let ht=ae[X],Nt=ae[X+1].clone().sub(ae[X-1]);Ot.push({x:ht.x,y:ht.y,z:ht.z,ry:Math.atan2(-Nt.z,Nt.x)})}}et=jt}}function Pt(C,G,j,rt=Ve/2+2.2){for(let vt=C;vt<=G;vt+=2.4){let et=t.sample(vt),St=et.x+et.rx*rt*j,Vt=et.z+et.rz*rt*j;mt.push({x:St,y:t.heightAt(St,Vt),z:Vt,ry:Math.atan2(et.tx,et.tz)})}}let J=t.finishM;Rt(J-70,J+10,1),Rt(J-70,J+10,-1),Rt(-6,50,1),Rt(-6,50,-1),Pt(J-60,J+14,1),Pt(J-60,J+14,-1),Pt(-4,40,1),Pt(-4,40,-1);{let C=new Ue;C.setAttribute("position",new me([-.3,0,0,.3,0,0,0,-.62,0],3)),C.setAttribute("normal",new me([0,0,1,0,0,1,0,0,1],3));let G=Ot.map((tt,Mt)=>[16727435,16765503,3054591,4054148,16747069,16777215][Mt%6]);ot(C,gt(16777215,{side:je}),Ot,{colors:G,cast:!1});let j=new he(.07,.09,3.3,6);j.translate(0,1.65,0),ot(j,gt(16777215),z,{ol:1.5});let rt=new Ue().setFromPoints(k.flatMap(tt=>tt.slice(0,-1).flatMap((Mt,At)=>[Mt,tt[At+1]]))),vt=new Ks(rt,new cs({color:3355443}));l(vt),o.push(rt);let et=[];for(let tt=0;tt<4;tt++){let Mt=new Te(.16,1,.06);Mt.translate(-.9+tt*.6,.5,0),et.push(Mt)}let St=new Te(2.4,.12,.05);St.translate(0,.65,.05),et.push(St);let Vt=St.clone();Vt.translate(0,-.35,0),et.push(Vt);let kt=Qe(et);kt.rotateY(Math.PI/2),ot(kt,gt(16777215),mt,{ol:1.8})}let dt=[],ct=(C,G,j,rt,vt,et=1.35)=>dt.push({m0:C,m1:G,side:j,off:Ve/2+3,depth:rt,density:vt,spacing:et});ct(J-58,J+12,1,6,1),ct(J-58,J+12,-1,6,1),ct(-2,38,1,5,.9),ct(-2,38,-1,5,.9),ct(1940,2010,1,4,.7),ct(1960,2010,-1,3,.6),ct(bt-10,bt+40,-1,3,.55),ct(2440,2490,-1,3,.7),ct(bt-70,bt+10,1,3,.5),ct(bt-70,bt-20,-1,3,.45),ct(2080,2160,1,4,.75),ct(2080,2160,-1,4,.75),ct(800,860,1,3,.6),ct(1250,1310,-1,3,.6),ft.crowdZones=dt;{let C=s.pois.filter(rt=>rt.kind==="bench"&&_(rt.pos[0],rt.pos[1])&&m(rt.pos[0],rt.pos[1],1)).map(rt=>({x:rt.pos[0],y:t.heightAt(rt.pos[0],rt.pos[1]),z:rt.pos[1],ry:ie()*6})),G=Qe([new Te(1.8,.12,.5).translate(0,.5,0),new Te(1.8,.4,.1).translate(0,.8,-.22),new Te(.1,.5,.45).translate(-.8,.25,0),new Te(.1,.5,.45).translate(.8,.25,0)]);ot(G,gt(11892031),C,{ol:1.5});let j=s.pois.filter(rt=>rt.kind==="cafe"&&_(rt.pos[0],rt.pos[1])&&m(rt.pos[0],rt.pos[1],4));for(let rt of j){let vt=new fe;vt.add(_e(new be(5,3,4,2,.2),gt(16774108),{ol:2.5})).position.y=1.5;let et=on(128,16,(kt,tt,Mt)=>{for(let At=0;At<8;At++)kt.fillStyle=At%2?"#fff":"#ff4f6d",kt.fillRect(At*16,0,16,Mt)});o.push(et);let St=_e(new Te(5.6,.2,2),gt(16777215,{map:et}),{ol:2});St.position.set(0,2.9,2.3),St.rotation.x=.35,vt.add(St);let Vt=_e(new qe(4,1.6,4),gt(3054591),{ol:2.5});Vt.position.y=3.8,Vt.rotation.y=Math.PI/4,vt.add(Vt),vt.position.set(rt.pos[0],t.heightAt(rt.pos[0],rt.pos[1]),rt.pos[1]),vt.rotation.y=ie()*6,l(vt),M(rt.pos[0],rt.pos[1],5)}}for(let C of dt)for(let G=C.m0-8;G<=C.m1+8;G+=4){let j=t.sample(G),rt=C.off+C.depth/2;M(j.x+j.rx*rt*C.side,j.z+j.rz*rt*C.side,C.depth/2+3)}for(let C of[P,st])M(C.x,C.z,14);function _t(C,G){let j=null,rt=1e9;for(let vt of p){let et=(vt[0]-C)**2+(vt[1]-G)**2;et<rt&&(rt=et,j=vt)}return j}ft.nearestOnRibbon=_t,ft.ribbonSamples=p;let Et=new Map;for(let C of p){let G=`${Math.floor(C[0]/10)},${Math.floor(C[1]/10)}`,j=Et.get(G);j||Et.set(G,j=[]),j.push(C)}let Ct=(C,G,j=1)=>{let rt=Math.floor(C/10),vt=Math.floor(G/10),et=(Ve/2+j)**2;for(let St=-1;St<=1;St++)for(let Vt=-1;Vt<=1;Vt++)for(let kt of Et.get(`${rt+St},${vt+Vt}`)||[])if((kt[0]-C)**2+(kt[1]-G)**2<et)return!0;return!1};ft.reserve=M,ft.clearOf=m;let It=[],Wt=(C,G,j,rt)=>!m(C,G,2.5*rt)||E(C,G,1.5)?!1:(It.push({x:C,z:G,kind:j,s:rt}),M(C,G,2.2*rt),!0);for(let C of s.pois)C.kind==="tree"&&Wt(C.pos[0],C.pos[1],0,.85+ie()*.35);for(let C of s.features)if(C.kind==="wood"&&C.closed){let G=On(C.pts),j=(G[2]-G[0])*(G[3]-G[1]);for(let rt=0;rt<j/90;rt++){let vt=G[0]+ie()*(G[2]-G[0]),et=G[1]+ie()*(G[3]-G[1]);nr(C.pts,vt,et)&&Wt(vt,et,1,.9+ie()*.5)}}{let C=On(S);for(let G=0;G<2600;G++){let j=C[0]+ie()*(C[2]-C[0]),rt=C[1]+ie()*(C[3]-C[1]);!_(j,rt)||-Wr(S,j,rt)>45&&ie()<.75||Wt(j,rt,ie()<.7?1:2,.8+ie()*.5)}for(let G of s.features)if(G.kind==="road"&&!G.closed)for(let j=1;j<G.pts.length;j++){let rt=G.pts[j-1],vt=G.pts[j],et=Math.hypot(vt[0]-rt[0],vt[1]-rt[1]);for(let St=0;St<et;St+=22){let Vt=St/et,kt=rt[0]+(vt[0]-rt[0])*Vt,tt=rt[1]+(vt[1]-rt[1])*Vt,Mt=-(vt[1]-rt[1])/et,At=(vt[0]-rt[0])/et,jt=8+ie()*2;ie()<.5&&Wt(kt+Mt*jt,tt+At*jt,0,.6+ie()*.2)}}}{let C=[3978315,5031250,3121226,6539594,8376650,3450963],G=new he(.32,.5,4.2,7);G.translate(0,2.1,0);let j=new nn(3.2,1);j.scale(1,1.08,1),j.translate(0,6.6,0);let rt=Qe([new nn(3,1).translate(0,6.2,0),new nn(2.3,0).translate(1.9,5.3,.6),new nn(2.2,0).translate(-1.7,5.5,-.8),new nn(2,0).translate(.2,8.2,.3)].map(wu)),vt=Qe([new qe(3,4.2,8).translate(0,5,0),new qe(2.4,3.6,8).translate(0,7.2,0),new qe(1.6,3,8).translate(0,9.2,0)].map(wu)),et=It.map(kt=>({x:kt.x,y:t.heightAt(kt.x,kt.z)-.2,z:kt.z,ry:ie()*6.28,s:kt.s}));ot(G,gt(9067062),et,{ol:2,olRef:40,chunk:160});let St=gt(16777215);j.computeVertexNormals(),[j,rt,vt].forEach((kt,tt)=>{let Mt=et.filter((At,jt)=>It[jt].kind===tt);ot(kt,St,Mt,{ol:2.2,olRef:40,colors:Mt.map(()=>C[Math.floor(ie()*C.length)]),chunk:160})}),ft.treeCount=It.length}{let C=Qe([0,1,2,3].map(et=>{let St=new qe(.09,.55,3);return St.translate(0,.27,0),St.rotateZ((et-1.5)*.25),St.rotateY(et*1.7),St.translate((et-1.5)*.08,0,et%2*.06),St.index?St.toNonIndexed():St})),G=Qe([new he(.03,.03,.35,4).translate(0,.17,0).toNonIndexed(),new nn(.13,0).translate(0,.38,0)]),j=[],rt=[],vt=[];for(let et=0;et<9e3;et++){let St=p[Math.floor(ie()*p.length)],Vt=ie()*6.283,kt=Ve/2+1+ie()*22,tt=St[0]+Math.cos(Vt)*kt,Mt=St[1]+Math.sin(Vt)*kt;if(!_(tt,Mt)||E(tt,Mt,.5)||!m(tt,Mt,.2))continue;let At=t.heightAt(tt,Mt)-.03;ie()<.62?j.push({x:tt,y:At,z:Mt,ry:ie()*6,s:.5+ie()*.6}):(rt.push({x:tt,y:At,z:Mt,ry:ie()*6,s:.35+ie()*.25}),vt.push(["#ff5d8f","#ffd93b","#ffffff","#b06bff","#ff8a3d","#57c7ff"][Math.floor(ie()*6)]))}ot(C,gt(5226296),j,{cast:!1,chunk:120}),ot(G,gt(16777215),rt,{cast:!1,colors:vt,chunk:120})}let Kt=new wn({side:un,depthWrite:!1,fog:!1,uniforms:{top:{value:new oe(3116287)},mid:{value:new oe(9425919)},bot:{value:new oe(15333631)}},vertexShader:"varying vec3 vP; void main(){ vP = normalize(position); gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.); }",fragmentShader:`uniform vec3 top; uniform vec3 mid; uniform vec3 bot; varying vec3 vP; void main(){ float h=vP.y; vec3 c = h>0.12? mix(mid, top, smoothstep(0.12,0.7,h)) : mix(bot, mid, smoothstep(-0.05,0.12,h)); gl_FragColor=vec4(c,1.);
#include <colorspace_fragment>
}`}),qt=new Ne(new ye(5e3,32,16),Kt);qt.renderOrder=-10,qt.frustumCulled=!1,n.add(qt),o.push(Kt,qt.geometry);let ue=Qe([[0,0,0,14],[13,-3,2,10],[-13,-4,-1,10],[6,6,-2,9],[-6,5,3,8],[22,-6,0,6],[-22,-7,1,6]].map(([C,G,j,rt])=>new nn(rt,2).translate(C,G,j)));ue.scale(1,.7,.8);let re=[h.x0+u/2,h.z0+g/2],Se=[];for(let C=0;C<26;C++){let G=ie()*6.28,j=300+ie()*1300;Se.push({x:re[0]+Math.cos(G)*j,y:170+ie()*120,z:re[1]+Math.sin(G)*j,ry:ie()*6,s:.8+ie()*1.4})}let at=ot(ue,gt(16777215,{emissive:6981808,emissiveIntensity:.35,fog:!1}),Se,{ol:1.5,olRef:300,cast:!1}),Yt=[];for(let C=0;C<18;C++){let G=C/18*6.28+ie()*.2,j=1900+ie()*500;Yt.push({x:re[0]+Math.cos(G)*j,y:-40,z:re[1]+Math.sin(G)*j,sx:320+ie()*260,sy:80+ie()*90,sz:260+ie()*200,ry:ie()*6})}ot(new ye(1,24,12),gt(7128954),Yt,{cast:!1,colors:Yt.map((C,G)=>[8047487,6273413,9425290][G%3])});function Tt(C){B.uTime.value=C;for(let G of q)G.g.position.y=(t.lake?._waterLevel??0)+.1+Math.sin(C*1.7+G.ph)*.08,G.g.rotation.z=Math.sin(C*1.3+G.ph)*.06,G.g.rotation.y=G.a+Math.sin(C*.1+G.ph)*.4;at&&(at.position.x=Math.sin(C*.01)*40)}function Ut(){a.traverse(C=>{C.geometry&&C.geometry.dispose()});for(let C of o)C.dispose?.();n.remove(a),n.remove(qt)}return{group:a,anchors:ft,update:Tt,dispose:Ut,inPark:_,clearOf:m,reserve:M,blocked:E,groundTex:w,onPath:Ct,registerInstanced:x,clearArea:b,redrawGround:A}}function wu(n){let t=n.index?n.toNonIndexed():n;return t.computeVertexNormals(),t}function La(n){let t=0,e=0;for(let i of n)t+=i[0],e+=i[1];return[t/n.length,e/n.length]}function Ye(n,t,e,i,s,r){n.beginPath(),n.moveTo(t+r,e),n.arcTo(t+i,e,t+i,e+s,r),n.arcTo(t+i,e+s,t,e+s,r),n.arcTo(t,e+s,t,e,r),n.arcTo(t,e,t+i,e,r),n.closePath()}var Tu=[16735631,16765503,5752831,8248938,16747069,11566079,5234888,16739179,16777215,9414911],Au=[4054148,16727435,16765503,3054591,16777215];function Kx(){let n=[];for(let i=0;i<=8;i++){let s=i/8,r=s*1.25,o=s<.12?.48+s*1.2:Math.sqrt(Math.max(0,1-Math.pow((s-.12)/.88,2.2)))*.62;n.push(new zt(Math.max(.001,o),r))}n.unshift(new zt(.001,0));let e=new zr(n,12);return e.computeVertexNormals(),e}function fh(n,t){let e=Rn(99),i=t.length,s=new fe;if(n.add(s),!i)return{update(){},hideWhere(){},dispose(){n.remove(s)},group:s};let r=Kx(),o=new ye(.15,8,5);o.scale(.8,1.15,.5);let a=new ye(.075,6,4);a.scale(.85,1.2,.5);let l=new ye(.13,6,5),h=new qe(.14,.36,6);h.translate(0,.18,0);let u=new qe(.26,.55,8);u.translate(0,.27,0);let g=new ye(.2,7,5),f=(F,q,st,P)=>{let ft=new en(F,q,st);return ft.castShadow=!0,ft.receiveShadow=!0,ft.userData.ol=P,s.add(ft),ft},c=f(r,gt(16777215),i,2.6),d=f(o,new Un({color:16777215}),i*2,0),M=f(a,new Un({color:1709088}),i*2,0),m=f(l,gt(16777215),i*2,2);d.castShadow=M.castShadow=!1;let p=[f(h,gt(16777215),i,2),f(u,gt(16777215),i,2),f(g,gt(16777215),i,2)],S=[0,0,0],_=new oe,v=t.map((F,q)=>{let st=F.colour??Tu[Math.floor(e()*Tu.length)];c.setColorAt(q,_.set(st)),m.setColorAt(q*2,_),m.setColorAt(q*2+1,_);let P=e()<.3?-1:Math.floor(e()*3),ft=-1;return P>=0&&(ft=S[P]++,p[P].setColorAt(ft,_.set(Au[Math.floor(e()*Au.length)]))),{...F,s:F.scale??.85+e()*.35,ph:e()*6.28,sp:5+e()*4,tk:P,ti:ft,wave:e()<.5,ex:.3}});p.forEach((F,q)=>{F.count=S[q]});for(let F of[c,m,...p])F.instanceColor&&(F.instanceColor.needsUpdate=!0);let L=new Ee().makeScale(0,0,0),E=new Ee,T=new ri,R=new qn,x=new $,y=new $,b=new Ee,A=new Ee;function w(F,q,st){let P=v[F];if(P.hidden){for(let Q of[c])Q.setMatrixAt(F,L);for(let Q=0;Q<2;Q++)d.setMatrixAt(F*2+Q,L),M.setMatrixAt(F*2+Q,L),m.setMatrixAt(F*2+Q,L);P.tk>=0&&p[P.tk].setMatrixAt(P.ti,L);return}let ft=P.ex,Ft=q*P.sp*(.5+ft*.6)+P.ph,U=Math.max(0,Math.sin(Ft))*.32*ft,Y=1-Math.cos(Ft*2)*.05*ft;R.set(0,P.yaw+Math.sin(q*.8+P.ph)*.25*(1-ft),Math.sin(Ft*.5)*.08*ft),T.setFromEuler(R),b.compose(x.set(P.x,P.y+U,P.z),T,y.set(P.s/Math.sqrt(Y),P.s*Y,P.s/Math.sqrt(Y))),c.setMatrixAt(F,b);for(let Q=0;Q<2;Q++){let W=Q?.19:-.19;A.makeTranslation(W,.86,.5),E.multiplyMatrices(b,A),d.setMatrixAt(F*2+Q,E),A.makeTranslation(W*1.02,.84+(ft>.6?.03:0),.565),E.multiplyMatrices(b,A),M.setMatrixAt(F*2+Q,E);let lt=ft>.55?1:.15+.2*Math.max(0,Math.sin(Ft)),ot=P.wave?Math.sin(Ft*1.5+Q*3)*.25*ft:0,wt=(Q?1:-1)*(.62+lt*.05+ot*.3),pt=.45+lt*.85+ot;A.makeTranslation(wt,pt,.12),E.multiplyMatrices(b,A),m.setMatrixAt(F*2+Q,E)}P.tk>=0&&(A.makeTranslation(0,1.22,0),P.tk===0&&A.multiply(new Ee().makeRotationZ(Math.sin(Ft)*.3)),E.multiplyMatrices(b,A),p[P.tk].setMatrixAt(P.ti,E))}for(let F=0;F<i;F++)w(F,0,!0);let I=()=>{for(let F of[c,d,M,m,...p])F.instanceMatrix.needsUpdate=!0};I();for(let F of[c,d,M,m,...p]){if(!F.count){F.visible=!1;continue}F.computeBoundingSphere(),F.boundingSphere.radius+=2,F.userData.ol&&Jn(F,F.userData.ol,void 0,18)}function O(F,q,st=[],P=null){let ft=!1;for(let Ft=0;Ft<i;Ft++){let U=v[Ft];if(q&&(U.x-q.x)**2+(U.z-q.z)**2>260*260)continue;let Y=.25;if(P!=null)Y=P;else for(let Q of st){let W=(Q.x-U.x)**2+(Q.z-U.z)**2;W<45*45&&(Y=Math.max(Y,1-Math.sqrt(W)/70))}U.ex+=(Y-U.ex)*.05,w(Ft,F),ft=!0}ft&&I()}function D(){for(let F of[r,o,a,l,h,u,g])F.dispose();for(let F of[c,d,M,m,...p])F.dispose();n.remove(s)}function B(F){let q=!1;for(let st=0;st<i;st++)!v[st].hidden&&F(v[st].x,v[st].z)&&(v[st].hidden=!0,w(st,0),q=!0);q&&I()}return{update:O,dispose:D,hideWhere:B,group:s,members:v}}function Ru(n,t,e=5,i=null,s=null){let r=Rn(e),o=[];for(let[a,l]of t.entries())for(let h=l.m0;h<=l.m1;h+=l.spacing??1.35){let u=n.sample(h),g=Math.max(1,Math.round(l.depth/1.25));for(let f=0;f<g;f++){if(r()>l.density)continue;let c=l.off+f*1.25+r()*.35,d=(r()-.5)*.6,M=u.x+u.rx*c*l.side+u.tx*d,m=u.z+u.rz*c*l.side+u.tz*d;i&&i(M,m,1.4)||s&&s(M,m,.6)||o.push({zone:a,x:M,y:n.heightAt(M,m),z:m,yaw:Math.atan2(-u.rx*l.side,-u.rz*l.side)+(r()-.5)*.5})}}return o}var Cu={stocky:{torso:[.9,.76,.58],leg:.66,legR:.16,arm:.66,armR:.14,head:.47,hand:.19,shoe:[.34,.25,.6]},lanky:{torso:[.56,.86,.38],leg:1.06,legR:.095,arm:.9,armR:.085,head:.39,hand:.15,shoe:[.27,.21,.62]},compact:{torso:[.68,.6,.5],leg:.52,legR:.13,arm:.52,armR:.11,head:.5,hand:.17,shoe:[.3,.23,.5]},tall:{torso:[.7,.94,.46],leg:.92,legR:.125,arm:.8,armR:.11,head:.43,hand:.17,shoe:[.31,.24,.6]}},Iu=["#2b1d14","#5a3a1e","#c8642a","#e8c66a","#1d1d24","#a9a9b3","#3a2a1e","#8a5a2b","#ff5fa2"],jx=3.2,Zr=new Map,Qt=(n,t)=>(Zr.has(n)||Zr.set(n,t()),Zr.get(n));function Pu(){for(let n of Zr.values())n.dispose();Zr.clear()}function Qx(n){let t=2166136261;for(let e of n)t^=e.charCodeAt(0),t=Math.imul(t,16777619);return t>>>0}function tv(n,t,e,i,s,r){n.fillStyle=i,n.fillRect(0,0,t,e);let o=t*.25,a=e*.47,l=e*.64,h=t*.058,u="#1a1420";n.fillStyle="rgba(255,90,90,0.28)";for(let m of[-1,1])n.beginPath(),n.ellipse(o+m*h*1.75,l-e*.03,t*.022,e*.03,0,0,7),n.fill();let g=(m,p)=>{if(p==="heart"){n.fillStyle="#ff2d6f",n.strokeStyle=u,n.lineWidth=5,n.beginPath();let E=t*.03;n.moveTo(m,a+E*1.1),n.bezierCurveTo(m-E*2.2,a-E*.2,m-E*.9,a-E*1.9,m,a-E*.6),n.bezierCurveTo(m+E*.9,a-E*1.9,m+E*2.2,a-E*.2,m,a+E*1.1),n.fill(),n.stroke();return}if(p==="closed"||p==="happy"){n.strokeStyle=u,n.lineWidth=9,n.lineCap="round",n.beginPath(),p==="happy"?n.arc(m,a+e*.02,t*.024,Math.PI*1.1,Math.PI*1.9):(n.moveTo(m-t*.025,a),n.lineTo(m+t*.025,a)),n.stroke();return}if(p==="x"){n.strokeStyle=u,n.lineWidth=8,n.lineCap="round";let E=t*.02;n.beginPath(),n.moveTo(m-E,a-E),n.lineTo(m+E,a+E),n.moveTo(m+E,a-E),n.lineTo(m-E,a+E),n.stroke();return}if(p==="wink"&&m>o&&(p="happy"),p==="wink"&&(p="open"),p==="happy"){n.strokeStyle=u,n.lineWidth=9,n.lineCap="round",n.beginPath(),n.arc(m,a+e*.02,t*.024,Math.PI*1.1,Math.PI*1.9),n.stroke();return}let S=p==="wide"?1.3:1,_=t*.03*S,v=e*.085*S;n.fillStyle="#fff",n.strokeStyle=u,n.lineWidth=6,n.beginPath(),n.ellipse(m,a,_,v,0,0,7),n.fill(),n.stroke();let L=p==="wide"?.38:.55;n.fillStyle=u,n.beginPath(),n.ellipse(m+_*.15,a+v*.12,_*L,v*L*1.1,0,0,7),n.fill(),n.fillStyle="#fff",n.beginPath(),n.arc(m+_*.35,a-v*.2,_*.22,0,7),n.fill(),p==="half"&&(n.fillStyle=i,n.fillRect(m-_-4,a-v-4,_*2+8,v*1.05),n.strokeStyle=u,n.lineWidth=7,n.beginPath(),n.moveTo(m-_-2,a-v*.1),n.lineTo(m+_+2,a-v*.1),n.stroke())},f={sleepy:"half",smug:"half",cheeky:"wink","wide-eyed":"wide"}[s]||"open";r==="happy"&&(f="happy"),r==="love"&&(f="heart"),r==="dead"&&(f="x"),r==="effort"&&s!=="goofy"&&(f="open");for(let m of[-1,1])g(o+m*h,f);n.strokeStyle=u,n.lineWidth=10,n.lineCap="round";let c=r==="effort"||s==="determined"||s==="gritted"?.35:r==="sad"||s==="worried"?-.35:s==="smug"||s==="cheeky"?.15:s==="wide-eyed"?-.2:0;for(let m of[-1,1]){let p=o+m*h,S=a-e*.13,_=t*.026,v=p-m*_,L=p+m*_;n.beginPath(),n.moveTo(L,S-c*18),n.lineTo(v,S+c*18),n.stroke()}n.lineWidth=8,n.strokeStyle=u,n.fillStyle="#7a1e2e";let d=o,M=r||"normal";if(M==="happy"||M==="normal"&&s==="grin")n.beginPath(),n.moveTo(d-t*.04,l-e*.02),n.quadraticCurveTo(d,l+e*.12,d+t*.04,l-e*.02),n.closePath(),n.fill(),n.stroke(),n.fillStyle="#fff",n.fillRect(d-t*.03,l-e*.018,t*.06,e*.03),n.fillStyle="#ff7d8f",n.beginPath(),n.ellipse(d,l+e*.06,t*.015,e*.02,0,0,7),n.fill();else if(M==="effort"){n.fillStyle="#fff",n.beginPath(),Ye(n,d-t*.035,l-e*.03,t*.07,e*.065,10),n.fill(),n.stroke(),n.lineWidth=4,n.beginPath(),n.moveTo(d-t*.035,l),n.lineTo(d+t*.035,l);for(let m=-2;m<=2;m++)n.moveTo(d+m*t*.012,l-e*.03),n.lineTo(d+m*t*.012,l+e*.035);n.stroke()}else if(M==="sad"||M==="dead")n.beginPath(),n.moveTo(d-t*.03,l+e*.04),n.quadraticCurveTo(d,l-e*.04,d+t*.03,l+e*.04),n.stroke(),M==="dead"&&(n.fillStyle="#ff7d8f",n.beginPath(),n.ellipse(d+t*.012,l+e*.07,t*.012,e*.04,.2,0,7),n.fill(),n.stroke());else if(M==="love"||M==="pant")n.beginPath(),n.ellipse(d,l+e*.02,t*.022,e*.05,0,0,7),n.fill(),n.stroke();else if(s==="gritted"){n.fillStyle="#fff",n.beginPath(),Ye(n,d-t*.04,l-e*.03,t*.08,e*.06,10),n.fill(),n.stroke(),n.lineWidth=4,n.beginPath(),n.moveTo(d-t*.04,l),n.lineTo(d+t*.04,l);for(let m=-2;m<=2;m++)n.moveTo(d+m*t*.014,l-e*.03),n.lineTo(d+m*t*.014,l+e*.03);n.stroke()}else if(s==="tongue-out")n.beginPath(),n.moveTo(d-t*.035,l),n.quadraticCurveTo(d,l+e*.05,d+t*.035,l),n.stroke(),n.fillStyle="#ff6f8a",n.beginPath(),n.ellipse(d+t*.008,l+e*.06,t*.016,e*.05,.15,0,7),n.fill(),n.stroke(),n.strokeStyle="rgba(0,0,0,0.35)",n.lineWidth=3,n.beginPath(),n.moveTo(d+t*.008,l+e*.03),n.lineTo(d+t*.01,l+e*.08),n.stroke();else if(s==="wide-eyed")n.beginPath(),n.ellipse(d,l+e*.02,t*.016,e*.04,0,0,7),n.fill(),n.stroke();else if(s==="cheeky")n.beginPath(),n.moveTo(d-t*.04,l-e*.01),n.quadraticCurveTo(d,l+e*.08,d+t*.045,l-e*.035),n.stroke();else if(s==="smug")n.beginPath(),n.moveTo(d-t*.03,l+e*.01),n.quadraticCurveTo(d+t*.01,l+e*.05,d+t*.04,l-e*.03),n.stroke();else if(s==="worried"){n.beginPath(),n.moveTo(d-t*.03,l+e*.02);for(let m=0;m<=6;m++)n.lineTo(d-t*.03+m*t*.01,l+e*.02+(m%2?-1:1)*e*.012);n.stroke()}else s==="goofy"?(n.beginPath(),n.moveTo(d-t*.04,l),n.quadraticCurveTo(d,l+e*.09,d+t*.04,l),n.closePath(),n.fill(),n.stroke(),n.fillStyle="#ff7d8f",n.beginPath(),n.ellipse(d+t*.01,l+e*.07,t*.016,e*.045,0,0,7),n.fill(),n.stroke(),n.fillStyle="#fff",n.fillRect(d-t*.02,l-2,t*.016,e*.03)):s==="determined"?(n.beginPath(),n.moveTo(d-t*.03,l+e*.01),n.lineTo(d+t*.03,l+e*.01),n.stroke()):(n.beginPath(),n.moveTo(d-t*.035,l-e*.01),n.quadraticCurveTo(d,l+e*.07,d+t*.035,l-e*.01),n.stroke());n.strokeStyle="rgba(0,0,0,0.25)",n.lineWidth=6,n.beginPath(),n.arc(o,a+e*.09,t*.012,.2,Math.PI-.2),n.stroke()}function ev(n,t){return on(256,200,(e,i,s)=>{e.fillStyle="#ffffff",Ye(e,0,0,i,s,20),e.fill(),e.fillStyle=t,e.fillRect(0,0,i,44),e.font=`30px ${uh}`,e.fillStyle="#fff",e.textAlign="center",e.textBaseline="middle",e.fillText("MARKRUN",i/2,24),an(e,String(n),i/2,128,140,"#1a1420","#1a1420",0),e.fillStyle="#c33";for(let[r,o]of[[16,60],[i-16,60],[16,s-16],[i-16,s-16]])e.beginPath(),e.arc(r,o,6,0,7),e.fill()})}function nv(n){return on(128,128,(t,e,i)=>{if(t.fillStyle="#ffffff",t.strokeStyle="#1a1420",t.lineWidth=8,t.beginPath(),t.arc(e/2,i/2-6,48,0,7),t.fill(),t.stroke(),t.beginPath(),t.moveTo(e/2-12,i-26),t.lineTo(e/2,i-4),t.lineTo(e/2+8,i-28),t.fill(),n==="!")an(t,"!",e/2,i/2-4,84,"#ff3d8b","#1a1420",.12);else if(n==="heart"){t.fillStyle="#ff2d6f";let s=e/2,r=i/2-2,o=16;t.beginPath(),t.moveTo(s,r+o*1.3),t.bezierCurveTo(s-o*2.6,r-o*.3,s-o,r-o*2.2,s,r-o*.7),t.bezierCurveTo(s+o,r-o*2.2,s+o*2.6,r-o*.3,s,r+o*1.3),t.fill(),t.stroke()}else if(n==="floss"){t.fillStyle="#ff9bd2";for(let[s,r,o]of[[54,44,18],[74,46,17],[64,30,16],[62,54,16]])t.beginPath(),t.arc(s,r,o,0,7),t.fill();t.strokeStyle="#c99a5a",t.lineWidth=6,t.beginPath(),t.moveTo(64,62),t.lineTo(64,96),t.stroke()}else if(n==="sweat"){t.fillStyle="#57c7ff";for(let[s,r]of[[50,50],[78,64]])t.beginPath(),t.moveTo(s,r-22),t.quadraticCurveTo(s+14,r,s,r+10),t.quadraticCurveTo(s-14,r,s,r-22),t.fill(),t.stroke()}})}function Lu(n,t={}){let e=n.look||{},i=Cu[e.build]||Cu.compact,s=Qx(n.id+(n.nickname||"")),r=Rn(s),o=n.colour?.primary||"#ff4757",a=n.colour?.secondary||"#ffffff",l=e.skin||"#f1c6a5",h=Iu[s%Iu.length],u=[],g=gt(o),f=gt(a),c=gt(l),d=gt(h),M=new oe(a).getHSL({}).l>.85?"#ffffff":a,m=gt(M),p=gt("#ffffff"),S=gt("#22202c"),_=(J,dt,ct=jx)=>_e(J,dt,{ol:ct,olRef:9}),v=new fe;v.name=`runner-${n.id}`;let L=new fe;v.add(L);let E=new fe;L.add(E);let T=i.leg/2,R=i.leg+i.shoe[1]*.75;E.position.y=R;let x=_(Qt(`shorts${e.build}`,()=>new be(i.torso[0]*.92,.32,i.torso[2]*.95,3,.12)),f);x.position.y=.02,E.add(x);let y=new fe;y.position.y=.12,E.add(y);let b=_(Qt(`torso${e.build}`,()=>new be(...i.torso,4,Math.min(i.torso[2],i.torso[0])*.42)),g);b.position.y=i.torso[1]/2,y.add(b);for(let J of[-1,1]){let dt=_e(Qt(`stripe${e.build}`,()=>new Te(.06,i.torso[1]*.8,i.torso[2]*.7)),gt(a),{cast:!1});dt.position.set(J*i.torso[0]*.5,i.torso[1]*.5,0),y.add(dt)}let A=ev(n.lane??0,o);u.push(A);let w=new Ne(Qt("bib",()=>new fn(1,.78)),gt(16777215,{map:A})),I=Math.min(.42,i.torso[0]*.6);w.scale.setScalar(I),w.position.set(0,i.torso[1]*.45,i.torso[2]/2+.012),y.add(w);let O=new fe;O.position.y=i.torso[1]+.02,y.add(O);let D=new fe;O.add(D);let B=document.createElement("canvas");B.width=1024,B.height=512;let F=new js(B);F.colorSpace=hn,F.anisotropy=4,u.push(F);let q=null,st=J=>{J!==q&&(q=J,tv(B.getContext("2d"),1024,512,l,e.face||"grin",J),F.needsUpdate=!0)};st("normal");let P=i.head,ft=_(Qt(`head${P}`,()=>new ye(P,32,20).scale(1,.98,.96)),gt(16777215,{map:F}));ft.position.y=P*.92,D.add(ft);for(let J of[-1,1]){let dt=_(Qt(`ear${P}`,()=>new ye(P*.2,10,8).scale(.6,1,.8)),c,2.5);dt.position.set(J*P*.97,P*.9,0),D.add(dt)}let Ft=_(Qt(`nose${P}`,()=>new ye(P*.14,10,8)),c,2);Ft.position.set(0,P*.84,P*.97),D.add(Ft),Z(e.hair,e.hat),H(e.hat);let U=[];for(let J of[-1,1]){let dt=new fe;dt.position.set(J*(i.torso[0]/2+i.armR*.55),i.torso[1]-i.armR*1.1,0),y.add(dt);let ct=_(Qt(`sleeve${e.build}`,()=>new ye(i.armR*1.65,14,10)),g);dt.add(ct);let _t=_(Qt(`uarm${e.build}`,()=>new Yn(i.armR,i.arm/2-i.armR,4,10).translate(0,-i.arm/4,0)),c);dt.add(_t);let Et=new fe;Et.position.y=-i.arm/2+i.armR*.4,dt.add(Et);let Ct=_(Qt(`farm${e.build}`,()=>new Yn(i.armR*.95,i.arm/2-i.armR,4,10).translate(0,-i.arm/4,0)),c);Et.add(Ct);let It=_(Qt(`hand${e.build}`,()=>new ye(i.hand,14,10).scale(1,1.1,.9)),c);It.position.y=-i.arm/2-i.hand*.4,Et.add(It),U.push({sh:dt,el:Et,hand:It})}let Y=[];for(let J of[-1,1]){let dt=new fe;dt.position.set(J*i.torso[0]*.24,0,0),E.add(dt);let ct=_(Qt(`thigh${e.build}`,()=>new Yn(i.legR*1.15,T-i.legR,4,10).translate(0,-T/2,0)),c);dt.add(ct);let _t=_(Qt(`sleg${e.build}`,()=>new he(i.legR*1.6,i.legR*1.5,T*.5,12).translate(0,-T*.2,0)),f);dt.add(_t);let Et=new fe;Et.position.y=-T,dt.add(Et);let Ct=_(Qt(`shin${e.build}`,()=>new Yn(i.legR,T-i.legR,4,10).translate(0,-T/2,0)),c);Et.add(Ct);let It=_(Qt(`sock${e.build}`,()=>new he(i.legR*1.12,i.legR*1.12,T*.25,10).translate(0,-T*.86,0)),gt(16777215),2.5);Et.add(It);let Wt=new fe;Wt.position.y=-T,Et.add(Wt);let Kt=_(Qt(`shoe${e.build}`,()=>new be(...i.shoe,3,i.shoe[1]*.45).translate(0,-i.shoe[1]*.25,i.shoe[2]*.22)),m);Wt.add(Kt);let qt=_e(Qt(`sole${e.build}`,()=>new be(i.shoe[0]*1.04,i.shoe[1]*.3,i.shoe[2]*1.03,2,.05).translate(0,-i.shoe[1]*.62,i.shoe[2]*.22)),p,{ol:2.5,olRef:9});Wt.add(qt);let ue=_e(Qt(`swoosh${e.build}`,()=>new Te(i.shoe[0]*1.06,i.shoe[1]*.18,i.shoe[2]*.5).translate(0,-i.shoe[1]*.2,i.shoe[2]*.2)),gt(o),{cast:!1});Wt.add(ue),Y.push({hp:dt,kn:Et,an:Wt})}Lt(e.accessory);let Q=new fe;Q.visible=!1;{let J=_e(Qt("flossStick",()=>new he(.025,.025,.6,5).rotateX(Math.PI/2).translate(0,0,.3)),gt("#e8d0a0"),{cast:!1}),dt=_e(Qt("flossFluff",()=>{let ct=Rn(5);return Qe(Array.from({length:7},()=>new nn(.16+ct()*.06,1).translate((ct()-.5)*.22,(ct()-.5)*.22,.72+(ct()-.5)*.2)))}),gt("#ff9bd2"),{ol:2.5,olRef:9});Q.add(J,dt),Q.userData.fluff=dt,Q.position.y=-i.arm/2-i.hand*.4,U[0].el.add(Q)}function W(J,dt){J==="floss"&&(Q.visible=dt>0,dt>0&&Q.userData.fluff.scale.setScalar(Math.max(.15,dt)))}let lt={},ot=new ca(new Dr({transparent:!0,depthTest:!1}));ot.scale.setScalar(.9),ot.visible=!1,ot.renderOrder=20,v.add(ot);let wt=J=>{if(!J){ot.visible=!1;return}lt[J]||(lt[J]=nv(J),u.push(lt[J])),ot.material.map=lt[J],ot.material.needsUpdate=!0,ot.visible=!0},pt=R+.12+i.torso[1]+.02+P*2;ot.position.y=pt+.45;let V=new Set([b,x,ft,...U.flatMap(J=>[J.hand]),...Y.map(J=>J.an.children[0])]);for(let J of U)J.sh.children.forEach(dt=>dt.isMesh&&V.add(dt));for(let J of Y)J.hp.children.forEach(dt=>dt.isMesh&&V.add(dt));v.traverse(J=>{J.isMesh&&!J.userData.isOutline&&(J.castShadow=V.has(J))});function Z(J,dt){let ct=J||"short";if(ct==="bald")return;let _t=(Et=1.07,Ct=.48)=>{let It=_(Qt(`hcap${P}${Et}${Ct}`,()=>new ye(P*Et,24,14,0,Math.PI*2,0,Math.PI*Ct)),d);return It.position.y=P*.92,It.rotation.x=-.32,D.add(It),It};if(ct==="curly"||ct==="afro"){let Et=Qt(`curly${P}`,()=>{let It=Rn(7),Wt=[];for(let Kt=0;Kt<26;Kt++){let qt=It()*Math.PI*.55,ue=It()*Math.PI*2,re=new $(Math.sin(qt)*Math.cos(ue),Math.cos(qt),Math.sin(qt)*Math.sin(ue)).multiplyScalar(P*1.02);re.z>P*.55&&re.y<P*.75||Wt.push(new nn(P*.33,1).translate(re.x,re.y,re.z-P*.08))}return Qe(Wt)}),Ct=_(Et,d);Ct.position.y=P*.98,ct==="afro"&&(Ct.scale.setScalar(1.28),Ct.position.y=P*1.05),D.add(Ct);return}if(dt==="beanie"||dt==="bucket"||dt==="bobble"){if(_t(1.05,.5),ct==="mullet"||ct==="long"||ct==="ponytail"){let Et=_(Qt(`mul${P}`,()=>new be(P*1.5,P*.9,P*.4,3,P*.15)),d);Et.position.set(0,P*.35,-P*.78),D.add(Et)}return}if(ct==="buzz"){let Et=_(Qt(`buzz${P}`,()=>new ye(P*1.025,24,14,0,Math.PI*2,0,Math.PI*.45)),d,2);Et.position.y=P*.92,Et.rotation.x=-.32,D.add(Et);return}if(_t(),ct==="quiff"||ct==="swept"){let Et=_(Qt(`quiff${P}${ct}`,()=>new ye(P*.55,16,10).scale(ct==="quiff"?1.3:1.7,ct==="quiff"?.75:.45,1)),d);Et.position.set(ct==="swept"?P*.25:0,P*1.82,P*.38),Et.rotation.set(-.5,0,ct==="swept"?-.35:0),D.add(Et)}if(ct==="mullet"){let Et=_(Qt(`mul${P}`,()=>new be(P*1.5,P*.9,P*.4,3,P*.15)),d);Et.position.set(0,P*.35,-P*.78),D.add(Et)}if(ct==="long"){let Et=_(Qt(`hlong${P}`,()=>new be(P*1.8,P*1.6,P*.5,3,P*.2)),d);Et.position.set(0,P*.4,-P*.62),D.add(Et)}if(ct==="ponytail"){let Et=new fe;Et.position.set(0,P*1.35,-P*.85),D.add(Et);for(let Ct=0;Ct<3;Ct++){let It=_(Qt(`pt${P}${Ct}`,()=>new ye(P*(.32-Ct*.05),12,8)),d);It.position.set(0,-Ct*P*.32,-Ct*P*.18),Et.add(It)}D.userData.pony=Et}if(ct==="bun"){let Et=_(Qt(`bun${P}`,()=>new ye(P*.38,14,10)),d);Et.position.set(0,P*2,-P*.2),D.add(Et)}if(ct==="mohawk"||ct==="spiky"){let Et=ct==="mohawk"?5:9;for(let Ct=0;Ct<Et;Ct++){let It=_(Qt(`spk${P}`,()=>new qe(P*.2,P*.7,8)),d),Wt=ct==="mohawk"?0:Ct/Et*Math.PI*2,Kt=ct==="mohawk"?-.9+Ct/(Et-1)*1.8:.6;It.position.set(Math.sin(Wt)*Math.sin(Kt)*P,P*.92+Math.cos(Kt)*P*1.05,(ct==="mohawk"?Math.sin(Kt):Math.cos(Wt)*Math.sin(Kt))*P),It.lookAt(It.position.clone().multiplyScalar(3)),It.rotateX(Math.PI/2),D.add(It)}}}function H(J){if(!J)return;let dt=gt(a==="#ffffff"||a==="#f8f8f8"?o:a),ct=gt(o);if(J==="backwards-cap"){let _t=_(Qt(`capd${P}`,()=>new ye(P*1.1,24,12,0,Math.PI*2,0,Math.PI*.42)),dt);_t.position.y=P*.98,_t.rotation.x=-.18,D.add(_t);let Et=_(Qt(`brim${P}`,()=>new he(P*.75,P*.75,P*.08,20,1,!1,-Math.PI/2,Math.PI).scale(1.2,1,1.15)),ct);Et.position.set(0,P*1.42,-P*.62),Et.rotation.set(-.12,Math.PI,0),D.add(Et)}else if(J==="bobble"){let _t=_(Qt(`bean${P}`,()=>new ye(P*1.1,24,14,0,Math.PI*2,0,Math.PI*.5).scale(1,1.15,1)),ct);_t.position.y=P*.96,_t.rotation.x=-.12,D.add(_t);let Et=_(Qt(`brim2${P}`,()=>new Je(P*1.05,P*.17,8,24)),dt);Et.rotation.x=Math.PI/2-.12,Et.position.y=P*1.12,D.add(Et);let Ct=_(Qt(`bigbob${P}`,()=>new nn(P*.48,1)),dt);Ct.position.y=P*2.45,D.add(Ct),D.userData.bobble=Ct}else if(J==="cap"||J==="visor"){if(J==="cap"){let Et=_(Qt(`capd${P}`,()=>new ye(P*1.1,24,12,0,Math.PI*2,0,Math.PI*.42)),dt);Et.position.y=P*.98,Et.rotation.x=-.18,D.add(Et)}else{let Et=_(Qt(`vband${P}`,()=>new Je(P*1,P*.12,8,24)),dt);Et.rotation.x=Math.PI/2-.25,Et.position.y=P*1.35,D.add(Et)}let _t=_(Qt(`brim${P}`,()=>new he(P*.75,P*.75,P*.08,20,1,!1,-Math.PI/2,Math.PI).scale(1.2,1,1.15)),ct);_t.position.set(0,P*1.42,P*.62),_t.rotation.x=.12,D.add(_t)}else if(J==="beanie"){let _t=_(Qt(`bean${P}`,()=>new ye(P*1.1,24,14,0,Math.PI*2,0,Math.PI*.5).scale(1,1.15,1)),dt);_t.position.y=P*.96,_t.rotation.x=-.12,D.add(_t);let Et=_(Qt(`brim2${P}`,()=>new Je(P*1.05,P*.17,8,24)),ct);Et.rotation.x=Math.PI/2-.12,Et.position.y=P*1.12,D.add(Et);let Ct=_(Qt(`bob${P}`,()=>new nn(P*.3,1)),ct);Ct.position.y=P*2.25,D.add(Ct)}else if(J==="headband"||J==="sweatband"){let _t=_(Qt(`hb${P}`,()=>new Je(P*1,P*.13,8,28)),dt);_t.rotation.x=Math.PI/2-.2,_t.position.y=P*1.3,D.add(_t);let Et=_(Qt(`hbt${P}`,()=>new be(P*.2,P*.5,P*.08,2,.02)),dt);Et.position.set(.12,P*1.1,-P*1.05),Et.rotation.z=.5,D.add(Et),D.userData.tail=Et}else if(J==="bucket"){let _t=_(Qt(`buck${P}`,()=>new he(P*.8,P*1.02,P*.7,20)),dt);_t.position.y=P*1.75,D.add(_t);let Et=_(Qt(`buckb${P}`,()=>new he(P*1.5,P*1.5,P*.06,24)),ct);Et.position.y=P*1.42,Et.rotation.x=.1,D.add(Et)}else if(J==="crown"||J==="tiara"){let _t=_(Qt(`crown${P}`,()=>new he(P*.7,P*.62,P*.5,8,1,!0)),gt("#ffd23f",{side:je}));_t.position.y=P*2,D.add(_t)}else if(J==="wizard"||J==="party"){let _t=_(Qt(`cone${P}`,()=>new qe(P*.8,P*1.8,16)),dt);_t.position.y=P*2.3,_t.rotation.z=.15,D.add(_t);let Et=_(Qt(`bob${P}`,()=>new nn(P*.3,1)),ct);Et.position.set(-P*.12,P*3.15,0),D.add(Et)}else if(J==="helmet"||J==="bike_helmet"){let _t=_(Qt(`helm${P}`,()=>new ye(P*1.14,20,12,0,Math.PI*2,0,Math.PI*.46).scale(1,.9,1.15)),dt);_t.position.y=P*1,D.add(_t)}else if(J==="santa"){let _t=_(Qt(`santa${P}`,()=>new qe(P*.95,P*1.6,16)),gt("#e8313f"));_t.position.y=P*2.2,_t.rotation.z=.5,D.add(_t);let Et=_(Qt(`santar${P}`,()=>new Je(P*.95,P*.2,8,24)),gt("#ffffff"));Et.rotation.x=Math.PI/2,Et.position.y=P*1.45,D.add(Et)}else{let _t=_(Qt(`cone${P}`,()=>new qe(P*.8,P*1.8,16)),dt);_t.position.y=P*2.3,D.add(_t)}}function Lt(J){if(J){if(J==="sunglasses"||J==="glasses"){let dt=J==="sunglasses";for(let _t of[-1,1]){let Et=_(Qt(`lens${P}${dt}`,()=>new be(P*.5,P*.32,P*.08,2,P*.06)),dt?gt("#141420"):gt("#cfefff"),2);Et.position.set(_t*P*.3,P*1.02,P*.98),Et.rotation.y=_t*.28,D.add(Et)}let ct=_e(Qt(`bridge${P}`,()=>new Te(P*.3,P*.06,P*.06)),gt("#141420"),{cast:!1});ct.position.set(0,P*1.06,P*1.04),D.add(ct)}else if(J==="medal"){let dt=_(Qt("ribbon",()=>new Je(.2,.03,6,20,Math.PI)),gt("#2e9bff"),2);dt.rotation.z=Math.PI,dt.position.set(0,i.torso[1]+.02,i.torso[2]/2-.05),dt.rotation.x=-.3,y.add(dt);let ct=_(Qt("medal",()=>new he(.11,.11,.04,16).rotateX(Math.PI/2)),gt("#ffd23f",{emissive:"#664400",emissiveIntensity:.3}),2.5);ct.position.set(0,i.torso[1]-.22,i.torso[2]/2+.05),y.add(ct),w.position.y-=.1,w.position.x=.12,w.scale.multiplyScalar(.8)}else if(J==="headphones"){let dt=_(Qt(`hp${P}`,()=>new Je(P*1.08,P*.07,6,24,Math.PI)),gt("#22202c"),2);dt.position.y=P*.95,D.add(dt);for(let ct of[-1,1]){let _t=_(Qt(`hpc${P}`,()=>new he(P*.3,P*.3,P*.2,14).rotateZ(Math.PI/2)),gt(o),2.5);_t.position.set(ct*P*1.02,P*.92,0),D.add(_t)}}else if(J==="sweatband"||J==="wristbands"||J==="watch")for(let dt of U){let ct=_(Qt(`wb${e.build}`,()=>new he(i.armR*1.3,i.armR*1.3,.12,10).translate(0,-i.arm/2+.1,0)),gt(J==="watch"?"#22202c":a),2);if(dt.el.add(ct),J==="watch")break}else if(J==="scarf"){let dt=_(Qt("scarf",()=>new Je(.22,.08,8,18)),gt(a));dt.rotation.x=Math.PI/2,dt.position.y=.02,O.add(dt);let ct=_(Qt("scarft",()=>new be(.14,.5,.06,2,.03)),gt(a));ct.position.set(.1,-.15,-.25),ct.rotation.x=.5,O.add(ct),D.userData.tail2=ct}else if(J==="cape"){let dt=_(Qt(`cape${e.build}`,()=>new fn(i.torso[0]*1.2,i.torso[1]*1.5,1,4).translate(0,-i.torso[1]*.75,0)),gt(a,{side:je}),2),ct=new fe;ct.position.set(0,i.torso[1],-i.torso[2]/2-.03),ct.add(dt),y.add(ct),D.userData.cape=ct}else if(J==="backpack"){let dt=_(Qt(`bp${e.build}`,()=>new be(i.torso[0]*.7,i.torso[1]*.7,.25,3,.08)),gt(a));dt.position.set(0,i.torso[1]*.5,-i.torso[2]/2-.12),y.add(dt)}else if(J==="moustache"||J==="mustache"){let dt=_(Qt(`mou${P}`,()=>new Yn(P*.09,P*.5,4,8).rotateZ(Math.PI/2)),gt("#3a2616"),2);dt.position.set(0,P*.7,P*.98),D.add(dt)}else if(J==="beard"){let dt=_(Qt(`beard${P}`,()=>new ye(P*.78,18,12,0,Math.PI*2,Math.PI*.45,Math.PI*.55).scale(1.05,1,.75)),d,2.5);dt.position.set(0,P*.78,P*.32),D.add(dt);let ct=_(Qt(`mou${P}`,()=>new Yn(P*.09,P*.5,4,8).rotateZ(Math.PI/2)),d,2);ct.position.set(0,P*.7,P*.98),D.add(ct)}else if(J==="bumbag"){let dt=_(Qt(`bum${e.build}`,()=>new be(i.torso[0]*.5,.2,.18,2,.07)),gt(a==="#ffffff"||a==="#f8f8f8"?"#22202c":a));dt.position.set(i.torso[0]*.12,.08,i.torso[2]/2+.08),E.add(dt);let ct=_e(Qt(`strap${e.build}`,()=>new Je(i.torso[0]*.48,.025,6,24).scale(1,i.torso[2]/i.torso[0]*1.05,1).rotateX(Math.PI/2)),gt("#22202c"),{cast:!1});ct.position.y=.1,E.add(ct)}else if(J==="bib"){let dt=new Ne(Qt("bib",()=>new fn(1,.78)),w.material);dt.scale.copy(w.scale),dt.position.set(0,i.torso[1]*.5,-i.torso[2]/2-.012),dt.rotation.y=Math.PI,y.add(dt),w.scale.multiplyScalar(1.3)}else if(J==="bowtie")for(let dt of[-1,1]){let ct=_(Qt("bow",()=>new qe(.08,.16,4).rotateZ(Math.PI/2)),gt(a),2);ct.position.set(dt*.08,i.torso[1]-.06,i.torso[2]/2+.03),ct.rotation.z=dt>0?Math.PI:0,y.add(ct)}else if(J==="tutu"){let dt=_(Qt(`tutu${e.build}`,()=>new he(i.torso[0]*.55,i.torso[0]*.9,.18,16,1,!0)),gt("#ff9bd2",{side:je}),2);dt.position.y=-.05,E.add(dt)}}}let xt={phase:r()*6.28,t:r()*10,lean:0,j:{},look:0,lookPitch:0},bt=xt.j,Bt=["hipLx","hipRx","kneeL","kneeR","ankL","ankR","shLx","shRx","shLz","shRz","elL","elR","twist","lean","bob","roll","headY","headX","bodyX","bodyY","bodyZ","hipSpread"];for(let J of Bt)bt[J]=0;let K={},Ot="idle",z=null,k=0;function mt(J,dt=null){(J!==Ot||dt!==z)&&(Ot=J,z=dt,k=0)}function Rt(J,dt={}){xt.t+=J,k+=J;let ct=xt.t;for(let It of Bt)K[It]=0;let _t="normal",Et=10;if(Ot==="run"||Ot==="jog"||Ot==="trudge"||Ot==="distracted"){let It=Math.max(.5,dt.speed??3.5),Wt=Math.max(.2,dt.rate??1),Kt=Ot==="trudge",qt=Kt?1.7:(2.55+.14*(It-3.5))*Math.pow(Wt,.3)*(Ot==="jog"?.8:1);xt.phase+=J*Math.PI*qt;let ue=xt.phase,re=Math.sin(ue),Se=Math.cos(ue),at=Kt?.4:Math.max(.45,Math.min(1,.62+.13*(It-3.5)));K.hipLx=-at*re,K.hipRx=at*re,K.kneeL=.2+(Kt?.5:1.35)*Math.max(0,Se)*(.7+at*.3),K.kneeR=.2+(Kt?.5:1.35)*Math.max(0,-Se)*(.7+at*.3),K.ankL=-.2*re,K.ankR=.2*re;let Yt=Kt?.3:.75*at+.15;K.shLx=Yt*re,K.shRx=-Yt*re,K.shLz=-.18,K.shRz=.18,K.elL=Kt?-.5:-1.5,K.elR=Kt?-.5:-1.5,K.twist=.16*re,K.roll=.05*re,K.bob=(Kt?.03:.11)*(Math.abs(Se)-.4),K.lean=(Kt?.05:.16)+Math.max(-.25,Math.min(.45,(dt.slope??0)*1.6)),K.headX=-K.lean*.6,K.headY=-.08*re,Et=18,_t=dt.effort>.6?"effort":dt.effort>.3?"pant":"normal",Kt&&(K.headX=.35,K.lean=.25,_t="sad"),Ot==="distracted"&&(K.headY=dt.lookYaw??.9,K.headX=-.15,K.twist+=(dt.lookYaw??.9)*.3,_t="love")}else if(Ot==="ready")K.hipLx=-.5,K.hipRx=.35,K.kneeL=.6,K.kneeR=.5,K.lean=.35,K.bob=-.12,K.shLx=.5,K.shRx=-.6,K.elL=-1.3,K.elR=-1.3,K.headX=-.25,K.bob+=Math.sin(ct*3)*.01,_t="effort";else if(Ot==="wave")K.shRz=2.7,K.elR=.2*Math.sin(ct*9)-.25,K.shRx=Math.sin(ct*9)*.25,K.shLz=-.3,K.elL=-.4,K.bob=Math.abs(Math.sin(ct*4))*.05,K.headY=.1*Math.sin(ct*2),_t="happy";else if(Ot==="pose"){let It=z||"flex";if(It==="flex")K.shLz=-1.5,K.shRz=1.5,K.elL=-1.9-Math.sin(ct*6)*.15,K.elR=-1.9-Math.sin(ct*6+1)*.15,K.shLx=-0,K.bob=-.06+Math.abs(Math.sin(ct*3))*.03,K.hipSpread=.25,K.kneeL=.3,K.kneeR=.3,_t="effort";else if(It==="point")K.shRx=-1.5,K.elR=0,K.shLz=-.3,K.elL=-1.6,K.shLx=-.3,K.headX=-.1,K.lean=-.05,_t="happy",K.bob=Math.sin(ct*5)*.02;else if(It==="stretch")K.hipRx=-.2,K.kneeR=2.3,K.shRx=.8,K.elR=-.6,K.shLz=-2.6,K.lean=.08+Math.sin(ct*2)*.04,_t="smug";else if(It==="spin"){let Wt=Math.min(1,k/1.1);K.bodyY=(1-(1-Wt)**2)*Math.PI*4,K.shLz=Wt<1?-1.3:-2.6,K.shRz=Wt<1?1.3:2.6,K.bob=Wt<1?Math.abs(Math.sin(ct*7))*.2:Math.abs(Math.sin(ct*5))*.12,_t="happy"}else It==="bow"?(K.lean=.75+Math.sin(ct*2)*.05,K.shLx=.4,K.shRx=-1.2,K.elR=-1.6,K.shRz=.4,K.headX=-.2,_t="happy"):(K.shLz=-2.5,K.shRz=2.5,K.bob=Math.abs(Math.sin(ct*6))*.25,_t="happy");_t==="smug"&&(_t="normal")}else if(Ot==="celebrate"){let It=z||"jump";if(It==="jump"){let Wt=Math.abs(Math.sin(ct*5.5));K.bob=Wt*.55,K.shLz=-2.6-Wt*.3,K.shRz=2.6+Wt*.3,K.elL=-.2,K.elR=-.2,K.kneeL=K.kneeR=(1-Wt)*.8,K.hipLx=K.hipRx=-(1-Wt)*.4,_t="happy",Et=22}else if(It==="fist"){let Wt=Math.sin(ct*7);K.shRx=-2.6,K.elR=-.4+Wt*.4,K.shLx=.4,K.elL=-1.8,K.bob=Math.abs(Wt)*.08,K.lean=-.1,_t="happy"}else It==="kneel"?(K.lean=.85,K.kneeL=K.kneeR=.7,K.hipLx=K.hipRx=-.6,K.bob=-.25+Math.sin(ct*7)*.025,K.shLx=K.shRx=-.55,K.elL=K.elR=-.1,K.shLz=-.15,K.shRz=.15,K.headX=-.6,_t="pant"):It==="collapse"?(K.bodyX=-Math.PI/2+.05,K.shLz=-2.2,K.shRz=2.2,K.hipSpread=.4,K.kneeL=.3+Math.max(0,Math.sin(ct*9))*.4*(Math.sin(ct*.7)>.6?1:0),K.kneeR=.2,_t="dead",Et=4):It==="shrug"&&(K.shLz=-.9,K.shRz=.9,K.elL=-1.4,K.elR=-1.4,K.shLx=-.5,K.shRx=-.5,K.headX=.1,K.headY=Math.sin(ct*1.5)*.3,_t="sad")}else K.bob=Math.sin(ct*2)*.015,K.shLz=-.18,K.shRz=.18,K.elL=-.25,K.elR=-.25,K.headY=Math.sin(ct*.7)*.25,K.lean=.02,K.kneeL=K.kneeR=.05;dt.lookYaw!=null&&Ot!=="distracted"&&(K.headY+=dt.lookYaw);let Ct=1-Math.exp(-Et*J);for(let It of Bt){if(It==="bodyY"&&Ot==="pose"&&z==="spin"){bt[It]=K[It];continue}bt[It]+=(K[It]-bt[It])*Ct}if(Ot==="pose"&&z==="spin"||(bt.bodyY=bt.bodyY%(Math.PI*2),bt.bodyY>Math.PI&&(bt.bodyY-=Math.PI*2)),Y[0].hp.rotation.set(bt.hipLx,0,-bt.hipSpread),Y[1].hp.rotation.set(bt.hipRx,0,bt.hipSpread),Y[0].kn.rotation.x=bt.kneeL,Y[1].kn.rotation.x=bt.kneeR,Y[0].an.rotation.x=bt.ankL-bt.kneeL*.35,Y[1].an.rotation.x=bt.ankR-bt.kneeR*.35,U[0].sh.rotation.set(bt.shLx,0,bt.shLz-0),U[1].sh.rotation.set(bt.shRx,0,bt.shRz),U[0].el.rotation.x=bt.elL,U[1].el.rotation.x=bt.elR,y.rotation.set(bt.lean,bt.twist,0),E.rotation.set(0,-bt.twist*.5,bt.roll),E.position.y=R+bt.bob,D.rotation.set(bt.headX,bt.headY,0),L.rotation.set(bt.bodyX,bt.bodyY,bt.bodyZ),L.position.y+=((Ot==="celebrate"&&z==="collapse"?i.torso[2]*.5+.08:0)-L.position.y)*Ct,D.userData.bobble&&(D.userData.bobble.position.y=P*2.45+Math.abs(Math.sin(xt.phase))*.04),D.userData.pony&&(D.userData.pony.rotation.x=.4+Math.sin(xt.phase*2)*.35),D.userData.tail&&(D.userData.tail.rotation.x=.6+Math.sin(xt.phase*2)*.3),D.userData.cape&&(D.userData.cape.rotation.x=-.3-Math.min(1.1,(dt.speed??0)*.15)+Math.sin(ct*8)*.08),dt.expr&&(_t=dt.expr),st(_t),ot.visible){ot.position.y=pt+.45+Math.sin(ct*6)*.08;let It=.9+Math.sin(ct*9)*.05;ot.scale.set(It,It,It)}}function Pt(){for(let J of u)J.dispose?.();ot.material.dispose()}return{id:n.id,info:n,root:v,update:Rt,set:mt,setPop:wt,setExpr:st,setProp:W,dispose:Pt,height:pt,hipH:R,get state(){return Ot},get variant(){return z}}}var iv=(n,t,e)=>{let i=Math.max(0,Math.min(1,(e-n)/(t-n)));return i*i*(3-2*i)};function ku(n,t,e){let i=n.timeMap,s={};e.forEach((x,y)=>s[x.id]=x.lane??y+1);let r=n.runners.length,o=Object.values(s),a=(Math.min(...o)+Math.max(...o))/2,l=Math.min(1.25,(Ve-1.6)/Math.max(1,r-1)),h=n.runners.map((x,y)=>{let b=ao(i,x.officialS),A=((s[x.id]??y+1)-a)*l;return{...x,finishB:b,base:A,seed:y*1.7+.3}}),u=Object.fromEntries(h.map(x=>[x.id,x])),g=[...h].sort((x,y)=>x.officialS-y.officialS).map(x=>x.id),f=Object.fromEntries(g.map((x,y)=>[x,y+1])),c=u[g[0]],d=g.map(x=>u[x].officialS),M=u[g[0]].finishB,m=u[g.at(-1)].finishB,p=r>1&&d[1]-d[0]<=1.5,S=x=>Math.max(.05,(xs(i,x+.05)-xs(i,x-.05))/.1),_=new Map;function v(x){let y=Math.round(x*1e3);if(_.has(y))return _.get(y);let b=x<=0?0:xs(i,x),A=x<=0?4:S(x),w={b:x,raceS:b,rate:A,byId:{},order:[]};for(let B of h){let F=$n(B.progress,b),q=b>=B.officialS&&x>=B.finishB-1e-6,st=($n(B.progress,b+1)-$n(B.progress,Math.max(0,b-1)))/(b>1?2:1);w.byId[B.id]={id:B.id,m:F,finished:q,vRace:q?0:st,place:f[B.id]}}for(let B of h){let F=w.byId[B.id],q=F.m,st=B.base;st+=.22*Math.sin(F.m/85+B.seed);for(let Ft of h){if(Ft===B)continue;let U=w.byId[Ft.id],Y=F.m-U.m;if(Math.abs(Y)<4&&!F.finished&&!U.finished){let Q=(1-Math.abs(Y)/4)*.32;st+=Math.sign(B.base-Ft.base||B.seed-Ft.seed)*Q}}let P=0;if(F.finished){let Ft=x-B.finishB,U=($n(B.progress,B.officialS)-$n(B.progress,B.officialS-2))/2*S(B.finishB),Y=Math.min(14,Math.max(4,U)),Q=1.6;q=5e3+(Ft<Q?Y*(Ft-Ft*Ft/(2*Q)):Y*Q/2+Math.min(10+f[B.id]*1.5,(Ft-Q)*.9));let lt=(f[B.id]-(r+1)/2)*1.6;st=st+(lt-st)*iv(0,2.5,Ft),P=Ft}let ft=t.sample(q,B.id);st*=1-ft.div,st=Math.max(-Ve/2+.6,Math.min(Ve/2-.6,st)),Object.assign(F,{mVis:q,x:ft.x+ft.rx*st,z:ft.z+ft.rz*st,y:t.heightAt(ft.x+ft.rx*st,ft.z+ft.rz*st)+.16,tx:ft.tx,tz:ft.tz,slope:ft.slope,div:ft.div,divInfo:ft.divInfo,lat:st,post:P,distToFinish:Math.max(0,5e3-F.m)})}let I=h.filter(B=>w.byId[B.id].finished).sort((B,F)=>B.officialS-F.officialS),O=h.filter(B=>!w.byId[B.id].finished).sort((B,F)=>w.byId[F.id].m-w.byId[B.id].m||B.officialS-F.officialS);w.order=[...I,...O].map(B=>B.id),w.leader=w.byId[w.order[0]];let D=u[w.order[0]];for(let[B,F]of w.order.entries()){let q=w.byId[F];if(q.finished)q.gapText=B===0?ka(u[F].officialS):`+${(u[F].officialS-c.officialS).toFixed(0)}s`;else if(B===0)q.gapText="LEADER";else{let st=w.byId[w.order[0]].finished?c:D;q.gapText=`+${Math.max(0,b-ys(st.progress,q.m)).toFixed(1)}s`}}return _.size>400&&_.clear(),_.set(y,w),w}return{stateAt:v,orderAt:x=>v(x).order,gapM:(x,y,b)=>{let A=v(b);return Math.abs((A.byId[x]?.m??0)-(A.byId[y]?.m??0))},finishedAt:(x,y)=>v(y).byId[x]?.finished,allFinishedAt:x=>x>m,firstFinishB:M,lastFinishB:m,photoFinish:p,finishOrder:g,place:f,byId:u,R:h,rateAt:S,durationS:i.durationS}}function ka(n){let t=Math.floor(n/60),e=Math.round(n-t*60);return`${t}:${String(e).padStart(2,"0")}`}function ph({plan:n,sim:t,backedIds:e=[],hasDiversion:i}){let s=n.events||[],r=t.lastFinishB+3.5,o=[],a=(T,R,x,y,b={})=>{x-R>=1.2&&o.push({type:T,a:R,b:x,prio:y,...b})},l=t.firstFinishB,h=t.finishOrder.map(T=>({who:T,broadcastS:t.byId[T].finishB})),u=l-5.5;h.forEach((T,R)=>{let x=h[R-1];x&&T.broadcastS-x.broadcastS>7.5&&(a("front",x.broadcastS+2.2,T.broadcastS-3.2,10,{ids:[T.who],tag:"chaser"}),u=T.broadcastS-3.2),a("finishcam",u,T.broadcastS+2.2,10,{ids:[T.who]}),u=T.broadcastS+2.2}),t.photoFinish&&a("photo",l-.02,l+.02,11);let g=s.find(T=>T.type==="final_stretch");if(g){let T=g.broadcastS,R=l-5.5,x=Math.max(1,Math.round((R-T)/6)),y=["final","track","battle","final","drone","front"];for(let b=0;b<x;b++){let A=T+(R-T)*b/x,w=T+(R-T)*(b+1)/x,I=(A+w)/2,O=t.orderAt(I),D=y[b%y.length],B=[O[0]];D==="battle"&&(B=[O[0],O[1]]);let F=t.gapM(O[0],O[1],I)<12;b===0?(D="final",B=[O[0]]):F&&D!=="final"&&(D="battle",B=[O[0],O[1]]),a(D,A,w,5,{ids:B})}}let f=s.filter(T=>T.type==="diversion").sort((T,R)=>T.broadcastS-R.broadcastS);f[0]&&a("distracted",f[0].broadcastS-.4,Math.max(f[0].broadcastS+6.5,Math.min((f[0].endBroadcastS??f[0].broadcastS+8)+1.2,f[0].broadcastS+9)),9,{ids:[f[0].who],banner:!0});for(let T of s.filter(R=>R.type==="hill")){let R=t.rateAt(T.broadcastS),x=Math.max(2.6,Math.min(6,140/Math.max(1,R*3.4)));a("hill",T.broadcastS-1.4,T.broadcastS+x,7,{lap:T.lap})}let c=s.find(T=>T.type==="lap");c&&a("lapboard",c.broadcastS-2.6,c.broadcastS+2,6);for(let T of s.filter(R=>R.type==="lead_change"))a("battle",T.broadcastS-1.6,T.broadcastS+2.8,6,{ids:[T.to,T.from],tag:"lead"});let d=-1e9,M=s.filter(T=>T.type==="lead_change").map(T=>T.broadcastS);for(let T of s.filter(R=>R.type==="overtake")){let R=e.includes(T.by)||e.includes(T.on),y=t.orderAt(T.broadcastS+.5).indexOf(T.by)<=1;!R&&!y||T.broadcastS-d<11||M.some(b=>Math.abs(b-T.broadcastS)<6)||(d=T.broadcastS,a("battle",T.broadcastS-1.4,T.broadcastS+2.6,R?4:3,{ids:[T.by,T.on]}))}a("startgo",-3.2,2.4,12),a("heli",-8.5,-3.2,12),o.sort((T,R)=>R.prio-T.prio||T.a-R.a);let m=[],p=(T,R)=>!m.some(x=>T<x.b&&R>x.a);for(let T of o){if(p(T.a,T.b)){m.push(T);continue}let R=T.a,x=T.b;for(let y of m)R<y.b&&x>y.a&&(y.a<=R?R=y.b:x=Math.min(x,y.a));x-R>=2.2&&p(R,x)&&m.push({...T,a:R,b:x})}m.sort((T,R)=>T.a-R.a);let S=[],_=-8.5,v=0,L=["track","drone","front","chase","track","blimp","front","side"],E=(T,R)=>{let x=R-T;if(x<=.05)return;if(x<2.2&&S.length){S.at(-1).b=R;return}let y=Math.max(1,Math.round(x/5.2));for(let b=0;b<y;b++){let A=T+x*b/y,w=T+x*(b+1)/y,I=(A+w)/2,O=t.orderAt(I),D=L[v++%L.length],B=[O[0]],F=e.filter(q=>!t.finishedAt(q,I)&&t.gapM(O[0],q,I)>25);F.length&&v%3===0?(D="chase",B=[F[v%F.length]]):D==="track"||D==="side"?B=O.filter(q=>t.gapM(O[0],q,I)<15).slice(0,3):(D==="drone"||D==="blimp")&&(B=O),t.allFinishedAt(I-2)&&(D="celebrate",B=t.finishOrder),S.push({type:D,a:A,b:w,prio:1,ids:B,filler:!0})}};for(let T of m)T.a>_&&E(_,T.a),S.push(T),_=Math.max(_,T.b);return _<r+30&&E(_,r+30),S}function Du({camera:n,C:t,sim:e,world:i,funfair:s}){let r={pos:new $,look:new $,fov:45},o={off:new $,lookOff:new $,fov:45,init:!1},a=null,l=new $,h=new $,u=new $(0,1,0),g={};function f(S,_){let v=e.stateAt(_),L=S.map(O=>v.byId[O]).filter(Boolean);if(!L.length)return{p:new $(v.leader.x,v.leader.y,v.leader.z),h:new $(v.leader.tx,0,v.leader.tz),m:v.leader.m,spread:0};let E=new $,T=0;for(let O of L)E.x+=O.x,E.y+=O.y,E.z+=O.z,T+=O.m;E.divideScalar(L.length),T/=L.length;let R=1e9,x=-1e9;for(let O of L)R=Math.min(R,O.m),x=Math.max(x,O.m);let y=L[0],b=Math.max(0,y.mVis-18),A=t.xzAt(b,y.id),w=t.xzAt(b+36,y.id),I=new $(w.x-A.x,0,w.z-A.z).normalize();return isFinite(I.x)||I.set(0,0,1),{p:E,h:I,m:T,spread:x-R,list:L}}let c=S=>new $(-S.z,0,S.x);function d(S,_,v){let L=(_-S.a)/Math.max(.01,S.b-S.a),E=i.anchors.finish,T=i.anchors.start,R,x,y=45,b=!0;switch(S.type){case"heli":{let A=new $(150,0,0),w=new $(T.x,T.y,T.z),I=mh(Math.min(1,L*1.05)),O=-1.2+I*1.6,D=420-I*360;R=new $(A.x+Math.cos(O)*D,170-I*140,A.z+Math.sin(O)*D).lerp(new $(w.x-T.tx*40+T.rx*25,w.y+22,w.z-T.tz*40+T.rz*25),I*I),x=A.clone().setY(10).lerp(w,Math.min(1,I*1.3)),y=50,b=!1;break}case"startgo":{let A=new $(T.x,T.y,T.z),w=new $(T.tx,0,T.tz),I=c(w);if(_<.6)R=A.clone().addScaledVector(w,9.5+(_+3.2)*.25).addScaledVector(I,2.6).add(u.clone().multiplyScalar(1.9)),x=A.clone().add(u.clone().multiplyScalar(1.3)).addScaledVector(w,-1),y=42;else{let O=f(e.orderAt(_).slice(0,3),_);R=O.p.clone().addScaledVector(O.h,11).addScaledVector(c(O.h),3.5).add(u.clone().multiplyScalar(2.2)),x=O.p.clone().add(u.clone().multiplyScalar(1.2)),y=44}b=!1;break}case"track":case"side":{let A=f(S.ids,_),w=c(A.h),I=S.type==="side"?-1:1,O=8+Math.min(14,A.spread*.6);R=A.p.clone().addScaledVector(w,I*(O+2)).addScaledVector(A.h,3+Math.sin(L*3)*.6).add(u.clone().multiplyScalar(2.6)),x=A.p.clone().addScaledVector(A.h,1.5).add(u.clone().multiplyScalar(1.1)),y=42;break}case"front":case"final":{let A=f(S.ids,_),w=c(A.h),I=S.type==="final"?7.5-L*1.5:7;R=A.p.clone().addScaledVector(A.h,I).addScaledVector(w,S.type==="final"?1.4:-2).add(u.clone().multiplyScalar(S.type==="final"?.9:1.8)),x=A.p.clone().add(u.clone().multiplyScalar(1.35)).addScaledVector(A.h,-2),y=S.type==="final"?38:42;break}case"chase":{let A=f(S.ids,_),w=c(A.h);R=A.p.clone().addScaledVector(A.h,-7.5).addScaledVector(w,2.2).add(u.clone().multiplyScalar(3)),x=A.p.clone().addScaledVector(A.h,5).add(u.clone().multiplyScalar(1.2)),y=46;break}case"battle":{let A=f(S.ids,_),w=c(A.h),I=Math.floor(S.a*7)%2?1:-1,O=11+Math.min(10,A.spread*.7);R=A.p.clone().addScaledVector(A.h,O*.7).addScaledVector(w,I*O*.75).add(u.clone().multiplyScalar(2.3)),x=A.p.clone().add(u.clone().multiplyScalar(1.1)),y=42;break}case"drone":case"blimp":{let A=e.stateAt(_),w=A.byId[A.order[0]],I=A.order.map(P=>A.byId[P]).filter(P=>!P.finished),O=new $;for(let P of I.length?I:[w])O.add(new $(P.x,P.y,P.z));O.divideScalar(Math.max(1,I.length));let D=I.length?I[0].m-I.at(-1).m:0,B=f([A.order[0]],_),F=S.type==="blimp"?38+Math.min(50,D*.25):20+Math.min(40,D*.25),q=S.type==="blimp"?48:30+Math.min(40,D*.25),st=O.clone().lerp(new $(w.x,w.y,w.z),.5);R=st.clone().addScaledVector(B.h,-q).addScaledVector(c(B.h),q*.6).add(u.clone().multiplyScalar(F)),x=st,y=46;break}case"hill":{let A=i.anchors.hillM,w=t.sample(A+105),I=new $(w.tx,0,w.tz),O=c(I);R=new $(w.x,w.y,w.z).addScaledVector(O,6.5).add(u.clone().multiplyScalar(2.2));let D=e.stateAt(_),B=D.order.map(P=>D.byId[P]).filter(P=>t.geoOf(P.m)>A-120&&t.geoOf(P.m)<A+200&&!P.finished),F=B.length?B[0]:null,q=F?new $(F.x,F.y+1.1,F.z):new $(w.x,w.y+1,w.z);x=q;let st=R.distanceTo(q);y=lu.clamp(2*Math.atan(5.5/st)*180/Math.PI,12,50),b=!0;break}case"lapboard":{let A=i.anchors.lapBoard,w=new $;A.getWorldPosition(w);let I=t.sample(2491),O=new $(I.tx,0,I.tz),D=c(O);R=new $(I.x,I.y,I.z).addScaledVector(D,-(4.6+3)).add(u.clone().multiplyScalar(2.4));let B=e.stateAt(_),F=B.order.map(st=>B.byId[st]).filter(st=>st.m>2350&&st.m<2600),q=F.length?new $(F[0].x,F[0].y+1.2,F[0].z):w.clone().add(u.clone().multiplyScalar(2));x=w.clone().add(u.clone().multiplyScalar(1.8)).lerp(q,.45),y=46;break}case"finishcam":{let A=new $(E.tx,0,E.tz),w=c(A),I=e.stateAt(_),O=S.ids?.[0]??I.order[0],D=I.byId[O];R=new $(E.x,E.y,E.z).addScaledVector(A,16).addScaledVector(w,-4).add(u.clone().multiplyScalar(2.6));let B=new $(E.x,E.y+2.5,E.z),F=D&&!D.finished?new $(D.x,D.y+1.3,D.z):B;x=B.clone().lerp(F,D&&!D.finished?Math.min(.85,15/Math.max(15,D.distToFinish)):.3),y=D&&!D.finished&&D.distToFinish>30?30:40;break}case"celebrate":{let A=e.stateAt(_),w=new $;for(let B of A.order)w.add(new $(A.byId[B].x,A.byId[B].y,A.byId[B].z));w.divideScalar(A.order.length);let I=new $(E.tx,0,E.tz),O=c(I),D=Math.sin(_*.15)*.5;R=w.clone().addScaledVector(I,-10*Math.cos(D)).addScaledVector(O,10*Math.sin(D)).add(u.clone().multiplyScalar(2.6)),x=w.clone().add(u.clone().multiplyScalar(1.2)),y=46,b=!1;break}case"photo":{let A=new $(E.tx,0,E.tz),w=c(A);R=new $(E.x,E.y,E.z).addScaledVector(w,8.5).add(u.clone().multiplyScalar(1.3)),x=new $(E.x,E.y+1.1,E.z),y=40,b=!1;break}case"distracted":{let A=f(S.ids,_),w=c(A.h),I=i.anchors.nearestOnRibbon(A.p.x,A.p.z),O=Math.sign((I[0]-A.p.x)*w.x+(I[1]-A.p.z)*w.z)||1,D=w.clone().multiplyScalar(O),B=_-S.a;if(B<2.6&&s){let F=s.anchors.rides[0].pos,q=B/2.6,st=new $(F.x-A.p.x,0,F.z-A.p.z).normalize();R=A.p.clone().addScaledVector(A.h,-18+q*2).addScaledVector(st,-4).add(u.clone().multiplyScalar(13-q*2)),x=new $(F.x,A.p.y+8,F.z).lerp(A.p.clone().add(u),.45+q*.2),y=54,b=!1}else if(L<.62){let F=A.h.clone().multiplyScalar(.55).addScaledVector(D,.85).normalize();R=A.p.clone().addScaledVector(F,5.2).add(u.clone().multiplyScalar(2)),x=A.p.clone().add(u.clone().multiplyScalar(1.85)),y=46}else R=A.p.clone().addScaledVector(A.h,-12).addScaledVector(D,-9).add(u.clone().multiplyScalar(7.5)),x=A.p.clone().addScaledVector(D,10).add(u.clone().multiplyScalar(2.5)),y=52;break}default:{let A=f(S.ids||[],_);R=A.p.clone().addScaledVector(A.h,-10).add(u.clone().multiplyScalar(4)),x=A.p.clone()}}return{pos:R,look:x,fov:y,damp:b}}let M=0;function m(S,_,v){let L=v.find(y=>S>=y.a&&S<y.b)||v.at(-1),E=L.type==="distracted"?S-L.a<2.6?0:(S-L.a)/(L.b-L.a)<.62?1:2:0,T=L!==a||E!==M;M=E,a=L;let R=d(L,S,_);if(!R)return{shot:L,cut:T};let x=t.heightAt(R.pos.x,R.pos.z)+.8;if(R.pos.y<x&&(R.pos.y=x),T||!o.init||!R.damp)r.pos.copy(R.pos),r.look.copy(R.look),o.fov=R.fov,o.init=!0;else{let y=1-Math.exp(-4.5*_),b=r.pos.clone().sub(r.look),A=R.pos.clone().sub(R.look);b.lerp(A,y),r.look.copy(R.look),r.pos.copy(r.look).add(b),o.fov+=(R.fov-o.fov)*y}return n.position.copy(r.pos),n.lookAt(r.look),Math.abs(n.fov-o.fov)>.01&&(n.fov=o.fov,n.updateProjectionMatrix()),{shot:L,cut:T}}function p(){o.init=!1,a=null}return{update:m,reset:p,evaluate:d,get shot(){return a},cam:r}}function mh(n){return n<.5?2*n*n:1-Math.pow(-2*n+2,2)/2}var sv=`
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
`,Uu=n=>`${n}<sup>${["th","st","nd","rd"][n%100>10&&n%100<14||n%10>3?0:n%10]}</sup>`,rv=n=>`${n}${["th","st","nd","rd"][n%100>10&&n%100<14||n%10>3?0:n%10]}`,ov=n=>{n=Math.max(0,n);let t=Math.floor(n/60),e=Math.floor(n%60);return`${t}:${String(e).padStart(2,"0")}`},Jr=n=>String(n??"").replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t]),av=n=>{let t=parseInt(n.slice(1),16);return(t>>16&255)*.299+(t>>8&255)*.587+(t&255)*.114>165?"#1a1420":"#ffffff"};function Fu(n,{runners:t,backedBy:e={},course:i,park:s,C:r}){if(!document.getElementById("mr-hud-css")){let pt=document.createElement("style");pt.id="mr-hud-css",pt.textContent=sv,document.head.appendChild(pt)}let o=document.createElement("div");o.className="mr-hud mr-dim",o.innerHTML=`
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
    <div class="mr-results"></div>`,n.appendChild(o);let a=pt=>o.querySelector(pt),l={};o.querySelectorAll("[data-k]").forEach(pt=>l[pt.dataset.k]=pt);let h=a(".mr-tower"),u={},g={};for(let pt of t){let V=document.createElement("div");V.className="mr-row",V.innerHTML=`<div class="mr-pos mr-num">1</div><div class="mr-card"><div class="mr-chip" style="background:${pt.colour.primary};border-right:4px solid ${pt.colour.secondary}"></div><div class="mr-name">${Jr(ir(pt))}</div><div class="mr-gap"></div></div><span class="mr-badges"></span>`,h.appendChild(V),u[pt.id]={el:V,pos:V.querySelector(".mr-pos"),gap:V.querySelector(".mr-gap"),last:""};let Z=document.createElement("div");Z.className="mr-tag",Z.innerHTML=`<span class="mr-tb"></span><span class="mr-tp mr-num"></span><span class="mr-tn" style="background:${pt.colour.primary};color:#fff">${Jr(ir(pt))}</span>`,Z.style.opacity="0",a(".mr-tags").appendChild(Z),g[pt.id]={el:Z,pos:Z.querySelector(".mr-tp"),x:0,y:0,vis:!1}}function f(pt={}){for(let V of t){let Z=(pt[V.id]||[]).filter(xt=>xt!=null&&xt!==""),H=Z.map(xt=>`<span class="mr-badge" style="--bc:${Ou(xt)}">${lv(xt)?"":"\u2605"}${Jr(String(xt)).slice(0,10)}</span>`).join(""),Lt=u[V.id].el;Lt.classList.toggle("backed",Z.length>0),Z.length?Lt.style.setProperty("--bc",Ou(Z[0])):Lt.style.removeProperty("--bc"),Lt.querySelector(".mr-badges").innerHTML=H,g[V.id].el.querySelector(".mr-tb").innerHTML=H}}f(e);let c=a(".mr-map canvas"),d=c.getContext("2d"),M=null,m=340,p=420;c.width=m,c.height=p;let S=i.points,_=1e9,v=1e9,L=-1e9,E=-1e9;for(let pt of S)_=Math.min(_,pt[0]),L=Math.max(L,pt[0]),v=Math.min(v,pt[2]),E=Math.max(E,pt[2]);if(i.funfair){let[pt,V]=i.funfair.center,Z=i.funfair.radius*.6;_=Math.min(_,pt-Z),L=Math.max(L,pt+Z),v=Math.min(v,V-Z),E=Math.max(E,V+Z)}for(let pt in r.diversions)for(let V of r.diversions[pt])for(let Z of V.path)_=Math.min(_,Z[0]),L=Math.max(L,Z[0]),v=Math.min(v,Z[1]),E=Math.max(E,Z[1]);let T=26,R=Math.min((m-T*2)/(L-_),(p-T*2)/(E-v)),x=(m-(L-_)*R)/2,y=(p-(E-v)*R)/2,b=pt=>x+(pt-_)*R,A=pt=>y+(pt-v)*R;function w(){let pt=document.createElement("canvas");pt.width=m,pt.height=p;let V=pt.getContext("2d"),Z=(K,Ot,z,k)=>{V.beginPath(),K.forEach((mt,Rt)=>Rt?V.lineTo(b(mt[0]),A(mt[1])):V.moveTo(b(mt[0]),A(mt[1]))),V.strokeStyle=Ot,V.lineWidth=z,V.lineJoin=V.lineCap="round",V.setLineDash(k||[]),V.stroke(),V.setLineDash([])},H=(K,Ot)=>{for(let z of s.features)z.kind===K&&z.closed&&(V.beginPath(),z.pts.forEach((k,mt)=>mt?V.lineTo(b(k[0]),A(k[1])):V.moveTo(b(k[0]),A(k[1]))),V.fillStyle=Ot,V.fill())},Lt=s.features.filter(K=>K.kind==="park").sort((K,Ot)=>Ot.pts.length-K.pts.length)[0];V.save(),V.beginPath(),Lt.pts.forEach((K,Ot)=>Ot?V.lineTo(b(K[0]),A(K[1])):V.moveTo(b(K[0]),A(K[1]))),V.fillStyle="#9be27a",V.fill(),V.restore(),H("water","#49a6ff"),H("track","#ff7a5c");for(let K in r.diversions)for(let Ot of r.diversions[K])Z(Ot.path,"#c79a5a",4,[6,6]);let xt=[];for(let K=0;K<=r.LAP1_END_DRAW;K+=10)xt.push(r.baseXZ(K));Z(xt,"#1a1420",11),Z(xt,"#8fa0c4",6);let bt=[];for(let K=r.MAP_TO-80;K<=r.finishM;K+=10)bt.push(r.baseXZ(K));Z(bt,"#1a1420",11),Z(bt,"#8fa0c4",6);let Bt=r.rawExt(r.finishM);return V.fillStyle="#fff",V.strokeStyle="#1a1420",V.lineWidth=3,V.fillRect(b(Bt[0])-7,A(Bt[1])-7,14,14),V.strokeRect(b(Bt[0])-7,A(Bt[1])-7,14,14),V.fillStyle="#1a1420",V.fillRect(b(Bt[0])-7,A(Bt[1])-7,7,7),V.fillRect(b(Bt[0]),A(Bt[1]),7,7),pt}M=w();function I(){M=w()}let O=0,D=a(".mr-banner");function B(pt,V="",Z="#ff3d8b",H=2.4){D.querySelector(".mr-b1 span").textContent=pt,D.querySelector(".mr-b1").style.background=Z,D.querySelector(".mr-b2").textContent=V,D.classList.remove("on"),D.offsetWidth,D.classList.add("on"),O=H}let F="";function q(pt,V){if(O>0&&(O-=pt,O<=0&&D.classList.remove("on")),!!V){if(V.raceS!=null&&(l.clock.textContent=ov(V.raceS)),V.leaderM!=null&&(l.lap.textContent=V.leaderM>=2500?"2":"1",l.dist.textContent=`${(Math.min(5e3,V.leaderM)/1e3).toFixed(1)} KM`,l.bar.style.width=`${Math.min(100,V.leaderM/5e3*100)}%`),V.order){let Z=h.clientHeight||0,H=(h.querySelector(".mr-row")?.offsetHeight||40)+6;V.order.forEach((Lt,xt)=>{let bt=u[Lt.id];if(!bt)return;bt.el.style.transform=`translateY(${xt*H}px)`;let K=`${xt}|${Lt.gapText}|${Lt.finished}`+(Lt.posHtml||"");K!==bt.last&&(bt.last=K,bt.pos.innerHTML=Lt.posHtml??Uu(xt+1),bt.gap.textContent=Lt.gapText,bt.el.classList.toggle("lead",xt===0&&!Lt.posHtml),bt.el.classList.toggle("fin",!!Lt.finished))})}if(V.tags)for(let Z of V.tags){let H=g[Z.id];H&&(Z.visible!==H.vis&&(H.vis=Z.visible,H.el.style.opacity=Z.visible?"1":"0"),Z.visible&&(H.el.style.transform=`translate(${Z.x}px, ${Z.y}px) translate(-50%,-100%) scale(${Z.scale??1})`,H.p!==Z.pos&&(H.p=Z.pos,H.pos.textContent=Z.pos?rv(Z.pos):"",H.pos.style.display=Z.pos?"":"none")))}if(V.dots){d.clearRect(0,0,m,p),d.drawImage(M,0,0);for(let Z of[...V.dots].reverse())d.beginPath(),d.arc(b(Z.x),A(Z.z),Z.lead?11:9,0,7),d.fillStyle=Z.colour,d.fill(),d.lineWidth=3.5,d.strokeStyle="#1a1420",d.stroke(),Z.focus&&(d.beginPath(),d.arc(b(Z.x),A(Z.z),15,0,7),d.strokeStyle="#fff",d.lineWidth=3,d.stroke());V.camDot&&(d.save(),d.translate(b(V.camDot.x),A(V.camDot.z)),d.rotate(V.camDot.a),d.fillStyle="rgba(26,20,32,.6)",d.beginPath(),d.moveTo(0,0),d.lineTo(-10,-22),d.lineTo(10,-22),d.fill(),d.restore())}}}function st(pt){o.classList.toggle("mr-dim",!!pt)}function P(pt){o.classList.toggle("mr-dimtop",!!pt)}function ft(){O=0,D.classList.remove("on")}function Ft(pt){let V=a(".mr-card3");if(!pt){V.classList.remove("on");return}V.querySelector(".mr-lane span").textContent=pt.lane??"",V.querySelector(".mr-lane").style.background=pt.colour.primary,V.querySelector(".mr-info").style.background=`linear-gradient(180deg, ${pt.colour.primary}, ${cv(pt.colour.primary,-.25)})`,V.querySelector(".mr-nick").textContent=pt.nickname,V.querySelector(".mr-nick").style.color="#fff",V.querySelector(".mr-tagl").textContent=pt.tagline||"",V.querySelector(".mr-tagl").style.color=av(pt.colour.primary)==="#ffffff"?"#fff":"#1a1420",V.classList.remove("on"),V.offsetWidth,V.classList.add("on")}function U(pt){let V=a(".mr-count");V.textContent=pt,V.classList.remove("pop"),V.offsetWidth,V.classList.add("pop")}function Y(pt,V=""){a(".mr-photo").classList.toggle("on",!!pt),a(".mr-pcap").textContent=V,a(".mr-pcap").style.display=V?"":"none"}function Q(pt,V="Place your halfway bets!"){a(".mr-market").classList.toggle("on",!!pt),a(".mr-market .mr-m2").textContent=V}function W(pt,{title:V="",kicker:Z="",theme:H=""}={}){let Lt=a(".mr-title");if(pt){Lt.querySelector(".mr-t0").textContent=Z,Lt.querySelector(".mr-t1").textContent=V;let xt=Lt.querySelector(".mr-t2");xt.textContent=H,xt.style.display=H?"":"none",Lt.querySelector(".mr-t0").style.display=Z?"":"none"}Lt.classList.toggle("on",!!pt)}function lt(pt,V){let Z=V[0]-pt[0],H=V[1]-pt[1],Lt=Math.hypot(Z,H)||1,xt=Z/Lt,bt=H/Lt,Bt=pt[0]-xt*Lt*.6,K=pt[1]-bt*Lt*.6,Ot=a(".mr-photo .mr-line");Ot.style.width=`${Lt*2.2}px`,Ot.style.transform=`translate(${Bt}px, ${K}px) rotate(${Math.atan2(bt,xt)}rad)`}function ot(pt){let V=a(".mr-results");if(!pt){V.classList.remove("on");return}V.innerHTML='<div class="mr-panel mr-rh"><div class="mr-unskew">RESULTS</div></div>'+pt.map(Z=>`<div class="mr-rr"><span class="mr-num">${Uu(Z.place)}</span><span style="width:calc(var(--u)*1.2);height:calc(var(--u)*2.2);background:${Z.colour};border:2px solid #1a1420;border-radius:4px"></span><span>${Jr(Z.nickname)}</span><span class="mr-t">${Jr(Z.timeText||"")}</span></div>`).join(""),requestAnimationFrame(()=>V.classList.add("on"))}function wt(){o.remove()}return{root:o,update:q,setBackedBy:f,redrawMap:I,showBanner:B,clearBanner:ft,setDim:st,setDimTop:P,introCard:Ft,countdown:U,photo:Y,photoLine:lt,results:ot,market:Q,titleCard:W,dispose:wt}}function ir(n){if(n.shortName)return n.shortName;let t=String(n.nickname||n.id).replace(/^the\s+/i,"");if(t.length<=14)return t;let e=t.split(/\s+/),i=e.slice(-2).join(" ");return i.length<=14?i:e.at(-1).slice(0,14)}var Nu=["#ffd23f","#ff8fc8","#7fe0ff","#9dff8a","#ffb067","#c7a6ff"],Da=new Map;function Ou(n){return Da.has(n)||Da.set(n,Da.size),Nu[Da.get(n)%Nu.length]}var lv=n=>/\p{Extended_Pictographic}/u.test(String(n));function cv(n,t){let e=parseInt(n.slice(1),16),i=e>>16&255,s=e>>8&255,r=e&255,o=a=>Math.max(0,Math.min(255,Math.round(t<0?a*(1+t):a+(255-a)*t)));return`rgb(${o(i)},${o(s)},${o(r)})`}var Ua=(n,t,e=12,i=!0)=>on(256,256,(s,r,o)=>{for(let a=0;a<e;a++)s.fillStyle=a%2?n:t,i?s.fillRect(a*r/e,0,r/e+1,o):s.fillRect(0,a*o/e,r,o/e+1)});function Bu(n,t,e,i){let s=Rn(42),r=new fe;n.add(r);let o=[],a=[],l=(A,w=3)=>(Jn(A,w,void 0,30),A),h=(A,w,I=3)=>_e(A,w,{ol:I,olRef:30}),u=[];for(let A=0;A<i.path.length;A++){let w=i.path[A],I=e.anchors.nearestOnRibbon(w[0],w[1]),O=Math.hypot(w[0]-I[0],w[1]-I[1]);u.push({x:(w[0]+I[0])/2,z:(w[1]+I[1])/2,gap:O})}let g=0;u.forEach((A,w)=>{w&&(g+=Math.hypot(A.x-u[w-1].x,A.z-u[w-1].z)),A.s=g});let f=g,c=A=>{let w=0;for(;w<u.length-2&&u[w+1].s<A;)w++;let I=u[w],O=u[w+1],D=Math.max(0,Math.min(1,(A-I.s)/Math.max(1e-6,O.s-I.s))),B=I.x+(O.x-I.x)*D,F=I.z+(O.z-I.z)*D,q=Math.hypot(O.x-I.x,O.z-I.z)||1;return{x:B,z:F,gap:I.gap+(O.gap-I.gap)*D,tx:(O.x-I.x)/q,tz:(O.z-I.z)/q,y:t.heightAt(B,F)}},d=u.filter(A=>A.gap>26),M=d.length?d[0].s:f*.25,m=d.length?d.at(-1).s:f*.75,p=A=>Array.from({length:A},(w,I)=>c(M+(I+.5)/A*(m-M))),S=(A,w,I=0)=>(A.position.set(w.x,w.y-.1,w.z),A.rotation.y=Math.atan2(w.tx,w.tz)+I,r.add(A),A),_={center:c((M+m)/2),rides:[]},v=p(7);{let A=v.slice(1,6).sort((W,lt)=>lt.gap-W.gap)[0],w=new fe,I=17,O=I+2.6,D=new he(.35,.5,O/Math.cos(.32)+1,8);for(let W of[-1,1])for(let lt of[-1,1]){let ot=h(D,gt("#ffffff"));ot.position.set(W*1.8,O/2,lt*Math.tan(.32)*O/2),ot.rotation.x=-lt*.32,w.add(ot)}let B=h(new be(6,1,8,2,.3),gt("#2e9bff"));B.position.y=.5,w.add(B);let F=new fe;F.position.y=O,w.add(F);let q=h(new Je(I,.45,8,64),gt("#ff3d8b"));q.rotation.y=Math.PI/2,q.position.x=1.2,F.add(q);let st=h(new Je(I,.45,8,64),gt("#ff3d8b"));st.rotation.y=Math.PI/2,st.position.x=-1.2,F.add(st);let P=h(new he(1.3,1.3,3.2,16).rotateZ(Math.PI/2),gt("#ffd23f"));F.add(P);let ft=16,Ft=[],U=[];for(let W=0;W<ft;W++){let lt=W/ft*Math.PI*2,ot=h(new Te(.18,I,.18).translate(0,I/2,0),gt("#ffffff"),2);ot.rotation.x=lt,ot.position.x=1.2,F.add(ot);let wt=ot.clone();wt.position.x=-1.2,F.add(wt);let pt=new fe;pt.position.set(0,Math.cos(lt)*I,Math.sin(lt)*I),F.add(pt);let V=new fe;pt.add(V);let Z=["#ffd23f","#3ddc84","#2e9bff","#ff8a3d","#b07bff"][W%5],H=h(new be(1.7,1.3,1.5,2,.35),gt(Z));H.position.y=-1.3,V.add(H);let Lt=h(new qe(1.2,.7,4).rotateY(Math.PI/4),gt("#ffffff"),2);Lt.position.y=-.1,V.add(Lt),Ft.push(pt);for(let xt=0;xt<3;xt++){let bt=lt+xt/3*(Math.PI*2/ft);U.push([1.2,Math.cos(bt)*I,Math.sin(bt)*I],[-1.2,Math.cos(bt)*I,Math.sin(bt)*I])}}let Y=new en(new ye(.32,8,6),new Un({color:16777215}),U.length),Q=new De;U.forEach((W,lt)=>{Q.position.set(...W),Q.updateMatrix(),Y.setMatrixAt(lt,Q.matrix),Y.setColorAt(lt,new oe(["#fff27a","#ff7ac8","#7affff"][lt%3]))}),F.add(Y),S(w,A,0),a.push(W=>{F.rotation.x=W*.18;for(let lt of Ft)lt.rotation.x=-W*.18}),_.rides.push({kind:"wheel",obj:w,pos:new $(A.x,A.y+O,A.z),r:I}),A.used=!0}{let A=v.filter(U=>!U.used).sort((U,Y)=>Y.gap-U.gap)[0];A.used=!0;let w=new fe,I=Math.min(6.5,A.gap*.28);w.scale.setScalar(1.45);let O=Ua("#ffffff","#ff4f6d",16);o.push(O);let D=h(new he(I,I+.3,.9,32),gt("#ffffff",{map:O}));D.position.y=.45,w.add(D);let B=new fe;w.add(B);let F=h(new he(.7,.7,5,16),gt("#ffd23f"));F.position.y=3,B.add(F);let q=Ua("#ffd23f","#ff3d8b",16);o.push(q);let st=h(new qe(I+.8,2.8,16),gt("#ffffff",{map:q}));st.position.y=6.6,B.add(st);let P=h(new he(I+.8,I+.8,.7,16,1,!0),gt("#2e9bff",{side:je}));P.position.y=4.9,B.add(P);let ft=h(new ye(.5,12,8),gt("#ff3d8b"));ft.position.y=8.2,B.add(ft);let Ft=[];for(let U=0;U<8;U++){let Y=U/8*Math.PI*2,Q=I*.72,W=new fe;W.position.set(Math.cos(Y)*Q,0,Math.sin(Y)*Q),W.rotation.y=-Y,B.add(W);let lt=h(new he(.06,.06,4.2,6),gt("#ffd23f"),1.5);lt.position.y=2.9,W.add(lt);let ot=new fe;W.add(ot);let wt=["#ffffff","#ffd6f0","#d6f0ff","#fff2b0"][U%4],pt=h(new be(.7,.7,1.6,2,.3),gt(wt));ot.add(pt);let V=h(new be(.45,.9,.5,2,.2),gt(wt));V.position.set(0,.55,.7),V.rotation.x=.4,ot.add(V);let Z=h(new be(.45,.45,.8,2,.2),gt(wt));Z.position.set(0,.95,1.05),ot.add(Z);let H=h(new be(.15,.8,.3,1,.06),gt(["#ff3d8b","#2e9bff","#3ddc84","#ff8a3d"][U%4]),2);H.position.set(0,.75,.55),H.rotation.x=.4,ot.add(H);let Lt=h(new be(.75,.2,.6,1,.08),gt("#ff3d8b"),2);Lt.position.y=.4,ot.add(Lt);for(let[xt,bt]of[[-.22,.55],[.22,.55],[-.22,-.55],[.22,-.55]]){let Bt=h(new Te(.16,.7,.16),gt(wt),1.5);Bt.position.set(xt,-.55,bt),Bt.rotation.x=bt>0?-.5:.5,ot.add(Bt)}ot.rotation.y=Math.PI/2,Ft.push({horse:ot,ph:U*.8})}S(w,A),a.push(U=>{B.rotation.y=U*.6;for(let Y of Ft)Y.horse.position.y=2+Math.sin(U*2.2+Y.ph)*.35}),_.rides.push({kind:"carousel",obj:w,pos:new $(A.x,A.y+6,A.z),r:I*1.45})}{let A=v.filter(U=>!U.used).sort((U,Y)=>Y.gap-U.gap)[0];A.used=!0;let w=new fe,I=15;w.scale.setScalar(1.5);let O=Ua("#ff3d3d","#ffffff",10,!1);o.push(O);let D=h(new he(1.6,2.6,I,16),gt("#ffffff",{map:O}));D.position.y=I/2,w.add(D);let B=h(new qe(2.6,3.4,16),gt("#2e9bff"));B.position.y=I+1.7,w.add(B);let F=h(new he(.06,.06,2,6),gt("#ffffff"),1.5);F.position.y=I+4.2,w.add(F);let q=h(new fn(1.2,.7).translate(.6,0,0),gt("#ffd23f",{side:je}),1.5);q.position.y=I+4.8,w.add(q);let st=[],P=3.2;for(let U=0;U<=160;U++){let Y=U/160,Q=Y*P*Math.PI*2,W=2.6+(1-Y)*-.8+1.6;st.push(new $(Math.cos(Q)*W,I-1-Y*(I-2),Math.sin(Q)*W))}let ft=h(new Ma(new Fr(st),220,.55,8,!1),gt("#ffd23f"));ft.scale.y=1,w.add(ft);let Ft=h(new be(3,.3,2,2,.1),gt("#3ddc84"),2);Ft.position.set(st.at(-1).x+1,.15,st.at(-1).z),w.add(Ft),S(w,A),a.push(U=>{q.rotation.y=Math.sin(U*3)*.4}),_.rides.push({kind:"helter",obj:w,pos:new $(A.x,A.y+12,A.z),r:6})}let L=[["CANDYFLOSS","#ff9bd2"],["HOOK-A-DUCK","#57c7ff"],["DOUGHNUTS","#ffb347"],["COCONUT SHY","#8ee86b"],["TOFFEE APPLES","#ff5d5d"],["HOOK-A-DUCK","#57c7ff"]],E=[];[...v.filter(A=>!A.used),...p(13).filter((A,w)=>w%2===1)].slice(0,7).forEach((A,w)=>{let[I,O]=L[w%L.length],D=new fe,B=w%2?1:-1,F=h(new be(4.2,2.4,3,2,.2),gt("#fff6e0"));F.position.y=1.2,D.add(F);let q=h(new be(4.4,1.1,.8,2,.15),gt(O));q.position.set(0,.55,1.7),D.add(q);let st=Ua("#ffffff",O,10);o.push(st);let P=h(new Te(4.8,.18,2.4),gt("#ffffff",{map:st}));P.position.set(0,2.9,1.4),P.rotation.x=.32,D.add(P);for(let lt of[-1,1]){let ot=h(new he(.09,.09,2.6,6),gt("#ffffff"),1.5);ot.position.set(lt*2.2,1.6,2.4),D.add(ot)}let ft=Kn(512,128,(lt,ot,wt)=>{lt.fillStyle="#1a1420",Ye(lt,0,0,ot,wt,30),lt.fill(),lt.fillStyle=O,Ye(lt,8,8,ot-16,wt-16,24),lt.fill(),an(lt,I,ot/2,wt/2+4,I.length>11?52:64,"#ffffff","#1a1420",.2)},o),Ft=_e(new be(4.2,1.05,.3,2,.1),[gt(O),gt(O),gt(O),gt(O),gt("#ffffff",{map:ft}),gt("#ffffff",{map:ft})],{ol:2.5,olRef:30});if(Ft.position.set(0,3.7,.4),D.add(Ft),I==="CANDYFLOSS")for(let lt=0;lt<4;lt++){let ot=h(new nn(.32,1),gt("#ff9bd2"),1.5);ot.position.set(-1.4+lt*.9,1.45,1.75),D.add(ot)}if(I==="HOOK-A-DUCK"){let lt=h(new he(1.6,1.6,.6,20),gt("#57c7ff"),2);lt.position.set(0,.3,3.6),D.add(lt);let ot=new fe;ot.position.set(0,.7,3.6),D.add(ot);for(let wt=0;wt<6;wt++){let pt=wt/6*Math.PI*2,V=h(new ye(.22,10,8),gt("#ffd23f"),1.5);V.position.set(Math.cos(pt)*1.1,0,Math.sin(pt)*1.1);let Z=h(new ye(.14,8,6),gt("#ffd23f"),1.2);Z.position.set(0,.22,.12),V.add(Z),ot.add(V)}E.push(ot)}let U=e.anchors.nearestOnRibbon(A.x,A.z),Y=Math.atan2(U[0]-A.x,U[1]-A.z),Q=Math.min(A.gap*.3,7)*B,W=S(D,{...A,x:A.x+A.tz*Q,z:A.z-A.tx*Q,y:t.heightAt(A.x+A.tz*Q,A.z-A.tx*Q)});W.rotation.y=Y+(B>0?0:Math.PI)*0}),a.push(A=>{for(let w of E)w.rotation.y=A*.8});{let A=[],w=[],I=[],O=[],D=[];for(let ft of[-1,1]){let Ft=null;for(let U=M-10;U<=m+10;U+=9){let Y=c(U),Q=(Y.gap/2-6)*ft,W=Y.x+Y.tz*Q,lt=Y.z-Y.tx*Q,ot=t.heightAt(W,lt),wt=new $(W,ot+4.2,lt),pt=h(new he(.08,.1,4.3,6),gt("#ffffff"),1.5);if(pt.position.set(W,ot+2.1,lt),r.add(pt),Ft)for(let V=0;V<=10;V++){let Z=V/10,H=Ft.clone().lerp(wt,Z);H.y-=Math.sin(Z*Math.PI)*.7,A.push(H),V<10&&(V%2?(w.push(H.clone()),I.push(["#fff27a","#ff7ac8","#7affff","#9dff7a"][(V+Math.round(U))%4])):(O.push({v:H.clone(),a:Math.atan2(-(wt.z-Ft.z),wt.x-Ft.x)}),D.push(["#ff3d8b","#ffd23f","#2e9bff","#3ddc84","#ff8a3d"][(V+Math.round(U/9))%5])))}Ft=wt}}let B=new De,F=new en(new ye(.16,8,6),new Un({color:16777215}),w.length);w.forEach((ft,Ft)=>{B.position.copy(ft),B.updateMatrix(),F.setMatrixAt(Ft,B.matrix),F.setColorAt(Ft,new oe(I[Ft]))}),r.add(F);let q=new Ue;q.setAttribute("position",new me([-.32,0,0,.32,0,0,0,-.65,0],3)),q.setAttribute("normal",new me([0,0,1,0,0,1,0,0,1],3));let st=new en(q,gt("#ffffff",{side:je}),O.length);O.forEach((ft,Ft)=>{B.position.copy(ft.v),B.rotation.set(0,ft.a,0),B.updateMatrix(),st.setMatrixAt(Ft,B.matrix),st.setColorAt(Ft,new oe(D[Ft]))}),r.add(st);let P=[];for(let ft=0;ft+1<A.length;ft++)A[ft].distanceTo(A[ft+1])<3&&P.push(A[ft],A[ft+1]);r.add(new Ks(new Ue().setFromPoints(P),new cs({color:3355443}))),a.push(ft=>{F.material.color.setScalar(.85+.15*Math.sin(ft*6))})}{let A=c(M-4),w=Kn(1024,256,(O,D,B)=>{O.fillStyle="#1a1420",Ye(O,0,0,D,B,60),O.fill(),O.fillStyle="#ff3d8b",Ye(O,10,10,D-20,B-20,52),O.fill(),an(O,"\u2605 FUNFAIR \u2605",D/2,B/2+6,120,"#ffe14d","#1a1420",.18)},o),I=_e(new be(10,2.4,.4,2,.15),[gt("#ff3d8b"),gt("#ff3d8b"),gt("#ff3d8b"),gt("#ff3d8b"),gt("#ffffff",{map:w}),gt("#ffffff",{map:w})],{ol:3,olRef:30});I.position.set(A.x,A.y+7.5,A.z),I.rotation.y=Math.atan2(A.tx,A.tz)+Math.PI/2,r.add(I);for(let O of[-1,1]){let D=h(new he(.25,.3,7.6,8),gt("#ffd23f"));D.position.set(A.x+A.tz*4.5*O,A.y+3.8,A.z-A.tx*4.5*O),r.add(D)}}let R=[];for(let A=0;A<60;A++){let w=M+s()*(m-M),I=c(w),O=(s()-.5)*(I.gap-16),D=I.x+I.tz*O,B=I.z-I.tx*O;R.push({x:D,y:t.heightAt(D,B),z:B,yaw:s()*6.28})}function x(A,w){for(let I of u){if(I.s<M-20||I.s>m+20)continue;let O=Math.max(6,I.gap/2-4);if((A-I.x)**2+(w-I.z)**2<O*O)return!0}return!1}function y(A){for(let w of a)w(A)}function b(){r.traverse(A=>{A.geometry&&A.geometry.dispose()});for(let A of o)A.dispose?.();n.remove(r)}return{group:r,update:y,dispose:b,anchors:_,crowd:R,at:c,s0:M,s1:m,contains:x}}function zu(n,t,e,i,s,{camera:r,offsetX:o=3.2}){let a=new fe;n.add(a);let l=[],h=t.sample(t.finishM+28),u=new $(h.tx,0,h.tz),g=new $(h.rx,0,h.rz),f=new $(h.x,t.heightAt(h.x,h.z),h.z),c=Math.atan2(u.x,u.z);a.position.copy(f),a.rotation.y=c;let d=[{place:2,x:-2.3,hgt:1.3,col:"#c9d3e6"},{place:1,x:0,hgt:1.9,col:"#ffd23f"},{place:3,x:2.3,hgt:.9,col:"#e59a5c"}];for(let w of d){let I=Kn(256,256,(D,B,F)=>{D.fillStyle="#2e6fe0",D.fillRect(0,0,B,F),D.fillStyle=w.col,D.fillRect(0,0,B,26),an(D,String(w.place),B/2,F/2+14,170,w.col,"#1a1420",.16)},l),O=_e(new be(2.25,w.hgt,2,3,.12),[gt("#2e6fe0"),gt("#2e6fe0"),gt(w.col),gt("#2e6fe0"),gt("#ffffff",{map:I}),gt("#2e6fe0")],{ol:3.5,olRef:12});O.position.set(w.x,w.hgt/2,0),a.add(O),w.top=w.hgt}let M=Kn(1024,256,(w,I,O)=>{w.fillStyle="#1a1420",Ye(w,0,0,I,O,50),w.fill(),w.fillStyle="#ff3d8b",Ye(w,10,10,I-20,O-20,42),w.fill(),an(w,"MARKRUN CHAMPIONS",I/2,O/2+6,80,"#ffffff","#1a1420",.16)},l),m=_e(new be(9,2.2,.3,2,.1),[gt("#ff3d8b"),gt("#ff3d8b"),gt("#ff3d8b"),gt("#ff3d8b"),gt("#ffffff",{map:M}),gt("#ffffff",{map:M})],{ol:3,olRef:14});m.position.set(0,5.6,-2.4),a.add(m);for(let w of[-1,1]){let I=_e(new he(.14,.16,5.6,8),gt("#ffffff"),{ol:2,olRef:14});I.position.set(w*4.3,2.8,-2.4),a.add(I)}let p=s.length,S=[];for(let w of s){let I=i[w.runnerId];if(!I)continue;let O=d.find(F=>F.place===w.place),D=O?new $(O.x,O.top,.1):null,B;if(w.place===1?B=["celebrate","jump"]:w.place===2?B=["pose","flex"]:w.place===3?B=["celebrate","fist"]:w.place===p&&p>3?B=["celebrate","collapse"]:B=["celebrate","shrug"],!D){S.push({rr:I,o:w,pose:B});continue}_(I,D,B)}S.forEach((w,I)=>{let O=I%2?1:-1,D=Math.floor(I/2),B=w.pose[1]==="collapse",F=new $(O*(B?4.6:4.2+D*1.6),0,B?1.6:.6+D*.8);_(w.rr,F,w.pose,B?-O*Math.PI/2:0)});function _(w,I,O,D=0){let B=I.clone().applyAxisAngle(new $(0,1,0),c).add(f);I.y===0&&(B.y=t.heightAt(B.x,B.z)+.05),w.root.position.copy(B),w.root.rotation.set(0,c+D,0),w.set(...O),w.setPop(null)}let v=Rn(3),L=420,E=new en(new fn(.16,.26),new Un({side:je}),L),T=[],R=["#ff3d8b","#ffd23f","#2e9bff","#3ddc84","#ff8a3d","#ffffff","#b07bff"];for(let w=0;w<L;w++)T.push({x:(v()-.5)*14,y:v()*12,z:(v()-.5)*8,vy:1+v()*1.6,sp:v()*6,ph:v()*6.28}),E.setColorAt(w,new oe(R[w%R.length]));E.frustumCulled=!1,a.add(E);let x=new De,y=0;function b(w,I){y+=w;for(let q=0;q<L;q++){let st=T[q];st.y-=st.vy*w,st.y<0&&(st.y+=12),x.position.set(st.x+Math.sin(y*1.3+st.ph)*.5,st.y,st.z+Math.cos(y+st.ph)*.4),x.rotation.set(y*st.sp+st.ph,y*st.sp*.7,st.ph),x.updateMatrix(),E.setMatrixAt(q,x.matrix)}E.instanceMatrix.needsUpdate=!0;let O=Math.sin(y*.18)*.4,D=15-Math.min(2.5,y*.2),B=new $(Math.sin(O)*D,3+Math.sin(y*.3)*.3,Math.cos(O)*D).applyAxisAngle(new $(0,1,0),c);r.position.copy(f).add(B);let F=new $(o,2.2,0).applyAxisAngle(new $(0,1,0),c).add(f);r.lookAt(F),r.fov!==42&&(r.fov=42,r.updateProjectionMatrix())}function A(){a.traverse(w=>{w.geometry&&w.geometry.dispose()}),E.material.dispose();for(let w of l)w.dispose?.();n.remove(a)}return{update:b,dispose:A,center:f}}var Ge=(n,t)=>{n=n.index?n.toNonIndexed():n;let e=new oe(t).convertSRGBToLinear(),i=n.getAttribute("position").count,s=new Float32Array(i*3);for(let r=0;r<i;r++)s[r*3]=e.r,s[r*3+1]=e.g,s[r*3+2]=e.b;return n.setAttribute("color",new $e(s,3)),n.getAttribute("uv")&&n.deleteAttribute("uv"),n},pn=(n,t,e,i,s=0,r=1.6)=>(n.scale(r,r,r),n.rotateY(s),n.translate(t,e,i),n);function Hu(n,t,e,i){let s=Rn(777),r=new fe;n.add(r);let o=[],a=[],l=(d,M)=>`lawn:${Math.floor(d/140)},${Math.floor(M/140)}`,h=(d,M,m,p=.8,S)=>a.push({x:d,y:t.heightAt(d,M),z:M,yaw:m,scale:p,colour:S,zone:l(d,M)}),{ribbonSamples:u}=e.anchors;function g(d,M,m){for(let p=0;p<40;p++){let S=u[Math.floor(s()*u.length)],_=s()*Math.PI*2,v=d+s()*(M-d),L=S[0]+Math.cos(_)*v,E=S[1]+Math.sin(_)*v;if(!(!e.inPark(L,E)||e.blocked(L,E,m+1)||!e.clearOf(L,E,m)||e.onPath(L,E,m+2)))return e.reserve(L,E,m),{x:L,z:E,y:t.heightAt(L,E),toPath:Math.atan2(S[0]-L,S[1]-E)}}return null}{let d=[],M=["#ff5d8f","#ffd23f","#2e9bff","#3ddc84","#ff8a3d","#b07bff"],m=(E,T,R,x,y,b)=>{d.push(pn(Ge(new Te(1.6,.2,1.6).translate(0,2,0),y),E,T,R,x));for(let[I,O]of[[-.7,-.7],[.7,-.7],[-.7,.7],[.7,.7]])d.push(pn(Ge(new he(.08,.08,2,6).translate(I,1,O),"#ffffff"),E,T,R,x));d.push(pn(Ge(new qe(1.25,1,4).rotateY(Math.PI/4).translate(0,2.6,0),b),E,T,R,x));let A=new Te(.9,.12,3.3);A.rotateX(-.62),A.translate(0,1.05,2.1),d.push(pn(Ge(A,b),E,T,R,x));let w=new Te(.8,.08,2.4);w.rotateX(1),w.translate(0,1,-1.3),d.push(pn(Ge(w,"#ffffff"),E,T,R,x))},p=(E,T,R,x,y)=>{for(let b of[-1.8,1.8])for(let A of[-.6,.6]){let w=new he(.08,.08,2.8,6);w.rotateX(A>0?.22:-.22),w.translate(b,1.35,A*.5),d.push(pn(Ge(w,y),E,T,R,x))}d.push(pn(Ge(new he(.1,.1,3.8,8).rotateZ(Math.PI/2).translate(0,2.7,0),y),E,T,R,x));for(let b of[-.8,.8]){d.push(pn(Ge(new Te(.6,.08,.35).translate(b,.75,0),"#22202c"),E,T,R,x));for(let A of[-.25,.25])d.push(pn(Ge(new he(.02,.02,1.9,4).translate(b+A,1.7,0),"#888888"),E,T,R,x))}},S=(E,T,R,x)=>{let y=new ye(1.6,8,5,0,Math.PI*2,0,Math.PI/2);d.push(pn(Ge(y,x),E,T,R)),d.push(pn(Ge(new he(.4,.4,.5,8).translate(0,1.7,0),"#ffffff"),E,T,R))},_=(E,T,R,x,y)=>{d.push(pn(Ge(new he(1.5,1.5,.25,16).translate(0,.35,0),x),E,T,R)),d.push(pn(Ge(new he(.1,.1,1,6).translate(0,.9,0),y),E,T,R)),d.push(pn(Ge(new Je(.9,.06,6,16).rotateX(Math.PI/2).translate(0,1.2,0),y),E,T,R))},v=(E,T,R,x,y)=>{d.push(pn(Ge(new ye(.45,10,8).scale(1,.9,1.4).translate(0,.95,0),y),E,T,R,x)),d.push(pn(Ge(new ye(.3,8,6).translate(0,1.4,.55),y),E,T,R,x)),d.push(pn(Ge(new he(.12,.12,.6,6).translate(0,.3,0),"#888888"),E,T,R,x))},L=[m,p,S,_,v];for(let E of i.features){if(E.kind!=="playground"||!E.closed)continue;let T=On(E.pts),R=(T[2]-T[0])*(T[3]-T[1]),x=Math.max(1,Math.min(9,Math.round(R/380))),y=[];for(let b=0,A=0;b<x&&A<80;A++){let w=T[0]+3+s()*(T[2]-T[0]-6),I=T[1]+3+s()*(T[3]-T[1]-6);if(!nr(E.pts,w,I)||y.some(st=>Math.hypot(st[0]-w,st[1]-I)<8.5))continue;y.push([w,I]),b++;let O=t.heightAt(w,I)-.05,D=s()*6.28,B=M[Math.floor(s()*M.length)],F=M[Math.floor(s()*M.length)],q=L[(b+y.length+Math.floor(s()*5))%L.length];q===m||q===p||q===v?q(w,O,I,D,B,F):q(w,O,I,B,F),s()<.6&&h(w+2.5,I+1.5,s()*6,.55)}}if(d.length){let E=_e(Qe(d),gt("#ffffff",{vertexColors:!0}),{ol:2,olRef:30});r.add(E)}}{let d=on(64,64,(R,x,y)=>{for(let b=0;b<6;b++)for(let A=0;A<6;A++)R.fillStyle=(b+A)%2?"#ffffff":"#c8c8c8",R.fillRect(b*x/6,A*y/6,x/6+1,y/6+1)});o.push(d);let M=new fn(2.8,2.2);M.rotateX(-Math.PI/2);let m=[],p=[],S=[],_=["#ff4f6d","#2e9bff","#3ddc84","#ffd23f","#ff8a3d","#b07bff"];for(let R=0;R<90;R++){let x=g(12,70,3);if(!x)continue;let y=s()*6.28;m.push({x:x.x,y:x.y+.06,z:x.z,ry:y}),p.push(_[R%_.length]),S.push({x:x.x+Math.cos(y)*.7,y:x.y+.05,z:x.z-Math.sin(y)*.7,ry:y});let b=1+Math.floor(s()*3);for(let A=0;A<b;A++){let w=y+A/b*Math.PI*2+.5,I=x.x+Math.cos(w)*.9,O=x.z-Math.sin(w)*.9;h(I,O,x.toPath+(s()-.5),.62+s()*.15)}}let v=new en(M,gt("#ffffff",{map:d,polygonOffset:!0,polygonOffsetFactor:-1}),m.length),L=new De;m.forEach((R,x)=>{L.position.set(R.x,R.y,R.z),L.rotation.set(0,R.ry,0),L.updateMatrix(),v.setMatrixAt(x,L.matrix),v.setColorAt(x,new oe(p[x]))}),v.receiveShadow=!0,v.computeBoundingSphere(),r.add(v),e.registerInstanced(v,m);let E=Qe([Ge(new be(.7,.45,.5,2,.08).translate(0,.22,0),"#c98a4a"),Ge(new Je(.25,.04,6,12,Math.PI).translate(0,.45,0),"#8a5a36")]),T=new en(E,gt("#ffffff",{vertexColors:!0}),S.length);S.forEach((R,x)=>{L.position.set(R.x,R.y,R.z),L.rotation.set(0,R.ry,0),L.updateMatrix(),T.setMatrixAt(x,L.matrix)}),T.castShadow=!0,T.computeBoundingSphere(),Jn(T,1.6,void 0,20),r.add(T),e.registerInstanced(T,S)}{let d=Qe([new Yn(.22,.5,4,8).rotateX(Math.PI/2).translate(0,.45,0),new ye(.22,10,8).translate(0,.72,.42),new ye(.1,6,5).scale(.6,1.4,.6).translate(-.14,.86,.36),new ye(.1,6,5).scale(.6,1.4,.6).translate(.14,.86,.36),new ye(.09,6,5).translate(0,.66,.64),...[[-.13,.25],[.13,.25],[-.13,-.25],[.13,-.25]].map(([R,x])=>new he(.06,.06,.32,6).translate(R,.16,x)),new he(.04,.03,.35,5).rotateX(-.9).translate(0,.6,-.42)].map(R=>R.index?R.toNonIndexed():R).map(R=>(R.deleteAttribute("uv"),R))),M=Qe([Ge(new ye(.55,12,8,0,Math.PI*2,Math.PI*.45,Math.PI*.55).scale(1,.8,1.3).translate(0,.95,0),"#ffffff"),Ge(new ye(.56,12,8,Math.PI,Math.PI,0,Math.PI*.5).scale(1,.9,.9).translate(0,.95,-.2),"#ffffff"),...[[-.45,.45],[.45,.45],[-.45,-.45],[.45,-.45]].map(([R,x])=>Ge(new Je(.2,.06,6,12).rotateY(Math.PI/2).translate(R,.22,x),"#22202c")),Ge(new he(.03,.03,.9,5).rotateX(.6).translate(0,1.15,-.85),"#22202c")]),m=[],p=[],S=[],_=[],v=["#c98a4a","#3b2a20","#f2e6d0","#8a8a8a","#e0b070","#ffffff"];for(let R=0;R<64;R++){let x=g(8,60,1.6);if(!x)continue;let y=s()*6.28;h(x.x,x.z,y,.82);let b=Math.sin(y),A=Math.cos(y);R%4===3?(S.push({x:x.x+b*1.4,y:x.y,z:x.z+A*1.4,ry:y,s:1}),_.push(["#ffb3c7","#b3dcff","#c8f0b0","#fff0a0"][R%4])):(m.push({x:x.x+b*1.6+A*.8,y:x.y,z:x.z+A*1.6-b*.8,ry:y+(s()-.5)*.8,s:.8+s()*.6}),p.push(v[Math.floor(s()*v.length)]))}let L=new De,E=(R,x,y,b)=>{let A=new en(R,x,y.length);return y.forEach((w,I)=>{L.position.set(w.x,w.y,w.z),L.rotation.set(0,w.ry,0),L.scale.setScalar(w.s),L.updateMatrix(),A.setMatrixAt(I,L.matrix),b&&A.setColorAt(I,new oe(b[I]))}),A.castShadow=!0,A.receiveShadow=!0,A.computeBoundingSphere(),Jn(A,2,void 0,18),r.add(A),e.registerInstanced(A,y),A},T=m.length?E(d,gt("#ffffff"),m,p):null;S.length&&E(M,gt("#ffffff",{vertexColors:!0}),S,_)}{let d=[],M=[],m=[],p=["#ff5d8f","#ffd23f","#ffffff","#b06bff","#ff8a3d","#ff3d3d"];for(let T=0;T<26;T++){let R=g(9,40,3.2);if(!R)continue;let x=2.2+s()*.8;d.push({x:R.x,y:R.y-.05,z:R.z,s:x});let y=[p[T%p.length],p[(T+2)%p.length]];for(let b=0;b<60;b++){let A=s()*6.28,w=Math.sqrt(s())*(x-.25);M.push({x:R.x+Math.cos(A)*w,y:R.y+.25,z:R.z+Math.sin(A)*w,s:.8+s()*.5}),m.push(y[b%2])}}let S=new De,_=Qe([Ge(new he(1,1.05,.35,20).translate(0,.17,0),"#4f9e3a"),Ge(new Je(1.02,.08,6,24).rotateX(Math.PI/2).translate(0,.35,0),"#ffffff")]),v=new en(_,gt("#ffffff",{vertexColors:!0}),d.length);d.forEach((T,R)=>{S.position.set(T.x,T.y,T.z),S.scale.set(T.s,1,T.s),S.updateMatrix(),v.setMatrixAt(R,S.matrix)}),v.receiveShadow=!0,v.computeBoundingSphere(),Jn(v,1.6,void 0,20),r.add(v),e.registerInstanced(v,d);let L=new nn(.24,0);L.computeVertexNormals();let E=new en(L,gt("#ffffff"),M.length);S.scale.setScalar(1),M.forEach((T,R)=>{S.position.set(T.x,T.y,T.z),S.scale.setScalar(T.s),S.updateMatrix(),E.setMatrixAt(R,S.matrix),E.setColorAt(R,new oe(m[R]))}),E.computeBoundingSphere(),r.add(E),e.registerInstanced(E,M)}{let d=t.sample(55),M=-1,m=Ve/2+9,p=d.x+d.rx*m*M,S=d.z+d.rz*m*M;e.blocked(p,S,3)&&(p=d.x-d.rx*m*M,S=d.z-d.rz*m*M);let _=new fe,v=on(128,16,(I,O,D)=>{for(let B=0;B<8;B++)I.fillStyle=B%2?"#fff":"#3a9d5d",I.fillRect(B*16,0,16,D)});o.push(v),_.add(_e(new be(3.2,1.6,1.8,3,.25),gt("#3a9d5d"),{ol:3,olRef:20})).position.y=1.15;let L=_e(new be(3.4,.15,2,2,.05),gt("#f4e3c0"),{ol:2,olRef:20});L.position.y=2,_.add(L);let E=_e(new Te(3.8,.15,2.4),gt("#ffffff",{map:v}),{ol:2.5,olRef:20});E.position.y=3.2,_.add(E);for(let I of[-1.6,1.6]){let O=_e(new he(.06,.06,1.2,6),gt("#ffffff"),{ol:1.5});O.position.set(I,2.6,.9),_.add(O)}for(let I of[-1.1,1.1]){let O=_e(new he(.4,.4,.2,14).rotateZ(Math.PI/2),gt("#22202c"),{ol:2});O.position.set(I,.4,.95),_.add(O);let D=O.clone();D.position.z=-.95,_.add(D)}let T=_e(new he(.75,.55,1.3,16),gt("#ffffff"),{ol:3,olRef:20});T.position.y=4,_.add(T);let R=_e(new he(.82,.82,.22,16),gt("#5a3a24"),{ol:2.5,olRef:20});R.position.y=4.75,_.add(R);let x=_e(new he(.72,.62,.45,16),gt("#c98a4a"),{ol:2,olRef:20});x.position.y=3.95,_.add(x);let y=Kn(512,128,(I,O,D)=>{I.fillStyle="#1a1420",Ye(I,0,0,O,D,28),I.fill(),I.fillStyle="#ffd23f",Ye(I,6,6,O-12,D-12,22),I.fill(),an(I,"FLAT WHITES",O/2,D/2+4,62,"#ffffff","#1a1420",.2)},o),b=new Ne(new fn(2.8,.7),gt("#ffffff",{map:y}));b.position.set(0,1.4,.92),_.add(b);let A=b.clone();A.rotation.y=Math.PI,A.position.z=-.92,_.add(A);let w=Math.atan2(d.x-p,d.z-S);_.position.set(p,t.heightAt(p,S),S),_.rotation.y=w,r.add(_);for(let I=0;I<5;I++){let O=p+Math.sin(w)*(2.2+I*1.1)+Math.cos(w)*(I%2?.3:-.3),D=S+Math.cos(w)*(2.2+I*1.1);h(O,D,w+Math.PI,.8)}e.anchors.coffeeCart=_}function f(){}function c(){r.traverse(d=>{d.geometry&&d.geometry.dispose()});for(let d of o)d.dispose?.();n.remove(r)}return{group:r,crowd:a,update:f,dispose:c}}var Kr=8.5;function hv(n,t={}){let{course:e,park:i,round:s}=t,r=t.plan||null,o=t.backedBy||{},a=Object.keys(o).filter(X=>(o[X]||[]).length),l=[...s?.runners||[]].sort((X,ht)=>(X.lane??0)-(ht.lane??0)),h=!1,u=new ra({antialias:!0,powerPreference:"high-performance",preserveDrawingBuffer:!!t.preserveDrawingBuffer});u.setPixelRatio(Math.min(window.devicePixelRatio||1,t.maxPixelRatio??1.5)),u.outputColorSpace=hn,u.toneMapping=ii,u.shadowMap.enabled=!0,u.shadowMap.type=Jc;let g=u.domElement;g.style.cssText="position:absolute;inset:0;width:100%;height:100%;display:block",getComputedStyle(n).position==="static"&&(n.style.position="relative"),n.appendChild(g);let f=new aa;f.fog=new oa(13496063,700,3200);let c=new bn(45,16/9,.3,9e3),d=new Ea(14676223,9420912,1.45);f.add(d);let M=new Ta(16774109,2.3),m=new $(-.45,.82,.38).normalize();M.castShadow=!0,M.shadow.mapSize.set(2048,2048),M.shadow.bias=-4e-4,M.shadow.normalBias=.03,M.shadow.radius=3,f.add(M),f.add(M.target);let p=Mu(e,i,r),S=Eu(f,p,{course:e,park:i}),_=null,v=null,L=Ru(p,S.anchors.crowdZones,5,S.onPath,S.blocked),E=Hu(f,p,S,i);L.push(...E.crowd);let T=new Map;for(let X of L){let ht=X.zone??"x";T.has(ht)||T.set(ht,[]),T.get(ht).push(X)}let R=[...T.values()].map(X=>fh(f,X)),x={update:(...X)=>{R.forEach(ht=>ht.update(...X)),v?.update(...X)},dispose:()=>{R.forEach(X=>X.dispose()),v?.dispose()}},y={};for(let X of l){let ht=Lu(X);y[X.id]=ht,f.add(ht.root)}let b=l.map(X=>X.id),A=Object.fromEntries(l.map(X=>[X.id,X])),w=Fu(n,{runners:l,backedBy:o,course:e,park:i,C:p}),I=null,O=null,D=[],B=null,F=[],q=!1;function st(X){if(r=X||null,p.setPlan(r),h=!!r?.runners?.some(ht=>ht.diversions&&ht.diversions.length),_&&(_.dispose(),_=null),v&&(v.dispose(),v=null),h){let ht=r.runners.find(Nt=>Nt.diversions?.length).id;_=Bu(f,p,S,p.diversions[ht][0]),S.clearArea(_.contains),R.forEach(Nt=>Nt.hideWhere(_.contains)),v=fh(f,_.crowd)}if((h||q)&&(S.redrawGround(),w.redrawMap()),q=h,F=[],r){O=ku(r,p,l),D=ph({plan:r,sim:O,backedIds:a,hasDiversion:h}),B=Du({camera:c,C:p,sim:O,world:S,funfair:_});for(let ht of r.events||[])F.push({at:ht.broadcastS,evt:{...ht,kind:"event"}});for(let ht of r.commentary||[])F.push({at:ht.broadcastS,evt:{...ht,kind:"commentary"}});F.sort((ht,Nt)=>ht.at-Nt.at)}else O=null,D=[],B=null}let P="idle",ft=!1,Ft=!1,U=-Kr,Y=0,Q=null,W=null,lt=0,ot=!1,wt=!1,pt=0,V=0,Z=!1,H=0,Lt=Math.max(.05,Number(t.speed)||1),xt=null,bt=0,Bt=new Set;function K(){let X=n.clientWidth||window.innerWidth,ht=n.clientHeight||window.innerHeight;u.setSize(X,ht,!1),c.aspect=X/ht,c.updateProjectionMatrix(),hh.uRes.value.set(X*u.getPixelRatio(),ht*u.getPixelRatio())}let Ot=typeof ResizeObserver<"u"?new ResizeObserver(K):null;Ot?.observe(n),window.addEventListener("resize",K),K();let z={};{let X=b.length;b.forEach((ht,Nt)=>{let Dt=(Nt-(X-1)/2)*Math.min(1.25,(Ve-1.6)/Math.max(1,X-1)),Jt=p.sample(0);z[ht]={x:Jt.x+Jt.rx*Dt-Jt.tx*1.2,z:Jt.z+Jt.rz*Dt-Jt.tz*1.2,yaw:Math.atan2(Jt.tx,Jt.tz)},z[ht].y=p.heightAt(z[ht].x,z[ht].z)+.16})}function k(X="idle"){for(let ht of b){let Nt=z[ht],Dt=y[ht];Dt.root.position.set(Nt.x,Nt.y,Nt.z),Dt.root.rotation.set(0,Nt.yaw,0),X&&Dt.set(X),Dt.setPop(null)}}k(),st(r);let mt=(X,ht)=>X===1?"jump":X===2||X===3?"fist":X===ht?"collapse":"kneel";function Rt(X,ht){let Nt=O.stateAt(Math.max(0,X)),Dt=b.length;for(let Jt of b){let te=Nt.byId[Jt],$t=y[Jt];if(X<0)continue;$t.root.position.set(te.x,te.y,te.z);let Ce=Math.atan2(te.tx,te.tz)+(te.finished&&te.post>2.4&&!(te.place>3&&te.post<4)?Math.PI*(te.place%2?1:-1)*.92:0),N=$t.root.rotation.y,it=Ce-N;for(;it>Math.PI;)it-=2*Math.PI;for(;it<-Math.PI;)it+=2*Math.PI;$t.root.rotation.y=N+it*Math.min(1,ht*10);let ut={speed:te.vRace,rate:Nt.rate,slope:te.slope},yt=p.diversions[Jt]?.[0];if(yt&&$t.setProp("floss",te.m>yt.toM-20?Math.max(.25,1-(te.m-yt.toM)/3500):0),te.finished){let nt=te.place;te.post<1.6?($t.set("run"),ut.speed=3,ut.rate=1.2):nt>3&&te.post<4?$t.set("trudge"):$t.set("celebrate",mt(nt,Dt)),$t.setPop(null)}else if(te.div>.3){$t.set("distracted");let nt=_?.anchors.rides.reduce((Gt,Xt)=>!Gt||Xt.pos.distanceToSquared($t.root.position)<Gt.pos.distanceToSquared($t.root.position)?Xt:Gt,null);if(nt){let Xt=Math.atan2(nt.pos.x-te.x,nt.pos.z-te.z)-$t.root.rotation.y;for(;Xt>Math.PI;)Xt-=2*Math.PI;for(;Xt<-Math.PI;)Xt+=2*Math.PI;ut.lookYaw=Math.max(-1.3,Math.min(1.3,Xt))}$t.setPop(["!","heart","floss"][Math.floor((te.m-te.divInfo.fromM)/120)%3])}else{$t.set("run"),$t.setPop(null);let nt=p.geoOf(te.m);ut.effort=te.m>4300?.4+(te.m-4300)/700*.5:nt>1700&&nt<2060?.7:.1}$t.update(ht,ut)}}let Pt=new $,J=null,dt=-1,ct=()=>{if(dt!==Y||!J){let X=g.getBoundingClientRect();J=[...w.root.querySelectorAll(".mr-tower, .mr-map, .mr-top")].map(ht=>{let Nt=ht.getBoundingClientRect();return{left:Nt.left-X.left,right:Nt.right-X.left,top:Nt.top-X.top,bottom:(ht.classList.contains("mr-tower")?Nt.top+ht.querySelectorAll(".mr-row").length*((ht.querySelector(".mr-row")?.offsetHeight||40)+6):Nt.bottom)-X.top}}),dt=Y}return J};function _t(X,ht=!0){let Nt=g.clientWidth,Dt=g.clientHeight,Jt=[];for(let $t of b){let Ce=y[$t];Pt.set(Ce.root.position.x,Ce.root.position.y+Ce.height+.55,Ce.root.position.z);let N=Pt.distanceTo(c.position);Pt.project(c);let it=ht&&Pt.z<1&&Pt.z>-1&&Math.abs(Pt.x)<.95&&Pt.y<.82&&Pt.y>-.62&&N>9.5&&N<150,ut=(Pt.x*.5+.5)*Nt,yt=(-Pt.y*.5+.5)*Dt;it&&ct().some(nt=>ut>nt.left-40&&ut<nt.right+40&&yt>nt.top-10&&yt<nt.bottom+40)&&(it=!1),Jt.push({id:$t,x:(Pt.x*.5+.5)*Nt,y:(-Pt.y*.5+.5)*Dt,visible:it,pos:X?X.order.indexOf($t)+1:0,scale:Math.max(.7,Math.min(1.15,30/N)),dist:N})}Jt.sort(($t,Ce)=>$t.dist-Ce.dist);let te=[];for(let $t of Jt){if(!$t.visible)continue;let Ce=(ir(A[$t.id]).length*12+60)*$t.scale;for(let N=0;N<8;N++){let it=te.find(ut=>Math.abs(ut.x-$t.x)<(ut.tw+Ce)/2&&Math.abs(ut.y-$t.y)<30*Math.max(ut.scale,$t.scale));if(!it)break;$t.y=it.y-31*Math.max(it.scale,$t.scale)}$t.tw=Ce,te.push($t)}return X?{raceS:X.raceS,leaderM:X.leader.m,tags:Jt,order:X.order.map($t=>({id:$t,gapText:X.byId[$t].gapText,finished:X.byId[$t].finished})),dots:X.order.map(($t,Ce)=>({x:X.byId[$t].x,z:X.byId[$t].z,colour:A[$t].colour.primary,lead:Ce===0,focus:B?.shot?.ids?.includes($t)}))}:P!=="race"?{tags:Jt}:{tags:Jt,raceS:0,leaderM:0,order:b.map($t=>({id:$t,gapText:"",finished:!1,posHtml:`<small>L</small>${A[$t].lane??"\u2014"}`})),dots:b.map($t=>({x:z[$t].x,z:z[$t].z,colour:A[$t].colour.primary}))}}function Et(X,ht){let Nt=Math.max(30,Math.min(220,ht)),Dt=M.shadow.camera;Dt.right!==Nt&&(Dt.left=-Nt,Dt.right=Nt,Dt.top=Nt,Dt.bottom=-Nt,Dt.near=1,Dt.far=900,Dt.updateProjectionMatrix());let Jt=2*Nt/M.shadow.mapSize.x,te=Math.round(X.x/Jt)*Jt,$t=Math.round(X.z/Jt)*Jt;M.target.position.set(te,X.y,$t),M.position.set(te+m.x*400,X.y+m.y*400,$t+m.z*400)}let Ct=["wave","flex","point","stretch","spin","bow"];function It(X,ht){let Nt=[...X.personality||X.id].reduce((Dt,Jt)=>Dt+Jt.charCodeAt(0),ht);return Ct[Nt%Ct.length]}function Wt(X,ht={}){P="intro",w.setDim(!0),w.clearBanner(),w.photo(!1),w.results(null),j(),w.market(!1),xt=null,ft=!1,g.style.filter="",k("idle");let Nt=ht.perRunnerS??t.introPerRunnerS??4.2,Dt=ht.flyoverS??7;return W={t:0,idx:-1,per:Nt,fly:Dt,onDone:X,waiting:!1,segStart:0,minSeg:2.5,done:!1,group:!1},{flyoverS:Dt,perRunnerS:Nt,runners:b.slice()}}function Kt(X){let ht=W;if(!ht)return;ht.t+=X;let Nt=z;if(ht.idx===-1){!ht.title&&ht.t>.8&&(ht.title=!0,qt(!0));let ut=Math.min(1,ht.t/ht.fly),yt=mh(ut),nt=p.sample(0),Gt=new $(170,0,-40),Xt=2.2-yt*2,se=520-yt*470,ee=new $(Gt.x+Math.cos(Xt)*se,190-yt*170,Gt.z+Math.sin(Xt)*se),pe=new $(nt.x+nt.tx*22+nt.rx*10,nt.y+9,nt.z+nt.tz*22+nt.rz*10);ee.lerp(pe,yt*yt);let xe=Gt.clone().setY(15).lerp(new $(nt.x,nt.y+1,nt.z),Math.min(1,yt*1.2));c.position.copy(ee),c.lookAt(xe),Vt(50),ut>=1&&ue();return}if(ht.group){let ut=p.sample(0),yt=(ht.t-ht.segStart)/3;if(c.position.set(ut.x+ut.tx*(9+yt*2)+ut.rx*2,ut.y+2.2+yt*.6,ut.z+ut.tz*(9+yt*2)+ut.rz*2),c.lookAt(ut.x,ut.y+1.3,ut.z),Vt(46),yt>=1&&!ht.done){ht.done=!0,w.introCard(null);let nt=ht.onDone;W=null,P="idle",nt?.()}return}let Dt=b[ht.idx],Jt=Nt[Dt],te=ht.t-ht.segStart,$t=new $(Math.sin(Jt.yaw),0,Math.cos(Jt.yaw)),Ce=new $(-$t.z,0,$t.x),N=y[Dt].height,it=3.2+N*.6-Math.min(.6,te*.12);c.position.set(Jt.x+$t.x*it+Ce.x*.9,Jt.y+N*.62,Jt.z+$t.z*it+Ce.z*.9),c.lookAt(Jt.x-Ce.x*1.25,Jt.y+N*.55,Jt.z-Ce.z*1.25),Vt(40),!ht.waiting&&te>=ht.per&&ue(),ht.waiting==="released"&&te>=ht.minSeg&&ue()}function qt(X){let ht=s||{};w.titleCard(X,{title:ht.title||"MARKRUN",kicker:ht.number?`ROUND ${ht.number}`:"LIVE FROM FINSBURY PARK",theme:ht.theme?typeof ht.theme=="string"?ht.theme:ht.theme.label||ht.theme.name||"":""})}function ue(){let X=W;X.idx===-1&&qt(!1),X.idx++,X.segStart=X.t;for(let Jt of b)y[Jt].set("idle");if(X.idx>=b.length){X.group=!0;for(let Jt of b)y[Jt].set("pose","point");w.introCard(null),setTimeout(()=>{},0);for(let Jt of b)y[Jt].set("wave");return}let ht=b[X.idx];y[ht].set(It(A[ht],X.idx)==="wave"?"wave":"pose",It(A[ht],X.idx)),t.introCards!==!1&&w.introCard(A[ht]),X.waiting=!1;let Dt=t.onIntroRunner?.(ht,X.idx);Dt&&typeof Dt.then=="function"&&(X.waiting=!0,Dt.then(()=>{W===X&&(X.waiting="released")},()=>{W===X&&(X.waiting="released")}))}function re(X,ht){if(!O)throw new Error("createRaceView: playRace needs a plan (pass opts.plan or call loadPlan(plan) first)");P="race",w.setDim(!1),w.results(null),j(),W=null,w.introCard(null),w.titleCard(!1),w.market(!1),xt=null,ft=!1,g.style.filter="",U=-Kr,pt=0,V=0,lt=0,ot=!1,wt=!1,Bt.clear(),Z=!!t.skipRaceTitle,w.setDimTop(!1),Q={onEvent:X,onDone:ht},k("idle"),B.reset()}let Se=[[-3,"3"],[-2,"2"],[-1,"1"],[0,"GO!"]];function at(X){let ht=Nt=>A[Nt]?.nickname||Nt;switch(X.type){case"lead_change":return["LEAD CHANGE!",`${ht(X.to)} hits the front`,"#ff3d8b"];case"overtake":return!a.includes(X.by)&&!a.includes(X.on)&&O.stateAt(X.broadcastS).order.indexOf(X.by)>1?null:["OVERTAKE!",`${ht(X.by)} passes ${ht(X.on)}`,"#2e6fe0"];case"hill":return[X.lap===1?"THE HILL!":"THE HILL AGAIN!","Legs of jelly incoming","#3aa845"];case"lap":return["LAP 2 OF 2","One more time round!","#2e6fe0"];case"final_stretch":return["FINAL STRETCH!","Here comes the finish","#ff8a1f"];case"diversion":return Bt.has("div")?null:(Bt.add("div"),["DISTRACTED!",`${ht(X.who)} has spotted the funfair`,"#b04bff"]);case"finish":return X.place===1&&!O.photoFinish?["WINNER!",ht(X.who),"#ffb000"]:null;case"breakaway":return["BREAKAWAY!",`${ht(X.who)} makes a break`,"#ff3d8b"];default:return null}}function Yt(X){if(lt>0){if(lt-=X,lt<=0){w.photo(!1),g.style.filter="",S.anchors.finishArch.visible=!0,B.reset();let Nt=O.finishOrder[0];w.showBanner("WINNER!",A[Nt]?.nickname||Nt,"#ffb000",2.6)}return}let ht=U;for(U+=X,U<-4.2&&!Z&&(Z=!0,qt(!0),w.setDimTop(!0)),U>=-3.6&&Z===!0&&(Z="done",qt(!1),w.setDimTop(!1));V<Se.length&&U>=Se[V][0];){let[Nt,Dt]=Se[V++];if(w.countdown(Dt),Q?.onEvent?.({kind:"countdown",n:Dt==="GO!"?0:Number(Dt),text:Dt,broadcastS:Nt}),Nt===-3)for(let Jt of b)y[Jt].set("ready")}for(;pt<F.length&&U>=F[pt].at;){let Nt=F[pt++].evt;try{Q?.onEvent?.(Nt)}catch(Dt){console.error(Dt)}if(Nt.kind==="event"){let Dt=at(Nt);Dt&&w.showBanner(...Dt)}}if(O.photoFinish&&!ot&&U>=O.firstFinishB){ot=!0,U=O.firstFinishB,lt=t.photoFreezeS??2.8;{let[Nt,Dt]=O.finishOrder;w.photo(!0,`${ir(A[Nt])} or ${ir(A[Dt])}? Checking the camera...`)}g.style.filter="grayscale(0.55) sepia(0.35) contrast(1.12)",Q?.onEvent?.({kind:"photo_finish",broadcastS:U,ids:O.finishOrder.slice(0,2)})}!wt&&U>=O.lastFinishB+3.5&&(wt=!0,Q?.onDone?.())}function Tt(X){o=X||{},a=Object.keys(o).filter(ht=>(o[ht]||[]).length),w.setBackedBy(o)}function Ut(X,ht=1.2){if(!O)throw new Error("createRaceView: seek in a race needs a plan");X=Math.max(-Kr,Math.min(O.lastFinishB+3.5,Number(X)||0)),P="race",W=null,j(),Q=Q||{},w.setDim(!1),w.introCard(null),w.results(null),w.photo(!1),w.market(!1),w.clearBanner(),w.titleCard(!1),w.setDimTop(!1),g.style.filter="",S.anchors.finishArch.visible=!0,xt=null,Z=X>=-3.6?"done":X<-4.2?!1:"done",B.reset();let Nt=Math.round(ht*30);for(let Dt=Nt;Dt>=0;Dt--){if(U=X-Dt/30,U<-3)for(let Jt of b)y[Jt].set("idle");else if(U<0)for(let Jt of b)y[Jt].set("ready");if(Dt>0)if(B.update(U,1/30,D),U>=0)Rt(U,1/30);else for(let Jt of b)y[Jt].update(1/30,{})}U=X,pt=F.findIndex(Dt=>Dt.at>U),pt<0&&(pt=F.length),V=Se.findIndex(Dt=>Dt[0]>U),V<0&&(V=Se.length),ot=U>=O.firstFinishB,wt=U>=O.lastFinishB+3.5,lt=0}function C(X){let ht=W;if(!ht)return;X=Math.max(0,Number(X)||0);let Nt=b.length;if(X<ht.fly){ht.t=X;return}qt(!1),ht.title=!0;let Dt=Math.min(Nt,Math.floor((X-ht.fly)/ht.per));ht.idx=Dt-1,ht.t=X,ue(),ht.segStart=ht.fly+Dt*ht.per}function G(X){return P==="intro"?C(X):Ut(X)}function j(){I&&(I.dispose(),I=null)}function rt(X,{card:ht}={}){P="podium",w.setDim(!0),w.clearBanner(),W=null,w.titleCard(!1),w.market(!1),xt=null,ft=!1,g.style.filter="",w.photo(!1),j();let Nt=X?.finishOrder?.length?[...X.finishOrder].sort((Dt,Jt)=>Dt.place-Jt.place):(O?.finishOrder||b).map((Dt,Jt)=>({runnerId:Dt,place:Jt+1,officialS:O?.byId[Dt].officialS??0,timeText:O?ka(O.byId[Dt].officialS):""}));I=zu(f,p,S,y,Nt,{camera:c,offsetX:(ht??t.podiumCard)!==!1?3.2:0}),(ht??t.podiumCard)!==!1&&w.results(Nt.map(Dt=>({place:Dt.place,nickname:A[Dt.runnerId]?.nickname||Dt.runnerId,colour:A[Dt.runnerId]?.colour.primary||"#888",timeText:Dt.timeText||ka(Dt.officialS)})))}let vt=performance.now(),et=0,St={frames:0,acc:0,fps:0};function Vt(X){Math.abs(c.fov-X)>.01&&(c.fov=X,c.updateProjectionMatrix())}function kt(X,ht=!1){Y+=X;let Nt=null;ft||(P==="intro"&&Kt(X),P==="race"&&Yt(X));let Dt=ft?0:X;if(P==="race"){if(lt>0){let $t=S.anchors.finish;S.anchors.finishArch.visible=!1,c.position.set($t.x+$t.rx*9-$t.tx*.6,$t.y+6.4,$t.z+$t.rz*9-$t.tz*.6),c.lookAt($t.x-$t.rx*.6-$t.tx*.6,$t.y+.8,$t.z-$t.rz*.6-$t.tz*.6),Vt(42),c.updateMatrixWorld();let Ce=new $($t.x+$t.rx*3,$t.y+.05,$t.z+$t.rz*3).project(c),N=new $($t.x-$t.rx*3,$t.y+.05,$t.z-$t.rz*3).project(c);w.photoLine([(Ce.x*.5+.5)*g.clientWidth,(-Ce.y*.5+.5)*g.clientHeight],[(N.x*.5+.5)*g.clientWidth,(-N.y*.5+.5)*g.clientHeight])}else if(ft&&xt!=null){xt+=X;let $t=O.stateAt(Math.max(0,U)),Ce=$t.byId[$t.order[0]],N=$t.order.slice(0,3).map(ee=>$t.byId[ee]).filter(ee=>Math.abs(ee.m-Ce.m)<25),it=new $;for(let ee of N)it.add(new $(ee.x,ee.y,ee.z));it.divideScalar(Math.max(1,N.length)),bt||(bt=Math.atan2(c.position.x-it.x,c.position.z-it.z));let ut=bt+xt*.12,yt=10+Math.min(25,Ce.m-N.at(-1).m)*.4,nt=Math.min(1,xt/1.2),Gt=nt*nt*(3-2*nt),Xt=it.x+Math.sin(ut)*yt,se=it.z+Math.cos(ut)*yt;c.position.set(Xt,Math.max(it.y+3+Gt*2,p.heightAt(Xt,se)+2.5),se),c.lookAt(it.x,it.y+2.3,it.z),Vt(44)}else B.update(U,Dt,D);if(Nt=U>=0?O.stateAt(U):null,U<0)for(let $t of b)y[$t].update(Dt,{});else Rt(U,lt>0?0:Dt);let te=B.shot?.type;Et(B.cam.look,te==="drone"||te==="blimp"||te==="heli"?160:45)}else if(P==="podium"&&I){I.update(Dt,Y);for(let te of b)y[te].update(Dt,{});Et(I.center,40)}else{for(let te of b)y[te].update(Dt,{});if(P==="idle"){let te=p.sample(0),$t=Y*.12;c.position.set(te.x+Math.sin($t)*14,te.y+4.5,te.z+Math.cos($t)*14),c.lookAt(te.x,te.y+1.2,te.z),Vt(45)}Et(new $(z[b[0]]?.x??0,0,z[b[0]]?.z??0),P==="intro"&&W?.idx===-1?160:40)}if(H+=X,ht)return;S.update(Y),_?.update(Y);let Jt=b.map(te=>y[te].root.position);x.update(Y,c.position,Jt,P==="podium"?.9:null),w.update(H,P==="race"?_t(Nt,U>-1&&xt==null):_t(null,!1)),H=0,u.render(f,c)}let tt=2;function Mt(X){if(Ft)return;et=requestAnimationFrame(Mt);let ht=Math.max(0,(X-vt)/1e3);vt=X,St.frames++,St.acc+=ht,St.acc>1&&(St.fps=St.frames/St.acc,St.frames=0,St.acc=0),At(Math.min(tt,ht)*Lt)}function At(X){let ht=X;if(ht<=1e-6){kt(0);return}for(;ht>1e-6;){let Nt=Math.min(ht,.1);ht-=Nt,kt(Nt,ht>1e-6)}}t.manualLoop||(et=requestAnimationFrame(Mt));function jt(){Ft=!0,cancelAnimationFrame(et),Ot?.disconnect(),window.removeEventListener("resize",K),j();for(let X of b)f.remove(y[X].root),y[X].dispose();x.dispose(),_?.dispose(),E.dispose(),S.dispose(),w.dispose(),f.traverse(X=>{X.geometry&&X.geometry.dispose()}),Pu(),Su(),u.dispose(),u.forceContextLoss?.(),g.remove()}let ae={seek(X,ht=1.2){Ut(X,ht),ft=!0,kt(0)},introAt(X,ht=1.5){if(Wt(()=>{},{}),ft=!1,X<0){W.t=ht,Kt(0),kt(0),ft=!0;return}for(W.t=W.fly,Kt(0);W&&W.idx<X;)W.t=W.segStart+W.per+.01,Kt(0);for(let Nt=0;Nt<ht*30;Nt++){Kt(1/30);for(let Dt of b)y[Dt].update(1/30,{})}ft=!0,kt(0)},podiumAt(X=3){w.introCard(null),rt(null);for(let ht=0;ht<X*30;ht++){I.update(1/30,ht/30);for(let Nt of b)y[Nt].update(1/30,{})}ft=!0,kt(0)},photoAt(){this.seek(O.firstFinishB-.05),ft=!1,ot=!1;for(let X=0;X<3;X++)kt(1/30);ft=!0,kt(0)},render(){kt(0)},unpause(){ft=!1},lookFrom(X,ht,Nt,Dt,Jt,te,$t=45){P="debugcam",c.position.set(X,ht,Nt),c.lookAt(Dt,Jt,te),Vt($t),w.setDim(!0),u.render(f,c)},step(X,ht=!0){kt(X,!ht)},get mode(){return P},get b(){return U},get shots(){return D},get sim(){return O},C:p,get director(){return B},renderer:u,scene:f,camera:c,info:()=>u.info,fps:()=>St.fps};return{playIntro:Wt,playRace:re,showPodium:rt,setPaused(X,{market:ht=!0,marketText:Nt}={}){X=!!X,X!==ft&&(ft=X,P==="race"&&lt<=0&&t.marketOnPause!==!1&&ht&&(X?(xt=0,bt=0,w.market(!0,Nt??t.marketText??"Place your halfway bets!"),g.style.filter="saturate(1.2) contrast(1.06)"):(xt=null,w.market(!1),g.style.filter="",B.reset())))},setSpeed(X){Lt=Math.max(.05,Number(X)||1)},seek:G,loadPlan(X,{backedBy:ht}={}){if(P==="race")throw new Error("createRaceView: loadPlan during a race");ht&&Tt(ht),st(X)},setBackedBy(X){Tt(X),O&&P!=="race"&&(D=ph({plan:r,sim:O,backedIds:a,hasDiversion:h}))},dispose:jt,hudRoot:w.root,get broadcastTime(){return P==="intro"?W?.t??0:U},get durationS(){return O?Kr+O.lastFinishB+3.5:0},preRollS:Kr,_debug:ae}}function $u(n){let e=Array.from({length:201},(r,o)=>Math.round(o*25/5e3*1500*1e3)/1e3),i=(n?.runners||[]).map(r=>({id:r.id,officialS:1500,progress:e,pacingSource:"intro"})),s=Lh(n?.roundId||"intro",i);return s.events=[],s.commentary=[],s}var so=new URLSearchParams(location.search),ar=Math.max(.25,Number(so.get("speed"))||1),vh=so.get("race")==="2d",zn=n=>Math.round(n/ar);window.__markrun={events:[],speed:ar};var Bn=n=>{window.__markrun.events.push({at:Date.now(),...n}),window.__markrun.events.length>500&&window.__markrun.events.shift()},rr=ve("#stage"),wi=ve("#screen"),Qr=ve("#hud-bottom"),to=ve("#subs"),fv=ve("#reactions"),jr=ve("#next-hint"),sr=ve("#race-layer"),we=null,or=null,no=so.has("autostart"),Gi=so.has("mute"),de=Sh(),Si=Ih({onLine:Mv,onIdle:()=>{de.duck(!1)}});function Yu(){let n=Math.min(window.innerWidth/1920,window.innerHeight/1080);rr.style.transform=`translate(-50%, -50%) scale(${n})`,rr.style.transformOrigin="center center",rr.style.left="50%",rr.style.top="50%"}window.addEventListener("resize",Yu);Yu();var xh=null,pv=Promise.all([fetch("/data/course.json").then(n=>n.json()),fetch("/data/park.json").then(n=>n.json()).catch(()=>null)]).then(([n,t])=>(xh={course:n,park:t},xh)),Na=so.get("key");try{Na&&localStorage.setItem("markrun.tvkey",Na)}catch{}var mv=()=>{try{return Na||localStorage.getItem("markrun.tvkey")}catch{return Na}},Fa=bh({role:"tv",getKey:mv,onWelcome:n=>{if(n.key)try{localStorage.setItem("markrun.tvkey",n.key)}catch{}ve("#tvauth")?.remove()},onStatus:n=>{ve("#conn").classList.toggle("hidden",n==="open"||n==="connecting")},onState:n=>gv(n),onMessage:n=>{n.t==="react"?Sv(n.playerId,n.emoji):n.t==="refresh"?Qu(n.step,n.msg):n.t==="refreshDone"?Cv(n.ok,n.msg):n.t==="claimRequest"?Av(n):n.t==="claimClosed"?ve("#tvmodal")?.dataset.req===n.reqId&&qi():n.t==="error"&&n.code==="tv_auth"?Tv(n.msg):n.t==="error"&&Xi(n.msg,"red")}}),xn=n=>Fa.send(n);function lr(){if(!(no&&de.ready())){no=!0,de.unlock(),ve("#gesture").classList.add("gone");try{window.speechSynthesis?.getVoices()}catch{}Ba(),we&&Ju(we,!0)}}no&&ve("#gesture").classList.add("gone");ve("#gesture").addEventListener("click",lr);window.addEventListener("pointerdown",()=>{de.ready()||lr()});function Ba(){let n=we?.settings||{};de.setVolume(n.volume??.8),de.setMuted(Gi),de.setMusicEnabled(n.music!==!1),Si.setEnabled(!Gi&&n.voice!==!1&&ar<=1.5),Si.setVolume(Math.min(1,(n.volume??.8)+.1)),ve("#btn-mute").textContent=Gi?"\u{1F507}":"\u{1F50A}"}ve("#btn-mute").addEventListener("click",n=>{n.stopPropagation(),Gi=!Gi,Ba()});ve("#btn-fs").addEventListener("click",n=>{n.stopPropagation(),Zu()});function Zu(){document.fullscreenElement?document.exitFullscreen?.():document.documentElement.requestFullscreen?.().catch(()=>{})}var Vu;window.addEventListener("mousemove",()=>{document.body.classList.remove("hide-cursor"),clearTimeout(Vu),Vu=setTimeout(()=>document.body.classList.add("hide-cursor"),3e3)});window.addEventListener("keydown",n=>{if(n.target.closest?.("input, textarea"))return;if(!no){lr();return}if(Ev()){if(n.key==="Escape"){let e=ve("#tvmodal [data-cancel]:not([disabled])");e?e.click():qi()}else n.key==="Enter"&&ve("#tvmodal [data-ok]")?.click();return}de.ready()||de.unlock();let t=n.key;if(t==="m"||t==="M"){Gi=!Gi,Ba(),Xi(Gi?"Muted":"Sound on");return}if(t==="f"||t==="F"){Zu();return}if(t==="l"||t==="L"){we?.phase==="BETTING"&&!we.revealed&&(xn({t:"forceLock"}),Xi("Locking everyone in!"));return}(t===" "||t==="Enter"||t==="ArrowRight"||t==="n"||t==="N")&&(n.preventDefault(),_h())});function _h(){if(we){if(we.phase==="LOBBY"&&!we.players.length){Xi("Scan the QR code to join first!","red");return}if(we.phase==="BETTING"&&!we.revealed){Xi("Waiting for everyone to lock in (press L to force it)");return}xn({t:"advance",from:we.phase,stage:we.phase==="RESULTS"?we.resultsStage:void 0})}}var Gu=new Map;function gv(n){let t=we;we=n,Ba();let e=new Map(n.players.map(s=>[s.id,s]));if(t)for(let s of n.players){let r=Gu.get(s.id);r?!r.locked&&s.locked&&n.phase==="BETTING"?(de.play("lock"),Si.say(bv(s.name),Math.random()<.5?"jeff":"pam",{priority:1})):r.connected&&!s.connected&&setTimeout(()=>{let o=we?.players.find(a=>a.id===s.id);o&&!o.connected&&Xi(`${s.name}'s phone dropped out \u2014 it'll reconnect`,"red")},5e3):(de.play("join"),n.phase==="LOBBY"&&Si.say(`${s.name} has entered the paddock!`,"pam",{priority:1}))}Gu=e;let i=yv(n);!or||or.key!==i?xv(i,n,t):or.update?.(n,t),vv(n),_v(n),Ju(n)}function yv(n){let t=n.round?.roundId||"";return n.phase==="BETTING"?`BETTING|${t}|${n.revealed?"reveal":"bet"}`:["INTRO","RACE","RESULTS","SCOREBOARD"].includes(n.phase)?`${n.phase}|${t}`:`${n.phase}|${n.gameNumber}`}function xv(n,t,e){try{or?.destroy?.()}catch(o){console.warn(o)}wi.innerHTML="",Si.clear(),to.innerHTML="";let i=t.phase;document.body.className=document.body.className.replace(/\bphase-\w+/g,"").trim()+` phase-${i}`,document.body.classList.toggle("revealed",!!t.revealed),document.body.classList.toggle("racing",i==="RACE"||i==="INTRO"&&!!Oe),Bn({type:"screen",key:n});let s={LOBBY:wv,INTRO:Iv,BETTING:t.revealed?Ov:Nv,RACE:Fv,RESULTS:Bv,SCOREBOARD:Wv,FINALE:Xv}[i];if(or=s?s(t,e):{},or.key=n,i==="BETTING"&&Oe&&Ha===t.round?.roundId&&tf(Oe)){try{Oe.setPaused(!0)}catch{}document.body.classList.remove("racing")}else i!=="RACE"&&i!=="RESULTS"&&i!=="INTRO"&&eo()}var Wu=null;function Ju(n,t=!1){if(!no)return;let e={LOBBY:"lobby",BETTING:n.revealed?null:"betting",SCOREBOARD:"lobby",RESULTS:null,INTRO:null,RACE:null,FINALE:null}[n.phase];e===Wu&&!t||(Wu=e,e?de.startMusic(e):de.stopMusic(1.2))}function Ku(n){let t=[...n].sort((i,s)=>s.bankroll-i.bankroll),e=new Map;return t.forEach((i,s)=>e.set(i.id,s>0&&i.bankroll===t[s-1].bankroll?e.get(t[s-1].id):s+1)),e}function vv(n){let t=["INTRO","BETTING","RACE"].includes(n.phase)&&!(n.phase==="BETTING"&&n.revealed);if(Qr.classList.toggle("hidden",!t),document.body.classList.toggle("no-hud",!t),!t){Qr.innerHTML="";return}let e=Ku(n.players),i=n.phase==="RACE"?n.bets||{}:{};Qr.innerHTML=n.players.map(s=>{let r="";s.connected?n.phase==="BETTING"&&(r=s.locked?'<span class="pp-status locked">\u{1F512} LOCKED IN</span>':'<span class="pp-status think">\u{1F914} Thinking\u2026</span>'):r='<span class="pp-status off">\u{1F4F5} Offline</span>';let o=(i[s.id]||[]).map(a=>ln(n.round,oo(a))).filter(Boolean).map(a=>`<i title="${Ht(a.nickname)}" style="background:${Ht(a.colour.primary)}"></i>`).join("");return`<div class="pp ${s.connected?"":"disconnected"}" data-pid="${s.id}">
      ${n.history?.length?Zi(e.get(s.id),"pp-ord"):""}
      ${vn(s.avatar,70)}
      <div><div class="pp-name">${Ht(s.name)}</div><div class="pp-bank"><span class="coin"></span> ${mn(s.bankroll)}</div>${o?`<div class="pp-backs">${o}</div>`:""}</div>
      ${r}
    </div>`}).join("")}function _v(n){let t={INTRO:"Skip intros \u23ED",RACE:"Skip race \u23ED",RESULTS:"Next \u25B6",SCOREBOARD:n.roundNumber>=n.roundsPerGame?"Final results \u25B6":"Next round \u25B6",FINALE:"Play again \u21BB",BETTING:n.revealed?"Start race \u25B6":null}[n.phase];if(!t){jr.innerHTML="";return}jr.dataset.label!==t&&(jr.dataset.label=t,jr.innerHTML=`<button class="btn ${n.phase==="RACE"||n.phase==="INTRO"?"ghost small":"white"}">${t} <span style="opacity:.6;font-size:.7em">SPACE</span></button>`,jr.firstElementChild.addEventListener("click",e=>{e.stopPropagation(),lr(),_h()}))}function Xi(n,t=""){let e=Ke(`<div class="t panel ${t==="red"?"red":"yellow"} anim-pop">${Ht(n)}</div>`),i=ve("#toast");i.innerHTML="",i.appendChild(e),setTimeout(()=>{e.parentNode&&e.remove()},3200)}function Mv(n){de.duck(!0);let t=Ke(`<div class="sub"><span class="who ${n.speaker==="pam"?"pam":"jeff"}">${n.speaker==="pam"?"PAM":"JEFF"}</span><span>${Ht(n.text)}</span></div>`);to.appendChild(t);let e=["RESULTS","SCOREBOARD","FINALE","LOBBY"].includes(we?.phase)?1:2;for(;to.children.length>e;)to.firstElementChild.remove();let i=Math.max(3e3,n.text.split(/\s+/).length*420+1500);setTimeout(()=>{t.classList.add("out"),setTimeout(()=>t.remove(),450)},i),Bn({type:"line",text:n.text,speaker:n.speaker})}var Be=(n,t="jeff",e=2)=>Si.say(n,t,{priority:e});function bv(n){let t=[`${n} has locked in. No take-backs!`,`And ${n}'s money is down!`,`${n} has committed. Bold. Possibly foolish.`,`Bets are in from ${n}!`];return t[Math.floor(Math.random()*t.length)]}function Sv(n,t){let e=we?.players.find(o=>o.id===n),i=Qr.querySelector(`[data-pid="${n}"]`),s;if(i&&!Qr.classList.contains("hidden")){let o=i.getBoundingClientRect(),a=rr.getBoundingClientRect(),l=a.width/1920;s=(o.left+o.width/2-a.left)/l+(Math.random()-.5)*160}else s=1920*(((we?.players.findIndex(a=>a.id===n)??0)+1)/((we?.players.length||1)+1))+(Math.random()-.5)*220;let r=Ke(`<div class="react" style="left:${Math.round(s-60)}px;--rot:${Math.round((Math.random()-.5)*40)}deg"><span class="e">${Ht(t)}</span>${e?vn(e.avatar,46):""}</div>`);fv.appendChild(r),de.play("pop"),setTimeout(()=>r.remove(),3300)}function En(n,t){return new Promise(e=>{let i=setTimeout(e,zn(n));t?.timers.push(i)})}function za(){return{cancelled:!1,timers:[]}}function io(n){n.cancelled=!0,n.timers.forEach(t=>{clearTimeout(t),clearInterval(t)})}async function jn(n,t,e=12e3){let i=Date.now();if(await En(t,n),!(ar>1.5))for(;!n.cancelled&&Si.busy&&Date.now()-i<e;)await new Promise(s=>setTimeout(s,150))}var bi=(n,t=120)=>Ch(n,{size:t,idSuffix:Math.random().toString(36).slice(2,6)});function ju(){return`<div class="clouds">${[0,1,2,3,4].map(n=>`<div class="cloud" style="top:${40+n*70}px;width:${180+n%3*70}px;height:${50+n%2*18}px;animation-duration:${70+n*17}s;animation-delay:-${n*19}s"></div>`).join("")}</div>
  <svg class="hills" viewBox="0 0 1920 260" preserveAspectRatio="none"><path d="M0 150 Q 240 40 520 120 T 1040 110 T 1500 90 T 1920 130 V260 H0Z" fill="#2ec27e" stroke="#14183c" stroke-width="6"/><path d="M0 200 Q 300 140 640 190 T 1280 180 T 1920 190 V260 H0Z" fill="#169c5b" stroke="#14183c" stroke-width="6"/></svg>`}var gh=[100,250,500,1e3,2e3,5e3],yh=[0,60,90,120,180];function wv(n){let t=Ke(`<div class="lobby">
    ${ju()}
    <div class="logo"><div class="word outlined">MARK<span class="r">RUN</span></div><br><div class="ribbon"><span>THE FINSBURY PARK FORM GUIDE</span></div></div>
    <div class="tagline">Real parkruns. Real Mark. Fake money. \u{1F377}</div>
    <div class="qr-card panel white"><div class="qr"></div><div class="scan">\u{1F4F1} SCAN TO JOIN</div><div class="url"></div></div>
    <div class="slots"></div>
    <div class="settings panel cream"></div>
    <div class="start-wrap"></div>
  </div>`);wi.appendChild(t),ve(".qr",t).innerHTML=n.qrSvg||"",ve(".url",t).textContent=(n.joinUrl||"").replace(/^https?:\/\//,""),Be(n.players.length?"Welcome back to MARKRUN!":"Welcome to MARKRUN! Grab your phones and scan the code.","jeff",1);let e=(r,o,a,l)=>`<div class="set" data-k="${o}"><div class="lbl">${r}</div><div class="ctl-row">${l.replace("{val}",`<span class="val">${a}</span>`)}</div></div>`;function i(r){let o=[],a=Math.max(2,r.players.length);for(let g=0;g<a;g++){let f=r.players[g];if(f){let c=f.connected?f.ready?'<span class="tag" style="background:var(--grass);color:#fff">\u2713 READY</span>':'<span class="tag">joined</span>':'<span class="tag" style="background:var(--tomato);color:#fff">\u{1F4F5} offline</span>';o.push(`<div class="slot panel slant ${s.has(f.id)?"":"joined"}" style="background:${Ht(f.avatar.colour)}"><div class="unslant" style="display:flex;align-items:center;gap:24px;width:100%">${vn(f.avatar,92)}<div><div class="sname">${Ht(f.name)}${r.settings.runnerPlayerId===f.id?' <span class="tag markt">\u{1F3C3} THE REAL MARK</span>':""}</div><div class="ssub">${mn(f.bankroll)} to gamble${r.settings.runnerPlayerId&&r.settings.runnerPlayerId!==f.id?" \xB7 gets an extra \u{1F525} hot tip":""}</div></div><span class="slot-badge">${c}</span><button class="btn small white kick" data-kick="${f.id}" title="Remove player">\u2715</button></div></div>`)}else o.push(`<div class="slot panel slant empty"><div class="unslant" style="display:flex;align-items:center;gap:24px"><div class="ghost-av">?</div><div><div class="sname">Player ${g+1}</div><div class="ssub">Scan the code to take this seat</div></div></div></div>`)}s=new Set(r.players.map(g=>g.id)),ve(".slots",t).innerHTML=o.join(""),ve(".slots",t).classList.toggle("many",a>2);let l=r.settings,h=Math.round((l.volume??.8)*10);ve(".settings",t).innerHTML=[e("Starting pot","startingBankroll",mn(l.startingBankroll),'<button class="btn small white" data-d="-1">\u2212</button>{val}<button class="btn small white" data-d="1">+</button>'),e("Rounds","roundsPerGame",l.roundsPerGame,'<button class="btn small white" data-d="-1">\u2212</button>{val}<button class="btn small white" data-d="1">+</button>'),e("Bet timer","betTimer",l.betTimer?`${l.betTimer}s`:"Off",'<button class="btn small white" data-d="-1">\u2212</button>{val}<button class="btn small white" data-d="1">+</button>'),e("Drinking","drinkingMode","",`<button class="btn small toggle ${l.drinkingMode?"on":"off"}" data-toggle>${l.drinkingMode?"\u{1F37A} ON":"OFF"}</button>`),e("Voice","voice","",`<button class="btn small toggle ${l.voice?"on":"off"}" data-toggle>${l.voice?"\u{1F399}\uFE0F ON":"OFF"}</button>`),e("Music","music","",`<button class="btn small toggle ${l.music?"on":"off"}" data-toggle>${l.music?"\u{1F3B5} ON":"OFF"}</button>`),e("Volume","volume",`${h*10}%`,'<button class="btn small white" data-d="-1">\u2212</button>{val}<button class="btn small white" data-d="1">+</button>')].join("");let u=r.players.length&&r.players.every(g=>g.ready);ve(".start-wrap",t).innerHTML=`<button class="btn green ${r.players.length?"pulse":""}" data-start ${r.players.length?"":"disabled"}>${r.players.length?r.players.length===1?"START SOLO \u25B6":"LET'S RACE \u25B6":"Waiting for players\u2026"}</button>
      <div class="hint">${r.refreshing?"\u23F3 Refreshing historical data\u2026":r.players.length?u?"Everyone is ready!":"Press SPACE \u2014 or everyone taps READY on their phone":"Up to 4 players \xB7 best with 2"}</div>
      <button class="btn small white refresh-btn" data-refresh ${r.refreshing?"disabled":""}>\u27F3 Refresh Historical Data</button>`}let s=new Set(n.players.map(r=>r.id));return i(n),t.addEventListener("click",r=>{lr();let o=r.target.closest("button");if(!o)return;if(de.play("tick"),o.dataset.start!==void 0)return _h();if(o.dataset.refresh!==void 0)return Rv();if(o.dataset.kick)return xn({t:"kick",playerId:o.dataset.kick});let a=o.closest("[data-k]")?.dataset.k;if(!a)return;let l=we.settings;if(o.dataset.toggle!==void 0)return xn({t:"settings",settings:{[a]:!l[a]}});let h=Number(o.dataset.d),u;if(a==="startingBankroll"){let g=gh.indexOf(l[a]);u=gh[Math.max(0,Math.min(gh.length-1,(g<0?2:g)+h))]}else if(a==="betTimer"){let g=yh.indexOf(l[a]);u=yh[Math.max(0,Math.min(yh.length-1,(g<0?0:g)+h))]}else a==="volume"?u=Math.round(Math.max(0,Math.min(1,(l.volume??.8)+h*.1))*10)/10:u=l[a]+h;xn({t:"settings",settings:{[a]:u}})}),{update:r=>i(r)}}var Ev=()=>!!ve("#tvmodal");function qi(){ve("#tvmodal")?.remove()}function Oa(n){qi();let t=Ke(`<div id="tvmodal"><div class="tvm panel white anim-pop">${n}</div></div>`);return rr.appendChild(t),t.addEventListener("click",e=>{e.target===t&&qi()}),t}function Tv(n){ve("#tvauth")||document.body.appendChild(Ke(`<div id="tvauth"><div class="panel white" style="padding:30px 40px;max-width:900px;font-size:26px"><h2 style="font-family:var(--font-display);font-weight:400;margin:0 0 10px">\u{1F4FA} Not the TV</h2><p>${Ht(n)}</p></div></div>`))}function Av(n){lr(),de.play("bell");let t=Oa(`<h2 class="outlined white thin">\u{1F4F1} New phone for ${Ht(n.name||"a player")}?</h2>
    <p>Someone on a <b>new phone</b> wants to take over <b>${Ht(n.name||"")}</b>'s seat (and see their secret clues).</p>
    <p>Only allow it if ${Ht(n.name||"they")} really did switch phones. Auto-denied in 30 seconds.</p>
    <div class="row"><button class="btn white" data-cancel>Deny <small>ESC</small></button><button class="btn green" data-ok>Allow <small>ENTER</small></button></div>`);t.dataset.req=n.reqId,ve("[data-cancel]",t).onclick=()=>{xn({t:"claimAnswer",reqId:n.reqId,allow:!1}),qi()},ve("[data-ok]",t).onclick=()=>{xn({t:"claimAnswer",reqId:n.reqId,allow:!0}),qi()}}function Rv(){if(we?.phase!=="LOBBY")return;let n=Oa(`<h2 class="outlined white thin">\u27F3 Refresh Historical Data</h2>
    <p><b>This uses the internet.</b> It contacts parkrun, Strava (if set up) and the weather archive to fetch any new runs since the last refresh, then rebuilds the local database.</p>
    <p>It can take a few minutes. The game itself never goes online \u2014 this is the only button that does.</p>
    <div class="row"><button class="btn white" data-cancel>Cancel <small>ESC</small></button><button class="btn green" data-ok>Refresh now <small>ENTER</small></button></div>`);ve("[data-cancel]",n).onclick=qi,ve("[data-ok]",n).onclick=()=>{xn({t:"refresh"}),Oa('<h2 class="outlined white thin">\u27F3 Refreshing\u2026</h2><div class="rlog"></div><div class="row"><button class="btn white" data-cancel disabled>Working\u2026</button></div>')}}function Qu(n,t){let e=ve("#tvmodal .rlog");for(e||(Oa('<h2 class="outlined white thin">\u27F3 Refreshing\u2026</h2><div class="rlog"></div><div class="row"><button class="btn white" data-cancel disabled>Working\u2026</button></div>'),e=ve("#tvmodal .rlog")),e.appendChild(Ke(`<div class="rl"><b>${Ht(n)}</b> ${Ht(t)}</div>`));e.children.length>9;)e.firstElementChild.remove()}function Cv(n,t){t&&Qu("error",t);let e=ve("#tvmodal [data-cancel]");e&&(e.disabled=!1,e.textContent=n?"Done \u2713":"Close",e.onclick=qi),Xi(n?"Historical data refreshed!":"Refresh had problems \u2014 existing data kept",n?"":"red")}var Oe=null,Wi=null,Ha=null,tf=n=>Wi==="3d"&&typeof n?.loadPlan=="function"&&(typeof n?.setBackedBy=="function"||n?.loadPlan.length>=2);function eo(){if(Oe){try{Oe.dispose()}catch(n){console.warn(n)}Oe=null,Wi=null,Ha=null,sr.innerHTML="",document.body.classList.remove("racing")}}async function ef(n,{allow2d:t=!0}={}){eo();let e=xh||await pv,i={course:e.course,park:e.park,speed:ar,...n};if(Vi?.createRaceView&&!vh)try{try{Oe=await Vi.createRaceView(sr,i)}catch(s){if(i.plan||!i.round)throw s;sr.innerHTML="",Oe=await Vi.createRaceView(sr,{...i,plan:$u(i.round)})}return Ha=i.round?.roundId||null,Wi="3d",window.__markrun.raceView=Oe,Bn({type:"raceview",kind:"3d"}),Oe}catch(s){console.error("3D race view failed, using 2D fallback",s),Bn({type:"raceview-error",msg:String(s?.message||s)}),sr.innerHTML=""}return!t||!n.plan?null:(Oe=kh(sr,i),Wi="2d",window.__markrun.raceView=Oe,Bn({type:"raceview",kind:"2d"}),Oe)}function Xu(n){(n.introLines?.length?n.introLines:[{speaker:"jeff",text:`Welcome to Finsbury Park for round ${n.number}: ${n.title}!`}]).slice(0,2).forEach(e=>Be(e.text,e.speaker,3))}function Iv(n){let t=za(),e=n.round,i=[...e.runners].sort((c,d)=>c.lane-d.lane),s=Ke(`<div class="intro">${ju()}<div class="tint"></div><div class="stagebox"></div><div class="intro-dots">${i.map(()=>"<i></i>").join("")}</div></div>`);wi.appendChild(s);let r=ve(".stagebox",s),o=(n.bailouts||[]).map(c=>`${Ht(n.players.find(d=>d.id===c.playerId)?.name||"")} got a ${mn(c.amount)} bailout from the Bank of Mum &amp; Dad`).join("<br>"),a=`<div class="title-card"><div class="anim-pop"><div class="rn outlined white">ROUND ${e.number} <span style="opacity:.8">of ${n.roundsPerGame}</span></div><div class="rt outlined" style="font-size:${e.title.length>22?104:150}px">${Ht(e.title)}</div><div class="rs">${i.length} runners. All of them Mark. Only one of them is having a good day.</div>${e.theme?.label?`<div class="theme-badge panel slant grape"><div class="unslant"><span class="tk">THEME</span>${Ht(e.theme.label)}</div></div>${e.theme.blurb?`<div class="tblurb">${Ht(e.theme.blurb)}</div>`:""}`:""}${Number(e.payoutMultiplier)>=2?'<div class="double-badge outlined">DOUBLE PAYOUT FINALE \xD72</div>':""}${e.notice?`<div class="bail panel grape" style="color:#fff">\u{1F0CF} ${Ht(e.notice)}</div><br>`:""}${o?`<div class="bail panel yellow">\u{1F4B8} ${o}</div>`:""}</div></div>`,l=c=>`<div class="rcard-wrap anim-left"><div class="rcard panel slant" style="background:${Ht(c.colour.primary)}"><div class="rp">${bi(c,300)}</div><div class="unslant">
        <div class="nick outlined">${Ht(c.nickname)}</div>
        <div class="tagl">${Ht(c.tagline||"")}</div>
        ${c.intro?`<div class="introline">\u201C${Ht(c.intro)}\u201D</div>`:""}
        ${c.publicClue?`<div class="clue"><span class="k">CLUE</span><span>${Va(c.publicClue)}</span></div>`:""}
      </div><div class="lane">LANE ${c.lane}</div><div class="odds-badge"><div class="ol">ODDS</div><div class="ov outlined">${Ht(c.odds?.display||"")}</div></div></div></div>`;async function h(c){let d=i[c];li(".intro-dots i",s).forEach((M,m)=>M.classList.toggle("on",m===c)),r.innerHTML=l(d),de.play("whoosh"),Be(d.intro||`${d.nickname}. ${d.tagline||""}`,c%2?"pam":"jeff",3),await jn(t,4800,12e3)}async function u(){t.cancelled||(li(".intro-dots i",s).forEach(c=>c.classList.remove("on")),r.innerHTML='<div class="bets-open"><div class="anim-pop"><div class="big outlined">BETS ARE OPEN!</div><div class="sub2 outlined white thin">\u{1F4F1} Grab your phones \u2014 your secret clues are waiting \u{1F92B}</div></div></div>',de.play("kaching"),Be("The book is open! Check your phones for your secret clues.","pam",3),await jn(t,3200,6e3),t.cancelled||xn({t:"introDone",roundId:e.roundId}))}let g=Date.now(),f=setInterval(()=>xn({t:"progress",phase:"INTRO",roundId:e.roundId,value:Date.now()-g}),2e3);return t.timers.push(f),(async()=>{if(!vh&&Vi?.createRaceView){let c=new Map(i.map((M,m)=>[M.id,m])),d=await ef({round:e,backedBy:{},introCards:!1,onIntroRunner:M=>t.cancelled?void 0:h(c.get(M)??0)},{allow2d:!1}).catch(()=>null);if(d&&!t.cancelled){document.body.classList.add("racing"),s.classList.add("over3d"),s.querySelector(".clouds")?.remove(),s.querySelector(".hills")?.remove(),r.innerHTML=a,de.play("fanfare"),Xu(e);let M=!1,m=setTimeout(()=>{M||(M=!0,u())},zn(15e4));t.timers.push(m);try{d.playIntro(()=>{M||(M=!0,clearTimeout(m),u())})}catch(p){console.error(p),M=!0,u()}return}}if(!t.cancelled){r.innerHTML=a,de.play("fanfare"),Xu(e),await jn(t,4200,14e3);for(let c=0;c<i.length&&!t.cancelled;c++)await h(c),t.cancelled||await En(700,t);await u()}})(),{destroy:()=>{io(t)}}}function Pv(n,t=[]){return`<div class="rc panel" data-rid="${n.id}">
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
  </div>`);wi.appendChild(i),li(".rc",i).forEach((u,g)=>{u.style.animation=`slide-up .5s ${g*.08}s cubic-bezier(.2,1.3,.4,1) both`});let s=ve(".timer",i),r=null;function o(){if(!we?.deadline||we.phase!=="BETTING"||we.revealed){s.classList.add("hidden");return}let u=Math.max(0,Math.ceil((we.deadline-Fa.serverNow())/1e3));s.classList.remove("hidden"),s.textContent=`${Math.floor(u/60)}:${String(u%60).padStart(2,"0")}`,u<=10&&u!==r&&de.play("tick"),r=u}let a=setInterval(o,250);o();let l=[["jeff","Each of you has one red-hot insider tip on your phone. Find it. Use it."],["pam","Every one of these runners is Mark. The question is: which Mark turned up?"],["jeff","Head-to-heads are a lovely way to lose money slowly."]];Number(t.payoutMultiplier)>=2?Be("Final round, and every payout is doubled! Fortunes will be made. Mostly lost.","jeff",3):t.theme?.label&&Be(`Today's theme: ${t.theme.label}. ${t.theme.blurb||""}`,"pam",2);let h=setTimeout(()=>{let u=l[Math.floor(Math.random()*l.length)];Be(u[1],u[0],1)},zn(12e3));return{destroy:()=>{clearInterval(a),clearTimeout(h)}}}function Ov(n){let t=za(),e=n.round,i=(n.revealSeq||[]).filter(a=>a&&a.bet);if(!i.length){let a=(n.betLines||[]).slice();i=n.players.flatMap(l=>(n.bets?.[l.id]||[]).map(h=>({playerId:l.id,bet:h}))).sort((l,h)=>l.bet.stake-h.bet.stake).map(l=>({...l,line:a.shift()||null}))}let s=Ke(`<div class="reveal">
    <div class="rh outlined">THE BETS ARE IN!</div>
    <div class="spot"></div>
    <div class="tally">${n.players.map(a=>`<div class="tcol panel slant" data-pid="${a.id}" style="background:${Ht(a.avatar.colour)}"><div class="unslant"><div class="who">${vn(a.avatar,64)}<span>${Ht(a.name)}</span><span class="tot num" data-tot>0pp</span></div><div class="chips"></div></div></div>`).join("")}</div>
  </div>`);wi.appendChild(s);let r=ve(".spot",s),o={};return(async()=>{de.play("drumroll",{dur:1.6/ar+.2}),Be(i.length?"Right then. Let's see the damage, smallest first.":"Nobody has bet a penny. Cowards, the lot of them.","jeff",3),await En(1800,t);for(let a=0;a<i.length&&!t.cancelled;a++){let{playerId:l,bet:h,line:u}=i[a],g=n.players.find(p=>p.id===l),f=ln(e,oo(h)),c=dr(e,h),d=Ga(e,h),M=a===i.length-1&&i.length>1;r.innerHTML=`<div class="spotcard"><div class="anim-pop"><div class="sc panel ${M?"yellow":"white"}">
        <div class="scp">${vn(g?.avatar,110)}<div class="scn">${Ht(g?.name||"")}</div></div>
        <div class="scr">${f?bi(f,150):'<span class="propicon big">\u{1F3A1}</span>'}</div>
        <div class="scb"><div class="sck">${Th(h)}${M?" \xB7 THE BIG ONE":""}</div><div class="scl">${Ht(ro(e,h))}</div><div class="sco">${Ht(d)} \xB7 pays ${mn(h.stake*c)}</div></div>
        <div class="scs num">${mn(h.stake)}</div></div></div></div>`,de.play(M?"kaching":"pop"),u?.text&&Be(u.text,u.speaker||(a%2?"pam":"jeff"),3),o[l]=(o[l]||0)+h.stake;let m=s.querySelector(`.tcol[data-pid="${l}"]`);m&&(m.querySelector(".chips").appendChild(Ke(`<div class="tchip anim-pop">${f?`<i style="background:${Ht(f.colour.primary)}"></i>`:"\u{1F3A1} "}<span>${Ht(h.type==="prop"?"Side bet":ms(f))}</span><b>${mn(h.stake)}</b></div>`)),m.querySelector("[data-tot]").textContent=mn(o[l])),await jn(t,2600,9e3)}if(!t.cancelled){if(!(n.revealSeq||[]).length){let a=n.players.map(h=>new Set((n.bets?.[h.id]||[]).filter(u=>u.type==="win").map(u=>u.runnerId))),l=null;if(a.length>=2)for(let h of a[0])a.slice(1).every(u=>u.has(h))&&(l=ln(e,h));l&&(r.innerHTML=`<div class="spotcard"><div class="same panel yellow anim-pop">Great minds\u2026 both backing ${Ht(l.nickname)}! \u{1F91D}</div></div>`,Be(`They've both gone for ${l.nickname}. Either genius, or a shared delusion.`,"pam",3),await jn(t,2200,7e3))}if(!t.cancelled){for(let a of Vi?.createRaceView&&!vh?[]:["3","2","1"]){if(t.cancelled)return;let l=Ke(`<div class="countdown outlined anim-pop">${a}</div>`);s.appendChild(l),de.play("beep"),await En(800,t),l.remove()}t.cancelled||xn({t:"revealDone",roundId:e.roundId})}}})(),{destroy:()=>io(t)}}function qu(n){let t=n.market,e=n.round;if(!t)return'<div class="mk-wait outlined white thin">Opening the market\u2026</div>';let i=new Set(n.players.filter(r=>(n.bets?.[r.id]||[]).some(o=>o.type==="inplay")).map(r=>r.id));return`<div class="mk panel white"><div class="mkh"><span class="outlined">HALFWAY MARKET</span><span class="mkt num" data-mkt></span></div>
    <div class="mks">One bet each, on your phone. Prices from the standings right now.</div>
    <div class="mkrows">${(t.standings||[]).map(r=>{let o=ln(e,r.runnerId),a=t.odds?.[r.runnerId];return`<div class="mkrow">${Zi(r.place)}<span class="rp">${o?bi(o,64):""}</span><span class="nm">${Ht(o?.nickname||r.runnerId)}</span><span class="gp">${r.place===1?"LEADS":`+${Number(r.gapS).toFixed(1)}s`}</span><span class="od num">${Ht(a?.display||"")}</span></div>`}).join("")}</div>
    <div class="mkp">${n.players.map(r=>`<span class="mkpl ${i.has(r.id)?"in":""}">${vn(r.avatar,44)}${Ht(r.name)} ${i.has(r.id)?"\u2713 IN":"\u2026"}</span>`).join("")}</div></div>`}function Fv(n){let t=za(),e=n.round,i=Ke(`<div class="race-ov"><div class="live panel slant red"><div class="unslant" style="display:flex;gap:14px;align-items:center"><span class="dot"></span>LIVE \xB7 ${Ht(e.title)}</div></div><div class="market-layer"></div></div>`);wi.appendChild(i),document.body.classList.add("racing");let s=ve(".market-layer",i),r=0,o=0,a="idle",l=null,h=null,u=null;async function g(d){a="waiting";try{d.setPaused(!0,{market:!0,marketText:"Bet on your phones \u2014 one bet each!"})}catch{}if(de.play("bell"),de.play("crowd",{dur:2,peak:.2}),Be("Halfway! The market is open. One bet each \u2014 quick!","jeff",3),xn({t:"marketOpen",roundId:e.roundId}),s.innerHTML=qu(we),u=setInterval(()=>{let M=s.querySelector("[data-mkt]");M&&we?.market?.closesAt&&(M.textContent=`${Math.max(0,Math.ceil((we.market.closesAt-Fa.serverNow())/1e3))}s`)},200),await new Promise(M=>{l=M,setTimeout(M,2e4),t.timers.push(setTimeout(()=>{we?.market||M()},3500))}),clearInterval(u),a="done",s.innerHTML="",!t.cancelled){Be("Market closed! Back to the action!","pam",2);try{d.setPaused(!1)}catch{}}}let f=Date.now(),c=setInterval(()=>xn({t:"raceTime",roundId:e.roundId,b:-1e5+(Date.now()-f)/1e3}),2e3);return t.timers.push(c),(async()=>{let d=null;if(Oe&&Ha===e.roundId&&tf(Oe))try{typeof Oe.setBackedBy=="function"?(Oe.setBackedBy(n.backedBy||{}),Oe.loadPlan(n.racePlan)):Oe.loadPlan(n.racePlan,{backedBy:n.backedBy||{}}),Oe.setPaused(!1),d=Oe,Bn({type:"raceview",kind:"3d",reused:!0})}catch(m){console.warn("could not re-use the intro view",m)}if(d||(d=await ef({round:e,plan:n.racePlan,backedBy:n.backedBy||{}})),clearInterval(c),t.cancelled)return;if(!d){i.appendChild(Ke('<div class="race-err panel red">Race view failed to load</div>'));return}document.body.classList.add("racing"),Wi==="3d"&&i.querySelector(".live")?.remove(),Wi!=="3d"?(de.play("horn"),setTimeout(()=>de.play("crowd",{dur:3,peak:.25}),300),Be("And they're off!","jeff",3)):de.play("crowd",{dur:4,peak:.2}),Bn({type:"race-start",kind:Wi}),h=setInterval(()=>{let m=d.broadcastTime;Number.isFinite(m)&&xn({t:"raceTime",roundId:e.roundId,b:m})},1e3),d.playRace(m=>{if(!(t.cancelled||!m)){if(Bn({type:"race-event",e:m.type||"line",text:m.text}),m.kind==="countdown"){de.play(m.n===0?"go":"beep"),m.n===0&&(de.play("horn"),de.play("crowd",{dur:3,peak:.28}));return}if(m.kind==="photo_finish"){de.play("stamp"),Be("It's a photo finish! Hold your breath!","pam",3);return}if(m.text&&(m.kind==="commentary"||!m.type)){a!=="waiting"&&Si.say(m.text,m.speaker||"jeff",{priority:m.priority||2});return}switch(m.type){case"overtake":Date.now()-r>1500&&(r=Date.now(),de.play("whoosh"));break;case"lead_change":de.play("whoosh"),de.play("crowd",{dur:2,peak:.18});break;case"breakaway":de.play("crowd",{dur:2.5,peak:.2});break;case"lap":a==="idle"&&we?.marketAvailable?(Bn({type:"market"}),g(d)):de.play("bell");break;case"final_stretch":de.play("crowd",{dur:6,peak:.4});break;case"finish":o++,o===1&&(de.play("fanfare"),de.play("crowd",{dur:4,peak:.45}));break;default:break}}},async()=>{t.cancelled||(Bn({type:"race-done"}),await En(2500,t),t.cancelled||xn({t:"raceDone",roundId:e.roundId}))});let M=Number(n.resumeB)||0;if(M>2)try{typeof d.seek=="function"?d.seek(M):d._debug?.seek&&(d._debug.seek(M),d.setPaused(!1)),Bn({type:"race-resume",b:M}),Xi("Back on air! Resuming the race\u2026")}catch(m){console.warn("resume failed",m)}})(),{update(d){if(a==="waiting"){if(d.market&&!d.market.open){l?.();return}s.innerHTML=qu(d)}},destroy:()=>{io(t),clearInterval(h),clearInterval(u),l?.()}}}function Bv(n){let t=null,e=-1,i=Ke('<div class="results"></div>');wi.appendChild(i);let s=n.round,r=n.results;function o(m,p){return p.players.filter(S=>(p.bets?.[S.id]||[]).some(_=>oo(_)===m)).map(S=>vn(S.avatar,50))}let a=(m,p="")=>`<div class="res-head"><div class="h outlined">${m}</div>${p?`<div class="sh">${p}</div>`:""}</div>`,l=m=>{t.cancelled||xn({t:"stageDone",stage:m})};async function h(m){let p=t,S=r.finishOrder.map(L=>{let E=ln(s,L.runnerId);return`<div class="orow panel slant ${L.place===1?"first":""}" style="${L.place===1?"":`background:${Ht(E?.colour?.primary||"#2a62e0")}`}"><div class="unslant" style="display:flex;align-items:center;gap:26px;width:100%">
        ${Zi(L.place)}<div class="rp">${E?bi(E,112):""}</div>
        <div class="nm ${L.place===1?"":"outlined white thin"}">${Ht(E?.nickname||L.runnerId)}${r.favouriteId===L.runnerId?' <span class="fav">FAV</span>':""}<small>${Ht(E?.tagline||"")}</small></div>
        <div class="bk">${o(L.runnerId,m).join("")}</div>
        <div class="tm"><span class="num">${Ht(L.timeText||Eh(L.officialS))}</span>${L.place>1&&L.gapS!=null?`<span class="gap">+${Math.round(L.gapS)}s</span>`:""}</div></div></div>`});i.innerHTML=a("THE RESULT","Official times, as recorded by the volunteers \u{1F4CB}")+`<div class="order">${S.join("")}</div>`;let _=li(".orow",i);for(let L=_.length-1;L>=0;L--){if(p.cancelled)return;_[L].classList.add("show"),L===0?(de.play("fanfare"),ur(document.body,{count:90})):de.play("pop"),await En(L===1?1600:800,p)}(r.commentary||[]).slice(0,2).forEach(L=>Be(L.text,L.speaker,3)),await jn(p,5500,14e3),l(0)}async function u(){let m=t,p=r.finishOrder.map(v=>v.runnerId),S=new Map((r.reveal||[]).map(v=>[v.runnerId,v]));i.innerHTML=a("WHO WERE THEY REALLY?","Every runner was a real Mark, on a real Saturday \u{1F575}\uFE0F \u2014 details on your phones")+`<div class="reveal-grid">${p.map((v,L)=>{let E=ln(s,v),T=S.get(v)||{},R=r.finishOrder[L];return`<div class="rv" data-i="${L}">
        <div class="face front" style="background:${Ht(E?.colour?.primary)}"><div><div class="rp">${E?bi(E,220):""}</div><div class="q outlined">?</div></div></div>
        <div class="face back"><div class="bh" style="background:${Ht(E?.colour?.primary)}"><div class="rp">${E?bi(E,74):""}</div><div class="n">${Ht(E?.nickname||v)}</div></div>
          <div class="date">${Ht(T.dateText||T.date||T.headline||"")}</div>
          <div class="time num">${Ht(R?.timeText||"")}</div>
          ${T.stravaTitle?`<div class="strava"><span class="k">STRAVA TITLE</span>\u201C${Ht(T.stravaTitle)}\u201D</div>`:""}
          ${T.wasPB||T.pbKind?`<div class="pb">${T.pbKind==="finsbury"?"COURSE PB!":"PB! \u{1F3C5}"}</div>`:""}
          <div class="place">${Zi(R?.place||L+1)}</div>
        </div></div>`}).join("")}</div>`;let _=li(".rv",i);await En(900,m);for(let v=_.length-1;v>=0;v--){if(m.cancelled)return;_[v].classList.add("flip");let L=S.get(p[v]),E=ln(s,p[v]);de.play(v===0?"fanfare":"reveal"),(v===0||v===_.length-1)&&Be(`${v===0?"The winner":"And in last place"}, ${E?.nickname}: ${L?.headline||L?.dateText||""}`,v===0?"jeff":"pam",2),await En(v===0?3200:2600,m)}await jn(m,6e3,12e3),l(1)}async function g(m){let p=t,S=r.clueReview||[],_=S.filter(E=>E.highlight).slice(0,3);if(_.length||(_=S.filter(E=>E.verdict!=="neutral").slice(0,3)),!_.length){i.innerHTML="",await En(300,p),l(2);return}let v=new Map((m.clues||[]).map(E=>[E.id,E]));i.innerHTML=a("THE CLUES THAT MATTERED","Useful\u2026 or a red herring? \u{1F41F}")+`<div class="clue-list big">${_.map(E=>{let T=ln(s,E.runnerId),R=v.get(E.clueId),x=m.players.find(A=>A.id===E.owner),y=E.owner==="public"?`\u{1F4FA} PUBLIC CLUE${R?.label?` \xB7 ${Ht(R.label.toUpperCase())}`:""}`:`${R?.tier==="hot"?"\u{1F525}":"\u{1F92B}"} ${Ht(x?.name||"Secret")}'S ${R?.tier==="hot"?"HOT TIP":"SECRET CLUE"}`,b={useful:"USEFUL \u2713",red_herring:"RED HERRING \u{1F41F}",neutral:"MEH"}[E.verdict]||Ht(E.verdict);return`<div class="cl panel"><div class="rp">${T?bi(T,100):""}</div><div class="txt"><div class="own">${y} \xB7 ${Ht(T?.nickname||"")}</div>${Ht(E.text||R?.text||"")}${E.quip?`<div class="quip">${Ht(E.quip)}</div>`:""}</div><div class="verdict ${Ht(E.verdict)}">${b}</div></div>`}).join("")}</div>`;let L=li(".cl",i);for(let E=0;E<L.length;E++){if(p.cancelled)return;L[E].classList.add("show"),setTimeout(()=>{de.play("sting"),de.play("stamp")},zn(250)),_[E].quip&&Be(_[E].quip,E%2?"jeff":"pam",2),await jn(p,2800,8e3)}await jn(p,3500,9e3),l(2)}async function f(m){let p=t,S=m.settings.drinkingMode;i.innerHTML=a("PAY DAY","The bookie settles up \u{1F4B0}")+`<div class="payouts">${m.players.map(E=>{let T=r.payouts?.[E.id]||{bets:[],net:0,bankroll:E.bankroll},R=(T.bets||[]).map(x=>{let y=Ah(x);return`<div class="pl ${y.kind==="won"?"won":y.kind==="push"?"push":"lost"}"><span class="mark">${y.kind==="won"?"\u2705":y.kind==="push"?"\u21A9\uFE0F":"\u274C"}</span><div class="lb">${Ht(ro(s,x))}<small>staked ${mn(x.stake)} \xB7 ${Ht(Ga(s,x))}${y.kind==="won"?` \xB7 returned ${mn(x.returned)}`:""}</small></div><div class="r">${y.text}</div></div>`}).join("")||'<div class="pl show"><div class="lb">No bets placed. Sensible. Boring.</div></div>';return`<div class="pay panel slant" data-pid="${E.id}" style="background:${Ht(E.avatar.colour)}"><div class="unslant" style="display:flex;flex-direction:column;height:100%">
        <div class="who">${vn(E.avatar,90)}${Ht(E.name)}</div>
        <div class="lines">${R}</div>
        <div class="net num" data-net="${T.net}">${Yi(0)}</div>
        <div class="bank">Bankroll: <span data-bank>${mn(T.bankroll-T.net)}</span></div>
        ${S?c(T.net,E.id):""}
      </div></div>`}).join("")}</div>`,await En(600,p);for(let E of li(".pl",i)){if(p.cancelled)return;E.classList.add("show"),de.play(E.classList.contains("won")?"kaching":"pop"),await En(700,p)}await En(400,p);let _=null,v=null;for(let E of m.players){let T=r.payouts?.[E.id];if(!T)continue;let R=i.querySelector(`.pay[data-pid="${E.id}"]`),x=R.querySelector(".net"),y=R.querySelector("[data-bank]");x.classList.add(T.net>0?"green":T.net<0?"red":"white"),x.classList.add("outlined"),$a(x,0,T.net,zn(1800),b=>Yi(b)),$a(y,T.bankroll-T.net,T.bankroll,zn(1800),b=>mn(b)),(!_||T.net>_.net)&&(_={...T,p:E,panel:R}),(!v||T.net<v.net)&&(v={...T,p:E,panel:R})}if(await En(1900,p),p.cancelled)return;let L=m.settings.drinkingMode?(r.drinks||[]).filter(E=>!E.playerId):[];L.length&&i.appendChild(Ke(`<div class="drink-all panel yellow anim-pop">\u{1F37B} ${L.map(E=>Ht(E.text)).join(" \xB7 ")}</div>`)),_&&_.net>0&&(de.play("kaching"),ur(document.body,{count:140}),_.panel.classList.add("big-win"),_.panel.appendChild(Ke('<div class="mood">\u{1F911}</div>')),Be(zv(_.p.name,_.net),"jeff",3)),v&&v.net<0&&(setTimeout(()=>de.play("sadtrombone"),zn(900)),v.panel.classList.add("big-loss"),v.panel.appendChild(Ke('<div class="raincloud">\u{1F327}\uFE0F</div>')),Be(Hv(v.p.name,v.net),"pam",3)),!_?.net&&!v?.net&&Be("Nobody won, nobody lost. The bookie is furious.","pam",2),await jn(p,7e3,14e3),l(3)}function c(m,p){if(Array.isArray(r.drinks))return r.drinks.filter(_=>_.playerId===p).map(_=>`<div class="drink panel yellow">\u{1F37A} ${Ht(_.text)}</div>`).join("");if(m<0){let S=Math.min(5,Math.max(1,Math.ceil(-m/100)));return`<div class="drink panel yellow">\u{1F37A} Take ${S} sip${S>1?"s":""}!</div>`}if(m>0){let S=Math.min(5,Math.max(1,Math.ceil(m/150)));return`<div class="drink panel yellow">\u{1F449} Hand out ${S} sip${S>1?"s":""}</div>`}return'<div class="drink panel yellow">\u{1F964} Water break</div>'}async function d(m){let p=t,S=r.awards||[];if(!S.length&&!r.archetype?.label){await En(200,p),l(4);return}i.innerHTML=a("ROUND AWARDS","\u{1F3C6}")+`<div class="awards">${r.archetype?.label?`<div class="arch panel yellow anim-pop"><div class="al display">${Ht(r.archetype.label)}</div><div class="ab">${Ht(r.archetype.blurb||"")}</div></div>`:""}${S.map(_=>{let v=m.players.find(L=>L.id===_.playerId);return`<div class="award panel slant ${v?"":"yellow"}" style="${v?`background:${Ht(v.avatar.colour)}`:""}"><div class="unslant" style="display:flex;align-items:center;gap:28px"><span class="trophy">\u{1F3C6}</span>${v?vn(v.avatar,84):""}<div><div class="at outlined white thin">${Ht(_.title)}</div><div class="ax" style="color:${v?"#fff":"var(--ink)"}">${Ht(_.text||"")}</div></div></div></div>`}).join("")}</div>`;for(let _ of li(".award",i)){if(p.cancelled)return;_.classList.add("show"),de.play("fanfare"),await En(1500,p)}S[0]&&Be(`${S[0].title}! ${S[0].text||""}`,"jeff",2),await jn(p,6500,12e3),l(4)}function M(m){if(m.resultsStage===e)return;t&&io(t),t=za(),e=m.resultsStage,Si.clear(),to.innerHTML="";let p=m.resultStages[m.resultsStage];if(Bn({type:"results-stage",stage:p}),p!=="order"&&Oe&&eo(),p==="order"&&Oe&&Wi==="3d")try{Oe.showPodium?.(r,{card:!1})}catch(S){console.warn(S)}else Oe&&p==="order"&&eo();document.body.classList.toggle("racing",!!Oe),({order:h,reveal:u,clues:g,payouts:f,awards:d}[p]||(async()=>l(m.resultsStage)))(m).catch(S=>console.error(S))}return r&&M(n),{update:m=>{m.results&&M(m)},destroy:()=>{t&&io(t),eo()}}}function zv(n,t){let e=[`${n} cleans up! Up ${Ai(t)}. Insufferable for the rest of the evening.`,`Kerching! ${n} is ${Ai(t)} richer and won't let anyone forget it.`,`${n} read that race like a book.`];return e[Math.floor(Math.random()*e.length)]}function Hv(n,t){let e=[`Oh dear. ${n} is down ${Ai(-t)}. The bank of Mark is not sympathetic.`,`${n} backed the wrong Mark. It happens to the best of us. Mostly to ${n}.`,`That's ${Ai(-t)} gone, ${n}. Thoughts and prayers.`];return e[Math.floor(Math.random()*e.length)]}function $v(n,{compact:t=!1}={}){let e=Ku(n.players),i=n.history.at(-1);return[...n.players].sort((s,r)=>r.bankroll-s.bankroll).map(s=>{let r=e.get(s.id),o=i?.nets?.[s.id]??0;return`<div class="srow panel slant ${r===1&&!t?"lead":""}" style="${r===1&&!t?"":`background:${Ht(s.avatar.colour)}`}"><div class="unslant" style="display:flex;align-items:center;gap:26px;width:100%">
      ${Zi(r)}${vn(s.avatar,t?70:96)}<div class="nm">${Ht(s.name)}</div>
      ${t?"":`<span class="dl ${o>0?"up":o<0?"down":"flat"}">${Yi(o)}</span>`}
      <div class="bk num">${mn(s.bankroll)}</div>
      ${!t&&s.ready?'<span class="tag" style="background:var(--grass);color:#fff">\u2713 READY</span>':""}
    </div></div>`}).join("")}function Vv(n){let t=n.history,e=n.settings.startingBankroll,i=n.players.map(M=>({p:M,pts:[e,...t.map(m=>m.bankrolls?.[M.id]??e)]})),s=Math.max(2,(t.length||0)+1),r=Math.max(e*1.2,...i.flatMap(M=>M.pts)),o=540,a=420,l=36,h=M=>l+M*(o-l*2)/(s-1),u=M=>a-l-M/r*(a-l*2),g=[0,.5,1].map(M=>`<line x1="${l}" x2="${o-l}" y1="${u(r*M)}" y2="${u(r*M)}" stroke="#14183c22" stroke-width="2"/>`).join(""),f=`<line x1="${l}" x2="${o-l}" y1="${u(e)}" y2="${u(e)}" stroke="#14183c55" stroke-width="2" stroke-dasharray="8 8"/>`,c=i.map(({p:M,pts:m})=>`<polyline fill="none" stroke="#14183c" stroke-width="12" stroke-linejoin="round" stroke-linecap="round" points="${m.map((p,S)=>`${h(S)},${u(p)}`).join(" ")}"/><polyline fill="none" stroke="${Ht(M.avatar.colour)}" stroke-width="6" stroke-linejoin="round" stroke-linecap="round" points="${m.map((p,S)=>`${h(S)},${u(p)}`).join(" ")}"/>${m.map((p,S)=>`<circle cx="${h(S)}" cy="${u(p)}" r="8" fill="${Ht(M.avatar.colour)}" stroke="#14183c" stroke-width="4"/>`).join("")}`).join(""),d=Array.from({length:s},(M,m)=>`<text x="${h(m)}" y="${a-6}" text-anchor="middle" font-family="Lilita One" font-size="20" fill="#14183c">${m===0?"Start":`R${m}`}</text>`).join("");return`<svg viewBox="0 0 ${o} ${a}" width="100%" height="440">${g}${f}${c}${d}</svg>`}function Gv(n,t){let e=n.results;if(!e?.finishOrder?.length)return"";let i=ln(n.round,e.finishOrder[0].runnerId),s=n.players.map(o=>{let a=e.payouts?.[o.id],l=(a?.bets||[]).filter(h=>h.won).sort((h,u)=>u.returned-h.returned)[0];return`<div class="rcp">${vn(o.avatar,54)}<span class="rn">${Ht(o.name)}</span><span class="rx">${l?`\u2705 ${Ht(ro(n.round,l))}`:(a?.bets||[]).length?"\u274C nothing came in":"\u{1F648} no bets"}</span><span class="rnet ${a?.net>0?"up":a?.net<0?"down":""}">${Yi(a?.net||0)}</span></div>`}).join(""),r=(e.awards||[]).slice(0,2).map(o=>`<span class="raw">\u{1F3C6} ${Ht(o.title)}</span>`).join("");return`<div class="recap panel white ${t?"narrow":""}"><div class="rch"><span class="rp">${i?bi(i,64):""}</span><span>Last race: <b>${Ht(i?.nickname||"")}</b> won${e.archetype?.label?` \xB7 ${Ht(e.archetype.label)}`:""}</span>${r}</div>${s}</div>`}function Wv(n){let t=Ke('<div class="score"></div>');wi.appendChild(t);let e=null;function i(r){let a=r.roundNumber>=r.roundsPerGame?"\u{1F3C1} That was the final round! Champion next\u2026":r.roundNumber===r.roundsPerGame-1?"Up next: THE FINAL ROUND \u{1F62C}":`Up next: Round ${r.roundNumber+1} of ${r.roundsPerGame}`,l=r.history.length>=2;t.innerHTML=`<div class="res-head"><div class="h outlined">STANDINGS</div><div class="sh">After round ${r.roundNumber} of ${r.roundsPerGame}</div></div>
      <div class="standings ${l?"":"solo"}">${$v(r)}</div>
      ${l?`<div class="chart panel white"><div class="ct">The money, round by round</div>${Vv(r)}</div>`:""}
      ${Gv(r,l)}
      <div class="upnext panel yellow">${a}<span class="cd"></span></div>`}i(n);let s=[...n.players].sort((r,o)=>o.bankroll-r.bankroll);if(s.length>=2){let r=s[0].bankroll-s[1].bankroll;Be(r===0?"It's dead level at the top!":`${s[0].name} leads by ${Ai(r)}.`,"jeff",2)}else s[0]&&Be(`${s[0].name} is on ${Ai(s[0].bankroll)}.`,"jeff",2);return e=setInterval(()=>{let r=t.querySelector(".cd");if(!(!r||!we))if(we.deadline&&we.phase==="SCOREBOARD"){let o=Math.max(0,Math.ceil((we.deadline-Fa.serverNow())/1e3));r.textContent=` \u2014 starting in ${o}\u2026`}else r.textContent=we.players.length?" \u2014 tap READY on your phones":""},300),{update:i,destroy:()=>clearInterval(e)}}function Xv(n){let t=[...n.players].sort((d,M)=>M.bankroll-d.bankroll),e=t[0],i=t.length>1&&t[1].bankroll===e?.bankroll,s=(n.history||[]).flatMap(d=>(d.awards||[]).map(M=>({title:M.title,text:`Round ${d.round}`,playerId:M.playerId}))),r=[...n.superlatives||[],...s].filter(d=>d&&d.title),o=Ke(`<div class="finale"><div class="rays"></div><div class="fconf"></div>
    <div class="champ">${e?`<div class="h outlined">${i?"IT'S A DRAW!":"CHAMPION!"}</div>
      <div class="who"><div class="crown">\u{1F451}</div>${vn(e.avatar,200)}<div class="nm outlined white">${Ht(i?t.filter(d=>d.bankroll===e.bankroll).map(d=>d.name).join(" & "):e.name)}</div><div class="bk num">${mn(e.bankroll)}</div></div>`:'<div class="h outlined">GAME OVER</div>'}
      <div class="others">${t.slice(1).map((d,M)=>`<div class="srow panel slant" style="background:${Ht(d.avatar.colour)}"><div class="unslant" style="display:flex;align-items:center;gap:20px">${Zi(M+2)}${vn(d.avatar,64)}<div class="nm">${Ht(d.name)}</div><div class="bk num">${mn(d.bankroll)}</div></div></div>`).join("")}</div>
    </div>
    <div class="reel">${r.length?'<div class="reel-h outlined white thin">THE NIGHT IN AWARDS</div><div class="reel-card"></div><div class="reel-dots"></div>':""}</div>
  </div>`);wi.appendChild(o);let a=ve(".fconf",o);de.play("drumroll",{dur:1.6}),setTimeout(()=>{de.play("fanfare"),de.play("crowd",{dur:5,peak:.45}),ur(a,{count:200,duration:4500,contained:!0,zIndex:0})},zn(1700));let l=setInterval(()=>ur(a,{count:50,duration:3500,contained:!0,zIndex:0}),zn(7e3));e&&Be(i?"We have a dead heat! Nobody wins, which is very British.":`Ladies and gentlemen, your MARKRUN champion: ${e.name}, with ${Ai(e.bankroll)}!`,"jeff",3);let h=0,u=null,g=ve(".reel-card",o);function f(){if(!g||!r.length)return;let d=r[h%r.length],M=n.players.find(m=>m.id===d.playerId);g.innerHTML=`<div class="rc2 panel ${M?"":"yellow"} anim-pop" style="${M?`background:${Ht(M.avatar.colour)}`:""}"><div class="tro">\u{1F3C6}</div>${M?vn(M.avatar,84):""}<div class="t outlined ${M?"white":""} thin">${Ht(d.title)}</div><div class="x">${Ht(d.text||"")}</div></div>`,ve(".reel-dots",o).innerHTML=r.map((m,p)=>`<i class="${p===h%r.length?"on":""}"></i>`).join(""),de.play("reveal"),h<r.length&&Be(`${d.title}! ${d.text||""}`,h%2?"pam":"jeff",2),h++}let c=setTimeout(()=>{f(),u=setInterval(f,zn(6500))},zn(6500));return setTimeout(()=>Be("Press space, or tap ready on your phones, to go again.","pam",1),zn(6500*(r.length+1))),{destroy:()=>{clearInterval(l),clearInterval(u),clearTimeout(c)}}}
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
